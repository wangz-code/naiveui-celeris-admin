<script setup lang="ts">
import { presetPrimaryColors } from "@/utils";
import PageWrapper from "@/components/PageWrapper/src/PageWrapper.vue";
import ColorPalette from "@/pages/design/palette/components/ColorPalette.vue";

defineOptions({
	name: "PalettePage",
});
</script>

<template>
	<PageWrapper use-scrollbar>
		<NGrid cols="4" :x-gap="16" :y-gap="16" responsive="screen" item-responsive>
			<NGridItem v-for="(color, name) in presetPrimaryColors" :key="color">
				<NCard class="overflow-hidden">
					<ColorPalette :key="name" :color-name="name" color-type="hex" :primary-color="color" />
				</NCard>
			</NGridItem>
		</NGrid>
	</PageWrapper>
</template>

<style scoped></style>
