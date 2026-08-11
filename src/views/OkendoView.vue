<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import TheExperience from '../components/sections/TheExperience.vue'
import TheHero from '../components/sections/TheHero.vue'
import TheProjects from '../components/sections/TheProjects.vue'
import ThePrintResume from '../components/sections/ThePrintResume.vue'
import TheFullPrintResume from '../components/sections/TheFullPrintResume.vue'
import TheSkills from '../components/sections/TheSkills.vue'
import { useReveal } from '../composables/useReveal'
import { okendoExperiences, okendoHero, okendoProjects, okendoSkillCategories } from '../data/variants/okendo'

const props = defineProps({
  lang: {
    type: String as PropType<'zh' | 'en'>,
    required: true,
  },
})

const title = computed(() => props.lang === 'zh' ? okendoHero.title.zh : okendoHero.title.en)
const summary = computed(() => props.lang === 'zh' ? okendoHero.summary.zh : okendoHero.summary.en)

useReveal()
</script>

<template>
  <div>
    <div class="no-print sticky top-[57px] z-30 flex items-center justify-center gap-2 bg-blue-600/95 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
      <FaIcon :icon="['fas', 'code']" class="text-[11px]" />
      {{ lang === 'zh' ? '應徵 Okendo Senior Frontend Software Engineer 職位' : 'Applying for Okendo Senior Frontend Software Engineer' }}
    </div>

    <main class="mx-auto max-w-4xl px-4 pb-20 sm:px-6 no-print">
      <TheHero :title-override="title" :summary-override="summary" />
      <TheExperience :lang="lang" :experiences="okendoExperiences" />
      <TheProjects :lang="lang" :project-items="okendoProjects" />
      <TheSkills :lang="lang" :skill-categories="okendoSkillCategories" />
    </main>
    <ThePrintResume
      :lang="lang"
      :experiences="okendoExperiences"
      :projects="okendoProjects"
      :skill-categories="okendoSkillCategories"
      :title="title"
    />
    <TheFullPrintResume
      :lang="lang"
      :experiences="okendoExperiences"
      :projects="okendoProjects"
      :skill-categories="okendoSkillCategories"
      :title="title"
      :summary="summary"
    />
  </div>
</template>
