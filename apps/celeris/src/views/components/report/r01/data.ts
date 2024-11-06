import type { R01Data } from '#/apis';
import { tableMoney } from '#/utils/src/numberUtils';
import type { DataTableColumns } from 'naive-ui';
import type { VNodeChild } from 'vue';

export const createColumns = (action: () => VNodeChild): DataTableColumns<R01Data> => {
  const test = [];
  for (let i = 0; i < 50; i++) {
    test.push({
      title: '单据日期' + i,
      key: 'billdate' + i,
      width: 100,
    });
  }
  return [
    {
      type: 'selection',
    },
    {
      title: '单据日期',
      key: 'billdate',
      width: 100,
    },
    {
      title: '姓名',
      key: 'name',
      width: 100,
    },
    {
      title: '联系电话',
      key: 'phone',
      width: 100,
    },
    {
      title: '销售金额',
      key: 'sales',
      width: 100,
      align: 'right',
      render: tableMoney('sales'),
    },
    {
      title: '收款金额',
      width: 100,
      key: 'payment',
      align: 'right',
      render: tableMoney('payment'),
    },
    {
      title: '地址',
      key: 'address',
      width: 100,
    },
    {
      title: '单据状态',
      key: 'state',
      width: 100,
    },
    ...test,
    {
      title: '操作',
      key: 'action',
      fixed: 'right',
      align: 'center',
      width: 100,
      render: action,
    },
    // {
    //   title: '单据日期',
    //   key: 'billdate1',
    // },
    // {
    //   title: '姓名',
    //   key: 'name1',
    // },
    // {
    //   title: '联系电话',
    //   key: 'phone1',
    // },
    // {
    //   title: '销售金额',
    //   key: 'sales1',
    //   align: 'right',
    //   render: tableMoney('sales'),
    // },
    // {
    //   title: '收款金额',
    //   key: 'payment1',
    //   align: 'right',
    //   render: tableMoney('payment'),
    // },
    // {
    //   title: '地址',
    //   key: 'address1',
    // },
    // {
    //   title: '单据状态2',
    //   key: 'state1',
    // },
    // {
    //   title: '操作',
    //   key: 'action1',
    //   render: action,
    // },
  ];
};
