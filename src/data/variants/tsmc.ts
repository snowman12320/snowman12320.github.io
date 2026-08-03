import type { ExperienceItem, SkillCategory } from '../../types'
import { experiences as base } from '../experience'
import { skillCategories as baseSkills } from '../skills'

// ──────────────────────────────────────────────────────────────────────────────
// TSMC Software & DevOps Engineer — tailored resume variant
// Emphasises: cloud-native microservices, CI/CD, SLI/SLO, TypeScript, K8s
// ──────────────────────────────────────────────────────────────────────────────

const overrides: Partial<Record<string, Partial<ExperienceItem>>> = {
  'fun-show': {
    bullets: {
      zh: [
        '以 TypeScript 設計微服務導向的直播控制平台，拆分串流管理、場景控制、即時通知與 Keycloak 認證為獨立服務模組。',
        '建置 Jenkins Pipeline as Code CI/CD，實現每週 8–12 次跨分支自動化部署，並導入 Git Flow + PR review 品質門禁，Bug 率降低 40%。',
        '定義並追蹤 SLI/SLO 量化指標：API 響應時間從 400ms 壓縮至 120ms、頁面載入從 3.2s 優化至 0.8s、支援 5,000+ 並發連線穩定不中斷。',
        '架構服務可觀測性體系，以 SSE 推播實作即時告警通知，控制台操作延遲維持 < 100ms；並透過 Redis 轉發與 Socket.IO 房間分片解決高並發瓶頸。',
        '撰寫 Vitest 單元測試（覆蓋率 82%），以 MSW 建立標準化 API Mock 品質門禁，確保生產環境部署穩定；採用 Docker 容器化交付一致的部署環境。',
      ],
      en: [
        'Designed TypeScript microservices for stream management, scene control, notifications, and Keycloak authentication.',
        'Shipped Jenkins Pipeline as Code with 8–12 automated deployments per week; added Git Flow and PR quality gates to cut bugs by 40%.',
        'Defined SLI/SLO targets and cut API response time from 400ms to 120ms and page load from 3.2s to 0.8s while supporting 5,000+ connections.',
        'Built SSE alerting and service observability; used Redis relay and Socket.IO room sharding to keep console latency below 100ms.',
        'Reached 82% unit-test coverage with Vitest/MSW and containerized services with Docker for repeatable deployments.',
      ],
    },
    techStack: ['TypeScript', 'Vue 3', 'Microservices', 'Jenkins CI/CD', 'Docker', 'Redis', 'Socket.IO', 'SSE', 'Keycloak', 'Vitest', 'MSW'],
  },
  'sun-life': {
    bullets: {
      zh: [
        '以 BFF（Backend For Frontend）架構整合企業 Advisor API，主導 SSO 單一登入與 RBAC 角色型存取控制完整實作，並撰寫詳細技術文件。',
        '維護跨環境 CI/CD 流程（Dev / SIT），管理 PR 合併、部署版本驗證與異常排查（含 commit 與部署版本不符問題），確保跨團隊生產環境穩定。',
        '導入 Umami 行為埋點系統，建立服務使用量 KPI 指標監控，提供數據驅動的效能優化依據。',
        '使用 Jira 追蹤 Ticket，定期向跨職能團隊（SRE / 基礎設施 / PM）彙報進度，推動協作文化與品質流程標準化。',
      ],
      en: [
        'Integrated Advisor APIs through BFF; led SSO and RBAC implementation and documented the access-control model.',
        'Managed Dev/SIT CI/CD, PR workflows, deployment checks, and commit-deployment mismatch resolution.',
        'Added Umami analytics to track service KPIs and guide optimization work.',
        'Tracked delivery in Jira and aligned SRE, Infrastructure, and PM stakeholders.',
      ],
    },
    techStack: ['TypeScript', 'Vue 3', 'BFF Architecture', 'SSO / OIDC', 'RBAC', 'Keycloak', 'CI/CD', 'Umami Analytics', 'Jira', 'SQL'],
  },
  'hengyuan-freelance': {
    bullets: {
      zh: [
        '全端交付醫療系統（vtk.js 3D CT 渲染 < 2s）、線上學習平台（Vimeo API、OAuth 2.0、IP 存取控管）與報價系統，從概念到雲端部署全程自行負責。',
        '設計資料庫 Schema 與 RESTful API 架構，以 Zeabur / Cloudways 雲端平台部署並維護應用程式，導入 GitHub Actions CI/CD 自動化上版流程。',
        '導入 AI 輔助開發（Cursor / Copilot）提升效率 30%，PDF 壓縮減少體積 60%，API 響應從 800ms 優化至 200ms。',
      ],
      en: [
        'Delivered medical systems, learning platforms, and quotation workflows from concept to cloud deployment; kept vtk.js CT rendering under 2s.',
        'Designed database schemas and RESTful APIs; deployed applications on Zeabur and Cloudways with GitHub Actions CI/CD.',
        'Used Cursor/Copilot to improve efficiency by 30%, cut PDF size by 60%, and reduce API response time from 800ms to 200ms.',
      ],
    },
    techStack: ['TypeScript', 'Vue 3', 'Node.js', 'RESTful API', 'OAuth 2.0', 'MySQL', 'GitHub Actions', 'Zeabur', 'vtk.js', 'Vimeo API'],
  },
}

export const tsmcExperiences: ExperienceItem[] = base.map((item) => {
  const override = overrides[item.id]
  if (!override) return item
  return { ...item, ...override }
})

// Skills reordered: DevOps & Cloud → Backend → Testing → Frontend → 3rd-party → AI
const ORDER = ['devops-cloud', 'backend-architecture', 'testing-quality', 'frontend-mobile', 'third-party', 'ai-workflows']

export const tsmcSkillCategories: SkillCategory[] = [
  ...ORDER.map((id) => baseSkills.find((c) => c.id === id)!).filter(Boolean),
  ...baseSkills.filter((c) => !ORDER.includes(c.id)),
]

export const tsmcHero = {
  title: {
    zh: '軟體工程師 & DevOps 工程師',
    en: 'Software & DevOps Engineer',
  },
  summary: {
    zh: '具備 2+ 年雲原生微服務架構、CI/CD 自動化與服務可觀測性（SLI/SLO）實戰經驗，熟練 TypeScript / JavaScript 全端開發。有 Jenkins、GitHub Actions、Docker / K8s 容器化、SSO / RBAC 企業認證整合背景，並在跨國遠端團隊中具備 DevOps 流程制定、服務監控告警與品質管控（測試覆蓋率 82%）的完整交付能力。',
    en: 'Software & DevOps Engineer with 2+ years in cloud-native microservices, CI/CD automation, and SLI/SLO observability. Ships TypeScript/JavaScript systems with Jenkins, GitHub Actions, Docker/K8s, and enterprise SSO/RBAC. Cut API response time to 120ms, page load to 0.8s, and reached 82% unit-test coverage in distributed teams.',
  },
}
