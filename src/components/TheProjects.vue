<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import { experiences } from '../data/experience'
import { projects } from '../data/projects'

defineProps({
  lang: {
    type: String as PropType<'zh' | 'en'>,
    required: true,
  },
})

const groupedProjects = computed(() => {
  return experiences
    .map((experience) => {
      const ids = experience.relatedProjectIds ?? []
      const items = ids
        .map((id) => projects.find((project) => project.id === id))
        .filter((project): project is (typeof projects)[number] => project !== undefined)
      return { experience, items }
    })
    .filter((group) => group.items.length > 0)
})

const mappedProjectIds = computed(() => new Set(groupedProjects.value.flatMap((group) => group.items.map((item) => item.id))))

const unmappedProjects = computed(() => projects.filter((project) => !mappedProjectIds.value.has(project.id)))
</script>

<template>
  <section id="projects" class="reveal py-16">
    <h2 class="section-title flex items-center gap-2">
      <FaIcon :icon="['fas', 'folder-open']" class="text-blue-600 text-xl" />
      {{ $t('sections.projects') }}
    </h2>

    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
      {{ $t('sections.projectsOverview') }}
    </p>

    <div class="space-y-4">
      <article
        v-for="group in groupedProjects"
        :key="group.experience.id"
        class="rounded-xl border border-gray-200 dark:border-gray-700 p-4"
      >
        <div class="flex items-start justify-between gap-3 mb-3">
          <div>
            <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
              {{ lang === 'zh' ? group.experience.company.zh : group.experience.company.en }}
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              {{ group.experience.period }}
            </p>
          </div>
          <a
            :href="`#exp-${group.experience.id}`"
            class="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            {{ $t('common.jumpToExperience') }}
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div
            v-for="project in group.items"
            :key="project.id"
            class="rounded-lg border border-gray-100 dark:border-gray-800 p-3"
          >
            <div class="flex items-start justify-between gap-2">
              <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100">{{ project.name }}</h3>
              <span
                class="shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium"
              >
                {{ project.category }}
              </span>
            </div>
            <p class="mt-1 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{{ project.shortDesc }}</p>
          </div>
        </div>
      </article>

      <article v-if="unmappedProjects.length" class="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-4">
        <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('common.noRelatedProjects') }}
        </p>
        <div class="flex flex-wrap gap-2">
          <span v-for="project in unmappedProjects" :key="project.id" class="badge">{{ project.name }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
