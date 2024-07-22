import type { MessageMode } from "@/types";
import { instance } from "../interceptor";
import { createMenuList } from "mock/menu";

// Define the API endpoint URLs as an enum
enum API {
	Menus = "/menu/menulist",
}

// Define a function to call the menus API
export function menusApi(errorMessageMode: MessageMode = "message") {
	return new Promise((resolve) => {
		resolve({ data: createMenuList() });
	});
	return instance.get<any[]>(API.Menus);
}

export { API };
