<template>
  <slot name="form" v-bind="{ filter, reload, qParams }"></slot>
  <n-flex class="m-t-sm m-b-sm" justify="space-between">
    <span>
      <slot name="bar-left"></slot>
    </span>
    <n-button-group>
      <i-button attr-type="button" title="查询" type="info" :icon="Search" @click="reload"></i-button>
      <i-button attr-type="reset" title="重置" :icon="Refresh" @click="onReset"></i-button>
      <cols-config v-model:columns="columns"> </cols-config>
      <n-button attr-type="button" @click="filter = !filter">
        <template #icon>
          <Iconx :component="filter ? ChevronsUp : ChevronsDown" :size="16" />
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
    :max-height="500"
    @update:checked-row-keys="handleCheck"
  />
</template>
<script setup lang="ts" generic="Q extends object">
import { useDialogPro, useListQuery, usePagination, useTableChecked } from '@oms/naive';
import { Refresh } from '@vicons/ionicons5';
import { ChevronsDown, ChevronsUp, Search } from '@vicons/tabler';
import { type DataTableColumns } from 'naive-ui';
import { reactive, ref } from 'vue';
import ColsConfig from './ColsConfig.vue';

type RowRecord = any;
const columns = defineModel<DataTableColumns<RowRecord>>('columns', { default: [] });
const { api, params, rowkey } = defineProps<{
  api: (p: any) => Promise<any>;
  rowkey: string;
  params: { cleanValue?: any[] } & Q;
}>();

const filter = ref(true);
const Dialog = useDialogPro();
const cleanValue = params.cleanValue ? params.cleanValue : [null, ''];

const { pagination, setPageProps, reload, setQuery } = usePagination();
const table = reactive({ source: [] as RowRecord[], isLoading: false });
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
defineExpose({ cKeys, cRows, cleanCheck, reload });
onQuery();
</script>
