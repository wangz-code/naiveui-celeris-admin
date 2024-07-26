<template>
	<PageWrapper use-scrollbar>
		
		<h1>detai</h1>
	</PageWrapper>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import type { MenuInst } from "naive-ui";
const router = useRouter();

const navTo = (path) => {
	router.push(path);
};
</script>
