;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "bb5b1ec9-01f3-388e-322d-fe56aeeca0ae");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 801873, (e) => {
  "use strict";
  var t = e.i(856757), n = e.i(403432), r = e.i(880269), a = e.i(517124), o = e.i(703921), i = e.i(497073), s = e.i(599607), l = e.i(424404), u = e.i(550034), c = e.i(234091), d = e.i(639761), f = e.i(930296), p = e.i(296232), g = e.i(205549), y = e.i(256777), h = e.i(867383), M = e.i(68982);
  try {
    var w = "u" > typeof window ? window : e.g;
    w._sentryModuleMetadata = w._sentryModuleMetadata || {}, w._sentryModuleMetadata[new w.Error().stack] = Object.assign({}, w._sentryModuleMetadata[new w.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let m = t.createContext(null), v = () => t.useContext(m), E = (0, g.createAttribute)("portal");
  function b(e2 = {}) {
    let { ref: a2, container: o2, componentProps: c2 = u.EMPTY_OBJECT, elementProps: d2 } = e2, f2 = (0, i.useId)(), p2 = v(), g2 = p2?.portalNode, [h2, M2] = t.useState(null), [w2, m2] = t.useState(null), _2 = (0, l.useStableCallback)((e3) => {
      null !== e3 && m2(e3);
    }), S = t.useRef(null);
    (0, s.useIsoLayoutEffect)(() => {
      if (null === o2) {
        S.current && (S.current = null, m2(null), M2(null));
        return;
      }
      let e3 = (o2 && ((0, r.isNode)(o2) ? o2 : o2.current)) ?? g2 ?? document.body;
      if (null == e3) {
        S.current && (S.current = null, m2(null), M2(null));
        return;
      }
      S.current !== e3 && (S.current = e3, m2(null), M2(e3));
    }, [o2, g2]);
    let k = (0, y.useRenderElement)("div", c2, { ref: [a2, _2], props: [{ id: f2, [E]: "" }, d2] }), O = h2 && k ? n.createPortal(k, h2) : null;
    return { node: w2, nodeId: t.isValidElement(k) ? k.props.id : void 0, subtree: O };
  }
  let _ = t.forwardRef(function(e2, r2) {
    let { render: i2, className: l2, style: u2, children: g2, container: y2, ...w2 } = e2, { node: v2, nodeId: E2, subtree: _2 } = b({ container: y2, ref: r2, componentProps: e2, elementProps: w2 }), S = t.useRef(null), k = t.useRef(null), O = t.useRef(null), P = t.useRef(null), [T, x] = t.useState(null), C = t.useRef(false), A = T?.modal, R = T?.open, I = !!T && !T.modal && T.open && !!v2;
    t.useEffect(() => {
      if (v2 && !A) return (0, o.mergeCleanups)((0, a.addEventListener)(v2, "focusin", e3, true), (0, a.addEventListener)(v2, "focusout", e3, true));
      function e3(e4) {
        v2 && e4.relatedTarget && (0, d.isOutsideEvent)(e4) && ("focusin" === e4.type ? C.current && ((0, d.enableFocusInside)(v2), C.current = false) : ((0, d.disableFocusInside)(v2), C.current = true));
      }
    }, [v2, A]), (0, s.useIsoLayoutEffect)(() => {
      v2 && true === R && C.current && ((0, d.enableFocusInside)(v2), C.current = false);
    }, [R, v2]);
    let L = t.useMemo(() => ({ beforeOutsideRef: S, afterOutsideRef: k, beforeInsideRef: O, afterInsideRef: P, portalNode: v2, setFocusManagerState: x }), [v2]);
    return (0, M.jsxs)(t.Fragment, { children: [_2, (0, M.jsxs)(m.Provider, { value: L, children: [I && v2 && (0, M.jsx)(c.FocusGuard, { "data-type": "outside", ref: S, onFocus: (e3) => {
      if ((0, d.isOutsideEvent)(e3, v2)) O.current?.focus();
      else {
        let e4 = T ? T.domReference : null, t2 = (0, d.getPreviousTabbable)(e4);
        t2?.focus();
      }
    } }), I && v2 && (0, M.jsx)("span", { "aria-owns": E2, style: h.ownerVisuallyHidden }), v2 && n.createPortal(g2, v2), I && v2 && (0, M.jsx)(c.FocusGuard, { "data-type": "outside", ref: k, onFocus: (e3) => {
      if ((0, d.isOutsideEvent)(e3, v2)) P.current?.focus();
      else {
        let t2 = T ? T.domReference : null, n2 = (0, d.getNextTabbable)(t2);
        n2?.focus(), T?.closeOnFocusOut && T?.onOpenChange(false, (0, f.createChangeEventDetails)(p.REASONS.focusOut, e3.nativeEvent));
      }
    } })] })] });
  });
  e.s(["FloatingPortal", 0, _, "useFloatingPortalNode", 0, b, "usePortalContext", 0, v]);
}, 397393, 939007, (e) => {
  "use strict";
  var t = e.i(856757), n = e.i(56032), r = e.i(596482), a = e.i(673022), o = e.i(740915);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let s = (0, a.isReactVersionAtLeast)(19) ? function(e2, r2, a2, i2, s2) {
    let l2, u2 = (0, o.getInstance)();
    if (!u2) {
      let o2;
      return o2 = t.useCallback(() => r2(e2.getSnapshot(), a2, i2, s2), [e2, r2, a2, i2, s2]), (0, n.useSyncExternalStore)(e2.subscribe, o2, o2);
    }
    let c2 = u2.syncIndex;
    return u2.syncIndex += 1, u2.didInitialize ? (l2 = u2.syncHooks[c2]).store === e2 && l2.selector === r2 && Object.is(l2.a1, a2) && Object.is(l2.a2, i2) && Object.is(l2.a3, s2) || (l2.store !== e2 && (u2.didChangeStore = true), l2.store = e2, l2.selector = r2, l2.a1 = a2, l2.a2 = i2, l2.a3 = s2, l2.value = r2(e2.getSnapshot(), a2, i2, s2)) : (l2 = { store: e2, selector: r2, a1: a2, a2: i2, a3: s2, value: r2(e2.getSnapshot(), a2, i2, s2) }, u2.syncHooks.push(l2)), l2.value;
  } : function(e2, t2, n2, a2, o2) {
    return (0, r.useSyncExternalStoreWithSelector)(e2.subscribe, e2.getSnapshot, e2.getSnapshot, (e3) => t2(e3, n2, a2, o2));
  };
  (0, o.register)({ before(e2) {
    e2.syncIndex = 0, e2.didInitialize || (e2.syncTick = 1, e2.syncHooks = [], e2.didChangeStore = true, e2.getSnapshot = () => {
      let t2 = false;
      for (let n2 = 0; n2 < e2.syncHooks.length; n2 += 1) {
        let r2 = e2.syncHooks[n2], a2 = r2.selector(r2.store.state, r2.a1, r2.a2, r2.a3);
        Object.is(r2.value, a2) || (t2 = true, r2.value = a2);
      }
      return t2 && (e2.syncTick += 1), e2.syncTick;
    });
  }, after(e2) {
    e2.syncHooks.length > 0 && (e2.didChangeStore && (e2.didChangeStore = false, e2.subscribe = (t2) => {
      let n2 = /* @__PURE__ */ new Set();
      for (let t3 of e2.syncHooks) n2.add(t3.store);
      let r2 = [];
      for (let e3 of n2) r2.push(e3.subscribe(t2));
      return () => {
        for (let e3 of r2) e3();
      };
    }), (0, n.useSyncExternalStore)(e2.subscribe, e2.getSnapshot, e2.getSnapshot));
  } });
  try {
    var l = "u" > typeof window ? window : e.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class u {
    constructor(e2) {
      this.state = e2, this.listeners = /* @__PURE__ */ new Set(), this.updateTick = 0;
    }
    subscribe = (e2) => (this.listeners.add(e2), () => {
      this.listeners.delete(e2);
    });
    getSnapshot = () => this.state;
    setState(e2) {
      if (this.state === e2) return;
      this.state = e2, this.updateTick += 1;
      let t2 = this.updateTick;
      for (let n2 of this.listeners) {
        if (t2 !== this.updateTick) return;
        n2(e2);
      }
    }
    update(e2) {
      for (let t2 in e2) if (!Object.is(this.state[t2], e2[t2])) return void this.setState({ ...this.state, ...e2 });
    }
    set(e2, t2) {
      Object.is(this.state[e2], t2) || this.setState({ ...this.state, [e2]: t2 });
    }
    notifyAll() {
      let e2 = { ...this.state };
      this.setState(e2);
    }
    use(e2, t2, n2, r2) {
      return s(this, e2, t2, n2, r2);
    }
  }
  var c = e.i(424404), d = e.i(599607), f = e.i(550034);
  try {
    var p = "u" > typeof window ? window : e.g;
    p._sentryModuleMetadata = p._sentryModuleMetadata || {}, p._sentryModuleMetadata[new p.Error().stack] = Object.assign({}, p._sentryModuleMetadata[new p.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class g extends u {
    constructor(e2, t2 = {}, n2) {
      super(e2), this.context = t2, this.selectors = n2;
    }
    useSyncedValue(e2, n2) {
      t.useDebugValue(e2);
      let r2 = this;
      (0, d.useIsoLayoutEffect)(() => {
        r2.state[e2] !== n2 && r2.set(e2, n2);
      }, [r2, e2, n2]);
    }
    useSyncedValueWithCleanup(e2, t2) {
      let n2 = this;
      (0, d.useIsoLayoutEffect)(() => (n2.state[e2] !== t2 && n2.set(e2, t2), () => {
        n2.set(e2, void 0);
      }), [n2, e2, t2]);
    }
    useSyncedValues(e2) {
      let t2 = this, n2 = Object.values(e2);
      (0, d.useIsoLayoutEffect)(() => {
        t2.update(e2);
      }, [t2, ...n2]);
    }
    useControlledProp(e2, n2) {
      t.useDebugValue(e2);
      let r2 = this, a2 = void 0 !== n2;
      (0, d.useIsoLayoutEffect)(() => {
        a2 && !Object.is(r2.state[e2], n2) && r2.setState({ ...r2.state, [e2]: n2 });
      }, [r2, e2, n2, a2]);
    }
    select(e2, t2, n2, r2) {
      return (0, this.selectors[e2])(this.state, t2, n2, r2);
    }
    useState(e2, n2, r2, a2) {
      return t.useDebugValue(e2), s(this, this.selectors[e2], n2, r2, a2);
    }
    useContextCallback(e2, n2) {
      t.useDebugValue(e2);
      let r2 = (0, c.useStableCallback)(n2 ?? f.NOOP);
      this.context[e2] = r2;
    }
    useStateSetter(e2) {
      let n2 = t.useRef(void 0);
      return void 0 === n2.current && (n2.current = (t2) => {
        this.set(e2, t2);
      }), n2.current;
    }
    observe(e2, t2) {
      let n2, r2 = (n2 = "function" == typeof e2 ? e2 : this.selectors[e2])(this.state);
      return t2(r2, r2, this), this.subscribe((e3) => {
        let a2 = n2(e3);
        if (!Object.is(r2, a2)) {
          let e4 = r2;
          r2 = a2, t2(a2, e4, this);
        }
      });
    }
  }
  e.s(["ReactStore", 0, g], 939007);
  var y = e.i(705999), h = e.i(66769);
  try {
    var M = "u" > typeof window ? window : e.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let w = { open: (e2) => e2.open, transitionStatus: (e2) => e2.transitionStatus, domReferenceElement: (e2) => e2.domReferenceElement, referenceElement: (e2) => e2.positionReference ?? e2.referenceElement, floatingElement: (e2) => e2.floatingElement, floatingId: (e2) => e2.floatingId };
  e.s(["FloatingRootStore", 0, class extends g {
    constructor(e2) {
      const { syncOnly: t2, nested: n2, onOpenChange: r2, triggerElements: a2, ...o2 } = e2;
      super({ ...o2, positionReference: o2.referenceElement, domReferenceElement: o2.referenceElement }, { onOpenChange: r2, dataRef: { current: {} }, events: (0, y.createEventEmitter)(), nested: n2, triggerElements: a2 }, w), this.syncOnly = t2;
    }
    syncOpenEvent = (e2, t2) => {
      (!e2 || !this.state.open || null != t2 && (0, h.isClickLikeEvent)(t2)) && (this.context.dataRef.current.openEvent = e2 ? t2 : void 0);
    };
    dispatchOpenChange = (e2, t2) => {
      this.syncOpenEvent(e2, t2.event);
      let n2 = { open: e2, reason: t2.reason, nativeEvent: t2.event, nested: this.context.nested, triggerElement: t2.trigger };
      this.context.events.emit("openchange", n2);
    };
    setOpen = (e2, t2) => {
      this.syncOnly || this.dispatchOpenChange(e2, t2), this.context.onOpenChange?.(e2, t2);
    };
  }], 397393);
}, 872191, 705999, 60402, (e) => {
  "use strict";
  var t = e.i(856757), n = e.i(497073), r = e.i(599607), a = e.i(114606);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function i() {
    let e2 = /* @__PURE__ */ new Map();
    return { emit(t2, n2) {
      e2.get(t2)?.forEach((e3) => e3(n2));
    }, on(t2, n2) {
      e2.has(t2) || e2.set(t2, /* @__PURE__ */ new Set()), e2.get(t2).add(n2);
    }, off(t2, n2) {
      e2.get(t2)?.delete(n2);
    } };
  }
  e.s(["createEventEmitter", 0, i], 705999);
  try {
    var s = "u" > typeof window ? window : e.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class l {
    nodesRef = { current: [] };
    events = i();
    addNode(e2) {
      this.nodesRef.current.push(e2);
    }
    removeNode(e2) {
      let t2 = this.nodesRef.current.findIndex((t3) => t3 === e2);
      -1 !== t2 && this.nodesRef.current.splice(t2, 1);
    }
  }
  e.s(["FloatingTreeStore", 0, l], 60402);
  var u = e.i(68982);
  try {
    var c = "u" > typeof window ? window : e.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let d = t.createContext(null), f = t.createContext(null), p = () => t.useContext(d)?.id || null, g = (e2) => {
    let n2 = t.useContext(f);
    return e2 ?? n2;
  };
  e.s(["FloatingNode", 0, function(e2) {
    let { children: n2, id: r2 } = e2, a2 = p();
    return (0, u.jsx)(d.Provider, { value: t.useMemo(() => ({ id: r2, parentId: a2 }), [r2, a2]), children: n2 });
  }, "FloatingTree", 0, function(e2) {
    let { children: t2, externalTree: n2 } = e2, r2 = (0, a.useRefWithInit)(() => n2 ?? new l()).current;
    return (0, u.jsx)(f.Provider, { value: r2, children: t2 });
  }, "useFloatingNodeId", 0, function(e2) {
    let t2 = (0, n.useId)(), a2 = g(e2), o2 = p();
    return (0, r.useIsoLayoutEffect)(() => {
      if (!t2) return;
      let e3 = { id: t2, parentId: o2 };
      return a2?.addNode(e3), () => {
        a2?.removeNode(e3);
      };
    }, [a2, t2, o2]), t2;
  }, "useFloatingParentNodeId", 0, p, "useFloatingTree", 0, g], 872191);
}, 535896, (e) => {
  "use strict";
  var t = e.i(856757), n = e.i(517124), r = e.i(703921), a = e.i(219710), o = e.i(424404), i = e.i(639306), s = e.i(880269), l = e.i(553254), u = e.i(872191), c = e.i(930296), d = e.i(296232), f = e.i(205549), p = e.i(635338), g = e.i(765391), y = e.i(66769), h = e.i(143882);
  try {
    var M = "u" > typeof window ? window : e.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function w() {
    return false;
  }
  e.s(["useDismiss", 0, function(e2, M2 = {}) {
    let { enabled: m = true, escapeKey: v = true, outsidePress: E = true, outsidePressEvent: b = "sloppy", referencePress: _ = w, bubbles: S, externalTree: k } = M2, O = "rootStore" in e2 ? e2.rootStore : e2, P = O.useState("open"), T = O.useState("floatingElement"), { dataRef: x } = O.context, C = (0, u.useFloatingTree)(k), A = (0, o.useStableCallback)("function" == typeof E ? E : () => false), R = "function" == typeof E ? A : E, I = false !== R, L = (0, o.useStableCallback)(() => b), { escapeKey: B, outsidePress: N } = { escapeKey: "boolean" == typeof S ? S : S?.escapeKey ?? false, outsidePress: "boolean" == typeof S ? S : S?.outsidePress ?? true }, j = t.useRef(false), D = t.useRef(false), K = t.useRef(false), F = t.useRef(false), H = t.useRef(""), W = t.useRef(null), V = (0, i.useTimeout)(), $ = (0, i.useTimeout)(), Y = (0, o.useStableCallback)(() => {
      $.clear(), x.current.insideReactTree = false;
    }), U = (0, o.useStableCallback)((e3) => {
      let t2 = x.current.floatingContext?.nodeId;
      return (C ? (0, h.getNodeChildren)(C.nodesRef.current, t2) : []).some((t3) => t3.context?.open && !t3.context.dataRef.current[e3]);
    }), z = (0, o.useStableCallback)((e3) => (0, g.isEventTargetWithin)(e3, O.select("floatingElement")) || (0, g.isEventTargetWithin)(e3, O.select("domReferenceElement"))), q = (0, o.useStableCallback)((e3) => {
      _() && O.setOpen(false, (0, c.createChangeEventDetails)(d.REASONS.triggerPress, e3.nativeEvent));
    }), J = (0, o.useStableCallback)((e3) => {
      if (!P || !m || !v || "Escape" !== e3.key || F.current || !B && U("__escapeKeyBubbles")) return;
      let t2 = (0, y.isReactEvent)(e3) ? e3.nativeEvent : e3, n2 = (0, c.createChangeEventDetails)(d.REASONS.escapeKey, t2);
      O.setOpen(false, n2), n2.isCanceled || e3.preventDefault(), B || n2.isPropagationAllowed || e3.stopPropagation();
    }), X = (0, o.useStableCallback)(() => {
      x.current.insideReactTree = true, $.start(0, Y);
    }), G = (0, o.useStableCallback)((e3) => {
      if (!P || !m || 0 !== e3.button) return;
      let t2 = (0, p.getTarget)(e3.nativeEvent);
      (0, p.contains)(O.select("floatingElement"), t2) && (j.current || (j.current = true, D.current = false));
    }), Q = (0, o.useStableCallback)((e3) => {
      !P || !m || (e3.defaultPrevented || e3.nativeEvent.defaultPrevented) && j.current && (D.current = true);
    });
    t.useEffect(() => {
      if (!P || !m) return Y;
      x.current.__escapeKeyBubbles = B, x.current.__outsidePressBubbles = N;
      let e3 = new i.Timeout(), t2 = new i.Timeout();
      function o2() {
        K.current = true, t2.start(0, () => {
          K.current = false;
        });
      }
      function u2() {
        j.current = false, D.current = false;
      }
      function y2() {
        let e4 = H.current, t3 = L(), n2 = "function" == typeof t3 ? t3() : t3;
        return "string" == typeof n2 ? n2 : n2["pen" !== e4 && e4 ? e4 : "mouse"];
      }
      function M3(e4) {
        let t3 = x.current.floatingContext?.nodeId, n2 = C && (0, h.getNodeChildren)(C.nodesRef.current, t3).some((t4) => (0, g.isEventTargetWithin)(e4, t4.context?.elements.floating));
        return z(e4) || n2;
      }
      function w2(e4) {
        let n2;
        if ("intentional" === (n2 = y2()) && "click" !== e4.type || "sloppy" === n2 && "click" === e4.type) {
          "click" === e4.type || z(e4) || (t2.clear(), K.current = false), Y();
          return;
        }
        if (x.current.insideReactTree) return void Y();
        let r2 = (0, p.getTarget)(e4), o3 = `[${(0, f.createAttribute)("inert")}]`, i2 = (0, s.isElement)(r2) ? r2.getRootNode() : null, l2 = Array.from(((0, s.isShadowRoot)(i2) ? i2 : (0, a.ownerDocument)(O.select("floatingElement"))).querySelectorAll(o3)), u3 = O.context.triggerElements;
        if (r2 && (u3.hasElement(r2) || u3.hasMatchingElement((e5) => (0, p.contains)(e5, r2)))) return;
        let h2 = (0, s.isElement)(r2) ? r2 : null;
        for (; h2 && !(0, s.isLastTraversableNode)(h2); ) {
          let e5 = (0, s.getParentNode)(h2);
          if ((0, s.isLastTraversableNode)(e5) || !(0, s.isElement)(e5)) break;
          h2 = e5;
        }
        if (!(l2.length && (0, s.isElement)(r2) && !(0, g.isRootElement)(r2) && !(0, p.contains)(r2, O.select("floatingElement")) && l2.every((e5) => !(0, p.contains)(h2, e5)))) {
          if ((0, s.isHTMLElement)(r2) && !("touches" in e4)) {
            let t3 = (0, s.isLastTraversableNode)(r2), n3 = (0, s.getComputedStyle)(r2), a2 = /auto|scroll/, o4 = t3 || a2.test(n3.overflowX), i3 = t3 || a2.test(n3.overflowY), l3 = o4 && r2.clientWidth > 0 && r2.scrollWidth > r2.clientWidth, u4 = i3 && r2.clientHeight > 0 && r2.scrollHeight > r2.clientHeight, c2 = "rtl" === n3.direction, d2 = u4 && (c2 ? e4.offsetX <= r2.offsetWidth - r2.clientWidth : e4.offsetX > r2.clientWidth), f2 = l3 && e4.offsetY > r2.clientHeight;
            if (d2 || f2) return;
          }
          if (!M3(e4)) {
            if ("intentional" === y2() && K.current) {
              t2.clear(), K.current = false;
              return;
            }
            "function" == typeof R && !R(e4) || U("__outsidePressBubbles") || (O.setOpen(false, (0, c.createChangeEventDetails)(d.REASONS.outsidePress, e4)), Y());
          }
        }
      }
      function E2(e4) {
        if ("sloppy" !== y2() || !O.select("open") || !m || z(e4)) return;
        let t3 = e4.touches[0];
        t3 && (W.current = { startTime: Date.now(), startX: t3.clientX, startY: t3.clientY, dismissOnTouchEnd: false, dismissOnMouseDown: true }, V.start(1e3, () => {
          W.current && (W.current.dismissOnTouchEnd = false, W.current.dismissOnMouseDown = false);
        }));
      }
      function b2(e4, t3) {
        let r2 = (0, p.getTarget)(e4);
        if (!r2) return;
        let a2 = (0, n.addEventListener)(r2, e4.type, () => {
          t3(e4), a2();
        });
      }
      function _2(e4) {
        V.clear(), "pointerdown" === e4.type && (H.current = e4.pointerType), ("mousedown" !== e4.type || !W.current || W.current.dismissOnMouseDown) && b2(e4, (e5) => {
          if ("pointerdown" === e5.type) "sloppy" !== y2() || "touch" === e5.pointerType || !O.select("open") || !m || z(e5) || w2(e5);
          else w2(e5);
        });
      }
      function S2(e4) {
        if (!j.current) return;
        let n2 = D.current;
        if (u2(), "intentional" === y2()) {
          if ("pointercancel" === e4.type) {
            n2 && o2();
            return;
          }
          M3(e4) || (n2 ? o2() : ("function" != typeof R || R(e4)) && (t2.clear(), K.current = true, Y()));
        }
      }
      function k2(e4) {
        if ("sloppy" !== y2() || !W.current || z(e4)) return;
        let t3 = e4.touches[0];
        if (!t3) return;
        let n2 = Math.abs(t3.clientX - W.current.startX), r2 = Math.abs(t3.clientY - W.current.startY), a2 = Math.sqrt(n2 * n2 + r2 * r2);
        a2 > 5 && (W.current.dismissOnTouchEnd = true), a2 > 10 && (w2(e4), V.clear(), W.current = null);
      }
      function A2(e4) {
        "sloppy" !== y2() || !W.current || z(e4) || (W.current.dismissOnTouchEnd && w2(e4), V.clear(), W.current = null);
      }
      let $2 = (0, a.ownerDocument)(T), q2 = (0, r.mergeCleanups)(v && (0, r.mergeCleanups)((0, n.addEventListener)($2, "keydown", J), (0, n.addEventListener)($2, "compositionstart", function() {
        e3.clear(), F.current = true;
      }), (0, n.addEventListener)($2, "compositionend", function() {
        e3.start(5 * !!l.platform.engine.webkit, () => {
          F.current = false;
        });
      })), I && (0, r.mergeCleanups)((0, n.addEventListener)($2, "click", _2, true), (0, n.addEventListener)($2, "pointerdown", _2, true), (0, n.addEventListener)($2, "pointerup", S2, true), (0, n.addEventListener)($2, "pointercancel", S2, true), (0, n.addEventListener)($2, "mousedown", _2, true), (0, n.addEventListener)($2, "mouseup", S2, true), (0, n.addEventListener)($2, "touchstart", function(e4) {
        H.current = "touch", b2(e4, E2);
      }, true), (0, n.addEventListener)($2, "touchmove", function(e4) {
        b2(e4, k2);
      }, true), (0, n.addEventListener)($2, "touchend", function(e4) {
        b2(e4, A2);
      }, true)));
      return () => {
        q2(), e3.clear(), t2.clear(), u2(), K.current = false, Y();
      };
    }, [x, T, v, I, R, P, m, B, N, J, Y, L, U, z, C, O, V]);
    let Z = t.useMemo(() => ({ onKeyDown: J, onPointerDown: q, onClick: q }), [J, q]), ee = t.useMemo(() => ({ onKeyDown: J, onPointerDown: Q, onMouseDown: Q, onClickCapture: X, onMouseDownCapture(e3) {
      X(), G(e3);
    }, onPointerDownCapture(e3) {
      X(), G(e3);
    }, onMouseUpCapture: X, onTouchEndCapture: X, onTouchMoveCapture: X }), [J, X, G, Q]);
    return t.useMemo(() => m ? { reference: Z, floating: ee, trigger: Z } : {}, [m, Z, ee]);
  }]);
}, 848344, (e) => {
  "use strict";
  var t = e.i(212789), n = e.i(114606), r = e.i(639306);
  e.i(765391);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class o {
    constructor() {
      this.pointerType = void 0, this.interactedInside = false, this.handler = void 0, this.blockMouseMove = true, this.performedPointerEventsMutation = false, this.pointerEventsScopeElement = null, this.pointerEventsReferenceElement = null, this.pointerEventsFloatingElement = null, this.restTimeoutPending = false, this.openChangeTimeout = new r.Timeout(), this.restTimeout = new r.Timeout(), this.handleCloseOptions = void 0;
    }
    static create() {
      return new o();
    }
    dispose = () => {
      this.openChangeTimeout.clear(), this.restTimeout.clear();
    };
    disposeEffect = () => this.dispose;
  }
  let i = /* @__PURE__ */ new WeakMap();
  function s(e2) {
    if (!e2.performedPointerEventsMutation) return;
    let t2 = e2.pointerEventsScopeElement;
    t2 && i.get(t2) === e2 && (e2.pointerEventsScopeElement?.style.removeProperty("pointer-events"), e2.pointerEventsReferenceElement?.style.removeProperty("pointer-events"), e2.pointerEventsFloatingElement?.style.removeProperty("pointer-events"), i.delete(t2)), e2.performedPointerEventsMutation = false, e2.pointerEventsScopeElement = null, e2.pointerEventsReferenceElement = null, e2.pointerEventsFloatingElement = null;
  }
  e.s(["applySafePolygonPointerEventsMutation", 0, function(e2, t2) {
    let { scopeElement: n2, referenceElement: r2, floatingElement: a2 } = t2, o2 = i.get(n2);
    o2 && o2 !== e2 && s(o2), s(e2), e2.performedPointerEventsMutation = true, e2.pointerEventsScopeElement = n2, e2.pointerEventsReferenceElement = r2, e2.pointerEventsFloatingElement = a2, i.set(n2, e2), n2.style.pointerEvents = "none", r2.style.pointerEvents = "auto", a2.style.pointerEvents = "auto";
  }, "clearSafePolygonPointerEventsMutation", 0, s, "useHoverInteractionSharedState", 0, function(e2) {
    let r2 = e2.context.dataRef.current, a2 = (0, n.useRefWithInit)(() => r2.hoverInteractionState ?? o.create()).current;
    return r2.hoverInteractionState || (r2.hoverInteractionState = a2), (0, t.useOnMount)(r2.hoverInteractionState.disposeEffect), r2.hoverInteractionState;
  }]);
}, 243428, 803904, 930856, 675932, 247814, 343990, 199848, 452341, 142470, 737286, (e) => {
  "use strict";
  var t = e.i(856757), n = e.i(403432), r = e.i(517124), a = e.i(703921), o = e.i(219710), i = e.i(424404), s = e.i(825696), l = e.i(880269), u = e.i(930296), c = e.i(296232), d = e.i(872191), f = e.i(635338), p = e.i(66769), g = e.i(848344), y = e.i(186475), h = e.i(765391), h = h;
  try {
    var M = "u" > typeof window ? window : e.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let w = { current: null };
  e.s(["useHoverReferenceInteraction", 0, function(e2, M2 = {}) {
    let { enabled: m2 = true, delay: v2 = 0, handleClose: E2 = null, mouseOnly: b2 = false, restMs: _2 = 0, move: S2 = true, triggerElementRef: k2 = w, externalTree: O2, isActiveTrigger: P2 = true, getHandleCloseContext: T2, isClosing: x2, shouldOpen: C2, guardStaleOpen: A2 = false } = M2, R2 = "rootStore" in e2 ? e2.rootStore : e2, { dataRef: I2, events: L2 } = R2.context, B2 = (0, d.useFloatingTree)(O2), N2 = (0, g.useHoverInteractionSharedState)(R2), j2 = t.useRef(false), D2 = (0, s.useValueAsRef)(E2), K2 = (0, s.useValueAsRef)(v2), F2 = (0, s.useValueAsRef)(_2), H2 = (0, s.useValueAsRef)(m2), W2 = (0, s.useValueAsRef)(C2), V2 = (0, s.useValueAsRef)(x2), $2 = (0, i.useStableCallback)(() => (0, y.isClickLikeOpenEvent)(I2.current.openEvent?.type, N2.interactedInside)), Y2 = (0, i.useStableCallback)(() => W2.current?.() !== false), U2 = (0, i.useStableCallback)((e3, t2, n2) => {
      let r2 = R2.context.triggerElements;
      return r2.hasElement(t2) ? !e3 || !(0, f.contains)(e3, t2) : !!(0, l.isElement)(n2) && r2.hasMatchingElement((e4) => (0, f.contains)(e4, n2)) && (!e3 || !(0, f.contains)(e3, n2));
    }), z2 = (0, i.useStableCallback)(() => {
      N2.handler && ((0, o.ownerDocument)(R2.select("domReferenceElement")).removeEventListener("mousemove", N2.handler), N2.handler = void 0);
    }), q2 = (0, i.useStableCallback)(() => {
      (0, g.clearSafePolygonPointerEventsMutation)(N2);
    });
    return P2 && (N2.handleCloseOptions = D2.current?.__options), t.useEffect(() => z2, [z2]), t.useEffect(() => {
      if (m2) return L2.on("openchange", e3), () => {
        L2.off("openchange", e3);
      };
      function e3(e4) {
        e4.open ? j2.current = false : (j2.current = e4.reason === c.REASONS.triggerHover, z2(), N2.openChangeTimeout.clear(), N2.restTimeout.clear(), N2.blockMouseMove = true, N2.restTimeoutPending = false);
      }
    }, [m2, L2, N2, z2]), t.useEffect(() => {
      if (!m2) return;
      function e3(t3, n3 = true) {
        let r2 = (0, y.getDelay)(K2.current, "close", N2.pointerType);
        r2 ? N2.openChangeTimeout.start(r2, () => {
          R2.setOpen(false, (0, u.createChangeEventDetails)(c.REASONS.triggerHover, t3)), B2?.events.emit("floating.closed", t3);
        }) : n3 && (N2.openChangeTimeout.clear(), R2.setOpen(false, (0, u.createChangeEventDetails)(c.REASONS.triggerHover, t3)), B2?.events.emit("floating.closed", t3));
      }
      let t2 = k2.current ?? (P2 ? R2.select("domReferenceElement") : null);
      if (!(0, l.isElement)(t2)) return;
      function n2(e4) {
        if (N2.openChangeTimeout.clear(), N2.blockMouseMove = false, b2 && !(0, p.isMouseLikePointerType)(N2.pointerType)) return;
        let t3 = (0, y.getRestMs)(F2.current), n3 = (0, y.getDelay)(K2.current, "open", N2.pointerType), r2 = (0, f.getTarget)(e4), a2 = e4.currentTarget ?? null, o2 = R2.select("domReferenceElement"), i3 = a2;
        if ((0, l.isElement)(r2) && !R2.context.triggerElements.hasElement(r2)) {
          for (let e5 of R2.context.triggerElements.elements()) if ((0, f.contains)(e5, r2)) {
            i3 = e5;
            break;
          }
        }
        (0, l.isElement)(a2) && (0, l.isElement)(o2) && !R2.context.triggerElements.hasElement(a2) && (0, f.contains)(a2, o2) && (i3 = o2);
        let s3 = null != i3 && U2(o2, i3, r2), d2 = R2.select("open"), g2 = V2.current?.() ?? "ending" === R2.select("transitionStatus"), h2 = !d2 && g2 && j2.current, M3 = !s3 && (0, l.isElement)(i3) && (0, l.isElement)(o2) && (0, f.contains)(o2, i3) && h2, w2 = t3 > 0 && !n3, m3 = !d2 || s3;
        if (s3 && (d2 || h2) || M3) {
          Y2() && R2.setOpen(true, (0, u.createChangeEventDetails)(c.REASONS.triggerHover, e4, i3));
          return;
        }
        !w2 && (n3 ? N2.openChangeTimeout.start(n3, () => {
          m3 && Y2() && R2.setOpen(true, (0, u.createChangeEventDetails)(c.REASONS.triggerHover, e4, i3));
        }) : m3 && Y2() && R2.setOpen(true, (0, u.createChangeEventDetails)(c.REASONS.triggerHover, e4, i3)));
      }
      function i2(t3) {
        if ($2()) return void q2();
        z2();
        let n3 = R2.select("domReferenceElement"), r2 = (0, o.ownerDocument)(n3);
        N2.restTimeout.clear(), N2.restTimeoutPending = false;
        let a2 = I2.current.floatingContext ?? T2?.();
        if (!(0, h.isTargetInsideEnabledTrigger)(t3.relatedTarget, R2.context.triggerElements)) {
          if (D2.current && a2) {
            R2.select("open") || N2.openChangeTimeout.clear();
            let n4 = k2.current;
            N2.handler = D2.current({ ...a2, tree: B2, x: t3.clientX, y: t3.clientY, onClose() {
              q2(), z2(), H2.current && !$2() && n4 === R2.select("domReferenceElement") && e3(t3, true);
            } }), r2.addEventListener("mousemove", N2.handler), N2.handler(t3);
            return;
          }
          "touch" === N2.pointerType && (0, f.contains)(R2.select("floatingElement"), t3.relatedTarget) || e3(t3);
        }
      }
      let s2 = A2 ? (0, r.addEventListener)(t2, "mouseout", function(e4) {
        (0, f.contains)(t2, e4.relatedTarget) || (N2.openChangeTimeout.clear(), N2.restTimeout.clear(), N2.restTimeoutPending = false);
      }) : void 0;
      return S2 ? (0, a.mergeCleanups)((0, r.addEventListener)(t2, "mousemove", n2, { once: true }), (0, r.addEventListener)(t2, "mouseenter", n2), (0, r.addEventListener)(t2, "mouseleave", i2), s2) : (0, a.mergeCleanups)((0, r.addEventListener)(t2, "mouseenter", n2), (0, r.addEventListener)(t2, "mouseleave", i2), s2);
    }, [z2, q2, I2, K2, R2, m2, D2, N2, P2, U2, $2, b2, S2, F2, k2, B2, H2, T2, V2, Y2, A2]), t.useMemo(() => {
      if (m2) return { onPointerDown: e3, onPointerEnter: e3, onMouseMove(e4) {
        let { nativeEvent: t2 } = e4, r2 = e4.currentTarget, a2 = R2.select("domReferenceElement"), o2 = R2.select("open"), i2 = U2(a2, r2, e4.target);
        if (b2 && !(0, p.isMouseLikePointerType)(N2.pointerType)) return;
        if (o2 && i2 && N2.handleCloseOptions?.blockPointerEvents) {
          let e5 = R2.select("floatingElement");
          if (e5) {
            let t3 = N2.handleCloseOptions?.getScope?.() ?? r2.ownerDocument.body;
            (0, g.applySafePolygonPointerEventsMutation)(N2, { scopeElement: t3, referenceElement: r2, floatingElement: e5 });
          }
        }
        let s2 = (0, y.getRestMs)(F2.current);
        function l2() {
          if (N2.restTimeoutPending = false, $2()) return;
          let e5 = R2.select("open");
          !N2.blockMouseMove && (!e5 || i2) && Y2() && R2.setOpen(true, (0, u.createChangeEventDetails)(c.REASONS.triggerHover, t2, r2));
        }
        (!o2 || i2) && 0 !== s2 && (!i2 && N2.restTimeoutPending && e4.movementX ** 2 + e4.movementY ** 2 < 2 || (N2.restTimeout.clear(), "touch" === N2.pointerType ? n.flushSync(() => {
          l2();
        }) : i2 && o2 ? l2() : (N2.restTimeoutPending = true, N2.restTimeout.start(s2, l2))));
      } };
      function e3(e4) {
        N2.pointerType = e4.pointerType;
      }
    }, [m2, N2, $2, U2, b2, R2, F2, Y2]);
  }], 243428);
  try {
    var m = "u" > typeof window ? window : e.g;
    m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[new m.Error().stack] = Object.assign({}, m._sentryModuleMetadata[new m.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let v = Math.min, E = Math.max, b = Math.round, _ = Math.floor, S = (e2) => ({ x: e2, y: e2 }), k = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function O(e2, t2) {
    return "function" == typeof e2 ? e2(t2) : e2;
  }
  function P(e2) {
    return e2.split("-")[0];
  }
  function T(e2) {
    return e2.split("-")[1];
  }
  function x(e2) {
    return "x" === e2 ? "y" : "x";
  }
  function C(e2) {
    return "y" === e2 ? "height" : "width";
  }
  function A(e2) {
    let t2 = e2[0];
    return "t" === t2 || "b" === t2 ? "y" : "x";
  }
  function R(e2) {
    return e2.includes("start") ? e2.replace("start", "end") : e2.replace("end", "start");
  }
  let I = ["left", "right"], L = ["right", "left"], B = ["top", "bottom"], N = ["bottom", "top"];
  function j(e2) {
    let t2 = P(e2);
    return k[t2] + e2.slice(t2.length);
  }
  function D(e2) {
    var t2, n2, r2, a2;
    return "number" != typeof e2 ? { top: null != (t2 = e2.top) ? t2 : 0, right: null != (n2 = e2.right) ? n2 : 0, bottom: null != (r2 = e2.bottom) ? r2 : 0, left: null != (a2 = e2.left) ? a2 : 0 } : { top: e2, right: e2, bottom: e2, left: e2 };
  }
  function K(e2) {
    let { x: t2, y: n2, width: r2, height: a2 } = e2;
    return { width: r2, height: a2, top: n2, left: t2, right: t2 + r2, bottom: n2 + a2, x: t2, y: n2 };
  }
  var F = e.i(479995), H = e.i(599607);
  try {
    var W = "u" > typeof window ? window : e.g;
    W._sentryModuleMetadata = W._sentryModuleMetadata || {}, W._sentryModuleMetadata[new W.Error().stack] = Object.assign({}, W._sentryModuleMetadata[new W.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function V(e2, t2, n2) {
    let r2, { reference: a2, floating: o2 } = e2, i2 = A(t2), s2 = x(A(t2)), l2 = C(s2), u2 = P(t2), c2 = a2.x + a2.width / 2 - o2.width / 2, d2 = a2.y + a2.height / 2 - o2.height / 2, f2 = a2[l2] / 2 - o2[l2] / 2;
    switch (u2) {
      case "top":
        r2 = { x: c2, y: a2.y - o2.height };
        break;
      case "bottom":
        r2 = { x: c2, y: a2.y + a2.height };
        break;
      case "right":
        r2 = { x: a2.x + a2.width, y: d2 };
        break;
      case "left":
        r2 = { x: a2.x - o2.width, y: d2 };
        break;
      default:
        r2 = { x: a2.x, y: a2.y };
    }
    let p2 = T(t2);
    return p2 && (r2[s2] += f2 * ("end" === p2 ? 1 : -1) * (n2 && "y" === i2 ? -1 : 1)), r2;
  }
  async function $(e2, t2) {
    var n2;
    void 0 === t2 && (t2 = {});
    let { x: r2, y: a2, platform: o2, rects: i2, elements: s2, strategy: l2 } = e2, { boundary: u2 = "clippingAncestors", rootBoundary: c2 = "viewport", elementContext: d2 = "floating", altBoundary: f2 = false, padding: p2 = 0 } = O(t2, e2), g2 = D(p2), y2 = s2[f2 ? "floating" === d2 ? "reference" : "floating" : d2], h2 = K(await o2.getClippingRect({ element: null == (n2 = await (null == o2.isElement ? void 0 : o2.isElement(y2))) || n2 ? y2 : y2.contextElement || await (null == o2.getDocumentElement ? void 0 : o2.getDocumentElement(s2.floating)), boundary: u2, rootBoundary: c2, strategy: l2 })), M2 = "floating" === d2 ? { x: r2, y: a2, width: i2.floating.width, height: i2.floating.height } : i2.reference, w2 = await (null == o2.getOffsetParent ? void 0 : o2.getOffsetParent(s2.floating)), m2 = await (null == o2.isElement ? void 0 : o2.isElement(w2)) && await (null == o2.getScale ? void 0 : o2.getScale(w2)) || { x: 1, y: 1 }, v2 = K(o2.convertOffsetParentRelativeRectToViewportRelativeRect ? await o2.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: s2, rect: M2, offsetParent: w2, strategy: l2 }) : M2);
    return { top: (h2.top - v2.top + g2.top) / m2.y, bottom: (v2.bottom - h2.bottom + g2.bottom) / m2.y, left: (h2.left - v2.left + g2.left) / m2.x, right: (v2.right - h2.right + g2.right) / m2.x };
  }
  let Y = async (e2, t2, n2) => {
    let { placement: r2 = "bottom", strategy: a2 = "absolute", middleware: o2 = [], platform: i2 } = n2, s2 = i2.detectOverflow ? i2 : { ...i2, detectOverflow: $ }, l2 = await (null == i2.isRTL ? void 0 : i2.isRTL(t2)), u2 = await i2.getElementRects({ reference: e2, floating: t2, strategy: a2 }), { x: c2, y: d2 } = V(u2, r2, l2), f2 = r2, p2 = 0, g2 = {};
    for (let n3 = 0; n3 < o2.length; n3++) {
      let y2 = o2[n3];
      if (!y2) continue;
      let { name: h2, fn: M2 } = y2, { x: w2, y: m2, data: v2, reset: E2 } = await M2({ x: c2, y: d2, initialPlacement: r2, placement: f2, strategy: a2, middlewareData: g2, rects: u2, platform: s2, elements: { reference: e2, floating: t2 } });
      c2 = null != w2 ? w2 : c2, d2 = null != m2 ? m2 : d2, g2[h2] = { ...g2[h2], ...v2 }, E2 && p2 < 50 && (p2++, "object" == typeof E2 && (E2.placement && (f2 = E2.placement), E2.rects && (u2 = true === E2.rects ? await i2.getElementRects({ reference: e2, floating: t2, strategy: a2 }) : E2.rects), { x: c2, y: d2 } = V(u2, f2, l2)), n3 = -1);
    }
    return { x: c2, y: d2, placement: f2, strategy: a2, middlewareData: g2 };
  }, U = /* @__PURE__ */ new Set(["left", "top"]);
  async function z(e2, t2) {
    let { placement: n2, platform: r2, elements: a2 } = e2, o2 = await (null == r2.isRTL ? void 0 : r2.isRTL(a2.floating)), i2 = P(n2), s2 = T(n2), l2 = "y" === A(n2), u2 = U.has(i2) ? -1 : 1, c2 = o2 && l2 ? -1 : 1, d2 = O(t2, e2), { mainAxis: f2, crossAxis: p2, alignmentAxis: g2 } = "number" == typeof d2 ? { mainAxis: d2, crossAxis: 0, alignmentAxis: null } : { mainAxis: d2.mainAxis || 0, crossAxis: d2.crossAxis || 0, alignmentAxis: d2.alignmentAxis };
    return s2 && "number" == typeof g2 && (p2 = "end" === s2 ? -1 * g2 : g2), l2 ? { x: p2 * c2, y: f2 * u2 } : { x: f2 * u2, y: p2 * c2 };
  }
  try {
    var q = "u" > typeof window ? window : e.g;
    q._sentryModuleMetadata = q._sentryModuleMetadata || {}, q._sentryModuleMetadata[new q.Error().stack] = Object.assign({}, q._sentryModuleMetadata[new q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function J(e2) {
    let t2 = (0, l.getComputedStyle)(e2), n2 = parseFloat(t2.width) || 0, r2 = parseFloat(t2.height) || 0, a2 = (0, l.isHTMLElement)(e2), o2 = a2 ? e2.offsetWidth : n2, i2 = a2 ? e2.offsetHeight : r2, s2 = b(n2) !== o2 || b(r2) !== i2;
    return s2 && (n2 = o2, r2 = i2), { width: n2, height: r2, $: s2 };
  }
  function X(e2) {
    return (0, l.isElement)(e2) ? e2 : e2.contextElement;
  }
  function G(e2) {
    let t2 = X(e2);
    if (!(0, l.isHTMLElement)(t2)) return S(1);
    let n2 = t2.getBoundingClientRect(), { width: r2, height: a2, $: o2 } = J(t2), i2 = (o2 ? b(n2.width) : n2.width) / r2, s2 = (o2 ? b(n2.height) : n2.height) / a2;
    return i2 && Number.isFinite(i2) || (i2 = 1), s2 && Number.isFinite(s2) || (s2 = 1), { x: i2, y: s2 };
  }
  let Q = S(0);
  function Z(e2) {
    let t2 = (0, l.getWindow)(e2);
    return (0, l.isWebKit)() && t2.visualViewport ? { x: t2.visualViewport.offsetLeft, y: t2.visualViewport.offsetTop } : Q;
  }
  function ee(e2, t2, n2, r2) {
    var a2;
    void 0 === t2 && (t2 = false), void 0 === n2 && (n2 = false);
    let o2 = e2.getBoundingClientRect(), i2 = X(e2), s2 = S(1);
    t2 && (r2 ? (0, l.isElement)(r2) && (s2 = G(r2)) : s2 = G(e2));
    let u2 = (void 0 === (a2 = n2) && (a2 = false), r2 && a2 && r2 === (0, l.getWindow)(i2)) ? Z(i2) : S(0), c2 = (o2.left + u2.x) / s2.x, d2 = (o2.top + u2.y) / s2.y, f2 = o2.width / s2.x, p2 = o2.height / s2.y;
    if (i2 && r2) {
      let e3 = (0, l.getWindow)(i2), t3 = (0, l.isElement)(r2) ? (0, l.getWindow)(r2) : r2, n3 = e3, a3 = (0, l.getFrameElement)(n3);
      for (; a3 && t3 !== n3; ) {
        let e4 = G(a3), t4 = a3.getBoundingClientRect(), r3 = (0, l.getComputedStyle)(a3), o3 = t4.left + (a3.clientLeft + parseFloat(r3.paddingLeft)) * e4.x, i3 = t4.top + (a3.clientTop + parseFloat(r3.paddingTop)) * e4.y;
        c2 *= e4.x, d2 *= e4.y, f2 *= e4.x, p2 *= e4.y, c2 += o3, d2 += i3, n3 = (0, l.getWindow)(a3), a3 = (0, l.getFrameElement)(n3);
      }
    }
    return K({ width: f2, height: p2, x: c2, y: d2 });
  }
  function et(e2, t2) {
    let n2 = (0, l.getNodeScroll)(e2).scrollLeft;
    return t2 ? t2.left + n2 : ee((0, l.getDocumentElement)(e2)).left + n2;
  }
  function en(e2, t2) {
    let n2 = e2.getBoundingClientRect();
    return { x: n2.left + t2.scrollLeft - et(e2, n2), y: n2.top + t2.scrollTop };
  }
  function er(e2, t2, n2) {
    var r2;
    let a2;
    if ("viewport" === t2 || "layoutViewport" === t2) a2 = (function(e3, t3, n3) {
      void 0 === n3 && (n3 = "viewport");
      let r3 = "layoutViewport" === n3, a3 = (0, l.getWindow)(e3), o2 = (0, l.getDocumentElement)(e3), i2 = a3.visualViewport, s2 = o2.clientWidth, u2 = o2.clientHeight, c2 = 0, d2 = 0;
      if (i2) {
        let e4 = !(0, l.isWebKit)() || "fixed" === t3;
        r3 ? e4 || (c2 = -i2.offsetLeft, d2 = -i2.offsetTop) : (s2 = i2.width, u2 = i2.height, e4 && (c2 = i2.offsetLeft, d2 = i2.offsetTop));
      }
      if (0 >= et(o2)) {
        let e4 = o2.ownerDocument, t4 = e4.body, n4 = getComputedStyle(t4), r4 = "CSS1Compat" === e4.compatMode && parseFloat(n4.marginLeft) + parseFloat(n4.marginRight) || 0, a4 = Math.abs(o2.clientWidth - t4.clientWidth - r4), i3 = "stable both-edges" === getComputedStyle(o2).scrollbarGutter ? a4 / 2 : a4;
        i3 <= 25 && (s2 -= i3);
      }
      return { width: s2, height: u2, x: c2, y: d2 };
    })(e2, n2, t2);
    else if ("document" === t2) {
      let t3, n3, o2, i2, s2, u2;
      r2 = (0, l.getDocumentElement)(e2), t3 = (0, l.getNodeScroll)(r2), n3 = r2.ownerDocument.body, o2 = E(r2.scrollWidth, r2.clientWidth, n3.scrollWidth, n3.clientWidth), i2 = E(r2.scrollHeight, r2.clientHeight, n3.scrollHeight, n3.clientHeight), s2 = -t3.scrollLeft + et(r2), u2 = -t3.scrollTop, "rtl" === (0, l.getComputedStyle)(n3).direction && (s2 += E(r2.clientWidth, n3.clientWidth) - o2), a2 = { width: o2, height: i2, x: s2, y: u2 };
    } else if ((0, l.isElement)(t2)) {
      let e3, r3, o2, i2, s2, l2;
      r3 = (e3 = ee(t2, true, "fixed" === n2)).top + t2.clientTop, o2 = e3.left + t2.clientLeft, i2 = G(t2), s2 = t2.clientWidth * i2.x, l2 = t2.clientHeight * i2.y, a2 = { width: s2, height: l2, x: o2 * i2.x, y: r3 * i2.y };
    } else {
      let n3 = Z(e2);
      a2 = { x: t2.x - n3.x, y: t2.y - n3.y, width: t2.width, height: t2.height };
    }
    return K(a2);
  }
  function ea(e2) {
    return "static" === (0, l.getComputedStyle)(e2).position;
  }
  function eo(e2, t2) {
    if (!(0, l.isHTMLElement)(e2) || "fixed" === (0, l.getComputedStyle)(e2).position) return null;
    if (t2) return t2(e2);
    let n2 = e2.offsetParent;
    return (0, l.getDocumentElement)(e2) === n2 && (n2 = n2.ownerDocument.body), n2;
  }
  function ei(e2, t2) {
    let n2 = (0, l.getWindow)(e2);
    if ((0, l.isTopLayer)(e2)) return n2;
    if (!(0, l.isHTMLElement)(e2)) {
      let t3 = (0, l.getParentNode)(e2);
      for (; t3 && !(0, l.isLastTraversableNode)(t3); ) {
        if ((0, l.isElement)(t3) && !ea(t3)) return t3;
        t3 = (0, l.getParentNode)(t3);
      }
      return n2;
    }
    let r2 = eo(e2, t2);
    for (; r2 && (0, l.isTableElement)(r2) && ea(r2); ) r2 = eo(r2, t2);
    return r2 && (0, l.isLastTraversableNode)(r2) && ea(r2) && !(0, l.isContainingBlock)(r2) ? n2 : r2 || (0, l.getContainingBlock)(e2) || n2;
  }
  let es = async function(e2) {
    let t2 = this.getOffsetParent || ei, n2 = this.getDimensions, r2 = await n2(e2.floating);
    return { reference: (function(e3, t3, n3) {
      let r3 = (0, l.isHTMLElement)(t3), a2 = (0, l.getDocumentElement)(t3), o2 = "fixed" === n3, i2 = ee(e3, true, o2, t3), s2 = { scrollLeft: 0, scrollTop: 0 }, u2 = S(0);
      if ((r3 || !o2) && (("body" !== (0, l.getNodeName)(t3) || (0, l.isOverflowElement)(a2)) && (s2 = (0, l.getNodeScroll)(t3)), r3)) {
        let e4 = ee(t3, true, o2, t3);
        u2.x = e4.x + t3.clientLeft, u2.y = e4.y + t3.clientTop;
      }
      !r3 && a2 && (u2.x = et(a2));
      let c2 = !a2 || r3 || o2 ? S(0) : en(a2, s2);
      return { x: i2.left + s2.scrollLeft - u2.x - c2.x, y: i2.top + s2.scrollTop - u2.y - c2.y, width: i2.width, height: i2.height };
    })(e2.reference, await t2(e2.floating), e2.strategy), floating: { x: 0, y: 0, width: r2.width, height: r2.height } };
  }, el = { convertOffsetParentRelativeRectToViewportRelativeRect: function(e2) {
    let { elements: t2, rect: n2, offsetParent: r2, strategy: a2 } = e2, o2 = "fixed" === a2, i2 = (0, l.getDocumentElement)(r2), s2 = !!t2 && (0, l.isTopLayer)(t2.floating);
    if (r2 === i2 || s2 && o2) return n2;
    let u2 = { scrollLeft: 0, scrollTop: 0 }, c2 = S(1), d2 = S(0), f2 = (0, l.isHTMLElement)(r2);
    if ((f2 || !o2) && (("body" !== (0, l.getNodeName)(r2) || (0, l.isOverflowElement)(i2)) && (u2 = (0, l.getNodeScroll)(r2)), f2)) {
      let e3 = ee(r2);
      c2 = G(r2), d2.x = e3.x + r2.clientLeft, d2.y = e3.y + r2.clientTop;
    }
    let p2 = !i2 || f2 || o2 ? S(0) : en(i2, u2);
    return { width: n2.width * c2.x, height: n2.height * c2.y, x: n2.x * c2.x - u2.scrollLeft * c2.x + d2.x + p2.x, y: n2.y * c2.y - u2.scrollTop * c2.y + d2.y + p2.y };
  }, getDocumentElement: l.getDocumentElement, getClippingRect: function(e2) {
    let { element: t2, boundary: n2, rootBoundary: r2, strategy: a2 } = e2, o2 = [..."clippingAncestors" === n2 ? (0, l.isTopLayer)(t2) ? [] : (function(e3, t3) {
      let n3 = t3.get(e3);
      if (n3) return n3;
      let r3 = (0, l.getOverflowAncestors)(e3, [], false).filter((e4) => (0, l.isElement)(e4) && "body" !== (0, l.getNodeName)(e4)), a3 = null, o3 = "fixed" === (0, l.getComputedStyle)(e3).position, i3 = o3 ? (0, l.getParentNode)(e3) : e3;
      for (; (0, l.isElement)(i3) && !(0, l.isLastTraversableNode)(i3); ) {
        let e4 = (0, l.getComputedStyle)(i3), t4 = (0, l.isContainingBlock)(i3), n4 = a3 ? a3.position : o3 ? "fixed" : "";
        t4 || "fixed" !== n4 && ("absolute" !== n4 || "static" !== e4.position) ? a3 = e4 : r3 = r3.filter((e5) => e5 !== i3), i3 = (0, l.getParentNode)(i3);
      }
      return t3.set(e3, r3), r3;
    })(t2, this._c) : [].concat(n2), r2], i2 = er(t2, o2[0], a2), s2 = i2.top, u2 = i2.right, c2 = i2.bottom, d2 = i2.left;
    for (let e3 = 1; e3 < o2.length; e3++) {
      let n3 = er(t2, o2[e3], a2);
      s2 = E(n3.top, s2), u2 = v(n3.right, u2), c2 = v(n3.bottom, c2), d2 = E(n3.left, d2);
    }
    return { width: u2 - d2, height: c2 - s2, x: d2, y: s2 };
  }, getOffsetParent: ei, getElementRects: es, getClientRects: function(e2) {
    return e2.getClientRects ? Array.from(e2.getClientRects()) : [];
  }, getDimensions: function(e2) {
    let { width: t2, height: n2 } = J(e2);
    return { width: t2, height: n2 };
  }, getScale: G, isElement: l.isElement, isRTL: function(e2) {
    return "rtl" === (0, l.getComputedStyle)(e2).direction;
  } };
  function eu(e2, t2) {
    return e2.x === t2.x && e2.y === t2.y && e2.width === t2.width && e2.height === t2.height;
  }
  function ec(e2, t2, n2, r2) {
    let a2;
    void 0 === r2 && (r2 = {});
    let { ancestorScroll: o2 = true, ancestorResize: i2 = true, elementResize: s2 = "function" == typeof ResizeObserver, layoutShift: u2 = "function" == typeof IntersectionObserver, animationFrame: c2 = false } = r2, d2 = X(e2), f2 = o2 || i2 ? [...d2 ? (0, l.getOverflowAncestors)(d2) : [], ...t2 ? (0, l.getOverflowAncestors)(t2) : []] : [];
    f2.forEach((e3) => {
      o2 && e3.addEventListener("scroll", n2), i2 && e3.addEventListener("resize", n2);
    });
    let p2 = d2 && u2 ? (function(e3, t3, n3) {
      let r3, a3 = null, o3 = (0, l.getDocumentElement)(e3);
      function i3() {
        var e4;
        clearTimeout(r3), null == (e4 = a3) || e4.disconnect(), a3 = null;
      }
      function s3(n4, l2) {
        void 0 === n4 && (n4 = false), void 0 === l2 && (l2 = 1), i3();
        let u4 = e3.getBoundingClientRect(), { left: c4, top: d3, width: f3, height: p3 } = u4;
        if (n4 || t3(), !f3 || !p3) return;
        let g3 = { rootMargin: -_(d3) + "px " + -_(o3.clientWidth - (c4 + f3)) + "px " + -_(o3.clientHeight - (d3 + p3)) + "px " + -_(c4) + "px", threshold: E(0, v(1, l2)) || 1 }, y3 = true;
        function h3(t4) {
          let n5 = t4[0].intersectionRatio;
          if (!eu(u4, e3.getBoundingClientRect())) return s3();
          if (n5 !== l2) {
            if (!y3) return s3();
            n5 ? s3(false, n5) : r3 = setTimeout(() => {
              s3(false, 1e-7);
            }, 1e3);
          }
          y3 = false;
        }
        try {
          a3 = new IntersectionObserver(h3, { ...g3, root: o3.ownerDocument });
        } catch (e4) {
          a3 = new IntersectionObserver(h3, g3);
        }
        a3.observe(e3);
      }
      let u3 = (0, l.getWindow)(e3), c3 = () => s3(n3);
      return u3.addEventListener("resize", c3), s3(true), () => {
        u3.removeEventListener("resize", c3), i3();
      };
    })(d2, n2, i2) : null, g2 = -1, y2 = null;
    s2 && (y2 = new ResizeObserver((e3) => {
      let [r3] = e3;
      r3 && r3.target === d2 && y2 && t2 && (y2.unobserve(t2), cancelAnimationFrame(g2), g2 = requestAnimationFrame(() => {
        var e4;
        null == (e4 = y2) || e4.observe(t2);
      })), n2();
    }), d2 && !c2 && y2.observe(d2), t2 && y2.observe(t2));
    let h2 = c2 ? ee(e2) : null;
    return c2 && (function t3() {
      let r3 = ee(e2);
      h2 && !eu(h2, r3) && n2(), h2 = r3, a2 = requestAnimationFrame(t3);
    })(), n2(), () => {
      var e3;
      f2.forEach((e4) => {
        o2 && e4.removeEventListener("scroll", n2), i2 && e4.removeEventListener("resize", n2);
      }), null == p2 || p2(), null == (e3 = y2) || e3.disconnect(), y2 = null, c2 && cancelAnimationFrame(a2);
    };
  }
  try {
    var ed = "u" > typeof window ? window : e.g;
    ed._sentryModuleMetadata = ed._sentryModuleMetadata || {}, ed._sentryModuleMetadata[new ed.Error().stack] = Object.assign({}, ed._sentryModuleMetadata[new ed.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var ef = "u" > typeof document ? t.useLayoutEffect : function() {
  };
  function ep(e2, t2) {
    let n2, r2, a2;
    if (e2 === t2) return true;
    if (typeof e2 != typeof t2) return false;
    if ("function" == typeof e2 && e2.toString() === t2.toString()) return true;
    if (e2 && t2 && "object" == typeof e2) {
      if (Array.isArray(e2)) {
        if ((n2 = e2.length) !== t2.length) return false;
        for (r2 = n2; 0 != r2--; ) if (!ep(e2[r2], t2[r2])) return false;
        return true;
      }
      if ((n2 = (a2 = Object.keys(e2)).length) !== Object.keys(t2).length) return false;
      for (r2 = n2; 0 != r2--; ) if (!{}.hasOwnProperty.call(t2, a2[r2])) return false;
      for (r2 = n2; 0 != r2--; ) {
        let n3 = a2[r2];
        if (("_owner" !== n3 || !e2.$$typeof) && !ep(e2[n3], t2[n3])) return false;
      }
      return true;
    }
    return e2 != e2 && t2 != t2;
  }
  function eg(e2) {
    return "u" < typeof window ? 1 : (e2.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function ey(e2, t2) {
    let n2 = eg(e2);
    return Math.round(t2 * n2) / n2;
  }
  function eh(e2) {
    let n2 = t.useRef(e2);
    return ef(() => {
      n2.current = e2;
    }), n2;
  }
  var eM = e.i(497073), ew = e.i(114606), em = e.i(521703), ev = e.i(397393);
  try {
    var eE = "u" > typeof window ? window : e.g;
    eE._sentryModuleMetadata = eE._sentryModuleMetadata || {}, eE._sentryModuleMetadata[new eE.Error().stack] = Object.assign({}, eE._sentryModuleMetadata[new eE.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function eb(e2) {
    let { open: t2 = false, onOpenChange: n2, elements: r2 = {} } = e2, a2 = (0, eM.useId)(), o2 = null != (0, d.useFloatingParentNodeId)(), i2 = (0, ew.useRefWithInit)(() => new ev.FloatingRootStore({ open: t2, transitionStatus: void 0, onOpenChange: n2, referenceElement: r2.reference ?? null, floatingElement: r2.floating ?? null, triggerElements: new em.PopupTriggerMap(), floatingId: a2, syncOnly: false, nested: o2 })).current;
    return (0, H.useIsoLayoutEffect)(() => {
      let e3 = { open: t2, floatingId: a2 };
      void 0 !== r2.reference && (e3.referenceElement = r2.reference, e3.domReferenceElement = (0, l.isElement)(r2.reference) ? r2.reference : null), void 0 !== r2.floating && (e3.floatingElement = r2.floating), i2.update(e3);
    }, [t2, a2, r2.reference, r2.floating, i2]), i2.context.onOpenChange = n2, i2.context.nested = o2, i2;
  }
  e.s(["useFloatingRootContext", 0, eb], 803904);
  try {
    var e_ = "u" > typeof window ? window : e.g;
    e_._sentryModuleMetadata = e_._sentryModuleMetadata || {}, e_._sentryModuleMetadata[new e_.Error().stack] = Object.assign({}, e_._sentryModuleMetadata[new e_.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function eS(e2) {
    return ek(e2, e2.rootContext);
  }
  function ek(e2, r2) {
    let { nodeId: a2, externalTree: o2 } = e2, i2 = r2.useState("referenceElement"), s2 = r2.useState("floatingElement"), u2 = r2.useState("domReferenceElement"), c2 = r2.useState("open"), f2 = r2.useState("floatingId"), [p2, g2] = t.useState(null), [y2, h2] = t.useState(void 0), [M2, w2] = t.useState(void 0), m2 = t.useRef(null), v2 = (0, d.useFloatingTree)(o2), E2 = t.useMemo(() => ({ reference: i2, floating: s2, domReference: u2 }), [i2, s2, u2]), b2 = (function(e3) {
      void 0 === e3 && (e3 = {});
      let { placement: r3 = "bottom", strategy: a3 = "absolute", middleware: o3 = [], platform: i3, elements: { reference: s3, floating: l2 } = {}, transform: u3 = true, whileElementsMounted: c3, open: d2 } = e3, [f3, p3] = t.useState({ x: 0, y: 0, strategy: a3, placement: r3, middlewareData: {}, isPositioned: false }), [g3, y3] = t.useState(o3);
      ep(g3, o3) || y3(o3);
      let [h3, M3] = t.useState(null), [w3, m3] = t.useState(null), v3 = t.useCallback((e4) => {
        e4 !== S3.current && (S3.current = e4, M3(e4));
      }, []), E3 = t.useCallback((e4) => {
        e4 !== k3.current && (k3.current = e4, m3(e4));
      }, []), b3 = s3 || h3, _3 = l2 || w3, S3 = t.useRef(null), k3 = t.useRef(null), O3 = t.useRef(f3), P3 = null != c3, T3 = eh(c3), x3 = eh(i3), C3 = eh(d2), A2 = t.useCallback(() => {
        var e4, t2;
        let o4, i4, s4;
        if (!S3.current || !k3.current) return;
        let l3 = { placement: r3, strategy: a3, middleware: g3 };
        x3.current && (l3.platform = x3.current), (e4 = S3.current, t2 = k3.current, o4 = /* @__PURE__ */ new Map(), i4 = null != l3 ? l3 : {}, s4 = { ...el, ...i4.platform, _c: o4 }, Y(e4, t2, { ...i4, platform: s4 })).then((e5) => {
          let t3 = { ...e5, isPositioned: false !== C3.current };
          R2.current && !ep(O3.current, t3) && (O3.current = t3, n.flushSync(() => {
            p3(t3);
          }));
        });
      }, [g3, r3, a3, x3, C3]);
      ef(() => {
        false === d2 && O3.current.isPositioned && (O3.current.isPositioned = false, p3((e4) => ({ ...e4, isPositioned: false })));
      }, [d2]);
      let R2 = t.useRef(false);
      ef(() => (R2.current = true, () => {
        R2.current = false;
      }), []), ef(() => {
        if (b3 && (S3.current = b3), _3 && (k3.current = _3), b3 && _3) {
          if (T3.current) return T3.current(b3, _3, A2);
          A2();
        }
      }, [b3, _3, A2, T3, P3]);
      let I2 = t.useMemo(() => ({ reference: S3, floating: k3, setReference: v3, setFloating: E3 }), [v3, E3]), L2 = t.useMemo(() => ({ reference: b3, floating: _3 }), [b3, _3]), B2 = t.useMemo(() => {
        let e4 = { position: a3, left: 0, top: 0 };
        if (!L2.floating) return e4;
        let t2 = ey(L2.floating, f3.x), n2 = ey(L2.floating, f3.y);
        return u3 ? { ...e4, transform: "translate(" + t2 + "px, " + n2 + "px)", ...eg(L2.floating) >= 1.5 && { willChange: "transform" } } : { position: a3, left: t2, top: n2 };
      }, [a3, u3, L2.floating, f3.x, f3.y]);
      return t.useMemo(() => ({ ...f3, update: A2, refs: I2, elements: L2, floatingStyles: B2 }), [f3, A2, I2, L2, B2]);
    })({ ...e2, elements: { ...E2, ...p2 && { reference: p2 } } }), _2 = (0, l.isElement)(y2) ? y2 : null, S2 = void 0 === M2 ? r2.state.floatingElement : M2;
    r2.useSyncedValue("referenceElement", y2 ?? null), r2.useSyncedValue("domReferenceElement", void 0 === y2 ? u2 : _2), r2.useSyncedValue("floatingElement", S2);
    let k2 = t.useCallback((e3) => {
      let t2 = (0, l.isElement)(e3) ? { getBoundingClientRect: () => e3.getBoundingClientRect(), getClientRects: () => e3.getClientRects(), contextElement: e3 } : e3;
      g2(t2), b2.refs.setReference(t2);
    }, [b2.refs]), O2 = t.useCallback((e3) => {
      ((0, l.isElement)(e3) || null === e3) && (m2.current = e3, h2(e3)), ((0, l.isElement)(b2.refs.reference.current) || null === b2.refs.reference.current || null !== e3 && !(0, l.isElement)(e3)) && b2.refs.setReference(e3);
    }, [b2.refs, h2]), P2 = t.useCallback((e3) => {
      w2(e3), b2.refs.setFloating(e3);
    }, [b2.refs]), T2 = t.useMemo(() => ({ ...b2.refs, setReference: O2, setFloating: P2, setPositionReference: k2, domReference: m2 }), [b2.refs, O2, P2, k2]), x2 = t.useMemo(() => ({ ...b2.elements, domReference: u2 }), [b2.elements, u2]), C2 = t.useMemo(() => ({ ...b2, dataRef: r2.context.dataRef, open: c2, onOpenChange: r2.setOpen, events: r2.context.events, floatingId: f2, refs: T2, elements: x2, nodeId: a2, rootStore: r2 }), [b2, T2, x2, a2, r2, c2, f2]);
    return (0, H.useIsoLayoutEffect)(() => {
      u2 && (m2.current = u2);
    }, [u2]), (0, H.useIsoLayoutEffect)(() => {
      r2.context.dataRef.current.floatingContext = C2;
      let e3 = v2?.nodesRef.current.find((e4) => e4.id === a2);
      e3 && (e3.context = C2);
    }), t.useMemo(() => ({ ...b2, context: C2, refs: T2, elements: x2, rootStore: r2 }), [b2, T2, x2, C2, r2]);
  }
  e.s(["useBaseUIFloating", 0, eS, "useFloating", 0, function(e2 = {}) {
    let t2 = eb(e2), n2 = e2.rootContext || t2;
    return ek(e2, n2);
  }], 930856);
  try {
    var eO = "u" > typeof window ? window : e.g;
    eO._sentryModuleMetadata = eO._sentryModuleMetadata || {}, eO._sentryModuleMetadata[new eO.Error().stack] = Object.assign({}, eO._sentryModuleMetadata[new eO.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let eP = t.createContext(void 0);
  function eT() {
    let e2 = t.useContext(eP);
    return e2?.direction ?? "ltr";
  }
  e.s(["useDirection", 0, eT], 675932);
  try {
    var ex = "u" > typeof window ? window : e.g;
    ex._sentryModuleMetadata = ex._sentryModuleMetadata || {}, ex._sentryModuleMetadata[new ex.Error().stack] = Object.assign({}, ex._sentryModuleMetadata[new ex.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var eC = "u" > typeof window ? window : e.g;
    eC._sentryModuleMetadata = eC._sentryModuleMetadata || {}, eC._sentryModuleMetadata[new eC.Error().stack] = Object.assign({}, eC._sentryModuleMetadata[new eC.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let eA = { name: "hide", async fn(e2) {
    let { width: t2, height: n2, x: r2, y: a2 } = e2.rects.reference, o2 = await e2.platform.detectOverflow(e2, { elementContext: "reference" });
    return { data: { referenceHidden: o2.top - n2 >= 0 || o2.right - t2 >= 0 || o2.bottom - n2 >= 0 || o2.left - t2 >= 0 || 0 === t2 && 0 === n2 && 0 === r2 && 0 === a2 } };
  } };
  try {
    var eR = "u" > typeof window ? window : e.g;
    eR._sentryModuleMetadata = eR._sentryModuleMetadata || {}, eR._sentryModuleMetadata[new eR.Error().stack] = Object.assign({}, eR._sentryModuleMetadata[new eR.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let eI = { sideX: "left", sideY: "top" };
  try {
    var eL = "u" > typeof window ? window : e.g;
    eL._sentryModuleMetadata = eL._sentryModuleMetadata || {}, eL._sentryModuleMetadata[new eL.Error().stack] = Object.assign({}, eL._sentryModuleMetadata[new eL.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let eB = "--available-width", eN = "--available-height";
  function ej(e2, t2, n2) {
    let r2 = "inline-start" === e2 || "inline-end" === e2;
    return { top: "top", right: r2 ? n2 ? "inline-start" : "inline-end" : "right", bottom: "bottom", left: r2 ? n2 ? "inline-end" : "inline-start" : "left" }[t2];
  }
  function eD(e2, t2, n2) {
    let { rects: r2, placement: a2 } = e2;
    return { side: ej(t2, P(a2), n2), align: T(a2) || "center", anchor: { width: r2.reference.width, height: r2.reference.height }, positioner: { width: r2.floating.width, height: r2.floating.height } };
  }
  function eK(e2, n2) {
    var r2, a2, l2, u2, c2, d2, f2, p2, g2, y2, h2, M2, w2, m2;
    let b2, _2, S2, k2, { anchor: K2, positionMethod: W2 = "absolute", side: V2 = "bottom", sideOffset: $2 = 0, align: Y2 = "center", alignOffset: q2 = 0, collisionBoundary: J2, collisionPadding: X2 = 5, sticky: G2 = false, arrowPadding: Q2 = 5, disableAnchorTracking: Z2 = false, inline: ee2, keepMounted: et2 = false, floatingRootContext: en2, mounted: er2, collisionAvoidance: ea2, shift: eo2, nodeId: ei2, adaptiveOrigin: es2, lazyFlip: el2 = false, externalTree: eu2 } = e2, [ed2, ef2] = t.useState(null);
    er2 || null === ed2 || ef2(null);
    let ep2 = ea2.side || "flip", eg2 = ea2.align || "flip", ey2 = ea2.fallbackAxisSide || "end", eh2 = eo2?.crossAxis ?? false, eM2 = eo2?.rootBoundary, ew2 = "function" == typeof K2 ? K2 : void 0, em2 = (0, i.useStableCallback)(ew2), ev2 = ew2 ? em2 : K2, eE2 = (0, s.useValueAsRef)(K2), eb2 = (0, s.useValueAsRef)(er2), e_2 = "rtl" === eT(), eS2 = ed2 || { top: "top", right: "right", bottom: "bottom", left: "left", "inline-end": e_2 ? "left" : "right", "inline-start": e_2 ? "right" : "left" }[V2], ek2 = "center" === Y2 ? eS2 : `${eS2}-${Y2}`, eO2 = X2;
    "number" == typeof eO2 ? eO2 = { top: eO2, right: eO2, bottom: eO2, left: eO2 } : eO2 && (eO2 = { top: eO2.top || 0, right: eO2.right || 0, bottom: eO2.bottom || 0, left: eO2.left || 0 });
    let eP2 = +("bottom" === V2), ex2 = +("top" === V2), eC2 = +("right" === V2), eR2 = +("left" === V2), eL2 = { boundary: "clipping-ancestors" === J2 ? "clippingAncestors" : J2, padding: eO2 }, eK2 = t.useRef(null), eH2 = (0, s.useValueAsRef)($2), eW2 = (0, s.useValueAsRef)(q2), eV2 = [];
    ee2 && eV2.push(ee2), eV2.push((r2 = (e10) => {
      let t2 = eD(e10, V2, e_2), n3 = "function" == typeof eH2.current ? eH2.current(t2) : eH2.current, r3 = "function" == typeof eW2.current ? eW2.current(t2) : eW2.current;
      return { mainAxis: n3, crossAxis: r3, alignmentAxis: r3 };
    }, a2 = ["function" != typeof $2 ? $2 : 0, "function" != typeof q2 ? q2 : 0, e_2, V2], void 0 === (l2 = r2) && (l2 = 0), { name: (b2 = { name: "offset", options: l2, async fn(e10) {
      var t2, n3;
      let { x: r3, y: a3, placement: o2, middlewareData: i2 } = e10, s2 = await z(e10, l2);
      return o2 === (null == (t2 = i2.offset) ? void 0 : t2.placement) && null != (n3 = i2.arrow) && n3.alignmentOffset ? {} : { x: r3 + s2.x, y: a3 + s2.y, data: { ...s2, placement: o2 } };
    } }).name, fn: b2.fn, options: [r2, a2] }));
    let e$2 = "none" === eg2 && "shift" !== ep2, eY2 = !e$2 && (G2 || eh2 || "shift" === ep2), eU2 = "none" === ep2 ? null : { name: (_2 = { name: "flip", options: c2 = u2 = { ...eL2, padding: { top: eO2.top + 1 + eP2, right: eO2.right + 1 + eR2, bottom: eO2.bottom + 1 + ex2, left: eO2.left + 1 + eC2 }, mainAxis: !eh2 && "flip" === ep2, crossAxis: "flip" === eg2 && "alignment", fallbackAxisSideDirection: ey2 }, async fn(e10) {
      var t2, n3, r3, a3, o2, i2, s2, l3;
      let u3, d3, f3, { placement: p3, middlewareData: g3, rects: y3, initialPlacement: h3, platform: M3, elements: w3 } = e10, { mainAxis: m3 = true, crossAxis: v2 = true, fallbackPlacements: E2, fallbackStrategy: b3 = "bestFit", fallbackAxisSideDirection: _3 = "none", flipAlignment: S3 = true, ...k3 } = O(c2, e10);
      if (null != (t2 = g3.arrow) && t2.alignmentOffset) return {};
      let D2 = P(p3), K3 = A(h3), F2 = P(h3) === h3, H2 = await (null == M3.isRTL ? void 0 : M3.isRTL(w3.floating)), W3 = E2 || (F2 || !S3 ? [j(h3)] : (u3 = j(h3), [R(h3), u3, R(u3)])), V3 = "none" !== _3;
      !E2 && V3 && W3.push(...(d3 = T(h3), f3 = (function(e11, t3, n4) {
        switch (e11) {
          case "top":
          case "bottom":
            if (n4) return t3 ? L : I;
            return t3 ? I : L;
          case "left":
          case "right":
            return t3 ? B : N;
          default:
            return [];
        }
      })(P(h3), "start" === _3, H2), d3 && (f3 = f3.map((e11) => e11 + "-" + d3), S3 && (f3 = f3.concat(f3.map(R)))), f3));
      let $3 = [h3, ...W3], Y3 = await M3.detectOverflow(e10, k3), U2 = [], z2 = (null == (n3 = g3.flip) ? void 0 : n3.overflows) || [];
      if (m3 && U2.push(Y3[D2]), v2) {
        let e11, t3, n4, r4, a4 = (i2 = p3, s2 = y3, void 0 === (l3 = H2) && (l3 = false), e11 = T(i2), n4 = C(t3 = x(A(i2))), r4 = "x" === t3 ? e11 === (l3 ? "end" : "start") ? "right" : "left" : "start" === e11 ? "bottom" : "top", s2.reference[n4] > s2.floating[n4] && (r4 = j(r4)), [r4, j(r4)]);
        U2.push(Y3[a4[0]], Y3[a4[1]]);
      }
      if (z2 = [...z2, { placement: p3, overflows: U2 }], !U2.every((e11) => e11 <= 0)) {
        let e11 = ((null == (r3 = g3.flip) ? void 0 : r3.index) || 0) + 1, t3 = $3[e11];
        if (t3 && ("alignment" !== v2 || K3 === A(t3) || z2.every((e12) => A(e12.placement) !== K3 || e12.overflows[0] > 0))) return { data: { index: e11, overflows: z2 }, reset: { placement: t3 } };
        let n4 = null == (a3 = z2.filter((e12) => e12.overflows[0] <= 0).sort((e12, t4) => e12.overflows[1] - t4.overflows[1])[0]) ? void 0 : a3.placement;
        if (!n4) switch (b3) {
          case "bestFit": {
            let e12 = null == (o2 = z2.filter((e13) => {
              if (V3) {
                let t4 = A(e13.placement);
                return t4 === K3 || "y" === t4;
              }
              return true;
            }).map((e13) => [e13.placement, e13.overflows.filter((e14) => e14 > 0).reduce((e14, t4) => e14 + t4, 0)]).sort((e13, t4) => e13[1] - t4[1])[0]) ? void 0 : o2[0];
            e12 && (n4 = e12);
            break;
          }
          case "initialPlacement":
            n4 = h3;
        }
        if (p3 !== n4) return { reset: { placement: n4 } };
      }
      return {};
    } }).name, fn: _2.fn, options: [u2, void 0] }, ez2 = e$2 ? null : (p2 = { ...eL2, rootBoundary: eM2, mainAxis: "none" !== eg2, crossAxis: eY2, limiter: G2 || eh2 ? void 0 : { fn: (void 0 === (f2 = d2 = (e10) => {
      if (!eK2.current) return {};
      let { width: t2, height: n3 } = eK2.current.getBoundingClientRect(), r3 = A(P(e10.placement)), a3 = "y" === r3 ? eO2.left + eO2.right : eO2.top + eO2.bottom;
      return { offset: ("y" === r3 ? t2 : n3) / 2 + a3 / 2 };
    }) && (f2 = {}), { options: f2, fn(e10) {
      var t2, n3, r3, a3;
      let { x: o2, y: i2, placement: s2, rects: l3, middlewareData: u3 } = e10, { offset: c3 = 0, mainAxis: d3 = true, crossAxis: p3 = true } = O(f2, e10), g3 = { x: o2, y: i2 }, y3 = A(s2), h3 = x(y3), M3 = g3[h3], w3 = g3[y3], m3 = O(c3, e10), v2 = "number" == typeof m3 ? { mainAxis: m3, crossAxis: 0 } : { mainAxis: null != (t2 = m3.mainAxis) ? t2 : 0, crossAxis: null != (n3 = m3.crossAxis) ? n3 : 0 };
      if (d3) {
        let e11 = "y" === h3 ? "height" : "width", t3 = l3.reference[h3] - l3.floating[e11] + v2.mainAxis, n4 = l3.reference[h3] + l3.reference[e11] - v2.mainAxis;
        M3 < t3 ? M3 = t3 : M3 > n4 && (M3 = n4);
      }
      if (p3) {
        let e11 = "y" === h3 ? "width" : "height", t3 = U.has(P(s2)), n4 = l3.reference[y3] - l3.floating[e11] + (t3 && (null == (r3 = u3.offset) ? void 0 : r3[y3]) || 0) + (t3 ? 0 : v2.crossAxis), o3 = l3.reference[y3] + l3.reference[e11] + (t3 ? 0 : (null == (a3 = u3.offset) ? void 0 : a3[y3]) || 0) - (t3 ? v2.crossAxis : 0);
        w3 < n4 ? w3 = n4 : w3 > o3 && (w3 = o3);
      }
      return { [h3]: M3, [y3]: w3 };
    } }).fn, options: [d2, void 0] } }, g2 = [eL2, G2, eh2, eM2, eO2, eg2], void 0 === (y2 = p2) && (y2 = {}), { name: (S2 = { name: "shift", options: y2, async fn(e10) {
      let { x: t2, y: n3, placement: r3, platform: a3 } = e10, { mainAxis: o2 = true, crossAxis: i2 = false, limiter: s2 = { fn: (e11) => {
        let { x: t3, y: n4 } = e11;
        return { x: t3, y: n4 };
      } }, ...l3 } = O(y2, e10), u3 = { x: t2, y: n3 }, c3 = await a3.detectOverflow(e10, l3), d3 = A(r3), f3 = x(d3), p3 = u3[f3], g3 = u3[d3], h3 = (e11, t3) => E(t3 + c3["y" === e11 ? "top" : "left"], v(t3, t3 - c3["y" === e11 ? "bottom" : "right"]));
      o2 && (p3 = h3(f3, p3)), i2 && (g3 = h3(d3, g3));
      let M3 = s2.fn({ ...e10, [f3]: p3, [d3]: g3 });
      return { ...M3, data: { x: M3.x - t2, y: M3.y - n3, enabled: { [f3]: o2, [d3]: i2 } } };
    } }).name, fn: S2.fn, options: [p2, g2] });
    "shift" === ep2 || "shift" === eg2 || "center" === Y2 ? eV2.push(ez2, eU2) : eV2.push(eU2, ez2), eV2.push({ name: (k2 = { name: "size", options: M2 = h2 = { ...eL2, apply({ elements: { floating: e10 }, availableWidth: t2, availableHeight: n3, rects: r3 }) {
      if (!eb2.current) return;
      let a3 = e10.style;
      a3.setProperty(eB, `${t2}px`), a3.setProperty(eN, `${n3}px`);
      let o2 = (0, F.ownerWindow)(e10).devicePixelRatio || 1, { x: i2, y: s2, width: l3, height: u3 } = r3.reference, c3 = (Math.round((i2 + l3) * o2) - Math.round(i2 * o2)) / o2, d3 = (Math.round((s2 + u3) * o2) - Math.round(s2 * o2)) / o2;
      a3.setProperty("--anchor-width", `${c3}px`), a3.setProperty("--anchor-height", `${d3}px`);
    } }, async fn(e10) {
      let t2, n3, { placement: r3, rects: a3, platform: o2, elements: i2 } = e10, { apply: s2 = () => {
      }, ...l3 } = O(M2, e10), u3 = await o2.detectOverflow(e10, l3), c3 = P(r3), d3 = T(r3), f3 = "y" === A(r3), { width: p3, height: g3 } = a3.floating;
      "top" === c3 || "bottom" === c3 ? (t2 = c3, n3 = d3 === (await (null == o2.isRTL ? void 0 : o2.isRTL(i2.floating)) ? "start" : "end") ? "left" : "right") : (n3 = c3, t2 = "end" === d3 ? "top" : "bottom");
      let y3 = g3 - u3.top - u3.bottom, h3 = p3 - u3.left - u3.right, w3 = v(g3 - u3[t2], y3), m3 = v(p3 - u3[n3], h3), b3 = e10.middlewareData.shift, _3 = !b3, S3 = w3, k3 = m3;
      null != b3 && b3.enabled.x && (k3 = h3), null != b3 && b3.enabled.y && (S3 = y3), _3 && !d3 && (f3 ? k3 = p3 - 2 * E(u3.left, u3.right) : S3 = g3 - 2 * E(u3.top, u3.bottom)), await s2({ ...e10, availableWidth: k3, availableHeight: S3 });
      let x2 = await o2.getDimensions(i2.floating);
      return p3 !== x2.width || g3 !== x2.height ? { reset: { rects: true } } : {};
    } }).name, fn: k2.fn, options: [h2, void 0] }, (w2 = (e10) => ({ element: eK2.current || (0, o.ownerDocument)(e10.elements.floating).createElement("div"), padding: Q2, offsetParent: "floating" }), m2 = [Q2], { ...{ name: "arrow", options: w2, async fn(e10) {
      let { x: t2, y: n3, placement: r3, rects: a3, platform: o2, elements: i2, middlewareData: s2 } = e10, { element: l3, padding: u3 = 0, offsetParent: c3 = "real" } = O(w2, e10) || {};
      if (null == l3) return {};
      let d3 = D(u3), f3 = { x: t2, y: n3 }, p3 = x(A(r3)), g3 = C(p3), y3 = await o2.getDimensions(l3), h3 = "y" === p3, M3 = h3 ? "clientHeight" : "clientWidth", m3 = a3.reference[g3] + a3.reference[p3] - f3[p3] - a3.floating[g3], b3 = f3[p3] - a3.reference[p3], _3 = "real" === c3 ? await o2.getOffsetParent?.(l3) : i2.floating, S3 = i2.floating[M3] || a3.floating[g3];
      S3 && await o2.isElement?.(_3) || (S3 = i2.floating[M3] || a3.floating[g3]);
      let k3 = S3 / 2 - y3[g3] / 2 - 1, P2 = Math.min(d3[h3 ? "top" : "left"], k3), R2 = Math.min(d3[h3 ? "bottom" : "right"], k3), I2 = S3 - y3[g3] - R2, L2 = S3 / 2 - y3[g3] / 2 + (m3 / 2 - b3 / 2), B2 = E(P2, v(L2, I2)), N2 = !s2.arrow && null != T(r3) && L2 !== B2 && a3.reference[g3] / 2 - (L2 < P2 ? P2 : R2) - y3[g3] / 2 < 0, j2 = N2 ? L2 < P2 ? L2 - P2 : L2 - I2 : 0;
      return { [p3]: f3[p3] + j2, data: { [p3]: B2, centerOffset: L2 - B2 - j2, ...N2 && { alignmentOffset: j2 } }, reset: N2 };
    } }, options: [w2, m2] }), { name: "transformOrigin", fn(e10) {
      let { elements: t2, middlewareData: n3, placement: r3, rects: a3, y: o2 } = e10, i2 = P(r3), s2 = A(i2), l3 = eK2.current, u3 = n3.arrow?.x || 0, c3 = n3.arrow?.y || 0, d3 = l3?.clientWidth || 0, f3 = l3?.clientHeight || 0, p3 = u3 + d3 / 2, g3 = c3 + f3 / 2, y3 = Math.abs(n3.shift?.y || 0), h3 = a3.reference.height / 2, M3 = "function" == typeof $2 ? $2(eD(e10, V2, e_2)) : $2, w3 = y3 > M3, m3 = { top: `${p3}px calc(100% + ${M3}px)`, bottom: `${p3}px ${-M3}px`, left: `calc(100% + ${M3}px) ${g3}px`, right: `${-M3}px ${g3}px` }[i2], v2 = `${p3}px ${a3.reference.y + h3 - o2}px`;
      return t2.floating.style.setProperty("--transform-origin", eY2 && "y" === s2 && w3 ? v2 : m3), {};
    } }, eA, es2), (0, H.useIsoLayoutEffect)(() => {
      !er2 && en2 && en2.update({ referenceElement: null, floatingElement: null, domReferenceElement: null, positionReference: null });
    }, [er2, en2]);
    let eq2 = t.useMemo(() => ({ elementResize: !Z2 && "u" > typeof ResizeObserver, layoutShift: !Z2 && "u" > typeof IntersectionObserver }), [Z2]), { refs: eJ2, elements: eX2, x: eG2, y: eQ2, middlewareData: eZ2, update: e0, placement: e1, context: e5, isPositioned: e3, floatingStyles: e6 } = n2({ rootContext: en2, open: et2 ? er2 : void 0, placement: ek2, middleware: eV2, strategy: W2, whileElementsMounted: et2 ? void 0 : (...e10) => ec(...e10, eq2), nodeId: ei2, externalTree: eu2 }), { sideX: e9, sideY: e22 } = eZ2.adaptiveOrigin || eI, e7 = e3 ? W2 : "fixed", e4 = t.useMemo(() => {
      let e10;
      return (e10 = e3 ? es2 ? { position: e7, [e9]: eG2, [e22]: eQ2 } : { ...e6, position: e7 } : { position: e7, top: 0, left: 0 })[eB] = "100vw", e10[eN] = "100vh", e3 || (e10.opacity = 0), e10;
    }, [es2, e7, e9, eG2, e22, eQ2, e6, e3]), e8 = t.useRef(null);
    (0, H.useIsoLayoutEffect)(() => {
      if (!er2) return;
      let e10 = eE2.current, t2 = "function" == typeof e10 ? e10() : e10, n3 = (eF(t2) ? t2.current : t2) || null;
      n3 !== e8.current && (eJ2.setPositionReference(n3), e8.current = n3);
    }, [er2, eJ2, ev2, eE2]), t.useEffect(() => {
      if (!er2) return;
      let e10 = eE2.current;
      "function" != typeof e10 && eF(e10) && e10.current !== e8.current && (eJ2.setPositionReference(e10.current), e8.current = e10.current);
    }, [er2, eJ2, ev2, eE2]), t.useEffect(() => {
      if (et2 && er2 && eX2.reference && eX2.floating) return ec(eX2.reference, eX2.floating, e0, eq2);
    }, [et2, er2, eX2, e0, eq2]);
    let te = P(e1), tt = ej(V2, te, e_2), tn = T(e1) || "center", tr = !!eZ2.hide?.referenceHidden;
    (0, H.useIsoLayoutEffect)(() => {
      el2 && er2 && e3 && te !== eS2 && ef2(te);
    }, [el2, er2, e3, te, eS2]);
    let ta = t.useMemo(() => ({ position: "absolute", top: eZ2.arrow?.y, left: eZ2.arrow?.x }), [eZ2.arrow]), to = eZ2.arrow?.centerOffset !== 0;
    return t.useMemo(() => ({ positionerStyles: e4, arrowStyles: ta, arrowRef: eK2, arrowUncentered: to, side: tt, align: tn, physicalSide: te, anchorHidden: tr, refs: eJ2, context: e5, isPositioned: e3, update: e0 }), [e4, ta, eK2, to, tt, tn, te, tr, eJ2, e5, e3, e0]);
  }
  function eF(e2) {
    return null != e2 && "current" in e2;
  }
  e.s(["useAnchorPositioning", 0, function(e2) {
    return eK(e2, eS);
  }, "useAnchorPositioningWithHook", 0, eK], 247814);
  var eH = e.i(573568), eW = e.i(256777), eV = e.i(550034), e$ = e.i(867383);
  try {
    var eY = "u" > typeof window ? window : e.g;
    eY._sentryModuleMetadata = eY._sentryModuleMetadata || {}, eY._sentryModuleMetadata[new eY.Error().stack] = Object.assign({}, eY._sentryModuleMetadata[new eY.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function eU(e2) {
    return "starting" === e2 ? e$.DISABLED_TRANSITIONS_STYLE : eV.EMPTY_OBJECT;
  }
  e.s(["getDisabledMountTransitionStyles", 0, eU], 343990);
  try {
    var ez = "u" > typeof window ? window : e.g;
    ez._sentryModuleMetadata = ez._sentryModuleMetadata || {}, ez._sentryModuleMetadata[new ez.Error().stack] = Object.assign({}, ez._sentryModuleMetadata[new ez.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["usePositioner", 0, function(e2, t2, { styles: n2, transitionStatus: r2, props: a2, refs: o2, hidden: i2, inert: s2 = false }) {
    let l2 = { ...n2 };
    return s2 && (l2.pointerEvents = "none"), (0, eW.useRenderElement)("div", e2, { state: t2, ref: o2, props: [{ role: "presentation", hidden: i2, style: l2 }, eU(r2), a2], stateAttributesMapping: eH.popupStateMapping });
  }], 199848);
  var eq = e.i(639306), eJ = e.i(143882), eX = h, h = h;
  try {
    var eG = "u" > typeof window ? window : e.g;
    eG._sentryModuleMetadata = eG._sentryModuleMetadata || {}, eG._sentryModuleMetadata[new eG.Error().stack] = Object.assign({}, eG._sentryModuleMetadata[new eG.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useHoverFloatingInteraction", 0, function(e2, n2 = {}) {
    let { enabled: s2 = true, closeDelay: p2 = 0, nodeId: M2 } = n2, w2 = "rootStore" in e2 ? e2.rootStore : e2, m2 = w2.useState("open"), v2 = w2.useState("floatingElement"), E2 = w2.useState("domReferenceElement"), { dataRef: b2 } = w2.context, _2 = (0, d.useFloatingTree)(), S2 = (0, d.useFloatingParentNodeId)(), k2 = (0, g.useHoverInteractionSharedState)(w2), O2 = (0, eq.useTimeout)(), P2 = (0, i.useStableCallback)(() => (0, y.isClickLikeOpenEvent)(b2.current.openEvent?.type, k2.interactedInside)), T2 = (0, i.useStableCallback)(() => (0, y.isHoverOpenEvent)(b2.current.openEvent?.type)), x2 = (0, i.useStableCallback)(() => {
      (0, g.clearSafePolygonPointerEventsMutation)(k2);
    });
    (0, H.useIsoLayoutEffect)(() => {
      m2 || (k2.pointerType = void 0, k2.restTimeoutPending = false, k2.interactedInside = false, x2());
    }, [m2, k2, x2]), t.useEffect(() => x2, [x2]), (0, H.useIsoLayoutEffect)(() => {
      if (s2 && m2 && k2.handleCloseOptions?.blockPointerEvents && T2() && (0, l.isElement)(E2) && v2) {
        let e3 = (0, o.ownerDocument)(v2), t2 = _2?.nodesRef.current.find((e4) => e4.id === S2)?.context?.elements.floating;
        t2 && (t2.style.pointerEvents = "");
        let n3 = k2.pointerEventsScopeElement !== v2 ? k2.pointerEventsScopeElement : null, r2 = t2 !== v2 ? t2 : null, a2 = k2.handleCloseOptions?.getScope?.() ?? n3 ?? r2 ?? E2.closest("[data-rootownerid]") ?? e3.body;
        return (0, g.applySafePolygonPointerEventsMutation)(k2, { scopeElement: a2, referenceElement: E2, floatingElement: v2 }), () => {
          x2();
        };
      }
    }, [s2, m2, E2, v2, k2, T2, _2, S2, x2]), t.useEffect(() => {
      if (s2) return (0, a.mergeCleanups)(v2 && (0, r.addEventListener)(v2, "mouseenter", function() {
        k2.openChangeTimeout.clear(), O2.clear(), _2?.events.off("floating.closed", t2), x2();
      }), v2 && (0, r.addEventListener)(v2, "mouseleave", function(n3) {
        if (e3() && _2) return void _2.events.on("floating.closed", t2);
        if ((0, h.isTargetInsideEnabledTrigger)(n3.relatedTarget, w2.context.triggerElements)) return;
        let r2 = b2.current.floatingContext?.nodeId ?? M2, a2 = n3.relatedTarget;
        if (!(_2 && r2 && (0, l.isElement)(a2) && (0, eJ.getNodeChildren)(_2.nodesRef.current, r2, false).some((e4) => (0, f.contains)(e4.context?.elements.floating, a2)))) {
          let e4, t3;
          if (k2.handler) return void k2.handler(n3);
          x2(), T2() && !P2() && (e4 = (0, y.getDelay)(p2, "close", k2.pointerType), t3 = () => {
            w2.setOpen(false, (0, u.createChangeEventDetails)(c.REASONS.triggerHover, n3)), _2?.events.emit("floating.closed", n3);
          }, e4 ? k2.openChangeTimeout.start(e4, t3) : (k2.openChangeTimeout.clear(), t3()));
        }
      }), v2 && (0, r.addEventListener)(v2, "pointerdown", function(e4) {
        let t3 = (0, f.getTarget)(e4);
        if (!(0, eX.isInteractiveElement)(t3)) {
          k2.interactedInside = false;
          return;
        }
        k2.interactedInside = t3?.closest("[aria-haspopup]") != null;
      }, true), () => {
        _2?.events.off("floating.closed", t2);
      });
      function e3() {
        return !!(_2 && S2 && (0, eJ.getNodeChildren)(_2.nodesRef.current, S2).length > 0);
      }
      function t2(n3) {
        !_2 || !S2 || e3() || O2.start(0, () => {
          _2.events.off("floating.closed", t2), w2.setOpen(false, (0, u.createChangeEventDetails)(c.REASONS.triggerHover, n3)), _2.events.emit("floating.closed", n3);
        });
      }
    }, [s2, v2, w2, b2, p2, M2, T2, P2, x2, k2, _2, S2, O2]);
  }], 452341);
  try {
    var eQ = "u" > typeof window ? window : e.g;
    eQ._sentryModuleMetadata = eQ._sentryModuleMetadata || {}, eQ._sentryModuleMetadata[new eQ.Error().stack] = Object.assign({}, eQ._sentryModuleMetadata[new eQ.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["getCssDimensions", 0, function(e2) {
    let t2 = (0, l.getComputedStyle)(e2), n2 = parseFloat(t2.width) || 0, r2 = parseFloat(t2.height) || 0, a2 = (0, l.isHTMLElement)(e2), o2 = a2 ? e2.offsetWidth : n2, i2 = a2 ? e2.offsetHeight : r2;
    return (b(n2) !== o2 || b(r2) !== i2) && (n2 = o2, r2 = i2), { width: n2, height: r2 };
  }], 142470);
  try {
    var eZ = "u" > typeof window ? window : e.g;
    eZ._sentryModuleMetadata = eZ._sentryModuleMetadata || {}, eZ._sentryModuleMetadata[new eZ.Error().stack] = Object.assign({}, eZ._sentryModuleMetadata[new eZ.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["adaptiveOrigin", 0, { name: "adaptiveOrigin", async fn(e2) {
    let { x: t2, y: n2, rects: { floating: r2 }, elements: { floating: a2 }, platform: i2, strategy: s2, placement: l2 } = e2, u2 = (0, F.ownerWindow)(a2), c2 = u2.getComputedStyle(a2);
    if ("0s" === c2.transitionDuration || "" === c2.transitionDuration) return { x: t2, y: n2, data: eI };
    let d2 = await i2.getOffsetParent?.(a2), f2 = { width: 0, height: 0 };
    if ("fixed" === s2 && u2?.visualViewport) f2 = { width: u2.visualViewport.width, height: u2.visualViewport.height };
    else if (d2 === u2) {
      let e3 = (0, o.ownerDocument)(a2);
      f2 = { width: e3.documentElement.clientWidth, height: e3.documentElement.clientHeight };
    } else await i2.isElement?.(d2) && (f2 = await i2.getDimensions(d2));
    let p2 = P(l2), g2 = t2, y2 = n2;
    return "left" === p2 && (g2 = f2.width - (t2 + r2.width)), "top" === p2 && (y2 = f2.height - (n2 + r2.height)), { x: g2, y: y2, data: { sideX: "left" === p2 ? "right" : eI.sideX, sideY: "top" === p2 ? "bottom" : eI.sideY } };
  } }], 737286);
}, 186475, (e) => {
  "use strict";
  var t = e.i(66769);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["getDelay", 0, function(e2, n2, r) {
    let a = null == r || (0, t.isMouseLikePointerType)(r) ? "function" == typeof e2 ? e2() : e2 : 0;
    return "number" == typeof a ? a : a?.[n2];
  }, "getRestMs", 0, function(e2) {
    return "function" == typeof e2 ? e2() : e2;
  }, "isClickLikeOpenEvent", 0, function(e2, t2) {
    return t2 || "click" === e2 || "mousedown" === e2;
  }, "isHoverOpenEvent", 0, function(e2) {
    return e2?.includes("mouse") && "mousedown" !== e2;
  }]);
}, 581764, (e) => {
  "use strict";
  var t = e.i(880269), n = e.i(639306), r = e.i(635338), a = e.i(143882);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let i = 0.1 * 0.1;
  function s(e2, t2, n2, r2, a2, o2) {
    return r2 >= t2 != o2 >= t2 && e2 <= (a2 - n2) * (t2 - r2) / (o2 - r2) + n2;
  }
  function l(e2, t2, n2, r2, a2, o2, i2, l2, u2, c) {
    let d = false;
    return s(e2, t2, n2, r2, a2, o2) && (d = !d), s(e2, t2, a2, o2, i2, l2) && (d = !d), s(e2, t2, i2, l2, u2, c) && (d = !d), s(e2, t2, u2, c, n2, r2) && (d = !d), d;
  }
  function u(e2, t2, n2, r2, a2, o2) {
    let i2 = Math.min(n2, a2), s2 = Math.max(n2, a2), l2 = Math.min(r2, o2), u2 = Math.max(r2, o2);
    return e2 >= i2 && e2 <= s2 && t2 >= l2 && t2 <= u2;
  }
  e.s(["safePolygon", 0, function(e2 = {}) {
    let { blockPointerEvents: o2 = false } = e2, s2 = new n.Timeout(), c = ({ x: e3, y: n2, placement: o3, elements: c2, onClose: d, nodeId: f, tree: p }) => {
      let g = o3?.split("-")[0], y = false, h = null, M = null, w = "u" > typeof performance ? performance.now() : 0;
      return function(o4) {
        s2.clear();
        let m = c2.domReference, v = c2.floating;
        if (!m || !v || null == g || null == e3 || null == n2) return;
        let { clientX: E, clientY: b } = o4, _ = (0, r.getTarget)(o4), S = "mouseleave" === o4.type, k = (0, r.contains)(v, _), O = (0, r.contains)(m, _);
        if (k && (y = true, !S)) return;
        if (O && (y = false, !S)) {
          y = true;
          return;
        }
        if (S && (0, t.isElement)(o4.relatedTarget) && (0, r.contains)(v, o4.relatedTarget)) return;
        function P() {
          return !!(p && (0, a.getNodeChildren)(p.nodesRef.current, f).length > 0);
        }
        function T() {
          P() || (s2.clear(), d());
        }
        if (P()) return;
        let x = m.getBoundingClientRect(), C = v.getBoundingClientRect(), A = e3 > C.right - C.width / 2, R = n2 > C.bottom - C.height / 2, I = C.width > x.width, L = C.height > x.height, B = (I ? x : C).left, N = (I ? x : C).right, j = (L ? x : C).top, D = (L ? x : C).bottom;
        if ("top" === g && n2 >= x.bottom - 1 || "bottom" === g && n2 <= x.top + 1 || "left" === g && e3 >= x.right - 1 || "right" === g && e3 <= x.left + 1) return void T();
        let K = false;
        switch (g) {
          case "top":
            K = u(E, b, B, x.top + 1, N, C.bottom - 1);
            break;
          case "bottom":
            K = u(E, b, B, C.top + 1, N, x.bottom - 1);
            break;
          case "left":
            K = u(E, b, C.right - 1, D, x.left + 1, j);
            break;
          case "right":
            K = u(E, b, x.right - 1, D, C.left + 1, j);
        }
        if (K) return;
        if (y && (!(E >= x.x) || !(E <= x.x + x.width) || !(b >= x.y) || !(b <= x.y + x.height)) || !S && (function(e4, t2) {
          let n3 = performance.now(), r2 = n3 - w;
          if (null === h || null === M || 0 === r2) return h = e4, M = t2, w = n3, false;
          let a2 = e4 - h, o5 = t2 - M;
          return h = e4, M = t2, w = n3, a2 * a2 + o5 * o5 < r2 * r2 * i;
        })(E, b)) return void T();
        let F = false;
        switch (g) {
          case "top": {
            let t2 = I ? 0.25 : 2, r2 = n2 + 0.5 + 1, a2 = A || I ? C.bottom - 0.5 : C.top, o5 = A ? I ? C.bottom - 0.5 : C.top : C.bottom - 0.5;
            F = l(E, b, I || A ? e3 + t2 : e3 - t2, r2, I ? e3 - t2 : A ? e3 + t2 : e3 - t2, r2, C.left, a2, C.right, o5);
            break;
          }
          case "bottom": {
            let t2 = I ? 0.25 : 2, r2 = n2 - 0.5, a2 = A || I ? C.top + 0.5 : C.bottom, o5 = A ? I ? C.top + 0.5 : C.bottom : C.top + 0.5;
            F = l(E, b, I || A ? e3 + t2 : e3 - t2, r2, I ? e3 - t2 : A ? e3 + t2 : e3 - t2, r2, C.left, a2, C.right, o5);
            break;
          }
          case "left": {
            let t2 = L ? 0.25 : 2, r2 = e3 + 0.5 + 1, a2 = R || L ? C.right - 0.5 : C.left, o5 = R ? L ? C.right - 0.5 : C.left : C.right - 0.5;
            F = l(E, b, a2, C.top, o5, C.bottom, r2, L || R ? n2 + t2 : n2 - t2, r2, L ? n2 - t2 : R ? n2 + t2 : n2 - t2);
            break;
          }
          case "right": {
            let t2 = L ? 0.25 : 2, r2 = e3 - 0.5, a2 = R || L ? C.left + 0.5 : C.right, o5 = R ? L ? C.left + 0.5 : C.right : C.left + 0.5;
            F = l(E, b, r2, L || R ? n2 + t2 : n2 - t2, r2, L ? n2 - t2 : R ? n2 + t2 : n2 - t2, a2, C.top, o5, C.bottom);
          }
        }
        F ? y || s2.start(40, T) : T();
      };
    };
    return c.__options = { ...e2, blockPointerEvents: o2 }, c;
  }]);
}, 205549, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["createAttribute", 0, function(e2) {
    return `data-base-ui-${e2}`;
  }]);
}, 765391, 471540, (e) => {
  "use strict";
  var t = e.i(880269), n = e.i(553254);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let a = "data-base-ui-focusable", o = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
  e.s(["ARROW_DOWN", 0, "ArrowDown", "ARROW_LEFT", 0, "ArrowLeft", "ARROW_RIGHT", 0, "ArrowRight", "ARROW_UP", 0, "ArrowUp", "FOCUSABLE_ATTRIBUTE", 0, a, "TYPEABLE_SELECTOR", 0, o], 471540);
  var i = e.i(635338);
  try {
    var s = "u" > typeof window ? window : e.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function l(e2) {
    return (0, t.isHTMLElement)(e2) && e2.matches(o);
  }
  e.s(["getFloatingFocusElement", 0, function(e2) {
    return e2 ? e2.hasAttribute(a) ? e2 : e2.querySelector(`[${a}]`) || e2 : null;
  }, "isEventTargetWithin", 0, function(e2, t2) {
    return null != t2 && ("composedPath" in e2 ? e2.composedPath().includes(t2) : null != e2.target && t2.contains(e2.target));
  }, "isInteractiveElement", 0, function(e2) {
    return e2?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${o}`) != null;
  }, "isRootElement", 0, function(e2) {
    return e2.matches("html,body");
  }, "isTargetInsideEnabledTrigger", 0, function(e2, n2) {
    if (!(0, t.isElement)(e2)) return false;
    if (n2.hasElement(e2)) return !e2.hasAttribute("data-trigger-disabled");
    for (let [, t2] of n2.entries()) if ((0, i.contains)(t2, e2)) return !t2.hasAttribute("data-trigger-disabled");
    return false;
  }, "isTypeableCombobox", 0, function(e2) {
    return !!e2 && "combobox" === e2.getAttribute("role") && l(e2);
  }, "isTypeableElement", 0, l, "matchesFocusVisible", 0, function(e2) {
    if (!e2 || n.platform.env.jsdom) return true;
    try {
      return e2.matches(":focus-visible");
    } catch (e3) {
      return true;
    }
  }], 765391);
}, 66769, (e) => {
  "use strict";
  var t = e.i(553254);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["isClickLikeEvent", 0, function(e2) {
    let t2 = e2.type;
    return "click" === t2 || "mousedown" === t2 || "keydown" === t2 || "keyup" === t2;
  }, "isMouseLikePointerType", 0, function(e2, t2) {
    let n2 = ["mouse", "pen"];
    return t2 || n2.push("", void 0), n2.includes(e2);
  }, "isReactEvent", 0, function(e2) {
    return "nativeEvent" in e2;
  }, "isVirtualClick", 0, function(e2) {
    return "" === e2.pointerType && !!e2.isTrusted || (t.platform.os.android && e2.pointerType ? "click" === e2.type && 1 === e2.buttons : 0 === e2.detail && !e2.pointerType);
  }, "isVirtualPointerEvent", 0, function(e2) {
    return !t.platform.env.jsdom && (!t.platform.os.android && 0 === e2.width && 0 === e2.height || t.platform.os.android && 1 === e2.width && 1 === e2.height && 0 === e2.pressure && 0 === e2.detail && "mouse" === e2.pointerType || e2.width < 1 && e2.height < 1 && 0 === e2.pressure && 0 === e2.detail && "touch" === e2.pointerType);
  }, "stopEvent", 0, function(e2) {
    e2.preventDefault(), e2.stopPropagation();
  }]);
}, 773557, 521703, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class n {
    constructor() {
      this.idMap = /* @__PURE__ */ new Map();
    }
    add(e2, t2) {
      this.idMap.set(e2, t2);
    }
    delete(e2) {
      this.idMap.delete(e2);
    }
    hasElement(e2) {
      for (let t2 of this.idMap.values()) if (t2 === e2) return true;
      return false;
    }
    hasMatchingElement(e2) {
      for (let t2 of this.idMap.values()) if (e2(t2)) return true;
      return false;
    }
    getById(e2) {
      return this.idMap.get(e2);
    }
    entries() {
      return this.idMap.entries();
    }
    elements() {
      return this.idMap.values();
    }
    get size() {
      return this.idMap.size;
    }
  }
  e.s(["PopupTriggerMap", 0, n], 521703);
  var r = e.i(397393);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["getEmptyRootContext", 0, function() {
    return new r.FloatingRootStore({ open: false, transitionStatus: void 0, floatingElement: null, referenceElement: null, triggerElements: new n(), floatingId: void 0, syncOnly: false, nested: false, onOpenChange: void 0 });
  }], 773557);
}, 143882, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["getNodeAncestors", 0, function(e2, t2) {
    let n = [], r = e2.find((e3) => e3.id === t2)?.parentId;
    for (; r; ) {
      let t3 = e2.find((e3) => e3.id === r);
      r = t3?.parentId, t3 && (n = n.concat(t3));
    }
    return n;
  }, "getNodeChildren", 0, function e2(t2, n, r = true) {
    return t2.filter((e3) => e3.parentId === n).flatMap((n2) => [...!r || n2.context?.open ? [n2] : [], ...e2(t2, n2.id, r)]);
  }]);
}, 639761, 775368, (e) => {
  "use strict";
  var t = e.i(880269), n = e.i(219710), r = e.i(635338);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function o(e2, { startingIndex: t2 = -1, decrement: n2 = false, disabledIndices: r2, amount: a2 = 1 } = {}) {
    let s2 = t2;
    do
      s2 += n2 ? -a2 : a2;
    while (s2 >= 0 && s2 <= e2.length - 1 && i(e2, s2, r2));
    return s2;
  }
  function i(e2, t2, n2) {
    if ("function" == typeof n2 ? n2(t2) : n2?.includes(t2) ?? false) return true;
    let r2 = e2[t2];
    return !!r2 && (!!(!s(r2) || r2.matches(":disabled")) || !n2 && (r2.hasAttribute("disabled") || "true" === r2.getAttribute("aria-disabled")));
  }
  function s(e2, n2 = e2 ? (0, t.getComputedStyle)(e2) : null) {
    var r2;
    return !!e2 && !!e2.isConnected && !!n2 && "hidden" !== (r2 = n2).visibility && "collapse" !== r2.visibility && ("function" == typeof e2.checkVisibility ? e2.checkVisibility() : "none" !== n2.display && "contents" !== n2.display);
  }
  e.s(["findNonDisabledListIndex", 0, o, "getMaxListIndex", 0, function(e2, t2) {
    return o(e2.current, { decrement: true, startingIndex: e2.current.length, disabledIndices: t2 });
  }, "getMinListIndex", 0, function(e2, t2) {
    return o(e2.current, { disabledIndices: t2 });
  }, "isElementVisible", 0, s, "isIndexOutOfListBounds", 0, function(e2, t2) {
    return t2 < 0 || t2 >= e2.length;
  }, "isListIndexDisabled", 0, i], 775368);
  try {
    var l = "u" > typeof window ? window : e.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function u(e2) {
    for (let n2 of Array.from(e2.children)) if ("summary" === (0, t.getNodeName)(n2)) return n2;
    return null;
  }
  function c(e2) {
    let n2 = e2 ? (0, t.getNodeName)(e2) : "";
    return null != e2 && e2.matches('a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]') && ("summary" !== n2 || null != e2.parentElement && "details" === (0, t.getNodeName)(e2.parentElement) && u(e2.parentElement) === e2) && ("details" !== n2 || null == u(e2)) && ("input" !== n2 || "hidden" !== e2.type);
  }
  function d(e2) {
    if (!c(e2) || !e2.isConnected || e2.matches(":disabled")) return false;
    for (let n2 = e2; n2; n2 = (function(e3) {
      let n3 = e3.assignedSlot;
      if (n3) return n3;
      if (e3.parentElement) return e3.parentElement;
      let r2 = e3.getRootNode();
      return (0, t.isShadowRoot)(r2) ? r2.host : null;
    })(n2)) {
      let a2 = n2 !== e2, o2 = "slot" === (0, t.getNodeName)(n2);
      if (n2.hasAttribute("inert") || a2 && "details" === (0, t.getNodeName)(n2) && !n2.open && !(function(e3, t2) {
        let n3 = u(t2);
        return !!n3 && (e3 === n3 || (0, r.contains)(n3, e3));
      })(e2, n2) || n2.hasAttribute("hidden") || !o2 && !(function(e3, n3) {
        let r2 = (0, t.getComputedStyle)(e3);
        return n3 ? "none" !== r2.display : s(e3, r2);
      })(n2, a2)) return false;
    }
    return true;
  }
  function f(e2) {
    let n2 = e2.tabIndex;
    if (n2 < 0) {
      let n3 = (0, t.getNodeName)(e2);
      if ("details" === n3 || "audio" === n3 || "video" === n3 || (0, t.isHTMLElement)(e2) && e2.isContentEditable) return 0;
    }
    return n2;
  }
  function p(e2) {
    return "input" !== (0, t.getNodeName)(e2) ? null : "radio" === e2.type && "" !== e2.name ? e2 : null;
  }
  function g(e2) {
    if ((0, t.isHTMLElement)(e2) && "slot" === (0, t.getNodeName)(e2)) {
      let t2 = e2.assignedElements({ flatten: true });
      if (t2.length > 0) return t2;
    }
    return (0, t.isHTMLElement)(e2) && e2.shadowRoot ? Array.from(e2.shadowRoot.children) : Array.from(e2.children);
  }
  function y(e2) {
    let t2 = [];
    return !(function e3(t3, n2) {
      g(t3).forEach((t4) => {
        c(t4) && n2.push(t4), e3(t4, n2);
      });
    })(e2, t2), t2.filter(d);
  }
  function h(e2) {
    let t2 = y(e2);
    return t2.filter((e3) => f(e3) >= 0 && (function(e4, t3) {
      let n2 = p(e4);
      if (!n2) return true;
      let r2 = t3.find((e5) => {
        let t4 = p(e5);
        return t4?.name === n2.name && t4.form === n2.form && t4.checked;
      });
      return r2 ? r2 === n2 : t3.find((e5) => {
        let t4 = p(e5);
        return t4?.name === n2.name && t4.form === n2.form;
      }) === n2;
    })(e3, t2));
  }
  function M(e2, t2) {
    let a2 = h(e2), o2 = a2.length;
    if (0 === o2) return;
    let i2 = (0, r.activeElement)((0, n.ownerDocument)(e2)), s2 = a2.indexOf(i2);
    return a2[-1 === s2 ? 1 === t2 ? 0 : o2 - 1 : s2 + t2];
  }
  function w(e2, t2) {
    if (!e2) return null;
    let r2 = h((0, n.ownerDocument)(e2).body), a2 = r2.length;
    if (0 === a2) return null;
    let o2 = r2.indexOf(e2);
    return -1 === o2 ? null : r2[(o2 + t2 + a2) % a2];
  }
  e.s(["disableFocusInside", 0, function(e2) {
    h(e2).forEach((e3) => {
      e3.dataset.tabindex = e3.getAttribute("tabindex") || "", e3.setAttribute("tabindex", "-1");
    });
  }, "enableFocusInside", 0, function(e2) {
    let n2 = [];
    !(function e3(n3, r2, a2) {
      g(n3).forEach((n4) => {
        (0, t.isHTMLElement)(n4) && n4.matches(r2) && a2.push(n4), e3(n4, r2, a2);
      });
    })(e2, "[data-tabindex]", n2), n2.forEach((e3) => {
      let t2 = e3.dataset.tabindex;
      delete e3.dataset.tabindex, t2 ? e3.setAttribute("tabindex", t2) : e3.removeAttribute("tabindex");
    });
  }, "focusable", 0, y, "getNextTabbable", 0, function(e2) {
    return M((0, n.ownerDocument)(e2).body, 1) || e2;
  }, "getPreviousTabbable", 0, function(e2) {
    return M((0, n.ownerDocument)(e2).body, -1) || e2;
  }, "getTabbableAfterElement", 0, function(e2) {
    return w(e2, 1);
  }, "getTabbableBeforeElement", 0, function(e2) {
    return w(e2, -1);
  }, "isOutsideEvent", 0, function(e2, t2) {
    let n2 = t2 || e2.currentTarget, a2 = e2.relatedTarget;
    return !a2 || !(0, r.contains)(n2, a2);
  }, "isTabbable", 0, function(e2) {
    return d(e2) && f(e2) >= 0;
  }, "tabbable", 0, h], 639761);
}, 867383, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["CLICK_TRIGGER_IDENTIFIER", 0, "data-base-ui-click-trigger", "DISABLED_TRANSITIONS_STYLE", 0, { style: { transition: "none" } }, "DROPDOWN_COLLISION_AVOIDANCE", 0, { fallbackAxisSide: "none" }, "PATIENT_CLICK_THRESHOLD", 0, 500, "POPUP_COLLISION_AVOIDANCE", 0, { fallbackAxisSide: "end" }, "TYPEAHEAD_RESET_MS", 0, 500, "ownerVisuallyHidden", 0, { clipPath: "inset(50%)", position: "fixed", top: 0, left: 0 }]);
}, 930296, 296232, (e) => {
  "use strict";
  var t = e.i(550034);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["createChangeEventDetails", 0, function(e2, n2, r2, a2) {
    let o = false, i = false, s = a2 ?? t.EMPTY_OBJECT;
    return { reason: e2, event: n2 ?? new Event("base-ui"), cancel() {
      o = true;
    }, allowPropagation() {
      i = true;
    }, get isCanceled() {
      return o;
    }, get isPropagationAllowed() {
      return i;
    }, trigger: r2, ...s };
  }], 930296);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["cancelOpen", 0, "cancel-open", "chipRemovePress", 0, "chip-remove-press", "clearPress", 0, "clear-press", "closePress", 0, "close-press", "closeWatcher", 0, "close-watcher", "decrementPress", 0, "decrement-press", "disabled", 0, "disabled", "drag", 0, "drag", "escapeKey", 0, "escape-key", "focusOut", 0, "focus-out", "imperativeAction", 0, "imperative-action", "incrementPress", 0, "increment-press", "initial", 0, "initial", "inputBlur", 0, "input-blur", "inputChange", 0, "input-change", "inputClear", 0, "input-clear", "inputPaste", 0, "input-paste", "inputPress", 0, "input-press", "itemPress", 0, "item-press", "keyboard", 0, "keyboard", "linkPress", 0, "link-press", "listNavigation", 0, "list-navigation", "missing", 0, "missing", "none", 0, "none", "outsidePress", 0, "outside-press", "pointer", 0, "pointer", "scrub", 0, "scrub", "siblingOpen", 0, "sibling-open", "swipe", 0, "swipe", "trackPress", 0, "track-press", "triggerFocus", 0, "trigger-focus", "triggerHover", 0, "trigger-hover", "triggerPress", 0, "trigger-press", "wheel", 0, "wheel", "windowResize", 0, "window-resize"], 575113);
  var a = e.i(575113);
  e.s(["REASONS", 0, a], 296232);
}, 338763, 688969, 63434, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["getStateAttributesProps", 0, function(e2, t2) {
    let n2 = {};
    for (let r2 in e2) {
      let a = e2[r2];
      if (t2?.hasOwnProperty(r2)) {
        let e3 = t2[r2](a);
        null != e3 && Object.assign(n2, e3);
        continue;
      }
      true === a ? n2[`data-${r2.toLowerCase()}`] = "" : a && (n2[`data-${r2.toLowerCase()}`] = a.toString());
    }
    return n2;
  }], 338763);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["resolveClassName", 0, function(e2, t2) {
    return "function" == typeof e2 ? e2(t2) : e2;
  }], 688969);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["resolveStyle", 0, function(e2, t2) {
    return "function" == typeof e2 ? e2(t2) : e2;
  }], 63434);
}, 635338, (e) => {
  "use strict";
  var t = e.i(880269);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["activeElement", 0, function(e2) {
    let t2 = e2.activeElement;
    for (; t2?.shadowRoot?.activeElement != null; ) t2 = t2.shadowRoot.activeElement;
    return t2;
  }, "contains", 0, function(e2, n2) {
    if (!e2 || !n2) return false;
    let r = n2.getRootNode?.();
    if (e2.contains(n2)) return true;
    if (r && (0, t.isShadowRoot)(r)) {
      let t2 = n2;
      for (; t2; ) {
        if (e2 === t2) return true;
        t2 = t2.parentNode || t2.host;
      }
    }
    return false;
  }, "getTarget", 0, function(e2) {
    return "composedPath" in e2 ? e2.composedPath()[0] : e2.target;
  }]);
}, 618545, (e) => {
  "use strict";
  try {
    var t, n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let r = ((t = {}).startingStyle = "data-starting-style", t.endingStyle = "data-ending-style", t), a = { "data-starting-style": "" }, o = { "data-ending-style": "" };
  e.s(["TransitionStatusDataAttributes", 0, r, "transitionStatusMapping", 0, { transitionStatus: (e2) => "starting" === e2 ? a : "ending" === e2 ? o : null }]);
}, 145505, (e) => {
  "use strict";
  var t = e.i(497073);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useBaseUiId", 0, function(e2) {
    return (0, t.useId)(e2, "base-ui");
  }]);
}, 811336, 988404, 559631, (e) => {
  "use strict";
  var t = e.i(856757), n = e.i(424404), r = e.i(403432), a = e.i(54705);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function i(e2) {
    return null == e2 ? e2 : "current" in e2 ? e2.current : e2;
  }
  e.s(["resolveRef", 0, i], 988404);
  try {
    var s = "u" > typeof window ? window : e.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function l(e2, t2 = false) {
    let o2 = (0, a.useAnimationFrame)();
    return (0, n.useStableCallback)((n2, a2 = null) => {
      o2.cancel();
      let s2 = i(e2);
      if (null == s2) return;
      let l2 = () => {
        r.flushSync(n2);
      };
      if ("function" != typeof s2.getAnimations || globalThis.BASE_UI_ANIMATIONS_DISABLED) return void n2();
      function u2() {
        Promise.all(s2.getAnimations().map((e3) => e3.finished)).then(() => {
          a2?.aborted || l2();
        }, () => {
          a2?.aborted || (s2.getAnimations().some((e3) => e3.pending || "finished" !== e3.playState) ? u2() : l2());
        });
      }
      if (t2) {
        let e3 = "data-starting-style";
        if (!s2.hasAttribute(e3)) return void o2.request(u2);
        let t3 = new MutationObserver(() => {
          s2.hasAttribute(e3) || (t3.disconnect(), u2());
        });
        return t3.observe(s2, { attributes: true, attributeFilter: [e3] }), void a2?.addEventListener("abort", () => t3.disconnect(), { once: true });
      }
      o2.request(u2);
    });
  }
  e.s(["useAnimationsFinished", 0, l], 559631);
  try {
    var u = "u" > typeof window ? window : e.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useOpenChangeComplete", 0, function(e2) {
    let { enabled: r2 = true, open: a2, ref: o2, onComplete: i2 } = e2, s2 = (0, n.useStableCallback)(i2), u2 = l(o2, a2);
    t.useEffect(() => {
      if (!r2) return;
      let e3 = new AbortController();
      return u2(s2, e3.signal), () => {
        e3.abort();
      };
    }, [r2, a2, s2, u2]);
  }], 811336);
}, 256777, (e) => {
  "use strict";
  var t = e.i(579180), n = e.i(856757), r = e.i(548302), a = e.i(248266), o = e.i(954799);
  e.i(563e3);
  var i = e.i(550034), s = e.i(338763), l = e.i(688969), u = e.i(63434), c = e.i(441833);
  try {
    var d = "u" > typeof window ? window : e.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let f = /* @__PURE__ */ Symbol.for("react.lazy");
  e.s(["useRenderElement", 0, function(e2, d2, p = {}) {
    let g = d2.render, y = (function(e3, t2 = {}) {
      var n2;
      let { className: d3, style: f2, render: p2 } = e3, { state: g2 = i.EMPTY_OBJECT, ref: y2, props: h, stateAttributesMapping: M, enabled: w = true } = t2, m = w ? (0, l.resolveClassName)(d3, g2) : void 0, v = w ? (0, u.resolveStyle)(f2, g2) : void 0, E = w ? (0, s.getStateAttributesProps)(g2, M) : i.EMPTY_OBJECT, b = w && h ? Array.isArray(n2 = h) ? (0, c.mergePropsN)(n2) : (0, c.mergeProps)(void 0, n2) : void 0, _ = w ? (0, o.mergeObjects)(E, b) ?? {} : i.EMPTY_OBJECT;
      return ("u" > typeof document && (w ? Array.isArray(y2) ? _.ref = (0, r.useMergedRefsN)([_.ref, (0, a.getReactElementRef)(p2), ...y2]) : _.ref = (0, r.useMergedRefs)(_.ref, (0, a.getReactElementRef)(p2), y2) : (0, r.useMergedRefs)(null, null)), w) ? (void 0 !== m && (_.className = (0, c.mergeClassNames)(_.className, m)), void 0 !== v && (_.style = (0, o.mergeObjects)(_.style, v)), _) : i.EMPTY_OBJECT;
    })(d2, p);
    return false === p.enabled ? null : (function(e3, r2, a2, o2) {
      if (r2) {
        if ("function" == typeof r2) return r2(a2, o2);
        let e4 = (0, c.mergeProps)(a2, r2.props);
        e4.ref = a2.ref;
        let t2 = r2;
        return t2?.$$typeof === f && (t2 = n.Children.toArray(r2)[0]), n.cloneElement(t2, e4);
      }
      if (e3 && "string" == typeof e3) {
        var i2, s2;
        return i2 = e3, s2 = a2, "button" === i2 ? (0, n.createElement)("button", { type: "button", ...s2, key: s2.key }) : "img" === i2 ? (0, n.createElement)("img", { alt: "", ...s2, key: s2.key }) : n.createElement(i2, s2);
      }
      throw Error((0, t.default)(8));
    })(e2, g, y, p.state ?? i.EMPTY_OBJECT);
  }]);
}, 616318, (e) => {
  "use strict";
  var t = e.i(856757), n = e.i(599607), r = e.i(54705);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useTransitionStatus", 0, function(e2, a2 = false, o = false) {
    let [i, s] = t.useState(e2 && a2 ? "idle" : void 0), [l, u] = t.useState(e2);
    return e2 && !l && (u(true), s("starting")), e2 || !l || "ending" === i || o || s("ending"), e2 || l || "ending" !== i || s(void 0), (0, n.useIsoLayoutEffect)(() => {
      if (!e2 && l && "ending" !== i && o) {
        let e3 = r.AnimationFrame.request(() => {
          s("ending");
        });
        return () => {
          r.AnimationFrame.cancel(e3);
        };
      }
    }, [e2, l, i, o]), (0, n.useIsoLayoutEffect)(() => {
      if (!e2 || a2) return;
      let t2 = r.AnimationFrame.request(() => {
        s(void 0);
      });
      return () => {
        r.AnimationFrame.cancel(t2);
      };
    }, [a2, e2]), (0, n.useIsoLayoutEffect)(() => {
      if (!e2 || !a2) return;
      e2 && l && "idle" !== i && s("starting");
      let t2 = r.AnimationFrame.request(() => {
        s("idle");
      });
      return () => {
        r.AnimationFrame.cancel(t2);
      };
    }, [a2, e2, l, i]), { mounted: l, setMounted: u, transitionStatus: i };
  }]);
}, 441833, (e) => {
  "use strict";
  var t = e.i(954799);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let r = {};
  function a(e2) {
    return s(e2) ? { ...l(e2, r) } : (function(e3) {
      let t2 = { ...e3 };
      for (let e4 in t2) {
        let n2 = t2[e4];
        i(e4, n2) && (t2[e4] = u(n2));
      }
      return t2;
    })(e2);
  }
  function o(e2, n2) {
    return s(n2) ? l(n2, e2) : (function(e3, n3) {
      if (!n3) return e3;
      for (let r2 in n3) {
        let a2 = n3[r2];
        switch (r2) {
          case "style":
            e3[r2] = (0, t.mergeObjects)(e3.style, a2);
            break;
          case "className":
            e3[r2] = d(e3.className, a2);
            break;
          default:
            i(r2, a2) ? e3[r2] = (function(e4, t2) {
              return t2 ? e4 ? (...n4) => {
                let r3 = n4[0];
                if (f(r3)) {
                  c(r3);
                  let a4 = t2(...n4);
                  return r3.baseUIHandlerPrevented || e4?.(...n4), a4;
                }
                let a3 = t2(...n4);
                return e4?.(...n4), a3;
              } : u(t2) : e4;
            })(e3[r2], a2) : e3[r2] = a2;
        }
      }
      return e3;
    })(e2, n2);
  }
  function i(e2, t2) {
    let n2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), a2 = e2.charCodeAt(2);
    return 111 === n2 && 110 === r2 && a2 >= 65 && a2 <= 90 && ("function" == typeof t2 || void 0 === t2);
  }
  function s(e2) {
    return "function" == typeof e2;
  }
  function l(e2, t2) {
    return s(e2) ? e2(t2) : e2 ?? r;
  }
  function u(e2) {
    return e2 ? (...t2) => {
      let n2 = t2[0];
      return f(n2) && c(n2), e2(...t2);
    } : e2;
  }
  function c(e2) {
    return e2.preventBaseUIHandler = () => {
      e2.baseUIHandlerPrevented = true;
    }, e2;
  }
  function d(e2, t2) {
    return t2 ? e2 ? t2 + " " + e2 : t2 : e2;
  }
  function f(e2) {
    return null != e2 && "object" == typeof e2 && "nativeEvent" in e2;
  }
  e.s(["makeEventPreventable", 0, c, "mergeClassNames", 0, d, "mergeProps", 0, function(e2, t2, n2, r2, i2) {
    if (!n2 && !r2 && !i2 && !e2) return a(t2);
    let s2 = a(e2);
    return t2 && (s2 = o(s2, t2)), n2 && (s2 = o(s2, n2)), r2 && (s2 = o(s2, r2)), i2 && (s2 = o(s2, i2)), s2;
  }, "mergePropsN", 0, function(e2) {
    if (0 === e2.length) return r;
    if (1 === e2.length) return a(e2[0]);
    let t2 = a(e2[0]);
    for (let n2 = 1; n2 < e2.length; n2 += 1) t2 = o(t2, e2[n2]);
    return t2;
  }]);
}, 234091, (e) => {
  "use strict";
  var t = e.i(856757), n = e.i(599607), r = e.i(553254);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let o = { clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: 0, padding: 0, width: 1, height: 1, margin: -1 }, i = { ...o, position: "fixed", top: 0, left: 0 };
  ({ ...o, position: "absolute" });
  var s = e.i(68982);
  try {
    var l = "u" > typeof window ? window : e.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let u = t.forwardRef(function(e2, a2) {
    let [o2, l2] = t.useState();
    return (0, n.useIsoLayoutEffect)(() => {
      r.platform.screenReader.voiceOver && r.platform.engine.webkit && l2("button");
    }, []), (0, s.jsx)("span", { ...e2, ref: a2, style: i, "aria-hidden": !o2 || void 0, tabIndex: 0, role: o2, "data-base-ui-focus-guard": "" });
  });
  e.s(["FocusGuard", 0, u], 234091);
}, 631457, (e) => {
  "use strict";
  var t = e.i(939007);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class r extends t.ReactStore {
    setState(e2) {
    }
    update(e2) {
    }
    set(e2, t2) {
    }
    notifyAll() {
    }
  }
  e.s(["NullStore", 0, r]);
}, 573568, (e) => {
  "use strict";
  var t, n = e.i(618545);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  (t = {}).open = "data-open", t.closed = "data-closed", t[t.startingStyle = n.TransitionStatusDataAttributes.startingStyle] = "startingStyle", t[t.endingStyle = n.TransitionStatusDataAttributes.endingStyle] = "endingStyle", t.anchorHidden = "data-anchor-hidden", t.side = "data-side", t.align = "data-align";
  let a = { "data-popup-open": "" }, o = { "data-popup-open": "", "data-pressed": "" }, i = { "data-open": "" }, s = { "data-closed": "" }, l = { "data-anchor-hidden": "" }, u = { open: (e2) => e2 ? i : s, anchorHidden: (e2) => e2 ? l : null }, c = { ...u, ...n.transitionStatusMapping };
  e.s(["popupStateMapping", 0, u, "popupTransitionStateMapping", 0, c, "pressableTriggerOpenStateMapping", 0, { open: (e2) => e2 ? o : null }, "triggerOpenStateMapping", 0, { open: (e2) => e2 ? a : null }]);
}, 136343, 684796, (e) => {
  "use strict";
  var t = e.i(856757), n = e.i(403432), r = e.i(550034), a = e.i(497073), o = e.i(424404), i = e.i(599607), s = e.i(114606), l = e.i(471540), u = e.i(872191), c = e.i(880269), d = e.i(397393);
  try {
    var f = "u" > typeof window ? window : e.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function p(e2) {
    let { popupStore: n2, treatPopupAsFloatingElement: r2 = false, floatingRootContext: a2, floatingId: o2, nested: s2, onOpenChange: l2 } = e2, u2 = n2.useState("open"), f2 = n2.useState("activeTriggerElement"), p2 = n2.useState(r2 ? "popupElement" : "positionerElement"), g2 = n2.context.triggerElements, y2 = t.useRef(null);
    void 0 === a2 && null === y2.current && (y2.current = new d.FloatingRootStore({ open: u2, transitionStatus: void 0, referenceElement: f2, floatingElement: p2, triggerElements: g2, onOpenChange: l2, floatingId: o2, syncOnly: true, nested: s2 }));
    let h2 = a2 ?? y2.current;
    return n2.useSyncedValue("floatingId", o2), (0, i.useIsoLayoutEffect)(() => {
      let e3 = { open: u2, floatingId: o2, referenceElement: f2, floatingElement: p2 };
      (0, c.isElement)(f2) && (e3.domReferenceElement = f2), h2.state.positionReference === h2.state.referenceElement && (e3.positionReference = f2), h2.update(e3);
    }, [u2, o2, f2, p2, h2]), h2.context.onOpenChange = l2, h2.context.nested = s2, h2;
  }
  e.s(["useSyncedFloatingRootContext", 0, p], 684796);
  var g = e.i(616318), y = e.i(811336), h = e.i(930296), M = e.i(296232);
  try {
    var w = "u" > typeof window ? window : e.g;
    w._sentryModuleMetadata = w._sentryModuleMetadata || {}, w._sentryModuleMetadata[new w.Error().stack] = Object.assign({}, w._sentryModuleMetadata[new w.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let m = { tabIndex: -1, [l.FOCUSABLE_ATTRIBUTE]: "" };
  function v(e2, n2) {
    let r2 = t.useRef(null), a2 = t.useRef(null);
    return t.useCallback((t2) => {
      if (void 0 === e2) return;
      let o2 = false;
      if (null !== r2.current) {
        let e3 = r2.current, t3 = a2.current, i2 = n2.context.triggerElements.getById(e3);
        t3 && i2 === t3 && (n2.context.triggerElements.delete(e3), o2 = true), r2.current = null, a2.current = null;
      }
      if (null !== t2 && (r2.current = e2, a2.current = t2, n2.context.triggerElements.add(e2, t2), o2 = true), o2) {
        let e3 = n2.context.triggerElements.size;
        n2.select("open") && n2.state.triggerCount !== e3 && n2.set("triggerCount", e3);
      }
    }, [n2, e2]);
  }
  function E(e2, t2, n2, r2 = false) {
    t2 ? e2.preventUnmountingOnClose = false : r2 && (e2.preventUnmountingOnClose = true);
    let a2 = n2?.id ?? null;
    (a2 || t2) && (e2.activeTriggerId = a2, e2.activeTriggerElement = n2 ?? null);
  }
  function b(e2) {
    let t2 = false;
    return e2.preventUnmountOnClose = () => {
      t2 = true;
    }, () => t2;
  }
  e.s(["FOCUSABLE_POPUP_PROPS", 0, m, "PopupHandleAttachment", 0, function({ handle: e2, store: t2 }) {
    return (0, i.useIsoLayoutEffect)(() => e2.attachStore(t2), [e2, t2]), null;
  }, "applyPopupOpenChange", 0, function(e2, t2, r2, a2 = {}) {
    let o2 = r2.reason, i2 = o2 === M.REASONS.triggerHover, s2 = t2 && o2 === M.REASONS.triggerFocus, l2 = !t2 && (o2 === M.REASONS.triggerPress || o2 === M.REASONS.escapeKey), u2 = b(r2);
    if (e2.context.onOpenChange?.(t2, r2), r2.isCanceled) return;
    a2.onBeforeDispatch?.(), e2.state.floatingRootContext.dispatchOpenChange(t2, r2);
    let c2 = () => {
      let n2 = { ...a2.extraState, open: t2 };
      s2 ? n2.instantType = "focus" : l2 ? n2.instantType = "dismiss" : i2 && (n2.instantType = void 0), E(n2, t2, r2.trigger, u2()), e2.update(n2);
    };
    i2 ? n.flushSync(c2) : c2();
  }, "attachPreventUnmountOnClose", 0, b, "createDefaultInitialFocus", 0, function(e2) {
    return (t2) => "touch" !== t2 || e2.current;
  }, "setPopupOpenState", 0, E, "useImplicitActiveTrigger", 0, function(e2, n2 = {}) {
    let { closeOnActiveTriggerUnmount: r2 = false } = n2, a2 = t.useRef(null), o2 = e2.useState("open"), s2 = e2.useState("triggerCount"), l2 = e2.useState("activeTriggerId"), u2 = e2.useState("activeTriggerElement");
    (0, i.useIsoLayoutEffect)(() => {
      if (!o2) {
        a2.current = null, 0 !== e2.state.triggerCount && e2.set("triggerCount", 0);
        return;
      }
      let t2 = e2.context.triggerElements.size, n3 = {};
      e2.state.triggerCount !== t2 && (n3.triggerCount = t2);
      let i2 = e2.select("activeTriggerId"), s3 = null;
      if (i2) {
        let t3 = e2.context.triggerElements.getById(i2);
        if (t3) a2.current = i2, t3 !== e2.state.activeTriggerElement && (n3.activeTriggerElement = t3);
        else {
          for (let [t4, r3] of e2.context.triggerElements.entries()) if (r3 === e2.state.activeTriggerElement) {
            n3.activeTriggerId = t4, n3.activeTriggerElement = r3, a2.current = t4;
            break;
          }
          void 0 === n3.activeTriggerId && (a2.current === i2 ? s3 = i2 : a2.current = null);
        }
      } else a2.current = null;
      if (!s3 && !i2 && 1 === t2) {
        let t3 = e2.context.triggerElements.entries().next();
        if (!t3.done) {
          let [e3, r3] = t3.value;
          n3.activeTriggerId = e3, n3.activeTriggerElement = r3, a2.current = e3;
        }
      }
      (void 0 !== n3.triggerCount || void 0 !== n3.activeTriggerId || void 0 !== n3.activeTriggerElement) && e2.update(n3), s3 && r2 && queueMicrotask(() => {
        if (e2.select("open") && e2.select("activeTriggerId") === s3 && !e2.context.triggerElements.getById(s3)) {
          let t3 = (0, h.createChangeEventDetails)(M.REASONS.none);
          e2.setOpen(false, t3), t3.isCanceled || e2.update({ activeTriggerId: null, activeTriggerElement: null });
        }
      });
    }, [o2, e2, s2, l2, u2, r2]);
  }, "useOpenStateTransitions", 0, function(e2, t2, n2) {
    let { mounted: r2, setMounted: a2, transitionStatus: i2 } = (0, g.useTransitionStatus)(e2), s2 = t2.useState("preventUnmountingOnClose"), l2 = !e2 && s2;
    t2.useSyncedValues({ mounted: r2, transitionStatus: i2, preventUnmountingOnClose: l2 });
    let u2 = (0, o.useStableCallback)(() => {
      a2(false), t2.update({ activeTriggerId: null, activeTriggerElement: null, mounted: false, preventUnmountingOnClose: false }), n2?.(), t2.context.onOpenChangeComplete?.(false);
    });
    return (0, y.useOpenChangeComplete)({ enabled: r2 && !e2 && !l2, open: e2, ref: t2.context.popupRef, onComplete() {
      e2 || u2();
    } }), { forceUnmount: u2, transitionStatus: i2 };
  }, "usePopupInteractionProps", 0, function(e2, t2) {
    e2.useSyncedValues(t2), (0, i.useIsoLayoutEffect)(() => () => {
      e2.update({ activeTriggerProps: r.EMPTY_OBJECT, inactiveTriggerProps: r.EMPTY_OBJECT, popupProps: r.EMPTY_OBJECT });
    }, [e2]);
  }, "usePopupRootStore", 0, function(e2, t2 = false) {
    let n2 = (0, a.useId)(), r2 = null != (0, u.useFloatingParentNodeId)(), o2 = (0, s.useRefWithInit)(() => e2(n2, r2)).current;
    return p({ popupStore: o2, treatPopupAsFloatingElement: t2, floatingRootContext: o2.state.floatingRootContext, floatingId: n2, nested: r2, onOpenChange: o2.setOpen }), o2;
  }, "usePopupRootSync", 0, function(e2, t2) {
    (0, i.useIsoLayoutEffect)(() => {
      t2 || null === e2.state.openMethod || e2.set("openMethod", null);
    }, [t2, e2]), (0, i.useIsoLayoutEffect)(() => () => {
      null !== e2.state.openMethod && e2.set("openMethod", null);
    }, [e2]);
  }, "useTriggerDataForwarding", 0, function(e2, n2, r2, a2) {
    let s2 = r2.useState("isMountedByTrigger", e2), l2 = v(e2, r2), u2 = (0, o.useStableCallback)((t2) => {
      let n3 = r2.select("open"), o2 = r2.select("activeTriggerId");
      o2 === e2 ? r2.update({ activeTriggerElement: t2, ...n3 ? a2 : null }) : null == o2 && n3 && r2.update({ activeTriggerId: e2, activeTriggerElement: t2, ...a2 });
    }), c2 = t.useCallback((e3) => {
      l2(e3), e3 && u2(e3);
    }, [l2, u2]);
    return (0, i.useIsoLayoutEffect)(() => {
      s2 && r2.update({ activeTriggerElement: n2.current, ...a2 });
    }, [s2, r2, n2, ...Object.values(a2)]), { registerTrigger: c2, isMountedByThisTrigger: s2 };
  }, "useTriggerRegistration", 0, v], 136343);
}, 190433, 610993, 285630, (e) => {
  "use strict";
  var t = e.i(550034), n = e.i(397393), r = e.i(773557);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let o = (e2) => e2.triggerIdProp ?? e2.activeTriggerId, i = (e2) => e2.openProp ?? e2.open, s = (e2) => (e2.popupElement?.id ?? e2.floatingId) || void 0;
  function l(e2, t2) {
    return void 0 !== t2 && i(e2) && o(e2) === t2;
  }
  e.s(["createInitialPopupStoreState", 0, function() {
    return { open: false, openProp: void 0, mounted: false, transitionStatus: void 0, floatingRootContext: (0, r.getEmptyRootContext)(), floatingId: void 0, triggerCount: 0, preventUnmountingOnClose: false, payload: void 0, activeTriggerId: null, activeTriggerElement: null, triggerIdProp: void 0, popupElement: null, positionerElement: null, activeTriggerProps: t.EMPTY_OBJECT, inactiveTriggerProps: t.EMPTY_OBJECT, popupProps: t.EMPTY_OBJECT };
  }, "createPopupFloatingRootContext", 0, function(e2, t2, r2 = false) {
    return new n.FloatingRootStore({ open: false, transitionStatus: void 0, floatingElement: null, referenceElement: null, triggerElements: e2, floatingId: t2, syncOnly: true, nested: r2, onOpenChange: void 0 });
  }, "popupStoreSelectors", 0, { open: i, mounted: (e2) => e2.mounted, transitionStatus: (e2) => e2.transitionStatus, floatingRootContext: (e2) => e2.floatingRootContext, triggerCount: (e2) => e2.triggerCount, preventUnmountingOnClose: (e2) => e2.preventUnmountingOnClose, payload: (e2) => e2.payload, activeTriggerId: o, activeTriggerElement: (e2) => e2.mounted ? e2.activeTriggerElement : null, popupId: s, isTriggerActive: (e2, t2) => void 0 !== t2 && o(e2) === t2, isOpenedByTrigger: (e2, t2) => l(e2, t2), isMountedByTrigger: (e2, t2) => void 0 !== t2 && o(e2) === t2 && e2.mounted, triggerProps: (e2, t2) => t2 ? e2.activeTriggerProps : e2.inactiveTriggerProps, triggerPopupId: (e2, t2) => l(e2, t2) || void 0 !== t2 && i(e2) && null == o(e2) && 1 === e2.triggerCount ? s(e2) : void 0, popupProps: (e2) => e2.popupProps, popupElement: (e2) => e2.popupElement, positionerElement: (e2) => e2.positionerElement }], 190433);
  var u = e.i(856757), c = e.i(56032);
  try {
    var d = "u" > typeof window ? window : e.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["usePopupHandleStore", 0, function(e2) {
    let n2 = u.useCallback((n3) => void 0 === e2 ? t.NOOP : e2.subscribeStore(n3), [e2]), r2 = u.useCallback(() => void 0 === e2 ? void 0 : e2.store, [e2]);
    return (0, c.useSyncExternalStore)(n2, r2, () => e2?.serverStore);
  }], 610993);
  var f = e.i(579180), p = e.i(930296), g = e.i(296232);
  try {
    var y = "u" > typeof window ? window : e.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class h {
    attachedStores = [];
    attachedStoreValue = null;
    storeListeners = /* @__PURE__ */ new Set();
    constructor(e2, t2, n2 = true) {
      this.fallbackStore = e2, this.componentName = t2, this.throwOnMissingTrigger = n2;
    }
    get attachedStore() {
      return this.attachedStoreValue;
    }
    get store() {
      return this.attachedStoreValue ?? this.fallbackStore;
    }
    get serverStore() {
      return this.fallbackStore;
    }
    subscribeStore(e2) {
      return this.storeListeners.add(e2), () => {
        this.storeListeners.delete(e2);
      };
    }
    attachStore(e2) {
      return this.attachedStores.push(e2), this.setActiveStore(e2), () => {
        let t2 = this.attachedStores.lastIndexOf(e2);
        -1 !== t2 && this.attachedStores.splice(t2, 1), this.setActiveStore(this.attachedStores[this.attachedStores.length - 1] ?? null);
      };
    }
    setActiveStore(e2) {
      this.attachedStoreValue !== e2 && (this.attachedStoreValue = e2, this.storeListeners.forEach((e3) => {
        e3();
      }));
    }
    openByTrigger(e2) {
      let t2, n2 = this.attachedStore;
      if (null !== n2) {
        if (e2) {
          for (let n3 = this.attachedStores.length - 1; n3 >= 0 && !t2; n3 -= 1) t2 = this.attachedStores[n3].context.triggerElements.getById(e2);
          t2 ??= this.fallbackStore.context.triggerElements.getById(e2);
        }
        if (e2 && !t2 && this.throwOnMissingTrigger) throw Error((0, f.default)(99, this.componentName, e2, this.componentName));
        n2.setOpen(true, (0, p.createChangeEventDetails)(g.REASONS.imperativeAction, void 0, t2));
      }
    }
    closePopup() {
      let e2 = this.attachedStore;
      null === e2 || e2.setOpen(false, (0, p.createChangeEventDetails)(g.REASONS.imperativeAction));
    }
  }
  e.s(["BasePopupHandle", 0, h], 285630);
}, 233514, (e) => {
  "use strict";
  var t = e.i(856757), n = e.i(403432), r = e.i(208169), a = e.i(54705);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var i = e.i(599607), s = e.i(424404), l = e.i(219710), u = e.i(559631), c = e.i(550034), d = e.i(142470);
  try {
    var f = "u" > typeof window ? window : e.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function p(e2, t2, n2) {
    let r2 = e2.style.getPropertyValue(t2);
    return e2.style.setProperty(t2, n2), () => {
      e2.style.setProperty(t2, r2);
    };
  }
  function g(e2, t2) {
    let n2 = [];
    for (let [r2, a2] of Object.entries(t2)) n2.push(p(e2, r2, a2));
    return n2.length ? () => {
      n2.forEach((e3) => e3());
    } : c.NOOP;
  }
  function y(e2, t2) {
    let n2 = "auto" === t2 ? "auto" : `${t2.width}px`, r2 = "auto" === t2 ? "auto" : `${t2.height}px`;
    e2.style.setProperty("--popup-width", n2), e2.style.setProperty("--popup-height", r2);
  }
  function h(e2, t2) {
    let n2 = "max-content" === t2 ? "max-content" : `${t2.width}px`, r2 = "max-content" === t2 ? "max-content" : `${t2.height}px`;
    e2.style.setProperty("--positioner-width", n2), e2.style.setProperty("--positioner-height", r2);
  }
  var M = e.i(675932), w = e.i(737286), m = e.i(68982);
  try {
    var v = "u" > typeof window ? window : e.g;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["popupViewportStateMapping", 0, { activationDirection: (e2) => e2 ? { "data-activation-direction": e2 } : null }, "usePopupViewport", 0, function(e2) {
    let o2, { store: f2, side: v2, children: E } = e2, b = (0, M.useDirection)(), _ = f2.useState("activeTriggerElement"), S = f2.useState("activeTriggerId"), k = f2.useState("open"), O = f2.useState("payload"), P = f2.useState("mounted"), T = f2.useState("popupElement"), x = f2.useState("positionerElement"), C = (function(e3) {
      let [n2, r2] = t.useState({ current: e3, previous: null });
      return Object.is(e3, n2.current) || r2({ current: e3, previous: n2.current }), n2.previous;
    })(k ? _ : null), A = (function(e3, n2) {
      let [r2, a2] = t.useState(0), o3 = t.useRef(e3), s2 = t.useRef(n2), l2 = t.useRef(false);
      return (0, i.useIsoLayoutEffect)(() => {
        let t2 = o3.current, r3 = n2 !== s2.current;
        e3 !== t2 ? (a2((e4) => e4 + 1), l2.current = !r3) : l2.current && r3 && (a2((e4) => e4 + 1), l2.current = false), o3.current = e3, s2.current = n2;
      }, [e3, n2]), `${e3 ?? "current"}-${r2}`;
    })(S, O), R = t.useRef(null), [I, L] = t.useState(null), [B, N] = t.useState(null), j = t.useRef(null), D = t.useRef(null), K = (0, u.useAnimationsFinished)(j, true), F = (0, a.useAnimationFrame)(), H = t.useRef(null), [W, V] = t.useState(null), [$, Y] = t.useState(false);
    (0, i.useIsoLayoutEffect)(() => (f2.set("adaptiveOrigin", w.adaptiveOrigin), () => {
      f2.set("adaptiveOrigin", void 0);
    }), [f2]);
    let U = (0, s.useStableCallback)(() => {
      j.current?.style.setProperty("animation", "none"), j.current?.style.setProperty("transition", "none"), D.current?.style.setProperty("display", "none");
    }), z = (0, s.useStableCallback)((e3) => {
      j.current?.style.removeProperty("animation"), j.current?.style.removeProperty("transition"), D.current?.style.removeProperty("display"), e3 && V(e3);
    }), q = (0, s.useStableCallback)(() => {
      H.current?.abort();
      let e3 = new AbortController();
      H.current = e3, K(() => {
        L(null), V(null), R.current = null;
      }, e3.signal);
    }), J = t.useRef(null);
    (0, i.useIsoLayoutEffect)(() => {
      k && P || (J.current = null);
    }, [k, P]), (0, i.useIsoLayoutEffect)(() => {
      var e3, t2;
      let n2, r2, a2, o3;
      _ && C && _ !== C && J.current !== _ && R.current && (L(R.current), Y(true), N((e3 = C, t2 = _, n2 = e3.getBoundingClientRect(), r2 = t2.getBoundingClientRect(), a2 = { x: n2.left + n2.width / 2, y: n2.top + n2.height / 2 }, { horizontal: (o3 = { x: r2.left + r2.width / 2, y: r2.top + r2.height / 2 }).x - a2.x, vertical: o3.y - a2.y })), J.current = _);
    }, [_, C]), (0, i.useIsoLayoutEffect)(() => {
      null != I && (H.current?.abort(), Y(true), F.request(() => {
        n.flushSync(() => {
          Y(false);
        }), q();
      }));
    }, [A, I, q, F]), (0, i.useIsoLayoutEffect)(() => {
      let e3 = j.current;
      if (!e3) return;
      let t2 = (0, l.ownerDocument)(e3).createElement("div");
      for (let n2 of Array.from(e3.childNodes)) t2.appendChild(n2.cloneNode(true));
      R.current = t2;
    });
    let X = null != I;
    return o2 = X ? (0, m.jsxs)(t.Fragment, { children: [(0, m.jsx)("div", { "data-previous": true, inert: (0, r.inertValue)(true), ref: D, style: { ...W ? { "--popup-width": `${W.width}px`, "--popup-height": `${W.height}px` } : null, position: "absolute" }, "data-ending-style": $ ? void 0 : "" }, "previous"), (0, m.jsx)("div", { "data-current": true, ref: j, "data-starting-style": $ ? "" : void 0, children: E }, A)] }) : (0, m.jsx)("div", { "data-current": true, ref: j, children: E }, A), (0, i.useIsoLayoutEffect)(() => {
      let e3 = D.current;
      e3 && I && e3.replaceChildren(...Array.from(I.childNodes));
    }, [I]), !(function(e3) {
      let { popupElement: n2, positionerElement: r2, content: o3, mounted: l2, onMeasureLayout: f3, onMeasureLayoutComplete: M2, side: w2, direction: m2 } = e3, v3 = (0, u.useAnimationsFinished)(n2, true), E2 = (0, a.useAnimationFrame)(), b2 = t.useRef(null), _2 = t.useRef(true), S2 = t.useRef(c.NOOP), k2 = (0, s.useStableCallback)(f3), O2 = (0, s.useStableCallback)(M2), P2 = t.useMemo(() => {
        var e4, t2;
        let n3, r3;
        return e4 = w2, t2 = m2, n3 = "top" === e4, r3 = "left" === e4 || e4 === ("rtl" === t2 ? "inline-end" : "inline-start"), n3 || r3 ? { position: "absolute", [n3 ? "bottom" : "top"]: "0", [r3 ? "right" : "left"]: "0" } : c.EMPTY_OBJECT;
      }, [w2, m2]);
      (0, i.useIsoLayoutEffect)(() => {
        if (!l2) {
          S2.current = c.NOOP, _2.current = true, b2.current = null;
          return;
        }
        if (!n2 || !r2) return;
        S2.current = g(n2, P2), y(n2, "auto");
        let e4 = p(n2, "position", "static"), t2 = p(n2, "transform", "none"), a2 = p(n2, "scale", "1"), o4 = g(r2, { "--available-width": "max-content", "--available-height": "max-content" });
        function i2() {
          e4(), t2(), o4(), a2();
        }
        if (k2?.(), _2.current || null === b2.current) {
          h(r2, "max-content");
          let e5 = (0, d.getCssDimensions)(n2);
          return b2.current = e5, h(r2, e5), i2(), O2?.(null, e5), _2.current = false, () => {
            S2.current(), S2.current = c.NOOP;
          };
        }
        h(r2, "max-content");
        let s2 = b2.current, u2 = (0, d.getCssDimensions)(n2);
        b2.current = u2, y(n2, s2), i2(), O2?.(s2, u2), h(r2, u2);
        let f4 = new AbortController();
        return E2.request(() => {
          y(n2, u2), v3(() => {
            n2.style.setProperty("--popup-width", "auto"), n2.style.setProperty("--popup-height", "auto");
          }, f4.signal);
        }), () => {
          f4.abort(), E2.cancel(), S2.current(), S2.current = c.NOOP;
        };
      }, [o3, n2, r2, v3, E2, l2, k2, O2, P2]);
    })({ popupElement: T, positionerElement: x, mounted: P, content: O, onMeasureLayout: U, onMeasureLayoutComplete: z, side: v2, direction: b }), { children: o2, state: { activationDirection: (function(e3) {
      if (e3) {
        var t2, n2;
        return `${(t2 = e3.horizontal) > 5 ? "right" : t2 < -5 ? "left" : ""} ${(n2 = e3.vertical) > 5 ? "down" : n2 < -5 ? "up" : ""}`;
      }
    })(B), transitioning: X } };
  }], 233514);
}, 517124, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["addEventListener", 0, function(e2, t2, n, r) {
    return e2.addEventListener(t2, n, r), () => {
      e2.removeEventListener(t2, n, r);
    };
  }]);
}, 550034, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let n = Object.freeze([]), r = Object.freeze({});
  e.s(["EMPTY_ARRAY", 0, n, "EMPTY_OBJECT", 0, r, "NOOP", 0, function() {
  }]);
}, 740915, (e) => {
  "use strict";
  let t;
  var n = e.i(856757), r = e.i(114606);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let o = [];
  function i(e2) {
    let n2 = (n3, a2) => {
      let i2, l = (0, r.useRefWithInit)(s).current;
      try {
        for (let e3 of (t = l, o)) e3.before(l);
        for (let t2 of (i2 = e2(n3, a2), o)) t2.after(l);
        l.didInitialize = true;
      } finally {
        t = void 0;
      }
      return i2;
    };
    return n2.displayName = e2.displayName || e2.name, n2;
  }
  function s() {
    return { didInitialize: false };
  }
  e.s(["fastComponent", 0, i, "fastComponentRef", 0, function(e2) {
    return n.forwardRef(i(e2));
  }, "getInstance", 0, function() {
    return t;
  }, "register", 0, function(e2) {
    o.push(e2);
  }]);
}, 579180, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let n = function(e2, ...t2) {
    let n2 = new URL("https://base-ui.com/production-error");
    return n2.searchParams.set("code", e2.toString()), t2.forEach((e3) => n2.searchParams.append("args[]", e3)), `Base UI error #${e2}; visit ${n2} for the full message.`;
  };
  e.s(["default", 0, n]);
}, 248266, (e) => {
  "use strict";
  var t = e.i(856757), n = e.i(673022);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["getReactElementRef", 0, function(e2) {
    if (!t.isValidElement(e2)) return null;
    let r2 = e2.props;
    return ((0, n.isReactVersionAtLeast)(19) ? r2?.ref : e2.ref) ?? null;
  }]);
}, 208169, (e) => {
  "use strict";
  var t = e.i(673022);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["inertValue", 0, function(e2) {
    return (0, t.isReactVersionAtLeast)(19) ? e2 : e2 ? "true" : void 0;
  }]);
}, 703921, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["mergeCleanups", 0, function(...e2) {
    return () => {
      for (let t2 = 0; t2 < e2.length; t2 += 1) {
        let n = e2[t2];
        n && n();
      }
    };
  }]);
}, 954799, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["mergeObjects", 0, function(e2, t2) {
    return e2 && !t2 ? e2 : !e2 && t2 ? t2 : e2 || t2 ? { ...e2, ...t2 } : void 0;
  }]);
}, 219710, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["ownerDocument", 0, function(e2) {
    return e2?.ownerDocument || document;
  }]);
}, 553254, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s([], 864951), e.i(864951);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let { userAgent: r, platform: a, maxTouchPoints: o } = "u" < typeof navigator ? { userAgent: "", platform: "", maxTouchPoints: 0 } : { userAgent: navigator.userAgent, platform: navigator.platform ?? "", maxTouchPoints: navigator.maxTouchPoints ?? 0 }, i = r.toLowerCase(), s = a.toLowerCase();
  try {
    var l = "u" > typeof window ? window : e.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let u = /^i(os$|p)/.test(s) || "macintel" === s && o > 1, c = "android", d = s === c || i.includes(c), f = !u && s.startsWith("mac"), p = s.startsWith("win"), g = !d && /^(linux|chrome os)/.test(s), y = f || u;
  e.s(["android", 0, d, "apple", 0, y, "ios", 0, u, "linux", 0, g, "mac", 0, f, "windows", 0, p], 496113);
  var h = e.i(496113);
  try {
    var M = "u" > typeof window ? window : e.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let w = "u" > typeof CSS && !!CSS.supports?.("-webkit-backdrop-filter:none"), m = !w && i.includes("firefox"), v = !w && i.includes("chrom");
  e.s(["blink", 0, v, "gecko", 0, m, "webkit", 0, w], 818653);
  var E = e.i(818653);
  try {
    var b = "u" > typeof window ? window : e.g;
    b._sentryModuleMetadata = b._sentryModuleMetadata || {}, b._sentryModuleMetadata[new b.Error().stack] = Object.assign({}, b._sentryModuleMetadata[new b.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["voiceOver", 0, y], 283985);
  var _ = e.i(283985);
  try {
    var S = "u" > typeof window ? window : e.g;
    S._sentryModuleMetadata = S._sentryModuleMetadata || {}, S._sentryModuleMetadata[new S.Error().stack] = Object.assign({}, S._sentryModuleMetadata[new S.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let k = /jsdom|happydom/.test(i);
  e.s(["jsdom", 0, k], 515515);
  var O = e.i(515515);
  e.s(["engine", 0, E, "env", 0, O, "os", 0, h, "screenReader", 0, _], 659711);
  var P = e.i(659711);
  e.s(["platform", 0, P], 553254);
}, 673022, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let r = parseInt(t.version, 10);
  e.s(["isReactVersionAtLeast", 0, function(e2) {
    return r >= e2;
  }]);
}, 54705, (e) => {
  "use strict";
  var t = e.i(114606), n = e.i(212789);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let a = new class {
    callbacks = [];
    callbacksCount = 0;
    nextId = 1;
    startId = 1;
    isScheduled = false;
    tick = (e2) => {
      this.isScheduled = false;
      let t2 = this.callbacks, n2 = this.callbacksCount;
      if (this.callbacks = [], this.callbacksCount = 0, this.startId = this.nextId, n2 > 0) for (let n3 = 0; n3 < t2.length; n3 += 1) t2[n3]?.(e2);
    };
    request(e2) {
      let t2 = this.nextId;
      return this.nextId += 1, this.callbacks.push(e2), this.callbacksCount += 1, this.isScheduled || (requestAnimationFrame(this.tick), this.isScheduled = true), t2;
    }
    cancel(e2) {
      let t2 = e2 - this.startId;
      t2 < 0 || t2 >= this.callbacks.length || (this.callbacks[t2] = null, this.callbacksCount -= 1);
    }
  }();
  class o {
    static create() {
      return new o();
    }
    static request(e2) {
      return a.request(e2);
    }
    static cancel(e2) {
      return a.cancel(e2);
    }
    currentId = null;
    request(e2) {
      this.cancel(), this.currentId = a.request(() => {
        this.currentId = null, e2();
      });
    }
    cancel = () => {
      null !== this.currentId && (a.cancel(this.currentId), this.currentId = null);
    };
    disposeEffect = () => this.cancel;
  }
  e.s(["AnimationFrame", 0, o, "useAnimationFrame", 0, function() {
    let e2 = (0, t.useRefWithInit)(o.create).current;
    return (0, n.useOnMount)(e2.disposeEffect), e2;
  }]);
}, 497073, (e) => {
  "use strict";
  var t = e.i(856757), n = e.i(217538);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let a = 0, o = n.SafeReact.useId;
  e.s(["useId", 0, function(e2, n2) {
    if (void 0 !== o) {
      let t2 = o();
      return e2 ?? (n2 ? `${n2}-${t2}` : t2);
    }
    return (function(e3, n3 = "mui") {
      let [r2, o2] = t.useState(e3), i = e3 || r2;
      return t.useEffect(() => {
        null == r2 && (a += 1, o2(`${n3}-${a}`));
      }, [r2, n3]), i;
    })(e2, n2);
  }]);
}, 599607, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let r = "u" > typeof document ? t.useLayoutEffect : () => {
  };
  e.s(["useIsoLayoutEffect", 0, r]);
}, 548302, (e) => {
  "use strict";
  var t = e.i(114606);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function r() {
    return { callback: null, cleanup: null, refs: [] };
  }
  function a(e2, t2) {
    if (e2.refs = t2, t2.every((e3) => null == e3)) {
      e2.callback = null;
      return;
    }
    e2.callback = (n2) => {
      if (e2.cleanup && (e2.cleanup(), e2.cleanup = null), null != n2) {
        let r2 = Array(t2.length).fill(null);
        for (let e3 = 0; e3 < t2.length; e3 += 1) {
          let a2 = t2[e3];
          if (null != a2) switch (typeof a2) {
            case "function": {
              let t3 = a2(n2);
              "function" == typeof t3 && (r2[e3] = t3);
              break;
            }
            case "object":
              a2.current = n2;
          }
        }
        e2.cleanup = () => {
          for (let e3 = 0; e3 < t2.length; e3 += 1) {
            let n3 = t2[e3];
            if (null != n3) switch (typeof n3) {
              case "function": {
                let t3 = r2[e3];
                "function" == typeof t3 ? t3() : n3(null);
                break;
              }
              case "object":
                n3.current = null;
            }
          }
        };
      }
    };
  }
  e.s(["useMergedRefs", 0, function(e2, n2, o, i) {
    var s, l, u, c, d;
    let f = (0, t.useRefWithInit)(r).current;
    return s = f, l = e2, u = n2, c = o, d = i, (s.refs[0] !== l || s.refs[1] !== u || s.refs[2] !== c || s.refs[3] !== d) && a(f, [e2, n2, o, i]), f.callback;
  }, "useMergedRefsN", 0, function(e2) {
    var n2, o;
    let i = (0, t.useRefWithInit)(r).current;
    return n2 = i, o = e2, (n2.refs.length !== o.length || n2.refs.some((e3, t2) => e3 !== o[t2])) && a(i, e2), i.callback;
  }]);
}, 212789, (e) => {
  "use strict";
  var t = e.i(856757), n = e.i(550034);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useOnMount", 0, function(e2) {
    t.useEffect(e2, n.EMPTY_ARRAY);
  }]);
}, 114606, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let r = {};
  e.s(["useRefWithInit", 0, function(e2, n2) {
    let a = t.useRef(r);
    return a.current === r && (a.current = e2(n2)), a;
  }]);
}, 424404, 217538, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let r = { ...t };
  e.s(["SafeReact", 0, r], 217538);
  var a = e.i(114606);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let i = r.useInsertionEffect, s = i && i !== r.useLayoutEffect ? i : (e2) => e2();
  function l() {
    let e2 = { next: void 0, callback: u, trampoline: (...t2) => e2.callback?.(...t2), effect: () => {
      e2.callback = e2.next;
    } };
    return e2;
  }
  function u() {
  }
  e.s(["useStableCallback", 0, function(e2) {
    let t2 = (0, a.useRefWithInit)(l).current;
    return t2.next = e2, s(t2.effect), t2.trampoline;
  }], 424404);
}, 639306, (e) => {
  "use strict";
  var t = e.i(114606), n = e.i(212789);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class a {
    static create() {
      return new a();
    }
    currentId = 0;
    start(e2, t2) {
      this.clear(), this.currentId = setTimeout(() => {
        this.currentId = 0, t2();
      }, e2);
    }
    isStarted() {
      return 0 !== this.currentId;
    }
    clear = () => {
      0 !== this.currentId && (clearTimeout(this.currentId), this.currentId = 0);
    };
    disposeEffect = () => this.clear;
  }
  e.s(["Timeout", 0, a, "useTimeout", 0, function() {
    let e2 = (0, t.useRefWithInit)(a.create).current;
    return (0, n.useOnMount)(e2.disposeEffect), e2;
  }]);
}, 825696, (e) => {
  "use strict";
  var t = e.i(599607), n = e.i(114606);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function a(e2) {
    let t2 = { current: e2, next: e2, effect: () => {
      t2.current = t2.next;
    } };
    return t2;
  }
  e.s(["useValueAsRef", 0, function(e2) {
    let r2 = (0, n.useRefWithInit)(a, e2).current;
    return r2.next = e2, (0, t.useIsoLayoutEffect)(r2.effect), r2;
  }]);
}, 563e3, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["warn", 0, function() {
  }]);
}, 880269, 479995, (e) => {
  "use strict";
  let t;
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function r() {
    return "u" > typeof window;
  }
  function a(e2) {
    return s(e2) ? (e2.nodeName || "").toLowerCase() : "#document";
  }
  function o(e2) {
    var t2;
    return (null == e2 || null == (t2 = e2.ownerDocument) ? void 0 : t2.defaultView) || window;
  }
  function i(e2) {
    var t2;
    return null == (t2 = (s(e2) ? e2.ownerDocument : e2.document) || window.document) ? void 0 : t2.documentElement;
  }
  function s(e2) {
    return !!r() && (e2 instanceof Node || e2 instanceof o(e2).Node);
  }
  function l(e2) {
    return !!r() && (e2 instanceof Element || e2 instanceof o(e2).Element);
  }
  function u(e2) {
    return !!r() && (e2 instanceof HTMLElement || e2 instanceof o(e2).HTMLElement);
  }
  function c(e2) {
    return !(!r() || "u" < typeof ShadowRoot) && (e2 instanceof ShadowRoot || e2 instanceof o(e2).ShadowRoot);
  }
  function d(e2) {
    let { overflow: t2, overflowX: n2, overflowY: r2, display: a2 } = m(e2);
    return /auto|scroll|overlay|hidden|clip/.test(t2 + r2 + n2) && "inline" !== a2 && "contents" !== a2;
  }
  function f(e2) {
    try {
      if (e2.matches(":popover-open")) return true;
    } catch (e3) {
    }
    try {
      return e2.matches(":modal");
    } catch (e3) {
      return false;
    }
  }
  let p = /transform|translate|scale|rotate|perspective|filter/, g = /paint|layout|strict|content/, y = (e2) => !!e2 && "none" !== e2;
  function h(e2) {
    let t2 = l(e2) ? m(e2) : e2;
    return y(t2.transform) || y(t2.translate) || y(t2.scale) || y(t2.rotate) || y(t2.perspective) || !M() && (y(t2.backdropFilter) || y(t2.filter)) || p.test(t2.willChange || "") || g.test(t2.contain || "");
  }
  function M() {
    return null == t && (t = "u" > typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), t;
  }
  function w(e2) {
    return /^(html|body|#document)$/.test(a(e2));
  }
  function m(e2) {
    return o(e2).getComputedStyle(e2);
  }
  function v(e2) {
    if ("html" === a(e2)) return e2;
    let t2 = e2.assignedSlot || e2.parentNode || c(e2) && e2.host || i(e2);
    return c(t2) ? t2.host : t2;
  }
  function E(e2) {
    return e2.parent && Object.getPrototypeOf(e2.parent) ? e2.frameElement : null;
  }
  e.s(["getComputedStyle", 0, m, "getContainingBlock", 0, function(e2) {
    let t2 = v(e2);
    for (; u(t2) && !w(t2); ) {
      if (h(t2)) return t2;
      if (f(t2)) break;
      t2 = v(t2);
    }
    return null;
  }, "getDocumentElement", 0, i, "getFrameElement", 0, E, "getNodeName", 0, a, "getNodeScroll", 0, function(e2) {
    return l(e2) ? { scrollLeft: e2.scrollLeft, scrollTop: e2.scrollTop } : { scrollLeft: e2.scrollX, scrollTop: e2.scrollY };
  }, "getOverflowAncestors", 0, function e2(t2, n2, r2) {
    var a2;
    void 0 === n2 && (n2 = []), void 0 === r2 && (r2 = true);
    let i2 = (function e3(t3) {
      let n3 = v(t3);
      return w(n3) ? (t3.ownerDocument || t3).body : u(n3) && d(n3) ? n3 : e3(n3);
    })(t2), s2 = i2 === (null == (a2 = t2.ownerDocument) ? void 0 : a2.body), l2 = o(i2);
    if (!s2) return n2.concat(i2, e2(i2, [], r2));
    {
      let t3 = E(l2);
      return n2.concat(l2, l2.visualViewport || [], d(i2) ? i2 : [], t3 && r2 ? e2(t3) : []);
    }
  }, "getParentNode", 0, v, "getWindow", 0, o, "isContainingBlock", 0, h, "isElement", 0, l, "isHTMLElement", 0, u, "isLastTraversableNode", 0, w, "isNode", 0, s, "isOverflowElement", 0, d, "isShadowRoot", 0, c, "isTableElement", 0, function(e2) {
    return /^(table|td|th)$/.test(a(e2));
  }, "isTopLayer", 0, f, "isWebKit", 0, M], 880269), e.s(["ownerWindow", 0, o], 479995);
}]);
