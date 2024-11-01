<script lang="ts" setup>
defineOptions({
  name: 'SidebarHeader',
});

const props = defineProps<{
  collapsed?: boolean;
}>();
const { collapsed } = toRefs(props);
</script>

<template>
  <div class="my-auto flex">
    <AppLogo :display-title="!collapsed" />
  </div>
</template>

<style scoped></style>
