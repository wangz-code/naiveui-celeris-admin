/*
 * @Author: wangqz
 * @Date: 2024-10-29
 * @LastEditTime: 2024-10-31
 * @Description: content
 */

export type DefRes<T> = {
  data: T;
  message: { code: string; info: string };
  status: 'success' | 'fail';
};

export type TableRes<T> = {
  data: { items: T; total: number };
  message: { code: string; info: string };
  status: 'success' | 'fail';
};
