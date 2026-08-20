import type { ProjectItem } from '../types'

const projectCatalog: ProjectItem[] = [
  {
    id: 'equipment-rental-system',
    name: {
      zh: '影視器材租賃與檔期系統',
      en: 'Film Equipment Rental & Scheduling System',
    },
    category: { zh: '企業管理系統', en: 'Enterprise System' },
    categoryColor: 'blue',
    shortDesc: {
      zh: '為影視製作公司打造的智慧排單系統，解決數百項器材的即時可用量計算、檔期可視化與撞期衝突偵測。',
      en: 'Scheduling system for a film production company | Real-time inventory, calendar views, and conflict detection across hundreds of items.',
    },
    techStack: ['React', 'Node.js', 'OpenAI', 'Anthropic', 'Schedule Grid', 'Inventory Engine'],
    detailedDesc: {
      zh: '客戶擁有 30 多大類、數百項影視器材，過去全靠 Excel 排單，旺季撞期嚴重；可用量需動態扣除維修、外借、報廢與外調等多重狀態，人工核算極易出錯；採用 React + Node.js 建置「器材×日期」視覺化檔期大表，搭配即時可用量演算法（總量 − 維修 − 報廢 − 預訂 − 外調），自動偵測排單衝突；全棧統一以 Asia/Taipei 為基準錨定日期，根治時區偏移造成的跨日漏鎖問題；將大表演算法重構為線性複雜度，並優化分類篩選索引策略（精準命中優先、超時退回模糊比對），將 30 秒以上的千筆查詢壓縮至秒級回應；導入 AI（OpenAI + Anthropic）快速生成報價骨架，業務人工確認後完成排單，有效降低重複勞動並減少撞期與超借風險。',
      en: 'Replaced Excel scheduling with a React + Node.js equipment-by-date grid and real-time availability engine. Deducted maintenance, disposal, bookings, and outsourced inventory to detect conflicts at order time. Standardized dates to Asia/Taipei to eliminate cross-day drift. Refactored the grid to linear complexity and optimized indexed filters, cutting 1,000-row queries from 30+ seconds to sub-second response. Added OpenAI and Anthropic quote generation with human approval before finalizing orders.',
    },
    links: [],
    gallery: {
      id: 'equipment-rental',
      images: [
        { src: '/images/equipment-rental/cover.webp', alt: 'Equipment Rental System Cover', description: '影視器材租賃系統主視覺' },
        { src: '/images/equipment-rental/screen-1.webp', alt: 'Screenshot 1', description: '器材管理介面（截圖 1）' },
        { src: '/images/equipment-rental/screen-2.webp', alt: 'Screenshot 2', description: '檔期大表視覺化（截圖 2）' },
        { src: '/images/equipment-rental/screen-3.webp', alt: 'Screenshot 3', description: '可用量演算與排單（截圖 3）' },
        { src: '/images/equipment-rental/screen-4.webp', alt: 'Screenshot 4', description: 'AI 報價骨架功能（截圖 4）' },
      ],
    },
  },
  {
    id: 'food-quotation-system',
    name: {
      zh: '食品階梯報價與型錄系統',
      en: 'Food Tiered Quotation & Catalog System',
    },
    category: { zh: '企業管理系統', en: 'Enterprise System' },
    categoryColor: 'green',
    shortDesc: {
      zh: '為 B2B 食品批發商打造的四階梯報價引擎，整合中英雙語型錄、匯率維護與三角色細粒度稽核流程。',
      en: '4-tier pricing engine for a B2B food wholesaler | Bilingual catalog, exchange rates, and 3-role audit workflow.',
    },
    techStack: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Docker', 'Zeabur'],
    detailedDesc: {
      zh: '食品批發商面對 A/B/C/D 四等級客戶需報不同售價，過往 Excel 手算易報錯且成本異動時所有報價需人工逐一修改；建置集中化產品成本庫並綁定四價格帶，業務選擇客戶等級即自動帶入對應售價，並支援單品加價、全單加成與貼標費即時計算；報價與中英雙語型錄共用同一資料源，匯率統一集中維護並留存異動歷程，支援香港市場專用跨境幣別與規格欄位；落實採購、業務、主管三角色逐欄位細權限（前端隱藏元件 + 後端中介層雙重防守），搭配主管核准／退回／鎖定機制與關鍵欄位異動稽核紀錄；以 JWT 驗證身份，Docker 容器化後部署至 Zeabur 平台，成本變動一次更新全線連動，徹底解決版本不一致問題。',
      en: 'Replaced Excel quoting with a centralized cost database and four price tiers; auto-applied customer pricing, item surcharges, order markups, and labeling fees. Shared one data source across ZH/EN catalogs, centralized exchange rates with change history, and added HK-specific currency and specification fields. Enforced column-level permissions for procurement, sales, and managers with frontend and backend gates, approval/lock flows, and audit trails. Deployed with Docker on Zeabur using JWT authentication.',
    },
    links: [],
    gallery: {
      id: 'food-quotation',
      images: [
        { src: '/images/food-quotation/cover.webp', alt: 'Food Quotation System Cover', description: '食品階梯報價系統主視覺' },
        { src: '/images/food-quotation/screen-1.webp', alt: 'Screenshot 1', description: '四階梯報價介面（截圖 1）' },
        { src: '/images/food-quotation/screen-2.webp', alt: 'Screenshot 2', description: '型錄管理介面（截圖 2）' },
        { src: '/images/food-quotation/screen-3.webp', alt: 'Screenshot 3', description: '權限與稽核流程（截圖 3）' },
        { src: '/images/food-quotation/screen-4.webp', alt: 'Screenshot 4', description: '匯率與成本維護（截圖 4）' },
      ],
    },
  },
  {
    id: 'tutoring-lms',
    name: {
      zh: '補習班補課系統',
      en: 'Tutoring Center LMS',
    },
    category: { zh: '教育科技平台', en: 'EdTech Platform' },
    categoryColor: 'purple',
    shortDesc: {
      zh: '為補習班打造的線上補課 LMS，整合動態浮水印防盜、單一裝置登入與學習歷程數據儀表板。',
      en: 'Online make-up class LMS | Dynamic watermarks, single-device login, and learning analytics.',
    },
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Payload CMS', 'LINE Login', 'Google Login', 'Dynamic Watermark'],
    detailedDesc: {
      zh: '傳統補習班補課影片散落 YouTube/Vimeo 無法集中管理，學生是否看完無從掌握，且帳號共享與非法側錄導致智慧財產流失；採用 Next.js + TypeScript 建置高效能前端與 API，PostgreSQL 儲存結構化學習資料，並整合 Payload CMS 進行彈性內容與多角色權限管理；設計「課程→單元→章節」三層模組，補習班只需貼上 YouTube/Vimeo 連結即自動轉為可追蹤受管課程；自動記錄觀看時長、章節進度、觀看次數與最後學習時間，繪製管理員儀表板提供完成率與熱門課程分析；播放時即時疊加動態身份識別浮水印降低側錄風險，限制單一帳號同時僅能單裝置登入防範共享，並串接 LINE Login 與 Google Login 降低學員使用門檻。',
      en: 'Built a Next.js + TypeScript LMS with PostgreSQL and Payload CMS to manage courses, permissions, and learning data. Turned YouTube/Vimeo links into tracked Course → Unit → Chapter lessons. Recorded watch duration, chapter progress, views, and last-study time for completion and popularity dashboards. Added dynamic identity watermarks, single-device login, LINE Login, and Google Login to protect content and simplify access.',
    },
    links: [],
    gallery: {
      id: 'tutoring-lms',
      images: [
        { src: '/images/tutoring/cover.webp', alt: 'Tutoring LMS Cover', description: '補習班補課系統主視覺' },
        { src: '/images/tutoring/screen-1.webp', alt: 'Screenshot 1', description: '課程管理介面（截圖 1）' },
        { src: '/images/tutoring/screen-2.webp', alt: 'Screenshot 2', description: '學習進度儀表板（截圖 2）' },
        { src: '/images/tutoring/screen-3.webp', alt: 'Screenshot 3', description: '影片播放與浮水印（截圖 3）' },
        { src: '/images/tutoring/screen-4.webp', alt: 'Screenshot 4', description: '帳號管理與登入設定（截圖 4）' },
        { src: '/images/tutoring/screen-5.webp', alt: 'Screenshot 5', description: '課程上架流程（截圖 5）' },
        { src: '/images/tutoring/screen-6.webp', alt: 'Screenshot 6', description: '數據分析報告（截圖 6）' },
      ],
    },
  },
  {
    id: 'medical-record-ct-platform',
    name: {
      zh: '病歷分析管理系統 + CT 電腦斷層解決方案',
      en: 'Medical Record Analysis + CT Imaging Solution',
    },
    category: { zh: '醫療科技', en: 'HealthTech' },
    categoryColor: 'purple',
    shortDesc: {
      zh: '針對中型醫療機構打造的高資安病歷數位化平台，整合 AI 病歷分析與網頁版 CT 影像檢視流程。',
      en: 'Medical record digitization platform | AI-assisted analysis and browser-based CT imaging.',
    },
    techStack: ['Python', 'PostgreSQL', 'Anthropic', 'PDF Text Extraction', 'AI Structured Analysis', 'CT Web Viewer', 'Security Firewall', 'Dashboard Analytics'],
    detailedDesc: {
      zh: '以 STAR 架構落地：先針對紙本病歷分散、跨報告難比對、CT 影像不易安全共享的醫療痛點，規劃兼具資安與可用性的整體平台；再以 Python + PostgreSQL 建置後端，串接 Anthropic 與 PDF 文字提取，將臨床內容結構化並自動產出趨勢分析；前端提供網頁版 CT 影像檢視（旋轉、縮放、色彩映射、深度調整）與整合式儀表板（回饋註記、跨報告監控）；最終有效縮短病歷調閱與判讀流程，提升醫病溝通效率，同時維持醫療等級的隱私與防護標準。',
      en: 'Digitized scattered clinical records with a Python + PostgreSQL backend, Anthropic AI, and PDF text extraction. Structured clinical notes and generated trend charts automatically. Shipped a browser CT viewer with rotation, zoom, color mapping, and depth controls, plus a dashboard for patient management, annotations, and cross-report monitoring. Added firewall and privacy controls to improve diagnostic workflows without weakening protection.',
    },
    links: [],
    gallery: {
      id: 'medical-ct',
      images: [
        { src: '/images/medical/cover.webp', alt: 'Medical System Cover', description: '醫療後台系統封面與主視覺' },
        { src: '/images/medical/screen-1.webp', alt: 'Screenshot 1', description: '病歷分析管理介面（截圖 1）' },
        { src: '/images/medical/screen-2.webp', alt: 'Screenshot 2', description: '病歷分析管理介面（截圖 2）' },
        { src: '/images/medical/screen-3.webp', alt: 'Screenshot 3', description: '病歷分析管理介面（截圖 3）' },
        { src: '/images/medical/screen-4.webp', alt: 'Screenshot 4', description: '病歷分析管理介面（截圖 4）' },
        { src: '/images/medical/screen-5.webp', alt: 'Screenshot 5', description: '病歷分析管理介面（截圖 5）' },
        { src: '/images/medical/screen-6.webp', alt: 'Screenshot 6', description: '病患列表管理介面（截圖 6）' },
      ],
    },
  },
  {
    id: 'chat-platform',
    name: { zh: '聊天平台', en: 'Chat Platform' },
    category: { zh: '即時通訊平台', en: 'Real-time Messaging' },
    categoryColor: 'green',
    shortDesc: {
      zh: '整合 LINE LIFF 的即時通訊平台，支援無縫登入與雙向即時聊天。',
      en: 'LINE LIFF chat platform | In-app login and low-latency two-way messaging.',
    },
    techStack: ['React', 'Redux', 'TypeScript', 'LINE LIFF'],
    detailedDesc: {
      zh: '以 React + Vite + TypeScript 仿製 Yahoo Messenger 即時通訊介面；整合 LINE LIFF 框架，可在 LINE 內嵌網頁中直接執行，免額外跳轉登入；採用 shadcn/ui 元件庫搭配 Tailwind CSS 建構現代化聊天室 UI；WebSockets 實作低延遲雙向訊息傳遞，並支援 GitHub Pages 一鍵部署。',
      en: 'Recreated a Yahoo Messenger-style chat UI with React + Vite + TypeScript. Integrated LINE LIFF framework so the app runs directly inside LINE without redirecting to an external browser. Built modern chat interface using shadcn/ui and Tailwind CSS. Implemented WebSocket-based bidirectional low-latency messaging. Deployed on GitHub Pages with ESLint for code quality enforcement.',
    },
    links: [
      { label: { zh: '線上展示', en: 'Live Demo' }, url: 'https://react-yahoo-message.vercel.app/', icon: 'external' },
      { label: { zh: 'GitHub', en: 'GitHub' }, url: 'https://github.com/snowman12320/react-yahoo-message', icon: 'github' },
    ],
    gallery: {
      id: 'chat-platform',
      images: [
        { src: '/images/chat-platform/screen-1.png', alt: 'Yahoo Messenger Login', description: 'Yahoo！即時通登入介面' },
      ],
    },
  },
  {
    id: 'dating-platform',
    name: { zh: '交友網站', en: 'Dating Platform' },
    category: { zh: '交友平台', en: 'Dating Platform' },
    categoryColor: 'blue',
    shortDesc: {
      zh: '兼顧精美前端互動與高效後端的社群交友平台，支援 AI 配對與即時聊天。',
      en: 'Full-stack dating platform | AI matchmaking, real-time chat, and Google-indexed SEO.',
    },
    techStack: ['Nuxt 3', 'Tailwind CSS', 'Pinia', 'Express', 'TypeScript', 'MongoDB', 'Socket.io', 'Gemini API'],
    detailedDesc: {
      zh: '獨立負責前後端全端開發，Nuxt 3 + Tailwind CSS + Pinia 建構響應式前端，並以 Gemini API 實作 AI 配對推薦與個人化搜尋；後端採用 Express + TypeScript + MongoDB (Mongoose) 建立 RESTful API 與 JWT 驗證；Socket.io 實現配對後即時一對一通訊與即時通知；CI/CD 透過 GitHub Actions 自動化，前端部署 Vercel、後端部署 Zeabur，並完成 SEO 結構化標記與動態 Sitemap 優化，成功被 Google 收錄。',
      en: 'Built the platform end to end with Nuxt 3, Tailwind CSS, Pinia, Express, TypeScript, and MongoDB. Added Gemini matchmaking, personalized search, JWT authentication, and Socket.io messaging and notifications. Automated CI/CD with GitHub Actions, deployed frontend/backend to Vercel and Zeabur, and added structured markup, meta tags, and a dynamic sitemap to get the site indexed by Google.',
    },
    links: [
      { label: { zh: '線上展示', en: 'Live Demo' }, url: 'https://104social-front-end.vercel.app/about', icon: 'external' },
      { label: { zh: '專案介紹', en: 'Project Intro' }, url: 'https://drive.google.com/file/d/1wmbvuyqTFCMzf2SSx8XV2MCyxRUAAl6l/view?usp=sharing', icon: 'document' },
      { label: { zh: 'Figma 設計稿', en: 'Figma Design' }, url: 'https://www.figma.com/design/IGfoexmvtJKvXXgiOcd78h/交友網站?m=auto&t=yzU2bXSvvOozM8Km-6', icon: 'external' },
      { label: { zh: 'Front-End', en: 'Front-End' }, url: 'https://github.com/south-second-group/104social-front-end/tree/main', icon: 'github' },
      { label: { zh: 'Back-End', en: 'Back-End' }, url: 'https://github.com/roceil/104_Backend/tree/main', icon: 'github' },
    ],
    gallery: {
      id: 'dating',
      images: [
        { src: '/images/dating/screen-1.webp', alt: 'Screenshot 1', description: '交友配對搜尋介面（截圖 1）' },
        { src: '/images/dating-google-search.png', alt: '104緣來如此 Google 搜尋收錄截圖', description: '104緣來如此 — Google 搜尋收錄截圖' },
      ],
    },
  },
  {
    id: 'recruitment-platform-design',
    name: { zh: '人力銀行', en: 'Recruitment Platform' },
    category: { zh: '人力資源平台', en: 'HR Tech Platform' },
    categoryColor: 'blue',
    shortDesc: {
      zh: '全端人力銀行平台，整合職缺搜尋、履歷管理、應徵追蹤與企業招募流程。',
      en: 'Full-stack recruitment platform | Job search, resume management, applications, and employer workflows.',
    },
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT', 'RESTful API', 'Docker', 'Figma'],
    detailedDesc: {
      zh: '從前端介面到後端服務建置全端人力銀行平台，提供求職者與企業端不同的操作流程。求職者可搜尋與篩選職缺、管理履歷、收藏職缺並追蹤應徵狀態；企業端可建立公司資料、發布職缺、管理應徵者與更新招募進度。以前端框架建構響應式介面，後端以 RESTful API 串接 PostgreSQL 資料庫，透過 JWT 實作登入與角色型權限控制，並以 Prisma 管理資料模型與查詢；使用 Docker 統一開發與部署環境，Figma 設計稿則用於規劃首頁、職缺瀏覽與主要使用者流程。',
      en: 'Built a full-stack recruitment platform with separate job-seeker and employer workflows. Job seekers can search and filter listings, manage resumes, save jobs, and track applications; employers can manage company profiles, publish jobs, review candidates, and update hiring stages. Shipped a responsive frontend with RESTful APIs backed by PostgreSQL, JWT authentication, and role-based access control. Used Prisma for typed data access, Docker for consistent environments, and Figma to define the homepage, job discovery, and core user flows.',
    },
    links: [
      { label: { zh: 'Figma 設計稿', en: 'Figma Design' }, url: 'https://www.figma.com/design/EwEQTKW9B6Rtou8dgll8E8/人力銀行?m=auto&t=yzU2bXSvvOozM8Km-6', icon: 'external' },
    ],
    gallery: {
      id: 'recruitment-platform',
      images: [
        { src: '/images/recruitment/cover.png', alt: 'Recruitment Platform Homepage', description: '人力銀行平台首頁' },
      ],
    },
  },
  {
    id: 'llm-assistant',
    name: { zh: 'LLM 應用助理', en: 'LLM Application Assistant' },
    category: { zh: 'AI 應用', en: 'AI Application' },
    categoryColor: 'purple',
    shortDesc: {
      zh: '整合四大 LLM API 的專利侵權比對助理，支援多模型切換與 Docker 容器化部署。',
      en: 'Patent infringement checker | 4 LLM APIs, runtime model switching, and Docker deployment.',
    },
    techStack: ['Next.js', 'Redux', 'TypeScript', 'Gemini', 'OpenAI', 'Claude', 'xAI', 'Docker'],
    detailedDesc: {
      zh: '輸入專利 ID 與公司名稱，系統自動比對並找出前兩項侵權產品及原因；同時串接 Gemini、OpenAI、Claude、xAI 四大 LLM API，支援模型切換；以本地 patents.json 與 company_products.json 作為知識資料庫，並提供 Docker 容器化部署方案，環境一致性高、易於移植；採 Next.js App Router 與 Redux 管理對話狀態。',
      en: 'Input a patent ID and company name — the system automatically identifies the top two infringing products and explains the infringement reasoning. Simultaneously integrates Gemini, OpenAI, Claude, and xAI APIs with runtime model switching. Uses local patents.json and company_products.json as knowledge bases. Provides Docker containerized deployment for consistent, portable environments. Built with Next.js App Router and Redux for conversation state management.',
    },
    links: [
      { label: { zh: '線上展示', en: 'Live Demo' }, url: 'https://patent-infringement-checker.onrender.com/', icon: 'external' },
      { label: { zh: 'GitHub', en: 'GitHub' }, url: 'https://github.com/snowman12320/patent-infringement-checker', icon: 'github' },
    ],
    gallery: {
      id: 'llm',
      images: [
        { src: '/images/llm/cover.webp', alt: 'LLM Assistant Cover', description: 'LLM 應用助理主視覺' },
      ],
    },
  },
  {
    id: 'content-platform',
    name: { zh: '內容資訊平台', en: 'Content Information Platform' },
    category: { zh: '內容平台', en: 'Content Platform' },
    categoryColor: 'green',
    shortDesc: {
      zh: '基於 Nuxt 3 + Firebase 的選舉資料視覺化平台，強化 SSR 效能與 SEO。',
      en: 'Taiwan election data platform | Nuxt 3 SSR, Firebase, interactive charts, and SEO.',
    },
    techStack: ['Nuxt 3', 'TypeScript', 'Firebase', 'vue-chartjs', 'naive-ui', 'SEO'],
    detailedDesc: {
      zh: '以 Nuxt 3 SSR 框架建構台灣歷史總統大選資料視覺化平台；串接中選會官方選舉 API，呈現各市區里人口與票數統計；使用 vue-chartjs 繪製互動式圖表，naive-ui 提供完整元件支援；透過 Nuxt 3 SSR/SSG 提升 LCP 與 SEO，後端以 Firebase Cloud Firestore 與 Authentication 建立內容與權限管理；部署至 Firebase Hosting，搭配 TypeScript 與 ESLint 確保程式品質。',
      en: 'Built a Taiwan presidential election historical data visualization platform using Nuxt 3 SSR. Integrated the official Central Election Commission API to display population and vote counts by district and borough. Rendered interactive charts with vue-chartjs; full component library support via naive-ui. Nuxt 3 SSR/SSG improves LCP performance and SEO scores. Backend uses Firebase Cloud Firestore and Authentication for content and access management. Deployed to Firebase Hosting with TypeScript and ESLint for code quality.',
    },
    links: [
      { label: { zh: '線上展示', en: 'Live Demo' }, url: 'https://my-first-project-1110913.web.app/', icon: 'external' },
      { label: { zh: 'GitHub', en: 'GitHub' }, url: 'https://github.com/snowman12320/F2E-nuxt3', icon: 'github' },
    ],
    gallery: {
      id: 'content-platform',
      images: [
        { src: '/images/content-info/cover.webp', alt: 'Content Platform Cover', description: '內容資訊平台主視覺' },
      ],
    },
  },
  {
    id: 'shopping-site',
    name: { zh: '購物網站', en: 'Shopping Website' },
    category: { zh: '電商平台', en: 'E-commerce' },
    categoryColor: 'blue',
    shortDesc: {
      zh: '完整購物車、篩選與結帳流程的 NBA 球衣電商，導入 Vitest 單元測試與 Cypress E2E 測試。',
      en: 'NBA jersey e-commerce site | Cart, filtering, checkout, Vitest, and Cypress coverage.',
    },
    techStack: ['Vue 3', 'Vite', 'Pinia', 'Vitest', 'Cypress', 'vee-validation'],
    detailedDesc: {
      zh: '以 Vue.js + Vite 開發 NBA 球衣電商，具 RWD 響應式設計；使用 Pinia 集中管理購物車、訂單等全域狀態，取代舊版 Vuex；實作會員註冊/登入、訂單管理與後台商品管理功能；導入 Vitest 單元測試與 Cypress E2E 測試，搭配 vee-validation 表單驗證；另提供 Vue CLI + mitt Event Bus 版本供對比。',
      en: 'Developed an NBA jersey e-commerce site with Vue.js + Vite featuring responsive design. Used Pinia for centralized global state management (cart, orders) replacing legacy Vuex. Implemented member registration/login, order management, and admin product management. Introduced Vitest for unit testing and Cypress for E2E testing alongside vee-validation for form handling. Also provides a Vue CLI + mitt Event Bus version for comparison.',
    },
    links: [
      { label: { zh: '線上展示', en: 'Live Demo' }, url: 'https://snowman12320.github.io/jtown-cli/#/', icon: 'external' },
      { label: { zh: 'Vite + Pinia', en: 'Vite + Pinia' }, url: 'https://github.com/snowman12320/jtown-vite', icon: 'github' },
      { label: { zh: 'Vue CLI + mitt', en: 'Vue CLI + mitt' }, url: 'https://github.com/snowman12320/jtown-cli', icon: 'github' },
    ],
    gallery: {
      id: 'shopping-site',
      images: [
        { src: '/images/shopping/cover.webp', alt: 'Shopping Website Cover', description: '購物網站主視覺' },
      ],
    },
  },
  {
    id: 'house-price',
    name: { zh: '房價預測與實價查詢平台', en: 'House Price Prediction & Transaction Search Platform' },
    category: { zh: '房價預測模型', en: 'House Price Prediction' },
    categoryColor: 'purple',
    shortDesc: {
      zh: '結合 LightGBM 房價預測與實價登錄查詢，協助購屋者在台灣房市投資前掌握未來價格與歷史交易資料。',
      en: 'A Taichung housing platform combining LightGBM price forecasts with transaction searches to support better-informed property decisions.',
    },
    techStack: ['Python', 'Flask', 'Jinja2', 'HTML / CSS', 'RWD', 'MySQL', 'LightGBM', 'Folium', 'Bokeh', 'Web Crawler', 'AWS', 'Linux', 'VS Code', 'Spyder', 'Google Colab'],
    detailedDesc: {
      zh: '台灣房市火熱，投資者類型多元，購入前應先預測未來價格作為投資參考，且房價年年攀升、需求用戶眾多，應將實價登錄資料納入購屋考量；以 app.py 與 app_module.py 建構以 Flask 為核心的 Backend 服務，結合 templates 與 static 資料夾打造 RWD 響應式網頁；透過 CatchIP.py、Newcatch.py 與 air_quality_requests.py 進行網路爬蟲、IP 與環境開放資料擷取；運用 import_model.py 與 creatmodule.py 匯入及建立房價預測模型，完成特徵工程與模型推論；使用 Folium 的 folium_taichung.py 繪製台中互動式地圖，並以 Bokeh.py 呈現動態數據視覺化圖表；透過 Str_Q2B.py 進行全形半形字元轉換，搭配 air_quality_TW.py 等模組完成資料清洗與預處理；整合自動化爬蟲、資料清洗、AI 模型預測、互動地圖與圖表視覺化，以及前後端網站流程，提供台中房價預估與區域資訊查詢體驗。',
      en: 'Taiwan’s active housing market attracts many types of investors, so forecasting future prices provides useful context before investing, while rising prices and strong demand make official transaction records an important consideration before a purchase; built the Flask-based backend with app.py and app_module.py, using templates and static directories to deliver a responsive web interface; used CatchIP.py, Newcatch.py, and air_quality_requests.py for web crawling, IP collection, and public environmental data retrieval; used import_model.py and creatmodule.py to build and load house price models for feature engineering and inference; rendered interactive Taichung maps with Folium through folium_taichung.py and dynamic data visualizations with Bokeh.py; handled full-width and half-width character conversion with Str_Q2B.py, alongside air_quality_TW.py and other preprocessing modules; integrated automated crawling, data cleaning, AI prediction, interactive maps and charts, and frontend/backend delivery into a Taichung housing information experience.',
    },
    links: [
      { label: { zh: 'Demo 影片', en: 'Demo Video' }, url: 'https://youtu.be/x5gwX4TgTUw', icon: 'youtube' },
      { label: { zh: 'GitHub 專案', en: 'GitHub Repository' }, url: 'https://github.com/snowman12320/AI_project', icon: 'github' },
    ],
    gallery: {
      id: 'house-price',
      images: [
        { src: '/images/house-price/cover.webp', alt: 'House Price System Cover', description: '房價預測系統主視覺' },
      ],
    },
  },
  {
    id: 'queue-master',
    name: { zh: '來企排隊', en: 'QueueMaster' },
    category: { zh: '排隊管理系統', en: 'Queue Management System' },
    categoryColor: 'blue',
    shortDesc: {
      zh: '智慧排隊與號碼牌管理系統，聚焦於現場取號流程、手機驗證與企業管理視圖的全棧實作。',
      en: 'Queue and ticket management system | On-site check-in, mobile verification, and business operations.',
    },
    techStack: ['Next.js 14', 'TypeScript', 'Supabase', 'HeroUI v2', 'Tailwind CSS', 'Framer Motion', 'react-scan'],
    detailedDesc: {
      zh: 'QueueMaster 是一個以實體店家現場排隊場景為核心的全棧 Web 應用，目標是解決排隊秩序混亂、顧客候位體驗差與手動取號流程繁瑣的問題。專案採用 Next.js 14 App Router 與 TypeScript 建構，透過強型別與元件化設計提升跨頁與跨元件的資料流穩定性；前端搭配 HeroUI v2 與 Tailwind CSS 快速打造響應式 UI，並以 Framer Motion 增加頁面互動流暢度。後端則整合 Supabase（PostgreSQL）作為 BaaS，利用資料庫與 Row Level Security (RLS) 管理隊伍與號碼牌資料，並透過 Supabase CLI 建立本地開發與雲端同步流程，讓我能以更高效率完成整個全端產品的開發與維運。核心功能包含號碼牌彈窗、手機驗證邏輯、企業管理頁面，以及即時的元件效能監控與優化。這個專案很適合用來說明我如何結合前端互動與 Supabase 後端服務，快速打造可用、可維護的產品原型，並強調一人全端開發的實戰能力。',
      en: 'Built a Next.js 14 + TypeScript queue system for physical stores, replacing manual ticketing with guided check-in and mobile verification. Used Supabase PostgreSQL and RLS to secure queue and ticket data, with Supabase CLI for local/cloud workflows. Shipped ticket flows, business management views, and react-scan performance monitoring.',
    },
    links: [
      { label: { zh: 'GitHub', en: 'GitHub' }, url: 'https://github.com/snowman12320/QueueMaster', icon: 'github' },
      { label: { zh: '系列文章', en: 'Series Article' }, url: 'https://ithelp.ithome.com.tw/users/20147822/ironman/8756', icon: 'external' },
    ],
    gallery: {
      id: 'queue-master',
      images: [
        { src: '/images/queue-master/19-3.png', alt: 'QueueMaster Feature View', description: 'QueueMaster 功能畫面' },
        { src: '/images/queue-master/20-home.png', alt: 'QueueMaster Home', description: 'QueueMaster 首頁與排隊入口' },
        { src: '/images/queue-master/20-login.png', alt: 'QueueMaster Login', description: '手機驗證與登入流程' },
        { src: '/images/queue-master/20-chat-list.png', alt: 'QueueMaster Chat List', description: '聊天室清單與即時訊息' },
        { src: '/images/queue-master/20-chat-room.png', alt: 'QueueMaster Chat Room', description: '店家與顧客聊天室介面' },
        { src: '/images/queue-master/20-setting.png', alt: 'QueueMaster Settings', description: '企業設定與管理畫面' },
        { src: '/images/queue-master/20-product.png', alt: 'QueueMaster Product View', description: '產品與服務管理畫面' },
        { src: '/images/queue-master/20-bookging.png', alt: 'QueueMaster Booking', description: '預約與排隊流程畫面' },
        { src: '/images/queue-master/20-booking-detail.png', alt: 'QueueMaster Booking Detail', description: '預約細節與狀態說明' },
        { src: '/images/queue-master/20-notice.png', alt: 'QueueMaster Notice', description: '公告與通知管理畫面' },
        { src: '/images/queue-master/20-receid.png', alt: 'QueueMaster Receipt', description: '收據與完成流程畫面' },
        { src: '/images/queue-master/22-2.png', alt: 'QueueMaster Additional View', description: '額外功能畫面' },
      ],
    },
  },
  {
    id: 'sun-life-portal',
    name: { zh: '顧問入口網站', en: 'Sun Life Advisor Portal' },
    category: { zh: '企業應用系統', en: 'Enterprise Application' },
    categoryColor: 'purple',
    shortDesc: {
      zh: '為永明金融 Advisor Portal 開發前端與整合流程，強化表格互動、SSO 與跨環境部署維運。',
      en: 'Sun Life Advisor Portal | Table interactions, BFF integration, SSO/RBAC, and multi-environment delivery.',
    },
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'BFF', 'SSO / RBAC', 'SQL', 'Umami', 'Jira', 'GitHub Actions'],
    detailedDesc: {
      zh: '這個專案是我在永明金融 Advisor Portal 的實務工作內容，主要負責前端介面開發與後端串接流程維護。我參與開發包含 Table UI、Spinner 狀態顯示與多種響應式元件，並透過 BFF 架構串接 Advisor API；同時協助排查 DEV 環境 API 連線異常。除了前端開發，我也主導 SSO 認證流程整合，包含登入後重新導向 URL、SSO role 管理與 RBAC 權限控制；另外開發後台管理功能與初始資料庫建置，並整合 Umami analytics 追蹤使用者行為。這個專案很適合用來說明我如何在企業級系統中兼顧產品互動、權限控制與跨環境維運。',
      en: 'Built Advisor Portal tables, loading states, and responsive components; integrated Advisor APIs through BFF and resolved DEV connectivity issues. Led SSO role provisioning, redirect configuration, and RBAC access control. Shipped admin features, initial SQL setup, and Umami analytics for behavior tracking.',
    },
    links: [
      { label: { zh: '公司網站', en: 'Company Website' }, url: 'https://www.sunlife.ca/en/', icon: 'external' },
    ],
    gallery: {
      id: 'sun-life',
      images: [
        { src: '/images/sun-life/image.png', alt: 'Sun Life Advisor Portal Overview', description: '永明 Advisor Portal 介面概覽' },
        { src: '/images/sun-life/image-1.png', alt: 'Sun Life Advisor Portal Detail', description: '永明 Advisor Portal 內容細節' },
      ],
    },
  },
  {
    id: 'digital-factor-platform',
    name: { zh: '數位因子專案', en: 'Digital Factor Project' },
    category: { zh: '電商與後台系統', en: 'E-commerce & Admin System' },
    categoryColor: 'green',
    shortDesc: {
      zh: '基於 LINE LIFF 框架開發的電商後台與整合流程，涵蓋 LINE Bot、LINE Login 與通知系統的串接。',
      en: 'LINE LIFF e-commerce admin | Order management, LINE integrations, and CI/CD.',
    },
    techStack: ['React', 'TypeScript', 'LINE LIFF', 'LINE Bot', 'LINE Login', 'LINE Notify', 'GitHub CI/CD'],
    detailedDesc: {
      zh: '這個專案是我在數位因子網路科技公司參與的後台與電商整合系統，主要負責基於 LINE LIFF 框架的前端與系統流程開發。專案整合 LINE Bot、LINE Login 與 LINE Notify，讓後台能順暢處理訂單管理與通知流程；我也協助建立 GitHub 的任務管理與版本控制流程，並透過 Tag 標籤支援 CI/CD 的自動化部署。這個專案適合用來呈現我在合作式產品開發中，如何快速落地前端互動、第三方服務串接與維運流程。',
      en: 'Built a LINE LIFF e-commerce admin system with LINE Bot, LINE Login, and LINE Notify for order and notification workflows. Added GitHub task tracking, tag-based versioning, and CI/CD automation for collaborative delivery.',
    },
    links: [
      { label: { zh: '公司網站', en: 'Company Website' }, url: 'https://www.dgfactor.com/', icon: 'external' },
    ],
    gallery: {
      id: 'digital-factor',
      images: [
        { src: '/images/digital-factor/1.png', alt: 'Digital Factor Screenshot 1', description: '數位因子專案畫面 1' },
        { src: '/images/digital-factor/2.png', alt: 'Digital Factor Screenshot 2', description: '數位因子專案畫面 2' },
        { src: '/images/digital-factor/3.png', alt: 'Digital Factor Screenshot 3', description: '數位因子專案畫面 3' },
        { src: '/images/digital-factor/4.png', alt: 'Digital Factor Screenshot 4', description: '數位因子專案畫面 4' },
        { src: '/images/digital-factor/5.png', alt: 'Digital Factor Screenshot 5', description: '數位因子專案畫面 5' },
      ],
    },
  },
  {
    id: 'ncku-project',
    name: { zh: '成功大學專案', en: 'NCKU Project' },
    category: { zh: '校內系統與報表平台', en: 'Campus System & Reporting Platform' },
    categoryColor: 'purple',
    shortDesc: {
      zh: '為成功大學內部系統與醫療/營養相關報表平台開發前端與流程管理功能。',
      en: 'NCKU internal systems | Forms, reporting dashboards, and workflow management.',
    },
    techStack: ['Vue 2', 'Vue 3', 'Vuex', 'Pinia', 'PHP', 'Docker', 'RESTful API', 'HeidiSQL'],
    detailedDesc: {
      zh: '這個專案是我在成功大學任職期間參與的內部系統與報表平台，主要負責跨領域前端專案的建構與維護。我曾協助開發學校內部的食登 2.0 系統與慈濟報表系統，提供表單、資料展示與操作流程；也參與客服系統與資產帳號管理系統的開發，強化校內業務流程與資料管理效率。這個專案適合用來說明我如何在校園場域中，將前端互動、資料流與後端流程整合成穩定可維護的內部系統。',
      en: 'Built and maintained NCKU internal systems including Food Registration 2.0, Tzu Chi medical reports, customer service, and asset/account management. Delivered forms, data tables, and workflow features with Vue 2/3, Pinia/Vuex, PHP, and RESTful APIs.',
    },
    links: [
      { label: { zh: '學校網站', en: 'University Website' }, url: 'https://www.ncku.edu.tw/', icon: 'external' },
    ],
    gallery: {
      id: 'ncku',
      images: [
        { src: '/images/ncku/cover.png', alt: 'NCKU Project Cover', description: '成功大學專案封面' },
        { src: '/images/ncku/1.png', alt: 'NCKU Project Screenshot 1', description: '成功大學專案畫面 1' },
        { src: '/images/ncku/2.png', alt: 'NCKU Project Screenshot 2', description: '成功大學專案畫面 2' },
        { src: '/images/ncku/s.png', alt: 'NCKU Project Screenshot 3', description: '成功大學專案畫面 3' },
      ],
    },
  },
  {
    id: 'wan-yi-project',
    name: { zh: '玩藝數位專案', en: 'Fun Show Digital Project' },
    category: { zh: '直播平台', en: 'Live Streaming Platform' },
    categoryColor: 'green',
    shortDesc: {
      zh: '以直播互動與品牌內容為核心的數位平台，整合訊號源管理、導播控制、即時同步、會員金流與高可靠度直播體驗。',
      en: 'Live streaming platform | Signal management, broadcast control, real-time sync, and payments.',
    },
    techStack: ['Vue 3', 'TypeScript', 'Vite', 'Tailwind CSS', 'WebSocket', 'SSE', 'Keycloak', 'Payuni', 'Component Architecture', 'State Management', 'Composables', 'Router', 'Async Data Flow', 'Infinite Scroll', 'Lightbox', 'Context Menu', 'OBS Integration', 'Signal Source Management', 'Scene Management', 'Broadcast Control UI', 'Real-time Sync', 'High Concurrency', 'MSW', 'Jenkins', 'Git CI/CD'],
    detailedDesc: {
      zh: '以 Vue 3、TypeScript、Vite 與 Tailwind CSS 建立直播互動平台，透過元件化架構打造一致且高效能的前端介面；運用 Composables、路由、狀態管理與非同步資料流，整合直播頁、導播控制台、互動面板與內容管理系統；實作訊號源與場景管理、場景比例與字體設定、導播控制、聯合直播／共同直播 UI，以及 OBS 串流檢視；以 Keycloak 與 RBAC 處理會員身分驗證和權限控制，並串接 Payuni 完成訂閱方案付款與會員中心功能；使用 Infinite Scroll、Lightbox、右鍵選單管理媒體資源，並以 WebSocket 與 SSE 推送訂閱方案及期限通知；透過 MSW、Postman 與單元測試驗證 API，搭配 Jenkins CI/CD 與 Git 分支流程完成部署，並評估 Nuxt 4 升級可行性。',
      en: 'Built a live streaming platform with Vue 3, TypeScript, Vite, and Tailwind CSS using a modular component architecture; organized live pages, broadcast control rooms, interactive panels, and content management with Composables, routing, state management, and async data flows; shipped signal and scene management, broadcast controls, co-streaming UI, OBS stream viewing, and scene configuration; integrated Keycloak/RBAC authentication and authorization with Payuni subscription payments and member-center workflows; managed media with infinite scroll, lightbox previews, and context menus, while using WebSocket/SSE for subscription and expiry notifications; validated APIs with MSW, Postman, and unit tests, then automated delivery with Jenkins CI/CD and Git branching while evaluating a Nuxt 4 upgrade.',
    },
    links: [],
    gallery: {
      id: 'wan-yi',
      images: [
        { src: '/images/wanyi/cover.png', alt: 'Wan Yi Project Cover', description: '玩藝數位專案封面' },
      ],
    },
  },
]

const swapProjectPositions = (items: ProjectItem[], firstId: string, secondId: string) => {
  const reordered = [...items]
  const firstIndex = reordered.findIndex((item) => item.id === firstId)
  const secondIndex = reordered.findIndex((item) => item.id === secondId)
  const firstProject = reordered[firstIndex]
  const secondProject = reordered[secondIndex]

  if (firstIndex < 0 || secondIndex < 0 || !firstProject || !secondProject) return items

  reordered[firstIndex] = secondProject
  reordered[secondIndex] = firstProject
  return reordered
}

export const projects = swapProjectPositions(
  swapProjectPositions(projectCatalog, 'chat-platform', 'sun-life-portal'),
  'wan-yi-project',
  'recruitment-platform-design',
)
