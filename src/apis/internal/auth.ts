import type { MessageMode, UserInfo } from "@/types";
import axios from "axios";

// Define the API endpoint URLs as an enum
enum API {
	Login = "/auth/login",
	Logout = "/auth/logout",
	UserInfo = "/user/info",
	PermissionCode = "/auth/permission-code",
}

// Define the parameters for the login API
export interface LoginParams {
	username: string;
	password: string;
}

// Define a function to call the login API
export function loginApi(params: LoginParams, errorMessageMode: MessageMode = "dialog") {
	// Make a POST request to the login API endpoint with the given parameters

	return new Promise((resolve) => {
		resolve({
			id: "1",
			username: "kirklin",
			fullName: "Kirk Lin",
			email: "hi@kirklin.cn",
			phone: "15912345678",
			avatarUrl: "https://q1.itc.cn/q_70/images03/20240304/b00ebfdfb3ba40b989185a5ae90496e7.jpeg",
			homePageUrl: "/dashboard/index",
			roles: ["admin"],
			token: "adminFakeToken",
		});
	});
	// return request.post<Omit<FakeUserInfo, "extraInfo">>(
	// 	{
	// 		url: API.Login,
	// 		params,
	// 	},
	// 	// Set the error message mode for the request
	// 	{
	// 		errorMessageMode,
	// 	}
	// );
}

// Define a function to call the logout API
export function logoutApi(errorMessageMode: MessageMode = "dialog") {
	// Make a GET request to the logout API endpoint
	return axios.get<void>(API.Logout);
}

// Define a function to call the user info API
export function userInfoApi(errorMessageMode: MessageMode = "none") {
	return new Promise((resolve) => {
		resolve({
			id: "1",
			username: "kirklin卡特琳",
			fullName: "Kirk Lin",
			email: "hi@kirklin.cn",
			phone: "15912345678",
			avatarUrl: "https://img0.baidu.com/it/u=671112370,873229032&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1720890000&t=3ff2ccb197002749f8fdf7b33c378e88",
			homePageUrl: "/dashboard/index",
			roles: ["admin"],
		});
	});
}

// Define a function to call the permission code API
export function permissionCodeApi(errorMessageMode: MessageMode = "dialog") {}

export { API };
