;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "ec443cc0-c886-a8f4-4851-fe18c104e3ea");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 543836, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var r = Object.defineProperty, n = (e2, t2) => r(e2, "name", { value: t2, configurable: true }), a = !!("u" > typeof window && window.document && window.document.createElement);
  function o(e2, t2, { checkForDefaultPrevented: r2 = true } = {}) {
    return n(function(n2) {
      if (e2?.(n2), false === r2 || !n2 || !n2.defaultPrevented) return t2?.(n2);
    }, "handleEvent");
  }
  function i(e2) {
    if (!a) throw Error("Cannot access document outside of the DOM");
    return e2?.ownerDocument ?? document;
  }
  function s(e2) {
    return "IFRAME" === e2.tagName;
  }
  n(o, "composeEventHandlers"), n(function(e2) {
    if (!a) throw Error("Cannot access window outside of the DOM");
    return e2?.ownerDocument?.defaultView ?? window;
  }, "getOwnerWindow"), n(i, "getOwnerDocument"), n(function e2(t2, r2 = false) {
    let { activeElement: n2 } = i(t2);
    if (!n2?.nodeName) return null;
    if (s(n2) && n2.contentDocument) return e2(n2.contentDocument.body, r2);
    if (r2) {
      let e3 = n2.getAttribute("aria-activedescendant");
      if (e3) {
        let t3 = i(n2).getElementById(e3);
        if (t3) return t3;
      }
    }
    return n2;
  }, "getActiveElement"), n(s, "isFrame"), e.s(["composeEventHandlers", 0, o]);
}, 652531, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(68982);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var a = Object.defineProperty, o = (e2, t2) => a(e2, "name", { value: t2, configurable: true });
  function i(e2, n2 = []) {
    let a2 = [];
    function u(n3, i2) {
      let s2 = t.createContext(i2);
      s2.displayName = n3 + "Context";
      let u2 = a2.length;
      a2 = [...a2, i2];
      let l2 = o((n4) => {
        let { scope: a3, children: o2, ...i3 } = n4, l3 = a3?.[e2]?.[u2] || s2, d2 = t.useMemo(() => i3, Object.values(i3));
        return (0, r.jsx)(l3.Provider, { value: d2, children: o2 });
      }, "Provider");
      function d(r2, a3, o2 = {}) {
        let { optional: l3 = false } = o2, c = a3?.[e2]?.[u2] || s2, f = t.useContext(c);
        if (f) return f;
        if (void 0 !== i2) return i2;
        if (!l3) throw Error(`\`${r2}\` must be used within \`${n3}\``);
      }
      return l2.displayName = n3 + "Provider", o(d, "useContext"), [l2, d];
    }
    o(u, "createContext");
    let l = o(() => {
      let r2 = a2.map((e3) => t.createContext(e3));
      return o(function(n3) {
        let a3 = n3?.[e2] || r2;
        return t.useMemo(() => ({ [`__scope${e2}`]: { ...n3, [e2]: a3 } }), [n3, a3]);
      }, "useScope");
    }, "createScope");
    return l.scopeName = e2, [u, s(l, ...n2)];
  }
  function s(...e2) {
    let r2 = e2[0];
    if (1 === e2.length) return r2;
    let n2 = o(() => {
      let n3 = e2.map((e3) => ({ useScope: e3(), scopeName: e3.scopeName }));
      return o(function(e3) {
        let a2 = n3.reduce((t2, { useScope: r3, scopeName: n4 }) => {
          let a3 = r3(e3)[`__scope${n4}`];
          return { ...t2, ...a3 };
        }, {});
        return t.useMemo(() => ({ [`__scope${r2.scopeName}`]: a2 }), [a2]);
      }, "useComposedScopes");
    }, "createScope");
    return n2.scopeName = r2.scopeName, n2;
  }
  o(function(e2, n2) {
    let a2 = t.createContext(n2);
    a2.displayName = e2 + "Context";
    let i2 = o((e3) => {
      let { children: n3, ...o2 } = e3, i3 = t.useMemo(() => o2, Object.values(o2));
      return (0, r.jsx)(a2.Provider, { value: i3, children: n3 });
    }, "Provider");
    function s2(r2, o2 = {}) {
      let { optional: i3 = false } = o2, u = t.useContext(a2);
      if (u) return u;
      if (void 0 !== n2) return n2;
      if (!i3) throw Error(`\`${r2}\` must be used within \`${e2}\``);
    }
    return i2.displayName = e2 + "Provider", o(s2, "useContext"), [i2, s2];
  }, "createContext"), o(i, "createContextScope"), o(s, "composeContextScopes"), e.s(["createContextScope", 0, i]);
}, 999819, 717979, (e) => {
  "use strict";
  var t, r = e.i(856757), n = e.i(543836), a = e.i(45240), o = e.i(728654);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function s(e2) {
    let t2 = r.useRef(e2);
    return r.useEffect(() => {
      t2.current = e2;
    }), r.useMemo(() => (...e3) => t2.current?.(...e3), []);
  }
  (0, Object.defineProperty)(s, "name", { value: "useCallbackRef", configurable: true }), e.s(["useCallbackRef", 0, s], 717979);
  var u = e.i(68982);
  try {
    var l = "u" > typeof window ? window : e.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var d = Object.defineProperty, c = (e2, t2) => d(e2, "name", { value: t2, configurable: true }), f = "dismissableLayer.update", p = r.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set(), dismissableSurfaces: /* @__PURE__ */ new Set() }), y = r.forwardRef(c(function(e2, i2) {
    let { disableOutsidePointerEvents: l2 = false, deferPointerDownOutside: d2 = false, onEscapeKeyDown: y2, onPointerDownOutside: m2, onFocusOutside: g2, onInteractOutside: b2, onDismiss: h, ...E } = e2, _ = r.useContext(p), [P, O] = r.useState(null), S = P?.ownerDocument ?? globalThis?.document, [, C] = r.useState({}), j = (0, o.useComposedRefs)(i2, O), k = Array.from(_.layers), [R] = [..._.layersWithOutsidePointerEventsDisabled].slice(-1), x = R ? k.indexOf(R) : -1, A = P ? k.indexOf(P) : -1, D = _.layersWithOutsidePointerEventsDisabled.size > 0, L = A >= x, N = r.useRef(false), I = w((e3) => {
      m2?.(e3), b2?.(e3), e3.defaultPrevented || h?.();
    }, { ownerDocument: S, deferPointerDownOutside: d2, isDeferredPointerDownOutsideRef: N, dismissableSurfaces: _.dismissableSurfaces, shouldHandlePointerDownOutside: r.useCallback((e3) => {
      if (!(e3 instanceof Node)) return false;
      let t2 = [..._.branches].some((t3) => t3.contains(e3));
      return L && !t2;
    }, [_.branches, L]) }), T = v((e3) => {
      if (d2 && N.current) return;
      let t2 = e3.target;
      ![..._.branches].some((e4) => e4.contains(t2)) && (g2?.(e3), b2?.(e3), e3.defaultPrevented || h?.());
    }, S), F = !!P && A === k.length - 1, B = s((e3) => {
      "Escape" === e3.key && (y2?.(e3), !e3.defaultPrevented && h && (e3.preventDefault(), h()));
    });
    return r.useEffect(() => {
      if (F) return S.addEventListener("keydown", B, { capture: true }), () => S.removeEventListener("keydown", B, { capture: true });
    }, [S, F, B]), r.useEffect(() => {
      if (P) return l2 && (0 === _.layersWithOutsidePointerEventsDisabled.size && (t = S.body.style.pointerEvents, S.body.style.pointerEvents = "none"), _.layersWithOutsidePointerEventsDisabled.add(P)), _.layers.add(P), M(), () => {
        l2 && (_.layersWithOutsidePointerEventsDisabled.delete(P), 0 === _.layersWithOutsidePointerEventsDisabled.size && (S.body.style.pointerEvents = t));
      };
    }, [P, S, l2, _]), r.useEffect(() => () => {
      P && (_.layers.delete(P), _.layersWithOutsidePointerEventsDisabled.delete(P), M());
    }, [P, _]), r.useEffect(() => {
      let e3 = c(() => C({}), "handleUpdate");
      return document.addEventListener(f, e3), () => document.removeEventListener(f, e3);
    }, []), (0, u.jsx)(a.Primitive.div, { ...E, ref: j, style: { pointerEvents: D ? L ? "auto" : "none" : void 0, ...e2.style }, onFocusCapture: (0, n.composeEventHandlers)(e2.onFocusCapture, T.onFocusCapture), onBlurCapture: (0, n.composeEventHandlers)(e2.onBlurCapture, T.onBlurCapture), onPointerDownCapture: (0, n.composeEventHandlers)(e2.onPointerDownCapture, I.onPointerDownCapture) });
  }, "DismissableLayer"));
  function m() {
    let e2 = r.useContext(p), [t2, n2] = r.useState(null);
    return r.useEffect(() => {
      if (t2) return e2.dismissableSurfaces.add(t2), () => {
        e2.dismissableSurfaces.delete(t2);
      };
    }, [t2, e2.dismissableSurfaces]), n2;
  }
  c(m, "useDismissableLayerSurface");
  var g = c(() => true, "IS_TRUE");
  function w(e2, t2) {
    let { ownerDocument: n2 = globalThis?.document, deferPointerDownOutside: a2 = false, isDeferredPointerDownOutsideRef: o2, dismissableSurfaces: i2, shouldHandlePointerDownOutside: u2 = g } = t2, l2 = s(e2), d2 = r.useRef(false), f2 = r.useRef(false), p2 = r.useRef(/* @__PURE__ */ new Map()), y2 = r.useRef(() => {
    });
    return r.useEffect(() => {
      function e3() {
        f2.current = false, o2.current = false, p2.current.clear();
      }
      function t3() {
        return Array.from(p2.current.values()).some(Boolean);
      }
      function r2(e4) {
        if (!f2.current) return;
        let t4 = e4.target;
        t4 instanceof Node && [...i2].some((e5) => e5.contains(t4)) || p2.current.set(e4.type, true), "click" === e4.type && window.setTimeout(() => {
          f2.current && y2.current();
        }, 0);
      }
      function s2(e4) {
        f2.current && p2.current.set(e4.type, false);
      }
      c(e3, "resetOutsideInteraction"), c(t3, "isOutsideInteractionIntercepted"), c(r2, "handleInteractionCapture"), c(s2, "handleInteractionBubble");
      let m2 = c((r3) => {
        if (r3.target && !d2.current) {
          let i3 = function() {
            n2.removeEventListener("click", y2.current);
            let r4 = t3();
            e3(), r4 || b("dismissableLayer.pointerDownOutside", l2, s3, { discrete: true });
          };
          if (c(i3, "handleAndDispatchPointerDownOutsideEvent"), !u2(r3.target)) {
            n2.removeEventListener("click", y2.current), e3(), d2.current = false;
            return;
          }
          let s3 = { originalEvent: r3 };
          f2.current = true, o2.current = a2 && 0 === r3.button, p2.current.clear(), a2 && 0 === r3.button ? (n2.removeEventListener("click", y2.current), y2.current = i3, n2.addEventListener("click", y2.current, { once: true })) : i3();
        } else n2.removeEventListener("click", y2.current), e3();
        d2.current = false;
      }, "handlePointerDown"), g2 = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
      for (let e4 of g2) n2.addEventListener(e4, r2, true), n2.addEventListener(e4, s2);
      let w2 = window.setTimeout(() => {
        n2.addEventListener("pointerdown", m2);
      }, 0);
      return () => {
        for (let e4 of (window.clearTimeout(w2), n2.removeEventListener("pointerdown", m2), n2.removeEventListener("click", y2.current), g2)) n2.removeEventListener(e4, r2, true), n2.removeEventListener(e4, s2);
      };
    }, [n2, l2, a2, o2, i2, u2]), { onPointerDownCapture: c(() => d2.current = true, "onPointerDownCapture") };
  }
  function v(e2, t2 = globalThis?.document) {
    let n2 = s(e2), a2 = r.useRef(false);
    return r.useEffect(() => {
      let e3 = c((e4) => {
        e4.target && !a2.current && b("dismissableLayer.focusOutside", n2, { originalEvent: e4 }, { discrete: false });
      }, "handleFocus");
      return t2.addEventListener("focusin", e3), () => t2.removeEventListener("focusin", e3);
    }, [t2, n2]), { onFocusCapture: c(() => a2.current = true, "onFocusCapture"), onBlurCapture: c(() => a2.current = false, "onBlurCapture") };
  }
  function M() {
    let e2 = new CustomEvent(f);
    document.dispatchEvent(e2);
  }
  function b(e2, t2, r2, { discrete: n2 }) {
    let o2 = r2.originalEvent.target, i2 = new CustomEvent(e2, { bubbles: false, cancelable: true, detail: r2 });
    t2 && o2.addEventListener(e2, t2, { once: true }), n2 ? (0, a.dispatchDiscreteCustomEvent)(o2, i2) : o2.dispatchEvent(i2);
  }
  c(w, "usePointerDownOutside"), c(v, "useFocusOutside"), c(M, "dispatchUpdate"), c(b, "handleAndDispatchCustomEvent"), e.s(["DismissableLayer", 0, y, "useDismissableLayerSurface", 0, m], 999819);
}, 67110, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = Object.defineProperty, a = (e2, t2) => n(e2, "name", { value: t2, configurable: true }), o = 0, i = null;
  function s() {
    t.useEffect(() => {
      i || (i = { start: u(), end: u() });
      let { start: e2, end: t2 } = i;
      return document.body.firstElementChild !== e2 && document.body.insertAdjacentElement("afterbegin", e2), document.body.lastElementChild !== t2 && document.body.insertAdjacentElement("beforeend", t2), o++, () => {
        1 === o && (i?.start.remove(), i?.end.remove(), i = null), o = Math.max(0, o - 1);
      };
    }, []);
  }
  function u() {
    let e2 = document.createElement("span");
    return e2.setAttribute("data-radix-focus-guard", ""), e2.tabIndex = 0, e2.style.outline = "none", e2.style.opacity = "0", e2.style.position = "fixed", e2.style.pointerEvents = "none", e2;
  }
  a(function(e2) {
    return s(), e2.children;
  }, "FocusGuards"), a(s, "useFocusGuards"), a(u, "createFocusGuard"), e.s(["useFocusGuards", 0, s]);
}, 619784, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(728654), n = e.i(45240), a = e.i(717979), o = e.i(68982);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var s = Object.defineProperty, u = (e2, t2) => s(e2, "name", { value: t2, configurable: true }), l = "focusScope.autoFocusOnMount", d = "focusScope.autoFocusOnUnmount", c = { bubbles: false, cancelable: true }, f = t.forwardRef(u(function(e2, i2) {
    let { loop: s2 = false, trapped: f2 = false, onMountAutoFocus: g2, onUnmountAutoFocus: w2, ...v2 } = e2, [h2, E2] = t.useState(null), P = (0, a.useCallbackRef)(g2), O = (0, a.useCallbackRef)(w2), S = t.useRef(null), C = (0, r.useComposedRefs)(i2, E2), j = t.useRef({ paused: false, pause() {
      this.paused = true;
    }, resume() {
      this.paused = false;
    } }).current;
    t.useEffect(() => {
      if (f2) {
        let e3 = function(e4) {
          if (j.paused || !h2) return;
          let t3 = e4.target;
          h2.contains(t3) ? S.current = t3 : M(S.current, { select: true });
        }, t2 = function(e4) {
          if (j.paused || !h2) return;
          let t3 = e4.relatedTarget;
          null !== t3 && (h2.contains(t3) || M(S.current, { select: true }));
        }, r2 = function(e4) {
          if (document.activeElement === document.body) for (let t3 of e4) t3.removedNodes.length > 0 && M(h2);
        };
        u(e3, "handleFocusIn"), u(t2, "handleFocusOut"), u(r2, "handleMutations"), document.addEventListener("focusin", e3), document.addEventListener("focusout", t2);
        let n2 = new MutationObserver(r2);
        return h2 && n2.observe(h2, { childList: true, subtree: true }), () => {
          document.removeEventListener("focusin", e3), document.removeEventListener("focusout", t2), n2.disconnect();
        };
      }
    }, [f2, h2, j.paused]), t.useEffect(() => {
      if (h2) {
        b.add(j);
        let e3 = document.activeElement;
        if (!h2.contains(e3)) {
          let t2 = new CustomEvent(l, c);
          h2.addEventListener(l, P), h2.dispatchEvent(t2), t2.defaultPrevented || (p(_(m(h2)), { select: true }), document.activeElement === e3 && M(h2));
        }
        return () => {
          h2.removeEventListener(l, P), setTimeout(() => {
            let t2 = new CustomEvent(d, c);
            h2.addEventListener(d, O), h2.dispatchEvent(t2), t2.defaultPrevented || M(e3 ?? document.body, { select: true }), h2.removeEventListener(d, O), b.remove(j);
          }, 0);
        };
      }
    }, [h2, P, O, j]);
    let k = t.useCallback((e3) => {
      if (!s2 && !f2 || j.paused) return;
      let t2 = "Tab" === e3.key && !e3.altKey && !e3.ctrlKey && !e3.metaKey, r2 = document.activeElement;
      if (t2 && r2) {
        let t3 = e3.currentTarget, [n2, a2] = y(t3);
        n2 && a2 ? e3.shiftKey || r2 !== a2 ? e3.shiftKey && r2 === n2 && (e3.preventDefault(), s2 && M(a2, { select: true })) : (e3.preventDefault(), s2 && M(n2, { select: true })) : r2 === t3 && e3.preventDefault();
      }
    }, [s2, f2, j.paused]);
    return (0, o.jsx)(n.Primitive.div, { tabIndex: -1, ...v2, ref: C, onKeyDown: k });
  }, "FocusScope"));
  function p(e2, { select: t2 = false } = {}) {
    let r2 = document.activeElement;
    for (let n2 of e2) if (M(n2, { select: t2 }), document.activeElement !== r2) return;
  }
  function y(e2) {
    let t2 = m(e2);
    return [g(t2, e2), g(t2.reverse(), e2)];
  }
  function m(e2) {
    let t2 = [], r2 = document.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, { acceptNode: u((e3) => {
      let t3 = "INPUT" === e3.tagName && "hidden" === e3.type;
      return e3.disabled || e3.hidden || t3 ? NodeFilter.FILTER_SKIP : e3.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode") });
    for (; r2.nextNode(); ) t2.push(r2.currentNode);
    return t2;
  }
  function g(e2, t2) {
    let r2 = "function" == typeof t2.checkVisibility && t2.checkVisibility({ checkVisibilityCSS: true });
    for (let n2 of e2) if (!(r2 ? !n2.checkVisibility({ checkVisibilityCSS: true }) : w(n2, { upTo: t2 }))) return n2;
  }
  function w(e2, { upTo: t2 }) {
    if ("hidden" === getComputedStyle(e2).visibility) return true;
    for (; e2 && (void 0 === t2 || e2 !== t2); ) {
      if ("none" === getComputedStyle(e2).display) return true;
      e2 = e2.parentElement;
    }
    return false;
  }
  function v(e2) {
    return e2 instanceof HTMLInputElement && "select" in e2;
  }
  function M(e2, { select: t2 = false } = {}) {
    if (e2 && e2.focus) {
      let r2 = document.activeElement;
      e2.focus({ preventScroll: true }), e2 !== r2 && v(e2) && t2 && e2.select();
    }
  }
  u(p, "focusFirst"), u(y, "getTabbableEdges"), u(m, "getTabbableCandidates"), u(g, "findVisible"), u(w, "isHidden"), u(v, "isSelectableInput"), u(M, "focus");
  var b = h();
  function h() {
    let e2 = [];
    return { add(t2) {
      let r2 = e2[0];
      t2 !== r2 && r2?.pause(), (e2 = E(e2, t2)).unshift(t2);
    }, remove(t2) {
      e2 = E(e2, t2), e2[0]?.resume();
    } };
  }
  function E(e2, t2) {
    let r2 = [...e2], n2 = r2.indexOf(t2);
    return -1 !== n2 && r2.splice(n2, 1), r2;
  }
  function _(e2) {
    return e2.filter((e3) => "A" !== e3.tagName);
  }
  u(h, "createFocusScopesStack"), u(E, "arrayRemove"), u(_, "removeLinks"), e.s(["FocusScope", 0, f]);
}, 119637, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(386271);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var a = Object.defineProperty, o = t[" useId ".trim().toString()] || (() => void 0), i = 0;
  function s(e2) {
    let [n2, a2] = t.useState(o());
    return (0, r.useLayoutEffect)(() => {
      e2 || a2((e3) => e3 ?? String(i++));
    }, [e2]), e2 || (n2 ? `radix-${n2}` : "");
  }
  a(s, "name", { value: "useId", configurable: true }), e.s(["useId", 0, s]);
}, 291196, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(403432), n = e.i(45240), a = e.i(386271), o = e.i(68982);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var s = Object.defineProperty, u = t.forwardRef(s(function(e2, i2) {
    let { container: s2, ...u2 } = e2, [l, d] = t.useState(false);
    (0, a.useLayoutEffect)(() => d(true), []);
    let c = s2 || l && globalThis?.document?.body;
    return c ? r.createPortal((0, o.jsx)(n.Primitive.div, { ...u2, ref: i2 }), c) : null;
  }, "name", { value: "Portal", configurable: true }));
  e.s(["Portal", 0, u, "Root", 0, u]);
}, 198623, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(386271);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var a = Object.defineProperty, o = (e2, t2) => a(e2, "name", { value: t2, configurable: true });
  function i(e2, r2) {
    return t.useReducer((e3, t2) => r2[e3][t2] ?? e3, e2);
  }
  o(i, "useStateMachine");
  var s = o((e2) => {
    let { present: r2, children: n2 } = e2, a2 = u(r2), o2 = "function" == typeof n2 ? n2({ present: a2.isPresent }) : t.Children.only(n2), i2 = d(a2.ref, f(o2));
    return "function" == typeof n2 || a2.isPresent ? t.cloneElement(o2, { ref: i2 }) : null;
  }, "Presence");
  function u(e2) {
    let [n2, a2] = t.useState(), s2 = t.useRef(null), u2 = t.useRef(e2), l2 = t.useRef("none"), d2 = t.useRef(void 0), [f2, p] = i(e2 ? "mounted" : "unmounted", { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
    return t.useEffect(() => {
      "mounted" === f2 ? (l2.current = d2.current ?? c(s2.current), d2.current = void 0) : l2.current = "none";
    }, [f2]), (0, r.useLayoutEffect)(() => {
      let t2 = s2.current, r2 = u2.current;
      if (r2 !== e2) {
        let n3 = l2.current, a3 = c(t2);
        e2 ? (d2.current = a3, p("MOUNT")) : "none" === a3 || t2?.display === "none" ? p("UNMOUNT") : r2 && n3 !== a3 ? p("ANIMATION_OUT") : p("UNMOUNT"), u2.current = e2;
      }
    }, [e2, p]), (0, r.useLayoutEffect)(() => {
      if (n2) {
        let e3, t2 = n2.ownerDocument.defaultView ?? window, r2 = o((r3) => {
          let a4 = c(s2.current).includes(CSS.escape(r3.animationName));
          if (r3.target === n2 && a4 && (p("ANIMATION_END"), !u2.current)) {
            let r4 = n2.style.animationFillMode;
            n2.style.animationFillMode = "forwards", e3 = t2.setTimeout(() => {
              "forwards" === n2.style.animationFillMode && (n2.style.animationFillMode = r4);
            });
          }
        }, "handleAnimationEnd"), a3 = o((e4) => {
          e4.target === n2 && (l2.current = c(s2.current));
        }, "handleAnimationStart");
        return n2.addEventListener("animationstart", a3), n2.addEventListener("animationcancel", r2), n2.addEventListener("animationend", r2), () => {
          t2.clearTimeout(e3), n2.removeEventListener("animationstart", a3), n2.removeEventListener("animationcancel", r2), n2.removeEventListener("animationend", r2);
        };
      }
      p("ANIMATION_END");
    }, [n2, p]), { isPresent: ["mounted", "unmountSuspended"].includes(f2), ref: t.useCallback((e3) => {
      if (e3) {
        let t2 = getComputedStyle(e3);
        s2.current = t2, d2.current = c(t2);
      } else s2.current = null;
      a2(e3);
    }, []) };
  }
  function l(e2, t2) {
    if ("function" == typeof e2) return e2(t2);
    null != e2 && (e2.current = t2);
  }
  function d(...e2) {
    let r2 = t.useRef(e2);
    return r2.current = e2, t.useCallback((e3) => {
      let t2 = r2.current, n2 = false, a2 = t2.map((t3) => {
        let r3 = l(t3, e3);
        return n2 || "function" != typeof r3 || (n2 = true), r3;
      });
      if (n2) return () => {
        for (let e4 = 0; e4 < a2.length; e4++) {
          let r3 = a2[e4];
          "function" == typeof r3 ? r3() : l(t2[e4], null);
        }
      };
    }, []);
  }
  function c(e2) {
    return e2?.animationName || "none";
  }
  function f(e2) {
    let t2 = Object.getOwnPropertyDescriptor(e2.props, "ref")?.get, r2 = t2 && "isReactWarning" in t2 && t2.isReactWarning;
    return r2 ? e2.ref : (r2 = (t2 = Object.getOwnPropertyDescriptor(e2, "ref")?.get) && "isReactWarning" in t2 && t2.isReactWarning) ? e2.props.ref : e2.props.ref || e2.ref;
  }
  o(u, "usePresence"), o(l, "setRef"), o(d, "useStableComposedRefs"), o(c, "getAnimationName"), o(f, "getElementRef"), e.s(["Presence", 0, s]);
}, 45240, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(403432), n = e.i(603642), a = e.i(68982);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var i = Object.defineProperty, s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e2, r2) => {
    let o2 = (0, n.createSlot)(`Primitive.${r2}`), i2 = t.forwardRef((e3, t2) => {
      let { asChild: n2, ...i3 } = e3;
      return "u" > typeof window && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), (0, a.jsx)(n2 ? o2 : r2, { ...i3, ref: t2 });
    });
    return i2.displayName = `Primitive.${r2}`, { ...e2, [r2]: i2 };
  }, {});
  function u(e2, t2) {
    e2 && r.flushSync(() => e2.dispatchEvent(t2));
  }
  i(u, "name", { value: "dispatchDiscreteCustomEvent", configurable: true }), e.s(["Primitive", 0, s, "dispatchDiscreteCustomEvent", 0, u]);
}, 548913, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.i(386271);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var o = Object.defineProperty, i = t[" useEffectEvent ".trim().toString()], s = t[" useInsertionEffect ".trim().toString()];
  function u(e2) {
    if ("function" == typeof i) return i(e2);
    let r2 = t.useRef(() => {
      throw Error("Cannot call an event handler while rendering.");
    });
    return "function" == typeof s ? s(() => {
      r2.current = e2;
    }) : (0, n.useLayoutEffect)(() => {
      r2.current = e2;
    }), t.useMemo(() => (...e3) => r2.current?.(...e3), []);
  }
  o(u, "name", { value: "useEffectEvent", configurable: true });
  try {
    var l = "u" > typeof window ? window : e.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var d = Object.defineProperty, c = (e2, t2) => d(e2, "name", { value: t2, configurable: true }), f = t[" useInsertionEffect ".trim().toString()] || n.useLayoutEffect;
  function p({ prop: e2, defaultProp: r2, onChange: n2 = c(() => {
  }, "onChange"), caller: a2 }) {
    let [o2, i2, s2] = y({ defaultProp: r2, onChange: n2 }), u2 = void 0 !== e2, l2 = u2 ? e2 : o2;
    return [l2, t.useCallback((t2) => {
      if (u2) {
        let r3 = m(t2) ? t2(e2) : t2;
        r3 !== e2 && s2.current?.(r3);
      } else i2(t2);
    }, [u2, e2, i2, s2])];
  }
  function y({ defaultProp: e2, onChange: r2 }) {
    let [n2, a2] = t.useState(e2), o2 = t.useRef(n2), i2 = t.useRef(r2);
    return f(() => {
      i2.current = r2;
    }, [r2]), t.useEffect(() => {
      o2.current !== n2 && (i2.current?.(n2), o2.current = n2);
    }, [n2, o2]), [n2, a2, i2];
  }
  function m(e2) {
    return "function" == typeof e2;
  }
  c(p, "useControllableState"), c(y, "useUncontrolledState"), c(m, "isFunction");
  var g = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
  c(function(e2, r2, n2, a2) {
    let { prop: o2, defaultProp: i2, onChange: s2, caller: l2 } = r2, d2 = void 0 !== o2, c2 = u(s2), f2 = [{ ...n2, state: i2 }];
    a2 && f2.push(a2);
    let [p2, y2] = t.useReducer((t2, r3) => {
      if (r3.type === g) return { ...t2, state: r3.state };
      let n3 = e2(t2, r3);
      return d2 && !Object.is(n3.state, t2.state) && c2(n3.state), n3;
    }, ...f2), m2 = p2.state, w = t.useRef(m2);
    t.useEffect(() => {
      w.current !== m2 && (w.current = m2, d2 || c2(m2));
    }, [m2, w, d2]);
    let v = t.useMemo(() => void 0 !== o2 ? { ...p2, state: o2 } : p2, [p2, o2]);
    return t.useEffect(() => {
      d2 && !Object.is(o2, p2.state) && y2({ type: g, state: o2 });
    }, [o2, p2.state, d2]), [v, y2];
  }, "useControllableStateReducer"), e.s(["useControllableState", 0, p], 548913);
}, 386271, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = globalThis?.document ? t.useLayoutEffect : () => {
  };
  e.s(["useLayoutEffect", 0, n]);
}, 821235, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "Image", { enumerable: true, get: function() {
    return E;
  } });
  let a = e.r(481258), o = e.r(744066), i = e.r(68982), s = o._(e.r(856757)), u = a._(e.r(403432)), l = a._(e.r(569798)), d = e.r(275859), c = e.r(139474), f = e.r(105240), p = e.r(570630), y = a._(e.r(613371)), m = e.r(326731), g = { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [32, 48, 64, 96, 128, 256, 384], qualities: [75], path: "/_next/image", loader: "default", dangerouslyAllowSVG: false, unoptimized: false };
  function w(e2, t2, r2, n2, a2, o2, i2) {
    let s2 = e2?.src;
    e2 && e2["data-loaded-src"] !== s2 && (e2["data-loaded-src"] = s2, ("decode" in e2 ? e2.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      if (e2.parentElement && e2.isConnected) {
        if ("empty" !== t2 && a2(true), r2?.current) {
          let t3 = new Event("load");
          Object.defineProperty(t3, "target", { writable: false, value: e2 });
          let n3 = false, a3 = false;
          r2.current({ ...t3, nativeEvent: t3, currentTarget: e2, target: e2, isDefaultPrevented: () => n3, isPropagationStopped: () => a3, persist: () => {
          }, preventDefault: () => {
            n3 = true, t3.preventDefault();
          }, stopPropagation: () => {
            a3 = true, t3.stopPropagation();
          } });
        }
        n2?.current && n2.current(e2);
      }
    }));
  }
  function v(e2) {
    return s.use ? { fetchPriority: e2 } : { fetchpriority: e2 };
  }
  "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = true);
  let M = "u" < typeof window ? s.useEffect : s.useLayoutEffect, b = (0, s.forwardRef)(({ src: e2, srcSet: t2, sizes: r2, height: n2, width: a2, decoding: o2, className: u2, style: l2, fetchPriority: d2, placeholder: c2, loading: f2, unoptimized: p2, fill: y2, onLoadRef: g2, onLoadingCompleteRef: b2, setBlurComplete: h2, setShowAltText: E2, sizesInput: _, onLoad: P, onError: O, ...S }, C) => {
    let j = (0, s.useRef)(false), k = (0, s.useRef)(null);
    M(() => {
      let { current: e3 } = j, { current: t3 } = k;
      e3 || null === t3 || (O && (t3.src = t3.src), t3.complete && w(t3, c2, g2, b2, h2, p2, _), j.current = true);
    }, [e2, c2, g2, b2, O, p2, _]);
    let R = (0, m.useMergedRef)(C, k);
    return (0, i.jsx)("img", { ...S, ...v(d2), loading: f2, width: a2, height: n2, decoding: o2, "data-nimg": y2 ? "fill" : "1", className: u2, style: l2, sizes: r2, srcSet: t2, src: e2, ref: R, onLoad: (e3) => {
      w(e3.currentTarget, c2, g2, b2, h2, p2, _);
    }, onError: (e3) => {
      E2(true), "empty" !== c2 && h2(true), O && O(e3);
    } });
  });
  function h({ isAppRouter: e2, imgAttributes: t2 }) {
    let r2 = { as: "image", imageSrcSet: t2.srcSet, imageSizes: t2.sizes, crossOrigin: t2.crossOrigin, referrerPolicy: t2.referrerPolicy, ...v(t2.fetchPriority) };
    return e2 && u.default.preload ? (u.default.preload(t2.src, r2), null) : (0, i.jsx)(l.default, { children: (0, i.jsx)("link", { rel: "preload", href: t2.srcSet ? void 0 : t2.src, ...r2 }, "__nimg-" + t2.src + t2.srcSet + t2.sizes) });
  }
  let E = (0, s.forwardRef)((e2, t2) => {
    let r2 = (0, s.useContext)(p.RouterContext), n2 = (0, s.useContext)(f.ImageConfigContext), a2 = (0, s.useMemo)(() => {
      let e3 = g || n2 || c.imageConfigDefault, t3 = [...e3.deviceSizes, ...e3.imageSizes].sort((e4, t4) => e4 - t4), r3 = e3.deviceSizes.sort((e4, t4) => e4 - t4), a3 = e3.qualities?.sort((e4, t4) => e4 - t4);
      return { ...e3, allSizes: t3, deviceSizes: r3, qualities: a3, localPatterns: "u" < typeof window ? n2?.localPatterns : e3.localPatterns };
    }, [n2]), { onLoad: o2, onLoadingComplete: u2 } = e2, l2 = (0, s.useRef)(o2);
    (0, s.useEffect)(() => {
      l2.current = o2;
    }, [o2]);
    let m2 = (0, s.useRef)(u2);
    (0, s.useEffect)(() => {
      m2.current = u2;
    }, [u2]);
    let [w2, v2] = (0, s.useState)(false), [M2, E2] = (0, s.useState)(false), { props: _, meta: P } = (0, d.getImgProps)(e2, { defaultLoader: y.default, imgConf: a2, blurComplete: w2, showAltText: M2 });
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(b, { ..._, unoptimized: P.unoptimized, placeholder: P.placeholder, fill: P.fill, onLoadRef: l2, onLoadingCompleteRef: m2, setBlurComplete: v2, setShowAltText: E2, sizesInput: e2.sizes, ref: t2 }), P.preload ? (0, i.jsx)(h, { isAppRouter: !r2, imgAttributes: _ }) : null] });
  });
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 326731, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "useMergedRef", { enumerable: true, get: function() {
    return o;
  } });
  let a = e.r(856757);
  function o(e2, t2) {
    let r2 = (0, a.useRef)(null), n2 = (0, a.useRef)(null);
    return (0, a.useCallback)((a2) => {
      if (null === a2) {
        let e3 = r2.current;
        e3 && (r2.current = null, e3());
        let t3 = n2.current;
        t3 && (n2.current = null, t3());
      } else e2 && (r2.current = i(e2, a2)), t2 && (n2.current = i(t2, a2));
    }, [e2, t2]);
  }
  function i(e2, t2) {
    if ("function" != typeof e2) return e2.current = t2, () => {
      e2.current = null;
    };
    {
      let r2 = e2(t2);
      return "function" == typeof r2 ? r2 : () => e2(null);
    }
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 243614, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function a(e2, t2) {
    let r2 = e2 || 75;
    return t2?.qualities?.length ? t2.qualities.reduce((e3, t3) => Math.abs(t3 - r2) < Math.abs(e3 - r2) ? t3 : e3, t2.qualities[0]) : r2;
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "findClosestQuality", { enumerable: true, get: function() {
    return a;
  } });
}, 613371, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "default", { enumerable: true, get: function() {
    return s;
  } });
  let a = e.r(243614), o = e.r(654216);
  function i({ config: e2, src: t2, width: r2, quality: n2 }) {
    let s2 = (0, o.getDeploymentId)();
    if (t2.startsWith("/") && !t2.startsWith("//")) if (t2.includes("/_next/static/immutable") && !(0, o.getAssetToken)()) s2 = void 0;
    else {
      let e3 = t2.indexOf("?");
      if (-1 !== e3) {
        let r3 = new URLSearchParams(t2.slice(e3 + 1)), n3 = r3.get("dpl");
        if (n3) {
          s2 = n3, r3.delete("dpl");
          let a2 = r3.toString();
          t2 = t2.slice(0, e3) + (a2 ? "?" + a2 : "");
        }
      }
    }
    if (t2.startsWith("/") && t2.includes("?") && e2.localPatterns?.length === 1 && "**" === e2.localPatterns[0].pathname && "" === e2.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t2}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", { value: "E871", enumerable: false, configurable: true });
    let u = (0, a.findClosestQuality)(n2, e2);
    return `${e2.path}?url=${encodeURIComponent(t2)}&w=${r2}&q=${u}${t2.startsWith("/") && s2 ? `&dpl=${s2}` : ""}`;
  }
  i.__next_img_default = true;
  let s = i;
}, 569798, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { default: function() {
    return g;
  }, defaultHead: function() {
    return f;
  } };
  for (var o in a) Object.defineProperty(r, o, { enumerable: true, get: a[o] });
  let i = e.r(481258), s = e.r(744066), u = e.r(68982), l = s._(e.r(856757)), d = i._(e.r(746708)), c = e.r(980287);
  function f() {
    return [(0, u.jsx)("meta", { charSet: "utf-8" }, "charset"), (0, u.jsx)("meta", { name: "viewport", content: "width=device-width" }, "viewport")];
  }
  function p(e2, t2) {
    return "string" == typeof t2 || "number" == typeof t2 ? e2 : t2.type === l.default.Fragment ? e2.concat(l.default.Children.toArray(t2.props.children).reduce((e3, t3) => "string" == typeof t3 || "number" == typeof t3 ? e3 : e3.concat(t3), [])) : e2.concat(t2);
  }
  let y = ["name", "httpEquiv", "charSet", "itemProp"];
  function m(e2) {
    let t2, r2, n2, a2;
    return e2.reduce(p, []).reverse().concat(f().reverse()).filter((t2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ new Set(), a2 = {}, (e3) => {
      let o2 = true, i2 = false;
      if (e3.key && "number" != typeof e3.key && e3.key.indexOf("$") > 0) {
        i2 = true;
        let r3 = e3.key.slice(e3.key.indexOf("$") + 1);
        t2.has(r3) ? o2 = false : t2.add(r3);
      }
      switch (e3.type) {
        case "title":
        case "base":
          r2.has(e3.type) ? o2 = false : r2.add(e3.type);
          break;
        case "meta":
          for (let t3 = 0, r3 = y.length; t3 < r3; t3++) {
            let r4 = y[t3];
            if (e3.props.hasOwnProperty(r4)) if ("charSet" === r4) n2.has(r4) ? o2 = false : n2.add(r4);
            else {
              let t4 = e3.props[r4], n3 = a2[r4] || /* @__PURE__ */ new Set();
              ("name" !== r4 || !i2) && n3.has(t4) ? o2 = false : (n3.add(t4), a2[r4] = n3);
            }
          }
      }
      return o2;
    })).reverse().map((e3, t3) => {
      let r3 = e3.key || t3;
      return l.default.cloneElement(e3, { key: r3 });
    });
  }
  let g = function({ children: e2 }) {
    let t2 = (0, l.useContext)(c.HeadManagerContext);
    return (0, u.jsx)(d.default, { reduceComponentsToState: m, headManager: t2, children: e2 });
  };
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 924295, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function a({ widthInt: e2, heightInt: t2, blurWidth: r2, blurHeight: n2, blurDataURL: o, objectFit: i }) {
    let s = r2 ? 40 * r2 : e2, u = n2 ? 40 * n2 : t2, l = s && u ? `viewBox='0 0 ${s} ${u}'` : "";
    return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l ? "none" : "contain" === i ? "xMidYMid" : "cover" === i ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`;
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "getImageBlurSvg", { enumerable: true, get: function() {
    return a;
  } });
}, 139474, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { VALID_LOADERS: function() {
    return i;
  }, imageConfigDefault: function() {
    return s;
  } };
  for (var o in a) Object.defineProperty(r, o, { enumerable: true, get: a[o] });
  let i = ["default", "imgix", "cloudinary", "akamai", "custom"], s = { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [32, 48, 64, 96, 128, 256, 384], path: "/_next/image", loader: "default", loaderFile: "", domains: [], disableStaticImages: false, minimumCacheTTL: 14400, formats: ["image/webp"], maximumDiskCacheSize: void 0, maximumRedirects: 3, maximumResponseBody: 5e7, dangerouslyAllowLocalIP: false, dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "attachment", localPatterns: void 0, remotePatterns: [], qualities: [75], unoptimized: false, customCacheHandler: false };
}, 275859, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "getImgProps", { enumerable: true, get: function() {
    return d;
  } });
  let a = e.r(654216), o = e.r(924295), i = e.r(139474), s = ["-moz-initial", "fill", "none", "scale-down", void 0];
  function u(e2) {
    return void 0 !== e2.default;
  }
  function l(e2) {
    return void 0 === e2 ? e2 : "number" == typeof e2 ? Number.isFinite(e2) ? e2 : NaN : "string" == typeof e2 && /^[0-9]+$/.test(e2) ? parseInt(e2, 10) : NaN;
  }
  function d({ src: e2, sizes: t2, unoptimized: r2 = false, priority: n2 = false, preload: c = false, loading: f, className: p, quality: y, width: m, height: g, fill: w = false, style: v, overrideSrc: M, onLoad: b, onLoadingComplete: h, placeholder: E = "empty", blurDataURL: _, fetchPriority: P, decoding: O = "async", layout: S, objectFit: C, objectPosition: j, lazyBoundary: k, lazyRoot: R, ...x }, A) {
    var D;
    let L, N, I, { imgConf: T, showAltText: F, blurComplete: B, defaultLoader: z } = A, K = T || i.imageConfigDefault;
    if ("allSizes" in K) L = K;
    else {
      let e3 = [...K.deviceSizes, ...K.imageSizes].sort((e4, t4) => e4 - t4), t3 = K.deviceSizes.sort((e4, t4) => e4 - t4), r3 = K.qualities?.sort((e4, t4) => e4 - t4);
      L = { ...K, allSizes: e3, deviceSizes: t3, qualities: r3 };
    }
    if (void 0 === z) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", { value: "E163", enumerable: false, configurable: true });
    let $ = x.loader || z;
    delete x.loader, delete x.srcSet;
    let U = "__next_img_default" in $;
    if (U) {
      if ("custom" === L.loader) throw Object.defineProperty(Error(`Image with src "${e2}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", { value: "E252", enumerable: false, configurable: true });
    } else {
      let e3 = $;
      $ = (t3) => {
        let { config: r3, ...n3 } = t3;
        return e3(n3);
      };
    }
    if (S) {
      "fill" === S && (w = true);
      let e3 = { intrinsic: { maxWidth: "100%", height: "auto" }, responsive: { width: "100%", height: "auto" } }[S];
      e3 && (v = { ...v, ...e3 });
      let r3 = { responsive: "100vw", fill: "100vw" }[S];
      r3 && !t2 && (t2 = r3);
    }
    let W = "", H = l(m), G = l(g);
    if ((D = e2) && "object" == typeof D && (u(D) || void 0 !== D.src)) {
      let t3 = u(e2) ? e2.default : e2;
      if (!t3.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t3)}`), "__NEXT_ERROR_CODE", { value: "E460", enumerable: false, configurable: true });
      if (!t3.height || !t3.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t3)}`), "__NEXT_ERROR_CODE", { value: "E48", enumerable: false, configurable: true });
      if (N = t3.blurWidth, I = t3.blurHeight, _ = _ || t3.blurDataURL, W = t3.src, !w) if (H || G) {
        if (H && !G) {
          let e3 = H / t3.width;
          G = Math.round(t3.height * e3);
        } else if (!H && G) {
          let e3 = G / t3.height;
          H = Math.round(t3.width * e3);
        }
      } else H = t3.width, G = t3.height;
    }
    let V = !n2 && !c && ("lazy" === f || void 0 === f);
    (!(e2 = "string" == typeof e2 ? e2 : W) || e2.startsWith("data:") || e2.startsWith("blob:")) && (r2 = true, V = false), L.unoptimized && (r2 = true), U && !L.dangerouslyAllowSVG && e2.split("?", 1)[0].endsWith(".svg") && (r2 = true);
    let q = l(y), X = Object.assign(w ? { position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, objectFit: C, objectPosition: j } : {}, F ? {} : { color: "transparent" }, v), Y = B || "empty" === E ? null : "blur" === E ? `url("data:image/svg+xml;charset=utf-8,${(0, o.getImageBlurSvg)({ widthInt: H, heightInt: G, blurWidth: N, blurHeight: I, blurDataURL: _ || "", objectFit: X.objectFit })}")` : `url("${E}")`, J = s.includes(X.objectFit) ? "fill" === X.objectFit ? "100% 100%" : "cover" : X.objectFit, Q = Y ? { backgroundSize: J, backgroundPosition: X.objectPosition || "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: Y } : {}, Z = (function({ config: e3, src: t3, unoptimized: r3, width: n3, quality: o2, sizes: i2, loader: s2 }) {
      if (r3) {
        if (t3.startsWith("/") && !t3.startsWith("//")) {
          let e4 = (0, a.getDeploymentId)();
          if (t3.includes("/_next/static/immutable") && !(0, a.getAssetToken)()) e4 = void 0;
          else if (e4) {
            let r4 = t3.indexOf("?");
            if (-1 !== r4) {
              let n4 = new URLSearchParams(t3.slice(r4 + 1));
              n4.get("dpl") || (n4.append("dpl", e4), t3 = t3.slice(0, r4) + "?" + n4.toString());
            } else t3 += `?dpl=${e4}`;
          }
        }
        return { src: t3, srcSet: void 0, sizes: void 0 };
      }
      let { widths: u2, kind: l2 } = (function({ deviceSizes: e4, allSizes: t4 }, r4, n4) {
        if (n4) {
          let r5 = /(^|\s)(1?\d?\d)vw/g, a2 = [];
          for (let e5; e5 = r5.exec(n4); ) a2.push(parseInt(e5[2]));
          if (a2.length) {
            let r6 = 0.01 * Math.min(...a2);
            return { widths: t4.filter((t5) => t5 >= e4[0] * r6), kind: "w" };
          }
          return { widths: t4, kind: "w" };
        }
        return "number" != typeof r4 ? { widths: e4, kind: "w" } : { widths: [...new Set([r4, 2 * r4].map((e5) => t4.find((t5) => t5 >= e5) || t4[t4.length - 1]))], kind: "x" };
      })(e3, n3, i2), d2 = u2.length - 1;
      return { sizes: i2 || "w" !== l2 ? i2 : "100vw", srcSet: u2.map((r4, n4) => `${s2({ config: e3, src: t3, quality: o2, width: r4 })} ${"w" === l2 ? r4 : n4 + 1}${l2}`).join(", "), src: s2({ config: e3, src: t3, quality: o2, width: u2[d2] }) };
    })({ config: L, src: e2, unoptimized: r2, width: H, quality: q, sizes: t2, loader: $ }), ee = V ? "lazy" : f;
    return { props: { ...x, loading: ee, fetchPriority: P, width: H, height: G, decoding: O, className: p, style: { ...X, ...Q }, sizes: Z.sizes, srcSet: Z.srcSet, src: M || Z.src }, meta: { unoptimized: r2, preload: c || n2, placeholder: E, fill: w } };
  }
}, 105240, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "ImageConfigContext", { enumerable: true, get: function() {
    return i;
  } });
  let a = e.r(481258)._(e.r(856757)), o = e.r(139474), i = a.default.createContext(o.imageConfigDefault);
}, 775751, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { default: function() {
    return c;
  }, getImageProps: function() {
    return d;
  } };
  for (var o in a) Object.defineProperty(r, o, { enumerable: true, get: a[o] });
  let i = e.r(481258), s = e.r(275859), u = e.r(821235), l = i._(e.r(613371));
  function d(e2) {
    let { props: t2 } = (0, s.getImgProps)(e2, { defaultLoader: l.default, imgConf: { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [32, 48, 64, 96, 128, 256, 384], qualities: [75], path: "/_next/image", loader: "default", dangerouslyAllowSVG: false, unoptimized: false } });
    for (let [e3, r2] of Object.entries(t2)) void 0 === r2 && delete t2[e3];
    return { props: t2 };
  }
  let c = u.Image;
}, 915501, (e, t, r) => {
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = e.r(775751);
}, 746708, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "default", { enumerable: true, get: function() {
    return u;
  } });
  let a = e.r(856757), o = "u" < typeof window, i = o ? () => {
  } : a.useLayoutEffect, s = o ? () => {
  } : a.useEffect;
  function u(e2) {
    let { headManager: t2, reduceComponentsToState: r2 } = e2;
    function n2() {
      if (t2 && t2.mountedInstances) {
        let e3 = a.Children.toArray(Array.from(t2.mountedInstances).filter(Boolean));
        t2.updateHead(r2(e3));
      }
    }
    return o && (t2?.mountedInstances?.add(e2.children), n2()), i(() => (t2?.mountedInstances?.add(e2.children), () => {
      t2?.mountedInstances?.delete(e2.children);
    })), i(() => (t2 && (t2._pendingUpdate = n2), () => {
      t2 && (t2._pendingUpdate = n2);
    })), s(() => (t2 && t2._pendingUpdate && (t2._pendingUpdate(), t2._pendingUpdate = null), () => {
      t2 && t2._pendingUpdate && (t2._pendingUpdate(), t2._pendingUpdate = null);
    })), null;
  }
}]);
