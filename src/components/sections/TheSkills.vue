<script setup lang="ts">
import { computed, ref } from 'vue'
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

const selectedId = ref('devops-cloud')
const selectedCategory = computed(() =>
  skillCategories.find((category) => category.id === selectedId.value) ?? skillCategories[0],
)

const selectCategory = (category: SkillCategory) => {
  selectedId.value = category.id
}

const nodePosition = (id: string) => {
  // Keep the same six vertices on every screen size; only the node size changes.
  const positions: Record<string, string> = {
    'ai-workflows':         'left-[24%] -translate-x-1/2 top-[5%]',
    'frontend-mobile':      'right-[24%] translate-x-1/2 top-[5%]',
    'devops-cloud':         'left-[4%] top-1/2 -translate-y-1/2',
    'third-party':          'right-[4%] top-1/2 -translate-y-1/2',
    'backend-architecture': 'left-[24%] -translate-x-1/2 bottom-[5%]',
    'testing-quality':       'right-[24%] translate-x-1/2 bottom-[5%]',
  }
  return positions[id] ?? ''
}

const nodeSize = (id: string) =>
  id === 'devops-cloud' || id === 'third-party'
    ? 'w-[25vw] max-w-[128px] sm:max-w-[148px]'
    : 'w-[29vw] max-w-[148px]'
</script>

<template>
  <section id="skills" class="reveal border-t border-gray-100 py-16 dark:border-gray-800">
    <h2 class="section-title flex items-center gap-2">
      <FaIcon :icon="['fas', 'bolt']" class="text-xl text-blue-600" />
      {{ $t('sections.skills') }}
    </h2>

    <!-- One proportional hexagon layout for mobile and desktop -->
    <div class="relative mx-auto h-[390px] max-w-3xl px-1 py-4 sm:h-[500px] sm:px-8">
      <!-- Decorative crosshairs -->
      <div class="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[78%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-900 sm:block" />
      <div class="pointer-events-none absolute left-1/2 top-1/2 hidden h-[78%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-blue-200 to-transparent dark:via-blue-900 sm:block" />

      <div class="relative h-full">
        <button
          v-for="category in skillCategories"
          :key="category.id"
          type="button"
          class="skill-node group absolute flex aspect-square flex-col items-center justify-center rounded-full border bg-white/90 p-2 text-center shadow-sm backdrop-blur-sm transition-all duration-300 dark:bg-gray-900/90 sm:w-[22%] sm:p-3"
          :class="[nodePosition(category.id), nodeSize(category.id), selectedId === category.id
            ? 'scale-105 border-blue-500 text-blue-700 shadow-[0_0_28px_rgba(59,130,246,0.35)] ring-4 ring-blue-500/15 dark:border-blue-400 dark:text-blue-300'
            : 'border-gray-200 text-gray-600 hover:scale-105 hover:border-blue-300 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-700 dark:hover:text-blue-400' ]"
          :aria-pressed="selectedId === category.id"
          @click="selectCategory(category)"
        >
          <span class="mb-1 flex h-8 w-8 items-center justify-center rounded-full transition-colors sm:mb-2 sm:h-10 sm:w-10"
            :class="selectedId === category.id ? 'bg-blue-600 text-white dark:bg-blue-500' : 'bg-blue-50 text-blue-600 dark:bg-blue-950/70 dark:text-blue-400'">
            <FaIcon :icon="iconMap[category.icon]" class="text-base" />
          </span>
          <span class="text-[10px] font-semibold leading-snug sm:text-sm">
            {{ lang === 'zh' ? category.title.zh : category.title.en }}
          </span>
        </button>
      </div>

      <!-- Center circle remains in the middle of the hexagon -->
      <div class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div class="flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 border-blue-500 bg-blue-600 px-3 text-center text-white shadow-[0_0_34px_rgba(37,99,235,0.35)] dark:border-blue-400 dark:bg-blue-700 sm:h-36 sm:w-36 sm:px-4">
          <span class="text-sm font-bold leading-tight">
            {{ $t('profile.title') }}
          </span>
        </div>
      </div>
    </div>

    <!-- Skills panel — outside the fixed-height hex container -->
    <div class="mx-auto mt-4 max-w-3xl px-4 sm:px-8">
      <div class="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 shadow-sm dark:border-blue-900/70 dark:bg-blue-950/30">
        <div class="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
          <FaIcon :icon="iconMap[selectedCategory.icon]" />
          {{ lang === 'zh' ? selectedCategory.title.zh : selectedCategory.title.en }}
        </div>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in selectedCategory.skills" :key="skill" class="badge">{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
