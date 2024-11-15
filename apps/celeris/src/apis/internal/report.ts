import { Get } from '../interceptor';
import type { TableRes } from '../type';

export interface R01Data {
  id: number;
  billdate: string;
  name: string;
  phone: string;
  sales: number;
  payment: number;
  address: string;
  state: number;
}

type RowData = R01Data;

export function getR01(params: { page: number; pageSize: number }) {
  return Get<TableRes<RowData[]>>('/table/r01', { params });
}
