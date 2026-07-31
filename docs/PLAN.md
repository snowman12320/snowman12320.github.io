# 軟體工程師履歷 — 專案計畫

## 需求摘要

| 項目              | 決定                                                |
| ----------------- | --------------------------------------------------- |
| 版面配置          | 單頁式，垂直滾動                                    |
| 主要區塊          | 個人資訊、技能、經歷、專案                          |
| 互動功能          | 進階（動畫、hover 效果、深色模式切換）              |
| 列印友善          | 支援列印成 PDF                                      |
| 個人資訊呈現      | 簡約型（姓名、標題、email、電話、LinkedIn、GitHub） |
| 技能展示          | 分類列表，使用 Badge 標籤                           |
| 經歷 / 專案       | 精簡預覽 + 展開按鈕查看詳情                         |
| 深色模式          | 手動切換（預設淺色），存入 localStorage             |
| 配色風格          | 專業商務 — 藍色系 + 灰色系                          |
| Tailwind 引入方式 | CDN（`@tailwindcss/browser@4`）                     |

> **補充**：原生語法冗長時，優先使用框架（如 Alpine.js）替代手寫 JS。

---

## 技術選型

| 技術         | 版本 / 說明                                      |
| ------------ | ------------------------------------------------ |
| HTML         | HTML5                                            |
| Tailwind CSS | v4（CDN via jsDelivr）                           |
| Alpine.js    | v3（CDN）— 處理展開/收合、深色模式切換等互動邏輯 |
| SVG Icons    | Heroicons（inline SVG，無需額外依賴）            |

### 為何使用 Alpine.js？

原生 JS 處理多個展開/收合元件需要大量 `querySelector` + 事件委託，程式碼冗長且難以維護。  
Alpine.js 透過 HTML 屬性（`x-data`、`x-show`、`@click`）即可完成同等功能，且為 CDN 引入、無建置步驟、與 Tailwind 設計哲學一致。

---

## 頁面結構

```
index.html
├── <head>
│   ├── Tailwind CDN script
│   ├── Alpine.js CDN script (defer)
│   ├── 防 FOUC 腳本（inline，讀取 localStorage 設定初始主題）
│   └── <style type="text/tailwindcss">
│       ├── @custom-variant dark (&:where(.dark,.dark *));
│       ├── @theme { 自訂色彩 token }
│       └── @media print { 列印優化樣式 }
│
└── <body x-data="themeStore()" :class="{ dark: isDark }">
    ├── <header>  Navbar（姓名 + 深色模式切換按鈕）
    ├── <section> Hero（個人資訊 + 聯絡方式）
    ├── <section> Skills（分類技能 Badges）
    ├── <section> Experience（經歷，Alpine 展開/收合）
    ├── <section> Projects（專案卡片，Alpine 展開/收合）
    ├── <footer>  版權資訊
    └── <script>  Alpine.data() 定義
```

---

## Task Breakdown

### Task 1 — 建立 PLAN.md ✅

記錄完整專案計畫（即本文件）。

---

### Task 2 — 基礎 HTML 骨架與 Tailwind v4 CDN 設定

**目標**：建立 `index.html`，設定所有依賴與主題基礎。

**實作重點**：

- 引入 Tailwind v4 CDN：`<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4">`
- 引入 Alpine.js CDN：`<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js">`
- 防 FOUC 腳本（inline，置於 `<head>` 最上方）：
  ```html
  <script>
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
    );
  </script>
  ```
- `<style type="text/tailwindcss">` 內含：
  - `@custom-variant dark (&:where(.dark,.dark *));`
  - `@theme` 定義主色（blue-600）、背景、文字 token
  - `@media print` 基礎規則（隱藏按鈕、展開所有區塊）
- body 設定：`bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`

**驗收標準**：瀏覽器開啟後，Tailwind class 正常套用，背景色正確，開發者工具無錯誤。

---

### Task 3 — Navbar

**目標**：固定在頁面頂部的導覽列，含姓名與深色模式切換按鈕。

**實作重點**：

- `sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800`
- 左側：姓名（連結至頁面頂部）
- 右側：深色模式切換按鈕（使用 Alpine `@click` + `x-text` 或 `x-show` 切換圖示 🌙 / ☀️）
- Alpine 邏輯：
  ```html
  <button @click="toggleDark()">
    <span x-show="!isDark">🌙</span>
    <span x-show="isDark">☀️</span>
  </button>
  ```
- `toggleDark()` 方法：toggle `dark` class on `<html>` + 存入 `localStorage.theme`

**驗收標準**：點擊按鈕可切換深淺模式；重新整理後設定保留；Navbar 滾動時保持固定。

---

### Task 4 — Hero 區塊

**目標**：頁面頂部個人資訊區塊，含姓名、職稱、一行自我介紹、聯絡資訊。

