// Verified parameters from Attio's public homepage build, 2026-09-18.
// Readable adaptation; not the original React component.
export const motion = Object.freeze({
  easeUI: 'cubic-bezier(.33,1,.68,1)',
  easeReveal: 'cubic-bezier(0,0,.58,1)',
  easeExit: 'cubic-bezier(.32,0,.67,0)',
  blurEntrance: 2.5, blurCard: 2, blurReveal: 1.5, blurImage: 1,
  entrance: 800, reveal: 600, exit: 300, switch: 500,
  tempo: .85,
  heroTabs: [
    {name:'Ask Attio', duration:11000},
    {name:'Data model', duration:6500},
    {name:'Workflows', duration:17000},
    {name:'Reporting', duration:6500}
  ],
  heroShrinkSpring:{stiffness:120,damping:26,mass:1},
  customerAutoplay:6000,
});
export const withTempo = value => value * motion.tempo;
