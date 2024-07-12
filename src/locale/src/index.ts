import { deepMerge } from "@/utils";
import type { App } from "vue";
import type { I18nOptions } from "vue-i18n";
import { createI18n } from "vue-i18n";
import { LocalesConfiguration } from "./config";

// eslint-disable-next-line import/no-mutable-exports
export let i18n: ReturnType<typeof createI18n>;

async function createI18nOptions(): Promise<I18nOptions> {
  console.log('LocalesConfiguration.locale log==>',LocalesConfiguration.locale);
  
  return deepMerge({
    legacy: false,
    locale: LocalesConfiguration.locale,
    fallbackLocale: LocalesConfiguration.fallbackLocale,
    messages: await LocalesConfiguration.messagesHandler(),
  }, LocalesConfiguration.otherOptions);
}
export async function setupI18n(app: App) {
  const options = await createI18nOptions();
  console.log('createI18n options_options log==>',options);
  i18n = createI18n(options);
  app.use(i18n);
}
