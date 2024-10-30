/*
 * @Author: wangqz
 * @Date: 2024-10-29
 * @LastEditTime: 2024-10-29
 * @Description: content
 */

export type PostRes<T> = {
  data: T;
  message: { code: string; info: string };
  status: 'success' | 'fail';
};
