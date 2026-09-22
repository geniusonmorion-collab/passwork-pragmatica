;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "c24dec6d-0ec7-d490-33be-266ceef76f51");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 184959, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "addLocale", { enumerable: true, get: function() {
    return n;
  } }), e.r(917769);
  let n = (e2, ...t2) => e2;
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 989762, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function n(e2, t2) {
    return e2;
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "removeLocale", { enumerable: true, get: function() {
    return n;
  } }), e.r(783304), ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 207195, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "appBootstrap", { enumerable: true, get: function() {
    return i;
  } });
  let n = e.r(932560), o = e.r(306926);
  function i(e2) {
    var t2, r2;
    let a2 = (0, n.getAssetPrefix)();
    t2 = self.__next_s, r2 = () => {
      e2(a2);
    }, t2 && t2.length ? t2.reduce((e3, [t3, r3]) => e3.then(() => new Promise((e4, a3) => {
      let n2 = document.createElement("script");
      r3 && (0, o.setAttributesFromProps)(n2, r3), t3 ? (n2.src = t3, n2.onload = () => e4(), n2.onerror = a3) : r3 && (n2.innerHTML = r3.children, setTimeout(e4)), document.head.appendChild(n2);
    })), Promise.resolve()).catch((e3) => {
      console.error(e3);
    }).then(() => {
      r2();
    }) : r2();
  }
  window.next = { version: "16.3.0", appDir: true }, ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 539074, (e, t, r) => {
  "use strict";
  let a, n, o, i;
  try {
    var s = "u" > typeof window ? window : e.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "hydrate", { enumerable: true, get: function() {
    return K;
  } });
  let l = e.r(481258), u = e.r(68982);
  e.r(142245);
  let d = l._(e.r(423860)), c = l._(e.r(856757)), p = e.r(147449), f = e.r(980287), y = e.r(744316), h = e.r(346775), g = e.r(508495), _ = e.r(211490), m = e.r(200383), M = l._(e.r(389812)), w = e.r(335108);
  e.r(225478);
  let E = e.r(820769), v = e.r(654216), b = e.r(103549), S = e.r(83421), P = p.createFromReadableStream, T = p.createFromFetch, O = document, R = self.__next_instant_test ? self.__next_instant_test : void 0, A = new TextEncoder(), x = false, k = false, N = null;
  function j(e2) {
    if (0 === e2[0]) o = [];
    else if (1 === e2[0]) {
      if (!o) throw Object.defineProperty(Error("Unexpected server data: missing bootstrap script."), "__NEXT_ERROR_CODE", { value: "E18", enumerable: false, configurable: true });
      i ? i.enqueue(A.encode(e2[1])) : o.push(e2[1]);
    } else if (2 === e2[0]) N = e2[1];
    else if (3 === e2[0]) {
      if (!o) throw Object.defineProperty(Error("Unexpected server data: missing bootstrap script."), "__NEXT_ERROR_CODE", { value: "E18", enumerable: false, configurable: true });
      let r2 = atob(e2[1]), a2 = new Uint8Array(r2.length);
      for (var t2 = 0; t2 < r2.length; t2++) a2[t2] = r2.charCodeAt(t2);
      i ? i.enqueue(a2) : o.push(a2);
    }
  }
  let I = function() {
    i && !k && (i.close(), k = true, o = void 0), x = true;
  };
  "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", I, false) : setTimeout(I);
  let C = self.__next_f = self.__next_f || [];
  C.forEach(j), C.length = 0, C.push = j;
  let B = new ReadableStream({ start(e2) {
    o && (o.forEach((t2) => {
      e2.enqueue("string" == typeof t2 ? A.encode(t2) : t2);
    }), x && !k) && (null === e2.desiredSize || e2.desiredSize < 0 ? R || e2.error(Object.defineProperty(Error("The connection to the page was unexpectedly closed, possibly due to the stop button being clicked, loss of Wi-Fi, or an unstable internet connection."), "__NEXT_ERROR_CODE", { value: "E117", enumerable: false, configurable: true })) : e2.close(), k = true, o = void 0), i = e2;
  } });
  if (R) n = Promise.resolve(T(R, { callServer: g.callServer, findSourceMapURL: _.findSourceMapURL, debugChannel: a, unstable_allowPartialStream: true })).then(async (e2) => (0, E.createInitialRSCPayloadFromFallbackPrerender)(await R, e2));
  else if (window.__NEXT_CLIENT_RESUME) {
    let e2 = window.__NEXT_CLIENT_RESUME;
    n = Promise.resolve(T(e2, { callServer: g.callServer, findSourceMapURL: _.findSourceMapURL, debugChannel: a })).then(async (t2) => (0, E.createInitialRSCPayloadFromFallbackPrerender)(await e2, t2));
  } else n = P(B, { callServer: g.callServer, findSourceMapURL: _.findSourceMapURL, debugChannel: a, startTime: 0 });
  function L({ initialRSCPayload: e2, actionQueue: t2, webSocket: r2, staticIndicatorState: a2 }) {
    return (0, u.jsx)(M.default, { actionQueue: t2, globalErrorState: e2.G, webSocket: r2, staticIndicatorState: a2 });
  }
  let D = c.default.StrictMode;
  function $({ children: e2 }) {
    return e2;
  }
  let U = { onDefaultTransitionIndicator: function() {
    return () => {
    };
  }, onRecoverableError: y.onRecoverableError, onCaughtError: h.onCaughtError, onUncaughtError: h.onUncaughtError };
  async function K(e2, t2) {
    let r2, a2, o2 = await n;
    o2.b ? (0, b.setNavigationBuildId)(o2.b) : (0, b.setNavigationBuildId)((0, v.getDeploymentId)()), (0, S.initializeRouterTransitionModules)(e2);
    let i2 = Date.now(), s2 = (0, m.createMutableActionQueue)((0, w.createInitialRouterState)({ navigatedAt: i2, initialRSCPayload: o2, initialFlightStreamForCache: null, location: window.location })), l2 = (0, u.jsx)(D, { children: (0, u.jsx)(f.HeadManagerContext.Provider, { value: { appDir: true }, children: (0, u.jsx)($, { children: (0, u.jsx)(L, { initialRSCPayload: o2, actionQueue: s2, webSocket: a2, staticIndicatorState: r2 }) }) }) });
    "__next_error__" === document.documentElement.id ? d.default.createRoot(O, U).render(l2) : c.default.startTransition(() => {
      d.default.hydrateRoot(O, l2, { ...U, formState: N });
    });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 679933, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), e.r(88075);
  let n = e.r(207195);
  e.r(744316), window.next.turbopack = true, self.__webpack_hash__ = "";
  let o = e.r(360997);
  (0, n.appBootstrap)((t2) => {
    let { hydrate: r2 } = e.r(539074);
    r2(o, t2);
  }), ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 932560, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "getAssetPrefix", { enumerable: true, get: function() {
    return o;
  } });
  let n = e.r(93794);
  function o() {
    let e2 = document.currentScript;
    if (!(e2 instanceof HTMLScriptElement)) throw Object.defineProperty(new n.InvariantError(`Expected document.currentScript to be a <script> element. Received ${e2} instead.`), "__NEXT_ERROR_CODE", { value: "E783", enumerable: false, configurable: true });
    let { pathname: t2 } = new URL(e2.src), r2 = t2.indexOf("/_next/");
    if (-1 === r2) throw Object.defineProperty(new n.InvariantError(`Expected document.currentScript src to contain '/_next/'. Received ${e2.src} instead.`), "__NEXT_ERROR_CODE", { value: "E784", enumerable: false, configurable: true });
    return t2.slice(0, r2);
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 219069, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "AppRouterAnnouncer", { enumerable: true, get: function() {
    return s;
  } });
  let n = e.r(856757), o = e.r(403432), i = "next-route-announcer";
  function s({ tree: e2 }) {
    let [t2, r2] = (0, n.useState)(null);
    (0, n.useEffect)(() => (r2((function() {
      let e3 = document.getElementsByName(i)[0];
      if (e3?.shadowRoot?.childNodes[0]) return e3.shadowRoot.childNodes[0];
      {
        let e4 = document.createElement(i);
        e4.style.cssText = "position:absolute";
        let t3 = document.createElement("div");
        return t3.ariaLive = "assertive", t3.id = "__next-route-announcer__", t3.role = "alert", t3.style.cssText = "position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal", e4.attachShadow({ mode: "open" }).appendChild(t3), document.body.appendChild(e4), t3;
      }
    })()), () => {
      let e3 = document.getElementsByTagName(i)[0];
      e3?.isConnected && document.body.removeChild(e3);
    }), []);
    let [a2, l] = (0, n.useState)(""), u = (0, n.useRef)(void 0);
    return (0, n.useEffect)(() => {
      let e3 = "";
      if (document.title) e3 = document.title;
      else {
        let t3 = document.querySelector("h1");
        t3 && (e3 = t3.innerText || t3.textContent || "");
      }
      void 0 !== u.current && u.current !== e3 && l(e3), u.current = e3;
    }, [e2]), t2 ? (0, o.createPortal)(a2, t2) : null;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 389812, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "default", { enumerable: true, get: function() {
    return I;
  } });
  let n = e.r(481258), o = e.r(744066), i = e.r(68982), s = o._(e.r(856757)), l = e.r(225478), u = e.r(332304), d = e.r(537444), c = e.r(36907), p = e.r(845512), f = e.r(959354), y = e.r(219069), h = e.r(114633), g = e.r(889798), _ = e.r(628498), m = e.r(660793), M = e.r(95849), w = e.r(218935), E = e.r(289621), v = e.r(200383), b = e.r(944885), S = e.r(219482), P = e.r(151336), T = n._(e.r(875196)), O = n._(e.r(721881)), R = e.r(542365);
  e.r(654216);
  let A = {};
  function x({ appRouterState: e2 }) {
    return (0, s.useInsertionEffect)(() => {
      let { tree: t2, pushRef: r2, canonicalUrl: a2, renderedSearch: n2 } = e2, o2 = { ...r2.preserveCustomHistoryState ? window.history.state : {}, __NA: true, __PRIVATE_NEXTJS_INTERNALS_TREE: { tree: t2, renderedSearch: n2 } };
      r2.pendingPush && (0, d.createHrefFromUrl)(new URL(window.location.href)) !== a2 ? (r2.pendingPush = false, window.history.pushState(o2, "", a2)) : window.history.replaceState(o2, "", a2), (0, f.setLastCommittedTree)(t2);
    }, [e2]), (0, s.useEffect)(() => {
      (0, P.pingVisibleLinks)(e2.nextUrl, e2.tree);
    }, [e2.nextUrl, e2.tree]), null;
  }
  function k(e2) {
    null == e2 && (e2 = {});
    let t2 = window.history.state, r2 = t2?.__NA;
    r2 && (e2.__NA = r2);
    let a2 = t2?.__PRIVATE_NEXTJS_INTERNALS_TREE;
    return a2 && (e2.__PRIVATE_NEXTJS_INTERNALS_TREE = a2), e2;
  }
  function N({ headCacheNode: e2 }) {
    let t2 = null !== e2 ? e2.head : null, r2 = null !== e2 ? e2.prefetchHead : null, a2 = null !== r2 ? r2 : t2;
    return (0, s.useDeferredValue)(t2, a2);
  }
  function j({ actionQueue: e2, globalError: t2, webSocket: r2, staticIndicatorState: a2 }) {
    let n2, o2 = (0, p.useActionQueue)(e2), { canonicalUrl: d2 } = o2, { searchParams: f2, pathname: E2 } = (0, s.useMemo)(() => {
      let e3 = new URL(d2, "u" < typeof window ? "http://n" : window.location.href);
      return { searchParams: e3.searchParams, pathname: (0, M.hasBasePath)(e3.pathname) ? (0, m.removeBasePath)(e3.pathname) : e3.pathname };
    }, [d2]);
    (0, s.useEffect)(() => {
      let e3 = (0, w.extractSourcePageFromFlightRouterState)(o2.tree);
      void 0 !== e3 ? window.next.__internal_src_page = e3 : delete window.next.__internal_src_page;
    }, [o2.tree]), (0, s.useEffect)(() => {
      function e3(e4) {
        e4.persisted && window.history.state?.__PRIVATE_NEXTJS_INTERNALS_TREE && (A.pendingMpaPath = void 0, (0, p.dispatchAppRouterAction)({ type: u.ACTION_RESTORE, url: new URL(window.location.href), historyState: window.history.state.__PRIVATE_NEXTJS_INTERNALS_TREE }));
      }
      return window.addEventListener("pageshow", e3), () => {
        window.removeEventListener("pageshow", e3);
      };
    }, []), (0, s.useEffect)(() => {
      function e3(e4) {
        let t3 = "reason" in e4 ? e4.reason : e4.error;
        if ((0, S.isRedirectError)(t3)) {
          e4.preventDefault();
          let r3 = (0, b.getURLFromRedirectError)(t3);
          "push" === (0, b.getRedirectTypeFromError)(t3) ? v.publicAppRouterInstance.push(r3, {}) : v.publicAppRouterInstance.replace(r3, {});
        }
      }
      return window.addEventListener("error", e3), window.addEventListener("unhandledrejection", e3), () => {
        window.removeEventListener("error", e3), window.removeEventListener("unhandledrejection", e3);
      };
    }, []);
    let { pushRef: P2 } = o2;
    if (P2.mpaNavigation) {
      if (A.pendingMpaPath !== d2) {
        let e3 = window.location;
        P2.pendingPush ? e3.assign(d2) : e3.replace(d2), A.pendingMpaPath = d2;
      }
      throw _.unresolvedThenable;
    }
    (0, s.useEffect)(() => {
      let e3 = window.history.pushState.bind(window.history), t3 = window.history.replaceState.bind(window.history), r3 = (e4) => {
        let t4 = window.location.href, r4 = window.history.state?.__PRIVATE_NEXTJS_INTERNALS_TREE;
        (0, s.startTransition)(() => {
          (0, p.dispatchAppRouterAction)({ type: u.ACTION_RESTORE, url: new URL(e4 ?? t4, t4), historyState: r4 });
        });
      };
      window.history.pushState = function(t4, a4, n3) {
        return t4?.__NA || t4?._N || (t4 = k(t4), n3 && r3(n3)), e3(t4, a4, n3);
      }, window.history.replaceState = function(e4, a4, n3) {
        return e4?.__NA || e4?._N || (e4 = k(e4), n3 && r3(n3)), t3(e4, a4, n3);
      };
      let a3 = (e4) => {
        if (e4.state) {
          if (!e4.state.__NA) return void window.location.reload();
          (0, s.startTransition)(() => {
            (0, v.dispatchTraverseAction)(window.location.href, e4.state.__PRIVATE_NEXTJS_INTERNALS_TREE);
          });
        }
      };
      return window.addEventListener("popstate", a3), () => {
        window.history.pushState = e3, window.history.replaceState = t3, window.removeEventListener("popstate", a3);
      };
    }, []);
    let { cache: O2, tree: I2, nextUrl: C, focusAndScrollRef: B, previousNextUrl: L } = o2, D = (0, s.useMemo)(() => (0, g.findHeadInCache)(O2, I2[1]), [O2, I2]), $ = (0, s.useMemo)(() => (0, w.getSelectedParams)(I2), [I2]), U = (0, s.useMemo)(() => ({ parentTree: I2, parentCacheNode: O2, parentSegmentPath: null, parentParams: {}, parentLoadingData: null, debugNameContext: "/", url: d2, isActive: true }), [I2, O2, d2]), K = (0, s.useMemo)(() => ({ tree: I2, focusAndScrollRef: B, nextUrl: C, previousNextUrl: L }), [I2, B, C, L]);
    if (null !== D) {
      let [e3, t3, r3] = D;
      n2 = (0, i.jsx)(N, { headCacheNode: e3 }, "u" < typeof window ? r3 : t3);
    } else n2 = null;
    let F = (0, i.jsxs)(h.RedirectBoundary, { children: [n2, (0, i.jsx)(R.RootLayoutBoundary, { children: O2.rsc }), (0, i.jsx)(y.AppRouterAnnouncer, { tree: I2 })] });
    return F = (0, i.jsx)(T.default, { errorComponent: t2[0], errorStyles: t2[1], children: F }), (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(x, { appRouterState: o2 }), null, (0, i.jsx)(c.NavigationPromisesContext.Provider, { value: null, children: (0, i.jsx)(c.PathParamsContext.Provider, { value: $, children: (0, i.jsx)(c.PathnameContext.Provider, { value: E2, children: (0, i.jsx)(c.SearchParamsContext.Provider, { value: f2, children: (0, i.jsx)(l.GlobalLayoutRouterContext.Provider, { value: K, children: (0, i.jsx)(l.AppRouterContext.Provider, { value: v.publicAppRouterInstance, children: (0, i.jsx)(l.LayoutRouterContext.Provider, { value: U, children: F }) }) }) }) }) }) })] });
  }
  function I({ actionQueue: e2, globalErrorState: t2, webSocket: r2, staticIndicatorState: a2 }) {
    (0, E.useNavFailureHandler)();
    let n2 = (0, i.jsx)(j, { actionQueue: e2, globalError: t2, webSocket: r2, staticIndicatorState: a2 });
    return (0, i.jsx)(T.default, { errorComponent: O.default, children: n2 });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 870249, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { WarningIcon: function() {
    return u;
  }, errorStyles: function() {
    return s;
  }, errorThemeCss: function() {
    return l;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  e.r(481258);
  let i = e.r(68982);
  e.r(856757);
  let s = { container: { fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"', height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }, card: { marginTop: "-32px", maxWidth: "325px", padding: "32px 28px", textAlign: "left" }, icon: { marginBottom: "24px" }, title: { fontSize: "24px", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: "32px", margin: "0 0 12px 0", color: "var(--next-error-title)" }, message: { fontSize: "14px", fontWeight: 400, lineHeight: "21px", margin: "0 0 20px 0", color: "var(--next-error-message)" }, form: { margin: 0 }, buttonGroup: { display: "flex", gap: "8px", alignItems: "center" }, button: { display: "inline-flex", alignItems: "center", justifyContent: "center", height: "32px", padding: "0 12px", fontSize: "14px", fontWeight: 500, lineHeight: "20px", borderRadius: "6px", cursor: "pointer", color: "var(--next-error-btn-text)", background: "var(--next-error-btn-bg)", border: "var(--next-error-btn-border)" }, buttonSecondary: { display: "inline-flex", alignItems: "center", justifyContent: "center", height: "32px", padding: "0 12px", fontSize: "14px", fontWeight: 500, lineHeight: "20px", borderRadius: "6px", cursor: "pointer", color: "var(--next-error-btn-secondary-text)", background: "var(--next-error-btn-secondary-bg)", border: "var(--next-error-btn-secondary-border)" }, digestFooter: { position: "fixed", bottom: "32px", left: "0", right: "0", textAlign: "center", fontFamily: 'ui-monospace,SFMono-Regular,"SF Mono",Menlo,Consolas,monospace', fontSize: "12px", lineHeight: "18px", fontWeight: 400, margin: "0", color: "var(--next-error-digest)" } }, l = `
:root {
  --next-error-bg: #fff;
  --next-error-text: #171717;
  --next-error-title: #171717;
  --next-error-message: #171717;
  --next-error-digest: #666666;
  --next-error-btn-text: #fff;
  --next-error-btn-bg: #171717;
  --next-error-btn-border: none;
  --next-error-btn-secondary-text: #171717;
  --next-error-btn-secondary-bg: transparent;
  --next-error-btn-secondary-border: 1px solid rgba(0,0,0,0.08);
}
@media (prefers-color-scheme: dark) {
  :root {
    --next-error-bg: #0a0a0a;
    --next-error-text: #ededed;
    --next-error-title: #ededed;
    --next-error-message: #ededed;
    --next-error-digest: #a0a0a0;
    --next-error-btn-text: #0a0a0a;
    --next-error-btn-bg: #ededed;
    --next-error-btn-border: none;
    --next-error-btn-secondary-text: #ededed;
    --next-error-btn-secondary-bg: transparent;
    --next-error-btn-secondary-border: 1px solid rgba(255,255,255,0.14);
  }
}
body { margin: 0; color: var(--next-error-text); background: var(--next-error-bg); }
`.replace(/\n\s*/g, "");
  function u() {
    return (0, i.jsx)("svg", { width: "32", height: "32", viewBox: "-0.2 -1.5 32 32", fill: "none", style: s.icon, children: (0, i.jsx)("path", { d: "M16.9328 0C18.0839 0.000116771 19.1334 0.658832 19.634 1.69531L31.4299 26.1309C32.0708 27.4588 31.1036 28.9999 29.6291 29H2.00215C0.527541 29 -0.439628 27.4588 0.201371 26.1309L11.9973 1.69531C12.4979 0.658823 13.5474 7.75066e-05 14.6984 0H16.9328ZM3.59493 26H28.0363L16.9328 3H14.6984L3.59493 26ZM15.8156 19C16.9202 19.0001 17.8156 19.8955 17.8156 21C17.8156 22.1045 16.9202 22.9999 15.8156 23C14.7111 23 13.8156 22.1046 13.8156 21C13.8156 19.8954 14.7111 19 15.8156 19ZM17.3156 16.5H14.3156V8.5H17.3156V16.5Z", fill: "var(--next-error-title)" }) });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 721881, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "default", { enumerable: true, get: function() {
    return s;
  } }), e.r(481258);
  let n = e.r(68982);
  e.r(856757);
  let o = e.r(534604), i = e.r(870249), s = function({ error: e2 }) {
    let t2 = e2?.digest, r2 = !!t2;
    return (0, o.handleISRError)({ error: e2 }), (0, n.jsxs)("html", { id: "__next_error__", children: [(0, n.jsx)("head", { children: (0, n.jsx)("style", { dangerouslySetInnerHTML: { __html: i.errorThemeCss } }) }), (0, n.jsxs)("body", { children: [(0, n.jsx)("div", { style: i.errorStyles.container, children: (0, n.jsxs)("div", { style: i.errorStyles.card, children: [(0, n.jsx)(i.WarningIcon, {}), (0, n.jsx)("h1", { style: i.errorStyles.title, children: "This page couldn\u2019t load" }), (0, n.jsx)("p", { style: i.errorStyles.message, children: r2 ? "A server error occurred. Reload to try again." : "Reload to try again, or go back." }), (0, n.jsxs)("div", { style: i.errorStyles.buttonGroup, children: [(0, n.jsx)("form", { style: i.errorStyles.form, children: (0, n.jsx)("button", { type: "submit", style: i.errorStyles.button, children: "Reload" }) }), !r2 && (0, n.jsx)("button", { type: "button", style: i.errorStyles.buttonSecondary, onClick: () => {
      window.history.length > 1 ? window.history.back() : window.location.href = "/";
    }, children: "Back" })] })] }) }), t2 && (0, n.jsxs)("p", { style: i.errorStyles.digestFooter, children: ["ERROR ", t2] })] })] });
  };
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 346775, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { onCaughtError: function() {
    return f;
  }, onUncaughtError: function() {
    return y;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let i = e.r(481258), s = e.r(664022), l = e.r(292638), u = e.r(614137), d = e.r(498814), c = i._(e.r(721881)), p = { decorateDevError: (e2) => e2, handleClientError: () => {
  }, originConsoleError: console.error.bind(console) };
  function f(e2, t2) {
    let r2, a2 = t2.errorBoundary?.constructor;
    if (r2 = r2 || a2 === d.ErrorBoundaryHandler && t2.errorBoundary.props.errorComponent === c.default) return y(e2);
    (0, l.isBailoutToCSRError)(e2) || (0, s.isNextRouterError)(e2) || p.originConsoleError(e2);
  }
  function y(e2) {
    (0, l.isBailoutToCSRError)(e2) || (0, s.isNextRouterError)(e2) || (0, u.reportGlobalError)(e2);
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 683079, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { GracefulDegradeBoundary: function() {
    return l;
  }, default: function() {
    return u;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let i = e.r(68982), s = e.r(856757);
  class l extends s.Component {
    constructor(e2) {
      super(e2), this.state = { hasError: false }, this.rootHtml = "", this.htmlAttributes = {}, this.htmlRef = (0, s.createRef)();
    }
    static getDerivedStateFromError(e2) {
      return { hasError: true };
    }
    componentDidMount() {
      let e2 = this.htmlRef.current;
      this.state.hasError && e2 && Object.entries(this.htmlAttributes).forEach(([t2, r2]) => {
        e2.setAttribute(t2, r2);
      });
    }
    render() {
      let { hasError: e2 } = this.state;
      return ("u" > typeof window && !this.rootHtml && (this.rootHtml = document.documentElement.innerHTML, this.htmlAttributes = (function(e3) {
        let t2 = {};
        for (let r2 = 0; r2 < e3.attributes.length; r2++) {
          let a2 = e3.attributes[r2];
          t2[a2.name] = a2.value;
        }
        return t2;
      })(document.documentElement)), e2) ? (0, i.jsx)("html", { ref: this.htmlRef, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: this.rootHtml } }) : this.props.children;
    }
  }
  let u = l;
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 875196, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "default", { enumerable: true, get: function() {
    return d;
  } });
  let n = e.r(481258), o = e.r(68982);
  e.r(856757);
  let i = n._(e.r(683079)), s = e.r(498814), l = e.r(281597), u = "u" > typeof window && (0, l.isBot)(window.navigator.userAgent);
  function d({ children: e2, errorComponent: t2, errorStyles: r2, errorScripts: a2 }) {
    return u ? (0, o.jsx)(i.default, { children: e2 }) : (0, o.jsx)(s.ErrorBoundary, { errorComponent: t2, errorStyles: r2, errorScripts: a2, children: e2 });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 335108, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "createInitialRouterState", { enumerable: true, get: function() {
    return f;
  } });
  let n = e.r(537444), o = e.r(218935), i = e.r(820769), s = e.r(326336), l = e.r(562576), u = e.r(409486), d = e.r(270141), c = e.r(168980), p = e.r(948430);
  function f({ navigatedAt: e2, initialRSCPayload: t2, initialFlightStreamForCache: r2, location: a2 }) {
    let { c: y, f: h, q: g, i: _, S: m, s: M, l: w, h: E, r: v, p: b, d: S } = t2, P = y.join("/"), { tree: T, seedData: O, head: R } = (0, i.getFlightDataPartsFromPath)(h[0]), A = a2 ? (0, n.createHrefFromUrl)(a2) : P, x = { metadataVaryPath: null }, k = (0, l.convertRootFlightRouterStateToRouteTree)(T, g, x), N = x.metadataVaryPath, j = (0, s.createInitialCacheNodeForHydration)(e2, k, O, R, (0, d.computeDynamicStaleAt)(e2, S ?? d.UnknownDynamicStaleTime));
    if (null !== a2 && null !== N) {
      if ((0, p.discoverKnownRoute)(Date.now(), a2.pathname, a2.search, null, null, k, N, _, A, m, false), null !== O && void 0 !== M) if (void 0 !== w && null != r2) Promise.resolve(w).then(async (e3) => {
        let t3 = await (0, c.decodeStageUntilBoundary)(r2, e3, void 0), a3 = Date.now(), n2 = await (0, l.resolveStaleAt)(a3, t3.s);
        (0, l.writePrerenderResponseIntoCache)(a3, u.FetchStrategy.PPR, t3.f, void 0, t3.h, t3.r ?? null, n2, T, g, true);
      }).catch(() => {
      });
      else {
        let e3 = Date.now();
        (0, l.resolveStaleAt)(e3, M).then((t3) => {
          (0, l.writePrerenderResponseIntoCache)(e3, u.FetchStrategy.PPR, h, void 0, E, v ?? null, t3, T, g, false);
        }).catch(() => {
        }), r2?.cancel();
      }
      else r2?.cancel();
      null != b && (0, l.processRuntimePrefetchStream)(Date.now(), b, T, g).then((e3) => {
        null !== e3 && (0, l.writeDynamicRenderResponseIntoCache)(Date.now(), u.FetchStrategy.PPRRuntime, e3.flightDatas, e3.buildId, e3.isResponsePartial, e3.headVaryParams, e3.rootVaryParamsIterable, e3.staleAt, e3.navigationSeed, null);
      }).catch(() => {
      });
    }
    return { tree: j.route, cache: j.node, pushRef: { pendingPush: false, mpaNavigation: false, preserveCustomHistoryState: true }, focusAndScrollRef: { scrollRef: null, forceScroll: false, onlyHashChange: false, hashFragment: null }, canonicalUrl: A, renderedSearch: g, nextUrl: ((0, o.extractPathFromFlightRouterState)(T) || a2?.pathname) ?? null, previousNextUrl: null, debugInfo: null };
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 889798, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "findHeadInCache", { enumerable: true, get: function() {
    return i;
  } });
  let n = e.r(672883), o = e.r(815400);
  function i(e2, t2) {
    return (function e3(t3, r2, a2, i2) {
      if (0 === Object.keys(r2).length) return [t3, a2, i2];
      let s = Object.keys(r2).filter((e4) => "children" !== e4);
      "children" in r2 && s.unshift("children");
      let l = t3.slots;
      if (null !== l) for (let t4 of s) {
        let [i3, s2] = r2[t4];
        if (i3 === n.DEFAULT_SEGMENT_KEY) continue;
        let u = l[t4];
        if (!u) continue;
        let d = e3(u, s2, a2 + "/" + (0, o.createRouterCacheKey)(i3), a2 + "/" + (0, o.createRouterCacheKey)(i3, true));
        if (d) return d;
      }
      return null;
    })(e2, t2, "", "");
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 786063, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "detectDomainLocale", { enumerable: true, get: function() {
    return n;
  } });
  let n = (...e2) => {
  };
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 330651, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "resolvePromiseWithTimeout", { enumerable: true, get: function() {
    return o;
  } });
  let n = e.r(532226);
  function o(e2, t2, r2) {
    return new Promise((r3, a2) => {
      let o2 = false;
      e2.then((e3) => {
        o2 = true, r3(e3);
      }).catch(a2), (0, n.requestIdleCallback)(() => setTimeout(() => {
        o2 || a2(t2);
      }, 3800));
    });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 392012, (e, t, r) => {
  "use strict";
  let a;
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var o = { createRouteLoader: function() {
    return M;
  }, getClientBuildManifest: function() {
    return _;
  }, isAssetError: function() {
    return h;
  }, markAssetError: function() {
    return y;
  } };
  for (var i in o) Object.defineProperty(r, i, { enumerable: true, get: o[i] });
  e.r(481258), e.r(506838);
  let s = e.r(510132), l = e.r(532226), u = e.r(654216), d = e.r(542145), c = e.r(330651);
  function p(e2, t2, r2) {
    let a2, n2 = t2.get(e2);
    if (n2) return "future" in n2 ? n2.future : Promise.resolve(n2);
    let o2 = new Promise((e3) => {
      a2 = e3;
    });
    return t2.set(e2, { resolve: a2, future: o2 }), r2 ? r2().then((e3) => (a2(e3), e3)).catch((r3) => {
      throw t2.delete(e2), r3;
    }) : o2;
  }
  let f = /* @__PURE__ */ Symbol("ASSET_LOAD_ERROR");
  function y(e2) {
    return Object.defineProperty(e2, f, {});
  }
  function h(e2) {
    return e2 && f in e2;
  }
  let g = (function(e2) {
    try {
      return e2 = document.createElement("link"), !!window.MSInputMethodContext && !!document.documentMode || e2.relList.supports("prefetch");
    } catch {
      return false;
    }
  })();
  function _() {
    if (self.__BUILD_MANIFEST) return Promise.resolve(self.__BUILD_MANIFEST);
    let e2 = new Promise((e3) => {
      let t2 = self.__BUILD_MANIFEST_CB;
      self.__BUILD_MANIFEST_CB = () => {
        e3(self.__BUILD_MANIFEST), t2 && t2();
      };
    });
    return (0, c.resolvePromiseWithTimeout)(e2, y(Object.defineProperty(Error("Failed to load client build manifest"), "__NEXT_ERROR_CODE", { value: "E273", enumerable: false, configurable: true })), a);
  }
  function m(e2, t2) {
    return _().then((r2) => {
      if (!(t2 in r2)) throw y(Object.defineProperty(Error(`Failed to lookup route: ${t2}`), "__NEXT_ERROR_CODE", { value: "E446", enumerable: false, configurable: true }));
      let a2 = r2[t2].map((t3) => e2 + "/_next/" + (0, d.encodeURIPath)(t3));
      return { scripts: a2.filter((e3) => e3.endsWith(".js")).map((e3) => (0, s.__unsafeCreateTrustedScriptURL)(e3) + (0, u.getAssetTokenQuery)()), css: a2.filter((e3) => e3.endsWith(".css")).map((e3) => e3 + (0, u.getAssetTokenQuery)()) };
    });
  }
  function M(e2) {
    let t2 = /* @__PURE__ */ new Map(), r2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map(), o2 = /* @__PURE__ */ new Map();
    function i2(e3) {
      {
        var t3;
        let a2 = r2.get(e3.toString());
        return a2 ? a2 : document.querySelector(`script[src^="${e3}"]`) ? Promise.resolve() : (r2.set(e3.toString(), a2 = new Promise((r3, a3) => {
          (t3 = document.createElement("script")).onload = r3, t3.onerror = () => a3(y(Object.defineProperty(Error(`Failed to load script: ${e3}`), "__NEXT_ERROR_CODE", { value: "E74", enumerable: false, configurable: true }))), t3.crossOrigin = void 0, t3.src = e3, document.body.appendChild(t3);
        })), a2);
      }
    }
    function s2(e3) {
      let t3 = n2.get(e3);
      return t3 || n2.set(e3, t3 = fetch(e3, { credentials: "same-origin" }).then((t4) => {
        if (!t4.ok) throw Object.defineProperty(Error(`Failed to load stylesheet: ${e3}`), "__NEXT_ERROR_CODE", { value: "E189", enumerable: false, configurable: true });
        return t4.text().then((t5) => ({ href: e3, content: t5 }));
      }).catch((e4) => {
        throw y(e4);
      })), t3;
    }
    return { whenEntrypoint: (e3) => p(e3, t2), onEntrypoint(e3, r3) {
      (r3 ? Promise.resolve().then(() => r3()).then((e4) => ({ component: e4 && e4.default || e4, exports: e4 }), (e4) => ({ error: e4 })) : Promise.resolve(void 0)).then((r4) => {
        let a2 = t2.get(e3);
        a2 && "resolve" in a2 ? r4 && (t2.set(e3, r4), a2.resolve(r4)) : (r4 ? t2.set(e3, r4) : t2.delete(e3), o2.delete(e3));
      });
    }, loadRoute(r3, n3) {
      return p(r3, o2, () => {
        let o3;
        return (0, c.resolvePromiseWithTimeout)(m(e2, r3).then(({ scripts: e3, css: a2 }) => Promise.all([t2.has(r3) ? [] : Promise.all(e3.map(i2)).then((e4) => e4), Promise.all(a2.map(s2))])).then((e3) => this.whenEntrypoint(r3).then((t3) => ({ entrypoint: t3, styles: e3[1] }))), y(Object.defineProperty(Error(`Route did not complete loading: ${r3}`), "__NEXT_ERROR_CODE", { value: "E12", enumerable: false, configurable: true })), a).then(({ entrypoint: e3, styles: t3 }) => {
          let r4 = Object.assign({ styles: t3 }, e3);
          return "error" in e3 ? e3 : r4;
        }).catch((e3) => {
          if (n3) throw e3;
          return { error: e3 };
        }).finally(() => o3?.());
      });
    }, prefetch(t3) {
      let r3;
      return (r3 = navigator.connection) && (r3.saveData || /2g/.test(r3.effectiveType)) ? Promise.resolve() : m(e2, t3).then((e3) => Promise.all(g ? e3.scripts.map((e4) => {
        var t4, r4, a2;
        return t4 = e4.toString(), r4 = "script", new Promise((e5, n3) => {
          let o3 = `
      link[rel="prefetch"][href^="${t4}"],
      link[rel="preload"][href^="${t4}"],
      script[src^="${t4}"]`;
          if (document.querySelector(o3)) return e5();
          a2 = document.createElement("link"), r4 && (a2.as = r4), a2.rel = "prefetch", a2.crossOrigin = void 0, a2.onload = e5, a2.onerror = () => n3(y(Object.defineProperty(Error(`Failed to prefetch: ${t4}`), "__NEXT_ERROR_CODE", { value: "E268", enumerable: false, configurable: true }))), a2.href = t4, document.head.appendChild(a2);
        });
      }) : [])).then(() => {
        (0, l.requestIdleCallback)(() => this.loadRoute(t3, true).catch(() => {
        }));
      }).catch(() => {
      });
    } };
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 88075, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  let n = (0, e.r(654216).getDeploymentId)();
  globalThis.NEXT_DEPLOYMENT_ID = n, ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 876416, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "default", { enumerable: true, get: function() {
    return i;
  } }), e.r(481258);
  let n = e.r(68982);
  e.r(856757);
  let o = e.r(323776);
  function i(e2) {
    function t2(t3) {
      return (0, n.jsx)(e2, { router: (0, o.useRouter)(), ...t3 });
    }
    return t2.getInitialProps = e2.getInitialProps, t2.origGetInitialProps = e2.origGetInitialProps, t2;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 323776, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { Router: function() {
    return l.default;
  }, createRouter: function() {
    return m;
  }, default: function() {
    return g;
  }, makePublicRouterInstance: function() {
    return M;
  }, useRouter: function() {
    return _;
  }, withRouter: function() {
    return c.default;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let i = e.r(481258), s = i._(e.r(856757)), l = i._(e.r(240361)), u = e.r(570630), d = i._(e.r(673231)), c = i._(e.r(876416)), p = { router: null, readyCallbacks: [], ready(e2) {
    if (this.router) return e2();
    "u" > typeof window && this.readyCallbacks.push(e2);
  } }, f = ["pathname", "route", "query", "asPath", "components", "isFallback", "basePath", "locale", "locales", "defaultLocale", "isReady", "isPreview", "isLocaleDomain", "domainLocales"], y = ["push", "replace", "reload", "back", "prefetch", "beforePopState"];
  function h() {
    if (!p.router) throw Object.defineProperty(Error('No router instance found.\nYou should only use "next/router" on the client side of your app.\n'), "__NEXT_ERROR_CODE", { value: "E1044", enumerable: false, configurable: true });
    return p.router;
  }
  Object.defineProperty(p, "events", { get: () => l.default.events }), f.forEach((e2) => {
    Object.defineProperty(p, e2, { get: () => h()[e2] });
  }), y.forEach((e2) => {
    p[e2] = (...t2) => h()[e2](...t2);
  }), ["routeChangeStart", "beforeHistoryChange", "routeChangeComplete", "routeChangeError", "hashChangeStart", "hashChangeComplete"].forEach((e2) => {
    p.ready(() => {
      l.default.events.on(e2, (...t2) => {
        let r2 = `on${e2.charAt(0).toUpperCase()}${e2.substring(1)}`;
        if (p[r2]) try {
          p[r2](...t2);
        } catch (e3) {
          console.error(`Error when running the Router event: ${r2}`), console.error((0, d.default)(e3) ? `${e3.message}
${e3.stack}` : e3 + "");
        }
      });
    });
  });
  let g = p;
  function _() {
    let e2 = s.default.useContext(u.RouterContext);
    if (!e2) throw Object.defineProperty(Error("NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted"), "__NEXT_ERROR_CODE", { value: "E509", enumerable: false, configurable: true });
    return e2;
  }
  function m(...e2) {
    return p.router = new l.default(...e2), p.readyCallbacks.forEach((e3) => e3()), p.readyCallbacks = [], p.router;
  }
  function M(e2) {
    let t2 = {};
    for (let r2 of f) {
      if ("object" == typeof e2[r2]) {
        t2[r2] = Object.assign(Array.isArray(e2[r2]) ? [] : {}, e2[r2]);
        continue;
      }
      t2[r2] = e2[r2];
    }
    return t2.events = l.default.events, y.forEach((r2) => {
      t2[r2] = (...t3) => e2[r2](...t3);
    }), t2;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 686470, (e, t, r) => {
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = e.r(323776);
}, 913770, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "BloomFilter", { enumerable: true, get: function() {
    return n;
  } });
  class n {
    constructor(e2, t2 = 1e-4) {
      this.numItems = e2, this.errorRate = t2, this.numBits = Math.ceil(-(e2 * Math.log(t2)) / (Math.log(2) * Math.log(2))), this.numHashes = Math.ceil(this.numBits / e2 * Math.log(2)), this.bitArray = Array(this.numBits).fill(0);
    }
    static from(e2, t2 = 1e-4) {
      let r2 = new n(e2.length, t2);
      for (let t3 of e2) r2.add(t3);
      return r2;
    }
    export() {
      return { numItems: this.numItems, errorRate: this.errorRate, numBits: this.numBits, numHashes: this.numHashes, bitArray: this.bitArray };
    }
    import(e2) {
      this.numItems = e2.numItems, this.errorRate = e2.errorRate, this.numBits = e2.numBits, this.numHashes = e2.numHashes, this.bitArray = e2.bitArray;
    }
    add(e2) {
      this.getHashValues(e2).forEach((e3) => {
        this.bitArray[e3] = 1;
      });
    }
    contains(e2) {
      return this.getHashValues(e2).every((e3) => this.bitArray[e3]);
    }
    getHashValues(e2) {
      let t2 = [];
      for (let r2 = 1; r2 <= this.numHashes; r2++) {
        let a2 = (function(e3) {
          let t3 = 0;
          for (let r3 = 0; r3 < e3.length; r3++) t3 = Math.imul(t3 ^ e3.charCodeAt(r3), 1540483477), t3 ^= t3 >>> 13, t3 = Math.imul(t3, 1540483477);
          return t3 >>> 0;
        })(`${e2}${r2}`) % this.numBits;
        t2.push(a2);
      }
      return t2;
    }
  }
}, 199984, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "escapeStringRegexp", { enumerable: true, get: function() {
    return i;
  } });
  let n = /[|\\{}()[\]^$+*?.-]/, o = /[|\\{}()[\]^$+*?.-]/g;
  function i(e2) {
    return n.test(e2) ? e2.replace(o, "\\$&") : e2;
  }
}, 523081, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { getObjectClassLabel: function() {
    return i;
  }, isPlainObject: function() {
    return s;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  function i(e2) {
    return Object.prototype.toString.call(e2);
  }
  function s(e2) {
    if ("[object Object]" !== i(e2)) return false;
    let t2 = Object.getPrototypeOf(e2);
    return null === t2 || t2.hasOwnProperty("isPrototypeOf");
  }
}, 673231, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { default: function() {
    return s;
  }, getProperError: function() {
    return l;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let i = e.r(523081);
  function s(e2) {
    return "object" == typeof e2 && null !== e2 && "name" in e2 && "message" in e2;
  }
  function l(e2) {
    let t2;
    return s(e2) ? e2 : Object.defineProperty(Error((0, i.isPlainObject)(e2) ? (t2 = /* @__PURE__ */ new WeakSet(), JSON.stringify(e2, (e3, r2) => {
      if ("object" == typeof r2 && null !== r2) {
        if (t2.has(r2)) return "[Circular]";
        t2.add(r2);
      }
      return r2;
    })) : e2 + ""), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
  }
}, 614137, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "reportGlobalError", { enumerable: true, get: function() {
    return n;
  } });
  let n = "function" == typeof reportError ? reportError : (e2) => {
    globalThis.console.error(e2);
  };
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 744316, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { isRecoverableError: function() {
    return c;
  }, onRecoverableError: function() {
    return p;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let i = e.r(481258), s = e.r(292638), l = i._(e.r(673231)), u = e.r(614137), d = /* @__PURE__ */ new WeakSet();
  function c(e2) {
    return d.has(e2);
  }
  let p = (e2) => {
    let t2 = (0, l.default)(e2) && "cause" in e2 ? e2.cause : e2;
    (0, s.isBailoutToCSRError)(t2) || (0, u.reportGlobalError)(t2);
  };
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 280272, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "addPathSuffix", { enumerable: true, get: function() {
    return o;
  } });
  let n = e.r(783304);
  function o(e2, t2) {
    if (!e2.startsWith("/") || !t2) return e2;
    let { pathname: r2, query: a2, hash: o2 } = (0, n.parsePath)(e2);
    return `${r2}${t2}${a2}${o2}`;
  }
}, 12021, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "addLocale", { enumerable: true, get: function() {
    return i;
  } });
  let n = e.r(770269), o = e.r(330280);
  function i(e2, t2, r2, a2) {
    if (!t2 || t2 === r2) return e2;
    let i2 = e2.toLowerCase();
    return !a2 && ((0, o.pathHasPrefix)(i2, "/api") || (0, o.pathHasPrefix)(i2, `/${t2.toLowerCase()}`)) ? e2 : (0, n.addPathPrefix)(e2, `/${t2}`);
  }
}, 264465, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "formatNextPathnameInfo", { enumerable: true, get: function() {
    return l;
  } });
  let n = e.r(422533), o = e.r(770269), i = e.r(280272), s = e.r(12021);
  function l(e2) {
    let t2 = (0, s.addLocale)(e2.pathname, e2.locale, e2.buildId ? void 0 : e2.defaultLocale, e2.ignorePrefix);
    return (e2.buildId || !e2.trailingSlash) && (t2 = (0, n.removeTrailingSlash)(t2)), e2.buildId && (t2 = (0, i.addPathSuffix)((0, o.addPathPrefix)(t2, `/_next/data/${e2.buildId}`), "/" === e2.pathname ? "index.json" : ".json")), t2 = (0, o.addPathPrefix)(t2, e2.basePath), !e2.buildId && e2.trailingSlash ? t2.endsWith("/") ? t2 : (0, i.addPathSuffix)(t2, "/") : (0, n.removeTrailingSlash)(t2);
  }
}, 154437, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function n(e2, t2) {
    let r2 = Object.keys(e2);
    if (r2.length !== Object.keys(t2).length) return false;
    for (let a2 = r2.length; a2--; ) {
      let n2 = r2[a2];
      if ("query" === n2) {
        let r3 = Object.keys(e2.query);
        if (r3.length !== Object.keys(t2.query).length) return false;
        for (let a3 = r3.length; a3--; ) {
          let n3 = r3[a3];
          if (!t2.query.hasOwnProperty(n3) || e2.query[n3] !== t2.query[n3]) return false;
        }
      } else if (!t2.hasOwnProperty(n2) || e2[n2] !== t2[n2]) return false;
    }
    return true;
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "compareRouterStates", { enumerable: true, get: function() {
    return n;
  } });
}, 506838, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function n(e2, t2 = "") {
    return ("/" === e2 ? "/index" : /^\/index(\/|$)/.test(e2) ? `/index${e2}` : e2) + t2;
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "default", { enumerable: true, get: function() {
    return n;
  } });
}, 510132, (e, t, r) => {
  "use strict";
  let a;
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function o(e2) {
    return (void 0 === a && "u" > typeof window && (a = window.trustedTypes?.createPolicy("nextjs", { createHTML: (e3) => e3, createScript: (e3) => e3, createScriptURL: (e3) => e3 }) || null), a)?.createScriptURL(e2) || e2;
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "__unsafeCreateTrustedScriptURL", { enumerable: true, get: function() {
    return o;
  } }), ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 303017, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "interpolateAs", { enumerable: true, get: function() {
    return i;
  } });
  let n = e.r(643866), o = e.r(421270);
  function i(e2, t2, r2) {
    let a2 = "", i2 = (0, o.getRouteRegex)(e2), s = i2.groups, l = (t2 !== e2 ? (0, n.getRouteMatcher)(i2)(t2) : "") || r2;
    a2 = e2;
    let u = Object.keys(s);
    return u.every((e3) => {
      let t3 = l[e3] || "", { repeat: r3, optional: n2 } = s[e3], o2 = `[${r3 ? "..." : ""}${e3}]`;
      return n2 && (o2 = `${!t3 ? "/" : ""}[${o2}]`), r3 && !Array.isArray(t3) && (t3 = [t3]), (n2 || e3 in l) && (a2 = a2.replace(o2, r3 ? t3.map((e4) => encodeURIComponent(e4)).join("/") : encodeURIComponent(t3)) || "/");
    }) || (a2 = ""), { params: u, result: a2 };
  }
}, 882076, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "resolveHref", { enumerable: true, get: function() {
    return y;
  } });
  let n = e.r(686648), o = e.r(293316), i = e.r(710892), s = e.r(50595), l = e.r(917769), u = e.r(608651), d = e.r(450154), c = e.r(303017), p = e.r(421270), f = e.r(643866);
  function y(e2, t2, r2) {
    let a2, y2 = "string" == typeof t2 ? t2 : (0, o.formatWithValidation)(t2), h = y2.match(/^[a-z][a-z0-9+.-]*:\/\//i), g = h ? y2.slice(h[0].length) : y2;
    if ((g.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
      console.error(`Invalid href '${y2}' passed to next/router in page: '${e2.pathname}'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.`);
      let t3 = (0, s.normalizeRepeatedSlashes)(g);
      y2 = (h ? h[0] : "") + t3;
    }
    if (!(0, u.isLocalURL)(y2)) return r2 ? [y2] : y2;
    try {
      let t3 = y2.startsWith("#") ? e2.asPath : e2.pathname;
      if (y2.startsWith("?") && (t3 = e2.asPath, (0, d.isDynamicRoute)(e2.pathname))) {
        t3 = e2.pathname;
        let r3 = (0, p.getRouteRegex)(e2.pathname);
        (0, f.getRouteMatcher)(r3)(e2.asPath) || (t3 = e2.asPath);
      }
      a2 = new URL(t3, "http://n");
    } catch (e3) {
      a2 = new URL("/", "http://n");
    }
    try {
      let e3 = new URL(y2, a2);
      e3.pathname = (0, l.normalizePathTrailingSlash)(e3.pathname);
      let t3 = "";
      if ((0, d.isDynamicRoute)(e3.pathname) && e3.searchParams && r2) {
        let r3 = (0, n.searchParamsToUrlQuery)(e3.searchParams), { result: a3, params: s3 } = (0, c.interpolateAs)(e3.pathname, e3.pathname, r3);
        a3 && (t3 = (0, o.formatWithValidation)({ pathname: a3, hash: e3.hash, query: (0, i.omit)(r3, s3) }));
      }
      let s2 = e3.origin === a2.origin ? e3.href.slice(e3.origin.length) : e3.href;
      return r2 ? [s2, t3 || s2] : s2;
    } catch (e3) {
      return r2 ? [y2] : y2;
    }
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 751952, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function n(e2) {
    return "/api" === e2 || !!(null == e2 ? void 0 : e2.startsWith("/api/"));
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "isAPIRoute", { enumerable: true, get: function() {
    return n;
  } });
}, 460396, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "isDynamicRoute", { enumerable: true, get: function() {
    return s;
  } });
  let n = e.r(616335), o = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/, i = /\/\[[^/]+\](?=\/|$)/;
  function s(e2, t2 = true) {
    return ((0, n.isInterceptionRouteAppPath)(e2) && (e2 = (0, n.extractInterceptionRouteInformation)(e2).interceptedRoute), t2) ? i.test(e2) : o.test(e2);
  }
}, 450154, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { getSortedRouteObjects: function() {
    return i.getSortedRouteObjects;
  }, getSortedRoutes: function() {
    return i.getSortedRoutes;
  }, isDynamicRoute: function() {
    return s.isDynamicRoute;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let i = e.r(672219), s = e.r(460396);
}, 136093, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function n(e2) {
    return e2.replace(/\\/g, "/");
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "normalizePathSep", { enumerable: true, get: function() {
    return n;
  } });
}, 778435, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "denormalizePagePath", { enumerable: true, get: function() {
    return i;
  } });
  let n = e.r(450154), o = e.r(136093);
  function i(e2) {
    let t2 = (0, o.normalizePathSep)(e2);
    return t2.startsWith("/index/") && !(0, n.isDynamicRoute)(t2) ? t2.slice(6) : "/index" !== t2 ? t2 : "/";
  }
}, 548739, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "normalizeLocalePath", { enumerable: true, get: function() {
    return o;
  } });
  let n = /* @__PURE__ */ new WeakMap();
  function o(e2, t2) {
    let r2;
    if (!t2) return { pathname: e2 };
    let a2 = n.get(t2);
    a2 || (a2 = t2.map((e3) => e3.toLowerCase()), n.set(t2, a2));
    let o2 = e2.split("/", 2);
    if (!o2[1]) return { pathname: e2 };
    let i = o2[1].toLowerCase(), s = a2.indexOf(i);
    return s < 0 ? { pathname: e2 } : (r2 = t2[s], { pathname: e2 = e2.slice(r2.length + 1) || "/", detectedLocale: r2 });
  }
}, 260716, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function n() {
    let e2 = /* @__PURE__ */ Object.create(null);
    return { on(t2, r2) {
      (e2[t2] || (e2[t2] = [])).push(r2);
    }, off(t2, r2) {
      e2[t2] && e2[t2].splice(e2[t2].indexOf(r2) >>> 0, 1);
    }, emit(t2, ...r2) {
      (e2[t2] || []).slice().map((e3) => {
        e3(...r2);
      });
    } };
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "default", { enumerable: true, get: function() {
    return n;
  } });
}, 710892, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function n(e2, t2) {
    let r2 = {};
    return Object.keys(e2).forEach((a2) => {
      t2.includes(a2) || (r2[a2] = e2[a2]);
    }), r2;
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "omit", { enumerable: true, get: function() {
    return n;
  } });
}, 741598, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "parseLoaderTree", { enumerable: true, get: function() {
    return o;
  } });
  let n = e.r(672883);
  function o(e2) {
    let [t2, r2, a2, o2] = e2, { layout: i, template: s } = a2, { page: l } = a2;
    l = t2 === n.DEFAULT_SEGMENT_KEY ? a2.defaultPage : l;
    let u = i?.[1] || s?.[1] || l?.[1];
    return { page: l, segment: t2, modules: a2, conventionPath: u, parallelRoutes: r2, staticSiblings: o2 };
  }
}, 317261, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { getParamProperties: function() {
    return u;
  }, getSegmentParam: function() {
    return s;
  }, isCatchAll: function() {
    return l;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let i = e.r(616335);
  function s(e2) {
    let t2 = i.INTERCEPTION_ROUTE_MARKERS.find((t3) => e2.startsWith(t3));
    return (t2 && (e2 = e2.slice(t2.length)), e2.startsWith("[[...") && e2.endsWith("]]")) ? { paramType: "optional-catchall", paramName: e2.slice(5, -2) } : e2.startsWith("[...") && e2.endsWith("]") ? { paramType: t2 ? `catchall-intercepted-${t2}` : "catchall", paramName: e2.slice(4, -1) } : e2.startsWith("[") && e2.endsWith("]") ? { paramType: t2 ? `dynamic-intercepted-${t2}` : "dynamic", paramName: e2.slice(1, -1) } : null;
  }
  function l(e2) {
    return "catchall" === e2 || "catchall-intercepted-(..)(..)" === e2 || "catchall-intercepted-(.)" === e2 || "catchall-intercepted-(..)" === e2 || "catchall-intercepted-(...)" === e2 || "optional-catchall" === e2;
  }
  function u(e2) {
    let t2 = false, r2 = false;
    switch (e2) {
      case "catchall":
      case "catchall-intercepted-(..)(..)":
      case "catchall-intercepted-(.)":
      case "catchall-intercepted-(..)":
      case "catchall-intercepted-(...)":
        t2 = true;
        break;
      case "optional-catchall":
        t2 = true, r2 = true;
    }
    return { repeat: t2, optional: r2 };
  }
}, 265562, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { isInterceptionAppRoute: function() {
    return c;
  }, isNormalizedAppRoute: function() {
    return d;
  }, parseAppRouteSegment: function() {
    return u;
  }, parseAppRouteWithSlots: function() {
    return y;
  }, parseNormalizedAppRoute: function() {
    return f;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let i = e.r(93794), s = e.r(317261), l = e.r(616335);
  function u(e2) {
    if ("" === e2) return null;
    let t2 = l.INTERCEPTION_ROUTE_MARKERS.find((t3) => e2.startsWith(t3)), r2 = (0, s.getSegmentParam)(e2);
    return r2 ? { type: "dynamic", name: e2, param: r2, interceptionMarker: t2 } : e2.startsWith("(") && e2.endsWith(")") ? { type: "route-group", name: e2, interceptionMarker: t2 } : e2.startsWith("@") ? { type: "parallel-route", name: e2, interceptionMarker: t2 } : { type: "static", name: e2, interceptionMarker: t2 };
  }
  function d(e2) {
    return e2.normalized;
  }
  function c(e2) {
    return void 0 !== e2.interceptionMarker && void 0 !== e2.interceptingRoute && void 0 !== e2.interceptedRoute;
  }
  function p(e2, t2) {
    let r2, a2, n2, o2 = e2.split("/").filter(Boolean), l2 = [];
    for (let d3 of o2) {
      let o3 = u((function(e3) {
        if (!/%5b|%5d/i.test(e3)) return e3;
        try {
          let t3 = decodeURIComponent(e3);
          return (0, s.getSegmentParam)(t3) ? t3 : e3;
        } catch {
          return e3;
        }
      })(d3));
      if (o3) {
        if ("route-group" === o3.type && !(2 & t2)) throw Object.defineProperty(new i.InvariantError(`${e2} is being parsed as a normalized route, but it has a route group segment.`), "__NEXT_ERROR_CODE", { value: "E1151", enumerable: false, configurable: true });
        if ("parallel-route" === o3.type && !(1 & t2)) throw Object.defineProperty(new i.InvariantError(`${e2} is being parsed as a normalized route, but it has a parallel route segment.`), "__NEXT_ERROR_CODE", { value: "E1152", enumerable: false, configurable: true });
        if (l2.push(o3), o3.interceptionMarker) {
          let i2 = e2.split(o3.interceptionMarker);
          if (2 !== i2.length) throw Object.defineProperty(Error(`Invalid interception route: ${e2}`), "__NEXT_ERROR_CODE", { value: "E924", enumerable: false, configurable: true });
          a2 = p(i2[0], t2), n2 = p(i2[1], t2), r2 = o3.interceptionMarker;
        }
      }
    }
    let d2 = l2.filter((e3) => "dynamic" === e3.type);
    return { normalized: 0 === t2, pathname: e2, segments: l2, dynamicSegments: d2, interceptionMarker: r2, interceptingRoute: a2, interceptedRoute: n2 };
  }
  function f(e2) {
    return p(e2, 0);
  }
  function y(e2) {
    return p(e2, 1);
  }
}, 289474, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function n(e2) {
    switch (e2) {
      case "catchall-intercepted-(..)(..)":
      case "dynamic-intercepted-(..)(..)":
        return "(..)(..)";
      case "catchall-intercepted-(.)":
      case "dynamic-intercepted-(.)":
        return "(.)";
      case "catchall-intercepted-(..)":
      case "dynamic-intercepted-(..)":
        return "(..)";
      case "catchall-intercepted-(...)":
      case "dynamic-intercepted-(...)":
        return "(...)";
      default:
        return null;
    }
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "interceptionPrefixFromParamType", { enumerable: true, get: function() {
    return n;
  } });
}, 356390, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "resolveParamValue", { enumerable: true, get: function() {
    return i;
  } });
  let n = e.r(93794), o = e.r(289474);
  function i(e2, t2, r2, a2, i2) {
    switch (t2) {
      case "catchall":
      case "optional-catchall":
      case "catchall-intercepted-(..)(..)":
      case "catchall-intercepted-(.)":
      case "catchall-intercepted-(..)":
      case "catchall-intercepted-(...)":
        let s = [];
        for (let e3 = r2; e3 < a2.segments.length; e3++) {
          let n2 = a2.segments[e3];
          if ("static" === n2.type) {
            let a3 = n2.name, i3 = (0, o.interceptionPrefixFromParamType)(t2);
            i3 && e3 === r2 && i3 === n2.interceptionMarker && (a3 = a3.replace(n2.interceptionMarker, "")), s.push(a3);
          } else {
            if (!i2.hasOwnProperty(n2.param.paramName)) {
              if ("optional-catchall" === n2.param.paramType) break;
              return;
            }
            let e4 = i2[n2.param.paramName];
            Array.isArray(e4) ? s.push(...e4) : s.push(e4);
          }
        }
        if (s.length > 0) return s;
        if ("optional-catchall" === t2) return;
        throw Object.defineProperty(new n.InvariantError(`Unexpected empty path segments match for a route "${a2.pathname}" with param "${e2}" of type "${t2}"`), "__NEXT_ERROR_CODE", { value: "E931", enumerable: false, configurable: true });
      case "dynamic":
      case "dynamic-intercepted-(..)(..)":
      case "dynamic-intercepted-(.)":
      case "dynamic-intercepted-(..)":
      case "dynamic-intercepted-(...)":
        if (r2 < a2.segments.length) {
          let e3 = a2.segments[r2];
          if ("dynamic" === e3.type && !i2.hasOwnProperty(e3.param.paramName)) return;
          return "dynamic" === e3.type ? i2[e3.param.paramName] : (0, o.interceptionPrefixFromParamType)(t2) === e3.interceptionMarker ? e3.name.replace(e3.interceptionMarker, "") : e3.name;
        }
        return;
    }
  }
}, 3490, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { PARAMETER_PATTERN: function() {
    return p;
  }, getDynamicParam: function() {
    return c;
  }, interpolateParallelRouteParams: function() {
    return d;
  }, parseMatchedParameter: function() {
    return y;
  }, parseParameter: function() {
    return f;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let i = e.r(93794), s = e.r(741598), l = e.r(265562), u = e.r(356390);
  function d(e2, t2, r2, a2) {
    let n2 = structuredClone(t2), o2 = [{ tree: e2, depth: 0 }], d2 = (0, l.parseNormalizedAppRoute)(r2);
    for (; o2.length > 0; ) {
      let { tree: e3, depth: t3 } = o2.pop(), { segment: r3, parallelRoutes: c2 } = (0, s.parseLoaderTree)(e3), p2 = (0, l.parseAppRouteSegment)(r3);
      if (p2?.type === "dynamic" && !n2.hasOwnProperty(p2.param.paramName) && !a2?.has(p2.param.paramName)) {
        let { paramName: e4, paramType: r4 } = p2.param, a3 = (0, u.resolveParamValue)(e4, r4, t3, d2, n2);
        if (void 0 !== a3) n2[e4] = a3;
        else if ("optional-catchall" !== r4) throw Object.defineProperty(new i.InvariantError(`Could not resolve param value for segment: ${e4}`), "__NEXT_ERROR_CODE", { value: "E932", enumerable: false, configurable: true });
      }
      let f2 = t3;
      for (let e4 of (p2 && "route-group" !== p2.type && "parallel-route" !== p2.type && f2++, Object.values(c2))) o2.push({ tree: e4, depth: f2 });
    }
    return n2;
  }
  function c(e2, t2, r2, a2, n2) {
    let o2 = (function(e3, t3, r3) {
      let a3 = e3[t3];
      if (r3?.has(t3)) {
        let [e4] = r3.get(t3);
        a3 = e4;
      } else Array.isArray(a3) ? a3 = a3.map((e4) => encodeURIComponent(e4)) : "string" == typeof a3 && (a3 = encodeURIComponent(a3));
      return a3;
    })(e2, t2, a2);
    if (!o2 || 0 === o2.length) {
      if ("oc" === r2) return { param: t2, value: null, type: r2, treeSegment: [t2, "", r2, n2] };
      throw Object.defineProperty(new i.InvariantError(`Missing value for segment key: "${t2}" with dynamic param type: ${r2}`), "__NEXT_ERROR_CODE", { value: "E864", enumerable: false, configurable: true });
    }
    let s2 = Array.isArray(o2) ? o2.join("/") : o2;
    return { param: t2, value: o2, treeSegment: [t2, s2, r2, n2], type: r2 };
  }
  let p = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
  function f(e2) {
    let t2 = e2.match(p);
    return t2 ? y(t2[2]) : y(e2);
  }
  function y(e2) {
    let t2 = e2.startsWith("[") && e2.endsWith("]");
    t2 && (e2 = e2.slice(1, -1));
    let r2 = e2.startsWith("...");
    return r2 && (e2 = e2.slice(3)), { key: e2, repeat: r2, optional: t2 };
  }
}, 421270, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { getNamedMiddlewareRegex: function() {
    return g;
  }, getNamedRouteRegex: function() {
    return h;
  }, getRouteRegex: function() {
    return p;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let i = e.r(558296), s = e.r(616335), l = e.r(199984), u = e.r(422533), d = e.r(3490);
  function c(e2, t2, r2) {
    let a2 = {}, n2 = 1, o2 = [];
    for (let i2 of (0, u.removeTrailingSlash)(e2).slice(1).split("/")) {
      let e3 = s.INTERCEPTION_ROUTE_MARKERS.find((e4) => i2.startsWith(e4)), u2 = i2.match(d.PARAMETER_PATTERN);
      if (e3 && u2 && u2[2]) {
        let { key: t3, optional: r3, repeat: i3 } = (0, d.parseMatchedParameter)(u2[2]);
        a2[t3] = { pos: n2++, repeat: i3, optional: r3 }, o2.push(`/${(0, l.escapeStringRegexp)(e3)}([^/]+?)`);
      } else if (u2 && u2[2]) {
        let { key: e4, repeat: t3, optional: i3 } = (0, d.parseMatchedParameter)(u2[2]);
        a2[e4] = { pos: n2++, repeat: t3, optional: i3 }, r2 && u2[1] && o2.push(`/${(0, l.escapeStringRegexp)(u2[1])}`);
        let s2 = t3 ? i3 ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
        r2 && u2[1] && (s2 = s2.substring(1)), o2.push(s2);
      } else o2.push(`/${(0, l.escapeStringRegexp)(i2)}`);
      t2 && u2 && u2[3] && o2.push((0, l.escapeStringRegexp)(u2[3]));
    }
    return { parameterizedRoute: o2.join(""), groups: a2 };
  }
  function p(e2, { includeSuffix: t2 = false, includePrefix: r2 = false, excludeOptionalTrailingSlash: a2 = false } = {}) {
    let { parameterizedRoute: n2, groups: o2 } = c(e2, t2, r2), i2 = n2;
    return a2 || (i2 += "(?:/)?"), { re: RegExp(`^${i2}$`), groups: o2 };
  }
  function f({ interceptionMarker: e2, getSafeRouteKey: t2, segment: r2, routeKeys: a2, keyPrefix: n2, backreferenceDuplicateKeys: o2 }) {
    let i2, { key: s2, optional: u2, repeat: c2 } = (0, d.parseMatchedParameter)(r2), p2 = s2.replace(/\W/g, "");
    n2 && (p2 = `${n2}${p2}`);
    let y2 = false;
    (0 === p2.length || p2.length > 30) && (y2 = true), isNaN(parseInt(p2.slice(0, 1))) || (y2 = true), y2 && (p2 = t2());
    let h2 = p2 in a2;
    n2 ? a2[p2] = `${n2}${s2}` : a2[p2] = s2;
    let g2 = e2 ? (0, l.escapeStringRegexp)(e2) : "";
    return i2 = h2 && o2 ? `\\k<${p2}>` : c2 ? `(?<${p2}>.+?)` : `(?<${p2}>[^/]+?)`, { key: s2, pattern: u2 ? `(?:/${g2}${i2})?` : `/${g2}${i2}`, cleanedKey: p2, optional: u2, repeat: c2 };
  }
  function y(e2, t2, r2, a2, n2, o2 = { names: {}, intercepted: {} }) {
    let c2, p2 = (c2 = 0, () => {
      let e3 = "", t3 = ++c2;
      for (; t3 > 0; ) e3 += String.fromCharCode(97 + (t3 - 1) % 26), t3 = Math.floor((t3 - 1) / 26);
      return e3;
    }), h2 = {}, g2 = [], _ = [];
    for (let c3 of (o2 = structuredClone(o2), (0, u.removeTrailingSlash)(e2).slice(1).split("/"))) {
      let e3, u2 = s.INTERCEPTION_ROUTE_MARKERS.some((e4) => c3.startsWith(e4)), y2 = c3.match(d.PARAMETER_PATTERN), m = u2 ? y2?.[1] : void 0;
      if (m && y2?.[2] ? (e3 = t2 ? i.NEXT_INTERCEPTION_MARKER_PREFIX : void 0, o2.intercepted[y2[2]] = m) : e3 = y2?.[2] && o2.intercepted[y2[2]] ? t2 ? i.NEXT_INTERCEPTION_MARKER_PREFIX : void 0 : t2 ? i.NEXT_QUERY_PARAM_PREFIX : void 0, m && y2 && y2[2]) {
        let { key: t3, pattern: r3, cleanedKey: a3, repeat: i2, optional: s2 } = f({ getSafeRouteKey: p2, interceptionMarker: m, segment: y2[2], routeKeys: h2, keyPrefix: e3, backreferenceDuplicateKeys: n2 });
        g2.push(r3), _.push(`/${y2[1]}:${o2.names[t3] ?? a3}${i2 ? s2 ? "*" : "+" : ""}`), o2.names[t3] ??= a3;
      } else if (y2 && y2[2]) {
        a2 && y2[1] && (g2.push(`/${(0, l.escapeStringRegexp)(y2[1])}`), _.push(`/${y2[1]}`));
        let { key: t3, pattern: r3, cleanedKey: i2, repeat: s2, optional: u3 } = f({ getSafeRouteKey: p2, segment: y2[2], routeKeys: h2, keyPrefix: e3, backreferenceDuplicateKeys: n2 }), d2 = r3;
        a2 && y2[1] && (d2 = d2.substring(1)), g2.push(d2), _.push(`/:${o2.names[t3] ?? i2}${s2 ? u3 ? "*" : "+" : ""}`), o2.names[t3] ??= i2;
      } else g2.push(`/${(0, l.escapeStringRegexp)(c3)}`), _.push(`/${c3}`);
      r2 && y2 && y2[3] && (g2.push((0, l.escapeStringRegexp)(y2[3])), _.push(y2[3]));
    }
    return { namedParameterizedRoute: g2.join(""), routeKeys: h2, pathToRegexpPattern: _.join(""), reference: o2 };
  }
  function h(e2, t2) {
    let r2 = y(e2, t2.prefixRouteKeys, t2.includeSuffix ?? false, t2.includePrefix ?? false, t2.backreferenceDuplicateKeys ?? false, t2.reference), a2 = r2.namedParameterizedRoute;
    return t2.excludeOptionalTrailingSlash || (a2 += "(?:/)?"), { ...p(e2, t2), namedRegex: `^${a2}$`, routeKeys: r2.routeKeys, pathToRegexpPattern: r2.pathToRegexpPattern, reference: r2.reference };
  }
  function g(e2, t2) {
    let { parameterizedRoute: r2 } = c(e2, false, false), { catchAll: a2 = true } = t2;
    if ("/" === r2) return { namedRegex: `^/${a2 ? ".*" : ""}$` };
    let { namedParameterizedRoute: n2 } = y(e2, false, false, false, false, void 0);
    return { namedRegex: `^${n2}${a2 ? "(?:(/.*)?)" : ""}$` };
  }
}, 813982, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { DYNAMIC_FILTER_PLACEHOLDER: function() {
    return i;
  }, hasDynamicFilterCandidate: function() {
    return s;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let i = "[]";
  function s(e2, t2, r2) {
    let a2 = e2.split("/"), n2 = t2.split("/"), o2 = a2[a2.length - 1] ?? "";
    if (!(o2.startsWith("[...") || o2.startsWith("[[...")) && a2.length !== n2.length) return false;
    let s2 = [];
    for (let e3 = 1; e3 < n2.length; e3++) {
      if ("" === n2[e3]) continue;
      let t3 = a2[e3];
      (void 0 === t3 || t3.startsWith("[")) && s2.push(e3);
    }
    if (0 === s2.length || s2.length > 8) return false;
    let l = (1 << s2.length) - 1;
    for (let e3 = 0; e3 < l; e3++) {
      let t3 = n2.slice();
      for (let r3 = 0; r3 < s2.length; r3++) (e3 & 1 << r3) == 0 && (t3[s2[r3]] = i);
      if (r2(t3.join("/"))) return true;
    }
    return false;
  }
}, 935129, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "parseRelativeUrl", { enumerable: true, get: function() {
    return i;
  } });
  let n = e.r(50595), o = e.r(686648);
  function i(e2, t2, r2 = true) {
    let a2 = new URL("u" < typeof window ? "http://n" : (0, n.getLocationOrigin)()), s = t2 ? new URL(t2, a2) : e2.startsWith(".") ? new URL("u" < typeof window ? "http://n" : window.location.href) : a2, { pathname: l, searchParams: u, search: d, hash: c, href: p, origin: f } = e2.startsWith("/") ? new URL(`${s.protocol}//${s.host}${e2}`) : new URL(e2, s);
    if (f !== a2.origin) throw Object.defineProperty(Error(`invariant: invalid relative URL, router received ${e2}`), "__NEXT_ERROR_CODE", { value: "E159", enumerable: false, configurable: true });
    return { auth: null, host: null, hostname: null, pathname: l, port: null, protocol: null, query: r2 ? (0, o.searchParamsToUrlQuery)(u) : void 0, search: d, hash: c, href: p.slice(f.length), slashes: null };
  }
}, 128416, (e, t, r) => {
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  (() => {
    "use strict";
    "u" > typeof __nccwpck_require__ && (__nccwpck_require__.ab = "/ROOT/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.0_@opentelemetry+api@1.9.1_@playwright+test@1.62.1_@types+_5a54af28fb2ec2bbde711a7454bcebbf/node_modules/next/dist/compiled/path-to-regexp/");
    var e2 = {};
    (() => {
      function t2(e3, t3) {
        void 0 === t3 && (t3 = {});
        for (var r3 = (function(e4) {
          for (var t4 = [], r4 = 0; r4 < e4.length; ) {
            var a4 = e4[r4];
            if ("*" === a4 || "+" === a4 || "?" === a4) {
              t4.push({ type: "MODIFIER", index: r4, value: e4[r4++] });
              continue;
            }
            if ("\\" === a4) {
              t4.push({ type: "ESCAPED_CHAR", index: r4++, value: e4[r4++] });
              continue;
            }
            if ("{" === a4) {
              t4.push({ type: "OPEN", index: r4, value: e4[r4++] });
              continue;
            }
            if ("}" === a4) {
              t4.push({ type: "CLOSE", index: r4, value: e4[r4++] });
              continue;
            }
            if (":" === a4) {
              for (var n2 = "", o3 = r4 + 1; o3 < e4.length; ) {
                var i3 = e4.charCodeAt(o3);
                if (i3 >= 48 && i3 <= 57 || i3 >= 65 && i3 <= 90 || i3 >= 97 && i3 <= 122 || 95 === i3) {
                  n2 += e4[o3++];
                  continue;
                }
                break;
              }
              if (!n2) throw TypeError("Missing parameter name at ".concat(r4));
              t4.push({ type: "NAME", index: r4, value: n2 }), r4 = o3;
              continue;
            }
            if ("(" === a4) {
              var s3 = 1, l2 = "", o3 = r4 + 1;
              if ("?" === e4[o3]) throw TypeError('Pattern cannot start with "?" at '.concat(o3));
              for (; o3 < e4.length; ) {
                if ("\\" === e4[o3]) {
                  l2 += e4[o3++] + e4[o3++];
                  continue;
                }
                if (")" === e4[o3]) {
                  if (0 == --s3) {
                    o3++;
                    break;
                  }
                } else if ("(" === e4[o3] && (s3++, "?" !== e4[o3 + 1])) throw TypeError("Capturing groups are not allowed at ".concat(o3));
                l2 += e4[o3++];
              }
              if (s3) throw TypeError("Unbalanced pattern at ".concat(r4));
              if (!l2) throw TypeError("Missing pattern at ".concat(r4));
              t4.push({ type: "PATTERN", index: r4, value: l2 }), r4 = o3;
              continue;
            }
            t4.push({ type: "CHAR", index: r4, value: e4[r4++] });
          }
          return t4.push({ type: "END", index: r4, value: "" }), t4;
        })(e3), a3 = t3.prefixes, o2 = void 0 === a3 ? "./" : a3, i2 = t3.delimiter, s2 = void 0 === i2 ? "/#?" : i2, l = [], u = 0, d = 0, c = "", p = function(e4) {
          if (d < r3.length && r3[d].type === e4) return r3[d++].value;
        }, f = function(e4) {
          var t4 = p(e4);
          if (void 0 !== t4) return t4;
          var a4 = r3[d], n2 = a4.type, o3 = a4.index;
          throw TypeError("Unexpected ".concat(n2, " at ").concat(o3, ", expected ").concat(e4));
        }, y = function() {
          for (var e4, t4 = ""; e4 = p("CHAR") || p("ESCAPED_CHAR"); ) t4 += e4;
          return t4;
        }, h = function(e4) {
          for (var t4 = 0; t4 < s2.length; t4++) {
            var r4 = s2[t4];
            if (e4.indexOf(r4) > -1) return true;
          }
          return false;
        }, g = function(e4) {
          var t4 = l[l.length - 1], r4 = e4 || (t4 && "string" == typeof t4 ? t4 : "");
          if (t4 && !r4) throw TypeError('Must have text between two parameters, missing text after "'.concat(t4.name, '"'));
          return !r4 || h(r4) ? "[^".concat(n(s2), "]+?") : "(?:(?!".concat(n(r4), ")[^").concat(n(s2), "])+?");
        }; d < r3.length; ) {
          var _ = p("CHAR"), m = p("NAME"), M = p("PATTERN");
          if (m || M) {
            var w = _ || "";
            -1 === o2.indexOf(w) && (c += w, w = ""), c && (l.push(c), c = ""), l.push({ name: m || u++, prefix: w, suffix: "", pattern: M || g(w), modifier: p("MODIFIER") || "" });
            continue;
          }
          var E = _ || p("ESCAPED_CHAR");
          if (E) {
            c += E;
            continue;
          }
          if (c && (l.push(c), c = ""), p("OPEN")) {
            var w = y(), v = p("NAME") || "", b = p("PATTERN") || "", S = y();
            f("CLOSE"), l.push({ name: v || (b ? u++ : ""), pattern: v && !b ? g(w) : b, prefix: w, suffix: S, modifier: p("MODIFIER") || "" });
            continue;
          }
          f("END");
        }
        return l;
      }
      function r2(e3, t3) {
        void 0 === t3 && (t3 = {});
        var r3 = o(t3), a3 = t3.encode, n2 = void 0 === a3 ? function(e4) {
          return e4;
        } : a3, i2 = t3.validate, s2 = void 0 === i2 || i2, l = e3.map(function(e4) {
          if ("object" == typeof e4) return new RegExp("^(?:".concat(e4.pattern, ")$"), r3);
        });
        return function(t4) {
          for (var r4 = "", a4 = 0; a4 < e3.length; a4++) {
            var o2 = e3[a4];
            if ("string" == typeof o2) {
              r4 += o2;
              continue;
            }
            var i3 = t4 ? t4[o2.name] : void 0, u = "?" === o2.modifier || "*" === o2.modifier, d = "*" === o2.modifier || "+" === o2.modifier;
            if (Array.isArray(i3)) {
              if (!d) throw TypeError('Expected "'.concat(o2.name, '" to not repeat, but got an array'));
              if (0 === i3.length) {
                if (u) continue;
                throw TypeError('Expected "'.concat(o2.name, '" to not be empty'));
              }
              for (var c = 0; c < i3.length; c++) {
                var p = n2(i3[c], o2);
                if (s2 && !l[a4].test(p)) throw TypeError('Expected all "'.concat(o2.name, '" to match "').concat(o2.pattern, '", but got "').concat(p, '"'));
                r4 += o2.prefix + p + o2.suffix;
              }
              continue;
            }
            if ("string" == typeof i3 || "number" == typeof i3) {
              var p = n2(String(i3), o2);
              if (s2 && !l[a4].test(p)) throw TypeError('Expected "'.concat(o2.name, '" to match "').concat(o2.pattern, '", but got "').concat(p, '"'));
              r4 += o2.prefix + p + o2.suffix;
              continue;
            }
            if (!u) {
              var f = d ? "an array" : "a string";
              throw TypeError('Expected "'.concat(o2.name, '" to be ').concat(f));
            }
          }
          return r4;
        };
      }
      function a2(e3, t3, r3) {
        void 0 === r3 && (r3 = {});
        var a3 = r3.decode, n2 = void 0 === a3 ? function(e4) {
          return e4;
        } : a3;
        return function(r4) {
          var a4 = e3.exec(r4);
          if (!a4) return false;
          for (var o2 = a4[0], i2 = a4.index, s2 = /* @__PURE__ */ Object.create(null), l = 1; l < a4.length; l++) !(function(e4) {
            if (void 0 !== a4[e4]) {
              var r5 = t3[e4 - 1];
              "*" === r5.modifier || "+" === r5.modifier ? s2[r5.name] = a4[e4].split(r5.prefix + r5.suffix).map(function(e5) {
                return n2(e5, r5);
              }) : s2[r5.name] = n2(a4[e4], r5);
            }
          })(l);
          return { path: o2, index: i2, params: s2 };
        };
      }
      function n(e3) {
        return e3.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function o(e3) {
        return e3 && e3.sensitive ? "" : "i";
      }
      function i(e3, t3, r3) {
        void 0 === r3 && (r3 = {});
        for (var a3 = r3.strict, i2 = void 0 !== a3 && a3, s2 = r3.start, l = r3.end, u = r3.encode, d = void 0 === u ? function(e4) {
          return e4;
        } : u, c = r3.delimiter, p = r3.endsWith, f = "[".concat(n(void 0 === p ? "" : p), "]|$"), y = "[".concat(n(void 0 === c ? "/#?" : c), "]"), h = void 0 === s2 || s2 ? "^" : "", g = 0; g < e3.length; g++) {
          var _ = e3[g];
          if ("string" == typeof _) h += n(d(_));
          else {
            var m = n(d(_.prefix)), M = n(d(_.suffix));
            if (_.pattern) if (t3 && t3.push(_), m || M) if ("+" === _.modifier || "*" === _.modifier) {
              var w = "*" === _.modifier ? "?" : "";
              h += "(?:".concat(m, "((?:").concat(_.pattern, ")(?:").concat(M).concat(m, "(?:").concat(_.pattern, "))*)").concat(M, ")").concat(w);
            } else h += "(?:".concat(m, "(").concat(_.pattern, ")").concat(M, ")").concat(_.modifier);
            else {
              if ("+" === _.modifier || "*" === _.modifier) throw TypeError('Can not repeat "'.concat(_.name, '" without a prefix and suffix'));
              h += "(".concat(_.pattern, ")").concat(_.modifier);
            }
            else h += "(?:".concat(m).concat(M, ")").concat(_.modifier);
          }
        }
        if (void 0 === l || l) i2 || (h += "".concat(y, "?")), h += r3.endsWith ? "(?=".concat(f, ")") : "$";
        else {
          var E = e3[e3.length - 1], v = "string" == typeof E ? y.indexOf(E[E.length - 1]) > -1 : void 0 === E;
          i2 || (h += "(?:".concat(y, "(?=").concat(f, "))?")), v || (h += "(?=".concat(y, "|").concat(f, ")"));
        }
        return new RegExp(h, o(r3));
      }
      function s(e3, r3, a3) {
        if (e3 instanceof RegExp) {
          var n2;
          if (!r3) return e3;
          for (var l = /\((?:\?<(.*?)>)?(?!\?)/g, u = 0, d = l.exec(e3.source); d; ) r3.push({ name: d[1] || u++, prefix: "", suffix: "", modifier: "", pattern: "" }), d = l.exec(e3.source);
          return e3;
        }
        return Array.isArray(e3) ? (n2 = e3.map(function(e4) {
          return s(e4, r3, a3).source;
        }), new RegExp("(?:".concat(n2.join("|"), ")"), o(a3))) : i(t2(e3, a3), r3, a3);
      }
      Object.defineProperty(e2, "__esModule", { value: true }), e2.pathToRegexp = e2.tokensToRegexp = e2.regexpToFunction = e2.match = e2.tokensToFunction = e2.compile = e2.parse = void 0, e2.parse = t2, e2.compile = function(e3, a3) {
        return r2(t2(e3, a3), a3);
      }, e2.tokensToFunction = r2, e2.match = function(e3, t3) {
        var r3 = [];
        return a2(s(e3, r3, t3), r3, t3);
      }, e2.regexpToFunction = a2, e2.tokensToRegexp = i, e2.pathToRegexp = s;
    })(), t.exports = e2;
  })();
}, 29024, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { PARAM_SEPARATOR: function() {
    return i;
  }, hasAdjacentParameterIssues: function() {
    return s;
  }, normalizeAdjacentParameters: function() {
    return l;
  }, normalizeTokensForRegexp: function() {
    return u;
  }, stripNormalizedSeparators: function() {
    return d;
  }, stripParameterSeparators: function() {
    return c;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let i = "_NEXTSEP_";
  function s(e2) {
    return "string" == typeof e2 && !!(/\/\(\.{1,3}\):[^/\s]+/.test(e2) || /:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(e2));
  }
  function l(e2) {
    let t2 = e2;
    return (t2 = t2.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${i}:$2`)).replace(/:([^:/\s)]+)(?=:)/g, `:$1${i}`);
  }
  function u(e2) {
    return e2.map((e3) => "object" == typeof e3 && null !== e3 && "modifier" in e3 && ("*" === e3.modifier || "+" === e3.modifier) && "prefix" in e3 && "suffix" in e3 && "" === e3.prefix && "" === e3.suffix ? { ...e3, prefix: "/" } : e3);
  }
  function d(e2) {
    return e2.replace(RegExp(`\\)${i}`, "g"), ")");
  }
  function c(e2) {
    let t2 = {};
    for (let [r2, a2] of Object.entries(e2)) "string" == typeof a2 ? t2[r2] = a2.replace(RegExp(`^${i}`), "") : Array.isArray(a2) ? t2[r2] = a2.map((e3) => "string" == typeof e3 ? e3.replace(RegExp(`^${i}`), "") : e3) : t2[r2] = a2;
    return t2;
  }
}, 189812, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { safeCompile: function() {
    return u;
  }, safePathToRegexp: function() {
    return l;
  }, safeRegexpToFunction: function() {
    return d;
  }, safeRouteMatcher: function() {
    return c;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let i = e.r(128416), s = e.r(29024);
  function l(e2, t2, r2) {
    if ("string" != typeof e2) return (0, i.pathToRegexp)(e2, t2, r2);
    let a2 = (0, s.hasAdjacentParameterIssues)(e2), n2 = a2 ? (0, s.normalizeAdjacentParameters)(e2) : e2;
    try {
      return (0, i.pathToRegexp)(n2, t2, r2);
    } catch (n3) {
      if (!a2) try {
        let a3 = (0, s.normalizeAdjacentParameters)(e2);
        return (0, i.pathToRegexp)(a3, t2, r2);
      } catch (e3) {
      }
      throw n3;
    }
  }
  function u(e2, t2) {
    let r2 = (0, s.hasAdjacentParameterIssues)(e2), a2 = r2 ? (0, s.normalizeAdjacentParameters)(e2) : e2;
    try {
      let e3 = (0, i.compile)(a2, t2);
      if (r2) return (t3) => (0, s.stripNormalizedSeparators)(e3(t3));
      return e3;
    } catch (a3) {
      if (!r2) try {
        let r3 = (0, s.normalizeAdjacentParameters)(e2), a4 = (0, i.compile)(r3, t2);
        return (e3) => (0, s.stripNormalizedSeparators)(a4(e3));
      } catch (e3) {
      }
      throw a3;
    }
  }
  function d(e2, t2) {
    let r2 = (0, i.regexpToFunction)(e2, t2 || []);
    return (e3) => {
      let t3 = r2(e3);
      return !!t3 && { ...t3, params: (0, s.stripParameterSeparators)(t3.params) };
    };
  }
  function c(e2) {
    return (t2) => {
      let r2 = e2(t2);
      return !!r2 && (0, s.stripParameterSeparators)(r2);
    };
  }
}, 643866, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "getRouteMatcher", { enumerable: true, get: function() {
    return i;
  } });
  let n = e.r(50595), o = e.r(189812);
  function i({ re: e2, groups: t2 }) {
    return (0, o.safeRouteMatcher)((r2) => {
      let a2 = e2.exec(r2);
      if (!a2) return false;
      let o2 = (e3) => {
        try {
          return decodeURIComponent(e3);
        } catch {
          throw Object.defineProperty(new n.DecodeError("failed to decode param"), "__NEXT_ERROR_CODE", { value: "E528", enumerable: false, configurable: true });
        }
      }, i2 = {};
      for (let [e3, r3] of Object.entries(t2)) {
        let t3 = a2[r3.pos];
        void 0 !== t3 && (r3.repeat ? i2[e3] = t3.split("/").map((e4) => o2(e4)) : i2[e3] = o2(t3));
      }
      return i2;
    });
  }
}, 603139, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "getPathMatch", { enumerable: true, get: function() {
    return o;
  } });
  let n = e.r(128416);
  function o(e2, t2) {
    let r2 = [], a2 = (0, n.pathToRegexp)(e2, r2, { delimiter: "/", sensitive: "boolean" == typeof t2?.sensitive && t2.sensitive, strict: t2?.strict }), o2 = (0, n.regexpToFunction)(t2?.regexModifier ? new RegExp(t2.regexModifier(a2.source), a2.flags) : a2, r2);
    return (e3, a3) => {
      if ("string" != typeof e3) return false;
      let n2 = o2(e3);
      if (!n2) return false;
      if (t2?.removeUnnamedParams) for (let e4 of r2) "number" == typeof e4.name && delete n2.params[e4.name];
      return { ...a3, ...n2.params };
    };
  }
}, 569394, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "parseUrl", { enumerable: true, get: function() {
    return i;
  } });
  let n = e.r(686648), o = e.r(935129);
  function i(e2) {
    if (e2.startsWith("/")) return (0, o.parseRelativeUrl)(e2);
    let t2 = new URL(e2), r2 = t2.username, a2 = t2.password, i2 = r2 ? a2 ? `${r2}:${a2}` : r2 : null, s = t2.pathname, l = t2.search;
    return { auth: i2, hash: t2.hash, hostname: t2.hostname, href: t2.href, pathname: s, port: t2.port, protocol: t2.protocol, query: (0, n.searchParamsToUrlQuery)(t2.searchParams), search: l, origin: t2.origin, slashes: "//" === t2.href.slice(t2.protocol.length, t2.protocol.length + 2) };
  }
}, 693955, (e, t, r) => {
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  (() => {
    "use strict";
    "u" > typeof __nccwpck_require__ && (__nccwpck_require__.ab = "/ROOT/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.0_@opentelemetry+api@1.9.1_@playwright+test@1.62.1_@types+_5a54af28fb2ec2bbde711a7454bcebbf/node_modules/next/dist/compiled/cookie/");
    var e2, r2, a2, n, o = {};
    o.parse = function(t2, r3) {
      if ("string" != typeof t2) throw TypeError("argument str must be a string");
      for (var n2 = {}, o2 = t2.split(a2), i = (r3 || {}).decode || e2, s = 0; s < o2.length; s++) {
        var l = o2[s], u = l.indexOf("=");
        if (!(u < 0)) {
          var d = l.substr(0, u).trim(), c = l.substr(++u, l.length).trim();
          '"' == c[0] && (c = c.slice(1, -1)), void 0 == n2[d] && (n2[d] = (function(e3, t3) {
            try {
              return t3(e3);
            } catch (t4) {
              return e3;
            }
          })(c, i));
        }
      }
      return n2;
    }, o.serialize = function(e3, t2, a3) {
      var o2 = a3 || {}, i = o2.encode || r2;
      if ("function" != typeof i) throw TypeError("option encode is invalid");
      if (!n.test(e3)) throw TypeError("argument name is invalid");
      var s = i(t2);
      if (s && !n.test(s)) throw TypeError("argument val is invalid");
      var l = e3 + "=" + s;
      if (null != o2.maxAge) {
        var u = o2.maxAge - 0;
        if (isNaN(u) || !isFinite(u)) throw TypeError("option maxAge is invalid");
        l += "; Max-Age=" + Math.floor(u);
      }
      if (o2.domain) {
        if (!n.test(o2.domain)) throw TypeError("option domain is invalid");
        l += "; Domain=" + o2.domain;
      }
      if (o2.path) {
        if (!n.test(o2.path)) throw TypeError("option path is invalid");
        l += "; Path=" + o2.path;
      }
      if (o2.expires) {
        if ("function" != typeof o2.expires.toUTCString) throw TypeError("option expires is invalid");
        l += "; Expires=" + o2.expires.toUTCString();
      }
      if (o2.httpOnly && (l += "; HttpOnly"), o2.secure && (l += "; Secure"), o2.sameSite) switch ("string" == typeof o2.sameSite ? o2.sameSite.toLowerCase() : o2.sameSite) {
        case true:
        case "strict":
          l += "; SameSite=Strict";
          break;
        case "lax":
          l += "; SameSite=Lax";
          break;
        case "none":
          l += "; SameSite=None";
          break;
        default:
          throw TypeError("option sameSite is invalid");
      }
      return l;
    }, e2 = decodeURIComponent, r2 = encodeURIComponent, a2 = /; */, n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, t.exports = o;
  })();
}, 345617, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function n(t2) {
    return function() {
      let { cookie: r2 } = t2;
      if (!r2) return {};
      let { parse: a2 } = e.r(693955);
      return a2(Array.isArray(r2) ? r2.join("; ") : r2);
    };
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "getCookieParser", { enumerable: true, get: function() {
    return n;
  } });
}, 576233, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { compileNonPath: function() {
    return f;
  }, matchHas: function() {
    return p;
  }, parseDestination: function() {
    return y;
  }, prepareDestination: function() {
    return h;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let i = e.r(199984), s = e.r(569394), l = e.r(616335), u = e.r(345617), d = e.r(189812);
  function c(e2) {
    return e2.replace(/__ESC_COLON_/gi, ":");
  }
  function p(e2, t2, r2 = [], a2 = []) {
    let n2 = {}, o2 = (r3) => {
      let a3, o3 = r3.key;
      switch (r3.type) {
        case "header":
          o3 = o3.toLowerCase(), a3 = e2.headers[o3];
          break;
        case "cookie":
          a3 = "cookies" in e2 ? e2.cookies[r3.key] : (0, u.getCookieParser)(e2.headers)()[r3.key];
          break;
        case "query":
          a3 = t2[o3];
          break;
        case "host": {
          let { host: t3 } = e2?.headers || {};
          a3 = t3?.split(":", 1)[0].toLowerCase();
        }
      }
      if (!r3.value && a3) return n2[(function(e3) {
        let t3 = "";
        for (let r4 = 0; r4 < e3.length; r4++) {
          let a4 = e3.charCodeAt(r4);
          (a4 > 64 && a4 < 91 || a4 > 96 && a4 < 123) && (t3 += e3[r4]);
        }
        return t3;
      })(o3)] = a3, true;
      if (a3) {
        let e3 = RegExp(`^${r3.value}$`), t3 = Array.isArray(a3) ? a3.slice(-1)[0].match(e3) : a3.match(e3);
        if (t3) return Array.isArray(t3) && (t3.groups ? Object.keys(t3.groups).forEach((e4) => {
          n2[e4] = t3.groups[e4];
        }) : "host" === r3.type && t3[0] && (n2.host = t3[0])), true;
      }
      return false;
    };
    return !(!r2.every((e3) => o2(e3)) || a2.some((e3) => o2(e3))) && n2;
  }
  function f(e2, t2) {
    if (!e2.includes(":")) return e2;
    for (let r2 of Object.keys(t2)) e2.includes(`:${r2}`) && (e2 = e2.replace(RegExp(`:${r2}\\*`, "g"), `:${r2}--ESCAPED_PARAM_ASTERISKS`).replace(RegExp(`:${r2}\\?`, "g"), `:${r2}--ESCAPED_PARAM_QUESTION`).replace(RegExp(`:${r2}\\+`, "g"), `:${r2}--ESCAPED_PARAM_PLUS`).replace(RegExp(`:${r2}(?!\\w)`, "g"), `--ESCAPED_PARAM_COLON${r2}`));
    return e2 = e2.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1").replace(/--ESCAPED_PARAM_PLUS/g, "+").replace(/--ESCAPED_PARAM_COLON/g, ":").replace(/--ESCAPED_PARAM_QUESTION/g, "?").replace(/--ESCAPED_PARAM_ASTERISKS/g, "*"), (0, d.safeCompile)(`/${e2}`, { validate: false })(t2).slice(1);
  }
  function y(e2) {
    let t2 = e2.destination;
    for (let r3 of Object.keys({ ...e2.params, ...e2.query })) r3 && (t2 = t2.replace(RegExp(`:${(0, i.escapeStringRegexp)(r3)}`, "g"), `__ESC_COLON_${r3}`));
    let r2 = (0, s.parseUrl)(t2), a2 = r2.pathname;
    a2 && (a2 = c(a2));
    let n2 = r2.href;
    n2 && (n2 = c(n2));
    let o2 = r2.hostname;
    o2 && (o2 = c(o2));
    let l2 = r2.hash;
    l2 && (l2 = c(l2));
    let u2 = r2.search;
    u2 && (u2 = c(u2));
    let d2 = r2.origin;
    return d2 && (d2 = c(d2)), { ...r2, pathname: a2, hostname: o2, href: n2, hash: l2, search: u2, origin: d2 };
  }
  function h(e2) {
    let t2, r2, a2 = y(e2), { hostname: n2, query: o2, search: i2 } = a2, s2 = a2.pathname;
    a2.hash && (s2 = `${s2}${a2.hash}`);
    let u2 = [], p2 = [];
    for (let e3 of ((0, d.safePathToRegexp)(s2, p2), p2)) u2.push(e3.name);
    if (n2) {
      let e3 = [];
      for (let t3 of ((0, d.safePathToRegexp)(n2, e3), e3)) u2.push(t3.name);
    }
    let h2 = (0, d.safeCompile)(s2, { validate: false });
    for (let [r3, a3] of (n2 && (t2 = (0, d.safeCompile)(n2, { validate: false, encode: encodeURIComponent })), Object.entries(o2))) Array.isArray(a3) ? o2[r3] = a3.map((t3) => f(c(t3), e2.params)) : "string" == typeof a3 && (o2[r3] = f(c(a3), e2.params));
    let g = Object.keys(e2.params).filter((e3) => "nextInternalLocale" !== e3);
    if (e2.appendParamsToQuery && !g.some((e3) => u2.includes(e3))) for (let t3 of g) t3 in o2 || (o2[t3] = e2.params[t3]);
    if ((0, l.isInterceptionRouteAppPath)(s2)) for (let t3 of s2.split("/")) {
      let r3 = l.INTERCEPTION_ROUTE_MARKERS.find((e3) => t3.startsWith(e3));
      if (r3) {
        "(..)(..)" === r3 ? (e2.params["0"] = "(..)", e2.params["1"] = "(..)") : e2.params["0"] = r3;
        break;
      }
    }
    try {
      let [n3, o3] = (r2 = h2(e2.params)).split("#", 2);
      t2 && (a2.hostname = t2(e2.params)), a2.pathname = n3, a2.hash = `${o3 ? "#" : ""}${o3 || ""}`, a2.search = i2 ? f(i2, e2.params) : "";
    } catch (e3) {
      if (e3.message.match(/Expected .*? to not repeat, but got an array/)) throw Object.defineProperty(Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match"), "__NEXT_ERROR_CODE", { value: "E329", enumerable: false, configurable: true });
      throw e3;
    }
    return a2.query = { ...e2.query, ...a2.query }, { newUrl: r2, destQuery: o2, parsedDestination: a2 };
  }
}, 198796, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "default", { enumerable: true, get: function() {
    return d;
  } });
  let n = e.r(603139), o = e.r(576233), i = e.r(422533), s = e.r(548739), l = e.r(660793), u = e.r(935129);
  function d(e2, t2, r2, a2, d2, c) {
    let p, f = false, y = false, h = (0, u.parseRelativeUrl)(e2), g = (0, i.removeTrailingSlash)((0, s.normalizeLocalePath)((0, l.removeBasePath)(h.pathname), c).pathname), _ = (r3) => {
      let u2 = (0, n.getPathMatch)(r3.source + "", { removeUnnamedParams: true, strict: true })(h.pathname);
      if ((r3.has || r3.missing) && u2) {
        let e3 = (0, o.matchHas)({ headers: { host: document.location.hostname, "user-agent": navigator.userAgent }, cookies: document.cookie.split("; ").reduce((e4, t3) => {
          let [r4, ...a3] = t3.split("=");
          return e4[r4] = a3.join("="), e4;
        }, {}) }, h.query, r3.has, r3.missing);
        e3 ? Object.assign(u2, e3) : u2 = false;
      }
      if (u2) {
        if (!r3.destination) return y = true, true;
        let n2 = (0, o.prepareDestination)({ appendParamsToQuery: true, destination: r3.destination, params: u2, query: a2 });
        if (h = n2.parsedDestination, e2 = n2.newUrl, Object.assign(a2, n2.parsedDestination.query), g = (0, i.removeTrailingSlash)((0, s.normalizeLocalePath)((0, l.removeBasePath)(e2), c).pathname), t2.includes(g)) return f = true, p = g, true;
        if ((p = d2(g)) !== e2 && t2.includes(p)) return f = true, true;
      }
    }, m = false;
    for (let e3 = 0; e3 < r2.beforeFiles.length; e3++) _(r2.beforeFiles[e3]);
    if (!(f = t2.includes(g))) {
      if (!m) {
        for (let e3 = 0; e3 < r2.afterFiles.length; e3++) if (_(r2.afterFiles[e3])) {
          m = true;
          break;
        }
      }
      if (m || (p = d2(g), m = f = t2.includes(p)), !m) {
        for (let e3 = 0; e3 < r2.fallback.length; e3++) if (_(r2.fallback[e3])) {
          m = true;
          break;
        }
      }
    }
    return { asPath: e2, parsedAs: h, matchedPage: f, resolvedHref: p, externalDest: y };
  }
}, 240361, (e, t, r) => {
  "use strict";
  let a;
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var o = { createKey: function() {
    return V;
  }, default: function() {
    return ee;
  }, matchesMiddleware: function() {
    return H;
  } };
  for (var i in o) Object.defineProperty(r, i, { enumerable: true, get: o[i] });
  let s = e.r(481258), l = e.r(744066), u = e.r(422533), d = e.r(392012), c = e.r(317131), p = l._(e.r(673231)), f = e.r(778435), y = e.r(548739), h = s._(e.r(260716)), g = e.r(50595), _ = e.r(460396), m = e.r(935129), M = e.r(643866), w = e.r(421270), E = e.r(813982), v = e.r(293316);
  e.r(786063);
  let b = e.r(783304), S = e.r(184959), P = e.r(989762), T = e.r(660793), O = e.r(907172), R = e.r(95849), A = e.r(882076), x = e.r(751952), k = e.r(852324), N = e.r(264465), j = e.r(154437), I = e.r(608651), C = e.r(281597), B = e.r(710892), L = e.r(303017), D = e.r(504387), $ = e.r(558296), U = e.r(654216), K = e.r(857629);
  function F() {
    return Object.assign(Object.defineProperty(Error("Route Cancelled"), "__NEXT_ERROR_CODE", { value: "E315", enumerable: false, configurable: true }), { cancelled: true });
  }
  async function H(e2) {
    let t2 = await Promise.resolve(e2.router.pageLoader.getMiddleware());
    if (!t2) return false;
    let { pathname: r2 } = (0, b.parsePath)(e2.asPath), a2 = (0, R.hasBasePath)(r2) ? (0, T.removeBasePath)(r2) : r2, n2 = (0, O.addBasePath)((0, S.addLocale)(a2, e2.locale));
    return t2.some((e3) => new RegExp(e3.regexp).test(n2));
  }
  function W(e2) {
    let t2 = (0, g.getLocationOrigin)();
    return e2.startsWith(t2) ? e2.substring(t2.length) : e2;
  }
  function G(e2, t2, r2) {
    let [a2, n2] = (0, A.resolveHref)(e2, t2, true), o2 = (0, g.getLocationOrigin)(), i2 = a2.startsWith(o2), s2 = n2 && n2.startsWith(o2);
    a2 = W(a2), n2 = n2 ? W(n2) : n2;
    let l2 = i2 ? a2 : (0, O.addBasePath)(a2), u2 = r2 ? W((0, A.resolveHref)(e2, r2)) : n2 || a2;
    return { url: l2, as: s2 ? u2 : (0, O.addBasePath)(u2) };
  }
  function q(e2, t2) {
    let r2 = (0, u.removeTrailingSlash)((0, f.denormalizePagePath)(e2));
    return "/404" === r2 || "/_error" === r2 ? e2 : (t2.includes(r2) || t2.some((t3) => {
      if ((0, _.isDynamicRoute)(t3) && (0, w.getRouteRegex)(t3).re.test(r2)) return e2 = t3, true;
    }), (0, u.removeTrailingSlash)(e2));
  }
  async function Y(e2) {
    if (!await H(e2) || !e2.fetchData) return null;
    let t2 = await e2.fetchData(), r2 = await (function(e3, t3, r3) {
      let n2 = { basePath: r3.router.basePath, i18n: { locales: r3.router.locales }, trailingSlash: false }, o2 = t3.headers.get("x-nextjs-rewrite"), i2 = o2 || t3.headers.get("x-nextjs-matched-path"), s2 = t3.headers.get($.MATCHED_PATH_HEADER);
      if (!s2 || i2 || s2.includes("__next_data_catchall") || s2.includes("/_error") || s2.includes("/404") || (i2 = s2), i2) {
        if (i2.startsWith("/")) {
          let t5 = (0, m.parseRelativeUrl)(i2), s4 = (0, k.getNextPathnameInfo)(t5.pathname, { nextConfig: n2, parseData: true }), l3 = (0, u.removeTrailingSlash)(s4.pathname);
          return Promise.all([r3.router.pageLoader.getPageList(), (0, d.getClientBuildManifest)()]).then(([i3, { __rewrites: u2 }]) => {
            let d2 = (0, S.addLocale)(s4.pathname, s4.locale);
            if ((0, _.isDynamicRoute)(d2) || !o2 && i3.includes((0, y.normalizeLocalePath)((0, T.removeBasePath)(d2), r3.router.locales).pathname)) {
              let r4 = (0, k.getNextPathnameInfo)((0, m.parseRelativeUrl)(e3).pathname, { nextConfig: { basePath: n2.basePath, trailingSlash: n2.trailingSlash }, parseData: true });
              t5.pathname = d2 = (0, O.addBasePath)(r4.pathname);
            }
            {
              let e4 = a(d2, i3, u2, t5.query, (e5) => q(e5, i3), r3.router.locales);
              e4.matchedPage && (t5.pathname = e4.parsedAs.pathname, d2 = t5.pathname, Object.assign(t5.query, e4.parsedAs.query));
            }
            let c2 = i3.includes(l3) ? l3 : q((0, y.normalizeLocalePath)((0, T.removeBasePath)(t5.pathname), r3.router.locales).pathname, i3);
            if ((0, _.isDynamicRoute)(c2)) {
              let e4 = (0, M.getRouteMatcher)((0, w.getRouteRegex)(c2))(d2);
              Object.assign(t5.query, e4 || {});
            }
            return { type: "rewrite", parsedAs: t5, resolvedHref: c2 };
          });
        }
        let t4 = (0, b.parsePath)(e3), s3 = (0, N.formatNextPathnameInfo)({ ...(0, k.getNextPathnameInfo)(t4.pathname, { nextConfig: n2, parseData: true }), defaultLocale: r3.router.defaultLocale, buildId: "" });
        return Promise.resolve({ type: "redirect-external", destination: `${s3}${t4.query}${t4.hash}` });
      }
      let l2 = t3.headers.get("x-nextjs-redirect");
      if (l2) {
        if (l2.startsWith("/")) {
          let e4 = (0, b.parsePath)(l2), t4 = (0, N.formatNextPathnameInfo)({ ...(0, k.getNextPathnameInfo)(e4.pathname, { nextConfig: n2, parseData: true }), defaultLocale: r3.router.defaultLocale, buildId: "" });
          return Promise.resolve({ type: "redirect-internal", newAs: `${t4}${e4.query}${e4.hash}`, newUrl: `${t4}${e4.query}${e4.hash}` });
        }
        return Promise.resolve({ type: "redirect-external", destination: l2 });
      }
      return Promise.resolve({ type: "next" });
    })(t2.dataHref, t2.response, e2);
    return { dataHref: t2.dataHref, json: t2.json, response: t2.response, text: t2.text, cacheKey: t2.cacheKey, effect: r2 };
  }
  a = e.r(198796).default;
  let z = /* @__PURE__ */ Symbol("SSG_DATA_NOT_FOUND");
  function X(e2) {
    try {
      return JSON.parse(e2);
    } catch (e3) {
      return null;
    }
  }
  function J({ dataHref: e2, inflightCache: t2, isPrefetch: r2, hasMiddleware: a2, isServerRender: n2, parseJSON: o2, persistCache: i2, isBackground: s2, unstable_skipClientCache: l2 }) {
    let { href: u2 } = new URL(e2, window.location.href), c2 = (0, U.getDeploymentId)(), p2 = (s3) => (function e3(t3, r3, a3) {
      return fetch(t3, { credentials: "same-origin", method: a3.method || "GET", headers: Object.assign({}, a3.headers, { "x-nextjs-data": "1" }) }).then((n3) => !n3.ok && r3 > 1 && n3.status >= 500 ? e3(t3, r3 - 1, a3) : n3);
    })(e2, n2 ? 3 : 1, { headers: Object.assign({}, r2 ? { purpose: "prefetch" } : {}, r2 && a2 ? { "x-middleware-prefetch": "1" } : {}, c2 ? { "x-deployment-id": c2 } : {}), method: s3?.method ?? "GET" }).then((t3) => t3.ok && s3?.method === "HEAD" ? { dataHref: e2, response: t3, text: "", json: {}, cacheKey: u2 } : t3.text().then((r3) => {
      if (!t3.ok) {
        if (a2 && [301, 302, 307, 308].includes(t3.status)) return { dataHref: e2, response: t3, text: r3, json: {}, cacheKey: u2 };
        if (404 === t3.status && X(r3)?.notFound) return { dataHref: e2, json: { notFound: z }, response: t3, text: r3, cacheKey: u2 };
        let o3 = Object.defineProperty(Error("Failed to load static props"), "__NEXT_ERROR_CODE", { value: "E124", enumerable: false, configurable: true });
        throw n2 || (0, d.markAssetError)(o3), o3;
      }
      let i3 = t3.headers.get($.NEXT_NAV_DEPLOYMENT_ID_HEADER);
      if (null != i3 && i3 !== c2) {
        let e3 = Object.defineProperty(Error("Loaded static props were from an outdated deployment, forcing a hard reload"), "__NEXT_ERROR_CODE", { value: "E989", enumerable: false, configurable: true });
        throw n2 || (0, d.markAssetError)(e3), e3;
      }
      return { dataHref: e2, json: o2 ? X(r3) : null, response: t3, text: r3, cacheKey: u2 };
    })).then((e3) => (i2 && "no-cache" !== e3.response.headers.get("x-middleware-cache") || delete t2[u2], e3)).catch((e3) => {
      throw l2 || delete t2[u2], ("Failed to fetch" === e3.message || "NetworkError when attempting to fetch resource." === e3.message || "Load failed" === e3.message) && (0, d.markAssetError)(e3), e3;
    });
    return l2 && i2 ? p2({}).then((e3) => ("no-cache" !== e3.response.headers.get("x-middleware-cache") && (t2[u2] = Promise.resolve(e3)), e3)) : void 0 !== t2[u2] ? t2[u2] : t2[u2] = p2(s2 ? { method: "HEAD" } : {});
  }
  function V() {
    return Math.random().toString(36).slice(2, 10);
  }
  function Q({ url: e2, router: t2 }) {
    if (e2 === (0, O.addBasePath)((0, S.addLocale)(t2.asPath, t2.locale))) throw Object.defineProperty(Error(`Invariant: attempted to hard navigate to the same URL ${e2} ${location.href}`), "__NEXT_ERROR_CODE", { value: "E282", enumerable: false, configurable: true });
    window.location.href = e2;
  }
  let Z = ({ route: e2, router: t2 }) => {
    let r2 = false, a2 = t2.clc = () => {
      r2 = true;
    };
    return () => {
      if (r2) {
        let t3 = Object.defineProperty(Error(`Abort fetching component for route: "${e2}"`), "__NEXT_ERROR_CODE", { value: "E483", enumerable: false, configurable: true });
        throw t3.cancelled = true, t3;
      }
      a2 === t2.clc && (t2.clc = null);
    };
  };
  class ee {
    static {
      this.events = (0, h.default)();
    }
    constructor(e2, t2, r2, { initialProps: a2, pageLoader: n2, App: o2, wrapApp: i2, Component: s2, err: l2, subscription: d2, isFallback: c2, locale: p2, locales: f2, defaultLocale: y2, domainLocales: h2, isPreview: M2 }) {
      this.sdc = {}, this.sbc = {}, this.isFirstPopStateEvent = true, this._key = V(), this.onPopState = (e3) => {
        let t3, { isFirstPopStateEvent: r3 } = this;
        this.isFirstPopStateEvent = false;
        let a3 = e3.state;
        if (!a3) {
          let { pathname: e4, query: t4 } = this;
          this.changeState("replaceState", (0, v.formatWithValidation)({ pathname: (0, O.addBasePath)(e4), query: t4 }), (0, g.getURL)());
          return;
        }
        if (a3.__NA) return void window.location.reload();
        if (!a3.__N || r3 && this.locale === a3.options.locale && a3.as === this.asPath) return;
        let { url: n3, as: o3, options: i3, key: s3 } = a3;
        this._key = s3;
        let { pathname: l3 } = (0, m.parseRelativeUrl)(n3);
        this.isSsr && o3 === (0, O.addBasePath)(this.asPath) && l3 === (0, O.addBasePath)(this.pathname) || (!this._bps || this._bps(a3)) && this.change("replaceState", n3, o3, Object.assign({}, i3, { shallow: i3.shallow && this._shallow, locale: i3.locale || this.defaultLocale, _h: 0 }), t3);
      };
      const w2 = (0, u.removeTrailingSlash)(e2);
      this.components = {}, "/_error" !== e2 && (this.components[w2] = { Component: s2, initial: true, props: a2, err: l2, __N_SSG: a2 && a2.__N_SSG, __N_SSP: a2 && a2.__N_SSP }), this.components["/_app"] = { Component: o2, styleSheets: [] }, this.events = ee.events, this.pageLoader = n2;
      const E2 = (0, _.isDynamicRoute)(e2) && self.__NEXT_DATA__.autoExport;
      if (this.basePath = "", this.sub = d2, this.clc = null, this._wrapApp = i2, this.isSsr = true, this.isLocaleDomain = false, this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.isExperimentalCompile || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !E2 && !self.location.search && 0), this.state = { route: w2, pathname: e2, query: t2, asPath: E2 ? e2 : r2, isPreview: !!M2, locale: void 0, isFallback: c2 }, this._initialMatchesMiddlewarePromise = Promise.resolve(false), "u" > typeof window) {
        if (!r2.startsWith("//")) {
          const a3 = { locale: p2 }, n3 = (0, g.getURL)();
          this._initialMatchesMiddlewarePromise = H({ router: this, locale: p2, asPath: n3 }).then((o3) => (a3._shouldResolveHref = r2 !== e2, this.changeState("replaceState", o3 ? n3 : (0, v.formatWithValidation)({ pathname: (0, O.addBasePath)(e2), query: t2 }), n3, a3), o3));
        }
        window.addEventListener("popstate", this.onPopState);
      }
    }
    reload() {
      window.location.reload();
    }
    back() {
      window.history.back();
    }
    forward() {
      window.history.forward();
    }
    push(e2, t2, r2 = {}) {
      if ((0, K.isJavaScriptURLString)(e2.toString()) || t2 && (0, K.isJavaScriptURLString)(t2.toString())) throw Object.defineProperty(Error("Next.js has blocked a javascript: URL as a security precaution."), "__NEXT_ERROR_CODE", { value: "E978", enumerable: false, configurable: true });
      return { url: e2, as: t2 } = G(this, e2, t2), this.change("pushState", e2, t2, r2);
    }
    replace(e2, t2, r2 = {}) {
      if ((0, K.isJavaScriptURLString)(e2.toString()) || t2 && (0, K.isJavaScriptURLString)(t2.toString())) throw Object.defineProperty(Error("Next.js has blocked a javascript: URL as a security precaution."), "__NEXT_ERROR_CODE", { value: "E978", enumerable: false, configurable: true });
      return { url: e2, as: t2 } = G(this, e2, t2), this.change("replaceState", e2, t2, r2);
    }
    async _bfl(t2, r2, a2, n2) {
      {
        if (!this._bfl_s && !this._bfl_d) {
          let r3, o3, { BloomFilter: i3 } = e.r(913770);
          try {
            ({ __routerFilterStatic: r3, __routerFilterDynamic: o3 } = await (0, d.getClientBuildManifest)());
          } catch (e2) {
            if (console.error(e2), n2) return true;
            return Q({ url: (0, O.addBasePath)((0, S.addLocale)(t2, a2 || this.locale, this.defaultLocale)), router: this }), new Promise(() => {
            });
          }
          let s2 = { numItems: 28, errorRate: 1e-4, numBits: 537, numHashes: 14, bitArray: [0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1] };
          !r3 && s2 && (r3 = s2 || void 0);
          let l2 = { numItems: 65, errorRate: 1e-4, numBits: 1247, numHashes: 14, bitArray: [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0] };
          !o3 && l2 && (o3 = l2 || void 0), r3?.numHashes && (this._bfl_s = new i3(r3.numItems, r3.errorRate), this._bfl_s.import(r3)), o3?.numHashes && (this._bfl_d = new i3(o3.numItems, o3.errorRate), this._bfl_d.import(o3));
        }
        let o2 = false, i2 = false;
        for (let { as: e2, allowMatchCurrent: s2 } of [{ as: t2 }, { as: r2 }]) if (e2) {
          let r3 = (0, u.removeTrailingSlash)(new URL(e2, "http://n").pathname), l2 = (0, O.addBasePath)((0, S.addLocale)(r3, a2 || this.locale));
          if (s2 || r3 !== (0, u.removeTrailingSlash)(new URL(this.asPath, "http://n").pathname)) {
            for (let e3 of (o2 = o2 || !!this._bfl_s?.contains(r3) || !!this._bfl_s?.contains(l2), [r3, l2])) {
              let t3 = e3.split("/");
              for (let e4 = 0; !i2 && e4 < t3.length + 1; e4++) {
                let r4 = t3.slice(0, e4).join("/");
                if (r4 && this._bfl_d?.contains(r4)) {
                  i2 = true;
                  break;
                }
              }
            }
            if (o2 || i2) {
              if (n2) return true;
              return Q({ url: (0, O.addBasePath)((0, S.addLocale)(t2, a2 || this.locale, this.defaultLocale)), router: this }), new Promise(() => {
              });
            }
          }
        }
      }
      return false;
    }
    async change(e2, t2, r2, n2, o2) {
      let i2, s2;
      if (!(0, I.isLocalURL)(t2)) return Q({ url: t2, router: this }), false;
      let l2 = 1 === n2._h;
      l2 || n2.shallow || await this._bfl(r2, void 0, n2.locale);
      let f2 = l2 || n2._shouldResolveHref || (0, b.parsePath)(t2).pathname === (0, b.parsePath)(r2).pathname, y2 = { ...this.state }, h2 = true !== this.isReady;
      this.isReady = true;
      let A2 = this.isSsr;
      if (l2 || (this.isSsr = false), l2 && this.clc) return false;
      let x2 = y2.locale;
      g.ST && performance.mark("routeChange");
      let { shallow: k2 = false, scroll: N2 = true } = n2, C2 = { shallow: k2 };
      this._inFlightRoute && this.clc && (A2 || ee.events.emit("routeChangeError", F(), this._inFlightRoute, C2), this.clc(), this.clc = null), r2 = (0, O.addBasePath)((0, S.addLocale)((0, R.hasBasePath)(r2) ? (0, T.removeBasePath)(r2) : r2, n2.locale, this.defaultLocale));
      let D2 = (0, P.removeLocale)((0, R.hasBasePath)(r2) ? (0, T.removeBasePath)(r2) : r2, y2.locale);
      this._inFlightRoute = r2;
      let $2 = x2 !== y2.locale;
      if (!l2 && this.onlyAHashChange(D2) && !$2) {
        y2.asPath = D2, ee.events.emit("hashChangeStart", r2, C2), this.changeState(e2, t2, r2, { ...n2, scroll: false }), N2 && this.scrollToHash(D2);
        try {
          await this.set(y2, this.components[y2.route], null);
        } catch (e3) {
          throw (0, p.default)(e3) && e3.cancelled && ee.events.emit("routeChangeError", e3, D2, C2), e3;
        }
        return ee.events.emit("hashChangeComplete", r2, C2), true;
      }
      let U2 = (0, m.parseRelativeUrl)(t2), { pathname: K2, query: W2 } = U2;
      try {
        [i2, { __rewrites: s2 }] = await Promise.all([this.pageLoader.getPageList(), (0, d.getClientBuildManifest)(), this.pageLoader.getMiddleware()]);
      } catch (e3) {
        return Q({ url: r2, router: this }), false;
      }
      this.urlIsNew(D2) || $2 || (e2 = "replaceState");
      let Y2 = r2;
      K2 = K2 ? (0, u.removeTrailingSlash)((0, T.removeBasePath)(K2)) : K2;
      let X2 = (0, u.removeTrailingSlash)(K2), J2 = r2.startsWith("/") && (0, m.parseRelativeUrl)(r2).pathname;
      if (this.components[K2]?.__appRouter) return Q({ url: r2, router: this }), new Promise(() => {
      });
      let V2 = !!(J2 && X2 !== J2 && (!(0, _.isDynamicRoute)(X2) || !(0, M.getRouteMatcher)((0, w.getRouteRegex)(X2))(J2))), Z2 = !n2.shallow && await H({ asPath: r2, locale: y2.locale, router: this });
      if (l2 && Z2 && (f2 = false), f2 && "/_error" !== K2) if (n2._shouldResolveHref = true, r2.startsWith("/")) {
        let e3 = a((0, O.addBasePath)((0, S.addLocale)(D2, y2.locale), true), i2, s2, W2, (e4) => q(e4, i2), this.locales);
        if (e3.externalDest) return Q({ url: r2, router: this }), true;
        Z2 || (Y2 = e3.asPath), e3.matchedPage && e3.resolvedHref && (K2 = e3.resolvedHref, U2.pathname = (0, O.addBasePath)(K2), Z2 || (t2 = (0, v.formatWithValidation)(U2)));
      } else U2.pathname = q(K2, i2), U2.pathname !== K2 && (K2 = U2.pathname, U2.pathname = (0, O.addBasePath)(K2), Z2 || (t2 = (0, v.formatWithValidation)(U2)));
      if (!l2 && !n2.shallow && this._bfl_d && (0, _.isDynamicRoute)(K2)) {
        let e3 = (0, u.removeTrailingSlash)((0, m.parseRelativeUrl)(D2).pathname);
        if ((0, E.hasDynamicFilterCandidate)(K2, e3, (e4) => !!this._bfl_d?.contains(e4))) return Q({ url: r2, router: this }), new Promise(() => {
        });
      }
      if (!(0, I.isLocalURL)(r2)) return Q({ url: r2, router: this }), false;
      Y2 = (0, P.removeLocale)((0, T.removeBasePath)(Y2), y2.locale), X2 = (0, u.removeTrailingSlash)(K2);
      let et = false;
      if ((0, _.isDynamicRoute)(X2)) {
        let e3 = (0, m.parseRelativeUrl)(Y2), a2 = e3.pathname, n3 = (0, w.getRouteRegex)(X2);
        et = (0, M.getRouteMatcher)(n3)(a2);
        let o3 = X2 === a2, i3 = o3 ? (0, L.interpolateAs)(X2, a2, W2) : {};
        if (et && (!o3 || i3.result)) o3 ? r2 = (0, v.formatWithValidation)(Object.assign({}, e3, { pathname: i3.result, query: (0, B.omit)(W2, i3.params) })) : Object.assign(W2, et);
        else {
          let e4 = Object.keys(n3.groups).filter((e5) => !W2[e5] && !n3.groups[e5].optional);
          if (e4.length > 0 && !Z2) throw Object.defineProperty(Error((o3 ? `The provided \`href\` (${t2}) value is missing query values (${e4.join(", ")}) to be interpolated properly. ` : `The provided \`as\` value (${a2}) is incompatible with the \`href\` value (${X2}). `) + `Read more: https://nextjs.org/docs/messages/${o3 ? "href-interpolation-failed" : "incompatible-href-as"}`), "__NEXT_ERROR_CODE", { value: "E344", enumerable: false, configurable: true });
        }
      }
      l2 || ee.events.emit("routeChangeStart", r2, C2);
      let er = "/404" === this.pathname || "/_error" === this.pathname;
      try {
        let a2 = await this.getRouteInfo({ route: X2, pathname: K2, query: W2, as: r2, resolvedAs: Y2, routeProps: C2, locale: y2.locale, isPreview: y2.isPreview, hasMiddleware: Z2, unstable_skipClientCache: n2.unstable_skipClientCache, isQueryUpdating: l2 && !this.isFallback, isMiddlewareRewrite: V2 });
        if (l2 || n2.shallow || await this._bfl(r2, "resolvedAs" in a2 ? a2.resolvedAs : void 0, y2.locale), "route" in a2 && Z2) {
          X2 = K2 = a2.route || X2, C2.shallow || (W2 = Object.assign({}, a2.query || {}, W2));
          let e3 = (0, R.hasBasePath)(U2.pathname) ? (0, T.removeBasePath)(U2.pathname) : U2.pathname;
          if (et && K2 !== e3 && Object.keys(et).forEach((e4) => {
            et && W2[e4] === et[e4] && delete W2[e4];
          }), (0, _.isDynamicRoute)(K2)) {
            let e4 = !C2.shallow && a2.resolvedAs ? a2.resolvedAs : (0, O.addBasePath)((0, S.addLocale)(new URL(r2, location.href).pathname, y2.locale), true);
            (0, R.hasBasePath)(e4) && (e4 = (0, T.removeBasePath)(e4));
            let t3 = (0, w.getRouteRegex)(K2), n3 = (0, M.getRouteMatcher)(t3)(new URL(e4, location.href).pathname);
            n3 && Object.assign(W2, n3);
          }
        }
        if ("type" in a2) if ("redirect-internal" === a2.type) return this.change(e2, a2.newUrl, a2.newAs, n2);
        else return Q({ url: a2.destination, router: this }), new Promise(() => {
        });
        let s3 = a2.Component;
        if (s3 && s3.unstable_scriptLoader && [].concat(s3.unstable_scriptLoader()).forEach((e3) => {
          (0, c.handleClientScriptLoad)(e3.props);
        }), (a2.__N_SSG || a2.__N_SSP) && a2.props) {
          if (a2.props.pageProps && a2.props.pageProps.__N_REDIRECT) {
            n2.locale = false;
            let t3 = a2.props.pageProps.__N_REDIRECT;
            if (t3.startsWith("/") && false !== a2.props.pageProps.__N_REDIRECT_BASE_PATH) {
              let r3 = (0, m.parseRelativeUrl)(t3);
              r3.pathname = q(r3.pathname, i2);
              let { url: a3, as: o3 } = G(this, t3, t3);
              return this.change(e2, a3, o3, n2);
            }
            return Q({ url: t3, router: this }), new Promise(() => {
            });
          }
          if (y2.isPreview = !!a2.props.__N_PREVIEW, a2.props.notFound === z) {
            let e3;
            try {
              await this.fetchComponent("/404"), e3 = "/404";
            } catch (t3) {
              e3 = "/_error";
            }
            if (a2 = await this.getRouteInfo({ route: e3, pathname: e3, query: W2, as: r2, resolvedAs: Y2, routeProps: { shallow: false }, locale: y2.locale, isPreview: y2.isPreview, isNotFound: true }), "type" in a2) throw Object.defineProperty(Error("Unexpected middleware effect on /404"), "__NEXT_ERROR_CODE", { value: "E158", enumerable: false, configurable: true });
          }
        }
        l2 && "/_error" === this.pathname && self.__NEXT_DATA__.props?.pageProps?.statusCode === 500 && a2.props?.pageProps && (a2.props.pageProps.statusCode = 500);
        let u2 = n2.shallow && y2.route === (a2.route ?? X2), d2 = n2.scroll ?? (!l2 && !u2), f3 = o2 ?? (d2 ? { x: 0, y: 0 } : null), g2 = { ...y2, route: X2, pathname: K2, query: W2, asPath: D2, isFallback: false };
        if (l2 && er) {
          if (a2 = await this.getRouteInfo({ route: this.pathname, pathname: this.pathname, query: W2, as: r2, resolvedAs: Y2, routeProps: { shallow: false }, locale: y2.locale, isPreview: y2.isPreview, isQueryUpdating: l2 && !this.isFallback }), "type" in a2) throw Object.defineProperty(Error(`Unexpected middleware effect on ${this.pathname}`), "__NEXT_ERROR_CODE", { value: "E225", enumerable: false, configurable: true });
          "/_error" === this.pathname && self.__NEXT_DATA__.props?.pageProps?.statusCode === 500 && a2.props?.pageProps && (a2.props.pageProps.statusCode = 500);
          try {
            await this.set(g2, a2, f3);
          } catch (e3) {
            throw (0, p.default)(e3) && e3.cancelled && ee.events.emit("routeChangeError", e3, D2, C2), e3;
          }
          return true;
        }
        if (ee.events.emit("beforeHistoryChange", r2, C2), this.changeState(e2, t2, r2, n2), !(l2 && !f3 && !h2 && !$2 && (0, j.compareRouterStates)(g2, this.state))) {
          try {
            await this.set(g2, a2, f3);
          } catch (e3) {
            if (e3.cancelled) a2.error = a2.error || e3;
            else throw e3;
          }
          if (a2.error) throw l2 || ee.events.emit("routeChangeError", a2.error, D2, C2), a2.error;
          l2 || ee.events.emit("routeChangeComplete", r2, C2), d2 && /#.+$/.test(r2) && this.scrollToHash(r2);
        }
        return true;
      } catch (e3) {
        if ((0, p.default)(e3) && e3.cancelled) return false;
        throw e3;
      }
    }
    changeState(e2, t2, r2, a2 = {}) {
      ("pushState" !== e2 || (0, g.getURL)() !== r2) && (this._shallow = a2.shallow, window.history[e2]({ url: t2, as: r2, options: a2, __N: true, key: this._key = "pushState" !== e2 ? this._key : V() }, "", r2));
    }
    async handleRouteInfoError(e2, t2, r2, a2, n2, o2) {
      if (e2.cancelled) throw e2;
      if ((0, d.isAssetError)(e2) || o2) throw ee.events.emit("routeChangeError", e2, a2, n2), Q({ url: a2, router: this }), F();
      console.error(e2);
      try {
        let a3, { page: n3, styleSheets: o3 } = await this.fetchComponent("/_error"), i2 = { props: a3, Component: n3, styleSheets: o3, err: e2, error: e2 };
        if (!i2.props) try {
          i2.props = await this.getInitialProps(n3, { err: e2, pathname: t2, query: r2 });
        } catch (e3) {
          console.error("Error in error page `getInitialProps`: ", e3), i2.props = {};
        }
        return i2;
      } catch (e3) {
        return this.handleRouteInfoError((0, p.default)(e3) ? e3 : Object.defineProperty(Error(e3 + ""), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true }), t2, r2, a2, n2, true);
      }
    }
    async getRouteInfo({ route: e2, pathname: t2, query: r2, as: a2, resolvedAs: n2, routeProps: o2, locale: i2, hasMiddleware: s2, isPreview: l2, unstable_skipClientCache: d2, isQueryUpdating: c2, isMiddlewareRewrite: f2, isNotFound: h2 }) {
      let g2 = e2;
      try {
        let e3 = this.components[g2];
        if (o2.shallow && e3 && this.route === g2) return e3;
        let p2 = Z({ route: g2, router: this });
        s2 && (e3 = void 0);
        let _2 = !e3 || "initial" in e3 ? void 0 : e3, m2 = { dataHref: this.pageLoader.getDataHref({ href: (0, v.formatWithValidation)({ pathname: t2, query: r2 }), skipInterpolation: true, asPath: h2 ? "/404" : n2, locale: i2 }), hasMiddleware: true, isServerRender: this.isSsr, parseJSON: true, inflightCache: c2 ? this.sbc : this.sdc, persistCache: !l2, isPrefetch: false, unstable_skipClientCache: d2, isBackground: c2 }, M2 = c2 && !f2 ? null : await Y({ fetchData: () => J(m2), asPath: h2 ? "/404" : n2, locale: i2, router: this }).catch((e4) => {
          if (c2) return null;
          throw e4;
        });
        if (M2 && ("/_error" === t2 || "/404" === t2) && (M2.effect = void 0), c2 && (M2 ? M2.json = self.__NEXT_DATA__.props : M2 = { json: self.__NEXT_DATA__.props }), p2(), M2?.effect?.type === "redirect-internal" || M2?.effect?.type === "redirect-external") return M2.effect;
        if (M2?.effect?.type === "rewrite") {
          let a3 = (0, u.removeTrailingSlash)(M2.effect.resolvedHref), i3 = await this.pageLoader.getPageList();
          if ((!c2 || i3.includes(a3)) && (g2 = a3, t2 = M2.effect.resolvedHref, r2 = { ...r2, ...M2.effect.parsedAs.query }, n2 = (0, T.removeBasePath)((0, y.normalizeLocalePath)(M2.effect.parsedAs.pathname, this.locales).pathname), e3 = this.components[g2], o2.shallow && e3 && this.route === g2 && !s2)) return { ...e3, route: g2 };
        }
        if ((0, x.isAPIRoute)(g2)) return Q({ url: a2, router: this }), new Promise(() => {
        });
        let w2 = _2 || await this.fetchComponent(g2).then((e4) => ({ Component: e4.page, styleSheets: e4.styleSheets, __N_SSG: e4.mod.__N_SSG, __N_SSP: e4.mod.__N_SSP })), E2 = M2?.response?.headers.get("x-middleware-skip"), b2 = w2.__N_SSG || w2.__N_SSP;
        E2 && M2?.dataHref && delete this.sdc[M2.dataHref];
        let { props: S2, cacheKey: P2 } = await this._getData(async () => {
          if (b2) {
            if (M2?.json && !E2) return { cacheKey: M2.cacheKey, props: M2.json };
            let e4 = M2?.dataHref ? M2.dataHref : this.pageLoader.getDataHref({ href: (0, v.formatWithValidation)({ pathname: t2, query: r2 }), asPath: n2, locale: i2 }), a3 = await J({ dataHref: e4, isServerRender: this.isSsr, parseJSON: true, inflightCache: E2 ? {} : this.sdc, persistCache: !l2, isPrefetch: false, unstable_skipClientCache: d2 });
            return { cacheKey: a3.cacheKey, props: a3.json || {} };
          }
          return { headers: {}, props: await this.getInitialProps(w2.Component, { pathname: t2, query: r2, asPath: a2, locale: i2, locales: this.locales, defaultLocale: this.defaultLocale }) };
        });
        return w2.__N_SSP && m2.dataHref && P2 && delete this.sdc[P2], this.isPreview || !w2.__N_SSG || c2 || J(Object.assign({}, m2, { isBackground: true, persistCache: false, inflightCache: this.sbc })).catch(() => {
        }), S2.pageProps = Object.assign({}, S2.pageProps), w2.props = S2, w2.route = g2, w2.query = r2, w2.resolvedAs = n2, this.components[g2] = w2, w2;
      } catch (e3) {
        return this.handleRouteInfoError((0, p.getProperError)(e3), t2, r2, a2, o2);
      }
    }
    set(e2, t2, r2) {
      return this.state = e2, this.sub(t2, this.components["/_app"].Component, r2);
    }
    beforePopState(e2) {
      this._bps = e2;
    }
    onlyAHashChange(e2) {
      if (!this.asPath) return false;
      let [t2, r2] = this.asPath.split("#", 2), [a2, n2] = e2.split("#", 2);
      return !!n2 && t2 === a2 && r2 === n2 || t2 === a2 && r2 !== n2;
    }
    scrollToHash(e2) {
      let [, t2 = ""] = e2.split("#", 2);
      (0, D.disableSmoothScrollDuringRouteTransition)(() => {
        if ("" === t2 || "top" === t2) return void window.scrollTo(0, 0);
        let e3 = decodeURIComponent(t2), r2 = document.getElementById(e3);
        if (r2) return void r2.scrollIntoView();
        let a2 = document.getElementsByName(e3)[0];
        a2 && a2.scrollIntoView();
      }, { onlyHashChange: this.onlyAHashChange(e2) });
    }
    urlIsNew(e2) {
      return this.asPath !== e2;
    }
    async prefetch(e2, t2 = e2, r2 = {}) {
      if ("u" > typeof window && (0, C.isBot)(window.navigator.userAgent)) return;
      let n2 = (0, m.parseRelativeUrl)(e2), o2 = n2.pathname, { pathname: i2, query: s2 } = n2, l2 = i2, c2 = await this.pageLoader.getPageList(), p2 = t2, f2 = void 0 !== r2.locale ? r2.locale || void 0 : this.locale, y2 = await H({ asPath: t2, locale: f2, router: this });
      if (t2.startsWith("/")) {
        let r3;
        ({ __rewrites: r3 } = await (0, d.getClientBuildManifest)());
        let o3 = a((0, O.addBasePath)((0, S.addLocale)(t2, this.locale), true), c2, r3, n2.query, (e3) => q(e3, c2), this.locales);
        if (o3.externalDest) return;
        y2 || (p2 = (0, P.removeLocale)((0, T.removeBasePath)(o3.asPath), this.locale)), o3.matchedPage && o3.resolvedHref && (n2.pathname = i2 = o3.resolvedHref, y2 || (e2 = (0, v.formatWithValidation)(n2)));
      }
      n2.pathname = q(n2.pathname, c2), (0, _.isDynamicRoute)(n2.pathname) && (i2 = n2.pathname, n2.pathname = i2, Object.assign(s2, (0, M.getRouteMatcher)((0, w.getRouteRegex)(n2.pathname))((0, b.parsePath)(t2).pathname) || {}), y2 || (e2 = (0, v.formatWithValidation)(n2)));
      let h2 = await Y({ fetchData: () => J({ dataHref: this.pageLoader.getDataHref({ href: (0, v.formatWithValidation)({ pathname: l2, query: s2 }), skipInterpolation: true, asPath: p2, locale: f2 }), hasMiddleware: true, isServerRender: false, parseJSON: true, inflightCache: this.sdc, persistCache: !this.isPreview, isPrefetch: true }), asPath: t2, locale: f2, router: this });
      if (h2?.effect.type === "rewrite" && (n2.pathname = h2.effect.resolvedHref, i2 = h2.effect.resolvedHref, s2 = { ...s2, ...h2.effect.parsedAs.query }, p2 = h2.effect.parsedAs.pathname, e2 = (0, v.formatWithValidation)(n2)), h2?.effect.type === "redirect-external") return;
      let g2 = (0, u.removeTrailingSlash)(i2);
      await this._bfl(t2, p2, r2.locale, true) && (this.components[o2] = { __appRouter: true }), await Promise.all([this.pageLoader._isSsg(g2).then((t3) => !!t3 && J({ dataHref: h2?.json ? h2?.dataHref : this.pageLoader.getDataHref({ href: e2, asPath: p2, locale: f2 }), isServerRender: false, parseJSON: true, inflightCache: this.sdc, persistCache: !this.isPreview, isPrefetch: true, unstable_skipClientCache: r2.unstable_skipClientCache || r2.priority && true }).then(() => false).catch(() => false)), this.pageLoader[r2.priority ? "loadPage" : "prefetch"](g2)]);
    }
    async fetchComponent(e2) {
      let t2 = Z({ route: e2, router: this });
      try {
        let r2 = await this.pageLoader.loadPage(e2);
        return t2(), r2;
      } catch (e3) {
        throw t2(), e3;
      }
    }
    _getData(e2) {
      let t2 = false, r2 = () => {
        t2 = true;
      };
      return this.clc = r2, e2().then((e3) => {
        if (r2 === this.clc && (this.clc = null), t2) {
          let e4 = Object.defineProperty(Error("Loading initial props cancelled"), "__NEXT_ERROR_CODE", { value: "E405", enumerable: false, configurable: true });
          throw e4.cancelled = true, e4;
        }
        return e3;
      });
    }
    getInitialProps(e2, t2) {
      let { Component: r2 } = this.components["/_app"], a2 = this._wrapApp(r2);
      return t2.AppTree = a2, (0, g.loadGetInitialProps)(r2, { AppTree: a2, Component: e2, router: this, ctx: t2 });
    }
    get route() {
      return this.state.route;
    }
    get pathname() {
      return this.state.pathname;
    }
    get query() {
      return this.state.query;
    }
    get asPath() {
      return this.state.asPath;
    }
    get locale() {
      return this.state.locale;
    }
    get isFallback() {
      return this.state.isFallback;
    }
    get isPreview() {
      return this.state.isPreview;
    }
  }
}, 702193, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "removePathPrefix", { enumerable: true, get: function() {
    return o;
  } });
  let n = e.r(330280);
  function o(e2, t2) {
    if (!(0, n.pathHasPrefix)(e2, t2)) return e2;
    let r2 = e2.slice(t2.length);
    return r2.startsWith("/") ? r2 : `/${r2}`;
  }
}, 852324, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "getNextPathnameInfo", { enumerable: true, get: function() {
    return s;
  } });
  let n = e.r(548739), o = e.r(702193), i = e.r(330280);
  function s(e2, t2) {
    let { basePath: r2, i18n: a2, trailingSlash: s2 } = t2.nextConfig ?? {}, l = { pathname: e2, trailingSlash: "/" !== e2 ? e2.endsWith("/") : s2 };
    r2 && (0, i.pathHasPrefix)(l.pathname, r2) && (l.pathname = (0, o.removePathPrefix)(l.pathname, r2), l.basePath = r2);
    let u = l.pathname;
    if (l.pathname.startsWith("/_next/data/") && l.pathname.endsWith(".json")) {
      let e3 = l.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
      l.buildId = e3[0], u = "index" !== e3[1] ? `/${e3.slice(1).join("/")}` : "/", true === t2.parseData && (l.pathname = u);
    }
    if (a2) {
      let e3 = t2.i18nProvider ? t2.i18nProvider.analyze(l.pathname) : (0, n.normalizeLocalePath)(l.pathname, a2.locales);
      l.locale = e3.detectedLocale, l.pathname = e3.pathname ?? l.pathname, !e3.detectedLocale && l.buildId && (e3 = t2.i18nProvider ? t2.i18nProvider.analyze(u) : (0, n.normalizeLocalePath)(u, a2.locales)).detectedLocale && (l.locale = e3.detectedLocale);
    }
    return l;
  }
}, 672219, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { getSortedRouteObjects: function() {
    return l;
  }, getSortedRoutes: function() {
    return s;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  class i {
    insert(e2) {
      this._insert(e2.split("/").filter(Boolean), [], false);
    }
    smoosh() {
      return this._smoosh();
    }
    _smoosh(e2 = "/") {
      let t2 = [...this.children.keys()].sort();
      null !== this.slugName && t2.splice(t2.indexOf("[]"), 1), null !== this.restSlugName && t2.splice(t2.indexOf("[...]"), 1), null !== this.optionalRestSlugName && t2.splice(t2.indexOf("[[...]]"), 1);
      let r2 = t2.map((t3) => this.children.get(t3)._smoosh(`${e2}${t3}/`)).reduce((e3, t3) => [...e3, ...t3], []);
      if (null !== this.slugName && r2.push(...this.children.get("[]")._smoosh(`${e2}[${this.slugName}]/`)), !this.placeholder) {
        let t3 = "/" === e2 ? "/" : e2.slice(0, -1);
        if (null != this.optionalRestSlugName) throw Object.defineProperty(Error(`You cannot define a route with the same specificity as a optional catch-all route ("${t3}" and "${t3}[[...${this.optionalRestSlugName}]]").`), "__NEXT_ERROR_CODE", { value: "E458", enumerable: false, configurable: true });
        r2.unshift(t3);
      }
      return null !== this.restSlugName && r2.push(...this.children.get("[...]")._smoosh(`${e2}[...${this.restSlugName}]/`)), null !== this.optionalRestSlugName && r2.push(...this.children.get("[[...]]")._smoosh(`${e2}[[...${this.optionalRestSlugName}]]/`)), r2;
    }
    _insert(e2, t2, r2) {
      if (0 === e2.length) {
        this.placeholder = false;
        return;
      }
      if (r2) throw Object.defineProperty(Error("Catch-all must be the last part of the URL."), "__NEXT_ERROR_CODE", { value: "E392", enumerable: false, configurable: true });
      let a2 = e2[0];
      if (a2.startsWith("[") && a2.endsWith("]")) {
        let n2 = function(e3, r3) {
          if (null !== e3 && e3 !== r3) throw Object.defineProperty(Error(`You cannot use different slug names for the same dynamic path ('${e3}' !== '${r3}').`), "__NEXT_ERROR_CODE", { value: "E337", enumerable: false, configurable: true });
          t2.forEach((e4) => {
            if (e4 === r3) throw Object.defineProperty(Error(`You cannot have the same slug name "${r3}" repeat within a single dynamic path`), "__NEXT_ERROR_CODE", { value: "E247", enumerable: false, configurable: true });
            if (e4.replace(/\W/g, "") === a2.replace(/\W/g, "")) throw Object.defineProperty(Error(`You cannot have the slug names "${e4}" and "${r3}" differ only by non-word symbols within a single dynamic path`), "__NEXT_ERROR_CODE", { value: "E499", enumerable: false, configurable: true });
          }), t2.push(r3);
        };
        let o2 = a2.slice(1, -1), i2 = false;
        if (o2.startsWith("[") && o2.endsWith("]") && (o2 = o2.slice(1, -1), i2 = true), o2.startsWith("\u2026")) throw Object.defineProperty(Error(`Detected a three-dot character ('\u2026') at ('${o2}'). Did you mean ('...')?`), "__NEXT_ERROR_CODE", { value: "E147", enumerable: false, configurable: true });
        if (o2.startsWith("...") && (o2 = o2.substring(3), r2 = true), o2.startsWith("[") || o2.endsWith("]")) throw Object.defineProperty(Error(`Segment names may not start or end with extra brackets ('${o2}').`), "__NEXT_ERROR_CODE", { value: "E421", enumerable: false, configurable: true });
        if (o2.startsWith(".")) throw Object.defineProperty(Error(`Segment names may not start with erroneous periods ('${o2}').`), "__NEXT_ERROR_CODE", { value: "E288", enumerable: false, configurable: true });
        if (r2) if (i2) {
          if (null != this.restSlugName) throw Object.defineProperty(Error(`You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${e2[0]}" ).`), "__NEXT_ERROR_CODE", { value: "E299", enumerable: false, configurable: true });
          n2(this.optionalRestSlugName, o2), this.optionalRestSlugName = o2, a2 = "[[...]]";
        } else {
          if (null != this.optionalRestSlugName) throw Object.defineProperty(Error(`You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${e2[0]}").`), "__NEXT_ERROR_CODE", { value: "E300", enumerable: false, configurable: true });
          n2(this.restSlugName, o2), this.restSlugName = o2, a2 = "[...]";
        }
        else {
          if (i2) throw Object.defineProperty(Error(`Optional route parameters are not yet supported ("${e2[0]}").`), "__NEXT_ERROR_CODE", { value: "E435", enumerable: false, configurable: true });
          n2(this.slugName, o2), this.slugName = o2, a2 = "[]";
        }
      }
      this.children.has(a2) || this.children.set(a2, new i()), this.children.get(a2)._insert(e2.slice(1), t2, r2);
    }
    constructor() {
      this.placeholder = true, this.children = /* @__PURE__ */ new Map(), this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null;
    }
  }
  function s(e2) {
    let t2 = new i();
    return e2.forEach((e3) => t2.insert(e3)), t2.smoosh();
  }
  function l(e2, t2) {
    let r2 = {}, a2 = [];
    for (let n2 = 0; n2 < e2.length; n2++) {
      let o2 = t2(e2[n2]);
      r2[o2] = n2, a2[n2] = o2;
    }
    return s(a2).map((t3) => e2[r2[t3]]);
  }
}, 617742, (e) => {
  "use strict";
  let t, r, a, n, o, i, s, l, u, d, c, p, f, y;
  var h = e.i(541130), g = e.i(609202), _ = e.i(527400), m = e.i(40245);
  try {
    var M = "u" > typeof window ? window : e.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function w(e10, t10, r10 = [t10], a10 = "npm") {
    let n10 = (e10._metadata = e10._metadata || {}).sdk = e10._metadata.sdk || {};
    n10.name || (n10.name = `sentry.javascript.${t10}`, n10.packages = r10.map((e11) => ({ name: `${a10}:@sentry/${e11}`, version: m.SDK_VERSION })), n10.version = m.SDK_VERSION);
  }
  var E = e.i(799458), v = e.i(449499), b = e.i(963695);
  try {
    var S = "u" > typeof window ? window : e.g;
    S._sentryModuleMetadata = S._sentryModuleMetadata || {}, S._sentryModuleMetadata[new S.Error().stack] = Object.assign({}, S._sentryModuleMetadata[new S.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let P = [];
  function T(e10, t10) {
    for (let r10 of t10) r10?.afterAllSetup && r10.afterAllSetup(e10);
  }
  function O(e10, t10, r10) {
    if (r10[t10.name]) {
      b.DEBUG_BUILD && g.debug.log(`Integration skipped because it was already installed: ${t10.name}`);
      return;
    }
    if (r10[t10.name] = t10, P.includes(t10.name) || "function" != typeof t10.setupOnce || (t10.setupOnce(), P.push(t10.name)), t10.setup && "function" == typeof t10.setup && t10.setup(e10), "function" == typeof t10.preprocessEvent) {
      let r11 = t10.preprocessEvent.bind(t10);
      e10.on("preprocessEvent", (t11, a10) => r11(t11, a10, e10));
    }
    if ("function" == typeof t10.processEvent) {
      let r11 = t10.processEvent.bind(t10), a10 = Object.assign((t11, a11) => r11(t11, a11, e10), { id: t10.name });
      e10.addEventProcessor(a10);
    }
    ["processSpan", "processSegmentSpan"].forEach((r11) => {
      let a10 = t10[r11];
      "function" == typeof a10 && e10.on(r11, (r12) => a10.call(t10, r12, e10));
    }), b.DEBUG_BUILD && g.debug.log(`Integration installed: ${t10.name}`);
  }
  try {
    var R = "u" > typeof window ? window : e.g;
    R._sentryModuleMetadata = R._sentryModuleMetadata || {}, R._sentryModuleMetadata[new R.Error().stack] = Object.assign({}, R._sentryModuleMetadata[new R.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function A(e10) {
    let t10 = [];
    e10.message && t10.push(e10.message);
    try {
      let r10 = e10.exception.values[e10.exception.values.length - 1];
      r10?.value && (t10.push(r10.value), r10.type && t10.push(`${r10.type}: ${r10.value}`));
    } catch {
    }
    return t10;
  }
  var x = e.i(645683), k = e.i(969215);
  try {
    var N = "u" > typeof window ? window : e.g;
    N._sentryModuleMetadata = N._sentryModuleMetadata || {}, N._sentryModuleMetadata[new N.Error().stack] = Object.assign({}, N._sentryModuleMetadata[new N.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let j = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, /can't redefine non-configurable property "solana"/, /vv\(\)\.getRestrictions is not a function/, /Can't find variable: _AutofillCallbackHandler/, /Object Not Found Matching Id:\d+, MethodName:simulateEvent/, /^Java exception was raised during method invocation$/];
  function I(e10 = {}, t10 = {}) {
    return { allowUrls: [...e10.allowUrls || [], ...t10.allowUrls || []], denyUrls: [...e10.denyUrls || [], ...t10.denyUrls || []], ignoreErrors: [...e10.ignoreErrors || [], ...t10.ignoreErrors || [], ...e10.disableErrorDefaults ? [] : j], ignoreTransactions: [...e10.ignoreTransactions || [], ...t10.ignoreTransactions || []] };
  }
  function C(e10) {
    try {
      let t10 = [...e10.exception?.values ?? []].reverse().find((e11) => e11.mechanism?.parent_id === void 0 && e11.stacktrace?.frames?.length), r10 = t10?.stacktrace?.frames;
      return r10 ? (function(e11 = []) {
        for (let t11 = e11.length - 1; t11 >= 0; t11--) {
          let r11 = e11[t11];
          if (r11 && "<anonymous>" !== r11.filename && "[native code]" !== r11.filename) return r11.filename || null;
        }
        return null;
      })(r10) : null;
    } catch {
      return b.DEBUG_BUILD && g.debug.error(`Cannot extract url for event ${(0, x.getEventDescription)(e10)}`), null;
    }
  }
  var B = e.i(146569);
  try {
    var L = "u" > typeof window ? window : e.g;
    L._sentryModuleMetadata = L._sentryModuleMetadata || {}, L._sentryModuleMetadata[new L.Error().stack] = Object.assign({}, L._sentryModuleMetadata[new L.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let D = /* @__PURE__ */ new WeakMap();
  var $ = e.i(883937), U = e.i(995218);
  try {
    var K = "u" > typeof window ? window : e.g;
    K._sentryModuleMetadata = K._sentryModuleMetadata || {}, K._sentryModuleMetadata[new K.Error().stack] = Object.assign({}, K._sentryModuleMetadata[new K.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var F = e.i(149863);
  try {
    var H = "u" > typeof window ? window : e.g;
    H._sentryModuleMetadata = H._sentryModuleMetadata || {}, H._sentryModuleMetadata[new H.Error().stack] = Object.assign({}, H._sentryModuleMetadata[new H.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function W(e10, t10) {
    let r10 = (0, F.getFramesFromEvent)(e10), a10 = (0, F.getFramesFromEvent)(t10);
    if (!r10 && !a10) return true;
    if (r10 && !a10 || !r10 && a10 || a10.length !== r10.length) return false;
    for (let e11 = 0; e11 < a10.length; e11++) {
      let t11 = a10[e11], n10 = r10[e11];
      if (t11.filename !== n10.filename || t11.lineno !== n10.lineno || t11.colno !== n10.colno || t11.function !== n10.function) return false;
    }
    return true;
  }
  function G(e10, t10) {
    let r10 = e10.fingerprint, a10 = t10.fingerprint;
    if (!r10 && !a10) return true;
    if (r10 && !a10 || !r10 && a10) return false;
    try {
      return r10.join("") === a10.join("");
    } catch {
      return false;
    }
  }
  function q(e10) {
    return e10.exception?.values?.[0];
  }
  var Y = e.i(166154);
  try {
    var z = "u" > typeof window ? window : e.g;
    z._sentryModuleMetadata = z._sentryModuleMetadata || {}, z._sentryModuleMetadata[new z.Error().stack] = Object.assign({}, z._sentryModuleMetadata[new z.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var X = e.i(592584);
  try {
    var J = "u" > typeof window ? window : e.g;
    J._sentryModuleMetadata = J._sentryModuleMetadata || {}, J._sentryModuleMetadata[new J.Error().stack] = Object.assign({}, J._sentryModuleMetadata[new J.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var V = e.i(264072), Q = e.i(614380);
  e.i(379615);
  var Z = e.i(93949), ee = e.i(909165);
  e.i(205375);
  var et = e.i(766992), er = e.i(735163);
  try {
    var ea = "u" > typeof window ? window : e.g;
    ea._sentryModuleMetadata = ea._sentryModuleMetadata || {}, ea._sentryModuleMetadata[new ea.Error().stack] = Object.assign({}, ea._sentryModuleMetadata[new ea.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var en = e.i(651850);
  try {
    var eo = "u" > typeof window ? window : e.g;
    eo._sentryModuleMetadata = eo._sentryModuleMetadata || {}, eo._sentryModuleMetadata[new eo.Error().stack] = Object.assign({}, eo._sentryModuleMetadata[new eo.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var ei = "u" > typeof window ? window : e.g;
    ei._sentryModuleMetadata = ei._sentryModuleMetadata || {}, ei._sentryModuleMetadata[new ei.Error().stack] = Object.assign({}, ei._sentryModuleMetadata[new ei.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var es = e.i(784076);
  try {
    var el = "u" > typeof window ? window : e.g;
    el._sentryModuleMetadata = el._sentryModuleMetadata || {}, el._sentryModuleMetadata[new el.Error().stack] = Object.assign({}, el._sentryModuleMetadata[new el.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var eu = "u" > typeof window ? window : e.g;
    eu._sentryModuleMetadata = eu._sentryModuleMetadata || {}, eu._sentryModuleMetadata[new eu.Error().stack] = Object.assign({}, eu._sentryModuleMetadata[new eu.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var ed = "u" > typeof window ? window : e.g;
    ed._sentryModuleMetadata = ed._sentryModuleMetadata || {}, ed._sentryModuleMetadata[new ed.Error().stack] = Object.assign({}, ed._sentryModuleMetadata[new ed.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function ec() {
    let e10;
    return "u" > typeof window && (!(!("u" > typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call(void 0 !== h.default ? h.default : 0)) || (e10 = _.GLOBAL_OBJ.process, e10?.type === "renderer"));
  }
  try {
    var ep = "u" > typeof window ? window : e.g;
    ep._sentryModuleMetadata = ep._sentryModuleMetadata || {}, ep._sentryModuleMetadata[new ep.Error().stack] = Object.assign({}, ep._sentryModuleMetadata[new ep.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var ef = "u" > typeof window ? window : e.g;
    ef._sentryModuleMetadata = ef._sentryModuleMetadata || {}, ef._sentryModuleMetadata[new ef.Error().stack] = Object.assign({}, ef._sentryModuleMetadata[new ef.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function ey(e10, t10) {
    var r10, a10, n10, o10, i2;
    let s2, l2, u2 = t10 ?? (i2 = e10, eh().get(i2)) ?? [];
    if (0 === u2.length) return;
    let d2 = e10.getOptions(), c2 = (r10 = d2._metadata, a10 = d2.tunnel, n10 = e10.getDsn(), o10 = e10.getDataCollectionOptions().userInfo, s2 = {}, r10?.sdk && (s2.sdk = { name: r10.sdk.name, version: r10.sdk.version }), a10 && n10 && (s2.dsn = (0, X.dsnToString)(n10)), (0, es.createEnvelope)(s2, [(l2 = o10 ? "auto" : "never", [{ type: "log", item_count: u2.length, content_type: "application/vnd.sentry.items.log+json" }, { version: 2, ...ec() && { ingest_settings: { infer_ip: l2, infer_user_agent: l2 } }, items: u2 }])]));
    eh().set(e10, []), e10.emit("flushLogs"), e10.sendEnvelope(c2);
  }
  function eh() {
    return (0, Z.getGlobalSingleton)("clientToLogBufferMap", () => /* @__PURE__ */ new WeakMap());
  }
  try {
    var eg = "u" > typeof window ? window : e.g;
    eg._sentryModuleMetadata = eg._sentryModuleMetadata || {}, eg._sentryModuleMetadata[new eg.Error().stack] = Object.assign({}, eg._sentryModuleMetadata[new eg.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var e_ = "u" > typeof window ? window : e.g;
    e_._sentryModuleMetadata = e_._sentryModuleMetadata || {}, e_._sentryModuleMetadata[new e_.Error().stack] = Object.assign({}, e_._sentryModuleMetadata[new e_.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function em(e10, t10) {
    var r10, a10, n10, o10, i2;
    let s2, l2, u2 = t10 ?? (i2 = e10, eM().get(i2)) ?? [];
    if (0 === u2.length) return;
    let d2 = e10.getOptions(), c2 = (r10 = d2._metadata, a10 = d2.tunnel, n10 = e10.getDsn(), o10 = e10.getDataCollectionOptions().userInfo, s2 = {}, r10?.sdk && (s2.sdk = { name: r10.sdk.name, version: r10.sdk.version }), a10 && n10 && (s2.dsn = (0, X.dsnToString)(n10)), (0, es.createEnvelope)(s2, [(l2 = o10 ? "auto" : "never", [{ type: "trace_metric", item_count: u2.length, content_type: "application/vnd.sentry.items.trace-metric+json" }, { version: 2, ...ec() && { ingest_settings: { infer_ip: l2, infer_user_agent: l2 } }, items: u2 }])]));
    eM().set(e10, []), e10.emit("flushMetrics"), e10.sendEnvelope(c2);
  }
  function eM() {
    return (0, Z.getGlobalSingleton)("clientToMetricBufferMap", () => /* @__PURE__ */ new WeakMap());
  }
  var ew = e.i(601917), eE = e.i(393968), ev = e.i(479285);
  try {
    var eb = "u" > typeof window ? window : e.g;
    eb._sentryModuleMetadata = eb._sentryModuleMetadata || {}, eb._sentryModuleMetadata[new eb.Error().stack] = Object.assign({}, eb._sentryModuleMetadata[new eb.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var eS = "u" > typeof window ? window : e.g;
    eS._sentryModuleMetadata = eS._sentryModuleMetadata || {}, eS._sentryModuleMetadata[new eS.Error().stack] = Object.assign({}, eS._sentryModuleMetadata[new eS.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var eP = e.i(863491);
  try {
    var eT = "u" > typeof window ? window : e.g;
    eT._sentryModuleMetadata = eT._sentryModuleMetadata || {}, eT._sentryModuleMetadata[new eT.Error().stack] = Object.assign({}, eT._sentryModuleMetadata[new eT.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function eO(e10) {
    return "object" == typeof e10 && "function" == typeof e10.unref && e10.unref(), e10;
  }
  try {
    var eR = "u" > typeof window ? window : e.g;
    eR._sentryModuleMetadata = eR._sentryModuleMetadata || {}, eR._sentryModuleMetadata[new eR.Error().stack] = Object.assign({}, eR._sentryModuleMetadata[new eR.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let eA = /* @__PURE__ */ Symbol.for("SentryBufferFullError");
  function ex(e10 = 100) {
    let t10 = /* @__PURE__ */ new Set();
    return { get $() {
      return Array.from(t10);
    }, add: function(r10) {
      if (!(t10.size < e10)) return (0, eP.rejectedSyncPromise)(eA);
      let a10 = r10();
      return t10.add(a10), a10.then(() => {
        t10.delete(a10);
      }, () => {
        t10.delete(a10);
      }), a10;
    }, drain: function(e11) {
      if (!t10.size) return (0, eP.resolvedSyncPromise)(true);
      let r10 = Promise.allSettled(Array.from(t10)).then(() => true);
      return e11 ? Promise.race([r10, new Promise((t11) => eO(setTimeout(() => t11(false), e11)))]) : r10;
    } };
  }
  var ek = e.i(86065);
  try {
    var eN = "u" > typeof window ? window : e.g;
    eN._sentryModuleMetadata = eN._sentryModuleMetadata || {}, eN._sentryModuleMetadata[new eN.Error().stack] = Object.assign({}, eN._sentryModuleMetadata[new eN.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var ej = "u" > typeof window ? window : e.g;
    ej._sentryModuleMetadata = ej._sentryModuleMetadata || {}, ej._sentryModuleMetadata[new ej.Error().stack] = Object.assign({}, ej._sentryModuleMetadata[new ej.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var eI = "u" > typeof window ? window : e.g;
    eI._sentryModuleMetadata = eI._sentryModuleMetadata || {}, eI._sentryModuleMetadata[new eI.Error().stack] = Object.assign({}, eI._sentryModuleMetadata[new eI.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var eC = e.i(117288), eB = e.i(834140), eL = e.i(740347), eD = e.i(243280);
  try {
    var e$ = "u" > typeof window ? window : e.g;
    e$._sentryModuleMetadata = e$._sentryModuleMetadata || {}, e$._sentryModuleMetadata[new e$.Error().stack] = Object.assign({}, e$._sentryModuleMetadata[new e$.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var eU = "u" > typeof window ? window : e.g;
    eU._sentryModuleMetadata = eU._sentryModuleMetadata || {}, eU._sentryModuleMetadata[new eU.Error().stack] = Object.assign({}, eU._sentryModuleMetadata[new eU.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let eK = ["forwarded", "-ip", "remote-", "via", "-user"];
  try {
    var eF = "u" > typeof window ? window : e.g;
    eF._sentryModuleMetadata = eF._sentryModuleMetadata || {}, eF._sentryModuleMetadata[new eF.Error().stack] = Object.assign({}, eF._sentryModuleMetadata[new eF.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var eH = "u" > typeof window ? window : e.g;
    eH._sentryModuleMetadata = eH._sentryModuleMetadata || {}, eH._sentryModuleMetadata[new eH.Error().stack] = Object.assign({}, eH._sentryModuleMetadata[new eH.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let eW = { userInfo: true, cookies: true, httpHeaders: { request: true, response: true }, httpBodies: ["incomingRequest", "outgoingRequest", "incomingResponse", "outgoingResponse"], urlQueryParams: true, graphQL: { document: true, variables: true }, genAI: { inputs: true, outputs: true }, databaseQueryData: true, stackFrameVariables: true, frameContextLines: 5 };
  try {
    var eG = "u" > typeof window ? window : e.g;
    eG._sentryModuleMetadata = eG._sentryModuleMetadata || {}, eG._sentryModuleMetadata[new eG.Error().stack] = Object.assign({}, eG._sentryModuleMetadata[new eG.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let eq = "Not capturing exception because it's already been captured.", eY = "Discarded session because of missing or non-string release", ez = /* @__PURE__ */ Symbol.for("SentryInternalError"), eX = /* @__PURE__ */ Symbol.for("SentryDoNotSendEventError");
  function eJ(e10) {
    return { message: e10, [ez]: true };
  }
  function eV(e10) {
    return { message: e10, [eX]: true };
  }
  function eQ(e10) {
    return (0, ee.isObjectLike)(e10) && ez in e10;
  }
  function eZ(e10) {
    return (0, ee.isObjectLike)(e10) && eX in e10;
  }
  function e0(e10, t10, r10, a10, n10) {
    let o10, i2 = 0, s2 = false;
    e10.on(r10, () => {
      i2 = 0, clearTimeout(o10), s2 = false;
    }), e10.on(t10, (t11) => {
      if ((i2 += a10(t11)) >= 8e5) n10(e10);
      else if (!s2) {
        let t12 = e10.getOptions()._flushInterval ?? 5e3;
        t12 > 0 && (s2 = true, o10 = eO(setTimeout(() => {
          n10(e10);
        }, t12)));
      }
    }), e10.on("flush", () => {
      n10(e10);
    });
  }
  class e1 {
    constructor(e10) {
      if (this._options = e10, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], this._promiseBuffer = ex(e10.transportOptions?.bufferSize ?? 64), this._dataCollection = (function(e11) {
        let t10 = null != e11.dataCollection ? eW : true === e11.sendDefaultPii ? { userInfo: true, cookies: true, httpHeaders: { request: true, response: true }, httpBodies: ["incomingRequest", "outgoingRequest", "incomingResponse", "outgoingResponse"], urlQueryParams: true, graphQL: { document: true, variables: true }, genAI: { inputs: true, outputs: true }, databaseQueryData: true, stackFrameVariables: true, frameContextLines: 7 } : { userInfo: false, cookies: { deny: eK }, httpHeaders: { request: { deny: eK }, response: { deny: eK } }, httpBodies: [], urlQueryParams: { deny: eK }, graphQL: { document: true, variables: true }, genAI: { inputs: false, outputs: false }, databaseQueryData: false, stackFrameVariables: true, frameContextLines: 7 }, r10 = e11.dataCollection ?? {};
        return { userInfo: r10.userInfo ?? t10.userInfo, cookies: r10.cookies ?? t10.cookies, httpHeaders: { request: r10.httpHeaders?.request ?? t10.httpHeaders.request, response: r10.httpHeaders?.response ?? t10.httpHeaders.response }, httpBodies: r10.httpBodies ?? t10.httpBodies, urlQueryParams: r10.urlQueryParams ?? r10.queryParams ?? t10.urlQueryParams, graphQL: { document: r10.graphQL?.document ?? t10.graphQL.document, variables: r10.graphQL?.variables ?? t10.graphQL.variables }, genAI: { inputs: r10.genAI?.inputs ?? t10.genAI.inputs, outputs: r10.genAI?.outputs ?? t10.genAI.outputs }, databaseQueryData: r10.databaseQueryData ?? t10.databaseQueryData, stackFrameVariables: r10.stackFrameVariables ?? t10.stackFrameVariables, frameContextLines: r10.frameContextLines ?? t10.frameContextLines };
      })(e10), e10.dsn ? this._dsn = (0, X.makeDsn)(e10.dsn) : b.DEBUG_BUILD && g.debug.warn("No DSN provided, client will not send events."), this._dsn) {
        const t10 = (function(e11, t11, r10) {
          let a10, n10, o10;
          return t11 || `${a10 = e11.protocol ? `${e11.protocol}:` : "", n10 = e11.port ? `:${e11.port}` : "", `${a10}//${e11.host}${n10}${e11.path ? `/${e11.path}` : ""}/api/`}${e11.projectId}/envelope/?${o10 = { sentry_version: "7" }, e11.publicKey && (o10.sentry_key = e11.publicKey), r10 && (o10.sentry_client = `${r10.name}/${r10.version}`), new URLSearchParams(o10).toString()}`;
        })(this._dsn, e10.tunnel, e10._metadata ? e10._metadata.sdk : void 0);
        this._transport = e10.transport({ tunnel: this._options.tunnel, recordDroppedEvent: this.recordDroppedEvent.bind(this), ...e10.transportOptions, url: t10 });
      }
      this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs, this._options.enableLogs && e0(this, "afterCaptureLog", "flushLogs", e5, ey), (this._options.enableMetrics ?? this._options._experiments?.enableMetrics ?? true) && e0(this, "afterCaptureMetric", "flushMetrics", e4, em);
    }
    captureException(e10, t10, r10) {
      let a10 = (0, x.uuid4)();
      if ((0, x.checkOrSetAlreadyCaught)(e10)) return b.DEBUG_BUILD && g.debug.log(eq), a10;
      let n10 = { event_id: a10, ...t10 };
      return this._process(() => this.eventFromException(e10, n10).then((e11) => this._captureEvent(e11, n10, r10)).then((e11) => e11), "error"), n10.event_id;
    }
    captureMessage(e10, t10, r10, a10) {
      let n10 = { event_id: (0, x.uuid4)(), ...r10 }, o10 = (0, ee.isParameterizedString)(e10) ? e10 : String(e10), i2 = (0, ee.isPrimitive)(e10), s2 = i2 ? this.eventFromMessage(o10, t10, n10) : this.eventFromException(e10, n10);
      return this._process(() => s2.then((e11) => this._captureEvent(e11, n10, a10)), i2 ? "unknown" : "error"), n10.event_id;
    }
    captureEvent(e10, t10, r10) {
      let a10 = (0, x.uuid4)();
      if (t10?.originalException && (0, x.checkOrSetAlreadyCaught)(t10.originalException)) return b.DEBUG_BUILD && g.debug.log(eq), a10;
      let n10 = { event_id: a10, ...t10 }, o10 = e10.sdkProcessingMetadata || {}, i2 = o10.capturedSpanScope, s2 = o10.capturedSpanIsolationScope, l2 = e2(e10.type);
      return this._process(() => this._captureEvent(e10, n10, i2 || r10, s2), l2), n10.event_id;
    }
    captureSession(e10) {
      this.sendSession(e10), (0, ew.updateSession)(e10, { init: false });
    }
    getDsn() {
      return this._dsn;
    }
    getOptions() {
      return this._options;
    }
    getDataCollectionOptions() {
      return this._dataCollection;
    }
    getSdkMetadata() {
      return this._options._metadata;
    }
    getTransport() {
      return this._transport;
    }
    async flush(e10) {
      let t10 = this._transport;
      if (this.emit("flush"), !t10) return true;
      let r10 = await this._isClientDoneProcessing(e10), a10 = await t10.flush(e10);
      return r10 && a10;
    }
    async close(e10) {
      let t10 = await this.flush(e10);
      return this.getOptions().enabled = false, this.emit("close"), t10;
    }
    getEventProcessors() {
      return this._eventProcessors;
    }
    addEventProcessor(e10) {
      this._eventProcessors.push(e10);
    }
    init() {
      (this._isEnabled() || this._options.integrations.some(({ name: e10 }) => e10.startsWith("Spotlight"))) && this._setupIntegrations();
    }
    getIntegrationByName(e10) {
      return this._integrations[e10];
    }
    getIntegrationNames() {
      return Object.keys(this._integrations);
    }
    addIntegration(e10) {
      let t10 = this._integrations[e10.name];
      !t10 && e10.beforeSetup && e10.beforeSetup(this), O(this, e10, this._integrations), t10 || T(this, [e10]);
    }
    sendEvent(e10, t10 = {}) {
      this.emit("beforeSendEvent", e10, t10);
      let r10 = (function(e11, t11) {
        if ("transaction" !== e11.type || !e11.spans?.length || !e11.sdkProcessingMetadata?.hasGenAiSpans || false === t11.getOptions().streamGenAiSpans || (0, ev.hasSpanStreamingEnabled)(t11)) return;
        let r11 = [], a11 = [];
        for (let t12 of e11.spans) t12.op?.startsWith("gen_ai.") ? r11.push((function(e12) {
          let t13 = { trace_id: e12.trace_id, span_id: e12.span_id, parent_span_id: e12.parent_span_id, name: e12.description || "", start_timestamp: e12.start_timestamp, end_timestamp: e12.timestamp || e12.start_timestamp, status: e12.status && "ok" !== e12.status && "cancelled" !== e12.status ? "error" : "ok", is_segment: false, attributes: { ...e12.data }, links: e12.links };
          return (0, U.streamedSpanJsonToSerializedSpan)(t13);
        })(t12)) : a11.push(t12);
        if (0 === r11.length) return;
        e11.spans = a11;
        let n10 = t11.getDataCollectionOptions().userInfo ? "auto" : "never";
        return [{ type: "span", item_count: r11.length, content_type: "application/vnd.sentry.items.span.v2+json" }, { version: 2, ...ec() && { ingest_settings: { infer_ip: n10, infer_user_agent: n10 } }, items: r11 }];
      })(e10, this), a10 = (0, Q.createEventEnvelope)(e10, this._dsn, this._options._metadata, this._options.tunnel);
      for (let e11 of t10.attachments || []) a10 = (0, es.addItemToEnvelope)(a10, (0, es.createAttachmentEnvelopeItem)(e11));
      r10 && (a10 = (0, es.addItemToEnvelope)(a10, r10)), this.sendEnvelope(a10).then((t11) => this.emit("afterSendEvent", e10, t11));
    }
    sendSession(e10) {
      let { release: t10, environment: r10 = V.DEFAULT_ENVIRONMENT } = this._options;
      if ("aggregates" in e10) {
        let a11 = e10.attrs || {};
        if (!a11.release && !t10) {
          b.DEBUG_BUILD && g.debug.warn(eY);
          return;
        }
        a11.release = a11.release || t10, a11.environment = a11.environment || r10, e10.attrs = a11;
      } else {
        if (!e10.release && !t10) {
          b.DEBUG_BUILD && g.debug.warn(eY);
          return;
        }
        e10.release = e10.release || t10, e10.environment = e10.environment || r10;
      }
      this.emit("beforeSendSession", e10);
      let a10 = (0, Q.createSessionEnvelope)(e10, this._dsn, this._options._metadata, this._options.tunnel);
      this.sendEnvelope(a10);
    }
    recordDroppedEvent(e10, t10, r10 = 1) {
      if (this._options.sendClientReports) {
        let a10 = `${e10}:${t10}`;
        b.DEBUG_BUILD && g.debug.log(`Recording outcome: "${a10}"${r10 > 1 ? ` (${r10} times)` : ""}`), this._outcomes[a10] = (this._outcomes[a10] || 0) + r10;
      }
    }
    on(e10, t10) {
      let r10 = this._hooks[e10] = this._hooks[e10] || /* @__PURE__ */ new Set(), a10 = (...e11) => t10(...e11);
      return r10.add(a10), () => {
        r10.delete(a10);
      };
    }
    emit(e10, ...t10) {
      let r10 = this._hooks[e10];
      r10 && r10.forEach((e11) => e11(...t10));
    }
    async sendEnvelope(e10) {
      if (this.emit("beforeEnvelope", e10), this._isEnabled() && this._transport) try {
        return await this._transport.send(e10);
      } catch (e11) {
        return b.DEBUG_BUILD && g.debug.error("Error while sending envelope:", e11), {};
      }
      return b.DEBUG_BUILD && g.debug.error("Transport disabled"), {};
    }
    registerCleanup(e10) {
    }
    dispose() {
    }
    _setupIntegrations() {
      var e10;
      let t10, { integrations: r10 } = this._options;
      this._integrations = (e10 = this, t10 = {}, r10.forEach((t11) => {
        t11?.beforeSetup && t11.beforeSetup(e10);
      }), r10.forEach((r11) => {
        r11 && O(e10, r11, t10);
      }), t10), T(this, r10);
    }
    _updateSessionFromEvent(e10, t10) {
      let r10 = "fatal" === t10.level, a10 = false, n10 = t10.exception?.values;
      if (n10) {
        for (let e11 of (a10 = true, r10 = false, n10)) if (e11.mechanism?.handled === false) {
          r10 = true;
          break;
        }
      }
      let o10 = "ok" === e10.status;
      (o10 && 0 === e10.errors || o10 && r10) && ((0, ew.updateSession)(e10, { ...r10 && { status: "crashed" }, errors: e10.errors || Number(a10 || r10) }), this.captureSession(e10));
    }
    async _isClientDoneProcessing(e10) {
      let t10 = 0;
      for (; !e10 || t10 < e10; ) {
        if (await new Promise((e11) => setTimeout(e11, 1)), !this._numProcessing) return true;
        t10++;
      }
      return false;
    }
    _isEnabled() {
      return false !== this.getOptions().enabled && void 0 !== this._transport;
    }
    _prepareEvent(e10, t10, r10, a10) {
      let n10 = this.getOptions(), o10 = this.getIntegrationNames();
      return !t10.integrations && o10.length && (t10.integrations = o10), this.emit("preprocessEvent", e10, t10), e10.type || a10.setLastEventId(e10.event_id || t10.event_id), (0, eL.prepareEvent)(n10, e10, t10, r10, this, a10).then((e11) => (null === e11 || (this.emit("postprocessEvent", e11, t10), e11.contexts = { trace: { ...e11.contexts?.trace, ...(0, v.getTraceContextFromScope)(r10) }, ...e11.contexts }, e11.sdkProcessingMetadata = { dynamicSamplingContext: (0, en.getDynamicSamplingContextFromScope)(this, r10), ...e11.sdkProcessingMetadata }), e11));
    }
    _captureEvent(e10, t10 = {}, r10 = (0, v.getCurrentScope)(), a10 = (0, v.getIsolationScope)()) {
      return b.DEBUG_BUILD && e3(e10) && g.debug.log(`Captured error event \`${A(e10)[0] || "<unknown>"}\``), this._processEvent(e10, t10, r10, a10).then((e11) => e11.event_id, (e11) => {
        b.DEBUG_BUILD && (eZ(e11) ? g.debug.log(e11.message) : eQ(e11) ? g.debug.warn(e11.message) : g.debug.warn(e11));
      });
    }
    _processEvent(e10, t10, r10, a10) {
      let n10 = this.getOptions(), { sampleRate: o10 } = n10, i2 = e6(e10), s2 = e3(e10), l2 = e10.type || "error", u2 = `before send for type \`${l2}\``, d2 = void 0 === o10 ? void 0 : (0, eB.parseSampleRate)(o10), c2 = e2(e10.type);
      return this._prepareEvent(e10, t10, r10, a10).then((e11) => {
        if (null === e11) throw this.recordDroppedEvent("event_processor", c2), eV("An event processor returned `null`, will not send event.");
        return t10.data?.__sentry__ === true ? e11 : (function(e12, t11) {
          let r11 = `${t11} must return \`null\` or a valid event.`;
          if ((0, ee.isThenable)(e12)) return e12.then((e13) => {
            if (!(0, ee.isPlainObject)(e13) && null !== e13) throw eJ(r11);
            return e13;
          }, (e13) => {
            throw eJ(`${t11} rejected with ${e13}`);
          });
          if (!(0, ee.isPlainObject)(e12) && null !== e12) throw eJ(r11);
          return e12;
        })((function(e12, t11, r11, a11) {
          let { beforeSend: n11, beforeSendTransaction: o11, ignoreSpans: i3 } = t11, s3 = !(0, eE.isStreamedBeforeSendSpanCallback)(t11.beforeSendSpan) && t11.beforeSendSpan, l3 = r11;
          if (e3(l3) && n11) return n11(l3, a11);
          if (e6(l3)) {
            if (s3 || i3) {
              let t12 = (function(e13) {
                let { trace_id: t13, parent_span_id: r12, span_id: a12, status: n12, origin: o12, data: i4, op: s4 } = e13.contexts?.trace ?? {};
                return { data: i4 ?? {}, description: e13.transaction, op: s4, parent_span_id: r12, span_id: a12 ?? "", start_timestamp: e13.start_timestamp ?? 0, status: n12, timestamp: e13.timestamp, trace_id: t13 ?? "", origin: o12, profile_id: i4?.[$.SEMANTIC_ATTRIBUTE_PROFILE_ID], exclusive_time: i4?.[$.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME], measurements: e13.measurements, is_segment: true };
              })(l3);
              if (i3?.length && (0, eD.shouldIgnoreSpan)({ description: t12.description, op: t12.op, attributes: t12.data }, i3)) return null;
              if (s3) {
                let e13 = s3(t12);
                if (e13) l3 = (0, eC.merge)(r11, { type: "transaction", timestamp: e13.timestamp, start_timestamp: e13.start_timestamp, transaction: e13.description, contexts: { trace: { trace_id: e13.trace_id, span_id: e13.span_id, parent_span_id: e13.parent_span_id, op: e13.op, status: e13.status, origin: e13.origin, data: { ...e13.data, ...e13.profile_id && { [$.SEMANTIC_ATTRIBUTE_PROFILE_ID]: e13.profile_id }, ...e13.exclusive_time && { [$.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: e13.exclusive_time } } } }, measurements: e13.measurements });
                else (0, U.showSpanDropWarning)();
              }
              if (l3.spans) {
                let t13 = [], r12 = l3.spans;
                for (let e13 of r12) {
                  if (i3?.length && (0, eD.shouldIgnoreSpan)({ description: e13.description, op: e13.op, attributes: e13.data }, i3)) {
                    (0, eD.reparentChildSpans)(r12, e13);
                    continue;
                  }
                  if (s3) {
                    let r13 = s3(e13);
                    r13 ? t13.push(r13) : ((0, U.showSpanDropWarning)(), t13.push(e13));
                  } else t13.push(e13);
                }
                let a12 = l3.spans.length - t13.length;
                a12 && e12.recordDroppedEvent("before_send", "span", a12), l3.spans = t13;
              }
            }
            if (o11) {
              if (l3.spans) {
                let e13 = l3.spans.length;
                l3.sdkProcessingMetadata = { ...r11.sdkProcessingMetadata, spanCountBeforeProcessing: e13 };
              }
              return o11(l3, a11);
            }
          }
          return l3;
        })(this, n10, e11, t10), u2);
      }).then((n11) => {
        if (null === n11) {
          if (this.recordDroppedEvent("before_send", c2), i2) {
            let t11 = 1 + (e10.spans || []).length;
            this.recordDroppedEvent("before_send", "span", t11);
          }
          throw eV(`${u2} returned \`null\`, will not send event.`);
        }
        let l3 = r10.getSession() || a10.getSession();
        if (s2 && l3 && this._updateSessionFromEvent(l3, n11), s2 && "number" == typeof d2 && (0, ek.safeMathRandom)() > d2) throw this.recordDroppedEvent("sample_rate", "error"), eV(`Discarding event because it's not included in the random sample (sampling rate = ${o10})`);
        if (i2) {
          let e11 = (n11.sdkProcessingMetadata?.spanCountBeforeProcessing || 0) - (n11.spans ? n11.spans.length : 0);
          e11 > 0 && this.recordDroppedEvent("before_send", "span", e11);
        }
        let p2 = n11.transaction_info;
        return i2 && p2 && n11.transaction !== e10.transaction && (n11.transaction_info = { ...p2, source: "custom" }), this.sendEvent(n11, t10), n11;
      }).then(null, (e11) => {
        if (eZ(e11) || eQ(e11)) throw e11;
        throw this.captureException(e11, { mechanism: { handled: false, type: "internal" }, data: { __sentry__: true }, originalException: e11 }), eJ(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e11}`);
      });
    }
    _process(e10, t10) {
      this._numProcessing++, this._promiseBuffer.add(e10).then((e11) => (this._numProcessing--, e11), (e11) => (this._numProcessing--, e11 === eA && this.recordDroppedEvent("queue_overflow", t10), e11));
    }
    _clearOutcomes() {
      let e10 = this._outcomes;
      return this._outcomes = {}, Object.entries(e10).map(([e11, t10]) => {
        let [r10, a10] = e11.split(":");
        return { reason: r10, category: a10, quantity: t10 };
      });
    }
    _flushOutcomes() {
      var e10;
      let t10;
      b.DEBUG_BUILD && g.debug.log("Flushing outcomes...");
      let r10 = this._clearOutcomes();
      if (0 === r10.length) {
        b.DEBUG_BUILD && g.debug.log("No outcomes to send");
        return;
      }
      if (!this._dsn) {
        b.DEBUG_BUILD && g.debug.log("No dsn provided, will not send outcomes");
        return;
      }
      b.DEBUG_BUILD && g.debug.log("Sending outcomes:", r10);
      let a10 = (e10 = this._options.tunnel && (0, X.dsnToString)(this._dsn), t10 = [{ type: "client_report" }, { timestamp: (0, er.dateTimestampInSeconds)(), discarded_events: r10 }], (0, es.createEnvelope)(e10 ? { dsn: e10 } : {}, [t10]));
      this.sendEnvelope(a10);
    }
  }
  function e2(e10) {
    return "replay_event" === e10 ? "replay" : e10 || "error";
  }
  function e3(e10) {
    return void 0 === e10.type;
  }
  function e6(e10) {
    return "transaction" === e10.type;
  }
  function e4(e10) {
    let t10 = 0;
    return e10.name && (t10 += 2 * e10.name.length), (t10 += 8) + e8(e10.attributes);
  }
  function e5(e10) {
    let t10 = 0;
    return e10.message && (t10 += 2 * e10.message.length), t10 + e8(e10.attributes);
  }
  function e8(e10) {
    if (!e10) return 0;
    let t10 = 0;
    return Object.values(e10).forEach((e11) => {
      Array.isArray(e11) ? t10 += e11.length * e9(e11[0]) : (0, ee.isPrimitive)(e11) ? t10 += e9(e11) : t10 += 100;
    }), t10;
  }
  function e9(e10) {
    return "string" == typeof e10 ? 2 * e10.length : "number" == typeof e10 ? 8 : 4 * ("boolean" == typeof e10);
  }
  try {
    var e7 = "u" > typeof window ? window : e.g;
    e7._sentryModuleMetadata = e7._sentryModuleMetadata || {}, e7._sentryModuleMetadata[new e7.Error().stack] = Object.assign({}, e7._sentryModuleMetadata[new e7.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function te(e10) {
    "aggregates" in e10 ? e10.attrs?.ip_address === void 0 && (e10.attrs = { ...e10.attrs, ip_address: "{{auto}}" }) : void 0 === e10.ipAddress && (e10.ipAddress = "{{auto}}");
  }
  try {
    var tt = "u" > typeof window ? window : e.g;
    tt._sentryModuleMetadata = tt._sentryModuleMetadata || {}, tt._sentryModuleMetadata[new tt.Error().stack] = Object.assign({}, tt._sentryModuleMetadata[new tt.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function tr(e10) {
    return (0, ee.isError)(e10) && "__sentry_fetch_url_host__" in e10 && "string" == typeof e10.__sentry_fetch_url_host__ ? `${e10.message} (${e10.__sentry_fetch_url_host__})` : e10.message;
  }
  try {
    var ta = "u" > typeof window ? window : e.g;
    ta._sentryModuleMetadata = ta._sentryModuleMetadata || {}, ta._sentryModuleMetadata[new ta.Error().stack] = Object.assign({}, ta._sentryModuleMetadata[new ta.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function tn(e10, t10) {
    var r10, a10;
    let n10, o10, i2 = ti(e10, t10), s2 = { type: (r10 = t10, !(n10 = r10?.name) && tl(r10) ? r10.message && Array.isArray(r10.message) && 2 == r10.message.length ? r10.message[0] : "WebAssembly.Exception" : n10), value: (a10 = t10, o10 = a10?.message, tl(a10) ? Array.isArray(a10.message) && 2 == a10.message.length ? a10.message[1] : "wasm exception" : o10 ? o10.error && "string" == typeof o10.error.message ? tr(o10.error) : tr(a10) : "No error message") };
    return i2.length && (s2.stacktrace = { frames: i2 }), void 0 === s2.type && "" === s2.value && (s2.value = "Unrecoverable error caught"), s2;
  }
  function to(e10, t10) {
    return { exception: { values: [tn(e10, t10)] } };
  }
  function ti(e10, t10) {
    var r10, a10;
    let n10 = t10.stacktrace || t10.stack || "", o10 = (r10 = t10) && ts.test(r10.message) ? 1 : 0, i2 = "number" == typeof (a10 = t10).framesToPop ? a10.framesToPop : 0;
    try {
      return e10(n10, o10, i2);
    } catch {
    }
    return [];
  }
  let ts = /Minified React error #\d+;/i;
  function tl(e10) {
    return "u" > typeof WebAssembly && void 0 !== WebAssembly.Exception && e10 instanceof WebAssembly.Exception;
  }
  function tu(e10, t10, r10, a10, n10) {
    let o10;
    if ((0, ee.isErrorEvent)(t10) && t10.error) return to(e10, t10.error);
    if ((0, ee.isDOMError)(t10) || (0, ee.isDOMException)(t10)) {
      if ("stack" in t10) {
        o10 = to(e10, t10);
        let n11 = o10.exception?.values?.[0];
        if (a10 && r10 && n11 && !n11.stacktrace) {
          let t11 = ti(e10, r10);
          t11.length && (n11.stacktrace = { frames: t11 }, (0, x.addExceptionMechanism)(o10, { synthetic: true }));
        }
      } else {
        let n11 = t10.name || ((0, ee.isDOMError)(t10) ? "DOMError" : "DOMException"), i2 = t10.message ? `${n11}: ${t10.message}` : n11;
        o10 = td(e10, i2, r10, a10), (0, x.addExceptionTypeValue)(o10, i2);
      }
      return "code" in t10 && (o10.tags = { ...o10.tags, "DOMException.code": `${t10.code}` }), o10;
    }
    return (0, ee.isError)(t10) ? to(e10, t10) : ((0, ee.isPlainObject)(t10) || (0, ee.isEvent)(t10) ? o10 = (function(e11, t11, r11, a11) {
      let n11 = (0, v.getClient)(), o11 = n11?.getOptions().normalizeDepth, i2 = Object.values(t11).find(ee.isError), s2 = { __serialized__: (0, Y.normalizeToSize)(t11, o11) };
      if (i2) return { exception: { values: [tn(e11, i2)] }, extra: s2 };
      let l2 = { exception: { values: [{ type: (0, ee.isEvent)(t11) ? t11.constructor.name : a11 ? "UnhandledRejection" : "Error", value: (function(e12, { isUnhandledRejection: t12 }) {
        let r12 = (0, B.extractExceptionKeysForMessage)(e12), a12 = t12 ? "promise rejection" : "exception";
        if ((0, ee.isErrorEvent)(e12)) return `Event \`ErrorEvent\` captured as ${a12} with message \`${e12.message}\``;
        if ((0, ee.isEvent)(e12)) {
          let t13 = (function(e13) {
            try {
              let t14 = Object.getPrototypeOf(e13);
              return t14 ? t14.constructor.name : void 0;
            } catch {
            }
          })(e12);
          return `Event \`${t13}\` (type=${e12.type}) captured as ${a12}`;
        }
        return `Object captured as ${a12} with keys: ${r12}`;
      })(t11, { isUnhandledRejection: a11 }) }] }, extra: s2 };
      if (r11) {
        let t12 = ti(e11, r11);
        t12.length && (l2.exception.values[0].stacktrace = { frames: t12 });
      }
      return l2;
    })(e10, t10, r10, n10) : (o10 = td(e10, t10, r10, a10), (0, x.addExceptionTypeValue)(o10, `${t10}`, void 0)), (0, x.addExceptionMechanism)(o10, { synthetic: true }), o10);
  }
  function td(e10, t10, r10, a10) {
    let n10 = {};
    if (a10 && r10) {
      let a11 = ti(e10, r10);
      a11.length && (n10.exception = { values: [{ value: t10, stacktrace: { frames: a11 } }] }), (0, x.addExceptionMechanism)(n10, { synthetic: true });
    }
    if ((0, ee.isParameterizedString)(t10)) {
      let { __sentry_template_string__: e11, __sentry_template_values__: r11 } = t10;
      return n10.logentry = { message: e11, params: r11 }, n10;
    }
    return n10.message = t10, n10;
  }
  try {
    var tc = "u" > typeof window ? window : e.g;
    tc._sentryModuleMetadata = tc._sentryModuleMetadata || {}, tc._sentryModuleMetadata[new tc.Error().stack] = Object.assign({}, tc._sentryModuleMetadata[new tc.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let tp = _.GLOBAL_OBJ;
  function tf() {
    try {
      return tp.document.location.href;
    } catch {
      return "";
    }
  }
  function ty(e10, t10 = 5) {
    if (!tp.HTMLElement) return null;
    let r10 = e10;
    for (let e11 = 0; e11 < t10 && r10; e11++) {
      if (r10 instanceof HTMLElement) {
        if (r10.dataset.sentryComponent) return r10.dataset.sentryComponent;
        if (r10.dataset.sentryElement) return r10.dataset.sentryElement;
      }
      r10 = r10.parentNode;
    }
    return null;
  }
  try {
    var th = "u" > typeof window ? window : e.g;
    th._sentryModuleMetadata = th._sentryModuleMetadata || {}, th._sentryModuleMetadata[new th.Error().stack] = Object.assign({}, th._sentryModuleMetadata[new th.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let tg = _.GLOBAL_OBJ, t_ = 0;
  function tm(e10, t10 = {}) {
    if ("function" != typeof e10) return e10;
    try {
      if (Object.prototype.hasOwnProperty.call(e10, "__sentry_wrapped__")) {
        let t11 = e10.__sentry_wrapped__;
        if ("function" == typeof t11) return t11;
        return e10;
      }
      if ((0, B.getOriginalFunction)(e10)) return e10;
    } catch {
      return e10;
    }
    let r10 = function(...r11) {
      _.GLOBAL_OBJ._sentryWrappedDepth = (_.GLOBAL_OBJ._sentryWrappedDepth || 0) + 1;
      try {
        let a10 = r11.map((e11) => tm(e11, t10));
        return e10.apply(this, a10);
      } catch (e11) {
        throw t_++, setTimeout(() => {
          t_--;
        }), (0, v.withScope)((a10) => {
          a10.addEventProcessor((e12) => (t10.mechanism && ((0, x.addExceptionTypeValue)(e12, void 0, void 0), (0, x.addExceptionMechanism)(e12, t10.mechanism)), e12.extra = { ...e12.extra, arguments: r11 }, e12)), (0, E.captureException)(e11);
        }), e11;
      } finally {
        _.GLOBAL_OBJ._sentryWrappedDepth = (_.GLOBAL_OBJ._sentryWrappedDepth || 0) - 1;
      }
    };
    try {
      for (let t11 in e10) Object.prototype.hasOwnProperty.call(e10, t11) && (r10[t11] = e10[t11]);
    } catch {
    }
    (0, B.markFunctionWrapped)(r10, e10), (0, B.addNonEnumerableProperty)(e10, "__sentry_wrapped__", r10);
    try {
      Object.getOwnPropertyDescriptor(r10, "name").configurable && Object.defineProperty(r10, "name", { get: () => e10.name });
    } catch {
    }
    return r10;
  }
  function tM() {
    let e10 = tf(), { referrer: t10 } = tg.document || {}, { userAgent: r10 } = tg.navigator || {};
    return { url: e10, headers: { ...t10 && { Referer: t10 }, ...r10 && { "User-Agent": r10 } } };
  }
  try {
    var tw = "u" > typeof window ? window : e.g;
    tw._sentryModuleMetadata = tw._sentryModuleMetadata || {}, tw._sentryModuleMetadata[new tw.Error().stack] = Object.assign({}, tw._sentryModuleMetadata[new tw.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  class tE extends e1 {
    constructor(e10) {
      const t10 = (function(e11) {
        return { release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : tg.SENTRY_RELEASE?.id, sendClientReports: true, parentSpanIsAlwaysRootSpan: true, ...e11 };
      })(e10);
      w(t10, "browser", ["browser"], tg.SENTRY_SDK_SOURCE || "npm"), super(t10);
      const { userInfo: r10 } = this.getDataCollectionOptions();
      t10._metadata?.sdk && (t10._metadata.sdk.settings = { infer_ip: r10 ? "auto" : "never", ...t10._metadata.sdk.settings });
      const { sendClientReports: a10 } = this._options;
      tg.document && tg.document.addEventListener("visibilitychange", () => {
        "hidden" === tg.document.visibilityState && (a10 && this._flushOutcomes(), queueMicrotask(() => {
          this.flush();
        }));
      }), r10 && this.on("beforeSendSession", te);
    }
    eventFromException(e10, t10) {
      var r10, a10;
      let n10;
      return r10 = this._options.stackParser, a10 = this._options.attachStacktrace, n10 = tu(r10, e10, t10?.syntheticException || void 0, a10), (0, x.addExceptionMechanism)(n10), n10.level = "error", t10?.event_id && (n10.event_id = t10.event_id), (0, eP.resolvedSyncPromise)(n10);
    }
    eventFromMessage(e10, t10 = "info", r10) {
      return (function(e11, t11, r11 = "info", a10, n10) {
        let o10 = td(e11, t11, a10?.syntheticException || void 0, n10);
        return o10.level = r11, a10?.event_id && (o10.event_id = a10.event_id), (0, eP.resolvedSyncPromise)(o10);
      })(this._options.stackParser, e10, t10, r10, this._options.attachStacktrace);
    }
    _prepareEvent(e10, t10, r10, a10) {
      return e10.platform = e10.platform || "javascript", super._prepareEvent(e10, t10, r10, a10);
    }
  }
  try {
    var tv = "u" > typeof window ? window : e.g;
    tv._sentryModuleMetadata = tv._sentryModuleMetadata || {}, tv._sentryModuleMetadata[new tv.Error().stack] = Object.assign({}, tv._sentryModuleMetadata[new tv.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let tb = {}, tS = {};
  function tP(e10, t10) {
    return tb[e10] = tb[e10] || [], tb[e10].push(t10), () => {
      let r10 = tb[e10];
      if (r10) {
        let e11 = r10.indexOf(t10);
        -1 !== e11 && r10.splice(e11, 1);
      }
    };
  }
  function tT(e10, t10) {
    if (!tS[e10]) {
      tS[e10] = true;
      try {
        t10();
      } catch (t11) {
        b.DEBUG_BUILD && g.debug.error(`Error while instrumenting ${e10}`, t11);
      }
    }
  }
  function tO(e10, t10) {
    let r10 = e10 && tb[e10];
    if (r10) for (let a10 of r10) try {
      a10(t10);
    } catch (t11) {
      b.DEBUG_BUILD && g.debug.error(`Error while triggering instrumentation handler.
Type: ${e10}
Name: ${(0, F.getFunctionName)(a10)}
Error:`, t11);
    }
  }
  try {
    var tR = "u" > typeof window ? window : e.g;
    tR._sentryModuleMetadata = tR._sentryModuleMetadata || {}, tR._sentryModuleMetadata[new tR.Error().stack] = Object.assign({}, tR._sentryModuleMetadata[new tR.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let tA = /* @__PURE__ */ new Set([]), tx = /* @__PURE__ */ new Set();
  function tk() {
    "console" in _.GLOBAL_OBJ && g.CONSOLE_LEVELS.forEach(function(e10) {
      !tx.has(e10) && e10 in _.GLOBAL_OBJ.console && (tx.add(e10), (0, B.fill)(_.GLOBAL_OBJ.console, e10, function(t10) {
        return g.originalConsoleMethods[e10] = t10, function(...t11) {
          let r10 = t11[0], a10 = g.originalConsoleMethods[e10], n10 = tA.size && "string" == typeof r10 && (0, k.stringMatchesSomePattern)(r10, tA);
          n10 || tO("console", { args: t11, level: e10 }), (!n10 || b.DEBUG_BUILD && g.debug.isEnabled()) && a10?.apply(_.GLOBAL_OBJ.console, t11);
        };
      }));
    });
  }
  try {
    var tN = "u" > typeof window ? window : e.g;
    tN._sentryModuleMetadata = tN._sentryModuleMetadata || {}, tN._sentryModuleMetadata[new tN.Error().stack] = Object.assign({}, tN._sentryModuleMetadata[new tN.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let tj = _.GLOBAL_OBJ;
  function tI(e10) {
    return e10 && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e10.toString());
  }
  try {
    var tC = "u" > typeof window ? window : e.g;
    tC._sentryModuleMetadata = tC._sentryModuleMetadata || {}, tC._sentryModuleMetadata[new tC.Error().stack] = Object.assign({}, tC._sentryModuleMetadata[new tC.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function tB(e10, t10) {
    let r10 = "fetch", a10 = tP(r10, e10);
    return tT(r10, () => tL(void 0, t10)), a10;
  }
  function tL(e10, t10 = false) {
    (!t10 || (function() {
      if ("string" == typeof EdgeRuntime) return true;
      if (!(function() {
        if (!("fetch" in tj)) return false;
        try {
          return new Headers(), new Request("data:,"), new Response(), true;
        } catch {
          return false;
        }
      })()) return false;
      if (tI(tj.fetch)) return true;
      let e11 = false, t11 = tj.document;
      if (t11 && "function" == typeof t11.createElement) try {
        let r10 = t11.createElement("iframe");
        r10.hidden = true, t11.head.appendChild(r10), r10.contentWindow?.fetch && (e11 = tI(r10.contentWindow.fetch)), t11.head.removeChild(r10);
      } catch (e12) {
        b.DEBUG_BUILD && g.debug.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e12);
      }
      return e11;
    })()) && (0, B.fill)(_.GLOBAL_OBJ, "fetch", function(t11) {
      return function(...r10) {
        let a10 = Error(), { method: n10, url: o10 } = (function(e11) {
          if (0 === e11.length) return { method: "GET", url: "" };
          if (2 === e11.length) {
            let [t13, r11] = e11;
            return { url: tK(t13), method: tU(r11, "method") ? String(r11.method).toUpperCase() : (0, ee.isRequest)(t13) && tU(t13, "method") ? String(t13.method).toUpperCase() : "GET" };
          }
          let t12 = e11[0];
          return { url: tK(t12), method: tU(t12, "method") ? String(t12.method).toUpperCase() : "GET" };
        })(r10), i2 = { args: r10, fetchData: { method: n10, url: o10 }, startTimestamp: 1e3 * (0, er.timestampInSeconds)(), virtualError: a10, headers: (function(e11) {
          let [t12, r11] = e11;
          try {
            if ("object" == typeof r11 && null !== r11 && "headers" in r11 && r11.headers) return new Headers(r11.headers);
            if ((0, ee.isRequest)(t12)) return new Headers(t12.headers);
          } catch {
          }
        })(r10) };
        return e10 || tO("fetch", { ...i2 }), t11.apply(_.GLOBAL_OBJ, r10).then(async (t12) => (e10 ? e10(t12) : tO("fetch", { ...i2, endTimestamp: 1e3 * (0, er.timestampInSeconds)(), response: t12 }), t12), (e11) => {
          tO("fetch", { ...i2, endTimestamp: 1e3 * (0, er.timestampInSeconds)(), error: e11 }), (0, ee.isError)(e11) && void 0 === e11.stack && (e11.stack = a10.stack, (0, B.addNonEnumerableProperty)(e11, "framesToPop", 1));
          let t12 = (0, v.getClient)(), r11 = t12?.getOptions().enhanceFetchErrorMessages ?? "always";
          if (false !== r11 && (0, ee.isError)(e11) && "TypeError" === e11.name && ("Failed to fetch" === e11.message || "Load failed" === e11.message || "NetworkError when attempting to fetch resource." === e11.message)) try {
            let t13 = new URL(i2.fetchData.url).host;
            "always" === r11 ? e11.message = `${e11.message} (${t13})` : (0, B.addNonEnumerableProperty)(e11, "__sentry_fetch_url_host__", t13);
          } catch {
          }
          throw e11;
        });
      };
    });
  }
  async function tD(e10, t10) {
    if (e10?.body) {
      let r10 = e10.body, a10 = r10.getReader(), n10 = setTimeout(() => {
        r10.cancel().then(null, () => {
        });
      }, 9e4), o10 = true;
      for (; o10; ) {
        let e11;
        try {
          e11 = setTimeout(() => {
            r10.cancel().then(null, () => {
            });
          }, 5e3);
          let { done: n11 } = await a10.read();
          clearTimeout(e11), n11 && (t10(), o10 = false);
        } catch {
          o10 = false;
        } finally {
          clearTimeout(e11);
        }
      }
      clearTimeout(n10), a10.releaseLock(), r10.cancel().then(null, () => {
      });
    }
  }
  function t$(e10) {
    let t10;
    try {
      t10 = e10.clone();
    } catch {
      return;
    }
    tD(t10, () => {
      tO("fetch-body-resolved", { endTimestamp: 1e3 * (0, er.timestampInSeconds)(), response: e10 });
    });
  }
  function tU(e10, t10) {
    return (0, ee.isObjectLike)(e10) && !!e10[t10];
  }
  function tK(e10) {
    return "string" == typeof e10 ? e10 : e10 ? tU(e10, "url") ? e10.url : e10.toString ? e10.toString() : "" : "";
  }
  try {
    var tF = "u" > typeof window ? window : e.g;
    tF._sentryModuleMetadata = tF._sentryModuleMetadata || {}, tF._sentryModuleMetadata[new tF.Error().stack] = Object.assign({}, tF._sentryModuleMetadata[new tF.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var tH = "u" > typeof window ? window : e.g;
    tH._sentryModuleMetadata = tH._sentryModuleMetadata || {}, tH._sentryModuleMetadata[new tH.Error().stack] = Object.assign({}, tH._sentryModuleMetadata[new tH.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function tW(e10, t10) {
    let r10 = (0, v.getClient)(), a10 = (0, v.getIsolationScope)();
    if (!r10) return;
    let { beforeBreadcrumb: n10 = null, maxBreadcrumbs: o10 = 100 } = r10.getOptions();
    if (o10 <= 0) return;
    let i2 = { timestamp: (0, er.dateTimestampInSeconds)(), ...e10 }, s2 = n10 ? (0, g.consoleSandbox)(() => n10(i2, t10)) : i2;
    null !== s2 && (r10.emit && r10.emit("beforeAddBreadcrumb", s2, t10), a10.addBreadcrumb(s2, o10));
  }
  try {
    var tG = "u" > typeof window ? window : e.g;
    tG._sentryModuleMetadata = tG._sentryModuleMetadata || {}, tG._sentryModuleMetadata[new tG.Error().stack] = Object.assign({}, tG._sentryModuleMetadata[new tG.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function tq(e10) {
    if (void 0 !== e10) return e10 >= 400 && e10 < 500 ? "warning" : e10 >= 500 ? "error" : void 0;
  }
  try {
    var tY = "u" > typeof window ? window : e.g;
    tY._sentryModuleMetadata = tY._sentryModuleMetadata || {}, tY._sentryModuleMetadata[new tY.Error().stack] = Object.assign({}, tY._sentryModuleMetadata[new tY.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let tz = "http.url", tX = "sentry.segment.name", tJ = "sentry.transaction", tV = "url.full", tQ = "url.path", tZ = "url.template";
  try {
    var t0 = "u" > typeof window ? window : e.g;
    t0._sentryModuleMetadata = t0._sentryModuleMetadata || {}, t0._sentryModuleMetadata[new t0.Error().stack] = Object.assign({}, t0._sentryModuleMetadata[new t0.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function t1(e10) {
    return "isRelative" in e10;
  }
  function t2(e10, t10) {
    let r10 = 0 >= e10.indexOf("://") && 0 !== e10.indexOf("//"), a10 = t10 ?? (r10 ? "thismessage:/" : void 0);
    try {
      if ("canParse" in URL && !URL.canParse(e10, a10)) return;
      let t11 = new URL(e10, a10);
      if (r10) return { isRelative: r10, pathname: t11.pathname, search: t11.search, hash: t11.hash };
      return t11;
    } catch {
    }
  }
  function t3(e10) {
    if (t1(e10)) return e10.pathname;
    let t10 = new URL(e10);
    return t10.search = "", t10.hash = "", ["80", "443"].includes(t10.port) && (t10.port = ""), t10.password && (t10.password = "%filtered%"), t10.username && (t10.username = "%filtered%"), t10.toString();
  }
  function t6(e10) {
    if (!e10) return {};
    let t10 = e10.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t10) return {};
    let r10 = t10[6] || "", a10 = t10[8] || "";
    return { host: t10[4], path: t10[5], protocol: t10[2], search: r10, hash: a10, relative: t10[5] + r10 + a10 };
  }
  function t4(e10) {
    return e10.split(/[?#]/, 1)[0];
  }
  function t5(e10, t10 = true) {
    if (e10.startsWith("data:")) {
      let r10 = e10.match(/^data:([^;,]+)/), a10 = r10 ? r10[1] : "text/plain", n10 = e10.includes(";base64,"), o10 = e10.indexOf(","), i2 = "";
      if (t10 && -1 !== o10) {
        let t11 = e10.slice(o10 + 1);
        i2 = t11.length > 10 ? `${t11.slice(0, 10)}... [truncated]` : t11;
      }
      return `data:${a10}${n10 ? ",base64" : ""}${i2 ? `,${i2}` : ""}`;
    }
    return e10;
  }
  try {
    var t8 = "u" > typeof window ? window : e.g;
    t8._sentryModuleMetadata = t8._sentryModuleMetadata || {}, t8._sentryModuleMetadata[new t8.Error().stack] = Object.assign({}, t8._sentryModuleMetadata[new t8.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let t9 = _.GLOBAL_OBJ;
  try {
    var t7 = "u" > typeof window ? window : e.g;
    t7._sentryModuleMetadata = t7._sentryModuleMetadata || {}, t7._sentryModuleMetadata[new t7.Error().stack] = Object.assign({}, t7._sentryModuleMetadata[new t7.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function re() {
    if (!t9.document) return;
    let e10 = tO.bind(null, "dom"), t10 = rt(e10, true);
    t9.document.addEventListener("click", t10, false), t9.document.addEventListener("keypress", t10, false), ["EventTarget", "Node"].forEach((t11) => {
      let r10 = t9[t11]?.prototype;
      r10?.hasOwnProperty?.("addEventListener") && ((0, B.fill)(r10, "addEventListener", function(t12) {
        return function(r11, a10, n10) {
          if ("click" === r11 || "keypress" == r11) try {
            let a11 = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}, o10 = a11[r11] = a11[r11] || { refCount: 0 };
            if (!o10.handler) {
              let a12 = rt(e10);
              o10.handler = a12, t12.call(this, r11, a12, n10);
            }
            o10.refCount++;
          } catch {
          }
          return t12.call(this, r11, a10, n10);
        };
      }), (0, B.fill)(r10, "removeEventListener", function(e11) {
        return function(t12, r11, a10) {
          if ("click" === t12 || "keypress" == t12) try {
            let r12 = this.__sentry_instrumentation_handlers__ || {}, n10 = r12[t12];
            n10 && (n10.refCount--, n10.refCount <= 0 && (e11.call(this, t12, n10.handler, a10), n10.handler = void 0, delete r12[t12]), 0 === Object.keys(r12).length && delete this.__sentry_instrumentation_handlers__);
          } catch {
          }
          return e11.call(this, t12, r11, a10);
        };
      }));
    });
  }
  function rt(e10, n10 = false) {
    return (o10) => {
      var i2;
      if (!o10 || o10._sentryCaptured) return;
      let s2 = (function(e11) {
        try {
          return e11.target;
        } catch {
          return null;
        }
      })(o10);
      if (i2 = o10.type, "keypress" === i2 && (!s2?.tagName || "INPUT" !== s2.tagName && "TEXTAREA" !== s2.tagName && !s2.isContentEditable && 1)) return;
      (0, B.addNonEnumerableProperty)(o10, "_sentryCaptured", true), s2 && !s2._sentryId && (0, B.addNonEnumerableProperty)(s2, "_sentryId", (0, x.uuid4)());
      let l2 = "keypress" === o10.type ? "input" : o10.type;
      !(function(e11) {
        if (e11.type !== r) return false;
        try {
          if (!e11.target || e11.target._sentryId !== a) return false;
        } catch {
        }
        return true;
      })(o10) && (e10({ event: o10, name: l2, global: n10 }), r = o10.type, a = s2 ? s2._sentryId : void 0), clearTimeout(t), t = t9.setTimeout(() => {
        a = void 0, r = void 0;
      }, 1e3);
    };
  }
  try {
    var rr = "u" > typeof window ? window : e.g;
    rr._sentryModuleMetadata = rr._sentryModuleMetadata || {}, rr._sentryModuleMetadata[new rr.Error().stack] = Object.assign({}, rr._sentryModuleMetadata[new rr.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ra = "__sentry_xhr_v3__";
  function rn(e10) {
    tP("xhr", e10), tT("xhr", ro);
  }
  function ro() {
    if (!t9.XMLHttpRequest) return;
    let e10 = XMLHttpRequest.prototype;
    e10.open = new Proxy(e10.open, { apply(e11, t10, r10) {
      let a10 = Error(), n10 = 1e3 * (0, er.timestampInSeconds)(), o10 = (0, ee.isString)(r10[0]) ? r10[0].toUpperCase() : void 0, i2 = (function(e12) {
        if ((0, ee.isString)(e12)) return e12;
        try {
          return e12.toString();
        } catch {
        }
      })(r10[1]);
      if (!o10 || !i2) return e11.apply(t10, r10);
      t10[ra] = { method: o10, url: i2, request_headers: {} }, "POST" === o10 && i2.match(/sentry_key/) && (t10.__sentry_own_request__ = true);
      let s2 = () => {
        let e12 = t10[ra];
        if (e12 && 4 === t10.readyState) {
          try {
            e12.status_code = t10.status;
          } catch {
          }
          tO("xhr", { endTimestamp: 1e3 * (0, er.timestampInSeconds)(), startTimestamp: n10, xhr: t10, virtualError: a10 }), t10.removeEventListener("readystatechange", s2);
        }
      };
      return "onreadystatechange" in t10 && "function" == typeof t10.onreadystatechange ? t10.onreadystatechange = new Proxy(t10.onreadystatechange, { apply: (e12, t11, r11) => (s2(), e12.apply(t11, r11)) }) : t10.addEventListener("readystatechange", s2), t10.setRequestHeader = new Proxy(t10.setRequestHeader, { apply(e12, t11, r11) {
        let [a11, n11] = r11, o11 = t11[ra];
        return o11 && (0, ee.isString)(a11) && (0, ee.isString)(n11) && (o11.request_headers[a11.toLowerCase()] = n11), e12.apply(t11, r11);
      } }), e11.apply(t10, r10);
    } }), e10.send = new Proxy(e10.send, { apply(e11, t10, r10) {
      let a10 = t10[ra];
      return a10 && (void 0 !== r10[0] && (a10.body = r10[0]), tO("xhr", { startTimestamp: 1e3 * (0, er.timestampInSeconds)(), xhr: t10 })), e11.apply(t10, r10);
    } });
  }
  try {
    var ri = "u" > typeof window ? window : e.g;
    ri._sentryModuleMetadata = ri._sentryModuleMetadata || {}, ri._sentryModuleMetadata[new ri.Error().stack] = Object.assign({}, ri._sentryModuleMetadata[new ri.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function rs(e10) {
    let t10 = "history";
    tP(t10, e10), tT(t10, rl);
  }
  function rl() {
    function e10(e11) {
      return function(...t10) {
        let r10 = t10.length > 2 ? t10[2] : void 0;
        if (r10) {
          let a10 = n, o10 = (function(e12) {
            try {
              return new URL(e12, t9.location.origin).toString();
            } catch {
              return e12;
            }
          })(String(r10));
          if (n = o10, a10 === o10) return e11.apply(this, t10);
          tO("history", { from: a10, to: o10 });
        }
        return e11.apply(this, t10);
      };
    }
    t9.addEventListener("popstate", () => {
      let e11 = t9.location.href, t10 = n;
      n = e11, t10 === e11 || tO("history", { from: t10, to: e11 });
    }), "history" in tj && tj.history && ((0, B.fill)(t9.history, "pushState", e10), (0, B.fill)(t9.history, "replaceState", e10));
  }
  try {
    var ru = "u" > typeof window ? window : e.g;
    ru._sentryModuleMetadata = ru._sentryModuleMetadata || {}, ru._sentryModuleMetadata[new ru.Error().stack] = Object.assign({}, ru._sentryModuleMetadata[new ru.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let rd = {};
  try {
    "u" > typeof Node && (rd.parentNode = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode").get), "u" > typeof Element && (rd.tagName = Object.getOwnPropertyDescriptor(Element.prototype, "tagName").get, rd.id = Object.getOwnPropertyDescriptor(Element.prototype, "id").get, rd.className = Object.getOwnPropertyDescriptor(Element.prototype, "className").get, rd.getAttribute = Element.prototype.getAttribute), "u" > typeof HTMLElement && (rd.dataset = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "dataset").get);
  } catch {
  }
  function rc(e10, t10, r10) {
    let a10 = rd[t10];
    if (a10) try {
      return a10.call(e10, r10);
    } catch {
    }
    let n10 = e10[t10];
    return "function" == typeof n10 ? n10.call(e10, r10) : n10;
  }
  function rp(e10, t10 = {}) {
    if (!e10) return "<unknown>";
    try {
      let r10, a10 = e10, n10 = [], o10 = 0, i2 = 0, s2 = Array.isArray(t10) ? t10 : t10.keyAttrs, l2 = !Array.isArray(t10) && t10.maxStringLength || 80;
      for (; a10 && o10++ < 5 && (r10 = (function(e11, t11) {
        let r11 = [], a11 = rc(e11, "tagName");
        if (!a11) return "";
        if ("u" > typeof HTMLElement && e11 instanceof HTMLElement) {
          let t12 = rc(e11, "dataset");
          if (t12) {
            if (t12.sentryComponent) return t12.sentryComponent;
            if (t12.sentryElement) return t12.sentryElement;
          }
        }
        r11.push(a11.toLowerCase());
        let n11 = t11?.length ? t11.filter((t12) => rc(e11, "getAttribute", t12)).map((t12) => [t12, rc(e11, "getAttribute", t12)]) : null;
        if (n11?.length) n11.forEach((e12) => {
          r11.push(`[${e12[0]}="${e12[1]}"]`);
        });
        else {
          let t12 = rc(e11, "id");
          t12 && r11.push(`#${t12}`);
          let a12 = rc(e11, "className");
          if (a12 && (0, ee.isString)(a12)) for (let e12 of a12.split(/\s+/)) r11.push(`.${e12}`);
        }
        for (let t12 of ["aria-label", "type", "name", "title", "alt"]) {
          let a12 = rc(e11, "getAttribute", t12);
          a12 && r11.push(`[${t12}="${a12}"]`);
        }
        return r11.join("");
      })(a10, s2), "html" !== r10 && (!(o10 > 1) || !(i2 + 3 * n10.length + r10.length >= l2))); ) n10.push(r10), i2 += r10.length, a10 = rc(a10, "parentNode");
      return n10.reverse().join(" > ");
    } catch {
      return "<unknown>";
    }
  }
  try {
    var rf = "u" > typeof window ? window : e.g;
    rf._sentryModuleMetadata = rf._sentryModuleMetadata || {}, rf._sentryModuleMetadata[new rf.Error().stack] = Object.assign({}, rf._sentryModuleMetadata[new rf.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ry = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
  try {
    var rh = "u" > typeof window ? window : e.g;
    rh._sentryModuleMetadata = rh._sentryModuleMetadata || {}, rh._sentryModuleMetadata[new rh.Error().stack] = Object.assign({}, rh._sentryModuleMetadata[new rh.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var rg = "u" > typeof window ? window : e.g;
    rg._sentryModuleMetadata = rg._sentryModuleMetadata || {}, rg._sentryModuleMetadata[new rg.Error().stack] = Object.assign({}, rg._sentryModuleMetadata[new rg.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let r_ = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");
  function rm(e10) {
    return function(...t10) {
      let r10 = t10[0];
      return t10[0] = tm(r10, { mechanism: { handled: false, type: `auto.browser.browserapierrors.${(0, F.getFunctionName)(e10)}` } }), e10.apply(this, t10);
    };
  }
  function rM(e10) {
    return function(t10) {
      return e10.apply(this, [tm(t10, { mechanism: { data: { handler: (0, F.getFunctionName)(e10) }, handled: false, type: "auto.browser.browserapierrors.requestAnimationFrame" } })]);
    };
  }
  function rw(e10) {
    return function(...t10) {
      let r10 = this;
      return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e11) => {
        e11 in r10 && "function" == typeof r10[e11] && (0, B.fill)(r10, e11, function(t11) {
          let r11 = { mechanism: { data: { handler: (0, F.getFunctionName)(t11) }, handled: false, type: `auto.browser.browserapierrors.xhr.${e11}` } }, a10 = (0, B.getOriginalFunction)(t11);
          return a10 && (r11.mechanism.data.handler = (0, F.getFunctionName)(a10)), tm(t11, r11);
        });
      }), e10.apply(this, t10);
    };
  }
  try {
    var rE = "u" > typeof window ? window : e.g;
    rE._sentryModuleMetadata = rE._sentryModuleMetadata || {}, rE._sentryModuleMetadata[new rE.Error().stack] = Object.assign({}, rE._sentryModuleMetadata[new rE.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function rv(e10, t10, r10) {
    t9.document && t9.addEventListener(e10, t10, r10);
  }
  function rb(e10, t10, r10) {
    t9.document && t9.removeEventListener(e10, t10, r10);
  }
  try {
    var rS = "u" > typeof window ? window : e.g;
    rS._sentryModuleMetadata = rS._sentryModuleMetadata || {}, rS._sentryModuleMetadata[new rS.Error().stack] = Object.assign({}, rS._sentryModuleMetadata[new rS.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let rP = (e10) => {
    let t10 = false;
    return () => {
      t10 || (e10(), t10 = true);
    };
  };
  try {
    var rT = "u" > typeof window ? window : e.g;
    rT._sentryModuleMetadata = rT._sentryModuleMetadata || {}, rT._sentryModuleMetadata[new rT.Error().stack] = Object.assign({}, rT._sentryModuleMetadata[new rT.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let rO = (e10) => {
    let t10 = t9.requestIdleCallback || t9.setTimeout;
    t9.document?.visibilityState === "hidden" ? e10() : (rv("visibilitychange", e10 = rP(e10), { once: true, capture: true }), rv("pagehide", e10, { once: true, capture: true }), t10(() => {
      e10(), rb("visibilitychange", e10, { capture: true }), rb("pagehide", e10, { capture: true });
    }));
  };
  try {
    var rR = "u" > typeof window ? window : e.g;
    rR._sentryModuleMetadata = rR._sentryModuleMetadata || {}, rR._sentryModuleMetadata[new rR.Error().stack] = Object.assign({}, rR._sentryModuleMetadata[new rR.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var rA = e.i(696365);
  try {
    var rx = "u" > typeof window ? window : e.g;
    rx._sentryModuleMetadata = rx._sentryModuleMetadata || {}, rx._sentryModuleMetadata[new rx.Error().stack] = Object.assign({}, rx._sentryModuleMetadata[new rx.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var rk = "u" > typeof window ? window : e.g;
    rk._sentryModuleMetadata = rk._sentryModuleMetadata || {}, rk._sentryModuleMetadata[new rk.Error().stack] = Object.assign({}, rk._sentryModuleMetadata[new rk.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function rN(e10, t10) {
    let r10 = e10.attributes ?? (e10.attributes = {});
    Object.entries(t10).forEach(([e11, t11]) => {
      null == t11 || e11 in r10 || (r10[e11] = t11);
    });
  }
  try {
    var rj = "u" > typeof window ? window : e.g;
    rj._sentryModuleMetadata = rj._sentryModuleMetadata || {}, rj._sentryModuleMetadata[new rj.Error().stack] = Object.assign({}, rj._sentryModuleMetadata[new rj.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function rI() {
    try {
      let e10 = tg.Intl;
      if (!e10) return;
      let t10 = e10.DateTimeFormat().resolvedOptions();
      return { locale: t10.locale, timezone: t10.timeZone, calendar: t10.calendar };
    } catch {
      return;
    }
  }
  try {
    var rC = "u" > typeof window ? window : e.g;
    rC._sentryModuleMetadata = rC._sentryModuleMetadata || {}, rC._sentryModuleMetadata[new rC.Error().stack] = Object.assign({}, rC._sentryModuleMetadata[new rC.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let rB = null;
  function rL(e10) {
    let t10 = "error";
    tP(t10, e10), tT(t10, rD);
  }
  function rD() {
    rB = _.GLOBAL_OBJ.onerror, _.GLOBAL_OBJ.onerror = function(e10, t10, r10, a10, n10) {
      return tO("error", { column: a10, error: n10, line: r10, msg: e10, url: t10 }), !!rB && rB.apply(this, arguments);
    }, _.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
  }
  try {
    var r$ = "u" > typeof window ? window : e.g;
    r$._sentryModuleMetadata = r$._sentryModuleMetadata || {}, r$._sentryModuleMetadata[new r$.Error().stack] = Object.assign({}, r$._sentryModuleMetadata[new r$.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let rU = null;
  function rK(e10) {
    let t10 = "unhandledrejection";
    tP(t10, e10), tT(t10, rF);
  }
  function rF() {
    rU = _.GLOBAL_OBJ.onunhandledrejection, _.GLOBAL_OBJ.onunhandledrejection = function(e10) {
      return tO("unhandledrejection", e10), !rU || rU.apply(this, arguments);
    }, _.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
  }
  try {
    var rH = "u" > typeof window ? window : e.g;
    rH._sentryModuleMetadata = rH._sentryModuleMetadata || {}, rH._sentryModuleMetadata[new rH.Error().stack] = Object.assign({}, rH._sentryModuleMetadata[new rH.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function rW(e10) {
    ry && g.debug.log(`Global Handler attached: ${e10}`);
  }
  function rG() {
    let e10 = (0, v.getClient)();
    return e10?.getOptions() || { stackParser: () => [], attachStacktrace: false };
  }
  try {
    var rq = "u" > typeof window ? window : e.g;
    rq._sentryModuleMetadata = rq._sentryModuleMetadata || {}, rq._sentryModuleMetadata[new rq.Error().stack] = Object.assign({}, rq._sentryModuleMetadata[new rq.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var rY = "u" > typeof window ? window : e.g;
    rY._sentryModuleMetadata = rY._sentryModuleMetadata || {}, rY._sentryModuleMetadata[new rY.Error().stack] = Object.assign({}, rY._sentryModuleMetadata[new rY.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function rz(e10) {
    return Array.isArray(e10.errors);
  }
  function rX(e10, t10, r10) {
    e10.mechanism = { handled: true, type: "auto.core.linked_errors", ...rz(r10) && { is_exception_group: true }, ...e10.mechanism, exception_id: t10 };
  }
  function rJ(e10, t10, r10, a10) {
    e10.mechanism = { handled: true, ...e10.mechanism, type: "chained", source: t10, exception_id: r10, parent_id: a10 };
  }
  try {
    var rV = "u" > typeof window ? window : e.g;
    rV._sentryModuleMetadata = rV._sentryModuleMetadata || {}, rV._sentryModuleMetadata[new rV.Error().stack] = Object.assign({}, rV._sentryModuleMetadata[new rV.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var rQ = "u" > typeof window ? window : e.g;
    rQ._sentryModuleMetadata = rQ._sentryModuleMetadata || {}, rQ._sentryModuleMetadata[new rQ.Error().stack] = Object.assign({}, rQ._sentryModuleMetadata[new rQ.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function rZ(e10, t10, r10, a10) {
    let n10 = { filename: e10, function: "<anonymous>" === t10 ? F.UNKNOWN_FUNCTION : t10, in_app: true };
    return void 0 !== r10 && (n10.lineno = r10), void 0 !== a10 && (n10.colno = a10), n10;
  }
  let r0 = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, r1 = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, r2 = /\((\S*)(?::(\d+))(?::(\d+))\)/, r3 = /at (.+?) ?\(data:(.+?),/, r6 = [30, (e10) => {
    let t10 = e10.match(r3);
    if (t10) return { filename: `<data:${t10[2]}>`, function: t10[1] };
    let r10 = r0.exec(e10);
    if (r10) {
      let [, e11, t11, a11] = r10;
      return rZ(e11, F.UNKNOWN_FUNCTION, +t11, +a11);
    }
    let a10 = r1.exec(e10);
    if (a10) {
      if (a10[2]?.indexOf("eval") === 0) {
        let e12 = r2.exec(a10[2]);
        e12 && (a10[2] = e12[1], a10[3] = e12[2], a10[4] = e12[3]);
      }
      let [e11, t11] = r7(a10[1] || F.UNKNOWN_FUNCTION, a10[2]);
      return rZ(t11, e11, a10[3] ? +a10[3] : void 0, a10[4] ? +a10[4] : void 0);
    }
  }], r4 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, r5 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, r8 = [50, (e10) => {
    let t10 = r4.exec(e10);
    if (t10) {
      if (t10[3] && t10[3].indexOf(" > eval") > -1) {
        let e12 = r5.exec(t10[3]);
        e12 && (t10[1] = t10[1] || "eval", t10[3] = e12[1], t10[4] = e12[2], t10[5] = "");
      }
      let e11 = t10[3], r10 = t10[1] || F.UNKNOWN_FUNCTION;
      return [r10, e11] = r7(r10, e11), rZ(e11, r10, t10[4] ? +t10[4] : void 0, t10[5] ? +t10[5] : void 0);
    }
  }], r9 = (0, F.createStackParser)(r6, r8), r7 = (e10, t10) => {
    let r10 = -1 !== e10.indexOf("safari-extension"), a10 = -1 !== e10.indexOf("safari-web-extension");
    return r10 || a10 ? [-1 !== e10.indexOf("@") ? e10.split("@")[0] : F.UNKNOWN_FUNCTION, r10 ? `safari-extension:${t10}` : `safari-web-extension:${t10}`] : [e10, t10];
  };
  try {
    var ae = "u" > typeof window ? window : e.g;
    ae._sentryModuleMetadata = ae._sentryModuleMetadata || {}, ae._sentryModuleMetadata[new ae.Error().stack] = Object.assign({}, ae._sentryModuleMetadata[new ae.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let at = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
  try {
    var ar = "u" > typeof window ? window : e.g;
    ar._sentryModuleMetadata = ar._sentryModuleMetadata || {}, ar._sentryModuleMetadata[new ar.Error().stack] = Object.assign({}, ar._sentryModuleMetadata[new ar.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let aa = {};
  try {
    var an = "u" > typeof window ? window : e.g;
    an._sentryModuleMetadata = an._sentryModuleMetadata || {}, an._sentryModuleMetadata[new an.Error().stack] = Object.assign({}, an._sentryModuleMetadata[new an.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function ao(e10, t10 = (function(e11) {
    let t11 = aa[e11];
    if (t11) return t11;
    let r10 = t9[e11];
    if (tI(r10)) return aa[e11] = r10.bind(t9);
    let a10 = t9.document;
    if (a10 && "function" == typeof a10.createElement) try {
      let t12 = a10.createElement("iframe");
      t12.hidden = true, a10.head.appendChild(t12);
      let n10 = t12.contentWindow;
      n10?.[e11] && (r10 = n10[e11]), a10.head.removeChild(t12);
    } catch (t12) {
      at && g.debug.warn(`Could not create sandbox iframe for ${e11} check, bailing to window.${e11}: `, t12);
    }
    return r10 ? aa[e11] = r10.bind(t9) : r10;
  })("fetch")) {
    let r10 = 0, a10 = 0;
    async function n10(n11) {
      let o10 = n11.body.length;
      r10 += o10, a10++;
      let i2 = { body: n11.body, method: "POST", referrerPolicy: "strict-origin", headers: e10.headers, keepalive: r10 <= 6e4 && a10 < 15, ...e10.fetchOptions };
      try {
        let r11 = await t10(e10.url, i2);
        return { statusCode: r11.status, headers: { "x-sentry-rate-limits": r11.headers.get("X-Sentry-Rate-Limits"), "retry-after": r11.headers.get("Retry-After") } };
      } catch (e11) {
        throw aa.fetch = void 0, e11;
      } finally {
        r10 -= o10, a10--;
      }
    }
    return (function(e11, t11, r11 = ex(e11.bufferSize || 64)) {
      let a11 = {};
      return { send: function(n11) {
        let o10 = [];
        if ((0, es.forEachEnvelopeItem)(n11, (t12, r12) => {
          let n12 = (0, es.envelopeItemTypeToDataCategory)(r12);
          !(function(e12, t13, r13 = (0, ek.safeDateNow)()) {
            return (e12[t13] || e12.all || 0) > r13;
          })(a11, n12) ? o10.push(t12) : e11.recordDroppedEvent("ratelimit_backoff", n12);
        }), 0 === o10.length) return Promise.resolve({});
        let i2 = (0, es.createEnvelope)(n11[0], o10), s2 = (t12) => {
          if ((0, es.envelopeContainsItemType)(i2, ["client_report"])) {
            b.DEBUG_BUILD && g.debug.warn(`Dropping client report. Will not send outcomes (reason: ${t12}).`);
            return;
          }
          (0, es.forEachEnvelopeItem)(i2, (r12, a12) => {
            e11.recordDroppedEvent(t12, (0, es.envelopeItemTypeToDataCategory)(a12));
          });
        };
        return r11.add(() => t11({ body: (0, es.serializeEnvelope)(i2) }).then((e12) => (413 === e12.statusCode ? (b.DEBUG_BUILD && g.debug.error("Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."), s2("send_error")) : (b.DEBUG_BUILD && void 0 !== e12.statusCode && (e12.statusCode < 200 || e12.statusCode >= 300) && g.debug.warn(`Sentry responded with status code ${e12.statusCode} to sent event.`), a11 = (function(e13, { statusCode: t12, headers: r12 }, a12 = (0, ek.safeDateNow)()) {
          let n12 = { ...e13 }, o11 = r12?.["x-sentry-rate-limits"], i3 = r12?.["retry-after"];
          if (o11) for (let e14 of o11.trim().split(",")) {
            let [t13, r13, , , o12] = e14.split(":", 5), i4 = parseInt(t13, 10), s3 = (isNaN(i4) ? 60 : i4) * 1e3;
            if (r13) for (let e15 of r13.split(";")) "metric_bucket" === e15 ? (!o12 || o12.split(";").includes("custom")) && (n12[e15] = a12 + s3) : n12[e15] = a12 + s3;
            else n12.all = a12 + s3;
          }
          else i3 ? n12.all = a12 + (function(e14, t13 = (0, ek.safeDateNow)()) {
            let r13 = parseInt(`${e14}`, 10);
            if (!isNaN(r13)) return 1e3 * r13;
            let a13 = Date.parse(`${e14}`);
            return isNaN(a13) ? 6e4 : a13 - t13;
          })(i3, a12) : 429 === t12 && (n12.all = a12 + 6e4);
          return n12;
        })(a11, e12)), e12), (e12) => {
          throw s2("network_error"), b.DEBUG_BUILD && g.debug.error("Encountered error running transport request:", e12), e12;
        })).then((e12) => e12, (e12) => {
          if (e12 === eA) return b.DEBUG_BUILD && g.debug.error("Skipped sending event because buffer is full."), s2("queue_overflow"), Promise.resolve({});
          throw e12;
        });
      }, flush: (e12) => r11.drain(e12) };
    })(e10, n10, ex(e10.bufferSize || 40));
  }
  try {
    var ai = "u" > typeof window ? window : e.g;
    ai._sentryModuleMetadata = ai._sentryModuleMetadata || {}, ai._sentryModuleMetadata[new ai.Error().stack] = Object.assign({}, ai._sentryModuleMetadata[new ai.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var as = "u" > typeof window ? window : e.g;
    as._sentryModuleMetadata = as._sentryModuleMetadata || {}, as._sentryModuleMetadata[new as.Error().stack] = Object.assign({}, as._sentryModuleMetadata[new as.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let al = /^HTML(\w*)Element$/;
  function au(e10) {
    if ("u" > typeof window && e10 === window) return "[Window]";
    if ("u" > typeof document && e10 === document) return "[Document]";
    if ((function(e11) {
      if ("u" < typeof Element) return false;
      try {
        return e11 instanceof Element;
      } catch {
        return false;
      }
    })(e10)) {
      let t10, r10 = (t10 = Object.getPrototypeOf(e10), t10?.constructor ? t10.constructor.name : "null prototype");
      if (al.test(r10)) return `[HTMLElement: ${rp(e10)}]`;
    }
  }
  try {
    var ad = "u" > typeof window ? window : e.g;
    ad._sentryModuleMetadata = ad._sentryModuleMetadata || {}, ad._sentryModuleMetadata[new ad.Error().stack] = Object.assign({}, ad._sentryModuleMetadata[new ad.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var ac = "u" > typeof window ? window : e.g;
    ac._sentryModuleMetadata = ac._sentryModuleMetadata || {}, ac._sentryModuleMetadata[new ac.Error().stack] = Object.assign({}, ac._sentryModuleMetadata[new ac.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function ap(e10) {
    let t10;
    return [((e11 = {}) => ({ .../* @__PURE__ */ ((e12 = {}) => {
      let t11;
      return { name: "EventFilters", setup(r10) {
        t11 = I(e12, r10.getOptions());
      }, processEvent: (r10, a10, n10) => (t11 || (t11 = I(e12, n10.getOptions())), !(function(e13, t12) {
        if (e13.type) {
          if ("transaction" === e13.type && (function(e14, t13) {
            if (!t13?.length) return false;
            let r12 = e14.transaction;
            return !!r12 && (0, k.stringMatchesSomePattern)(r12, t13);
          })(e13, t12.ignoreTransactions)) return b.DEBUG_BUILD && g.debug.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0, x.getEventDescription)(e13)}`), true;
        } else {
          var r11, a11, n11;
          if (r11 = e13, a11 = t12.ignoreErrors, a11?.length && A(r11).some((e14) => (0, k.stringMatchesSomePattern)(e14, a11))) return b.DEBUG_BUILD && g.debug.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0, x.getEventDescription)(e13)}`), true;
          if (n11 = e13, n11.exception?.values?.length && !n11.message && !n11.exception.values.some((e14) => e14.stacktrace || e14.type && "Error" !== e14.type || e14.value)) return b.DEBUG_BUILD && g.debug.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0, x.getEventDescription)(e13)}`), true;
          if ((function(e14, t13) {
            if (!t13?.length) return false;
            let r12 = C(e14);
            return !!r12 && (0, k.stringMatchesSomePattern)(r12, t13);
          })(e13, t12.denyUrls)) return b.DEBUG_BUILD && g.debug.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0, x.getEventDescription)(e13)}.
Url: ${C(e13)}`), true;
          if (!(function(e14, t13) {
            if (!t13?.length) return true;
            let r12 = C(e14);
            return !r12 || (0, k.stringMatchesSomePattern)(r12, t13);
          })(e13, t12.allowUrls)) return b.DEBUG_BUILD && g.debug.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0, x.getEventDescription)(e13)}.
Url: ${C(e13)}`), true;
        }
        return false;
      })(r10, t11) ? r10 : null) };
    })(e11), name: "InboundFilters" }))(), { name: "FunctionToString", setupOnce() {
      let e11 = Function.prototype.toString;
      try {
        Function.prototype.toString = function(...t11) {
          let r10, a10 = (0, B.getOriginalFunction)(this);
          try {
            D.has((0, v.getClient)()) && void 0 !== a10 && (r10 = a10);
          } catch {
          }
          return e11.apply(r10 ?? this, t11);
        };
      } catch {
      }
    }, setup(e11) {
      D.set(e11, true);
    } }, { name: "ConversationId", setup(e11) {
      e11.on("spanStart", (e12) => {
        let t11 = (0, v.getCurrentScope)().getScopeData(), r10 = (0, v.getIsolationScope)().getScopeData(), a10 = t11.conversationId || r10.conversationId;
        if (a10) {
          let { op: t12, data: r11, description: n10 } = (0, U.spanToJSON)(e12);
          if (!t12?.startsWith("gen_ai.") && !r11["ai.operationId"] && !n10?.startsWith("ai.")) return;
          e12.setAttribute($.GEN_AI_CONVERSATION_ID_ATTRIBUTE, a10);
        }
      });
    } }, ((e11 = {}) => {
      let t11 = { XMLHttpRequest: true, eventTarget: true, requestAnimationFrame: true, setInterval: true, setTimeout: true, unregisterOriginalCallbacks: false, ...e11 };
      return { name: "BrowserApiErrors", setupOnce() {
        t11.setTimeout && (0, B.fill)(tg, "setTimeout", rm), t11.setInterval && (0, B.fill)(tg, "setInterval", rm), t11.requestAnimationFrame && (0, B.fill)(tg, "requestAnimationFrame", rM), t11.XMLHttpRequest && "XMLHttpRequest" in tg && (0, B.fill)(XMLHttpRequest.prototype, "send", rw);
        let e12 = t11.eventTarget;
        e12 && (Array.isArray(e12) ? e12 : r_).forEach((e13) => {
          var r10, a10;
          let n10;
          return r10 = e13, a10 = t11, n10 = tg[r10]?.prototype, void (n10?.hasOwnProperty?.("addEventListener") && ((0, B.fill)(n10, "addEventListener", function(e14) {
            return function(t12, n11, o10) {
              var i2, s2, l2, u2;
              try {
                i2 = n11, "function" == typeof i2.handleEvent && (n11.handleEvent = tm(n11.handleEvent, { mechanism: { data: { handler: (0, F.getFunctionName)(n11), target: r10 }, handled: false, type: "auto.browser.browserapierrors.handleEvent" } }));
              } catch {
              }
              return a10.unregisterOriginalCallbacks && (s2 = this, l2 = t12, u2 = n11, s2 && "object" == typeof s2 && "removeEventListener" in s2 && "function" == typeof s2.removeEventListener && s2.removeEventListener(l2, u2)), e14.apply(this, [t12, tm(n11, { mechanism: { data: { handler: (0, F.getFunctionName)(n11), target: r10 }, handled: false, type: "auto.browser.browserapierrors.addEventListener" } }), o10]);
            };
          }), (0, B.fill)(n10, "removeEventListener", function(e14) {
            return function(t12, r11, a11) {
              try {
                if (Object.prototype.hasOwnProperty.call(r11, "__sentry_wrapped__")) {
                  let n11 = r11.__sentry_wrapped__;
                  n11 && e14.call(this, t12, n11, a11);
                }
              } catch {
              }
              return e14.call(this, t12, r11, a11);
            };
          })));
        });
      } };
    })(), ((e11 = {}) => {
      let t11 = { console: true, dom: true, fetch: true, history: true, sentry: true, xhr: true, ...e11 };
      return { name: "Breadcrumbs", setup(e12) {
        var r10, a10, n10, o10, i2, s2, l2;
        let u2;
        t11.console && (r10 = e12, tP(u2 = "console", function(e13) {
          var t12;
          if ((0, v.getClient)() !== r10) return;
          let a11 = { category: "console", data: { arguments: e13.args, logger: "console" }, level: "warn" === (t12 = e13.level) ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(t12) ? t12 : "log", message: (0, k.safeJoin)(e13.args, " ") };
          if ("assert" === e13.level) if (false !== e13.args[0]) return;
          else a11.message = `Assertion failed: ${(0, k.safeJoin)(e13.args.slice(1), " ") || "console.assert"}`, a11.data.arguments = e13.args.slice(1);
          tW(a11, { input: e13.args, level: e13.level });
        }), tT(u2, tk)), t11.dom && (tP("dom", (a10 = e12, n10 = t11.dom, function(e13) {
          let t12, r11;
          if ((0, v.getClient)() !== a10) return;
          let o11 = "object" == typeof n10 ? n10.serializeAttribute : void 0, i3 = "object" == typeof n10 && "number" == typeof n10.maxStringLength ? n10.maxStringLength : void 0;
          i3 && i3 > 1024 && (ry && g.debug.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${i3} was configured. Sentry will use 1024 instead.`), i3 = 1024), "string" == typeof o11 && (o11 = [o11]);
          try {
            var s3;
            let a11 = e13.event, n11 = (s3 = a11) && s3.target ? a11.target : a11;
            t12 = rp(n11, { keyAttrs: o11, maxStringLength: i3 }), r11 = ty(n11);
          } catch {
            t12 = "<unknown>";
          }
          if (0 === t12.length) return;
          let l3 = { category: `ui.${e13.name}`, message: t12 };
          r11 && (l3.data = { "ui.component_name": r11 }), tW(l3, { event: e13.event, name: e13.name, global: e13.global });
        })), tT("dom", re)), t11.xhr && rn((o10 = e12, function(e13) {
          if ((0, v.getClient)() !== o10) return;
          let { startTimestamp: t12, endTimestamp: r11 } = e13, a11 = e13.xhr[ra];
          if (!t12 || !r11 || !a11) return;
          let { method: n11, url: i3, status_code: s3, body: l3 } = a11, u3 = { xhr: e13.xhr, input: l3, startTimestamp: t12, endTimestamp: r11 }, d2 = { category: "xhr", data: { method: n11, url: i3, status_code: s3 }, type: "http", level: tq(s3) };
          o10.emit("beforeOutgoingRequestBreadcrumb", d2, u3), tW(d2, u3);
        })), t11.fetch && tB((i2 = e12, function(e13) {
          if ((0, v.getClient)() !== i2) return;
          let { startTimestamp: t12, endTimestamp: r11 } = e13;
          if (r11 && (!e13.fetchData.url.match(/sentry_key/) || "POST" !== e13.fetchData.method)) if (e13.error) {
            let a11 = { data: e13.error, input: e13.args, startTimestamp: t12, endTimestamp: r11 }, n11 = { category: "fetch", data: e13.fetchData, level: "error", type: "http" };
            i2.emit("beforeOutgoingRequestBreadcrumb", n11, a11), tW(n11, a11);
          } else {
            let a11 = e13.response, n11 = { ...e13.fetchData, status_code: a11?.status }, o11 = { input: e13.args, response: a11, startTimestamp: t12, endTimestamp: r11 }, s3 = { category: "fetch", data: n11, type: "http", level: tq(n11.status_code) };
            i2.emit("beforeOutgoingRequestBreadcrumb", s3, o11), tW(s3, o11);
          }
        })), t11.history && rs((s2 = e12, function(e13) {
          if ((0, v.getClient)() !== s2) return;
          let t12 = e13.from, r11 = e13.to, a11 = t6(tg.location.href), n11 = t12 ? t6(t12) : void 0, o11 = t6(r11);
          n11?.path || (n11 = a11), a11.protocol === o11.protocol && a11.host === o11.host && (r11 = o11.relative), a11.protocol === n11.protocol && a11.host === n11.host && (t12 = n11.relative), tW({ category: "navigation", data: { from: t12, to: r11 } });
        })), t11.sentry && e12.on("beforeSendEvent", (l2 = e12, function(e13) {
          (0, v.getClient)() === l2 && tW({ category: `sentry.${"transaction" === e13.type ? "transaction" : "event"}`, event_id: e13.event_id, level: e13.level, message: (0, x.getEventDescription)(e13) }, { event: e13 });
        }));
      } };
    })(), ((e11 = {}) => {
      let t11 = { onerror: true, onunhandledrejection: true, ...e11 };
      return { name: "GlobalHandlers", setupOnce() {
        Error.stackTraceLimit = 50;
      }, setup(e12) {
        var r10, a10;
        t11.onerror && (r10 = e12, rL((e13) => {
          var t12, a11, n10, o10;
          let i2, s2, l2, u2, d2, { stackParser: c2, attachStacktrace: p2 } = rG();
          if ((0, v.getClient)() !== r10 || t_ > 0) return;
          let { msg: f2, url: y2, line: h2, column: g2, error: _2 } = e13, m2 = (t12 = tu(c2, _2 || f2, void 0, p2, false), a11 = y2, n10 = h2, o10 = g2, 0 === (d2 = (u2 = (l2 = (s2 = (i2 = t12.exception = t12.exception || {}).values = i2.values || [])[0] = s2[0] || {}).stacktrace = l2.stacktrace || {}).frames = u2.frames || []).length && d2.push({ colno: o10, lineno: n10, filename: (function(e14) {
            if ((0, ee.isString)(e14) && 0 !== e14.length) return e14.startsWith("data:") ? `<${t5(e14, false)}>` : e14;
          })(a11) ?? tf(), function: F.UNKNOWN_FUNCTION, in_app: true }), t12);
          m2.level = "error", (0, E.captureEvent)(m2, { originalException: _2, mechanism: { handled: false, type: "auto.browser.global_handlers.onerror" } });
        }), rW("onerror")), t11.onunhandledrejection && (a10 = e12, rK((e13) => {
          var t12;
          let { stackParser: r11, attachStacktrace: n10 } = rG();
          if ((0, v.getClient)() !== a10 || t_ > 0) return;
          let o10 = (function(e14) {
            if ((0, ee.isPrimitive)(e14)) return e14;
            try {
              if ("reason" in e14) return e14.reason;
              if ("detail" in e14 && "reason" in e14.detail) return e14.detail.reason;
            } catch {
            }
            return e14;
          })(e13), i2 = (0, ee.isPrimitive)(o10) ? (t12 = o10, { exception: { values: [{ type: "UnhandledRejection", value: `Non-Error promise rejection captured with value: ${String(t12)}` }] } }) : tu(r11, o10, void 0, n10, true);
          i2.level = "error", (0, E.captureEvent)(i2, { originalException: o10, mechanism: { handled: false, type: "auto.browser.global_handlers.onunhandledrejection" } });
        }), rW("onunhandledrejection"));
      } };
    })(), ((e11 = {}) => {
      let t11 = e11.limit || 5, r10 = e11.key || "cause";
      return { name: "LinkedErrors", preprocessEvent(e12, a10, n10) {
        !(function(e13, t12, r11, a11, n11, o10) {
          if (!n11.exception?.values || !o10 || !(0, ee.isError)(o10.originalException)) return;
          let i2 = n11.exception.values.length > 0 ? n11.exception.values[n11.exception.values.length - 1] : void 0;
          i2 && (n11.exception.values = (function e14(t13, r12, a12, n12, o11, i3, s2, l2) {
            if (i3.length >= a12 + 1) return i3;
            let u2 = [...i3];
            if ((0, ee.isError)(n12[o11])) {
              rX(s2, l2, n12);
              let i4 = t13(r12, n12[o11]), d2 = u2.length;
              rJ(i4, o11, d2, l2), u2 = e14(t13, r12, a12, n12[o11], o11, [i4, ...u2], i4, d2);
            }
            return rz(n12) && n12.errors.forEach((i4, d2) => {
              if ((0, ee.isError)(i4)) {
                rX(s2, l2, n12);
                let c2 = t13(r12, i4), p2 = u2.length;
                rJ(c2, `errors[${d2}]`, p2, l2), u2 = e14(t13, r12, a12, i4, o11, [c2, ...u2], c2, p2);
              }
            }), u2;
          })(e13, t12, a11, o10.originalException, r11, n11.exception.values, i2, 0));
        })(tn, n10.getOptions().stackParser, r10, t11, e12, a10);
      } };
    })(), { name: "Dedupe", processEvent(e11) {
      if (e11.type) return e11;
      try {
        var r10, a10, n10, o10, i2, s2;
        let l2, u2, d2, c2;
        if (r10 = e11, (a10 = t10) && (n10 = r10, o10 = a10, l2 = n10.message, u2 = o10.message, (l2 || u2) && (!l2 || u2) && (l2 || !u2) && l2 === u2 && G(n10, o10) && W(n10, o10) && 1 || (i2 = r10, s2 = a10, d2 = q(s2), c2 = q(i2), d2 && c2 && d2.type === c2.type && d2.value === c2.value && G(i2, s2) && W(i2, s2)))) return b.DEBUG_BUILD && g.debug.warn("Event dropped due to being a duplicate of previously captured event."), null;
      } catch {
      }
      return t10 = e11;
    } }, { name: "HttpContext", preprocessEvent(e11) {
      if (!tg.navigator && !tg.location && !tg.document) return;
      let t11 = tM(), r10 = { ...t11.headers, ...e11.request?.headers };
      e11.request = { ...t11, ...e11.request, headers: r10 };
    }, processSegmentSpan(e11) {
      let t11 = e11.attributes?.[$.SEMANTIC_ATTRIBUTE_SENTRY_OP];
      if (!tg.navigator && !tg.location && !tg.document) return;
      let r10 = tM();
      rN(e11, { [tV]: "http.client" !== t11 ? r10.url : void 0, "http.request.header.user_agent": r10.headers["User-Agent"], "http.request.header.referer": r10.headers.Referer });
    } }, { name: "CultureContext", preprocessEvent(e11) {
      let t11 = rI();
      t11 && (e11.contexts = { ...e11.contexts, culture: { ...t11, ...e11.contexts?.culture } });
    }, processSegmentSpan(e11) {
      let t11 = rI();
      t11 && rN(e11, { "culture.locale": t11.locale, "culture.timezone": t11.timezone, "culture.calendar": t11.calendar });
    } }, ((e11 = {}) => {
      let t11 = e11.lifecycle ?? "route";
      return { name: "BrowserSession", setupOnce() {
        if (void 0 === tg.document) {
          ry && g.debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
          return;
        }
        (0, E.startSession)({ ignoreDuration: true });
        let e12 = false;
        rO(() => {
          e12 || ((0, E.captureSession)(), e12 = true);
        });
        let r10 = (0, v.getIsolationScope)(), a10 = r10.getUser();
        r10.addScopeListener((t12) => {
          let r11 = t12.getUser();
          (a10?.id !== r11?.id || a10?.ip_address !== r11?.ip_address) && (a10 = r11, e12 && (0, E.captureSession)());
        }), "route" === t11 && rs(({ from: t12, to: r11 }) => {
          t12 !== r11 && ((0, E.startSession)({ ignoreDuration: true }), (0, E.captureSession)(), e12 = true);
        });
      } };
    })()];
  }
  var af = e.i(856757);
  try {
    var ay = "u" > typeof window ? window : e.g;
    ay._sentryModuleMetadata = ay._sentryModuleMetadata || {}, ay._sentryModuleMetadata[new ay.Error().stack] = Object.assign({}, ay._sentryModuleMetadata[new ay.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var ah = "u" > typeof window ? window : e.g;
    ah._sentryModuleMetadata = ah._sentryModuleMetadata || {}, ah._sentryModuleMetadata[new ah.Error().stack] = Object.assign({}, ah._sentryModuleMetadata[new ah.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function ag(e10) {
    return (0, ee.isPlainObject)(e10) && "nativeEvent" in e10 && "preventDefault" in e10 && "stopPropagation" in e10 ? "[SyntheticEvent]" : au(e10);
  }
  try {
    var a_ = "u" > typeof window ? window : e.g;
    a_._sentryModuleMetadata = a_._sentryModuleMetadata || {}, a_._sentryModuleMetadata[new a_.Error().stack] = Object.assign({}, a_._sentryModuleMetadata[new a_.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let am = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
  try {
    var aM = "u" > typeof window ? window : e.g;
    aM._sentryModuleMetadata = aM._sentryModuleMetadata || {}, aM._sentryModuleMetadata[new aM.Error().stack] = Object.assign({}, aM._sentryModuleMetadata[new aM.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var aw = "u" > typeof window ? window : e.g;
    aw._sentryModuleMetadata = aw._sentryModuleMetadata || {}, aw._sentryModuleMetadata[new aw.Error().stack] = Object.assign({}, aw._sentryModuleMetadata[new aw.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var aE = e.i(206875), av = e.i(523378), ab = e.i(190060), aS = e.i(629217), aP = e.i(501217);
  try {
    var aT = "u" > typeof window ? window : e.g;
    aT._sentryModuleMetadata = aT._sentryModuleMetadata || {}, aT._sentryModuleMetadata[new aT.Error().stack] = Object.assign({}, aT._sentryModuleMetadata[new aT.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let aO = { idleTimeout: 1e3, finalTimeout: 3e4, childSpanTimeout: 15e3 };
  function aR(e10, t10 = {}) {
    var r10;
    let a10, n10, o10 = /* @__PURE__ */ new Map(), i2 = false, s2 = "externalFinish", l2 = !t10.disableAutoFinish, u2 = [], { idleTimeout: d2 = aO.idleTimeout, finalTimeout: c2 = aO.finalTimeout, childSpanTimeout: p2 = aO.childSpanTimeout, beforeSpanEnd: f2, trimIdleSpanEndTimestamp: y2 = true } = t10, h2 = (0, v.getClient)(), _2 = (0, v.getCurrentScope)();
    if (!h2 || !(0, aE.hasSpansEnabled)()) {
      let e11 = new av.SentryNonRecordingSpan({ traceId: _2.getPropagationContext().traceId });
      return (0, rA.setCapturedScopesOnSpan)(e11, _2, (0, v.getIsolationScope)()), e11;
    }
    let m2 = (0, U.getActiveSpan)(), M2 = (r10 = e10, a10 = (0, aP.startInactiveSpan)(r10), (0, et._setSpanForScope)((0, v.getCurrentScope)(), a10), b.DEBUG_BUILD && g.debug.log("[Tracing] Started span is an idle span"), a10);
    function w2() {
      n10 && (clearTimeout(n10), n10 = void 0);
    }
    function E2(e11) {
      w2(), n10 = setTimeout(() => {
        !i2 && 0 === o10.size && l2 && (s2 = "idleTimeout", M2.end(e11));
      }, d2);
    }
    function S2(e11) {
      n10 = setTimeout(() => {
        !i2 && l2 && (s2 = "heartbeatFailed", M2.end(e11));
      }, p2);
    }
    function P2(e11) {
      i2 = true, o10.clear(), u2.forEach((e12) => e12()), (0, et._setSpanForScope)(_2, m2);
      let t11 = (0, U.spanToJSON)(M2), { start_timestamp: r11 } = t11;
      if (!r11) return;
      t11.data[$.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON] || M2.setAttribute($.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, s2);
      let a11 = t11.status;
      a11 && "unknown" !== a11 || M2.setStatus({ code: aS.SPAN_STATUS_OK }), g.debug.log(`[Tracing] Idle span "${t11.op}" finished`);
      let n11 = (0, U.getSpanDescendants)(M2).filter((e12) => e12 !== M2), l3 = 0;
      n11.forEach((t12) => {
        t12.isRecording() && (t12.setStatus({ code: aS.SPAN_STATUS_ERROR, message: "cancelled" }), t12.end(e11), b.DEBUG_BUILD && g.debug.log("[Tracing] Cancelling span since span ended early", JSON.stringify(t12, void 0, 2)));
        let { timestamp: r12 = 0, start_timestamp: a12 = 0 } = (0, U.spanToJSON)(t12), n12 = a12 <= e11, o11 = r12 - a12 <= (c2 + d2) / 1e3;
        if (b.DEBUG_BUILD) {
          let e12 = JSON.stringify(t12, void 0, 2);
          n12 ? o11 || g.debug.log("[Tracing] Discarding span since it finished after idle span final timeout", e12) : g.debug.log("[Tracing] Discarding span since it happened after idle span was finished", e12);
        }
        (!o11 || !n12) && ((0, U.removeChildSpanFromSpan)(M2, t12), l3++);
      }), l3 > 0 && M2.setAttribute("sentry.idle_span_discarded_spans", l3);
    }
    return M2.end = new Proxy(M2.end, { apply(e11, t11, r11) {
      if (f2 && f2(M2), (0, av.spanIsNonRecordingSpan)(t11)) return;
      let [a11, ...n11] = r11, o11 = a11 || (0, er.timestampInSeconds)(), i3 = (0, U.spanTimeInputToSeconds)(o11), s3 = (0, U.getSpanDescendants)(M2).filter((e12) => e12 !== M2), l3 = (0, U.spanToJSON)(M2);
      if (!s3.length || !y2) return P2(i3), Reflect.apply(e11, t11, [i3, ...n11]);
      let u3 = h2.getOptions().ignoreSpans, d3 = s3?.reduce((e12, t12) => {
        let r12 = (0, U.spanToJSON)(t12);
        return !r12.timestamp || u3 && (0, eD.shouldIgnoreSpan)({ description: r12.description, op: r12.op, attributes: r12.data }, u3) ? e12 : e12 ? Math.max(e12, r12.timestamp) : r12.timestamp;
      }, void 0), p3 = l3.start_timestamp, g2 = Math.min(p3 ? p3 + c2 / 1e3 : 1 / 0, Math.max(p3 || -1 / 0, Math.min(i3, d3 || 1 / 0)));
      return P2(g2), Reflect.apply(e11, t11, [g2, ...n11]);
    } }), u2.push(h2.on("spanStart", (e11) => {
      var t11;
      !(i2 || e11 === M2 || (0, U.spanToJSON)(e11).timestamp || e11 instanceof ab.SentrySpan && e11.isStandaloneSpan()) && (0, U.getSpanDescendants)(M2).includes(e11) && (t11 = e11.spanContext().spanId, w2(), o10.set(t11, true), S2((0, er.timestampInSeconds)() + p2 / 1e3));
    })), u2.push(h2.on("spanEnd", (e11) => {
      if (!i2) {
        var t11;
        t11 = e11.spanContext().spanId, o10.has(t11) && o10.delete(t11), 0 === o10.size && E2((0, er.timestampInSeconds)() + d2 / 1e3);
      }
    })), u2.push(h2.on("idleSpanEnableAutoFinish", (e11) => {
      e11 === M2 && (l2 = true, E2(), o10.size && S2());
    })), t10.disableAutoFinish || E2(), setTimeout(() => {
      i2 || (M2.setStatus({ code: aS.SPAN_STATUS_ERROR, message: "deadline_exceeded" }), s2 = "finalTimeout", M2.end());
    }, c2), M2;
  }
  try {
    var aA = "u" > typeof window ? window : e.g;
    aA._sentryModuleMetadata = aA._sentryModuleMetadata || {}, aA._sentryModuleMetadata[new aA.Error().stack] = Object.assign({}, aA._sentryModuleMetadata[new aA.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ax = false;
  var ak = e.i(854863), aN = e.i(398878), aj = e.i(729823);
  try {
    var aI = "u" > typeof window ? window : e.g;
    aI._sentryModuleMetadata = aI._sentryModuleMetadata || {}, aI._sentryModuleMetadata[new aI.Error().stack] = Object.assign({}, aI._sentryModuleMetadata[new aI.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let aC = (e10, t10, r10, a10) => {
    let n10, o10;
    return (i2) => {
      if (t10.value >= 0 && (i2 || a10) && ((o10 = t10.value - (n10 ?? 0)) || void 0 === n10)) {
        var s2;
        n10 = t10.value, t10.delta = o10, s2 = t10.value, t10.rating = s2 > r10[1] ? "poor" : s2 > r10[0] ? "needs-improvement" : "good", e10(t10);
      }
    };
  };
  try {
    var aB = "u" > typeof window ? window : e.g;
    aB._sentryModuleMetadata = aB._sentryModuleMetadata || {}, aB._sentryModuleMetadata[new aB.Error().stack] = Object.assign({}, aB._sentryModuleMetadata[new aB.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let aL = (e10 = true) => {
    let t10 = t9.performance?.getEntriesByType?.("navigation")[0];
    if (!e10 || t10 && t10.responseStart > 0 && t10.responseStart < performance.now()) return t10;
  };
  try {
    var aD = "u" > typeof window ? window : e.g;
    aD._sentryModuleMetadata = aD._sentryModuleMetadata || {}, aD._sentryModuleMetadata[new aD.Error().stack] = Object.assign({}, aD._sentryModuleMetadata[new aD.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let a$ = () => {
    let e10 = aL();
    return e10?.activationStart ?? 0;
  };
  try {
    var aU = "u" > typeof window ? window : e.g;
    aU._sentryModuleMetadata = aU._sentryModuleMetadata || {}, aU._sentryModuleMetadata[new aU.Error().stack] = Object.assign({}, aU._sentryModuleMetadata[new aU.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let aK = -1, aF = /* @__PURE__ */ new Set(), aH = (e10) => {
    if (("pagehide" === e10.type || t9.document?.visibilityState === "hidden") && aK > -1) {
      if ("visibilitychange" === e10.type || "pagehide" === e10.type) for (let e11 of aF) e11();
      isFinite(aK) || (aK = "visibilitychange" === e10.type ? e10.timeStamp : 0, rb("prerenderingchange", aH, true));
    }
  }, aW = () => {
    if (t9.document && aK < 0) {
      let e10 = a$();
      aK = (t9.document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter((t10) => "hidden" === t10.name && t10.startTime > e10)[0]?.startTime) ?? (t9.document?.visibilityState !== "hidden" || t9.document?.prerendering ? 1 / 0 : 0), rv("visibilitychange", aH, true), rv("pagehide", aH, true), rv("prerenderingchange", aH, true);
    }
    return { get firstHiddenTime() {
      return aK;
    }, onHidden(e10) {
      aF.add(e10);
    } };
  };
  try {
    var aG = "u" > typeof window ? window : e.g;
    aG._sentryModuleMetadata = aG._sentryModuleMetadata || {}, aG._sentryModuleMetadata[new aG.Error().stack] = Object.assign({}, aG._sentryModuleMetadata[new aG.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var aq = "u" > typeof window ? window : e.g;
    aq._sentryModuleMetadata = aq._sentryModuleMetadata || {}, aq._sentryModuleMetadata[new aq.Error().stack] = Object.assign({}, aq._sentryModuleMetadata[new aq.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let aY = (e10, t10 = -1) => {
    let r10 = aL(), a10 = "navigate";
    return r10 && (t9.document?.prerendering || a$() > 0 ? a10 = "prerender" : t9.document?.wasDiscarded ? a10 = "restore" : r10.type && (a10 = r10.type.replace(/_/g, "-"))), { name: e10, value: t10, rating: "good", delta: 0, entries: [], id: `v5-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`, navigationType: a10 };
  };
  try {
    var az = "u" > typeof window ? window : e.g;
    az._sentryModuleMetadata = az._sentryModuleMetadata || {}, az._sentryModuleMetadata[new az.Error().stack] = Object.assign({}, az._sentryModuleMetadata[new az.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let aX = /* @__PURE__ */ new WeakMap();
  function aJ(e10, t10) {
    try {
      return aX.get(e10) || aX.set(e10, new t10()), aX.get(e10);
    } catch (e11) {
      return new t10();
    }
  }
  try {
    var aV = "u" > typeof window ? window : e.g;
    aV._sentryModuleMetadata = aV._sentryModuleMetadata || {}, aV._sentryModuleMetadata[new aV.Error().stack] = Object.assign({}, aV._sentryModuleMetadata[new aV.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  class aQ {
    constructor() {
      this._sessionValue = 0, this._sessionEntries = [];
    }
    _processEntry(e10) {
      if (e10.hadRecentInput) return;
      let t10 = this._sessionEntries[0], r10 = this._sessionEntries[this._sessionEntries.length - 1];
      this._sessionValue && t10 && r10 && e10.startTime - r10.startTime < 1e3 && e10.startTime - t10.startTime < 5e3 ? (this._sessionValue += e10.value, this._sessionEntries.push(e10)) : (this._sessionValue = e10.value, this._sessionEntries = [e10]), this._onAfterProcessingUnexpectedShift?.(e10);
    }
  }
  try {
    var aZ = "u" > typeof window ? window : e.g;
    aZ._sentryModuleMetadata = aZ._sentryModuleMetadata || {}, aZ._sentryModuleMetadata[new aZ.Error().stack] = Object.assign({}, aZ._sentryModuleMetadata[new aZ.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let a0 = (e10, t10, r10 = {}) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e10)) {
        let a10 = new PerformanceObserver((e11) => {
          Promise.resolve().then(() => {
            t10(e11.getEntries());
          });
        });
        return a10.observe({ type: e10, buffered: true, ...r10 }), a10;
      }
    } catch {
    }
  };
  try {
    var a1 = "u" > typeof window ? window : e.g;
    a1._sentryModuleMetadata = a1._sentryModuleMetadata || {}, a1._sentryModuleMetadata[new a1.Error().stack] = Object.assign({}, a1._sentryModuleMetadata[new a1.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let a2 = (e10) => {
    t9.document?.prerendering ? addEventListener("prerenderingchange", () => e10(), true) : e10();
  };
  try {
    var a3 = "u" > typeof window ? window : e.g;
    a3._sentryModuleMetadata = a3._sentryModuleMetadata || {}, a3._sentryModuleMetadata[new a3.Error().stack] = Object.assign({}, a3._sentryModuleMetadata[new a3.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let a6 = [1800, 3e3];
  try {
    var a4 = "u" > typeof window ? window : e.g;
    a4._sentryModuleMetadata = a4._sentryModuleMetadata || {}, a4._sentryModuleMetadata[new a4.Error().stack] = Object.assign({}, a4._sentryModuleMetadata[new a4.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let a5 = [0.1, 0.25];
  try {
    var a8 = "u" > typeof window ? window : e.g;
    a8._sentryModuleMetadata = a8._sentryModuleMetadata || {}, a8._sentryModuleMetadata[new a8.Error().stack] = Object.assign({}, a8._sentryModuleMetadata[new a8.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let a9 = 0, a7 = 1 / 0, ne = 0, nt = (e10) => {
    e10.forEach((e11) => {
      e11.interactionId && (a7 = Math.min(a7, e11.interactionId), a9 = (ne = Math.max(ne, e11.interactionId)) ? (ne - a7) / 7 + 1 : 0);
    });
  }, nr = () => o ? a9 : performance.interactionCount || 0;
  try {
    var na = "u" > typeof window ? window : e.g;
    na._sentryModuleMetadata = na._sentryModuleMetadata || {}, na._sentryModuleMetadata[new na.Error().stack] = Object.assign({}, na._sentryModuleMetadata[new na.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let nn = 0;
  class no {
    constructor() {
      this._longestInteractionList = [], this._longestInteractionMap = /* @__PURE__ */ new Map();
    }
    _resetInteractions() {
      nn = nr(), this._longestInteractionList.length = 0, this._longestInteractionMap.clear();
    }
    _estimateP98LongestInteraction() {
      let e10 = Math.min(this._longestInteractionList.length - 1, Math.floor((nr() - nn) / 50));
      return this._longestInteractionList[e10];
    }
    _processEntry(e10) {
      if (this._onBeforeProcessingEntry?.(e10), !(e10.interactionId || "first-input" === e10.entryType)) return;
      let t10 = this._longestInteractionList.at(-1), r10 = this._longestInteractionMap.get(e10.interactionId);
      if (r10 || this._longestInteractionList.length < 10 || e10.duration > t10._latency) {
        if (r10 ? e10.duration > r10._latency ? (r10.entries = [e10], r10._latency = e10.duration) : e10.duration === r10._latency && e10.startTime === r10.entries[0].startTime && r10.entries.push(e10) : (r10 = { id: e10.interactionId, entries: [e10], _latency: e10.duration }, this._longestInteractionMap.set(r10.id, r10), this._longestInteractionList.push(r10)), this._longestInteractionList.sort((e11, t11) => t11._latency - e11._latency), this._longestInteractionList.length > 10) for (let e11 of this._longestInteractionList.splice(10)) this._longestInteractionMap.delete(e11.id);
        this._onAfterProcessingINPCandidate?.(r10);
      }
    }
  }
  try {
    var ni = "u" > typeof window ? window : e.g;
    ni._sentryModuleMetadata = ni._sentryModuleMetadata || {}, ni._sentryModuleMetadata[new ni.Error().stack] = Object.assign({}, ni._sentryModuleMetadata[new ni.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ns = [200, 500];
  try {
    var nl = "u" > typeof window ? window : e.g;
    nl._sentryModuleMetadata = nl._sentryModuleMetadata || {}, nl._sentryModuleMetadata[new nl.Error().stack] = Object.assign({}, nl._sentryModuleMetadata[new nl.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  class nu {
    _processEntry(e10) {
      this._onBeforeProcessingEntry?.(e10);
    }
  }
  try {
    var nd = "u" > typeof window ? window : e.g;
    nd._sentryModuleMetadata = nd._sentryModuleMetadata || {}, nd._sentryModuleMetadata[new nd.Error().stack] = Object.assign({}, nd._sentryModuleMetadata[new nd.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let nc = [2500, 4e3];
  try {
    var np = "u" > typeof window ? window : e.g;
    np._sentryModuleMetadata = np._sentryModuleMetadata || {}, np._sentryModuleMetadata[new np.Error().stack] = Object.assign({}, np._sentryModuleMetadata[new np.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let nf = [800, 1800], ny = (e10) => {
    t9.document?.prerendering ? a2(() => ny(e10)) : t9.document?.readyState !== "complete" ? addEventListener("load", () => ny(e10), true) : setTimeout(e10);
  };
  try {
    var nh = "u" > typeof window ? window : e.g;
    nh._sentryModuleMetadata = nh._sentryModuleMetadata || {}, nh._sentryModuleMetadata[new nh.Error().stack] = Object.assign({}, nh._sentryModuleMetadata[new nh.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ng = {}, n_ = {};
  function nm(e10, t10 = false) {
    return nO("cls", e10, nb, i, t10);
  }
  function nM(e10, t10 = false) {
    return nO("lcp", e10, nS, s, t10);
  }
  function nw(e10) {
    return nO("inp", e10, nT, u);
  }
  function nE(e10, t10) {
    var r10;
    let a10;
    return nR(e10, t10), n_[e10] || (a10 = {}, "event" === (r10 = e10) && (a10.durationThreshold = 0), a0(r10, (e11) => {
      nv(r10, { entries: e11 });
    }, a10), n_[e10] = true), nA(e10, t10);
  }
  function nv(e10, t10) {
    let r10 = ng[e10];
    if (r10?.length) for (let a10 of r10) try {
      a10(t10);
    } catch (t11) {
      at && g.debug.error(`Error while triggering instrumentation handler.
Type: ${e10}
Name: ${(0, F.getFunctionName)(a10)}
Error:`, t11);
    }
  }
  function nb() {
    return ((e10, t10 = {}) => {
      ((e11, t11 = {}) => {
        a2(() => {
          let r10, a10 = aW(), n10 = aY("FCP"), o10 = a0("paint", (e12) => {
            for (let t12 of e12) "first-contentful-paint" === t12.name && (o10.disconnect(), t12.startTime < a10.firstHiddenTime && (n10.value = Math.max(t12.startTime - a$(), 0), n10.entries.push(t12), r10(true)));
          });
          o10 && (r10 = aC(e11, n10, a6, t11.reportAllChanges));
        });
      })(rP(() => {
        let r10, a10 = aY("CLS", 0), n10 = aW(), o10 = aJ(t10, aQ), i2 = (e11) => {
          for (let t11 of e11) o10._processEntry(t11);
          o10._sessionValue > a10.value && (a10.value = o10._sessionValue, a10.entries = o10._sessionEntries, r10());
        }, s2 = a0("layout-shift", i2);
        s2 && (r10 = aC(e10, a10, a5, t10.reportAllChanges), n10.onHidden(() => {
          i2(s2.takeRecords()), r10(true);
        }), t9?.setTimeout?.(r10));
      }));
    })((e10) => {
      nv("cls", { metric: e10 }), i = e10;
    }, { reportAllChanges: true });
  }
  function nS() {
    return ((e10, t10 = {}) => {
      a2(() => {
        let r10, a10 = aW(), n10 = aY("LCP"), o10 = aJ(t10, nu), i2 = (e11) => {
          for (let i3 of (t10.reportAllChanges || (e11 = e11.slice(-1)), e11)) o10._processEntry(i3), i3.startTime < a10.firstHiddenTime && (n10.value = Math.max(i3.startTime - a$(), 0), n10.entries = [i3], r10());
        }, s2 = a0("largest-contentful-paint", i2);
        if (s2) {
          r10 = aC(e10, n10, nc, t10.reportAllChanges);
          let a11 = rP(() => {
            i2(s2.takeRecords()), s2.disconnect(), r10(true);
          }), o11 = (e11) => {
            e11.isTrusted && (rO(a11), rb(e11.type, o11, { capture: true }));
          };
          for (let e11 of ["keydown", "click", "visibilitychange"]) rv(e11, o11, { capture: true });
        }
      });
    })((e10) => {
      nv("lcp", { metric: e10 }), s = e10;
    }, { reportAllChanges: true });
  }
  function nP() {
    return ((e10, t10 = {}) => {
      let r10 = aY("TTFB"), a10 = aC(e10, r10, nf, t10.reportAllChanges);
      ny(() => {
        let e11 = aL();
        e11 && (r10.value = Math.max(e11.responseStart - a$(), 0), r10.entries = [e11], a10(true));
      });
    })((e10) => {
      nv("ttfb", { metric: e10 }), l = e10;
    });
  }
  function nT() {
    return ((e10, t10 = {}) => {
      if (!(globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype)) return;
      let r10 = aW();
      a2(() => {
        let a10;
        "interactionCount" in performance || o || (o = a0("event", nt, { type: "event", buffered: true, durationThreshold: 0 }));
        let n10 = aY("INP"), i2 = aJ(t10, no), s2 = (e11) => {
          rO(() => {
            for (let t12 of e11) i2._processEntry(t12);
            let t11 = i2._estimateP98LongestInteraction();
            t11 && t11._latency !== n10.value && (n10.value = t11._latency, n10.entries = t11.entries, a10());
          });
        }, l2 = a0("event", s2, { durationThreshold: t10.durationThreshold ?? 40 });
        a10 = aC(e10, n10, ns, t10.reportAllChanges), l2 && (l2.observe({ type: "first-input", buffered: true }), r10.onHidden(() => {
          s2(l2.takeRecords()), a10(true);
        }));
      });
    })((e10) => {
      nv("inp", { metric: e10 }), u = e10;
    });
  }
  function nO(e10, t10, r10, a10, n10 = false) {
    let o10;
    return nR(e10, t10), n_[e10] || (o10 = r10(), n_[e10] = true), a10 && t10({ metric: a10 }), nA(e10, t10, n10 ? o10 : void 0);
  }
  function nR(e10, t10) {
    ng[e10] = ng[e10] || [], ng[e10].push(t10);
  }
  function nA(e10, t10, r10) {
    return () => {
      r10 && r10();
      let a10 = ng[e10];
      if (!a10) return;
      let n10 = a10.indexOf(t10);
      -1 !== n10 && a10.splice(n10, 1);
    };
  }
  try {
    var nx = "u" > typeof window ? window : e.g;
    nx._sentryModuleMetadata = nx._sentryModuleMetadata || {}, nx._sentryModuleMetadata[new nx.Error().stack] = Object.assign({}, nx._sentryModuleMetadata[new nx.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var nk = "u" > typeof window ? window : e.g;
    nk._sentryModuleMetadata = nk._sentryModuleMetadata || {}, nk._sentryModuleMetadata[new nk.Error().stack] = Object.assign({}, nk._sentryModuleMetadata[new nk.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function nN(e10) {
    return "number" == typeof e10 && isFinite(e10);
  }
  function nj(e10, t10, r10, { ...a10 }) {
    let n10 = (0, U.spanToJSON)(e10).start_timestamp;
    return n10 && n10 > t10 && "function" == typeof e10.updateStartTime && e10.updateStartTime(t10), (0, aP.withActiveSpan)(e10, () => {
      let e11 = (0, aP.startInactiveSpan)({ startTime: t10, ...a10 });
      return e11 && e11.end(r10), e11;
    });
  }
  function nI(e10) {
    let t10, r10 = (0, v.getClient)();
    if (!r10) return;
    let { name: a10, transaction: n10, attributes: o10, startTime: i2 } = e10, { release: s2, environment: l2 } = r10.getOptions(), { userInfo: u2 } = r10.getDataCollectionOptions(), d2 = r10.getIntegrationByName("Replay"), c2 = d2?.getReplayId(), p2 = (0, v.getCurrentScope)(), f2 = p2.getUser(), y2 = void 0 !== f2 ? f2.email || f2.id || f2.ip_address : void 0;
    try {
      t10 = p2.getScopeData().contexts.profile.profile_id;
    } catch {
    }
    let h2 = { release: s2, environment: l2, user: y2 || void 0, profile_id: t10 || void 0, replay_id: c2 || void 0, transaction: n10, "user_agent.original": t9.navigator?.userAgent, "client.address": u2 ? "{{auto}}" : void 0, ...o10 };
    return (0, aP.startInactiveSpan)({ name: a10, attributes: h2, startTime: i2, experimental: { standalone: true } });
  }
  function nC() {
    return t9.addEventListener && t9.performance;
  }
  function nB(e10) {
    return e10 / 1e3;
  }
  function nL(e10) {
    try {
      return PerformanceObserver.supportedEntryTypes.includes(e10);
    } catch {
      return false;
    }
  }
  function nD(e10, t10) {
    let r10, a10, n10 = false;
    function o10(e11) {
      !n10 && a10 && t10(e11, a10.spanContext().spanId, a10), n10 = true;
    }
    rv("visibilitychange", r10 = (e11) => {
      ("pagehide" === e11.type || t9.document?.visibilityState === "hidden") && (() => {
        o10("pagehide");
      })();
    }, { capture: true, once: true }), rv("pagehide", r10, { capture: true, once: true });
    let i2 = e10.on("beforeStartNavigationSpan", (e11, t11) => {
      t11?.isRedirect || (o10("navigation"), i2(), s2());
    }), s2 = e10.on("afterStartPageLoadSpan", (e11) => {
      a10 = e11, s2();
    });
  }
  try {
    var n$ = "u" > typeof window ? window : e.g;
    n$._sentryModuleMetadata = n$._sentryModuleMetadata || {}, n$._sentryModuleMetadata[new n$.Error().stack] = Object.assign({}, n$._sentryModuleMetadata[new n$.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var nU = "u" > typeof window ? window : e.g;
    nU._sentryModuleMetadata = nU._sentryModuleMetadata || {}, nU._sentryModuleMetadata[new nU.Error().stack] = Object.assign({}, nU._sentryModuleMetadata[new nU.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function nK(e10) {
    return null != e10 && e10 > 0 && e10 <= 6e4;
  }
  try {
    var nF = "u" > typeof window ? window : e.g;
    nF._sentryModuleMetadata = nF._sentryModuleMetadata || {}, nF._sentryModuleMetadata[new nF.Error().stack] = Object.assign({}, nF._sentryModuleMetadata[new nF.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function nH(e10) {
    return e10 ? (((0, er.browserPerformanceTimeOrigin)() || performance.timeOrigin) + e10) / 1e3 : e10;
  }
  function nW(e10) {
    let t10 = {};
    if (void 0 != e10.nextHopProtocol) {
      let { name: r10, version: a10 } = (function(e11) {
        let t11 = "unknown", r11 = "unknown", a11 = "";
        for (let n10 of e11) {
          if ("/" === n10) {
            [t11, r11] = e11.split("/");
            break;
          }
          if (!isNaN(Number(n10))) {
            t11 = "h" === a11 ? "http" : a11, r11 = e11.split(a11)[1];
            break;
          }
          a11 += n10;
        }
        return a11 === e11 && (t11 = a11), { name: t11, version: r11 };
      })(e10.nextHopProtocol);
      t10["network.protocol.version"] = a10, t10["network.protocol.name"] = r10;
    }
    return (0, er.browserPerformanceTimeOrigin)() || nC()?.timeOrigin ? Object.fromEntries(Object.entries({ ...t10, "http.request.redirect_start": nH(e10.redirectStart), "http.request.redirect_end": nH(e10.redirectEnd), "http.request.worker_start": nH(e10.workerStart), "http.request.fetch_start": nH(e10.fetchStart), "http.request.domain_lookup_start": nH(e10.domainLookupStart), "http.request.domain_lookup_end": nH(e10.domainLookupEnd), "http.request.connect_start": nH(e10.connectStart), "http.request.secure_connection_start": nH(e10.secureConnectionStart), "http.request.connection_end": nH(e10.connectEnd), "http.request.request_start": nH(e10.requestStart), "http.request.response_start": nH(e10.responseStart), "http.request.response_end": nH(e10.responseEnd), "http.request.time_to_first_byte": null != e10.responseStart ? e10.responseStart / 1e3 : void 0 }).filter(([, e11]) => null != e11)) : t10;
  }
  try {
    var nG = "u" > typeof window ? window : e.g;
    nG._sentryModuleMetadata = nG._sentryModuleMetadata || {}, nG._sentryModuleMetadata[new nG.Error().stack] = Object.assign({}, nG._sentryModuleMetadata[new nG.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let nq = 0, nY = {};
  function nz() {
    d = void 0, c = void 0, nY = {};
  }
  function nX(e10, t10, r10, a10, n10 = r10) {
    var o10;
    let i2 = t10["secureConnection" === (o10 = r10) ? "connectEnd" : "fetch" === o10 ? "domainLookupStart" : `${o10}End`], s2 = t10[`${r10}Start`];
    s2 && i2 && nj(e10, a10 + nB(s2), a10 + nB(i2), { op: `browser.${n10}`, name: t10.name, attributes: { [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics", ..."redirect" === r10 && null != t10.redirectCount ? { "http.redirect_count": t10.redirectCount } : {} } });
  }
  try {
    var nJ = "u" > typeof window ? window : e.g;
    nJ._sentryModuleMetadata = nJ._sentryModuleMetadata || {}, nJ._sentryModuleMetadata[new nJ.Error().stack] = Object.assign({}, nJ._sentryModuleMetadata[new nJ.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let nV = /* @__PURE__ */ new WeakMap(), nQ = /* @__PURE__ */ new WeakMap(), nZ = ["text/event-stream", "application/x-ndjson", "application/stream+json"];
  try {
    var n0 = "u" > typeof window ? window : e.g;
    n0._sentryModuleMetadata = n0._sentryModuleMetadata || {}, n0._sentryModuleMetadata[new n0.Error().stack] = Object.assign({}, n0._sentryModuleMetadata[new n0.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let n1 = [], n2 = /* @__PURE__ */ new Map(), n3 = /* @__PURE__ */ new Map(), n6 = { click: "click", pointerdown: "click", pointerup: "click", mousedown: "click", mouseup: "click", touchstart: "click", touchend: "click", mouseover: "hover", mouseout: "hover", mouseenter: "hover", mouseleave: "hover", pointerover: "hover", pointerout: "hover", pointerenter: "hover", pointerleave: "hover", dragstart: "drag", dragend: "drag", drag: "drag", dragenter: "drag", dragleave: "drag", dragover: "drag", drop: "drag", keydown: "press", keyup: "press", keypress: "press", input: "press" }, n4 = ({ metric: e10 }) => {
    if (void 0 == e10.value) return;
    let t10 = nB(e10.value);
    if (t10 > 60) return;
    let r10 = e10.entries.find((t11) => t11.duration === e10.value && n6[t11.name]);
    if (!r10) return;
    let { interactionId: a10 } = r10, n10 = n6[r10.name], o10 = nB((0, er.browserPerformanceTimeOrigin)() + r10.startTime), i2 = (0, U.getActiveSpan)(), s2 = i2 ? (0, U.getRootSpan)(i2) : void 0, l2 = null != a10 ? n2.get(a10) : void 0, u2 = l2?.span || s2, d2 = u2 ? (0, U.spanToJSON)(u2).description : (0, v.getCurrentScope)().getScopeData().transactionName, c2 = nI({ name: l2?.elementName || rp(r10.target), transaction: d2, attributes: { [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.inp", [$.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `ui.interaction.${n10}`, [$.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: r10.duration }, startTime: o10 });
    c2 && (c2.addEvent("inp", { [$.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "millisecond", [$.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: e10.value }), c2.end(o10 + t10));
  };
  try {
    var n5 = "u" > typeof window ? window : e.g;
    n5._sentryModuleMetadata = n5._sentryModuleMetadata || {}, n5._sentryModuleMetadata[new n5.Error().stack] = Object.assign({}, n5._sentryModuleMetadata[new n5.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function n8(e10) {
    let { name: t10, op: r10, origin: a10, metricName: n10, value: o10, attributes: i2, parentSpan: s2, reportEvent: l2, startTime: u2, endTime: d2 } = e10, c2 = (0, v.getCurrentScope)().getScopeData().transactionName, p2 = { [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: a10, [$.SEMANTIC_ATTRIBUTE_SENTRY_OP]: r10, [$.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0, [`browser.web_vital.${n10}.value`]: o10, [tJ]: c2, [tX]: c2, "user_agent.original": t9.navigator?.userAgent, ...i2 };
    s2 && (0, U.spanToStreamedSpanJSON)(s2).attributes?.[$.SEMANTIC_ATTRIBUTE_SENTRY_OP] === "pageload" && (p2["sentry.pageload.span_id"] = s2.spanContext().spanId), l2 && (p2[`browser.web_vital.${n10}.report_event`] = l2);
    let f2 = (0, aP.startInactiveSpan)({ name: t10, attributes: p2, startTime: u2, parentSpan: s2 });
    f2 && f2.end(d2 ?? u2);
  }
  try {
    var n9 = "u" > typeof window ? window : e.g;
    n9._sentryModuleMetadata = n9._sentryModuleMetadata || {}, n9._sentryModuleMetadata[new n9.Error().stack] = Object.assign({}, n9._sentryModuleMetadata[new n9.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let n7 = "WebVitals";
  try {
    var oe = "u" > typeof window ? window : e.g;
    oe._sentryModuleMetadata = oe._sentryModuleMetadata || {}, oe._sentryModuleMetadata[new oe.Error().stack] = Object.assign({}, oe._sentryModuleMetadata[new oe.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var ot = "u" > typeof window ? window : e.g;
    ot._sentryModuleMetadata = ot._sentryModuleMetadata || {}, ot._sentryModuleMetadata[new ot.Error().stack] = Object.assign({}, ot._sentryModuleMetadata[new ot.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let or = "sentry_previous_trace";
  function oa(e10) {
    return 1 === e10.traceFlags;
  }
  var on = e.i(130062), oo = e.i(851758);
  try {
    var oi = "u" > typeof window ? window : e.g;
    oi._sentryModuleMetadata = oi._sentryModuleMetadata || {}, oi._sentryModuleMetadata[new oi.Error().stack] = Object.assign({}, oi._sentryModuleMetadata[new oi.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function os(e10 = {}) {
    let t10 = e10.client || (0, v.getClient)();
    if (!(0, E.isEnabled)() || !t10) return {};
    let r10 = (0, Z.getMainCarrier)(), a10 = (0, oo.getAsyncContextStrategy)(r10);
    if (a10.getTraceData) return a10.getTraceData(e10);
    let n10 = e10.scope || (0, v.getCurrentScope)(), o10 = e10.span || (0, U.getActiveSpan)(), i2 = (0, av.spanIsNonRecordingSpan)(o10) && !(0, aE.hasSpansEnabled)(t10.getOptions());
    if (!o10 && (0, v.hasExternalPropagationContext)()) return {};
    let s2 = o10 && !i2 ? (0, U.spanToTraceHeader)(o10) : (function(e11) {
      let { traceId: t11, sampled: r11, propagationSpanId: a11 } = e11.getPropagationContext();
      return (0, aN.generateSentryTraceHeader)(t11, a11, r11);
    })(n10), l2 = o10 ? (0, en.getDynamicSamplingContextFromSpan)(o10) : (0, en.getDynamicSamplingContextFromScope)(t10, n10), u2 = (0, on.dynamicSamplingContextToSentryBaggageHeader)(l2);
    if (!aN.TRACEPARENT_REGEXP.test(s2)) return g.debug.warn("Invalid sentry-trace data. Cannot generate trace data"), {};
    let d2 = { "sentry-trace": s2, baggage: u2 };
    return e10.propagateTraceparent && (d2.traceparent = o10 && !i2 ? (0, U.spanToTraceparentHeader)(o10) : (function(e11) {
      let { traceId: t11, sampled: r11, propagationSpanId: a11 } = e11.getPropagationContext();
      return (0, aN.generateTraceparentHeader)(t11, a11, r11);
    })(n10)), d2;
  }
  try {
    var ol = "u" > typeof window ? window : e.g;
    ol._sentryModuleMetadata = ol._sentryModuleMetadata || {}, ol._sentryModuleMetadata[new ol.Error().stack] = Object.assign({}, ol._sentryModuleMetadata[new ol.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function ou(e10) {
    return "string" == typeof e10 && e10.split(",").some((e11) => e11.trim().startsWith(on.SENTRY_BAGGAGE_KEY_PREFIX));
  }
  function od(e10, t10, r10, a10) {
    let n10 = { url: t5(e10), type: "fetch", "http.method": r10, [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: a10, [$.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client" };
    return t10 && (t1(t10) || (n10[tz] = t5(t10.href), n10[tV] = t5(t10.href), n10["server.address"] = t10.host), t10.search && (n10["http.query"] = t10.search), t10.hash && (n10["http.fragment"] = t10.hash)), n10;
  }
  try {
    var oc = "u" > typeof window ? window : e.g;
    oc._sentryModuleMetadata = oc._sentryModuleMetadata || {}, oc._sentryModuleMetadata[new oc.Error().stack] = Object.assign({}, oc._sentryModuleMetadata[new oc.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var op = "u" > typeof window ? window : e.g;
    op._sentryModuleMetadata = op._sentryModuleMetadata || {}, op._sentryModuleMetadata[new op.Error().stack] = Object.assign({}, op._sentryModuleMetadata[new op.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function of(e10) {
    try {
      return new URL(e10, tg.location.origin).href;
    } catch {
      return;
    }
  }
  function oy(e10) {
    try {
      return new Headers(e10);
    } catch {
      return;
    }
  }
  try {
    var oh = "u" > typeof window ? window : e.g;
    oh._sentryModuleMetadata = oh._sentryModuleMetadata || {}, oh._sentryModuleMetadata[new oh.Error().stack] = Object.assign({}, oh._sentryModuleMetadata[new oh.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let og = { traceFetch: true, traceXHR: true, enableHTTPTimings: true, trackFetchStreamPerformance: false };
  function o_(e10, t10) {
    let { url: r10 } = (0, U.spanToJSON)(e10).data;
    if (!r10 || "string" != typeof r10) return;
    let a10 = () => void setTimeout(n10);
    if ((0, ev.hasSpanStreamingEnabled)(t10)) {
      let t11 = e10.end.bind(e10);
      e10.end = (e11) => {
        let r11 = e11 ?? (0, er.timestampInSeconds)(), o10 = false, i2 = () => {
          o10 || (o10 = true, setTimeout(n10), t11(r11), clearTimeout(s2));
        };
        a10 = i2;
        let s2 = setTimeout(i2, 300);
      };
    }
    let n10 = nE("resource", ({ entries: t11 }) => {
      t11.forEach((t12) => {
        "resource" === t12.entryType && "initiatorType" in t12 && "string" == typeof t12.nextHopProtocol && ("fetch" === t12.initiatorType || "xmlhttprequest" === t12.initiatorType) && t12.name.endsWith(r10) && (e10.setAttributes(nW(t12)), a10());
      });
    });
  }
  try {
    var om = "u" > typeof window ? window : e.g;
    om._sentryModuleMetadata = om._sentryModuleMetadata || {}, om._sentryModuleMetadata[new om.Error().stack] = Object.assign({}, om._sentryModuleMetadata[new om.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let oM = /Googlebot|Google-InspectionTool|Storebot-Google|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Facebot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot/i;
  function ow() {
    let e10 = tg.navigator;
    return !!e10?.userAgent && oM.test(e10.userAgent);
  }
  let oE = { ...aO, instrumentNavigation: true, instrumentPageLoad: true, markBackgroundSpan: true, enableLongTask: true, enableLongAnimationFrame: true, enableInp: true, ignoreResourceSpans: [], ignorePerformanceApiSpans: [], detectRedirects: true, linkPreviousTrace: "in-memory", consistentTraceSampling: false, enableReportPageLoaded: false, _experiments: {}, ...og };
  function ov(e10, t10, r10) {
    e10.emit("startPageLoadSpan", t10, r10), (0, v.getCurrentScope)().setTransactionName(t10.name);
    let a10 = e10[oT];
    return a10 && e10.emit("afterStartPageLoadSpan", a10), a10;
  }
  function ob(e10, t10, r10) {
    let { url: a10, isRedirect: n10 } = r10 || {};
    e10.emit("beforeStartNavigationSpan", t10, { isRedirect: n10, url: a10 }), e10.emit("startNavigationSpan", t10, { isRedirect: n10, url: a10 });
    let o10 = (0, v.getCurrentScope)();
    return o10.setTransactionName(t10.name), a10 && !n10 && o10.setSDKProcessingMetadata({ normalizedRequest: { ...tM(), url: a10 } }), e10[oT];
  }
  function oS(e10) {
    let t10 = tg.document, r10 = t10?.querySelector(`meta[name=${e10}]`);
    return r10?.getAttribute("content") || void 0;
  }
  function oP(e10) {
    let t10 = tg.performance?.getEntriesByType?.("navigation")[0], r10 = t10?.serverTiming?.find((t11) => t11.name === e10);
    return r10?.description;
  }
  let oT = "_sentry_idleSpan";
  function oO(e10, t10) {
    (0, B.addNonEnumerableProperty)(e10, oT, t10);
  }
  try {
    var oR = "u" > typeof window ? window : e.g;
    oR._sentryModuleMetadata = oR._sentryModuleMetadata || {}, oR._sentryModuleMetadata[new oR.Error().stack] = Object.assign({}, oR._sentryModuleMetadata[new oR.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function oA(e10) {
    try {
      return new URL(e10, t9.location.origin).toString();
    } catch {
      return e10;
    }
  }
  try {
    var ox = "u" > typeof window ? window : e.g;
    ox._sentryModuleMetadata = ox._sentryModuleMetadata || {}, ox._sentryModuleMetadata[new ox.Error().stack] = Object.assign({}, ox._sentryModuleMetadata[new ox.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ok = _.GLOBAL_OBJ, oN = null, oj = /* @__PURE__ */ new Map(), oI = /* @__PURE__ */ new Map();
  function oC(e10) {
    let t10 = e10.split("/").filter(Boolean), r10 = 0;
    for (let e11 of t10) if (e11.startsWith(":")) {
      let t11 = e11.substring(1);
      t11.endsWith("*?") ? r10 += 1e3 : t11.endsWith("*") ? r10 += 100 : r10 += 10;
    }
    return t10.length > 0 && (r10 += 1 / t10.length), r10;
  }
  function oB(e10) {
    if (oj.has(e10)) return oj.get(e10) ?? null;
    try {
      let t10 = new RegExp(e10);
      return oj.set(e10, t10), t10;
    } catch (t10) {
      return am && g.debug.warn("Could not compile regex", { regexString: e10, error: t10 }), null;
    }
  }
  function oL() {
    if (!ok?._sentryRouteManifest || "string" != typeof ok._sentryRouteManifest) return null;
    let e10 = ok._sentryRouteManifest;
    if (oN && p === e10) return oN;
    oj.clear(), oI.clear();
    let t10 = { staticRoutes: [], dynamicRoutes: [], isrRoutes: [] };
    try {
      if (t10 = JSON.parse(e10), !Array.isArray(t10.staticRoutes) || !Array.isArray(t10.dynamicRoutes)) return null;
      return oN = t10, p = e10, t10;
    } catch {
      return am && g.debug.warn("Could not extract route manifest"), null;
    }
  }
  let oD = (e10) => {
    let t10 = oL();
    if (!t10) return;
    let r10 = e10.length > 1 && e10.endsWith("/") ? e10.slice(0, -1) : e10;
    if (oI.has(r10)) return oI.get(r10);
    let { staticRoutes: a10, dynamicRoutes: n10 } = t10;
    if (!Array.isArray(a10) || !Array.isArray(n10)) return;
    let o10 = (function(e11, t11, r11) {
      let a11 = [];
      if (t11.some((t12) => t12.path === e11)) return a11;
      for (let t12 of r11) if (t12.regex) {
        let r12 = oB(t12.regex);
        r12?.test(e11) && a11.push(t12.path);
      }
      if (!e11.startsWith("/:")) {
        for (let t12 of r11) if (t12.hasOptionalPrefix && t12.regex) {
          let r12 = "/" === e11 ? "/SENTRY_OPTIONAL_PREFIX" : `/SENTRY_OPTIONAL_PREFIX${e11}`, n11 = oB(t12.regex);
          n11?.test(r12) && a11.push(t12.path);
        }
      }
      return a11;
    })(r10, a10, n10).sort((e11, t11) => oC(e11) - oC(t11))[0];
    return oI.set(r10, o10), o10;
  };
  try {
    var o$ = "u" > typeof window ? window : e.g;
    o$._sentryModuleMetadata = o$._sentryModuleMetadata || {}, o$._sentryModuleMetadata[new o$.Error().stack] = Object.assign({}, o$._sentryModuleMetadata[new o$.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function oU(e10) {
    return e10.length > 1 && e10.endsWith("/") ? e10.slice(0, -1) : e10;
  }
  function oK(e10, t10, r10) {
    e10.setAttributes({ [tQ]: t10, [tV]: oA(r10) });
  }
  let oF = "incomplete-app-router-transaction", oH = "router-patch", oW = { current: void 0 }, oG = _.GLOBAL_OBJ, oq = _.GLOBAL_OBJ;
  function oY(e10) {
    try {
      return new URL(e10, "http://example.com/").pathname;
    } catch {
      return "/";
    }
  }
  let oz = /* @__PURE__ */ new WeakSet();
  function oX(e10, t10, r10) {
    oz.has(t10) || (oz.add(t10), ["back", "forward", "push", "replace"].forEach((a10) => {
      t10?.[a10] && (t10[a10] = new Proxy(t10[a10], { apply(t11, n10, o10) {
        if ("router-patch" !== oH) return t11.apply(n10, o10);
        let i2 = oF, s2 = { [$.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "navigation", [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.nextjs.app_router_instrumentation", [$.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url" }, l2 = o10[0], u2 = h.default.env._sentryBasePath ?? oq._sentryBasePath, d2 = u2 && "string" == typeof l2 && !l2.startsWith(u2) ? `${u2}${l2}` : l2;
        "push" === a10 ? (i2 = oU(oY(d2)), s2["navigation.type"] = "router.push") : "replace" === a10 ? (i2 = oU(oY(d2)), s2["navigation.type"] = "router.replace") : "back" === a10 ? s2["navigation.type"] = "router.back" : "forward" === a10 && (s2["navigation.type"] = "router.forward");
        let c2 = oD(i2), p2 = "back" === a10 || "forward" === a10 ? void 0 : oA(d2);
        return r10.current = ob(e10, { name: c2 ?? i2, attributes: { ...s2, [$.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: c2 ? "route" : "url", ...c2 && { [tZ]: c2 } } }, p2 ? { url: p2 } : void 0), t11.apply(n10, o10);
      } }));
    }));
  }
  var oJ = e.i(686470);
  try {
    var oV = "u" > typeof window ? window : e.g;
    oV._sentryModuleMetadata = oV._sentryModuleMetadata || {}, oV._sentryModuleMetadata[new oV.Error().stack] = Object.assign({}, oV._sentryModuleMetadata[new oV.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let oQ = oJ.default.events ? oJ.default : oJ.default.default;
  try {
    var oZ = "u" > typeof window ? window : e.g;
    oZ._sentryModuleMetadata = oZ._sentryModuleMetadata || {}, oZ._sentryModuleMetadata[new oZ.Error().stack] = Object.assign({}, oZ._sentryModuleMetadata[new oZ.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var o0 = "u" > typeof window ? window : e.g;
    o0._sentryModuleMetadata = o0._sentryModuleMetadata || {}, o0._sentryModuleMetadata[new o0.Error().stack] = Object.assign({}, o0._sentryModuleMetadata[new o0.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var o1 = "u" > typeof window ? window : e.g;
    o1._sentryModuleMetadata = o1._sentryModuleMetadata || {}, o1._sentryModuleMetadata[new o1.Error().stack] = Object.assign({}, o1._sentryModuleMetadata[new o1.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let o2 = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
  function o3(...e10) {
    let t10 = "", r10 = false;
    for (let a10 = e10.length - 1; a10 >= -1 && !r10; a10--) {
      let n10 = a10 >= 0 ? e10[a10] : "/";
      n10 && (t10 = `${n10}/${t10}`, r10 = "/" === n10.charAt(0));
    }
    return t10 = (function(e11, t11) {
      let r11 = 0;
      for (let t12 = e11.length - 1; t12 >= 0; t12--) {
        let a10 = e11[t12];
        "." === a10 ? e11.splice(t12, 1) : ".." === a10 ? (e11.splice(t12, 1), r11++) : r11 && (e11.splice(t12, 1), r11--);
      }
      if (t11) for (; r11--; ) e11.unshift("..");
      return e11;
    })(t10.split("/").filter((e11) => !!e11), !r10).join("/"), (r10 ? "/" : "") + t10 || ".";
  }
  function o6(e10) {
    let t10 = 0;
    for (; t10 < e10.length && "" === e10[t10]; t10++) ;
    let r10 = e10.length - 1;
    for (; r10 >= 0 && "" === e10[r10]; r10--) ;
    return t10 > r10 ? [] : e10.slice(t10, r10 - t10 + 1);
  }
  try {
    var o4 = "u" > typeof window ? window : e.g;
    o4._sentryModuleMetadata = o4._sentryModuleMetadata || {}, o4._sentryModuleMetadata[new o4.Error().stack] = Object.assign({}, o4._sentryModuleMetadata[new o4.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var o5 = "u" > typeof window ? window : e.g;
    o5._sentryModuleMetadata = o5._sentryModuleMetadata || {}, o5._sentryModuleMetadata[new o5.Error().stack] = Object.assign({}, o5._sentryModuleMetadata[new o5.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let o8 = /\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js(:\d+)*$/;
  try {
    var o9 = "u" > typeof window ? window : e.g;
    o9._sentryModuleMetadata = o9._sentryModuleMetadata || {}, o9._sentryModuleMetadata[new o9.Error().stack] = Object.assign({}, o9._sentryModuleMetadata[new o9.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var o7 = "u" > typeof window ? window : e.g;
    o7._sentryModuleMetadata = o7._sentryModuleMetadata || {}, o7._sentryModuleMetadata[new o7.Error().stack] = Object.assign({}, o7._sentryModuleMetadata[new o7.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ie = new class {
    constructor(e10) {
      this._maxSize = e10, this._cache = /* @__PURE__ */ new Map();
    }
    get size() {
      return this._cache.size;
    }
    get(e10) {
      let t10 = this._cache.get(e10);
      if (void 0 !== t10) return this._cache.delete(e10), this._cache.set(e10, t10), t10;
    }
    set(e10, t10) {
      if (this._cache.size >= this._maxSize) {
        let e11 = this._cache.keys().next().value;
        this._cache.delete(e11);
      }
      this._cache.set(e10, t10);
    }
    remove(e10) {
      let t10 = this._cache.get(e10);
      return t10 && this._cache.delete(e10), t10;
    }
    clear() {
      this._cache.clear();
    }
    keys() {
      return Array.from(this._cache.keys());
    }
    values() {
      let e10 = [];
      return this._cache.forEach((t10) => e10.push(t10)), e10;
    }
  }(100);
  try {
    var it = "u" > typeof window ? window : e.g;
    it._sentryModuleMetadata = it._sentryModuleMetadata || {}, it._sentryModuleMetadata[new it.Error().stack] = Object.assign({}, it._sentryModuleMetadata[new it.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  _.GLOBAL_OBJ;
  try {
    var ir = "u" > typeof window ? window : e.g;
    ir._sentryModuleMetadata = ir._sentryModuleMetadata || {}, ir._sentryModuleMetadata[new ir.Error().stack] = Object.assign({}, ir._sentryModuleMetadata[new ir.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ia = false, io = _.GLOBAL_OBJ;
  try {
    var ii = "u" > typeof window ? window : e.g;
    ii._sentryModuleMetadata = ii._sentryModuleMetadata || {}, ii._sentryModuleMetadata[new ii.Error().stack] = Object.assign({}, ii._sentryModuleMetadata[new ii.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let is = /* @__PURE__ */ new Map(), il = /* @__PURE__ */ new Set();
  try {
    var iu = "u" > typeof window ? window : e.g;
    iu._sentryModuleMetadata = iu._sentryModuleMetadata || {}, iu._sentryModuleMetadata[new iu.Error().stack] = Object.assign({}, iu._sentryModuleMetadata[new iu.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let id = "_sentryBundlerPluginAppKey:";
  var ic = e.i(791768);
  try {
    var ip = window;
    ip._sentryModuleMetadata = ip._sentryModuleMetadata || {}, ip._sentryModuleMetadata[new ip.Error().stack] = Object.assign({}, ip._sentryModuleMetadata[new ip.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  globalThis._sentryRouteManifest = '{"dynamicRoutes":[{"path":"/:lang","regex":"^/([^/]+)$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/agentic-sales-report/:version","regex":"^/([^/]+)/agentic-sales-report/([^/]+)$","paramNames":["lang","version"],"hasOptionalPrefix":true},{"path":"/:lang/apps","regex":"^/([^/]+)/apps$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/apps/:slug","regex":"^/([^/]+)/apps/([^/]+)$","paramNames":["lang","slug"],"hasOptionalPrefix":true},{"path":"/:lang/blog","regex":"^/([^/]+)/blog$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/blog/:slug","regex":"^/([^/]+)/blog/([^/]+)$","paramNames":["lang","slug"],"hasOptionalPrefix":true},{"path":"/:lang/brand","regex":"^/([^/]+)/brand$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/careers","regex":"^/([^/]+)/careers$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/careers/:slug","regex":"^/([^/]+)/careers/([^/]+)$","paramNames":["lang","slug"],"hasOptionalPrefix":true},{"path":"/:lang/changelog/:year","regex":"^/([^/]+)/changelog/([^/]+)$","paramNames":["lang","year"],"hasOptionalPrefix":true},{"path":"/:lang/changelog/:year/:slug","regex":"^/([^/]+)/changelog/([^/]+)/([^/]+)$","paramNames":["lang","year","slug"],"hasOptionalPrefix":true},{"path":"/:lang/contact/:slug","regex":"^/([^/]+)/contact/([^/]+)$","paramNames":["lang","slug"],"hasOptionalPrefix":true},{"path":"/:lang/customers","regex":"^/([^/]+)/customers$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/customers/:slug","regex":"^/([^/]+)/customers/([^/]+)$","paramNames":["lang","slug"],"hasOptionalPrefix":true},{"path":"/:lang/dark-shelves","regex":"^/([^/]+)/dark-shelves$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/download","regex":"^/([^/]+)/download$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/engineering/blog","regex":"^/([^/]+)/engineering/blog$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/engineering/blog/:slug","regex":"^/([^/]+)/engineering/blog/([^/]+)$","paramNames":["lang","slug"],"hasOptionalPrefix":true},{"path":"/:lang/f","regex":"^/([^/]+)/f$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/f/:slug","regex":"^/([^/]+)/f/([^/]+)$","paramNames":["lang","slug"],"hasOptionalPrefix":true},{"path":"/:lang/f/tag/:tag","regex":"^/([^/]+)/f/tag/([^/]+)$","paramNames":["lang","tag"],"hasOptionalPrefix":true},{"path":"/:lang/for/:slug","regex":"^/([^/]+)/for/([^/]+)$","paramNames":["lang","slug"],"hasOptionalPrefix":true},{"path":"/:lang/legal/:slug*","regex":"^/([^/]+)/legal/(.+)$","paramNames":["lang","slug"],"hasOptionalPrefix":true},{"path":"/:lang/legal/disclosure-policy/form","regex":"^/([^/]+)/legal/disclosure-policy/form$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/london","regex":"^/([^/]+)/london$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/next-gen","regex":"^/([^/]+)/next-gen$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/partners","regex":"^/([^/]+)/partners$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/partners/app-partners","regex":"^/([^/]+)/partners/app-partners$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/partners/creator-partners","regex":"^/([^/]+)/partners/creator-partners$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/partners/expert-partners","regex":"^/([^/]+)/partners/expert-partners$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/platform/:slug","regex":"^/([^/]+)/platform/([^/]+)$","paramNames":["lang","slug"],"hasOptionalPrefix":true},{"path":"/:lang/pricing","regex":"^/([^/]+)/pricing$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/pricing/:currency","regex":"^/([^/]+)/pricing/([^/]+)$","paramNames":["lang","currency"],"hasOptionalPrefix":true},{"path":"/:lang/refer","regex":"^/([^/]+)/refer$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/shelves","regex":"^/([^/]+)/shelves$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/solutions/:slug","regex":"^/([^/]+)/solutions/([^/]+)$","paramNames":["lang","slug"],"hasOptionalPrefix":true},{"path":"/:lang/startups","regex":"^/([^/]+)/startups$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/templates/:slugs*?","regex":"^/([^/]+)/templates(?:/(.*))?$","paramNames":["lang","slugs"],"hasOptionalPrefix":true},{"path":"/:lang/agentic-readiness","regex":"^/([^/]+)/agentic-readiness$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/agentic-readiness/:outcome","regex":"^/([^/]+)/agentic-readiness/([^/]+)$","paramNames":["lang","outcome"],"hasOptionalPrefix":true},{"path":"/:lang/help","regex":"^/([^/]+)/help$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/help/:slugs*","regex":"^/([^/]+)/help/(.+)$","paramNames":["lang","slugs"],"hasOptionalPrefix":true},{"path":"/:lang/help/academy","regex":"^/([^/]+)/help/academy$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/help/academy/:slugs*","regex":"^/([^/]+)/help/academy/(.+)$","paramNames":["lang","slugs"],"hasOptionalPrefix":true},{"path":"/:lang/p/:slug*","regex":"^/([^/]+)/p/(.+)$","paramNames":["lang","slug"],"hasOptionalPrefix":true},{"path":"/:lang/promo/:slug","regex":"^/([^/]+)/promo/([^/]+)$","paramNames":["lang","slug"],"hasOptionalPrefix":true},{"path":"/:lang/redefine","regex":"^/([^/]+)/redefine$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/setup","regex":"^/([^/]+)/setup$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/internal/ascii-artwork","regex":"^/([^/]+)/internal/ascii-artwork$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/internal/error-pages","regex":"^/([^/]+)/internal/error-pages$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/internal/help-center","regex":"^/([^/]+)/internal/help-center$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/internal/logo-balancer","regex":"^/([^/]+)/internal/logo-balancer$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/internal/og-preview","regex":"^/([^/]+)/internal/og-preview$","paramNames":["lang"],"hasOptionalPrefix":true},{"path":"/:lang/internal/prompt-builder","regex":"^/([^/]+)/internal/prompt-builder$","paramNames":["lang"],"hasOptionalPrefix":true}],"staticRoutes":[],"isrRoutes":["/:lang/agentic-sales-report/:version","/:lang/apps/:slug","/:lang/blog/:slug","/:lang/careers/:slug","/:lang/changelog/:year","/:lang/changelog/:year/:slug","/:lang/contact/:slug","/:lang/customers/:slug","/:lang/engineering/blog/:slug","/:lang/f/:slug","/:lang/f/tag/:tag","/:lang/for/:slug","/:lang/legal/:slug*","/:lang/platform/:slug","/:lang/pricing/:currency","/:lang/solutions/:slug","/:lang/templates/:slugs*?","/:lang/agentic-readiness/:outcome","/:lang/help/:slugs*","/:lang/help/academy/:slugs*","/:lang/p/:slug*","/:lang/promo/:slug"]}', globalThis._sentryNextJsVersion = "16.3.0", globalThis._sentryRewritesTunnelPath = "/monitoring", !(function(e10) {
    let t10, r10, a10, n10, o10, i2, s2, u2;
    ia && (0, g.consoleSandbox)(() => {
      console.warn("[@sentry/nextjs] You are calling `Sentry.init()` more than once on the client. This can happen if you have both a `sentry.client.config.ts` and a `instrumentation-client.ts` file with `Sentry.init()` calls. It is recommended to call `Sentry.init()` once in `instrumentation-client.ts`.");
    }), ia = true, !am && e10.debug && (0, g.consoleSandbox)(() => {
      console.warn("[@sentry/nextjs] You have enabled `debug: true`, but Sentry debug logging was removed from your bundle (likely via `withSentryConfig({ disableLogger: true })` / `webpack.treeshake.removeDebugLogging: true`). Set that option to `false` to see Sentry debug output.");
    }), ("u" < typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && (function() {
      tg.document && (function(e12) {
        let t11 = oD(e12) || e12, r11 = ie.get(t11);
        if (void 0 !== r11) return r11;
        let a11 = oL();
        if (!a11?.isrRoutes || !Array.isArray(a11.isrRoutes) || 0 === a11.isrRoutes.length) return ie.set(t11, false), false;
        let n11 = a11.isrRoutes.includes(t11);
        return ie.set(t11, n11), n11;
      })(tg.location.pathname) && (e11("sentry-trace"), e11("baggage"));
      function e11(e12) {
        try {
          let t11 = tg.document.querySelector(`meta[name="${e12}"]`);
          t11 && t11.remove();
        } catch {
        }
      }
    })();
    let p2 = { environment: e10.environment || h.default.env.SENTRY_ENVIRONMENT || (t10 = "production", `vercel-${t10}`) || "production", defaultIntegrations: (n10 = ap(e10), ("u" < typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && n10.push((function(e11 = {}) {
      let t11 = ((e12 = {}) => {
        let t12, r12;
        "enableElementTiming" in e12 && (0, g.consoleSandbox)(() => {
          console.warn("[Sentry] `enableElementTiming` is deprecated and no longer has any effect. Use the standalone `elementTimingIntegration` instead.");
        });
        let a12 = { name: void 0, source: void 0 }, n11 = tg.document, { enableInp: o11, enableLongTask: i3, enableLongAnimationFrame: s3, _experiments: { enableInteractions: u3, enableStandaloneClsSpans: p3, enableStandaloneLcpSpans: f2 }, beforeStartSpan: y3, idleTimeout: h2, finalTimeout: m2, childSpanTimeout: M2, markBackgroundSpan: w2, traceFetch: E2, traceXHR: S2, trackFetchStreamPerformance: P2, shouldCreateSpanForRequest: T2, enableHTTPTimings: O2, ignoreResourceSpans: R2, ignorePerformanceApiSpans: A2, instrumentPageLoad: x2, instrumentNavigation: N2, detectRedirects: j2, linkPreviousTrace: I2, consistentTraceSampling: C2, enableReportPageLoaded: B2, onRequestSpanStart: L2, onRequestSpanEnd: D2 } = { ...oE, ...e12 }, K2 = ow();
        function F2(e13, t13, o12 = true, i4) {
          let s4 = "pageload" === t13.op, l2 = t13.name, u4 = y3 ? y3(t13) : t13, d2 = t2(i4 || tf()), c2 = { ...d2?.pathname && { [tQ]: d2.pathname }, ...d2 && !t1(d2) && { [tV]: d2.href }, ...u4.attributes };
          if (l2 !== u4.name && (c2[$.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "custom"), u4.attributes = c2, !o12) {
            let e14 = (0, er.dateTimestampInSeconds)();
            (0, aP.startInactiveSpan)({ ...u4, startTime: e14 }).end(e14);
            return;
          }
          a12.name = u4.name, a12.source = c2[$.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          let p4 = aR(u4, { idleTimeout: h2, finalTimeout: m2, childSpanTimeout: M2, disableAutoFinish: s4, beforeSpanEnd: (t14) => {
            !(function(e14, t15) {
              let r13 = nC(), a14 = (0, er.browserPerformanceTimeOrigin)();
              if (!r13?.getEntries || !a14) return;
              let { spanStreamingEnabled: n13, ignorePerformanceApiSpans: o13, ignoreResourceSpans: i5 } = t15, s5 = nB(a14), l3 = r13.getEntries(), { op: u5, start_timestamp: d3 } = (0, U.spanToJSON)(e14);
              l3.slice(nq).forEach((t16) => {
                let r14 = nB(t16.startTime), a15 = nB(Math.max(0, t16.duration));
                if ("navigation" !== u5 || !d3 || !(s5 + r14 < d3)) switch (t16.entryType) {
                  case "navigation":
                    var n14, l4, c3, p5, f4, y4;
                    let h3, g2, _2;
                    n14 = e14, l4 = t16, c3 = s5, ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((e15) => {
                      nX(n14, l4, e15, c3);
                    }), nX(n14, l4, "secureConnection", c3, "TLS/SSL"), nX(n14, l4, "fetch", c3, "cache"), nX(n14, l4, "domainLookup", c3, "DNS"), p5 = n14, f4 = l4, h3 = (y4 = c3) + nB(f4.requestStart), g2 = y4 + nB(f4.responseEnd), _2 = y4 + nB(f4.responseStart), f4.responseEnd && (nj(p5, h3, g2, { op: "browser.request", name: f4.name, attributes: { [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics" } }), nj(p5, _2, g2, { op: "browser.response", name: f4.name, attributes: { [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics" } }));
                    break;
                  case "mark":
                  case "paint":
                  case "measure":
                    !(function(e15, t17, r15, a16, n15, o14) {
                      if ((function(e16) {
                        if (e16?.entryType === "measure") try {
                          return "Components \u269B" === e16.detail.devtools.track;
                        } catch {
                          return;
                        }
                      })(t17) || ["mark", "measure"].includes(t17.entryType) && (0, k.stringMatchesSomePattern)(t17.name, o14)) return;
                      let i6 = aL(false), s6 = n15 + Math.max(r15, nB(i6 ? i6.requestStart : 0)), l5 = n15 + r15, u6 = l5 + a16, d4 = { [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.resource.browser.metrics" };
                      s6 !== l5 && (d4["sentry.browser.measure_happened_before_request"] = true, d4["sentry.browser.measure_start_time"] = s6), (function(e16, t18) {
                        try {
                          let r16 = t18.detail;
                          if (!r16) return;
                          if ("object" == typeof r16) {
                            for (let [t19, a17] of Object.entries(r16)) if (a17 && (0, ee.isPrimitive)(a17)) e16[`sentry.browser.measure.detail.${t19}`] = a17;
                            else if (void 0 !== a17) try {
                              e16[`sentry.browser.measure.detail.${t19}`] = JSON.stringify(a17);
                            } catch {
                            }
                            return;
                          }
                          if ((0, ee.isPrimitive)(r16)) {
                            e16["sentry.browser.measure.detail"] = r16;
                            return;
                          }
                          try {
                            e16["sentry.browser.measure.detail"] = JSON.stringify(r16);
                          } catch {
                          }
                        } catch {
                        }
                      })(d4, t17), s6 <= u6 && nj(e15, s6, u6, { name: t17.name, op: t17.entryType, attributes: d4 });
                    })(e14, t16, r14, a15, s5, o13);
                    break;
                  case "resource":
                    !(function(e15, t17, r15, a16, n15, o14, i6) {
                      var s6, l5;
                      if ("xmlhttprequest" === t17.initiatorType || "fetch" === t17.initiatorType) return;
                      let u6 = t17.initiatorType ? `resource.${t17.initiatorType}` : "resource.other";
                      if (i6?.includes(u6)) return;
                      let d4 = { [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.resource.browser.metrics" }, c4 = t6(r15);
                      c4.protocol && (d4["url.scheme"] = c4.protocol.split(":").pop()), c4.host && (d4["server.address"] = c4.host), d4["url.same_origin"] = r15.includes(t9.location.origin), d4[tV] = r15, s6 = t17, l5 = d4, [["responseStatus", "http.response.status_code"], ["transferSize", "http.response_transfer_size"], ["encodedBodySize", "http.response_content_length"], ["decodedBodySize", "http.decoded_response_content_length"], ["renderBlockingStatus", "resource.render_blocking_status"], ["deliveryType", "http.response_delivery_type"]].forEach(([e16, t18]) => {
                        let r16 = s6[e16];
                        null != r16 && ("number" == typeof r16 && r16 < 2147483647 || "string" == typeof r16) && (l5[t18] = r16);
                      });
                      let p6 = { ...d4, ...nW(t17) }, f5 = o14 + a16;
                      nj(e15, f5, f5 + n15, { name: r15.replace(t9.location.origin, ""), op: u6, attributes: p6 });
                    })(e14, t16, t16.name, r14, a15, s5, i5);
                }
              }), nq = Math.max(l3.length - 1, 0), (function(e15, t16) {
                let r14 = t9.navigator;
                if (!r14) return;
                let a15 = r14.connection;
                a15 && (a15.effectiveType && e15.setAttribute(t16 ? "network.connection.effective_type" : "effectiveConnectionType", a15.effectiveType), a15.type && e15.setAttribute(t16 ? "network.connection.type" : "connectionType", a15.type), nN(a15.rtt) && (t16 ? e15.setAttribute("network.connection.rtt", a15.rtt) : "pageload" === (0, U.spanToJSON)(e15).op && (0, aj.setMeasurement)("connection.rtt", a15.rtt, "millisecond"))), nN(r14.deviceMemory) && (t16 ? e15.setAttribute("device.memory.estimated_capacity", r14.deviceMemory) : e15.setAttribute("deviceMemory", `${r14.deviceMemory} GB`)), nN(r14.hardwareConcurrency) && (t16 ? e15.setAttribute("device.processor_count", r14.hardwareConcurrency) : e15.setAttribute("hardwareConcurrency", String(r14.hardwareConcurrency)));
              })(e14, n13);
            })(t14, { ignoreResourceSpans: R2, ignorePerformanceApiSpans: A2, spanStreamingEnabled: (0, ev.hasSpanStreamingEnabled)(e13) }), oO(e13, void 0);
            let a13 = (0, v.getCurrentScope)(), n12 = a13.getPropagationContext();
            a13.setPropagationContext({ ...n12, traceId: p4.spanContext().traceId, sampled: (0, U.spanIsSampled)(p4), dsc: (0, en.getDynamicSamplingContextFromSpan)(t14) }), s4 && (r12 = void 0);
          }, trimIdleSpanEndTimestamp: !B2 });
          function f3() {
            n11 && ["interactive", "complete"].includes(n11.readyState) && (e13.emit("idleSpanEnableAutoFinish", p4), n11.removeEventListener("readystatechange", f3));
          }
          s4 && B2 && (r12 = p4), oO(e13, p4), s4 && !B2 && n11 && (n11.addEventListener("readystatechange", f3), f3());
        }
        return { name: "BrowserTracing", setup(e13) {
          if (K2) {
            ry && g.debug.log("[Tracing] Skipping browserTracingIntegration setup for bot user agent.");
            return;
          }
          function a13() {
            let e14 = (0, U.getActiveSpan)(), t13 = e14 && (0, U.getRootSpan)(e14);
            if (t13) {
              let e15 = "internal_error";
              b.DEBUG_BUILD && g.debug.log(`[Tracing] Root span: ${e15} -> Global error occurred`), t13.setStatus({ code: aS.SPAN_STATUS_ERROR, message: e15 });
            }
          }
          if (ax || (ax = true, rL(a13), rK(a13)), s3 && _.GLOBAL_OBJ.PerformanceObserver && PerformanceObserver.supportedEntryTypes?.includes("long-animation-frame") ? new PerformanceObserver((e14) => {
            let t13 = (0, U.getActiveSpan)();
            if (t13) for (let r13 of e14.getEntries()) {
              if (!r13.scripts[0]) continue;
              let e15 = nB((0, er.browserPerformanceTimeOrigin)() + r13.startTime), { start_timestamp: a14, op: n12 } = (0, U.spanToJSON)(t13);
              if ("navigation" === n12 && a14 && e15 < a14) continue;
              let o13 = nB(r13.duration), i4 = { [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics" }, { invoker: s4, invokerType: l2, sourceURL: u4, sourceFunctionName: d2, sourceCharPosition: c2 } = r13.scripts[0];
              i4["browser.script.invoker"] = s4, i4["browser.script.invoker_type"] = l2, u4 && (i4["code.filepath"] = u4), d2 && (i4["code.function"] = d2), -1 !== c2 && (i4["browser.script.source_char_position"] = c2), nj(t13, e15, e15 + o13, { name: "Main UI thread blocked", op: "ui.long-animation-frame", attributes: i4 });
            }
          }).observe({ type: "long-animation-frame", buffered: true }) : i3 && nE("longtask", ({ entries: e14 }) => {
            let t13 = (0, U.getActiveSpan)();
            if (!t13) return;
            let { op: r13, start_timestamp: a14 } = (0, U.spanToJSON)(t13);
            for (let n12 of e14) {
              let e15 = nB((0, er.browserPerformanceTimeOrigin)() + n12.startTime), o13 = nB(n12.duration);
              "navigation" === r13 && a14 && e15 < a14 || nj(t13, e15, e15 + o13, { name: "Main UI thread blocked", op: "ui.long-task", attributes: { [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics" } });
            }
          }), u3 && nE("event", ({ entries: e14 }) => {
            let t13 = (0, U.getActiveSpan)();
            if (t13) {
              for (let r13 of e14) if ("click" === r13.name) {
                let e15 = nB((0, er.browserPerformanceTimeOrigin)() + r13.startTime), a14 = nB(r13.duration), n12 = { name: rp(r13.target), op: `ui.interaction.${r13.name}`, startTime: e15, attributes: { [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics" } }, o13 = ty(r13.target);
                o13 && (n12.attributes["ui.component_name"] = o13), nj(t13, e15, e15 + a14, n12);
              }
            }
          }), j2 && n11) {
            let e14 = () => {
              t12 = (0, er.timestampInSeconds)();
            };
            addEventListener("click", e14, { capture: true }), addEventListener("keydown", e14, { capture: true, passive: true });
          }
          function o12() {
            let t13 = e13[oT];
            t13 && !(0, U.spanToJSON)(t13).timestamp && (ry && g.debug.log(`[Tracing] Finishing current active span with op: ${(0, U.spanToJSON)(t13).op}`), t13.setAttribute($.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "cancelled"), t13.end());
          }
          e13.on("startNavigationSpan", (r13, a14) => {
            if ((0, v.getClient)() !== e13) return;
            if (a14?.isRedirect) {
              ry && g.debug.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span."), F2(e13, { op: "navigation.redirect", ...r13 }, false, a14.url);
              return;
            }
            t12 = void 0, o12(), (0, v.getIsolationScope)().setPropagationContext({ traceId: (0, ak.generateTraceId)(), sampleRand: Math.random(), propagationSpanId: (0, aE.hasSpansEnabled)() ? void 0 : (0, ak.generateSpanId)() });
            let n12 = (0, v.getCurrentScope)();
            n12.setPropagationContext({ traceId: (0, ak.generateTraceId)(), sampleRand: Math.random(), propagationSpanId: (0, aE.hasSpansEnabled)() ? void 0 : (0, ak.generateSpanId)() }), n12.setSDKProcessingMetadata({ normalizedRequest: void 0 }), F2(e13, { op: "navigation", ...r13, parentSpan: null, forceTransaction: true }, true, a14?.url);
          }), e13.on("startPageLoadSpan", (t13, r13 = {}) => {
            if ((0, v.getClient)() !== e13) return;
            o12();
            let a14 = r13.sentryTrace || oS("sentry-trace") || oP("sentry-trace"), n12 = r13.baggage || oS("baggage") || oP("baggage"), i4 = (0, aN.propagationContextFromHeaders)(a14, n12), s4 = (0, v.getCurrentScope)();
            s4.setPropagationContext(i4), (0, aE.hasSpansEnabled)() || (s4.getPropagationContext().propagationSpanId = (0, ak.generateSpanId)()), s4.setSDKProcessingMetadata({ normalizedRequest: tM() }), F2(e13, { op: "pageload", ...t13 });
          }), e13.on("endPageloadSpan", () => {
            B2 && r12 && (r12.setAttribute($.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "reportPageLoaded"), r12.end());
          });
        }, afterAllSetup(e13) {
          var r13, n12, i4, s4, y4;
          let _2;
          if (K2) return;
          e13.addIntegration && !e13.getIntegrationByName?.(n7) && e13.addIntegration(((e14 = {}) => {
            let t13 = new Set(e14.ignore ?? []);
            return { name: n7, setup(r14) {
              let a13 = (0, ev.hasSpanStreamingEnabled)(r14), { enableStandaloneClsSpans: n13, enableStandaloneLcpSpans: o12 } = e14._experiments ?? {}, i5 = a13 || t13.has("cls") ? void 0 : n13 || false, s5 = a13 || t13.has("lcp") ? void 0 : o12 || false, u4 = (function({ recordClsStandaloneSpans: e15, recordLcpStandaloneSpans: t14, client: r15 }) {
                let a14 = nC();
                if (a14 && (0, er.browserPerformanceTimeOrigin)()) {
                  a14.mark && t9.performance.mark("sentry-tracing-init");
                  let n14 = t14 ? (function(e16) {
                    let t15, r16 = 0;
                    if (!nL("largest-contentful-paint")) return;
                    let a15 = nM(({ metric: e17 }) => {
                      let a16 = e17.entries[e17.entries.length - 1];
                      a16 && nK(e17.value) && (r16 = e17.value, t15 = a16);
                    }, true);
                    nD(e16, (e17, n15) => {
                      (function(e18, t16, r17, a16) {
                        if (!nK(e18)) return;
                        at && g.debug.log(`Sending LCP span (${e18})`);
                        let n16 = nB(((0, er.browserPerformanceTimeOrigin)() || 0) + (t16?.startTime || 0)), o14 = (0, v.getCurrentScope)().getScopeData().transactionName, i7 = t16 ? rp(t16.element) : "Largest contentful paint", s7 = { [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.lcp", [$.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.lcp", [$.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0, "sentry.pageload.span_id": r17, "sentry.report_event": a16 };
                        t16 && (t16.element && (s7["lcp.element"] = rp(t16.element)), t16.id && (s7["lcp.id"] = t16.id), t16.url && (s7["lcp.url"] = t16.url), null != t16.loadTime && (s7["lcp.loadTime"] = t16.loadTime), null != t16.renderTime && (s7["lcp.renderTime"] = t16.renderTime), null != t16.size && (s7["lcp.size"] = t16.size));
                        let l2 = nI({ name: i7, transaction: o14, attributes: s7, startTime: n16 });
                        l2 && (l2.addEvent("lcp", { [$.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "millisecond", [$.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: e18 }), l2.end(n16));
                      })(r16, t15, n15, e17), a15();
                    });
                  })(r15) : false === t14 ? nM(({ metric: e16 }) => {
                    let t15 = e16.entries[e16.entries.length - 1];
                    t15 && nK(e16.value) && (nY.lcp = { value: e16.value, unit: "millisecond" }, d = t15);
                  }, true) : void 0, o13 = e15 ? (function(e16) {
                    let t15, r16 = 0;
                    if (!nL("layout-shift")) return;
                    let a15 = nm(({ metric: e17 }) => {
                      let a16 = e17.entries[e17.entries.length - 1];
                      a16 && (r16 = e17.value, t15 = a16);
                    }, true);
                    nD(e16, (e17, n15) => {
                      var o14, i7, s7, l2;
                      let u5, d2, c2, p5, f3;
                      o14 = r16, i7 = t15, s7 = n15, l2 = e17, at && g.debug.log(`Sending CLS span (${o14})`), u5 = i7 ? nB(((0, er.browserPerformanceTimeOrigin)() || 0) + i7.startTime) : (0, er.timestampInSeconds)(), d2 = (0, v.getCurrentScope)().getScopeData().transactionName, c2 = i7 ? rp(i7.sources[0]?.node) : "Layout shift", p5 = { [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.cls", [$.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.cls", [$.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0, "sentry.pageload.span_id": s7, "sentry.report_event": l2 }, i7?.sources && i7.sources.forEach((e18, t16) => {
                        p5[`cls.source.${t16 + 1}`] = rp(e18.node);
                      }), (f3 = nI({ name: c2, transaction: d2, attributes: p5, startTime: u5 })) && (f3.addEvent("cls", { [$.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "", [$.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: o14 }), f3.end(u5)), a15();
                    });
                  })(r15) : false === e15 ? nm(({ metric: e16 }) => {
                    let t15 = e16.entries[e16.entries.length - 1];
                    t15 && (nY.cls = { value: e16.value, unit: "" }, c = t15);
                  }, true) : void 0, i6 = nO("ttfb", ({ metric: e16 }) => {
                    e16.entries[e16.entries.length - 1] && (nY.ttfb = { value: e16.value, unit: "millisecond" });
                  }, nP, l), s6 = nE("paint", ({ entries: e16 }) => {
                    let t15 = aW();
                    for (let r16 of e16) {
                      let e17 = r16.startTime < t15.firstHiddenTime;
                      "first-paint" === r16.name && e17 && (nY.fp = { value: r16.startTime, unit: "millisecond" }), "first-contentful-paint" === r16.name && e17 && (nY.fcp = { value: r16.startTime, unit: "millisecond" });
                    }
                  });
                  return () => {
                    i6(), s6(), n14?.(), o13?.();
                  };
                }
                return () => void 0;
              })({ recordClsStandaloneSpans: i5, recordLcpStandaloneSpans: s5, client: r14 }), p4 = /* @__PURE__ */ new WeakSet();
              r14.on("afterStartPageLoadSpan", (e15) => {
                p4.add(e15);
              }), r14.on("spanEnd", (e15) => {
                p4.delete(e15) && (u4(), (function(e16, t14) {
                  let r15 = (0, er.browserPerformanceTimeOrigin)();
                  if (!nC()?.getEntries || !r15) return nz();
                  let { spanStreamingEnabled: a14, recordClsOnPageloadSpan: n14, recordLcpOnPageloadSpan: o13 } = t14, i6 = nB(r15);
                  if ("pageload" === (0, U.spanToJSON)(e16).op) {
                    if ((function(e17) {
                      let t15 = aL(false);
                      if (!t15) return;
                      let { responseStart: r16, requestStart: a15 } = t15;
                      a15 <= r16 && (e17["ttfb.requestTime"] = { value: r16 - a15, unit: "millisecond" });
                    })(nY), a14) {
                      let t15 = (t16, r16, a15) => {
                        let n15 = a15 ?? `browser.web_vital.${t16}.value`;
                        e16.setAttribute(n15, r16), at && g.debug.log("Setting web vital attribute", { [n15]: r16 }, "on pageload span");
                      };
                      ["ttfb", "fp", "fcp"].forEach((e17) => {
                        nY[e17] && t15(e17, nY[e17].value);
                      }), nY["ttfb.requestTime"] && t15("ttfb.requestTime", nY["ttfb.requestTime"].value, "browser.web_vital.ttfb.request_time");
                    } else {
                      var s6, l2;
                      n14 || delete nY.cls, o13 || delete nY.lcp, Object.entries(nY).forEach(([t15, r16]) => {
                        (0, aj.setMeasurement)(t15, r16.value, r16.unit, e16);
                      }), s6 = e16, l2 = t14, d && l2.recordLcpOnPageloadSpan && (d.element && s6.setAttribute("lcp.element", rp(d.element)), d.id && s6.setAttribute("lcp.id", d.id), d.url && s6.setAttribute("lcp.url", d.url.trim().slice(0, 200)), null != d.loadTime && s6.setAttribute("lcp.loadTime", d.loadTime), null != d.renderTime && s6.setAttribute("lcp.renderTime", d.renderTime), s6.setAttribute("lcp.size", d.size)), c?.sources && l2.recordClsOnPageloadSpan && c.sources.forEach((e17, t15) => s6.setAttribute(`cls.source.${t15 + 1}`, rp(e17.node)));
                    }
                    e16.setAttribute(a14 ? "browser.performance.time_origin" : "performance.timeOrigin", i6), e16.setAttribute(a14 ? "browser.performance.navigation.activation_start" : "performance.activationStart", a$());
                  }
                  nz();
                })(e15, { recordClsOnPageloadSpan: false === i5, recordLcpOnPageloadSpan: false === s5, spanStreamingEnabled: a13 }));
              }), a13 ? (t13.has("lcp") || (function(e15) {
                let t14, r15 = 0;
                if (!nL("largest-contentful-paint")) return;
                let a14 = nM(({ metric: e16 }) => {
                  let a15 = e16.entries[e16.entries.length - 1];
                  a15 && nK(e16.value) && (r15 = e16.value, t14 = a15);
                }, true);
                nD(e15, (e16, n14, o13) => {
                  (function(e17, t15, r16, a15) {
                    if (!nK(e17)) return;
                    at && g.debug.log(`Sending LCP span (${e17})`);
                    let n15 = (0, er.browserPerformanceTimeOrigin)() || 0, o14 = nB(n15), i6 = nB(n15 + (t15?.startTime || 0)), s6 = t15 ? rp(t15.element) : "Largest contentful paint", l2 = {};
                    t15?.element && (l2["browser.web_vital.lcp.element"] = rp(t15.element)), t15?.id && (l2["browser.web_vital.lcp.id"] = t15.id), t15?.url && (l2["browser.web_vital.lcp.url"] = t15.url), t15?.loadTime != null && (l2["browser.web_vital.lcp.load_time"] = t15.loadTime), t15?.renderTime != null && (l2["browser.web_vital.lcp.render_time"] = t15.renderTime), t15?.size != null && (l2["browser.web_vital.lcp.size"] = t15.size), n8({ name: s6, op: "ui.webvital.lcp", origin: "auto.http.browser.lcp", metricName: "lcp", value: e17, attributes: l2, parentSpan: r16, reportEvent: a15, startTime: o14, endTime: i6 });
                  })(r15, t14, o13, e16), a14();
                });
              })(r14), t13.has("cls") || (function(e15) {
                let t14, r15 = 0;
                if (!nL("layout-shift")) return;
                let a14 = nm(({ metric: e16 }) => {
                  let a15 = e16.entries[e16.entries.length - 1];
                  a15 && (r15 = e16.value, t14 = a15);
                }, true);
                nD(e15, (e16, n14, o13) => {
                  var i6, s6, l2, u5;
                  let d2, c2, p5;
                  i6 = r15, s6 = t14, l2 = o13, u5 = e16, at && g.debug.log(`Sending CLS span (${i6})`), d2 = s6 ? nB(((0, er.browserPerformanceTimeOrigin)() || 0) + s6.startTime) : (0, er.timestampInSeconds)(), c2 = s6 ? rp(s6.sources[0]?.node) : "Layout shift", p5 = {}, s6?.sources && s6.sources.forEach((e17, t15) => {
                    p5[`browser.web_vital.cls.source.${t15 + 1}`] = rp(e17.node);
                  }), n8({ name: c2, op: "ui.webvital.cls", origin: "auto.http.browser.cls", metricName: "cls", value: i6, attributes: p5, parentSpan: l2, reportEvent: u5, startTime: d2 }), a14();
                });
              })(r14), !t13.has("inp") && nC() && (0, er.browserPerformanceTimeOrigin)() && nw(({ metric: e15 }) => {
                var t14, r15, a14;
                let n14, o13, i6, s6, l2, u5, d2, c2;
                if (null == e15.value || nB(e15.value) > 60) return;
                let p5 = e15.entries.find((t15) => t15.duration === e15.value && n6[t15.name]);
                p5 && (t14 = e15.value, r15 = p5, at && g.debug.log(`Sending INP span (${t14})`), n14 = nB((0, er.browserPerformanceTimeOrigin)() + r15.startTime), o13 = nB(t14), i6 = n6[r15.name], s6 = null != (a14 = r15.interactionId) ? n2.get(a14) : void 0, u5 = (l2 = (0, U.getActiveSpan)()) ? (0, U.getRootSpan)(l2) : void 0, c2 = (d2 = s6?.span || u5) ? (0, U.spanToStreamedSpanJSON)(d2).name : (0, v.getCurrentScope)().getScopeData().transactionName, n8({ name: s6?.elementName || rp(r15.target), op: `ui.interaction.${i6}`, origin: "auto.http.browser.inp", metricName: "inp", value: t14, attributes: { [$.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: r15.duration, [tJ]: c2, [tX]: c2 }, startTime: n14, endTime: n14 + o13, parentSpan: d2 }));
              })) : t13.has("inp") || (function() {
                if (nC() && (0, er.browserPerformanceTimeOrigin)()) {
                  let e15 = nw(n4);
                  () => {
                    e15();
                  };
                }
              })();
            }, afterAllSetup() {
              t13.has("inp") || (function() {
                let e15 = Object.keys(n6);
                function t14(e16) {
                  let t15 = e16.target;
                  if (!t15) return;
                  let r15 = rp(t15), a13 = Math.round(e16.timeStamp);
                  if (n3.set(a13, r15), n3.size > 50) {
                    let e17 = n3.keys().next().value;
                    void 0 !== e17 && n3.delete(e17);
                  }
                }
                ec() && e15.forEach((e16) => {
                  t9.addEventListener(e16, t14, { capture: true, passive: true });
                });
                let r14 = ({ entries: e16 }) => {
                  let t15 = (0, U.getActiveSpan)(), r15 = t15 && (0, U.getRootSpan)(t15);
                  e16.forEach((e17) => {
                    if (!("duration" in e17)) return;
                    let t16 = e17.interactionId;
                    if (null == t16 || n2.has(t16)) return;
                    let a13 = e17.target ? rp(e17.target) : (function(e18) {
                      let t17 = Math.round(e18.startTime), r16 = n3.get(t17);
                      if (!r16) for (let e19 = -5; e19 <= 5; e19++) {
                        let a14 = n3.get(t17 + e19);
                        if (a14) {
                          r16 = a14;
                          break;
                        }
                      }
                      return r16 || "<unknown>";
                    })(e17);
                    if (n1.length > 10) {
                      let e18 = n1.shift();
                      n2.delete(e18);
                    }
                    n1.push(t16), n2.set(t16, { span: r15, elementName: a13 });
                  });
                };
                nE("event", r14), nE("first-input", r14);
              })();
            } };
          })({ ignore: o11 ? [] : ["inp"], _experiments: { enableStandaloneClsSpans: p3, enableStandaloneLcpSpans: f2 } }));
          let b2 = tf();
          if ("off" !== I2 && (function(e14, { linkPreviousTrace: t13, consistentTraceSampling: r14 }) {
            let a13 = "session-storage" === t13, n13 = a13 ? (function() {
              try {
                let e15 = tg.sessionStorage?.getItem(or);
                return JSON.parse(e15);
              } catch {
                return;
              }
            })() : void 0;
            e14.on("spanStart", (e15) => {
              if ((0, U.getRootSpan)(e15) !== e15) return;
              let t14 = (0, v.getCurrentScope)().getPropagationContext();
              n13 = (function(e16, t15, r15) {
                let a14 = (0, U.spanToJSON)(t15), n14 = { spanContext: t15.spanContext(), startTimestamp: a14.start_timestamp, sampleRate: (function() {
                  try {
                    let e17 = Number(a14.data?.[$.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] ?? r15.dsc?.sample_rate);
                    return Number.isNaN(e17) ? 0 : e17;
                  } catch {
                    return 0;
                  }
                })(), sampleRand: r15.sampleRand };
                if (!e16) return n14;
                let o13 = e16.spanContext;
                return o13.traceId === a14.trace_id ? e16 : (Date.now() / 1e3 - e16.startTimestamp <= 3600 && (ry && g.debug.log(`Adding previous_trace \`${JSON.stringify(o13)}\` link to span \`${JSON.stringify({ op: a14.op, ...t15.spanContext() })}\``), t15.addLink({ context: o13, attributes: { [$.SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE]: "previous_trace" } }), t15.setAttribute("sentry.previous_trace", `${o13.traceId}-${o13.spanId}-${+!!oa(o13)}`)), n14);
              })(n13, e15, t14), a13 && (function(e16) {
                try {
                  tg.sessionStorage.setItem(or, JSON.stringify(e16));
                } catch (e17) {
                  ry && g.debug.warn("Could not store previous trace in sessionStorage", e17);
                }
              })(n13);
            });
            let o12 = true;
            r14 && e14.on("beforeSampling", (e15) => {
              if (!n13) return;
              let t14 = (0, v.getCurrentScope)(), r15 = t14.getPropagationContext();
              if (o12 && r15.parentSpanId) {
                o12 = false;
                return;
              }
              t14.setPropagationContext({ ...r15, dsc: { ...r15.dsc, sample_rate: String(n13.sampleRate), sampled: String(oa(n13.spanContext)) }, sampleRand: n13.sampleRand }), e15.parentSampled = oa(n13.spanContext), e15.parentSampleRate = n13.sampleRate, e15.spanAttributes = { ...e15.spanAttributes, [$.SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE]: n13.sampleRate };
            });
          })(e13, { linkPreviousTrace: I2, consistentTraceSampling: C2 }), tg.location) {
            if (x2) {
              let t13 = (0, er.browserPerformanceTimeOrigin)();
              ov(e13, { name: tg.location.pathname, startTime: t13 ? t13 / 1e3 : void 0, attributes: { [$.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url", [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.pageload.browser" } });
            }
            N2 && rs(({ to: r14, from: a13 }) => {
              var n13, o12;
              let i5, s5;
              if (void 0 === a13 && b2?.indexOf(r14) !== -1) {
                b2 = void 0;
                return;
              }
              b2 = void 0;
              let l2 = t2(r14), u4 = e13[oT], d2 = u4 && j2 && (n13 = u4, o12 = t12, i5 = (0, U.spanToJSON)(n13), !((s5 = (0, er.dateTimestampInSeconds)()) - i5.start_timestamp > 1.5) && (!o12 || !(s5 - o12 <= 1.5)));
              ob(e13, { name: l2?.pathname || tg.location.pathname, attributes: { [$.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url", [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.browser" } }, { url: r14, isRedirect: d2 });
            });
          }
          w2 && (tg.document ? tg.document.addEventListener("visibilitychange", () => {
            let e14 = (0, U.getActiveSpan)();
            if (!e14) return;
            let t13 = (0, U.getRootSpan)(e14);
            if (tg.document.hidden && t13) {
              let e15 = "cancelled", { op: r14, status: a13 } = (0, U.spanToJSON)(t13);
              ry && g.debug.log(`[Tracing] Transaction: ${e15} -> since tab moved to the background, op: ${r14}`), a13 || t13.setStatus({ code: aS.SPAN_STATUS_ERROR, message: e15 }), t13.setAttribute("sentry.cancellation_reason", "document.hidden"), t13.end();
            }
          }) : ry && g.debug.warn("[Tracing] Could not set up background tab detection due to lack of global document")), u3 && (r13 = e13, n12 = h2, i4 = m2, s4 = M2, y4 = a12, tg.document && addEventListener("click", () => {
            let e14 = "ui.action.click", t13 = r13[oT];
            if (t13 && ["navigation", "pageload"].includes((0, U.spanToJSON)(t13).op)) {
              ry && g.debug.warn(`[Tracing] Did not create ${e14} span because a pageload or navigation span is in progress.`);
              return;
            }
            if (_2 && (_2.setAttribute($.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "interactionInterrupted"), _2.end(), _2 = void 0), !y4.name) {
              ry && g.debug.warn(`[Tracing] Did not create ${e14} transaction because _latestRouteName is missing.`);
              return;
            }
            _2 = aR({ name: y4.name, op: e14, attributes: { [$.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: y4.source || "url" } }, { idleTimeout: n12, finalTimeout: i4, childSpanTimeout: s4 });
          }, { capture: true })), (function(e14, t13) {
            let { traceFetch: r14, traceXHR: a13, shouldCreateSpanForRequest: n13, enableHTTPTimings: o12, tracePropagationTargets: i5, onRequestSpanStart: s5, onRequestSpanEnd: l2 } = { ...og, ...t13 }, u4 = "function" == typeof n13 ? n13 : (e15) => true, d2 = (e15) => (function(e16, t14) {
              let r15 = tf();
              if (r15) {
                let a14, n14;
                try {
                  a14 = new URL(e16, r15), n14 = new URL(r15).origin;
                } catch {
                  return false;
                }
                let o13 = a14.origin === n14;
                return t14 ? (0, k.stringMatchesSomePattern)(a14.toString(), t14) || o13 && (0, k.stringMatchesSomePattern)(a14.pathname, t14) : o13;
              }
              {
                let r16 = !!e16.match(/^\/(?!\/)/);
                return t14 ? (0, k.stringMatchesSomePattern)(e16, t14) : r16;
              }
            })(e15, i5), c2 = {}, p4 = e14.getOptions().propagateTraceparent;
            r14 && tB((t14) => {
              let r15 = (function(e15, t15, r16, a14, n14) {
                if (!e15.fetchData) return;
                let { method: o13, url: i6 } = e15.fetchData, s6 = (0, aE.hasSpansEnabled)() && t15(i6);
                if (e15.endTimestamp) {
                  var l3, u5, d3;
                  let t16, r17 = e15.fetchData.__span;
                  if (!r17) return;
                  let o14 = a14[r17];
                  o14 && (s6 && ((function(e16, t17) {
                    if (t17.response) {
                      (0, aS.setHttpStatus)(e16, t17.response.status);
                      let r18 = t17.response?.headers?.get("content-length");
                      if (r18) {
                        let t18 = parseInt(r18);
                        t18 > 0 && e16.setAttribute("http.response_content_length", t18);
                      }
                    } else t17.error && e16.setStatus({ code: aS.SPAN_STATUS_ERROR, message: "internal_error" });
                    e16.end();
                  })(o14, e15), l3 = o14, u5 = e15, t16 = "object" == typeof (d3 = n14) && null !== d3 ? d3.onRequestSpanEnd : void 0, t16?.(l3, { headers: u5.response?.headers, error: u5.error })), delete a14[r17]);
                  return;
                }
                let { spanOrigin: c3 = "auto.http.browser", propagateTraceparent: p5 = false } = "object" == typeof n14 ? n14 : { spanOrigin: n14 }, f3 = (0, v.getClient)(), y5 = !!(0, U.getActiveSpan)(), h3 = y5 || !!f3 && (0, ev.hasSpanStreamingEnabled)(f3), g2 = s6 && h3 ? (0, aP.startInactiveSpan)((function(e16, t16, r17) {
                  if (e16.startsWith("data:")) {
                    let a16 = t5(e16);
                    return { name: `${t16} ${a16}`, attributes: od(e16, void 0, t16, r17) };
                  }
                  let a15 = t2(e16), n15 = a15 ? t3(a15) : e16;
                  return { name: `${t16} ${n15}`, attributes: od(e16, a15, t16, r17) };
                })(i6, o13, c3)) : new av.SentryNonRecordingSpan(), _3 = (0, aP.spanIsIgnored)(g2) && y5 ? void 0 : g2;
                if (s6 && !h3 && f3?.recordDroppedEvent("no_parent_span", "span"), e15.fetchData.__span = g2.spanContext().spanId, a14[g2.spanContext().spanId] = g2, r16(e15.fetchData.url)) {
                  let t16 = e15.args[0], r17 = { ...e15.args[1] || {} }, a15 = (function(e16, t17, r18, a16) {
                    var n15, o14;
                    let i7 = os({ span: r18, propagateTraceparent: a16 }), s7 = i7["sentry-trace"], l4 = i7.baggage, u6 = i7.traceparent;
                    if (!s7) return;
                    let d4 = t17.headers || ((0, ee.isRequest)(e16) ? e16.headers : void 0);
                    if (!d4) return { "sentry-trace": s7, ...l4 && { baggage: l4 }, ...u6 && { traceparent: u6 } };
                    if (n15 = d4, "u" > typeof Headers && (0, ee.isInstanceOf)(n15, Headers)) {
                      let e17 = new Headers(d4);
                      if (e17.get("sentry-trace") || e17.set("sentry-trace", s7), a16 && u6 && !e17.get("traceparent") && e17.set("traceparent", u6), l4) {
                        let t18 = e17.get("baggage");
                        t18 ? ou(t18) || e17.set("baggage", `${t18},${l4}`) : e17.set("baggage", l4);
                      }
                      return e17;
                    }
                    if (Array.isArray(o14 = d4) && o14.every((e17) => Array.isArray(e17) && 2 === e17.length && "string" == typeof e17[0])) {
                      let e17 = [...d4];
                      e17.find((e18) => "sentry-trace" === e18[0]) || e17.push(["sentry-trace", s7]), a16 && u6 && !e17.find((e18) => "traceparent" === e18[0]) && e17.push(["traceparent", u6]);
                      let t18 = d4.find((e18) => "baggage" === e18[0] && "string" == typeof e18[1] && ou(e18[1]));
                      return l4 && !t18 && e17.push(["baggage", l4]), e17;
                    }
                    {
                      let e17 = "sentry-trace" in d4 ? d4["sentry-trace"] : void 0, t18 = "traceparent" in d4 ? d4.traceparent : void 0, r19 = "baggage" in d4 ? d4.baggage : void 0, n16 = r19 ? Array.isArray(r19) ? [...r19] : [r19] : [], o15 = r19 && (Array.isArray(r19) ? r19.find((e18) => ou(e18)) : ou(r19));
                      l4 && !o15 && n16.push(l4);
                      let i8 = Object.assign({}, d4, { "sentry-trace": e17 ?? s7, ...n16.length > 0 && { baggage: n16.join(",") } });
                      return a16 && u6 && !t18 && (i8.traceparent = u6), i8;
                    }
                  })(t16, r17, (0, aE.hasSpansEnabled)() && h3 ? _3 : void 0, p5);
                  a15 && (e15.args[1] = r17, r17.headers = a15);
                }
                if (f3) {
                  let t16 = { input: e15.args, response: e15.response, startTimestamp: e15.startTimestamp, endTimestamp: e15.endTimestamp };
                  f3.emit("beforeOutgoingRequestSpan", g2, t16);
                }
                return g2;
              })(t14, u4, d2, c2, { propagateTraceparent: p4, onRequestSpanEnd: l2 });
              if (r15) {
                let a14 = of(t14.fetchData.url), n14 = a14 ? t6(a14).host : void 0, i6 = a14 ? t5(a14) : void 0;
                r15.setAttributes({ [tz]: i6, [tV]: i6, "server.address": n14 }), o12 && o_(r15, e14), s5?.(r15, { headers: t14.headers });
              }
            }), a13 && rn((t14) => {
              let r15 = (function(e15, t15, r16, a14, n14, o13) {
                let i6 = e15.xhr, s6 = i6?.[ra];
                if (!i6 || i6.__sentry_own_request__ || !s6) return;
                let { url: l3, method: u5 } = s6, d3 = (0, aE.hasSpansEnabled)() && t15(l3);
                if (e15.endTimestamp) {
                  let t16 = i6.__sentry_xhr_span_id__;
                  if (!t16) return;
                  let r17 = a14[t16];
                  r17 && (d3 && void 0 !== s6.status_code && ((0, aS.setHttpStatus)(r17, s6.status_code), r17.end(), o13?.(r17, { headers: oy((function(e16) {
                    let t17;
                    try {
                      t17 = e16.getAllResponseHeaders();
                    } catch (t18) {
                      return at && g.debug.error(t18, "Failed to get xhr response headers", e16), {};
                    }
                    return t17 ? t17.split("\r\n").reduce((e17, t18) => {
                      let [r18, a15] = t18.split(": ");
                      return a15 && (e17[r18.toLowerCase()] = a15), e17;
                    }, {}) : {};
                  })(i6)), error: e15.error })), delete a14[t16]);
                  return;
                }
                let c3 = of(l3), p5 = c3 ? t6(c3) : t6(l3), f3 = c3 ? t5(c3) : void 0, y5 = t5(t4(l3)), h3 = (0, v.getClient)(), _3 = !!(0, U.getActiveSpan)(), m3 = _3 || !!h3 && (0, ev.hasSpanStreamingEnabled)(h3), M3 = d3 && m3 ? (0, aP.startInactiveSpan)({ name: `${u5} ${y5}`, attributes: { url: t5(l3), type: "xhr", "http.method": u5, "http.url": f3, [tV]: f3, "server.address": p5?.host, [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser", [$.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client", ...p5?.search && { "http.query": p5?.search }, ...p5?.hash && { "http.fragment": p5?.hash } } }) : new av.SentryNonRecordingSpan(), w3 = (0, aP.spanIsIgnored)(M3) && _3 ? void 0 : M3;
                return d3 && !m3 && h3?.recordDroppedEvent("no_parent_span", "span"), i6.__sentry_xhr_span_id__ = M3.spanContext().spanId, a14[i6.__sentry_xhr_span_id__] = M3, r16(l3) && (function(e16, t16, r17) {
                  let { "sentry-trace": a15, baggage: n15, traceparent: o14 } = os({ span: t16, propagateTraceparent: r17 });
                  a15 && (function(e17, t17, r18, a16) {
                    let n16 = e17.__sentry_xhr_v3__?.request_headers;
                    if (!n16?.["sentry-trace"] && e17.setRequestHeader) try {
                      if (e17.setRequestHeader("sentry-trace", t17), a16 && !n16?.traceparent && e17.setRequestHeader("traceparent", a16), r18) {
                        let t18 = n16?.baggage;
                        t18 && t18.split(",").some((e18) => e18.trim().startsWith("sentry-")) || e17.setRequestHeader("baggage", r18);
                      }
                    } catch {
                    }
                  })(e16, a15, n15, o14);
                })(i6, (0, aE.hasSpansEnabled)() && m3 ? w3 : void 0, n14), h3 && h3.emit("beforeOutgoingRequestSpan", M3, e15), M3;
              })(t14, u4, d2, c2, p4, l2);
              r15 && (o12 && o_(r15, e14), s5?.(r15, { headers: oy(t14.xhr.__sentry_xhr_v3__?.request_headers) }));
            });
          })(e13, { traceFetch: E2, traceXHR: S2, tracePropagationTargets: e13.getOptions().tracePropagationTargets, shouldCreateSpanForRequest: T2, enableHTTPTimings: O2, onRequestSpanStart: L2, onRequestSpanEnd: D2 }), P2 && e13.addIntegration({ name: "FetchStreamPerformance", setup() {
            let e14;
            tP(e14 = "fetch-body-resolved", (e15) => {
              if (e15.response) {
                let t13 = nV.get(e15.response);
                if (t13 && e15.endTimestamp) {
                  t13.end(e15.endTimestamp);
                  let r14 = nQ.get(e15.response);
                  r14 && clearTimeout(r14);
                }
              }
            }), tT(e14, () => tL(t$)), tB((e15) => {
              if (e15.endTimestamp && e15.response) {
                let t13 = e15.response.headers?.get("content-type") || "";
                if (e15.response.headers?.get("content-length") || !nZ.some((e16) => t13.startsWith(e16))) return;
                let r14 = e15.fetchData?.url || "", a13 = e15.fetchData?.method || "GET", n13 = t2(r14), o12 = r14.startsWith("data:") ? t5(r14) : n13 ? t3(n13) : r14, i5 = (0, aP.startInactiveSpan)({ name: `${a13} ${o12}`, startTime: e15.endTimestamp, attributes: { url: t5(r14), "http.method": a13, type: "fetch", [$.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client.stream", [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.stream" } });
                nV.set(e15.response, i5);
                let s5 = setTimeout(() => {
                  i5.isRecording() && i5.end();
                }, 9e4);
                nQ.set(e15.response, s5);
              }
            });
          } });
        } };
      })({ ...e11, instrumentNavigation: false, instrumentPageLoad: false, onRequestSpanStart(...t12) {
        let [r12, { headers: a12 }] = t12;
        return a12?.get("next-router-prefetch") && r12?.setAttribute("http.request.prefetch", true), e11.onRequestSpanStart?.(...t12);
      } }), { instrumentPageLoad: r11 = true, instrumentNavigation: a11 = true } = e11;
      return { ...t11, afterAllSetup(e12) {
        !ow() && (a11 && (function(e13) {
          if (tg.document.getElementById("__NEXT_DATA__")) oQ.events.on("routeChangeStart", (t12) => {
            let r12, a12, n11 = t4(t12), o11 = (function(e14) {
              let t13 = tg.__BUILD_MANIFEST?.sortedPages;
              if (t13) return t13.find((t14) => {
                let r13, a13, n12, o12 = (r13 = t14.split("/"), a13 = "", r13[r13.length - 1]?.match(/^\[\[\.\.\..+\]\]$/) && (r13.pop(), a13 = "(?:/(.+?))?"), n12 = r13.map((e15) => e15.replace(/^\[\.\.\..+\]$/, "(.+?)").replace(/^\[.*\]$/, "([^/]+?)")).join("/"), RegExp(`^${n12}${a13}(?:/)?$`));
                return e14.match(o12);
              });
            })(n11);
            o11 ? (r12 = o11, a12 = "route") : (r12 = n11, a12 = "url"), ob(e13, { name: r12, attributes: { [$.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "navigation", [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.nextjs.pages_router_instrumentation", [$.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: a12, ..."route" === a12 && { [tZ]: r12 } } }, { url: oA(t12) });
          });
          else {
            let t12, r12, a12;
            f = (t13, r13) => {
              let a13 = h.default.env._sentryBasePath ?? oq._sentryBasePath, n11 = a13 && !t13.startsWith(a13) ? `${a13}${t13}` : t13, o11 = oU(new URL(n11, tg.location.href).pathname), i3 = oD(o11), s3 = i3 ?? o11;
              "router-patch" === oH && (oH = "transition-start-hook");
              let l2 = oW.current;
              l2 ? (l2.updateName(s3), l2.setAttributes({ "navigation.type": `router.${r13}`, [$.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: i3 ? "route" : "url", ...i3 && { [tZ]: i3 } }), oK(l2, o11, n11), oW.current = void 0) : ob(e13, { name: s3, attributes: { [$.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "navigation", [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.nextjs.app_router_instrumentation", [$.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: i3 ? "route" : "url", "navigation.type": `router.${r13}`, ...i3 && { [tZ]: i3 } } }, { url: oA(n11) });
            }, tg.addEventListener("popstate", () => {
              let t13 = oU(tg.location.pathname), r13 = oD(t13);
              oW.current?.isRecording() ? (oW.current.updateName(r13 ?? t13), oW.current.setAttribute($.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, r13 ? "route" : "url"), r13 && oW.current.setAttribute(tZ, r13), oK(oW.current, t13, tg.location.href)) : oW.current = ob(e13, { name: r13 ?? t13, attributes: { [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.nextjs.app_router_instrumentation", [$.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: r13 ? "route" : "url", "navigation.type": "browser.popstate", ...r13 && { [tZ]: r13 } } }, { url: oA(t13) });
            }), t12 = false, r12 = 0, a12 = setInterval(() => {
              r12++;
              let n11 = oG?.next?.router ?? oG?.nd?.router;
              t12 || r12 > 500 ? clearInterval(a12) : n11 && (clearInterval(a12), t12 = true, oX(e13, n11, oW), ["nd", "next"].forEach((t13) => {
                let r13 = oG[t13];
                r13 && (oG[t13] = new Proxy(r13, { set: (t14, r14, a13) => ("router" === r14 && "object" == typeof a13 && null !== a13 && oX(e13, a13, oW), t14[r14] = a13, true) }));
              }));
            }, 20);
          }
        })(e12), t11.afterAllSetup(e12), r11 && (function(e13) {
          if (tg.document.getElementById("__NEXT_DATA__")) !(function(e14) {
            let { route: t12, params: r12, sentryTrace: a12, baggage: n11 } = (function() {
              let e15, t13 = tg.document.getElementById("__NEXT_DATA__");
              if (t13?.innerHTML) try {
                e15 = JSON.parse(t13.innerHTML);
              } catch {
                am && g.debug.warn("Could not extract __NEXT_DATA__");
              }
              if (!e15) return {};
              let r13 = {}, { page: a13, query: n12, props: o12 } = e15;
              return r13.route = a13, r13.params = n12, o12?.pageProps && (r13.sentryTrace = o12.pageProps._sentryTraceData, r13.baggage = o12.pageProps._sentryBaggage), r13;
            })(), o11 = (0, on.parseBaggageHeader)(n11), i3 = t12 || tg.location.pathname;
            o11?.["sentry-transaction"] && "/_error" === i3 && (i3 = (i3 = o11["sentry-transaction"]).replace(/^(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|TRACE|CONNECT)\s+/i, ""));
            let s3 = (0, er.browserPerformanceTimeOrigin)();
            ov(e14, { name: i3, startTime: s3 ? s3 / 1e3 : void 0, attributes: { [$.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "pageload", [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.pageload.nextjs.pages_router_instrumentation", [$.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: t12 ? "route" : "url", ...t12 && { [tZ]: t12 }, ...r12 && { ...r12 } } }, { sentryTrace: a12, baggage: n11 });
          })(e13);
          else {
            let t12, r12, a12;
            r12 = oD(t12 = oU(tg.location.pathname)), ov(e13, { name: r12 ?? t12, startTime: (a12 = (0, er.browserPerformanceTimeOrigin)()) ? a12 / 1e3 : void 0, attributes: { [$.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "pageload", [$.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.pageload.nextjs.app_router_instrumentation", [$.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: r12 ? "route" : "url", ...r12 && { [tZ]: r12 } } });
          }
        })(e12));
      } };
    })()), o10 = io._sentryRewriteFramesAssetPrefixPath || "", i2 = h.default.env._sentryAssetPrefix || io._sentryAssetPrefix, s2 = h.default.env._sentryBasePath || io._sentryBasePath, u2 = "true" === h.default.env._experimentalThirdPartyOriginStackFrames || "true" === io._experimentalThirdPartyOriginStackFrames, n10.push((({ assetPrefix: e11, basePath: t11, rewriteFramesAssetPrefixPath: r11, experimentalThirdPartyOriginStackFrames: a11 }) => ({ ...((e12 = {}) => {
      let t12 = e12.root, r12 = e12.prefix || "app:///", a12 = "window" in _.GLOBAL_OBJ && !!_.GLOBAL_OBJ.window, n11 = e12.iteratee || (function({ isBrowser: e13, root: t13, prefix: r13 }) {
        return (a13) => {
          if (!a13.filename) return a13;
          let n12 = /^[a-zA-Z]:\\/.test(a13.filename) || a13.filename.includes("\\") && !a13.filename.includes("/"), o11 = /^\//.test(a13.filename);
          if (e13) {
            if (t13) {
              let e14 = a13.filename;
              0 === e14.indexOf(t13) && (a13.filename = e14.replace(t13, r13));
            }
          } else if (n12 || o11) {
            let e14, o12, i3 = n12 ? a13.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : a13.filename, s3 = t13 ? (function(e15, t14) {
              e15 = o3(e15).slice(1), t14 = o3(t14).slice(1);
              let r14 = o6(e15.split("/")), a14 = o6(t14.split("/")), n13 = Math.min(r14.length, a14.length), o13 = n13;
              for (let e16 = 0; e16 < n13; e16++) if (r14[e16] !== a14[e16]) {
                o13 = e16;
                break;
              }
              let i4 = [];
              for (let e16 = o13; e16 < r14.length; e16++) i4.push("..");
              return (i4 = i4.concat(a14.slice(o13))).join("/");
            })(t13, i3) : (e14 = i3.length > 1024 ? `<truncated>${i3.slice(-1024)}` : i3, (o12 = o2.exec(e14)) ? o12.slice(1) : [])[2] || "";
            a13.filename = `${r13}${s3}`;
          }
          return a13;
        };
      })({ isBrowser: a12, root: t12, prefix: r12 });
      return { name: "RewriteFrames", processEvent(e13) {
        let t13 = e13;
        return e13.exception && Array.isArray(e13.exception.values) && (t13 = (function(e14) {
          try {
            return { ...e14, exception: { ...e14.exception, values: e14.exception.values.map((e15) => {
              var t14;
              return { ...e15, ...e15.stacktrace && { stacktrace: { ...t14 = e15.stacktrace, frames: t14?.frames?.map((e16) => n11(e16)) } } };
            }) } };
          } catch {
            return e14;
          }
        })(t13)), t13;
      } };
    })({ iteratee: (n11) => {
      if (a11) {
        let r12 = "u" > typeof window && window.location ? window.location.origin : "";
        if (n11.filename?.startsWith(r12) && !n11.filename.endsWith(".js")) return n11;
        if (e11) n11.filename?.startsWith(e11) && (n11.filename = n11.filename.replace(e11, "app://"));
        else if (t11) try {
          let { origin: e12 } = new URL(n11.filename);
          e12 === r12 && (n11.filename = n11.filename?.replace(e12, "app://").replace(t11, ""));
        } catch {
        }
      } else try {
        let { origin: e12 } = new URL(n11.filename);
        n11.filename = n11.filename?.replace(e12, "app://").replace(r11, "");
      } catch {
      }
      return a11 ? n11.filename?.includes("/_next") && (n11.filename = decodeURI(n11.filename)) : n11.filename?.startsWith("app:///_next") && (n11.filename = decodeURI(n11.filename)), n11.filename?.match(o8) && (n11.in_app = false), n11;
    } }), name: "NextjsClientStackFrameNormalization" }))({ assetPrefix: i2, basePath: s2, rewriteFramesAssetPrefixPath: o10, experimentalThirdPartyOriginStackFrames: u2 })), n10), release: "26c6dccc80eeb62f3e98ee6a2e43d9184097e546", ...e10 };
    !(function(e11) {
      let t11 = "/monitoring";
      if (t11 && e11.dsn) {
        let r11 = (0, X.dsnFromString)(e11.dsn);
        if (!r11) return;
        let a11 = r11.host.match(/^o(\d+)\.ingest(?:\.([a-z]{2}))?\.sentry\.io$/);
        if (a11) {
          let n11 = a11[1], o11 = a11[2], i3 = `${t11}?o=${n11}&p=${r11.projectId}`;
          o11 && (i3 += `&r=${o11}`), e11.tunnel = i3, am && g.debug.log(`Tunneling events to "${i3}"`);
        } else am && g.debug.warn("Provided DSN is not a Sentry SaaS DSN. Will not tunnel events.");
      }
    })(p2), w(p2, "nextjs", ["nextjs", "react"]), p2.ignoreSpans = [...p2.ignoreSpans || [], /^\/404$/, RegExp(`^${oF}$`)], w(r10 = { ...p2 }, "react"), (0, E.setContext)("react", { version: af.version }), a10 = (function(e11 = {}) {
      var t11;
      let r11, a11 = !e11.skipBrowserExtensionCheck && !!(function() {
        if (void 0 === tg.window || tg.nw) return false;
        let e12 = tg.chrome || tg.browser;
        if (!e12?.runtime?.id) return false;
        let t12 = tf();
        return !(tg === tg.top && /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(t12));
      })() && (ry && (0, g.consoleSandbox)(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      }), true), n11 = null == e11.defaultIntegrations ? ap() : e11.defaultIntegrations, o11 = { ...e11, enabled: !a11 && e11.enabled, stackParser: (0, F.stackParserFromStackParserOptions)(e11.stackParser || r9), integrations: (function(e12) {
        let t12, r12, a12 = e12.defaultIntegrations || [], n12 = e12.integrations;
        if (a12.forEach((e13) => {
          e13.isDefaultInstance = true;
        }), Array.isArray(n12)) t12 = [...a12, ...n12];
        else if ("function" == typeof n12) {
          let e13 = n12(a12);
          t12 = Array.isArray(e13) ? e13 : [e13];
        } else t12 = a12;
        return r12 = {}, t12.forEach((e13) => {
          let { name: t13 } = e13, a13 = r12[t13];
          a13 && !a13.isDefaultInstance && e13.isDefaultInstance || (r12[t13] = e13);
        }), Object.values(r12);
      })({ integrations: e11.integrations, defaultIntegrations: n11 }), transport: e11.transport || ao };
      return (0, Y.setNormalizeStringifier)(au), true === o11.debug && (b.DEBUG_BUILD ? g.debug.enable() : (0, g.consoleSandbox)(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      })), (0, v.getCurrentScope)().update(o11.initialScope), t11 = r11 = new tE(o11), (0, v.getCurrentScope)().setClient(t11), r11.init(), r11;
    })(r10), (0, Y.setNormalizeStringifier)(ag);
    let y2 = (e11, t11) => {
      var r11;
      return (r11 = t11?.originalException, (0, ee.isError)(r11) && "string" == typeof r11.digest && r11.digest.startsWith("NEXT_REDIRECT;") || e11.exception?.values?.[0]?.value === "NEXT_REDIRECT") ? null : e11;
    };
    y2.id = "NextRedirectErrorFilter", (0, E.addEventProcessor)(y2);
    try {
      (0, v.getGlobalScope)().setTag("turbopack", true);
    } catch {
    }
  })({ beforeSend: (e10) => e10.exception?.values?.some((e11) => e11.stacktrace?.frames?.some((e12) => /recaptcha/i.test(e12.filename ?? ""))) ? null : e10, denyUrls: [/recaptcha/, /frame_ant/], dsn: ic.env.NEXT_PUBLIC_SENTRY_DSN, ignoreErrors: [/Object Not Found Matching Id:\d+/, /Java object is gone/], integrations: [(y = { behaviour: "drop-error-if-exclusively-contains-third-party-frames", filterKeys: ["attio/polaris"] }, { name: "ThirdPartyErrorsFilter", setup(e10) {
    e10.on("beforeEnvelope", (e11) => {
      (0, es.forEachEnvelopeItem)(e11, (e12, t10) => {
        if ("event" === t10) {
          let t11 = Array.isArray(e12) ? e12[1] : void 0;
          t11 && (t11.exception?.values?.forEach((e13) => {
            e13.stacktrace?.frames?.forEach((e14) => {
              delete e14.module_metadata;
            });
          }), e12[1] = t11);
        }
      });
    }), e10.on("applyFrameMetadata", (t10) => {
      var r10;
      t10.type || (r10 = e10.getOptions().stackParser, t10.exception?.values?.forEach((e11) => {
        e11.stacktrace?.frames?.forEach((e12) => {
          if (!e12.filename || e12.module_metadata) return;
          let t11 = (function(e13, t12) {
            if (_.GLOBAL_OBJ._sentryModuleMetadata) for (let t13 of Object.keys(_.GLOBAL_OBJ._sentryModuleMetadata)) {
              let r11 = _.GLOBAL_OBJ._sentryModuleMetadata[t13];
              if (!il.has(t13)) {
                for (let a10 of (il.add(t13), e13(t13).reverse())) if (a10.filename) {
                  is.set(a10.filename, r11);
                  break;
                }
              }
            }
            return is.get(t12);
          })(r10, e12.filename);
          t11 && (e12.module_metadata = t11);
        });
      }));
    });
  }, preprocessEvent(e10) {
    y.ignoreSentryInternalFrames && (_.GLOBAL_OBJ._sentryWrappedDepth ?? 0) > 0 && (e10.sdkProcessingMetadata = { ...e10.sdkProcessingMetadata, insideSentryWrapped: true });
  }, processEvent(e10) {
    let t10 = !!y.ignoreSentryInternalFrames && e10.sdkProcessingMetadata?.insideSentryWrapped === true && e10.exception?.values?.length === 1, r10 = (function(e11, t11, r11) {
      let a10 = (0, F.getFramesFromEvent)(e11);
      if (a10) return a10.filter((e12, a11) => !!e12.filename && (null != e12.lineno || null != e12.colno || null != e12.instruction_addr) && (!t11 || !(function(e13, t12, r12) {
        var a12;
        if (0 !== t12) return false;
        if (r12 && !(a12 = e13).context_line && !a12.pre_context && a12.function && a12.function.length <= 2 || "sentryWrapped" === e13.function) return true;
        if (!e13.context_line || !e13.filename || !e13.filename.includes("sentry") || !e13.filename.includes("helpers") || !e13.context_line.includes("fn.apply(this, wrappedArguments)")) return false;
        if (e13.pre_context) {
          let t13 = e13.pre_context.length;
          for (let r13 = 0; r13 < t13; r13++) if (e13.pre_context[r13]?.includes("Attempt to invoke user-land function")) return true;
        }
        return false;
      })(e12, a11, !!r11))).map((e12) => e12.module_metadata ? Object.keys(e12.module_metadata).filter((e13) => e13.startsWith(id)).map((e13) => e13.slice(id.length)) : []);
    })(e10, y.ignoreSentryInternalFrames, t10);
    if (r10 && r10["drop-error-if-contains-third-party-frames" === y.behaviour || "apply-tag-if-contains-third-party-frames" === y.behaviour ? "some" : "every"]((e11) => !e11.some((e12) => y.filterKeys.includes(e12)))) {
      if ("drop-error-if-contains-third-party-frames" === y.behaviour || "drop-error-if-exclusively-contains-third-party-frames" === y.behaviour) return null;
      e10.tags = { ...e10.tags, third_party_code: true };
    }
    return e10;
  } })], sendDefaultPii: true }), e.s(["onRouterTransitionStart", 0, function(e10, t10) {
    f && f(e10, t10);
  }], 617742);
}, 360997, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  {
    let r2 = e.f({ "private-next-instrumentation-client": { id: () => 617742, module: () => e.r(617742) } })("private-next-instrumentation-client");
    t.exports = Array.isArray(r2) ? r2 : [r2];
  }
}, 600651, (e, t, r) => {
  "trimStart" in String.prototype || (String.prototype.trimStart = String.prototype.trimLeft), "trimEnd" in String.prototype || (String.prototype.trimEnd = String.prototype.trimRight), "description" in Symbol.prototype || Object.defineProperty(Symbol.prototype, "description", { configurable: true, get: function() {
    var e2 = /\((.*)\)/.exec(this.toString());
    return e2 ? e2[1] : void 0;
  } }), Array.prototype.flat || (Array.prototype.flat = function(e2, t2) {
    return t2 = this.concat.apply([], this), e2 > 1 && t2.some(Array.isArray) ? t2.flat(e2 - 1) : t2;
  }, Array.prototype.flatMap = function(e2, t2) {
    return this.map(e2, t2).flat();
  }), Promise.prototype.finally || (Promise.prototype.finally = function(e2) {
    if ("function" != typeof e2) return this.then(e2, e2);
    var t2 = this.constructor || Promise;
    return this.then(function(r2) {
      return t2.resolve(e2()).then(function() {
        return r2;
      });
    }, function(r2) {
      return t2.resolve(e2()).then(function() {
        throw r2;
      });
    });
  }), Object.fromEntries || (Object.fromEntries = function(e2) {
    return Array.from(e2).reduce(function(e3, t2) {
      return e3[t2[0]] = t2[1], e3;
    }, {});
  }), Array.prototype.at || (Array.prototype.at = function(e2) {
    var t2 = Math.trunc(e2) || 0;
    if (t2 < 0 && (t2 += this.length), !(t2 < 0 || t2 >= this.length)) return this[t2];
  }), Object.hasOwn || (Object.hasOwn = function(e2, t2) {
    if (null == e2) throw TypeError("Cannot convert undefined or null to object");
    return Object.prototype.hasOwnProperty.call(Object(e2), t2);
  }), "canParse" in URL || (URL.canParse = function(e2, t2) {
    try {
      return new URL(e2, t2), true;
    } catch (e3) {
      return false;
    }
  });
}, 142245, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), e.r(600651), ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}]);
