import type { ExperienceItem } from '../types'

const experienceCatalog: ExperienceItem[] = [
  {
    id: 'fun-show',
    position: { zh: '全端工程師', en: 'Full Stack Engineer' },
    company: { zh: '玩藝國際股份有限公司（Fun Show）', en: 'Fun Show International Co., Ltd.' },
    location: { zh: '台灣・臺南市（遠端）', en: 'Remote' },
    period: '2024/02 — 2026/08 (2y 7m)',
    bullets: {
      zh: [
        '開發具備即時串流、場景管理、連播 UI 與 OBS 整合的直播控制平台。',
        '整合 Keycloak 認證與 Payuni 金流，實現訂閱方案的信用卡安全交易。',
        '透過 Server-Sent Events（SSE）實作即時通知，並以 Quasar Framework 開發無限捲動預覽元件。',
        '使用 PHP 與 Laravel 開發後端 API 與管理功能，串接直播平台的會員、內容與訂閱流程。',
        '建立 Jenkins 自動化 CI/CD 建置管線，管理跨分支的生產環境部署。',
        '撰寫單元測試，並以 Mock Service Worker（MSW）簡化 RESTful API 測試流程。',
      ],
      en: [
        'Built a live streaming control platform with scene management, co-streaming UI, and OBS integration.',
        'Integrated Keycloak authentication and Payuni payments to secure subscription checkout.',
        'Shipped SSE notifications and infinite-scroll media previews with Quasar Framework.',
        'Built backend APIs and admin features with PHP and Laravel for member, content, and subscription workflows.',
        'Automated cross-branch production deployments with Jenkins CI/CD.',
        'Added unit tests and MSW API mocks to speed up RESTful API validation.',
      ],
    },
    printBullets: {
      zh: [
        '以 Vue 3、TypeScript 與 Quasar 建構直播控制平台，整合 OBS 串流、場景切換、聯合直播、WebSocket 房間分片與 Redis 轉發，支援 5,000+ 並發連線；搭配虛擬滾動、路由懶加載、Tree Shaking、資源預載與 API 快取，將頁面載入由 3.2s 降至 0.8s、平均 API 響應由 400ms 優化至 120ms，導播控制延遲維持在 100ms 內。',
        '建立 32 個可複用 Composables 與 45 個模組化元件，涵蓋直播頁、導播控制、會員中心及 10,000+ 媒體項目的 Infinite Scroll；整合 Keycloak SSO/RBAC、Payuni 訂閱金流與 WebSocket/SSE 事件通知，搭配 Vitest、Vue Test Utils、12 組 MSW API Mock 與 82% 單元測試覆蓋率，透過 Jenkins Pipeline as Code 完成每週 8–12 次跨分支自動部署，訂閱轉換率提升 35%。',
      ],
      en: [
        'Built a Vue 3, TypeScript, and Quasar streaming control platform with OBS streaming, scene switching, co-streaming, Socket.IO room sharding, and Redis relay for 5,000+ concurrent connections; combined virtual scrolling, route lazy-loading, tree-shaking, resource preloading, and API caching to cut page load from 3.2s to 0.8s, reduce average API latency from 400ms to 120ms, and keep broadcast-console latency below 100ms.',
        'Created 32 reusable Composables and 45 modular components for live pages, broadcast control, member workflows, and infinite-scroll media across 10,000+ items; integrated Keycloak SSO/RBAC, Payuni subscriptions, and WebSocket/SSE events, with Vitest, Vue Test Utils, 12 MSW API mocks, and 82% unit-test coverage, then automated 8–12 weekly cross-branch deployments through Jenkins Pipeline as Code, increasing subscription conversion by 35%.',
      ],
    },
    techStack: ['Vue 3', 'Quasar Framework', 'TypeScript', 'PHP', 'Laravel', 'Keycloak', 'SSE', 'OBS Integration', 'Jenkins CI/CD', 'MSW', 'Vitest'],
    contribution: {
      zh: '[{"title":"性能提升","items":["支援 5,000+ 並發 WebSocket 連線，實時直播聊天與互動不延遲（透過 Socket.IO 房間分片與 Redis 轉發，解決單一節點瓶頸，確保高並發聊天互動穩定不延遲）","頁面加載時間從 3.2s 優化至 0.8s（75% 性能提升）（透過路由懶加載、Tree Shaking 與資源預載，解決首屏資源過載問題，達成 75% 性能提升）","導播控制台響應延遲控制在 < 100ms，提升操作體驗（透過虛擬滾動與 WebSocket 狀態同步，解決大量場景資料渲染卡頓問題，讓控制台操作即時反饋）","無限滾動媒體資源管理，支援 10,000+ 媒體項目無感加載（透過 Intersection Observer 與分頁預取，解決大量圖片影片一次性載入過慢問題，實現無感滾動加載）"]},{"title":"程式品質","items":["開發 32 個可復用 Vue 3 Composables 元件，提升代碼復用率 68%（透過抽象共用邏輯並統一錯誤處理，解決各功能重複實作問題，使代碼復用率提升 68%）","建置 45 個模組化元件，支援直播頁、導播控制、會員中心等功能（透過 Atomic Design 與 props 驅動，解決元件散落難以維護問題，讓多個業務場景快速複用）","單元測試覆蓋率達 82%，確保代碼穩定性（透過 Vitest + Vue Test Utils 覆蓋核心流程，解決手動回歸測試遺漏風險，確保 82% 核心邏輯穩定）","搭配 12 個 MSW API Mock 方案，加快前後端並行開發（透過定義標準 API schema 供前後端共用，解決後端未就緒時前端開發受阻問題，使前後端可並行推進）"]},{"title":"商業影響","items":["整合 Payuni 金流、Keycloak 單一登入與 RBAC 角色權限（透過封裝統一認證與授權中介層，解決多系統登入與權限散落問題，讓會員與付費流程安全串接）","實作 4 種即時通知機制（WebSocket、SSE、訂閱推播、期限提醒）（透過事件驅動架構與通知排程器，解決通知分散與遺漏問題，確保四種通知即時可靠送達）","支援聯合直播、共同直播、OBS 導播等 3 種直播模式（透過模組化串流控制與場景切換邏輯，解決直播模式擴展困難問題，讓三種模式可彈性切換）","會員中心流程優化，訂閱轉換率提升 35%（透過簡化結帳步驟並導入 A/B 測試驗證，解決轉換流程繁瑣問題，使訂閱轉換率提升 35%）"]},{"title":"開發效率","items":["Jenkins CI/CD 自動化部署，每週 8-12 次自動部署（透過 Pipeline as Code 與自動化測試閘道，解決手動部署易出錯問題，實現每週 8-12 次穩定部署）","Git 分支管理與代碼審查流程，減少 Bug 率 40%（透過導入 Git Flow 與 PR template 規範，解決分支混亂與審查標準不一問題，使 Bug 率降低 40%）","開發工具整合（MCP、Kiro-cli），開發效率提升 25%（透過自動化重複性任務與程式碼生成，解決手動撰寫 boilerplate 耗時問題，讓開發效率提升 25%）","API 響應時間最佳化至平均 120ms（原 400ms）（透過資料庫索引、快取與分頁，解決查詢緩慢與無效資料傳輸問題，使 API 響應從 400ms 降至 120ms）"]}]',
      en: '[{"title":"Performance","items":["Supports 5,000+ concurrent WebSocket connections for real-time chat and interaction without lag (via Socket.IO room sharding and Redis relay, eliminating single-node bottlenecks to ensure stable high-concurrency chat)","Page load time optimized from 3.2s to 0.8s (75% performance improvement) (via route lazy-loading, tree-shaking, and resource preloading, reducing initial-load overhead to achieve a 75% performance gain)","Broadcast console response latency maintained at < 100ms for better UX (via virtual scrolling and WebSocket state sync, eliminating scene-data rendering lag for instant console feedback)","Infinite-scroll media management supporting 10,000+ media items with seamless loading (via Intersection Observer and prefetch paging, avoiding bulk media loading slowdowns for seamless scrolling)"]},{"title":"Quality","items":["Developed 32 reusable Vue 3 Composables, achieving 68% code reuse rate (via abstracting shared logic with unified error handling, reducing duplicated implementations and raising code reuse to 68%)","Built 45 modular components supporting the live page, broadcast control, and member center (via Atomic Design and props-driven architecture, taming scattered components so multiple business views can reuse them)","Unit test coverage reached 82% for higher stability (via Vitest + Vue Test Utils covering core flows, removing the risk of manual regression omissions and securing 82% coverage)","Implemented 12 MSW API Mock solutions to accelerate frontend-backend parallel development (via standard API schemas shared across teams, unblocking frontend work before backend readiness and enabling parallel delivery)"]},{"title":"Impact","items":["Integrated Payuni payment gateway, Keycloak SSO, and RBAC role-based access control (via unified auth and authorization middleware, consolidating fragmented logins and permissions for secure member and payment flows)","Implemented 4 real-time notification mechanisms (WebSocket, SSE, subscription push, expiry alerts) (via event-driven architecture with notification scheduler, preventing missed or scattered notifications for reliable delivery)","Supported 3 streaming modes: joint broadcast, co-stream, and OBS control (via modular stream control and scene-switching logic, simplifying mode extensions so three streaming modes can switch flexibly)","Optimized the member center flow and increased subscription conversion by 35% (via simplified checkout and A/B test validation, removing conversion friction and increasing subscription conversion by 35%)"]},{"title":"Efficiency","items":["Jenkins CI/CD automation with 8-12 automated deployments per week (via Pipeline as Code with automated test gates, replacing error-prone manual deployment for 8-12 stable weekly releases)","Git branch management and code review process reduced bugs by 40% (via Git Flow and PR template conventions, cleaning up branch chaos and inconsistent reviews to reduce bugs by 40%)","Integrated MCP and Kiro-cli to improve development efficiency by 25% (via automated repetitive tasks and code generation, cutting boilerplate writing time and improving efficiency by 25%)","Optimized API response time to an average of 120ms from 400ms (via database indexing, caching, and pagination, fixing slow queries and unnecessary data transfer to drop response time from 400ms to 120ms)"]}]',
    },
  },
  {
    id: 'hengyuan-freelance',
    position: { zh: '全端工程師', en: 'Full Stack Engineer' },
    company: { zh: '恆遠數位行銷（ForeverWebs）', en: 'ForeverWebs ' },
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
        'Built medical features for patient records, interactive charts, PDF compression, and vtk.js 3D CT rendering.',
        'Designed database schemas and RESTful APIs to ship full-stack applications from concept to deployment.',
        'Built modular learning platforms with Vimeo streaming, OAuth authentication, and IP access control.',
        'Deployed and maintained applications on Zeabur and Cloudways.',
        'Automated quote, billing, and maintenance workflows with AI-assisted development.',
      ],
    },
    printBullets: {
      zh: [
        '從需求分析、資料庫 Schema、RESTful API 到雲端部署，交付醫療病歷與分析系統、vtk.js 3D CT 影像檢視、Vimeo 線上學習平台及報價／帳款流程；透過 Vue 3 Composition API、Web Worker 分塊載入、Vimeo CDN、OAuth 與 IP 白名單，將 3D CT 渲染控制在 2s 內、影片首次緩衝低於 1.5s，並以多雲部署降低單點故障風險。',
        '以查詢優化與 Redis 快取將 API 平均響應由 800ms 降至 200ms，透過客戶端與自適應圖片壓縮使 PDF 體積減少 60%；建立共享 Zod／TypeScript Schema、Vitest 核心流程測試與模組化元件庫，結合 GitHub Actions、Zeabur Webhooks 及 AI 輔助開發，讓 API 型別、部署與維護流程可追蹤，整體開發效率提升 30%。',
      ],
      en: [
        'Delivered medical records and analytics, vtk.js 3D CT viewing, Vimeo learning, and quotation/billing systems from requirements and database schema through REST APIs and cloud deployment; used Vue 3 Composition API, Web Worker chunked loading, Vimeo CDN, OAuth, and IP allowlisting to keep CT rendering under 2s, first-play buffering under 1.5s, and reduce single-cloud failure risk with multi-cloud delivery.',
        'Reduced average API latency from 800ms to 200ms through query optimization and Redis caching, and cut PDF size by 60% with client-side and adaptive image compression; established shared Zod/TypeScript schemas, Vitest core-flow tests, and a modular component library, then combined GitHub Actions, Zeabur webhooks, and AI-assisted development to improve delivery efficiency by 30%.',
      ],
    },
    techStack: ['Vue 3', 'Node.js', 'RESTful API', 'vtk.js', 'Vimeo API', 'OAuth', 'MySQL', 'Zeabur', 'Cloudways'],
    contribution: {
      zh: '[{"title":"性能提升","items":["3D CT 影像渲染平均載入時間 < 2s（透過 vtk.js 分塊載入與 Web Worker 非同步處理，解決大型醫療影像檔案載入過慢問題，讓 3D 渲染平均低於 2 秒）","PDF 壓縮後檔案體積減少 60%（透過客戶端壓縮與適配性圖片壓縮策略，解決線上傳大檔案耗時問題，使 PDF 體積減少 60%）","學習平台影片首次緩衝時間 < 1.5s（透過 Vimeo CDN 與預載機制，解決影片載入等待過長問題，讓首次緩衝低於 1.5 秒）","API 平均響應時間從 800ms 降至 200ms（透過查詢優化與 Redis 快取，解決資料庫查詢瓶頸問題，使 API 響應時間降低 75%）"]},{"title":"程式品質","items":["建構 8 個可復用醫療圖表與表單元件（透過 Vue 3 + Composition API 抽象共用邏輯，解決病歷頁面重複開發問題，讓 8 個元件跨模組複用）","單元測試覆蓋率達 75%（透過 Vitest 針對核心業務流程與 utility 編寫測試，解決手動驗證遺漏問題，確保 75% 核心邏輯穩定）","統一 API 錯誤處理與型別定義（透過建立 Zod / TypeScript 共享 schema，解決前後端型別不一致問題，降低接口溝通成本與執行期錯誤）","資料庫 Schema 正規化減少冗餘（透過 ER 設計與 migration 管理，解決資料重複儲存問題，使 Schema 維護與擴展更穩定）"]},{"title":"商業影響","items":["整合 OAuth 與 IP 白名單保護課程內容（透過 Vimeo 私有影片與閘道層驗證，解決課程內容被未授權存取問題，確保只有合法用戶可觀看）","報價／帳款流程自動化縮短 50% 處理時間（透過狀態機與自動郵件通知，解決人工跟進報價進度遺漏問題，使處理時間縮短一半）","醫療病歷管理流程數位化（透過取代紙本流程並減少資料查找時間，解決紙本病歷查找緩慢問題，提升診所行政效率）","多雲部署降低停機風險（透過 Zeabur + Cloudways 雙平台備援機制，解決單一雲服務故障導致停機問題，提升系統可用性）"]},{"title":"開發效率","items":["從 0 到 1 交付 3 個全端專案（透過採用模組化架構與可復用模板，解決新專案重複搭建問題，使 3 個專案可快速交付）","AI 輔助開發減少重複性程式碼撰寫 30%（透過使用 Cursor / Copilot 生成 boilerplate 與測試，解決重複性程式碼耗時問題，使開發效率提升 30%）","CI/CD 自動化部署減少手動上版時間 70%（透過 GitHub Actions 與 Zeabur webhooks，解決手動部署流程繁瑣問題，使上版時間減少 70%）","統一前端元件庫縮短新頁面開發時間 40%（透過基於 Tailwind + Headless UI 建立設計系統，解決頁面樣式不一致問題，讓新頁面開發時間縮短 40%）"]}]',
      en: '[{"title":"Performance","items":["3D CT scan rendering loads in < 2s on average (via vtk.js chunked loading and Web Worker async processing, fixing slow loading of large medical images to keep 3D rendering under 2s)","PDF compression reduces file size by 60% (via client-side compression and adaptive image downsampling, solving slow large-file uploads and reducing PDF size by 60%)","Learning-platform videos buffer in < 1.5s on first play (via Vimeo CDN and preloading, eliminating long video startup waits for first-play buffering under 1.5s)","Average API response time reduced from 800ms to 200ms (via query optimization and Redis caching, removing database query bottlenecks and cutting API response time by 75%)"]},{"title":"Quality","items":["Built 8 reusable medical chart and form components (via Vue 3 + Composition API to abstract shared logic, reducing duplicated record-page development for cross-module reuse)","Unit-test coverage reached 75% (via Vitest for core business flows and utilities, preventing manual verification gaps and securing 75% coverage)","Unified API error handling and type definitions (via shared Zod / TypeScript schemas, resolving frontend-backend type mismatches and reducing runtime errors)","Normalized database schemas to reduce redundancy (via ER design and migration management, eliminating duplicated storage and making schema maintenance more reliable)"]},{"title":"Impact","items":["Integrated OAuth and IP whitelisting to protect course content (via Vimeo private videos plus gateway validation, preventing unauthorized content access and ensuring only legitimate viewers)","Automated quote/billing workflow cut processing time by 50% (via state-machine-driven with automated email notifications, preventing missed manual follow-ups and halving processing time)","Digitized patient record management (via replacing paper-based processes and reducing lookup time, fixing slow paper-record retrieval and improving clinic efficiency)","Multi-cloud deployment reduced downtime risk (via Zeabur + Cloudways dual-platform backup, avoiding single-cloud failures and improving system availability)"]},{"title":"Efficiency","items":["Delivered 3 full-stack projects from 0 to 1 (via modular architecture and reusable templates, eliminating repeated project scaffolding for rapid delivery)","AI-assisted development reduced repetitive coding by 30% (via Cursor / Copilot for boilerplate and tests, cutting repetitive coding time and improving development efficiency by 30%)","CI/CD automation cut manual deployment time by 70% (via GitHub Actions and Zeabur webhooks, replacing cumbersome manual deployment and cutting release time by 70%)","Unified frontend component library shortened new-page development by 40% (via Tailwind + Headless UI design system, resolving inconsistent page styles and shortening new-page development by 40%)"]}]',
    },
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
        'Built Advisor Portal tables, loading states, and responsive views; integrated Advisor APIs through BFF and resolved DEV connectivity failures.',
        'Led SSO integration, role provisioning, redirect configuration, and RBAC access control; documented the implementation for handoff.',
        'Shipped Admin Action Log Phase 2, initialized the database with SQL scripts, and added Umami analytics for traffic and behavior tracking.',
        'Managed Dev/SIT PRs, deployment verification, and bug resolution; tracked delivery in Jira and reported progress through SharePoint / Excel.',
      ],
    },
    printBullets: {
      zh: [
        '以 Next.js、TypeScript 與 BFF 架構開發 Advisor Portal 的 Table、Spinner 與響應式元件，透過 API 聚合、前端快取、分頁、虛擬滾動與 server-side sorting 支援萬筆資料流暢操作；主導 OAuth 2.0／OIDC SSO、登入後多情境導向與 5+ 角色 RBAC 整合，並以結構化日誌與網路追蹤將 DEV API 異常定位時間縮短 50%。',
        '完成 Action Log Phase 2 稽核流程、初始資料庫 SQL 與 migration 版本化、Umami 10+ 關鍵事件追蹤，以及 Dev／SIT 跨環境 CI/CD 驗證；透過 GitHub Actions、分支保護、自動 smoke test、部署版本與 Commit 對照及 Jira 協作流程，管理每週 15+ PR，降低 SIT 部署異常回報 30%，並使 Lighthouse 效能分數提升 15%。',
      ],
      en: [
        'Built Advisor Portal Table, Spinner, and responsive components with Next.js, TypeScript, and a BFF architecture, using API aggregation, frontend caching, pagination, virtual scrolling, and server-side sorting for smooth 10k-row interactions; led OAuth 2.0/OIDC SSO, multi-scenario post-login redirects, and RBAC across 5+ roles, while using structured logs and network tracing to cut DEV API troubleshooting time by 50%.',
        'Delivered Action Log Phase 2 audit flows, versioned initial SQL and database migrations, Umami tracking for 10+ key events, and Dev/SIT CI/CD verification; used GitHub Actions, branch protection, automated smoke tests, deployment-to-commit checks, and Jira workflows to manage 15+ PRs weekly, reduce SIT deployment anomaly reports by 30%, and raise Lighthouse performance by 15%.',
      ],
    },
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'BFF Architecture', 'SSO / RBAC', 'SQL', 'Umami', 'Jira', 'GitHub Actions', 'CI/CD'],
    contribution: {
      zh: '[{"title":"性能提升","items":["Advisor Portal 頁面交互響應時間 < 200ms（透過 BFF 聚合 API 與前端緩存策略，解決多後端服務請求碎片化問題，讓頁面交互低於 200ms）","Table UI 萬筆資料載入不卡頓（透過分頁、虛擬滾動與 server-side sorting，解決大資料量渲染卡頓問題，確保 Table 操作流暢）","DEV 環境 API 連線異常排查，縮短定位時間 50%（透過結構化日誌與網路追蹤，解決異常原因難以定位問題，使排查時間縮短一半）","Umami 腳本非阻塞載入，頁面 Lighthouse 性能分數提升 15%（透過延遲載入與 CDN 配置，解決分析腳本阻塞主線程問題，使 Lighthouse 性能分數提升 15%）"]},{"title":"程式品質","items":["建立 RBAC 權限模型與 SSO 角色管理文件（透過標準化 access-control 設計與文件化，解決權限規則分散難以維護問題，讓新角色接入有標準可依）","後台 Action Log Phase 2 功能完整覆蓋關鍵操作（透過標準化 audit trail schema，解決操作記錄不完整問題，讓關鍵行為皆可追蹤）","初始資料庫建置與 SQL 腳本版本化（透過 migration 管理與 code review，解決手動建置易出錯問題，使資料庫變更可追溯）","前端 Table / Spinner 等元件統一設計規範（透過共享 UI component library，解決不同頁面元件樣式不一致問題，提升開發與維護一致性）"]},{"title":"商業影響","items":["完成 SSO 單一登入整合，涵蓋 3 種登入後重新導向情境（透過 OAuth 2.0 / OIDC 流程配置，解決多應用重複登入問題，讓用戶無縫切換 3 種登入情境）","實作 RBAC 角色型存取控制，支援 5+ 角色權限區隔（透過 middleware 與 policy 層設計，解決權限判斷散落問題，使 5+ 角色權限清晰區隔）","部署驗證流程減少 SIT 環境異常回報 30%（透過自動化 smoke test 與版本對照檢查，解決部署後遺漏驗證問題，使 SIT 異常回報減少 30%）","導入 Umami 追蹤 10+ 關鍵使用者行為事件（透過事件埋碼與儀表板配置，解決缺乏使用者行為數據問題，讓 10+ 關鍵事件可量化分析）"]},{"title":"開發效率","items":["維護跨環境 CI/CD 流程，每週處理 15+ PR 合併與部署（透過 GitHub Actions 與分支保護規則，解決手動合併與部署風險問題，確保每週 15+ 次穩定交付）","建立 Jira Ticket 追蹤與 SharePoint / Excel 進度回報機制（透過標準化協作流程，解決進度資訊分散問題，使團隊能即時掌握專案狀態）","排查部署版本與修復 Commit 不符異常，縮短問題定位時間 40%（透過版本標籤與部署日誌比對，解決版本與 Commit 不一致難以追查問題，使定位時間縮短 40%）","撰寫 SSO/RBAC 技術文件，新成員上手時間縮短 25%（透過 Confluence / Wiki 知識沉澱，解決知識僅存在個人腦中問題，讓新成員 onboarding 縮短 25%）"]}]',
      en: '[{"title":"Performance","items":["Advisor Portal interactions respond in < 200ms (via BFF API aggregation and frontend caching, eliminating fragmented backend-service requests for sub-200ms interactions)","Table UI loads 10k+ rows without lag (via pagination, virtual scrolling, and server-side sorting, preventing large-dataset rendering lag for smooth table operations)","Cut DEV API connectivity troubleshooting time by 50% (via structured logging and network tracing, resolving hard-to-diagnose connectivity issues and halving troubleshooting time)","Non-blocking Umami script loading improved Lighthouse performance score by 15% (via deferred loading and CDN config, avoiding analytics script blocking and raising Lighthouse performance by 15%)"]},{"title":"Quality","items":["Established RBAC permission model and SSO role-management documentation (via standardized access-control design, taming scattered permission rules so new roles can onboard with standards)","Admin Action Log Phase 2 covers all critical operations (via standardized audit-trail schema, fixing incomplete operation records so critical actions remain traceable)","Versioned initial database setup and SQL scripts (via migration management and code review, reducing manual setup errors and making database changes traceable)","Unified Table / Spinner component design standards (via shared UI component library, resolving inconsistent component styles across pages and improving maintainability)"]},{"title":"Impact","items":["Completed SSO integration covering 3 post-login redirect scenarios (via OAuth 2.0 / OIDC flow config, eliminating repeated logins across apps for seamless switching between 3 scenarios)","Implemented RBAC with 5+ role separations (via middleware and policy-layer design, cleaning up scattered permission checks for clear separation of 5+ roles)","Deployment verification reduced SIT anomaly reports by 30% (via automated smoke tests and version checks, catching post-deployment gaps and cutting SIT anomaly reports by 30%)","Introduced Umami tracking for 10+ key user behavior events (via event instrumentation and dashboard setup, filling the lack of user-behavior data for measurable analysis of 10+ events)"]},{"title":"Efficiency","items":["Maintained cross-environment CI/CD with 15+ PR merges and deployments weekly (via GitHub Actions and branch protection, reducing manual merge/deploy risks for 15+ stable weekly deliveries)","Established Jira ticket tracking and SharePoint / Excel progress reporting (via standardized collaboration workflow, consolidating scattered progress information for real-time team visibility)","Resolved commit-deployment mismatch issues 40% faster (via version tags and deployment log comparison, making commit-deployment mismatches traceable and cutting resolution time by 40%)","Authored SSO/RBAC technical docs, reducing onboarding time by 25% (via Confluence / Wiki knowledge base, capturing tribal knowledge so new member onboarding shortened by 25%)"]}]',
    },
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
    printBullets: {
      zh: [
        '撰寫 iThome 鐵人賽 31 天技術專欄「用 Supabase 打造全端應用」，涵蓋 Auth、Realtime、Storage 與 Edge Functions。',
        '核心專案整合 Twilio SMS OTP、RLS 權限控管與即時排隊廣播，並以 GitHub Actions 完成自動化 CI/CD 部署。',
      ],
      en: [
        'Authored 31-day iThome Iron Man series “Building Full-Stack Apps with Supabase,” covering Auth, Realtime, Storage, and Edge Functions.',
        'Core project implemented Twilio SMS OTP, Row Level Security, and real-time queue broadcasting; automated CI/CD deployment via GitHub Actions.',
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
    company: { zh: '數位因子網路科技有限公司（dgFactor）', en: 'dgFactor ' },
    location: { zh: '台灣・臺南市（遠端）', en: 'Remote' },
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
    printBullets: {
      zh: [
        '基於 LINE LIFF 框架開發電商後台，整合 LINE Bot、LINE Login 與 LINE Notify，實現完整訂單管理與通知流程。',
        '建立 GitHub Tag 標籤 CI/CD 流程，確保版本控制與自動化部署穩定運行。',
      ],
      en: [
        'Developed e-commerce backend on LINE LIFF framework, integrating LINE Bot, LINE Login, and LINE Notify for streamlined order management and notifications.',
        'Established GitHub tag-based CI/CD pipeline for reliable version control and automated deployments.',
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
        'Built "104 Social" from zero to one as a full-stack dating platform.',
        'Shipped responsive Nuxt 3 UI with Tailwind CSS, Nuxt UI, Pinia, Gemini matchmaking, and personalized search.',
        'Built Express REST APIs with TypeScript and MongoDB; added Socket.io notifications and instant messaging.',
        'Automated CI/CD with GitHub Actions, deployed frontend/backend to Vercel and Zeabur, and added structured SEO markup, meta tags, and a dynamic sitemap.',
      ],
    },
    printBullets: {
      zh: [
        '獨立開發全端交友平台「104 Social」，採 Nuxt 3 + Gemini AI 配對推薦與 Socket.io 即時通訊，後端以 Express + MongoDB 建置。',
        '建立 GitHub Actions CI/CD，多雲部署（Vercel + Zeabur），完成 SEO 優化後成功被 Google 收錄。',
      ],
      en: [
        'Built “104 Social” full-stack dating platform with Nuxt 3, Gemini AI matchmaking, Socket.io real-time messaging, and Express + MongoDB backend.',
        'Set up GitHub Actions CI/CD with multi-cloud deployment (Vercel + Zeabur) and SEO optimizations — successfully indexed by Google.',
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
        'Guided learners through frontend bottlenecks, Axios configuration, and API integration debugging.',
      ],
    },
    printBullets: {
      zh: [
        '完成「JS Clean Code」專業前端導師培訓，通過試教影片評核，掌握重構、可讀性標準與結構化教學能力。',
        '具備 Code Review mentoring 實務經驗，協助學員排查 Axios 設定與 API 串接除錯問題。',
      ],
      en: [
        'Completed “JS Clean Code” professional frontend tutor training; passed teaching demo evaluation with structured, hands-on technical instruction.',
        'Provided code review mentorship and guided learners through Axios configuration and API integration debugging.',
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
        '使用 PHP 與 Laravel 開發校務系統後端 API、資料查詢與管理功能，串接 Vue 前端業務流程。',
        '維護公司及學校內部的資產與帳號相關管理系統，處理資產移轉、報廢、採購等流程。',
      ],
      en: [
        'Built NCKU internal systems for nutrition menus, medical reports, customer service, and asset management.',
        'Shipped forms, data tables, responsive views, and admin workflows connected to RESTful APIs.',
        'Built backend APIs, data queries, and admin workflows with PHP and Laravel to support Vue applications.',
        'Managed cross-page state with Vuex and Pinia to keep workflows synchronized.',
      ],
    },
    printBullets: {
      zh: [
        '建構成大多項跨領域內部系統，涵蓋食登 2.0 電子菜單、慈濟醫療報表、客服管理平台與資產管理系統。',
        '使用 Vue 2/3（Pinia / Vuex）管理跨頁狀態，負責表單設計、資料表呈現與後台業務邏輯串接。',
      ],
      en: [
        'Built multiple cross-domain internal systems for NCKU, including Nutrition Menu 2.0, Tzu Chi medical reports, customer service dashboard, and campus asset management platform.',
        'Applied Vue 2/3 with Pinia/Vuex for cross-page state management; developed forms, data tables, and admin business logic.',
      ],
    },
    techStack: ['Vue 2', 'Vue 3', 'Vuex', 'Pinia', 'PHP', 'Laravel', 'Docker', 'HeidiSQL', 'XAMPP', 'RESTful API'],
  },
  {
    id: 'tw-domain',
    position: { zh: '前端工程師', en: 'Front-End Engineer' },
    company: { zh: '台灣國際網域（Tnn-global）', en: 'Tnn-global' },
    location: { zh: '台灣・嘉義市', en: 'Chiayi, Taiwan' },
    period: '2022/11 — 2023/10 (1y)',
    bullets: {
      zh: [
        '使用 Vue (Options API) 獨立與協作開發多款電商網站（SPA, CSR）與設計企業品牌形象網站。',
        '串接 RESTful API，運用 ES5+ 語法、Webpack 打包建置、NPM 模組管理與 ESLint 維持程式碼高品質。',
        '負責精細網頁切圖，使用 HTML5 標籤與 CSS 選擇器，實現複雜表格與表單設計。',
        '基於 Flexbox / Grid 及 RWD，建構跨平台無縫的響應式選單與圖形排版。',
        '熟練運用 Tailwind CSS 3 與 Bootstrap 5 設計系統（含 SCSS、Custom Config、Plugins）。',
        '使用 PHP 與 Laravel 開發及維護企業網站後端 API、內容管理與表單處理功能。',
      ],
      en: [
        'Built e-commerce SPAs and corporate sites with Vue Options API and RESTful APIs.',
        'Bundled JavaScript modules with Webpack and maintained code quality with ESLint.',
        'Shipped responsive layouts and reusable components with Flexbox, Grid, Tailwind CSS, and Bootstrap.',
        'Built and maintained backend APIs, content management, and form workflows with PHP and Laravel.',
      ],
    },
    printBullets: {
      zh: [
        '以 Vue Options API 獨立與協作開發多款電商 SPA 與企業官網，串接 RESTful API，並以 Webpack + ESLint 維持程式碼品質。',
        '熟練應用 Tailwind CSS 3 / Bootstrap 5 + SCSS，基於 Flexbox / Grid 與 RWD 建構跨平台響應式介面。',
      ],
      en: [
        'Developed multiple e-commerce SPAs and corporate websites with Vue Options API, integrating RESTful APIs and maintaining code quality via Webpack and ESLint.',
        'Applied Tailwind CSS 3 / Bootstrap 5 + SCSS to build cross-platform responsive layouts using Flexbox, Grid, and RWD best practices.',
      ],
    },
    techStack: ['Vue 2/3', 'Options API', 'Vue Router', 'Pinia', 'PHP', 'Laravel', 'Tailwind CSS 3', 'Bootstrap 5', 'SCSS', 'Webpack', 'ESLint'],
    linkGroups: [
      {
        label: { zh: '形象網站', en: 'Brand Sites' },
        links: [
          { label: { zh: '機車', en: 'Motorcycle' }, url: 'https://www.howun.tw/', icon: 'external' },
          { label: { zh: '機油', en: 'Motor Oil' }, url: 'https://www.uos-oil.com/tw/', icon: 'external' },
          { label: { zh: '建設', en: 'Construction' }, url: 'http://sr172.tnn.tw/test/santa/', icon: 'external' },
          { label: { zh: '引擎', en: 'Engine' }, url: 'https://www.asiametal1979.com/', icon: 'external' },
          { label: { zh: '醫療', en: 'Medical' }, url: 'http://www.syngrowth.com.tw/', icon: 'external' },
          { label: { zh: '設計', en: 'Design' }, url: 'https://www.iadesign.com.tw/', icon: 'external' },
          { label: { zh: '旅館', en: 'Motel' }, url: 'http://www.gold-motel.com.tw/', icon: 'external' },
        ],
      },
      {
        label: { zh: '購物網', en: 'E-Commerce' },
        links: [
          { label: { zh: '手套 1', en: 'Gloves 1' }, url: 'https://www.safehealth.biz/', icon: 'external' },
          { label: { zh: '手套 2', en: 'Gloves 2' }, url: 'https://www.evolguard.com/', icon: 'external' },
          { label: { zh: '畫作', en: 'Artwork' }, url: 'https://www.yisuyisu.com/', icon: 'external' },
          { label: { zh: '商城', en: 'Mall' }, url: 'https://www.good63.tw/front/product_page/29', icon: 'external' },
          { label: { zh: '點心', en: 'Snacks' }, url: 'http://www.golden-eggroll.com.tw/', icon: 'external' },
        ],
      },
    ],
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
        '參與 eHairPOS 美髮管理 App 開發，涵蓋預約、會員、庫存、銷售報表與員工績效管理流程。',
        '參與 iOS / iPadOS 行動端與門市 POS 體驗開發，整合 API 資料同步及門市營運流程。',
      ],
      en: [
        'Maintained legacy e-commerce systems and built data visualization dashboards.',
        'Designed and integrated APIs with PHP (Laravel/CodeIgniter) and Vue.',
        'Shipped POS CRUD modules, streamlined payment flows, and added admin permission management.',
        'Contributed to eHairPOS, a salon management app covering appointments, members, inventory, sales reports, and staff performance.',
        'Contributed to iOS/iPadOS and in-store POS experiences, connecting API data sync with salon operations.',
      ],
    },
    printBullets: {
      zh: [
        '維護大型電商舊系統，並主導資料視覺化圖表新專案，使用 PHP（Laravel / CodeIgniter）+ Vue 進行全端 API 設計與整合。',
        '開發 POS 系統 CRUD 模組，優化購物車金流流程，並實作帳號權限管理與 SMTP 信笄整合。',
        '參與 eHairPOS 美髮管理 App，整合預約、會員、庫存、銷售與員工績效等營運流程。',
        '參與 iOS / iPadOS 與門市 POS 行動端開發，串接 API 資料同步與營運流程。',
      ],
      en: [
        'Maintained legacy e-commerce platform and led data visualization dashboard project using PHP (Laravel/CodeIgniter) + Vue for full-stack API design.',
        'Developed POS CRUD modules, optimized shopping cart payment flow, and implemented admin permission management with SMTP email integration.',
        'Contributed to eHairPOS salon management app across appointments, membership, inventory, sales, and staff performance workflows.',
        'Contributed to iOS/iPadOS and in-store POS app development with API synchronization for daily operations.',
      ],
    },
    techStack: ['Vue.js', 'PHP', 'Laravel', 'CodeIgniter', 'MySQL', 'SMTP', 'Data Visualization', 'iOS / iPadOS', 'Swift / SwiftUI', 'RESTful API', 'POS Integration'],
    links: [
      { label: { zh: 'eHairPOS 專案介紹', en: 'eHairPOS Project' }, url: 'https://www.acubedt.com/project/ehairpos/', icon: 'external' },
      { label: { zh: 'eHairBOSS App Store', en: 'eHairBOSS on App Store' }, url: 'https://apps.apple.com/us/app/ehairboss/id6477989351', icon: 'external' },
      { label: { zh: 'eHairGO App Store', en: 'eHairGO on App Store' }, url: 'https://apps.apple.com/us/app/ehairgo/id6743433450', icon: 'external' },
    ],
    gallery: {
      id: 'acubedt-ehairpos',
      images: [
        { src: '/images/acubedt/ehairpos-01.jpg', description: 'eHairPOS 美髮管理 App 專案畫面' },
      ],
    },
  },
  {
    id: 'i-span-ai-cloud',
    position: { zh: 'AI 應用開發工程師', en: 'AI Application Developer' },
    company: { zh: '資展國際', en: 'iSpan International Inc.' },
    location: { zh: '遠端', en: 'Remote' },
    period: '2022/01 — 2022/06 (6m)',
    bullets: {
      zh: [
        '參與 AI 雲端 Web 應用開發，使用 Python、Flask、LightGBM 與資料爬蟲技術，完成房價預測與實價查詢平台。',
        '負責房價資料清洗、特徵工程、預測模型建立與 Flask 前後端整合，並以 Folium 地圖及 Bokeh 圖表呈現區域房市資訊。',
      ],
      en: [
        'Developed an AI cloud web application with Python, Flask, LightGBM, and web-crawling workflows for house price prediction and transaction searches.',
        'Handled housing-data cleaning, feature engineering, model development, and Flask frontend/backend integration, presenting market insights with Folium maps and Bokeh charts.',
      ],
    },
    techStack: ['Python', 'Flask', 'LightGBM', 'MySQL', 'Folium', 'Bokeh', 'Web Crawling', 'AWS'],
  },
]

const experienceDisplayOrder = [
  'fun-show',
  'sun-life',
  'hengyuan-freelance',
  'ithome-ironman',
  'career-break-certified-tutor',
  'career-break-104social',
  'digital-factor',
  'ncku',
  'tw-domain',
  'one-cube',
  'i-span-ai-cloud',
]

export const experiences = experienceDisplayOrder
  .map((id) => experienceCatalog.find((item) => item.id === id))
  .filter((item): item is ExperienceItem => Boolean(item))
