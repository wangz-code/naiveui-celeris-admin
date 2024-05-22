<script setup lang="ts">
import { presetPrimaryColors } from "@/utils";
import PageWrapper from "@/components/PageWrapper/src/PageWrapper.vue";
import ColorPalette from "@/pages/design/palette/components/ColorPalette.vue";

defineOptions({
  name: "PalettePage",
});
</script>

<template>
  <PageWrapper>
    <NScrollbar class="max-h-context rounded-2xl">
      <NGrid cols="4" :x-gap="16" :y-gap="16" responsive="screen" item-responsive>
        <NGridItem v-for="(color, name) in presetPrimaryColors" :key="color">
          <NCard>
            <ColorPalette
              :key="name"
              :color-name="name"
              color-type="hex"
              :primary-color="color"
            />
          </NCard>
        </NGridItem>
      </NGrid>
    </NScrollbar>
  </PageWrapper>
</template>

<style scoped>

</style>
