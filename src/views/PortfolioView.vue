<script setup lang="ts">
import { computed, reactive, ref, type PropType } from 'vue'
import TheProjects from '../components/sections/TheProjects.vue'
import { useReveal } from '../composables/useReveal'
import { usePortfolioMotion } from '../composables/usePortfolioMotion'

const props = defineProps({
  lang: {
    type: String as PropType<'zh' | 'en'>,
    required: true,
  },
})

useReveal()
const portfolioRoot = ref<HTMLElement | null>(null)
usePortfolioMotion(portfolioRoot)

const services = [
  {
    icon: 'globe',
    zh: { title: '形象官網', text: '把品牌定位、服務價值與轉換動線整理成清楚、快速的網站。' },
    en: { title: 'Marketing Websites', text: 'Turn your positioning, services, and conversion path into a clear, fast website.' },
  },
  {
    icon: 'cart-shopping',
    zh: { title: '電商與會員系統', text: '從商品、會員、訂單到金流，交付可持續擴充的產品流程。' },
    en: { title: 'Commerce & Membership', text: 'Ship extensible product flows across catalog, accounts, orders, and payments.' },
  },
  {
    icon: 'server',
    zh: { title: '全端企業系統', text: '整合 API、資料庫、權限與第三方服務，減少團隊的手動工作。' },
    en: { title: 'Full-Stack Systems', text: 'Connect APIs, databases, permissions, and third-party services to reduce manual work.' },
  },
  {
    icon: 'gauge-high',
    zh: { title: '效能與維運', text: '改善載入速度、測試、部署與監控，讓產品穩定交付。' },
    en: { title: 'Performance & Delivery', text: 'Improve loading speed, testing, deployment, and monitoring for reliable releases.' },
  },
]

const proofItems = [
  {
    value: '10M+',
    zh: { label: '每日 API 請求規模', text: '參與高流量服務的前後端交付。' },
    en: { label: 'API requests per day', text: 'Delivered frontend and backend work for high-traffic services.' },
  },
  {
    value: '0 → 1',
    zh: { label: '產品建立經驗', text: '從需求、設計到可用版本逐步落地。' },
    en: { label: 'Product builds', text: 'Moved products from requirements and design to usable releases.' },
  },
  {
    value: 'Vue · React',
    zh: { label: '前端技術主力', text: '以 TypeScript 建立可維護的元件與資料流。' },
    en: { label: 'Frontend stack', text: 'Build maintainable components and data flows with TypeScript.' },
  },
  {
    value: 'Full-Stack',
    zh: { label: '交付範圍', text: '涵蓋前端、Node.js、SQL、Docker 與雲端部署。' },
    en: { label: 'Delivery scope', text: 'Cover frontend, Node.js, SQL, Docker, and cloud deployment.' },
  },
]

const processSteps = [
  { number: '01', zh: { title: '需求訪談', text: '釐清目標、使用者、範圍與成功條件。' }, en: { title: 'Discover', text: 'Align on goals, users, scope, and success criteria.' } },
  { number: '02', zh: { title: '方案與報價', text: '拆解里程碑、交付物與時程，確認合作方式。' }, en: { title: 'Scope', text: 'Define milestones, deliverables, timeline, and engagement.' } },
  { number: '03', zh: { title: '設計與開發', text: '以可驗證的階段成果快速推進實作。' }, en: { title: 'Build', text: 'Move quickly with verifiable milestones and working software.' } },
  { number: '04', zh: { title: '測試上線', text: '完成測試、部署與交接，留下可維護的基礎。' }, en: { title: 'Launch', text: 'Test, deploy, and hand over a maintainable foundation.' } },
]

const projectTypes = [
  { value: 'website', zh: '形象官網', en: 'Marketing website' },
  { value: 'ecommerce', zh: '電商或會員系統', en: 'E-commerce or membership' },
  { value: 'business-system', zh: '企業系統', en: 'Business system' },
  { value: 'ui-ux', zh: 'UI/UX 設計與前端', en: 'UI/UX and frontend' },
  { value: 'other', zh: '其他需求', en: 'Other' },
]

const budgetOptions = [
  { value: 'under-50k', zh: 'NT$50,000 以下', en: 'Under NT$50,000' },
  { value: '50k-150k', zh: 'NT$50,000–150,000', en: 'NT$50,000–150,000' },
  { value: '150k-300k', zh: 'NT$150,000–300,000', en: 'NT$150,000–300,000' },
  { value: 'over-300k', zh: 'NT$300,000 以上', en: 'Over NT$300,000' },
  { value: 'unsure', zh: '尚未確定', en: 'Not sure yet' },
]

const form = reactive({
  name: '',
  email: '',
  projectType: '',
  budget: '',
  message: '',
})
const formError = ref('')
const formStatus = ref<'idle' | 'success' | 'error'>('idle')

