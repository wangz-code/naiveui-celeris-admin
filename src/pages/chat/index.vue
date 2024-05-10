<script setup lang="ts">
import { SearchOutline } from "@vicons/ionicons5";
import { SearchOutline as SearchOutlineSvg, SafeIcon } from "@/components/Iconx/svgs";

defineOptions({
	name: "Chat",
});
</script>

<template>
	<PageWrapper>
		<n-card title="卡片"> 卡片内容 </n-card>
		<n-card title="按钮组">
			<!-- <Iconx size="30" :component="SafeIcon" />
			<Iconx size="60" :component="SearchOutlineSvg" />
			<Iconx size="60" :component="SearchOutline" /> -->
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
