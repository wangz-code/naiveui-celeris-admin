/*
 * @Author: wangqz
 * @Date: 2024-05-21
 * @LastEditTime: 2024-07-18
 * @Description: content
 */
import { MockMethod } from "vite-plugin-mock";
import { resultError, resultSuccess } from "../_util";

export function createFakeUserList() {
	return {
		count: 2619,
		growth: 39.57,
		chartData: {
			xAxis: ["1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日", "9日", "10日", "11日", "12日"],
			data: {
				name: "user-heart",
				value: [1390, 2599, 2882, 2059, 1086, 2689, 1367, 1310, 2926, 1194, 2590, 1153],
			},
		},
	};
}
export default [
	{
		url: "/api/dashboard/user-analysis-data",
		statusCode: 200,
		method: "post",
		response: () => {
			return resultSuccess(createFakeUserList());
		},
	},
	{
		url: "/api/dashboard/data-overview",
		statusCode: 200,
		method: "post",
		response: () => {
			return resultSuccess({
				xAxis: ["12.10", "12.11", "12.12", "12.13", "12.14", "12.15", "12.16", "12.17"],
				data: [
					{
						name: "用户数",
						count: 1945,
						value: [1724, 3842, 2771, 3416, 2763, 3843, 826, 817],
					},
					{
						name: "总对话数",
						count: 1824,
						value: [3223, 2820, 3412, 3035, 2483, 3115, 1241, 3130],
					},
					{
						name: "被复制对话数",
						count: 1968,
						value: [3204, 2856, 2822, 3423, 3438, 1344, 2929, 2429],
					},
					{
						name: "点赞数",
						count: 1707,
						value: [1015, 1111, 2557, 2357, 2866, 2771, 2191, 3133],
					},
				],
			});
		},
	},
] as MockMethod[];
