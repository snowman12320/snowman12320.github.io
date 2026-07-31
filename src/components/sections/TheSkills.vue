<script setup lang="ts">
import type { PropType } from 'vue'
import { skillCategories } from '../../data/skills'

defineProps({
  lang: {
    type: String as PropType<'zh' | 'en'>,
    required: true,
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
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      <div
        v-for="category in skillCategories"
        :key="category.id"
        class="rounded-2xl border border-gray-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/70"
      >
        <p class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
          <FaIcon :icon="iconMap[category.icon]" class="w-3.5 text-center" />
          {{ lang === 'zh' ? category.title.zh : category.title.en }}
        </p>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in category.skills" :key="skill" class="badge">{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
