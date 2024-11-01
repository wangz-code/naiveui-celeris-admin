import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import { createUnoCSSPluginConfig } from './unocss';
import { createAutoImportPluginConfig } from './unpluginAutoImport';
import { createVueComponentsPluginConfig } from './unpluginVueComponets';
import { createVisualizerPluginConfig } from './visualizer';
import { viteNitroMockPlugin } from './nitro-mock';
import { ViteEnvVariables } from 'celeris-types';
import legacy from '@vitejs/plugin-legacy';
import { promisify } from 'node:util';
import gzipPlugin from 'rollup-plugin-gzip';
import { brotliCompress } from 'node:zlib';

/**
 * Configure the Vite plugins.
 *
 * @param rootDir The root directory of the project.
 * @param viteEnv The Vite environment variables.
 * @param isProductionBuild Whether the current command is for a production build.
 */
type Params = {
  command: 'build' | 'serve';
  mode: string | 'analyze';
};
export function configVitePlugins(viteEnv: Partial<ViteEnvVariables>, { mode, command }: Params): Array<PluginOption | PluginOption[]> {
  const vitePlugins: Array<PluginOption | PluginOption[]> = [];

  // Add the Vue plugin.
  // 添加 Vue 插件
  vitePlugins.push(
    vue({
      script: {
        defineModel: true,
      },
    }),
  );

  // Add the Vue JSX plugin.
  // 添加 Vue JSX 插件
  vitePlugins.push(vueJsx());

  // Add the unplugin-auto-import plugin.
  // 添加 unplugin-auto-import 插件
  // https://github.com/antfu/unplugin-auto-import
  vitePlugins.push(createAutoImportPluginConfig());

  // Add the unplugin-vue-components plugin.
  // 添加 unplugin-vue-components 插件
  // https://github.com/antfu/unplugin-vue-components
  vitePlugins.push(createVueComponentsPluginConfig());

  // Add the UnoCSS plugin.
  // 添加 UnoCSS 插件
  vitePlugins.push(createUnoCSSPluginConfig());

  // Add the rollup-plugin-visualizer
  // 添加 打包分析 插件 https://github.com/btd/rollup-plugin-visualizer
  command == 'build' && mode == 'analyze' && vitePlugins.push(createVisualizerPluginConfig());

  // Add
  // 拦截模拟请求
  viteEnv.VITE_USE_MOCK && vitePlugins.push(viteNitroMockPlugin({}));

  // Add
  // 兼容旧版浏览器 https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
  viteEnv.VITE_LEGACY && vitePlugins.push(legacy({ targets: ['defaults', 'not IE 11'] }));

  // add
  // 生成brotli压缩文件
  viteEnv.VITE_BUILD_COMPRESS == 'brotli' &&
    vitePlugins.push(
      gzipPlugin({
        customCompression: (content) => promisify(brotliCompress)(Buffer.from(content)),
        fileName: '.br',
      }),
    );

  // add
  // 生成gzip压缩文件
  viteEnv.VITE_BUILD_COMPRESS == 'gzip' && vitePlugins.push(gzipPlugin());

  return vitePlugins;
}
