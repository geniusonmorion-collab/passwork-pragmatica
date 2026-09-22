// Reference only: Attio public bundle, source/reference/0y14chldcipxr.js.
// Original radar keyframes and JSX component before Passwork adaptation.
const radarCSS = `
@keyframes pipeline-radar-ring-inner {
  0% { opacity: 0.11; }
  16% { opacity: 0.22; }
  50% { opacity: 0.07; }
  68% { opacity: 0.11; }
  100% { opacity: 0.11; }
}
@keyframes pipeline-radar-ring-outer {
  0% { opacity: 0.067; }
  16% { opacity: 0.135; }
  50% { opacity: 0.045; }
  68% { opacity: 0.067; }
  100% { opacity: 0.067; }
}
@keyframes pipeline-radar-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
.pipeline-radar-ring-inner {
  opacity: 0.11;
  animation: pipeline-radar-ring-inner 3.6s ease-in-out infinite;
}
.pipeline-radar-ring-outer {
  opacity: 0.067;
  animation: pipeline-radar-ring-outer 3.6s ease-in-out infinite;
}
.pipeline-radar-bob {
  transform-box: fill-box;
  transform-origin: center;
  will-change: transform;
  animation: pipeline-radar-bob 4s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .pipeline-radar-ring-inner,
  .pipeline-radar-ring-outer,
  .pipeline-radar-bob {
    animation: none;
  }
}
`;

title: "Agents dig. You close.", visual: (0, t.jsx)(function() {
    return (0, t.jsxs)("svg", { viewBox: "0 0 320 320", className: "mx-auto h-auto w-full max-w-[160px] lg:max-w-[320px]", "aria-hidden": true, children: [(0, t.jsx)("style", { dangerouslySetInnerHTML: { __html: E } }), (0, t.jsx)("circle", { className: "pipeline-radar-ring-outer", cx: 160, cy: 160, r: 148, fill: "none", stroke: "rgba(28,40,64,0.9)", strokeWidth: "1", style: { animationDelay: "0.4s" } }), (0, t.jsx)("circle", { className: "pipeline-radar-ring-inner", cx: 160, cy: 160, r: 100, fill: "none", stroke: "rgba(28,40,64,0.9)", strokeWidth: "1" }), (0, t.jsx)("circle", { cx: 160, cy: 160, r: 56, fill: "var(--color-white-100)", stroke: "rgba(28,40,64,0.05)", strokeWidth: "1", style: { filter: "drop-shadow(0 8px 20px rgba(28,40,64,0.12))" } }), (0, t.jsx)("image", { href: C.src, x: 137, y: 138.5, width: 46, height: 43, preserveAspectRatio: "xMidYMid meet" }), k.map((e10, a10) => {
      let r2 = Math.round(6.7 * e10.label.length) + 24, s2 = e10.cx - r2 / 2;
      return (0, t.jsx)("g", { className: "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-2 motion-safe:fill-mode-both motion-safe:duration-500", style: { animationDelay: `${120 * a10}ms`, transformBox: "fill-box", transformOrigin: "center" }, children: (0, t.jsxs)("g", { className: "pipeline-radar-bob", style: { animationDelay: `${1e3 + 650 * a10}ms`, animationDuration: `${3800 + 350 * a10}ms` }, children: [(0, t.jsx)("rect", { x: s2, y: e10.cy - 13, width: r2, height: 26, rx: 9, fill: e10.bg, stroke: e10.border, strokeWidth: "1.27" }), (0, t.jsx)("text", { x: e10.cx, y: e10.cy, textAnchor: "middle", dominantBaseline: "central", fontSize: "13", fontWeight: 500, letterSpacing: "-0.13", fill: e10.fg, children: e10.label })] }) }, e10.label);
    })] });
  }, {}) }
