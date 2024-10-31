<script lang="ts" setup>
defineOptions({
  name: 'Copy',
});
const { t } = useI18n();
const message = useMessage();
const source = ref('');
function handleCopy() {
  message.success(t('page.copyDirective.copySuccess'));
}
</script>

<template>
  <NCard :title="t('page.copyDirective.copyDirective')">
    <div v-copy="123">copyMe</div>
    <NInputGroup>
      <NInput v-model:value="source" :placeholder="t('page.copyDirective.copyPlaceholder')" />
      <NButton v-copy="source" type="primary" @click="handleCopy">
        {{ t('page.copyDirective.copy') }}
      </NButton>
    </NInputGroup>
  </NCard>
</template>

<style scoped></style>
