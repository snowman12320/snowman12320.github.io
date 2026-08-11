<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { PropType } from 'vue'
import { projects } from '../../data/projects'
import type { ProjectItem } from '../../types'
import ProjectCard from '../ui/ProjectCard.vue'

const { lang, imageFirst, projectItems } = defineProps({
  lang: {
    type: String as PropType<'zh' | 'en'>,
    required: true,
  },
  imageFirst: {
    type: Boolean,
    default: false,
  },
  projectItems: {
    type: Array as PropType<ProjectItem[]>,
    default: () => projects,
  },
})

const selectedCategory = ref('all')
const currentPage = ref(1)
const pageSize = imageFirst ? 6 : 4

// Use category id (zh key) as stable filter key, display the lang-appropriate label
const categories = computed(() => {
  const seen = new Set<string>()
  return projectItems
    .map((item) => ({ key: item.category.zh, label: item.category[lang] }))
    .filter(({ key }) => (seen.has(key) ? false : seen.add(key)))
})

const filteredProjects = computed(() =>
  selectedCategory.value === 'all'
    ? projectItems
    : projectItems.filter((item) => item.category.zh === selectedCategory.value),
)

const totalPages = computed(() => Math.max(1, Math.ceil(filteredProjects.value.length / pageSize)))

const pagedProjects = computed(() => {
  const safePage = Math.min(currentPage.value, totalPages.value)
  const start = (safePage - 1) * pageSize
  return filteredProjects.value.slice(start, start + pageSize)
})

const goToPage = (page: number) => {
  currentPage.value = Math.max(1, Math.min(page, totalPages.value))
}

const openProjectFromHash = () => {
  if (typeof window === 'undefined') return

  const hash = window.location.hash
  const project = projectItems.find((item) => hash.includes(`#project-${item.id}`))
  if (!project) return

  // Render the target card before ProjectCard checks the permalink hash.
  selectedCategory.value = 'all'
  const projectIndex = projectItems.findIndex((item) => item.id === project.id)
  currentPage.value = Math.floor(projectIndex / pageSize) + 1
}

watch(filteredProjects, () => {
  currentPage.value = 1
})

onMounted(() => {
  openProjectFromHash()
  window.addEventListener('hashchange', openProjectFromHash)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', openProjectFromHash)
})
</script>

<template>
  <section
    id="projects"
    :class="imageFirst ? 'reveal px-[clamp(1.25rem,7vw,8.5rem)] py-16' : 'reveal py-16'"
  >
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

    <div :class="imageFirst ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5' : 'grid grid-cols-1 md:grid-cols-2 gap-5'">
    <ProjectCard v-for="item in pagedProjects" :key="item.id" :item="item" :lang="lang" :image-first="imageFirst" />
    </div>

    <div v-if="totalPages > 1" class="mt-8 flex flex-wrap items-center justify-center gap-2">
      <button
        class="rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
      >
        {{ lang === 'zh' ? '上一頁' : 'Prev' }}
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        class="min-w-9 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors"
        :class="currentPage === page
          ? 'border-blue-600 bg-blue-600 text-white'
          : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400'"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>

      <button
        class="rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
        :disabled="currentPage === totalPages"
        @click="goToPage(currentPage + 1)"
      >
        {{ lang === 'zh' ? '下一頁' : 'Next' }}
      </button>
    </div>
  </section>
</template>
