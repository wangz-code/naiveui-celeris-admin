<script setup lang="ts">
import { RoleConstants } from "@/constants";

const { t } = useI18n();
</script>

<template>
  <NCard :title="t('page.permission.roleButtonText', { role: RoleConstants.USER })" />
</template>

<style scoped>

</style>