const localized = computed(() => props.lang)

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const submitInquiry = () => {
  formError.value = ''
  formStatus.value = 'idle'

  if (!form.name.trim() || !form.email.trim() || !form.projectType || !form.message.trim()) {
    formError.value = props.lang === 'zh' ? '請填寫姓名、Email、專案類型與需求描述。' : 'Please complete your name, email, project type, and project brief.'
    return
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    formError.value = props.lang === 'zh' ? '請輸入有效的 Email。' : 'Please enter a valid email address.'
    return
  }

  const type = projectTypes.find((item) => item.value === form.projectType)?.[localized.value] ?? form.projectType
  const budget = budgetOptions.find((item) => item.value === form.budget)?.[localized.value] ?? (props.lang === 'zh' ? '未提供' : 'Not provided')
  const subject = `${props.lang === 'zh' ? '網站專案詢價' : 'Website project inquiry'} - ${form.name.trim()}`
  const body = [
    `${props.lang === 'zh' ? '姓名' : 'Name'}: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
    `${props.lang === 'zh' ? '專案類型' : 'Project type'}: ${type}`,
    `${props.lang === 'zh' ? '預算' : 'Budget'}: ${budget}`,
    '',
    `${props.lang === 'zh' ? '需求描述' : 'Project brief'}:`,
    form.message.trim(),
  ].join('\n')

  try {
    window.location.href = `mailto:snowman12320@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    formStatus.value = 'success'
  } catch {
    formStatus.value = 'error'
  }
}
</script>

