<script setup lang="ts">
import { useNaiveUIConfigProvider } from '#/composables';
import { subscribeStore } from '#/store/subscribe';
import { ViteEnvVariables } from 'celeris-types';

/**
 * Subscribe to the store.
 * 订阅 store。
 */
subscribeStore();
const { configProviderProps } = useNaiveUIConfigProvider();
</script>

<template>
  <n-config-provider v-bind="configProviderProps" class="w-full h-full">
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
