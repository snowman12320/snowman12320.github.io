<script setup lang="ts">
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.min.css'
import { computed, onMounted, ref } from 'vue'
import type { ExperienceItem } from '../types'

const { item, lang } = defineProps<{
  item: ExperienceItem
  lang: 'zh' | 'en'
}>()

const open = ref(false)

const bullets = computed(() => item.bullets[lang])

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
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md dark:hover:shadow-gray-900 transition-shadow">
    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
      <div>
        <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100">{{ lang === 'zh' ? item.position.zh : item.position.en }}</h3>
        <p class="text-blue-600 dark:text-blue-400 font-medium">
          {{ lang === 'zh' ? item.company.zh : item.company.en }}
        </p>
        <p class="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
          <FaIcon :icon="['fas', 'location-dot']" />
          {{ lang === 'zh' ? item.location.zh : item.location.en }}
        </p>
      </div>
      <span class="text-sm text-gray-400 dark:text-gray-500 shrink-0">{{ item.period }}</span>
    </div>
    <button
      class="no-print mt-4 w-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
      :aria-label="open ? $t('common.collapse') : $t('common.details')"
      @click="open = !open"
    >
      <FaIcon :icon="['fas', 'chevron-down']" class="text-base transition-transform duration-200" :class="open ? 'rotate-180' : ''" />
    </button>
    <div v-show="open" class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
      <ul class="mb-4 space-y-1.5 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
        <li v-for="bullet in bullets" :key="bullet">{{ bullet }}</li>
      </ul>
      <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">{{ $t('common.techStack') }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tech in item.techStack" :key="tech" class="badge">{{ tech }}</span>
      </div>

      <div v-if="item.gallery" class="mt-4">
        <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">{{ $t('common.highlights') }}</p>
        <div class="flex flex-wrap gap-3">
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
              :alt="image.description"
              class="h-28 rounded-lg border border-gray-200 dark:border-gray-700 object-cover cursor-zoom-in hover:opacity-90 hover:shadow-md transition-all"
            />
          </a>
        </div>
      </div>

      <div v-if="item.links?.length" class="flex flex-wrap gap-3 mt-4">
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
</template>
