// @unocss-include
import type { RouteRecordRaw } from "vue-router";
import { LAYOUT } from "@/router/constant";
import { Components, DeviceDesktopAnalytics, Report, Table } from "@vicons/tabler";
import { List } from "@vicons/ionicons5";

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
		{
			path: "report",
			name: "Report",
			component: LAYOUT,
			redirect: "/components/report/basic",
			meta: {
				title: "routes.components.report",
				icon: DeviceDesktopAnalytics,
				shouldHideInMenu: false,
			},
			children: [
				{
					path: "r01",
					name: "report001",
					component: () => import("@/pages/components/report/r01/index.vue"),
					meta: {
						title: "routes.components.report001",
						shouldHideInMenu: false,
					},
				},
				{
					path: "r02",
					name: "report002",
					component: () => import("@/pages/components/report/r02/index.vue"),
					meta: {
						title: "routes.components.report002",
						shouldHideInMenu: false,
					},
				},
			],
		},
		{
			path: "list",
			name: "List",
			component: LAYOUT,
			redirect: "/components/list/basic",
			meta: {
				title: "routes.components.list",
				icon: List,
				shouldHideInMenu: false,
			},
			children: [
				{
					path: "basic",
					name: "listBasic",
					component: () => import("@/pages/components/list/basic/index.vue"),
					meta: {
						title: "routes.components.listBasic",
						shouldHideInMenu: false,
					},
				},
				{
					path: "card",
					name: "listCard",
					component: () => import("@/pages/components/list/card/index.vue"),
					meta: {
						title: "routes.components.listCard",
						shouldHideInMenu: false,
					},
				},
			],
		},
	],
};

export default components;
