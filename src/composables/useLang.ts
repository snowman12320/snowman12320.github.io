import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useLang() {
  const { locale } = useI18n()
  const lang = computed(() => locale.value as 'zh' | 'en')

  document.documentElement.setAttribute('lang', locale.value === 'zh' ? 'zh-TW' : 'en')

  const toggleLang = () => {
    locale.value = locale.value === 'zh' ? 'en' : 'zh'
    localStorage.setItem('lang', locale.value)
    document.documentElement.setAttribute('lang', locale.value === 'zh' ? 'zh-TW' : 'en')
  }

  return { lang, toggleLang }
}
