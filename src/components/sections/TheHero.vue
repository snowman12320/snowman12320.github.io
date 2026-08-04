<script setup lang="ts">
import type { PropType } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  lang: {
    type: String as PropType<'zh' | 'en'>,
    default: null,
  },
  titleOverride: {
    type: String as PropType<string | null>,
    default: null,
  },
  summaryOverride: {
    type: String as PropType<string | null>,
    default: null,
  },
})

const { t } = useI18n()
</script>

<template>
  <section id="hero" class="reveal border-b border-gray-100 py-10 dark:border-gray-800 sm:py-16">
    <div class="flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-center sm:justify-center">
      <div class="flex w-fit max-w-full min-w-0 items-start justify-center gap-4 sm:gap-5">
        <img
          src="/images/avatar.png"
          alt="陳威良 William 大頭照"
          class="h-20 w-20 shrink-0 rounded-full border-2 border-gray-200 object-cover object-top shadow-sm dark:border-gray-700 sm:h-24 sm:w-24"
        />
        <div class="min-w-0 flex-1">
          <h1 class="wrap-break-word text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl">
            {{ t('profile.name') }}
          </h1>
          <p class="mt-2 flex items-center gap-2 text-lg font-medium text-blue-600 dark:text-blue-400 sm:text-xl">
            <FaIcon :icon="['fas', 'laptop-code']" class="text-lg" />
            {{ titleOverride ?? t('profile.title') }}
          </p>
          <p class="mt-2 flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500">
            <FaIcon :icon="['fas', 'location-dot']" />
            {{ t('profile.location') }}
          </p>
          <p class="mt-4 hidden max-w-full wrap-break-word leading-relaxed text-gray-600 dark:text-gray-300 sm:block">
            {{ summaryOverride ?? t('profile.summary') }}
          </p>
        </div>
      </div>
    </div>
    <p class="mt-8 w-full wrap-break-word text-center text-sm leading-relaxed text-gray-600 indent-[2em] dark:text-gray-300 sm:hidden">
      {{ summaryOverride ?? t('profile.summary') }}
    </p>
    <div class="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600 dark:text-gray-400 justify-center">
      <a href="mailto:snowman12320@gmail.com" class="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        <FaIcon :icon="['fas', 'envelope']" class="w-4 text-center" />
        snowman12320@gmail.com
      </a>
      <a href="tel:+886976103738" class="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        <FaIcon :icon="['fas', 'phone']" class="w-4 text-center" />
        0976103738
      </a>
      <a href="https://www.linkedin.com/in/william-chen-dev/" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        <FaIcon :icon="['fab', 'linkedin']" class="w-4 text-center" />
        william-chen-dev
      </a>
      <a href="https://github.com/snowman12320" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        <FaIcon :icon="['fab', 'github']" class="w-4 text-center" />
        snowman12320
      </a>
    </div>
  </section>
</template>
