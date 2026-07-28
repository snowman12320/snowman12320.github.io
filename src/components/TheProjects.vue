<script setup lang="ts">
import type { PropType } from 'vue'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard.vue'

defineProps({
  lang: {
    type: String as PropType<'zh' | 'en'>,
    required: true,
  },
})
</script>

<template>
  <section id="projects" class="reveal py-16">
    <h2 class="section-title flex items-center gap-2">
      <FaIcon :icon="['fas', 'folder-open']" class="text-blue-600 text-xl" />
      {{ $t('sections.projects') }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <ProjectCard v-for="item in projects" :key="item.id" :item="item" :lang="lang" />
    </div>
  </section>
</template>
