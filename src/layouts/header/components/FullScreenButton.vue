<script setup lang="ts">
import { ActionIcon } from "@/components/ActionIcon";
import { FullScreenSvg } from "@/components/Iconx/svgs";

const { toggle: toggleFullScreen } = useFullscreen();
const { t } = useI18n();
</script>

<template>
	<ActionIcon :tooltip-text="t('layouts.header.toggleFullScreen')" :component="FullScreenSvg" @click="toggleFullScreen" />
</template>

<style scoped></style>
