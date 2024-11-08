import type { R01Data } from '#/apis';
import { tableMoney } from '#/utils/src/numberUtils';
import { Money } from '@oms/naive';
import type { DataTableColumns, DataTableCreateSummary } from 'naive-ui';
import type { SummaryCell } from 'naive-ui/es/data-table/src/interface';
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
      fixed: 'left',
    },
    {
      title: '单据日期',
      key: 'billdate',
      sorter: (a, b) => new Date(a.billdate).getTime() - new Date(b.billdate).getTime(),
      width: 100,
    },
    {
      title: '姓名',
      key: 'name',
      sorter: (a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0),
      width: 100,
    },
    {
      title: '联系电话',
      key: 'phone',
      ellipsis: {
        tooltip: true,
      },
      width: 120,
    },
    {
      title: '销售金额91',
      key: 'sales',
      width: 150,
      align: 'right',
      sorter: (a, b) => a.sales - b.sales,
      render: tableMoney('sales'),
    },
    {
      title: '收款金额1',
      width: 100,
      key: 'payment',
      align: 'right',
      sorter: true,
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
      width: 80,
      render: action,
    },
  ];
};
// 定义 render 函数，其中 field 参数接受 R01Data 中的所有键
const render = <T>(pageData: T[], field: keyof T) => h('span', {}, Money(pageData.reduce((prevValue, row) => prevValue + Number(row[field]), 0)));

const reduceSummary = <T>(pageData: T[], fields: (keyof T)[]) => {
  const sum = {} as { [k in keyof T]: SummaryCell };
  sum[fields[0]] = { value: '合计' };
  for (let i = 1; i < fields.length; i++) {
    const key = fields[i];
    sum[key] = { value: render(pageData, key) };
  }
  return sum;
};

export const createSummary: DataTableCreateSummary<R01Data> = (pageData) => {
  return reduceSummary(pageData, ['billdate', 'sales', 'payment']);
};
