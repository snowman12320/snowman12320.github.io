<script setup lang="ts">
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.min.css'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { ProjectItem } from '../../types'
import DetailModal from './DetailModal.vue'
import { copyText } from '../../utils/clipboard'

const { item, lang, imageFirst = false } = defineProps<{
  item: ProjectItem
  lang: 'zh' | 'en'
  imageFirst?: boolean
}>()

const open = ref(false)
let lightbox: ReturnType<typeof GLightbox> | null = null

// Auto-open modal if hash fragment matches this item
const checkAndOpenHash = () => {
  if (typeof window === 'undefined') return
  const hash = window.location.hash || ''
  // Check if hash contains this project ID (e.g., #/project-xxx or #/tsmc#project-xxx)
  if (hash.includes(`#project-${item.id}`) || hash.includes(`project-${item.id}`)) {
    open.value = true
    nextTick(() => {
      const el = document.getElementById(`project-${item.id}`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }
}

onMounted(() => {
  checkAndOpenHash()
  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', checkAndOpenHash)
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('hashchange', checkAndOpenHash)
  }
})

// permalink / copy URL - only for use inside modal
const showCopied = ref(false)
const copyLink = async () => {
  if (typeof window === 'undefined') return
  // Add hash fragment for this project
  const baseUrl = window.location.href.split('#')[0]
  const newHash = `#${window.location.hash.split('#')[1] || '/'}#project-${item.id}`
  const newUrl = baseUrl + newHash
  try {
    await copyText(newUrl)
    showCopied.value = true
    setTimeout(() => (showCopied.value = false), 1400)
  } catch {
    showCopied.value = false
  }
}

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
  <div
    :id="`project-${item.id}`"
    role="button"
    tabindex="0"
    class="group relative text-left w-full rounded-xl border border-gray-200 bg-white/90 p-5 shadow-sm hover:shadow-md dark:border-gray-700 dark:bg-gray-900/80 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
    @click="open = true"
    @keydown.enter="open = true"
    @keydown.space.prevent="open = true"
  >
    <div v-if="imageFirst" class="mb-4 -mx-5 -mt-5 overflow-hidden rounded-t-xl bg-slate-100 dark:bg-gray-800">
      <img
        v-if="item.gallery?.images[0]"
        :src="item.gallery.images[0].src"
        :alt="item.gallery.images[0].alt"
        class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div v-else class="flex h-48 items-center justify-center text-sm text-gray-400">
        {{ lang === 'zh' ? '專案預覽' : 'Project Preview' }}
      </div>
    </div>
    <span
      class="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
      :aria-label="$t('common.details')"
    >
      <FaIcon :icon="['fas', 'arrow-up-right-from-square']" class="text-xs" />
    </span>

    <div class="pr-8">
      <span v-if="!imageFirst" class="inline-block text-xs px-2 py-0.5 rounded-full font-medium" :class="categoryColorClass[item.categoryColor]">
        {{ item.category[lang] }}
      </span>
      <h3 class="mt-2 line-clamp-1 text-base font-bold text-slate-900 dark:text-gray-100">{{ item.name[lang] }}</h3>
      <p v-if="!imageFirst" class="mt-1 line-clamp-1 text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
        {{ item.shortDesc[lang] }}
      </p>
      <div v-if="!imageFirst" class="mt-3 flex flex-wrap gap-1.5">
        <span v-for="tech in item.techStack" :key="tech" class="badge">{{ tech }}</span>
      </div>
    </div>
  </div>

  <DetailModal :open="open" size="xl" @close="open = false">
    <div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 pr-24">{{ item.name[lang] }}</h3>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ item.category[lang] }}</p>
    </div>
    <button
      type="button"
      class="absolute top-4 right-14 sm:top-6 sm:right-[3.75rem] p-2 rounded-lg text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      @click="copyLink"
      :aria-label="lang === 'zh' ? '複製連結' : 'Copy link'"
      :title="lang === 'zh' ? '複製連結' : 'Copy link'"
    >
      <FaIcon :icon="['fas', 'link']" class="text-sm" />
    </button>
    <span v-if="showCopied" class="absolute top-14 right-8 sm:top-16 z-50 text-xs rounded bg-slate-900 text-white px-2 py-1">{{ lang === 'zh' ? '已複製' : 'Copied' }}</span>

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
