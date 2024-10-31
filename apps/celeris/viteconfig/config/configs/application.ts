import { promisify } from 'node:util';
import { readPackageJSON } from 'pkg-types';
import gzipPlugin from 'rollup-plugin-gzip';
import type { UserConfig } from 'vite';
import { loadEnv } from 'vite';
import { configVitePlugins } from '../../plugins';
import { configureProxy, updateEnvVariables } from '../../utils';
import { brotliCompress } from 'node:zlib';
export async function createApplicationViteConfig(command: 'build' | 'serve', mode: string, cwd: string) {
  const root = cwd;
  const isProductionBuild = command === 'build';
  const env = loadEnv(mode, root);
  const defineData = await createDefineData(root);
  const viteEnv = updateEnvVariables(env);
  const { VITE_PORT, VITE_PROXY, VITE_USE_HTTPS, VITE_PUBLIC_PATH, VITE_DROP_CONSOLE, VITE_BUILD_COMPRESS } = viteEnv;
  const plugins = configVitePlugins(root, viteEnv, isProductionBuild);
  const brotliPromise = promisify(brotliCompress);
  const rollupPlug: { [key: string]: any } = {
    gzip: gzipPlugin(),
    none: [],
    brotli: gzipPlugin({
      customCompression: (content) => brotliPromise(Buffer.from(content)),
      fileName: '.br',
    }),
  };
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
      rollupOptions: {
        plugins: rollupPlug[VITE_BUILD_COMPRESS],
        output: {
          //https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
          sanitizeFileName(name) {
            // eslint-disable-next-line no-control-regex  无效字符会导致gitpages 加载失败
            const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
            const DRIVE_LETTER_REGEX = /^[a-z]:/i;
            const match = DRIVE_LETTER_REGEX.exec(name);
            const driveLetter = match ? match[0] : '';
            // substr 是被淘汰語法，因此要改 slice
            return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '');
          },
          dir: 'dist',
        },
      },
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
