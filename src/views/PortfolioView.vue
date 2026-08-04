<script setup lang="ts">
import type { PropType } from 'vue'
import TheProjects from '../components/sections/TheProjects.vue'
import { useReveal } from '../composables/useReveal'

defineProps({
  lang: {
    type: String as PropType<'zh' | 'en'>,
    required: true,
  },
})

useReveal()
</script>

<template>
  <main class="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 pb-20 no-print">
    <section class="reveal py-20 border-b border-gray-100 dark:border-gray-800">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
        {{ lang === 'zh' ? '作品集' : 'Portfolio' }}
      </p>
      <h1 class="mt-3 text-4xl sm:text-6xl font-bold text-gray-900 dark:text-gray-100">
        {{ lang === 'zh' ? '全端作品集' : 'Full-Stack Portfolio' }}
      </h1>
      <p class="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        {{
          lang === 'zh'
            ? '集中展示全端應用、企業系統、即時平台與產品實作，從使用者流程到前後端交付皆涵蓋。'
            : 'Selected full-stack applications, enterprise systems, real-time platforms, and product work from user flows through delivery.'
        }}
      </p>
    </section>

    <section id="services" class="reveal py-16 border-b border-gray-100 dark:border-gray-800">
      <div class="mb-8">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          {{ lang === 'zh' ? '服務項目' : 'Services' }}
        </p>
        <h2 class="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
          {{ lang === 'zh' ? '從需求到上線，交付可用的產品' : 'From requirements to launch, ship a product that works' }}
        </h2>
      </div>
      <div class="grid gap-5 md:grid-cols-3">
        <article
          v-for="service in [
            {
              zh: { title: '全端網站開發', text: '以 Vue、React、Next.js 與 Node.js 建置可維護的前後端系統。' },
              en: { title: 'Full-Stack Development', text: 'Build maintainable frontend and backend systems with Vue, React, Next.js, and Node.js.' },
            },
            {
              zh: { title: '企業系統整合', text: '整合 API、SSO、RBAC、第三方服務與資料庫，改善既有工作流程。' },
              en: { title: 'Business System Integration', text: 'Integrate APIs, SSO, RBAC, third-party services, and databases into existing workflows.' },
            },
            {
              zh: { title: '效能與維運優化', text: '導入 CI/CD、測試、監控與雲端部署，讓產品穩定交付。' },
              en: { title: 'Performance & Delivery', text: 'Add CI/CD, testing, monitoring, and cloud deployment for reliable delivery.' },
            },
          ]"
          :key="service.en.title"
          class="rounded-2xl border border-gray-200 bg-white/80 p-6 dark:border-gray-700 dark:bg-gray-900/70"
        >
          <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100">{{ service[lang].title }}</h3>
          <p class="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{{ service[lang].text }}</p>
        </article>
      </div>
    </section>

    <TheProjects :lang="lang" :image-first="true" />

    <section id="process" class="reveal border-t border-gray-100 py-16 dark:border-gray-800">
      <div class="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            {{ lang === 'zh' ? '合作流程' : 'Process' }}
          </p>
          <h2 class="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
            {{ lang === 'zh' ? '清楚溝通，分階段交付' : 'Clear communication, staged delivery' }}
          </h2>
        </div>
        <div class="grid gap-4 sm:grid-cols-3">
          <div
            v-for="step in [
              { zh: { number: '01', title: '需求釐清' }, en: { number: '01', title: 'Discover' } },
              { zh: { number: '02', title: '設計與開發' }, en: { number: '02', title: 'Build' } },
              { zh: { number: '03', title: '測試與上線' }, en: { number: '03', title: 'Launch' } },
            ]"
            :key="step.en.number"
            class="rounded-xl bg-gray-100 p-5 dark:bg-gray-800"
          >
            <span class="text-sm font-bold text-blue-600 dark:text-blue-400">{{ step[lang].number }}</span>
            <p class="mt-3 font-semibold text-gray-900 dark:text-gray-100">{{ step[lang].title }}</p>
          </div>
        </div>
      </div>
      <div class="mt-12 flex flex-col gap-5 rounded-2xl bg-blue-600 px-6 py-8 text-white sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div>
          <h2 class="text-2xl font-bold">{{ lang === 'zh' ? '有專案想一起完成？' : 'Have a project in mind?' }}</h2>
          <p class="mt-2 text-sm text-blue-100">{{ lang === 'zh' ? '歡迎討論產品需求、技術方案與交付時程。' : 'Let’s discuss the product scope, technical approach, and delivery timeline.' }}</p>
        </div>
        <a href="mailto:snowman12320@gmail.com" class="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50">
          {{ lang === 'zh' ? '聯絡我' : 'Get in touch' }}
        </a>
      </div>
    </section>
  </main>
</template>
