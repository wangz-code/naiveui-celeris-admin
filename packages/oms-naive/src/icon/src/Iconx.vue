<script setup lang="ts">
import { isString } from 'lodash-es';
import { NIcon, type Depth } from 'naive-ui/es/icon/src/Icon';
import { createVNode, type Component, type VNode } from 'vue';
type IProps = {
  component: string | Component;
  size?: number | string;
  depth?: Depth;
  color?: string;
};

const props = defineProps<IProps>();
const renderComp = (comp: VNode | string | Component) => (isString(comp) ? createVNode('i', { innerHTML: comp || 'svg??' }) : comp);
</script>
<template>
  <n-icon v-bind="{ ...props, component: renderComp(component) }"></n-icon>
</template>
