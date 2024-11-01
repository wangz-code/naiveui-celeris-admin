// @unocss-include
import type { RouteRecordRaw } from 'vue-router';
import { RoleConstants } from '../../../../../../packages/celeris-constants';
import { LAYOUT, getParentLayout } from '#/router/constant';
import { LockSquare } from '@vicons/tabler';

const permission: RouteRecordRaw = {
  path: '/permission',
  name: 'Permission',
  component: LAYOUT,
  redirect: '/permission/frontend/page',
  meta: {
    title: 'routes.permission.permission',
    icon: LockSquare,
    orderNo: 15,
  },

  children: [
    {
      path: 'frontend',
      name: 'PermissionFrontDemo',
      component: getParentLayout('PermissionFrontDemo'),
      redirect: '/permission/frontend/page',
      meta: {
        title: 'routes.permission.frontend',
      },
      children: [
        {
          path: 'page',
          name: 'FrontPageAuth',
          component: () => import('#/views/permission/frontend/index.vue'),
          meta: {
            title: 'routes.permission.pageAuth',
          },
        },
        {
          path: 'button-permission',
          name: 'FrontButtonAuth',
          component: () => import('#/views/permission/frontend/ButtonPermission.vue'),
          meta: {
            title: 'routes.permission.buttonAuth',
          },
        },
        {
          path: 'auth-pageA',
          name: 'FrontAuthPageA',
          component: () => import('#/views/permission/frontend/AuthPageA.vue'),
          meta: {
            title: 'routes.permission.authPageA',
            allowedRoles: [RoleConstants.ADMIN],
          },
        },
        {
          path: 'auth-pageB',
          name: 'FrontAuthPageB',
          component: () => import('#/views/permission/frontend/AuthPageB.vue'),
          meta: {
            title: 'routes.permission.authPageB',
            allowedRoles: [RoleConstants.USER],
          },
        },
      ],
    },
    {
      path: 'back',
      name: 'PermissionBackDemo',
      component: getParentLayout('PermissionBackDemo'),
      redirect: '/permission/back/page',
      meta: {
        title: 'routes.permission.backend',
      },
      children: [
        {
          path: 'page',
          name: 'BackAuthPage',
          component: () => import('#/views/permission/backend/index.vue'),
          meta: {
            title: 'routes.permission.pageAuth',
          },
        },
        {
          path: 'button-permission',
          name: 'BackButtonAuth',
          component: () => import('#/views/permission/backend/ButtonPermission.vue'),
          meta: {
            title: 'routes.permission.buttonAuth',
          },
        },
      ],
    },
  ],
};

export default permission;
