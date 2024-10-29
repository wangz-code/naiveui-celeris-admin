import type { Component } from "vue";
import { h } from "vue";
import { isNil } from "@/utils";
import { Iconx } from "../index";

/**
 * Renders an icon component based on the provided icon name or component.
 * 根据提供的图标名称或组件，渲染一个图标组件。
 *
 * @param {Component | string} icon - The icon name or component to render.
 *                                    要渲染的图标名称或组件。
 * @returns {Function | void} Returns a function that renders the icon component if the icon is valid; otherwise, returns void.
 *                            如果图标有效，则返回一个渲染图标组件的函数；否则返回 void。
 */
export function renderIcon(icon: Component | string) {
	if (isNil(icon)) {
		return;
	}
	return () => h(Iconx, { component: icon });
}
