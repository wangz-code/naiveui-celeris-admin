import en from './langs/en-US/naive.json';
import cn from './langs/zh-CN/naive.json';

import { createI18n } from 'vue-i18n';

type Locale = 'en-US' | 'zh-CN';

const messages = {
  'en-US': { naive: en },
  'zh-CN': { naive: cn },
};

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
const setOmsLocal = (locale: Locale) => {
  i18n.global.locale.value = locale;
};

export { $t, i18n, setOmsLocal };
