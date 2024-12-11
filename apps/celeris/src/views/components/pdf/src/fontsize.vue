<template>
  <div>
    <n-input-group>
      <n-input-group-label size="tiny">字体</n-input-group-label>
      <n-input-number v-model:value="fontSize" size="tiny" style="width: 70px" />
    </n-input-group>
  </div>
</template>

<script lang="ts" setup>
const fontSize = defineModel('fontsize', { default: 10 });
</script>
