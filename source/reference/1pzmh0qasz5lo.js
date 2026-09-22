;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "efa35dfe-8be7-7fbe-a3e3-4a5a3a4534db");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 73772, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = {}, o = 0, i = function(e2) {
    return e2 && (e2.host || i(e2.parentNode));
  }, c = function(e2, t2, c2, u) {
    var s = (Array.isArray(e2) ? e2 : [e2]).map(function(e3) {
      if (t2.contains(e3)) return e3;
      var r2 = i(e3);
      return r2 && t2.contains(r2) ? r2 : (console.error("aria-hidden", e3, "in not contained inside", t2, ". Doing nothing"), null);
    }).filter(function(e3) {
      return !!e3;
    });
    a[c2] || (a[c2] = /* @__PURE__ */ new WeakMap());
    var l = a[c2], d = [], y = /* @__PURE__ */ new Set(), f = new Set(s), p = function(e3) {
      !e3 || y.has(e3) || (y.add(e3), p(e3.parentNode));
    };
    s.forEach(p);
    var w = function(e3) {
      !e3 || f.has(e3) || Array.prototype.forEach.call(e3.children, function(e4) {
        if (y.has(e4)) w(e4);
        else try {
          var t3 = e4.getAttribute(u), a2 = null !== t3 && "false" !== t3, o2 = (r.get(e4) || 0) + 1, i2 = (l.get(e4) || 0) + 1;
          r.set(e4, o2), l.set(e4, i2), d.push(e4), 1 === o2 && a2 && n.set(e4, true), 1 === i2 && e4.setAttribute(c2, "true"), a2 || e4.setAttribute(u, "true");
        } catch (t4) {
          console.error("aria-hidden: cannot operate on ", e4, t4);
        }
      });
    };
    return w(t2), y.clear(), o++, function() {
      d.forEach(function(e3) {
        var t3 = r.get(e3) - 1, a2 = l.get(e3) - 1;
        r.set(e3, t3), l.set(e3, a2), t3 || (n.has(e3) || e3.removeAttribute(u), n.delete(e3)), a2 || e3.removeAttribute(c2);
      }), --o || (r = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = {});
    };
  };
  e.s(["hideOthers", 0, function(e2, t2, r2) {
    void 0 === r2 && (r2 = "data-aria-hidden");
    var n2 = Array.from(Array.isArray(e2) ? e2 : [e2]), a2 = t2 || ("u" < typeof document ? null : (Array.isArray(e2) ? e2[0] : e2).ownerDocument.body);
    return a2 ? (n2.push.apply(n2, Array.from(a2.querySelectorAll("[aria-live], script"))), c(n2, a2, r2, "aria-hidden")) : function() {
      return null;
    };
  }]);
}, 813044, (e) => {
  "use strict";
  var t, r, n, a, o, i, c, u = e.i(824627), s = e.i(856757);
  try {
    var l = "u" > typeof window ? window : e.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var d = "right-scroll-bar-position", y = "width-before-scroll-bar";
  try {
    var f = "u" > typeof window ? window : e.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function p(e2, t2) {
    return "function" == typeof e2 ? e2(t2) : e2 && (e2.current = t2), e2;
  }
  try {
    var w = "u" > typeof window ? window : e.g;
    w._sentryModuleMetadata = w._sentryModuleMetadata || {}, w._sentryModuleMetadata[new w.Error().stack] = Object.assign({}, w._sentryModuleMetadata[new w.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var M = "u" > typeof window ? window : e.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var h = "u" > typeof window ? s.useLayoutEffect : s.useEffect, v = /* @__PURE__ */ new WeakMap();
  try {
    var g = "u" > typeof window ? window : e.g;
    g._sentryModuleMetadata = g._sentryModuleMetadata || {}, g._sentryModuleMetadata[new g.Error().stack] = Object.assign({}, g._sentryModuleMetadata[new g.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var _ = "u" > typeof window ? window : e.g;
    _._sentryModuleMetadata = _._sentryModuleMetadata || {}, _._sentryModuleMetadata[new _.Error().stack] = Object.assign({}, _._sentryModuleMetadata[new _.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var m = (void 0 === t && (t = {}), (void 0 === r && (r = function(e2) {
    return e2;
  }), n = [], a = false, o = { read: function() {
    if (a) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return n.length ? n[n.length - 1] : null;
  }, useMedium: function(e2) {
    var t2 = r(e2, a);
    return n.push(t2), function() {
      n = n.filter(function(e3) {
        return e3 !== t2;
      });
    };
  }, assignSyncMedium: function(e2) {
    for (a = true; n.length; ) {
      var t2 = n;
      n = [], t2.forEach(e2);
    }
    n = { push: function(t3) {
      return e2(t3);
    }, filter: function() {
      return n;
    } };
  }, assignMedium: function(e2) {
    a = true;
    var t2 = [];
    if (n.length) {
      var r2 = n;
      n = [], r2.forEach(e2), t2 = n;
    }
    var o2 = function() {
      var r3 = t2;
      t2 = [], r3.forEach(e2);
    }, i2 = function() {
      return Promise.resolve().then(o2);
    };
    i2(), n = { push: function(e3) {
      t2.push(e3), i2();
    }, filter: function(e3) {
      return t2 = t2.filter(e3), n;
    } };
  } }).options = (0, u.__assign)({ async: true, ssr: false }, t), o);
  try {
    var b = "u" > typeof window ? window : e.g;
    b._sentryModuleMetadata = b._sentryModuleMetadata || {}, b._sentryModuleMetadata[new b.Error().stack] = Object.assign({}, b._sentryModuleMetadata[new b.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var E = function() {
  }, k = s.forwardRef(function(e2, t2) {
    var r2, n2, a2, o2, i2 = s.useRef(null), c2 = s.useState({ onScrollCapture: E, onWheelCapture: E, onTouchMoveCapture: E }), l2 = c2[0], d2 = c2[1], y2 = e2.forwardProps, f2 = e2.children, w2 = e2.className, M2 = e2.removeScrollBar, g2 = e2.enabled, _2 = e2.shards, b2 = e2.sideCar, k2 = e2.noRelative, A2 = e2.noIsolation, O2 = e2.inert, S2 = e2.allowPinchZoom, P2 = e2.as, j2 = e2.gapMode, B2 = (0, u.__rest)(e2, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C2 = (r2 = [i2, t2], n2 = function(e3) {
      return r2.forEach(function(t3) {
        return p(t3, e3);
      });
    }, (a2 = (0, s.useState)(function() {
      return { value: null, callback: n2, facade: { get current() {
        return a2.value;
      }, set current(value) {
        var e3 = a2.value;
        e3 !== value && (a2.value = value, a2.callback(value, e3));
      } } };
    })[0]).callback = n2, o2 = a2.facade, h(function() {
      var e3 = v.get(o2);
      if (e3) {
        var t3 = new Set(e3), n3 = new Set(r2), a3 = o2.current;
        t3.forEach(function(e4) {
          n3.has(e4) || p(e4, null);
        }), n3.forEach(function(e4) {
          t3.has(e4) || p(e4, a3);
        });
      }
      v.set(o2, r2);
    }, [r2]), o2), R2 = (0, u.__assign)((0, u.__assign)({}, B2), l2);
    return s.createElement(s.Fragment, null, g2 && s.createElement(b2, { sideCar: m, removeScrollBar: M2, shards: _2, noRelative: k2, noIsolation: A2, inert: O2, setCallbacks: d2, allowPinchZoom: !!S2, lockRef: i2, gapMode: j2 }), y2 ? s.cloneElement(s.Children.only(f2), (0, u.__assign)((0, u.__assign)({}, R2), { ref: C2 })) : s.createElement(void 0 === P2 ? "div" : P2, (0, u.__assign)({}, R2, { className: w2, ref: C2 }), f2));
  });
  k.defaultProps = { enabled: true, removeScrollBar: true, inert: false }, k.classNames = { fullWidth: y, zeroRight: d };
  try {
    var A = "u" > typeof window ? window : e.g;
    A._sentryModuleMetadata = A._sentryModuleMetadata || {}, A._sentryModuleMetadata[new A.Error().stack] = Object.assign({}, A._sentryModuleMetadata[new A.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var O = function(e2) {
    var t2 = e2.sideCar, r2 = (0, u.__rest)(e2, ["sideCar"]);
    if (!t2) throw Error("Sidecar: please provide `sideCar` property to import the right car");
    var n2 = t2.read();
    if (!n2) throw Error("Sidecar medium not found");
    return s.createElement(n2, (0, u.__assign)({}, r2));
  };
  O.isSideCarExport = true;
  try {
    var S = "u" > typeof window ? window : e.g;
    S._sentryModuleMetadata = S._sentryModuleMetadata || {}, S._sentryModuleMetadata[new S.Error().stack] = Object.assign({}, S._sentryModuleMetadata[new S.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var P = "u" > typeof window ? window : e.g;
    P._sentryModuleMetadata = P._sentryModuleMetadata || {}, P._sentryModuleMetadata[new P.Error().stack] = Object.assign({}, P._sentryModuleMetadata[new P.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var j = function() {
    var e2 = 0, t2 = null;
    return { add: function(r2) {
      if (0 == e2 && (t2 = (function() {
        if (!document) return null;
        var e3 = document.createElement("style");
        e3.type = "text/css";
        var t3 = c || ("u" > typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
        return t3 && e3.setAttribute("nonce", t3), e3;
      })())) {
        var n2, a2;
        (n2 = t2).styleSheet ? n2.styleSheet.cssText = r2 : n2.appendChild(document.createTextNode(r2)), a2 = t2, (document.head || document.getElementsByTagName("head")[0]).appendChild(a2);
      }
      e2++;
    }, remove: function() {
      --e2 || !t2 || (t2.parentNode && t2.parentNode.removeChild(t2), t2 = null);
    } };
  };
  try {
    var B = "u" > typeof window ? window : e.g;
    B._sentryModuleMetadata = B._sentryModuleMetadata || {}, B._sentryModuleMetadata[new B.Error().stack] = Object.assign({}, B._sentryModuleMetadata[new B.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var C = function() {
    var e2 = j();
    return function(t2, r2) {
      s.useEffect(function() {
        return e2.add(t2), function() {
          e2.remove();
        };
      }, [t2 && r2]);
    };
  };
  try {
    var R = "u" > typeof window ? window : e.g;
    R._sentryModuleMetadata = R._sentryModuleMetadata || {}, R._sentryModuleMetadata[new R.Error().stack] = Object.assign({}, R._sentryModuleMetadata[new R.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var K = function() {
    var e2 = C();
    return function(t2) {
      return e2(t2.styles, t2.dynamic), null;
    };
  };
  try {
    var T = "u" > typeof window ? window : e.g;
    T._sentryModuleMetadata = T._sentryModuleMetadata || {}, T._sentryModuleMetadata[new T.Error().stack] = Object.assign({}, T._sentryModuleMetadata[new T.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var x = "u" > typeof window ? window : e.g;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var N = { left: 0, top: 0, right: 0, gap: 0 }, L = function(e2) {
    return parseInt(e2 || "", 10) || 0;
  }, W = function(e2) {
    var t2 = window.getComputedStyle(document.body), r2 = t2["padding" === e2 ? "paddingLeft" : "marginLeft"], n2 = t2["padding" === e2 ? "paddingTop" : "marginTop"], a2 = t2["padding" === e2 ? "paddingRight" : "marginRight"];
    return [L(r2), L(n2), L(a2)];
  }, I = function(e2) {
    if (void 0 === e2 && (e2 = "margin"), "u" < typeof window) return N;
    var t2 = W(e2), r2 = document.documentElement.clientWidth, n2 = window.innerWidth;
    return { left: t2[0], top: t2[1], right: t2[2], gap: Math.max(0, n2 - r2 + t2[2] - t2[0]) };
  };
  try {
    var D = "u" > typeof window ? window : e.g;
    D._sentryModuleMetadata = D._sentryModuleMetadata || {}, D._sentryModuleMetadata[new D.Error().stack] = Object.assign({}, D._sentryModuleMetadata[new D.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var X = K(), Y = "data-scroll-locked", F = function(e2, t2, r2, n2) {
    var a2 = e2.left, o2 = e2.top, i2 = e2.right, c2 = e2.gap;
    return void 0 === r2 && (r2 = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(n2, ";\n   padding-right: ").concat(c2, "px ").concat(n2, ";\n  }\n  body[").concat(Y, "] {\n    overflow: hidden ").concat(n2, ";\n    overscroll-behavior: contain;\n    ").concat([t2 && "position: relative ".concat(n2, ";"), "margin" === r2 && "\n    padding-left: ".concat(a2, "px;\n    padding-top: ").concat(o2, "px;\n    padding-right: ").concat(i2, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c2, "px ").concat(n2, ";\n    "), "padding" === r2 && "padding-right: ".concat(c2, "px ").concat(n2, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(d, " {\n    right: ").concat(c2, "px ").concat(n2, ";\n  }\n  \n  .").concat(y, " {\n    margin-right: ").concat(c2, "px ").concat(n2, ";\n  }\n  \n  .").concat(d, " .").concat(d, " {\n    right: 0 ").concat(n2, ";\n  }\n  \n  .").concat(y, " .").concat(y, " {\n    margin-right: 0 ").concat(n2, ";\n  }\n  \n  body[").concat(Y, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(c2, "px;\n  }\n");
  }, Z = function() {
    var e2 = parseInt(document.body.getAttribute(Y) || "0", 10);
    return isFinite(e2) ? e2 : 0;
  }, U = function() {
    s.useEffect(function() {
      return document.body.setAttribute(Y, (Z() + 1).toString()), function() {
        var e2 = Z() - 1;
        e2 <= 0 ? document.body.removeAttribute(Y) : document.body.setAttribute(Y, e2.toString());
      };
    }, []);
  }, z = function(e2) {
    var t2 = e2.noRelative, r2 = e2.noImportant, n2 = e2.gapMode, a2 = void 0 === n2 ? "margin" : n2;
    U();
    var o2 = s.useMemo(function() {
      return I(a2);
    }, [a2]);
    return s.createElement(X, { styles: F(o2, !t2, a2, r2 ? "" : "!important") });
  };
  try {
    var G = "u" > typeof window ? window : e.g;
    G._sentryModuleMetadata = G._sentryModuleMetadata || {}, G._sentryModuleMetadata[new G.Error().stack] = Object.assign({}, G._sentryModuleMetadata[new G.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var H = "u" > typeof window ? window : e.g;
    H._sentryModuleMetadata = H._sentryModuleMetadata || {}, H._sentryModuleMetadata[new H.Error().stack] = Object.assign({}, H._sentryModuleMetadata[new H.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var q = false;
  if ("u" > typeof window) try {
    var J = Object.defineProperty({}, "passive", { get: function() {
      return q = true, true;
    } });
    window.addEventListener("test", J, J), window.removeEventListener("test", J, J);
  } catch (e2) {
    q = false;
  }
  var Q = !!q && { passive: false };
  try {
    var V = "u" > typeof window ? window : e.g;
    V._sentryModuleMetadata = V._sentryModuleMetadata || {}, V._sentryModuleMetadata[new V.Error().stack] = Object.assign({}, V._sentryModuleMetadata[new V.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var $ = function(e2, t2) {
    if (!(e2 instanceof Element)) return false;
    var r2 = window.getComputedStyle(e2);
    return "hidden" !== r2[t2] && (r2.overflowY !== r2.overflowX || "TEXTAREA" === e2.tagName || "visible" !== r2[t2]);
  }, ee = function(e2, t2) {
    var r2 = t2.ownerDocument, n2 = t2;
    do {
      if ("u" > typeof ShadowRoot && n2 instanceof ShadowRoot && (n2 = n2.host), et(e2, n2)) {
        var a2 = er(e2, n2);
        if (a2[1] > a2[2]) return true;
      }
      n2 = n2.parentNode;
    } while (n2 && n2 !== r2.body);
    return false;
  }, et = function(e2, t2) {
    return "v" === e2 ? $(t2, "overflowY") : $(t2, "overflowX");
  }, er = function(e2, t2) {
    return "v" === e2 ? [t2.scrollTop, t2.scrollHeight, t2.clientHeight] : [t2.scrollLeft, t2.scrollWidth, t2.clientWidth];
  }, en = function(e2, t2, r2, n2, a2) {
    var o2, i2 = (o2 = window.getComputedStyle(t2).direction, "h" === e2 && "rtl" === o2 ? -1 : 1), c2 = i2 * n2, u2 = r2.target, s2 = t2.contains(u2), l2 = false, d2 = c2 > 0, y2 = 0, f2 = 0;
    do {
      if (!u2) break;
      var p2 = er(e2, u2), w2 = p2[0], M2 = p2[1] - p2[2] - i2 * w2;
      (w2 || M2) && et(e2, u2) && (y2 += M2, f2 += w2);
      var h2 = u2.parentNode;
      u2 = h2 && h2.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h2.host : h2;
    } while (!s2 && u2 !== document.body || s2 && (t2.contains(u2) || t2 === u2));
    return d2 && (a2 && 1 > Math.abs(y2) || !a2 && c2 > y2) ? l2 = true : !d2 && (a2 && 1 > Math.abs(f2) || !a2 && -c2 > f2) && (l2 = true), l2;
  };
  try {
    var ea = "u" > typeof window ? window : e.g;
    ea._sentryModuleMetadata = ea._sentryModuleMetadata || {}, ea._sentryModuleMetadata[new ea.Error().stack] = Object.assign({}, ea._sentryModuleMetadata[new ea.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var eo = function(e2) {
    return "changedTouches" in e2 ? [e2.changedTouches[0].clientX, e2.changedTouches[0].clientY] : [0, 0];
  }, ei = function(e2) {
    return [e2.deltaX, e2.deltaY];
  }, ec = function(e2) {
    return e2 && "current" in e2 ? e2.current : e2;
  }, eu = 0, es = [];
  try {
    var el = "u" > typeof window ? window : e.g;
    el._sentryModuleMetadata = el._sentryModuleMetadata || {}, el._sentryModuleMetadata[new el.Error().stack] = Object.assign({}, el._sentryModuleMetadata[new el.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let ed = (i = function(e2) {
    var t2 = s.useRef([]), r2 = s.useRef([0, 0]), n2 = s.useRef(), a2 = s.useState(eu++)[0], o2 = s.useState(K)[0], i2 = s.useRef(e2);
    s.useEffect(function() {
      i2.current = e2;
    }, [e2]), s.useEffect(function() {
      if (e2.inert) {
        document.body.classList.add("block-interactivity-".concat(a2));
        var t3 = (0, u.__spreadArray)([e2.lockRef.current], (e2.shards || []).map(ec), true).filter(Boolean);
        return t3.forEach(function(e3) {
          return e3.classList.add("allow-interactivity-".concat(a2));
        }), function() {
          document.body.classList.remove("block-interactivity-".concat(a2)), t3.forEach(function(e3) {
            return e3.classList.remove("allow-interactivity-".concat(a2));
          });
        };
      }
    }, [e2.inert, e2.lockRef.current, e2.shards]);
    var c2 = s.useCallback(function(e3, t3) {
      if ("touches" in e3 && 2 === e3.touches.length || "wheel" === e3.type && e3.ctrlKey) return !i2.current.allowPinchZoom;
      var a3, o3 = eo(e3), c3 = r2.current, u2 = "deltaX" in e3 ? e3.deltaX : c3[0] - o3[0], s2 = "deltaY" in e3 ? e3.deltaY : c3[1] - o3[1], l3 = e3.target, d3 = Math.abs(u2) > Math.abs(s2) ? "h" : "v";
      if ("touches" in e3 && "h" === d3 && "range" === l3.type) return false;
      var y3 = window.getSelection(), f3 = y3 && y3.anchorNode;
      if (f3 && (f3 === l3 || f3.contains(l3))) return false;
      var p3 = ee(d3, l3);
      if (!p3) return true;
      if (p3 ? a3 = d3 : (a3 = "v" === d3 ? "h" : "v", p3 = ee(d3, l3)), !p3) return false;
      if (!n2.current && "changedTouches" in e3 && (u2 || s2) && (n2.current = a3), !a3) return true;
      var w3 = n2.current || a3;
      return en(w3, t3, e3, "h" === w3 ? u2 : s2, true);
    }, []), l2 = s.useCallback(function(e3) {
      if (es.length && es[es.length - 1] === o2) {
        var r3 = "deltaY" in e3 ? ei(e3) : eo(e3), n3 = t2.current.filter(function(t3) {
          var n4;
          return t3.name === e3.type && (t3.target === e3.target || e3.target === t3.shadowParent) && (n4 = t3.delta, n4[0] === r3[0] && n4[1] === r3[1]);
        })[0];
        if (n3 && n3.should) {
          e3.cancelable && e3.preventDefault();
          return;
        }
        if (!n3) {
          var a3 = (i2.current.shards || []).map(ec).filter(Boolean).filter(function(t3) {
            return t3.contains(e3.target);
          });
          (a3.length > 0 ? c2(e3, a3[0]) : !i2.current.noIsolation) && e3.cancelable && e3.preventDefault();
        }
      }
    }, []), d2 = s.useCallback(function(e3, r3, n3, a3) {
      var o3 = { name: e3, delta: r3, target: n3, should: a3, shadowParent: (function(e4) {
        for (var t3 = null; null !== e4; ) e4 instanceof ShadowRoot && (t3 = e4.host, e4 = e4.host), e4 = e4.parentNode;
        return t3;
      })(n3) };
      t2.current.push(o3), setTimeout(function() {
        t2.current = t2.current.filter(function(e4) {
          return e4 !== o3;
        });
      }, 1);
    }, []), y2 = s.useCallback(function(e3) {
      r2.current = eo(e3), n2.current = void 0;
    }, []), f2 = s.useCallback(function(t3) {
      d2(t3.type, ei(t3), t3.target, c2(t3, e2.lockRef.current));
    }, []), p2 = s.useCallback(function(t3) {
      d2(t3.type, eo(t3), t3.target, c2(t3, e2.lockRef.current));
    }, []);
    s.useEffect(function() {
      return es.push(o2), e2.setCallbacks({ onScrollCapture: f2, onWheelCapture: f2, onTouchMoveCapture: p2 }), document.addEventListener("wheel", l2, Q), document.addEventListener("touchmove", l2, Q), document.addEventListener("touchstart", y2, Q), function() {
        es = es.filter(function(e3) {
          return e3 !== o2;
        }), document.removeEventListener("wheel", l2, Q), document.removeEventListener("touchmove", l2, Q), document.removeEventListener("touchstart", y2, Q);
      };
    }, []);
    var w2 = e2.removeScrollBar, M2 = e2.inert;
    return s.createElement(s.Fragment, null, M2 ? s.createElement(o2, { styles: "\n  .block-interactivity-".concat(a2, " {pointer-events: none;}\n  .allow-interactivity-").concat(a2, " {pointer-events: all;}\n") }) : null, w2 ? s.createElement(z, { noRelative: e2.noRelative, gapMode: e2.gapMode }) : null);
  }, m.useMedium(i), O);
  try {
    var ey = "u" > typeof window ? window : e.g;
    ey._sentryModuleMetadata = ey._sentryModuleMetadata || {}, ey._sentryModuleMetadata[new ey.Error().stack] = Object.assign({}, ey._sentryModuleMetadata[new ey.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var ef = s.forwardRef(function(e2, t2) {
    return s.createElement(k, (0, u.__assign)({}, e2, { ref: t2, sideCar: ed }));
  });
  ef.classNames = k.classNames, e.s(["RemoveScroll", 0, ef], 813044);
}, 824627, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var r = function() {
    return (r = Object.assign || function(e2) {
      for (var t2, r2 = 1, n = arguments.length; r2 < n; r2++) for (var a in t2 = arguments[r2]) Object.prototype.hasOwnProperty.call(t2, a) && (e2[a] = t2[a]);
      return e2;
    }).apply(this, arguments);
  };
  "function" == typeof SuppressedError && SuppressedError, e.s(["__assign", () => r, "__awaiter", 0, function(e2, t2, r2, n) {
    return new (r2 || (r2 = Promise))(function(a, o) {
      function i(e3) {
        try {
          u(n.next(e3));
        } catch (e4) {
          o(e4);
        }
      }
      function c(e3) {
        try {
          u(n.throw(e3));
        } catch (e4) {
          o(e4);
        }
      }
      function u(e3) {
        var t3;
        e3.done ? a(e3.value) : ((t3 = e3.value) instanceof r2 ? t3 : new r2(function(e4) {
          e4(t3);
        })).then(i, c);
      }
      u((n = n.apply(e2, t2 || [])).next());
    });
  }, "__generator", 0, function(e2, t2) {
    var r2, n, a, o = { label: 0, sent: function() {
      if (1 & a[0]) throw a[1];
      return a[1];
    }, trys: [], ops: [] }, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return i.next = c(0), i.throw = c(1), i.return = c(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
      return this;
    }), i;
    function c(c2) {
      return function(u) {
        var s = [c2, u];
        if (r2) throw TypeError("Generator is already executing.");
        for (; i && (i = 0, s[0] && (o = 0)), o; ) try {
          if (r2 = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
          switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
            case 0:
            case 1:
              a = s;
              break;
            case 4:
              return o.label++, { value: s[1], done: false };
            case 5:
              o.label++, n = s[1], s = [0];
              continue;
            case 7:
              s = o.ops.pop(), o.trys.pop();
              continue;
            default:
              if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                o = 0;
                continue;
              }
              if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                o.label = s[1];
                break;
              }
              if (6 === s[0] && o.label < a[1]) {
                o.label = a[1], a = s;
                break;
              }
              if (a && o.label < a[2]) {
                o.label = a[2], o.ops.push(s);
                break;
              }
              a[2] && o.ops.pop(), o.trys.pop();
              continue;
          }
          s = t2.call(e2, o);
        } catch (e3) {
          s = [6, e3], n = 0;
        } finally {
          r2 = a = 0;
        }
        if (5 & s[0]) throw s[1];
        return { value: s[0] ? s[1] : void 0, done: true };
      };
    }
  }, "__rest", 0, function(e2, t2) {
    var r2 = {};
    for (var n in e2) Object.prototype.hasOwnProperty.call(e2, n) && 0 > t2.indexOf(n) && (r2[n] = e2[n]);
    if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) for (var a = 0, n = Object.getOwnPropertySymbols(e2); a < n.length; a++) 0 > t2.indexOf(n[a]) && Object.prototype.propertyIsEnumerable.call(e2, n[a]) && (r2[n[a]] = e2[n[a]]);
    return r2;
  }, "__spread", 0, function() {
    for (var e2 = [], t2 = 0; t2 < arguments.length; t2++) e2 = e2.concat((function(e3, t3) {
      var r2 = "function" == typeof Symbol && e3[Symbol.iterator];
      if (!r2) return e3;
      var n, a, o = r2.call(e3), i = [];
      try {
        for (; (void 0 === t3 || t3-- > 0) && !(n = o.next()).done; ) i.push(n.value);
      } catch (e4) {
        a = { error: e4 };
      } finally {
        try {
          n && !n.done && (r2 = o.return) && r2.call(o);
        } finally {
          if (a) throw a.error;
        }
      }
      return i;
    })(arguments[t2]));
    return e2;
  }, "__spreadArray", 0, function(e2, t2, r2) {
    if (r2 || 2 == arguments.length) for (var n, a = 0, o = t2.length; a < o; a++) !n && a in t2 || (n || (n = Array.prototype.slice.call(t2, 0, a)), n[a] = t2[a]);
    return e2.concat(n || Array.prototype.slice.call(t2));
  }]);
}]);
