import { tableGen, tableMoney } from '#/utils/src/numberUtils';
import { DataTableColumns } from 'naive-ui';

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
  return tableGen([
    ['billdate', '单据日期'],
    ['name', '姓名'],
    ['phone', '联系电话'],
    ['address', '地址'],
    ['state', '单据状态'],
    ['sales', '销售金额', 'right', tableMoney('sales')],
    ['payment', '收款金额', 'right', tableMoney('payment')],
    ['action', '操作', 'center'],
  ]);
};
