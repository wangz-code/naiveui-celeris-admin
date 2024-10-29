import type { GlobConfig, GlobEnvConfig } from "@/types";
import { getAppGlobalConfig } from "@/utils";

export function useGlobSetting(): Readonly<GlobConfig> {
  const glob = getAppGlobalConfig(<GlobEnvConfig>import.meta.env);
  return glob as Readonly<GlobConfig>;
}
