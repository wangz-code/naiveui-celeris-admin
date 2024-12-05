import { createViteConfig } from './viteconfig/config/index';
const bigFile = ['SC-Bold.ts', 'SC-Light.ts'];
export default createViteConfig({
  overrides: {
    server: {
      proxy: {
        '/api': {
          changeOrigin: true,
          // mock代理目标地址
          target: 'http://localhost:5340',
          ws: false,
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          // 大文件单独打包
          // manualChunks(id) {
          //   if (id.includes(bigFile[0])) return 'large-chunk-SC-Bold';
          //   if (id.includes(bigFile[1])) return 'large-chunk-SC-Light';
          // },
          //https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
          sanitizeFileName(name) {
            // eslint-disable-next-line no-control-regex  无效字符会导致gitpages 加载失败
            const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
            const DRIVE_LETTER_REGEX = /^[a-z]:/i;
            const match = DRIVE_LETTER_REGEX.exec(name);
            const driveLetter = match ? match[0] : '';
            return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '');
          },
          dir: '../../docs',
        },
      },
    },
  },
});
