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
    :data="table.source"
    :pagination="pagination"
    :loading="table.isLoading"
    :row-key="(rows: any) => rows[rowkey]"
    :scroll-x="scrollX"
    :max-height="500"
    @update:checked-row-keys="handleCheck"
  />
</template>
<script setup lang="ts" generic="T extends object, Q extends object, A extends Function">
import { useDialogPro, useListQuery, usePagination, useTableChecked } from '@oms/naive';
import { Refresh } from '@vicons/ionicons5';
import { ChevronsDown, ChevronsUp, Search } from '@vicons/tabler';
import { type DataTableBaseColumn, type DataTableColumns } from 'naive-ui';
import { reactive, ref } from 'vue';
import ColsConfig from './ColsConfig.vue';
const columns = defineModel<DataTableColumns<T>>('columns', { default: [] });
const { api, params, rowkey } = defineProps<{
  api: A;
  rowkey: string;
  params: { cleanValue?: any[] } & Q;
}>();

const collapsed = ref(false);
const Dialog = useDialogPro();
const cleanValue = params.cleanValue ? params.cleanValue : [null, ''];

const scrollX = columns.value.reduce((pre, curr) => pre + Number(curr.width) || 0, 0);

const { pagination, setPageProps, reload, setQuery } = usePagination();
const table = reactive({ source: [] as DataTableBaseColumn[], isLoading: false });
const { handleCheck, cKeys, cRows, cleanCheck } = useTableChecked(rowkey);
const { qParams, onReset } = useListQuery<Q>({ data: params, reload });

const onQuery = setQuery(async () => {
  const { pageSize = 10, page = 1 } = pagination;
  try {
    table.isLoading = true;
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
    table.source = data.items;
    setPageProps({ count: data.total });
  } finally {
    table.isLoading = false;
  }
});

const setCols = (cols: DataTableColumns<T>) => {
  columns.value = cols;
};
defineExpose({ cKeys, cRows, cleanCheck, reload });
onQuery();
</script>
