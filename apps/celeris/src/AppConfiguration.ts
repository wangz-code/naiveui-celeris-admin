import { useAppSetting, useNaiveUIConfigProvider } from '@/composables';
import { LocalesEngine } from '@/locales';
import { createDiscreteApi } from 'naive-ui';

function initializeHttpRequest() {
  const { configProviderProps } = useNaiveUIConfigProvider();
  const { message: _message } = createDiscreteApi(['message', 'dialog', 'notification', 'loadingBar'], {
    configProviderProps,
  });
}

function initializeI18n() {
  const { getLocale } = useAppSetting();
  const messages = Object.fromEntries(
    Object.entries(import.meta.glob<{ default: any }>('./locales/langs/*.json', { eager: true })).map(([key, value]) => {
      const end = key.lastIndexOf('.');
      const start = key.lastIndexOf('/');
      return [key.slice(start + 1, end), value.default];
    }),
  );
  LocalesEngine.initLocales(() => ({
    locale: getLocale.value,
    fallbackLocale: 'zh',
    messagesHandler: () => messages,
    otherOptions: {
      sync: true,
      availableLocales: Object.keys(messages),
      silentTranslationWarn: true,
      missingWarn: false,
      silentFallbackWarn: true,
    },
  }));
}

export function initializeConfiguration() {
  initializeHttpRequest();
  initializeI18n();
}
