import type { DataTableRowKey } from 'naive-ui';
import { ref } from 'vue';

export { default as OmsTableAsync } from './src/Table.vue';

export type TableAsyRef<Row> = {
  cKeys: DataTableRowKey[];
  cRows: Row[];
  setKeys: (p: DataTableRowKey[]) => void;
  setRows: (p: Row[]) => void;
  getKeys: () => DataTableRowKey[];
  getRows: () => Row[];
  getSource: () => Row[];
  cleanCheck: () => void;
  reload: () => void;
};

export const useAsyncTable = <T>() => {
  const tableRef = ref<TableAsyRef<T>>();
  const getRef = () => {
    if (!tableRef.value) {
      console.error('table Instance is not found, are you bind ref, 数需要在 onMounted后调用');
      return;
    }
    return tableRef.value;
  };
  const reload = () => getRef()?.reload();
  const getKeys = () => getRef()?.cKeys;
  const getRows = () => getRef()?.cRows;
  const setKeys = (keys: DataTableRowKey[]) => getRef()?.setKeys(keys);
  const setRows = (rows: T[]) => getRef()?.setRows(rows);
  const getSource = () => getRef()?.getSource();
  return { tableRef, reload, getKeys, getRows, setKeys, setRows, getSource };
};
