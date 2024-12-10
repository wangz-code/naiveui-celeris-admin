<template>
  <n-flex justify="space-between" align="end">
    <div><n-input type="text" v-model:value="col.src" size="small" @update-value="setImg" /></div>
    <n-flex align="end">
      <img :src="col.src" width="50" />
      <alignment v-model:alignment="col.alignment"></alignment>
      <cover v-model:cover="col"></cover>
    </n-flex>
  </n-flex>
</template>

<script lang="ts" setup>
import { NInput } from 'naive-ui';
import { ImageCol } from './type';
import Alignment from './alignment.vue';
import Cover from './cover.vue';
import { mergeDoc } from './mix';

const emit = defineEmits(['update']);
const col = defineModel<ImageCol>('col', { default: { alignment: 'center' } });

const setImg = (value: string) => {
  if (!value) return;
  if (value.lastIndexOf('/') == -1) return;
  const idx = value.lastIndexOf('/');
  const image = value.slice(idx + 1);
  col.value.image = image;
  mergeDoc({ images: { [image]: value } });
};
</script>
