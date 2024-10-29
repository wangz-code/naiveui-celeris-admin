// @unocss-include
import type { RouteRecordRaw } from "vue-router";
import { LAYOUT } from "@/router/constant";
import { CheckupList } from "@vicons/tabler";
import { CheckmarkCircleOutline, CloseCircleOutline } from "@vicons/ionicons5";

const result: RouteRecordRaw = {
  path: "/result",
  name: "Result",
  component: LAYOUT,
  redirect: "/result/success",
  meta: {
    title: "routes.result.result",
    icon: CheckupList,
  },
  children: [
    {
      path: "success",
      name: "ResultSuccess",
      component: () => import("@/pages/result/success.vue"),
      meta: {
        title: "routes.result.success",
        icon: CheckmarkCircleOutline,
      },
    },
    {
      path: "fail",
      name: "ResultFail",
      component: () => import("@/pages/result/fail.vue"),
      meta: {
        title: "routes.result.fail",
        icon: CloseCircleOutline
      },
    },
  ],
};

export default result;
