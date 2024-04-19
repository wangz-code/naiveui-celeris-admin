<script setup lang="ts">
import { logger } from "~/utils";
import { useNaiveUIConfigProvider } from "~/composables";
import { subscribeStore } from "~/store/subscribe";

/**
 * Subscribe to the store.
 * 订阅 store。
 */
subscribeStore();
logger.info("I'm ready!  ⸜(๑'ᵕ'๑)⸝⋆*");
const { configProviderProps } = useNaiveUIConfigProvider();
</script>

<template>
	<n-config-provider v-bind="configProviderProps">
		<n-notification-provider>
			<n-message-provider>
				<n-dialog-provider>
					<RouterView />
				</n-dialog-provider>
			</n-message-provider>
		</n-notification-provider>
	</n-config-provider>
	<!-- <NConfigProvider v-bind="configProviderProps" class="w-full h-full">
		<CAAppNaiveUIProvider>
		</CAAppNaiveUIProvider>
	</NConfigProvider> -->
</template>
