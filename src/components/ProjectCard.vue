<script setup lang="ts">
import GLightbox from 'glightbox'
import { computed, nextTick, ref, watch } from 'vue'
import type { ProjectItem } from '../types'
import DetailModal from './DetailModal.vue'

const { item, lang } = defineProps<{
  item: ProjectItem
  lang: 'zh' | 'en'
}>()

const open = ref(false)
let lightbox: ReturnType<typeof GLightbox> | null = null

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

const detailPoints = computed(() =>
  item.detailedDesc[lang]
    .split(/；|。\s*|\. (?=[A-Z])/)
    .map((line) => line.trim())
    .filter(Boolean),
)

watch(open, async (isOpen) => {
  if (isOpen) {
    await nextTick()
    lightbox?.destroy()
    lightbox = GLightbox({ selector: '.glightbox' })
  }
})
</script>

<template>
  <button
    class="group relative text-left w-full rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-lg dark:hover:shadow-gray-900 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
    @click="open = true"
  >
    <span
      class="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
      :aria-label="$t('common.details')"
    >
      <FaIcon :icon="['fas', 'arrow-up-right-from-square']" class="text-xs" />
    </span>

    <div class="pr-8">
      <span class="inline-block text-xs px-2 py-0.5 rounded-full font-medium" :class="categoryColorClass[item.categoryColor]">
        {{ item.category[lang] }}
      </span>
      <h3 class="mt-2 text-base font-bold text-gray-900 dark:text-gray-100">{{ item.name[lang] }}</h3>
      <p class="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
        {{ item.shortDesc[lang] }}
      </p>
      <div class="mt-3 flex flex-wrap gap-1.5">
        <span v-for="tech in item.techStack" :key="tech" class="badge">{{ tech }}</span>
      </div>
    </div>
  </button>

  <DetailModal :open="open" size="xl" @close="open = false">
    <div class="pr-8">
      <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ item.name[lang] }}</h3>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ item.category[lang] }}</p>
    </div>

    <div class="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
      <ul class="mb-6 space-y-2.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed list-disc list-inside">
        <li v-for="point in detailPoints" :key="point">{{ point }}</li>
      </ul>

      <div v-if="item.gallery" class="mb-6">
        <div class="flex gap-3 overflow-x-auto pb-1">
          <a
            v-for="image in item.gallery.images"
            :key="image.src"
            :href="image.src"
            class="glightbox shrink-0"
            :data-gallery="item.gallery.id"
            :data-description="image.description"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              class="h-24 w-40 rounded-lg border border-gray-200 dark:border-gray-700 object-cover cursor-zoom-in hover:opacity-90 hover:shadow-md transition-all"
            />
          </a>
        </div>
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
  </DetailModal>
</template>
