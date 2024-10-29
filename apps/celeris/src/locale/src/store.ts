import { computed } from "vue";
import { useLocalStorage } from "@/hooks";
import { LOCALES_STORE_KEY } from "@/constants";

const store = useLocalStorage(LOCALES_STORE_KEY, "zh");

export function setLocale(locale: string) {
  store.value = locale;
}

export const getLocale = computed(() => store.value);
