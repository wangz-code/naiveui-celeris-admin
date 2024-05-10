import type { RouteRecordRaw } from "vue-router";
import { LAYOUT } from "@/router/constant";
import { EditCircle, Palette, Typography } from "@vicons/tabler";

const design: RouteRecordRaw = {
  path: "/design",
  name: "Design",
  component: LAYOUT,
  redirect: "/design/palette",
  meta: {
    title: "routes.design.design",
    icon: EditCircle,
  },
  children: [
    {
      path: "palette",
      name: "Palette",
      component: () => import("@/pages/design/palette/index.vue"),
      meta: {
        title: "routes.design.palette",
        icon: Palette,
      },
    },
    {
      path: "typography",
      name: "Typography",
      component: () => import("@/pages/design/typography/index.vue"),
      meta: {
        title: "routes.design.typography",
        icon: Typography,
      },
    },
  ],
};

export default design;
