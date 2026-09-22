;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "02178f67-56fe-4357-a883-9a01ca2a8eba");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 636477, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "useRouterBFCache", { enumerable: true, get: function() {
    return o;
  } });
  let n = e.r(856757);
  function o(e2, t2, r2) {
    let [a2, o2] = (0, n.useState)(() => ({ tree: e2, cacheNode: t2, stateKey: r2, next: null }));
    if (a2.tree === e2) return a2;
    let l = { tree: e2, cacheNode: t2, stateKey: r2, next: null }, u = 1, d = a2, s = l;
    for (; null !== d && u < 1; ) {
      if (d.stateKey === r2) {
        s.next = d.next;
        break;
      }
      {
        u++;
        let e3 = { tree: d.tree, cacheNode: d.cacheNode, stateKey: d.stateKey, next: null };
        s.next = e3, s = e3;
      }
      d = d.next;
    }
    return o2(l), l;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 479014, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "ClientPageRoot", { enumerable: true, get: function() {
    return i;
  } });
  let n = e.r(68982), o = e.r(225478), l = e.r(856757), u = e.r(307940), d = e.r(36907), s = e.r(679347);
  function i({ Component: e2, serverProvidedParams: t2 }) {
    let r2, a2;
    if (null !== t2) r2 = t2.searchParams, a2 = t2.params;
    else {
      let e3 = (0, l.use)(o.LayoutRouterContext);
      a2 = null !== e3 ? e3.parentParams : {}, r2 = (0, u.urlSearchParamsToParsedUrlQuery)((0, l.use)(d.SearchParamsContext));
    }
    let c = (0, s.createClientSearchParams)(r2), f = (0, s.createClientParams)(a2);
    return (0, n.jsx)(e2, { params: f, searchParams: c });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 899016, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "ClientSegmentRoot", { enumerable: true, get: function() {
    return d;
  } });
  let n = e.r(68982), o = e.r(225478), l = e.r(856757), u = e.r(679347);
  function d({ Component: e2, slots: t2, serverProvidedParams: r2 }) {
    let a2;
    if (null !== r2) a2 = r2.params;
    else {
      let e3 = (0, l.use)(o.LayoutRouterContext);
      a2 = null !== e3 ? e3.parentParams : {};
    }
    let s = (0, u.createClientParams)(a2);
    return (0, n.jsx)(e2, { ...t2, params: s });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 738444, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "HTTPAccessFallbackBoundary", { enumerable: true, get: function() {
    return c;
  } });
  let n = e.r(744066), o = e.r(68982), l = n._(e.r(856757)), u = e.r(164496), d = e.r(726124), s = e.r(225478);
  class i extends l.default.Component {
    constructor(e2) {
      super(e2), this.state = { triggeredStatus: void 0, previousPathname: e2.pathname };
    }
    componentDidCatch() {
    }
    static getDerivedStateFromError(e2) {
      if ((0, d.isHTTPAccessFallbackError)(e2)) return { triggeredStatus: (0, d.getAccessFallbackHTTPStatus)(e2) };
      throw e2;
    }
    static getDerivedStateFromProps(e2, t2) {
      return e2.pathname !== t2.previousPathname && t2.triggeredStatus ? { triggeredStatus: void 0, previousPathname: e2.pathname } : { triggeredStatus: t2.triggeredStatus, previousPathname: e2.pathname };
    }
    render() {
      let { notFound: e2, forbidden: t2, unauthorized: r2, children: a2 } = this.props, { triggeredStatus: n2 } = this.state, l2 = { [d.HTTPAccessErrorStatus.NOT_FOUND]: e2, [d.HTTPAccessErrorStatus.FORBIDDEN]: t2, [d.HTTPAccessErrorStatus.UNAUTHORIZED]: r2 };
      if (n2) {
        let u2 = n2 === d.HTTPAccessErrorStatus.NOT_FOUND && e2, s2 = n2 === d.HTTPAccessErrorStatus.FORBIDDEN && t2, i2 = n2 === d.HTTPAccessErrorStatus.UNAUTHORIZED && r2;
        return u2 || s2 || i2 ? (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)("meta", { name: "robots", content: "noindex" }), false, l2[n2]] }) : a2;
      }
      return a2;
    }
  }
  function c({ notFound: e2, forbidden: t2, unauthorized: r2, children: a2 }) {
    let n2 = (0, u.useUntrackedPathname)(), d2 = (0, l.useContext)(s.MissingSlotContext);
    return e2 || t2 || r2 ? (0, o.jsx)(i, { pathname: n2, notFound: e2, forbidden: t2, unauthorized: r2, missingSlots: d2, children: a2 }) : (0, o.jsx)(o.Fragment, { children: a2 });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 495351, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { InstantValidationBoundaryContext: function() {
    return l;
  }, PlaceValidationBoundaryBelowThisLevel: function() {
    return u;
  }, RenderValidationBoundaryAtThisLevel: function() {
    return d;
  }, SlotMarker: function() {
    return s;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let l = null, u = null, d = null, s = null;
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 454495, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { InstantValidationBoundaryContext: function() {
    return l.InstantValidationBoundaryContext;
  }, PlaceValidationBoundaryBelowThisLevel: function() {
    return l.PlaceValidationBoundaryBelowThisLevel;
  }, RenderValidationBoundaryAtThisLevel: function() {
    return l.RenderValidationBoundaryAtThisLevel;
  }, SlotMarker: function() {
    return l.SlotMarker;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let l = e.r(495351);
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 437913, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { LoadingBoundaryProvider: function() {
    return x;
  }, default: function() {
    return C;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let l = e.r(481258), u = e.r(744066), d = e.r(68982), s = u._(e.r(856757)), i = l._(e.r(403432)), c = e.r(225478), f = e.r(628498), y = e.r(498814), p = e.r(504387), _ = e.r(114633), M = e.r(738444);
  e.r(454495);
  let g = e.r(815400), b = e.r(636477);
  e.r(240564);
  let h = e.r(36907), m = e.r(307940), P = e.r(326336);
  i.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function j(e2, t2, r2) {
    let a2 = e2.getClientRects();
    if (0 === a2.length) return 0;
    let n2 = 1 / 0;
    for (let e3 = 0; e3 < a2.length; e3++) {
      let t3 = a2[e3];
      t3.top < n2 && (n2 = t3.top);
    }
    return n2 >= r2() && n2 <= t2 ? 1 : 2;
  }
  s.default.Component;
  let v = function(e2) {
    let t2 = s.default.useRef(null);
    return (0, s.useLayoutEffect)(() => {
      let { focusAndScrollRef: r2, cacheNode: a2 } = e2, n2 = r2.forceScroll ? r2.scrollRef : a2.scrollRef;
      if (null === n2 || !n2.current) return;
      let o2 = null, l2 = r2.hashFragment;
      if (l2) {
        var u2;
        if (null === (o2 = "top" === (u2 = l2) ? document.body : document.getElementById(u2) ?? document.getElementsByName(u2)[0] ?? null)) {
          n2.current = false, r2.onlyHashChange = false, r2.hashFragment = null;
          return;
        }
      } else o2 = t2.current;
      if (null === o2) return;
      let d2 = false;
      (0, p.disableSmoothScrollDuringRouteTransition)(() => {
        let e3 = document.documentElement, t3 = null, r3 = null, a3 = null, u3 = () => {
          var r4, n3;
          let o3, l3;
          return null === a3 && (r4 = e3, n3 = t3, a3 = !Number.isFinite(l3 = Number.parseFloat(o3 = getComputedStyle(r4).scrollPaddingTop)) || l3 < 0 ? 0 : o3.endsWith("px") ? l3 : o3.endsWith("%") ? l3 / 100 * n3 : 0), a3;
        };
        (l2 || (t3 = e3.clientHeight, 0 !== (r3 = j(o2, t3, u3)))) && ((d2 = true, n2.current = false, l2) ? o2.scrollIntoView() : 1 !== r3 && (e3.scrollTop = 0, 2 === j(o2, t3, u3) && o2.scrollIntoView()));
      }, { dontForceLayout: true, onlyHashChange: r2.onlyHashChange }), d2 && (r2.onlyHashChange = false, r2.hashFragment = null);
    }, void 0), (0, d.jsx)(s.Fragment, { ref: t2, children: e2.children });
  };
  function w({ children: e2, cacheNode: t2 }) {
    let r2 = (0, s.useContext)(c.GlobalLayoutRouterContext);
    if (!r2) throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", { value: "E473", enumerable: false, configurable: true });
    return (0, d.jsx)(v, { focusAndScrollRef: r2.focusAndScrollRef, cacheNode: t2, children: e2 });
  }
  function O({ tree: e2, segmentPath: t2, debugNameContext: r2, cacheNode: a2, params: n2, url: o2, isActive: l2 }) {
    let u2, i2 = (0, s.useContext)(c.GlobalLayoutRouterContext);
    if ((0, s.useContext)(h.NavigationPromisesContext), !i2) throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", { value: "E473", enumerable: false, configurable: true });
    let y2 = null !== a2 ? a2 : (0, s.use)(f.unresolvedThenable), p2 = null !== y2.prefetchRsc ? y2.prefetchRsc : y2.rsc, _2 = (0, s.useDeferredValue)(y2.rsc, p2);
    if ((0, P.isDeferredRsc)(_2)) {
      let e3 = (0, s.use)(_2);
      null === e3 && (0, s.use)(f.unresolvedThenable), u2 = e3;
    } else null === _2 && (0, s.use)(f.unresolvedThenable), u2 = _2;
    let M2 = u2;
    return (0, d.jsx)(c.LayoutRouterContext.Provider, { value: { parentTree: e2, parentCacheNode: y2, parentSegmentPath: t2, parentParams: n2, parentLoadingData: null, debugNameContext: r2, url: o2, isActive: l2 }, children: M2 });
  }
  function x({ loading: e2, children: t2 }) {
    let r2 = (0, s.use)(c.LayoutRouterContext);
    return null === r2 ? t2 : (0, d.jsx)(c.LayoutRouterContext.Provider, { value: { parentTree: r2.parentTree, parentCacheNode: r2.parentCacheNode, parentSegmentPath: r2.parentSegmentPath, parentParams: r2.parentParams, parentLoadingData: e2, debugNameContext: r2.debugNameContext, url: r2.url, isActive: r2.isActive }, children: t2 });
  }
  function E({ name: e2, loading: t2, children: r2 }) {
    if (null !== t2) {
      let a2 = t2[0], n2 = t2[1], o2 = t2[2];
      return (0, d.jsx)(s.Suspense, { name: e2, fallback: (0, d.jsxs)(d.Fragment, { children: [n2, o2, a2] }), children: r2 });
    }
    return (0, d.jsx)(d.Fragment, { children: r2 });
  }
  function C({ parallelRouterKey: e2, error: t2, errorStyles: r2, errorScripts: a2, templateStyles: n2, templateScripts: o2, template: l2, notFound: u2, forbidden: i2, unauthorized: p2, segmentViewBoundaries: h2 }) {
    let P2 = (0, s.useContext)(c.LayoutRouterContext);
    if (!P2) throw Object.defineProperty(Error("invariant expected layout router to be mounted"), "__NEXT_ERROR_CODE", { value: "E56", enumerable: false, configurable: true });
    let { parentTree: j2, parentCacheNode: v2, parentSegmentPath: x2, parentParams: R, parentLoadingData: T, url: S, isActive: A, debugNameContext: k } = P2, B = j2[0], N = null === x2 ? [e2] : x2.concat([B, e2]), F = j2[1][e2], K = v2.slots;
    (void 0 === F || null === K) && (0, s.use)(f.unresolvedThenable);
    let D = F[0], L = K[e2] ?? null, H = (0, g.createRouterCacheKey)(D, true), U = (0, b.useRouterBFCache)(F, L, H), V = [];
    do {
      let e3 = U.tree, s2 = U.cacheNode, f2 = U.stateKey, g2 = e3[0], b2 = R;
      if (Array.isArray(g2)) {
        let e4 = g2[0], t3 = g2[1], r3 = g2[2], a3 = (0, m.getParamValueFromCacheKey)(t3, r3);
        null !== a3 && (b2 = { ...R, [e4]: a3 });
      }
      let h3 = (function(e4) {
        if ("/" === e4) return "/";
        if ("string" == typeof e4) if ("(__SLOT__)" === e4) return;
        else return e4 + "/";
        return e4[1] + "/";
      })(g2), P3 = h3 ?? k, j3 = void 0 === h3 ? void 0 : k, v3 = (0, d.jsxs)(w, { cacheNode: s2, children: [(0, d.jsx)(y.ErrorBoundary, { errorComponent: t2, errorStyles: r2, errorScripts: a2, children: (0, d.jsx)(E, { name: j3, loading: T, children: (0, d.jsx)(M.HTTPAccessFallbackBoundary, { notFound: u2, forbidden: i2, unauthorized: p2, children: (0, d.jsxs)(_.RedirectBoundary, { children: [(0, d.jsx)(O, { url: S, tree: e3, params: b2, cacheNode: s2, segmentPath: N, debugNameContext: P3, isActive: A && f2 === H }), null] }) }) }) }), null] }), x3 = (0, d.jsxs)(c.TemplateContext.Provider, { value: v3, children: [n2, o2, l2] }, f2);
      V.push(x3), U = U.next;
    } while (null !== U);
    return V;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 395728, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "default", { enumerable: true, get: function() {
    return d;
  } });
  let n = e.r(744066), o = e.r(68982), l = n._(e.r(856757)), u = e.r(225478);
  function d() {
    let e2 = (0, l.useContext)(u.TemplateContext);
    return (0, o.jsx)(o.Fragment, { children: e2 });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 694799, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "createRenderParamsFromClient", { enumerable: true, get: function() {
    return o;
  } });
  let n = /* @__PURE__ */ new WeakMap();
  function o(e2) {
    let t2 = n.get(e2);
    if (t2) return t2;
    let r2 = Promise.resolve(e2);
    return n.set(e2, r2), r2;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 960144, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "createRenderParamsFromClient", { enumerable: true, get: function() {
    return n;
  } });
  let n = e.r(694799).createRenderParamsFromClient;
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 995013, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "createRenderSearchParamsFromClient", { enumerable: true, get: function() {
    return o;
  } });
  let n = /* @__PURE__ */ new WeakMap();
  function o(e2) {
    let t2 = n.get(e2);
    if (t2) return t2;
    let r2 = Promise.resolve(e2);
    return n.set(e2, r2), r2;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 380244, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "createRenderSearchParamsFromClient", { enumerable: true, get: function() {
    return n;
  } });
  let n = e.r(995013).createRenderSearchParamsFromClient;
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 679347, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = { createClientParams: function() {
    return l.createRenderParamsFromClient;
  }, createClientSearchParams: function() {
    return u.createRenderSearchParamsFromClient;
  } };
  for (var o in n) Object.defineProperty(r, o, { enumerable: true, get: n[o] });
  let l = e.r(960144), u = e.r(380244);
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 206326, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "IconMark", { enumerable: true, get: function() {
    return o;
  } });
  let n = e.r(68982), o = () => "u" > typeof window ? null : (0, n.jsx)("meta", { name: "\xABnxt-icon\xBB" });
}]);
