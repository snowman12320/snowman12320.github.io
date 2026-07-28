import type { ExperienceItem } from '../types'

export const experiences: ExperienceItem[] = [
  {
    id: 'hengyuan-freelance',
    position: { zh: '全端工程師', en: 'Full Stack Engineer' },
    company: { zh: '恆遠數位行銷・自由職業', en: 'Hengyuan Digital Marketing · Freelance' },
    location: { zh: '遠端', en: 'Remote' },
    period: '2024/10 — Present (1y 10m)',
    bullets: {
      zh: [
        '開發醫療系統功能，涵蓋病患病歷管理、互動式圖表、PDF 壓縮，以及使用 vtk.js 實作 3D CT 影像渲染。',
        '設計資料庫 Schema 與 RESTful API 架構，從概念到部署交付可擴展的全端網頁應用程式。',
        '建構模組化線上學習平台，整合 Vimeo API 進行視訊串流、OAuth 第三方認證及 IP 存取控制。',
        '於 Zeabur 與 Cloudways 等雲端基礎設施平台上部署與維護網頁應用程式。',
        '處理系統維護、Bug 修復與報價／帳款工作流程邏輯，並善用 AI 輔助提升開發效率。',
      ],
      en: [
        'Develop medical system features, including patient record management, interactive charts, PDF compression, and 3D CT scan rendering using vtk.js.',
        'Design database schemas and RESTful API architectures to deliver scalable full-stack web applications from concept to deployment.',
        'Build modular online learning platforms, integrating Vimeo API for video streaming, OAuth for third-party authentication, and IP-based access control.',
        'Deploy and maintain web applications across cloud infrastructure platforms, including Zeabur and Cloudways.',
        'Manage system maintenance, bug fixes, and quote/billing workflow logic while leveraging AI-assisted prompting to boost development productivity.',
      ],
    },
    techStack: ['Vue 3', 'Node.js', 'RESTful API', 'vtk.js', 'Vimeo API', 'OAuth', 'MySQL', 'Zeabur', 'Cloudways'],
  },
  {
    id: 'fun-show',
    position: { zh: '軟體工程師', en: 'Software Engineer' },
    company: { zh: '玩藝國際股份有限公司（Fun Show）', en: 'Fun Show International Co., Ltd.' },
    location: { zh: '台灣・臺南市（遠端）', en: 'Tainan, Taiwan' },
    period: '2024/02 — 2026/08 (2y 7m)',
    bullets: {
      zh: [
        '開發具備即時串流、場景管理、連播 UI 與 OBS 整合的直播控制平台。',
        '整合 Keycloak 認證與 Payuni 金流，實現訂閱方案的信用卡安全交易。',
        '透過 Server-Sent Events（SSE）實作即時通知，並以 Quasar Framework 開發無限捲動預覽元件。',
        '建立 Jenkins 自動化 CI/CD 建置管線，管理跨分支的生產環境部署。',
        '撰寫單元測試，並以 Mock Service Worker（MSW）簡化 RESTful API 測試流程。',
      ],
      en: [
        'Develop a live broadcasting platform featuring real-time streaming, scenes management, joint-streaming UI, and OBS integration.',
        'Integrate Keycloak for authentication and Payuni payment gateways to secure credit card processing for subscription plans.',
        'Implement Server-Sent Events (SSE) for real-time notifications and infinite scroll preview components using Quasar Framework.',
        'Set up automated CI/CD build pipelines with Jenkins and manage cross-branch deployments for production environments.',
        'Write unit tests and leverage Mock Service Worker (MSW) to streamline RESTful API testing.',
      ],
    },
    techStack: ['Vue 3', 'Quasar Framework', 'TypeScript', 'Keycloak', 'SSE', 'OBS Integration', 'Jenkins CI/CD', 'MSW', 'Vitest'],
  },
  {
    id: 'sun-life',
    position: { zh: '全端工程師', en: 'Full Stack Engineer' },
    company: { zh: '永明金融（Sun Life）', en: 'Sun Life Financial' },
    location: { zh: '加拿大（遠端）', en: 'Canada (Remote)' },
    period: '2025/10 — 2026/04 (7m)',
    bullets: {
      zh: [
        '開發與維護 Sun Life 顧問入口網站，建構響應式 UI 元件並透過 BFF 架構串接 Advisor API。',
        '處理單一登入（SSO）認證流程，管理登入重導向與角色權限控制（RBAC）。',
        '設計並執行後台管理功能，撰寫初始資料庫建置的 SQL 腳本，並實作 Umami 分析追蹤的 Action Log。',
        '管理跨環境 CI/CD 工作流程，處理 Dev 與 SIT 環境的部署與整合問題。',
      ],
      en: [
        'Develop and maintain the Sun Life Advisor Portal, building responsive UI components and integrating Advisor APIs via BFF architecture.',
        'Handle Single Sign-On (SSO) authentication workflows, managing login redirection URLs and role-based access control.',
        'Design and execute backend administrative features, writing SQL scripts for initial database setups and implementing Action Logs with Umami analytics.',
        'Manage cross-environment CI/CD workflows and deployments across Dev and SIT environments.',
      ],
    },
    techStack: ['Next.js', 'TypeScript', 'BFF Architecture', 'SSO / RBAC', 'SQL', 'Umami Analytics', 'Jira', 'CI/CD'],
  },
  {
    id: 'ithome-ironman',
    position: { zh: '鐵人賽系列文章作者', en: 'Ironman Series Author' },
    company: { zh: '個人職涯訓練・職涯空檔', en: 'Personal Career Development · Career Break' },
    location: { zh: '遠端', en: 'Remote' },
    period: '2025/07 — 2025/09 (3m)',
    bullets: {
      zh: [
        '系列主題：iThome 鐵人賽 31 天技術專欄《我獨自開發 - 用 Supabase 打造全端應用》。',
        '全端技術棧：以 Next.js + TypeScript + Tailwind CSS 為前端，搭配 Supabase 全家桶（PostgreSQL、Auth、Storage、Realtime、Edge Functions）。',
        '核心專案（來企排隊）實作：整合信箱登入與 Twilio SMS OTP 手機驗證，並設定 Row Level Security (RLS) 權限控管。',
        '即時通訊機制：運用 Supabase Realtime 開發即時排隊人數自動廣播與用戶/店家專屬聊天室。',
        'CI/CD 自動化部署：透過 Supabase CLI 與 GitHub Actions 實現從 Git Push 到雲端的自動化部署流程。',
      ],
      en: [
        'Authored a 31-day technical article series titled "Solo Development: Building Full-Stack Applications with Supabase" for the iThome Iron Man Competition.',
        'Demonstrated modern full-stack architecture using Next.js, TypeScript, Tailwind CSS, and Supabase (PostgreSQL, Auth, Storage, Realtime, Edge Functions).',
        'Architected a real-world store booking and queuing application, featuring multi-factor authentication (Email & Twilio SMS OTP), Row Level Security (RLS) policies, and live queue status updates.',
        'Implemented real-time features and integrations, leveraging Supabase Realtime for instant user-merchant messaging, alongside Resend email notifications and Google Maps API.',
        'Established DevOps CI/CD automation, streamlining production deployments via Supabase CLI and GitHub Actions.',
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
    company: { zh: '數位因子網路科技有限公司 · 兼職', en: 'Digital Factor Network Technology · Part-time' },
    location: { zh: '台灣・臺南市（遠端）', en: 'Tainan, Taiwan' },
    period: '2023/10 — 2024/03 (6m)',
    bullets: {
      zh: [
        '基於 LINE LIFF 框架開發電商後台系統。',
        '整合 LINE Bot、LINE Login 與 LINE Notify，實現串接的訂單管理流程。',
        '使用 GitHub 進行任務管理與版本控制，並透過 Tag 標籤實現持續整合/部署（CI/CD）。',
      ],
      en: [
        'Developing an e-commerce backend system based on the LIFF framework.',
        'Features LINE Bot, LINE Login, and LINE Notify for streamlined order management.',
        'Utilizes GitHub for task management and version control with tagging for CI/CD.',
      ],
    },
    techStack: ['React', 'TypeScript', 'LINE LIFF', 'LINE Bot', 'LINE Login', 'LINE Notify', 'GitHub CI/CD'],
  },
  {
    id: 'career-break-104social',
    position: { zh: '職涯空檔／全端專案訓練', en: 'Career Break / Full-Stack Project Training' },
    company: { zh: '個人職涯訓練', en: 'Personal Career Development' },
    location: { zh: '遠端', en: 'Remote' },
    period: '2024/02 — 2024/07 (6m)',
    bullets: {
      zh: [
        '全端開發：主導「104 Social」交友平台從零到一的端到端開發。',
        '前端工程：以 Nuxt 3、Tailwind CSS、Nuxt UI、Pinia 建構響應式介面，並整合 Gemini API 實作 AI 配對與個人化搜尋。',
        '後端與即時架構：使用 Express、TypeScript、MongoDB（Mongoose）建置 RESTful API，並以 Socket.io 實作即時通知與訊息。',
        '雲端部署與 DevOps：透過 GitHub Actions 建立 CI/CD，前端部署至 Vercel、後端部署至 Zeabur，並完成結構化資料、Meta tags 與動態 sitemap 的 SEO 優化。',
      ],
      en: [
        'Full-Stack Development: Led the end-to-end development of "104 Social", a full-stack dating platform built from scratch.',
        'Frontend Engineering: Developed responsive UI using Nuxt 3, Tailwind CSS, Nuxt UI, and Pinia. Integrated Gemini API to enable AI-powered matchmaking and personalized user search.',
        'Backend & Real-Time Architecture: Built RESTful APIs using Express, TypeScript, and MongoDB (Mongoose). Implemented WebSockets (Socket.io) for real-time notifications and instant messaging.',
        'Cloud Deployment & DevOps: Set up CI/CD pipelines via GitHub Actions. Deployed frontend to Vercel and backend to Zeabur. Conducted SEO optimizations including structured markup, Meta tags, and dynamic sitemap generation.',
      ],
    },
    techStack: [
      'Nuxt 3',
      'Tailwind CSS',
      'Nuxt UI',
      'Pinia',
      'Gemini API',
      'Express',
      'TypeScript',
      'MongoDB (Mongoose)',
      'Socket.io',
      'GitHub Actions',
      'Vercel',
      'Zeabur',
      'SEO',
    ],
  },
  {
    id: 'ncku',
    position: { zh: '前端工程師', en: 'Front-End Engineer' },
    company: { zh: '國立成功大學', en: 'National Cheng Kung University (NCKU)' },
    location: { zh: '台灣・臺南市', en: 'Tainan, Taiwan' },
    period: '2023/09 — 2024/02 (6m)',
    bullets: {
      zh: [
        '負責成功大學內部系統、活動網站、報表等跨領域前端專案的建構與維護。',
        '開發給予學校營養師使用的「食登2.0系統」，提供團膳電子菜單開立，以及相關食材、衛生稽核等表單的建立與編輯。',
        '開發專為醫療人員設計之「慈濟報表」系統，呈現各項生化數據表單與病例表，提供清晰、安全的資訊界面。',
        '建置客服人員專用之「客服系統」，實現帳密維護、操作記錄及各項基礎設定功能。',
        '維護公司及學校內部的資產與帳號相關管理系統，處理資產移轉、報廢、採購等流程。',
      ],
      en: [
        'Development of backend menu system connected to a RESTful API.',
        'Features include forms, data tables, web page design, and user experience improvements.',
        'Use state management tools (Vuex / Pinia) to ensure data synchronization across multiple pages.',
      ],
    },
    techStack: ['Vue 2', 'Vue 3', 'Vuex', 'Pinia', 'PHP', 'Docker', 'HeidiSQL', 'XAMPP', 'RESTful API'],
  },
  {
    id: 'tw-domain',
    position: { zh: '前端工程師', en: 'Front-End Engineer' },
    company: { zh: '台灣國際網域', en: 'Taiwan International Domain' },
    location: { zh: '台灣・嘉義市', en: 'Chiayi, Taiwan' },
    period: '2022/11 — 2023/10 (1y)',
    bullets: {
      zh: [
        '使用 Vue (Options API) 獨立與協作開發多款電商網站（SPA, CSR）與企業品牌形象網站。',
        '串接 RESTful API，運用 ES5+ 語法、Webpack 打包建置、NPM 模組管理與 ESLint 維持程式碼高品質。',
        '負責精細網頁切圖，使用 HTML5 標籤與 CSS 選擇器，實現複雜表格與表單設計。',
        '基於 Flexbox / Grid 及 RWD，建構跨平台無縫的響應式選單與圖形排版。',
        '熟練運用 Tailwind CSS 3 與 Bootstrap 5 設計系統（含 SCSS、Custom Config、Plugins）。',
      ],
      en: [
        'Proficient in Vue.js Options API for building SPAs.',
        'Experienced in JavaScript ES5+ syntax, plugins, and Webpack for module bundling.',
        'Development of responsive design with Flex/Grid and component implementation.',
      ],
    },
    techStack: ['Vue 2/3', 'Options API', 'Vue Router', 'Pinia', 'Tailwind CSS 3', 'Bootstrap 5', 'SCSS', 'Webpack', 'ESLint'],
  },
  {
    id: 'one-cube',
    position: { zh: '前端工程師', en: 'Front-End Engineer' },
    company: { zh: '壹立方數位科技', en: '1Cube Digital Technology' },
    location: { zh: '台灣・臺南市', en: 'Tainan, Taiwan' },
    period: '2022/07 — 2022/09 (3m)',
    bullets: {
      zh: [
        '維護與優化既有之大型電商舊專案，並主導開發資料視覺化圖表之新專案。',
        '使用 PHP（Laravel / CodeIgniter）與 Vue 框架，進行後端 API 設計、開立以及前後端串接整合。',
        '實作管理後台之帳號與權限管理、SMTP 信箱整合發信系統。',
        '開發 POS 系統之彈窗式增刪查改（CRUD）互動模組、優化購物車金流導向流程、並撰寫優化的資料庫資料篩選查詢。',
      ],
      en: [
        'Maintained legacy e-commerce projects and developed new data visualization dashboards.',
        'Implemented API creation and integration using PHP (Laravel / CodeIgniter) and Vue.',
        'Optimized POS CRUD operations, shopping cart payment flows, and backend permission management.',
      ],
    },
    techStack: ['Vue.js', 'PHP', 'Laravel', 'CodeIgniter', 'MySQL', 'SMTP', 'Data Visualization'],
  },
]
