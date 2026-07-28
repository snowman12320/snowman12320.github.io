<script setup lang="ts">
import type { PropType } from 'vue'
import { experiences } from '../data/experience'
import ExperienceItem from './ExperienceItem.vue'

defineProps({
  lang: {
    type: String as PropType<'zh' | 'en'>,
    required: true,
  },
})
</script>

<template>
  <section id="experience" class="reveal py-16 border-b border-gray-100 dark:border-gray-800">
    <h2 class="section-title flex items-center gap-2">
      <FaIcon :icon="['fas', 'briefcase']" class="text-blue-600 text-xl" />
      {{ $t('nav.experience') }}
    </h2>
    <div
      class="relative space-y-4 sm:pl-8 before:hidden sm:before:block before:absolute before:left-[7px] before:top-3 before:bottom-3 before:w-0.5 before:bg-[repeating-linear-gradient(to_bottom,theme(colors.gray.300)_0,theme(colors.gray.300)_6px,transparent_6px,transparent_12px)] dark:before:bg-[repeating-linear-gradient(to_bottom,theme(colors.gray.700)_0,theme(colors.gray.700)_6px,transparent_6px,transparent_12px)]"
    >
      <ExperienceItem v-for="item in experiences" :key="item.id" :item="item" :lang="lang" />
    </div>
  </section>
</template>
