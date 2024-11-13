import type { DataTableRowKey } from 'naive-ui';
import { ref, toRaw } from 'vue';

export { default as OmsTableAsync } from './src/Table.vue';

export type TableConfig<Q = { [k: string]: any }> = {
  /** 请求参数处理 */
  paramsHandler?: (p: Q) => { [k: string]: any };
  /** 监听filter变化,重新查询 */
  watchFilter?: boolean;
  /** 启用列配置 默认:true */
  colsConfig?: boolean;
  /** 请求参数 */
  params: Q;
  /** 列id */
  rowKey: string;
};

export type TableAsyRef<Row, Q = { [k: string]: any }> = {
  cKeys: DataTableRowKey[];
  cRows: Row[];
  /** 设置table 已选中的key */
  setKeys: (p: DataTableRowKey[]) => void;
  /** 设置table 已选中的记录 */
  setRows: (p: Row[]) => void;
  /** 获取table 已选中的key */
  getKeys: () => DataTableRowKey[];
  /** 获取table 已选中的记录 */
  getRows: () => Row[];
  /** 获取table 当前的数据 */
  getSource: () => Row[];
  /** 清空已选 */
  cleanCheck: () => void;
  /** 页码重置为1,重新查询 */
  reload: () => void;
  /** 当前页重新查询 */
  refresh: () => void;
  qParams: Q;
};

export const useAsyncTable = <T, Q = any>() => {
  const tableRef = ref<TableAsyRef<T, Q>>();
  const getRef = () => {
    if (!tableRef.value) {
      console.error('table Instance is not found, are you bind ref, 数需要在 onMounted后调用');
      return;
    }
    return tableRef.value;
  };
  const reload = () => getRef()!.reload();
  const getKeys = () => toRaw(getRef()!.cKeys);
  const getRows = () => toRaw(getRef()!.cRows);
  /** 如果需要使用cRows 不要使用setKeys 会导致数据选中不一致 */
  const setKeys = (keys: DataTableRowKey[]) => getRef()?.setKeys(keys);
  const setRows = (rows: T[]) => getRef()!.setRows(rows);
  const getSource = () => getRef()!.getSource();
  const refresh = () => getRef()!.refresh();
  const cleanCheck = () => getRef()!.cleanCheck();
  return { tableRef, reload, getKeys, getRows, setKeys, setRows, cleanCheck, getSource, refresh };
};
