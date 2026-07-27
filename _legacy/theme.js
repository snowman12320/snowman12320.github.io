/* ================================================
   theme.js — 深色模式 + 語言切換管理
   Alpine.js app() data function
   ================================================ */

function app() {
  return {
    /** 深色模式：讀取 <html> 目前的 class，與防 FOUC 腳本同步 */
    isDark: document.documentElement.classList.contains('dark'),

    /** 語言：'zh' | 'en'，預設中文，讀取 localStorage */
    lang: localStorage.getItem('lang') || 'zh',

    toggleDark() {
      this.isDark = !this.isDark;
      document.documentElement.classList.toggle('dark', this.isDark);
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    },

    toggleLang() {
      this.lang = this.lang === 'zh' ? 'en' : 'zh';
      localStorage.setItem('lang', this.lang);
    },

    /** Alpine init hook */
    init() {
      lucide.createIcons();
      initReveal();
    },
  };
}
