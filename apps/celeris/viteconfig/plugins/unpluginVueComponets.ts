import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import type { PluginOption } from 'vite';

/**
 * @param componentName
 * @desc 自动导入xicons https://xicons.org/#/zh-CN  暂未使用
 */
// const XiconResolver = () => {
// 	return (componentName: string) => {
// 		ionicons5
// 		if (componentName.startsWith("Xicon")) {
// 			console.log("自动导入图标 log==>", componentName);
// 			return {
// 				name: componentName.slice(5),
// 				from: "@vicons/ionicons5",
// 			};
// 		}
// 	};
// };

export function createVueComponentsPluginConfig(): PluginOption {
  return Components({
    extensions: ['vue'],
    include: [/\.vue$/, /\.vue\?vue/],
    dts: 'autoResolver/components.d.ts',
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    dirs: ['src/components'], // 指定组件位置，插件会帮你引入进来  默认'src/components'
    deep: true, // 搜索子目录
    resolvers: [NaiveUiResolver()],
  });
}
