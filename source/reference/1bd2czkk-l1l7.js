;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "abf81a6c-f548-9b5c-6395-2e2d93fee855");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 498814, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { ErrorBoundary: function() {
    return M;
  }, ErrorBoundaryHandler: function() {
    return _;
  } };
  for (var o in a) Object.defineProperty(r, o, { enumerable: true, get: a[o] });
  let u = e.r(744066), s = e.r(68982), i = u._(e.r(856757)), l = e.r(164496), d = e.r(664022);
  e.r(289621);
  let c = e.r(534604), f = e.r(281597), y = e.r(225478), p = "u" > typeof window && (0, f.isBot)(window.navigator.userAgent);
  class _ extends i.default.Component {
    static {
      this.contextType = y.AppRouterContext;
    }
    constructor(e2) {
      super(e2), this.reset = () => {
        this.setState({ error: null });
      }, this.retry = () => {
        (0, i.startTransition)(() => {
          this.context?.refresh(), this.reset();
        });
      }, this.state = { error: null, previousPathname: this.props.pathname };
    }
    static getDerivedStateFromError(e2) {
      if ((0, d.isNextRouterError)(e2)) throw e2;
      return { error: { thrownValue: e2 } };
    }
    static getDerivedStateFromProps(e2, t2) {
      let { error: r2 } = t2;
      return e2.pathname !== t2.previousPathname && t2.error ? { error: null, previousPathname: e2.pathname } : { error: t2.error, previousPathname: e2.pathname };
    }
    render() {
      if (this.state.error && !p) {
        let e2 = this.state.error.thrownValue;
        return (0, c.handleISRError)({ error: e2 }), (0, s.jsxs)(s.Fragment, { children: [this.props.errorStyles, this.props.errorScripts, (0, s.jsx)(this.props.errorComponent, { error: e2, reset: this.reset, retry: this.retry })] });
      }
      return this.props.children;
    }
  }
  function M({ errorComponent: e2, errorStyles: t2, errorScripts: r2, children: n2 }) {
    let a2 = (0, l.useUntrackedPathname)();
    return e2 ? (0, s.jsx)(_, { pathname: a2, errorComponent: e2, errorStyles: t2, errorScripts: r2, children: n2 }) : (0, s.jsx)(s.Fragment, { children: n2 });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 534604, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "handleISRError", { enumerable: true, get: function() {
    return o;
  } });
  let a = e.r(443601);
  function o({ error: e2 }) {
    if (a.workAsyncStorage) {
      let t2 = a.workAsyncStorage.getStore();
      if (t2?.isStaticGeneration) throw e2 && console.error(e2), e2;
    }
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 289621, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { handleHardNavError: function() {
    return s;
  }, useNavFailureHandler: function() {
    return i;
  } };
  for (var o in a) Object.defineProperty(r, o, { enumerable: true, get: a[o] });
  e.r(856757);
  let u = e.r(537444);
  function s(e2) {
    return "u" > typeof window && !!window.next.__pendingUrl && (0, u.createHrefFromUrl)(new URL(window.location.href)) !== (0, u.createHrefFromUrl)(window.next.__pendingUrl) && (console.error("Error occurred during navigation, falling back to hard navigation", e2), window.location.href = window.next.__pendingUrl.toString(), true);
  }
  function i() {
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 164496, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "useUntrackedPathname", { enumerable: true, get: function() {
    return s;
  } });
  let a = e.r(856757), o = e.r(36907), u = e.r(443601);
  function s() {
    return !(function() {
      if ("u" < typeof window) {
        let e2 = u.workUnitAsyncStorage.getStore();
        if (!e2) return false;
        switch (e2.type) {
          case "prerender":
          case "prerender-client":
          case "prerender-ppr":
          case "validation-client":
            let t2 = e2.fallbackRouteParams;
            return !!t2 && t2.size > 0;
        }
      }
      return false;
    })() ? (0, a.useContext)(o.PathnameContext) : null;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 114633, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { RedirectBoundary: function() {
    return p;
  }, RedirectErrorBoundary: function() {
    return y;
  } };
  for (var o in a) Object.defineProperty(r, o, { enumerable: true, get: a[o] });
  let u = e.r(744066), s = e.r(68982), i = u._(e.r(856757)), l = e.r(300593), d = e.r(944885), c = e.r(219482);
  function f({ redirect: e2, reset: t2, redirectType: r2 }) {
    let n2 = (0, l.useRouter)();
    return (0, i.useEffect)(() => {
      i.default.startTransition(() => {
        "push" === r2 ? n2.push(e2, {}) : n2.replace(e2, {}), t2();
      });
    }, [e2, r2, t2, n2]), null;
  }
  class y extends i.default.Component {
    constructor(e2) {
      super(e2), this.state = { redirect: null, redirectType: null };
    }
    static getDerivedStateFromError(e2) {
      if ((0, c.isRedirectError)(e2)) {
        let t2 = (0, d.getURLFromRedirectError)(e2), r2 = (0, d.getRedirectTypeFromError)(e2);
        return "handled" in e2 ? { redirect: null, redirectType: null } : { redirect: t2, redirectType: r2 };
      }
      throw e2;
    }
    render() {
      let { redirect: e2, redirectType: t2 } = this.state;
      return null !== e2 && null !== t2 ? (0, s.jsx)(f, { redirect: e2, redirectType: t2, reset: () => this.setState({ redirect: null }) }) : this.props.children;
    }
  }
  function p({ children: e2 }) {
    let t2 = (0, l.useRouter)();
    return (0, s.jsx)(y, { router: t2, children: e2 });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 815400, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "createRouterCacheKey", { enumerable: true, get: function() {
    return o;
  } });
  let a = e.r(672883);
  function o(e2, t2 = false) {
    return Array.isArray(e2) ? `${e2[0]}|${e2[1]}|${e2[2]}` : t2 && e2.startsWith(a.PAGE_SEGMENT_KEY) ? a.PAGE_SEGMENT_KEY : e2;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 628498, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "unresolvedThenable", { enumerable: true, get: function() {
    return a;
  } });
  let a = { then: () => {
  } };
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 532226, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { cancelIdleCallback: function() {
    return s;
  }, requestIdleCallback: function() {
    return u;
  } };
  for (var o in a) Object.defineProperty(r, o, { enumerable: true, get: a[o] });
  let u = "u" > typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e2) {
    let t2 = Date.now();
    return self.setTimeout(function() {
      e2({ didTimeout: false, timeRemaining: function() {
        return Math.max(0, 50 - (Date.now() - t2));
      } });
    }, 1);
  }, s = "u" > typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e2) {
    return clearTimeout(e2);
  };
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 306926, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "setAttributesFromProps", { enumerable: true, get: function() {
    return s;
  } });
  let a = { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv", noModule: "noModule" }, o = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"];
  function u(e2) {
    return ["async", "defer", "noModule"].includes(e2);
  }
  function s(e2, t2) {
    for (let [r2, n2] of Object.entries(t2)) {
      if (!t2.hasOwnProperty(r2) || o.includes(r2) || void 0 === n2) continue;
      let s2 = a[r2] || r2.toLowerCase();
      "SCRIPT" === e2.tagName && u(s2) ? e2[s2] = !!n2 : e2.setAttribute(s2, String(n2)), (false === n2 || "SCRIPT" === e2.tagName && u(s2) && (!n2 || "false" === n2)) && (e2.setAttribute(s2, ""), e2.removeAttribute(s2));
    }
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 310506, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { METADATA_BOUNDARY_NAME: function() {
    return u;
  }, OUTLET_BOUNDARY_NAME: function() {
    return i;
  }, ROOT_LAYOUT_BOUNDARY_NAME: function() {
    return l;
  }, VIEWPORT_BOUNDARY_NAME: function() {
    return s;
  } };
  for (var o in a) Object.defineProperty(r, o, { enumerable: true, get: a[o] });
  let u = "__next_metadata_boundary__", s = "__next_viewport_boundary__", i = "__next_outlet_boundary__", l = "__next_root_layout_boundary__";
}, 542365, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { MetadataBoundary: function() {
    return i;
  }, OutletBoundary: function() {
    return d;
  }, RootLayoutBoundary: function() {
    return c;
  }, ViewportBoundary: function() {
    return l;
  } };
  for (var o in a) Object.defineProperty(r, o, { enumerable: true, get: a[o] });
  let u = e.r(310506), s = { [u.METADATA_BOUNDARY_NAME]: function({ children: e2 }) {
    return e2;
  }, [u.VIEWPORT_BOUNDARY_NAME]: function({ children: e2 }) {
    return e2;
  }, [u.OUTLET_BOUNDARY_NAME]: function({ children: e2 }) {
    return e2;
  }, [u.ROOT_LAYOUT_BOUNDARY_NAME]: function({ children: e2 }) {
    return e2;
  } }, i = s[u.METADATA_BOUNDARY_NAME.slice(0)], l = s[u.VIEWPORT_BOUNDARY_NAME.slice(0)], d = s[u.OUTLET_BOUNDARY_NAME.slice(0)], c = s[u.ROOT_LAYOUT_BOUNDARY_NAME.slice(0)];
}, 542145, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function a(e2) {
    return e2.split("/").map((e3) => encodeURIComponent(e3)).join("/");
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "encodeURIPath", { enumerable: true, get: function() {
    return a;
  } });
}, 980287, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "HeadManagerContext", { enumerable: true, get: function() {
    return a;
  } });
  let a = e.r(481258)._(e.r(856757)).default.createContext({});
}, 354602, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { ESCAPE_REGEX: function() {
    return s;
  }, htmlEscapeAttributeString: function() {
    return c;
  }, htmlEscapeJsonString: function() {
    return d;
  } };
  for (var o in a) Object.defineProperty(r, o, { enumerable: true, get: a[o] });
  let u = { "&": "\\u0026", ">": "\\u003e", "<": "\\u003c", "\u2028": "\\u2028", "\u2029": "\\u2029" }, s = /[&><\u2028\u2029]/g, i = { "&": "&amp;", '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;" }, l = /[&"'<>]/g;
  function d(e2) {
    return e2.replace(s, (e3) => u[e3]);
  }
  function c(e2) {
    return e2.replace(l, (e3) => i[e3]);
  }
}, 317131, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { default: function() {
    return O;
  }, handleClientScriptLoad: function() {
    return w;
  }, initScriptLoader: function() {
    return h;
  } };
  for (var o in a) Object.defineProperty(r, o, { enumerable: true, get: a[o] });
  let u = e.r(481258), s = e.r(744066), i = e.r(68982), l = u._(e.r(403432)), d = s._(e.r(856757)), c = e.r(980287), f = e.r(306926), y = e.r(532226), p = e.r(354602), _ = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Set(), g = (e2) => {
    let { src: t2, id: r2, onLoad: n2 = () => {
    }, onReady: a2 = null, dangerouslySetInnerHTML: o2, children: u2 = "", strategy: s2 = "afterInteractive", onError: i2, stylesheets: d2 } = e2, c2 = r2 || t2;
    if (c2 && M.has(c2)) return;
    if (_.has(t2)) {
      M.add(c2), _.get(t2).then(n2, i2);
      return;
    }
    let y2 = () => {
      a2 && a2(), M.add(c2);
    }, p2 = document.createElement("script"), g2 = new Promise((e3, t3) => {
      p2.addEventListener("load", function(t4) {
        e3(), n2 && n2.call(this, t4), y2();
      }), p2.addEventListener("error", function(e4) {
        t3(e4);
      });
    }).catch(function(e3) {
      i2 && i2(e3);
    });
    o2 ? (p2.innerHTML = o2.__html || "", y2()) : u2 ? (p2.textContent = "string" == typeof u2 ? u2 : Array.isArray(u2) ? u2.join("") : "", y2()) : t2 && (p2.src = t2, _.set(t2, g2)), (0, f.setAttributesFromProps)(p2, e2), "worker" === s2 && p2.setAttribute("type", "text/partytown"), p2.setAttribute("data-nscript", s2), d2 && ((e3) => {
      if (l.default.preinit) return e3.forEach((e4) => {
        l.default.preinit(e4, { as: "style" });
      });
      if ("u" > typeof window) {
        let t3 = document.head;
        e3.forEach((e4) => {
          let r3 = document.createElement("link");
          r3.type = "text/css", r3.rel = "stylesheet", r3.href = e4, t3.appendChild(r3);
        });
      }
    })(d2), document.body.appendChild(p2);
  };
  function w(e2) {
    let { strategy: t2 = "afterInteractive" } = e2;
    "lazyOnload" === t2 ? window.addEventListener("load", () => {
      (0, y.requestIdleCallback)(() => g(e2));
    }) : g(e2);
  }
  function h(e2) {
    e2.forEach(w), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach((e3) => {
      let t2 = e3.id || e3.getAttribute("src");
      M.add(t2);
    });
  }
  function b(e2) {
    let { id: t2, src: r2 = "", onLoad: n2 = () => {
    }, onReady: a2 = null, strategy: o2 = "afterInteractive", onError: u2, stylesheets: s2, ...f2 } = e2, { updateScripts: _2, scripts: w2, getIsSsr: h2, appDir: b2, nonce: O2 } = (0, d.useContext)(c.HeadManagerContext);
    O2 = f2.nonce || O2;
    let E = (0, d.useRef)(false);
    (0, d.useEffect)(() => {
      let e3 = t2 || r2;
      E.current || (a2 && e3 && M.has(e3) && a2(), E.current = true);
    }, [a2, t2, r2]);
    let v = (0, d.useRef)(false);
    if ((0, d.useEffect)(() => {
      if (!v.current) {
        if ("afterInteractive" === o2) g(e2);
        else "lazyOnload" === o2 && ("complete" === document.readyState ? (0, y.requestIdleCallback)(() => g(e2)) : window.addEventListener("load", () => {
          (0, y.requestIdleCallback)(() => g(e2));
        }));
        v.current = true;
      }
    }, [e2, o2]), ("beforeInteractive" === o2 || "worker" === o2) && (_2 ? (w2[o2] = (w2[o2] || []).concat([{ id: t2, src: r2, onLoad: n2, onReady: a2, onError: u2, ...f2, nonce: O2 }]), _2(w2)) : h2 && h2() ? M.add(t2 || r2) : h2 && !h2() && g({ ...e2, nonce: O2 })), b2) {
      if (s2 && s2.forEach((e3) => {
        l.default.preinit(e3, { as: "style" });
      }), "beforeInteractive" === o2) if (!r2) return f2.dangerouslySetInnerHTML && (f2.children = f2.dangerouslySetInnerHTML.__html, delete f2.dangerouslySetInnerHTML), (0, i.jsx)("script", { nonce: O2, dangerouslySetInnerHTML: { __html: `(self.__next_s=self.__next_s||[]).push(${(0, p.htmlEscapeJsonString)(JSON.stringify([0, { ...f2, id: t2 }]))})` } });
      else return l.default.preload(r2, f2.integrity ? { as: "script", integrity: f2.integrity, nonce: O2, crossOrigin: f2.crossOrigin } : { as: "script", nonce: O2, crossOrigin: f2.crossOrigin }), (0, i.jsx)("script", { nonce: O2, dangerouslySetInnerHTML: { __html: `(self.__next_s=self.__next_s||[]).push(${(0, p.htmlEscapeJsonString)(JSON.stringify([r2, { ...f2, id: t2 }]))})` } });
      "afterInteractive" === o2 && r2 && l.default.preload(r2, f2.integrity ? { as: "script", integrity: f2.integrity, nonce: O2, crossOrigin: f2.crossOrigin } : { as: "script", nonce: O2, crossOrigin: f2.crossOrigin });
    }
    return null;
  }
  Object.defineProperty(b, "__nextScript", { value: true });
  let O = b;
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 570630, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "RouterContext", { enumerable: true, get: function() {
    return a;
  } });
  let a = e.r(481258)._(e.r(856757)).default.createContext(null);
}, 504387, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function a(e2, t2 = {}) {
    if (t2.onlyHashChange) return void e2();
    let r2 = document.documentElement;
    if ("smooth" !== r2.dataset.scrollBehavior) return void e2();
    let n2 = r2.style.scrollBehavior;
    r2.style.scrollBehavior = "auto", t2.dontForceLayout || r2.getClientRects(), e2(), r2.style.scrollBehavior = n2;
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "disableSmoothScrollDuringRouteTransition", { enumerable: true, get: function() {
    return a;
  } });
}, 293316, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { formatUrl: function() {
    return i;
  }, formatWithValidation: function() {
    return d;
  }, urlObjectKeys: function() {
    return l;
  } };
  for (var o in a) Object.defineProperty(r, o, { enumerable: true, get: a[o] });
  let u = e.r(744066)._(e.r(686648)), s = /https?|ftp|gopher|file/;
  function i(e2) {
    let { auth: t2, hostname: r2 } = e2, n2 = e2.protocol || "", a2 = e2.pathname || "", o2 = e2.hash || "", i2 = e2.query || "", l2 = false;
    t2 = t2 ? encodeURIComponent(t2).replace(/%3A/i, ":") + "@" : "", e2.host ? l2 = t2 + e2.host : r2 && (l2 = t2 + (~r2.indexOf(":") ? `[${r2}]` : r2), e2.port && (l2 += ":" + e2.port)), i2 && "object" == typeof i2 && (i2 = String(u.urlQueryToSearchParams(i2)));
    let d2 = e2.search || i2 && `?${i2}` || "";
    return n2 && !n2.endsWith(":") && (n2 += ":"), e2.slashes || (!n2 || s.test(n2)) && false !== l2 ? (l2 = "//" + (l2 || ""), a2 && "/" !== a2[0] && (a2 = "/" + a2)) : l2 || (l2 = ""), o2 && "#" !== o2[0] && (o2 = "#" + o2), d2 && "?" !== d2[0] && (d2 = "?" + d2), a2 = a2.replace(/[?#]/g, encodeURIComponent), d2 = d2.replace("#", "%23"), `${n2}${l2}${a2}${d2}${o2}`;
  }
  let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
  function d(e2) {
    return i(e2);
  }
}, 608651, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "isLocalURL", { enumerable: true, get: function() {
    return u;
  } });
  let a = e.r(50595), o = e.r(95849);
  function u(e2) {
    if (!(0, a.isAbsoluteUrl)(e2)) return true;
    try {
      let t2 = (0, a.getLocationOrigin)(), r2 = new URL(e2, t2);
      return r2.origin === t2 && (0, o.hasBasePath)(r2.pathname);
    } catch (e3) {
      return false;
    }
  }
}, 686648, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { assign: function() {
    return l;
  }, searchParamsToUrlQuery: function() {
    return u;
  }, urlQueryToSearchParams: function() {
    return i;
  } };
  for (var o in a) Object.defineProperty(r, o, { enumerable: true, get: a[o] });
  function u(e2) {
    let t2 = {};
    for (let [r2, n2] of e2.entries()) {
      let e3 = t2[r2];
      void 0 === e3 ? t2[r2] = n2 : Array.isArray(e3) ? e3.push(n2) : t2[r2] = [e3, n2];
    }
    return t2;
  }
  function s(e2) {
    return "string" == typeof e2 ? e2 : ("number" != typeof e2 || isNaN(e2)) && "boolean" != typeof e2 ? "" : String(e2);
  }
  function i(e2) {
    let t2 = new URLSearchParams();
    for (let [r2, n2] of Object.entries(e2)) if (Array.isArray(n2)) for (let e3 of n2) t2.append(r2, s(e3));
    else t2.set(r2, s(n2));
    return t2;
  }
  function l(e2, ...t2) {
    for (let r2 of t2) {
      for (let t3 of r2.keys()) e2.delete(t3);
      for (let [t3, n2] of r2.entries()) e2.append(t3, n2);
    }
    return e2;
  }
}, 50595, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { DecodeError: function() {
    return w;
  }, MiddlewareNotFoundError: function() {
    return E;
  }, MissingStaticPage: function() {
    return O;
  }, NormalizeError: function() {
    return h;
  }, PageNotFoundError: function() {
    return b;
  }, SP: function() {
    return M;
  }, ST: function() {
    return g;
  }, WEB_VITALS: function() {
    return u;
  }, execOnce: function() {
    return s;
  }, getDisplayName: function() {
    return f;
  }, getLocationOrigin: function() {
    return d;
  }, getURL: function() {
    return c;
  }, isAbsoluteUrl: function() {
    return l;
  }, isResSent: function() {
    return y;
  }, loadGetInitialProps: function() {
    return _;
  }, normalizeRepeatedSlashes: function() {
    return p;
  }, stringifyError: function() {
    return v;
  } };
  for (var o in a) Object.defineProperty(r, o, { enumerable: true, get: a[o] });
  let u = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
  function s(e2) {
    let t2, r2 = false;
    return (...n2) => (r2 || (r2 = true, t2 = e2(...n2)), t2);
  }
  let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/, l = (e2) => {
    let t2 = e2.charCodeAt(0);
    return !!(t2 >= 65 && t2 <= 90 || t2 >= 97 && t2 <= 122) && i.test(e2);
  };
  function d() {
    let { protocol: e2, hostname: t2, port: r2 } = window.location;
    return `${e2}//${t2}${r2 ? ":" + r2 : ""}`;
  }
  function c() {
    let { href: e2 } = window.location, t2 = d();
    return e2.substring(t2.length);
  }
  function f(e2) {
    return "string" == typeof e2 ? e2 : e2.displayName || e2.name || "Unknown";
  }
  function y(e2) {
    return e2.finished || e2.headersSent;
  }
  function p(e2) {
    let t2 = e2.split("?");
    return t2[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t2[1] ? `?${t2.slice(1).join("?")}` : "");
  }
  async function _(e2, t2) {
    let r2 = t2.res || t2.ctx && t2.ctx.res;
    if (!e2.getInitialProps) return t2.ctx && t2.Component ? { pageProps: await _(t2.Component, t2.ctx) } : {};
    let n2 = await e2.getInitialProps(t2);
    if (r2 && y(r2)) return n2;
    if (!n2) throw Object.defineProperty(Error(`"${f(e2)}.getInitialProps()" should resolve to an object. But found "${n2}" instead.`), "__NEXT_ERROR_CODE", { value: "E1025", enumerable: false, configurable: true });
    return n2;
  }
  let M = "u" > typeof performance, g = M && ["mark", "measure", "getEntriesByName"].every((e2) => "function" == typeof performance[e2]);
  class w extends Error {
  }
  class h extends Error {
  }
  class b extends Error {
    constructor(e2) {
      super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e2}`;
    }
  }
  class O extends Error {
    constructor(e2, t2) {
      super(), this.message = `Failed to load static file for page: ${e2} ${t2}`;
    }
  }
  class E extends Error {
    constructor() {
      super(), this.code = "ENOENT", this.message = "Cannot find the middleware module";
    }
  }
  function v(e2) {
    return JSON.stringify({ message: e2.message, stack: e2.stack });
  }
}]);
