<template>
  <n-form ref="formRef" label-placement="left" label-width="auto" :model="qParams">
    <slot name="form"></slot>
    <n-flex class="m-t-sm m-b-sm" justify="space-between">
      <span>
        <slot name="bar-left"></slot>
      </span>
      <n-button-group>
        <i-button attr-type="button" title="查询" @click="reload" type="info" :icon="Search"></i-button>
        <i-button attr-type="reset" title="重置" :icon="Refresh"></i-button>
        <cols-config name="R01" v-model:columns="columns"> </cols-config>
        <n-button attr-type="button" @click="filter = !filter">
          <template #icon>
            <Iconx :component="filter ? ChevronsUp : ChevronsDown" :size="16" />
          </template>
        </n-button>
      </n-button-group>
    </n-flex>
  </n-form>
  <n-data-table
    remote
    size="small"
    :columns="columns"
    :data="table.source"
    :pagination="pagination"
    :loading="table.isLoading"
    :row-key="({ key }: any) => key"
    :max-height="500"
    @update:checked-row-keys="useChecked.handleCheck"
  />
</template>
<script setup lang="ts">
import type { ListQuery } from '@oms/naive';
import { usePagination } from '@oms/naive';
import { Refresh } from '@vicons/ionicons5';
import { ChevronsDown, ChevronsUp, Search } from '@vicons/tabler';
import { useDialog } from 'naive-ui';
import { reactive, ref } from 'vue';
import ColsConfig from './ColsConfig.vue';
type RowRecord = any;

const columns = defineModel('columns');
const filter = defineModel('filter');
const { api, useQuery, useChecked } = defineProps<{
  // columns: DataTableColumns<RowRecord>;
  api: (p: any) => Promise<any>;
  useChecked: {
    cKeys: any[];
    handleCheck: () => void;
  };
  useQuery: {
    qParams: any;
    onReset: () => void;
    onClear: () => void;
  };
}>();

const Dialog = useDialog();
const { pagination, setPageProps, reload, setQuery } = usePagination();
const table = reactive({ source: [] as RowRecord[], isLoading: false });
const { qParams, onReset, onClear } = useQuery;

const onQuery = setQuery(async () => {
  const { pageSize = 10, page = 1 } = pagination;
  try {
    table.isLoading = true;
    const { fuzzy, filter } = qParams.value;
    const params: ListQuery<{}> = {
      fuzzy,
      limit: pageSize,
      offset: (page - 1) * pageSize,
      filter,
    };
    const { data, status, message } = await api({ page, pageSize });
    if (status != 'success') {
      Dialog.error(message);
      return;
    }
    table.source = data.items;
    setPageProps({ count: data.total, onQuery });
  } finally {
    table.isLoading = false;
  }
});

onQuery();
</script>
