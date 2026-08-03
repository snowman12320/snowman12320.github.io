# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modal.spec.ts >> experience modal accordion expands and collapses contribution sections
- Location: tests/e2e/modal.spec.ts:61:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.modal-sheet').locator('button[type="button"]').first()
    - locator resolved to <button title="複製連結" type="button" aria-label="複製連結" class="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 100ms
    54 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <button data-v-de19c3f0="" aria-label="Close modal" class="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-lg text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">…</button> intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e4]:
        - link "陳威良 William" [ref=e5] [cursor=pointer]:
          - /url: "#/"
        - navigation [ref=e6]:
          - link "經歷" [ref=e7] [cursor=pointer]:
            - /url: "#experience"
          - link "專案" [ref=e8] [cursor=pointer]:
            - /url: "#projects"
          - link "技能" [ref=e9] [cursor=pointer]:
            - /url: "#skills"
        - generic [ref=e10]:
          - button "Switch to English" [ref=e11]:
            - generic [ref=e16]: EN
          - button "切換為深色模式" [ref=e17]
          - button "列印精簡履歷" [ref=e20]
          - button "公司" [ref=e24]
    - main [ref=e28]:
      - generic [ref=e29]:
        - generic [ref=e31]:
          - img "陳威良 William 大頭照" [ref=e32]
          - generic [ref=e33]:
            - heading "陳威良 William" [level=1] [ref=e34]
            - paragraph [ref=e35]: 軟體工程師
            - paragraph [ref=e38]: 台灣・臺南市
            - paragraph [ref=e41]: 擁有豐富的前端與全端開發經驗，曾參與企業級入口網站、即時直播平台與電商系統的開發，服務橫跨台灣與加拿大的遠端團隊。擅長 Vue.js、React.js、Next.js、Nuxt.js 等現代 JavaScript / TypeScript 技術棧，並具備 Node.js、BFF 架構、SQL 與 Docker 等後端整合能力。
        - generic [ref=e42]:
          - link "snowman12320@gmail.com" [ref=e43] [cursor=pointer]:
            - /url: mailto:snowman12320@gmail.com
          - link "0976103738" [ref=e46] [cursor=pointer]:
            - /url: tel:+886976103738
          - link "william-chen-dev" [ref=e49] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/william-chen-dev/
          - link "snowman12320" [ref=e52] [cursor=pointer]:
            - /url: https://github.com/snowman12320
      - generic [ref=e55]:
        - heading "經歷" [level=2] [ref=e56]
        - generic [ref=e59]:
          - button "查看詳情 2024/02 — 2026/08 ·2y 7m 全端工程師 玩藝國際股份有限公司（Fun Show） 台灣・臺南市（遠端）" [active] [ref=e60]:
            - generic "查看詳情" [ref=e62]
            - generic [ref=e66]:
              - text: 2024/02 — 2026/08
              - generic [ref=e67]: ·2y 7m
            - generic [ref=e68]:
              - heading "全端工程師" [level=3] [ref=e69]
              - paragraph [ref=e70]: 玩藝國際股份有限公司（Fun Show）
              - paragraph [ref=e71]: 台灣・臺南市（遠端）
          - button "查看詳情 2024/10 — 2026/07 ·1y 10m 全端工程師 恆遠數位行銷（ForeverWebs） 遠端" [ref=e74]:
            - generic "查看詳情" [ref=e76]
            - generic [ref=e80]:
              - text: 2024/10 — 2026/07
              - generic [ref=e81]: ·1y 10m
            - generic [ref=e82]:
              - heading "全端工程師" [level=3] [ref=e83]
              - paragraph [ref=e84]: 恆遠數位行銷（ForeverWebs）
              - paragraph [ref=e85]: 遠端
          - button "查看詳情 2025/10 — 2026/04 ·7m 全端工程師 永明金融（Sun Life） 加拿大（遠端）" [ref=e88]:
            - generic "查看詳情" [ref=e90]
            - generic [ref=e94]:
              - text: 2025/10 — 2026/04
              - generic [ref=e95]: ·7m
            - generic [ref=e96]:
              - heading "全端工程師" [level=3] [ref=e97]
              - paragraph [ref=e98]: 永明金融（Sun Life）
              - paragraph [ref=e99]: 加拿大（遠端）
        - button "查看更多經歷 (7+)" [ref=e103]
      - generic [ref=e107]:
        - heading "專案" [level=2] [ref=e108]
        - generic [ref=e111]:
          - button "全部" [ref=e112]
          - button "企業管理系統" [ref=e113]
          - button "教育科技平台" [ref=e114]
          - button "醫療科技" [ref=e115]
          - button "即時通訊平台" [ref=e116]
          - button "交友平台" [ref=e117]
          - button "AI 應用" [ref=e118]
          - button "內容平台" [ref=e119]
          - button "電商平台" [ref=e120]
          - button "資料分析平台" [ref=e121]
          - button "排隊管理系統" [ref=e122]
          - button "企業應用系統" [ref=e123]
          - button "電商與後台系統" [ref=e124]
          - button "校內系統與報表平台" [ref=e125]
          - button "直播平台" [ref=e126]
        - generic [ref=e127]:
          - button "查看詳情 企業管理系統 影視器材租賃與檔期系統 為影視製作公司打造的智慧排單系統，解決數百項器材的即時可用量計算、檔期可視化與撞期衝突偵測。 React Node.js OpenAI Anthropic Schedule Grid Inventory Engine" [ref=e128]:
            - generic "查看詳情" [ref=e129]
            - generic [ref=e132]:
              - generic [ref=e133]: 企業管理系統
              - heading "影視器材租賃與檔期系統" [level=3] [ref=e134]
              - paragraph [ref=e135]: 為影視製作公司打造的智慧排單系統，解決數百項器材的即時可用量計算、檔期可視化與撞期衝突偵測。
              - generic [ref=e136]:
                - generic [ref=e137]: React
                - generic [ref=e138]: Node.js
                - generic [ref=e139]: OpenAI
                - generic [ref=e140]: Anthropic
                - generic [ref=e141]: Schedule Grid
                - generic [ref=e142]: Inventory Engine
          - button "查看詳情 企業管理系統 食品階梯報價與型錄系統 為 B2B 食品批發商打造的四階梯報價引擎，整合中英雙語型錄、匯率維護與三角色細粒度稽核流程。 React 18 Node.js Express MongoDB Mongoose JWT Docker Zeabur" [ref=e143]:
            - generic "查看詳情" [ref=e144]
            - generic [ref=e147]:
              - generic [ref=e148]: 企業管理系統
              - heading "食品階梯報價與型錄系統" [level=3] [ref=e149]
              - paragraph [ref=e150]: 為 B2B 食品批發商打造的四階梯報價引擎，整合中英雙語型錄、匯率維護與三角色細粒度稽核流程。
              - generic [ref=e151]:
                - generic [ref=e152]: React 18
                - generic [ref=e153]: Node.js
                - generic [ref=e154]: Express
                - generic [ref=e155]: MongoDB
                - generic [ref=e156]: Mongoose
                - generic [ref=e157]: JWT
                - generic [ref=e158]: Docker
                - generic [ref=e159]: Zeabur
          - button "查看詳情 教育科技平台 補習班補課系統 為補習班打造的線上補課 LMS，整合動態浮水印防盜、單一裝置登入與學習歷程數據儀表板。 Next.js TypeScript PostgreSQL Payload CMS LINE Login Google Login Dynamic Watermark" [ref=e160]:
            - generic "查看詳情" [ref=e161]
            - generic [ref=e164]:
              - generic [ref=e165]: 教育科技平台
              - heading "補習班補課系統" [level=3] [ref=e166]
              - paragraph [ref=e167]: 為補習班打造的線上補課 LMS，整合動態浮水印防盜、單一裝置登入與學習歷程數據儀表板。
              - generic [ref=e168]:
                - generic [ref=e169]: Next.js
                - generic [ref=e170]: TypeScript
                - generic [ref=e171]: PostgreSQL
                - generic [ref=e172]: Payload CMS
                - generic [ref=e173]: LINE Login
                - generic [ref=e174]: Google Login
                - generic [ref=e175]: Dynamic Watermark
          - button "查看詳情 醫療科技 病歷分析管理系統 + CT 電腦斷層解決方案 針對中型醫療機構打造的高資安病歷數位化平台，整合 AI 病歷分析與網頁版 CT 影像檢視流程。 Python PostgreSQL Anthropic PDF Text Extraction AI Structured Analysis CT Web Viewer Security Firewall Dashboard Analytics" [ref=e176]:
            - generic "查看詳情" [ref=e177]
            - generic [ref=e180]:
              - generic [ref=e181]: 醫療科技
              - heading "病歷分析管理系統 + CT 電腦斷層解決方案" [level=3] [ref=e182]
              - paragraph [ref=e183]: 針對中型醫療機構打造的高資安病歷數位化平台，整合 AI 病歷分析與網頁版 CT 影像檢視流程。
              - generic [ref=e184]:
                - generic [ref=e185]: Python
                - generic [ref=e186]: PostgreSQL
                - generic [ref=e187]: Anthropic
                - generic [ref=e188]: PDF Text Extraction
                - generic [ref=e189]: AI Structured Analysis
                - generic [ref=e190]: CT Web Viewer
                - generic [ref=e191]: Security Firewall
                - generic [ref=e192]: Dashboard Analytics
        - generic [ref=e193]:
          - button "上一頁" [disabled] [ref=e194]
          - button "1" [ref=e195]
          - button "2" [ref=e196]
          - button "3" [ref=e197]
          - button "4" [ref=e198]
          - button "下一頁" [ref=e199]
      - generic [ref=e200]:
        - heading "技能" [level=2] [ref=e201]
        - generic [ref=e204]:
          - generic [ref=e205]:
            - paragraph [ref=e206]: AI 驅動開發與 MCP 工具鏈
            - generic [ref=e209]:
              - generic [ref=e210]: Cursor
              - generic [ref=e211]: Claude Code CLI
              - generic [ref=e212]: LLM API Integration
              - generic [ref=e213]: Prompt Engineering
              - generic [ref=e214]: AI-Assisted TDD
              - generic [ref=e215]: Figma MCP
              - generic [ref=e216]: v0.dev / Lovable
              - generic [ref=e217]: Context7 / Docs MCP
              - generic [ref=e218]: Chrome DevTools MCP
              - generic [ref=e219]: Supabase MCP
              - generic [ref=e220]: GitHub MCP
              - generic [ref=e221]: Claude-Mem
          - generic [ref=e222]:
            - paragraph [ref=e223]: 前端與跨平台開發
            - generic [ref=e226]:
              - generic [ref=e227]: Vue 3 / Nuxt 3
              - generic [ref=e228]: React 18 / Next.js
              - generic [ref=e229]: TypeScript
              - generic [ref=e230]: Composition API / React Hooks
              - generic [ref=e231]: Tailwind CSS
              - generic [ref=e232]: Pinia / Redux
              - generic [ref=e233]: Shadcn UI
              - generic [ref=e234]: Ant Design
              - generic [ref=e235]: React Native
              - generic [ref=e236]: JavaScript (ES6+)
              - generic [ref=e237]: SCSS
              - generic [ref=e238]: Responsive Design
          - generic [ref=e239]:
            - paragraph [ref=e240]: 後端架構與系統設計
            - generic [ref=e243]:
              - generic [ref=e244]: Node.js
              - generic [ref=e245]: Express
              - generic [ref=e246]: Flask
              - generic [ref=e247]: PostgreSQL
              - generic [ref=e248]: MongoDB
              - generic [ref=e249]: Redis
              - generic [ref=e250]: RESTful API
              - generic [ref=e251]: WebSockets
              - generic [ref=e252]: Prisma / Mongoose ORM
              - generic [ref=e253]: Microservices
          - generic [ref=e254]:
            - paragraph [ref=e255]: DevOps 與雲端開發
            - generic [ref=e258]:
              - generic [ref=e259]: Docker
              - generic [ref=e260]: Kubernetes (K8s)
              - generic [ref=e261]: GitHub Actions
              - generic [ref=e262]: Jenkins
              - generic [ref=e263]: AWS (EC2 / S3 / Lambda)
              - generic [ref=e264]: Vercel
              - generic [ref=e265]: Zeabur
              - generic [ref=e266]: Git / GitHub / GitLab
              - generic [ref=e267]: Nginx
              - generic [ref=e268]: Terraform
              - generic [ref=e269]: CI/CD Pipeline
              - generic [ref=e270]: Cloud Architecture
          - generic [ref=e271]:
            - paragraph [ref=e272]: 測試與品質管控
            - generic [ref=e275]:
              - generic [ref=e276]: Vitest
              - generic [ref=e277]: Cypress
              - generic [ref=e278]: Playwright
              - generic [ref=e279]: MSW (Mock Service Worker)
              - generic [ref=e280]: TDD Methodology
              - generic [ref=e281]: ESLint
              - generic [ref=e282]: Prettier
              - generic [ref=e283]: Husky
              - generic [ref=e284]: lint-staged
              - generic [ref=e285]: SonarQube
          - generic [ref=e286]:
            - paragraph [ref=e287]: 第三方整合與安全性
            - generic [ref=e290]:
              - generic [ref=e291]: OAuth 2.0 / OIDC
              - generic [ref=e292]: JWT
              - generic [ref=e293]: Keycloak
              - generic [ref=e294]: Auth0
              - generic [ref=e295]: Stripe / Payuni / LINE Pay
              - generic [ref=e296]: LINE Platform (LIFF / Bot / Login / Notify)
              - generic [ref=e297]: Twilio SMS
              - generic [ref=e298]: Google Maps API
              - generic [ref=e299]: Email Service (Resend / SendGrid)
              - generic [ref=e300]: Analytics (GA / Umami)
              - generic [ref=e301]: Sentry
              - generic [ref=e302]: Webhook / Zapier / Make
    - contentinfo [ref=e303]: © 2026 陳威良 William. Built with Vue 3 + Vite + Tailwind CSS.
  - generic [ref=e304]:
    - button "Close modal" [ref=e305]
    - generic [ref=e306]:
      - button "Close modal" [ref=e307]
      - generic [ref=e310]:
        - generic [ref=e311]:
          - heading "全端工程師" [level=3] [ref=e312]
          - paragraph [ref=e313]: 玩藝國際股份有限公司（Fun Show）
          - paragraph [ref=e314]: 2024/02 — 2026/08 · 2y 7m
        - button "複製連結" [ref=e315]
      - generic [ref=e318]:
        - list [ref=e319]:
          - listitem [ref=e320]: 開發具備即時串流、場景管理、連播 UI 與 OBS 整合的直播控制平台。
          - listitem [ref=e321]: 整合 Keycloak 認證與 Payuni 金流，實現訂閱方案的信用卡安全交易。
          - listitem [ref=e322]: 透過 Server-Sent Events（SSE）實作即時通知，並以 Quasar Framework 開發無限捲動預覽元件。
          - listitem [ref=e323]: 建立 Jenkins 自動化 CI/CD 建置管線，管理跨分支的生產環境部署。
          - listitem [ref=e324]: 撰寫單元測試，並以 Mock Service Worker（MSW）簡化 RESTful API 測試流程。
        - paragraph [ref=e325]: 技術棧
        - generic [ref=e326]:
          - generic [ref=e327]: Vue 3
          - generic [ref=e328]: Quasar Framework
          - generic [ref=e329]: TypeScript
          - generic [ref=e330]: Keycloak
          - generic [ref=e331]: SSE
          - generic [ref=e332]: OBS Integration
          - generic [ref=e333]: Jenkins CI/CD
          - generic [ref=e334]: MSW
          - generic [ref=e335]: Vitest
        - generic [ref=e336]:
          - paragraph [ref=e337]: 貢獻度
          - generic [ref=e338]:
            - generic [ref=e339]:
              - button "性能提升" [ref=e340]
              - list [ref=e350]:
                - listitem [ref=e351]:
                  - generic [ref=e353]: 支援 5,000+ 並發 WebSocket 連線，實時直播聊天與互動不延遲（透過 Socket.IO 房間分片與 Redis 轉發，解決單一節點瓶頸，確保高並發聊天互動穩定不延遲）
                - listitem [ref=e354]:
                  - generic [ref=e356]: 頁面加載時間從 3.2s 優化至 0.8s（75% 性能提升）（透過路由懶加載、Tree Shaking 與資源預載，解決首屏資源過載問題，達成 75% 性能提升）
                - listitem [ref=e357]:
                  - generic [ref=e359]: 導播控制台響應延遲控制在 < 100ms，提升操作體驗（透過虛擬滾動與 WebSocket 狀態同步，解決大量場景資料渲染卡頓問題，讓控制台操作即時反饋）
                - listitem [ref=e360]:
                  - generic [ref=e362]: 無限滾動媒體資源管理，支援 10,000+ 媒體項目無感加載（透過 Intersection Observer 與分頁預取，解決大量圖片影片一次性載入過慢問題，實現無感滾動加載）
            - button "程式品質" [ref=e364]
            - button "商業影響" [ref=e373]
            - button "開發效率" [ref=e382]
