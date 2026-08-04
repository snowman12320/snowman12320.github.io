<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, type PropType } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  lang: { type: String as PropType<'zh' | 'en'>, required: true },
  isDark: { type: Boolean, required: true },
})

defineEmits<{ toggleLang: []; toggleDark: [] }>()

const menuOpen = ref(false)
const menuRef = ref<HTMLElement | null>(null)
const isLocalhost = computed(() => ['localhost', '127.0.0.1'].includes(window.location.hostname))
const handlePrint = () => window.print()

const scrollToSection = (id: string, event: MouseEvent) => {
  event.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const onDocClick = (event: MouseEvent) => {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) menuOpen.value = false
}

onMounted(() => document.addEventListener('click', onDocClick))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick))
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
    <div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-12">
      <RouterLink to="/" class="text-lg font-bold text-blue-600 dark:text-blue-400">{{ $t('profile.name') }}</RouterLink>
      <nav class="hidden items-center gap-6 text-sm text-gray-600 dark:text-gray-400 sm:flex">
        <a href="#services" @click="scrollToSection('services', $event)">{{ lang === 'zh' ? '服務' : 'Services' }}</a>
        <a href="#results" @click="scrollToSection('results', $event)">{{ lang === 'zh' ? '優勢' : 'Why me' }}</a>
        <a href="#projects" @click="scrollToSection('projects', $event)">{{ lang === 'zh' ? '作品' : 'Work' }}</a>
        <a href="#process" @click="scrollToSection('process', $event)">{{ lang === 'zh' ? '流程' : 'Process' }}</a>
        <a href="#contact" class="font-semibold text-blue-600 dark:text-blue-400" @click="scrollToSection('contact', $event)">{{ lang === 'zh' ? '詢價' : 'Contact' }}</a>
      </nav>
      <div class="flex items-center gap-1">
        <button class="no-print rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-semibold text-gray-500 dark:border-gray-700 dark:text-gray-400" @click="$emit('toggleLang')">
          {{ lang === 'zh' ? 'EN' : '中文' }}
        </button>
        <button class="no-print rounded-lg p-2 text-gray-500 dark:text-gray-400" @click="$emit('toggleDark')" :aria-label="isDark ? '切換為淺色模式' : '切換為深色模式'">
          <FaIcon :icon="isDark ? ['fas', 'sun'] : ['fas', 'moon']" class="h-5 w-5" />
        </button>
        <button class="no-print rounded-lg p-2 text-gray-500 dark:text-gray-400" @click="handlePrint" :aria-label="$t('common.printResume')">
          <FaIcon :icon="['fas', 'print']" class="h-5 w-5" />
        </button>
        <div v-if="isLocalhost" ref="menuRef" class="relative ml-2">
          <button class="no-print inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1 text-sm dark:border-gray-700" @click="menuOpen = !menuOpen">
            <FaIcon :icon="['fas', 'chevron-down']" class="w-3" />
            <span class="text-xs">{{ lang === 'zh' ? '公司' : 'Company' }}</span>
          </button>
          <div v-if="menuOpen" class="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
            <RouterLink to="/" class="block px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800" @click="menuOpen = false">{{ lang === 'zh' ? '通用版' : 'Default' }}</RouterLink>
            <RouterLink to="/tsmc" class="block px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800" @click="menuOpen = false">{{ lang === 'zh' ? '台積電版' : 'TSMC' }}</RouterLink>
            <RouterLink to="/portfolio" class="block bg-blue-600 px-3 py-2 text-sm font-semibold text-white" @click="menuOpen = false">{{ lang === 'zh' ? '作品集版' : 'Portfolio' }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
