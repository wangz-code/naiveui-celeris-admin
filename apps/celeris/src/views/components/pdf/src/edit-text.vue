<!--
 * @Author: wangqz
 * @Date: 2024-12-10
 * @LastEditTime: 2024-12-11
 * @Description: content
-->
<template>
  <n-flex justify="space-between" :size="[0, 5]">
    <div :class="fullInput ? 'w-full' : 'w-1/2'">
      <n-input v-model:value="col.text" size="small" type="text" />
    </div>
    <n-flex :class="fullInput ? 'w-full' : 'w-1/2'" justify="end">
      <n-checkbox v-model:checked="col.bold">粗体</n-checkbox>
      <alignment v-model:alignment="col.alignment"></alignment>
      <fontsize v-model:fontsize="col.fontSize"></fontsize>
      <div v-if="showMargin">
        <n-popover trigger="hover">
          <template #trigger>
            <n-input-group>
              <n-input-group-label size="tiny">文本间距</n-input-group-label>
              <n-input-number v-for="(_, colIdx) in col.margin" v-model:value="col.margin[colIdx]" size="tiny" style="width: 40px" :show-button="false" />
            </n-input-group>
          </template>
          <span>左 上 右 下</span>
        </n-popover>
      </div>
    </n-flex>
  </n-flex>
</template>

<script lang="ts" setup>
import { NInput } from 'naive-ui';
import Alignment from './alignment.vue';
import Fontsize from './fontsize.vue';
import { TextCol } from './type';
defineProps<{ showMargin?: boolean; fullInput?: boolean }>();
const col = defineModel<TextCol>('col', { default: { text: '', alignment: 'center', fontSize: 10 } });
</script>
