import type { DataTableRowKey } from 'naive-ui';
import { ref } from 'vue';

export { default as OmsTableAsync } from './src/Table.vue';

export type TableAsyRef<Row> = {
  cKeys: DataTableRowKey[];
  cRows: Row[];
  setKeys: (p: DataTableRowKey[]) => void;
  setRows: (p: Row[]) => void;
  cleanCheck: () => void;
  reload: () => void;
};

export const useAsyncTable = <T>() => {
  const tableRef = ref<TableAsyRef<T>>();
  const getRef = () => {
    if (!tableRef.value) {
      console.error('table Instance is not found, are you bind ref, ref函数需要在 onMounted内调用');
      return;
    }
    return tableRef.value;
  };
  const reload = () => getRef()?.reload();
  const getKeys = () => getRef()?.cKeys;
  const getRows = () => getRef()?.cRows;
  const setKeys = (keys: DataTableRowKey[]) => getRef()?.setKeys(keys);
  return { tableRef, reload, getKeys, getRows, setKeys };
};
