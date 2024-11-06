<template>
  <n-popconfirm @positive-click="handlePositiveClick">
    <template #trigger>
      <oms-ibtn :icon="Trash" :size="size" />
    </template>
    {{ title }}
  </n-popconfirm>
</template>
<script lang="ts" setup>
import { Trash } from '@vicons/tabler';
import { NPopconfirm } from 'naive-ui';
import { OmsIbtn } from '../../button';
defineProps(['size', 'title']);
const emit = defineEmits(['confirm']);
const handlePositiveClick = () => emit('confirm');
</script>
