/* ================================================
   theme.js — 深色模式管理
   Alpine.js app() data function
   ================================================ */

/**
 * Alpine app() — 掛載在 <body x-data="app()">
 * 管理深色模式狀態與切換邏輯
 */
function app() {
  return {
    /** 讀取 <html> 目前的 class，與防 FOUC 腳本同步 */
    isDark: document.documentElement.classList.contains('dark'),

    /**
     * 切換深淺模式
     * - toggle <html class="dark">
     * - 將偏好存入 localStorage
     */
    toggleDark() {
      this.isDark = !this.isDark;
      document.documentElement.classList.toggle('dark', this.isDark);
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    },

    /** Alpine init hook — 啟動 scroll-reveal observer */
    init() {
      initReveal();
    },
  };
}
