<script lang="ts" setup>
import { useThemeSetting } from '#/composables';
import { SettingMenu } from '#/layouts/setting/components/SettingDrawer/components';
import { Checkmark, Moon, Sunny } from '@vicons/ionicons5';

defineOptions({ name: 'DarkMode' });

const { getDarkMode, setDarkMode, getFollowSystemTheme, setFollowSystemTheme } = useThemeSetting();
const { t } = useI18n();
</script>

<template>
  <NDivider title-placement="center">
    {{ t('layouts.header.themeMode') }}
  </NDivider>
  <NSpace vertical size="large">
    <SettingMenu :label="t('layouts.header.darkMode')">
      <NSwitch :value="getDarkMode" @update:value="setDarkMode">
        <template #checked-icon>
          <Iconx :component="Moon"></Iconx>
        </template>
        <template #unchecked-icon>
          <Iconx :component="Sunny"></Iconx>
        </template>
      </NSwitch>
    </SettingMenu>
    <SettingMenu :label="t('layouts.header.followSystem')">
      <NSwitch :value="getFollowSystemTheme" @update:value="setFollowSystemTheme">
        <template #checked-icon>
          <Iconx :component="Checkmark"></Iconx>
        </template>
      </NSwitch>
    </SettingMenu>
  </NSpace>
</template>

<style scoped></style>
