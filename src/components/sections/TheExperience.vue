<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { PropType } from 'vue'
import { experiences as defaultExperiences } from '../../data/experience'
import type { ExperienceItem as ExperienceItemType } from '../../types'
import ExperienceItem from '../ui/ExperienceItem.vue'

const { lang, experiences } = defineProps({
  lang: {
    type: String as PropType<'zh' | 'en'>,
    required: true,
  },
  experiences: {
    type: Array as PropType<ExperienceItemType[]>,
    default: () => defaultExperiences,
  },
})

const isExpanded = ref(false)
const PRESET_COUNT = 3

const displayedExperiences = computed(() => {
  if (isExpanded.value) return experiences
  return experiences.slice(0, PRESET_COUNT)
})

const hasMoreExperiences = computed(() => experiences.length > PRESET_COUNT)

const toggleLabel = computed(() => {
  const remainingCount = experiences.length - PRESET_COUNT
  if (lang === 'zh') {
    return isExpanded.value ? '收起部分經歷' : `查看更多經歷 (${remainingCount}+)`
  }

  return isExpanded.value ? 'Collapse experience' : `Show more experience (${remainingCount}+)`
})

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

// Auto-expand if hash points to a collapsed experience
const autoExpandIfNeeded = () => {
  if (typeof window === 'undefined') return
  const hash = window.location.hash || ''
  const match = hash.match(/experience-([^#?&]+)/)
  if (!match) return
  const targetId = match[1]
  const isHidden = experiences.slice(PRESET_COUNT).some((e) => e.id === targetId)
  if (isHidden) isExpanded.value = true
}

onMounted(() => {
  autoExpandIfNeeded()
  window.addEventListener('hashchange', autoExpandIfNeeded)
})
</script>

<template>
  <section id="experience" class="reveal py-16 border-b border-gray-100 dark:border-gray-800">
    <h2 class="section-title flex items-center gap-2">
      <FaIcon :icon="['fas', 'briefcase']" class="text-blue-600 text-xl" />
      {{ $t('nav.experience') }}
    </h2>
    <div
      class="relative space-y-4 sm:pl-8 before:hidden sm:before:block before:absolute before:left-[7px] before:top-3 before:bottom-3 before:w-0.5 before:bg-[repeating-linear-gradient(to_bottom,theme(colors.gray.300)_0,theme(colors.gray.300)_6px,transparent_6px,transparent_12px)] dark:before:bg-[repeating-linear-gradient(to_bottom,theme(colors.gray.700)_0,theme(colors.gray.700)_6px,transparent_6px,transparent_12px)]"
    >
      <ExperienceItem v-for="item in displayedExperiences" :key="item.id" :item="item" :lang="lang" />
    </div>

    <div v-if="hasMoreExperiences" class="mt-8 flex justify-center">
      <button
        class="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
        @click="toggleExpanded"
      >
        <span>{{ toggleLabel }}</span>
        <FaIcon :icon="['fas', 'chevron-down']" class="text-sm transition-transform duration-300" :class="isExpanded ? 'rotate-180' : ''" />
      </button>
    </div>
  </section>
</template>
