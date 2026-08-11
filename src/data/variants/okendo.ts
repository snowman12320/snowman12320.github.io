import type { ExperienceItem, ProjectItem, SkillCategory } from '../../types'
import { experiences as baseExperiences } from '../experience'
import { projects as baseProjects } from '../projects'
import { skillCategories as baseSkills } from '../skills'

// Okendo Senior Frontend Engineer — tailored resume variant.
// Emphasises TypeScript, Vue/React delivery, tested frontend systems, and async ownership.
const experienceOverrides: Partial<Record<string, Partial<ExperienceItem>>> = {
  'fun-show': {
    bullets: {
      zh: [
        '以 TypeScript 與 Vue 3 建置直播控制平台，拆分場景管理、媒體預覽、即時通知與訂閱流程。',
        '建立 45 個模組化元件與 32 個可複用 Composables，支援直播頁、導播控制台與會員中心等產品介面。',
        '透過 WebSocket、SSE、Redis 與 Socket.IO 房間分片處理即時狀態同步，支援 5,000+ 並發連線。',
        '以 Vitest、Vue Test Utils 與 MSW 驗證核心流程；Jenkins CI/CD 每週自動部署 8–12 次，Bug 率降低 40%。',
        '與後端、產品及設計協作，整合 Keycloak/RBAC 與 Payuni 訂閱付款，將 API 平均響應時間從 400ms 降至 120ms。',
      ],
      en: [
        'Built a TypeScript/Vue 3 streaming control platform across scene management, media previews, real-time alerts, and subscription flows.',
        'Designed 45 modular components and 32 reusable Composables for live pages, broadcast controls, and member workflows.',
        'Implemented WebSocket/SSE state sync with Redis relay and Socket.IO room sharding to support 5,000+ concurrent connections.',
        'Validated core flows with Vitest, Vue Test Utils, and MSW; automated 8–12 Jenkins deployments per week and cut bugs by 40%.',
        'Partnered with backend, product, and design to ship Keycloak/RBAC and Payuni subscription flows; reduced average API latency from 400ms to 120ms.',
      ],
    },
    techStack: ['TypeScript', 'Vue 3', 'React Patterns', 'WebSocket', 'SSE', 'Redis', 'Keycloak / RBAC', 'Vitest', 'MSW', 'Jenkins CI/CD'],
  },
  'sun-life': {
    bullets: {
      zh: [
        '在加拿大遠端團隊中以 TypeScript 建置 Advisor Portal 表格、載入狀態與響應式元件，透過 BFF 串接企業 API。',
        '主導 SSO、角色配置與 RBAC 存取控制，撰寫技術文件並與跨職能團隊非同步協作完成交付。',
        '開發 Action Log 後台功能、初始 SQL 建置與 Umami analytics，讓產品團隊能追蹤使用行為與服務指標。',
        '管理 Dev/SIT PR、部署驗證與 Jira 交付流程，主動排查 API 連線與版本不一致問題。',
      ],
      en: [
        'Built TypeScript Advisor Portal tables, loading states, and responsive components; integrated enterprise APIs through a BFF.',
        'Owned SSO, role provisioning, and RBAC access control; documented decisions and collaborated asynchronously with a distributed team.',
        'Shipped Action Log admin features, initial SQL setup, and Umami analytics to support product usage insights.',
        'Managed Dev/SIT PRs, deployment verification, and Jira delivery; independently resolved API connectivity and version-mismatch issues.',
      ],
    },
    techStack: ['TypeScript', 'Next.js', 'BFF', 'SSO / RBAC', 'SQL', 'Umami', 'Jira', 'GitHub Actions', 'CI/CD'],
  },
  'hengyuan-freelance': {
    bullets: {
      zh: [
        '從需求拆解、Schema 與 API 設計、前端開發、測試到雲端部署，獨立交付醫療、學習與報價等全端產品。',
        '以 Vue 3、TypeScript、Node.js 與 RESTful API 建立可維護的模組化前端與服務流程。',
        '導入 GitHub Actions CI/CD、OAuth 與 IP 存取控制；API 響應從 800ms 降至 200ms，PDF 體積減少 60%。',
      ],
      en: [
        'Owned requirements, schema/API design, frontend delivery, testing, and cloud deployment for medical, learning, and quotation products.',
        'Built maintainable Vue 3/TypeScript interfaces and Node.js REST APIs with reusable modules and clear data flows.',
        'Added GitHub Actions CI/CD, OAuth, and IP access controls; reduced API response time from 800ms to 200ms and PDF size by 60%.',
      ],
    },
    techStack: ['TypeScript', 'Vue 3', 'Node.js', 'RESTful API', 'OAuth 2.0', 'MySQL', 'GitHub Actions', 'CI/CD', 'Zeabur'],
  },
}

