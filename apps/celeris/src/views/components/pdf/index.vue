<template>
  <n-card>
    <n-flex :size="[0, 0]">
      <n-card class="w-6.2/10">
        <Edit @preview="onPreview" />
      </n-card>
      <div class="w-3.8/10">
        <Preview class="m-l-sm" ref="previewRef" />
      </div>
    </n-flex>
  </n-card>
</template>
<script lang="ts" setup>
import Edit from './src/edit.vue';
import { preview, previewRef } from './src/mix';
import Preview from './src/preview.vue';

const onPreview = () => {
  preview();
};
</script>
