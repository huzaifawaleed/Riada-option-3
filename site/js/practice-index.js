/* ============================================================
   RIADA — Option 03 · practice-index.js
   The signature interaction: a list of practice lines; hovering
   (or focusing) one fades in a single duotone image on the right
   and expands its one-line description. One image at a time —
   like turning plates in a book.
   Desktop: hover/focus. Mobile: tap-to-expand inline (the stage
   is hidden by CSS at ≤1024px, so the inline description carries).
   ============================================================ */

export function initPracticeIndex() {
  const list = document.querySelector('[data-practice]');
  if (!list) return;
  const items = Array.from(list.querySelectorAll('.practice__item'));
  const stage = document.querySelector('.practice__stage');
  const imgs = stage ? Array.from(stage.querySelectorAll('.practice__img')) : [];

  const isTouch = window.matchMedia('(hover: none)').matches;

  const activate = key => {
    items.forEach(i => i.classList.toggle('is-active', i.dataset.key === key));
    imgs.forEach(img => img.classList.toggle('is-active', img.dataset.key === key));
  };

  items.forEach(item => {
    const key = item.dataset.key;
    const link = item.querySelector('.practice__link');

    if (isTouch) {
      // Tap-to-expand: toggle this item; let a real navigation still work
      // on a second tap (the link points to #invitation).
      link.addEventListener('click', e => {
        if (!item.classList.contains('is-active')) {
          e.preventDefault();
          activate(key);
        }
      });
    } else {
      item.addEventListener('mouseenter', () => activate(key));
      // Keyboard parity — focusing the link reveals its plate.
      link.addEventListener('focus', () => activate(key));
    }
  });

  // Ensure the first item's plate is showing on load.
  const first = items.find(i => i.classList.contains('is-active')) || items[0];
  if (first) activate(first.dataset.key);
}
