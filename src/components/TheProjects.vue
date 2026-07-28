<script setup lang="ts">
import { computed, ref } from 'vue'
import type { PropType } from 'vue'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard.vue'

const { lang } = defineProps({
  lang: {
    type: String as PropType<'zh' | 'en'>,
    required: true,
  },
})

const selectedCategory = ref('all')
const categories = computed(() => [...new Set(projects.map((item) => item.category))])
const filteredProjects = computed(() =>
  selectedCategory.value === 'all'
    ? projects
    : projects.filter((item) => item.category === selectedCategory.value),
)
</script>

<template>
  <section id="projects" class="reveal py-16">
    <h2 class="section-title flex items-center gap-2">
      <FaIcon :icon="['fas', 'folder-open']" class="text-blue-600 text-xl" />
      {{ $t('sections.projects') }}
    </h2>
    <div class="mb-5 flex flex-wrap gap-2">
      <button
        class="px-3 py-1 rounded-full text-sm font-medium border transition-colors"
        :class="
          selectedCategory === 'all'
            ? 'bg-blue-600 text-white border-blue-600'
            : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-500'
        "
        @click="selectedCategory = 'all'"
      >
        {{ lang === 'zh' ? '全部' : 'All' }}
      </button>
      <button
        v-for="category in categories"
        :key="category"
        class="px-3 py-1 rounded-full text-sm font-medium border transition-colors"
        :class="
          selectedCategory === category
            ? 'bg-blue-600 text-white border-blue-600'
            : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-500'
        "
        @click="selectedCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <ProjectCard v-for="item in filteredProjects" :key="item.id" :item="item" :lang="lang" />
    </div>
  </section>
</template>
