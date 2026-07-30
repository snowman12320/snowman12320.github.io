<script setup lang="ts">
import { computed, ref } from 'vue'
import type { PropType } from 'vue'
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard.vue'

const { lang } = defineProps({
  lang: {
    type: String as PropType<'zh' | 'en'>,
    required: true,
  },
})

const selectedCategory = ref('all')
// Use category id (zh key) as stable filter key, display the lang-appropriate label
const categories = computed(() => {
  const seen = new Set<string>()
  return projects
    .map((item) => ({ key: item.category.zh, label: item.category[lang] }))
    .filter(({ key }) => (seen.has(key) ? false : seen.add(key)))
})
const filteredProjects = computed(() =>
  selectedCategory.value === 'all'
    ? projects
    : projects.filter((item) => item.category.zh === selectedCategory.value),
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
        v-for="cat in categories"
        :key="cat.key"
        class="px-3 py-1 rounded-full text-sm font-medium border transition-colors"
        :class="
          selectedCategory === cat.key
            ? 'bg-blue-600 text-white border-blue-600'
            : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-500'
        "
        @click="selectedCategory = cat.key"
      >
        {{ cat.label }}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <ProjectCard v-for="item in filteredProjects" :key="item.id" :item="item" :lang="lang" />
    </div>
  </section>
</template>