```

# Test source

```ts
  1   | import { expect, test } from '@playwright/test'
  2   | 
  3   | test('project card opens detail modal', async ({ page }) => {
  4   |   await page.goto('/')
  5   | 
  6   |   const firstProjectCard = page.locator('#projects .group').first()
  7   |   await expect(firstProjectCard).toBeVisible()
  8   | 
  9   |   await firstProjectCard.click()
  10  |   await page.pause()
  11  | 
  12  |   const modal = page.locator('.modal-sheet')
  13  |   await expect(modal).toBeVisible()
  14  | 
  15  |   await expect(modal.locator('h3')).toHaveCount(1)
  16  | 
  17  |   await page.keyboard.press('Escape')
  18  |   await expect(modal).not.toBeVisible()
  19  | })
  20  | 
  21  | test('experience card opens detail modal', async ({ page }) => {
  22  |   await page.goto('/')
  23  | 
  24  |   const firstExperience = page.locator('#experience [role="button"].group').first()
  25  |   await expect(firstExperience).toBeVisible()
  26  | 
  27  |   await firstExperience.click()
  28  | 
  29  |   const modal = page.locator('.modal-sheet')
  30  |   await expect(modal).toBeVisible()
  31  | 
  32  |   await expect(modal.locator('h3')).toContainText(/軟體工程師|工程師|Developer/i)
  33  | 
  34  |   await page.keyboard.press('Escape')
  35  |   await expect(modal).not.toBeVisible()
  36  | })
  37  | 
  38  | test('modal closes when clicking the ✕ close button', async ({ page }) => {
  39  |   await page.goto('/')
  40  | 
  41  |   await page.locator('#projects .group').first().click()
  42  |   const modal = page.locator('.modal-sheet')
  43  |   await expect(modal).toBeVisible()
  44  | 
  45  |   await modal.getByRole('button', { name: /close modal/i }).click()
  46  |   await expect(modal).not.toBeVisible()
  47  | })
  48  | 
  49  | test('modal closes when clicking the backdrop overlay', async ({ page }) => {
  50  |   await page.goto('/')
  51  | 
  52  |   await page.locator('#projects .group').first().click()
  53  |   const modal = page.locator('.modal-sheet')
  54  |   await expect(modal).toBeVisible()
  55  | 
  56  |   // Click outside the modal panel (the dark backdrop behind it)
  57  |   await page.mouse.click(10, 10)
  58  |   await expect(modal).not.toBeVisible()
  59  | })
  60  | 
  61  | test('experience modal accordion expands and collapses contribution sections', async ({ page }) => {
  62  |   await page.goto('/')
  63  | 
  64  |   await page.locator('#experience [role="button"].group').first().click()
  65  |   const modal = page.locator('.modal-sheet')
  66  |   await expect(modal).toBeVisible()
  67  | 
  68  |   // Wait for the accordion headers to appear
  69  |   const accordionHeaders = modal.locator('button[type="button"]')
  70  |   const count = await accordionHeaders.count()
  71  | 
  72  |   if (count > 0) {
  73  |     const firstHeader = accordionHeaders.first()
  74  |     const headerText = await firstHeader.textContent()
  75  | 
  76  |     // First section should be open by default — click it to collapse
> 77  |     await firstHeader.click()
      |                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  78  |     // Click again to re-expand
  79  |     await firstHeader.click()
  80  | 
  81  |     // Verify the section title is still visible after toggle
  82  |     await expect(firstHeader).toContainText(headerText ?? '')
  83  |   }
  84  | })
  85  | 
  86  | test('copy link button and auto-open modal with query param', async ({ page }) => {
  87  |   // First navigate to home, then change the hash
  88  |   await page.goto('/')
  89  | 
  90  |   // Navigate to URL with hash fragment
  91  |   await page.goto('/#/project-equipment-rental-system')
  92  | 
  93  |   // The modal should automatically open
  94  |   const modal = page.locator('.modal-sheet')
  95  |   await expect(modal).toBeVisible({ timeout: 5000 })
  96  | 
  97  |   // Verify the modal is showing the correct project
  98  |   const modalTitle = modal.locator('h3').first()
  99  |   await expect(modalTitle).toContainText(/Equipment|設備|器材|租賃/i)
  100 | 
  101 |   // Click the copy link button inside the modal
  102 |   const copyButton = modal.locator('button[aria-label="Copy link"], button[aria-label="複製連結"]').first()
  103 |   await copyButton.click()
  104 | 
  105 |   // Verify the "Copied" feedback is shown
  106 |   await expect(modal.locator('text=/Copied|已複製/')).toBeVisible()
  107 | })
  108 | 
  109 | test('language switch updates modal content', async ({ page }) => {
  110 |   await page.goto('/')
  111 | 
  112 |   // Open a project modal in zh (default)
  113 |   await page.locator('#projects .group').first().click()
  114 |   const modal = page.locator('.modal-sheet')
  115 |   await expect(modal).toBeVisible()
  116 |   const zhTitle = await modal.locator('h3').textContent()
  117 | 
  118 |   // Close modal and switch language
  119 |   await page.keyboard.press('Escape')
  120 |   await expect(modal).not.toBeVisible()
  121 | 
  122 |   await page.getByRole('button', { name: 'Switch to English' }).click()
  123 | 
  124 |   // Re-open the same first project card
  125 |   await page.locator('#projects .group').first().click()
  126 |   await expect(modal).toBeVisible()
  127 |   const enTitle = await modal.locator('h3').textContent()
  128 | 
  129 |   // Title may be the same if the project name is not translated, but category/description should differ
  130 |   // At minimum, the modal should still open correctly after lang switch
  131 |   await expect(modal).toBeVisible()
  132 |   expect(enTitle).toBeTruthy()
  133 | })
  134 | 
  135 | 
```