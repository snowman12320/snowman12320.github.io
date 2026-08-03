<script setup lang="ts">
import TheFooter from './components/layout/TheFooter.vue'
import TheNavbar from './components/layout/TheNavbar.vue'
import { useLang } from './composables/useLang'
import { useReveal } from './composables/useReveal'
import { useTheme } from './composables/useTheme'
import { RouterView } from 'vue-router'

const { isDark, toggleDark } = useTheme()
const { lang, toggleLang } = useLang()

useReveal()
</script>

<template>
  <TheNavbar :lang="lang" :is-dark="isDark" @toggle-lang="toggleLang" @toggle-dark="toggleDark" />
  <RouterView :lang="lang" />
  <TheFooter class="no-print" />
</template>
