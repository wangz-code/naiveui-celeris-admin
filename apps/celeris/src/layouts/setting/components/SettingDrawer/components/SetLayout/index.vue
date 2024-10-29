<script lang="ts" setup>
import { useThemeSetting } from "@/composables";
import { SettingMenu } from "@/layouts/setting/components/SettingDrawer/components";
import { Checkmark, Moon, Sunny } from "@vicons/ionicons5";

defineOptions({ name: "SetLayout" });

const { setProjectSetting, getShouldShowFooter, getShouldUseOpenBackTop } = useAppSetting();
const { t } = useI18n();

const setConfig = (value, key: string) => {
	setProjectSetting({
		[key]: value,
	});
};
</script>

<template>
	<NDivider title-placement="center">
		{{ t("layouts.header.layout") }}
	</NDivider>
	<NSpace vertical size="large">
		<SettingMenu :label="t('layouts.header.footer')">
			<NSwitch :value="getShouldShowFooter" @update:value="setConfig($event, 'shouldShowFooter')" />
		</SettingMenu>
		<SettingMenu :label="t('layouts.header.backtop')">
			<NSwitch :value="getShouldUseOpenBackTop" @update:value="setConfig($event, 'shouldUseOpenBackTop')" />
		</SettingMenu>
	</NSpace>
</template>

<style scoped></style>
