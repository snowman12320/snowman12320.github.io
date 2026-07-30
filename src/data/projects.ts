import type { ProjectItem } from '../types'

export const projects: ProjectItem[] = [
  {
    id: 'equipment-rental-system',
    name: '影視器材租賃與檔期系統',
    category: '企業管理系統',
    categoryColor: 'blue',
    shortDesc:
      '為影視製作公司打造的智慧排單系統，解決數百項器材的即時可用量計算、檔期可視化與撞期衝突偵測。',
    techStack: [
      'React',
      'Node.js',
      'OpenAI',
      'Anthropic',
      'Timezone Standardization',
      'Schedule Grid',
      'Inventory Engine',
    ],
    detailedDesc:
      '客戶擁有 30 多大類、數百項影視器材，過去全靠 Excel 排單，旺季撞期嚴重；可用量需動態扣除維修、外借、報廢與外調等多重狀態，人工核算極易出錯；採用 React + Node.js 建置「器材×日期」視覺化檔期大表，搭配即時可用量演算法（總量 − 維修 − 報廢 − 預訂 − 外調），自動偵測排單衝突；全棧統一以 Asia/Taipei 為基準錨定日期，根治時區偏移造成的跨日漏鎖問題；將大表演算法重構為線性複雜度，並優化分類篩選索引策略（精準命中優先、超時退回模糊比對），將 30 秒以上的千筆查詢壓縮至秒級回應；導入 AI（OpenAI + Anthropic）快速生成報價骨架，業務人工確認後完成排單，有效降低重複勞動並減少撞期與超借風險。',
    links: [],
    gallery: {
      id: 'equipment-rental',
      images: [
        { src: '/images/equipment-rental/cover.webp', alt: '影視器材系統封面', description: '影視器材租賃系統主視覺' },
        { src: '/images/equipment-rental/screen-1.webp', alt: '影視器材系統截圖 1', description: '器材管理介面（截圖 1）' },
        { src: '/images/equipment-rental/screen-2.webp', alt: '影視器材系統截圖 2', description: '檔期大表視覺化（截圖 2）' },
        { src: '/images/equipment-rental/screen-3.webp', alt: '影視器材系統截圖 3', description: '可用量演算與排單（截圖 3）' },
        { src: '/images/equipment-rental/screen-4.webp', alt: '影視器材系統截圖 4', description: 'AI 報價骨架功能（截圖 4）' },
      ],
    },
  },
  {
    id: 'food-quotation-system',
    name: '食品階梯報價與型錄系統',
    category: '企業管理系統',
    categoryColor: 'green',
    shortDesc:
      '為 B2B 食品批發商打造的四階梯報價引擎，整合中英雙語型錄、匯率維護與三角色細粒度稽核流程。',
    techStack: [
      'React 18',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Docker',
      'Zeabur',
    ],
    detailedDesc:
      '食品批發商面對 A/B/C/D 四等級客戶需報不同售價，過往 Excel 手算易報錯且成本異動時所有報價需人工逐一修改；建置集中化產品成本庫並綁定四價格帶，業務選擇客戶等級即自動帶入對應售價，並支援單品加價、全單加成與貼標費即時計算；報價與中英雙語型錄共用同一資料源，匯率統一集中維護並留存異動歷程，支援香港市場專用跨境幣別與規格欄位；落實採購、業務、主管三角色逐欄位細權限（前端隱藏元件 + 後端中介層雙重防守），搭配主管核准／退回／鎖定機制與關鍵欄位異動稽核紀錄；以 JWT 驗證身份，Docker 容器化後部署至 Zeabur 平台，成本變動一次更新全線連動，徹底解決版本不一致問題。',
    links: [],
    gallery: {
      id: 'food-quotation',
      images: [
        { src: '/images/food-quotation/cover.webp', alt: '食品報價系統封面', description: '食品階梯報價系統主視覺' },
        { src: '/images/food-quotation/screen-1.webp', alt: '食品報價系統截圖 1', description: '四階梯報價介面（截圖 1）' },
        { src: '/images/food-quotation/screen-2.webp', alt: '食品報價系統截圖 2', description: '型錄管理介面（截圖 2）' },
        { src: '/images/food-quotation/screen-3.webp', alt: '食品報價系統截圖 3', description: '權限與稽核流程（截圖 3）' },
        { src: '/images/food-quotation/screen-4.webp', alt: '食品報價系統截圖 4', description: '匯率與成本維護（截圖 4）' },
      ],
    },
  },
  {
    id: 'tutoring-lms',
    name: '補習班補課系統',
    category: '教育科技平台',
    categoryColor: 'purple',
    shortDesc:
      '為補習班打造的線上補課 LMS，整合動態浮水印防盜、單一裝置登入與學習歷程數據儀表板。',
    techStack: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Payload CMS',
      'LINE Login',
      'Google Login',
      'Dynamic Watermark',
    ],
    detailedDesc:
      '傳統補習班補課影片散落 YouTube/Vimeo 無法集中管理，學生是否看完無從掌握，且帳號共享與非法側錄導致智慧財產流失；採用 Next.js + TypeScript 建置高效能前端與 API，PostgreSQL 儲存結構化學習資料，並整合 Payload CMS 進行彈性內容與多角色權限管理；設計「課程→單元→章節」三層模組，補習班只需貼上 YouTube/Vimeo 連結即自動轉為可追蹤受管課程；自動記錄觀看時長、章節進度、觀看次數與最後學習時間，繪製管理員儀表板提供完成率與熱門課程分析；播放時即時疊加動態身份識別浮水印降低側錄風險，限制單一帳號同時僅能單裝置登入防範共享，並串接 LINE Login 與 Google Login 降低學員使用門檻。',
    links: [],
    gallery: {
      id: 'tutoring-lms',
      images: [
        { src: '/images/tutoring/cover.webp', alt: '補習班系統封面', description: '補習班補課系統主視覺' },
        { src: '/images/tutoring/screen-1.webp', alt: '補習班系統截圖 1', description: '課程管理介面（截圖 1）' },
        { src: '/images/tutoring/screen-2.webp', alt: '補習班系統截圖 2', description: '學習進度儀表板（截圖 2）' },
        { src: '/images/tutoring/screen-3.webp', alt: '補習班系統截圖 3', description: '影片播放與浮水印（截圖 3）' },
        { src: '/images/tutoring/screen-4.webp', alt: '補習班系統截圖 4', description: '帳號管理與登入設定（截圖 4）' },
        { src: '/images/tutoring/screen-5.webp', alt: '補習班系統截圖 5', description: '課程上架流程（截圖 5）' },
        { src: '/images/tutoring/screen-6.webp', alt: '補習班系統截圖 6', description: '數據分析報告（截圖 6）' },
      ],
    },
  },
  {
    id: 'medical-record-ct-platform',
    name: '病歷分析管理系統 + CT 電腦斷層解決方案',
    category: '醫療科技',
    categoryColor: 'purple',
    shortDesc:
      '針對中型醫療機構打造的高資安病歷數位化平台，整合 AI 病歷分析與網頁版 CT 影像檢視流程。',
    techStack: [
      'Python',
      'PostgreSQL',
      'Anthropic',
      'PDF Text Extraction',
      'AI Structured Analysis',
      'CT Web Viewer',
      'Security Firewall',
      'Dashboard Analytics',
    ],
    detailedDesc:
      '以 STAR 架構落地：先針對紙本病歷分散、跨報告難比對、CT 影像不易安全共享的醫療痛點，規劃兼具資安與可用性的整體平台；再以 Python + PostgreSQL 建置後端，串接 Anthropic 與 PDF 文字提取，將臨床內容結構化並自動產出趨勢分析；前端提供網頁版 CT 影像檢視（旋轉、縮放、色彩映射、深度調整）與整合式儀表板（回饋註記、跨報告監控）；最終有效縮短病歷調閱與判讀流程，提升醫病溝通效率，同時維持醫療等級的隱私與防護標準。',
    links: [],
    gallery: {
      id: 'medical-ct',
      images: [
        {
          src: '/images/medical/cover.webp',
          alt: '醫療後台封面畫面',
          description: '醫療後台系統封面與主視覺',
        },
        {
          src: '/images/medical/screen-1.webp',
          alt: '醫療後台功能截圖 1',
          description: '病歷分析管理介面（截圖 1）',
        },
        {
          src: '/images/medical/screen-2.webp',
          alt: '醫療後台功能截圖 2',
          description: '病歷分析管理介面（截圖 2）',
        },
        {
          src: '/images/medical/screen-3.webp',
          alt: '醫療後台功能截圖 3',
          description: '病歷分析管理介面（截圖 3）',
        },
        {
          src: '/images/medical/screen-4.webp',
          alt: '醫療後台功能截圖 4',
          description: '病歷分析管理介面（截圖 4）',
        },
        {
          src: '/images/medical/screen-5.webp',
          alt: '醫療後台功能截圖 5',
          description: '病歷分析管理介面（截圖 5）',
        },
      ],
    },
  },
  {
    id: 'chat-platform',
    name: '聊天平台',
    category: '即時通訊平台',
    categoryColor: 'green',
    shortDesc: '整合 LINE LIFF 的即時通訊平台，支援無縫登入與雙向即時聊天。',
    techStack: ['React', 'Redux', 'TypeScript', 'LINE LIFF'],
    detailedDesc:
      '透過 React + TypeScript 建構聊天室前端，整合 LINE LIFF 一鍵授權登入，並使用 WebSockets 提供低延遲的雙向即時訊息。',
    links: [
      { label: { zh: '線上展示', en: 'Live Demo' }, url: 'https://react-yahoo-message.vercel.app/', icon: 'external' },
      { label: { zh: 'GitHub', en: 'GitHub' }, url: 'https://github.com/snowman12320/react-yahoo-message', icon: 'github' },
    ],
  },
  {
    id: 'dating-platform',
    name: '交友網站',
    category: '全端 Web 應用',
    categoryColor: 'blue',
    shortDesc: '兼顧精美前端互動與高效後端的社群交友平台，支援配對與聊天。',
    techStack: ['Vue / React', 'Node.js', 'Database', 'WebSockets'],
    detailedDesc:
      '獨立負責前後端開發，建立 JWT 驗證與配對邏輯，並以 WebSockets 實作配對後即時一對一聊天。',
    links: [
      { label: { zh: '線上展示', en: 'Live Demo' }, url: 'https://104social-front-end.vercel.app/about', icon: 'external' },
      {
        label: { zh: '專案介紹', en: 'Project Intro' },
        url: 'https://drive.google.com/file/d/1wmbvuyqTFCMzf2SSx8XV2MCyxRUAAl6l/view?usp=sharing',
        icon: 'document',
      },
      {
        label: { zh: 'Front-End', en: 'Front-End' },
        url: 'https://github.com/south-second-group/104social-front-end/tree/main',
        icon: 'github',
      },
      {
        label: { zh: 'Back-End', en: 'Back-End' },
        url: 'https://github.com/roceil/104_Backend/tree/main',
        icon: 'github',
      },
    ],
    gallery: {
      id: 'dating',
      images: [
        {
          src: '/images/dating-google-search.png',
          alt: '104緣來如此 Google 搜尋收錄截圖',
          description: '104緣來如此 — Google 搜尋收錄截圖',
        },
      ],
    },
  },
  {
    id: 'llm-assistant',
    name: 'LLM 應用助理',
    category: 'AI 應用',
    categoryColor: 'purple',
    shortDesc: '整合大語言模型的智慧對話助理，支援多輪記憶與即時串流。',
    techStack: ['Next.js', 'Redux', 'TypeScript', 'LLM API'],
    detailedDesc:
      '採用 Next.js App Router 與 Redux 管理對話狀態，結合 SSE 串流、Markdown 渲染與模型切換能力。',
    links: [
      { label: { zh: '線上展示', en: 'Live Demo' }, url: 'https://patent-infringement-checker.onrender.com/', icon: 'external' },
      { label: { zh: 'GitHub', en: 'GitHub' }, url: 'https://github.com/snowman12320/patent-infringement-checker', icon: 'github' },
    ],
  },
  {
    id: 'content-platform',
    name: '內容資訊平台',
    category: '內容平台',
    categoryColor: 'green',
    shortDesc: '基於 Nuxt 3 + Firebase 的內容平台，強化 SEO 與效能。',
    techStack: ['Nuxt 3', 'TypeScript', 'Firebase', 'SEO'],
    detailedDesc:
      '透過 Nuxt 3 SSR/SSG 提升 LCP 與 SEO，後端以 Firebase Cloud Firestore 與 Authentication 建立內容與權限管理。',
    links: [
      { label: { zh: '線上展示', en: 'Live Demo' }, url: 'https://my-first-project-1110913.web.app/', icon: 'external' },
      { label: { zh: 'GitHub', en: 'GitHub' }, url: 'https://github.com/snowman12320/F2E-nuxt3', icon: 'github' },
    ],
  },
  {
    id: 'shopping-site',
    name: '購物網站',
    category: '電商平台',
    categoryColor: 'blue',
    shortDesc: '完整購物車、篩選與結帳流程的高流暢電商專案。',
    techStack: ['Vue 3', 'Vite', 'Pinia', 'mitt (Event Bus)'],
    detailedDesc:
      '以 Vite + Pinia 建構單頁狀態同步，整合商品大圖檢視、即時過濾、購物車結算與本地快取。',
    links: [
      { label: { zh: '線上展示', en: 'Live Demo' }, url: 'https://snowman12320.github.io/jtown-cli/#/', icon: 'external' },
      { label: { zh: 'Vite + Pinia', en: 'Vite + Pinia' }, url: 'https://github.com/snowman12320/jtown-vite', icon: 'github' },
      { label: { zh: 'Vue CLI + mitt', en: 'Vue CLI + mitt' }, url: 'https://github.com/snowman12320/jtown-cli', icon: 'github' },
    ],
  },
  {
    id: 'house-price',
    name: '房價預測與查詢系統',
    category: '資料分析平台',
    categoryColor: 'purple',
    shortDesc: '整合 Python、資料庫與雲端架構的房價預測與查詢平台。',
    techStack: ['Flask', 'MySQL', 'AWS', 'Python'],
    detailedDesc:
      '後端採用 Flask 開立 RESTful API，搭配 MySQL 儲存實價登錄資料，並部署於 AWS (EC2/RDS) 提供穩定服務。',
    links: [
      { label: { zh: 'Demo 影片', en: 'Demo Video' }, url: 'https://youtu.be/x5gwX4TgTUw', icon: 'youtube' },
      { label: { zh: 'GitHub', en: 'GitHub' }, url: 'https://github.com/snowman12320/AI_project2', icon: 'github' },
    ],
  },
]
