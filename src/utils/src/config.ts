import type { GlobConfig, GlobEnvConfig } from "@/types";
const version = "0.02";

export function getAppGlobalConfig(env: GlobEnvConfig): GlobConfig {
	const { VITE_GLOB_APP_TITLE, VITE_GLOB_API_URL, VITE_GLOB_APP_SHORT_NAME, VITE_GLOB_API_URL_SSR, VITE_GLOB_API_URL_PREFIX } = env;

	if (!/^[a-zA-Z_]*$/.test(VITE_GLOB_APP_SHORT_NAME)) {
		console.warn("VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.");
	}

	return {
		APP_TITLE: VITE_GLOB_APP_TITLE || "",
		API_URL: VITE_GLOB_API_URL || "",
		APP_SHORT_NAME: VITE_GLOB_APP_SHORT_NAME || "",
		API_URL_SSR: VITE_GLOB_API_URL_SSR || "",
		API_URL_PREFIX: VITE_GLOB_API_URL_PREFIX || "",
	};
}

function createStorageKeyPrefix(env: GlobEnvConfig): string {
	const AppConfig: GlobEnvConfig = env;
	const mode = AppConfig?.MODE || "";
	return `${AppConfig?.VITE_GLOB_APP_SHORT_NAME}_${mode}`.toUpperCase();
}

// Generate cache key according to version
export function createStorageName(env: GlobEnvConfig): string {
	return `${createStorageKeyPrefix(env)}_${version}_`.toUpperCase();
}
