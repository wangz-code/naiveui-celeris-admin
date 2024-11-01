import { basicRoutes } from '#/router/routes';
import { uniqBy } from '#/utils';
import { APP_TABS_STORE_ID } from 'celeris-constants';
import { defineStore } from 'pinia';
import type { RouteLocationNormalized, RouteRecordName } from 'vue-router';

interface AppTabsState {
  tabs: Tab[];
  maxVisibleTabs: number;
}
export interface Tab {
  name: RouteRecordName;
  fullPath: string;
  title: string;
  pin: boolean;
}
const basicRoutesName = basicRoutes.map((item) => item.name);
export const useTabsStore = defineStore(APP_TABS_STORE_ID, {
  persist: true,
  state: (): AppTabsState => ({
    tabs: [],
    maxVisibleTabs: 3,
  }),
  getters: {
    getTabsList(state): Tab[] {
      return state.tabs;
    },
  },
  actions: {
    addTab(route: RouteLocationNormalized) {
      const { name, meta } = route;
      if (!name || basicRoutesName.includes(name)) {
        return;
      }
      const title = (meta?.title as string) || name.toString().split('-').at(-1);
      if (title) {
        const newTab: Tab = { name, fullPath: route.fullPath, title, pin: false };
        this.tabs = uniqBy([...this.tabs, newTab], 'fullPath').slice(-this.maxVisibleTabs);
      }
    },
    closeTab(tab: Tab) {
      this.tabs = this.tabs.filter((currentTab) => currentTab.fullPath !== tab.fullPath);
    },
    pinnedTab(tab: Tab) {
      tab.pin = !tab.pin;
      return true;
    },
    resetTabsState() {
      this.tabs = [];
      this.maxVisibleTabs = 3;
    },
  },
});

// Need to be used outside the setup
export function useTabsStoreWithOut() {
  return useTabsStore(store);
}
