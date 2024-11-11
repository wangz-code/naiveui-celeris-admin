// @unocss-include
import type { RouteRecordRaw } from 'vue-router';
import { LAYOUT } from '#/router/constant';
import { ChartArcs, Components, DeviceDesktopAnalytics, Edit, Table } from '@vicons/tabler';
import { List } from '@vicons/ionicons5';

const components: RouteRecordRaw = {
  path: '/components',
  name: 'Components',
  component: LAYOUT,
  redirect: '/components/headlessTable/basic',
  meta: {
    title: 'routes.components.components',
    icon: Components,
    shouldHideSubMenuInMenu: false,
  },
  children: [
    {
      path: 'headlessTable',
      name: 'HeadlessTable',
      component: LAYOUT,
      redirect: '/components/headlessTable/basic',
      meta: {
        title: 'routes.components.headlessTable',
        icon: Table,
        shouldHideInMenu: false,
      },
      children: [
        {
          path: 'basic',
          name: 'headlessTableBasic',
          component: () => import('#/views/components/headless-table/basic/index.vue'),
          meta: {
            title: 'routes.components.headlessTableBasic',
            shouldHideInMenu: false,
          },
        },
        {
          path: 'pagination',
          name: 'headlessTablePagination',
          component: () => import('#/views/components/headless-table/pagination/index.vue'),
          meta: {
            title: 'routes.components.headlessTablePagination',
            shouldHideInMenu: false,
          },
        },
      ],
    },
    {
      path: 'report',
      name: 'Report',
      component: LAYOUT,
      redirect: '/components/report/r01',
      meta: {
        title: 'routes.components.report',
        icon: DeviceDesktopAnalytics,
        shouldHideInMenu: false,
      },
      children: [
        {
          path: 'r01',
          name: 'reportTest',
          component: () => import('#/views/components/report/r01/index.vue'),
          meta: {
            title: 'routes.components.report001',
            shouldHideInMenu: false,
          },
        },
        {
          path: 'r02',
          name: 'reportDemo',
          component: () => import('#/views/components/report/r02/index.vue'),
          meta: {
            title: 'routes.components.report002',
            shouldHideInMenu: false,
          },
        },
      ],
    },
    {
      path: 'list',
      name: 'List',
      component: LAYOUT,
      redirect: '/components/list/basic',
      meta: {
        title: 'routes.components.list',
        icon: List,
        shouldHideInMenu: false,
      },
      children: [
        {
          path: 'basic',
          name: 'listBasic',
          component: () => import('#/views/components/list/basic/index.vue'),
          meta: {
            title: 'routes.components.listBasic',
            shouldHideInMenu: false,
          },
          children: [
            {
              path: 'detail',
              name: 'Detail',
              component: () => import('#/views/components/list/basic/index.vue'),
              meta: {
                title: 'routes.components.detail',
                shouldHideInMenu: false,
                shouldHideBreadcrumb: false,
                currentActiveMenu: '/components/list/basic',
              },
            },
            {
              path: 'preview',
              name: 'Preview',
              component: () => import('#/views/components/list/basic/index.vue'),
              meta: {
                title: 'routes.components.preview',
                shouldHideInMenu: true,
                currentActiveMenu: '/components/list/basic',
              },
            },
          ],
        },
        {
          path: 'card',
          name: 'listCard',
          component: () => import('#/views/components/list/card/index.vue'),
          meta: {
            title: 'routes.components.listCard',
            shouldHideInMenu: false,
          },
        },
      ],
    },
    {
      path: 'form',
      name: 'Form',
      component: LAYOUT,
      redirect: '/components/form/simple',
      meta: {
        title: 'routes.components.form',
        icon: Edit,
        shouldHideInMenu: false,
      },
      children: [
        {
          path: 'simple',
          name: 'Simple',
          component: () => import('#/views/components/form/simple/index.vue'),
          meta: {
            title: 'routes.components.formsimple',
            shouldHideInMenu: false,
          },
        },
        {
          path: 'complex',
          name: 'Complex',
          component: () => import('#/views/components/form/complex/index.vue'),
          meta: {
            title: 'routes.components.formcomplex',
            shouldHideInMenu: false,
          },
        },
      ],
    },
    {
      path: 'echarts',
      name: 'Echarts',
      component: LAYOUT,
      redirect: '/components/echarts/demo',
      meta: {
        title: 'routes.components.echarts',
        icon: ChartArcs,
        shouldHideInMenu: false,
      },
      children: [
        {
          path: 'demo',
          name: 'ChartsDemo',
          component: () => import('#/views/components/echarts/index.vue'),
          meta: {
            title: 'routes.components.normal',
            shouldHideInMenu: false,
          },
        },
      ],
    },
  ],
};

export default components;
