// Port of reserve-clone/app/what-you-get.tsx. Only motion is transferred;
// the current copy, artwork, column proportions and container width stay intact.
const clamp = value => Math.max(0, Math.min(1, value));
const layoutTop = element => {
  let top = 0;
  for (let node = element; node; node = node.offsetParent) top += node.offsetTop;
  return top;
};

export function mountFeatureStack(stack) {
  if (!stack) return () => {};
  const cards = [...stack.querySelectorAll('.feature-card')];
  const faces = cards.map(card => card.querySelector('.feature-row'));
  const visuals = cards.map(card => {
    const art = card.querySelector('.feature-art');
    const visual = document.createElement('div');
    visual.className = 'feature-art-visual';
    visual.append(...art.childNodes);
    art.append(visual);
    return visual;
  });
  const triggers = [...stack.querySelectorAll('.feature-stack-trigger')];
  const desktop = matchMedia('(min-width: 810px)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const entrances = new Set();
  const revealed = new WeakSet();
  let frame = 0;
  let disposed = false;

  // A one-second spring without overshoot, matching the source's text reveal.
  const revealFrames = Array.from({length: 61}, (_, index) => {
    const t = index / 60;
    const progress = (1 - (1 + 10 * t) * Math.exp(-10 * t)) / (1 - 11 * Math.exp(-10));
    return {offset: t, opacity: progress, transform: `translateY(${24 * (1 - progress)}px)`};
  });
  const revealObserver = new IntersectionObserver(entries => {
    for (const {target, isIntersecting, intersectionRatio} of entries) {
      if (!isIntersecting || intersectionRatio < .5 || revealed.has(target)) continue;
      revealed.add(target);
      revealObserver.unobserve(target);
      target.classList.add('is-revealed');
      if (reduced.matches) continue;
      const delay = target.matches('h3') ? 100 : target.matches('.feature-label') ? 0 : 200;
      const animation = target.animate(revealFrames, {duration: 1000, delay, fill: 'backwards', easing: 'linear'});
      entrances.add(animation);
      animation.finished.then(() => entrances.delete(animation), () => entrances.delete(animation));
    }
  }, {threshold: .5});
  const copy = [...stack.querySelectorAll('.feature-copy > *')];
  copy.forEach(element => {
    element.classList.add('feature-reveal');
    revealObserver.observe(element);
  });

  function update() {
    frame = 0;
    if (disposed) return;
    const active = desktop.matches && !reduced.matches;
    const scroll = window.scrollY;
    const height = window.innerHeight;
    // Read before writing transforms. The hidden triggers stay in normal layout.
    const exits = triggers.slice(1).map(target => active
      ? clamp((scroll - (layoutTop(target) - 1 - height * .5)) / Math.max(1, target.clientHeight))
      : 0);
    const imageProgress = visuals.map(element => reduced.matches ? 1
      : clamp((scroll + height - layoutTop(element)) / Math.max(1, element.clientHeight)));
    cards.forEach((card, index) => {
      const progress = exits[index] || 0;
      // The source moves the first inner face and the second sticky card.
      const target = index === 1 ? card : faces[index];
      target.style.opacity = String(1 - progress);
      target.style.transform = progress
        ? `translateY(${-24 * progress}px) scale(${1 - .1 * progress})`
        : 'none';
      const image = visuals[index];
      image.style.opacity = String(imageProgress[index]);
      image.style.transform = reduced.matches ? 'none' : `scale(${1.1 - .1 * imageProgress[index]})`;
    });
  }
  function schedule() {
    if (!frame && !disposed) frame = requestAnimationFrame(update);
  }
  function measure() {
    const active = desktop.matches && !reduced.matches;
    stack.classList.toggle('has-stack-motion', active);
    // This is the final section on our page. Leave room to see the entire last card.
    const tail = active ? Math.max(0, innerHeight - 120 - cards.at(-1).offsetHeight) : 0;
    const value = `${tail}px`;
    if (stack.style.getPropertyValue('--feature-stack-tail') !== value) stack.style.setProperty('--feature-stack-tail', value);
    if (reduced.matches) {
      entrances.forEach(animation => animation.cancel());
      entrances.clear();
    }
    schedule();
  }
  const resize = new ResizeObserver(measure);
  resize.observe(document.documentElement);
  cards.forEach(card => resize.observe(card));
  window.addEventListener('scroll', schedule, {passive: true});
  window.addEventListener('resize', measure);
  stack.addEventListener('load', measure, true);
  desktop.addEventListener('change', measure);
  reduced.addEventListener('change', measure);
  measure();
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    resize.disconnect();
    revealObserver.disconnect();
    entrances.forEach(animation => animation.cancel());
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', measure);
    stack.removeEventListener('load', measure, true);
    desktop.removeEventListener('change', measure);
    reduced.removeEventListener('change', measure);
    stack.classList.remove('has-stack-motion');
    stack.style.removeProperty('--feature-stack-tail');
    [...cards, ...faces, ...visuals].forEach(element => {
      element.style.removeProperty('opacity');
      element.style.removeProperty('transform');
    });
    copy.forEach(element => element.classList.remove('feature-reveal', 'is-revealed'));
    visuals.forEach(element => element.replaceWith(...element.childNodes));
  };
}
