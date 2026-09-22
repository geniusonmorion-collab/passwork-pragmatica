;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "e8a75a9a-dd25-534c-62b5-a909def5ef65");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 778579, (e, n, t) => {
  "use strict";
  var r, l = e.i(541130);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var o = e.r(345923), i = e.r(856757), u = e.r(403432);
  function s(e10) {
    var n10 = "https://react.dev/errors/" + e10;
    if (1 < arguments.length) {
      n10 += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t10 = 2; t10 < arguments.length; t10++) n10 += "&args[]=" + encodeURIComponent(arguments[t10]);
    }
    return "Minified React error #" + e10 + "; visit " + n10 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e10) {
    return !(!e10 || 1 !== e10.nodeType && 9 !== e10.nodeType && 11 !== e10.nodeType);
  }
  function f(e10) {
    for (var n10 = e10, t10 = n10; t10 && !t10.alternate; ) 0 != (4098 & (n10 = t10).flags) && (e10 = n10.return), t10 = n10.return;
    for (; n10.return; ) n10 = n10.return;
    return 3 === n10.tag ? e10 : null;
  }
  function d(e10) {
    if (13 === e10.tag) {
      var n10 = e10.memoizedState;
      if (null === n10 && null !== (e10 = e10.alternate) && (n10 = e10.memoizedState), null !== n10) return n10.dehydrated;
    }
    return null;
  }
  function p(e10) {
    if (31 === e10.tag) {
      var n10 = e10.memoizedState;
      if (null === n10 && null !== (e10 = e10.alternate) && (n10 = e10.memoizedState), null !== n10) return n10.dehydrated;
    }
    return null;
  }
  function m(e10) {
    if (f(e10) !== e10) throw Error(s(188));
  }
  function h(e10, n10, t10, r10, l10, a10) {
    for (; null !== e10; ) {
      if ((5 === e10.tag || 6 === e10.tag) && t10(e10, r10, l10, a10) || (22 !== e10.tag || null === e10.memoizedState) && (n10 || 5 !== e10.tag) && h(e10.child, n10, t10, r10, l10, a10)) return true;
      e10 = e10.sibling;
    }
    return false;
  }
  function g(e10) {
    for (e10 = e10.return; null !== e10; ) {
      if (3 === e10.tag || 5 === e10.tag) return e10;
      e10 = e10.return;
    }
    return null;
  }
  function v(e10) {
    switch (e10.tag) {
      case 5:
      case 6:
        return e10.stateNode;
      case 3:
        return e10.stateNode.containerInfo;
      default:
        throw Error(s(559));
    }
  }
  var y = null, b = null;
  function w(e10) {
    return y = e10, true;
  }
  function k(e10, n10, t10) {
    return e10 === t10 || e10 === n10 && (y = e10, true);
  }
  function S(e10, n10, t10) {
    return e10 === t10 ? (b = e10, false) : e10 === n10 && (null !== b && (y = e10), true);
  }
  function E(e10) {
    if (null === e10) return null;
    do
      e10 = null === e10 ? null : e10.return;
    while (e10 && 5 !== e10.tag && 27 !== e10.tag && 3 !== e10.tag);
    return e10 || null;
  }
  function x(e10, n10, t10) {
    for (var r10 = 0, l10 = e10; l10; l10 = t10(l10)) r10++;
    l10 = 0;
    for (var a10 = n10; a10; a10 = t10(a10)) l10++;
    for (; 0 < r10 - l10; ) e10 = t10(e10), r10--;
    for (; 0 < l10 - r10; ) n10 = t10(n10), l10--;
    for (; r10--; ) {
      if (e10 === n10 || null !== n10 && e10 === n10.alternate) return e10;
      e10 = t10(e10), n10 = t10(n10);
    }
    return null;
  }
  var N = Object.assign, C = /* @__PURE__ */ Symbol.for("react.element"), P = /* @__PURE__ */ Symbol.for("react.transitional.element"), _ = /* @__PURE__ */ Symbol.for("react.portal"), z = /* @__PURE__ */ Symbol.for("react.fragment"), T = /* @__PURE__ */ Symbol.for("react.strict_mode"), O = /* @__PURE__ */ Symbol.for("react.profiler"), L = /* @__PURE__ */ Symbol.for("react.consumer"), M = /* @__PURE__ */ Symbol.for("react.context"), F = /* @__PURE__ */ Symbol.for("react.forward_ref"), D = /* @__PURE__ */ Symbol.for("react.suspense"), I = /* @__PURE__ */ Symbol.for("react.suspense_list"), A = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy");
  /* @__PURE__ */ Symbol.for("react.scope");
  var U = /* @__PURE__ */ Symbol.for("react.activity"), V = /* @__PURE__ */ Symbol.for("react.legacy_hidden");
  /* @__PURE__ */ Symbol.for("react.tracing_marker");
  var B = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), $ = /* @__PURE__ */ Symbol.for("react.view_transition"), j = /* @__PURE__ */ Symbol.for("react.recoverable"), H = Symbol.iterator;
  function Q(e10) {
    return null === e10 || "object" != typeof e10 ? null : "function" == typeof (e10 = H && e10[H] || e10["@@iterator"]) ? e10 : null;
  }
  var W = /* @__PURE__ */ Symbol.for("react.client.reference"), q = Array.isArray, K = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = { pending: false, data: null, method: null, action: null }, X = [], Z = -1;
  function J(e10) {
    return { current: e10 };
  }
  function ee(e10) {
    0 > Z || (e10.current = X[Z], X[Z] = null, Z--);
  }
  function en(e10, n10) {
    X[++Z] = e10.current, e10.current = n10;
  }
  var et = J(null), er = J(null), el = J(null), ea = J(null);
  function eo(e10, n10) {
    switch (en(el, n10), en(er, e10), en(et, null), n10.nodeType) {
      case 9:
      case 11:
        e10 = (e10 = n10.documentElement) && (e10 = e10.namespaceURI) ? ch(e10) : 0;
        break;
      default:
        if (e10 = n10.tagName, n10 = n10.namespaceURI) e10 = cg(n10 = ch(n10), e10);
        else switch (e10) {
          case "svg":
            e10 = 1;
            break;
          case "math":
            e10 = 2;
            break;
          default:
            e10 = 0;
        }
    }
    ee(et), en(et, e10);
  }
  function ei() {
    ee(et), ee(er), ee(el);
  }
  function eu(e10) {
    var n10 = e10.memoizedState;
    null !== n10 && (fP._currentValue = n10.memoizedState, en(ea, e10));
    var t10 = cg(n10 = et.current, e10.type);
    n10 !== t10 && (en(er, e10), en(et, t10));
  }
  function es(e10) {
    er.current === e10 && (ee(et), ee(er)), ea.current === e10 && (ee(ea), fP._currentValue = G);
  }
  function ec(e10) {
    if (void 0 === nZ) try {
      throw Error();
    } catch (e11) {
      var n10 = e11.stack.trim().match(/\n( *(at )?)/);
      nZ = n10 && n10[1] || "", nJ = -1 < e11.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e11.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return "\n" + nZ + e10 + nJ;
  }
  var ef = false;
  function ed(e10, n10) {
    if (!e10 || ef) return "";
    ef = true;
    var t10 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r10 = { DetermineComponentFrameRoot: function() {
        try {
          if (n10) {
            var t11 = function() {
              throw Error();
            };
            if (Object.defineProperty(t11.prototype, "props", { set: function() {
              throw Error();
            } }), "object" == typeof Reflect && Reflect.construct) {
              try {
                Reflect.construct(t11, []);
              } catch (e11) {
                var r11 = e11;
              }
              Reflect.construct(e10, [], t11);
            } else {
              try {
                t11.call();
              } catch (e11) {
                r11 = e11;
              }
              t11 = false;
              try {
                var l11 = Object.getOwnPropertyDescriptor(e10.prototype, "props");
                Object.defineProperty(e10.prototype, "props", { configurable: true, set: function() {
                  throw Error();
                } }), t11 = true, new e10();
              } finally {
                t11 && (void 0 !== l11 ? Object.defineProperty(e10.prototype, "props", l11) : delete e10.prototype.props);
              }
            }
          } else {
            try {
              throw Error();
            } catch (e11) {
              r11 = e11;
            }
            (t11 = e10()) && "function" == typeof t11.catch && t11.catch(function() {
            });
          }
        } catch (e11) {
          if (e11 && r11 && "string" == typeof e11.stack) return [e11.stack, r11.stack];
        }
        return [null, null];
      } };
      r10.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l10 = Object.getOwnPropertyDescriptor(r10.DetermineComponentFrameRoot, "name");
      l10 && l10.configurable && Object.defineProperty(r10.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var a10 = r10.DetermineComponentFrameRoot(), o10 = a10[0], i10 = a10[1];
      if (o10 && i10) {
        var u10 = o10.split("\n"), s10 = i10.split("\n");
        for (l10 = r10 = 0; r10 < u10.length && !u10[r10].includes("DetermineComponentFrameRoot"); ) r10++;
        for (; l10 < s10.length && !s10[l10].includes("DetermineComponentFrameRoot"); ) l10++;
        if (r10 === u10.length || l10 === s10.length) for (r10 = u10.length - 1, l10 = s10.length - 1; 1 <= r10 && 0 <= l10 && u10[r10] !== s10[l10]; ) l10--;
        for (; 1 <= r10 && 0 <= l10; r10--, l10--) if (u10[r10] !== s10[l10]) {
          if (1 !== r10 || 1 !== l10) do
            if (r10--, l10--, 0 > l10 || u10[r10] !== s10[l10]) {
              var c10 = "\n" + u10[r10].replace(" at new ", " at ");
              return e10.displayName && c10.includes("<anonymous>") && (c10 = c10.replace("<anonymous>", e10.displayName)), c10;
            }
          while (1 <= r10 && 0 <= l10);
          break;
        }
      }
    } finally {
      ef = false, Error.prepareStackTrace = t10;
    }
    return (t10 = e10 ? e10.displayName || e10.name : "") ? ec(t10) : "";
  }
  function ep(e10) {
    try {
      var n10 = "", t10 = null;
      do
        n10 += (function(e11, n11) {
          switch (e11.tag) {
            case 26:
            case 27:
            case 5:
              return ec(e11.type);
            case 16:
              return ec("Lazy");
            case 13:
              return e11.child !== n11 && null !== n11 ? ec("Suspense Fallback") : ec("Suspense");
            case 19:
              return ec("SuspenseList");
            case 0:
            case 15:
              return ed(e11.type, false);
            case 11:
              return ed(e11.type.render, false);
            case 1:
              return ed(e11.type, true);
            case 31:
              return ec("Activity");
            case 30:
              return ec("ViewTransition");
            default:
              return "";
          }
        })(e10, t10), t10 = e10, e10 = e10.return;
      while (e10);
      return n10;
    } catch (e11) {
      return "\nError generating stack: " + e11.message + "\n" + e11.stack;
    }
  }
  var em = Object.prototype.hasOwnProperty, eh = o.unstable_scheduleCallback, eg = o.unstable_cancelCallback, ev = o.unstable_shouldYield, ey = o.unstable_requestPaint, eb = o.unstable_now, ew = o.unstable_getCurrentPriorityLevel, ek = o.unstable_ImmediatePriority, eS = o.unstable_UserBlockingPriority, eE = o.unstable_NormalPriority, ex = o.unstable_LowPriority, eN = o.unstable_IdlePriority, eC = (o.log, o.unstable_setDisableYieldValue, null), eP = null, e_ = Math.clz32 ? Math.clz32 : function(e10) {
    return 0 == (e10 >>>= 0) ? 32 : 31 - (ez(e10) / eT | 0) | 0;
  }, ez = Math.log, eT = Math.LN2, eO = 256, eL = 262144, eM = 4194304;
  function eF(e10) {
    var n10 = 42 & e10;
    if (0 !== n10) return n10;
    switch (e10 & -e10) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return 261888 & e10;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return 3932160 & e10;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return 62914560 & e10;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e10;
    }
  }
  function eD(e10, n10, t10) {
    var r10 = e10.pendingLanes;
    if (0 === r10) return 0;
    var l10 = 0, a10 = e10.suspendedLanes, o10 = e10.pingedLanes;
    e10 = e10.warmLanes;
    var i10 = 134217727 & r10;
    return 0 !== i10 ? 0 != (r10 = i10 & ~a10) ? l10 = eF(r10) : 0 != (o10 &= i10) ? l10 = eF(o10) : t10 || 0 != (t10 = i10 & ~e10) && (l10 = eF(t10)) : 0 != (i10 = r10 & ~a10) ? l10 = eF(i10) : 0 !== o10 ? l10 = eF(o10) : t10 || 0 != (t10 = r10 & ~e10) && (l10 = eF(t10)), 0 === l10 ? 0 : 0 !== n10 && n10 !== l10 && 0 == (n10 & a10) && ((a10 = l10 & -l10) >= (t10 = n10 & -n10) || 32 === a10 && 0 != (4194048 & t10)) ? n10 : l10;
  }
  function eI(e10, n10) {
    return 0 == (e10.pendingLanes & ~(e10.suspendedLanes & ~e10.pingedLanes) & n10);
  }
  function eA() {
    var e10 = eM;
    return 0 == (62914560 & (eM <<= 1)) && (eM = 4194304), e10;
  }
  function eR(e10) {
    for (var n10 = [], t10 = 0; 31 > t10; t10++) n10.push(e10);
    return n10;
  }
  function eU(e10, n10) {
    e10.pendingLanes |= n10, 268435456 !== n10 && (e10.suspendedLanes = 0, e10.pingedLanes = 0, e10.warmLanes = 0);
  }
  function eV(e10, n10, t10) {
    e10.pendingLanes |= n10, e10.suspendedLanes &= ~n10;
    var r10 = 31 - e_(n10);
    e10.entangledLanes |= n10, e10.entanglements[r10] = 1073741824 | e10.entanglements[r10] | 261930 & t10;
  }
  function eB(e10, n10) {
    var t10 = e10.entangledLanes |= n10;
    for (e10 = e10.entanglements; t10; ) {
      var r10 = 31 - e_(t10), l10 = 1 << r10;
      l10 & n10 | e10[r10] & n10 && (e10[r10] |= n10), t10 &= ~l10;
    }
  }
  function e$(e10, n10) {
    var t10 = n10 & -n10;
    return 0 != ((t10 = 0 != (42 & t10) ? 1 : ej(t10)) & (e10.suspendedLanes | n10)) ? 0 : t10;
  }
  function ej(e10) {
    switch (e10) {
      case 2:
        e10 = 1;
        break;
      case 8:
        e10 = 4;
        break;
      case 32:
        e10 = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e10 = 128;
        break;
      case 268435456:
        e10 = 134217728;
        break;
      default:
        e10 = 0;
    }
    return e10;
  }
  function eH(e10) {
    return 2 < (e10 &= -e10) ? 8 < e10 ? 0 != (134217727 & e10) ? 32 : 268435456 : 8 : 2;
  }
  function eQ() {
    var e10 = Y.p;
    return 0 !== e10 ? e10 : void 0 === (e10 = window.event) ? 32 : f$(e10.type);
  }
  function eW(e10, n10) {
    var t10 = Y.p;
    try {
      return Y.p = e10, n10();
    } finally {
      Y.p = t10;
    }
  }
  var eq = Math.random().toString(36).slice(2), eK = "__reactFiber$" + eq, eY = "__reactProps$" + eq, eG = "__reactContainer$" + eq, eX = "__reactEvents$" + eq, eZ = "__reactListeners$" + eq, eJ = "__reactHandles$" + eq, e0 = "__reactResources$" + eq, e1 = "__reactMarker$" + eq, e2 = "__reactLoad$" + eq;
  function e3(e10) {
    delete e10[eK], delete e10[eY], delete e10[eZ], delete e10[eJ];
  }
  function e4(e10) {
    var n10;
    if (n10 = e10[eK]) return n10;
    for (var t10 = e10.parentNode; t10; ) {
      if (n10 = t10[eG] || t10[eK]) {
        if (t10 = n10.alternate, null !== n10.child || null !== t10 && null !== t10.child) for (e10 = c3(e10); null !== e10; ) {
          if (t10 = e10[eK]) return t10;
          e10 = c3(e10);
        }
        return n10;
      }
      t10 = (e10 = t10).parentNode;
    }
    return null;
  }
  function e6(e10) {
    if (e10 = e10[eK] || e10[eG]) {
      var n10 = e10.tag;
      if (5 === n10 || 6 === n10 || 13 === n10 || 31 === n10 || 26 === n10 || 27 === n10 || 3 === n10) return e10;
    }
    return null;
  }
  function e8(e10) {
    var n10 = e10.tag;
    if (5 === n10 || 26 === n10 || 27 === n10 || 6 === n10) return e10.stateNode;
    throw Error(s(33));
  }
  function e5(e10) {
    var n10 = e10[e0];
    return n10 || (n10 = e10[e0] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n10;
  }
  function e9(e10) {
    e10[e1] = true;
  }
  function e7(e10) {
    e10[e2] = void 0;
  }
  var ne = /* @__PURE__ */ new Set(), nn = {};
  function nt(e10, n10) {
    nr(e10, n10), nr(e10 + "Capture", n10);
  }
  function nr(e10, n10) {
    for (nn[e10] = n10, e10 = 0; e10 < n10.length; e10++) ne.add(n10[e10]);
  }
  var nl = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), na = {}, no = {}, ni = false;
  function nu() {
    var e10 = ni;
    return ni = false, e10;
  }
  function ns(e10, n10, t10) {
    if (em.call(no, n10) || !em.call(na, n10) && (nl.test(n10) ? no[n10] = true : (na[n10] = true, false))) if (null === t10) e10.removeAttribute(n10);
    else {
      switch (typeof t10) {
        case "undefined":
        case "function":
        case "symbol":
          e10.removeAttribute(n10);
          return;
        case "boolean":
          var r10 = n10.toLowerCase().slice(0, 5);
          if ("data-" !== r10 && "aria-" !== r10) return void e10.removeAttribute(n10);
      }
      e10.setAttribute(n10, t10);
    }
  }
  function nc(e10, n10, t10) {
    if (null === t10) e10.removeAttribute(n10);
    else {
      switch (typeof t10) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e10.removeAttribute(n10);
          return;
      }
      e10.setAttribute(n10, t10);
    }
  }
  function nf(e10, n10, t10, r10) {
    if (null === r10) e10.removeAttribute(t10);
    else {
      switch (typeof r10) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e10.removeAttribute(t10);
          return;
      }
      e10.setAttributeNS(n10, t10, r10);
    }
  }
  function nd(e10) {
    switch (typeof e10) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
      case "object":
        return e10;
      default:
        return "";
    }
  }
  function np(e10) {
    var n10 = e10.type;
    return (e10 = e10.nodeName) && "input" === e10.toLowerCase() && ("checkbox" === n10 || "radio" === n10);
  }
  function nm(e10) {
    if (!e10._valueTracker) {
      var n10 = np(e10) ? "checked" : "value";
      e10._valueTracker = (function(e11, n11, t10) {
        var r10 = Object.getOwnPropertyDescriptor(e11.constructor.prototype, n11);
        if (!e11.hasOwnProperty(n11) && void 0 !== r10 && "function" == typeof r10.get && "function" == typeof r10.set) {
          var l10 = r10.get, a10 = r10.set;
          return Object.defineProperty(e11, n11, { configurable: true, get: function() {
            return l10.call(this);
          }, set: function(e12) {
            t10 = "" + e12, a10.call(this, e12);
          } }), Object.defineProperty(e11, n11, { enumerable: r10.enumerable }), { getValue: function() {
            return t10;
          }, setValue: function(e12) {
            t10 = "" + e12;
          }, stopTracking: function() {
            e11._valueTracker = null, delete e11[n11];
          } };
        }
      })(e10, n10, "" + e10[n10]);
    }
  }
  function nh(e10) {
    if (!e10) return false;
    var n10 = e10._valueTracker;
    if (!n10) return true;
    var t10 = n10.getValue(), r10 = "";
    return e10 && (r10 = np(e10) ? e10.checked ? "true" : "false" : e10.value), (e10 = r10) !== t10 && (n10.setValue(e10), true);
  }
  var ng = /[\n"\\]/g;
  function nv(e10) {
    return e10.replace(ng, function(e11) {
      return "\\" + e11.charCodeAt(0).toString(16) + " ";
    });
  }
  function ny(e10, n10, t10, r10, l10, a10, o10, i10) {
    e10.name = "", null != o10 && "function" != typeof o10 && "symbol" != typeof o10 && "boolean" != typeof o10 ? e10.type = o10 : e10.removeAttribute("type"), null != n10 ? "number" === o10 ? (0 === n10 && "" === e10.value || e10.value != n10) && (e10.value = "" + nd(n10)) : e10.value !== "" + nd(n10) && (e10.value = "" + nd(n10)) : "submit" !== o10 && "reset" !== o10 || e10.removeAttribute("value"), null != n10 ? "number" === o10 && e10.value == n10 ? nw(e10, nd(e10.value)) : nw(e10, nd(n10)) : null != t10 ? nw(e10, nd(t10)) : null != r10 && e10.removeAttribute("value"), null == l10 && null != a10 && (e10.defaultChecked = !!a10), null != l10 && (e10.checked = l10 && "function" != typeof l10 && "symbol" != typeof l10), null != i10 && "function" != typeof i10 && "symbol" != typeof i10 && "boolean" != typeof i10 ? e10.name = "" + nd(i10) : e10.removeAttribute("name");
  }
  function nb(e10, n10, t10, r10, l10, a10, o10, i10) {
    if (null != a10 && "function" != typeof a10 && "symbol" != typeof a10 && "boolean" != typeof a10 && (e10.type = a10), null != n10 || null != t10) {
      if (("submit" === a10 || "reset" === a10) && null == n10) return void nm(e10);
      t10 = null != t10 ? "" + nd(t10) : "", n10 = null != n10 ? "" + nd(n10) : t10, i10 || n10 === e10.value || (e10.value = n10), e10.defaultValue = n10;
    }
    r10 = "function" != typeof (r10 = null != r10 ? r10 : l10) && "symbol" != typeof r10 && !!r10, e10.checked = i10 ? e10.checked : !!r10, e10.defaultChecked = !!r10, null != o10 && "function" != typeof o10 && "symbol" != typeof o10 && "boolean" != typeof o10 && (e10.name = o10), nm(e10);
  }
  function nw(e10, n10) {
    e10.defaultValue !== "" + n10 && (e10.defaultValue = "" + n10);
  }
  function nk(e10, n10, t10, r10) {
    if (e10 = e10.options, n10) {
      n10 = {};
      for (var l10 = 0; l10 < t10.length; l10++) n10["$" + t10[l10]] = true;
      for (t10 = 0; t10 < e10.length; t10++) l10 = n10.hasOwnProperty("$" + e10[t10].value), e10[t10].selected !== l10 && (e10[t10].selected = l10), l10 && r10 && (e10[t10].defaultSelected = true);
    } else {
      for (t10 = "" + nd(t10), n10 = null, l10 = 0; l10 < e10.length; l10++) {
        if (e10[l10].value === t10) {
          e10[l10].selected = true, r10 && (e10[l10].defaultSelected = true);
          return;
        }
        null !== n10 || e10[l10].disabled || (n10 = e10[l10]);
      }
      null !== n10 && (n10.selected = true);
    }
  }
  function nS(e10, n10, t10) {
    if (null != n10 && ((n10 = "" + nd(n10)) !== e10.value && (e10.value = n10), null == t10)) {
      e10.defaultValue !== n10 && (e10.defaultValue = n10);
      return;
    }
    e10.defaultValue = null != t10 ? "" + nd(t10) : "";
  }
  function nE(e10, n10, t10, r10) {
    if (null == n10) {
      if (null != r10) {
        if (null != t10) throw Error(s(92));
        if (q(r10)) {
          if (1 < r10.length) throw Error(s(93));
          r10 = r10[0];
        }
        t10 = r10;
      }
      null == t10 && (t10 = ""), n10 = t10;
    }
    e10.defaultValue = t10 = nd(n10), (r10 = e10.textContent) === t10 && "" !== r10 && null !== r10 && (e10.value = r10), nm(e10);
  }
  function nx(e10, n10) {
    if (n10) {
      var t10 = e10.firstChild;
      if (t10 && t10 === e10.lastChild && 3 === t10.nodeType) {
        t10.nodeValue = n10;
        return;
      }
    }
    e10.textContent = n10;
  }
  var nN = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function nC(e10, n10, t10) {
    var r10 = 0 === n10.indexOf("--");
    null == t10 || "boolean" == typeof t10 || "" === t10 ? r10 ? e10.setProperty(n10, "") : "float" === n10 ? e10.cssFloat = "" : e10[n10] = "" : r10 ? e10.setProperty(n10, t10) : "number" != typeof t10 || 0 === t10 || nN.has(n10) ? "float" === n10 ? e10.cssFloat = t10 : e10[n10] = ("" + t10).trim() : e10[n10] = t10 + "px";
  }
  function nP(e10, n10, t10) {
    if (null != n10 && "object" != typeof n10) throw Error(s(62));
    if (e10 = e10.style, null != t10) {
      for (var r10 in t10) !t10.hasOwnProperty(r10) || null != n10 && n10.hasOwnProperty(r10) || (0 === r10.indexOf("--") ? e10.setProperty(r10, "") : "float" === r10 ? e10.cssFloat = "" : e10[r10] = "", ni = true);
      for (var l10 in n10) r10 = n10[l10], n10.hasOwnProperty(l10) && t10[l10] !== r10 && (nC(e10, l10, r10), ni = true);
    } else for (var a10 in n10) n10.hasOwnProperty(a10) && nC(e10, a10, n10[a10]);
  }
  function n_(e10) {
    if (-1 === e10.indexOf("-")) return false;
    switch (e10) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var nz = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["maskType", "mask-type"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), nT = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function nO(e10) {
    return nT.test("" + e10) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e10;
  }
  function nL() {
  }
  var nM = null;
  function nF(e10) {
    return (e10 = e10.target || e10.srcElement || window).correspondingUseElement && (e10 = e10.correspondingUseElement), 3 === e10.nodeType ? e10.parentNode : e10;
  }
  var nD = null, nI = null;
  function nA(e10) {
    var n10 = e6(e10);
    if (n10 && (e10 = n10.stateNode)) {
      var t10 = e10[eY] || null;
      switch (e10 = n10.stateNode, n10.type) {
        case "input":
          if (ny(e10, t10.value, t10.defaultValue, t10.defaultValue, t10.checked, t10.defaultChecked, t10.type, t10.name), n10 = t10.name, "radio" === t10.type && null != n10) {
            for (t10 = e10; t10.parentNode; ) t10 = t10.parentNode;
            for (t10 = t10.querySelectorAll('input[name="' + nv("" + n10) + '"][type="radio"]'), n10 = 0; n10 < t10.length; n10++) {
              var r10 = t10[n10];
              if (r10 !== e10 && r10.form === e10.form) {
                var l10 = r10[eY] || null;
                if (!l10) throw Error(s(90));
                ny(r10, l10.value, l10.defaultValue, l10.defaultValue, l10.checked, l10.defaultChecked, l10.type, l10.name);
              }
            }
            for (n10 = 0; n10 < t10.length; n10++) (r10 = t10[n10]).form === e10.form && nh(r10);
          }
          break;
        case "textarea":
          nS(e10, t10.value, t10.defaultValue);
          break;
        case "select":
          null != (n10 = t10.value) && nk(e10, !!t10.multiple, n10, false);
      }
    }
  }
  var nR = false;
  function nU(e10, n10, t10) {
    if (nR) return e10(n10, t10);
    nR = true;
    try {
      return e10(n10);
    } finally {
      if (nR = false, (null !== nD || null !== nI) && (si(), nD && (n10 = nD, e10 = nI, nI = nD = null, nA(n10), e10))) for (n10 = 0; n10 < e10.length; n10++) nA(e10[n10]);
    }
  }
  function nV(e10, n10) {
    var t10 = e10.stateNode;
    if (null === t10) return null;
    var r10 = t10[eY] || null;
    if (null === r10) return null;
    switch (t10 = r10[n10], n10) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r10 = !r10.disabled) || (r10 = "button" !== (e10 = e10.type) && "input" !== e10 && "select" !== e10 && "textarea" !== e10), e10 = !r10;
        break;
      default:
        e10 = false;
    }
    if (e10) return null;
    if (t10 && "function" != typeof t10) throw Error(s(231, n10, typeof t10));
    return t10;
  }
  var nB = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement, n$ = false;
  if (nB) try {
    var nj = {};
    Object.defineProperty(nj, "passive", { get: function() {
      n$ = true;
    } }), window.addEventListener("test", nj, nj), window.removeEventListener("test", nj, nj);
  } catch (e10) {
    n$ = false;
  }
  var nH = null, nQ = null, nW = null;
  function nq() {
    if (nW) return nW;
    var e10, n10, t10 = nQ, r10 = t10.length, l10 = "value" in nH ? nH.value : nH.textContent, a10 = l10.length;
    for (e10 = 0; e10 < r10 && t10[e10] === l10[e10]; e10++) ;
    var o10 = r10 - e10;
    for (n10 = 1; n10 <= o10 && t10[r10 - n10] === l10[a10 - n10]; n10++) ;
    return nW = l10.slice(e10, 1 < n10 ? 1 - n10 : void 0);
  }
  function nK(e10) {
    var n10 = e10.keyCode;
    return "charCode" in e10 ? 0 === (e10 = e10.charCode) && 13 === n10 && (e10 = 13) : e10 = n10, 10 === e10 && (e10 = 13), 32 <= e10 || 13 === e10 ? e10 : 0;
  }
  function nY() {
    return true;
  }
  function nG() {
    return false;
  }
  function nX(e10) {
    function n10(n11, t10, r10, l10, a10) {
      for (var o10 in this._reactName = n11, this._targetInst = r10, this.type = t10, this.nativeEvent = l10, this.target = a10, this.currentTarget = null, e10) e10.hasOwnProperty(o10) && (n11 = e10[o10], this[o10] = n11 ? n11(l10) : l10[o10]);
      return this.isDefaultPrevented = (null != l10.defaultPrevented ? l10.defaultPrevented : false === l10.returnValue) ? nY : nG, this.isPropagationStopped = nG, this;
    }
    return N(n10.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var e11 = this.nativeEvent;
      e11 && (e11.preventDefault ? e11.preventDefault() : "unknown" != typeof e11.returnValue && (e11.returnValue = false), this.isDefaultPrevented = nY);
    }, stopPropagation: function() {
      var e11 = this.nativeEvent;
      e11 && (e11.stopPropagation ? e11.stopPropagation() : "unknown" != typeof e11.cancelBubble && (e11.cancelBubble = true), this.isPropagationStopped = nY);
    }, persist: function() {
    }, isPersistent: nY }), n10;
  }
  var nZ, nJ, n0, n1, n2, n3 = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e10) {
    return e10.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, n4 = nX(n3), n6 = N({}, n3, { view: 0, detail: 0 }), n8 = nX(n6), n5 = N({}, n6, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: tu, button: 0, buttons: 0, relatedTarget: function(e10) {
    return void 0 === e10.relatedTarget ? e10.fromElement === e10.srcElement ? e10.toElement : e10.fromElement : e10.relatedTarget;
  }, movementX: function(e10) {
    return "movementX" in e10 ? e10.movementX : (e10 !== n2 && (n2 && "mousemove" === e10.type ? (n0 = e10.screenX - n2.screenX, n1 = e10.screenY - n2.screenY) : n1 = n0 = 0, n2 = e10), n0);
  }, movementY: function(e10) {
    return "movementY" in e10 ? e10.movementY : n1;
  } }), n9 = nX(n5), n7 = nX(N({}, n5, { dataTransfer: 0 })), te = nX(N({}, n6, { relatedTarget: 0 })), tn = nX(N({}, n3, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), tt = nX(N({}, n3, { clipboardData: function(e10) {
    return "clipboardData" in e10 ? e10.clipboardData : window.clipboardData;
  } })), tr = nX(N({}, n3, { data: 0 })), tl = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, ta = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, to = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ti(e10) {
    var n10 = this.nativeEvent;
    return n10.getModifierState ? n10.getModifierState(e10) : !!(e10 = to[e10]) && !!n10[e10];
  }
  function tu() {
    return ti;
  }
  var ts = nX(N({}, n6, { key: function(e10) {
    if (e10.key) {
      var n10 = tl[e10.key] || e10.key;
      if ("Unidentified" !== n10) return n10;
    }
    return "keypress" === e10.type ? 13 === (e10 = nK(e10)) ? "Enter" : String.fromCharCode(e10) : "keydown" === e10.type || "keyup" === e10.type ? ta[e10.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: tu, charCode: function(e10) {
    return "keypress" === e10.type ? nK(e10) : 0;
  }, keyCode: function(e10) {
    return "keydown" === e10.type || "keyup" === e10.type ? e10.keyCode : 0;
  }, which: function(e10) {
    return "keypress" === e10.type ? nK(e10) : "keydown" === e10.type || "keyup" === e10.type ? e10.keyCode : 0;
  } })), tc = nX(N({}, n5, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), tf = nX(N({}, n3, { submitter: 0 })), td = nX(N({}, n6, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: tu })), tp = nX(N({}, n3, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), tm = nX(N({}, n5, { deltaX: function(e10) {
    return "deltaX" in e10 ? e10.deltaX : "wheelDeltaX" in e10 ? -e10.wheelDeltaX : 0;
  }, deltaY: function(e10) {
    return "deltaY" in e10 ? e10.deltaY : "wheelDeltaY" in e10 ? -e10.wheelDeltaY : "wheelDelta" in e10 ? -e10.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 })), th = nX(N({}, n3, { newState: 0, oldState: 0 })), tg = [9, 13, 27, 32], tv = nB && "CompositionEvent" in window, ty = null;
  nB && "documentMode" in document && (ty = document.documentMode);
  var tb = nB && "TextEvent" in window && !ty, tw = nB && (!tv || ty && 8 < ty && 11 >= ty), tk = false;
  function tS(e10, n10) {
    switch (e10) {
      case "keyup":
        return -1 !== tg.indexOf(n10.keyCode);
      case "keydown":
        return 229 !== n10.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function tE(e10) {
    return "object" == typeof (e10 = e10.detail) && "data" in e10 ? e10.data : null;
  }
  var tx = false, tN = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function tC(e10) {
    var n10 = e10 && e10.nodeName && e10.nodeName.toLowerCase();
    return "input" === n10 ? !!tN[e10.type] : "textarea" === n10;
  }
  function tP(e10, n10, t10, r10) {
    nD ? nI ? nI.push(r10) : nI = [r10] : nD = r10, 0 < (n10 = ce(n10, "onChange")).length && (t10 = new n4("onChange", "change", null, t10, r10), e10.push({ event: t10, listeners: n10 }));
  }
  var t_ = null, tz = null;
  function tT(e10) {
    s2(e10, 0);
  }
  function tO(e10) {
    if (nh(e8(e10))) return e10;
  }
  function tL(e10, n10) {
    if ("change" === e10) return n10;
  }
  var tM = false;
  if (nB) {
    if (nB) {
      var tF = "oninput" in document;
      if (!tF) {
        var tD = document.createElement("div");
        tD.setAttribute("oninput", "return;"), tF = "function" == typeof tD.oninput;
      }
      r = tF;
    } else r = false;
    tM = r && (!document.documentMode || 9 < document.documentMode);
  }
  function tI() {
    t_ && (t_.detachEvent("onpropertychange", tA), tz = t_ = null);
  }
  function tA(e10) {
    if ("value" === e10.propertyName && tO(tz)) {
      var n10 = [];
      tP(n10, tz, e10, nF(e10)), nU(tT, n10);
    }
  }
  function tR(e10, n10, t10) {
    "focusin" === e10 ? (tI(), t_ = n10, tz = t10, t_.attachEvent("onpropertychange", tA)) : "focusout" === e10 && tI();
  }
  function tU(e10) {
    if ("selectionchange" === e10 || "keyup" === e10 || "keydown" === e10) return tO(tz);
  }
  function tV(e10, n10) {
    if ("click" === e10) return tO(n10);
  }
  function tB(e10, n10) {
    if ("input" === e10 || "change" === e10) return tO(n10);
  }
  var t$ = "function" == typeof Object.is ? Object.is : function(e10, n10) {
    return e10 === n10 && (0 !== e10 || 1 / e10 == 1 / n10) || e10 != e10 && n10 != n10;
  };
  function tj(e10, n10) {
    if (t$(e10, n10)) return true;
    if ("object" != typeof e10 || null === e10 || "object" != typeof n10 || null === n10) return false;
    var t10 = Object.keys(e10), r10 = Object.keys(n10);
    if (t10.length !== r10.length) return false;
    for (r10 = 0; r10 < t10.length; r10++) {
      var l10 = t10[r10];
      if (!em.call(n10, l10) || !t$(e10[l10], n10[l10])) return false;
    }
    return true;
  }
  function tH(e10) {
    if (void 0 === (e10 = e10 || ("u" > typeof document ? document : void 0))) return null;
    try {
      return e10.activeElement || e10.body;
    } catch (n10) {
      return e10.body;
    }
  }
  function tQ(e10) {
    for (; e10 && e10.firstChild; ) e10 = e10.firstChild;
    return e10;
  }
  function tW(e10, n10) {
    var t10, r10 = tQ(e10);
    for (e10 = 0; r10; ) {
      if (3 === r10.nodeType) {
        if (t10 = e10 + r10.textContent.length, e10 <= n10 && t10 >= n10) return { node: r10, offset: n10 - e10 };
        e10 = t10;
      }
      e: {
        for (; r10; ) {
          if (r10.nextSibling) {
            r10 = r10.nextSibling;
            break e;
          }
          r10 = r10.parentNode;
        }
        r10 = void 0;
      }
      r10 = tQ(r10);
    }
  }
  function tq(e10) {
    e10 = null != e10 && null != e10.ownerDocument && null != e10.ownerDocument.defaultView ? e10.ownerDocument.defaultView : window;
    for (var n10 = tH(e10.document); n10 instanceof e10.HTMLIFrameElement; ) {
      try {
        var t10 = "string" == typeof n10.contentWindow.location.href;
      } catch (e11) {
        t10 = false;
      }
      if (t10) e10 = n10.contentWindow;
      else break;
      n10 = tH(e10.document);
    }
    return n10;
  }
  function tK(e10) {
    var n10 = e10 && e10.nodeName && e10.nodeName.toLowerCase();
    return n10 && ("input" === n10 && ("text" === e10.type || "search" === e10.type || "tel" === e10.type || "url" === e10.type || "password" === e10.type) || "textarea" === n10 || "true" === e10.contentEditable);
  }
  var tY = nB && "documentMode" in document && 11 >= document.documentMode, tG = null, tX = null, tZ = null, tJ = false;
  function t0(e10, n10, t10) {
    var r10 = t10.window === t10 ? t10.document : 9 === t10.nodeType ? t10 : t10.ownerDocument;
    tJ || null == tG || tG !== tH(r10) || (r10 = "selectionStart" in (r10 = tG) && tK(r10) ? { start: r10.selectionStart, end: r10.selectionEnd } : { anchorNode: (r10 = (r10.ownerDocument && r10.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r10.anchorOffset, focusNode: r10.focusNode, focusOffset: r10.focusOffset }, tZ && tj(tZ, r10) || (tZ = r10, 0 < (r10 = ce(tX, "onSelect")).length && (n10 = new n4("onSelect", "select", null, n10, t10), e10.push({ event: n10, listeners: r10 }), n10.target = tG)));
  }
  function t1(e10, n10) {
    var t10 = {};
    return t10[e10.toLowerCase()] = n10.toLowerCase(), t10["Webkit" + e10] = "webkit" + n10, t10["Moz" + e10] = "moz" + n10, t10;
  }
  var t2 = { animationend: t1("Animation", "AnimationEnd"), animationiteration: t1("Animation", "AnimationIteration"), animationstart: t1("Animation", "AnimationStart"), transitionrun: t1("Transition", "TransitionRun"), transitionstart: t1("Transition", "TransitionStart"), transitioncancel: t1("Transition", "TransitionCancel"), transitionend: t1("Transition", "TransitionEnd") }, t3 = {}, t4 = {};
  function t6(e10) {
    if (t3[e10]) return t3[e10];
    if (!t2[e10]) return e10;
    var n10, t10 = t2[e10];
    for (n10 in t10) if (t10.hasOwnProperty(n10) && n10 in t4) return t3[e10] = t10[n10];
    return e10;
  }
  nB && (t4 = document.createElement("div").style, "AnimationEvent" in window || (delete t2.animationend.animation, delete t2.animationiteration.animation, delete t2.animationstart.animation), "TransitionEvent" in window || delete t2.transitionend.transition);
  var t8 = t6("animationend"), t5 = t6("animationiteration"), t9 = t6("animationstart"), t7 = t6("transitionrun"), re = t6("transitionstart"), rn = t6("transitioncancel"), rt = t6("transitionend"), rr = /* @__PURE__ */ new Map(), rl = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ra(e10, n10) {
    rr.set(e10, n10), nt(n10, [e10]);
  }
  rl.push("scrollEnd");
  var ro = 0;
  function ri(e10, n10) {
    return null != e10.name && "auto" !== e10.name ? e10.name : null !== n10.autoName ? n10.autoName : n10.autoName = e10 = "_" + (e10 = uJ.identifierPrefix) + "t_" + (ro++).toString(32) + "_";
  }
  function ru(e10) {
    if (null == e10 || "string" == typeof e10) return e10;
    var n10 = null, t10 = u5;
    if (null !== t10) for (var r10 = 0; r10 < t10.length; r10++) {
      var l10 = e10[t10[r10]];
      if (null != l10) {
        if ("none" === l10) return "none";
        n10 = null == n10 ? l10 : n10 + " " + l10;
      }
    }
    return null == n10 ? e10.default : n10;
  }
  function rs(e10, n10) {
    return e10 = ru(e10), null == (n10 = ru(n10)) ? "auto" === e10 ? null : e10 : "auto" === n10 ? null : n10;
  }
  var rc = "function" == typeof reportError ? reportError : function(e10) {
    if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
      var n10 = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: "object" == typeof e10 && null !== e10 && "string" == typeof e10.message ? String(e10.message) : String(e10), error: e10 });
      if (!window.dispatchEvent(n10)) return;
    } else if ("object" == typeof l.default && "function" == typeof l.default.emit) return void l.default.emit("uncaughtException", e10);
    console.error(e10);
  }, rf = [], rd = 0, rp = 0;
  function rm() {
    for (var e10 = rd, n10 = rp = rd = 0; n10 < e10; ) {
      var t10 = rf[n10];
      rf[n10++] = null;
      var r10 = rf[n10];
      rf[n10++] = null;
      var l10 = rf[n10];
      rf[n10++] = null;
      var a10 = rf[n10];
      if (rf[n10++] = null, null !== r10 && null !== l10) {
        var o10 = r10.pending;
        null === o10 ? l10.next = l10 : (l10.next = o10.next, o10.next = l10), r10.pending = l10;
      }
      0 !== a10 && ry(t10, l10, a10);
    }
  }
  function rh(e10, n10, t10, r10) {
    rf[rd++] = e10, rf[rd++] = n10, rf[rd++] = t10, rf[rd++] = r10, rp |= r10, e10.lanes |= r10, null !== (e10 = e10.alternate) && (e10.lanes |= r10);
  }
  function rg(e10, n10, t10, r10) {
    return rh(e10, n10, t10, r10), rb(e10);
  }
  function rv(e10, n10) {
    return rh(e10, null, null, n10), rb(e10);
  }
  function ry(e10, n10, t10) {
    e10.lanes |= t10;
    var r10 = e10.alternate;
    null !== r10 && (r10.lanes |= t10);
    for (var l10 = false, a10 = e10.return; null !== a10; ) a10.childLanes |= t10, null !== (r10 = a10.alternate) && (r10.childLanes |= t10), 22 === a10.tag && (null === (e10 = a10.stateNode) || 1 & e10._visibility || (l10 = true)), e10 = a10, a10 = a10.return;
    return 3 === e10.tag ? (a10 = e10.stateNode, l10 && null !== n10 && (l10 = 31 - e_(t10), null === (r10 = (e10 = a10.hiddenUpdates)[l10]) ? e10[l10] = [n10] : r10.push(n10), n10.lane = 536870912 | t10), a10) : null;
  }
  function rb(e10) {
    if (50 < u9) throw u9 = 0, u7 = null, Error(s(185));
    for (var n10 = e10.return; null !== n10; ) n10 = (e10 = n10).return;
    return 3 === e10.tag ? e10.stateNode : null;
  }
  var rw = {};
  function rk(e10, n10, t10, r10) {
    this.tag = e10, this.key = t10, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n10, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r10, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function rS(e10, n10, t10, r10) {
    return new rk(e10, n10, t10, r10);
  }
  function rE(e10) {
    return !(!(e10 = e10.prototype) || !e10.isReactComponent);
  }
  function rx(e10, n10) {
    var t10 = e10.alternate;
    return null === t10 ? ((t10 = rS(e10.tag, n10, e10.key, e10.mode)).elementType = e10.elementType, t10.type = e10.type, t10.stateNode = e10.stateNode, t10.alternate = e10, e10.alternate = t10) : (t10.pendingProps = n10, t10.type = e10.type, t10.flags = 0, t10.subtreeFlags = 0, t10.deletions = null), t10.flags = 1206910976 & e10.flags, t10.childLanes = e10.childLanes, t10.lanes = e10.lanes, t10.child = e10.child, t10.memoizedProps = e10.memoizedProps, t10.memoizedState = e10.memoizedState, t10.updateQueue = e10.updateQueue, n10 = e10.dependencies, t10.dependencies = null === n10 ? null : { lanes: n10.lanes, firstContext: n10.firstContext }, t10.sibling = e10.sibling, t10.index = e10.index, t10.ref = e10.ref, t10.refCleanup = e10.refCleanup, t10;
  }
  function rN(e10, n10) {
    e10.flags &= 1206910978;
    var t10 = e10.alternate;
    return null === t10 ? (e10.childLanes = 0, e10.lanes = n10, e10.child = null, e10.subtreeFlags = 0, e10.memoizedProps = null, e10.memoizedState = null, e10.updateQueue = null, e10.dependencies = null, e10.stateNode = null) : (e10.childLanes = t10.childLanes, e10.lanes = t10.lanes, e10.child = t10.child, e10.subtreeFlags = 0, e10.deletions = null, e10.memoizedProps = t10.memoizedProps, e10.memoizedState = t10.memoizedState, e10.updateQueue = t10.updateQueue, e10.type = t10.type, e10.dependencies = null === (n10 = t10.dependencies) ? null : { lanes: n10.lanes, firstContext: n10.firstContext }), e10;
  }
  function rC(e10, n10, t10, r10, l10, a10) {
    var o10 = 0;
    if ("function" == typeof (r10 = e10)) rE(r10) && (o10 = 1);
    else if ("string" == typeof r10) o10 = !(function(e11, n11, t11) {
      if (1 === t11 || null != n11.itemProp) return false;
      switch (e11) {
        case "meta":
        case "title":
          return true;
        case "style":
          if ("string" != typeof n11.precedence || "string" != typeof n11.href || "" === n11.href) break;
          return true;
        case "link":
          if ("string" != typeof n11.rel || "string" != typeof n11.href || "" === n11.href || n11.onLoad || n11.onError) break;
          if ("stylesheet" === n11.rel) return e11 = n11.disabled, "string" == typeof n11.precedence && null == e11;
          return true;
        case "script":
          if (n11.async && "function" != typeof n11.async && "symbol" != typeof n11.async && !n11.onLoad && !n11.onError && n11.src && "string" == typeof n11.src) return true;
      }
      return false;
    })(e10, t10, et.current) ? "html" === e10 || "head" === e10 || "body" === e10 ? 27 : 5 : 26;
    else e: switch (r10) {
      case U:
        return (e10 = rS(31, t10, n10, l10)).elementType = U, e10.lanes = a10, e10;
      case z:
        return rP(t10.children, l10, a10, n10);
      case T:
        o10 = 8, l10 |= 24;
        break;
      case O:
        return (e10 = rS(12, t10, n10, 2 | l10)).elementType = O, e10.lanes = a10, e10;
      case D:
        return (e10 = rS(13, t10, n10, l10)).elementType = D, e10.lanes = a10, e10;
      case I:
        return (e10 = rS(19, t10, n10, l10)).elementType = I, e10.lanes = a10, e10;
      case V:
      case $:
        return (e10 = rS(30, t10, n10, e10 = 32 | l10)).elementType = $, e10.lanes = a10, e10.stateNode = { autoName: null, paired: null, clones: null, ref: null }, e10;
      default:
        if ("object" == typeof r10 && null !== r10) switch (r10.$$typeof) {
          case M:
            o10 = 10;
            break e;
          case L:
            o10 = 9;
            break e;
          case F:
            o10 = 11;
            break e;
          case A:
            o10 = 14;
            break e;
          case R:
            o10 = 16, r10 = null;
            break e;
        }
        o10 = 29, t10 = Error(s(130, null === e10 ? "null" : typeof e10, "")), r10 = null;
    }
    return (n10 = rS(o10, t10, n10, l10)).elementType = e10, n10.type = r10, n10.lanes = a10, n10;
  }
  function rP(e10, n10, t10, r10) {
    return (e10 = rS(7, e10, r10, n10)).lanes = t10, e10;
  }
  function r_(e10, n10, t10) {
    return (e10 = rS(6, e10, null, n10)).lanes = t10, e10;
  }
  function rz(e10) {
    var n10 = rS(18, null, null, 0);
    return n10.stateNode = e10, n10;
  }
  function rT(e10, n10, t10) {
    return (n10 = rS(4, null !== e10.children ? e10.children : [], e10.key, n10)).lanes = t10, n10.stateNode = { containerInfo: e10.containerInfo, pendingChildren: null, implementation: e10.implementation }, n10;
  }
  var rO = /* @__PURE__ */ new WeakMap();
  function rL(e10, n10) {
    if ("object" == typeof e10 && null !== e10) {
      var t10 = rO.get(e10);
      return void 0 !== t10 ? t10 : (n10 = { value: e10, source: n10, stack: ep(n10) }, rO.set(e10, n10), n10);
    }
    return { value: e10, source: n10, stack: ep(n10) };
  }
  var rM = [], rF = 0, rD = null, rI = 0, rA = [], rR = 0, rU = null, rV = 1, rB = "";
  function r$(e10, n10) {
    rM[rF++] = rI, rM[rF++] = rD, rD = e10, rI = n10;
  }
  function rj(e10, n10, t10) {
    rA[rR++] = rV, rA[rR++] = rB, rA[rR++] = rU, rU = e10;
    var r10 = rV;
    e10 = rB;
    var l10 = 32 - e_(r10) - 1;
    r10 &= ~(1 << l10), t10 += 1;
    var a10 = 32 - e_(n10) + l10;
    if (30 < a10) {
      var o10 = l10 - l10 % 5;
      a10 = (r10 & (1 << o10) - 1).toString(32), r10 >>= o10, l10 -= o10, rV = 1 << 32 - e_(n10) + l10 | t10 << l10 | r10, rB = a10 + e10;
    } else rV = 1 << a10 | t10 << l10 | r10, rB = e10;
  }
  function rH(e10) {
    null !== e10.return && (r$(e10, 1), rj(e10, 1, 0));
  }
  function rQ(e10) {
    for (; e10 === rD; ) rD = rM[--rF], rM[rF] = null, rI = rM[--rF], rM[rF] = null;
    for (; e10 === rU; ) rU = rA[--rR], rA[rR] = null, rB = rA[--rR], rA[rR] = null, rV = rA[--rR], rA[rR] = null;
  }
  function rW(e10, n10) {
    rA[rR++] = rV, rA[rR++] = rB, rA[rR++] = rU, rV = n10.id, rB = n10.overflow, rU = e10;
  }
  var rq = null, rK = null, rY = false, rG = null, rX = false, rZ = Error(s(519));
  function rJ(e10) {
    var n10 = Error(s(418, 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? "text" : "HTML", ""));
    throw r6(rL(n10, e10)), rZ;
  }
  function r0(e10) {
    var n10 = e10.stateNode, t10 = e10.type, r10 = e10.memoizedProps;
    switch (n10[eK] = e10, n10[eY] = r10, t10) {
      case "dialog":
        s3("cancel", n10), s3("close", n10);
        break;
      case "iframe":
      case "object":
      case "embed":
        s3("load", n10);
        break;
      case "video":
      case "audio":
        for (t10 = 0; t10 < s0.length; t10++) s3(s0[t10], n10);
        break;
      case "source":
        s3("error", n10);
        break;
      case "img":
      case "image":
      case "link":
        s3("error", n10), s3("load", n10);
        break;
      case "details":
        s3("toggle", n10);
        break;
      case "input":
        s3("invalid", n10), nb(n10, r10.value, r10.defaultValue, r10.checked, r10.defaultChecked, r10.type, r10.name, true);
        break;
      case "select":
        s3("invalid", n10);
        break;
      case "textarea":
        s3("invalid", n10), nE(n10, r10.value, r10.defaultValue, r10.children);
    }
    "string" != typeof (t10 = r10.children) && "number" != typeof t10 && "bigint" != typeof t10 || n10.textContent === "" + t10 || true === r10.suppressHydrationWarning || co(n10.textContent, t10) ? (null != r10.popover && (s3("beforetoggle", n10), s3("toggle", n10)), null != r10.onScroll && s3("scroll", n10), null != r10.onScrollEnd && s3("scrollend", n10), null != r10.onClick && (n10.onclick = nL), n10 = true) : n10 = false, n10 || rJ(e10, true);
  }
  function r1(e10) {
    for (rq = e10.return; rq; ) switch (rq.tag) {
      case 5:
      case 31:
      case 13:
        rX = false;
        return;
      case 27:
      case 3:
        rX = true;
        return;
      default:
        rq = rq.return;
    }
  }
  function r2(e10) {
    if (e10 !== rq) return false;
    if (!rY) return r1(e10), rY = true, false;
    var n10, t10 = e10.tag;
    if ((n10 = 3 !== t10 && 27 !== t10) && ((n10 = 5 === t10) && (n10 = "form" === (n10 = e10.type) || "button" === n10 || cv(e10.type, e10.memoizedProps)), n10 = !n10), n10 && rK && rJ(e10), r1(e10), 13 === t10) {
      if (!(e10 = null !== (e10 = e10.memoizedState) ? e10.dehydrated : null)) throw Error(s(317));
      rK = c2(e10);
    } else if (31 === t10) {
      if (!(e10 = null !== (e10 = e10.memoizedState) ? e10.dehydrated : null)) throw Error(s(317));
      rK = c2(e10);
    } else 27 === t10 ? (t10 = rK, cx(e10.type) ? (e10 = c1, c1 = null, rK = e10) : rK = t10) : rK = rq ? c0(e10.stateNode.nextSibling) : null;
    return true;
  }
  function r3() {
    rK = rq = null, rY = false;
  }
  function r4() {
    var e10 = rG;
    return null !== e10 && (null === uQ ? uQ = e10 : uQ.push.apply(uQ, e10), rG = null), e10;
  }
  function r6(e10) {
    null === rG ? rG = [e10] : rG.push(e10);
  }
  var r8 = J(null), r5 = null, r9 = null;
  function r7(e10, n10, t10) {
    en(r8, n10._currentValue), n10._currentValue = t10;
  }
  function le(e10) {
    e10._currentValue = r8.current, ee(r8);
  }
  function ln(e10, n10, t10) {
    for (; null !== e10; ) {
      var r10 = e10.alternate;
      if ((e10.childLanes & n10) !== n10 ? (e10.childLanes |= n10, null !== r10 && (r10.childLanes |= n10)) : null !== r10 && (r10.childLanes & n10) !== n10 && (r10.childLanes |= n10), e10 === t10) break;
      e10 = e10.return;
    }
  }
  function lt(e10, n10, t10, r10) {
    var l10 = e10.child;
    for (null !== l10 && (l10.return = e10); null !== l10; ) {
      var a10 = l10.dependencies;
      if (null !== a10) {
        var o10 = l10.child;
        a10 = a10.firstContext;
        e: for (; null !== a10; ) {
          var i10 = a10;
          a10 = l10;
          for (var u10 = 0; u10 < n10.length; u10++) if (i10.context === n10[u10]) {
            a10.lanes |= t10, null !== (i10 = a10.alternate) && (i10.lanes |= t10), ln(a10.return, t10, e10), r10 || (o10 = null);
            break e;
          }
          a10 = i10.next;
        }
      } else if (18 === l10.tag) {
        if (null === (o10 = l10.return)) throw Error(s(341));
        o10.lanes |= t10, null !== (a10 = o10.alternate) && (a10.lanes |= t10), ln(o10, t10, e10), o10 = null;
      } else 13 === l10.tag && null !== l10.memoizedState && null === l10.memoizedState.dehydrated ? (l10.lanes |= t10, null !== (o10 = l10.alternate) && (o10.lanes |= t10), ln(l10.return, t10, e10), o10 = null !== (o10 = l10.child) ? o10.sibling : null) : o10 = l10.child;
      if (null !== o10) o10.return = l10;
      else for (o10 = l10; null !== o10; ) {
        if (o10 === e10) {
          o10 = null;
          break;
        }
        if (null !== (l10 = o10.sibling)) {
          l10.return = o10.return, o10 = l10;
          break;
        }
        o10 = o10.return;
      }
      l10 = o10;
    }
  }
  function lr(e10, n10, t10, r10) {
    e10 = null;
    for (var l10 = n10, a10 = false; null !== l10; ) {
      if (!a10) {
        if (0 != (524288 & l10.flags)) a10 = true;
        else if (0 != (262144 & l10.flags)) break;
      }
      if (10 === l10.tag) {
        var o10 = l10.alternate;
        if (null === o10) throw Error(s(387));
        if (null !== (o10 = o10.memoizedProps)) {
          var i10 = l10.type;
          t$(l10.pendingProps.value, o10.value) || (null !== e10 ? e10.push(i10) : e10 = [i10]);
        }
      } else if (l10 === ea.current) {
        if (null === (o10 = l10.alternate)) throw Error(s(387));
        o10.memoizedState.memoizedState !== l10.memoizedState.memoizedState && (null !== e10 ? e10.push(fP) : e10 = [fP]);
      }
      l10 = l10.return;
    }
    return null !== e10 && lt(n10, e10, t10, r10), n10.flags |= 262144, null !== e10;
  }
  function ll(e10) {
    for (e10 = e10.firstContext; null !== e10; ) {
      if (!t$(e10.context._currentValue, e10.memoizedValue)) return true;
      e10 = e10.next;
    }
    return false;
  }
  function la(e10) {
    r5 = e10, r9 = null, null !== (e10 = e10.dependencies) && (e10.firstContext = null);
  }
  function lo(e10) {
    return lu(r5, e10);
  }
  function li(e10, n10) {
    return null === r5 && la(e10), lu(e10, n10);
  }
  function lu(e10, n10) {
    var t10 = n10._currentValue;
    if (n10 = { context: n10, memoizedValue: t10, next: null }, null === r9) {
      if (null === e10) throw Error(s(308));
      r9 = n10, e10.dependencies = { lanes: 0, firstContext: n10 }, e10.flags |= 524288;
    } else r9 = r9.next = n10;
    return t10;
  }
  var ls = "u" > typeof AbortController ? AbortController : function() {
    var e10 = [], n10 = this.signal = { aborted: false, addEventListener: function(n11, t10) {
      e10.push(t10);
    } };
    this.abort = function() {
      n10.aborted = true, e10.forEach(function(e11) {
        return e11();
      });
    };
  }, lc = o.unstable_scheduleCallback, lf = o.unstable_NormalPriority, ld = { $$typeof: M, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function lp() {
    return { controller: new ls(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function lm(e10) {
    e10.refCount--, 0 === e10.refCount && lc(lf, function() {
      e10.controller.abort();
    });
  }
  function lh(e10, n10) {
    if (0 != (4194048 & e10.pendingLanes)) {
      var t10 = e10.transitionTypes;
      for (null === t10 && (t10 = e10.transitionTypes = []), e10 = 0; e10 < n10.length; e10++) {
        var r10 = n10[e10];
        -1 === t10.indexOf(r10) && t10.push(r10);
      }
    }
  }
  var lg = null, lv = null, ly = 0, lb = 0, lw = null;
  function lk() {
    if (0 == --ly && (lg = null, null !== lv)) {
      null !== lw && (lw.status = "fulfilled");
      var e10 = lv;
      lv = null, lb = 0, lw = null;
      for (var n10 = 0; n10 < e10.length; n10++) (0, e10[n10])();
    }
  }
  var lS = K.S;
  K.S = function(e10, n10) {
    if (uK = eb(), "object" == typeof n10 && null !== n10 && "function" == typeof n10.then && (function(e11) {
      if (null === lv) {
        var n11 = lv = [];
        ly = 0, lb = sG(), lw = { status: "pending", value: void 0, then: function(e12) {
          n11.push(e12);
        } };
      }
      ly++, e11.then(lk, lk);
    })(n10), null !== lg) for (var t10 = sA; null !== t10; ) lh(t10, lg), t10 = t10.next;
    if (null !== (t10 = e10.types)) {
      for (var r10 = sA; null !== r10; ) lh(r10, t10), r10 = r10.next;
      if (0 !== lb) {
        null === (r10 = lg) && (r10 = lg = []);
        for (var l10 = 0; l10 < t10.length; l10++) {
          var a10 = t10[l10];
          -1 === r10.indexOf(a10) && r10.push(a10);
        }
      }
    }
    null !== lS && lS(e10, n10);
  };
  var lE = J(null);
  function lx() {
    var e10 = lE.current;
    return null !== e10 ? e10 : uz.pooledCache;
  }
  function lN(e10, n10) {
    null === n10 ? en(lE, lE.current) : en(lE, n10.pool);
  }
  function lC() {
    var e10 = lx();
    return null === e10 ? null : { parent: ld._currentValue, pool: e10 };
  }
  var lP = Error(s(460)), l_ = Error(s(474)), lz = Error(s(542)), lT = { then: function() {
  } };
  function lO(e10) {
    return "fulfilled" === (e10 = e10.status) || "rejected" === e10;
  }
  function lL(e10, n10, t10) {
    switch (void 0 === (t10 = e10[t10]) ? e10.push(n10) : t10 !== n10 && (n10.then(nL, nL), n10 = t10), n10.status) {
      case "fulfilled":
        return n10.value;
      case "rejected":
        if (lI(e10 = n10.reason), void 0 === e10 && !("reason" in n10)) throw Error(s(600));
        throw e10;
      default:
        if ("string" == typeof n10.status) n10.then(nL, nL);
        else {
          if (null !== (e10 = uz) && 100 < e10.shellSuspendCounter) throw Error(s(482));
          (e10 = n10).status = "pending", e10.then(function(e11) {
            if ("pending" === n10.status) {
              var t11 = n10;
              t11.status = "fulfilled", t11.value = e11;
            }
          }, function(e11) {
            if ("pending" === n10.status) {
              var t11 = n10;
              t11.status = "rejected", t11.reason = e11;
            }
          });
        }
        switch (n10.status) {
          case "fulfilled":
            return n10.value;
          case "rejected":
            throw lI(e10 = n10.reason), e10;
        }
        throw lF = n10, lP;
    }
  }
  function lM(e10) {
    try {
      return (0, e10._init)(e10._payload);
    } catch (e11) {
      if (null !== e11 && "object" == typeof e11 && "function" == typeof e11.then) throw lF = e11, lP;
      throw e11;
    }
  }
  var lF = null;
  function lD() {
    if (null === lF) throw Error(s(459));
    var e10 = lF;
    return lF = null, e10;
  }
  function lI(e10) {
    if (e10 === lP || e10 === lz) throw Error(s(483));
  }
  var lA = null, lR = 0;
  function lU(e10) {
    var n10 = lR;
    return lR += 1, null === lA && (lA = []), lL(lA, e10, n10);
  }
  function lV(e10, n10) {
    e10.ref = void 0 !== (n10 = n10.props.ref) ? n10 : null;
  }
  function lB(e10, n10) {
    if (n10.$$typeof === C) throw Error(s(525));
    throw Error(s(31, "[object Object]" === (e10 = Object.prototype.toString.call(n10)) ? "object with keys {" + Object.keys(n10).join(", ") + "}" : e10));
  }
  function l$(e10) {
    function n10(n11, t11) {
      if (e10) {
        var r11 = n11.deletions;
        null === r11 ? (n11.deletions = [t11], n11.flags |= 16) : r11.push(t11);
      }
    }
    function t10(t11, r11) {
      if (!e10) return null;
      for (; null !== r11; ) n10(t11, r11), r11 = r11.sibling;
      return null;
    }
    function r10(e11) {
      for (var n11 = /* @__PURE__ */ new Map(); null !== e11; ) null === e11.key ? n11.set(e11.index, e11) : n11.set(e11.key, e11), e11 = e11.sibling;
      return n11;
    }
    function l10(e11, n11) {
      return (e11 = rx(e11, n11)).index = 0, e11.sibling = null, e11;
    }
    function a10(n11, t11, r11) {
      return (n11.index = r11, e10) ? null !== (r11 = n11.alternate) ? (r11 = r11.index) < t11 ? (n11.flags |= 2, t11) : r11 : (n11.flags |= 134217730, t11) : (n11.flags |= 1048576, t11);
    }
    function o10(n11) {
      return e10 && null === n11.alternate && (n11.flags |= 134217730), n11;
    }
    function i10(e11, n11, t11, r11) {
      return null === n11 || 6 !== n11.tag ? (n11 = r_(t11, e11.mode, r11)).return = e11 : (n11 = l10(n11, t11)).return = e11, n11;
    }
    function u10(e11, n11, t11, r11) {
      var a11 = t11.type;
      return a11 === z ? (lV(e11 = f10(e11, n11, t11.props.children, r11, t11.key), t11), e11) : (null !== n11 && (n11.elementType === a11 || "object" == typeof a11 && null !== a11 && a11.$$typeof === R && lM(a11) === n11.type) ? lV(n11 = l10(n11, t11.props), t11) : lV(n11 = rC(t11.type, t11.key, t11.props, null, e11.mode, r11), t11), n11.return = e11, n11);
    }
    function c10(e11, n11, t11, r11) {
      return null === n11 || 4 !== n11.tag || n11.stateNode.containerInfo !== t11.containerInfo || n11.stateNode.implementation !== t11.implementation ? (n11 = rT(t11, e11.mode, r11)).return = e11 : (n11 = l10(n11, t11.children || [])).return = e11, n11;
    }
    function f10(e11, n11, t11, r11, a11) {
      return null === n11 || 7 !== n11.tag ? (n11 = rP(t11, e11.mode, r11, a11)).return = e11 : (n11 = l10(n11, t11)).return = e11, n11;
    }
    function d2(e11, n11, t11) {
      if ("string" == typeof n11 && "" !== n11 || "number" == typeof n11 || "bigint" == typeof n11) return (n11 = r_("" + n11, e11.mode, t11)).return = e11, n11;
      if ("object" == typeof n11 && null !== n11) {
        switch (n11.$$typeof) {
          case P:
            return lV(t11 = rC(n11.type, n11.key, n11.props, null, e11.mode, t11), n11), t11.return = e11, t11;
          case _:
            return (n11 = rT(n11, e11.mode, t11)).return = e11, n11;
          case R:
            return d2(e11, n11 = lM(n11), t11);
        }
        if (q(n11) || Q(n11)) return (n11 = rP(n11, e11.mode, t11, null)).return = e11, n11;
        if ("function" == typeof n11.then) return d2(e11, lU(n11), t11);
        if (n11.$$typeof === M) return d2(e11, li(e11, n11), t11);
        lB(e11, n11);
      }
      return null;
    }
    function p2(e11, n11, t11, r11) {
      var l11 = null !== n11 ? n11.key : null;
      if ("string" == typeof t11 && "" !== t11 || "number" == typeof t11 || "bigint" == typeof t11) return null !== l11 ? null : i10(e11, n11, "" + t11, r11);
      if ("object" == typeof t11 && null !== t11) {
        switch (t11.$$typeof) {
          case P:
            return t11.key === l11 ? u10(e11, n11, t11, r11) : null;
          case _:
            return t11.key === l11 ? c10(e11, n11, t11, r11) : null;
          case R:
            return p2(e11, n11, t11 = lM(t11), r11);
        }
        if (q(t11) || Q(t11)) return null !== l11 ? null : f10(e11, n11, t11, r11, null);
        if ("function" == typeof t11.then) return p2(e11, n11, lU(t11), r11);
        if (t11.$$typeof === M) return p2(e11, n11, li(e11, t11), r11);
        lB(e11, t11);
      }
      return null;
    }
    function m2(e11, n11, t11, r11, l11) {
      if ("string" == typeof r11 && "" !== r11 || "number" == typeof r11 || "bigint" == typeof r11) return i10(n11, e11 = e11.get(t11) || null, "" + r11, l11);
      if ("object" == typeof r11 && null !== r11) {
        switch (r11.$$typeof) {
          case P:
            return u10(n11, e11 = e11.get(null === r11.key ? t11 : r11.key) || null, r11, l11);
          case _:
            return c10(n11, e11 = e11.get(null === r11.key ? t11 : r11.key) || null, r11, l11);
          case R:
            return m2(e11, n11, t11, r11 = lM(r11), l11);
        }
        if (q(r11) || Q(r11)) return f10(n11, e11 = e11.get(t11) || null, r11, l11, null);
        if ("function" == typeof r11.then) return m2(e11, n11, t11, lU(r11), l11);
        if (r11.$$typeof === M) return m2(e11, n11, t11, li(n11, r11), l11);
        lB(n11, r11);
      }
      return null;
    }
    return function(i11, u11, c11, f11) {
      try {
        lR = 0;
        var h2 = (function i12(u12, c12, f12, h3) {
          if ("object" == typeof f12 && null !== f12 && f12.type === z && null === f12.key && void 0 === f12.props.ref && (f12 = f12.props.children), "object" == typeof f12 && null !== f12) {
            switch (f12.$$typeof) {
              case P:
                e: {
                  for (var g3 = f12.key; null !== c12; ) {
                    if (c12.key === g3) {
                      if ((g3 = f12.type) === z) {
                        if (7 === c12.tag) {
                          t10(u12, c12.sibling), lV(h3 = l10(c12, f12.props.children), f12), h3.return = u12, u12 = h3;
                          break e;
                        }
                      } else if (c12.elementType === g3 || "object" == typeof g3 && null !== g3 && g3.$$typeof === R && lM(g3) === c12.type) {
                        t10(u12, c12.sibling), lV(h3 = l10(c12, f12.props), f12), h3.return = u12, u12 = h3;
                        break e;
                      }
                      t10(u12, c12);
                      break;
                    }
                    n10(u12, c12), c12 = c12.sibling;
                  }
                  f12.type === z ? lV(h3 = rP(f12.props.children, u12.mode, h3, f12.key), f12) : lV(h3 = rC(f12.type, f12.key, f12.props, null, u12.mode, h3), f12), h3.return = u12, u12 = h3;
                }
                return o10(u12);
              case _:
                e: {
                  for (g3 = f12.key; null !== c12; ) {
                    if (c12.key === g3) if (4 === c12.tag && c12.stateNode.containerInfo === f12.containerInfo && c12.stateNode.implementation === f12.implementation) {
                      t10(u12, c12.sibling), (h3 = l10(c12, f12.children || [])).return = u12, u12 = h3;
                      break e;
                    } else {
                      t10(u12, c12);
                      break;
                    }
                    n10(u12, c12), c12 = c12.sibling;
                  }
                  (h3 = rT(f12, u12.mode, h3)).return = u12, u12 = h3;
                }
                return o10(u12);
              case R:
                return i12(u12, c12, f12 = lM(f12), h3);
            }
            if (q(f12)) return (function(l11, o11, i13, u13) {
              for (var s10 = null, c13 = null, f13 = o11, h4 = o11 = 0, g4 = null; null !== f13 && h4 < i13.length; h4++) {
                f13.index > h4 ? (g4 = f13, f13 = null) : g4 = f13.sibling;
                var v2 = p2(l11, f13, i13[h4], u13);
                if (null === v2) {
                  null === f13 && (f13 = g4);
                  break;
                }
                e10 && f13 && null === v2.alternate && n10(l11, f13), o11 = a10(v2, o11, h4), null === c13 ? s10 = v2 : c13.sibling = v2, c13 = v2, f13 = g4;
              }
              if (h4 === i13.length) return t10(l11, f13), rY && r$(l11, h4), s10;
              if (null === f13) {
                for (; h4 < i13.length; h4++) null !== (f13 = d2(l11, i13[h4], u13)) && (o11 = a10(f13, o11, h4), null === c13 ? s10 = f13 : c13.sibling = f13, c13 = f13);
                return rY && r$(l11, h4), s10;
              }
              for (f13 = r10(f13); h4 < i13.length; h4++) null !== (g4 = m2(f13, l11, h4, i13[h4], u13)) && (e10 && null !== (v2 = g4.alternate) && f13.delete(null === v2.key ? h4 : v2.key), o11 = a10(g4, o11, h4), null === c13 ? s10 = g4 : c13.sibling = g4, c13 = g4);
              return e10 && f13.forEach(function(e11) {
                return n10(l11, e11);
              }), rY && r$(l11, h4), s10;
            })(u12, c12, f12, h3);
            if (Q(f12)) {
              if ("function" != typeof (g3 = Q(f12))) throw Error(s(150));
              return (function(l11, o11, i13, u13) {
                if (null == i13) throw Error(s(151));
                for (var c13 = null, f13 = null, h4 = o11, g4 = o11 = 0, v2 = null, y2 = i13.next(); null !== h4 && !y2.done; g4++, y2 = i13.next()) {
                  h4.index > g4 ? (v2 = h4, h4 = null) : v2 = h4.sibling;
                  var b2 = p2(l11, h4, y2.value, u13);
                  if (null === b2) {
                    null === h4 && (h4 = v2);
                    break;
                  }
                  e10 && h4 && null === b2.alternate && n10(l11, h4), o11 = a10(b2, o11, g4), null === f13 ? c13 = b2 : f13.sibling = b2, f13 = b2, h4 = v2;
                }
                if (y2.done) return t10(l11, h4), rY && r$(l11, g4), c13;
                if (null === h4) {
                  for (; !y2.done; g4++, y2 = i13.next()) null !== (y2 = d2(l11, y2.value, u13)) && (o11 = a10(y2, o11, g4), null === f13 ? c13 = y2 : f13.sibling = y2, f13 = y2);
                  return rY && r$(l11, g4), c13;
                }
                for (h4 = r10(h4); !y2.done; g4++, y2 = i13.next()) null !== (y2 = m2(h4, l11, g4, y2.value, u13)) && (e10 && null !== (v2 = y2.alternate) && h4.delete(null === v2.key ? g4 : v2.key), o11 = a10(y2, o11, g4), null === f13 ? c13 = y2 : f13.sibling = y2, f13 = y2);
                return e10 && h4.forEach(function(e11) {
                  return n10(l11, e11);
                }), rY && r$(l11, g4), c13;
              })(u12, c12, f12 = g3.call(f12), h3);
            }
            if ("function" == typeof f12.then) return i12(u12, c12, lU(f12), h3);
            if (f12.$$typeof === M) return i12(u12, c12, li(u12, f12), h3);
            lB(u12, f12);
          }
          return "string" == typeof f12 && "" !== f12 || "number" == typeof f12 || "bigint" == typeof f12 ? (f12 = "" + f12, null !== c12 && 6 === c12.tag ? (t10(u12, c12.sibling), (h3 = l10(c12, f12)).return = u12) : (t10(u12, c12), (h3 = r_(f12, u12.mode, h3)).return = u12), o10(u12 = h3)) : t10(u12, c12);
        })(i11, u11, c11, f11);
        return lA = null, h2;
      } catch (e11) {
        if (e11 === lP || e11 === lz) throw e11;
        var g2 = rS(29, e11, null, i11.mode);
        return g2.lanes = f11, g2.return = i11, g2;
      } finally {
      }
    };
  }
  var lj = l$(true), lH = l$(false), lQ = false;
  function lW(e10) {
    e10.updateQueue = { baseState: e10.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function lq(e10, n10) {
    e10 = e10.updateQueue, n10.updateQueue === e10 && (n10.updateQueue = { baseState: e10.baseState, firstBaseUpdate: e10.firstBaseUpdate, lastBaseUpdate: e10.lastBaseUpdate, shared: e10.shared, callbacks: null });
  }
  function lK(e10) {
    return { lane: e10, tag: 0, payload: null, callback: null, next: null };
  }
  function lY(e10, n10, t10) {
    var r10 = e10.updateQueue;
    if (null === r10) return null;
    if (r10 = r10.shared, 0 != (2 & u_)) {
      var l10 = r10.pending;
      return null === l10 ? n10.next = n10 : (n10.next = l10.next, l10.next = n10), r10.pending = n10, n10 = rb(e10), ry(e10, null, t10), n10;
    }
    return rh(e10, r10, n10, t10), rb(e10);
  }
  function lG(e10, n10, t10) {
    if (null !== (n10 = n10.updateQueue) && (n10 = n10.shared, 0 != (4194048 & t10))) {
      var r10 = n10.lanes;
      r10 &= e10.pendingLanes, t10 |= r10, n10.lanes = t10, eB(e10, t10);
    }
  }
  function lX(e10, n10) {
    var t10 = e10.updateQueue, r10 = e10.alternate;
    if (null !== r10 && t10 === (r10 = r10.updateQueue)) {
      var l10 = null, a10 = null;
      if (null !== (t10 = t10.firstBaseUpdate)) {
        do {
          var o10 = { lane: t10.lane, tag: t10.tag, payload: t10.payload, callback: null, next: null };
          null === a10 ? l10 = a10 = o10 : a10 = a10.next = o10, t10 = t10.next;
        } while (null !== t10);
        null === a10 ? l10 = a10 = n10 : a10 = a10.next = n10;
      } else l10 = a10 = n10;
      t10 = { baseState: r10.baseState, firstBaseUpdate: l10, lastBaseUpdate: a10, shared: r10.shared, callbacks: r10.callbacks }, e10.updateQueue = t10;
      return;
    }
    null === (e10 = t10.lastBaseUpdate) ? t10.firstBaseUpdate = n10 : e10.next = n10, t10.lastBaseUpdate = n10;
  }
  var lZ = false;
  function lJ() {
    if (lZ) {
      var e10 = lw;
      if (null !== e10) throw e10;
    }
  }
  function l0(e10, n10, t10, r10) {
    lZ = false;
    var l10 = e10.updateQueue;
    lQ = false;
    var a10 = l10.firstBaseUpdate, o10 = l10.lastBaseUpdate, i10 = l10.shared.pending;
    if (null !== i10) {
      l10.shared.pending = null;
      var u10 = i10, s10 = u10.next;
      u10.next = null, null === o10 ? a10 = s10 : o10.next = s10, o10 = u10;
      var c10 = e10.alternate;
      null !== c10 && (i10 = (c10 = c10.updateQueue).lastBaseUpdate) !== o10 && (null === i10 ? c10.firstBaseUpdate = s10 : i10.next = s10, c10.lastBaseUpdate = u10);
    }
    if (null !== a10) {
      var f10 = l10.baseState;
      for (o10 = 0, c10 = s10 = u10 = null, i10 = a10; ; ) {
        var d2 = -536870913 & i10.lane, p2 = d2 !== i10.lane;
        if (p2 ? (uO & d2) === d2 : (r10 & d2) === d2) {
          0 !== d2 && d2 === lb && (lZ = true), null !== c10 && (c10 = c10.next = { lane: 0, tag: i10.tag, payload: i10.payload, callback: null, next: null });
          e: {
            var m2 = e10, h2 = i10;
            switch (d2 = n10, h2.tag) {
              case 1:
                if ("function" == typeof (m2 = h2.payload)) {
                  f10 = m2.call(t10, f10, d2);
                  break e;
                }
                f10 = m2;
                break e;
              case 3:
                m2.flags = -65537 & m2.flags | 128;
              case 0:
                if (null == (d2 = "function" == typeof (m2 = h2.payload) ? m2.call(t10, f10, d2) : m2)) break e;
                f10 = N({}, f10, d2);
                break e;
              case 2:
                lQ = true;
            }
          }
          null !== (d2 = i10.callback) && (e10.flags |= 64, p2 && (e10.flags |= 8192), null === (p2 = l10.callbacks) ? l10.callbacks = [d2] : p2.push(d2));
        } else p2 = { lane: d2, tag: i10.tag, payload: i10.payload, callback: i10.callback, next: null }, null === c10 ? (s10 = c10 = p2, u10 = f10) : c10 = c10.next = p2, o10 |= d2;
        if (null === (i10 = i10.next)) if (null === (i10 = l10.shared.pending)) break;
        else i10 = (p2 = i10).next, p2.next = null, l10.lastBaseUpdate = p2, l10.shared.pending = null;
      }
      null === c10 && (u10 = f10), l10.baseState = u10, l10.firstBaseUpdate = s10, l10.lastBaseUpdate = c10, null === a10 && (l10.shared.lanes = 0), uU |= o10, e10.lanes = o10, e10.memoizedState = f10;
    }
  }
  function l1(e10, n10) {
    if ("function" != typeof e10) throw Error(s(191, e10));
    e10.call(n10);
  }
  function l2(e10, n10) {
    var t10 = e10.callbacks;
    if (null !== t10) for (e10.callbacks = null, e10 = 0; e10 < t10.length; e10++) l1(t10[e10], n10);
  }
  var l3 = J(null), l4 = J(0);
  function l6(e10, n10) {
    en(l4, e10 = uA), en(l3, n10), uA = e10 | n10.baseLanes;
  }
  function l8() {
    en(l4, uA), en(l3, l3.current);
  }
  function l5() {
    uA = l4.current, ee(l3), ee(l4);
  }
  var l9 = J(null), l7 = null;
  function ae(e10) {
    var n10 = e10.alternate;
    en(aa, 1 & aa.current), en(l9, e10), null === l7 && (null === n10 || null !== l3.current ? l7 = e10 : null !== n10.memoizedState && (l7 = e10));
  }
  function an(e10) {
    en(aa, aa.current), en(l9, e10), null === l7 && (l7 = e10);
  }
  function at(e10) {
    22 === e10.tag ? (en(aa, aa.current), en(l9, e10), null === l7 && (l7 = e10)) : ar();
  }
  function ar() {
    en(aa, aa.current), en(l9, l9.current);
  }
  function al(e10) {
    ee(l9), l7 === e10 && (l7 = null), ee(aa);
  }
  var aa = J(0);
  function ao(e10, n10) {
    en(l9, l9.current), en(aa, n10);
  }
  function ai(e10) {
    ee(aa), ee(l9), l7 === e10 && (l7 = null);
  }
  function au(e10) {
    for (var n10 = e10; null !== n10; ) {
      if (13 === n10.tag) {
        var t10 = n10.memoizedState;
        if (null !== t10 && (null === (t10 = t10.dehydrated) || cZ(t10) || cJ(t10))) return n10;
      } else if (19 === n10.tag && "independent" !== n10.memoizedProps.revealOrder) {
        if (0 != (128 & n10.flags)) return n10;
      } else if (null !== n10.child) {
        n10.child.return = n10, n10 = n10.child;
        continue;
      }
      if (n10 === e10) break;
      for (; null === n10.sibling; ) {
        if (null === n10.return || n10.return === e10) return null;
        n10 = n10.return;
      }
      n10.sibling.return = n10.return, n10 = n10.sibling;
    }
    return null;
  }
  var as = 0, ac = null, af = null, ad = null, ap = false, am = false, ah = false, ag = 0, av = 0, ay = null, ab = 0;
  function aw() {
    throw Error(s(321));
  }
  function ak(e10, n10) {
    if (null === n10) return false;
    for (var t10 = 0; t10 < n10.length && t10 < e10.length; t10++) if (!t$(e10[t10], n10[t10])) return false;
    return true;
  }
  function aS(e10, n10, t10, r10, l10, a10) {
    return as = a10, ac = n10, n10.memoizedState = null, n10.updateQueue = null, n10.lanes = 0, K.H = null === e10 || null === e10.memoizedState ? o_ : oz, ah = false, a10 = t10(r10, l10), ah = false, am && (a10 = ax(n10, t10, r10, l10)), aE(e10), a10;
  }
  function aE(e10) {
    K.H = oP;
    var n10 = null !== af && null !== af.next;
    if (as = 0, ad = af = ac = null, ap = false, av = 0, ay = null, n10) throw Error(s(300));
    null === e10 || oQ || null !== (e10 = e10.dependencies) && ll(e10) && (oQ = true);
  }
  function ax(e10, n10, t10, r10) {
    ac = e10;
    var l10 = 0;
    do {
      if (am && (ay = null), av = 0, am = false, 25 <= l10) throw Error(s(301));
      if (l10 += 1, ad = af = null, null != e10.updateQueue) {
        var a10 = e10.updateQueue;
        a10.lastEffect = null, a10.events = null, a10.stores = null, null != a10.memoCache && (a10.memoCache.index = 0);
      }
      K.H = oT, a10 = n10(t10, r10);
    } while (am);
    return a10;
  }
  function aN() {
    var e10 = K.H, n10 = e10.useState()[0];
    return n10 = "function" == typeof n10.then ? aL(n10) : n10, e10 = e10.useState()[0], (null !== af ? af.memoizedState : null) !== e10 && (ac.flags |= 1024), n10;
  }
  function aC() {
    var e10 = 0 !== ag;
    return ag = 0, e10;
  }
  function aP(e10, n10, t10) {
    n10.updateQueue = e10.updateQueue, n10.flags &= -2053, e10.lanes &= ~t10;
  }
  function a_(e10) {
    if (ap) {
      for (e10 = e10.memoizedState; null !== e10; ) {
        var n10 = e10.queue;
        null !== n10 && (n10.pending = null), e10 = e10.next;
      }
      ap = false;
    }
    as = 0, ad = af = ac = null, am = false, av = ag = 0, ay = null;
  }
  function az() {
    var e10 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return null === ad ? ac.memoizedState = ad = e10 : ad = ad.next = e10, ad;
  }
  function aT() {
    if (null === af) {
      var e10 = ac.alternate;
      e10 = null !== e10 ? e10.memoizedState : null;
    } else e10 = af.next;
    var n10 = null === ad ? ac.memoizedState : ad.next;
    if (null !== n10) ad = n10, af = e10;
    else {
      if (null === e10) {
        if (null === ac.alternate) throw Error(s(467));
        throw Error(s(310));
      }
      e10 = { memoizedState: (af = e10).memoizedState, baseState: af.baseState, baseQueue: af.baseQueue, queue: af.queue, next: null }, null === ad ? ac.memoizedState = ad = e10 : ad = ad.next = e10;
    }
    return ad;
  }
  function aO() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function aL(e10) {
    var n10 = av;
    return av += 1, null === ay && (ay = []), e10 = lL(ay, e10, n10), n10 = ac, null === (null === ad ? n10.memoizedState : ad.next) && (K.H = null === (n10 = n10.alternate) || null === n10.memoizedState ? o_ : oz), e10;
  }
  function aM(e10) {
    if (null !== e10 && "object" == typeof e10) {
      if ("function" == typeof e10.then) return aL(e10);
      if (e10.$$typeof === j) return;
      if (e10.$$typeof === M) return lo(e10);
    }
    throw Error(s(438, String(e10)));
  }
  function aF(e10) {
    var n10 = null, t10 = ac.updateQueue;
    if (null !== t10 && (n10 = t10.memoCache), null == n10) {
      var r10 = ac.alternate;
      null !== r10 && null !== (r10 = r10.updateQueue) && null != (r10 = r10.memoCache) && (n10 = { data: r10.data.map(function(e11) {
        return e11.slice();
      }), index: 0 });
    }
    if (null == n10 && (n10 = { data: [], index: 0 }), null === t10 && (t10 = aO(), ac.updateQueue = t10), t10.memoCache = n10, void 0 === (t10 = n10.data[n10.index])) for (t10 = n10.data[n10.index] = Array(e10), r10 = 0; r10 < e10; r10++) t10[r10] = B;
    return n10.index++, t10;
  }
  function aD(e10, n10) {
    return "function" == typeof n10 ? n10(e10) : n10;
  }
  function aI(e10) {
    return aA(aT(), af, e10);
  }
  function aA(e10, n10, t10) {
    var r10 = e10.queue;
    if (null === r10) throw Error(s(311));
    r10.lastRenderedReducer = t10;
    var l10 = e10.baseQueue, a10 = r10.pending;
    if (null !== a10) {
      if (null !== l10) {
        var o10 = l10.next;
        l10.next = a10.next, a10.next = o10;
      }
      n10.baseQueue = l10 = a10, r10.pending = null;
    }
    if (a10 = e10.baseState, null === l10) e10.memoizedState = a10;
    else {
      n10 = l10.next;
      var i10 = o10 = null, u10 = null, c10 = n10, f10 = false;
      do {
        var d2 = -536870913 & c10.lane;
        if (d2 !== c10.lane ? (uO & d2) === d2 : (as & d2) === d2) {
          var p2 = c10.revertLane;
          if (0 === p2) null !== u10 && (u10 = u10.next = { lane: 0, revertLane: 0, gesture: null, action: c10.action, hasEagerState: c10.hasEagerState, eagerState: c10.eagerState, next: null }), d2 === lb && (f10 = true);
          else if ((as & p2) === p2) {
            c10 = c10.next, p2 === lb && (f10 = true);
            continue;
          } else d2 = { lane: 0, revertLane: c10.revertLane, gesture: null, action: c10.action, hasEagerState: c10.hasEagerState, eagerState: c10.eagerState, next: null }, null === u10 ? (i10 = u10 = d2, o10 = a10) : u10 = u10.next = d2, ac.lanes |= p2, uU |= p2;
          d2 = c10.action, ah && t10(a10, d2), a10 = c10.hasEagerState ? c10.eagerState : t10(a10, d2);
        } else p2 = { lane: d2, revertLane: c10.revertLane, gesture: c10.gesture, action: c10.action, hasEagerState: c10.hasEagerState, eagerState: c10.eagerState, next: null }, null === u10 ? (i10 = u10 = p2, o10 = a10) : u10 = u10.next = p2, ac.lanes |= d2, uU |= d2;
        c10 = c10.next;
      } while (null !== c10 && c10 !== n10);
      if (null === u10 ? o10 = a10 : u10.next = i10, !t$(a10, e10.memoizedState) && (oQ = true, f10 && null !== (t10 = lw))) throw t10;
      e10.memoizedState = a10, e10.baseState = o10, e10.baseQueue = u10, r10.lastRenderedState = a10;
    }
    return null === l10 && (r10.lanes = 0), [e10.memoizedState, r10.dispatch];
  }
  function aR(e10) {
    var n10 = aT(), t10 = n10.queue;
    if (null === t10) throw Error(s(311));
    t10.lastRenderedReducer = e10;
    var r10 = t10.dispatch, l10 = t10.pending, a10 = n10.memoizedState;
    if (null !== l10) {
      t10.pending = null;
      var o10 = l10 = l10.next;
      do
        a10 = e10(a10, o10.action), o10 = o10.next;
      while (o10 !== l10);
      t$(a10, n10.memoizedState) || (oQ = true), n10.memoizedState = a10, null === n10.baseQueue && (n10.baseState = a10), t10.lastRenderedState = a10;
    }
    return [a10, r10];
  }
  function aU(e10, n10, t10) {
    var r10 = ac, l10 = aT(), a10 = rY;
    if (a10) {
      if (void 0 === t10) throw Error(s(407));
      t10 = t10();
    } else t10 = n10();
    var o10 = !t$((af || l10).memoizedState, t10);
    if (o10 && (l10.memoizedState = t10, oQ = true), l10 = l10.queue, oe(a$.bind(null, r10, l10, e10), [e10]), a6((e10 = l10.getSnapshot !== n10 || o10 || null !== ad && 0 != (1 & ad.memoizedState.tag)) ? 9 : 8, { destroy: void 0 }, aB.bind(null, r10, l10, t10, n10), null), e10) {
      if (r10.flags |= 2048, null === uz) throw Error(s(349));
      a10 || 0 != (127 & as) || aV(r10, n10, t10);
    }
    return t10;
  }
  function aV(e10, n10, t10) {
    e10.flags |= 16384, e10 = { getSnapshot: n10, value: t10 }, null === (n10 = ac.updateQueue) ? (n10 = aO(), ac.updateQueue = n10, n10.stores = [e10]) : null === (t10 = n10.stores) ? n10.stores = [e10] : t10.push(e10);
  }
  function aB(e10, n10, t10, r10) {
    n10.value = t10, n10.getSnapshot = r10, aj(n10) && aH(e10);
  }
  function a$(e10, n10, t10) {
    return t10(function() {
      aj(n10) && aH(e10);
    });
  }
  function aj(e10) {
    var n10 = e10.getSnapshot;
    e10 = e10.value;
    try {
      var t10 = n10();
      return !t$(e10, t10);
    } catch (e11) {
      return true;
    }
  }
  function aH(e10) {
    var n10 = rv(e10, 2);
    null !== n10 && sr(n10, e10, 2);
  }
  function aQ(e10) {
    var n10 = az();
    return "function" == typeof e10 && (e10 = e10()), n10.memoizedState = n10.baseState = e10, n10.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: aD, lastRenderedState: e10 }, n10;
  }
  function aW(e10, n10, t10, r10) {
    return e10.baseState = t10, aA(e10, af, "function" == typeof r10 ? r10 : aD);
  }
  function aq(e10, n10, t10, r10, l10) {
    if (ox(e10)) throw Error(s(485));
    if (null !== (e10 = n10.action)) {
      var a10 = { payload: l10, action: e10, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(e11) {
        a10.listeners.push(e11);
      } };
      null !== K.T ? t10(true) : a10.isTransition = false, r10(a10), null === (t10 = n10.pending) ? (a10.next = n10.pending = a10, aK(n10, a10)) : (a10.next = t10.next, n10.pending = t10.next = a10);
    }
  }
  function aK(e10, n10) {
    var t10 = n10.action, r10 = n10.payload, l10 = e10.state;
    if (n10.isTransition) {
      var a10 = K.T, o10 = {};
      o10.types = null !== a10 ? a10.types : null, K.T = o10;
      try {
        var i10 = t10(l10, r10), u10 = K.S;
        null !== u10 && u10(o10, i10), aY(e10, n10, i10);
      } catch (t11) {
        aX(e10, n10, t11);
      } finally {
        null !== a10 && null !== o10.types && (a10.types = o10.types), K.T = a10;
      }
    } else try {
      a10 = t10(l10, r10), aY(e10, n10, a10);
    } catch (t11) {
      aX(e10, n10, t11);
    }
  }
  function aY(e10, n10, t10) {
    null !== t10 && "object" == typeof t10 && "function" == typeof t10.then ? t10.then(function(t11) {
      aG(e10, n10, t11);
    }, function(t11) {
      return aX(e10, n10, t11);
    }) : aG(e10, n10, t10);
  }
  function aG(e10, n10, t10) {
    n10.status = "fulfilled", n10.value = t10, aZ(n10), e10.state = t10, null !== (n10 = e10.pending) && ((t10 = n10.next) === n10 ? e10.pending = null : (t10 = t10.next, n10.next = t10, aK(e10, t10)));
  }
  function aX(e10, n10, t10) {
    var r10 = e10.pending;
    if (e10.pending = null, null !== r10) {
      r10 = r10.next;
      do
        n10.status = "rejected", n10.reason = t10, aZ(n10), n10 = n10.next;
      while (n10 !== r10);
    }
    e10.action = null;
  }
  function aZ(e10) {
    e10 = e10.listeners;
    for (var n10 = 0; n10 < e10.length; n10++) (0, e10[n10])();
  }
  function aJ(e10, n10) {
    return n10;
  }
  function a0(e10, n10) {
    if (rY) {
      var t10 = uz.formState;
      if (null !== t10) {
        e: {
          var r10 = ac;
          if (rY) {
            if (rK) {
              n: {
                for (var l10 = rK, a10 = rX; 8 !== l10.nodeType; ) if (!a10 || null === (l10 = c0(l10.nextSibling))) {
                  l10 = null;
                  break n;
                }
                l10 = "F!" === (a10 = l10.data) || "F" === a10 ? l10 : null;
              }
              if (l10) {
                rK = c0(l10.nextSibling), r10 = "F!" === l10.data;
                break e;
              }
            }
            rJ(r10);
          }
          r10 = false;
        }
        r10 && (n10 = t10[0]);
      }
    }
    return (t10 = az()).memoizedState = t10.baseState = n10, r10 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: aJ, lastRenderedState: n10 }, t10.queue = r10, t10 = ok.bind(null, ac, r10), r10.dispatch = t10, r10 = aQ(false), a10 = oE.bind(null, ac, false, r10.queue), r10 = az(), l10 = { state: n10, dispatch: null, action: e10, pending: null }, r10.queue = l10, t10 = aq.bind(null, ac, l10, a10, t10), l10.dispatch = t10, r10.memoizedState = e10, [n10, t10, false];
  }
  function a1(e10) {
    return a2(aT(), af, e10);
  }
  function a2(e10, n10, t10) {
    if (n10 = aA(e10, n10, aJ)[0], e10 = aI(aD)[0], "object" == typeof n10 && null !== n10 && "function" == typeof n10.then) try {
      var r10 = aL(n10);
    } catch (e11) {
      if (e11 === lP) throw lz;
      throw e11;
    }
    else r10 = n10;
    var l10 = (n10 = aT()).queue, a10 = l10.dispatch;
    return t10 !== n10.memoizedState && (ac.flags |= 2048, a6(9, { destroy: void 0 }, a3.bind(null, l10, t10), null)), [r10, a10, e10];
  }
  function a3(e10, n10) {
    e10.action = n10;
  }
  function a4(e10) {
    var n10 = aT(), t10 = af;
    if (null !== t10) return a2(n10, t10, e10);
    aT(), n10 = n10.memoizedState;
    var r10 = (t10 = aT()).queue.dispatch;
    return t10.memoizedState = e10, [n10, r10, false];
  }
  function a6(e10, n10, t10, r10) {
    return e10 = { tag: e10, create: t10, deps: r10, inst: n10, next: null }, null === (n10 = ac.updateQueue) && (n10 = aO(), ac.updateQueue = n10), null === (t10 = n10.lastEffect) ? n10.lastEffect = e10.next = e10 : (r10 = t10.next, t10.next = e10, e10.next = r10, n10.lastEffect = e10), e10;
  }
  function a8() {
    return aT().memoizedState;
  }
  function a5(e10, n10, t10, r10) {
    var l10 = az();
    ac.flags |= e10, l10.memoizedState = a6(1 | n10, { destroy: void 0 }, t10, void 0 === r10 ? null : r10);
  }
  function a9(e10, n10, t10, r10) {
    var l10 = aT();
    r10 = void 0 === r10 ? null : r10;
    var a10 = l10.memoizedState.inst;
    null !== af && null !== r10 && ak(r10, af.memoizedState.deps) ? l10.memoizedState = a6(n10, a10, t10, r10) : (ac.flags |= e10, l10.memoizedState = a6(1 | n10, a10, t10, r10));
  }
  function a7(e10, n10) {
    a5(8390656, 8, e10, n10);
  }
  function oe(e10, n10) {
    a9(2048, 8, e10, n10);
  }
  function on(e10) {
    var n10 = aT().memoizedState, t10 = { ref: n10, nextImpl: e10 };
    ac.flags |= 4;
    var r10 = ac.updateQueue;
    if (null === r10) r10 = aO(), ac.updateQueue = r10, r10.events = [t10];
    else {
      var l10 = r10.events;
      null === l10 ? r10.events = [t10] : l10.push(t10);
    }
    return function() {
      if (0 != (2 & u_)) throw Error(s(440));
      return n10.impl.apply(void 0, arguments);
    };
  }
  function ot(e10, n10) {
    return a9(4, 2, e10, n10);
  }
  function or(e10, n10) {
    return a9(4, 4, e10, n10);
  }
  function ol(e10, n10) {
    if ("function" == typeof n10) {
      var t10 = n10(e10 = e10());
      return function() {
        "function" == typeof t10 ? t10() : n10(null);
      };
    }
    if (null != n10) return n10.current = e10 = e10(), function() {
      n10.current = null;
    };
  }
  function oa(e10, n10, t10) {
    t10 = null != t10 ? t10.concat([e10]) : null, a9(4, 4, ol.bind(null, n10, e10), t10);
  }
  function oo() {
  }
  function oi(e10, n10) {
    var t10 = aT();
    n10 = void 0 === n10 ? null : n10;
    var r10 = t10.memoizedState;
    return null !== n10 && ak(n10, r10[1]) ? r10[0] : (t10.memoizedState = [e10, n10], e10);
  }
  function ou(e10, n10) {
    var t10 = aT();
    n10 = void 0 === n10 ? null : n10;
    var r10 = t10.memoizedState;
    return null !== n10 && ak(n10, r10[1]) ? r10[0] : (t10.memoizedState = [r10 = e10(), n10], r10);
  }
  function os(e10, n10, t10) {
    return void 0 === t10 || 0 != (1073741824 & as) && 0 == (261930 & uO) ? e10.memoizedState = n10 : (e10.memoizedState = t10, e10 = sn(), ac.lanes |= e10, uU |= e10, t10);
  }
  function oc(e10, n10, t10, r10) {
    return t$(t10, n10) ? t10 : null !== l3.current ? (t$(e10 = os(e10, t10, r10), n10) || (oQ = true), e10) : 0 == (106 & as) || 0 != (1073741824 & as) && 0 == (261930 & uO) ? (oQ = true, e10.memoizedState = t10) : (e10 = sn(), ac.lanes |= e10, uU |= e10, n10);
  }
  function of(e10, n10, t10, r10, l10) {
    var a10 = Y.p;
    Y.p = 0 !== a10 && 8 > a10 ? a10 : 8;
    var o10 = K.T, i10 = {};
    i10.types = null !== o10 ? o10.types : null, K.T = i10, oE(e10, false, n10, t10);
    try {
      var u10 = l10(), s10 = K.S;
      if (null !== s10 && s10(i10, u10), null !== u10 && "object" == typeof u10 && "function" == typeof u10.then) {
        var c10, f10, d2 = (c10 = [], f10 = { status: "pending", value: null, reason: null, then: function(e11) {
          c10.push(e11);
        } }, u10.then(function() {
          f10.status = "fulfilled", f10.value = r10;
          for (var e11 = 0; e11 < c10.length; e11++) (0, c10[e11])(r10);
        }, function(e11) {
          for (f10.status = "rejected", f10.reason = e11, e11 = 0; e11 < c10.length; e11++) (0, c10[e11])(void 0);
        }), f10);
        oS(e10, n10, d2, se());
      } else oS(e10, n10, r10, se());
    } catch (t11) {
      oS(e10, n10, { then: function() {
      }, status: "rejected", reason: t11 }, se());
    } finally {
      Y.p = a10, null !== o10 && null !== i10.types && (o10.types = i10.types), K.T = o10;
    }
  }
  function od() {
  }
  function op(e10, n10, t10, r10) {
    if (5 !== e10.tag) throw Error(s(476));
    var l10 = om(e10).queue;
    of(e10, l10, n10, G, null === t10 ? od : function() {
      return oh(e10), t10(r10);
    });
  }
  function om(e10) {
    var n10 = e10.memoizedState;
    if (null !== n10) return n10;
    var t10 = {};
    return (n10 = { memoizedState: G, baseState: G, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: aD, lastRenderedState: G }, next: null }).next = { memoizedState: t10, baseState: t10, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: aD, lastRenderedState: t10 }, next: null }, e10.memoizedState = n10, null !== (e10 = e10.alternate) && (e10.memoizedState = n10), n10;
  }
  function oh(e10) {
    var n10 = om(e10);
    null === n10.next && (n10 = e10.alternate.memoizedState), oS(e10, n10.next.queue, {}, se());
  }
  function og() {
    return lo(fP);
  }
  function ov() {
    return aT().memoizedState;
  }
  function oy() {
    return aT().memoizedState;
  }
  function ob(e10) {
    for (var n10 = e10.return; null !== n10; ) {
      switch (n10.tag) {
        case 24:
        case 3:
          var t10 = se(), r10 = lY(n10, e10 = lK(t10), t10);
          null !== r10 && (sr(r10, n10, t10), lG(r10, n10, t10)), n10 = { cache: lp() }, e10.payload = n10;
          return;
      }
      n10 = n10.return;
    }
  }
  function ow(e10, n10, t10) {
    var r10 = se();
    t10 = { lane: r10, revertLane: 0, gesture: null, action: t10, hasEagerState: false, eagerState: null, next: null }, ox(e10) ? oN(n10, t10) : null !== (t10 = rg(e10, n10, t10, r10)) && (sr(t10, e10, r10), oC(t10, n10, r10));
  }
  function ok(e10, n10, t10) {
    oS(e10, n10, t10, se());
  }
  function oS(e10, n10, t10, r10) {
    var l10 = { lane: r10, revertLane: 0, gesture: null, action: t10, hasEagerState: false, eagerState: null, next: null };
    if (ox(e10)) oN(n10, l10);
    else {
      var a10 = e10.alternate;
      if (0 === e10.lanes && (null === a10 || 0 === a10.lanes) && null !== (a10 = n10.lastRenderedReducer)) try {
        var o10 = n10.lastRenderedState, i10 = a10(o10, t10);
        if (l10.hasEagerState = true, l10.eagerState = i10, t$(i10, o10)) return rh(e10, n10, l10, 0), null === uz && rm(), false;
      } catch (e11) {
      } finally {
      }
      if (null !== (t10 = rg(e10, n10, l10, r10))) return sr(t10, e10, r10), oC(t10, n10, r10), true;
    }
    return false;
  }
  function oE(e10, n10, t10, r10) {
    if (r10 = { lane: 2, revertLane: sG(), gesture: null, action: r10, hasEagerState: false, eagerState: null, next: null }, ox(e10)) {
      if (n10) throw Error(s(479));
    } else null !== (n10 = rg(e10, t10, r10, 2)) && sr(n10, e10, 2);
  }
  function ox(e10) {
    var n10 = e10.alternate;
    return e10 === ac || null !== n10 && n10 === ac;
  }
  function oN(e10, n10) {
    am = ap = true;
    var t10 = e10.pending;
    null === t10 ? n10.next = n10 : (n10.next = t10.next, t10.next = n10), e10.pending = n10;
  }
  function oC(e10, n10, t10) {
    if (0 != (4194048 & t10)) {
      var r10 = n10.lanes;
      r10 &= e10.pendingLanes, n10.lanes = t10 |= r10, eB(e10, t10);
    }
  }
  var oP = { readContext: lo, use: aM, useCallback: aw, useContext: aw, useEffect: aw, useImperativeHandle: aw, useLayoutEffect: aw, useInsertionEffect: aw, useMemo: aw, useReducer: aw, useRef: aw, useState: aw, useDebugValue: aw, useDeferredValue: aw, useTransition: aw, useSyncExternalStore: aw, useId: aw, useHostTransitionStatus: aw, useFormState: aw, useActionState: aw, useOptimistic: aw, useMemoCache: aw, useCacheRefresh: aw, useEffectEvent: aw }, o_ = { readContext: lo, use: aM, useCallback: function(e10, n10) {
    return az().memoizedState = [e10, void 0 === n10 ? null : n10], e10;
  }, useContext: lo, useEffect: a7, useImperativeHandle: function(e10, n10, t10) {
    t10 = null != t10 ? t10.concat([e10]) : null, a5(4194308, 4, ol.bind(null, n10, e10), t10);
  }, useLayoutEffect: function(e10, n10) {
    return a5(4194308, 4, e10, n10);
  }, useInsertionEffect: function(e10, n10) {
    a5(4, 2, e10, n10);
  }, useMemo: function(e10, n10) {
    var t10 = az();
    n10 = void 0 === n10 ? null : n10;
    var r10 = e10();
    return t10.memoizedState = [r10, n10], r10;
  }, useReducer: function(e10, n10, t10) {
    var r10 = az();
    if (void 0 !== t10) var l10 = t10(n10);
    else l10 = n10;
    return r10.memoizedState = r10.baseState = l10, r10.queue = e10 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e10, lastRenderedState: l10 }, e10 = e10.dispatch = ow.bind(null, ac, e10), [r10.memoizedState, e10];
  }, useRef: function(e10) {
    return az().memoizedState = { current: e10 };
  }, useState: function(e10) {
    var n10 = (e10 = aQ(e10)).queue, t10 = ok.bind(null, ac, n10);
    return n10.dispatch = t10, [e10.memoizedState, t10];
  }, useDebugValue: oo, useDeferredValue: function(e10, n10) {
    return os(az(), e10, n10);
  }, useTransition: function() {
    var e10 = aQ(false);
    return e10 = of.bind(null, ac, e10.queue, true, false), az().memoizedState = e10, [false, e10];
  }, useSyncExternalStore: function(e10, n10, t10) {
    var r10 = ac, l10 = az();
    if (rY) {
      if (void 0 === t10) throw Error(s(407));
      t10 = t10();
    } else {
      if (t10 = n10(), null === uz) throw Error(s(349));
      0 != (127 & uO) || aV(r10, n10, t10);
    }
    l10.memoizedState = t10;
    var a10 = { value: t10, getSnapshot: n10 };
    return l10.queue = a10, a7(a$.bind(null, r10, a10, e10), [e10]), r10.flags |= 2048, a6(9, { destroy: void 0 }, aB.bind(null, r10, a10, t10, n10), null), t10;
  }, useId: function() {
    var e10 = az(), n10 = uz.identifierPrefix;
    if (rY) {
      var t10 = rB, r10 = rV;
      n10 = "_" + n10 + "R_" + (t10 = (r10 & ~(1 << 32 - e_(r10) - 1)).toString(32) + t10), 0 < (t10 = ag++) && (n10 += "H" + t10.toString(32)), n10 += "_";
    } else n10 = "_" + n10 + "r_" + (t10 = ab++).toString(32) + "_";
    return e10.memoizedState = n10;
  }, useHostTransitionStatus: og, useFormState: a0, useActionState: a0, useOptimistic: function(e10) {
    var n10 = az();
    n10.memoizedState = n10.baseState = e10;
    var t10 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return n10.queue = t10, n10 = oE.bind(null, ac, true, t10), t10.dispatch = n10, [e10, n10];
  }, useMemoCache: aF, useCacheRefresh: function() {
    return az().memoizedState = ob.bind(null, ac);
  }, useEffectEvent: function(e10) {
    var n10 = az(), t10 = { impl: e10 };
    return n10.memoizedState = t10, function() {
      if (0 != (2 & u_)) throw Error(s(440));
      return t10.impl.apply(void 0, arguments);
    };
  } }, oz = { readContext: lo, use: aM, useCallback: oi, useContext: lo, useEffect: oe, useImperativeHandle: oa, useInsertionEffect: ot, useLayoutEffect: or, useMemo: ou, useReducer: aI, useRef: a8, useState: function() {
    return aI(aD);
  }, useDebugValue: oo, useDeferredValue: function(e10, n10) {
    return oc(aT(), af.memoizedState, e10, n10);
  }, useTransition: function() {
    var e10 = aI(aD)[0], n10 = aT().memoizedState;
    return ["boolean" == typeof e10 ? e10 : aL(e10), n10];
  }, useSyncExternalStore: aU, useId: ov, useHostTransitionStatus: og, useFormState: a1, useActionState: a1, useOptimistic: function(e10, n10) {
    return aW(aT(), af, e10, n10);
  }, useMemoCache: aF, useCacheRefresh: oy, useEffectEvent: on }, oT = { readContext: lo, use: aM, useCallback: oi, useContext: lo, useEffect: oe, useImperativeHandle: oa, useInsertionEffect: ot, useLayoutEffect: or, useMemo: ou, useReducer: aR, useRef: a8, useState: function() {
    return aR(aD);
  }, useDebugValue: oo, useDeferredValue: function(e10, n10) {
    var t10 = aT();
    return null === af ? os(t10, e10, n10) : oc(t10, af.memoizedState, e10, n10);
  }, useTransition: function() {
    var e10 = aR(aD)[0], n10 = aT().memoizedState;
    return ["boolean" == typeof e10 ? e10 : aL(e10), n10];
  }, useSyncExternalStore: aU, useId: ov, useHostTransitionStatus: og, useFormState: a4, useActionState: a4, useOptimistic: function(e10, n10) {
    var t10 = aT();
    return null !== af ? aW(t10, af, e10, n10) : (t10.baseState = e10, [e10, t10.queue.dispatch]);
  }, useMemoCache: aF, useCacheRefresh: oy, useEffectEvent: on };
  function oO(e10, n10, t10, r10) {
    t10 = null == (t10 = t10(r10, n10 = e10.memoizedState)) ? n10 : N({}, n10, t10), e10.memoizedState = t10, 0 === e10.lanes && (e10.updateQueue.baseState = t10);
  }
  var oL = { enqueueSetState: function(e10, n10, t10) {
    e10 = e10._reactInternals;
    var r10 = se(), l10 = lK(r10);
    l10.payload = n10, null != t10 && (l10.callback = t10), null !== (n10 = lY(e10, l10, r10)) && (sr(n10, e10, r10), lG(n10, e10, r10));
  }, enqueueReplaceState: function(e10, n10, t10) {
    e10 = e10._reactInternals;
    var r10 = se(), l10 = lK(r10);
    l10.tag = 1, l10.payload = n10, null != t10 && (l10.callback = t10), null !== (n10 = lY(e10, l10, r10)) && (sr(n10, e10, r10), lG(n10, e10, r10));
  }, enqueueForceUpdate: function(e10, n10) {
    e10 = e10._reactInternals;
    var t10 = se(), r10 = lK(t10);
    r10.tag = 2, null != n10 && (r10.callback = n10), null !== (n10 = lY(e10, r10, t10)) && (sr(n10, e10, t10), lG(n10, e10, t10));
  } };
  function oM(e10, n10, t10, r10, l10, a10, o10) {
    return "function" == typeof (e10 = e10.stateNode).shouldComponentUpdate ? e10.shouldComponentUpdate(r10, a10, o10) : !n10.prototype || !n10.prototype.isPureReactComponent || !tj(t10, r10) || !tj(l10, a10);
  }
  function oF(e10, n10, t10, r10) {
    e10 = n10.state, "function" == typeof n10.componentWillReceiveProps && n10.componentWillReceiveProps(t10, r10), "function" == typeof n10.UNSAFE_componentWillReceiveProps && n10.UNSAFE_componentWillReceiveProps(t10, r10), n10.state !== e10 && oL.enqueueReplaceState(n10, n10.state, null);
  }
  function oD(e10, n10) {
    var t10 = n10;
    if ("ref" in n10) for (var r10 in t10 = {}, n10) "ref" !== r10 && (t10[r10] = n10[r10]);
    if (e10 = e10.defaultProps) for (var l10 in t10 === n10 && (t10 = N({}, t10)), e10) void 0 === t10[l10] && (t10[l10] = e10[l10]);
    return t10;
  }
  function oI(e10) {
    rc(e10);
  }
  function oA(e10) {
    console.error(e10);
  }
  function oR(e10) {
    rc(e10);
  }
  function oU(e10, n10) {
    try {
      (0, e10.onUncaughtError)(n10.value, { componentStack: n10.stack });
    } catch (e11) {
      setTimeout(function() {
        throw e11;
      });
    }
  }
  function oV(e10, n10, t10) {
    try {
      (0, e10.onCaughtError)(t10.value, { componentStack: t10.stack, errorBoundary: 1 === n10.tag ? n10.stateNode : null });
    } catch (e11) {
      setTimeout(function() {
        throw e11;
      });
    }
  }
  function oB(e10, n10, t10) {
    return (t10 = lK(t10)).tag = 3, t10.payload = { element: null }, t10.callback = function() {
      oU(e10, n10);
    }, t10;
  }
  function o$(e10) {
    return (e10 = lK(e10)).tag = 3, e10;
  }
  function oj(e10, n10, t10, r10) {
    var l10 = t10.type.getDerivedStateFromError;
    if ("function" == typeof l10) {
      var a10 = r10.value;
      e10.payload = function() {
        return l10(a10);
      }, e10.callback = function() {
        oV(n10, t10, r10);
      };
    }
    var o10 = t10.stateNode;
    null !== o10 && "function" == typeof o10.componentDidCatch && (e10.callback = function() {
      oV(n10, t10, r10), "function" != typeof l10 && (null === uX ? uX = /* @__PURE__ */ new Set([this]) : uX.add(this));
      var e11 = r10.stack;
      this.componentDidCatch(r10.value, { componentStack: null !== e11 ? e11 : "" });
    });
  }
  var oH = Error(s(461)), oQ = false;
  function oW(e10, n10, t10, r10) {
    n10.child = null === e10 ? lH(n10, null, t10, r10) : lj(n10, e10.child, t10, r10);
  }
  function oq(e10, n10, t10, r10, l10) {
    t10 = t10.render;
    var a10 = n10.ref;
    if ("ref" in r10) {
      var o10 = {};
      for (var i10 in r10) "ref" !== i10 && (o10[i10] = r10[i10]);
    } else o10 = r10;
    return (la(n10), r10 = aS(e10, n10, t10, o10, a10, l10), i10 = aC(), null === e10 || oQ) ? (rY && i10 && rH(n10), n10.flags |= 1, oW(e10, n10, r10, l10), n10.child) : (aP(e10, n10, l10), ic(e10, n10, l10));
  }
  function oK(e10, n10, t10, r10, l10) {
    if (null === e10) {
      var a10 = t10.type;
      return "function" != typeof a10 || rE(a10) || void 0 !== a10.defaultProps || null !== t10.compare ? ((e10 = rC(t10.type, null, r10, n10, n10.mode, l10)).ref = n10.ref, e10.return = n10, n10.child = e10) : (n10.tag = 15, n10.type = a10, oY(e10, n10, a10, r10, l10));
    }
    if (a10 = e10.child, !id(e10, l10)) {
      var o10 = a10.memoizedProps;
      if ((t10 = null !== (t10 = t10.compare) ? t10 : tj)(o10, r10) && e10.ref === n10.ref) return ic(e10, n10, l10);
    }
    return n10.flags |= 1, (e10 = rx(a10, r10)).ref = n10.ref, e10.return = n10, n10.child = e10;
  }
  function oY(e10, n10, t10, r10, l10) {
    if (null !== e10) {
      var a10 = e10.memoizedProps;
      if (tj(a10, r10) && e10.ref === n10.ref) if (oQ = false, n10.pendingProps = r10 = a10, !id(e10, l10)) return n10.lanes = e10.lanes, ic(e10, n10, l10);
      else 0 != (131072 & e10.flags) && (oQ = true);
    }
    return o2(e10, n10, t10, r10, l10);
  }
  function oG(e10, n10, t10, r10) {
    var l10 = r10.children, a10 = null !== e10 ? e10.memoizedState : null;
    if (null === e10 && null === n10.stateNode && (n10.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), "hidden" === r10.mode) {
      if (0 != (128 & n10.flags)) {
        if (a10 = null !== a10 ? a10.baseLanes | t10 : t10, null !== e10) {
          for (r10 = n10.child = e10.child, l10 = 0; null !== r10; ) l10 = l10 | r10.lanes | r10.childLanes, r10 = r10.sibling;
          r10 = l10 & ~a10;
        } else r10 = 0, n10.child = null;
        return oZ(e10, n10, a10, t10, r10);
      }
      if (0 == (536870912 & t10)) return r10 = n10.lanes = 536870912, oZ(e10, n10, null !== a10 ? a10.baseLanes | t10 : t10, t10, r10);
      n10.memoizedState = { baseLanes: 0, cachePool: null }, null !== e10 && lN(n10, null !== a10 ? a10.cachePool : null), null !== a10 ? l6(n10, a10) : l8(), at(n10);
    } else null !== a10 ? (lN(n10, a10.cachePool), l6(n10, a10), ar(), n10.memoizedState = null) : (null !== e10 && lN(n10, null), l8(), ar());
    return oW(e10, n10, l10, t10), n10.child;
  }
  function oX(e10, n10) {
    return null !== e10 && 22 === e10.tag || null !== n10.stateNode || (n10.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), n10.sibling;
  }
  function oZ(e10, n10, t10, r10, l10) {
    var a10 = lx();
    return n10.memoizedState = { baseLanes: t10, cachePool: a10 = null === a10 ? null : { parent: ld._currentValue, pool: a10 } }, null !== e10 && lN(n10, null), l8(), at(n10), null !== e10 && lr(e10, n10, r10, true), n10.childLanes = l10, null;
  }
  function oJ(e10, n10) {
    return (n10 = it({ mode: n10.mode, children: n10.children }, e10.mode)).ref = e10.ref, e10.child = n10, n10.return = e10, n10;
  }
  function o0(e10, n10, t10) {
    return lj(n10, e10.child, null, t10), e10 = oJ(n10, n10.pendingProps), e10.flags |= 2, al(n10), n10.memoizedState = null, e10;
  }
  function o1(e10, n10) {
    var t10 = n10.ref;
    if (null === t10) null !== e10 && null !== e10.ref && (n10.flags |= 4194816);
    else {
      if ("function" != typeof t10 && "object" != typeof t10) throw Error(s(284));
      (null === e10 || e10.ref !== t10) && (n10.flags |= 4194816);
    }
  }
  function o2(e10, n10, t10, r10, l10) {
    return (la(n10), t10 = aS(e10, n10, t10, r10, void 0, l10), r10 = aC(), null === e10 || oQ) ? (rY && r10 && rH(n10), n10.flags |= 1, oW(e10, n10, t10, l10), n10.child) : (aP(e10, n10, l10), ic(e10, n10, l10));
  }
  function o3(e10, n10, t10, r10, l10, a10) {
    return (la(n10), n10.updateQueue = null, t10 = ax(n10, r10, t10, l10), aE(e10), r10 = aC(), null === e10 || oQ) ? (rY && r10 && rH(n10), n10.flags |= 1, oW(e10, n10, t10, a10), n10.child) : (aP(e10, n10, a10), ic(e10, n10, a10));
  }
  function o4(e10, n10, t10, r10, l10) {
    if (la(n10), null === n10.stateNode) {
      var a10 = rw, o10 = t10.contextType;
      "object" == typeof o10 && null !== o10 && (a10 = lo(o10)), n10.memoizedState = null !== (a10 = new t10(r10, a10)).state && void 0 !== a10.state ? a10.state : null, a10.updater = oL, n10.stateNode = a10, a10._reactInternals = n10, (a10 = n10.stateNode).props = r10, a10.state = n10.memoizedState, a10.refs = {}, lW(n10), o10 = t10.contextType, a10.context = "object" == typeof o10 && null !== o10 ? lo(o10) : rw, a10.state = n10.memoizedState, "function" == typeof (o10 = t10.getDerivedStateFromProps) && (oO(n10, t10, o10, r10), a10.state = n10.memoizedState), "function" == typeof t10.getDerivedStateFromProps || "function" == typeof a10.getSnapshotBeforeUpdate || "function" != typeof a10.UNSAFE_componentWillMount && "function" != typeof a10.componentWillMount || (o10 = a10.state, "function" == typeof a10.componentWillMount && a10.componentWillMount(), "function" == typeof a10.UNSAFE_componentWillMount && a10.UNSAFE_componentWillMount(), o10 !== a10.state && oL.enqueueReplaceState(a10, a10.state, null), l0(n10, r10, a10, l10), lJ(), a10.state = n10.memoizedState), "function" == typeof a10.componentDidMount && (n10.flags |= 4194308), r10 = true;
    } else if (null === e10) {
      a10 = n10.stateNode;
      var i10 = n10.memoizedProps, u10 = oD(t10, i10);
      a10.props = u10;
      var s10 = a10.context, c10 = t10.contextType;
      o10 = rw, "object" == typeof c10 && null !== c10 && (o10 = lo(c10));
      var f10 = t10.getDerivedStateFromProps;
      c10 = "function" == typeof f10 || "function" == typeof a10.getSnapshotBeforeUpdate, i10 = n10.pendingProps !== i10, c10 || "function" != typeof a10.UNSAFE_componentWillReceiveProps && "function" != typeof a10.componentWillReceiveProps || (i10 || s10 !== o10) && oF(n10, a10, r10, o10), lQ = false;
      var d2 = n10.memoizedState;
      a10.state = d2, l0(n10, r10, a10, l10), lJ(), s10 = n10.memoizedState, i10 || d2 !== s10 || lQ ? ("function" == typeof f10 && (oO(n10, t10, f10, r10), s10 = n10.memoizedState), (u10 = lQ || oM(n10, t10, u10, r10, d2, s10, o10)) ? (c10 || "function" != typeof a10.UNSAFE_componentWillMount && "function" != typeof a10.componentWillMount || ("function" == typeof a10.componentWillMount && a10.componentWillMount(), "function" == typeof a10.UNSAFE_componentWillMount && a10.UNSAFE_componentWillMount()), "function" == typeof a10.componentDidMount && (n10.flags |= 4194308)) : ("function" == typeof a10.componentDidMount && (n10.flags |= 4194308), n10.memoizedProps = r10, n10.memoizedState = s10), a10.props = r10, a10.state = s10, a10.context = o10, r10 = u10) : ("function" == typeof a10.componentDidMount && (n10.flags |= 4194308), r10 = false);
    } else {
      a10 = n10.stateNode, lq(e10, n10), c10 = oD(t10, o10 = n10.memoizedProps), a10.props = c10, f10 = n10.pendingProps, d2 = a10.context, s10 = t10.contextType, u10 = rw, "object" == typeof s10 && null !== s10 && (u10 = lo(s10)), (s10 = "function" == typeof (i10 = t10.getDerivedStateFromProps) || "function" == typeof a10.getSnapshotBeforeUpdate) || "function" != typeof a10.UNSAFE_componentWillReceiveProps && "function" != typeof a10.componentWillReceiveProps || (o10 !== f10 || d2 !== u10) && oF(n10, a10, r10, u10), lQ = false, d2 = n10.memoizedState, a10.state = d2, l0(n10, r10, a10, l10), lJ();
      var p2 = n10.memoizedState;
      o10 !== f10 || d2 !== p2 || lQ || null !== e10 && null !== e10.dependencies && ll(e10.dependencies) ? ("function" == typeof i10 && (oO(n10, t10, i10, r10), p2 = n10.memoizedState), (c10 = lQ || oM(n10, t10, c10, r10, d2, p2, u10) || null !== e10 && null !== e10.dependencies && ll(e10.dependencies)) ? (s10 || "function" != typeof a10.UNSAFE_componentWillUpdate && "function" != typeof a10.componentWillUpdate || ("function" == typeof a10.componentWillUpdate && a10.componentWillUpdate(r10, p2, u10), "function" == typeof a10.UNSAFE_componentWillUpdate && a10.UNSAFE_componentWillUpdate(r10, p2, u10)), "function" == typeof a10.componentDidUpdate && (n10.flags |= 4), "function" == typeof a10.getSnapshotBeforeUpdate && (n10.flags |= 1024)) : ("function" != typeof a10.componentDidUpdate || o10 === e10.memoizedProps && d2 === e10.memoizedState || (n10.flags |= 4), "function" != typeof a10.getSnapshotBeforeUpdate || o10 === e10.memoizedProps && d2 === e10.memoizedState || (n10.flags |= 1024), n10.memoizedProps = r10, n10.memoizedState = p2), a10.props = r10, a10.state = p2, a10.context = u10, r10 = c10) : ("function" != typeof a10.componentDidUpdate || o10 === e10.memoizedProps && d2 === e10.memoizedState || (n10.flags |= 4), "function" != typeof a10.getSnapshotBeforeUpdate || o10 === e10.memoizedProps && d2 === e10.memoizedState || (n10.flags |= 1024), r10 = false);
    }
    return a10 = r10, o1(e10, n10), r10 = 0 != (128 & n10.flags), a10 || r10 ? (a10 = n10.stateNode, t10 = r10 && "function" != typeof t10.getDerivedStateFromError ? null : a10.render(), n10.flags |= 1, null !== e10 && r10 ? (n10.child = lj(n10, e10.child, null, l10), n10.child = lj(n10, null, t10, l10)) : oW(e10, n10, t10, l10), n10.memoizedState = a10.state, e10 = n10.child) : e10 = ic(e10, n10, l10), e10;
  }
  function o6(e10, n10, t10, r10) {
    return r3(), n10.flags |= 256, oW(e10, n10, t10, r10), n10.child;
  }
  var o8 = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function o5(e10) {
    return { baseLanes: e10, cachePool: lC() };
  }
  function o9(e10, n10, t10) {
    return e10 = null !== e10 ? e10.childLanes & ~t10 : 0, n10 && (e10 |= u$), e10;
  }
  function o7(e10, n10, t10) {
    var r10, l10 = n10.pendingProps, a10 = false, o10 = 0 != (128 & n10.flags);
    if ((r10 = o10) || (r10 = (null === e10 || null !== e10.memoizedState) && 0 != (2 & aa.current)), r10 && (a10 = true, n10.flags &= -129), r10 = 0 != (32 & n10.flags), n10.flags &= -33, null === e10) {
      if (rY) {
        if (a10 ? ae(n10) : ar(), (e10 = rK) ? null !== (e10 = null !== (e10 = cX(e10, rX)) && "&" !== e10.data ? e10 : null) && (n10.memoizedState = { dehydrated: e10, treeContext: null !== rU ? { id: rV, overflow: rB } : null, retryLane: 536870912, hydrationErrors: null }, (t10 = rz(e10)).return = n10, n10.child = t10, rq = n10, rK = null) : e10 = null, null === e10) throw rJ(n10);
        return cJ(e10) ? n10.lanes = 32 : n10.lanes = 536870912, null;
      }
      return (o10 = l10.children, l10 = l10.fallback, a10) ? (ar(), o10 = it({ mode: "hidden", children: o10 }, a10 = n10.mode), l10 = rP(l10, a10, t10, null), o10.return = n10, l10.return = n10, o10.sibling = l10, n10.child = o10, (l10 = n10.child).memoizedState = o5(t10), l10.childLanes = o9(e10, r10, t10), n10.memoizedState = o8, oX(null, l10)) : (ae(n10), ie(n10, o10));
    }
    var i10 = e10.memoizedState;
    if (null !== i10) {
      var u10 = i10.dehydrated;
      if (null !== u10) {
        var c10 = e10, f10 = n10, d2 = o10, p2 = r10, m2 = l10, h2 = u10, g2 = i10, v2 = t10;
        if (d2) return 256 & f10.flags ? (ae(f10), f10.flags &= -257, ir(c10, f10, v2)) : null !== f10.memoizedState ? (ar(), f10.child = c10.child, f10.flags |= 128, null) : (ar(), h2 = m2.fallback, g2 = f10.mode, m2 = it({ mode: "visible", children: m2.children }, g2), h2 = rP(h2, g2, v2, null), h2.flags |= 2, m2.return = f10, h2.return = f10, m2.sibling = h2, f10.child = m2, lj(f10, c10.child, null, v2), (m2 = f10.child).memoizedState = o5(v2), m2.childLanes = o9(c10, p2, v2), f10.memoizedState = o8, oX(null, m2));
        if (ae(f10), cJ(h2)) {
          if (p2 = h2.nextSibling && h2.nextSibling.dataset) var y2 = p2.dgst;
          return "" !== (p2 = y2) && ((m2 = Error(s(419))).stack = "", m2.digest = p2, r6({ value: m2, source: null, stack: null })), ir(c10, f10, v2);
        }
        if (oQ || lr(c10, f10, v2, false), p2 = 0 != (v2 & c10.childLanes), oQ || p2) {
          if (null !== l3.current) return ir(c10, f10, v2);
          if (null !== (p2 = uz) && 0 !== (m2 = e$(p2, v2)) && m2 !== g2.retryLane) throw g2.retryLane = m2, rv(c10, m2), sr(p2, c10, m2), oH;
          return cZ(h2) || sm(), ir(c10, f10, v2);
        }
        return cZ(h2) ? (f10.flags |= 192, f10.child = c10.child, null) : (c10 = g2.treeContext, rK = c0(h2.nextSibling), rq = f10, rY = true, rG = null, rX = false, null !== c10 && rW(f10, c10), f10 = ie(f10, m2.children), f10.flags |= 134221824, f10);
      }
    }
    return a10 ? (ar(), a10 = l10.fallback, o10 = n10.mode, u10 = (i10 = e10.child).sibling, (l10 = rx(i10, { mode: "hidden", children: l10.children })).subtreeFlags = 1206910976 & i10.subtreeFlags, null !== u10 ? a10 = rx(u10, a10) : (a10 = rP(a10, o10, t10, null), a10.flags |= 2), a10.return = n10, l10.return = n10, l10.sibling = a10, n10.child = l10, oX(null, l10), l10 = n10.child, null === (a10 = e10.child.memoizedState) ? a10 = o5(t10) : (null !== (o10 = a10.cachePool) ? (i10 = ld._currentValue, o10 = o10.parent !== i10 ? { parent: i10, pool: i10 } : o10) : o10 = lC(), a10 = { baseLanes: a10.baseLanes | t10, cachePool: o10 }), l10.memoizedState = a10, l10.childLanes = o9(e10, r10, t10), n10.memoizedState = o8, oX(e10.child, l10)) : (ae(n10), e10 = (t10 = e10.child).sibling, (t10 = rx(t10, { mode: "visible", children: l10.children })).return = n10, t10.sibling = null, null !== e10 && (null === (r10 = n10.deletions) ? (n10.deletions = [e10], n10.flags |= 16) : r10.push(e10)), n10.child = t10, n10.memoizedState = null, t10);
  }
  function ie(e10, n10) {
    return (n10 = it({ mode: "visible", children: n10 }, e10.mode)).return = e10, e10.child = n10;
  }
  function it(e10, n10) {
    return (e10 = rS(22, e10, null, n10)).lanes = 0, e10;
  }
  function ir(e10, n10, t10) {
    return lj(n10, e10.child, null, t10), e10 = ie(n10, n10.pendingProps.children), e10.flags |= 2, n10.memoizedState = null, e10;
  }
  function il(e10, n10, t10) {
    e10.lanes |= n10;
    var r10 = e10.alternate;
    null !== r10 && (r10.lanes |= n10), ln(e10.return, n10, t10);
  }
  function ia(e10) {
    for (var n10 = null; null !== e10; ) {
      var t10 = e10.alternate;
      null !== t10 && null === au(t10) && (n10 = e10), e10 = e10.sibling;
    }
    return n10;
  }
  function io(e10, n10, t10, r10, l10, a10) {
    var o10 = e10.memoizedState;
    null === o10 ? e10.memoizedState = { isBackwards: n10, rendering: null, renderingStartTime: 0, last: r10, tail: t10, tailMode: l10, treeForkCount: a10 } : (o10.isBackwards = n10, o10.rendering = null, o10.renderingStartTime = 0, o10.last = r10, o10.tail = t10, o10.tailMode = l10, o10.treeForkCount = a10);
  }
  function ii(e10) {
    var n10 = e10.child;
    for (e10.child = null; null !== n10; ) {
      var t10 = n10.sibling;
      n10.sibling = e10.child, e10.child = n10, n10 = t10;
    }
  }
  function iu(e10, n10, t10) {
    var r10 = n10.pendingProps, l10 = r10.revealOrder, a10 = r10.tail;
    r10 = r10.children;
    var o10 = aa.current;
    if (128 & n10.flags) return ao(n10, o10), null;
    var i10 = 0 != (2 & o10);
    if (i10 ? (o10 = 1 & o10 | 2, n10.flags |= 128) : o10 &= 1, ao(n10, o10), "backwards" === l10 && null !== e10 ? (ii(e10), oW(e10, n10, r10, t10), ii(e10)) : oW(e10, n10, r10, t10), r10 = rY ? rI : 0, !i10 && null !== e10 && 0 != (128 & e10.flags)) e: for (e10 = n10.child; null !== e10; ) {
      if (13 === e10.tag) null !== e10.memoizedState && il(e10, t10, n10);
      else if (19 === e10.tag) il(e10, t10, n10);
      else if (null !== e10.child) {
        e10.child.return = e10, e10 = e10.child;
        continue;
      }
      if (e10 === n10) break;
      for (; null === e10.sibling; ) {
        if (null === e10.return || e10.return === n10) break e;
        e10 = e10.return;
      }
      e10.sibling.return = e10.return, e10 = e10.sibling;
    }
    switch (l10) {
      case "backwards":
        null === (t10 = ia(n10.child)) ? (l10 = n10.child, n10.child = null) : (l10 = t10.sibling, t10.sibling = null, ii(n10)), io(n10, true, l10, null, a10, r10);
        break;
      case "unstable_legacy-backwards":
        for (t10 = null, l10 = n10.child, n10.child = null; null !== l10; ) {
          if (null !== (e10 = l10.alternate) && null === au(e10)) {
            n10.child = l10;
            break;
          }
          e10 = l10.sibling, l10.sibling = t10, t10 = l10, l10 = e10;
        }
        io(n10, true, t10, null, a10, r10);
        break;
      case "together":
        io(n10, false, null, null, void 0, r10);
        break;
      case "independent":
        n10.memoizedState = null;
        break;
      default:
        null === (t10 = ia(n10.child)) ? (l10 = n10.child, n10.child = null) : (l10 = t10.sibling, t10.sibling = null), io(n10, false, l10, t10, a10, r10);
    }
    return n10.child;
  }
  function is(e10, n10, t10) {
    var r10 = n10.pendingProps;
    return r7(n10, n10.type, r10.value), oW(e10, n10, r10.children, t10), n10.child;
  }
  function ic(e10, n10, t10) {
    if (null !== e10 && (n10.dependencies = e10.dependencies), uU |= n10.lanes, 0 == (t10 & n10.childLanes)) {
      if (null === e10) return null;
      else if (lr(e10, n10, t10, false), 0 == (t10 & n10.childLanes)) return null;
    }
    if (null !== e10 && n10.child !== e10.child) throw Error(s(153));
    if (null !== n10.child) {
      for (t10 = rx(e10 = n10.child, e10.pendingProps), n10.child = t10, t10.return = n10; null !== e10.sibling; ) e10 = e10.sibling, (t10 = t10.sibling = rx(e10, e10.pendingProps)).return = n10;
      t10.sibling = null;
    }
    return n10.child;
  }
  function id(e10, n10) {
    return 0 != (e10.lanes & n10) || !!(null !== (e10 = e10.dependencies) && ll(e10));
  }
  function ip(e10, n10, t10) {
    if (null !== e10) if (e10.memoizedProps !== n10.pendingProps) oQ = true;
    else {
      if (!id(e10, t10) && 0 == (128 & n10.flags)) return oQ = false, (function(e11, n11, t11) {
        switch (n11.tag) {
          case 3:
            eo(n11, n11.stateNode.containerInfo), r7(n11, ld, e11.memoizedState.cache), r3();
            break;
          case 27:
          case 5:
            eu(n11);
            break;
          case 4:
            eo(n11, n11.stateNode.containerInfo);
            break;
          case 10:
            r7(n11, n11.type, n11.memoizedProps.value);
            break;
          case 31:
            if (null !== n11.memoizedState) return n11.flags |= 128, an(n11), null;
            break;
          case 13:
            var r11 = n11.memoizedState;
            if (null !== r11) {
              if (null !== r11.dehydrated) return ae(n11), n11.flags |= 128, null;
              r11 = lr(e11, n11, t11, false);
              var l11 = n11.child.childLanes;
              if (r11 || 0 != (t11 & l11)) return o7(e11, n11, t11);
              return ae(n11), null !== (e11 = ic(e11, n11, t11)) ? e11.sibling : null;
            }
            ae(n11);
            break;
          case 19:
            if (128 & n11.flags) return iu(e11, n11, t11);
            if (l11 = 0 != (128 & e11.flags), (r11 = 0 != (t11 & n11.childLanes)) || (lr(e11, n11, t11, false), r11 = 0 != (t11 & n11.childLanes)), l11) {
              if (r11) return iu(e11, n11, t11);
              n11.flags |= 128;
            }
            if (null !== (l11 = n11.memoizedState) && (l11.rendering = null, l11.tail = null, l11.lastEffect = null), ao(n11, aa.current), !r11) return null;
            break;
          case 22:
            return n11.lanes = 0, oG(e11, n11, t11, n11.pendingProps);
          case 24:
            r7(n11, ld, e11.memoizedState.cache);
        }
        return ic(e11, n11, t11);
      })(e10, n10, t10);
      oQ = 0 != (131072 & e10.flags);
    }
    else oQ = false, rY && 0 != (1048576 & n10.flags) && rj(n10, rI, n10.index);
    switch (n10.lanes = 0, n10.tag) {
      case 16:
        e: {
          var r10 = n10.pendingProps;
          if (e10 = lM(n10.elementType), n10.type = e10, "function" == typeof e10) rE(e10) ? (r10 = oD(e10, r10), n10.tag = 1, n10 = o4(null, n10, e10, r10, t10)) : (n10.tag = 0, n10 = o2(null, n10, e10, r10, t10));
          else {
            if (null != e10) {
              var l10 = e10.$$typeof;
              if (l10 === F) {
                n10.tag = 11, n10 = oq(null, n10, e10, r10, t10);
                break e;
              }
              if (l10 === A) {
                n10.tag = 14, n10 = oK(null, n10, e10, r10, t10);
                break e;
              }
              if (l10 === M) {
                n10.tag = 10, n10.type = e10, n10 = is(null, n10, t10);
                break e;
              }
            }
            throw Error(s(306, n10 = (function e11(n11) {
              if (null == n11) return null;
              if ("function" == typeof n11) return n11.$$typeof === W ? null : n11.displayName || n11.name || null;
              if ("string" == typeof n11) return n11;
              switch (n11) {
                case z:
                  return "Fragment";
                case O:
                  return "Profiler";
                case T:
                  return "StrictMode";
                case D:
                  return "Suspense";
                case I:
                  return "SuspenseList";
                case U:
                  return "Activity";
                case $:
                  return "ViewTransition";
              }
              if ("object" == typeof n11) switch (n11.$$typeof) {
                case _:
                  return "Portal";
                case M:
                  return n11.displayName || "Context";
                case L:
                  return (n11._context.displayName || "Context") + ".Consumer";
                case F:
                  var t11 = n11.render;
                  return (n11 = n11.displayName) || (n11 = "" !== (n11 = t11.displayName || t11.name || "") ? "ForwardRef(" + n11 + ")" : "ForwardRef"), n11;
                case A:
                  return null !== (t11 = n11.displayName || null) ? t11 : e11(n11.type) || "Memo";
                case R:
                  t11 = n11._payload, n11 = n11._init;
                  try {
                    return e11(n11(t11));
                  } catch (e12) {
                  }
              }
              return null;
            })(e10) || e10, ""));
          }
        }
        return n10;
      case 0:
        return o2(e10, n10, n10.type, n10.pendingProps, t10);
      case 1:
        return l10 = oD(r10 = n10.type, n10.pendingProps), o4(e10, n10, r10, l10, t10);
      case 3:
        e: {
          if (eo(n10, n10.stateNode.containerInfo), null === e10) throw Error(s(387));
          r10 = n10.pendingProps;
          var a10 = n10.memoizedState;
          l10 = a10.element, lq(e10, n10), l0(n10, r10, null, t10);
          var o10 = n10.memoizedState;
          if (r7(n10, ld, r10 = o10.cache), r10 !== a10.cache && lt(n10, [ld], t10, true), lJ(), r10 = o10.element, a10.isDehydrated) if (a10 = { element: r10, isDehydrated: false, cache: o10.cache }, n10.updateQueue.baseState = a10, n10.memoizedState = a10, 256 & n10.flags) {
            n10 = o6(e10, n10, r10, t10);
            break e;
          } else if (r10 !== l10) {
            r6(l10 = rL(Error(s(424)), n10)), n10 = o6(e10, n10, r10, t10);
            break e;
          } else for (rK = c0((e10 = 9 === (e10 = n10.stateNode.containerInfo).nodeType ? e10.body : "HTML" === e10.nodeName ? e10.ownerDocument.body : e10).firstChild), rq = n10, rY = true, rG = null, rX = true, t10 = lH(n10, null, r10, t10), n10.child = t10; t10; ) t10.flags = -3 & t10.flags | 134221824, t10 = t10.sibling;
          else {
            if (r3(), r10 === l10) {
              n10 = ic(e10, n10, t10);
              break e;
            }
            oW(e10, n10, r10, t10);
          }
          n10 = n10.child;
        }
        return n10;
      case 26:
        return o1(e10, n10), null === e10 ? (t10 = fr(n10.type, null, n10.pendingProps, null)) ? n10.memoizedState = t10 : rY || (t10 = n10.type, e10 = n10.pendingProps, (r10 = cm(el.current).createElement(t10))[eK] = n10, r10[eY] = e10, cs(r10, t10, e10), e9(r10), n10.stateNode = r10) : n10.memoizedState = fr(n10.type, e10.memoizedProps, n10.pendingProps, e10.memoizedState), null;
      case 27:
        return eu(n10), null === e10 && rY && (r10 = n10.stateNode = c4(n10.type, n10.pendingProps, el.current), rq = n10, rX = true, l10 = rK, cx(n10.type) ? (c1 = l10, rK = c0(r10.firstChild)) : rK = l10), oW(e10, n10, n10.pendingProps.children, t10), o1(e10, n10), null === e10 && (n10.flags |= 4194304), n10.child;
      case 5:
        return null === e10 && rY && ((l10 = r10 = rK) && (null !== (r10 = (function(e11, n11, t11, r11) {
          for (; 1 === e11.nodeType; ) {
            if (e11.nodeName.toLowerCase() !== n11.toLowerCase()) {
              if (!r11 && ("INPUT" !== e11.nodeName || "hidden" !== e11.type)) break;
            } else if (r11) {
              if (!e11[e1]) switch (n11) {
                case "meta":
                  if (!e11.hasAttribute("itemprop")) break;
                  return e11;
                case "link":
                  if ("stylesheet" === (l11 = e11.getAttribute("rel")) && e11.hasAttribute("data-precedence") || l11 !== t11.rel || e11.getAttribute("href") !== (null == t11.href || "" === t11.href ? null : t11.href) || e11.getAttribute("crossorigin") !== (null == t11.crossOrigin ? null : t11.crossOrigin) || e11.getAttribute("title") !== (null == t11.title ? null : t11.title)) break;
                  return e11;
                case "style":
                  if (e11.hasAttribute("data-precedence")) break;
                  return e11;
                case "script":
                  if (((l11 = e11.getAttribute("src")) !== (null == t11.src ? null : t11.src) || e11.getAttribute("type") !== (null == t11.type ? null : t11.type) || e11.getAttribute("crossorigin") !== (null == t11.crossOrigin ? null : t11.crossOrigin)) && l11 && e11.hasAttribute("async") && !e11.hasAttribute("itemprop")) break;
                  return e11;
                default:
                  return e11;
              }
            } else {
              if ("input" !== n11 || "hidden" !== e11.type) return e11;
              var l11 = null == t11.name ? null : "" + t11.name;
              if ("hidden" === t11.type && e11.getAttribute("name") === l11) return e11;
            }
            if (null === (e11 = c0(e11.nextSibling))) break;
          }
          return null;
        })(r10, n10.type, n10.pendingProps, rX)) ? (n10.stateNode = r10, rq = n10, rK = c0(r10.firstChild), rX = false, l10 = true) : l10 = false), l10 || rJ(n10)), eu(n10), l10 = n10.type, a10 = n10.pendingProps, o10 = null !== e10 ? e10.memoizedProps : null, r10 = a10.children, cv(l10, a10) ? r10 = null : null !== o10 && cv(l10, o10) && (n10.flags |= 32), null !== n10.memoizedState && (fP._currentValue = l10 = aS(e10, n10, aN, null, null, t10)), o1(e10, n10), oW(e10, n10, r10, t10), n10.child;
      case 6:
        return null === e10 && rY && ((e10 = t10 = rK) && (null !== (t10 = (function(e11, n11, t11) {
          if ("" === n11) return null;
          for (; 3 !== e11.nodeType; ) if ((1 !== e11.nodeType || "INPUT" !== e11.nodeName || "hidden" !== e11.type) && !t11 || null === (e11 = c0(e11.nextSibling))) return null;
          return e11;
        })(t10, n10.pendingProps, rX)) ? (n10.stateNode = t10, rq = n10, rK = null, e10 = true) : e10 = false), e10 || rJ(n10)), null;
      case 13:
        return o7(e10, n10, t10);
      case 4:
        return eo(n10, n10.stateNode.containerInfo), r10 = n10.pendingProps, null === e10 ? n10.child = lj(n10, null, r10, t10) : oW(e10, n10, r10, t10), n10.child;
      case 11:
        return oq(e10, n10, n10.type, n10.pendingProps, t10);
      case 7:
        return r10 = n10.pendingProps, o1(e10, n10), oW(e10, n10, r10, t10), n10.child;
      case 8:
      case 12:
        return oW(e10, n10, n10.pendingProps.children, t10), n10.child;
      case 10:
        return is(e10, n10, t10);
      case 9:
        return l10 = n10.type._context, r10 = n10.pendingProps.children, la(n10), r10 = r10(l10 = lo(l10)), n10.flags |= 1, oW(e10, n10, r10, t10), n10.child;
      case 14:
        return oK(e10, n10, n10.type, n10.pendingProps, t10);
      case 15:
        return oY(e10, n10, n10.type, n10.pendingProps, t10);
      case 19:
        return iu(e10, n10, t10);
      case 31:
        var i10 = e10, u10 = n10, c10 = t10, f10 = u10.pendingProps, d2 = 0 != (128 & u10.flags);
        if (u10.flags &= -129, null === i10) {
          if (rY) {
            if ("hidden" === f10.mode) return i10 = oJ(u10, f10), u10.lanes = 536870912, oX(null, i10);
            if (an(u10), (i10 = rK) ? null !== (i10 = null !== (i10 = cX(i10, rX)) && "&" === i10.data ? i10 : null) && (u10.memoizedState = { dehydrated: i10, treeContext: null !== rU ? { id: rV, overflow: rB } : null, retryLane: 536870912, hydrationErrors: null }, (c10 = rz(i10)).return = u10, u10.child = c10, rq = u10, rK = null) : i10 = null, null === i10) throw rJ(u10);
            return u10.lanes = 536870912, null;
          }
          return oJ(u10, f10);
        }
        var p2 = i10.memoizedState;
        if (null !== p2) {
          var m2 = p2.dehydrated;
          if (an(u10), d2) if (256 & u10.flags) u10.flags &= -257, u10 = o0(i10, u10, c10);
          else if (null !== u10.memoizedState) u10.child = i10.child, u10.flags |= 128, u10 = null;
          else throw Error(s(558));
          else if (oQ || lr(i10, u10, c10, false), d2 = 0 != (c10 & i10.childLanes), oQ || d2) {
            if (null === l3.current) {
              if (null !== (f10 = uz) && 0 !== (m2 = e$(f10, c10)) && m2 !== p2.retryLane) throw p2.retryLane = m2, rv(i10, m2), sr(f10, i10, m2), oH;
              sm();
            }
            u10 = o0(i10, u10, c10);
          } else i10 = p2.treeContext, rK = c0(m2.nextSibling), rq = u10, rY = true, rG = null, rX = false, null !== i10 && rW(u10, i10), u10 = oJ(u10, f10), u10.flags |= 134221824;
          return u10;
        }
        return (i10 = rx(i10.child, { mode: f10.mode, children: f10.children })).ref = u10.ref, u10.child = i10, i10.return = u10, i10;
      case 22:
        return oG(e10, n10, t10, n10.pendingProps);
      case 24:
        return la(n10), r10 = lo(ld), null === e10 ? (null === (l10 = lx()) && (l10 = uz, a10 = lp(), l10.pooledCache = a10, a10.refCount++, null !== a10 && (l10.pooledCacheLanes |= t10), l10 = a10), n10.memoizedState = { parent: r10, cache: l10 }, lW(n10), r7(n10, ld, l10)) : (0 != (e10.lanes & t10) && (lq(e10, n10), l0(n10, null, null, t10), lJ()), l10 = e10.memoizedState, a10 = n10.memoizedState, l10.parent !== r10 ? (l10 = { parent: r10, cache: r10 }, n10.memoizedState = l10, 0 === n10.lanes && (n10.memoizedState = n10.updateQueue.baseState = l10), r7(n10, ld, r10)) : (r7(n10, ld, r10 = a10.cache), r10 !== l10.cache && lt(n10, [ld], t10, true))), oW(e10, n10, n10.pendingProps.children, t10), n10.child;
      case 30:
        return null === n10.stateNode && (n10.stateNode = { autoName: null, paired: null, clones: null, ref: null }), null != (r10 = n10.pendingProps).name && "auto" !== r10.name ? n10.flags |= null === e10 ? 18882560 : 18874368 : rY && rH(n10), null !== e10 && e10.memoizedProps.name !== r10.name ? n10.flags |= 4194816 : o1(e10, n10), oW(e10, n10, r10.children, t10), n10.child;
      case 29:
        throw n10.pendingProps;
    }
    throw Error(s(156, n10.tag));
  }
  function im(e10) {
    e10.flags |= 4;
  }
  function ih(e10, n10, t10, r10, l10) {
    var a10;
    if ((a10 = 0 != (32 & e10.mode)) && (a10 = null === t10 ? fg(n10, r10) : fg(n10, r10) && (r10.src !== t10.src || r10.srcSet !== t10.srcSet)), a10) {
      if (e10.flags |= 16777216, (335544128 & l10) === l10) if (e10.stateNode.complete) e10.flags |= 8192;
      else if (sf()) e10.flags |= 8192;
      else throw lF = lT, l_;
    } else e10.flags &= -16777217;
  }
  function ig(e10, n10) {
    if ("stylesheet" !== n10.type || 0 != (4 & n10.state.loading)) e10.flags &= -16777217;
    else if (e10.flags |= 16777216, !fv(n10)) if (sf()) e10.flags |= 8192;
    else throw lF = lT, l_;
  }
  function iv(e10, n10) {
    null !== n10 && (e10.flags |= 4), 16384 & e10.flags && (n10 = 22 !== e10.tag ? eA() : 536870912, e10.lanes |= n10, uj |= n10);
  }
  function iy(e10, n10) {
    if (!rY) switch (e10.tailMode) {
      case "visible":
        break;
      case "collapsed":
        for (var t10 = e10.tail, r10 = null; null !== t10; ) null !== t10.alternate && (r10 = t10), t10 = t10.sibling;
        null === r10 ? n10 || null === e10.tail ? e10.tail = null : e10.tail.sibling = null : r10.sibling = null;
        break;
      default:
        for (n10 = e10.tail, t10 = null; null !== n10; ) null !== n10.alternate && (t10 = n10), n10 = n10.sibling;
        null === t10 ? e10.tail = null : t10.sibling = null;
    }
  }
  function ib(e10) {
    var n10 = null !== e10.alternate && e10.alternate.child === e10.child, t10 = 0, r10 = 0;
    if (n10) for (var l10 = e10.child; null !== l10; ) t10 |= l10.lanes | l10.childLanes, r10 |= 1206910976 & l10.subtreeFlags, r10 |= 1206910976 & l10.flags, l10.return = e10, l10 = l10.sibling;
    else for (l10 = e10.child; null !== l10; ) t10 |= l10.lanes | l10.childLanes, r10 |= l10.subtreeFlags, r10 |= l10.flags, l10.return = e10, l10 = l10.sibling;
    return e10.subtreeFlags |= r10, e10.childLanes = t10, n10;
  }
  function iw(e10, n10) {
    switch (rQ(n10), n10.tag) {
      case 3:
        le(ld), ei();
        break;
      case 26:
      case 27:
      case 5:
        es(n10);
        break;
      case 4:
        ei();
        break;
      case 31:
        null !== n10.memoizedState && al(n10);
        break;
      case 13:
        al(n10);
        break;
      case 19:
        ai(n10);
        break;
      case 10:
        le(n10.type);
        break;
      case 22:
      case 23:
        al(n10), l5(), null !== e10 && ee(lE);
        break;
      case 24:
        le(ld);
    }
  }
  function ik(e10, n10) {
    try {
      var t10 = n10.updateQueue, r10 = null !== t10 ? t10.lastEffect : null;
      if (null !== r10) {
        var l10 = r10.next;
        t10 = l10;
        do {
          if ((t10.tag & e10) === e10) {
            r10 = void 0;
            var a10 = t10.create;
            t10.inst.destroy = r10 = a10();
          }
          t10 = t10.next;
        } while (t10 !== l10);
      }
    } catch (e11) {
      sO(n10, n10.return, e11);
    }
  }
  function iS(e10, n10, t10) {
    try {
      var r10 = n10.updateQueue, l10 = null !== r10 ? r10.lastEffect : null;
      if (null !== l10) {
        var a10 = l10.next;
        r10 = a10;
        do {
          if ((r10.tag & e10) === e10) {
            var o10 = r10.inst, i10 = o10.destroy;
            if (void 0 !== i10) {
              o10.destroy = void 0, l10 = n10;
              try {
                i10();
              } catch (e11) {
                sO(l10, t10, e11);
              }
            }
          }
          r10 = r10.next;
        } while (r10 !== a10);
      }
    } catch (e11) {
      sO(n10, n10.return, e11);
    }
  }
  function iE(e10) {
    var n10 = e10.updateQueue;
    if (null !== n10) {
      var t10 = e10.stateNode;
      try {
        l2(n10, t10);
      } catch (n11) {
        sO(e10, e10.return, n11);
      }
    }
  }
  function ix(e10, n10, t10) {
    t10.props = oD(e10.type, e10.memoizedProps), t10.state = e10.memoizedState;
    try {
      t10.componentWillUnmount();
    } catch (t11) {
      sO(e10, n10, t11);
    }
  }
  function iN(e10, n10) {
    try {
      var t10 = e10.ref;
      if (null !== t10) {
        switch (e10.tag) {
          case 26:
          case 27:
          case 5:
            var r10 = e10.stateNode;
            break;
          case 30:
            var l10 = e10.stateNode, a10 = ri(e10.memoizedProps, l10);
            (null === l10.ref || l10.ref.name !== a10) && (l10.ref = cF(a10)), r10 = l10.ref;
            break;
          case 7:
            if (null === e10.stateNode) {
              var o10 = new cD(e10);
              h(e10.child, false, cq, o10, void 0, void 0), e10.stateNode = o10;
            }
            r10 = e10.stateNode;
            break;
          default:
            r10 = e10.stateNode;
        }
        "function" == typeof t10 ? e10.refCleanup = t10(r10) : t10.current = r10;
      }
    } catch (t11) {
      sO(e10, n10, t11);
    }
  }
  function iC(e10, n10) {
    var t10 = e10.ref, r10 = e10.refCleanup;
    if (null !== t10) if ("function" == typeof r10) try {
      r10();
    } catch (t11) {
      sO(e10, n10, t11);
    } finally {
      e10.refCleanup = null, null != (e10 = e10.alternate) && (e10.refCleanup = null);
    }
    else if ("function" == typeof t10) try {
      t10(null);
    } catch (t11) {
      sO(e10, n10, t11);
    }
    else t10.current = null;
  }
  function iP(e10) {
    var n10 = e10.type, t10 = e10.memoizedProps, r10 = e10.stateNode;
    try {
      switch (n10) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          t10.autoFocus && r10.focus();
          break;
        case "img":
          t10.src ? r10.src = t10.src : t10.srcSet && (r10.srcset = t10.srcSet);
      }
    } catch (n11) {
      sO(e10, e10.return, n11);
    }
  }
  function i_(e10, n10, t10) {
    try {
      var r10 = e10.stateNode;
      (function(e11, n11, t11, r11) {
        switch (n11) {
          case "div":
          case "span":
          case "svg":
          case "path":
          case "a":
          case "g":
          case "p":
          case "li":
            break;
          case "input":
            var l10 = null, a10 = null, o10 = null, i10 = null, u10 = null, c10 = null, f10 = null;
            for (m2 in t11) {
              var d2 = t11[m2];
              if (t11.hasOwnProperty(m2) && null != d2) switch (m2) {
                case "checked":
                case "value":
                  break;
                case "defaultValue":
                  u10 = d2;
                default:
                  r11.hasOwnProperty(m2) || ci(e11, n11, m2, null, r11, d2);
              }
            }
            for (var p2 in r11) {
              var m2 = r11[p2];
              if (d2 = t11[p2], r11.hasOwnProperty(p2) && (null != m2 || null != d2)) switch (p2) {
                case "type":
                  m2 !== d2 && (ni = true), a10 = m2;
                  break;
                case "name":
                  m2 !== d2 && (ni = true), l10 = m2;
                  break;
                case "checked":
                  m2 !== d2 && (ni = true), c10 = m2;
                  break;
                case "defaultChecked":
                  m2 !== d2 && (ni = true), f10 = m2;
                  break;
                case "value":
                  m2 !== d2 && (ni = true), o10 = m2;
                  break;
                case "defaultValue":
                  m2 !== d2 && (ni = true), i10 = m2;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (null != m2) throw Error(s(137, n11));
                  break;
                default:
                  m2 !== d2 && ci(e11, n11, p2, m2, r11, d2);
              }
            }
            ny(e11, o10, i10, u10, c10, f10, a10, l10);
            return;
          case "select":
            for (a10 in m2 = o10 = i10 = p2 = null, t11) if (u10 = t11[a10], t11.hasOwnProperty(a10) && null != u10) switch (a10) {
              case "value":
                break;
              case "multiple":
                m2 = u10;
              default:
                r11.hasOwnProperty(a10) || ci(e11, n11, a10, null, r11, u10);
            }
            for (l10 in r11) if (a10 = r11[l10], u10 = t11[l10], r11.hasOwnProperty(l10) && (null != a10 || null != u10)) switch (l10) {
              case "value":
                a10 !== u10 && (ni = true), p2 = a10;
                break;
              case "defaultValue":
                a10 !== u10 && (ni = true), i10 = a10;
                break;
              case "multiple":
                a10 !== u10 && (ni = true), o10 = a10;
              default:
                a10 !== u10 && ci(e11, n11, l10, a10, r11, u10);
            }
            n11 = i10, t11 = o10, r11 = m2, null != p2 ? nk(e11, !!t11, p2, false) : !!r11 != !!t11 && (null != n11 ? nk(e11, !!t11, n11, true) : nk(e11, !!t11, t11 ? [] : "", false));
            return;
          case "textarea":
            for (i10 in m2 = p2 = null, t11) if (l10 = t11[i10], t11.hasOwnProperty(i10) && null != l10 && !r11.hasOwnProperty(i10)) switch (i10) {
              case "value":
              case "children":
                break;
              default:
                ci(e11, n11, i10, null, r11, l10);
            }
            for (o10 in r11) if (l10 = r11[o10], a10 = t11[o10], r11.hasOwnProperty(o10) && (null != l10 || null != a10)) switch (o10) {
              case "value":
                l10 !== a10 && (ni = true), p2 = l10;
                break;
              case "defaultValue":
                l10 !== a10 && (ni = true), m2 = l10;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (null != l10) throw Error(s(91));
                break;
              default:
                l10 !== a10 && ci(e11, n11, o10, l10, r11, a10);
            }
            nS(e11, p2, m2);
            return;
          case "option":
            for (var h2 in t11) p2 = t11[h2], t11.hasOwnProperty(h2) && null != p2 && !r11.hasOwnProperty(h2) && ("selected" === h2 ? e11.selected = false : ci(e11, n11, h2, null, r11, p2));
            for (u10 in r11) p2 = r11[u10], m2 = t11[u10], r11.hasOwnProperty(u10) && p2 !== m2 && (null != p2 || null != m2) && ("selected" === u10 ? (p2 !== m2 && (ni = true), e11.selected = p2 && "function" != typeof p2 && "symbol" != typeof p2) : ci(e11, n11, u10, p2, r11, m2));
            return;
          case "img":
          case "link":
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "keygen":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
          case "menuitem":
            for (var g2 in t11) p2 = t11[g2], t11.hasOwnProperty(g2) && null != p2 && !r11.hasOwnProperty(g2) && ci(e11, n11, g2, null, r11, p2);
            for (c10 in r11) if (p2 = r11[c10], m2 = t11[c10], r11.hasOwnProperty(c10) && p2 !== m2 && (null != p2 || null != m2)) switch (c10) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (null != p2) throw Error(s(137, n11));
                break;
              default:
                ci(e11, n11, c10, p2, r11, m2);
            }
            return;
          default:
            if (n_(n11)) {
              for (var v2 in t11) p2 = t11[v2], t11.hasOwnProperty(v2) && void 0 !== p2 && !r11.hasOwnProperty(v2) && cu(e11, n11, v2, void 0, r11, p2);
              for (f10 in r11) p2 = r11[f10], m2 = t11[f10], r11.hasOwnProperty(f10) && p2 !== m2 && (void 0 !== p2 || void 0 !== m2) && cu(e11, n11, f10, p2, r11, m2);
              return;
            }
        }
        for (var y2 in t11) p2 = t11[y2], t11.hasOwnProperty(y2) && null != p2 && !r11.hasOwnProperty(y2) && ci(e11, n11, y2, null, r11, p2);
        for (d2 in r11) p2 = r11[d2], m2 = t11[d2], r11.hasOwnProperty(d2) && p2 !== m2 && (null != p2 || null != m2) && ci(e11, n11, d2, p2, r11, m2);
      })(r10, e10.type, t10, n10), r10[eY] = n10;
    } catch (n11) {
      sO(e10, e10.return, n11);
    }
  }
  function iz(e10, n10) {
    if ((5 === e10.tag || 6 === e10.tag) && null === e10.alternate && null !== n10) for (var t10 = 0; t10 < n10.length; t10++) cY(e10.stateNode, n10[t10]);
  }
  function iT(e10) {
    for (var n10 = e10.return; null !== n10; ) {
      if (iL(n10)) {
        var t10 = n10.stateNode, r10 = e10.stateNode;
        if (3 !== r10.nodeType) {
          var l10 = t10._eventListeners;
          if (null !== l10) for (var a10 = 0; a10 < l10.length; a10++) {
            var o10 = l10[a10];
            r10.removeEventListener(o10.type, o10.listener, o10.optionsOrUseCapture);
          }
          null != r10.reactFragments && r10.reactFragments.delete(t10);
        }
      }
      if (iO(n10)) break;
      n10 = n10.return;
    }
  }
  function iO(e10) {
    return 5 === e10.tag || 3 === e10.tag || 26 === e10.tag || 27 === e10.tag && cx(e10.type) || 4 === e10.tag;
  }
  function iL(e10) {
    return e10 && 7 === e10.tag && null !== e10.stateNode;
  }
  function iM(e10) {
    e: for (; ; ) {
      for (; null === e10.sibling; ) {
        if (null === e10.return || iO(e10.return)) return null;
        e10 = e10.return;
      }
      for (e10.sibling.return = e10.return, e10 = e10.sibling; 5 !== e10.tag && 6 !== e10.tag && 18 !== e10.tag; ) {
        if (27 === e10.tag && cx(e10.type) || 2 & e10.flags || null === e10.child || 4 === e10.tag) continue e;
        e10.child.return = e10, e10 = e10.child;
      }
      if (!(2 & e10.flags)) return e10.stateNode;
    }
  }
  function iF(e10, n10, t10, r10) {
    var l10 = e10.tag;
    if (5 === l10 || 6 === l10) l10 = e10.stateNode, n10 ? t10.insertBefore(l10, n10) : t10.appendChild(l10), iz(e10, r10), ni = true;
    else if (4 !== l10 && (27 === l10 && cx(e10.type) && (t10 = e10.stateNode), null !== (e10 = e10.child))) for (iF(e10, n10, t10, r10), e10 = e10.sibling; null !== e10; ) iF(e10, n10, t10, r10), e10 = e10.sibling;
  }
  function iD(e10) {
    var n10 = e10.stateNode, t10 = e10.memoizedProps;
    try {
      for (var r10 = e10.type, l10 = n10.attributes; l10.length; ) n10.removeAttributeNode(l10[0]);
      cs(n10, r10, t10), n10[eK] = e10, n10[eY] = t10;
    } catch (n11) {
      sO(e10, e10.return, n11);
    }
  }
  var iI = false, iA = null;
  function iR(e10) {
    (30 === e10.tag || 0 != (33554432 & e10.subtreeFlags)) && (iI = true);
  }
  var iU = null;
  function iV() {
    var e10 = iU;
    return iU = null, e10;
  }
  var iB = 0;
  function i$(e10, n10, t10, r10, l10) {
    return iB = 0, (function e11(n11, t11, r11, l11, a10) {
      for (var o10 = false; null !== n11; ) {
        if (5 === n11.tag) {
          var i10 = n11.stateNode;
          if (null !== l11) {
            var u10 = cT(i10);
            l11.push(u10), u10.view && (o10 = true);
          } else o10 || cT(i10).view && (o10 = true);
          iI = true, cP(i10, 0 === iB ? t11 : t11 + "_" + iB, r11), iB++;
        } else (22 !== n11.tag || null === n11.memoizedState) && (30 === n11.tag && a10 || e11(n11.child, t11, r11, l11, a10) && (o10 = true));
        n11 = n11.sibling;
      }
      return o10;
    })(e10.child, n10, t10, r10, l10);
  }
  function ij(e10, n10) {
    for (; null !== e10; ) 5 === e10.tag ? c_(e10.stateNode, e10.memoizedProps) : (22 !== e10.tag || null === e10.memoizedState) && (30 === e10.tag && n10 || ij(e10.child, n10)), e10 = e10.sibling;
  }
  function iH(e10) {
    if (0 != (18874368 & e10.subtreeFlags)) for (e10 = e10.child; null !== e10; ) {
      if ((22 !== e10.tag || null === e10.memoizedState) && (iH(e10), 30 === e10.tag && 0 != (18874368 & e10.flags) && e10.stateNode.paired)) {
        var n10 = e10.memoizedProps;
        if (null == n10.name || "auto" === n10.name) throw Error(s(544));
        var t10 = n10.name;
        "none" !== (n10 = rs(n10.default, n10.share)) && (i$(e10, t10, n10, null, false) || ij(e10.child, false));
      }
      e10 = e10.sibling;
    }
  }
  function iQ(e10, n10) {
    if (30 === e10.tag) {
      var t10 = e10.stateNode, r10 = e10.memoizedProps, l10 = ri(r10, t10), a10 = rs(r10.default, t10.paired ? r10.share : r10.enter);
      "none" !== a10 ? i$(e10, l10, a10, null, false) ? (iH(e10), t10.paired || n10 || st(e10, r10.onEnter)) : ij(e10.child, false) : iH(e10);
    } else if (0 != (33554432 & e10.subtreeFlags)) for (e10 = e10.child; null !== e10; ) iQ(e10, n10), e10 = e10.sibling;
    else iH(e10);
  }
  function iW(e10) {
    if (null !== iA && 0 !== iA.size) {
      var n10 = iA;
      if (0 != (18874368 & e10.subtreeFlags)) for (e10 = e10.child; null !== e10; ) {
        if (22 !== e10.tag || null === e10.memoizedState) {
          if (30 === e10.tag && 0 != (18874368 & e10.flags)) {
            var t10 = e10.memoizedProps, r10 = t10.name;
            if (null != r10 && "auto" !== r10) {
              var l10 = n10.get(r10);
              if (void 0 !== l10) {
                var a10 = rs(t10.default, t10.share);
                if ("none" !== a10 && (i$(e10, r10, a10, null, false) ? (l10.paired = a10 = e10.stateNode, a10.paired = l10, st(e10, t10.onShare)) : ij(e10.child, false)), n10.delete(r10), 0 === n10.size) break;
              }
            }
          }
          iW(e10);
        }
        e10 = e10.sibling;
      }
    }
  }
  function iq(e10) {
    if (30 === e10.tag) {
      var n10 = e10.memoizedProps, t10 = ri(n10, e10.stateNode), r10 = null !== iA ? iA.get(t10) : void 0, l10 = rs(n10.default, void 0 !== r10 ? n10.share : n10.exit);
      "none" !== l10 && (i$(e10, t10, l10, null, false) ? void 0 !== r10 ? (r10.paired = l10 = e10.stateNode, l10.paired = r10, iA.delete(t10), st(e10, n10.onShare)) : st(e10, n10.onExit) : ij(e10.child, false)), null !== iA && iW(e10);
    } else if (0 != (33554432 & e10.subtreeFlags)) for (e10 = e10.child; null !== e10; ) iq(e10), e10 = e10.sibling;
    else null !== iA && iW(e10);
  }
  function iK(e10) {
    if (0 != (18874368 & e10.subtreeFlags)) for (e10 = e10.child; null !== e10; ) {
      if (22 !== e10.tag || null === e10.memoizedState) {
        if (30 === e10.tag && 0 != (18874368 & e10.flags)) {
          var n10 = e10.stateNode;
          null !== n10.paired && (n10.paired = null, ij(e10.child, false));
        }
        iK(e10);
      }
      e10 = e10.sibling;
    }
  }
  function iY(e10) {
    if (30 === e10.tag) e10.stateNode.paired = null, ij(e10.child, false), iK(e10);
    else if (0 != (33554432 & e10.subtreeFlags)) for (e10 = e10.child; null !== e10; ) iY(e10), e10 = e10.sibling;
    else iK(e10);
  }
  function iG(e10, n10, t10, r10, l10, a10, o10) {
    for (var i10 = false; null !== n10; ) {
      if (5 === n10.tag) {
        var u10 = n10.stateNode;
        if (null !== a10 && iB < a10.length) {
          var s10, c10 = a10[iB], f10 = cT(u10);
          if ((c10.view || f10.view) && (i10 = true), s10 = 0 == (4 & e10.flags)) if (f10.clip) s10 = true;
          else {
            s10 = c10.rect;
            var d2 = f10.rect;
            s10 = s10.y !== d2.y || s10.x !== d2.x || s10.height !== d2.height || s10.width !== d2.width;
          }
          s10 && (e10.flags |= 4), f10.abs ? f10 = !c10.abs : (c10 = c10.rect, f10 = f10.rect, f10 = c10.height !== f10.height || c10.width !== f10.width), f10 && (e10.flags |= 32);
        } else e10.flags |= 32;
        0 != (4 & e10.flags) && cP(u10, 0 === iB ? t10 : t10 + "_" + iB, l10), i10 && 0 != (4 & e10.flags) || (null === iU && (iU = []), iU.push(u10, 0 === iB ? r10 : r10 + "_" + iB, n10.memoizedProps)), iB++;
      } else (22 !== n10.tag || null === n10.memoizedState) && (30 === n10.tag && o10 ? e10.flags |= 32 & n10.flags : iG(e10, n10.child, t10, r10, l10, a10, o10) && (i10 = true));
      n10 = n10.sibling;
    }
    return i10;
  }
  var iX = false, iZ = false, iJ = false, i0 = false, i1 = "function" == typeof WeakSet ? WeakSet : Set, i2 = null, i3 = false, i4 = false, i6 = false, i8 = false;
  function i5(e10) {
    for (; null !== i2; ) {
      var n10 = i2, t10 = e10, r10 = n10.alternate, l10 = n10.flags;
      switch (n10.tag) {
        case 0:
        case 11:
        case 15:
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 1:
          if (0 != (1024 & l10) && null !== r10) {
            t10 = void 0, l10 = r10.memoizedProps, r10 = r10.memoizedState;
            var a10 = n10.stateNode;
            try {
              var o10 = oD(n10.type, l10);
              t10 = a10.getSnapshotBeforeUpdate(o10, r10), a10.__reactInternalSnapshotBeforeUpdate = t10;
            } catch (e11) {
              sO(n10, n10.return, e11);
            }
          }
          break;
        case 3:
          if (0 != (1024 & l10)) {
            if (9 === (t10 = (r10 = n10.stateNode.containerInfo).nodeType)) cG(r10);
            else if (1 === t10) switch (r10.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                cG(r10);
                break;
              default:
                r10.textContent = "";
            }
          }
          break;
        case 30:
          t10 && null !== r10 && (t10 = ri(r10.memoizedProps, r10.stateNode), "none" !== (l10 = rs((l10 = n10.memoizedProps).default, l10.update)) && i$(r10, t10, l10, r10.memoizedState = [], true));
          break;
        default:
          if (0 != (1024 & l10)) throw Error(s(163));
      }
      if (null !== (r10 = n10.sibling)) {
        r10.return = n10.return, i2 = r10;
        break;
      }
      i2 = n10.return;
    }
  }
  function i9(e10, n10, t10) {
    var r10 = t10.flags;
    switch (t10.tag) {
      case 0:
      case 11:
      case 15:
        up(e10, t10), 4 & r10 && ik(5, t10);
        break;
      case 1:
        if (up(e10, t10), 4 & r10) if (e10 = t10.stateNode, null === n10) try {
          e10.componentDidMount();
        } catch (e11) {
          sO(t10, t10.return, e11);
        }
        else {
          var l10 = oD(t10.type, n10.memoizedProps);
          n10 = n10.memoizedState;
          try {
            e10.componentDidUpdate(l10, n10, e10.__reactInternalSnapshotBeforeUpdate);
          } catch (e11) {
            sO(t10, t10.return, e11);
          }
        }
        64 & r10 && iE(t10), 512 & r10 && iN(t10, t10.return);
        break;
      case 3:
        if (up(e10, t10), 64 & r10 && null !== (e10 = t10.updateQueue)) {
          if (n10 = null, null !== t10.child) switch (t10.child.tag) {
            case 27:
            case 5:
            case 1:
              n10 = t10.child.stateNode;
          }
          try {
            l2(e10, n10);
          } catch (e11) {
            sO(t10, t10.return, e11);
          }
        }
        break;
      case 27:
        null === n10 && 4 & r10 && iD(t10);
      case 26:
      case 5:
        up(e10, t10), null === n10 && 4 & r10 && iP(t10), 512 & r10 && iN(t10, t10.return);
        break;
      case 12:
        up(e10, t10);
        break;
      case 31:
        up(e10, t10), 4 & r10 && ul(e10, t10);
        break;
      case 13:
        up(e10, t10), 4 & r10 && ua(e10, t10), 64 & r10 && null !== (e10 = t10.memoizedState) && null !== (e10 = e10.dehydrated) && (function(e11, n11) {
          var t11 = e11.ownerDocument;
          if ("$~" === e11.data) e11._reactRetry = n11;
          else if ("$?" !== e11.data || "loading" !== t11.readyState) n11();
          else {
            var r11 = function() {
              n11(), t11.removeEventListener("DOMContentLoaded", r11);
            };
            t11.addEventListener("DOMContentLoaded", r11), e11._reactRetry = r11;
          }
        })(e10, t10 = sD.bind(null, t10));
        break;
      case 22:
        if (!(r10 = null !== t10.memoizedState || iX)) {
          var a10 = null !== n10 && null !== n10.memoizedState || iZ;
          n10 = iX, l10 = iZ, iX = r10, (iZ = a10) && !l10 ? (r10 = 2, 0 != (8772 & t10.subtreeFlags) && (r10 |= 1), (function e11(n11, t11, r11) {
            for (r11 = 0 != (8772 & t11.subtreeFlags) ? r11 : -2 & r11, t11 = t11.child; null !== t11; ) {
              var l11 = t11.alternate, a11 = n11, o10 = t11, i10 = o10.flags, u10 = 0 != (1 & r11);
              switch (o10.tag) {
                case 0:
                case 11:
                case 15:
                  e11(a11, o10, r11), ik(4, o10);
                  break;
                case 1:
                  if (e11(a11, o10, r11), "function" == typeof (a11 = (l11 = o10).stateNode).componentDidMount) try {
                    a11.componentDidMount();
                  } catch (e12) {
                    sO(l11, l11.return, e12);
                  }
                  if (null !== (a11 = (l11 = o10).updateQueue)) {
                    var s10 = l11.stateNode;
                    try {
                      var c10 = a11.shared.hiddenCallbacks;
                      if (null !== c10) for (a11.shared.hiddenCallbacks = null, a11 = 0; a11 < c10.length; a11++) l1(c10[a11], s10);
                    } catch (e12) {
                      sO(l11, l11.return, e12);
                    }
                  }
                  u10 && 64 & i10 && iE(o10), iN(o10, o10.return);
                  break;
                case 27:
                  0 != (2 & r11) && iD(o10);
                case 26:
                case 5:
                  if (5 === o10.tag) {
                    s10 = o10;
                    for (var f10 = s10.return; null !== f10 && (iL(f10) && cY(s10.stateNode, f10.stateNode), !iO(f10)); ) f10 = f10.return;
                  }
                  e11(a11, o10, r11), u10 && null === l11 && 4 & i10 && iP(o10), iN(o10, o10.return);
                  break;
                case 12:
                  e11(a11, o10, r11);
                  break;
                case 31:
                  e11(a11, o10, r11), u10 && 4 & i10 && ul(a11, o10);
                  break;
                case 13:
                  e11(a11, o10, r11), u10 && 4 & i10 && ua(a11, o10);
                  break;
                case 22:
                  null === o10.memoizedState && e11(a11, o10, r11), iN(o10, o10.return);
                  break;
                case 30:
                  e11(a11, o10, r11), iN(o10, o10.return);
                  break;
                case 7:
                  iN(o10, o10.return);
                default:
                  e11(a11, o10, r11);
              }
              t11 = t11.sibling;
            }
          })(e10, t10, r10)) : up(e10, t10), iX = n10, iZ = l10;
        }
        break;
      case 30:
        up(e10, t10), 512 & r10 && iN(t10, t10.return);
        break;
      case 7:
        512 & r10 && iN(t10, t10.return);
      default:
        up(e10, t10);
    }
  }
  function i7(e10, n10) {
    for (e10 = e10.child; null !== e10; ) (function e11(n11, t10) {
      switch (n11.tag) {
        case 5:
        case 26:
          try {
            var r10 = n11.stateNode;
            if (t10) {
              var l10 = r10.style;
              "function" == typeof l10.setProperty ? l10.setProperty("display", "none", "important") : l10.display = "none";
            } else {
              var a10 = n11.stateNode, o10 = n11.memoizedProps.style, i10 = null != o10 && o10.hasOwnProperty("display") ? o10.display : null;
              a10.style.display = null == i10 || "boolean" == typeof i10 ? "" : ("" + i10).trim();
            }
          } catch (e12) {
            sO(n11, n11.return, e12);
          }
          !(function n12(t11, r11) {
            if (67108864 & t11.subtreeFlags) for (t11 = t11.child; null !== t11; ) {
              e: {
                var l11 = t11;
                switch (l11.tag) {
                  case 4:
                    e11(l11, r11);
                    break e;
                  case 22:
                    null === l11.memoizedState && n12(l11, r11);
                    break e;
                  default:
                    n12(l11, r11);
                }
              }
              t11 = t11.sibling;
            }
          })(n11, t10);
          break;
        case 6:
          try {
            n11.stateNode.nodeValue = t10 ? "" : n11.memoizedProps, ni = true;
          } catch (e12) {
            sO(n11, n11.return, e12);
          }
          break;
        case 18:
          try {
            var u10 = n11.stateNode;
            t10 ? cC(u10, true) : cC(n11.stateNode, false);
          } catch (e12) {
            sO(n11, n11.return, e12);
          }
          break;
        case 22:
        case 23:
          null === n11.memoizedState && i7(n11, t10);
          break;
        default:
          i7(n11, t10);
      }
    })(e10, n10), e10 = e10.sibling;
  }
  var ue = null, un = false;
  function ut(e10, n10, t10) {
    for (t10 = t10.child; null !== t10; ) ur(e10, n10, t10), t10 = t10.sibling;
  }
  function ur(e10, n10, t10) {
    if (eP && "function" == typeof eP.onCommitFiberUnmount) try {
      eP.onCommitFiberUnmount(eC, t10);
    } catch (e11) {
    }
    switch (t10.tag) {
      case 26:
        iZ || iC(t10, n10), ut(e10, n10, t10), t10.memoizedState ? t10.memoizedState.count-- : t10.stateNode && (t10 = t10.stateNode).parentNode.removeChild(t10);
        break;
      case 27:
        iZ || iC(t10, n10);
        var r10 = ue, l10 = un;
        cx(t10.type) && (ue = t10.stateNode, un = false), ut(e10, n10, t10), c6(t10.stateNode, t10.type, t10.memoizedProps), ue = r10, un = l10;
        break;
      case 5:
        iZ || iC(t10, n10), 5 !== t10.tag && 6 !== t10.tag || iT(t10);
      case 6:
        if (r10 = ue, l10 = un, ue = null, ut(e10, n10, t10), ue = r10, un = l10, null !== ue) if (un) try {
          (9 === ue.nodeType ? ue.body : "HTML" === ue.nodeName ? ue.ownerDocument.body : ue).removeChild(t10.stateNode), ni = true;
        } catch (e11) {
          sO(t10, n10, e11);
        }
        else try {
          ue.removeChild(t10.stateNode), ni = true;
        } catch (e11) {
          sO(t10, n10, e11);
        }
        break;
      case 18:
        null !== ue && (un ? (cN(9 === (e10 = ue).nodeType ? e10.body : "HTML" === e10.nodeName ? e10.ownerDocument.body : e10, t10.stateNode), f8(e10)) : cN(ue, t10.stateNode));
        break;
      case 4:
        r10 = ue, l10 = un, ue = t10.stateNode.containerInfo, un = true, ut(e10, n10, t10), ue = r10, un = l10;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        iS(2, t10, n10), iZ || iS(4, t10, n10), ut(e10, n10, t10);
        break;
      case 1:
        iZ || (iC(t10, n10), "function" == typeof (r10 = t10.stateNode).componentWillUnmount && ix(t10, n10, r10)), ut(e10, n10, t10);
        break;
      case 21:
      default:
        ut(e10, n10, t10);
        break;
      case 22:
        iZ = (r10 = iZ) || null !== t10.memoizedState, ut(e10, n10, t10), iZ = r10;
        break;
      case 30:
        iC(t10, n10), ut(e10, n10, t10);
        break;
      case 7:
        iZ || iC(t10, n10), ut(e10, n10, t10);
    }
  }
  function ul(e10, n10) {
    if (null === n10.memoizedState && null !== (e10 = n10.alternate) && null !== (e10 = e10.memoizedState)) {
      e10 = e10.dehydrated;
      try {
        f8(e10);
      } catch (e11) {
        sO(n10, n10.return, e11);
      }
    }
  }
  function ua(e10, n10) {
    if (null === n10.memoizedState && null !== (e10 = n10.alternate) && null !== (e10 = e10.memoizedState) && null !== (e10 = e10.dehydrated)) try {
      f8(e10);
    } catch (e11) {
      sO(n10, n10.return, e11);
    }
  }
  function uo(e10, n10) {
    var t10 = (function(e11) {
      switch (e11.tag) {
        case 31:
        case 13:
        case 19:
          var n11 = e11.stateNode;
          return null === n11 && (n11 = e11.stateNode = new i1()), n11;
        case 22:
          return null === (n11 = (e11 = e11.stateNode)._retryCache) && (n11 = e11._retryCache = new i1()), n11;
        default:
          throw Error(s(435, e11.tag));
      }
    })(e10);
    n10.forEach(function(n11) {
      if (!t10.has(n11)) {
        t10.add(n11);
        var r10 = sI.bind(null, e10, n11);
        n11.then(r10, r10);
      }
    });
  }
  function ui(e10, n10, t10) {
    var r10 = n10.deletions;
    if (null !== r10) for (var l10 = 0; l10 < r10.length; l10++) {
      var a10 = r10[l10], o10 = e10, i10 = n10, u10 = i10;
      e: for (; null !== u10; ) {
        switch (u10.tag) {
          case 27:
            if (cx(u10.type)) {
              ue = u10.stateNode, un = false;
              break e;
            }
            break;
          case 5:
            ue = u10.stateNode, un = false;
            break e;
          case 3:
          case 4:
            ue = u10.stateNode.containerInfo, un = true;
            break e;
        }
        u10 = u10.return;
      }
      if (null === ue) throw Error(s(160));
      ur(o10, i10, a10), ue = null, un = false, null !== (o10 = a10.alternate) && (o10.return = null), a10.return = null;
    }
    if (13886 & n10.subtreeFlags) for (n10 = n10.child; null !== n10; ) us(n10, e10, t10), n10 = n10.sibling;
  }
  var uu = null;
  function us(e10, n10, t10) {
    var r10 = e10.alternate, l10 = e10.flags;
    switch (e10.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (4 & l10 && null !== (r10 = null !== (r10 = e10.updateQueue) ? r10.events : null)) for (var a10 = 0; a10 < r10.length; a10++) {
          var o10 = r10[a10];
          o10.ref.impl = o10.nextImpl;
        }
        ui(n10, e10, t10), uc(e10), 4 & l10 && (iS(3, e10, e10.return), ik(3, e10), iS(5, e10, e10.return));
        break;
      case 1:
        ui(n10, e10, t10), uc(e10), 512 & l10 && (iZ || null === r10 || iC(r10, r10.return)), 64 & l10 && iX && null !== (e10 = e10.updateQueue) && null !== (n10 = e10.callbacks) && (t10 = e10.shared.hiddenCallbacks, e10.shared.hiddenCallbacks = null === t10 ? n10 : t10.concat(n10));
        break;
      case 26:
        if (a10 = uu, ui(n10, e10, t10), uc(e10), 512 & l10 && (iZ || null === r10 || iC(r10, r10.return)), 4 & l10) if (t10 = null !== r10 ? r10.memoizedState : null, n10 = e10.memoizedState, null === r10) if (null === n10) if (null === e10.stateNode) {
          e: {
            n10 = e10.type, t10 = e10.memoizedProps, r10 = a10.ownerDocument || a10;
            n: switch (n10) {
              case "title":
                (!(l10 = r10.getElementsByTagName("title")[0]) || l10[e1] || l10[eK] || "http://www.w3.org/2000/svg" === l10.namespaceURI || l10.hasAttribute("itemprop")) && (l10 = r10.createElement(n10), r10.head.insertBefore(l10, r10.querySelector("head > title"))), cs(l10, n10, t10), l10[eK] = e10, e9(l10), n10 = l10;
                break e;
              case "link":
                if (a10 = fm("link", "href", r10).get(n10 + (t10.href || ""))) {
                  for (o10 = 0; o10 < a10.length; o10++) if ((l10 = a10[o10]).getAttribute("href") === (null == t10.href || "" === t10.href ? null : t10.href) && l10.getAttribute("rel") === (null == t10.rel ? null : t10.rel) && l10.getAttribute("title") === (null == t10.title ? null : t10.title) && l10.getAttribute("crossorigin") === (null == t10.crossOrigin ? null : t10.crossOrigin)) {
                    a10.splice(o10, 1);
                    break n;
                  }
                }
                cs(l10 = r10.createElement(n10), n10, t10), r10.head.appendChild(l10);
                break;
              case "meta":
                if (a10 = fm("meta", "content", r10).get(n10 + (t10.content || ""))) {
                  for (o10 = 0; o10 < a10.length; o10++) if ((l10 = a10[o10]).getAttribute("content") === (null == t10.content ? null : "" + t10.content) && l10.getAttribute("name") === (null == t10.name ? null : t10.name) && l10.getAttribute("property") === (null == t10.property ? null : t10.property) && l10.getAttribute("http-equiv") === (null == t10.httpEquiv ? null : t10.httpEquiv) && l10.getAttribute("charset") === (null == t10.charSet ? null : t10.charSet)) {
                    a10.splice(o10, 1);
                    break n;
                  }
                }
                cs(l10 = r10.createElement(n10), n10, t10), r10.head.appendChild(l10);
                break;
              default:
                throw Error(s(468, n10));
            }
            l10[eK] = e10, e9(l10), n10 = l10;
          }
          e10.stateNode = n10;
        } else fh(a10, e10.type, e10.stateNode);
        else e10.stateNode = fs(a10, n10, e10.memoizedProps);
        else t10 !== n10 ? (null === t10 ? null !== r10.stateNode && (t10 = r10.stateNode).parentNode.removeChild(t10) : t10.count--, null === n10 ? fh(a10, e10.type, e10.stateNode) : fs(a10, n10, e10.memoizedProps)) : null === n10 && null !== e10.stateNode && i_(e10, e10.memoizedProps, r10.memoizedProps);
        break;
      case 27:
        ui(n10, e10, t10), uc(e10), 512 & l10 && (iZ || null === r10 || iC(r10, r10.return)), null !== r10 && 4 & l10 && i_(e10, e10.memoizedProps, r10.memoizedProps);
        break;
      case 5:
        if (a10 = iJ, iJ = false, ui(n10, e10, t10), iJ = a10, uc(e10), 512 & l10 && (iZ || null === r10 || iC(r10, r10.return)), 32 & e10.flags) {
          n10 = e10.stateNode;
          try {
            nx(n10, ""), ni = true;
          } catch (n11) {
            sO(e10, e10.return, n11);
          }
        }
        4 & l10 && null != e10.stateNode && (n10 = e10.memoizedProps, i_(e10, n10, null !== r10 ? r10.memoizedProps : n10)), 1024 & l10 && (i0 = true);
        break;
      case 6:
        if (ui(n10, e10, t10), uc(e10), 4 & l10) {
          if (null === e10.stateNode) throw Error(s(162));
          n10 = e10.memoizedProps, t10 = e10.stateNode;
          try {
            t10.nodeValue = n10, ni = true;
          } catch (n11) {
            sO(e10, e10.return, n11);
          }
        }
        break;
      case 3:
        if (ni = false, fp = null, a10 = uu, uu = c7(n10.containerInfo), ui(n10, e10, t10), uu = a10, uc(e10), 4 & l10 && null !== r10 && r10.memoizedState.isDehydrated) try {
          f8(n10.containerInfo);
        } catch (n11) {
          sO(e10, e10.return, n11);
        }
        i0 && (i0 = false, (function e11(n11) {
          if (1024 & n11.subtreeFlags) for (n11 = n11.child; null !== n11; ) {
            var t11 = n11;
            e11(t11), 5 === t11.tag && 1024 & t11.flags && (t11 = t11.stateNode, fD = true, t11.reset(), fD = false), n11 = n11.sibling;
          }
        })(e10)), ni = false;
        break;
      case 4:
        r10 = iJ, iJ = iX, l10 = nu(), a10 = uu, uu = c7(e10.stateNode.containerInfo), ui(n10, e10, t10), uc(e10), uu = a10, ni && i4 && (i6 = true), ni = l10, iJ = r10;
        break;
      case 12:
        ui(n10, e10, t10), uc(e10);
        break;
      case 31:
      case 19:
        ui(n10, e10, t10), uc(e10), 4 & l10 && null !== (n10 = e10.updateQueue) && (e10.updateQueue = null, uo(e10, n10));
        break;
      case 13:
        ui(n10, e10, t10), uc(e10), 8192 & e10.child.flags && null !== e10.memoizedState != (null !== r10 && null !== r10.memoizedState) && (uq = eb()), 4 & l10 && null !== (n10 = e10.updateQueue) && (e10.updateQueue = null, uo(e10, n10));
        break;
      case 22:
        a10 = null !== e10.memoizedState, o10 = null !== r10 && null !== r10.memoizedState;
        var i10 = iX, u10 = iZ, c10 = iJ;
        iX = i10 || a10, iJ = c10 || a10, iZ = u10 || o10, ui(n10, e10, t10), iZ = u10, iJ = c10, iX = i10, uc(e10), 8192 & l10 && ((n10 = e10.stateNode)._visibility = a10 ? -2 & n10._visibility : 1 | n10._visibility, a10 && (null === r10 || o10 || iX || iZ || (function e11(n11, t11) {
          for (n11 = n11.child; null !== n11; ) {
            var r11 = n11;
            switch (r11.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                iS(4, r11, r11.return), e11(r11, t11);
                break;
              case 1:
                iC(r11, r11.return);
                var l11 = r11.stateNode;
                "function" == typeof l11.componentWillUnmount && ix(r11, r11.return, l11), e11(r11, t11);
                break;
              case 27:
                0 != (2 & t11) && c6(r11.stateNode, r11.type, r11.memoizedProps);
              case 26:
              case 5:
                iC(r11, r11.return), 5 !== r11.tag && 6 !== r11.tag || iT(r11), e11(r11, t11);
                break;
              case 22:
                null === r11.memoizedState && e11(r11, t11);
                break;
              case 30:
                iC(r11, r11.return), e11(r11, t11);
                break;
              case 7:
                iC(r11, r11.return);
              default:
                e11(r11, t11);
            }
            n11 = n11.sibling;
          }
        })(e10, 2)), !a10 && iJ || i7(e10, a10)), 4 & l10 && null !== (n10 = e10.updateQueue) && null !== (t10 = n10.retryQueue) && (n10.retryQueue = null, uo(e10, t10));
        break;
      case 30:
        512 & l10 && (iZ || null === r10 || iC(r10, r10.return)), l10 = nu(), a10 = i4, o10 = (335544064 & t10) === t10, i10 = e10.memoizedProps, i4 = o10 && "none" !== rs(i10.default, i10.update), ui(n10, e10, t10), uc(e10), o10 && null !== r10 && ni && (e10.flags |= 4), i4 = a10, ni = l10;
        break;
      case 21:
        break;
      case 7:
        r10 && null !== r10.stateNode && (r10.stateNode._fragmentFiber = e10);
      default:
        ui(n10, e10, t10), uc(e10);
    }
  }
  function uc(e10) {
    var n10 = e10.flags;
    if (2 & n10) {
      try {
        for (var t10, r10 = null, l10 = e10.return; null !== l10; ) {
          if (iL(l10)) {
            var a10 = l10.stateNode;
            null === r10 ? r10 = [a10] : r10.push(a10);
          }
          if (iO(l10)) {
            t10 = l10;
            break;
          }
          l10 = l10.return;
        }
        if (null == t10) throw Error(s(160));
        switch (t10.tag) {
          case 27:
            var o10 = t10.stateNode, i10 = iM(e10);
            iF(e10, i10, o10, r10);
            break;
          case 5:
            var u10 = t10.stateNode;
            32 & t10.flags && (nx(u10, ""), t10.flags &= -33);
            var c10 = iM(e10);
            iF(e10, c10, u10, r10);
            break;
          case 3:
          case 4:
            var f10 = t10.stateNode.containerInfo, d2 = iM(e10);
            !(function e11(n11, t11, r11, l11) {
              var a11 = n11.tag;
              if (5 === a11 || 6 === a11) a11 = n11.stateNode, t11 ? (9 === r11.nodeType ? r11.body : "HTML" === r11.nodeName ? r11.ownerDocument.body : r11).insertBefore(a11, t11) : ((t11 = 9 === r11.nodeType ? r11.body : "HTML" === r11.nodeName ? r11.ownerDocument.body : r11).appendChild(a11), null != (r11 = r11._reactRootContainer) || null !== t11.onclick || (t11.onclick = nL)), iz(n11, l11), ni = true;
              else if (4 !== a11 && (27 === a11 && cx(n11.type) && (r11 = n11.stateNode, t11 = null), null !== (n11 = n11.child))) for (e11(n11, t11, r11, l11), n11 = n11.sibling; null !== n11; ) e11(n11, t11, r11, l11), n11 = n11.sibling;
            })(e10, d2, f10, r10);
            break;
          default:
            throw Error(s(161));
        }
      } catch (n11) {
        sO(e10, e10.return, n11);
      }
      e10.flags &= -3;
    }
    4096 & n10 && (e10.flags &= -4097);
  }
  function uf(e10, n10) {
    if (9270 & n10.subtreeFlags) for (n10 = n10.child; null !== n10; ) ud(n10, e10), n10 = n10.sibling;
    else !(function e11(n11, t10) {
      for (n11 = n11.child; null !== n11; ) {
        if (30 === n11.tag) {
          var r10 = n11.memoizedProps, l10 = n11.stateNode, a10 = ri(r10, l10), o10 = rs(r10.default, r10.update);
          if (t10) var i10 = null === (l10 = l10.clones) ? null : l10.map(cO);
          else i10 = n11.memoizedState, n11.memoizedState = null;
          l10 = n11;
          var u10 = n11.child;
          iB = 0, a10 = iG(l10, u10, a10, a10, o10, i10, false), 0 != (4 & n11.flags) && a10 && (t10 || st(n11, r10.onUpdate));
        } else 0 != (33554432 & n11.subtreeFlags) && e11(n11, t10);
        n11 = n11.sibling;
      }
    })(n10, false);
  }
  function ud(e10, n10) {
    var t10 = e10.alternate;
    if (null === t10) iQ(e10, false);
    else switch (e10.tag) {
      case 3:
        if (i8 = i3 = false, iV(), uf(n10, e10), !i3 && !i6) {
          if (null !== (e10 = iU)) for (var r10 = 0; r10 < e10.length; r10 += 3) {
            t10 = e10[r10];
            var l10 = e10[r10 + 1];
            c_(t10, e10[r10 + 2]), null !== (t10 = t10.ownerDocument.documentElement) && t10.animate({ opacity: [0, 0], pointerEvents: ["none", "none"] }, { duration: 0, fill: "forwards", pseudoElement: "::view-transition-group(" + l10 + ")" });
          }
          null !== (e10 = 9 === (e10 = n10.containerInfo).nodeType ? e10.documentElement : e10.ownerDocument.documentElement) && "" === e10.style.viewTransitionName && (e10.style.viewTransitionName = "none", e10.animate({ opacity: [0, 0], pointerEvents: ["none", "none"] }, { duration: 0, fill: "forwards", pseudoElement: "::view-transition-group(root)" }), e10.animate({ width: [0, 0], height: [0, 0] }, { duration: 0, fill: "forwards", pseudoElement: "::view-transition" })), i8 = true;
        }
        iU = null;
        break;
      case 5:
      default:
        uf(n10, e10);
        break;
      case 4:
        r10 = i3, i3 = false, uf(n10, e10), i3 && (i6 = true), i3 = r10;
        break;
      case 22:
        null === e10.memoizedState && (null !== t10.memoizedState ? iQ(e10, false) : uf(n10, e10));
        break;
      case 30:
        r10 = i3, l10 = iV(), i3 = false, uf(n10, e10), i3 && (e10.flags |= 4);
        var a10 = e10.memoizedProps, o10 = e10.stateNode;
        n10 = ri(a10, o10), o10 = ri(t10.memoizedProps, o10);
        var i10 = rs(a10.default, a10.update);
        "none" === i10 ? n10 = false : (a10 = t10.memoizedState, t10.memoizedState = null, t10 = e10.child, iB = 0, n10 = iG(e10, t10, n10, o10, i10, a10, true), iB !== (null === a10 ? 0 : a10.length) && (e10.flags |= 32)), 0 != (4 & e10.flags) && n10 ? (st(e10, e10.memoizedProps.onUpdate), iU = l10) : null !== l10 && (l10.push.apply(l10, iU), iU = l10), i3 = 0 != (32 & e10.flags) || r10;
    }
  }
  function up(e10, n10) {
    if (8772 & n10.subtreeFlags) for (n10 = n10.child; null !== n10; ) i9(e10, n10.alternate, n10), n10 = n10.sibling;
  }
  function um(e10, n10) {
    var t10 = null;
    null !== e10 && null !== e10.memoizedState && null !== e10.memoizedState.cachePool && (t10 = e10.memoizedState.cachePool.pool), e10 = null, null !== n10.memoizedState && null !== n10.memoizedState.cachePool && (e10 = n10.memoizedState.cachePool.pool), e10 !== t10 && (null != e10 && e10.refCount++, null != t10 && lm(t10));
  }
  function uh(e10, n10) {
    e10 = null, null !== n10.alternate && (e10 = n10.alternate.memoizedState.cache), (n10 = n10.memoizedState.cache) !== e10 && (n10.refCount++, null != e10 && lm(e10));
  }
  function ug(e10, n10, t10, r10) {
    var l10 = (335544064 & t10) === t10;
    if (n10.subtreeFlags & (l10 ? 10262 : 10256)) for (n10 = n10.child; null !== n10; ) uv(e10, n10, t10, r10), n10 = n10.sibling;
    else l10 && (function e11(n11) {
      for (n11 = n11.child; null !== n11; ) 30 === n11.tag ? ij(n11.child, false) : 0 != (33554432 & n11.subtreeFlags) && e11(n11), n11 = n11.sibling;
    })(n10);
  }
  function uv(e10, n10, t10, r10) {
    var l10 = (335544064 & t10) === t10;
    l10 && null === n10.alternate && null !== n10.return && null !== n10.return.alternate && iY(n10);
    var a10 = n10.flags;
    switch (n10.tag) {
      case 0:
      case 11:
      case 15:
        ug(e10, n10, t10, r10), 2048 & a10 && ik(9, n10);
        break;
      case 1:
      case 31:
      case 13:
      default:
        ug(e10, n10, t10, r10);
        break;
      case 3:
        ug(e10, n10, t10, r10), l10 && i8 && ("root" === (e10 = 9 === (e10 = e10.containerInfo).nodeType ? e10.body : "HTML" === e10.nodeName ? e10.ownerDocument.body : e10).style.viewTransitionName && (e10.style.viewTransitionName = ""), null !== (e10 = e10.ownerDocument.documentElement) && "none" === e10.style.viewTransitionName && (e10.style.viewTransitionName = "")), 2048 & a10 && (a10 = null, null !== n10.alternate && (a10 = n10.alternate.memoizedState.cache), (n10 = n10.memoizedState.cache) !== a10 && (n10.refCount++, null != a10 && lm(a10)));
        break;
      case 12:
        if (2048 & a10) {
          ug(e10, n10, t10, r10), a10 = n10.stateNode;
          try {
            var o10 = n10.memoizedProps, i10 = o10.id, u10 = o10.onPostCommit;
            "function" == typeof u10 && u10(i10, null === n10.alternate ? "mount" : "update", a10.passiveEffectDuration, -0);
          } catch (e11) {
            sO(n10, n10.return, e11);
          }
        } else ug(e10, n10, t10, r10);
        break;
      case 23:
        break;
      case 22:
        o10 = n10.stateNode, i10 = n10.alternate, null !== n10.memoizedState ? (l10 && null !== i10 && null === i10.memoizedState && iY(i10), 2 & o10._visibility ? ug(e10, n10, t10, r10) : uy(e10, n10)) : (l10 && null !== i10 && null !== i10.memoizedState && iY(n10), 2 & o10._visibility ? ug(e10, n10, t10, r10) : (o10._visibility |= 2, (function e11(n11, t11, r11, l11, a11) {
          for (a11 = a11 && 0 != (10256 & t11.subtreeFlags), t11 = t11.child; null !== t11; ) {
            var o11 = t11, i11 = o11.flags;
            switch (o11.tag) {
              case 0:
              case 11:
              case 15:
                e11(n11, o11, r11, l11, a11), ik(8, o11);
                break;
              case 23:
                break;
              case 22:
                var u11 = o11.stateNode;
                null !== o11.memoizedState ? 2 & u11._visibility ? e11(n11, o11, r11, l11, a11) : uy(n11, o11) : (u11._visibility |= 2, e11(n11, o11, r11, l11, a11)), a11 && 2048 & i11 && um(o11.alternate, o11);
                break;
              case 24:
                e11(n11, o11, r11, l11, a11), a11 && 2048 & i11 && uh(o11.alternate, o11);
                break;
              default:
                e11(n11, o11, r11, l11, a11);
            }
            t11 = t11.sibling;
          }
        })(e10, n10, t10, r10, 0 != (10256 & n10.subtreeFlags)))), 2048 & a10 && um(i10, n10);
        break;
      case 24:
        ug(e10, n10, t10, r10), 2048 & a10 && uh(n10.alternate, n10);
        break;
      case 30:
        l10 && null !== (a10 = n10.alternate) && (ij(a10.child, true), ij(n10.child, true)), ug(e10, n10, t10, r10);
    }
  }
  function uy(e10, n10) {
    if (10256 & n10.subtreeFlags) for (n10 = n10.child; null !== n10; ) {
      var t10 = n10, r10 = t10.flags;
      switch (t10.tag) {
        case 22:
          uy(e10, t10), 2048 & r10 && um(t10.alternate, t10);
          break;
        case 24:
          uy(e10, t10), 2048 & r10 && uh(t10.alternate, t10);
          break;
        default:
          uy(e10, t10);
      }
      n10 = n10.sibling;
    }
  }
  var ub = 8192;
  function uw(e10, n10, t10) {
    if (e10.subtreeFlags & ub) for (e10 = e10.child; null !== e10; ) uk(e10, n10, t10), e10 = e10.sibling;
  }
  function uk(e10, n10, t10) {
    switch (e10.tag) {
      case 26:
        uw(e10, n10, t10), e10.flags & ub && (null !== e10.memoizedState ? (function(e11, n11, t11, r11) {
          if ("stylesheet" === t11.type && ("string" != typeof r11.media || false !== matchMedia(r11.media).matches) && 0 == (4 & t11.state.loading)) {
            if (null === t11.instance) {
              var l11 = fl(r11.href), a10 = n11.querySelector(fa(l11));
              if (a10) {
                null !== (n11 = a10._p) && "object" == typeof n11 && "function" == typeof n11.then && (e11.count++, e11 = fS.bind(e11), n11.then(e11, e11)), t11.state.loading |= 4, t11.instance = a10, e9(a10);
                return;
              }
              a10 = n11.ownerDocument || n11, r11 = fo(r11), (l11 = c5.get(l11)) && ff(r11, l11), e9(a10 = a10.createElement("link"));
              var o10 = a10;
              o10._p = new Promise(function(e12, n12) {
                o10.onload = e12, o10.onerror = n12;
              }), cs(a10, "link", r11), t11.instance = a10;
            }
            null === e11.stylesheets && (e11.stylesheets = /* @__PURE__ */ new Map()), e11.stylesheets.set(t11, n11), (n11 = t11.state.preload) && 0 == (3 & t11.state.loading) && (e11.count++, t11 = fS.bind(e11), n11.addEventListener("load", t11), n11.addEventListener("error", t11));
          }
        })(t10, uu, e10.memoizedState, e10.memoizedProps) : (e10 = e10.stateNode, (335544128 & n10) === n10 && fb(t10, e10)));
        break;
      case 5:
        uw(e10, n10, t10), e10.flags & ub && (e10 = e10.stateNode, (335544128 & n10) === n10 && fb(t10, e10));
        break;
      case 3:
      case 4:
        var r10 = uu;
        uu = c7(e10.stateNode.containerInfo), uw(e10, n10, t10), uu = r10;
        break;
      case 22:
        null === e10.memoizedState && (null !== (r10 = e10.alternate) && null !== r10.memoizedState ? (r10 = ub, ub = 16777216, uw(e10, n10, t10), ub = r10) : uw(e10, n10, t10));
        break;
      case 30:
        if (0 != (e10.flags & ub) && null != (r10 = e10.memoizedProps.name) && "auto" !== r10) {
          var l10 = e10.stateNode;
          l10.paired = null, null === iA && (iA = /* @__PURE__ */ new Map()), iA.set(r10, l10);
        }
        uw(e10, n10, t10);
        break;
      default:
        uw(e10, n10, t10);
    }
  }
  function uS(e10) {
    var n10 = e10.alternate;
    if (null !== n10 && null !== (e10 = n10.child)) {
      n10.child = null;
      do
        n10 = e10.sibling, e10.sibling = null, e10 = n10;
      while (null !== e10);
    }
  }
  function uE(e10) {
    var n10 = e10.deletions;
    if (0 != (16 & e10.flags)) {
      if (null !== n10) for (var t10 = 0; t10 < n10.length; t10++) {
        var r10 = n10[t10];
        i2 = r10, uN(r10, e10);
      }
      uS(e10);
    }
    if (10256 & e10.subtreeFlags) for (e10 = e10.child; null !== e10; ) ux(e10), e10 = e10.sibling;
  }
  function ux(e10) {
    switch (e10.tag) {
      case 0:
      case 11:
      case 15:
        uE(e10), 2048 & e10.flags && iS(9, e10, e10.return);
        break;
      case 3:
      case 12:
      default:
        uE(e10);
        break;
      case 22:
        var n10 = e10.stateNode;
        null !== e10.memoizedState && 2 & n10._visibility && (null === e10.return || 13 !== e10.return.tag) ? (n10._visibility &= -3, (function e11(n11) {
          var t10 = n11.deletions;
          if (0 != (16 & n11.flags)) {
            if (null !== t10) for (var r10 = 0; r10 < t10.length; r10++) {
              var l10 = t10[r10];
              i2 = l10, uN(l10, n11);
            }
            uS(n11);
          }
          for (n11 = n11.child; null !== n11; ) {
            switch ((t10 = n11).tag) {
              case 0:
              case 11:
              case 15:
                iS(8, t10, t10.return), e11(t10);
                break;
              case 22:
                2 & (r10 = t10.stateNode)._visibility && (r10._visibility &= -3, e11(t10));
                break;
              default:
                e11(t10);
            }
            n11 = n11.sibling;
          }
        })(e10)) : uE(e10);
    }
  }
  function uN(e10, n10) {
    for (; null !== i2; ) {
      var t10 = i2;
      switch (t10.tag) {
        case 0:
        case 11:
        case 15:
          iS(8, t10, n10);
          break;
        case 23:
        case 22:
          if (null !== t10.memoizedState && null !== t10.memoizedState.cachePool) {
            var r10 = t10.memoizedState.cachePool.pool;
            null != r10 && r10.refCount++;
          }
          break;
        case 24:
          lm(t10.memoizedState.cache);
      }
      if (null !== (r10 = t10.child)) r10.return = t10, i2 = r10;
      else for (t10 = e10; null !== i2; ) {
        var l10 = (r10 = i2).sibling, a10 = r10.return;
        if (!(function e11(n11) {
          var t11 = n11.alternate;
          null !== t11 && (n11.alternate = null, e11(t11)), n11.child = null, n11.deletions = null, n11.sibling = null, 5 === n11.tag && null !== (t11 = n11.stateNode) && e3(t11), n11.stateNode = null, n11.return = null, n11.dependencies = null, n11.memoizedProps = null, n11.memoizedState = null, n11.pendingProps = null, n11.stateNode = null, n11.updateQueue = null;
        })(r10), r10 === t10) {
          i2 = null;
          break;
        }
        if (null !== l10) {
          l10.return = a10, i2 = l10;
          break;
        }
        i2 = a10;
      }
    }
  }
  var uC = { getCacheForType: function(e10) {
    var n10 = lo(ld), t10 = n10.data.get(e10);
    return void 0 === t10 && (t10 = e10(), n10.data.set(e10, t10)), t10;
  }, cacheSignal: function() {
    return lo(ld).controller.signal;
  } }, uP = "function" == typeof WeakMap ? WeakMap : Map, u_ = 0, uz = null, uT = null, uO = 0, uL = 0, uM = null, uF = false, uD = false, uI = false, uA = 0, uR = 0, uU = 0, uV = 0, uB = 0, u$ = 0, uj = 0, uH = null, uQ = null, uW = false, uq = 0, uK = 0, uY = 1 / 0, uG = null, uX = null, uZ = 0, uJ = null, u0 = null, u1 = 0, u2 = 0, u3 = null, u4 = null, u6 = null, u8 = null, u5 = null, u9 = 0, u7 = null;
  function se() {
    return 0 != (2 & u_) && 0 !== uO ? uO & -uO : null !== K.T ? sG() : eQ();
  }
  function sn() {
    if (0 === u$) if (0 == (536870912 & uO) || rY) {
      var e10 = eL;
      0 == (3932160 & (eL <<= 1)) && (eL = 262144), u$ = e10;
    } else u$ = 536870912;
    return null !== (e10 = l9.current) && (e10.flags |= 32), u$;
  }
  function st(e10, n10) {
    if (null != n10) {
      var t10 = e10.stateNode, r10 = t10.ref;
      null === r10 && (r10 = t10.ref = cF(ri(e10.memoizedProps, t10))), null === u8 && (u8 = []), u8.push(n10.bind(null, r10));
    }
  }
  function sr(e10, n10, t10) {
    (e10 === uz && (2 === uL || 9 === uL) || null !== e10.cancelPendingCommit) && (ss(e10, 0), so(e10, uO, u$, false)), eU(e10, t10), (0 == (2 & u_) || e10 !== uz) && (e10 === uz && (0 == (2 & u_) && (uV |= t10), 4 === uR && so(e10, uO, u$, false)), sj(e10));
  }
  function sl(e10, n10, t10) {
    if (0 != (6 & u_)) throw Error(s(327));
    for (var r10 = !t10 && 0 == (127 & n10) && 0 == (n10 & e10.expiredLanes) || eI(e10, n10), l10 = r10 ? (function(e11, n11) {
      var t11 = u_;
      u_ |= 2;
      var r11 = sd(), l11 = sp();
      uz !== e11 || uO !== n11 ? (uG = null, uY = eb() + 500, ss(e11, n11)) : uD = eI(e11, n11);
      e: for (; ; ) try {
        if (0 !== uL && null !== uT) {
          n11 = uT;
          var a11 = uM;
          n: switch (uL) {
            case 1:
              uL = 0, uM = null, sy(e11, n11, a11, 1);
              break;
            case 2:
            case 9:
              if (lO(a11)) {
                uL = 0, uM = null, sv(n11);
                break;
              }
              n11 = function() {
                2 !== uL && 9 !== uL || uz !== e11 || (uL = 7), sj(e11);
              }, a11.then(n11, n11);
              break e;
            case 3:
              uL = 7;
              break e;
            case 4:
              uL = 5;
              break e;
            case 7:
              lO(a11) ? (uL = 0, uM = null, sv(n11)) : (uL = 0, uM = null, sy(e11, n11, a11, 7));
              break;
            case 5:
              var o11 = null;
              switch (uT.tag) {
                case 26:
                  o11 = uT.memoizedState;
                case 5:
                case 27:
                  var i11 = uT;
                  if (o11 ? fv(o11) : i11.stateNode.complete) {
                    uL = 0, uM = null;
                    var u10 = i11.sibling;
                    if (null !== u10) uT = u10;
                    else {
                      var c10 = i11.return;
                      null !== c10 ? (uT = c10, sb(c10)) : uT = null;
                    }
                    break n;
                  }
              }
              uL = 0, uM = null, sy(e11, n11, a11, 5);
              break;
            case 6:
              uL = 0, uM = null, sy(e11, n11, a11, 6);
              break;
            case 8:
              su(), uR = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        for (; null !== uT && !ev(); ) sg(uT);
        break;
      } catch (n12) {
        sc(e11, n12);
      }
      return (r9 = r5 = null, K.H = r11, K.A = l11, u_ = t11, null !== uT) ? 0 : (uz = null, uO = 0, rm(), uR);
    })(e10, n10) : sh(e10, n10, true), a10 = r10; ; ) {
      if (0 === l10) uD && !r10 && so(e10, n10, 0, false);
      else {
        if (t10 = e10.current.alternate, a10 && !(function(e11) {
          for (var n11 = e11; ; ) {
            var t11 = n11.tag;
            if ((0 === t11 || 11 === t11 || 15 === t11) && 16384 & n11.flags && null !== (t11 = n11.updateQueue) && null !== (t11 = t11.stores)) for (var r11 = 0; r11 < t11.length; r11++) {
              var l11 = t11[r11], a11 = l11.getSnapshot;
              l11 = l11.value;
              try {
                if (!t$(a11(), l11)) return false;
              } catch (e12) {
                return false;
              }
            }
            if (t11 = n11.child, 16384 & n11.subtreeFlags && null !== t11) t11.return = n11, n11 = t11;
            else {
              if (n11 === e11) break;
              for (; null === n11.sibling; ) {
                if (null === n11.return || n11.return === e11) return true;
                n11 = n11.return;
              }
              n11.sibling.return = n11.return, n11 = n11.sibling;
            }
          }
          return true;
        })(t10)) {
          l10 = sh(e10, n10, false), a10 = false;
          continue;
        }
        if (2 === l10) {
          if (a10 = n10, e10.errorRecoveryDisabledLanes & a10) var o10 = 0;
          else o10 = 0 != (o10 = -536870913 & e10.pendingLanes) ? o10 : 536870912 & o10 ? 536870912 : 0;
          if (0 !== o10) {
            n10 = o10;
            e: {
              l10 = uH;
              var i10 = e10.current.memoizedState.isDehydrated;
              if (i10 && (ss(e10, o10).flags |= 256), 2 !== (o10 = sh(e10, o10, false)) && 6 !== o10) {
                if (uI && !i10) {
                  e10.errorRecoveryDisabledLanes |= a10, uV |= a10, l10 = 4;
                  break e;
                }
                a10 = uQ, uQ = l10, null !== a10 && (null === uQ ? uQ = a10 : uQ.push.apply(uQ, a10));
              }
              l10 = o10;
            }
            if (a10 = false, 2 !== l10) continue;
          }
        }
        if (1 === l10) {
          ss(e10, 0), so(e10, n10, 0, true);
          break;
        }
        e: {
          switch (r10 = e10, a10 = l10) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((4194048 & n10) !== n10 && (62914560 & n10) !== n10) break;
            case 6:
              so(r10, n10, u$, !uF);
              break e;
            case 2:
              uQ = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((62914560 & n10) === n10 && 10 < (l10 = uq + 300 - eb())) {
            if (so(r10, n10, u$, !uF), 0 !== eD(r10, 0, true)) break e;
            u1 = n10, r10.timeoutHandle = cb(sa.bind(null, r10, t10, uQ, uG, uW, n10, u$, uV, uj, uF, a10, "Throttled", -0, 0), l10);
            break e;
          }
          sa(r10, t10, uQ, uG, uW, n10, u$, uV, uj, uF, a10, null, -0, 0);
        }
      }
      break;
    }
    sj(e10);
  }
  function sa(e10, n10, t10, r10, l10, a10, o10, i10, u10, s10, c10, f10, d2, p2) {
    e10.timeoutHandle = -1;
    var m2, h2, g2 = n10.subtreeFlags, v2 = (335544064 & a10) === a10;
    if (f10 = null, (v2 || 8192 & g2 || 16785408 == (16785408 & g2)) && (iA = null, uk(n10, a10, f10 = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: nL }), v2 && (g2 = f10, null != (v2 = (9 === (v2 = e10.containerInfo).nodeType ? v2 : v2.ownerDocument).__reactViewTransition) && (g2.count++, g2.waitingForViewTransition = true, g2 = fS.bind(g2), v2.finished.then(g2, g2))), null !== (m2 = f10, h2 = g2 = (62914560 & a10) === a10 ? uq - eb() : (4194048 & a10) === a10 ? uK - eb() : 0, m2.stylesheets && 0 === m2.count && fN(m2, m2.stylesheets), g2 = 0 < m2.count || 0 < m2.imgCount ? function(e11) {
      var n11 = setTimeout(function() {
        if (m2.stylesheets && fN(m2, m2.stylesheets), m2.unsuspend) {
          var e12 = m2.unsuspend;
          m2.unsuspend = null, e12();
        }
      }, 6e4 + h2);
      0 < m2.imgBytes && 0 === fw && (fw = 62500 * (function() {
        if ("function" == typeof performance.getEntriesByType) {
          for (var e12 = 0, n12 = 0, t12 = performance.getEntriesByType("resource"), r11 = 0; r11 < t12.length; r11++) {
            var l11 = t12[r11], a11 = l11.transferSize, o11 = l11.initiatorType, i11 = l11.duration;
            if (a11 && i11 && cf(o11)) {
              for (o11 = 0, i11 = l11.responseEnd, r11 += 1; r11 < t12.length; r11++) {
                var u11 = t12[r11], s11 = u11.startTime;
                if (s11 > i11) break;
                var c11 = u11.transferSize, f11 = u11.initiatorType;
                c11 && cf(f11) && (o11 += c11 * ((u11 = u11.responseEnd) < i11 ? 1 : (i11 - s11) / (u11 - s11)));
              }
              if (--r11, n12 += 8 * (a11 + o11) / (l11.duration / 1e3), 10 < ++e12) break;
            }
          }
          if (0 < e12) return n12 / e12 / 1e6;
        }
        return navigator.connection && "number" == typeof (e12 = navigator.connection.downlink) ? e12 : 5;
      })());
      var t11 = setTimeout(function() {
        if (m2.waitingForImages = false, 0 === m2.count && (m2.stylesheets && fN(m2, m2.stylesheets), m2.unsuspend)) {
          var e12 = m2.unsuspend;
          m2.unsuspend = null, e12();
        }
      }, (m2.imgBytes > fw ? 50 : 800) + h2);
      return m2.unsuspend = e11, function() {
        m2.unsuspend = null, clearTimeout(n11), clearTimeout(t11);
      };
    } : null))) {
      u1 = a10, e10.cancelPendingCommit = g2(sk.bind(null, e10, n10, a10, t10, r10, l10, o10, i10, u10, s10, c10, f10, null, d2, p2)), so(e10, a10, o10, !s10);
      return;
    }
    sk(e10, n10, a10, t10, r10, l10, o10, i10, u10, s10, c10, f10);
  }
  function so(e10, n10, t10, r10) {
    n10 &= ~uB, n10 &= ~uV, e10.suspendedLanes |= n10, e10.pingedLanes &= ~n10, r10 && (e10.warmLanes |= n10), r10 = e10.expirationTimes;
    for (var l10 = n10; 0 < l10; ) {
      var a10 = 31 - e_(l10), o10 = 1 << a10;
      r10[a10] = -1, l10 &= ~o10;
    }
    0 !== t10 && eV(e10, t10, n10);
  }
  function si() {
    return 0 != (6 & u_) || (sH(0, false), false);
  }
  function su() {
    if (null !== uT) {
      if (0 === uL) var e10 = uT.return;
      else e10 = uT, r9 = r5 = null, a_(e10), lA = null, lR = 0, e10 = uT;
      for (; null !== e10; ) iw(e10.alternate, e10), e10 = e10.return;
      uT = null;
    }
  }
  function ss(e10, n10) {
    var t10 = e10.timeoutHandle;
    -1 !== t10 && (e10.timeoutHandle = -1, cw(t10)), null !== (t10 = e10.cancelPendingCommit) && (e10.cancelPendingCommit = null, t10()), u1 = 0, su(), uz = e10, uT = t10 = rx(e10.current, null), uO = n10, uL = 0, uM = null, uF = false, uD = eI(e10, n10), uI = false, uj = u$ = uB = uV = uU = uR = 0, uQ = uH = null, uW = false, 0 != (8 & n10) && (n10 |= 32 & n10);
    var r10 = e10.entangledLanes;
    if (0 !== r10) for (e10 = e10.entanglements, r10 &= n10; 0 < r10; ) {
      var l10 = 31 - e_(r10), a10 = 1 << l10;
      n10 |= e10[l10], r10 &= ~a10;
    }
    return uA = n10, rm(), t10;
  }
  function sc(e10, n10) {
    ac = null, K.H = oP, n10 === lP || n10 === lz ? (n10 = lD(), uL = 3) : n10 === l_ ? (n10 = lD(), uL = 4) : uL = n10 === oH ? 8 : null !== n10 && "object" == typeof n10 && "function" == typeof n10.then ? 6 : 1, uM = n10, null === uT && (uR = 1, oU(e10, rL(n10, e10.current)));
  }
  function sf() {
    var e10 = l9.current;
    return null === e10 || ((4194048 & uO) === uO ? null === l7 : ((62914560 & uO) === uO || 0 != (536870912 & uO)) && e10 === l7);
  }
  function sd() {
    var e10 = K.H;
    return K.H = oP, null === e10 ? oP : e10;
  }
  function sp() {
    var e10 = K.A;
    return K.A = uC, e10;
  }
  function sm() {
    uR = 4, uF || (4194048 & uO) !== uO && null !== l9.current || (uD = true), 0 == (134217727 & uU) && 0 == (134217727 & uV) || null === uz || so(uz, uO, u$, false);
  }
  function sh(e10, n10, t10) {
    var r10 = u_;
    u_ |= 2;
    var l10 = sd(), a10 = sp();
    (uz !== e10 || uO !== n10) && (uG = null, ss(e10, n10)), n10 = false;
    var o10 = uR;
    e: for (; ; ) try {
      if (0 !== uL && null !== uT) {
        var i10 = uT, u10 = uM;
        switch (uL) {
          case 8:
            su(), o10 = 6;
            break e;
          case 3:
          case 2:
          case 9:
          case 6:
            null === l9.current && (n10 = true);
            var s10 = uL;
            if (uL = 0, uM = null, sy(e10, i10, u10, s10), t10 && uD) {
              o10 = 0;
              break e;
            }
            break;
          default:
            s10 = uL, uL = 0, uM = null, sy(e10, i10, u10, s10);
        }
      }
      (function() {
        for (; null !== uT; ) sg(uT);
      })(), o10 = uR;
      break;
    } catch (n11) {
      sc(e10, n11);
    }
    return n10 && e10.shellSuspendCounter++, r9 = r5 = null, u_ = r10, K.H = l10, K.A = a10, null === uT && (uz = null, uO = 0, rm()), o10;
  }
  function sg(e10) {
    var n10 = ip(e10.alternate, e10, uA);
    e10.memoizedProps = e10.pendingProps, null === n10 ? sb(e10) : uT = n10;
  }
  function sv(e10) {
    var n10 = e10, t10 = n10.alternate;
    switch (n10.tag) {
      case 15:
      case 0:
        n10 = o3(t10, n10, n10.pendingProps, n10.type, void 0, uO);
        break;
      case 11:
        n10 = o3(t10, n10, n10.pendingProps, n10.type.render, n10.ref, uO);
        break;
      case 5:
        a_(n10);
        var r10 = n10;
        r10 === rq && (rY ? (r1(r10), 5 === r10.tag && null != r10.stateNode && (rK = r10.stateNode)) : (r1(r10), rY = true));
      default:
        iw(t10, n10), n10 = ip(t10, n10 = uT = rN(n10, uA), uA);
    }
    e10.memoizedProps = e10.pendingProps, null === n10 ? sb(e10) : uT = n10;
  }
  function sy(e10, n10, t10, r10) {
    r9 = r5 = null, a_(n10), lA = null, lR = 0;
    var l10 = n10.return;
    try {
      if ((function(e11, n11, t11, r11, l11) {
        if (t11.flags |= 32768, null !== r11 && "object" == typeof r11 && "function" == typeof r11.then) {
          if (null !== (n11 = t11.alternate) && lr(n11, t11, l11, true), null !== (t11 = l9.current)) {
            switch (t11.tag) {
              case 31:
              case 13:
              case 19:
                return null === l7 ? sm() : null === t11.alternate && 0 === uR && (uR = 3), t11.flags &= -257, t11.flags |= 65536, t11.lanes = l11, r11 === lT ? t11.flags |= 16384 : (null === (n11 = t11.updateQueue) ? t11.updateQueue = /* @__PURE__ */ new Set([r11]) : n11.add(r11), sL(e11, r11, l11)), false;
              case 22:
                return t11.flags |= 65536, r11 === lT ? t11.flags |= 16384 : (null === (n11 = t11.updateQueue) ? (n11 = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([r11]) }, t11.updateQueue = n11) : null === (t11 = n11.retryQueue) ? n11.retryQueue = /* @__PURE__ */ new Set([r11]) : t11.add(r11), sL(e11, r11, l11)), false;
            }
            throw Error(s(435, t11.tag));
          }
          return sL(e11, r11, l11), sm(), false;
        }
        if (rY) return null !== (n11 = l9.current) ? (0 == (65536 & n11.flags) && (n11.flags |= 256), n11.flags |= 65536, n11.lanes = l11, r11 !== rZ && r6(rL(e11 = Error(s(422), { cause: r11 }), t11))) : (r11 !== rZ && r6(rL(n11 = Error(s(423), { cause: r11 }), t11)), e11 = e11.current.alternate, e11.flags |= 65536, l11 &= -l11, e11.lanes |= l11, r11 = rL(r11, t11), l11 = oB(e11.stateNode, r11, l11), lX(e11, l11), 4 !== uR && (uR = 2)), false;
        var a10 = Error(s(520), { cause: r11 });
        if (a10 = rL(a10, t11), null === uH ? uH = [a10] : uH.push(a10), 4 !== uR && (uR = 2), null === n11) return true;
        r11 = rL(r11, t11), t11 = n11;
        do {
          switch (t11.tag) {
            case 3:
              return t11.flags |= 65536, e11 = l11 & -l11, t11.lanes |= e11, e11 = oB(t11.stateNode, r11, e11), lX(t11, e11), false;
            case 1:
              if (n11 = t11.type, a10 = t11.stateNode, 0 == (128 & t11.flags) && ("function" == typeof n11.getDerivedStateFromError || null !== a10 && "function" == typeof a10.componentDidCatch && (null === uX || !uX.has(a10)))) return t11.flags |= 65536, l11 &= -l11, t11.lanes |= l11, oj(l11 = o$(l11), e11, t11, r11), lX(t11, l11), false;
              break;
            case 22:
              if (null !== t11.memoizedState) return t11.flags |= 65536, false;
          }
          t11 = t11.return;
        } while (null !== t11);
        return false;
      })(e10, l10, n10, t10, uO)) {
        uR = 1, oU(e10, rL(t10, e10.current)), uT = null;
        return;
      }
    } catch (n11) {
      if (null !== l10) throw uT = l10, n11;
      uR = 1, oU(e10, rL(t10, e10.current)), uT = null;
      return;
    }
    32768 & n10.flags ? (rY || 1 === r10 ? e10 = true : uD || 0 != (536870912 & uO) ? e10 = false : (uF = e10 = true, (2 === r10 || 9 === r10 || 3 === r10 || 6 === r10) && null !== (r10 = l9.current) && 13 === r10.tag && (r10.flags |= 16384)), sw(n10, e10)) : sb(n10);
  }
  function sb(e10) {
    var n10 = e10;
    do {
      if (0 != (32768 & n10.flags)) return void sw(n10, uF);
      e10 = n10.return;
      var t10 = (function(e11, n11, t11) {
        var r10 = n11.pendingProps;
        switch (rQ(n11), n11.tag) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
          case 1:
            return ib(n11), null;
          case 3:
            return t11 = n11.stateNode, r10 = null, null !== e11 && (r10 = e11.memoizedState.cache), n11.memoizedState.cache !== r10 && (n11.flags |= 2048), le(ld), ei(), t11.pendingContext && (t11.context = t11.pendingContext, t11.pendingContext = null), (null === e11 || null === e11.child) && (r2(n11) ? im(n11) : null === e11 || e11.memoizedState.isDehydrated && 0 == (256 & n11.flags) || (n11.flags |= 1024, r4())), ib(n11), null;
          case 26:
            var l10 = n11.type, a10 = n11.memoizedState;
            return null === e11 ? (im(n11), null !== a10 ? (ib(n11), ig(n11, a10)) : (ib(n11), ih(n11, l10, null, r10, t11))) : a10 ? a10 !== e11.memoizedState ? (im(n11), ib(n11), ig(n11, a10)) : (ib(n11), n11.flags &= -16777217) : ((e11 = e11.memoizedProps) !== r10 && im(n11), ib(n11), ih(n11, l10, e11, r10, t11)), null;
          case 27:
            if (es(n11), t11 = el.current, l10 = n11.type, null !== e11 && null != n11.stateNode) e11.memoizedProps !== r10 && im(n11);
            else {
              if (!r10) {
                if (null === n11.stateNode) throw Error(s(166));
                return ib(n11), n11.subtreeFlags &= -33554433, null;
              }
              e11 = et.current, r2(n11) ? r0(n11) : (n11.stateNode = e11 = c4(l10, r10, t11), im(n11));
            }
            return ib(n11), n11.subtreeFlags &= -33554433, null;
          case 5:
            if (es(n11), l10 = n11.type, null !== e11 && null != n11.stateNode) e11.memoizedProps !== r10 && im(n11);
            else {
              if (!r10) {
                if (null === n11.stateNode) throw Error(s(166));
                return ib(n11), n11.subtreeFlags &= -33554433, null;
              }
              if (a10 = et.current, r2(n11)) r0(n11);
              else {
                var o10 = cm(el.current);
                switch (a10) {
                  case 1:
                    a10 = o10.createElementNS("http://www.w3.org/2000/svg", l10);
                    break;
                  case 2:
                    a10 = o10.createElementNS("http://www.w3.org/1998/Math/MathML", l10);
                    break;
                  default:
                    switch (l10) {
                      case "svg":
                        a10 = o10.createElementNS("http://www.w3.org/2000/svg", l10);
                        break;
                      case "math":
                        a10 = o10.createElementNS("http://www.w3.org/1998/Math/MathML", l10);
                        break;
                      case "script":
                        (a10 = o10.createElement("div")).innerHTML = "<script><\/script>", a10 = a10.removeChild(a10.firstChild);
                        break;
                      case "select":
                        a10 = "string" == typeof r10.is ? o10.createElement("select", { is: r10.is }) : o10.createElement("select"), r10.multiple ? a10.multiple = true : r10.size && (a10.size = r10.size);
                        break;
                      default:
                        a10 = "string" == typeof r10.is ? o10.createElement(l10, { is: r10.is }) : o10.createElement(l10);
                    }
                }
                a10[eK] = n11, a10[eY] = r10;
                e: for (o10 = n11.child; null !== o10; ) {
                  if (5 === o10.tag || 6 === o10.tag) a10.appendChild(o10.stateNode);
                  else if (4 !== o10.tag && 27 !== o10.tag && null !== o10.child) {
                    o10.child.return = o10, o10 = o10.child;
                    continue;
                  }
                  if (o10 === n11) break;
                  for (; null === o10.sibling; ) {
                    if (null === o10.return || o10.return === n11) break e;
                    o10 = o10.return;
                  }
                  o10.sibling.return = o10.return, o10 = o10.sibling;
                }
                switch (n11.stateNode = a10, cs(a10, l10, r10), l10) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    r10 = !!r10.autoFocus;
                    break;
                  case "img":
                    r10 = true;
                    break;
                  default:
                    r10 = false;
                }
                r10 && im(n11);
              }
            }
            return ib(n11), n11.subtreeFlags &= -33554433, ih(n11, n11.type, null === e11 ? null : e11.memoizedProps, n11.pendingProps, t11), null;
          case 6:
            if (e11 && null != n11.stateNode) e11.memoizedProps !== r10 && im(n11);
            else {
              if ("string" != typeof r10 && null === n11.stateNode) throw Error(s(166));
              if (e11 = el.current, r2(n11)) {
                if (e11 = n11.stateNode, t11 = n11.memoizedProps, r10 = null, null !== (l10 = rq)) switch (l10.tag) {
                  case 27:
                  case 5:
                    r10 = l10.memoizedProps;
                }
                e11[eK] = n11, (e11 = !!(e11.nodeValue === t11 || null !== r10 && true === r10.suppressHydrationWarning || co(e11.nodeValue, t11))) || rJ(n11, true);
              } else (e11 = cm(e11).createTextNode(r10))[eK] = n11, n11.stateNode = e11;
            }
            return ib(n11), null;
          case 31:
            if (t11 = n11.memoizedState, null === e11 || null !== e11.memoizedState) {
              if (r10 = r2(n11), null !== t11) {
                if (null === e11) {
                  if (!r10) throw Error(s(318));
                  if (!(e11 = null !== (e11 = n11.memoizedState) ? e11.dehydrated : null)) throw Error(s(557));
                  e11[eK] = n11;
                } else r3(), 0 == (128 & n11.flags) && (n11.memoizedState = null), n11.flags |= 4;
                ib(n11), e11 = false;
              } else t11 = r4(), null !== e11 && null !== e11.memoizedState && (e11.memoizedState.hydrationErrors = t11), e11 = true;
              if (!e11) {
                if (256 & n11.flags) return al(n11), n11;
                return al(n11), null;
              }
              if (0 != (128 & n11.flags)) throw Error(s(558));
            }
            return ib(n11), null;
          case 13:
            if (r10 = n11.memoizedState, null === e11 || null !== e11.memoizedState && null !== e11.memoizedState.dehydrated) {
              if (l10 = r2(n11), null !== r10 && null !== r10.dehydrated) {
                if (null === e11) {
                  if (!l10) throw Error(s(318));
                  if (!(l10 = null !== (l10 = n11.memoizedState) ? l10.dehydrated : null)) throw Error(s(317));
                  l10[eK] = n11;
                } else r3(), 0 == (128 & n11.flags) && (n11.memoizedState = null), n11.flags |= 4;
                ib(n11), l10 = false;
              } else l10 = r4(), null !== e11 && null !== e11.memoizedState && (e11.memoizedState.hydrationErrors = l10), l10 = true;
              if (!l10) {
                if (256 & n11.flags) return al(n11), n11;
                return al(n11), null;
              }
            }
            if (al(n11), 0 != (128 & n11.flags)) return n11.lanes = t11, n11;
            return t11 = null !== r10, e11 = null !== e11 && null !== e11.memoizedState, t11 && (r10 = n11.child, l10 = null, null !== r10.alternate && null !== r10.alternate.memoizedState && null !== r10.alternate.memoizedState.cachePool && (l10 = r10.alternate.memoizedState.cachePool.pool), a10 = null, null !== r10.memoizedState && null !== r10.memoizedState.cachePool && (a10 = r10.memoizedState.cachePool.pool), a10 !== l10 && (r10.flags |= 2048)), t11 !== e11 && t11 && (n11.child.flags |= 8192), iv(n11, n11.updateQueue), ib(n11), null;
          case 4:
            return ei(), null === e11 && s8(n11.stateNode.containerInfo), n11.flags |= 67108864, ib(n11), null;
          case 10:
            return le(n11.type), ib(n11), null;
          case 19:
            if (ai(n11), null === (r10 = n11.memoizedState)) return ib(n11), null;
            if (l10 = 0 != (128 & n11.flags), null === (a10 = r10.rendering)) if (l10) iy(r10, false);
            else {
              if (0 !== uR || null !== e11 && 0 != (128 & e11.flags)) for (e11 = n11.child; null !== e11; ) {
                if (null !== (a10 = au(e11))) {
                  for (n11.flags |= 128, iy(r10, false), n11.updateQueue = e11 = a10.updateQueue, iv(n11, e11), n11.subtreeFlags = 0, e11 = t11, t11 = n11.child; null !== t11; ) rN(t11, e11), t11 = t11.sibling;
                  return ao(n11, 1 & aa.current | 2), rY && r$(n11, r10.treeForkCount), n11.child;
                }
                e11 = e11.sibling;
              }
              null !== r10.tail && eb() > uY && (n11.flags |= 128, l10 = true, iy(r10, false), n11.lanes = 4194304);
            }
            else {
              if (!l10) if (null !== (e11 = au(a10))) {
                if (n11.flags |= 128, l10 = true, n11.updateQueue = e11 = e11.updateQueue, iv(n11, e11), iy(r10, true), null === r10.tail && "collapsed" !== r10.tailMode && "visible" !== r10.tailMode && !a10.alternate && !rY) return ib(n11), null;
              } else 2 * eb() - r10.renderingStartTime > uY && 536870912 !== t11 && (n11.flags |= 128, l10 = true, iy(r10, false), n11.lanes = 4194304);
              r10.isBackwards ? (a10.sibling = n11.child, n11.child = a10) : (null !== (e11 = r10.last) ? e11.sibling = a10 : n11.child = a10, r10.last = a10);
            }
            if (null !== r10.tail) {
              e11 = r10.tail;
              e: {
                for (t11 = e11; null !== t11; ) {
                  if (null !== t11.alternate) {
                    t11 = false;
                    break e;
                  }
                  t11 = t11.sibling;
                }
                t11 = true;
              }
              return r10.rendering = e11, r10.tail = e11.sibling, r10.renderingStartTime = eb(), e11.sibling = null, a10 = aa.current, a10 = l10 ? 1 & a10 | 2 : 1 & a10, "visible" === r10.tailMode || "collapsed" === r10.tailMode || !t11 || rY ? ao(n11, a10) : (t11 = a10, en(l9, n11), en(aa, t11), null === l7 && (l7 = n11)), rY && r$(n11, r10.treeForkCount), e11;
            }
            return ib(n11), null;
          case 22:
          case 23:
            return al(n11), l5(), r10 = null !== n11.memoizedState, null !== e11 ? null !== e11.memoizedState !== r10 && (n11.flags |= 8192) : r10 && (n11.flags |= 8192), r10 ? 0 != (536870912 & t11) && 0 == (128 & n11.flags) && (ib(n11), 6 & n11.subtreeFlags && (n11.flags |= 8192)) : ib(n11), null !== (t11 = n11.updateQueue) && iv(n11, t11.retryQueue), t11 = null, null !== e11 && null !== e11.memoizedState && null !== e11.memoizedState.cachePool && (t11 = e11.memoizedState.cachePool.pool), r10 = null, null !== n11.memoizedState && null !== n11.memoizedState.cachePool && (r10 = n11.memoizedState.cachePool.pool), r10 !== t11 && (n11.flags |= 2048), null !== e11 && ee(lE), null;
          case 24:
            return t11 = null, null !== e11 && (t11 = e11.memoizedState.cache), n11.memoizedState.cache !== t11 && (n11.flags |= 2048), le(ld), ib(n11), null;
          case 25:
            return null;
          case 30:
            return n11.flags |= 33554432, ib(n11), null;
        }
        throw Error(s(156, n11.tag));
      })(n10.alternate, n10, uA);
      if (null !== t10) {
        uT = t10;
        return;
      }
      if (null !== (n10 = n10.sibling)) {
        uT = n10;
        return;
      }
      uT = n10 = e10;
    } while (null !== n10);
    0 === uR && (uR = 5);
  }
  function sw(e10, n10) {
    do {
      var t10 = (function(e11, n11) {
        switch (rQ(n11), n11.tag) {
          case 1:
            return 65536 & (e11 = n11.flags) ? (n11.flags = -65537 & e11 | 128, n11) : null;
          case 3:
            return le(ld), ei(), 0 != (65536 & (e11 = n11.flags)) && 0 == (128 & e11) ? (n11.flags = -65537 & e11 | 128, n11) : null;
          case 26:
          case 27:
          case 5:
            return es(n11), null;
          case 31:
            if (null !== n11.memoizedState) {
              if (al(n11), null === n11.alternate) throw Error(s(340));
              r3();
            }
            return 65536 & (e11 = n11.flags) ? (n11.flags = -65537 & e11 | 128, n11) : null;
          case 13:
            if (al(n11), null !== (e11 = n11.memoizedState) && null !== e11.dehydrated) {
              if (null === n11.alternate) throw Error(s(340));
              r3();
            }
            return 65536 & (e11 = n11.flags) ? (n11.flags = -65537 & e11 | 128, n11) : null;
          case 19:
            return ai(n11), 65536 & (e11 = n11.flags) ? (n11.flags = -65537 & e11 | 128, null !== (e11 = n11.memoizedState) && (e11.rendering = null, e11.tail = null), n11.flags |= 4, n11) : null;
          case 4:
            return ei(), null;
          case 10:
            return le(n11.type), null;
          case 22:
          case 23:
            return al(n11), l5(), null !== e11 && ee(lE), 65536 & (e11 = n11.flags) ? (n11.flags = -65537 & e11 | 128, n11) : null;
          case 24:
            return le(ld), null;
          default:
            return null;
        }
      })(e10.alternate, e10);
      if (null !== t10) {
        t10.flags &= 32767, uT = t10;
        return;
      }
      if (null !== (t10 = e10.return) && (t10.flags |= 32768, t10.subtreeFlags = 0, t10.deletions = null), !n10 && null !== (e10 = e10.sibling)) {
        uT = e10;
        return;
      }
      uT = e10 = t10;
    } while (null !== e10);
    uR = 6, uT = null;
  }
  function sk(e10, n10, t10, r10, l10, a10, o10, i10, u10, c10, f10, d2) {
    e10.cancelPendingCommit = null;
    do
      s_();
    while (0 !== uZ);
    if (0 != (6 & u_)) throw Error(s(327));
    if (null !== n10) {
      if (n10 === e10.current) throw Error(s(177));
      e10 === uz && (uT = uz = null, uO = 0), u0 = n10, uJ = e10, u1 = t10, u3 = l10, u4 = r10, (function(e11, n11, t11, r11, l11, a11, o11) {
        var i11, u11 = n11.lanes | n11.childLanes;
        if (u2 = u11, !(function(e12, n12, t12, r12, l12, a12) {
          var o12 = e12.pendingLanes;
          e12.pendingLanes = t12, e12.suspendedLanes = 0, e12.pingedLanes = 0, e12.warmLanes = 0, e12.expiredLanes &= t12, e12.entangledLanes &= t12, e12.errorRecoveryDisabledLanes &= t12, e12.shellSuspendCounter = 0;
          var i12 = e12.entanglements, u12 = e12.expirationTimes, s10 = e12.hiddenUpdates;
          for (t12 = o12 & ~t12; 0 < t12; ) {
            var c11 = 31 - e_(t12), f11 = 1 << c11;
            i12[c11] = 0, u12[c11] = -1;
            var d3 = s10[c11];
            if (null !== d3) for (s10[c11] = null, c11 = 0; c11 < d3.length; c11++) {
              var p2 = d3[c11];
              null !== p2 && (p2.lane &= -536870913);
            }
            t12 &= ~f11;
          }
          0 !== r12 && eV(e12, r12, 0), 0 !== a12 && 0 === l12 && 0 !== e12.tag && (e12.suspendedLanes |= a12 & ~(o12 & ~n12));
        })(e11, t11, u11 |= rp, r11, l11, a11), u8 = null, (335544064 & t11) === t11 ? (i11 = e11.transitionTypes, e11.transitionTypes = null, u5 = i11, r11 = 10262) : (u5 = null, r11 = 10256), 0 != (n11.subtreeFlags & r11) || 0 != (n11.flags & r11) ? (e11.callbackNode = null, e11.callbackPriority = 0, eh(eE, function() {
          return sz(), null;
        })) : (e11.callbackNode = null, e11.callbackPriority = 0), iI = false, r11 = 0 != (13878 & n11.flags), 0 != (13878 & n11.subtreeFlags) || r11) {
          r11 = K.T, K.T = null, l11 = Y.p, Y.p = 2, a11 = u_, u_ |= 4;
          try {
            !(function(e12, n12, t12) {
              if (e12 = e12.containerInfo, cd = fD, tK(e12 = tq(e12))) {
                if ("selectionStart" in e12) var r12 = { start: e12.selectionStart, end: e12.selectionEnd };
                else e: {
                  var l12 = (r12 = (r12 = e12.ownerDocument) && r12.defaultView || window).getSelection && r12.getSelection();
                  if (l12 && 0 !== l12.rangeCount) {
                    r12 = l12.anchorNode;
                    var a12, o12 = l12.anchorOffset, i12 = l12.focusNode;
                    l12 = l12.focusOffset;
                    try {
                      r12.nodeType, i12.nodeType;
                    } catch (e13) {
                      r12 = null;
                      break e;
                    }
                    var u12 = 0, s10 = -1, c11 = -1, f11 = 0, d3 = 0, p2 = e12, m2 = null;
                    n: for (; ; ) {
                      for (; p2 !== r12 || 0 !== o12 && 3 !== p2.nodeType || (s10 = u12 + o12), p2 !== i12 || 0 !== l12 && 3 !== p2.nodeType || (c11 = u12 + l12), 3 === p2.nodeType && (u12 += p2.nodeValue.length), null !== (a12 = p2.firstChild); ) m2 = p2, p2 = a12;
                      for (; ; ) {
                        if (p2 === e12) break n;
                        if (m2 === r12 && ++f11 === o12 && (s10 = u12), m2 === i12 && ++d3 === l12 && (c11 = u12), null !== (a12 = p2.nextSibling)) break;
                        m2 = (p2 = m2).parentNode;
                      }
                      p2 = a12;
                    }
                    r12 = -1 === s10 || -1 === c11 ? null : { start: s10, end: c11 };
                  } else r12 = null;
                }
                r12 = r12 || { start: 0, end: 0 };
              } else r12 = null;
              for (cp = { focusedElem: e12, selectionRange: r12 }, fD = false, t12 = (335544064 & t12) === t12, i2 = n12, n12 = t12 ? 9270 : 1024; null !== i2; ) {
                if (e12 = i2, t12 && null !== (r12 = e12.deletions)) for (o12 = 0; o12 < r12.length; o12++) t12 && iq(r12[o12]);
                if (null === e12.alternate && 0 != (2 & e12.flags)) t12 && iR(e12), i5(t12);
                else {
                  if (22 === e12.tag) {
                    if (r12 = e12.alternate, null !== e12.memoizedState) {
                      null !== r12 && null === r12.memoizedState && t12 && iq(r12), i5(t12);
                      continue;
                    } else if (null !== r12 && null !== r12.memoizedState) {
                      t12 && iR(e12), i5(t12);
                      continue;
                    }
                  }
                  r12 = e12.child, 0 != (e12.subtreeFlags & n12) && null !== r12 ? (r12.return = e12, i2 = r12) : (t12 && (function e13(n13) {
                    for (n13 = n13.child; null !== n13; ) {
                      if (30 === n13.tag) {
                        var t13 = n13.memoizedProps, r13 = ri(t13, n13.stateNode);
                        t13 = rs(t13.default, t13.update), n13.flags &= -5, "none" !== t13 && i$(n13, r13, t13, n13.memoizedState = [], false);
                      } else 0 != (33554432 & n13.subtreeFlags) && e13(n13);
                      n13 = n13.sibling;
                    }
                  })(e12), i5(t12));
                }
              }
              iA = null;
            })(e11, n11, t11);
          } finally {
            u_ = a11, Y.p = l11, K.T = r11;
          }
        }
        uZ = 1, iI ? u6 = (function(e12, n12, t12, r12, l12, a12, o12, i12, u12) {
          var s10 = 9 === n12.nodeType ? n12 : n12.ownerDocument;
          try {
            var c11 = s10.startViewTransition({ update: function() {
              var n13 = s10.defaultView, t13 = n13.navigation && n13.navigation.transition, o13 = s10.fonts.status;
              r12();
              var i13 = [];
              if ("loaded" === o13 && (s10.documentElement.clientHeight, "loading" === s10.fonts.status && i13.push(s10.fonts.ready)), o13 = i13.length, null !== e12) for (var u13 = e12.suspenseyImages, c12 = 0, f12 = 0; f12 < u13.length; f12++) {
                var d3 = u13[f12];
                if (!d3.complete) {
                  var p2 = d3.getBoundingClientRect();
                  if (0 < p2.bottom && 0 < p2.right && p2.top < n13.innerHeight && p2.left < n13.innerWidth) {
                    if ((c12 += fy(d3)) > fw) {
                      i13.length = o13;
                      break;
                    }
                    d3 = new Promise(cL.bind(d3)), i13.push(d3);
                  }
                }
              }
              return 0 < i13.length ? (n13 = Promise.race([Promise.all(i13), new Promise(function(e13) {
                return setTimeout(e13, 500);
              })]).then(l12, l12), (t13 ? Promise.allSettled([t13.finished, n13]) : n13).then(a12, a12)) : (l12(), t13) ? t13.finished.then(a12, a12) : void a12();
            }, types: t12 });
            s10.__reactViewTransition = c11;
            var f11 = [];
            return c11.ready.then(function() {
              for (var e13 = s10.documentElement.getAnimations({ subtree: true }), n13 = 0; n13 < e13.length; n13++) {
                var t13 = e13[n13], r13 = t13.effect, l13 = r13.pseudoElement;
                if (null != l13 && l13.startsWith("::view-transition")) {
                  f11.push(t13), t13 = r13.getKeyframes();
                  for (var a13 = l13 = void 0, i13 = true, u13 = 0; u13 < t13.length; u13++) {
                    var c12 = t13[u13], d3 = c12.width;
                    if (void 0 === l13) l13 = d3;
                    else if (l13 !== d3) {
                      i13 = false;
                      break;
                    }
                    if (d3 = c12.height, void 0 === a13) a13 = d3;
                    else if (a13 !== d3) {
                      i13 = false;
                      break;
                    }
                    delete c12.width, delete c12.height, "none" === c12.transform && delete c12.transform;
                  }
                  i13 && void 0 !== l13 && void 0 !== a13 && (r13.setKeyframes(t13), (i13 = getComputedStyle(r13.target, r13.pseudoElement)).width !== l13 || i13.height !== a13) && ((i13 = t13[0]).width = l13, i13.height = a13, (i13 = t13[t13.length - 1]).width = l13, i13.height = a13, r13.setKeyframes(t13));
                }
              }
              o12();
            }, function(e13) {
              s10.__reactViewTransition === c11 && (s10.__reactViewTransition = null);
              try {
                "object" == typeof e13 && null !== e13 && "InvalidStateError" === e13.name && ("View transition was skipped because document visibility state is hidden." === e13.message || "Skipping view transition because document visibility state has become hidden." === e13.message || "Skipping view transition because viewport size changed." === e13.message || "Transition was aborted because of invalid state" === e13.message) && (e13 = null), null !== e13 && u12(e13);
              } finally {
                r12(), l12(), o12();
              }
            }), c11.finished.finally(function() {
              for (var e13 = 0; e13 < f11.length; e13++) f11[e13].cancel();
              s10.__reactViewTransition === c11 && (s10.__reactViewTransition = null), i12();
            }), c11;
          } catch (e13) {
            return r12(), l12(), o12(), null;
          }
        })(o11, e11.containerInfo, u5, sx, sN, sE, sC, sz, sS) : (sx(), sN(), sC());
      })(e10, n10, t10, o10, i10, u10, d2);
    }
  }
  function sS(e10) {
    0 !== uZ && (0, uJ.onRecoverableError)(e10, { componentStack: null });
  }
  function sE() {
    3 === uZ && (uZ = 0, ud(u0, uJ), uZ = 4);
  }
  function sx() {
    if (1 === uZ) {
      uZ = 0;
      var e10 = uJ, n10 = u0, t10 = u1, r10 = 0 != (13878 & n10.flags);
      if (0 != (13878 & n10.subtreeFlags) || r10) {
        r10 = K.T, K.T = null;
        var l10 = Y.p;
        Y.p = 2;
        var a10 = u_;
        u_ |= 4;
        try {
          i4 = i6 = false, us(n10, e10, t10), t10 = cp;
          var o10 = tq(e10.containerInfo), i10 = t10.focusedElem, u10 = t10.selectionRange;
          if (o10 !== i10 && i10 && i10.ownerDocument && (function e11(n11, t11) {
            return !!n11 && !!t11 && (n11 === t11 || (!n11 || 3 !== n11.nodeType) && (t11 && 3 === t11.nodeType ? e11(n11, t11.parentNode) : "contains" in n11 ? n11.contains(t11) : !!n11.compareDocumentPosition && !!(16 & n11.compareDocumentPosition(t11))));
          })(i10.ownerDocument.documentElement, i10)) {
            if (null !== u10 && tK(i10)) {
              var s10 = u10.start, c10 = u10.end;
              if (void 0 === c10 && (c10 = s10), "selectionStart" in i10) i10.selectionStart = s10, i10.selectionEnd = Math.min(c10, i10.value.length);
              else {
                var f10 = i10.ownerDocument || document, d2 = f10 && f10.defaultView || window;
                if (d2.getSelection) {
                  var p2 = d2.getSelection(), m2 = i10.textContent.length, h2 = Math.min(u10.start, m2), g2 = void 0 === u10.end ? h2 : Math.min(u10.end, m2);
                  !p2.extend && h2 > g2 && (o10 = g2, g2 = h2, h2 = o10);
                  var v2 = tW(i10, h2), y2 = tW(i10, g2);
                  if (v2 && y2 && (1 !== p2.rangeCount || p2.anchorNode !== v2.node || p2.anchorOffset !== v2.offset || p2.focusNode !== y2.node || p2.focusOffset !== y2.offset)) {
                    var b2 = f10.createRange();
                    b2.setStart(v2.node, v2.offset), p2.removeAllRanges(), h2 > g2 ? (p2.addRange(b2), p2.extend(y2.node, y2.offset)) : (b2.setEnd(y2.node, y2.offset), p2.addRange(b2));
                  }
                }
              }
            }
            for (f10 = [], p2 = i10; p2 = p2.parentNode; ) 1 === p2.nodeType && f10.push({ element: p2, left: p2.scrollLeft, top: p2.scrollTop });
            for ("function" == typeof i10.focus && i10.focus(), i10 = 0; i10 < f10.length; i10++) {
              var w2 = f10[i10];
              w2.element.scrollLeft = w2.left, w2.element.scrollTop = w2.top;
            }
          }
          fD = !!cd, cp = cd = null;
        } finally {
          u_ = a10, Y.p = l10, K.T = r10;
        }
      }
      e10.current = n10, uZ = 2;
    }
  }
  function sN() {
    if (2 === uZ) {
      uZ = 0;
      var e10 = uJ, n10 = u0, t10 = 0 != (8772 & n10.flags);
      if (0 != (8772 & n10.subtreeFlags) || t10) {
        t10 = K.T, K.T = null;
        var r10 = Y.p;
        Y.p = 2;
        var l10 = u_;
        u_ |= 4;
        try {
          i9(e10, n10.alternate, n10);
        } finally {
          u_ = l10, Y.p = r10, K.T = t10;
        }
      }
      uZ = 3;
    }
  }
  function sC() {
    if (4 === uZ || 3 === uZ) {
      uZ = 0;
      var e10 = u6;
      u6 = null, ey();
      var n10 = uJ, t10 = u0, r10 = u1, l10 = u4, a10 = (335544064 & r10) === r10 ? 10262 : 10256;
      if (0 != (t10.subtreeFlags & a10) || 0 != (t10.flags & a10) ? uZ = 5 : (uZ = 0, u0 = uJ = null, sP(n10, n10.pendingLanes)), 0 === (a10 = n10.pendingLanes) && (uX = null), eH(r10), t10 = t10.stateNode, eP && "function" == typeof eP.onCommitFiberRoot) try {
        eP.onCommitFiberRoot(eC, t10, void 0, 128 == (128 & t10.current.flags));
      } catch (e11) {
      }
      if (null !== l10) {
        t10 = K.T, a10 = Y.p, Y.p = 2, K.T = null;
        try {
          for (var o10 = n10.onRecoverableError, i10 = 0; i10 < l10.length; i10++) {
            var u10 = l10[i10];
            o10(u10.value, { componentStack: u10.stack });
          }
        } finally {
          K.T = t10, Y.p = a10;
        }
      }
      if (l10 = u8, o10 = u5, u5 = null, null !== l10 && (u8 = null, null === o10 && (o10 = []), null !== e10)) for (u10 = 0; u10 < l10.length; u10++) void 0 !== (t10 = (0, l10[u10])(o10)) && e10.finished.finally(t10);
      0 != (3 & u1) && s_(), sj(n10), a10 = n10.pendingLanes, 0 != (261930 & r10) && 0 != (42 & a10) ? n10 === u7 ? u9++ : (u9 = 0, u7 = n10) : (u9 = 0, u7 = null), sH(0, false);
    }
  }
  function sP(e10, n10) {
    0 == (e10.pooledCacheLanes &= n10) && null != (n10 = e10.pooledCache) && (e10.pooledCache = null, lm(n10));
  }
  function s_() {
    return null !== u6 && (u6.skipTransition(), u6 = null), sx(), sN(), sC(), sz();
  }
  function sz() {
    if (5 !== uZ) return false;
    var e10 = uJ, n10 = u2;
    u2 = 0;
    var t10 = eH(u1), r10 = K.T, l10 = Y.p;
    try {
      Y.p = 32 > t10 ? 32 : t10, K.T = null, t10 = u3, u3 = null;
      var a10 = uJ, o10 = u1;
      if (uZ = 0, u0 = uJ = null, u1 = 0, 0 != (6 & u_)) throw Error(s(331));
      var i10 = u_;
      if (u_ |= 4, ux(a10.current), uv(a10, a10.current, o10, t10), u_ = i10, sH(0, false), eP && "function" == typeof eP.onPostCommitFiberRoot) try {
        eP.onPostCommitFiberRoot(eC, a10);
      } catch (e11) {
      }
      return true;
    } finally {
      Y.p = l10, K.T = r10, sP(e10, n10);
    }
  }
  function sT(e10, n10, t10) {
    n10 = rL(t10, n10), n10 = oB(e10.stateNode, n10, 2), null !== (e10 = lY(e10, n10, 2)) && (eU(e10, 2), sj(e10));
  }
  function sO(e10, n10, t10) {
    if (3 === e10.tag) sT(e10, e10, t10);
    else for (; null !== n10; ) {
      if (3 === n10.tag) {
        sT(n10, e10, t10);
        break;
      }
      if (1 === n10.tag) {
        var r10 = n10.stateNode;
        if ("function" == typeof n10.type.getDerivedStateFromError || "function" == typeof r10.componentDidCatch && (null === uX || !uX.has(r10))) {
          e10 = rL(t10, e10), null !== (r10 = lY(n10, t10 = o$(2), 2)) && (oj(t10, r10, n10, e10), eU(r10, 2), sj(r10));
          break;
        }
      }
      n10 = n10.return;
    }
  }
  function sL(e10, n10, t10) {
    var r10 = e10.pingCache;
    if (null === r10) {
      r10 = e10.pingCache = new uP();
      var l10 = /* @__PURE__ */ new Set();
      r10.set(n10, l10);
    } else void 0 === (l10 = r10.get(n10)) && (l10 = /* @__PURE__ */ new Set(), r10.set(n10, l10));
    l10.has(t10) || (uI = true, l10.add(t10), e10 = sM.bind(null, e10, n10, t10), n10.then(e10, e10));
  }
  function sM(e10, n10, t10) {
    var r10 = e10.pingCache;
    null !== r10 && r10.delete(n10), e10.pingedLanes |= e10.suspendedLanes & t10, e10.warmLanes &= ~t10, uz === e10 && (uO & t10) === t10 && ((4 === uR || 3 === uR && (62914560 & uO) === uO && 300 > eb() - uq) && 0 == (2 & u_) ? ss(e10, 0) : uB |= t10, uj === uO && (uj = 0)), sj(e10);
  }
  function sF(e10, n10) {
    0 === n10 && (n10 = eA()), null !== (e10 = rv(e10, n10)) && (eU(e10, n10), sj(e10));
  }
  function sD(e10) {
    var n10 = e10.memoizedState, t10 = 0;
    null !== n10 && (t10 = n10.retryLane), sF(e10, t10);
  }
  function sI(e10, n10) {
    var t10 = 0;
    switch (e10.tag) {
      case 31:
      case 13:
        var r10 = e10.stateNode, l10 = e10.memoizedState;
        null !== l10 && (t10 = l10.retryLane);
        break;
      case 19:
        r10 = e10.stateNode;
        break;
      case 22:
        r10 = e10.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    null !== r10 && r10.delete(n10), sF(e10, t10);
  }
  var sA = null, sR = null, sU = false, sV = false, sB = false, s$ = 0;
  function sj(e10) {
    e10 !== sR && null === e10.next && (null === sR ? sA = sR = e10 : sR = sR.next = e10), sV = true, sU || (sU = true, cS(function() {
      0 != (6 & u_) ? eh(ek, sQ) : sW();
    }));
  }
  function sH(e10, n10) {
    if (!sB && sV) {
      sB = true;
      do
        for (var t10 = false, r10 = sA; null !== r10; ) {
          if (!n10) if (0 !== e10) {
            var l10 = r10.pendingLanes;
            if (0 === l10) var a10 = 0;
            else {
              var o10 = r10.suspendedLanes, i10 = r10.pingedLanes;
              a10 = 201326741 & (a10 = (1 << 31 - e_(42 | e10) + 1) - 1 & (l10 & ~(o10 & ~i10))) ? 201326741 & a10 | 1 : a10 ? 2 | a10 : 0;
            }
            0 !== a10 && (t10 = true, sY(r10, a10));
          } else a10 = uO, 0 == (3 & (a10 = eD(r10, r10 === uz ? a10 : 0, null !== r10.cancelPendingCommit || -1 !== r10.timeoutHandle))) || eI(r10, a10) || (t10 = true, sY(r10, a10));
          r10 = r10.next;
        }
      while (t10);
      sB = false;
    }
  }
  function sQ() {
    sW();
  }
  function sW() {
    sV = sU = false;
    var e10, n10 = 0;
    0 === s$ || ((e10 = window.event) && "popstate" === e10.type ? e10 === cy || (cy = e10, 0) : (cy = null, 1)) || (n10 = s$);
    for (var t10 = eb(), r10 = null, l10 = sA; null !== l10; ) {
      var a10 = l10.next, o10 = sq(l10, t10);
      0 === o10 ? (l10.next = null, null === r10 ? sA = a10 : r10.next = a10, null === a10 && (sR = r10)) : (r10 = l10, (0 !== n10 || 0 != (3 & o10)) && (sV = true)), l10 = a10;
    }
    0 !== uZ && 5 !== uZ || sH(n10, false), 0 !== s$ && (s$ = 0);
  }
  function sq(e10, n10) {
    for (var t10 = e10.suspendedLanes, r10 = e10.pingedLanes, l10 = e10.expirationTimes, a10 = -62914561 & e10.pendingLanes; 0 < a10; ) {
      var o10 = 31 - e_(a10), i10 = 1 << o10, u10 = l10[o10];
      -1 === u10 ? (0 == (i10 & t10) || 0 != (i10 & r10)) && (l10[o10] = (function(e11, n11) {
        switch (e11) {
          case 1:
          case 2:
          case 4:
          case 8:
          case 64:
            return n11 + 250;
          case 16:
          case 32:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return n11 + 5e3;
          default:
            return -1;
        }
      })(i10, n10)) : u10 <= n10 && (e10.expiredLanes |= i10), a10 &= ~i10;
    }
    if (n10 = uz, t10 = uO, t10 = eD(e10, e10 === n10 ? t10 : 0, null !== e10.cancelPendingCommit || -1 !== e10.timeoutHandle), r10 = e10.callbackNode, 0 === t10 || e10 === n10 && (2 === uL || 9 === uL) || null !== e10.cancelPendingCommit) return null !== r10 && null !== r10 && eg(r10), e10.callbackNode = null, e10.callbackPriority = 0;
    if (0 == (3 & t10) || eI(e10, t10)) {
      if ((n10 = t10 & -t10) === e10.callbackPriority) return n10;
      switch (null !== r10 && eg(r10), eH(t10)) {
        case 2:
        case 8:
          t10 = eS;
          break;
        case 32:
        default:
          t10 = eE;
          break;
        case 268435456:
          t10 = eN;
      }
      return t10 = eh(t10, r10 = sK.bind(null, e10)), e10.callbackPriority = n10, e10.callbackNode = t10, n10;
    }
    return null !== r10 && null !== r10 && eg(r10), e10.callbackPriority = 2, e10.callbackNode = null, 2;
  }
  function sK(e10, n10) {
    if (0 !== uZ && 5 !== uZ) return e10.callbackNode = null, e10.callbackPriority = 0, null;
    var t10 = e10.callbackNode;
    if (s_() && e10.callbackNode !== t10) return null;
    var r10 = uO;
    return 0 === (r10 = eD(e10, e10 === uz ? r10 : 0, null !== e10.cancelPendingCommit || -1 !== e10.timeoutHandle)) ? null : (sl(e10, r10, n10), sq(e10, eb()), null != e10.callbackNode && e10.callbackNode === t10 ? sK.bind(null, e10) : null);
  }
  function sY(e10, n10) {
    if (s_()) return null;
    sl(e10, n10, true);
  }
  function sG() {
    if (0 === s$) {
      var e10 = lb;
      0 === e10 && (e10 = eO, 0 == (261888 & (eO <<= 1)) && (eO = 256)), s$ = e10;
    }
    return s$;
  }
  function sX(e10) {
    return null == e10 || "symbol" == typeof e10 || "boolean" == typeof e10 ? null : "function" == typeof e10 ? e10 : nO(e10);
  }
  for (var sZ = 0; sZ < rl.length; sZ++) {
    var sJ = rl[sZ];
    ra(sJ.toLowerCase(), "on" + (sJ[0].toUpperCase() + sJ.slice(1)));
  }
  ra(t8, "onAnimationEnd"), ra(t5, "onAnimationIteration"), ra(t9, "onAnimationStart"), ra("dblclick", "onDoubleClick"), ra("focusin", "onFocus"), ra("focusout", "onBlur"), ra(t7, "onTransitionRun"), ra(re, "onTransitionStart"), ra(rn, "onTransitionCancel"), ra(rt, "onTransitionEnd"), nr("onMouseEnter", ["mouseout", "mouseover"]), nr("onMouseLeave", ["mouseout", "mouseover"]), nr("onPointerEnter", ["pointerout", "pointerover"]), nr("onPointerLeave", ["pointerout", "pointerover"]), nt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), nt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), nt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), nt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), nt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), nt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var s0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), s1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(s0));
  function s2(e10, n10) {
    n10 = 0 != (4 & n10);
    for (var t10 = 0; t10 < e10.length; t10++) {
      var r10 = e10[t10], l10 = r10.event;
      r10 = r10.listeners;
      e: {
        var a10 = void 0;
        if (n10) for (var o10 = r10.length - 1; 0 <= o10; o10--) {
          var i10 = r10[o10], u10 = i10.instance, s10 = i10.currentTarget;
          if (i10 = i10.listener, u10 !== a10 && l10.isPropagationStopped()) break e;
          a10 = i10, l10.currentTarget = s10;
          try {
            a10(l10);
          } catch (e11) {
            rc(e11);
          }
          l10.currentTarget = null, a10 = u10;
        }
        else for (o10 = 0; o10 < r10.length; o10++) {
          if (u10 = (i10 = r10[o10]).instance, s10 = i10.currentTarget, i10 = i10.listener, u10 !== a10 && l10.isPropagationStopped()) break e;
          a10 = i10, l10.currentTarget = s10;
          try {
            a10(l10);
          } catch (e11) {
            rc(e11);
          }
          l10.currentTarget = null, a10 = u10;
        }
      }
    }
  }
  function s3(e10, n10) {
    var t10 = n10[eX];
    void 0 === t10 && (t10 = n10[eX] = /* @__PURE__ */ new Set());
    var r10 = e10 + "__bubble";
    t10.has(r10) || (s5(n10, e10, 2, false), t10.add(r10));
  }
  function s4(e10, n10, t10) {
    var r10 = 0;
    n10 && (r10 |= 4), s5(t10, e10, r10, n10);
  }
  var s6 = "_reactListening" + Math.random().toString(36).slice(2);
  function s8(e10) {
    if (!e10[s6]) {
      e10[s6] = true, ne.forEach(function(n11) {
        "selectionchange" !== n11 && (s1.has(n11) || s4(n11, false, e10), s4(n11, true, e10));
      });
      var n10 = 9 === e10.nodeType ? e10 : e10.ownerDocument;
      null === n10 || n10[s6] || (n10[s6] = true, s4("selectionchange", false, n10));
    }
  }
  function s5(e10, n10, t10, r10) {
    switch (f$(n10)) {
      case 2:
        var l10 = fI;
        break;
      case 8:
        l10 = fA;
        break;
      default:
        l10 = fR;
    }
    t10 = l10.bind(null, n10, t10, e10), l10 = void 0, n$ && ("touchstart" === n10 || "touchmove" === n10 || "wheel" === n10) && (l10 = true), r10 ? void 0 !== l10 ? e10.addEventListener(n10, t10, { capture: true, passive: l10 }) : e10.addEventListener(n10, t10, true) : void 0 !== l10 ? e10.addEventListener(n10, t10, { passive: l10 }) : e10.addEventListener(n10, t10, false);
  }
  function s9(e10, n10, t10, r10, l10) {
    var a10 = r10;
    if (0 == (1 & n10) && 0 == (2 & n10) && null !== r10) e: for (; ; ) {
      if (null === r10) return;
      var o10 = r10.tag;
      if (3 === o10 || 4 === o10) {
        var i10 = r10.stateNode.containerInfo;
        if (i10 === l10) break;
        if (4 === o10) for (o10 = r10.return; null !== o10; ) {
          var u10 = o10.tag;
          if ((3 === u10 || 4 === u10) && o10.stateNode.containerInfo === l10) return;
          o10 = o10.return;
        }
        for (; null !== i10; ) {
          if (null === (o10 = e4(i10))) return;
          if (5 === (u10 = o10.tag) || 6 === u10 || 26 === u10 || 27 === u10) {
            r10 = a10 = o10;
            continue e;
          }
          i10 = i10.parentNode;
        }
      }
      r10 = r10.return;
    }
    nU(function() {
      var r11 = a10, l11 = nF(t10), o11 = [];
      e: {
        var i11 = rr.get(e10);
        if (void 0 !== i11) {
          var u11 = n4, s10 = e10;
          switch (e10) {
            case "keypress":
              if (0 === nK(t10)) break e;
            case "keydown":
            case "keyup":
              u11 = ts;
              break;
            case "focusin":
              s10 = "focus", u11 = te;
              break;
            case "focusout":
              s10 = "blur", u11 = te;
              break;
            case "beforeblur":
            case "afterblur":
              u11 = te;
              break;
            case "click":
              if (2 === t10.button) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              u11 = n9;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              u11 = n7;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              u11 = td;
              break;
            case t8:
            case t5:
            case t9:
              u11 = tn;
              break;
            case rt:
              u11 = tp;
              break;
            case "scroll":
            case "scrollend":
              u11 = n8;
              break;
            case "wheel":
              u11 = tm;
              break;
            case "copy":
            case "cut":
            case "paste":
              u11 = tt;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              u11 = tc;
              break;
            case "submit":
              u11 = tf;
              break;
            case "toggle":
            case "beforetoggle":
              u11 = th;
          }
          var c10 = 0 != (4 & n10), d2 = !c10 && ("scroll" === e10 || "scrollend" === e10), p2 = c10 ? null !== i11 ? i11 + "Capture" : null : i11;
          c10 = [];
          for (var m2, h2 = r11; null !== h2; ) {
            var g2 = h2;
            if (m2 = g2.stateNode, 5 !== (g2 = g2.tag) && 26 !== g2 && 27 !== g2 || null === m2 || null === p2 || null != (g2 = nV(h2, p2)) && c10.push(s7(h2, g2, m2)), d2) break;
            h2 = h2.return;
          }
          0 < c10.length && (i11 = new u11(i11, s10, null, t10, l11), o11.push({ event: i11, listeners: c10 }));
        }
      }
      if (0 == (7 & n10)) {
        u11 = "mouseover" === e10 || "pointerover" === e10, i11 = "mouseout" === e10 || "pointerout" === e10, !(u11 && t10 !== nM && (s10 = t10.relatedTarget || t10.fromElement) && (e4(s10) || s10[eG])) && (i11 || u11) && (s10 = l11.window === l11 ? l11 : (u11 = l11.ownerDocument) ? u11.defaultView || u11.parentWindow : window, i11 ? (u11 = t10.relatedTarget || t10.toElement, i11 = r11, null !== (u11 = u11 ? e4(u11) : null) && (d2 = f(u11), c10 = u11.tag, u11 !== d2 || 5 !== c10 && 27 !== c10 && 6 !== c10) && (u11 = null)) : (i11 = null, u11 = r11), i11 !== u11 && (c10 = n9, g2 = "onMouseLeave", p2 = "onMouseEnter", h2 = "mouse", ("pointerout" === e10 || "pointerover" === e10) && (c10 = tc, g2 = "onPointerLeave", p2 = "onPointerEnter", h2 = "pointer"), d2 = null == i11 ? s10 : e8(i11), m2 = null == u11 ? s10 : e8(u11), (s10 = new c10(g2, h2 + "leave", i11, t10, l11)).target = d2, s10.relatedTarget = m2, g2 = null, e4(l11) === r11 && ((c10 = new c10(p2, h2 + "enter", u11, t10, l11)).target = m2, c10.relatedTarget = d2, g2 = c10), d2 = g2, c10 = i11 && u11 ? x(i11, u11, cn) : null, null !== i11 && ct(o11, s10, i11, c10, false), null !== u11 && null !== d2 && ct(o11, d2, u11, c10, true)));
        e: {
          if ("select" === (u11 = (i11 = r11 ? e8(r11) : window).nodeName && i11.nodeName.toLowerCase()) || "input" === u11 && "file" === i11.type) var v2, y2 = tL;
          else if (tC(i11)) if (tM) y2 = tB;
          else {
            y2 = tU;
            var b2 = tR;
          }
          else (u11 = i11.nodeName) && "input" === u11.toLowerCase() && ("checkbox" === i11.type || "radio" === i11.type) ? y2 = tV : r11 && n_(r11.elementType) && (y2 = tL);
          if (y2 && (y2 = y2(e10, r11))) {
            tP(o11, y2, t10, l11);
            break e;
          }
          b2 && b2(e10, i11, r11);
        }
        switch (b2 = r11 ? e8(r11) : window, e10) {
          case "focusin":
            (tC(b2) || "true" === b2.contentEditable) && (tG = b2, tX = r11, tZ = null);
            break;
          case "focusout":
            tZ = tX = tG = null;
            break;
          case "mousedown":
            tJ = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            tJ = false, t0(o11, t10, l11);
            break;
          case "selectionchange":
            if (tY) break;
          case "keydown":
          case "keyup":
            t0(o11, t10, l11);
        }
        if (tv) n: {
          switch (e10) {
            case "compositionstart":
              var w2 = "onCompositionStart";
              break n;
            case "compositionend":
              w2 = "onCompositionEnd";
              break n;
            case "compositionupdate":
              w2 = "onCompositionUpdate";
              break n;
          }
          w2 = void 0;
        }
        else tx ? tS(e10, t10) && (w2 = "onCompositionEnd") : "keydown" === e10 && 229 === t10.keyCode && (w2 = "onCompositionStart");
        w2 && (tw && "ko" !== t10.locale && (tx || "onCompositionStart" !== w2 ? "onCompositionEnd" === w2 && tx && (v2 = nq()) : (nQ = "value" in (nH = l11) ? nH.value : nH.textContent, tx = true)), 0 < (b2 = ce(r11, w2)).length && (w2 = new tr(w2, e10, null, t10, l11), o11.push({ event: w2, listeners: b2 }), v2 ? w2.data = v2 : null !== (v2 = tE(t10)) && (w2.data = v2))), (v2 = tb ? (function(e11, n11) {
          switch (e11) {
            case "compositionend":
              return tE(n11);
            case "keypress":
              if (32 !== n11.which) return null;
              return tk = true, " ";
            case "textInput":
              return " " === (e11 = n11.data) && tk ? null : e11;
            default:
              return null;
          }
        })(e10, t10) : (function(e11, n11) {
          if (tx) return "compositionend" === e11 || !tv && tS(e11, n11) ? (e11 = nq(), nW = nQ = nH = null, tx = false, e11) : null;
          switch (e11) {
            case "paste":
            default:
              return null;
            case "keypress":
              if (!(n11.ctrlKey || n11.altKey || n11.metaKey) || n11.ctrlKey && n11.altKey) {
                if (n11.char && 1 < n11.char.length) return n11.char;
                if (n11.which) return String.fromCharCode(n11.which);
              }
              return null;
            case "compositionend":
              return tw && "ko" !== n11.locale ? null : n11.data;
          }
        })(e10, t10)) && 0 < (w2 = ce(r11, "onBeforeInput")).length && (b2 = new tr("onBeforeInput", "beforeinput", null, t10, l11), o11.push({ event: b2, listeners: w2 }), b2.data = v2);
        var k2 = e10;
        if ("submit" === k2 && r11 && r11.stateNode === l11) {
          var S2 = sX((l11[eY] || null).action), E2 = t10.submitter;
          E2 && null !== (k2 = (k2 = E2[eY] || null) ? sX(k2.formAction) : E2.getAttribute("formAction")) && (S2 = k2, E2 = null);
          var N2 = new n4("action", "action", null, t10, l11);
          o11.push({ event: N2, listeners: [{ instance: null, listener: function() {
            if (t10.defaultPrevented) {
              if (0 !== s$) {
                var e11 = new FormData(l11, E2);
                op(r11, { pending: true, data: e11, method: l11.method, action: S2 }, null, e11);
              }
            } else "function" == typeof S2 && (N2.preventDefault(), op(r11, { pending: true, data: e11 = new FormData(l11, E2), method: l11.method, action: S2 }, S2, e11));
          }, currentTarget: l11 }] });
        }
      }
      s2(o11, n10);
    });
  }
  function s7(e10, n10, t10) {
    return { instance: e10, listener: n10, currentTarget: t10 };
  }
  function ce(e10, n10) {
    for (var t10 = n10 + "Capture", r10 = []; null !== e10; ) {
      var l10 = e10, a10 = l10.stateNode;
      if (5 !== (l10 = l10.tag) && 26 !== l10 && 27 !== l10 || null === a10 || (null != (l10 = nV(e10, t10)) && r10.unshift(s7(e10, l10, a10)), null != (l10 = nV(e10, n10)) && r10.push(s7(e10, l10, a10))), 3 === e10.tag) return r10;
      e10 = e10.return;
    }
    return [];
  }
  function cn(e10) {
    if (null === e10) return null;
    do
      e10 = e10.return;
    while (e10 && 5 !== e10.tag && 27 !== e10.tag);
    return e10 || null;
  }
  function ct(e10, n10, t10, r10, l10) {
    for (var a10 = n10._reactName, o10 = []; null !== t10 && t10 !== r10; ) {
      var i10 = t10, u10 = i10.alternate, s10 = i10.stateNode;
      if (i10 = i10.tag, null !== u10 && u10 === r10) break;
      5 !== i10 && 26 !== i10 && 27 !== i10 || null === s10 || (u10 = s10, l10 ? null != (s10 = nV(t10, a10)) && o10.unshift(s7(t10, s10, u10)) : l10 || null != (s10 = nV(t10, a10)) && o10.push(s7(t10, s10, u10))), t10 = t10.return;
    }
    0 !== o10.length && e10.push({ event: n10, listeners: o10 });
  }
  var cr = /\r\n?/g, cl = /\u0000|\uFFFD/g;
  function ca(e10) {
    return ("string" == typeof e10 ? e10 : "" + e10).replace(cr, "\n").replace(cl, "");
  }
  function co(e10, n10) {
    return n10 = ca(n10), ca(e10) === n10;
  }
  function ci(e10, n10, t10, r10, l10, a10) {
    switch (t10) {
      case "children":
        if ("string" == typeof r10) "body" === n10 || "textarea" === n10 && "" === r10 || nx(e10, r10);
        else {
          if ("number" != typeof r10 && "bigint" != typeof r10) return;
          "body" !== n10 && nx(e10, "" + r10);
        }
        break;
      case "className":
        nc(e10, "class", r10);
        break;
      case "tabIndex":
        nc(e10, "tabindex", r10);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        nc(e10, t10, r10);
        break;
      case "style":
        nP(e10, r10, a10);
        return;
      case "data":
        if ("object" !== n10) {
          nc(e10, "data", r10);
          break;
        }
      case "src":
      case "href":
        if ("" === r10 && ("a" !== n10 || "href" !== t10) || null == r10 || "function" == typeof r10 || "symbol" == typeof r10 || "boolean" == typeof r10) {
          e10.removeAttribute(t10);
          break;
        }
        r10 = nO(r10), e10.setAttribute(t10, r10);
        break;
      case "action":
      case "formAction":
        if ("function" == typeof r10) {
          e10.setAttribute(t10, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        }
        if ("function" == typeof a10 && ("formAction" === t10 ? ("input" !== n10 && ci(e10, n10, "name", l10.name, l10, null), ci(e10, n10, "formEncType", l10.formEncType, l10, null), ci(e10, n10, "formMethod", l10.formMethod, l10, null), ci(e10, n10, "formTarget", l10.formTarget, l10, null)) : (ci(e10, n10, "encType", l10.encType, l10, null), ci(e10, n10, "method", l10.method, l10, null), ci(e10, n10, "target", l10.target, l10, null))), null == r10 || "symbol" == typeof r10 || "boolean" == typeof r10) {
          e10.removeAttribute(t10);
          break;
        }
        r10 = nO(r10), e10.setAttribute(t10, r10);
        break;
      case "onClick":
        null != r10 && (e10.onclick = nL);
        return;
      case "onScroll":
        null != r10 && s3("scroll", e10);
        return;
      case "onScrollEnd":
        null != r10 && s3("scrollend", e10);
        return;
      case "dangerouslySetInnerHTML":
        if (null != r10) {
          if ("object" != typeof r10 || !("__html" in r10)) throw Error(s(61));
          if (null != (t10 = r10.__html)) {
            if (null != l10.children) throw Error(s(60));
            (null != a10 ? a10.__html : void 0) !== t10 && (e10.innerHTML = t10);
          }
        }
        break;
      case "multiple":
        e10.multiple = r10 && "function" != typeof r10 && "symbol" != typeof r10;
        break;
      case "muted":
        e10.muted = r10 && "function" != typeof r10 && "symbol" != typeof r10;
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
      case "autoFocus":
        break;
      case "xlinkHref":
        if (null == r10 || "function" == typeof r10 || "boolean" == typeof r10 || "symbol" == typeof r10) {
          e10.removeAttribute("xlink:href");
          break;
        }
        t10 = nO(r10), e10.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t10);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        null != r10 && "function" != typeof r10 && "symbol" != typeof r10 ? e10.setAttribute(t10, r10) : e10.removeAttribute(t10);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r10 && "function" != typeof r10 && "symbol" != typeof r10 ? e10.setAttribute(t10, "") : e10.removeAttribute(t10);
        break;
      case "capture":
      case "download":
        true === r10 ? e10.setAttribute(t10, "") : false !== r10 && null != r10 && "function" != typeof r10 && "symbol" != typeof r10 ? e10.setAttribute(t10, r10) : e10.removeAttribute(t10);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        null != r10 && "function" != typeof r10 && "symbol" != typeof r10 && !isNaN(r10) && 1 <= r10 ? e10.setAttribute(t10, r10) : e10.removeAttribute(t10);
        break;
      case "rowSpan":
      case "start":
        null == r10 || "function" == typeof r10 || "symbol" == typeof r10 || isNaN(r10) ? e10.removeAttribute(t10) : e10.setAttribute(t10, r10);
        break;
      case "popover":
        s3("beforetoggle", e10), s3("toggle", e10), ns(e10, "popover", r10);
        break;
      case "xlinkActuate":
        nf(e10, "http://www.w3.org/1999/xlink", "xlink:actuate", r10);
        break;
      case "xlinkArcrole":
        nf(e10, "http://www.w3.org/1999/xlink", "xlink:arcrole", r10);
        break;
      case "xlinkRole":
        nf(e10, "http://www.w3.org/1999/xlink", "xlink:role", r10);
        break;
      case "xlinkShow":
        nf(e10, "http://www.w3.org/1999/xlink", "xlink:show", r10);
        break;
      case "xlinkTitle":
        nf(e10, "http://www.w3.org/1999/xlink", "xlink:title", r10);
        break;
      case "xlinkType":
        nf(e10, "http://www.w3.org/1999/xlink", "xlink:type", r10);
        break;
      case "xmlBase":
        nf(e10, "http://www.w3.org/XML/1998/namespace", "xml:base", r10);
        break;
      case "xmlLang":
        nf(e10, "http://www.w3.org/XML/1998/namespace", "xml:lang", r10);
        break;
      case "xmlSpace":
        nf(e10, "http://www.w3.org/XML/1998/namespace", "xml:space", r10);
        break;
      case "is":
        ns(e10, "is", r10);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (2 < t10.length && ("o" === t10[0] || "O" === t10[0]) && ("n" === t10[1] || "N" === t10[1])) return;
        ns(e10, t10 = nz.get(t10) || t10, r10);
    }
    ni = true;
  }
  function cu(e10, n10, t10, r10, l10, a10) {
    switch (t10) {
      case "style":
        nP(e10, r10, a10);
        return;
      case "dangerouslySetInnerHTML":
        if (null != r10) {
          if ("object" != typeof r10 || !("__html" in r10)) throw Error(s(61));
          if (null != (t10 = r10.__html)) {
            if (null != l10.children) throw Error(s(60));
            (null != a10 ? a10.__html : void 0) !== t10 && (e10.innerHTML = t10);
          }
        }
        break;
      case "children":
        if ("string" == typeof r10) nx(e10, r10);
        else {
          if ("number" != typeof r10 && "bigint" != typeof r10) return;
          nx(e10, "" + r10);
        }
        break;
      case "onScroll":
        null != r10 && s3("scroll", e10);
        return;
      case "onScrollEnd":
        null != r10 && s3("scrollend", e10);
        return;
      case "onClick":
        null != r10 && (e10.onclick = nL);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
      case "innerText":
      case "textContent":
        return;
      default:
        if (!nn.hasOwnProperty(t10)) e: {
          if ("o" === t10[0] && "n" === t10[1] && (l10 = t10.endsWith("Capture"), a10 = t10.slice(2, l10 ? t10.length - 7 : void 0), "function" == typeof (n10 = null != (n10 = e10[eY] || null) ? n10[t10] : null) && e10.removeEventListener(a10, n10, l10), "function" == typeof r10)) {
            "function" != typeof n10 && null !== n10 && (t10 in e10 ? e10[t10] = null : e10.hasAttribute(t10) && e10.removeAttribute(t10)), e10.addEventListener(a10, r10, l10);
            break e;
          }
          ni = true, t10 in e10 ? e10[t10] = r10 : true === r10 ? e10.setAttribute(t10, "") : ns(e10, t10, r10);
        }
        return;
    }
    ni = true;
  }
  function cs(e10, n10, t10) {
    switch (n10) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        s3("error", e10), s3("load", e10);
        var r10, l10 = false, a10 = false;
        for (r10 in t10) if (t10.hasOwnProperty(r10)) {
          var o10 = t10[r10];
          if (null != o10) switch (r10) {
            case "src":
              l10 = true;
              break;
            case "srcSet":
              a10 = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(s(137, n10));
            default:
              ci(e10, n10, r10, o10, t10, null);
          }
        }
        a10 && ci(e10, n10, "srcSet", t10.srcSet, t10, null), l10 && ci(e10, n10, "src", t10.src, t10, null);
        return;
      case "input":
        s3("invalid", e10);
        var i10 = r10 = o10 = a10 = null, u10 = null, c10 = null;
        for (l10 in t10) if (t10.hasOwnProperty(l10)) {
          var f10 = t10[l10];
          if (null != f10) switch (l10) {
            case "name":
              a10 = f10;
              break;
            case "type":
              o10 = f10;
              break;
            case "checked":
              u10 = f10;
              break;
            case "defaultChecked":
              c10 = f10;
              break;
            case "value":
              r10 = f10;
              break;
            case "defaultValue":
              i10 = f10;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (null != f10) throw Error(s(137, n10));
              break;
            default:
              ci(e10, n10, l10, f10, t10, null);
          }
        }
        nb(e10, r10, i10, u10, c10, o10, a10, false);
        return;
      case "select":
        for (a10 in s3("invalid", e10), l10 = o10 = r10 = null, t10) if (t10.hasOwnProperty(a10) && null != (i10 = t10[a10])) switch (a10) {
          case "value":
            r10 = i10;
            break;
          case "defaultValue":
            o10 = i10;
            break;
          case "multiple":
            l10 = i10;
          default:
            ci(e10, n10, a10, i10, t10, null);
        }
        n10 = r10, t10 = o10, e10.multiple = !!l10, null != n10 ? nk(e10, !!l10, n10, false) : null != t10 && nk(e10, !!l10, t10, true);
        return;
      case "textarea":
        for (o10 in s3("invalid", e10), r10 = a10 = l10 = null, t10) if (t10.hasOwnProperty(o10) && null != (i10 = t10[o10])) switch (o10) {
          case "value":
            l10 = i10;
            break;
          case "defaultValue":
            a10 = i10;
            break;
          case "children":
            r10 = i10;
            break;
          case "dangerouslySetInnerHTML":
            if (null != i10) throw Error(s(91));
            break;
          default:
            ci(e10, n10, o10, i10, t10, null);
        }
        nE(e10, l10, a10, r10);
        return;
      case "option":
        for (u10 in t10) t10.hasOwnProperty(u10) && null != (l10 = t10[u10]) && ("selected" === u10 ? e10.selected = l10 && "function" != typeof l10 && "symbol" != typeof l10 : ci(e10, n10, u10, l10, t10, null));
        return;
      case "dialog":
        s3("beforetoggle", e10), s3("toggle", e10), s3("cancel", e10), s3("close", e10);
        break;
      case "iframe":
      case "object":
        s3("load", e10);
        break;
      case "video":
      case "audio":
        for (l10 = 0; l10 < s0.length; l10++) s3(s0[l10], e10);
        break;
      case "image":
        s3("error", e10), s3("load", e10);
        break;
      case "details":
        s3("toggle", e10);
        break;
      case "embed":
      case "source":
      case "link":
        s3("error", e10), s3("load", e10);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (c10 in t10) if (t10.hasOwnProperty(c10) && null != (l10 = t10[c10])) switch (c10) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(137, n10));
          default:
            ci(e10, n10, c10, l10, t10, null);
        }
        return;
      default:
        if (n_(n10)) {
          for (f10 in t10) t10.hasOwnProperty(f10) && void 0 !== (l10 = t10[f10]) && cu(e10, n10, f10, l10, t10, void 0);
          return;
        }
    }
    for (i10 in t10) t10.hasOwnProperty(i10) && null != (l10 = t10[i10]) && ci(e10, n10, i10, l10, t10, null);
  }
  var cc = {};
  function cf(e10) {
    switch (e10) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  var cd = null, cp = null;
  function cm(e10) {
    return 9 === e10.nodeType ? e10 : e10.ownerDocument;
  }
  function ch(e10) {
    switch (e10) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function cg(e10, n10) {
    if (0 === e10) switch (n10) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return 1 === e10 && "foreignObject" === n10 ? 0 : e10;
  }
  function cv(e10, n10) {
    return "textarea" === e10 || "noscript" === e10 || "string" == typeof n10.children || "number" == typeof n10.children || "bigint" == typeof n10.children || "object" == typeof n10.dangerouslySetInnerHTML && null !== n10.dangerouslySetInnerHTML && null != n10.dangerouslySetInnerHTML.__html;
  }
  var cy = null, cb = "function" == typeof setTimeout ? setTimeout : void 0, cw = "function" == typeof clearTimeout ? clearTimeout : void 0, ck = "function" == typeof Promise ? Promise : void 0, cS = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== ck ? function(e10) {
    return ck.resolve(null).then(e10).catch(cE);
  } : cb;
  function cE(e10) {
    setTimeout(function() {
      throw e10;
    });
  }
  function cx(e10) {
    return "head" === e10;
  }
  function cN(e10, n10) {
    var t10 = n10, r10 = 0;
    do {
      var l10 = t10.nextSibling;
      if (e10.removeChild(t10), l10 && 8 === l10.nodeType) if ("/$" === (t10 = l10.data) || "/&" === t10) {
        if (0 === r10) {
          e10.removeChild(l10), f8(n10);
          return;
        }
        r10--;
      } else if ("$" === t10 || "$?" === t10 || "$~" === t10 || "$!" === t10 || "&" === t10) r10++;
      else if ("html" === t10) c8(e10.ownerDocument.documentElement);
      else if ("head" === t10) {
        c8(t10 = e10.ownerDocument.head);
        for (var a10 = t10.firstChild; a10; ) {
          var o10 = a10.nextSibling, i10 = a10.nodeName;
          a10[e1] || "SCRIPT" === i10 || "STYLE" === i10 || "LINK" === i10 && "stylesheet" === a10.rel.toLowerCase() || t10.removeChild(a10), a10 = o10;
        }
      } else "body" === t10 && c8(e10.ownerDocument.body);
      t10 = l10;
    } while (t10);
    f8(n10);
  }
  function cC(e10, n10) {
    var t10 = e10;
    e10 = 0;
    do {
      var r10 = t10.nextSibling;
      if (1 === t10.nodeType ? n10 ? (t10._stashedDisplay = t10.style.display, t10.style.display = "none") : (t10.style.display = t10._stashedDisplay || "", "" === t10.getAttribute("style") && t10.removeAttribute("style")) : 3 === t10.nodeType && (n10 ? (t10._stashedText = t10.nodeValue, t10.nodeValue = "") : t10.nodeValue = t10._stashedText || ""), r10 && 8 === r10.nodeType) if ("/$" === (t10 = r10.data)) if (0 === e10) break;
      else e10--;
      else "$" !== t10 && "$?" !== t10 && "$~" !== t10 && "$!" !== t10 || e10++;
      t10 = r10;
    } while (t10);
  }
  function cP(e10, n10, t10) {
    if (n10 = CSS.escape(n10) !== n10 ? "r-" + btoa(n10).replace(/=/g, "") : n10, e10.style.viewTransitionName = n10, null != t10 && (e10.style.viewTransitionClass = t10), "inline" === (t10 = getComputedStyle(e10)).display) {
      if (1 === (n10 = e10.getClientRects()).length) var r10 = 1;
      else for (var l10 = r10 = 0; l10 < n10.length; l10++) {
        var a10 = n10[l10];
        0 < a10.width && 0 < a10.height && r10++;
      }
      1 === r10 && ((e10 = e10.style).display = 1 === n10.length ? "inline-block" : "block", e10.marginTop = "-" + t10.paddingTop, e10.marginBottom = "-" + t10.paddingBottom);
    }
  }
  function c_(e10, n10) {
    e10 = e10.style;
    var t10 = null != (n10 = n10.style) ? n10.hasOwnProperty("viewTransitionName") ? n10.viewTransitionName : n10.hasOwnProperty("view-transition-name") ? n10["view-transition-name"] : null : null;
    e10.viewTransitionName = null == t10 || "boolean" == typeof t10 ? "" : ("" + t10).trim(), t10 = null != n10 ? n10.hasOwnProperty("viewTransitionClass") ? n10.viewTransitionClass : n10.hasOwnProperty("view-transition-class") ? n10["view-transition-class"] : null : null, e10.viewTransitionClass = null == t10 || "boolean" == typeof t10 ? "" : ("" + t10).trim(), "inline-block" === e10.display && (null == n10 ? e10.display = e10.margin = "" : (t10 = n10.display, e10.display = null == t10 || "boolean" == typeof t10 ? "" : t10, null != (t10 = n10.margin) ? e10.margin = t10 : (t10 = n10.hasOwnProperty("marginTop") ? n10.marginTop : n10["margin-top"], e10.marginTop = null == t10 || "boolean" == typeof t10 ? "" : t10, n10 = n10.hasOwnProperty("marginBottom") ? n10.marginBottom : n10["margin-bottom"], e10.marginBottom = null == n10 || "boolean" == typeof n10 ? "" : n10)));
  }
  function cz(e10, n10, t10) {
    return t10 = t10.ownerDocument.defaultView, { rect: e10, abs: "absolute" === n10.position || "fixed" === n10.position, clip: "none" !== n10.clipPath || "visible" !== n10.overflow || "none" !== n10.filter || "none" !== n10.mask || "none" !== n10.mask || "0px" !== n10.borderRadius, view: 0 <= e10.bottom && 0 <= e10.right && e10.top <= t10.innerHeight && e10.left <= t10.innerWidth };
  }
  function cT(e10) {
    return cz(e10.getBoundingClientRect(), getComputedStyle(e10), e10);
  }
  function cO(e10) {
    var n10 = e10.getBoundingClientRect();
    return cz(n10 = new DOMRect(n10.x + 2e4, n10.y + 2e4, n10.width, n10.height), getComputedStyle(e10), e10);
  }
  function cL(e10) {
    this.addEventListener("load", e10), this.addEventListener("error", e10);
  }
  function cM(e10, n10) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e10 + "(" + n10 + ")";
  }
  function cF(e10) {
    return { name: e10, group: new cM("group", e10), imagePair: new cM("image-pair", e10), old: new cM("old", e10), new: new cM("new", e10) };
  }
  function cD(e10) {
    this._fragmentFiber = e10, this._observers = this._eventListeners = null;
  }
  function cI(e10, n10, t10, r10) {
    return v(e10).addEventListener(n10, t10, r10), false;
  }
  function cA(e10, n10, t10, r10) {
    return v(e10).removeEventListener(n10, t10, r10), false;
  }
  function cR(e10) {
    return null == e10 ? "0" : "boolean" == typeof e10 ? "c=" + (e10 ? "1" : "0") : "c=" + (e10.capture ? "1" : "0");
  }
  function cU(e10, n10, t10, r10) {
    if (0 === e10.length) return -1;
    r10 = cR(r10);
    for (var l10 = 0; l10 < e10.length; l10++) {
      var a10 = e10[l10];
      if (a10.type === n10 && a10.listener === t10 && cR(a10.optionsOrUseCapture) === r10) return l10;
    }
    return -1;
  }
  function cV(e10, n10) {
    return 6 !== e10.tag && (function(e11, n11) {
      function t10() {
        r10 = true;
      }
      if (e11.ownerDocument.activeElement === e11) return true;
      var r10 = false;
      try {
        e11.ownerDocument.addEventListener("focus", t10, true), (e11.focus || HTMLElement.prototype.focus).call(e11, n11);
      } finally {
        e11.ownerDocument.removeEventListener("focus", t10, true);
      }
      return r10;
    })(e10 = v(e10), n10);
  }
  function cB(e10, n10) {
    return n10.push(e10), false;
  }
  function c$(e10, n10) {
    return 6 !== e10.tag && !!((e10 = v(e10)) === n10 || e10.contains(n10)) && (n10.blur(), true);
  }
  function cj(e10, n10) {
    return 6 !== e10.tag && (e10 = v(e10), n10.observe(e10), false);
  }
  function cH(e10, n10) {
    return 6 !== e10.tag && (e10 = v(e10), n10.unobserve(e10), false);
  }
  function cQ(e10, n10) {
    if (6 === e10.tag) {
      var t10 = (e10 = e10.stateNode).ownerDocument.createRange();
      t10.selectNodeContents(e10), n10.push.apply(n10, t10.getClientRects());
    } else e10 = v(e10), n10.push.apply(n10, e10.getClientRects());
    return false;
  }
  function cW(e10, n10) {
    var t10 = e10.ownerDocument.createRange();
    t10.selectNodeContents(e10), e10 = t10.getBoundingClientRect(), window.scrollTo(window.scrollX + e10.left, n10 ? window.scrollY + e10.top : window.scrollY + e10.bottom - window.innerHeight);
  }
  function cq(e10, n10) {
    return cK(e10 = v(e10), n10), false;
  }
  function cK(e10, n10) {
    null == e10.reactFragments && (e10.reactFragments = /* @__PURE__ */ new Set()), e10.reactFragments.add(n10);
  }
  function cY(e10, n10) {
    if (3 !== e10.nodeType) {
      var t10 = n10._eventListeners;
      if (null !== t10) for (var r10 = 0; r10 < t10.length; r10++) {
        var l10 = t10[r10];
        e10.addEventListener(l10.type, l10.listener, l10.optionsOrUseCapture);
      }
      null !== n10._observers && n10._observers.forEach(function(n11) {
        n11.observe(e10);
      }), cK(e10, n10);
    }
  }
  function cG(e10) {
    var n10 = e10.firstChild;
    for (n10 && 10 === n10.nodeType && (n10 = n10.nextSibling); n10; ) {
      var t10 = n10;
      switch (n10 = n10.nextSibling, t10.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          cG(t10), e3(t10);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if ("stylesheet" === t10.rel.toLowerCase()) continue;
      }
      e10.removeChild(t10);
    }
  }
  function cX(e10, n10) {
    for (; 8 !== e10.nodeType; ) if ((1 !== e10.nodeType || "INPUT" !== e10.nodeName || "hidden" !== e10.type) && !n10 || null === (e10 = c0(e10.nextSibling))) return null;
    return e10;
  }
  function cZ(e10) {
    return "$?" === e10.data || "$~" === e10.data;
  }
  function cJ(e10) {
    return "$!" === e10.data || "$?" === e10.data && "loading" !== e10.ownerDocument.readyState;
  }
  function c0(e10) {
    for (; null != e10; e10 = e10.nextSibling) {
      var n10 = e10.nodeType;
      if (1 === n10 || 3 === n10) break;
      if (8 === n10) {
        if ("$" === (n10 = e10.data) || "$!" === n10 || "$?" === n10 || "$~" === n10 || "&" === n10 || "F!" === n10 || "F" === n10) break;
        if ("/$" === n10 || "/&" === n10) return null;
      }
    }
    return e10;
  }
  cM.prototype.animate = function(e10, n10) {
    return (n10 = "number" == typeof n10 ? { duration: n10 } : N({}, n10)).pseudoElement = this._selector, this._scope.animate(e10, n10);
  }, cM.prototype.getAnimations = function() {
    for (var e10 = this._scope, n10 = this._selector, t10 = e10.getAnimations({ subtree: true }), r10 = [], l10 = 0; l10 < t10.length; l10++) {
      var a10 = t10[l10].effect;
      null !== a10 && a10.target === e10 && a10.pseudoElement === n10 && r10.push(t10[l10]);
    }
    return r10;
  }, cM.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  }, cD.prototype.addEventListener = function(e10, n10, t10) {
    null === this._eventListeners && (this._eventListeners = []);
    var r10 = this._eventListeners;
    -1 === cU(r10, e10, n10, t10) && (r10.push({ type: e10, listener: n10, optionsOrUseCapture: t10 }), h(this._fragmentFiber.child, false, cI, e10, n10, t10)), this._eventListeners = r10;
  }, cD.prototype.removeEventListener = function(e10, n10, t10) {
    var r10 = this._eventListeners;
    null != r10 && 0 < r10.length && (h(this._fragmentFiber.child, false, cA, e10, n10, t10), e10 = cU(r10, e10, n10, t10), null !== this._eventListeners && this._eventListeners.splice(e10, 1));
  }, cD.prototype.dispatchEvent = function(e10) {
    var n10 = g(this._fragmentFiber);
    if (null === n10) return true;
    n10 = v(n10);
    var t10 = this._eventListeners;
    if (null !== t10 && 0 < t10.length || !e10.bubbles) {
      var r10 = document.createTextNode("");
      if (t10) for (var l10 = 0; l10 < t10.length; l10++) {
        var a10 = t10[l10];
        r10.addEventListener(a10.type, a10.listener, a10.optionsOrUseCapture);
      }
      if (n10.appendChild(r10), e10 = r10.dispatchEvent(e10), t10) for (l10 = 0; l10 < t10.length; l10++) a10 = t10[l10], r10.removeEventListener(a10.type, a10.listener, a10.optionsOrUseCapture);
      return n10.removeChild(r10), e10;
    }
    return n10.dispatchEvent(e10);
  }, cD.prototype.focus = function(e10) {
    h(this._fragmentFiber.child, true, cV, e10, void 0, void 0);
  }, cD.prototype.focusLast = function(e10) {
    var n10 = [];
    h(this._fragmentFiber.child, true, cB, n10, void 0, void 0);
    for (var t10 = n10.length - 1; 0 <= t10 && !cV(n10[t10], e10); t10--) ;
  }, cD.prototype.blur = function() {
    var e10 = g(this._fragmentFiber);
    if (null !== e10) {
      var n10 = cm(e10 = v(e10)).activeElement;
      null !== n10 && e10.contains(n10) && h(this._fragmentFiber.child, false, c$, n10, void 0, void 0);
    }
  }, cD.prototype.observeUsing = function(e10) {
    null === this._observers && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e10), h(this._fragmentFiber.child, false, cj, e10, void 0, void 0);
  }, cD.prototype.unobserveUsing = function(e10) {
    var n10 = this._observers;
    null !== n10 && n10.has(e10) && (n10.delete(e10), h(this._fragmentFiber.child, false, cH, e10, void 0, void 0));
  }, cD.prototype.getClientRects = function() {
    var e10 = [];
    return h(this._fragmentFiber.child, false, cQ, e10, void 0, void 0), e10;
  }, cD.prototype.getRootNode = function(e10) {
    var n10 = g(this._fragmentFiber);
    return null === n10 ? this : v(n10).getRootNode(e10);
  }, cD.prototype.compareDocumentPosition = function(e10) {
    var n10 = g(this._fragmentFiber);
    if (null === n10) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var t10 = [];
    h(this._fragmentFiber.child, false, cB, t10, void 0, void 0);
    var r10 = v(n10);
    if (0 === t10.length) {
      t10 = this._fragmentFiber;
      var l10 = r10.compareDocumentPosition(e10);
      return n10 = l10, r10 === e10 ? n10 = Node.DOCUMENT_POSITION_CONTAINS : l10 & Node.DOCUMENT_POSITION_CONTAINED_BY && (h(t10.sibling, false, w), t10 = y, y = null, n10 = null === t10 ? Node.DOCUMENT_POSITION_PRECEDING : 0 === (e10 = v(t10).compareDocumentPosition(e10)) || e10 & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING), n10 | Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    n10 = v(t10[0]), l10 = v(t10[t10.length - 1]);
    for (var a10 = false, o10 = this._fragmentFiber.return; null !== o10 && (4 === o10.tag && (a10 = true), 3 !== o10.tag && 5 !== o10.tag); ) o10 = o10.return;
    if (null == (a10 = a10 ? n10.parentElement : r10)) return Node.DOCUMENT_POSITION_DISCONNECTED;
    r10 = a10.compareDocumentPosition(n10) & Node.DOCUMENT_POSITION_CONTAINED_BY, a10 = a10.compareDocumentPosition(l10) & Node.DOCUMENT_POSITION_CONTAINED_BY, o10 = n10.compareDocumentPosition(e10);
    var i10 = l10.compareDocumentPosition(e10), u10 = o10 & Node.DOCUMENT_POSITION_CONTAINED_BY || i10 & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return i10 = r10 && a10 && o10 & Node.DOCUMENT_POSITION_FOLLOWING && i10 & Node.DOCUMENT_POSITION_PRECEDING, (n10 = r10 && n10 === e10 || a10 && l10 === e10 || u10 || i10 ? Node.DOCUMENT_POSITION_CONTAINED_BY : (r10 || n10 !== e10) && (a10 || l10 !== e10) ? o10 : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC) & Node.DOCUMENT_POSITION_DISCONNECTED || n10 & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || (function(e11, n11, t11, r11, l11) {
      var a11 = e4(l11);
      if (e11 & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        if (t11 = !!a11) e: {
          for (; null !== a11; ) {
            if (7 === a11.tag && (a11 === n11 || a11.alternate === n11)) {
              t11 = true;
              break e;
            }
            a11 = a11.return;
          }
          t11 = false;
        }
        return t11;
      }
      if (e11 & Node.DOCUMENT_POSITION_CONTAINS) {
        if (null === a11) return a11 = l11.ownerDocument, l11 === a11 || l11 === a11.body;
        e: {
          for (a11 = n11, n11 = g(n11); null !== a11; ) {
            if ((5 === a11.tag || 3 === a11.tag) && (a11 === n11 || a11.alternate === n11)) {
              a11 = true;
              break e;
            }
            a11 = a11.return;
          }
          a11 = false;
        }
        return a11;
      }
      return e11 & Node.DOCUMENT_POSITION_PRECEDING ? ((n11 = !!a11) && !(n11 = a11 === t11) && (null === (n11 = x(t11, a11, E)) ? n11 = false : (h(n11, true, k, a11, t11), a11 = y, y = null, n11 = null !== a11)), n11) : !!(e11 & Node.DOCUMENT_POSITION_FOLLOWING) && ((n11 = !!a11) && !(n11 = a11 === r11) && (null === (n11 = x(r11, a11, E)) ? n11 = false : (h(n11, true, S, a11, r11), a11 = y, b = y = null, n11 = null !== a11)), n11);
    })(n10, this._fragmentFiber, t10[0], t10[t10.length - 1], e10) ? n10 : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  }, cD.prototype.scrollIntoView = function(e10) {
    if ("object" == typeof e10) throw Error(s(566));
    var n10 = [];
    h(this._fragmentFiber.child, false, cB, n10, void 0, void 0);
    var t10 = false !== e10;
    if (0 === n10.length) {
      var r10 = this._fragmentFiber, l10 = [null, null], a10 = g(r10);
      if (null !== a10 && (function e11(n11, t11, r11) {
        for (var l11 = 3 < arguments.length && void 0 !== arguments[3] && arguments[3]; null !== r11; ) {
          if (r11 === t11) if (l11 = true, !r11.sibling) return true;
          else r11 = r11.sibling;
          if (5 === r11.tag || 6 === r11.tag) {
            if (l11) return n11[1] = r11, true;
            n11[0] = r11;
          } else if ((22 !== r11.tag || null === r11.memoizedState) && e11(n11, t11, r11.child, l11)) return true;
          r11 = r11.sibling;
        }
        return false;
      })(l10, r10, a10.child), null === (r10 = t10 ? l10[1] || l10[0] || g(this._fragmentFiber) : l10[0] || l10[1])) return;
      if (6 === r10.tag) return void cW(e10 = v(r10), t10);
      if (9 !== (r10 = v(r10)).nodeType) {
        if (11 === r10.nodeType) {
          null !== (t10 = "host" in r10 ? r10.host : null) && t10.scrollIntoView(e10);
          return;
        }
        r10.scrollIntoView(e10);
      }
    }
    for (r10 = t10 ? n10.length - 1 : 0; r10 !== (t10 ? -1 : n10.length); ) 6 === (l10 = n10[r10]).tag ? cW(l10 = v(l10), t10) : v(l10).scrollIntoView(e10), r10 += t10 ? -1 : 1;
  };
  var c1 = null;
  function c2(e10) {
    e10 = e10.nextSibling;
    for (var n10 = 0; e10; ) {
      if (8 === e10.nodeType) {
        var t10 = e10.data;
        if ("/$" === t10 || "/&" === t10) {
          if (0 === n10) return c0(e10.nextSibling);
          n10--;
        } else "$" !== t10 && "$!" !== t10 && "$?" !== t10 && "$~" !== t10 && "&" !== t10 || n10++;
      }
      e10 = e10.nextSibling;
    }
    return null;
  }
  function c3(e10) {
    e10 = e10.previousSibling;
    for (var n10 = 0; e10; ) {
      if (8 === e10.nodeType) {
        var t10 = e10.data;
        if ("$" === t10 || "$!" === t10 || "$?" === t10 || "$~" === t10 || "&" === t10) {
          if (0 === n10) return e10;
          n10--;
        } else "/$" !== t10 && "/&" !== t10 || n10++;
      }
      e10 = e10.previousSibling;
    }
    return null;
  }
  function c4(e10, n10, t10) {
    switch (n10 = cm(t10), e10) {
      case "html":
        if (!(e10 = n10.documentElement)) throw Error(s(452));
        return e10;
      case "head":
        if (!(e10 = n10.head)) throw Error(s(453));
        return e10;
      case "body":
        if (!(e10 = n10.body)) throw Error(s(454));
        return e10;
      default:
        throw Error(s(451));
    }
  }
  function c6(e10, n10, t10) {
    for (var r10 in t10) {
      var l10 = t10[r10];
      t10.hasOwnProperty(r10) && null != l10 && ci(e10, n10, r10, null, cc, l10);
    }
    null != t10.dangerouslySetInnerHTML && (e10.textContent = ""), e10.onclick === nL && (e10.onclick = null), e3(e10);
  }
  function c8(e10) {
    for (var n10 = e10.attributes; n10.length; ) e10.removeAttributeNode(n10[0]);
    e3(e10);
  }
  var c5 = /* @__PURE__ */ new Map(), c9 = /* @__PURE__ */ new Set();
  function c7(e10) {
    if ("function" == typeof e10.getRootNode) {
      var n10 = e10.getRootNode();
      if (9 === n10.nodeType || 11 === n10.nodeType) return n10;
    }
    return 9 === e10.nodeType ? e10 : e10.ownerDocument;
  }
  var fe = Y.d;
  Y.d = { f: function() {
    var e10 = fe.f(), n10 = si();
    return e10 || n10;
  }, r: function(e10) {
    var n10 = e6(e10);
    null !== n10 && 5 === n10.tag && "form" === n10.type ? oh(n10) : fe.r(e10);
  }, D: function(e10) {
    fe.D(e10), ft("dns-prefetch", e10, null);
  }, C: function(e10, n10) {
    fe.C(e10, n10), ft("preconnect", e10, n10);
  }, L: function(e10, n10, t10) {
    if (fe.L(e10, n10, t10), fn && e10 && n10) {
      var r10 = 'link[rel="preload"][as="' + nv(n10) + '"]';
      "image" === n10 && t10 && t10.imageSrcSet ? (r10 += '[imagesrcset="' + nv(t10.imageSrcSet) + '"]', "string" == typeof t10.imageSizes && (r10 += '[imagesizes="' + nv(t10.imageSizes) + '"]')) : r10 += '[href="' + nv(e10) + '"]';
      var l10 = r10;
      switch (n10) {
        case "style":
          l10 = fl(e10);
          break;
        case "script":
          l10 = fi(e10);
      }
      if (!(c5.has(l10) || (e10 = N({ rel: "preload", href: "image" === n10 && t10 && t10.imageSrcSet ? void 0 : e10, as: n10 }, t10), c5.set(l10, e10), null !== fn.querySelector(r10) || "style" === n10 && fn.querySelector(fa(l10)) || "script" === n10 && fn.querySelector(fu(l10))))) {
        var a10 = fn.createElement("link");
        cs(a10, "link", e10), "style" === n10 && (a10[e2] = true, a10.onload = a10.onerror = function() {
          e7(a10);
        }), e9(a10), fn.head.appendChild(a10);
      }
    }
  }, m: function(e10, n10) {
    if (fe.m(e10, n10), fn && e10) {
      var t10 = n10 && "string" == typeof n10.as ? n10.as : "script", r10 = 'link[rel="modulepreload"][as="' + nv(t10) + '"][href="' + nv(e10) + '"]', l10 = r10;
      switch (t10) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          l10 = fi(e10);
      }
      if (!c5.has(l10) && (e10 = N({ rel: "modulepreload", href: e10 }, n10), c5.set(l10, e10), null === fn.querySelector(r10))) {
        switch (t10) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (fn.querySelector(fu(l10))) return;
        }
        cs(t10 = fn.createElement("link"), "link", e10), e9(t10), fn.head.appendChild(t10);
      }
    }
  }, X: function(e10, n10) {
    if (fe.X(e10, n10), fn && e10) {
      var t10 = e5(fn).hoistableScripts, r10 = fi(e10), l10 = t10.get(r10);
      l10 || ((l10 = fn.querySelector(fu(r10))) || (e10 = N({ src: e10, async: true }, n10), (n10 = c5.get(r10)) && fd(e10, n10), e9(l10 = fn.createElement("script")), cs(l10, "link", e10), fn.head.appendChild(l10)), l10 = { type: "script", instance: l10, count: 1, state: null }, t10.set(r10, l10));
    }
  }, S: function(e10, n10, t10) {
    if (fe.S(e10, n10, t10), fn && e10) {
      var r10 = e5(fn).hoistableStyles, l10 = fl(e10);
      n10 = n10 || "default";
      var a10 = r10.get(l10);
      if (!a10) {
        var o10 = { loading: 0, preload: null };
        if (a10 = fn.querySelector(fa(l10))) o10.loading = 5;
        else {
          e10 = N({ rel: "stylesheet", href: e10, "data-precedence": n10 }, t10), (t10 = c5.get(l10)) && ff(e10, t10);
          var i10 = a10 = fn.createElement("link");
          e9(i10), cs(i10, "link", e10), i10._p = new Promise(function(e11, n11) {
            i10.onload = e11, i10.onerror = n11;
          }), i10.addEventListener("load", function() {
            o10.loading |= 1;
          }), i10.addEventListener("error", function() {
            o10.loading |= 2;
          }), o10.loading |= 4, fc(a10, n10, fn);
        }
        a10 = { type: "stylesheet", instance: a10, count: 1, state: o10 }, r10.set(l10, a10);
      }
    }
  }, M: function(e10, n10) {
    if (fe.M(e10, n10), fn && e10) {
      var t10 = e5(fn).hoistableScripts, r10 = fi(e10), l10 = t10.get(r10);
      l10 || ((l10 = fn.querySelector(fu(r10))) || (e10 = N({ src: e10, async: true, type: "module" }, n10), (n10 = c5.get(r10)) && fd(e10, n10), e9(l10 = fn.createElement("script")), cs(l10, "link", e10), fn.head.appendChild(l10)), l10 = { type: "script", instance: l10, count: 1, state: null }, t10.set(r10, l10));
    }
  } };
  var fn = "u" < typeof document ? null : document;
  function ft(e10, n10, t10) {
    if (fn && "string" == typeof n10 && n10) {
      var r10 = nv(n10);
      r10 = 'link[rel="' + e10 + '"][href="' + r10 + '"]', "string" == typeof t10 && (r10 += '[crossorigin="' + t10 + '"]'), c9.has(r10) || (c9.add(r10), e10 = { rel: e10, crossOrigin: t10, href: n10 }, null === fn.querySelector(r10) && (cs(n10 = fn.createElement("link"), "link", e10), e9(n10), fn.head.appendChild(n10)));
    }
  }
  function fr(e10, n10, t10, r10) {
    var l10 = (l10 = el.current) ? c7(l10) : null;
    if (!l10) throw Error(s(446));
    switch (e10) {
      case "meta":
      case "title":
        return null;
      case "style":
        return "string" == typeof t10.precedence && "string" == typeof t10.href ? (t10 = fl(t10.href), (r10 = (n10 = e5(l10).hoistableStyles).get(t10)) || (r10 = { type: "style", instance: null, count: 0, state: null }, n10.set(t10, r10)), r10) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if ("stylesheet" === t10.rel && "string" == typeof t10.href && "string" == typeof t10.precedence) {
          e10 = fl(t10.href);
          var a10 = e5(l10).hoistableStyles, o10 = a10.get(e10);
          if (o10 || (l10 = l10.ownerDocument || l10, o10 = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, a10.set(e10, o10), (a10 = l10.querySelector(fa(e10))) ? a10._p || (o10.instance = a10, o10.state.loading = 5) : ((a10 = c5.get(e10)) || (a10 = { rel: "preload", as: "style", href: t10.href, crossOrigin: t10.crossOrigin, integrity: t10.integrity, media: t10.media, hrefLang: t10.hrefLang, referrerPolicy: t10.referrerPolicy }, c5.set(e10, a10)), (function(e11, n11, t11, r11) {
            if (n11 = e11.querySelector('link[rel="preload"][as="style"][' + n11 + "]")) {
              if (true !== n11[e2]) {
                r11.loading = 1;
                return;
              }
            } else (n11 = e11.createElement("link"))[e2] = true, n11.onload = n11.onerror = e7.bind(null, n11), cs(n11, "link", t11), e9(n11), e11.head.appendChild(n11);
            r11.preload = n11, n11.addEventListener("load", function() {
              return r11.loading |= 1;
            }), n11.addEventListener("error", function() {
              return r11.loading |= 2;
            });
          })(l10, e10, a10, o10.state))), n10 && null === r10) throw Error(s(528, ""));
          return o10;
        }
        if (n10 && null !== r10) throw Error(s(529, ""));
        return null;
      case "script":
        return n10 = t10.async, "string" == typeof (t10 = t10.src) && n10 && "function" != typeof n10 && "symbol" != typeof n10 ? (t10 = fi(t10), (r10 = (n10 = e5(l10).hoistableScripts).get(t10)) || (r10 = { type: "script", instance: null, count: 0, state: null }, n10.set(t10, r10)), r10) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e10));
    }
  }
  function fl(e10) {
    return 'href="' + nv(e10) + '"';
  }
  function fa(e10) {
    return 'link[rel="stylesheet"][' + e10 + "]";
  }
  function fo(e10) {
    return N({}, e10, { "data-precedence": e10.precedence, precedence: null });
  }
  function fi(e10) {
    return '[src="' + nv(e10) + '"]';
  }
  function fu(e10) {
    return "script[async]" + e10;
  }
  function fs(e10, n10, t10) {
    if (n10.count++, null === n10.instance) switch (n10.type) {
      case "style":
        var r10 = e10.querySelector('style[data-href~="' + nv(t10.href) + '"]');
        if (r10) return n10.instance = r10, e9(r10), r10;
        var l10 = N({}, t10, { "data-href": t10.href, "data-precedence": t10.precedence, href: null, precedence: null });
        return e9(r10 = (e10.ownerDocument || e10).createElement("style")), cs(r10, "style", l10), fc(r10, t10.precedence, e10), n10.instance = r10;
      case "stylesheet":
        l10 = fl(t10.href);
        var a10 = e10.querySelector(fa(l10));
        if (a10) return n10.state.loading |= 4, n10.instance = a10, e9(a10), a10;
        r10 = fo(t10), (l10 = c5.get(l10)) && ff(r10, l10), e9(a10 = (e10.ownerDocument || e10).createElement("link"));
        var o10 = a10;
        return o10._p = new Promise(function(e11, n11) {
          o10.onload = e11, o10.onerror = n11;
        }), cs(a10, "link", r10), n10.state.loading |= 4, fc(a10, t10.precedence, e10), n10.instance = a10;
      case "script":
        if (a10 = fi(t10.src), l10 = e10.querySelector(fu(a10))) return n10.instance = l10, e9(l10), l10;
        return r10 = t10, (l10 = c5.get(a10)) && fd(r10 = N({}, t10), l10), e9(l10 = (e10 = e10.ownerDocument || e10).createElement("script")), cs(l10, "link", r10), e10.head.appendChild(l10), n10.instance = l10;
      case "void":
        return null;
      default:
        throw Error(s(443, n10.type));
    }
    return "stylesheet" === n10.type && 0 == (4 & n10.state.loading) && (r10 = n10.instance, n10.state.loading |= 4, fc(r10, t10.precedence, e10)), n10.instance;
  }
  function fc(e10, n10, t10) {
    for (var r10 = t10.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l10 = r10.length ? r10[r10.length - 1] : null, a10 = l10, o10 = 0; o10 < r10.length; o10++) {
      var i10 = r10[o10];
      if (i10.dataset.precedence === n10) a10 = i10;
      else if (a10 !== l10) break;
    }
    a10 ? a10.parentNode.insertBefore(e10, a10.nextSibling) : (n10 = 9 === t10.nodeType ? t10.head : t10).insertBefore(e10, n10.firstChild);
  }
  function ff(e10, n10) {
    null == e10.crossOrigin && (e10.crossOrigin = n10.crossOrigin), null == e10.referrerPolicy && (e10.referrerPolicy = n10.referrerPolicy), null == e10.title && (e10.title = n10.title);
  }
  function fd(e10, n10) {
    null == e10.crossOrigin && (e10.crossOrigin = n10.crossOrigin), null == e10.referrerPolicy && (e10.referrerPolicy = n10.referrerPolicy), null == e10.integrity && (e10.integrity = n10.integrity);
  }
  var fp = null;
  function fm(e10, n10, t10) {
    if (null === fp) {
      var r10 = /* @__PURE__ */ new Map(), l10 = fp = /* @__PURE__ */ new Map();
      l10.set(t10, r10);
    } else (r10 = (l10 = fp).get(t10)) || (r10 = /* @__PURE__ */ new Map(), l10.set(t10, r10));
    if (r10.has(e10)) return r10;
    for (r10.set(e10, null), t10 = t10.getElementsByTagName(e10), l10 = 0; l10 < t10.length; l10++) {
      var a10 = t10[l10];
      if (!(a10[e1] || a10[eK] || "link" === e10 && "stylesheet" === a10.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== a10.namespaceURI) {
        var o10 = a10.getAttribute(n10) || "";
        o10 = e10 + o10;
        var i10 = r10.get(o10);
        i10 ? i10.push(a10) : r10.set(o10, [a10]);
      }
    }
    return r10;
  }
  function fh(e10, n10, t10) {
    (e10 = e10.ownerDocument || e10).head.insertBefore(t10, "title" === n10 ? e10.querySelector("head > title") : null);
  }
  function fg(e10, n10) {
    return "img" === e10 && null != n10.src && "" !== n10.src && null == n10.onLoad && "lazy" !== n10.loading;
  }
  function fv(e10) {
    return "stylesheet" !== e10.type || 0 != (3 & e10.state.loading);
  }
  function fy(e10) {
    return (e10.width || 100) * (e10.height || 100) * ("number" == typeof devicePixelRatio ? devicePixelRatio : 1) * 0.25;
  }
  function fb(e10, n10) {
    "function" == typeof n10.decode && (e10.imgCount++, n10.complete || (e10.imgBytes += fy(n10), e10.suspenseyImages.push(n10)), e10 = fE.bind(e10), n10.decode().then(e10, e10));
  }
  var fw = 0;
  function fk(e10) {
    if (0 === e10.count && (0 === e10.imgCount || !e10.waitingForImages)) {
      if (e10.stylesheets) fN(e10, e10.stylesheets);
      else if (e10.unsuspend) {
        var n10 = e10.unsuspend;
        e10.unsuspend = null, n10();
      }
    }
  }
  function fS() {
    this.count--, fk(this);
  }
  function fE() {
    this.imgCount--, fk(this);
  }
  var fx = null;
  function fN(e10, n10) {
    e10.stylesheets = null, null !== e10.unsuspend && (e10.count++, fx = /* @__PURE__ */ new Map(), n10.forEach(fC, e10), fx = null, fS.call(e10));
  }
  function fC(e10, n10) {
    if (!(4 & n10.state.loading)) {
      var t10 = fx.get(e10);
      if (t10) var r10 = t10.get(null);
      else {
        t10 = /* @__PURE__ */ new Map(), fx.set(e10, t10);
        for (var l10 = e10.querySelectorAll("link[data-precedence],style[data-precedence]"), a10 = 0; a10 < l10.length; a10++) {
          var o10 = l10[a10];
          ("LINK" === o10.nodeName || "not all" !== o10.getAttribute("media")) && (t10.set(o10.dataset.precedence, o10), r10 = o10);
        }
        r10 && t10.set(null, r10);
      }
      o10 = (l10 = n10.instance).getAttribute("data-precedence"), (a10 = t10.get(o10) || r10) === r10 && t10.set(null, l10), t10.set(o10, l10), this.count++, r10 = fS.bind(this), l10.addEventListener("load", r10), l10.addEventListener("error", r10), a10 ? a10.parentNode.insertBefore(l10, a10.nextSibling) : (e10 = 9 === e10.nodeType ? e10.head : e10).insertBefore(l10, e10.firstChild), n10.state.loading |= 4;
    }
  }
  var fP = { $$typeof: M, Provider: null, Consumer: null, _currentValue: G, _currentValue2: G, _threadCount: 0 };
  function f_(e10, n10, t10, r10, l10, a10, o10, i10, u10) {
    this.tag = 1, this.containerInfo = e10, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = eR(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = eR(0), this.hiddenUpdates = eR(null), this.identifierPrefix = r10, this.onUncaughtError = l10, this.onCaughtError = a10, this.onRecoverableError = o10, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = u10, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function fz(e10, n10, t10, r10, l10, a10, o10, i10, u10, s10, c10, f10) {
    return e10 = new f_(e10, n10, t10, o10, u10, s10, c10, f10, i10), n10 = 1, true === a10 && (n10 |= 24), a10 = rS(3, null, null, n10), e10.current = a10, a10.stateNode = e10, n10 = lp(), n10.refCount++, e10.pooledCache = n10, n10.refCount++, a10.memoizedState = { element: r10, isDehydrated: t10, cache: n10 }, lW(a10), e10;
  }
  function fT(e10, n10, t10, r10, l10, a10) {
    l10 = l10 ? rw : rw, null === r10.context ? r10.context = l10 : r10.pendingContext = l10, (r10 = lK(n10)).payload = { element: t10 }, null !== (a10 = void 0 === a10 ? null : a10) && (r10.callback = a10), null !== (t10 = lY(e10, r10, n10)) && (sr(t10, e10, n10), lG(t10, e10, n10));
  }
  function fO(e10, n10) {
    if (null !== (e10 = e10.memoizedState) && null !== e10.dehydrated) {
      var t10 = e10.retryLane;
      e10.retryLane = 0 !== t10 && t10 < n10 ? t10 : n10;
    }
  }
  function fL(e10, n10) {
    fO(e10, n10), (e10 = e10.alternate) && fO(e10, n10);
  }
  function fM(e10) {
    if (13 === e10.tag || 31 === e10.tag) {
      var n10 = rv(e10, 67108864);
      null !== n10 && sr(n10, e10, 67108864), fL(e10, 67108864);
    }
  }
  function fF(e10) {
    if (13 === e10.tag || 31 === e10.tag) {
      var n10 = se(), t10 = rv(e10, n10 = ej(n10));
      null !== t10 && sr(t10, e10, n10), fL(e10, n10);
    }
  }
  var fD = true;
  function fI(e10, n10, t10, r10) {
    var l10 = K.T;
    K.T = null;
    var a10 = Y.p;
    try {
      Y.p = 2, fR(e10, n10, t10, r10);
    } finally {
      Y.p = a10, K.T = l10;
    }
  }
  function fA(e10, n10, t10, r10) {
    var l10 = K.T;
    K.T = null;
    var a10 = Y.p;
    try {
      Y.p = 8, fR(e10, n10, t10, r10);
    } finally {
      Y.p = a10, K.T = l10;
    }
  }
  function fR(e10, n10, t10, r10) {
    if (fD) {
      var l10 = fU(r10);
      if (null === l10) s9(e10, n10, r10, fV, t10), fX(e10, r10);
      else if ((function(e11, n11, t11, r11, l11) {
        switch (n11) {
          case "focusin":
            return fH = fZ(fH, e11, n11, t11, r11, l11), true;
          case "dragenter":
            return fQ = fZ(fQ, e11, n11, t11, r11, l11), true;
          case "mouseover":
            return fW = fZ(fW, e11, n11, t11, r11, l11), true;
          case "pointerover":
            var a11 = l11.pointerId;
            return fq.set(a11, fZ(fq.get(a11) || null, e11, n11, t11, r11, l11)), true;
          case "gotpointercapture":
            return a11 = l11.pointerId, fK.set(a11, fZ(fK.get(a11) || null, e11, n11, t11, r11, l11)), true;
        }
        return false;
      })(l10, e10, n10, t10, r10)) r10.stopPropagation();
      else if (fX(e10, r10), 4 & n10 && -1 < fG.indexOf(e10)) {
        for (; null !== l10; ) {
          var a10 = e6(l10);
          if (null !== a10) switch (a10.tag) {
            case 3:
              if ((a10 = a10.stateNode).current.memoizedState.isDehydrated) {
                var o10 = eF(a10.pendingLanes);
                if (0 !== o10) {
                  var i10 = a10;
                  for (i10.pendingLanes |= 2, i10.entangledLanes |= 2; o10; ) {
                    var u10 = 1 << 31 - e_(o10);
                    i10.entanglements[1] |= u10, o10 &= ~u10;
                  }
                  sj(a10), 0 == (6 & u_) && (uY = eb() + 500, sH(0, false));
                }
              }
              break;
            case 31:
            case 13:
              null !== (i10 = rv(a10, 2)) && sr(i10, a10, 2), si(), fL(a10, 2);
          }
          if (null === (a10 = fU(r10)) && s9(e10, n10, r10, fV, t10), a10 === l10) break;
          l10 = a10;
        }
        null !== l10 && r10.stopPropagation();
      } else s9(e10, n10, r10, null, t10);
    }
  }
  function fU(e10) {
    return fB(e10 = nF(e10));
  }
  var fV = null;
  function fB(e10) {
    if (fV = null, null !== (e10 = e4(e10))) {
      var n10 = f(e10);
      if (null === n10) e10 = null;
      else {
        var t10 = n10.tag;
        if (13 === t10) {
          if (null !== (e10 = d(n10))) return e10;
          e10 = null;
        } else if (31 === t10) {
          if (null !== (e10 = p(n10))) return e10;
          e10 = null;
        } else if (3 === t10) {
          if (n10.stateNode.current.memoizedState.isDehydrated) return 3 === n10.tag ? n10.stateNode.containerInfo : null;
          e10 = null;
        } else n10 !== e10 && (e10 = null);
      }
    }
    return fV = e10, null;
  }
  function f$(e10) {
    switch (e10) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ew()) {
          case ek:
            return 2;
          case eS:
            return 8;
          case eE:
          case ex:
            return 32;
          case eN:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var fj = false, fH = null, fQ = null, fW = null, fq = /* @__PURE__ */ new Map(), fK = /* @__PURE__ */ new Map(), fY = [], fG = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function fX(e10, n10) {
    switch (e10) {
      case "focusin":
      case "focusout":
        fH = null;
        break;
      case "dragenter":
      case "dragleave":
        fQ = null;
        break;
      case "mouseover":
      case "mouseout":
        fW = null;
        break;
      case "pointerover":
      case "pointerout":
        fq.delete(n10.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        fK.delete(n10.pointerId);
    }
  }
  function fZ(e10, n10, t10, r10, l10, a10) {
    return null === e10 || e10.nativeEvent !== a10 ? (e10 = { blockedOn: n10, domEventName: t10, eventSystemFlags: r10, nativeEvent: a10, targetContainers: [l10] }, null !== n10 && null !== (n10 = e6(n10)) && fM(n10)) : (e10.eventSystemFlags |= r10, n10 = e10.targetContainers, null !== l10 && -1 === n10.indexOf(l10) && n10.push(l10)), e10;
  }
  function fJ(e10) {
    var n10 = e4(e10.target);
    if (null !== n10) {
      var t10 = f(n10);
      if (null !== t10) {
        if (13 === (n10 = t10.tag)) {
          if (null !== (n10 = d(t10))) {
            e10.blockedOn = n10, eW(e10.priority, function() {
              fF(t10);
            });
            return;
          }
        } else if (31 === n10) {
          if (null !== (n10 = p(t10))) {
            e10.blockedOn = n10, eW(e10.priority, function() {
              fF(t10);
            });
            return;
          }
        } else if (3 === n10 && t10.stateNode.current.memoizedState.isDehydrated) {
          e10.blockedOn = 3 === t10.tag ? t10.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e10.blockedOn = null;
  }
  function f0(e10) {
    if (null !== e10.blockedOn) return false;
    for (var n10 = e10.targetContainers; 0 < n10.length; ) {
      var t10 = fU(e10.nativeEvent);
      if (null !== t10) return null !== (n10 = e6(t10)) && fM(n10), e10.blockedOn = t10, false;
      var r10 = new (t10 = e10.nativeEvent).constructor(t10.type, t10);
      nM = r10, t10.target.dispatchEvent(r10), nM = null, n10.shift();
    }
    return true;
  }
  function f1(e10, n10, t10) {
    f0(e10) && t10.delete(n10);
  }
  function f2() {
    fj = false, null !== fH && f0(fH) && (fH = null), null !== fQ && f0(fQ) && (fQ = null), null !== fW && f0(fW) && (fW = null), fq.forEach(f1), fK.forEach(f1);
  }
  function f3(e10, n10) {
    e10.blockedOn === n10 && (e10.blockedOn = null, fj || (fj = true, o.unstable_scheduleCallback(o.unstable_NormalPriority, f2)));
  }
  var f4 = null;
  function f6(e10) {
    f4 !== e10 && (f4 = e10, o.unstable_scheduleCallback(o.unstable_NormalPriority, function() {
      f4 === e10 && (f4 = null);
      for (var n10 = 0; n10 < e10.length; n10 += 3) {
        var t10 = e10[n10], r10 = e10[n10 + 1], l10 = e10[n10 + 2];
        if ("function" != typeof r10) if (null === fB(r10 || t10)) continue;
        else break;
        var a10 = e6(t10);
        null !== a10 && (e10.splice(n10, 3), n10 -= 3, op(a10, { pending: true, data: l10, method: t10.method, action: r10 }, r10, l10));
      }
    }));
  }
  function f8(e10) {
    function n10(n11) {
      return f3(n11, e10);
    }
    null !== fH && f3(fH, e10), null !== fQ && f3(fQ, e10), null !== fW && f3(fW, e10), fq.forEach(n10), fK.forEach(n10);
    for (var t10 = 0; t10 < fY.length; t10++) {
      var r10 = fY[t10];
      r10.blockedOn === e10 && (r10.blockedOn = null);
    }
    for (; 0 < fY.length && null === (t10 = fY[0]).blockedOn; ) fJ(t10), null === t10.blockedOn && fY.shift();
    if (null != (t10 = (e10.ownerDocument || e10).$$reactFormReplay)) for (r10 = 0; r10 < t10.length; r10 += 3) {
      var l10 = t10[r10], a10 = t10[r10 + 1], o10 = l10[eY] || null;
      if ("function" == typeof a10) o10 || f6(t10);
      else if (o10) {
        var i10 = null;
        if (a10 && a10.hasAttribute("formAction")) {
          if (l10 = a10, o10 = a10[eY] || null) i10 = o10.formAction;
          else if (null !== fB(l10)) continue;
        } else i10 = o10.action;
        "function" == typeof i10 ? t10[r10 + 1] = i10 : (t10.splice(r10, 3), r10 -= 3), f6(t10);
      }
    }
  }
  function f5() {
    function e10(e11) {
      e11.canIntercept && "react-transition" === e11.info && e11.intercept({ handler: function() {
        return new Promise(function(e12) {
          return l10 = e12;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function n10() {
      null !== l10 && (l10(), l10 = null), r10 || setTimeout(t10, 20);
    }
    function t10() {
      if (!r10 && !navigation.transition) {
        var e11 = navigation.currentEntry;
        e11 && null != e11.url && navigation.navigate(e11.url, { state: e11.getState(), info: "react-transition", history: "replace" });
      }
    }
    if ("object" == typeof navigation) {
      var r10 = false, l10 = null;
      return navigation.addEventListener("navigate", e10), navigation.addEventListener("navigatesuccess", n10), navigation.addEventListener("navigateerror", n10), setTimeout(t10, 100), function() {
        r10 = true, navigation.removeEventListener("navigate", e10), navigation.removeEventListener("navigatesuccess", n10), navigation.removeEventListener("navigateerror", n10), null !== l10 && (l10(), l10 = null);
      };
    }
  }
  function f9(e10) {
    this._internalRoot = e10;
  }
  function f7(e10) {
    this._internalRoot = e10;
  }
  f7.prototype.render = f9.prototype.render = function(e10) {
    var n10 = this._internalRoot;
    if (null === n10) throw Error(s(409));
    fT(n10.current, se(), e10, n10, null, null);
  }, f7.prototype.unmount = f9.prototype.unmount = function() {
    var e10 = this._internalRoot;
    if (null !== e10) {
      this._internalRoot = null;
      var n10 = e10.containerInfo;
      fT(e10.current, 2, null, e10, null, null), si(), n10[eG] = null;
    }
  }, f7.prototype.unstable_scheduleHydration = function(e10) {
    if (e10) {
      var n10 = eQ();
      e10 = { blockedOn: null, target: e10, priority: n10 };
      for (var t10 = 0; t10 < fY.length && 0 !== n10 && n10 < fY[t10].priority; t10++) ;
      fY.splice(t10, 0, e10), 0 === t10 && fJ(e10);
    }
  };
  var de = i.version;
  if ("19.3.0-canary-cbb046ab-20260731" !== de) throw Error(s(527, de, "19.3.0-canary-cbb046ab-20260731"));
  if (Y.findDOMNode = function(e10) {
    var n10 = e10._reactInternals;
    if (void 0 === n10) {
      if ("function" == typeof e10.render) throw Error(s(188));
      throw Error(s(268, e10 = Object.keys(e10).join(",")));
    }
    return null === (e10 = null !== (e10 = (function(e11) {
      var n11 = e11.alternate;
      if (!n11) {
        if (null === (n11 = f(e11))) throw Error(s(188));
        return n11 !== e11 ? null : e11;
      }
      for (var t10 = e11, r10 = n11; ; ) {
        var l10 = t10.return;
        if (null === l10) break;
        var a10 = l10.alternate;
        if (null === a10) {
          if (null !== (r10 = l10.return)) {
            t10 = r10;
            continue;
          }
          break;
        }
        if (l10.child === a10.child) {
          for (a10 = l10.child; a10; ) {
            if (a10 === t10) return m(l10), e11;
            if (a10 === r10) return m(l10), n11;
            a10 = a10.sibling;
          }
          throw Error(s(188));
        }
        if (t10.return !== r10.return) t10 = l10, r10 = a10;
        else {
          for (var o10 = false, i10 = l10.child; i10; ) {
            if (i10 === t10) {
              o10 = true, t10 = l10, r10 = a10;
              break;
            }
            if (i10 === r10) {
              o10 = true, r10 = l10, t10 = a10;
              break;
            }
            i10 = i10.sibling;
          }
          if (!o10) {
            for (i10 = a10.child; i10; ) {
              if (i10 === t10) {
                o10 = true, t10 = a10, r10 = l10;
                break;
              }
              if (i10 === r10) {
                o10 = true, r10 = a10, t10 = l10;
                break;
              }
              i10 = i10.sibling;
            }
            if (!o10) throw Error(s(189));
          }
        }
        if (t10.alternate !== r10) throw Error(s(190));
      }
      if (3 !== t10.tag) throw Error(s(188));
      return t10.stateNode.current === t10 ? e11 : n11;
    })(n10)) ? (function e11(n11) {
      var t10 = n11.tag;
      if (5 === t10 || 26 === t10 || 27 === t10 || 6 === t10) return n11;
      for (n11 = n11.child; null !== n11; ) {
        if (null !== (t10 = e11(n11))) return t10;
        n11 = n11.sibling;
      }
      return null;
    })(e10) : null) ? null : e10.stateNode;
  }, "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var dn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!dn.isDisabled && dn.supportsFiber) try {
      eC = dn.inject({ bundleType: 0, version: "19.3.0-canary-cbb046ab-20260731", rendererPackageName: "react-dom", currentDispatcherRef: K, reconcilerVersion: "19.3.0-canary-cbb046ab-20260731" }), eP = dn;
    } catch (e10) {
    }
  }
  t.createRoot = function(e10, n10) {
    if (!c(e10)) throw Error(s(299));
    var t10 = false, r10 = "", l10 = oI, a10 = oA, o10 = oR;
    return null != n10 && (true === n10.unstable_strictMode && (t10 = true), void 0 !== n10.identifierPrefix && (r10 = n10.identifierPrefix), void 0 !== n10.onUncaughtError && (l10 = n10.onUncaughtError), void 0 !== n10.onCaughtError && (a10 = n10.onCaughtError), void 0 !== n10.onRecoverableError && (o10 = n10.onRecoverableError)), n10 = fz(e10, 1, false, null, null, t10, r10, null, l10, a10, o10, f5), e10[eG] = n10.current, s8(e10), new f9(n10);
  }, t.hydrateRoot = function(e10, n10, t10) {
    if (!c(e10)) throw Error(s(299));
    var r10, l10 = false, a10 = "", o10 = oI, i10 = oA, u10 = oR, f10 = null;
    return null != t10 && (true === t10.unstable_strictMode && (l10 = true), void 0 !== t10.identifierPrefix && (a10 = t10.identifierPrefix), void 0 !== t10.onUncaughtError && (o10 = t10.onUncaughtError), void 0 !== t10.onCaughtError && (i10 = t10.onCaughtError), void 0 !== t10.onRecoverableError && (u10 = t10.onRecoverableError), void 0 !== t10.formState && (f10 = t10.formState)), (n10 = fz(e10, 1, true, n10, null != t10 ? t10 : null, l10, a10, f10, o10, i10, u10, f5)).context = (r10 = null, rw), t10 = n10.current, (a10 = lK(l10 = ej(l10 = se()))).callback = null, lY(t10, a10, l10), t10 = l10, n10.current.lanes = t10, eU(n10, t10), sj(n10), e10[eG] = n10.current, s8(e10), new f7(n10);
  }, t.version = "19.3.0-canary-cbb046ab-20260731";
}, 423860, (e, n, t) => {
  "use strict";
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  !(function e2() {
    if ("u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e2);
    } catch (e3) {
      console.error(e3);
    }
  })(), n.exports = e.r(778579);
}, 512188, (e, n, t) => {
  "use strict";
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function l(e2, n2) {
    var t2 = e2.length;
    for (e2.push(n2); 0 < t2; ) {
      var r2 = t2 - 1 >>> 1, l2 = e2[r2];
      if (0 < i(l2, n2)) e2[r2] = n2, e2[t2] = l2, t2 = r2;
      else break;
    }
  }
  function a(e2) {
    return 0 === e2.length ? null : e2[0];
  }
  function o(e2) {
    if (0 === e2.length) return null;
    var n2 = e2[0], t2 = e2.pop();
    if (t2 !== n2) {
      e2[0] = t2;
      for (var r2 = 0, l2 = e2.length, a2 = l2 >>> 1; r2 < a2; ) {
        var o2 = 2 * (r2 + 1) - 1, u2 = e2[o2], s2 = o2 + 1, c2 = e2[s2];
        if (0 > i(u2, t2)) s2 < l2 && 0 > i(c2, u2) ? (e2[r2] = c2, e2[s2] = t2, r2 = s2) : (e2[r2] = u2, e2[o2] = t2, r2 = o2);
        else if (s2 < l2 && 0 > i(c2, t2)) e2[r2] = c2, e2[s2] = t2, r2 = s2;
        else break;
      }
    }
    return n2;
  }
  function i(e2, n2) {
    var t2 = e2.sortIndex - n2.sortIndex;
    return 0 !== t2 ? t2 : e2.id - n2.id;
  }
  if (t.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
    var u, s = performance;
    t.unstable_now = function() {
      return s.now();
    };
  } else {
    var c = Date, f = c.now();
    t.unstable_now = function() {
      return c.now() - f;
    };
  }
  var d = [], p = [], m = 1, h = null, g = 3, v = false, y = false, b = false, w = false, k = "function" == typeof setTimeout ? setTimeout : null, S = "function" == typeof clearTimeout ? clearTimeout : null, E = "u" > typeof setImmediate ? setImmediate : null;
  function x(e2) {
    for (var n2 = a(p); null !== n2; ) {
      if (null === n2.callback) o(p);
      else if (n2.startTime <= e2) o(p), n2.sortIndex = n2.expirationTime, l(d, n2);
      else break;
      n2 = a(p);
    }
  }
  function N(e2) {
    if (b = false, x(e2), !y) if (null !== a(d)) y = true, C || (C = true, u());
    else {
      var n2 = a(p);
      null !== n2 && F(N, n2.startTime - e2);
    }
  }
  var C = false, P = -1, _ = 5, z = -1;
  function T() {
    return !!w || !(t.unstable_now() - z < _);
  }
  function O() {
    if (w = false, C) {
      var e2 = t.unstable_now();
      z = e2;
      var n2 = true;
      try {
        e: {
          y = false, b && (b = false, S(P), P = -1), v = true;
          var r2 = g;
          try {
            n: {
              for (x(e2), h = a(d); null !== h && !(h.expirationTime > e2 && T()); ) {
                var l2 = h.callback;
                if ("function" == typeof l2) {
                  h.callback = null, g = h.priorityLevel;
                  var i2 = l2(h.expirationTime <= e2);
                  if (e2 = t.unstable_now(), "function" == typeof i2) {
                    h.callback = i2, x(e2), n2 = true;
                    break n;
                  }
                  h === a(d) && o(d), x(e2);
                } else o(d);
                h = a(d);
              }
              if (null !== h) n2 = true;
              else {
                var s2 = a(p);
                null !== s2 && F(N, s2.startTime - e2), n2 = false;
              }
            }
            break e;
          } finally {
            h = null, g = r2, v = false;
          }
        }
      } finally {
        n2 ? u() : C = false;
      }
    }
  }
  if ("function" == typeof E) u = function() {
    E(O);
  };
  else if ("u" > typeof MessageChannel) {
    var L = new MessageChannel(), M = L.port2;
    L.port1.onmessage = O, u = function() {
      M.postMessage(null);
    };
  } else u = function() {
    k(O, 0);
  };
  function F(e2, n2) {
    P = k(function() {
      e2(t.unstable_now());
    }, n2);
  }
  t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e2) {
    e2.callback = null;
  }, t.unstable_forceFrameRate = function(e2) {
    0 > e2 || 125 < e2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < e2 ? Math.floor(1e3 / e2) : 5;
  }, t.unstable_getCurrentPriorityLevel = function() {
    return g;
  }, t.unstable_next = function(e2) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var n2 = 3;
        break;
      default:
        n2 = g;
    }
    var t2 = g;
    g = n2;
    try {
      return e2();
    } finally {
      g = t2;
    }
  }, t.unstable_requestPaint = function() {
    w = true;
  }, t.unstable_runWithPriority = function(e2, n2) {
    switch (e2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e2 = 3;
    }
    var t2 = g;
    g = e2;
    try {
      return n2();
    } finally {
      g = t2;
    }
  }, t.unstable_scheduleCallback = function(e2, n2, r2) {
    var o2 = t.unstable_now();
    switch (r2 = "object" == typeof r2 && null !== r2 && "number" == typeof (r2 = r2.delay) && 0 < r2 ? o2 + r2 : o2, e2) {
      case 1:
        var i2 = -1;
        break;
      case 2:
        i2 = 250;
        break;
      case 5:
        i2 = 1073741823;
        break;
      case 4:
        i2 = 1e4;
        break;
      default:
        i2 = 5e3;
    }
    return i2 = r2 + i2, e2 = { id: m++, callback: n2, priorityLevel: e2, startTime: r2, expirationTime: i2, sortIndex: -1 }, r2 > o2 ? (e2.sortIndex = r2, l(p, e2), null === a(d) && e2 === a(p) && (b ? (S(P), P = -1) : b = true, F(N, r2 - o2))) : (e2.sortIndex = i2, l(d, e2), y || v || (y = true, C || (C = true, u()))), e2;
  }, t.unstable_shouldYield = T, t.unstable_wrapCallback = function(e2) {
    var n2 = g;
    return function() {
      var t2 = g;
      g = n2;
      try {
        return e2.apply(this, arguments);
      } finally {
        g = t2;
      }
    };
  };
}, 345923, (e, n, t) => {
  "use strict";
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  n.exports = e.r(512188);
}]);
