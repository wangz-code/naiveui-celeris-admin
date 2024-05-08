<script setup lang="ts">
import PageWrapper from "~/component/PageWrapper/src/PageWrapper.vue";

defineOptions({
	name: "Chat",
});
</script>

<template>
	<PageWrapper>
		<n-card title="卡片"> 卡片内容 </n-card>
		<n-card title="按钮组">
			<n-space>
				<n-button>Default</n-button>
				<n-button type="tertiary"> Tertiary </n-button>
				<n-button type="primary"> Primary </n-button>
				<n-button type="info"> Info </n-button>
				<n-button type="success"> Success </n-button>
				<n-button type="warning"> Warning </n-button>
				<n-button type="error"> Error </n-button>
			</n-space>
			卡片内容
		</n-card>
	</PageWrapper>
</template>

<style scoped></style>
