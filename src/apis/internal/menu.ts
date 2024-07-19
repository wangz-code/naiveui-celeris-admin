import type { MessageMode } from "@/types";
import axios from "axios";
import { instance } from "../interceptor";
import { createMenuList } from "mock/menu";

// Define the API endpoint URLs as an enum
enum API {
	Menus = "/menu/menulist",
}

// Define a function to call the menus API
export function menusApi(errorMessageMode: MessageMode = "message") {
	// Make a GET request to the logout API endpoint
	console.log("createMenuList() log==>", createMenuList());

	return new Promise((resolve) => {
		resolve({ data: createMenuList() });
	});
	return instance.get<any[]>(API.Menus);
}

export { API };
