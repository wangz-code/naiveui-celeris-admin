<script setup lang="ts">
import { NBackTop } from "naive-ui";

interface PageWrapperProps {
	useScrollbar?: boolean;
}

withDefaults(defineProps<PageWrapperProps>(), {
	useScrollbar: true,
});
const { getShouldUseOpenBackTop } = useAppSetting();
</script>

<template>
	<div class="page-wrapper" :class="[{ 'scrollbar-enabled': useScrollbar }]">
		<NScrollbar v-if="useScrollbar" class="rounded-2xl">
			<div class="m-4">
				<slot />
			</div>
			<NBackTop v-if="getShouldUseOpenBackTop" :bottom="160" :right="0" />
		</NScrollbar>
		<div v-else class="m-4">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.page-wrapper {
	/* Default styles for page-wrapper */
	@apply rounded-2xl w-full h-full min-h-full;
}

.page-wrapper.scrollbar-enabled {
	/* Styles specific to when scrollbar is enabled */
	width: calc(100% + 8px);
}

.page-wrapper.scrollbar-enabled :deep(.ca-scrollbar-container) {
	width: calc(100% - 8px);
	@apply rounded-2xl;
}
</style>
