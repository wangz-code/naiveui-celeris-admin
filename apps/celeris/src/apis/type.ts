/*
 * @Author: wangqz
 * @Date: 2024-10-29
 * @LastEditTime: 2024-10-30
 * @Description: content
 */

export type DefRes<T> = {
  data: T;
  message: { code: string; info: string };
  status: 'success' | 'fail';
};
