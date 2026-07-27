<script setup lang="ts">
import { Languages } from 'lucide-vue-next'
import type { PropType } from 'vue'

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
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
      <a
        href="#"
        class="text-lg font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
      >
        {{ $t('profile.name') }}
      </a>
      <nav class="hidden sm:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
        <a href="#experience" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{{ $t('nav.experience') }}</a>
        <a href="#projects" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{{ $t('nav.projects') }}</a>
        <a href="#skills" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{{ $t('nav.skills') }}</a>
      </nav>
      <div class="flex items-center gap-1">
        <button
          class="no-print px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700 inline-flex items-center gap-1.5"
          :aria-label="lang === 'zh' ? 'Switch to English' : '切換為中文'"
          @click="$emit('toggleLang')"
        >
          <Languages :size="14" />
          <span>{{ lang === 'zh' ? 'EN' : '中文' }}</span>
        </button>
        <button
          class="no-print p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :aria-label="isDark ? '切換為淺色模式' : '切換為深色模式'"
          @click="$emit('toggleDark')"
        >
          <FaIcon :icon="isDark ? ['fas', 'sun'] : ['fas', 'moon']" class="w-5 h-5" />
        </button>
      </div>
    </div>
  </header>
</template>
