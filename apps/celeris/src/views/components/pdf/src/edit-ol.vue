<!--
 * @Author: wangqz
 * @Date: 2024-12-11
 * @LastEditTime: 2024-12-11
 * @Description: content
-->
<template>
  <n-card size="small">
    <n-flex justify="space-between" :size="[0, 10]">
      <div><n-tag :bordered="false" type="info" size="small">列表</n-tag></div>
      <n-flex size="small" justify="space-around">
        <div>
          <n-select size="tiny" style="width: 80px" v-model:value="col.type" :options="listTypeOptions" />
        </div>
        <div>
          <n-popover trigger="hover" v-if="col.type != 'none'">
            <template #trigger>
              <n-button size="tiny">分割符{{ col.separator }}</n-button>
            </template>
            <n-button-group size="small">
              <n-button @click="col.separator = ['(', ')']"> (1.) </n-button>
              <n-button @click="col.separator = ')'"> 1.)</n-button>
              <n-input v-model:value="col.separator as string" size="tiny" placeholder="输入" style="width: 50px" />
            </n-button-group>
          </n-popover>
        </div>
        <n-checkbox v-model:checked="col.bold">粗体</n-checkbox>
        <alignment v-model:alignment="col.alignment"></alignment>
        <fontsize v-model:alignment="col.fontSize"></fontsize>
        <n-button size="tiny" @click="col.ol = []">清空</n-button>
        <n-button size="tiny" @click="col.ol.push('' as OlItem)">+增加</n-button>
      </n-flex>
    </n-flex>
    <n-list>
      <n-list-item v-for="(ol, olIdx) in col.ol">
        <template #suffix>
          <n-popselect @update:value="setColType($event, col.ol, olIdx)"  :options="listColTypeOpts" trigger="hover">
            <n-button size="tiny">切换</n-button>
          </n-popselect>
          <n-button size="tiny" @click="col.ol.splice(olIdx, 1)">移除</n-button>
        </template>
        <template #prefix>
          {{ olIdx + 1 }}
        </template>
        <div class="m-b-1">
          <n-input v-if="isString(ol)" type="textarea" rows="1" v-model:value="col.ol[olIdx]" />
          <edit-text v-if="isString(ol.text)" v-model:col="col.ol[olIdx]" full-input show-margin />
          <edit-qrcode v-if="isString(ol.qr)" v-model:col="col.ol[olIdx]" />
        </div>
      </n-list-item>
    </n-list>
  </n-card>
</template>

<script lang="ts" setup>
import { isString } from 'lodash-es';
import { Alignment, EditQrcode, EditText, Fontsize } from './index';
import { setColType } from './mix';
import { OlCol, OlItem } from './type';

const col = defineModel<OlCol>('col', { default: { column: [] } });

const listColTypeOpts = [
  {
    label: '纯文字',
    value: 'string',
  },
  {
    label: '文本',
    value: 'text',
  },
  {
    label: '二维码',
    value: 'qr',
  },
];
const listTypeOptions = [
  {
    label: '无序',
    value: 'none',
  },
  {
    label: '数字',
    value: '',
  },
  {
    label: 'abc',
    value: 'lower-alpha',
  },
  {
    label: 'ABC',
    value: 'upper-alpha',
  },
];
</script>
