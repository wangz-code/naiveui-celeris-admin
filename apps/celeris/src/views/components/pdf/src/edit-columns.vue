<template>
  <n-card size="small">
    <n-flex justify="space-between" size="small" align="end">
      <n-tag :bordered="false" type="info" size="small">组合</n-tag>
      <n-flex size="small" justify="space-around">
        <n-button size="tiny" @click="col.columns = []">清空</n-button>
        <n-button size="tiny" @click="addText(col.columns)">增加一条</n-button>
      </n-flex>
    </n-flex>
    <n-list>
      <n-list-item v-for="(column, coIdx) in col.columns">
        <div class="m-b-1">
          <edit-text v-if="isString(column.text)" v-model:col="col.columns[coIdx]" />
          <edit-svg v-if="isString(column.svg)" v-model:col="col.columns[coIdx]" />
        </div>
        <n-popselect @update:value="setColType($event, col.columns, coIdx)" :options="columnColTypeOpts" trigger="hover">
          <n-button size="tiny">切换</n-button>
        </n-popselect>
        <n-button size="tiny" @click="col.columns.splice(coIdx, 1)">移除</n-button>
      </n-list-item>
    </n-list>
  </n-card>
</template>

<script lang="ts" setup>
import { isString } from 'lodash-es';
import { EditSvg, EditText } from './index';
import { setColType, textPub } from './mix';
import { ColumnstCol } from './type';

const col = defineModel<ColumnstCol>('col', { default: { column: [] } });
const columnColTypeOpts = [
  {
    label: '文本',
    value: 'text',
  },
  {
    label: '图标',
    value: 'svg',
  },
];
const addText = (coloum: any[]) => {
  coloum.push({ ...textPub(), text: '文本' });
};
</script>
