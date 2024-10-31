// @unocss-include
import type { RouteRecordRaw } from 'vue-router';
import { CELERIS_WEB_GITHUB_URL, VITE_DOCS_CN_URL, VITE_DOCS_URL } from 'celeris-constants';
import { IFRAME, LAYOUT } from '#/router/constant';
import { ViteSvg } from '#/components/Iconx/svgs';
import { Link } from '@vicons/ionicons5';
import { BrandGithub } from '@vicons/tabler';

const iframe: RouteRecordRaw = {
  path: '/frame',
  name: 'Frame',
  component: LAYOUT,
  redirect: '/frame/github',
  meta: {
    title: 'routes.iframe.iframe',
    icon: Link,
  },
  children: [
    // 新添加的Vite链接
    {
      path: 'vite',
      name: 'Vite',
      component: IFRAME,
      meta: {
        title: 'routes.iframe.viteInternal',
        icon: ViteSvg,
        iframeLink: VITE_DOCS_CN_URL, // 内部链接
      },
    },
    {
      path: 'vite-external',
      name: 'ViteExternal',
      component: IFRAME,
      meta: {
        title: 'routes.iframe.ViteExternal',
        icon: ViteSvg,
        externalLink: VITE_DOCS_URL, // 外部链接
      },
    },
    {
      path: 'github',
      name: 'GitHub',
      component: IFRAME,
      meta: {
        title: 'routes.iframe.githubInternal',
        icon: BrandGithub,
        iframeLink: CELERIS_WEB_GITHUB_URL,
      },
    },
    {
      path: 'github-external',
      name: 'GitHubExternal',
      component: IFRAME,
      meta: {
        title: 'routes.iframe.GitHubExternal',
        icon: BrandGithub,
        externalLink: CELERIS_WEB_GITHUB_URL,
      },
    },
  ],
};

export default iframe;
