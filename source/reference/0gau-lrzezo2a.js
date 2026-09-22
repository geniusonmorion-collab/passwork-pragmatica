;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "3655fa75-8c62-3bae-82bb-3a02063ad7a4");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 32774, (e) => {
  "use strict";
  var t = e.i(856757), n = e.i(517124), r = e.i(553254), a = e.i(703921), o = e.i(219710), s = e.i(639306), i = e.i(880269), u = e.i(205549), l = e.i(635338), c = e.i(765391), d = e.i(930296), p = e.i(296232);
  try {
    var g = "u" > typeof window ? window : e.g;
    g._sentryModuleMetadata = g._sentryModuleMetadata || {}, g._sentryModuleMetadata[new g.Error().stack] = Object.assign({}, g._sentryModuleMetadata[new g.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let y = r.platform.os.mac && r.platform.engine.webkit;
  e.s(["useFocus", 0, function(e2, r2 = {}) {
    let { enabled: g2 = true, delay: f } = r2, M = "rootStore" in e2 ? e2.rootStore : e2, { events: w, dataRef: v } = M.context, h = t.useRef(false), E = t.useRef(null), _ = t.useRef(true), S = (0, s.useTimeout)();
    t.useEffect(() => {
      let e3 = M.select("domReferenceElement");
      if (!g2) return;
      let t2 = (0, i.getWindow)(e3);
      return (0, a.mergeCleanups)((0, n.addEventListener)(t2, "blur", function() {
        let e4 = M.select("domReferenceElement");
        !M.select("open") && (0, i.isHTMLElement)(e4) && e4 === (0, l.activeElement)((0, o.ownerDocument)(e4)) && (h.current = true);
      }), y && (0, n.addEventListener)(t2, "keydown", function() {
        _.current = true;
      }, true), y && (0, n.addEventListener)(t2, "pointerdown", function() {
        _.current = false;
      }, true));
    }, [M, g2]), t.useEffect(() => {
      if (g2) return w.on("openchange", e3), () => {
        w.off("openchange", e3);
      };
      function e3(e4) {
        if (e4.reason === p.REASONS.triggerPress || e4.reason === p.REASONS.escapeKey) {
          let e5 = M.select("domReferenceElement");
          (0, i.isElement)(e5) && (E.current = e5, h.current = true);
        }
      }
    }, [w, g2, M]);
    let P = t.useMemo(() => {
      function e3() {
        h.current = false, E.current = null;
      }
      return { onMouseLeave() {
        e3();
      }, onFocus(t2) {
        let n2 = t2.currentTarget;
        if (h.current) {
          if (E.current === n2) return;
          e3();
        }
        let r3 = (0, l.getTarget)(t2.nativeEvent);
        if ((0, i.isElement)(r3)) {
          if (y && !t2.relatedTarget) {
            if (!_.current && !(0, c.isTypeableElement)(r3)) return;
          } else if (!(0, c.matchesFocusVisible)(r3)) return;
        }
        let a2 = (0, c.isTargetInsideEnabledTrigger)(t2.relatedTarget, M.context.triggerElements), { nativeEvent: o2, currentTarget: s2 } = t2, u2 = "function" == typeof f ? f() : f;
        M.select("open") && a2 || 0 === u2 || void 0 === u2 ? M.setOpen(true, (0, d.createChangeEventDetails)(p.REASONS.triggerFocus, o2, s2)) : S.start(u2, () => {
          h.current || M.setOpen(true, (0, d.createChangeEventDetails)(p.REASONS.triggerFocus, o2, s2));
        });
      }, onBlur(t2) {
        e3();
        let n2 = t2.relatedTarget, r3 = t2.nativeEvent, a2 = (0, i.isElement)(n2) && n2.hasAttribute((0, u.createAttribute)("focus-guard")) && "outside" === n2.getAttribute("data-type");
        S.start(0, () => {
          let e4 = M.select("domReferenceElement"), t3 = (0, l.activeElement)((0, o.ownerDocument)(e4));
          if (!n2 && t3 === e4 || (0, l.contains)(v.current.floatingContext?.refs.floating.current, t3) || (0, l.contains)(e4, t3) || a2) return;
          let s2 = n2 ?? t3;
          (0, c.isTargetInsideEnabledTrigger)(s2, M.context.triggerElements) || M.setOpen(false, (0, d.createChangeEventDetails)(p.REASONS.triggerFocus, r3));
        });
      } };
    }, [v, f, M, S]);
    return t.useMemo(() => g2 ? { reference: P, trigger: P } : {}, [g2, P]);
  }]);
}, 38061, (e) => {
  "use strict";
  var t = e.i(68982);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s([], 509590), e.i(509590);
  var r = e.i(856757), a = e.i(740915), o = e.i(550034), s = e.i(599607), i = e.i(579180);
  try {
    var u = "u" > typeof window ? window : e.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let l = r.createContext(void 0);
  function c(e2) {
    let t2 = r.useContext(l);
    if (void 0 === t2 && !e2) throw Error((0, i.default)(72));
    return t2;
  }
  var d = e.i(517124), p = e.i(424404), g = e.i(880269), y = e.i(635338), f = e.i(66769);
  try {
    var M = "u" > typeof window ? window : e.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function w(e2) {
    return null != e2 && null != e2.clientX;
  }
  var v = e.i(535896), h = e.i(930296), E = e.i(136343), _ = e.i(441833), S = e.i(939007), P = e.i(296232), C = e.i(631457), m = e.i(190433), O = e.i(521703);
  try {
    var b = "u" > typeof window ? window : e.g;
    b._sentryModuleMetadata = b._sentryModuleMetadata || {}, b._sentryModuleMetadata[new b.Error().stack] = Object.assign({}, b._sentryModuleMetadata[new b.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let x = { ...m.popupStoreSelectors, disabled: (e2) => e2.disabled, instantType: (e2) => e2.instantType, isInstantPhase: (e2) => e2.isInstantPhase, trackCursorAxis: (e2) => e2.trackCursorAxis, disableHoverablePopup: (e2) => e2.disableHoverablePopup, lastOpenChangeReason: (e2) => e2.openChangeReason, closeOnClick: (e2) => e2.closeOnClick, closeDelay: (e2) => e2.closeDelay, adaptiveOrigin: (e2) => e2.adaptiveOrigin };
  class R extends S.ReactStore {
    constructor(e2, t2, n2) {
      const r2 = new O.PopupTriggerMap();
      super(k(e2, r2, t2, n2), T(r2), x);
    }
    setOpen = (e2, t2) => {
      (0, E.applyPopupOpenChange)(this, e2, t2, { extraState: { openChangeReason: t2.reason } });
    };
    cancelPendingOpen(e2) {
      this.state.floatingRootContext.dispatchOpenChange(false, (0, h.createChangeEventDetails)(P.REASONS.triggerPress, e2));
    }
  }
  function k(e2, t2, n2, r2 = false) {
    let a2 = { ...(0, m.createInitialPopupStoreState)(), disabled: false, instantType: void 0, isInstantPhase: false, trackCursorAxis: "none", disableHoverablePopup: false, openChangeReason: null, closeOnClick: true, closeDelay: 0, adaptiveOrigin: void 0, ...e2 };
    return a2.floatingRootContext = (0, m.createPopupFloatingRootContext)(t2, n2, r2), a2;
  }
  function T(e2) {
    return { popupRef: r.createRef(), onOpenChange: void 0, onOpenChangeComplete: void 0, triggerElements: e2 };
  }
  try {
    var A = "u" > typeof window ? window : e.g;
    A._sentryModuleMetadata = A._sentryModuleMetadata || {}, A._sentryModuleMetadata[new A.Error().stack] = Object.assign({}, A._sentryModuleMetadata[new A.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let j = (0, a.fastComponent)(function(e2) {
    let { disabled: n2 = false, defaultOpen: a2 = false, open: o2, disableHoverablePopup: i2 = false, trackCursorAxis: u2 = "none", actionsRef: c2, onOpenChange: d2, onOpenChangeComplete: p2, handle: g2, triggerId: y2, defaultTriggerId: f2 = null, children: M2 } = e2, w2 = (0, E.usePopupRootStore)((e3, t2) => new R({ open: a2, openProp: o2, activeTriggerId: f2, triggerIdProp: y2 }, e3, t2));
    w2.useControlledProp("openProp", o2), w2.useControlledProp("triggerIdProp", y2), w2.useContextCallback("onOpenChange", d2), w2.useContextCallback("onOpenChangeComplete", p2);
    let v2 = w2.useState("open"), _2 = !n2 && v2, S2 = w2.useState("activeTriggerId"), C2 = w2.useState("mounted"), m2 = w2.useState("payload");
    w2.useSyncedValues({ trackCursorAxis: u2, disableHoverablePopup: i2, disabled: n2 }), (0, E.useImplicitActiveTrigger)(w2, { closeOnActiveTriggerUnmount: true });
    let { forceUnmount: O2, transitionStatus: b2 } = (0, E.useOpenStateTransitions)(_2, w2), x2 = w2.useState("isInstantPhase"), k2 = w2.useState("instantType"), T2 = w2.useState("lastOpenChangeReason"), A2 = r.useRef(null);
    (0, s.useIsoLayoutEffect)(() => {
      v2 && n2 && w2.setOpen(false, (0, h.createChangeEventDetails)(P.REASONS.disabled));
    }, [v2, n2, w2]), (0, s.useIsoLayoutEffect)(() => {
      "ending" === b2 && T2 === P.REASONS.none || "ending" !== b2 && x2 ? ("delay" !== k2 && (A2.current = k2), w2.set("instantType", "delay")) : null !== A2.current && (w2.set("instantType", A2.current), A2.current = null);
    }, [b2, x2, T2, k2, w2]), (0, s.useIsoLayoutEffect)(() => {
      _2 && null == S2 && w2.set("payload", void 0);
    }, [w2, S2, _2]), r.useImperativeHandle(c2, () => ({ unmount: O2, close: () => w2.setOpen(false, (0, h.createChangeEventDetails)(P.REASONS.imperativeAction)) }), [O2, w2]);
    let j2 = _2 || C2 || !n2 && "none" !== u2;
    return (0, t.jsxs)(l.Provider, { value: w2, children: [g2 && (0, t.jsx)(E.PopupHandleAttachment, { handle: g2, store: w2 }), j2 && (0, t.jsx)(I, { store: w2, disabled: n2, trackCursorAxis: u2 }), "function" == typeof M2 ? M2({ payload: m2 }) : M2] });
  });
  function I({ store: e2, disabled: t2, trackCursorAxis: n2 }) {
    let a2 = e2.useState("floatingRootContext"), s2 = (0, v.useDismiss)(a2, { enabled: !t2, referencePress: () => e2.select("closeOnClick") }), i2 = (function(e3, t3 = {}) {
      let { enabled: n3 = true, axis: a3 = "both" } = t3, o2 = "rootStore" in e3 ? e3.rootStore : e3, s3 = o2.useState("open"), i3 = o2.useState("floatingElement"), u3 = o2.useState("domReferenceElement"), l2 = o2.context.dataRef, c2 = r.useRef(false), M2 = r.useRef(null), [v2, h2] = r.useState(), [E2, _2] = r.useState([]), S2 = (0, p.useStableCallback)((e4) => {
        o2.set("positionReference", e4);
      }), P2 = (0, p.useStableCallback)((e4, t4, n4) => {
        if (!c2.current && (!l2.current.openEvent || w(l2.current.openEvent))) {
          var r2, s4;
          let i4, c3, d2;
          o2.set("positionReference", (r2 = n4 ?? u3, s4 = { x: e4, y: t4, axis: a3, dataRef: l2, pointerType: v2 }, i4 = null, c3 = null, d2 = false, { contextElement: r2 || void 0, getBoundingClientRect() {
            let e5 = r2?.getBoundingClientRect() || { width: 0, height: 0, x: 0, y: 0 }, t5 = "x" === s4.axis || "both" === s4.axis, n5 = "y" === s4.axis || "both" === s4.axis, a4 = ["mouseenter", "mousemove"].includes(s4.dataRef.current.openEvent?.type || "") && "touch" !== s4.pointerType, o3 = e5.width, u4 = e5.height, l3 = e5.x, p2 = e5.y;
            return null == i4 && s4.x && t5 && (i4 = e5.x - s4.x), null == c3 && s4.y && n5 && (c3 = e5.y - s4.y), l3 -= i4 || 0, p2 -= c3 || 0, o3 = 0, u4 = 0, !d2 || a4 ? (o3 = "y" === s4.axis ? e5.width : 0, u4 = "x" === s4.axis ? e5.height : 0, l3 = t5 && null != s4.x ? s4.x : l3, p2 = n5 && null != s4.y ? s4.y : p2) : d2 && !a4 && (u4 = "x" === s4.axis ? e5.height : u4, o3 = "y" === s4.axis ? e5.width : o3), d2 = true, { width: o3, height: u4, x: l3, y: p2, top: p2, right: l3 + o3, bottom: p2 + u4, left: l3 };
          } }));
        }
      }), C2 = (0, p.useStableCallback)((e4) => {
        s3 ? M2.current || (P2(e4.clientX, e4.clientY, e4.currentTarget), _2([])) : P2(e4.clientX, e4.clientY, e4.currentTarget);
      }), m2 = (0, f.isMouseLikePointerType)(v2) ? i3 : s3;
      r.useEffect(() => {
        if (!n3) return void S2(u3);
        if (!m2) return;
        function e4() {
          M2.current?.(), M2.current = null;
        }
        let t4 = (0, g.getWindow)(i3);
        return !l2.current.openEvent || w(l2.current.openEvent) ? M2.current = (0, d.addEventListener)(t4, "mousemove", function(t5) {
          let n4 = (0, y.getTarget)(t5);
          (0, y.contains)(i3, n4) ? e4() : P2(t5.clientX, t5.clientY);
        }) : S2(u3), e4;
      }, [m2, n3, i3, l2, u3, o2, P2, S2, E2]), r.useEffect(() => () => {
        o2.set("positionReference", null);
      }, [o2]), r.useEffect(() => {
        n3 && !i3 && (c2.current = false);
      }, [n3, i3]), r.useEffect(() => {
        !n3 && s3 && (c2.current = true);
      }, [n3, s3]);
      let O2 = r.useMemo(() => {
        function e4(e5) {
          h2(e5.pointerType);
        }
        return { onPointerDown: e4, onPointerEnter: e4, onMouseMove: C2, onMouseEnter: C2 };
      }, [C2]);
      return r.useMemo(() => n3 ? { reference: O2, trigger: O2 } : {}, [n3, O2]);
    })(a2, { enabled: !t2 && "none" !== n2, axis: "none" === n2 ? void 0 : n2 }), u2 = r.useMemo(() => (0, _.mergeProps)(i2.reference, s2.reference), [i2.reference, s2.reference]);
    return (0, E.usePopupInteractionProps)(e2, { activeTriggerProps: u2, inactiveTriggerProps: u2, popupProps: s2.floating ?? o.EMPTY_OBJECT }), null;
  }
  var L = e.i(639306), B = e.i(825696), D = e.i(573568), N = e.i(256777), K = e.i(610993), H = e.i(145505);
  try {
    var F = "u" > typeof window ? window : e.g;
    F._sentryModuleMetadata = F._sentryModuleMetadata || {}, F._sentryModuleMetadata[new F.Error().stack] = Object.assign({}, F._sentryModuleMetadata[new F.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let U = r.createContext(void 0);
  var V = e.i(581764), X = e.i(186475);
  try {
    var Y = "u" > typeof window ? window : e.g;
    Y._sentryModuleMetadata = Y._sentryModuleMetadata || {}, Y._sentryModuleMetadata[new Y.Error().stack] = Object.assign({}, Y._sentryModuleMetadata[new Y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let z = r.createContext({ hasProvider: false, timeoutMs: 0, delayRef: { current: 0 }, initialDelayRef: { current: 0 }, timeout: new L.Timeout(), currentIdRef: { current: null }, currentContextRef: { current: null } });
  function W(e2) {
    let { children: n2, delay: a2, timeoutMs: o2 = 0 } = e2, i2 = r.useRef(a2), u2 = r.useRef(a2), l2 = r.useRef(null), c2 = r.useRef(null), d2 = (0, L.useTimeout)();
    return (0, s.useIsoLayoutEffect)(() => {
      if (u2.current = a2, !l2.current) {
        i2.current = a2;
        return;
      }
      i2.current = { open: (0, X.getDelay)(i2.current, "open"), close: (0, X.getDelay)(a2, "close") };
    }, [a2, l2, i2, u2]), (0, t.jsx)(z.Provider, { value: r.useMemo(() => ({ hasProvider: true, delayRef: i2, initialDelayRef: u2, currentIdRef: l2, timeoutMs: o2, currentContextRef: c2, timeout: d2 }), [o2, d2]), children: n2 });
  }
  var Z = e.i(32774), J = e.i(243428), $ = e.i(848344);
  try {
    var q = "u" > typeof window ? window : e.g;
    q._sentryModuleMetadata = q._sentryModuleMetadata || {}, q._sentryModuleMetadata[new q.Error().stack] = Object.assign({}, q._sentryModuleMetadata[new q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var G = "u" > typeof window ? window : e.g;
    G._sentryModuleMetadata = G._sentryModuleMetadata || {}, G._sentryModuleMetadata[new G.Error().stack] = Object.assign({}, G._sentryModuleMetadata[new G.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let Q = "data-base-ui-tooltip-trigger";
  function ee(e2) {
    if ("composedPath" in e2) {
      let t3 = e2.composedPath();
      for (let e3 = 0; e3 < t3.length; e3 += 1) {
        let n2 = t3[e3];
        if ((0, g.isElement)(n2)) return n2;
      }
    }
    let t2 = e2.target;
    return (0, g.isElement)(t2) ? t2 : null;
  }
  let et = (0, a.fastComponentRef)(function(e2, t2) {
    let { render: n2, className: a2, style: o2, handle: u2, payload: l2, disabled: d2, delay: p2, closeOnClick: M2 = true, closeDelay: w2, id: v2, ..._2 } = e2, S2 = c(true), C2 = (0, K.usePopupHandleStore)(u2) ?? S2;
    if (!C2) throw Error((0, i.default)(82));
    let m2 = (0, H.useBaseUiId)(v2), O2 = C2.useState("isTriggerActive", m2), b2 = C2.useState("isOpenedByTrigger", m2), x2 = C2.useState("floatingRootContext"), R2 = r.useRef(null), k2 = p2 ?? 600, T2 = w2 ?? 0, { registerTrigger: A2, isMountedByThisTrigger: j2 } = (0, E.useTriggerDataForwarding)(m2, R2, C2, { payload: l2, closeOnClick: M2, closeDelay: T2 }), I2 = r.useContext(U), { delayRef: F2, isInstantPhase: Y2, hasProvider: W2 } = (function(e3, t3 = { open: false }) {
      let { open: n3 } = t3, a3 = "rootStore" in e3 ? e3.rootStore : e3, o3 = a3.useState("floatingId"), { currentIdRef: i2, delayRef: u3, timeoutMs: l3, initialDelayRef: c2, currentContextRef: d3, hasProvider: p3, timeout: g2 } = r.useContext(z), [y2, f2] = r.useState(false), M3 = r.useRef(n3);
      return (0, s.useIsoLayoutEffect)(() => {
        M3.current = n3;
      }, [n3]), (0, s.useIsoLayoutEffect)(() => {
        function e4() {
          d3.current?.setIsInstantPhase(false), i2.current = null, d3.current = null, u3.current = c2.current, g2.clear();
        }
        if (i2.current && !n3 && i2.current === o3) {
          if (f2(false), l3) return g2.start(l3, () => {
            a3.select("open") || i2.current && i2.current !== o3 || e4();
          }), () => {
            (M3.current || i2.current !== o3) && g2.clear();
          };
          e4();
        }
      }, [n3, o3, i2, u3, l3, c2, d3, g2, a3]), (0, s.useIsoLayoutEffect)(() => {
        if (!n3) return;
        let e4 = d3.current, t4 = i2.current;
        g2.clear(), d3.current = { onOpenChange: a3.setOpen, setIsInstantPhase: f2 }, i2.current = o3, u3.current = { open: 0, close: (0, X.getDelay)(c2.current, "close") }, null !== t4 && t4 !== o3 ? (f2(true), e4?.setIsInstantPhase(true), e4?.onOpenChange(false, (0, h.createChangeEventDetails)(P.REASONS.none))) : (f2(false), e4?.setIsInstantPhase(false));
      }, [n3, o3, a3, i2, u3, c2, d3, g2]), (0, s.useIsoLayoutEffect)(() => () => {
        i2.current === o3 && (d3.current = null, M3.current) && (i2.current = null, u3.current = c2.current, g2.clear());
      }, [d3, i2, u3, o3, c2, g2]), r.useMemo(() => ({ hasProvider: p3, delayRef: u3, isInstantPhase: y2 }), [p3, u3, y2]);
    })(x2, { open: b2 }), q2 = (0, $.useHoverInteractionSharedState)(x2);
    C2.useSyncedValue("isInstantPhase", Y2);
    let G2 = C2.useState("disabled"), et2 = d2 ?? G2, en2 = (0, B.useValueAsRef)(et2), er2 = C2.useState("trackCursorAxis"), ea2 = C2.useState("disableHoverablePopup"), eo2 = r.useRef(false), es2 = (0, L.useTimeout)(), ei2 = r.useRef(void 0);
    function eu2() {
      return W2 ? 0 === (0, X.getDelay)(F2.current, "open") ? 0 : p2 ?? I2 ?? 600 : k2;
    }
    function el2(e3) {
      let t3 = R2.current;
      if (!t3 || !e3) return false;
      let n3 = (function(e4) {
        let t4 = e4;
        for (; t4; ) {
          let e5 = t4.closest(`[${Q}]`);
          if (e5) return e5;
          let n4 = t4.getRootNode();
          t4 = "host" in n4 && (0, g.isElement)(n4.host) ? n4.host : null;
        }
        return null;
      })(e3);
      return null !== n3 && n3 !== t3 && (0, y.contains)(t3, n3);
    }
    let ec2 = (0, J.useHoverReferenceInteraction)(x2, { enabled: !et2, mouseOnly: true, move: false, handleClose: ea2 || "both" === er2 ? null : (0, V.safePolygon)(), restMs: eu2, delay: () => null == w2 && W2 ? { close: (0, X.getDelay)(F2.current, "close") } : { close: T2 }, triggerElementRef: R2, isActiveTrigger: O2, isClosing: () => "ending" === C2.select("transitionStatus"), shouldOpen: () => !eo2.current }), ed2 = (0, Z.useFocus)(x2, { enabled: !et2 }).reference, ep2 = C2.useState("triggerProps", j2), eg2 = j2 || "none" !== er2;
    return (0, N.useRenderElement)("button", e2, { state: { open: b2 }, ref: [t2, A2, R2], props: [ec2, ed2, eg2 ? ep2 : void 0, { onMouseOver(e3) {
      ((e4) => {
        let t3, n3 = eo2.current, r2 = ee(e4), a3 = (eo2.current = t3 = el2(r2), t3 && (q2.openChangeTimeout.clear(), q2.restTimeout.clear(), q2.restTimeoutPending = false, es2.clear()), t3), o3 = R2.current, s2 = o3 && r2 && (0, y.contains)(o3, r2);
        if (a3 && C2.select("open") && C2.select("lastOpenChangeReason") === P.REASONS.triggerHover) return C2.setOpen(false, (0, h.createChangeEventDetails)(P.REASONS.triggerHover, e4));
        if (n3 && !a3 && s2 && !en2.current && !C2.select("open") && o3 && (0, f.isMouseLikePointerType)(ei2.current)) {
          let t4 = () => {
            eo2.current || en2.current || C2.select("open") || C2.setOpen(true, (0, h.createChangeEventDetails)(P.REASONS.triggerHover, e4, o3));
          }, n4 = eu2();
          0 === n4 ? (es2.clear(), t4()) : es2.start(n4, t4);
        }
      })(e3.nativeEvent);
    }, onFocus(e3) {
      el2(ee(e3.nativeEvent)) && e3.preventBaseUIHandler();
    }, onMouseLeave() {
      eo2.current = false, es2.clear(), ei2.current = void 0;
    }, onPointerEnter(e3) {
      ei2.current = e3.pointerType;
    }, onPointerDown(e3) {
      ei2.current = e3.pointerType, C2.set("closeOnClick", M2), M2 && !C2.select("open") && C2.cancelPendingOpen(e3.nativeEvent);
    }, onClick(e3) {
      M2 && !C2.select("open") && C2.cancelPendingOpen(e3.nativeEvent);
    }, id: m2, "data-trigger-disabled": et2 ? "" : void 0, [Q]: et2 ? void 0 : "" }, _2], stateAttributesMapping: D.triggerOpenStateMapping });
  });
  try {
    var en = "u" > typeof window ? window : e.g;
    en._sentryModuleMetadata = en._sentryModuleMetadata || {}, en._sentryModuleMetadata[new en.Error().stack] = Object.assign({}, en._sentryModuleMetadata[new en.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let er = r.createContext(void 0);
  var ea = e.i(403432), eo = e.i(801873);
  try {
    var es = "u" > typeof window ? window : e.g;
    es._sentryModuleMetadata = es._sentryModuleMetadata || {}, es._sentryModuleMetadata[new es.Error().stack] = Object.assign({}, es._sentryModuleMetadata[new es.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let ei = r.forwardRef(function(e2, n2) {
    let { children: a2, container: o2, className: s2, render: i2, style: u2, ...l2 } = e2, { node: c2, subtree: d2 } = (0, eo.useFloatingPortalNode)({ container: o2, ref: n2, componentProps: e2, elementProps: l2 });
    return d2 || c2 ? (0, t.jsxs)(r.Fragment, { children: [d2, c2 && ea.createPortal(a2, c2)] }) : null;
  });
  try {
    var eu = "u" > typeof window ? window : e.g;
    eu._sentryModuleMetadata = eu._sentryModuleMetadata || {}, eu._sentryModuleMetadata[new eu.Error().stack] = Object.assign({}, eu._sentryModuleMetadata[new eu.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let el = r.forwardRef(function(e2, n2) {
    let { keepMounted: r2 = false, ...a2 } = e2;
    return c().useState("mounted") || r2 ? (0, t.jsx)(er.Provider, { value: r2, children: (0, t.jsx)(ei, { ref: n2, ...a2 }) }) : null;
  });
  try {
    var ec = "u" > typeof window ? window : e.g;
    ec._sentryModuleMetadata = ec._sentryModuleMetadata || {}, ec._sentryModuleMetadata[new ec.Error().stack] = Object.assign({}, ec._sentryModuleMetadata[new ec.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let ed = r.createContext(void 0);
  function ep() {
    let e2 = r.useContext(ed);
    if (void 0 === e2) throw Error((0, i.default)(71));
    return e2;
  }
  var eg = e.i(247814), ey = e.i(867383), ef = e.i(199848);
  try {
    var eM = "u" > typeof window ? window : e.g;
    eM._sentryModuleMetadata = eM._sentryModuleMetadata || {}, eM._sentryModuleMetadata[new eM.Error().stack] = Object.assign({}, eM._sentryModuleMetadata[new eM.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let ew = r.forwardRef(function(e2, n2) {
    let { render: a2, className: o2, anchor: s2, positionMethod: u2 = "absolute", side: l2 = "top", align: d2 = "center", sideOffset: p2 = 0, alignOffset: g2 = 0, collisionBoundary: y2 = "clipping-ancestors", collisionPadding: f2 = 5, arrowPadding: M2 = 5, sticky: w2 = false, disableAnchorTracking: v2 = false, collisionAvoidance: h2 = ey.POPUP_COLLISION_AVOIDANCE, style: E2, ..._2 } = e2, S2 = c(), P2 = (function() {
      let e3 = r.useContext(er);
      if (void 0 === e3) throw Error((0, i.default)(70));
      return e3;
    })(), C2 = S2.useState("open"), m2 = S2.useState("mounted"), O2 = S2.useState("trackCursorAxis"), b2 = S2.useState("disableHoverablePopup"), x2 = S2.useState("floatingRootContext"), R2 = S2.useState("instantType"), k2 = S2.useState("transitionStatus"), T2 = S2.useState("adaptiveOrigin"), A2 = (0, eg.useAnchorPositioning)({ anchor: s2, positionMethod: u2, floatingRootContext: x2, mounted: m2, side: l2, sideOffset: p2, align: d2, alignOffset: g2, collisionBoundary: y2, collisionPadding: f2, sticky: w2, arrowPadding: M2, disableAnchorTracking: v2, keepMounted: P2, collisionAvoidance: h2, adaptiveOrigin: T2 }), j2 = r.useMemo(() => ({ open: C2, side: A2.side, align: A2.align, anchorHidden: A2.anchorHidden, instant: "none" !== O2 ? "tracking-cursor" : R2 }), [C2, A2.side, A2.align, A2.anchorHidden, O2, R2]), I2 = (0, ef.usePositioner)(e2, j2, { styles: A2.positionerStyles, transitionStatus: k2, props: _2, refs: [n2, S2.useStateSetter("positionerElement")], hidden: !m2, inert: !C2 || "both" === O2 || b2 });
    return (0, t.jsx)(ed.Provider, { value: A2, children: I2 });
  });
  var ev = e.i(811336), eh = e.i(343990), eE = e.i(452341);
  try {
    var e_ = "u" > typeof window ? window : e.g;
    e_._sentryModuleMetadata = e_._sentryModuleMetadata || {}, e_._sentryModuleMetadata[new e_.Error().stack] = Object.assign({}, e_._sentryModuleMetadata[new e_.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let eS = r.forwardRef(function(e2, t2) {
    let { render: n2, className: r2, style: a2, ...o2 } = e2, s2 = c(), { side: i2, align: u2 } = ep(), l2 = s2.useState("open"), d2 = s2.useState("instantType"), p2 = s2.useState("transitionStatus"), g2 = s2.useState("popupProps"), y2 = s2.useState("floatingRootContext"), f2 = s2.useState("disabled"), M2 = s2.useState("closeDelay");
    (0, ev.useOpenChangeComplete)({ open: l2, ref: s2.context.popupRef, onComplete() {
      l2 && s2.context.onOpenChangeComplete?.(true);
    } }), (0, eE.useHoverFloatingInteraction)(y2, { enabled: !f2, closeDelay: M2 });
    let w2 = s2.useStateSetter("popupElement");
    return (0, N.useRenderElement)("div", e2, { state: { open: l2, side: i2, align: u2, instant: d2, transitionStatus: p2 }, ref: [t2, s2.context.popupRef, w2], props: [E.FOCUSABLE_POPUP_PROPS, g2, (0, eh.getDisabledMountTransitionStyles)(p2), o2], stateAttributesMapping: D.popupTransitionStateMapping });
  });
  try {
    var eP = "u" > typeof window ? window : e.g;
    eP._sentryModuleMetadata = eP._sentryModuleMetadata || {}, eP._sentryModuleMetadata[new eP.Error().stack] = Object.assign({}, eP._sentryModuleMetadata[new eP.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let eC = r.forwardRef(function(e2, t2) {
    let { render: n2, className: r2, style: a2, ...o2 } = e2, s2 = c(), { arrowRef: i2, side: u2, align: l2, arrowUncentered: d2, arrowStyles: p2 } = ep(), g2 = s2.useState("open"), y2 = s2.useState("instantType");
    return (0, N.useRenderElement)("div", e2, { state: { open: g2, side: u2, align: l2, uncentered: d2, instant: y2 }, ref: [t2, i2], props: [{ style: p2, "aria-hidden": true }, o2], stateAttributesMapping: D.popupStateMapping });
  });
  try {
    var em = "u" > typeof window ? window : e.g;
    em._sentryModuleMetadata = em._sentryModuleMetadata || {}, em._sentryModuleMetadata[new em.Error().stack] = Object.assign({}, em._sentryModuleMetadata[new em.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var eO = e.i(233514);
  try {
    var eb = "u" > typeof window ? window : e.g;
    eb._sentryModuleMetadata = eb._sentryModuleMetadata || {}, eb._sentryModuleMetadata[new eb.Error().stack] = Object.assign({}, eb._sentryModuleMetadata[new eb.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let ex = r.forwardRef(function(e2, t2) {
    let { render: n2, className: r2, style: a2, children: o2, ...s2 } = e2, i2 = c(), u2 = ep(), l2 = i2.useState("instantType"), { children: d2, state: p2 } = (0, eO.usePopupViewport)({ store: i2, side: u2.side, children: o2 }), g2 = { activationDirection: p2.activationDirection, transitioning: p2.transitioning, instant: l2 };
    return (0, N.useRenderElement)("div", e2, { state: g2, ref: t2, props: [s2, { children: d2 }], stateAttributesMapping: eO.popupViewportStateMapping });
  });
  var eR = e.i(285630);
  try {
    var ek = "u" > typeof window ? window : e.g;
    ek._sentryModuleMetadata = ek._sentryModuleMetadata || {}, ek._sentryModuleMetadata[new ek.Error().stack] = Object.assign({}, ek._sentryModuleMetadata[new ek.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class eT extends eR.BasePopupHandle {
    constructor() {
      super((function() {
        let e2 = new O.PopupTriggerMap();
        return Object.assign(new C.NullStore(Object.freeze(k(void 0, e2)), Object.freeze(T(e2)), x), { setOpen: o.NOOP, cancelPendingOpen: o.NOOP });
      })(), "Tooltip");
    }
    open(e2) {
      this.openByTrigger(e2);
    }
    close() {
      this.closePopup();
    }
    get isOpen() {
      return this.attachedStore?.select("open") ?? false;
    }
  }
  e.s(["Arrow", 0, eC, "Handle", 0, eT, "Popup", 0, eS, "Portal", 0, el, "Positioner", 0, ew, "Provider", 0, function(e2) {
    let { delay: n2, closeDelay: a2, timeout: o2 = 400 } = e2, s2 = r.useMemo(() => ({ open: n2, close: a2 }), [n2, a2]);
    return (0, t.jsx)(U.Provider, { value: n2, children: (0, t.jsx)(W, { delay: s2, timeoutMs: o2, children: e2.children }) });
  }, "Root", 0, j, "Trigger", 0, et, "Viewport", 0, ex, "createHandle", 0, function() {
    return new eT();
  }], 337569);
  var eA = e.i(337569), eA = eA, ej = e.i(139895);
  try {
    var eI = window;
    eI._sentryModuleMetadata = eI._sentryModuleMetadata || {}, eI._sentryModuleMetadata[new eI.Error().stack] = Object.assign({}, eI._sentryModuleMetadata[new eI.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function eL({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", ...e2, children: (0, t.jsx)("path", { d: "M6.20801 1.34399C6.63641 0.885598 7.36357 0.885598 7.79199 1.34399L8.53027 2.13403C8.74384 2.36249 9.04585 2.48724 9.3584 2.47681L10.4395 2.44067C11.0663 2.4197 11.5798 2.93384 11.5586 3.56079L11.5234 4.64087C11.5129 4.95363 11.6376 5.25631 11.8662 5.46997L12.6562 6.20825C13.1143 6.63654 13.1141 7.36281 12.6562 7.79126L11.8662 8.53052C11.6377 8.7441 11.5129 9.04605 11.5234 9.35864L11.5586 10.4397C11.5797 11.0666 11.0663 11.5807 10.4395 11.5598L9.3584 11.5227C9.04582 11.5123 8.74383 11.638 8.53027 11.8665L7.79199 12.6565C7.36359 13.1148 6.63639 13.1148 6.20801 12.6565L5.46973 11.8665C5.25615 11.638 4.95418 11.5123 4.6416 11.5227L3.56152 11.5598C2.93452 11.581 2.42031 11.0668 2.44141 10.4397L2.47754 9.35864C2.48797 9.04605 2.36228 8.74409 2.13379 8.53052L1.34375 7.79126C0.885964 7.36284 0.885757 6.63655 1.34375 6.20825L2.13379 5.46997C2.3624 5.25629 2.4881 4.95363 2.47754 4.64087L2.44141 3.56079C2.42022 2.93371 2.93446 2.41948 3.56152 2.44067L4.6416 2.47681C4.95412 2.48725 5.25615 2.36245 5.46973 2.13403L6.20801 1.34399ZM9.29102 5.09302C9.06634 4.93254 8.7533 4.9846 8.59277 5.20923L6.68848 7.87622C6.59009 8.01335 6.38652 8.01519 6.28516 7.88013L5.40039 6.70044C5.23478 6.47963 4.92109 6.43444 4.7002 6.59985C4.47948 6.76548 4.43423 7.07919 4.59961 7.30005L5.48535 8.48071C5.99258 9.15672 7.01046 9.14475 7.50195 8.45728L9.40723 5.79126C9.5677 5.5666 9.51561 5.25355 9.29102 5.09302Z", fill: "currentColor" }) });
  }
  var eB = e.i(551360);
  try {
    var eD = window;
    eD._sentryModuleMetadata = eD._sentryModuleMetadata || {}, eD._sentryModuleMetadata[new eD.Error().stack] = Object.assign({}, eD._sentryModuleMetadata[new eD.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function eN({ className: e2 }) {
    let n2 = (0, ej.useIsTouchScreen)();
    return (0, t.jsx)(eA.Provider, { delay: 150, children: (0, t.jsxs)(eA.Root, { disabled: n2, children: [(0, t.jsx)(eA.Trigger, { "aria-label": "Official app", className: "group/badge flex cursor-pointer items-center justify-center", children: (0, t.jsx)(eL, { className: (0, eB.cn)("shrink-0 text-green-600", n2 ? "opacity-80" : "opacity-80 transition-opacity duration-150 ease-in-out group-hover/badge:opacity-100", e2) }) }), (0, t.jsx)(eA.Portal, { children: (0, t.jsx)(eA.Positioner, { sideOffset: 4, children: (0, t.jsx)(eA.Popup, { className: (0, eB.cn)("flex h-7 items-center justify-center rounded-lg border border-subtle-stroke bg-primary-background px-2 shadow-attio-3", "transition-[transform,scale,opacity] duration-150 ease-in-out", "data-starting-style:scale-90 data-starting-style:opacity-0", "data-ending-style:scale-90 data-ending-style:opacity-0"), children: (0, t.jsx)("p", { className: "whitespace-nowrap text-xs", children: "Official app" }) }) }) })] }) });
  }
  e.s(["AppsOfficialBadge", 0, function({ tooltip: e2 = false, className: n2 }) {
    return e2 ? (0, t.jsx)(eN, { className: n2 }) : (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(eL, { "aria-hidden": "true", className: (0, eB.cn)("shrink-0 text-green-600 opacity-80", n2) }), (0, t.jsx)("span", { className: "sr-only", children: "Official app" })] });
  }], 38061);
}, 139895, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useIsTouchScreen", 0, function() {
    let [e2, n2] = (0, t.useState)(false);
    return (0, t.useEffect)(() => {
      if ("function" != typeof window.matchMedia) return;
      let e3 = window.matchMedia("(pointer: coarse)");
      n2(e3.matches);
      let t2 = (e4) => {
        n2(e4.matches);
      };
      return e3.addEventListener("change", t2), () => {
        e3.removeEventListener("change", t2);
      };
    }, []), e2;
  }]);
}]);
