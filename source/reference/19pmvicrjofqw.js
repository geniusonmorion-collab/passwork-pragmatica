;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "c90bcb84-80c9-1a23-3aa5-02424040b387");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 364937, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(543836), o = e.i(728654), n = e.i(652531), a = e.i(999819), i = e.i(67110), s = e.i(619784), l = e.i(119637), c = e.i(483951), d = e.i(291196), u = e.i(198623), p = e.i(45240), x = e.i(603642), f = e.i(548913), g = e.i(73772), h = e.i(813044), v = e.i(68982);
  try {
    var y = "u" > typeof window ? window : e.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var m = Object.defineProperty, b = (e2, t2) => m(e2, "name", { value: t2, configurable: true }), w = "Popover", [C, P] = (0, n.createContextScope)(w, [c.createPopperScope]), j = (0, c.createPopperScope)(), [M, T] = C(w), E = b((e2) => {
    let { __scopePopover: r2, children: o2, open: n2, defaultOpen: a2, onOpenChange: i2, modal: s2 = false } = e2, d2 = j(r2), u2 = t.useRef(null), [p2, x2] = t.useState(false), [g2, h2] = (0, f.useControllableState)({ prop: n2, defaultProp: a2 ?? false, onChange: i2, caller: w });
    return (0, v.jsx)(c.Root, { ...d2, children: (0, v.jsx)(M, { scope: r2, contentId: (0, l.useId)(), triggerRef: u2, open: g2, onOpenChange: h2, onOpenToggle: t.useCallback(() => h2((e3) => !e3), [h2]), hasCustomAnchor: p2, onCustomAnchorAdd: t.useCallback(() => x2(true), []), onCustomAnchorRemove: t.useCallback(() => x2(false), []), modal: s2, children: o2 }) });
  }, "Popover"), _ = t.forwardRef(b(function(e2, r2) {
    let { __scopePopover: o2, ...n2 } = e2, a2 = T("PopoverAnchor", o2), i2 = j(o2), { onCustomAnchorAdd: s2, onCustomAnchorRemove: l2 } = a2;
    return t.useEffect(() => (s2(), () => l2()), [s2, l2]), (0, v.jsx)(c.Anchor, { ...i2, ...n2, ref: r2 });
  }, "PopoverAnchor")), k = t.forwardRef(b(function(e2, t2) {
    let { __scopePopover: n2, ...a2 } = e2, i2 = T("PopoverTrigger", n2), s2 = j(n2), l2 = (0, o.useComposedRefs)(t2, i2.triggerRef), d2 = (0, v.jsx)(p.Primitive.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": i2.open, "aria-controls": i2.open ? i2.contentId : void 0, "data-state": U(i2.open), ...a2, ref: l2, onClick: (0, r.composeEventHandlers)(e2.onClick, i2.onOpenToggle) });
    return i2.hasCustomAnchor ? d2 : (0, v.jsx)(c.Anchor, { asChild: true, ...s2, children: d2 });
  }, "PopoverTrigger")), R = "PopoverPortal", [A, O] = C(R, { forceMount: void 0 }), L = b((e2) => {
    let { __scopePopover: t2, forceMount: r2, children: o2, container: n2 } = e2, a2 = T(R, t2);
    return (0, v.jsx)(A, { scope: t2, forceMount: r2, children: (0, v.jsx)(u.Presence, { present: r2 || a2.open, children: (0, v.jsx)(d.Portal, { asChild: true, container: n2, children: o2 }) }) });
  }, "PopoverPortal"), N = "PopoverContent", S = t.forwardRef(b(function(e2, t2) {
    let r2 = O(N, e2.__scopePopover), { forceMount: o2 = r2.forceMount, ...n2 } = e2, a2 = T(N, e2.__scopePopover);
    return (0, v.jsx)(u.Presence, { present: o2 || a2.open, children: a2.modal ? (0, v.jsx)(F, { ...n2, ref: t2 }) : (0, v.jsx)(B, { ...n2, ref: t2 }) });
  }, "PopoverContent")), D = (0, x.createSlot)("PopoverContent.RemoveScroll"), F = t.forwardRef(b(function(e2, n2) {
    let a2 = T(N, e2.__scopePopover), i2 = t.useRef(null), s2 = (0, o.useComposedRefs)(n2, i2), l2 = t.useRef(false);
    return t.useEffect(() => {
      let e3 = i2.current;
      if (e3) return (0, g.hideOthers)(e3);
    }, []), (0, v.jsx)(h.RemoveScroll, { as: D, allowPinchZoom: true, children: (0, v.jsx)(I, { ...e2, ref: s2, trapFocus: a2.open, disableOutsidePointerEvents: true, onCloseAutoFocus: (0, r.composeEventHandlers)(e2.onCloseAutoFocus, (e3) => {
      e3.preventDefault(), l2.current || a2.triggerRef.current?.focus();
    }), onPointerDownOutside: (0, r.composeEventHandlers)(e2.onPointerDownOutside, (e3) => {
      let t2 = e3.detail.originalEvent, r2 = 0 === t2.button && true === t2.ctrlKey;
      l2.current = 2 === t2.button || r2;
    }, { checkForDefaultPrevented: false }), onFocusOutside: (0, r.composeEventHandlers)(e2.onFocusOutside, (e3) => e3.preventDefault(), { checkForDefaultPrevented: false }) }) });
  }, "PopoverContentModal")), B = t.forwardRef(b(function(e2, r2) {
    let o2 = T(N, e2.__scopePopover), n2 = t.useRef(false), a2 = t.useRef(false);
    return (0, v.jsx)(I, { ...e2, ref: r2, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (t2) => {
      e2.onCloseAutoFocus?.(t2), t2.defaultPrevented || (n2.current || o2.triggerRef.current?.focus(), t2.preventDefault()), n2.current = false, a2.current = false;
    }, onInteractOutside: (t2) => {
      e2.onInteractOutside?.(t2), t2.defaultPrevented || (n2.current = true, "pointerdown" === t2.detail.originalEvent.type && (a2.current = true));
      let r3 = t2.target;
      o2.triggerRef.current?.contains(r3) && t2.preventDefault(), "focusin" === t2.detail.originalEvent.type && a2.current && t2.preventDefault();
    } });
  }, "PopoverContentNonModal")), I = t.forwardRef(b(function(e2, t2) {
    let { __scopePopover: r2, trapFocus: o2, onOpenAutoFocus: n2, onCloseAutoFocus: l2, disableOutsidePointerEvents: d2, onEscapeKeyDown: u2, onPointerDownOutside: p2, onFocusOutside: x2, onInteractOutside: f2, ...g2 } = e2, h2 = T(N, r2), y2 = j(r2);
    return (0, i.useFocusGuards)(), (0, v.jsx)(s.FocusScope, { asChild: true, loop: true, trapped: o2, onMountAutoFocus: n2, onUnmountAutoFocus: l2, children: (0, v.jsx)(a.DismissableLayer, { asChild: true, disableOutsidePointerEvents: d2, onInteractOutside: f2, onEscapeKeyDown: u2, onPointerDownOutside: p2, onFocusOutside: x2, onDismiss: () => h2.onOpenChange(false), deferPointerDownOutside: true, children: (0, v.jsx)(c.Content, { "data-state": U(h2.open), role: "dialog", id: h2.contentId, ...y2, ...g2, ref: t2, style: { ...g2.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-popover-content-available-width": "var(--radix-popper-available-width)", "--radix-popover-content-available-height": "var(--radix-popper-available-height)", "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)", "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)" } }) }) });
  }, "PopoverContentImpl")), H = t.forwardRef(b(function(e2, t2) {
    let { __scopePopover: o2, ...n2 } = e2, a2 = T("PopoverClose", o2);
    return (0, v.jsx)(p.Primitive.button, { type: "button", ...n2, ref: t2, onClick: (0, r.composeEventHandlers)(e2.onClick, () => a2.onOpenChange(false)) });
  }, "PopoverClose")), K = t.forwardRef(b(function(e2, t2) {
    let { __scopePopover: r2, ...o2 } = e2, n2 = j(r2);
    return (0, v.jsx)(c.Arrow, { ...n2, ...o2, ref: t2 });
  }, "PopoverArrow"));
  function U(e2) {
    return e2 ? "open" : "closed";
  }
  b(U, "getState"), e.s(["Anchor", 0, _, "Arrow", 0, K, "Close", 0, H, "Content", 0, S, "Popover", 0, E, "PopoverAnchor", 0, _, "PopoverArrow", 0, K, "PopoverClose", 0, H, "PopoverContent", 0, S, "PopoverPortal", 0, L, "PopoverTrigger", 0, k, "Portal", 0, L, "Root", 0, E, "Trigger", 0, k, "createPopoverScope", 0, P], 102580);
  var V = e.i(102580);
  e.s(["Popover", 0, V], 364937);
}, 656090, (e) => {
  "use strict";
  var t = e.i(68982);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["PricingTableFeatureTitleBadge", 0, function() {
    return (0, t.jsx)("div", { className: "-my-0.5 rounded-lg border border-weak-stroke bg-secondary-background px-1.5 py-1 text-accent-foreground text-xs", children: "Monthly" });
  }]);
}, 296293, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(364937), o = e.i(856757), n = e.i(543836), a = e.i(728654), i = e.i(652531), s = e.i(999819), l = e.i(119637), c = e.i(483951), d = e.i(291196), u = e.i(198623), p = e.i(45240), x = e.i(603642), f = e.i(548913), g = e.i(386271), h = e.i(360457);
  try {
    var v = "u" > typeof window ? window : e.g;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var y = Object.defineProperty, m = (e2, t2) => y(e2, "name", { value: t2, configurable: true }), [b, w] = (0, i.createContextScope)("Tooltip", [c.createPopperScope]), C = (0, c.createPopperScope)(), P = "tooltip.open", [j, M] = b("TooltipProvider"), T = m((e2) => {
    let { __scopeTooltip: r2, delayDuration: n2 = 700, skipDelayDuration: a2 = 300, disableHoverableContent: i2 = false, children: s2 } = e2, l2 = o.useRef(true), c2 = o.useRef(false), d2 = o.useRef(0);
    return o.useEffect(() => {
      let e3 = d2.current;
      return () => window.clearTimeout(e3);
    }, []), (0, t.jsx)(j, { scope: r2, isOpenDelayedRef: l2, delayDuration: n2, onOpen: o.useCallback(() => {
      a2 <= 0 || (window.clearTimeout(d2.current), l2.current = false);
    }, [a2]), onClose: o.useCallback(() => {
      a2 <= 0 || (window.clearTimeout(d2.current), d2.current = window.setTimeout(() => l2.current = true, a2));
    }, [a2]), isPointerInTransitRef: c2, onPointerInTransitChange: o.useCallback((e3) => {
      c2.current = e3;
    }, []), disableHoverableContent: i2, children: s2 });
  }, "TooltipProvider"), E = "Tooltip", [_, k] = b(E), R = m((e2) => {
    let { __scopeTooltip: r2, children: n2, open: a2, defaultOpen: i2, onOpenChange: s2, disableHoverableContent: d2, delayDuration: u2 } = e2, p2 = M(E, e2.__scopeTooltip), x2 = C(r2), [g2, h2] = o.useState(null), [v2, y2] = o.useState(void 0), b2 = (0, l.useId)(), w2 = o.useRef(0), j2 = d2 ?? p2.disableHoverableContent, T2 = u2 ?? p2.delayDuration, k2 = o.useRef(false), [R2, A2] = (0, f.useControllableState)({ prop: a2, defaultProp: i2 ?? false, onChange: m((e3) => {
      e3 ? (p2.onOpen(), document.dispatchEvent(new CustomEvent(P))) : p2.onClose(), s2?.(e3);
    }, "onChange"), caller: E }), O2 = o.useMemo(() => R2 ? k2.current ? "delayed-open" : "instant-open" : "closed", [R2]), L2 = o.useCallback(() => {
      window.clearTimeout(w2.current), w2.current = 0, k2.current = false, A2(true);
    }, [A2]), N2 = o.useCallback(() => {
      window.clearTimeout(w2.current), w2.current = 0, A2(false);
    }, [A2]), S2 = o.useCallback(() => {
      window.clearTimeout(w2.current), w2.current = window.setTimeout(() => {
        k2.current = true, A2(true), w2.current = 0;
      }, T2);
    }, [T2, A2]);
    return o.useEffect(() => () => {
      w2.current && (window.clearTimeout(w2.current), w2.current = 0);
    }, []), (0, t.jsx)(c.Root, { ...x2, children: (0, t.jsx)(_, { scope: r2, contentId: v2 ?? b2, setContentId: y2, open: R2, stateAttribute: O2, trigger: g2, onTriggerChange: h2, onTriggerEnter: o.useCallback(() => {
      p2.isOpenDelayedRef.current ? S2() : L2();
    }, [p2.isOpenDelayedRef, S2, L2]), onTriggerLeave: o.useCallback(() => {
      j2 ? N2() : (window.clearTimeout(w2.current), w2.current = 0);
    }, [N2, j2]), onOpen: L2, onClose: N2, disableHoverableContent: j2, children: n2 }) });
  }, "Tooltip"), A = "TooltipTrigger", O = o.forwardRef(m(function(e2, r2) {
    let { __scopeTooltip: i2, ...s2 } = e2, l2 = k(A, i2), d2 = M(A, i2), u2 = C(i2), x2 = o.useRef(null), f2 = (0, a.useComposedRefs)(r2, x2, l2.onTriggerChange), g2 = o.useRef(false), h2 = o.useRef(false), v2 = o.useCallback(() => g2.current = false, []);
    return o.useEffect(() => () => document.removeEventListener("pointerup", v2), [v2]), (0, t.jsx)(c.Anchor, { asChild: true, ...u2, children: (0, t.jsx)(p.Primitive.button, { "aria-describedby": l2.open ? l2.contentId : void 0, "data-state": l2.stateAttribute, ...s2, ref: f2, onPointerMove: (0, n.composeEventHandlers)(e2.onPointerMove, (e3) => {
      "touch" !== e3.pointerType && (h2.current || d2.isPointerInTransitRef.current || (l2.onTriggerEnter(), h2.current = true));
    }), onPointerLeave: (0, n.composeEventHandlers)(e2.onPointerLeave, () => {
      l2.onTriggerLeave(), h2.current = false;
    }), onPointerDown: (0, n.composeEventHandlers)(e2.onPointerDown, () => {
      l2.open && l2.onClose(), g2.current = true, document.addEventListener("pointerup", v2, { once: true });
    }), onFocus: (0, n.composeEventHandlers)(e2.onFocus, () => {
      g2.current || l2.onOpen();
    }), onBlur: (0, n.composeEventHandlers)(e2.onBlur, l2.onClose), onClick: (0, n.composeEventHandlers)(e2.onClick, l2.onClose) }) });
  }, "TooltipTrigger")), L = "TooltipPortal", [N, S] = b(L, { forceMount: void 0 }), D = m((e2) => {
    let { __scopeTooltip: r2, forceMount: o2, children: n2, container: a2 } = e2, i2 = k(L, r2);
    return (0, t.jsx)(N, { scope: r2, forceMount: o2, children: (0, t.jsx)(u.Presence, { present: o2 || i2.open, children: (0, t.jsx)(d.Portal, { asChild: true, container: a2, children: n2 }) }) });
  }, "TooltipPortal"), F = "TooltipContent", B = o.forwardRef(m(function(e2, r2) {
    let o2 = S(F, e2.__scopeTooltip), { forceMount: n2 = o2.forceMount, side: a2 = "top", ...i2 } = e2, s2 = k(F, e2.__scopeTooltip);
    return (0, t.jsx)(u.Presence, { present: n2 || s2.open, children: s2.disableHoverableContent ? (0, t.jsx)(K, { side: a2, ...i2, ref: r2 }) : (0, t.jsx)(I, { side: a2, ...i2, ref: r2 }) });
  }, "TooltipContent")), I = o.forwardRef(m(function(e2, r2) {
    let n2 = k(F, e2.__scopeTooltip), i2 = M(F, e2.__scopeTooltip), s2 = o.useRef(null), l2 = (0, a.useComposedRefs)(r2, s2), [c2, d2] = o.useState(null), { trigger: u2, onClose: p2 } = n2, x2 = s2.current, { onPointerInTransitChange: f2 } = i2, g2 = o.useCallback(() => {
      d2(null), f2(false);
    }, [f2]), h2 = o.useCallback((e3, t2) => {
      let r3 = e3.currentTarget, o2 = { x: e3.clientX, y: e3.clientY }, n3 = V(o2, r3.getBoundingClientRect());
      d2(X([...z(o2, n3), ...Z(t2.getBoundingClientRect())])), f2(true);
    }, [f2]);
    return o.useEffect(() => () => g2(), [g2]), o.useEffect(() => {
      if (u2 && x2) {
        let e3 = m((e4) => h2(e4, x2), "handleTriggerLeave"), t2 = m((e4) => h2(e4, u2), "handleContentLeave");
        return u2.addEventListener("pointerleave", e3), x2.addEventListener("pointerleave", t2), () => {
          u2.removeEventListener("pointerleave", e3), x2.removeEventListener("pointerleave", t2);
        };
      }
    }, [u2, x2, h2, g2]), o.useEffect(() => {
      if (c2) {
        let e3 = m((e4) => {
          let t2 = e4.target, r3 = { x: e4.clientX, y: e4.clientY }, o2 = u2?.contains(t2) || x2?.contains(t2), n3 = !G(r3, c2);
          o2 ? g2() : n3 && (g2(), p2());
        }, "handleTrackPointerGrace");
        return document.addEventListener("pointermove", e3), () => document.removeEventListener("pointermove", e3);
      }
    }, [u2, x2, c2, p2, g2]), (0, t.jsx)(K, { ...e2, ref: l2 });
  }, "TooltipContentHoverable")), H = (0, x.createSlottable)("TooltipContent"), K = o.forwardRef(m(function(e2, r2) {
    let { __scopeTooltip: n2, children: a2, "aria-label": i2, id: l2, onEscapeKeyDown: d2, onPointerDownOutside: u2, ...p2 } = e2, x2 = k(F, n2), f2 = C(n2), { onClose: v2 } = x2;
    o.useEffect(() => (document.addEventListener(P, v2), () => document.removeEventListener(P, v2)), [v2]), o.useEffect(() => {
      if (x2.trigger) {
        let e3 = m((e4) => {
          e4.target instanceof Node && e4.target.contains(x2.trigger) && v2();
        }, "handleScroll");
        return window.addEventListener("scroll", e3, { capture: true }), () => window.removeEventListener("scroll", e3, { capture: true });
      }
    }, [x2.trigger, v2]);
    let { setContentId: y2 } = x2;
    return (0, g.useLayoutEffect)(() => (y2(l2), () => {
      y2(void 0);
    }), [l2, y2]), (0, t.jsx)(s.DismissableLayer, { asChild: true, disableOutsidePointerEvents: false, onEscapeKeyDown: d2, onPointerDownOutside: u2, onFocusOutside: (e3) => e3.preventDefault(), onDismiss: v2, children: (0, t.jsxs)(c.Content, { "data-state": x2.stateAttribute, role: i2 ? void 0 : "tooltip", id: i2 ? void 0 : x2.contentId, ...f2, ...p2, ref: r2, style: { ...p2.style, "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)", "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)", "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)", "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)" }, children: [(0, t.jsx)(H, { children: a2 }), i2 ? (0, t.jsx)(h.Root, { id: x2.contentId, role: "tooltip", children: i2 }) : null] }) });
  }, "TooltipContentImpl")), U = o.forwardRef(m(function(e2, r2) {
    let { __scopeTooltip: o2, ...n2 } = e2, a2 = C(o2);
    return (0, t.jsx)(c.Arrow, { ...a2, ...n2, ref: r2 });
  }, "TooltipArrow"));
  function V(e2, t2) {
    let r2 = Math.abs(t2.top - e2.y), o2 = Math.abs(t2.bottom - e2.y), n2 = Math.abs(t2.right - e2.x), a2 = Math.abs(t2.left - e2.x);
    switch (Math.min(r2, o2, n2, a2)) {
      case a2:
        return "left";
      case n2:
        return "right";
      case r2:
        return "top";
      case o2:
        return "bottom";
      default:
        throw Error("unreachable");
    }
  }
  function z(e2, t2, r2 = 5) {
    let o2 = [];
    switch (t2) {
      case "top":
        o2.push({ x: e2.x - r2, y: e2.y + r2 }, { x: e2.x + r2, y: e2.y + r2 });
        break;
      case "bottom":
        o2.push({ x: e2.x - r2, y: e2.y - r2 }, { x: e2.x + r2, y: e2.y - r2 });
        break;
      case "left":
        o2.push({ x: e2.x + r2, y: e2.y - r2 }, { x: e2.x + r2, y: e2.y + r2 });
        break;
      case "right":
        o2.push({ x: e2.x - r2, y: e2.y - r2 }, { x: e2.x - r2, y: e2.y + r2 });
    }
    return o2;
  }
  function Z(e2) {
    let { top: t2, right: r2, bottom: o2, left: n2 } = e2;
    return [{ x: n2, y: t2 }, { x: r2, y: t2 }, { x: r2, y: o2 }, { x: n2, y: o2 }];
  }
  function G(e2, t2) {
    let { x: r2, y: o2 } = e2, n2 = false;
    for (let e3 = 0, a2 = t2.length - 1; e3 < t2.length; a2 = e3++) {
      let i2 = t2[e3], s2 = t2[a2], l2 = i2.x, c2 = i2.y, d2 = s2.x, u2 = s2.y;
      c2 > o2 != u2 > o2 && r2 < (d2 - l2) * (o2 - c2) / (u2 - c2) + l2 && (n2 = !n2);
    }
    return n2;
  }
  function X(e2) {
    let t2 = e2.slice();
    return t2.sort((e3, t3) => e3.x < t3.x ? -1 : e3.x > t3.x ? 1 : e3.y < t3.y ? -1 : 1 * !!(e3.y > t3.y)), Y(t2);
  }
  function Y(e2) {
    if (e2.length <= 1) return e2.slice();
    let t2 = [];
    for (let r3 = 0; r3 < e2.length; r3++) {
      let o2 = e2[r3];
      for (; t2.length >= 2; ) {
        let e3 = t2[t2.length - 1], r4 = t2[t2.length - 2];
        if ((e3.x - r4.x) * (o2.y - r4.y) >= (e3.y - r4.y) * (o2.x - r4.x)) t2.pop();
        else break;
      }
      t2.push(o2);
    }
    t2.pop();
    let r2 = [];
    for (let t3 = e2.length - 1; t3 >= 0; t3--) {
      let o2 = e2[t3];
      for (; r2.length >= 2; ) {
        let e3 = r2[r2.length - 1], t4 = r2[r2.length - 2];
        if ((e3.x - t4.x) * (o2.y - t4.y) >= (e3.y - t4.y) * (o2.x - t4.x)) r2.pop();
        else break;
      }
      r2.push(o2);
    }
    return (r2.pop(), 1 === t2.length && 1 === r2.length && t2[0].x === r2[0].x && t2[0].y === r2[0].y) ? t2 : t2.concat(r2);
  }
  m(V, "getExitSideFromRect"), m(z, "getPaddedExitPoints"), m(Z, "getPointsFromRect"), m(G, "isPointInPolygon"), m(X, "getHull"), m(Y, "getHullPresorted"), e.s(["Arrow", 0, U, "Content", 0, B, "Portal", 0, D, "Provider", 0, T, "Root", 0, R, "Tooltip", 0, R, "TooltipArrow", 0, U, "TooltipContent", 0, B, "TooltipPortal", 0, D, "TooltipProvider", 0, T, "TooltipTrigger", 0, O, "Trigger", 0, O, "createTooltipScope", 0, w], 600500);
  var $ = e.i(600500), $ = $, q = e.i(139895), J = e.i(826352);
  try {
    var Q = window;
    Q._sentryModuleMetadata = Q._sentryModuleMetadata || {}, Q._sentryModuleMetadata[new Q.Error().stack] = Object.assign({}, Q._sentryModuleMetadata[new Q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function W({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", ...e2, children: (0, t.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.5 7C13.5 10.5899 10.5899 13.5 7 13.5C3.41015 13.5 0.5 10.5899 0.5 7C0.5 3.41015 3.41015 0.5 7 0.5C10.5899 0.5 13.5 3.41015 13.5 7ZM6.5 7V9.5C6.5 9.77614 6.72386 10 7 10C7.27614 10 7.5 9.77614 7.5 9.5V7C7.5 6.72386 7.27614 6.5 7 6.5C6.72386 6.5 6.5 6.72386 6.5 7ZM6.25 4.75V4.75977C6.25 5.17398 6.58579 5.50977 7 5.50977C7.41421 5.50977 7.75 5.17398 7.75 4.75977V4.75C7.75 4.33579 7.41421 4 7 4C6.58579 4 6.25 4.33579 6.25 4.75Z", fill: "currentColor" }) });
  }
  var ee = e.i(551360);
  try {
    var et = window;
    et._sentryModuleMetadata = et._sentryModuleMetadata || {}, et._sentryModuleMetadata[new et.Error().stack] = Object.assign({}, et._sentryModuleMetadata[new et.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["PricingTableInfo", 0, function({ className: e2, tooltip: o2 }) {
    let n2 = (0, q.useIsTouchScreen)();
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)($.Provider, { children: (0, t.jsxs)($.Root, { delayDuration: 100, children: [(0, t.jsx)($.Trigger, { className: (0, ee.cn)(e2, "group flex size-5 items-center", { hidden: n2 }), children: (0, t.jsx)("div", { className: (0, ee.cn)("relative flex items-center justify-center", "before:absolute before:size-8"), children: (0, t.jsx)(W, { className: (0, ee.cn)("text-disabled-foreground", "trasition-colors duration-400", "group-hover:text-caption-foreground group-hover:duration-150") }) }) }), (0, t.jsx)($.Portal, { children: (0, t.jsx)($.Content, { side: "top", align: "start", alignOffset: 8, sideOffset: -2, className: (0, ee.cn)("z-3 max-w-64 rounded-md bg-black-300 p-2", "data-[state=delayed-open]:fade-in data-[state=delayed-open]:animate-in", "data-closed:fade-out data-closed:animate-out", { hidden: n2 }), style: { boxShadow: "0px 4px 4px -2px rgba(24, 39, 75, 0.06), 0px 2px 4px -2px rgba(24, 39, 75, 0.02), 0px 0px 2px 0px #E0E0E0" }, children: (0, t.jsx)("p", { className: "wrap-break-word text-pretty font-normal text-white-100 text-xs", children: o2 }) }) })] }) }), (0, t.jsxs)(r.Popover.Root, { children: [(0, t.jsx)(r.Popover.Trigger, { className: (0, ee.cn)("group flex size-5 items-center", { hidden: !n2 }, e2), children: (0, t.jsx)("div", { className: (0, ee.cn)("relative flex items-center justify-center", "before:absolute before:size-8"), children: (0, t.jsx)(W, { className: (0, ee.cn)("text-disabled-foreground", "group-data-open:text-caption-foreground") }) }) }), (0, t.jsx)(r.Popover.Portal, { children: (0, t.jsxs)(r.Popover.Content, { side: "top", className: (0, ee.cn)("z-3 flex max-w-64 items-start gap-1 rounded-md bg-black-300 p-2", "data-open:fade-in data-open:animate-in", "data-closed:fade-out data-closed:animate-out", { hidden: !n2 }), style: { boxShadow: "0px 4px 4px -2px rgba(24, 39, 75, 0.06), 0px 2px 4px -2px rgba(24, 39, 75, 0.02), 0px 0px 2px 0px #E0E0E0" }, children: [(0, t.jsx)("p", { className: "wrap-break-word text-pretty font-normal text-white-100 text-xs", children: o2 }), (0, t.jsx)(r.Popover.Close, { className: (0, ee.cn)("text-white-900", "active:text-white-800"), children: (0, t.jsx)(J.Cross12, { className: "" }) })] }) })] })] });
  }], 296293);
}, 214087, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(930469), o = e.i(656090), n = e.i(296293), a = e.i(141597), i = e.i(65228), s = e.i(551360);
  try {
    var l = window;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["PricingTableMobileGroup", 0, function({ currency: e2, plans: l2, group: c }) {
    return (0, t.jsxs)("div", { children: [(0, t.jsx)("h3", { className: "border-subtle-stroke border-b py-4 text-lg text-secondary-foreground", children: c.title }), c.features.map(({ id: c2, title: d, tooltip: u, format: p, values: x, children: f }) => (0, t.jsxs)(r.Root, { defaultOpen: true, children: [(0, t.jsxs)("div", { className: "flex w-full items-center justify-between border-subtle-stroke border-b py-4", children: [(0, t.jsxs)("span", { className: "flex items-start gap-x-1.5", children: [(0, t.jsxs)("div", { className: "flex gap-x-2", children: [(0, t.jsx)("span", { className: "text-sm text-tertiary-foreground", children: d }), "price" === p && (0, t.jsx)(o.PricingTableFeatureTitleBadge, {})] }), u && (0, t.jsx)(n.PricingTableInfo, { tooltip: u })] }), (0, t.jsx)(r.Trigger, { asChild: true, children: (0, t.jsx)("button", { type: "button", className: (0, s.cn)("group h-5", "before:absolute before:size-8"), children: (0, t.jsx)(i.ChevronDown, { className: "shrink-0 transition-transform group-data-open:-rotate-180" }) }) })] }), (0, t.jsxs)(r.Content, { className: "overflow-hidden will-change-[height] data-closed:animate-collapsibleSlideUp data-open:animate-collapsibleSlideDown", children: ["price" !== p && l2.map((r2, o2) => (0, t.jsxs)("div", { className: "grid grid-cols-2 items-start border-weak-stroke border-b py-2.5 text-sm text-tertiary-foreground", children: [(0, t.jsx)("span", { className: "text-accent-foreground", children: r2.title }), (0, t.jsx)(a.PricingTableValue, { currency: e2, value: x[o2].value })] }, r2._uid)), "price" === p && f.map(({ id: r2, title: o2, values: n2 }) => (0, t.jsxs)("div", { className: "grid grid-cols-2 items-start border-weak-stroke border-b py-3 text-sm text-tertiary-foreground", children: [(0, t.jsx)("span", { children: o2 }), (0, t.jsx)(a.PricingTableValue, { currency: e2, value: n2[2].value })] }, r2))] })] }, c2))] });
  }]);
}, 151529, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(94259), o = e.i(647473);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function a(e2) {
    if (!e2) return "";
    let t2 = Number(e2);
    return Number.isFinite(t2) ? t2.toLocaleString("en-US") : e2;
  }
  e.s(["PricingTablePrice", 0, function({ className: e2, plan: n2, currency: i }) {
    let s = (0, o.getPricingCurrencySymbol)(i), { pricing: l, isCustom: c } = n2, d = l?.find((e3) => e3.currency === i);
    return (0, t.jsxs)("div", { className: e2, children: [c || !d ? (0, t.jsx)("p", { className: "text-accent-foreground text-xs", children: "Get a custom quote," }) : (0, t.jsxs)("p", { className: "text-accent-foreground text-xs", children: [(0, t.jsxs)("span", { children: [s, (0, t.jsx)(r.PricingPeriodValue, { annual: a(d?.annualPrice), monthly: a(d?.monthlyPrice) })] }), " ", "per user/month,"] }), c ? (0, t.jsx)("p", { className: "text-accent-foreground text-xs", children: "billed annually" }) : (0, t.jsxs)("p", { className: "text-accent-foreground text-xs", children: ["billed ", (0, t.jsx)(r.PricingPeriodValue, { annual: "annually", monthly: "monthly" })] })] });
  }]);
}, 141597, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(94259), o = e.i(298567), n = e.i(713649);
  try {
    var a = window;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let i = { EUR: "\u20AC", GBP: "\xA3", USD: "$" }, s = { EUR: /€\d+(?:,\d{3})*/g, GBP: /£\d+(?:,\d{3})*/g, USD: /\$\d+(?:,\d{3})*/g };
  e.s(["PricingTableValue", 0, function({ currency: e2, value: a2 }) {
    if ("yes" === a2.toLowerCase()) return (0, t.jsx)("span", { className: "flex h-5 items-center", children: (0, t.jsx)(o.CheckCircleFill14, { className: "text-tertiary-foreground" }) });
    if ("no" === a2.toLowerCase()) return (0, t.jsx)("span", { className: "flex h-5 items-center", children: (0, t.jsx)(n.Cross14, { className: "text-caption-foreground" }) });
    let l = i[e2], c = Array.from(a2.match(s[e2]) || []).map((e3) => parseInt(e3.slice(1).replaceAll(",", ""), 10)), d = /monthly/i.test(a2) && /annual/i.test(a2) ? "/mo" : "";
    if (2 === c.length) {
      let [e3, o2] = c.sort((e4, t2) => e4 - t2);
      return (0, t.jsx)(r.PricingPeriodValue, { annual: l + e3.toLocaleString("en-US") + d, monthly: l + o2.toLocaleString("en-US") + d });
    }
    return (0, t.jsx)(t.Fragment, { children: a2 });
  }]);
}, 298567, (e) => {
  "use strict";
  var t = e.i(68982);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["CheckCircleFill14", 0, function({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", ...e2, children: (0, t.jsx)("path", { d: "M7 0.5C10.5899 0.5 13.5 3.41015 13.5 7C13.5 10.5899 10.5899 13.5 7 13.5C3.41015 13.5 0.5 10.5899 0.5 7C0.5 3.41015 3.41015 0.5 7 0.5ZM9.77734 4.58398C9.54758 4.43081 9.23716 4.49289 9.08398 4.72266L6.65332 8.36914C6.5595 8.50987 6.35573 8.51869 6.25 8.38672L4.89062 6.6875C4.71812 6.47187 4.40313 6.43687 4.1875 6.60938C3.97187 6.78188 3.93687 7.09687 4.10938 7.3125L5.46875 9.01172C5.99728 9.67219 7.01611 9.6277 7.48535 8.92383L9.91602 5.27734C10.0692 5.04758 10.0071 4.73716 9.77734 4.58398Z", fill: "currentColor" }) });
  }]);
}, 826352, (e) => {
  "use strict";
  var t = e.i(68982);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["Cross12", 0, function({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", ...e2, children: (0, t.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.35355 3.35343C9.54882 3.15817 9.54882 2.84159 9.35355 2.64632C9.15829 2.45106 8.84171 2.45106 8.64645 2.64632L6 5.29277L3.35355 2.64632C3.15829 2.45106 2.84171 2.45106 2.64645 2.64632C2.45118 2.84159 2.45118 3.15817 2.64645 3.35343L5.29289 5.99988L2.64645 8.64632C2.45118 8.84159 2.45118 9.15817 2.64645 9.35343C2.84171 9.54869 3.15829 9.54869 3.35355 9.35343L6 6.70698L8.64645 9.35343C8.84171 9.54869 9.15829 9.54869 9.35355 9.35343C9.54882 9.15817 9.54882 8.84159 9.35355 8.64632L6.70711 5.99988L9.35355 3.35343Z", fill: "currentColor" }) });
  }]);
}]);
