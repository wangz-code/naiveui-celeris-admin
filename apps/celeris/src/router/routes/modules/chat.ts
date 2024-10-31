// @unocss-include
import type { RouteRecordRaw } from 'vue-router';
import { LAYOUT } from '#/router/constant';
import { GameControllerSharp } from '@vicons/ionicons5';

const chat: RouteRecordRaw = {
  path: '/chat',
  name: 'Chat',
  component: LAYOUT,
  redirect: '/chat/index',
  meta: {
    title: 'routes.chat.chat',
    icon: GameControllerSharp,
    orderNumber: -9999,
    shouldHideSubMenuInMenu: true,
  },
  children: [
    {
      path: 'index',
      name: 'Chat',
      component: () => import('#/views/chat/index.vue'),
      meta: {
        title: 'routes.chat.chat',
        icon: GameControllerSharp,
        shouldHideInMenu: true,
      },
    },
  ],
};

export default chat;
