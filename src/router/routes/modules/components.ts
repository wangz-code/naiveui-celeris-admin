// @unocss-include
import type { RouteRecordRaw } from "vue-router";
import { LAYOUT } from "@/router/constant";
import { Components, Table } from "@vicons/tabler";

const components: RouteRecordRaw = {
  path: "/components",
  name: "Components",
  component: LAYOUT,
  redirect: "/components/headlessTable/basic",
  meta: {
    title: "routes.components.components",
    icon: Components,
    shouldHideSubMenuInMenu: false,
  },
  children: [
    {
      path: "headlessTable",
      name: "HeadlessTable",
      component: LAYOUT,
      redirect: "/components/headlessTable/basic",
      meta: {
        title: "routes.components.headlessTable",
        icon: Table,
        shouldHideInMenu: false,
      },
      children: [
        {
          path: "basic",
          name: "headlessTableBasic",
          component: () => import("@/pages/components/headless-table/basic/index.vue"),
          meta: {
            title: "routes.components.headlessTableBasic",
            shouldHideInMenu: false,
          },
        },
        {
          path: "pagination",
          name: "headlessTablePagination",
          component: () => import("@/pages/components/headless-table/pagination/index.vue"),
          meta: {
            title: "routes.components.headlessTablePagination",
            shouldHideInMenu: false,
          },
        },
      ],
    },
  ],
};

export default components;
