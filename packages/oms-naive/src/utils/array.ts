/*
 * @Author: wangqz
 * @Date: 2024-10-14
 * @LastEditTime: 2024-10-14
 * @Description: content
 */
/**
 *
 * @param arr object[]
 * @param field  string
 * @returns object[]
 * @descript 对象数组去重
 * @descript 已加入自动导入
 */
export function uniArr(arr: any[] = [], field: string): any[] {
  const map = new Map();
  return arr.filter((item) => !map.has(item[field]) && map.set(item[field], 0));
}
