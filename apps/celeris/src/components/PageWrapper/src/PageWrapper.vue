<script setup lang="ts">
import { NBackTop } from "naive-ui";

withDefaults(defineProps<{ useScrollbar?: boolean }>(), {
	useScrollbar: true,
});
const { getShouldUseOpenBackTop } = useAppSetting();
</script>

<template>
	<NScrollbar>
		<slot />
		<NBackTop v-if="getShouldUseOpenBackTop" :bottom="160" :right="0" />
	</NScrollbar>
</template>
