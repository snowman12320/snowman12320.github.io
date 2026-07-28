<script setup lang="ts">
import GLightbox from 'glightbox'
import { onMounted, ref } from 'vue'
import type { ProjectItem } from '../types'

const { item, lang } = defineProps<{
  item: ProjectItem
  lang: 'zh' | 'en'
}>()

const open = ref(false)

const categoryColorClass = {
  blue: 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
  green: 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  purple: 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
}

const linkIcon = (icon: string) => {
  if (icon === 'github') return ['fab', 'github'] as const
  if (icon === 'document') return ['fas', 'file-lines'] as const
  if (icon === 'youtube') return ['fab', 'youtube'] as const
  return ['fas', 'arrow-up-right-from-square'] as const
}

onMounted(() => {
  GLightbox({ selector: '.glightbox' })
})
</script>

<template>
  <div
    class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-lg dark:hover:shadow-gray-900 transition-shadow flex flex-col justify-between"
  >
    <div>
      <div class="flex items-start justify-between gap-2">
        <h3 class="text-base font-bold text-gray-900 dark:text-gray-100">{{ item.name }}</h3>
        <span class="shrink-0 text-xs px-2 py-0.5 rounded-full font-medium" :class="categoryColorClass[item.categoryColor]">
          {{ item.category }}
        </span>
      </div>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {{ item.shortDesc }}
      </p>
      <div class="mt-3 flex flex-wrap gap-1.5">
        <span v-for="tech in item.techStack" :key="tech" class="badge">{{ tech }}</span>
      </div>
    </div>
    <div>
      <button
        class="no-print mt-4 flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        @click="open = !open"
      >
        <FaIcon :icon="['fas', 'chevron-down']" class="transition-transform duration-200" :class="open ? 'rotate-180' : ''" />
        {{ open ? $t('common.collapse') : $t('common.details') }}
      </button>
      <div v-show="open" class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
          {{ item.detailedDesc }}
        </p>

        <div v-if="item.gallery" class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <a
            v-for="image in item.gallery.images"
            :key="image.src"
            :href="image.src"
            class="glightbox"
            :data-gallery="item.gallery.id"
            :data-description="image.description"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              class="h-28 w-full rounded-lg border border-gray-200 dark:border-gray-700 object-cover cursor-zoom-in hover:opacity-90 hover:shadow-md transition-all"
            />
          </a>
        </div>

        <div class="flex flex-wrap gap-3">
          <a
            v-for="link in item.links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaIcon :icon="linkIcon(link.icon)" />
            {{ lang === 'zh' ? link.label.zh : link.label.en }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
