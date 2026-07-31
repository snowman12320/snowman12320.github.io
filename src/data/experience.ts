import type { ExperienceItem } from '../types'

export const experiences: ExperienceItem[] = [
  {
    id: 'fun-show',
    position: { zh: '全端工程師', en: 'Full Stack Engineer' },
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
    contribution: {
      zh: '[{"title":"性能提升","items":["支援 5,000+ 並發 WebSocket 連線，實時直播聊天與互動不延遲","頁面加載時間從 3.2s 優化至 0.8s（75% 性能提升）","導播控制台響應延遲控制在 < 100ms，提升操作體驗","無限滾動媒體資源管理，支援 10,000+ 媒體項目無感加載"]},{"title":"程式品質","items":["開發 32 個可復用 Vue 3 Composables 元件，提升代碼復用率 68%","建置 45 個模組化元件，支援直播頁、導播控制、會員中心等功能","單元測試覆蓋率達 82%，確保代碼穩定性","搭配 12 個 MSW API Mock 方案，加快前後端並行開發"]},{"title":"商業影響","items":["整合 3 大支付方案（Payuni、Keycloak、RBAC）","實作 4 種即時通知機制（WebSocket、SSE、訂閱推播、期限提醒）","支援聯合直播、共同直播、OBS 導播等 3 種直播模式","會員中心流程優化，訂閱轉換率提升 35%"]},{"title":"開發效率","items":["Jenkins CI/CD 自動化部署，每週 8-12 次自動部署","Git 分支管理與代碼審查流程，減少 Bug 率 40%","開發工具整合（MCP、Kiro-cli），開發效率提升 25%","API 響應時間最佳化至平均 120ms（原 400ms）"]}]',
      en: '[{"title":"Performance","items":["Supports 5,000+ concurrent WebSocket connections for real-time chat and interaction without lag","Page load time optimized from 3.2s to 0.8s (75% performance improvement)","Broadcast console response latency maintained at < 100ms for better UX","Infinite-scroll media management supporting 10,000+ media items with seamless loading"]},{"title":"Quality","items":["Developed 32 reusable Vue 3 Composables, achieving 68% code reuse rate","Built 45 modular components supporting the live page, broadcast control, and member center","Unit test coverage reached 82% for higher stability","Implemented 12 MSW API Mock solutions to accelerate frontend-backend parallel development"]},{"title":"Impact","items":["Integrated 3 payment solutions (Payuni, Keycloak, RBAC)","Implemented 4 real-time notification mechanisms (WebSocket, SSE, subscription push, expiry alerts)","Supported 3 streaming modes: joint broadcast, co-stream, and OBS control","Optimized the member center flow and increased subscription conversion by 35%"]},{"title":"Efficiency","items":["Jenkins CI/CD automation with 8-12 automated deployments per week","Git branch management and code review process reduced bugs by 40%","Integrated MCP and Kiro-cli to improve development efficiency by 25%","Optimized API response time to an average of 120ms from 400ms"]}]',
    },
  },
  {
    id: 'hengyuan-freelance',
    position: { zh: '全端工程師', en: 'Full Stack Engineer' },
    company: { zh: '恆遠數位行銷（ForeverWebs）', en: 'ForeverWebs · Freelance' },
    location: { zh: '遠端', en: 'Remote' },
    period: '2024/10 — 2026/07 (1y 10m)',
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
    id: 'sun-life',
    position: { zh: '全端工程師', en: 'Full Stack Engineer' },
    company: { zh: '永明金融（Sun Life）', en: 'Sun Life Financial' },
    location: { zh: '加拿大（遠端）', en: 'Canada (Remote)' },
    period: '2025/10 — 2026/04 (7m)',
    bullets: {
      zh: [
        '開發與維護 Advisor Portal 前端介面，包含 Table UI、Spinner 狀態顯示等響應式元件，透過 BFF（Backend For Frontend）架構串接 Advisor API，並排查 DEV 環境 API 連線異常根因。',
        '主導 SSO（單一登入）認證流程整合，設定登入後重新導向 URL、管理 SSO 角色（Role）新增，並撰寫相關技術文件，實作 RBAC 角色型存取控制。',
        '開發後台管理功能（含 Action Log Phase 2）、執行初始資料庫建置並撰寫 SQL 腳本；導入 Umami analytics script 追蹤網站流量與使用者行為數據。',
        '維護跨環境 CI/CD 流程，管理 Dev 與 SIT 的 PR 合併、部署驗證與 Bug 排查（含部署版本與修復 Commit 不符的異常）；使用 Jira 追蹤 Ticket，定期透過 SharePoint / Excel 向團隊回報進度。',
      ],
      en: [
        'Built and maintained the Advisor Portal frontend — including Table UI and Spinner state components — and integrated Advisor APIs via BFF (Backend For Frontend) architecture; diagnosed and resolved API connectivity failures in the DEV environment.',
        'Led SSO (Single Sign-On) integration: configured post-login redirect URLs, managed SSO role provisioning, authored access-control technical documentation, and implemented RBAC for role-based permission management.',
        'Delivered Admin backend features (including Action Log Phase 2), executed initial database setup with SQL scripts, and integrated Umami analytics script for user behavior and traffic monitoring.',
        'Maintained cross-environment CI/CD pipelines managing PR workflows, deployment verification, and bug resolution across Dev and SIT (including commit-deployment mismatch issues); tracked tasks via Jira and reported progress through SharePoint / Excel.',
      ],
    },
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'BFF Architecture', 'SSO / RBAC', 'SQL', 'Umami', 'Jira', 'GitHub Actions', 'CI/CD'],
  },
  {
    id: 'ithome-ironman',
    position: { zh: '職涯空檔 / 個人職涯訓練', en: 'Career Break / Personal Career Development' },
    company: { zh: '鐵人賽系列文章作者', en: 'Ironman Series Author' },
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
    company: { zh: '數位因子網路科技有限公司（dgFactor）', en: 'dgFactor · Part-time' },
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
    position: { zh: '職涯空檔 / 個人職涯訓練', en: 'Career Break / Personal Career Development' },
    company: { zh: '全端專案訓練', en: 'Full-Stack Project Training' },
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
    id: 'career-break-certified-tutor',
    position: { zh: '職涯空檔 / 個人職涯訓練', en: 'Career Break / Personal Career Development' },
    company: { zh: '認證導師培訓', en: 'Certified Tutor Training' },
    location: { zh: '遠端', en: 'Remote' },
    period: '2024/08 — 2024/10 (3m)',
    bullets: {
      zh: [
        'Clean Code 指導培訓：完成「JS Clean Code」專業前端導師培訓，掌握程式重構與可讀性標準，建立高品質 code review 與 mentoring 基準。',
        '實務教學驗收通過：透過反覆練習與專業回饋，通過試教影片評核，展現結構化且易理解的技術教學能力。',
        '技術陪跑與解題：具備協助學員突破前端瓶頸經驗，能排查 Axios 環境設定與 API 串接除錯問題。',
      ],
      en: [
        'Clean Code Mentorship: Completed professional frontend tutor training in "JS Clean Code," mastering code refactoring and readability standards to establish high-quality code review and mentoring benchmarks.',
        'Proven Practical Teaching Experience & Assessment Clearance: Successfully passed teaching demo video evaluations through iterative practice and professional feedback, demonstrating solid hands-on experience in delivering structured, easy-to-understand technical lessons.',
        'Technical Mentorship & Student Problem Solving: Experienced in guiding learners through frontend bottlenecks, assisting students in troubleshooting environment setups (e.g., Axios configuration) and debugging API integration issues.',
      ],
    },
    techStack: [
      'JS Clean Code',
      'Code Refactoring',
      'Code Review',
      'Technical Mentorship',
      'Frontend Teaching',
      'Axios',
      'API Integration Debugging',
    ],
    links: [
      {
        label: { zh: '進階陣列操作：掌握 filter 篩選技巧', en: 'Advanced Array Operations: Mastering filter' },
        url: 'https://youtu.be/W7Pz_aEvCxE',
        icon: 'youtube',
      },
      {
        label: { zh: 'axios 搭配 Async/Await 再進化', en: 'Axios with Async/Await: Next Level' },
        url: 'https://youtu.be/ZV9PVajIyDQ?si=ubePhL59_VhJ3WcG',
        icon: 'youtube',
      },
    ],
  },
  {
    id: 'ncku',
    position: { zh: '前端工程師', en: 'Front-End Engineer' },
    company: { zh: '國立成功大學（NCKU）', en: 'National Cheng Kung University (NCKU)' },
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
    company: { zh: '台灣國際網域（Tnn-global）', en: 'Tnn-global' },
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
    company: { zh: '壹立方數位科技（ACubeDT）', en: 'ACubeDT' },
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