<template>
  <main ref="portfolioRoot" class="portfolio-page w-full pb-20 no-print">
    <section class="reveal relative min-h-[calc(100vh-3.5rem)] overflow-hidden border-b border-gray-100 px-[clamp(1.25rem,7vw,8.5rem)] py-20 dark:border-gray-800 sm:py-28">
      <div class="portfolio-hero-copy relative z-10 flex min-h-[calc(100vh-9rem)] max-w-5xl flex-col justify-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          {{ lang === 'zh' ? '網頁設計與全端開發' : 'Web design & full-stack development' }}
        </p>
        <h1 class="mt-5 max-w-4xl text-5xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-7xl">
          {{ lang === 'zh' ? '把想法做成能帶來結果的網站。' : 'Build a website that moves your business forward.' }}
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          {{ lang === 'zh' ? '從定位、介面到前後端開發，交付清楚、快速、可持續維護的數位產品。' : 'From positioning and interface to frontend and backend delivery, build a clear, fast, maintainable digital product.' }}
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <button type="button" class="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950" @click="scrollTo('contact')">
            {{ lang === 'zh' ? '討論你的專案' : 'Start a conversation' }}
          </button>
          <button type="button" class="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-200" @click="scrollTo('projects')">
            {{ lang === 'zh' ? '查看作品' : 'View selected work' }}
          </button>
        </div>
      </div>
      <div class="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" aria-hidden="true" />
    </section>

    <section id="services" class="reveal scroll-mt-20 border-b border-gray-100 px-[clamp(1.25rem,7vw,8.5rem)] py-16 dark:border-gray-800 sm:py-20">
      <div class="mb-8 max-w-3xl">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{{ lang === 'zh' ? '服務' : 'Services' }}</p>
        <h2 class="mt-3 text-3xl font-bold text-gray-950 dark:text-white sm:text-4xl">{{ lang === 'zh' ? '需要設計、開發，還是完整交付？' : 'Need design, development, or the full delivery?' }}</h2>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="service in services" :key="service.icon" class="portfolio-service-card rounded-2xl border border-gray-200 bg-white/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-blue-800">
          <FaIcon :icon="['fas', service.icon]" class="text-xl text-blue-600 dark:text-blue-400" />
          <h3 class="mt-5 text-lg font-bold text-gray-950 dark:text-white">{{ service[lang].title }}</h3>
          <p class="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{{ service[lang].text }}</p>
        </article>
      </div>
    </section>

    <section id="results" class="reveal scroll-mt-20 border-b border-gray-100 px-[clamp(1.25rem,7vw,8.5rem)] py-16 dark:border-gray-800 sm:py-20">
      <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{{ lang === 'zh' ? '為什麼合作' : 'Why work together' }}</p>
          <h2 class="mt-3 text-3xl font-bold text-gray-950 dark:text-white sm:text-4xl">{{ lang === 'zh' ? '用工程思維，縮短從想法到上線的距離。' : 'Use engineering thinking to shorten the path from idea to launch.' }}</h2>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <article v-for="item in proofItems" :key="item.value" class="portfolio-proof-item border-l-2 border-blue-600 pl-4">
            <p class="text-2xl font-bold text-gray-950 dark:text-white">{{ item.value }}</p>
            <p class="mt-1 text-sm font-semibold text-gray-700 dark:text-gray-200">{{ item[lang].label }}</p>
            <p class="mt-1 text-sm leading-5 text-gray-500 dark:text-gray-400">{{ item[lang].text }}</p>
          </article>
        </div>
      </div>
    </section>

    <TheProjects :lang="lang" :image-first="true" />

    <section id="process" class="reveal scroll-mt-20 border-t border-gray-100 px-[clamp(1.25rem,7vw,8.5rem)] py-16 dark:border-gray-800 sm:py-20">
      <div class="max-w-3xl">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{{ lang === 'zh' ? '合作流程' : 'Process' }}</p>
        <h2 class="mt-3 text-3xl font-bold text-gray-950 dark:text-white sm:text-4xl">{{ lang === 'zh' ? '每一步都有清楚的交付物。' : 'Every step has a clear deliverable.' }}</h2>
      </div>
      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="step in processSteps" :key="step.number" class="portfolio-process-step rounded-2xl bg-gray-100 p-6 dark:bg-gray-900">
          <span class="text-sm font-bold text-blue-600 dark:text-blue-400">{{ step.number }}</span>
          <h3 class="mt-5 font-bold text-gray-950 dark:text-white">{{ step[lang].title }}</h3>
          <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{{ step[lang].text }}</p>
        </article>
      </div>
    </section>

    <section id="contact" class="reveal scroll-mt-20 border-t border-gray-100 px-[clamp(1.25rem,7vw,8.5rem)] py-16 dark:border-gray-800 sm:py-20">
      <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{{ lang === 'zh' ? '開始合作' : 'Start a project' }}</p>
          <h2 class="mt-3 text-3xl font-bold text-gray-950 dark:text-white sm:text-4xl">{{ lang === 'zh' ? '告訴我你想解決的問題。' : 'Tell me what you need to solve.' }}</h2>
          <p class="mt-4 leading-7 text-gray-600 dark:text-gray-300">{{ lang === 'zh' ? '提供一些背景，我會依照需求回覆可行的合作方式與下一步。' : 'Share some context and I will reply with a practical engagement path and next step.' }}</p>
          <a href="mailto:snowman12320@gmail.com" class="mt-6 inline-flex text-sm font-semibold text-blue-600 underline-offset-4 hover:underline dark:text-blue-400">snowman12320@gmail.com</a>
        </div>

        <form class="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/60 sm:p-8" @submit.prevent="submitInquiry">
          <div class="grid gap-5 sm:grid-cols-2">
            <label class="text-sm font-semibold text-gray-800 dark:text-gray-200">
              {{ lang === 'zh' ? '姓名' : 'Name' }} *
              <input v-model="form.name" name="name" type="text" required autocomplete="name" class="mt-2 w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2.5 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700" />
            </label>
            <label class="text-sm font-semibold text-gray-800 dark:text-gray-200">
              Email *
              <input v-model="form.email" name="email" type="email" required autocomplete="email" class="mt-2 w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2.5 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700" />
            </label>
            <label class="text-sm font-semibold text-gray-800 dark:text-gray-200">
              {{ lang === 'zh' ? '專案類型' : 'Project type' }} *
              <select v-model="form.projectType" name="projectType" required class="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900">
                <option value="" disabled>{{ lang === 'zh' ? '請選擇' : 'Select one' }}</option>
                <option v-for="item in projectTypes" :key="item.value" :value="item.value">{{ item[lang] }}</option>
              </select>
            </label>
            <label class="text-sm font-semibold text-gray-800 dark:text-gray-200">
              {{ lang === 'zh' ? '預算區間' : 'Budget range' }}
              <select v-model="form.budget" name="budget" class="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900">
                <option value="">{{ lang === 'zh' ? '請選擇' : 'Select one' }}</option>
                <option v-for="item in budgetOptions" :key="item.value" :value="item.value">{{ item[lang] }}</option>
              </select>
            </label>
          </div>
          <label class="mt-5 block text-sm font-semibold text-gray-800 dark:text-gray-200">
            {{ lang === 'zh' ? '需求描述' : 'Project brief' }} *
            <textarea v-model="form.message" name="message" required rows="5" class="mt-2 w-full resize-y rounded-lg border border-gray-300 bg-transparent px-3 py-2.5 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700" :placeholder="lang === 'zh' ? '目前的問題、目標、時程或參考連結…' : 'Your current problem, goal, timeline, or reference links…'" />
          </label>
          <p v-if="formError" role="alert" class="mt-4 text-sm text-red-600 dark:text-red-400">{{ formError }}</p>
          <p v-if="formStatus === 'success'" role="status" class="mt-4 text-sm text-green-600 dark:text-green-400">{{ lang === 'zh' ? '已準備好 Email 草稿，請在郵件軟體中送出。' : 'Your email draft is ready. Send it from your mail client.' }}</p>
          <p v-if="formStatus === 'error'" role="alert" class="mt-4 text-sm text-red-600 dark:text-red-400">{{ lang === 'zh' ? '無法開啟 Email，請直接寄信至 snowman12320@gmail.com。' : 'Could not open your mail client. Email snowman12320@gmail.com directly.' }}</p>
          <button type="submit" class="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 sm:w-auto">
            {{ lang === 'zh' ? '建立詢價信' : 'Create inquiry email' }}
          </button>
        </form>
      </div>
    </section>
  </main>
</template>
