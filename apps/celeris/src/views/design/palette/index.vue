<script setup lang="ts">
import ColorPalette from '#/views/design/palette/components/ColorPalette.vue';
import { presetPrimaryColors } from '#/utils';

defineOptions({
  name: 'PalettePage',
});
</script>

<template>
  <NGrid cols="4" :x-gap="16" :y-gap="16" responsive="screen" item-responsive>
    <NGridItem v-for="(color, name) in presetPrimaryColors" :key="color">
      <NCard class="overflow-hidden">
        <ColorPalette :key="name" :color-name="name" color-type="hex" :primary-color="color" />
      </NCard>
    </NGridItem>
  </NGrid>
</template>

<style scoped></style>
