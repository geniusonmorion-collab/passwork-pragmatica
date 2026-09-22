;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "e635c9b5-b774-286f-cf7c-81b0c906ea2c");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 364937, (e) => {
  "use strict";
  var o = e.i(856757), r = e.i(543836), t = e.i(728654), n = e.i(652531), a = e.i(999819), i = e.i(67110), s = e.i(619784), l = e.i(119637), c = e.i(483951), p = e.i(291196), u = e.i(198623), d = e.i(45240), v = e.i(603642), f = e.i(548913), P = e.i(73772), h = e.i(813044), g = e.i(68982);
  try {
    var C = "u" > typeof window ? window : e.g;
    C._sentryModuleMetadata = C._sentryModuleMetadata || {}, C._sentryModuleMetadata[new C.Error().stack] = Object.assign({}, C._sentryModuleMetadata[new C.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var x = Object.defineProperty, m = (e2, o2) => x(e2, "name", { value: o2, configurable: true }), w = "Popover", [R, b] = (0, n.createContextScope)(w, [c.createPopperScope]), j = (0, c.createPopperScope)(), [A, y] = R(w), O = m((e2) => {
    let { __scopePopover: r2, children: t2, open: n2, defaultOpen: a2, onOpenChange: i2, modal: s2 = false } = e2, p2 = j(r2), u2 = o.useRef(null), [d2, v2] = o.useState(false), [P2, h2] = (0, f.useControllableState)({ prop: n2, defaultProp: a2 ?? false, onChange: i2, caller: w });
    return (0, g.jsx)(c.Root, { ...p2, children: (0, g.jsx)(A, { scope: r2, contentId: (0, l.useId)(), triggerRef: u2, open: P2, onOpenChange: h2, onOpenToggle: o.useCallback(() => h2((e3) => !e3), [h2]), hasCustomAnchor: d2, onCustomAnchorAdd: o.useCallback(() => v2(true), []), onCustomAnchorRemove: o.useCallback(() => v2(false), []), modal: s2, children: t2 }) });
  }, "Popover"), E = o.forwardRef(m(function(e2, r2) {
    let { __scopePopover: t2, ...n2 } = e2, a2 = y("PopoverAnchor", t2), i2 = j(t2), { onCustomAnchorAdd: s2, onCustomAnchorRemove: l2 } = a2;
    return o.useEffect(() => (s2(), () => l2()), [s2, l2]), (0, g.jsx)(c.Anchor, { ...i2, ...n2, ref: r2 });
  }, "PopoverAnchor")), F = o.forwardRef(m(function(e2, o2) {
    let { __scopePopover: n2, ...a2 } = e2, i2 = y("PopoverTrigger", n2), s2 = j(n2), l2 = (0, t.useComposedRefs)(o2, i2.triggerRef), p2 = (0, g.jsx)(d.Primitive.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": i2.open, "aria-controls": i2.open ? i2.contentId : void 0, "data-state": G(i2.open), ...a2, ref: l2, onClick: (0, r.composeEventHandlers)(e2.onClick, i2.onOpenToggle) });
    return i2.hasCustomAnchor ? p2 : (0, g.jsx)(c.Anchor, { asChild: true, ...s2, children: p2 });
  }, "PopoverTrigger")), _ = "PopoverPortal", [M, k] = R(_, { forceMount: void 0 }), D = m((e2) => {
    let { __scopePopover: o2, forceMount: r2, children: t2, container: n2 } = e2, a2 = y(_, o2);
    return (0, g.jsx)(M, { scope: o2, forceMount: r2, children: (0, g.jsx)(u.Presence, { present: r2 || a2.open, children: (0, g.jsx)(p.Portal, { asChild: true, container: n2, children: t2 }) }) });
  }, "PopoverPortal"), S = "PopoverContent", T = o.forwardRef(m(function(e2, o2) {
    let r2 = k(S, e2.__scopePopover), { forceMount: t2 = r2.forceMount, ...n2 } = e2, a2 = y(S, e2.__scopePopover);
    return (0, g.jsx)(u.Presence, { present: t2 || a2.open, children: a2.modal ? (0, g.jsx)(H, { ...n2, ref: o2 }) : (0, g.jsx)(K, { ...n2, ref: o2 }) });
  }, "PopoverContent")), I = (0, v.createSlot)("PopoverContent.RemoveScroll"), H = o.forwardRef(m(function(e2, n2) {
    let a2 = y(S, e2.__scopePopover), i2 = o.useRef(null), s2 = (0, t.useComposedRefs)(n2, i2), l2 = o.useRef(false);
    return o.useEffect(() => {
      let e3 = i2.current;
      if (e3) return (0, P.hideOthers)(e3);
    }, []), (0, g.jsx)(h.RemoveScroll, { as: I, allowPinchZoom: true, children: (0, g.jsx)(B, { ...e2, ref: s2, trapFocus: a2.open, disableOutsidePointerEvents: true, onCloseAutoFocus: (0, r.composeEventHandlers)(e2.onCloseAutoFocus, (e3) => {
      e3.preventDefault(), l2.current || a2.triggerRef.current?.focus();
    }), onPointerDownOutside: (0, r.composeEventHandlers)(e2.onPointerDownOutside, (e3) => {
      let o2 = e3.detail.originalEvent, r2 = 0 === o2.button && true === o2.ctrlKey;
      l2.current = 2 === o2.button || r2;
    }, { checkForDefaultPrevented: false }), onFocusOutside: (0, r.composeEventHandlers)(e2.onFocusOutside, (e3) => e3.preventDefault(), { checkForDefaultPrevented: false }) }) });
  }, "PopoverContentModal")), K = o.forwardRef(m(function(e2, r2) {
    let t2 = y(S, e2.__scopePopover), n2 = o.useRef(false), a2 = o.useRef(false);
    return (0, g.jsx)(B, { ...e2, ref: r2, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (o2) => {
      e2.onCloseAutoFocus?.(o2), o2.defaultPrevented || (n2.current || t2.triggerRef.current?.focus(), o2.preventDefault()), n2.current = false, a2.current = false;
    }, onInteractOutside: (o2) => {
      e2.onInteractOutside?.(o2), o2.defaultPrevented || (n2.current = true, "pointerdown" === o2.detail.originalEvent.type && (a2.current = true));
      let r3 = o2.target;
      t2.triggerRef.current?.contains(r3) && o2.preventDefault(), "focusin" === o2.detail.originalEvent.type && a2.current && o2.preventDefault();
    } });
  }, "PopoverContentNonModal")), B = o.forwardRef(m(function(e2, o2) {
    let { __scopePopover: r2, trapFocus: t2, onOpenAutoFocus: n2, onCloseAutoFocus: l2, disableOutsidePointerEvents: p2, onEscapeKeyDown: u2, onPointerDownOutside: d2, onFocusOutside: v2, onInteractOutside: f2, ...P2 } = e2, h2 = y(S, r2), C2 = j(r2);
    return (0, i.useFocusGuards)(), (0, g.jsx)(s.FocusScope, { asChild: true, loop: true, trapped: t2, onMountAutoFocus: n2, onUnmountAutoFocus: l2, children: (0, g.jsx)(a.DismissableLayer, { asChild: true, disableOutsidePointerEvents: p2, onInteractOutside: f2, onEscapeKeyDown: u2, onPointerDownOutside: d2, onFocusOutside: v2, onDismiss: () => h2.onOpenChange(false), deferPointerDownOutside: true, children: (0, g.jsx)(c.Content, { "data-state": G(h2.open), role: "dialog", id: h2.contentId, ...C2, ...P2, ref: o2, style: { ...P2.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-popover-content-available-width": "var(--radix-popper-available-width)", "--radix-popover-content-available-height": "var(--radix-popper-available-height)", "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)", "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)" } }) }) });
  }, "PopoverContentImpl")), U = o.forwardRef(m(function(e2, o2) {
    let { __scopePopover: t2, ...n2 } = e2, a2 = y("PopoverClose", t2);
    return (0, g.jsx)(d.Primitive.button, { type: "button", ...n2, ref: o2, onClick: (0, r.composeEventHandlers)(e2.onClick, () => a2.onOpenChange(false)) });
  }, "PopoverClose")), q = o.forwardRef(m(function(e2, o2) {
    let { __scopePopover: r2, ...t2 } = e2, n2 = j(r2);
    return (0, g.jsx)(c.Arrow, { ...n2, ...t2, ref: o2 });
  }, "PopoverArrow"));
  function G(e2) {
    return e2 ? "open" : "closed";
  }
  m(G, "getState"), e.s(["Anchor", 0, E, "Arrow", 0, q, "Close", 0, U, "Content", 0, T, "Popover", 0, O, "PopoverAnchor", 0, E, "PopoverArrow", 0, q, "PopoverClose", 0, U, "PopoverContent", 0, T, "PopoverPortal", 0, D, "PopoverTrigger", 0, F, "Portal", 0, D, "Root", 0, O, "Trigger", 0, F, "createPopoverScope", 0, b], 102580);
  var L = e.i(102580);
  e.s(["Popover", 0, L], 364937);
}, 800135, (e) => {
  e.q("/_next/static/immutable/media/download-header-dock-glow.0nf4y2mc58bj2.jpg");
}]);
