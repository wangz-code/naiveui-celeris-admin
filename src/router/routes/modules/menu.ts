/*
 * @Author: wangqz
 * @Date: 2024-07-19
 * @LastEditTime: 2024-07-19
 * @Description: content
 */
// @unocss-include
import type { RouteRecordRaw } from "vue-router";
import { LAYOUT } from "@/router/constant";
import { GameControllerSharp } from "@vicons/ionicons5";
import { Armchair } from "@vicons/tabler";

const menu: RouteRecordRaw = {
	path: "/menu",
	name: "Menu",
	component: LAYOUT,
	redirect: "/menu/index",
	meta: {
		title: "routes.menu.menu",
		icon: Armchair,
		orderNumber: -9999,
		shouldHideSubMenuInMenu: true,
	},
	children: [
		{
			path: "index",
			name: "Menu",
			component: () => import("@/pages/menu/index.vue"),
			meta: {
				title: "routes.menu.menu",
				icon: Armchair,
				shouldHideInMenu: true,
			},
		},
		{
			path: "fuck",
			name: "FuckMenu",
			component: () => import("@/pages/menu/index.vue"),
			meta: {
				title: "routes.menu.menu",
				icon: Armchair,
				shouldHideInMenu: true,
			},
		},
	],
};

export default menu;
