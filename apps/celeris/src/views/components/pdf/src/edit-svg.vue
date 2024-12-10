<template>
  <n-flex justify="space-between" align="end">
    <div>
      <n-input type="text" v-model:value="col.svg" size="small">
        <template #prefix>
          <span>svg</span>
        </template>
      </n-input>
    </div>
    <n-flex align="end">
      <alignment v-model:alignment="col.alignment"></alignment>
      <cover v-model:cover="col"></cover>
    </n-flex>
  </n-flex>
</template>

<script lang="ts" setup>
import { NInput } from 'naive-ui';
import Alignment from './alignment.vue';
import { SvgCol } from './type';
import Cover from './cover.vue';
const col = defineModel<SvgCol>('col', { default: { svg: '', width: 100, height: 100 } });
</script>
