<template>
  <n-space justify="center">
    <i-button title="查看" @click="handleValidateClick" :icon="ReportSearch" />
    <i-button title="编辑" :icon="EditCircle" />
  </n-space>
</template>

<script lang="ts" setup>
import { EditCircle, ReportSearch } from '@vicons/tabler';

const handleValidateClick = () => {};
</script>
