;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "c9cb7d86-5547-025a-243d-e6a5c2b2325d");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 579396, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(12594), a = e.i(167815), n = e.i(551360);
  try {
    var s = window;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["HelpIndexPopularSearches", 0, function({ className: e2 }) {
    let { openSearchModal: s2 } = (0, r.useSearchModal)();
    return (0, t.jsxs)("div", { className: (0, n.cn)("flex items-center gap-x-2.5 gap-y-2 text-accent-foreground", "max-lg:flex-col", e2), children: [(0, t.jsx)("p", { className: "shrink-0 text-accent-foreground text-sm", children: "Popular searches:" }), (0, t.jsxs)("ul", { className: "flex gap-1.5 text-xs", children: [(0, t.jsx)("li", { children: (0, t.jsx)(a.Button, { variant: "outline", size: "xs", className: "!bg-secondary-background hover:!bg-surface-subtle !text-accent-foreground h-7", onClick: () => {
      s2("importing");
    }, children: "importing" }) }), (0, t.jsx)("li", { children: (0, t.jsx)(a.Button, { variant: "outline", size: "xs", className: "!bg-secondary-background hover:!bg-surface-subtle !text-accent-foreground h-7", onClick: () => {
      s2("billing");
    }, children: "billing" }) }), (0, t.jsx)("li", { children: (0, t.jsx)(a.Button, { variant: "outline", size: "xs", className: "!bg-secondary-background hover:!bg-surface-subtle !text-accent-foreground h-7", onClick: () => {
      s2("integrations");
    }, children: "integrations" }) })] })] });
  }, "HelpIndexPopularSearchesFallback", 0, function({ className: e2 }) {
    return (0, t.jsxs)("div", { className: (0, n.cn)("flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 text-accent-foreground", e2), children: [(0, t.jsx)("p", { className: "shrink-0 text-sm", children: "Popular searches:" }), (0, t.jsxs)("ul", { className: "flex gap-1.5 text-xs", children: [(0, t.jsx)("li", { children: (0, t.jsx)("button", { type: "button", className: "rounded-lg border border-weak-stroke bg-secondary-background px-[7px] py-[3px] transition-[background-color,border,box-shadow] duration-150 ease-out hover:bg-white-300 active:border-subtle-stroke", children: "importing" }) }), (0, t.jsx)("li", { children: (0, t.jsx)("button", { type: "button", className: "rounded-lg border border-weak-stroke bg-secondary-background px-[7px] py-[3px] transition-[background-color,border,box-shadow] duration-150 ease-out hover:bg-white-300 active:border-subtle-stroke", children: "billing" }) }), (0, t.jsx)("li", { children: (0, t.jsx)("button", { type: "button", className: "rounded-lg border border-weak-stroke bg-secondary-background px-[7px] py-[3px] transition-[background-color,border,box-shadow] duration-150 ease-out hover:bg-white-300 active:border-subtle-stroke", children: "integrations" }) })] })] });
  }]);
}, 629857, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(12594), a = e.i(67232);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["HelpIndexSearch", 0, function({ searchPlaceholder: e2 }) {
    let { openSearchModal: n2 } = (0, r.useSearchModal)();
    return (0, t.jsx)(a.SearchTriggerButton, { onClick: () => n2(), placeholder: e2, className: "w-full max-w-80" });
  }, "HelpIndexSearchFallback", 0, function({ searchPlaceholder: e2 }) {
    return (0, t.jsx)(a.SearchTriggerButton, { placeholder: e2, className: "w-full max-w-80" });
  }]);
}, 845400, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(549174), a = e.i(856757), n = e.i(351188), s = e.i(112086), o = e.i(551360);
  try {
    var i = window;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function l({ width: e2, height: r2, radius: n2 }) {
    let { horizontalRatio: i2, angleRatio: d2, verticalRatio: c2 } = (0, a.useMemo)(() => {
      let t2 = e2 - 2 * n2, a2 = r2 - 2 * n2, s2 = 2 * Math.PI * n2 / 4, o2 = 2 * t2 + 2 * a2 + 4 * s2;
      return { angleRatio: s2 / o2, horizontalRatio: t2 / o2, verticalRatio: a2 / o2 };
    }, [e2, r2, n2]);
    return (0, t.jsx)(s.motion.div, { className: "absolute -inset-px", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1, ease: "easeInOut" }, children: (0, t.jsx)(s.motion.div, { className: (0, o.cn)("h-full w-full", "bg-[conic-gradient(from_var(--angle)_at_var(--x)_var(--y)_in_oklch,#A3ECE900,#A3ECE9_20deg,#709FF5_100deg,#709FF500_120deg)]"), animate: { "--angle": ["-80deg", "-80deg", "10deg", "10deg", "100deg", "100deg", "190deg", "190deg", "280deg"], "--x": [`${n2}px`, `${e2 - n2}px`, `${e2 - n2}px`, `${e2 - n2}px`, `${e2 - n2}px`, `${n2}px`, `${n2}px`, `${n2}px`, `${n2}px`], "--y": [`${n2}px`, `${n2}px`, `${n2}px`, `${r2 - n2}px`, `${r2 - n2}px`, `${r2 - n2}px`, `${r2 - n2}px`, `${n2}px`, `${n2}px`] }, transition: { duration: 4, ease: "linear", repeat: 1 / 0, times: [0, i2, i2 + d2, i2 + d2 + c2, i2 + 2 * d2 + c2, 2 * i2 + 2 * d2 + c2, 2 * i2 + 3 * d2 + c2, 2 * i2 + 3 * d2 + 2 * c2, 2 * i2 + 4 * d2 + 2 * c2] }, style: { borderRadius: n2 } }) });
  }
  var d = e.i(508324);
  try {
    var c = window;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function u({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", ...e2, children: (0, t.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.64646 2.64645C4.4512 2.84171 4.4512 3.15829 4.64646 3.35355L7.29291 6L4.64646 8.64645C4.4512 8.84171 4.4512 9.15829 4.64646 9.35355C4.84172 9.54882 5.15831 9.54882 5.35357 9.35355L8.35357 6.35355C8.54883 6.15829 8.54883 5.84171 8.35357 5.64645L5.35357 2.64645C5.15831 2.45118 4.84172 2.45118 4.64646 2.64645Z", fill: "currentColor" }) });
  }
  try {
    var x = window;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AnimatedKicker", 0, function({ badge: e2, title: s2, link: i2 }) {
    let c2 = (0, a.useRef)(null), x2 = (0, r.useInView)(c2), [p, { width: g, height: h }] = (0, n.useMeasure)();
    return (0, t.jsx)("div", { ref: c2, "data-visual-test": "blackout", children: (0, t.jsxs)(d.AttioLink, { ref: p, className: (0, o.cn)("group relative", "block border border-weak-stroke active:border-subtle-stroke", "transition-colors duration-300 ease-in-out"), style: { borderRadius: 13 }, href: i2.href, target: i2.target, children: [x2 && !!g && !!h && (0, t.jsx)(l, { width: g, height: h, radius: 13 }), (0, t.jsxs)("div", { className: (0, o.cn)("relative flex items-center gap-x-1", "py-[5px] pr-[7px] pl-[11px]", "bg-white-100 hover:bg-[#FBFBFC]", "transition-colors duration-300 ease-in-out", "font-medium text-[13px]/[18px] text-secondary-foreground"), style: { borderRadius: 13 }, children: [e2 && e2.length > 0 && (0, t.jsx)("span", { className: "text-blue-500", children: e2 }), (0, t.jsx)("span", { className: "text-balance", children: s2 }), (0, t.jsx)(u, { className: "transition-transform duration-300 ease-in-out group-hover:-translate-x-px group-hover:duration-50 group-active:translate-x-0 group-active:duration-50 motion-reduce:transition-none" })] })] }) });
  }], 845400);
}]);
