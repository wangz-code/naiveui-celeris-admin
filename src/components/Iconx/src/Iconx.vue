<script setup lang="ts">
import { isString } from "@/utils";
import { createVNode } from "vue";

const props = defineProps(["component", "size", "depth", "color"]);
const component = ref(props.component);

// 如果是svg String 转换成vue组件
if (isString(props.component)) component.value = createVNode("i", { innerHTML: props.component || "svg??" });
</script>
<template>
	<n-icon v-bind="{ ...props, component }"></n-icon>
</template>
