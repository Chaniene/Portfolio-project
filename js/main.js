/* ============================================================
   main.js  —  Shared scripts for Sital Chaniene Portfolio
   Loaded by every page.
   ============================================================ */

/**
 * Mark the correct nav link as active based on the current page filename.
 * Each <a> in .nav-links should have a data-page attribute matching the
 * HTML filename without extension (e.g. data-page="work").
 */
function setActiveNav() {
  const path      = window.location.pathname;
  const filename  = path.substring(path.lastIndexOf('/') + 1).replace('.html', '') || 'index';
  const pageKey   = filename === 'index' ? 'home' : filename;

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageKey);
  });
}

/* ─── Smooth scroll-to-top on same-page nav clicks ─── */
function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
});
