export function mountClientLogos(row) {
  if (!row) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let visible = !('IntersectionObserver' in window);
  const sync = () => row.classList.toggle('is-animating', visible && !document.hidden && !reduced.matches);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    }, { threshold: .08, rootMargin: '0px 0px -10% 0px' });
    observer.observe(row);
  }
  document.addEventListener('visibilitychange', sync);
  reduced.addEventListener('change', sync);
  sync();
}
