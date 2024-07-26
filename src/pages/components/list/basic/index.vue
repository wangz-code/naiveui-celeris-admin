<!--
 * @Author: wangqz
 * @Date: 2024-07-22
 * @LastEditTime: 2024-07-26
 * @Description: content
-->
<template>
	<PageWrapper use-scrollbar>
		<n-button @click="navTo('detail')"> 新增 </n-button>
		<n-button @click="navTo('preview')"> 预览 </n-button>
		<n-card title="menu"> allalla </n-card>
	</PageWrapper>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import type { MenuInst } from "naive-ui";
const router = useRouter();

const navTo = (path) => {
	router.push("/components/list/basic/"+path);
};
</script>
