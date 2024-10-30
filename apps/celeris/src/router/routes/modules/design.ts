import type { RouteRecordRaw } from "vue-router";
import { LAYOUT } from "@/router/constant";
import { Disabled2, EditCircle, Palette, Typography } from "@vicons/tabler";

const design: RouteRecordRaw = {
  path: "/design",
  name: "Design",
  component: LAYOUT,
  redirect: "/design/palette",
  meta: {
    title: "routes.design.design",
    icon: Disabled2,
  },
  children: [
    {
      path: "palette",
      name: "Palette",
      component: () => import("@/views/design/palette/index.vue"),
      meta: {
        title: "routes.design.palette",
        icon: Palette,
      },
    },
    {
      path: "typography",
      name: "Typography",
      component: () => import("@/views/design/typography/index.vue"),
      meta: {
        title: "routes.design.typography",
        icon: Typography,
      },
    },
  ],
};

export default design;
