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

const toOneLineSummary = (text: string, lang: 'zh' | 'en', maxLength = 130) => {
  const normalized = text.replace(/\s+/g, ' ').trim()
  if (!normalized)
    return ''

  if (lang === 'zh') {
    const firstSentence = normalized.split(/[。！？]/)[0]?.trim() ?? normalized
    const base = firstSentence || normalized
    return base.length > maxLength ? `${base.slice(0, maxLength)}…` : base
  }

  const firstSentence = normalized.split(/[.!?]/)[0]?.trim() ?? normalized
  const base = firstSentence || normalized
  return base.length > maxLength ? `${base.slice(0, maxLength)}…` : base
}

const featuredExperiences = computed(() => experiences)
const featuredProjects = computed(() => projects)
const compactSkills = computed(() => skillCategories.slice(0, 5).map((category) => ({
  title: props.lang === 'zh' ? category.title.zh : category.title.en,
  skills: category.skills.slice(0, 5),
})))

const experienceSummaries = computed(() => featuredExperiences.value.map((item) => {
  const source = item.bullets[props.lang][0] ?? ''
  return {
    id: item.id,
    text: toOneLineSummary(source, props.lang, props.lang === 'zh' ? 80 : 150),
  }
}))

const projectSummaries = computed(() => featuredProjects.value.map((item) => {
  const source = item.shortDesc[props.lang]
  return {
    id: item.id,
    text: toOneLineSummary(source, props.lang, props.lang === 'zh' ? 80 : 150),
  }
}))

const getExperienceSummary = (id: string) => experienceSummaries.value.find(item => item.id === id)?.text ?? ''
const getProjectSummary = (id: string) => projectSummaries.value.find(item => item.id === id)?.text ?? ''
</script>

<template>
  <section class="print-only hidden bg-white print:block print:p-0">
    <div class="print-resume">

      <!-- ── Header ── -->
      <div class="print-resume-header mb-3 border-b-2 border-black pb-2">
        <div class="flex items-start justify-between gap-6">
          <div>
            <h1 class="text-[22px] font-black leading-tight tracking-tight text-black">{{ $t('profile.name') }}</h1>
            <p class="mt-0.5 text-[10px] text-gray-600">{{ $t('profile.title') }}</p>
          </div>
          <div class="text-right text-[10px] leading-[1.6] text-gray-600">
            <p>{{ $t('profile.location') }}</p>
            <p>snowman12320@gmail.com · 0976-103738</p>
            <p>linkedin.com/in/william-chen-dev</p>
          </div>
        </div>
      </div>

      <!-- ── Work Experience ── -->
      <div class="mb-3">
        <h2 class="mb-1.5 border-b border-gray-400 pb-0.5 text-[13px] font-bold text-black">{{ labels.experience }}</h2>
        <div class="space-y-2">
          <div v-for="item in featuredExperiences" :key="item.id">
            <div class="flex items-baseline justify-between gap-2">
              <p class="text-[11px] font-bold text-black">
                {{ lang === 'zh' ? item.position.zh : item.position.en }} | {{ lang === 'zh' ? item.company.zh : item.company.en }}
              </p>
              <p class="shrink-0 text-[10px] text-gray-600">{{ item.period }}</p>
            </div>
            <ul class="mt-0.5 list-disc pl-4 text-[10px] leading-[1.6] text-gray-800">
              <li>{{ getExperienceSummary(item.id) }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ── Projects ── -->
      <div class="mb-3">
        <h2 class="mb-1.5 border-b border-gray-400 pb-0.5 text-[13px] font-bold text-black">{{ labels.projects }}</h2>
        <ul class="list-disc space-y-1 pl-4 text-[10px] leading-[1.6] text-gray-800">
          <li v-for="item in featuredProjects" :key="item.id">
            <span class="font-bold text-black">{{ item.name[lang] }}</span>: {{ getProjectSummary(item.id) }}
          </li>
        </ul>
      </div>

      <!-- ── Skills ── -->
      <div>
        <h2 class="mb-1.5 border-b border-gray-400 pb-0.5 text-[13px] font-bold text-black">{{ labels.skills }}</h2>
        <ul class="list-disc space-y-0.5 pl-4 text-[10px] leading-[1.6] text-gray-800">
          <li v-for="category in compactSkills" :key="category.title">
            <span class="font-bold text-black">{{ category.title }}</span>: {{ category.skills.join(', ') }}
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>
