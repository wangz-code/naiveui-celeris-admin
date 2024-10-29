<!--
 * @Author: wangqz
 * @Date: 2024-07-22
 * @LastEditTime: 2024-10-28
 * @Description: content
-->
<template>
	<n-card>
		<n-form ref="formRef" inline :label-width="80" :model="formValue">
			<n-form-item label="姓名" path="user.name">
				<n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
			</n-form-item>
			<n-form-item label="年龄" path="user.age">
				<n-input v-model:value="formValue.user.age" placeholder="输入年龄" />
			</n-form-item>
			<n-form-item label="电话号码" path="phone">
				<n-input v-model:value="formValue.phone" placeholder="电话号码" />
			</n-form-item>
			<n-form-item label="姓名" path="user.name">
				<n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
			</n-form-item>
			<n-form-item label="年龄" path="user.age">
				<n-input v-model:value="formValue.user.age" placeholder="输入年龄" />
			</n-form-item>
			<n-form-item label="电话号码" path="phone">
				<n-input v-model:value="formValue.phone" placeholder="电话号码" />
			</n-form-item>
			<n-form-item>
				<n-button attr-type="button" type="primary" @click="handleValidateClick"> 查询 </n-button>
			</n-form-item>
		</n-form>
		<n-space>
			<n-button>Default</n-button>
			<n-button type="tertiary"> Tertiary </n-button>
			<n-button type="primary"> Primary </n-button>
			<n-button type="tertiary"> Tertiary </n-button>
			<n-button type="tertiary"> Tertiary </n-button>
			<n-button type="tertiary"> Tertiary </n-button>
			<n-button type="tertiary"> Tertiary </n-button>
		</n-space>
		<n-divider dashed />
		<n-data-table :columns="state.columns" :data="state.data" :summary="state.summary" size="small" :pagination="pagination" />
	</n-card>
</template>

<script lang="ts" setup>
import { h } from "vue";
import type { DataTableColumns, DataTableCreateSummary, FormInst } from "naive-ui";
const { t } = useI18n();

interface RowData {
	key: number;
	name: string;
	age: number;
	address: string;
}
const message = useMessage();
const formRef = ref<FormInst | null>(null);
const formValue = ref({
	user: {
		name: "",
		age: "",
	},
	phone: "",
});

const handleValidateClick = (e: MouseEvent) => {
	e.preventDefault();
	formRef.value?.validate((errors) => {
		if (!errors) {
			message.success("Valid");
		} else {
			console.log(errors);
			message.error("Invalid");
		}
	});
};

const createColumns = (): DataTableColumns<RowData> => {
	return [
		{
			type: "selection",
		},
		{
			title: "Name",
			key: "name",
		},
		{
			title: "Age",
			key: "age",
		},
		{
			title: "Address",
			key: "address",
		},
	];
};

const createData = (): RowData[] => {
	const res: RowData[] = [];
	for (let i = 0; i < 100; i++) {
		res.push({
			key: i,
			name: "John Brown" + i,
			age: 32,
			address: "New York No. 1 Lake Park",
		});
	}
	return res;
};

const createSummary: DataTableCreateSummary = (pageData) => {
	return {
		name: {
			value: h(
				"span",
				{ style: { color: "red" } },
				(pageData as unknown as RowData[]).reduce((prevValue, row) => prevValue + row.age, 0)
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
const state = { summary: createSummary, data: createData(), columns: createColumns() };
</script>
