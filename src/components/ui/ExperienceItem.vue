<script setup lang="ts">
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.min.css'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { ExperienceItem } from '../../types'
import DetailModal from './DetailModal.vue'
import { copyText } from '../../utils/clipboard'

const { item, lang } = defineProps<{
  item: ExperienceItem
  lang: 'zh' | 'en'
}>()

const open = ref(false)
let lightbox: ReturnType<typeof GLightbox> | null = null

// Auto-open modal if hash fragment matches this item
const checkAndOpenHash = () => {
  if (typeof window === 'undefined') return
  const hash = window.location.hash || ''
  // Check if hash contains this experience ID (e.g., #/experience-xxx or #/tsmc#experience-xxx)
  if (hash.includes(`#experience-${item.id}`) || hash.includes(`experience-${item.id}`)) {
    open.value = true
    nextTick(() => {
      const el = document.getElementById(`experience-${item.id}`)
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

const bullets = computed(() => item.bullets[lang])

// permalink / copy URL - only for use inside modal
const showCopied = ref(false)
const copyLink = async () => {
  if (typeof window === 'undefined') return
  // Add hash fragment for this experience
  const baseUrl = window.location.href.split('#')[0]
  const newHash = `#${window.location.hash.split('#')[1] || '/'}#experience-${item.id}`
  const newUrl = baseUrl + newHash
  try {
    await copyText(newUrl)
    showCopied.value = true
    setTimeout(() => (showCopied.value = false), 1400)
  } catch {
    showCopied.value = false
  }
}

const contributionSections = computed(() => {
  if (!item.contribution?.[lang]) return []

  try {
    return JSON.parse(item.contribution[lang]) as Array<{ title: string; items: string[] }>
  } catch {
    return []
  }
})

const activeContributionSection = ref<string | null>(null)

const splitContributionText = (text: string) => {
  const parts = text.split(/(\d[\d,\.\-+%a-zA-Z]+)/g).filter(Boolean)
  return parts.map((part) => ({
    text: part,
    highlight: /^\d[\d,\.\-+%a-zA-Z]+$/.test(part),
  }))
}

const isLocalhost = computed(() => {
  if (typeof window === 'undefined') return false
  return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
})

const displayContributionText = (text: string) => {
  if (isLocalhost.value) return text
  return text
    .replace(/（透過[^）]+）$/u, '')
    .replace(/(\(via[^)]+\))$/u, '')
    .trim()
}

const showContributionSection = computed(() => isLocalhost.value)

const toggleContributionSection = (title: string) => {
  activeContributionSection.value = activeContributionSection.value === title ? null : title
}

watch(contributionSections, (sections) => {
  if (sections.length && !activeContributionSection.value) {
    activeContributionSection.value = sections[0].title
  }
}, { immediate: true })

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
  <div
    :id="`experience-${item.id}`"
    role="button"
    tabindex="0"
    class="group relative w-full text-left rounded-xl border border-gray-200 bg-white/90 p-4 sm:p-5 shadow-sm hover:shadow-md dark:border-gray-700 dark:bg-gray-900/80 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
    :class="isBreak ? 'bg-gray-50/60 dark:bg-gray-800/30' : ''"
    @click="open = true"
    @keydown.enter="open = true"
    @keydown.space.prevent="open = true"
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
        class="inline-flex items-center gap-1.5 text-xs tabular-nums rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 px-2.5 py-1"
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
  </div>

  <DetailModal :open="open" @close="open = false">
    <div>
      <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 pr-24">{{ lang === 'zh' ? item.position.zh : item.position.en }}</h3>
      <p class="text-sm text-blue-600 dark:text-blue-400 font-medium">{{ lang === 'zh' ? item.company.zh : item.company.en }}</p>
      <p class="text-xs text-gray-400 mt-1.5">{{ periodParts.range }} · {{ periodParts.duration }}</p>
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
        <li v-for="bullet in bullets" :key="bullet">{{ bullet }}</li>
      </ul>
      <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2.5">{{ $t('common.techStack') }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tech in item.techStack" :key="tech" class="badge">{{ tech }}</span>
      </div>

      <div v-if="item.contribution && showContributionSection" class="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
        <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">{{ $t('common.contribution') }}</p>

        <div class="space-y-2">
          <div
            v-for="section in contributionSections"
            :key="section.title"
            class="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <!-- Accordion Header -->
            <button
              type="button"
              class="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              @click="toggleContributionSection(section.title)"
            >
              <span class="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                <span class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 shadow-sm">
                  <FaIcon
                    :icon="section.title === '性能提升' || section.title === 'Performance'
                      ? ['fas', 'bolt']
                      : section.title === '程式品質' || section.title === 'Quality'
                        ? ['fas', 'code']
                        : section.title === '商業影響' || section.title === 'Impact'
                          ? ['fas', 'chart-line']
                          : ['fas', 'rocket']"
                  />
                </span>
                <span class="text-base font-bold uppercase tracking-[0.2em]">{{ section.title }}</span>
              </span>
              <FaIcon
                :icon="['fas', 'chevron-down']"
                class="text-gray-500 dark:text-gray-400 transition-transform duration-300"
                :style="{ transform: activeContributionSection === section.title ? 'rotate(180deg)' : 'rotate(0deg)' }"
              />
            </button>

            <!-- Accordion Content -->
            <transition
              enter-active-class="overflow-hidden transition-all duration-300"
              leave-active-class="overflow-hidden transition-all duration-300"
              @enter="(el: Element) => (el as HTMLElement).style.maxHeight = (el as HTMLElement).scrollHeight + 'px'"
              @leave="(el: Element) => (el as HTMLElement).style.maxHeight = '0px'"
            >
              <div
                v-if="activeContributionSection === section.title"
                class="max-h-max"
              >
                <div class="px-4 py-3 bg-gray-50/50 dark:bg-gray-900/30 border-t border-gray-100 dark:border-gray-700">
                  <ul class="space-y-2.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    <li v-for="itemText in section.items" :key="itemText" class="flex gap-2">
                      <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"></span>
                      <span>
                        <template v-for="(part, index) in splitContributionText(displayContributionText(itemText))" :key="`${part.text}-${index}`">
                          <span v-if="part.highlight" class="font-semibold text-blue-600 dark:text-blue-400">{{ part.text }}</span>
                          <template v-else>{{ part.text }}</template>
                        </template>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </transition>
          </div>
        </div>
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

      <div v-if="item.linkGroups?.length" class="mt-6 space-y-3">
        <div v-for="group in item.linkGroups" :key="lang === 'zh' ? group.label.zh : group.label.en">
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
            {{ lang === 'zh' ? group.label.zh : group.label.en }}
          </p>
          <div class="flex flex-wrap gap-2">
            <a
              v-for="link in group.links"
              :key="link.url"
              :href="link.url"
              target="_blank"
              rel="noopener"
              class="badge cursor-pointer hover:text-blue-600 dark:hover:text-blue-300"
            >
              <FaIcon :icon="linkIcon(link.icon)" class="mr-1.5 text-xs opacity-60" />
              {{ lang === 'zh' ? link.label.zh : link.label.en }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </DetailModal>
</template>
