<!--
 * @Author: wangqz
 * @Date: 2024-07-22
 * @LastEditTime: 2024-11-04
 * @Description: content
-->
<template>
  <n-card>
    <n-form ref="formRef" label-placement="left" label-width="auto" :model="formValue">
      <n-grid :x-gap="8" :y-gap="15" cols="2 s:3 m:4 l:5 xl:6" responsive="screen">
        <n-grid-item>
          <n-form-item label="模糊查询" path="where" :show-feedback="false">
            <n-input v-model:value="formValue.where" placeholder="输入关键字" />
          </n-form-item>
        </n-grid-item>
        <n-grid-item>
          <n-form-item label="姓名" path="user.name" :show-feedback="false" :rule="[{ required: true, message: '姓名必填' }]">
            <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
          </n-form-item>
        </n-grid-item>
        <n-grid-item :span="2">
          <n-form-item label="单据日期" :show-feedback="false" path="phone">
            <n-date-picker v-model:value="formValue.dateRange" type="daterange" clearable />
          </n-form-item>
        </n-grid-item>
        <n-grid-item>
          <n-form-item label="收款状态" :show-feedback="false" path="phone">
            <n-select v-model:value="formValue.saleValue" placeholder="Select" :options="generalOptions" />
          </n-form-item>
        </n-grid-item>
        <n-grid-item>
          <n-form-item label="单据状态" :show-feedback="false" path="user.name">
            <n-select v-model:value="formValue.stateValue" placeholder="Select" :options="stateOptions" />
          </n-form-item>
        </n-grid-item>
        <template v-if="filterShow">
          <n-grid-item>
            <n-form-item label="电话号码" path="phone" :show-feedback="false">
              <n-input v-model:value="formValue.phone" placeholder="电话号码" />
            </n-form-item>
          </n-grid-item>
          <n-grid-item>
            <n-form-item label="电话号码" path="phone" :show-feedback="false">
              <n-input v-model:value="formValue.phone" placeholder="电话号码" />
            </n-form-item>
          </n-grid-item>
          <n-grid-item>
            <n-form-item label="电话号码" path="phone" :show-feedback="false">
              <n-input v-model:value="formValue.phone" placeholder="电话号码" />
            </n-form-item>
          </n-grid-item>
        </template>
      </n-grid>

      <n-flex class="m-t-sm m-b-sm" justify="space-between">
        <n-space>
          <i-button type="primary" :icon="CirclePlus">新增</i-button>
          <n-button strong secondary>下载模板</n-button>
          <n-button strong secondary>批量导入</n-button>
          <n-button strong secondary>导出Excel</n-button>
          <n-button strong secondary>打印</n-button>
          <cols-config name="R01" v-model:columns="columns"></cols-config>
          <n-dropdown trigger="hover" :options="actionOpts" @select="handleSelect">
            <n-button>更多...</n-button>
          </n-dropdown>
        </n-space>
        <n-space>
          <n-button-group>
            <i-button attr-type="button" title="查询" @click="handleValidateClick" type="info" :icon="Search"></i-button>
            <i-button attr-type="reset" title="重置" :icon="Refresh"></i-button>
            <n-button attr-type="button" @click="filterShow = !filterShow">
              <template #icon>
                <Iconx :component="filterShow ? ChevronsUp : ChevronsDown" :size="16" />
              </template>
            </n-button>
          </n-button-group>
        </n-space>
      </n-flex>
    </n-form>
    <n-data-table :columns="columns" :data="table.source" :pagination="pagination" :loading="table.isLoading" />
  </n-card>
</template>

<script lang="ts" setup>
import { getR01, R01Data } from '#/apis';
import { renderIcon } from '#/components/Iconx';
import { ArrowUndoOutline, CloseOutline, Refresh, Trash } from '@vicons/ionicons5';
import { Checks, ChevronsDown, ChevronsUp, CirclePlus, Search, Send } from '@vicons/tabler';
import { NButton, type DataTableCreateSummary, type FormInst } from 'naive-ui';
import { Value } from 'naive-ui/es/date-picker/src/interface';
import { h, VNodeChild } from 'vue';
import { ColsConfig } from '../../cols-config';
import { createColumns } from './data';
type RowData = R01Data;
const message = useMessage();
const formRef = ref<FormInst | null>(null);
const filterShow = ref(true);

const action = (): VNodeChild =>
  h(
    NButton,
    {
      size: 'small',
      onClick: () => {
        message.info('action');
      },
    },
    () => '操作',
  );
const columns = ref(createColumns(action));
console.log('columns log==>',columns.value);

const formValue = ref({

  user: {
    name: '',
    age: '',
  },
  where: '',
  phone: '',
  select: '',
  saleValue: '',
  stateValue: '',
  dateRange: [Date.now(), Date.now()] as Value,
});
const actionOpts = [
  {
    label: '批量发起',
    key: 'submit',
    icon: renderIcon(Send),
  },
  {
    label: '批量审核',
    key: 'audit',
    icon: renderIcon(Checks),
  },
  {
    label: '批量驳回',
    key: 'reject',
    icon: renderIcon(ArrowUndoOutline),
  },
  {
    label: '批量反审',
    key: 'reAudit',
    icon: renderIcon(CloseOutline),
  },
  {
    label: '批量删除',
    key: 'delete',
    icon: renderIcon(Trash),
  },
];

const generalOptions = ['', '全部收款', '部分收款', '未收款'].map((v) => ({
  label: v || '全部',
  value: v,
}));

const stateOptions = ['', '起草', '待审', '通过'].map((v) => ({
  label: v || '全部',
  value: v,
}));

const handleSelect = () => {};

const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      onQuery();
    } else {
      console.log(errors);
      message.error('Invalid');
    }
  });
};

const onQuery = async () => {
  try {
    table.isLoading = true;
    const { data, status } = await getR01({ page: 1, pageSize: 10 });
    if (status == 'success') table.source = data.items;
  } catch (error) {
  } finally {
    table.isLoading = false;
  }
};

const createSummary: DataTableCreateSummary = (pageData) => {
  return {
    name: {
      value: h(
        'span',
        { style: { color: 'red' } },
        (pageData as unknown as RowData[]).reduce((prevValue, row) => prevValue, 0),
      ),
      colSpan: 3,
    },
  };
};

const pagination = reactive({
  page: 1,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [10, 20, 100],
  prefix: ({ itemCount }: any) => `${itemCount}条记录`,
  onChange: (page: number) => {
    pagination.page = page;
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
  },
});

const table = reactive({ source: [] as RowData[], isLoading: false, summary: createSummary });

onQuery();
</script>
