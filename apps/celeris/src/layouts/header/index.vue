<script setup lang="ts">
import CollapseButton from '#/layouts/header/components/CollapseButton.vue';
import FullScreenButton from '#/layouts/header/components/FullScreenButton.vue';
import LocaleSwitcher from '#/layouts/header/components/LocaleSwitcher.vue';
import UserInfoButton from '#/layouts/header/components/UserInfoButton.vue';
import SettingButton from '#/layouts/setting/index.vue';
import SearchAnyWhere from '#/layouts/header/components/SearchAnyWhere.vue';
import LayoutTabs from '#/layouts/tabs/index.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import { useMenuSetting } from '#/composables/setting/useMenuSetting';
import { isSmallerOrEqualSm } from '#/hooks';

defineOptions({
  name: 'HeaderLayout',
});
const { getCollapsed } = useMenuSetting();


</script>

<template>
  <div class="flex h-16 items-center justify-between">
    <div class="flex">
      <div class="md:block px-4">
        <CollapseButton />
      </div>
      <div class="flex-1 <lg:hidden">
        <Breadcrumb />
      </div>
    </div>
    <div class="items-center <xl:hidden">
      <LayoutTabs />
    </div>
    <div class="flex h-16 items-center justify-end">
      <div class="flex" v-if="!isSmallerOrEqualSm || isSmallerOrEqualSm && getCollapsed">
        <NSpace>
          <SearchAnyWhere class="<md:hidden" />
          <div class="flex items-center justify-center">
            <NSpace>
              <FullScreenButton />
              <LocaleSwitcher />
              <SettingButton />
            </NSpace>
          </div>
        </NSpace>
      </div>
      <div class="px-4">
        <UserInfoButton />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
