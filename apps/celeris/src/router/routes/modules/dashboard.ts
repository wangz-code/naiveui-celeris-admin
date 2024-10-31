import type { RouteRecordRaw } from 'vue-router';
import { LAYOUT } from '#/router/constant';
import { Dashboard } from '@vicons/tabler';
const dashboard: RouteRecordRaw = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/index',
  meta: {
    title: 'routes.dashboard.dashboard',
    icon: Dashboard,
    orderNumber: -9000,
    shouldHideSubMenuInMenu: true,
  },
  children: [
    {
      path: 'index',
      name: 'Dashboard',
      component: () => import('#/views/dashboard/index.vue'),
      meta: {
        title: 'routes.dashboard.dashboard',
        icon: Dashboard,
        shouldHideInMenu: true,
        shouldAffixToNavBar: true,
      },
    },
  ],
};

export default dashboard;
