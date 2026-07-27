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
    <div class="space-y-6">
      <ExperienceItem v-for="item in experiences" :key="item.id" :item="item" :lang="lang" />
    </div>
  </section>
</template>
