;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "66b7e245-bbe7-b2e1-72dc-e7ea33bede84");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 898752, 257954, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(969436), r = e.i(894584), n = e.i(551360);
  try {
    var s = window;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let l = () => (0, t.jsxs)("div", { className: "absolute inset-0", children: [(0, t.jsx)("div", { className: "absolute inset-0 flex flex-col justify-evenly", children: Array.from({ length: 11 }).map((e2, a2) => (0, t.jsx)(r.AttioLine, { dashed: a2 % 2 == 0, className: "text-black-100" }, a2)) }), (0, t.jsx)("div", { className: "absolute inset-0 flex justify-evenly", children: Array.from({ length: 23 }).map((e2, a2) => (0, t.jsx)(r.AttioLine, { vertical: true, dashed: a2 % 2 == 0, className: (0, n.cn)("text-black-100", { "max-lg:hidden": a2 > 11 }) }, a2)) })] });
  try {
    var o = window;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let i = (0, a.default)(() => e.A(129156).then((e2) => ({ default: e2.EngBlogHeroArtworkCanvas })), { loadableGenerated: { modules: [783804] }, loading: () => (0, t.jsx)("div", { className: "size-full" }), ssr: false });
  e.s(["EngBlogHeroArtworkBase", 0, function({ config: e2 }) {
    return (0, t.jsxs)("div", { className: "absolute inset-0 flex items-center justify-center overflow-hidden", children: [(0, t.jsx)(l, {}), (0, t.jsx)(i, { config: e2 })] });
  }], 898752);
  try {
    var c = window;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["DEFAULT_CONFIG", 0, { scene: { position: [-8, -20, 0], rotation: [0.5, 2.45, 0] }, shader: { distort: 0.2, distortSpeed: 2, noiseScale: 18, noiseSpeed: 0.12, noiseWeight: 2 } }], 257954);
}, 129156, (e) => {
  e.v((t) => Promise.all(["static/immutable/chunks/2atn4vdwtxlgv.js"].map((t2) => e.l(t2))).then(() => t(783804)));
}, 123509, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(898752), r = e.i(257954);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["EngBlogHeroArtwork", 0, function() {
    return (0, t.jsx)(a.EngBlogHeroArtworkBase, { config: r.DEFAULT_CONFIG });
  }]);
}, 424933, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(422309);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["EngBlogIndexTitle", 0, function() {
    let { ref: e2, replay: r2 } = (0, a.useScramble)({ text: "Attio Engineering Blog" });
    return (0, t.jsx)("h1", { ref: e2, onMouseEnter: () => {
      r2();
    }, className: "cursor-default font-mono text-sm uppercase", children: " " });
  }]);
}, 162435, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(193862), r = e.i(633494);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["BlogPostsGridClientWithQuery", 0, function({ ...e2 }) {
    let [n2, s] = (0, a.useQueryState)("category", { clearOnDefault: false, defaultValue: "All" });
    return (0, t.jsx)(r.BlogPostsGridClient, { externalSelectedCategory: n2, externalSetSelectedCategory: s, ...e2 });
  }]);
}, 633494, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(140802), r = e.i(112086), n = e.i(224253), s = e.i(856757), l = e.i(968351), o = e.i(894584), i = e.i(861424), c = e.i(167815), d = e.i(194510), u = e.i(551360), g = e.i(835349);
  try {
    var x = window;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function m({ label: e2, count: a2, onClick: r2, isActive: n2 }) {
    return (0, t.jsxs)(c.Button, { size: "md", variant: "ghost", className: (0, u.cn)("justify-start gap-1 text-xl max-lg:text-lg max-xl:w-full", { "pointer-events-none": n2 }), onClick: r2, children: [(0, t.jsx)("span", { className: (0, u.cn)("text-accent-foreground", { "shrink truncate text-primary-foreground": n2 }), children: e2 }), (0, t.jsxs)("span", { className: "align-super text-overline", children: ["[", a2, "]"] })] });
  }
  e.s(["BlogPostsGridClient", 0, function({ posts: e2, featuredPostsCount: c2, variant: x2 = "default", externalSelectedCategory: y, externalSetSelectedCategory: p, className: h, ...v }) {
    let [M, f] = (0, s.useState)(null), [j, b] = (0, s.useState)(false);
    (0, s.useEffect)(() => {
      y && f(y);
    }, [y]);
    let w = Array.from(new Set(e2.map((e3) => e3.content.category))).sort((e3, t2) => e3.localeCompare(t2)).map((t2) => ({ count: e2.filter((e3) => e3.content.category === t2).length, name: t2 })), _ = M ? e2.toSorted((e3, t2) => {
      let a2 = e3.content.category === M, r2 = t2.content.category === M;
      return a2 && !r2 ? -1 : !a2 && r2 ? 1 : 0;
    }) : e2, k = new Map(e2.map((e3, t2) => [e3.id, t2])), A = new Map(_.map((e3, t2) => [e3.id, k.get(e3.id) !== t2]));
    return (0, t.jsx)("div", { className: (0, u.cn)({ "bg-secondary-background": "secondaryBackground" === x2 }, h), ...v, children: (0, t.jsx)("div", { className: "container", children: (0, t.jsxs)("div", { className: "border-subtle-stroke border-x", children: [(0, t.jsx)(i.HeaderForSection, { title: "Latest articles", justify: "start", className: "!pb-12 lg:grid-cols-24" }), (0, t.jsx)(o.AttioLine, { className: "max-lg:hidden" }), (0, t.jsx)(o.AttioLine, { dashed: true, className: "lg:hidden" }), (0, t.jsxs)("div", { className: "relative grid grid-cols-24 max-lg:grid-cols-12", children: [(0, t.jsxs)("div", { className: (0, u.cn)("scrollbar-none relative col-[2/7] py-12", "max-lg:col-[1/-1] max-lg:overflow-x-scroll max-lg:px-[8.3333333333%] max-lg:py-6", { "col-[2/9] max-xl:col-[2/7]": 3 === c2 }), children: [(0, t.jsxs)("ul", { className: "-mx-3.25 flex w-full flex-col gap-0.5 max-lg:flex-row", children: [(0, t.jsx)("li", { children: (0, t.jsx)(m, { label: "All articles", count: e2.length, onClick: () => void (p ? p("All") : f("All")), isActive: "All" === M }) }), w.map((e3) => (0, t.jsx)("li", { children: (0, t.jsx)(m, { label: e3.name, count: e3.count, onClick: () => {
      var t2;
      return t2 = e3.name, void (p ? p(t2) : f(t2));
    }, isActive: M === e3.name }) }, e3.name))] }), (0, t.jsx)(o.AttioLine, { vertical: true, className: "absolute inset-y-0 right-0 max-lg:hidden" })] }), (0, t.jsx)(o.AttioLine, { className: "col-[1/-1] lg:hidden" }), (0, t.jsx)("div", { className: (0, u.cn)("relative isolate col-[7/-1] max-lg:col-[1/-1]", { "col-[9/-1] max-xl:col-[7/-1]": 3 === c2 }), children: (0, t.jsx)(a.AnimatePresence, { mode: "wait", children: _.map((a2, s2) => {
      let i2 = s2 === _.findLastIndex((e3) => e3.content.category === M);
      return (0, t.jsxs)(r.motion.div, { layout: true, layoutId: `post-${a2.id}`, transition: { layout: { duration: 0.4, ease: "easeInOut" } }, onLayoutAnimationStart: () => b(true), onLayoutAnimationComplete: () => b(false), className: (0, u.cn)("relative z-10 bg-primary-background", { "bg-secondary-background": "secondaryBackground" === x2 }), children: [(0, t.jsxs)(n.default, { href: `/${a2.full_slug}`, className: (0, u.cn)("group relative grid grid-cols-16 items-baseline py-7 max-lg:grid-cols-12", "transition-[opacity,filter,background-color] duration-500 ease-in-out", { "bg-primary-background": "secondaryBackground" === x2 && M && M === a2.content.category, "bg-secondary-background": M && M === a2.content.category, "blur-[1px]": j && A.get(a2.id) }), children: [(0, t.jsx)(l.AttioHoverUnderlay, { className: (0, u.cn)({ "bg-surface-subtle": "secondaryBackground" === x2 && (!M || M !== a2.content.category), "dark:bg-primary-background dark:mix-blend-screen": M && M === a2.content.category }) }), (0, t.jsx)("h3", { className: "relative col-[2/10] text-balance text-lg max-lg:pt-6", children: a2.content.title }), a2.first_published_at && (0, t.jsx)("p", { className: "relative col-[11/13] text-overline max-lg:col-[-6/-2] max-lg:row-1 max-lg:justify-self-end", children: (0, g.formatDateForBlog)(a2.first_published_at) }), (0, t.jsxs)("p", { className: "relative col-[13/15] truncate text-overline max-lg:col-[2/6] max-lg:row-1", children: ["[", a2.content.category, "]"] }), (0, t.jsx)(d.ArrowRight14, { className: (0, u.cn)("relative top-0.5 col-[-3/-2] justify-self-end text-caption-foreground", "max-lg:hidden", "transition-[translate,color] duration-400 ease-in-out", "group-hover:translate-x-0.5 group-hover:duration-150", "group-active:translate-x-0.5 group-active:duration-50") }), (0, t.jsx)("p", { className: "relative col-[2/-2] line-clamp-2 max-w-[28em] text-pretty pt-2 text-accent-foreground text-sm max-xl:text-sm", children: a2.content.summary })] }), (0, t.jsx)(o.AttioLine, { dashed: !i2, className: (0, u.cn)({ "bg-secondary-background": M && M === a2.content.category, "blur-[1px]": M && "All" !== M && M !== a2.content.category, hidden: s2 === e2.length - 1 }) })] }, a2.id);
    }) }) })] })] }) }) });
  }]);
}]);
