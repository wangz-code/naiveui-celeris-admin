<script setup lang="ts">
import { ChevronBackCircleOutline, ChevronForwardCircleOutline, SearchOutline } from "@vicons/ionicons5";
import { SearchOutline as SearchOutlineSvg, SafeIcon, FullScreenSvg } from "@/components/Iconx/svgs";

import Form from "./components/Form/index.vue";
import Preview from "./components/Preview/index.vue";
defineOptions({
	name: "Chat",
});

const isChange = ref(false);
const isComp = ref(false);

const Foo = defineComponent((props) => {
	return () => h("b", "组件Foo");
});

const Bar = defineComponent((props) => {
	return () => h("b", "组件Bar");
});
</script>

<template>
	<div>
		<n-card title="卡片"> 卡片内容 </n-card>
		<n-card title="按钮组" class="mt-5">
			<Iconx size="30" :component="SafeIcon" />
			<Iconx size="60" :component="SearchOutlineSvg" />
			<Iconx size="60" :component="SearchOutline" />
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
		<n-card title="测试动态组件" class="mt-5">
			<Iconx size="30" :component="SafeIcon" />
			<Iconx size="60" :component="SearchOutlineSvg" />
			<Iconx size="60" :component="SearchOutline" />
			<n-space>
				<n-button @click="isChange = true">默认</n-button>
				<n-button @click="isChange = false"> 更换图标 </n-button>
				<Iconx size="60" :component="isChange ? ChevronForwardCircleOutline : FullScreenSvg" />
			</n-space>
			{{ isChange ? Foo : Bar }}
			<div>
				<div><component :is="isChange ? Bar : Foo"></component></div>
				<div><Iconx style="width: 200px" color="#165dff" size="60" :component="isChange ? Bar : Foo" /></div>
				<div><n-icon style="width: 200px" color="red" size="30" :component="isChange ? Bar : Foo" /></div>
				<div><Iconx style="width: 200px" color="#165dff" size="60" :component="isChange ? Bar : Foo" /></div>
				<div><n-icon style="width: 200px" color="red" size="30" :component="isChange ? Bar : Foo" /></div>
			</div>
			<div>
				<Foo />
			</div>
			<div>
				<Bar />
			</div>
			<div></div>
		</n-card>

		<n-card class="mt-10 mb-10">
			<Preview></Preview>
			<Form></Form>
		</n-card>
	</div>
</template>
<style scoped></style>
