import type { RouteRecordRaw } from 'vue-router';
import { LAYOUT } from '#/router/constant';
import { CircleSquare } from '@vicons/tabler';

const profile: RouteRecordRaw = {
  path: '/profile',
  name: 'Profile',
  component: LAYOUT,
  redirect: '/profile/index',
  meta: {
    title: 'routes.profile.profile',
    icon: CircleSquare,
    orderNumber: -9000,
    shouldHideSubMenuInMenu: true,
    shouldHideInMenu: true,
  },
  children: [
    {
      path: 'index',
      name: 'Profile',
      component: () => import('#/views/profile/index.vue'),
      meta: {
        title: 'routes.profile.profile',
        icon: CircleSquare,
        shouldHideInMenu: true,
      },
    },
  ],
};

export default profile;
