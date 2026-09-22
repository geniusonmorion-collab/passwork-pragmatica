// Three synchronized feature scenes in the Figma layout, with Attio-style fades.
import { mountSecurityDashboardMotion } from './security-dashboard-motion.js';

export function mountSecuritySwitcher(section) {
  if (!section) return () => {};
  const gallery = section.querySelector('.security-switcher-grid');
  const choices = [...section.querySelectorAll('.security-choice')];
  const visuals = [...section.querySelectorAll('.security-visual')];
  const progressBars = choices.map(choice => choice.querySelector('.security-choice-progress span'));
  const nextButtons = [...section.querySelectorAll('.security-next-choice')];
  if (!gallery || !choices.length || choices.length !== visuals.length) return () => {};
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const dashboards = visuals.map(visual => mountSecurityDashboardMotion(visual.querySelector('.protection-card')));
  const duration = 8000;
  const dashboardDuration = 12000;
  let active = choices.findIndex(choice => choice.classList.contains('is-active'));
  let elapsed = 0;
  let previous = 0;
  let frame = 0;
  let inView = false;
  let hovered = false;
  let focused = false;
  let disposed = false;

  function select(index) {
    active = index;
    elapsed = 0;
    choices.forEach((choice, i) => {
      const selected = i === index;
      for (const element of [choice, visuals[i]]) {
        element.classList.toggle('is-active', selected);
        element.setAttribute('aria-hidden', String(!selected));
        element.inert = !selected;
      }
    });
    section.dataset.activeFeature = String(index);
    progressBars.forEach(bar => { if (bar) bar.style.transform = 'scaleX(0)'; });
    dashboards.forEach((dashboard, i) => dashboard?.select(i === index));
  }
  function tick(now) {
    frame = 0;
    if (disposed) return;
    elapsed += previous ? Math.min(80, now - previous) : 0;
    previous = now;
    if (elapsed >= (dashboards[active] ? dashboardDuration : duration)) select((active + 1) % choices.length);
    const progress = Math.min(1, elapsed / (dashboards[active] ? dashboardDuration : duration));
    if (progressBars[active]) progressBars[active].style.transform = `scaleX(${progress})`;
    frame = requestAnimationFrame(tick);
  }
  function syncPlayback() {
    dashboards.forEach(dashboard => dashboard?.setPlayback(inView && !document.hidden, reduced.matches));
    const playing = inView && !document.hidden && !reduced.matches && !hovered && !focused;
    section.dataset.autoplay = playing ? 'playing' : 'paused';
    if (playing && !frame) { previous = 0; frame = requestAnimationFrame(tick); }
    if (!playing) { cancelAnimationFrame(frame); frame = 0; previous = 0; }
  }
  const key = event => {
    let next;
    if (event.key === 'ArrowRight') next = (active + 1) % choices.length;
    else if (event.key === 'ArrowLeft') next = (active - 1 + choices.length) % choices.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = choices.length - 1;
    else return;
    event.preventDefault();
    gallery.focus({preventScroll: true});
    select(next);
  };
  const enter = event => { if (event.pointerType !== 'touch') { hovered = true; syncPlayback(); } };
  const nextHandlers = nextButtons.map(button => {
    const click = () => {
      // Move focus out of the outgoing panel before it becomes inert.
      gallery.focus({preventScroll: true});
      select(Number(button.dataset.featureIndex));
    };
    button.addEventListener('click', click);
    return click;
  });
  const leave = () => { hovered = false; syncPlayback(); };
  const focusIn = () => { focused = true; syncPlayback(); };
  const focusOut = event => { if (!gallery.contains(event.relatedTarget)) { focused = false; syncPlayback(); } };
  const observer = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting && entry.intersectionRatio >= .3;
    syncPlayback();
  }, {threshold: [0, .3]});
  observer.observe(gallery);
  gallery.addEventListener('keydown', key);
  gallery.addEventListener('pointerenter', enter);
  gallery.addEventListener('pointerleave', leave);
  gallery.addEventListener('focusin', focusIn);
  gallery.addEventListener('focusout', focusOut);
  document.addEventListener('visibilitychange', syncPlayback);
  reduced.addEventListener('change', syncPlayback);
  select(Math.max(0, active));
  syncPlayback();
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    observer.disconnect();
    dashboards.forEach(dashboard => dashboard?.destroy());
    nextButtons.forEach((button, index) => button.removeEventListener('click', nextHandlers[index]));
    gallery.removeEventListener('keydown', key);
    gallery.removeEventListener('pointerenter', enter);
    gallery.removeEventListener('pointerleave', leave);
    gallery.removeEventListener('focusin', focusIn);
    gallery.removeEventListener('focusout', focusOut);
    document.removeEventListener('visibilitychange', syncPlayback);
    reduced.removeEventListener('change', syncPlayback);
  };
}
