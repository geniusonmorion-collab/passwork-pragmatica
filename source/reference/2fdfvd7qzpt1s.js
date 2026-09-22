;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "2190c046-318e-6d77-d602-674a7fdd9f58");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 406595, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(856757), r = e.i(618807), n = e.i(468884);
  try {
    var s = window;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function o() {
    let e2 = (0, a.useRef)(null), r2 = (0, a.useRef)(null);
    return (0, a.useEffect)(() => {
      e2.current = r2.current?.closest("footer") ?? null;
    }, []), (0, n.useNavigationDynamicDarkMode)({ sectionRef: e2 }), (0, t.jsx)("span", { ref: r2, "aria-hidden": true, className: "hidden" });
  }
  e.s(["SiteFooterNavigationDarkMode", 0, function() {
    return "/" !== (0, r.useAppPathname)() ? null : (0, t.jsx)(o, {});
  }]);
}]);
