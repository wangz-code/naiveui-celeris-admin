<script setup lang="ts">
import { LocalesEngine, languagesNameList, useI18n } from "@/locale";
import { ActionIcon } from "@/components/ActionIcon";

import { useAppSetting } from "@/composables";
import { Language } from "@vicons/ionicons5";

const { getLocale, setProjectSetting } = useAppSetting();
const { locale, availableLocales, t } = useI18n();
console.log("locale.value log==>", locale.value);

const options = computed(() =>
	availableLocales.map((item) => ({
		label: languagesNameList.find((languagesName) => languagesName.code === item)?.nativeName,
		key: item,
	}))
);
function handleSelect(key: string) {
	setProjectSetting({ locale: key });
	locale.value = key;
	LocalesEngine.setLocale(key);
}
</script>

<template>
	<NDropdown :options="options" trigger="click" :value="getLocale" @select="handleSelect">
		<ActionIcon :tooltip-text="t('layouts.header.switchLocale')" :component="Language" />
	</NDropdown>
</template>

<style scoped></style>
