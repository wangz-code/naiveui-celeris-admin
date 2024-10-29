<script setup lang="ts">
import { useMenuSetting } from "@/composables/setting/useMenuSetting";
import { ActionIcon } from "@/components/ActionIcon";
import { ChevronBackCircleOutline, ChevronForwardCircleOutline } from "@vicons/ionicons5";

const { t } = useI18n();

const { toggleCollapsed, getCollapsed } = useMenuSetting();
</script>

<template>
  <ActionIcon :tooltip-text="t('layouts.header.toggleCollapsed')"  :component="getCollapsed ? ChevronForwardCircleOutline : ChevronBackCircleOutline" @click="toggleCollapsed()" />
</template>