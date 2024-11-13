import { MD5 } from 'crypto-js';
import type { DataTableBaseColumn, DataTableColumnKey, DataTableColumns } from 'naive-ui';
import type { Sorter } from 'naive-ui/es/data-table/src/interface';
import { defineStore } from 'pinia';
import type { VNodeChild } from 'vue';

type Columns = DataTableColumns<any>;
type Config = Array<{ key: DataTableColumnKey; title: string | undefined; show: boolean; column: DataTableBaseColumn; order: number }>;
type Call = {
  render: (rowData: any, rowIndex: number) => VNodeChild;
  sorter: boolean | Sorter | 'default';
};
type TableState = {
  tables: {
    [x: string]: { config: Config; field: string };
  };
  fn: { [x: string]: { [key: DataTableColumnKey]: Call } };
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
    const item = columns[i] as DataTableBaseColumn;
    const key = String(item.key || item.type);
    cfg.push({
      order: i,
      key,
      title: item.title as string | undefined,
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
    fn: {},
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
      if (!this.fn[id]) this.fn[id] = {};
      const fnObj = this.fn[id]!;
      const field = getField(columns);
      for (const item of columns as DataTableBaseColumn[]) {
        const call = {} as Call;
        if (item.render) call.render = item.render;
        if (item.sorter) call.sorter = item.sorter;
        fnObj[item.key] = call;
      }
      if (cols) {
        // 检查字段变化 更新缓存
        if (cols.field != field) this.setColsConfig(uid, setCols(columns, cols.config), field);
        for (const item of cols.config) {
          if (fnObj[item.key]) {
            const call = fnObj[item.key]!;
            if (call.render) item.column.render = call.render;
            if (call.sorter) item.column.sorter = call.sorter;
          }
        }
        return cols.config;
      }
      this.tables[id] = { config: setCols(columns, []), field };
      return this.tables[id]!.config;
    },
    /** 配置列配置 */
    setColsConfig(uid: string, config: Config, field?: string) {
      const id = this.getID(uid);
      this.tables[id]!.config = config;
      if (field) this.tables[id]!.field = field;
    },
    /** 重置 */
    resetTableCols(uid: string) {
      delete this.tables[uid];
    },
    /** 清理 */
    cleanTableCols() {
      this.tables = {};
    },
  },
});
