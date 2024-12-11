<template>
  <n-button-group>
    <n-button v-for="item in btns" size="tiny" :type="getType(item.value)" @click="setData(item.value)"> {{ item.label }}</n-button>
  </n-button-group>
</template>

<script lang="ts" setup>
type Align = 'left' | 'center' | 'right';
const alignment = defineModel<Align>('alignment');
const btns: { label: string; value: Align }[] = [
  {
    label: '左',
    value: 'left',
  },
  {
    label: '中',
    value: 'center',
  },
  {
    label: '左',
    value: 'right',
  },
];
const getType = (value: Align) => (alignment.value == value ? 'primary' : 'default');
const setData = (value: Align) => (alignment.value = value);
</script>
