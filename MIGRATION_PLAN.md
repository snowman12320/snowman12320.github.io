# 計畫：履歷網站遷移至 Vue 3 + Vite

## Context

目前履歷為單一 `index.html`（2000+ 行），使用 Alpine.js + Tailwind CDN，存放於 `snowman12320.github.io` repo（`/Users/william/Documents/resume`）。
目標：**在同一個 repo 內**遷移至 Vue 3 + Vite + TypeScript，原 `index.html` 備份後由 Vite 產出的 `dist/` 取代，並建立 GitHub Actions 自動部署至 GitHub Pages。

> 現有檔案處理：`index.html`、`theme.js`、`reveal.js`、`styles.css` 保留為備份（可加 `.bak` 後綴或移至 `_legacy/`），`images/` 移至 `public/images/`。

---

## 技術選型

| 項目 | 選擇 | 理由 |
|------|------|------|
| Framework | Vue 3 + Vite | 符合主力技能 |
| 語言 | TypeScript | 型別安全 |
| 樣式 | Tailwind CSS v4 + Vite plugin | 取代 CDN |
| i18n | vue-i18n v9 | 取代 152 個 x-show 雙語切換 |
| 圖片燈箱 | glightbox（npm） | 沿用現有套件 |
| Icons | @fortawesome/vue-fontawesome + lucide-vue-next | npm 版本 |
| 部署 | GitHub Actions → gh-pages branch | 自動化 |

---

## 專案結構

在現有 repo 根目錄（`/Users/william/Documents/resume`）直接初始化：

```
snowman12320.github.io/              ← 現有 repo，原地改造
├── _legacy/                         ← 備份原始檔（index.html、theme.js、reveal.js、styles.css）
├── public/
│   └── images/                      ← 從現有 images/ 移入
├── src/
│   ├── main.ts
│   ├── App.vue                      ← 全域 dark/lang 狀態、layout
│   ├── composables/
│   │   ├── useTheme.ts              ← isDark + toggleDark + FOUC 防止
│   │   └── useLang.ts               ← lang + toggleLang（搭配 vue-i18n）
│   ├── components/
│   │   ├── TheNavbar.vue
│   │   ├── TheHero.vue
│   │   ├── TheExperience.vue        ← 迴圈渲染 ExperienceItem
│   │   ├── ExperienceItem.vue       ← 單筆經歷（展開/收合）
│   │   ├── TheProjects.vue          ← 迴圈渲染 ProjectCard
│   │   ├── ProjectCard.vue          ← 單筆專案（展開/收合）
│   │   ├── TheSkills.vue
│   │   └── TheFooter.vue
│   ├── data/
│   │   ├── experience.ts            ← 8 筆工作經歷資料
│   │   ├── projects.ts              ← 6 筆專案資料
│   │   └── skills.ts                ← 6 大類技能資料
│   ├── types/
│   │   └── index.ts                 ← ExperienceItem / ProjectItem / SkillCategory 介面
│   ├── locales/
│   │   ├── zh.ts                    ← 中文 UI 文字
│   │   └── en.ts                    ← 英文 UI 文字
│   └── assets/
│       └── main.css                 ← Tailwind 指令 + .badge / .section-title / .reveal
├── .github/
│   └── workflows/
│       └── deploy.yml               ← GitHub Actions 自動部署
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 型別定義（`src/types/index.ts`）

```typescript
export interface I18nText { zh: string; en: string }

export interface ExperienceItem {
  id: string
  position: I18nText
  company: I18nText
  location: I18nText
  period: string
  bullets: { zh: string[]; en: string[] }
  techStack: string[]
  links?: { label: I18nText; url: string; icon: string }[]
  gallery?: { id: string; images: { src: string; description: string }[] }
}

export interface ProjectItem {
  id: string
  name: string                      // 中文，無 i18n
  category: string
  categoryColor: string             // 'blue' | 'green' | 'purple'
  shortDesc: string                 // 中文簡述
  techStack: string[]
  detailedDesc: string              // 中文詳述
  links: { label: I18nText; url: string; icon: string }[]
  gallery?: { id: string; images: { src: string; alt: string; description: string }[] }
}

export interface SkillCategory {
  id: string
  title: I18nText
  icon: string                      // Font Awesome class
  skills: string[]
}
```

---

## 關鍵實作細節

### 1. FOUC 防止（深色模式閃爍）
在 `index.html` 的 `<head>` 保留 inline script，與原版相同：
```html
<script>
  const s = localStorage.getItem('theme');
  const d = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (s === 'dark' || (!s && d)) document.documentElement.classList.add('dark');
</script>
```

### 2. Tailwind v4 設定
使用 `@tailwindcss/vite` plugin，Tailwind 指令寫在 `src/assets/main.css`，加入 `darkMode: 'class'`。

### 3. Scroll-reveal
將 `reveal.js` 邏輯改為 Vue composable（`useReveal`）或 `vOnDirective`，在 `onMounted` 時初始化 IntersectionObserver。

### 4. GLightbox 初始化
在需要燈箱的元件（ExperienceItem、ProjectCard）的 `onMounted` 呼叫 `GLightbox({ selector: '.glightbox' })`。

### 5. GitHub Actions（`.github/workflows/deploy.yml`）
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 6. vite.config.ts base 路徑
```typescript
base: '/'   // snowman12320.github.io 個人頁，不需子路徑
```

---

## 遷移步驟

1. 備份：將 `index.html`、`theme.js`、`reveal.js`、`styles.css` 移至 `_legacy/`
2. 在 repo 根目錄執行 `npm create vite@latest . -- --template vue-ts`（`.` 代表當前目錄）
3. 安裝依賴：`tailwindcss` / `vue-i18n` / `glightbox` / `@fortawesome/...` / `lucide-vue-next`
3. 建立型別定義（`src/types/index.ts`）
4. 將 HTML 中的資料抽取至 `src/data/*.ts`（experience、projects、skills）
5. 建立 locales（zh/en UI 文字）
6. 逐一實作元件（Navbar → Hero → Experience → Projects → Skills → Footer）
7. 設定 `main.css` Tailwind 指令 + 自訂樣式
8. 複製 `images/` 至 `public/images/`
9. 新增 `.github/workflows/deploy.yml`
10. 測試 `npm run build` 後推送，確認 GitHub Pages 正常運作

---

## 驗證方式

- `npm run dev`：本機檢查深色/淺色、中英切換、展開收合、GLightbox
- `npm run build && npx serve dist`：確認 build 產出正常
- Push 後檢查 GitHub Actions 執行結果與 `https://snowman12320.github.io/` 線上頁面
