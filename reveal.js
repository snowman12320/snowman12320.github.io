/* ================================================
   reveal.js — Scroll-reveal 進場動畫
   使用 Intersection Observer API
   ================================================ */

/**
 * 為所有 .reveal 元素掛載 IntersectionObserver
 * 當元素進入視窗時加上 .visible，觸發 CSS 淡入動畫
 * 動畫觸發後立即 unobserve，避免重複觸發
 */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}
