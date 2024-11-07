<script setup lang="ts">
import { useMenuSetting } from '#/composables';
import { isGreaterOrEqualSm } from '#/hooks';
import MenuLayout from '#/layouts/sidebar/components/Menu.vue';
import SidebarFooter from './components/SidebarFooter.vue';
import SidebarHeader from './components/SidebarHeader.vue';
defineOptions({
  name: 'SidebarLayout',
});

const isCollapse = useMenuSetting().getCollapsed;
const sidebar = ref(null);
watch(
  () => isGreaterOrEqualSm.value,
  (n) => {
    useMenuSetting().setMenuSetting({
      collapsed: !n,
    });
  },
);
</script>

<template>
  <aside id="sidebar" class="sidebar flex flex-col h-full" :class="{ collapsed: isCollapse, opened: !isCollapse }">
    <div ref="sidebar" class="sidebar-wrap grow flex flex-col">
      <SidebarHeader :collapsed="isCollapse" />
      <NScrollbar>
        <MenuLayout :collapsed="isCollapse" />
      </NScrollbar>
      <SidebarFooter :collapsed="isCollapse" />
    </div>
  </aside>
</template>

<style scoped></style>
