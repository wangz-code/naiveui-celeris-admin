<script setup lang="ts">
import { setLocal, Locale, $t, langs } from '#/locales';
import { ActionIcon } from '#/components/ActionIcon';

import { useAppSetting } from '#/composables';
import { Language } from '@vicons/ionicons5';
const { setProjectSetting } = useAppSetting();

function handleSelect(key: Locale) {
  setProjectSetting({ locale: key });
  setLocal(key);
}
</script>

<template>
  <NDropdown :options="langs" trigger="click" @select="handleSelect">
    <ActionIcon :tooltip-text="$t('layouts.header.switchLocale')" :component="Language" />
  </NDropdown>
</template>

<style scoped></style>
