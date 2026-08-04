<script setup lang="ts">
import TheFooter from './components/layout/TheFooter.vue'
import TheNavbar from './components/layout/TheNavbar.vue'
import PortfolioNavbar from './components/layout/PortfolioNavbar.vue'
import { useLang } from './composables/useLang'
import { useTheme } from './composables/useTheme'
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const { isDark, toggleDark } = useTheme()
const { lang, toggleLang } = useLang()
const route = useRoute()
const isPortfolio = computed(() => route.path === '/portfolio')
</script>

<template>
  <PortfolioNavbar v-if="isPortfolio" :lang="lang" :is-dark="isDark" @toggle-lang="toggleLang" @toggle-dark="toggleDark" />
  <TheNavbar v-else :lang="lang" :is-dark="isDark" @toggle-lang="toggleLang" @toggle-dark="toggleDark" />
  <RouterView :lang="lang" />
  <TheFooter class="no-print" />
</template>
