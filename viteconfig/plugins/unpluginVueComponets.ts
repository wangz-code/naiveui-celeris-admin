import type { ComponentResolver } from "unplugin-vue-components";
import Components from "unplugin-vue-components/vite";
import type { PluginOption } from "vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

/**
 * @param componentName
 * @desc 自动导入xicons https://xicons.org/#/zh-CN
 */
const XiconResolver = () => {
	return (componentName: string) => {
		console.log('componentName log==>',componentName);
		
		// ionicons5
		if (componentName.startsWith("Xicon")) {
			console.log("自动导入图标 log==>", componentName);
			return {
				name: componentName.slice(5),
				from: "@vicons/ionicons5",
			};
		}
	};
};

export function createVueComponentsPluginConfig(): PluginOption {
	return Components({
		extensions: ["vue"],
		include: [/\.vue$/, /\.vue\?vue/],
		dts: "autoResolver/components.d.ts",
		exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
		dirs: ["src/components"], // 指定组件位置，插件会帮你引入进来  默认'src/components'
		deep: true, // 搜索子目录
		resolvers: [NaiveUiResolver(), XiconResolver()],
	});
}
