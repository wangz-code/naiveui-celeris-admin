<template>
  <slot name="form" v-bind="{ collapsed, reload, qParams }"></slot>
  <n-flex class="m-t-sm m-b-sm" justify="space-between">
    <span>
      <slot name="bar-left"></slot>
    </span>
    <n-button-group>
      <oms-ibtn attr-type="button" title="查询" type="info" :icon="Search" @click="reload"></oms-ibtn>
      <oms-ibtn attr-type="reset" title="重置" :icon="Refresh" @click="onReset"></oms-ibtn>
      <cols-config :columns="columns" :onChange="setCols"> </cols-config>
      <n-button attr-type="button" @click="collapsed = !collapsed">
        <template #icon>
          <oms-icon :component="collapsed ? ChevronsDown : ChevronsUp" :size="16" />
        </template>
      </n-button>
    </n-button-group>
  </n-flex>
  <n-data-table
    remote
    size="small"
    :columns="columns"
    :data="tableSorce"
    :pagination="pagination"
    :loading="isLoading"
    :row-key="(rows: any) => rows[rowkey]"
    :scroll-x="scrollX"
    :max-height="500"
    :summary="summary"
    :checked-row-keys="cKeys"
    @update:sorter="handleSorterChange"
    @update:checked-row-keys="handleCheck"
  />
</template>
<script setup lang="ts" generic="T extends object, Q extends object, A extends Function">
import { OmsIcon, useDialogPro, usePagination, useTableChecked, OmsIbtn } from '@oms/naive';
import { Refresh } from '@vicons/ionicons5';
import { ChevronsDown, ChevronsUp, Search } from '@vicons/tabler';
import { cloneDeep, isArray, isFunction } from 'lodash-es';
import { NFlex, NButtonGroup, NButton, type DataTableColumns, type DataTableCreateSummary, type DataTableSortState, type DataTableRowKey } from 'naive-ui';
import type { CompareFn } from 'naive-ui/es/data-table/src/interface';
import { ref, toRaw } from 'vue';
import ColsConfig from './ColsConfig.vue';
const columns = defineModel<DataTableColumns<T>>('columns', { default: [] });
type TablePorps = {
  /** 请求 */
  api: A;
  /** 唯一索引 */
  rowkey: string;
  /** 查询参数  filterClean:格式化时清空 */
  params: Q & { filterClean?: Array<string | null> };
  /** 合计行 */
  summary?: DataTableCreateSummary<T>;
  /** 立即查询 default: true */
  query?: boolean;
};
const { api, params, rowkey, query = true } = defineProps<TablePorps>();

const collapsed = ref(false);
const Dialog = useDialogPro();
const scrollX = columns.value.reduce((pre, curr) => pre + Number(curr.width) || 0, 0);

const { pagination, setPageProps, reload, setQuery } = usePagination();
const { cKeys, cRows, handleCheck, cleanCheck } = useTableChecked<T>(rowkey);
const tableSorce = ref<T[]>([]);
const isLoading = ref(false);
let copiedData = [] as T[];
const qParams = ref(cloneDeep(params));
const onReset = () => {
  qParams.value = cloneDeep(params);
  reload();
};

const setKeys = (keys: DataTableRowKey[]) => (cKeys.value = keys);

const setRows = (rows: T[]) => {
  cRows.value = rows;
  setKeys(rows.map((item: any) => item[rowkey]));
};

const getSource = () => toRaw(tableSorce.value);

const onQuery = setQuery(async () => {
  const { pageSize = 10, page = 1 } = pagination;
  try {
    isLoading.value = true;
    const { fuzzy = '', filter = {}, filterClean = ['', null] } = qParams.value;
    const params = {
      fuzzy: fuzzy.trim(),
      limit: pageSize,
      offset: (page - 1) * pageSize,
      filter: JSON.stringify(filter, (_, value) => (filterClean.includes(value) ? undefined : value)), // 清理参数为null
    };
    const { data, status, message } = await api(params);
    if (status != 'success') {
      Dialog.error(message);
      return;
    }
    copiedData = cloneDeep(data.items);
    tableSorce.value = data.items;
    setPageProps({ itemCount: data.total });
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

const setCols = (cols: DataTableColumns<T>) => (columns.value = cols);

defineExpose({ cKeys, cRows, setKeys, setRows, cleanCheck, reload, getSource });

query && onQuery();
</script>
