import { createViteConfig } from './viteconfig/config/index';

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
  },
});
