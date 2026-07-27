import type { ExperienceItem } from '../types'

export const experiences: ExperienceItem[] = [
  {
    id: 'hengyuan-freelance',
    position: { zh: '全端工程師', en: 'Full Stack Engineer' },
    company: { zh: '恆遠數位行銷・自由職業', en: 'Hengyuan Digital Marketing · Freelance' },
    location: { zh: '遠端', en: 'Remote' },
    period: '2024/10 — Present',
    bullets: {
      zh: [
        '開發醫療系統功能，包含病歷管理、互動圖表、PDF 壓縮與 vtk.js 3D CT 影像渲染。',
        '設計資料庫 Schema 與 RESTful API，交付可擴展全端應用。',
        '建構線上學習平台並整合 Vimeo API、OAuth、IP 存取控制。',
        '部署與維運於 Zeabur、Cloudways，持續處理維護與流程優化。',
      ],
      en: [
        'Built medical system features including patient records, charting, PDF compression, and vtk.js 3D CT rendering.',
        'Designed database schema and RESTful APIs for scalable full-stack delivery.',
        'Developed modular learning platform with Vimeo API, OAuth, and IP-based access control.',
        'Deployed and maintained applications on Zeabur and Cloudways.',
      ],
    },
    techStack: ['Vue 3', 'Node.js', 'RESTful API', 'vtk.js', 'Vimeo API', 'OAuth', 'MySQL', 'Zeabur', 'Cloudways'],
  },
  {
    id: 'fun-show',
    position: { zh: '軟體工程師', en: 'Software Engineer' },
    company: { zh: '玩藝國際股份有限公司（Fun Show）', en: 'Fun Show International Co., Ltd.' },
    location: { zh: '台灣・臺南市（遠端）', en: 'Tainan, Taiwan' },
    period: '2024/02 — 2026/08',
    bullets: {
      zh: [
        '開發直播控制平台，整合即時串流、場景管理、連播 UI 與 OBS。',
        '整合 Keycloak 與 Payuni，完成訂閱方案信用卡交易流程。',
        '以 SSE 實作即時通知與 Quasar 無限捲動預覽。',
        '建置 Jenkins CI/CD 並導入 MSW + 單元測試流程。',
      ],
      en: [
        'Built a live broadcasting control platform with real-time streaming, scene management, and OBS integration.',
        'Integrated Keycloak auth and Payuni payment flow for subscriptions.',
        'Implemented real-time notifications using SSE and infinite-scroll preview with Quasar.',
        'Set up Jenkins CI/CD and streamlined API testing with MSW.',
      ],
    },
    techStack: ['Vue 3', 'Quasar Framework', 'TypeScript', 'Keycloak', 'SSE', 'OBS Integration', 'Jenkins CI/CD', 'MSW', 'Vitest'],
  },
  {
    id: 'sun-life',
    position: { zh: '全端工程師', en: 'Full Stack Engineer' },
    company: { zh: '永明金融（Sun Life）', en: 'Sun Life Financial' },
    location: { zh: '加拿大（遠端）', en: 'Canada (Remote)' },
    period: '2025/10 — 2026/04',
    bullets: {
      zh: [
        '開發 Sun Life 顧問入口，透過 BFF 串接 Advisor API。',
        '處理 SSO、重導向與 RBAC 權限控制。',
        '撰寫 SQL 初始化腳本並實作 Umami Action Log。',
        '管理 Dev/SIT 跨環境 CI/CD 部署。',
      ],
      en: [
        'Developed Sun Life Advisor Portal and integrated APIs via BFF architecture.',
        'Handled SSO, redirect management, and RBAC permissions.',
        'Implemented SQL bootstrap scripts and Umami action logging.',
        'Managed cross-environment CI/CD for Dev and SIT.',
      ],
    },
    techStack: ['Next.js', 'TypeScript', 'BFF Architecture', 'SSO / RBAC', 'SQL', 'Umami Analytics', 'Jira', 'CI/CD'],
  },
  {
    id: 'ithome-ironman',
    position: { zh: '鐵人賽系列文章作者', en: 'Ironman Series Author' },
    company: { zh: '個人職涯訓練・職涯空檔', en: 'Personal Career Development · Career Break' },
    location: { zh: '遠端', en: 'Remote' },
    period: '2025/07 — 2025/09',
    bullets: {
      zh: [
        '完成 iThome 鐵人賽 31 天 Supabase 全端技術專欄。',
        '以 Next.js + TypeScript + Supabase 實作即時排隊與聊天室系統。',
        '整合 Twilio SMS、Resend、Google Maps API 與 GitHub Actions 自動部署。',
      ],
      en: [
        'Authored a 31-day iThome Ironman series focused on Supabase full-stack development.',
        'Built a real-time queuing and chat application with Next.js, TypeScript, and Supabase.',
        'Integrated Twilio SMS, Resend, Google Maps API, and GitHub Actions deployment.',
      ],
    },
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Twilio SMS', 'Resend', 'Google Maps API', 'GitHub Actions'],
    links: [
      {
        label: { zh: '系列文章完結篇', en: 'Article Final Chapter' },
        url: 'https://ithelp.ithome.com.tw/users/20147822/ironman/8756',
        icon: 'external',
      },
    ],
    gallery: {
      id: 'ironman',
      images: [
        {
          src: '/images/ironman-supabase.png',
          description: 'iThome 鐵人賽 Supabase 系列 — Google 搜尋收錄截圖',
        },
        {
          src: '/images/ironman-article-day30.png',
          description: '第三十關 — 來企排隊：Supabase CLI 部署上線完整指南（Day 30）',
        },
      ],
    },
  },
  {
    id: 'digital-factor',
    position: { zh: '全端工程師', en: 'Full Stack Engineer' },
    company: { zh: '數位因子網路科技有限公司', en: 'Digital Factor Network Technology' },
    location: { zh: '台灣・臺南市（遠端）', en: 'Tainan, Taiwan' },
    period: '2024/02 — 2024/07',
    bullets: {
      zh: [
        '基於 LINE LIFF 框架開發電商後台系統。',
        '整合 LINE Bot、LINE Login、LINE Notify 建立訂單管理流程。',
        '以 GitHub 任務管理與 tagging 落地 CI/CD。',
      ],
      en: [
        'Developed e-commerce backend systems on LINE LIFF.',
        'Integrated LINE Bot, LINE Login, and LINE Notify for order workflows.',
        'Used GitHub task management and tagging for CI/CD.',
      ],
    },
    techStack: ['React', 'TypeScript', 'LINE LIFF', 'LINE Bot', 'LINE Login', 'LINE Notify', 'GitHub CI/CD'],
  },
  {
    id: 'ncku',
    position: { zh: '前端工程師', en: 'Front-End Engineer' },
    company: { zh: '國立成功大學', en: 'National Cheng Kung University (NCKU)' },
    location: { zh: '台灣・臺南市', en: 'Tainan, Taiwan' },
    period: '2023/09 — 2024/02',
    bullets: {
      zh: [
        '開發與維護校內多個系統：食登2.0、慈濟報表、客服與資產帳號系統。',
        '跨前後端協作，整合表單、報表與操作流程，提升作業效率。',
        '同時維護 Vue 2 / Vue 3 系統並推動模組化重構。',
      ],
      en: [
        'Built and maintained internal university systems including forms and reporting tools.',
        'Improved workflow efficiency through front-end/back-end collaboration.',
        'Maintained both Vue 2 and Vue 3 codebases with modular refactoring.',
      ],
    },
    techStack: ['Vue 2', 'Vue 3', 'Vuex', 'Pinia', 'PHP', 'Docker', 'HeidiSQL', 'XAMPP', 'RESTful API'],
  },
  {
    id: 'tw-domain',
    position: { zh: '前端工程師', en: 'Front-End Engineer' },
    company: { zh: '台灣國際網域', en: 'Taiwan International Domain' },
    location: { zh: '台灣・嘉義市', en: 'Chiayi, Taiwan' },
    period: '2022/11 — 2023/10',
    bullets: {
      zh: [
        '使用 Vue Options API 開發多款電商與品牌官網（SPA/CSR）。',
        '串接 RESTful API，搭配 Webpack、NPM、ESLint 維持品質。',
        '運用 Flex/Grid + RWD 與 Tailwind/Bootstrap 完成跨平台介面。',
      ],
      en: [
        'Built multiple SPA/CSR websites with Vue Options API.',
        'Integrated RESTful APIs and maintained code quality with Webpack and ESLint.',
        'Delivered responsive interfaces with Flex/Grid and Tailwind/Bootstrap.',
      ],
    },
    techStack: ['Vue 2/3', 'Options API', 'Vue Router', 'Pinia', 'Tailwind CSS 3', 'Bootstrap 5', 'SCSS', 'Webpack', 'ESLint'],
  },
  {
    id: 'one-cube',
    position: { zh: '前端工程師', en: 'Front-End Engineer' },
    company: { zh: '壹立方數位科技', en: '1Cube Digital Technology' },
    location: { zh: '台灣・臺南市', en: 'Tainan, Taiwan' },
    period: '2022/07 — 2022/09',
    bullets: {
      zh: [
        '維護大型電商舊專案並開發資料視覺化新專案。',
        '以 PHP（Laravel / CodeIgniter）與 Vue 完成 API 與整合。',
        '優化 POS CRUD、購物車金流與後台權限管理。',
      ],
      en: [
        'Maintained legacy e-commerce systems and developed new visualization projects.',
        'Implemented APIs and integration with PHP (Laravel/CodeIgniter) and Vue.',
        'Optimized POS CRUD, payment flows, and permission management.',
      ],
    },
    techStack: ['Vue.js', 'PHP', 'Laravel', 'CodeIgniter', 'MySQL', 'SMTP', 'Data Visualization'],
  },
]
