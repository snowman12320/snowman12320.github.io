import { ref, watchEffect } from 'vue'

const isDark = ref(document.documentElement.classList.contains('dark'))

export function useTheme() {
  const toggleDark = () => {
    isDark.value = !isDark.value
  }

  watchEffect(() => {
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  })

  return { isDark, toggleDark }
}
