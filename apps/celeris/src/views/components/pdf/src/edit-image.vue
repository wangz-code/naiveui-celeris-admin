<template>
  <n-flex justify="space-between" align="end">
    <div>
      <n-input type="text" :value="col.src" size="small" @update-value="setImg" />
    </div>
    <n-flex align="end">
      <div>
        <img :src="col.src" width="50" />
      </div>
      <n-button-group>
        <n-button size="tiny" :type="col.alignment == 'left' ? 'primary' : 'default'" @click="col.alignment = 'left'"> 左 </n-button>
        <n-button size="tiny" :type="col.alignment == 'center' ? 'primary' : 'default'" @click="col.alignment = 'center'"> 中 </n-button>
        <n-button size="tiny" :type="col.alignment == 'right' ? 'primary' : 'default'" @click="col.alignment = 'right'"> 右 </n-button>
      </n-button-group>
      <div>
        <n-input-group>
          <n-input-group-label size="tiny">宽/高</n-input-group-label>
          <n-input-number v-model:value="col.width" size="tiny" placeholder="尺寸" style="width: 40px" :show-button="false" />
          <n-input-number v-model:value="col.height" size="tiny" placeholder="尺寸" style="width: 40px" :show-button="false" />
        </n-input-group>
      </div>
    </n-flex>
  </n-flex>
</template>

<script lang="ts" setup>
import { NInput } from 'naive-ui';
import { ImageCol } from './type';
import { setDoc } from './mix';
const emit = defineEmits(['update']);
const { col } = defineProps<{ col: ImageCol }>();

const update = (value) => {
  const newData = [...doc.content, value];
  emit('update', newData);
};

const setImg = (value) => {
  setDoc((doc) => {
    doc.images.logo = value;
  });
};

const colPub = () => {
  return {
    alignment: 'center',
    bold: false,
    colSpan: 1,
    rowSpan: 1,
    margin: [0, 0, 0, 0],
    border: [true, true, true, true],
  };
};
const textPub = () => {
  return {
    fontSize: 10,
    ...colPub(),
  };
};
</script>
