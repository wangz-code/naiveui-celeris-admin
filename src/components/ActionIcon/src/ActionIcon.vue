<script setup lang="ts">
import ToolTipper from "./ToolTipper.vue";

withDefaults(
	defineProps<{
		tooltipText?: string;
		icon: string;
		transparent?: boolean; // 是否设置背景透明
		size?: number; // 按钮大小
		component?: Component; // 图标组件
	}>(),
	{
		tooltipText: undefined,
		icon: "i-mdi-alert",
		transparent: false, // 是否设置背景透明
		size: 16, // 按钮大小
		component:undefined, // 图标组件
	}
);
</script>

<template>
	<ToolTipper :tooltip-text="tooltipText">
		<NEl tag="button" type="button" class="text-[var(--text-color-base)] w-8 h-8 text-base flex items-center justify-center rounded-lg p-2 hover:bg-[var(--hover-color)] border-0" :class="{ 'bg-[var(--action-color)]': !transparent, 'bg-transparent': transparent }">
			<span class="sr-only">{{ tooltipText }}</span>
			<Iconx :size="size" :component="component" />
		</NEl>
	</ToolTipper>
</template>

<style scoped></style>
