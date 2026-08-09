<script setup lang="ts">
import { computed } from 'vue'
import type { ExperienceItem, ProjectItem, SkillCategory } from '../../types'
import { experiences as baseExperiences } from '../../data/experience'
import { projects as baseProjects } from '../../data/projects'
import { skillCategories as baseSkills } from '../../data/skills'

const props = withDefaults(defineProps<{
  lang: 'zh' | 'en'
  experiences?: ExperienceItem[]
  projects?: ProjectItem[]
  skillCategories?: SkillCategory[]
  title?: string
  summary?: string
}>(), {
  experiences: () => baseExperiences,
  projects: () => baseProjects,
  skillCategories: () => baseSkills,
  title: '',
  summary: '',
})

const labels = computed(() => props.lang === 'zh'
  ? { summary: '簡介', experience: '完整經歷', projects: '完整專案', skills: '完整技能' }
  : { summary: 'Summary', experience: 'Full Experience', projects: 'Full Projects', skills: 'Full Skills' })

const title = computed(() => props.title || (props.lang === 'zh' ? '軟體工程師' : 'Software Engineer'))
const summary = computed(() => props.summary || (props.lang === 'zh'
  ? '具備跨領域的軟體開發與產品交付經驗，曾參與企業系統、平台服務與數位產品的建置與優化，並在台灣與加拿大的遠端團隊中協作完成從需求到上線的工作。'
  : 'Software engineer with cross-domain product delivery experience, building and improving enterprise systems, platform services, and digital products with distributed teams in Taiwan and Canada.'))
</script>

<template>
  <section class="print-full-only hidden bg-white">
    <div class="print-full-resume">
      <header class="print-full-header">
        <h1>{{ $t('profile.name') }}</h1>
        <p>{{ title }}</p>
        <p>{{ $t('profile.location') }} · snowman12320@gmail.com · 0976-103738</p>
        <p>linkedin.com/in/william-chen-dev · github.com/snowman12320</p>
      </header>

      <section class="print-full-section">
        <h2>{{ labels.summary }}</h2>
        <p>{{ summary }}</p>
      </section>

      <section class="print-full-section">
        <h2>{{ labels.experience }}</h2>
        <article v-for="item in experiences" :key="item.id" class="print-full-entry">
          <div class="print-full-entry-heading">
            <h3>{{ item.position[lang] }} | {{ item.company[lang] }}</h3>
            <span>{{ item.period }}</span>
          </div>
          <p class="print-full-muted">{{ item.location[lang] }}</p>
          <ul>
            <li v-for="bullet in item.bullets[lang]" :key="bullet">{{ bullet }}</li>
          </ul>
          <p><strong>{{ $t('common.techStack') }}:</strong> {{ item.techStack.join(', ') }}</p>
        </article>
      </section>

      <section class="print-full-section">
        <h2>{{ labels.projects }}</h2>
        <article v-for="item in projects" :key="item.id" class="print-full-entry">
          <div class="print-full-entry-heading">
            <h3>{{ item.name[lang] }}</h3>
            <span>{{ item.category[lang] }}</span>
          </div>
          <p>{{ item.detailedDesc[lang] }}</p>
          <p><strong>{{ $t('common.techStack') }}:</strong> {{ item.techStack.join(', ') }}</p>
          <p v-if="item.links.length">
            <strong>{{ lang === 'zh' ? '連結' : 'Links' }}:</strong>
            {{ item.links.map((link) => `${link.label[lang]} (${link.url})`).join(' · ') }}
          </p>
        </article>
      </section>

      <section class="print-full-section">
        <h2>{{ labels.skills }}</h2>
        <div v-for="category in skillCategories" :key="category.id" class="print-full-skill">
          <strong>{{ category.title[lang] }}:</strong> {{ category.skills.join(', ') }}
        </div>
      </section>
    </div>
  </section>
</template>