export const okendoExperiences: ExperienceItem[] = baseExperiences.map((item) => {
  const override = experienceOverrides[item.id]
  return override ? { ...item, ...override } : item
})

const projectOverrides: Record<string, Partial<ProjectItem>> = {
  'sun-life-portal': {
    shortDesc: {
      zh: '企業 Advisor Portal 前端與 BFF 整合，涵蓋表格互動、SSO/RBAC 與跨環境交付。',
      en: 'Enterprise Advisor Portal | TypeScript UI, BFF API integration, SSO/RBAC, and async delivery.',
    },
    detailedDesc: {
      zh: '以 TypeScript 建置表格、載入狀態與響應式元件，透過 BFF 整合 Advisor API；主導 SSO、角色配置與 RBAC，並交付 Action Log、SQL 初始化與 Umami analytics。',
      en: 'Built TypeScript tables, loading states, and responsive components; integrated Advisor APIs through a BFF. Owned SSO role provisioning and RBAC, then shipped Action Log, SQL initialization, and Umami analytics across Dev/SIT.',
    },
    techStack: ['TypeScript', 'Next.js', 'BFF', 'SSO / RBAC', 'SQL', 'Umami', 'Jira', 'CI/CD'],
  },
  'dating-platform': {
    shortDesc: {
      zh: '以 TypeScript 建置 AI 配對與即時聊天平台，涵蓋 SEO、CI/CD 與完整前後端交付。',
      en: 'TypeScript full-stack platform | AI matchmaking, real-time messaging, SEO, and CI/CD.',
    },
    detailedDesc: {
      zh: '以 Nuxt 3、TypeScript、Express 與 MongoDB 建置響應式平台，整合 JWT、Socket.io 與 Gemini API；透過 GitHub Actions、Vercel 與 Zeabur 完成自動部署及 SEO。',
      en: 'Built a Nuxt 3/TypeScript platform with Express and MongoDB. Shipped JWT auth, Gemini matchmaking, Socket.io messaging, structured SEO, and GitHub Actions deployment to Vercel and Zeabur.',
    },
  },
  'equipment-rental-system': {
    shortDesc: {
      zh: 'React + Node.js 檔期與庫存平台，將複雜排單邏輯轉為可視化、可測量的產品流程。',
      en: 'React + Node.js scheduling platform | Availability modeling, conflict detection, and performance optimization.',
    },
    detailedDesc: {
      zh: '以 React + Node.js 取代 Excel 排單，建立器材×日期視覺化表格與即時可用量引擎；重構線性演算法與索引查詢，將千筆查詢從 30 秒以上壓縮至秒級。',
      en: 'Replaced Excel scheduling with a React + Node.js equipment-by-date grid and availability engine. Modeled maintenance, bookings, and outsourced inventory, then refactored indexed queries to cut 1,000-row searches from 30+ seconds to sub-second.',
    },
  },
}

const preferredProjectOrder = [
  'sun-life-portal',
  'dating-platform',
  'equipment-rental-system',
  'recruitment-platform-design',
  'wan-yi-project',
  'chat-platform',
]

export const okendoProjects: ProjectItem[] = preferredProjectOrder
  .map((id) => baseProjects.find((project) => project.id === id))
  .filter((project): project is ProjectItem => Boolean(project))
  .map((project) => {
    const override = projectOverrides[project.id]
    return override ? { ...project, ...override } : project
  })

const preferredSkillOrder = [
  'frontend-mobile',
  'testing-quality',
  'backend-architecture',
  'devops-cloud',
  'third-party',
  'ai-workflows',
]

export const okendoSkillCategories: SkillCategory[] = preferredSkillOrder
  .map((id) => baseSkills.find((category) => category.id === id))
  .filter((category): category is SkillCategory => Boolean(category))

export const okendoHero = {
  title: {
    zh: '資深前端軟體工程師',
    en: 'Senior Frontend Software Engineer',
  },
  summary: {
    zh: '以 TypeScript 為核心的前端／全端工程師，具備 React、Vue 與 Next.js 生產環境交付經驗。曾在台灣與加拿大分散式團隊中，從需求拆解、元件與 API 設計、測試到部署維護端到端負責；熟悉即時互動、BFF、SSO/RBAC、CI/CD 與效能優化，能快速跨框架協作並以非同步溝通推進交付。',
    en: 'TypeScript-focused frontend/full-stack engineer with production experience across React, Vue, and Next.js. Owns delivery from problem breakdown and component/API design through testing, deployment, and production support. Ships real-time interfaces, BFF integrations, SSO/RBAC, CI/CD, and performance improvements with distributed teams and async communication; ramps quickly across frameworks.',
  },
}
