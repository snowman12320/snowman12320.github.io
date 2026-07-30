<script setup lang="ts">
import TheExperience from './components/sections/TheExperience.vue'
import TheFooter from './components/layout/TheFooter.vue'
import TheHero from './components/sections/TheHero.vue'
import TheNavbar from './components/layout/TheNavbar.vue'
import TheProjects from './components/sections/TheProjects.vue'
import TheSkills from './components/sections/TheSkills.vue'
import { useLang } from './composables/useLang'
import { useReveal } from './composables/useReveal'
import { useTheme } from './composables/useTheme'

const { isDark, toggleDark } = useTheme()
const { lang, toggleLang } = useLang()

useReveal()
</script>

<template>
  <TheNavbar :lang="lang" :is-dark="isDark" @toggle-lang="toggleLang" @toggle-dark="toggleDark" />
  <main class="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
    <TheHero />
    <TheExperience :lang="lang" />
    <TheProjects :lang="lang" />
    <TheSkills :lang="lang" />
  </main>
  <TheFooter />
</template>
