import { tableMoney } from "@/utils/src/numberUtils";
import { DataTableColumns } from "naive-ui";

type Cols = DataTableColumns & {
	money: boolean;
};

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
	return tableMoney([
		{
			type: "selection",
		},
		{
			title: "单据日期",
			key: "billdate",
		},
		{
			title: "姓名",
			key: "name",
		},
		{
			title: "联系电话",
			key: "phone",
		},
		{
			title: "销售金额",
			key: "sales",
			money: true,
		},
		{
			title: "收款金额",
			key: "payment",
			money: true,
		},
		{
			title: "地址",
			key: "address",
		},
		{
			title: "单据状态",
			key: "state",
		},
	]);
};
