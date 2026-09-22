;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "58b64452-45c4-ea5e-21b9-2caf285f7dc4");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 813785, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(799458), s = e.i(856757), r = e.i(698040);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["default", 0, function({ error: e2 }) {
    return (0, s.useEffect)(() => {
      a.captureException(e2);
    }, [e2]), (0, t.jsx)(r.default, {});
  }]);
}, 698040, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(224253), s = e.i(894584), r = e.i(551360);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["default", 0, function({ bordered: e2 = true }) {
    let n2 = (0, r.cn)("relative col-span-full", { "left-0": e2 }, { "left-1/2 w-screen -translate-x-1/2": !e2 });
    return (0, t.jsx)("main", { className: "container flex flex-1 flex-col", children: (0, t.jsx)("div", { className: (0, r.cn)("flex-1", { "border-subtle-stroke border-x": e2 }), children: (0, t.jsx)("div", { className: "flex h-full flex-col py-[var(--site-header-height)]", children: (0, t.jsxs)("div", { className: (0, r.cn)("grid grid-cols-12", { "overflow-hidden": e2 }), children: [(0, t.jsx)("div", { className: "col-[2/-2] py-5", children: (0, t.jsx)("p", { className: "text-overline", children: "/ Status: 500" }) }), (0, t.jsx)(s.AttioLine, { dashed: true, className: n2 }), (0, t.jsxs)("div", { className: "col-[2/-2] pt-20 pb-15 lg:pt-30 lg:pb-20", children: [(0, t.jsx)("h1", { className: "text-heading-responsive-lg", children: "Something went wrong." }), (0, t.jsx)("p", { className: "pt-6 text-secondary-foreground lg:text-xl", children: "Our team has been alerted. Please try again in a moment." })] }), (0, t.jsx)(s.AttioLine, { className: n2 }), (0, t.jsxs)("div", { className: "col-[2/-2] py-15 lg:py-20", children: [(0, t.jsxs)("p", { className: "max-w-xs text-balance text-secondary-foreground", children: ["Attio is an AI CRM built for ", (0, t.jsx)("br", { className: "max-xs:hidden" }), "the next era of companies."] }), (0, t.jsx)("p", { className: "max-w-md text-pretty pt-5 text-tertiary-foreground", children: (0, t.jsx)(a.default, { href: "/", className: (0, r.cn)("underline decoration-2 decoration-white-500 underline-offset-2", "transition-all duration-700", "hover:brightness-75 hover:duration-300", "active:brightness-50 active:duration-0"), children: "Go to homepage" }) })] })] }) }) }) });
  }]);
}]);
