import type { MessageMode } from "@celeris/types";
import axios from "axios";

// Define the API endpoint URLs as an enum
enum API {
	Menus = "/menu/list",
}

// Define a function to call the menus API
export function menusApi(errorMessageMode: MessageMode = "message") {
	// Make a GET request to the logout API endpoint
	return axios.get<any[]>(API.Menus);
}

export { API };
