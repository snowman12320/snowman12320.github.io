<script setup lang="ts">
import TheExperience from '../components/sections/TheExperience.vue'
import TheHero from '../components/sections/TheHero.vue'
import TheProjects from '../components/sections/TheProjects.vue'
import ThePrintResume from '../components/sections/ThePrintResume.vue'
import TheFullPrintResume from '../components/sections/TheFullPrintResume.vue'
import TheSkills from '../components/sections/TheSkills.vue'
import { useReveal } from '../composables/useReveal'
import type { PropType } from 'vue'

defineProps({
  lang: {
    type: String as PropType<'zh' | 'en'>,
    required: true,
  },
})

useReveal()
</script>

<template>
  <main class="max-w-4xl mx-auto px-4 sm:px-6 pb-20 no-print">
    <TheHero />
    <TheExperience :lang="lang" />
    <TheProjects :lang="lang" />
    <TheSkills :lang="lang" />
  </main>
  <ThePrintResume :lang="lang" />
  <TheFullPrintResume :lang="lang" />
</template>
