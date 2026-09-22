import {motion} from './code/motion-tokens.js';

// Attio's spring, adapted to enlarge the Passwork dashboard as the hero scrolls.
export function heroTargetScale(viewportHeight, scrollY) {
  const viewportProgress = Math.min(1, Math.max(0, (viewportHeight - 500) / 300));
  const base = 1 - (1 - viewportProgress) * .14;
  const progress = Math.min(1, Math.max(0, (scrollY - 8) / 280));
  const eased = progress * progress * (3 - 2 * progress);
  return base * (1 + .12 * eased);
}

// Exact overdamped spring step, independent of refresh rate: k=120, c=26, m=1.
export function stepHeroSpring(value, velocity, target, seconds) {
  const {stiffness, damping, mass} = motion.heroShrinkSpring;
  const root = Math.sqrt(damping * damping - 4 * mass * stiffness);
  const slow = (-damping + root) / (2 * mass);
  const fast = (-damping - root) / (2 * mass);
  const offset = value - target;
  const a = (velocity - fast * offset) / (slow - fast);
  const b = offset - a;
  const x = a * Math.exp(slow * seconds), y = b * Math.exp(fast * seconds);
  return {value: target + x + y, velocity: slow * x + fast * y};
}

export function mountHeroScroll(hero, header) {
  if (!hero || !header) return () => {};
  const desktop = matchMedia('(min-width: 1101px)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const shell = hero.querySelector('.hero-window-shell');
  const copy = hero.querySelector('.hero-copy-scroll');
  const actions = [...copy.querySelectorAll('button, a')];
  const originalTabs = actions.map(el => el.getAttribute('tabindex'));
  let enabled = false, scrolled = false, frame = 0, last = 0;
  let height = shell.offsetHeight, value = 1, target = 1, velocity = 0;
  let previousY = Math.max(0, window.scrollY), direction = 0, distance = 0;
  const originalInert = header.inert;

  function updateHeader(y) {
    const delta = y - previousY;
    previousY = y;
    const menuOpen = header.querySelector('.menu-toggle[aria-expanded="true"]');
    if (y <= 8 || menuOpen) {
      header.classList.remove('is-header-hidden');
      header.inert = originalInert;
      direction = 0; distance = 0;
      return;
    }
    if (Math.abs(delta) < .1) return;
    const nextDirection = Math.sign(delta);
    distance = nextDirection === direction ? distance + Math.abs(delta) : Math.abs(delta);
    direction = nextDirection;
    // Accumulate a little travel so trackpad jitter cannot flicker the header.
    if (distance >= 8) {
      const hidden = direction > 0;
      header.classList.toggle('is-header-hidden', hidden);
      header.inert = hidden || originalInert;
    }
  }

  function setScrolled(next) {
    if (next === scrolled) return;
    scrolled = next;
    hero.classList.toggle('is-scrolled', next);
    actions.forEach((el, index) => {
      if (next) el.tabIndex = -1;
      else if (originalTabs[index] === null) el.removeAttribute('tabindex');
      else el.setAttribute('tabindex', originalTabs[index]);
    });
    if (next && copy.contains(document.activeElement)) document.activeElement.blur();
  }
  function readScroll() {
    const y = Math.max(0, window.scrollY);
    const moved = y >= 8;
    updateHeader(y);
    setScrolled(enabled && moved);
    header.classList.toggle('is-scrolled', moved);
    header.classList.toggle('is-past-hero', hero.getBoundingClientRect().bottom <= header.offsetHeight + 24);
    target = enabled ? heroTargetScale(window.innerHeight, y) : 1;
  }
  function tick(now) {
    frame = 0;
    readScroll();
    const seconds = last ? Math.min((now - last) / 1000, .064) : 1 / 60;
    last = now;
    ({value, velocity} = stepHeroSpring(value, velocity, target, seconds));
    const moving = Math.abs(value - target) > .00005 || Math.abs(velocity) > .0001;
    if (!moving) { value = target; velocity = 0; last = 0; }
    hero.style.setProperty('--hero-window-scale', value.toFixed(6));
    if (moving) frame = requestAnimationFrame(tick);
  }
  function schedule() {
    if (!frame && !document.hidden) frame = requestAnimationFrame(tick);
  }
  function measure() {
    height = shell.offsetHeight;
    hero.style.setProperty('--hero-window-height', `${height}px`);
    // Transforms do not affect layout. Reserve the final enlarged bottom edge
    // inside the sticky container so the hero cannot clip it on the way out.
    const maxScale = enabled ? heroTargetScale(window.innerHeight, Infinity) : 1;
    const overflow = Math.ceil(height * Math.max(0, maxScale - 1));
    hero.style.setProperty('--hero-window-overflow', `${overflow}px`);
    schedule();
  }
  function configure() {
    enabled = desktop.matches && !reduced.matches;
    hero.classList.toggle('has-scroll-motion', enabled);
    readScroll();
    value = target; velocity = 0; last = 0;
    hero.style.setProperty('--hero-window-scale', value);
    measure();
  }
  function visibility() {
    if (document.hidden) { cancelAnimationFrame(frame); frame = 0; last = 0; }
    else measure();
  }
  header.classList.add('is-scroll-header');
  const observer = new ResizeObserver(measure);
  observer.observe(shell);
  window.addEventListener('scroll', schedule, {passive: true});
  window.addEventListener('resize', measure, {passive: true});
  document.addEventListener('visibilitychange', visibility);
  desktop.addEventListener('change', configure);
  reduced.addEventListener('change', configure);
  configure();
  return () => {
    cancelAnimationFrame(frame); observer.disconnect();
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', measure);
    document.removeEventListener('visibilitychange', visibility);
    desktop.removeEventListener('change', configure);
    reduced.removeEventListener('change', configure);
    setScrolled(false);
    hero.classList.remove('has-scroll-motion');
    hero.style.removeProperty('--hero-window-scale');
    hero.style.removeProperty('--hero-window-height');
    hero.style.removeProperty('--hero-window-overflow');
    header.classList.remove('is-scroll-header', 'is-scrolled', 'is-past-hero', 'is-header-hidden');
    header.inert = originalInert;
  };
}
