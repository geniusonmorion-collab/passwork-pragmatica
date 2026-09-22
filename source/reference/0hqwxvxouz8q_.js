;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "8cd665dc-0c24-0116-4003-849f90e74a97");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 162435, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(193862), l = e.i(633494);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["BlogPostsGridClientWithQuery", 0, function({ ...e2 }) {
    let [r2, n] = (0, a.useQueryState)("category", { clearOnDefault: false, defaultValue: "All" });
    return (0, t.jsx)(l.BlogPostsGridClient, { externalSelectedCategory: r2, externalSetSelectedCategory: n, ...e2 });
  }]);
}, 633494, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(140802), l = e.i(112086), r = e.i(224253), n = e.i(856757), o = e.i(968351), s = e.i(894584), c = e.i(861424), i = e.i(167815), d = e.i(194510), u = e.i(551360), g = e.i(835349);
  try {
    var x = window;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function m({ label: e2, count: a2, onClick: l2, isActive: r2 }) {
    return (0, t.jsxs)(i.Button, { size: "md", variant: "ghost", className: (0, u.cn)("justify-start gap-1 text-xl max-lg:text-lg max-xl:w-full", { "pointer-events-none": r2 }), onClick: l2, children: [(0, t.jsx)("span", { className: (0, u.cn)("text-accent-foreground", { "shrink truncate text-primary-foreground": r2 }), children: e2 }), (0, t.jsxs)("span", { className: "align-super text-overline", children: ["[", a2, "]"] })] });
  }
  e.s(["BlogPostsGridClient", 0, function({ posts: e2, featuredPostsCount: i2, variant: x2 = "default", externalSelectedCategory: y, externalSetSelectedCategory: p, className: h, ...v }) {
    let [b, j] = (0, n.useState)(null), [f, N] = (0, n.useState)(false);
    (0, n.useEffect)(() => {
      y && j(y);
    }, [y]);
    let k = Array.from(new Set(e2.map((e3) => e3.content.category))).sort((e3, t2) => e3.localeCompare(t2)).map((t2) => ({ count: e2.filter((e3) => e3.content.category === t2).length, name: t2 })), A = b ? e2.toSorted((e3, t2) => {
      let a2 = e3.content.category === b, l2 = t2.content.category === b;
      return a2 && !l2 ? -1 : !a2 && l2 ? 1 : 0;
    }) : e2, w = new Map(e2.map((e3, t2) => [e3.id, t2])), M = new Map(A.map((e3, t2) => [e3.id, w.get(e3.id) !== t2]));
    return (0, t.jsx)("div", { className: (0, u.cn)({ "bg-secondary-background": "secondaryBackground" === x2 }, h), ...v, children: (0, t.jsx)("div", { className: "container", children: (0, t.jsxs)("div", { className: "border-subtle-stroke border-x", children: [(0, t.jsx)(c.HeaderForSection, { title: "Latest articles", justify: "start", className: "!pb-12 lg:grid-cols-24" }), (0, t.jsx)(s.AttioLine, { className: "max-lg:hidden" }), (0, t.jsx)(s.AttioLine, { dashed: true, className: "lg:hidden" }), (0, t.jsxs)("div", { className: "relative grid grid-cols-24 max-lg:grid-cols-12", children: [(0, t.jsxs)("div", { className: (0, u.cn)("scrollbar-none relative col-[2/7] py-12", "max-lg:col-[1/-1] max-lg:overflow-x-scroll max-lg:px-[8.3333333333%] max-lg:py-6", { "col-[2/9] max-xl:col-[2/7]": 3 === i2 }), children: [(0, t.jsxs)("ul", { className: "-mx-3.25 flex w-full flex-col gap-0.5 max-lg:flex-row", children: [(0, t.jsx)("li", { children: (0, t.jsx)(m, { label: "All articles", count: e2.length, onClick: () => void (p ? p("All") : j("All")), isActive: "All" === b }) }), k.map((e3) => (0, t.jsx)("li", { children: (0, t.jsx)(m, { label: e3.name, count: e3.count, onClick: () => {
      var t2;
      return t2 = e3.name, void (p ? p(t2) : j(t2));
    }, isActive: b === e3.name }) }, e3.name))] }), (0, t.jsx)(s.AttioLine, { vertical: true, className: "absolute inset-y-0 right-0 max-lg:hidden" })] }), (0, t.jsx)(s.AttioLine, { className: "col-[1/-1] lg:hidden" }), (0, t.jsx)("div", { className: (0, u.cn)("relative isolate col-[7/-1] max-lg:col-[1/-1]", { "col-[9/-1] max-xl:col-[7/-1]": 3 === i2 }), children: (0, t.jsx)(a.AnimatePresence, { mode: "wait", children: A.map((a2, n2) => {
      let c2 = n2 === A.findLastIndex((e3) => e3.content.category === b);
      return (0, t.jsxs)(l.motion.div, { layout: true, layoutId: `post-${a2.id}`, transition: { layout: { duration: 0.4, ease: "easeInOut" } }, onLayoutAnimationStart: () => N(true), onLayoutAnimationComplete: () => N(false), className: (0, u.cn)("relative z-10 bg-primary-background", { "bg-secondary-background": "secondaryBackground" === x2 }), children: [(0, t.jsxs)(r.default, { href: `/${a2.full_slug}`, className: (0, u.cn)("group relative grid grid-cols-16 items-baseline py-7 max-lg:grid-cols-12", "transition-[opacity,filter,background-color] duration-500 ease-in-out", { "bg-primary-background": "secondaryBackground" === x2 && b && b === a2.content.category, "bg-secondary-background": b && b === a2.content.category, "blur-[1px]": f && M.get(a2.id) }), children: [(0, t.jsx)(o.AttioHoverUnderlay, { className: (0, u.cn)({ "bg-surface-subtle": "secondaryBackground" === x2 && (!b || b !== a2.content.category), "dark:bg-primary-background dark:mix-blend-screen": b && b === a2.content.category }) }), (0, t.jsx)("h3", { className: "relative col-[2/10] text-balance text-lg max-lg:pt-6", children: a2.content.title }), a2.first_published_at && (0, t.jsx)("p", { className: "relative col-[11/13] text-overline max-lg:col-[-6/-2] max-lg:row-1 max-lg:justify-self-end", children: (0, g.formatDateForBlog)(a2.first_published_at) }), (0, t.jsxs)("p", { className: "relative col-[13/15] truncate text-overline max-lg:col-[2/6] max-lg:row-1", children: ["[", a2.content.category, "]"] }), (0, t.jsx)(d.ArrowRight14, { className: (0, u.cn)("relative top-0.5 col-[-3/-2] justify-self-end text-caption-foreground", "max-lg:hidden", "transition-[translate,color] duration-400 ease-in-out", "group-hover:translate-x-0.5 group-hover:duration-150", "group-active:translate-x-0.5 group-active:duration-50") }), (0, t.jsx)("p", { className: "relative col-[2/-2] line-clamp-2 max-w-[28em] text-pretty pt-2 text-accent-foreground text-sm max-xl:text-sm", children: a2.content.summary })] }), (0, t.jsx)(s.AttioLine, { dashed: !c2, className: (0, u.cn)({ "bg-secondary-background": b && b === a2.content.category, "blur-[1px]": b && "All" !== b && b !== a2.content.category, hidden: n2 === e2.length - 1 }) })] }, a2.id);
    }) }) })] })] }) }) });
  }]);
}]);
