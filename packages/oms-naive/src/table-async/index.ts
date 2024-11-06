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
      console.error('table Instance is not found, are you bind ref');
      return;
    }
    return tableRef.value;
  };
  const reload = () => getRef()?.reload();
  const getKeys = () => getRef()?.cKeys;
  const getRows = () => getRef()?.cRows;
  return { tableRef, reload, getKeys, getRows };
};
