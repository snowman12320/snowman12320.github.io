import type { ProjectItem } from '../types'

export const projects: ProjectItem[] = [
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
      en: 'Smart scheduling system for a film production company — solving real-time availability calculation, schedule visualization, and conflict detection across hundreds of equipment items.',
    },
    techStack: ['React', 'Node.js', 'OpenAI', 'Anthropic', 'Schedule Grid', 'Inventory Engine'],
    detailedDesc: {
      zh: '客戶擁有 30 多大類、數百項影視器材，過去全靠 Excel 排單，旺季撞期嚴重；可用量需動態扣除維修、外借、報廢與外調等多重狀態，人工核算極易出錯；採用 React + Node.js 建置「器材×日期」視覺化檔期大表，搭配即時可用量演算法（總量 − 維修 − 報廢 − 預訂 − 外調），自動偵測排單衝突；全棧統一以 Asia/Taipei 為基準錨定日期，根治時區偏移造成的跨日漏鎖問題；將大表演算法重構為線性複雜度，並優化分類篩選索引策略（精準命中優先、超時退回模糊比對），將 30 秒以上的千筆查詢壓縮至秒級回應；導入 AI（OpenAI + Anthropic）快速生成報價骨架，業務人工確認後完成排單，有效降低重複勞動並減少撞期與超借風險。',
      en: 'The client manages 30+ categories and hundreds of film equipment items, previously relying on Excel for scheduling, causing frequent double-bookings during peak seasons. Available quantity required dynamic deduction of maintenance, lending, disposal, and outsourcing states. Built a React + Node.js visual schedule grid ("equipment × date") with a real-time availability engine (total − maintenance − disposal − bookings − outsourced), auto-detecting conflicts at order time. Standardized the full stack to Asia/Taipei timezone to eliminate cross-day date drift. Refactored the grid algorithm to linear complexity and optimized category filter index strategy (exact-match priority with fuzzy fallback + timeout cap), reducing 1000-row queries from 30+ seconds to sub-second response. Integrated AI (OpenAI + Anthropic) to generate quote skeletons from natural-language requests, with human confirmation before finalizing.',
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
      en: '4-tier pricing engine for a B2B food wholesaler, featuring bilingual catalogs, exchange rate management, and a 3-role fine-grained audit workflow.',
    },
    techStack: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Docker', 'Zeabur'],
    detailedDesc: {
      zh: '食品批發商面對 A/B/C/D 四等級客戶需報不同售價，過往 Excel 手算易報錯且成本異動時所有報價需人工逐一修改；建置集中化產品成本庫並綁定四價格帶，業務選擇客戶等級即自動帶入對應售價，並支援單品加價、全單加成與貼標費即時計算；報價與中英雙語型錄共用同一資料源，匯率統一集中維護並留存異動歷程，支援香港市場專用跨境幣別與規格欄位；落實採購、業務、主管三角色逐欄位細權限（前端隱藏元件 + 後端中介層雙重防守），搭配主管核准／退回／鎖定機制與關鍵欄位異動稽核紀錄；以 JWT 驗證身份，Docker 容器化後部署至 Zeabur 平台，成本變動一次更新全線連動，徹底解決版本不一致問題。',
      en: 'The wholesaler serves A/B/C/D tier customers with different prices; prior Excel-based quoting caused frequent pricing errors and required manual updates across all quotes when costs changed. Built a centralized product cost database bound to four price tiers — selecting customer grade auto-applies the correct price with support for per-item surcharges, order-level markups, and labeling fees. Bilingual (ZH/EN) catalog shares the same data source; exchange rates are centrally maintained with change history, supporting HK market cross-border currency and spec fields. Implemented 3-role (procurement / sales / manager) column-level permissions with frontend component hiding + backend middleware double-gating, plus manager approve/reject/lock flow and full audit trail for critical field changes. Deployed via Docker on Zeabur with JWT authentication.',
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
      en: 'Online make-up class LMS for tutoring centers, featuring dynamic watermark piracy prevention, single-device login enforcement, and a learning progress analytics dashboard.',
    },
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Payload CMS', 'LINE Login', 'Google Login', 'Dynamic Watermark'],
    detailedDesc: {
      zh: '傳統補習班補課影片散落 YouTube/Vimeo 無法集中管理，學生是否看完無從掌握，且帳號共享與非法側錄導致智慧財產流失；採用 Next.js + TypeScript 建置高效能前端與 API，PostgreSQL 儲存結構化學習資料，並整合 Payload CMS 進行彈性內容與多角色權限管理；設計「課程→單元→章節」三層模組，補習班只需貼上 YouTube/Vimeo 連結即自動轉為可追蹤受管課程；自動記錄觀看時長、章節進度、觀看次數與最後學習時間，繪製管理員儀表板提供完成率與熱門課程分析；播放時即時疊加動態身份識別浮水印降低側錄風險，限制單一帳號同時僅能單裝置登入防範共享，並串接 LINE Login 與 Google Login 降低學員使用門檻。',
      en: 'Traditional tutoring centers scatter make-up videos across YouTube/Vimeo with no centralized tracking; account sharing and illegal screen-recording cause intellectual property loss. Built with Next.js + TypeScript for high-performance frontend and API, PostgreSQL for structured learning data, and Payload CMS for flexible content and multi-role permission management. Designed a 3-tier "Course → Unit → Chapter" module — tutors simply paste a YouTube/Vimeo link to create a fully tracked lesson. Auto-records watch duration, chapter progress, view counts, and last-studied timestamp, visualized in an admin dashboard with completion rates and popular course analytics. Overlays real-time dynamic identity watermarks during playback to deter recording; enforces single-device login per account to prevent sharing; integrates LINE Login and Google Login to lower the barrier for students.',
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
      en: 'High-security medical record digitization platform for mid-sized clinics, integrating AI-powered record analysis and a browser-based CT image viewer.',
    },
    techStack: ['Python', 'PostgreSQL', 'Anthropic', 'PDF Text Extraction', 'AI Structured Analysis', 'CT Web Viewer', 'Security Firewall', 'Dashboard Analytics'],
    detailedDesc: {
      zh: '以 STAR 架構落地：先針對紙本病歷分散、跨報告難比對、CT 影像不易安全共享的醫療痛點，規劃兼具資安與可用性的整體平台；再以 Python + PostgreSQL 建置後端，串接 Anthropic 與 PDF 文字提取，將臨床內容結構化並自動產出趨勢分析；前端提供網頁版 CT 影像檢視（旋轉、縮放、色彩映射、深度調整）與整合式儀表板（回饋註記、跨報告監控）；最終有效縮短病歷調閱與判讀流程，提升醫病溝通效率，同時維持醫療等級的隱私與防護標準。',
      en: 'Addressed key pain points in traditional clinical settings: scattered paper records, inability to cross-reference multiple reports, and difficulty securely sharing CT images. Built Python + PostgreSQL backend integrated with Anthropic AI and PDF text extraction to automatically structure clinical notes and generate trend charts. Browser-based CT viewer supports rotation, zoom, color mapping, and depth adjustment. Unified dashboard provides patient management, clinical feedback annotations, and cross-report multi-metric monitoring. Delivered enterprise-grade firewall and privacy protection alongside improved diagnostic efficiency and doctor-patient communication.',
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
      en: 'Real-time chat platform integrated with LINE LIFF, supporting seamless in-app login and bidirectional instant messaging.',
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
      en: 'Full-stack social dating platform with AI-powered matchmaking, real-time chat, and SEO optimization — indexed by Google.',
    },
    techStack: ['Nuxt 3', 'Tailwind CSS', 'Pinia', 'Express', 'TypeScript', 'MongoDB', 'Socket.io', 'Gemini API'],
    detailedDesc: {
      zh: '獨立負責前後端全端開發，Nuxt 3 + Tailwind CSS + Pinia 建構響應式前端，並以 Gemini API 實作 AI 配對推薦與個人化搜尋；後端採用 Express + TypeScript + MongoDB (Mongoose) 建立 RESTful API 與 JWT 驗證；Socket.io 實現配對後即時一對一通訊與即時通知；CI/CD 透過 GitHub Actions 自動化，前端部署 Vercel、後端部署 Zeabur，並完成 SEO 結構化標記與動態 Sitemap 優化，成功被 Google 收錄。',
      en: 'Led end-to-end full-stack development of a social dating platform. Built responsive frontend with Nuxt 3 + Tailwind CSS + Pinia; integrated Gemini API for AI-driven matchmaking and personalized user search. Backend uses Express + TypeScript + MongoDB (Mongoose) with RESTful APIs and JWT authentication. Socket.io powers real-time 1-on-1 messaging and notifications post-match. CI/CD via GitHub Actions; frontend on Vercel, backend on Zeabur. SEO optimizations including structured markup, meta tags, and dynamic sitemap resulted in Google indexing.',
    },
    links: [
      { label: { zh: '線上展示', en: 'Live Demo' }, url: 'https://104social-front-end.vercel.app/about', icon: 'external' },
      { label: { zh: '專案介紹', en: 'Project Intro' }, url: 'https://drive.google.com/file/d/1wmbvuyqTFCMzf2SSx8XV2MCyxRUAAl6l/view?usp=sharing', icon: 'document' },
      { label: { zh: 'Front-End', en: 'Front-End' }, url: 'https://github.com/south-second-group/104social-front-end/tree/main', icon: 'github' },
      { label: { zh: 'Back-End', en: 'Back-End' }, url: 'https://github.com/roceil/104_Backend/tree/main', icon: 'github' },
    ],
    gallery: {
      id: 'dating',
      images: [
        { src: '/images/dating-google-search.png', alt: '104緣來如此 Google 搜尋收錄截圖', description: '104緣來如此 — Google 搜尋收錄截圖' },
        { src: '/images/dating/screen-1.webp', alt: 'Screenshot 1', description: '交友配對搜尋介面（截圖 1）' },
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
      en: 'Patent infringement checker integrating 4 major LLM APIs (Gemini, OpenAI, Claude, xAI) with multi-model switching and Docker containerized deployment.',
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
      en: 'Taiwan presidential election data visualization platform built with Nuxt 3 SSR + Firebase, with interactive charts and strong SEO.',
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
      en: 'NBA jersey e-commerce site with full cart, filtering, and checkout flow; includes Vitest unit tests and Cypress E2E tests.',
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
    name: { zh: '房價預測與查詢系統', en: 'House Price Prediction & Query System' },
    category: { zh: '資料分析平台', en: 'Data Analytics' },
    categoryColor: 'purple',
    shortDesc: {
      zh: '整合雙模型 ML 預測、互動圖表與爬蟲新聞的台中房價查詢平台，部署於 AWS EC2/RDS。',
      en: 'Taichung house price query and prediction platform combining dual ML models, interactive charts, news crawlers, and air quality data — deployed on AWS.',
    },
    techStack: ['Flask', 'MySQL', 'AWS', 'Python', 'Linear SVR', 'LightGBM', 'pyecharts', 'Folium'],
    detailedDesc: {
      zh: '以 Python Flask 建構台中房價查詢與預測 Web 系統；結合 Linear SVR 與 LightGBM 雙模型預測未來每坪均價趨勢；以 pyecharts 產生互動折線圖與文字雲呈現各區交易熱度；整合新聞爬蟲、空汙 API 及 Folium 地圖；以 bcrypt 實作會員認證，後端採 Flask RESTful API，搭配 MySQL 儲存實價登錄資料，部署於 AWS EC2/RDS。',
      en: 'Built a Taichung house price query and prediction web system with Python Flask. Combined Linear SVR and LightGBM dual-model ensemble to forecast future price-per-ping trends by district. Used pyecharts to render interactive line charts and word clouds visualizing transaction volume heatmaps. Integrated news crawlers, air quality API data, and Folium interactive maps. Implemented bcrypt member authentication; Flask RESTful API backend with MySQL storing official transaction records, deployed on AWS EC2/RDS.',
    },
    links: [
      { label: { zh: 'Demo 影片', en: 'Demo Video' }, url: 'https://youtu.be/x5gwX4TgTUw', icon: 'youtube' },
      { label: { zh: 'GitHub', en: 'GitHub' }, url: 'https://github.com/snowman12320/AI_project2', icon: 'github' },
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
      en: 'A smart queue and ticket management system focused on on-site check-in flow, mobile verification, and business-side management views.',
    },
    techStack: ['Next.js 14', 'TypeScript', 'Supabase', 'HeroUI v2', 'Tailwind CSS', 'Framer Motion', 'react-scan'],
    detailedDesc: {
      zh: 'QueueMaster 是一個以實體店家現場排隊場景為核心的全棧 Web 應用，目標是解決排隊秩序混亂、顧客候位體驗差與手動取號流程繁瑣的問題。專案採用 Next.js 14 App Router 與 TypeScript 建構，透過強型別與元件化設計提升跨頁與跨元件的資料流穩定性；前端搭配 HeroUI v2 與 Tailwind CSS 快速打造響應式 UI，並以 Framer Motion 增加頁面互動流暢度。後端則整合 Supabase（PostgreSQL）作為 BaaS，利用資料庫與 Row Level Security (RLS) 管理隊伍與號碼牌資料，並透過 Supabase CLI 建立本地開發與雲端同步流程，讓我能以更高效率完成整個全端產品的開發與維運。核心功能包含號碼牌彈窗、手機驗證邏輯、企業管理頁面，以及即時的元件效能監控與優化。這個專案很適合用來說明我如何結合前端互動與 Supabase 後端服務，快速打造可用、可維護的產品原型，並強調一人全端開發的實戰能力。',
      en: 'QueueMaster is a full-stack web app centered on real-world queue management for physical stores. It addresses pain points such as chaotic queue flow, poor customer waiting experience, and cumbersome manual ticketing. Built with Next.js 14 App Router and TypeScript, the system uses strong typing and component-based architecture to ensure stable cross-page and cross-component data flow. On the backend, it integrates Supabase as a BaaS layer using PostgreSQL and Row Level Security (RLS) to manage queue and ticket data securely, while Supabase CLI enables local development and cloud sync workflows. This allows me to build and maintain a full-stack product efficiently. Core features include number-ticket modal flows, mobile verification logic, business-side management views, and real-time component performance monitoring via react-scan. This project is a strong example of how I combine frontend interaction design with Supabase-backed backend services to ship maintainable full-stack products quickly.',
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
]
