import { MD5 } from 'crypto-js';
import { isFunction } from 'lodash-es';
import { defineStore } from 'pinia';

type Columns = Array<{ [x: string]: any }>;
type Config = Array<{ key: string; title: string; show: boolean; column: { [x: string]: any }; order: number }>;
type TableState = {
  tables: {
    [x: string]: { config: Config; field: string };
  };
  render: { [x: string]: Map<string, Function> };
};

const getField = (columns: Columns) => {
  return MD5(JSON.stringify(columns)).toString();
};
const setCols = (columns: Columns, config: Config) => {
  const getShow = (key: string) => {
    if (!config.length) return true;
    const isFind = config.find((item) => item.key == key);
    if (isFind) return isFind.show;
    return true;
  };
  const cfg: Config = [];
  for (let i = 0; i < columns.length; i++) {
    const item = columns[i]!;
    const key = item.key || item.type;
    cfg.push({
      order: i,
      key,
      title: item.title,
      show: getShow(key),
      column: item,
    });
  }
  return cfg;
};

export const useTableColStore = defineStore('APP_TableCols_STORE', {
  persist: {
    pick: ['tables'],
  },
  state: (): TableState => ({
    tables: {},
    render: {},
  }),
  actions: {
    /** 每个用户使用不同的缓存id */
    getID(uid: string) {
      return uid;
    },

    /** 1.初始化列配置 */
    initTableCols(uid: string, columns: Columns) {
      const id = this.getID(uid);
      const cols = this.tables[id];
      // 缓存render
      if (!this.render[id]) this.render[id] = new Map();
      const render = this.render[id];
      const field = getField(columns);
      for (const item of columns) {
        isFunction(item.render) && render.set(item.key, item.render);
      }
      if (cols) {
        // 检查字段变化 更新缓存
        if (cols.field != field) this.setColsConfig(uid, setCols(columns, cols.config), field);

        for (const item of cols.config) {
          if (render.has(item.key)) item.column.render = render.get(item.key);
        }
        return cols.config;
      }
      this.tables[id] = { config: setCols(columns, []), field };
      return this.tables[id].config;
    },
    /** 配置列配置 */
    setColsConfig(uid: string, config: Config, field?: string) {
      const id = this.getID(uid);
      this.tables[id]!.config = config;
      if (field) this.tables[id]!.field = field;
    },
    /** 重置 */
    resetTableCols() {
      this.tables = {};
    },
  },
});
