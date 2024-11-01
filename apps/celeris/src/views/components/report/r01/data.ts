import type { R01Data } from '#/apis';
import { tableMoney } from '#/utils/src/numberUtils';
import type { DataTableColumns } from 'naive-ui';
import type { VNodeChild } from 'vue';

export const createColumns = (action: () => VNodeChild): DataTableColumns<R01Data> => {
  return [
    {
      type: 'selection',
    },
    {
      title: '单据日期',
      key: 'billdate',
    },
    {
      title: '姓名',
      key: 'name',
    },
    {
      title: '联系电话',
      key: 'phone',
    },
    {
      title: '销售金额',
      key: 'sales',
      align: 'right',
      render: tableMoney('sales'),
    },
    {
      title: '收款金额',
      key: 'payment',
      align: 'right',
      render: tableMoney('payment'),
    },
    {
      title: '地址',
      key: 'address',
    },
    {
      title: '单据状态',
      key: 'state',
    },
    {
      title: '操作',
      key: 'action',
      render: action,
    },
  ];
};
