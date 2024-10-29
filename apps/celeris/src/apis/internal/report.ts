/*
 * @Author: wangqz
 * @Date: 2024-07-23
 * @LastEditTime: 2024-07-23
 * @Description: content
 */
import type { MessageMode } from "@/types";
import { instance } from "../interceptor";
import { R01 } from "mock/report/r01";

// Define the API endpoint URLs as an enum
enum API {
	R01 = "/report/r01",
}

// Define a function to call the menus API
export function getR01(errorMessageMode: MessageMode = "message") {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("getR01Api log==>");
			resolve({ data: R01.createResult() });
		}, 1500);
	});
	return instance.get<any[]>(API.R01);
}

export { API };
