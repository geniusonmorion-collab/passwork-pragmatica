;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "d2f3fb33-7ff2-6a32-b050-54945267f479");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 624721, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s([], 369160), e.i(369160);
  var r = e.i(856757), a = e.i(579180);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let o = r.createContext(void 0);
  function s(e2) {
    let t2 = r.useContext(o);
    if (!e2 && void 0 === t2) throw Error((0, a.default)(27));
    return t2;
  }
  var i = e.i(256777), l = e.i(573568);
  try {
    var u = "u" > typeof window ? window : e.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let d = r.forwardRef(function(e2, t2) {
    let { render: r2, className: a2, style: n2, forceRender: o2 = false, ...u2 } = e2, d2 = s(), c2 = d2.useState("open"), p2 = d2.useState("nested"), y2 = d2.useState("mounted"), g2 = d2.useState("transitionStatus");
    return (0, i.useRenderElement)("div", e2, { state: { open: c2, transitionStatus: g2 }, ref: [d2.context.backdropRef, t2], stateAttributesMapping: l.popupTransitionStateMapping, props: [{ role: "presentation", hidden: !y2, style: { userSelect: "none", WebkitUserSelect: "none" } }, u2], enabled: o2 || !p2 });
  });
  var c = e.i(523237), p = e.i(930296), y = e.i(296232);
  try {
    var g = "u" > typeof window ? window : e.g;
    g._sentryModuleMetadata = g._sentryModuleMetadata || {}, g._sentryModuleMetadata[new g.Error().stack] = Object.assign({}, g._sentryModuleMetadata[new g.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let M = r.forwardRef(function(e2, t2) {
    let { render: r2, className: a2, style: n2, disabled: o2 = false, nativeButton: l2 = true, ...u2 } = e2, d2 = s(), g2 = d2.useState("open"), { getButtonProps: M2, buttonRef: w2 } = (0, c.useButton)({ disabled: o2, native: l2 });
    return (0, i.useRenderElement)("button", e2, { state: { disabled: o2 }, ref: [t2, w2], props: [{ onClick: function(e3) {
      g2 && d2.setOpen(false, (0, p.createChangeEventDetails)(y.REASONS.closePress, e3.nativeEvent));
    } }, u2, M2] });
  });
  var w = e.i(145505);
  try {
    var f = "u" > typeof window ? window : e.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let h = r.forwardRef(function(e2, t2) {
    let { render: r2, className: a2, style: n2, id: o2, ...l2 } = e2, u2 = s(), d2 = (0, w.useBaseUiId)(o2);
    return u2.useSyncedValueWithCleanup("descriptionElementId", d2), (0, i.useRenderElement)("p", e2, { ref: t2, props: [{ id: d2 }, l2] });
  });
  var _ = e.i(917976);
  try {
    var m = "u" > typeof window ? window : e.g;
    m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[new m.Error().stack] = Object.assign({}, m._sentryModuleMetadata[new m.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let v = r.createContext(void 0);
  function S() {
    let e2 = r.useContext(v);
    if (void 0 === e2) throw Error((0, a.default)(26));
    return e2;
  }
  var E = e.i(811336), P = e.i(925202), b = e.i(136343), O = e.i(618545);
  try {
    var R = "u" > typeof window ? window : e.g;
    R._sentryModuleMetadata = R._sentryModuleMetadata || {}, R._sentryModuleMetadata[new R.Error().stack] = Object.assign({}, R._sentryModuleMetadata[new R.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let x = { ...l.popupStateMapping, ...O.transitionStatusMapping, nestedDialogOpen: (e2) => e2 ? { "data-nested-dialog-open": "" } : null };
  var C = e.i(68982);
  try {
    var k = "u" > typeof window ? window : e.g;
    k._sentryModuleMetadata = k._sentryModuleMetadata || {}, k._sentryModuleMetadata[new k.Error().stack] = Object.assign({}, k._sentryModuleMetadata[new k.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let j = r.forwardRef(function(e2, t2) {
    let { render: r2, className: a2, style: n2, finalFocus: o2, initialFocus: l2, ...u2 } = e2, d2 = s(), c2 = d2.useState("descriptionElementId"), p2 = d2.useState("disablePointerDismissal"), y2 = d2.useState("floatingRootContext"), g2 = d2.useState("popupProps"), M2 = d2.useState("modal"), w2 = d2.useState("mounted"), f2 = d2.useState("nested"), h2 = d2.useState("nestedOpenDialogCount"), m2 = d2.useState("open"), v2 = d2.useState("openMethod"), O2 = d2.useState("titleElementId"), R2 = d2.useState("transitionStatus"), k2 = d2.useState("role"), j2 = y2.useState("floatingId");
    S(), (0, E.useOpenChangeComplete)({ open: m2, ref: d2.context.popupRef, onComplete() {
      m2 && d2.context.onOpenChangeComplete?.(true);
    } });
    let A2 = void 0 === l2 ? (0, b.createDefaultInitialFocus)(d2.context.popupRef) : l2, B2 = d2.useStateSetter("popupElement"), D2 = (0, i.useRenderElement)("div", e2, { state: { open: m2, nested: f2, transitionStatus: R2, nestedDialogOpen: h2 > 0 }, props: [g2, { id: j2, "aria-labelledby": O2, "aria-describedby": c2, role: k2, ...b.FOCUSABLE_POPUP_PROPS, hidden: !w2, onKeyDown(e3) {
      P.COMPOSITE_KEYS.has(e3.key) && e3.stopPropagation();
    }, style: { "--nested-dialogs": h2 } }, u2], ref: [t2, d2.context.popupRef, B2], stateAttributesMapping: x });
    return (0, C.jsx)(_.FloatingFocusManager, { context: y2, openInteractionType: v2, disabled: !w2, closeOnFocusOut: !p2, initialFocus: A2, returnFocus: o2, modal: false !== M2, restoreFocus: "popup", children: D2 });
  });
  var A = e.i(208169), B = e.i(801873), D = e.i(60125);
  try {
    var I = "u" > typeof window ? window : e.g;
    I._sentryModuleMetadata = I._sentryModuleMetadata || {}, I._sentryModuleMetadata[new I.Error().stack] = Object.assign({}, I._sentryModuleMetadata[new I.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let N = r.forwardRef(function(e2, t2) {
    let { keepMounted: r2 = false, ...a2 } = e2, n2 = s(), o2 = n2.useState("mounted"), i2 = n2.useState("modal"), l2 = n2.useState("open");
    return o2 || r2 ? (0, C.jsx)(v.Provider, { value: r2, children: (0, C.jsxs)(B.FloatingPortal, { ref: t2, ...a2, children: [o2 && true === i2 && (0, C.jsx)(D.InternalBackdrop, { ref: n2.context.internalBackdropRef, inert: (0, A.inertValue)(!l2) }), e2.children] }) }) : null;
  });
  var T = e.i(599607), K = e.i(547470), L = e.i(535896), F = e.i(635338);
  try {
    var U = "u" > typeof window ? window : e.g;
    U._sentryModuleMetadata = U._sentryModuleMetadata || {}, U._sentryModuleMetadata[new U.Error().stack] = Object.assign({}, U._sentryModuleMetadata[new U.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function $({ store: e2, parentContext: t2, isDrawer: a2 }) {
    let n2 = e2.useState("open"), o2 = e2.useState("disablePointerDismissal"), s2 = e2.useState("modal"), i2 = e2.useState("popupElement"), l2 = e2.useState("floatingRootContext"), [u2, d2] = r.useState(0), [c2, p2] = r.useState(0), y2 = 0 === u2, g2 = (0, L.useDismiss)(l2, { outsidePressEvent: () => e2.context.internalBackdropRef.current || e2.context.backdropRef.current ? "intentional" : { mouse: "trap-focus" === s2 ? "sloppy" : "intentional", touch: "sloppy" }, outsidePress(t3) {
      if (!e2.context.outsidePressEnabledRef.current || "button" in t3 && 0 !== t3.button) return false;
      if ("touches" in t3) {
        if ("touchend" === t3.type) {
          if (1 !== t3.changedTouches.length || 0 !== t3.touches.length) return false;
        } else if (1 !== t3.touches.length) return false;
      }
      let r2 = (0, F.getTarget)(t3);
      if (y2 && !o2) {
        if (s2) {
          let t4 = e2.context.internalBackdropRef.current, a3 = e2.context.backdropRef.current;
          return !t4 && !a3 || t4 === r2 || a3 === r2 || (0, F.contains)(r2, i2) && !r2?.hasAttribute("data-base-ui-portal");
        }
        return true;
      }
      return false;
    }, escapeKey: y2 });
    return (0, K.useScrollLock)(n2 && true === s2, i2), e2.useContextCallback("onNestedDialogOpen", (e3, t3) => {
      d2(e3), p2(t3);
    }), (0, T.useIsoLayoutEffect)(() => (t2?.onNestedDialogOpen && (n2 ? t2.onNestedDialogOpen(u2 + 1, c2 + +!!a2) : t2.onNestedDialogOpen(0, 0)), () => {
      t2?.onNestedDialogOpen && n2 && t2.onNestedDialogOpen(0, 0);
    }), [a2, n2, u2, c2, t2]), (0, b.usePopupInteractionProps)(e2, { activeTriggerProps: g2.reference, inactiveTriggerProps: g2.trigger, popupProps: g2.floating, nestedOpenDialogCount: u2, nestedOpenDrawerCount: c2 }), null;
  }
  var V = e.i(939007), W = e.i(631457), H = e.i(190433), z = e.i(521703);
  try {
    var q = "u" > typeof window ? window : e.g;
    q._sentryModuleMetadata = q._sentryModuleMetadata || {}, q._sentryModuleMetadata[new q.Error().stack] = Object.assign({}, q._sentryModuleMetadata[new q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let G = { ...H.popupStoreSelectors, modal: (e2) => e2.modal, nested: (e2) => e2.nested, nestedOpenDialogCount: (e2) => e2.nestedOpenDialogCount, nestedOpenDrawerCount: (e2) => e2.nestedOpenDrawerCount, disablePointerDismissal: (e2) => e2.disablePointerDismissal, openMethod: (e2) => e2.openMethod, descriptionElementId: (e2) => e2.descriptionElementId, titleElementId: (e2) => e2.titleElementId, viewportElement: (e2) => e2.viewportElement, role: (e2) => e2.role };
  class X extends V.ReactStore {
    constructor(e2, t2, r2) {
      const a2 = new z.PopupTriggerMap();
      super(Y(e2, a2, t2, r2), Z(a2), G);
    }
    setOpen = (e2, t2) => {
      if (t2.preventUnmountOnClose = () => {
        this.set("preventUnmountingOnClose", true);
      }, e2 || null != t2.trigger || null == this.state.activeTriggerId || (t2.trigger = this.state.activeTriggerElement ?? void 0), this.context.onOpenChange?.(e2, t2), t2.isCanceled) return;
      this.state.floatingRootContext.dispatchOpenChange(e2, t2);
      let r2 = { open: e2 };
      (0, b.setPopupOpenState)(r2, e2, t2.trigger), this.update(r2);
    };
  }
  function Y(e2, t2, r2, a2 = false) {
    let n2 = { ...(0, H.createInitialPopupStoreState)(), modal: true, disablePointerDismissal: false, viewportElement: null, descriptionElementId: void 0, titleElementId: void 0, openMethod: null, nested: false, nestedOpenDialogCount: 0, nestedOpenDrawerCount: 0, role: "dialog", ...e2 };
    return n2.floatingRootContext = (0, H.createPopupFloatingRootContext)(t2, r2, a2), n2;
  }
  function Z(e2) {
    return { popupRef: r.createRef(), backdropRef: r.createRef(), internalBackdropRef: r.createRef(), outsidePressEnabledRef: { current: true }, triggerElements: e2, onOpenChange: void 0, onOpenChangeComplete: void 0 };
  }
  try {
    var J = "u" > typeof window ? window : e.g;
    J._sentryModuleMetadata = J._sentryModuleMetadata || {}, J._sentryModuleMetadata[new J.Error().stack] = Object.assign({}, J._sentryModuleMetadata[new J.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var Q = "u" > typeof window ? window : e.g;
    Q._sentryModuleMetadata = Q._sentryModuleMetadata || {}, Q._sentryModuleMetadata[new Q.Error().stack] = Object.assign({}, Q._sentryModuleMetadata[new Q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var ee = "u" > typeof window ? window : e.g;
    ee._sentryModuleMetadata = ee._sentryModuleMetadata || {}, ee._sentryModuleMetadata[new ee.Error().stack] = Object.assign({}, ee._sentryModuleMetadata[new ee.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let et = r.forwardRef(function(e2, t2) {
    let { render: r2, className: a2, style: n2, children: o2, ...l2 } = e2, u2 = S(), d2 = s(), c2 = d2.useState("open"), p2 = d2.useState("nested"), y2 = d2.useState("transitionStatus"), g2 = d2.useState("nestedOpenDialogCount"), M2 = d2.useState("mounted"), w2 = d2.useStateSetter("viewportElement");
    return (0, i.useRenderElement)("div", e2, { enabled: u2 || M2, state: { open: c2, nested: p2, transitionStatus: y2, nestedDialogOpen: g2 > 0 }, ref: [t2, w2], stateAttributesMapping: x, props: [{ role: "presentation", hidden: !M2, style: { pointerEvents: c2 ? void 0 : "none" }, children: o2 }, l2] });
  });
  try {
    var er = "u" > typeof window ? window : e.g;
    er._sentryModuleMetadata = er._sentryModuleMetadata || {}, er._sentryModuleMetadata[new er.Error().stack] = Object.assign({}, er._sentryModuleMetadata[new er.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let ea = r.forwardRef(function(e2, t2) {
    let { render: r2, className: a2, style: n2, id: o2, ...l2 } = e2, u2 = s(), d2 = (0, w.useBaseUiId)(o2);
    return u2.useSyncedValueWithCleanup("titleElementId", d2), (0, i.useRenderElement)("h2", e2, { ref: t2, props: [{ id: d2 }, l2] });
  });
  var en = e.i(867383), eo = e.i(610993), es = e.i(84588), ei = e.i(522353);
  try {
    var el = "u" > typeof window ? window : e.g;
    el._sentryModuleMetadata = el._sentryModuleMetadata || {}, el._sentryModuleMetadata[new el.Error().stack] = Object.assign({}, el._sentryModuleMetadata[new el.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let eu = r.forwardRef(function(e2, t2) {
    let { render: n2, className: o2, style: u2, disabled: d2 = false, nativeButton: p2 = true, id: y2, payload: g2, handle: M2, ...f2 } = e2, h2 = s(true), _2 = (0, eo.usePopupHandleStore)(M2) ?? h2;
    if (!_2) throw Error((0, a.default)(79));
    let m2 = (0, w.useBaseUiId)(y2), v2 = _2.useState("floatingRootContext"), S2 = _2.useState("isOpenedByTrigger", m2), E2 = _2.useState("triggerPopupId", m2), P2 = r.useRef(null), { registerTrigger: O2, isMountedByThisTrigger: R2 } = (0, b.useTriggerDataForwarding)(m2, P2, _2, { payload: g2 }), { getButtonProps: x2, buttonRef: C2 } = (0, c.useButton)({ disabled: d2, native: p2 }), k2 = (0, es.useClick)(v2), j2 = (0, ei.useOpenMethodTriggerProps)(() => _2.select("open"), (e3) => {
      _2.set("openMethod", e3);
    }), A2 = _2.useState("triggerProps", R2);
    return (0, i.useRenderElement)("button", e2, { state: { disabled: d2, open: S2 }, ref: [C2, t2, O2, P2], props: [k2.reference, A2, j2, { [en.CLICK_TRIGGER_IDENTIFIER]: "", id: m2, "aria-haspopup": "dialog", "aria-expanded": S2, "aria-controls": E2 }, f2, x2], stateAttributesMapping: l.triggerOpenStateMapping });
  });
  var ed = e.i(285630);
  try {
    var ec = "u" > typeof window ? window : e.g;
    ec._sentryModuleMetadata = ec._sentryModuleMetadata || {}, ec._sentryModuleMetadata[new ec.Error().stack] = Object.assign({}, ec._sentryModuleMetadata[new ec.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class ep extends ed.BasePopupHandle {
    constructor() {
      super((function() {
        let e2 = new z.PopupTriggerMap();
        return new W.NullStore(Object.freeze(Y(void 0, e2)), Object.freeze(Z(e2)), G);
      })(), "Dialog", false);
    }
    open(e2) {
      this.openByTrigger(e2);
    }
    openWithPayload(e2) {
      let t2 = this.attachedStore;
      null === t2 || (t2.set("payload", e2), t2.setOpen(true, (0, p.createChangeEventDetails)(y.REASONS.imperativeAction)));
    }
    close() {
      this.closePopup();
    }
    get isOpen() {
      return this.attachedStore?.select("open") ?? false;
    }
  }
  e.s(["Backdrop", 0, d, "Close", 0, M, "Description", 0, h, "Handle", 0, ep, "Popup", 0, j, "Portal", 0, N, "Root", 0, function(e2) {
    return (function(e3, t2) {
      let { children: a2, open: n2, defaultOpen: i2 = false, onOpenChange: l2, onOpenChangeComplete: u2, disablePointerDismissal: d2 = false, modal: c2 = true, actionsRef: g2, handle: M2, triggerId: w2, defaultTriggerId: f2 = null } = t2, h2 = "alert-dialog" === e3, _2 = s(true), m2 = { modal: !!h2 || c2, disablePointerDismissal: h2 || d2, nested: null != _2, role: h2 ? "alertdialog" : "dialog" }, v2 = (0, b.usePopupRootStore)((e4, t3) => new X({ open: i2, openProp: n2, activeTriggerId: f2, triggerIdProp: w2, ...m2 }, e4, t3), true);
      v2.useControlledProp("openProp", n2), v2.useControlledProp("triggerIdProp", w2), v2.useSyncedValues(m2), v2.useContextCallback("onOpenChange", l2), v2.useContextCallback("onOpenChangeComplete", u2);
      let S2 = v2.useState("open"), E2 = v2.useState("mounted"), P2 = v2.useState("payload");
      (0, b.usePopupRootSync)(v2, S2), (0, b.useImplicitActiveTrigger)(v2);
      let { forceUnmount: O2 } = (0, b.useOpenStateTransitions)(S2, v2);
      r.useImperativeHandle(g2, () => ({ unmount: O2, close: () => v2.setOpen(false, (0, p.createChangeEventDetails)(y.REASONS.imperativeAction)) }), [O2, v2]);
      let R2 = S2 || E2;
      return (0, C.jsxs)(o.Provider, { value: v2, children: [M2 && (0, C.jsx)(b.PopupHandleAttachment, { handle: M2, store: v2 }), R2 && (0, C.jsx)($, { store: v2, parentContext: _2?.context, isDrawer: "drawer" === e3 }), "function" == typeof a2 ? a2({ payload: P2 }) : a2] });
    })("dialog", e2);
  }, "Title", 0, ea, "Trigger", 0, eu, "Viewport", 0, et, "createHandle", 0, function() {
    return new ep();
  }], 724933);
  var ey = e.i(724933);
  e.s(["Dialog", 0, ey], 624721);
}, 514777, (e) => {
  "use strict";
  var t = e.i(856757);
  e.i(403432);
  var r = e.i(205978), a = e.i(68982);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var o = /* @__PURE__ */ Symbol.for("react.lazy"), s = t[" use ".trim().toString()];
  function i(e2) {
    var t2;
    return null != e2 && "object" == typeof e2 && "$$typeof" in e2 && e2.$$typeof === o && "_payload" in e2 && "object" == typeof (t2 = e2._payload) && null !== t2 && "then" in t2;
  }
  var l = /* @__PURE__ */ Symbol("radix.slottable");
  function u(e2) {
    return t.isValidElement(e2) && "function" == typeof e2.type && "__radixId" in e2.type && e2.type.__radixId === l;
  }
  try {
    var d = "u" > typeof window ? window : e.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e2, n2) => {
    var o2, l2;
    let d2, c2, p, y = (l2 = o2 = `Primitive.${n2}`, (d2 = t.forwardRef((e3, a2) => {
      let { children: n3, ...o3 } = e3;
      if (i(n3) && "function" == typeof s && (n3 = s(n3._payload)), t.isValidElement(n3)) {
        var l3;
        let e4, s2, i2 = (l3 = n3, (s2 = (e4 = Object.getOwnPropertyDescriptor(l3.props, "ref")?.get) && "isReactWarning" in e4 && e4.isReactWarning) ? l3.ref : (s2 = (e4 = Object.getOwnPropertyDescriptor(l3, "ref")?.get) && "isReactWarning" in e4 && e4.isReactWarning) ? l3.props.ref : l3.props.ref || l3.ref), u2 = (function(e5, t2) {
          let r2 = { ...t2 };
          for (let a3 in t2) {
            let n4 = e5[a3], o4 = t2[a3];
            /^on[A-Z]/.test(a3) ? n4 && o4 ? r2[a3] = (...e6) => {
              let t3 = o4(...e6);
              return n4(...e6), t3;
            } : n4 && (r2[a3] = n4) : "style" === a3 ? r2[a3] = { ...n4, ...o4 } : "className" === a3 && (r2[a3] = [n4, o4].filter(Boolean).join(" "));
          }
          return { ...e5, ...r2 };
        })(o3, n3.props);
        return n3.type !== t.Fragment && (u2.ref = a2 ? (0, r.composeRefs)(a2, i2) : i2), t.cloneElement(n3, u2);
      }
      return t.Children.count(n3) > 1 ? t.Children.only(null) : null;
    })).displayName = `${l2}.SlotClone`, c2 = d2, (p = t.forwardRef((e3, r2) => {
      let { children: n3, ...o3 } = e3;
      i(n3) && "function" == typeof s && (n3 = s(n3._payload));
      let l3 = t.Children.toArray(n3), d3 = l3.find(u);
      if (d3) {
        let e4 = d3.props.children, n4 = l3.map((r3) => r3 !== d3 ? r3 : t.Children.count(e4) > 1 ? t.Children.only(null) : t.isValidElement(e4) ? e4.props.children : null);
        return (0, a.jsx)(c2, { ...o3, ref: r2, children: t.isValidElement(e4) ? t.cloneElement(e4, void 0, n4) : null });
      }
      return (0, a.jsx)(c2, { ...o3, ref: r2, children: n3 });
    })).displayName = `${o2}.Slot`, p), g = t.forwardRef((e3, t2) => {
      let { asChild: r2, ...o3 } = e3;
      return "u" > typeof window && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), (0, a.jsx)(r2 ? y : n2, { ...o3, ref: t2 });
    });
    return g.displayName = `Primitive.${n2}`, { ...e2, [n2]: g };
  }, {});
  e.s(["Primitive", 0, c], 514777);
}, 451298, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(66583);
  try {
    var a = window;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let { Context: n, useSearch: o } = (0, r.createSearchContext)("AppsSearch");
  var s = e.i(915501), i = e.i(304299), l = e.i(847502), u = e.i(38061), d = e.i(805952), c = e.i(11793), p = e.i(36031), y = e.i(858659);
  try {
    var g = window;
    g._sentryModuleMetadata = g._sentryModuleMetadata || {}, g._sentryModuleMetadata[new g.Error().stack] = Object.assign({}, g._sentryModuleMetadata[new g.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let M = { highlighted: "bg-blue-500/10 text-link-foreground" };
  function w({ hit: e2 }) {
    let { objectID: r2, title: a2, href: n2, logo_url: o2, is_official: d2, categories: y2, developer_name: g2 } = e2, f2 = y2?.slice(0, 2) || [];
    return (0, t.jsx)(c.SearchResultCard, { href: n2, value: r2, icon: (0, t.jsx)(p.SearchResultIcon, { className: "bg-primary-background", children: (0, t.jsx)(s.default, { src: o2, alt: a2, width: 37, height: 37, className: "size-full object-cover", loading: "eager" }) }), title: (0, t.jsx)(i.Highlight, { attribute: "title", hit: e2, classNames: M }), badge: d2 ? (0, t.jsx)(u.AppsOfficialBadge, { className: "size-3" }) : void 0, description: (0, t.jsx)(l.Snippet, { attribute: "short_description", hit: e2, classNames: M }), footer: g2 || f2.length > 0 ? (0, t.jsxs)("div", { className: "flex flex-wrap items-center gap-1.5 text-[10px]", children: [g2 && (0, t.jsxs)("span", { className: "text-tertiary-foreground", children: ["Built by ", g2] }), g2 && f2.length > 0 && (0, t.jsx)("span", { className: "text-accent-foreground", children: "\xB7" }), f2.map((e3) => (0, t.jsx)("span", { className: "text-accent-foreground", children: e3.label }, e3.id))] }) : void 0 });
  }
  function f({ hits: e2, query: r2, settledQuery: a2, isSearching: n2 }) {
    let o2 = e2.length > 0, s2 = r2.length > 0 && 0 === e2.length;
    return (0, t.jsx)("div", { className: "flex-1 scroll-py-2 overflow-auto py-2", children: o2 ? (0, t.jsx)(y.SearchResultList, { className: "overflow-hidden", children: e2.map((e3) => (0, t.jsx)(w, { hit: e3 }, e3.objectID)) }) : s2 ? (0, t.jsx)(d.SearchNoResults, { query: a2, label: "No apps matching", visible: !n2 }) : null });
  }
  var h = e.i(693247), _ = e.i(482241), m = e.i(791768);
  try {
    var v = window;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AppsSearch", 0, function({ defaultResults: e2 }) {
    return (0, t.jsx)(_.SearchInstantSearchProvider, { indexName: m.env.NEXT_PUBLIC_POLARIS_ALGOLIA_APPS_INDEX_NAME, Context: n, defaultResults: e2, children: (0, t.jsx)(h.SearchDialog, { useSearch: o, ariaLabel: "Search Apps", placeholder: "Search apps...", renderResults: (e3) => (0, t.jsx)(f, { ...e3 }) }) });
  }], 451298);
}, 28276, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(224253), a = e.i(992766);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["LinkWithHoverPrefetch", 0, function({ onMouseEnter: e2, onFocus: n2, ...o }) {
    let s = (0, a.useRouter)();
    function i() {
      "string" == typeof o.href && s.prefetch(o.href);
    }
    return (0, t.jsx)(r.default, { ...o, prefetch: false, onMouseEnter: (t2) => {
      i(), e2?.(t2);
    }, onFocus: (e3) => {
      i(), n2?.(e3);
    } });
  }]);
}, 12594, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757), a = e.i(618807);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let o = (0, r.createContext)(null);
  e.s(["SearchModalProvider", 0, function({ urlParamName: e2 = "s", children: n2 }) {
    let [s, i] = (0, r.useState)(false), [l, u] = (0, r.useState)(null), d = (0, r.useRef)(false), c = (0, r.useRef)(false), p = (0, r.useRef)(null), y = (0, r.useRef)(e2);
    y.current = e2, (0, r.useEffect)(() => {
      let e3 = new URLSearchParams(window.location.search).get(y.current);
      null !== e3 && (i(true), u(e3));
    }, []);
    let g = (0, a.useAppPathname)(), M = (0, r.useCallback)((e3) => {
      let t2 = new URL(window.location.href);
      return null !== e3 ? t2.searchParams.set(y.current, e3) : t2.searchParams.delete(y.current), `${t2.pathname}${t2.search}`;
    }, []), w = (0, r.useRef)(g);
    if ((0, r.useEffect)(() => {
      let e3 = () => {
        if (c.current) {
          c.current = false;
          let e5 = new URL(window.location.href);
          e5.searchParams.has(y.current) && (e5.searchParams.delete(y.current), window.history.replaceState(null, "", `${e5.pathname}${e5.search}`));
          return;
        }
        let e4 = new URLSearchParams(window.location.search).get(y.current);
        null !== e4 ? (w.current = window.location.pathname, d.current = true, i(true), u(e4)) : (i(false), u(null), d.current = false);
      };
      return window.addEventListener("popstate", e3), () => window.removeEventListener("popstate", e3);
    }, []), g !== w.current) {
      w.current = g;
      let e3 = new URLSearchParams(window.location.search).has(y.current);
      s && !e3 && (i(false), u(null), d.current = false, requestAnimationFrame(() => {
        let e4 = new URL(window.location.href);
        e4.searchParams.has(y.current) && (e4.searchParams.delete(y.current), window.history.replaceState(null, "", `${e4.pathname}${e4.search}`));
      }));
    }
    let f = (0, r.useCallback)((e3 = "") => {
      i(true), u(e3), d.current || (d.current = true, requestAnimationFrame(() => {
        window.history.pushState(null, "", M(e3));
      }));
    }, [M]), h = (0, r.useCallback)((e3) => {
      u(e3), p.current && clearTimeout(p.current), p.current = setTimeout(() => {
        window.history.replaceState(null, "", M(e3));
      }, 300);
    }, [M]);
    (0, r.useEffect)(() => () => {
      p.current && clearTimeout(p.current);
    }, []);
    let _ = (0, r.useCallback)(() => {
      p.current && (clearTimeout(p.current), p.current = null), i(false), u(null), d.current ? (d.current = false, c.current = true, window.history.back()) : requestAnimationFrame(() => {
        window.history.replaceState(null, "", M(null));
      });
    }, [M]), m = (0, r.useMemo)(() => ({ closeSearchModal: _, isOpen: s, openSearchModal: f, query: l, syncQueryToUrl: h }), [_, s, f, l, h]);
    return (0, t.jsx)(o.Provider, { value: m, children: n2 });
  }, "useSearchModal", 0, function() {
    let e2 = (0, r.use)(o);
    if (!e2) throw Error("useSearchModal must be used within SearchModalProvider");
    return e2;
  }]);
}]);
