;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "e082760a-a13d-7234-ca3f-bcd78a51acf2");
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
  var a = e.i(856757), n = e.i(579180);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let o = a.createContext(void 0);
  function s(e2) {
    let t2 = a.useContext(o);
    if (!e2 && void 0 === t2) throw Error((0, n.default)(27));
    return t2;
  }
  var i = e.i(256777), l = e.i(573568);
  try {
    var d = "u" > typeof window ? window : e.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let u = a.forwardRef(function(e2, t2) {
    let { render: a2, className: n2, style: r2, forceRender: o2 = false, ...d2 } = e2, u2 = s(), p2 = u2.useState("open"), c2 = u2.useState("nested"), y2 = u2.useState("mounted"), g2 = u2.useState("transitionStatus");
    return (0, i.useRenderElement)("div", e2, { state: { open: p2, transitionStatus: g2 }, ref: [u2.context.backdropRef, t2], stateAttributesMapping: l.popupTransitionStateMapping, props: [{ role: "presentation", hidden: !y2, style: { userSelect: "none", WebkitUserSelect: "none" } }, d2], enabled: o2 || !c2 });
  });
  var p = e.i(523237), c = e.i(930296), y = e.i(296232);
  try {
    var g = "u" > typeof window ? window : e.g;
    g._sentryModuleMetadata = g._sentryModuleMetadata || {}, g._sentryModuleMetadata[new g.Error().stack] = Object.assign({}, g._sentryModuleMetadata[new g.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let M = a.forwardRef(function(e2, t2) {
    let { render: a2, className: n2, style: r2, disabled: o2 = false, nativeButton: l2 = true, ...d2 } = e2, u2 = s(), g2 = u2.useState("open"), { getButtonProps: M2, buttonRef: f2 } = (0, p.useButton)({ disabled: o2, native: l2 });
    return (0, i.useRenderElement)("button", e2, { state: { disabled: o2 }, ref: [t2, f2], props: [{ onClick: function(e3) {
      g2 && u2.setOpen(false, (0, c.createChangeEventDetails)(y.REASONS.closePress, e3.nativeEvent));
    } }, d2, M2] });
  });
  var f = e.i(145505);
  try {
    var w = "u" > typeof window ? window : e.g;
    w._sentryModuleMetadata = w._sentryModuleMetadata || {}, w._sentryModuleMetadata[new w.Error().stack] = Object.assign({}, w._sentryModuleMetadata[new w.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let h = a.forwardRef(function(e2, t2) {
    let { render: a2, className: n2, style: r2, id: o2, ...l2 } = e2, d2 = s(), u2 = (0, f.useBaseUiId)(o2);
    return d2.useSyncedValueWithCleanup("descriptionElementId", u2), (0, i.useRenderElement)("p", e2, { ref: t2, props: [{ id: u2 }, l2] });
  });
  var m = e.i(917976);
  try {
    var x = "u" > typeof window ? window : e.g;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let v = a.createContext(void 0);
  function _() {
    let e2 = a.useContext(v);
    if (void 0 === e2) throw Error((0, n.default)(26));
    return e2;
  }
  var b = e.i(811336), E = e.i(925202), S = e.i(136343), k = e.i(618545);
  try {
    var P = "u" > typeof window ? window : e.g;
    P._sentryModuleMetadata = P._sentryModuleMetadata || {}, P._sentryModuleMetadata[new P.Error().stack] = Object.assign({}, P._sentryModuleMetadata[new P.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let O = { ...l.popupStateMapping, ...k.transitionStatusMapping, nestedDialogOpen: (e2) => e2 ? { "data-nested-dialog-open": "" } : null };
  var C = e.i(68982);
  try {
    var j = "u" > typeof window ? window : e.g;
    j._sentryModuleMetadata = j._sentryModuleMetadata || {}, j._sentryModuleMetadata[new j.Error().stack] = Object.assign({}, j._sentryModuleMetadata[new j.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let R = a.forwardRef(function(e2, t2) {
    let { render: a2, className: n2, style: r2, finalFocus: o2, initialFocus: l2, ...d2 } = e2, u2 = s(), p2 = u2.useState("descriptionElementId"), c2 = u2.useState("disablePointerDismissal"), y2 = u2.useState("floatingRootContext"), g2 = u2.useState("popupProps"), M2 = u2.useState("modal"), f2 = u2.useState("mounted"), w2 = u2.useState("nested"), h2 = u2.useState("nestedOpenDialogCount"), x2 = u2.useState("open"), v2 = u2.useState("openMethod"), k2 = u2.useState("titleElementId"), P2 = u2.useState("transitionStatus"), j2 = u2.useState("role"), R2 = y2.useState("floatingId");
    _(), (0, b.useOpenChangeComplete)({ open: x2, ref: u2.context.popupRef, onComplete() {
      x2 && u2.context.onOpenChangeComplete?.(true);
    } });
    let D2 = void 0 === l2 ? (0, S.createDefaultInitialFocus)(u2.context.popupRef) : l2, I2 = u2.useStateSetter("popupElement"), B2 = (0, i.useRenderElement)("div", e2, { state: { open: x2, nested: w2, transitionStatus: P2, nestedDialogOpen: h2 > 0 }, props: [g2, { id: R2, "aria-labelledby": k2, "aria-describedby": p2, role: j2, ...S.FOCUSABLE_POPUP_PROPS, hidden: !f2, onKeyDown(e3) {
      E.COMPOSITE_KEYS.has(e3.key) && e3.stopPropagation();
    }, style: { "--nested-dialogs": h2 } }, d2], ref: [t2, u2.context.popupRef, I2], stateAttributesMapping: O });
    return (0, C.jsx)(m.FloatingFocusManager, { context: y2, openInteractionType: v2, disabled: !f2, closeOnFocusOut: !c2, initialFocus: D2, returnFocus: o2, modal: false !== M2, restoreFocus: "popup", children: B2 });
  });
  var D = e.i(208169), I = e.i(801873), B = e.i(60125);
  try {
    var A = "u" > typeof window ? window : e.g;
    A._sentryModuleMetadata = A._sentryModuleMetadata || {}, A._sentryModuleMetadata[new A.Error().stack] = Object.assign({}, A._sentryModuleMetadata[new A.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let T = a.forwardRef(function(e2, t2) {
    let { keepMounted: a2 = false, ...n2 } = e2, r2 = s(), o2 = r2.useState("mounted"), i2 = r2.useState("modal"), l2 = r2.useState("open");
    return o2 || a2 ? (0, C.jsx)(v.Provider, { value: a2, children: (0, C.jsxs)(I.FloatingPortal, { ref: t2, ...n2, children: [o2 && true === i2 && (0, C.jsx)(B.InternalBackdrop, { ref: r2.context.internalBackdropRef, inert: (0, D.inertValue)(!l2) }), e2.children] }) }) : null;
  });
  var N = e.i(599607), K = e.i(547470), F = e.i(535896), V = e.i(635338);
  try {
    var U = "u" > typeof window ? window : e.g;
    U._sentryModuleMetadata = U._sentryModuleMetadata || {}, U._sentryModuleMetadata[new U.Error().stack] = Object.assign({}, U._sentryModuleMetadata[new U.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function z({ store: e2, parentContext: t2, isDrawer: n2 }) {
    let r2 = e2.useState("open"), o2 = e2.useState("disablePointerDismissal"), s2 = e2.useState("modal"), i2 = e2.useState("popupElement"), l2 = e2.useState("floatingRootContext"), [d2, u2] = a.useState(0), [p2, c2] = a.useState(0), y2 = 0 === d2, g2 = (0, F.useDismiss)(l2, { outsidePressEvent: () => e2.context.internalBackdropRef.current || e2.context.backdropRef.current ? "intentional" : { mouse: "trap-focus" === s2 ? "sloppy" : "intentional", touch: "sloppy" }, outsidePress(t3) {
      if (!e2.context.outsidePressEnabledRef.current || "button" in t3 && 0 !== t3.button) return false;
      if ("touches" in t3) {
        if ("touchend" === t3.type) {
          if (1 !== t3.changedTouches.length || 0 !== t3.touches.length) return false;
        } else if (1 !== t3.touches.length) return false;
      }
      let a2 = (0, V.getTarget)(t3);
      if (y2 && !o2) {
        if (s2) {
          let t4 = e2.context.internalBackdropRef.current, n3 = e2.context.backdropRef.current;
          return !t4 && !n3 || t4 === a2 || n3 === a2 || (0, V.contains)(a2, i2) && !a2?.hasAttribute("data-base-ui-portal");
        }
        return true;
      }
      return false;
    }, escapeKey: y2 });
    return (0, K.useScrollLock)(r2 && true === s2, i2), e2.useContextCallback("onNestedDialogOpen", (e3, t3) => {
      u2(e3), c2(t3);
    }), (0, N.useIsoLayoutEffect)(() => (t2?.onNestedDialogOpen && (r2 ? t2.onNestedDialogOpen(d2 + 1, p2 + +!!n2) : t2.onNestedDialogOpen(0, 0)), () => {
      t2?.onNestedDialogOpen && r2 && t2.onNestedDialogOpen(0, 0);
    }), [n2, r2, d2, p2, t2]), (0, S.usePopupInteractionProps)(e2, { activeTriggerProps: g2.reference, inactiveTriggerProps: g2.trigger, popupProps: g2.floating, nestedOpenDialogCount: d2, nestedOpenDrawerCount: p2 }), null;
  }
  var H = e.i(939007), L = e.i(631457), W = e.i(190433), q = e.i(521703);
  try {
    var G = "u" > typeof window ? window : e.g;
    G._sentryModuleMetadata = G._sentryModuleMetadata || {}, G._sentryModuleMetadata[new G.Error().stack] = Object.assign({}, G._sentryModuleMetadata[new G.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let Y = { ...W.popupStoreSelectors, modal: (e2) => e2.modal, nested: (e2) => e2.nested, nestedOpenDialogCount: (e2) => e2.nestedOpenDialogCount, nestedOpenDrawerCount: (e2) => e2.nestedOpenDrawerCount, disablePointerDismissal: (e2) => e2.disablePointerDismissal, openMethod: (e2) => e2.openMethod, descriptionElementId: (e2) => e2.descriptionElementId, titleElementId: (e2) => e2.titleElementId, viewportElement: (e2) => e2.viewportElement, role: (e2) => e2.role };
  class $ extends H.ReactStore {
    constructor(e2, t2, a2) {
      const n2 = new q.PopupTriggerMap();
      super(J(e2, n2, t2, a2), Q(n2), Y);
    }
    setOpen = (e2, t2) => {
      if (t2.preventUnmountOnClose = () => {
        this.set("preventUnmountingOnClose", true);
      }, e2 || null != t2.trigger || null == this.state.activeTriggerId || (t2.trigger = this.state.activeTriggerElement ?? void 0), this.context.onOpenChange?.(e2, t2), t2.isCanceled) return;
      this.state.floatingRootContext.dispatchOpenChange(e2, t2);
      let a2 = { open: e2 };
      (0, S.setPopupOpenState)(a2, e2, t2.trigger), this.update(a2);
    };
  }
  function J(e2, t2, a2, n2 = false) {
    let r2 = { ...(0, W.createInitialPopupStoreState)(), modal: true, disablePointerDismissal: false, viewportElement: null, descriptionElementId: void 0, titleElementId: void 0, openMethod: null, nested: false, nestedOpenDialogCount: 0, nestedOpenDrawerCount: 0, role: "dialog", ...e2 };
    return r2.floatingRootContext = (0, W.createPopupFloatingRootContext)(t2, a2, n2), r2;
  }
  function Q(e2) {
    return { popupRef: a.createRef(), backdropRef: a.createRef(), internalBackdropRef: a.createRef(), outsidePressEnabledRef: { current: true }, triggerElements: e2, onOpenChange: void 0, onOpenChangeComplete: void 0 };
  }
  try {
    var X = "u" > typeof window ? window : e.g;
    X._sentryModuleMetadata = X._sentryModuleMetadata || {}, X._sentryModuleMetadata[new X.Error().stack] = Object.assign({}, X._sentryModuleMetadata[new X.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var Z = "u" > typeof window ? window : e.g;
    Z._sentryModuleMetadata = Z._sentryModuleMetadata || {}, Z._sentryModuleMetadata[new Z.Error().stack] = Object.assign({}, Z._sentryModuleMetadata[new Z.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var ee = "u" > typeof window ? window : e.g;
    ee._sentryModuleMetadata = ee._sentryModuleMetadata || {}, ee._sentryModuleMetadata[new ee.Error().stack] = Object.assign({}, ee._sentryModuleMetadata[new ee.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let et = a.forwardRef(function(e2, t2) {
    let { render: a2, className: n2, style: r2, children: o2, ...l2 } = e2, d2 = _(), u2 = s(), p2 = u2.useState("open"), c2 = u2.useState("nested"), y2 = u2.useState("transitionStatus"), g2 = u2.useState("nestedOpenDialogCount"), M2 = u2.useState("mounted"), f2 = u2.useStateSetter("viewportElement");
    return (0, i.useRenderElement)("div", e2, { enabled: d2 || M2, state: { open: p2, nested: c2, transitionStatus: y2, nestedDialogOpen: g2 > 0 }, ref: [t2, f2], stateAttributesMapping: O, props: [{ role: "presentation", hidden: !M2, style: { pointerEvents: p2 ? void 0 : "none" }, children: o2 }, l2] });
  });
  try {
    var ea = "u" > typeof window ? window : e.g;
    ea._sentryModuleMetadata = ea._sentryModuleMetadata || {}, ea._sentryModuleMetadata[new ea.Error().stack] = Object.assign({}, ea._sentryModuleMetadata[new ea.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let en = a.forwardRef(function(e2, t2) {
    let { render: a2, className: n2, style: r2, id: o2, ...l2 } = e2, d2 = s(), u2 = (0, f.useBaseUiId)(o2);
    return d2.useSyncedValueWithCleanup("titleElementId", u2), (0, i.useRenderElement)("h2", e2, { ref: t2, props: [{ id: u2 }, l2] });
  });
  var er = e.i(867383), eo = e.i(610993), es = e.i(84588), ei = e.i(522353);
  try {
    var el = "u" > typeof window ? window : e.g;
    el._sentryModuleMetadata = el._sentryModuleMetadata || {}, el._sentryModuleMetadata[new el.Error().stack] = Object.assign({}, el._sentryModuleMetadata[new el.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let ed = a.forwardRef(function(e2, t2) {
    let { render: r2, className: o2, style: d2, disabled: u2 = false, nativeButton: c2 = true, id: y2, payload: g2, handle: M2, ...w2 } = e2, h2 = s(true), m2 = (0, eo.usePopupHandleStore)(M2) ?? h2;
    if (!m2) throw Error((0, n.default)(79));
    let x2 = (0, f.useBaseUiId)(y2), v2 = m2.useState("floatingRootContext"), _2 = m2.useState("isOpenedByTrigger", x2), b2 = m2.useState("triggerPopupId", x2), E2 = a.useRef(null), { registerTrigger: k2, isMountedByThisTrigger: P2 } = (0, S.useTriggerDataForwarding)(x2, E2, m2, { payload: g2 }), { getButtonProps: O2, buttonRef: C2 } = (0, p.useButton)({ disabled: u2, native: c2 }), j2 = (0, es.useClick)(v2), R2 = (0, ei.useOpenMethodTriggerProps)(() => m2.select("open"), (e3) => {
      m2.set("openMethod", e3);
    }), D2 = m2.useState("triggerProps", P2);
    return (0, i.useRenderElement)("button", e2, { state: { disabled: u2, open: _2 }, ref: [C2, t2, k2, E2], props: [j2.reference, D2, R2, { [er.CLICK_TRIGGER_IDENTIFIER]: "", id: x2, "aria-haspopup": "dialog", "aria-expanded": _2, "aria-controls": b2 }, w2, O2], stateAttributesMapping: l.triggerOpenStateMapping });
  });
  var eu = e.i(285630);
  try {
    var ep = "u" > typeof window ? window : e.g;
    ep._sentryModuleMetadata = ep._sentryModuleMetadata || {}, ep._sentryModuleMetadata[new ep.Error().stack] = Object.assign({}, ep._sentryModuleMetadata[new ep.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class ec extends eu.BasePopupHandle {
    constructor() {
      super((function() {
        let e2 = new q.PopupTriggerMap();
        return new L.NullStore(Object.freeze(J(void 0, e2)), Object.freeze(Q(e2)), Y);
      })(), "Dialog", false);
    }
    open(e2) {
      this.openByTrigger(e2);
    }
    openWithPayload(e2) {
      let t2 = this.attachedStore;
      null === t2 || (t2.set("payload", e2), t2.setOpen(true, (0, c.createChangeEventDetails)(y.REASONS.imperativeAction)));
    }
    close() {
      this.closePopup();
    }
    get isOpen() {
      return this.attachedStore?.select("open") ?? false;
    }
  }
  e.s(["Backdrop", 0, u, "Close", 0, M, "Description", 0, h, "Handle", 0, ec, "Popup", 0, R, "Portal", 0, T, "Root", 0, function(e2) {
    return (function(e3, t2) {
      let { children: n2, open: r2, defaultOpen: i2 = false, onOpenChange: l2, onOpenChangeComplete: d2, disablePointerDismissal: u2 = false, modal: p2 = true, actionsRef: g2, handle: M2, triggerId: f2, defaultTriggerId: w2 = null } = t2, h2 = "alert-dialog" === e3, m2 = s(true), x2 = { modal: !!h2 || p2, disablePointerDismissal: h2 || u2, nested: null != m2, role: h2 ? "alertdialog" : "dialog" }, v2 = (0, S.usePopupRootStore)((e4, t3) => new $({ open: i2, openProp: r2, activeTriggerId: w2, triggerIdProp: f2, ...x2 }, e4, t3), true);
      v2.useControlledProp("openProp", r2), v2.useControlledProp("triggerIdProp", f2), v2.useSyncedValues(x2), v2.useContextCallback("onOpenChange", l2), v2.useContextCallback("onOpenChangeComplete", d2);
      let _2 = v2.useState("open"), b2 = v2.useState("mounted"), E2 = v2.useState("payload");
      (0, S.usePopupRootSync)(v2, _2), (0, S.useImplicitActiveTrigger)(v2);
      let { forceUnmount: k2 } = (0, S.useOpenStateTransitions)(_2, v2);
      a.useImperativeHandle(g2, () => ({ unmount: k2, close: () => v2.setOpen(false, (0, c.createChangeEventDetails)(y.REASONS.imperativeAction)) }), [k2, v2]);
      let P2 = _2 || b2;
      return (0, C.jsxs)(o.Provider, { value: v2, children: [M2 && (0, C.jsx)(S.PopupHandleAttachment, { handle: M2, store: v2 }), P2 && (0, C.jsx)(z, { store: v2, parentContext: m2?.context, isDrawer: "drawer" === e3 }), "function" == typeof n2 ? n2({ payload: E2 }) : n2] });
    })("dialog", e2);
  }, "Title", 0, en, "Trigger", 0, ed, "Viewport", 0, et, "createHandle", 0, function() {
    return new ec();
  }], 724933);
  var ey = e.i(724933);
  e.s(["Dialog", 0, ey], 624721);
}, 659527, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(624721), n = e.i(140802), r = e.i(112086), o = e.i(856757), s = e.i(637142), i = e.i(559968), l = e.i(551360), d = e.i(238025);
  try {
    var u = window;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["CustomerCaseHeaderVideo", 0, function({ blok: e2, className: u2, ...p }) {
    let c = e2.videoLink?.url;
    if (!c) throw Error("CustomerCaseHeaderVideo: Video URL is required");
    if (!e2.videoPreview?.filename) throw Error("CustomerCaseHeaderVideo: Preview video filename is required");
    let [y, g] = (0, o.useState)(false), M = (0, o.useRef)(null);
    return (0, o.useEffect)(() => {
      M.current && (y ? M.current.pause() : M.current.play());
    }, [y]), (0, t.jsx)("div", { "data-visual-test": "blackout", className: (0, l.cn)("relative flex overflow-hidden bg-black-0", u2), ...p, children: (0, t.jsxs)(r.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.5, ease: d.easeInOutCubic, when: "beforeChildren" }, className: (0, l.cn)("absolute inset-0 flex size-full items-center justify-center", { "bg-black-0": e2.videoPreview, "bg-black-0/40": !e2.videoPreview }), children: [(0, t.jsx)("video", { ref: M, "aria-label": "Customer case preview video", className: "absolute inset-0 size-full object-cover", autoPlay: true, loop: true, muted: true, playsInline: true, preload: "auto", children: (0, t.jsx)("source", { src: e2.videoPreview.filename, type: "video/mp4" }) }), (0, t.jsx)("div", { className: "relative flex w-full max-w-md flex-col items-center justify-center", children: (0, t.jsxs)(a.Dialog.Root, { open: y, onOpenChange: g, children: [(0, t.jsx)(a.Dialog.Trigger, { render: (0, t.jsxs)(r.motion.button, { "aria-label": "Play customer case video", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { bounce: 0, delay: 0.2, duration: 0.3 }, className: (0, l.cn)("flex items-center gap-x-1.5 px-3 py-1.5 backdrop-blur-xs", "rounded-full border-[0.5px] border-white-100/20 text-white-100 outline-[0.5px] outline-white-200/20", "bg-radial-[at_50%_90%] bg-size-[200%_200%] bg-top from-white-100/20 via-white-100/12 to-70% to-white-100/8", "cursor-pointer hover:bg-bottom focus-visible:bg-bottom", "active:border-white-100/32 active:opacity-75", "transition-all duration-150 ease-in-out"), children: [(0, t.jsx)(i.Play12, {}), (0, t.jsx)("span", { className: "font-normal text-sm", children: "Play video" })] }) }), (0, t.jsx)(n.AnimatePresence, { children: y && (0, t.jsxs)(a.Dialog.Portal, { keepMounted: true, children: [(0, t.jsx)(a.Dialog.Backdrop, { render: (0, t.jsx)(r.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: (0, l.cn)("z-(--dialog-overlay-z-index)", "fixed inset-0 cursor-pointer bg-black-50/96"), transition: { duration: 0.2, ease: "easeInOut" } }) }), (0, t.jsx)(a.Dialog.Viewport, { className: (0, l.cn)("z-(--dialog-content-z-index)", "fixed inset-0 flex items-center justify-center px-container"), children: (0, t.jsx)(a.Dialog.Popup, { render: (0, t.jsx)(r.motion.div, { initial: { filter: "blur(2px)", opacity: 0, scale: 0.99, y: 2 }, animate: { filter: "blur(0px)", opacity: 1, scale: 1, transition: { delay: 0.1, duration: 0.3, ease: "easeInOut" }, y: 0 }, exit: { filter: "blur(6px)", opacity: 0, scale: 1.01, transition: { duration: 0.2, ease: "easeInOut" } }, className: "relative isolate aspect-video w-full max-w-7xl overflow-hidden rounded-xl bg-black-0", style: { boxShadow: "0px 1px 2px 0px oklch(0 0 0 / 0.01),0px 2px 4px -1px oklch(0 0 0 / 0.02),0px 4px 8px -2px oklch(0 0 0 / 0.03),0px 8px 16px -4px oklch(0 0 0 / 0.04),0px 16px 32px -8px oklch(0 0 0 / 0.05)" } }), children: (0, t.jsx)(s.AttioVideoPlayer, { src: c, autoPlay: true, className: "absolute inset-0" }) }) })] }) })] }) })] }) });
  }]);
}, 219404, (e) => {
  "use strict";
  var t = e.i(68982), a = e.i(112086), n = e.i(928945), r = e.i(936991), o = e.i(46946), s = e.i(796851), i = e.i(202355), l = e.i(856757), d = e.i(551360);
  try {
    var u = window;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["CustomerCaseProgressTrackerColumn", 0, function({ className: e2 }) {
    let [u2, p] = (0, l.useState)(0), c = (0, l.useRef)(null), { scrollYProgress: y } = (0, o.useScroll)({ offset: ["start center", "end end"], target: c }), g = (0, i.useTransform)((0, s.useSpring)(y, { damping: 20, mass: 0.5, stiffness: 150 }), [0, 1], [0, 100], { clamp: true }), M = n.useMotionTemplate`${g} 100`;
    return (0, r.useMotionValueEvent)(y, "change", (e3) => {
      p(Math.round(100 * e3));
    }), (0, t.jsx)("div", { ref: c, className: (0, d.cn)("flex justify-end py-[96px]", e2), children: (0, t.jsxs)("div", { className: "sticky top-[calc(var(--site-header-height)+96px)] -mr-px flex size-10 shrink-0 translate-x-1/2 -translate-y-1/4 items-center justify-center rounded-full bg-secondary-background", children: [(0, t.jsxs)("svg", { className: "absolute inset-0", viewBox: "0 0 40 40", width: "40", height: "40", children: [(0, t.jsx)(a.motion.circle, { cx: "20", cy: "20", r: "19.5", fill: "none", stroke: "#E4E7EC", strokeWidth: "1" }), (0, t.jsx)(a.motion.circle, { cx: "20", cy: "20", r: "19.5", fill: "none", className: (0, d.cn)("stroke-black-800 transition-colors", { "stroke-transparent": 0 === u2 }), strokeWidth: "1", strokeLinecap: "round", pathLength: 100, strokeDasharray: M, strokeDashoffset: 0, transform: "rotate(-90 20 20)" })] }), (0, t.jsx)("p", { className: "font-medium text-caption-foreground text-overline tracking-tight", children: u2 })] }) });
  }]);
}]);
