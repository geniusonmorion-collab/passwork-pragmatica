;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "10d00202-fa2e-78ac-7bc4-62a13115cc55");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 481258, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  r._ = function(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  };
}, 744066, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function o(e2) {
    if ("function" != typeof WeakMap) return null;
    var t2 = /* @__PURE__ */ new WeakMap(), r2 = /* @__PURE__ */ new WeakMap();
    return (o = function(e3) {
      return e3 ? r2 : t2;
    })(e2);
  }
  r._ = function(e2, t2) {
    if (!t2 && e2 && e2.__esModule) return e2;
    if (null === e2 || "object" != typeof e2 && "function" != typeof e2) return { default: e2 };
    var r2 = o(t2);
    if (r2 && r2.has(e2)) return r2.get(e2);
    var n2 = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e2) if ("default" !== u && Object.prototype.hasOwnProperty.call(e2, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e2, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n2, u, i) : n2[u] = e2[u];
    }
    return n2.default = e2, r2 && r2.set(e2, n2), n2;
  };
}, 726124, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var o = { HTTPAccessErrorStatus: function() {
    return u;
  }, HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
    return s;
  }, getAccessFallbackErrorTypeByStatus: function() {
    return d;
  }, getAccessFallbackHTTPStatus: function() {
    return c;
  }, isHTTPAccessFallbackError: function() {
    return l;
  } };
  for (var a in o) Object.defineProperty(r, a, { enumerable: true, get: o[a] });
  let u = { NOT_FOUND: 404, FORBIDDEN: 403, UNAUTHORIZED: 401 }, i = new Set(Object.values(u)), s = "NEXT_HTTP_ERROR_FALLBACK";
  function l(e2) {
    if ("object" != typeof e2 || null === e2 || !("digest" in e2) || "string" != typeof e2.digest) return false;
    let [t2, r2] = e2.digest.split(";");
    return t2 === s && i.has(Number(r2));
  }
  function c(e2) {
    return Number(e2.digest.split(";")[1]);
  }
  function d(e2) {
    switch (e2) {
      case 401:
        return "unauthorized";
      case 403:
        return "forbidden";
      case 404:
        return "not-found";
      default:
        return;
    }
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 664022, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "isNextRouterError", { enumerable: true, get: function() {
    return u;
  } });
  let o = e.r(726124), a = e.r(219482);
  function u(e2) {
    return (0, a.isRedirectError)(e2) || (0, o.isHTTPAccessFallbackError)(e2);
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 169217, (e, t, r) => {
  "use strict";
  let n, o;
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var u = { useDynamicRouteParams: function() {
    return n;
  }, useDynamicSearchParams: function() {
    return o;
  } };
  for (var i in u) Object.defineProperty(r, i, { enumerable: true, get: u[i] });
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 525706, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var o = { ServerInsertedHTMLContext: function() {
    return i;
  }, useServerInsertedHTML: function() {
    return s;
  } };
  for (var a in o) Object.defineProperty(r, a, { enumerable: true, get: o[a] });
  let u = e.r(744066)._(e.r(856757)), i = u.default.createContext(null);
  function s(e2) {
    let t2 = (0, u.useContext)(i);
    t2 && t2(e2);
  }
}, 472820, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "notFound", { enumerable: true, get: function() {
    return u;
  } });
  let o = e.r(726124), a = `${o.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
  function u() {
    let e2 = Object.defineProperty(Error(a), "__NEXT_ERROR_CODE", { value: "E1041", enumerable: false, configurable: true });
    throw e2.digest = a, e2;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 15787, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function o() {
    throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", { value: "E488", enumerable: false, configurable: true });
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "forbidden", { enumerable: true, get: function() {
    return o;
  } }), e.r(726124).HTTP_ERROR_FALLBACK_ERROR_CODE, ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 235183, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function o() {
    throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", { value: "E411", enumerable: false, configurable: true });
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "unauthorized", { enumerable: true, get: function() {
    return o;
  } }), e.r(726124).HTTP_ERROR_FALLBACK_ERROR_CODE, ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 702696, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "ReadonlyURLSearchParams", { enumerable: true, get: function() {
    return a;
  } });
  class o extends Error {
    constructor() {
      super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams"), Object.defineProperty(this, "__NEXT_ERROR_CODE", { value: "E1174", enumerable: false, configurable: true });
    }
  }
  class a extends URLSearchParams {
    append() {
      throw new o();
    }
    delete() {
      throw new o();
    }
    set() {
      throw new o();
    }
    sort() {
      throw new o();
    }
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 60391, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "unstable_rethrow", { enumerable: true, get: function() {
    return function e2(t2) {
      if ((0, a.isNextRouterError)(t2) || (0, o.isBailoutToCSRError)(t2)) throw t2;
      t2 instanceof Error && "cause" in t2 && e2(t2.cause);
    };
  } });
  let o = e.r(292638), a = e.r(664022);
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 792765, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var o = { ReadonlyURLSearchParams: function() {
    return u.ReadonlyURLSearchParams;
  }, RedirectType: function() {
    return y;
  }, forbidden: function() {
    return l.forbidden;
  }, notFound: function() {
    return s.notFound;
  }, permanentRedirect: function() {
    return i.permanentRedirect;
  }, redirect: function() {
    return i.redirect;
  }, unauthorized: function() {
    return c.unauthorized;
  }, unstable_isUnrecognizedActionError: function() {
    return f;
  }, unstable_rethrow: function() {
    return d.unstable_rethrow;
  } };
  for (var a in o) Object.defineProperty(r, a, { enumerable: true, get: o[a] });
  let u = e.r(702696), i = e.r(944885), s = e.r(472820), l = e.r(15787), c = e.r(235183), d = e.r(60391);
  function f() {
    throw Object.defineProperty(Error("`unstable_isUnrecognizedActionError` can only be used on the client."), "__NEXT_ERROR_CODE", { value: "E776", enumerable: false, configurable: true });
  }
  let y = { push: "push", replace: "replace" };
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 300593, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var o = { ReadonlyURLSearchParams: function() {
    return s.ReadonlyURLSearchParams;
  }, RedirectType: function() {
    return y.RedirectType;
  }, ServerInsertedHTMLContext: function() {
    return d.ServerInsertedHTMLContext;
  }, forbidden: function() {
    return y.forbidden;
  }, notFound: function() {
    return y.notFound;
  }, permanentRedirect: function() {
    return y.permanentRedirect;
  }, redirect: function() {
    return y.redirect;
  }, unauthorized: function() {
    return y.unauthorized;
  }, unstable_isUnrecognizedActionError: function() {
    return f.unstable_isUnrecognizedActionError;
  }, unstable_rethrow: function() {
    return y.unstable_rethrow;
  }, useParams: function() {
    return h;
  }, usePathname: function() {
    return b;
  }, useRouter: function() {
    return v;
  }, useSearchParams: function() {
    return g;
  }, useSelectedLayoutSegment: function() {
    return m;
  }, useSelectedLayoutSegments: function() {
    return w;
  }, useServerInsertedHTML: function() {
    return d.useServerInsertedHTML;
  } };
  for (var a in o) Object.defineProperty(r, a, { enumerable: true, get: o[a] });
  let u = e.r(744066)._(e.r(856757)), i = e.r(225478), s = e.r(36907), l = e.r(672883), c = e.r(169217), d = e.r(525706), f = e.r(334569), y = e.r(792765), { instrumentParamsForClientValidation: p, instrumentSearchParamsForClientValidation: _, expectCompleteParamsInClientValidation: M } = {};
  function g() {
    c.useDynamicSearchParams?.("useSearchParams()");
    let e2 = (0, u.useContext)(s.SearchParamsContext);
    return (0, u.useMemo)(() => e2 ? new s.ReadonlyURLSearchParams(e2) : null, [e2]);
  }
  function b() {
    return c.useDynamicRouteParams?.("usePathname()"), (0, u.useContext)(s.PathnameContext);
  }
  function v() {
    let e2 = (0, u.useContext)(i.AppRouterContext);
    if (null === e2) throw Object.defineProperty(Error("invariant expected app router to be mounted"), "__NEXT_ERROR_CODE", { value: "E238", enumerable: false, configurable: true });
    let t2 = (0, u.useContext)(i.LayoutRouterContext), r2 = t2?.parentCacheNode.bfcacheId ?? 0;
    return (0, u.useMemo)(() => ({ back: e2.back, forward: e2.forward, refresh: e2.refresh, hmrRefresh: e2.hmrRefresh, push: e2.push, replace: e2.replace, prefetch: e2.prefetch, experimental_gesturePush: e2.experimental_gesturePush, bfcacheId: "_b_" + r2 + "_" }), [e2, r2]);
  }
  function h() {
    return c.useDynamicRouteParams?.("useParams()"), (0, u.useContext)(s.PathParamsContext);
  }
  function w(e2 = "children") {
    c.useDynamicRouteParams?.("useSelectedLayoutSegments()");
    let t2 = (0, u.useContext)(i.LayoutRouterContext);
    return t2 ? (0, l.getSelectedLayoutSegmentPath)(t2.parentTree, e2) : null;
  }
  function m(e2 = "children") {
    c.useDynamicRouteParams?.("useSelectedLayoutSegment()"), (0, u.useContext)(s.NavigationPromisesContext);
    let t2 = w(e2);
    return (0, l.computeSelectedLayoutSegment)(t2, e2);
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 473629, (e, t, r) => {
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var o = { 156: function(e2) {
    var t2, r2, n2, o2 = e2.exports = {};
    function a2() {
      throw Error("setTimeout has not been defined");
    }
    function u2() {
      throw Error("clearTimeout has not been defined");
    }
    try {
      t2 = "function" == typeof setTimeout ? setTimeout : a2;
    } catch (e3) {
      t2 = a2;
    }
    try {
      r2 = "function" == typeof clearTimeout ? clearTimeout : u2;
    } catch (e3) {
      r2 = u2;
    }
    function i(e3) {
      if (t2 === setTimeout) return setTimeout(e3, 0);
      if ((t2 === a2 || !t2) && setTimeout) return t2 = setTimeout, setTimeout(e3, 0);
      try {
        return t2(e3, 0);
      } catch (r3) {
        try {
          return t2.call(null, e3, 0);
        } catch (r4) {
          return t2.call(this, e3, 0);
        }
      }
    }
    var s = [], l = false, c = -1;
    function d() {
      l && n2 && (l = false, n2.length ? s = n2.concat(s) : c = -1, s.length && f());
    }
    function f() {
      if (!l) {
        var e3 = i(d);
        l = true;
        for (var t3 = s.length; t3; ) {
          for (n2 = s, s = []; ++c < t3; ) n2 && n2[c].run();
          c = -1, t3 = s.length;
        }
        n2 = null, l = false, (function(e4) {
          if (r2 === clearTimeout) return clearTimeout(e4);
          if ((r2 === u2 || !r2) && clearTimeout) return r2 = clearTimeout, clearTimeout(e4);
          try {
            r2(e4);
          } catch (t4) {
            try {
              return r2.call(null, e4);
            } catch (t5) {
              return r2.call(this, e4);
            }
          }
        })(e3);
      }
    }
    function y(e3, t3) {
      this.fun = e3, this.array = t3;
    }
    function p() {
    }
    o2.nextTick = function(e3) {
      var t3 = Array(arguments.length - 1);
      if (arguments.length > 1) for (var r3 = 1; r3 < arguments.length; r3++) t3[r3 - 1] = arguments[r3];
      s.push(new y(e3, t3)), 1 !== s.length || l || i(f);
    }, y.prototype.run = function() {
      this.fun.apply(null, this.array);
    }, o2.title = "browser", o2.browser = true, o2.env = {}, o2.argv = [], o2.version = "", o2.versions = {}, o2.on = p, o2.addListener = p, o2.once = p, o2.off = p, o2.removeListener = p, o2.removeAllListeners = p, o2.emit = p, o2.prependListener = p, o2.prependOnceListener = p, o2.listeners = function(e3) {
      return [];
    }, o2.binding = function(e3) {
      throw Error("process.binding is not supported");
    }, o2.cwd = function() {
      return "/";
    }, o2.chdir = function(e3) {
      throw Error("process.chdir is not supported");
    }, o2.umask = function() {
      return 0;
    };
  } }, a = {};
  function u(e2) {
    var t2 = a[e2];
    if (void 0 !== t2) return t2.exports;
    var r2 = a[e2] = { exports: {} }, n2 = true;
    try {
      o[e2](r2, r2.exports, u), n2 = false;
    } finally {
      n2 && delete a[e2];
    }
    return r2.exports;
  }
  u.ab = "/ROOT/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.0_@opentelemetry+api@1.9.1_@playwright+test@1.62.1_@types+_5a54af28fb2ec2bbde711a7454bcebbf/node_modules/next/dist/compiled/process/", t.exports = u(156);
}, 541130, (e, t, r) => {
  "use strict";
  var n, o;
  t.exports = (null == (n = e.g.process) ? void 0 : n.env) && "object" == typeof (null == (o = e.g.process) ? void 0 : o.env) ? e.g.process : e.r(473629);
}, 117408, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var o = e.r(856757);
  function a(e2) {
    var t2 = "https://react.dev/errors/" + e2;
    if (1 < arguments.length) {
      t2 += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r2 = 2; r2 < arguments.length; r2++) t2 += "&args[]=" + encodeURIComponent(arguments[r2]);
    }
    return "Minified React error #" + e2 + "; visit " + t2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u() {
  }
  var i = { d: { f: u, r: function() {
    throw Error(a(522));
  }, D: u, C: u, L: u, m: u, X: u, S: u, M: u }, p: 0, findDOMNode: null }, s = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.recoverable"), c = /* @__PURE__ */ Symbol.for("react.optimistic_key"), d = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function f(e2, t2) {
    return "font" === e2 ? "" : "string" == typeof t2 ? "use-credentials" === t2 ? t2 : "" : void 0;
  }
  r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, r.browser = function() {
    var e2 = Error(a(603));
    return Object.defineProperty(e2, "$$typeof", { value: l }), e2;
  }, r.createPortal = function(e2, t2) {
    var r2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!t2 || 1 !== t2.nodeType && 9 !== t2.nodeType && 11 !== t2.nodeType) throw Error(a(299));
    return (function(e3, t3, r3) {
      var n2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: s, key: null == n2 ? null : n2 === c ? c : "" + n2, children: e3, containerInfo: t3, implementation: r3 };
    })(e2, t2, null, r2);
  }, r.flushSync = function(e2) {
    var t2 = d.T, r2 = i.p;
    try {
      if (d.T = null, i.p = 2, e2) return e2();
    } finally {
      d.T = t2, i.p = r2, i.d.f();
    }
  }, r.preconnect = function(e2, t2) {
    "string" == typeof e2 && (t2 = t2 ? "string" == typeof (t2 = t2.crossOrigin) ? "use-credentials" === t2 ? t2 : "" : void 0 : null, i.d.C(e2, t2));
  }, r.prefetchDNS = function(e2) {
    "string" == typeof e2 && i.d.D(e2);
  }, r.preinit = function(e2, t2) {
    if ("string" == typeof e2 && t2 && "string" == typeof t2.as) {
      var r2 = t2.as, n2 = f(r2, t2.crossOrigin), o2 = "string" == typeof t2.integrity ? t2.integrity : void 0, a2 = "string" == typeof t2.fetchPriority ? t2.fetchPriority : void 0;
      "style" === r2 ? i.d.S(e2, "string" == typeof t2.precedence ? t2.precedence : void 0, { crossOrigin: n2, integrity: o2, fetchPriority: a2 }) : "script" === r2 && i.d.X(e2, { crossOrigin: n2, integrity: o2, fetchPriority: a2, nonce: "string" == typeof t2.nonce ? t2.nonce : void 0 });
    }
  }, r.preinitModule = function(e2, t2) {
    if ("string" == typeof e2) if ("object" == typeof t2 && null !== t2) {
      if (null == t2.as || "script" === t2.as) {
        var r2 = f(t2.as, t2.crossOrigin);
        i.d.M(e2, { crossOrigin: r2, integrity: "string" == typeof t2.integrity ? t2.integrity : void 0, nonce: "string" == typeof t2.nonce ? t2.nonce : void 0, fetchPriority: "string" == typeof t2.fetchPriority ? t2.fetchPriority : void 0 });
      }
    } else null == t2 && i.d.M(e2);
  }, r.preload = function(e2, t2) {
    if ("string" == typeof e2 && "object" == typeof t2 && null !== t2 && "string" == typeof t2.as) {
      var r2 = t2.as, n2 = f(r2, t2.crossOrigin);
      i.d.L(e2, r2, { crossOrigin: n2, integrity: "string" == typeof t2.integrity ? t2.integrity : void 0, nonce: "string" == typeof t2.nonce ? t2.nonce : void 0, type: "string" == typeof t2.type ? t2.type : void 0, fetchPriority: "string" == typeof t2.fetchPriority ? t2.fetchPriority : void 0, referrerPolicy: "string" == typeof t2.referrerPolicy ? t2.referrerPolicy : void 0, imageSrcSet: "string" == typeof t2.imageSrcSet ? t2.imageSrcSet : void 0, imageSizes: "string" == typeof t2.imageSizes ? t2.imageSizes : void 0, media: "string" == typeof t2.media ? t2.media : void 0 });
    }
  }, r.preloadModule = function(e2, t2) {
    if ("string" == typeof e2) if (t2) {
      var r2 = f(t2.as, t2.crossOrigin);
      i.d.m(e2, { as: "string" == typeof t2.as && "script" !== t2.as ? t2.as : void 0, crossOrigin: r2, integrity: "string" == typeof t2.integrity ? t2.integrity : void 0, nonce: "string" == typeof t2.nonce ? t2.nonce : void 0, fetchPriority: "string" == typeof t2.fetchPriority ? t2.fetchPriority : void 0 });
    } else i.d.m(e2);
  }, r.requestFormReset = function(e2) {
    i.d.r(e2);
  }, r.unstable_batchedUpdates = function(e2, t2) {
    return e2(t2);
  }, r.useFormState = function(e2, t2, r2) {
    return d.H.useFormState(e2, t2, r2);
  }, r.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, r.version = "19.3.0-canary-cbb046ab-20260731";
}, 403432, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  !(function e2() {
    if ("u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e2);
    } catch (e3) {
      console.error(e3);
    }
  })(), t.exports = e.r(117408);
}, 759799, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element");
  function a(e2, t2, r2) {
    var n2 = null;
    if (void 0 !== r2 && (n2 = "" + r2), void 0 !== t2.key && (n2 = "" + t2.key), "key" in t2) for (var a2 in r2 = {}, t2) "key" !== a2 && (r2[a2] = t2[a2]);
    else r2 = t2;
    return { $$typeof: o, type: e2, key: n2, ref: void 0 !== (t2 = r2.ref) ? t2 : null, props: r2 };
  }
  r.Fragment = /* @__PURE__ */ Symbol.for("react.fragment"), r.jsx = a, r.jsxs = a;
}, 68982, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = e.r(759799);
}, 632886, (e, t, r) => {
  "use strict";
  var n = e.i(541130);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), u = /* @__PURE__ */ Symbol.for("react.portal"), i = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), l = /* @__PURE__ */ Symbol.for("react.profiler"), c = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), f = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), _ = /* @__PURE__ */ Symbol.for("react.lazy"), M = /* @__PURE__ */ Symbol.for("react.activity"), g = /* @__PURE__ */ Symbol.for("react.view_transition"), b = Symbol.iterator, v = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, h = Object.assign, w = {};
  function m(e2, t2, r2) {
    this.props = e2, this.context = t2, this.refs = w, this.updater = r2 || v;
  }
  function E() {
  }
  function O(e2, t2, r2) {
    this.props = e2, this.context = t2, this.refs = w, this.updater = r2 || v;
  }
  m.prototype.isReactComponent = {}, m.prototype.setState = function(e2, t2) {
    if ("object" != typeof e2 && "function" != typeof e2 && null != e2) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e2, t2, "setState");
  }, m.prototype.forceUpdate = function(e2) {
    this.updater.enqueueForceUpdate(this, e2, "forceUpdate");
  }, E.prototype = m.prototype;
  var P = O.prototype = new E();
  P.constructor = O, h(P, m.prototype), P.isPureReactComponent = true;
  var R = Array.isArray;
  function j() {
  }
  var S = { H: null, A: null, T: null, S: null }, T = Object.prototype.hasOwnProperty;
  function k(e2, t2, r2) {
    var n2 = r2.ref;
    return { $$typeof: a, type: e2, key: t2, ref: void 0 !== n2 ? n2 : null, props: r2 };
  }
  function C(e2) {
    return "object" == typeof e2 && null !== e2 && e2.$$typeof === a;
  }
  var x = /\/+/g;
  function A(e2, t2) {
    var r2, n2;
    return "object" == typeof e2 && null !== e2 && null != e2.key ? (r2 = "" + e2.key, n2 = { "=": "=0", ":": "=2" }, "$" + r2.replace(/[=:]/g, function(e3) {
      return n2[e3];
    })) : t2.toString(36);
  }
  function L(e2, t2, r2) {
    if (null == e2) return e2;
    var n2 = [], o2 = 0;
    return !(function e3(t3, r3, n3, o3, i2) {
      var s2, l2, c2, d2 = typeof t3;
      ("undefined" === d2 || "boolean" === d2) && (t3 = null);
      var f2 = false;
      if (null === t3) f2 = true;
      else switch (d2) {
        case "bigint":
        case "string":
        case "number":
          f2 = true;
          break;
        case "object":
          switch (t3.$$typeof) {
            case a:
            case u:
              f2 = true;
              break;
            case _:
              return e3((f2 = t3._init)(t3._payload), r3, n3, o3, i2);
          }
      }
      if (f2) return i2 = i2(t3), f2 = "" === o3 ? "." + A(t3, 0) : o3, R(i2) ? (n3 = "", null != f2 && (n3 = f2.replace(x, "$&/") + "/"), e3(i2, r3, n3, "", function(e4) {
        return e4;
      })) : null != i2 && (C(i2) && (s2 = i2, l2 = n3 + (null == i2.key || t3 && t3.key === i2.key ? "" : ("" + i2.key).replace(x, "$&/") + "/") + f2, i2 = k(s2.type, l2, s2.props)), r3.push(i2)), 1;
      f2 = 0;
      var y2 = "" === o3 ? "." : o3 + ":";
      if (R(t3)) for (var p2 = 0; p2 < t3.length; p2++) d2 = y2 + A(o3 = t3[p2], p2), f2 += e3(o3, r3, n3, d2, i2);
      else if ("function" == typeof (p2 = null === (c2 = t3) || "object" != typeof c2 ? null : "function" == typeof (c2 = b && c2[b] || c2["@@iterator"]) ? c2 : null)) for (t3 = p2.call(t3), p2 = 0; !(o3 = t3.next()).done; ) d2 = y2 + A(o3 = o3.value, p2++), f2 += e3(o3, r3, n3, d2, i2);
      else if ("object" === d2) {
        if ("function" == typeof t3.then) return e3((function(e4) {
          switch (e4.status) {
            case "fulfilled":
              return e4.value;
            case "rejected":
              throw e4.reason;
            default:
              switch ("string" == typeof e4.status ? e4.then(j, j) : (e4.status = "pending", e4.then(function(t4) {
                "pending" === e4.status && (e4.status = "fulfilled", e4.value = t4);
              }, function(t4) {
                "pending" === e4.status && (e4.status = "rejected", e4.reason = t4);
              })), e4.status) {
                case "fulfilled":
                  return e4.value;
                case "rejected":
                  throw e4.reason;
              }
          }
          throw e4;
        })(t3), r3, n3, o3, i2);
        throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (r3 = String(t3)) ? "object with keys {" + Object.keys(t3).join(", ") + "}" : r3) + "). If you meant to render a collection of children, use an array instead.");
      }
      return f2;
    })(e2, n2, "", "", function(e3) {
      return t2.call(r2, e3, o2++);
    }), n2;
  }
  function D(e2) {
    if (-1 === e2._status) {
      var t2 = (0, e2._result)();
      t2.then(function(r2) {
        (0 === e2._status || -1 === e2._status) && (e2._status = 1, e2._result = r2, void 0 === t2.status && (t2.status = "fulfilled", t2.value = r2));
      }, function(r2) {
        (0 === e2._status || -1 === e2._status) && (e2._status = 2, e2._result = r2, void 0 === t2.status && (t2.status = "rejected", t2.reason = r2));
      }), -1 === e2._status && (e2._status = 0, e2._result = t2);
    }
    if (1 === e2._status) return e2._result.default;
    throw e2._result;
  }
  var H = "function" == typeof reportError ? reportError : function(e2) {
    if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
      var t2 = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: "object" == typeof e2 && null !== e2 && "string" == typeof e2.message ? String(e2.message) : String(e2), error: e2 });
      if (!window.dispatchEvent(t2)) return;
    } else if ("object" == typeof n.default && "function" == typeof n.default.emit) return void n.default.emit("uncaughtException", e2);
    console.error(e2);
  };
  function N(e2) {
    var t2 = S.T, r2 = {};
    r2.types = null !== t2 ? t2.types : null, S.T = r2;
    try {
      var n2 = e2(), o2 = S.S;
      null !== o2 && o2(r2, n2), "object" == typeof n2 && null !== n2 && "function" == typeof n2.then && n2.then(j, H);
    } catch (e3) {
      H(e3);
    } finally {
      null !== t2 && null !== r2.types && (t2.types = r2.types), S.T = t2;
    }
  }
  function B(e2) {
    var t2 = S.T;
    if (null !== t2) {
      var r2 = t2.types;
      null === r2 ? t2.types = [e2] : -1 === r2.indexOf(e2) && r2.push(e2);
    } else N(B.bind(null, e2));
  }
  r.Activity = M, r.Children = { map: L, forEach: function(e2, t2, r2) {
    L(e2, function() {
      t2.apply(this, arguments);
    }, r2);
  }, count: function(e2) {
    var t2 = 0;
    return L(e2, function() {
      t2++;
    }), t2;
  }, toArray: function(e2) {
    return L(e2, function(e3) {
      return e3;
    }) || [];
  }, only: function(e2) {
    if (!C(e2)) throw Error("React.Children.only expected to receive a single React element child.");
    return e2;
  } }, r.Component = m, r.Fragment = i, r.Profiler = l, r.PureComponent = O, r.StrictMode = s, r.Suspense = y, r.ViewTransition = g, r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S, r.__COMPILER_RUNTIME = { __proto__: null, c: function(e2) {
    return S.H.useMemoCache(e2);
  } }, r.addTransitionType = B, r.cache = function(e2) {
    return function() {
      return e2.apply(null, arguments);
    };
  }, r.cacheSignal = function() {
    return null;
  }, r.cloneElement = function(e2, t2, r2) {
    if (null == e2) throw Error("The argument must be a React element, but you passed " + e2 + ".");
    var n2 = h({}, e2.props), o2 = e2.key;
    if (null != t2) for (a2 in void 0 !== t2.key && (o2 = "" + t2.key), t2) T.call(t2, a2) && "key" !== a2 && "__self" !== a2 && "__source" !== a2 && ("ref" !== a2 || void 0 !== t2.ref) && (n2[a2] = t2[a2]);
    var a2 = arguments.length - 2;
    if (1 === a2) n2.children = r2;
    else if (1 < a2) {
      for (var u2 = Array(a2), i2 = 0; i2 < a2; i2++) u2[i2] = arguments[i2 + 2];
      n2.children = u2;
    }
    return k(e2.type, o2, n2);
  }, r.createContext = function(e2) {
    return (e2 = { $$typeof: d, _currentValue: e2, _currentValue2: e2, _threadCount: 0, Provider: null, Consumer: null }).Provider = e2, e2.Consumer = { $$typeof: c, _context: e2 }, e2;
  }, r.createElement = function(e2, t2, r2) {
    var n2, o2 = {}, a2 = null;
    if (null != t2) for (n2 in void 0 !== t2.key && (a2 = "" + t2.key), t2) T.call(t2, n2) && "key" !== n2 && "__self" !== n2 && "__source" !== n2 && (o2[n2] = t2[n2]);
    var u2 = arguments.length - 2;
    if (1 === u2) o2.children = r2;
    else if (1 < u2) {
      for (var i2 = Array(u2), s2 = 0; s2 < u2; s2++) i2[s2] = arguments[s2 + 2];
      o2.children = i2;
    }
    if (e2 && e2.defaultProps) for (n2 in u2 = e2.defaultProps) void 0 === o2[n2] && (o2[n2] = u2[n2]);
    return k(e2, a2, o2);
  }, r.createRef = function() {
    return { current: null };
  }, r.forwardRef = function(e2) {
    return { $$typeof: f, render: e2 };
  }, r.isValidElement = C, r.lazy = function(e2) {
    return { $$typeof: _, _payload: { _status: -1, _result: e2 }, _init: D };
  }, r.memo = function(e2, t2) {
    return { $$typeof: p, type: e2, compare: void 0 === t2 ? null : t2 };
  }, r.startTransition = N, r.unstable_useCacheRefresh = function() {
    return S.H.useCacheRefresh();
  }, r.use = function(e2) {
    return S.H.use(e2);
  }, r.useActionState = function(e2, t2, r2) {
    return S.H.useActionState(e2, t2, r2);
  }, r.useCallback = function(e2, t2) {
    return S.H.useCallback(e2, t2);
  }, r.useContext = function(e2) {
    return S.H.useContext(e2);
  }, r.useDebugValue = function() {
  }, r.useDeferredValue = function(e2, t2) {
    return S.H.useDeferredValue(e2, t2);
  }, r.useEffect = function(e2, t2) {
    return S.H.useEffect(e2, t2);
  }, r.useEffectEvent = function(e2) {
    return S.H.useEffectEvent(e2);
  }, r.useId = function() {
    return S.H.useId();
  }, r.useImperativeHandle = function(e2, t2, r2) {
    return S.H.useImperativeHandle(e2, t2, r2);
  }, r.useInsertionEffect = function(e2, t2) {
    return S.H.useInsertionEffect(e2, t2);
  }, r.useLayoutEffect = function(e2, t2) {
    return S.H.useLayoutEffect(e2, t2);
  }, r.useMemo = function(e2, t2) {
    return S.H.useMemo(e2, t2);
  }, r.useOptimistic = function(e2, t2) {
    return S.H.useOptimistic(e2, t2);
  }, r.useReducer = function(e2, t2, r2) {
    return S.H.useReducer(e2, t2, r2);
  }, r.useRef = function(e2) {
    return S.H.useRef(e2);
  }, r.useState = function(e2) {
    return S.H.useState(e2);
  }, r.useSyncExternalStore = function(e2, t2, r2) {
    return S.H.useSyncExternalStore(e2, t2, r2);
  }, r.useTransition = function() {
    return S.H.useTransition();
  }, r.version = "19.3.0-canary-cbb046ab-20260731";
}, 856757, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = e.r(632886);
}, 225478, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var o = { AppRouterContext: function() {
    return i;
  }, GlobalLayoutRouterContext: function() {
    return l;
  }, LayoutRouterContext: function() {
    return s;
  }, MissingSlotContext: function() {
    return d;
  }, TemplateContext: function() {
    return c;
  } };
  for (var a in o) Object.defineProperty(r, a, { enumerable: true, get: o[a] });
  let u = e.r(481258)._(e.r(856757)), i = u.default.createContext(null), s = u.default.createContext(null), l = u.default.createContext(null), c = u.default.createContext(null), d = u.default.createContext(/* @__PURE__ */ new Set());
}, 654216, (e, t, r) => {
  "use strict";
  let n;
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { getAssetToken: function() {
    return l;
  }, getAssetTokenQuery: function() {
    return c;
  }, getDeploymentId: function() {
    return i;
  }, getDeploymentIdQuery: function() {
    return s;
  } };
  for (var u in a) Object.defineProperty(r, u, { enumerable: true, get: a[u] });
  function i() {
    return n;
  }
  function s(e2 = false) {
    let t2 = n;
    return t2 ? `${e2 ? "&" : "?"}dpl=${t2}` : "";
  }
  function l() {
  }
  function c(e2 = false) {
    return l(), "";
  }
  "u" > typeof window ? (n = document.documentElement.dataset.dplId, delete document.documentElement.dataset.dplId) : n = globalThis.NEXT_DEPLOYMENT_ID || void 0;
}, 36907, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var o = { NavigationPromisesContext: function() {
    return d;
  }, PathParamsContext: function() {
    return c;
  }, PathnameContext: function() {
    return l;
  }, ReadonlyURLSearchParams: function() {
    return i.ReadonlyURLSearchParams;
  }, SearchParamsContext: function() {
    return s;
  }, createDevToolsInstrumentedPromise: function() {
    return f;
  } };
  for (var a in o) Object.defineProperty(r, a, { enumerable: true, get: o[a] });
  let u = e.r(856757), i = e.r(702696), s = (0, u.createContext)(null), l = (0, u.createContext)(null), c = (0, u.createContext)(null), d = (0, u.createContext)(null);
  function f(e2, t2) {
    let r2 = Promise.resolve(t2);
    return r2.status = "fulfilled", r2.value = t2, r2.displayName = `${e2} (SSR)`, r2;
  }
}, 292638, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var o = { BailoutToCSRError: function() {
    return i;
  }, isBailoutToCSRError: function() {
    return s;
  } };
  for (var a in o) Object.defineProperty(r, a, { enumerable: true, get: o[a] });
  let u = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
  class i extends Error {
    constructor(e2) {
      super(`Bail out to client-side rendering: ${e2}`), this.reason = e2, this.digest = u;
    }
  }
  function s(e2) {
    return "object" == typeof e2 && null !== e2 && "digest" in e2 && e2.digest === u;
  }
}]);
