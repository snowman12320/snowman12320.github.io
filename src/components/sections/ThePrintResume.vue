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

const featuredExperiences = computed(() => experiences)
const featuredProjects = computed(() => projects)
const compactSkills = computed(() => skillCategories.map((category) => ({
  title: props.lang === 'zh' ? category.title.zh : category.title.en,
  skills: category.skills.slice(0, 5),
})))

const getExpBullets = (item: (typeof experiences)[0]) =>
  item.printBullets?.[props.lang] ?? item.bullets[props.lang].slice(0, 2)
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
            <p><a href="https://snowman12320.github.io/#/">snowman12320.github.io</a></p>
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
              <li v-for="bullet in getExpBullets(item)" :key="bullet">{{ bullet }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ── Projects ── -->
      <div class="mb-3">
        <h2 class="mb-1.5 border-b border-gray-400 pb-0.5 text-[13px] font-bold text-black">{{ labels.projects }}</h2>
        <ul class="list-disc space-y-1 pl-4 text-[10px] leading-[1.6] text-gray-800">
          <li v-for="item in featuredProjects" :key="item.id">
            <span class="font-bold text-black">{{ item.name[lang] }}</span>: {{ item.shortDesc[lang] }}
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
