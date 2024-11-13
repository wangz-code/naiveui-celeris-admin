import type { App } from 'vue';
import { createI18n, useI18n } from 'vue-i18n';

import en from './langs/en-US.json';
import cn from './langs/zh-CN.json';
import { setOmsLocal } from 'naive-oms';

export type Locale = 'en-US' | 'zh-CN';

const messages = {
  'en-US': en,
  'zh-CN': cn,
};

const langs = [
  {
    label: 'English',
    key: 'en-US',
  },
  {
    label: '简体中文',
    key: 'zh-CN',
  },
];

const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  locale: '',
  messages,
});

const $t = i18n.global.t;

/**
 * @param locale 语言
 * @description 切换独立的语言包
 */
const setLocal = (locale: Locale) => {
  i18n.global.locale.value = locale;
};

async function setupI18n(app: App) {
  const { getLocale } = useAppSetting();
  const local = getLocale().value;
  setLocal(local);
  setOmsLocal(local);
  app.use(i18n);
}

export { $t, useI18n, setLocal, setupI18n, langs };
