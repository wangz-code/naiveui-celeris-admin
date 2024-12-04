<template>
  <n-card>
    <n-flex :size="[0, 0]">
      <n-card class="w-3/5">
        <n-tabs type="line" animated>
          <n-tab-pane display-directive="show" name="edit" tab="编辑器"> <Edit @preview="onPreview" /> </n-tab-pane>
          <n-tab-pane display-directive="show" name="base" tab="基础示例"> <Base /> </n-tab-pane>
        </n-tabs>
      </n-card>
      <div class="w-2/5">
        <Preview class="m-l-sm" ref="preview" :doc-definition="docDefinition" />
      </div>
    </n-flex>
  </n-card>
</template>
<script lang="ts" setup>
import Base from './src/base.vue';
import Edit from './src/edit.vue';
import Preview from './src/preview.vue';

const preview = ref({});

const docDefinition = ref({});

const onPreview = (value) => {
  docDefinition.value = value;
  preview.value.preview();
  console.log('preview log==>');
};
</script>
