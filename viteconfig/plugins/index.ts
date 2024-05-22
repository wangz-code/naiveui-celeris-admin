import type { ViteEnvVariables } from "@celeris/types";
import type { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import { createConfigPluginConfig } from "./generateConfig";
import { createInspectPluginConfig } from "./inspect";
import { createPWAPluginConfig } from "./pwa";
import { createUnoCSSPluginConfig } from "./unocss";
import { createAutoImportPluginConfig } from "./unpluginAutoImport";
import { createVueComponentsPluginConfig } from "./unpluginVueComponets";
import { createVisualizerPluginConfig } from "./visualizer";
import { viteMockServe } from 'vite-plugin-mock'
/**
 * Configure the Vite plugins.
 *
 * @param rootDir The root directory of the project.
 * @param viteEnv The Vite environment variables.
 * @param isProductionBuild Whether the current command is for a production build.
 */
export function configVitePlugins(
  rootDir: string,
  viteEnv: Partial<ViteEnvVariables>,
  isProductionBuild: boolean,
): Array<PluginOption | PluginOption[]> {
  const vitePlugins: Array<PluginOption | PluginOption[]> = [];

  // Add the Vue plugin.
  // 添加 Vue 插件
  vitePlugins.push(vue({
    script: {
      defineModel: true,
    },
  }));

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

  // Add the GenerateConfig plugin.
  // 添加 生成配置 插件
  vitePlugins.push(createConfigPluginConfig(viteEnv.VITE_GLOB_BUILD_GENERATE_CONFIG ?? true));

  // Add the rollup-plugin-visualizer
  // 添加 打包分析 插件
  // https://github.com/btd/rollup-plugin-visualizer
  viteEnv.VITE_USE_BUILD_ANALYZER && vitePlugins.push(createVisualizerPluginConfig());

  // Add vite-plugin-mock
  // 拦截模拟请求
  viteEnv.VITE_USE_MOCK && vitePlugins.push(viteMockServe());

  return vitePlugins;
}
