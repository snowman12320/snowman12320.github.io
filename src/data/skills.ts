import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'vue',
    title: { zh: 'Vue 生態系', en: 'Vue Ecosystem' },
    icon: 'vuejs',
    skills: ['Vue 3', 'Vue 2', 'Composition API', 'Pinia', 'Vue Router', 'Nuxt 3 (SSR/SSG)', 'Vuetify', 'Quasar'],
  },
  {
    id: 'react',
    title: { zh: 'React 生態系', en: 'React Ecosystem' },
    icon: 'react',
    skills: ['React 18', 'Next.js 14 (SSR/SSG)', 'Redux / Context API', 'React Hooks', 'Shadcn UI', 'Ant Design', 'React Native'],
  },
  {
    id: 'lang-style',
    title: { zh: '核心語言 & 樣式', en: 'Languages & Styling' },
    icon: 'code',
    skills: ['JavaScript (ES5+)', 'TypeScript', 'HTML5 / CSS3', 'SCSS', 'Tailwind CSS', 'Bootstrap 5', 'RWD (Grid / Flex)'],
  },
  {
    id: 'backend',
    title: { zh: '後端 & 全端', en: 'Backend & Full-Stack' },
    icon: 'server',
    skills: ['Node.js', 'BFF Architecture', 'RESTful API', 'PHP (Laravel / CodeIgniter)', 'MySQL', 'Firebase', 'Flask'],
  },
  {
    id: 'api',
    title: { zh: '第三方 API 整合', en: 'Third-Party API Integration' },
    icon: 'plug',
    skills: ['LINE LIFF', 'LINE Bot', 'LINE Login', 'LLM API', 'Payuni', 'Keycloak OAuth', 'Google Maps API'],
  },
  {
    id: 'devops',
    title: { zh: '開發維運 & 測試工具', en: 'DevOps & Testing' },
    icon: 'gears',
    skills: ['Git / GitLab / GitHub', 'Docker', 'Jenkins CI/CD', 'AWS', 'Vitest', 'Cypress', 'MSW', 'ESLint', 'Husky'],
  },
]