**實作重點**：

- `py-20 px-4 max-w-4xl mx-auto`
- 姓名：`text-4xl md:text-5xl font-bold text-blue-600`
- 職稱：`text-xl text-gray-500 dark:text-gray-400 mt-2`
- 一行自我介紹：`text-gray-600 dark:text-gray-300 mt-4 max-w-2xl`
- 聯絡資訊列：`flex flex-wrap gap-4 mt-6`，每項含 Heroicon SVG + 文字連結
- 連結 hover：`hover:text-blue-600 dark:hover:text-blue-400 transition-colors`
- 列印：聯絡資訊顯示完整 URL（`print:after:content-[attr(href)]`）

**驗收標準**：手機版單欄排列，桌面版橫向，hover 效果正常，深色模式顏色正確。

---

### Task 5 — 技能區塊

**目標**：依類別分組的技能 Badges。

**實作重點**：

- 分類：前端、後端、資料庫、DevOps、工具
- Section 標題樣式：`text-2xl font-bold` + `border-b-2 border-blue-600 pb-2 mb-8`
- 類別標題：`text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3`
- Badge 樣式：
  ```
  inline-block px-3 py-1 rounded-full text-sm font-medium
  bg-blue-50 dark:bg-blue-900/30
  text-blue-700 dark:text-blue-300
  hover:bg-blue-100 dark:hover:bg-blue-800/50
  hover:scale-105 transition-all cursor-default
  ```

**驗收標準**：Badge 換行正常，深色模式顏色清晰，hover 放大效果流暢。

---

### Task 6 — 經歷區塊

**目標**：經歷列表，精簡預覽 + Alpine 展開詳情。

**實作重點**：

- 每筆經歷外層：`x-data="{ open: false }"`
- 預設顯示：公司名稱、職位、時間、3-5 個 bullet points
- 展開按鈕：`@click="open = !open"`，使用 `x-text` 顯示「▼ 查看詳情 / ▲ 收合」
- 詳情區塊：`x-show="open"` + `x-transition`（Alpine 內建淡入動畫）
- 詳情內容：技術 Badges + 成果數據（數字 `font-bold text-blue-600`）

**驗收標準**：展開/收合動畫流暢；多筆經歷各自獨立；深色模式樣式正確；列印時全部展開。

---

### Task 7 — 專案區塊

**目標**：卡片式專案列表，精簡預覽 + Alpine 展開詳情。

**實作重點**：

- Grid：`grid grid-cols-1 md:grid-cols-2 gap-5`
- 卡片外層：`x-data="{ open: false }"` + `rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-lg transition-shadow`
- 預設顯示：專案名稱、一行描述、主要技術 Badges（最多 3 個）
- 展開按鈕：同 Task 6 機制
- 詳情內容：詳細說明 + 全部技術 Badges + GitHub 連結 + Demo 連結按鈕

**驗收標準**：手機版單欄，桌面版雙欄；卡片 hover 陰影效果；展開詳情與 Task 6 一致。

---

### Task 8 — 動畫、列印優化與最終整合

**目標**：加入 scroll-reveal 進場動畫、完整列印 CSS、最終視覺整合。

**實作重點**：

- Scroll-reveal：Intersection Observer API，各 section 進入視窗時加入 `opacity-100 translate-y-0`，初始為 `opacity-0 translate-y-6`
- 列印 CSS（`@media print`）：
  - `header { display: none }` — 隱藏 Navbar
  - `[x-show]` 詳情區塊強制顯示（透過 CSS `!important`）
  - 移除 `box-shadow`、設定 `color: black`、適當頁面邊距
  - 每個 Section 避免跨頁斷裂（`break-inside: avoid`）
- `<footer>`：版權資訊、年份
- 最終整合：確認所有 section 間距（`py-16`）、標題樣式一致、色彩 token 統一

**驗收標準**：瀏覽器列印預覽輸出乾淨 PDF；Scroll-reveal 進場動畫順暢；全頁視覺風格一致。

---

## 檔案結構

```
resume/
├── PLAN.md       # 本計畫文件
└── index.html    # 單一頁面（所有 CSS/JS 內嵌）
```

---

## 時程

| Task | 描述                                  | 狀態    |
| ---- | ------------------------------------- | ------- |
| 1    | 建立 PLAN.md                          | ✅ 完成 |
| 2    | 基礎 HTML 骨架與 Tailwind v4 CDN 設定 | ✅ 完成 |
| 3    | Navbar（深色模式切換）                | ✅ 完成 |
| 4    | Hero 區塊                             | ✅ 完成 |
| 5    | 技能區塊                              | ✅ 完成 |
| 6    | 經歷區塊                              | ✅ 完成 |
| 7    | 專案區塊                              | ✅ 完成 |
| 8    | 動畫、列印優化與最終整合              | ✅ 完成 |
