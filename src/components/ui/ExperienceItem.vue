<script setup lang="ts">
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.min.css'
import { computed, nextTick, ref, watch } from 'vue'
import type { ExperienceItem } from '../../types'
import DetailModal from './DetailModal.vue'

const { item, lang } = defineProps<{
  item: ExperienceItem
  lang: 'zh' | 'en'
}>()

const open = ref(false)
let lightbox: ReturnType<typeof GLightbox> | null = null

const bullets = computed(() => item.bullets[lang])

const isBreak = computed(() => item.id.includes('career-break') || item.id === 'ithome-ironman')
const isCurrent = computed(() => item.period.includes('Present') || item.period.includes('現在'))

// Split "2024/02 — 2026/08 (2y 7m)" into a readable range + duration badge
const periodParts = computed(() => {
  const match = item.period.match(/^(.*?)\s*\(([^)]+)\)\s*$/)
  return match ? { range: match[1], duration: match[2] } : { range: item.period, duration: '' }
})

const linkIcon = (icon: string) => {
  if (icon === 'github') return ['fab', 'github'] as const
  if (icon === 'document') return ['fas', 'file-lines'] as const
  if (icon === 'youtube') return ['fab', 'youtube'] as const
  return ['fas', 'arrow-up-right-from-square'] as const
}

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
    class="group relative w-full text-left rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-5 hover:shadow-lg dark:hover:shadow-gray-900 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
    :class="isBreak ? 'bg-gray-50/60 dark:bg-gray-800/30' : ''"
    @click="open = true"
  >
    <!-- timeline dot -->
    <span
      class="hidden sm:block absolute -left-8 top-6 w-3.5 h-3.5 rounded-full bg-white dark:bg-gray-900 border-2"
      :class="[
        isCurrent ? 'border-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.15)]' : 'border-gray-400 dark:border-gray-600',
        isBreak ? 'border-dashed' : '',
      ]"
    />

    <span
      class="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
      :aria-label="$t('common.details')"
    >
      <FaIcon :icon="['fas', 'arrow-up-right-from-square']" class="text-xs" />
    </span>

    <div class="pr-8">
      <span
        class="inline-flex items-center gap-1.5 text-xs tabular-nums rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2.5 py-1"
      >
        {{ periodParts.range }}
        <span
          v-if="periodParts.duration"
          class="font-semibold text-blue-600 dark:text-blue-400 before:content-['·'] before:mr-1 before:font-normal before:text-gray-400"
        >
          {{ periodParts.duration }}
        </span>
      </span>
    </div>

    <div class="mt-2">
      <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100">{{ lang === 'zh' ? item.position.zh : item.position.en }}</h3>
      <p class="text-blue-600 dark:text-blue-400 font-medium">
        {{ lang === 'zh' ? item.company.zh : item.company.en }}
      </p>
      <p class="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
        <FaIcon :icon="['fas', 'location-dot']" />
        {{ lang === 'zh' ? item.location.zh : item.location.en }}
      </p>
    </div>
  </button>

  <DetailModal :open="open" @close="open = false">
    <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 pr-8">{{ lang === 'zh' ? item.position.zh : item.position.en }}</h3>
    <p class="text-sm text-blue-600 dark:text-blue-400 font-medium">{{ lang === 'zh' ? item.company.zh : item.company.en }}</p>
    <p class="text-xs text-gray-400 mt-1.5">{{ periodParts.range }} · {{ periodParts.duration }}</p>

    <div class="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
      <ul class="mb-6 space-y-2.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed list-disc list-inside">
        <li v-for="bullet in bullets" :key="bullet">{{ bullet }}</li>
      </ul>
      <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2.5">{{ $t('common.techStack') }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tech in item.techStack" :key="tech" class="badge">{{ tech }}</span>
      </div>

      <div v-if="item.gallery" class="mt-6">
        <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2.5">{{ $t('common.highlights') }}</p>
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
              :alt="image.description"
              class="h-24 w-40 rounded-lg border border-gray-200 dark:border-gray-700 object-cover cursor-zoom-in hover:opacity-90 hover:shadow-md transition-all"
            />
          </a>
        </div>
      </div>

      <div v-if="item.links?.length" class="flex flex-wrap gap-3 mt-6">
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
