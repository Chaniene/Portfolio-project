/* ============================================================
   work.js  —  Scripts for work.html
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Animate project cards on scroll ── */
  const cards = document.querySelectorAll('.project-card');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity  = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card, i) => {
      card.style.opacity   = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`;
      observer.observe(card);
    });
  }

});
