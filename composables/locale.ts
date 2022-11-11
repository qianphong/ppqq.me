import type { Ref } from 'vue'

export const useLocale = () => useState('locale', () => useDefaultLocale())

export const useDefaultLocale = (fallback = 'en-US') => {
  const locale = ref(fallback)
  if (process.server) {
    console.log('server')
    const reqLocale = useRequestHeaders()['accept-language']?.split(',')[0]
    if (reqLocale) locale.value = reqLocale
  } else if (process.client) {
    console.log('client')
    const navLang = navigator.language
    if (navLang) locale.value = navLang
  }
  return locale
}

export const useLocales = () => {
  const locale = useLocale()
  const locales = ref(['en-US', 'en-GB', 'zh-CN', 'ko-KR', 'ja-JP'])
  if (!locales.value.includes(locale.value)) locales.value.unshift(locale.value)
  return locales
}

export const useLocaleDate = (date: Ref<Date> | Date, locale = useLocale()) => {
  return computed(() => unref(date).toLocaleString(locale.value))
}
