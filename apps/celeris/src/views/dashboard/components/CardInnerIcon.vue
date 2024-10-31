<script setup lang="ts">
import { useThemeVars } from 'naive-ui';

const defaultProps = withDefaults(
  defineProps<{
    containerSize?: number;
    iconSize?: number;
    iconName?: string | any;
    container?: boolean;
    color?: string;
  }>(),
  { containerSize: 40, iconSize: 28, container: false },
);

const { container, containerSize, iconSize, color: iconColorOverride, iconName } = toRefs(defaultProps);
const themeVariables = useThemeVars();

const iconContainerStyle = computed(() => `${containerSize.value}px`);
const iconColor = computed(() => iconColorOverride?.value || themeVariables.value.primaryColor);
const iconContainerSize = computed(() => (containerSize.value / 100) * 45);
const iconFinalSize = computed(() => (container?.value ? iconContainerSize.value : iconSize.value));
</script>

<template>
  <div class="card-inner-icon flex-center relative" :class="{ boxed: container }">
    <div v-if="container" class="card-inner-icon--bg top-0 left-0 w-full h-full" />
    <Iconx :size="iconFinalSize" :component="iconName"></Iconx>
  </div>
</template>

<style scoped>
.card-inner-icon {
  color: v-bind(iconColor);
  width: v-bind(iconContainerStyle);
}
.card-inner-icon.boxed {
  height: v-bind(iconContainerStyle);
}
.card-inner-icon.boxed .card-inner-icon--bg {
  background-color: v-bind(iconColor);
  opacity: 0.1;
  position: absolute;
  border-radius: 50%;
}
</style>
