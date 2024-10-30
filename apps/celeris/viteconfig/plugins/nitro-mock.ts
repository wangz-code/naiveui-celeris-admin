import type { PluginOption } from 'vite';

import { build, createDevServer, createNitro, prepare } from 'nitropack';

const hmrKeyRe = /^runtimeConfig\.|routeRules\./;

export const viteNitroMockPlugin = ({ mockServerPackage = 'backend-mock', port = 5340, verbose = true }): PluginOption => {
  return {
    async configureServer(server) {
      const pkg = mockServerPackage;
      runNitroServer(pkg, port, verbose);
      const _printUrls = server.printUrls;
      server.printUrls = () => {
        _printUrls();
        console.log(`Nitro Mock Server: http://localhost:${port}/api`);
      };
    },
    enforce: 'pre',
    name: 'vite:mock-server',
  };
};

async function runNitroServer(rootDir: string, port: number, verbose: boolean) {
  let nitro: any;
  const reload = async () => {
    if (nitro) {
      console.info('Restarting dev server...');
      if ('unwatch' in nitro.options._c12) {
        await nitro.options._c12.unwatch();
      }
      await nitro.close();
    }
    nitro = await createNitro(
      {
        dev: true,
        preset: 'nitro-dev',
        rootDir,
      },
      {
        c12: {
          async onUpdate({ getDiff, newConfig }) {
            const diff = getDiff();
            if (diff.length === 0) {
              return;
            }
            verbose && console.info(`Nitro config updated:\n${diff.map((entry) => `  ${entry.toString()}`).join('\n')}`);
            await (diff.every((e) => hmrKeyRe.test(e.key)) ? nitro.updateConfig(newConfig.config) : reload());
          },
        },
        watch: true,
      },
    );
    nitro.hooks.hookOnce('restart', reload);

    const server = createDevServer(nitro);
    await server.listen(port, { showURL: false });
    await prepare(nitro);
    await build(nitro);

    if (verbose) {
      console.log('');
      console.info('Nitro Mock Server started.');
    }
  };
  return await reload();
}
