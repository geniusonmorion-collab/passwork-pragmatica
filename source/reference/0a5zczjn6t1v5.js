;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "34b4d20e-9082-a2b8-b261-8eaaa3b1499e");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 649832, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(112086), s = e.i(915501), i = e.i(224253), l = e.i(856757), r = e.i(894584), n = e.i(167815), o = e.i(945457), d = e.i(145408), c = e.i(551360);
  try {
    var x = window;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AppsIndexSectionCta", 0, function({ icons: e2, ctaTextPrimary: x2, ctaTextSecondary: u, ctaButtonText: m, ctaButtonLink: h }) {
    let p = (0, l.useMemo)(() => {
      let t2 = e2.slice(0, 15), a2 = Math.max(0, 15 - t2.length);
      return [...t2, ...Array(a2).fill(null)];
    }, [e2]), [g, v] = (0, l.useState)(null);
    (0, l.useEffect)(() => {
      let e3 = Array.from({ length: 15 }, (e4, t3) => t3).toSorted(() => Math.random() - 0.5), t2 = e3.map((e4, t3) => p[e4] ? t3 : -1).filter((e4) => -1 !== e4).toSorted(() => Math.random() - 0.5), a2 = Array(15).fill(1.5);
      t2.forEach((e4, t3) => {
        a2[e4] = 0.08 * t3;
      }), v({ delays: a2, indices: e3 });
    }, [p]);
    let f = g?.indices ?? Array.from({ length: 15 }, (e3, t2) => t2), j = g?.delays ?? p.map((e3) => 1.5 * !e3);
    return (0, t.jsx)("section", { className: "relative w-full overflow-hidden bg-white-200", children: (0, t.jsx)("div", { className: "container", children: (0, t.jsx)("div", { className: "overflow-hidden border-subtle-stroke border-x", children: (0, t.jsx)("div", { className: "py-20", children: (0, t.jsxs)("div", { className: "relative grid grid-cols-12", children: [(0, t.jsx)(r.AttioLine, { dashed: true, className: "absolute top-0 -translate-y-1/2" }), (0, t.jsx)(r.AttioLine, { dashed: true, className: "absolute bottom-0 translate-y-1/2" }), (0, t.jsxs)("div", { className: (0, c.cn)("col-[2/7] flex flex-col justify-center pr-8", "max-lg:col-[2/-2] max-lg:pt-14 max-lg:pb-16"), children: [(0, t.jsxs)("div", { className: "col-[2/-2] text-balance text-heading-responsive-sm", children: [(0, t.jsx)("h2", { className: "inline", children: x2 }), " ", (0, t.jsx)("p", { className: "inline font-medium text-black-800 text-heading-responsive-sm", children: u })] }), (0, t.jsx)("div", { className: "mt-6 flex gap-2", children: (0, t.jsx)(n.Button, { size: "responsive", asChild: true, children: (0, t.jsx)(i.default, { ...(0, d.getStoryblokLinkProps)(h), children: m }) }) })] }), (0, t.jsxs)("div", { className: (0, c.cn)("relative col-[8/-2] grid grid-cols-5 grid-rows-3 flex-col items-center", "max-xl:col-[7/-2]", "max-lg:col-[2/-2]"), children: [(0, t.jsx)(r.AttioLine, { dashed: true, className: (0, c.cn)("absolute top-0 left-1/2 w-screen -translate-x-1/2 -translate-y-1/2", "lg:hidden") }), (0, t.jsx)(r.AttioLine, { dashed: true, vertical: true, className: (0, c.cn)("absolute top-1/2 left-0 h-screen -translate-x-1/2 -translate-y-1/2", "max-lg:hidden") }), (0, t.jsx)(r.AttioLine, { dashed: true, vertical: true, className: (0, c.cn)("absolute top-1/2 right-0 h-screen translate-x-1/2 -translate-y-1/2", "max-lg:hidden") }), f.map((e3, i2) => {
      let l2 = p[e3];
      return (0, t.jsxs)(a.motion.div, { initial: { filter: "blur(1px)", opacity: 0 }, whileInView: { filter: "blur(0px)", opacity: 1 }, transition: { delay: j[i2], duration: 1, ease: "easeOut" }, viewport: { once: true }, className: (0, c.cn)("relative flex aspect-square items-center justify-center", { "bg-white-100": l2, "bg-white-200": !l2 }), children: [(0, t.jsx)(r.AttioLine, { className: "absolute inset-x-0 top-0 -translate-y-1/2" }), (0, t.jsx)(r.AttioLine, { className: "absolute inset-x-0 bottom-0 translate-y-1/2" }), (0, t.jsx)(r.AttioLine, { vertical: true, className: "absolute inset-y-0 left-0 -translate-x-1/2" }), (0, t.jsx)(r.AttioLine, { vertical: true, className: "absolute inset-y-0 right-0 translate-x-1/2" }), l2?.filename ? (0, t.jsx)(s.default, { src: l2.filename, alt: l2.alt ?? "", width: 100, height: 100, className: "size-5 object-contain opacity-75" }) : (0, t.jsx)(o.Plus14, { className: "text-strong-stroke" })] }, e3);
    })] })] }) }) }) }) });
  }]);
}, 418836, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(140802), s = e.i(112086), i = e.i(915501), l = e.i(224253), r = e.i(856757), n = e.i(108899), o = e.i(269916), d = e.i(171517), c = e.i(894584), x = e.i(861424), u = e.i(167815), m = e.i(551360);
  try {
    var h = window;
    h._sentryModuleMetadata = h._sentryModuleMetadata || {}, h._sentryModuleMetadata[new h.Error().stack] = Object.assign({}, h._sentryModuleMetadata[new h.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AppsIndexSectionFeatured", 0, function({ featuredApps: e2, featuredAppsTextPrimary: h2, featuredAppsTextSecondary: p }) {
    let [g, v] = (0, r.useState)(0), [f, j] = (0, r.useState)("positive");
    return (0, t.jsx)("section", { className: "max-w-screen overflow-hidden", children: (0, t.jsx)("div", { className: "container", children: (0, t.jsxs)("div", { className: "overflow-hidden border-subtle-stroke border-x", children: [(0, t.jsx)(x.HeaderForSection, { title: h2, subtitle: p, justify: "start", className: "max-lg:hidden" }), (0, t.jsx)(x.HeaderForSection, { title: h2, subtitle: p, justify: "center", className: "lg:hidden" }), (0, t.jsx)("div", { className: "grid grid-cols-12", children: (0, t.jsx)("div", { className: (0, m.cn)("col-[2/-2] pb-5", "max-lg:items-center"), children: (0, t.jsx)("div", { className: (0, m.cn)("flex gap-2", "mx-lg:gap-1.5 max-lg:flex-wrap max-lg:justify-center"), children: e2.map((e3, a2) => (0, t.jsx)("div", { className: "relative", children: (0, t.jsxs)(u.Button, { variant: "outline", size: "xs", onClick: () => {
      j(a2 > g ? "positive" : "negative"), v(a2);
    }, "data-active": a2 === g, className: (0, m.cn)("group !border-subtle-stroke", "hover:!border-subtle-stroke hover:!bg-secondary-background", "data-[active='true']:!border-strong-stroke", "data-[active='false']:!text-tertiary-foreground", "lg:!text-secondary-foreground lg:text-sm", { "pointer-events-none": a2 === g }), children: [(0, t.jsx)(o.AttioStoryblokImage, { imageAsset: e3.icon, className: "size-4 group-data-[active='false']:opacity-80", loading: "eager" }), (0, t.jsx)("span", { children: e3.title })] }) }, e3.slug)) }) }) }), (0, t.jsxs)("div", { className: (0, m.cn)("relative mt-5 grid w-full grid-cols-12", "max-lg:mt-0"), children: [(0, t.jsxs)(n.AttioDecoration, { className: "!h-5 absolute -top-5 max-lg:hidden", children: [(0, t.jsx)(c.AttioLine, { dashed: true, vertical: true }), (0, t.jsx)(c.AttioLine, { dashed: true, vertical: true })] }), (0, t.jsx)(c.AttioLine, { dashed: true, className: "absolute top-0 left-1/2 w-screen -translate-x-1/2" }), (0, t.jsx)(c.AttioLine, { dashed: true, className: "absolute bottom-0 left-1/2 w-screen -translate-x-1/2" }), (0, t.jsxs)("div", { className: (0, m.cn)("relative col-[2/-2] flex aspect-[2.39/1] w-full border border-subtle-stroke", "max-xl:col-[2/-2]", "max-lg:col-[1/-1] max-lg:aspect-video max-lg:border-x-0", "max-md:aspect-5/4"), children: [(0, t.jsx)(d.AttioDots, { className: "absolute inset-0" }), (0, t.jsxs)("div", { className: (0, m.cn)("relative my-px w-2/5 bg-white-100", "max-lg:hidden"), children: [(0, t.jsx)(c.AttioLine, { vertical: true, dashed: true, className: "absolute inset-y-0 right-0" }), e2.map((e3, l2) => (0, t.jsx)(a.AnimatePresence, { initial: false, children: g === l2 && (0, t.jsxs)(s.motion.div, { initial: { filter: "blur(2px)", opacity: 0, x: "positive" === f ? "4px" : "-4px" }, animate: { filter: "blur(0px)", opacity: 1, x: 0 }, exit: { filter: "blur(3px)", opacity: 0 }, transition: { duration: 0.3, ease: "easeInOut" }, className: (0, m.cn)("absolute top-15 left-10 flex items-center gap-2", "max-xl:top-15 max-xl:left-7.5"), children: [(0, t.jsxs)("div", { className: "relative size-8 overflow-hidden rounded-[30%]", children: [(0, t.jsx)(i.default, { src: e3.logo_url, alt: e3.title, width: 512, height: 512, className: "size-full object-cover", loading: "eager" }), (0, t.jsx)("div", { className: "absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_1px] shadow-black-100/10" })] }), (0, t.jsx)("h3", { className: "font-display font-semibold text-2xl", children: e3.title })] }, e3.slug) }, e3.slug)), (0, t.jsxs)("div", { className: (0, m.cn)("absolute inset-x-10 bottom-10", "max-xl:inset-x-7.5 max-xl:bottom-7.5"), children: [(0, t.jsx)(a.AnimatePresence, { initial: false, children: (0, t.jsx)(s.motion.p, { initial: { filter: "blur(1.5px)", opacity: 0, x: "positive" === f ? "4px" : "-4px" }, animate: { filter: "blur(0px)", opacity: 1, x: 0 }, exit: { filter: "blur(2px)", opacity: 0 }, transition: { duration: 0.3, ease: "easeInOut" }, className: "absolute -top-16 max-w-sm text-balance text-tertiary-foreground max-xl:-top-24", children: e2[g].description }, e2[g].slug) }), (0, t.jsx)(u.Button, { variant: "outline", size: "sm", asChild: true, children: (0, t.jsx)(l.default, { href: `/apps/${e2[g].slug}`, children: "Learn more" }) })] })] }), (0, t.jsx)("div", { className: (0, m.cn)("relative flex w-3/5 overflow-hidden", "max-lg:aspect-video max-lg:w-full max-lg:justify-center", "max-md:aspect-square"), children: e2.map((e3, i2) => (0, t.jsx)(a.AnimatePresence, { initial: false, children: g === i2 && (0, t.jsx)(s.motion.div, { initial: { filter: "blur(2px)", opacity: 0, x: "positive" === f ? "100%" : "-100%" }, animate: { filter: "blur(0px)", opacity: 1, x: 0 }, exit: { filter: "blur(3px)", opacity: 0 }, transition: { duration: 0.3, ease: "easeInOut" }, className: "absolute inset-0", children: (0, t.jsx)(l.default, { href: `/apps/${e3.slug}`, className: (0, m.cn)("absolute flex size-full items-center justify-center", "lg:pointer-events-none lg:p-[5%]"), children: (0, t.jsx)(o.AttioStoryblokImage, { imageAsset: e3.featuredImage, className: "size-full object-contain", loading: "eager" }) }) }, i2) }, e3.slug)) })] })] }), (0, t.jsxs)(n.AttioDecoration, { className: "max-lg:*:hidden", children: [(0, t.jsx)(c.AttioLine, { dashed: true, vertical: true }), (0, t.jsx)(c.AttioLine, { dashed: true, vertical: true })] })] }) }) });
  }]);
}, 182126, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(112086), s = e.i(224253), i = e.i(856757), l = e.i(810903), r = e.i(269916), n = e.i(385264), o = e.i(894584), d = e.i(539277), c = e.i(167815), x = e.i(533919), u = e.i(194510), m = e.i(945457), h = e.i(551360);
  try {
    var p = window;
    p._sentryModuleMetadata = p._sentryModuleMetadata || {}, p._sentryModuleMetadata[new p.Error().stack] = Object.assign({}, p._sentryModuleMetadata[new p.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AppsIndexSectionHero", 0, function({ title: e2, body: p2, logos: g }) {
    let v = (0, l.default)("(max-width: 991.98px)"), f = (0, l.default)("(max-width: 767.98px)") ? 18 : v ? 12 : 20, j = (0, i.useMemo)(() => {
      let e3 = g.slice(0, f), t2 = Math.max(0, f - e3.length);
      return [...e3, ...Array(t2).fill(null)];
    }, [f, g]), [y, b] = (0, i.useState)(null);
    (0, i.useEffect)(() => {
      let e3 = Array.from({ length: j.length }, (e4, t3) => t3).toSorted(() => Math.random() - 0.5), t2 = e3.map((e4, t3) => j[e4] ? t3 : -1).filter((e4) => -1 !== e4).toSorted(() => Math.random() - 0.5), a2 = Array(j.length).fill(1.5);
      t2.forEach((e4, t3) => {
        a2[e4] = 0.06 * t3;
      }), b({ delays: a2, indices: e3 });
    }, [j]);
    let w = y?.indices ?? Array.from({ length: j.length }, (e3, t2) => t2), N = y?.delays ?? j.map((e3) => 1.5 * !e3), M = Math.ceil(j.length / 2) + 1;
    return (0, t.jsx)("section", { className: "container relative w-full", children: (0, t.jsx)("div", { className: "overflow-hidden border-subtle border-x", children: (0, t.jsxs)("div", { className: "pb-24 max-md:pb-16 max-xl:pb-20", children: [(0, t.jsx)("div", { className: "grid grid-cols-12", children: (0, t.jsx)("div", { className: "col-[2/-2]", children: (0, t.jsx)(d.HeaderForHero, { kicker: "Apps & integrations", title: e2, description: p2, children: (0, t.jsxs)("div", { className: "mt-8 flex gap-2 max-md:flex-col", children: [(0, t.jsx)(x.ButtonToScroll, { scrollTargetId: "apps", variant: "primary", size: "responsive", children: "Browse apps" }), (0, t.jsx)(c.Button, { variant: "outline", size: "responsive", asChild: true, className: "max-md:hidden", children: (0, t.jsx)(s.default, { href: "/partners/app-partners", children: "Become an App Partner" }) }), (0, t.jsx)(c.Button, { variant: "ghost", size: "responsive", asChild: true, className: "group md:hidden", children: (0, t.jsxs)(s.default, { href: "/partners/app-partners", children: [(0, t.jsx)("span", { children: "Become an App Partner" }), (0, t.jsx)(u.ArrowRight14, { className: (0, h.cn)("transition-[translate] duration-400 ease-in-out", "group-hover:translate-x-px group-hover:duration-150", "group-active:translate-x-px group-active:duration-50") })] }) })] }) }) }) }), (0, t.jsxs)("div", { className: "relative mt-5 grid grid-cols-12", children: [(0, t.jsx)(o.AttioLine, { dashed: true, className: "absolute -top-px" }), (0, t.jsx)(o.AttioLine, { dashed: true, className: "absolute -bottom-px" }), (0, t.jsx)(a.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1, duration: 1, ease: "easeOut" }, children: (0, t.jsx)(n.AttioHatch, { className: "absolute inset-0" }) }), (0, t.jsxs)(a.motion.div, { initial: { backgroundColor: "#FFFFFF00" }, animate: { backgroundColor: "#FFFFFF" }, transition: { delay: 1, duration: 1, ease: "easeOut" }, className: (0, h.cn)("relative col-[2/-2] grid grid-cols-10", "max-lg:col-span-full max-lg:grid-cols-6"), "data-visual-test": "blackout", children: [(0, t.jsx)(o.AttioLine, { dashed: true, vertical: true, className: (0, h.cn)("absolute -top-5 left-0 h-screen", "max-lg:hidden") }), (0, t.jsx)(o.AttioLine, { dashed: true, vertical: true, className: (0, h.cn)("absolute -top-5 right-0 h-screen", "max-lg:hidden") }), w.map((e3, s2) => {
      let i2 = j[e3];
      return (0, t.jsx)(a.motion.div, { initial: { filter: "blur(1px)", opacity: 0, scale: i2 ? 1.1 : 0.9 }, animate: { filter: "blur(0px)", opacity: 1, rotate: 0, scale: 1 }, transition: { delay: N[s2], duration: 1, ease: "easeOut" }, className: (0, h.cn)("relative flex aspect-square items-center justify-center", { "bg-white-100": i2, "bg-white-200": !i2 }), children: i2 ? (0, t.jsx)(r.AttioStoryblokImage, { imageAsset: i2, className: "size-1/4 object-contain", preload: true }) : (0, t.jsx)(m.Plus14, { className: "text-strong-stroke" }) }, e3);
    }), (0, t.jsx)("div", { className: "absolute inset-0 flex justify-between", children: Array.from({ length: M }).map((e3, s2) => (0, t.jsx)(a.motion.div, { initial: { height: 0 }, animate: { height: "100%" }, transition: { delay: 0.1 * s2, duration: 1, ease: "easeOut" }, className: (0, h.cn)("overflow-hidden max-lg:last:invisible max-lg:first:invisible", { "max-md:hidden": [1, 2, 3].includes(s2) }), children: (0, t.jsx)(o.AttioLine, { vertical: true, className: "h-full" }) }, `v-line-${s2}`)) }), (0, t.jsx)("div", { className: "absolute inset-0 flex justify-between max-md:hidden", children: Array.from({ length: M }).map((e3, s2) => (0, t.jsx)(a.motion.div, { initial: { height: 0 }, animate: { height: "calc(100% + 96px)" }, transition: { delay: 0.1 * s2, duration: 1, ease: "easeOut" }, className: (0, h.cn)("overflow-hidden first:invisible last:invisible", { "max-md:hidden": [1, 2, 3].includes(s2) }), children: (0, t.jsx)(o.AttioLine, { dashed: true, vertical: true, className: "h-full" }) }, `v-dashed-line-${s2}`)) }), (0, t.jsx)("div", { className: "absolute inset-x-0 -inset-y-px flex flex-col justify-between", children: Array.from({ length: 4 }).map((e3, s2) => (0, t.jsx)(a.motion.div, { initial: { width: 0 }, animate: { width: "100%" }, transition: { delay: 0.1 * s2, duration: 1, ease: "easeOut" }, className: "h-fit overflow-hidden md:last:hidden", children: (0, t.jsx)(o.AttioLine, {}) }, `h-line-${s2}`)) })] })] })] }) }) });
  }]);
}, 696138, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(12594), s = e.i(67232);
  try {
    var i = window;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AppsSearchButton", 0, function() {
    let { openSearchModal: e2 } = (0, a.useSearchModal)();
    return (0, t.jsx)(s.SearchTriggerButton, { onClick: () => e2(), className: "w-full min-w-80 max-w-80" });
  }, "AppsSearchButtonFallback", 0, function() {
    return (0, t.jsx)(s.SearchTriggerButton, { className: "w-full min-w-80 max-w-80" });
  }]);
}, 67232, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(167815);
  try {
    var s = window;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function i({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", ...e2, children: (0, t.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2", d: "m15.8 15.8-3.62-3.62M1.8 7.833a6.034 6.034 0 1 1 12.069 0 6.034 6.034 0 0 1-12.07 0Z" }) });
  }
  var l = e.i(551360);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["SearchTriggerButton", 0, function({ onClick: e2, placeholder: s2 = "Search\u2026", size: r2 = "lg", className: n }) {
    return (0, t.jsxs)(a.Button, { variant: "outline", size: r2, onClick: e2, className: (0, l.cn)("text-sm shadow-attio-3", n), children: [(0, t.jsx)(i, { className: "text-accent-foreground" }), (0, t.jsx)("p", { className: "w-full truncate text-left text-accent-foreground", children: s2 }), (0, t.jsx)("p", { className: "text-caption-foreground text-xs tracking-wider", "aria-hidden": "true", children: "\u2318K" })] });
  }], 67232);
}, 533919, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(167815), s = e.i(863520);
  try {
    var i = window;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["ButtonToScroll", 0, function({ scrollTargetId: e2, updateAddress: i2, children: l, ...r }) {
    return (0, t.jsx)(a.Button, { ...r, onClick: () => (0, s.scrollToElementWithId)(e2, i2), children: l });
  }]);
}, 945457, (e) => {
  "use strict";
  var t = e.i(68982);
  try {
    var a = window;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["Plus14", 0, function({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", ...e2, children: (0, t.jsx)("path", { d: "M7 2C7.27612 2 7.49996 2.22389 7.5 2.5V6.5H11.5C11.7761 6.5 12 6.72386 12 7C12 7.27614 11.7761 7.5 11.5 7.5H7.5V11.5C7.5 11.7761 7.27614 12 7 12C6.72386 12 6.5 11.7761 6.5 11.5V7.5H2.5C2.22386 7.5 2 7.27614 2 7C2 6.72386 2.22386 6.5 2.5 6.5H6.5V2.5C6.50004 2.22389 6.72388 2 7 2Z", fill: "currentColor" }) });
  }]);
}]);
