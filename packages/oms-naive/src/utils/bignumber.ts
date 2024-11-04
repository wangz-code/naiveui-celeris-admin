import Big from 'bignumber.js';
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
