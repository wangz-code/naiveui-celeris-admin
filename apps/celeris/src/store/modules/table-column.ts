import { APP_TableCols_STORE_ID } from 'celeris-constants';
import { isFunction } from 'lodash-es';
import { defineStore } from 'pinia';

type Columns = Array<{ [x: string]: any }>;
type Config = Array<{ key: string; title: string; show: boolean; column: { [x: string]: any }; order: number }>;
type TableState = {
  tables: {
    [x: string]: Config;
  };
  render: { [x: string]: Map<string, Function> };
};
export const useTableColStore = defineStore(APP_TableCols_STORE_ID, {
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
      const userStore = useUserStore();
      return userStore.userInfo.username + '_' + uid;
    },
    /** 1.初始化列配置 */
    initTableCols(uid: string, columns: Columns) {
      const id = this.getID(uid);
      // 缓存render
      if (!this.render[id]) this.render[id] = new Map();
      const render = this.render[id];
      for (const item of columns) {
        isFunction(item.render) && render.set(item.key, item.render);
      }
      if (this.tables[id]) {
        for (const item of this.tables[id]) {
          if (render.has(item.key)) item.column.render = render.get(item.key);
        }
        return this.tables[id];
      }
      const config: Config = [];
      for (let i = 0; i < columns.length; i++) {
        const item = columns[i];
        config.push({
          order: i,
          key: item.key || item.type,
          title: item.title,
          show: true,
          column: item,
        });
      }
      this.tables[id] = config;
      return this.tables[id];
    },
    /** 配置列配置 */
    setColsConfig(uid: string, config: Config) {
      const id = this.getID(uid);
      this.tables[id] = config;
    },
    /** 重置 */
    resetTableCols() {
      this.tables = {};
    },
  },
});
