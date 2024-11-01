import { readPackageJSON } from 'pkg-types';
import type { UserConfig } from 'vite';
import { loadEnv } from 'vite';
import { configVitePlugins } from '../../plugins';
import { configureProxy, updateEnvVariables } from '../../utils';
export async function createApplicationViteConfig(command: 'build' | 'serve', mode: string, cwd: string) {
  const root = cwd;
  const env = loadEnv(mode, root);
  const defineData = await createDefineData(root);
  const viteEnv = updateEnvVariables(env);
  const { VITE_PORT, VITE_PROXY, VITE_USE_HTTPS, VITE_PUBLIC_PATH, VITE_DROP_CONSOLE } = viteEnv;
  const plugins = configVitePlugins(viteEnv, { mode, command });

  const applicationConfig: UserConfig = {
    root,
    base: VITE_PUBLIC_PATH,
    server: {
      // Listening on all local IPs
      host: VITE_USE_HTTPS,
      port: VITE_PORT,
      open: true,
      proxy: !VITE_USE_HTTPS ? configureProxy(VITE_PROXY) : {},
    },
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
    },
    define: defineData,
    build: {
      target: 'es2015',
      minify: 'terser',
      cssTarget: 'chrome80',
    },
    css: {
      preprocessorOptions: {},
    },
    plugins,
  };
  return applicationConfig;
}

async function createDefineData(root: string) {
  try {
    const pkgJson = await readPackageJSON(root);
    const { dependencies, devDependencies, name, version } = pkgJson;
    const __APP_INFO__ = {
      pkg: { dependencies, devDependencies, name, version },
      lastBuildTime: new Date().getTime(),
    };
    return {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    };
  } catch (error) {
    return {};
  }
}
