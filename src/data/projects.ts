import type { ProjectItem } from '../types'

export const projects: ProjectItem[] = [
  {
    id: 'chat-platform',
    name: '聊天平台',
    category: 'LINE LIFF',
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
    category: 'Full-stack',
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
    category: 'AI LLM',
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
    category: 'SSR / SSG',
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
    category: 'SPA',
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
    category: 'Cloud & DB',
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
