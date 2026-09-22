;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "f5ed4b28-7eb2-956e-402b-e8f6f95e6731");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 481809, (e) => {
  "use strict";
  var t = e.i(541130), r = e.i(856757), n = e.i(992766);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function i() {
    return false;
  }
  function o(e2) {
    return RegExp(`/${e2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`);
  }
  function l(e2) {
    return e2.startsWith("http://") || e2.startsWith("https://") || e2.startsWith("/") ? e2 : `/${e2}`;
  }
  function s(e2) {
    (0, r.useEffect)(() => {
      var t2;
      e2.beforeSend && (null == (t2 = window.si) || t2.call(window, "beforeSend", e2.beforeSend));
    }, [e2.beforeSend]);
    let n2 = (0, r.useRef)(null);
    return (0, r.useEffect)(() => {
      if (!n2.current) {
        let r2 = (function(e3 = {}, t2) {
          var r3;
          if (!("u" > typeof window) || null === e3.route) return null;
          window.si || (window.si = function(...e4) {
            window.siq = window.siq || [], window.siq.push(e4);
          });
          let { beforeSend: n3, src: a2, dataset: o2 } = (function(e4, t3) {
            var r4, n4;
            let a3 = e4;
            if (t3) try {
              a3 = { ...null == (r4 = JSON.parse(t3)) ? void 0 : r4.speedInsights, ...e4 };
            } catch {
            }
            let o3 = { sdkn: "@vercel/speed-insights" + (a3.framework ? `/${a3.framework}` : ""), sdkv: "2.0.0" };
            return a3.sampleRate && (o3.sampleRate = a3.sampleRate.toString()), a3.route && (o3.route = a3.route), i() && false === a3.debug && (o3.debug = "false"), a3.dsn && (o3.dsn = a3.dsn), a3.endpoint ? o3.endpoint = l(a3.endpoint) : a3.basePath && (o3.endpoint = l(`${a3.basePath}/speed-insights/vitals`)), { src: (n4 = a3).scriptSrc ? l(n4.scriptSrc) : i() ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js" : n4.dsn ? "https://va.vercel-scripts.com/v1/speed-insights/script.js" : n4.basePath ? l(`${n4.basePath}/speed-insights/script.js`) : "/_vercel/speed-insights/script.js", beforeSend: a3.beforeSend, dataset: o3 };
          })(e3, t2);
          if (document.head.querySelector(`script[src*="${a2}"]`)) return null;
          n3 && (null == (r3 = window.si) || r3.call(window, "beforeSend", n3));
          let s2 = document.createElement("script");
          for (let [e4, t3] of (s2.src = a2, s2.defer = true, Object.entries(o2))) s2.dataset[e4] = t3;
          return s2.onerror = () => {
            console.log(`[Vercel Speed Insights] Failed to load script from ${a2}. Please check if any content blockers are enabled and try again.`);
          }, document.head.appendChild(s2), { setRoute: (e4) => {
            s2.dataset.route = e4 ?? void 0;
          } };
        })({ framework: e2.framework ?? "react", basePath: e2.basePath ?? (function() {
          if (void 0 !== t.default && void 0 !== t.default.env) return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
        })(), ...e2 }, e2.configString ?? (function() {
          if (void 0 !== t.default && void 0 !== t.default.env) return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
        })());
        r2 && (n2.current = r2.setRoute);
      }
    }, [e2]), (0, r.useEffect)(() => {
      n2.current && e2.route && n2.current(e2.route);
    }, [e2.route]), null;
  }
  function c(e2) {
    let a2 = (() => {
      let e3 = (0, n.useParams)(), t2 = (0, n.useSearchParams)() || new URLSearchParams(), r2 = (0, n.usePathname)();
      if (!e3) return null;
      let a3 = Object.keys(e3).length ? e3 : Object.fromEntries(t2.entries());
      if (!r2 || !a3) return r2;
      let i2 = r2;
      try {
        let e4 = Object.entries(a3);
        for (let [t3, r3] of e4) if (!Array.isArray(r3)) {
          let e5 = o(r3);
          e5.test(i2) && (i2 = i2.replace(e5, `/[${t3}]`));
        }
        for (let [t3, r3] of e4) if (Array.isArray(r3)) {
          let e5 = o(r3.join("/"));
          e5.test(i2) && (i2 = i2.replace(e5, `/[...${t3}]`));
        }
        return i2;
      } catch {
        return r2;
      }
    })();
    return r.default.createElement(s, { route: a2, ...e2, framework: "next", basePath: (function() {
      if (void 0 !== t.default && void 0 !== t.default.env) return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
    })(), configString: (function() {
      if (void 0 !== t.default && void 0 !== t.default.env) return '{"analytics":{"scriptSrc":"58c58adbe1e5877c/script.js","viewEndpoint":"58c58adbe1e5877c/view","eventEndpoint":"58c58adbe1e5877c/event","sessionEndpoint":"58c58adbe1e5877c/session"},"speedInsights":{"scriptSrc":"6fc02418cd5ea04e/script.js","endpoint":"6fc02418cd5ea04e/vitals"}}';
    })() });
  }
  e.s(["SpeedInsights", 0, function(e2) {
    return r.default.createElement(r.Suspense, { fallback: null }, r.default.createElement(c, { ...e2 }));
  }]);
}, 827181, (e) => {
  "use strict";
  var t = e.i(938231), r = e.i(68982);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["default", 0, function({ locale: e2, ...n2 }) {
    if (!e2) throw Error(void 0);
    return (0, r.jsx)(t.IntlProvider, { locale: e2, ...n2 });
  }]);
}, 979527, (e) => {
  "use strict";
  var t = e.i(164501), r = e.i(125821), n = e.i(988789);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let i = (0, t.o)("queue-reset", () => ({ mutex: 0 }));
  function o(e2 = 1) {
    i.mutex = e2;
  }
  function l() {
    (0, n.t)(19), r.t.abortAll(), r.r.abort().forEach((e2) => r.t.queuedQuerySync.emit(e2));
  }
  try {
    var s = "u" > typeof window ? window : e.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var c = e.i(856757), d = e.i(992766);
  try {
    var u = "u" > typeof window ? window : e.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function p() {
    o(0), l();
  }
  function h() {
    let e2 = (0, d.usePathname)(), n2 = (0, c.useRef)(e2);
    return n2.current !== e2 && (n2.current = e2, r.r.reset()), (0, c.useEffect)(() => (!(function() {
      var e3;
      if (e3 = "next/app", "u" < typeof history || (history.nuqs?.version && "2.9.5" !== history.nuqs.version ? (console.error((0, t.l)(409), history.nuqs.version, t.s, e3), true) : !!history.nuqs?.adapters?.includes(e3))) return;
      let r2 = history.replaceState, n3 = history.pushState;
      history.replaceState = function(e4, t2, n4) {
        return r2.call(history, e4, "__nuqs__" === t2 ? "" : t2, n4);
      }, history.pushState = function(e4, t2, r3) {
        return "__nuqs__" !== t2 && (function(e5 = l) {
          i.mutex = Math.max(0, i.mutex - 1), i.mutex > 0 || e5();
        })(() => {
          queueMicrotask(l);
        }), n3.call(history, e4, "__nuqs__" === t2 ? "" : t2, r3);
      }, history.nuqs = history.nuqs ?? { version: "2.9.5", adapters: [] }, history.nuqs.adapters.push("next/app");
    })(), window.addEventListener("popstate", p), () => window.removeEventListener("popstate", p)), []), null;
  }
  try {
    var m = "u" > typeof window ? window : e.g;
    m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[new m.Error().stack] = Object.assign({}, m._sentryModuleMetadata[new m.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let f = (0, t.n)(function() {
    let e2 = (0, d.useRouter)(), r2 = (0, d.usePathname)(), [a2, i2] = (0, c.useOptimistic)((0, d.useSearchParams)() ?? new URLSearchParams());
    return { searchParams: a2, pathname: r2, updateUrl: (0, c.useCallback)((r3, a3) => {
      (0, c.startTransition)(() => {
        a3.shallow || i2(r3);
        let l2 = (function(e3) {
          let { origin: r4, pathname: n2, hash: a4 } = location;
          return r4 + n2 + (0, t.c)(e3) + a4;
        })(r3);
        (0, n.t)(20, "next/app", l2);
        let s2 = "push" === a3.history ? history.pushState : history.replaceState;
        o(0), s2.call(history, null, "__nuqs__", l2), a3.scroll && window.scrollTo(0, 0), a3.shallow || e2.replace(l2, { scroll: false });
      });
    }, []), rateLimitFactor: 3, autoResetQueueOnUpdate: false };
  });
  e.s(["NuqsAdapter", 0, function({ children: e2, ...t2 }) {
    return (0, c.createElement)(f, { ...t2, children: [(0, c.createElement)(c.Suspense, { key: "nuqs-adapter-suspense-navspy", children: (0, c.createElement)(h) }), e2] });
  }], 979527);
}, 868770, (e, t, r) => {
  t.exports = { name: "react-grab", version: "0.2.0", description: "Select context for coding agents directly from your website", keywords: ["agent", "context", "grab", "react", "react-grab"], homepage: "https://react-grab.com", bugs: { url: "https://github.com/aidenybai/react-grab/issues" }, license: "MIT", author: { name: "Aiden Bai", email: "aiden@million.dev" }, repository: { type: "git", url: "git+https://github.com/aidenybai/react-grab.git" }, bin: { "react-grab": "./bin/cli.js" }, files: ["bin", "dist", "package.json", "README.md", "LICENSE"], type: "module", main: "dist/index.js", module: "dist/index.js", browser: "dist/index.global.js", types: "dist/index.d.ts", exports: { "./package.json": "./package.json", ".": { import: { types: "./dist/index.d.ts", default: "./dist/index.js" }, require: { types: "./dist/index.d.cts", default: "./dist/index.cjs" } }, "./core": { import: { types: "./dist/core/index.d.ts", default: "./dist/core/index.js" }, require: { types: "./dist/core/index.d.cts", default: "./dist/core/index.cjs" } }, "./primitives": { import: { types: "./dist/primitives.d.ts", default: "./dist/primitives.js" }, require: { types: "./dist/primitives.d.cts", default: "./dist/primitives.cjs" } }, "./styles.css": "./dist/styles.css", "./dist/styles.css": "./dist/styles.css", "./dist/*": "./dist/*.js", "./dist/*.js": "./dist/*.js", "./dist/*.cjs": "./dist/*.cjs" }, publishConfig: { access: "public" }, dependencies: { bippy: "^0.6.1", "@react-grab/cli": "0.2.0" }, devDependencies: { "@babel/core": "^7.29.0", "@babel/preset-typescript": "^7.28.5", "@jridgewell/trace-mapping": "^0.3.31", "@playwright/test": "^1.59.1", "@tailwindcss/cli": "^4.3.0", "@types/babel__core": "^7.20.5", "@types/node": "^25.6.2", "@types/react": "^19.2.14", "babel-preset-solid": "^1.9.12", concurrently: "^9.2.1", "expect-sdk": "^0.1.2", "solid-js": "^1.9.12", tailwindcss: "^4.3.0", tsx: "^4.21.0", "vite-plus": "^0.1.20", "@react-grab/playwright-coverage": "0.1.47" }, peerDependencies: { react: ">=17.0.0" }, peerDependenciesMeta: { react: { optional: true } }, scripts: { "css:watch": "tailwindcss -i ./src/styles.css -o ./dist/styles.css -w", prebuild: "mkdir -p dist && tailwindcss -i ./src/styles.css -o ./dist/styles.css -m && tsx scripts/css-rem-to-px.ts", build: "NODE_ENV=production vp pack", "build:e2e-development": "pnpm run prebuild && NODE_ENV=development REACT_GRAB_SOURCE_LOCATIONS=true vp pack --out-dir ../../apps/e2e-react-grab-development/dist", "build:e2e-development:coverage": "pnpm run prebuild && NODE_ENV=production REACT_GRAB_SOURCE_LOCATIONS=true REACT_GRAB_NO_MINIFY=true REACT_GRAB_SOURCEMAP=true vp pack --out-dir ../../apps/e2e-react-grab-development/dist", "build:demo": "IS_DEMO=true pnpm build", "build:profiling": "pnpm run prebuild && NODE_ENV=profiling REACT_GRAB_NO_MINIFY=true REACT_GRAB_SOURCEMAP=true vp pack", "build:coverage": "pnpm run prebuild && NODE_ENV=production REACT_GRAB_NO_MINIFY=true REACT_GRAB_SOURCEMAP=true vp pack", dev: 'concurrently "pnpm:css:watch" "vp pack --watch"', test: "vp test run tests && playwright test --grep-invert @perf && E2E_ENVIRONMENT=vite-plus-development playwright test --grep @perf --workers=1", "test:unit": "vp test run tests", "pretest:coverage": "pnpm --filter @react-grab/playwright-coverage build", "test:coverage": "COVERAGE=1 playwright test", "test:perf": "playwright test --grep @perf --reporter=list", "test:perf:animation": "playwright test e2e/perf-bench.spec.ts --grep animation-scheduling-controls --reporter=list", "test:perf:idle": "playwright test e2e/perf-bench.spec.ts --grep idle-after-activation --reporter=list", "test:perf:dom-breakpoints": "PERF_DOM_BREAKPOINTS=1 playwright test e2e/perf-bench.spec.ts --grep dom-rerender-during-selection --reporter=list", "test:perf:trace": "PERF_TRACE=1 playwright test --grep @perf --reporter=list", "test:perf:render": "PERF_RENDER_TRACE=1 playwright test --grep @perf --reporter=list", "test:perf:full": "PERF_TRACE=1 PERF_RENDER_TRACE=1 playwright test --grep @perf --reporter=list && node scripts/deopt-trace.mjs && node scripts/analyze-perf-trace.mjs perf/${PERF_LABEL:-current}", "perf:analyze": "node scripts/analyze-perf-trace.mjs", "test:perf:baseline": "PERF_LABEL=baseline playwright test --grep @perf --reporter=list", "test:expect": "bun e2e/react-grab.expect.ts", typecheck: "tsc --noEmit", "test:e2e:ui": "playwright test --ui", "perf:deopt": "node scripts/deopt-trace.mjs" } };
}, 434556, (e) => {
  "use strict";
  let t, r, n, a, i, o, l, s, c;
  var d, u, p, h, m, f, g, v, w, b, y, x = e.i(856757);
  try {
    var _ = "u" > typeof window ? window : e.g;
    _._sentryModuleMetadata = _._sentryModuleMetadata || {}, _._sentryModuleMetadata[new _.Error().stack] = Object.assign({}, _._sentryModuleMetadata[new _.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let k = "bippy-0.5.43", N = Object.defineProperty, S = Object.prototype.hasOwnProperty, E = () => {
  }, M = (e10) => {
    try {
      Function.prototype.toString.call(e10).indexOf("^_^") > -1 && setTimeout(() => {
        throw Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build");
      });
    } catch {
    }
  }, C = (e10 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__) => !!(e10 && "getFiberRoots" in e10), T = false, A, z = (e10 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__) => !!T || (e10 && "function" == typeof e10.inject && (A = e10.inject.toString()), !!A?.includes("(injected)")), $ = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set(), O = (e10) => {
    e10 && $.add(e10);
    try {
      let t10 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!t10) return;
      if (!t10._instrumentationSource) {
        t10.checkDCE = M, t10.supportsFiber = true, t10.supportsFlight = true, t10.hasUnsupportedRendererAttached = false, t10._instrumentationSource = k, t10._instrumentationIsActive = false;
        let e11 = C(t10);
        if (e11 || (t10.on = E), t10.renderers.size) {
          t10._instrumentationIsActive = true, $.forEach((e12) => e12());
          return;
        }
        let r10 = t10.inject, n10 = z(t10);
        n10 && !e11 && (T = true, t10.inject({ scheduleRefresh() {
        } }) && (t10._instrumentationIsActive = true)), t10.inject = (e12) => {
          let a10 = r10(e12);
          return R.add(e12), n10 && t10.renderers.set(a10, e12), t10._instrumentationIsActive = true, $.forEach((e13) => e13()), a10;
        };
      }
      (t10.renderers.size || t10._instrumentationIsActive || z()) && e10?.();
    } catch {
    }
  }, j = (e10) => S.call(globalThis, "__REACT_DEVTOOLS_GLOBAL_HOOK__") ? (O(e10), globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__) : ((e11) => {
    let t10 = /* @__PURE__ */ new Map(), r10 = 0, n10 = { _instrumentationIsActive: false, _instrumentationSource: k, checkDCE: M, hasUnsupportedRendererAttached: false, inject(e12) {
      let a10 = ++r10;
      return t10.set(a10, e12), R.add(e12), n10._instrumentationIsActive || (n10._instrumentationIsActive = true, $.forEach((e13) => e13())), a10;
    }, on: E, onCommitFiberRoot: E, onCommitFiberUnmount: E, onPostCommitFiberRoot: E, renderers: t10, supportsFiber: true, supportsFlight: true };
    try {
      N(globalThis, "__REACT_DEVTOOLS_GLOBAL_HOOK__", { configurable: true, enumerable: true, get: () => n10, set(t12) {
        if (t12 && "object" == typeof t12) {
          let r12 = n10.renderers;
          n10 = t12, r12.size > 0 && (r12.forEach((e12, r13) => {
            R.add(e12), t12.renderers.set(r13, e12);
          }), O(e11));
        }
      } });
      let t11 = window.hasOwnProperty, r11 = false;
      N(window, "hasOwnProperty", { configurable: true, value: function(...e12) {
        try {
          if (!r11 && "__REACT_DEVTOOLS_GLOBAL_HOOK__" === e12[0]) return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__ = void 0, r11 = true, -0;
        } catch {
        }
        return t11.apply(this, e12);
      }, writable: true });
    } catch {
      O(e11);
    }
    return n10;
  })(e10);
  try {
    var P = "u" > typeof window ? window : e.g;
    P._sentryModuleMetadata = P._sentryModuleMetadata || {}, P._sentryModuleMetadata[new P.Error().stack] = Object.assign({}, P._sentryModuleMetadata[new P.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    "u" > typeof window && (window.document?.createElement || window.navigator?.product === "ReactNative") && j();
  } catch {
  }
  try {
    var F = "u" > typeof window ? window : e.g;
    F._sentryModuleMetadata = F._sentryModuleMetadata || {}, F._sentryModuleMetadata[new F.Error().stack] = Object.assign({}, F._sentryModuleMetadata[new F.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let L = (e10) => {
    switch (e10.tag) {
      case 5:
      case 26:
      case 27:
        return true;
      default:
        return "string" == typeof e10.type;
    }
  }, I = (e10) => {
    switch (e10.tag) {
      case 1:
      case 11:
      case 0:
      case 14:
      case 15:
        return true;
      default:
        return false;
    }
  }, D = (e10) => {
    let t10 = e10.memoizedProps, r10 = e10.alternate?.memoizedProps || {}, n10 = e10.flags ?? e10.effectTag ?? 0;
    switch (e10.tag) {
      case 1:
      case 9:
      case 11:
      case 0:
      case 14:
      case 15:
        return (1 & n10) == 1;
      default:
        return !e10.alternate || r10 !== t10 || e10.alternate.memoizedState !== e10.memoizedState || e10.alternate.ref !== e10.ref;
    }
  }, B = (e10) => !!(13374 & e10.flags || 13374 & e10.subtreeFlags), U = (e10) => {
    switch (e10.tag) {
      case 18:
      case 7:
      case 6:
      case 23:
      case 22:
        return true;
      case 3:
        return false;
      default: {
        let t10 = "object" == typeof e10.type && null !== e10.type ? e10.type.$$typeof : e10.type;
        switch ("symbol" == typeof t10 ? t10.toString() : t10) {
          case 60111:
          case "Symbol(react.concurrent_mode)":
          case "Symbol(react.async_mode)":
            return true;
          default:
            return false;
        }
      }
    }
  };
  function W(e10, t10, r10 = false) {
    if (!e10) return null;
    let n10 = t10(e10);
    if (n10 instanceof Promise) return (async () => {
      if (await n10 === true) return e10;
      let a11 = r10 ? e10.return : e10.child;
      for (; a11; ) {
        let e11 = await V(a11, t10, r10);
        if (e11) return e11;
        a11 = r10 ? null : a11.sibling;
      }
      return null;
    })();
    if (true === n10) return e10;
    let a10 = r10 ? e10.return : e10.child;
    for (; a10; ) {
      let e11 = H(a10, t10, r10);
      if (e11) return e11;
      a10 = r10 ? null : a10.sibling;
    }
    return null;
  }
  let H = (e10, t10, r10 = false) => {
    if (!e10) return null;
    if (true === t10(e10)) return e10;
    let n10 = r10 ? e10.return : e10.child;
    for (; n10; ) {
      let e11 = H(n10, t10, r10);
      if (e11) return e11;
      n10 = r10 ? null : n10.sibling;
    }
    return null;
  }, V = async (e10, t10, r10 = false) => {
    if (!e10) return null;
    if (await t10(e10) === true) return e10;
    let n10 = r10 ? e10.return : e10.child;
    for (; n10; ) {
      let e11 = await V(n10, t10, r10);
      if (e11) return e11;
      n10 = r10 ? null : n10.sibling;
    }
    return null;
  }, q = (e10) => {
    let t10 = e10?.actualDuration ?? 0, r10 = t10, n10 = e10?.child ?? null;
    for (; t10 > 0 && null != n10; ) r10 -= n10.actualDuration ?? 0, n10 = n10.sibling;
    return { selfTime: r10, totalTime: t10 };
  }, K = (e10) => !!e10.updateQueue?.memoCache, G = (e10) => "function" == typeof e10 ? e10 : "object" == typeof e10 && e10 ? G(e10.type || e10.render) : null, X = (e10) => {
    if ("string" == typeof e10) return e10;
    if ("function" != typeof e10 && !("object" == typeof e10 && e10)) return null;
    let t10 = e10.displayName || e10.name || null;
    if (t10) return t10;
    let r10 = G(e10);
    return r10 && (r10.displayName || r10.name) || null;
  }, J = (e10) => {
    try {
      if ("string" == typeof e10.version && e10.bundleType > 0) return "development";
    } catch {
    }
    return "production";
  }, Y = 0, Z = /* @__PURE__ */ new WeakMap(), Q = (e10) => {
    let t10 = Z.get(e10);
    return !t10 && e10.alternate && (t10 = Z.get(e10.alternate)), t10 || ((e11, t11 = Y++) => {
      Z.set(e11, t11);
    })(e10, t10 = Y++), t10;
  }, ee = (e10, t10, r10) => {
    let n10 = t10;
    for (; null != n10; ) {
      if (Z.has(n10) || Q(n10), !U(n10) && D(n10) && e10(n10, "mount"), 13 === n10.tag) if (null !== n10.memoizedState) {
        let t11 = n10.child, r11 = t11 ? t11.sibling : null;
        if (r11) {
          let t12 = r11.child;
          null !== t12 && ee(e10, t12, false);
        }
      } else {
        let t11 = null;
        null !== n10.child && (t11 = n10.child.child), null !== t11 && ee(e10, t11, false);
      }
      else null != n10.child && ee(e10, n10.child, true);
      n10 = r10 ? n10.sibling : null;
    }
  }, et = (e10, t10, r10, n10) => {
    if (Z.has(t10) || Q(t10), !r10) return;
    Z.has(r10) || Q(r10);
    let a10 = 13 === t10.tag, i10 = !U(t10);
    i10 && D(t10) && e10(t10, "update");
    let o10 = a10 && null !== r10.memoizedState, l10 = a10 && null !== t10.memoizedState;
    if (o10 && l10) {
      let n11 = t10.child?.sibling ?? null, a11 = r10.child?.sibling ?? null;
      null !== n11 && null !== a11 && et(e10, n11, a11, t10);
    } else if (o10 && !l10) {
      let r11 = t10.child;
      null !== r11 && ee(e10, r11, true);
    } else if (!o10 && l10) {
      en(e10, r10);
      let n11 = t10.child?.sibling ?? null;
      null !== n11 && ee(e10, n11, true);
    } else if (t10.child !== r10.child) {
      let r11 = t10.child;
      for (; r11; ) {
        if (r11.alternate) {
          let a11 = r11.alternate;
          et(e10, r11, a11, i10 ? t10 : n10);
        } else ee(e10, r11, false);
        r11 = r11.sibling;
      }
    }
  }, er = (e10, t10) => {
    3 !== t10.tag && U(t10) || e10(t10, "unmount");
  }, en = (e10, t10) => {
    let r10 = 13 === t10.tag && null !== t10.memoizedState, n10 = t10.child;
    for (r10 && (n10 = (t10.child?.sibling ?? null)?.child ?? null); null !== n10; ) null !== n10.return && (er(e10, n10), en(e10, n10)), n10 = n10.sibling;
  }, ea = 0, ei = /* @__PURE__ */ new WeakMap();
  Error();
  try {
    var eo = "u" > typeof window ? window : e.g;
    eo._sentryModuleMetadata = eo._sentryModuleMetadata || {}, eo._sentryModuleMetadata[new eo.Error().stack] = Object.assign({}, eo._sentryModuleMetadata[new eo.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var el = "u" > typeof window ? window : e.g;
    el._sentryModuleMetadata = el._sentryModuleMetadata || {}, el._sentryModuleMetadata[new el.Error().stack] = Object.assign({}, el._sentryModuleMetadata[new el.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var es, ec, ed, eu, ep, eh, em, ef, eg, ev, ew, eb, ey, ex, e_, ek = {}, eN = [], eS = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, eE = Array.isArray;
  function eM(e10, t10) {
    for (var r10 in t10) e10[r10] = t10[r10];
    return e10;
  }
  function eC(e10) {
    e10 && e10.parentNode && e10.parentNode.removeChild(e10);
  }
  function eT(e10, t10, r10) {
    var n10, a10, i10, o10 = {};
    for (i10 in t10) "key" == i10 ? n10 = t10[i10] : "ref" == i10 ? a10 = t10[i10] : o10[i10] = t10[i10];
    if (arguments.length > 2 && (o10.children = arguments.length > 3 ? es.call(arguments, 2) : r10), "function" == typeof e10 && null != e10.defaultProps) for (i10 in e10.defaultProps) void 0 === o10[i10] && (o10[i10] = e10.defaultProps[i10]);
    return eA(e10, o10, n10, a10, null);
  }
  function eA(e10, t10, r10, n10, a10) {
    var i10 = { type: e10, props: t10, key: r10, ref: n10, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == a10 ? ++ed : a10, __i: -1, __u: 0 };
    return null == a10 && null != ec.vnode && ec.vnode(i10), i10;
  }
  function ez(e10) {
    return e10.children;
  }
  function e$(e10, t10) {
    this.props = e10, this.context = t10;
  }
  function eR(e10, t10) {
    if (null == t10) return e10.__ ? eR(e10.__, e10.__i + 1) : null;
    for (var r10; t10 < e10.__k.length; t10++) if (null != (r10 = e10.__k[t10]) && null != r10.__e) return r10.__e;
    return "function" == typeof e10.type ? eR(e10) : null;
  }
  function eO(e10) {
    (!e10.__d && (e10.__d = true) && eu.push(e10) && !ej.__r++ || ep != ec.debounceRendering) && ((ep = ec.debounceRendering) || eh)(ej);
  }
  function ej() {
    try {
      for (var e10, t10 = 1; eu.length; ) eu.length > t10 && eu.sort(em), e10 = eu.shift(), t10 = eu.length, (function(e11) {
        if (e11.__P && e11.__d) {
          var t11 = e11.__v, r10 = t11.__e, n10 = [], a10 = [], i10 = eM({}, t11);
          i10.__v = t11.__v + 1, ec.vnode && ec.vnode(i10), eB(e11.__P, i10, t11, e11.__n, e11.__P.namespaceURI, 32 & t11.__u ? [r10] : null, n10, null == r10 ? eR(t11) : r10, !!(32 & t11.__u), a10), i10.__v = t11.__v, i10.__.__k[i10.__i] = i10, eW(n10, i10, a10), t11.__e = t11.__ = null, i10.__e != r10 && (function e12(t12) {
            if (null != (t12 = t12.__) && null != t12.__c) return t12.__e = t12.__c.base = null, t12.__k.some(function(e13) {
              if (null != e13 && null != e13.__e) return t12.__e = t12.__c.base = e13.__e;
            }), e12(t12);
          })(i10);
        }
      })(e10);
    } finally {
      eu.length = ej.__r = 0;
    }
  }
  function eP(e10, t10, r10, n10, a10, i10, o10, l10, s10, c10, d10) {
    var u6, p2, h2, m2, f2, g2, v2, w2 = n10 && n10.__k || eN, b2 = t10.length;
    for (s10 = (function(e11, t11, r11, n11, a11) {
      var i11, o11, l11, s11, c11, d11 = r11.length, u9 = d11, p3 = 0;
      for (e11.__k = Array(a11), i11 = 0; i11 < a11; i11++) null != (o11 = t11[i11]) && "boolean" != typeof o11 && "function" != typeof o11 ? ("string" == typeof o11 || "number" == typeof o11 || "bigint" == typeof o11 || o11.constructor == String ? o11 = e11.__k[i11] = eA(null, o11, null, null, null) : eE(o11) ? o11 = e11.__k[i11] = eA(ez, { children: o11 }, null, null, null) : void 0 === o11.constructor && o11.__b > 0 ? o11 = e11.__k[i11] = eA(o11.type, o11.props, o11.key, o11.ref ? o11.ref : null, o11.__v) : e11.__k[i11] = o11, s11 = i11 + p3, o11.__ = e11, o11.__b = e11.__b + 1, l11 = null, -1 != (c11 = o11.__i = (function(e12, t12, r12, n12) {
        var a12, i12, o12, l12 = e12.key, s12 = e12.type, c12 = t12[r12], d12 = null != c12 && 0 == (2 & c12.__u);
        if (null === c12 && null == l12 || d12 && l12 == c12.key && s12 == c12.type) return r12;
        if (n12 > +!!d12) {
          for (a12 = r12 - 1, i12 = r12 + 1; a12 >= 0 || i12 < t12.length; ) if (null != (c12 = t12[o12 = a12 >= 0 ? a12-- : i12++]) && 0 == (2 & c12.__u) && l12 == c12.key && s12 == c12.type) return o12;
        }
        return -1;
      })(o11, r11, s11, u9)) && (u9--, (l11 = r11[c11]) && (l11.__u |= 2)), null == l11 || null == l11.__v ? (-1 == c11 && (a11 > d11 ? p3-- : a11 < d11 && p3++), "function" != typeof o11.type && (o11.__u |= 4)) : c11 != s11 && (c11 == s11 - 1 ? p3-- : c11 == s11 + 1 ? p3++ : (c11 > s11 ? p3-- : p3++, o11.__u |= 4))) : e11.__k[i11] = null;
      if (u9) for (i11 = 0; i11 < d11; i11++) null != (l11 = r11[i11]) && 0 == (2 & l11.__u) && (l11.__e == n11 && (n11 = eR(l11)), (function e12(t12, r12, n12) {
        var a12, i12;
        if (ec.unmount && ec.unmount(t12), (a12 = t12.ref) && (a12.current && a12.current != t12.__e || eH(a12, null, r12)), null != (a12 = t12.__c)) {
          if (a12.componentWillUnmount) try {
            a12.componentWillUnmount();
          } catch (e13) {
            ec.__e(e13, r12);
          }
          a12.base = a12.__P = null;
        }
        if (a12 = t12.__k) for (i12 = 0; i12 < a12.length; i12++) a12[i12] && e12(a12[i12], r12, n12 || "function" != typeof t12.type);
        n12 || eC(t12.__e), t12.__c = t12.__ = t12.__e = void 0;
      })(l11, l11));
      return n11;
    })(r10, t10, w2, s10, b2), u6 = 0; u6 < b2; u6++) null != (h2 = r10.__k[u6]) && (p2 = -1 != h2.__i && w2[h2.__i] || ek, h2.__i = u6, g2 = eB(e10, h2, p2, a10, i10, o10, l10, s10, c10, d10), m2 = h2.__e, h2.ref && p2.ref != h2.ref && (p2.ref && eH(p2.ref, null, h2), d10.push(h2.ref, h2.__c || m2, h2)), null == f2 && null != m2 && (f2 = m2), (v2 = !!(4 & h2.__u)) || p2.__k === h2.__k ? (s10 = (function e11(t11, r11, n11, a11) {
      var i11, o11;
      if ("function" == typeof t11.type) {
        for (i11 = t11.__k, o11 = 0; i11 && o11 < i11.length; o11++) i11[o11] && (i11[o11].__ = t11, r11 = e11(i11[o11], r11, n11, a11));
        return r11;
      }
      t11.__e != r11 && (a11 && (r11 && t11.type && !r11.parentNode && (r11 = eR(t11)), n11.insertBefore(t11.__e, r11 || null)), r11 = t11.__e);
      do
        r11 = r11 && r11.nextSibling;
      while (null != r11 && 8 == r11.nodeType);
      return r11;
    })(h2, s10, e10, v2), v2 && p2.__e && (p2.__e = null)) : "function" == typeof h2.type && void 0 !== g2 ? s10 = g2 : m2 && (s10 = m2.nextSibling), h2.__u &= -7);
    return r10.__e = f2, s10;
  }
  function eF(e10, t10) {
    return t10 = t10 || [], null == e10 || "boolean" == typeof e10 || (eE(e10) ? e10.some(function(e11) {
      eF(e11, t10);
    }) : t10.push(e10)), t10;
  }
  function eL(e10, t10, r10) {
    "-" == t10[0] ? e10.setProperty(t10, null == r10 ? "" : r10) : e10[t10] = null == r10 ? "" : "number" != typeof r10 || eS.test(t10) ? r10 : r10 + "px";
  }
  function eI(e10, t10, r10, n10, a10) {
    var i10, o10;
    e: if ("style" == t10) if ("string" == typeof r10) e10.style.cssText = r10;
    else {
      if ("string" == typeof n10 && (e10.style.cssText = n10 = ""), n10) for (t10 in n10) r10 && t10 in r10 || eL(e10.style, t10, "");
      if (r10) for (t10 in r10) n10 && r10[t10] == n10[t10] || eL(e10.style, t10, r10[t10]);
    }
    else if ("o" == t10[0] && "n" == t10[1]) i10 = t10 != (t10 = t10.replace(ew, "$1")), t10 = (o10 = t10.toLowerCase()) in e10 || "onFocusOut" == t10 || "onFocusIn" == t10 ? o10.slice(2) : t10.slice(2), e10.l || (e10.l = {}), e10.l[t10 + i10] = r10, r10 ? n10 ? r10[ev] = n10[ev] : (r10[ev] = eb, e10.addEventListener(t10, i10 ? ex : ey, i10)) : e10.removeEventListener(t10, i10 ? ex : ey, i10);
    else {
      if ("http://www.w3.org/2000/svg" == a10) t10 = t10.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != t10 && "height" != t10 && "href" != t10 && "list" != t10 && "form" != t10 && "tabIndex" != t10 && "download" != t10 && "rowSpan" != t10 && "colSpan" != t10 && "role" != t10 && "popover" != t10 && t10 in e10) try {
        e10[t10] = null == r10 ? "" : r10;
        break e;
      } catch (e11) {
      }
      "function" == typeof r10 || (null == r10 || false === r10 && "-" != t10[4] ? e10.removeAttribute(t10) : e10.setAttribute(t10, "popover" == t10 && 1 == r10 ? "" : r10));
    }
  }
  function eD(e10) {
    return function(t10) {
      if (this.l) {
        var r10 = this.l[t10.type + e10];
        if (null == t10[eg]) t10[eg] = eb++;
        else if (t10[eg] < r10[ev]) return;
        return r10(ec.event ? ec.event(t10) : t10);
      }
    };
  }
  function eB(e10, t10, r10, n10, a10, i10, o10, l10, s10, c10) {
    var d10, u6, p2, h2, m2, f2, g2, v2, w2, b2, y2, x2, _2, k2, N2, S2 = t10.type;
    if (void 0 !== t10.constructor) return null;
    128 & r10.__u && (s10 = !!(32 & r10.__u), i10 = [l10 = t10.__e = r10.__e]), (d10 = ec.__b) && d10(t10);
    e: if ("function" == typeof S2) try {
      if (v2 = t10.props, w2 = S2.prototype && S2.prototype.render, b2 = (d10 = S2.contextType) && n10[d10.__c], y2 = d10 ? b2 ? b2.props.value : d10.__ : n10, r10.__c ? g2 = (u6 = t10.__c = r10.__c).__ = u6.__E : (w2 ? t10.__c = u6 = new S2(v2, y2) : (t10.__c = u6 = new e$(v2, y2), u6.constructor = S2, u6.render = eV), b2 && b2.sub(u6), u6.state || (u6.state = {}), u6.__n = n10, p2 = u6.__d = true, u6.__h = [], u6._sb = []), w2 && null == u6.__s && (u6.__s = u6.state), w2 && null != S2.getDerivedStateFromProps && (u6.__s == u6.state && (u6.__s = eM({}, u6.__s)), eM(u6.__s, S2.getDerivedStateFromProps(v2, u6.__s))), h2 = u6.props, m2 = u6.state, u6.__v = t10, p2) w2 && null == S2.getDerivedStateFromProps && null != u6.componentWillMount && u6.componentWillMount(), w2 && null != u6.componentDidMount && u6.__h.push(u6.componentDidMount);
      else {
        if (w2 && null == S2.getDerivedStateFromProps && v2 !== h2 && null != u6.componentWillReceiveProps && u6.componentWillReceiveProps(v2, y2), t10.__v == r10.__v || !u6.__e && null != u6.shouldComponentUpdate && false === u6.shouldComponentUpdate(v2, u6.__s, y2)) {
          t10.__v != r10.__v && (u6.props = v2, u6.state = u6.__s, u6.__d = false), t10.__e = r10.__e, t10.__k = r10.__k, t10.__k.some(function(e11) {
            e11 && (e11.__ = t10);
          }), eN.push.apply(u6.__h, u6._sb), u6._sb = [], u6.__h.length && o10.push(u6);
          break e;
        }
        null != u6.componentWillUpdate && u6.componentWillUpdate(v2, u6.__s, y2), w2 && null != u6.componentDidUpdate && u6.__h.push(function() {
          u6.componentDidUpdate(h2, m2, f2);
        });
      }
      if (u6.context = y2, u6.props = v2, u6.__P = e10, u6.__e = false, x2 = ec.__r, _2 = 0, w2) u6.state = u6.__s, u6.__d = false, x2 && x2(t10), d10 = u6.render(u6.props, u6.state, u6.context), eN.push.apply(u6.__h, u6._sb), u6._sb = [];
      else do
        u6.__d = false, x2 && x2(t10), d10 = u6.render(u6.props, u6.state, u6.context), u6.state = u6.__s;
      while (u6.__d && ++_2 < 25);
      u6.state = u6.__s, null != u6.getChildContext && (n10 = eM(eM({}, n10), u6.getChildContext())), w2 && !p2 && null != u6.getSnapshotBeforeUpdate && (f2 = u6.getSnapshotBeforeUpdate(h2, m2)), k2 = null != d10 && d10.type === ez && null == d10.key ? (function e11(t11) {
        return "object" != typeof t11 || null == t11 || t11.__b > 0 ? t11 : eE(t11) ? t11.map(e11) : eM({}, t11);
      })(d10.props.children) : d10, l10 = eP(e10, eE(k2) ? k2 : [k2], t10, r10, n10, a10, i10, o10, l10, s10, c10), u6.base = t10.__e, t10.__u &= -161, u6.__h.length && o10.push(u6), g2 && (u6.__E = u6.__ = null);
    } catch (e11) {
      if (t10.__v = null, s10 || null != i10) if (e11.then) {
        for (t10.__u |= s10 ? 160 : 128; l10 && 8 == l10.nodeType && l10.nextSibling; ) l10 = l10.nextSibling;
        i10[i10.indexOf(l10)] = null, t10.__e = l10;
      } else {
        for (N2 = i10.length; N2--; ) eC(i10[N2]);
        eU(t10);
      }
      else t10.__e = r10.__e, t10.__k = r10.__k, e11.then || eU(t10);
      ec.__e(e11, t10, r10);
    }
    else null == i10 && t10.__v == r10.__v ? (t10.__k = r10.__k, t10.__e = r10.__e) : l10 = t10.__e = (function(e11, t11, r11, n11, a11, i11, o11, l11, s11) {
      var c11, d11, u9, p3, h3, m3, f3, g3 = r11.props || ek, v3 = t11.props, w3 = t11.type;
      if ("svg" == w3 ? a11 = "http://www.w3.org/2000/svg" : "math" == w3 ? a11 = "http://www.w3.org/1998/Math/MathML" : a11 || (a11 = "http://www.w3.org/1999/xhtml"), null != i11) {
        for (c11 = 0; c11 < i11.length; c11++) if ((h3 = i11[c11]) && "setAttribute" in h3 == !!w3 && (w3 ? h3.localName == w3 : 3 == h3.nodeType)) {
          e11 = h3, i11[c11] = null;
          break;
        }
      }
      if (null == e11) {
        if (null == w3) return document.createTextNode(v3);
        e11 = document.createElementNS(a11, w3, v3.is && v3), l11 && (ec.__m && ec.__m(t11, i11), l11 = false), i11 = null;
      }
      if (null == w3) g3 === v3 || l11 && e11.data == v3 || (e11.data = v3);
      else {
        if (i11 = i11 && es.call(e11.childNodes), !l11 && null != i11) for (g3 = {}, c11 = 0; c11 < e11.attributes.length; c11++) g3[(h3 = e11.attributes[c11]).name] = h3.value;
        for (c11 in g3) h3 = g3[c11], "dangerouslySetInnerHTML" == c11 ? u9 = h3 : "children" == c11 || c11 in v3 || "value" == c11 && "defaultValue" in v3 || "checked" == c11 && "defaultChecked" in v3 || eI(e11, c11, null, h3, a11);
        for (c11 in v3) h3 = v3[c11], "children" == c11 ? p3 = h3 : "dangerouslySetInnerHTML" == c11 ? d11 = h3 : "value" == c11 ? m3 = h3 : "checked" == c11 ? f3 = h3 : l11 && "function" != typeof h3 || g3[c11] === h3 || eI(e11, c11, h3, g3[c11], a11);
        if (d11) l11 || u9 && (d11.__html == u9.__html || d11.__html == e11.innerHTML) || (e11.innerHTML = d11.__html), t11.__k = [];
        else if (u9 && (e11.innerHTML = ""), eP("template" == t11.type ? e11.content : e11, eE(p3) ? p3 : [p3], t11, r11, n11, "foreignObject" == w3 ? "http://www.w3.org/1999/xhtml" : a11, i11, o11, i11 ? i11[0] : r11.__k && eR(r11, 0), l11, s11), null != i11) for (c11 = i11.length; c11--; ) eC(i11[c11]);
        l11 || (c11 = "value", "progress" == w3 && null == m3 ? e11.removeAttribute("value") : null == m3 || m3 === e11[c11] && ("progress" != w3 || m3) && ("option" != w3 || m3 == g3[c11]) || eI(e11, c11, m3, g3[c11], a11), c11 = "checked", null != f3 && f3 != e11[c11] && eI(e11, c11, f3, g3[c11], a11));
      }
      return e11;
    })(r10.__e, t10, r10, n10, a10, i10, o10, s10, c10);
    return (d10 = ec.diffed) && d10(t10), 128 & t10.__u ? void 0 : l10;
  }
  function eU(e10) {
    e10 && (e10.__c && (e10.__c.__e = true), e10.__k && e10.__k.some(eU));
  }
  function eW(e10, t10, r10) {
    for (var n10 = 0; n10 < r10.length; n10++) eH(r10[n10], r10[++n10], r10[++n10]);
    ec.__c && ec.__c(t10, e10), e10.some(function(t11) {
      try {
        e10 = t11.__h, t11.__h = [], e10.some(function(e11) {
          e11.call(t11);
        });
      } catch (e11) {
        ec.__e(e11, t11.__v);
      }
    });
  }
  function eH(e10, t10, r10) {
    try {
      if ("function" == typeof e10) {
        var n10 = "function" == typeof e10.__u;
        n10 && e10.__u(), n10 && null == t10 || (e10.__u = e10(t10));
      } else e10.current = t10;
    } catch (e11) {
      ec.__e(e11, r10);
    }
  }
  function eV(e10, t10, r10) {
    return this.constructor(e10, r10);
  }
  function eq(e10, t10, r10) {
    var n10, a10, i10, o10;
    t10 == document && (t10 = document.documentElement), ec.__ && ec.__(e10, t10), a10 = (n10 = "function" == typeof r10) ? null : r10 && r10.__k || t10.__k, i10 = [], o10 = [], eB(t10, e10 = (!n10 && r10 || t10).__k = eT(ez, null, [e10]), a10 || ek, ek, t10.namespaceURI, !n10 && r10 ? [r10] : a10 ? null : t10.firstChild ? es.call(t10.childNodes) : null, i10, !n10 && r10 ? r10 : a10 ? a10.__e : t10.firstChild, n10, o10), eW(i10, e10, o10);
  }
  function eK(e10) {
    function t10(e11) {
      var r10, n10;
      return this.getChildContext || (r10 = /* @__PURE__ */ new Set(), (n10 = {})[t10.__c] = this, this.getChildContext = function() {
        return n10;
      }, this.componentWillUnmount = function() {
        r10 = null;
      }, this.shouldComponentUpdate = function(e12) {
        this.props.value != e12.value && r10.forEach(function(e13) {
          e13.__e = true, eO(e13);
        });
      }, this.sub = function(e12) {
        r10.add(e12);
        var t11 = e12.componentWillUnmount;
        e12.componentWillUnmount = function() {
          r10 && r10.delete(e12), t11 && t11.call(e12);
        };
      }), e11.children;
    }
    return t10.__c = "__cC" + e_++, t10.__ = e10, t10.Provider = t10.__l = (t10.Consumer = function(e11, t11) {
      return e11.children(t11);
    }).contextType = t10, t10;
  }
  es = eN.slice, ec = { __e: function(e10, t10, r10, n10) {
    for (var a10, i10, o10; t10 = t10.__; ) if ((a10 = t10.__c) && !a10.__) try {
      if ((i10 = a10.constructor) && null != i10.getDerivedStateFromError && (a10.setState(i10.getDerivedStateFromError(e10)), o10 = a10.__d), null != a10.componentDidCatch && (a10.componentDidCatch(e10, n10 || {}), o10 = a10.__d), o10) return a10.__E = a10;
    } catch (t11) {
      e10 = t11;
    }
    throw e10;
  } }, ed = 0, e$.prototype.setState = function(e10, t10) {
    var r10;
    r10 = null != this.__s && this.__s != this.state ? this.__s : this.__s = eM({}, this.state), "function" == typeof e10 && (e10 = e10(eM({}, r10), this.props)), e10 && eM(r10, e10), null != e10 && this.__v && (t10 && this._sb.push(t10), eO(this));
  }, e$.prototype.forceUpdate = function(e10) {
    this.__v && (this.__e = true, e10 && this.__h.push(e10), eO(this));
  }, e$.prototype.render = ez, eu = [], eh = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, em = function(e10, t10) {
    return e10.__v.__b - t10.__v.__b;
  }, ej.__r = 0, eg = "__d" + (ef = Math.random().toString(8)), ev = "__a" + ef, ew = /(PointerCapture)$|Capture$/i, eb = 0, ey = eD(false), ex = eD(true), e_ = 0;
  try {
    var eG = "u" > typeof window ? window : e.g;
    eG._sentryModuleMetadata = eG._sentryModuleMetadata || {}, eG._sentryModuleMetadata[new eG.Error().stack] = Object.assign({}, eG._sentryModuleMetadata[new eG.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var eX, eJ, eY, eZ, eQ = 0, e0 = [], e1 = ec, e2 = e1.__b, e5 = e1.__r, e4 = e1.diffed, e3 = e1.__c, e7 = e1.unmount, e8 = e1.__;
  function e6(e10, t10) {
    e1.__h && e1.__h(eJ, e10, eQ || t10), eQ = 0;
    var r10 = eJ.__H || (eJ.__H = { __: [], __h: [] });
    return e10 >= r10.__.length && r10.__.push({}), r10.__[e10];
  }
  function e9(e10) {
    return eQ = 1, (function(e11, t10) {
      var r10 = e6(eX++, 2);
      if (r10.t = e11, !r10.__c && (r10.__ = [tu(void 0, t10), function(e12) {
        var t11 = r10.__N ? r10.__N[0] : r10.__[0], n11 = r10.t(t11, e12);
        t11 !== n11 && (r10.__N = [n11, r10.__[1]], r10.__c.setState({}));
      }], r10.__c = eJ, !eJ.__f)) {
        var n10 = function(e12, t11, n11) {
          if (!r10.__c.__H) return true;
          var i11 = r10.__c.__H.__.filter(function(e13) {
            return e13.__c;
          });
          if (i11.every(function(e13) {
            return !e13.__N;
          })) return !a10 || a10.call(this, e12, t11, n11);
          var o10 = r10.__c.props !== e12;
          return i11.some(function(e13) {
            if (e13.__N) {
              var t12 = e13.__[0];
              e13.__ = e13.__N, e13.__N = void 0, t12 !== e13.__[0] && (o10 = true);
            }
          }), a10 && a10.call(this, e12, t11, n11) || o10;
        };
        eJ.__f = true;
        var a10 = eJ.shouldComponentUpdate, i10 = eJ.componentWillUpdate;
        eJ.componentWillUpdate = function(e12, t11, r11) {
          if (this.__e) {
            var o10 = a10;
            a10 = void 0, n10(e12, t11, r11), a10 = o10;
          }
          i10 && i10.call(this, e12, t11, r11);
        }, eJ.shouldComponentUpdate = n10;
      }
      return r10.__N || r10.__;
    })(tu, e10);
  }
  function te(e10, t10) {
    var r10 = e6(eX++, 3);
    !e1.__s && td(r10.__H, t10) && (r10.__ = e10, r10.u = t10, eJ.__H.__h.push(r10));
  }
  function tt(e10, t10) {
    var r10 = e6(eX++, 4);
    !e1.__s && td(r10.__H, t10) && (r10.__ = e10, r10.u = t10, eJ.__h.push(r10));
  }
  function tr(e10) {
    return eQ = 5, tn(function() {
      return { current: e10 };
    }, []);
  }
  function tn(e10, t10) {
    var r10 = e6(eX++, 7);
    return td(r10.__H, t10) && (r10.__ = e10(), r10.__H = t10, r10.__h = e10), r10.__;
  }
  function ta(e10, t10) {
    return eQ = 8, tn(function() {
      return e10;
    }, t10);
  }
  function ti(e10) {
    var t10 = eJ.context[e10.__c], r10 = e6(eX++, 9);
    return r10.c = e10, t10 ? (null == r10.__ && (r10.__ = true, t10.sub(eJ)), t10.props.value) : e10.__;
  }
  function to() {
    for (var e10; e10 = e0.shift(); ) {
      var t10 = e10.__H;
      if (e10.__P && t10) try {
        t10.__h.some(ts), t10.__h.some(tc), t10.__h = [];
      } catch (r10) {
        t10.__h = [], e1.__e(r10, e10.__v);
      }
    }
  }
  e1.__b = function(e10) {
    eJ = null, e2 && e2(e10);
  }, e1.__ = function(e10, t10) {
    e10 && t10.__k && t10.__k.__m && (e10.__m = t10.__k.__m), e8 && e8(e10, t10);
  }, e1.__r = function(e10) {
    e5 && e5(e10), eX = 0;
    var t10 = (eJ = e10.__c).__H;
    t10 && (eY === eJ ? (t10.__h = [], eJ.__h = [], t10.__.some(function(e11) {
      e11.__N && (e11.__ = e11.__N), e11.u = e11.__N = void 0;
    })) : (t10.__h.some(ts), t10.__h.some(tc), t10.__h = [], eX = 0)), eY = eJ;
  }, e1.diffed = function(e10) {
    e4 && e4(e10);
    var t10 = e10.__c;
    t10 && t10.__H && (t10.__H.__h.length && (1 !== e0.push(t10) && eZ === e1.requestAnimationFrame || ((eZ = e1.requestAnimationFrame) || function(e11) {
      var t11, r10 = function() {
        clearTimeout(n10), tl && cancelAnimationFrame(t11), setTimeout(e11);
      }, n10 = setTimeout(r10, 35);
      tl && (t11 = requestAnimationFrame(r10));
    })(to)), t10.__H.__.some(function(e11) {
      e11.u && (e11.__H = e11.u), e11.u = void 0;
    })), eY = eJ = null;
  }, e1.__c = function(e10, t10) {
    t10.some(function(e11) {
      try {
        e11.__h.some(ts), e11.__h = e11.__h.filter(function(e12) {
          return !e12.__ || tc(e12);
        });
      } catch (r10) {
        t10.some(function(e12) {
          e12.__h && (e12.__h = []);
        }), t10 = [], e1.__e(r10, e11.__v);
      }
    }), e3 && e3(e10, t10);
  }, e1.unmount = function(e10) {
    e7 && e7(e10);
    var t10, r10 = e10.__c;
    r10 && r10.__H && (r10.__H.__.some(function(e11) {
      try {
        ts(e11);
      } catch (e12) {
        t10 = e12;
      }
    }), r10.__H = void 0, t10 && e1.__e(t10, r10.__v));
  };
  var tl = "function" == typeof requestAnimationFrame;
  function ts(e10) {
    var t10 = eJ, r10 = e10.__c;
    "function" == typeof r10 && (e10.__c = void 0, r10()), eJ = t10;
  }
  function tc(e10) {
    var t10 = eJ;
    e10.__c = e10.__(), eJ = t10;
  }
  function td(e10, t10) {
    return !e10 || e10.length !== t10.length || t10.some(function(t11, r10) {
      return t11 !== e10[r10];
    });
  }
  function tu(e10, t10) {
    return "function" == typeof t10 ? t10(e10) : t10;
  }
  try {
    var tp = "u" > typeof window ? window : e.g;
    tp._sentryModuleMetadata = tp._sentryModuleMetadata || {}, tp._sentryModuleMetadata[new tp.Error().stack] = Object.assign({}, tp._sentryModuleMetadata[new tp.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var th = /* @__PURE__ */ Symbol.for("preact-signals");
  function tm() {
    if (ty > 1) ty--;
    else {
      var e10, t10 = false, r10 = tN;
      for (tN = void 0; void 0 !== r10; ) {
        var n10 = r10.S;
        if (n10.v === r10.v) for (var a10 = n10.t; void 0 !== a10; a10 = a10.x) a10.i === r10.i && (a10.i = n10.i);
        r10 = r10.o;
      }
      for (; void 0 !== tb; ) {
        var i10 = tb;
        for (tb = void 0, tx++; void 0 !== i10; ) {
          var o10 = i10.u;
          if (i10.u = void 0, i10.f &= -3, !(8 & i10.f) && tT(i10)) try {
            i10.c();
          } catch (r11) {
            t10 || (e10 = r11, t10 = true);
          }
          i10 = o10;
        }
      }
      if (tx = 0, ty--, t10) throw e10;
    }
  }
  function tf(e10) {
    if (ty > 0) return e10();
    tk = ++t_, ty++;
    try {
      return e10();
    } finally {
      tm();
    }
  }
  var tg, tv = void 0;
  function tw(e10) {
    var t10 = tv, r10 = tg;
    tv = void 0, tg = void 0;
    try {
      return e10();
    } finally {
      tv = t10, tg = r10;
    }
  }
  var tb = void 0, ty = 0, tx = 0, t_ = 0, tk = 0, tN = void 0, tS = 0;
  function tE(e10) {
    if (void 0 !== tv) {
      var t10 = e10.n;
      if (void 0 === t10 || t10.t !== tv) return t10 = { i: 0, S: e10, p: tv.s, n: void 0, t: tv, e: void 0, x: void 0, r: t10 }, void 0 !== tv.s && (tv.s.n = t10), tv.s = t10, e10.n = t10, 32 & tv.f && e10.S(t10), t10;
      if (-1 === t10.i) return t10.i = 0, void 0 !== t10.n && (t10.n.p = t10.p, void 0 !== t10.p && (t10.p.n = t10.n), t10.p = tv.s, t10.n = void 0, tv.s.n = t10, tv.s = t10), t10;
    }
  }
  function tM(e10, t10) {
    this.v = e10, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = null == t10 ? void 0 : t10.watched, this.Z = null == t10 ? void 0 : t10.unwatched, this.name = null == t10 ? void 0 : t10.name;
  }
  function tC(e10, t10) {
    return new tM(e10, t10);
  }
  function tT(e10) {
    for (var t10 = e10.s; void 0 !== t10; t10 = t10.n) if (t10.S.i !== t10.i || !t10.S.h() || t10.S.i !== t10.i) return true;
    return false;
  }
  function tA(e10) {
    for (var t10 = e10.s; void 0 !== t10; t10 = t10.n) {
      var r10 = t10.S.n;
      if (void 0 !== r10 && (t10.r = r10), t10.S.n = t10, t10.i = -1, void 0 === t10.n) {
        e10.s = t10;
        break;
      }
    }
  }
  function tz(e10) {
    for (var t10 = e10.s, r10 = void 0; void 0 !== t10; ) {
      var n10 = t10.p;
      -1 === t10.i ? (t10.S.U(t10), void 0 !== n10 && (n10.n = t10.n), void 0 !== t10.n && (t10.n.p = n10)) : r10 = t10, t10.S.n = t10.r, void 0 !== t10.r && (t10.r = void 0), t10 = n10;
    }
    e10.s = r10;
  }
  function t$(e10, t10) {
    tM.call(this, void 0, t10), this.x = e10, this.s = void 0, this.g = tS - 1, this.f = 4;
  }
  function tR(e10, t10) {
    return new t$(e10, t10);
  }
  function tO(e10) {
    var t10 = e10.m;
    if (e10.m = void 0, "function" == typeof t10) {
      ty++;
      var r10 = tv;
      tv = void 0;
      try {
        t10();
      } catch (t11) {
        throw e10.f &= -2, e10.f |= 8, tj(e10), t11;
      } finally {
        tv = r10, tm();
      }
    }
  }
  function tj(e10) {
    for (var t10 = e10.s; void 0 !== t10; t10 = t10.n) t10.S.U(t10);
    e10.x = void 0, e10.s = void 0, tO(e10);
  }
  function tP(e10) {
    if (tv !== this) throw Error("Out-of-order effect");
    tz(this), tv = e10, this.f &= -2, 8 & this.f && tj(this), tm();
  }
  function tF(e10, t10) {
    this.x = e10, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = null == t10 ? void 0 : t10.name, tg && tg.push(this);
  }
  function tL(e10, t10) {
    var r10 = new tF(e10, t10);
    try {
      r10.c();
    } catch (e11) {
      throw r10.d(), e11;
    }
    var n10 = r10.d.bind(r10);
    return n10[Symbol.dispose] = n10, n10;
  }
  tM.prototype.brand = th, tM.prototype.h = function() {
    return true;
  }, tM.prototype.S = function(e10) {
    var t10 = this, r10 = this.t;
    r10 !== e10 && void 0 === e10.e && (e10.x = r10, this.t = e10, void 0 !== r10 ? r10.e = e10 : tw(function() {
      var e11;
      null == (e11 = t10.W) || e11.call(t10);
    }));
  }, tM.prototype.U = function(e10) {
    var t10 = this;
    if (void 0 !== this.t) {
      var r10 = e10.e, n10 = e10.x;
      void 0 !== r10 && (r10.x = n10, e10.e = void 0), void 0 !== n10 && (n10.e = r10, e10.x = void 0), e10 === this.t && (this.t = n10, void 0 === n10 && tw(function() {
        var e11;
        null == (e11 = t10.Z) || e11.call(t10);
      }));
    }
  }, tM.prototype.subscribe = function(e10) {
    var t10 = this;
    return tL(function() {
      var r10 = t10.value;
      tw(function() {
        return e10(r10);
      });
    }, { name: "sub" });
  }, tM.prototype.valueOf = function() {
    return this.value;
  }, tM.prototype.toString = function() {
    return this.value + "";
  }, tM.prototype.toJSON = function() {
    return this.value;
  }, tM.prototype.peek = function() {
    var e10 = this;
    return tw(function() {
      return e10.value;
    });
  }, Object.defineProperty(tM.prototype, "value", { get: function() {
    var e10 = tE(this);
    return void 0 !== e10 && (e10.i = this.i), this.v;
  }, set: function(e10) {
    if (e10 !== this.v) {
      if (tx > 100) throw Error("Cycle detected");
      0 !== ty && 0 === tx && this.l !== tk && (this.l = tk, tN = { S: this, v: this.v, i: this.i, o: tN }), this.v = e10, this.i++, tS++, ty++;
      try {
        for (var t10 = this.t; void 0 !== t10; t10 = t10.x) t10.t.N();
      } finally {
        tm();
      }
    }
  } }), t$.prototype = new tM(), t$.prototype.h = function() {
    if (this.f &= -3, 1 & this.f) return false;
    if (32 == (36 & this.f) || (this.f &= -5, this.g === tS)) return true;
    if (this.g = tS, this.f |= 1, this.i > 0 && !tT(this)) return this.f &= -2, true;
    var e10 = tv;
    try {
      tA(this), tv = this;
      var t10 = this.x();
      (16 & this.f || this.v !== t10 || 0 === this.i) && (this.v = t10, this.f &= -17, this.i++);
    } catch (e11) {
      this.v = e11, this.f |= 16, this.i++;
    }
    return tv = e10, tz(this), this.f &= -2, true;
  }, t$.prototype.S = function(e10) {
    if (void 0 === this.t) {
      this.f |= 36;
      for (var t10 = this.s; void 0 !== t10; t10 = t10.n) t10.S.S(t10);
    }
    tM.prototype.S.call(this, e10);
  }, t$.prototype.U = function(e10) {
    if (void 0 !== this.t && (tM.prototype.U.call(this, e10), void 0 === this.t)) {
      this.f &= -33;
      for (var t10 = this.s; void 0 !== t10; t10 = t10.n) t10.S.U(t10);
    }
  }, t$.prototype.N = function() {
    if (!(2 & this.f)) {
      this.f |= 6;
      for (var e10 = this.t; void 0 !== e10; e10 = e10.x) e10.t.N();
    }
  }, Object.defineProperty(t$.prototype, "value", { get: function() {
    if (1 & this.f) throw Error("Cycle detected");
    var e10 = tE(this);
    if (this.h(), void 0 !== e10 && (e10.i = this.i), 16 & this.f) throw this.v;
    return this.v;
  } }), tF.prototype.c = function() {
    var e10 = this.S();
    try {
      if (8 & this.f || void 0 === this.x) return;
      var t10 = this.x();
      "function" == typeof t10 && (this.m = t10);
    } finally {
      e10();
    }
  }, tF.prototype.S = function() {
    if (1 & this.f) throw Error("Cycle detected");
    this.f |= 1, this.f &= -9, tO(this), tA(this), ty++;
    var e10 = tv;
    return tv = this, tP.bind(this, e10);
  }, tF.prototype.N = function() {
    2 & this.f || (this.f |= 2, this.u = tb, tb = this);
  }, tF.prototype.d = function() {
    this.f |= 8, 1 & this.f || tj(this);
  }, tF.prototype.dispose = function() {
    this.d();
  };
  try {
    var tI = "u" > typeof window ? window : e.g;
    tI._sentryModuleMetadata = tI._sentryModuleMetadata || {}, tI._sentryModuleMetadata[new tI.Error().stack] = Object.assign({}, tI._sentryModuleMetadata[new tI.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var tD, tB, tU = "u" > typeof window && !!window.__PREACT_SIGNALS_DEVTOOLS__, tW = [], tH = [];
  function tV(e10, t10) {
    ec[e10] = t10.bind(null, ec[e10] || function() {
    });
  }
  function tq(e10) {
    if (tB) {
      var t10 = tB;
      tB = void 0, t10();
    }
    tB = e10 && e10.S();
  }
  function tK(e10) {
    var t10 = this, r10 = e10.data, n10 = tG(r10);
    n10.name = "ReactiveDom", n10.value = r10;
    var a10 = tn(function() {
      for (var e11 = t10.__v; e11 = e11.__; ) if (e11.__c) {
        e11.__c.__$f |= 4;
        break;
      }
      var r11 = tR(function() {
        var e12 = n10.value.value;
        return 0 === e12 ? 0 : true === e12 ? "" : e12 || "";
      }), a11 = tR(function() {
        var e12;
        return !Array.isArray(r11.value) && (null == (e12 = r11.value) || void 0 !== e12.constructor);
      }), i11 = tL(function() {
        if (this.N = t0, a11.value) {
          var e12 = r11.value;
          t10.__v && t10.__v.__e && 3 === t10.__v.__e.nodeType && (t10.__v.__e.data = e12);
        }
      }), o11 = t10.__$u.d;
      return t10.__$u.d = function() {
        i11(), o11.call(this);
      }, [a11, r11];
    }, []), i10 = a10[0], o10 = a10[1];
    return i10.value ? o10.peek() : o10.value;
  }
  function tG(e10, t10) {
    return tn(function() {
      return tC(e10, t10);
    }, []);
  }
  tL(function() {
    tD = this.N;
  })(), tK.displayName = "ReactiveTextNode", Object.defineProperties(tM.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: tK }, props: { configurable: true, get: function() {
    var e10 = this;
    return { data: { get value() {
      return e10.value;
    } } };
  } }, __b: { configurable: true, value: 1 } }), tV("__b", function(e10, t10) {
    if ("string" == typeof t10.type) {
      var r10, n10 = t10.props;
      for (var a10 in n10) if ("children" !== a10) {
        var i10 = n10[a10];
        i10 instanceof tM && (r10 || (t10.__np = r10 = {}), r10[a10] = i10, n10[a10] = i10.peek());
      }
    }
    e10(t10);
  }), tV("__r", function(e10, t10) {
    if (e10(t10), t10.type !== ez) {
      tq();
      var r10, n10, a10 = t10.__c;
      a10 && (a10.__$f &= -2, void 0 === (n10 = a10.__$u) && (tL(function() {
        r10 = this;
      }, { name: "function" == typeof t10.type ? t10.type.displayName || t10.type.name : "" }), r10.c = function() {
        var e11;
        tU && (null == (e11 = n10.y) || e11.call(n10)), a10.__$f |= 1, a10.setState({});
      }, a10.__$u = n10 = r10)), tq(n10);
    }
  }), tV("__e", function(e10, t10, r10, n10) {
    tq(), e10(t10, r10, n10);
  }), tV("diffed", function(e10, t10) {
    if (tq(), "string" == typeof t10.type && (r10 = t10.__e)) {
      var r10, n10 = t10.__np, a10 = t10.props, i10 = r10.U;
      if (i10) for (var o10 in i10) {
        var l10 = i10[o10];
        void 0 === l10 || n10 && o10 in n10 || (l10.d(), i10[o10] = void 0);
      }
      if (n10) for (var s10 in i10 || (i10 = {}, r10.U = i10), n10) {
        var c10 = i10[s10], d10 = n10[s10];
        void 0 === c10 ? (c10 = (function(e11, t11, r11, n11) {
          var a11 = t11 in e11 && void 0 === e11.ownerSVGElement, i11 = tC(r11);
          return { o: function(e12, t12) {
            i11.value = e12, n11 = t12;
          }, d: tL(function() {
            this.N = t0;
            var r12 = i11.value.value;
            n11[t11] !== r12 && (n11[t11] = r12, a11 ? e11[t11] = r12 : null != r12 && (false !== r12 || "-" === t11[4]) ? e11.setAttribute(t11, r12) : e11.removeAttribute(t11));
          }) };
        })(r10, s10, d10, a10), i10[s10] = c10) : c10.o(d10, a10);
      }
    }
    e10(t10);
  }), tV("unmount", function(e10, t10) {
    if ("string" == typeof t10.type) {
      var r10 = t10.__e;
      if (r10) {
        var n10 = r10.U;
        if (n10) for (var a10 in r10.U = void 0, n10) {
          var i10 = n10[a10];
          i10 && i10.d();
        }
      }
      var o10 = t10.__np;
      if (o10) {
        var l10 = t10.props;
        for (var s10 in o10) l10[s10] = o10[s10];
      }
      t10.__np = void 0;
    } else {
      var c10 = t10.__c;
      if (c10) {
        var d10 = c10.__$u;
        d10 && (c10.__$u = void 0, d10.d());
      }
    }
    e10(t10);
  }), tV("__h", function(e10, t10, r10, n10) {
    n10 < 3 && (t10.__$f |= 2), e10(t10, r10, n10);
  }), e$.prototype.shouldComponentUpdate = function(e10, t10) {
    if (this.__R) return true;
    var r10 = this.__$u, n10 = r10 && void 0 !== r10.s;
    for (var a10 in t10) return true;
    if (this.__f || "boolean" == typeof this.u && true === this.u) {
      var i10 = 2 & this.__$f;
      if (!(n10 || i10 || 4 & this.__$f) || 1 & this.__$f) return true;
    } else if (!(n10 || 4 & this.__$f) || 3 & this.__$f) return true;
    for (var o10 in e10) if ("__source" !== o10 && e10[o10] !== this.props[o10]) return true;
    for (var l10 in this.props) if (!(l10 in e10)) return true;
    return false;
  };
  var tX = "u" < typeof requestAnimationFrame ? setTimeout : function(e10) {
    var t10 = function() {
      clearTimeout(r10), cancelAnimationFrame(n10), e10();
    }, r10 = setTimeout(t10, 35), n10 = requestAnimationFrame(t10);
  }, tJ = function(e10) {
    queueMicrotask(function() {
      queueMicrotask(e10);
    });
  };
  function tY() {
    tf(function() {
      for (var e10; e10 = tW.shift(); ) tD.call(e10);
    });
  }
  function tZ() {
    1 === tW.push(this) && (ec.requestAnimationFrame || tX)(tY);
  }
  function tQ() {
    tf(function() {
      for (var e10; e10 = tH.shift(); ) tD.call(e10);
    });
  }
  function t0() {
    1 === tH.push(this) && (ec.requestAnimationFrame || tJ)(tQ);
  }
  function t1(e10, t10) {
    var r10 = tr(e10);
    r10.current = e10, te(function() {
      return tL(function() {
        return this.N = tZ, r10.current();
      }, t10);
    }, []);
  }
  try {
    var t2 = "u" > typeof window ? window : e.g;
    t2._sentryModuleMetadata = t2._sentryModuleMetadata || {}, t2._sentryModuleMetadata[new t2.Error().stack] = Object.assign({}, t2._sentryModuleMetadata[new t2.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function t5(e10, t10) {
    for (var r10 in t10) e10[r10] = t10[r10];
    return e10;
  }
  function t4(e10, t10) {
    for (var r10 in e10) if ("__source" !== r10 && !(r10 in t10)) return true;
    for (var n10 in t10) if ("__source" !== n10 && e10[n10] !== t10[n10]) return true;
    return false;
  }
  function t3(e10) {
    var t10, r10;
    try {
      return ((t10 = e10.__) !== (r10 = e10.u()) || 0 === t10 && 1 / t10 != 1 / r10) && (t10 == t10 || r10 == r10);
    } catch (e11) {
      return true;
    }
  }
  function t7(e10, t10) {
    this.props = e10, this.context = t10;
  }
  function t8(e10, t10) {
    function r10(e11) {
      var r11 = this.props.ref;
      return r11 != e11.ref && r11 && ("function" == typeof r11 ? r11(null) : r11.current = null), t10 ? !t10(this.props, e11) || r11 != e11.ref : t4(this.props, e11);
    }
    function n10(t11) {
      return this.shouldComponentUpdate = r10, eT(e10, t11);
    }
    return n10.displayName = "Memo(" + (e10.displayName || e10.name) + ")", n10.__f = n10.prototype.isReactComponent = true, n10.type = e10, n10;
  }
  (t7.prototype = new e$()).isPureReactComponent = true, t7.prototype.shouldComponentUpdate = function(e10, t10) {
    return t4(this.props, e10) || t4(this.state, t10);
  };
  var t6 = ec.__b;
  ec.__b = function(e10) {
    e10.type && e10.type.__f && e10.ref && (e10.props.ref = e10.ref, e10.ref = null), t6 && t6(e10);
  };
  var t9 = "u" > typeof Symbol && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
  function re(e10) {
    function t10(t11) {
      var r10 = t5({}, t11);
      return delete r10.ref, e10(r10, t11.ref || null);
    }
    return t10.$$typeof = t9, t10.render = e10, t10.prototype.isReactComponent = t10.__f = true, t10.displayName = "ForwardRef(" + (e10.displayName || e10.name) + ")", t10;
  }
  var rt = ec.__e;
  ec.__e = function(e10, t10, r10, n10) {
    if (e10.then) {
      for (var a10, i10 = t10; i10 = i10.__; ) if ((a10 = i10.__c) && a10.__c) return null == t10.__e && (t10.__e = r10.__e, t10.__k = r10.__k), a10.__c(e10, t10);
    }
    rt(e10, t10, r10, n10);
  };
  var rr = ec.unmount;
  function rn() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function ra(e10) {
    var t10 = e10.__ && e10.__.__c;
    return t10 && t10.__a && t10.__a(e10);
  }
  function ri() {
    this.i = null, this.l = null;
  }
  ec.unmount = function(e10) {
    var t10 = e10.__c;
    t10 && (t10.__z = true), t10 && t10.__R && t10.__R(), t10 && 32 & e10.__u && (e10.type = null), rr && rr(e10);
  }, (rn.prototype = new e$()).__c = function(e10, t10) {
    var r10 = t10.__c, n10 = this;
    null == n10.o && (n10.o = []), n10.o.push(r10);
    var a10 = ra(n10.__v), i10 = false, o10 = function() {
      i10 || n10.__z || (i10 = true, r10.__R = null, a10 ? a10(s10) : s10());
    };
    r10.__R = o10;
    var l10 = r10.__P;
    r10.__P = null;
    var s10 = function() {
      if (!--n10.__u) {
        if (n10.state.__a) {
          var e11, t11 = n10.state.__a;
          n10.__v.__k[0] = (function e12(t12, r11, n11) {
            return t12 && n11 && (t12.__v = null, t12.__k = t12.__k && t12.__k.map(function(t13) {
              return e12(t13, r11, n11);
            }), t12.__c && t12.__c.__P === r11 && (t12.__e && n11.appendChild(t12.__e), t12.__c.__e = true, t12.__c.__P = n11)), t12;
          })(t11, t11.__c.__P, t11.__c.__O);
        }
        for (n10.setState({ __a: n10.__b = null }); e11 = n10.o.pop(); ) e11.__P = l10, e11.forceUpdate();
      }
    };
    n10.__u++ || 32 & t10.__u || n10.setState({ __a: n10.__b = n10.__v.__k[0] }), e10.then(o10, o10);
  }, rn.prototype.componentWillUnmount = function() {
    this.o = [];
  }, rn.prototype.render = function(e10, t10) {
    if (this.__b) {
      if (this.__v.__k) {
        var r10 = document.createElement("div"), n10 = this.__v.__k[0].__c;
        this.__v.__k[0] = (function e11(t11, r11, n11) {
          return t11 && (t11.__c && t11.__c.__H && (t11.__c.__H.__.forEach(function(e12) {
            "function" == typeof e12.__c && e12.__c();
          }), t11.__c.__H = null), null != (t11 = t5({}, t11)).__c && (t11.__c.__P === n11 && (t11.__c.__P = r11), t11.__c.__e = true, t11.__c = null), t11.__k = t11.__k && t11.__k.map(function(t12) {
            return e11(t12, r11, n11);
          })), t11;
        })(this.__b, r10, n10.__O = n10.__P);
      }
      this.__b = null;
    }
    var a10 = t10.__a && eT(ez, null, e10.fallback);
    return a10 && (a10.__u &= -33), [eT(ez, null, t10.__a ? null : e10.children), a10];
  };
  var ro = function(e10, t10, r10) {
    if (++r10[1] === r10[0] && e10.l.delete(t10), e10.props.revealOrder && ("t" !== e10.props.revealOrder[0] || !e10.l.size)) for (r10 = e10.i; r10; ) {
      for (; r10.length > 3; ) r10.pop()();
      if (r10[1] < r10[0]) break;
      e10.i = r10 = r10[2];
    }
  };
  function rl(e10) {
    return this.getChildContext = function() {
      return e10.context;
    }, e10.children;
  }
  function rs(e10) {
    var t10 = this, r10 = e10.h;
    if (t10.componentWillUnmount = function() {
      eq(null, t10.v), t10.v = null, t10.h = null;
    }, t10.h && t10.h !== r10 && t10.componentWillUnmount(), !t10.v) {
      for (var n10 = t10.__v; null !== n10 && !n10.__m && null !== n10.__; ) n10 = n10.__;
      t10.h = r10, t10.v = { nodeType: 1, parentNode: r10, childNodes: [], __k: { __m: n10.__m }, contains: function() {
        return true;
      }, namespaceURI: r10.namespaceURI, insertBefore: function(e11, r11) {
        this.childNodes.push(e11), t10.h.insertBefore(e11, r11);
      }, removeChild: function(e11) {
        this.childNodes.splice(this.childNodes.indexOf(e11) >>> 1, 1), t10.h.removeChild(e11);
      } };
    }
    eq(eT(rl, { context: t10.context }, e10.__v), t10.v);
  }
  (ri.prototype = new e$()).__a = function(e10) {
    var t10 = this, r10 = ra(t10.__v), n10 = t10.l.get(e10);
    return n10[0]++, function(a10) {
      var i10 = function() {
        t10.props.revealOrder ? (n10.push(a10), ro(t10, e10, n10)) : a10();
      };
      r10 ? r10(i10) : i10();
    };
  }, ri.prototype.render = function(e10) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var t10 = eF(e10.children);
    e10.revealOrder && "b" === e10.revealOrder[0] && t10.reverse();
    for (var r10 = t10.length; r10--; ) this.l.set(t10[r10], this.i = [1, 0, this.i]);
    return e10.children;
  }, ri.prototype.componentDidUpdate = ri.prototype.componentDidMount = function() {
    var e10 = this;
    this.l.forEach(function(t10, r10) {
      ro(e10, r10, t10);
    });
  };
  var rc = "u" > typeof Symbol && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, rd = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ru = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, rp = /[A-Z0-9]/g, rh = "u" > typeof document;
  e$.prototype.isReactComponent = true, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e10) {
    Object.defineProperty(e$.prototype, e10, { configurable: true, get: function() {
      return this["UNSAFE_" + e10];
    }, set: function(t10) {
      Object.defineProperty(this, e10, { configurable: true, writable: true, value: t10 });
    } });
  });
  var rm = ec.event;
  ec.event = function(e10) {
    return rm && (e10 = rm(e10)), e10.persist = function() {
    }, e10.isPropagationStopped = function() {
      return this.cancelBubble;
    }, e10.isDefaultPrevented = function() {
      return this.defaultPrevented;
    }, e10.nativeEvent = e10;
  };
  var rf = { configurable: true, get: function() {
    return this.class;
  } }, rg = ec.vnode;
  ec.vnode = function(e10) {
    "string" == typeof e10.type && (function(e11) {
      var t10 = e11.props, r10 = e11.type, n10 = {}, a10 = -1 == r10.indexOf("-");
      for (var i10 in t10) {
        var o10 = t10[i10];
        if (!("value" === i10 && "defaultValue" in t10 && null == o10 || rh && "children" === i10 && "noscript" === r10 || "class" === i10 || "className" === i10)) {
          var l10, s10 = i10.toLowerCase();
          "defaultValue" === i10 && "value" in t10 && null == t10.value ? i10 = "value" : "download" === i10 && true === o10 ? o10 = "" : "translate" === s10 && "no" === o10 ? o10 = false : "o" === s10[0] && "n" === s10[1] ? "ondoubleclick" === s10 ? i10 = "ondblclick" : "onchange" !== s10 || "input" !== r10 && "textarea" !== r10 || (l10 = t10.type, ("u" > typeof Symbol && "symbol" == typeof /* @__PURE__ */ Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(l10)) ? "onfocus" === s10 ? i10 = "onfocusin" : "onblur" === s10 ? i10 = "onfocusout" : ru.test(i10) && (i10 = s10) : s10 = i10 = "oninput" : a10 && rd.test(i10) ? i10 = i10.replace(rp, "-$&").toLowerCase() : null === o10 && (o10 = void 0), "oninput" === s10 && n10[i10 = s10] && (i10 = "oninputCapture"), n10[i10] = o10;
        }
      }
      "select" == r10 && (n10.multiple && Array.isArray(n10.value) && (n10.value = eF(t10.children).forEach(function(e12) {
        e12.props.selected = -1 != n10.value.indexOf(e12.props.value);
      })), null != n10.defaultValue && (n10.value = eF(t10.children).forEach(function(e12) {
        e12.props.selected = n10.multiple ? -1 != n10.defaultValue.indexOf(e12.props.value) : n10.defaultValue == e12.props.value;
      }))), t10.class && !t10.className ? (n10.class = t10.class, Object.defineProperty(n10, "className", rf)) : t10.className && (n10.class = n10.className = t10.className), e11.props = n10;
    })(e10), e10.$$typeof = rc, rg && rg(e10);
  };
  var rv = ec.__r;
  ec.__r = function(e10) {
    rv && rv(e10), e10.__c;
  };
  var rw = ec.diffed;
  ec.diffed = function(e10) {
    rw && rw(e10);
    var t10 = e10.props, r10 = e10.__e;
    null != r10 && "textarea" === e10.type && "value" in t10 && t10.value !== r10.value && (r10.value = null == t10.value ? "" : t10.value);
  };
  try {
    var rb = "u" > typeof window ? window : e.g;
    rb._sentryModuleMetadata = rb._sentryModuleMetadata || {}, rb._sentryModuleMetadata[new rb.Error().stack] = Object.assign({}, rb._sentryModuleMetadata[new rb.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var ry = 0;
  function rx(e10, t10, r10, n10, a10, i10) {
    t10 || (t10 = {});
    var o10, l10, s10 = t10;
    if ("ref" in s10) for (l10 in s10 = {}, t10) "ref" == l10 ? o10 = t10[l10] : s10[l10] = t10[l10];
    var c10 = { type: e10, props: s10, key: r10, ref: o10, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --ry, __i: -1, __u: 0, __source: a10, __self: i10 };
    if ("function" == typeof e10 && (o10 = e10.defaultProps)) for (l10 in o10) void 0 === s10[l10] && (s10[l10] = o10[l10]);
    return ec.vnode && ec.vnode(c10), c10;
  }
  try {
    var r_ = "u" > typeof window ? window : e.g;
    r_._sentryModuleMetadata = r_._sentryModuleMetadata || {}, r_._sentryModuleMetadata[new r_.Error().stack] = Object.assign({}, r_._sentryModuleMetadata[new r_.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let rk = null, rN = (() => {
    if (null !== rk) return rk;
    try {
      rk = window.matchMedia("(color-gamut: p3)").matches;
    } catch {
      rk = false;
    }
    return rk;
  })(), rS = (e10) => rN ? `color(display-p3 0.84 0.19 0.78 / ${e10})` : `rgba(210, 57, 192, ${e10})`, rE = ["/components/ui/", "/packages/ui/", "/design-system/", "/design-systems/", "/primitives/"], rM = 8e3, rC = 1e4, rT = (rS(0.4), rS(0.05), rS(0.5), rS(0.08), rS(0.15), ["id", "class", "aria-label", "data-testid", "role", "name", "title"]), rA = /* @__PURE__ */ new Set(["id", "data-testid", "aria-label", "href", "src", "alt", "type", "name", "placeholder", "role", "for", "action", "method", "title", "disabled", "checked", "readonly", "required", "selected", "open"]), rz = /* @__PURE__ */ new Set(["a", "button", "code", "label", "option", "pre", "summary", "text"]), r$ = /* @__PURE__ */ new Set(["script", "style", "template", "noscript"]), rR = "data-react-grab-frozen", rO = new Set("display.position.top.right.bottom.left.z-index.overflow.overflow-x.overflow-y.width.height.min-width.min-height.max-width.max-height.margin-top.margin-right.margin-bottom.margin-left.padding-top.padding-right.padding-bottom.padding-left.flex-direction.flex-wrap.justify-content.align-items.align-self.align-content.flex-grow.flex-shrink.flex-basis.order.gap.row-gap.column-gap.grid-template-columns.grid-template-rows.grid-template-areas.font-family.font-size.font-weight.font-style.line-height.letter-spacing.text-align.text-decoration-line.text-decoration-style.text-transform.text-overflow.text-shadow.white-space.word-break.overflow-wrap.vertical-align.color.background-color.background-image.background-position.background-size.background-repeat.border-top-width.border-right-width.border-bottom-width.border-left-width.border-top-style.border-right-style.border-bottom-style.border-left-style.border-top-color.border-right-color.border-bottom-color.border-left-color.border-top-left-radius.border-top-right-radius.border-bottom-left-radius.border-bottom-right-radius.box-shadow.opacity.transform.filter.backdrop-filter.object-fit.object-position".split(".")), rj = (e10) => "object" == typeof e10 && !!e10 && "nodeType" in e10 && e10.nodeType === Node.ELEMENT_NODE, rP = /* @__PURE__ */ new WeakMap(), rF = (e10) => {
    if (!e10) return null;
    try {
      return e10.frameElement;
    } catch {
      return null;
    }
  }, rL = "bippy-0.6.1", rI = Object.defineProperty, rD = Object.prototype.hasOwnProperty, rB = () => {
  }, rU = (e10) => {
    try {
      Function.prototype.toString.call(e10).indexOf("^_^") > -1 && setTimeout(() => {
        throw Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build");
      });
    } catch {
    }
  }, rW = (e10 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__) => !!(e10 && "getFiberRoots" in e10), rH = false, rV, rq = (e10 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__) => !!rH || (e10 && "function" == typeof e10.inject && (rV = e10.inject.toString()), !!rV?.includes("(injected)")), rK = /* @__PURE__ */ new Set(), rG = /* @__PURE__ */ new Set(), rX = (e10) => {
    e10 && rK.add(e10);
    try {
      let t10 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!t10) return;
      if (!t10._instrumentationSource) {
        t10.checkDCE = rU, t10.supportsFiber = true, t10.supportsFlight = true, t10.hasUnsupportedRendererAttached = false, t10._instrumentationSource = rL, t10._instrumentationIsActive = false;
        let e11 = rW(t10);
        if (e11 || (t10.on = rB), t10.renderers.size) {
          t10._instrumentationIsActive = true, rK.forEach((e12) => e12());
          return;
        }
        let r10 = t10.inject, n10 = rq(t10);
        n10 && !e11 && (rH = true, t10.inject({ scheduleRefresh() {
        } }) && (t10._instrumentationIsActive = true)), t10.inject = (e12) => {
          let a10 = r10(e12);
          return rG.add(e12), n10 && t10.renderers.set(a10, e12), t10._instrumentationIsActive = true, rK.forEach((e13) => e13()), a10;
        };
      }
      (t10.renderers.size || t10._instrumentationIsActive || rq()) && e10?.();
    } catch {
    }
  }, rJ = (e10) => rD.call(globalThis, "__REACT_DEVTOOLS_GLOBAL_HOOK__") ? (rX(e10), globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__) : ((e11) => {
    e11 && rK.add(e11);
    let t10 = /* @__PURE__ */ new Map(), r10 = 0, n10 = { _instrumentationIsActive: false, _instrumentationSource: rL, checkDCE: rU, hasUnsupportedRendererAttached: false, inject(e12) {
      let a10 = ++r10;
      return t10.set(a10, e12), rG.add(e12), n10._instrumentationIsActive || (n10._instrumentationIsActive = true, rK.forEach((e13) => e13())), a10;
    }, on: rB, onCommitFiberRoot: rB, onCommitFiberUnmount: rB, onPostCommitFiberRoot: rB, renderers: t10, supportsFiber: true, supportsFlight: true };
    try {
      rI(globalThis, "__REACT_DEVTOOLS_GLOBAL_HOOK__", { configurable: true, enumerable: true, get: () => n10, set(t12) {
        if (t12 && "object" == typeof t12) {
          let r12 = n10.renderers;
          n10 = t12, r12.size > 0 && (r12.forEach((e12, r13) => {
            rG.add(e12), t12.renderers.set(r13, e12);
          }), rX(e11));
        }
      } });
      let t11 = window.hasOwnProperty, r11 = false;
      rI(window, "hasOwnProperty", { configurable: true, value: function(...e12) {
        try {
          if (!r11 && "__REACT_DEVTOOLS_GLOBAL_HOOK__" === e12[0]) return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__ = void 0, r11 = true, -0;
        } catch {
        }
        return t11.apply(this, e12);
      }, writable: true });
    } catch {
      rX(e11);
    }
    return n10;
  })(e10);
  try {
    "u" > typeof window && (window.document?.createElement || window.navigator?.product === "ReactNative") && rJ();
  } catch {
  }
  let rY = (e10) => {
    switch (e10.tag) {
      case 1:
      case 11:
      case 0:
      case 14:
      case 15:
        return true;
      default:
        return false;
    }
  };
  function rZ(e10, t10, r10 = false) {
    if (!e10) return null;
    let n10 = t10(e10);
    if (n10 instanceof Promise) return (async () => {
      if (await n10 === true) return e10;
      let a11 = r10 ? e10.return : e10.child;
      for (; a11; ) {
        let e11 = await r0(a11, t10, r10);
        if (e11) return e11;
        a11 = r10 ? null : a11.sibling;
      }
      return null;
    })();
    if (true === n10) return e10;
    let a10 = r10 ? e10.return : e10.child;
    for (; a10; ) {
      let e11 = rQ(a10, t10, r10);
      if (e11) return e11;
      a10 = r10 ? null : a10.sibling;
    }
    return null;
  }
  let rQ = (e10, t10, r10 = false) => {
    if (!e10) return null;
    if (true === t10(e10)) return e10;
    let n10 = r10 ? e10.return : e10.child;
    for (; n10; ) {
      let e11 = rQ(n10, t10, r10);
      if (e11) return e11;
      n10 = r10 ? null : n10.sibling;
    }
    return null;
  }, r0 = async (e10, t10, r10 = false) => {
    if (!e10) return null;
    if (await t10(e10) === true) return e10;
    let n10 = r10 ? e10.return : e10.child;
    for (; n10; ) {
      let e11 = await r0(n10, t10, r10);
      if (e11) return e11;
      n10 = r10 ? null : n10.sibling;
    }
    return null;
  }, r1 = (e10) => "function" == typeof e10 ? e10 : "object" == typeof e10 && e10 ? r1(e10.type || e10.render) : null, r2 = (e10) => {
    if ("string" == typeof e10) return e10;
    if ("function" != typeof e10 && !("object" == typeof e10 && e10)) return null;
    let t10 = e10.displayName || e10.name || null;
    if (t10) return t10;
    let r10 = r1(e10);
    return r10 && (r10.displayName || r10.name) || null;
  }, r5 = () => {
    let e10 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    return !!e10?._instrumentationIsActive || rW(e10) || rq(e10);
  }, r4 = /* @__PURE__ */ new Set(), r3 = (e10) => {
    let t10 = e10.alternate;
    if (!t10) return e10;
    if (t10.actualStartTime && e10.actualStartTime) return t10.actualStartTime > e10.actualStartTime ? t10 : e10;
    for (let t11 of r4) {
      let r10 = rZ(t11.current, (t12) => {
        if (t12 === e10) return true;
      });
      if (r10) return r10;
    }
    return e10;
  }, r7 = /* @__PURE__ */ new WeakMap(), r8 = (e10) => {
    if (!rD.call(globalThis, "__REACT_DEVTOOLS_GLOBAL_HOOK__")) return null;
    let t10 = e10;
    for (; t10.return; ) t10 = t10.return;
    let r10 = nn.get(t10.stateNode);
    return void 0 === r10 ? null : rJ().renderers?.get(r10) ?? null;
  }, r6 = /* @__PURE__ */ new Set(), r9 = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new Set(), nt = /* @__PURE__ */ new Set(), nr = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap(), na = (e10) => {
    let t10, r10 = rJ(e10.onActive);
    r10._instrumentationSource = e10.name ?? rL, ((e11) => {
      let t11 = nr.get(e11) ?? {};
      if (nr.set(e11, t11), !t11.onCommitFiberRoot || e11.onCommitFiberRoot !== t11.onCommitFiberRoot) {
        let r11 = e11.onCommitFiberRoot, n11 = (t12, a11, i11) => {
          if (r11?.(t12, a11, i11), nr.get(e11)?.onCommitFiberRoot === n11) for (let e12 of (r4.add(a11), nn.set(a11, t12), r6)) e12(t12, a11, i11);
        };
        t11.onCommitFiberRoot = n11, e11.onCommitFiberRoot = n11;
      }
      if (!t11.onCommitFiberUnmount || e11.onCommitFiberUnmount !== t11.onCommitFiberUnmount) {
        let r11 = e11.onCommitFiberUnmount, n11 = (t12, a11) => {
          if (r11?.(t12, a11), nr.get(e11)?.onCommitFiberUnmount === n11) for (let e12 of r9) e12(t12, a11);
        };
        t11.onCommitFiberUnmount = n11, e11.onCommitFiberUnmount = n11;
      }
      if (!t11.onPostCommitFiberRoot || e11.onPostCommitFiberRoot !== t11.onPostCommitFiberRoot) {
        let r11 = e11.onPostCommitFiberRoot, n11 = (t12, a11) => {
          if (r11?.(t12, a11), nr.get(e11)?.onPostCommitFiberRoot === n11) for (let e12 of ne) e12(t12, a11);
        };
        t11.onPostCommitFiberRoot = n11, e11.onPostCommitFiberRoot = n11;
      }
      if (!t11.onScheduleFiberRoot || e11.onScheduleFiberRoot !== t11.onScheduleFiberRoot) {
        let r11 = e11.onScheduleFiberRoot, n11 = (t12, a11, i11) => {
          if (r11?.(t12, a11, i11), nr.get(e11)?.onScheduleFiberRoot === n11) for (let e12 of nt) e12(t12, a11, i11);
        };
        t11.onScheduleFiberRoot = n11, e11.onScheduleFiberRoot = n11;
      }
    })(r10);
    let { onActive: n10, onCommitFiberRoot: a10, onCommitFiberUnmount: i10, onPostCommitFiberRoot: o10, onScheduleFiberRoot: l10 } = e10;
    return a10 && r6.add(a10), i10 && r9.add(i10), o10 && ne.add(o10), l10 && nt.add(l10), Object.assign(t10 = () => {
      n10 && rK.delete(n10), a10 && r6.delete(a10), i10 && r9.delete(i10), o10 && ne.delete(o10), l10 && nt.delete(l10);
    }, { [Symbol.dispose]: t10 });
  }, ni = /* @__PURE__ */ new Set(), no = (e10) => e10.startsWith("__reactContainer$") || e10.startsWith("__reactInternalInstance$") || e10.startsWith("__reactFiber"), nl = /* @__PURE__ */ new WeakMap(), ns = (e10) => nl.get(e10) ?? null, nc = (e10) => ns(e10)?.getFiber() ?? ((e11) => {
    let t10 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (t10?.renderers) for (let r10 of t10.renderers.values()) try {
      let t11 = r10.findFiberByHostInstance?.(e11);
      if (t11) return t11;
    } catch {
    }
    if ("object" == typeof e11 && e11) {
      if ("_reactRootContainer" in e11) return e11._reactRootContainer?._internalRoot?.current?.child;
      let t11 = e11.__internalInstanceHandle ?? e11._internalInstanceHandle;
      if (t11 && "object" == typeof t11 && "pendingProps" in t11 && !("containerInfo" in t11)) return t11;
      for (let t12 of ni) {
        let r10 = e11[t12];
        if (r10) return r10;
      }
      for (let t12 of Object.keys(e11)) if (no(t12)) return ni.add(t12), e11[t12] || null;
      for (let t12 of r4) {
        if (r8(t12.current)?.findFiberByHostInstance) continue;
        let r10 = rZ(t12.current, (t13) => t13.stateNode === e11);
        if (r10) return r10;
      }
    }
    return null;
  })(e10);
  /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ new WeakMap();
  let nd = (e10) => {
    let t10 = e10.ownerDocument?.defaultView;
    return !!(t10 && e10 instanceof t10.ShadowRoot);
  };
  var nu = class extends Error {
    constructor(e10, t10) {
      super(e10, t10), this.name = "ReactGrabError";
    }
  }, np = class extends nu {
    constructor() {
      super("Can't generate CSS selector for non-element node type."), this.name = "NonElementNodeError";
    }
  }, nh = class extends nu {
    constructor(e10) {
      super(`Timeout: Can't find a unique selector after ${e10}ms`), this.name = "SelectorTimeoutError", this.timeoutMs = e10;
    }
  }, nm = class extends nu {
    constructor() {
      super("Selector was not found."), this.name = "SelectorNotFoundError";
    }
  };
  let nf = (e10) => ns(e10)?.getTagName() ?? (e10.tagName || "").toLowerCase(), ng = (/* @__PURE__ */ new WeakMap(), (e10) => "object" == typeof e10 && !!e10 && "nodeType" in e10 && 9 === e10.nodeType), nv = (e10) => {
    if (e10.assignedSlot) return e10.assignedSlot;
    if (e10.parentElement) return e10.parentElement;
    let t10 = e10.getRootNode();
    return nd(t10) ? t10.host : ng(t10) ? rF(t10.defaultView) : null;
  }, nw = "u" > typeof window, nb = nw ? (Object.getOwnPropertyDescriptor(Window.prototype, "requestAnimationFrame")?.value ?? window.requestAnimationFrame).bind(window) : (e10) => 0, ny = nw ? (Object.getOwnPropertyDescriptor(Window.prototype, "cancelAnimationFrame")?.value ?? window.cancelAnimationFrame).bind(window) : (e10) => {
  }, nx = "u" > typeof Element && "function" == typeof Element.prototype.checkVisibility, n_ = { checkOpacity: true, checkVisibilityCSS: true, opacityProperty: true, visibilityProperty: true }, nk = { checkVisibilityCSS: true, visibilityProperty: true }, nN = /* @__PURE__ */ new WeakMap(), nS = /* @__PURE__ */ new Set(["A", "AUDIO", "BUTTON", "CANVAS", "DETAILS", "EMBED", "IFRAME", "IMG", "INPUT", "METER", "OBJECT", "OPTION", "PROGRESS", "SELECT", "SUMMARY", "SVG", "TEXTAREA", "VIDEO"]), nE = /* @__PURE__ */ new Set(["button", "checkbox", "combobox", "gridcell", "link", "listbox", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "scrollbar", "searchbox", "slider", "spinbutton", "switch", "tab", "textbox", "treeitem"]), nM = new Set("A.ABBR.B.BDI.BDO.BR.CITE.CODE.DATA.DEL.DFN.EM.I.INS.KBD.MARK.Q.S.SAMP.SMALL.SPAN.STRONG.SUB.SUP.TIME.U.VAR.WBR".split(".")), nC = /* @__PURE__ */ new WeakMap(), nT = /* @__PURE__ */ new WeakMap(), nA = (e10, t10) => {
    if (0 !== e10.length) throw 1 === e10.length ? e10[0] : AggregateError(e10, t10);
  }, nz = /* @__PURE__ */ new Set(), n$ = /* @__PURE__ */ new Set();
  /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ new WeakMap();
  let nR = /* @__PURE__ */ new WeakMap(), nO = /* @__PURE__ */ new WeakMap(), nj = /* @__PURE__ */ new WeakMap(), nP = (e10) => "object" == typeof e10 && !!e10, nF = (e10, t10) => "function" == typeof e10[t10], nL = (e10) => {
    var t10, r10, n10;
    let a10, i10, o10, l10, s10;
    return nP(e10) && nP(t10 = e10.gl) && nP(a10 = t10.domElement) && "string" == typeof a10.tagName && "canvas" === a10.tagName.toLowerCase() && nF(a10, "getContext") && nP(n10 = r10 = e10.scene) && true === n10.isObject3D && "string" == typeof n10.uuid && "string" == typeof n10.name && "string" == typeof n10.type && "boolean" == typeof n10.visible && nP(i10 = n10.matrixWorld) && nF(i10, "clone") && nF(i10, "premultiply") && nF(n10, "updateWorldMatrix") && true === r10.isScene && Array.isArray(r10.children) && nP(o10 = e10.camera) && true === o10.isCamera && nP(l10 = e10.raycaster) && nF(l10, "setFromCamera") && nF(l10, "intersectObjects") && nP(s10 = e10.pointer) && nF(s10, "set");
  }, nI = (e10) => nP(e10) && "number" == typeof e10.elapsedTime, nD = (e10, t10) => {
    let r10 = e10.getState();
    if ("function" != typeof r10.setFrameloop) return;
    let n10 = nI(r10.clock) ? r10.clock.elapsedTime : null;
    r10.setFrameloop(t10);
    let a10 = e10.getState().clock;
    null !== n10 && nI(a10) && (a10.elapsedTime = n10);
  }, nB = (e10) => {
    var t10;
    let r10, n10 = nj.get(e10);
    n10 && (nj.delete(e10), nR.get(n10.canvas) === n10.root && (nR.delete(n10.canvas), t10 = n10.canvas, (r10 = nO.get(t10)) && (nO.delete(t10), r10())));
  };
  na({ name: "react-grab-three-selection", onCommitFiberRoot: (e10, t10) => ((e11) => {
    let t11 = ((e12) => {
      let t12, r11 = e12.current.stateNode;
      if (!nP(r11) || !("object" == typeof (t12 = r11.containerInfo) && t12 || "function" == typeof t12)) return null;
      let n11 = r11.containerInfo, a10 = Reflect.get(n11, "getState");
      if ("function" != typeof a10) return null;
      let i10 = Reflect.apply(a10, n11, []);
      return nL(i10) ? () => {
        let e13 = Reflect.apply(a10, n11, []);
        return nL(e13) ? e13 : i10;
      } : null;
    })(e11);
    if (!t11) return void nB(e11);
    let r10 = t11().gl.domElement;
    if (!r10.isConnected || !e11.current.child) return void nB(e11);
    let n10 = nj.get(e11);
    n10 && n10.canvas !== r10 && (nB(e11), n10 = void 0), n10 ? (n10.root.getState = t11, n10.root.selectableObjects = null) : (n10 = { canvas: r10, root: { getState: t11, selectableObjects: null } }, nj.set(e11, n10)), nR.set(r10, n10.root), ((e12) => {
      var t12;
      if (nO.has(e12)) return;
      let r11 = null, n11 = (t12 = { freeze: () => {
        let t13, n12 = nR.get(e12);
        if (!n12) return;
        let a10 = n12.getState();
        if (("always" === (t13 = a10.frameloop) || "demand" === t13 || "never" === t13) && "function" == typeof a10.setFrameloop) {
          let e13 = a10.frameloop;
          nD(n12, "never"), r11 = () => nD(n12, e13);
        }
      }, isConnected: () => e12.isConnected, unfreeze: () => {
        r11?.(), r11 = null;
      } }, nz.add(t12), () => {
        let e13 = [];
        ((e14, t13) => {
          if (n$.has(e14)) try {
            e14.unfreeze();
          } catch (e15) {
            t13.push(e15);
          } finally {
            n$.delete(e14);
          }
        })(t12, e13), nz.delete(t12), nA(e13, "Unregistering renderer freeze failed");
      });
      nO.set(e12, n11);
    })(r10);
  })(t10) });
  let nU = null, nW = false, nH = /* @__PURE__ */ new Map(), nV = /* @__PURE__ */ new WeakSet(), nq = /* @__PURE__ */ new WeakSet(), nK = /* @__PURE__ */ new WeakMap(), nG = /* @__PURE__ */ new Map(), nX = /* @__PURE__ */ new Map();
  "u" > typeof window && (window.requestAnimationFrame = (e10) => (((e11) => {
    if (nU === e11 && (nW = true), nV.has(e11)) return;
    if (nU === e11) {
      let t10 = (nK.get(e11) ?? 0) + 1;
      return nK.set(e11, t10), !(t10 < 4) && nV.add(e11);
    }
    return;
  })(e10), nb((t10) => {
    let r10 = nU, n10 = nW;
    nU = e10, nW = false;
    try {
      e10(t10);
    } finally {
      let t11 = nW;
      nU = r10, nW = n10, t11 || nq.has(e10) || (nV.delete(e10), nK.delete(e10));
    }
  })), window.cancelAnimationFrame = (e10) => {
    if (nH.has(e10)) return void nH.delete(e10);
    let t10 = nX.get(e10);
    if (void 0 !== t10) {
      ny(t10.nativeId), nX.delete(e10);
      return;
    }
    let r10 = nG.get(e10);
    if (void 0 !== r10) {
      nH.delete(r10), nG.delete(e10);
      return;
    }
    ny(e10);
  });
  /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ new WeakSet();
  let nJ = /* @__PURE__ */ new WeakMap();
  na({ name: "react-grab-freeze-updates", onCommitFiberRoot: (e10, t10) => {
    let r10 = rJ().renderers.get(e10);
    r10 && nJ.set(t10, r10);
  } });
  try {
    var nY = "u" > typeof window ? window : e.g;
    nY._sentryModuleMetadata = nY._sentryModuleMetadata || {}, nY._sentryModuleMetadata[new nY.Error().stack] = Object.assign({}, nY._sentryModuleMetadata[new nY.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let nZ = /^[a-zA-Z][a-zA-Z\d+\-.]*:/, nQ = ["rsc://", "file:///", "webpack-internal://", "webpack://", "node:", "turbopack://", "metro://", "/app-pages-browser/", "/(app-pages-browser)/"], n0 = ["rsc://", "about://React/"], n1 = ["<anonymous>", "eval", ""], n2 = /\.(jsx|tsx|ts|js)$/, n5 = /(\.min|bundle|chunk|vendor|vendors|runtime|polyfill|polyfills)\.(js|mjs|cjs)$|(chunk|bundle|vendor|vendors|runtime|polyfill|polyfills|framework|app|main|index)[-_.][A-Za-z0-9_-]{4,}\.(js|mjs|cjs)$|[\da-f]{8,}\.(js|mjs|cjs)$|[-_.][\da-f]{20,}\.(js|mjs|cjs)$|\/dist\/|\/build\/|\/.next\/|\/out\/|\/node_modules\/|\.webpack\.|\.vite\.|\.turbopack\./i, n4 = /^\?[\w~.-]+(?:=[^&#]*)?(?:&[\w~.-]+(?:=[^&#]*)?)*$/, n3 = /\(at [^)]+\)$/, n7 = ["react_stack_bottom_frame", "react-stack-bottom-frame"], n8 = /(^|@)\S+:\d+/, n6 = /^\s*at .*(\S+:\d+|\(native\))/m, n9 = /^(eval@)?(\[native code\])?$/, ae = (e10, t10) => {
    if (t10?.includeInElement !== false) {
      let r10 = e10.split(`
`), n10 = [];
      for (let e11 of r10) if (/^\s*at\s+/.test(e11)) {
        let t11 = an(e11, void 0)[0];
        t11 && n10.push(t11);
      } else if (/^\s*in\s+/.test(e11)) {
        let t11 = e11.replace(/^\s*in\s+/, "").replace(/\s*\(at .*\)$/, "");
        n10.push({ functionName: t11, source: e11 });
      } else if (e11.match(n8)) {
        let t11 = aa(e11, void 0)[0];
        t11 && n10.push(t11);
      }
      return ar(n10, t10);
    }
    return e10.match(n6) ? an(e10, t10) : aa(e10, t10);
  }, at = (e10) => {
    if (!e10.includes(":")) return [e10, void 0, void 0];
    let t10 = e10.startsWith("(") && /:\d+\)$/.test(e10) ? e10.slice(1, -1) : e10, r10 = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t10);
    return r10 ? [r10[1], r10[2] || void 0, r10[3] || void 0] : [t10, void 0, void 0];
  }, ar = (e10, t10) => t10 && null != t10.slice ? Array.isArray(t10.slice) ? e10.slice(t10.slice[0], t10.slice[1]) : e10.slice(0, t10.slice) : e10, an = (e10, t10) => ar(e10.split(`
`).filter((e11) => !!e11.match(n6)), t10).map((e11) => {
    let t11 = e11;
    t11.includes("(eval ") && (t11 = t11.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
    let r10 = t11.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""), n10 = r10.match(/ (\(.+\)$)/);
    r10 = n10 ? r10.replace(n10[0], "") : r10;
    let a10 = at(n10 ? n10[1] : r10);
    return { functionName: n10 && r10 || void 0, fileName: ["eval", "<anonymous>"].includes(a10[0]) ? void 0 : a10[0], lineNumber: a10[1] ? +a10[1] : void 0, columnNumber: a10[2] ? +a10[2] : void 0, source: t11 };
  }), aa = (e10, t10) => ar(e10.split(`
`).filter((e11) => !e11.match(n9)), t10).map((e11) => {
    let t11 = e11;
    if (t11.includes(" > eval") && (t11 = t11.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), !t11.includes("@") && !t11.includes(":")) return { functionName: t11 };
    {
      let e12 = /(([^\n\r"\u2028\u2029]*".[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*(?:@[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*)*(?:[\n\r\u2028\u2029][^@]*)?)?[^@]*)@/, r10 = t11.match(e12), n10 = r10 && r10[1] ? r10[1] : void 0, a10 = at(t11.replace(e12, ""));
      return { functionName: n10, fileName: a10[0], lineNumber: a10[1] ? +a10[1] : void 0, columnNumber: a10[2] ? +a10[2] : void 0, source: t11 };
    }
  }), ai = /* @__PURE__ */ new WeakMap(), ao = (e10) => n7.some((t10) => e10.includes(t10)), al = (e10) => {
    let t10 = e10.getFunctionName?.() ?? "";
    if (t10) return t10;
    let r10 = e10.getTypeName?.() ?? "", n10 = e10.getMethodName?.() ?? "";
    return r10 && n10 ? `${r10}.${n10}` : n10;
  }, as = (e10) => {
    let t10, r10 = ai.get(e10);
    if (r10) return r10;
    let n10 = null, a10 = Error.prepareStackTrace;
    Error.prepareStackTrace = (e11, t11) => {
      n10 = ((e12) => {
        let t12 = [];
        for (let r12 = 1; r12 < e12.length; r12++) {
          let n11 = e12[r12], a11 = al(n11);
          if (ao(a11)) return { frames: t12, isTrusted: true };
          if (n11.isNative?.()) {
            t12.push({ functionName: a11 || void 0 });
            continue;
          }
          let i11 = n11.getScriptNameOrSourceURL?.() ?? "";
          !i11 && n11.isEval?.() && (i11 = n11.getEvalOrigin?.() ?? ""), t12.push({ functionName: a11 && "<anonymous>" !== a11 ? a11 : void 0, fileName: i11 && "<anonymous>" !== i11 ? i11 : void 0, lineNumber: n11.getLineNumber?.() ?? void 0, columnNumber: n11.getColumnNumber?.() ?? void 0, enclosingLineNumber: n11.getEnclosingLineNumber?.() ?? void 0, enclosingColumnNumber: n11.getEnclosingColumnNumber?.() ?? void 0, source: `    at ${n11.toString()}` });
        }
        return { frames: t12, isTrusted: false };
      })(t11);
      let r11 = `${e11.name || "Error"}: ${e11.message || ""}`;
      for (let e12 of t11) r11 += `
    at ${e12.toString()}`;
      return r11;
    };
    try {
      t10 = String(e10.stack);
    } finally {
      Error.prepareStackTrace = a10;
    }
    let i10 = n10 ?? ((e11) => {
      let t11 = -1;
      for (let r11 of n7) if (-1 !== (t11 = e11.indexOf(r11))) break;
      return { frames: ae(-1 === t11 ? e11 : e11.slice(0, e11.lastIndexOf(`
`, t11))).slice(1), isTrusted: -1 !== t11 };
    })(t10);
    return ai.set(e10, i10), i10;
  };
  var ac = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ad = new Uint8Array(64), au = new Uint8Array(128);
  for (let e10 = 0; e10 < ac.length; e10++) {
    let t10 = ac.charCodeAt(e10);
    ad[e10] = t10, au[t10] = e10;
  }
  function ap(e10, t10) {
    let r10 = 0, n10 = 0, a10 = 0;
    do
      r10 |= (31 & (a10 = au[e10.next()])) << n10, n10 += 5;
    while (32 & a10);
    let i10 = 1 & r10;
    return r10 >>>= 1, i10 && (r10 = -2147483648 | -r10), t10 + r10;
  }
  function ah(e10, t10) {
    return !(e10.pos >= t10) && 44 !== e10.peek();
  }
  var am = class {
    constructor(e10) {
      this.pos = 0, this.buffer = e10;
    }
    next() {
      return this.buffer.charCodeAt(this.pos++);
    }
    peek() {
      return this.buffer.charCodeAt(this.pos);
    }
    indexOf(e10) {
      let { buffer: t10, pos: r10 } = this, n10 = t10.indexOf(e10, r10);
      return -1 === n10 ? t10.length : n10;
    }
  };
  function af(e10) {
    let { length: t10 } = e10, r10 = new am(e10), n10 = [], a10 = 0, i10 = 0, o10 = 0, l10 = 0, s10 = 0;
    do {
      let e11 = r10.indexOf(";"), t11 = [], c10 = true, d10 = 0;
      for (a10 = 0; r10.pos < e11; ) {
        let n11;
        (a10 = ap(r10, a10)) < d10 && (c10 = false), d10 = a10, ah(r10, e11) ? (i10 = ap(r10, i10), o10 = ap(r10, o10), l10 = ap(r10, l10), n11 = ah(r10, e11) ? [a10, i10, o10, l10, s10 = ap(r10, s10)] : [a10, i10, o10, l10]) : n11 = [a10], t11.push(n11), r10.pos++;
      }
      c10 || t11.sort(ag), n10.push(t11), r10.pos = e11 + 1;
    } while (r10.pos <= t10);
    return n10;
  }
  function ag(e10, t10) {
    return e10[0] - t10[0];
  }
  let av = /^[a-zA-Z][a-zA-Z\d+\-.]*:/, aw = /^data:application\/json[^,]+base64,/, ab = /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*(?:\*\/)[ \t]*$)/, ay = /* @__PURE__ */ new Map(), ax = /* @__PURE__ */ new Map(), a_ = (e10, t10, r10, n10, a10) => {
    if (r10 < 0 || r10 >= e10.length) return null;
    let i10 = e10[r10];
    if (!i10 || 0 === i10.length) return null;
    let o10 = null, l10 = 0, s10 = i10.length - 1;
    for (; l10 <= s10; ) {
      let e11 = l10 + s10 >> 1;
      i10[e11][0] <= n10 ? (o10 = i10[e11], l10 = e11 + 1) : s10 = e11 - 1;
    }
    if (!o10 || o10.length < 4) return null;
    let [, c10, d10, u6] = o10;
    if (void 0 === c10 || void 0 === d10 || void 0 === u6) return null;
    let p2 = t10[c10];
    return p2 ? { columnNumber: u6, fileName: p2, lineNumber: d10 + 1, isIgnoreListed: a10?.has(c10) ?? false } : null;
  }, ak = (e10) => {
    let t10 = e10.ignoreList ?? e10.x_google_ignoreList;
    return Array.isArray(t10) && t10.length > 0 ? new Set(t10) : void 0;
  }, aN = (e10) => {
    if (!e10) return false;
    let t10 = e10.trim();
    if (!t10) return false;
    let r10 = t10.match(av);
    if (!r10) return true;
    let n10 = r10[0].toLowerCase();
    return "http:" === n10 || "https:" === n10;
  }, aS = async (e10, t10 = fetch) => {
    if (!aN(e10)) return null;
    let r10 = await t10(e10);
    if (!r10.ok) return null;
    let n10 = await r10.text();
    if (!n10) return null;
    let a10 = ((e11, t11) => {
      let r11, n11 = t11.length;
      for (; n11 > 0 && !r11; ) {
        let e12 = t11.lastIndexOf(`
`, n11 - 1) + 1, a12 = t11.slice(e12, n11).match(ab);
        a12 && (r11 = a12[1] || a12[2]), n11 = e12 - 1;
      }
      if (!r11) return null;
      let a11 = av.test(r11);
      if (!(aw.test(r11) || a11 || r11.startsWith("/"))) {
        let t12 = e11.split("/");
        t12[t12.length - 1] = r11, r11 = t12.join("/");
      }
      return r11;
    })(e10, n10);
    if (!a10 || !aN(a10) && !aw.test(a10)) return null;
    let i10 = await t10(a10);
    if (!i10.ok) return null;
    try {
      let e11 = await i10.json();
      return "sections" in e11 ? ((e12) => {
        let t11 = e12.sections.map(({ map: e13, offset: t12 }) => ({ map: { ...e13, ignoredSourceIndices: ak(e13), mappings: af(e13.mappings) }, offset: t12 })), r11 = /* @__PURE__ */ new Set();
        for (let e13 of t11) for (let t12 of e13.map.sources) r11.add(t12);
        return { file: e12.file, mappings: [], names: [], sections: t11, sourceRoot: void 0, sources: Array.from(r11), sourcesContent: void 0, version: 3 };
      })(e11) : { file: e11.file, ignoredSourceIndices: ak(e11), mappings: af(e11.mappings), names: e11.names, sourceRoot: e11.sourceRoot, sources: e11.sources, sourcesContent: e11.sourcesContent, version: 3 };
    } catch {
      return null;
    }
  }, aE = async (e10, t10 = true, r10) => {
    if (t10 && ay.has(e10)) return ay.get(e10) ?? null;
    let n10 = t10 ? ax.get(e10) : void 0;
    if (n10) return (await n10).sourceMap;
    let a10 = aS(e10, r10).then((e11) => ({ sourceMap: e11, isTransientFailure: false }), () => ({ sourceMap: null, isTransientFailure: true }));
    t10 && ax.set(e10, a10);
    let { sourceMap: i10, isTransientFailure: o10 } = await a10;
    return t10 && (ax.delete(e10), o10 || ay.set(e10, i10)), i10;
  }, aM = async (e10, t10 = true, r10) => await Promise.all(e10.map(async (e11) => {
    if (!e11.fileName) return e11;
    let n10 = await aE(e11.fileName, t10, r10);
    if (!n10 || "number" != typeof e11.lineNumber || "number" != typeof e11.columnNumber) return e11;
    let a10 = ((e12, t11, r11) => {
      if (e12.sections) {
        let n11 = t11 - 1, a11 = null;
        for (let t12 of e12.sections) if (n11 > t12.offset.line || n11 === t12.offset.line && r11 >= t12.offset.column) a11 = t12;
        else break;
        if (!a11) return null;
        let i10 = n11 - a11.offset.line, o10 = n11 === a11.offset.line ? r11 - a11.offset.column : r11;
        return a_(a11.map.mappings, a11.map.sources, i10, o10, a11.map.ignoredSourceIndices);
      }
      return a_(e12.mappings, e12.sources, t11 - 1, r11, e12.ignoredSourceIndices);
    })(n10, e11.lineNumber, e11.columnNumber);
    return a10 ? { ...e11, source: a10.fileName && e11.source ? e11.source.replace(e11.fileName, a10.fileName) : e11.source, fileName: a10.fileName, lineNumber: a10.lineNumber, columnNumber: a10.columnNumber, isIgnoreListed: a10.isIgnoreListed, isSymbolicated: true } : e11;
  })), aC = (e10) => e10._debugStack instanceof Error && "string" == typeof e10._debugStack?.stack, aT = (e10) => "number" == typeof e10.tag, aA = (e10) => e10._debugOwner, az = (e10) => {
    let t10 = null;
    if (rZ(e10, (r11) => {
      if (r11 === e10) return false;
      let n11 = r11._debugOwner;
      return (n11 === e10 || null !== e10.alternate && n11 === e10.alternate) && r11._debugStack instanceof Error && (t10 = r11._debugStack, true);
    }), !t10) return null;
    let { frames: r10, isTrusted: n10 } = as(t10);
    if (!n10) return null;
    for (let e11 = r10.length - 1; e11 >= 0; e11--) {
      let t11 = r10[e11];
      if (t11.fileName) return { ...t11, lineNumber: t11.enclosingLineNumber || t11.lineNumber, columnNumber: t11.enclosingColumnNumber || t11.columnNumber };
    }
    return null;
  }, a$ = (e10) => {
    for (let t10 of rG) {
      let r10 = t10.currentDispatcherRef;
      r10 && "object" == typeof r10 && ("H" in r10 ? r10.H = e10 : r10.current = e10);
    }
  }, aR = (e10) => `
    in ${e10}`, aO = (e10, t10) => {
    let r10 = aR(e10);
    return t10 && (r10 += ` (at ${t10})`), r10;
  }, aj = false, aP = /* @__PURE__ */ new WeakMap(), aF = (e10, t10) => {
    if (!e10 || aj) return "";
    let r10 = aP.get(e10);
    if (void 0 !== r10) return r10;
    let n10 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0, aj = true;
    let a10 = (() => {
      let e11 = rJ();
      for (let t11 of [...Array.from(rG), ...Array.from(e11.renderers.values())]) {
        let e12 = t11.currentDispatcherRef;
        if (e12 && "object" == typeof e12) return "H" in e12 ? e12.H : e12.current;
      }
      return null;
    })();
    a$(null);
    let i10 = console.error, o10 = console.warn;
    console.error = () => {
    }, console.warn = () => {
    };
    try {
      let r11 = { DetermineComponentFrameRoot() {
        let r12;
        try {
          if (t10) {
            let t11 = function() {
              throw Error();
            };
            if (Object.defineProperty(t11.prototype, "props", { set: function() {
              throw Error();
            } }), "object" == typeof Reflect && Reflect.construct) {
              try {
                Reflect.construct(t11, []);
              } catch (e11) {
                r12 = e11;
              }
              Reflect.construct(e10, [], t11);
            } else {
              try {
                t11.call();
              } catch (e11) {
                r12 = e11;
              }
              e10.call(t11.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (e11) {
              r12 = e11;
            }
            let t11 = e10();
            t11 && "function" == typeof t11.catch && t11.catch(() => {
            });
          }
        } catch (e11) {
          if (e11 instanceof Error && r12 instanceof Error && "string" == typeof e11.stack) return [e11.stack, r12.stack];
        }
        return [null, null];
      } };
      r11.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot", Object.getOwnPropertyDescriptor(r11.DetermineComponentFrameRoot, "name")?.configurable && Object.defineProperty(r11.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      let [n11, a11] = r11.DetermineComponentFrameRoot();
      if (n11 && a11) {
        let t11 = n11.split(`
`), r12 = a11.split(`
`), i11 = 0, o11 = 0;
        for (; i11 < t11.length && !t11[i11].includes("DetermineComponentFrameRoot"); ) i11++;
        for (; o11 < r12.length && !r12[o11].includes("DetermineComponentFrameRoot"); ) o11++;
        if (i11 === t11.length || o11 === r12.length) for (i11 = t11.length - 1, o11 = r12.length - 1; i11 >= 1 && o11 >= 0 && t11[i11] !== r12[o11]; ) o11--;
        for (; i11 >= 1 && o11 >= 0; i11--, o11--) if (t11[i11] !== r12[o11]) {
          if (1 !== i11 || 1 !== o11) do
            if (i11--, --o11 < 0 || t11[i11] !== r12[o11]) {
              let r13 = `
${t11[i11].replace(" at new ", " at ")}`, n12 = r2(e10);
              return n12 && r13.includes("<anonymous>") && (r13 = r13.replace("<anonymous>", n12)), aP.set(e10, r13), r13;
            }
          while (i11 >= 1 && o11 >= 0);
          break;
        }
      }
    } finally {
      aj = false, Error.prepareStackTrace = n10, a$(a10), console.error = i10, console.warn = o10;
    }
    let l10 = e10 ? r2(e10) : "", s10 = l10 ? aR(l10) : "";
    return aP.set(e10, s10), s10;
  }, aL = (e10, t10) => {
    let r10 = e10.tag, n10 = "";
    switch (r10) {
      case 28:
        n10 = aR("Activity");
        break;
      case 1:
        n10 = aF(e10.type, true);
        break;
      case 11:
        n10 = aF(e10.type.render, false);
        break;
      case 0:
      case 15:
        n10 = aF(e10.type, false);
        break;
      case 5:
      case 26:
      case 27:
        n10 = aR(e10.type);
        break;
      case 16:
        n10 = aR("Lazy");
        break;
      case 13:
        n10 = e10.child !== t10 && null !== t10 ? aR("Suspense Fallback") : aR("Suspense");
        break;
      case 19:
        n10 = aR("SuspenseList");
        break;
      case 30:
        n10 = aR("ViewTransition");
        break;
      default:
        return "";
    }
    return n10;
  }, aI = (e10) => {
    let t10 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    let r10 = e10;
    if (!r10) return "";
    Error.prepareStackTrace = t10, r10.startsWith(`Error: react-stack-top-frame
`) && (r10 = r10.slice(29));
    let n10 = r10.indexOf(`
`);
    -1 !== n10 && (r10 = r10.slice(n10 + 1));
    let a10 = Math.max(r10.indexOf("react_stack_bottom_frame"), r10.indexOf("react-stack-bottom-frame"));
    return (-1 !== a10 && (a10 = r10.lastIndexOf(`
`, a10)), -1 === a10) ? "" : r10 = r10.slice(0, a10);
  }, aD = (e10) => !!(e10.functionName && e10.fileName && aU(e10.fileName)), aB = (e10, t10) => e10.fileName === t10.fileName && e10.lineNumber === t10.lineNumber && e10.columnNumber === t10.columnNumber, aU = (e10) => n0.some((t10) => e10.startsWith(t10)), aW = (e10) => !e10.isServer && e10.fileName && aU(e10.fileName) ? { ...e10, isServer: true } : e10, aH = async (e10, t10 = true, r10) => {
    let n10, a10 = (n10 = [], rZ(e10, (e11) => {
      if (!aC(e11)) return;
      let t11 = "string" == typeof e11.type ? e11.type : r2(e11.type) || "<anonymous>";
      n10.push({ componentName: t11, stackFrames: ae(aI(e11._debugStack?.stack)) });
    }, true), n10), i10 = ae(((e11) => {
      try {
        let t11 = "", r11 = e11, n11 = null;
        do {
          t11 += aL(r11, n11);
          let e12 = r11._debugInfo;
          if (e12 && Array.isArray(e12)) for (let r12 = e12.length - 1; r12 >= 0; r12--) {
            let n12 = e12[r12];
            "string" == typeof n12.name && (t11 += aO(n12.name, n12.env));
          }
          n11 = r11, r11 = r11.return;
        } while (r11);
        return t11;
      } catch (e12) {
        return e12 instanceof Error ? `
Error generating stack: ${e12.message}
${e12.stack}` : "";
      }
    })(e10)), o10 = ((e11) => {
      let t11 = /* @__PURE__ */ new Map();
      for (let r11 of e11) for (let e12 of r11.stackFrames) {
        if (!aD(e12)) continue;
        let r12 = e12.functionName, n11 = t11.get(r12) ?? [];
        n11.some((t12) => aB(t12, e12)) || (n11.push(e12), t11.set(r12, n11));
      }
      return t11;
    })(a10), l10 = /* @__PURE__ */ new Map();
    return aM(i10.map((e11) => e11.source?.includes("(at Server)") || null != e11.source && n3.test(e11.source) ? ((e12, t11, r11) => {
      if (!e12.functionName) return { ...e12, isServer: true };
      let n11 = t11.get(e12.functionName);
      if (!n11 || 0 === n11.length) return { ...e12, isServer: true };
      let a11 = r11.get(e12.functionName) ?? 0, i11 = n11[a11 % n11.length];
      return r11.set(e12.functionName, a11 + 1), { ...e12, isServer: true, fileName: i11.fileName, lineNumber: i11.lineNumber, columnNumber: i11.columnNumber, source: e12.source?.replace("(at Server)", `(${i11.fileName}:${i11.lineNumber}:${i11.columnNumber})`) };
    })(e11, o10, l10) : e11).filter((e11, t11, r11) => {
      if (0 === t11) return true;
      let n11 = r11[t11 - 1];
      return e11.functionName !== n11.functionName;
    }), t10, r10);
  }, aV = async (e10, t10 = true, r10) => {
    let n10 = ((e11) => {
      let t11 = [], r11 = e11;
      for (; r11; ) if (aT(r11)) {
        let e12 = r11;
        if ((r11 = aA(e12)) && aC(e12)) {
          let { frames: r12, isTrusted: n11 } = as(e12._debugStack);
          if (n11) for (let e13 of r12) t11.push(aW(e13));
        }
      } else {
        let e12 = r11;
        if ((r11 = e12.owner) && e12.debugStack instanceof Error) for (let r12 of as(e12.debugStack).frames) t11.push({ ...r12, isServer: true });
      }
      return t11;
    })(e10);
    if (n10.length > 0) {
      let a10 = az(e10) ?? {};
      a10.functionName = r2(e10.type) ?? a10.functionName;
      let i10 = await aM([a10, ...n10], t10, r10);
      if (i10.some((e11, t11) => t11 > 0 && !!e11.fileName && !e11.isIgnoreListed)) return i10;
    }
    return aH(e10, t10, r10);
  }, aq = (e10) => e10.fileName ? { fileName: e10.fileName, lineNumber: e10.lineNumber, columnNumber: e10.columnNumber, functionName: e10.functionName } : null, aK = async (e10, t10 = true, r10) => {
    let n10;
    if ((n10 = e10._debugSource) && "object" == typeof n10 && n10 && "fileName" in n10 && "string" == typeof n10.fileName && "lineNumber" in n10 && "number" == typeof n10.lineNumber) return e10._debugSource || null;
    let a10 = ((e11) => {
      if (!aC(e11)) return null;
      let { frames: t11, isTrusted: r11 } = as(e11._debugStack);
      if (!r11) return null;
      for (let e12 of t11) if (e12.fileName) return e12;
      return null;
    })(e10) ?? az(e10);
    if (a10) {
      let [e11] = await aM([a10], t10, r10), n11 = aq(e11);
      if (n11) return n11;
    }
    for (let n11 of await aH(e10, t10, r10)) if (n11.fileName) return aq(n11);
    return null;
  }, aG = (e10) => e10.split("/").filter(Boolean).length, aX = (e10) => {
    if (!e10 || n1.some((t11) => t11 === e10)) return "";
    let t10 = e10, r10 = t10.startsWith("http://") || t10.startsWith("https://");
    if (r10) try {
      t10 = new URL(t10).pathname;
    } catch {
    }
    if (r10 && (t10 = ((e11) => {
      let t11 = e11.indexOf("/", 1);
      if (-1 === t11 || 1 !== aG(e11.slice(0, t11))) return e11;
      let r11 = e11.slice(t11);
      if (!n2.test(r11) || 2 > aG(r11)) return e11;
      let n11 = r11.split("/").filter(Boolean)[0] ?? null;
      return !n11 || n11.startsWith("@") || n11.length > 4 ? e11 : r11;
    })(t10)), t10.startsWith("about://React/")) {
      let e11 = t10.slice(14), r11 = e11.indexOf("/"), n11 = e11.indexOf(":");
      t10 = -1 !== r11 && (-1 === n11 || r11 < n11) ? e11.slice(r11 + 1) : e11;
    }
    let n10 = true;
    for (; n10; ) for (let e11 of (n10 = false, nQ)) if (t10.startsWith(e11)) {
      t10 = t10.slice(e11.length), "file:///" === e11 && (t10 = `/${t10.replace(/^\/+/, "")}`), n10 = true;
      break;
    }
    if (nZ.test(t10)) {
      let e11 = t10.match(nZ);
      e11 && (t10 = t10.slice(e11[0].length));
    }
    if (t10.startsWith("//")) {
      let e11 = t10.indexOf("/", 2);
      t10 = -1 === e11 ? "" : t10.slice(e11);
    }
    let a10 = t10.indexOf("?");
    if (-1 !== a10) {
      let e11 = t10.slice(a10);
      n4.test(e11) && (t10 = t10.slice(0, a10));
    }
    return t10;
  }, aJ = /* @__PURE__ */ Symbol.for("react.context"), aY = [], aZ = null, aQ = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render."), a0 = () => {
    let e10 = aZ;
    return null !== e10 && (aZ = e10.next), e10;
  }, a1 = (e10) => e10._currentValue, a2 = (e10, t10, r10, n10 = null) => {
    aY.push({ displayName: n10, primitive: e10, stackError: Error(), value: t10, dispatcherHookName: r10 });
  }, a5 = (e10) => (t10, r10) => {
    let n10 = a0();
    a0(), a0();
    let a10 = Error(), { value: i10, error: o10 } = ((e11, t11) => {
      let r11, n11 = null;
      if (null !== e11) {
        let t12 = e11.memoizedState;
        if ("object" == typeof t12 && t12 && "then" in t12 && "function" == typeof t12.then) switch (t12.status) {
          case "fulfilled":
            r11 = t12.value;
            break;
          case "rejected":
            n11 = t12.reason;
            break;
          default:
            n11 = aQ, r11 = t12;
        }
        else r11 = t12;
      } else r11 = t11;
      return { value: r11, error: n11 };
    })(n10, r10);
    if (aY.push({ displayName: null, primitive: e10, stackError: a10, value: i10, dispatcherHookName: e10 }), null !== o10) throw o10;
    return [i10, () => {
    }, false];
  }, a4 = a5("ActionState"), a3 = { readContext: a1, use: (e10) => {
    if ("object" == typeof e10 && e10) {
      if ("function" == typeof e10.then) {
        switch (e10.status) {
          case "fulfilled":
            return a2("Promise", e10.value, "Use"), e10.value;
          case "rejected":
            throw e10.reason;
        }
        throw a2("Unresolved", e10, "Use"), aQ;
      }
      if (e10.$$typeof === aJ && "_currentValue" in e10) {
        let t10 = a1(e10);
        return a2("Context (use)", t10, "Use", e10.displayName || "Context"), t10;
      }
    }
    throw Error("An unsupported type was passed to use(): " + String(e10));
  }, useCallback: (e10) => {
    let t10 = a0();
    return a2("Callback", null === t10 ? e10 : t10.memoizedState[0], "Callback"), e10;
  }, useContext: (e10) => {
    let t10 = a1(e10);
    return a2("Context", t10, "Context", e10.displayName || null), t10;
  }, useEffect: (e10) => {
    a0(), a2("Effect", e10, "Effect");
  }, useImperativeHandle: (e10) => {
    let t10;
    a0(), "object" == typeof e10 && e10 && "current" in e10 && (t10 = e10.current), a2("ImperativeHandle", t10, "ImperativeHandle");
  }, useLayoutEffect: (e10) => {
    a0(), a2("LayoutEffect", e10, "LayoutEffect");
  }, useInsertionEffect: (e10) => {
    a0(), a2("InsertionEffect", e10, "InsertionEffect");
  }, useMemo: (e10) => {
    let t10 = a0(), r10 = null === t10 ? e10() : t10.memoizedState[0];
    return a2("Memo", r10, "Memo"), r10;
  }, useReducer: (e10, t10, r10) => {
    let n10 = a0(), a10 = null === n10 ? void 0 === r10 ? t10 : r10(t10) : n10.memoizedState;
    return a2("Reducer", a10, "Reducer"), [a10, () => {
    }];
  }, useRef: (e10) => {
    let t10 = a0(), r10 = null === t10 ? { current: e10 } : t10.memoizedState;
    return a2("Ref", r10.current, "Ref"), r10;
  }, useState: (e10) => {
    let t10 = a0(), r10 = null === t10 ? "function" == typeof e10 ? e10() : e10 : t10.memoizedState;
    return a2("State", r10, "State"), [r10, () => {
    }];
  }, useDebugValue: (e10, t10) => {
    a2("DebugValue", "function" == typeof t10 ? t10(e10) : e10, "DebugValue");
  }, useDeferredValue: (e10) => {
    let t10 = a0(), r10 = null === t10 ? e10 : t10.memoizedState;
    return a2("DeferredValue", r10, "DeferredValue"), r10;
  }, useTransition: () => {
    let e10 = a0();
    a0();
    let t10 = null !== e10 && e10.memoizedState;
    return a2("Transition", t10, "Transition"), [t10, () => {
    }];
  }, useSyncExternalStore: (e10, t10) => {
    let r10 = a0();
    a0();
    let n10 = null === r10 ? t10() : r10.memoizedState;
    return a2("SyncExternalStore", n10, "SyncExternalStore"), n10;
  }, useId: () => {
    let e10 = a0(), t10 = null === e10 ? "" : e10.memoizedState;
    return a2("Id", t10, "Id"), t10;
  }, useHostTransitionStatus: () => {
    let e10 = a1({ _currentValue: null });
    return a2("HostTransitionStatus", e10, "HostTransitionStatus"), e10;
  }, useFormState: a5("FormState"), useActionState: a4, useOptimistic: (e10) => {
    let t10 = a0(), r10 = null === t10 ? e10 : t10.memoizedState;
    return a2("Optimistic", r10, "Optimistic"), [r10, () => {
    }];
  }, useMemoCache: (e10) => [], useCacheRefresh: () => {
    let e10 = a0();
    return a2("CacheRefresh", null === e10 ? () => {
    } : e10.memoizedState, "CacheRefresh"), () => {
    };
  }, useEffectEvent: (e10) => (a0(), a2("EffectEvent", e10, "EffectEvent"), e10) };
  typeof Proxy > "u" || new Proxy(a3, { get(e10, t10) {
    if (Object.prototype.hasOwnProperty.call(e10, t10)) return e10[t10];
    let r10 = Error("Missing method in Dispatcher: " + t10);
    throw r10.name = "ReactDebugToolsUnsupportedHookError", r10;
  } });
  let a7 = (e10) => void 0 !== e10 && Number.isFinite(e10) ? Math.max(0, Math.floor(e10)) : 3, a8 = /^(?:\.\/)?\/?\([a-z][a-z0-9-]*\)\//, a6 = (e10) => {
    let t10 = aX(e10);
    return (t10 = t10.replace(a8, "")).startsWith("./") && (t10 = t10.slice(2)), t10;
  }, a9 = (e10) => {
    try {
      return decodeURIComponent(e10);
    } catch {
      return e10;
    }
  }, ie = /(?:^|[/\\])node_modules[/\\]/, it = /[/\\]\.vite[/\\]deps[^/\\]*[/\\]/, ir = /\.[mc]?[jt]sx?$/i, ia = /^chunk-[A-Za-z0-9_-]+$/, ii = /[/\\]/, io = /^(.+?)@v?\d/, il = (e10) => e10.split(ii).filter(Boolean), is = (e10) => {
    let [t10, r10] = il(e10);
    return !t10 || t10.startsWith(".") ? null : t10.startsWith("@") ? r10 ? `${t10}/${r10}` : null : t10;
  }, ic = (e10) => {
    let t10 = il(e10)[0];
    if (!t10) return null;
    let r10 = t10.replace(ir, "");
    if (ia.test(r10)) return null;
    if (!r10.startsWith("@")) return r10;
    let n10 = r10.indexOf("_");
    return -1 === n10 ? null : `${r10.slice(0, n10)}/${r10.slice(n10 + 1)}`;
  }, id = (e10, t10, r10) => {
    let n10 = e10.split(t10);
    return n10.length > 1 ? r10(n10[n10.length - 1]) : null;
  }, iu = (e10) => e10?.match(io)?.[1] ?? null, ip = /^@[A-Za-z0-9][A-Za-z0-9._-]*$/, ih = /^[A-Za-z0-9][A-Za-z0-9._-]*$/, im = /* @__PURE__ */ new Set(["app", "web", "website", "frontend", "client", "src"]), ig = /* @__PURE__ */ new Set(["app", "src", "components", "pages", "features", "modules", "hooks", "lib", "utils", "ui", "shared", "common", "core", "styles", "assets"]), iv = (e10) => {
    let t10;
    if (!e10) return { origin: "unknown", packageName: null };
    let r10 = e10 ? ((e11) => {
      let t11;
      if (!e11) return null;
      let r11 = aX(e11);
      return r11 && ((id(t11 = a9(r11), it, ic) ?? id(t11, ie, is)) || ((e12) => {
        let t12;
        try {
          t12 = new URL(e12);
        } catch {
          return null;
        }
        if (!t12.hostname) return null;
        let r12 = il(t12.pathname).map(a9);
        for (let [e13, t13] of r12.entries()) {
          if (t13.startsWith("@")) {
            let n11 = iu(r12[e13 + 1]);
            if (n11) return `${t13}/${n11}`;
            continue;
          }
          let n10 = iu(t13);
          if (n10) return n10;
        }
        return null;
      })(e11)) || null;
    })(e10) ?? ((e11) => {
      let t11 = ((e12) => {
        let t12 = e12;
        for (; t12.startsWith("../") || t12.startsWith("./"); ) t12 = t12.slice(t12.startsWith("../") ? 3 : 2);
        return t12;
      })(a9(aX(e11)));
      if (t11.startsWith("/")) return null;
      let [r11, n10, ...a10] = il(t11);
      return !r11 || !n10 || 0 === a10.length || !ip.test(r11) || ig.has(r11.slice(1)) || !ih.test(n10) || ir.test(n10) || im.has(n10) ? null : `${r11}/${n10}`;
    })(e10) : null;
    return r10 ? { origin: "package", packageName: r10 } : !(!(t10 = aX(e10)) || !n2.test(t10) || n5.test(t10)) ? { origin: "app", packageName: null } : { origin: "unknown", packageName: null };
  }, iw = /* @__PURE__ */ new Set(["role", "name", "aria-label", "rel", "href"]), ib = (e10) => {
    if (!/^[a-z-]{3,}$/i.test(e10)) return false;
    for (let t10 of e10.split(/-|[A-Z]/)) if (t10.length <= 2 || /[^aeiou]{4,}/i.test(t10)) return false;
    return true;
  }, iy = (e10) => {
    let t10 = e10[0].name;
    for (let r10 = 1; r10 < e10.length; r10++) t10 = `${e10[r10].name} > ${t10}`;
    return t10;
  }, ix = (e10) => {
    let t10 = 0;
    for (let r10 of e10) t10 += r10.penalty;
    return t10;
  }, i_ = (e10, t10) => ix(e10) - ix(t10), ik = (e10, t10) => {
    let r10 = e10.parentNode;
    if (!r10) return;
    let n10 = r10.firstChild;
    if (!n10) return;
    let a10 = 0;
    for (; n10 && (rj(n10) && (void 0 === t10 || n10.tagName.toLowerCase() === t10) && a10++, n10 !== e10); ) n10 = n10.nextSibling;
    return a10;
  }, iN = (e10, t10) => "html" === e10 ? "html" : `${e10}:nth-of-type(${t10})`, iS = (e10, t10) => {
    let r10 = [], n10 = e10.getAttribute("id"), a10 = e10.tagName.toLowerCase();
    for (let t11 of (n10 && ib(n10) && r10.push({ name: `#${CSS.escape(n10)}`, penalty: 0 }), e10.classList)) ib(t11) && r10.push({ name: `.${CSS.escape(t11)}`, penalty: 1 });
    for (let n11 of e10.attributes) t10(n11.name, n11.value) && r10.push({ name: `[${CSS.escape(n11.name)}="${CSS.escape(n11.value)}"]`, penalty: 2 });
    r10.push({ name: a10, penalty: 5 });
    let i10 = ik(e10, a10);
    void 0 !== i10 && r10.push({ name: iN(a10, i10), penalty: 10 });
    let o10 = ik(e10);
    return void 0 !== o10 && r10.push({ name: "html" === a10 ? "html" : `${a10}:nth-child(${o10})`, penalty: 50 }), r10;
  }, iE = (e10, t10 = rC, r10 = []) => {
    if (t10 <= 0) return [];
    if (0 === e10.length) return [r10];
    let n10 = [];
    for (let a10 of e10[0]) {
      let i10 = t10 - n10.length;
      if (i10 <= 0) break;
      n10.push(...iE(e10.slice(1), i10, [...r10, a10]));
    }
    return n10;
  }, iM = (e10, t10) => 1 === t10.querySelectorAll(iy(e10)).length, iC = (e10, t10) => {
    let r10 = e10, n10 = [];
    for (; r10 && r10 !== t10; ) {
      let e11 = r10.tagName.toLowerCase(), t11 = ik(r10, e11);
      if (void 0 === t11) return;
      n10.push({ name: iN(e11, t11), penalty: 10 }), r10 = r10.parentElement;
    }
    return iM(n10, t10) ? n10 : void 0;
  }, iT = /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i, iA = /:r[a-z0-9]+:/i, iz = /_r_[a-z0-9]+_(?:$|-)/i, i$ = /«r[a-z0-9]+»/i, iR = /^(?:downshift-\d+(?:-|$)|headlessui-[a-z-]+-\d+(?:-|$)|mui-\d+(?:-|$)|radix-\d+(?:-|$)|react-aria-\d+(?:-|$)|react-select-\d+(?:-|$))/i, iO = /^ember\d+$/i, ij = /^\d+$/, iP = (e10) => e10.length > 0 && e10.length <= 120 && !iA.test(e10) && !iT.test(e10) && !iz.test(e10) && !i$.test(e10) && !iR.test(e10) && !iO.test(e10) && !ij.test(e10), iF = /* @__PURE__ */ new Set(["data-testid", "data-test-id", "data-test", "data-cy", "data-qa", "aria-label", "href", "src", "role", "name", "title", "alt"]), iL = /* @__PURE__ */ new Set(["button", "link", "checkbox", "radio", "switch", "tab", "menuitem", "option", "textbox", "combobox", "slider", "spinbutton"]), iI = (e10) => e10.ownerDocument.body ?? e10.ownerDocument.documentElement, iD = (e10, t10) => iF.has(e10) && t10.length > 0 && t10.length <= 120 && ("role" !== e10 || t10.split(/\s+/).some((e11) => iL.has(e11))), iB = (e10, t10) => {
    try {
      let r10 = e10.getRootNode(), n10 = (nd(r10) ? r10 : e10.ownerDocument).querySelectorAll(t10);
      return 1 === n10.length && n10[0] === e10;
    } catch {
      return false;
    }
  }, iU = (e10) => {
    let t10 = e10.getAttribute("id"), r10 = null;
    if (t10) {
      let n10 = `#${CSS.escape(t10)}`;
      if (iB(e10, n10)) {
        if (iP(t10)) return { selector: n10, isSemantic: true };
        r10 = n10;
      }
    }
    for (let t11 of iF) {
      let r11 = e10.getAttribute(t11);
      if (!r11 || !iD(t11, r11)) continue;
      let n10 = `[${t11}=${JSON.stringify(r11)}]`;
      if (iB(e10, n10)) return { selector: n10, isSemantic: true };
      let a10 = `${e10.tagName.toLowerCase()}${n10}`;
      if (iB(e10, a10)) return { selector: a10, isSemantic: true };
    }
    return r10 ? { selector: r10, isSemantic: false } : null;
  }, iW = (e10) => {
    let t10 = ns(e10);
    if (t10) return { selector: t10.getSelector(), isSemantic: true };
    let r10 = iU(e10);
    if (!r10?.isSemantic) return null;
    let n10 = e10.getRootNode();
    if (nd(n10)) {
      let e11 = iW(n10.host);
      return e11 ? { selector: `${e11.selector} >>> ${r10.selector}`, isSemantic: true } : null;
    }
    let a10 = rF(e10.ownerDocument.defaultView);
    if (!a10) return r10;
    let i10 = iW(a10);
    return i10 ? { selector: `${i10.selector} >>iframe>> ${r10.selector}`, isSemantic: true } : null;
  }, iH = (e10) => {
    let t10 = ns(e10);
    if (t10) return { selector: t10.getSelector(), isSemantic: true };
    let r10 = ((e11) => {
      let t11 = iU(e11);
      if (t11) return t11;
      try {
        let t12 = ((e12, t13, r11) => {
          let n11;
          if (e12.nodeType !== Node.ELEMENT_NODE) throw new np();
          if ("html" === e12.tagName.toLowerCase()) return "html";
          let a11 = nd(n11 = e12.getRootNode()) ? n11 : ng(t13) ? t13 : t13.ownerDocument, i11 = Date.now(), o10 = [], l10 = e12, s10 = 0, c10;
          for (; l10 && l10 !== a11 && !c10; ) if (o10.push(iS(l10, r11)), l10 = l10.parentElement, ++s10 >= 3) {
            let t14 = iE(o10);
            for (let r12 of (t14.sort(i_), t14)) {
              if (Date.now() - i11 > 200) {
                let t15 = iC(e12, a11);
                if (!t15) throw new nh(200);
                return iy(t15);
              }
              if (iM(r12, a11)) {
                c10 = r12;
                break;
              }
            }
          }
          if (!c10 && s10 < 3) {
            let e13 = iE(o10);
            for (let t14 of (e13.sort(i_), e13)) {
              if (Date.now() - i11 > 200) break;
              if (iM(t14, a11)) {
                c10 = t14;
                break;
              }
            }
          }
          if (!c10) throw new nm();
          return iy(c10);
        })(e11, iI(e11), (e12, t13) => {
          let r11, n11;
          return r11 = iw.has(e12) || e12.startsWith("data-") && ib(e12), n11 = ib(t13) && t13.length < 100 || t13.startsWith("#") && ib(t13.slice(1)), r11 && n11 || iD(e12, t13);
        });
        if (t12) return { selector: t12, isSemantic: false };
      } catch {
      }
      return { selector: ((e12) => {
        let t12 = [], r11 = e12.getRootNode(), n11 = nd(r11) ? r11 : iI(e12), a11 = e12;
        for (; a11; ) {
          let e13 = a11.getAttribute("id");
          if (e13) {
            t12.unshift(`#${CSS.escape(e13)}`);
            break;
          }
          let r12 = a11.parentNode;
          if (!r12) {
            t12.unshift(a11.tagName.toLowerCase());
            break;
          }
          let i11 = Array.from(r12.children).indexOf(a11) + 1;
          if (t12.unshift(`${a11.tagName.toLowerCase()}:nth-child(${i11})`), r12 === n11) {
            rj(n11) && t12.unshift(n11.tagName.toLowerCase());
            break;
          }
          a11 = rj(r12) ? r12 : null;
        }
        return t12.join(" > ");
      })(e11), isSemantic: false };
    })(e10), n10 = e10.getRootNode();
    if (nd(n10)) {
      let e11 = iH(n10.host);
      return { selector: `${e11.selector} >>> ${r10.selector}`, isSemantic: e11.isSemantic && r10.isSemantic };
    }
    let a10 = rF(e10.ownerDocument.defaultView);
    if (!a10) return r10;
    let i10 = iH(a10);
    return { selector: `${i10.selector} >>iframe>> ${r10.selector}`, isSemantic: i10.isSemantic && r10.isSemantic };
  }, iV = [...Array.from(iF).filter((e10) => "role" !== e10).map((e10) => `[${e10}]`), ...Array.from(iL).map((e10) => `[role~="${e10}"]`)].join(","), iq = (e10) => {
    let t10 = e10.getAttribute("id");
    return !!(t10 && iP(t10) || e10.matches(iV));
  }, iK = (e10) => iq(e10) || e10.matches("button,input,select,textarea"), iG = (e10) => {
    let { body: t10, documentElement: r10 } = e10.ownerDocument;
    if (e10 === t10 || e10 === r10) return true;
    if (!t10) return false;
    let n10 = t10.getElementsByTagName("*").length;
    return 0 !== n10 && e10.getElementsByTagName("*").length / n10 >= 0.5;
  }, iX = (e10, t10) => {
    let r10 = e10.getRootNode(), n10 = e10;
    for (; n10; ) {
      let a10 = iK(n10), i10 = a10 && iG(n10);
      if (a10) {
        if (i10 && n10 !== e10) return e10;
        if (!t10 || t10(n10) || i10 || !iq(n10) && n10 === e10) return n10;
      }
      let o10 = nv(n10);
      n10 = o10?.getRootNode() === r10 ? o10 : null;
    }
    return e10;
  }, iJ = [/\/assets\/[^/?#]+-[a-z0-9_-]{6,}\.(?:c|m)?js(?:[?#]|$)/, /\/_next\/static\/.*\.(?:c|m)?js(?:[?#]|$)/, /\/static\/chunks\/.*\.(?:c|m)?js(?:[?#]|$)/], iY = (e10) => {
    if (!e10) return false;
    let t10 = `/${a6(e10)}`.toLowerCase();
    return iJ.some((e11) => e11.test(t10));
  }, iZ = (e10 = false) => {
    let t10 = new URL(document.baseURI);
    return Array.from(document.scripts).some((r10) => {
      if (!r10.src) return false;
      try {
        let n10 = new URL(r10.src, t10);
        return (e10 || n10.origin === t10.origin) && n10.pathname.includes("/_next/static/");
      } catch {
        return false;
      }
    });
  }, iQ = (e10) => (e10 && (t = void 0), t ??= "u" > typeof document && !!(document.getElementById("__NEXT_DATA__") || document.querySelector("nextjs-portal") || iZ() || Array.from(document.scripts).some((e11) => e11.textContent?.includes("self.__next_f.push")) && iZ(true))), i0 = (e10) => e10.map((e11) => `
  in ${e11}`).join(""), i1 = ["about://React/", "rsc://React/"], i2 = (e10) => i1.some((t10) => e10.startsWith(t10)), i5 = (e10) => {
    for (let t10 of i1) {
      if (!e10.startsWith(t10)) continue;
      let r10 = e10.indexOf("/", t10.length);
      if (-1 === r10) continue;
      let n10 = r10 + 1, a10 = e10.lastIndexOf("?");
      return a9(a10 > n10 ? e10.slice(n10, a10) : e10.slice(n10));
    }
    return e10;
  }, i4 = (e10) => {
    if ("object" != typeof e10 || !e10 || !("status" in e10) || "fulfilled" !== e10.status || !("value" in e10) || "object" != typeof e10.value || null === e10.value || !("originalStackFrame" in e10.value)) return null;
    let t10 = e10.value.originalStackFrame;
    return "object" == typeof t10 && t10 && "file" in t10 && "string" == typeof t10.file && t10.file && (!("ignored" in t10) || !t10.ignored) ? { file: t10.file, line1: "line1" in t10 && "number" == typeof t10.line1 ? t10.line1 : null, column1: "column1" in t10 && "number" == typeof t10.column1 ? t10.column1 : null } : null;
  }, i3 = async (e10, t10) => {
    let n10 = [], a10 = [];
    for (let t11 = 0; t11 < e10.length; t11++) {
      let r10 = e10[t11];
      r10.isServer && r10.fileName && (n10.push(t11), a10.push({ file: i5(r10.fileName), methodName: r10.functionName ?? "<unknown>", line1: r10.lineNumber ?? null, column1: r10.columnNumber ?? null, arguments: [] }));
    }
    if (0 === a10.length) return e10;
    let i10 = new AbortController(), o10 = setTimeout(() => i10.abort(), 5e3), l10 = () => i10.abort();
    t10?.aborted && i10.abort(), t10?.addEventListener("abort", l10);
    try {
      let t11 = await fetch(`${(() => {
        if (void 0 !== r) return r;
        let e11 = document.querySelector('script[src*="/_next/"]')?.src, t12 = e11 ? new URL(e11).pathname : "", n11 = t12.indexOf("/_next/");
        return r = n11 > 0 ? t12.slice(0, n11) : "";
      })()}/__nextjs_original-stack-frames`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ frames: a10, isServer: true, isEdgeServer: false, isAppDirectory: true }), priority: "high", signal: i10.signal });
      if (!t11.ok) return e10;
      let o11 = await t11.json();
      if (!Array.isArray(o11)) return e10;
      let l11 = [...e10];
      for (let t12 = 0; t12 < n10.length; t12++) {
        let r10 = i4(o11[t12]);
        if (!r10) continue;
        let a11 = n10[t12];
        l11[a11] = { ...e10[a11], fileName: r10.file, lineNumber: r10.line1 ?? void 0, columnNumber: r10.column1 ?? void 0, isSymbolicated: true };
      }
      return l11;
    } catch {
      return e10;
    } finally {
      clearTimeout(o10), t10?.removeEventListener("abort", l10);
    }
  }, i7 = 0, i8 = [], i6 = async (e10, t10, r10 = rM, n10) => {
    if (!await (n10?.aborted ? Promise.resolve(false) : i7 < 3 ? (i7 += 1, Promise.resolve(true)) : new Promise((e11) => {
      let t11 = { abortSignal: n10, resolve: e11 };
      n10 && (t11.handleAbort = () => {
        let r11 = i8.indexOf(t11);
        -1 !== r11 && (i8.splice(r11, 1), e11(false));
      }, n10.addEventListener("abort", t11.handleAbort, { once: true })), i8.push(t11);
    }))) return t10;
    let a10 = new AbortController(), i10, o10 = new Promise((e11) => {
      i10 = setTimeout(() => {
        a10.abort(), e11(t10);
      }, r10);
    }), l10, s10 = new Promise((e11) => {
      n10 && (l10 = () => {
        a10.abort(), e11(t10);
      }, n10.aborted ? l10() : n10.addEventListener("abort", l10, { once: true }));
    });
    try {
      let t11 = e10(a10.signal);
      return t11.catch(() => {
      }), await Promise.race([t11, o10, s10]);
    } finally {
      clearTimeout(i10), l10 && n10?.removeEventListener("abort", l10), (() => {
        let e11 = i8.shift();
        if (e11) {
          e11.abortSignal && e11.handleAbort && e11.abortSignal.removeEventListener("abort", e11.handleAbort), e11.resolve(true);
          return;
        }
        --i7;
      })();
    }
  }, i9 = (e10) => e10.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), oe = (e10, t10) => {
    if (e10.length <= t10) return e10;
    let r10 = Math.max(0, t10 - 3), n10 = e10.slice(0, r10), a10 = n10.lastIndexOf("&");
    return `${a10 > n10.lastIndexOf(";") ? n10.slice(0, a10) : n10}...`.slice(0, t10);
  }, ot = (e10) => e10.startsWith("data-react-grab-"), or = (e10) => e10.replace(/\s+/g, " ").trim(), on = (e10) => !!("true" === e10.getAttribute("aria-hidden") || e10.hasAttribute("hidden")) || r$.has(e10.tagName.toLowerCase()), oa = (e10, t10, r10) => {
    if (e10.nodeType === Node.TEXT_NODE) {
      let n10 = or(e10.textContent ?? "");
      return n10 ? (t10.push(n10), r10 - n10.length) : r10;
    }
    if (!rj(e10) || on(e10)) return r10;
    for (let n10 of e10.childNodes) if ((r10 = oa(n10, t10, r10)) <= 0) break;
    return r10;
  }, oi = (e10, t10, r10) => `${e10}="${oe(i9(t10).replace(/"/g, "&quot;").replace(/\r/g, "&#13;").replace(/\n/g, "&#10;").replace(/\t/g, "&#9;"), r10)}"`, oo = (e10) => "class" === e10 || "className" === e10 || "style" === e10, ol = (e10) => 0 === e10.length ? "" : e10.length <= 2 ? e10.map((e11) => `<${nf(e11)} ...>`).join(`
  `) : `(${e10.length} elements)`, os = (e10) => {
    let t10 = ns(e10);
    if (t10) return t10.getPreview();
    let r10 = nf(e10), n10 = ((e11) => {
      let t11 = ((e12) => {
        let t12 = [];
        for (let r12 of rT) {
          if (t12.length >= 8) break;
          let n12 = e12.getAttribute(r12);
          if (!n12) continue;
          let a11 = "class" === r12 ? 15 : 120;
          t12.push(oi(r12, n12, a11));
        }
        return t12;
      })(e11).map((e12) => ` ${e12}`), r11 = [], n11 = [];
      for (let { name: t12, value: a11 } of e11.attributes) ot(t12) || rT.includes(t12) || oo(t12) || (rA.has(t12) ? r11.push(a11 ? ` ${oi(t12, a11, 120)}` : ` ${t12}`) : a11 && n11.push(` ${oi(t12, a11, 15)}`));
      return [...t11, ...r11, ...n11].slice(0, 8).join("");
    })(e10), a10 = ((e11, t11) => {
      if (on(e11)) return "";
      let r11 = ((e12) => {
        let t12 = [];
        for (let r12 of e12.childNodes) {
          if (r12.nodeType !== Node.TEXT_NODE) continue;
          let e13 = or(r12.textContent ?? "");
          e13 && t12.push(e13);
        }
        return t12.join(" ");
      })(e11);
      if (!rz.has(t11) || r11 && 0 === e11.children.length) return r11;
      let n11 = [];
      return oa(e11, n11, 100), n11.join(" ");
    })(e10, r10), i10 = [], o10 = [], l10 = false;
    for (let t11 of e10.childNodes) t11.nodeType !== Node.COMMENT_NODE && (t11.nodeType === Node.TEXT_NODE ? t11.textContent && t11.textContent.trim().length > 0 && (l10 = true) : rj(t11) && (l10 ? o10.push(t11) : i10.push(t11)));
    let s10 = a10.length > 0 && rz.has(r10), c10 = "", d10 = ol(i10);
    d10 && !s10 && (c10 += `
  ${d10}`), a10 && (c10 += `
  ${oe(i9(a10), 100)}`);
    let u6 = ol(o10);
    return u6 && !s10 && (c10 += `
  ${u6}`), c10.length > 0 ? `<${r10}${n10}>${c10}
</${r10}>` : `<${r10}${n10} />`;
  }, oc = /* @__PURE__ */ new Set(["_", "$", "motion.", "styled.", "chakra.", "ark.", "Primitive.", "Slot."]), od = new Set("AppRouter.AppRouterAnnouncer.AppDevOverlay.AppDevOverlayErrorBoundary.ClientPageRoot.ClientSegmentRoot.DevRootHTTPAccessFallbackBoundary.ErrorBoundary.ErrorBoundaryHandler.GracefulDegradeBoundary.HTTPAccessErrorFallback.HTTPAccessFallbackBoundary.HTTPAccessFallbackErrorBoundary.HandleRedirect.Head.HistoryUpdater.HotReload.InnerLayoutRouter.InnerScrollAndFocusHandler.InnerScrollAndFocusHandlerOld.InnerScrollAndMaybeFocusHandler.InnerScrollHandlerNew.LinkComponent.LoadableComponent.LoadingBoundary.LoadingBoundaryProvider.NotAllowedRootHTTPFallbackError.OfflineProvider.OuterLayoutRouter.RedirectBoundary.RedirectErrorBoundary.RenderFromTemplateContext.RenderValidationBoundaryAtThisLevel.ReplaySsrOnlyErrors.RootErrorBoundary.RootLevelDevOverlayElement.Router.ScrollAndFocusHandler.ScrollAndMaybeFocusHandler.SegmentBoundaryTrigger.SegmentBoundaryTriggerNode.SegmentStateProvider.SegmentTrieNode.SegmentViewNode.SegmentViewStateNode.ServerRoot.body.html".split(".")), ou = /* @__PURE__ */ new Set(["<anonymous>", "<unknown>", "Anonymous", "Unknown"]), op = /* @__PURE__ */ new Set(["Suspense", "Fragment", "StrictMode", "Profiler", "SuspenseList"]), oh = /* @__PURE__ */ new Set(["MotionDOMComponent", "Slot", "SlotClone"]), om = [".Consumer", ".Context", ".Provider", ".Slot", ".SlotClone", ".Slottable", "ProviderProvider"], of = (e10, t10 = false) => {
    if (ou.has(e10) || t10 && od.has(e10) || op.has(e10) || oh.has(e10)) return true;
    for (let t11 of om) if (e10.endsWith(t11)) return true;
    for (let t11 of oc) if (e10.startsWith(t11)) return true;
    return false;
  }, og = (e10, t10, r10) => {
    e10.get(t10) === r10 && e10.delete(t10);
  }, ov = async (e10, t10) => {
    for (let t11 = 0; t11 < 2; t11 += 1) {
      let r10 = e10();
      if (!r10) break;
      let n10 = await r10.valuePromise;
      if (r10.isCurrent() || 1 === t11) return n10;
    }
    return t10();
  }, ow = (e10, t10) => !(e10.length <= 1 || of(e10, t10) || e10[0] !== e10[0].toUpperCase()), ob = (e10, t10) => e10 && ow(e10, t10) ? e10 : null, oy = (e10) => !((e11) => {
    if (!e11) return false;
    let t10 = `/${a6(e11)}/`.toLowerCase();
    return rE.some((e12) => t10.includes(e12));
  })(e10) && !iY(e10), ox = (e10) => {
    if (!r5()) return e10;
    let t10 = e10;
    for (; t10?.ownerDocument === e10.ownerDocument; ) {
      if (nc(t10)) return t10;
      if (t10.parentElement) {
        t10 = t10.parentElement;
        continue;
      }
      let e11 = t10.getRootNode();
      t10 = nd(e11) ? e11.host : null;
    }
    return e10;
  }, o_ = (e10) => {
    let t10 = e10.return?.child ?? null;
    for (; t10; ) {
      if (t10 !== e10 && null !== t10.key) return true;
      t10 = t10.sibling;
    }
    return false;
  }, ok = /* @__PURE__ */ new WeakMap(), oN = /* @__PURE__ */ new WeakMap(), oS = (e10) => {
    let t10, r10, n10, a10, i10 = ox(e10), o10 = nc(i10);
    if (!o10) return null;
    let l10 = r3(o10);
    return { element: i10, fiber: l10, revision: (t10 = l10.alternate, r10 = l10._debugOwner, n10 = l10._debugSource, a10 = l10._debugStack, { matches: (e11) => (e11 === l10 || e11 === t10 || e11.alternate === l10) && e11._debugOwner === r10 && e11._debugSource === n10 && e11._debugStack === a10 }) };
  }, oE = (e10, t10) => {
    let r10 = oS(e10);
    return !!(r10 && r10.element === t10.element && t10.revision.matches(r10.fiber));
  }, oM = (e10) => (t10) => fetch(t10, { signal: e10, priority: "high" }), oC = async (e10) => {
    let [t10, r10] = await Promise.all([((e11) => {
      let t11, r11 = oN.get(e11.element);
      if (r11?.revision.matches(e11.fiber)) return r11.promise;
      let n10 = new AbortController(), a10 = (t11 = e11.fiber, i6(async (e12) => {
        try {
          let r12, n11 = await aK(t11, true, oM(e12));
          if (!n11?.fileName) return null;
          let a11 = iQ();
          return { filePath: a6(n11.fileName), lineNumber: n11.lineNumber ?? null, columnNumber: n11.columnNumber ?? null, componentName: ob(n11.functionName, a11) ?? (r12 = t11._debugOwner, r12 && rY(r12) ? ob(r2(r12.type), a11) : null), origin: iv(n11.fileName).origin };
        } catch {
          return null;
        }
      }, null, void 0, n10.signal));
      if (!oE(e11.element, e11)) return a10;
      let i10 = { controller: n10, promise: a10, revision: e11.revision };
      return oN.set(e11.element, i10), r11?.controller.abort(), i10.promise.then((t12) => {
        t12 || og(oN, e11.element, i10);
      }), i10.promise;
    })(e10), ((e11) => {
      let t11;
      if (!r5()) return Promise.resolve([]);
      let r11 = ok.get(e11.element);
      if (r11?.revision.matches(e11.fiber)) return r11.promise;
      let n10 = new AbortController(), a10 = (t11 = e11.fiber, i6(async (e12) => {
        try {
          let r12 = await aV(t11, true, oM(e12));
          return iQ() ? await i3(((e13, t12) => {
            let r13;
            if (!t12.some((e14) => e14.isServer && !e14.fileName && e14.functionName)) return t12;
            let n11 = (r13 = /* @__PURE__ */ new Map(), rZ(e13, (e14) => {
              if (!aC(e14)) return false;
              let t13 = aI(e14._debugStack.stack);
              if (!t13) return false;
              for (let e15 of ae(t13)) !e15.functionName || !e15.fileName || i2(e15.fileName) && (r13.has(e15.functionName) || r13.set(e15.functionName, { ...e15, isServer: true }));
              return false;
            }, true), r13);
            return 0 === n11.size ? t12 : t12.map((e14) => {
              if (!e14.isServer || e14.fileName || !e14.functionName) return e14;
              let t13 = n11.get(e14.functionName);
              return t13 ? { ...e14, fileName: t13.fileName, lineNumber: t13.lineNumber, columnNumber: t13.columnNumber } : e14;
            });
          })(t11, r12), e12) : r12;
        } catch {
          return null;
        }
      }, null, void 0, n10.signal));
      if (!oE(e11.element, e11)) return a10;
      let i10 = { controller: n10, promise: a10, revision: e11.revision };
      return ok.set(e11.element, i10), r11?.controller.abort(), i10.promise.then((t12) => {
        null === t12 && og(ok, e11.element, i10);
      }), i10.promise;
    })(e10)]);
    return { fiber: e10.fiber, fiberSource: t10, stack: r10 };
  }, oT = (e10, t10) => {
    let r10 = iQ(), n10 = (e11, t11) => {
      let n11 = e11[0] ?? null;
      return n11?.fileName ? { filePath: a6(n11.fileName), lineNumber: n11.lineNumber ?? null, columnNumber: n11.columnNumber ?? null, componentName: ob(n11.functionName, r10), origin: t11 } : null;
    }, a10 = t10.filter((e11) => "app" === iv(e11.fileName).origin), i10 = a10.filter((e11) => oy(e11.fileName));
    return e10?.origin === "app" && oy(e10.filePath) ? e10 : n10(i10, "app") || (e10?.origin !== "app" || iY(e10.filePath) ? n10(a10, "app") || (e10?.origin === "app" || e10?.origin === "package" ? e10 : n10(t10.filter((e11) => "package" === iv(e11.fileName).origin), "package")) : e10);
  }, oA = (e10, t10, r10 = () => true) => {
    if (!r5()) return [];
    let n10 = nc(e10);
    if (!n10) return [];
    let a10 = iQ(), i10 = [];
    return rZ(r3(n10), (e11) => {
      if (i10.length >= t10) return true;
      if (rY(e11)) {
        let t11 = r2(e11.type);
        t11 && ((e12, t12 = false) => !(!e12 || of(e12, t12)))(t11, a10) && r10(t11) && i10.push(t11);
      }
      return false;
    }, true), i10;
  }, oz = ["/src/app/", "/src/pages/", "/app/", "/pages/"], o$ = (e10, t10) => {
    let r10 = ((e11, t11) => {
      let r11 = a6(e11);
      if (!t11 || !r11.startsWith("/")) return r11;
      for (let e12 of oz) {
        let t12 = r11.indexOf(e12);
        if (-1 !== t12) return `/./${r11.slice(t12 + 1)}`;
      }
      return r11;
    })(e10.filePath, t10), n10 = t10 && e10.lineNumber ? `${r10}:${e10.lineNumber}${e10.columnNumber ? `:${e10.columnNumber}` : ""}` : r10;
    return e10.componentName ? `
  in ${e10.componentName} (at ${n10})` : `
  in ${n10}`;
  }, oR = { isAppSource: false, consumesBudget: false }, oO = (e10, t10, r10, n10) => {
    let a10 = t10.packageName, i10 = "app" === t10.origin ? e10.fileName : null;
    if (e10.isServer && !i10 && (r10 || !e10.functionName)) {
      let e11 = a10 ? `${a10} at Server` : "at Server";
      return { text: `
  in ${r10 ?? "<anonymous>"} (${e11})`, ...oR };
    }
    return !i10 && r10 ? { text: a10 ? `
  in ${r10} (${a10})` : `
  in ${r10}`, ...oR } : a10 ? { text: `
  in ${a10}`, ...oR } : i10 ? { text: o$({ componentName: r10, filePath: i10, lineNumber: e10.lineNumber ?? null, columnNumber: e10.columnNumber ?? null }, n10), isAppSource: true, consumesBudget: oy(i10) } : null;
  }, oj = (e10, t10, r10) => {
    var n10, a10, i10;
    let o10, l10, s10 = ((e11, t11, r11) => {
      let n11, a11 = r11.stack ?? [], i11 = (n11 = oT(r11.fiberSource, a11), n11?.origin === "app" ? n11 : null), o11 = a7(t11.maxLines), l11 = ((e12, t12 = {}, r12 = null) => {
        let n12 = a7(t12.maxLines), a12 = Math.max(n12, 20), i12 = iQ(), o12 = [], l12 = /* @__PURE__ */ new Set(), s12 = null, c12 = false, d11 = false, u6 = false, p2 = 0, h2 = (e13) => {
          e13 && l12.add(e13);
        };
        if (r12) {
          let e13 = "app" === r12.origin && oy(r12.filePath);
          d11 = e13, e13 && (p2 += 1), h2(r12.componentName), o12.push(o$(r12, i12));
        }
        for (let t13 of e12) {
          if (!n12 || o12.length >= a12) break;
          let e13 = iv(t13.fileName), l13 = ob(t13.functionName, i12), m2 = e13.packageName ? `${e13.packageName}:${l13 ?? ""}:${t13.isServer ? "server" : "client"}` : null;
          if (m2 && m2 === s12) continue;
          if (!c12 && l13 && l13 === r12?.componentName) {
            c12 = true;
            continue;
          }
          let f2 = oO(t13, e13, l13, i12);
          null !== f2 && (f2.consumesBudget && p2 >= n12 || f2.text !== o12[o12.length - 1] && (f2.isAppSource && f2.consumesBudget && (d11 = true), f2.consumesBudget && (p2 += 1, u6 = true), h2(l13), o12.push(f2.text), s12 = m2));
        }
        return { text: o12.join(""), shouldAppendSelectorHint: !d11, hasBudgetedStackFrame: u6, renderedComponentNames: l12, remainingHardLineCapacity: Math.max(0, a12 - o12.length) };
      })(a11, t11, i11);
      if (l11.text) return l11.hasBudgetedStackFrame ? l11 : ((e12, t12, r12) => {
        let n12 = Math.min(r12, t12.remainingHardLineCapacity);
        if (0 === n12) return t12;
        let a12 = iQ(), i12 = oA(ox(e12), n12, (e13) => ow(e13, a12) && !t12.renderedComponentNames.has(e13));
        return 0 === i12.length ? t12 : { ...t12, text: `${t12.text}${i0(i12)}`, remainingHardLineCapacity: t12.remainingHardLineCapacity - i12.length };
      })(e11, l11, o11);
      let s11 = oA(ox(e11), o11), c11 = Math.max(o11, 20);
      return { text: i0(s11), shouldAppendSelectorHint: true, hasBudgetedStackFrame: false, renderedComponentNames: new Set(s11), remainingHardLineCapacity: Math.max(0, c11 - s11.length) };
    })(e10, t10, r10), c10 = ox(e10), d10 = ((e11, t11) => {
      let r11, n11 = ((e12) => {
        if (!r5()) return null;
        let t12 = nc(ox(e12)), r12 = t12 ? r3(t12) : null, n12 = 0;
        for (; r12; ) {
          if (null !== r12.key && o_(r12)) return String(r12.key);
          if (rY(r12) && 2 === (n12 += 1)) break;
          r12 = r12.return;
        }
        return null;
      })(e11), a11 = null === n11 ? "" : `
  key: ${JSON.stringify(n11.length > 120 ? `${n11.slice(0, 120)}...` : n11)}`, i11 = t11.shouldAppendSelectorHint ? iH(iX(e11)) : ((e12) => {
        if (ns(e12)) return iW(e12);
        let t12 = null;
        return iX(e12, (e13) => {
          let r12 = iW(e13);
          return !!r12 && (t12 = r12, true);
        }), t12;
      })(e11), o11 = i11 && (r11 = t11.shouldAppendSelectorHint, r11 || i11.isSemantic) ? i11.selector : null, l11 = o11 ? `
  selector: ${o11}` : "";
      return { selector: o11, text: `${t11.text}${a11}${l11}` };
    })(c10, s10);
    return { ...(n10 = e10, a10 = r10, i10 = s10, o10 = a10.stack ?? [], l10 = oT(a10.fiberSource, o10), { componentName: oA(ox(n10), 1)[0] ?? null, fiber: a10.fiber, source: l10, stack: o10, stackContext: i10.text }), elementInfo: `${os(c10)}${d10.text}`, selector: d10.selector };
  };
  try {
    var oP = "u" > typeof window ? window : e.g;
    oP._sentryModuleMetadata = oP._sentryModuleMetadata || {}, oP._sentryModuleMetadata[new oP.Error().stack] = Object.assign({}, oP._sentryModuleMetadata[new oP.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let oF = new Map(["top", "right", "bottom", "left"].flatMap((e10) => [[`border-${e10}-style`, e10], [`border-${e10}-color`, e10]])), oL = null, oI = /* @__PURE__ */ new Map(), oD = (e10, t10) => {
    let r10 = oF.get(e10);
    if (!r10) return false;
    let n10 = t10.getPropertyValue(`border-${r10}-width`);
    return "0px" === n10 || "0" === n10;
  }, oB = async (e10) => {
    let t10 = await ((e11, t11 = {}) => {
      let r11, n11;
      return r11 = () => oj(e11, t11, { fiber: null, fiberSource: null, stack: [] }), n11 = async (r12) => oj(e11, t11, await oC(r12)), ov(() => {
        let t12 = oS(e11);
        return t12 ? { isCurrent: () => oE(e11, t12), valuePromise: n11(t12) } : null;
      }, r11);
    })(e10), r10 = os(e10), n10 = ((e11) => {
      if (ns(e11)?.supportsDomEditing === false) return "";
      let t11 = ((e12) => {
        let t12 = oI.get(e12);
        if (t12) return t12;
        let r12 = oL || ((oL = document.createElement("iframe")).style.cssText = "position:fixed;left:-9999px;width:0;height:0;border:none;visibility:hidden;", document.body.appendChild(oL), oL), n12 = r12.contentDocument, a11 = n12.createElement(e12);
        n12.body.appendChild(a11);
        let i11 = r12.contentWindow.getComputedStyle(a11), o10 = /* @__PURE__ */ new Map();
        for (let e13 of rO) {
          let t13 = i11.getPropertyValue(e13);
          t13 && o10.set(e13, t13);
        }
        return a11.remove(), oI.set(e12, o10), o10;
      })(e11.tagName.toLowerCase()), r11 = getComputedStyle(e11), n11 = [];
      for (let e12 of rO) {
        let a11 = r11.getPropertyValue(e12);
        a11 && a11 !== t11.get(e12) && (oD(e12, r11) || n11.push(`${e12}: ${a11};`));
      }
      let a10 = e11.getAttribute("class")?.trim(), i10 = n11.join(`
`);
      return a10 ? i10 ? `className: ${a10}

${i10}` : `className: ${a10}` : i10;
    })(e10);
    return { element: e10, snippet: t10.elementInfo, htmlPreview: r10, stackString: t10.stackContext, stack: t10.stack, componentName: t10.componentName, filePath: t10.source?.filePath ?? null, lineNumber: t10.source?.lineNumber ?? null, columnNumber: t10.source?.columnNumber ?? null, fiber: t10.fiber, selector: t10.selector, styles: n10 };
  };
  var oU = e.i(868770);
  try {
    var oW = "u" > typeof window ? window : e.g;
    oW._sentryModuleMetadata = oW._sentryModuleMetadata || {}, oW._sentryModuleMetadata[new oW.Error().stack] = Object.assign({}, oW._sentryModuleMetadata[new oW.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var oH = Object.defineProperty, oV = (e10, t10, r10) => {
    let n10;
    return (n10 = "symbol" != typeof t10 ? t10 + "" : t10) in e10 ? oH(e10, n10, { enumerable: true, configurable: true, writable: true, value: r10 }) : e10[n10] = r10;
  };
  Array.prototype.toSorted || Object.defineProperty(Array.prototype, "toSorted", { value: function(e10) {
    return [...this].sort(e10);
  }, writable: true, configurable: true });
  var oq = "u" > typeof window;
  function oK(e10, t10) {
    return t10 - e10;
  }
  var oG = (e10) => {
    let t10 = "", r10 = /* @__PURE__ */ new Map();
    for (let t11 of e10) {
      let { forget: e11, time: n11, aggregatedCount: a11, name: i11 } = t11;
      r10.has(a11) || r10.set(a11, []);
      let o10 = r10.get(a11);
      o10 && o10.push({ name: i11, forget: e11, time: null != n11 ? n11 : 0 });
    }
    let n10 = Array.from(r10.keys()).sort(oK), a10 = [], i10 = 0;
    for (let e11 of n10) {
      let t11 = r10.get(e11);
      if (!t11) continue;
      let n11 = (function(e12) {
        let t12 = e12[0].name, r11 = Math.min(4, e12.length);
        for (let n12 = 1; n12 < r11; n12++) t12 += `, ${e12[n12].name}`;
        return t12;
      })(t11), o10 = (function(e12) {
        let t12 = e12[0].time;
        for (let r11 = 1, n12 = e12.length; r11 < n12; r11++) t12 += e12[r11].time;
        return t12;
      })(t11), l10 = (function(e12) {
        for (let t12 = 0, r11 = e12.length; t12 < r11; t12++) if (e12[t12].forget) return true;
        return false;
      })(t11);
      i10 += o10, t11.length > 4 && (n11 += "\u2026"), e11 > 1 && (n11 += ` \xD7 ${e11}`), l10 && (n11 = `\u2728${n11}`), a10.push(n11);
    }
    return (t10 = a10.join(", ")).length ? (t10.length > 40 && (t10 = `${t10.slice(0, 40)}\u2026`), i10 >= 0.01 && (t10 += ` (${Number(i10.toFixed(2))}ms)`), t10) : null;
  };
  function oX(e10, t10) {
    return e10 === t10 || e10 != e10 && t10 != t10;
  }
  var oJ = () => oq ? (void 0 === window.reactScanIdCounter && (window.reactScanIdCounter = 0), `${++window.reactScanIdCounter}`) : "0", oY = (e10) => {
    let t10 = e10.createOscillator(), r10 = e10.createGain();
    t10.connect(r10), r10.connect(e10.destination);
    let n10 = [392, 600], a10 = 0.3 / n10.length;
    n10.forEach((r11, n11) => {
      t10.frequency.setValueAtTime(r11, e10.currentTime + n11 * a10);
    }), t10.type = "sine", r10.gain.setValueAtTime(0.12, e10.currentTime), r10.gain.setTargetAtTime(0, e10.currentTime + 0.21, 0.05), t10.start(), t10.stop(e10.currentTime + 0.3);
  }, oZ = re(({ size: e10 = 15, name: t10, fill: r10 = "currentColor", stroke: n10 = "currentColor", className: a10, externalURL: i10 = "", style: o10 }, l10) => {
    let s10 = Array.isArray(e10) ? e10[0] : e10, c10 = Array.isArray(e10) ? e10[1] || e10[0] : e10, d10 = `${i10}#${t10}`;
    return rx("svg", { ref: l10, width: `${s10}px`, height: `${c10}px`, fill: r10, stroke: n10, className: a10, style: { ...o10, minWidth: `${s10}px`, maxWidth: `${s10}px`, minHeight: `${c10}px`, maxHeight: `${c10}px` }, children: [rx("title", { children: t10 }), rx("use", { href: d10 })] });
  }), oQ = "react-scan-widget-settings-v2", o0 = "react-scan-widget-collapsed-v1", o1 = "react-scan-widget-last-view-v1", o2 = (e10 = /* @__PURE__ */ new Map(), t10 = null, r10) => ({ nextPart: e10, validators: t10, classGroupId: r10 }), o5 = [], o4 = (e10, t10, r10) => {
    if (0 == e10.length - t10) return r10.classGroupId;
    let n10 = e10[t10], a10 = r10.nextPart.get(n10);
    if (a10) {
      let r11 = o4(e10, t10 + 1, a10);
      if (r11) return r11;
    }
    let i10 = r10.validators;
    if (null === i10) return;
    let o10 = 0 === t10 ? e10.join("-") : e10.slice(t10).join("-"), l10 = i10.length;
    for (let e11 = 0; e11 < l10; e11++) {
      let t11 = i10[e11];
      if (t11.validator(o10)) return t11.classGroupId;
    }
  }, o3 = (e10, t10) => {
    let r10 = o2();
    for (let n10 in e10) o7(e10[n10], r10, n10, t10);
    return r10;
  }, o7 = (e10, t10, r10, n10) => {
    let a10 = e10.length;
    for (let i10 = 0; i10 < a10; i10++) o8(e10[i10], t10, r10, n10);
  }, o8 = (e10, t10, r10, n10) => {
    "string" == typeof e10 ? o6(e10, t10, r10) : "function" == typeof e10 ? o9(e10, t10, r10, n10) : le(e10, t10, r10, n10);
  }, o6 = (e10, t10, r10) => {
    ("" === e10 ? t10 : lt(t10, e10)).classGroupId = r10;
  }, o9 = (e10, t10, r10, n10) => {
    lr(e10) ? o7(e10(n10), t10, r10, n10) : (null === t10.validators && (t10.validators = []), t10.validators.push({ classGroupId: r10, validator: e10 }));
  }, le = (e10, t10, r10, n10) => {
    let a10 = Object.entries(e10), i10 = a10.length;
    for (let e11 = 0; e11 < i10; e11++) {
      let [i11, o10] = a10[e11];
      o7(o10, lt(t10, i11), r10, n10);
    }
  }, lt = (e10, t10) => {
    let r10 = e10, n10 = t10.split("-"), a10 = n10.length;
    for (let e11 = 0; e11 < a10; e11++) {
      let t11 = n10[e11], a11 = r10.nextPart.get(t11);
      a11 || (a11 = o2(), r10.nextPart.set(t11, a11)), r10 = a11;
    }
    return r10;
  }, lr = (e10) => "isThemeGetter" in e10 && true === e10.isThemeGetter, ln = [], la = (e10, t10, r10, n10, a10) => ({ modifiers: e10, hasImportantModifier: t10, baseClassName: r10, maybePostfixModifierPosition: n10, isExternal: a10 }), li = /\s+/, lo = (e10) => {
    let t10;
    if ("string" == typeof e10) return e10;
    let r10 = "";
    for (let n10 = 0; n10 < e10.length; n10++) e10[n10] && (t10 = lo(e10[n10])) && (r10 && (r10 += " "), r10 += t10);
    return r10;
  }, ll = [], ls = (e10) => {
    let t10 = (t11) => t11[e10] || ll;
    return t10.isThemeGetter = true, t10;
  }, lc = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ld = /^\((?:(\w[\w-]*):)?(.+)\)$/i, lu = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, lp = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lh = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, lm = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, lf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, lg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, lv = (e10) => lu.test(e10), lw = (e10) => !!e10 && !Number.isNaN(Number(e10)), lb = (e10) => !!e10 && Number.isInteger(Number(e10)), ly = (e10) => e10.endsWith("%") && lw(e10.slice(0, -1)), lx = (e10) => lp.test(e10), l_ = () => true, lk = (e10) => lh.test(e10) && !lm.test(e10), lN = () => false, lS = (e10) => lf.test(e10), lE = (e10) => lg.test(e10), lM = (e10) => !lT(e10) && !lF(e10), lC = (e10) => lV(e10, lX, lN), lT = (e10) => lc.test(e10), lA = (e10) => lV(e10, lJ, lk), lz = (e10) => lV(e10, lY, lw), l$ = (e10) => lV(e10, lQ, l_), lR = (e10) => lV(e10, lZ, lN), lO = (e10) => lV(e10, lK, lN), lj = (e10) => lV(e10, lG, lE), lP = (e10) => lV(e10, l0, lS), lF = (e10) => ld.test(e10), lL = (e10) => lq(e10, lJ), lI = (e10) => lq(e10, lZ), lD = (e10) => lq(e10, lK), lB = (e10) => lq(e10, lX), lU = (e10) => lq(e10, lG), lW = (e10) => lq(e10, l0, true), lH = (e10) => lq(e10, lQ, true), lV = (e10, t10, r10) => {
    let n10 = lc.exec(e10);
    return !!n10 && (n10[1] ? t10(n10[1]) : r10(n10[2]));
  }, lq = (e10, t10, r10 = false) => {
    let n10 = ld.exec(e10);
    return !!n10 && (n10[1] ? t10(n10[1]) : r10);
  }, lK = (e10) => "position" === e10 || "percentage" === e10, lG = (e10) => "image" === e10 || "url" === e10, lX = (e10) => "length" === e10 || "size" === e10 || "bg-size" === e10, lJ = (e10) => "length" === e10, lY = (e10) => "number" === e10, lZ = (e10) => "family-name" === e10, lQ = (e10) => "number" === e10 || "weight" === e10, l0 = (e10) => "shadow" === e10, l1 = (d = () => {
    let e10 = ls("color"), t10 = ls("font"), r10 = ls("text"), n10 = ls("font-weight"), a10 = ls("tracking"), i10 = ls("leading"), o10 = ls("breakpoint"), l10 = ls("container"), s10 = ls("spacing"), c10 = ls("radius"), d10 = ls("shadow"), u6 = ls("inset-shadow"), p2 = ls("text-shadow"), h2 = ls("drop-shadow"), m2 = ls("blur"), f2 = ls("perspective"), g2 = ls("aspect"), v2 = ls("ease"), w2 = ls("animate"), b2 = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], y2 = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"], x2 = () => [...y2(), lF, lT], _2 = () => ["auto", "hidden", "clip", "visible", "scroll"], k2 = () => ["auto", "contain", "none"], N2 = () => [lF, lT, s10], S2 = () => [lv, "full", "auto", ...N2()], E2 = () => [lb, "none", "subgrid", lF, lT], M2 = () => ["auto", { span: ["full", lb, lF, lT] }, lb, lF, lT], C2 = () => [lb, "auto", lF, lT], T2 = () => ["auto", "min", "max", "fr", lF, lT], A2 = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], z2 = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $2 = () => ["auto", ...N2()], R2 = () => [lv, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N2()], O2 = () => [lv, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...N2()], j2 = () => [lv, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...N2()], P2 = () => [e10, lF, lT], F2 = () => [...y2(), lD, lO, { position: [lF, lT] }], L2 = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }], I2 = () => ["auto", "cover", "contain", lB, lC, { size: [lF, lT] }], D2 = () => [ly, lL, lA], B2 = () => ["", "none", "full", c10, lF, lT], U2 = () => ["", lw, lL, lA], W2 = () => ["solid", "dashed", "dotted", "double"], H2 = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], V2 = () => [lw, ly, lD, lO], q2 = () => ["", "none", m2, lF, lT], K2 = () => ["none", lw, lF, lT], G2 = () => ["none", lw, lF, lT], X2 = () => [lw, lF, lT], J2 = () => [lv, "full", ...N2()];
    return { cacheSize: 500, theme: { animate: ["spin", "ping", "pulse", "bounce"], aspect: ["video"], blur: [lx], breakpoint: [lx], color: [l_], container: [lx], "drop-shadow": [lx], ease: ["in", "out", "in-out"], font: [lM], "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"], "inset-shadow": [lx], leading: ["none", "tight", "snug", "normal", "relaxed", "loose"], perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"], radius: [lx], shadow: [lx], spacing: ["px", lw], text: [lx], "text-shadow": [lx], tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"] }, classGroups: { aspect: [{ aspect: ["auto", "square", lv, lT, lF, g2] }], container: ["container"], columns: [{ columns: [lw, lT, lF, l10] }], "break-after": [{ "break-after": b2() }], "break-before": [{ "break-before": b2() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], sr: ["sr-only", "not-sr-only"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: x2() }], overflow: [{ overflow: _2() }], "overflow-x": [{ "overflow-x": _2() }], "overflow-y": [{ "overflow-y": _2() }], overscroll: [{ overscroll: k2() }], "overscroll-x": [{ "overscroll-x": k2() }], "overscroll-y": [{ "overscroll-y": k2() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: S2() }], "inset-x": [{ "inset-x": S2() }], "inset-y": [{ "inset-y": S2() }], start: [{ "inset-s": S2(), start: S2() }], end: [{ "inset-e": S2(), end: S2() }], "inset-bs": [{ "inset-bs": S2() }], "inset-be": [{ "inset-be": S2() }], top: [{ top: S2() }], right: [{ right: S2() }], bottom: [{ bottom: S2() }], left: [{ left: S2() }], visibility: ["visible", "invisible", "collapse"], z: [{ z: [lb, "auto", lF, lT] }], basis: [{ basis: [lv, "full", "auto", l10, ...N2()] }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }], flex: [{ flex: [lw, lv, "auto", "initial", "none", lT] }], grow: [{ grow: ["", lw, lF, lT] }], shrink: [{ shrink: ["", lw, lF, lT] }], order: [{ order: [lb, "first", "last", "none", lF, lT] }], "grid-cols": [{ "grid-cols": E2() }], "col-start-end": [{ col: M2() }], "col-start": [{ "col-start": C2() }], "col-end": [{ "col-end": C2() }], "grid-rows": [{ "grid-rows": E2() }], "row-start-end": [{ row: M2() }], "row-start": [{ "row-start": C2() }], "row-end": [{ "row-end": C2() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": T2() }], "auto-rows": [{ "auto-rows": T2() }], gap: [{ gap: N2() }], "gap-x": [{ "gap-x": N2() }], "gap-y": [{ "gap-y": N2() }], "justify-content": [{ justify: [...A2(), "normal"] }], "justify-items": [{ "justify-items": [...z2(), "normal"] }], "justify-self": [{ "justify-self": ["auto", ...z2()] }], "align-content": [{ content: ["normal", ...A2()] }], "align-items": [{ items: [...z2(), { baseline: ["", "last"] }] }], "align-self": [{ self: ["auto", ...z2(), { baseline: ["", "last"] }] }], "place-content": [{ "place-content": A2() }], "place-items": [{ "place-items": [...z2(), "baseline"] }], "place-self": [{ "place-self": ["auto", ...z2()] }], p: [{ p: N2() }], px: [{ px: N2() }], py: [{ py: N2() }], ps: [{ ps: N2() }], pe: [{ pe: N2() }], pbs: [{ pbs: N2() }], pbe: [{ pbe: N2() }], pt: [{ pt: N2() }], pr: [{ pr: N2() }], pb: [{ pb: N2() }], pl: [{ pl: N2() }], m: [{ m: $2() }], mx: [{ mx: $2() }], my: [{ my: $2() }], ms: [{ ms: $2() }], me: [{ me: $2() }], mbs: [{ mbs: $2() }], mbe: [{ mbe: $2() }], mt: [{ mt: $2() }], mr: [{ mr: $2() }], mb: [{ mb: $2() }], ml: [{ ml: $2() }], "space-x": [{ "space-x": N2() }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": N2() }], "space-y-reverse": ["space-y-reverse"], size: [{ size: R2() }], "inline-size": [{ inline: ["auto", ...O2()] }], "min-inline-size": [{ "min-inline": ["auto", ...O2()] }], "max-inline-size": [{ "max-inline": ["none", ...O2()] }], "block-size": [{ block: ["auto", ...j2()] }], "min-block-size": [{ "min-block": ["auto", ...j2()] }], "max-block-size": [{ "max-block": ["none", ...j2()] }], w: [{ w: [l10, "screen", ...R2()] }], "min-w": [{ "min-w": [l10, "screen", "none", ...R2()] }], "max-w": [{ "max-w": [l10, "screen", "none", "prose", { screen: [o10] }, ...R2()] }], h: [{ h: ["screen", "lh", ...R2()] }], "min-h": [{ "min-h": ["screen", "lh", "none", ...R2()] }], "max-h": [{ "max-h": ["screen", "lh", ...R2()] }], "font-size": [{ text: ["base", r10, lL, lA] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: [n10, lH, l$] }], "font-stretch": [{ "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ly, lT] }], "font-family": [{ font: [lI, lR, t10] }], "font-features": [{ "font-features": [lT] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: [a10, lF, lT] }], "line-clamp": [{ "line-clamp": [lw, "none", lF, lz] }], leading: [{ leading: [i10, ...N2()] }], "list-image": [{ "list-image": ["none", lF, lT] }], "list-style-position": [{ list: ["inside", "outside"] }], "list-style-type": [{ list: ["disc", "decimal", "none", lF, lT] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "placeholder-color": [{ placeholder: P2() }], "text-color": [{ text: P2() }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...W2(), "wavy"] }], "text-decoration-thickness": [{ decoration: [lw, "from-font", "auto", lF, lA] }], "text-decoration-color": [{ decoration: P2() }], "underline-offset": [{ "underline-offset": [lw, "auto", lF, lT] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: N2() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", lF, lT] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], wrap: [{ wrap: ["break-word", "anywhere", "normal"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", lF, lT] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: F2() }], "bg-repeat": [{ bg: L2() }], "bg-size": [{ bg: I2() }], "bg-image": [{ bg: ["none", { linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, lb, lF, lT], radial: ["", lF, lT], conic: [lb, lF, lT] }, lU, lj] }], "bg-color": [{ bg: P2() }], "gradient-from-pos": [{ from: D2() }], "gradient-via-pos": [{ via: D2() }], "gradient-to-pos": [{ to: D2() }], "gradient-from": [{ from: P2() }], "gradient-via": [{ via: P2() }], "gradient-to": [{ to: P2() }], rounded: [{ rounded: B2() }], "rounded-s": [{ "rounded-s": B2() }], "rounded-e": [{ "rounded-e": B2() }], "rounded-t": [{ "rounded-t": B2() }], "rounded-r": [{ "rounded-r": B2() }], "rounded-b": [{ "rounded-b": B2() }], "rounded-l": [{ "rounded-l": B2() }], "rounded-ss": [{ "rounded-ss": B2() }], "rounded-se": [{ "rounded-se": B2() }], "rounded-ee": [{ "rounded-ee": B2() }], "rounded-es": [{ "rounded-es": B2() }], "rounded-tl": [{ "rounded-tl": B2() }], "rounded-tr": [{ "rounded-tr": B2() }], "rounded-br": [{ "rounded-br": B2() }], "rounded-bl": [{ "rounded-bl": B2() }], "border-w": [{ border: U2() }], "border-w-x": [{ "border-x": U2() }], "border-w-y": [{ "border-y": U2() }], "border-w-s": [{ "border-s": U2() }], "border-w-e": [{ "border-e": U2() }], "border-w-bs": [{ "border-bs": U2() }], "border-w-be": [{ "border-be": U2() }], "border-w-t": [{ "border-t": U2() }], "border-w-r": [{ "border-r": U2() }], "border-w-b": [{ "border-b": U2() }], "border-w-l": [{ "border-l": U2() }], "divide-x": [{ "divide-x": U2() }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": U2() }], "divide-y-reverse": ["divide-y-reverse"], "border-style": [{ border: [...W2(), "hidden", "none"] }], "divide-style": [{ divide: [...W2(), "hidden", "none"] }], "border-color": [{ border: P2() }], "border-color-x": [{ "border-x": P2() }], "border-color-y": [{ "border-y": P2() }], "border-color-s": [{ "border-s": P2() }], "border-color-e": [{ "border-e": P2() }], "border-color-bs": [{ "border-bs": P2() }], "border-color-be": [{ "border-be": P2() }], "border-color-t": [{ "border-t": P2() }], "border-color-r": [{ "border-r": P2() }], "border-color-b": [{ "border-b": P2() }], "border-color-l": [{ "border-l": P2() }], "divide-color": [{ divide: P2() }], "outline-style": [{ outline: [...W2(), "none", "hidden"] }], "outline-offset": [{ "outline-offset": [lw, lF, lT] }], "outline-w": [{ outline: ["", lw, lL, lA] }], "outline-color": [{ outline: P2() }], shadow: [{ shadow: ["", "none", d10, lW, lP] }], "shadow-color": [{ shadow: P2() }], "inset-shadow": [{ "inset-shadow": ["none", u6, lW, lP] }], "inset-shadow-color": [{ "inset-shadow": P2() }], "ring-w": [{ ring: U2() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: P2() }], "ring-offset-w": [{ "ring-offset": [lw, lA] }], "ring-offset-color": [{ "ring-offset": P2() }], "inset-ring-w": [{ "inset-ring": U2() }], "inset-ring-color": [{ "inset-ring": P2() }], "text-shadow": [{ "text-shadow": ["none", p2, lW, lP] }], "text-shadow-color": [{ "text-shadow": P2() }], opacity: [{ opacity: [lw, lF, lT] }], "mix-blend": [{ "mix-blend": [...H2(), "plus-darker", "plus-lighter"] }], "bg-blend": [{ "bg-blend": H2() }], "mask-clip": [{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] }, "mask-no-clip"], "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }], "mask-image-linear-pos": [{ "mask-linear": [lw] }], "mask-image-linear-from-pos": [{ "mask-linear-from": V2() }], "mask-image-linear-to-pos": [{ "mask-linear-to": V2() }], "mask-image-linear-from-color": [{ "mask-linear-from": P2() }], "mask-image-linear-to-color": [{ "mask-linear-to": P2() }], "mask-image-t-from-pos": [{ "mask-t-from": V2() }], "mask-image-t-to-pos": [{ "mask-t-to": V2() }], "mask-image-t-from-color": [{ "mask-t-from": P2() }], "mask-image-t-to-color": [{ "mask-t-to": P2() }], "mask-image-r-from-pos": [{ "mask-r-from": V2() }], "mask-image-r-to-pos": [{ "mask-r-to": V2() }], "mask-image-r-from-color": [{ "mask-r-from": P2() }], "mask-image-r-to-color": [{ "mask-r-to": P2() }], "mask-image-b-from-pos": [{ "mask-b-from": V2() }], "mask-image-b-to-pos": [{ "mask-b-to": V2() }], "mask-image-b-from-color": [{ "mask-b-from": P2() }], "mask-image-b-to-color": [{ "mask-b-to": P2() }], "mask-image-l-from-pos": [{ "mask-l-from": V2() }], "mask-image-l-to-pos": [{ "mask-l-to": V2() }], "mask-image-l-from-color": [{ "mask-l-from": P2() }], "mask-image-l-to-color": [{ "mask-l-to": P2() }], "mask-image-x-from-pos": [{ "mask-x-from": V2() }], "mask-image-x-to-pos": [{ "mask-x-to": V2() }], "mask-image-x-from-color": [{ "mask-x-from": P2() }], "mask-image-x-to-color": [{ "mask-x-to": P2() }], "mask-image-y-from-pos": [{ "mask-y-from": V2() }], "mask-image-y-to-pos": [{ "mask-y-to": V2() }], "mask-image-y-from-color": [{ "mask-y-from": P2() }], "mask-image-y-to-color": [{ "mask-y-to": P2() }], "mask-image-radial": [{ "mask-radial": [lF, lT] }], "mask-image-radial-from-pos": [{ "mask-radial-from": V2() }], "mask-image-radial-to-pos": [{ "mask-radial-to": V2() }], "mask-image-radial-from-color": [{ "mask-radial-from": P2() }], "mask-image-radial-to-color": [{ "mask-radial-to": P2() }], "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }], "mask-image-radial-size": [{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] }], "mask-image-radial-pos": [{ "mask-radial-at": y2() }], "mask-image-conic-pos": [{ "mask-conic": [lw] }], "mask-image-conic-from-pos": [{ "mask-conic-from": V2() }], "mask-image-conic-to-pos": [{ "mask-conic-to": V2() }], "mask-image-conic-from-color": [{ "mask-conic-from": P2() }], "mask-image-conic-to-color": [{ "mask-conic-to": P2() }], "mask-mode": [{ mask: ["alpha", "luminance", "match"] }], "mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }], "mask-position": [{ mask: F2() }], "mask-repeat": [{ mask: L2() }], "mask-size": [{ mask: I2() }], "mask-type": [{ "mask-type": ["alpha", "luminance"] }], "mask-image": [{ mask: ["none", lF, lT] }], filter: [{ filter: ["", "none", lF, lT] }], blur: [{ blur: q2() }], brightness: [{ brightness: [lw, lF, lT] }], contrast: [{ contrast: [lw, lF, lT] }], "drop-shadow": [{ "drop-shadow": ["", "none", h2, lW, lP] }], "drop-shadow-color": [{ "drop-shadow": P2() }], grayscale: [{ grayscale: ["", lw, lF, lT] }], "hue-rotate": [{ "hue-rotate": [lw, lF, lT] }], invert: [{ invert: ["", lw, lF, lT] }], saturate: [{ saturate: [lw, lF, lT] }], sepia: [{ sepia: ["", lw, lF, lT] }], "backdrop-filter": [{ "backdrop-filter": ["", "none", lF, lT] }], "backdrop-blur": [{ "backdrop-blur": q2() }], "backdrop-brightness": [{ "backdrop-brightness": [lw, lF, lT] }], "backdrop-contrast": [{ "backdrop-contrast": [lw, lF, lT] }], "backdrop-grayscale": [{ "backdrop-grayscale": ["", lw, lF, lT] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [lw, lF, lT] }], "backdrop-invert": [{ "backdrop-invert": ["", lw, lF, lT] }], "backdrop-opacity": [{ "backdrop-opacity": [lw, lF, lT] }], "backdrop-saturate": [{ "backdrop-saturate": [lw, lF, lT] }], "backdrop-sepia": [{ "backdrop-sepia": ["", lw, lF, lT] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": N2() }], "border-spacing-x": [{ "border-spacing-x": N2() }], "border-spacing-y": [{ "border-spacing-y": N2() }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", lF, lT] }], "transition-behavior": [{ transition: ["normal", "discrete"] }], duration: [{ duration: [lw, "initial", lF, lT] }], ease: [{ ease: ["linear", "initial", v2, lF, lT] }], delay: [{ delay: [lw, lF, lT] }], animate: [{ animate: ["none", w2, lF, lT] }], backface: [{ backface: ["hidden", "visible"] }], perspective: [{ perspective: [f2, lF, lT] }], "perspective-origin": [{ "perspective-origin": x2() }], rotate: [{ rotate: K2() }], "rotate-x": [{ "rotate-x": K2() }], "rotate-y": [{ "rotate-y": K2() }], "rotate-z": [{ "rotate-z": K2() }], scale: [{ scale: G2() }], "scale-x": [{ "scale-x": G2() }], "scale-y": [{ "scale-y": G2() }], "scale-z": [{ "scale-z": G2() }], "scale-3d": ["scale-3d"], skew: [{ skew: X2() }], "skew-x": [{ "skew-x": X2() }], "skew-y": [{ "skew-y": X2() }], transform: [{ transform: [lF, lT, "", "none", "gpu", "cpu"] }], "transform-origin": [{ origin: x2() }], "transform-style": [{ transform: ["3d", "flat"] }], translate: [{ translate: J2() }], "translate-x": [{ "translate-x": J2() }], "translate-y": [{ "translate-y": J2() }], "translate-z": [{ "translate-z": J2() }], "translate-none": ["translate-none"], accent: [{ accent: P2() }], appearance: [{ appearance: ["none", "auto"] }], "caret-color": [{ caret: P2() }], "color-scheme": [{ scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", lF, lT] }], "field-sizing": [{ "field-sizing": ["fixed", "content"] }], "pointer-events": [{ "pointer-events": ["auto", "none"] }], resize: [{ resize: ["none", "", "y", "x"] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": N2() }], "scroll-mx": [{ "scroll-mx": N2() }], "scroll-my": [{ "scroll-my": N2() }], "scroll-ms": [{ "scroll-ms": N2() }], "scroll-me": [{ "scroll-me": N2() }], "scroll-mbs": [{ "scroll-mbs": N2() }], "scroll-mbe": [{ "scroll-mbe": N2() }], "scroll-mt": [{ "scroll-mt": N2() }], "scroll-mr": [{ "scroll-mr": N2() }], "scroll-mb": [{ "scroll-mb": N2() }], "scroll-ml": [{ "scroll-ml": N2() }], "scroll-p": [{ "scroll-p": N2() }], "scroll-px": [{ "scroll-px": N2() }], "scroll-py": [{ "scroll-py": N2() }], "scroll-ps": [{ "scroll-ps": N2() }], "scroll-pe": [{ "scroll-pe": N2() }], "scroll-pbs": [{ "scroll-pbs": N2() }], "scroll-pbe": [{ "scroll-pbe": N2() }], "scroll-pt": [{ "scroll-pt": N2() }], "scroll-pr": [{ "scroll-pr": N2() }], "scroll-pb": [{ "scroll-pb": N2() }], "scroll-pl": [{ "scroll-pl": N2() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", lF, lT] }], fill: [{ fill: ["none", ...P2()] }], "stroke-w": [{ stroke: [lw, lL, lA, lz] }], stroke: [{ stroke: ["none", ...P2()] }], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], translate: ["translate-x", "translate-y", "translate-none"], "translate-none": ["translate", "translate-x", "translate-y", "translate-z"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] }, orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"] };
  }, l = (e10) => {
    let t10 = a(e10);
    if (t10) return t10;
    let r10 = ((e11, t11) => {
      let { parseClassName: r11, getClassGroupId: n10, getConflictingClassGroupIds: a10, sortModifiers: i10 } = t11, o10 = [], l10 = e11.trim().split(li), s10 = "";
      for (let e12 = l10.length - 1; e12 >= 0; e12 -= 1) {
        let t12 = l10[e12], { isExternal: c10, modifiers: d10, hasImportantModifier: u6, baseClassName: p2, maybePostfixModifierPosition: h2 } = r11(t12);
        if (c10) {
          s10 = t12 + (s10.length > 0 ? " " + s10 : s10);
          continue;
        }
        let m2 = !!h2, f2 = n10(m2 ? p2.substring(0, h2) : p2);
        if (!f2) {
          if (!m2 || !(f2 = n10(p2))) {
            s10 = t12 + (s10.length > 0 ? " " + s10 : s10);
            continue;
          }
          m2 = false;
        }
        let g2 = 0 === d10.length ? "" : 1 === d10.length ? d10[0] : i10(d10).join(":"), v2 = u6 ? g2 + "!" : g2, w2 = v2 + f2;
        if (o10.indexOf(w2) > -1) continue;
        o10.push(w2);
        let b2 = a10(f2, m2);
        for (let e13 = 0; e13 < b2.length; ++e13) {
          let t13 = b2[e13];
          o10.push(v2 + t13);
        }
        s10 = t12 + (s10.length > 0 ? " " + s10 : s10);
      }
      return s10;
    })(e10, n);
    return i(e10, r10), r10;
  }, o = (e10) => {
    var t10;
    let r10;
    return a = (n = { cache: ((e11) => {
      if (e11 < 1) return { get: () => void 0, set: () => {
      } };
      let t11 = 0, r11 = /* @__PURE__ */ Object.create(null), n10 = /* @__PURE__ */ Object.create(null), a10 = (a11, i10) => {
        r11[a11] = i10, ++t11 > e11 && (t11 = 0, n10 = r11, r11 = /* @__PURE__ */ Object.create(null));
      };
      return { get(e12) {
        let t12 = r11[e12];
        return void 0 !== t12 ? t12 : void 0 !== (t12 = n10[e12]) ? (a10(e12, t12), t12) : void 0;
      }, set(e12, t12) {
        e12 in r11 ? r11[e12] = t12 : a10(e12, t12);
      } };
    })((t10 = [].reduce((e11, t11) => t11(e11), d())).cacheSize), parseClassName: ((e11) => {
      let { prefix: t11, experimentalParseClassName: r11 } = e11, n10 = (e12) => {
        let t12, r12 = [], n11 = 0, a10 = 0, i10 = 0, o10 = e12.length;
        for (let l11 = 0; l11 < o10; l11++) {
          let o11 = e12[l11];
          if (0 === n11 && 0 === a10) {
            if (":" === o11) {
              r12.push(e12.slice(i10, l11)), i10 = l11 + 1;
              continue;
            }
            if ("/" === o11) {
              t12 = l11;
              continue;
            }
          }
          "[" === o11 ? n11++ : "]" === o11 ? n11-- : "(" === o11 ? a10++ : ")" === o11 && a10--;
        }
        let l10 = 0 === r12.length ? e12 : e12.slice(i10), s10 = l10, c10 = false;
        return l10.endsWith("!") ? (s10 = l10.slice(0, -1), c10 = true) : l10.startsWith("!") && (s10 = l10.slice(1), c10 = true), la(r12, c10, s10, t12 && t12 > i10 ? t12 - i10 : void 0);
      };
      if (t11) {
        let e12 = t11 + ":", r12 = n10;
        n10 = (t12) => t12.startsWith(e12) ? r12(t12.slice(e12.length)) : la(ln, false, t12, void 0, true);
      }
      if (r11) {
        let e12 = n10;
        n10 = (t12) => r11({ className: t12, parseClassName: e12 });
      }
      return n10;
    })(t10), sortModifiers: (r10 = /* @__PURE__ */ new Map(), t10.orderSensitiveModifiers.forEach((e11, t11) => {
      r10.set(e11, 1e6 + t11);
    }), (e11) => {
      let t11 = [], n10 = [];
      for (let a10 = 0; a10 < e11.length; a10++) {
        let i10 = e11[a10], o10 = "[" === i10[0], l10 = r10.has(i10);
        o10 || l10 ? (n10.length > 0 && (n10.sort(), t11.push(...n10), n10 = []), t11.push(i10)) : n10.push(i10);
      }
      return n10.length > 0 && (n10.sort(), t11.push(...n10)), t11;
    }), ...((e11) => {
      let t11 = ((e12) => {
        let { theme: t12, classGroups: r12 } = e12;
        return o3(r12, t12);
      })(e11), { conflictingClassGroups: r11, conflictingClassGroupModifiers: n10 } = e11;
      return { getClassGroupId: (e12) => {
        if (e12.startsWith("[") && e12.endsWith("]")) {
          var r12;
          let t12, n12, a11;
          return -1 === (r12 = e12).slice(1, -1).indexOf(":") ? void 0 : (n12 = (t12 = r12.slice(1, -1)).indexOf(":"), (a11 = t12.slice(0, n12)) ? "arbitrary.." + a11 : void 0);
        }
        let n11 = e12.split("-"), a10 = +("" === n11[0] && n11.length > 1);
        return o4(n11, a10, t11);
      }, getConflictingClassGroupIds: (e12, t12) => {
        if (t12) {
          let t13 = n10[e12], a10 = r11[e12];
          if (t13) {
            if (a10) {
              let e13 = Array(a10.length + t13.length);
              for (let t14 = 0; t14 < a10.length; t14++) e13[t14] = a10[t14];
              for (let r12 = 0; r12 < t13.length; r12++) e13[a10.length + r12] = t13[r12];
              return e13;
            }
            return t13;
          }
          return a10 || o5;
        }
        return r11[e12] || o5;
      } };
    })(t10) }).cache.get, i = n.cache.set, o = l, l(e10);
  }, (...e10) => o(((...e11) => {
    let t10, r10, n10 = 0, a10 = "";
    for (; n10 < e11.length; ) (t10 = e11[n10++]) && (r10 = lo(t10)) && (a10 && (a10 += " "), a10 += r10);
    return a10;
  })(...e10))), l2 = (...e10) => l1((function() {
    for (var e11, t10, r10 = 0, n10 = "", a10 = arguments.length; r10 < a10; r10++) (e11 = arguments[r10]) && (t10 = (function e12(t11) {
      var r11, n11, a11 = "";
      if ("string" == typeof t11 || "number" == typeof t11) a11 += t11;
      else if ("object" == typeof t11) if (Array.isArray(t11)) {
        var i10 = t11.length;
        for (r11 = 0; r11 < i10; r11++) t11[r11] && (n11 = e12(t11[r11])) && (a11 && (a11 += " "), a11 += n11);
      } else for (n11 in t11) t11[n11] && (a11 && (a11 += " "), a11 += n11);
      return a11;
    })(e11)) && (n10 && (n10 += " "), n10 += t10);
    return n10;
  })(e10));
  "u" > typeof navigator && navigator.userAgent.includes("Firefox");
  var l5 = (e10, t10) => {
    let r10 = 0;
    return (n10) => {
      let a10 = Date.now();
      if (a10 - r10 >= t10) return r10 = a10, e10(n10);
    };
  }, l4 = (e10) => {
    if (!oq) return null;
    try {
      let t10 = localStorage.getItem(e10);
      return t10 ? JSON.parse(t10) : null;
    } catch {
      return null;
    }
  }, l3 = (e10, t10) => {
    if (oq) try {
      window.localStorage.setItem(e10, JSON.stringify(t10));
    } catch {
    }
  }, l7 = (e10) => {
    if (oq) try {
      window.localStorage.removeItem(e10);
    } catch {
    }
  }, l8 = (e10) => {
    if (!e10) return { name: "Unknown", wrappers: [], wrapperTypes: [] };
    let { tag: t10, type: r10, elementType: n10 } = e10, a10 = X(r10), i10 = [], o10 = [];
    if (K(e10) || 15 === t10 || 14 === t10 || (null == r10 ? void 0 : r10.$$typeof) === /* @__PURE__ */ Symbol.for("react.memo") || (null == n10 ? void 0 : n10.$$typeof) === /* @__PURE__ */ Symbol.for("react.memo")) {
      let t11 = K(e10);
      o10.push({ type: "memo", title: t11 ? "This component has been auto-memoized by the React Compiler." : "Memoized component that skips re-renders if props are the same", compiler: t11 });
    }
    if (24 === t10 && o10.push({ type: "lazy", title: "Lazily loaded component that supports code splitting" }), 13 === t10 && o10.push({ type: "suspense", title: "Component that can suspend while content is loading" }), 12 === t10 && o10.push({ type: "profiler", title: "Component that measures rendering performance" }), "string" == typeof a10) {
      let e11 = /^(\w+)\((.*)\)$/, t11 = a10;
      for (; e11.test(t11); ) {
        let r11 = t11.match(e11);
        if ((null == r11 ? void 0 : r11[1]) && (null == r11 ? void 0 : r11[2])) i10.unshift(r11[1]), t11 = r11[2];
        else break;
      }
      a10 = t11;
    }
    return { name: a10 || "Unknown", wrappers: i10, wrapperTypes: o10 };
  }, l6 = (e10) => "number" == typeof e10 && Number.isFinite(e10) && e10 >= 0, l9 = (e10) => !!e10 && "object" == typeof e10 && !Array.isArray(e10), se = () => {
    let e10 = u0.options.value.safeArea;
    if (l6(e10)) return { top: e10, right: e10, bottom: e10, left: e10 };
    if (l9(e10)) {
      let t10 = e10.top, r10 = e10.right, n10 = e10.bottom, a10 = e10.left;
      return { top: l6(t10) ? t10 : 24, right: l6(r10) ? r10 : 24, bottom: l6(n10) ? n10 : 24, left: l6(a10) ? a10 : 24 };
    }
    return { top: 24, right: 24, bottom: 24, left: 24 };
  }, st = tC(false), sr = tC(null), sn = () => ({ corner: "bottom-right", dimensions: { isFullWidth: false, isFullHeight: false, width: 550, height: 350, position: { x: 24, y: 24 } }, lastDimensions: { isFullWidth: false, isFullHeight: false, width: 550, height: 350, position: { x: 24, y: 24 } }, componentsTree: { width: 240 } });
  sn();
  var sa = tC((s = sn(), (c = l4(oQ)) ? { corner: null != (u = c.corner) ? u : s.corner, dimensions: null != (p = c.dimensions) ? p : s.dimensions, lastDimensions: null != (m = null != (h = c.lastDimensions) ? h : c.dimensions) ? m : s.lastDimensions, componentsTree: null != (f = c.componentsTree) ? f : s.componentsTree } : (l3(oQ, { corner: s.corner, dimensions: s.dimensions, lastDimensions: s.lastDimensions, componentsTree: s.componentsTree }), s))), si = () => {
    if (!oq) return;
    let { dimensions: e10 } = sa.value, { width: t10, height: r10, position: n10 } = e10, a10 = se();
    sa.value = { ...sa.value, dimensions: { isFullWidth: t10 >= window.innerWidth - a10.left - a10.right, isFullHeight: r10 >= window.innerHeight - a10.top - a10.bottom, width: t10, height: r10, position: n10 } };
  }, so = tC({ view: "none" }), sl = l4(o0), ss = tC(null != sl ? sl : null);
  function sc() {
    return false;
  }
  function sd(e10) {
    function t10(t11) {
      return this.shouldComponentUpdate = sc, eT(e10, t11);
    }
    return t10.displayName = `Memo(${e10.displayName || e10.name})`, t10.prototype.isReactComponent = true, t10._forwarded = true, t10;
  }
  var su = /* @__PURE__ */ new WeakMap(), sp = { activeFlashes: /* @__PURE__ */ new Map(), create(e10) {
    let t10, r10, n10, a10 = e10.querySelector(".react-scan-flash-overlay"), i10 = a10 instanceof HTMLElement ? a10 : ((t10 = document.createElement("div")).className = "react-scan-flash-overlay", e10.appendChild(t10), r10 = (() => {
      e10.querySelector(".react-scan-flash-overlay") && this.create(e10);
    }).bind(null, e10), document.addEventListener("scroll", r10, { passive: true, capture: true }), n10 = () => {
      document.removeEventListener("scroll", r10, { capture: true });
    }, this.activeFlashes.set(e10, { element: e10, overlay: t10, scrollCleanup: n10 }), t10), o10 = su.get(i10);
    o10 && (clearTimeout(o10), su.delete(i10)), requestAnimationFrame(() => {
      i10.style.transition = "none", i10.style.opacity = "0.9";
      let t11 = setTimeout(() => {
        i10.style.transition = "opacity 150ms ease-out", i10.style.opacity = "0";
        let t12 = setTimeout(() => {
          i10.parentNode && i10.parentNode.removeChild(i10);
          let t13 = this.activeFlashes.get(e10);
          (null == t13 ? void 0 : t13.scrollCleanup) && t13.scrollCleanup(), this.activeFlashes.delete(e10), su.delete(i10);
        }, 150);
        su.set(i10, t12);
      }, 300);
      su.set(i10, t11);
    });
  }, cleanup(e10) {
    let t10 = this.activeFlashes.get(e10);
    if (t10) {
      let r10 = su.get(t10.overlay);
      r10 && (clearTimeout(r10), su.delete(t10.overlay)), t10.overlay.parentNode && t10.overlay.parentNode.removeChild(t10.overlay), t10.scrollCleanup && t10.scrollCleanup(), this.activeFlashes.delete(e10);
    }
  }, cleanupAll() {
    for (let [, e10] of this.activeFlashes) this.cleanup(e10.element);
  } }, sh = { updates: [], currentFiber: null, totalUpdates: 0, windowOffset: 0, currentIndex: 0, isViewingHistory: false, latestFiber: null, isVisible: false, playbackSpeed: 1 }, sm = tC(sh), sf = tC(0), sg = [], sv = null, sw = tC({ query: "", matches: [], currentMatchIndex: -1 }), sb = tC(false), sy = (e10, t10 = 0, r10 = null) => e10.reduce((e11, n10, a10) => {
    var i10, o10;
    let l10 = n10.element ? ((e12) => {
      var t11;
      let r11 = [], n11 = e12;
      for (; n11; ) {
        let e13 = n11.elementType, a11 = "function" == typeof e13 ? e13.displayName || e13.name : "string" == typeof e13 ? e13 : "Unknown", i11 = void 0 !== n11.index ? `[${n11.index}]` : "";
        r11.unshift(`${a11}${i11}`), n11 = null != (t11 = n11.return) ? t11 : null;
      }
      return r11.join("::");
    })(n10.fiber) : `${r10}-${a10}`, s10 = (null == (i10 = n10.fiber) ? void 0 : i10.type) ? cP(n10.fiber) : void 0, c10 = { ...n10, depth: t10, nodeId: l10, parentId: r10, fiber: n10.fiber, renderData: s10 };
    return e11.push(c10), (null == (o10 = n10.children) ? void 0 : o10.length) && e11.push(...sy(n10.children, t10 + 1, l10)), e11;
  }, []), sx = ["memo", "forwardRef", "lazy", "suspense"], s_ = (e10) => {
    let t10 = e10.match(/\[(.*?)\]/);
    if (!t10) return null;
    let r10 = [];
    for (let e11 of t10[1].split(",")) {
      let t11 = e11.trim().toLowerCase();
      t11 && r10.push(t11);
    }
    return r10;
  }, sk = (e10, t10) => {
    if (0 === e10.length) return true;
    if (!t10.length) return false;
    for (let r10 of e10) {
      let e11 = false;
      for (let n10 of t10) if (n10.type.toLowerCase().includes(r10)) {
        e11 = true;
        break;
      }
      if (!e11) return false;
    }
    return true;
  }, sN = (e10) => e10 > 0 ? e10 < 0.1 - Number.EPSILON ? "< 0.1" : e10 < 1e3 ? Number(e10.toFixed(1)).toString() : `${(e10 / 1e3).toFixed(1)}k` : "0", sS = ({ node: e10, nodeIndex: t10, hasChildren: r10, isCollapsed: n10, handleTreeNodeClick: a10, handleTreeNodeToggle: i10, searchValue: o10 }) => {
    var l10, s10, c10;
    let d10 = tr(null), u6 = tr(null != (s10 = null == (l10 = e10.renderData) ? void 0 : l10.renderCount) ? s10 : 0), { highlightedText: p2, typeHighlight: h2 } = tn(() => {
      let { query: t11, matches: r11 } = o10, n11 = r11.some((t12) => t12.nodeId === e10.nodeId), a11 = s_(t11) || [], i11 = t11 ? t11.replace(/\[.*?\]/, "").trim() : "";
      if (!t11 || !n11) return { highlightedText: rx("span", { className: "truncate", children: e10.label }), typeHighlight: false };
      let l11 = true;
      if (a11.length > 0) if (e10.fiber) {
        let { wrapperTypes: t12 } = l8(e10.fiber);
        l11 = sk(a11, t12);
      } else l11 = false;
      let s11 = rx("span", { className: "truncate", children: e10.label });
      if (i11) try {
        if (i11.startsWith("/") && i11.endsWith("/")) {
          let t12 = i11.slice(1, -1), r12 = RegExp(`(${t12})`, "i"), n12 = e10.label.split(r12);
          s11 = rx("span", { className: "tree-node-search-highlight", children: n12.map((t13, a12) => r12.test(t13) ? rx("span", { className: l2("regex", { start: r12.test(t13) && 0 === a12, middle: r12.test(t13) && a12 % 2 == 1, end: r12.test(t13) && a12 === n12.length - 1, "!ml-0": 1 === a12 }), children: t13 }, `${e10.nodeId}-${t13}`) : t13) });
        } else {
          let t12 = e10.label.toLowerCase(), r12 = i11.toLowerCase(), n12 = t12.indexOf(r12);
          n12 >= 0 && (s11 = rx("span", { className: "tree-node-search-highlight", children: [e10.label.slice(0, n12), rx("span", { className: "single", children: e10.label.slice(n12, n12 + i11.length) }), e10.label.slice(n12 + i11.length)] }));
        }
      } catch {
      }
      return { highlightedText: s11, typeHighlight: l11 && a11.length > 0 };
    }, [e10.label, e10.nodeId, e10.fiber, o10]);
    te(() => {
      var t11;
      let r11 = null == (t11 = e10.renderData) ? void 0 : t11.renderCount, n11 = d10.current;
      n11 && u6.current && r11 && u6.current !== r11 && (n11.classList.remove("count-flash"), n11.offsetWidth, n11.classList.add("count-flash"), u6.current = r11);
    }, [null == (c10 = e10.renderData) ? void 0 : c10.renderCount]);
    let m2 = tn(() => {
      if (!e10.renderData) return null;
      let { selfTime: t11, totalTime: r11, renderCount: n11 } = e10.renderData;
      return n11 ? rx("span", { className: l2("flex items-center gap-x-0.5 ml-1.5", "text-[10px] text-neutral-400"), children: rx("span", { ref: d10, title: `Self time: ${sN(t11)}ms
Total time: ${sN(r11)}ms`, className: "count-badge", children: ["\xD7", n11] }) }) : null;
    }, [e10.renderData]), f2 = tn(() => {
      if (!e10.fiber) return null;
      let { wrapperTypes: t11 } = l8(e10.fiber), r11 = t11[0];
      return rx("span", { className: l2("flex items-center gap-x-1", "text-[10px] text-neutral-400 tracking-wide", "overflow-hidden"), children: [r11 && rx(ez, { children: [rx("span", { title: null == r11 ? void 0 : r11.title, className: l2("rounded py-[1px] px-1", "bg-neutral-700 text-neutral-300", "truncate", "memo" === r11.type && "bg-[#8e61e3] text-white", h2 && "bg-yellow-300 text-black"), children: r11.type }, r11.type), r11.compiler && rx("span", { className: "text-yellow-300 ml-1", children: "\u2728" })] }), t11.length > 1 && `\xD7${t11.length}`, m2] });
    }, [e10.fiber, h2, m2]);
    return rx("button", { type: "button", title: e10.title, "data-index": t10, className: l2("flex items-center gap-x-1", "pl-1 pr-2", "w-full h-7", "text-left", "rounded", "cursor-pointer select-none"), onClick: a10, children: [rx("button", { type: "button", "data-index": t10, onClick: i10, className: l2("w-6 h-6 flex items-center justify-center", "text-left"), children: r10 && rx(oZ, { name: "icon-chevron-right", size: 12, className: l2("transition-transform", !n10 && "rotate-90") }) }), p2, f2] });
  }, sE = () => {
    let e10 = tr(null), t10 = tr(null), r10 = tr(null), n10 = tr(null), a10 = tr(null), i10 = tr(0), o10 = tr(false), l10 = tr(false), s10 = tr(null), [c10, d10] = e9([]), [u6, p2] = e9(/* @__PURE__ */ new Set()), [h2, m2] = e9(void 0), [f2, g2] = e9(sw.value), v2 = tn(() => {
      let e11 = [], t11 = new Map(c10.map((e12) => [e12.nodeId, e12]));
      for (let r11 of c10) {
        let n11 = true, a11 = r11;
        for (; a11.parentId; ) {
          let e12 = t11.get(a11.parentId);
          if (!e12) break;
          if (u6.has(e12.nodeId)) {
            n11 = false;
            break;
          }
          a11 = e12;
        }
        n11 && e11.push(r11);
      }
      return e11;
    }, [u6, c10]), { virtualItems: w2, totalSize: b2 } = ((e11) => {
      let { count: t11, getScrollElement: r11, estimateSize: n11, overscan: a11 = 5 } = e11, [i11, o11] = e9(0), [l11, s11] = e9(0), c11 = tr(), d11 = tr(null), u9 = tr(null), p3 = n11(), h3 = ta((e12) => {
        var t12, r12;
        d11.current && s11(null != (r12 = null == (t12 = null == e12 ? void 0 : e12[0]) ? void 0 : t12.contentRect.height) ? r12 : d11.current.getBoundingClientRect().height);
      }, []), m3 = ta(() => {
        null !== u9.current && cancelAnimationFrame(u9.current), u9.current = requestAnimationFrame(() => {
          h3(), u9.current = null;
        });
      }, [h3]);
      te(() => {
        let e12 = r11();
        if (!e12) return;
        d11.current = e12;
        let t12 = () => {
          d11.current && o11(d11.current.scrollTop);
        };
        h3(), c11.current || (c11.current = new ResizeObserver(() => {
          m3();
        })), c11.current.observe(e12), e12.addEventListener("scroll", t12, { passive: true });
        let n12 = new MutationObserver(m3);
        return n12.observe(e12, { attributes: true, childList: true, subtree: true }), () => {
          e12.removeEventListener("scroll", t12), c11.current && c11.current.disconnect(), n12.disconnect(), null !== u9.current && cancelAnimationFrame(u9.current);
        };
      }, [r11, h3, m3]);
      let f3 = tn(() => {
        let e12 = Math.floor(i11 / p3);
        return { start: Math.max(0, e12 - a11), end: Math.min(t11, e12 + Math.ceil(l11 / p3) + a11) };
      }, [i11, p3, l11, t11, a11]);
      return { virtualItems: tn(() => {
        let e12 = [];
        for (let t12 = f3.start; t12 < f3.end; t12++) e12.push({ key: t12, index: t12, start: t12 * p3 });
        return e12;
      }, [f3, p3]), totalSize: t11 * p3, scrollTop: i11, containerHeight: l11 };
    })({ count: v2.length, getScrollElement: () => e10.current, estimateSize: () => 28, overscan: 5 }), y2 = ta((t11) => {
      var r11;
      o10.current = true, null == (r11 = n10.current) || r11.blur(), sb.value = true;
      let { parentCompositeFiber: a11 } = s1(t11);
      if (!a11) return;
      uQ.inspectState.value = { kind: "focused", focusedDomElement: t11, fiber: a11 };
      let i11 = v2.findIndex((e11) => e11.element === t11);
      if (-1 !== i11) {
        m2(i11);
        let t12 = 28 * i11, r12 = e10.current;
        if (r12) {
          let e11 = r12.clientHeight, n11 = r12.scrollTop;
          (t12 < n11 || t12 + 28 > n11 + e11) && r12.scrollTo({ top: Math.max(0, t12 - e11 / 2), behavior: "instant" });
        }
      }
    }, [v2]), x2 = ta((e11) => {
      let t11 = Number(e11.currentTarget.dataset.index);
      if (Number.isNaN(t11)) return;
      let r11 = v2[t11].element;
      r11 && y2(r11);
    }, [v2, y2]), _2 = ta((e11) => {
      p2((t11) => {
        let r11 = new Set(t11);
        return r11.has(e11) ? r11.delete(e11) : r11.add(e11), r11;
      });
    }, []), k2 = ta((e11) => {
      e11.stopPropagation();
      let t11 = Number(e11.target.dataset.index);
      Number.isNaN(t11) || _2(v2[t11].nodeId);
    }, [v2, _2]), N2 = ta((t11) => {
      var n11, a11, i11, o11, l11;
      null == (n11 = r10.current) || n11.classList.remove("!border-red-500");
      let s11 = [];
      if (!t11) {
        sw.value = { query: t11, matches: s11, currentMatchIndex: -1 };
        return;
      }
      if (t11.includes("[") && !t11.includes("]") && t11.length > t11.indexOf("[") + 1) {
        null == (a11 = r10.current) || a11.classList.add("!border-red-500");
        return;
      }
      let d11 = s_(t11) || [];
      if (t11.includes("[") && !((e11) => {
        if (0 === e11.length) return false;
        for (let t12 of e11) {
          let e12 = false;
          for (let r11 of sx) if (r11.toLowerCase().includes(t12)) {
            e12 = true;
            break;
          }
          if (!e12) return false;
        }
        return true;
      })(d11)) {
        null == (i11 = r10.current) || i11.classList.add("!border-red-500");
        return;
      }
      let u9 = t11.replace(/\[.*?\]/, "").trim(), p3 = /^\/.*\/$/.test(u9), h3 = (e11) => false;
      if (u9.startsWith("/") && !p3 && u9.length > 1) {
        null == (o11 = r10.current) || o11.classList.add("!border-red-500");
        return;
      }
      if (p3) try {
        let e11 = u9.slice(1, -1), t12 = RegExp(e11, "i");
        h3 = (e12) => t12.test(e12);
      } catch {
        null == (l11 = r10.current) || l11.classList.add("!border-red-500");
        return;
      }
      else if (u9) {
        let e11 = u9.toLowerCase();
        h3 = (t12) => t12.toLowerCase().includes(e11);
      }
      for (let e11 of c10) {
        let t12 = true;
        if (u9 && (t12 = h3(e11.label)), t12 && d11.length > 0) if (e11.fiber) {
          let { wrapperTypes: r11 } = l8(e11.fiber);
          t12 = sk(d11, r11);
        } else t12 = false;
        t12 && s11.push(e11);
      }
      if (sw.value = { query: t11, matches: s11, currentMatchIndex: s11.length > 0 ? 0 : -1 }, s11.length > 0) {
        let t12 = s11[0], r11 = v2.findIndex((e11) => e11.nodeId === t12.nodeId);
        if (-1 !== r11) {
          let t13 = e10.current;
          if (t13) {
            let e11 = t13.clientHeight;
            t13.scrollTo({ top: Math.max(0, 28 * r11 - e11 / 2), behavior: "instant" });
          }
        }
      }
    }, [c10, v2]), S2 = ta((e11) => {
      let t11 = e11.currentTarget;
      t11 && N2(t11.value);
    }, [N2]), E2 = ta((t11) => {
      let { matches: r11, currentMatchIndex: n11 } = sw.value;
      if (0 === r11.length) return;
      let a11 = "next" === t11 ? (n11 + 1) % r11.length : (n11 - 1 + r11.length) % r11.length;
      sw.value = { ...sw.value, currentMatchIndex: a11 };
      let i11 = r11[a11], o11 = v2.findIndex((e11) => e11.nodeId === i11.nodeId);
      if (-1 !== o11) {
        m2(o11);
        let t12 = 28 * o11, r12 = e10.current;
        if (r12) {
          let e11 = r12.clientHeight;
          r12.scrollTo({ top: Math.max(0, t12 - e11 / 2), behavior: "instant" });
        }
      }
    }, [v2]), M2 = ta((r11) => {
      if (t10.current && (t10.current.style.width = `${r11}px`), e10.current) {
        e10.current.style.width = `${r11}px`;
        let t11 = ((e11, t12) => {
          if (t12 <= 0) return 24;
          let r12 = Math.max(0, e11 - 240);
          return r12 < 24 ? 0 : Math.max(0, Math.min(24, Math.min(0.3 * r12, 24 * t12) / t12));
        })(r11, i10.current);
        e10.current.style.setProperty("--indentation-size", `${t11}px`);
      }
    }, []), C2 = ta((e11) => {
      if (!s10.current) return;
      let t11 = Math.floor(sa.value.dimensions.width - 120);
      s10.current.classList.remove("cursor-ew-resize", "cursor-w-resize", "cursor-e-resize"), e11 <= 240 ? s10.current.classList.add("cursor-w-resize") : e11 >= t11 ? s10.current.classList.add("cursor-e-resize") : s10.current.classList.add("cursor-ew-resize");
    }, []), T2 = ta((t11) => {
      if (t11.preventDefault(), t11.stopPropagation(), !e10.current) return;
      e10.current.style.setProperty("pointer-events", "none"), l10.current = true;
      let r11 = t11.clientX, n11 = e10.current.offsetWidth, a11 = Math.floor(sa.value.dimensions.width - 120);
      C2(n11);
      let i11 = (e11) => {
        let t12 = n11 + (r11 - e11.clientX);
        C2(t12), M2(Math.min(a11, Math.max(240, t12)));
      }, o11 = () => {
        e10.current && (e10.current.style.removeProperty("pointer-events"), document.removeEventListener("pointermove", i11), document.removeEventListener("pointerup", o11), sa.value = { ...sa.value, componentsTree: { ...sa.value.componentsTree, width: e10.current.offsetWidth } }, l3(oQ, sa.value), l10.current = false);
      };
      document.addEventListener("pointermove", i11), document.addEventListener("pointerup", o11);
    }, [M2, C2]);
    te(() => {
      if (e10.current) return C2(e10.current.offsetWidth), sa.subscribe(() => {
        e10.current && C2(e10.current.offsetWidth);
      });
    }, [C2]);
    let A2 = ta(() => {
      o10.current = false;
    }, []);
    return te(() => {
      let t11 = true, r11 = () => {
        let r12 = a10.current;
        if (!r12) return;
        let n12 = ((e11) => {
          let t12 = /* @__PURE__ */ new Map(), r13 = [];
          for (let { element: r14, name: n13, fiber: a11 } of e11) {
            if (!r14) continue;
            let e12 = n13, { name: i11, wrappers: o12 } = l8(a11);
            i11 && (e12 = o12.length > 0 ? `${o12.join("(")}(${i11})${")".repeat(o12.length)}` : i11), t12.set(r14, { label: i11 || n13, title: e12, children: [], element: r14, fiber: a11 });
          }
          for (let { element: n13, depth: a11 } of e11) {
            if (!n13) continue;
            let e12 = t12.get(n13);
            if (e12) if (0 === a11) r13.push(e12);
            else {
              let r14 = n13.parentElement;
              for (; r14; ) {
                let n14 = t12.get(r14);
                if (n14) {
                  n14.children = n14.children || [], n14.children.push(e12);
                  break;
                }
                r14 = r14.parentElement;
              }
            }
          }
          return r13;
        })(s7());
        if (n12.length > 0) {
          let a11 = sy(n12);
          if (i10.current = a11.reduce((e11, t12) => Math.max(e11, t12.depth), 0), M2(sa.value.componentsTree.width), d10(a11), t11) {
            t11 = false;
            let n13 = a11.findIndex((e11) => e11.element === r12);
            if (-1 !== n13) {
              let t12 = 28 * n13, r13 = e10.current;
              r13 && setTimeout(() => {
                r13.scrollTo({ top: t12, behavior: "instant" });
              }, 96);
            }
          }
        }
      }, n11 = uQ.inspectState.subscribe((e11) => {
        "focused" === e11.kind && (sb.value || (N2(""), a10.current = e11.focusedDomElement, r11()));
      }), o11 = 0, s11 = sf.subscribe(() => {
        "focused" === uQ.inspectState.value.kind && (cancelAnimationFrame(o11), l10.current || (o11 = requestAnimationFrame(() => {
          sb.value = false, r11();
        })));
      });
      return () => {
        n11(), s11(), sw.value = { query: "", matches: [], currentMatchIndex: -1 };
      };
    }, []), te(() => {
      let e11 = (e12) => {
        if (o10.current && h2) switch (e12.key) {
          case "ArrowUp":
            if (e12.preventDefault(), e12.stopPropagation(), h2 > 0) {
              let e13 = v2[h2 - 1];
              (null == e13 ? void 0 : e13.element) && y2(e13.element);
            }
            return;
          case "ArrowDown":
            if (e12.preventDefault(), e12.stopPropagation(), h2 < v2.length - 1) {
              let e13 = v2[h2 + 1];
              (null == e13 ? void 0 : e13.element) && y2(e13.element);
            }
            return;
          case "ArrowLeft":
          case "ArrowRight": {
            e12.preventDefault(), e12.stopPropagation();
            let t11 = v2[h2];
            (null == t11 ? void 0 : t11.nodeId) && _2(t11.nodeId);
            return;
          }
        }
      };
      return document.addEventListener("keydown", e11), () => {
        document.removeEventListener("keydown", e11);
      };
    }, [h2, v2, y2, _2]), te(() => sw.subscribe(g2), []), te(() => sa.subscribe((e11) => {
      var r11;
      null == (r11 = t10.current) || r11.style.setProperty("transition", "width 0.1s"), M2(e11.componentsTree.width), setTimeout(() => {
        var e12;
        null == (e12 = t10.current) || e12.style.removeProperty("transition");
      }, 500);
    }), []), rx("div", { className: "react-scan-components-tree flex", children: [rx("div", { ref: s10, onPointerDown: T2, className: "relative resize-v-line", children: rx("span", { children: rx(oZ, { name: "icon-ellipsis", size: 18 }) }) }), rx("div", { ref: t10, className: "flex flex-col h-full", children: [rx("div", { className: "p-2 border-b border-[#1e1e1e]", children: rx("div", { ref: r10, title: `Search components by:

\u2022 Name (e.g., "Button") \u2014 Case insensitive, matches any part

\u2022 Regular Expression (e.g., "/^Button/") \u2014 Use forward slashes

\u2022 Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

\u2022 Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

\u2022 Navigation:
   - Enter \u2192 Next match
   - Shift + Enter \u2192 Previous match
   - Cmd/Ctrl + Enter \u2192 Select and focus match
`, className: l2("relative", "flex items-center gap-x-1 px-2", "rounded", "border border-transparent", "focus-within:border-[#454545]", "bg-[#1e1e1e] text-neutral-300", "transition-colors", "whitespace-nowrap", "overflow-hidden"), children: [rx(oZ, { name: "icon-search", size: 12, className: " text-neutral-500" }), rx("div", { className: "relative flex-1 h-7 overflow-hidden", children: rx("input", { ref: n10, type: "text", value: sw.value.query, onClick: (e11) => {
      e11.stopPropagation(), e11.currentTarget.focus();
    }, onPointerDown: (e11) => {
      e11.stopPropagation();
    }, onKeyDown: (e11) => {
      "Escape" === e11.key && e11.currentTarget.blur(), sw.value.matches.length && ("Enter" === e11.key && e11.shiftKey ? E2("prev") : "Enter" === e11.key && (e11.metaKey || e11.ctrlKey ? (e11.preventDefault(), e11.stopPropagation(), y2(sw.value.matches[sw.value.currentMatchIndex].element), e11.currentTarget.focus()) : E2("next")));
    }, onChange: S2, className: "absolute inset-y-0 inset-x-1", placeholder: "Component name, /regex/, or [type]" }) }), sw.value.query ? rx(ez, { children: [rx("span", { className: "flex items-center gap-x-0.5 text-xs text-neutral-500", children: [sw.value.currentMatchIndex + 1, "|", sw.value.matches.length] }), !!sw.value.matches.length && rx(ez, { children: [rx("button", { type: "button", onClick: (e11) => {
      e11.stopPropagation(), E2("prev");
    }, className: "button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300", children: rx(oZ, { name: "icon-chevron-right", className: "-rotate-90", size: 12 }) }), rx("button", { type: "button", onClick: (e11) => {
      e11.stopPropagation(), E2("next");
    }, className: "button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300", children: rx(oZ, { name: "icon-chevron-right", className: "rotate-90", size: 12 }) })] }), rx("button", { type: "button", onClick: (e11) => {
      e11.stopPropagation(), N2("");
    }, className: "button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300", children: rx(oZ, { name: "icon-close", size: 12 }) })] }) : !!c10.length && rx("span", { className: "text-xs text-neutral-500", children: c10.length })] }) }), rx("div", { className: "flex-1 overflow-hidden", children: rx("div", { ref: e10, onPointerLeave: A2, className: "tree h-full overflow-auto will-change-transform", children: rx("div", { className: "relative w-full", style: { height: b2 }, children: w2.map((e11) => {
      var t11;
      let r11 = v2[e11.index];
      if (!r11) return null;
      let n11 = "focused" === uQ.inspectState.value.kind && r11.element === uQ.inspectState.value.focusedDomElement, a11 = e11.index === h2;
      return rx("div", { className: l2("absolute left-0 w-full overflow-hidden", "text-neutral-400 hover:text-neutral-300", "bg-transparent hover:bg-[#5f3f9a]/20", (n11 || a11) && "text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"), style: { top: e11.start, height: 28 }, children: rx("div", { className: "w-full h-full", style: { paddingLeft: `calc(${r11.depth} * var(--indentation-size))` }, children: rx(sS, { node: r11, nodeIndex: e11.index, hasChildren: !!(null == (t11 = r11.children) ? void 0 : t11.length), isCollapsed: u6.has(r11.nodeId), handleTreeNodeClick: x2, handleTreeNodeToggle: k2, searchValue: f2 }) }) }, r11.nodeId);
    }) }) }) })] })] });
  }, sM = t8(({ text: e10, children: t10, onCopy: r10, className: n10, iconSize: a10 = 14 }) => {
    let [i10, o10] = e9(false);
    te(() => {
      if (i10) {
        let e11 = setTimeout(() => o10(false), 600);
        return () => {
          clearTimeout(e11);
        };
      }
    }, [i10]);
    let l10 = ta((t11) => {
      t11.preventDefault(), t11.stopPropagation(), navigator.clipboard.writeText(e10).then(() => {
        o10(true), null == r10 || r10(true, e10);
      }, () => {
        null == r10 || r10(false, e10);
      });
    }, [e10, r10]), s10 = rx("button", { onClick: l10, type: "button", className: l2("z-10", "flex items-center justify-center", "hover:text-dev-pink-400", "transition-colors duration-200 ease-in-out", "cursor-pointer", `size-[${a10}px]`, n10), children: rx(oZ, { name: `icon-${i10 ? "check" : "copy"}`, size: [a10], className: l2(i10 && "text-green-500") }) });
    return t10 ? t10({ ClipboardIcon: s10, onClick: l10 }) : s10;
  }), sC = ({ length: e10, expanded: t10, onToggle: r10, isNegative: n10 }) => rx("div", { className: "flex items-center gap-1", children: [rx("button", { type: "button", onClick: r10, className: "flex items-center p-0 opacity-50", children: rx(oZ, { name: "icon-chevron-right", size: 12, className: l2("transition-[color,transform]", n10 ? "text-[#f87171]" : "text-[#4ade80]", t10 && "rotate-90") }) }), rx("span", { children: ["Array(", e10, ")"] })] }), sT = ({ value: e10, path: t10, isNegative: r10 }) => {
    let [n10, a10] = e9(false);
    if (null === e10 || "object" != typeof e10 || e10 instanceof Date) return rx("div", { className: "flex items-center gap-1", children: [rx("span", { className: "text-gray-500", children: [t10, ":"] }), rx("span", { className: "truncate", children: ct(e10) })] });
    let i10 = Object.entries(e10);
    return rx("div", { className: "flex flex-col", children: [rx("div", { className: "flex items-center gap-1", children: [rx("button", { type: "button", onClick: () => a10(!n10), className: "flex items-center p-0 opacity-50", children: rx(oZ, { name: "icon-chevron-right", size: 12, className: l2("transition-[color,transform]", r10 ? "text-[#f87171]" : "text-[#4ade80]", n10 && "rotate-90") }) }), rx("span", { className: "text-gray-500", children: [t10, ":"] }), !n10 && rx("span", { className: "truncate", children: e10 instanceof Date ? ct(e10) : `{${Object.keys(e10).join(", ")}}` })] }), n10 && rx("div", { className: "pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5", children: i10.map(([e11, t11]) => rx(sT, { value: t11, path: e11, isNegative: r10 }, e11)) })] });
  }, sA = ({ value: e10, expanded: t10, onToggle: r10, isNegative: n10 }) => {
    let { value: a10, error: i10 } = cr(e10);
    return i10 ? rx("span", { className: "text-gray-500 font-italic", children: i10 }) : null === a10 || "object" != typeof a10 || a10 instanceof Promise ? rx("span", { children: ct(a10) }) : Array.isArray(a10) ? rx("div", { className: "flex flex-col gap-1 relative", children: [rx(sC, { length: a10.length, expanded: t10, onToggle: r10, isNegative: n10 }), t10 && rx("div", { className: "pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5", children: a10.map((e11, t11) => rx(sT, { value: e11, path: t11.toString(), isNegative: n10 }, t11.toString())) }), rx(sM, { text: s8(a10), className: "absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end", children: ({ ClipboardIcon: e11 }) => rx(ez, { children: e11 }) })] }) : rx("div", { className: "flex items-start gap-1 relative", children: [rx("button", { type: "button", onClick: r10, className: l2("flex items-center", "p-0 mt-0.5 mr-1", "opacity-50"), children: rx(oZ, { name: "icon-chevron-right", size: 12, className: l2("transition-[color,transform]", n10 ? "text-[#f87171]" : "text-[#4ade80]", t10 && "rotate-90") }) }), rx("div", { className: "flex-1", children: t10 ? rx("div", { className: "pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5", children: Object.entries(a10).map(([e11, t11]) => rx(sT, { value: t11, path: e11, isNegative: n10 }, e11)) }) : rx("span", { children: ct(a10) }) }), rx(sM, { text: s8(a10), className: "absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end", children: ({ ClipboardIcon: e11 }) => rx(ez, { children: e11 }) })] });
  };
  tC({ fiber: null, fiberProps: { current: [], changes: /* @__PURE__ */ new Set() }, fiberState: { current: [], changes: /* @__PURE__ */ new Set() }, fiberContext: { current: [], changes: /* @__PURE__ */ new Set() } });
  var sz = (e10) => {
    switch (e10.kind) {
      case "initialized":
        return e10.changes.currentValue;
      case "partially-initialized":
        return e10.value;
    }
  }, s$ = (e10, t10) => {
    for (let r10 of e10) {
      let e11 = t10.get(r10.name);
      if (e11) {
        t10.set(e11.name, { count: e11.count + 1, currentValue: r10.value, id: e11.name, lastUpdated: Date.now(), name: e11.name, previousValue: r10.prevValue });
        continue;
      }
      t10.set(r10.name, { count: 1, currentValue: r10.value, id: r10.name, lastUpdated: Date.now(), name: r10.name, previousValue: r10.prevValue });
    }
  }, sR = (e10, t10) => {
    let r10 = /* @__PURE__ */ new Map();
    return e10.forEach((e11, t11) => {
      r10.set(t11, e11);
    }), t10.forEach((e11, t11) => {
      let n10 = r10.get(t11);
      n10 ? r10.set(t11, { count: n10.count + e11.count, currentValue: e11.currentValue, id: e11.id, lastUpdated: e11.lastUpdated, name: e11.name, previousValue: e11.previousValue }) : r10.set(t11, e11);
    }), r10;
  }, sO = (e10) => Array.from(e10.propsChanges.values()).reduce((e11, t10) => e11 + t10.count, 0) + Array.from(e10.stateChanges.values()).reduce((e11, t10) => e11 + t10.count, 0) + Array.from(e10.contextChanges.values()).filter((e11) => "initialized" === e11.kind).reduce((e11, t10) => e11 + t10.changes.count, 0), sj = t8(() => {
    let [e10, t10] = e9(true), r10 = (() => {
      let e11 = tr({ queue: [] }), [t11, r11] = e9({ propsChanges: /* @__PURE__ */ new Map(), stateChanges: /* @__PURE__ */ new Map(), contextChanges: /* @__PURE__ */ new Map() }), n11 = "focused" === uQ.inspectState.value.kind ? uQ.inspectState.value.fiber : null, a11 = n11 ? Q(n11) : null;
      return te(() => {
        let t12 = setInterval(() => {
          0 !== e11.current.queue.length && (r11((t13) => {
            var r12;
            let n12, a12, i11 = (r12 = e11.current.queue, n12 = { contextChanges: /* @__PURE__ */ new Map(), propsChanges: /* @__PURE__ */ new Map(), stateChanges: /* @__PURE__ */ new Map() }, r12.forEach((e12) => {
              for (let t14 of e12.contextChanges) {
                let e13 = n12.contextChanges.get(t14.contextType);
                if (e13) {
                  if (oX(sz(e13), t14.value)) continue;
                  if ("partially-initialized" === e13.kind) {
                    n12.contextChanges.set(t14.contextType, { kind: "initialized", changes: { count: 1, currentValue: t14.value, id: t14.contextType.toString(), lastUpdated: Date.now(), name: t14.name, previousValue: e13.value } });
                    continue;
                  }
                  n12.contextChanges.set(t14.contextType, { kind: "initialized", changes: { count: e13.changes.count + 1, currentValue: t14.value, id: t14.contextType.toString(), lastUpdated: Date.now(), name: t14.name, previousValue: e13.changes.currentValue } });
                  continue;
                }
                n12.contextChanges.set(t14.contextType, { kind: "partially-initialized", id: t14.contextType.toString(), lastUpdated: Date.now(), name: t14.name, value: t14.value });
              }
              s$(e12.stateChanges, n12.stateChanges), s$(e12.propsChanges, n12.propsChanges);
            }), n12), o11 = (a12 = /* @__PURE__ */ new Map(), t13.contextChanges.forEach((e12, t14) => {
              a12.set(t14, e12);
            }), i11.contextChanges.forEach((e12, t14) => {
              let r13 = a12.get(t14);
              if (!r13) return void a12.set(t14, e12);
              if (sz(e12) !== sz(r13)) switch (r13.kind) {
                case "initialized":
                  switch (e12.kind) {
                    case "initialized":
                      return void a12.set(t14, { kind: "initialized", changes: { ...e12.changes, count: e12.changes.count + r13.changes.count + 1, currentValue: e12.changes.currentValue, previousValue: e12.changes.previousValue } });
                    case "partially-initialized":
                      return void a12.set(t14, { kind: "initialized", changes: { count: r13.changes.count + 1, currentValue: e12.value, id: e12.id, lastUpdated: e12.lastUpdated, name: e12.name, previousValue: r13.changes.currentValue } });
                  }
                case "partially-initialized":
                  switch (e12.kind) {
                    case "initialized":
                      return void a12.set(t14, { kind: "initialized", changes: { count: e12.changes.count + 1, currentValue: e12.changes.currentValue, id: e12.changes.id, lastUpdated: e12.changes.lastUpdated, name: e12.changes.name, previousValue: r13.value } });
                    case "partially-initialized":
                      return void a12.set(t14, { kind: "initialized", changes: { count: 1, currentValue: e12.value, id: e12.id, lastUpdated: e12.lastUpdated, name: e12.name, previousValue: r13.value } });
                  }
              }
            }), { contextChanges: a12, propsChanges: sR(t13.propsChanges, i11.propsChanges), stateChanges: sR(t13.stateChanges, i11.stateChanges) });
            return sO(t13), sO(o11), o11;
          }), e11.current.queue = []);
        }, 50);
        return () => {
          clearInterval(t12);
        };
      }, [n11]), te(() => {
        if (!a11) return;
        let t12 = (t13) => {
          var r12;
          null == (r12 = e11.current) || r12.queue.push(t13);
        }, n12 = uQ.changesListeners.get(a11);
        return n12 || (n12 = [], uQ.changesListeners.set(a11, n12)), n12.push(t12), () => {
          var n13, i11;
          r11({ propsChanges: /* @__PURE__ */ new Map(), stateChanges: /* @__PURE__ */ new Map(), contextChanges: /* @__PURE__ */ new Map() }), e11.current.queue = [], uQ.changesListeners.set(a11, null != (i11 = null == (n13 = uQ.changesListeners.get(a11)) ? void 0 : n13.filter((e12) => e12 !== t12)) ? i11 : []);
        };
      }, [a11]), te(() => () => {
        r11({ propsChanges: /* @__PURE__ */ new Map(), stateChanges: /* @__PURE__ */ new Map(), contextChanges: /* @__PURE__ */ new Map() }), e11.current.queue = [];
      }, [a11]), t11;
    })(), [n10, a10] = e9(false), i10 = sO(r10) > 0;
    te(() => {
      if (!n10 && i10) {
        let e11 = setTimeout(() => {
          a10(true), requestAnimationFrame(() => {
            t10(true);
          });
        }, 0);
        return () => clearTimeout(e11);
      }
    }, [n10, i10]);
    let o10 = new Map(Array.from(r10.contextChanges.entries()).filter(([, e11]) => "initialized" === e11.kind).map(([e11, t11]) => [e11, "partially-initialized" === t11.kind ? null : t11.changes])), l10 = "focused" === uQ.inspectState.value.kind ? uQ.inspectState.value.fiber : null;
    if (l10) return rx(ez, { children: [rx(sF, {}), rx("div", { className: "overflow-hidden h-full flex flex-col gap-y-2", children: [rx("div", { className: "flex flex-col gap-2 px-3 pt-2", children: [rx("span", { className: "text-sm font-medium text-[#888]", children: ["Why did", " ", rx("span", { className: "text-[#A855F7]", children: X(l10) }), " ", "render?"] }), !i10 && rx("div", { className: "text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4", children: [rx("div", { children: "No changes detected since selecting" }), rx("div", { children: "The props, state, and context changes within your component will be reported here" })] })] }), rx("div", { className: l2("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"), children: [rx(sI, { changes: r10.propsChanges, title: "Changed Props", isExpanded: e10 }), rx(sI, { renderName: (e11) => {
      var t11;
      return sP(e11, null != (t11 = X(G(l10))) ? t11 : "Unknown Component");
    }, changes: r10.stateChanges, title: "Changed State", isExpanded: e10 }), rx(sI, { changes: o10, title: "Changed Context", isExpanded: e10 })] })] })] });
  }), sP = (e10, t10) => {
    if (Number.isNaN(Number(e10))) return e10;
    let r10 = Number.parseInt(e10);
    return rx("span", { className: "truncate", children: [rx("span", { className: "text-white", children: [r10, ((e11) => {
      let t11 = e11 % 100;
      if (t11 >= 11 && t11 <= 13) return "th";
      switch (e11 % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    })(r10), " hook", " "] }), rx("span", { style: { color: "#666" }, children: ["called in ", rx("i", { className: "text-[#A855F7] truncate", children: t10 })] })] });
  }, sF = t8(() => {
    let e10 = tr(null), t10 = tr(null), r10 = tr(null), n10 = tr({ isPropsChanged: false, isStateChanged: false, isContextChanged: false });
    return te(() => {
      let a10 = l5(() => {
        var n11, a11, i10;
        let o10 = [];
        for (let l10 of ((null == (n11 = e10.current) ? void 0 : n11.dataset.flash) === "true" && o10.push(e10.current), (null == (a11 = t10.current) ? void 0 : a11.dataset.flash) === "true" && o10.push(t10.current), (null == (i10 = r10.current) ? void 0 : i10.dataset.flash) === "true" && o10.push(r10.current), o10)) l10.classList.remove("count-flash-white"), l10.offsetWidth, l10.classList.add("count-flash-white");
      }, 400);
      return sm.subscribe((i10) => {
        var o10, l10, s10, c10, d10, u6, p2, h2, m2;
        if (!e10.current || !t10.current || !r10.current) return;
        let { currentIndex: f2, updates: g2 } = i10, v2 = g2[f2];
        v2 && 0 !== f2 && (a10(), n10.current = { isPropsChanged: (null != (s10 = null == (l10 = null == (o10 = v2.props) ? void 0 : o10.changes) ? void 0 : l10.size) ? s10 : 0) > 0, isStateChanged: (null != (u6 = null == (d10 = null == (c10 = v2.state) ? void 0 : c10.changes) ? void 0 : d10.size) ? u6 : 0) > 0, isContextChanged: (null != (m2 = null == (h2 = null == (p2 = v2.context) ? void 0 : p2.changes) ? void 0 : h2.size) ? m2 : 0) > 0 }, "true" !== e10.current.dataset.flash && (e10.current.dataset.flash = n10.current.isPropsChanged.toString()), "true" !== t10.current.dataset.flash && (t10.current.dataset.flash = n10.current.isStateChanged.toString()), "true" !== r10.current.dataset.flash && (r10.current.dataset.flash = n10.current.isContextChanged.toString()));
      });
    }, []), rx("button", { type: "button", className: l2("react-section-header", "overflow-hidden", "max-h-0", "transition-[max-height]"), children: rx("div", { className: l2("flex-1 react-scan-expandable"), children: rx("div", { className: "overflow-hidden", children: rx("div", { className: "flex items-center whitespace-nowrap", children: [rx("div", { className: "flex items-center gap-x-2", children: "What changed?" }), rx("div", { className: l2("ml-auto", "change-scope", "transition-opacity duration-300 delay-150"), children: [rx("div", { ref: e10, children: "props" }), rx("div", { ref: t10, children: "state" }), rx("div", { ref: r10, children: "context" })] })] }) }) }) });
  }), sL = (e10) => e10, sI = t8(({ title: e10, changes: t10, renderName: r10 = sL }) => {
    let [n10, a10] = e9(/* @__PURE__ */ new Set()), [i10, o10] = e9(/* @__PURE__ */ new Set()), l10 = Array.from(t10.entries());
    return 0 === t10.size ? null : rx("div", { children: [rx("div", { className: "text-xs text-[#888] mb-1.5", children: e10 }), rx("div", { className: "flex flex-col gap-2", children: l10.map(([t11, l11]) => {
      let s10 = i10.has(String(t11)), { value: c10, error: d10 } = cr(l11.previousValue), { value: u6, error: p2 } = cr(l11.currentValue), h2 = s6(c10, u6);
      return rx("div", { children: [rx("button", { onClick: () => {
        o10((e11) => {
          let r11 = new Set(e11);
          return r11.has(String(t11)) ? r11.delete(String(t11)) : r11.add(String(t11)), r11;
        });
      }, className: "flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs", children: rx("div", { className: "flex items-center gap-1.5 flex-1", children: [rx(oZ, { name: "icon-chevron-right", size: 12, className: l2("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]", { "rotate-90": s10 }) }), rx("div", { className: "whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5", children: [r10(l11.name), rx(sW, { count: l11.count, isFunction: "function" == typeof l11.currentValue, showWarning: 0 === h2.changes.length, forceFlash: true })] })] }) }), rx("div", { className: l2("react-scan-expandable", { "react-scan-expanded": s10 }), children: rx("div", { className: "pl-3 text-xs font-mono border-l-1 border-[#333]", children: rx("div", { className: "flex flex-col gap-0.5", children: d10 || p2 ? rx(sD, { currError: p2, prevError: d10 }) : h2.changes.length > 0 ? rx(sB, { change: l11, diff: h2, expandedFns: n10, renderName: r10, setExpandedFns: a10, title: e10 }) : rx(sU, { currValue: u6, entryKey: t11, expandedFns: n10, prevValue: c10, setExpandedFns: a10 }) }) }) })] }, t11);
    }) })] });
  }), sD = ({ prevError: e10, currError: t10 }) => rx(ez, { children: [e10 && rx("div", { className: "text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic", children: e10 }), t10 && rx("div", { className: "text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5", children: t10 })] }), sB = ({ diff: e10, title: t10, renderName: r10, change: n10, expandedFns: a10, setExpandedFns: i10 }) => e10.changes.map((o10, l10) => {
    let s10, { value: c10, error: d10 } = cr(o10.prevValue), { value: u6, error: p2 } = cr(o10.currentValue), h2 = "function" == typeof c10 || "function" == typeof u6;
    return "Props" === t10 && (s10 = o10.path.length > 0 ? `${r10(String(n10.name))}.${s9(o10.path)}` : void 0), "State" === t10 && o10.path.length > 0 && (s10 = `state.${s9(o10.path)}`), s10 || (s10 = s9(o10.path)), rx("div", { className: l2("flex flex-col gap-y-1", l10 < e10.changes.length - 1 && "mb-4"), children: [s10 && rx("div", { className: "text-[#666] text-[10px]", children: s10 }), rx("button", { type: "button", className: l2("group", "flex items-start", "py-[3px] px-1.5", "text-left text-[#f87171] bg-[#2a1515]", "rounded", "overflow-hidden break-all", h2 && "cursor-pointer"), onClick: h2 ? () => {
      let e11 = `${s9(o10.path)}-prev`;
      i10((t11) => {
        let r11 = new Set(t11);
        return r11.has(e11) ? r11.delete(e11) : r11.add(e11), r11;
      });
    } : void 0, children: [rx("span", { className: "w-3 flex items-center justify-center opacity-50", children: "-" }), rx("span", { className: "flex-1 whitespace-nowrap font-mono", children: d10 ? rx("span", { className: "italic text-[#f87171]", children: d10 }) : h2 ? rx("div", { className: "flex gap-1 items-start flex-col", children: [rx("div", { className: "flex gap-1 items-start w-full", children: [rx("span", { className: "flex-1 max-h-40", children: ce(c10, a10.has(`${s9(o10.path)}-prev`)) }), "function" == typeof c10 && rx(sM, { text: c10.toString(), className: "opacity-0 transition-opacity group-hover:opacity-100", children: ({ ClipboardIcon: e11 }) => rx(ez, { children: e11 }) })] }), (null == c10 ? void 0 : c10.toString()) === (null == u6 ? void 0 : u6.toString()) && rx("div", { className: "text-[10px] text-[#666] italic", children: "Function reference changed" })] }) : rx(sA, { value: c10, expanded: a10.has(`${s9(o10.path)}-prev`), onToggle: () => {
      let e11 = `${s9(o10.path)}-prev`;
      i10((t11) => {
        let r11 = new Set(t11);
        return r11.has(e11) ? r11.delete(e11) : r11.add(e11), r11;
      });
    }, isNegative: true }) })] }), rx("button", { type: "button", className: l2("group", "flex items-start", "py-[3px] px-1.5", "text-left text-[#4ade80] bg-[#1a2a1a]", "rounded", "overflow-hidden break-all", h2 && "cursor-pointer"), onClick: h2 ? () => {
      let e11 = `${s9(o10.path)}-current`;
      i10((t11) => {
        let r11 = new Set(t11);
        return r11.has(e11) ? r11.delete(e11) : r11.add(e11), r11;
      });
    } : void 0, children: [rx("span", { className: "w-3 flex items-center justify-center opacity-50", children: "+" }), rx("span", { className: "flex-1 whitespace-pre-wrap font-mono", children: p2 ? rx("span", { className: "italic text-[#4ade80]", children: p2 }) : h2 ? rx("div", { className: "flex gap-1 items-start flex-col", children: [rx("div", { className: "flex gap-1 items-start w-full", children: [rx("span", { className: "flex-1", children: ce(u6, a10.has(`${s9(o10.path)}-current`)) }), "function" == typeof u6 && rx(sM, { text: u6.toString(), className: "opacity-0 transition-opacity group-hover:opacity-100", children: ({ ClipboardIcon: e11 }) => rx(ez, { children: e11 }) })] }), (null == c10 ? void 0 : c10.toString()) === (null == u6 ? void 0 : u6.toString()) && rx("div", { className: "text-[10px] text-[#666] italic", children: "Function reference changed" })] }) : rx(sA, { value: u6, expanded: a10.has(`${s9(o10.path)}-current`), onToggle: () => {
      let e11 = `${s9(o10.path)}-current`;
      i10((t11) => {
        let r11 = new Set(t11);
        return r11.has(e11) ? r11.delete(e11) : r11.add(e11), r11;
      });
    }, isNegative: false }) })] })] }, `${s10}-${n10.name}-${l10}`);
  }), sU = ({ prevValue: e10, currValue: t10, entryKey: r10, expandedFns: n10, setExpandedFns: a10 }) => rx(ez, { children: [rx("div", { className: "group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded", children: [rx("span", { className: "w-3 flex items-center justify-center opacity-50", children: "-" }), rx("span", { className: "flex-1 overflow-hidden whitespace-pre-wrap font-mono", children: rx(sA, { value: e10, expanded: n10.has(`${String(r10)}-prev`), onToggle: () => {
    let e11 = `${String(r10)}-prev`;
    a10((t11) => {
      let r11 = new Set(t11);
      return r11.has(e11) ? r11.delete(e11) : r11.add(e11), r11;
    });
  }, isNegative: true }) })] }), rx("div", { className: "group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5", children: [rx("span", { className: "w-3 flex items-center justify-center opacity-50", children: "+" }), rx("span", { className: "flex-1 overflow-hidden whitespace-pre-wrap font-mono", children: rx(sA, { value: t10, expanded: n10.has(`${String(r10)}-current`), onToggle: () => {
    let e11 = `${String(r10)}-current`;
    a10((t11) => {
      let r11 = new Set(t11);
      return r11.has(e11) ? r11.delete(e11) : r11.add(e11), r11;
    });
  }, isNegative: false }) })] }), "object" == typeof t10 && null !== t10 && rx("div", { className: "text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1", children: [rx(oZ, { name: "icon-triangle-alert", className: "text-yellow-500 mb-px", size: 14 }), rx("span", { children: "Reference changed but objects are structurally the same" })] })] }), sW = ({ count: e10, forceFlash: t10, isFunction: r10, showWarning: n10 }) => {
    let a10 = tr(true), i10 = tr(null), o10 = tr(e10);
    return te(() => {
      let t11 = i10.current;
      t11 && o10.current !== e10 && (t11.classList.remove("count-flash"), t11.offsetWidth, t11.classList.add("count-flash"), o10.current = e10);
    }, [e10]), te(() => {
      if (a10.current) {
        a10.current = false;
        return;
      }
      if (t10) {
        let e11 = setTimeout(() => {
          var t11;
          null == (t11 = i10.current) || t11.classList.add("count-flash-white"), e11 = setTimeout(() => {
            var e12;
            null == (e12 = i10.current) || e12.classList.remove("count-flash-white");
          }, 300);
        }, 500);
        return () => {
          clearTimeout(e11);
        };
      }
    }, [t10]), rx("div", { ref: i10, className: "count-badge", children: [n10 && rx(oZ, { name: "icon-triangle-alert", className: "text-yellow-500 mb-px", size: 14 }), r10 && rx(oZ, { name: "icon-function", className: "text-[#A855F7] mb-px", size: 14 }), "x", e10] });
  }, sH = { lastRendered: /* @__PURE__ */ new Map(), expandedPaths: /* @__PURE__ */ new Set(), cleanup: () => {
    sH.lastRendered.clear(), sH.expandedPaths.clear(), sp.cleanupAll(), cu(), sv && (clearTimeout(sv), sv = null), sg = [], sm.value = sh;
  } }, sV = class extends e$ {
    constructor() {
      super(...arguments), oV(this, "state", { hasError: false, error: null }), oV(this, "handleReset", () => {
        this.setState({ hasError: false, error: null }), sH.cleanup();
      });
    }
    static getDerivedStateFromError(e10) {
      return { hasError: true, error: e10 };
    }
    render() {
      var e10;
      return this.state.hasError ? rx("div", { className: "p-4 bg-red-950/50 h-screen backdrop-blur-sm", children: [rx("div", { className: "flex items-center gap-2 mb-3 text-red-400 font-medium", children: [rx(oZ, { name: "icon-flame", className: "text-red-500", size: 16 }), "Something went wrong in the inspector"] }), rx("div", { className: "p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words", children: (null == (e10 = this.state.error) ? void 0 : e10.message) || JSON.stringify(this.state.error) }), rx("button", { type: "button", onClick: this.handleReset, className: "px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2", children: "Reset Inspector" })] }) : this.props.children;
    }
  }, sq = tR(() => l2("react-scan-inspector", "flex-1", "opacity-0", "overflow-y-auto overflow-x-hidden", "transition-opacity delay-0", "pointer-events-none", !st.value && "opacity-100 delay-300 pointer-events-auto")), sK = sd(() => {
    let e10 = tr(null), t10 = (t11) => {
      if (!t11) return;
      e10.current = t11;
      let { data: r10, shouldUpdate: n10 } = cv(t11);
      if (n10) {
        var a10 = { timestamp: Date.now(), fiberInfo: ca(t11), props: r10.fiberProps, state: r10.fiberState, context: r10.fiberContext, stateNames: cd(t11) }, i10 = t11;
        if (sg.push({ update: a10, fiber: i10 }), !sv) {
          let e11 = () => {
            (() => {
              let e12;
              if (0 === sg.length) return;
              let t12 = [...sg], { updates: r11, totalUpdates: n11, currentIndex: a11, isViewingHistory: i11 } = sm.value, o10 = [...r11], l10 = n11;
              for (let { update: e13 } of t12) o10.length >= 1e3 && o10.shift(), o10.push(e13), l10++;
              let s10 = Math.max(0, l10 - 1e3);
              e12 = i11 ? a11 === n11 - 1 ? o10.length - 1 : 0 === a11 ? 0 : 0 === s10 ? a11 : a11 - 1 : o10.length - 1;
              let c10 = t12[t12.length - 1];
              sm.value = { ...sm.value, latestFiber: c10.fiber, updates: o10, totalUpdates: l10, windowOffset: s10, currentIndex: e12, isViewingHistory: i11 }, sg = sg.slice(t12.length);
            })(), sv = null, sg.length > 0 && (sv = setTimeout(e11, 96));
          };
          sv = setTimeout(e11, 96);
        }
      }
    };
    return t1(() => {
      let r10 = uQ.inspectState.value;
      tw(() => {
        var n10;
        if ("focused" !== r10.kind || !r10.focusedDomElement) {
          e10.current = null, sH.cleanup();
          return;
        }
        "focused" === r10.kind && (st.value = false);
        let { parentCompositeFiber: a10 } = s2(r10.focusedDomElement, r10.fiber);
        if (!a10) {
          uQ.inspectState.value = { kind: "inspect-off" }, so.value = { view: "none" };
          return;
        }
        (null == (n10 = e10.current) ? void 0 : n10.type) !== a10.type && (e10.current = a10, sH.cleanup(), t10(a10));
      });
    }), t1(() => {
      sf.value, tw(() => {
        let r10 = uQ.inspectState.value;
        if ("focused" !== r10.kind || !r10.focusedDomElement) {
          e10.current = null, sH.cleanup();
          return;
        }
        let { parentCompositeFiber: n10 } = s2(r10.focusedDomElement, r10.fiber);
        if (!n10) {
          uQ.inspectState.value = { kind: "inspect-off" }, so.value = { view: "none" };
          return;
        }
        t10(n10), r10.focusedDomElement.isConnected || (e10.current = null, sH.cleanup(), uQ.inspectState.value = { kind: "inspecting", hoveredDomElement: null });
      });
    }), te(() => () => {
      sH.cleanup();
    }, []), rx(sV, { children: rx("div", { className: sq, children: rx("div", { className: "w-full h-full", children: rx(sj, {}) }) }) });
  }), sG = sd(() => "focused" !== uQ.inspectState.value.kind ? null : rx(sV, { children: [rx(sK, {}), rx(sE, {})] })), sX = (e10) => {
    var t10, r10, n10, a10;
    if ("__REACT_DEVTOOLS_GLOBAL_HOOK__" in window) {
      let r11 = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!(null == r11 ? void 0 : r11.renderers)) return null;
      for (let [, n11] of Array.from(r11.renderers)) try {
        let r12 = null == (t10 = n11.findFiberByHostInstance) ? void 0 : t10.call(n11, e10);
        if (r12) return r12;
      } catch {
      }
    }
    if ("_reactRootContainer" in e10) {
      let t11 = e10._reactRootContainer;
      return null != (a10 = null == (n10 = null == (r10 = null == t11 ? void 0 : t11._internalRoot) ? void 0 : r10.current) ? void 0 : n10.child) ? a10 : null;
    }
    for (let t11 in e10) if (t11.startsWith("__reactInternalInstance$") || t11.startsWith("__reactFiber")) return e10[t11];
    return null;
  }, sJ = (e10) => {
    let t10 = e10;
    for (; t10; ) {
      if (t10.stateNode instanceof Element) return t10.stateNode;
      if (!t10.child) break;
      t10 = t10.child;
    }
    for (; t10; ) {
      if (t10.stateNode instanceof Element) return t10.stateNode;
      if (!t10.return) break;
      t10 = t10.return;
    }
    return null;
  }, sY = (e10) => {
    if (!e10) return null;
    try {
      let t10 = sX(e10);
      if (!t10) return null;
      let r10 = sZ(t10);
      return r10 ? r10[0] : null;
    } catch {
      return null;
    }
  }, sZ = (e10) => {
    let t10 = e10, r10 = null;
    for (; t10; ) {
      if (I(t10)) return [t10, r10];
      L(t10) && !r10 && (r10 = t10), t10 = t10.return;
    }
    return null;
  }, sQ = (e10, t10) => !!W(t10, (t11) => t11 === e10), s0 = async (e10) => {
    let t10 = sY(e10);
    if (!t10) return null;
    let r10 = sJ(t10);
    return r10 ? await new Promise((e11) => {
      let t11 = new IntersectionObserver((r11) => {
        var n10, a10;
        t11.disconnect(), e11(null != (a10 = null == (n10 = r11[0]) ? void 0 : n10.boundingClientRect) ? a10 : null);
      });
      t11.observe(r10);
    }) : null;
  }, s1 = (e10) => {
    let t10 = sY(e10);
    if (!t10 || !sJ(t10)) return {};
    let r10 = sZ(t10);
    if (!r10) return {};
    let [n10] = r10;
    return { parentCompositeFiber: n10 };
  }, s2 = (e10, t10) => {
    var r10, n10, a10, i10;
    if (!e10.isConnected) return {};
    let o10 = null != t10 ? t10 : sY(e10);
    if (!o10) return {};
    let l10 = o10, s10 = null, c10 = null;
    for (; l10; ) {
      if (!l10.stateNode) {
        l10 = l10.return;
        continue;
      }
      if (null == (r10 = u0.instrumentation) ? void 0 : r10.fiberRoots.has(l10.stateNode)) {
        s10 = l10, c10 = l10.stateNode.current;
        break;
      }
      l10 = l10.return;
    }
    if (!s10 || !c10 || !(o10 = sQ(o10, c10) ? o10 : null != (n10 = o10.alternate) ? n10 : o10) || !sJ(o10)) return {};
    let d10 = null == (a10 = sZ(o10)) ? void 0 : a10[0];
    return d10 ? { parentCompositeFiber: sQ(d10, c10) ? d10 : null != (i10 = d10.alternate) ? i10 : d10 } : {};
  }, s5 = (e10) => {
    var t10, r10, n10;
    let a10 = null != (t10 = e10.memoizedProps) ? t10 : {}, i10 = null != (n10 = null == (r10 = e10.alternate) ? void 0 : r10.memoizedProps) ? n10 : {}, o10 = [];
    for (let e11 in a10) {
      if ("children" === e11) continue;
      let t11 = a10[e11], r11 = i10[e11];
      oX(t11, r11) || o10.push({ name: e11, value: t11, prevValue: r11, type: 1 });
    }
    return o10;
  }, s4 = /* @__PURE__ */ new Set(["HTML", "HEAD", "META", "TITLE", "BASE", "SCRIPT", "SCRIPT", "STYLE", "LINK", "NOSCRIPT", "SOURCE", "TRACK", "EMBED", "OBJECT", "PARAM", "TEMPLATE", "PORTAL", "SLOT", "AREA", "XML", "DOCTYPE", "COMMENT"]), s3 = (e10, t10 = true) => {
    if (e10.stateNode && "nodeType" in e10.stateNode) {
      let r11 = e10.stateNode;
      return t10 && r11.tagName && s4.has(r11.tagName.toLowerCase()) ? null : r11;
    }
    let r10 = e10.child;
    for (; r10; ) {
      let e11 = s3(r10, t10);
      if (e11) return e11;
      r10 = r10.sibling;
    }
    return null;
  }, s7 = (e10 = document.body) => {
    let t10 = [], r10 = (e11, n10 = 0) => {
      var a10;
      let i10 = ((e12) => {
        if (!e12) return null;
        let { parentCompositeFiber: t11 } = s1(e12);
        return t11 && s3(t11) === e12 ? e12 : null;
      })(e11);
      if (i10) {
        let { parentCompositeFiber: e12 } = s1(i10);
        if (!e12) return;
        t10.push({ element: i10, depth: n10, name: null != (a10 = X(e12.type)) ? a10 : "Unknown", fiber: e12 });
      }
      for (let t11 of Array.from(e11.children)) r10(t11, i10 ? n10 + 1 : n10);
    };
    return r10(e10), t10;
  }, s8 = (e10) => {
    try {
      if (null === e10) return "null";
      if (void 0 === e10) return "undefined";
      if (cn(e10)) return "Promise";
      if ("function" == typeof e10) {
        let t10 = e10.toString();
        try {
          return t10.replace(/\s+/g, " ").replace(/{\s+/g, "{\n  ").replace(/;\s+/g, ";\n  ").replace(/}\s*$/g, "\n}").replace(/\(\s+/g, "(").replace(/\s+\)/g, ")").replace(/,\s+/g, ", ");
        } catch {
          return t10;
        }
      }
      switch (true) {
        case e10 instanceof Date:
          return e10.toISOString();
        case e10 instanceof RegExp:
          return e10.toString();
        case e10 instanceof Error:
          return `${e10.name}: ${e10.message}`;
        case e10 instanceof Map:
          return JSON.stringify(Array.from(e10.entries()), null, 2);
        case e10 instanceof Set:
          return JSON.stringify(Array.from(e10), null, 2);
        case e10 instanceof DataView:
          return JSON.stringify(Array.from(new Uint8Array(e10.buffer)), null, 2);
        case e10 instanceof ArrayBuffer:
          return JSON.stringify(Array.from(new Uint8Array(e10)), null, 2);
        case (ArrayBuffer.isView(e10) && "length" in e10):
          return JSON.stringify(Array.from(e10), null, 2);
        case Array.isArray(e10):
        case "object" == typeof e10:
          return JSON.stringify(e10, null, 2);
        default:
          return String(e10);
      }
    } catch {
      return String(e10);
    }
  }, s6 = (e10, t10, r10 = [], n10 = /* @__PURE__ */ new WeakSet()) => {
    if (e10 === t10) return { type: "primitive", changes: [], hasDeepChanges: false };
    if ("function" == typeof e10 && "function" == typeof t10) {
      let n11 = ((e11, t11) => {
        try {
          if ("function" != typeof e11 || "function" != typeof t11) return false;
          return e11.toString() === t11.toString();
        } catch {
          return false;
        }
      })(e10, t10);
      return { type: "primitive", changes: [{ path: r10, prevValue: e10, currentValue: t10, sameFunction: n11 }], hasDeepChanges: !n11 };
    }
    if (null === e10 || null === t10 || void 0 === e10 || void 0 === t10 || "object" != typeof e10 || "object" != typeof t10) return { type: "primitive", changes: [{ path: r10, prevValue: e10, currentValue: t10 }], hasDeepChanges: true };
    if (n10.has(e10) || n10.has(t10)) return { type: "object", changes: [{ path: r10, prevValue: "[Circular]", currentValue: "[Circular]" }], hasDeepChanges: false };
    n10.add(e10), n10.add(t10);
    let a10 = /* @__PURE__ */ new Set([...Object.keys(e10), ...Object.keys(t10)]), i10 = [], o10 = false;
    for (let l10 of a10) {
      let a11 = e10[l10], s10 = t10[l10];
      if (a11 !== s10) if ("object" == typeof a11 && "object" == typeof s10 && null !== a11 && null !== s10) {
        let e11 = s6(a11, s10, [...r10, l10], n10);
        i10.push(...e11.changes), e11.hasDeepChanges && (o10 = true);
      } else i10.push({ path: [...r10, l10], prevValue: a11, currentValue: s10 }), o10 = true;
    }
    return { type: "object", changes: i10, hasDeepChanges: o10 };
  }, s9 = (e10) => 0 === e10.length ? "" : e10.reduce((e11, t10, r10) => /^\d+$/.test(t10) ? `${e11}[${t10}]` : 0 === r10 ? t10 : `${e11}.${t10}`, ""), ce = (e10, t10 = false) => {
    try {
      let r10 = e10.toString(), n10 = r10.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);
      if (!n10) return "\u0192";
      let a10 = (n10[1] || n10[2] || "").replace(/\s+/g, "");
      if (!t10) return `\u0192 (${a10}) => ...`;
      return (function(e11) {
        let t11 = e11.replace(/\s+/g, " ").trim(), r11 = [], n11 = "";
        for (let e12 = 0; e12 < t11.length; e12++) {
          let a12 = t11[e12];
          if ("=" === a12 && ">" === t11[e12 + 1]) {
            n11.trim() && r11.push(n11.trim()), r11.push("=>"), n11 = "", e12++;
            continue;
          }
          /[(){}[\];,<>:\?!]/.test(a12) ? (n11.trim() && r11.push(n11.trim()), r11.push(a12), n11 = "") : /\s/.test(a12) ? (n11.trim() && r11.push(n11.trim()), n11 = "") : n11 += a12;
        }
        n11.trim() && r11.push(n11.trim());
        let a11 = [];
        for (let e12 = 0; e12 < r11.length; e12++) {
          let t12 = r11[e12], n12 = r11[e12 + 1];
          "(" === t12 && ")" === n12 || "[" === t12 && "]" === n12 || "{" === t12 && "}" === n12 || "<" === t12 && ">" === n12 ? (a11.push(t12 + n12), e12++) : a11.push(t12);
        }
        let i10 = /* @__PURE__ */ new Set(), o10 = /* @__PURE__ */ new Set();
        function l10(e12, t12, r12) {
          let n12 = 0;
          for (let i11 = r12; i11 < a11.length; i11++) {
            let r13 = a11[i11];
            if (r13 === e12) n12++;
            else if (r13 === t12 && 0 == --n12) return i11;
          }
          return -1;
        }
        for (let e12 = 0; e12 < a11.length; e12++) if ("(" === a11[e12]) {
          let t12 = l10("(", ")", e12);
          if (-1 !== t12 && "=>" === a11[t12 + 1]) for (let r12 = e12; r12 <= t12; r12++) i10.add(r12);
        }
        for (let e12 = 1; e12 < a11.length; e12++) {
          let t12 = a11[e12 - 1], r12 = a11[e12];
          if (/^[a-zA-Z0-9_$]+$/.test(t12) && "<" === r12) {
            let t13 = l10("<", ">", e12);
            if (-1 !== t13) for (let r13 = e12; r13 <= t13; r13++) o10.add(r13);
          }
        }
        let s10 = 0, c10 = [], d10 = "";
        function u6() {
          d10.trim() && c10.push(d10.replace(/\s+$/, "")), d10 = "";
        }
        function p2() {
          u6(), d10 = "  ".repeat(s10);
        }
        let h2 = [];
        function m2() {
          return h2.length ? h2[h2.length - 1] : null;
        }
        function f2(e12, t12 = false) {
          d10.trim() ? t12 || /^[),;:\].}>]$/.test(e12) ? d10 += e12 : d10 += ` ${e12}` : d10 += e12;
        }
        for (let e12 = 0; e12 < a11.length; e12++) {
          let t12 = a11[e12], r12 = a11[e12 + 1] || "";
          if (["(", "{", "[", "<"].includes(t12)) f2(t12), h2.push(t12), "{" === t12 ? (s10++, p2()) : ("(" === t12 || "[" === t12 || "<" === t12) && (i10.has(e12) && "(" === t12 || o10.has(e12) && "<" === t12 || r12 !== { "(": ")", "[": "]", "<": ">" }[t12] && "()" !== r12 && "[]" !== r12 && "<>" !== r12 && (s10++, p2()));
          else if ([")", "}", "]", ">"].includes(t12)) {
            let r13 = m2();
            ")" === t12 && "(" === r13 || "]" === t12 && "[" === r13 || ">" === t12 && "<" === r13 ? i10.has(e12) && ")" === t12 || o10.has(e12) && ">" === t12 || (s10 = Math.max(s10 - 1, 0), p2()) : "}" === t12 && "{" === r13 && (s10 = Math.max(s10 - 1, 0), p2()), h2.pop(), f2(t12), "}" === t12 && p2();
          } else if (/^\(\)|\[\]|\{\}|\<\>$/.test(t12)) f2(t12);
          else if ("=>" === t12) f2(t12);
          else if (";" === t12) f2(t12, true), p2();
          else if ("," === t12) {
            f2(t12, true);
            let r13 = m2();
            !(i10.has(e12) && "(" === r13) && !(o10.has(e12) && "<" === r13) && r13 && ["{", "[", "(", "<"].includes(r13) && p2();
          } else f2(t12);
        }
        return u6(), c10.join("\n").replace(/\n\s*\n+/g, "\n").trim();
      })(r10);
    } catch {
      return "\u0192";
    }
  }, ct = (e10) => {
    if (null === e10) return "null";
    if (void 0 === e10) return "undefined";
    if ("string" == typeof e10) return `"${e10.length > 150 ? `${e10.slice(0, 20)}...` : e10}"`;
    if ("number" == typeof e10 || "boolean" == typeof e10) return String(e10);
    if ("function" == typeof e10) return ce(e10);
    if (Array.isArray(e10)) return `Array(${e10.length})`;
    if (e10 instanceof Map) return `Map(${e10.size})`;
    if (e10 instanceof Set) return `Set(${e10.size})`;
    if (e10 instanceof Date) return e10.toISOString();
    if (e10 instanceof RegExp) return e10.toString();
    if (e10 instanceof Error) return `${e10.name}: ${e10.message}`;
    if ("object" == typeof e10) {
      let t10 = Object.keys(e10);
      return `{${t10.length > 2 ? `${t10.slice(0, 2).join(", ")}, ...` : t10.join(", ")}}`;
    }
    return String(e10);
  }, cr = (e10) => {
    var t10;
    if (null == e10 || "function" == typeof e10 || "object" != typeof e10) return { value: e10 };
    if (cn(e10)) return { value: "Promise" };
    try {
      let r10 = Object.getPrototypeOf(e10);
      if (r10 === Promise.prototype || (null == (t10 = null == r10 ? void 0 : r10.constructor) ? void 0 : t10.name) === "Promise") return { value: "Promise" };
      return { value: e10 };
    } catch {
      return { value: null, error: "Error accessing value" };
    }
  }, cn = (e10) => !!e10 && (e10 instanceof Promise || "object" == typeof e10 && "then" in e10), ca = (e10) => {
    var t10, r10;
    let n10 = q(e10);
    return { displayName: X(e10) || "Unknown", type: e10.type, key: e10.key, id: e10.index, selfTime: null != (t10 = null == n10 ? void 0 : n10.selfTime) ? t10 : null, totalTime: null != (r10 = null == n10 ? void 0 : n10.totalTime) ? r10 : null };
  }, ci = /* @__PURE__ */ new Map(), co = /* @__PURE__ */ new Map(), cl = /* @__PURE__ */ new Map(), cs = null, cc = /\[(?<name>\w+),\s*set\w+\]/g, cd = (e10) => {
    var t10, r10;
    let n10 = (null == (r10 = null == (t10 = e10.type) ? void 0 : t10.toString) ? void 0 : r10.call(t10)) || "";
    return n10 ? Array.from(n10.matchAll(cc), (e11) => {
      var t11, r11;
      return null != (r11 = null == (t11 = e11.groups) ? void 0 : t11.name) ? r11 : "";
    }) : [];
  }, cu = () => {
    ci.clear(), co.clear(), cl.clear(), cs = null;
  }, cp = (e10, t10, r10, n10) => {
    let a10 = e10.get(t10), i10 = e10 === ci || e10 === cl, o10 = !oX(r10, n10);
    if (!a10) return e10.set(t10, { count: o10 && i10 ? 1 : 0, currentValue: r10, previousValue: n10, lastUpdated: Date.now() }), { hasChanged: o10, count: o10 && i10 ? 1 : +!i10 };
    if (!oX(a10.currentValue, r10)) {
      let n11 = a10.count + 1;
      return e10.set(t10, { count: n11, currentValue: r10, previousValue: a10.currentValue, lastUpdated: Date.now() }), { hasChanged: true, count: n11 };
    }
    return { hasChanged: false, count: a10.count };
  }, ch = (e10) => {
    if (!e10) return {};
    if (0 === e10.tag || 11 === e10.tag || 15 === e10.tag || 14 === e10.tag) {
      let t10 = e10.memoizedState, r10 = {}, n10 = 0;
      for (; t10; ) t10.queue && void 0 !== t10.memoizedState && (r10[n10] = t10.memoizedState), t10 = t10.next, n10++;
      return r10;
    }
    return 1 === e10.tag && e10.memoizedState || {};
  }, cm = (e10) => {
    var t10;
    let r10 = e10.memoizedProps || {}, n10 = (null == (t10 = e10.alternate) ? void 0 : t10.memoizedProps) || {}, a10 = {}, i10 = {};
    for (let e11 of Object.keys(r10)) e11 in r10 && (a10[e11] = r10[e11], i10[e11] = n10[e11]);
    return { current: a10, prev: i10, changes: s5(e10).map((e11) => ({ name: e11.name, value: e11.value, prevValue: e11.prevValue })) };
  }, cf = (e10) => {
    let t10 = ch(e10), r10 = e10.alternate ? ch(e10.alternate) : {}, n10 = [];
    for (let [a10, i10] of Object.entries(t10)) {
      let t11 = 1 === e10.tag ? a10 : Number(a10);
      e10.alternate && !oX(r10[a10], i10) && n10.push({ name: t11, value: i10, prevValue: r10[a10] });
    }
    return { current: t10, prev: r10, changes: n10 };
  }, cg = (e10) => {
    let t10 = cb(e10), r10 = e10.alternate ? cb(e10.alternate) : /* @__PURE__ */ new Map(), n10 = {}, a10 = {}, i10 = [], o10 = /* @__PURE__ */ new Set();
    for (let [e11, l10] of t10) {
      let t11 = l10.displayName;
      if (o10.has(e11)) continue;
      o10.add(e11), n10[t11] = l10.value;
      let s10 = r10.get(e11);
      s10 && (a10[t11] = s10.value, oX(s10.value, l10.value) || i10.push({ name: t11, value: l10.value, prevValue: s10.value, contextType: e11 }));
    }
    return { current: n10, prev: a10, changes: i10 };
  }, cv = (e10) => {
    let t10, r10 = () => ({ current: [], changes: /* @__PURE__ */ new Set(), changesCounts: /* @__PURE__ */ new Map() });
    if (!e10) return { data: { fiberProps: r10(), fiberState: r10(), fiberContext: r10() }, shouldUpdate: false };
    let n10 = false, a10 = (t10 = e10.type !== cs, cs = e10.type, t10), i10 = r10();
    if (e10.memoizedProps) {
      let { current: t11, changes: r11 } = cm(e10);
      for (let [e11, r12] of Object.entries(t11)) i10.current.push({ name: e11, value: cn(r12) ? { type: "promise", displayValue: "Promise" } : r12 });
      for (let e11 of r11) {
        let { hasChanged: t12, count: r12 } = cp(ci, e11.name, e11.value, e11.prevValue);
        t12 && (n10 = true, i10.changes.add(e11.name), i10.changesCounts.set(e11.name, r12));
      }
    }
    let o10 = r10(), { current: l10, changes: s10 } = cf(e10);
    for (let [t11, r11] of Object.entries(l10)) {
      let n11 = 1 === e10.tag ? t11 : Number(t11);
      o10.current.push({ name: n11, value: r11 });
    }
    for (let e11 of s10) {
      let { hasChanged: t11, count: r11 } = cp(co, e11.name, e11.value, e11.prevValue);
      t11 && (n10 = true, o10.changes.add(e11.name), o10.changesCounts.set(e11.name, r11));
    }
    let c10 = r10(), { current: d10, changes: u6 } = cg(e10);
    for (let [e11, t11] of Object.entries(d10)) c10.current.push({ name: e11, value: t11 });
    if (!a10) for (let e11 of u6) {
      let { hasChanged: t11, count: r11 } = cp(cl, e11.name, e11.value, e11.prevValue);
      t11 && (n10 = true, c10.changes.add(e11.name), c10.changesCounts.set(e11.name, r11));
    }
    return n10 || a10 || (i10.changes.clear(), o10.changes.clear(), c10.changes.clear()), { data: { fiberProps: i10, fiberState: o10, fiberContext: c10 }, shouldUpdate: n10 || a10 };
  }, cw = /* @__PURE__ */ new WeakMap(), cb = (e10) => {
    var t10;
    if (!e10) return /* @__PURE__ */ new Map();
    let r10 = cw.get(e10);
    if (r10) return r10;
    let n10 = /* @__PURE__ */ new Map(), a10 = e10;
    for (; a10; ) {
      let e11 = a10.dependencies;
      if (null == e11 ? void 0 : e11.firstContext) {
        let r11 = e11.firstContext;
        for (; r11; ) {
          let e12 = r11.memoizedValue, a11 = null == (t10 = r11.context) ? void 0 : t10.displayName;
          if (n10.has(e12) || n10.set(r11.context, { value: e12, displayName: null != a11 ? a11 : "UnnamedContext", contextType: null }), r11 === r11.next) break;
          r11 = r11.next;
        }
      }
      a10 = a10.return;
    }
    return cw.set(e10, n10), n10;
  }, cy = (e10) => {
    let t10 = () => ({ current: [], changes: /* @__PURE__ */ new Set(), changesCounts: /* @__PURE__ */ new Map() });
    if (!e10) return { fiberProps: t10(), fiberState: t10(), fiberContext: t10() };
    let r10 = t10();
    if (e10.memoizedProps) {
      let { current: t11, changes: n11 } = cm(e10);
      for (let [e11, n12] of Object.entries(t11)) r10.current.push({ name: e11, value: cn(n12) ? { type: "promise", displayValue: "Promise" } : n12 });
      for (let e11 of n11) r10.changes.add(e11.name), r10.changesCounts.set(e11.name, 1);
    }
    let n10 = t10();
    if (e10.memoizedState) {
      let { current: t11, changes: r11 } = cf(e10);
      for (let [e11, r12] of Object.entries(t11)) n10.current.push({ name: e11, value: cn(r12) ? { type: "promise", displayValue: "Promise" } : r12 });
      for (let e11 of r11) n10.changes.add(e11.name), n10.changesCounts.set(e11.name, 1);
    }
    let a10 = t10(), { current: i10, changes: o10 } = cg(e10);
    for (let [e11, t11] of Object.entries(i10)) a10.current.push({ name: e11, value: cn(t11) ? { type: "promise", displayValue: "Promise" } : t11 });
    for (let e11 of o10) a10.changes.add(e11.name), a10.changesCounts.set(e11.name, 1);
    return { fiberProps: r10, fiberState: n10, fiberContext: a10 };
  }, cx = { mount: 1, update: 2, unmount: 4 }, c_ = 0, ck = performance.now(), cN = 0, cS = false, cE = () => {
    cN++;
    let e10 = performance.now();
    e10 - ck >= 1e3 && (c_ = cN, cN = 0, ck = e10), requestAnimationFrame(cE);
  }, cM = () => (cS || (cS = true, cE(), c_ = 60), c_), cC = 0, cT = /* @__PURE__ */ new WeakMap();
  function cA(e10, t10) {
    var r10, n10;
    let a10;
    if (!e10 || !t10) return;
    let i10 = e10.memoizedValue, o10 = { type: 4, name: null != (r10 = e10.context.displayName) ? r10 : "Context.Provider", value: i10, contextType: (n10 = e10.context, (a10 = cT.get(n10)) || (cC++, cT.set(n10, cC), cC)) };
    this.push(o10);
  }
  var cz = /* @__PURE__ */ new Map(), c$ = false, cR = () => Array.from(cz.values()), cO = /* @__PURE__ */ new WeakMap();
  function cj(e10) {
    return String(Q(e10));
  }
  function cP(e10) {
    let t10 = cj(e10), r10 = cO.get(G(e10));
    if (r10) return r10.get(t10);
  }
  var cF = (e10, t10) => {
    let r10 = t10 - e10;
    return 0.5 > Math.abs(r10) ? t10 : e10 + 0.2 * r10;
  }, cL = "115,97,230";
  function cI(e10, t10) {
    return t10[0] - e10[0];
  }
  function cD([e10, t10]) {
    let r10 = `${t10.slice(0, 4).join(", ")} \xD7${e10}`;
    return r10.length > 40 && (r10 = `${r10.slice(0, 40)}\u2026`), r10;
  }
  var cB = (e10) => {
    let t10 = /* @__PURE__ */ new Map();
    for (let { name: r11, count: n11 } of e10) t10.set(r11, (t10.get(r11) || 0) + n11);
    let r10 = /* @__PURE__ */ new Map();
    for (let [e11, n11] of t10) {
      let t11 = r10.get(n11);
      t11 ? t11.push(e11) : r10.set(n11, [e11]);
    }
    let n10 = [...r10.entries()].sort(cI), a10 = cD(n10[0]);
    for (let e11 = 1, t11 = n10.length; e11 < t11; e11++) a10 += ", " + cD(n10[e11]);
    return a10.length > 40 ? `${a10.slice(0, 40)}\u2026` : a10;
  }, cU = (e10) => {
    let t10 = 0;
    for (let r10 of e10) t10 += r10.width * r10.height;
    return t10;
  }, cW = (e10, t10) => {
    for (let { id: r10, name: n10, count: a10, x: i10, y: o10, width: l10, height: s10, didCommit: c10 } of t10) {
      let t11 = { id: r10, name: n10, count: a10, x: i10, y: o10, width: l10, height: s10, frame: 0, targetX: i10, targetY: o10, targetWidth: l10, targetHeight: s10, didCommit: c10 }, d10 = String(t11.id), u6 = e10.get(d10);
      u6 ? (u6.count++, u6.frame = 0, u6.targetX = i10, u6.targetY = o10, u6.targetWidth = l10, u6.targetHeight = s10, u6.didCommit = c10) : e10.set(d10, t11);
    }
  }, cH = (e10, t10, r10) => {
    for (let n10 of e10.values()) {
      let e11 = n10.x - t10, a10 = n10.y - r10;
      n10.targetX = e11, n10.targetY = a10;
    }
  }, cV = null, cq = null, cK = null, cG = 1, cX = null, cJ = /* @__PURE__ */ new Map(), cY = /* @__PURE__ */ new Map(), cZ = /* @__PURE__ */ new Set(), cQ = (e10) => {
    let t10, r10, n10, a10, i10 = e10[0];
    if (1 === e10.length) return i10;
    for (let i11 = 0, o10 = e10.length; i11 < o10; i11++) {
      let o11 = e10[i11];
      t10 = null == t10 ? o11.x : Math.min(t10, o11.x), r10 = null == r10 ? o11.y : Math.min(r10, o11.y), n10 = null == n10 ? o11.x + o11.width : Math.max(n10, o11.x + o11.width), a10 = null == a10 ? o11.y + o11.height : Math.max(a10, o11.y + o11.height);
    }
    return null == t10 || null == r10 || null == n10 || null == a10 ? e10[0] : new DOMRect(t10, r10, n10 - t10, a10 - r10);
  };
  function c0(e10, t10) {
    let r10 = [];
    for (let t11 of e10) {
      let e11 = t11.target;
      this.seenElements.has(e11) || (this.seenElements.add(e11), r10.push(t11));
    }
    r10.length > 0 && this.resolveNext && (this.resolveNext(r10), this.resolveNext = null), this.seenElements.size === this.uniqueElements.size && (t10.disconnect(), this.done = true, this.resolveNext && this.resolveNext([]));
  }
  var c1 = async function* (e10) {
    let t10 = { uniqueElements: new Set(e10), seenElements: /* @__PURE__ */ new Set(), resolveNext: null, done: false }, r10 = new IntersectionObserver(c0.bind(t10));
    for (let e11 of t10.uniqueElements) r10.observe(e11);
    for (; !t10.done; ) {
      let e11 = await new Promise((e12) => {
        t10.resolveNext = e12;
      });
      e11.length > 0 && (yield e11);
    }
  }, c2 = "u" > typeof SharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, c5 = async () => {
    let e10 = [];
    for (let t11 of cZ) {
      let r10 = cY.get(t11);
      if (r10) for (let t12 = 0; t12 < r10.elements.length; t12++) r10.elements[t12] instanceof Element && e10.push(r10.elements[t12]);
    }
    let t10 = /* @__PURE__ */ new Map();
    for await (let r10 of c1(e10)) {
      for (let e12 of r10) {
        let r11 = e12.target, n11 = e12.intersectionRect;
        e12.isIntersecting && n11.width && n11.height && t10.set(r11, n11);
      }
      let e11 = [], n10 = [], a10 = [];
      for (let r11 of cZ) {
        let i10 = cY.get(r11);
        if (!i10) continue;
        let o10 = [];
        for (let e12 = 0; e12 < i10.elements.length; e12++) {
          let r12 = i10.elements[e12], n11 = t10.get(r12);
          n11 && o10.push(n11);
        }
        o10.length && (e11.push(i10), n10.push(cQ(o10)), a10.push(Q(r11)));
      }
      if (e11.length > 0) {
        let t11, r11 = new c2(7 * e11.length * 4), i10 = new Float32Array(r11), o10 = Array(e11.length);
        for (let r12 = 0, l10 = e11.length; r12 < l10; r12++) {
          let l11 = e11[r12], s10 = a10[r12], { x: c10, y: d10, width: u6, height: p2 } = n10[r12], { count: h2, name: m2, didCommit: f2 } = l11;
          if (cV) {
            let e12 = 7 * r12;
            i10[e12] = s10, i10[e12 + 1] = h2, i10[e12 + 2] = c10, i10[e12 + 3] = d10, i10[e12 + 4] = u6, i10[e12 + 5] = p2, i10[e12 + 6] = f2, o10[r12] = m2;
          } else t11 || (t11 = Array(e11.length)), t11[r12] = { id: s10, name: m2, count: h2, x: c10, y: d10, width: u6, height: p2, didCommit: f2 };
        }
        cV ? cV.postMessage({ type: "draw-outlines", data: r11, names: o10 }) : cq && cK && t11 && (cW(cJ, t11), cX || (cX = requestAnimationFrame(c4)));
      }
    }
    for (let e11 of cZ) cY.delete(e11), cZ.delete(e11);
  }, c4 = () => {
    cK && cq && (cX = ((e10, t10, r10, n10) => {
      e10.clearRect(0, 0, t10.width / r10, t10.height / r10);
      let a10 = /* @__PURE__ */ new Map(), i10 = /* @__PURE__ */ new Map();
      for (let e11 of n10.values()) {
        let { x: t11, y: r11, width: n11, height: o11, targetX: l10, targetY: s10, targetWidth: c10, targetHeight: d10, frame: u6 } = e11;
        l10 !== t11 && (e11.x = cF(t11, l10)), s10 !== r11 && (e11.y = cF(r11, s10)), c10 !== n11 && (e11.width = cF(n11, c10)), d10 !== o11 && (e11.height = cF(o11, d10));
        let p2 = `${null != l10 ? l10 : t11},${null != s10 ? s10 : r11}`, h2 = `${p2},${null != c10 ? c10 : n11},${null != d10 ? d10 : o11}`, m2 = a10.get(p2);
        m2 ? m2.push(e11) : a10.set(p2, [e11]);
        let f2 = 1 - u6 / 45;
        e11.frame++;
        let g2 = i10.get(h2) || { x: t11, y: r11, width: n11, height: o11, alpha: f2 };
        f2 > g2.alpha && (g2.alpha = f2), i10.set(h2, g2);
      }
      for (let { x: t11, y: r11, width: n11, height: a11, alpha: o11 } of i10.values()) {
        e10.strokeStyle = `rgba(${cL},${o11})`, e10.lineWidth = 1;
        let i11 = Math.round(t11) + 0.5, l10 = Math.round(r11) + 0.5, s10 = Math.round(n11), c10 = Math.round(a11);
        e10.beginPath(), e10.rect(i11, l10, s10, c10), e10.stroke(), e10.fillStyle = `rgba(${cL},${0.1 * o11})`, e10.fill();
      }
      e10.font = "11px Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";
      let o10 = /* @__PURE__ */ new Map();
      for (let t11 of (e10.textRendering = "optimizeSpeed", a10.values())) {
        let { x: r11, y: a11, frame: i11 } = t11[0], l10 = 1 - i11 / 45, s10 = cB(t11), { width: c10 } = e10.measureText(s10);
        o10.set(`${r11},${a11},${c10},${s10}`, { text: s10, width: c10, height: 11, alpha: l10, x: r11, y: a11, outlines: t11 });
        let d10 = a11 - 11 - 4;
        if (d10 < 0 && (d10 = 0), i11 > 45) for (let e11 of t11) n10.delete(String(e11.id));
      }
      for (let [t11, r11] of Array.from(o10.entries()).sort(([e11, t12], [r12, n11]) => cU(n11.outlines) - cU(t12.outlines))) if (o10.has(t11)) for (let [n11, a11] of o10.entries()) {
        if (t11 === n11) continue;
        let { x: i11, y: l10, width: s10, height: c10 } = r11, { x: d10, y: u6, width: p2, height: h2 } = a11;
        i11 + s10 > d10 && d10 + p2 > i11 && l10 + c10 > u6 && u6 + h2 > l10 && (r11.text = cB(r11.outlines.concat(a11.outlines)), r11.width = e10.measureText(r11.text).width, o10.delete(n11));
      }
      for (let t11 of o10.values()) {
        let { x: r11, y: n11, alpha: a11, width: i11, height: o11, text: l10 } = t11, s10 = n11 - o11 - 4;
        s10 < 0 && (s10 = 0), e10.fillStyle = `rgba(${cL},${a11})`, e10.fillRect(r11, s10, i11 + 4, o11 + 4), e10.fillStyle = `rgba(255,255,255,${a11})`, e10.fillText(l10, r11 + 2, s10 + o11);
      }
      return n10.size > 0;
    })(cK, cq, cG, cJ) ? requestAnimationFrame(c4) : null);
  }, c3 = "u" > typeof OffscreenCanvas && "u" > typeof Worker, c7 = () => Math.min(window.devicePixelRatio || 1, 2), c8 = false, c6 = (e10) => !u7.has(e10.memoizedProps), c9 = false, de = `/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-950: oklch(25.8% 0.092 26.042);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-zinc-200: oklch(92% 0.004 286.32);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-700: oklch(37% 0.013 285.805);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-zinc-900: oklch(21% 0.006 285.885);
    --color-neutral-300: oklch(87% 0 0);
    --color-neutral-400: oklch(70.8% 0 0);
    --color-neutral-500: oklch(55.6% 0 0);
    --color-neutral-700: oklch(37.1% 0 0);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 4px;
    --container-md: 448px;
    --text-xs: 12px;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 14px;
    --text-sm--line-height: calc(1.25 / 0.875);
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-wide: 0.025em;
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --blur-sm: 8px;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
      -o-tab-size: 4;
         tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::-moz-placeholder {
    opacity: 1;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::-moz-placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    -webkit-appearance: button;
       -moz-appearance: button;
            appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .pointer-events-auto {
    pointer-events: auto;
  }
  .pointer-events-bounding-box {
    pointer-events: bounding-box;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .collapse {
    visibility: collapse;
  }
  .visible {
    visibility: visible;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .inset-x-1 {
    inset-inline: calc(var(--spacing) * 1);
  }
  .inset-y-0 {
    inset-block: calc(var(--spacing) * 0);
  }
  .start {
    inset-inline-start: var(--spacing);
  }
  .end {
    inset-inline-end: var(--spacing);
  }
  .-top-1 {
    top: calc(var(--spacing) * -1);
  }
  .-top-2\\.5 {
    top: calc(var(--spacing) * -2.5);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-0\\.5 {
    top: calc(var(--spacing) * 0.5);
  }
  .top-1\\/2 {
    top: calc(1 / 2 * 100%);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .-right-1 {
    right: calc(var(--spacing) * -1);
  }
  .-right-2\\.5 {
    right: calc(var(--spacing) * -2.5);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-0\\.5 {
    right: calc(var(--spacing) * 0.5);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-4 {
    right: calc(var(--spacing) * 4);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .bottom-4 {
    bottom: calc(var(--spacing) * 4);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-3 {
    left: calc(var(--spacing) * 3);
  }
  .z-10 {
    z-index: 10;
  }
  .z-50 {
    z-index: 50;
  }
  .z-100 {
    z-index: 100;
  }
  .z-\\[214748365\\] {
    z-index: 214748365;
  }
  .z-\\[214748367\\] {
    z-index: 214748367;
  }
  .z-\\[124124124124\\] {
    z-index: 124124124124;
  }
  .container {
    width: 100%;
    @media (width >= 640px) {
      max-width: 640px;
    }
    @media (width >= 768px) {
      max-width: 768px;
    }
    @media (width >= 1024px) {
      max-width: 1024px;
    }
    @media (width >= 1280px) {
      max-width: 1280px;
    }
    @media (width >= 1536px) {
      max-width: 1536px;
    }
  }
  .m-\\[2px\\] {
    margin: 2px;
  }
  .mx-0\\.5 {
    margin-inline: calc(var(--spacing) * 0.5);
  }
  .mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mr-0\\.5 {
    margin-right: calc(var(--spacing) * 0.5);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-1\\.5 {
    margin-right: calc(var(--spacing) * 1.5);
  }
  .mr-16 {
    margin-right: calc(var(--spacing) * 16);
  }
  .mr-auto {
    margin-right: auto;
  }
  .mb-1\\.5 {
    margin-bottom: calc(var(--spacing) * 1.5);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-px {
    margin-bottom: 1px;
  }
  .\\!ml-0 {
    margin-left: calc(var(--spacing) * 0) !important;
  }
  .ml-1 {
    margin-left: calc(var(--spacing) * 1);
  }
  .ml-1\\.5 {
    margin-left: calc(var(--spacing) * 1.5);
  }
  .ml-auto {
    margin-left: auto;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .h-1 {
    height: calc(var(--spacing) * 1);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-4\\/5 {
    height: calc(4 / 5 * 100%);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-\\[28px\\] {
    height: 28px;
  }
  .h-\\[48px\\] {
    height: 48px;
  }
  .h-\\[50px\\] {
    height: 50px;
  }
  .h-\\[150px\\] {
    height: 150px;
  }
  .h-\\[235px\\] {
    height: 235px;
  }
  .h-\\[calc\\(100\\%-25px\\)\\] {
    height: calc(100% - 25px);
  }
  .h-\\[calc\\(100\\%-40px\\)\\] {
    height: calc(100% - 40px);
  }
  .h-\\[calc\\(100\\%-48px\\)\\] {
    height: calc(100% - 48px);
  }
  .h-\\[calc\\(100\\%-150px\\)\\] {
    height: calc(100% - 150px);
  }
  .h-\\[calc\\(100\\%-200px\\)\\] {
    height: calc(100% - 200px);
  }
  .h-fit {
    height: -moz-fit-content;
    height: fit-content;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }
  .max-h-0 {
    max-height: calc(var(--spacing) * 0);
  }
  .max-h-9 {
    max-height: calc(var(--spacing) * 9);
  }
  .max-h-40 {
    max-height: calc(var(--spacing) * 40);
  }
  .min-h-9 {
    min-height: calc(var(--spacing) * 9);
  }
  .min-h-\\[48px\\] {
    min-height: 48px;
  }
  .min-h-fit {
    min-height: -moz-fit-content;
    min-height: fit-content;
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-1\\/2 {
    width: calc(1 / 2 * 100%);
  }
  .w-1\\/3 {
    width: calc(1 / 3 * 100%);
  }
  .w-2\\/4 {
    width: calc(2 / 4 * 100%);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-4\\/5 {
    width: calc(4 / 5 * 100%);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-\\[20px\\] {
    width: 20px;
  }
  .w-\\[72px\\] {
    width: 72px;
  }
  .w-\\[90\\%\\] {
    width: 90%;
  }
  .w-\\[calc\\(100\\%-200px\\)\\] {
    width: calc(100% - 200px);
  }
  .w-fit {
    width: -moz-fit-content;
    width: fit-content;
  }
  .w-full {
    width: 100%;
  }
  .w-px {
    width: 1px;
  }
  .w-screen {
    width: 100vw;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-\\[200px\\] {
    min-width: 200px;
  }
  .min-w-fit {
    min-width: -moz-fit-content;
    min-width: fit-content;
  }
  .flex-1 {
    flex: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .grow {
    flex-grow: 1;
  }
  .-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-\\[200\\%\\] {
    --tw-translate-y: calc(200% * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0 {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .scale-110 {
    --tw-scale-x: 110%;
    --tw-scale-y: 110%;
    --tw-scale-z: 110%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .-rotate-90 {
    rotate: calc(90deg * -1);
  }
  .rotate-90 {
    rotate: 90deg;
  }
  .rotate-180 {
    rotate: 180deg;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .animate-fade-in {
    animation: fadeIn ease-in forwards;
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-e-resize {
    cursor: e-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-w-resize {
    cursor: w-resize;
  }
  .\\[touch-action\\:none\\] {
    touch-action: none;
  }
  .resize {
    resize: both;
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .gap-0\\.5 {
    gap: calc(var(--spacing) * 0.5);
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .space-y-1\\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .gap-x-0\\.5 {
    -moz-column-gap: calc(var(--spacing) * 0.5);
         column-gap: calc(var(--spacing) * 0.5);
  }
  .gap-x-1 {
    -moz-column-gap: calc(var(--spacing) * 1);
         column-gap: calc(var(--spacing) * 1);
  }
  .gap-x-1\\.5 {
    -moz-column-gap: calc(var(--spacing) * 1.5);
         column-gap: calc(var(--spacing) * 1.5);
  }
  .gap-x-2 {
    -moz-column-gap: calc(var(--spacing) * 2);
         column-gap: calc(var(--spacing) * 2);
  }
  .gap-x-3 {
    -moz-column-gap: calc(var(--spacing) * 3);
         column-gap: calc(var(--spacing) * 3);
  }
  .gap-x-4 {
    -moz-column-gap: calc(var(--spacing) * 4);
         column-gap: calc(var(--spacing) * 4);
  }
  .gap-y-0\\.5 {
    row-gap: calc(var(--spacing) * 0.5);
  }
  .gap-y-1 {
    row-gap: calc(var(--spacing) * 1);
  }
  .gap-y-2 {
    row-gap: calc(var(--spacing) * 2);
  }
  .gap-y-4 {
    row-gap: calc(var(--spacing) * 4);
  }
  .divide-y {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    }
  }
  .divide-zinc-800 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-zinc-800);
    }
  }
  .place-self-center {
    place-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .\\!overflow-visible {
    overflow: visible !important;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .rounded {
    border-radius: 4px;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-sm {
    border-radius: var(--radius-sm);
  }
  .rounded-t-lg {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-t-sm {
    border-top-left-radius: var(--radius-sm);
    border-top-right-radius: var(--radius-sm);
  }
  .rounded-l-md {
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
  }
  .rounded-l-sm {
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .rounded-tl-lg {
    border-top-left-radius: var(--radius-lg);
  }
  .rounded-r-md {
    border-top-right-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
  }
  .rounded-r-sm {
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .rounded-tr-lg {
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-br-lg {
    border-bottom-right-radius: var(--radius-lg);
  }
  .rounded-bl-lg {
    border-bottom-left-radius: var(--radius-lg);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-4 {
    border-style: var(--tw-border-style);
    border-width: 4px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-l-0 {
    border-left-style: var(--tw-border-style);
    border-left-width: 0px;
  }
  .border-l-1 {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-none {
    --tw-border-style: none;
    border-style: none;
  }
  .\\!border-red-500 {
    border-color: var(--color-red-500) !important;
  }
  .border-\\[\\#1e1e1e\\] {
    border-color: #1e1e1e;
  }
  .border-\\[\\#222\\] {
    border-color: #222;
  }
  .border-\\[\\#333\\] {
    border-color: #333;
  }
  .border-\\[\\#27272A\\] {
    border-color: #27272A;
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-zinc-800 {
    border-color: var(--color-zinc-800);
  }
  .bg-\\[\\#0A0A0A\\] {
    background-color: #0A0A0A;
  }
  .bg-\\[\\#1D3A66\\] {
    background-color: #1D3A66;
  }
  .bg-\\[\\#1E1E1E\\] {
    background-color: #1E1E1E;
  }
  .bg-\\[\\#1a2a1a\\] {
    background-color: #1a2a1a;
  }
  .bg-\\[\\#1e1e1e\\] {
    background-color: #1e1e1e;
  }
  .bg-\\[\\#2a1515\\] {
    background-color: #2a1515;
  }
  .bg-\\[\\#4b4b4b\\] {
    background-color: #4b4b4b;
  }
  .bg-\\[\\#5f3f9a\\] {
    background-color: #5f3f9a;
  }
  .bg-\\[\\#5f3f9a\\]\\/40 {
    background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
  }
  .bg-\\[\\#6a369e\\] {
    background-color: #6a369e;
  }
  .bg-\\[\\#8e61e3\\] {
    background-color: #8e61e3;
  }
  .bg-\\[\\#7521c8\\] {
    background-color: #7521c8;
  }
  .bg-\\[\\#18181B\\] {
    background-color: #18181B;
  }
  .bg-\\[\\#18181B\\]\\/50 {
    background-color: color-mix(in oklab, #18181B 50%, transparent);
  }
  .bg-\\[\\#27272A\\] {
    background-color: #27272A;
  }
  .bg-\\[\\#44444a\\] {
    background-color: #44444a;
  }
  .bg-\\[\\#141414\\] {
    background-color: #141414;
  }
  .bg-\\[\\#214379d4\\] {
    background-color: #214379d4;
  }
  .bg-\\[\\#412162\\] {
    background-color: #412162;
  }
  .bg-\\[\\#EFD81A\\] {
    background-color: #EFD81A;
  }
  .bg-\\[\\#b77116\\] {
    background-color: #b77116;
  }
  .bg-\\[\\#b94040\\] {
    background-color: #b94040;
  }
  .bg-\\[\\#d36cff\\] {
    background-color: #d36cff;
  }
  .bg-\\[\\#efd81a6b\\] {
    background-color: #efd81a6b;
  }
  .bg-black {
    background-color: var(--color-black);
  }
  .bg-black\\/40 {
    background-color: color-mix(in srgb, #000 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 40%, transparent);
    }
  }
  .bg-green-500\\/50 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 50%, transparent);
    }
  }
  .bg-green-500\\/60 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 60%, transparent);
    }
  }
  .bg-neutral-700 {
    background-color: var(--color-neutral-700);
  }
  .bg-purple-500 {
    background-color: var(--color-purple-500);
  }
  .bg-purple-500\\/90 {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
    }
  }
  .bg-purple-800 {
    background-color: var(--color-purple-800);
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-red-500\\/90 {
    background-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-500) 90%, transparent);
    }
  }
  .bg-red-950\\/50 {
    background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-950) 50%, transparent);
    }
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-yellow-300 {
    background-color: var(--color-yellow-300);
  }
  .bg-zinc-800 {
    background-color: var(--color-zinc-800);
  }
  .bg-zinc-900\\/30 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 30%, transparent);
    }
  }
  .bg-zinc-900\\/50 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 50%, transparent);
    }
  }
  .p-0 {
    padding: calc(var(--spacing) * 0);
  }
  .p-1 {
    padding: calc(var(--spacing) * 1);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-\\[1px\\] {
    padding-block: 1px;
  }
  .py-\\[3px\\] {
    padding-block: 3px;
  }
  .py-\\[5px\\] {
    padding-block: 5px;
  }
  .pt-0 {
    padding-top: calc(var(--spacing) * 0);
  }
  .pt-2 {
    padding-top: calc(var(--spacing) * 2);
  }
  .pt-5 {
    padding-top: calc(var(--spacing) * 5);
  }
  .pr-1 {
    padding-right: calc(var(--spacing) * 1);
  }
  .pr-1\\.5 {
    padding-right: calc(var(--spacing) * 1.5);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pl-1 {
    padding-left: calc(var(--spacing) * 1);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-2\\.5 {
    padding-left: calc(var(--spacing) * 2.5);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .pl-5 {
    padding-left: calc(var(--spacing) * 5);
  }
  .pl-6 {
    padding-left: calc(var(--spacing) * 6);
  }
  .text-left {
    text-align: left;
  }
  .font-mono {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[8px\\] {
    font-size: 8px;
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .text-\\[11px\\] {
    font-size: 11px;
  }
  .text-\\[13px\\] {
    font-size: 13px;
  }
  .text-\\[14px\\] {
    font-size: 14px;
  }
  .text-\\[17px\\] {
    font-size: 17px;
  }
  .leading-6 {
    --tw-leading: calc(var(--spacing) * 6);
    line-height: calc(var(--spacing) * 6);
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
  .text-wrap {
    text-wrap: wrap;
  }
  .break-words {
    overflow-wrap: break-word;
  }
  .break-all {
    word-break: break-all;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }
  .text-\\[\\#4ade80\\] {
    color: #4ade80;
  }
  .text-\\[\\#5a5a5a\\] {
    color: #5a5a5a;
  }
  .text-\\[\\#6E6E77\\] {
    color: #6E6E77;
  }
  .text-\\[\\#6F6F78\\] {
    color: #6F6F78;
  }
  .text-\\[\\#8E61E3\\] {
    color: #8E61E3;
  }
  .text-\\[\\#666\\] {
    color: #666;
  }
  .text-\\[\\#888\\] {
    color: #888;
  }
  .text-\\[\\#999\\] {
    color: #999;
  }
  .text-\\[\\#7346a0\\] {
    color: #7346a0;
  }
  .text-\\[\\#65656D\\] {
    color: #65656D;
  }
  .text-\\[\\#737373\\] {
    color: #737373;
  }
  .text-\\[\\#A1A1AA\\] {
    color: #A1A1AA;
  }
  .text-\\[\\#A855F7\\] {
    color: #A855F7;
  }
  .text-\\[\\#E4E4E7\\] {
    color: #E4E4E7;
  }
  .text-\\[\\#d36cff\\] {
    color: #d36cff;
  }
  .text-\\[\\#f87171\\] {
    color: #f87171;
  }
  .text-black {
    color: var(--color-black);
  }
  .text-gray-100 {
    color: var(--color-gray-100);
  }
  .text-gray-300 {
    color: var(--color-gray-300);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-neutral-300 {
    color: var(--color-neutral-300);
  }
  .text-neutral-400 {
    color: var(--color-neutral-400);
  }
  .text-neutral-500 {
    color: var(--color-neutral-500);
  }
  .text-purple-400 {
    color: var(--color-purple-400);
  }
  .text-red-300 {
    color: var(--color-red-300);
  }
  .text-red-400 {
    color: var(--color-red-400);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-white {
    color: var(--color-white);
  }
  .text-white\\/30 {
    color: color-mix(in srgb, #fff 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 30%, transparent);
    }
  }
  .text-white\\/70 {
    color: color-mix(in srgb, #fff 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 70%, transparent);
    }
  }
  .text-yellow-300 {
    color: var(--color-yellow-300);
  }
  .text-yellow-500 {
    color: var(--color-yellow-500);
  }
  .text-zinc-200 {
    color: var(--color-zinc-200);
  }
  .text-zinc-400 {
    color: var(--color-zinc-400);
  }
  .text-zinc-500 {
    color: var(--color-zinc-500);
  }
  .text-zinc-600 {
    color: var(--color-zinc-600);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-white\\/\\[0\\.08\\] {
    --tw-ring-color: color-mix(in srgb, #fff 8%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-white) 8%, transparent);
    }
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur-sm {
    --tw-backdrop-blur: blur(var(--blur-sm));
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[border-radius\\] {
    transition-property: border-radius;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[color\\,transform\\] {
    transition-property: color,transform;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[max-height\\] {
    transition-property: max-height;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[opacity\\] {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-none {
    transition-property: none;
  }
  .delay-0 {
    transition-delay: 0ms;
  }
  .delay-150 {
    transition-delay: 150ms;
  }
  .delay-300 {
    transition-delay: 300ms;
  }
  .\\!duration-0 {
    --tw-duration: 0ms !important;
    transition-duration: 0ms !important;
  }
  .duration-0 {
    --tw-duration: 0ms;
    transition-duration: 0ms;
  }
  .duration-120 {
    --tw-duration: 120ms;
    transition-duration: 120ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .ease-\\[cubic-bezier\\(0\\.25\\,0\\.1\\,0\\.25\\,1\\)\\] {
    --tw-ease: cubic-bezier(0.25,0.1,0.25,1);
    transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
  }
  .ease-in {
    --tw-ease: var(--ease-in);
    transition-timing-function: var(--ease-in);
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .will-change-transform {
    will-change: transform;
  }
  .select-none {
    -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
  }
  .animation-delay-0 {
    animation-delay: 0s;
  }
  .animation-delay-100 {
    animation-delay: .1s;
  }
  .animation-delay-150 {
    animation-delay: .15s;
  }
  .animation-delay-200 {
    animation-delay: .2s;
  }
  .animation-delay-300 {
    animation-delay: .3s;
  }
  .animation-delay-500 {
    animation-delay: .5s;
  }
  .animation-delay-700 {
    animation-delay: .7s;
  }
  .animation-delay-1000 {
    animation-delay: 1s;
  }
  .animation-duration-0 {
    animation-duration: 0s;
  }
  .animation-duration-100 {
    animation-duration: .1s;
  }
  .animation-duration-200 {
    animation-duration: .2s;
  }
  .animation-duration-300 {
    animation-duration: .3s;
  }
  .animation-duration-500 {
    animation-duration: .5s;
  }
  .animation-duration-700 {
    animation-duration: .7s;
  }
  .animation-duration-1000 {
    animation-duration: 1s;
  }
  .group-hover\\:bg-\\[\\#5b2d89\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #5b2d89;
      }
    }
  }
  .group-hover\\:bg-\\[\\#6a6a6a\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #6a6a6a;
      }
    }
  }
  .group-hover\\:bg-\\[\\#21437982\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #21437982;
      }
    }
  }
  .group-hover\\:bg-\\[\\#efda1a2f\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #efda1a2f;
      }
    }
  }
  .group-hover\\:opacity-100 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .peer-hover\\/bottom\\:rounded-b-none {
    &:is(:where(.peer\\/bottom):hover ~ *) {
      @media (hover: hover) {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/left\\:rounded-l-none {
    &:is(:where(.peer\\/left):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/right\\:rounded-r-none {
    &:is(:where(.peer\\/right):hover ~ *) {
      @media (hover: hover) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
  .peer-hover\\/top\\:rounded-t-none {
    &:is(:where(.peer\\/top):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
  .after\\:absolute {
    &::after {
      content: var(--tw-content);
      position: absolute;
    }
  }
  .after\\:inset-0 {
    &::after {
      content: var(--tw-content);
      inset: calc(var(--spacing) * 0);
    }
  }
  .after\\:top-\\[100\\%\\] {
    &::after {
      content: var(--tw-content);
      top: 100%;
    }
  }
  .after\\:left-1\\/2 {
    &::after {
      content: var(--tw-content);
      left: calc(1 / 2 * 100%);
    }
  }
  .after\\:h-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      height: 6px;
    }
  }
  .after\\:w-\\[10px\\] {
    &::after {
      content: var(--tw-content);
      width: 10px;
    }
  }
  .after\\:-translate-x-1\\/2 {
    &::after {
      content: var(--tw-content);
      --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .after\\:animate-\\[fadeOut_1s_ease-out_forwards\\] {
    &::after {
      content: var(--tw-content);
      animation: fadeOut 1s ease-out forwards;
    }
  }
  .after\\:border-t-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      border-top-style: var(--tw-border-style);
      border-top-width: 6px;
    }
  }
  .after\\:border-r-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-right-style: var(--tw-border-style);
      border-right-width: 5px;
    }
  }
  .after\\:border-l-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-left-style: var(--tw-border-style);
      border-left-width: 5px;
    }
  }
  .after\\:border-t-white {
    &::after {
      content: var(--tw-content);
      border-top-color: var(--color-white);
    }
  }
  .after\\:border-r-transparent {
    &::after {
      content: var(--tw-content);
      border-right-color: transparent;
    }
  }
  .after\\:border-l-transparent {
    &::after {
      content: var(--tw-content);
      border-left-color: transparent;
    }
  }
  .after\\:bg-purple-500\\/30 {
    &::after {
      content: var(--tw-content);
      background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-purple-500) 30%, transparent);
      }
    }
  }
  .after\\:content-\\[\\"\\"\\] {
    &::after {
      --tw-content: "";
      content: var(--tw-content);
    }
  }
  .focus-within\\:border-\\[\\#454545\\] {
    &:focus-within {
      border-color: #454545;
    }
  }
  .hover\\:bg-\\[\\#0f0f0f\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #0f0f0f;
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/20 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 20%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/40 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#18181B\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #18181B;
      }
    }
  }
  .hover\\:bg-\\[\\#34343b\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #34343b;
      }
    }
  }
  .hover\\:bg-red-600 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-red-600);
      }
    }
  }
  .hover\\:bg-zinc-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-zinc-700);
      }
    }
  }
  .hover\\:bg-zinc-800\\/50 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in srgb, oklch(27.4% 0.006 286.033) 50%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-zinc-800) 50%, transparent);
        }
      }
    }
  }
  .hover\\:text-neutral-300 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-neutral-300);
      }
    }
  }
  .hover\\:text-white {
    &:hover {
      @media (hover: hover) {
        color: var(--color-white);
      }
    }
  }
}
* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}
@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}
button {
  &:hover {
    @media (hover: hover) {
      background-image: none;
    }
  }
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  cursor: pointer;
}
input {
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  background-color: transparent;
  background-image: none;
  &::-moz-placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::-moz-placeholder {
    color: var(--color-neutral-500);
  }
  &::placeholder {
    color: var(--color-neutral-500);
  }
  &::-moz-placeholder {
    font-style: italic;
  }
  &::placeholder {
    font-style: italic;
  }
  &:-moz-placeholder {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:placeholder-shown {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
svg {
  height: auto;
  width: auto;
  pointer-events: none;
}
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
#react-scan-toolbar {
  position: fixed;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  color: var(--color-white);
  background-color: var(--color-black);
  -webkit-user-select: none;
  -moz-user-select: none;
       user-select: none;
  cursor: move;
  opacity: 0%;
  z-index: 2147483678;
  animation: fadeIn ease-in forwards;
  animation-delay: .3s;
  animation-duration: .3s;
  --tw-shadow: 0 4px 12px var(--tw-shadow-color, rgba(0,0,0,0.2));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  place-self: start;
  will-change: transform;
  backface-visibility: hidden;
}
#react-scan-toolbar pre,
#react-scan-toolbar textarea,
#react-scan-toolbar input[type='text'],
#react-scan-toolbar input[type='search'],
#react-scan-toolbar [data-react-scan-selectable] {
  -webkit-user-select: text;
  -moz-user-select: text;
       user-select: text;
  cursor: text;
}
.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}
.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}
.resize-line {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  overflow: hidden;
  background-color: var(--color-black);
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-right,
.resize-left {
  inset-block: calc(var(--spacing) * 0);
  width: calc(var(--spacing) * 6);
  cursor: ew-resize;
  .resize-line-wrapper {
    inset-block: calc(var(--spacing) * 0);
    width: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-x: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-right {
  right: calc(var(--spacing) * 0);
  --tw-translate-x: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    right: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-right-radius: var(--radius-lg);
    border-bottom-right-radius: var(--radius-lg);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-left {
  left: calc(var(--spacing) * 0);
  --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    left: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-x: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-top,
.resize-bottom {
  inset-inline: calc(var(--spacing) * 0);
  height: calc(var(--spacing) * 6);
  cursor: ns-resize;
  .resize-line-wrapper {
    inset-inline: calc(var(--spacing) * 0);
    height: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-y: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-top {
  top: calc(var(--spacing) * 0);
  --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    top: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-bottom {
  bottom: calc(var(--spacing) * 0);
  --tw-translate-y: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    bottom: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-right: calc(var(--spacing) * 2);
  padding-left: calc(var(--spacing) * 3);
  min-height: calc(var(--spacing) * 9);
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  overflow: hidden;
  white-space: nowrap;
}
.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: calc(var(--spacing) * 1);
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 50%, transparent) !important;
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 50%, transparent) !important;
  }
  &:hover {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 25%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 25%, transparent);
    }
  }
  &.disabled {
    opacity: 50%;
    pointer-events: none;
  }
  &:before {
    content: "";
    position: absolute;
    inset: calc(var(--spacing) * 0);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}
.react-scan-close-button {
  background-color: color-mix(in srgb, #fff 10%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
  }
  &:hover {
    background-color: color-mix(in srgb, #fff 15%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 15%, transparent);
    }
  }
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 3);
  height: calc(var(--spacing) * 7);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #888;
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  background-color: #0a0a0a;
}
.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-inline: calc(var(--spacing) * 2);
  color: #888;
  &::before {
    content: var(--tw-content);
    color: var(--color-gray-500);
  }
  &::before {
    --tw-content: attr(data-section);
    content: var(--tw-content);
  }
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  > .react-scan-property {
    margin-left: calc(14px * -1);
  }
}
.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: calc(var(--spacing) * 8);
  border-left-style: var(--tw-border-style);
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}
.react-scan-property-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: calc(var(--spacing) * 7);
  max-width: 100%;
  overflow: hidden;
}
.react-scan-string {
  color: #9ecbff;
}
.react-scan-number {
  color: #79c7ff;
}
.react-scan-boolean {
  color: #56b6c2;
}
.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: calc(var(--spacing) * 60);
  white-space: nowrap;
  color: var(--color-white);
}
.react-scan-input {
  color: var(--color-white);
  background-color: var(--color-black);
}
@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.react-scan-arrow {
  position: absolute;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: calc(var(--spacing) * 7);
  width: calc(var(--spacing) * 6);
  --tw-translate-x: -100%;
  translate: var(--tw-translate-x) var(--tw-translate-y);
  z-index: 10;
  > svg {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
}
.react-scan-nested {
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: calc(var(--spacing) * 0);
    left: calc(var(--spacing) * 0);
    height: 100%;
    width: 1px;
    background-color: color-mix(in srgb, oklch(55.1% 0.027 264.364) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-500) 30%, transparent);
    }
  }
}
.react-scan-settings {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 4);
  padding-inline: calc(var(--spacing) * 4);
  padding-block: calc(var(--spacing) * 2);
  color: #888;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
}
.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: calc(var(--spacing) * 7);
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
}
.react-scan-flash-overlay {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  opacity: 0%;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  mix-blend-mode: multiply;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
  }
}
.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: calc(var(--spacing) * 6);
  width: calc(var(--spacing) * 10);
  input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    z-index: 20;
    opacity: 0%;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
  input:checked {
    + div {
      background-color: #5f3f9a;
      &::before {
        --tw-translate-x: 100%;
        translate: var(--tw-translate-x) var(--tw-translate-y);
        left: auto;
        border-color: #5f3f9a;
      }
    }
  }
  > div {
    position: absolute;
    inset: calc(var(--spacing) * 1);
    background-color: var(--color-neutral-700);
    border-radius: calc(infinity * 1px);
    pointer-events: none;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &:before {
      --tw-content: '';
      content: var(--tw-content);
      position: absolute;
      top: calc(1 / 2 * 100%);
      left: calc(var(--spacing) * 0);
      --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
      height: calc(var(--spacing) * 4);
      width: calc(var(--spacing) * 4);
      background-color: var(--color-white);
      border-style: var(--tw-border-style);
      border-width: 2px;
      border-color: var(--color-neutral-700);
      border-radius: calc(infinity * 1px);
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      transition-property: all;
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
      --tw-duration: 300ms;
      transition-duration: 300ms;
    }
  }
}
.react-scan-flash-active {
  opacity: 40%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 200ms;
  transition-duration: 200ms;
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  will-change: opacity;
  &.fade-out {
    opacity: 0%;
  }
  &.fade-in {
    opacity: 100%;
  }
}
.react-scan-what-changed {
  ul {
    list-style-type: disc;
    padding-left: calc(var(--spacing) * 4);
  }
  li {
    white-space: nowrap;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      -moz-column-gap: calc(var(--spacing) * 2);
           column-gap: calc(var(--spacing) * 2);
    }
  }
}
.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 1.5);
  padding-block: calc(var(--spacing) * 0.5);
  border-radius: 4px;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
  color: #a855f7;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  background-color: color-mix(in oklab, #a855f7 10%, transparent);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  transition-delay: 150ms;
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.count-flash {
  animation: countFlash .3s ease-out forwards;
}
.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}
.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 1);
       column-gap: calc(var(--spacing) * 1);
  color: #666;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  > div {
    padding-inline: calc(var(--spacing) * 1.5);
    padding-block: calc(var(--spacing) * 0.5);
    border-radius: 4px;
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
    transform-origin: center;
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    transition-delay: 150ms;
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &[data-flash="true"] {
      background-color: color-mix(in oklab, #a855f7 10%, transparent);
      color: #a855f7;
    }
  }
}
.react-scan-slider {
  position: relative;
  min-height: calc(var(--spacing) * 6);
  > input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    opacity: 0%;
  }
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    top: calc(1 / 2 * 100%);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 1.5);
    background-color: color-mix(in oklab, #8e61e3 40%, transparent);
    border-radius: var(--radius-lg);
    pointer-events: none;
  }
  &:after {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    inset-block: calc(var(--spacing) * -2);
    z-index: calc(10 * -1);
  }
  span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(var(--spacing) * 0);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 2.5);
    width: calc(var(--spacing) * 2.5);
    border-radius: var(--radius-lg);
    background-color: #8e61e3;
    pointer-events: none;
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 75ms;
    transition-duration: 75ms;
  }
}
.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: calc(var(--spacing) * 1);
  min-width: calc(var(--spacing) * 1);
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:hover,
  &:active {
    > span {
      background-color: #222;
    }
    svg {
      opacity: 100%;
    }
  }
  &::before {
    --tw-content: "";
    content: var(--tw-content);
    position: absolute;
    inset: calc(var(--spacing) * 0);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    width: 1px;
    background-color: #222;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  > span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: 18px;
    width: calc(var(--spacing) * 1.5);
    border-radius: 4px;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    rotate: 90deg;
    color: var(--color-neutral-400);
    opacity: 0%;
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    z-index: 50;
  }
}
.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  span {
    padding-block: 1px;
    border-radius: var(--radius-sm);
    background-color: var(--color-yellow-300);
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    color: var(--color-black);
  }
  .single {
    margin-right: 1px;
    padding-inline: 2px;
  }
  .regex {
    padding-inline: 2px;
  }
  .start {
    margin-left: 1px;
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .end {
    margin-right: 1px;
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .middle {
    margin-inline: 1px;
    border-radius: var(--radius-sm);
  }
}
.react-scan-toolbar-notification {
  position: absolute;
  inset-inline: calc(var(--spacing) * 0);
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding: calc(var(--spacing) * 1);
  padding-left: calc(var(--spacing) * 2);
  font-size: 10px;
  color: var(--color-neutral-300);
  background-color: color-mix(in srgb, #000 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-black) 90%, transparent);
  }
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    background-color: var(--color-black);
    height: calc(var(--spacing) * 2);
  }
  &.position-top {
    top: 100%;
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    &::before {
      top: calc(var(--spacing) * 0);
      --tw-translate-y: -100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.position-bottom {
    bottom: 100%;
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    &::before {
      bottom: calc(var(--spacing) * 0);
      --tw-translate-y: 100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.is-open {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header-item {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  --tw-translate-y: calc(200% * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
  &.is-visible {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}
.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 75ms;
  transition-duration: 75ms;
  transition-timing-function: ease-out;
  > * {
    min-height: 0;
  }
  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-content {
  syntax: "*";
  initial-value: "";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes countFlash {
  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }
  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}
@keyframes countFlashShake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px) scale(1.1);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-divide-y-reverse: 0;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-content: "";
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
    }
  }
}
`, dt = async (e10) => {
    try {
      let t10 = await oB(e10), r10 = `${t10.htmlPreview}${t10.stackString}`;
      if (!r10.trim()) return false;
      return await navigator.clipboard.writeText(r10), true;
    } catch {
      return false;
    }
  }, dr = tR(() => l2("absolute inset-0 flex items-center gap-x-2", "translate-y-0", "transition-transform duration-300", st.value && "-translate-y-[200%]")), dn = () => {
    let e10 = tr(null), t10 = tr(null), [r10, n10] = e9(null);
    t1(() => {
      let e11 = uQ.inspectState.value;
      "focused" === e11.kind && n10(e11.fiber);
    }), t1(() => {
      let r11 = sm.value;
      tw(() => {
        var n11, a11;
        let i10;
        if ("focused" !== uQ.inspectState.value.kind || !e10.current || !t10.current) return;
        let { totalUpdates: o10, currentIndex: l10, updates: s10, isVisible: c10, windowOffset: d10 } = r11, u6 = Math.max(0, o10 - 1), p2 = c10 ? `#${d10 + l10} Re-render` : u6 > 0 ? `\xD7${u6}` : "";
        if (u6 > 0 && l10 >= 0 && l10 < s10.length) {
          let e11 = null == (a11 = null == (n11 = s10[l10]) ? void 0 : n11.fiberInfo) ? void 0 : a11.selfTime;
          i10 = e11 > 0 ? e11 < 0.1 - Number.EPSILON ? "< 0.1ms" : `${Number(e11.toFixed(1))}ms` : void 0;
        }
        e10.current.dataset.text = p2 ? ` \u2022 ${p2}` : "", t10.current.dataset.text = i10 ? ` \u2022 ${i10}` : "";
      });
    });
    let a10 = tn(() => {
      if (!r10) return null;
      let { name: e11, wrappers: t11, wrapperTypes: n11 } = l8(r10), a11 = t11.length ? `${t11.join("(")}(${e11})${")".repeat(t11.length)}` : null != e11 ? e11 : "", i10 = n11[0];
      return rx("span", { title: a11, className: "flex items-center gap-x-1", children: [null != e11 ? e11 : "Unknown", rx("span", { title: null == i10 ? void 0 : i10.title, className: "flex items-center gap-x-1 text-[10px] text-purple-400", children: !!i10 && rx(ez, { children: [rx("span", { className: l2("rounded py-[1px] px-1", "truncate", i10.compiler && "bg-purple-800 text-neutral-400", !i10.compiler && "bg-neutral-700 text-neutral-300", "memo" === i10.type && "bg-[#5f3f9a] text-white"), children: i10.type }, i10.type), i10.compiler && rx("span", { className: "text-yellow-300", children: "\u2728" })] }) }), n11.length > 1 && rx("span", { className: "text-[10px] text-neutral-400", children: ["\xD7", n11.length - 1] })] });
    }, [r10]);
    return rx("div", { className: dr, children: [a10, rx("div", { className: "flex items-center gap-x-2 mr-auto text-xs text-[#888]", children: [rx("span", { ref: e10, className: "with-data-text cursor-pointer !overflow-visible", title: "Click to toggle between rerenders and total renders" }), rx("span", { ref: t10, className: "with-data-text !overflow-visible" })] })] });
  }, da = () => {
    let e10 = ((e11, t11 = 150) => {
      let [r11, n11] = e9(e11);
      return te(() => {
        if (e11 === r11) return;
        let a11 = setTimeout(() => n11(e11), e11 ? 150 : t11);
        return () => clearTimeout(a11);
      }, [e11, 150, t11]), r11;
    })("focused" === uQ.inspectState.value.kind, 0), t10 = tG(false), r10 = () => {
      so.value = { view: "none" }, uQ.inspectState.value = { kind: "inspect-off" };
    }, n10 = async () => {
      let e11 = uQ.inspectState.value;
      "focused" !== e11.kind || !e11.focusedDomElement || await dt(e11.focusedDomElement) && (t10.value = true, setTimeout(() => {
        t10.value = false, r10();
      }, 600));
    }, a10 = tr(n10);
    if (a10.current = n10, te(() => {
      let e11 = (e12) => {
        var t11;
        let r11, n11 = uQ.inspectState.value;
        !("focused" !== n11.kind || !n11.focusedDomElement || "u" > typeof window && window.__REACT_GRAB__) && (e12.metaKey || e12.ctrlKey) && !e12.shiftKey && !e12.altKey && ("c" === e12.key || "KeyC" === e12.code) && ((() => {
          let e13 = document.activeElement;
          if (!e13) return false;
          let t12 = e13.tagName;
          return !!("INPUT" === t12 || "TEXTAREA" === t12 || "SELECT" === t12 || e13 instanceof HTMLElement && e13.isContentEditable);
        })() || (r11 = null == (t11 = window.getSelection) ? void 0 : t11.call(window)) && r11.toString().length > 0 || (e12.preventDefault(), e12.stopImmediatePropagation(), a10.current()));
      };
      return document.addEventListener("keydown", e11, { capture: true }), () => {
        document.removeEventListener("keydown", e11, { capture: true });
      };
    }, []), "notifications" === so.value.view) return;
    let i10 = "focused" === uQ.inspectState.value.kind, o10 = (() => {
      if ("u" < typeof navigator) return false;
      let e11 = navigator.platform || "";
      return e11 ? /Mac|iPhone|iPad|iPod/i.test(e11) : /Mac|iPhone|iPad|iPod/i.test(navigator.userAgent);
    })() ? "\u2318C" : "Ctrl+C";
    return rx("div", { className: "react-scan-header", children: [rx("div", { className: "relative flex-1 h-full", children: rx("div", { className: l2("react-scan-header-item is-visible", !e10 && "!duration-0"), children: rx(dn, {}) }) }), i10 && rx("button", { type: "button", title: `Copy element (${o10})`, className: "react-scan-close-button", onClick: n10, children: rx(oZ, { name: t10.value ? "icon-check" : "icon-copy", className: l2(t10.value && "text-green-500") }) }), rx("button", { type: "button", title: "Close", className: "react-scan-close-button", onClick: r10, children: rx(oZ, { name: "icon-close" }) })] });
  }, di = ({ className: e10, ...t10 }) => rx("div", { className: l2("react-scan-toggle", e10), children: [rx("input", { type: "checkbox", ...t10 }), rx("div", {})] }), dl = ({ fps: e10 }) => rx("div", { className: l2("flex items-center gap-x-1 px-2 w-full", "h-6", "rounded-md", "font-mono leading-none", "bg-[#141414]", "ring-1 ring-white/[0.08]"), children: [rx("div", { style: { color: e10 < 30 ? "#EF4444" : e10 < 50 ? "#F59E0B" : "rgb(214,132,245)" }, className: "text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center", children: e10 }), rx("span", { className: "text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit", children: "FPS" })] }), ds = () => {
    let [e10, t10] = e9(null);
    return te(() => {
      let e11 = setInterval(() => {
        t10(cM());
      }, 200);
      return () => clearInterval(e11);
    }, []), rx("div", { className: l2("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]", "whitespace-nowrap text-sm text-white"), children: null === e10 ? rx(ez, { children: "\uFE0F" }) : rx(dl, { fps: e10 }) });
  }, dc = (e10) => {
  }, dd = class e10 extends Array {
    constructor(e11 = 25) {
      super(), oV(this, "capacity", e11);
    }
    push(...e11) {
      let t10 = super.push(...e11);
      for (; this.length > this.capacity; ) this.shift();
      return t10;
    }
    static fromArray(t10, r10) {
      let n10 = new e10(r10);
      return n10.push(...t10), n10;
    }
  }, du = new class {
    constructor(e10) {
      oV(this, "subscribers", /* @__PURE__ */ new Set()), oV(this, "currentValue"), this.currentValue = e10;
    }
    subscribe(e10) {
      return this.subscribers.add(e10), e10(this.currentValue), () => {
        this.subscribers.delete(e10);
      };
    }
    setState(e10) {
      this.currentValue = e10, this.subscribers.forEach((t10) => t10(e10));
    }
    getCurrentState() {
      return this.currentValue;
    }
  }(new dd(150)), dp = new class {
    constructor() {
      oV(this, "channels", {});
    }
    publish(e10, t10, r10 = true) {
      let n10 = this.channels[t10];
      if (!n10) {
        if (!r10) return;
        this.channels[t10] = { callbacks: new dd(50), state: new dd(50) }, this.channels[t10].state.push(e10);
        return;
      }
      n10.state.push(e10), n10.callbacks.forEach((t11) => t11(e10));
    }
    getAvailableChannels() {
      return dd.fromArray(Object.keys(this.channels), 50);
    }
    subscribe(e10, t10, r10 = false) {
      let n10 = () => (r10 || this.channels[e10].state.forEach((e11) => {
        t10(e11);
      }), () => {
        let r11 = this.channels[e10].callbacks.filter((e11) => e11 !== t10);
        this.channels[e10].callbacks = dd.fromArray(r11, 50);
      }), a10 = this.channels[e10];
      return a10 ? a10.callbacks.push(t10) : (this.channels[e10] = { callbacks: new dd(50), state: new dd(50) }, this.channels[e10].callbacks.push(t10)), n10();
    }
    updateChannelState(e10, t10, r10 = true) {
      let n10 = this.channels[e10];
      if (!n10) {
        if (!r10) return;
        let n11 = new dd(50), a10 = { callbacks: new dd(50), state: n11 };
        this.channels[e10] = a10, a10.state = t10(n11);
        return;
      }
      n10.state = t10(n10.state);
    }
    getChannelState(e10) {
      var t10;
      return null != (t10 = this.channels[e10].state) ? t10 : new dd(50);
    }
  }(), dh = { skipProviders: true, skipHocs: true, skipContainers: true, skipMinified: true, skipUtilities: true, skipBoundaries: true }, dm = [/Provider$/, /^Provider$/, /^Context$/], df = [/^with[A-Z]/, /^forward(?:Ref)?$/i, /^Forward(?:Ref)?\(/], dg = [/^(?:App)?Container$/, /^Root$/, /^ReactDev/], dv = [/^Fragment$/, /^Suspense$/, /^ErrorBoundary$/, /^Portal$/, /^Consumer$/, /^Layout$/, /^Router/, /^Hydration/], dw = [/^Boundary$/, /Boundary$/, /^Provider$/, /Provider$/], db = (e10, t10 = dh) => {
    let r10 = [];
    return t10.skipProviders && r10.push(...dm), t10.skipHocs && r10.push(...df), t10.skipContainers && r10.push(...dg), t10.skipUtilities && r10.push(...dv), t10.skipBoundaries && r10.push(...dw), !r10.some((t11) => t11.test(e10));
  }, dy = [/^[a-z]$/, /^[a-z][0-9]$/, /^_+$/, /^[A-Za-z][_$]$/, /^[a-z]{1,2}$/], dx = (e10) => {
    var t10, r10;
    for (let t11 = 0; t11 < dy.length; t11++) if (dy[t11].test(e10)) return true;
    let n10 = !/[aeiou]/i.test(e10), a10 = (null != (r10 = null == (t10 = e10.match(/\d/g)) ? void 0 : t10.length) ? r10 : 0) > e10.length / 2, i10 = /^[a-z]+$/.test(e10), o10 = /[$_]{2,}/.test(e10);
    return Number(n10) + Number(a10) + Number(i10) + Number(o10) >= 2;
  }, d_ = (e10) => {
    let t10 = X(e10);
    return t10 ? t10.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/, "$<inner>") : "";
  }, dk = "never-hidden", dN = null, dS = new dd(25), dE = (e10, t10) => {
    let r10 = null, n10 = (t11) => {
      switch (e10) {
        case "pointer":
          if ("start" === t11.phase) return "pointerup";
          if (t11.target instanceof HTMLInputElement || t11.target instanceof HTMLSelectElement) return "change";
          return "click";
        case "keyboard":
          if ("start" === t11.phase) return "keydown";
          return "change";
      }
    }, a10 = { current: { kind: "uninitialized-stage", interactionUUID: oJ(), stageStart: Date.now(), interactionType: e10 } }, i10 = (r11) => {
      var i11, l11;
      if (r11.composedPath().some((e11) => e11 instanceof Element && "react-scan-toolbar-root" === e11.id) || (Date.now() - a10.current.stageStart > 2e3 && (a10.current = { kind: "uninitialized-stage", interactionUUID: oJ(), stageStart: Date.now(), interactionType: e10 }), "uninitialized-stage" !== a10.current.kind)) return;
      let s10 = performance.now();
      null == (i11 = null == t10 ? void 0 : t10.onStart) || i11.call(t10, a10.current.interactionUUID);
      let c10 = ((e11) => {
        var t11;
        let r12 = sX(e11);
        if (!r12) return;
        let n11 = r12 ? X(null == r12 ? void 0 : r12.type) : "N/A";
        if (n11 || (n11 = null != (t11 = ((e12, t12 = () => true) => {
          let r13 = e12;
          for (; r13; ) {
            let e13 = X(r13.type);
            if (e13 && t12(e13)) return e13;
            r13 = r13.return;
          }
          return null;
        })(r12, (e12) => e12.length > 2)) ? t11 : "N/A"), n11) return { componentPath: ((e12, t12 = dh) => {
          if (!e12 || !X(e12.type)) return [];
          let r13 = [], n12 = e12;
          for (; n12.return; ) {
            let e13 = d_(n12.type);
            e13 && !dx(e13) && db(e13, t12) && e13.toLowerCase() !== e13 && r13.push(e13), n12 = n12.return;
          }
          let a11 = Array(r13.length);
          for (let e13 = 0; e13 < r13.length; e13++) a11[e13] = r13[r13.length - e13 - 1];
          return a11;
        })(r12), childrenTree: {}, componentName: n11, elementFiber: r12 };
      })(r11.target);
      if (!c10) {
        null == (l11 = null == t10 ? void 0 : t10.onError) || l11.call(t10, a10.current.interactionUUID);
        return;
      }
      let d10 = {}, u6 = dT(d10);
      a10.current = { ...a10.current, interactionType: e10, blockingTimeStart: Date.now(), childrenTree: c10.childrenTree, componentName: c10.componentName, componentPath: c10.componentPath, fiberRenders: d10, kind: "interaction-start", interactionStartDetail: s10, stopListeningForRenders: u6 };
      let p2 = n10({ phase: "end", target: r11.target });
      document.addEventListener(p2, o10, { once: true }), requestAnimationFrame(() => {
        document.removeEventListener(p2, o10);
      });
    };
    document.addEventListener(n10({ phase: "start" }), i10, { capture: true });
    let o10 = (n11, i11, o11) => {
      var l11;
      if ("interaction-start" !== a10.current.kind && i11 === r10) {
        if ("pointer" === e10 && n11.target instanceof HTMLSelectElement) {
          a10.current = { kind: "uninitialized-stage", interactionUUID: oJ(), stageStart: Date.now(), interactionType: e10 };
          return;
        }
        null == (l11 = null == t10 ? void 0 : t10.onError) || l11.call(t10, a10.current.interactionUUID), a10.current = { kind: "uninitialized-stage", interactionUUID: oJ(), stageStart: Date.now(), interactionType: e10 }, dc("pointer -> click");
        return;
      }
      r10 = i11, (({ onMicroTask: e11, onRAF: t11, onTimeout: r11, abort: n12 }) => {
        queueMicrotask(() => {
          (null == n12 ? void 0 : n12()) === true || e11() && requestAnimationFrame(() => {
            (null == n12 ? void 0 : n12()) === true || t11() && setTimeout(() => {
              (null == n12 ? void 0 : n12()) !== true && r11();
            }, 0);
          });
        });
      })({ abort: o11, onMicroTask: () => "uninitialized-stage" !== a10.current.kind && (a10.current = { ...a10.current, kind: "js-end-stage", jsEndDetail: performance.now() }, true), onRAF: () => {
        var r11;
        return "js-end-stage" !== a10.current.kind && "raf-stage" !== a10.current.kind ? (null == (r11 = null == t10 ? void 0 : t10.onError) || r11.call(t10, a10.current.interactionUUID), dc("bad transition to raf"), a10.current = { kind: "uninitialized-stage", interactionUUID: oJ(), stageStart: Date.now(), interactionType: e10 }, false) : (a10.current = { ...a10.current, kind: "raf-stage", rafStart: performance.now() }, true);
      }, onTimeout: () => {
        var r11;
        if ("raf-stage" !== a10.current.kind) {
          null == (r11 = null == t10 ? void 0 : t10.onError) || r11.call(t10, a10.current.interactionUUID), a10.current = { kind: "uninitialized-stage", interactionUUID: oJ(), stageStart: Date.now(), interactionType: e10 }, dc("raf->timeout");
          return;
        }
        let n12 = Date.now(), i12 = Object.freeze({ ...a10.current, kind: "timeout-stage", blockingTimeEnd: n12, commitEnd: performance.now() });
        a10.current = { kind: "uninitialized-stage", interactionUUID: oJ(), stageStart: n12, interactionType: e10 };
        let o12 = false, l12 = (e11) => {
          var r12;
          o12 = true;
          let n13 = { detailedTiming: i12, latency: "auto-complete-race" === e11.kind ? e11.detailedTiming.commitEnd - e11.detailedTiming.interactionStartDetail : e11.entry.latency, completedAt: Date.now(), flushNeeded: true };
          null == (r12 = null == t10 ? void 0 : t10.onComplete) || r12.call(t10, i12.interactionUUID, n13, e11);
          let a11 = dS.filter((e12) => e12.interactionUUID !== i12.interactionUUID);
          return dS = dd.fromArray(a11, 25), n13;
        }, s10 = { completeInteraction: l12, endDateTime: Date.now(), startDateTime: i12.blockingTimeStart, type: e10, interactionUUID: i12.interactionUUID };
        if (dS.push(s10), dC()) setTimeout(() => {
          if (o12) return;
          l12({ kind: "auto-complete-race", detailedTiming: i12, interactionUUID: i12.interactionUUID });
          let e11 = dS.filter((e12) => e12.interactionUUID !== i12.interactionUUID);
          dS = dd.fromArray(e11, 25);
        }, 1e3);
        else {
          let e11 = dS.filter((e12) => e12.interactionUUID !== i12.interactionUUID);
          dS = dd.fromArray(e11, 25), l12({ kind: "auto-complete-race", detailedTiming: i12, interactionUUID: i12.interactionUUID });
        }
      } });
    }, l10 = (e11) => {
      let t11 = oJ();
      o10(e11, t11, () => t11 !== r10);
    };
    return "keyboard" === e10 && document.addEventListener("keypress", l10), () => {
      document.removeEventListener(n10({ phase: "start" }), i10, { capture: true }), document.removeEventListener("keypress", l10);
    };
  }, dM = (e10) => {
    var t10;
    return null == (t10 = W(e10, (e11) => {
      if (L(e11)) return true;
    })) ? void 0 : t10.stateNode;
  }, dC = () => "PerformanceEventTiming" in globalThis, dT = (e10) => {
    let t10 = (t11) => {
      var r10, n10, a10, i10, o10, l10, s10;
      let c10 = X(t11.type);
      if (!c10) return;
      let d10 = e10[c10];
      if (!d10) {
        let n11 = /* @__PURE__ */ new Set(), a11 = t11.return && sZ(t11.return), i11 = a11 && X(a11[0]);
        i11 && n11.add(i11);
        let { selfTime: o11, totalTime: l11 } = q(t11), s11 = cy(t11), d11 = { current: [], changes: /* @__PURE__ */ new Set(), changesCounts: /* @__PURE__ */ new Map() }, u9 = { fiberProps: s11.fiberProps || d11, fiberState: s11.fiberState || d11, fiberContext: s11.fiberContext || d11 };
        e10[c10] = { renderCount: 1, hasMemoCache: K(t11), wasFiberRenderMount: dz(t11), parents: n11, selfTime: o11, totalTime: l11, nodeInfo: [{ element: dM(t11), name: null != (r10 = X(t11.type)) ? r10 : "Unknown", selfTime: q(t11).selfTime }], changes: u9 };
        return;
      }
      if (null == (a10 = null == (n10 = sZ(t11)) ? void 0 : n10[0]) ? void 0 : a10.type) {
        let e11 = t11.return && sZ(t11.return), r11 = e11 && X(e11[0]);
        r11 && d10.parents.add(r11);
      }
      let { selfTime: u6, totalTime: p2 } = q(t11), h2 = cy(t11), m2 = { current: [], changes: /* @__PURE__ */ new Set(), changesCounts: /* @__PURE__ */ new Map() };
      d10.wasFiberRenderMount = d10.wasFiberRenderMount || dz(t11), d10.hasMemoCache = d10.hasMemoCache || K(t11), d10.changes = { fiberProps: dA((null == (i10 = d10.changes) ? void 0 : i10.fiberProps) || m2, h2.fiberProps || m2), fiberState: dA((null == (o10 = d10.changes) ? void 0 : o10.fiberState) || m2, h2.fiberState || m2), fiberContext: dA((null == (l10 = d10.changes) ? void 0 : l10.fiberContext) || m2, h2.fiberContext || m2) }, d10.renderCount += 1, d10.selfTime += u6, d10.totalTime += p2, d10.nodeInfo.push({ element: dM(t11), name: null != (s10 = X(t11.type)) ? s10 : "Unknown", selfTime: q(t11).selfTime });
    };
    return uQ.interactionListeningForRenders = t10, () => {
      uQ.interactionListeningForRenders === t10 && (uQ.interactionListeningForRenders = null);
    };
  }, dA = (e10, t10) => {
    let r10 = { current: [...e10.current], changes: /* @__PURE__ */ new Set(), changesCounts: /* @__PURE__ */ new Map() };
    for (let e11 of t10.current) r10.current.some((t11) => t11.name === e11.name) || r10.current.push(e11);
    for (let n10 of t10.changes) if ("string" == typeof n10 || "number" == typeof n10) {
      r10.changes.add(n10);
      let a10 = e10.changesCounts.get(n10) || 0, i10 = t10.changesCounts.get(n10) || 0;
      r10.changesCounts.set(n10, a10 + i10);
    }
    return r10;
  }, dz = (e10) => {
    if (!e10.alternate) return true;
    let t10 = e10.alternate, r10 = t10 && null != t10.memoizedState && null != t10.memoizedState.element && true !== t10.memoizedState.isDehydrated, n10 = null != e10.memoizedState && null != e10.memoizedState.element && true !== e10.memoizedState.isDehydrated;
    return !r10 && n10;
  }, d$ = (e10) => {
    let t10, r10 = /* @__PURE__ */ new Set(), n10 = (e11, n11) => {
      let a11 = "function" == typeof e11 ? e11(t10) : e11;
      if (!Object.is(a11, t10)) {
        let e12 = t10;
        t10 = (null != n11 ? n11 : "object" != typeof a11 || null === a11) ? a11 : Object.assign({}, t10, a11), r10.forEach((r11) => r11(t10, e12));
      }
    }, a10 = () => t10, i10 = { setState: n10, getState: a10, getInitialState: () => o10, subscribe: (e11, n11) => {
      let a11, i11;
      n11 ? (a11 = e11, i11 = n11) : i11 = e11;
      let o11 = a11 ? a11(t10) : void 0, l10 = (e12, t11) => {
        if (a11) {
          let r11 = a11(e12), n12 = a11(t11);
          Object.is(o11, r11) || (o11 = r11, i11(r11, n12));
        } else i11(e12, t11);
      };
      return r10.add(l10), () => r10.delete(l10);
    } }, o10 = t10 = e10(n10, a10, i10);
    return i10;
  }, dR = (e10) => e10 ? d$(e10) : d$, dO = null;
  dR()((e10) => ({ state: { events: [] }, actions: { addEvent: (t10) => {
    e10((e11) => ({ state: { events: [...e11.state.events, t10] } }));
  }, clear: () => {
    e10({ state: { events: [] } });
  } } }));
  var dj = dR()((e10, t10) => {
    let r10 = /* @__PURE__ */ new Set();
    return { state: { events: new dd(200) }, actions: { addEvent: (n10) => {
      r10.forEach((e11) => e11(n10));
      let a10 = [...t10().state.events, n10], i10 = /* @__PURE__ */ new Set();
      a10.forEach((e11) => {
        if ("interaction" !== e11.kind) {
          let t11;
          (t11 = a10.find((t12) => {
            if ("long-render" !== t12.kind && t12.id !== e11.id && (e11.data.startAt <= t12.data.startAt && e11.data.endAt <= t12.data.endAt && e11.data.endAt >= t12.data.startAt || t12.data.startAt <= e11.data.startAt && t12.data.endAt >= e11.data.startAt || e11.data.startAt <= t12.data.startAt && e11.data.endAt >= t12.data.endAt)) return true;
          })) && (() => {
            i10.add(e11.id);
          })();
        }
      });
      let o10 = a10.filter((e11) => !i10.has(e11.id));
      e10(() => ({ state: { events: dd.fromArray(o10, 200) } }));
    }, addListener: (e11) => (r10.add(e11), () => {
      r10.delete(e11);
    }), clear: () => {
      e10({ state: { events: new dd(200) } });
    } } };
  }), dP = null, dF = null, dL = null, dI = [], dD = (e10) => {
    var t10;
    let r10 = e10.filter((e11) => e11.length > 2);
    return 0 === r10.length ? null != (t10 = e10.at(-1)) ? t10 : "Unknown" : r10.at(-1);
  }, dB = (e10) => {
    switch (e10.kind) {
      case "interaction": {
        let { renderTime: t10, otherJSTime: r10, framePreparation: n10, frameConstruction: a10, frameDraw: i10 } = e10;
        return t10 + r10 + n10 + a10 + (null != i10 ? i10 : 0);
      }
      case "dropped-frames":
        return e10.otherTime + e10.renderTime;
    }
  }, dU = (e10) => {
    let t10 = dB(e10.timing);
    switch (e10.kind) {
      case "interaction":
        if (t10 < 200) return "low";
        if (t10 < 500) return "needs-improvement";
        return "high";
      case "dropped-frames":
        if (t10 < 50) return "low";
        if (t10 < 150) return "needs-improvement";
        return "high";
    }
  }, dW = eK(null), dH = ({ size: e10 = 24, className: t10 }) => rx("svg", { xmlns: "http://www.w3.org/2000/svg", width: e10, height: e10, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: l2(["lucide lucide-chevron-right", t10]), children: rx("path", { d: "m9 18 6-6-6-6" }) }), dV = ({ className: e10 = "", size: t10 = 24, events: r10 = [] }) => {
    let n10 = r10.includes(true), a10 = r10.filter((e11) => e11).length, i10 = n10 ? Math.max(0.6 * t10, 14) : Math.max(0.4 * t10, 6);
    return rx("div", { className: "relative", children: [rx("svg", { xmlns: "http://www.w3.org/2000/svg", width: t10, height: t10, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: `lucide lucide-bell ${e10}`, children: [rx("path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }), rx("path", { d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" })] }), r10.length > 0 && a10 > 0 && u0.options.value.showNotificationCount && rx("div", { className: l2(["absolute", n10 ? "-top-2.5 -right-2.5" : "-top-1 -right-1", "rounded-full", "flex items-center justify-center", "text-[8px] font-medium text-white", "aspect-square", n10 ? "bg-red-500/90" : "bg-purple-500/90"]), style: { width: `${i10}px`, height: `${i10}px`, padding: n10 ? "0.5px" : "0" }, children: n10 && (a10 > 99 ? ">99" : a10) })] });
  }, dq = ({ className: e10 = "", size: t10 = 24 }) => rx("svg", { xmlns: "http://www.w3.org/2000/svg", width: t10, height: t10, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e10, children: [rx("path", { d: "M18 6 6 18" }), rx("path", { d: "m6 6 12 12" })] }), dK = ({ className: e10 = "", size: t10 = 24 }) => rx("svg", { xmlns: "http://www.w3.org/2000/svg", width: t10, height: t10, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e10, children: [rx("path", { d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" }), rx("path", { d: "M16 9a5 5 0 0 1 0 6" }), rx("path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728" })] }), dG = ({ className: e10 = "", size: t10 = 24 }) => rx("svg", { xmlns: "http://www.w3.org/2000/svg", width: t10, height: t10, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e10, children: [rx("path", { d: "M16 9a5 5 0 0 1 .95 2.293" }), rx("path", { d: "M19.364 5.636a9 9 0 0 1 1.889 9.96" }), rx("path", { d: "m2 2 20 20" }), rx("path", { d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11" }), rx("path", { d: "M9.828 4.172A.686.686 0 0 1 11 4.657v.686" })] }), dX = ({ size: e10 = 24, className: t10 }) => rx("svg", { xmlns: "http://www.w3.org/2000/svg", width: e10, height: e10, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: l2(["lucide lucide-arrow-left", t10]), children: [rx("path", { d: "m12 19-7-7 7-7" }), rx("path", { d: "M19 12H5" })] }), dJ = ({ className: e10 = "", size: t10 = 24 }) => rx("svg", { xmlns: "http://www.w3.org/2000/svg", width: t10, height: t10, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e10, children: [rx("path", { d: "M14 4.1 12 6" }), rx("path", { d: "m5.1 8-2.9-.8" }), rx("path", { d: "m6 12-1.9 2" }), rx("path", { d: "M7.2 2.2 8 5.1" }), rx("path", { d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" })] }), dY = ({ className: e10 = "", size: t10 = 24 }) => rx("svg", { xmlns: "http://www.w3.org/2000/svg", width: t10, height: t10, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e10, children: [rx("path", { d: "M10 8h.01" }), rx("path", { d: "M12 12h.01" }), rx("path", { d: "M14 8h.01" }), rx("path", { d: "M16 12h.01" }), rx("path", { d: "M18 8h.01" }), rx("path", { d: "M6 8h.01" }), rx("path", { d: "M7 16h10" }), rx("path", { d: "M8 12h.01" }), rx("rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" })] }), dZ = ({ className: e10 = "", size: t10 = 24 }) => rx("svg", { xmlns: "http://www.w3.org/2000/svg", width: t10, height: t10, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e10, style: { transform: "rotate(180deg)" }, children: [rx("circle", { cx: "12", cy: "12", r: "10" }), rx("path", { d: "m4.9 4.9 14.2 14.2" })] }), dQ = ({ className: e10 = "", size: t10 = 24 }) => rx("svg", { xmlns: "http://www.w3.org/2000/svg", width: t10, height: t10, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: e10, children: [rx("polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7" }), rx("polyline", { points: "16 17 22 17 22 11" })] }), d0 = ({ children: e10, triggerContent: t10, wrapperProps: r10 }) => {
    var n10;
    let [a10, i10] = e9("closed"), [o10, l10] = e9(null), [s10, c10] = e9({ width: window.innerWidth, height: window.innerHeight }), d10 = tr(null), u6 = tr(null), p2 = ti(uV), h2 = tr(false);
    te(() => {
      let e11 = () => {
        c10({ width: window.innerWidth, height: window.innerHeight }), m2();
      };
      return window.addEventListener("resize", e11), () => window.removeEventListener("resize", e11);
    }, []);
    let m2 = () => {
      if (d10.current && p2) {
        let e11 = d10.current.getBoundingClientRect(), t11 = p2.getBoundingClientRect(), r11 = e11.left + e11.width / 2, n11 = e11.top;
        l10(new DOMRect(r11 - t11.left, n11 - t11.top, e11.width, e11.height));
      }
    };
    te(() => {
      m2();
    }, [d10.current]), te(() => {
      if ("opening" === a10) {
        let e11 = setTimeout(() => i10("open"), 120);
        return () => clearTimeout(e11);
      }
      if ("closing" === a10) {
        let e11 = setTimeout(() => i10("closed"), 120);
        return () => clearTimeout(e11);
      }
    }, [a10]), te(() => {
      let e11 = setInterval(() => {
        h2.current || "closed" === a10 || i10("closing");
      }, 1e3);
      return () => clearInterval(e11);
    }, [a10]);
    let f2 = (() => {
      var e11;
      if (!o10 || !p2) return { top: 0, left: 0 };
      let t11 = p2.getBoundingClientRect(), r11 = (null == (e11 = u6.current) ? void 0 : e11.offsetHeight) || 40, n11 = o10.x + t11.left, a11 = o10.y + t11.top, i11 = n11, l11 = a11 - 4;
      return i11 - 87.5 < 5 ? i11 = 92.5 : i11 + 87.5 > s10.width - 5 && (i11 = s10.width - 5 - 87.5), l11 - r11 < 5 && (l11 = a11 + o10.height + 4), { top: l11 - t11.top, left: i11 - t11.left };
    })();
    return rx(ez, { children: [p2 && o10 && "closed" !== a10 && ((n10 = eT(rs, { __v: rx("div", { ref: u6, className: l2(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg", "transition-[opacity] duration-120 ease-out", 'after:content-[""] after:absolute after:top-[100%]', "after:left-1/2 after:-translate-x-1/2", "after:w-[10px] after:h-[6px]", "after:border-l-[5px] after:border-l-transparent", "after:border-r-[5px] after:border-r-transparent", "after:border-t-[6px] after:border-t-white", "pointer-events-none", "opening" === a10 || "closing" === a10 ? "opacity-0" : "opacity-100"]), style: { top: f2.top + "px", left: f2.left + "px", transform: `translate(-50%, calc(-100% - 4px)) scale(${"open" === a10 ? 1 : 0.97})`, minWidth: "175px", willChange: "opacity, transform" }, children: e10 }), h: p2 })).containerInfo = p2, n10), rx("div", { ref: d10, onMouseEnter: () => {
      h2.current = true, m2(), i10("opening");
    }, onMouseLeave: () => {
      h2.current = false, m2(), i10("closing");
    }, ...r10, children: t10 })] });
  }, d1 = ({ selectedEvent: e10 }) => {
    let { notificationState: t10, setNotificationState: r10, setRoute: n10 } = ti(dW);
    return rx("div", { className: l2(["flex w-full justify-between items-center px-3 py-2 text-xs"]), children: [rx("div", { className: l2(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]), children: [rx("button", { onClick: () => {
      n10({ route: "render-visualization", routeMessage: null });
    }, className: l2(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1", "render-visualization" === t10.route || "render-explanation" === t10.route ? "text-white bg-[#7521c8] rounded-sm" : "text-[#6E6E77] bg-[#18181B] rounded-sm"]), children: "Ranked" }), rx("button", { onClick: () => {
      n10({ route: "other-visualization", routeMessage: null });
    }, className: l2(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1", "other-visualization" === t10.route ? "text-white bg-[#7521c8] rounded-sm" : "text-[#6E6E77] bg-[#18181B] rounded-sm"]), children: "Overview" }), rx("button", { onClick: () => {
      n10({ route: "optimize", routeMessage: null });
    }, className: l2(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1", "optimize" === t10.route ? "text-white bg-[#7521c8] rounded-sm" : "text-[#6E6E77] bg-[#18181B] rounded-sm"]), children: rx("span", { children: "Prompts" }) })] }), rx(d0, { triggerContent: rx("button", { onClick: () => {
      r10((e11) => {
        e11.audioNotificationsOptions.enabled && "closed" !== e11.audioNotificationsOptions.audioContext.state && e11.audioNotificationsOptions.audioContext.close();
        let t11 = e11.audioNotificationsOptions.enabled;
        localStorage.setItem("react-scan-notifications-audio", String(!t11));
        let r11 = new AudioContext();
        return e11.audioNotificationsOptions.enabled || oY(r11), t11 && r11.close(), { ...e11, audioNotificationsOptions: t11 ? { audioContext: null, enabled: false } : { audioContext: r11, enabled: true } };
      });
    }, className: "ml-auto", children: rx("div", { className: l2(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]), children: [rx("span", { children: "Alerts" }), t10.audioNotificationsOptions.enabled ? rx(dK, { size: 16, className: "text-[#6E6E77]" }) : rx(dG, { size: 16, className: "text-[#6E6E77]" })] }) }), children: rx(ez, { children: "Play a chime when a slowdown is recorded" }) })] });
  }, d2 = (e10) => {
    let t10 = "";
    return e10.toSorted((e11, t11) => t11.totalTime - e11.totalTime).slice(0, 30).filter((e11) => e11.totalTime > 5).forEach((e11) => {
      let r10 = "";
      r10 += "Component Name:", r10 += e11.name, r10 += "\n", r10 += `Rendered: ${e11.count} times
`, r10 += `Sum of self times for ${e11.name} is ${e11.totalTime.toFixed(0)}ms
`, e11.changes.props.length > 0 && (r10 += `Changed props for all ${e11.name} instances ("name:count" pairs)
`, e11.changes.props.forEach((e12) => {
        r10 += `${e12.name}:${e12.count}x
`;
      })), e11.changes.state.length > 0 && (r10 += `Changed state for all ${e11.name} instances ("hook index:count" pairs)
`, e11.changes.state.forEach((e12) => {
        r10 += `${e12.index}:${e12.count}x
`;
      })), e11.changes.context.length > 0 && (r10 += `Changed context for all ${e11.name} instances ("context display name (if exists):count" pairs)
`, e11.changes.context.forEach((e12) => {
        r10 += `${e12.name}:${e12.count}x
`;
      })), t10 += r10, t10 += "\n";
    }), t10;
  }, d5 = (e10, t10) => (() => {
    switch (e10) {
      case "data":
        switch (t10.kind) {
          case "dropped-frames":
            return (({ renderTime: e11, otherTime: t11, formattedReactData: r10 }) => `I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e11.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t11}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${r10}`)({ formattedReactData: d2(t10.groupedFiberRenders), renderTime: t10.groupedFiberRenders.reduce((e11, t11) => e11 + t11.totalTime, 0), otherTime: t10.timing.otherTime });
          case "interaction":
            return (({ renderTime: e11, eHandlerTimeExcludingRenders: t11, toRafTime: r10, commitTime: n10, framePresentTime: a10, formattedReactData: i10 }) => `I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${e11.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${t11.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${r10.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${n10.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null === a10 ? "" : `- how long it took from dom commit for the frame to be presented: ${a10.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${i10}`)({ commitTime: t10.timing.frameConstruction, eHandlerTimeExcludingRenders: t10.timing.otherJSTime, formattedReactData: d2(t10.groupedFiberRenders), framePresentTime: t10.timing.frameDraw, renderTime: t10.groupedFiberRenders.reduce((e11, t11) => e11 + t11.totalTime, 0), toRafTime: t10.timing.framePreparation });
        }
      case "explanation":
        switch (t10.kind) {
          case "dropped-frames":
            return (({ renderTime: e11, otherTime: t11, formattedReactData: r10 }) => `Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e11.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t11}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r10}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`)({ formattedReactData: d2(t10.groupedFiberRenders), renderTime: t10.groupedFiberRenders.reduce((e11, t11) => e11 + t11.totalTime, 0), otherTime: t10.timing.otherTime });
          case "interaction":
            return (({ interactionType: e11, name: t11, time: r10, renderTime: n10, eHandlerTimeExcludingRenders: a10, toRafTime: i10, commitTime: o10, framePresentTime: l10, formattedReactData: s10 }) => `Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${e11} on a component named ${t11}. This means, roughly, the component that handled the ${e11} event was named ${t11}.

We have a set of high level, and low level data about the performance issue.

The click took ${r10.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${n10.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${a10.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${i10.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${o10.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null === l10 ? "" : `- how long it took from dom commit for the frame to be presented: ${l10.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${s10}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`)({ commitTime: t10.timing.frameConstruction, eHandlerTimeExcludingRenders: t10.timing.otherJSTime, formattedReactData: d2(t10.groupedFiberRenders), framePresentTime: t10.timing.frameDraw, interactionType: t10.type, name: dD(t10.componentPath), renderTime: t10.groupedFiberRenders.reduce((e11, t11) => e11 + t11.totalTime, 0), time: dB(t10.timing), toRafTime: t10.timing.framePreparation });
        }
      case "fix":
        switch (t10.kind) {
          case "dropped-frames":
            return (({ renderTime: e11, otherTime: t11, formattedReactData: r10 }) => `You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e11.toFixed(0)}ms
- other time: ${t11}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r10}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`)({ formattedReactData: d2(t10.groupedFiberRenders), renderTime: t10.groupedFiberRenders.reduce((e11, t11) => e11 + t11.totalTime, 0), otherTime: t10.timing.otherTime });
          case "interaction":
            return (({ interactionType: e11, name: t11, componentPath: r10, time: n10, renderTime: a10, eHandlerTimeExcludingRenders: i10, toRafTime: o10, commitTime: l10, framePresentTime: s10, formattedReactData: c10 }) => `You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${e11} on the component named ${t11}. This component has the following ancestors ${r10}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${n10.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${a10.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${i10.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${o10.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${l10.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null === s10 ? "" : `- how long it took from dom commit for the frame to be presented: ${s10.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${c10}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`)({ commitTime: t10.timing.frameConstruction, componentPath: t10.componentPath.join(">"), eHandlerTimeExcludingRenders: t10.timing.otherJSTime, formattedReactData: d2(t10.groupedFiberRenders), framePresentTime: t10.timing.frameDraw, interactionType: t10.type, name: dD(t10.componentPath), renderTime: t10.groupedFiberRenders.reduce((e11, t11) => e11 + t11.totalTime, 0), time: dB(t10.timing), toRafTime: t10.timing.framePreparation });
        }
    }
  })(), d4 = ({ selectedEvent: e10 }) => {
    let [t10, r10] = e9("fix"), [n10, a10] = e9(false);
    return rx("div", { className: l2(["w-full h-full"]), children: [rx("div", { className: l2(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]), children: [rx("div", { className: l2(["bg-[#18181B] p-1 rounded-t-sm"]), children: rx("div", { className: l2(["flex items-center gap-x-1"]), children: [rx("button", { onClick: () => r10("fix"), className: l2(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm", "fix" === t10 ? "text-white bg-[#7521c8]" : "text-[#6E6E77] hover:text-white"]), children: "Fix" }), rx("button", { onClick: () => r10("explanation"), className: l2(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm", "explanation" === t10 ? "text-white bg-[#7521c8]" : "text-[#6E6E77] hover:text-white"]), children: "Explanation" }), rx("button", { onClick: () => r10("data"), className: l2(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm", "data" === t10 ? "text-white bg-[#7521c8]" : "text-[#6E6E77] hover:text-white"]), children: "Data" })] }) }), rx("div", { className: l2(["overflow-y-auto h-full"]), children: rx("pre", { className: l2(["p-2 h-full", "whitespace-pre-wrap break-words", "text-gray-300 font-mono "]), children: d5(t10, e10) }) })] }), rx("button", { onClick: async () => {
      let r11 = d5(t10, e10);
      await navigator.clipboard.writeText(r11), a10(true), setTimeout(() => a10(false), 1e3);
    }, className: l2(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm", "hover:text-white transition-colors duration-200", "flex items-center justify-center gap-x-2 text-xs"]), children: [rx("span", { children: n10 ? "Copied!" : "Copy Prompt" }), rx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: l2(["transition-transform duration-200", n10 && "scale-110"]), children: n10 ? rx("path", { d: "M20 6L9 17l-5-5" }) : rx(ez, { children: [rx("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }), rx("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })] }) })] })] });
  }, d3 = ({ selectedEvent: e10 }) => {
    var t10, r10;
    let [n10] = e9(null != (t10 = u5()) && t10), { notificationState: a10 } = ti(dW), [i10, o10] = e9((null == (r10 = a10.routeMessage) ? void 0 : r10.name) ? [a10.routeMessage.name] : []), l10 = ((e11, t11) => {
      switch (e11.kind) {
        case "dropped-frames":
          return [...t11 ? [{ name: "Total Processing Time", time: dB(e11.timing), color: "bg-red-500", kind: "total-processing-time" }] : [{ name: "Renders", time: e11.timing.renderTime, color: "bg-purple-500", kind: "render" }, { name: "JavaScript, DOM updates, Draw Frame", time: e11.timing.otherTime, color: "bg-[#4b4b4b]", kind: "other-frame-drop" }]];
        case "interaction":
          return [...t11 ? [] : [{ name: "Renders", time: e11.timing.renderTime, color: "bg-purple-500", kind: "render" }], { name: t11 ? "React Renders, Hooks, Other JavaScript" : "JavaScript/React Hooks ", time: e11.timing.otherJSTime, color: "bg-[#EFD81A]", kind: "other-javascript" }, { name: "Update DOM and Draw New Frame", time: dB(e11.timing) - e11.timing.renderTime - e11.timing.otherJSTime, color: "bg-[#1D3A66]", kind: "other-not-javascript" }];
      }
    })(e10, n10), s10 = ti(uV);
    te(() => {
      var e11;
      if (null == (e11 = a10.routeMessage) ? void 0 : e11.name) {
        let e12 = null == s10 ? void 0 : s10.querySelector("#overview-scroll-container"), t11 = null == s10 ? void 0 : s10.querySelector(`#react-scan-overview-bar-${a10.routeMessage.name}`);
        if (e12 && t11) {
          let r11 = t11.getBoundingClientRect().top, n11 = e12.getBoundingClientRect().top;
          e12.scrollTop = e12.scrollTop + (r11 - n11);
        }
      }
    }, [a10.route]), te(() => {
      "other-visualization" === a10.route && o10((e11) => {
        var t11;
        return (null == (t11 = a10.routeMessage) ? void 0 : t11.name) ? [a10.routeMessage.name] : e11;
      });
    }, [a10.route]);
    let c10 = l10.reduce((e11, t11) => e11 + t11.time, 0);
    return rx("div", { className: "rounded-sm border border-zinc-800 text-xs", children: [rx("div", { className: "p-2 border-b border-zinc-800 bg-zinc-900/50", children: rx("div", { className: "flex items-center justify-between", children: [rx("h3", { className: "text-xs font-medium", children: "What was time spent on?" }), rx("span", { className: "text-xs text-zinc-400", children: ["Total: ", c10.toFixed(0), "ms"] })] }) }), rx("div", { className: "divide-y divide-zinc-800", children: l10.map((t11) => {
      let r11 = i10.includes(t11.kind);
      return rx("div", { id: `react-scan-overview-bar-${t11.kind}`, children: [rx("button", { onClick: () => o10((e11) => e11.includes(t11.kind) ? e11.filter((e12) => e12 !== t11.kind) : [...e11, t11.kind]), className: "w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors", children: rx("div", { className: "flex-1", children: [rx("div", { className: "flex items-center justify-between mb-2", children: [rx("div", { className: "flex items-center gap-0.5", children: [rx("svg", { className: `h-4 w-4 text-zinc-400 transition-transform ${r11 ? "rotate-90" : ""}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: rx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) }), rx("span", { className: "font-medium flex items-center text-left", children: t11.name })] }), rx("span", { className: " text-zinc-400", children: [t11.time.toFixed(0), "ms"] })] }), rx("div", { className: "h-1 bg-zinc-800 rounded-full overflow-hidden", children: rx("div", { className: `h-full ${t11.color} transition-all`, style: { width: `${t11.time / c10 * 100}%` } }) })] }) }), r11 && rx("div", { className: "bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3", children: rx("p", { className: " text-zinc-400 mb-4 text-xs", children: (() => {
        switch (e10.kind) {
          case "interaction":
            switch (t11.kind) {
              case "render":
                return rx(ue, { input: d6(e10) });
              case "other-javascript":
                return rx(ue, { input: d9(e10) });
              case "other-not-javascript":
                return rx(ue, { input: d7(e10) });
            }
          case "dropped-frames":
            switch (t11.kind) {
              case "total-processing-time":
                return rx(ue, { input: { kind: "total-processing", data: { time: dB(e10.timing) } } });
              case "render":
                return rx(ez, { children: rx(ue, { input: { kind: "render", data: { topByTime: e10.groupedFiberRenders.toSorted((e11, t12) => t12.totalTime - e11.totalTime).slice(0, 3).map((t12) => ({ name: t12.name, percentage: t12.totalTime / dB(e10.timing) })) } } }) });
              case "other-frame-drop":
                return rx(ue, { input: { kind: "other" } });
            }
        }
      })() }) })] }, t11.kind);
    }) })] });
  }, d7 = (e10) => {
    let t10 = e10.groupedFiberRenders.reduce((e11, t11) => e11 + t11.count, 0), r10 = e10.timing.renderTime, n10 = dB(e10.timing);
    return t10 > 100 ? { kind: "high-render-count-update-dom-draw-frame", data: { count: t10, percentageOfTotal: r10 / n10 * 100, copyButton: rx(d8, {}) } } : { kind: "update-dom-draw-frame", data: { copyButton: rx(d8, {}) } };
  }, d8 = () => {
    let [e10, t10] = e9(false), { notificationState: r10 } = ti(dW);
    return rx("button", { onClick: async () => {
      r10.selectedEvent && (await navigator.clipboard.writeText(d5("explanation", r10.selectedEvent)), t10(true), setTimeout(() => t10(false), 1e3));
    }, className: "bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3", children: [rx("span", { children: e10 ? "Copied!" : "Copy Prompt" }), rx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: l2(["transition-transform duration-200", e10 && "scale-110"]), children: e10 ? rx("path", { d: "M20 6L9 17l-5-5" }) : rx(ez, { children: [rx("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }), rx("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })] }) })] });
  }, d6 = (e10) => e10.timing.renderTime / dB(e10.timing) > 0.3 ? { kind: "render", data: { topByTime: e10.groupedFiberRenders.toSorted((e11, t10) => t10.totalTime - e11.totalTime).slice(0, 3).map((t10) => ({ percentage: t10.totalTime / dB(e10.timing), name: t10.name })) } } : { kind: "other" }, d9 = (e10) => {
    let t10 = e10.groupedFiberRenders.reduce((e11, t11) => e11 + t11.count, 0);
    return e10.timing.otherJSTime / dB(e10.timing) < 0.2 ? { kind: "js-explanation-base" } : e10.groupedFiberRenders.find((e11) => e11.count > 200) || e10.groupedFiberRenders.reduce((e11, t11) => e11 + t11.count, 0) > 500 ? { kind: "high-render-count-high-js", data: { renderCount: t10, topByCount: e10.groupedFiberRenders.filter((e11) => e11.count > 100).toSorted((e11, t11) => t11.count - e11.count).slice(0, 3) } } : e10.timing.otherJSTime / dB(e10.timing) > 0.3 ? e10.timing.renderTime > 0.2 ? { kind: "js-explanation-base" } : { kind: "low-render-count-high-js", data: { renderCount: t10 } } : { kind: "js-explanation-base" };
  }, ue = ({ input: e10 }) => {
    switch (e10.kind) {
      case "total-processing":
        return rx("div", { className: l2(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]), children: [rx("p", { children: ["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ", "<=16ms"] }), rx("p", { children: 'To debug the issue, check the "Ranked" tab to see if there are significant component renders' }), rx("p", { children: "On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build" }), rx("p", { children: ["To understand precisely what caused the slowdown while in production, use the ", rx("strong", { children: "Chrome profiler" }), " and analyze the function call times."] }), rx("p", {})] });
      case "render":
        return rx("div", { className: l2(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]), children: [rx("p", { children: "This is the time it took React to run components, and internal logic to handle the output of your component." }), rx("div", { className: l2(["flex flex-col"]), children: [rx("p", { children: "The slowest components for this time period were:" }), e10.data.topByTime.map((e11) => rx("div", { children: [rx("strong", { children: e11.name }), ":", " ", (100 * e11.percentage).toFixed(0), "% of total"] }, e11.name))] }), rx("p", { children: 'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab' }), rx("p", { children: 'The "Ranked" tab shows the render times of every component.' }), rx("p", { children: "The render times of the same components are grouped together into one bar." }), rx("p", { children: "Clicking the component will show you what props, state, or context caused the component to re-render." })] });
      case "js-explanation-base":
        return rx("div", { className: l2(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]), children: [rx("p", { children: "This is the period when JavaScript hooks and other JavaScript outside of React Renders run." }), rx("p", { children: ["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ", rx("code", { children: "useEffect" }), "'s or a large number of useEffect's called, but this can also be JavaScript event handlers (", rx("code", { children: "'onclick'" }), ", ", rx("code", { children: "'onchange'" }), ") that performed expensive computation."] }), rx("p", { children: "If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run." }), rx("p", { children: ["You should profile your app using the", " ", rx("strong", { children: "Chrome DevTools profiler" }), " to learn exactly which functions took the longest to execute."] })] });
      case "high-render-count-high-js":
        return rx("div", { className: l2(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]), children: [rx("p", { children: "This is the period when JavaScript hooks and other JavaScript outside of React Renders run." }), 0 === e10.data.renderCount ? rx(ez, { children: [rx("p", { children: "There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API" }), rx("p", { children: ["You should try to reproduce the slowdown while profiling your website with the", rx("strong", { children: "Chrome DevTools profiler" }), " to see exactly what functions took the longest to execute."] })] }) : rx(ez, { children: [" ", rx("p", { children: ["There were ", rx("strong", { children: e10.data.renderCount }), " renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ", rx("code", { children: "useEffects" }), "."] }), rx("div", { className: l2(["flex flex-col"]), children: [rx("p", { children: "You should try optimizing the renders of:" }), e10.data.topByCount.map((e11) => rx("div", { children: ["- ", rx("strong", { children: e11.name }), " (rendered ", e11.count, "x)"] }, e11.name))] }), "and then checking if the problem still exists.", rx("p", { children: ["You can also try profiling your app using the", " ", rx("strong", { children: "Chrome DevTools profiler" }), " to see exactly what functions took the longest to execute."] })] })] });
      case "low-render-count-high-js":
        return rx("div", { className: l2(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]), children: [rx("p", { children: "This is the period when JavaScript hooks and other JavaScript outside of React Renders run." }), rx("p", { children: ["There were only ", rx("strong", { children: e10.data.renderCount }), " renders detected, which means either you had very expensive hooks like", " ", rx("code", { children: "useEffect" }), "/", rx("code", { children: "useLayoutEffect" }), ", or there is other JavaScript running during this interaction that took up the majority of the time."] }), rx("p", { children: ["To understand precisely what caused the slowdown, use the", " ", rx("strong", { children: "Chrome profiler" }), " and analyze the function call times."] })] });
      case "high-render-count-update-dom-draw-frame":
        return rx("div", { className: l2(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]), children: [rx("p", { children: "These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction." }), rx("p", { children: "This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations." }), rx("p", { children: ["During this interaction, there were", " ", rx("strong", { children: e10.data.count }), " renders, which was", " ", rx("strong", { children: [e10.data.percentageOfTotal.toFixed(0), "%"] }), " of the time spent processing"] }), rx("p", { children: "The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame." }), rx("p", { children: 'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.' }), rx("p", { children: "If you use an AI-based code editor, you can export the performance data collected as a prompt." }), rx("p", { children: e10.data.copyButton }), rx("p", { children: "Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem." }), rx("p", { children: 'For a larger selection of prompts, try the "Prompts" tab' })] });
      case "update-dom-draw-frame":
        return rx("div", { className: l2(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]), children: [rx("p", { children: "These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction." }), rx("p", { children: "This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations." }), rx("p", { children: "If you use an AI-based code editor, you can export the performance data collected as a prompt." }), rx("p", { children: e10.data.copyButton }), rx("p", { children: "Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem." }), rx("p", { children: 'For a larger selection of prompts, try the "Prompts" tab' })] });
      case "other":
        return rx("div", { className: l2(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]), children: [rx("p", { children: ["This is the time it took to run everything other than React renders. This can be hooks like ", rx("code", { children: "useEffect" }), ", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."] }), rx("p", { children: ["To get a better picture of what happened, profile your app using the", " ", rx("strong", { children: "Chrome profiler" }), " when the performance problem arises."] })] });
    }
  }, ut = null, ur = null, un = tC({ kind: "idle", current: null }), ua = null, ui = 0, uo = 1 / 60, ul = () => {
    ua && cancelAnimationFrame(ua), ua = requestAnimationFrame((e10) => {
      if (!ut || !ur) return;
      let t10 = ui ? Math.min((e10 - ui) / 1e3, 0.05) : uo;
      ui = e10;
      let r10 = 1.8 * t10;
      ur.clearRect(0, 0, ut.width, ut.height);
      let n10 = "hsl(271, 76%, 53%)", a10 = un.value, { alpha: i10, current: o10 } = (() => {
        var e11, t11, r11;
        switch (a10.kind) {
          case "transition": {
            let t12 = (null == (e11 = a10.current) ? void 0 : e11.alpha) && a10.current.alpha > 0 ? a10.current : a10.transitionTo;
            return { alpha: t12 ? t12.alpha : 0, current: t12 };
          }
          case "move-out":
            return { alpha: null != (r11 = null == (t11 = a10.current) ? void 0 : t11.alpha) ? r11 : 0, current: a10.current };
          case "idle":
            return { alpha: 1, current: a10.current };
        }
      })();
      switch (null == o10 || o10.rects.forEach((e11) => {
        ur && (ur.shadowColor = n10, ur.shadowBlur = 6, ur.strokeStyle = n10, ur.lineWidth = 2, ur.globalAlpha = i10, ur.beginPath(), ur.rect(e11.left, e11.top, e11.width, e11.height), ur.stroke(), ur.shadowBlur = 0, ur.beginPath(), ur.rect(e11.left, e11.top, e11.width, e11.height), ur.stroke());
      }), a10.kind) {
        case "move-out":
          if (0 === a10.current.alpha) {
            un.value = { kind: "idle", current: null }, ui = 0;
            return;
          }
          a10.current.alpha <= 0.01 && (a10.current.alpha = 0), a10.current.alpha = Math.max(0, a10.current.alpha - r10), ul();
          return;
        case "transition":
          if (a10.current && a10.current.alpha > 0) {
            a10.current.alpha = Math.max(0, a10.current.alpha - r10), ul();
            return;
          }
          if (1 === a10.transitionTo.alpha) {
            un.value = { kind: "idle", current: a10.transitionTo }, ui = 0;
            return;
          }
          a10.transitionTo.alpha = Math.min(a10.transitionTo.alpha + r10, 1), ul();
        case "idle":
          ui = 0;
          return;
      }
    });
  }, us = null;
  function uc() {
    (null == ut ? void 0 : ut.parentNode) && ut.parentNode.removeChild(ut), ut = null, ur = null;
  }
  var ud = () => {
    var e10, t10;
    let r10 = un.value.current ? un.value.current : "transition" === un.value.kind ? un.value.transitionTo : null;
    if (r10) {
      if ("transition" === un.value.kind) {
        un.value = { kind: "move-out", current: (null == (e10 = un.value.current) ? void 0 : e10.alpha) === 0 ? un.value.transitionTo : null != (t10 = un.value.current) ? t10 : un.value.transitionTo };
        return;
      }
      un.value = { kind: "move-out", current: { alpha: 0, ...r10 } };
    }
  }, uu = ({ selectedEvent: e10 }) => {
    let t10 = dB(e10.timing), r10 = t10 - e10.timing.renderTime, [n10] = e9(u5()), a10 = e10.groupedFiberRenders.map((e11) => ({ event: e11, kind: "render", totalTime: n10 ? e11.count : e11.totalTime })), i10 = (() => {
      switch (e10.kind) {
        case "dropped-frames":
          return e10.timing.renderTime / t10 < 0.1;
        case "interaction":
          return (e10.timing.otherJSTime + e10.timing.renderTime) / t10 < 0.2;
      }
    })();
    "interaction" !== e10.kind || n10 || a10.push({ kind: "other-javascript", totalTime: e10.timing.otherJSTime }), i10 && !n10 && ("interaction" === e10.kind ? a10.push({ kind: "other-not-javascript", totalTime: dB(e10.timing) - e10.timing.renderTime - e10.timing.otherJSTime }) : a10.push({ kind: "other-frame-drop", totalTime: r10 }));
    let o10 = tr({ lastCallAt: null, timer: null }), l10 = a10.reduce((e11, t11) => e11 + t11.totalTime, 0);
    return rx("div", { className: l2(["flex flex-col h-full w-full gap-y-1"]), children: [n10 && 0 === a10.length ? rx("div", { className: "flex flex-col items-center justify-center h-full text-zinc-400", children: [rx("p", { className: "text-sm w-full text-left text-white mb-1.5", children: "No data available" }), rx("p", { className: "text-x w-full text-lefts", children: "No data was collected during this period" })] }) : 0 === a10.length ? rx("div", { className: "flex flex-col items-center justify-center h-full text-zinc-400", children: [rx("p", { className: "text-sm w-full text-left text-white mb-1.5", children: "No renders collected" }), rx("p", { className: "text-x w-full text-lefts", children: "There were no renders during this period" })] }) : void 0, a10.toSorted((e11, t11) => t11.totalTime - e11.totalTime).map((e11) => rx(up, { bars: a10, bar: e11, debouncedMouseEnter: o10, totalBarTime: l10, isProduction: n10 }, "render" === e11.kind ? e11.event.id : e11.kind))] });
  }, up = ({ bar: e10, debouncedMouseEnter: t10, totalBarTime: r10, isProduction: n10, bars: a10, depth: i10 = 0 }) => {
    var o10;
    let { setNotificationState: l10, setRoute: s10 } = ti(dW), [c10, d10] = e9(false), u6 = "render" !== e10.kind || 0 === e10.event.parents.size, p2 = a10.filter((t11) => "render" === t11.kind && "render" === e10.kind && e10.event.parents.has(t11.event.name) && t11.event.name !== e10.event.name), h2 = "render" === e10.kind ? Array.from(e10.event.parents).filter((e11) => !a10.some((t11) => "render" === t11.kind && t11.event.name === e11)) : [];
    return rx("div", { className: "w-full", children: [rx("div", { className: l2(["w-full flex items-center relative text-xs min-w-0"]), children: [rx("button", { onMouseLeave: () => {
      t10.current.timer && clearTimeout(t10.current.timer), ud();
    }, onMouseEnter: async () => {
      let r11 = async () => {
        if (t10.current.lastCallAt = Date.now(), "render" !== e10.kind) {
          let e11 = un.value.current ? un.value.current : "transition" === un.value.kind ? un.value.transitionTo : null;
          if (!e11) {
            un.value = { kind: "idle", current: null };
            return;
          }
          un.value = { kind: "move-out", current: { alpha: 0, ...e11 } };
          return;
        }
        let r12 = un.value, n11 = (() => {
          switch (r12.kind) {
            case "transition":
              return r12.transitionTo;
            case "idle":
            case "move-out":
              return r12.current;
          }
        })(), a11 = [];
        if ("transition" === r12.kind) {
          let t11 = r12.current && r12.current.alpha > 0 ? "fading-out" : "fading-in";
          (() => {
            switch (t11) {
              case "fading-in":
                un.value = { kind: "transition", current: r12.transitionTo, transitionTo: { rects: a11, alpha: 0, name: e10.event.name } };
                return;
              case "fading-out":
                un.value = { kind: "transition", current: un.value.current ? { alpha: 0, ...un.value.current } : null, transitionTo: { rects: a11, alpha: 0, name: e10.event.name } };
                return;
            }
          })();
        } else un.value = { kind: "transition", transitionTo: { rects: a11, alpha: 0, name: e10.event.name }, current: n11 ? { alpha: 0, ...n11 } : null };
        for await (let t11 of c1(e10.event.elements.filter((e11) => e11 instanceof Element))) t11.forEach(({ boundingClientRect: e11 }) => {
          a11.push(e11);
        }), ul();
      };
      if (t10.current.lastCallAt && Date.now() - t10.current.lastCallAt < 200) {
        t10.current.timer && clearTimeout(t10.current.timer), t10.current.timer = setTimeout(() => {
          r11();
        }, 200);
        return;
      }
      r11();
    }, onClick: () => {
      "render" === e10.kind ? (l10((t11) => ({ ...t11, selectedFiber: e10.event })), s10({ route: "render-explanation", routeMessage: null })) : s10({ route: "other-visualization", routeMessage: { kind: "auto-open-overview-accordion", name: e10.kind } });
    }, className: l2(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]), children: [rx("div", { style: { minWidth: "fit-content", width: `${e10.totalTime / r10 * 100}%` }, className: l2(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0", "render" === e10.kind && "bg-[#412162] group-hover:bg-[#5b2d89]", "other-frame-drop" === e10.kind && "bg-[#44444a] group-hover:bg-[#6a6a6a]", "other-javascript" === e10.kind && "bg-[#efd81a6b] group-hover:bg-[#efda1a2f]", "other-not-javascript" === e10.kind && "bg-[#214379d4] group-hover:bg-[#21437982]"]) }), rx("div", { className: l2(["absolute inset-0 flex items-center px-2", "min-w-0"]), children: rx("div", { className: "flex items-center gap-x-2 min-w-0 w-full", children: [rx("span", { className: l2(["truncate"]), children: (() => {
      switch (e10.kind) {
        case "other-frame-drop":
          return "JavaScript, DOM updates, Draw Frame";
        case "other-javascript":
          return "JavaScript/React Hooks";
        case "other-not-javascript":
          return "Update DOM and Draw New Frame";
        case "render":
          return e10.event.name;
      }
    })() }), "render" === e10.kind && !(o10 = e10.event).wasFiberRenderMount && !o10.hasMemoCache && 0 === o10.changes.context.length && 0 === o10.changes.props.length && 0 === o10.changes.state.length && rx("div", { style: { lineHeight: "10px" }, className: l2(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]), children: "Memoizable" })] }) })] }), rx("button", { onClick: () => "render" === e10.kind && !u6 && d10(!c10), className: l2(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]", !u6 && "hover:bg-[#0f0f0f]", "render" !== e10.kind || u6 ? "cursor-default" : "cursor-pointer"]), children: [rx("div", { className: "w-[20px] flex items-center justify-center", children: "render" === e10.kind && !u6 && rx(dH, { className: l2("transition-transform", c10 && "rotate-90"), size: 16 }) }), rx("div", { style: { minWidth: u6 ? "fit-content" : n10 ? "30px" : "60px" }, className: "flex items-center justify-end gap-x-1", children: ["render" === e10.kind && rx("span", { className: l2(["text-[10px]"]), children: ["x", e10.event.count] }), ("render" !== e10.kind || !n10) && rx("span", { className: "text-[10px] text-[#7346a0] pr-1", children: [e10.totalTime < 1 ? "<1" : e10.totalTime.toFixed(0), "ms"] })] })] }), 0 === i10 && rx("div", { className: l2(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16", "pointer-events-none"]), children: "Click to learn more" })] }), c10 && (p2.length > 0 || h2.length > 0) && rx("div", { className: "pl-3 flex flex-col gap-y-1 mt-1", children: [p2.toSorted((e11, t11) => t11.totalTime - e11.totalTime).map((e11, o11) => rx(up, { depth: i10 + 1, bar: e11, debouncedMouseEnter: t10, totalBarTime: r10, isProduction: n10, bars: a10 }, o11)), h2.map((e11) => rx("div", { className: "w-full", children: rx("div", { className: "w-full flex items-center relative text-xs", children: rx("div", { className: "h-full w-full flex items-center relative", children: [rx("div", { className: "flex items-center rounded-sm text-white text-xs h-[28px] w-full" }), rx("div", { className: "absolute inset-0 flex items-center px-2", children: rx("span", { className: "truncate whitespace-nowrap text-white/70 w-full", children: e11 }) })] }) }) }, e11))] })] });
  }, uh = ({ selectedEvent: e10, selectedFiber: t10 }) => {
    let { setRoute: r10 } = ti(dW), [n10, a10] = e9(true), [i10] = e9(u5());
    tt(() => {
      let e11 = localStorage.getItem("react-scan-tip-shown"), t11 = "true" === e11 || "false" !== e11 && null;
      if (null === t11) {
        a10(true), localStorage.setItem("react-scan-tip-is-shown", "true");
        return;
      }
      t11 || a10(false);
    }, []);
    let o10 = 0 === t10.changes.context.length && 0 === t10.changes.props.length && 0 === t10.changes.state.length;
    return rx("div", { className: l2(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]), children: [rx("div", { className: l2(["flex items-start gap-x-4 "]), children: [rx("button", { onClick: () => {
      r10({ route: "render-visualization", routeMessage: null });
    }, className: l2(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]), children: [rx(dX, { size: 14 }), " ", rx("span", { children: "Overview" })] }), rx("div", { className: l2(["flex flex-col gap-y-1"]), children: [rx("div", { className: l2(["text-sm font-bold text-white overflow-x-hidden"]), children: rx("div", { className: "flex items-center gap-x-2 truncate", children: t10.name }) }), rx("div", { className: l2(["flex gap-x-2"]), children: [!i10 && rx(ez, { children: rx("div", { className: l2(["text-xs text-gray-400"]), children: ["\u2022 Render time: ", t10.totalTime.toFixed(0), "ms"] }) }), rx("div", { className: l2(["text-xs text-gray-400 mb-4"]), children: ["\u2022 Renders: ", t10.count, "x"] })] })] })] }), n10 && !o10 && rx("div", { className: l2(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]), children: [rx("button", { onClick: () => {
      a10(false), localStorage.setItem("react-scan-tip-shown", "false");
    }, className: l2(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]), children: rx(dq, { size: 12 }) }), rx("div", { className: l2(["w-1 bg-[#d36cff]"]) }), rx("div", { className: l2(["flex-1"]), children: [rx("div", { className: l2(["px-3 py-2 text-gray-100 text-xs font-semibold"]), children: "How to stop renders" }), rx("div", { className: l2(["px-3 pb-2 text-gray-400 text-[10px]"]), children: "Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already" })] })] }), o10 && rx("div", { className: l2(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]), children: [rx("div", { className: l2(["w-1 bg-[#d36cff]"]) }), rx("div", { className: l2(["flex-1"]), children: [rx("div", { className: l2(["px-3 py-2 text-gray-100 text-sm font-semibold"]), children: "No changes detected" }), rx("div", { className: l2(["px-3 pb-2 text-gray-400 text-xs"]), children: "This component would not have rendered if it was memoized" })] })] }), rx("div", { className: l2(["flex w-full"]), children: [rx("div", { className: l2(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]), children: [rx("div", { className: l2(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]), children: "Changed Props" }), t10.changes.props.length > 0 ? t10.changes.props.toSorted((e11, t11) => t11.count - e11.count).map((e11) => rx("div", { className: l2(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]), children: [rx("span", { className: l2(["text-white "]), children: e11.name }), rx("div", { className: l2([" text-[8px]  text-[#d36cff] pl-1 py-1 "]), children: [e11.count, "/", t10.count, "x"] })] }, e11.name)) : rx("div", { className: l2(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]), children: "No changes" })] }), rx("div", { className: l2(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]), children: [rx("div", { className: l2([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]), children: "Changed State" }), t10.changes.state.length > 0 ? t10.changes.state.toSorted((e11, t11) => t11.count - e11.count).map((e11) => rx("div", { className: l2(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]), children: [rx("span", { className: l2(["text-white "]), children: ["index ", e11.index] }), rx("div", { className: l2(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]), children: [e11.count, "/", t10.count, "x"] })] }, e11.index)) : rx("div", { className: l2(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]), children: "No changes" })] }), rx("div", { className: l2(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]), children: [rx("div", { className: l2([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]), children: "Changed Context" }), t10.changes.context.length > 0 ? t10.changes.context.toSorted((e11, t11) => t11.count - e11.count).map((e11) => rx("div", { className: l2(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]), children: [rx("span", { className: l2(["text-white "]), children: e11.name }), rx("div", { className: l2(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]), children: [e11.count, "/", t10.count, "x"] })] }, e11.name)) : rx("div", { className: l2(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]), children: "No changes" })] })] })] });
  }, um = () => {
    let { notificationState: e10, setNotificationState: t10 } = ti(dW), [r10, n10] = e9("..."), a10 = tr(null);
    if (te(() => {
      let e11 = setInterval(() => {
        n10((e12) => "..." === e12 ? "" : e12 + ".");
      }, 500);
      return () => clearInterval(e11);
    }, []), !e10.selectedEvent) return rx("div", { ref: a10, className: l2(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]), children: [rx("div", { className: l2(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]), children: rx("button", { onClick: () => {
      so.value = { view: "none" };
    }, children: rx(dq, { size: 18, className: "text-[#6F6F78]" }) }) }), rx("div", { className: l2(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md", " shadow-lg"]), children: rx("div", { className: l2(["flex flex-col items-start gap-y-4"]), children: [rx("div", { className: l2(["flex items-center"]), children: rx("span", { className: l2(["text-zinc-400 font-medium text-[17px]"]), children: ["Scanning for slowdowns", r10] }) }), 0 !== e10.events.length && rx("p", { className: l2(["text-xs"]), children: ["Click on an item in the", " ", rx("span", { className: l2(["text-purple-400"]), children: "History" }), " list to get started"] }), rx("p", { className: l2(["text-zinc-600 text-xs"]), children: "You don't need to keep this panel open for React Scan to record slowdowns" }), rx("p", { className: l2(["text-zinc-600 text-xs"]), children: "Enable audio alerts to hear a delightful ding every time a large slowdown is recorded" }), rx("button", { onClick: () => {
      if (e10.audioNotificationsOptions.enabled) return void t10((e11) => {
        var t11, r12;
        return (null == (t11 = e11.audioNotificationsOptions.audioContext) ? void 0 : t11.state) !== "closed" && (null == (r12 = e11.audioNotificationsOptions.audioContext) || r12.close()), localStorage.setItem("react-scan-notifications-audio", "false"), { ...e11, audioNotificationsOptions: { audioContext: null, enabled: false } };
      });
      localStorage.setItem("react-scan-notifications-audio", "true");
      let r11 = new AudioContext();
      oY(r11), t10((e11) => ({ ...e11, audioNotificationsOptions: { enabled: true, audioContext: r11 } }));
    }, className: l2(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full", " text-sm flex items-center gap-x-2 justify-center"]), children: e10.audioNotificationsOptions.enabled ? rx(ez, { children: rx("span", { className: "flex items-center gap-x-1", children: "Disable audio alerts" }) }) : rx(ez, { children: rx("span", { className: "flex items-center gap-x-1", children: "Enable audio alerts" }) }) })] }) })] });
    switch (e10.route) {
      case "render-visualization":
        return rx(uf, { children: rx(uu, { selectedEvent: e10.selectedEvent }) });
      case "render-explanation":
        if (!e10.selectedFiber) throw Error("Invariant: must have selected fiber when viewing render explanation");
        return rx(uf, { children: rx(uh, { selectedFiber: e10.selectedFiber, selectedEvent: e10.selectedEvent }) });
      case "other-visualization":
        return rx(uf, { children: rx("div", { className: l2(["flex w-full h-full flex-col overflow-y-auto"]), id: "overview-scroll-container", children: rx(d3, { selectedEvent: e10.selectedEvent }) }) });
      case "optimize":
        return rx(uf, { children: rx(d4, { selectedEvent: e10.selectedEvent }) });
    }
    e10.route;
  }, uf = ({ children: e10 }) => {
    let { notificationState: t10 } = ti(dW);
    if (!t10.selectedEvent) throw Error("Invariant: d must have selected event when viewing render explanation");
    return rx("div", { className: l2(["w-full h-full flex flex-col gap-y-2"]), children: [rx("div", { className: l2(["h-[50px] w-full"]), children: rx(d1, { selectedEvent: t10.selectedEvent }) }), rx("div", { className: l2(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]), children: e10 })] });
  }, ug = ({ selectedEvent: e10 }) => {
    let t10 = dU(e10);
    switch (e10.kind) {
      case "interaction":
        return rx("div", { className: l2(["w-full flex border-b border-[#27272A] min-h-[48px]"]), children: rx("div", { className: l2(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]), children: [rx("div", { className: l2(["flex items-center gap-x-2 "]), children: [rx("span", { className: l2(["text-[#5a5a5a] mr-0.5"]), children: "click" === e10.type ? "Clicked " : "Typed in " }), rx("span", { children: dD(e10.componentPath) }), rx("div", { className: l2(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap", "low" === t10 && "bg-green-500/50", "needs-improvement" === t10 && "bg-[#b77116]", "high" === t10 && "bg-[#b94040]"]), children: [dB(e10.timing).toFixed(0), "ms processing time"] })] }), rx("div", { className: l2(["flex items-center gap-x-2  justify-end ml-auto"]), children: rx("div", { className: l2(["p-2 flex justify-center items-center border-[#27272A]"]), children: rx("button", { onClick: () => {
          so.value = { view: "none" };
        }, title: "Close", children: rx(dq, { size: 18, className: "text-[#6F6F78]" }) }) }) })] }) });
      case "dropped-frames":
        return rx("div", { className: l2(["w-full flex border-b border-[#27272A] min-h-[48px]"]), children: rx("div", { className: l2(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]), children: [rx("div", { className: l2(["flex items-center gap-x-2 "]), children: ["FPS Drop", rx("div", { className: l2(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap", "low" === t10 && "bg-green-500/50", "needs-improvement" === t10 && "bg-[#b77116]", "high" === t10 && "bg-[#b94040]"]), children: ["dropped to ", e10.fps, " FPS"] })] }), rx("div", { className: l2(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]), children: rx("div", { className: l2(["p-2 flex justify-center items-center border-[#27272A]"]), children: rx("button", { onClick: () => {
          so.value = { view: "none" };
        }, children: rx(dq, { size: 18, className: "text-[#6F6F78]" }) }) }) })] }) });
    }
  }, uv = ({ item: e10, shouldFlash: t10 }) => {
    var r10, n10;
    let [a10, i10] = e9(false), o10 = e10.events.map(dU).reduce((e11, t11) => {
      switch (t11) {
        case "high":
          return "high";
        case "needs-improvement":
          return "high" === e11 ? "high" : "needs-improvement";
        case "low":
          return e11;
      }
    }, "low"), l10 = (({ flashingItemsCount: e11, totalEvents: t11 }) => {
      let [r11, n11] = e9(false), a11 = tr(0), i11 = tr(0);
      return te(() => {
        if (a11.current >= t11) return;
        let e12 = Date.now() - i11.current;
        if (e12 >= 250) {
          n11(false);
          let e13 = setTimeout(() => {
            a11.current = t11, i11.current = Date.now(), n11(true), setTimeout(() => {
              n11(false);
            }, 2e3);
          }, 50);
          return () => clearTimeout(e13);
        }
        {
          let r12 = setTimeout(() => {
            n11(false), setTimeout(() => {
              a11.current = t11, i11.current = Date.now(), n11(true), setTimeout(() => {
                n11(false);
              }, 2e3);
            }, 50);
          }, 250 - e12);
          return () => clearTimeout(r12);
        }
      }, [e11]), r11;
    })({ flashingItemsCount: e10.events.reduce((e11, r11) => t10(r11.id) ? e11 + 1 : e11, 0), totalEvents: e10.events.length });
    return rx("div", { className: l2(["flex flex-col gap-y-0.5"]), children: [rx("button", { onClick: () => i10((e11) => !e11), className: l2(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden", l10 && !a10 && "after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]), children: [rx("div", { className: l2(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]), children: [rx("span", { className: l2(["min-w-fit"]), children: rx(dH, { className: l2(["text-[#A1A1AA] transition-transform", a10 ? "rotate-90" : ""]), size: 14 }, `chevron-${e10.timestamp}`) }), rx("span", { className: l2(["text-xs"]), children: "collapsed-frame-drops" === e10.kind ? "FPS Drops" : dD(null != (n10 = null == (r10 = e10.events.at(0)) ? void 0 : r10.componentPath) ? n10 : []) })] }), rx("div", { className: l2(["ml-auto min-w-fit flex justify-end items-center"]), children: rx("div", { style: { lineHeight: "10px" }, className: l2(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold", "low" === o10 && "bg-green-500/60", "needs-improvement" === o10 && "bg-[#b77116] text-[10px]", "high" === o10 && "bg-[#b94040]"]), children: ["x", e10.events.length] }) })] }), a10 && rx(uw, { children: e10.events.toSorted((e11, t11) => t11.timestamp - e11.timestamp).map((e11) => rx(ub, { event: e11, shouldFlash: t10(e11.id) })) })] });
  }, uw = ({ children: e10 }) => rx("div", { className: "relative pl-6 flex flex-col gap-y-1", children: [rx("div", { className: "absolute left-3 top-0 bottom-0 w-px bg-[#27272A]" }), e10] }), ub = ({ event: e10, shouldFlash: t10 }) => {
    var r10, n10;
    let { notificationState: a10, setNotificationState: i10 } = ti(dW), o10 = dU(e10), l10 = (({ shouldFlash: e11 }) => {
      let [t11, r11] = e9(e11);
      return te(() => {
        if (e11) {
          r11(true);
          let e12 = setTimeout(() => {
            r11(false);
          }, 1e3);
          return () => clearTimeout(e12);
        }
      }, [e11]), t11;
    })({ shouldFlash: t10 });
    switch (e10.kind) {
      case "interaction":
        return rx("button", { onClick: () => {
          i10((t11) => ({ ...t11, selectedEvent: e10, route: "render-visualization", selectedFiber: null }));
        }, className: l2(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden", e10.id === (null == (r10 = a10.selectedEvent) ? void 0 : r10.id) && "bg-[#18181B]", l10 && "after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]), children: [rx("div", { className: l2(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]), children: [rx("span", { className: l2(["min-w-fit text-xs"]), children: (() => {
          switch (e10.type) {
            case "click":
              return rx(dJ, { size: 14 });
            case "keyboard":
              return rx(dY, { size: 14 });
          }
        })() }), rx("span", { className: l2(["text-xs pr-1 truncate"]), children: dD(e10.componentPath) })] }), rx("div", { className: l2([" min-w-fit flex justify-end items-center ml-auto"]), children: rx("div", { style: { lineHeight: "10px" }, className: l2(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]", "low" === o10 && "bg-green-500/50", "needs-improvement" === o10 && "bg-[#b77116] text-[10px]", "high" === o10 && "bg-[#b94040]"]), children: rx("div", { style: { lineHeight: "10px" }, className: l2(["text-[10px] text-white flex items-end"]), children: [dB(e10.timing).toFixed(0), "ms"] }) }) })] });
      case "dropped-frames":
        return rx("button", { onClick: () => {
          i10((t11) => ({ ...t11, selectedEvent: e10, route: "render-visualization", selectedFiber: null }));
        }, className: l2(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden", e10.id === (null == (n10 = a10.selectedEvent) ? void 0 : n10.id) && "bg-[#18181B]", l10 && "after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]), children: [rx("div", { className: l2(["w-4/5 flex items-center justify-start h-full text-xs truncate"]), children: [rx(dQ, { size: 14, className: "mr-1.5" }), " FPS Drop"] }), rx("div", { className: l2([" min-w-fit flex justify-end items-center ml-auto"]), children: rx("div", { style: { lineHeight: "10px" }, className: l2(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold", "low" === o10 && "bg-green-500/60", "needs-improvement" === o10 && "bg-[#b77116] text-[10px]", "high" === o10 && "bg-[#b94040]"]), children: [e10.fps, " FPS"] }) })] });
    }
  }, uy = (e10 = 150) => {
    let { notificationState: t10 } = ti(dW), [r10, n10] = e9(t10.events);
    return te(() => {
      setTimeout(() => {
        n10(t10.events);
      }, e10);
    }, [t10.events]), [r10, n10];
  }, ux = () => {
    let { notificationState: e10, setNotificationState: t10 } = ti(dW), r10 = ((e11) => {
      let t11 = tr([]), [r11, n11] = e9(/* @__PURE__ */ new Set()), a11 = tr(true);
      return te(() => {
        if (a11.current) {
          a11.current = false, t11.current = e11;
          return;
        }
        let r12 = new Set(e11.map((e12) => e12.id)), i11 = new Set(t11.current.map((e12) => e12.id)), o10 = /* @__PURE__ */ new Set();
        r12.forEach((e12) => {
          i11.has(e12) || o10.add(e12);
        }), o10.size > 0 && (n11(o10), setTimeout(() => {
          n11(/* @__PURE__ */ new Set());
        }, 2e3)), t11.current = e11;
      }, [e11]), (e12) => r11.has(e12);
    })(e10.events), [n10, a10] = uy(), i10 = n10.reduce((e11, t11) => {
      let r11 = e11.at(-1);
      if (!r11) return [{ kind: "single", event: t11, timestamp: t11.timestamp }];
      switch (r11.kind) {
        case "collapsed-keyboard":
          if ("interaction" === t11.kind && "keyboard" === t11.type && t11.componentPath.join("-") === r11.events[0].componentPath.join("-")) return [...e11.filter((e12) => e12 !== r11), { kind: "collapsed-keyboard", events: [...r11.events, t11], timestamp: Math.max(...[...r11.events, t11].map((e12) => e12.timestamp)) }];
          return [...e11, { kind: "single", event: t11, timestamp: t11.timestamp }];
        case "single":
          if ("interaction" === r11.event.kind && "keyboard" === r11.event.type && "interaction" === t11.kind && "keyboard" === t11.type && r11.event.componentPath.join("-") === t11.componentPath.join("-")) return [...e11.filter((e12) => e12 !== r11), { kind: "collapsed-keyboard", events: [r11.event, t11], timestamp: Math.max(r11.event.timestamp, t11.timestamp) }];
          if ("dropped-frames" === r11.event.kind && "dropped-frames" === t11.kind) return [...e11.filter((e12) => e12 !== r11), { kind: "collapsed-frame-drops", events: [r11.event, t11], timestamp: Math.max(r11.event.timestamp, t11.timestamp) }];
          return [...e11, { kind: "single", event: t11, timestamp: t11.timestamp }];
        case "collapsed-frame-drops":
          if ("dropped-frames" === t11.kind) return [...e11.filter((e12) => e12 !== r11), { kind: "collapsed-frame-drops", events: [...r11.events, t11], timestamp: Math.max(...[...r11.events, t11].map((e12) => e12.timestamp)) }];
          return [...e11, { kind: "single", event: t11, timestamp: t11.timestamp }];
      }
    }, []).toSorted((e11, t11) => t11.timestamp - e11.timestamp);
    return rx("div", { className: l2(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]), children: [rx("div", { className: l2(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]), children: [rx("span", { children: "History" }), rx(d0, { wrapperProps: { className: "h-full flex items-center justify-center ml-auto" }, triggerContent: rx("button", { className: l2(["hover:bg-[#18181B] rounded-full p-2"]), title: "Clear all events", onClick: () => {
      dj.getState().actions.clear(), t10((e11) => ({ ...e11, selectedEvent: null, selectedFiber: null, route: "other-visualization" === e11.route ? "other-visualization" : "render-visualization" })), a10([]);
    }, children: rx(dZ, { className: l2([""]), size: 16 }) }), children: rx("div", { className: l2(["w-full flex justify-center"]), children: "Clear all events" }) })] }), rx("div", { className: l2(["flex flex-col px-1 gap-y-1"]), children: [0 === i10.length && rx("div", { className: l2(["flex items-center justify-center text-zinc-500 text-sm py-4"]), children: "No Events" }), i10.map((e11) => (() => {
      switch (e11.kind) {
        case "collapsed-keyboard":
        case "collapsed-frame-drops":
          return rx(uv, { shouldFlash: r10, item: e11 });
        case "single":
          return rx(ub, { event: e11.event, shouldFlash: r10(e11.event.id) }, e11.event.id);
      }
    })())] })] });
  }, u_ = () => {
    var e10, t10, r10, n10, a10, i10, o10;
    let l10 = (e10 = dj.subscribe, a10 = (n10 = e9({ t: { __: r10 = (t10 = dj.getState)(), u: t10 } }))[0].t, i10 = n10[1], tt(function() {
      a10.__ = r10, a10.u = t10, t3(a10) && i10({ t: a10 });
    }, [e10, r10, t10]), te(function() {
      return t3(a10) && i10({ t: a10 }), e10(function() {
        t3(a10) && i10({ t: a10 });
      });
    }, [e10]), r10), s10 = [];
    return te(() => {
      let e11 = setInterval(() => {
        o10.forEach((e12) => {
          e12.groupedFiberRenders && e12.groupedFiberRenders.forEach((e13) => {
            if (e13.deletedAll) return;
            if (!e13.elements || 0 === e13.elements.length) {
              e13.deletedAll = true;
              return;
            }
            let t11 = e13.elements.length;
            e13.elements = e13.elements.filter((e14) => e14 && e14.isConnected), 0 === e13.elements.length && t11 > 0 && (e13.deletedAll = true);
          });
        });
      }, 5e3);
      return () => {
        clearInterval(e11);
      };
    }, [o10 = s10]), l10.state.events.forEach((e11) => {
      let t11 = Object.values("interaction" === e11.kind ? e11.data.meta.detailedTiming.fiberRenders : e11.data.meta.fiberRenders).map((e12) => ({ id: oJ(), totalTime: e12.nodeInfo.reduce((e13, t12) => e13 + t12.selfTime, 0), count: e12.nodeInfo.length, name: e12.nodeInfo[0].name, deletedAll: false, parents: e12.parents, hasMemoCache: e12.hasMemoCache, wasFiberRenderMount: e12.wasFiberRenderMount, elements: e12.nodeInfo.map((e13) => e13.element), changes: { context: e12.changes.fiberContext.current.filter((t12) => e12.changes.fiberContext.changesCounts.get(t12.name)).map((t12) => {
        var r12;
        return { name: String(t12.name), count: null != (r12 = e12.changes.fiberContext.changesCounts.get(t12.name)) ? r12 : 0 };
      }), props: e12.changes.fiberProps.current.filter((t12) => e12.changes.fiberProps.changesCounts.get(t12.name)).map((t12) => {
        var r12;
        return { name: String(t12.name), count: null != (r12 = e12.changes.fiberProps.changesCounts.get(t12.name)) ? r12 : 0 };
      }), state: e12.changes.fiberState.current.filter((t12) => e12.changes.fiberState.changesCounts.get(Number(t12.name))).map((t12) => {
        var r12;
        return { index: t12.name, count: null != (r12 = e12.changes.fiberState.changesCounts.get(Number(t12.name))) ? r12 : 0 };
      }) } })), r11 = t11.reduce((e12, t12) => e12 + t12.totalTime, 0);
      switch (e11.kind) {
        case "interaction": {
          let { commitEnd: n11, jsEndDetail: a11, interactionStartDetail: i11, rafStart: o11 } = e11.data.meta.detailedTiming;
          a11 - i11 - r11 < 0 && dc("js time must be longer than render time");
          let l11 = Math.max(0, a11 - i11 - r11), c10 = Math.max(e11.data.meta.latency - (n11 - i11), 0);
          s10.push({ componentPath: e11.data.meta.detailedTiming.componentPath, groupedFiberRenders: t11, id: e11.id, kind: "interaction", memory: null, timestamp: e11.data.startAt, type: "keyboard" === e11.data.meta.detailedTiming.interactionType ? "keyboard" : "click", timing: { renderTime: r11, kind: "interaction", otherJSTime: l11, framePreparation: o11 - a11, frameConstruction: n11 - o11, frameDraw: c10 } });
          return;
        }
        case "long-render":
          return void s10.push({ kind: "dropped-frames", id: e11.id, memory: null, timing: { kind: "dropped-frames", renderTime: r11, otherTime: e11.data.meta.latency }, groupedFiberRenders: t11, timestamp: e11.data.startAt, fps: e11.data.meta.fps });
      }
    }), s10;
  }, uk = () => {
    let { notificationState: e10, setNotificationState: t10 } = ti(dW), r10 = tr(null), n10 = tr(null), a10 = tr(0), [i10] = uy(), o10 = i10.filter((e11) => "high" === dU(e11)).length;
    return te(() => {
      let e11 = localStorage.getItem("react-scan-notifications-audio");
      "false" !== e11 && "true" !== e11 ? localStorage.setItem("react-scan-notifications-audio", "false") : "false" !== e11 && t10((e12) => e12.audioNotificationsOptions.enabled ? e12 : { ...e12, audioNotificationsOptions: { enabled: true, audioContext: new AudioContext() } });
    }, []), te(() => {
      let { audioNotificationsOptions: t11 } = e10;
      !t11.enabled || 0 === o10 || r10.current && r10.current >= o10 || (n10.current && clearTimeout(n10.current), n10.current = setTimeout(() => {
        oY(t11.audioContext), r10.current = o10, a10.current = Date.now(), n10.current = null;
      }, Math.max(0, 1e3 - (Date.now() - a10.current))));
    }, [o10]), te(() => {
      0 === o10 && (r10.current = null);
    }, [o10]), te(() => () => {
      n10.current && clearTimeout(n10.current);
    }, []), null;
  }, uN = re((e10, t10) => {
    var r10;
    let n10 = u_(), [a10, i10] = e9({ detailsExpanded: false, events: n10, filterBy: "latest", moreInfoExpanded: false, route: "render-visualization", selectedEvent: null != (r10 = n10.toSorted((e11, t11) => e11.timestamp - t11.timestamp).at(-1)) ? r10 : null, selectedFiber: null, routeMessage: null, audioNotificationsOptions: { enabled: false, audioContext: null } });
    return a10.events = n10, rx(dW.Provider, { value: { notificationState: a10, setNotificationState: i10, setRoute: ({ route: e11, routeMessage: t11 }) => {
      i10((r11) => {
        let n11 = { ...r11, route: e11, routeMessage: t11 };
        switch (e11) {
          case "render-visualization":
          case "optimize":
          case "other-visualization":
            return ud(), { ...n11, selectedFiber: null };
          case "render-explanation":
            return ud(), n11;
        }
      });
    } }, children: [rx(uk, {}), rx(uS, { ref: t10 })] });
  }), uS = re((e10, t10) => {
    var r10;
    let { notificationState: n10 } = ti(dW);
    return rx("div", { ref: t10, className: l2(["h-full w-full flex flex-col"]), children: [n10.selectedEvent && rx("div", { className: l2(["w-full h-[48px] flex flex-col", n10.moreInfoExpanded && "h-[235px]", n10.moreInfoExpanded && "dropped-frames" === n10.selectedEvent.kind && "h-[150px]"]), children: [rx(ug, { selectedEvent: n10.selectedEvent }), n10.moreInfoExpanded && rx(uE, {})] }), rx("div", { className: l2(["flex ", n10.selectedEvent ? "h-[calc(100%-48px)]" : "h-full", n10.moreInfoExpanded && "h-[calc(100%-200px)]", n10.moreInfoExpanded && (null == (r10 = n10.selectedEvent) ? void 0 : r10.kind) === "dropped-frames" && "h-[calc(100%-150px)]"]), children: [rx("div", { className: l2(["h-full min-w-[200px]"]), children: rx(ux, {}) }), rx("div", { className: l2(["w-[calc(100%-200px)] h-full overflow-y-auto"]), children: rx(um, {}) })] })] });
  }), uE = () => {
    let { notificationState: e10 } = ti(dW);
    if (!e10.selectedEvent) throw Error("Invariant must have selected event for more info");
    let t10 = e10.selectedEvent;
    return rx("div", { className: l2(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]", "dropped-frames" === t10.kind && "h-[calc(100%-25px)]"]), children: rx("div", { className: l2(["flex flex-col gap-y-4 h-full"]), children: (() => {
      switch (t10.kind) {
        case "interaction":
          return rx(ez, { children: [rx("div", { className: l2(["flex items-center gap-x-3"]), children: [rx("span", { className: "text-[#6F6F78] text-xs font-medium", children: "click" === t10.type ? "Clicked component location" : "Typed in component location" }), rx("div", { className: "font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto", children: t10.componentPath.toReversed().map((e11, r10) => rx(ez, { children: [rx("span", { style: { lineHeight: "14px" }, className: "text-[10px] whitespace-nowrap", children: e11 }, e11), r10 < t10.componentPath.length - 1 && rx("span", { className: "text-[#6F6F78] mx-0.5", children: "\u2039" })] })) })] }), rx("div", { className: l2(["flex items-center gap-x-3"]), children: [rx("span", { className: "text-[#6F6F78] text-xs font-medium", children: "Total Time" }), rx("span", { className: "text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs", children: [dB(t10.timing).toFixed(0), "ms"] })] }), rx("div", { className: l2(["flex items-center gap-x-3"]), children: [rx("span", { className: "text-[#6F6F78] text-xs font-medium", children: "Occurred" }), rx("span", { className: "text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs", children: `${((Date.now() - t10.timestamp) / 1e3).toFixed(0)}s ago` })] })] });
        case "dropped-frames":
          return rx(ez, { children: [rx("div", { className: l2(["flex items-center gap-x-3"]), children: [rx("span", { className: "text-[#6F6F78] text-xs font-medium", children: "Total Time" }), rx("span", { className: "text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs", children: [dB(t10.timing).toFixed(0), "ms"] })] }), rx("div", { className: l2(["flex items-center gap-x-3"]), children: [rx("span", { className: "text-[#6F6F78] text-xs font-medium", children: "Occurred" }), rx("span", { className: "text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs", children: `${((Date.now() - t10.timestamp) / 1e3).toFixed(0)}s ago` })] })] });
      }
    })() }) });
  }, uM = sd(() => {
    var e10;
    let t10 = u_(), [r10, n10] = e9(t10);
    te(() => {
      let e11 = setTimeout(() => {
        n10(t10);
      }, 600);
      return () => {
        clearTimeout(e11);
      };
    }, [t10]);
    let a10 = uQ.inspectState, i10 = "inspecting" === a10.value.kind, o10 = "focused" === a10.value.kind, [l10, s10] = e9([]), c10 = ta(() => {
      switch (uQ.inspectState.value.kind) {
        case "inspecting":
          so.value = { view: "none" }, uQ.inspectState.value = { kind: "inspect-off" };
          return;
        case "focused":
          so.value = { view: "inspector" }, uQ.inspectState.value = { kind: "inspecting", hoveredDomElement: null };
          return;
        case "inspect-off":
          so.value = { view: "none" }, uQ.inspectState.value = { kind: "inspecting", hoveredDomElement: null };
          return;
        case "uninitialized":
          return;
      }
    }, []), d10 = ta((e11) => {
      if (e11.preventDefault(), e11.stopPropagation(), !u0.instrumentation) return;
      let t11 = !u0.instrumentation.isPaused.value;
      u0.instrumentation.isPaused.value = t11, l3("react-scan-options", { ...l4("react-scan-options"), enabled: !t11 });
    }, []);
    t1(() => {
      "uninitialized" === uQ.inspectState.value.kind && (uQ.inspectState.value = { kind: "inspect-off" });
    });
    let u6 = null, p2 = "#999";
    return i10 ? (u6 = rx(oZ, { name: "icon-inspect" }), p2 = "#8e61e3") : o10 ? (u6 = rx(oZ, { name: "icon-focus" }), p2 = "#8e61e3") : (u6 = rx(oZ, { name: "icon-inspect" }), p2 = "#999"), tt(() => {
      "notifications" !== so.value.view || s10([...new Set(t10.map((e11) => e11.id)).values()]);
    }, [t10.length, so.value.view]), rx("div", { className: "flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden", children: [rx("div", { className: "h-full flex items-center min-w-fit", children: rx("button", { type: "button", id: "react-scan-inspect-element", title: "Inspect element", onClick: c10, className: "button flex items-center justify-center h-full w-full pl-3 pr-2.5", style: { color: p2 }, children: u6 }) }), rx("div", { className: "h-full flex items-center justify-center", children: rx("button", { type: "button", id: "react-scan-notifications", title: "Notifications", onClick: () => {
      switch ("inspect-off" !== uQ.inspectState.value.kind && (uQ.inspectState.value = { kind: "inspect-off" }), so.value.view) {
        case "inspector":
          uQ.inspectState.value = { kind: "inspect-off" }, s10([...new Set(t10.map((e11) => e11.id)).values()]), so.value = { view: "notifications" };
          return;
        case "notifications":
          so.value = { view: "none" };
          return;
        case "none":
          s10([...new Set(t10.map((e11) => e11.id)).values()]), so.value = { view: "notifications" };
          return;
      }
    }, className: "button flex items-center justify-center h-full pl-2.5 pr-2.5", style: { color: p2 }, children: rx(dV, { events: r10.filter((e11) => !l10.includes(e11.id)).map((e11) => "high" === dU(e11)), size: 16, className: l2(["text-[#999]", "notifications" === so.value.view && "text-[#8E61E3]"]) }) }) }), rx(di, { checked: !(null == (e10 = u0.instrumentation) ? void 0 : e10.isPaused.value), onChange: d10, className: "place-self-center", title: "Outline Re-renders" }), u0.options.value.showFPS && rx(ds, {})] });
  }), uC = tR(() => "inspecting" === uQ.inspectState.value.kind), uT = tR(() => l2("relative", "flex-1", "flex flex-col", "rounded-t-lg", "overflow-hidden", "opacity-100", "transition-[opacity]", uC.value && "opacity-0 duration-0 delay-0")), uA = tR(() => "inspector" === so.value.view), uz = tR(() => "notifications" === so.value.view), u$ = () => rx("div", { className: l2("flex flex-1 flex-col", "overflow-hidden z-10", "rounded-lg", "bg-black", "opacity-100", "transition-[border-radius]", "peer-hover/left:rounded-l-none", "peer-hover/right:rounded-r-none", "peer-hover/top:rounded-t-none", "peer-hover/bottom:rounded-b-none"), children: [rx("div", { className: uT, children: [rx(da, {}), rx("div", { className: l2("relative", "flex-1 flex", "text-white", "bg-[#0A0A0A]", "transition-opacity delay-150", "overflow-hidden", "border-b border-[#222]"), children: [rx(uR, { isOpen: uA, children: rx(sG, {}) }), rx(uR, { isOpen: uz, children: rx(uN, {}) })] })] }), rx(uM, {})] }), uR = ({ isOpen: e10, children: t10 }) => rx("div", { className: l2("flex-1", "opacity-0", "overflow-y-auto overflow-x-hidden", "transition-opacity delay-0", "pointer-events-none", e10.value && "opacity-100 delay-150 pointer-events-auto"), children: rx("div", { className: "absolute inset-0 flex", children: t10 }) }), uO = (e10, t10, r10) => e10 + (t10 - e10) * r10, uj = { frameInterval: 1e3 / 60, speeds: { fast: 0.51, slow: 0.1, off: 0 } }, uP = oq && window.devicePixelRatio || 1, uF = () => {
    let e10 = tr(null), t10 = tr(null), r10 = tr(null), n10 = tr(null), a10 = tr(null), i10 = tr(0), o10 = tr(), l10 = tr(/* @__PURE__ */ new Map()), s10 = tr(false), c10 = tr(0), d10 = (e11, t11, a11, i11) => {
      if (!r10.current) return;
      let o11 = r10.current;
      t11.clearRect(0, 0, e11.width, e11.height), t11.strokeStyle = "rgba(142, 97, 227, 0.5)", t11.fillStyle = "rgba(173, 97, 230, 0.10)", "locked" === a11 ? t11.setLineDash([]) : t11.setLineDash([4]), t11.lineWidth = 1, t11.fillRect(o11.left, o11.top, o11.width, o11.height), t11.strokeRect(o11.left, o11.top, o11.width, o11.height), ((e12, t12, r11, a12) => {
        var i12;
        if (!a12) return;
        let o12 = null != (i12 = (null == a12 ? void 0 : a12.type) && X(a12.type)) ? i12 : "Unknown";
        e12.save(), e12.font = "12px system-ui, -apple-system, sans-serif";
        let l11 = e12.measureText(o12).width, s11 = 14 * ("locked" === r11), c11 = 6 * ("locked" === r11), d11 = t12.left, u9 = t12.top - 24 - 4;
        if (e12.fillStyle = "rgb(37, 37, 38, .75)", e12.beginPath(), e12.roundRect(d11, u9, l11 + 16 + s11 + c11, 24, 3), e12.fill(), "locked" === r11) {
          let t13, r12, a13, i13 = d11 + 8, o13 = u9 + (24 - s11) / 2 + 2;
          e12.save(), e12.strokeStyle = "white", e12.fillStyle = "white", e12.lineWidth = 1.5, t13 = 0.6 * s11, r12 = 0.5 * s11, e12.beginPath(), e12.arc(i13 + (s11 - t13) / 2 + t13 / 2, o13 + r12 / 2, t13 / 2, Math.PI, 0, false), e12.stroke(), a13 = 0.8 * s11, e12.fillRect(i13 + (s11 - a13) / 2, o13 + r12 / 2, a13, 0.5 * s11), e12.restore(), n10.current = { x: i13, y: o13, width: s11, height: s11 };
        } else n10.current = null;
        e12.fillStyle = "white", e12.textBaseline = "middle";
        e12.fillText(o12, d11 + 8 + ("locked" === r11 ? s11 + c11 : 0), u9 + 12), e12.restore();
      })(t11, o11, a11, i11);
    }, u6 = async (e11, t11, n11, a11) => {
      if (!e11 || !t11 || !n11) return;
      let { parentCompositeFiber: l11 } = s1(e11), s11 = await s0(e11);
      l11 && s11 && ((e12, t12, n12, a12, l12) => {
        var s12;
        let u9, p3, h3;
        if (t12.save(), !r10.current) {
          r10.current = n12, d10(e12, t12, a12, l12), t12.restore();
          return;
        }
        u9 = u0.options.value.animationSpeed, p3 = null != (s12 = uj.speeds[u9]) ? s12 : uj.speeds.off, h3 = (o11) => {
          if (o11 - c10.current < uj.frameInterval) {
            i10.current = requestAnimationFrame(h3);
            return;
          }
          (c10.current = o11, r10.current) ? (r10.current = { left: uO(r10.current.left, n12.left, p3), top: uO(r10.current.top, n12.top, p3), width: uO(r10.current.width, n12.width, p3), height: uO(r10.current.height, n12.height, p3) }, d10(e12, t12, a12, l12), Math.abs(r10.current.left - n12.left) > 0.1 || Math.abs(r10.current.top - n12.top) > 0.1 || Math.abs(r10.current.width - n12.width) > 0.1 || Math.abs(r10.current.height - n12.height) > 0.1 ? i10.current = requestAnimationFrame(h3) : (r10.current = n12, d10(e12, t12, a12, l12), cancelAnimationFrame(i10.current), t12.restore())) : cancelAnimationFrame(i10.current);
        }, cancelAnimationFrame(i10.current), clearTimeout(o10.current), i10.current = requestAnimationFrame(h3), o10.current = setTimeout(() => {
          cancelAnimationFrame(i10.current), r10.current = n12, d10(e12, t12, a12, l12), t12.restore();
        }, 1e3);
      })(t11, n11, s11, a11, l11);
    }, p2 = (t11) => {
      if (!e10.current || s10.current) return;
      let i11 = (o12) => {
        if (e10.current && "opacity" === o12.propertyName && s10.current) {
          var l11;
          let o13;
          e10.current.removeEventListener("transitionend", i11), (o13 = (l11 = e10.current).getContext("2d")) && o13.clearRect(0, 0, l11.width, l11.height), r10.current = null, n10.current = null, a10.current = null, l11.classList.remove("fade-in"), s10.current = false, null == t11 || t11();
        }
      }, o11 = l10.current.get("fade-out");
      o11 && (o11(), l10.current.delete("fade-out")), e10.current.addEventListener("transitionend", i11), l10.current.set("fade-out", () => {
        var t12;
        null == (t12 = e10.current) || t12.removeEventListener("transitionend", i11);
      }), s10.current = true, e10.current.classList.remove("fade-in"), requestAnimationFrame(() => {
        var t12;
        null == (t12 = e10.current) || t12.classList.add("fade-out");
      });
    }, h2 = () => {
      e10.current && (s10.current = false, e10.current.classList.remove("fade-out"), requestAnimationFrame(() => {
        var t11;
        null == (t11 = e10.current) || t11.classList.add("fade-in");
      }));
    }, m2 = l5((n11) => {
      var i11, l11;
      if ("inspecting" !== uQ.inspectState.peek().kind || !t10.current) return;
      t10.current.style.pointerEvents = "none";
      let c11 = document.elementFromPoint(null != (i11 = null == n11 ? void 0 : n11.clientX) ? i11 : 0, null != (l11 = null == n11 ? void 0 : n11.clientY) ? l11 : 0);
      if (t10.current.style.removeProperty("pointer-events"), clearTimeout(o10.current), c11 && c11 !== e10.current) {
        let { parentCompositeFiber: e11 } = s1(c11);
        if (e11) {
          let t11 = s3(e11);
          if (t11) return void (t11 !== a10.current && (a10.current = t11, s4.has(t11.tagName) ? p2() : h2(), uQ.inspectState.value = { kind: "inspecting", hoveredDomElement: t11 }));
        }
      }
      r10.current && e10.current && !s10.current && p2();
    }, 32), f2 = (e11, t11) => {
      let r11 = n10.current;
      if (!r11) return false;
      let a11 = t11.getBoundingClientRect(), i11 = t11.width / a11.width, o11 = t11.height / a11.height, l11 = (e11.clientX - a11.left) * i11, s11 = (e11.clientY - a11.top) * o11, c11 = l11 / uP, d11 = s11 / uP;
      return c11 >= r11.x && c11 <= r11.x + r11.width && d11 >= r11.y && d11 <= r11.y + r11.height;
    }, g2 = (r11) => {
      if (r11.__reactScanSyntheticEvent) return;
      let n11 = uQ.inspectState.peek(), i11 = e10.current;
      if (i11 && t10.current) {
        if (f2(r11, i11)) {
          r11.preventDefault(), r11.stopPropagation(), "focused" === n11.kind && (uQ.inspectState.value = { kind: "inspecting", hoveredDomElement: n11.focusedDomElement });
          return;
        }
        "inspecting" === n11.kind && ((e11) => {
          var t11, r12;
          let n12 = ["react-scan-inspect-element", "react-scan-power"];
          if (e11.target instanceof HTMLElement && n12.includes(e11.target.id)) return;
          let i12 = null == (t11 = a10.current) ? void 0 : t11.tagName;
          if (i12 && s4.has(i12)) return;
          e11.preventDefault(), e11.stopPropagation();
          let o11 = null != (r12 = a10.current) ? r12 : document.elementFromPoint(e11.clientX, e11.clientY);
          if (!o11) return;
          let l11 = e11.composedPath().at(0);
          if (l11 instanceof HTMLElement && n12.includes(l11.id)) {
            let t12 = new MouseEvent(e11.type, e11);
            t12.__reactScanSyntheticEvent = true, l11.dispatchEvent(t12);
            return;
          }
          let { parentCompositeFiber: s11 } = s1(o11);
          if (!s11) return;
          let c11 = s3(s11);
          if (!c11) {
            a10.current = null, uQ.inspectState.value = { kind: "inspect-off" };
            return;
          }
          uQ.inspectState.value = { kind: "focused", focusedDomElement: c11, fiber: s11 };
        })(r11);
      }
    }, v2 = (t11) => {
      var n11;
      if ("Escape" !== t11.key) return;
      let i11 = uQ.inspectState.peek();
      if (e10.current && (null == (n11 = document.activeElement) ? void 0 : n11.id) !== "react-scan-root" && (so.value = { view: "none" }, "focused" === i11.kind || "inspecting" === i11.kind)) switch (t11.preventDefault(), t11.stopPropagation(), i11.kind) {
        case "focused":
          h2(), r10.current = null, a10.current = i11.focusedDomElement, uQ.inspectState.value = { kind: "inspecting", hoveredDomElement: i11.focusedDomElement };
          break;
        case "inspecting":
          p2(() => {
            st.value = false, uQ.inspectState.value = { kind: "inspect-off" };
          });
      }
    }, w2 = (e11, t11) => {
      let r11 = e11.getBoundingClientRect();
      e11.width = r11.width * uP, e11.height = r11.height * uP, t11.scale(uP, uP), t11.save();
    }, b2 = () => {
      let t11 = uQ.inspectState.peek(), n11 = e10.current;
      if (!n11) return;
      let a11 = null == n11 ? void 0 : n11.getContext("2d");
      a11 && (cancelAnimationFrame(i10.current), clearTimeout(o10.current), w2(n11, a11), r10.current = null, "focused" === t11.kind && t11.focusedDomElement ? u6(t11.focusedDomElement, n11, a11, "locked") : "inspecting" === t11.kind && t11.hoveredDomElement && u6(t11.hoveredDomElement, n11, a11, "inspecting"));
    }, y2 = (t11) => {
      let r11 = uQ.inspectState.peek(), n11 = e10.current;
      n11 && ("inspecting" === r11.kind || f2(t11, n11)) && (t11.preventDefault(), t11.stopPropagation(), t11.stopImmediatePropagation());
    };
    return te(() => {
      let n11 = e10.current;
      if (!n11) return;
      let s11 = null == n11 ? void 0 : n11.getContext("2d");
      if (!s11) return;
      w2(n11, s11);
      let c11 = uQ.inspectState.subscribe((e11) => {
        ((e12, n12, o11) => {
          var s12;
          let c12;
          switch (null == (s12 = l10.current.get(e12.kind)) || s12(), t10.current && "inspecting" !== e12.kind && (t10.current.style.pointerEvents = "none"), i10.current && cancelAnimationFrame(i10.current), e12.kind) {
            case "inspect-off":
              p2();
              return;
            case "inspecting":
              u6(e12.hoveredDomElement, n12, o11, "inspecting");
              break;
            case "focused":
              if (!e12.focusedDomElement) return;
              a10.current !== e12.focusedDomElement && (a10.current = e12.focusedDomElement), so.value = { view: "inspector" }, u6(e12.focusedDomElement, n12, o11, "locked"), (c12 = uQ.lastReportTime.subscribe(() => {
                if (i10.current && r10.current) {
                  let { parentCompositeFiber: t11 } = s1(e12.focusedDomElement);
                  t11 && u6(e12.focusedDomElement, n12, o11, "locked");
                }
              })) && l10.current.set(e12.kind, c12);
          }
        })(e11, n11, s11);
      });
      return window.addEventListener("scroll", b2, { passive: true }), window.addEventListener("resize", b2, { passive: true }), document.addEventListener("pointermove", m2, { passive: true, capture: true }), document.addEventListener("pointerdown", y2, { capture: true }), document.addEventListener("click", g2, { capture: true }), document.addEventListener("keydown", v2, { capture: true }), () => {
        for (let e11 of l10.current.values()) null == e11 || e11();
        c11(), window.removeEventListener("scroll", b2), window.removeEventListener("resize", b2), document.removeEventListener("pointermove", m2, { capture: true }), document.removeEventListener("click", g2, { capture: true }), document.removeEventListener("pointerdown", y2, { capture: true }), document.removeEventListener("keydown", v2, { capture: true }), i10.current && cancelAnimationFrame(i10.current), clearTimeout(o10.current);
      };
    }, []), rx(ez, { children: [rx("div", { ref: t10, className: l2("fixed top-0 left-0 w-screen h-screen", "z-[214748365]"), style: { pointerEvents: "none" } }), rx("canvas", { ref: e10, dir: "ltr", className: l2("react-scan-inspector-overlay", "fixed top-0 left-0 w-screen h-screen", "pointer-events-none", "z-[214748367]") })] });
  }, uL = class {
    constructor(e10, t10, r10) {
      oV(this, "width", e10), oV(this, "height", t10), oV(this, "safeArea", r10), oV(this, "maxWidth"), oV(this, "maxHeight"), this.maxWidth = e10 - r10.left - r10.right, this.maxHeight = t10 - r10.top - r10.bottom;
    }
    rightEdge(e10) {
      return this.width - e10 - this.safeArea.right;
    }
    bottomEdge(e10) {
      return this.height - e10 - this.safeArea.bottom;
    }
    isFullWidth(e10) {
      return e10 >= this.maxWidth;
    }
    isFullHeight(e10) {
      return e10 >= this.maxHeight;
    }
  }, uI = () => {
    let e10, t10 = window.innerWidth, r10 = window.innerHeight, n10 = se();
    return b && b.width === t10 && b.height === r10 && (e10 = b.safeArea, e10.top === n10.top && e10.right === n10.right && e10.bottom === n10.bottom && e10.left === n10.left) ? b : b = new uL(t10, r10, n10);
  }, uD = (e10, t10, r10) => {
    let n10, a10, i10 = "rtl" === getComputedStyle(document.body).direction, o10 = window.innerWidth, l10 = window.innerHeight, s10 = se(), c10 = 550 === t10, d10 = c10 ? t10 : Math.min(t10, o10 - s10.left - s10.right), u6 = c10 ? r10 : Math.min(r10, l10 - s10.top - s10.bottom), p2 = s10.left, h2 = o10 - d10 - s10.right, m2 = s10.top, f2 = l10 - u6 - s10.bottom, g2 = -s10.right, v2 = -(o10 - d10 - s10.left);
    switch (e10) {
      case "top-right":
        n10 = i10 ? g2 : h2, a10 = m2;
        break;
      case "bottom-right":
        n10 = i10 ? g2 : h2, a10 = f2;
        break;
      case "bottom-left":
        n10 = i10 ? v2 : p2, a10 = f2;
        break;
      case "top-left":
        n10 = i10 ? v2 : p2, a10 = m2;
        break;
      default:
        n10 = p2, a10 = m2;
    }
    return c10 && (n10 = i10 ? Math.min(g2, Math.max(n10, v2)) : Math.max(p2, Math.min(n10, h2)), a10 = Math.max(m2, Math.min(a10, f2))), { x: n10, y: a10 };
  }, uB = (e10, t10, r10) => {
    let n10 = r10 ? uI().maxWidth : uI().maxHeight;
    return Math.min(Math.max(r10 ? 550 : 400, e10 + t10), n10);
  }, uU = ({ position: e10 }) => {
    let t10 = tr(null), r10 = tr(null), n10 = tr(null), a10 = tr(null);
    return te(() => {
      let i10 = t10.current;
      if (!i10) return;
      let o10 = () => {
        var t11, r11, n11;
        i10.classList.remove("pointer-events-none");
        let a11 = "focused" === uQ.inspectState.value.kind, o11 = "none" !== so.value.view;
        (a11 || o11) && (t11 = sa.value.corner, r11 = sa.value.dimensions.isFullWidth, n11 = sa.value.dimensions.isFullHeight, r11 && n11 || (r11 || n11 ? r11 ? e10 !== t11.split("-")[0] : !!n11 && e10 !== t11.split("-")[1] : ((e11, t12) => {
          let [r12, n12] = t12.split("-");
          return e11 !== r12 && e11 !== n12;
        })(e10, t11))) ? i10.classList.remove("hidden", "pointer-events-none", "opacity-0") : i10.classList.add("hidden", "pointer-events-none", "opacity-0");
      }, l10 = sa.subscribe((e11) => {
        (null === r10.current || null === n10.current || null === a10.current || e11.dimensions.width !== r10.current || e11.dimensions.height !== n10.current || e11.corner !== a10.current) && (o10(), r10.current = e11.dimensions.width, n10.current = e11.dimensions.height, a10.current = e11.corner);
      }), s10 = uQ.inspectState.subscribe(() => {
        o10();
      });
      return () => {
        l10(), s10(), r10.current = null, n10.current = null, a10.current = null;
      };
    }, []), rx("div", { ref: t10, onPointerDown: ta((t11) => {
      t11.preventDefault(), t11.stopPropagation();
      let r11 = sr.value;
      if (!r11) return;
      let n11 = r11.style, { dimensions: a11 } = sa.value, i10 = t11.clientX, o10 = t11.clientY, l10 = a11.width, s10 = a11.height, c10 = a11.position;
      sa.value = { ...sa.value, dimensions: { ...a11, isFullWidth: false, isFullHeight: false, width: l10, height: s10, position: c10 } };
      let d10 = null, u6 = (t12) => {
        d10 || (n11.transition = "none", d10 = requestAnimationFrame(() => {
          let { newSize: r12, newPosition: a12 } = ((e11, t13, r13, n12, a13) => {
            let i11 = "rtl" === getComputedStyle(document.body).direction, o11 = se(), l11 = window.innerWidth - o11.left - o11.right, s11 = window.innerHeight - o11.top - o11.bottom, c11 = t13.width, d11 = t13.height, u10 = r13.x, p3 = r13.y;
            if (i11 && e11.includes("right")) {
              let e12 = -r13.x + t13.width - o11.right;
              c11 = Math.min(l11, Math.max(550, Math.min(t13.width + n12, e12))), u10 = r13.x + (c11 - t13.width);
            }
            if (i11 && e11.includes("left")) {
              let e12 = window.innerWidth - r13.x - o11.left;
              c11 = Math.min(l11, Math.max(550, Math.min(t13.width - n12, e12)));
            }
            if (!i11 && e11.includes("right")) {
              let e12 = window.innerWidth - r13.x - o11.right;
              c11 = Math.min(l11, Math.max(550, Math.min(t13.width + n12, e12)));
            }
            if (!i11 && e11.includes("left")) {
              let e12 = r13.x + t13.width - o11.left;
              c11 = Math.min(l11, Math.max(550, Math.min(t13.width - n12, e12))), u10 = r13.x - (c11 - t13.width);
            }
            if (e11.includes("bottom")) {
              let e12 = window.innerHeight - r13.y - o11.bottom;
              d11 = Math.min(s11, Math.max(400, Math.min(t13.height + a13, e12)));
            }
            if (e11.includes("top")) {
              let e12 = r13.y + t13.height - o11.top;
              d11 = Math.min(s11, Math.max(400, Math.min(t13.height - a13, e12))), p3 = r13.y - (d11 - t13.height);
            }
            let h2 = o11.left, m2 = window.innerWidth - o11.right - c11, f2 = o11.top, g2 = window.innerHeight - o11.bottom - d11, v2 = -o11.right, w2 = -(window.innerWidth - c11 - o11.left);
            return { newSize: { width: c11, height: d11 }, newPosition: { x: u10 = i11 ? Math.min(v2, Math.max(u10, w2)) : Math.max(h2, Math.min(u10, m2)), y: p3 = Math.max(f2, Math.min(p3, g2)) } };
          })(e10, { width: l10, height: s10 }, c10, t12.clientX - i10, t12.clientY - o10);
          n11.transform = `translate3d(${a12.x}px, ${a12.y}px, 0)`, n11.width = `${r12.width}px`, n11.height = `${r12.height}px`;
          let u9 = Math.min(Math.floor(r12.width - 120), Math.max(240, sa.value.componentsTree.width));
          sa.value = { ...sa.value, dimensions: { isFullWidth: false, isFullHeight: false, width: r12.width, height: r12.height, position: a12 }, componentsTree: { ...sa.value.componentsTree, width: u9 } }, d10 = null;
        }));
      }, p2 = () => {
        d10 && (cancelAnimationFrame(d10), d10 = null), document.removeEventListener("pointermove", u6), document.removeEventListener("pointerup", p2);
        let { dimensions: e11, corner: t12 } = sa.value, a12 = uI(), i11 = a12.isFullWidth(e11.width), o11 = a12.isFullHeight(e11.height), l11 = t12;
        (i11 && o11 || i11 || o11) && (l11 = ((e12) => {
          let t13 = uI(), r12 = { "top-left": Math.hypot(e12.x, e12.y), "top-right": Math.hypot(t13.maxWidth - e12.x, e12.y), "bottom-left": Math.hypot(e12.x, t13.maxHeight - e12.y), "bottom-right": Math.hypot(t13.maxWidth - e12.x, t13.maxHeight - e12.y) }, n12 = "top-left";
          for (let e13 in r12) r12[e13] < r12[n12] && (n12 = e13);
          return n12;
        })(e11.position));
        let s11 = uD(l11, e11.width, e11.height), c11 = () => {
          r11.removeEventListener("transitionend", c11);
        };
        r11.addEventListener("transitionend", c11), n11.transform = `translate3d(${s11.x}px, ${s11.y}px, 0)`, sa.value = { ...sa.value, corner: l11, dimensions: { isFullWidth: i11, isFullHeight: o11, width: e11.width, height: e11.height, position: s11 }, lastDimensions: { isFullWidth: i11, isFullHeight: o11, width: e11.width, height: e11.height, position: s11 } }, l3(oQ, { corner: l11, dimensions: sa.value.dimensions, lastDimensions: sa.value.lastDimensions, componentsTree: sa.value.componentsTree });
      };
      document.addEventListener("pointermove", u6, { passive: true }), document.addEventListener("pointerup", p2);
    }, []), onDblClick: ta((t11) => {
      t11.preventDefault(), t11.stopPropagation();
      let r11 = sr.value;
      if (!r11) return;
      let n11 = r11.style, { dimensions: a11, corner: i10 } = sa.value, o10 = uI(), l10 = o10.isFullWidth(a11.width), s10 = o10.isFullHeight(a11.height), c10 = l10 && s10, d10 = (l10 || s10) && !c10, u6 = a11.width, p2 = a11.height, h2 = ((e11, t12, r12, n12, a12) => {
        if (r12) {
          if ("top-left" === e11) return "bottom-right";
          if ("top-right" === e11) return "bottom-left";
          if ("bottom-left" === e11) return "top-right";
          if ("bottom-right" === e11) return "top-left";
          let [r13, n13] = t12.split("-");
          if ("left" === e11) return `${r13}-right`;
          if ("right" === e11) return `${r13}-left`;
          if ("top" === e11) return `bottom-${n13}`;
          if ("bottom" === e11) return `top-${n13}`;
        }
        if (n12) {
          if ("left" === e11) return `${t12.split("-")[0]}-right`;
          if ("right" === e11) return `${t12.split("-")[0]}-left`;
        }
        if (a12) {
          if ("top" === e11) return `bottom-${t12.split("-")[1]}`;
          if ("bottom" === e11) return `top-${t12.split("-")[1]}`;
        }
        return t12;
      })(e10, i10, c10, l10, s10);
      "left" === e10 || "right" === e10 ? (u6 = l10 ? a11.width : o10.maxWidth, d10 && (u6 = l10 ? 550 : o10.maxWidth)) : (p2 = s10 ? a11.height : o10.maxHeight, d10 && (p2 = s10 ? 400 : o10.maxHeight)), c10 && ("left" === e10 || "right" === e10 ? u6 = 550 : p2 = 400);
      let m2 = uD(h2, u6, p2), f2 = { isFullWidth: o10.isFullWidth(u6), isFullHeight: o10.isFullHeight(p2), width: u6, height: p2, position: m2 }, g2 = Math.floor(u6 - 275), v2 = sa.value.componentsTree.width, w2 = Math.floor(0.3 * u6), b2 = l10 ? 240 : "left" !== e10 && "right" !== e10 || l10 ? Math.min(g2, Math.max(240, v2)) : Math.min(g2, Math.max(240, w2));
      requestAnimationFrame(() => {
        sa.value = { corner: h2, dimensions: f2, lastDimensions: a11, componentsTree: { ...sa.value.componentsTree, width: b2 } }, n11.transition = "all 0.25s cubic-bezier(0, 0, 0.2, 1)", n11.width = `${u6}px`, n11.height = `${p2}px`, n11.transform = `translate3d(${m2.x}px, ${m2.y}px, 0)`;
      }), l3(oQ, { corner: h2, dimensions: f2, lastDimensions: a11, componentsTree: { ...sa.value.componentsTree, width: b2 } });
    }, []), className: l2("absolute z-50", "flex items-center justify-center", "group", "transition-colors select-none", "peer", { "resize-left peer/left": "left" === e10, "resize-right peer/right z-10": "right" === e10, "resize-top peer/top": "top" === e10, "resize-bottom peer/bottom": "bottom" === e10 }), children: rx("span", { className: "resize-line-wrapper", children: rx("span", { className: "resize-line", children: rx(oZ, { name: "icon-ellipsis", size: 18, className: l2("text-neutral-400", ("left" === e10 || "right" === e10) && "rotate-90") }) }) }) });
  }, uW = { horizontal: { width: 20, height: 48 }, vertical: { width: 48, height: 20 } }, uH = () => {
    let e10 = tr(null), t10 = tr(false), r10 = tr(0), n10 = tr(0), a10 = tr(false), i10 = ta((i11 = true) => {
      let o11, l11;
      if (!e10.current) return;
      let { corner: s11 } = sa.value;
      if (ss.value) {
        let e11 = uW[ss.value.orientation || "horizontal"];
        o11 = e11.width, l11 = e11.height;
      } else if (t10.current) {
        let e11 = sa.value.lastDimensions;
        o11 = uB(e11.width, 0, true), l11 = uB(e11.height, 0, false), a10.current && (a10.current = false);
      } else o11 = r10.current, l11 = n10.current;
      let c11 = uD(s11, o11, l11);
      if (ss.value) {
        let { corner: e11, orientation: t11 = "horizontal" } = ss.value, r11 = uW[t11], n11 = se();
        switch (e11) {
          case "top-left":
            c11 = "horizontal" === t11 ? { x: -1, y: n11.top } : { x: n11.left, y: -1 };
            break;
          case "bottom-left":
            c11 = "horizontal" === t11 ? { x: -1, y: window.innerHeight - r11.height - n11.bottom } : { x: n11.left, y: window.innerHeight - r11.height + 1 };
            break;
          case "top-right":
            c11 = "horizontal" === t11 ? { x: window.innerWidth - r11.width + 1, y: n11.top } : { x: window.innerWidth - r11.width - n11.right, y: -1 };
            break;
          default:
            c11 = "horizontal" === t11 ? { x: window.innerWidth - r11.width + 1, y: window.innerHeight - r11.height - n11.bottom } : { x: window.innerWidth - r11.width - n11.right, y: window.innerHeight - r11.height + 1 };
        }
      }
      let d11 = o11 < 550 || l11 < 400, u9 = e10.current, p2 = u9.style, h2 = null, m2 = () => {
        si(), u9.removeEventListener("transitionend", m2), h2 && (cancelAnimationFrame(h2), h2 = null);
      };
      u9.addEventListener("transitionend", m2), p2.transition = "all 0.25s cubic-bezier(0, 0, 0.2, 1)", h2 = requestAnimationFrame(() => {
        p2.width = `${o11}px`, p2.height = `${l11}px`, p2.transform = `translate3d(${c11.x}px, ${c11.y}px, 0)`, h2 = null;
      });
      let f2 = se(), g2 = { isFullWidth: o11 >= window.innerWidth - f2.left - f2.right, isFullHeight: l11 >= window.innerHeight - f2.top - f2.bottom, width: o11, height: l11, position: c11 };
      sa.value = { corner: s11, dimensions: g2, lastDimensions: t10 ? sa.value.lastDimensions : o11 > r10.current ? g2 : sa.value.lastDimensions, componentsTree: sa.value.componentsTree }, i11 && !d11 && l3(oQ, { corner: sa.value.corner, dimensions: sa.value.dimensions, lastDimensions: sa.value.lastDimensions, componentsTree: sa.value.componentsTree }), si();
    }, []), o10 = ta((t11) => {
      if (t11.target.closest("button, a, input, textarea, select, pre, [contenteditable], [data-react-scan-selectable]") || (t11.preventDefault(), !e10.current)) return;
      let r11 = e10.current, n11 = r11.style, { dimensions: a11 } = sa.value, o11 = t11.clientX, l11 = t11.clientY, s11 = a11.position.x, c11 = a11.position.y, d11 = s11, u9 = c11, p2 = null, h2 = false, m2 = o11, f2 = l11, g2 = (e11) => {
        p2 || (h2 = true, m2 = e11.clientX, f2 = e11.clientY, p2 = requestAnimationFrame(() => {
          let e12 = m2 - o11, t12 = f2 - l11;
          d11 = Number(s11) + e12, u9 = Number(c11) + t12, n11.transition = "none", n11.transform = `translate3d(${d11}px, ${u9}px, 0)`;
          let r12 = d11 + a11.width, h3 = u9 + a11.height, w2 = Math.max(0, -d11), b2 = Math.max(0, r12 - window.innerWidth), y2 = Math.max(0, -u9), x2 = Math.max(0, h3 - window.innerHeight), _2 = Math.min(a11.width, w2 + b2), k2 = Math.min(a11.height, y2 + x2), N2 = _2 * a11.height + k2 * a11.width - _2 * k2 > 0.35 * (a11.width * a11.height);
          if (!N2 && u0.options.value.showFPS) {
            let e13 = d11 + a11.width;
            N2 = e13 <= 0 || e13 - 100 >= window.innerWidth || u9 + a11.height <= 0 || u9 >= window.innerHeight;
          }
          if (N2) {
            let e13, t13 = d11 + a11.width / 2, r13 = u9 + a11.height / 2, n12 = window.innerWidth / 2, o12 = window.innerHeight / 2;
            e13 = t13 < n12 ? r13 < o12 ? "top-left" : "bottom-left" : r13 < o12 ? "top-right" : "bottom-right";
            let l12 = Math.max(w2, b2), s12 = Math.max(y2, x2);
            sa.value = { ...sa.value, corner: e13, lastDimensions: { ...a11, position: uD(e13, a11.width, a11.height) } };
            let c12 = { corner: e13, orientation: l12 > s12 ? "horizontal" : "vertical" };
            ss.value = c12, l3(o0, c12), l3(oQ, sa.value), i10(false), document.removeEventListener("pointermove", g2), document.removeEventListener("pointerup", v2), p2 && (cancelAnimationFrame(p2), p2 = null);
          }
          p2 = null;
        }));
      }, v2 = () => {
        if (!r11) return;
        p2 && (cancelAnimationFrame(p2), p2 = null), document.removeEventListener("pointermove", g2), document.removeEventListener("pointerup", v2);
        let e11 = Math.abs(m2 - o11), t12 = Math.abs(f2 - l11), i11 = Math.sqrt(e11 * e11 + t12 * t12);
        if (!h2 || i11 < 60) return;
        let w2 = ((e12, t13, r12, n12, a12 = 100) => {
          let i12 = void 0 !== r12 ? e12 - r12 : 0, o12 = void 0 !== n12 ? t13 - n12 : 0, l12 = window.innerWidth / 2, s12 = window.innerHeight / 2, c12 = i12 > a12, d12 = o12 > a12;
          if (c12 || i12 < -a12) {
            let e13 = t13 > s12;
            return c12 ? e13 ? "bottom-right" : "top-right" : e13 ? "bottom-left" : "top-left";
          }
          if (d12 || o12 < -a12) {
            let t14 = e12 > l12;
            return d12 ? t14 ? "bottom-right" : "bottom-left" : t14 ? "top-right" : "top-left";
          }
          return e12 > l12 ? t13 > s12 ? "bottom-right" : "top-right" : t13 > s12 ? "bottom-left" : "top-left";
        })(m2, f2, o11, l11, "focused" === uQ.inspectState.value.kind ? 80 : 40);
        if (w2 === sa.value.corner) {
          n11.transition = "transform 0.25s cubic-bezier(0, 0, 0.2, 1)";
          let e12 = sa.value.dimensions.position;
          requestAnimationFrame(() => {
            n11.transform = `translate3d(${e12.x}px, ${e12.y}px, 0)`;
          });
          return;
        }
        let b2 = uD(w2, a11.width, a11.height);
        if (d11 === s11 && u9 === c11) return;
        let y2 = () => {
          n11.transition = "none", si(), r11.removeEventListener("transitionend", y2), p2 && (cancelAnimationFrame(p2), p2 = null);
        };
        r11.addEventListener("transitionend", y2), n11.transition = "transform 0.25s cubic-bezier(0, 0, 0.2, 1)", requestAnimationFrame(() => {
          n11.transform = `translate3d(${b2.x}px, ${b2.y}px, 0)`;
        }), sa.value = { corner: w2, dimensions: { isFullWidth: a11.isFullWidth, isFullHeight: a11.isFullHeight, width: a11.width, height: a11.height, position: b2 }, lastDimensions: sa.value.lastDimensions, componentsTree: sa.value.componentsTree }, l3(oQ, { corner: w2, dimensions: sa.value.dimensions, lastDimensions: sa.value.lastDimensions, componentsTree: sa.value.componentsTree });
      };
      document.addEventListener("pointermove", g2), document.addEventListener("pointerup", v2);
    }, []), l10 = ta((t11) => {
      if (t11.preventDefault(), !e10.current || !ss.value) return;
      let { corner: n11, orientation: a11 = "horizontal" } = ss.value, o11 = t11.clientX, l11 = t11.clientY, s11 = false, c11 = (t12) => {
        if (s11) return;
        let u9 = t12.clientX - o11, p2 = t12.clientY - l11, h2 = false;
        "horizontal" === a11 ? n11.endsWith("left") && u9 > 50 ? h2 = true : n11.endsWith("right") && u9 < -50 && (h2 = true) : n11.startsWith("top") && p2 > 50 ? h2 = true : n11.startsWith("bottom") && p2 < -50 && (h2 = true), h2 && (s11 = true, ss.value = null, l3(o0, null), 0 === r10.current && e10.current ? requestAnimationFrame(() => {
          if (e10.current) {
            e10.current.style.width = "min-content", r10.current = e10.current.offsetWidth || 300;
            let n12 = sa.value.lastDimensions, a12 = uB(n12.width, 0, true), o12 = uB(n12.height, 0, false), l12 = t12.clientX - a12 / 2, s12 = t12.clientY - o12 / 2, c12 = se();
            l12 = Math.max(c12.left, Math.min(l12, window.innerWidth - a12 - c12.right)), s12 = Math.max(c12.top, Math.min(s12, window.innerHeight - o12 - c12.bottom)), sa.value = { ...sa.value, dimensions: { ...sa.value.dimensions, position: { x: l12, y: s12 } } }, i10(true), so.value = l4(o1) || { view: "none" }, setTimeout(() => {
              if (e10.current) {
                let r11 = new PointerEvent("pointerdown", { clientX: t12.clientX, clientY: t12.clientY, pointerId: t12.pointerId, bubbles: true });
                e10.current.dispatchEvent(r11);
              }
            }, 100);
          }
        }) : (i10(true), so.value = l4(o1) || { view: "none" }), document.removeEventListener("pointermove", c11), document.removeEventListener("pointerup", d11));
      }, d11 = () => {
        document.removeEventListener("pointermove", c11), document.removeEventListener("pointerup", d11);
      };
      document.addEventListener("pointermove", c11), document.addEventListener("pointerup", d11);
    }, []);
    te(() => {
      if (!e10.current) return;
      l7(o1), ss.value ? (n10.current = 36, r10.current = 0) : (e10.current.style.width = "min-content", n10.current = 36, r10.current = e10.current.offsetWidth);
      let o11 = se();
      e10.current.style.maxWidth = `calc(100vw - ${o11.left + o11.right}px)`, e10.current.style.maxHeight = `calc(100vh - ${o11.top + o11.bottom}px)`, i10(), "focused" === uQ.inspectState.value.kind || ss.value || a10.current || (sa.value = { ...sa.value, dimensions: { isFullWidth: false, isFullHeight: false, width: r10.current, height: n10.current, position: sa.value.dimensions.position } }), sr.value = e10.current;
      let l11 = sa.subscribe((t11) => {
        if (!e10.current) return;
        let { x: r11, y: n11 } = t11.dimensions.position, { width: a11, height: i11 } = t11.dimensions, o12 = e10.current;
        requestAnimationFrame(() => {
          o12.style.transform = `translate3d(${r11}px, ${n11}px, 0)`, o12.style.width = `${a11}px`, o12.style.height = `${i11}px`;
        });
      }), s11 = so.subscribe((e11) => {
        t10.current = "none" !== e11.view, i10(), ss.value || ("none" !== e11.view ? l3(o1, e11) : l7(o1));
      }), c11 = uQ.inspectState.subscribe((e11) => {
        t10.current = "focused" === e11.kind, i10();
      }), d11 = () => {
        i10(true);
      };
      return window.addEventListener("resize", d11, { passive: true }), () => {
        window.removeEventListener("resize", d11), s11(), c11(), l11(), l3(oQ, { ...sn(), corner: sa.value.corner });
      };
    }, []);
    let [s10, c10] = e9(false);
    te(() => {
      c10(true);
    }, []);
    let d10 = ss.value, u6 = "";
    if (d10) {
      let { orientation: e11 = "horizontal", corner: t11 } = d10;
      u6 = "horizontal" === e11 ? (null == t11 ? void 0 : t11.endsWith("right")) ? "rotate-180" : "" : (null == t11 ? void 0 : t11.startsWith("bottom")) ? "-rotate-90" : "rotate-90";
    }
    return rx(ez, { children: [rx(uF, {}), rx(uV.Provider, { value: e10.current, children: rx("div", { id: "react-scan-toolbar", dir: "ltr", ref: e10, onPointerDown: d10 ? l10 : o10, className: l2("fixed inset-0", d10 ? (() => {
      let { orientation: e11 = "horizontal", corner: t11 } = d10;
      return "horizontal" === e11 ? (null == t11 ? void 0 : t11.endsWith("right")) ? "rounded-tl-lg rounded-bl-lg shadow-lg" : "rounded-tr-lg rounded-br-lg shadow-lg" : (null == t11 ? void 0 : t11.startsWith("bottom")) ? "rounded-tl-lg rounded-tr-lg shadow-lg" : "rounded-bl-lg rounded-br-lg shadow-lg";
    })() : "rounded-lg shadow-lg", "flex flex-col", "font-mono text-[13px]", "user-select-none", "opacity-0", d10 ? "cursor-pointer" : "cursor-move", "z-[124124124124]", "animate-fade-in animation-duration-300 animation-delay-300", "will-change-transform", "[touch-action:none]"), style: { WebkitAppRegion: "no-drag" }, children: d10 ? rx("button", { type: "button", onClick: () => {
      ss.value = null, l3(o0, null), 0 === r10.current && e10.current && requestAnimationFrame(() => {
        e10.current && (e10.current.style.width = "min-content", r10.current = e10.current.offsetWidth || 300, i10(true));
      }), so.value = l4(o1) || { view: "none" };
    }, className: "flex items-center justify-center w-full h-full text-white", title: "Expand toolbar", children: rx(oZ, { name: "icon-chevron-right", size: 16, className: l2("transition-transform", u6) }) }) : rx(ez, { children: [rx(uU, { position: "top" }), rx(uU, { position: "bottom" }), rx(uU, { position: "left" }), rx(uU, { position: "right" }), rx(u$, {})] }) }) })] });
  }, uV = eK(null), uq = () => rx("svg", { xmlns: "http://www.w3.org/2000/svg", style: "display: none;", children: [rx("title", { children: "React Scan Icons" }), rx("symbol", { id: "icon-inspect", viewBox: "0 0 24 24", fill: "none", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [rx("path", { d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" }), rx("path", { d: "M5 3a2 2 0 0 0-2 2" }), rx("path", { d: "M19 3a2 2 0 0 1 2 2" }), rx("path", { d: "M5 21a2 2 0 0 1-2-2" }), rx("path", { d: "M9 3h1" }), rx("path", { d: "M9 21h2" }), rx("path", { d: "M14 3h1" }), rx("path", { d: "M3 9v1" }), rx("path", { d: "M21 9v2" }), rx("path", { d: "M3 14v1" })] }), rx("symbol", { id: "icon-focus", viewBox: "0 0 24 24", fill: "none", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [rx("path", { d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" }), rx("path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" })] }), rx("symbol", { id: "icon-next", viewBox: "0 0 24 24", fill: "none", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: rx("path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z" }) }), rx("symbol", { id: "icon-previous", viewBox: "0 0 24 24", fill: "none", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: rx("path", { d: "M18 15h-6v4l-7-7 7-7v4h6v6z" }) }), rx("symbol", { id: "icon-close", viewBox: "0 0 24 24", fill: "none", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [rx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), rx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }), rx("symbol", { id: "icon-replay", viewBox: "0 0 24 24", fill: "none", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [rx("path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }), rx("path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }), rx("path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }), rx("path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }), rx("circle", { cx: "12", cy: "12", r: "1" }), rx("path", { d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" })] }), rx("symbol", { id: "icon-ellipsis", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [rx("circle", { cx: "12", cy: "12", r: "1" }), rx("circle", { cx: "19", cy: "12", r: "1" }), rx("circle", { cx: "5", cy: "12", r: "1" })] }), rx("symbol", { id: "icon-copy", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [rx("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }), rx("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })] }), rx("symbol", { id: "icon-check", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: rx("path", { d: "M20 6 9 17l-5-5" }) }), rx("symbol", { id: "icon-chevron-right", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: rx("path", { d: "m9 18 6-6-6-6" }) }), rx("symbol", { id: "icon-settings", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [rx("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }), rx("circle", { cx: "12", cy: "12", r: "3" })] }), rx("symbol", { id: "icon-flame", viewBox: "0 0 24 24", children: rx("path", { d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" }) }), rx("symbol", { id: "icon-function", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [rx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }), rx("path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" }), rx("path", { d: "M9 11.2h5.7" })] }), rx("symbol", { id: "icon-triangle-alert", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [rx("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }), rx("path", { d: "M12 9v4" }), rx("path", { d: "M12 17h.01" })] }), rx("symbol", { id: "icon-gallery-horizontal-end", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [rx("path", { d: "M2 7v10" }), rx("path", { d: "M6 5v14" }), rx("rect", { width: "12", height: "18", x: "10", y: "3", rx: "2" })] }), rx("symbol", { id: "icon-search", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [rx("circle", { cx: "11", cy: "11", r: "8" }), rx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })] }), rx("symbol", { id: "icon-lock", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [rx("rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }), rx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })] }), rx("symbol", { id: "icon-lock-open", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [rx("rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }), rx("path", { d: "M7 11V7a5 5 0 0 1 9.9-1" })] }), rx("symbol", { id: "icon-sanil", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [rx("path", { d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" }), rx("circle", { cx: "10", cy: "13", r: "8" }), rx("path", { d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" }), rx("path", { d: "M18 3 19.1 5.2" })] })] }), uK = class extends e$ {
    constructor() {
      super(...arguments), oV(this, "state", { hasError: false, error: null }), oV(this, "handleReset", () => {
        this.setState({ hasError: false, error: null });
      });
    }
    static getDerivedStateFromError(e10) {
      return { hasError: true, error: e10 };
    }
    render() {
      var e10;
      return this.state.hasError ? rx("div", { className: "fixed bottom-4 right-4 z-[124124124124]", children: rx("div", { className: "p-3 bg-black rounded-lg shadow-lg w-80", children: [rx("div", { className: "flex items-center gap-2 mb-2 text-red-400 text-sm font-medium", children: [rx(oZ, { name: "icon-flame", className: "text-red-500", size: 14 }), "React Scan ran into a problem"] }), rx("div", { className: "p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words", children: (null == (e10 = this.state.error) ? void 0 : e10.message) || JSON.stringify(this.state.error) }), rx("button", { type: "button", onClick: this.handleReset, className: "px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5", children: "Restart" })] }) }) : this.props.children;
    }
  }, uG = false, uX = ["top", "right", "bottom", "left"], uJ = (e10) => {
    if (l6(e10)) return { ok: true, value: e10 };
    if (!l9(e10)) return { ok: false, error: `- safeArea must be a non-negative number or { top?, right?, bottom?, left? }. Got "${JSON.stringify(e10)}"` };
    let t10 = {};
    for (let r10 of uX) {
      let n10 = e10[r10];
      if (void 0 !== n10) {
        if (!l6(n10)) return { ok: false, error: `- safeArea.${r10} must be a non-negative number. Got "${JSON.stringify(n10)}"` };
        t10[r10] = n10;
      }
    }
    return { ok: true, value: t10 };
  }, uY = null, uZ = null, uQ = { wasDetailsOpen: tC(true), isInIframe: tC(oq && window.self !== window.top), inspectState: tC({ kind: "uninitialized" }), fiberRoots: /* @__PURE__ */ new Set(), reportData: /* @__PURE__ */ new Map(), legacyReportData: /* @__PURE__ */ new Map(), lastReportTime: tC(0), interactionListeningForRenders: null, changesListeners: /* @__PURE__ */ new Map() }, u0 = { instrumentation: null, componentAllowList: null, options: tC({ enabled: true, log: false, showToolbar: true, animationSpeed: "fast", dangerouslyForceRunInProduction: false, showFPS: true, showNotificationCount: true, allowInIframe: false }), runInAllEnvironments: false, onRender: null, Store: uQ, version: "0.5.7" };
  oq && window.__REACT_SCAN_EXTENSION__ && (window.__REACT_SCAN_VERSION__ = u0.version);
  var u1 = (e10) => {
    let t10 = [], r10 = {};
    for (let n10 in e10) {
      let a10 = e10[n10];
      switch (n10) {
        case "enabled":
        case "log":
        case "showToolbar":
        case "showNotificationCount":
        case "dangerouslyForceRunInProduction":
        case "showFPS":
        case "allowInIframe":
        case "useOffscreenCanvasWorker":
          "boolean" != typeof a10 ? t10.push(`- ${n10} must be a boolean. Got "${a10}"`) : r10[n10] = a10;
          break;
        case "animationSpeed":
          ["slow", "fast", "off"].includes(a10) ? r10[n10] = a10 : t10.push(`- Invalid animation speed "${a10}". Using default "fast"`);
          break;
        case "safeArea": {
          let e11 = uJ(a10);
          e11.ok ? r10.safeArea = e11.value : t10.push(e11.error);
          break;
        }
        case "onCommitStart":
          "function" != typeof a10 ? t10.push(`- ${n10} must be a function. Got "${a10}"`) : r10.onCommitStart = a10;
          break;
        case "onCommitFinish":
          "function" != typeof a10 ? t10.push(`- ${n10} must be a function. Got "${a10}"`) : r10.onCommitFinish = a10;
          break;
        case "onRender":
          "function" != typeof a10 ? t10.push(`- ${n10} must be a function. Got "${a10}"`) : r10.onRender = a10;
          break;
        default:
          t10.push(`- Unknown option "${n10}"`);
      }
    }
    return t10.length > 0 && console.warn(`[React Scan] Invalid options:
${t10.join("\n")}`), r10;
  }, u2 = null, u5 = () => {
    if (false === u2) return false;
    null != y || (y = j());
    let e10 = Array.from(y.renderers.values());
    if (0 === e10.length) return null;
    for (let t10 of e10) if ("production" !== J(t10)) return u2 = false, false;
    return true;
  }, u4 = (e10) => {
    var t10, r10;
    let n10, a10, i10, o10, l10, s10, c10, d10, u6, p2, h2, m2, f2, g2, b2;
    null == (t10 = window.reactScanCleanupListeners) || t10.call(window);
    let y2 = (n10 = ((e11) => {
      let t11;
      null == v || v(), t11 = () => {
        document.hidden && (dk = Date.now());
      }, document.addEventListener("visibilitychange", t11), v = () => {
        document.removeEventListener("visibilitychange", t11);
      };
      let r11 = /* @__PURE__ */ new Map(), n11 = /* @__PURE__ */ new Map(), a11 = (t12) => {
        if (!t12.interactionId) return;
        if (t12.interactionId && t12.target && !n11.has(t12.interactionId) && n11.set(t12.interactionId, t12.target), t12.target) {
          let e12 = t12.target;
          for (; e12; ) {
            if ("react-scan-toolbar-root" === e12.id || "react-scan-root" === e12.id) return;
            e12 = e12.parentElement;
          }
        }
        let a12 = r11.get(t12.interactionId);
        if (a12) t12.duration > a12.latency ? (a12.entries = [t12], a12.latency = t12.duration) : t12.duration === a12.latency && t12.startTime === a12.entries[0].startTime && a12.entries.push(t12);
        else {
          var i12;
          let n12 = ["pointerup", "click"].includes(i12 = t12.name) ? "pointer" : (i12.includes("key"), ["keydown", "keyup"].includes(i12)) ? "keyboard" : null;
          if (!n12) return;
          let a13 = { id: t12.interactionId, latency: t12.duration, entries: [t12], target: t12.target, type: n12, startTime: t12.startTime, endTime: Date.now(), processingStart: t12.processingStart, processingEnd: t12.processingEnd, duration: t12.duration, inputDelay: t12.processingStart - t12.startTime, processingDuration: t12.processingEnd - t12.processingStart, presentationDelay: t12.duration - (t12.processingEnd - t12.startTime), timestamp: Date.now(), timeSinceTabInactive: "never-hidden" === dk ? "never-hidden" : Date.now() - dk, visibilityState: document.visibilityState, timeOrigin: performance.timeOrigin, referrer: document.referrer };
          r11.set(a13.id, a13), dN || (dN = requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e11(r11.get(a13.id)), dN = null;
            });
          }));
        }
      }, i11 = new PerformanceObserver((e12) => {
        let t12 = e12.getEntries();
        for (let e13 = 0, r12 = t12.length; e13 < r12; e13++) a11(t12[e13]);
      });
      try {
        i11.observe({ type: "event", buffered: true, durationThreshold: 16 }), i11.observe({ type: "first-input", buffered: true });
      } catch {
      }
      return () => i11.disconnect();
    })((e11) => {
      dp.publish({ kind: "entry-received", entry: e11 }, "recording");
    }), a10 = (e11) => {
      w = e11.composedPath().map((e12) => e12.id).filter(Boolean).includes("react-scan-toolbar");
    }, document.addEventListener("mouseover", a10), dL = a10, i10 = () => {
      dL && document.removeEventListener("mouseover", dL);
    }, o10 = () => {
      dP = performance.now(), dF = performance.timeOrigin;
    }, document.addEventListener("visibilitychange", o10), l10 = () => {
      document.removeEventListener("visibilitychange", o10);
    }, d10 = (function e11() {
      let t11 = null;
      dO = null, t11 = dT(dO = {});
      let r11 = performance.timeOrigin, n11 = performance.now();
      return s10 = requestAnimationFrame(() => {
        c10 = setTimeout(() => {
          let a11 = performance.now(), i11 = a11 - n11, o11 = performance.timeOrigin;
          dI.push(a11 + o11);
          let l11 = dI.filter((e12) => a11 + o11 - e12 <= 1e3), s11 = l11.length;
          dI = l11;
          let c11 = null !== dP && null !== dF ? a11 + o11 - (dF + dP) < 100 : null, d11 = null !== w && w;
          !(i11 > 150) || c11 || "visible" !== document.visibilityState || d11 || dj.getState().actions.addEvent({ kind: "long-render", id: oJ(), data: { endAt: o11 + a11, startAt: n11 + r11, meta: { fiberRenders: dO, latency: i11, fps: s11 } } }), dP = null, dF = null, null == t11 || t11(), e11();
        }, 0);
      }), t11;
    })(), u6 = () => {
      d10(), cancelAnimationFrame(s10), clearTimeout(c10);
    }, h2 = dE("pointer", { onComplete: p2 = async (e11, t11, r11) => {
      dj.getState().actions.addEvent({ kind: "interaction", id: oJ(), data: { startAt: t11.detailedTiming.blockingTimeStart, endAt: performance.now() + performance.timeOrigin, meta: { ...t11, kind: r11.kind } } });
      let n11 = dp.getChannelState("recording");
      t11.detailedTiming.stopListeningForRenders(), n11.length && dp.updateChannelState("recording", () => new dd(50));
    } }), m2 = dE("keyboard", { onComplete: p2 }), r10 = (e11) => {
      du.setState(dd.fromArray(du.getCurrentState().concat(e11), 150));
    }, f2 = dp.subscribe("recording", (e11) => {
      let t11 = "auto-complete-race" === e11.kind ? dS.find((t12) => t12.interactionUUID === e11.interactionUUID) : ((e12, t12) => {
        let r11 = null;
        for (let n11 of t12) {
          if (n11.type !== e12.type) continue;
          if (null === r11) {
            r11 = n11;
            continue;
          }
          let t13 = (e13, t14) => Math.abs(e13.startDateTime) - (t14.startTime + t14.timeOrigin);
          t13(n11, e12) < t13(r11, e12) && (r11 = n11);
        }
        return r11;
      })(e11.entry, dS);
      t11 && r10(t11.completeInteraction(e11));
    }), () => {
      i10(), l10(), u6(), n10(), h2(), f2(), m2();
    }), x2 = u3();
    window.reactScanCleanupListeners = () => {
      y2(), null == x2 || x2();
    };
    let _2 = window.__REACT_SCAN_TOOLBAR_CONTAINER__;
    if (!e10) {
      null == _2 || _2.remove();
      return;
    }
    null == _2 || _2.remove();
    let { shadowRoot: k2 } = (() => {
      if (uY && uZ) return { rootContainer: uY, shadowRoot: uZ };
      (uY = document.createElement("div")).id = "react-scan-root", uZ = uY.attachShadow({ mode: "open" });
      let e11 = document.createElement("style");
      return e11.textContent = de, uZ.appendChild(e11), document.documentElement.appendChild(uY), { rootContainer: uY, shadowRoot: uZ };
    })();
    (g2 = document.createElement("div")).id = "react-scan-toolbar-root", window.__REACT_SCAN_TOOLBAR_CONTAINER__ = g2, k2.appendChild(g2), eq(rx(uK, { children: rx(ez, { children: [rx(uq, {}), rx(uH, {})] }) }), g2), b2 = g2.remove.bind(g2), g2.remove = () => {
      window.__REACT_SCAN_TOOLBAR_CONTAINER__ = void 0, g2.hasChildNodes() && (eq(null, g2), eq(null, g2)), b2();
    };
  }, u3 = () => {
    try {
      let e10 = document.documentElement;
      return ((e11) => {
        if (!(ur = (ut = document.createElement("canvas")).getContext("2d", { alpha: true }))) return null;
        let t10 = window.devicePixelRatio || 1, { innerWidth: r10, innerHeight: n10 } = window;
        ut.style.width = `${r10}px`, ut.style.height = `${n10}px`, ut.width = r10 * t10, ut.height = n10 * t10, ut.style.position = "fixed", ut.style.left = "0", ut.style.top = "0", ut.style.pointerEvents = "none", ut.style.zIndex = "2147483600", ur.scale(t10, t10), e11.appendChild(ut), us && window.removeEventListener("resize", us);
        let a10 = () => {
          if (!ut || !ur) return;
          let e12 = window.devicePixelRatio || 1, { innerWidth: t11, innerHeight: r11 } = window;
          ut.style.width = `${t11}px`, ut.style.height = `${r11}px`, ut.width = t11 * e12, ut.height = r11 * e12, ur.scale(e12, e12), ul();
        };
        return us = a10, window.addEventListener("resize", a10), un.subscribe(() => {
          requestAnimationFrame(() => {
            ul();
          });
        }), uc;
      })(e10);
    } catch (e10) {
      "verbose" === u0.options.value._debug && console.error("[React Scan Internal Error]", "Failed to create notifications outline canvas", e10);
    }
  }, u7 = /* @__PURE__ */ new WeakSet();
  try {
    var u8 = window;
    u8._sentryModuleMetadata = u8._sentryModuleMetadata || {}, u8._sentryModuleMetadata[new u8.Error().stack] = Object.assign({}, u8._sentryModuleMetadata[new u8.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  e.s(["ReactScan", 0, function() {
    return (0, x.useEffect)(() => {
      ((e10 = {}) => {
        ((e11) => {
          var t10;
          try {
            let r10 = u1(e11);
            if (0 === Object.keys(r10).length) return;
            let n10 = "showToolbar" in r10 && void 0 !== r10.showToolbar, a10 = { ...u0.options.value, ...r10 }, { instrumentation: i10 } = u0;
            i10 && "enabled" in r10 && (i10.isPaused.value = false === r10.enabled), u0.options.value = a10;
            try {
              let e12 = null == (t10 = l4("react-scan-options")) ? void 0 : t10.enabled;
              "boolean" == typeof e12 && (a10.enabled = e12);
            } catch (e12) {
              "verbose" === u0.options.value._debug && console.error("[React Scan Internal Error]", "Failed to create notifications outline canvas", e12);
            }
            return l3("react-scan-options", ((e12) => {
              let { onCommitStart: t11, onRender: r11, onCommitFinish: n11, ...a11 } = e12;
              return a11;
            })(a10)), n10 && u4(!!a10.showToolbar), a10;
          } catch (e12) {
            "verbose" === u0.options.value._debug && console.error("[React Scan Internal Error]", "Failed to create notifications outline canvas", e12);
          }
        })(e10), (!uQ.isInIframe.value || u0.options.value.allowInIframe || u0.runInAllEnvironments) && (false !== e10.enabled || true === e10.showToolbar) && (() => {
          try {
            if (!oq || !u0.runInAllEnvironments && u5() && !u0.options.value.dangerouslyForceRunInProduction) return;
            (() => {
              if (!uG) {
                if (uG = true, !("u" < typeof window) && !window.__REACT_GRAB__ && navigator.onLine && oU.version) try {
                  fetch(`https://www.react-grab.com/api/version?source=react-scan&v=${oU.version}&t=${Date.now()}`, { referrerPolicy: "origin", keepalive: true, priority: "low", cache: "no-store" }).then((e12) => e12.ok ? e12.text() : null).then((e12) => {
                    if (!e12) return;
                    let t11 = e12.trim();
                    /^\d+\.\d+\.\d+/.test(t11) && t11 !== oU.version && console.warn(`[React Scan] react-grab v${oU.version} is outdated (latest: v${t11}). Update react-scan to pick up the newer react-grab.`);
                  }).catch(() => null);
                } catch {
                }
              }
            })();
            let e11 = l4("react-scan-options");
            if (e11) {
              let t11 = u1(e11);
              Object.keys(t11).length > 0 && (u0.options.value = { ...u0.options.value, ...t11 });
            }
            let t10 = u0.options;
            ((e12) => {
              var t11, r10;
              let n10, a10, i10;
              if (globalThis.__REACT_SCAN_STOP__ || c9) return;
              c9 = true;
              let o10 = false, l10 = () => {
                o10 || (n10 && cancelAnimationFrame(n10), n10 = requestAnimationFrame(() => {
                  o10 = true;
                  let t12 = (() => {
                    var e13;
                    let t13, r11;
                    (r11 = document.querySelector("[data-react-scan]")) && r11.remove();
                    let n11 = document.createElement("div");
                    n11.setAttribute("data-react-scan", "true");
                    let a11 = n11.attachShadow({ mode: "open" }), i11 = document.createElement("canvas");
                    if (i11.style.position = "fixed", i11.style.top = "0", i11.style.left = "0", i11.style.pointerEvents = "none", i11.style.zIndex = "2147483646", i11.setAttribute("aria-hidden", "true"), a11.appendChild(i11), !i11) return null;
                    cG = c7(), cq = i11;
                    let { innerWidth: o11, innerHeight: l11 } = window;
                    i11.style.width = `${o11}px`, i11.style.height = `${l11}px`;
                    let s11 = o11 * cG, c10 = l11 * cG;
                    i11.width = s11, i11.height = c10;
                    let d10 = false === u0.options.value.useOffscreenCanvasWorker;
                    if (c3 && !window.__REACT_SCAN_EXTENSION__ && !d10) try {
                      let e14 = URL.createObjectURL(new Blob(['"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var T=(t,n)=>{let r=n-t;return Math.abs(r)<.5?n:t+r*.2};var x="115,97,230";function P(t,n){return n[0]-t[0]}function F(t){return[...t.entries()].sort(P)}function v([t,n]){let r=`${n.slice(0,4).join(", ")} \\xD7${t}`;return r.length>40&&(r=`${r.slice(0,40)}\\u2026`),r}var $=t=>{let n=new Map;for(let{name:e,count:u}of t)n.set(e,(n.get(e)||0)+u);let r=new Map;for(let[e,u]of n){let A=r.get(u);A?A.push(e):r.set(u,[e])}let d=F(r),a=v(d[0]);for(let e=1,u=d.length;e<u;e++)a+=", "+v(d[e]);return a.length>40?`${a.slice(0,40)}\\u2026`:a},H=t=>{let n=0;for(let r of t)n+=r.width*r.height;return n};var N=(t,n)=>{let r=t.getContext("2d",{alpha:!0});return r&&r.scale(n,n),r},X=(t,n,r,d)=>{t.clearRect(0,0,n.width/r,n.height/r);let a=new Map,e=new Map;for(let i of d.values()){let{x:o,y:c,width:l,height:g,targetX:s,targetY:f,targetWidth:h,targetHeight:m,frame:O}=i;s!==o&&(i.x=T(o,s)),f!==c&&(i.y=T(c,f)),h!==l&&(i.width=T(l,h)),m!==g&&(i.height=T(g,m));let M=`${s??o},${f??c}`,L=`${M},${h??l},${m??g}`,S=a.get(M);S?S.push(i):a.set(M,[i]);let C=1-O/45;i.frame++;let _=e.get(L)||{x:o,y:c,width:l,height:g,alpha:C};C>_.alpha&&(_.alpha=C),e.set(L,_)}for(let{x:i,y:o,width:c,height:l,alpha:g}of e.values()){t.strokeStyle=`rgba(${x},${g})`,t.lineWidth=1;let s=Math.round(i)+.5,f=Math.round(o)+.5,h=Math.round(c),m=Math.round(l);t.beginPath(),t.rect(s,f,h,m),t.stroke(),t.fillStyle=`rgba(${x},${g*.1})`,t.fill()}t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let i of a.values()){let o=i[0],{x:c,y:l,frame:g}=o,s=1-g/45,f=$(i),{width:h}=t.measureText(f),m=11;u.set(`${c},${l},${h},${f}`,{text:f,width:h,height:m,alpha:s,x:c,y:l,outlines:i});let O=l-m-4;if(O<0&&(O=0),g>45)for(let M of i)d.delete(String(M.id))}let A=Array.from(u.entries()).sort(([i,o],[c,l])=>H(l.outlines)-H(o.outlines));for(let[i,o]of A)if(u.has(i))for(let[c,l]of u.entries()){if(i===c)continue;let{x:g,y:s,width:f,height:h}=o,{x:m,y:O,width:M,height:L}=l;g+f>m&&m+M>g&&s+h>O&&O+L>s&&(o.text=$(o.outlines.concat(l.outlines)),o.width=t.measureText(o.text).width,u.delete(c))}for(let i of u.values()){let{x:o,y:c,alpha:l,width:g,height:s,text:f}=i,h=c-s-4;h<0&&(h=0),t.fillStyle=`rgba(${x},${l})`,t.fillRect(o,h,g+4,s+4),t.fillStyle=`rgba(255,255,255,${l})`,t.fillText(f,o+2,h+s)}return d.size>0};var p=null,w=null,b=1,y=new Map,E=null,R=()=>{if(!w||!p)return;X(w,p,b,y)?E=requestAnimationFrame(R):E=null};self.onmessage=t=>{let{type:n}=t.data;if(n==="init"&&(p=t.data.canvas,b=t.data.dpr,p&&(p.width=t.data.width,p.height=t.data.height,w=N(p,b))),!(!p||!w)){if(n==="resize"){b=t.data.dpr,p.width=t.data.width*b,p.height=t.data.height*b,w.resetTransform(),w.scale(b,b),R();return}if(n==="draw-outlines"){let{data:r,names:d}=t.data,a=new Float32Array(r);for(let e=0;e<a.length;e+=7){let u=a[e+2],A=a[e+3],i=a[e+4],o=a[e+5],c=a[e+6],l={id:a[e],name:d[e/7],count:a[e+1],x:u,y:A,width:i,height:o,frame:0,targetX:u,targetY:A,targetWidth:i,targetHeight:o,didCommit:c},g=String(l.id),s=y.get(g);s?(s.count++,s.frame=0,s.targetX=u,s.targetY=A,s.targetWidth=i,s.targetHeight=o,s.didCommit=c):y.set(g,l)}E||(E=requestAnimationFrame(R));return}if(n==="scroll"){let{deltaX:r,deltaY:d}=t.data;for(let a of y.values()){let e=a.x-r,u=a.y-d;a.targetX=e,a.targetY=u}}}};})();\n'], { type: "application/javascript" }));
                      cV = new Worker(e14);
                      let t14 = i11.transferControlToOffscreen();
                      cV.postMessage({ type: "init", canvas: t14, width: i11.width, height: i11.height, dpr: cG }, [t14]);
                    } catch (e14) {
                      cV = null, "verbose" === u0.options.value._debug && console.warn("Failed to initialize OffscreenCanvas worker:", e14);
                    }
                    cV || (e13 = cG, (t13 = i11.getContext("2d", { alpha: true })) && t13.scale(e13, e13), cK = t13);
                    let u6 = false;
                    window.addEventListener("resize", () => {
                      u6 || (u6 = true, setTimeout(() => {
                        let e14 = window.innerWidth, t14 = window.innerHeight;
                        cG = c7(), i11.style.width = `${e14}px`, i11.style.height = `${t14}px`, cV ? cV.postMessage({ type: "resize", width: e14, height: t14, dpr: cG }) : (i11.width = e14 * cG, i11.height = t14 * cG, cK && (cK.resetTransform(), cK.scale(cG, cG)), c4()), u6 = false;
                      }));
                    });
                    let p2 = window.scrollX, h2 = window.scrollY, m2 = false;
                    return window.addEventListener("scroll", () => {
                      m2 || (m2 = true, setTimeout(() => {
                        let { scrollX: e14, scrollY: t14 } = window, r12 = e14 - p2, n12 = t14 - h2;
                        p2 = e14, h2 = t14, cV ? cV.postMessage({ type: "scroll", deltaX: r12, deltaY: n12 }) : requestAnimationFrame(cH.bind(null, cJ, r12, n12)), m2 = false;
                      }, 32));
                    }), setInterval(() => {
                      cZ.size && requestAnimationFrame(c5);
                    }, 32), a11.appendChild(i11), n11;
                  })();
                  t12 && document.documentElement.appendChild(t12), e12();
                }));
              }, s10 = (t11 = "react-scan-devtools-0.1.0", r10 = { onCommitStart: () => {
                var e13, t12;
                null == (t12 = (e13 = u0.options.value).onCommitStart) || t12.call(e13);
              }, onActive: (a10 = false, () => {
                globalThis.__REACT_SCAN_STOP__ || a10 || (a10 = true, l10(), window.__REACT_SCAN_EXTENSION__ || (globalThis.__REACT_SCAN__ = { ReactScanInternals: u0 }), clearInterval(g), g = setInterval(() => {
                  c8 && (uQ.lastReportTime.value = Date.now(), c8 = false);
                }, 50), (() => {
                  if (window.hideIntro) {
                    window.hideIntro = void 0;
                    return;
                  }
                  console.log("%c[\xB7] %cReact Scan", "font-weight:bold;color:#7a68e8;font-size:20px;", "font-weight:bold;font-size:14px;");
                })());
              }), onError: () => {
              }, isValidFiber: c6, onRender: (e13, t12) => {
                var r11, n11, a11, i11;
                I(e13) && (null == (r11 = uQ.interactionListeningForRenders) || r11.call(uQ, e13, t12));
                let o11 = null == (n11 = u0.instrumentation) ? void 0 : n11.isPaused.value, l11 = "inspect-off" === uQ.inspectState.value.kind || "uninitialized" === uQ.inspectState.value.kind;
                o11 && l11 || (o11 || ((e14) => {
                  if (!I(e14)) return;
                  let t13 = "string" == typeof e14.type ? e14.type : X(e14);
                  if (!t13) return;
                  let r12 = cY.get(e14), n12 = ((e15) => {
                    let t14 = [], r13 = [];
                    for (L(e15) ? t14.push(e15) : e15.child && r13.push(e15.child); r13.length; ) {
                      let e16 = r13.pop();
                      if (!e16) break;
                      L(e16) ? t14.push(e16) : e16.child && r13.push(e16.child), e16.sibling && r13.push(e16.sibling);
                    }
                    return t14;
                  })(e14), a12 = B(e14);
                  r12 ? r12.count++ : (cY.set(e14, { name: t13, count: 1, elements: n12.map((e15) => e15.stateNode), didCommit: +!!a12 }), cZ.add(e14));
                })(e13), u0.options.value.log && ((e14) => {
                  var t13;
                  let r12 = /* @__PURE__ */ new Map();
                  for (let n12 = 0, a12 = e14.length; n12 < a12; n12++) {
                    let a13 = e14[n12];
                    if (!a13.componentName) continue;
                    let i12 = null != (t13 = r12.get(a13.componentName)) ? t13 : [], o12 = oG([{ aggregatedCount: 1, computedKey: null, name: a13.componentName, frame: null, ...a13, changes: { type: a13.changes.reduce((e15, t14) => e15 | t14.type, 0), unstable: a13.changes.some((e15) => e15.unstable) }, phase: a13.phase, computedCurrent: null }]);
                    if (!o12) continue;
                    let l12 = null, s11 = null;
                    if (a13.changes) for (let e15 = 0, t14 = a13.changes.length; e15 < t14; e15++) {
                      let { name: t15, prevValue: r13, nextValue: n13, unstable: o13, type: c10 } = a13.changes[e15];
                      1 === c10 ? (null != l12 || (l12 = {}), null != s11 || (s11 = {}), l12[`${o13 ? "\u26A0\uFE0F" : ""}${t15} (prev)`] = r13, s11[`${o13 ? "\u26A0\uFE0F" : ""}${t15} (next)`] = n13) : i12.push({ prev: r13, next: n13, type: 4 === c10 ? "context" : "state", unstable: null != o13 && o13 });
                    }
                    l12 && s11 && i12.push({ prev: l12, next: s11, type: "props", unstable: false }), r12.set(o12, i12);
                  }
                  for (let [e15, t14] of Array.from(r12.entries())) {
                    for (let { type: r13, prev: n12, next: a12, unstable: i12 } of (console.group(`%c${e15}`, "background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;"), t14)) console.log(`${r13}:`, i12 ? "\u26A0\uFE0F" : "", n12, "!==", a12);
                    console.groupEnd();
                  }
                })(t12), "focused" === uQ.inspectState.value.kind && (sf.value = Date.now()), l11 || ((e14) => {
                  var t13, r12;
                  if (I(e14) && false !== u0.options.value.showToolbar && "focused" === uQ.inspectState.value.kind) {
                    let { selfTime: n12 } = q(e14), a12 = X(e14.type), i12 = Q(e14), o12 = uQ.reportData.get(i12), l12 = null != (t13 = null == o12 ? void 0 : o12.count) ? t13 : 0, s11 = null != (r12 = null == o12 ? void 0 : o12.time) ? r12 : 0, c10 = uQ.changesListeners.get(Q(e14));
                    if (null == c10 ? void 0 : c10.length) {
                      let t14, r13 = s5(e14).map((e15) => ({ type: 1, name: e15.name, value: e15.value, prevValue: e15.prevValue, unstable: false })), n13 = ((e15) => {
                        var t15, r14;
                        if (!e15) return [];
                        let n14 = [];
                        if (0 === e15.tag || 11 === e15.tag || 15 === e15.tag || 14 === e15.tag) {
                          let r15 = e15.memoizedState, a14 = null == (t15 = e15.alternate) ? void 0 : t15.memoizedState, i13 = 0;
                          for (; r15; ) {
                            if (r15.queue && void 0 !== r15.memoizedState) {
                              let e16 = { type: 2, name: i13.toString(), value: r15.memoizedState, prevValue: null == a14 ? void 0 : a14.memoizedState };
                              oX(e16.prevValue, e16.value) || n14.push(e16);
                            }
                            r15 = r15.next, a14 = null == a14 ? void 0 : a14.next, i13++;
                          }
                          return n14;
                        }
                        if (1 === e15.tag) {
                          let t16 = { type: 3, name: "state", value: e15.memoizedState, prevValue: null == (r14 = e15.alternate) ? void 0 : r14.memoizedState };
                          oX(t16.prevValue, t16.value) || n14.push(t16);
                        }
                        return n14;
                      })(e14), a13 = (t14 = [], ((e15, t15) => {
                        try {
                          let r14 = e15.dependencies, n14 = e15.alternate?.dependencies;
                          if (!r14 || !n14 || "object" != typeof r14 || !("firstContext" in r14) || "object" != typeof n14 || !("firstContext" in n14)) return false;
                          let a14 = r14.firstContext, i13 = n14.firstContext;
                          for (; a14 && "object" == typeof a14 && "memoizedValue" in a14 || i13 && "object" == typeof i13 && "memoizedValue" in i13; ) {
                            if (true === t15(a14, i13)) return true;
                            a14 = a14?.next, i13 = i13?.next;
                          }
                        } catch {
                        }
                      })(e14, cA.bind(t14)), t14).map((e15) => ({ name: e15.name, type: 4, value: e15.value, contextType: e15.contextType }));
                      c10.forEach((e15) => {
                        e15({ propsChanges: r13, stateChanges: n13, contextChanges: a13 });
                      });
                    }
                    let d10 = { count: l12 + 1, time: s11 + n12 || 0, renders: [], displayName: a12, type: G(e14.type) || null, changes: [] };
                    uQ.reportData.set(i12, d10), c8 = true;
                  }
                })(e13), null == (i11 = (a11 = u0.options.value).onRender) || i11.call(a11, e13, t12));
              }, onCommitFinish: () => {
                var e13, t12;
                l10(), null == (t12 = (e13 = u0.options.value).onCommitFinish) || t12.call(e13);
              }, onPostCommitFiberRoot() {
                l10();
              }, trackChanges: false }, i10 = { isPaused: tC(!u0.options.value.enabled), fiberRoots: /* @__PURE__ */ new WeakSet() }, cz.set(t11, { key: t11, config: r10, instrumentation: i10 }), c$ || (c$ = true, ((e13) => {
                let t12 = j(e13.onActive);
                t12._instrumentationSource = e13.name ?? k;
                let r11 = t12.onCommitFiberRoot;
                if (e13.onCommitFiberRoot) {
                  let n12 = (t13, a12, i11) => {
                    r11 !== n12 && (r11?.(t13, a12, i11), e13.onCommitFiberRoot?.(t13, a12, i11));
                  };
                  t12.onCommitFiberRoot = n12;
                }
                let n11 = t12.onCommitFiberUnmount;
                if (e13.onCommitFiberUnmount) {
                  let r12 = (a12, i11) => {
                    t12.onCommitFiberUnmount === r12 && (n11?.(a12, i11), e13.onCommitFiberUnmount?.(a12, i11));
                  };
                  t12.onCommitFiberUnmount = r12;
                }
                let a11 = t12.onPostCommitFiberRoot;
                if (e13.onPostCommitFiberRoot) {
                  let r12 = (n12, i11) => {
                    t12.onPostCommitFiberRoot === r12 && (a11?.(n12, i11), e13.onPostCommitFiberRoot?.(n12, i11));
                  };
                  t12.onPostCommitFiberRoot = r12;
                }
              })({ name: "react-scan", onActive: r10.onActive, onCommitFiberRoot(e13, t12) {
                i10.fiberRoots.add(t12);
                let r11 = cR();
                for (let e14 of r11) e14.config.onCommitStart();
                for (let e14 of (((e15, t13) => {
                  let r12 = "current" in e15 ? e15.current : e15, n11 = ei.get(e15);
                  n11 || (n11 = { id: ea++, prevFiber: null }, ei.set(e15, n11));
                  let { prevFiber: a11 } = n11;
                  if (r12) if (null !== a11) {
                    let e16 = a11 && null != a11.memoizedState && null != a11.memoizedState.element && true !== a11.memoizedState.isDehydrated, n12 = null != r12.memoizedState && null != r12.memoizedState.element && true !== r12.memoizedState.isDehydrated;
                    !e16 && n12 ? ee(t13, r12, false) : e16 && n12 ? et(t13, r12, r12.alternate, null) : e16 && !n12 && er(t13, r12);
                  } else ee(t13, r12, true);
                  else er(t13, r12);
                  n11.prevFiber = r12;
                })(t12.current, (e15, t13) => {
                  let r12 = G(e15.type);
                  if (!r12) return null;
                  let n11 = cR(), a11 = [];
                  for (let t14 = 0, r13 = n11.length; t14 < r13; t14++) n11[t14].config.isValidFiber(e15) && a11.push(t14);
                  if (!a11.length) return null;
                  let i11 = [];
                  if (n11.some((e16) => e16.config.trackChanges)) {
                    let t14 = cm(e15).changes, r13 = cf(e15).changes, n12 = cg(e15).changes;
                    for (let n13 of (i11.push.apply(null, t14.map((e16) => ({ type: 1, name: e16.name, value: e16.value }))), r13)) 1 === e15.tag ? i11.push({ type: 3, name: n13.name.toString(), value: n13.value }) : i11.push({ type: 2, name: n13.name.toString(), value: n13.value });
                    i11.push.apply(null, n12.map((e16) => ({ type: 4, name: e16.name, value: e16.value, contextType: Number(e16.contextType) })));
                  }
                  let { selfTime: o11, totalTime: l11 } = q(e15), s11 = cM(), c10 = { phase: cx[t13], componentName: X(r12), count: 1, changes: i11, time: o11, forget: K(e15), unnecessary: null, didCommit: B(e15), fps: s11 }, d10 = i11.length > 0, u6 = ((e16) => {
                    let t14 = [], r13 = [e16];
                    for (; r13.length; ) {
                      let e17 = r13.pop();
                      e17 && (L(e17) && B(e17) && D(e17) && t14.push(e17), e17.child && r13.push(e17.child), e17.sibling && r13.push(e17.sibling));
                    }
                    return t14;
                  })(e15).length > 0;
                  "update" === t13 && ((e16, t14, r13, n12, a12) => {
                    let i12 = Date.now(), o12 = cP(e16);
                    if ((n12 || a12) && (!o12 || i12 - (o12.lastRenderTimestamp || 0) > 16)) {
                      var l12;
                      let n13, a13, s12, c11 = o12 || { selfTime: 0, totalTime: 0, renderCount: 0, lastRenderTimestamp: i12 };
                      c11.renderCount = (c11.renderCount || 0) + 1, c11.selfTime = t14 || 0, c11.totalTime = r13 || 0, c11.lastRenderTimestamp = i12, l12 = { ...c11 }, n13 = G(e16.type), a13 = cj(e16), (s12 = cO.get(n13)) || (s12 = /* @__PURE__ */ new Map(), cO.set(n13, s12)), s12.set(a13, l12);
                    }
                  })(e15, o11, l11, d10, u6);
                  for (let t14 = 0, r13 = a11.length; t14 < r13; t14++) n11[a11[t14]].config.onRender(e15, [c10]);
                }), r11)) e14.config.onCommitFinish();
              }, onPostCommitFiberRoot() {
                for (let e13 of cR()) e13.config.onPostCommitFiberRoot();
              } })), i10);
              u0.instrumentation = s10;
            })(() => {
              u4(!!t10.value.showToolbar);
            }), oq && setTimeout(() => {
              let e12;
              e12 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__, e12?._instrumentationIsActive || C(e12) || z(e12) || console.error("[React Scan] Failed to load. Must import React Scan before React runs.");
            }, 5e3);
          } catch (e11) {
            "verbose" === u0.options.value._debug && console.error("[React Scan Internal Error]", "Failed to create notifications outline canvas", e11);
          }
        })();
      })({ enabled: true });
    }, []), null;
  }], 434556);
}, 564181, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["ConsoleEasterEggClient", 0, ({ text: e2 }) => {
    let [r2, n] = (0, t.useState)(false);
    return (0, t.useEffect)(() => {
      r2 || (console.log(e2), n(true));
    }, [e2, r2]), null;
  }]);
}, 373220, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(734804), n = e.i(140802), a = e.i(856757), i = e.i(149932);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let l = function(e2, t2, r2) {
    if (!i.isBrowser) return [t2, function() {
    }];
    var n2 = (0, a.useState)(function() {
      try {
        var n3 = sessionStorage.getItem(e2);
        if ("string" != typeof n3) return sessionStorage.setItem(e2, r2 ? String(t2) : JSON.stringify(t2)), t2;
        return r2 ? n3 : JSON.parse(n3 || "null");
      } catch (e3) {
        return t2;
      }
    }), o2 = n2[0], l2 = n2[1];
    return (0, a.useEffect)(function() {
      try {
        var t3 = r2 ? String(o2) : JSON.stringify(o2);
        sessionStorage.setItem(e2, t3);
      } catch (e3) {
      }
    }), [o2, l2];
  };
  var s = e.i(791768);
  try {
    var c = window;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var d = e.i(8507), u = e.i(962718), p = e.i(167815), h = e.i(551360);
  try {
    var m = window;
    m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[new m.Error().stack] = Object.assign({}, m._sentryModuleMetadata[new m.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function f({ content: e2, onCookieDecisionChange: r2 }) {
    return (0, t.jsx)("div", { role: "region", "aria-label": "Cookie consent", className: "pointer-events-none fixed right-4 bottom-4 left-4 z-(--dialog-content-z-index) flex justify-start", "data-visual-test": "removed", children: (0, t.jsxs)(u.AttioCard, { className: (0, h.cn)("pointer-events-auto relative w-fit", "motion-safe:slide-in-from-bottom motion-safe:fade-in-50 motion-safe:animate-in motion-safe:duration-200 motion-safe:ease-out motion-reduce:animate-none"), children: [(0, t.jsx)("div", { className: (0, h.cn)("max-w-[22em] text-balance text-sm", "[&_a]:underline"), children: (0, t.jsx)(d.StoryblokRichText, { doc: e2.content }) }), (0, t.jsxs)("div", { className: "mt-4 flex gap-2", children: [(0, t.jsx)(p.Button, { size: "responsive", onClick: () => r2("allow"), children: e2.acceptButtonLabel }), (0, t.jsx)(p.Button, { variant: "outline", size: "responsive", onClick: () => r2("block"), children: e2.rejectButtonLabel })] })] }) });
  }
  var g = e.i(112086), v = e.i(665143);
  try {
    var w = window;
    w._sentryModuleMetadata = w._sentryModuleMetadata || {}, w._sentryModuleMetadata[new w.Error().stack] = Object.assign({}, w._sentryModuleMetadata[new w.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let b = [0.23, 1, 0.32, 1];
  function y({ content: e2, onCookieDecisionChange: r2 }) {
    let n2 = (0, v.useReducedMotion)(), a2 = 0.18 * !n2;
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(g.motion.div, { "aria-hidden": "true", className: "pointer-events-none fixed inset-0 z-(--dialog-overlay-z-index) bg-primary-background/30 backdrop-blur-[4px] [mask-image:linear-gradient(to_top,black_35%,transparent_100%)]", "data-visual-test": "removed", variants: { exit: { opacity: 0, transition: { duration: a2, ease: b } }, hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: a2, ease: b } } }, initial: !n2 && "hidden", animate: "visible", exit: "exit" }), (0, t.jsx)("div", { className: "pointer-events-none fixed inset-0 z-(--dialog-content-z-index) flex items-end justify-center", children: (0, t.jsxs)(g.motion.div, { role: "region", "aria-label": "Cookie consent", className: (0, h.cn)("dark pointer-events-auto relative mx-4 mb-16 flex w-full max-w-[600px] items-center gap-6 rounded-2xl border border-white-100/5 bg-secondary-background p-5 shadow-attio-6", "max-sm:flex-col max-sm:items-stretch max-sm:gap-4"), variants: { exit: { opacity: 0, scale: 0.97, transition: { duration: a2, ease: b }, y: 12 }, hidden: { opacity: 0, scale: 0.96, y: 24 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.22 * !n2, ease: b }, y: 0 } }, initial: !n2 && "hidden", animate: "visible", exit: "exit", children: [(0, t.jsx)("div", { className: "min-w-0 flex-1", children: (0, t.jsx)("div", { className: (0, h.cn)("text-pretty text-primary-foreground text-sm", "[&_a]:text-secondary-foreground [&_a]:underline [&_a]:underline-offset-2"), children: (0, t.jsx)(d.StoryblokRichText, { doc: e2.content }) }) }), (0, t.jsxs)("div", { className: (0, h.cn)("flex shrink-0 items-center gap-2", "max-sm:justify-start"), children: [(0, t.jsx)(p.Button, { size: "sm", onClick: () => r2("block"), children: e2.rejectButtonLabel }), (0, t.jsx)(p.Button, { size: "sm", onClick: () => r2("allow"), children: e2.acceptButtonLabel })] })] }) })] });
  }
  try {
    var x = window;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  async function _({ distinctId: e2, event: t2, context: r2 }) {
    let n2 = JSON.stringify({ distinctId: e2, event: t2, properties: r2 ? { category: "website", label: "cookie_banner", ...r2 } : { category: "website", label: "cookie_banner" } });
    if ("function" == typeof navigator.sendBeacon) {
      let e3 = new Blob([n2], { type: "application/json" });
      if (navigator.sendBeacon("/api/consent", e3)) return;
    }
    let a2 = new AbortController(), i2 = window.setTimeout(() => a2.abort(), 300);
    try {
      await fetch("/api/consent", { body: n2, headers: { "content-type": "application/json" }, keepalive: true, method: "POST", signal: a2.signal });
    } catch {
      return;
    } finally {
      window.clearTimeout(i2);
    }
  }
  try {
    var k = window;
    k._sentryModuleMetadata = k._sentryModuleMetadata || {}, k._sentryModuleMetadata[new k.Error().stack] = Object.assign({}, k._sentryModuleMetadata[new k.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let N = "cookie-banner";
  try {
    var S = window;
    S._sentryModuleMetadata = S._sentryModuleMetadata || {}, S._sentryModuleMetadata[new S.Error().stack] = Object.assign({}, S._sentryModuleMetadata[new S.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["CookieConsentClient", 0, function({ content: e2, children: i2 }) {
    let o2 = s.env.NEXT_PUBLIC_IS_PRODUCTION ? ".attio.com" : void 0, [c2, d2] = (0, a.useState)(void 0), [u2, p2] = (0, a.useState)(null), [h2, m2] = l("attio_consent_session_id", null);
    function g2(e3, t2) {
      let r2 = h2 ?? crypto.randomUUID();
      h2 || m2(r2), _({ context: t2, distinctId: r2, event: e3 });
    }
    let v2 = (0, a.useEffectEvent)(function(e3) {
      g2("cookie_consent_shown", e3);
    });
    (0, a.useEffect)(() => {
      if (window !== window.parent) return void d2("allow");
      let e3 = window.requestAnimationFrame(() => {
        let e4 = r.default.get(s.env.NEXT_PUBLIC_COOKIE_DECISION_KEY), t2 = r.default.get("cookie-banner-variant"), n2 = "control" === t2 || "test" === t2 ? t2 : null, a2 = n2 ? { experiment: N, variant: n2 } : void 0;
        (p2(n2), "allow" === e4 || "block" === e4 || "ignore" === e4) ? d2(e4) : (v2(a2), r.default.set(s.env.NEXT_PUBLIC_COOKIE_DECISION_KEY, "ignore", { ...o2 ? { domain: o2 } : {}, expires: 730, sameSite: "lax", secure: true }), d2("ignore"));
      });
      return () => window.cancelAnimationFrame(e3);
    }, [o2]);
    let w2 = u2 ? { experiment: N, variant: u2 } : void 0, b2 = "ignore" === c2 || null === c2, x2 = b2 && "test" === u2;
    function k2(e3) {
      switch (r.default.set(s.env.NEXT_PUBLIC_COOKIE_DECISION_KEY, e3, { ...o2 ? { domain: o2 } : {}, expires: 730, sameSite: "lax", secure: true }), d2(e3), e3) {
        case "allow":
          g2("cookie_consent_accepted", w2), m2(null), window.clarity && window.clarity("consent");
          return;
        case "block":
          g2("cookie_consent_rejected", w2), m2(null), window.gtag && window.gtag("consent", "update", { ad_personalization: "denied", ad_storage: "denied", ad_user_data: "denied", analytics_storage: "denied", functionality_storage: "granted", security_storage: "granted" }), Object.keys(r.default.get()).forEach((e4) => {
            e4 === s.env.NEXT_PUBLIC_COOKIE_DECISION_KEY || e4.startsWith("attio") || e4.startsWith("intercom") || (r.default.remove(e4), r.default.remove(e4, { domain: ".attio.com" }), r.default.remove(e4, { domain: "attio.com" }));
          }), window.dataLayer && (window.dataLayer = []), window.mixpanel && window.mixpanel.reset(), window.location.reload();
          return;
        case "ignore":
          return;
      }
    }
    return (0, t.jsxs)(t.Fragment, { children: [("allow" === c2 || "ignore" === c2 || null === c2) && i2, b2 && !x2 && (0, t.jsx)(f, { content: e2, onCookieDecisionChange: k2 }), (0, t.jsx)(n.AnimatePresence, { children: x2 && (0, t.jsx)(y, { content: e2, onCookieDecisionChange: k2 }) })] });
  }], 373220);
}, 457433, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["PageScrollTracker", 0, function() {
    return (0, t.useEffect)(() => {
      let e2 = window.scrollY > 0;
      function t2() {
        let t3 = window.scrollY > 0;
        t3 !== e2 && (e2 = t3, document.documentElement.setAttribute("data-scrolled", e2 ? "true" : "false"));
      }
      return document.documentElement.setAttribute("data-scrolled", e2 ? "true" : "false"), window.addEventListener("scroll", t2, { passive: true }), () => {
        window.removeEventListener("scroll", t2);
      };
    }, []), null;
  }]);
}, 938645, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(189306);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["SiteToaster", 0, function() {
    return (0, t.jsx)(r.Toaster, { position: "top-center", toastOptions: { style: { borderRadius: "var(--radius-xl)", boxShadow: "0px 1px 2px 0px oklch(0 0 0 / 0.01),0px 2px 4px -1px oklch(0 0 0 / 0.02),0px 4px 8px -2px oklch(0 0 0 / 0.03),0px 8px 16px -4px oklch(0 0 0 / 0.04)", height: "fit-content", justifyContent: "center", padding: "12px", paddingRight: "14px", width: "fit-content" } }, className: "flex w-full items-center justify-center" });
  }]);
}, 427423, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var a = (e2, t2, r2, n2, a2, i2, o2, l2) => {
    let s2 = document.documentElement, c2 = ["light", "dark"];
    function d2(t3) {
      var r3;
      (Array.isArray(e2) ? e2 : [e2]).forEach((e3) => {
        let r4 = "class" === e3, n3 = r4 && i2 ? a2.map((e4) => i2[e4] || e4) : a2;
        r4 ? (s2.classList.remove(...n3), s2.classList.add(i2 && i2[t3] ? i2[t3] : t3)) : s2.setAttribute(e3, t3);
      }), r3 = t3, l2 && c2.includes(r3) && (s2.style.colorScheme = r3);
    }
    if (n2) d2(n2);
    else try {
      let e3 = localStorage.getItem(t2) || r2, n3 = o2 && "system" === e3 ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e3;
      d2(n3);
    } catch (e3) {
    }
  }, i = ["light", "dark"], o = "(prefers-color-scheme: dark)", l = "u" < typeof window, s = r.createContext(void 0), c = (e2) => r.useContext(s) ? r.createElement(r.Fragment, null, e2.children) : r.createElement(u, { ...e2 }), d = ["light", "dark"], u = ({ forcedTheme: e2, disableTransitionOnChange: t2 = false, enableSystem: n2 = true, enableColorScheme: a2 = true, storageKey: l2 = "theme", themes: c2 = d, defaultTheme: u2 = n2 ? "system" : "light", attribute: g2 = "data-theme", value: v2, children: w2, nonce: b, scriptProps: y }) => {
    let [x, _] = r.useState(() => h(l2, u2)), [k, N] = r.useState(() => "system" === x ? f() : x), S = v2 ? Object.values(v2) : c2, E = r.useCallback((e3) => {
      let r2 = e3;
      if (!r2) return;
      "system" === e3 && n2 && (r2 = f());
      let o2 = v2 ? v2[r2] : r2, l3 = t2 ? m(b) : null, s2 = document.documentElement, c3 = (e4) => {
        "class" === e4 ? (s2.classList.remove(...S), o2 && s2.classList.add(o2)) : e4.startsWith("data-") && (o2 ? s2.setAttribute(e4, o2) : s2.removeAttribute(e4));
      };
      if (Array.isArray(g2) ? g2.forEach(c3) : c3(g2), a2) {
        let e4 = i.includes(u2) ? u2 : null, t3 = i.includes(r2) ? r2 : e4;
        s2.style.colorScheme = t3;
      }
      null == l3 || l3();
    }, [b]), M = r.useCallback((e3) => {
      let t3 = "function" == typeof e3 ? e3(x) : e3;
      _(t3);
      try {
        localStorage.setItem(l2, t3);
      } catch (e4) {
      }
    }, [x]), C = r.useCallback((t3) => {
      N(f(t3)), "system" === x && n2 && !e2 && E("system");
    }, [x, e2]);
    r.useEffect(() => {
      let e3 = window.matchMedia(o);
      return e3.addListener(C), C(e3), () => e3.removeListener(C);
    }, [C]), r.useEffect(() => {
      let e3 = (e4) => {
        e4.key === l2 && (e4.newValue ? _(e4.newValue) : M(u2));
      };
      return window.addEventListener("storage", e3), () => window.removeEventListener("storage", e3);
    }, [M]), r.useEffect(() => {
      E(null != e2 ? e2 : x);
    }, [e2, x]);
    let T = r.useMemo(() => ({ theme: x, setTheme: M, forcedTheme: e2, resolvedTheme: "system" === x ? k : x, themes: n2 ? [...c2, "system"] : c2, systemTheme: n2 ? k : void 0 }), [x, M, e2, k, n2, c2]);
    return r.createElement(s.Provider, { value: T }, r.createElement(p, { forcedTheme: e2, storageKey: l2, attribute: g2, enableSystem: n2, enableColorScheme: a2, defaultTheme: u2, value: v2, themes: c2, nonce: b, scriptProps: y }), w2);
  }, p = r.memo(({ forcedTheme: e2, storageKey: t2, attribute: n2, enableSystem: i2, enableColorScheme: o2, defaultTheme: l2, value: s2, themes: c2, nonce: d2, scriptProps: u2 }) => {
    let p2 = JSON.stringify([n2, t2, l2, e2, c2, s2, i2, o2]).slice(1, -1);
    return r.createElement("script", { ...u2, suppressHydrationWarning: true, nonce: "u" < typeof window ? d2 : "", dangerouslySetInnerHTML: { __html: `(${a.toString()})(${p2})` } });
  }), h = (e2, t2) => {
    let r2;
    if (!l) {
      try {
        r2 = localStorage.getItem(e2) || void 0;
      } catch (e3) {
      }
      return r2 || t2;
    }
  }, m = (e2) => {
    let t2 = document.createElement("style");
    return e2 && t2.setAttribute("nonce", e2), t2.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(t2), () => {
      window.getComputedStyle(document.body), setTimeout(() => {
        document.head.removeChild(t2);
      }, 1);
    };
  }, f = (e2) => (e2 || (e2 = window.matchMedia(o)), e2.matches ? "dark" : "light"), g = e.i(618807);
  try {
    var v = window;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let w = ["/dark-shelves", "/engineering", "/platform/developers"];
  e.s(["ThemeProvider", 0, function({ children: e2, ...r2 }) {
    let n2 = (0, g.useAppPathname)(), a2 = w.some((e3) => n2.startsWith(e3));
    return (0, t.jsx)(c, { attribute: "class", enableSystem: false, forcedTheme: a2 ? "dark" : void 0, defaultTheme: "light", disableTransitionOnChange: true, ...r2, children: e2 });
  }], 427423);
}, 799380, (e) => {
  "use strict";
  var t = e.i(926490);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  window.__VISUAL_TEST_INSTANT_MOTION__ && (t.MotionGlobalConfig.instantAnimations = true), e.s(["VisualTestInstantMotion", 0, function() {
    return null;
  }]);
}, 764480, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(773732), n = e.i(838835), a = e.i(791768);
  try {
    var i = window;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["GoogleTagManager", 0, function() {
    return a.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID ? (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.default, { id: "google-consent", dangerouslySetInnerHTML: { __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}

                        gtag('consent', 'default', {
                            'ad_storage': 'granted',
                            'ad_user_data': 'granted',
                            'ad_personalization': 'granted',
                            'analytics_storage': 'granted'
                        });
                    ` } }), (0, t.jsx)(r.GoogleTagManager, { gtmId: a.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID })] }) : null;
  }]);
}, 416913, (e) => {
  "use strict";
  var t = e.i(96533), r = e.i(856757), n = e.i(791768), a = e.i(618807);
  try {
    var i = window;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["Mixpanel", 0, function() {
    let e2 = (0, a.useAppPathname)();
    return (0, r.useEffect)(() => {
      n.env.NEXT_PUBLIC_MIXPANEL_TOKEN && t.default.init(n.env.NEXT_PUBLIC_MIXPANEL_TOKEN, { api_host: "https://api-eu.mixpanel.com" });
    }, []), (0, r.useEffect)(() => {
      n.env.NEXT_PUBLIC_MIXPANEL_TOKEN && t.default.track_pageview();
    }, [e2]), null;
  }]);
}, 638227, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(838835), n = e.i(791768);
  try {
    var a = window;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let i = n.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;
  e.s(["CaptchaScript", 0, function() {
    return i ? (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(r.default, { src: `https://www.google.com/recaptcha/api.js?render=${i}`, strategy: "lazyOnload" }), (0, t.jsx)("style", { children: ".grecaptcha-badge { visibility: hidden !important; }" })] }) : null;
  }]);
}, 178558, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757), n = e.i(965079), a = e.i(791768), i = e.i(992766), o = e.i(618807);
  try {
    var l = window;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function s() {
    let { show: e2 } = (0, n.useIntercom)(), t2 = (0, i.useSearchParams)(), a2 = (0, o.useAppPathname)(), l2 = (0, i.useRouter)();
    return (0, r.useEffect)(() => {
      if ("messenger" === t2.get("m")) {
        e2();
        let r2 = new URLSearchParams(t2.toString());
        r2.delete("m");
        let n2 = r2.toString();
        l2.replace(n2 ? `${a2}?${n2}` : a2);
      }
    }, [t2, l2, a2, e2]), null;
  }
  try {
    var c = window;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["IntercomProvider", 0, function({ children: e2 }) {
    return (0, t.jsxs)(n.IntercomProvider, { appId: a.env.NEXT_PUBLIC_INTERCOM_APP_ID, autoBoot: true, shouldInitialize: a.env.NEXT_PUBLIC_IS_PRODUCTION, initializeDelay: 2e3, children: [e2, (0, t.jsx)(r.Suspense, { children: (0, t.jsx)(s, {}) })] });
  }], 178558);
}, 949750, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let n = [{ annotations: { readOnlyHint: true }, description: "View Attio's pricing plans and compare features across tiers including Free, Plus, Pro, and Enterprise.", execute: async () => (window.location.href = "/pricing", { content: [{ text: "Navigating to the pricing page", type: "text" }] }), name: "view_pricing" }];
  e.s(["WebMcpTools", 0, function() {
    return (0, t.useEffect)(() => {
      if (!("modelContext" in navigator)) return;
      let e2 = navigator.modelContext;
      for (let t2 of n) try {
        e2.registerTool(t2);
      } catch {
      }
    }, []), null;
  }]);
}]);
