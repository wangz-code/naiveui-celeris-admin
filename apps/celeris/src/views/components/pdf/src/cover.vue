<template>
  <div>
    <n-input-group>
      <n-input-group-label size="tiny">宽高</n-input-group-label>
      <n-input-number v-if="qrcode" v-model:value="fit" size="tiny" style="width: 80px" />
      <template v-else>
        <n-input-number v-model:value="cover.width" size="tiny" style="width: 40px" :show-button="false" />
        <n-input-number v-model:value="cover.height" size="tiny" style="width: 40px" :show-button="false" />
      </template>
    </n-input-group>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ qrcode?: boolean }>();
const cover = defineModel<{ width: number; height: number }>('cover', { default: { width: 10, height: 10 } });
const fit = defineModel<number>('fit', { default: 10 });
</script>
