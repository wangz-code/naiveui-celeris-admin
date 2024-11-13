<template>
  <n-flex :justify="justify">
    <n-button-group>
      <oms-ibtn attr-type="button" title="查询" type="info" :icon="Search" @click="onReload"></oms-ibtn>
      <oms-ibtn attr-type="reset" title="重置" :icon="Refresh" @click="onReset"></oms-ibtn>
      <cols-config v-if="colsConfig" :columns="columns" :onChange="setCols"> </cols-config>
      <n-button attr-type="button" @click="updateCollapsed">
        <template #icon>
          <oms-icon :component="collapsed ? ChevronsDown : ChevronsUp" :size="16" />
        </template>
      </n-button>
    </n-button-group>
  </n-flex>
</template>

<script lang="ts" setup>
import { OmsIbtn, OmsIcon } from '@oms/naive';
import { Refresh } from '@vicons/ionicons5';
import { ChevronsDown, ChevronsUp, Search } from '@vicons/tabler';
import { NButton, NButtonGroup, NFlex, type DataTableColumns, type FlexJustify } from 'naive-ui';
import ColsConfig from './ColsConfig.vue';

const emit = defineEmits(['update:collapsed']);
const { collapsed, justify = 'end' } = defineProps<{
  collapsed: boolean;
  columns: DataTableColumns<any>;
  colsConfig: boolean;
  onReload: () => void;
  onReset: () => void;
  setCols: any;
  justify?: FlexJustify;
}>();

const updateCollapsed = () => {
  emit('update:collapsed', !collapsed);
};
</script>

<style scoped>
.cols-box {
  margin-top: 10px;
  max-height: 50vh;
  overflow: auto;
}
.pointer {
  cursor: pointer;
}
</style>
