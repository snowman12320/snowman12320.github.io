# William Resume

這是一個使用 Vue 3 + Vite + TypeScript 建立的個人履歷/作品集網站，提供作品展示、工作經歷、技能矩陣與互動式詳情檢視。

## 特色

- Vue 3 + TypeScript + Vite 的現代前端架構
- Tailwind CSS 提供一致的視覺設計與響應式佈局
- 支援作品與經歷的詳情 modal / lightbox 展示
- 雙語內容支援（中文 / English）
- 可直接部署到 GitHub Pages

## 開發環境

安裝依賴：

```bash
npm install
```

啟動本地開發伺服器：

```bash
npm run dev
```

## 建置

```bash
npm run build
```

## 部署

將變更推送到 `main` 分支後，GitHub Actions 會自動建置並部署靜態檔案到 GitHub Pages。

## 專案結構

```text
src/
  components/   # 頁面元件與 UI 元件
  data/         # 履歷、專案、技能資料
  locales/      # 多語系內容
  assets/       # 樣式與靜態資源
```

## 技術堆疊

- Vue 3
- Vite
- TypeScript
- Tailwind CSS
- Font Awesome
- GLightbox
