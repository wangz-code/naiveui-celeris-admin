/*
 * @Author: wangqz
 * @Date: 2024-07-25
 * @LastEditTime: 2024-07-25
 * @Description: content
 */

import Big from "bignumber.js";

/**
 * @param val 值
 * @param point 小数位
 * @returns 千分符
 */
export function Money(val: string | number, point = 2) {
	const res = new Big(val);
	if (res.isNaN()) return "0.00";
	return res.toFormat(point);
}

// 格式化table cols
export function tableMoney(cols: any[]) {
	for (const item of cols) {
		if (item.money) {
			item.align = "right";
			item.render = (row) => Money(row[item.key]);
		}
	}
	return cols;
}
