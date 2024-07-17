import AutoImport from "unplugin-auto-import/vite";
import type { PluginOption } from "vite";

export function createAutoImportPluginConfig(): PluginOption {
	// https://github.com/antfu/unplugin-auto-import
	return AutoImport({
		imports: [
			"vue",
			"vue-router",
			"vue-i18n",
			"@vueuse/core",
			{
				"@celeris/hooks": ["useComponentRef", "useLoading", "useMergeState", "useScreen", "useState"],
			},
			{
				"naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"],
			},
		],
		dts: "autoResolver/auto-imports.d.ts",
		dirs: ["src/composables", "src/store"],
		vueTemplate: true,
	});
}
