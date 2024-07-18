import { MockMethod } from "vite-plugin-mock";
import { resultSuccess } from "./_util";

export default [
	{
		url: "/api/menu/menulist",
		statusCode: 200,
		method: "get",
		timeout: 1500,
		response: () => resultSuccess(createMenuList()),
	},
] as MockMethod[];

function createMenuList() {
	return [
		{ title: "routes.chat.chat", icon: { name: "GameControllerSharp" }, orderNumber: -9999, shouldHideSubMenuInMenu: true, meta: { title: "routes.chat.chat", icon: { name: "GameControllerSharp" }, orderNumber: -9999, shouldHideSubMenuInMenu: true }, name: "routes.chat.chat", shouldHideMenu: false, path: "/chat/index", redirect: "/chat/index" },
		{ title: "routes.dashboard.dashboard", icon: { name: "Dashboard" }, orderNumber: -9000, shouldHideSubMenuInMenu: true, meta: { title: "routes.dashboard.dashboard", icon: { name: "Dashboard" }, orderNumber: -9000, shouldHideSubMenuInMenu: true }, name: "routes.dashboard.dashboard", shouldHideMenu: false, path: "/dashboard/index", redirect: "/dashboard/index" },
		{ title: "routes.profile.profile", icon: { name: "CircleSquare" }, orderNumber: -9000, shouldHideSubMenuInMenu: true, shouldHideInMenu: true, meta: { title: "routes.profile.profile", icon: { name: "CircleSquare" }, orderNumber: -9000, shouldHideSubMenuInMenu: true, shouldHideInMenu: true }, name: "routes.profile.profile", shouldHideMenu: true, path: "/profile/index", redirect: "/profile/index" },
		{ title: "ErrorPage", shouldHideInMenu: true, shouldHideBreadcrumb: true, meta: { title: "ErrorPage", shouldHideInMenu: true, shouldHideBreadcrumb: true }, name: "ErrorPage", shouldHideMenu: true, path: "/:path(.*)*", children: [{ title: "ErrorPage", shouldHideInMenu: true, shouldHideBreadcrumb: true, meta: { title: "ErrorPage", shouldHideInMenu: true, shouldHideBreadcrumb: true }, name: "ErrorPage", shouldHideMenu: true, path: "/:path(.*)*" }] },
		{
			title: "routes.components.components",
			icon: { name: "Components" },
			shouldHideSubMenuInMenu: false,
			meta: { title: "routes.components.components", icon: { name: "Components" }, shouldHideSubMenuInMenu: false },
			name: "routes.components.components",
			shouldHideMenu: false,
			path: "/components",
			redirect: "/components/headlessTable/basic",
			children: [
				{
					title: "routes.components.headlessTable",
					icon: { name: "Table" },
					shouldHideInMenu: false,
					meta: { title: "routes.components.headlessTable", icon: { name: "Table" }, shouldHideInMenu: false },
					name: "routes.components.headlessTable",
					shouldHideMenu: false,
					path: "/components/headlessTable",
					redirect: "/components/headlessTable/basic",
					children: [
						{ title: "routes.components.headlessTableBasic", shouldHideInMenu: false, meta: { title: "routes.components.headlessTableBasic", shouldHideInMenu: false }, name: "routes.components.headlessTableBasic", shouldHideMenu: false, path: "/components/headlessTable/basic" },
						{ title: "routes.components.headlessTablePagination", shouldHideInMenu: false, meta: { title: "routes.components.headlessTablePagination", shouldHideInMenu: false }, name: "routes.components.headlessTablePagination", shouldHideMenu: false, path: "/components/headlessTable/pagination" },
					],
				},
			],
		},
		{
			title: "routes.design.design",
			icon: { name: "EditCircle" },
			meta: { title: "routes.design.design", icon: { name: "EditCircle" } },
			name: "routes.design.design",
			shouldHideMenu: false,
			path: "/design",
			redirect: "/design/palette",
			children: [
				{ title: "routes.design.palette", icon: { name: "Palette" }, meta: { title: "routes.design.palette", icon: { name: "Palette" } }, name: "routes.design.palette", shouldHideMenu: false, path: "/design/palette" },
				{ title: "routes.design.typography", icon: { name: "Typography" }, meta: { title: "routes.design.typography", icon: { name: "Typography" } }, name: "routes.design.typography", shouldHideMenu: false, path: "/design/typography" },
			],
		},
		{
			title: "routes.directives.directives",
			icon: { name: "Backhoe" },
			meta: { title: "routes.directives.directives", icon: { name: "Backhoe" } },
			name: "routes.directives.directives",
			shouldHideMenu: false,
			path: "/directive",
			redirect: "/directive/copy",
			children: [
				{ title: "routes.directives.ripple", icon: { name: "DropCircle" }, meta: { title: "routes.directives.ripple", icon: { name: "DropCircle" } }, name: "routes.directives.ripple", shouldHideMenu: false, path: "/directive/ripple" },
				{ title: "routes.directives.copy", icon: { name: "CopyOutline" }, meta: { title: "routes.directives.copy", icon: { name: "CopyOutline" } }, name: "routes.directives.copy", shouldHideMenu: false, path: "/directive/copy" },
			],
		},
		{
			title: "routes.iframe.iframe",
			icon: { name: "Link" },
			meta: { title: "routes.iframe.iframe", icon: { name: "Link" } },
			name: "routes.iframe.iframe",
			shouldHideMenu: false,
			path: "/frame",
			redirect: "/frame/github",
			children: [
				{
					title: "routes.iframe.viteInternal",
					icon: '<svg t="1715329863402" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30748" width="128" height="128"><path d="M987.779554 116.549891L710.355814 167.115843 758.563769 0 373.58013 75.435929l-5.997995 101.279905L30.290452 116.427891C7.060473 115.075892-6.475514 131.757876 3.116477 154.919855l488.111542 855.965197c10.50599 17.149984 34.693967 17.819983 45.299958 0L1015.149528 154.837855c10.79999-19.351982-5.747995-42.035961-27.369974-38.287964z m-473.999556 870.869183L35.740446 149.11186l329.985691 58.981945-15.555985 262.729754 135.263873-31.215971-37.715965 184.687827 102.747904-31.215971-50.989952 246.793769c-2.539998 16.137985 18.481983 24.723977 28.879973 1.623998l300.439718-599.583438-148.269861 28.615973 20.171981-69.923934 281.819736-51.367952L513.779998 987.419074z" fill="#FDD835" p-id="30749"></path></svg>',
					iframeLink: "https://cn.vitejs.dev/",
					meta: {
						title: "routes.iframe.viteInternal",
						icon: '<svg t="1715329863402" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30748" width="128" height="128"><path d="M987.779554 116.549891L710.355814 167.115843 758.563769 0 373.58013 75.435929l-5.997995 101.279905L30.290452 116.427891C7.060473 115.075892-6.475514 131.757876 3.116477 154.919855l488.111542 855.965197c10.50599 17.149984 34.693967 17.819983 45.299958 0L1015.149528 154.837855c10.79999-19.351982-5.747995-42.035961-27.369974-38.287964z m-473.999556 870.869183L35.740446 149.11186l329.985691 58.981945-15.555985 262.729754 135.263873-31.215971-37.715965 184.687827 102.747904-31.215971-50.989952 246.793769c-2.539998 16.137985 18.481983 24.723977 28.879973 1.623998l300.439718-599.583438-148.269861 28.615973 20.171981-69.923934 281.819736-51.367952L513.779998 987.419074z" fill="#FDD835" p-id="30749"></path></svg>',
						iframeLink: "https://cn.vitejs.dev/",
					},
					name: "routes.iframe.viteInternal",
					shouldHideMenu: false,
					path: "/frame/vite",
				},
				{
					title: "routes.iframe.ViteExternal",
					icon: '<svg t="1715329863402" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30748" width="128" height="128"><path d="M987.779554 116.549891L710.355814 167.115843 758.563769 0 373.58013 75.435929l-5.997995 101.279905L30.290452 116.427891C7.060473 115.075892-6.475514 131.757876 3.116477 154.919855l488.111542 855.965197c10.50599 17.149984 34.693967 17.819983 45.299958 0L1015.149528 154.837855c10.79999-19.351982-5.747995-42.035961-27.369974-38.287964z m-473.999556 870.869183L35.740446 149.11186l329.985691 58.981945-15.555985 262.729754 135.263873-31.215971-37.715965 184.687827 102.747904-31.215971-50.989952 246.793769c-2.539998 16.137985 18.481983 24.723977 28.879973 1.623998l300.439718-599.583438-148.269861 28.615973 20.171981-69.923934 281.819736-51.367952L513.779998 987.419074z" fill="#FDD835" p-id="30749"></path></svg>',
					externalLink: "https://vitejs.dev/",
					meta: {
						title: "routes.iframe.ViteExternal",
						icon: '<svg t="1715329863402" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30748" width="128" height="128"><path d="M987.779554 116.549891L710.355814 167.115843 758.563769 0 373.58013 75.435929l-5.997995 101.279905L30.290452 116.427891C7.060473 115.075892-6.475514 131.757876 3.116477 154.919855l488.111542 855.965197c10.50599 17.149984 34.693967 17.819983 45.299958 0L1015.149528 154.837855c10.79999-19.351982-5.747995-42.035961-27.369974-38.287964z m-473.999556 870.869183L35.740446 149.11186l329.985691 58.981945-15.555985 262.729754 135.263873-31.215971-37.715965 184.687827 102.747904-31.215971-50.989952 246.793769c-2.539998 16.137985 18.481983 24.723977 28.879973 1.623998l300.439718-599.583438-148.269861 28.615973 20.171981-69.923934 281.819736-51.367952L513.779998 987.419074z" fill="#FDD835" p-id="30749"></path></svg>',
						externalLink: "https://vitejs.dev/",
					},
					name: "routes.iframe.ViteExternal",
					shouldHideMenu: false,
					path: "/frame/vite-external",
				},
				{ title: "routes.iframe.githubInternal", icon: { name: "BrandGithub" }, iframeLink: "https://github.com/kirklin/celeris-web", meta: { title: "routes.iframe.githubInternal", icon: { name: "BrandGithub" }, iframeLink: "https://github.com/kirklin/celeris-web" }, name: "routes.iframe.githubInternal", shouldHideMenu: false, path: "/frame/github" },
				{ title: "routes.iframe.GitHubExternal", icon: { name: "BrandGithub" }, externalLink: "https://github.com/kirklin/celeris-web", meta: { title: "routes.iframe.GitHubExternal", icon: { name: "BrandGithub" }, externalLink: "https://github.com/kirklin/celeris-web" }, name: "routes.iframe.GitHubExternal", shouldHideMenu: false, path: "/frame/github-external" },
			],
		},
		{
			title: "routes.permission.permission",
			icon: { name: "LockSquare" },
			orderNo: 15,
			meta: { title: "routes.permission.permission", icon: { name: "LockSquare" }, orderNo: 15 },
			name: "routes.permission.permission",
			shouldHideMenu: false,
			path: "/permission",
			redirect: "/permission/frontend/page",
			children: [
				{
					title: "routes.permission.frontend",
					meta: { title: "routes.permission.frontend" },
					name: "routes.permission.frontend",
					shouldHideMenu: false,
					path: "/permission/frontend",
					redirect: "/permission/frontend/page",
					children: [
						{ title: "routes.permission.pageAuth", meta: { title: "routes.permission.pageAuth" }, name: "routes.permission.pageAuth", shouldHideMenu: false, path: "/permission/frontend/page" },
						{ title: "routes.permission.buttonAuth", meta: { title: "routes.permission.buttonAuth" }, name: "routes.permission.buttonAuth", shouldHideMenu: false, path: "/permission/frontend/button-permission" },
						{ title: "routes.permission.authPageA", allowedRoles: ["admin"], meta: { title: "routes.permission.authPageA", allowedRoles: ["admin"] }, name: "routes.permission.authPageA", shouldHideMenu: false, path: "/permission/frontend/auth-pageA" },
						{ title: "routes.permission.authPageB", allowedRoles: ["user"], meta: { title: "routes.permission.authPageB", allowedRoles: ["user"] }, name: "routes.permission.authPageB", shouldHideMenu: false, path: "/permission/frontend/auth-pageB" },
					],
				},
				{
					title: "routes.permission.backend",
					meta: { title: "routes.permission.backend" },
					name: "routes.permission.backend",
					shouldHideMenu: false,
					path: "/permission/back",
					redirect: "/permission/back/page",
					children: [
						{ title: "routes.permission.pageAuth", meta: { title: "routes.permission.pageAuth" }, name: "routes.permission.pageAuth", shouldHideMenu: false, path: "/permission/back/page" },
						{ title: "routes.permission.buttonAuth", meta: { title: "routes.permission.buttonAuth" }, name: "routes.permission.buttonAuth", shouldHideMenu: false, path: "/permission/back/button-permission" },
					],
				},
			],
		},
		{
			title: "routes.result.result",
			icon: { name: "CheckupList" },
			meta: { title: "routes.result.result", icon: { name: "CheckupList" } },
			name: "routes.result.result",
			shouldHideMenu: false,
			path: "/result",
			redirect: "/result/success",
			children: [
				{ title: "routes.result.success", icon: { name: "CheckmarkCircleOutline" }, meta: { title: "routes.result.success", icon: { name: "CheckmarkCircleOutline" } }, name: "routes.result.success", shouldHideMenu: false, path: "/result/success" },
				{ title: "routes.result.fail", icon: { name: "CloseCircleOutline" }, meta: { title: "routes.result.fail", icon: { name: "CloseCircleOutline" } }, name: "routes.result.fail", shouldHideMenu: false, path: "/result/fail" },
			],
		},
	];
}
