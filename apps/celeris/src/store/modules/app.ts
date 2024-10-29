import { defineStore } from 'pinia';
import type { DeepPartial } from 'unocss';
import { APP_STORE_ID } from '@/constants';
import type { HeaderSetting, MenuSetting, ProjectSetting, TransitionSetting } from '@/types';
import { deepMerge } from '@/utils';
import { resetRouter } from '@/router';
import { DEFAULT_PROJECT_SETTING } from '@/setting/projectSetting';

let pageLoadingTimeout: ReturnType<typeof setTimeout>;

export const useAppStore = defineStore(APP_STORE_ID, {
  state: () => ({
    projectSetting: DEFAULT_PROJECT_SETTING,
    pageLoading: false,
  }),
  persist: {
    pick: ['projectSetting'],
  },
  getters: {
    getPageLoading(state): boolean {
      return state.pageLoading;
    },
    getProjectSetting(state) {
      return (state.projectSetting || {}) as ProjectSetting;
    },
    getMenuSetting(): MenuSetting {
      return this.getProjectSetting.menuSetting;
    },
    getHeaderSetting(): HeaderSetting {
      return this.projectSetting.headerSetting;
    },
    getTransitionSetting(): TransitionSetting {
      return this.projectSetting.transitionSetting;
    },
  },
  actions: {
    setPageLoading(loading: boolean): void {
      this.pageLoading = loading;
    },
    setProjectSetting(config: DeepPartial<ProjectSetting>): void {
      this.projectSetting = deepMerge(this.projectSetting || {}, config);
    },
    setMenuSetting(menuSetting: Partial<MenuSetting>): void {
      this.setProjectSetting({ menuSetting });
    },
    setHeaderSetting(headerSetting: Partial<HeaderSetting>): void {
      this.setProjectSetting({ headerSetting });
    },
    setTransitionSetting(transitionSetting: Partial<TransitionSetting>): void {
      this.setProjectSetting({ transitionSetting });
    },
    setPageLoadingAction(loading: boolean) {
      clearTimeout(pageLoadingTimeout);
      if (loading) {
        // Prevent flicker by delaying the setPageLoading call
        pageLoadingTimeout = setTimeout(() => {
          this.setPageLoading(loading);
        }, 50);
      } else {
        this.setPageLoading(loading);
      }
    },
    resetAPPState() {
      resetRouter();
      this.setProjectSetting(DEFAULT_PROJECT_SETTING);
    },
  },
});

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store);
}
