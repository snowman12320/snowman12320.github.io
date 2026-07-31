<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import { experiences } from '../../data/experience'
import { projects } from '../../data/projects'
import { skillCategories } from '../../data/skills'

const props = defineProps({
  lang: {
    type: String as PropType<'zh' | 'en'>,
    required: true,
  },
})

const labels = computed(() => props.lang === 'zh'
  ? {
      summary: '簡介',
      experience: '經歷',
      projects: '專案',
      skills: '技能',
      highlight: '核心能力',
    }
  : {
      summary: 'Summary',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      highlight: 'Core strengths',
    })

const featuredExperiences = computed(() => experiences.slice(0, 3))
const featuredProjects = computed(() => projects.slice(0, 3))
const compactSkills = computed(() => skillCategories.map((category) => ({
  title: props.lang === 'zh' ? category.title.zh : category.title.en,
  skills: category.skills.slice(0, 6),
})))
</script>

<template>
  <section class="print-only hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm print:block print:border-0 print:p-0 print:shadow-none">
    <div class="print-resume">
      <header class="mb-6 border-b border-slate-200 pb-4 print:mb-4 print:pb-3">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h1 class="text-2xl font-bold text-slate-900">{{ $t('profile.name') }}</h1>
            <p class="mt-1 text-base font-semibold text-blue-600">{{ $t('profile.title') }}</p>
            <p class="mt-1 text-sm text-slate-600">{{ $t('profile.location') }}</p>
          </div>
          <div class="text-right text-sm text-slate-600">
            <p>snowman12320@gmail.com</p>
            <p>0976-103738</p>
            <p>linkedin.com/in/william-chen-dev</p>
          </div>
        </div>
      </header>

      <div class="mb-5 print:mb-4">
        <h2 class="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{{ labels.summary }}</h2>
        <p class="text-sm leading-6 text-slate-700">{{ $t('profile.summary') }}</p>
      </div>

      <div class="mb-5 print:mb-4">
        <h2 class="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{{ labels.experience }}</h2>
        <div class="space-y-3">
          <div
            v-for="item in featuredExperiences"
            :key="item.id"
            class="rounded-xl border border-slate-200 bg-slate-50/80 p-3 print:border-slate-300"
          >
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-sm font-semibold text-slate-900">{{ lang === 'zh' ? item.position.zh : item.position.en }}</p>
                <p class="text-sm text-blue-700">{{ lang === 'zh' ? item.company.zh : item.company.en }}</p>
              </div>
              <p class="text-xs font-medium text-slate-500">{{ item.period }}</p>
            </div>
            <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li v-for="bullet in item.bullets[lang].slice(0, 2)" :key="bullet">{{ bullet }}</li>
            </ul>
            <div class="mt-2 flex flex-wrap gap-1.5">
              <span v-for="tech in item.techStack.slice(0, 6)" :key="tech" class="rounded-full border border-slate-300 bg-white px-2 py-0.5 text-[11px] text-slate-600">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-5 print:mb-4">
        <h2 class="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{{ labels.projects }}</h2>
        <div class="grid gap-3 md:grid-cols-2 print:grid-cols-2">
          <div
            v-for="item in featuredProjects"
            :key="item.id"
            class="rounded-xl border border-slate-200 bg-white p-3 print:border-slate-300"
          >
            <p class="text-sm font-semibold text-slate-900">{{ item.name[lang] }}</p>
            <p class="mt-1 text-sm text-slate-600">{{ item.shortDesc[lang] }}</p>
            <div class="mt-2 flex flex-wrap gap-1.5">
              <span v-for="tech in item.techStack.slice(0, 4)" :key="tech" class="rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5 text-[11px] text-slate-600">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="print:mb-0">
        <h2 class="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{{ labels.skills }}</h2>
        <div class="grid gap-3 md:grid-cols-2 print:grid-cols-2">
          <div v-for="category in compactSkills" :key="category.title" class="rounded-xl border border-slate-200 bg-slate-50/70 p-3 print:border-slate-300">
            <p class="text-sm font-semibold text-slate-900">{{ category.title }}</p>
            <p class="mt-1 text-sm leading-6 text-slate-700">{{ category.skills.join(' · ') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
