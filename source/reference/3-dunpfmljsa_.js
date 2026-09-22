;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "0578a3a9-96be-258e-db95-f4e1a41f180a");
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
  let s = r.createContext(void 0);
  function o(e2) {
    let t2 = r.useContext(s);
    if (!e2 && void 0 === t2) throw Error((0, a.default)(27));
    return t2;
  }
  var i = e.i(256777), l = e.i(573568);
  try {
    var d = "u" > typeof window ? window : e.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let u = r.forwardRef(function(e2, t2) {
    let { render: r2, className: a2, style: n2, forceRender: s2 = false, ...d2 } = e2, u2 = o(), c2 = u2.useState("open"), p2 = u2.useState("nested"), y2 = u2.useState("mounted"), h2 = u2.useState("transitionStatus");
    return (0, i.useRenderElement)("div", e2, { state: { open: c2, transitionStatus: h2 }, ref: [u2.context.backdropRef, t2], stateAttributesMapping: l.popupTransitionStateMapping, props: [{ role: "presentation", hidden: !y2, style: { userSelect: "none", WebkitUserSelect: "none" } }, d2], enabled: s2 || !p2 });
  });
  var c = e.i(523237), p = e.i(930296), y = e.i(296232);
  try {
    var h = "u" > typeof window ? window : e.g;
    h._sentryModuleMetadata = h._sentryModuleMetadata || {}, h._sentryModuleMetadata[new h.Error().stack] = Object.assign({}, h._sentryModuleMetadata[new h.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let M = r.forwardRef(function(e2, t2) {
    let { render: r2, className: a2, style: n2, disabled: s2 = false, nativeButton: l2 = true, ...d2 } = e2, u2 = o(), h2 = u2.useState("open"), { getButtonProps: M2, buttonRef: g2 } = (0, c.useButton)({ disabled: s2, native: l2 });
    return (0, i.useRenderElement)("button", e2, { state: { disabled: s2 }, ref: [t2, g2], props: [{ onClick: function(e3) {
      h2 && u2.setOpen(false, (0, p.createChangeEventDetails)(y.REASONS.closePress, e3.nativeEvent));
    } }, d2, M2] });
  });
  var g = e.i(145505);
  try {
    var f = "u" > typeof window ? window : e.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let w = r.forwardRef(function(e2, t2) {
    let { render: r2, className: a2, style: n2, id: s2, ...l2 } = e2, d2 = o(), u2 = (0, g.useBaseUiId)(s2);
    return d2.useSyncedValueWithCleanup("descriptionElementId", u2), (0, i.useRenderElement)("p", e2, { ref: t2, props: [{ id: u2 }, l2] });
  });
  var m = e.i(917976);
  try {
    var C = "u" > typeof window ? window : e.g;
    C._sentryModuleMetadata = C._sentryModuleMetadata || {}, C._sentryModuleMetadata[new C.Error().stack] = Object.assign({}, C._sentryModuleMetadata[new C.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let _ = r.createContext(void 0);
  function x() {
    let e2 = r.useContext(_);
    if (void 0 === e2) throw Error((0, a.default)(26));
    return e2;
  }
  var v = e.i(811336), b = e.i(925202), j = e.i(136343), S = e.i(618545);
  try {
    var E = "u" > typeof window ? window : e.g;
    E._sentryModuleMetadata = E._sentryModuleMetadata || {}, E._sentryModuleMetadata[new E.Error().stack] = Object.assign({}, E._sentryModuleMetadata[new E.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let P = { ...l.popupStateMapping, ...S.transitionStatusMapping, nestedDialogOpen: (e2) => e2 ? { "data-nested-dialog-open": "" } : null };
  var k = e.i(68982);
  try {
    var O = "u" > typeof window ? window : e.g;
    O._sentryModuleMetadata = O._sentryModuleMetadata || {}, O._sentryModuleMetadata[new O.Error().stack] = Object.assign({}, O._sentryModuleMetadata[new O.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let R = r.forwardRef(function(e2, t2) {
    let { render: r2, className: a2, style: n2, finalFocus: s2, initialFocus: l2, ...d2 } = e2, u2 = o(), c2 = u2.useState("descriptionElementId"), p2 = u2.useState("disablePointerDismissal"), y2 = u2.useState("floatingRootContext"), h2 = u2.useState("popupProps"), M2 = u2.useState("modal"), g2 = u2.useState("mounted"), f2 = u2.useState("nested"), w2 = u2.useState("nestedOpenDialogCount"), C2 = u2.useState("open"), _2 = u2.useState("openMethod"), S2 = u2.useState("titleElementId"), E2 = u2.useState("transitionStatus"), O2 = u2.useState("role"), R2 = y2.useState("floatingId");
    x(), (0, v.useOpenChangeComplete)({ open: C2, ref: u2.context.popupRef, onComplete() {
      C2 && u2.context.onOpenChangeComplete?.(true);
    } });
    let A2 = void 0 === l2 ? (0, j.createDefaultInitialFocus)(u2.context.popupRef) : l2, B2 = u2.useStateSetter("popupElement"), N2 = (0, i.useRenderElement)("div", e2, { state: { open: C2, nested: f2, transitionStatus: E2, nestedDialogOpen: w2 > 0 }, props: [h2, { id: R2, "aria-labelledby": S2, "aria-describedby": c2, role: O2, ...j.FOCUSABLE_POPUP_PROPS, hidden: !g2, onKeyDown(e3) {
      b.COMPOSITE_KEYS.has(e3.key) && e3.stopPropagation();
    }, style: { "--nested-dialogs": w2 } }, d2], ref: [t2, u2.context.popupRef, B2], stateAttributesMapping: P });
    return (0, k.jsx)(m.FloatingFocusManager, { context: y2, openInteractionType: _2, disabled: !g2, closeOnFocusOut: !p2, initialFocus: A2, returnFocus: s2, modal: false !== M2, restoreFocus: "popup", children: N2 });
  });
  var A = e.i(208169), B = e.i(801873), N = e.i(60125);
  try {
    var D = "u" > typeof window ? window : e.g;
    D._sentryModuleMetadata = D._sentryModuleMetadata || {}, D._sentryModuleMetadata[new D.Error().stack] = Object.assign({}, D._sentryModuleMetadata[new D.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let I = r.forwardRef(function(e2, t2) {
    let { keepMounted: r2 = false, ...a2 } = e2, n2 = o(), s2 = n2.useState("mounted"), i2 = n2.useState("modal"), l2 = n2.useState("open");
    return s2 || r2 ? (0, k.jsx)(_.Provider, { value: r2, children: (0, k.jsxs)(B.FloatingPortal, { ref: t2, ...a2, children: [s2 && true === i2 && (0, k.jsx)(N.InternalBackdrop, { ref: n2.context.internalBackdropRef, inert: (0, A.inertValue)(!l2) }), e2.children] }) }) : null;
  });
  var H = e.i(599607), K = e.i(547470), L = e.i(535896), T = e.i(635338);
  try {
    var $ = "u" > typeof window ? window : e.g;
    $._sentryModuleMetadata = $._sentryModuleMetadata || {}, $._sentryModuleMetadata[new $.Error().stack] = Object.assign({}, $._sentryModuleMetadata[new $.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function F({ store: e2, parentContext: t2, isDrawer: a2 }) {
    let n2 = e2.useState("open"), s2 = e2.useState("disablePointerDismissal"), o2 = e2.useState("modal"), i2 = e2.useState("popupElement"), l2 = e2.useState("floatingRootContext"), [d2, u2] = r.useState(0), [c2, p2] = r.useState(0), y2 = 0 === d2, h2 = (0, L.useDismiss)(l2, { outsidePressEvent: () => e2.context.internalBackdropRef.current || e2.context.backdropRef.current ? "intentional" : { mouse: "trap-focus" === o2 ? "sloppy" : "intentional", touch: "sloppy" }, outsidePress(t3) {
      if (!e2.context.outsidePressEnabledRef.current || "button" in t3 && 0 !== t3.button) return false;
      if ("touches" in t3) {
        if ("touchend" === t3.type) {
          if (1 !== t3.changedTouches.length || 0 !== t3.touches.length) return false;
        } else if (1 !== t3.touches.length) return false;
      }
      let r2 = (0, T.getTarget)(t3);
      if (y2 && !s2) {
        if (o2) {
          let t4 = e2.context.internalBackdropRef.current, a3 = e2.context.backdropRef.current;
          return !t4 && !a3 || t4 === r2 || a3 === r2 || (0, T.contains)(r2, i2) && !r2?.hasAttribute("data-base-ui-portal");
        }
        return true;
      }
      return false;
    }, escapeKey: y2 });
    return (0, K.useScrollLock)(n2 && true === o2, i2), e2.useContextCallback("onNestedDialogOpen", (e3, t3) => {
      u2(e3), p2(t3);
    }), (0, H.useIsoLayoutEffect)(() => (t2?.onNestedDialogOpen && (n2 ? t2.onNestedDialogOpen(d2 + 1, c2 + +!!a2) : t2.onNestedDialogOpen(0, 0)), () => {
      t2?.onNestedDialogOpen && n2 && t2.onNestedDialogOpen(0, 0);
    }), [a2, n2, d2, c2, t2]), (0, j.usePopupInteractionProps)(e2, { activeTriggerProps: h2.reference, inactiveTriggerProps: h2.trigger, popupProps: h2.floating, nestedOpenDialogCount: d2, nestedOpenDrawerCount: c2 }), null;
  }
  var Z = e.i(939007), U = e.i(631457), V = e.i(190433), W = e.i(521703);
  try {
    var z = "u" > typeof window ? window : e.g;
    z._sentryModuleMetadata = z._sentryModuleMetadata || {}, z._sentryModuleMetadata[new z.Error().stack] = Object.assign({}, z._sentryModuleMetadata[new z.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let q = { ...V.popupStoreSelectors, modal: (e2) => e2.modal, nested: (e2) => e2.nested, nestedOpenDialogCount: (e2) => e2.nestedOpenDialogCount, nestedOpenDrawerCount: (e2) => e2.nestedOpenDrawerCount, disablePointerDismissal: (e2) => e2.disablePointerDismissal, openMethod: (e2) => e2.openMethod, descriptionElementId: (e2) => e2.descriptionElementId, titleElementId: (e2) => e2.titleElementId, viewportElement: (e2) => e2.viewportElement, role: (e2) => e2.role };
  class G extends Z.ReactStore {
    constructor(e2, t2, r2) {
      const a2 = new W.PopupTriggerMap();
      super(J(e2, a2, t2, r2), Q(a2), q);
    }
    setOpen = (e2, t2) => {
      if (t2.preventUnmountOnClose = () => {
        this.set("preventUnmountingOnClose", true);
      }, e2 || null != t2.trigger || null == this.state.activeTriggerId || (t2.trigger = this.state.activeTriggerElement ?? void 0), this.context.onOpenChange?.(e2, t2), t2.isCanceled) return;
      this.state.floatingRootContext.dispatchOpenChange(e2, t2);
      let r2 = { open: e2 };
      (0, j.setPopupOpenState)(r2, e2, t2.trigger), this.update(r2);
    };
  }
  function J(e2, t2, r2, a2 = false) {
    let n2 = { ...(0, V.createInitialPopupStoreState)(), modal: true, disablePointerDismissal: false, viewportElement: null, descriptionElementId: void 0, titleElementId: void 0, openMethod: null, nested: false, nestedOpenDialogCount: 0, nestedOpenDrawerCount: 0, role: "dialog", ...e2 };
    return n2.floatingRootContext = (0, V.createPopupFloatingRootContext)(t2, r2, a2), n2;
  }
  function Q(e2) {
    return { popupRef: r.createRef(), backdropRef: r.createRef(), internalBackdropRef: r.createRef(), outsidePressEnabledRef: { current: true }, triggerElements: e2, onOpenChange: void 0, onOpenChangeComplete: void 0 };
  }
  try {
    var X = "u" > typeof window ? window : e.g;
    X._sentryModuleMetadata = X._sentryModuleMetadata || {}, X._sentryModuleMetadata[new X.Error().stack] = Object.assign({}, X._sentryModuleMetadata[new X.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var Y = "u" > typeof window ? window : e.g;
    Y._sentryModuleMetadata = Y._sentryModuleMetadata || {}, Y._sentryModuleMetadata[new Y.Error().stack] = Object.assign({}, Y._sentryModuleMetadata[new Y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var ee = "u" > typeof window ? window : e.g;
    ee._sentryModuleMetadata = ee._sentryModuleMetadata || {}, ee._sentryModuleMetadata[new ee.Error().stack] = Object.assign({}, ee._sentryModuleMetadata[new ee.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let et = r.forwardRef(function(e2, t2) {
    let { render: r2, className: a2, style: n2, children: s2, ...l2 } = e2, d2 = x(), u2 = o(), c2 = u2.useState("open"), p2 = u2.useState("nested"), y2 = u2.useState("transitionStatus"), h2 = u2.useState("nestedOpenDialogCount"), M2 = u2.useState("mounted"), g2 = u2.useStateSetter("viewportElement");
    return (0, i.useRenderElement)("div", e2, { enabled: d2 || M2, state: { open: c2, nested: p2, transitionStatus: y2, nestedDialogOpen: h2 > 0 }, ref: [t2, g2], stateAttributesMapping: P, props: [{ role: "presentation", hidden: !M2, style: { pointerEvents: c2 ? void 0 : "none" }, children: s2 }, l2] });
  });
  try {
    var er = "u" > typeof window ? window : e.g;
    er._sentryModuleMetadata = er._sentryModuleMetadata || {}, er._sentryModuleMetadata[new er.Error().stack] = Object.assign({}, er._sentryModuleMetadata[new er.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let ea = r.forwardRef(function(e2, t2) {
    let { render: r2, className: a2, style: n2, id: s2, ...l2 } = e2, d2 = o(), u2 = (0, g.useBaseUiId)(s2);
    return d2.useSyncedValueWithCleanup("titleElementId", u2), (0, i.useRenderElement)("h2", e2, { ref: t2, props: [{ id: u2 }, l2] });
  });
  var en = e.i(867383), es = e.i(610993), eo = e.i(84588), ei = e.i(522353);
  try {
    var el = "u" > typeof window ? window : e.g;
    el._sentryModuleMetadata = el._sentryModuleMetadata || {}, el._sentryModuleMetadata[new el.Error().stack] = Object.assign({}, el._sentryModuleMetadata[new el.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let ed = r.forwardRef(function(e2, t2) {
    let { render: n2, className: s2, style: d2, disabled: u2 = false, nativeButton: p2 = true, id: y2, payload: h2, handle: M2, ...f2 } = e2, w2 = o(true), m2 = (0, es.usePopupHandleStore)(M2) ?? w2;
    if (!m2) throw Error((0, a.default)(79));
    let C2 = (0, g.useBaseUiId)(y2), _2 = m2.useState("floatingRootContext"), x2 = m2.useState("isOpenedByTrigger", C2), v2 = m2.useState("triggerPopupId", C2), b2 = r.useRef(null), { registerTrigger: S2, isMountedByThisTrigger: E2 } = (0, j.useTriggerDataForwarding)(C2, b2, m2, { payload: h2 }), { getButtonProps: P2, buttonRef: k2 } = (0, c.useButton)({ disabled: u2, native: p2 }), O2 = (0, eo.useClick)(_2), R2 = (0, ei.useOpenMethodTriggerProps)(() => m2.select("open"), (e3) => {
      m2.set("openMethod", e3);
    }), A2 = m2.useState("triggerProps", E2);
    return (0, i.useRenderElement)("button", e2, { state: { disabled: u2, open: x2 }, ref: [k2, t2, S2, b2], props: [O2.reference, A2, R2, { [en.CLICK_TRIGGER_IDENTIFIER]: "", id: C2, "aria-haspopup": "dialog", "aria-expanded": x2, "aria-controls": v2 }, f2, P2], stateAttributesMapping: l.triggerOpenStateMapping });
  });
  var eu = e.i(285630);
  try {
    var ec = "u" > typeof window ? window : e.g;
    ec._sentryModuleMetadata = ec._sentryModuleMetadata || {}, ec._sentryModuleMetadata[new ec.Error().stack] = Object.assign({}, ec._sentryModuleMetadata[new ec.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class ep extends eu.BasePopupHandle {
    constructor() {
      super((function() {
        let e2 = new W.PopupTriggerMap();
        return new U.NullStore(Object.freeze(J(void 0, e2)), Object.freeze(Q(e2)), q);
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
  e.s(["Backdrop", 0, u, "Close", 0, M, "Description", 0, w, "Handle", 0, ep, "Popup", 0, R, "Portal", 0, I, "Root", 0, function(e2) {
    return (function(e3, t2) {
      let { children: a2, open: n2, defaultOpen: i2 = false, onOpenChange: l2, onOpenChangeComplete: d2, disablePointerDismissal: u2 = false, modal: c2 = true, actionsRef: h2, handle: M2, triggerId: g2, defaultTriggerId: f2 = null } = t2, w2 = "alert-dialog" === e3, m2 = o(true), C2 = { modal: !!w2 || c2, disablePointerDismissal: w2 || u2, nested: null != m2, role: w2 ? "alertdialog" : "dialog" }, _2 = (0, j.usePopupRootStore)((e4, t3) => new G({ open: i2, openProp: n2, activeTriggerId: f2, triggerIdProp: g2, ...C2 }, e4, t3), true);
      _2.useControlledProp("openProp", n2), _2.useControlledProp("triggerIdProp", g2), _2.useSyncedValues(C2), _2.useContextCallback("onOpenChange", l2), _2.useContextCallback("onOpenChangeComplete", d2);
      let x2 = _2.useState("open"), v2 = _2.useState("mounted"), b2 = _2.useState("payload");
      (0, j.usePopupRootSync)(_2, x2), (0, j.useImplicitActiveTrigger)(_2);
      let { forceUnmount: S2 } = (0, j.useOpenStateTransitions)(x2, _2);
      r.useImperativeHandle(h2, () => ({ unmount: S2, close: () => _2.setOpen(false, (0, p.createChangeEventDetails)(y.REASONS.imperativeAction)) }), [S2, _2]);
      let E2 = x2 || v2;
      return (0, k.jsxs)(s.Provider, { value: _2, children: [M2 && (0, k.jsx)(j.PopupHandleAttachment, { handle: M2, store: _2 }), E2 && (0, k.jsx)(F, { store: _2, parentContext: m2?.context, isDrawer: "drawer" === e3 }), "function" == typeof a2 ? a2({ payload: b2 }) : a2] });
    })("dialog", e2);
  }, "Title", 0, ea, "Trigger", 0, ed, "Viewport", 0, et, "createHandle", 0, function() {
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
  var s = /* @__PURE__ */ Symbol.for("react.lazy"), o = t[" use ".trim().toString()];
  function i(e2) {
    var t2;
    return null != e2 && "object" == typeof e2 && "$$typeof" in e2 && e2.$$typeof === s && "_payload" in e2 && "object" == typeof (t2 = e2._payload) && null !== t2 && "then" in t2;
  }
  var l = /* @__PURE__ */ Symbol("radix.slottable");
  function d(e2) {
    return t.isValidElement(e2) && "function" == typeof e2.type && "__radixId" in e2.type && e2.type.__radixId === l;
  }
  try {
    var u = "u" > typeof window ? window : e.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e2, n2) => {
    var s2, l2;
    let u2, c2, p, y = (l2 = s2 = `Primitive.${n2}`, (u2 = t.forwardRef((e3, a2) => {
      let { children: n3, ...s3 } = e3;
      if (i(n3) && "function" == typeof o && (n3 = o(n3._payload)), t.isValidElement(n3)) {
        var l3;
        let e4, o2, i2 = (l3 = n3, (o2 = (e4 = Object.getOwnPropertyDescriptor(l3.props, "ref")?.get) && "isReactWarning" in e4 && e4.isReactWarning) ? l3.ref : (o2 = (e4 = Object.getOwnPropertyDescriptor(l3, "ref")?.get) && "isReactWarning" in e4 && e4.isReactWarning) ? l3.props.ref : l3.props.ref || l3.ref), d2 = (function(e5, t2) {
          let r2 = { ...t2 };
          for (let a3 in t2) {
            let n4 = e5[a3], s4 = t2[a3];
            /^on[A-Z]/.test(a3) ? n4 && s4 ? r2[a3] = (...e6) => {
              let t3 = s4(...e6);
              return n4(...e6), t3;
            } : n4 && (r2[a3] = n4) : "style" === a3 ? r2[a3] = { ...n4, ...s4 } : "className" === a3 && (r2[a3] = [n4, s4].filter(Boolean).join(" "));
          }
          return { ...e5, ...r2 };
        })(s3, n3.props);
        return n3.type !== t.Fragment && (d2.ref = a2 ? (0, r.composeRefs)(a2, i2) : i2), t.cloneElement(n3, d2);
      }
      return t.Children.count(n3) > 1 ? t.Children.only(null) : null;
    })).displayName = `${l2}.SlotClone`, c2 = u2, (p = t.forwardRef((e3, r2) => {
      let { children: n3, ...s3 } = e3;
      i(n3) && "function" == typeof o && (n3 = o(n3._payload));
      let l3 = t.Children.toArray(n3), u3 = l3.find(d);
      if (u3) {
        let e4 = u3.props.children, n4 = l3.map((r3) => r3 !== u3 ? r3 : t.Children.count(e4) > 1 ? t.Children.only(null) : t.isValidElement(e4) ? e4.props.children : null);
        return (0, a.jsx)(c2, { ...s3, ref: r2, children: t.isValidElement(e4) ? t.cloneElement(e4, void 0, n4) : null });
      }
      return (0, a.jsx)(c2, { ...s3, ref: r2, children: n3 });
    })).displayName = `${s2}.Slot`, p), h = t.forwardRef((e3, t2) => {
      let { asChild: r2, ...s3 } = e3;
      return "u" > typeof window && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), (0, a.jsx)(r2 ? y : n2, { ...s3, ref: t2 });
    });
    return h.displayName = `Primitive.${n2}`, { ...e2, [n2]: h };
  }, {});
  e.s(["Primitive", 0, c], 514777);
}, 500950, (e) => {
  "use strict";
  var t = e.i(799458), r = e.i(856757);
  try {
    var a = window;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let n = (0, r.createContext)({ doneIds: [], onDone: (e2) => {
    t.captureException("AcademyContext onDone not implemented");
  }, onUndone: (e2) => {
    t.captureException("AcademyContext onUndone not implemented");
  } });
  e.s(["AcademyContext", 0, n]);
}, 184593, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757), a = e.i(500950);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let s = "academy-done-ids";
  e.s(["AcademyProvider", 0, function({ children: e2 }) {
    let [n2, o] = (0, r.useState)([]);
    return (0, r.useEffect)(() => {
      try {
        let e3 = localStorage.getItem(s);
        if (!e3) return;
        let t2 = JSON.parse(e3);
        if (!Array.isArray(t2)) return;
        o(t2);
      } catch {
        o([]);
      }
    }, []), (0, t.jsx)(a.AcademyContext.Provider, { value: { doneIds: n2, onDone: (e3) => {
      o((t2) => {
        let r2 = [...t2, e3];
        return localStorage.setItem(s, JSON.stringify(r2)), r2;
      });
    }, onUndone: (e3) => {
      o((t2) => {
        let r2 = t2.filter((t3) => t3 !== e3);
        return localStorage.setItem(s, JSON.stringify(r2)), r2;
      });
    } }, children: e2 });
  }]);
}, 431230, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757);
  try {
    var a = window;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["HelpLayoutClient", 0, function({ children: e2 }) {
    return (0, r.useLayoutEffect)(() => (document.documentElement.style.setProperty("--site-header-subheader-mobile-height", "var(--site-header-subheader-mobile-visible-height)"), () => {
      document.documentElement.style.setProperty("--site-header-subheader-mobile-height", "var(--site-header-subheader-mobile-hidden-height)");
    }), []), (0, t.jsx)(t.Fragment, { children: e2 });
  }]);
}, 813825, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(12594), a = e.i(67232), n = e.i(551360);
  try {
    var s = window;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["HelpSearchButton", 0, function({ className: e2 }) {
    let { openSearchModal: s2 } = (0, r.useSearchModal)();
    return (0, t.jsx)(a.SearchTriggerButton, { onClick: () => s2(), size: "sm", placeholder: "Search...", className: (0, n.cn)("text-[13px] leading-none", e2) });
  }, "HelpSearchButtonFallback", 0, function({ className: e2 }) {
    return (0, t.jsx)(a.SearchTriggerButton, { size: "sm", placeholder: "Search...", className: (0, n.cn)("text-[13px] leading-none", e2) });
  }]);
}, 277536, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(164309), a = e.i(868275), n = e.i(784544), s = e.i(133070), o = e.i(558006), i = e.i(369670), l = e.i(313042), d = e.i(828177);
  try {
    var u = "u" > typeof window ? window : e.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var c = (0, i.createDocumentationMessageGenerator)({ name: "configure", connector: true });
  function p(e2, t2) {
    return e2.setQueryParameters(Object.keys(t2.searchParameters).reduce(function(e3, t3) {
      return (0, n._)((0, r._)({}, e3), (0, a._)({}, t3, void 0));
    }, {}));
  }
  var y = function() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.noop, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.noop;
    return function(a2) {
      if (!a2 || !(0, o.isPlainObject)(a2.searchParameters)) throw Error(c("The `searchParameters` option expects an object."));
      var i2 = {};
      return { $$type: "ais.configure", init: function(t3) {
        var a3 = t3.instantSearchInstance;
        e2((0, n._)((0, r._)({}, this.getWidgetRenderState(t3)), { instantSearchInstance: a3 }), true);
      }, render: function(t3) {
        var a3 = t3.instantSearchInstance;
        e2((0, n._)((0, r._)({}, this.getWidgetRenderState(t3)), { instantSearchInstance: a3 }), false);
      }, dispose: function(e3) {
        var r2 = e3.state;
        return t2(), p(r2, a2);
      }, getRenderState: function(e3, t3) {
        var a3, o2 = this.getWidgetRenderState(t3);
        return (0, n._)((0, r._)({}, e3), { configure: (0, n._)((0, r._)({}, o2), { widgetParams: (0, n._)((0, r._)({}, o2.widgetParams), { searchParameters: (0, l.mergeSearchParameters)(new s.default.SearchParameters(null == (a3 = e3.configure) ? void 0 : a3.widgetParams.searchParameters), new s.default.SearchParameters(o2.widgetParams.searchParameters)).getQueryParams() }) }) });
      }, getWidgetRenderState: function(e3) {
        var t3 = e3.helper;
        return i2.refine || (i2.refine = function(e4) {
          var r2 = p(t3.state, a2), n2 = (0, l.mergeSearchParameters)(r2, new s.default.SearchParameters(e4));
          a2.searchParameters = e4, t3.setState(n2).search();
        }), { refine: i2.refine, widgetParams: a2 };
      }, getWidgetSearchParameters: function(e3, t3) {
        var n2 = t3.uiState;
        return (0, l.mergeSearchParameters)(e3, new s.default.SearchParameters((0, r._)({}, n2.configure, a2.searchParameters)));
      }, getWidgetUiState: function(e3) {
        return (0, n._)((0, r._)({}, e3), { configure: (0, r._)({}, e3.configure, a2.searchParameters) });
      } };
    };
  }, h = e.i(763252);
  try {
    var M = "u" > typeof window ? window : e.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var g = "u" > typeof window ? window : e.g;
    g._sentryModuleMetadata = g._sentryModuleMetadata || {}, g._sentryModuleMetadata[new g.Error().stack] = Object.assign({}, g._sentryModuleMetadata[new g.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function f(e2) {
    var t2, a2;
    return t2 = (0, r._)({}, e2), a2 = { $$widgetType: "ais.configure" }, (0, h.useConnector)(y, { searchParameters: t2 }, a2), null;
  }
  var w = e.i(304299), m = e.i(847502), C = e.i(11793), _ = e.i(36031);
  try {
    var x = window;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function v({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", ...e2, children: (0, t.jsx)("path", { d: "M1.99951 2.44922C2.30327 2.44922 2.54932 2.69527 2.54932 2.99902V10.999C2.54931 11.3028 2.30324 11.5488 1.99951 11.5488C1.69587 11.5487 1.44971 11.3027 1.44971 10.999V2.99902C1.44971 2.69535 1.69587 2.44935 1.99951 2.44922ZM9.49951 10C9.77565 10 9.99951 10.2239 9.99951 10.5C9.99951 10.7761 9.77565 11 9.49951 11H4.49951C4.22348 10.9999 3.99951 10.7761 3.99951 10.5C3.99951 10.2239 4.22348 10.0001 4.49951 10H9.49951ZM11.9995 6.49902C12.2757 6.49902 12.4995 6.72288 12.4995 6.99902C12.4995 7.27517 12.2757 7.49902 11.9995 7.49902H4.49951C4.22348 7.49889 3.99951 7.27508 3.99951 6.99902C3.99951 6.72296 4.22348 6.49916 4.49951 6.49902H11.9995ZM11.9995 3C12.2757 3 12.4995 3.22386 12.4995 3.5C12.4995 3.77614 12.2757 4 11.9995 4H4.49951C4.22348 3.99987 3.99951 3.77606 3.99951 3.5C3.99951 3.22394 4.22348 3.00013 4.49951 3H11.9995Z", fill: "currentColor" }) });
  }
  try {
    var b = window;
    b._sentryModuleMetadata = b._sentryModuleMetadata || {}, b._sentryModuleMetadata[new b.Error().stack] = Object.assign({}, b._sentryModuleMetadata[new b.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function j({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", ...e2, children: (0, t.jsx)("path", { d: "M10.3975 1.50952C10.6681 1.56365 10.8439 1.8268 10.79 2.09741L10.3096 4.49976H12.5C12.7761 4.49976 12.9999 4.72368 13 4.99976C13 5.2759 12.7761 5.49976 12.5 5.49976H10.1094L9.50977 8.49976H11.5C11.7761 8.49976 11.9999 8.72368 12 8.99976C12 9.2759 11.7761 9.49976 11.5 9.49976H9.30957L8.79004 12.0974C8.73591 12.3681 8.4728 12.5439 8.20215 12.49C7.93162 12.4358 7.75567 12.1727 7.80957 11.9021L8.29004 9.49976H5.30957L4.79004 12.0974C4.73591 12.3681 4.4728 12.5439 4.20215 12.49C3.93162 12.4358 3.75567 12.1727 3.80957 11.9021L4.29004 9.49976H2C1.72386 9.49976 1.5 9.2759 1.5 8.99976C1.50008 8.72368 1.72391 8.49976 2 8.49976H4.49023L5.08984 5.49976H3C2.72386 5.49976 2.5 5.2759 2.5 4.99976C2.50008 4.72368 2.72391 4.49976 3 4.49976H5.29004L5.80957 1.9021C5.86373 1.63158 6.12693 1.45575 6.39746 1.50952C6.66808 1.56365 6.84389 1.8268 6.79004 2.09741L6.30957 4.49976H9.29004L9.80957 1.9021C9.86373 1.63158 10.1269 1.45575 10.3975 1.50952ZM5.50977 8.49976H8.49023L9.08984 5.49976H6.10938L5.50977 8.49976Z", fill: "currentColor" }) });
  }
  try {
    var S = window;
    S._sentryModuleMetadata = S._sentryModuleMetadata || {}, S._sentryModuleMetadata[new S.Error().stack] = Object.assign({}, S._sentryModuleMetadata[new S.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function E({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", ...e2, children: (0, t.jsx)("path", { d: "M8.94531 0C10.2249 0.000239291 11.2806 0.942151 11.4668 2.16992C11.604 2.21074 11.7353 2.26242 11.8623 2.32715C12.4265 2.61472 12.8853 3.07347 13.1729 3.6377C13.351 3.98732 13.4273 4.36958 13.4639 4.81738C13.5 5.25934 13.5 5.80822 13.5 6.5V9C13.5 9.69178 13.5 10.2407 13.4639 10.6826C13.4273 11.1304 13.351 11.5127 13.1729 11.8623C12.8853 12.4265 12.4265 12.8853 11.8623 13.1729C11.5127 13.351 11.1304 13.4273 10.6826 13.4639C10.2407 13.5 9.69178 13.5 9 13.5H6.5C5.80822 13.5 5.25934 13.5 4.81738 13.4639C4.36958 13.4273 3.98732 13.351 3.6377 13.1729C3.07347 12.8853 2.61472 12.4265 2.32715 11.8623C2.26381 11.738 2.21323 11.6096 2.17285 11.4756C0.946929 11.3152 0 10.2697 0 9V4.5C0 3.80822 2.78804e-05 3.25934 0.0361328 2.81738C0.0727196 2.36958 0.149006 1.98732 0.327148 1.6377C0.614723 1.07347 1.07347 0.614723 1.6377 0.327148C1.98732 0.149006 2.36958 0.0727196 2.81738 0.0361328C3.25934 2.78804e-05 3.80822 0 4.5 0H8.94531ZM6.5 3C5.79168 3 5.29023 3.00022 4.89844 3.03223C4.51264 3.06377 4.27691 3.12345 4.0918 3.21777C3.71554 3.40951 3.40951 3.71554 3.21777 4.0918C3.12345 4.27691 3.06377 4.51264 3.03223 4.89844C3.00022 5.29023 3 5.79168 3 6.5V9C3 9.70832 3.00022 10.2098 3.03223 10.6016C3.06377 10.9874 3.12345 11.2231 3.21777 11.4082C3.40951 11.7845 3.71554 12.0905 4.0918 12.2822C4.27691 12.3765 4.51264 12.4362 4.89844 12.4678C5.29023 12.4998 5.79168 12.5 6.5 12.5H9C9.70832 12.5 10.2098 12.4998 10.6016 12.4678C10.9874 12.4362 11.2231 12.3765 11.4082 12.2822C11.7845 12.0905 12.0905 11.7845 12.2822 11.4082C12.3765 11.2231 12.4362 10.9874 12.4678 10.6016C12.4998 10.2098 12.5 9.70832 12.5 9V6.5C12.5 5.79168 12.4998 5.29023 12.4678 4.89844C12.4362 4.51264 12.3765 4.27691 12.2822 4.0918C12.0905 3.71554 11.7845 3.40951 11.4082 3.21777C11.2231 3.12345 10.9874 3.06377 10.6016 3.03223C10.2098 3.00022 9.70832 3 9 3H6.5ZM8 10.5C8.27614 10.5 8.5 10.7239 8.5 11C8.5 11.2761 8.27614 11.5 8 11.5H5C4.72386 11.5 4.5 11.2761 4.5 11C4.5 10.7239 4.72386 10.5 5 10.5H8ZM4.5 1C3.79168 1 3.29023 1.00022 2.89844 1.03223C2.51264 1.06377 2.27691 1.12345 2.0918 1.21777C1.71554 1.40951 1.40951 1.71554 1.21777 2.0918C1.12345 2.27691 1.06377 2.51264 1.03223 2.89844C1.00022 3.29023 1 3.79168 1 4.5V9C1 9.66054 1.42751 10.2197 2.02051 10.4199C2.00126 10.0277 2 9.56087 2 9V6.5C2 5.80822 2.00003 5.25934 2.03613 4.81738C2.07272 4.36958 2.14901 3.98732 2.32715 3.6377C2.61472 3.07347 3.07347 2.61472 3.6377 2.32715C3.98732 2.14901 4.36958 2.07272 4.81738 2.03613C5.25934 2.00003 5.80822 2 6.5 2H9C9.55251 2 10.0138 2.00113 10.4023 2.01953C10.1837 1.42525 9.61527 1.00021 8.94531 1H4.5ZM10.5 8.5C10.7761 8.5 11 8.72386 11 9C11 9.27614 10.7761 9.5 10.5 9.5H5C4.72386 9.5 4.5 9.27614 4.5 9C4.5 8.72386 4.72386 8.5 5 8.5H10.5ZM6.41211 4.50781C6.53449 4.51657 6.66925 4.53722 6.80566 4.59668C7.07302 4.71333 7.28667 4.92698 7.40332 5.19434C7.46278 5.33075 7.48343 5.46551 7.49219 5.58789C7.5006 5.70564 7.5 5.84695 7.5 6C7.5 6.15305 7.5006 6.29436 7.49219 6.41211C7.48343 6.53449 7.46278 6.66925 7.40332 6.80566C7.28667 7.07302 7.07302 7.28667 6.80566 7.40332C6.66925 7.46278 6.53449 7.48343 6.41211 7.49219C6.29436 7.5006 6.15305 7.5 6 7.5C5.84695 7.5 5.70564 7.5006 5.58789 7.49219C5.46551 7.48343 5.33075 7.46278 5.19434 7.40332C4.92698 7.28667 4.71333 7.07302 4.59668 6.80566C4.53722 6.66925 4.51657 6.53449 4.50781 6.41211C4.4994 6.29436 4.5 6.15305 4.5 6C4.5 5.84695 4.4994 5.70564 4.50781 5.58789C4.51657 5.46551 4.53722 5.33075 4.59668 5.19434C4.71333 4.92698 4.92698 4.71333 5.19434 4.59668C5.33075 4.53722 5.46551 4.51657 5.58789 4.50781C5.70564 4.4994 5.84695 4.5 6 4.5C6.15305 4.5 6.29436 4.4994 6.41211 4.50781ZM5.65918 5.50586C5.59038 5.51079 5.58265 5.51754 5.59375 5.5127C5.55762 5.52846 5.52846 5.55762 5.5127 5.59375C5.51754 5.58265 5.51079 5.59038 5.50586 5.65918C5.50058 5.73303 5.5 5.8326 5.5 6C5.5 6.1674 5.50058 6.26697 5.50586 6.34082C5.51079 6.40962 5.51754 6.41735 5.5127 6.40625C5.52846 6.44238 5.55762 6.47154 5.59375 6.4873C5.58265 6.48246 5.59038 6.48921 5.65918 6.49414C5.73303 6.49942 5.8326 6.5 6 6.5C6.1674 6.5 6.26697 6.49942 6.34082 6.49414C6.40962 6.48921 6.41735 6.48246 6.40625 6.4873C6.44238 6.47154 6.47154 6.44238 6.4873 6.40625C6.48246 6.41735 6.48921 6.40962 6.49414 6.34082C6.49942 6.26697 6.5 6.1674 6.5 6C6.5 5.8326 6.49942 5.73303 6.49414 5.65918C6.48921 5.59038 6.48246 5.58265 6.4873 5.59375C6.47154 5.55762 6.44238 5.52846 6.40625 5.5127C6.41735 5.51754 6.40962 5.51079 6.34082 5.50586C6.26697 5.50058 6.1674 5.5 6 5.5C5.8326 5.5 5.73303 5.50058 5.65918 5.50586Z", fill: "currentColor" }) });
  }
  var P = e.i(225587);
  try {
    var k = window;
    k._sentryModuleMetadata = k._sentryModuleMetadata || {}, k._sentryModuleMetadata[new k.Error().stack] = Object.assign({}, k._sentryModuleMetadata[new k.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let O = { highlighted: "bg-blue-500/10 text-link-foreground" };
  function R({ hit: e2 }) {
    let { objectID: r2, type: a2, href: n2, subType: s2, breadcrumbs: o2 } = e2;
    return (0, t.jsx)(C.SearchResultCard, { href: n2, value: r2, icon: (0, t.jsxs)(_.SearchResultIcon, { className: "flex items-center justify-center rounded-[10px] bg-secondary-background text-black-600", children: ["help" === a2 && (0, t.jsxs)(t.Fragment, { children: ["faq" === s2 && (0, t.jsx)(j, {}), "section" === s2 && (0, t.jsx)(v, {}), "article" === s2 && (0, t.jsx)(E, {})] }), "academy" === a2 && (0, t.jsx)(P.VideoCamera14, {})] }), title: (0, t.jsx)(w.Highlight, { attribute: "title", hit: e2, classNames: O }), description: (0, t.jsx)(m.Snippet, { attribute: "content", hit: e2, classNames: { ...O, root: "lg:line-clamp-none lg:truncate" } }), footer: o2.length > 0 ? (0, t.jsx)("div", { className: "flex flex-wrap items-center gap-x-0.75 text-[10px]", children: o2.map((e3, r3) => (0, t.jsxs)("span", { className: "flex items-center gap-x-0.75", children: [r3 > 0 && (0, t.jsx)("span", { className: "text-[11px] text-disabled-foreground", children: "/" }), (0, t.jsx)("span", { className: "text-black-800", children: e3 })] }, `${e3}-${r3}`)) }) : void 0 });
  }
  var A = e.i(915501), B = e.i(38061);
  try {
    var N = window;
    N._sentryModuleMetadata = N._sentryModuleMetadata || {}, N._sentryModuleMetadata[new N.Error().stack] = Object.assign({}, N._sentryModuleMetadata[new N.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let D = { highlighted: "bg-blue-500/10 text-link-foreground" };
  function I({ hit: e2 }) {
    let { objectID: r2, title: a2, href: n2, logoUrl: s2, isOfficial: o2, developerName: i2, categories: l2 } = e2, d2 = l2.slice(0, 2);
    return (0, t.jsx)(C.SearchResultCard, { href: n2, value: r2, icon: (0, t.jsx)(_.SearchResultIcon, { className: "bg-primary-background", children: (0, t.jsx)(A.default, { src: s2, alt: a2, width: 37, height: 37, className: "size-full object-cover", loading: "eager" }) }), title: (0, t.jsx)(w.Highlight, { attribute: "title", hit: e2, classNames: D }), badge: (0, t.jsxs)(t.Fragment, { children: [o2 && (0, t.jsx)(B.AppsOfficialBadge, { className: "size-3" }), (0, t.jsx)("span", { className: "shrink-0 rounded-md border border-weak-stroke bg-secondary-background px-1 font-medium text-[10px] text-accent-foreground leading-4", children: "App" })] }), description: (0, t.jsx)(m.Snippet, { attribute: "content", hit: e2, classNames: { ...D, root: "lg:line-clamp-none lg:truncate" } }), footer: i2 || d2.length > 0 ? (0, t.jsxs)("div", { className: "flex flex-wrap items-center gap-1.5 text-[10px]", children: [i2 && (0, t.jsxs)("span", { className: "text-black-800", children: ["Built by ", i2] }), i2 && d2.length > 0 && (0, t.jsx)("span", { className: "text-disabled-foreground", children: "\xB7" }), d2.map((e3) => (0, t.jsx)("span", { className: "text-black-800", children: e3 }, e3))] }) : void 0 });
  }
  var H = e.i(805952), K = e.i(858659);
  try {
    var L = window;
    L._sentryModuleMetadata = L._sentryModuleMetadata || {}, L._sentryModuleMetadata[new L.Error().stack] = Object.assign({}, L._sentryModuleMetadata[new L.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function T({ hits: e2, query: r2, settledQuery: a2, isSearching: n2 }) {
    let s2 = e2.length > 0, o2 = r2.length > 0 && 0 === e2.length;
    return (0, t.jsx)("div", { className: "flex-1 scroll-py-2 overflow-auto py-2", children: s2 ? (0, t.jsx)(K.SearchResultList, { children: e2.map((e3) => "app" === e3.type ? (0, t.jsx)(I, { hit: e3 }, e3.objectID) : (0, t.jsx)(R, { hit: e3 }, e3.objectID)) }) : o2 ? (0, t.jsx)(H.SearchNoResults, { query: a2, label: "No content matching", visible: !n2 }) : null });
  }
  var $ = e.i(66583), F = e.i(693247), Z = e.i(482241), U = e.i(791768);
  try {
    var V = window;
    V._sentryModuleMetadata = V._sentryModuleMetadata || {}, V._sentryModuleMetadata[new V.Error().stack] = Object.assign({}, V._sentryModuleMetadata[new V.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let { Context: W, useSearch: z } = (0, $.createSearchContext)("HelpSearch");
  function q() {
    let { settledQuery: e2 } = z();
    return (0, t.jsx)(f, { filters: e2 ? "" : "NOT type:app" });
  }
  function G(e2, t2) {
    return t2 ? e2 : e2.filter((e3) => "app" !== e3.type);
  }
  e.s(["HelpSearch", 0, function({ defaultResults: e2 }) {
    return (0, t.jsxs)(Z.SearchInstantSearchProvider, { indexName: U.env.NEXT_PUBLIC_POLARIS_ALGOLIA_INDEX_NAME, Context: W, defaultResults: e2, filterResults: G, children: [(0, t.jsx)(q, {}), (0, t.jsx)(F.SearchDialog, { useSearch: z, ariaLabel: "Search Help Center", placeholder: "Search help\u2026", renderResults: (e3) => (0, t.jsx)(T, { ...e3 }) })] });
  }, "useHelpSearch", 0, z], 277536);
}, 628004, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757), a = e.i(79587), n = e.i(217032), s = e.i(12594), o = e.i(167815), i = e.i(618807);
  try {
    var l = window;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function d({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", ...e2, children: (0, t.jsx)("path", { d: "M2 9.75C2.41421 9.75 2.75 10.0858 2.75 10.5C2.75 10.9142 2.41421 11.25 2 11.25C1.58579 11.25 1.25 10.9142 1.25 10.5C1.25 10.0858 1.58579 9.75 2 9.75ZM12 9.9502C12.3038 9.9502 12.5498 10.1962 12.5498 10.5C12.5498 10.8038 12.3038 11.0498 12 11.0498H4.5498C4.24605 11.0498 4 10.8038 4 10.5C4 10.1962 4.24605 9.9502 4.5498 9.9502H12ZM2 6.2998C2.41419 6.2998 2.74997 6.63562 2.75 7.0498C2.75 7.46402 2.41421 7.7998 2 7.7998C1.58579 7.7998 1.25 7.46402 1.25 7.0498C1.25003 6.63562 1.58581 6.2998 2 6.2998ZM12 6.4502C12.3038 6.4502 12.5498 6.69624 12.5498 7C12.5497 7.30371 12.3037 7.5498 12 7.5498H4.5498C4.24613 7.54976 4.00006 7.30368 4 7C4 6.69627 4.24609 6.45024 4.5498 6.4502H12ZM2 2.75C2.41421 2.75 2.75 3.08579 2.75 3.5C2.75 3.91421 2.41421 4.25 2 4.25C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75ZM12 2.9502C12.3038 2.9502 12.5498 3.19625 12.5498 3.5C12.5498 3.80376 12.3038 4.0498 12 4.0498H4.5498C4.24605 4.0498 4 3.80376 4 3.5C4.00001 3.19625 4.24605 2.9502 4.5498 2.9502H12Z", fill: "currentColor" }) });
  }
  try {
    var u = window;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function c({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", ...e2, children: (0, t.jsx)("path", { d: "M9.64612 8.14612C9.84126 7.95105 10.1579 7.95125 10.3531 8.14612C10.5484 8.34136 10.5484 8.65789 10.3531 8.85315L7.35315 11.8531C7.15788 12.0483 6.84136 12.0484 6.64612 11.8531L3.64612 8.85315C3.4511 8.65787 3.45094 8.3413 3.64612 8.14612C3.8413 7.951 4.15789 7.95113 4.35315 8.14612L6.99963 10.7926L9.64612 8.14612ZM6.64612 2.14709C6.84137 1.95184 7.15788 1.95186 7.35315 2.14709L10.3531 5.14612C10.5484 5.34137 10.5484 5.65886 10.3531 5.85413C10.1579 6.04871 9.84119 6.049 9.64612 5.85413L6.99963 3.20764L4.35315 5.85413C4.15787 6.04907 3.84128 6.04928 3.64612 5.85413C3.45098 5.65897 3.45118 5.34238 3.64612 5.14709L6.64612 2.14709Z", fill: "currentColor" }) });
  }
  var p = e.i(237633), y = e.i(551360);
  try {
    var h = window;
    h._sentryModuleMetadata = h._sentryModuleMetadata || {}, h._sentryModuleMetadata[new h.Error().stack] = Object.assign({}, h._sentryModuleMetadata[new h.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function M({ className: e2, ...r2 }) {
    return (0, t.jsxs)(o.Button, { variant: "outline", size: "md", className: (0, y.cn)("!px-3 w-full", e2), ...r2, children: [(0, t.jsx)(d, {}), (0, t.jsx)("span", { className: "flex-1 text-left text-sm", children: "Contents" }), (0, t.jsx)(c, {})] });
  }
  function g({ className: e2, children: r2, ...a2 }) {
    return (0, t.jsx)(o.Button, { variant: "outline", size: "md", className: (0, y.cn)("w-12 shrink-0", e2), ...a2, children: r2 });
  }
  e.s(["HelpSubheader", 0, function({ sidebar: e2 }) {
    let [o2, l2] = (0, r.useState)(false), d2 = (0, i.useAppPathname)(), { openSearchModal: u2 } = (0, s.useSearchModal)(), c2 = (0, r.useRef)(d2);
    if (d2 !== c2.current && (c2.current = d2, l2(false)), !(0, n.useIsDesktop)()) return (0, t.jsx)("div", { className: "relative flex h-(--site-header-subheader-mobile-visible-height) items-center justify-center", children: (0, t.jsxs)("div", { className: "container flex w-full items-center gap-x-2", children: [(0, t.jsxs)(a.Drawer.Root, { open: o2, onOpenChange: l2, children: [(0, t.jsx)(a.Drawer.Trigger, { asChild: true, children: (0, t.jsx)(M, {}) }), (0, t.jsxs)(a.Drawer.Portal, { children: [(0, t.jsx)(a.Drawer.Overlay, { className: "fixed inset-0 z-(--dialog-overlay-z-index) bg-black-100/40" }), (0, t.jsxs)(a.Drawer.Content, { className: "fixed right-0 bottom-0 left-0 z-(--dialog-overlay-z-index) mt-24 flex h-[96%] flex-col rounded-t-[10px] bg-white-100 backdrop-blur-xs", children: [(0, t.jsx)(a.Drawer.Title, { className: "sr-only", children: "Help Center Contents" }), (0, t.jsxs)("div", { className: "flex h-full flex-col rounded-t-2xl bg-primary-background", children: [(0, t.jsx)("div", { className: "mx-auto mt-1.5 h-[5px] w-8 shrink-0 rounded-full bg-white-500" }), (0, t.jsx)("div", { className: "mask-t-from-[calc(100%-40px)] scrollbar-none container flex-1 overflow-y-auto p-4 py-10", children: e2 })] })] })] })] }), (0, t.jsx)(g, { onClick: () => u2(), children: (0, t.jsx)(p.Search14, {}) })] }) });
  }, "HelpSubheaderFallback", 0, function() {
    return (0, t.jsx)("div", { className: "relative h-(--site-header-subheader-mobile-visible-height)", children: (0, t.jsxs)("div", { className: "container flex gap-x-2 pt-2 pb-[15px] lg:hidden", children: [(0, t.jsx)(M, {}), (0, t.jsx)(g, { children: (0, t.jsx)(p.Search14, {}) })] }) });
  }], 628004);
}, 70422, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let a = (0, t.createContext)({ value: [] });
  e.s(["SidebarContext", 0, a]);
}, 667157, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(28276), a = e.i(618807), n = e.i(551360);
  try {
    var s = window;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["SidebarItemClient", 0, function({ href: e2, children: s2 }) {
    let o = (0, a.useAppPathname)(), i = o === e2 || `${o}/` === e2;
    return (0, t.jsx)(r.LinkWithHoverPrefetch, { id: e2, className: (0, n.cn)("-mx-2 inline-block w-full rounded-[10px] py-1.5 pr-2 pl-1.25 text-black-800 text-sm hover:bg-surface-subtle/80 focus-visible:bg-primary-background focus-visible:text-primary-foreground focus-visible:ring-inset max-lg:py-2", { "text-primary-foreground": i }), href: e2, children: s2 });
  }]);
}, 480386, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(459451), a = e.i(856757), n = e.i(70422), s = e.i(618807);
  try {
    var o = window;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function i({ href: e2, children: r2 }) {
    let n2 = (0, s.useAppPathname)(), o2 = e2.replace(/\/$/, ""), l2 = n2 === e2 || `${n2}/` === e2, d2 = n2 === o2 || n2.startsWith(`${o2}/`), u2 = (0, a.useRef)(null), c2 = (0, a.useRef)(null);
    return (0, a.useEffect)(() => {
      let e3 = c2.current, t2 = u2.current;
      if (!e3 || !t2) return;
      let r3 = document.getElementById(n2) || document.getElementById(`${n2}/`), a2 = r3 ? r3.getBoundingClientRect().top - t2.getBoundingClientRect().top : void 0, { height: s2 } = r3?.getBoundingClientRect() || {}, o3 = () => {
        switch (true) {
          case (d2 && !l2):
            void 0 !== a2 && s2 && (e3.style.top = `${a2 + 0.5 * s2}px`, e3.style.height = `${s2 - 10}px`);
            return;
          case (d2 && l2):
            e3.style.top = "-13px", e3.style.height = "26px";
            return;
          case !d2:
            e3.style.height = "0px";
            return;
        }
      };
      "-13px" === e3.style.top || "0px" === e3.style.height ? (e3.style.transitionProperty = "none", e3.style.top = "unset", e3.style.height = "0px", requestAnimationFrame(() => {
        e3.style.transitionProperty = "height, top", o3();
      })) : o3();
    }, [d2, l2, n2]), (0, t.jsxs)("div", { ref: u2, className: "relative pb-2", children: [(0, t.jsxs)("div", { className: "flex items-stretch", children: [(0, t.jsx)("div", { className: "top-0 ml-[15.5px] w-px border-weak-stroke border-l" }), (0, t.jsx)("div", { className: "flex-1 pl-[18.5px]", children: r2 })] }), (0, t.jsx)("div", { ref: c2, className: "absolute bottom-2.5 left-[15px] -translate-y-1/2 rounded-full border-[#383E47] border-l-2 transition-[top,height] duration-500 ease-in-out" })] });
  }
  var l = e.i(28276);
  try {
    var d = window;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function u({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", ...e2, children: (0, t.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.14673 3.14673C5.34199 2.95147 5.6585 2.95147 5.85376 3.14673L9.35376 6.64673C9.54887 6.842 9.54897 7.15855 9.35376 7.35376L5.85376 10.8538C5.65855 11.049 5.342 11.0489 5.14673 10.8538C4.95147 10.6585 4.95147 10.342 5.14673 10.1467L8.29321 7.00024L5.14673 3.85376C4.95147 3.6585 4.95147 3.34199 5.14673 3.14673Z", fill: "currentColor" }) });
  }
  var c = e.i(551360);
  try {
    var p = window;
    p._sentryModuleMetadata = p._sentryModuleMetadata || {}, p._sentryModuleMetadata[new p.Error().stack] = Object.assign({}, p._sentryModuleMetadata[new p.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["SidebarSubgroupClient", 0, function({ title: e2, href: o2, isFeatured: d2, isMobile: p2, children: y }) {
    let h = (0, s.useAppPathname)(), { value: M } = (0, a.use)(n.SidebarContext), g = M.includes(o2.replace(/\/$/, "")), f = h === o2.replace(/\/$/, ""), w = p2 || f || !f && !g, m = w ? r.Trigger : a.Fragment, C = f || p2 ? "button" : l.LinkWithHoverPrefetch;
    return (0, t.jsxs)(r.Item, { value: o2.replace(/\/$/, ""), children: [(0, t.jsxs)(r.Header, { className: "group relative w-full", children: [(0, t.jsx)(r.Trigger, { asChild: true, children: (0, t.jsx)("button", { type: "button", className: "group/caret absolute top-0 left-0 cursor-pointer self-start rounded-[10px] p-1 ring-inset", children: (0, t.jsx)("span", { className: (0, c.cn)("block rounded-lg p-[5px] transition-[background-color] max-lg:py-[7px]", { "group-hover/caret:bg-white-500": !p2 }), children: (0, t.jsx)(u, { className: (0, c.cn)("transition-transform group-data-open:rotate-90", d2 ? "text-[#23252A]" : "text-[#717A88]") }) }) }) }), (0, t.jsx)(m, { ...w ? { asChild: true } : {}, children: (0, t.jsx)(C, { className: (0, c.cn)("inline-block w-full rounded-[10px] p-1.5 pr-2.5 pl-8 text-left text-[#717A88] text-sm focus-visible:bg-primary-background focus-visible:ring-inset group-hover:bg-[#F5F6F8] max-lg:py-2", { "text-secondary-foreground": f || d2 }), href: o2, children: e2 }) })] }), (0, t.jsx)(r.Content, { className: "mt-0.5 overflow-hidden data-closed:animate-slideUp data-open:animate-slideDown", children: (0, t.jsx)(i, { href: o2, children: y }) })] });
  }], 480386);
}, 665625, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(459451), a = e.i(856757), n = e.i(598596), s = e.i(70422), o = e.i(618807);
  try {
    var i = window;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function l(e2, t2) {
    return e2 === t2 || e2.startsWith(`${t2}/`);
  }
  e.s(["Sidebar", 0, function({ className: e2, values: i2, children: d }) {
    let u = (0, o.useAppPathname)(), [c, p] = (0, a.useState)(() => i2?.filter((e3) => l(u, e3)) ?? []), y = (0, n.default)((e3) => {
      let t2 = (i2 ?? []).filter((t3) => l(e3, t3) && !c.includes(t3));
      t2.length > 0 && p([...c, ...t2]);
    });
    return (0, a.useEffect)(() => {
      y(u);
    }, [u, y]), (0, t.jsx)(s.SidebarContext.Provider, { value: { value: c }, children: (0, t.jsx)(r.Root, { className: e2, type: "multiple", value: c, onValueChange: p, defaultValue: c, children: d }) });
  }]);
}, 28276, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(224253), a = e.i(992766);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["LinkWithHoverPrefetch", 0, function({ onMouseEnter: e2, onFocus: n2, ...s }) {
    let o = (0, a.useRouter)();
    function i() {
      "string" == typeof s.href && o.prefetch(s.href);
    }
    return (0, t.jsx)(r.default, { ...s, prefetch: false, onMouseEnter: (t2) => {
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
  let s = (0, r.createContext)(null);
  e.s(["SearchModalProvider", 0, function({ urlParamName: e2 = "s", children: n2 }) {
    let [o, i] = (0, r.useState)(false), [l, d] = (0, r.useState)(null), u = (0, r.useRef)(false), c = (0, r.useRef)(false), p = (0, r.useRef)(null), y = (0, r.useRef)(e2);
    y.current = e2, (0, r.useEffect)(() => {
      let e3 = new URLSearchParams(window.location.search).get(y.current);
      null !== e3 && (i(true), d(e3));
    }, []);
    let h = (0, a.useAppPathname)(), M = (0, r.useCallback)((e3) => {
      let t2 = new URL(window.location.href);
      return null !== e3 ? t2.searchParams.set(y.current, e3) : t2.searchParams.delete(y.current), `${t2.pathname}${t2.search}`;
    }, []), g = (0, r.useRef)(h);
    if ((0, r.useEffect)(() => {
      let e3 = () => {
        if (c.current) {
          c.current = false;
          let e5 = new URL(window.location.href);
          e5.searchParams.has(y.current) && (e5.searchParams.delete(y.current), window.history.replaceState(null, "", `${e5.pathname}${e5.search}`));
          return;
        }
        let e4 = new URLSearchParams(window.location.search).get(y.current);
        null !== e4 ? (g.current = window.location.pathname, u.current = true, i(true), d(e4)) : (i(false), d(null), u.current = false);
      };
      return window.addEventListener("popstate", e3), () => window.removeEventListener("popstate", e3);
    }, []), h !== g.current) {
      g.current = h;
      let e3 = new URLSearchParams(window.location.search).has(y.current);
      o && !e3 && (i(false), d(null), u.current = false, requestAnimationFrame(() => {
        let e4 = new URL(window.location.href);
        e4.searchParams.has(y.current) && (e4.searchParams.delete(y.current), window.history.replaceState(null, "", `${e4.pathname}${e4.search}`));
      }));
    }
    let f = (0, r.useCallback)((e3 = "") => {
      i(true), d(e3), u.current || (u.current = true, requestAnimationFrame(() => {
        window.history.pushState(null, "", M(e3));
      }));
    }, [M]), w = (0, r.useCallback)((e3) => {
      d(e3), p.current && clearTimeout(p.current), p.current = setTimeout(() => {
        window.history.replaceState(null, "", M(e3));
      }, 300);
    }, [M]);
    (0, r.useEffect)(() => () => {
      p.current && clearTimeout(p.current);
    }, []);
    let m = (0, r.useCallback)(() => {
      p.current && (clearTimeout(p.current), p.current = null), i(false), d(null), u.current ? (u.current = false, c.current = true, window.history.back()) : requestAnimationFrame(() => {
        window.history.replaceState(null, "", M(null));
      });
    }, [M]), C = (0, r.useMemo)(() => ({ closeSearchModal: m, isOpen: o, openSearchModal: f, query: l, syncQueryToUrl: w }), [m, o, f, l, w]);
    return (0, t.jsx)(s.Provider, { value: C, children: n2 });
  }, "useSearchModal", 0, function() {
    let e2 = (0, r.use)(s);
    if (!e2) throw Error("useSearchModal must be used within SearchModalProvider");
    return e2;
  }]);
}, 67232, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(167815);
  try {
    var a = window;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function n({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", ...e2, children: (0, t.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2", d: "m15.8 15.8-3.62-3.62M1.8 7.833a6.034 6.034 0 1 1 12.069 0 6.034 6.034 0 0 1-12.07 0Z" }) });
  }
  var s = e.i(551360);
  try {
    var o = window;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["SearchTriggerButton", 0, function({ onClick: e2, placeholder: a2 = "Search\u2026", size: o2 = "lg", className: i }) {
    return (0, t.jsxs)(r.Button, { variant: "outline", size: o2, onClick: e2, className: (0, s.cn)("text-sm shadow-attio-3", i), children: [(0, t.jsx)(n, { className: "text-accent-foreground" }), (0, t.jsx)("p", { className: "w-full truncate text-left text-accent-foreground", children: a2 }), (0, t.jsx)("p", { className: "text-caption-foreground text-xs tracking-wider", "aria-hidden": "true", children: "\u2318K" })] });
  }], 67232);
}, 406595, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757), a = e.i(618807), n = e.i(468884);
  try {
    var s = window;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function o() {
    let e2 = (0, r.useRef)(null), a2 = (0, r.useRef)(null);
    return (0, r.useEffect)(() => {
      e2.current = a2.current?.closest("footer") ?? null;
    }, []), (0, n.useNavigationDynamicDarkMode)({ sectionRef: e2 }), (0, t.jsx)("span", { ref: a2, "aria-hidden": true, className: "hidden" });
  }
  e.s(["SiteFooterNavigationDarkMode", 0, function() {
    return "/" !== (0, a.useAppPathname)() ? null : (0, t.jsx)(o, {});
  }]);
}]);
