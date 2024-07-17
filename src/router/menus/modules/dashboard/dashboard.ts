// @unocss-include
import type { MenuModule } from "@/types";
import { Dashboard } from "@vicons/tabler";

const dashboard: MenuModule = {
	orderNumber: 1,
	menu: {
		path: "/dashboard",
		name: "Dashboard",
		icon: Dashboard,
		meta: {
			title: "routes.dashboard.dashboard",
			icon: Dashboard,
		},
	},
};

export default dashboard;
