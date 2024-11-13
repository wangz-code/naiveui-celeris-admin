import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const omsStore = createPinia();
omsStore.use(piniaPluginPersistedstate);

export * from './table-column';
export { omsStore };
