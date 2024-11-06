/*
 * @Author: wangqz
 * @Date: 2024-11-04
 * @LastEditTime: 2024-11-04
 * @Description: content
 */
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const omsStore = createPinia();
omsStore.use(piniaPluginPersistedstate);

export * from './table-column';
export { omsStore };
