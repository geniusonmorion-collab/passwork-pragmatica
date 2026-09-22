;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "cd6d2463-5c99-fe74-f7b5-a0eb99e6452d");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 799458, 40245, 527400, 93949, 963695, 609202, 909165, 146569, 86065, 149863, 166154, 969215, 645683, 735163, 601917, 117288, 854863, 766992, 851758, 449499, 883937, 130062, 206875, 243280, 479285, 834140, 379615, 629217, 696365, 592584, 398878, 995218, 264072, 523378, 651850, 393968, 784076, 614380, 729823, 190060, 501217, 863491, 205375, 740347, (t) => {
  "use strict";
  let e, n, r, a, s, i, o, u, d;
  try {
    var c = "u" > typeof window ? window : t.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let l = "10.70.0";
  t.s(["SDK_VERSION", 0, l], 40245);
  try {
    var p = "u" > typeof window ? window : t.g;
    p._sentryModuleMetadata = p._sentryModuleMetadata || {}, p._sentryModuleMetadata[new p.Error().stack] = Object.assign({}, p._sentryModuleMetadata[new p.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let _ = globalThis;
  t.s(["GLOBAL_OBJ", 0, _], 527400);
  try {
    var y = "u" > typeof window ? window : t.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function g() {
    return f(_), _;
  }
  function f(t10) {
    let e10 = t10.__SENTRY__ = t10.__SENTRY__ || {};
    return e10.version = e10.version || l, e10[l] = e10[l] || {};
  }
  function h(t10, e10, n3 = _) {
    let r2 = n3.__SENTRY__ = n3.__SENTRY__ || {}, a2 = r2[l] = r2[l] || {};
    return a2[t10] || (a2[t10] = e10());
  }
  t.s(["getGlobalSingleton", 0, h, "getMainCarrier", 0, g, "getSentryCarrier", 0, f], 93949);
  try {
    var m = "u" > typeof window ? window : t.g;
    m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[new m.Error().stack] = Object.assign({}, m._sentryModuleMetadata[new m.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let M = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
  t.s(["DEBUG_BUILD", 0, M], 963695);
  try {
    var S = "u" > typeof window ? window : t.g;
    S._sentryModuleMetadata = S._sentryModuleMetadata || {}, S._sentryModuleMetadata[new S.Error().stack] = Object.assign({}, S._sentryModuleMetadata[new S.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let w = {};
  function E(t10) {
    if (!("console" in _)) return t10();
    let e10 = _.console, n3 = {}, r2 = Object.keys(w);
    r2.forEach((t11) => {
      let r3 = w[t11];
      n3[t11] = e10[t11], e10[t11] = r3;
    });
    try {
      return t10();
    } finally {
      r2.forEach((t11) => {
        e10[t11] = n3[t11];
      });
    }
  }
  function b() {
    return T().enabled;
  }
  function v(t10, ...e10) {
    M && b() && E(() => {
      _.console[t10](`Sentry Logger [${t10}]:`, ...e10);
    });
  }
  function T() {
    return M ? h("loggerSettings", () => ({ enabled: false })) : { enabled: false };
  }
  let k = { enable: function() {
    T().enabled = true;
  }, disable: function() {
    T().enabled = false;
  }, isEnabled: b, log: function(...t10) {
    v("log", ...t10);
  }, warn: function(...t10) {
    v("warn", ...t10);
  }, error: function(...t10) {
    v("error", ...t10);
  } };
  t.s(["CONSOLE_LEVELS", 0, ["debug", "info", "warn", "error", "log", "assert", "trace"], "consoleSandbox", 0, E, "debug", 0, k, "originalConsoleMethods", 0, w], 609202);
  try {
    var I = "u" > typeof window ? window : t.g;
    I._sentryModuleMetadata = I._sentryModuleMetadata || {}, I._sentryModuleMetadata[new I.Error().stack] = Object.assign({}, I._sentryModuleMetadata[new I.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let A = Object.prototype.toString;
  function x(t10) {
    switch (A.call(t10)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
      case "[object WebAssembly.Exception]":
        return true;
      default:
        return K(t10, Error);
    }
  }
  function O(t10, e10) {
    return A.call(t10) === `[object ${e10}]`;
  }
  function P(t10) {
    return O(t10, "String");
  }
  function N(t10) {
    return "object" == typeof t10 && null !== t10 && "__sentry_template_string__" in t10 && "__sentry_template_values__" in t10;
  }
  function C(t10) {
    return null === t10 || N(t10) || "object" != typeof t10 && "function" != typeof t10;
  }
  function R(t10) {
    return O(t10, "Object");
  }
  function j(t10) {
    return "object" == typeof t10 && null !== t10;
  }
  function B(t10) {
    return "u" > typeof Event && K(t10, Event);
  }
  function D(t10) {
    return O(t10, "RegExp");
  }
  function $(t10) {
    return !!(t10?.then && "function" == typeof t10.then);
  }
  function K(t10, e10) {
    try {
      return t10 instanceof e10;
    } catch {
      return false;
    }
  }
  t.s(["isDOMError", 0, function(t10) {
    return O(t10, "DOMError");
  }, "isDOMException", 0, function(t10) {
    return O(t10, "DOMException");
  }, "isError", 0, x, "isErrorEvent", 0, function(t10) {
    return O(t10, "ErrorEvent");
  }, "isEvent", 0, B, "isInstanceOf", 0, K, "isObjectLike", 0, j, "isParameterizedString", 0, N, "isPlainObject", 0, R, "isPrimitive", 0, C, "isRegExp", 0, D, "isRequest", 0, function(t10) {
    return "u" > typeof Request && K(t10, Request);
  }, "isString", 0, P, "isThenable", 0, $], 909165);
  try {
    var U = "u" > typeof window ? window : t.g;
    U._sentryModuleMetadata = U._sentryModuleMetadata || {}, U._sentryModuleMetadata[new U.Error().stack] = Object.assign({}, U._sentryModuleMetadata[new U.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function L(t10, e10, n3) {
    try {
      Object.defineProperty(t10, e10, { value: n3, writable: true, configurable: true });
    } catch {
      M && k.log(`Failed to add non-enumerable property "${String(e10)}" to object`, t10);
    }
  }
  function F(t10, e10) {
    try {
      let n3 = e10.prototype || {};
      t10.prototype = e10.prototype = n3, L(t10, "__sentry_original__", e10);
    } catch {
    }
  }
  function z(t10) {
    if (x(t10)) return { message: t10.message, name: t10.name, stack: t10.stack, ...Y(t10) };
    if (B(t10)) {
      let { type: e10, target: n3, currentTarget: r2, detail: a2 } = t10;
      return { type: e10, target: n3, currentTarget: r2, ...a2 ? { detail: a2 } : {}, ...Y(t10) };
    }
    return t10;
  }
  function Y(t10) {
    return j(t10) ? Object.fromEntries(Object.entries(t10)) : {};
  }
  t.s(["addNonEnumerableProperty", 0, L, "convertToPlainObject", 0, z, "extractExceptionKeysForMessage", 0, function(t10) {
    let e10 = Object.keys(z(t10));
    return e10.sort(), e10[0] ? e10.join(", ") : "[object has no keys]";
  }, "fill", 0, function(t10, e10, n3) {
    if (!(e10 in t10)) return;
    let r2 = t10[e10];
    if ("function" != typeof r2) return;
    let a2 = n3(r2);
    "function" == typeof a2 && F(a2, r2);
    try {
      t10[e10] = a2;
    } catch {
      M && k.log(`Failed to replace method "${e10}" in object`, t10);
    }
  }, "getOriginalFunction", 0, function(t10) {
    return t10.__sentry_original__;
  }, "markFunctionWrapped", 0, F], 146569);
  try {
    var J = "u" > typeof window ? window : t.g;
    J._sentryModuleMetadata = J._sentryModuleMetadata || {}, J._sentryModuleMetadata[new J.Error().stack] = Object.assign({}, J._sentryModuleMetadata[new J.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function G(t10) {
    if (void 0 !== e) return e ? e(t10) : t10();
    let n3 = /* @__PURE__ */ Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
    return n3 in _ && "function" == typeof _[n3] ? (e = _[n3])(t10) : (e = null, t10());
  }
  function H() {
    return G(() => Math.random());
  }
  function W() {
    return G(() => Date.now());
  }
  t.s(["safeDateNow", 0, W, "safeMathRandom", 0, H, "withRandomSafeContext", 0, G], 86065);
  try {
    var V = "u" > typeof window ? window : t.g;
    V._sentryModuleMetadata = V._sentryModuleMetadata || {}, V._sentryModuleMetadata[new V.Error().stack] = Object.assign({}, V._sentryModuleMetadata[new V.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let q = /* @__PURE__ */ Symbol.for("sentry.skipNormalization"), X = /* @__PURE__ */ Symbol.for("sentry.overrideNormalizationDepth");
  try {
    var Q = "u" > typeof window ? window : t.g;
    Q._sentryModuleMetadata = Q._sentryModuleMetadata || {}, Q._sentryModuleMetadata[new Q.Error().stack] = Object.assign({}, Q._sentryModuleMetadata[new Q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let Z = /\(error: (.*)\)/, tt = /captureMessage|captureException/;
  function te(...t10) {
    let e10 = t10.sort((t11, e11) => t11[0] - e11[0]).map((t11) => t11[1]);
    return (t11, n3 = 0, r2 = 0) => {
      let a2 = [], s2 = t11.split("\n");
      for (let t12 = n3; t12 < s2.length; t12++) {
        let n4 = s2[t12];
        n4.length > 1024 && (n4 = n4.slice(0, 1024));
        let i3 = Z.test(n4) ? n4.replace(Z, "$1") : n4;
        if (!i3.includes("Error: ")) {
          for (let t13 of e10) {
            let e11 = t13(i3);
            if (e11) {
              a2.push(e11);
              break;
            }
          }
          if (a2.length >= 50 + r2) break;
        }
      }
      var i2 = a2.slice(r2);
      if (!i2.length) return [];
      let o2 = Array.from(i2);
      return /sentryWrapped/.test(tn(o2).function || "") && o2.pop(), o2.reverse(), tt.test(tn(o2).function || "") && (o2.pop(), tt.test(tn(o2).function || "") && o2.pop()), o2.slice(0, 50).map((t12) => ({ ...t12, filename: t12.filename || tn(o2).filename, function: t12.function || "?" }));
    };
  }
  function tn(t10) {
    return t10[t10.length - 1] || {};
  }
  let tr = "<anonymous>";
  function ta(t10) {
    try {
      if (!t10 || "function" != typeof t10) return tr;
      return t10.name || tr;
    } catch {
      return tr;
    }
  }
  t.s(["UNKNOWN_FUNCTION", 0, "?", "createStackParser", 0, te, "getFramesFromEvent", 0, function(t10) {
    let e10 = t10.exception;
    if (e10) {
      let t11 = [];
      try {
        return e10.values.forEach((e11) => {
          e11.stacktrace.frames && t11.push(...e11.stacktrace.frames);
        }), t11;
      } catch {
      }
    }
  }, "getFunctionName", 0, ta, "normalizeStackTracePath", 0, function(t10) {
    let e10 = t10?.startsWith("file://") ? t10.slice(7) : t10;
    return e10?.match(/\/[A-Z]:/) && (e10 = e10.slice(1)), e10;
  }, "stackParserFromStackParserOptions", 0, function(t10) {
    return Array.isArray(t10) ? te(...t10) : t10;
  }], 149863);
  try {
    var ts = "u" > typeof window ? window : t.g;
    ts._sentryModuleMetadata = ts._sentryModuleMetadata || {}, ts._sentryModuleMetadata[new ts.Error().stack] = Object.assign({}, ts._sentryModuleMetadata[new ts.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function ti(t10, e10 = 100, n3 = 1 / 0) {
    try {
      return (function t11(e11, n4, r2 = 1 / 0, a2 = 1 / 0, s2 = /* @__PURE__ */ (function() {
        let t12 = /* @__PURE__ */ new WeakSet();
        return [function(e12) {
          return !!t12.has(e12) || (t12.add(e12), false);
        }, function(e12) {
          t12.delete(e12);
        }];
      })()) {
        let i2, [o2, u2] = s2;
        if (null == n4 || ["boolean", "string"].includes(typeof n4) || "number" == typeof n4 && Number.isFinite(n4)) return n4;
        let d2 = to(e11, n4);
        if (!d2.startsWith("[object ")) return d2;
        if (n4[q]) return n4;
        let c2 = (i2 = n4[X], "number" == typeof i2 ? i2 : void 0), l2 = void 0 !== c2 ? c2 : r2;
        if (0 === l2) return d2.replace("object ", "");
        if (o2(n4)) return "[Circular ~]";
        if (n4 && "function" == typeof n4.toJSON) try {
          let e12 = n4.toJSON();
          return t11("", e12, l2 - 1, a2, s2);
        } catch {
        }
        let p2 = Array.isArray(n4) ? [] : {}, _2 = 0, y2 = z(n4);
        for (let e12 in y2) {
          if (!Object.prototype.hasOwnProperty.call(y2, e12)) continue;
          if (_2 >= a2) {
            p2[e12] = "[MaxProperties ~]";
            break;
          }
          let n5 = y2[e12];
          p2[e12] = t11(e12, n5, l2 - 1, a2, s2), _2++;
        }
        return u2(n4), p2;
      })("", t10, e10, n3);
    } catch (t11) {
      return { ERROR: `**non-serializable** (${t11})` };
    }
  }
  function to(e10, r2) {
    try {
      var a2;
      let e11;
      if (n) {
        let t10 = n(r2);
        if (t10) return t10;
      }
      if (r2 === t.g) return "[Global]";
      if ("number" == typeof r2 && !Number.isFinite(r2)) return `[${r2}]`;
      if ("function" == typeof r2) return `[Function: ${ta(r2)}]`;
      if ("symbol" == typeof r2) return `[${String(r2)}]`;
      if ("bigint" == typeof r2) return `[BigInt: ${String(r2)}]`;
      let s2 = (a2 = r2, e11 = Object.getPrototypeOf(a2), e11?.constructor ? e11.constructor.name : "null prototype");
      return `[object ${s2}]`;
    } catch (t10) {
      return `**non-serializable** (${t10})`;
    }
  }
  t.s(["normalize", 0, ti, "normalizeToSize", 0, function t10(e10, n3 = 3, r2 = 102400) {
    let a2 = ti(e10, n3);
    return ~-encodeURI(JSON.stringify(a2)).split(/%..|./).length > r2 ? t10(e10, n3 - 1, r2) : a2;
  }, "setNormalizeStringifier", 0, function(t10) {
    n = t10;
  }, "stringifyValue", 0, to], 166154);
  try {
    var tu = "u" > typeof window ? window : t.g;
    tu._sentryModuleMetadata = tu._sentryModuleMetadata || {}, tu._sentryModuleMetadata[new tu.Error().stack] = Object.assign({}, tu._sentryModuleMetadata[new tu.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function td(t10, e10 = 0) {
    return "string" != typeof t10 || 0 === e10 || t10.length <= e10 ? t10 : `${t10.slice(0, e10)}...`;
  }
  function tc(t10, e10, n3 = false) {
    return !!P(t10) && (D(e10) ? e10.test(t10) : P(e10) ? n3 ? t10 === e10 : t10.includes(e10) : "function" == typeof e10 && e10(t10));
  }
  t.s(["isMatchingPattern", 0, tc, "safeJoin", 0, function(t10, e10) {
    if (!Array.isArray(t10)) return "";
    let n3 = [];
    for (let e11 = 0; e11 < t10.length; e11++) {
      let r2 = t10[e11];
      C(r2) ? n3.push(String(r2)) : r2 instanceof Error ? n3.push(r2.message ? `${r2.name}: ${r2.message}` : r2.name) : n3.push(to(void 0, r2));
    }
    return n3.join(e10);
  }, "snipLine", 0, function(t10, e10) {
    let n3 = t10, r2 = n3.length;
    if (r2 <= 150) return n3;
    e10 > r2 && (e10 = r2);
    let a2 = Math.max(e10 - 60, 0);
    a2 < 5 && (a2 = 0);
    let s2 = Math.min(a2 + 140, r2);
    return s2 > r2 - 5 && (s2 = r2), s2 === r2 && (a2 = Math.max(s2 - 140, 0)), n3 = n3.slice(a2, s2), a2 > 0 && (n3 = `'{snip} ${n3}`), s2 < r2 && (n3 += " {snip}"), n3;
  }, "stringMatchesSomePattern", 0, function(t10, e10 = [], n3 = false) {
    for (let r2 of e10) if (tc(t10, r2, n3)) return true;
    return false;
  }, "truncate", 0, td], 969215);
  try {
    var tl = "u" > typeof window ? window : t.g;
    tl._sentryModuleMetadata = tl._sentryModuleMetadata || {}, tl._sentryModuleMetadata[new tl.Error().stack] = Object.assign({}, tl._sentryModuleMetadata[new tl.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function tp(t10 = _.crypto || _.msCrypto) {
    try {
      if (t10?.randomUUID) return G(() => t10.randomUUID()).replace(/-/g, "");
    } catch {
    }
    return r || (r = "10000000100040008000100000000000"), r.replace(/[018]/g, (t11) => (t11 ^ (15 & 16 * H()) >> t11 / 4).toString(16));
  }
  function t_(t10) {
    return t10.exception?.values?.[0];
  }
  function ty(t10, e10) {
    let n3 = t_(t10);
    if (!n3) return;
    let r2 = n3.mechanism;
    if (n3.mechanism = { type: "generic", handled: true, ...r2, ...e10 }, e10 && "data" in e10) {
      let t11 = { ...r2?.data, ...e10.data };
      n3.mechanism.data = t11;
    }
  }
  t.s(["addExceptionMechanism", 0, ty, "addExceptionTypeValue", 0, function(t10, e10, n3) {
    let r2 = t10.exception = t10.exception || {}, a2 = r2.values = r2.values || [], s2 = a2[0] = a2[0] || {};
    s2.value || (s2.value = e10 || ""), s2.type || (s2.type = n3 || "Error");
  }, "checkOrSetAlreadyCaught", 0, function(t10) {
    if ((function(t11) {
      try {
        return t11.__sentry_captured__;
      } catch {
      }
    })(t10)) return true;
    try {
      L(t10, "__sentry_captured__", true);
    } catch {
    }
    return false;
  }, "getEventDescription", 0, function(t10) {
    let { message: e10, event_id: n3 } = t10;
    if (e10) return e10;
    let r2 = t_(t10);
    return r2 ? r2.type && r2.value ? `${r2.type}: ${r2.value}` : r2.type || r2.value || n3 || "<unknown>" : n3 || "<unknown>";
  }, "uuid4", 0, tp], 645683);
  try {
    var tg = "u" > typeof window ? window : t.g;
    tg._sentryModuleMetadata = tg._sentryModuleMetadata || {}, tg._sentryModuleMetadata[new tg.Error().stack] = Object.assign({}, tg._sentryModuleMetadata[new tg.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function tf() {
    return W() / 1e3;
  }
  function th() {
    return (a ?? (a = (function() {
      let { performance: t10 } = _;
      if (!t10?.now || !t10.timeOrigin) return tf;
      let e10 = t10.timeOrigin;
      return () => (e10 + G(() => t10.now())) / 1e3;
    })()))();
  }
  let tm = null;
  t.s(["browserPerformanceTimeOrigin", 0, function() {
    return null === tm && (tm = (function() {
      let { performance: t10 } = _;
      if (!t10?.now) return;
      let e10 = G(() => t10.now()), n3 = W(), r2 = t10.timeOrigin;
      if ("number" == typeof r2 && 3e5 > Math.abs(r2 + e10 - n3)) return r2;
      let a2 = t10.timing?.navigationStart;
      return "number" == typeof a2 && 3e5 > Math.abs(a2 + e10 - n3) ? a2 : n3 - e10;
    })()), tm;
  }, "dateTimestampInSeconds", 0, tf, "timestampInSeconds", 0, th], 735163);
  try {
    var tM = "u" > typeof window ? window : t.g;
    tM._sentryModuleMetadata = tM._sentryModuleMetadata || {}, tM._sentryModuleMetadata[new tM.Error().stack] = Object.assign({}, tM._sentryModuleMetadata[new tM.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function tS(t10) {
    let e10 = th(), n3 = { sid: tp(), init: true, timestamp: e10, started: e10, duration: 0, status: "ok", errors: 0, ignoreDuration: false, toJSON: () => {
      var t11;
      return t11 = n3, { sid: `${t11.sid}`, init: t11.init, started: new Date(1e3 * t11.started).toISOString(), timestamp: new Date(1e3 * t11.timestamp).toISOString(), status: t11.status, errors: t11.errors, did: "number" == typeof t11.did || "string" == typeof t11.did ? `${t11.did}` : void 0, duration: t11.duration, abnormal_mechanism: t11.abnormal_mechanism, attrs: { release: t11.release, environment: t11.environment, ip_address: t11.ipAddress, user_agent: t11.userAgent } };
    } };
    return t10 && tw(n3, t10), n3;
  }
  function tw(t10, e10 = {}) {
    if (e10.user && (!t10.ipAddress && e10.user.ip_address && (t10.ipAddress = e10.user.ip_address), t10.did || e10.did || (t10.did = e10.user.id || e10.user.email || e10.user.username)), t10.timestamp = e10.timestamp || th(), e10.abnormal_mechanism && (t10.abnormal_mechanism = e10.abnormal_mechanism), e10.ignoreDuration && (t10.ignoreDuration = e10.ignoreDuration), e10.sid && (t10.sid = 32 === e10.sid.length ? e10.sid : tp()), void 0 !== e10.init && (t10.init = e10.init), !t10.did && e10.did && (t10.did = `${e10.did}`), "number" == typeof e10.started && (t10.started = e10.started), t10.ignoreDuration) t10.duration = void 0;
    else if ("number" == typeof e10.duration) t10.duration = e10.duration;
    else {
      let e11 = t10.timestamp - t10.started;
      t10.duration = e11 >= 0 ? e11 : 0;
    }
    e10.release && (t10.release = e10.release), e10.environment && (t10.environment = e10.environment), !t10.ipAddress && e10.ipAddress && (t10.ipAddress = e10.ipAddress), !t10.userAgent && e10.userAgent && (t10.userAgent = e10.userAgent), "number" == typeof e10.errors && (t10.errors = e10.errors), e10.status && (t10.status = e10.status);
  }
  function tE(t10, e10) {
    let n3 = {};
    e10 ? n3 = { status: e10 } : "ok" === t10.status && (n3 = { status: "exited" }), tw(t10, n3);
  }
  t.s(["closeSession", 0, tE, "makeSession", 0, tS, "updateSession", 0, tw], 601917);
  try {
    var tb = "u" > typeof window ? window : t.g;
    tb._sentryModuleMetadata = tb._sentryModuleMetadata || {}, tb._sentryModuleMetadata[new tb.Error().stack] = Object.assign({}, tb._sentryModuleMetadata[new tb.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function tv(t10, e10, n3 = 2) {
    if (!e10 || "object" != typeof e10 || n3 <= 0) return e10;
    if (t10 && 0 === Object.keys(e10).length) return t10;
    let r2 = { ...t10 };
    for (let t11 in e10) Object.prototype.hasOwnProperty.call(e10, t11) && (r2[t11] = tv(r2[t11], e10[t11], n3 - 1));
    return r2;
  }
  t.s(["merge", 0, tv], 117288);
  try {
    var tT = "u" > typeof window ? window : t.g;
    tT._sentryModuleMetadata = tT._sentryModuleMetadata || {}, tT._sentryModuleMetadata[new tT.Error().stack] = Object.assign({}, tT._sentryModuleMetadata[new tT.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function tk() {
    return tp();
  }
  function tI() {
    return tp().substring(16);
  }
  t.s(["generateSpanId", 0, tI, "generateTraceId", 0, tk], 854863);
  try {
    var tA = "u" > typeof window ? window : t.g;
    tA._sentryModuleMetadata = tA._sentryModuleMetadata || {}, tA._sentryModuleMetadata[new tA.Error().stack] = Object.assign({}, tA._sentryModuleMetadata[new tA.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function tx(t10) {
    try {
      let e10 = _.WeakRef;
      if ("function" == typeof e10) return new e10(t10);
    } catch {
    }
    return t10;
  }
  function tO(t10) {
    if (t10) {
      if ("object" == typeof t10 && "deref" in t10 && "function" == typeof t10.deref) try {
        return t10.deref();
      } catch {
        return;
      }
      return t10;
    }
  }
  try {
    var tP = "u" > typeof window ? window : t.g;
    tP._sentryModuleMetadata = tP._sentryModuleMetadata || {}, tP._sentryModuleMetadata[new tP.Error().stack] = Object.assign({}, tP._sentryModuleMetadata[new tP.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let tN = "_sentrySpan";
  function tC(t10, e10) {
    e10 ? L(t10, tN, tx(e10)) : delete t10[tN];
  }
  function tR(t10) {
    return tO(t10[tN]);
  }
  t.s(["_getSpanForScope", 0, tR, "_setSpanForScope", 0, tC], 766992);
  try {
    var tj = "u" > typeof window ? window : t.g;
    tj._sentryModuleMetadata = tj._sentryModuleMetadata || {}, tj._sentryModuleMetadata[new tj.Error().stack] = Object.assign({}, tj._sentryModuleMetadata[new tj.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  class tB {
    constructor() {
      this._notifyingListeners = false, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = { traceId: tk(), sampleRand: H() };
    }
    clone() {
      let t10 = new tB();
      return t10._breadcrumbs = [...this._breadcrumbs], t10._tags = { ...this._tags }, t10._attributes = { ...this._attributes }, t10._extra = { ...this._extra }, t10._contexts = { ...this._contexts }, this._contexts.flags && (t10._contexts.flags = { values: [...this._contexts.flags.values] }), t10._user = this._user, t10._level = this._level, t10._session = this._session, t10._transactionName = this._transactionName, t10._fingerprint = this._fingerprint, t10._eventProcessors = [...this._eventProcessors], t10._attachments = [...this._attachments], t10._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }, t10._propagationContext = { ...this._propagationContext }, t10._client = this._client, t10._lastEventId = this._lastEventId, t10._conversationId = this._conversationId, tC(t10, tR(this)), t10;
    }
    setClient(t10) {
      this._client = t10;
    }
    setLastEventId(t10) {
      this._lastEventId = t10;
    }
    getClient() {
      return this._client;
    }
    lastEventId() {
      return this._lastEventId;
    }
    addScopeListener(t10) {
      this._scopeListeners.push(t10);
    }
    addEventProcessor(t10) {
      return this._eventProcessors.push(t10), this;
    }
    setUser(t10) {
      return this._user = t10 || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }, this._session && tw(this._session, { user: t10 }), this._notifyScopeListeners(), this;
    }
    getUser() {
      return this._user;
    }
    setConversationId(t10) {
      return this._conversationId = t10 || void 0, this._notifyScopeListeners(), this;
    }
    setTags(t10) {
      return this._tags = { ...this._tags, ...t10 }, this._notifyScopeListeners(), this;
    }
    setTag(t10, e10) {
      return this.setTags({ [t10]: e10 });
    }
    setAttributes(t10) {
      return this._attributes = { ...this._attributes, ...t10 }, this._notifyScopeListeners(), this;
    }
    setAttribute(t10, e10) {
      return this.setAttributes({ [t10]: e10 });
    }
    removeAttribute(t10) {
      return t10 in this._attributes && (delete this._attributes[t10], this._notifyScopeListeners()), this;
    }
    setExtras(t10) {
      return this._extra = { ...this._extra, ...t10 }, this._notifyScopeListeners(), this;
    }
    setExtra(t10, e10) {
      return this._extra = { ...this._extra, [t10]: e10 }, this._notifyScopeListeners(), this;
    }
    setFingerprint(t10) {
      return this._fingerprint = t10, this._notifyScopeListeners(), this;
    }
    setLevel(t10) {
      return this._level = t10, this._notifyScopeListeners(), this;
    }
    setTransactionName(t10) {
      return this._transactionName = t10, this._notifyScopeListeners(), this;
    }
    setContext(t10, e10) {
      return null === e10 ? delete this._contexts[t10] : this._contexts[t10] = e10, this._notifyScopeListeners(), this;
    }
    setSession(t10) {
      return t10 ? this._session = t10 : delete this._session, this._notifyScopeListeners(), this;
    }
    getSession() {
      return this._session;
    }
    update(t10) {
      if (!t10) return this;
      let e10 = "function" == typeof t10 ? t10(this) : t10, { tags: n3, attributes: r2, extra: a2, user: s2, contexts: i2, level: o2, fingerprint: u2 = [], propagationContext: d2, conversationId: c2 } = (e10 instanceof tB ? e10.getScopeData() : R(e10) ? t10 : void 0) || {};
      return this._tags = { ...this._tags, ...n3 }, this._attributes = { ...this._attributes, ...r2 }, this._extra = { ...this._extra, ...a2 }, this._contexts = { ...this._contexts, ...i2 }, s2 && Object.keys(s2).length && (this._user = s2), o2 && (this._level = o2), u2.length && (this._fingerprint = u2), d2 && (this._propagationContext = d2), c2 && (this._conversationId = c2), this;
    }
    clear() {
      return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, tC(this, void 0), this._attachments = [], this.setPropagationContext({ traceId: tk(), sampleRand: H() }), this._notifyScopeListeners(), this;
    }
    addBreadcrumb(t10, e10) {
      let n3 = "number" == typeof e10 ? e10 : 100;
      if (n3 <= 0) return this;
      let r2 = { timestamp: tf(), ...t10, message: t10.message ? td(t10.message, 2048) : t10.message };
      return this._breadcrumbs.push(r2), this._breadcrumbs.length > n3 && (this._breadcrumbs = this._breadcrumbs.slice(-n3), this._client?.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      return this._breadcrumbs = [], this._notifyScopeListeners(), this;
    }
    addAttachment(t10) {
      return this._attachments.push(t10), this;
    }
    clearAttachments() {
      return this._attachments = [], this;
    }
    getScopeData() {
      return { breadcrumbs: this._breadcrumbs, attachments: this._attachments, contexts: this._contexts, tags: this._tags, attributes: this._attributes, extra: this._extra, user: this._user, level: this._level, fingerprint: this._fingerprint || [], eventProcessors: this._eventProcessors, propagationContext: this._propagationContext, sdkProcessingMetadata: this._sdkProcessingMetadata, transactionName: this._transactionName, span: tR(this), conversationId: this._conversationId };
    }
    setSDKProcessingMetadata(t10) {
      return this._sdkProcessingMetadata = tv(this._sdkProcessingMetadata, t10, 2), this;
    }
    setPropagationContext(t10) {
      return this._propagationContext = t10, this;
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    captureException(t10, e10) {
      let n3 = e10?.event_id || tp();
      if (!this._client) return M && k.warn("No client configured on scope - will not capture exception!"), n3;
      let r2 = Error("Sentry syntheticException");
      return this._client.captureException(t10, { originalException: t10, syntheticException: r2, ...e10, event_id: n3 }, this), n3;
    }
    captureMessage(t10, e10, n3) {
      let r2 = n3?.event_id || tp();
      if (!this._client) return M && k.warn("No client configured on scope - will not capture message!"), r2;
      let a2 = n3?.syntheticException ?? Error(t10);
      return this._client.captureMessage(t10, e10, { originalException: t10, syntheticException: a2, ...n3, event_id: r2 }, this), r2;
    }
    captureEvent(t10, e10) {
      let n3 = t10.event_id || e10?.event_id || tp();
      return this._client ? this._client.captureEvent(t10, { ...e10, event_id: n3 }, this) : M && k.warn("No client configured on scope - will not capture event!"), n3;
    }
    _notifyScopeListeners() {
      this._notifyingListeners || (this._notifyingListeners = true, this._scopeListeners.forEach((t10) => {
        t10(this);
      }), this._notifyingListeners = false);
    }
  }
  try {
    var tD = "u" > typeof window ? window : t.g;
    tD._sentryModuleMetadata = tD._sentryModuleMetadata || {}, tD._sentryModuleMetadata[new tD.Error().stack] = Object.assign({}, tD._sentryModuleMetadata[new tD.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  try {
    var t$ = "u" > typeof window ? window : t.g;
    t$._sentryModuleMetadata = t$._sentryModuleMetadata || {}, t$._sentryModuleMetadata[new t$.Error().stack] = Object.assign({}, t$._sentryModuleMetadata[new t$.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let tK = (t10) => t10 instanceof Promise && !t10[tU], tU = /* @__PURE__ */ Symbol("chained PromiseLike");
  try {
    var tL = "u" > typeof window ? window : t.g;
    tL._sentryModuleMetadata = tL._sentryModuleMetadata || {}, tL._sentryModuleMetadata[new tL.Error().stack] = Object.assign({}, tL._sentryModuleMetadata[new tL.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  class tF {
    constructor(t10, e10) {
      let n3, r2;
      n3 = t10 || new tB(), r2 = e10 || new tB(), this._stack = [{ scope: n3 }], this._isolationScope = r2;
    }
    withScope(t10) {
      let e10, n3 = this._pushScope();
      try {
        e10 = t10(n3);
      } catch (t11) {
        throw this._popScope(), t11;
      }
      if ($(e10)) {
        var r2, a2, s2;
        let t11;
        return r2 = e10, a2 = () => this._popScope(), s2 = () => this._popScope(), tK(t11 = r2.then((t12) => (a2(), t12), (t12) => {
          throw s2(), t12;
        })) && tK(r2) ? t11 : ((t12, e11) => {
          if (!e11) return t12;
          let n4 = false;
          for (let r3 in t12) {
            if (r3 in e11) continue;
            n4 = true;
            let a3 = t12[r3];
            "function" == typeof a3 ? Object.defineProperty(e11, r3, { value: (...e12) => a3.apply(t12, e12), enumerable: true, configurable: true, writable: true }) : e11[r3] = a3;
          }
          return n4 && Object.assign(e11, { [tU]: true }), e11;
        })(r2, t11);
      }
      return this._popScope(), e10;
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getIsolationScope() {
      return this._isolationScope;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    _pushScope() {
      let t10 = this.getScope().clone();
      return this._stack.push({ client: this.getClient(), scope: t10 }), t10;
    }
    _popScope() {
      return !(this._stack.length <= 1) && !!this._stack.pop();
    }
  }
  function tz() {
    let t10 = f(g());
    return t10.stack = t10.stack || new tF(h("defaultCurrentScope", () => new tB()), h("defaultIsolationScope", () => new tB()));
  }
  function tY(t10) {
    return tz().withScope(t10);
  }
  function tJ(t10, e10) {
    let n3 = tz();
    return n3.withScope(() => (n3.getStackTop().scope = t10, e10(t10)));
  }
  function tG(t10) {
    return tz().withScope(() => t10(tz().getIsolationScope()));
  }
  try {
    var tH = "u" > typeof window ? window : t.g;
    tH._sentryModuleMetadata = tH._sentryModuleMetadata || {}, tH._sentryModuleMetadata[new tH.Error().stack] = Object.assign({}, tH._sentryModuleMetadata[new tH.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function tW(t10) {
    let e10 = f(t10);
    return e10.acs ? e10.acs : { withIsolationScope: tG, withScope: tY, withSetScope: tJ, withSetIsolationScope: (t11, e11) => tG(e11), getCurrentScope: () => tz().getScope(), getIsolationScope: () => tz().getIsolationScope() };
  }
  t.s(["getAsyncContextStrategy", 0, tW], 851758);
  try {
    var tV = "u" > typeof window ? window : t.g;
    tV._sentryModuleMetadata = tV._sentryModuleMetadata || {}, tV._sentryModuleMetadata[new tV.Error().stack] = Object.assign({}, tV._sentryModuleMetadata[new tV.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function tq() {
    return tW(g()).getCurrentScope();
  }
  function tX() {
    return tW(g()).getIsolationScope();
  }
  function tQ() {
    return h("globalScope", () => new tB());
  }
  function tZ(...t10) {
    let e10 = tW(g());
    if (2 === t10.length) {
      let [n3, r2] = t10;
      return n3 ? e10.withSetScope(n3, r2) : e10.withScope(r2);
    }
    return e10.withScope(t10[0]);
  }
  function t0() {
    return tq().getClient();
  }
  t.s(["getClient", 0, t0, "getCurrentScope", 0, tq, "getGlobalScope", 0, tQ, "getIsolationScope", 0, tX, "getTraceContextFromScope", 0, function(t10) {
    let e10 = s?.();
    if (e10) return { trace_id: e10.traceId, span_id: e10.spanId };
    let { traceId: n3, parentSpanId: r2, propagationSpanId: a2 } = t10.getPropagationContext(), i2 = { trace_id: n3, span_id: a2 || tI() };
    return r2 && (i2.parent_span_id = r2), i2;
  }, "hasExternalPropagationContext", 0, function() {
    return void 0 !== s;
  }, "withIsolationScope", 0, function(...t10) {
    let e10 = tW(g());
    if (2 === t10.length) {
      let [n3, r2] = t10;
      return n3 ? e10.withSetIsolationScope(n3, r2) : e10.withIsolationScope(r2);
    }
    return e10.withIsolationScope(t10[0]);
  }, "withScope", 0, tZ], 449499);
  try {
    var t1 = "u" > typeof window ? window : t.g;
    t1._sentryModuleMetadata = t1._sentryModuleMetadata || {}, t1._sentryModuleMetadata[new t1.Error().stack] = Object.assign({}, t1._sentryModuleMetadata[new t1.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let t2 = "sentry.source", t9 = "sentry.sample_rate", t6 = "sentry.previous_trace_sample_rate", t3 = "sentry.op", t4 = "sentry.origin", t5 = "sentry.status.message", t8 = "sentry.measurement_unit", t7 = "sentry.measurement_value", et = "sentry.custom_span_name", ee = "sentry.profile_id", en = "sentry.exclusive_time";
  t.s(["GEN_AI_CONVERSATION_ID_ATTRIBUTE", 0, "gen_ai.conversation.id", "SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME", 0, en, "SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD", 0, "http.request.method", "SEMANTIC_ATTRIBUTE_PROFILE_ID", 0, ee, "SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME", 0, et, "SEMANTIC_ATTRIBUTE_SENTRY_ENVIRONMENT", 0, "sentry.environment", "SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON", 0, "sentry.idle_span_finish_reason", "SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT", 0, t8, "SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE", 0, t7, "SEMANTIC_ATTRIBUTE_SENTRY_OP", 0, t3, "SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN", 0, t4, "SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE", 0, t6, "SEMANTIC_ATTRIBUTE_SENTRY_RELEASE", 0, "sentry.release", "SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE", 0, t9, "SEMANTIC_ATTRIBUTE_SENTRY_SDK_INTEGRATIONS", 0, "sentry.sdk.integrations", "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE", 0, t2, "SEMANTIC_ATTRIBUTE_SENTRY_STATUS_MESSAGE", 0, t5, "SEMANTIC_ATTRIBUTE_USER_EMAIL", 0, "user.email", "SEMANTIC_ATTRIBUTE_USER_ID", 0, "user.id", "SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS", 0, "user.ip_address", "SEMANTIC_ATTRIBUTE_USER_USERNAME", 0, "user.name", "SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE", 0, "sentry.link.type"], 883937);
  try {
    var er = "u" > typeof window ? window : t.g;
    er._sentryModuleMetadata = er._sentryModuleMetadata || {}, er._sentryModuleMetadata[new er.Error().stack] = Object.assign({}, er._sentryModuleMetadata[new er.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let ea = "sentry-";
  function es(t10) {
    let e10 = ei(t10);
    if (!e10) return;
    let n3 = Object.entries(e10).reduce((t11, [e11, n4]) => (e11.startsWith(ea) && (t11[e11.slice(ea.length)] = n4), t11), {});
    return Object.keys(n3).length > 0 ? n3 : void 0;
  }
  function ei(t10) {
    if (t10 && (P(t10) || Array.isArray(t10))) return Array.isArray(t10) ? t10.reduce((t11, e10) => (Object.entries(eo(e10)).forEach(([e11, n3]) => {
      t11[e11] = n3;
    }), t11), {}) : eo(t10);
  }
  function eo(t10) {
    return t10.split(",").map((t11) => {
      let e10 = t11.indexOf("=");
      return -1 === e10 ? [] : [t11.slice(0, e10), t11.slice(e10 + 1)].map((t12) => {
        try {
          return decodeURIComponent(t12.trim());
        } catch {
          return;
        }
      });
    }).reduce((t11, [e10, n3]) => (e10 && n3 && (t11[e10] = n3), t11), {});
  }
  t.s(["SENTRY_BAGGAGE_KEY_PREFIX", 0, ea, "baggageHeaderToDynamicSamplingContext", 0, es, "dynamicSamplingContextToSentryBaggageHeader", 0, function(t10) {
    if (t10) {
      var e10 = Object.entries(t10).reduce((t11, [e11, n3]) => (n3 && (t11[`${ea}${e11}`] = n3), t11), {});
      return 0 !== Object.keys(e10).length ? Object.entries(e10).reduce((t11, [e11, n3], r2) => {
        let a2 = `${encodeURIComponent(e11)}=${encodeURIComponent(n3)}`, s2 = 0 === r2 ? a2 : `${t11},${a2}`;
        return s2.length > 8192 ? (M && k.warn(`Not adding key: ${e11} with val: ${n3} to baggage header due to exceeding baggage size limits.`), t11) : s2;
      }, "") : void 0;
    }
  }, "parseBaggageHeader", 0, ei], 130062);
  try {
    var eu = "u" > typeof window ? window : t.g;
    eu._sentryModuleMetadata = eu._sentryModuleMetadata || {}, eu._sentryModuleMetadata[new eu.Error().stack] = Object.assign({}, eu._sentryModuleMetadata[new eu.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  try {
    var ed = "u" > typeof window ? window : t.g;
    ed._sentryModuleMetadata = ed._sentryModuleMetadata || {}, ed._sentryModuleMetadata[new ed.Error().stack] = Object.assign({}, ed._sentryModuleMetadata[new ed.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function ec(t10) {
    if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return false;
    let e10 = t10 || t0()?.getOptions();
    return !!e10 && (null != e10.tracesSampleRate || !!e10.tracesSampler);
  }
  t.s(["hasSpansEnabled", 0, ec], 206875);
  try {
    var el = "u" > typeof window ? window : t.g;
    el._sentryModuleMetadata = el._sentryModuleMetadata || {}, el._sentryModuleMetadata[new el.Error().stack] = Object.assign({}, el._sentryModuleMetadata[new el.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function ep(t10) {
    k.log(`Ignoring span ${t10.op} - ${t10.description} because it matches \`ignoreSpans\`.`);
  }
  function e_(t10, e10) {
    if (!e10?.length) return false;
    for (let r2 of e10) {
      var n3;
      if ("string" == typeof (n3 = r2) || n3 instanceof RegExp) {
        if (t10.description && tc(t10.description, r2)) return M && ep(t10), true;
        continue;
      }
      let e11 = !!r2.attributes && Object.keys(r2.attributes).length > 0;
      if (!r2.name && !r2.op && !e11) continue;
      let a2 = !r2.name || t10.description && tc(t10.description, r2.name), s2 = !r2.op || t10.op && tc(t10.op, r2.op), i2 = !r2.attributes || Object.entries(r2.attributes).every(([e12, n4]) => (function(t11, e13) {
        return "string" == typeof t11 && ("string" == typeof e13 || e13 instanceof RegExp) ? tc(t11, e13) : Array.isArray(t11) && Array.isArray(e13) ? t11.length === e13.length && t11.every((t12, n5) => t12 === e13[n5]) : t11 === e13;
      })(t10.attributes?.[e12], n4));
      if (a2 && s2 && i2) return M && ep(t10), true;
    }
    return false;
  }
  t.s(["reparentChildSpans", 0, function(t10, e10) {
    let n3 = e10.parent_span_id, r2 = e10.span_id;
    if (n3) for (let e11 of t10) e11.parent_span_id === r2 && (e11.parent_span_id = n3);
  }, "shouldIgnoreSpan", 0, e_], 243280);
  try {
    var ey = "u" > typeof window ? window : t.g;
    ey._sentryModuleMetadata = ey._sentryModuleMetadata || {}, ey._sentryModuleMetadata[new ey.Error().stack] = Object.assign({}, ey._sentryModuleMetadata[new ey.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function eg(t10) {
    return "stream" === t10.getOptions().traceLifecycle;
  }
  t.s(["hasSpanStreamingEnabled", 0, eg], 479285);
  try {
    var ef = "u" > typeof window ? window : t.g;
    ef._sentryModuleMetadata = ef._sentryModuleMetadata || {}, ef._sentryModuleMetadata[new ef.Error().stack] = Object.assign({}, ef._sentryModuleMetadata[new ef.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function eh(t10) {
    if ("boolean" == typeof t10) return Number(t10);
    let e10 = "string" == typeof t10 ? parseFloat(t10) : t10;
    if (!("number" != typeof e10 || isNaN(e10)) && !(e10 < 0) && !(e10 > 1)) return e10;
  }
  t.s(["parseSampleRate", 0, eh], 834140);
  try {
    var em = "u" > typeof window ? window : t.g;
    em._sentryModuleMetadata = em._sentryModuleMetadata || {}, em._sentryModuleMetadata[new em.Error().stack] = Object.assign({}, em._sentryModuleMetadata[new em.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function eM(t10, e10 = false) {
    let n3 = {};
    for (let [r2, a2] of Object.entries(t10 ?? {})) {
      let t11 = (function(t12, e11) {
        let { value: n4, unit: r3 } = "object" == typeof t12 && null != t12 && !Array.isArray(t12) && Object.keys(t12).includes("value") ? t12 : { value: t12, unit: void 0 }, a3 = (function(t13) {
          if (Array.isArray(t13)) return { value: t13, type: "array" };
          let e12 = "string" == typeof t13 ? "string" : "boolean" == typeof t13 ? "boolean" : "number" != typeof t13 || Number.isNaN(t13) ? null : Number.isInteger(t13) ? "integer" : "double";
          if (e12) return { value: t13, type: e12 };
        })(n4), s2 = r3 && "string" == typeof r3 ? { unit: r3 } : {};
        if (a3) return { ...a3, ...s2 };
        if (!e11 || "skip-undefined" === e11 && void 0 === n4) return;
        let i2 = "";
        try {
          i2 = JSON.stringify(n4) ?? "";
        } catch {
        }
        return { value: i2, type: "string", ...s2 };
      })(a2, e10);
      t11 && (n3[r2] = t11);
    }
    return n3;
  }
  t.s(["serializeAttributes", 0, eM], 379615);
  try {
    var eS = "u" > typeof window ? window : t.g;
    eS._sentryModuleMetadata = eS._sentryModuleMetadata || {}, eS._sentryModuleMetadata[new eS.Error().stack] = Object.assign({}, eS._sentryModuleMetadata[new eS.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  t.s(["SPAN_STATUS_ERROR", 0, 2, "SPAN_STATUS_OK", 0, 1, "SPAN_STATUS_UNSET", 0, 0, "setHttpStatus", 0, function(t10, e10) {
    t10.setAttribute("http.response.status_code", e10);
    let n3 = (function(t11) {
      if (t11 < 400 && t11 >= 100) return { code: 1 };
      if (t11 >= 400 && t11 < 500) switch (t11) {
        case 401:
          return { code: 2, message: "unauthenticated" };
        case 403:
          return { code: 2, message: "permission_denied" };
        case 404:
          return { code: 2, message: "not_found" };
        case 409:
          return { code: 2, message: "already_exists" };
        case 413:
          return { code: 2, message: "failed_precondition" };
        case 429:
          return { code: 2, message: "resource_exhausted" };
        case 499:
          return { code: 2, message: "cancelled" };
        default:
          return { code: 2, message: "invalid_argument" };
      }
      if (t11 >= 500 && t11 < 600) switch (t11) {
        case 501:
          return { code: 2, message: "unimplemented" };
        case 503:
          return { code: 2, message: "unavailable" };
        case 504:
          return { code: 2, message: "deadline_exceeded" };
      }
      return { code: 2, message: "internal_error" };
    })(e10);
    "unknown_error" !== n3.message && t10.setStatus(n3);
  }], 629217);
  try {
    var ew = "u" > typeof window ? window : t.g;
    ew._sentryModuleMetadata = ew._sentryModuleMetadata || {}, ew._sentryModuleMetadata[new ew.Error().stack] = Object.assign({}, ew._sentryModuleMetadata[new ew.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let eE = "_sentryScope", eb = "_sentryIsolationScope", ev = /* @__PURE__ */ Symbol.for("sentry.otelSourceInference"), eT = /* @__PURE__ */ Symbol.for("sentry.otelSourceExplicitlySet"), ek = /* @__PURE__ */ Symbol.for("sentry.tracerProviderSpan");
  function eI(t10, e10, n3) {
    t10 && (L(t10, eb, tx(n3)), L(t10, eE, e10));
  }
  function eA(t10) {
    return { scope: t10[eE], isolationScope: tO(t10[eb]) };
  }
  function ex(t10) {
    return true === t10[ev];
  }
  function eO(t10) {
    L(t10, eT, true);
  }
  function eP(t10) {
    return true === t10[ek];
  }
  t.s(["getCapturedScopesOnSpan", 0, eA, "markSpanSourceAsExplicit", 0, eO, "setCapturedScopesOnSpan", 0, eI, "spanIsTracerProviderSpan", 0, eP, "spanShouldInferOtelSource", 0, ex], 696365);
  try {
    var eN = "u" > typeof window ? window : t.g;
    eN._sentryModuleMetadata = eN._sentryModuleMetadata || {}, eN._sentryModuleMetadata[new eN.Error().stack] = Object.assign({}, eN._sentryModuleMetadata[new eN.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let eC = /^o(\d+)\./, eR = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;
  function ej(t10, e10 = false) {
    let { host: n3, path: r2, pass: a2, port: s2, projectId: i2, protocol: o2, publicKey: u2 } = t10;
    return `${o2}://${u2}${e10 && a2 ? `:${a2}` : ""}@${n3}${s2 ? `:${s2}` : ""}/${r2 ? `${r2}/` : r2}${i2}`;
  }
  function eB(t10) {
    let e10 = eR.exec(t10);
    if (!e10) return void E(() => {
      console.error(`Invalid Sentry Dsn: ${t10}`);
    });
    let [n3, r2, a2 = "", s2 = "", i2 = "", o2 = ""] = e10.slice(1), u2 = "", d2 = o2, c2 = d2.split("/");
    if (c2.length > 1 && (u2 = c2.slice(0, -1).join("/"), d2 = c2.pop()), d2) {
      let t11 = d2.match(/^\d+/);
      t11 && (d2 = t11[0]);
    }
    return eD({ host: s2, pass: a2, path: u2, projectId: d2, port: i2, protocol: n3, publicKey: r2 });
  }
  function eD(t10) {
    return { protocol: t10.protocol, publicKey: t10.publicKey || "", pass: t10.pass || "", host: t10.host, port: t10.port || "", path: t10.path || "", projectId: t10.projectId };
  }
  function e$(t10) {
    let e10, n3 = t10.getOptions(), { host: r2 } = t10.getDsn() || {};
    if (n3.orgId) e10 = String(n3.orgId);
    else {
      let t11;
      r2 && (t11 = r2.match(eC), e10 = t11?.[1]);
    }
    return e10;
  }
  t.s(["dsnFromString", 0, eB, "dsnToString", 0, ej, "extractOrgIdFromClient", 0, e$, "makeDsn", 0, function(t10) {
    let e10 = "string" == typeof t10 ? eB(t10) : eD(t10);
    if (e10 && (function(t11) {
      if (!M) return true;
      let { port: e11, projectId: n3, protocol: r2 } = t11;
      return !["protocol", "publicKey", "host", "projectId"].find((e12) => !t11[e12] && (k.error(`Invalid Sentry Dsn: ${e12} missing`), true)) && (n3.match(/^\d+$/) ? "http" !== r2 && "https" !== r2 ? (k.error(`Invalid Sentry Dsn: Invalid protocol ${r2}`), false) : !(e11 && isNaN(parseInt(e11, 10))) || (k.error(`Invalid Sentry Dsn: Invalid port ${e11}`), false) : (k.error(`Invalid Sentry Dsn: Invalid projectId ${n3}`), false));
    })(e10)) return e10;
  }], 592584);
  try {
    var eK = "u" > typeof window ? window : t.g;
    eK._sentryModuleMetadata = eK._sentryModuleMetadata || {}, eK._sentryModuleMetadata[new eK.Error().stack] = Object.assign({}, eK._sentryModuleMetadata[new eK.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let eU = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
  function eL(t10 = tk(), e10 = tI(), n3) {
    let r2 = "";
    return void 0 !== n3 && (r2 = n3 ? "-1" : "-0"), `${t10}-${e10}${r2}`;
  }
  function eF(t10 = tk(), e10 = tI(), n3) {
    return `00-${t10}-${e10}-${n3 ? "01" : "00"}`;
  }
  t.s(["TRACEPARENT_REGEXP", 0, eU, "generateSentryTraceHeader", 0, eL, "generateTraceparentHeader", 0, eF, "propagationContextFromHeaders", 0, function(t10, e10) {
    let n3 = (function(t11) {
      let e11;
      if (!t11) return;
      let n4 = t11.match(eU);
      if (n4) return "1" === n4[3] ? e11 = true : "0" === n4[3] && (e11 = false), { traceId: n4[1], parentSampled: e11, parentSpanId: n4[2] };
    })(t10), r2 = es(e10);
    if (!n3?.traceId) return { traceId: tk(), sampleRand: H() };
    let a2 = (function(t11, e11) {
      let n4 = eh(e11?.sample_rand);
      if (void 0 !== n4) return n4;
      let r3 = eh(e11?.sample_rate);
      return r3 && t11?.parentSampled !== void 0 ? t11.parentSampled ? H() * r3 : r3 + H() * (1 - r3) : H();
    })(n3, r2);
    r2 && (r2.sample_rand = a2.toString());
    let { traceId: s2, parentSpanId: i2, parentSampled: o2 } = n3;
    return { traceId: s2, parentSpanId: i2, sampled: o2, dsc: r2 || {}, sampleRand: a2 };
  }, "shouldContinueTrace", 0, function(t10, e10) {
    let n3 = e$(t10);
    return e10 && n3 && e10 !== n3 ? (k.log(`Won't continue trace because org IDs don't match (incoming baggage: ${e10}, SDK options: ${n3})`), false) : !t10.getOptions().strictTraceContinuation || (!e10 || !!n3) && (!!e10 || !n3) || (k.log(`Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${e10}, Sentry client: ${n3})`), false);
  }], 398878);
  try {
    var ez = "u" > typeof window ? window : t.g;
    ez._sentryModuleMetadata = ez._sentryModuleMetadata || {}, ez._sentryModuleMetadata[new ez.Error().stack] = Object.assign({}, ez._sentryModuleMetadata[new ez.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let eY = false;
  function eJ(t10) {
    let { spanId: e10, traceId: n3 } = t10.spanContext(), { data: r2, op: a2, parent_span_id: s2, status: i2, origin: o2, links: u2 } = eX(t10);
    return { parent_span_id: s2, span_id: e10, trace_id: n3, data: r2, op: a2, status: i2, origin: o2, links: u2 };
  }
  function eG(t10) {
    let { spanId: e10, traceId: n3, isRemote: r2 } = t10.spanContext(), a2 = r2 ? e10 : eX(t10).parent_span_id, s2 = eA(t10).scope;
    return { parent_span_id: a2, span_id: r2 ? s2?.getPropagationContext().propagationSpanId || tI() : e10, trace_id: n3 };
  }
  function eH(t10) {
    return t10 && t10.length > 0 ? t10.map(({ context: { spanId: t11, traceId: e10, traceFlags: n3, ...r2 }, attributes: a2 }) => ({ span_id: t11, trace_id: e10, sampled: 1 === n3, attributes: a2, ...r2 })) : void 0;
  }
  function eW(t10) {
    return t10?.length ? t10.map(({ context: { spanId: t11, traceId: e10, traceFlags: n3 }, attributes: r2 }) => ({ span_id: t11, trace_id: e10, sampled: 1 === n3, attributes: r2 })) : void 0;
  }
  function eV(t10) {
    return "number" == typeof t10 ? eq(t10) : Array.isArray(t10) ? t10[0] + t10[1] / 1e9 : t10 instanceof Date ? eq(t10.getTime()) : th();
  }
  function eq(t10) {
    return t10 > 9999999999 ? t10 / 1e3 : t10;
  }
  function eX(t10) {
    if (e0(t10)) return t10.getSpanJSON();
    let { spanId: e10, traceId: n3 } = t10.spanContext();
    if (eZ(t10)) {
      let { attributes: r2, startTime: a2, name: s2, endTime: i2, status: o2, links: u2 } = t10;
      return { span_id: e10, trace_id: n3, data: r2, description: s2, parent_span_id: eQ(t10), start_timestamp: eV(a2), timestamp: eV(i2) || void 0, status: e2(o2), op: r2[t3], origin: r2[t4], links: eH(u2) };
    }
    return { span_id: e10, trace_id: n3, start_timestamp: 0, data: {} };
  }
  function eQ(t10) {
    return "parentSpanId" in t10 ? t10.parentSpanId : "parentSpanContext" in t10 ? t10.parentSpanContext?.spanId : void 0;
  }
  function eZ(t10) {
    return !!t10.attributes && !!t10.startTime && !!t10.name && !!t10.endTime && !!t10.status;
  }
  function e0(t10) {
    return "function" == typeof t10.getSpanJSON;
  }
  function e1(t10) {
    let { traceFlags: e10 } = t10.spanContext();
    return 1 === e10;
  }
  function e2(t10) {
    if (t10 && 0 !== t10.code) return 1 === t10.code ? "ok" : t10.message || "internal_error";
  }
  function e9(t10) {
    return t10 && 1 !== t10.code && 0 !== t10.code && "cancelled" !== t10.message ? "error" : "ok";
  }
  function e6(t10, e10) {
    let n3 = "error" === e9(e10) ? e10?.message : void 0;
    return { ...n3 && { [t5]: n3 }, ...t10 };
  }
  let e3 = "_sentryChildSpans", e4 = "_sentryRootSpan";
  function e5(t10, e10) {
    let n3 = t10[e4] || t10;
    L(e10, e4, n3), t10[e3] ? t10[e3].add(e10) : L(t10, e3, /* @__PURE__ */ new Set([e10]));
  }
  function e8(t10) {
    let e10 = /* @__PURE__ */ new Set();
    return !(function t11(n3) {
      if (!e10.has(n3) && e1(n3)) for (let r2 of (e10.add(n3), n3[e3] ? Array.from(n3[e3]) : [])) t11(r2);
    })(t10), Array.from(e10);
  }
  let e7 = nt;
  function nt(t10) {
    return t10[e4] || t10;
  }
  function ne() {
    let t10 = tW(g());
    return t10.getActiveSpan ? t10.getActiveSpan() : tR(tq());
  }
  function nn() {
    eY || (E(() => {
      console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    }), eY = true);
  }
  t.s(["INTERNAL_getSegmentSpan", 0, nt, "TRACE_FLAG_NONE", 0, 0, "TRACE_FLAG_SAMPLED", 0, 1, "addChildSpanToSpan", 0, e5, "addStatusMessageAttribute", 0, e6, "convertSpanLinksForEnvelope", 0, eH, "getActiveSpan", 0, ne, "getRootSpan", 0, e7, "getSimpleStatus", 0, e9, "getSpanDescendants", 0, e8, "getStatusMessage", 0, e2, "getStreamedSpanLinks", 0, eW, "removeChildSpanFromSpan", 0, function(t10, e10) {
    t10[e3] && t10[e3].delete(e10);
  }, "showSpanDropWarning", 0, nn, "spanIsSampled", 0, e1, "spanTimeInputToSeconds", 0, eV, "spanToJSON", 0, eX, "spanToStreamedSpanJSON", 0, function(t10) {
    if (e0(t10)) return t10.getStreamedSpanJSON();
    let { spanId: e10, traceId: n3 } = t10.spanContext();
    if (eZ(t10)) {
      let { attributes: r2, startTime: a2, name: s2, endTime: i2, status: o2, links: u2 } = t10;
      return { name: s2, span_id: e10, trace_id: n3, parent_span_id: eQ(t10), start_timestamp: eV(a2), end_timestamp: eV(i2), is_segment: t10 === nt(t10), status: e9(o2), attributes: e6(r2, o2), links: eW(u2) };
    }
    return { span_id: e10, trace_id: n3, start_timestamp: 0, name: "", end_timestamp: 0, status: "ok", is_segment: t10 === nt(t10) };
  }, "spanToTraceContext", 0, eG, "spanToTraceHeader", 0, function(t10) {
    let { traceId: e10, spanId: n3 } = t10.spanContext();
    return eL(e10, n3, e1(t10));
  }, "spanToTraceparentHeader", 0, function(t10) {
    let { traceId: e10, spanId: n3 } = t10.spanContext();
    return eF(e10, n3, e1(t10));
  }, "spanToTransactionTraceContext", 0, eJ, "streamedSpanJsonToSerializedSpan", 0, function(t10) {
    return { ...t10, attributes: eM(t10.attributes), links: t10.links?.map((t11) => ({ ...t11, attributes: eM(t11.attributes) })) };
  }], 995218);
  try {
    var nr = "u" > typeof window ? window : t.g;
    nr._sentryModuleMetadata = nr._sentryModuleMetadata || {}, nr._sentryModuleMetadata[new nr.Error().stack] = Object.assign({}, nr._sentryModuleMetadata[new nr.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let na = "production";
  t.s(["DEFAULT_ENVIRONMENT", 0, na], 264072);
  try {
    var ns = "u" > typeof window ? window : t.g;
    ns._sentryModuleMetadata = ns._sentryModuleMetadata || {}, ns._sentryModuleMetadata[new ns.Error().stack] = Object.assign({}, ns._sentryModuleMetadata[new ns.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let ni = /* @__PURE__ */ Symbol.for("sentry.nonRecordingSpan");
  class no {
    constructor(t10 = {}) {
      this._traceId = t10.traceId || tk(), this._spanId = t10.spanId || tI(), this.dropReason = t10.dropReason, L(this, ni, true);
    }
    spanContext() {
      return { spanId: this._spanId, traceId: this._traceId, traceFlags: 0 };
    }
    end(t10) {
    }
    setAttribute(t10, e10) {
      return this;
    }
    setAttributes(t10) {
      return this;
    }
    setStatus(t10) {
      return this;
    }
    updateName(t10) {
      return this;
    }
    isRecording() {
      return false;
    }
    addEvent(t10, e10, n3) {
      return this;
    }
    addLink(t10) {
      return this;
    }
    addLinks(t10) {
      return this;
    }
    recordException(t10, e10) {
    }
  }
  function nu(t10) {
    return !!t10 && true === t10[ni];
  }
  t.s(["SentryNonRecordingSpan", 0, no, "spanIsNonRecordingSpan", 0, nu], 523378);
  try {
    var nd = "u" > typeof window ? window : t.g;
    nd._sentryModuleMetadata = nd._sentryModuleMetadata || {}, nd._sentryModuleMetadata[new nd.Error().stack] = Object.assign({}, nd._sentryModuleMetadata[new nd.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let nc = "_frozenDsc";
  function nl(t10, e10) {
    L(t10, nc, e10);
  }
  function np(t10, e10) {
    let n3 = e10.getOptions(), { publicKey: r2 } = e10.getDsn() || {}, a2 = { environment: n3.environment || na, release: n3.release, public_key: r2, trace_id: t10, org_id: e$(e10) };
    return e10.emit("createDsc", a2), a2;
  }
  function n_(t10, e10) {
    let n3 = e10.getPropagationContext();
    return n3.dsc || np(n3.traceId, t10);
  }
  function ny(t10) {
    let e10 = t0();
    if (!e10) return {};
    let n3 = e7(t10), r2 = eX(n3), a2 = r2.data, s2 = n3.spanContext().traceState, i2 = s2?.get("sentry.sample_rate") ?? a2[t9] ?? a2[t6];
    function o2(t11) {
      return ("number" == typeof i2 || "string" == typeof i2) && (t11.sample_rate = `${i2}`), t11;
    }
    let u2 = n3[nc];
    if (u2) return o2(u2);
    let d2 = nu(n3), c2 = d2 && "ignored" === n3.dropReason;
    if (d2 && (!ec(e10.getOptions()) || c2)) {
      let t11 = eA(n3).scope;
      if (t11) {
        let n4 = { ...n_(e10, t11) };
        return c2 && (n4.sampled = "false"), o2(n4);
      }
    }
    let l2 = s2?.get("sentry.dsc"), p2 = l2 && es(l2);
    if (p2) return o2(p2);
    let _2 = np(t10.spanContext().traceId, e10), y2 = a2[t2] ?? a2["sentry.segment.name.source"], g2 = r2.description;
    return "url" !== y2 && g2 && (_2.transaction = g2), ec() && (_2.sampled = String(e1(n3)), _2.sample_rand = s2?.get("sentry.sample_rand") ?? eA(n3).scope?.getPropagationContext().sampleRand.toString()), o2(_2), e10.emit("createDsc", _2, n3), _2;
  }
  t.s(["freezeDscOnSpan", 0, nl, "getDynamicSamplingContextFromScope", 0, n_, "getDynamicSamplingContextFromSpan", 0, ny], 651850);
  try {
    var ng = "u" > typeof window ? window : t.g;
    ng._sentryModuleMetadata = ng._sentryModuleMetadata || {}, ng._sentryModuleMetadata[new ng.Error().stack] = Object.assign({}, ng._sentryModuleMetadata[new ng.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  try {
    var nf = "u" > typeof window ? window : t.g;
    nf._sentryModuleMetadata = nf._sentryModuleMetadata || {}, nf._sentryModuleMetadata[new nf.Error().stack] = Object.assign({}, nf._sentryModuleMetadata[new nf.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  try {
    var nh = "u" > typeof window ? window : t.g;
    nh._sentryModuleMetadata = nh._sentryModuleMetadata || {}, nh._sentryModuleMetadata[new nh.Error().stack] = Object.assign({}, nh._sentryModuleMetadata[new nh.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function nm(t10) {
    return !!t10 && "function" == typeof t10 && "_streamed" in t10 && !!t10._streamed;
  }
  t.s(["isStreamedBeforeSendSpanCallback", 0, nm], 393968);
  try {
    var nM = "u" > typeof window ? window : t.g;
    nM._sentryModuleMetadata = nM._sentryModuleMetadata || {}, nM._sentryModuleMetadata[new nM.Error().stack] = Object.assign({}, nM._sentryModuleMetadata[new nM.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function nS(t10, e10 = []) {
    return [t10, e10];
  }
  function nw(t10, e10) {
    for (let n3 of t10[1]) {
      let t11 = n3[0].type;
      if (e10(n3, t11)) return true;
    }
    return false;
  }
  function nE(t10) {
    let e10 = f(_);
    return e10.encodePolyfill ? e10.encodePolyfill(t10) : new TextEncoder().encode(t10);
  }
  function nb(t10) {
    return [{ type: "span" }, t10];
  }
  let nv = { sessions: "session", event: "error", client_report: "internal", user_report: "default", profile_chunk: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor", raw_security: "security", log: "log_item", trace_metric: "metric" };
  function nT(t10) {
    if (!t10?.sdk) return;
    let { name: e10, version: n3 } = t10.sdk;
    return { name: e10, version: n3 };
  }
  function nk(t10, e10, n3, r2) {
    let a2 = t10.sdkProcessingMetadata?.dynamicSamplingContext;
    return { event_id: t10.event_id, sent_at: new Date(W()).toISOString(), ...e10 && { sdk: e10 }, ...!!n3 && r2 && { dsn: ej(r2) }, ...a2 && { trace: a2 } };
  }
  t.s(["addItemToEnvelope", 0, function(t10, e10) {
    let [n3, r2] = t10;
    return [n3, [...r2, e10]];
  }, "createAttachmentEnvelopeItem", 0, function(t10) {
    let e10 = "string" == typeof t10.data ? nE(t10.data) : t10.data;
    return [{ type: "attachment", length: e10.length, filename: t10.filename, content_type: t10.contentType, attachment_type: t10.attachmentType }, e10];
  }, "createEnvelope", 0, nS, "createEventEnvelopeHeaders", 0, nk, "createSpanEnvelopeItem", 0, nb, "envelopeContainsItemType", 0, function(t10, e10) {
    return nw(t10, (t11, n3) => e10.includes(n3));
  }, "envelopeItemTypeToDataCategory", 0, function(t10) {
    return t10 in nv ? nv[t10] : t10;
  }, "forEachEnvelopeItem", 0, nw, "getSdkMetadataForEnvelopeHeader", 0, nT, "serializeEnvelope", 0, function(t10) {
    let [e10, n3] = t10, r2 = JSON.stringify(e10);
    function a2(t11) {
      "string" == typeof r2 ? r2 = "string" == typeof t11 ? r2 + t11 : [nE(r2), t11] : r2.push("string" == typeof t11 ? nE(t11) : t11);
    }
    for (let t11 of n3) {
      let [e11, n4] = t11;
      if (a2(`
${JSON.stringify(e11)}
`), "string" == typeof n4 || n4 instanceof Uint8Array) a2(n4);
      else {
        let t12;
        try {
          t12 = JSON.stringify(n4);
        } catch {
          t12 = JSON.stringify(ti(n4));
        }
        a2(t12);
      }
    }
    return "string" == typeof r2 ? r2 : (function(t11) {
      let e11 = new Uint8Array(t11.reduce((t12, e12) => t12 + e12.length, 0)), n4 = 0;
      for (let r3 of t11) e11.set(r3, n4), n4 += r3.length;
      return e11;
    })(r2);
  }], 784076);
  try {
    var nI = "u" > typeof window ? window : t.g;
    nI._sentryModuleMetadata = nI._sentryModuleMetadata || {}, nI._sentryModuleMetadata[new nI.Error().stack] = Object.assign({}, nI._sentryModuleMetadata[new nI.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function nA(t10, e10) {
    let n3 = ny(t10[0]), r2 = e10?.getDsn(), a2 = e10?.getOptions().tunnel, s2 = { sent_at: new Date(W()).toISOString(), ...!!n3.trace_id && !!n3.public_key && { trace: n3 }, ...!!a2 && r2 && { dsn: ej(r2) } }, { beforeSendSpan: i2, ignoreSpans: o2 } = e10?.getOptions() || {}, u2 = o2?.length ? t10.filter((t11) => {
      let e11 = eX(t11);
      return !e_({ description: e11.description, op: e11.op, attributes: e11.data }, o2);
    }) : t10, d2 = t10.length - u2.length;
    d2 && e10?.recordDroppedEvent("before_send", "span", d2);
    let c2 = i2 ? (t11) => {
      let e11 = eX(t11), n4 = nm(i2) ? e11 : i2(e11);
      return n4 || (nn(), e11);
    } : eX, l2 = [];
    for (let t11 of u2) {
      let e11 = c2(t11);
      e11 && l2.push(nb(e11));
    }
    return nS(s2, l2);
  }
  t.s(["createEventEnvelope", 0, function(t10, e10, n3, r2) {
    let a2 = nT(n3), s2 = t10.type && "replay_event" !== t10.type ? t10.type : "event";
    !(function(t11, e11) {
      if (!e11) return;
      let n4 = t11.sdk || {};
      t11.sdk = { ...n4, name: n4.name || e11.name, version: n4.version || e11.version, integrations: [...t11.sdk?.integrations || [], ...e11.integrations || []], packages: [...t11.sdk?.packages || [], ...e11.packages || []], settings: t11.sdk?.settings || e11.settings ? { ...t11.sdk?.settings, ...e11.settings } : void 0 };
    })(t10, n3?.sdk);
    let i2 = nk(t10, a2, r2, e10);
    return delete t10.sdkProcessingMetadata, nS(i2, [[{ type: s2 }, t10]]);
  }, "createSessionEnvelope", 0, function(t10, e10, n3, r2) {
    let a2 = nT(n3);
    return nS({ sent_at: new Date(W()).toISOString(), ...a2 && { sdk: a2 }, ...!!r2 && e10 && { dsn: ej(e10) } }, ["aggregates" in t10 ? [{ type: "sessions" }, t10] : [{ type: "session" }, t10.toJSON()]]);
  }, "createSpanEnvelope", 0, nA], 614380);
  try {
    var nx = "u" > typeof window ? window : t.g;
    nx._sentryModuleMetadata = nx._sentryModuleMetadata || {}, nx._sentryModuleMetadata[new nx.Error().stack] = Object.assign({}, nx._sentryModuleMetadata[new nx.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function nO(t10) {
    if (!t10 || 0 === t10.length) return;
    let e10 = {};
    return t10.forEach((t11) => {
      let n3 = t11.attributes || {}, r2 = n3[t8], a2 = n3[t7];
      "string" == typeof r2 && "number" == typeof a2 && (e10[t11.name] = { value: a2, unit: r2 });
    }), e10;
  }
  t.s(["setMeasurement", 0, function(t10, e10, n3, r2 = ne()) {
    let a2 = r2 && e7(r2);
    a2 && (M && k.log(`[Measurement] Setting measurement on root span: ${t10} = ${e10} ${n3}`), a2.addEvent(t10, { [t7]: e10, [t8]: n3 }));
  }, "timedEventsToMeasurements", 0, nO], 729823);
  try {
    var nP = "u" > typeof window ? window : t.g;
    nP._sentryModuleMetadata = nP._sentryModuleMetadata || {}, nP._sentryModuleMetadata[new nP.Error().stack] = Object.assign({}, nP._sentryModuleMetadata[new nP.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function nN() {
    return f(g()).segmentSpanCaptureStrategy;
  }
  try {
    var nC = "u" > typeof window ? window : t.g;
    nC._sentryModuleMetadata = nC._sentryModuleMetadata || {}, nC._sentryModuleMetadata[new nC.Error().stack] = Object.assign({}, nC._sentryModuleMetadata[new nC.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  class nR {
    constructor(t10 = {}) {
      this._traceId = t10.traceId || tk(), this._spanId = t10.spanId || tI(), this._startTime = t10.startTimestamp || th(), this._links = t10.links, this._attributes = {}, this.setAttributes({ [t4]: "manual", [t3]: t10.op, ...t10.attributes }), this._name = t10.name, t10.parentSpanId && (this._parentSpanId = t10.parentSpanId), "sampled" in t10 && (this._sampled = t10.sampled), t10.endTimestamp && (this._endTime = t10.endTimestamp), this._events = [], this._isStandaloneSpan = t10.isStandalone, this._endTime && this._onSpanEnded();
    }
    addLink(t10) {
      return this._frozen || (this._links ? this._links.push(t10) : this._links = [t10]), this;
    }
    addLinks(t10) {
      return this._frozen || (this._links ? this._links.push(...t10) : this._links = t10), this;
    }
    recordException(t10, e10) {
    }
    spanContext() {
      let { _spanId: t10, _traceId: e10, _sampled: n3 } = this;
      return { spanId: t10, traceId: e10, traceFlags: +!!n3 };
    }
    setAttribute(t10, e10) {
      return this._frozen || (void 0 === e10 ? delete this._attributes[t10] : this._attributes[t10] = e10, t10 === t2 && void 0 !== e10 && ex(this) && eO(this)), this;
    }
    setAttributes(t10) {
      return Object.keys(t10).forEach((e10) => this.setAttribute(e10, t10[e10])), this;
    }
    updateStartTime(t10) {
      this._frozen || (this._startTime = eV(t10));
    }
    setStatus(t10) {
      return this._frozen || (this._status = t10), this;
    }
    updateName(t10) {
      return this._frozen || (this._name = t10, ex(this) || this.setAttribute(t2, "custom")), this;
    }
    end(t10) {
      if (this._endTime) {
        this._frozen = eP(this);
        return;
      }
      this._endTime = eV(t10), (function(t11) {
        if (!M) return;
        let { description: e10 = "< unknown name >", op: n3 = "< unknown op >" } = eX(t11), { spanId: r2 } = t11.spanContext(), a2 = e7(t11) === t11, s2 = `[Tracing] Finishing "${n3}" ${a2 ? "root " : ""}span "${e10}" with ID ${r2}`;
        k.log(s2);
      })(this), this._onSpanEnded(), this._frozen = eP(this);
    }
    getSpanJSON() {
      return { data: this._attributes, description: this._name, op: this._attributes[t3], parent_span_id: this._parentSpanId, span_id: this._spanId, start_timestamp: this._startTime, status: e2(this._status), timestamp: this._endTime, trace_id: this._traceId, origin: this._attributes[t4], profile_id: this._attributes[ee], exclusive_time: this._attributes[en], measurements: nO(this._events), is_segment: this._isStandaloneSpan && e7(this) === this || void 0, segment_id: this._isStandaloneSpan ? e7(this).spanContext().spanId : void 0, links: eH(this._links) };
    }
    getStreamedSpanJSON() {
      return { name: this._name ?? "", span_id: this._spanId, trace_id: this._traceId, parent_span_id: this._parentSpanId, start_timestamp: this._startTime, end_timestamp: this._endTime ?? this._startTime, is_segment: this._isStandaloneSpan || this === e7(this), status: e9(this._status), attributes: e6(this._attributes, this._status), links: eW(this._links) };
    }
    isRecording() {
      return !this._endTime && !!this._sampled;
    }
    addEvent(t10, e10, n3) {
      if (this._frozen) return this;
      M && k.log("[Tracing] Adding an event to span:", t10);
      let r2 = nj(e10) ? e10 : n3 || th(), a2 = nj(e10) ? {} : e10 || {}, s2 = { name: t10, time: eV(r2), attributes: a2 };
      return this._events.push(s2), this;
    }
    isStandaloneSpan() {
      return !!this._isStandaloneSpan;
    }
    _onSpanEnded() {
      let t10 = t0();
      t10 && (t10.emit("spanEnd", this), this._isStandaloneSpan || t10.emit("afterSpanEnd", this));
      let e10 = e7(this), n3 = this._isStandaloneSpan || this === e10;
      if (this._isStandaloneSpan) return void (this._sampled ? (function(t11) {
        let e11 = t0();
        if (!e11) return;
        let n4 = t11[1];
        n4 && 0 !== n4.length ? e11.sendEnvelope(t11) : e11.recordDroppedEvent("before_send", "span");
      })(nA([this], t10)) : (M && k.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), t10 && t10.recordDroppedEvent("sample_rate", "span")));
      if (!n3) {
        let t11 = nN();
        if (t11) {
          let n4 = eA(this).scope || tq();
          t11.onChildSpanEnded(this, e10, (t12) => this._convertSpanToTransaction(t12), n4);
        }
        return;
      }
      if (t10 && eg(t10)) return void t10.emit("afterSegmentSpanEnd", this);
      let r2 = eA(this).scope || tq(), a2 = nN();
      if (a2) a2.onSegmentSpanEnded((t11) => this._convertSpanToTransaction(t11), r2);
      else {
        let t11 = this._convertSpanToTransaction();
        t11 && r2.captureEvent(t11);
      }
    }
    _convertSpanToTransaction(t10 = {}) {
      if (!nB(eX(this))) return;
      this._name || (M && k.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
      let { scope: e10, isolationScope: n3 } = eA(this), r2 = e10?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
      if (true !== this._sampled) return;
      t10.onSpanCaptured?.(this);
      let a2 = [];
      for (let e11 of e8(this)) {
        var s2;
        if (e11 === this || (s2 = e11) instanceof nR && s2.isStandaloneSpan() || t10.isSpanAlreadyCaptured?.(e11)) continue;
        let n4 = eX(e11);
        nB(n4) && (t10.onSpanCaptured?.(e11), a2.push(n4));
      }
      let i2 = this._attributes[t2];
      delete this._attributes[et];
      let o2 = false;
      a2.forEach((t11) => {
        delete t11.data[et], t11.op?.startsWith("gen_ai.") && (o2 = true);
      });
      let u2 = { contexts: { trace: eJ(this) }, spans: a2.length > 1e3 ? a2.sort((t11, e11) => t11.start_timestamp - e11.start_timestamp).slice(0, 1e3) : a2, start_timestamp: this._startTime, timestamp: this._endTime, transaction: this._name, type: "transaction", sdkProcessingMetadata: { capturedSpanScope: e10, capturedSpanIsolationScope: n3, dynamicSamplingContext: ny(this), hasGenAiSpans: o2 }, request: r2, ...i2 && { transaction_info: { source: i2 } } }, d2 = nO(this._events);
      return d2 && Object.keys(d2).length && (M && k.log("[Measurements] Adding measurements to transaction event", JSON.stringify(d2, void 0, 2)), u2.measurements = d2), u2;
    }
  }
  function nj(t10) {
    return t10 && "number" == typeof t10 || t10 instanceof Date || Array.isArray(t10);
  }
  function nB(t10) {
    return !!t10.start_timestamp && !!t10.timestamp && !!t10.span_id && !!t10.trace_id;
  }
  t.s(["SentrySpan", 0, nR], 190060);
  try {
    var nD = "u" > typeof window ? window : t.g;
    nD._sentryModuleMetadata = nD._sentryModuleMetadata || {}, nD._sentryModuleMetadata[new nD.Error().stack] = Object.assign({}, nD._sentryModuleMetadata[new nD.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function n$(t10, e10) {
    let n3 = nU();
    return n3.withActiveSpan ? n3.withActiveSpan(t10, e10) : tZ((n4) => (tC(n4, t10 || void 0), e10(n4)));
  }
  function nK(t10 = tq()) {
    let e10 = nU();
    return e10.isTracingSuppressed ? e10.isTracingSuppressed(t10) : true === t10.getScopeData().sdkProcessingMetadata.__SENTRY_SUPPRESS_TRACING__;
  }
  function nU() {
    return tW(g());
  }
  function nL(t10, e10, n3, r2) {
    let a2 = t0(), s2 = a2?.getOptions() || {}, { name: i2 = "" } = t10, o2 = { spanAttributes: { ...t10.attributes }, spanName: i2, parentSampled: r2 };
    a2?.emit("beforeSampling", o2, { decision: false });
    let u2 = o2.parentSampled ?? r2, d2 = o2.spanAttributes, c2 = e10.getPropagationContext(), l2 = nK(e10), [p2, _2, y2] = l2 ? [false] : (function(t11, e11, n4) {
      let r3, a3;
      if (!ec(t11)) return [false];
      "function" == typeof t11.tracesSampler ? (r3 = t11.tracesSampler({ ...e11, inheritOrSampleWith: (t12) => "number" == typeof e11.parentSampleRate ? e11.parentSampleRate : "boolean" == typeof e11.parentSampled ? Number(e11.parentSampled) : t12 }), a3 = true) : void 0 !== e11.parentSampled ? r3 = e11.parentSampled : void 0 !== t11.tracesSampleRate && (r3 = t11.tracesSampleRate, a3 = true);
      let s3 = eh(r3);
      if (void 0 === s3) return M && k.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r3)} of type ${JSON.stringify(typeof r3)}.`), [false];
      if (!s3) return M && k.log(`[Tracing] Discarding transaction because ${"function" == typeof t11.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [false, s3, a3];
      let i3 = n4 < s3;
      return !i3 && M && k.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r3)})`), [i3, s3, a3];
    })(s2, { name: i2, parentSampled: u2, attributes: d2, normalizedRequest: n3.getScopeData().sdkProcessingMetadata.normalizedRequest, parentSampleRate: eh(c2.dsc?.sample_rate) }, c2.sampleRand), g2 = new nR({ ...t10, attributes: { [t2]: "custom", [t9]: void 0 !== _2 && y2 ? _2 : void 0, ...d2 }, sampled: p2 });
    return p2 || !a2 || l2 || (M && k.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), a2.recordDroppedEvent("sample_rate", eg(a2) ? "span" : "transaction")), eI(g2, e10, n3), a2 && a2.emit("spanStart", g2), g2;
  }
  t.s(["spanIsIgnored", 0, function(t10) {
    return nu(t10) && "ignored" === t10.dropReason;
  }, "startInactiveSpan", 0, function(t10) {
    let e10 = nU();
    return e10.startInactiveSpan ? e10.startInactiveSpan(t10) : (function(t11) {
      let e11 = (function(t12) {
        let e12 = { isStandalone: (t12.experimental || {}).standalone, ...t12 };
        if (t12.startTime) {
          let n4 = { ...e12 };
          return n4.startTimestamp = eV(t12.startTime), delete n4.startTime, n4;
        }
        return e12;
      })(t11), { forceTransaction: n3, parentSpan: r2 } = t11;
      return (t11.scope ? (e12) => tZ(t11.scope, e12) : void 0 !== r2 ? (t12) => n$(r2, t12) : (t12) => t12())(() => {
        var a2, s2;
        let i2, o2 = tq(), u2 = (function(t12, e12) {
          if (e12) return e12;
          if (null === e12) return;
          let n4 = tR(t12);
          if (!n4) return;
          let r3 = t0();
          return (r3 ? r3.getOptions() : {}).parentSpanIsAlwaysRootSpan ? e7(n4) : n4;
        })(o2, r2), d2 = t0();
        return t11.onlyIfParent && !u2 ? (a2 = o2, s2 = d2, s2?.recordDroppedEvent("no_parent_span", "span"), eI(i2 = new no({ traceId: a2.getPropagationContext().traceId }), a2, tX()), i2) : (function({ parentSpan: t12, spanArguments: e12, forceTransaction: n4, scope: r3 }) {
          var a3, s3;
          let i3, o3, u3 = tX();
          if (!ec()) {
            let e13 = { ...u3.getPropagationContext(), ...r3.getPropagationContext() }, a4 = new no({ traceId: t12 ? t12.spanContext().traceId : e13.traceId });
            return t12 && !n4 && e5(t12, a4), eI(a4, r3, u3), a4;
          }
          let d3 = t0();
          if (a3 = d3, s3 = e12, i3 = a3?.getOptions().ignoreSpans, a3 && eg(a3) && i3?.length && e_({ description: s3.name || "", op: s3.attributes?.[t3] || s3.op, attributes: s3.attributes }, i3)) {
            nK(r3) || d3?.recordDroppedEvent("ignored", "span");
            let e13 = new no({ dropReason: "ignored", traceId: t12?.spanContext().traceId ?? r3.getPropagationContext().traceId });
            return t12 && !n4 && e5(t12, e13), eI(e13, r3, u3), e13;
          }
          if (t12 && !n4) o3 = (function(t13, e13, n5, r4) {
            let { spanId: a4, traceId: s4 } = t13.spanContext(), i4 = nK(e13), o4 = !i4 && e1(t13), u4 = o4 ? new nR({ ...n5, parentSpanId: a4, traceId: s4, sampled: o4 }) : new no({ traceId: s4 });
            e5(t13, u4), eI(u4, e13, r4);
            let d4 = t0();
            return d4 && (eg(d4) && nu(u4) && (nu(t13) && t13.dropReason ? (u4.dropReason = t13.dropReason, d4.recordDroppedEvent(t13.dropReason, "span")) : i4 || (u4.dropReason = "sample_rate", d4.recordDroppedEvent("sample_rate", "span"))), d4.emit("spanStart", u4), n5.endTimestamp && (d4.emit("spanEnd", u4), d4.emit("afterSpanEnd", u4))), u4;
          })(t12, r3, e12, u3), e5(t12, o3);
          else if (t12) {
            let n5 = ny(t12), { traceId: a4, spanId: s4 } = t12.spanContext(), i4 = e1(t12);
            nl(o3 = nL({ traceId: a4, parentSpanId: s4, ...e12 }, r3, u3, i4), n5);
          } else {
            let { traceId: t13, dsc: n5, parentSpanId: a4, sampled: s4 } = { ...u3.getPropagationContext(), ...r3.getPropagationContext() };
            o3 = nL({ traceId: t13, parentSpanId: a4, ...e12 }, r3, u3, s4), n5 && nl(o3, n5);
          }
          return !(function(t13) {
            if (!M) return;
            let { description: e13 = "< unknown name >", op: n5 = "< unknown op >", parent_span_id: r4 } = eX(t13), { spanId: a4 } = t13.spanContext(), s4 = e1(t13), i4 = e7(t13), o4 = i4 === t13, u4 = `[Tracing] Starting ${s4 ? "sampled" : "unsampled"} ${o4 ? "root " : ""}span`, d4 = [`op: ${n5}`, `name: ${e13}`, `ID: ${a4}`];
            if (r4 && d4.push(`parent ID: ${r4}`), !o4) {
              let { op: t14, description: e14 } = eX(i4);
              d4.push(`root ID: ${i4.spanContext().spanId}`), t14 && d4.push(`root op: ${t14}`), e14 && d4.push(`root description: ${e14}`);
            }
            k.log(`${u4}
  ${d4.join("\n  ")}`);
          })(o3), o3;
        })({ parentSpan: u2, spanArguments: e11, forceTransaction: n3, scope: o2 });
      });
    })(t10);
  }, "startNewTrace", 0, function(t10) {
    let e10 = nU();
    return e10.startNewTrace ? e10.startNewTrace(t10) : tZ((e11) => (e11.setPropagationContext({ traceId: tk(), sampleRand: H() }), M && k.log(`Starting a new trace with id ${e11.getPropagationContext().traceId}`), n$(null, t10)));
  }, "withActiveSpan", 0, n$], 501217);
  try {
    var nF = "u" > typeof window ? window : t.g;
    nF._sentryModuleMetadata = nF._sentryModuleMetadata || {}, nF._sentryModuleMetadata[new nF.Error().stack] = Object.assign({}, nF._sentryModuleMetadata[new nF.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function nz(t10) {
    return new nJ((e10) => {
      e10(t10);
    });
  }
  function nY(t10) {
    return new nJ((e10, n3) => {
      n3(t10);
    });
  }
  class nJ {
    constructor(t10) {
      this._state = 0, this._handlers = [], this._runExecutor(t10);
    }
    then(t10, e10) {
      return new nJ((n3, r2) => {
        this._handlers.push([false, (e11) => {
          if (t10) try {
            n3(t10(e11));
          } catch (t11) {
            r2(t11);
          }
          else n3(e11);
        }, (t11) => {
          if (e10) try {
            n3(e10(t11));
          } catch (t12) {
            r2(t12);
          }
          else r2(t11);
        }]), this._executeHandlers();
      });
    }
    catch(t10) {
      return this.then((t11) => t11, t10);
    }
    finally(t10) {
      return new nJ((e10, n3) => {
        let r2, a2;
        return this.then((e11) => {
          a2 = false, r2 = e11, t10 && t10();
        }, (e11) => {
          a2 = true, r2 = e11, t10 && t10();
        }).then(() => {
          a2 ? n3(r2) : e10(r2);
        });
      });
    }
    _executeHandlers() {
      if (0 === this._state) return;
      let t10 = this._handlers.slice();
      this._handlers = [], t10.forEach((t11) => {
        t11[0] || (1 === this._state && t11[1](this._value), 2 === this._state && t11[2](this._value), t11[0] = true);
      });
    }
    _runExecutor(t10) {
      let e10 = (t11, e11) => {
        if (0 === this._state) {
          if ($(e11)) return void e11.then(n3, r2);
          this._state = t11, this._value = e11, this._executeHandlers();
        }
      }, n3 = (t11) => {
        e10(1, t11);
      }, r2 = (t11) => {
        e10(2, t11);
      };
      try {
        t10(n3, r2);
      } catch (t11) {
        r2(t11);
      }
    }
  }
  t.s(["rejectedSyncPromise", 0, nY, "resolvedSyncPromise", 0, nz], 863491);
  try {
    var nG = "u" > typeof window ? window : t.g;
    nG._sentryModuleMetadata = nG._sentryModuleMetadata || {}, nG._sentryModuleMetadata[new nG.Error().stack] = Object.assign({}, nG._sentryModuleMetadata[new nG.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  try {
    var nH = "u" > typeof window ? window : t.g;
    nH._sentryModuleMetadata = nH._sentryModuleMetadata || {}, nH._sentryModuleMetadata[new nH.Error().stack] = Object.assign({}, nH._sentryModuleMetadata[new nH.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  try {
    var nW = "u" > typeof window ? window : t.g;
    nW._sentryModuleMetadata = nW._sentryModuleMetadata || {}, nW._sentryModuleMetadata[new nW.Error().stack] = Object.assign({}, nW._sentryModuleMetadata[new nW.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function nV(t10, e10) {
    var n3, r2, a2, s2, i2, o2, u2, d2;
    let c2, l2, { fingerprint: p2, span: _2, breadcrumbs: y2, sdkProcessingMetadata: g2 } = e10;
    (function(t11, e11) {
      let { extra: n4, tags: r3, user: a3, contexts: s3, level: i3, transactionName: o3 } = e11;
      Object.keys(n4).length && (t11.extra = { ...n4, ...t11.extra }), Object.keys(r3).length && (t11.tags = { ...r3, ...t11.tags }), Object.keys(a3).length && (t11.user = { ...a3, ...t11.user }), Object.keys(s3).length && (t11.contexts = { ...s3, ...t11.contexts }), i3 && (t11.level = i3), o3 && "transaction" !== t11.type && (t11.transaction = o3);
    })(t10, e10), _2 && ((n3 = t10).contexts = { trace: eG(r2 = _2), ...n3.contexts }, n3.sdkProcessingMetadata = { dynamicSamplingContext: ny(r2), ...n3.sdkProcessingMetadata }, (c2 = eX(e7(r2)).description) && !n3.transaction && "transaction" === n3.type && (n3.transaction = c2)), a2 = t10, s2 = p2, a2.fingerprint = a2.fingerprint ? Array.isArray(a2.fingerprint) ? a2.fingerprint : [a2.fingerprint] : [], s2 && (a2.fingerprint = a2.fingerprint.concat(s2)), a2.fingerprint.length || delete a2.fingerprint, i2 = t10, o2 = y2, l2 = [...i2.breadcrumbs || [], ...o2], i2.breadcrumbs = l2.length ? l2 : void 0, u2 = t10, d2 = g2, u2.sdkProcessingMetadata = { ...u2.sdkProcessingMetadata, ...d2 };
  }
  function nq(t10, e10) {
    let { extra: n3, tags: r2, attributes: a2, user: s2, contexts: i2, level: o2, sdkProcessingMetadata: u2, breadcrumbs: d2, fingerprint: c2, eventProcessors: l2, attachments: p2, propagationContext: _2, transactionName: y2, span: g2 } = e10;
    nX(t10, "extra", n3), nX(t10, "tags", r2), nX(t10, "attributes", a2), nX(t10, "user", s2), nX(t10, "contexts", i2), t10.sdkProcessingMetadata = tv(t10.sdkProcessingMetadata, u2, 2), o2 && (t10.level = o2), y2 && (t10.transactionName = y2), g2 && (t10.span = g2), d2.length && (t10.breadcrumbs = [...t10.breadcrumbs, ...d2]), c2.length && (t10.fingerprint = [...t10.fingerprint, ...c2]), l2.length && (t10.eventProcessors = [...t10.eventProcessors, ...l2]), p2.length && (t10.attachments = [...t10.attachments, ...p2]), t10.propagationContext = { ...t10.propagationContext, ..._2 };
  }
  function nX(t10, e10, n3) {
    t10[e10] = tv(t10[e10], n3, 1);
  }
  function nQ(t10, e10) {
    let n3 = tQ().getScopeData();
    return t10 && nq(n3, t10.getScopeData()), e10 && nq(n3, e10.getScopeData()), n3;
  }
  t.s(["applyScopeDataToEvent", 0, nV, "getCombinedScopeData", 0, nQ], 205375);
  try {
    var nZ = "u" > typeof window ? window : t.g;
    nZ._sentryModuleMetadata = nZ._sentryModuleMetadata || {}, nZ._sentryModuleMetadata[new nZ.Error().stack] = Object.assign({}, nZ._sentryModuleMetadata[new nZ.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function n0(t10) {
    if (t10) {
      var e10;
      return (e10 = t10) instanceof tB || "function" == typeof e10 || Object.keys(t10).some((t11) => n1.includes(t11)) ? { captureContext: t10 } : t10;
    }
  }
  let n1 = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];
  t.s(["parseEventHintOrCaptureContext", 0, n0, "prepareEvent", 0, function(t10, e10, n3, r2, a2, s2) {
    var c2, l2, p2;
    let y2, { normalizeDepth: g2 = 3, normalizeMaxBreadth: f2 = 1e3 } = t10, h2 = { ...e10, event_id: e10.event_id || n3.event_id || tp(), timestamp: e10.timestamp || tf() }, m2 = n3.integrations || t10.integrations.map((t11) => t11.name);
    (function(t11, e11) {
      let { environment: n4, release: r3, dist: a3, maxValueLength: s3 } = e11;
      t11.environment = t11.environment || n4 || na, !t11.release && r3 && (t11.release = r3), !t11.dist && a3 && (t11.dist = a3);
      let i2 = t11.request;
      i2?.url && s3 && (i2.url = td(i2.url, s3)), s3 && t11.exception?.values?.forEach((t12) => {
        t12.value && (t12.value = td(t12.value, s3));
      });
    })(h2, t10), c2 = h2, (l2 = m2).length > 0 && (c2.sdk = c2.sdk || {}, c2.sdk.integrations = [...c2.sdk.integrations || [], ...l2]), a2 && a2.emit("applyFrameMetadata", e10), void 0 === e10.type && (p2 = h2, y2 = (function(t11) {
      let e11 = _._sentryDebugIds, n4 = _._debugIds;
      if (!e11 && !n4) return {};
      let r3 = e11 ? Object.keys(e11) : [], a3 = n4 ? Object.keys(n4) : [];
      if (d && r3.length === o && a3.length === u) return d;
      o = r3.length, u = a3.length, d = {}, i || (i = {});
      let s3 = (e12, n5) => {
        for (let r4 of e12) {
          let e13 = n5[r4], a4 = i?.[r4];
          if (a4 && d && e13) d[a4[0]] = e13, i && (i[r4] = [a4[0], e13]);
          else if (e13) {
            let n7 = t11(r4);
            for (let t12 = n7.length - 1; t12 >= 0; t12--) {
              let a5 = n7[t12], s4 = a5?.filename;
              if (s4 && d && i) {
                d[s4] = e13, i[r4] = [s4, e13];
                break;
              }
            }
          }
        }
      };
      return e11 && s3(r3, e11), n4 && s3(a3, n4), d;
    })(t10.stackParser), p2.exception?.values?.forEach((t11) => {
      t11.stacktrace?.frames?.forEach((t12) => {
        t12.filename && (t12.debug_id = y2[t12.filename]);
      });
    }));
    let S2 = (function(t11, e11) {
      if (!e11) return t11;
      let n4 = t11 ? t11.clone() : new tB();
      return n4.update(e11), n4;
    })(r2, n3.captureContext);
    n3.mechanism && ty(h2, n3.mechanism);
    let w2 = a2 ? a2.getEventProcessors() : [], E2 = nQ(s2, S2), b2 = [...n3.attachments || [], ...E2.attachments];
    b2.length && (n3.attachments = b2), nV(h2, E2);
    let v2 = [...w2, ...E2.eventProcessors];
    return (n3.data && true === n3.data.__sentry__ ? nz(h2) : (function(t11, e11, n4, r3 = 0) {
      try {
        let a3 = (function t12(e12, n5, r4, a4) {
          let s3 = r4[a4];
          if (!e12 || !s3) return e12;
          let i2 = s3({ ...e12 }, n5);
          return (M && null === i2 && k.log(`Event processor "${s3.id || "?"}" dropped event`), $(i2)) ? i2.then((e13) => t12(e13, n5, r4, a4 + 1)) : t12(i2, n5, r4, a4 + 1);
        })(e11, n4, t11, r3);
        return $(a3) ? a3 : nz(a3);
      } catch (t12) {
        return nY(t12);
      }
    })(v2, h2, n3)).then((t11) => (t11 && (function(t12) {
      let e11 = {};
      if (t12.exception?.values?.forEach((t13) => {
        t13.stacktrace?.frames?.forEach((t14) => {
          t14.debug_id && (t14.abs_path ? e11[t14.abs_path] = t14.debug_id : t14.filename && (e11[t14.filename] = t14.debug_id), delete t14.debug_id);
        });
      }), 0 === Object.keys(e11).length) return;
      t12.debug_meta = t12.debug_meta || {}, t12.debug_meta.images = t12.debug_meta.images || [];
      let n4 = t12.debug_meta.images;
      Object.entries(e11).forEach(([t13, e12]) => {
        n4.push({ type: "sourcemap", code_file: t13, debug_id: e12 });
      });
    })(t11), "number" == typeof g2 && g2 > 0) ? (function(t12, e11, n4) {
      if (!t12) return null;
      let r3 = { ...t12, ...t12.breadcrumbs && { breadcrumbs: t12.breadcrumbs.map((t13) => ({ ...t13, ...t13.data && { data: ti(t13.data, e11, n4) } })) }, ...t12.user && { user: ti(t12.user, e11, n4) }, ...t12.contexts && { contexts: ti(t12.contexts, e11, n4) }, ...t12.extra && { extra: ti(t12.extra, e11, n4) } };
      return t12.contexts?.trace && r3.contexts && (r3.contexts.trace = t12.contexts.trace, t12.contexts.trace.data && (r3.contexts.trace.data = ti(t12.contexts.trace.data, e11, n4))), t12.spans && (r3.spans = t12.spans.map((t13) => ({ ...t13, ...t13.data && { data: ti(t13.data, e11, n4) } }))), t12.contexts?.flags && r3.contexts && (r3.contexts.flags = ti(t12.contexts.flags, 3, n4)), r3;
    })(t11, g2, f2) : t11);
  }], 740347);
  try {
    var n2 = "u" > typeof window ? window : t.g;
    n2._sentryModuleMetadata = n2._sentryModuleMetadata || {}, n2._sentryModuleMetadata[new n2.Error().stack] = Object.assign({}, n2._sentryModuleMetadata[new n2.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function n9() {
    let t10 = tX(), e10 = tq().getSession() || t10.getSession();
    e10 && tE(e10), n6(), t10.setSession();
  }
  function n6() {
    let t10 = tX(), e10 = t0(), n3 = t10.getSession();
    n3 && e10 && e10.captureSession(n3);
  }
  t.s(["addEventProcessor", 0, function(t10) {
    tX().addEventProcessor(t10);
  }, "captureEvent", 0, function(t10, e10) {
    return tq().captureEvent(t10, e10);
  }, "captureException", 0, function(t10, e10) {
    return tq().captureException(t10, n0(e10));
  }, "captureSession", 0, function(t10 = false) {
    t10 ? n9() : n6();
  }, "isEnabled", 0, function() {
    let t10 = t0();
    return t10?.getOptions().enabled !== false && !!t10?.getTransport();
  }, "setContext", 0, function(t10, e10) {
    tX().setContext(t10, e10);
  }, "startSession", 0, function(t10) {
    let e10 = tX(), { user: n3 } = nQ(e10, tq()), { userAgent: r2 } = _.navigator || {}, a2 = tS({ user: n3, ...r2 && { userAgent: r2 }, ...t10 }), s2 = e10.getSession();
    return s2?.status === "ok" && tw(s2, { status: "exited" }), n9(), e10.setSession(a2), a2;
  }], 799458);
}]);
