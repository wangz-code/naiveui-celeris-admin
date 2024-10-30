<script lang="ts" setup>
import { RouterTransitionConstants } from '@/constants';
import { listenToRouteChange } from '@/router/mitt/routeChange';
import { Tab, useTabsStore } from '@/store/modules/tabs';
import { NTag } from 'naive-ui';
import { useI18n } from 'vue-i18n';

defineOptions({
  name: 'LayoutTabs',
});

const router = useRouter();
const tabStore = useTabsStore();

function getCurrentTab() {
  const route = unref(currentRoute);
  return tabStore.getTabsList.find((item) => item.fullPath === route.fullPath)!;
}

const { currentRoute } = router;
const { addTab, pinnedTab, getTabsList } = tabStore;

const tabsList = computed(() => tabStore.getTabsList);
const currentTab = (tab) => getCurrentTab()?.fullPath === tab.fullPath;
const closeTab = (tab: Tab) => {
  tabStore.closeTab(tab);
};

const go = (fullPath: string) => {
  router.push({ path: fullPath });
};

const { t, te } = useI18n();
const localize = (key) => (te(key) ? t(key) : key);

listenToRouteChange((route) => addTab(route));
</script>

<template>
  <TransitionGroup :name="RouterTransitionConstants.FADE" tag="div" class="flex layout-tags items-center gap-2">
    <NTag v-for="tab of tabsList" :key="tab.fullPath" round :bordered="false" :closable="!currentTab(tab)" @close="closeTab(tab)" @click="go(tab.fullPath)">
      <span class="router-name" :class="{ 'current-tab': currentTab(tab) }">
        {{ localize(tab.title) }}
      </span>
    </NTag>
  </TransitionGroup>
</template>

<style scoped>
.layout-tags {
  position: relative;
}
.layout-tags :deep(.ca-tag) {
  background-color: var(--action-color);
}

.pinned-list :deep(.ca-tag) {
  background-color: var(--action-color);
}

.layout-tags :deep(.ca-tag).ca-tag--round {
  padding: 0.5rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 400ms;
}
.layout-tags :deep(.ca-tag) .ca-tag__icon {
  margin: 0 !important;
}
.layout-tags :deep(.ca-tag):hover.ca-tag--round {
  padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 3);
}

.layout-tags :deep(.ca-tag):hover .ca-tag__close {
  scale: 1.3;
}

.layout-tags .router-name {
  cursor: pointer;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.layout-tags .current-tab {
  color: var(--primary-color);
}
</style>
