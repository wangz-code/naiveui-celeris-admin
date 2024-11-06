<!--
 * @Author: wangqz
 * @Date: 2024-11-04
 * @LastEditTime: 2024-11-06
 * @Description: content
-->
<template>
  <n-popover trigger="click" placement="bottom">
    <template #trigger>
      <i-button title="列设置" :icon="Settings"></i-button>
    </template>
    <n-flex justify="space-between" class="m-t-1 text-gray">
      长按拖动排序
      <n-button size="tiny" type="info" @click="resetSort">重置</n-button>
    </n-flex>
    <n-divider dashed style="margin: 10px 0px" />
    <VueDraggable ref="el" v-model="colsConfig" @update="refresh" class="cols-box">
      <div v-for="item in colsConfig" :key="item.key">
        <n-flex v-if="item.title" class="m-t-2" justify="space-between">
          <n-checkbox v-model:checked="item.show" @update:checked="refresh" :label="item.title" />
          <Iconx :component="DragDrop"></Iconx>
        </n-flex>
      </div>
    </VueDraggable>
  </n-popover>
</template>

<script lang="ts" setup>
import { Settings, DragDrop } from '@vicons/tabler';
import { useTableColStore } from '../../store/table-column';
import { ref } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import { useRoute } from 'vue-router';
import type { DataTableColumns } from 'naive-ui';

const columns = defineModel<DataTableColumns<any>>('columns', { default: [] });
const { fullPath: uid } = useRoute();

const { initTableCols, setColsConfig } = useTableColStore();
const colsConfig = ref(initTableCols(uid, columns.value));
const refresh = () => {
  columns.value = colsConfig.value.filter((item) => item.show).map((item) => item.column) as DataTableColumns<any>;
  setColsConfig(uid, colsConfig.value);
};

const resetSort = () => {
  for (const item of colsConfig.value) {
    item.show = true;
  }
  colsConfig.value.sort((a, b) => a.order - b.order);
  refresh();
};

refresh();
</script>

<style scoped>
.cols-box {
  height: 500px;
  overflow: auto;
}
</style>
