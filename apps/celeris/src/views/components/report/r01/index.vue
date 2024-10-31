<!--
 * @Author: wangqz
 * @Date: 2024-07-22
 * @LastEditTime: 2024-10-31
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
          <n-popover trigger="click" placement="bottom">
            <template #trigger>
              <n-button strong secondary>列设置</n-button>
            </template>
            <n-checkbox-group v-model:value="checks" @update:value="setCols">
              <n-flex justify="space-between" class="m-t-1">
                <n-checkbox label="全选" />
                <n-button size="tiny" type="info">保存</n-button>
              </n-flex>
              <n-divider dashed style="margin: 10px 0px" />
              <VueDraggable ref="el" v-model="checkCol" @update="onUpdateCol">
                <div v-for="item in checkCol" :key="item">
                  <n-flex v-if="item.title" class="m-t-2" justify="space-between">
                    <n-checkbox :value="item.key" :label="item.title" />
                    <Iconx :component="DragDrop"></Iconx>
                  </n-flex>
                </div>
              </VueDraggable>
            </n-checkbox-group>
          </n-popover>
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
import { ArrowUndoOutline, CloseOutline, Refresh, Resize, Trash } from '@vicons/ionicons5';
import { Checks, ChevronsDown, ChevronsUp, CirclePlus, Search, Send, Tornado } from '@vicons/tabler';
import type { DataTableCreateSummary, FormInst } from 'naive-ui';
import { Value } from 'naive-ui/es/date-picker/src/interface';
import { h } from 'vue';
import { createColumns } from './data';
import { VueDraggable, useDraggable } from 'vue-draggable-plus';
import { DragDrop } from '@vicons/tabler';
import { cloneDeep } from '#/utils';
const { t } = useI18n();

type RowData = R01Data;
const message = useMessage();
const formRef = ref<FormInst | null>(null);
const filterShow = ref(true);
const columns = ref(createColumns());
const el = ref();
const keys = columns.value.map((item) => item.key);
const drag = ref([]);
const checks = cloneDeep(keys);
const checkCol = ref(toRaw(columns.value));

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
const comp = ref<any>();
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

const handleSelect = (key) => {
  message.success(key);
};

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
  prefix: ({ itemCount }) => `${itemCount}条记录`,
  onChange: (page: number) => {
    pagination.page = page;
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
  },
});
const table = reactive({ source: [] as RowData[], isLoading: false, summary: createSummary });

const onUpdateCol = (val) => {
  columns.value = toRaw(checkCol.value);
};

const setCols = (value = []) => {
  console.log('value log==>', value);
  columns.value = checkCol.value.filter((item) => value.includes(item.key));
};

onQuery();
</script>
