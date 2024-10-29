<script setup lang="ts">
const { icon, isize, icolor, idepth } = defineProps(["icon", "isize", "idepth", "icolor"]);
const iconProp = {
	component: icon,
	size: isize,
	depth: idepth,
	color: icolor,
};
</script>
<template>
	<n-button v-bind="$attrs">
		<template #icon>
			<Iconx v-bind="iconProp"></Iconx>
		</template>
		<slot></slot>
	</n-button>
</template>
