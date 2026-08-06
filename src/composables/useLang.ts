import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export function useLang() {
  const { locale } = useI18n()
  const lang = computed(() => locale.value as 'zh' | 'en')

  const updateDocumentLanguage = (value: string) => {
    const isEnglish = value === 'en'
    document.documentElement.setAttribute('lang', isEnglish ? 'en' : 'zh-TW')
    document.title = isEnglish ? 'William Chen - Resume' : '陳威良 William - 履歷'
  }

  watch(locale, updateDocumentLanguage, { immediate: true })

  const toggleLang = () => {
    locale.value = locale.value === 'zh' ? 'en' : 'zh'
    localStorage.setItem('lang', locale.value)
  }

  return { lang, toggleLang }
}
