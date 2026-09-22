;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "18ba1de2-71b3-9623-274a-56d9392d0a54");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 486492, (e) => {
  "use strict";
  var t = e.i(550034), r = e.i(256777), n = e.i(856757), a = e.i(548302), o = e.i(322042), s = e.i(599858);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var l = "u" > typeof window ? window : e.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["CompositeItem", 0, function(e2) {
    let { render: i2, className: l2, style: u, state: d = t.EMPTY_OBJECT, props: c = t.EMPTY_ARRAY, refs: p = t.EMPTY_ARRAY, metadata: y, stateAttributesMapping: g, tag: f = "div", ...M } = e2, { compositeProps: h, compositeRef: w } = (function(e3 = {}) {
      let { highlightItemOnHover: t2, highlightedIndex: r2, onHighlightedIndexChange: i3 } = (0, o.useCompositeRootContext)(), { ref: l3, index: u2 } = (0, s.useCompositeListItem)(e3), d2 = r2 === u2, c2 = n.useRef(null), p2 = (0, a.useMergedRefs)(l3, c2);
      return { compositeProps: { tabIndex: d2 ? 0 : -1, onFocus() {
        i3(u2);
      }, onMouseMove() {
        let e4 = c2.current;
        if (!t2 || !e4) return;
        let r3 = e4.hasAttribute("disabled") || "true" === e4.ariaDisabled;
        d2 || r3 || e4.focus();
      } }, compositeRef: p2, index: u2 };
    })({ metadata: y });
    return (0, r.useRenderElement)(f, e2, { state: d, ref: [w, ...p], props: [h, ...c, M], stateAttributesMapping: g });
  }], 486492);
}, 538507, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757), n = e.i(508324), a = e.i(167815), o = e.i(194510), s = e.i(397441), i = e.i(145408), l = e.i(551360);
  try {
    var u = window;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["SiteBanner", 0, function({ blok: e2 }) {
    let [u2, d] = (0, r.useState)(false), c = (0, i.getValidStoryblokLinkProps)(e2.link[0]?.link);
    function p() {
      d(true), localStorage.setItem("attio-site-banner-dismissal", JSON.stringify({ uid: e2._uid, until: Date.now() + 432e6 }));
    }
    return !c || u2 ? null : (0, t.jsx)("div", { "data-banner-uid": e2._uid, className: (0, l.cn)("site-banner", "dark isolate flex h-(--site-header-banner-visible-height) w-full items-center justify-center bg-(--color-banner-background)"), style: { boxShadow: "0px 1px 2px 0px oklch(0 0 0 / 0.01),0px 2px 4px -1px oklch(0 0 0 / 0.02),0px 4px 8px -2px oklch(0 0 0 / 0.03)" }, children: (0, t.jsx)("div", { className: "container flex h-full items-center justify-center", children: (0, t.jsxs)("div", { className: (0, l.cn)("relative flex size-full items-stretch justify-center px-12", "max-md:justify-start max-md:pl-0"), children: [(0, t.jsxs)(n.AttioLink, { className: (0, l.cn)("group relative flex size-full items-center justify-center gap-1.5 text-primary-foreground max-md:justify-start"), ...c, onClick: p, children: [(0, t.jsx)("span", { className: (0, l.cn)("attio-group-hover-underline relative truncate text-[13px]/5"), children: e2.title }), " ", (0, t.jsx)(o.ArrowRight14, { className: (0, l.cn)("transition-[translate] duration-400 ease-in-out", "group-hover:translate-x-0.25 group-hover:duration-150", "group-active:translate-x-0.25 group-active:duration-50", "motion-reduce:transition-none", "motion-reduce:group-active:translate-x-0 motion-reduce:group-hover:translate-x-0") })] }), (0, t.jsx)(a.Button, { variant: "outline", size: "xsSquare", onClick: p, "aria-label": "Dismiss banner", className: (0, l.cn)("!bg-transparent !border-transparent dark absolute top-1/2 right-0 -translate-y-1/2", "hover:!border-tertiary-foreground"), children: (0, t.jsx)(s.Cross18, { className: "text-tertiary-foreground" }) })] }) }) });
  }]);
}, 209404, (e) => {
  "use strict";
  var t, r = e.i(68982);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  e.s([], 488904), e.i(488904);
  var a = e.i(856757), o = e.i(497073), s = e.i(579180);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let l = a.createContext(void 0);
  function u(e10 = true) {
    let t10 = a.useContext(l);
    if (void 0 === t10 && !e10) throw Error((0, s.default)(25));
    return t10;
  }
  try {
    var d = "u" > typeof window ? window : e.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  e.s([], 946130), e.i(946130);
  try {
    var c = "u" > typeof window ? window : e.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let p = a.createContext(void 0);
  function y(e10) {
    let t10 = a.useContext(p);
    if (void 0 === t10 && !e10) throw Error((0, s.default)(33));
    return t10;
  }
  try {
    var g = "u" > typeof window ? window : e.g;
    g._sentryModuleMetadata = g._sentryModuleMetadata || {}, g._sentryModuleMetadata[new g.Error().stack] = Object.assign({}, g._sentryModuleMetadata[new g.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let f = a.createContext(void 0);
  function M(e10) {
    let t10 = a.useContext(f);
    if (void 0 === t10 && !e10) throw Error((0, s.default)(36));
    return t10;
  }
  var h = e.i(256777), w = e.i(573568);
  try {
    var v = "u" > typeof window ? window : e.g;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let m = a.forwardRef(function(e10, t10) {
    let { render: r2, className: n2, style: a2, ...o2 } = e10, { store: s2 } = M(), { arrowRef: i2, side: l2, align: u2, arrowUncentered: d2, arrowStyles: c2 } = y(), p2 = s2.useState("open");
    return (0, h.useRenderElement)("div", e10, { ref: [i2, t10], stateAttributesMapping: w.popupStateMapping, state: { open: p2, side: l2, align: u2, uncentered: d2 }, props: { style: c2, "aria-hidden": true, ...o2 } });
  });
  var _ = e.i(296232);
  try {
    var x = "u" > typeof window ? window : e.g;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let b = a.forwardRef(function(e10, t10) {
    let { render: r2, className: n2, style: a2, ...o2 } = e10, { store: s2 } = M(), i2 = s2.useState("open"), l2 = s2.useState("mounted"), d2 = s2.useState("transitionStatus"), c2 = s2.useState("lastOpenChangeReason"), p2 = u();
    return (0, h.useRenderElement)("div", e10, { ref: p2?.backdropRef ? [t10, p2.backdropRef] : t10, state: { open: i2, transitionStatus: d2 }, stateAttributesMapping: w.popupTransitionStateMapping, props: [{ role: "presentation", hidden: !l2, style: { pointerEvents: c2 === _.REASONS.triggerHover ? "none" : void 0, userSelect: "none", WebkitUserSelect: "none" } }, o2] });
  });
  var E = e.i(620715), k = e.i(550034);
  try {
    var R = "u" > typeof window ? window : e.g;
    R._sentryModuleMetadata = R._sentryModuleMetadata || {}, R._sentryModuleMetadata[new R.Error().stack] = Object.assign({}, R._sentryModuleMetadata[new R.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let S = a.createContext(void 0);
  var O = e.i(548302), P = e.i(523237), C = e.i(441833), A = e.i(553254), j = e.i(222451);
  try {
    var I = "u" > typeof window ? window : e.g;
    I._sentryModuleMetadata = I._sentryModuleMetadata || {}, I._sentryModuleMetadata[new I.Error().stack] = Object.assign({}, I._sentryModuleMetadata[new I.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function T(e10) {
    let { closeOnClick: t10, highlighted: r2, id: n2, nodeId: o2, store: s2, typingRef: i2, itemRef: l2, itemMetadata: d2 } = e10, { events: c2 } = s2.useState("floatingTreeRoot"), p2 = s2.useState("open"), y2 = u(true), g2 = void 0 !== y2;
    return a.useMemo(() => ({ id: n2, role: "menuitem", tabIndex: p2 && r2 ? 0 : -1, onKeyDown(e11) {
      " " === e11.key && i2?.current && e11.preventDefault();
    }, onMouseMove(e11) {
      o2 && c2.emit("itemhover", { nodeId: o2, target: e11.currentTarget });
    }, onClick(e11) {
      t10 && c2.emit("close", { domEvent: e11, reason: _.REASONS.itemPress });
    }, onMouseUp(e11) {
      if (y2) {
        let t11 = y2.initialCursorPointRef.current;
        if (y2.initialCursorPointRef.current = null, g2 && t11 && 1 >= Math.abs(e11.clientX - t11.x) && 1 >= Math.abs(e11.clientY - t11.y) || g2 && !A.platform.os.mac && 2 === e11.button) return;
      }
      l2.current && s2.context.allowMouseUpTriggerRef.current && (!g2 || 2 === e11.button) && "regular-item" === d2.type && (0, j.dispatchClickWithModifiers)(l2.current, e11, { detail: 1 });
    } }), [t10, r2, n2, c2, o2, p2, s2, i2, l2, y2, g2, d2]);
  }
  try {
    var N = "u" > typeof window ? window : e.g;
    N._sentryModuleMetadata = N._sentryModuleMetadata || {}, N._sentryModuleMetadata[new N.Error().stack] = Object.assign({}, N._sentryModuleMetadata[new N.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let B = { type: "regular-item" };
  function L(e10) {
    let { closeOnClick: t10, disabled: r2, highlighted: n2, id: o2, store: s2, typingRef: i2 = s2.context.typingRef, nativeButton: l2, itemMetadata: u2, nodeId: d2 } = e10, c2 = a.useRef(null), { getButtonProps: p2, buttonRef: y2 } = (0, P.useButton)({ disabled: r2, focusableWhenDisabled: true, native: l2, composite: true }), g2 = T({ closeOnClick: t10, highlighted: n2, id: o2, nodeId: d2, store: s2, typingRef: i2, itemRef: c2, itemMetadata: u2 }), f2 = a.useCallback((e11) => (0, C.mergeProps)(g2, { onMouseEnter() {
      "submenu-trigger" === u2.type && u2.setActive();
    } }, e11, p2), [g2, p2, u2]), M2 = (0, O.useMergedRefs)(c2, y2);
    return a.useMemo(() => ({ getItemProps: f2, itemRef: M2 }), [f2, M2]);
  }
  var D = e.i(599858), K = e.i(145505), H = e.i(618545);
  try {
    var F = "u" > typeof window ? window : e.g;
    F._sentryModuleMetadata = F._sentryModuleMetadata || {}, F._sentryModuleMetadata[new F.Error().stack] = Object.assign({}, F._sentryModuleMetadata[new F.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let W = ((t = {}).checked = "data-checked", t.unchecked = "data-unchecked", t.disabled = "data-disabled", t.highlighted = "data-highlighted", t);
  try {
    var V = "u" > typeof window ? window : e.g;
    V._sentryModuleMetadata = V._sentryModuleMetadata || {}, V._sentryModuleMetadata[new V.Error().stack] = Object.assign({}, V._sentryModuleMetadata[new V.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let z = { checked: (e10) => e10 ? { [W.checked]: "" } : { [W.unchecked]: "" }, ...H.transitionStatusMapping };
  var U = e.i(930296);
  try {
    var Y = "u" > typeof window ? window : e.g;
    Y._sentryModuleMetadata = Y._sentryModuleMetadata || {}, Y._sentryModuleMetadata[new Y.Error().stack] = Object.assign({}, Y._sentryModuleMetadata[new Y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let G = a.forwardRef(function(e10, t10) {
    let { render: n2, className: o2, id: s2, label: i2, nativeButton: l2 = false, disabled: u2 = false, closeOnClick: d2 = false, checked: c2, defaultChecked: p2, onCheckedChange: g2, style: f2, ...w2 } = e10, v2 = (0, D.useCompositeListItem)({ guess: true, label: i2 }), m2 = y(true), x2 = (0, K.useBaseUiId)(s2), { store: b2 } = M(), R2 = b2.useState("disabled"), O2 = u2 || R2, P2 = b2.useState("isActive", v2.index), C2 = b2.useState("itemProps"), [A2, j2] = (0, E.useControlled)({ controlled: c2, default: p2 ?? false, name: "MenuCheckboxItem", state: "checked" }), { getItemProps: I2, itemRef: T2 } = L({ closeOnClick: d2, disabled: O2, highlighted: P2, id: x2, store: b2, nativeButton: l2, nodeId: m2?.context.nodeId, itemMetadata: B }), N2 = a.useMemo(() => ({ disabled: O2, highlighted: P2, checked: A2 }), [O2, P2, A2]), H2 = (0, h.useRenderElement)("div", e10, { state: N2, stateAttributesMapping: z, props: [C2, { role: "menuitemcheckbox", "aria-checked": A2, onClick: function(e11) {
      let t11 = (0, U.createChangeEventDetails)(_.REASONS.itemPress, e11.nativeEvent, void 0, { preventUnmountOnClose: k.NOOP });
      g2?.(!A2, t11), t11.isCanceled || j2((e12) => !e12);
    } }, w2, I2], ref: [T2, t10, v2.ref] });
    return (0, r.jsx)(S.Provider, { value: N2, children: H2 });
  });
  var $ = e.i(616318), q = e.i(811336);
  try {
    var J = "u" > typeof window ? window : e.g;
    J._sentryModuleMetadata = J._sentryModuleMetadata || {}, J._sentryModuleMetadata[new J.Error().stack] = Object.assign({}, J._sentryModuleMetadata[new J.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let X = a.forwardRef(function(e10, t10) {
    let { render: r2, className: n2, style: o2, keepMounted: i2 = false, ...l2 } = e10, u2 = (function() {
      let e11 = a.useContext(S);
      if (void 0 === e11) throw Error((0, s.default)(30));
      return e11;
    })(), d2 = a.useRef(null), { transitionStatus: c2, mounted: p2, setMounted: y2 } = (0, $.useTransitionStatus)(u2.checked);
    (0, q.useOpenChangeComplete)({ open: u2.checked, ref: d2, onComplete() {
      u2.checked || y2(false);
    } });
    let g2 = { checked: u2.checked, disabled: u2.disabled, highlighted: u2.highlighted, transitionStatus: c2 };
    return (0, h.useRenderElement)("span", e10, { state: g2, ref: [t10, d2], stateAttributesMapping: z, props: { "aria-hidden": true, ...l2 }, enabled: i2 || p2 });
  });
  try {
    var Q = "u" > typeof window ? window : e.g;
    Q._sentryModuleMetadata = Q._sentryModuleMetadata || {}, Q._sentryModuleMetadata[new Q.Error().stack] = Object.assign({}, Q._sentryModuleMetadata[new Q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let Z = a.createContext(void 0);
  try {
    var ee = "u" > typeof window ? window : e.g;
    ee._sentryModuleMetadata = ee._sentryModuleMetadata || {}, ee._sentryModuleMetadata[new ee.Error().stack] = Object.assign({}, ee._sentryModuleMetadata[new ee.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let et = a.forwardRef(function(e10, t10) {
    let { render: n2, className: o2, style: s2, ...i2 } = e10, [l2, u2] = a.useState(void 0), d2 = (0, h.useRenderElement)("div", e10, { ref: t10, props: { role: "group", "aria-labelledby": l2, ...i2 } });
    return (0, r.jsx)(Z.Provider, { value: u2, children: d2 });
  });
  var er = e.i(599607);
  try {
    var en = "u" > typeof window ? window : e.g;
    en._sentryModuleMetadata = en._sentryModuleMetadata || {}, en._sentryModuleMetadata[new en.Error().stack] = Object.assign({}, en._sentryModuleMetadata[new en.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ea = a.forwardRef(function(e10, t10) {
    let { render: r2, className: n2, style: o2, id: i2, ...l2 } = e10, u2 = (0, K.useBaseUiId)(i2), d2 = (function() {
      let e11 = a.useContext(Z);
      if (void 0 === e11) throw Error((0, s.default)(31));
      return e11;
    })();
    return (0, er.useIsoLayoutEffect)(() => (d2(u2), () => {
      d2((e11) => e11 === u2 ? void 0 : e11);
    }), [d2, u2]), (0, h.useRenderElement)("div", e10, { ref: t10, props: { id: u2, role: "presentation", ...l2 } });
  });
  try {
    var eo = "u" > typeof window ? window : e.g;
    eo._sentryModuleMetadata = eo._sentryModuleMetadata || {}, eo._sentryModuleMetadata[new eo.Error().stack] = Object.assign({}, eo._sentryModuleMetadata[new eo.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let es = a.forwardRef(function(e10, t10) {
    let { render: r2, className: n2, id: a2, label: o2, nativeButton: s2 = false, disabled: i2 = false, closeOnClick: l2 = true, style: u2, ...d2 } = e10, c2 = (0, D.useCompositeListItem)({ guess: true, label: o2 }), p2 = y(true), g2 = (0, K.useBaseUiId)(a2), { store: f2 } = M(), w2 = f2.useState("disabled"), v2 = i2 || w2, m2 = f2.useState("isActive", c2.index), _2 = f2.useState("itemProps"), { getItemProps: x2, itemRef: b2 } = L({ closeOnClick: l2, disabled: v2, highlighted: m2, id: g2, store: f2, nativeButton: s2, nodeId: p2?.context.nodeId, itemMetadata: B });
    return (0, h.useRenderElement)("div", e10, { state: { disabled: v2, highlighted: m2 }, props: [_2, d2, x2], ref: [b2, t10, c2.ref] });
  });
  try {
    var ei = "u" > typeof window ? window : e.g;
    ei._sentryModuleMetadata = ei._sentryModuleMetadata || {}, ei._sentryModuleMetadata[new ei.Error().stack] = Object.assign({}, ei._sentryModuleMetadata[new ei.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let el = a.forwardRef(function(e10, t10) {
    let { render: r2, className: n2, id: o2, label: s2, closeOnClick: i2 = false, style: l2, ...u2 } = e10, d2 = a.useRef(null), c2 = (0, D.useCompositeListItem)({ guess: true, label: s2 }), p2 = y(true), g2 = p2?.context.nodeId, f2 = (0, K.useBaseUiId)(o2), { store: w2 } = M(), v2 = w2.useState("isActive", c2.index), m2 = w2.useState("itemProps"), _2 = w2.context.typingRef, { getButtonProps: x2, buttonRef: b2 } = (0, P.useButton)({ native: false, composite: true }), E2 = T({ closeOnClick: i2, highlighted: v2, id: f2, nodeId: g2, store: w2, typingRef: _2, itemRef: d2, itemMetadata: B });
    return (0, h.useRenderElement)("a", e10, { state: { highlighted: v2 }, props: [m2, u2, function(e11) {
      return (0, C.mergeProps)(E2, e11, x2);
    }], ref: [d2, b2, t10, c2.ref] });
  });
  var eu = e.i(917976), ed = e.i(452341), ec = e.i(28365), ep = e.i(925202), ey = e.i(343990);
  try {
    var eg = "u" > typeof window ? window : e.g;
    eg._sentryModuleMetadata = eg._sentryModuleMetadata || {}, eg._sentryModuleMetadata[new eg.Error().stack] = Object.assign({}, eg._sentryModuleMetadata[new eg.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ef = a.forwardRef(function(e10, t10) {
    let { render: n2, className: o2, style: s2, finalFocus: i2, ...l2 } = e10, { store: u2 } = M(), { side: d2, align: c2 } = y(), p2 = null != (0, ec.useToolbarRootContext)(true), g2 = u2.useState("open"), f2 = u2.useState("transitionStatus"), v2 = u2.useState("popupProps"), m2 = u2.useState("mounted"), x2 = u2.useState("instantType"), b2 = u2.useState("activeTriggerElement"), E2 = u2.useState("parent"), k2 = u2.useState("lastOpenChangeReason"), R2 = u2.useState("rootId"), S2 = u2.useState("floatingRootContext"), O2 = u2.useState("floatingTreeRoot"), P2 = u2.useState("closeDelay"), C2 = u2.useState("hoverEnabled"), A2 = u2.useState("disabled"), j2 = u2.useState("openMethod"), I2 = "context-menu" === E2.type;
    (0, q.useOpenChangeComplete)({ open: g2, ref: u2.context.popupRef, onComplete() {
      g2 && u2.context.onOpenChangeComplete?.(true);
    } }), a.useEffect(() => {
      function e11(e12) {
        u2.setOpen(false, (0, U.createChangeEventDetails)(e12.reason, e12.domEvent));
      }
      return O2.events.on("close", e11), () => {
        O2.events.off("close", e11);
      };
    }, [O2.events, u2]), (0, ed.useHoverFloatingInteraction)(S2, { enabled: C2 && !A2 && !I2 && "menubar" !== E2.type, closeDelay: P2 });
    let T2 = u2.useStateSetter("popupElement"), N2 = { transitionStatus: f2, side: d2, align: c2, open: g2, nested: "menu" === E2.type, instant: x2 }, B2 = (0, h.useRenderElement)("div", e10, { state: N2, ref: [t10, u2.context.popupRef, T2], stateAttributesMapping: w.popupTransitionStateMapping, props: [v2, { onKeyDown(e11) {
      p2 && ep.COMPOSITE_KEYS.has(e11.key) && e11.stopPropagation();
    } }, (0, ey.getDisabledMountTransitionStyles)(f2), l2, { "data-rootownerid": R2 }] }), L2 = void 0 === E2.type || I2;
    return (b2 || "menubar" === E2.type && k2 !== _.REASONS.outsidePress) && (L2 = true), (0, r.jsx)(eu.FloatingFocusManager, { context: S2, openInteractionType: j2, modal: I2, disabled: !m2, returnFocus: void 0 === i2 ? L2 : i2, initialFocus: "menu" !== E2.type, restoreFocus: true, externalTree: "menubar" !== E2.type ? O2 : void 0, previousFocusableElement: b2, nextFocusableElement: void 0 === E2.type ? u2.context.triggerFocusTargetRef : void 0, beforeContentFocusGuardRef: void 0 === E2.type ? u2.context.beforeContentFocusGuardRef : void 0, children: B2 });
  });
  var eM = e.i(801873);
  try {
    var eh = "u" > typeof window ? window : e.g;
    eh._sentryModuleMetadata = eh._sentryModuleMetadata || {}, eh._sentryModuleMetadata[new eh.Error().stack] = Object.assign({}, eh._sentryModuleMetadata[new eh.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ew = a.createContext(void 0);
  try {
    var ev = "u" > typeof window ? window : e.g;
    ev._sentryModuleMetadata = ev._sentryModuleMetadata || {}, ev._sentryModuleMetadata[new ev.Error().stack] = Object.assign({}, ev._sentryModuleMetadata[new ev.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let em = a.forwardRef(function(e10, t10) {
    let { keepMounted: n2 = false, ...a2 } = e10, { store: o2 } = M();
    return o2.useState("mounted") || n2 ? (0, r.jsx)(ew.Provider, { value: n2, children: (0, r.jsx)(eM.FloatingPortal, { ref: t10, ...a2 }) }) : null;
  });
  var e_ = e.i(208169), ex = e.i(639306), eb = e.i(872191), eE = e.i(247814), ek = e.i(594553), eR = e.i(60125), eS = e.i(867383), eO = e.i(559631), eP = e.i(199848), eC = e.i(584844);
  try {
    var eA = "u" > typeof window ? window : e.g;
    eA._sentryModuleMetadata = eA._sentryModuleMetadata || {}, eA._sentryModuleMetadata[new eA.Error().stack] = Object.assign({}, eA._sentryModuleMetadata[new eA.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ej = a.forwardRef(function(e10, t10) {
    let { anchor: n2, positionMethod: o2 = "absolute", className: i2, render: l2, side: d2, align: c2, sideOffset: y2 = 0, alignOffset: g2 = 0, collisionBoundary: f2 = "clipping-ancestors", collisionPadding: h2 = 5, arrowPadding: w2 = 5, sticky: v2 = false, disableAnchorTracking: m2 = false, collisionAvoidance: x2 = eS.DROPDOWN_COLLISION_AVOIDANCE, style: b2, ...E2 } = e10, { store: k2 } = M(), R2 = (function() {
      let e11 = a.useContext(ew);
      if (void 0 === e11) throw Error((0, s.default)(32));
      return e11;
    })(), S2 = u(true), O2 = k2.useState("parent"), P2 = k2.useState("floatingRootContext"), C2 = k2.useState("floatingTreeRoot"), A2 = k2.useState("mounted"), j2 = k2.useState("open"), I2 = k2.useState("modal"), T2 = k2.useState("openMethod"), N2 = k2.useState("activeTriggerElement"), B2 = k2.useState("transitionStatus"), L2 = k2.useState("positionerElement"), D2 = k2.useState("instantType"), K2 = k2.useState("adaptiveOrigin"), H2 = k2.useState("lastOpenChangeReason"), F2 = k2.useState("floatingNodeId"), W2 = k2.useState("floatingParentNodeId"), V2 = P2.useState("domReferenceElement"), z2 = a.useRef(null), Y2 = (0, eO.useAnimationsFinished)(L2), G2 = n2, $2 = y2, q2 = g2, J2 = c2, X2 = x2;
    "context-menu" === O2.type && (G2 = n2 ?? O2.context?.anchor, J2 = J2 ?? "start", d2 || "center" === J2 || (q2 = e10.alignOffset ?? 2, $2 = e10.sideOffset ?? -5));
    let Q2 = d2, Z2 = J2;
    "menu" === O2.type ? (Q2 = Q2 ?? "inline-end", Z2 = Z2 ?? "start", X2 = e10.collisionAvoidance ?? eS.POPUP_COLLISION_AVOIDANCE) : "menubar" === O2.type && (Q2 = Q2 ?? ("vertical" === O2.context.orientation ? "inline-end" : "bottom"), Z2 = Z2 ?? "start");
    let ee2 = "context-menu" === O2.type, et2 = (0, eE.useAnchorPositioning)({ anchor: G2, floatingRootContext: P2, positionMethod: S2 ? "fixed" : o2, mounted: A2, side: Q2, sideOffset: $2, align: Z2, alignOffset: q2, arrowPadding: ee2 ? 0 : w2, collisionBoundary: f2, collisionPadding: h2, sticky: v2, nodeId: F2, keepMounted: R2, disableAnchorTracking: m2, collisionAvoidance: X2, shift: ee2 ? { crossAxis: !("side" in X2 && "flip" === X2.side), rootBoundary: "layoutViewport" } : void 0, externalTree: C2, adaptiveOrigin: K2 });
    a.useEffect(() => {
      function e11(e12) {
        e12.open && (e12.parentNodeId === F2 && k2.set("hoverEnabled", false), e12.nodeId !== F2 && e12.parentNodeId === k2.select("floatingParentNodeId") && k2.setOpen(false, (0, U.createChangeEventDetails)(_.REASONS.siblingOpen)));
      }
      return C2.events.on("menuopenchange", e11), () => {
        C2.events.off("menuopenchange", e11);
      };
    }, [k2, C2.events, F2]), a.useEffect(() => {
      if (null != k2.select("floatingParentNodeId")) return C2.events.on("menuopenchange", e11), () => {
        C2.events.off("menuopenchange", e11);
      };
      function e11(e12) {
        if (e12.open || e12.nodeId !== k2.select("floatingParentNodeId")) return;
        let t11 = e12.reason ?? _.REASONS.siblingOpen;
        k2.setOpen(false, (0, U.createChangeEventDetails)(t11));
      }
    }, [C2.events, k2]);
    let en2 = (0, ex.useTimeout)();
    a.useEffect(() => {
      j2 || en2.clear();
    }, [j2, en2]), a.useEffect(() => {
      function e11(e12) {
        if (j2 && e12.nodeId === k2.select("floatingParentNodeId")) if (e12.target && N2 && N2 !== e12.target) {
          let e13 = k2.select("closeDelay");
          e13 > 0 ? en2.isStarted() || en2.start(e13, () => {
            k2.setOpen(false, (0, U.createChangeEventDetails)(_.REASONS.siblingOpen));
          }) : k2.setOpen(false, (0, U.createChangeEventDetails)(_.REASONS.siblingOpen));
        } else en2.clear();
      }
      return C2.events.on("itemhover", e11), () => {
        C2.events.off("itemhover", e11);
      };
    }, [C2.events, j2, N2, k2, en2]), a.useEffect(() => {
      let e11 = { open: j2, nodeId: F2, parentNodeId: W2, reason: k2.select("lastOpenChangeReason") };
      C2.events.emit("menuopenchange", e11);
    }, [C2.events, j2, k2, F2, W2]), (0, er.useIsoLayoutEffect)(() => {
      let e11 = z2.current;
      if (V2 && (z2.current = V2), e11 && V2 && V2 !== e11) {
        k2.set("instantType", void 0);
        let e12 = new AbortController();
        return Y2(() => {
          k2.set("instantType", "trigger-change");
        }, e12.signal), () => {
          e12.abort();
        };
      }
    }, [V2, Y2, k2]);
    let ea2 = { open: j2, side: et2.side, align: et2.align, anchorHidden: et2.anchorHidden, nested: "menu" === O2.type, instant: D2 }, eo2 = "menubar" === O2.type && O2.context.modal, es2 = I2 && H2 !== _.REASONS.triggerHover;
    (0, eC.useAnchoredPopupScrollLock)(j2 && (eo2 || es2), "touch" === T2, L2, N2);
    let ei2 = (0, eP.usePositioner)(e10, ea2, { styles: et2.positionerStyles, transitionStatus: B2, props: E2, refs: [t10, k2.useStateSetter("positionerElement")], hidden: !A2, inert: !j2 }), el2 = A2 && "menu" !== O2.type && ("menubar" !== O2.type && I2 && H2 !== _.REASONS.triggerHover || "menubar" === O2.type && O2.context.modal), eu2 = null;
    return "menubar" === O2.type ? eu2 = O2.context.contentElement : void 0 === O2.type && (eu2 = N2), (0, r.jsxs)(p.Provider, { value: et2, children: [el2 && (0, r.jsx)(eR.InternalBackdrop, { ref: "context-menu" === O2.type || "nested-context-menu" === O2.type ? O2.context.internalBackdropRef : null, inert: (0, e_.inertValue)(!j2), cutout: eu2 }), (0, r.jsx)(eb.FloatingNode, { id: F2, children: (0, r.jsx)(ek.CompositeList, { elementsRef: k2.context.itemDomElements, labelsRef: k2.context.itemLabels, children: ei2 }) })] });
  });
  var eI = e.i(424404);
  try {
    var eT = "u" > typeof window ? window : e.g;
    eT._sentryModuleMetadata = eT._sentryModuleMetadata || {}, eT._sentryModuleMetadata[new eT.Error().stack] = Object.assign({}, eT._sentryModuleMetadata[new eT.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let eN = a.createContext(void 0);
  try {
    var eB = "u" > typeof window ? window : e.g;
    eB._sentryModuleMetadata = eB._sentryModuleMetadata || {}, eB._sentryModuleMetadata[new eB.Error().stack] = Object.assign({}, eB._sentryModuleMetadata[new eB.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let eL = a.memo(a.forwardRef(function(e10, t10) {
    let { render: n2, className: o2, value: s2, defaultValue: i2, onValueChange: l2, disabled: u2 = false, style: d2, "aria-labelledby": c2, ...p2 } = e10, [y2, g2] = a.useState(void 0), [f2, M2] = (0, E.useControlled)({ controlled: s2, default: i2, name: "MenuRadioGroup" }), w2 = (0, eI.useStableCallback)((e11, t11) => {
      l2?.(e11, t11), t11.isCanceled || M2(e11);
    }), v2 = (0, h.useRenderElement)("div", e10, { state: { disabled: u2 }, ref: t10, props: { role: "group", "aria-labelledby": c2 ?? y2, "aria-disabled": u2 || void 0, ...p2 } }), m2 = a.useMemo(() => ({ value: f2, setValue: w2, disabled: u2 }), [f2, w2, u2]);
    return (0, r.jsx)(Z.Provider, { value: g2, children: (0, r.jsx)(eN.Provider, { value: m2, children: v2 }) });
  }));
  try {
    var eD = "u" > typeof window ? window : e.g;
    eD._sentryModuleMetadata = eD._sentryModuleMetadata || {}, eD._sentryModuleMetadata[new eD.Error().stack] = Object.assign({}, eD._sentryModuleMetadata[new eD.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let eK = a.createContext(void 0);
  try {
    var eH = "u" > typeof window ? window : e.g;
    eH._sentryModuleMetadata = eH._sentryModuleMetadata || {}, eH._sentryModuleMetadata[new eH.Error().stack] = Object.assign({}, eH._sentryModuleMetadata[new eH.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let eF = a.forwardRef(function(e10, t10) {
    let { render: n2, className: o2, id: i2, label: l2, nativeButton: u2 = false, disabled: d2 = false, closeOnClick: c2 = false, value: p2, style: g2, ...f2 } = e10, w2 = (0, D.useCompositeListItem)({ guess: true, label: l2 }), v2 = y(true), m2 = (0, K.useBaseUiId)(i2), { store: x2 } = M(), b2 = x2.useState("isActive", w2.index), E2 = x2.useState("itemProps"), { value: R2, setValue: S2, disabled: O2 } = (function() {
      let e11 = a.useContext(eN);
      if (void 0 === e11) throw Error((0, s.default)(34));
      return e11;
    })(), P2 = x2.useState("disabled"), C2 = d2 || O2 || P2, A2 = R2 === p2, { getItemProps: j2, itemRef: I2 } = L({ closeOnClick: c2, disabled: C2, highlighted: b2, id: m2, store: x2, nativeButton: u2, nodeId: v2?.context.nodeId, itemMetadata: B }), T2 = a.useMemo(() => ({ disabled: C2, highlighted: b2, checked: A2 }), [C2, b2, A2]), N2 = (0, h.useRenderElement)("div", e10, { state: T2, stateAttributesMapping: z, props: [E2, { role: "menuitemradio", "aria-checked": A2, onClick: function(e11) {
      S2(p2, (0, U.createChangeEventDetails)(_.REASONS.itemPress, e11.nativeEvent, void 0, { preventUnmountOnClose: k.NOOP }));
    } }, f2, j2], ref: [I2, t10, w2.ref] });
    return (0, r.jsx)(eK.Provider, { value: T2, children: N2 });
  });
  try {
    var eW = "u" > typeof window ? window : e.g;
    eW._sentryModuleMetadata = eW._sentryModuleMetadata || {}, eW._sentryModuleMetadata[new eW.Error().stack] = Object.assign({}, eW._sentryModuleMetadata[new eW.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let eV = a.forwardRef(function(e10, t10) {
    let { render: r2, className: n2, style: o2, keepMounted: i2 = false, ...l2 } = e10, u2 = (function() {
      let e11 = a.useContext(eK);
      if (void 0 === e11) throw Error((0, s.default)(35));
      return e11;
    })(), d2 = a.useRef(null), { transitionStatus: c2, mounted: p2, setMounted: y2 } = (0, $.useTransitionStatus)(u2.checked);
    (0, q.useOpenChangeComplete)({ open: u2.checked, ref: d2, onComplete() {
      u2.checked || y2(false);
    } });
    let g2 = { checked: u2.checked, disabled: u2.disabled, highlighted: u2.highlighted, transitionStatus: c2 };
    return (0, h.useRenderElement)("span", e10, { state: g2, stateAttributesMapping: z, ref: [t10, d2], props: { "aria-hidden": true, ...l2 }, enabled: i2 || p2 });
  });
  var ez = e.i(114606), eU = e.i(740915), eY = e.i(535896), eG = e.i(54705), e$ = e.i(219710), eq = e.i(825696), eJ = e.i(880269), eX = e.i(775368), eQ = e.i(471540), eZ = e.i(635338), e0 = e.i(765391), e1 = e.i(992882), e5 = e.i(66769);
  try {
    var e2 = "u" > typeof window ? window : e.g;
    e2._sentryModuleMetadata = e2._sentryModuleMetadata || {}, e2._sentryModuleMetadata[new e2.Error().stack] = Object.assign({}, e2._sentryModuleMetadata[new e2.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function e8(e10) {
    return A.platform.engine.webkit && 0 === e10.movementX && 0 === e10.movementY;
  }
  function e3(e10, t10, r2) {
    switch (e10) {
      case "vertical":
        return t10;
      case "horizontal":
        return r2;
      default:
        return t10 || r2;
    }
  }
  function e4(e10, t10) {
    return e3(t10, e10 === eQ.ARROW_UP || e10 === eQ.ARROW_DOWN, e10 === eQ.ARROW_LEFT || e10 === eQ.ARROW_RIGHT);
  }
  function e6(e10, t10, r2) {
    return e3(t10, e10 === eQ.ARROW_DOWN, r2 ? e10 === eQ.ARROW_LEFT : e10 === eQ.ARROW_RIGHT) || "Enter" === e10 || " " === e10 || "" === e10;
  }
  try {
    var e9 = "u" > typeof window ? window : e.g;
    e9._sentryModuleMetadata = e9._sentryModuleMetadata || {}, e9._sentryModuleMetadata[new e9.Error().stack] = Object.assign({}, e9._sentryModuleMetadata[new e9.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var e7 = e.i(684796);
  try {
    var te = "u" > typeof window ? window : e.g;
    te._sentryModuleMetadata = te._sentryModuleMetadata || {}, te._sentryModuleMetadata[new te.Error().stack] = Object.assign({}, te._sentryModuleMetadata[new te.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let tt = a.createContext(null);
  function tr(e10) {
    let t10 = a.useContext(tt);
    if (null === t10 && !e10) throw Error((0, s.default)(5));
    return t10;
  }
  var tn = e.i(675932), ta = e.i(522353), to = e.i(939007), ts = e.i(60402), ti = e.i(631457), tl = e.i(190433), tu = e.i(521703);
  try {
    var td = "u" > typeof window ? window : e.g;
    td._sentryModuleMetadata = td._sentryModuleMetadata || {}, td._sentryModuleMetadata[new td.Error().stack] = Object.assign({}, td._sentryModuleMetadata[new td.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let tc = { ...tl.popupStoreSelectors, disabled: (e10) => "menubar" === e10.parent.type && e10.parent.context.disabled || e10.disabled, modal: (e10) => (void 0 === e10.parent.type || "context-menu" === e10.parent.type) && (e10.modal ?? true), openMethod: (e10) => e10.openMethod, allowMouseEnter: (e10) => e10.allowMouseEnter, highlightItemOnHover: (e10) => e10.highlightItemOnHover, parent: (e10) => e10.parent, rootId: (e10) => "menu" === e10.parent.type ? e10.parent.store.select("rootId") : void 0 !== e10.parent.type ? e10.parent.context.rootId : e10.rootId, activeIndex: (e10) => e10.activeIndex, isActive: (e10, t10) => e10.activeIndex === t10, hoverEnabled: (e10) => e10.hoverEnabled, instantType: (e10) => e10.instantType, lastOpenChangeReason: (e10) => e10.openChangeReason, floatingTreeRoot: (e10) => "menu" === e10.parent.type ? e10.parent.store.select("floatingTreeRoot") : e10.floatingTreeRoot, floatingNodeId: (e10) => e10.floatingNodeId, floatingParentNodeId: (e10) => e10.floatingParentNodeId, itemProps: (e10) => e10.itemProps, closeDelay: (e10) => e10.closeDelay, adaptiveOrigin: (e10) => e10.adaptiveOrigin, keyboardEventRelay: (e10) => e10.keyboardEventRelay ? e10.keyboardEventRelay : "menu" === e10.parent.type ? e10.parent.store.select("keyboardEventRelay") : void 0 };
  class tp extends to.ReactStore {
    constructor(e10) {
      super({ ...tg(), ...e10 }, ty(), tc), this.unsubscribeParentListener = this.observe("parent", (e11) => {
        if (this.unsubscribeParentListener?.(), "menu" === e11.type) {
          let t10 = e11.store.select("rootId"), r2 = e11.store.select("floatingTreeRoot"), n2 = e11.store.select("keyboardEventRelay");
          this.unsubscribeParentListener = e11.store.subscribe(() => {
            let a2 = e11.store.select("rootId"), o2 = e11.store.select("floatingTreeRoot"), s2 = e11.store.select("keyboardEventRelay");
            (t10 !== a2 || r2 !== o2 || n2 !== s2) && (t10 = a2, r2 = o2, n2 = s2, this.notifyAll());
          }), this.context.allowMouseUpTriggerRef = e11.store.context.allowMouseUpTriggerRef;
          return;
        }
        void 0 !== e11.type && (this.context.allowMouseUpTriggerRef = e11.context.allowMouseUpTriggerRef), this.unsubscribeParentListener = null;
      });
    }
    setOpen(e10, t10) {
      this.state.floatingRootContext.context.events.emit("setOpen", { open: e10, eventDetails: t10 });
    }
    unsubscribeParentListener = null;
  }
  function ty() {
    return { positionerRef: a.createRef(), popupRef: a.createRef(), typingRef: { current: false }, itemDomElements: { current: [] }, itemLabels: { current: [] }, allowMouseUpTriggerRef: { current: false }, triggerFocusTargetRef: a.createRef(), beforeContentFocusGuardRef: a.createRef(), onOpenChangeComplete: void 0, triggerElements: new tu.PopupTriggerMap() };
  }
  function tg() {
    return { ...(0, tl.createInitialPopupStoreState)(), disabled: false, modal: true, openMethod: null, allowMouseEnter: false, highlightItemOnHover: true, parent: { type: void 0 }, rootId: void 0, activeIndex: null, hoverEnabled: true, instantType: void 0, openChangeReason: null, floatingTreeRoot: new ts.FloatingTreeStore(), floatingNodeId: void 0, floatingParentNodeId: null, itemProps: k.EMPTY_OBJECT, keyboardEventRelay: void 0, closeDelay: 0, adaptiveOrigin: void 0 };
  }
  var tf = e.i(136343);
  try {
    var tM = "u" > typeof window ? window : e.g;
    tM._sentryModuleMetadata = tM._sentryModuleMetadata || {}, tM._sentryModuleMetadata[new tM.Error().stack] = Object.assign({}, tM._sentryModuleMetadata[new tM.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let th = a.createContext(void 0);
  function tw() {
    return a.useContext(th);
  }
  try {
    var tv = "u" > typeof window ? window : e.g;
    tv._sentryModuleMetadata = tv._sentryModuleMetadata || {}, tv._sentryModuleMetadata[new tv.Error().stack] = Object.assign({}, tv._sentryModuleMetadata[new tv.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let tm = (0, eU.fastComponent)(function(e10) {
    var t10;
    let n2, { children: s2, open: i2, onOpenChange: l2, onOpenChangeComplete: d2, defaultOpen: c2 = false, disabled: p2 = false, modal: y2, loopFocus: g2 = true, orientation: h2 = "vertical", actionsRef: w2, closeParentOnEsc: v2 = false, handle: m2, triggerId: x2, defaultTriggerId: b2 = null, highlightItemOnHover: E2 = true } = e10, R2 = u(true), S2 = M(true), O2 = tr(true), P2 = tw(), A2 = a.useMemo(() => P2 && S2 ? { type: "menu", store: S2.store } : O2 ? { type: "menubar", context: O2 } : R2 && !S2 ? { type: "context-menu", context: R2 } : { type: void 0 }, [R2, S2, O2, P2]), j2 = (t10 = { open: c2, openProp: i2, activeTriggerId: b2, triggerIdProp: x2, parent: A2 }, (0, ez.useRefWithInit)(() => new tp(t10)).current);
    j2.useControlledProp("openProp", i2), j2.useControlledProp("triggerIdProp", x2), j2.useContextCallback("onOpenChangeComplete", d2);
    let I2 = (0, o.useId)(), T2 = (0, o.useId)(), N2 = j2.useState("floatingTreeRoot"), B2 = (0, eb.useFloatingNodeId)(N2), L2 = (0, eb.useFloatingParentNodeId)(), D2 = j2.useState("open"), K2 = j2.useState("activeTriggerElement"), H2 = j2.useState("positionerElement"), F2 = j2.useState("hoverEnabled"), W2 = j2.useState("disabled"), V2 = j2.useState("lastOpenChangeReason"), z2 = j2.useState("parent"), Y2 = j2.useState("activeIndex"), G2 = j2.useState("payload"), $2 = j2.useState("floatingParentNodeId"), q2 = a.useRef(null), J2 = a.useRef("context-menu" !== z2.type), X2 = (0, ex.useTimeout)(), Q2 = a.useRef(true), Z2 = (0, ex.useTimeout)(), ee2 = null != $2, { openMethod: et2, triggerProps: en2 } = (0, ta.useOpenInteractionType)(D2);
    j2.useSyncedValues({ disabled: p2, highlightItemOnHover: E2, modal: void 0 === z2.type ? y2 : void 0, openMethod: et2, rootId: I2 }), (0, tf.useImplicitActiveTrigger)(j2);
    let { forceUnmount: ea2 } = (0, tf.useOpenStateTransitions)(D2, j2, () => {
      j2.set("allowMouseEnter", false);
    });
    (0, er.useIsoLayoutEffect)(() => {
      R2 && !S2 ? j2.update({ parent: { type: "context-menu", context: R2 }, floatingNodeId: B2, floatingParentNodeId: L2 }) : S2 && j2.update({ floatingNodeId: B2, floatingParentNodeId: L2 });
    }, [R2, S2, B2, L2, j2]), a.useEffect(() => {
      if (D2 || (q2.current = null), "context-menu" === z2.type) {
        if (!D2) {
          X2.clear(), J2.current = false;
          return;
        }
        X2.start(500, () => {
          J2.current = true;
        });
      }
    }, [X2, D2, z2.type]), (0, er.useIsoLayoutEffect)(() => {
      D2 || F2 || j2.set("hoverEnabled", true);
    }, [D2, F2, j2]);
    let eo2 = (0, eI.useStableCallback)((e11, t11) => {
      let r2 = t11.reason;
      if (!e11 && !j2.select("open") || D2 === e11 && t11.trigger === K2 && V2 === r2) return;
      let n3 = (0, tf.attachPreventUnmountOnClose)(t11);
      if (e11 || null != t11.trigger || (t11.trigger = K2 ?? void 0), l2?.(e11, t11), t11.isCanceled) return;
      j2.state.floatingRootContext.dispatchOpenChange(e11, t11);
      let a2 = t11.event;
      if (false === e11 && a2?.type === "click" && "touch" === a2.pointerType && !Q2.current) return;
      e11 && r2 === _.REASONS.triggerFocus ? (Q2.current = false, Z2.start(300, () => {
        Q2.current = true;
      })) : (Q2.current = true, Z2.clear());
      let o2 = (r2 === _.REASONS.triggerPress || r2 === _.REASONS.itemPress) && 0 === a2.detail, s3 = !e11 && (r2 === _.REASONS.escapeKey || null == r2), i3 = { open: e11, openChangeReason: r2 };
      q2.current = t11.event, (0, tf.setPopupOpenState)(i3, e11, t11.trigger, n3()), j2.update(i3), "menubar" === z2.type && (r2 === _.REASONS.triggerFocus || r2 === _.REASONS.focusOut || r2 === _.REASONS.triggerHover || r2 === _.REASONS.listNavigation || r2 === _.REASONS.siblingOpen) ? j2.set("instantType", "group") : o2 || s3 ? j2.set("instantType", o2 ? "click" : "dismiss") : j2.set("instantType", void 0);
    }), es2 = (0, e7.useSyncedFloatingRootContext)({ popupStore: j2, floatingId: T2, nested: null != L2, onOpenChange: eo2 }), ei2 = es2.context.events;
    (0, er.useIsoLayoutEffect)(() => {
      let e11 = ({ open: e12, eventDetails: t11 }) => eo2(e12, t11);
      return ei2.on("setOpen", e11), () => {
        ei2?.off("setOpen", e11);
      };
    }, [ei2, eo2]);
    let el2 = a.useCallback(() => {
      j2.setOpen(false, (0, U.createChangeEventDetails)(_.REASONS.imperativeAction));
    }, [j2]);
    a.useImperativeHandle(w2, () => ({ unmount: ea2, close: el2 }), [ea2, el2]), "context-menu" === z2.type && (n2 = z2.context), a.useImperativeHandle(n2?.positionerRef, () => H2, [H2]), a.useImperativeHandle(n2?.actionsRef, () => ({ setOpen: eo2 }), [eo2]);
    let eu2 = (0, eY.useDismiss)(es2, { enabled: !W2, bubbles: { escapeKey: v2 && "menu" === z2.type }, outsidePress: () => "context-menu" !== z2.type || q2.current?.type === "contextmenu" || J2.current, externalTree: ee2 ? N2 : void 0 }), ed2 = (0, tn.useDirection)(), ec2 = a.useCallback((e11) => {
      j2.select("activeIndex") !== e11 && j2.set("activeIndex", e11);
    }, [j2]), ep2 = (function(e11, t11) {
      let { listRef: r2, activeIndex: n3, onNavigate: o2 = () => {
      }, enabled: s3 = true, selectedIndex: i3 = null, allowEscape: l3 = false, loopFocus: u2 = false, nested: d3 = false, rtl: c3 = false, virtual: p3 = false, focusItemOnOpen: y3 = "auto", focusItemOnHover: g3 = true, openOnArrowKeyDown: f2 = true, disabledIndices: M2, orientation: h3 = "vertical", parentOrientation: w3, id: v3, resetOnPointerLeave: m3 = true, externalTree: x3, grid: b3 } = t11, E3 = null != b3, k2 = "rootStore" in e11 ? e11.rootStore : e11, R3 = k2.useState("open"), S3 = k2.useState("floatingElement"), O3 = k2.useState("domReferenceElement"), P3 = k2.context.dataRef, C2 = (0, e0.getFloatingFocusElement)(S3), A3 = (0, e0.isTypeableCombobox)(O3), j3 = (0, eq.useValueAsRef)(C2), I3 = (0, eb.useFloatingParentNodeId)(), T3 = (0, eb.useFloatingTree)(x3), N3 = a.useRef(y3), B3 = a.useRef(i3 ?? -1), L3 = a.useRef(null), D3 = a.useRef(true), K3 = (0, eI.useStableCallback)((e12) => {
        o2(-1 === B3.current ? null : B3.current, e12);
      }), H3 = a.useRef(!!S3), F3 = a.useRef(R3), W3 = a.useRef(false), V3 = a.useRef(false), z3 = a.useRef(null), Y3 = (0, eq.useValueAsRef)(M2), G3 = (0, eq.useValueAsRef)(R3), $3 = (0, eq.useValueAsRef)(i3), q3 = (0, eq.useValueAsRef)(m3), J3 = (0, eG.useAnimationFrame)(), X3 = (0, eG.useAnimationFrame)(), Q3 = (0, eI.useStableCallback)(() => {
        function e12(e13) {
          p3 ? T3?.events.emit("virtualfocus", e13) : z3.current = (0, e1.enqueueFocus)(e13, { sync: W3.current, preventScroll: true });
        }
        let t12 = r2.current[B3.current], n4 = V3.current;
        t12 && e12(t12), (W3.current ? (e13) => e13() : (e13) => J3.request(e13))(() => {
          let a2 = r2.current[B3.current] || t12;
          !a2 || (t12 || e12(a2), eo3 && (n4 || !D3.current) && a2.scrollIntoView?.({ block: "nearest", inline: "nearest" }));
        });
      });
      (0, er.useIsoLayoutEffect)(() => {
        P3.current.orientation = h3;
      }, [P3, h3]), (0, er.useIsoLayoutEffect)(() => {
        s3 && (R3 && S3 ? (B3.current = i3 ?? -1, N3.current && null != i3 && (V3.current = true, K3())) : H3.current && (B3.current = -1, K3()));
      }, [s3, R3, S3, i3, K3]), (0, er.useIsoLayoutEffect)(() => {
        if (s3) {
          if (!R3) {
            W3.current = false;
            return;
          }
          if (S3) if (null == n3) {
            if (W3.current = false, null != $3.current) return;
            if (H3.current && (B3.current = -1, Q3()), (!F3.current || !H3.current) && N3.current && (null != L3.current || true === N3.current && null == L3.current)) {
              let e12 = 0, t12 = () => {
                null == r2.current[0] ? (e12 < 2 && (e12 ? (e13) => X3.request(e13) : queueMicrotask)(t12), e12 += 1) : (B3.current = null == L3.current || e6(L3.current, h3, c3) || d3 ? (0, eX.getMinListIndex)(r2) : (0, eX.getMaxListIndex)(r2), L3.current = null, K3());
              };
              t12();
            }
          } else (0, eX.isIndexOutOfListBounds)(r2.current, n3) || (B3.current = n3, Q3(), V3.current = false);
        }
      }, [s3, R3, S3, n3, $3, d3, r2, h3, c3, K3, Q3, X3]), (0, er.useIsoLayoutEffect)(() => {
        if (!s3 || S3 || !T3 || p3 || !H3.current) return;
        let e12 = T3.nodesRef.current, t12 = e12.find((e13) => e13.id === I3)?.context?.elements.floating, r3 = (0, eZ.activeElement)((0, e$.ownerDocument)(O3 ?? t12 ?? null)), n4 = e12.some((e13) => e13.context && (0, eZ.contains)(e13.context.elements.floating, r3));
        t12 && !n4 && D3.current && t12.focus({ preventScroll: true });
      }, [s3, S3, O3, T3, I3, p3]), (0, er.useIsoLayoutEffect)(() => {
        F3.current = R3, H3.current = !!S3;
      }), (0, er.useIsoLayoutEffect)(() => {
        R3 || (L3.current = null, N3.current = y3);
      }, [R3, y3]);
      let Z3 = null != n3, ee3 = (0, eI.useStableCallback)((e12) => {
        if (!G3.current) return;
        let t12 = r2.current.indexOf(e12.currentTarget);
        -1 !== t12 && (B3.current !== t12 || n3 !== t12) && (B3.current = t12, K3(e12));
      }), et3 = (0, eI.useStableCallback)(() => w3 ?? T3?.nodesRef.current.find((e12) => e12.id === I3)?.context?.dataRef?.current.orientation), en3 = (0, eI.useStableCallback)(() => (0, eX.getMinListIndex)(r2, Y3.current)), ea3 = (0, eI.useStableCallback)((e12) => {
        var t12;
        let n4, a2;
        if (D3.current = false, W3.current = true, 229 === e12.which || !G3.current && e12.currentTarget === j3.current) return;
        if (d3 && (t12 = e12.key, n4 = c3 ? t12 === eQ.ARROW_RIGHT : t12 === eQ.ARROW_LEFT, a2 = t12 === eQ.ARROW_UP, "both" === h3 || "horizontal" === h3 && E3 ? "Escape" === t12 : e3(h3, n4, a2))) {
          e4(e12.key, et3()) || (0, e5.stopEvent)(e12), k2.setOpen(false, (0, U.createChangeEventDetails)(_.REASONS.listNavigation, e12.nativeEvent)), (0, eJ.isHTMLElement)(O3) && (p3 ? T3?.events.emit("virtualfocus", O3) : O3.focus());
          return;
        }
        let o3 = B3.current, s4 = (0, eX.getMinListIndex)(r2, M2), i4 = (0, eX.getMaxListIndex)(r2, M2);
        if (A3 || ("Home" === e12.key && ((0, e5.stopEvent)(e12), B3.current = s4, K3(e12)), "End" === e12.key && ((0, e5.stopEvent)(e12), B3.current = i4, K3(e12))), null != b3) {
          let t13 = b3(e12, B3.current, r2, h3, u2, c3, M2, s4, i4);
          if (null != t13 && (B3.current = t13, K3(e12)), "both" === h3) return;
        }
        if (e4(e12.key, h3)) {
          if ((0, e5.stopEvent)(e12), R3 && !p3 && (0, eZ.activeElement)(e12.currentTarget.ownerDocument) === e12.currentTarget) {
            B3.current = e6(e12.key, h3, c3) ? s4 : i4, K3(e12);
            return;
          }
          e6(e12.key, h3, c3) ? u2 ? o3 >= i4 ? l3 && o3 !== r2.current.length ? B3.current = -1 : (W3.current = false, B3.current = s4) : B3.current = (0, eX.findNonDisabledListIndex)(r2.current, { startingIndex: o3, disabledIndices: M2 }) : B3.current = Math.min(i4, (0, eX.findNonDisabledListIndex)(r2.current, { startingIndex: o3, disabledIndices: M2 })) : u2 ? o3 <= s4 ? l3 && -1 !== o3 ? B3.current = r2.current.length : (W3.current = false, B3.current = i4) : B3.current = (0, eX.findNonDisabledListIndex)(r2.current, { startingIndex: o3, decrement: true, disabledIndices: M2 }) : B3.current = Math.max(s4, (0, eX.findNonDisabledListIndex)(r2.current, { startingIndex: o3, decrement: true, disabledIndices: M2 })), (0, eX.isIndexOutOfListBounds)(r2.current, B3.current) && (B3.current = -1), K3(e12);
        }
      }), eo3 = a.useMemo(() => ({ onFocus(e12) {
        W3.current = true, ee3(e12);
      }, onClick: ({ currentTarget: e12 }) => e12.focus({ preventScroll: true }), onMouseMove(e12) {
        !e8(e12) && (W3.current = true, V3.current = false, g3 && ee3(e12));
      }, onPointerLeave(e12) {
        if (!G3.current || !D3.current || "touch" === e12.pointerType) return;
        W3.current = true;
        let t12 = e12.relatedTarget;
        if (!(!g3 || r2.current.includes(t12)) && q3.current && (z3.current?.(), z3.current = null, B3.current = -1, K3(e12), !p3)) {
          let e13 = j3.current, t13 = (0, eZ.activeElement)((0, e$.ownerDocument)(e13));
          e13 && (0, eZ.contains)(e13, t13) && e13.focus({ preventScroll: true });
        }
      } }), [ee3, G3, j3, g3, r2, K3, q3, p3]), es3 = a.useMemo(() => p3 && R3 && Z3 && { "aria-activedescendant": `${v3}-${n3}` }, [p3, R3, Z3, v3, n3]), ei3 = a.useMemo(() => ({ "aria-orientation": "both" === h3 ? void 0 : h3, ...!A3 ? es3 : {}, onKeyDown(e12) {
        if ("Tab" === e12.key && e12.shiftKey && R3 && !p3) {
          let t12 = (0, eZ.getTarget)(e12.nativeEvent);
          if (t12 && !(0, eZ.contains)(j3.current, t12)) return;
          (0, e5.stopEvent)(e12), k2.setOpen(false, (0, U.createChangeEventDetails)(_.REASONS.focusOut, e12.nativeEvent)), (0, eJ.isHTMLElement)(O3) && O3.focus();
          return;
        }
        ea3(e12);
      }, onPointerMove(e12) {
        e8(e12) || (D3.current = true);
      } }), [es3, ea3, j3, h3, A3, k2, R3, p3, O3]), el3 = a.useMemo(() => {
        function e12(e13) {
          k2.setOpen(true, (0, U.createChangeEventDetails)(_.REASONS.listNavigation, e13.nativeEvent, e13.currentTarget));
        }
        function t12(e13) {
          "auto" === y3 && (0, e5.isVirtualClick)(e13.nativeEvent) && (N3.current = !p3);
        }
        function r3(e13) {
          N3.current = y3, "auto" === y3 && (0, e5.isVirtualPointerEvent)(e13.nativeEvent) && (N3.current = true);
        }
        return { onKeyDown(t13) {
          var r4, n4;
          let a2 = k2.select("open");
          D3.current = false;
          let o3 = t13.key.startsWith("Arrow"), s4 = (r4 = t13.key, n4 = et3(), e3(n4, c3 ? r4 === eQ.ARROW_LEFT : r4 === eQ.ARROW_RIGHT, r4 === eQ.ARROW_DOWN)), i4 = e4(t13.key, h3), l4 = (d3 ? s4 : i4) || "Enter" === t13.key || "" === t13.key.trim();
          if (p3 && a2) return ea3(t13);
          if (a2 || f2 || !o3) {
            if (l4) {
              let e13 = e4(t13.key, et3());
              L3.current = d3 && e13 ? null : t13.key;
            }
            if (d3) {
              s4 && ((0, e5.stopEvent)(t13), a2 ? (B3.current = en3(), K3(t13)) : e12(t13));
              return;
            }
            i4 && (null != $3.current && (B3.current = $3.current), (0, e5.stopEvent)(t13), !a2 && f2 ? e12(t13) : ea3(t13), a2 && K3(t13));
          }
        }, onFocus(e13) {
          k2.select("open") && !p3 && (B3.current = -1, K3(e13));
        }, onPointerDown: r3, onPointerEnter: r3, onMouseDown: t12, onClick: t12 };
      }, [ea3, y3, en3, d3, K3, k2, f2, h3, et3, c3, $3, p3]), eu3 = a.useMemo(() => ({ ...es3, ...el3 }), [es3, el3]);
      return a.useMemo(() => s3 ? { reference: eu3, floating: ei3, item: eo3, trigger: el3 } : {}, [s3, eu3, ei3, el3, eo3]);
    })(es2, { enabled: !W2, listRef: j2.context.itemDomElements, activeIndex: Y2, nested: void 0 !== z2.type, loopFocus: g2, orientation: h2, parentOrientation: "menubar" === z2.type ? z2.context.orientation : void 0, rtl: "rtl" === ed2, disabledIndices: k.EMPTY_ARRAY, onNavigate: ec2, openOnArrowKeyDown: "context-menu" !== z2.type, externalTree: ee2 ? N2 : void 0, focusItemOnHover: E2 }), ey2 = a.useCallback((e11) => {
      j2.context.typingRef.current = e11;
    }, [j2]), eg2 = (function(e11, t11) {
      let { listRef: r2, elementsRef: n3, activeIndex: o2, onMatch: s3, disabledIndices: i3, onTyping: l3, enabled: u2 = true, resetMs: d3 = 750, selectedIndex: c3 = null } = t11, p3 = "rootStore" in e11 ? e11.rootStore : e11, y3 = p3.useState("open"), g3 = (0, ex.useTimeout)(), f2 = a.useRef(""), M2 = a.useRef(c3 ?? o2 ?? -1), h3 = a.useRef(null), w3 = (0, eI.useStableCallback)((e12) => {
        function t12(e13) {
          let t13 = n3?.current[e13];
          return !(t13 && !(0, eX.isElementVisible)(t13) || t13?.matches(":disabled")) && (null == i3 || !(0, eX.isListIndexDisabled)(k.EMPTY_ARRAY, e13, i3));
        }
        function a2(e13, r3, n4 = 0) {
          if (0 === e13.length) return -1;
          let o3 = (n4 % e13.length + e13.length) % e13.length, s4 = r3.toLowerCase();
          for (let r4 = 0; r4 < e13.length; r4 += 1) {
            let n5 = (o3 + r4) % e13.length, a3 = e13[n5];
            if (a3?.toLowerCase().startsWith(s4) && t12(n5)) return n5;
          }
          return -1;
        }
        let u3 = r2.current;
        if (f2.current.length > 0 && " " === e12.key && ((0, e5.stopEvent)(e12), l3?.(true)), f2.current.length > 0 && " " !== f2.current[0] && -1 === a2(u3, f2.current) && " " !== e12.key && l3?.(false), null == u3 || 1 !== e12.key.length || e12.ctrlKey || e12.metaKey || e12.altKey) return;
        y3 && " " !== e12.key && ((0, e5.stopEvent)(e12), l3?.(true));
        let p4 = "" === f2.current;
        p4 && (M2.current = c3 ?? o2 ?? -1), u3.every((e13, r3) => !(e13 && t12(r3)) || e13[0]?.toLowerCase() !== e13[1]?.toLowerCase()) && f2.current === e12.key && (f2.current = "", M2.current = h3.current), f2.current += e12.key, g3.start(d3, () => {
          f2.current = "", M2.current = h3.current, l3?.(false);
        });
        let w4 = p4 ? c3 ?? o2 ?? -1 : M2.current, v4 = a2(u3, f2.current, (w4 ?? 0) + 1);
        -1 !== v4 ? (s3?.(v4), h3.current = v4) : " " !== e12.key && (f2.current = "", l3?.(false));
      }), v3 = (0, eI.useStableCallback)((e12) => {
        let t12 = e12.relatedTarget, r3 = p3.select("domReferenceElement"), n4 = p3.select("floatingElement");
        (0, eZ.contains)(r3, t12) || (0, eZ.contains)(n4, t12) || (g3.clear(), f2.current = "", M2.current = h3.current, l3?.(false));
      });
      (0, er.useIsoLayoutEffect)(() => {
        (y3 || null === c3) && (g3.clear(), h3.current = null, "" !== f2.current && (f2.current = ""));
      }, [y3, c3, g3]);
      let m3 = a.useMemo(() => ({ onKeyDown: w3, onBlur: v3 }), [w3, v3]);
      return a.useMemo(() => u2 ? { reference: m3, floating: m3 } : {}, [u2, m3]);
    })(es2, { enabled: !W2, listRef: j2.context.itemLabels, elementsRef: j2.context.itemDomElements, activeIndex: Y2, resetMs: eS.TYPEAHEAD_RESET_MS, onMatch: (e11) => {
      D2 && e11 !== Y2 && j2.set("activeIndex", e11);
    }, onTyping: ey2 }), ef2 = a.useMemo(() => {
      let e11 = (0, C.mergeProps)(eg2.reference, ep2.reference, eu2.reference, { onMouseMove() {
        j2.set("allowMouseEnter", true);
      } }, en2);
      return e11["aria-haspopup"] = "menu", e11["aria-expanded"] = D2, e11;
    }, [j2, eg2.reference, ep2.reference, eu2.reference, en2, D2]), eM2 = a.useMemo(() => {
      let e11 = (0, C.mergeProps)(ep2.trigger, eu2.trigger, en2);
      return e11["aria-haspopup"] = "menu", e11["aria-expanded"] = false, e11;
    }, [ep2.trigger, eu2.trigger, en2]), eh2 = a.useMemo(() => (0, C.mergeProps)(tf.FOCUSABLE_POPUP_PROPS, { id: T2, role: "menu", "aria-labelledby": K2?.id, onMouseMove() {
      j2.set("allowMouseEnter", true), "menu" === z2.type && j2.set("hoverEnabled", false);
    }, onClick() {
      j2.select("hoverEnabled") && j2.set("hoverEnabled", false);
    }, onKeyDown(e11) {
      let t11 = j2.select("keyboardEventRelay");
      t11 && !e11.isPropagationStopped() && t11(e11);
    } }, eg2.floating, ep2.floating, eu2.floating), [K2, T2, z2.type, j2, eg2.floating, ep2.floating, eu2.floating]), ew2 = ep2.item ?? k.EMPTY_OBJECT;
    (0, tf.usePopupInteractionProps)(j2, { floatingRootContext: es2, activeTriggerProps: ef2, inactiveTriggerProps: eM2, popupProps: eh2, itemProps: ew2 });
    let ev2 = a.useMemo(() => ({ store: j2, parent: A2 }), [j2, A2]), em2 = (0, r.jsxs)(f.Provider, { value: ev2, children: [m2 && (0, r.jsx)(tf.PopupHandleAttachment, { handle: m2, store: j2 }), "function" == typeof s2 ? s2({ payload: G2 }) : s2] });
    return void 0 === z2.type || "context-menu" === z2.type ? (0, r.jsx)(eb.FloatingTree, { externalTree: N2, children: em2 }) : em2;
  });
  try {
    var t_ = "u" > typeof window ? window : e.g;
    t_._sentryModuleMetadata = t_._sentryModuleMetadata || {}, t_._sentryModuleMetadata[new t_.Error().stack] = Object.assign({}, t_._sentryModuleMetadata[new t_.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function tx(e10) {
    let t10 = M().store, n2 = a.useMemo(() => ({ parentMenu: t10 }), [t10]);
    return (0, r.jsx)(th.Provider, { value: n2, children: (0, r.jsx)(tm, { ...e10 }) });
  }
  var tb = e.i(581764), tE = e.i(84588), tk = e.i(32774), tR = e.i(243428), tS = e.i(479995);
  try {
    var tO = "u" > typeof window ? window : e.g;
    tO._sentryModuleMetadata = tO._sentryModuleMetadata || {}, tO._sentryModuleMetadata[new tO.Error().stack] = Object.assign({}, tO._sentryModuleMetadata[new tO.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var tP = e.i(486492), tC = e.i(322042);
  try {
    var tA = "u" > typeof window ? window : e.g;
    tA._sentryModuleMetadata = tA._sentryModuleMetadata || {}, tA._sentryModuleMetadata[new tA.Error().stack] = Object.assign({}, tA._sentryModuleMetadata[new tA.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function tj(e10) {
    return (0, eJ.isHTMLElement)(e10) && e10.hasAttribute("data-rootownerid") ? e10.getAttribute("data-rootownerid") : (0, eJ.isLastTraversableNode)(e10) ? void 0 : tj((0, eJ.getParentNode)(e10));
  }
  var tI = e.i(610993), tT = e.i(818823);
  try {
    var tN = "u" > typeof window ? window : e.g;
    tN._sentryModuleMetadata = tN._sentryModuleMetadata || {}, tN._sentryModuleMetadata[new tN.Error().stack] = Object.assign({}, tN._sentryModuleMetadata[new tN.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var tB = e.i(234091);
  try {
    var tL = "u" > typeof window ? window : e.g;
    tL._sentryModuleMetadata = tL._sentryModuleMetadata || {}, tL._sentryModuleMetadata[new tL.Error().stack] = Object.assign({}, tL._sentryModuleMetadata[new tL.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let tD = (0, eU.fastComponentRef)(function(e10, t10) {
    let n2, { render: o2, className: i2, style: l2, disabled: u2 = false, nativeButton: d2 = true, id: c2, openOnHover: p2, delay: y2 = 100, closeDelay: g2 = 0, handle: f2, payload: v2, ...m2 } = e10, x2 = M(true), b2 = (0, tI.usePopupHandleStore)(f2) ?? x2?.store;
    if (!b2) throw Error((0, s.default)(85));
    let E2 = (0, K.useBaseUiId)(c2), R2 = b2.useState("isTriggerActive", E2), S2 = b2.useState("floatingRootContext"), O2 = b2.useState("isOpenedByTrigger", E2), j2 = b2.useState("triggerPopupId", E2), I2 = a.useRef(null), T2 = (n2 = tr(true), a.useMemo(() => n2 ? { type: "menubar", context: n2 } : { type: void 0 }, [n2])), N2 = (0, tC.useCompositeRootContext)(true), B2 = (0, eb.useFloatingTree)(), L2 = a.useMemo(() => B2 ?? new ts.FloatingTreeStore(), [B2]), D2 = (0, eb.useFloatingNodeId)(L2), H2 = (0, eb.useFloatingParentNodeId)(), { registerTrigger: F2, isMountedByThisTrigger: W2 } = (0, tf.useTriggerDataForwarding)(E2, I2, b2, { payload: v2, closeDelay: g2, parent: T2, floatingTreeRoot: L2, floatingNodeId: D2, floatingParentNodeId: H2, keyboardEventRelay: N2?.relayKeyboardEvent }), V2 = "menubar" === T2.type, z2 = b2.useState("disabled"), U2 = u2 || z2 || V2 && T2.context.disabled, { getButtonProps: Y2, buttonRef: G2 } = (0, P.useButton)({ disabled: U2, native: d2 });
    a.useEffect(() => {
      O2 || void 0 !== T2.type || (b2.context.allowMouseUpTriggerRef.current = false);
    }, [b2, O2, T2.type]);
    let $2 = a.useRef(null), q2 = (0, ex.useTimeout)(), J2 = (0, eI.useStableCallback)((e11) => {
      let t11;
      if (!$2.current) return;
      q2.clear(), b2.context.allowMouseUpTriggerRef.current = false;
      let r2 = e11.target;
      !((0, eZ.contains)($2.current, r2) || (0, eZ.contains)(b2.select("positionerElement"), r2)) && r2 !== $2.current && (null == r2 || tj(r2) !== b2.select("rootId")) && (t11 = (function(e12) {
        let t12 = e12.getBoundingClientRect(), r3 = (0, tS.ownerWindow)(e12);
        if (A.platform.env.jsdom) return t12;
        let n3 = r3.getComputedStyle(e12, "::before"), a2 = r3.getComputedStyle(e12, "::after");
        if ("none" === n3.content && "none" === a2.content) return t12;
        let o3 = parseFloat(n3.width) || 0, s2 = parseFloat(n3.height) || 0, i3 = parseFloat(a2.width) || 0, l3 = parseFloat(a2.height) || 0, u3 = Math.max(t12.width, o3, i3), d3 = Math.max(t12.height, s2, l3), c3 = u3 - t12.width, p3 = d3 - t12.height;
        return { left: t12.left - c3 / 2, right: t12.right + c3 / 2, top: t12.top - p3 / 2, bottom: t12.bottom + p3 / 2 };
      })($2.current), e11.clientX >= t11.left - 5 && e11.clientX <= t11.right + 5 && e11.clientY >= t11.top - 5 && e11.clientY <= t11.bottom + 5 || L2.events.emit("close", { domEvent: e11, reason: _.REASONS.cancelOpen }));
    });
    a.useEffect(() => {
      O2 && b2.select("lastOpenChangeReason") === _.REASONS.triggerHover && (0, e$.ownerDocument)($2.current).addEventListener("mouseup", J2, { once: true });
    }, [O2, J2, b2]);
    let X2 = V2 && T2.context.hasSubmenuOpen, Q2 = p2 ?? X2, Z2 = (0, tR.useHoverReferenceInteraction)(S2, { enabled: Q2 && !U2 && (!V2 || X2 && !W2), handleClose: (0, tb.safePolygon)({ blockPointerEvents: !V2 }), mouseOnly: true, move: false, restMs: void 0 === T2.type ? y2 : void 0, delay: { close: g2 }, triggerElementRef: I2, externalTree: L2, isActiveTrigger: R2, isClosing: () => "ending" === b2.select("transitionStatus") }), ee2 = (function(e11, t11) {
      let r2 = (0, ex.useTimeout)(), [n3, o3] = a.useState(false);
      return (0, er.useIsoLayoutEffect)(() => {
        e11 && t11 === _.REASONS.triggerHover ? (o3(true), r2.start(eS.PATIENT_CLICK_THRESHOLD, () => {
          o3(false);
        })) : e11 || (r2.clear(), o3(false));
      }, [e11, t11, r2]), n3;
    })(O2, b2.select("lastOpenChangeReason")), et2 = (0, tE.useClick)(S2, { enabled: !U2, event: O2 && V2 ? "click" : "mousedown", toggle: true, ignoreMouse: false, stickIfOpen: void 0 === T2.type && ee2 }), en2 = (0, tk.useFocus)(S2, { enabled: !U2 && X2 }), ea2 = (function(e11) {
      let { enabled: t11 = true, mouseDownAction: r2, open: n3 } = e11, o3 = a.useRef(false);
      return a.useMemo(() => t11 ? { onMouseDown: (e12) => {
        ("open" === r2 && !n3 || "close" === r2 && n3) && (o3.current = true, (0, e$.ownerDocument)(e12.currentTarget).addEventListener("click", () => {
          o3.current = false;
        }, { once: true }));
      }, onClick: (e12) => {
        o3.current && (o3.current = false, e12.preventBaseUIHandler());
      } } : k.EMPTY_OBJECT, [t11, r2, n3]);
    })({ open: O2, enabled: V2, mouseDownAction: "open" }), eo2 = a.useMemo(() => (0, C.mergeProps)(en2.reference, et2.reference), [en2.reference, et2.reference]), es2 = b2.useState("triggerProps", W2), { preFocusGuardRef: ei2, handlePreFocusGuardFocus: el2, handleFocusTargetFocus: eu2 } = (0, tT.useTriggerFocusGuards)(b2, I2), ed2 = { disabled: U2, open: O2 }, ec2 = [$2, t10, G2, F2, I2], ep2 = [eo2, Z2 ?? k.EMPTY_OBJECT, es2, { "aria-haspopup": "menu", "aria-controls": j2, id: E2, onMouseDown: (e11) => {
      b2.select("open") || (q2.start(200, () => {
        b2.context.allowMouseUpTriggerRef.current = true;
      }), (0, e$.ownerDocument)(e11.currentTarget).addEventListener("mouseup", J2, { once: true }));
    } }, V2 ? { role: "menuitem" } : {}, ea2, m2, Y2], ey2 = (0, h.useRenderElement)("button", e10, { enabled: !V2, stateAttributesMapping: w.pressableTriggerOpenStateMapping, state: ed2, ref: ec2, props: ep2 });
    return V2 ? (0, r.jsx)(tP.CompositeItem, { tag: "button", render: o2, className: i2, style: l2, state: ed2, refs: ec2, props: ep2, stateAttributesMapping: w.pressableTriggerOpenStateMapping }) : O2 ? (0, r.jsxs)(a.Fragment, { children: [(0, r.jsx)(tB.FocusGuard, { ref: ei2, onFocus: el2 }, `${E2}-pre-focus-guard`), (0, r.jsx)(a.Fragment, { children: ey2 }, E2), (0, r.jsx)(tB.FocusGuard, { ref: b2.context.triggerFocusTargetRef, onFocus: eu2 }, `${E2}-post-focus-guard`)] }) : (0, r.jsx)(a.Fragment, { children: ey2 }, E2);
  });
  var tK = e.i(233514);
  try {
    var tH = "u" > typeof window ? window : e.g;
    tH._sentryModuleMetadata = tH._sentryModuleMetadata || {}, tH._sentryModuleMetadata[new tH.Error().stack] = Object.assign({}, tH._sentryModuleMetadata[new tH.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let tF = a.forwardRef(function(e10, t10) {
    let { render: r2, className: n2, style: a2, children: o2, ...s2 } = e10, { store: i2 } = M(), { side: l2 } = y(), u2 = i2.useState("instantType"), { children: d2, state: c2 } = (0, tK.usePopupViewport)({ store: i2, side: l2, children: o2 }), p2 = { activationDirection: c2.activationDirection, transitioning: c2.transitioning, instant: u2 };
    return (0, h.useRenderElement)("div", e10, { state: p2, ref: t10, props: [s2, { children: d2 }], stateAttributesMapping: tK.popupViewportStateMapping });
  });
  try {
    var tW = "u" > typeof window ? window : e.g;
    tW._sentryModuleMetadata = tW._sentryModuleMetadata || {}, tW._sentryModuleMetadata[new tW.Error().stack] = Object.assign({}, tW._sentryModuleMetadata[new tW.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let tV = a.forwardRef(function(e10, t10) {
    let { className: r2, render: n2, orientation: a2 = "horizontal", style: o2, ...s2 } = e10;
    return (0, h.useRenderElement)("div", e10, { state: { orientation: a2 }, ref: t10, props: [{ role: "separator", "aria-orientation": a2 }, s2] });
  });
  try {
    var tz = "u" > typeof window ? window : e.g;
    tz._sentryModuleMetadata = tz._sentryModuleMetadata || {}, tz._sentryModuleMetadata[new tz.Error().stack] = Object.assign({}, tz._sentryModuleMetadata[new tz.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let tU = { "aria-expanded": void 0 }, tY = a.forwardRef(function(e10, t10) {
    let { render: r2, className: n2, style: o2, label: i2, id: l2, nativeButton: u2 = false, openOnHover: d2 = true, delay: c2 = 100, closeDelay: p2 = 0, disabled: g2 = false, ...f2 } = e10, v2 = tw();
    if (!v2?.parentMenu) throw Error((0, s.default)(37));
    let m2 = (0, D.useCompositeListItem)({ guess: true, label: i2 }), x2 = y(), { store: b2 } = M(), E2 = (0, K.useBaseUiId)(l2), R2 = b2.useState("open"), S2 = b2.useState("floatingRootContext"), O2 = b2.useState("floatingTreeRoot"), P2 = b2.useState("triggerPopupId", E2), C2 = (0, tf.useTriggerRegistration)(E2, b2), j2 = a.useCallback((e11) => {
      let t11 = C2(e11);
      return null !== e11 && b2.select("open") && null == b2.select("activeTriggerId") && b2.update({ activeTriggerId: E2, activeTriggerElement: e11, closeDelay: p2 }), t11;
    }, [C2, p2, b2, E2]), I2 = a.useRef(null), T2 = a.useCallback((e11) => {
      I2.current = e11, b2.set("activeTriggerElement", e11);
    }, [b2]);
    b2.useSyncedValue("closeDelay", p2);
    let N2 = v2.parentMenu, B2 = b2.useState("disabled"), H2 = N2.useState("disabled"), F2 = g2 || B2 || H2, W2 = N2.useState("itemProps"), V2 = N2.useState("isActive", m2.index), z2 = a.useMemo(() => ({ type: "submenu-trigger", setActive() {
      N2.select("highlightItemOnHover") && N2.set("activeIndex", m2.index);
    } }), [N2, m2.index]), { getItemProps: U2, itemRef: Y2 } = L({ closeOnClick: false, disabled: F2, highlighted: V2, id: E2, store: b2, typingRef: N2.context.typingRef, nativeButton: u2, itemMetadata: z2, nodeId: x2?.context.nodeId }), G2 = b2.useState("hoverEnabled"), $2 = (0, tR.useHoverReferenceInteraction)(S2, { enabled: G2 && d2 && !F2, handleClose: (0, tb.safePolygon)({ blockPointerEvents: true }), mouseOnly: true, move: true, restMs: c2, delay: { open: c2, close: p2 }, shouldOpen: c2 > 0 ? () => N2.select("allowMouseEnter") : void 0, triggerElementRef: I2, externalTree: O2, isClosing: () => "ending" === b2.select("transitionStatus"), guardStaleOpen: true }), q2 = (0, tE.useClick)(S2, { enabled: !F2, event: "mousedown", toggle: !d2, ignoreMouse: d2, stickIfOpen: false }).reference ?? k.EMPTY_OBJECT, J2 = b2.useState("triggerProps", true);
    delete J2.id;
    let X2 = b2.useState("openMethod"), Q2 = b2.useState("lastOpenChangeReason") === _.REASONS.listNavigation || "keyboard" === X2, Z2 = R2 && Q2 && A.platform.screenReader.voiceOver;
    return (0, h.useRenderElement)("div", e10, { state: { disabled: F2, highlighted: V2, open: R2 }, stateAttributesMapping: w.triggerOpenStateMapping, props: [q2, $2, J2, W2, Z2 ? tU : void 0, { "aria-controls": P2, tabIndex: R2 || V2 ? 0 : -1, onBlur() {
      V2 && N2.set("activeIndex", null);
    } }, f2, U2], ref: [t10, m2.ref, Y2, j2, T2] });
  });
  var tG = e.i(285630);
  try {
    var t$ = "u" > typeof window ? window : e.g;
    t$._sentryModuleMetadata = t$._sentryModuleMetadata || {}, t$._sentryModuleMetadata[new t$.Error().stack] = Object.assign({}, t$._sentryModuleMetadata[new t$.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  class tq extends tG.BasePopupHandle {
    constructor() {
      super(Object.assign(new ti.NullStore(Object.freeze(tg()), Object.freeze(ty()), tc), { setOpen: k.NOOP }), "Menu");
    }
    open(e10) {
      this.openByTrigger(e10);
    }
    close() {
      this.closePopup();
    }
    get isOpen() {
      return this.attachedStore?.select("open") ?? false;
    }
  }
  e.s(["Arrow", 0, m, "Backdrop", 0, b, "CheckboxItem", 0, G, "CheckboxItemIndicator", 0, X, "Group", 0, et, "GroupLabel", 0, ea, "Handle", 0, tq, "Item", 0, es, "LinkItem", 0, el, "Popup", 0, ef, "Portal", 0, em, "Positioner", 0, ej, "RadioGroup", 0, eL, "RadioItem", 0, eF, "RadioItemIndicator", 0, eV, "Root", 0, tm, "Separator", 0, tV, "SubmenuRoot", 0, tx, "SubmenuTrigger", 0, tY, "Trigger", 0, tD, "Viewport", 0, tF, "createHandle", 0, function() {
    return new tq();
  }], 315809);
  var tJ = e.i(315809), tJ = tJ;
  try {
    var tX = "u" > typeof window ? window : e.g;
    tX._sentryModuleMetadata = tX._sentryModuleMetadata || {}, tX._sentryModuleMetadata[new tX.Error().stack] = Object.assign({}, tX._sentryModuleMetadata[new tX.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var tQ = e.i(517124);
  try {
    var tZ = "u" > typeof window ? window : e.g;
    tZ._sentryModuleMetadata = tZ._sentryModuleMetadata || {}, tZ._sentryModuleMetadata[new tZ.Error().stack] = Object.assign({}, tZ._sentryModuleMetadata[new tZ.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let t0 = a.forwardRef(function(e10, t10) {
    let { render: r2, className: n2, style: o2, ...s2 } = e10, { setAnchor: i2, actionsRef: l2, internalBackdropRef: d2, backdropRef: c2, positionerRef: p2, allowMouseUpTriggerRef: y2, initialCursorPointRef: g2, rootId: f2 } = u(false), { store: v2 } = M(false), m2 = v2.useState("open"), x2 = v2.useState("disabled"), b2 = a.useRef(null), E2 = a.useRef(null), k2 = (0, ex.useTimeout)(), R2 = (0, ex.useTimeout)(), S2 = a.useRef(false), O2 = a.useRef(null);
    function P2(e11, t11, r3) {
      let n3 = r3.type.startsWith("touch");
      g2.current = { x: e11, y: t11 }, i2({ getBoundingClientRect: () => DOMRect.fromRect({ width: 10 * !!n3, height: 10 * !!n3, x: e11, y: t11 }) }), S2.current = false, l2.current?.setOpen(true, (0, U.createChangeEventDetails)(_.REASONS.triggerPress, r3)), R2.start(500, () => {
        S2.current = true;
      });
    }
    function C2() {
      k2.clear(), E2.current = null;
    }
    return a.useEffect(() => () => {
      O2.current?.abort();
    }, []), a.useEffect(() => {
      let e11 = (0, e$.ownerDocument)(b2.current);
      return (0, tQ.addEventListener)(e11, "contextmenu", function(e12) {
        if (x2) return;
        let t11 = (0, eZ.getTarget)(e12);
        ((0, eZ.contains)(b2.current, t11) || (0, eZ.contains)(d2.current, t11) || (0, eZ.contains)(c2.current, t11)) && e12.preventDefault();
      });
    }, [c2, x2, d2]), (0, h.useRenderElement)("div", e10, { state: { open: m2 }, ref: [b2, t10], props: [{ onContextMenu: function(e11) {
      if (x2) return;
      y2.current = true, (0, e5.stopEvent)(e11), P2(e11.clientX, e11.clientY, e11.nativeEvent);
      let t11 = (0, e$.ownerDocument)(b2.current);
      O2.current?.abort();
      let r3 = new AbortController();
      O2.current = r3, t11.addEventListener("mouseup", (e12) => {
        if (y2.current = false, !S2.current) return;
        R2.clear(), S2.current = false;
        let t12 = (0, eZ.getTarget)(e12);
        (0, eZ.contains)(p2.current, t12) || f2 && t12 && tj(t12) === f2 || l2.current?.setOpen(false, (0, U.createChangeEventDetails)(_.REASONS.cancelOpen, e12));
      }, { once: true, signal: r3.signal });
    }, onTouchStart: function(e11) {
      if (x2 || (y2.current = false, 1 !== e11.touches.length)) return void C2();
      e11.stopPropagation();
      let t11 = e11.touches[0], r3 = { x: t11.clientX, y: t11.clientY };
      E2.current = r3, k2.start(500, () => {
        P2(r3.x, r3.y, e11.nativeEvent);
      });
    }, onTouchMove: function(e11) {
      if (1 !== e11.touches.length) return void C2();
      if (k2.isStarted() && E2.current) {
        let t11 = e11.touches[0], r3 = Math.abs(t11.clientX - E2.current.x), n3 = Math.abs(t11.clientY - E2.current.y);
        (r3 > 10 || n3 > 10) && C2();
      }
    }, onTouchEnd: C2, onTouchCancel: C2, style: { WebkitTouchCallout: "none" } }, s2], stateAttributesMapping: w.pressableTriggerOpenStateMapping });
  });
  e.s(["Arrow", 0, m, "Backdrop", 0, b, "CheckboxItem", 0, G, "CheckboxItemIndicator", 0, X, "Group", 0, et, "GroupLabel", 0, ea, "Item", 0, es, "LinkItem", 0, el, "Popup", 0, ef, "Portal", 0, em, "Positioner", 0, ej, "RadioGroup", 0, eL, "RadioItem", 0, eF, "RadioItemIndicator", 0, eV, "Root", 0, function(e10) {
    let [t10, n2] = a.useState({ getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, x: 0, y: 0 }) }), s2 = a.useRef(null), i2 = a.useRef(null), u2 = a.useRef(null), d2 = a.useRef(null), c2 = a.useRef(true), p2 = a.useRef(null), y2 = (0, o.useId)(), g2 = a.useMemo(() => ({ anchor: t10, setAnchor: n2, actionsRef: u2, backdropRef: s2, internalBackdropRef: i2, positionerRef: d2, allowMouseUpTriggerRef: c2, initialCursorPointRef: p2, rootId: y2 }), [t10, y2]);
    return (0, r.jsx)(l.Provider, { value: g2, children: (0, r.jsx)(f.Provider, { value: void 0, children: (0, r.jsx)(tJ.Root, { ...e10 }) }) });
  }, "Separator", 0, tV, "SubmenuRoot", 0, tx, "SubmenuTrigger", 0, tY, "Trigger", 0, t0], 34485);
  var t1 = e.i(34485), t1 = t1, t5 = e.i(140802), t2 = e.i(112086), t8 = e.i(665143), t3 = e.i(224253), t4 = e.i(189306), t6 = e.i(962027), t9 = e.i(167815), t7 = e.i(139895), re = e.i(662904), rt = e.i(551360);
  try {
    var rr = window;
    rr._sentryModuleMetadata = rr._sentryModuleMetadata || {}, rr._sentryModuleMetadata[new rr.Error().stack] = Object.assign({}, rr._sentryModuleMetadata[new rr.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  async function rn(e10) {
    let t10 = await fetch(e10), r2 = await t10.text();
    await navigator.clipboard.writeText(r2);
  }
  function ra() {
    return (0, r.jsxs)("div", { className: "flex items-center gap-1.75", children: [(0, r.jsx)(re.CheckCircle14, {}), (0, r.jsx)("p", { className: "text-sm", children: "SVG copied to clipboard." })] });
  }
  e.s(["SiteHeaderLockupWithContextMenu", 0, function() {
    let e10 = (0, a.useRef)(null), [t10, n2] = (0, a.useState)(false), o2 = (0, t7.useIsTouchScreen)(), s2 = (0, t8.useReducedMotion)(), i2 = (0, a.useCallback)(async () => {
      await rn("/brand/v1/attio-logomark.svg"), (0, t4.toast)(() => (0, r.jsx)(ra, {}));
    }, []), l2 = (0, a.useCallback)(async () => {
      await rn("/brand/v1/attio-lockup.svg"), (0, t4.toast)(() => (0, r.jsx)(ra, {}));
    }, []);
    return (0, r.jsxs)(t1.Root, { disabled: o2, open: t10, onOpenChange: n2, children: [(0, r.jsx)(t1.Trigger, { render: (0, r.jsx)(t3.default, { ref: e10, className: "-mx-1 -my-2 rounded-xl px-1 py-2", href: "/", "aria-label": "Attio homepage", referrerPolicy: "same-origin", children: (0, r.jsx)(t6.AttioLockup, { className: "h-6 text-primary-foreground" }) }) }), (0, r.jsx)(t5.AnimatePresence, { children: t10 && (0, r.jsx)(t1.Portal, { keepMounted: true, className: "relative isolate z-(--context-menu-portal-z-index)", children: (0, r.jsx)(t1.Positioner, { anchor: e10, side: "bottom", align: "start", sideOffset: 8, children: (0, r.jsxs)(t1.Popup, { render: (0, r.jsx)(t2.motion.div, { initial: s2 ? { opacity: 0 } : { filter: "blur(2px)", opacity: 0, y: -2 }, animate: s2 ? { opacity: 1, transition: { duration: 0 } } : { filter: "blur(0px)", opacity: 1, scale: 1, transition: { duration: 0.05, ease: "easeInOut" }, y: 0 }, exit: s2 ? { opacity: 0, transition: { duration: 0 } } : { filter: "blur(2px)", opacity: 0, scale: 1.02, transition: { duration: 0.15, ease: "easeInOut" } }, className: (0, rt.cn)("flex flex-col gap-px rounded-xl p-1", "bg-white-100 dark:bg-secondary-background", "shadow-[0px_0px_0px_1px_oklch(0_0_0_/_0.1),0px_1px_2px_0px_oklch(0_0_0_/_0.01),0px_2px_4px_-1px_oklch(0_0_0_/_0.02),0px_4px_8px_-2px_oklch(0_0_0_/_0.03),0px_8px_16px_-4px_oklch(0_0_0_/_0.04),0px_16px_32px_-8px_oklch(0_0_0_/_0.05)]", "dark:shadow-[0px_0px_0px_1px_oklch(1_0_0_/_0.2),0px_1px_2px_0px_oklch(0_0_0_/_0.05),0px_2px_4px_-1px_oklch(0_0_0_/_0.02),0px_4px_8px_-2px_oklch(0_0_0_/_0.03),0px_8px_16px_-4px_oklch(0_0_0_/_0.04),0px_16px_32px_-8px_oklch(0_0_0_/_0.05)]") }), children: [(0, r.jsx)(t1.Item, { onClick: l2, nativeButton: true, render: (0, r.jsx)(t9.Button, { variant: "ghost", size: "sm", className: "h-8 justify-start rounded-lg", children: "Copy wordmark as SVG" }) }), (0, r.jsx)(t1.Item, { onClick: i2, nativeButton: true, render: (0, r.jsx)(t9.Button, { variant: "ghost", size: "sm", className: "h-8 justify-start rounded-lg", children: "Copy logo as SVG" }) }), (0, r.jsx)(t1.Separator, { className: "mx-1 my-1 h-px bg-subtle-stroke" }), (0, r.jsx)(t1.Item, { render: (0, r.jsx)(t9.Button, { variant: "ghost", size: "sm", className: "h-8 justify-start rounded-lg", asChild: true, children: (0, r.jsx)(t3.default, { href: "/brand", children: "Brand guidelines" }) }) })] }) }) }) })] });
  }], 209404);
}, 491611, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(359158), n = e.i(167815), a = e.i(397441), o = e.i(551360);
  try {
    var s = window;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function i({ className: e2, ...r2 }) {
    return (0, t.jsx)("svg", { className: (0, o.cn)("text-black-500 dark:text-white-500", e2), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", fill: "none", ...r2, children: (0, t.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2", d: "M15 6H3M15 12H3" }) });
  }
  e.s(["SiteHeaderMenuButton", 0, function({ className: e2 }) {
    let { isMenuOpen: s2, setIsMenuOpen: l } = (0, r.useSiteHeaderContext)();
    return (0, t.jsx)(n.Button, { variant: "ghost", size: "smSquare", className: (0, o.cn)("lg:hidden", e2), "data-site-header-mobile-menu-trigger": true, "aria-label": s2 ? "Close menu" : "Open menu", "aria-controls": "site-header-mobile-menu", "aria-expanded": s2, "aria-haspopup": "dialog", onClick: () => l(!s2), children: s2 ? (0, t.jsx)(a.Cross18, { className: "h-6 w-6" }) : (0, t.jsx)(i, { className: "h-6 w-6" }) });
  }]);
}, 765097, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(224253), n = e.i(459451), n = n, a = e.i(78915), o = e.i(856757), s = e.i(79587), i = e.i(906180), l = e.i(852379), u = e.i(359158), d = e.i(65228), c = e.i(145408), p = e.i(551360);
  try {
    var y = window;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["SiteHeaderMenuMobile", 0, function({ navigation: e2 }) {
    let { isMenuOpen: y2, setIsMenuOpen: g } = (0, u.useSiteHeaderContext)(), f = (0, o.useRef)(null);
    return (0, t.jsx)(s.Drawer.Root, { handleOnly: true, autoFocus: true, modal: true, open: y2, onOpenChange: g, direction: "top", children: (0, t.jsxs)(s.Drawer.Portal, { children: [(0, t.jsx)(s.Drawer.Overlay, { className: "fixed inset-0 z-(--mobile-nav-drawer-overlay-z-index) bg-primary-background" }), (0, t.jsx)(s.Drawer.Content, { id: "site-header-mobile-menu", "aria-describedby": void 0, onCloseAutoFocus: (e3) => {
      e3.preventDefault();
      let t2 = document.querySelector("[data-site-header-mobile-menu-trigger]");
      t2?.focus();
    }, className: (0, p.cn)("fixed inset-0 top-(--site-header-height) flex flex-col overflow-hidden border-subtle-stroke border-b bg-primary-background", "z-(--mobile-nav-drawer-content-z-index)"), children: (0, t.jsxs)("div", { ref: f, onKeyDownCapture: function(e3) {
      if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e3.key)) return;
      let t2 = Array.from(f.current?.querySelectorAll("button:not([disabled]), a[href]") ?? []).filter((e4) => null !== e4.offsetParent);
      if (0 === t2.length) return;
      let r2 = t2.indexOf(document.activeElement);
      if (-1 === r2) return;
      e3.preventDefault(), e3.stopPropagation();
      let n2 = r2;
      "ArrowDown" === e3.key ? n2 = (r2 + 1) % t2.length : "ArrowUp" === e3.key ? n2 = (r2 - 1 + t2.length) % t2.length : "Home" === e3.key ? n2 = 0 : "End" === e3.key && (n2 = t2.length - 1), t2[n2]?.focus();
    }, className: "absolute inset-0 overflow-y-scroll pb-20", children: [(0, t.jsx)(a.VisuallyHidden.Root, { asChild: true, children: (0, t.jsx)(s.Drawer.Title, { children: "Menu" }) }), (0, t.jsx)(n.Root, { className: "container", type: "multiple", children: e2.map((e3) => (0, t.jsxs)(o.Fragment, { children: ["navigationMenu" === e3.component && (0, t.jsxs)(n.Item, { className: "border-subtle-stroke border-b pt-2.5 pb-[9px]", value: e3._uid ?? "", children: [(0, t.jsx)(n.Header, { className: "flex", children: (0, t.jsxs)(n.Trigger, { className: (0, p.cn)("group flex flex-1 cursor-pointer items-center justify-between rounded-[12px] px-2 py-2 outline-hidden"), children: [(0, t.jsx)("span", { className: "text-base text-primary-foreground", children: e3.title }), (0, t.jsx)(d.ChevronDown, { className: "h-5 w-5 text-black-500 transition-transform duration-300 ease-in-out group-data-open:rotate-180 motion-reduce:transition-none dark:text-white-500", "aria-hidden": true })] }) }), (0, t.jsx)(n.Content, { className: "overflow-hidden data-closed:animate-slideUp data-open:animate-slideDown motion-reduce:data-closed:animate-none motion-reduce:data-open:animate-none", children: (0, t.jsx)("div", { className: "flex flex-col gap-y-1.5 px-1.5", children: e3.columns.map((r2, n2) => (0, t.jsxs)(o.Fragment, { children: [0 !== n2 && (0, t.jsx)("hr", { className: "mb-2 border-weak-stroke" }), (0, t.jsx)("div", { className: (0, p.cn)("flex flex-col", { "pb-2.5": e3.columns.length > 1 }), children: (0, t.jsx)("ul", { className: "flex flex-col gap-y-0.5", children: r2.links.map((e4) => (0, t.jsxs)("li", { children: ["navigationMenuTitle" === e4.component && (0, t.jsx)("p", { className: (0, p.cn)("mt-3.5 mb-2 px-2 text-overline"), children: e4.title }), "navigationMenuLinkFeatured" === e4.component && !e4.isHidden && (0, t.jsx)(l.SiteHeaderNavigationMenuLinkFeatured, { link: e4, className: "!px-1 rounded-[19px]" }), "navigationMenuLinkBase" === e4.component && (0, t.jsx)(i.SiteHeaderNavigationMenuLinkBase, { link: e4 })] }, e4._uid)) }) })] }, r2._uid)) }) })] }), "link" === e3.component && (0, t.jsx)("div", { className: "border-subtle-stroke border-b pt-2.5 pb-[9px]", children: (0, t.jsx)(r.default, { className: (0, p.cn)("inline-block w-full rounded-[12px] px-2 py-2 text-secondary-foreground outline-hidden"), ...(0, c.getStoryblokLinkProps)(e3.link), children: e3.label }) })] }, e3._uid)) })] }) })] }) });
  }], 765097);
}, 836644, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(249901), n = e.i(167815), a = e.i(150669), o = e.i(145408);
  try {
    var s = window;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function i({ cta: e2 }) {
    let { link: r2, action: s2, category: l2, button: u2 } = e2, d = (0, o.getStoryblokLinkProps)(r2), c = (0, a.useAnalyticsTrack)(l2, s2), p = u2[0];
    if (!p) return null;
    let { label: y, variant: g } = p;
    return (0, t.jsx)(n.Button, { variant: g, size: "responsive", onClick: () => c(), asChild: true, children: (0, t.jsx)("a", { ...d, children: y }) });
  }
  function l({ cta: e2 }) {
    let { button: r2 } = e2, o2 = (0, a.useAnalyticsTrack)("product", "sign_up"), s2 = r2[0];
    if (!s2) return null;
    let { label: i2, variant: u2 } = s2;
    return (0, t.jsx)(n.Button, { variant: u2, size: "sm", onClick: () => o2(), asChild: true, children: (0, t.jsx)("a", { href: "https://app.attio.com/welcome/sign-in", children: i2 }) });
  }
  function u({ cta: e2 }) {
    let { button: n2 } = e2, a2 = n2[0];
    if (!a2) return null;
    let { label: o2, variant: s2 } = a2;
    return (0, t.jsx)(r.CtaTalkToSales, { variant: s2, children: o2 });
  }
  e.s(["SiteHeaderNavigationCta", 0, function({ cta: e2 }) {
    return "ctaLink" === e2.component ? (0, t.jsx)(i, { cta: e2 }) : "ctaGetStarted" === e2.component ? (0, t.jsx)(l, { cta: e2 }) : "talkToSales" === e2.component ? (0, t.jsx)(u, { cta: e2 }) : null;
  }]);
}, 906180, 852379, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(508324), n = e.i(167815), a = e.i(145408), o = e.i(551360);
  try {
    var s = window;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["SiteHeaderNavigationMenuLinkBase", 0, function({ link: e2, className: s2, ref: i2, ...l2 }) {
    let { title: u2, link: d2 } = e2;
    return (0, t.jsx)(n.Button, { variant: "ghost", size: "xs", className: (0, o.cn)("!text-sm mt-1 w-full justify-start whitespace-nowrap text-primary-foreground", "before:absolute before:-top-1.75 before:-right-px before:-bottom-0.75 before:-left-px", s2), asChild: true, ...l2, children: (0, t.jsx)(r.AttioLink, { ref: i2, ...(0, a.getStoryblokLinkProps)(d2), children: u2 }) });
  }], 906180);
  var i = e.i(269916), l = e.i(895587);
  try {
    var u = window;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function d({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "40", height: "40", fill: "none", ...e2, children: (0, t.jsxs)("g", { className: (0, o.cn)("transition-colors duration-150ms ease-out", "stroke-white-700/40 group-hover:stroke-white-700/70", "dark:stroke-black-500/40 dark:group-hover:stroke-black-500/70"), strokeWidth: ".7", strokeMiterlimit: "10", children: [(0, t.jsx)("path", { d: "M40 14H0M40 26H0M19.947 0 20 40", strokeDasharray: "1.6 1.6" }), (0, t.jsx)("path", { d: "M35 0v40M5 0v40M0 5h40M0 35h40" })] }) });
  }
  e.s(["SiteHeaderNavigationMenuLinkFeatured", 0, function({ className: e2, link: s2, ...u2 }) {
    let { lightIcon: c, darkIcon: p, title: y, description: g, link: f } = s2;
    return (0, t.jsx)(n.Button, { variant: "ghost", size: "md", className: (0, o.cn)("group h-fit w-full items-center justify-start gap-x-3 p-1.5", "md:p-2", "before:absolute before:-top-0.75 before:-right-1.75 before:-bottom-0.75 before:-left-1.75", e2), asChild: true, ...u2, children: (0, t.jsxs)(r.AttioLink, { ...(0, a.getStoryblokLinkProps)(f), children: [(0, t.jsxs)("div", { className: (0, o.cn)("relative h-10 w-10 shrink-0 overflow-hidden rounded-[13px] border border-subtle-stroke", "md:rounded-none md:border-0"), children: [(0, t.jsx)(d, { className: "absolute inset-0" }), (0, t.jsx)(i.AttioStoryblokImage, { imageAsset: c, className: "isolate size-10 dark:hidden" }), (0, t.jsx)(i.AttioStoryblokImage, { imageAsset: p, className: "isolate hidden size-10 dark:block" })] }), (0, t.jsxs)("div", { className: "flex w-full min-w-0 flex-col pr-2", children: [(0, t.jsxs)("div", { className: "flex w-full items-baseline justify-between gap-1.5 text-primary-foreground", children: [(0, t.jsx)("span", { className: "truncate text-sm", children: y }), (0, t.jsx)(l.ArrowRight12, { className: (0, o.cn)("relative shrink-0 text-secondary-foreground opacity-0 max-lg:hidden", "-translate-x-0.25 transition-[opacity,translate] duration-400 ease-in-out", "group-hover:translate-0 group-hover:opacity-100 group-hover:duration-300", "group-active:translate-0 group-active:opacity-100 group-active:duration-50") })] }), (0, t.jsx)("p", { className: "truncate text-accent-foreground text-sm", children: g })] })] }) });
  }], 852379);
}, 414042, (e) => {
  "use strict";
  var t, r, n = e.i(68982);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  e.s([], 558635), e.i(558635);
  var o = e.i(856757), s = e.i(880269), i = e.i(620715), l = e.i(424404), u = e.i(599607), d = e.i(219710), c = e.i(872191), p = e.i(635338), y = e.i(256777), g = e.i(579180);
  try {
    var f = "u" > typeof window ? window : e.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let M = o.createContext(void 0);
  function h(e10) {
    let t2 = o.useContext(M);
    if (void 0 === t2 && !e10) throw Error((0, g.default)(41));
    return t2;
  }
  let w = o.createContext(void 0);
  function v() {
    return o.useContext(w);
  }
  var m = e.i(811336), _ = e.i(616318), x = e.i(296232);
  try {
    var b = "u" > typeof window ? window : e.g;
    b._sentryModuleMetadata = b._sentryModuleMetadata || {}, b._sentryModuleMetadata[new b.Error().stack] = Object.assign({}, b._sentryModuleMetadata[new b.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let E = ((t = {}).availableWidth = "--available-width", t.availableHeight = "--available-height", t.anchorWidth = "--anchor-width", t.anchorHeight = "--anchor-height", t.transformOrigin = "--transform-origin", t.positionerWidth = "--positioner-width", t.positionerHeight = "--positioner-height", t);
  try {
    var k = "u" > typeof window ? window : e.g;
    k._sentryModuleMetadata = k._sentryModuleMetadata || {}, k._sentryModuleMetadata[new k.Error().stack] = Object.assign({}, k._sentryModuleMetadata[new k.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let R = ((r = {}).popupWidth = "--popup-width", r.popupHeight = "--popup-height", r);
  try {
    var S = "u" > typeof window ? window : e.g;
    S._sentryModuleMetadata = S._sentryModuleMetadata || {}, S._sentryModuleMetadata[new S.Error().stack] = Object.assign({}, S._sentryModuleMetadata[new S.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function O(e10, t2, r2, n2) {
    e10.style.setProperty(R.popupWidth, `${r2}px`), e10.style.setProperty(R.popupHeight, `${n2}px`), t2.style.setProperty(E.positionerWidth, `${r2}px`), t2.style.setProperty(E.positionerHeight, `${n2}px`);
  }
  try {
    var P = "u" > typeof window ? window : e.g;
    P._sentryModuleMetadata = P._sentryModuleMetadata || {}, P._sentryModuleMetadata[new P.Error().stack] = Object.assign({}, P._sentryModuleMetadata[new P.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let C = /* @__PURE__ */ new Set([x.REASONS.triggerHover, x.REASONS.outsidePress, x.REASONS.focusOut]), A = o.forwardRef(function(e10, t2) {
    let { defaultValue: r2 = null, value: a2, onValueChange: y2, actionsRef: g2, delay: f2 = 50, closeDelay: w2 = 50, orientation: v2 = "horizontal", onOpenChangeComplete: b2 } = e10, k2 = null != (0, c.useFloatingParentNodeId)(), R2 = h(true), [S2, P2] = (0, i.useControlled)({ controlled: a2, default: r2, name: "NavigationMenu", state: "value" }), A2 = null != S2, I2 = o.useRef(void 0), T2 = o.useRef(null), [N2, B2] = o.useState(null), [L2, D2] = o.useState(null), [K2, H2] = o.useState(null), [F2, W2] = o.useState(null), [V2, z2] = o.useState(null), [U2, Y2] = o.useState(void 0), [G2, $2] = o.useState(false), q2 = o.useRef(null), J2 = o.useRef(null), X2 = o.useRef(null), Q2 = o.useRef(null), Z2 = o.useRef(null), ee2 = o.useRef(null), et2 = o.useRef({ abortController: null, owner: null }), { mounted: er2, setMounted: en2, transitionStatus: ea2 } = (0, _.useTransitionStatus)(A2);
    (0, u.useIsoLayoutEffect)(() => {
      let e11, t3;
      if (A2 || !N2 || !L2) return;
      let r3 = (e11 = parseFloat(N2.style.getPropertyValue(E.positionerWidth)) || 0, t3 = parseFloat(N2.style.getPropertyValue(E.positionerHeight)) || 0, e11 <= 0 || t3 <= 0 ? null : { width: e11, height: t3 });
      r3 && O(L2, N2, r3.width, r3.height);
    }, [A2, L2, N2]), o.useEffect(() => {
      $2(false);
    }, [S2]);
    let eo2 = (0, l.useStableCallback)((e11, t3) => {
      null == e11 && (I2.current = t3.reason), e11 !== S2 && y2?.(e11, t3), !t3.isCanceled && (null == e11 && (z2(null), Y2(void 0)), P2(e11), k2 && null == e11 && t3.reason === x.REASONS.linkPress && R2 && R2.setValue(null, t3));
    }), es2 = (0, l.useStableCallback)(() => {
      let e11 = (0, d.ownerDocument)(T2.current), t3 = (0, p.activeElement)(e11);
      !(I2.current && C.has(I2.current)) && (0, s.isHTMLElement)(q2.current) && (t3 === (0, d.ownerDocument)(L2).body || (0, p.contains)(L2, t3)) && L2 && (q2.current.focus({ preventScroll: true }), q2.current = void 0), en2(false), b2?.(false), z2(null), Y2(void 0), J2.current = null, I2.current = void 0;
    });
    o.useImperativeHandle(g2, () => ({ unmount: es2 }), [es2]), (0, m.useOpenChangeComplete)({ enabled: !g2, open: A2, ref: { current: L2 }, onComplete() {
      A2 || es2();
    } }), (0, m.useOpenChangeComplete)({ enabled: !g2, open: A2, ref: { current: F2 }, onComplete() {
      A2 || es2();
    } });
    let ei2 = A2 ? V2 : null, el2 = o.useMemo(() => ({ open: A2, value: S2, setValue: eo2, mounted: er2, transitionStatus: ea2, positionerElement: N2, setPositionerElement: B2, popupElement: L2, setPopupElement: D2, viewportElement: K2, setViewportElement: H2, viewportTargetElement: F2, setViewportTargetElement: W2, activationDirection: ei2, setActivationDirection: z2, floatingRootContext: U2, setFloatingRootContext: Y2, currentContentRef: J2, nested: k2, rootRef: T2, beforeInsideRef: X2, afterInsideRef: Q2, beforeOutsideRef: Z2, afterOutsideRef: ee2, prevTriggerElementRef: q2, popupAutoSizeResetRef: et2, delay: f2, closeDelay: w2, orientation: v2, viewportInert: G2, setViewportInert: $2 }), [A2, S2, eo2, er2, ea2, N2, L2, K2, F2, ei2, U2, k2, f2, w2, v2, G2]), eu2 = (0, n.jsx)(M.Provider, { value: el2, children: (0, n.jsx)(j, { componentProps: e10, forwardedRef: t2, children: e10.children }) });
    return k2 ? eu2 : (0, n.jsx)(c.FloatingTree, { children: eu2 });
  });
  function j(e10) {
    let { className: t2, render: r2, defaultValue: a2, value: o2, onValueChange: s2, actionsRef: i2, delay: l2, closeDelay: u2, orientation: d2, onOpenChangeComplete: p2, style: g2, ...f2 } = e10.componentProps, M2 = (0, c.useFloatingNodeId)(), { rootRef: v2, nested: m2, open: _2 } = h(), x2 = (0, y.useRenderElement)(m2 ? "div" : "nav", e10.componentProps, { state: { open: _2, nested: m2 }, ref: [e10.forwardedRef, v2], props: f2 });
    return (0, n.jsx)(w.Provider, { value: M2, children: (0, n.jsx)(c.FloatingNode, { id: M2, children: x2 }) });
  }
  var I = e.i(550034), T = e.i(535896), N = e.i(452341), B = e.i(594553);
  try {
    var L = "u" > typeof window ? window : e.g;
    L._sentryModuleMetadata = L._sentryModuleMetadata || {}, L._sentryModuleMetadata[new L.Error().stack] = Object.assign({}, L._sentryModuleMetadata[new L.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var D = e.i(548302), K = e.i(925202), H = e.i(775368);
  try {
    var F = "u" > typeof window ? window : e.g;
    F._sentryModuleMetadata = F._sentryModuleMetadata || {}, F._sentryModuleMetadata[new F.Error().stack] = Object.assign({}, F._sentryModuleMetadata[new F.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var W = "u" > typeof window ? window : e.g;
    W._sentryModuleMetadata = W._sentryModuleMetadata || {}, W._sentryModuleMetadata[new W.Error().stack] = Object.assign({}, W._sentryModuleMetadata[new W.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let V = [];
  var z = e.i(322042), U = e.i(675932);
  try {
    var Y = "u" > typeof window ? window : e.g;
    Y._sentryModuleMetadata = Y._sentryModuleMetadata || {}, Y._sentryModuleMetadata[new Y.Error().stack] = Object.assign({}, Y._sentryModuleMetadata[new Y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function G(e10) {
    let { render: t2, className: r2, style: a2, refs: s2 = I.EMPTY_ARRAY, props: i2 = I.EMPTY_ARRAY, state: d2 = I.EMPTY_OBJECT, stateAttributesMapping: c2, highlightedIndex: g2, onHighlightedIndexChange: f2, orientation: M2, grid: h2, loopFocus: w2, onLoop: v2, enableHomeAndEndKeys: m2, onMapChange: _2, stopEventPropagation: x2 = true, rootRef: b2, disabledIndices: E2, modifierKeys: k2, highlightItemOnHover: R2 = false, tag: S2 = "div", ...O2 } = e10, { props: P2, highlightedIndex: C2, onHighlightedIndexChange: A2, elementsRef: j2, onMapChange: T2, relayKeyboardEvent: N2 } = (function(e11) {
      let { loopFocus: t3 = true, orientation: r3 = "both", grid: n2, onLoop: a3, direction: s3, highlightedIndex: i3, onHighlightedIndexChange: d3, rootRef: c3, enableHomeAndEndKeys: y2 = false, stopEventPropagation: g3, disabledIndices: f3, modifierKeys: M3 = V } = e11, [h3, w3] = o.useState(0), v3 = null != n2, m3 = o.useRef(null), _3 = (0, D.useMergedRefs)(m3, c3), x3 = o.useRef([]), b3 = o.useRef(false), E3 = i3 ?? h3, k3 = (0, l.useStableCallback)((e12, t4 = false) => {
        if ((d3 ?? w3)(e12), t4) {
          let t5 = x3.current[e12];
          (0, K.scrollIntoViewIfNeeded)(m3.current, t5, s3, r3);
        }
      }), R3 = (0, l.useStableCallback)((e12) => {
        if (0 === e12.size || b3.current) return;
        b3.current = true;
        let t4 = Array.from(e12.keys()), n3 = t4.find((e13) => e13?.hasAttribute("data-composite-item-active")) ?? null, a4 = n3 ? e12.get(n3)?.index ?? -1 : -1;
        if (-1 !== a4) k3(a4);
        else if ((0, H.isListIndexDisabled)(t4, E3, f3)) {
          let e13 = (0, H.findNonDisabledListIndex)(t4, { disabledIndices: f3 });
          (0, H.isIndexOutOfListBounds)(t4, e13) || k3(e13);
        }
        (0, K.scrollIntoViewIfNeeded)(m3.current, n3, s3, r3);
      });
      (0, u.useIsoLayoutEffect)(() => {
        if (null == f3 || null != i3 || !b3.current) return;
        let e12 = x3.current;
        if ((0, H.isListIndexDisabled)(e12, E3, f3)) {
          let t4 = (0, H.findNonDisabledListIndex)(e12, { disabledIndices: f3 });
          (0, H.isIndexOutOfListBounds)(e12, t4) || k3(t4);
        }
      }, [f3, i3, E3, x3, k3]);
      let S3 = (0, l.useStableCallback)((e12, t4, r4) => a3 ? a3(e12, t4, r4, x3) : r4), O3 = (0, l.useStableCallback)((e12) => {
        let o2 = e12.key === K.HOME || e12.key === K.END;
        if (!K.COMPOSITE_KEYS.has(e12.key) || !y2 && o2 || (function(e13, t4) {
          for (let r4 of K.MODIFIER_KEYS) if (!t4.includes(r4) && e13.getModifierState(r4)) return true;
          return false;
        })(e12, M3) || !m3.current) return;
        let i4 = "rtl" === s3, l2 = i4 ? K.ARROW_LEFT : K.ARROW_RIGHT, u2 = i4 ? K.ARROW_RIGHT : K.ARROW_LEFT, d4 = "vertical" === r3 ? K.ARROW_DOWN : l2, c4 = "vertical" === r3 ? K.ARROW_UP : u2, h4 = (0, p.getTarget)(e12.nativeEvent);
        if (null != h4 && (0, K.isNativeInput)(h4) && !(null == h4 || h4.hasAttribute("disabled") || "true" === h4.getAttribute("aria-disabled"))) {
          let t4 = h4.selectionStart, r4 = h4.selectionEnd, n3 = h4.value;
          if (null == t4 || e12.shiftKey || t4 !== r4 || e12.key !== c4 && t4 < n3.length || e12.key !== d4 && t4 > 0) return;
        }
        let w4 = E3, _4 = (0, H.getMinListIndex)(x3, f3), b4 = (0, H.getMaxListIndex)(x3, f3);
        null != n2 && (w4 = n2({ disabledIndices: f3, elementsRef: x3, event: e12, highlightedIndex: E3, loopFocus: t3, maxIndex: b4, minIndex: _4, onLoop: S3, orientation: r3, rtl: i4 }));
        let R4 = "vertical" !== r3 && e12.key === l2 || "horizontal" !== r3 && e12.key === K.ARROW_DOWN, O4 = "vertical" !== r3 && e12.key === u2 || "horizontal" !== r3 && e12.key === K.ARROW_UP;
        y2 && (e12.key === K.HOME ? w4 = _4 : e12.key === K.END && (w4 = b4)), w4 === E3 && (R4 || O4) && (t3 && w4 === b4 && R4 ? (w4 = _4, a3 && (w4 = a3(e12, E3, w4, x3))) : t3 && w4 === _4 && O4 ? (w4 = b4, a3 && (w4 = a3(e12, E3, w4, x3))) : w4 = (0, H.findNonDisabledListIndex)(x3.current, { startingIndex: w4, decrement: O4, disabledIndices: f3 })), w4 === E3 || (0, H.isIndexOutOfListBounds)(x3.current, w4) || (g3 && e12.stopPropagation(), (v3 || o2 || R4 || O4) && e12.preventDefault(), k3(w4, true), queueMicrotask(() => {
          x3.current[w4]?.focus();
        }));
      });
      return { props: { ref: _3, onFocus(e12) {
        let t4 = m3.current, r4 = (0, p.getTarget)(e12.nativeEvent);
        t4 && null != r4 && (0, K.isNativeInput)(r4) && r4.setSelectionRange(0, r4.value.length);
      }, onKeyDown: O3 }, highlightedIndex: E3, onHighlightedIndexChange: k3, elementsRef: x3, onMapChange: R3, relayKeyboardEvent: O3 };
    })({ grid: h2, loopFocus: w2, onLoop: v2, orientation: M2, highlightedIndex: g2, onHighlightedIndexChange: f2, rootRef: b2, stopEventPropagation: x2, enableHomeAndEndKeys: m2, direction: (0, U.useDirection)(), disabledIndices: E2, modifierKeys: k2 }), L2 = (0, y.useRenderElement)(S2, e10, { state: d2, ref: s2, props: [P2, ...i2, O2], stateAttributesMapping: c2 }), F2 = o.useMemo(() => ({ highlightedIndex: C2, onHighlightedIndexChange: A2, highlightItemOnHover: R2, relayKeyboardEvent: N2 }), [C2, A2, R2, N2]);
    return (0, n.jsx)(z.CompositeRootContext.Provider, { value: F2, children: (0, n.jsx)(B.CompositeList, { elementsRef: j2, onMapChange: (e11) => {
      _2?.(e11), T2(e11);
    }, children: L2 }) });
  }
  try {
    var $ = "u" > typeof window ? window : e.g;
    $._sentryModuleMetadata = $._sentryModuleMetadata || {}, $._sentryModuleMetadata[new $.Error().stack] = Object.assign({}, $._sentryModuleMetadata[new $.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let q = "data-base-ui-navigation-menu-trigger";
  try {
    var J = "u" > typeof window ? window : e.g;
    J._sentryModuleMetadata = J._sentryModuleMetadata || {}, J._sentryModuleMetadata[new J.Error().stack] = Object.assign({}, J._sentryModuleMetadata[new J.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let X = o.createContext(void 0);
  var Q = e.i(773557);
  try {
    var Z = "u" > typeof window ? window : e.g;
    Z._sentryModuleMetadata = Z._sentryModuleMetadata || {}, Z._sentryModuleMetadata[new Z.Error().stack] = Object.assign({}, Z._sentryModuleMetadata[new Z.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ee = o.forwardRef(function(e10, t2) {
    let { render: r2, className: a2, style: s2, ...i2 } = e10, l2 = v(), { orientation: u2, open: d2, floatingRootContext: c2, positionerElement: g2, value: f2, closeDelay: M2, viewportElement: w2, nested: m2 } = h(), _2 = o.useMemo(() => (0, Q.getEmptyRootContext)(), []), x2 = c2 || _2;
    (0, N.useHoverFloatingInteraction)(x2, { enabled: !!c2 && (null != g2 || null != w2 || null == f2), closeDelay: M2, nodeId: l2 });
    let b2 = (0, T.useDismiss)(x2, { enabled: null != g2 || null == f2, outsidePressEvent: "intentional", outsidePress(e11) {
      let t3 = (0, p.getTarget)(e11);
      return null === t3?.closest(`[${q}]`);
    } }), E2 = c2 ? b2 : void 0, k2 = { open: d2 }, R2 = m2 ? I.EMPTY_OBJECT : { onKeyDown(e11) {
      ("horizontal" === u2 && ("ArrowLeft" === e11.key || "ArrowRight" === e11.key) || "vertical" === u2 && ("ArrowUp" === e11.key || "ArrowDown" === e11.key)) && e11.stopPropagation();
    } }, S2 = [E2?.floating || I.EMPTY_OBJECT, R2, i2], O2 = (0, y.useRenderElement)("ul", e10, { state: k2, ref: t2, props: S2, enabled: m2 });
    return m2 ? (0, n.jsx)(X.Provider, { value: E2, children: O2 }) : (0, n.jsx)(X.Provider, { value: E2, children: (0, n.jsx)(G, { render: r2, className: a2, style: s2, state: k2, refs: [t2], props: S2, loopFocus: false, orientation: u2, tag: "ul" }) });
  });
  try {
    var et = "u" > typeof window ? window : e.g;
    et._sentryModuleMetadata = et._sentryModuleMetadata || {}, et._sentryModuleMetadata[new et.Error().stack] = Object.assign({}, et._sentryModuleMetadata[new et.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let er = o.createContext(void 0);
  function en() {
    let e10 = o.useContext(er);
    if (!e10) throw Error((0, g.default)(39));
    return e10;
  }
  var ea = e.i(145505);
  try {
    var eo = "u" > typeof window ? window : e.g;
    eo._sentryModuleMetadata = eo._sentryModuleMetadata || {}, eo._sentryModuleMetadata[new eo.Error().stack] = Object.assign({}, eo._sentryModuleMetadata[new eo.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let es = o.forwardRef(function(e10, t2) {
    let { render: r2, className: a2, style: s2, value: i2, ...l2 } = e10, u2 = (0, ea.useBaseUiId)(), d2 = i2 ?? u2, c2 = (0, y.useRenderElement)("li", e10, { ref: t2, props: l2 }), p2 = o.useMemo(() => ({ value: d2 }), [d2]);
    return (0, n.jsx)(er.Provider, { value: p2, children: c2 });
  });
  var ei = e.i(403432), el = e.i(208169), eu = e.i(618545), ed = e.i(573568);
  try {
    var ec = "u" > typeof window ? window : e.g;
    ec._sentryModuleMetadata = ec._sentryModuleMetadata || {}, ec._sentryModuleMetadata[new ec.Error().stack] = Object.assign({}, ec._sentryModuleMetadata[new ec.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ep = { ...ed.popupStateMapping, ...eu.transitionStatusMapping, activationDirection: (e10) => e10 ? { "data-activation-direction": e10 } : null }, ey = o.forwardRef(function(e10, t2) {
    let { render: r2, className: a2, style: s2, keepMounted: i2 = false, ...d2 } = e10, { mounted: y2, viewportElement: g2, value: f2, activationDirection: M2, currentContentRef: w2, viewportTargetElement: x2 } = h(), { value: b2 } = en(), E2 = v(), k2 = y2 && f2 === b2, R2 = o.useRef(null), [S2, O2] = o.useState(false), [P2, C2] = o.useState(false), { mounted: A2, setMounted: j2, transitionStatus: T2 } = (0, _.useTransitionStatus)(k2);
    A2 && !y2 && j2(false), (0, m.useOpenChangeComplete)({ ref: R2, open: k2, onComplete() {
      k2 || j2(false);
    } }), (0, u.useIsoLayoutEffect)(() => {
      k2 && R2.current && (w2.current = R2.current);
    }, [k2, w2]);
    let N2 = { open: k2, transitionStatus: T2, activationDirection: M2 }, B2 = (0, l.useStableCallback)((e11) => {
      e11 && k2 && (w2.current = e11);
    }), L2 = { onFocus(e11) {
      let t3 = (0, p.getTarget)(e11.nativeEvent);
      t3?.hasAttribute("data-base-ui-focus-guard") || C2(true);
    }, onBlur(e11) {
      (0, p.contains)(e11.currentTarget, e11.relatedTarget) || C2(false);
    } }, D2 = !k2 && A2 ? { style: { position: "absolute", top: 0, left: 0 }, inert: (0, el.inertValue)(!P2), ...L2 } : L2, K2 = x2 || g2, H2 = i2 && !A2, F2 = i2 && !K2 && !S2;
    return (i2 && K2 && !S2 && O2(true), F2) ? (0, n.jsx)(G, { render: r2, className: a2, style: s2, state: N2, refs: [t2], props: [D2, { hidden: true }, d2], stateAttributesMapping: ep }) : K2 && (A2 || i2) ? ei.createPortal((0, n.jsx)(c.FloatingNode, { id: E2, children: (0, n.jsx)(G, { render: r2, className: a2, style: s2, state: N2, refs: [t2, R2, B2], props: [D2, H2 ? { hidden: true } : I.EMPTY_OBJECT, d2], stateAttributesMapping: ep }) }), K2) : null;
  });
  var eg = e.i(517124), ef = e.i(479995), eM = e.i(639306), eh = e.i(54705), ew = e.i(825696), ev = e.i(581764), em = e.i(84588), e_ = e.i(803904), ex = e.i(243428), eb = e.i(848344), eE = e.i(639761), ek = e.i(66769), eR = e.i(930296), eS = e.i(867383), eO = e.i(234091), eP = e.i(143882);
  try {
    var eC = "u" > typeof window ? window : e.g;
    eC._sentryModuleMetadata = eC._sentryModuleMetadata || {}, eC._sentryModuleMetadata[new eC.Error().stack] = Object.assign({}, eC._sentryModuleMetadata[new eC.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function eA({ currentTarget: e10, relatedTarget: t2 }, r2) {
    let { popupElement: n2, rootRef: a2, tree: o2, nodeId: s2 } = r2, i2 = !!o2 && (0, eP.getNodeChildren)(o2.nodesRef.current, s2).some((e11) => (0, p.contains)(e11.context?.elements.floating, t2));
    return n2 ? !(0, p.contains)(n2, e10) && !(0, p.contains)(n2, t2) && !(0, p.contains)(a2.current, t2) && !i2 : !(0, p.contains)(a2.current, t2) && !i2;
  }
  var ej = e.i(486492), eI = e.i(523237), eT = e.i(559631), eN = e.i(142470), eB = e.i(441833);
  try {
    var eL = "u" > typeof window ? window : e.g;
    eL._sentryModuleMetadata = eL._sentryModuleMetadata || {}, eL._sentryModuleMetadata[new eL.Error().stack] = Object.assign({}, eL._sentryModuleMetadata[new eL.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let eD = { width: 0, height: 0 }, eK = o.forwardRef(function(e10, t2) {
    let { render: r2, className: a2, style: s2, nativeButton: i2 = true, disabled: d2, ...y2 } = e10, { value: g2, setValue: f2, mounted: M2, open: w2, positionerElement: m2, setActivationDirection: _2, setFloatingRootContext: b2, popupElement: k2, viewportElement: S2, transitionStatus: P2, rootRef: C2, beforeOutsideRef: A2, afterOutsideRef: j2, afterInsideRef: T2, beforeInsideRef: N2, prevTriggerElementRef: B2, popupAutoSizeResetRef: L2, currentContentRef: D2, delay: K2, closeDelay: H2, orientation: F2, setViewportInert: W2, nested: V2 } = h(), { value: z2 } = en(), Y2 = v(), G2 = (0, c.useFloatingTree)(), $2 = o.useContext(X), J2 = (0, U.useDirection)(), Q2 = (0, eM.useTimeout)(), Z2 = (0, eh.useAnimationFrame)(), ee2 = (0, eh.useAnimationFrame)(), et2 = (0, eh.useAnimationFrame)(), er2 = (0, eh.useAnimationFrame)(), [ea2, eo2] = o.useState(null), [es2, el2] = o.useState(true), [ec2, ep2] = o.useState(""), ey2 = o.useRef(null), eP2 = o.useRef(false), eC2 = o.useRef(eD), eL2 = o.useRef(false), eK2 = w2 && g2 === z2, eH2 = (0, ew.useValueAsRef)(eK2), eF2 = (null != m2 || null == g2) && !d2, eW2 = m2 || S2, eV2 = (null != eW2 || null == g2) && !d2, ez2 = (0, eT.useAnimationsFinished)(k2), eU2 = o.useCallback((e11) => {
      ey2.current = e11, eo2(e11);
    }, []), eY2 = (0, l.useStableCallback)((e11 = false) => {
      (e11 || L2.current.owner === z2) && (L2.current.abortController?.abort(), L2.current.abortController = null, L2.current.owner = null);
    });
    function eG2(e11) {
      e11.style.setProperty(R.popupWidth, "auto"), e11.style.setProperty(R.popupHeight, "auto");
    }
    function e$2(e11, t3) {
      e11.style.removeProperty(R.popupWidth), e11.style.removeProperty(R.popupHeight), t3.style.removeProperty(E.positionerWidth), t3.style.removeProperty(E.positionerHeight);
    }
    function eq2(e11) {
      eY2(true);
      let t3 = new AbortController();
      L2.current.abortController = t3, L2.current.owner = z2, ez2(() => {
        L2.current.abortController = null, L2.current.owner = null, eG2(e11);
      }, t3.signal);
    }
    (0, u.useIsoLayoutEffect)(() => {
      eK2 || (ee2.cancel(), er2.cancel(), eY2());
    }, [eK2, ee2, er2, eY2]);
    let eJ2 = (0, l.useStableCallback)((e11, t3, r3, n2) => {
      eY2(true), e$2(e11, t3);
      let { width: a3, height: o2 } = (0, eN.getCssDimensions)(e11), s3 = a3 || eC2.current.width, i3 = o2 || eC2.current.height;
      (0 === n2 || 0 === r3) && (r3 = s3, n2 = i3), e11.style.setProperty(R.popupWidth, `${r3}px`), e11.style.setProperty(R.popupHeight, `${n2}px`), t3.style.setProperty(E.positionerWidth, `${s3}px`), t3.style.setProperty(E.positionerHeight, `${i3}px`), er2.request(() => {
        eH2.current && (e11.style.setProperty(R.popupWidth, `${s3}px`), e11.style.setProperty(R.popupHeight, `${i3}px`), eq2(e11));
      });
    }), eX2 = (0, l.useStableCallback)((e11, t3, r3, n2) => {
      er2.cancel(), ee2.cancel(), eY2(true), 0 !== r3 && 0 !== n2 && (O(e11, t3, r3, n2), ee2.request(() => {
        ee2.request(() => {
          e$2(e11, t3);
          let { width: a3, height: o2 } = (0, eN.getCssDimensions)(e11), s3 = a3 || r3, i3 = o2 || n2;
          O(e11, t3, r3, n2), er2.request(() => {
            eH2.current && (O(e11, t3, s3, i3), eq2(e11));
          });
        });
      }));
    }), eQ2 = (0, l.useStableCallback)((e11, t3) => {
      er2.cancel(), eY2(true), e$2(e11, t3);
      let { width: r3, height: n2 } = (0, eN.getCssDimensions)(e11);
      0 !== r3 && 0 !== n2 && (eC2.current = { width: r3, height: n2 }, eG2(e11), t3.style.setProperty(E.positionerWidth, `${r3}px`), t3.style.setProperty(E.positionerHeight, `${n2}px`));
    }), eZ2 = (0, l.useStableCallback)((e11) => {
      let t3 = e11.style.getPropertyValue(R.popupWidth), r3 = e11.style.getPropertyValue(R.popupHeight);
      return "" === t3 || "auto" === t3 || "" === r3 || "auto" === r3 ? { size: eC2.current, syncPositioner: false } : { size: { width: e11.offsetWidth || eC2.current.width, height: e11.offsetHeight || eC2.current.height }, syncPositioner: true };
    });
    o.useEffect(() => {
      w2 || (Q2.clear(), ee2.cancel(), et2.cancel(), er2.cancel(), eY2(true), eL2.current = false, ep2(""));
    }, [Q2, w2, ee2, et2, er2, eY2]), o.useEffect(() => {
      M2 || (eC2.current = eD);
    }, [M2]), (0, u.useIsoLayoutEffect)(() => {
      if (!k2 || "function" != typeof ResizeObserver) return;
      let e11 = new ResizeObserver(() => {
        eC2.current = { width: k2.offsetWidth, height: k2.offsetHeight };
      });
      return e11.observe(k2), () => {
        e11.disconnect();
      };
    }, [k2]), o.useEffect(() => {
      if (!w2 || !eK2 || !k2 || !m2) return;
      let e11 = (0, ef.ownerWindow)(m2), t3 = (0, eg.addEventListener)(e11, "resize", function() {
        et2.cancel(), et2.request(() => eQ2(k2, m2));
      });
      return () => {
        et2.cancel(), t3();
      };
    }, [w2, eK2, k2, m2, et2, eQ2]), o.useEffect(() => {
      let e11 = D2.current;
      if (!e11 || !k2 || !m2 || !eK2 || "function" != typeof MutationObserver) return;
      let t3 = new MutationObserver(() => {
        if ("starting" === P2 || k2.hasAttribute(eu.TransitionStatusDataAttributes.startingStyle)) return void eQ2(k2, m2);
        let { size: e13, syncPositioner: t4 } = eZ2(k2);
        t4 ? eX2(k2, m2, e13.width, e13.height) : eJ2(k2, m2, e13.width, e13.height);
      });
      return t3.observe(e11, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["hidden"] }), () => {
        t3.disconnect();
      };
    }, [D2, k2, m2, eK2, P2, eZ2, eX2, eJ2, eQ2]), o.useEffect(() => (eK2 && w2 && k2 && eP2.current && (eP2.current = false, Z2.request(() => {
      A2.current?.focus();
    })), () => {
      Z2.cancel();
    }), [A2, Z2, eK2, w2, k2]), (0, u.useIsoLayoutEffect)(() => {
      if (eH2.current && w2 && k2 && m2) {
        if (eL2.current) {
          eL2.current = false;
          return;
        }
        let { width: e11, height: t3 } = (0, eN.getCssDimensions)(k2);
        eJ2(k2, m2, e11, t3);
      }
    }, [D2, eJ2, eH2, w2, k2, m2, P2]);
    let e02 = (0, e_.useFloatingRootContext)({ open: w2, onOpenChange: function(e11, t3) {
      let r3 = t3.reason === x.REASONS.triggerHover;
      function n2() {
        r3 && (el2(true), Q2.clear(), Q2.start(eS.PATIENT_CLICK_THRESHOLD, () => {
          el2(false);
        })), e11 ? f2(z2, t3) : (f2(null, t3), ep2(""));
      }
      eF2 && ("touch" !== ec2 || !r3) && (e11 || g2 === z2) && (r3 ? ei.flushSync(n2) : n2());
    }, elements: { reference: ea2, floating: eW2 } }), e12 = (0, eb.useHoverInteractionSharedState)(e02), e52 = "touch" !== ec2;
    o.useEffect(() => (w2 || (e02.context.dataRef.current.openEvent = void 0, e12.pointerType = void 0, e12.interactedInside = false, e12.restTimeoutPending = false, e12.openChangeTimeout.clear(), e12.restTimeout.clear()), () => {
      (0, eb.clearSafePolygonPointerEventsMutation)(e12);
    }), [e02, e12, w2]);
    let e22 = (0, l.useStableCallback)(() => V2 && !m2 && ey2.current && eW2 ? (function(e11, t3, r3) {
      let n2, a3, o2, s3, i3, l2, u2, d3;
      return { placement: (n2 = e11.getBoundingClientRect(), a3 = t3.getBoundingClientRect(), o2 = n2.left + n2.width / 2, s3 = n2.top + n2.height / 2, i3 = a3.left + a3.width / 2, l2 = a3.top + a3.height / 2, Math.abs(u2 = i3 - o2) >= Math.abs(d3 = l2 - s3) ? u2 >= 0 ? "right" : "left" : d3 >= 0 ? "bottom" : "top"), elements: { domReference: e11, floating: t3 }, nodeId: r3 };
    })(ey2.current, eW2, Y2) : null);
    function e82() {
      return V2 && m2 ? null : ey2.current?.closest("ul") ?? null;
    }
    let e32 = (0, ex.useHoverReferenceInteraction)(e02, { enabled: eV2, move: false, handleClose: (0, ev.safePolygon)({ blockPointerEvents: e52, getScope: e82 }), restMs: M2 && m2 ? 0 : K2, delay: { close: H2 }, triggerElementRef: ey2, getHandleCloseContext: e22 }), e42 = o.useMemo(() => e32 ? { reference: e32 } : void 0, [e32]), e62 = (0, em.useClick)(e02, { enabled: eF2, stickIfOpen: es2, toggle: eK2 }), e92 = o.useMemo(() => (0, eB.mergeProps)(e62.reference, e42?.reference), [e62.reference, e42]);
    function e72(e11) {
      ei.flushSync(() => {
        let t3 = e11.currentTarget, r3 = B2.current?.getBoundingClientRect();
        if (M2 && r3 && ea2) {
          let e13 = ea2.getBoundingClientRect(), t4 = e13.left > r3.left, n2 = e13.top > r3.top;
          "horizontal" === F2 && e13.left !== r3.left ? _2(t4 ? "right" : "left") : "vertical" === F2 && e13.top !== r3.top && _2(n2 ? "down" : "up");
        }
        if ("click" !== e11.type && null != g2 && (e02.context.dataRef.current.openEvent = void 0), ("touch" !== ec2 || "click" === e11.type) && (null != g2 && "keydown" !== e11.type && f2(z2, (0, eR.createChangeEventDetails)("mouseenter" === e11.type ? x.REASONS.triggerHover : x.REASONS.triggerPress, e11.nativeEvent)), "mouseenter" === e11.type && e52 && (!V2 || !m2) && eW2)) {
          let e13 = () => {
            let e14 = e82() ?? t3.ownerDocument.body;
            (0, eb.applySafePolygonPointerEventsMutation)(e12, { scopeElement: e14, referenceElement: t3, floatingElement: eW2 });
          };
          null != g2 && g2 !== z2 ? queueMicrotask(e13) : e13();
        }
      });
    }
    (0, u.useIsoLayoutEffect)(() => {
      eK2 && (b2(e02), B2.current = ea2);
    }, [eK2, e02, b2, B2, ea2]);
    let te2 = (0, l.useStableCallback)((e11) => {
      if (d2) return;
      if (!k2 || !m2) return void e72(e11);
      let { width: t3, height: r3 } = (0, eN.getCssDimensions)(k2), n2 = null != g2 && g2 !== z2 && ("click" === e11.type || "touch" !== ec2);
      e72(e11), n2 && (eL2.current = true), eJ2(k2, m2, t3, r3);
    });
    function tt2(e11) {
      ep2(e11.pointerType);
    }
    let tr2 = { tabIndex: 0, onMouseEnter: te2, onClick: te2, onPointerEnter: tt2, onPointerDown: function(e11) {
      tt2(e11), (0, eb.clearSafePolygonPointerEventsMutation)(e12);
    }, "aria-expanded": eK2, "aria-controls": eK2 ? k2?.id : void 0, [q]: "", onFocus() {
      eK2 && W2(false);
    }, onMouseMove() {
      eP2.current = false;
    }, onKeyDown(e11) {
      if (eP2.current = true, V2) return;
      let t3 = "horizontal" === F2 && "ArrowDown" === e11.key, r3 = "vertical" === F2 && e11.key === ("rtl" === J2 ? "ArrowLeft" : "ArrowRight");
      (t3 || r3) && (f2(z2, (0, eR.createChangeEventDetails)(x.REASONS.listNavigation, e11.nativeEvent)), te2(e11), (0, ek.stopEvent)(e11));
    }, onBlur(e11) {
      m2 && k2 && eA({ currentTarget: e11.currentTarget, relatedTarget: e11.relatedTarget }, { popupElement: k2, rootRef: C2, tree: G2, nodeId: Y2 }) && f2(null, (0, eR.createChangeEventDetails)(x.REASONS.focusOut, e11.nativeEvent));
    } }, { getButtonProps: tn2, buttonRef: ta2 } = (0, eI.useButton)({ disabled: d2, focusableWhenDisabled: true, native: i2 });
    return (0, n.jsxs)(o.Fragment, { children: [(0, n.jsx)(ej.CompositeItem, { tag: "button", render: r2, className: a2, style: s2, state: { open: eK2 }, stateAttributesMapping: ed.pressableTriggerOpenStateMapping, refs: [t2, eU2, ta2], props: [e92, $2?.reference || I.EMPTY_ARRAY, tr2, y2, tn2] }), eK2 && (0, n.jsxs)(o.Fragment, { children: [(0, n.jsx)(eO.FocusGuard, { ref: A2, onFocus: (e11) => {
      if (eW2 && (0, eE.isOutsideEvent)(e11, eW2)) N2.current?.focus();
      else {
        let e13 = (0, eE.getPreviousTabbable)(ea2);
        e13?.focus();
      }
    } }), (0, n.jsx)("span", { "aria-owns": S2?.id, style: eS.ownerVisuallyHidden }), (0, n.jsx)(eO.FocusGuard, { ref: j2, onFocus: (e11) => {
      if (eW2 && (0, eE.isOutsideEvent)(e11, eW2)) {
        ei.flushSync(() => {
          W2(false);
        });
        let e13 = T2.current || ea2;
        e13?.focus();
      } else {
        let t3 = (0, eE.getNextTabbable)(ea2);
        V2 && !m2 && eW2 && t3 && (0, p.contains)(eW2, t3) && (t3 = (0, eE.getTabbableAfterElement)(T2.current)), t3?.focus(), V2 && !m2 || (0, p.contains)(C2.current, t3) || f2(null, (0, eR.createChangeEventDetails)(x.REASONS.focusOut, e11.nativeEvent));
      }
    } })] })] });
  });
  var eH = e.i(801873);
  try {
    var eF = "u" > typeof window ? window : e.g;
    eF._sentryModuleMetadata = eF._sentryModuleMetadata || {}, eF._sentryModuleMetadata[new eF.Error().stack] = Object.assign({}, eF._sentryModuleMetadata[new eF.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let eW = o.createContext(void 0);
  try {
    var eV = "u" > typeof window ? window : e.g;
    eV._sentryModuleMetadata = eV._sentryModuleMetadata || {}, eV._sentryModuleMetadata[new eV.Error().stack] = Object.assign({}, eV._sentryModuleMetadata[new eV.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ez = o.forwardRef(function(e10, t2) {
    let { keepMounted: r2 = false, ...a2 } = e10, { mounted: o2 } = h();
    return o2 || r2 ? (0, n.jsx)(eW.Provider, { value: r2, children: (0, n.jsx)(eH.FloatingPortal, { ref: t2, ...a2 }) }) : null;
  });
  var eU = e.i(703921), eY = e.i(930856), eG = e.i(247814);
  try {
    var e$ = "u" > typeof window ? window : e.g;
    e$._sentryModuleMetadata = e$._sentryModuleMetadata || {}, e$._sentryModuleMetadata[new e$.Error().stack] = Object.assign({}, e$._sentryModuleMetadata[new e$.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var eq = "u" > typeof window ? window : e.g;
    eq._sentryModuleMetadata = eq._sentryModuleMetadata || {}, eq._sentryModuleMetadata[new eq.Error().stack] = Object.assign({}, eq._sentryModuleMetadata[new eq.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let eJ = o.createContext(void 0);
  function eX(e10 = false) {
    let t2 = o.useContext(eJ);
    if (!t2 && !e10) throw Error((0, g.default)(42));
    return t2;
  }
  var eQ = e.i(737286), eZ = e.i(199848);
  try {
    var e0 = "u" > typeof window ? window : e.g;
    e0._sentryModuleMetadata = e0._sentryModuleMetadata || {}, e0._sentryModuleMetadata[new e0.Error().stack] = Object.assign({}, e0._sentryModuleMetadata[new e0.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let e1 = (0, Q.getEmptyRootContext)(), e5 = o.forwardRef(function(e10, t2) {
    var r2;
    let { open: a2, mounted: s2, positionerElement: i2, setPositionerElement: l2, floatingRootContext: u2, nested: d2, transitionStatus: c2 } = h(), { className: p2, render: y2, anchor: f2, positionMethod: M2 = "absolute", side: w2 = "bottom", align: m2 = "center", sideOffset: _2 = 0, alignOffset: x2 = 0, collisionBoundary: b2 = "clipping-ancestors", collisionPadding: E2 = 5, collisionAvoidance: k2 = d2 ? eS.POPUP_COLLISION_AVOIDANCE : eS.DROPDOWN_COLLISION_AVOIDANCE, arrowPadding: R2 = 5, sticky: S2 = false, disableAnchorTracking: O2 = false, style: P2, ...C2 } = e10, A2 = (function() {
      let e11 = o.useContext(eW);
      if (void 0 === e11) throw Error((0, g.default)(40));
      return e11;
    })(), j2 = v(), I2 = (0, eM.useTimeout)(), T2 = (0, eM.useTimeout)(), [N2, B2] = o.useState(a2), L2 = o.useRef(a2);
    o.useEffect(() => {
      if (i2) return (0, eU.mergeCleanups)((0, eg.addEventListener)(i2, "focusin", e11, true), (0, eg.addEventListener)(i2, "focusout", e11, true));
      function e11(e12) {
        i2 && (0, eE.isOutsideEvent)(e12) && ("focusin" === e12.type ? eE.enableFocusInside : eE.disableFocusInside)(i2);
      }
    }, [i2]);
    let D2 = (u2 || e1).useState("domReferenceElement"), K2 = (r2 = { anchor: f2 ?? D2, positionMethod: M2, mounted: s2, side: w2, sideOffset: _2, align: m2, alignOffset: x2, arrowPadding: R2, collisionBoundary: b2, collisionPadding: E2, sticky: S2, disableAnchorTracking: O2, keepMounted: A2, floatingRootContext: u2, collisionAvoidance: k2, shift: { rootBoundary: "layoutViewport" }, nodeId: j2, adaptiveOrigin: eQ.adaptiveOrigin }, (0, eG.useAnchorPositioningWithHook)(r2, eY.useFloating)), H2 = { open: a2, side: K2.side, align: K2.align, anchorHidden: K2.anchorHidden, instant: N2 };
    o.useEffect(() => {
      if (!a2) return;
      L2.current && I2.start(0, () => {
        L2.current = false, T2.isStarted() || B2(false);
      });
      let e11 = (0, ef.ownerWindow)(i2);
      return (0, eg.addEventListener)(e11, "resize", function() {
        ei.flushSync(() => {
          B2(true);
        }), T2.start(100, () => {
          B2(false);
        });
      });
    }, [a2, I2, T2, i2]);
    let F2 = (0, eZ.usePositioner)(e10, H2, { styles: K2.positionerStyles, transitionStatus: c2, props: C2, refs: [t2, l2], hidden: !s2, inert: !a2 });
    return (0, n.jsx)(eJ.Provider, { value: K2, children: F2 });
  });
  var e2 = e.i(497073);
  try {
    var e8 = "u" > typeof window ? window : e.g;
    e8._sentryModuleMetadata = e8._sentryModuleMetadata || {}, e8._sentryModuleMetadata[new e8.Error().stack] = Object.assign({}, e8._sentryModuleMetadata[new e8.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let e3 = (0, Q.getEmptyRootContext)();
  function e4({ children: e10 }) {
    let { beforeInsideRef: t2, beforeOutsideRef: r2, afterInsideRef: a2, afterOutsideRef: s2, positionerElement: i2, viewportElement: l2, floatingRootContext: u2 } = h(), d2 = !!eX(true), c2 = i2 || l2;
    return u2 || d2 ? (0, n.jsxs)(o.Fragment, { children: [(0, n.jsx)(eO.FocusGuard, { ref: t2, onFocus: (e11) => {
      c2 && (0, eE.isOutsideEvent)(e11, c2) ? (0, eE.getNextTabbable)(c2)?.focus() : r2.current?.focus();
    } }), e10, (0, n.jsx)(eO.FocusGuard, { ref: a2, onFocus: (e11) => {
      c2 && (0, eE.isOutsideEvent)(e11, c2) ? (0, eE.getPreviousTabbable)(c2)?.focus() : s2.current?.focus();
    } })] }) : e10;
  }
  let e6 = o.forwardRef(function(e10, t2) {
    let { render: r2, className: a2, style: o2, children: s2, id: i2, ...l2 } = e10, d2 = (0, e2.useId)(i2), { setViewportElement: c2, setViewportTargetElement: g2, floatingRootContext: f2, prevTriggerElementRef: M2, viewportInert: w2, setViewportInert: v2 } = h(), m2 = !!eX(true), _2 = (f2 || e3).useState("domReferenceElement");
    (0, u.useIsoLayoutEffect)(() => {
      _2 && (M2.current = _2);
    }, [_2, M2]);
    let x2 = (0, y.useRenderElement)("div", e10, { ref: [t2, c2], props: [{ id: d2, onBlur(e11) {
      let t3 = e11.relatedTarget, r3 = e11.currentTarget;
      t3 && !(0, p.contains)(r3, t3) && t3 !== _2 && v2(true);
    }, ...!m2 && w2 && { inert: (0, el.inertValue)(true) }, children: m2 ? s2 : (0, n.jsx)(e4, { children: (0, n.jsx)("div", { ref: g2, children: s2 }) }) }, l2] });
    return m2 ? (0, n.jsx)(e4, { children: x2 }) : x2;
  });
  try {
    var e9 = "u" > typeof window ? window : e.g;
    e9._sentryModuleMetadata = e9._sentryModuleMetadata || {}, e9._sentryModuleMetadata[new e9.Error().stack] = Object.assign({}, e9._sentryModuleMetadata[new e9.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let e7 = o.forwardRef(function(e10, t2) {
    let { render: r2, className: n2, style: a2, ...o2 } = e10, { open: s2, mounted: i2, transitionStatus: l2 } = h();
    return (0, y.useRenderElement)("div", e10, { state: { open: s2, transitionStatus: l2 }, ref: t2, props: [{ role: "presentation", hidden: !i2, style: { userSelect: "none", WebkitUserSelect: "none" } }, o2], stateAttributesMapping: ed.popupTransitionStateMapping });
  });
  var te = e.i(343990);
  try {
    var tt = "u" > typeof window ? window : e.g;
    tt._sentryModuleMetadata = tt._sentryModuleMetadata || {}, tt._sentryModuleMetadata[new tt.Error().stack] = Object.assign({}, tt._sentryModuleMetadata[new tt.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let tr = o.forwardRef(function(e10, t2) {
    let { render: r2, className: n2, style: a2, id: o2, ...s2 } = e10, { open: i2, transitionStatus: l2, setPopupElement: u2 } = h(), d2 = eX(), c2 = (0, U.useDirection)(), p2 = (0, ea.useBaseUiId)(o2), g2 = { open: i2, transitionStatus: l2, side: d2.side, align: d2.align, anchorHidden: d2.anchorHidden }, f2 = "left" === d2.side;
    f2 = "rtl" === c2 ? f2 || "inline-end" === d2.side : f2 || "inline-start" === d2.side;
    let M2 = "top" === d2.side || f2;
    return (0, y.useRenderElement)("nav", e10, { state: g2, ref: [t2, u2], props: [{ id: p2, tabIndex: -1, style: M2 ? { position: "absolute", ["top" === d2.side ? "bottom" : "top"]: "0", [f2 ? "right" : "left"]: "0" } : {} }, (0, te.getDisabledMountTransitionStyles)(l2), s2], stateAttributesMapping: ed.popupTransitionStateMapping });
  });
  try {
    var tn = "u" > typeof window ? window : e.g;
    tn._sentryModuleMetadata = tn._sentryModuleMetadata || {}, tn._sentryModuleMetadata[new tn.Error().stack] = Object.assign({}, tn._sentryModuleMetadata[new tn.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ta = o.forwardRef(function(e10, t2) {
    let { render: r2, className: n2, style: a2, ...o2 } = e10, { open: s2, transitionStatus: i2 } = h(), { arrowRef: l2, side: u2, align: d2, arrowUncentered: c2, arrowStyles: p2 } = eX();
    return (0, y.useRenderElement)("div", e10, { state: { open: s2, side: u2, align: d2, uncentered: c2 }, ref: [t2, l2], props: [{ style: p2, "aria-hidden": true }, (0, te.getDisabledMountTransitionStyles)(i2), o2], stateAttributesMapping: ed.popupStateMapping });
  });
  try {
    var to = "u" > typeof window ? window : e.g;
    to._sentryModuleMetadata = to._sentryModuleMetadata || {}, to._sentryModuleMetadata[new to.Error().stack] = Object.assign({}, to._sentryModuleMetadata[new to.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ts = o.forwardRef(function(e10, t2) {
    let { className: r2, render: a2, active: o2 = false, closeOnClick: s2 = false, style: i2, ...l2 } = e10, { setValue: u2, popupElement: d2, positionerElement: p2, rootRef: y2 } = h(), g2 = v(), f2 = (0, c.useFloatingTree)();
    return (0, n.jsx)(ej.CompositeItem, { tag: "a", render: a2, className: r2, style: i2, state: { active: o2 }, refs: [t2], props: [{ "aria-current": o2 ? "page" : void 0, tabIndex: void 0, onClick(e11) {
      s2 && u2(null, (0, eR.createChangeEventDetails)(x.REASONS.linkPress, e11.nativeEvent));
    }, onBlur(e11) {
      p2 && d2 && eA({ currentTarget: e11.currentTarget, relatedTarget: e11.relatedTarget }, { popupElement: d2, rootRef: y2, tree: f2, nodeId: g2 }) && u2(null, (0, eR.createChangeEventDetails)(x.REASONS.focusOut, e11.nativeEvent));
    } }, l2] });
  });
  try {
    var ti = "u" > typeof window ? window : e.g;
    ti._sentryModuleMetadata = ti._sentryModuleMetadata || {}, ti._sentryModuleMetadata[new ti.Error().stack] = Object.assign({}, ti._sentryModuleMetadata[new ti.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let tl = o.forwardRef(function(e10, t2) {
    let { render: r2, className: n2, style: a2, ...o2 } = e10, { value: s2 } = en(), { open: i2, value: l2 } = h();
    return (0, y.useRenderElement)("span", e10, { state: { open: i2 && l2 === s2 }, ref: t2, props: [{ "aria-hidden": true, children: "\u25BC" }, o2], stateAttributesMapping: ed.triggerOpenStateMapping });
  });
  e.s(["Arrow", 0, ta, "Backdrop", 0, e7, "Content", 0, ey, "Icon", 0, tl, "Item", 0, es, "Link", 0, ts, "List", 0, ee, "Popup", 0, tr, "Portal", 0, ez, "Positioner", 0, e5, "Root", 0, A, "Trigger", 0, eK, "Viewport", 0, e6], 203713);
  var tu = e.i(203713), tu = tu, td = e.i(224253), tc = e.i(894584), tp = e.i(906180), ty = e.i(852379), tg = e.i(167815), tf = e.i(618807), tM = e.i(65228), th = e.i(145408), tw = e.i(551360);
  try {
    var tv = window;
    tv._sentryModuleMetadata = tv._sentryModuleMetadata || {}, tv._sentryModuleMetadata[new tv.Error().stack] = Object.assign({}, tv._sentryModuleMetadata[new tv.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  e.s(["SiteHeaderNavigationMenu", 0, function({ navigation: e10 }) {
    let t2 = (0, o.useRef)(null), r2 = (0, o.useRef)(null), a2 = (0, tf.useAppPathname)();
    return (0, n.jsxs)(tu.Root, { delay: 0, className: "relative z-1", children: [(0, n.jsx)(tu.List, { ref: t2, className: "hidden items-center gap-x-1.5 lg:flex", children: e10.map((e11) => (0, n.jsxs)(o.Fragment, { children: ["link" === e11.component && (0, n.jsx)(tu.Item, { children: (0, n.jsx)(tu.Link, { render: (0, n.jsx)(tg.Button, { size: "responsive", variant: "ghost", className: "text-[15px] before:absolute before:-top-px before:-right-1 before:-bottom-px before:-left-1", asChild: true, children: (0, n.jsx)(td.default, { ...(0, th.getStoryblokLinkProps)(e11.link), children: e11.label }) }) }) }), "navigationMenu" === e11.component && (0, n.jsxs)(tu.Item, { children: [(0, n.jsxs)(tu.Trigger, { render: (0, n.jsx)(tg.Button, { className: "group select-none text-[15px] before:absolute before:-top-px before:-right-1 before:-bottom-px before:-left-1", size: "sm", variant: "ghost" }), children: [(0, n.jsx)("span", { children: e11.title }), (0, n.jsx)(tM.ChevronDown, { className: (0, tw.cn)("transition-[transform,translate] duration-300 ease-in-out-cubic", "group-data-[popup-open]:translate-y-px group-data-[popup-open]:duration-150", "motion-reduce:transition-none motion-reduce:group-data-[popup-open]:translate-y-0"), "aria-hidden": true })] }), (0, n.jsx)(tu.Content, { keepMounted: true, className: (0, tw.cn)("col-start-1 row-start-1 w-auto", "data-[activation-direction=right]:data-[open]:animate-navigation-enter-from-right", "data-[activation-direction=left]:data-[open]:animate-navigation-enter-from-left", "data-[activation-direction=right]:data-[closed]:animate-navigation-exit-to-left", "data-[activation-direction=left]:data-[closed]:animate-navigation-exit-to-right", "not-data-[activation-direction]:transition-opacity not-data-[activation-direction]:duration-150 not-data-[activation-direction]:ease-in-out-cubic", "not-data-[activation-direction]:data-[ending-style]:opacity-0", "motion-reduce:not-data-[activation-direction]:duration-100 motion-reduce:not-data-[activation-direction]:ease-out"), children: e11.columns.length > 0 && (0, n.jsx)("div", { className: (0, tw.cn)("flex"), children: e11.columns.map(({ _uid: t3, links: r3 }, a3) => {
      let o2 = 0, s2 = 0;
      for (let e12 of r3) "navigationMenuLinkFeatured" !== e12.component || e12.isHidden ? (o2 = Math.max(o2, s2), s2 = 0) : s2++;
      let i2 = o2 > 3, l2 = a3 === e11.columns.length - 1;
      return (0, n.jsxs)("ul", { className: (0, tw.cn)("relative flex w-96 flex-col gap-1 p-4 pt-3", { "grid w-180 grid-cols-2 gap-x-3 max-xl:w-144": i2, "w-48 gap-1.25": l2 }), children: [(0, n.jsx)(tc.AttioLine, { vertical: true, className: (0, tw.cn)("divider absolute inset-y-0 left-0 text-primary-foreground/10", "dark:text-primary-foreground/20", { hidden: !l2 }) }), r3.map((e12) => (0, n.jsxs)("li", { className: "contents", children: ["navigationMenuTitle" === e12.component && (0, n.jsx)("p", { className: (0, tw.cn)("mt-3 mb-1 inline-block px-4 text-overline leading-4!", { "col-span-2": i2, "mb-0.5 px-2.75": l2 }), children: e12.title }), "navigationMenuLinkFeatured" === e12.component && !e12.isHidden && (0, n.jsx)(tu.Link, { closeOnClick: true, render: (0, n.jsx)(ty.SiteHeaderNavigationMenuLinkFeatured, { link: e12, className: l2 ? "before:-top-[3.5px] before:-bottom-[3.5px]" : void 0 }) }), "navigationMenuLinkBase" === e12.component && (0, n.jsx)(tu.Link, { closeOnClick: true, render: (0, n.jsx)(tp.SiteHeaderNavigationMenuLinkBase, { link: e12, className: l2 ? "before:-top-[7.5px] before:-bottom-[3.5px]" : void 0 }) })] }, e12._uid))] }, t3);
    }) }) })] })] }, e11._uid)) }), (0, n.jsx)("div", { ref: r2 }), (0, n.jsx)(tu.Portal, { keepMounted: true, container: r2, children: (0, n.jsx)(tu.Positioner, { anchor: t2, side: "bottom", align: "start", sideOffset: 6, className: "hidden sm:block", children: (0, n.jsx)(tu.Popup, { className: (0, tw.cn)("h-(--popup-height) w-(--popup-width) origin-[var(--transform-origin)] overflow-hidden rounded-2xl", "bg-primary-background/95 backdrop-blur-xl", "transition-[translate,opacity,width,height] duration-150 ease-in-out-cubic", "data-[starting-style]:-translate-y-1 data-[starting-style]:opacity-0", "data-[ending-style]:-translate-y-1 data-[ending-style]:opacity-0", "motion-reduce:bg-primary-background motion-reduce:backdrop-blur-none", "motion-reduce:transition-[opacity,width,height] motion-reduce:duration-100 motion-reduce:ease-out", "motion-reduce:data-[ending-style]:translate-y-0 motion-reduce:data-[starting-style]:translate-y-0", "data-[instant]:transition-none", "shadow-[0px_0px_0px_1px_rgba(28,29,31,0.1),0px_1px_2px_0px_rgba(28,29,31,0.05),0px_2px_4px_-1px_rgba(28,29,31,0.02),0px_4px_8px_-2px_rgba(28,29,31,0.03),0px_8px_16px_-4px_rgba(28,29,31,0.04),0px_16px_32px_-8px_rgba(28,29,31,0.05),0px_32px_64px_-8px_rgba(28,29,31,0.06)]", "dark:bg-secondary-background dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.2),0px_1px_2px_0px_rgba(28,29,31,0.05),0px_2px_4px_-1px_rgba(28,29,31,0.02),0px_4px_8px_-2px_rgba(28,29,31,0.03),0px_8px_16px_-4px_rgba(28,29,31,0.04),0px_16px_32px_-8px_rgba(28,29,31,0.05),0px_32px_64px_-8px_rgba(28,29,31,0.06)]"), children: (0, n.jsx)(tu.Viewport, { className: "grid" }) }) }) })] }, a2);
  }], 414042);
}, 154353, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757), n = e.i(359158), a = e.i(618807), o = e.i(468884), s = e.i(551360);
  try {
    var i = window;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["SiteHeaderWrapper", 0, function({ className: e2, children: i2 }) {
    let [l, u] = (0, r.useState)(false), d = (0, r.useRef)(/* @__PURE__ */ new Set()), c = (0, r.useRef)(null), p = (0, a.useAppPathname)();
    return (0, r.useEffect)(() => {
      function e3(e4) {
        if (!(e4 instanceof CustomEvent)) return;
        let { id: t2, isDark: r2 } = e4.detail;
        r2 ? d.current.add(t2) : d.current.delete(t2), c.current?.classList.toggle("dark", !l && d.current.size > 0);
      }
      return window.addEventListener(o.NAVIGATION_DYNAMIC_DARK_MODE_EVENT, e3), () => {
        window.removeEventListener(o.NAVIGATION_DYNAMIC_DARK_MODE_EVENT, e3), c.current?.classList.remove("dark");
      };
    }, [l]), (0, r.useEffect)(() => {
      c.current?.classList.toggle("dark", !l && d.current.size > 0);
    }, [l]), (0, r.useEffect)(() => {
      u(false), d.current.clear(), c.current?.classList.remove("dark");
    }, [p]), (0, t.jsx)(n.SiteHeaderContextProvider, { value: { isMenuOpen: l, setIsMenuOpen: u }, children: (0, t.jsx)("div", { ref: c, className: (0, s.cn)(e2), children: i2 }) });
  }]);
}, 359158, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let n = (0, t.createContext)(void 0), a = n.Provider;
  e.s(["SiteHeaderContextProvider", 0, a, "useSiteHeaderContext", 0, () => {
    let e2 = (0, t.use)(n);
    if (!e2) throw Error("useSiteHeaderContext must be used within a SiteHeaderProvider");
    return e2;
  }]);
}]);
