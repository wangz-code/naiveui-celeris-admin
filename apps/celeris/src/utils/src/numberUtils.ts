/*
 * @Author: wangqz
 * @Date: 2024-07-25
 * @LastEditTime: 2024-11-08
 * @Description: content
 */

import Big from 'bignumber.js';
import type { CompareFn } from 'naive-ui/es/data-table/src/interface';
/**
 * @param val 值
 * @param point 小数位
 * @returns 千分符
 */
export function Money(val: string | number | any, point = 2) {
  const res = new Big(val);
  if (res.isNaN()) return '0.00';
  return res.toFormat(point);
}

// 格式化table cols
export function tableMoney(key: string) {
  return (row: any) => Money(row[key]);
}

// 生成table col
export function tableGen(data: Array<any>) {
  return data.map(([key, title, align, render]) => ({ key, title, align, render }));
}

/** 表格排序  */
export function tableSort<T>(type: 'string' | 'number' | 'date', key: keyof T): CompareFn<T> {
  if (type == 'number') return (a, b) => Number(a[key]) - Number(b[key]);
  if (type == 'date') return (a, b) => new Date(a[key] as string).getTime() - new Date(b[key] as string).getTime();
  if (type == 'string') return (a, b) => String(a[key]).charCodeAt(0) - String(b[key]).charCodeAt(0);
  return () => 0;
}
export const sortNumber = <T>(key: keyof T) => tableSort('number', key);
export const sortDate = <T>(key: keyof T) => tableSort('date', key);
export const sortString = <T>(key: keyof T) => tableSort('string', key);
