<template>
  <slot name="form" v-bind="{ collapsed, reload, qParams, TableCtrl }"> </slot>
  <n-flex class="m-t-sm m-b-sm" justify="space-between">
    <span>
      <slot name="bar-left"></slot>
    </span>
    <component v-if="buttonGrop == 'default'" :is="TableCtrl()"></component>
  </n-flex>
  <n-data-table
    remote
    size="small"
    :columns="columns"
    :data="tableSorce"
    :pagination="pagination"
    :loading="isLoading"
    :row-key="(rows: any) => rows[rowKey]"
    :scroll-x="scrollX"
    :max-height="maxHeight || 500"
    :summary="summary"
    :checked-row-keys="cKeys"
    @update:sorter="handleSorterChange"
    @update:checked-row-keys="handleCheck"
  />
</template>
<script setup lang="tsx" generic="T extends object, A extends Function, Q extends object">
import { useDialogPro, usePagination, useTableChecked, type TableConfig } from '@oms/naive';
import { cloneDeep, isArray, isFunction } from 'lodash-es';
import { NDataTable, NFlex, type DataTableColumns, type DataTableCreateSummary, type DataTableRowKey, type DataTableSortState } from 'naive-ui';
import type { CompareFn } from 'naive-ui/es/data-table/src/interface';
import { h, onMounted, ref, toRaw, watch } from 'vue';
import TableBtnGroup from './TableBtnGroup.vue';
const columns = defineModel<DataTableColumns<T>>('columns', { default: [] });

type TablePorps = {
  /** 请求 */
  api: A;
  /** 配置参数*/
  config: TableConfig<Q>;
  /** 合计行 */
  summary?: DataTableCreateSummary<T>;
  /** 立即查询 default: true */
  query?: boolean;
  /** 表格高度 */
  maxHeight?: string | number;
  /** 查询重置按钮组位置 需要手动添加 <component justify="end" :is="TableCtrl()"></component> */
  buttonGrop?: 'top' | 'default';
};
const { api, config, query = true, buttonGrop = 'default' } = defineProps<TablePorps>();
const rowKey = config.rowKey;
const collapsed = ref(false);
const Dialog = useDialogPro();
const scrollX = columns.value.reduce((pre, curr) => pre + Number(curr.width) || 0, 0);

const { pagination, setPageProps, reload, setQuery } = usePagination();
const { cKeys, cRows, handleCheck, cleanCheck } = useTableChecked<T>(rowKey);
const tableSorce = ref<T[]>([]);
const isLoading = ref(false);
let copiedData = [] as T[];
const qParams = ref(cloneDeep(config.params));
const onReset = () => {
  qParams.value = cloneDeep(config.params);
  reload();
};

const setKeys = (keys: DataTableRowKey[]) => (cKeys.value = keys);

const setRows = (rows: T[]) => {
  cRows.value = rows;
  setKeys(rows.map((item: any) => item[rowKey]));
};

const getSource = () => toRaw(tableSorce.value);

const onQuery = setQuery(async () => {
  const { pageSize = 10, page = 1 } = pagination;
  try {
    isLoading.value = true;
    let params = {
      limit: pageSize,
      offset: (page - 1) * pageSize,
    };
    if (config.paramsHandler) params = { ...params, ...config.paramsHandler(toRaw(qParams.value)) };
    const { data, status, message } = await api(params);
    if (status != 'success') {
      Dialog.error(message);
      return;
    }
    copiedData = cloneDeep(data.list);
    tableSorce.value = data.list;
    setPageProps({ itemCount: data.count });
  } finally {
    isLoading.value = false;
  }
});

const handleSorterChange = (sorter: DataTableSortState) => {
  if (isLoading.value) return;
  isLoading.value = true;
  if (isArray(sorter)) console.error('sorter 暂不支持 multiple 排序');
  // 异步排序 => sorter=true 暂定
  // if (isBoolean(sorter.sorter) && sorter.sorter) qParams.value.sort = { [sorter.columnKey]: sorter.order };
  // 前端排序 => 根据传递的sort函数处理
  if (isFunction(sorter.sorter)) {
    const compareFn = sorter.sorter as CompareFn<T>;
    const orderedData = cloneDeep(copiedData);
    if (sorter.order == 'ascend') orderedData.sort(compareFn);
    if (sorter.order == 'descend') orderedData.sort(compareFn).reverse();
    tableSorce.value = orderedData;
  }
  isLoading.value = false;
};

const TableCtrl = () => {
  const { colsConfig = true } = config;
  return h(TableBtnGroup, {
    collapsed: collapsed.value,
    'onUpdate:collapsed': (value) => (collapsed.value = value),
    setCols: (cols: DataTableColumns<T>) => (columns.value = cols),
    columns: columns.value,
    onReload: reload,
    colsConfig,
    onReset,
  });
};

query && onQuery();
onMounted(() => {
  const { watchFilter } = config;
  watchFilter && watch(() => qParams.value.filter, reload, { deep: 1 });
});
defineExpose({ cKeys, cRows, setKeys, setRows, cleanCheck, reload, getSource, refresh: onQuery, qParams });
</script>
