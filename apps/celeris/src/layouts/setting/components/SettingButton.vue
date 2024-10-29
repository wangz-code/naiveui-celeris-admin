<script setup lang="ts">
import { useHeaderSetting } from "@/composables";
import { ActionIcon } from "@/components/ActionIcon";
import { Settings } from "@vicons/ionicons5";

const { toggleShouldShowSettingDrawer } = useHeaderSetting();
const { t } = useI18n();
</script>

<template>
  <ActionIcon
    :tooltip-text="t('layouts.header.openSettingDrawer')" :component="Settings"
    @click="toggleShouldShowSettingDrawer"
  />
</template>

<style scoped>

</style>