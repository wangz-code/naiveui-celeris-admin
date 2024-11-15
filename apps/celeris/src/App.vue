<script setup lang="ts">
import { useNaiveUIConfigProvider } from '#/composables';
import { subscribeStore } from '#/store/subscribe';
import { dateZhCN, dateEnUS, zhCN, enUS } from 'naive-ui';

/**
 * Subscribe to the store.
 * 订阅 store。
 */
subscribeStore();
const { configProviderProps } = useNaiveUIConfigProvider();
const { getLocale } = useAppSetting();

const local = () => {
  return getLocale.value == 'zh-CN'
    ? {
        locale: zhCN,
        dateLocale: dateZhCN,
      }
    : {
        locale: enUS,
        dateLocale: dateEnUS,
      };
};
</script>

<template>
  <n-config-provider v-bind="{ ...configProviderProps, ...local() }" class="w-full h-full">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <RouterView />
            <n-global-style />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
