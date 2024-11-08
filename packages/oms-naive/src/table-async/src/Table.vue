<template>
  <slot name="form" v-bind="{ collapsed, reload, qParams }"></slot>
  <n-flex class="m-t-sm m-b-sm" justify="space-between">
    <span>
      <slot name="bar-left"></slot>
    </span>
    <n-button-group>
      <i-button attr-type="button" title="查询" type="info" :icon="Search" @click="reload"></i-button>
      <i-button attr-type="reset" title="重置" :icon="Refresh" @click="onReset"></i-button>
      <cols-config :columns="columns" :onChange="setCols"> </cols-config>
      <n-button attr-type="button" @click="collapsed = !collapsed">
        <template #icon>
          <Iconx :component="collapsed ? ChevronsDown : ChevronsUp" :size="16" />
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
    @update:sorter="handleSorterChange"
    @update:checked-row-keys="handleCheck"
  />
</template>
<script setup lang="ts" generic="T extends object, Q extends object, A extends Function">
import { useDialogPro, usePagination, useTableChecked } from '@oms/naive';
import { Refresh } from '@vicons/ionicons5';
import { ChevronsDown, ChevronsUp, Search } from '@vicons/tabler';
import { cloneDeep, isArray, isFunction, isObject } from 'lodash-es';
import { type DataTableColumns, type DataTableCreateSummary, type DataTableSortState } from 'naive-ui';
import type { CompareFn } from 'naive-ui/es/data-table/src/interface';
import { ref } from 'vue';
import ColsConfig from './ColsConfig.vue';
const columns = defineModel<DataTableColumns<T>>('columns', { default: [] });
const { api, params, rowkey } = defineProps<{
  api: A;
  rowkey: string;
  params: { cleanValue?: any[] } & Q;
  summary: DataTableCreateSummary;
}>();

const collapsed = ref(false);
const Dialog = useDialogPro();
const cleanValue = params.cleanValue ? params.cleanValue : [null, ''];
const scrollX = columns.value.reduce((pre, curr) => pre + Number(curr.width) || 0, 0);

const { pagination, setPageProps, reload, setQuery } = usePagination();
const { cKeys, cRows, handleCheck, cleanCheck } = useTableChecked(rowkey);
const tableSorce = ref<T[]>([]);
const isLoading = ref(false);
let copiedData = [] as T[];
const qParams = ref(cloneDeep(params));
const onReset = () => {
  qParams.value = cloneDeep(params);
  reload();
};

const onQuery = setQuery(async () => {
  const { pageSize = 10, page = 1 } = pagination;
  try {
    isLoading.value = true;
    const { fuzzy, filter } = qParams.value;
    const params = {
      fuzzy,
      limit: pageSize,
      offset: (page - 1) * pageSize,
      filter: JSON.stringify(filter, (_, value) => (cleanValue.includes(value) ? undefined : value)), // 清理参数为null
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

defineExpose({ cKeys, cRows, cleanCheck, reload });
onQuery();
</script>
