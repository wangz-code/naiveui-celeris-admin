<template>
  <n-card>
    <n-flex :size="[0, 0]">
      <n-card class="w-6.5/10">
        <Edit @preview="onPreview" />
      </n-card>
      <div class="w-3.5/10">
        <Preview class="m-l-sm" ref="previewPdf" />
      </div>
    </n-flex>
  </n-card>
</template>
<script lang="ts" setup>
import Edit from './src/edit.vue';
import Preview from './src/preview.vue';

const previewPdf = ref({ preview: () => {} });
const onPreview = (value: any) => {
  console.log('value log==>',value);
  
  previewPdf.value.preview(value);
};
</script>
