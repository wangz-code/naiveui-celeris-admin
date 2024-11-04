<template>
  <n-popover trigger="click" placement="bottom">
    <template #trigger>
      <n-button strong secondary>列设置</n-button>
    </template>
    <n-flex justify="space-between" class="m-t-1 text-gray">
        长按拖动排序
      <n-button size="tiny" type="info" @click="resetSort">重置</n-button>
    </n-flex>
    <n-divider dashed style="margin: 10px 0px" />
    <VueDraggable ref="el" v-model="colsConfig" @update="refresh">
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
import { useTableColStore } from '#/store';
import { DragDrop } from '@vicons/tabler';
import { defineModel, ref } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
const { name } = defineProps<{ name: string }>();
const columns = defineModel<any[]>('columns', { default: [] });

const { initTableCols, setColsConfig } = useTableColStore();
const colsConfig = ref(initTableCols(name, columns.value));
const refresh = () => {
  columns.value = colsConfig.value.filter((item) => item.show).map((item) => item.column);
  setColsConfig(name, colsConfig.value);
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
