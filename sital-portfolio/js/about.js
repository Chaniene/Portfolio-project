/* ============================================================
   about.js  —  Scripts for about.html
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Animate interest cards on scroll ── */
  const cards = document.querySelectorAll('.interest-card');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity   = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card, i) => {
      card.style.opacity    = '0';
      card.style.transform  = 'translateY(20px) scale(0.97)';
      card.style.transition = `opacity 0.45s ease ${i * 0.12}s, transform 0.45s ease ${i * 0.12}s`;
      observer.observe(card);
    });
  }

  /* ── Animate education list items ── */
  const eduItems = document.querySelectorAll('.edu-list li');
  eduItems.forEach((item, i) => {
    item.style.opacity    = '0';
    item.style.transform  = 'translateX(-16px)';
    item.style.transition = `opacity 0.4s ease ${0.2 + i * 0.1}s, transform 0.4s ease ${0.2 + i * 0.1}s`;
    setTimeout(() => {
      item.style.opacity   = '1';
      item.style.transform = 'translateX(0)';
    }, 100);
  });

});
