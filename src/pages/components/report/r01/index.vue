<!--
 * @Author: wangqz
 * @Date: 2024-07-22
 * @LastEditTime: 2024-07-24
 * @Description: content
-->
<template>
	<page-wrapper use-scrollbar>
		<n-card>
			<template #header>
				<n-h4>{{ t("routes.components.report001") }}</n-h4>
			</template>

			<n-form ref="formRef" label-placement="left" label-width="auto" :model="formValue">
				<n-grid :x-gap="8" :y-gap="0" cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">
					<n-grid-item>
						<n-form-item label="姓名" path="user.name">
							<n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
						</n-form-item>
					</n-grid-item>
					<n-grid-item>
						<n-form-item label="年龄" path="user.age">
							<n-input v-model:value="formValue.user.age" placeholder="输入年龄" />
						</n-form-item>
					</n-grid-item>
					<n-grid-item>
						<n-form-item label="电话号码" path="phone">
							<n-input v-model:value="formValue.phone" placeholder="电话号码" />
						</n-form-item>
					</n-grid-item>
					<n-grid-item>
						<n-form-item label="电话号码" path="phone">
							<n-input v-model:value="formValue.phone" placeholder="电话号码" />
						</n-form-item>
					</n-grid-item>
					<n-grid-item>
						<n-form-item label="姓名" path="user.name">
							<n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
						</n-form-item>
					</n-grid-item>
					<n-grid-item>
						<n-space reverse>
							<n-button-group>
								<n-button type="primary" @click="comp = ChevronsDown"> 查询 </n-button>
								<n-button @click="comp = ChevronsUp"> 重置 </n-button>
								<n-button @click="filterShow = !filterShow">
									<template #icon>
										<Iconx :component="filterShow ? ChevronsUp : ChevronsDown" :size="16" />
									</template>
								</n-button>
								<!-- <n-button> 导出 </n-button>
								<n-button> 批量导入 </n-button> -->
							</n-button-group>
						</n-space>
					</n-grid-item>
				</n-grid>
				<Transition name="fade" mode="out-in" appear>
					<div v-show="filterShow">
						<n-grid :x-gap="8" :y-gap="0" cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">
							<n-grid-item>
								<n-form-item label="姓名" path="user.name">
									<n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
								</n-form-item>
							</n-grid-item>
							<n-grid-item>
								<n-form-item label="年龄" path="user.age">
									<n-input v-model:value="formValue.user.age" placeholder="输入年龄" />
								</n-form-item>
							</n-grid-item>
							<n-grid-item>
								<n-form-item label="电话号码" path="phone">
									<n-input v-model:value="formValue.phone" placeholder="电话号码" />
								</n-form-item>
							</n-grid-item>
							<n-grid-item>
								<n-form-item label="电话号码" path="phone">
									<n-input v-model:value="formValue.phone" placeholder="电话号码" />
								</n-form-item>
							</n-grid-item>
							<n-grid-item>
								<n-form-item label="姓名" path="user.name">
									<n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
								</n-form-item>
							</n-grid-item>
						</n-grid>
					</div>
				</Transition>
			</n-form>
			<n-data-table :columns="columns()" :data="table.source" :pagination="pagination" :loading="table.isLoading" />
		</n-card>
	</page-wrapper>
</template>

<script lang="ts" setup>
import { h } from "vue";
import type { DataTableColumns, DataTableCreateSummary, FormInst } from "naive-ui";
import { RowData, createColumns as columns } from "./data";
import { useQuery, useQueryClient } from "@tanstack/vue-query";
import { getR01 } from "@/apis/internal/report";
import { ChevronsDown, ChevronsUp } from "@vicons/tabler";

const { t } = useI18n();

const message = useMessage();
const formRef = ref<FormInst | null>(null);
const filterShow = ref(false);
const formValue = ref({
	user: {
		name: "",
		age: "",
	},
	phone: "",
	select: "",
});
const comp = ref<any>();
const options = [
	{
		label: "Everybody's Got Something to Hide Except Me and My Monkey",
		value: "song0",
		disabled: true,
	},
	{
		label: "Drive My Car",
		value: "song1",
	},
	{
		label: "请选择",
		value: "",
	},
	{
		label: "You Won't See",
		value: "song3",
		disabled: true,
	},
	{
		label: "Nowhere Man",
		value: "song4",
	},
	{
		label: "Think For Yourself",
		value: "song5",
	},
	{
		label: "The Word",
		value: "song6",
	},
	{
		label: "Michelle",
		value: "song7",
		disabled: true,
	},
	{
		label: "What goes on",
		value: "song8",
	},
	{
		label: "Girl",
		value: "song9",
	},
	{
		label: "I'm looking through you",
		value: "song10",
	},
	{
		label: "In My Life",
		value: "song11",
	},
	{
		label: "Wait",
		value: "song12",
	},
];
const handleValidateClick = (e: MouseEvent) => {
	e.preventDefault();
	formRef.value?.validate((errors) => {
		if (!errors) {
			onQuery();
		} else {
			console.log(errors);
			message.error("Invalid");
		}
	});
};

const onQuery = async () => {
	try {
		table.isLoading = true;
		const { data } = await getR01();
		if (data.status == "success") table.source = data.data;
	} catch (error) {
	} finally {
		table.isLoading = false;
	}
};

const createSummary: DataTableCreateSummary = (pageData) => {
	return {
		name: {
			value: h(
				"span",
				{ style: { color: "red" } },
				(pageData as unknown as RowData[]).reduce((prevValue, row) => prevValue, 0)
			),
			colSpan: 3,
		},
	};
};

const pagination = reactive({
	page: 2,
	pageSize: 10,
	showSizePicker: true,
	pageSizes: [10, 20, 100],
	onChange: (page: number) => {
		pagination.page = page;
	},
	onUpdatePageSize: (pageSize: number) => {
		pagination.pageSize = pageSize;
		pagination.page = 1;
	},
});
const table = reactive({ source: [], isLoading: false, summary: createSummary });
onQuery();
</script>
