;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "1cdf2404-2730-6d0e-2903-ab20dbd71ebf");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 28365, (e) => {
  "use strict";
  var t = e.i(579180), r = e.i(856757);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let a = r.createContext(void 0);
  e.s(["useToolbarRootContext", 0, function(e2) {
    let n2 = r.useContext(a);
    if (void 0 === n2 && !e2) throw Error((0, t.default)(69));
    return n2;
  }]);
}, 818823, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(403432), n = e.i(635338), a = e.i(639761), o = e.i(930296), s = e.i(296232);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useTriggerFocusGuards", 0, function(e2, i2) {
    let l = t.useRef(null);
    return { preFocusGuardRef: l, handlePreFocusGuardFocus: function(t2) {
      r.flushSync(() => {
        e2.setOpen(false, (0, o.createChangeEventDetails)(s.REASONS.focusOut, t2.nativeEvent, t2.currentTarget));
      });
      let n2 = (0, a.getTabbableBeforeElement)(l.current);
      n2?.focus();
    }, handleFocusTargetFocus: function(t2) {
      let l2 = e2.select("positionerElement");
      if (l2 && (0, a.isOutsideEvent)(t2, l2)) e2.context.beforeContentFocusGuardRef.current?.focus();
      else {
        r.flushSync(() => {
          e2.setOpen(false, (0, o.createChangeEventDetails)(s.REASONS.focusOut, t2.nativeEvent, t2.currentTarget));
        });
        let u = (0, a.getTabbableAfterElement)(e2.context.triggerFocusTargetRef.current || i2.current);
        for (; null !== u && (0, n.contains)(l2, u); ) {
          let e3 = u;
          if ((u = (0, a.getNextTabbable)(u)) === e3) break;
        }
        u?.focus();
      }
    } };
  }]);
}, 584844, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(219710), n = e.i(547470), a = e.i(599607);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useAnchoredPopupScrollLock", 0, function(e2, o2, s, i) {
    let [l, u] = t.useState(false);
    (0, a.useIsoLayoutEffect)(() => {
      if (!e2 || !o2 || null == s) return void u(false);
      let t2 = (0, r.ownerDocument)(s).documentElement.clientWidth, n2 = s.offsetWidth;
      u(t2 > 0 && n2 > 0 && n2 >= t2 - 20);
    }, [e2, o2, s]), (0, n.useScrollLock)(e2 && (!o2 || l), i);
  }]);
}, 177970, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { callServer: function() {
    return s.callServer;
  }, createServerReference: function() {
    return l.createServerReference;
  }, findSourceMapURL: function() {
    return i.findSourceMapURL;
  } };
  for (var o in a) Object.defineProperty(r, o, { enumerable: true, get: a[o] });
  let s = e.r(508495), i = e.r(211490), l = e.r(147449);
}, 473929, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757), n = e.i(177970);
  let a = (0, n.createServerReference)("00da35f4eb915af56f75467fa32ec40ac981b8cec2", n.callServer, void 0, n.findSourceMapURL, "toggleDraftMode");
  try {
    var o = window;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function s({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", ...e2, children: (0, t.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 6.50012C2.27614 6.50012 2.5 6.72398 2.5 7.00012V7.40051C2.50029 9.11222 3.88789 10.4999 5.59961 10.5001H8.79297L7.64648 9.35364L7.58203 9.27551C7.45389 9.08146 7.47569 8.81747 7.64648 8.64661C7.81735 8.47574 8.08131 8.45399 8.27539 8.58215L8.35352 8.64661L10.3535 10.6466C10.5487 10.8419 10.5488 11.1584 10.3535 11.3536L8.35352 13.3536C8.15827 13.5488 7.84173 13.5488 7.64648 13.3536C7.45125 13.1584 7.4513 12.8419 7.64648 12.6466L8.79297 11.5001H5.59961C3.3356 11.4999 1.50029 9.6645 1.5 7.40051V7.00012C1.5 6.72398 1.72386 6.50012 2 6.50012ZM5.64648 0.646606C5.84175 0.451344 6.15825 0.451344 6.35352 0.646606C6.5487 0.841875 6.54875 1.1584 6.35352 1.35364L5.20703 2.50012H8.40039C10.6644 2.50033 12.4998 4.33567 12.5 6.59973V7.00012C12.4999 7.2762 12.2761 7.50012 12 7.50012C11.7239 7.50012 11.5001 7.2762 11.5 7.00012V6.59973C11.4998 4.88796 10.1122 3.50033 8.40039 3.50012H5.20703L6.35352 4.64661L6.41797 4.72473C6.54606 4.9188 6.52435 5.18281 6.35352 5.35364C6.18267 5.52441 5.91865 5.54619 5.72461 5.41809L5.64648 5.35364L3.64648 3.35364C3.45125 3.1584 3.4513 2.84187 3.64648 2.64661L5.64648 0.646606Z", fill: "currentColor" }) });
  }
  var i = e.i(551360);
  try {
    var l = window;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["PolarisToolbarDraftModeClient", 0, ({ isEnabled: e2 }) => {
    let [n2, o2] = (0, r.useTransition)(), l2 = e2 ? "Drafts" : "Published", u = e2 ? "Switch to Published" : "Switch to Drafts";
    return (0, t.jsxs)("button", { type: "button", onClick: () => {
      o2(async () => {
        await a(), window.location.reload();
      });
    }, disabled: n2, "aria-label": n2 ? "Switching\u2026" : u, className: (0, i.cn)("group flex h-7 min-w-[200px] cursor-pointer items-center justify-between rounded-md border border-white-100/15 bg-black-0 px-2.5 uppercase", "text-secondary-foreground transition-colors duration-150", "hover:border-white-100/30 hover:text-primary-foreground", "focus-visible:border-white-100/40 focus-visible:text-primary-foreground focus-visible:outline-none", "disabled:cursor-wait", { "text-primary-foreground": n2 }), children: [(0, t.jsxs)("span", { className: "flex items-center gap-2.5", children: [(0, t.jsx)("span", { "aria-hidden": "true", className: (0, i.cn)("inline-block size-1.5 rounded-full transition-colors duration-150", "shadow-[0_0_0_3px_currentColor]", { "bg-green-500": !e2, "bg-muted-strong-background text-transparent": n2, "bg-yellow-500": e2, "text-green-500/20": !e2, "text-yellow-500/20": e2 }) }), (0, t.jsxs)("span", { children: ["Viewing", " ", (0, t.jsx)("span", { className: "font-medium text-primary-foreground", children: l2 })] })] }), (0, t.jsx)(s, { className: (0, i.cn)("size-3 transition-transform duration-150 ease-out", { "animate-pulse": n2, "group-hover:scale-110 group-active:scale-90": !n2 }) })] });
  }], 473929);
}, 362220, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757), n = e.i(385264);
  try {
    var a = window;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let o = () => {
    let [e2, n2] = (0, r.useState)(0);
    return (0, r.useEffect)(() => {
      let e3 = performance.now(), t2 = 0, r2 = 0, a2 = () => {
        let o2 = performance.now();
        t2++, o2 > e3 + 1e3 && (n2(Math.round(1e3 * t2 / (o2 - e3))), e3 = o2, t2 = 0), r2 = requestAnimationFrame(a2);
      };
      return r2 = requestAnimationFrame(a2), () => cancelAnimationFrame(r2);
    }, []), (0, t.jsxs)("div", { className: "flex items-center gap-2 text-secondary-foreground transition-colors duration-300", style: 0 === e2 ? {} : e2 < 30 ? { color: "color(display-p3 1 0.18 0.18)" } : e2 < 45 ? { color: "color(display-p3 1 0.55 0)" } : {}, children: [(0, t.jsx)("span", { className: "w-[2ch] text-right tabular-nums", children: e2 }), (0, t.jsx)("span", { children: "FPS" })] });
  };
  var s = e.i(403432), i = e.i(551360);
  try {
    var l = window;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function u() {
    let e2 = (0, r.useRef)(null), n2 = (0, r.useRef)(null), a2 = (0, r.useRef)(null), o2 = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
      let t2 = { x: 0, y: 0 }, r2 = false, s2 = 0, i2 = () => {
        r2 = false;
        let { x: s3, y: i3 } = t2;
        n2.current && (n2.current.style.left = `${s3}px`), a2.current && (a2.current.style.top = `${i3}px`), ((t3, r3) => {
          let n3 = o2.current;
          if (!n3) return;
          n3.style.left = `${t3 + 10}px`, n3.style.top = `${r3 - 22}px`;
          let a3 = ((t4) => {
            let r4 = e2.current;
            if (!r4) return null;
            let n4 = r4.getBoundingClientRect(), a4 = t4 - n4.left;
            return a4 < 0 || a4 > n4.width ? null : Math.round(a4);
          })(t3);
          n3.textContent = `x: ${t3}, y: ${r3}${null !== a3 ? ` | grid-x: ${a3}px` : ""}`;
        })(s3, i3);
      }, l3 = (e3) => {
        t2 = { x: e3.clientX, y: e3.clientY }, r2 || (r2 = true, s2 = requestAnimationFrame(i2));
      };
      return window.addEventListener("mousemove", l3), () => {
        window.removeEventListener("mousemove", l3), cancelAnimationFrame(s2);
      };
    }, []);
    let l2 = Array.from({ length: 11 }, (e3, r2) => (0, t.jsx)("div", { className: "absolute top-0 bottom-0 w-px -translate-x-1/2 bg-red-500/30", style: { left: `${(r2 + 1) / 12 * 100}%` } }, `major-${r2}`)), u2 = Array.from({ length: 12 }, (e3, r2) => (0, t.jsx)("div", { className: "absolute top-0 bottom-0 w-px -translate-x-1/2 bg-red-500/10", style: { left: `${(2 * r2 + 1) / 24 * 100}%` } }, `minor-${r2}`)), d2 = Array.from({ length: 24 }, (e3, r2) => (0, t.jsx)("div", { className: (0, i.cn)("h-full w-full", { "bg-red-500/5": r2 % 2 == 0 }, { "bg-red-500/[0.02]": r2 % 2 != 0 }) }, r2));
    return (0, s.createPortal)((0, t.jsxs)("div", { className: "container pointer-events-none fixed inset-0 z-[9999]", children: [(0, t.jsxs)("div", { ref: e2, className: "relative inset-0 grid h-full w-full border-red-500/70 border-r border-l", style: { gridTemplateColumns: "repeat(24, minmax(0, 1fr))" }, children: [d2, u2, l2] }), (0, t.jsx)("div", { ref: n2, className: "pointer-events-none fixed top-0 bottom-0 z-[9999] h-full w-px bg-red-500/70" }), (0, t.jsx)("div", { ref: a2, className: "pointer-events-none fixed right-0 left-0 z-[9999] h-px w-full bg-red-500/70" }), (0, t.jsx)("div", { ref: o2, className: "pointer-events-none fixed z-[10000] whitespace-nowrap font-mono text-red-500 text-xs tabular-nums" })] }), document.body);
  }
  let d = () => {
    let [e2, n2] = (0, r.useState)(false);
    return (0, r.useEffect)(() => {
      if (!e2) return;
      let t2 = (e3) => {
        "Escape" === e3.key && n2(false);
      };
      return window.addEventListener("keydown", t2), () => window.removeEventListener("keydown", t2);
    }, [e2]), (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("button", { type: "button", onClick: () => n2((e3) => !e3), "aria-pressed": e2, className: (0, i.cn)("flex h-7 cursor-pointer items-center rounded-md px-2.5 uppercase transition-colors duration-150", "focus-visible:outline-none", { "bg-white-100/15 text-primary-foreground shadow-[inset_0_0_0_1px_oklch(1_0_0_/_0.2)] hover:bg-white-100/20 focus-visible:bg-white-100/20": e2 }, { "text-secondary-foreground hover:bg-white-100/[0.06] hover:text-primary-foreground focus-visible:bg-white-100/[0.06] focus-visible:text-primary-foreground active:bg-white-100/[0.1]": !e2 }), children: "Grid" }), e2 && (0, t.jsx)(u, {})] });
  };
  try {
    var c = "u" > typeof window ? window : e.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s([], 712073), e.i(712073);
  var p = e.i(535896), g = e.i(872191), y = e.i(579180);
  try {
    var f = "u" > typeof window ? window : e.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let M = r.createContext(void 0);
  function w(e2) {
    let t2 = r.useContext(M);
    if (void 0 === t2 && !e2) throw Error((0, y.default)(47));
    return t2;
  }
  var h = e.i(939007), v = e.i(639306), x = e.i(550034), m = e.i(296232), _ = e.i(631457), b = e.i(136343), E = e.i(190433), S = e.i(521703), O = e.i(867383);
  try {
    var C = "u" > typeof window ? window : e.g;
    C._sentryModuleMetadata = C._sentryModuleMetadata || {}, C._sentryModuleMetadata[new C.Error().stack] = Object.assign({}, C._sentryModuleMetadata[new C.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let k = { ...E.popupStoreSelectors, disabled: (e2) => e2.disabled, instantType: (e2) => e2.instantType, openMethod: (e2) => e2.openMethod, openChangeReason: (e2) => e2.openChangeReason, modal: (e2) => e2.modal, focusManagerModal: (e2) => e2.focusManagerModal, stickIfOpen: (e2) => e2.stickIfOpen, titleElementId: (e2) => e2.titleElementId, descriptionElementId: (e2) => e2.descriptionElementId, openOnHover: (e2) => e2.openOnHover, closeDelay: (e2) => e2.closeDelay, adaptiveOrigin: (e2) => e2.adaptiveOrigin };
  class P extends h.ReactStore {
    constructor(e2, t2, r2) {
      const n2 = new S.PopupTriggerMap();
      super(j(e2, n2, t2, r2), R(n2), k);
    }
    setOpen = (e2, t2) => {
      let r2, n2 = t2.reason === m.REASONS.triggerHover, a2 = t2.reason === m.REASONS.triggerPress && 0 === t2.event.detail, o2 = !e2 && (t2.reason === m.REASONS.escapeKey || null == t2.reason), i2 = (0, b.attachPreventUnmountOnClose)(t2), l2 = this.select("activeTriggerId");
      if (e2 || t2.reason !== m.REASONS.closePress || null != t2.trigger || null == l2 || (t2.trigger = this.context.triggerElements.getById(l2) ?? this.select("activeTriggerElement") ?? void 0), this.context.onOpenChange?.(e2, t2), t2.isCanceled) return;
      this.state.floatingRootContext.dispatchOpenChange(e2, t2);
      let u2 = () => {
        let r3 = { open: e2, openChangeReason: t2.reason };
        (0, b.setPopupOpenState)(r3, e2, t2.trigger, i2()), this.update(r3);
      };
      n2 ? (this.set("stickIfOpen", true), this.context.stickIfOpenTimeout.start(O.PATIENT_CLICK_THRESHOLD, () => {
        this.set("stickIfOpen", false);
      }), s.flushSync(u2)) : u2(), a2 ? r2 = "click" : o2 ? r2 = "dismiss" : t2.reason === m.REASONS.focusOut && (r2 = "focus"), this.set("instantType", r2);
    };
  }
  function j(e2, t2, r2, n2 = false) {
    let a2 = { ...(0, E.createInitialPopupStoreState)(), disabled: false, modal: false, focusManagerModal: false, instantType: void 0, openMethod: null, openChangeReason: null, titleElementId: void 0, descriptionElementId: void 0, stickIfOpen: true, openOnHover: false, closeDelay: 0, adaptiveOrigin: void 0, ...e2 };
    return a2.open && e2?.mounted === void 0 && (a2.mounted = true), a2.floatingRootContext = (0, E.createPopupFloatingRootContext)(t2, r2, n2), a2;
  }
  function R(e2) {
    return { popupRef: r.createRef(), onOpenChange: void 0, onOpenChangeComplete: void 0, triggerFocusTargetRef: r.createRef(), beforeContentFocusGuardRef: r.createRef(), stickIfOpenTimeout: new v.Timeout(), triggerElements: e2 };
  }
  var A = e.i(930296);
  try {
    var T = "u" > typeof window ? window : e.g;
    T._sentryModuleMetadata = T._sentryModuleMetadata || {}, T._sentryModuleMetadata[new T.Error().stack] = Object.assign({}, T._sentryModuleMetadata[new T.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function I({ props: e2 }) {
    var n2;
    let a2, { children: o2, open: s2, defaultOpen: i2 = false, onOpenChange: l2, onOpenChangeComplete: u2, modal: d2 = false, handle: c2, triggerId: p2, defaultTriggerId: g2 = null } = e2, y2 = (n2 = { modal: d2, open: i2, openProp: s2, activeTriggerId: g2, triggerIdProp: p2 }, a2 = (0, b.usePopupRootStore)((e3, t2) => new P(n2, e3, t2)), r.useEffect(() => a2.context.stickIfOpenTimeout.disposeEffect(), [a2]), a2);
    y2.useControlledProp("openProp", s2), y2.useControlledProp("triggerIdProp", p2);
    let f2 = y2.useState("open"), w2 = y2.useState("mounted"), h2 = y2.useState("payload");
    y2.useContextCallback("onOpenChange", l2), y2.useContextCallback("onOpenChangeComplete", u2), (0, b.usePopupRootSync)(y2, f2), (0, b.useImplicitActiveTrigger)(y2);
    let { forceUnmount: v2 } = (0, b.useOpenStateTransitions)(f2, y2, () => {
      y2.update({ stickIfOpen: true, openChangeReason: null });
    });
    y2.useSyncedValues({ modal: d2 }), r.useEffect(() => {
      f2 || y2.context.stickIfOpenTimeout.clear();
    }, [y2, f2]), r.useImperativeHandle(e2.actionsRef, () => ({ unmount: v2, close: () => y2.setOpen(false, (0, A.createChangeEventDetails)(m.REASONS.imperativeAction)) }), [v2, y2]);
    let x2 = f2 || w2;
    return (0, t.jsxs)(M.Provider, { value: y2, children: [c2 && (0, t.jsx)(b.PopupHandleAttachment, { handle: c2, store: y2 }), x2 && (0, t.jsx)(N, { store: y2, modal: d2 }), "function" == typeof o2 ? o2({ payload: h2 }) : o2] });
  }
  function N({ store: e2, modal: t2 }) {
    let r2 = e2.useState("floatingRootContext"), n2 = (0, p.useDismiss)(r2, { outsidePressEvent: { mouse: "trap-focus" === t2 ? "sloppy" : "intentional", touch: "sloppy" } }), a2 = n2.reference, o2 = n2.floating;
    return (0, b.usePopupInteractionProps)(e2, { activeTriggerProps: a2, inactiveTriggerProps: a2, popupProps: o2 }), null;
  }
  var B = e.i(523237), F = e.i(573568), K = e.i(256777), L = e.i(581764), D = e.i(84588), H = e.i(243428);
  try {
    var V = "u" > typeof window ? window : e.g;
    V._sentryModuleMetadata = V._sentryModuleMetadata || {}, V._sentryModuleMetadata[new V.Error().stack] = Object.assign({}, V._sentryModuleMetadata[new V.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var G = e.i(145505), U = e.i(234091), z = e.i(610993), $ = e.i(818823), W = e.i(522353);
  try {
    var q = "u" > typeof window ? window : e.g;
    q._sentryModuleMetadata = q._sentryModuleMetadata || {}, q._sentryModuleMetadata[new q.Error().stack] = Object.assign({}, q._sentryModuleMetadata[new q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let Y = r.forwardRef(function(e2, n2) {
    let { render: a2, className: o2, style: s2, disabled: i2 = false, nativeButton: l2 = true, handle: u2, payload: d2, openOnHover: c2 = false, delay: p2 = 300, closeDelay: g2 = 0, id: f2, ...M2 } = e2, h2 = w(true), v2 = (0, z.usePopupHandleStore)(u2) ?? h2;
    if (!v2) throw Error((0, y.default)(74));
    let x2 = (0, G.useBaseUiId)(f2), _2 = v2.useState("isTriggerActive", x2), E2 = v2.useState("floatingRootContext"), S2 = v2.useState("isOpenedByTrigger", x2), C2 = v2.useState("triggerPopupId", x2), k2 = r.useRef(null), { registerTrigger: P2, isMountedByThisTrigger: j2 } = (0, b.useTriggerDataForwarding)(x2, k2, v2, { payload: d2, disabled: i2, openOnHover: c2, closeDelay: g2 }), R2 = v2.useState("openChangeReason"), A2 = v2.useState("stickIfOpen"), T2 = v2.useState("openMethod"), I2 = v2.useState("focusManagerModal"), N2 = (0, H.useHoverReferenceInteraction)(E2, { enabled: !i2 && c2 && ("touch" !== T2 || R2 !== m.REASONS.triggerPress), mouseOnly: true, move: false, handleClose: (0, L.safePolygon)(), restMs: p2, delay: { close: g2 }, triggerElementRef: k2, isActiveTrigger: _2, isClosing: () => "ending" === v2.select("transitionStatus") }), V2 = (0, D.useClick)(E2, { stickIfOpen: A2 }), q2 = (0, W.useOpenMethodTriggerProps)(() => v2.select("open"), (e3) => {
      v2.set("openMethod", e3);
    }), Y2 = v2.useState("triggerProps", j2), { getButtonProps: Z2, buttonRef: X2 } = (0, B.useButton)({ disabled: i2, native: l2 }), { preFocusGuardRef: J2, handlePreFocusGuardFocus: Q2, handleFocusTargetFocus: ee2 } = (0, $.useTriggerFocusGuards)(v2, k2), et2 = (0, K.useRenderElement)("button", e2, { state: { disabled: i2, open: S2 }, ref: [X2, n2, P2, k2], props: [V2.reference, N2, Y2, q2, { [O.CLICK_TRIGGER_IDENTIFIER]: "", id: x2, "aria-haspopup": "dialog", "aria-expanded": S2, "aria-controls": C2 }, M2, Z2], stateAttributesMapping: { open: (e3) => e3 && R2 === m.REASONS.triggerPress ? F.pressableTriggerOpenStateMapping.open(e3) : F.triggerOpenStateMapping.open(e3) } }), er2 = (0, t.jsx)(r.Fragment, { children: et2 }, x2);
    return j2 && !I2 ? (0, t.jsxs)(r.Fragment, { children: [(0, t.jsx)(U.FocusGuard, { ref: J2, onFocus: Q2 }), er2, (0, t.jsx)(U.FocusGuard, { ref: v2.context.triggerFocusTargetRef, onFocus: ee2 })] }) : er2;
  });
  var Z = e.i(801873);
  try {
    var X = "u" > typeof window ? window : e.g;
    X._sentryModuleMetadata = X._sentryModuleMetadata || {}, X._sentryModuleMetadata[new X.Error().stack] = Object.assign({}, X._sentryModuleMetadata[new X.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let J = r.createContext(void 0);
  try {
    var Q = "u" > typeof window ? window : e.g;
    Q._sentryModuleMetadata = Q._sentryModuleMetadata || {}, Q._sentryModuleMetadata[new Q.Error().stack] = Object.assign({}, Q._sentryModuleMetadata[new Q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let ee = r.forwardRef(function(e2, r2) {
    let { keepMounted: n2 = false, ...a2 } = e2;
    return w().useState("mounted") || n2 ? (0, t.jsx)(J.Provider, { value: n2, children: (0, t.jsx)(Z.FloatingPortal, { ref: r2, ...a2 }) }) : null;
  });
  var et = e.i(208169), er = e.i(599607);
  try {
    var en = "u" > typeof window ? window : e.g;
    en._sentryModuleMetadata = en._sentryModuleMetadata || {}, en._sentryModuleMetadata[new en.Error().stack] = Object.assign({}, en._sentryModuleMetadata[new en.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let ea = r.createContext(void 0);
  function eo() {
    let e2 = r.useContext(ea);
    if (!e2) throw Error((0, y.default)(46));
    return e2;
  }
  var es = e.i(247814), ei = e.i(60125), el = e.i(559631), eu = e.i(199848), ed = e.i(584844);
  try {
    var ec = "u" > typeof window ? window : e.g;
    ec._sentryModuleMetadata = ec._sentryModuleMetadata || {}, ec._sentryModuleMetadata[new ec.Error().stack] = Object.assign({}, ec._sentryModuleMetadata[new ec.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let ep = r.forwardRef(function(e2, n2) {
    let { render: a2, className: o2, style: s2, anchor: i2, positionMethod: l2, side: u2, align: d2, sideOffset: c2, alignOffset: p2, collisionBoundary: f2 = "clipping-ancestors", collisionPadding: M2, arrowPadding: h2, sticky: v2, disableAnchorTracking: x2 = false, collisionAvoidance: _2 = O.POPUP_COLLISION_AVOIDANCE, ...b2 } = e2, E2 = w(), S2 = (function() {
      let e3 = r.useContext(J);
      if (void 0 === e3) throw Error((0, y.default)(45));
      return e3;
    })(), C2 = (0, g.useFloatingNodeId)(), k2 = E2.useState("floatingRootContext"), P2 = E2.useState("mounted"), j2 = E2.useState("open"), R2 = E2.useState("openChangeReason"), A2 = E2.useState("activeTriggerElement"), T2 = E2.useState("modal"), I2 = E2.useState("openMethod"), N2 = E2.useState("positionerElement"), B2 = E2.useState("instantType"), F2 = E2.useState("transitionStatus"), K2 = E2.useState("adaptiveOrigin"), L2 = r.useRef(null), D2 = (0, el.useAnimationsFinished)(N2), H2 = (0, es.useAnchorPositioning)({ anchor: i2, floatingRootContext: k2, positionMethod: l2, mounted: P2, side: u2, sideOffset: c2, align: d2, alignOffset: p2, arrowPadding: h2, collisionBoundary: f2, collisionPadding: M2, sticky: v2, disableAnchorTracking: x2, keepMounted: S2, nodeId: C2, collisionAvoidance: _2, adaptiveOrigin: K2 }), V2 = k2.useState("domReferenceElement");
    (0, er.useIsoLayoutEffect)(() => {
      let e3 = L2.current;
      if (V2 && (L2.current = V2), e3 && V2 && V2 !== e3) {
        E2.set("instantType", void 0);
        let e4 = new AbortController();
        return D2(() => {
          E2.set("instantType", "trigger-change");
        }, e4.signal), () => {
          e4.abort();
        };
      }
    }, [V2, D2, E2]);
    let G2 = true === T2 && R2 !== m.REASONS.triggerHover;
    (0, ed.useAnchoredPopupScrollLock)(j2 && G2, "touch" === I2, N2, A2);
    let U2 = E2.useStateSetter("positionerElement"), z2 = { open: j2, side: H2.side, align: H2.align, anchorHidden: H2.anchorHidden, instant: B2 }, $2 = (0, eu.usePositioner)(e2, z2, { styles: H2.positionerStyles, transitionStatus: F2, props: b2, refs: [n2, U2], hidden: !P2, inert: !j2 });
    return (0, t.jsxs)(ea.Provider, { value: H2, children: [P2 && G2 && (0, t.jsx)(ei.InternalBackdrop, { inert: (0, et.inertValue)(!j2), cutout: A2 }), (0, t.jsx)(g.FloatingNode, { id: C2, children: $2 })] });
  });
  var eg = e.i(880269), ey = e.i(917976), ef = e.i(452341), eM = e.i(811336), ew = e.i(925202), eh = e.i(28365), ev = e.i(343990), ex = e.i(424404);
  try {
    var em = "u" > typeof window ? window : e.g;
    em._sentryModuleMetadata = em._sentryModuleMetadata || {}, em._sentryModuleMetadata[new em.Error().stack] = Object.assign({}, em._sentryModuleMetadata[new em.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let e_ = r.createContext(void 0);
  try {
    var eb = "u" > typeof window ? window : e.g;
    eb._sentryModuleMetadata = eb._sentryModuleMetadata || {}, eb._sentryModuleMetadata[new eb.Error().stack] = Object.assign({}, eb._sentryModuleMetadata[new eb.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let eE = r.forwardRef(function(e2, n2) {
    let { render: a2, className: o2, style: s2, initialFocus: i2, finalFocus: l2, ...u2 } = e2, d2 = w(), c2 = eo(), p2 = null != (0, eh.useToolbarRootContext)(true), { context: g2, hasClosePart: y2 } = (function() {
      let [e3, t2] = r.useState(0), n3 = (0, ex.useStableCallback)(() => (t2((e4) => e4 + 1), () => {
        t2((e4) => Math.max(0, e4 - 1));
      }));
      return { context: r.useMemo(() => ({ register: n3 }), [n3]), hasClosePart: e3 > 0 };
    })(), f2 = d2.useState("open"), M2 = d2.useState("openMethod"), h2 = d2.useState("instantType"), v2 = d2.useState("transitionStatus"), x2 = d2.useState("popupProps"), _2 = d2.useState("titleElementId"), E2 = d2.useState("descriptionElementId"), S2 = d2.useState("modal"), O2 = d2.useState("mounted"), C2 = d2.useState("openChangeReason"), k2 = d2.useState("activeTriggerElement"), P2 = d2.useState("floatingRootContext"), j2 = P2.useState("floatingId"), R2 = d2.useState("disabled"), A2 = d2.useState("openOnHover"), T2 = d2.useState("closeDelay");
    (0, eM.useOpenChangeComplete)({ open: f2, ref: d2.context.popupRef, onComplete() {
      f2 && d2.context.onOpenChangeComplete?.(true);
    } }), (0, ef.useHoverFloatingInteraction)(P2, { enabled: A2 && !R2, closeDelay: T2 });
    let I2 = void 0 === i2 ? (0, b.createDefaultInitialFocus)(d2.context.popupRef) : i2, N2 = false !== S2 && y2;
    d2.useSyncedValue("focusManagerModal", N2);
    let B2 = d2.useStateSetter("popupElement"), L2 = { open: f2, side: c2.side, align: c2.align, instant: h2, transitionStatus: v2 }, D2 = (0, K.useRenderElement)("div", e2, { state: L2, ref: [n2, d2.context.popupRef, B2], props: [x2, { id: j2, role: "dialog", ...b.FOCUSABLE_POPUP_PROPS, "aria-labelledby": _2, "aria-describedby": E2, onKeyDown(e3) {
      p2 && ew.COMPOSITE_KEYS.has(e3.key) && e3.stopPropagation();
    } }, (0, ev.getDisabledMountTransitionStyles)(v2), u2], stateAttributesMapping: F.popupTransitionStateMapping });
    return (0, t.jsx)(ey.FloatingFocusManager, { context: P2, openInteractionType: M2, modal: N2, disabled: !O2 || C2 === m.REASONS.triggerHover, initialFocus: I2, returnFocus: l2, restoreFocus: "popup", previousFocusableElement: (0, eg.isHTMLElement)(k2) ? k2 : void 0, nextFocusableElement: d2.context.triggerFocusTargetRef, beforeContentFocusGuardRef: d2.context.beforeContentFocusGuardRef, children: (0, t.jsx)(e_.Provider, { value: g2, children: D2 }) });
  });
  try {
    var eS = "u" > typeof window ? window : e.g;
    eS._sentryModuleMetadata = eS._sentryModuleMetadata || {}, eS._sentryModuleMetadata[new eS.Error().stack] = Object.assign({}, eS._sentryModuleMetadata[new eS.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let eO = r.forwardRef(function(e2, t2) {
    let { render: r2, className: n2, style: a2, ...o2 } = e2, s2 = w().useState("open"), { arrowRef: i2, side: l2, align: u2, arrowUncentered: d2, arrowStyles: c2 } = eo();
    return (0, K.useRenderElement)("div", e2, { state: { open: s2, side: l2, align: u2, uncentered: d2 }, ref: [t2, i2], props: [{ style: c2, "aria-hidden": true }, o2], stateAttributesMapping: F.popupStateMapping });
  });
  try {
    var eC = "u" > typeof window ? window : e.g;
    eC._sentryModuleMetadata = eC._sentryModuleMetadata || {}, eC._sentryModuleMetadata[new eC.Error().stack] = Object.assign({}, eC._sentryModuleMetadata[new eC.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let ek = r.forwardRef(function(e2, t2) {
    let { render: r2, className: n2, style: a2, ...o2 } = e2, s2 = w(), i2 = s2.useState("open"), l2 = s2.useState("mounted"), u2 = s2.useState("transitionStatus"), d2 = s2.useState("openChangeReason");
    return (0, K.useRenderElement)("div", e2, { state: { open: i2, transitionStatus: u2 }, ref: t2, props: [{ role: "presentation", hidden: !l2, style: { pointerEvents: d2 === m.REASONS.triggerHover ? "none" : void 0, userSelect: "none", WebkitUserSelect: "none" } }, o2], stateAttributesMapping: F.popupTransitionStateMapping });
  });
  try {
    var eP = "u" > typeof window ? window : e.g;
    eP._sentryModuleMetadata = eP._sentryModuleMetadata || {}, eP._sentryModuleMetadata[new eP.Error().stack] = Object.assign({}, eP._sentryModuleMetadata[new eP.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let ej = r.forwardRef(function(e2, t2) {
    let { render: r2, className: n2, style: a2, ...o2 } = e2, s2 = w(), i2 = (0, G.useBaseUiId)(o2.id);
    return s2.useSyncedValueWithCleanup("titleElementId", i2), (0, K.useRenderElement)("h2", e2, { ref: t2, props: [{ id: i2 }, o2] });
  });
  try {
    var eR = "u" > typeof window ? window : e.g;
    eR._sentryModuleMetadata = eR._sentryModuleMetadata || {}, eR._sentryModuleMetadata[new eR.Error().stack] = Object.assign({}, eR._sentryModuleMetadata[new eR.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let eA = r.forwardRef(function(e2, t2) {
    let { render: r2, className: n2, style: a2, ...o2 } = e2, s2 = w(), i2 = (0, G.useBaseUiId)(o2.id);
    return s2.useSyncedValueWithCleanup("descriptionElementId", i2), (0, K.useRenderElement)("p", e2, { ref: t2, props: [{ id: i2 }, o2] });
  });
  try {
    var eT = "u" > typeof window ? window : e.g;
    eT._sentryModuleMetadata = eT._sentryModuleMetadata || {}, eT._sentryModuleMetadata[new eT.Error().stack] = Object.assign({}, eT._sentryModuleMetadata[new eT.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let eI = r.forwardRef(function(e2, t2) {
    let n2, { render: a2, className: o2, style: s2, disabled: i2 = false, nativeButton: l2 = true, ...u2 } = e2, { buttonRef: d2, getButtonProps: c2 } = (0, B.useButton)({ disabled: i2, focusableWhenDisabled: false, native: l2 }), p2 = w();
    return n2 = r.useContext(e_), (0, er.useIsoLayoutEffect)(() => n2?.register(), [n2]), (0, K.useRenderElement)("button", e2, { ref: [t2, d2], props: [{ onClick(e3) {
      p2.setOpen(false, (0, A.createChangeEventDetails)(m.REASONS.closePress, e3.nativeEvent));
    } }, u2, c2] });
  });
  var eN = e.i(233514);
  try {
    var eB = "u" > typeof window ? window : e.g;
    eB._sentryModuleMetadata = eB._sentryModuleMetadata || {}, eB._sentryModuleMetadata[new eB.Error().stack] = Object.assign({}, eB._sentryModuleMetadata[new eB.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let eF = r.forwardRef(function(e2, t2) {
    let { render: r2, className: n2, style: a2, children: o2, ...s2 } = e2, i2 = w(), { side: l2 } = eo(), u2 = i2.useState("instantType"), { children: d2, state: c2 } = (0, eN.usePopupViewport)({ store: i2, side: l2, children: o2 }), p2 = { activationDirection: c2.activationDirection, transitioning: c2.transitioning, instant: u2 };
    return (0, K.useRenderElement)("div", e2, { state: p2, ref: t2, props: [s2, { children: d2 }], stateAttributesMapping: eN.popupViewportStateMapping });
  });
  var eK = e.i(285630);
  try {
    var eL = "u" > typeof window ? window : e.g;
    eL._sentryModuleMetadata = eL._sentryModuleMetadata || {}, eL._sentryModuleMetadata[new eL.Error().stack] = Object.assign({}, eL._sentryModuleMetadata[new eL.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class eD extends eK.BasePopupHandle {
    constructor() {
      super((function() {
        let e2 = new S.PopupTriggerMap();
        return Object.assign(new _.NullStore(Object.freeze(j(void 0, e2)), Object.freeze(R(e2)), k), { setOpen: x.NOOP });
      })(), "Popover");
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
  e.s(["Arrow", 0, eO, "Backdrop", 0, ek, "Close", 0, eI, "Description", 0, eA, "Handle", 0, eD, "Popup", 0, eE, "Portal", 0, ee, "Positioner", 0, ep, "Root", 0, function(e2) {
    return w(true) ? (0, t.jsx)(I, { props: e2 }) : (0, t.jsx)(g.FloatingTree, { children: (0, t.jsx)(I, { props: e2 }) });
  }, "Title", 0, ej, "Trigger", 0, Y, "Viewport", 0, eF, "createHandle", 0, function() {
    return new eD();
  }], 379766);
  var eH = e.i(379766), eH = eH, eV = e.i(224253), eG = e.i(167815);
  try {
    var eU = window;
    eU._sentryModuleMetadata = eU._sentryModuleMetadata || {}, eU._sentryModuleMetadata[new eU.Error().stack] = Object.assign({}, eU._sentryModuleMetadata[new eU.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let ez = [{ href: "/internal/error-pages", label: "Error pages" }, { href: "/internal/logo-balancer", label: "Logo balancer" }, { href: "/internal/og-preview", label: "OG preview" }, { href: "/shelves", label: "Shelves" }], e$ = () => {
    let [e2, n2] = (0, r.useState)(false);
    return (0, t.jsxs)(eH.Root, { onOpenChange: n2, open: e2, children: [(0, t.jsx)(eH.Trigger, { className: (0, i.cn)("flex h-7 cursor-pointer items-center rounded-md px-2.5 uppercase transition-colors duration-150", "focus-visible:outline-none", "text-secondary-foreground hover:bg-white-100/[0.06] hover:text-primary-foreground", "focus-visible:bg-white-100/[0.06] focus-visible:text-primary-foreground active:bg-white-100/[0.1]", "data-popup-open:bg-white-100/15 data-popup-open:text-primary-foreground", "data-popup-open:shadow-[inset_0_0_0_1px_oklch(1_0_0_/_0.2)]"), children: "Tools" }), (0, t.jsx)(eH.Portal, { children: (0, t.jsx)(eH.Positioner, { align: "end", className: "z-(--context-menu-portal-z-index)", side: "bottom", sideOffset: 8, children: (0, t.jsx)(eH.Popup, { className: "flex min-w-44 flex-col gap-px rounded-xl bg-white-100 p-1", style: { boxShadow: "0px 0px 0px 1px oklch(0 0 0 / 0.1),0px 1px 2px 0px oklch(0 0 0 / 0.01),0px 2px 4px -1px oklch(0 0 0 / 0.02),0px 4px 8px -2px oklch(0 0 0 / 0.03),0px 8px 16px -4px oklch(0 0 0 / 0.04),0px 16px 32px -8px oklch(0 0 0 / 0.05)" }, children: ez.map((e3) => (0, t.jsx)(eG.Button, { asChild: true, className: "h-8 justify-start rounded-lg", size: "sm", variant: "ghost", children: (0, t.jsx)(eV.default, { href: e3.href, onClick: () => n2(false), children: e3.label }) }, e3.href)) }) }) })] });
  };
  var eW = e.i(397441);
  try {
    var eq = window;
    eq._sentryModuleMetadata = eq._sentryModuleMetadata || {}, eq._sentryModuleMetadata[new eq.Error().stack] = Object.assign({}, eq._sentryModuleMetadata[new eq.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["PolarisToolbarClient", 0, ({ draftMode: e2 }) => {
    let [a2, s2] = (0, r.useState)(true), [l2, u2] = (0, r.useState)(false);
    return ((0, r.useEffect)(() => {
      u2(window !== window.parent);
    }, []), (0, r.useEffect)(() => {
      let e3 = (e4) => {
        "a" === e4.key && e4.metaKey && e4.shiftKey && s2((e5) => !e5);
      };
      return window.addEventListener("keydown", e3), () => window.removeEventListener("keydown", e3);
    }, []), (0, r.useLayoutEffect)(() => (a2 && !l2 ? document.documentElement.setAttribute("data-polaris-toolbar-visible", "true") : document.documentElement.removeAttribute("data-polaris-toolbar-visible"), () => {
      document.documentElement.removeAttribute("data-polaris-toolbar-visible");
    }), [a2, l2]), !a2 || l2) ? null : (0, t.jsxs)("div", { className: (0, i.cn)("dark relative isolate flex h-9 w-full bg-(--color-banner-background) font-mono text-[10px] text-primary-foreground uppercase leading-none tracking-[0.12em] shadow-[inset_0_-1px_0_oklch(1_0_0_/_0.2)]"), "data-visual-test": "removed", children: [(0, t.jsx)(n.AttioHatch, { "aria-hidden": "true", className: "pointer-events-none absolute inset-0 text-white-100/10" }), (0, t.jsxs)("div", { className: "container relative flex h-full items-center justify-between lg:grid lg:grid-cols-3", children: [(0, t.jsx)("div", { className: "flex h-full items-center justify-start", children: e2 }), (0, t.jsx)("div", { className: "hidden h-full items-center justify-center text-secondary-foreground lg:flex", children: "\u2014 Internal Preview \u2014" }), (0, t.jsxs)("div", { className: "flex h-full items-center justify-end gap-3", children: [(0, t.jsx)(e$, {}), (0, t.jsx)(d, {}), (0, t.jsx)(o, {}), (0, t.jsx)(eG.Button, { variant: "outline", size: "xsSquare", onClick: () => s2(false), "aria-label": "Dismiss preview toolbar", className: (0, i.cn)("!bg-transparent !border-transparent", "hover:!border-tertiary-foreground"), children: (0, t.jsx)(eW.Cross18, { className: "text-tertiary-foreground" }) })] })] })] });
  }], 362220);
}]);
