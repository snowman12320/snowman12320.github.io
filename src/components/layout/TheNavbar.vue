<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faPrint, faSun, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import type { PropType } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

library.add(faMoon, faPrint, faSun, faChevronDown)

const route = useRoute()
const isOkendoResume = computed(() => route.path === '/okendo')

defineProps({
  lang: {
    type: String as PropType<'zh' | 'en'>,
    required: true,
  },
  isDark: {
    type: Boolean,
    required: true,
  },
})

defineEmits<{
  toggleLang: []
  toggleDark: []
}>()

const handlePrint = () => {
  window.print()
}

const handlePrintFull = () => {
  document.body.classList.add('print-full')
  window.print()
}

const clearFullPrintMode = () => document.body.classList.remove('print-full')
const isActive = (path: string) => route.path === path
const scrollToSection = (id: string, event: MouseEvent) => {
  event.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
const isLocalhost = computed(() => {
  if (typeof window === 'undefined') return false
  return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
})

// Company menu state
const menuOpen = ref(false)
const menuRef = ref<HTMLElement | null>(null)

const toggleMenu = () => (menuOpen.value = !menuOpen.value)

const onDocClick = (e: MouseEvent) => {
  const el = menuRef.value
  if (!el) return
  const target = e.target as Node
  if (!el.contains(target)) menuOpen.value = false
}

onMounted(() => document.addEventListener('click', onDocClick))
onMounted(() => window.addEventListener('afterprint', clearFullPrintMode))
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  window.removeEventListener('afterprint', clearFullPrintMode)
})
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
      <RouterLink v-if="!isOkendoResume" to="/" class="text-lg font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
        William's Build Lab
      </RouterLink>
      <span v-else class="text-lg font-bold text-blue-600 dark:text-blue-400">
        William's Build Lab
      </span>

      <nav class="hidden sm:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
        <a href="#experience" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" @click="scrollToSection('experience', $event)">{{ $t('nav.experience') }}</a>
        <a href="#projects" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" @click="scrollToSection('projects', $event)">{{ $t('nav.projects') }}</a>
        <a href="#skills" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" @click="scrollToSection('skills', $event)">{{ $t('nav.skills') }}</a>
      </nav>
      <div class="flex items-center gap-1">
        <button
          class="no-print px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700"
          :aria-label="lang === 'zh' ? 'Switch to English' : '切換為中文'"
          @click="$emit('toggleLang')"
        >
          <span>{{ lang === 'zh' ? 'EN' : '中文' }}</span>
        </button>
        <button
          class="no-print p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :aria-label="isDark ? '切換為淺色模式' : '切換為深色模式'"
          @click="$emit('toggleDark')"
        >
          <FaIcon :icon="isDark ? ['fas', 'sun'] : ['fas', 'moon']" class="w-5 h-5" />
        </button>
        <button
          class="no-print p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :aria-label="$t('common.printResume')"
          @click="handlePrint"
        >
          <FaIcon :icon="['fas', 'print']" class="w-5 h-5" />
        </button>
        <button
          class="no-print p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :aria-label="lang === 'zh' ? '列印完整履歷' : 'Print full resume'"
          :title="lang === 'zh' ? '列印完整履歷' : 'Print full resume'"
          @click="handlePrintFull"
        >
          <FaIcon :icon="['fas', 'file-lines']" class="w-5 h-5" />
        </button>

        <!-- Company selector dropdown (right side) -->
        <div v-if="isLocalhost" class="relative" ref="menuRef">
          <button
            @click="toggleMenu"
            class="no-print ml-2 inline-flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium bg-white/80 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:shadow-sm transition-all"
            :aria-expanded="menuOpen"
            aria-haspopup="true"
          >
            <FaIcon :icon="['fas', 'chevron-down']" class="w-3" />
            <span class="text-xs">{{ lang === 'zh' ? '公司' : 'Company' }}</span>
          </button>

          <div
            v-if="menuOpen"
            class="absolute right-0 mt-2 w-40 bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 overflow-hidden"
          >
            <RouterLink
              to="/"
              class="block px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-gray-800"
              :class="isActive('/') ? 'font-semibold bg-slate-100 dark:bg-gray-800' : ''"
              @click.native="menuOpen = false"
            >
              {{ lang === 'zh' ? '通用版' : 'Default' }}
            </RouterLink>
            <RouterLink
              to="/tsmc"
              class="block px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-gray-800"
              :class="isActive('/tsmc') ? 'font-semibold bg-blue-600 text-white' : ''"
              @click.native="menuOpen = false"
            >
              {{ lang === 'zh' ? '台積電版' : 'TSMC' }}
            </RouterLink>
            <RouterLink
              to="/portfolio"
              class="block px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-gray-800"
              :class="isActive('/portfolio') ? 'font-semibold bg-blue-600 text-white' : ''"
              @click.native="menuOpen = false"
            >
              {{ lang === 'zh' ? '作品集版' : 'Portfolio' }}
            </RouterLink>
            <RouterLink
              to="/okendo"
              class="block px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-gray-800"
              :class="isActive('/okendo') ? 'font-semibold bg-blue-600 text-white' : ''"
              @click.native="menuOpen = false"
            >
              {{ lang === 'zh' ? 'Okendo 版' : 'Okendo' }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
