<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import TheExperience from '../components/sections/TheExperience.vue'
import TheHero from '../components/sections/TheHero.vue'
import TheProjects from '../components/sections/TheProjects.vue'
import ThePrintResume from '../components/sections/ThePrintResume.vue'
import TheSkills from '../components/sections/TheSkills.vue'
import { tsmcExperiences, tsmcSkillCategories, tsmcHero } from '../data/variants/tsmc'

const props = defineProps({
  lang: {
    type: String as PropType<'zh' | 'en'>,
    required: true,
  },
})

const title = computed(() => props.lang === 'zh' ? tsmcHero.title.zh : tsmcHero.title.en)
const summary = computed(() => props.lang === 'zh' ? tsmcHero.summary.zh : tsmcHero.summary.en)
</script>

<template>
  <div>
    <!-- TSMC variant banner -->
    <div class="no-print sticky top-[57px] z-30 flex items-center justify-center gap-2 bg-blue-600/95 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
      <FaIcon :icon="['fas', 'rocket']" class="text-[11px]" />
      {{ lang === 'zh' ? '台積電 Software & DevOps Engineer 版本' : 'TSMC Software & DevOps Engineer Edition' }}
    </div>

    <main class="max-w-4xl mx-auto px-4 sm:px-6 pb-20 no-print">
      <TheHero :title-override="title" :summary-override="summary" />
      <TheExperience :lang="lang" :experiences="tsmcExperiences" />
      <TheProjects :lang="lang" />
      <TheSkills :lang="lang" :skill-categories="tsmcSkillCategories" />
    </main>
    <ThePrintResume :lang="lang" />
  </div>
</template>
