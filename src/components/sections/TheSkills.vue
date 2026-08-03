<script setup lang="ts">
import type { PropType } from 'vue'
import { skillCategories as defaultSkillCategories } from '../../data/skills'
import type { SkillCategory } from '../../types'

const { lang, skillCategories } = defineProps({
  lang: {
    type: String as PropType<'zh' | 'en'>,
    required: true,
  },
  skillCategories: {
    type: Array as PropType<SkillCategory[]>,
    default: () => defaultSkillCategories,
  },
})

const iconMap: Record<string, ['fas' | 'fab', string]> = {
  robot: ['fas', 'robot'],
  'laptop-code': ['fas', 'laptop-code'],
  server: ['fas', 'server'],
  cloud: ['fas', 'cloud'],
  vial: ['fas', 'vial'],
  plug: ['fas', 'plug'],
}
</script>

<template>
  <section id="skills" class="reveal py-16 border-t border-gray-100 dark:border-gray-800">
    <h2 class="section-title flex items-center gap-2">
      <FaIcon :icon="['fas', 'bolt']" class="text-blue-600 text-xl" />
      {{ $t('sections.skills') }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
      <div
        v-for="category in skillCategories"
        :key="category.id"
        class="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 dark:border-gray-700 dark:bg-gray-900/80"
      >
        <p class="mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">
          <FaIcon :icon="iconMap[category.icon]" class="w-3.5 text-center text-gray-600 dark:text-gray-400" />
          {{ lang === 'zh' ? category.title.zh : category.title.en }}
        </p>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in category.skills" :key="skill" class="badge">{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
