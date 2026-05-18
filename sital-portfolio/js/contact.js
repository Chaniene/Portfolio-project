/* ============================================================
   contact.js  —  Scripts for contact.html
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Animate contact cards on load ── */
  const cards = document.querySelectorAll('.contact-card');
  cards.forEach((card, i) => {
    card.style.opacity    = '0';
    card.style.transform  = 'translateY(20px)';
    card.style.transition = `opacity 0.45s ease ${i * 0.12}s, transform 0.45s ease ${i * 0.12}s`;
    setTimeout(() => {
      card.style.opacity   = '1';
      card.style.transform = 'translateY(0)';
    }, 100);
  });

  /* ── Optional: copy-to-clipboard on contact value click ── */
  document.querySelectorAll('.contact-value').forEach(el => {
    el.style.cursor = 'pointer';
    el.title = 'Click to copy';

    el.addEventListener('click', () => {
      navigator.clipboard.writeText(el.textContent.trim()).then(() => {
        const original = el.textContent;
        el.textContent = '✓ Copied!';
        el.style.color = 'var(--pink-dark)';
        setTimeout(() => {
          el.textContent = original;
          el.style.color  = '';
        }, 1500);
      });
    });
  });

});
