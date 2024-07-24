import { DataTableColumns } from "naive-ui";

export interface RowData {
	key: string;
	billdate: string;
	name: string;
	phone: string;
	sales: number;
	payment: number;
	address: string;
	state: number;
}
export const createColumns = (): DataTableColumns<RowData> => {
	return [
		{
			type: "selection",
		},
		{
			title: "单据日期",
			key: "billdate",
		},
		{
			title: "顾客",
			key: "name",
		},
		{
			title: "联系电话",
			key: "phone",
		},
		{
			title: "销售金额",
			key: "sales",
		},
		{
			title: "收款金额",
			key: "payment",
		},
		{
			title: "地址",
			key: "address",
		},
		{
			title: "单据状态",
			key: "state",
		},
	];
};
