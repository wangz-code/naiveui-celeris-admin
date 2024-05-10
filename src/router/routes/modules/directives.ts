// @unocss-include
import type { RouteRecordRaw } from "vue-router";
import { LAYOUT } from "@/router/constant";
import { CopyOutline } from "@vicons/ionicons5";
import { Backhoe, DropCircle } from "@vicons/tabler";

const directive: RouteRecordRaw = {
  path: "/directive",
  name: "Directives",
  component: LAYOUT,
  redirect: "/directive/copy",
  meta: {
    title: "routes.directives.directives",
    icon: Backhoe,
  },
  children: [
    {
      path: "ripple",
      name: "Ripple",
      component: () => import("@/pages/directives/ripple/index.vue"),
      meta: {
        title: "routes.directives.ripple",
        icon: DropCircle,
      },
    },
    {
      path: "copy",
      name: "Copy",
      component: () => import("@/pages/directives/copy/index.vue"),
      meta: {
        title: "routes.directives.copy",
        icon: CopyOutline,
      },
    },
  ],
};

export default directive;
