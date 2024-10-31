<script setup lang="ts">
import { getTransitionName } from '#/layouts/transition';
import { useTransitionSetting } from '#/composables';

defineOptions({
  name: 'ContentLayout',
});
const { getShouldEnableTransition: enableTransition } = useTransitionSetting();
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition appear mode="out-in" :name="getTransitionName({ route }, { enableTransition })">
      <Component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
</template>

<style scoped></style>
