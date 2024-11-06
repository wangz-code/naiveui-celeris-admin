<!--
 * @Author: wangqz
 * @Date: 2024-07-22
 * @LastEditTime: 2024-11-06
 * @Description: content
-->
<template>
  <n-card>
    <oms-table-async ref="tableRef" :columns="createColumns(action)" :api="getR01" rowkey="key" :params="queryParams">
      <template #form="{ collapsed, reload, qParams }">
        <n-form ref="formRef" label-placement="left" label-width="auto" :model="qParams">
          <n-grid :x-gap="8" :y-gap="15" cols="2 s:3 m:4 l:5 xl:6" :collapsed="collapsed" :collapsed-rows="1" responsive="screen">
            <n-form-item-gi :label="$t('common.likeQuery')" path="fuzzy" :show-feedback="false">
              <n-input v-model:value="qParams.fuzzy" :placeholder="$t('common.input')" clearable @keyup.enter="reload" @clear="reload" />
            </n-form-item-gi>
            <n-grid-item>
              <n-form-item label="姓名" path="user.name" :show-feedback="false" :rule="[{ required: true, message: '姓名必填' }]">
                <n-input v-model:value="qParams.filter.name" placeholder="输入姓名" />
              </n-form-item>
            </n-grid-item>
            <n-grid-item :span="2">
              <n-form-item label="单据日期" :show-feedback="false" path="phone">
                <n-date-picker v-model:value="qParams.filter.dateRange" type="daterange" clearable />
              </n-form-item>
            </n-grid-item>
            <n-grid-item>
              <n-form-item label="收款状态" :show-feedback="false" path="phone">
                <n-select v-model:value="qParams.filter.saleValue" clearable :options="generalOptions" />
              </n-form-item>
            </n-grid-item>
            <n-grid-item>
              <n-form-item label="单据状态" :show-feedback="false" path="user.name">
                <n-select v-model:value="qParams.filter.stateValue" placeholder="Select" :options="stateOptions" />
              </n-form-item>
            </n-grid-item>
            <n-grid-item>
              <n-form-item label="电话号码" path="phone" :show-feedback="false">
                <n-input v-model:value="qParams.filter.phone" placeholder="电话号码" />
              </n-form-item>
            </n-grid-item>
            <n-grid-item>
              <n-form-item label="电话号码" path="phone" :show-feedback="false">
                <n-input v-model:value="qParams.filter.phone" placeholder="电话号码" />
              </n-form-item>
            </n-grid-item>
            <n-grid-item>
              <n-form-item label="电话号码" path="phone" :show-feedback="false">
                <n-input v-model:value="qParams.filter.phone" placeholder="电话号码" />
              </n-form-item>
            </n-grid-item>
          </n-grid>
        </n-form>
      </template>
      <template #bar-left>
        <n-space>
          <i-button type="primary" :icon="CirclePlus" @click="reload">新增</i-button>
          <n-button strong secondary>下载模板</n-button>
          <n-button strong secondary>批量导入</n-button>
          <n-button strong secondary>导出Excel</n-button>
          <n-button strong secondary>打印</n-button>
          <n-dropdown trigger="hover" :options="actionOpts">
            <n-button>更多...</n-button>
          </n-dropdown>
        </n-space>
      </template>
    </oms-table-async>
  </n-card>
</template>

<script lang="ts" setup>
import { getR01, R01Data } from '#/apis';
import { renderIcon } from '#/components/Iconx';
import { OmsTableAsync, useAsyncTable } from '@oms/naive';
import { ArrowUndoOutline, CloseOutline, Trash } from '@vicons/ionicons5';
import { Checks, CirclePlus, Send } from '@vicons/tabler';
import { NButton, type FormInst } from 'naive-ui';
import { h, VNodeChild } from 'vue';
import { createColumns } from './data';
type RowData = R01Data;
const message = useMessage();
const formRef = ref<FormInst | null>(null);
const { tableRef, reload, getKeys } = useAsyncTable<RowData>();
const queryParams = {
  fuzzy: '',
  filter: {
    name: '',
    state: null,
    saleValue: null,
    where: '',
    phone: '',
    select: '',
    stateValue: '',
    dateRange: null,
  },
};
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

const generalOptions = [
  ['0', '全部收款'],
  ['1', '部分收款'],
  ['9', '未收款'],
].map((item) => ({
  label: item[1],
  value: item[0],
}));

const stateOptions = ['', '起草', '待审', '通过'].map((v) => ({
  label: v || '全部',
  value: v,
}));
</script>
