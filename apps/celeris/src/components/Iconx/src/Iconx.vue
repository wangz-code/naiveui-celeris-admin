<script setup lang="ts">
import { isString } from '#/utils';
import { Component, createVNode } from 'vue';

const props = defineProps(['component', 'size', 'depth', 'color']);
const renderComp = (comp: string | Component) => (isString(comp) ? createVNode('i', { innerHTML: comp || 'svg??' }) : comp);
</script>
<template>
  <n-icon v-bind="{ ...props, component: renderComp(component) }"></n-icon>
</template>
