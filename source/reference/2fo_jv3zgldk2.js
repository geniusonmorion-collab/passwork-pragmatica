;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "f4e9cb6d-6e56-53a4-9565-b29428612fa2");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 900567, (e) => {
  "use strict";
  let t;
  var n = e.i(856757), r = e.i(291967), a = e.i(205978), o = e.i(922528), i = e.i(713123), l = e.i(936589), u = e.i(253532), d = e.i(287620), s = e.i(929297), c = e.i(68982);
  try {
    var f = "u" > typeof window ? window : e.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var m = "focusScope.autoFocusOnMount", p = "focusScope.autoFocusOnUnmount", v = { bubbles: false, cancelable: true }, g = n.forwardRef((e2, t2) => {
    let { loop: r2 = false, trapped: o2 = false, onMountAutoFocus: i2, onUnmountAutoFocus: l2, ...u2 } = e2, [f2, g2] = n.useState(null), E2 = (0, s.useCallbackRef)(i2), x2 = (0, s.useCallbackRef)(l2), R2 = n.useRef(null), C2 = (0, a.useComposedRefs)(t2, (e3) => g2(e3)), M2 = n.useRef({ paused: false, pause() {
      this.paused = true;
    }, resume() {
      this.paused = false;
    } }).current;
    n.useEffect(() => {
      if (o2) {
        let e3 = function(e4) {
          if (M2.paused || !f2) return;
          let t4 = e4.target;
          f2.contains(t4) ? R2.current = t4 : y(R2.current, { select: true });
        }, t3 = function(e4) {
          if (M2.paused || !f2) return;
          let t4 = e4.relatedTarget;
          null !== t4 && (f2.contains(t4) || y(R2.current, { select: true }));
        };
        document.addEventListener("focusin", e3), document.addEventListener("focusout", t3);
        let n2 = new MutationObserver(function(e4) {
          if (document.activeElement === document.body) for (let t4 of e4) t4.removedNodes.length > 0 && y(f2);
        });
        return f2 && n2.observe(f2, { childList: true, subtree: true }), () => {
          document.removeEventListener("focusin", e3), document.removeEventListener("focusout", t3), n2.disconnect();
        };
      }
    }, [o2, f2, M2.paused]), n.useEffect(() => {
      if (f2) {
        b.add(M2);
        let e3 = document.activeElement;
        if (!f2.contains(e3)) {
          let t3 = new CustomEvent(m, v);
          f2.addEventListener(m, E2), f2.dispatchEvent(t3), t3.defaultPrevented || ((function(e4, { select: t4 = false } = {}) {
            let n2 = document.activeElement;
            for (let r3 of e4) if (y(r3, { select: t4 }), document.activeElement !== n2) return;
          })(w(f2).filter((e4) => "A" !== e4.tagName), { select: true }), document.activeElement === e3 && y(f2));
        }
        return () => {
          f2.removeEventListener(m, E2), setTimeout(() => {
            let t3 = new CustomEvent(p, v);
            f2.addEventListener(p, x2), f2.dispatchEvent(t3), t3.defaultPrevented || y(e3 ?? document.body, { select: true }), f2.removeEventListener(p, x2), b.remove(M2);
          }, 0);
        };
      }
    }, [f2, E2, x2, M2]);
    let T2 = n.useCallback((e3) => {
      if (!r2 && !o2 || M2.paused) return;
      let t3 = "Tab" === e3.key && !e3.altKey && !e3.ctrlKey && !e3.metaKey, n2 = document.activeElement;
      if (t3 && n2) {
        var a2;
        let t4, o3 = e3.currentTarget, [i3, l3] = [h(t4 = w(a2 = o3), a2), h(t4.reverse(), a2)];
        i3 && l3 ? e3.shiftKey || n2 !== l3 ? e3.shiftKey && n2 === i3 && (e3.preventDefault(), r2 && y(l3, { select: true })) : (e3.preventDefault(), r2 && y(i3, { select: true })) : n2 === o3 && e3.preventDefault();
      }
    }, [r2, o2, M2.paused]);
    return (0, c.jsx)(d.Primitive.div, { tabIndex: -1, ...u2, ref: C2, onKeyDown: T2 });
  });
  function w(e2) {
    let t2 = [], n2 = document.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, { acceptNode: (e3) => {
      let t3 = "INPUT" === e3.tagName && "hidden" === e3.type;
      return e3.disabled || e3.hidden || t3 ? NodeFilter.FILTER_SKIP : e3.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    } });
    for (; n2.nextNode(); ) t2.push(n2.currentNode);
    return t2;
  }
  function h(e2, t2) {
    for (let n2 of e2) if (!(function(e3, { upTo: t3 }) {
      if ("hidden" === getComputedStyle(e3).visibility) return true;
      for (; e3 && (void 0 === t3 || e3 !== t3); ) {
        if ("none" === getComputedStyle(e3).display) return true;
        e3 = e3.parentElement;
      }
      return false;
    })(n2, { upTo: t2 })) return n2;
  }
  function y(e2, { select: t2 = false } = {}) {
    if (e2 && e2.focus) {
      var n2;
      let r2 = document.activeElement;
      e2.focus({ preventScroll: true }), e2 !== r2 && (n2 = e2) instanceof HTMLInputElement && "select" in n2 && t2 && e2.select();
    }
  }
  g.displayName = "FocusScope";
  var b = (t = [], { add(e2) {
    let n2 = t[0];
    e2 !== n2 && n2?.pause(), (t = E(t, e2)).unshift(e2);
  }, remove(e2) {
    t = E(t, e2), t[0]?.resume();
  } });
  function E(e2, t2) {
    let n2 = [...e2], r2 = n2.indexOf(t2);
    return -1 !== r2 && n2.splice(r2, 1), n2;
  }
  var x = e.i(339979), R = e.i(685995);
  try {
    var C = "u" > typeof window ? window : e.g;
    C._sentryModuleMetadata = C._sentryModuleMetadata || {}, C._sentryModuleMetadata[new C.Error().stack] = Object.assign({}, C._sentryModuleMetadata[new C.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var M = 0;
  function T() {
    let e2 = document.createElement("span");
    return e2.setAttribute("data-radix-focus-guard", ""), e2.tabIndex = 0, e2.style.outline = "none", e2.style.opacity = "0", e2.style.position = "fixed", e2.style.pointerEvents = "none", e2;
  }
  var D = e.i(813044), P = e.i(73772), O = e.i(786874);
  try {
    var $ = "u" > typeof window ? window : e.g;
    $._sentryModuleMetadata = $._sentryModuleMetadata || {}, $._sentryModuleMetadata[new $.Error().stack] = Object.assign({}, $._sentryModuleMetadata[new $.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var k = "Dialog", [F, N] = (0, o.createContextScope)(k), [S, j] = F(k), I = (e2) => {
    let { __scopeDialog: t2, children: r2, open: a2, defaultOpen: o2, onOpenChange: u2, modal: d2 = true } = e2, s2 = n.useRef(null), f2 = n.useRef(null), [m2, p2] = (0, l.useControllableState)({ prop: a2, defaultProp: o2 ?? false, onChange: u2, caller: k });
    return (0, c.jsx)(S, { scope: t2, triggerRef: s2, contentRef: f2, contentId: (0, i.useId)(), titleId: (0, i.useId)(), descriptionId: (0, i.useId)(), open: m2, onOpenChange: p2, onOpenToggle: n.useCallback(() => p2((e3) => !e3), [p2]), modal: d2, children: r2 });
  };
  I.displayName = k;
  var A = "DialogTrigger", L = n.forwardRef((e2, t2) => {
    let { __scopeDialog: n2, ...o2 } = e2, i2 = j(A, n2), l2 = (0, a.useComposedRefs)(t2, i2.triggerRef);
    return (0, c.jsx)(d.Primitive.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": i2.open, "aria-controls": i2.contentId, "data-state": ea(i2.open), ...o2, ref: l2, onClick: (0, r.composeEventHandlers)(e2.onClick, i2.onOpenToggle) });
  });
  L.displayName = A;
  var _ = "DialogPortal", [B, H] = F(_, { forceMount: void 0 }), W = (e2) => {
    let { __scopeDialog: t2, forceMount: r2, children: a2, container: o2 } = e2, i2 = j(_, t2);
    return (0, c.jsx)(B, { scope: t2, forceMount: r2, children: n.Children.map(a2, (e3) => (0, c.jsx)(R.Presence, { present: r2 || i2.open, children: (0, c.jsx)(x.Portal, { asChild: true, container: o2, children: e3 }) })) });
  };
  W.displayName = _;
  var z = "DialogOverlay", q = n.forwardRef((e2, t2) => {
    let n2 = H(z, e2.__scopeDialog), { forceMount: r2 = n2.forceMount, ...a2 } = e2, o2 = j(z, e2.__scopeDialog);
    return o2.modal ? (0, c.jsx)(R.Presence, { present: r2 || o2.open, children: (0, c.jsx)(Y, { ...a2, ref: t2 }) }) : null;
  });
  q.displayName = z;
  var K = (0, O.createSlot)("DialogOverlay.RemoveScroll"), Y = n.forwardRef((e2, t2) => {
    let { __scopeDialog: n2, ...r2 } = e2, a2 = j(z, n2);
    return (0, c.jsx)(D.RemoveScroll, { as: K, allowPinchZoom: true, shards: [a2.contentRef], children: (0, c.jsx)(d.Primitive.div, { "data-state": ea(a2.open), ...r2, ref: t2, style: { pointerEvents: "auto", ...r2.style } }) });
  }), U = "DialogContent", X = n.forwardRef((e2, t2) => {
    let n2 = H(U, e2.__scopeDialog), { forceMount: r2 = n2.forceMount, ...a2 } = e2, o2 = j(U, e2.__scopeDialog);
    return (0, c.jsx)(R.Presence, { present: r2 || o2.open, children: o2.modal ? (0, c.jsx)(V, { ...a2, ref: t2 }) : (0, c.jsx)(Z, { ...a2, ref: t2 }) });
  });
  X.displayName = U;
  var V = n.forwardRef((e2, t2) => {
    let o2 = j(U, e2.__scopeDialog), i2 = n.useRef(null), l2 = (0, a.useComposedRefs)(t2, o2.contentRef, i2);
    return n.useEffect(() => {
      let e3 = i2.current;
      if (e3) return (0, P.hideOthers)(e3);
    }, []), (0, c.jsx)(G, { ...e2, ref: l2, trapFocus: o2.open, disableOutsidePointerEvents: true, onCloseAutoFocus: (0, r.composeEventHandlers)(e2.onCloseAutoFocus, (e3) => {
      e3.preventDefault(), o2.triggerRef.current?.focus();
    }), onPointerDownOutside: (0, r.composeEventHandlers)(e2.onPointerDownOutside, (e3) => {
      let t3 = e3.detail.originalEvent, n2 = 0 === t3.button && true === t3.ctrlKey;
      (2 === t3.button || n2) && e3.preventDefault();
    }), onFocusOutside: (0, r.composeEventHandlers)(e2.onFocusOutside, (e3) => e3.preventDefault()) });
  }), Z = n.forwardRef((e2, t2) => {
    let r2 = j(U, e2.__scopeDialog), a2 = n.useRef(false), o2 = n.useRef(false);
    return (0, c.jsx)(G, { ...e2, ref: t2, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (t3) => {
      e2.onCloseAutoFocus?.(t3), t3.defaultPrevented || (a2.current || r2.triggerRef.current?.focus(), t3.preventDefault()), a2.current = false, o2.current = false;
    }, onInteractOutside: (t3) => {
      e2.onInteractOutside?.(t3), t3.defaultPrevented || (a2.current = true, "pointerdown" === t3.detail.originalEvent.type && (o2.current = true));
      let n2 = t3.target;
      r2.triggerRef.current?.contains(n2) && t3.preventDefault(), "focusin" === t3.detail.originalEvent.type && o2.current && t3.preventDefault();
    } });
  }), G = n.forwardRef((e2, t2) => {
    let { __scopeDialog: r2, trapFocus: o2, onOpenAutoFocus: i2, onCloseAutoFocus: l2, ...d2 } = e2, s2 = j(U, r2), f2 = n.useRef(null), m2 = (0, a.useComposedRefs)(t2, f2);
    return n.useEffect(() => {
      let e3 = document.querySelectorAll("[data-radix-focus-guard]");
      return document.body.insertAdjacentElement("afterbegin", e3[0] ?? T()), document.body.insertAdjacentElement("beforeend", e3[1] ?? T()), M++, () => {
        1 === M && document.querySelectorAll("[data-radix-focus-guard]").forEach((e4) => e4.remove()), M--;
      };
    }, []), (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(g, { asChild: true, loop: true, trapped: o2, onMountAutoFocus: i2, onUnmountAutoFocus: l2, children: (0, c.jsx)(u.DismissableLayer, { role: "dialog", id: s2.contentId, "aria-describedby": s2.descriptionId, "aria-labelledby": s2.titleId, "data-state": ea(s2.open), ...d2, ref: m2, onDismiss: () => s2.onOpenChange(false) }) }), (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(eu, { titleId: s2.titleId }), (0, c.jsx)(ed, { contentRef: f2, descriptionId: s2.descriptionId })] })] });
  }), J = "DialogTitle", Q = n.forwardRef((e2, t2) => {
    let { __scopeDialog: n2, ...r2 } = e2, a2 = j(J, n2);
    return (0, c.jsx)(d.Primitive.h2, { id: a2.titleId, ...r2, ref: t2 });
  });
  Q.displayName = J;
  var ee = "DialogDescription", et = n.forwardRef((e2, t2) => {
    let { __scopeDialog: n2, ...r2 } = e2, a2 = j(ee, n2);
    return (0, c.jsx)(d.Primitive.p, { id: a2.descriptionId, ...r2, ref: t2 });
  });
  et.displayName = ee;
  var en = "DialogClose", er = n.forwardRef((e2, t2) => {
    let { __scopeDialog: n2, ...a2 } = e2, o2 = j(en, n2);
    return (0, c.jsx)(d.Primitive.button, { type: "button", ...a2, ref: t2, onClick: (0, r.composeEventHandlers)(e2.onClick, () => o2.onOpenChange(false)) });
  });
  function ea(e2) {
    return e2 ? "open" : "closed";
  }
  er.displayName = en;
  var eo = "DialogTitleWarning", [ei, el] = (0, o.createContext)(eo, { contentName: U, titleName: J, docsSlug: "dialog" }), eu = ({ titleId: e2 }) => {
    let t2 = el(eo), r2 = `\`${t2.contentName}\` requires a \`${t2.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t2.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t2.docsSlug}`;
    return n.useEffect(() => {
      e2 && (document.getElementById(e2) || console.error(r2));
    }, [r2, e2]), null;
  }, ed = ({ contentRef: e2, descriptionId: t2 }) => {
    let r2 = el("DialogDescriptionWarning"), a2 = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${r2.contentName}}.`;
    return n.useEffect(() => {
      let n2 = e2.current?.getAttribute("aria-describedby");
      t2 && n2 && (document.getElementById(t2) || console.warn(a2));
    }, [a2, e2, t2]), null;
  };
  e.s(["Close", 0, er, "Content", 0, X, "Description", 0, et, "Overlay", 0, q, "Portal", 0, W, "Root", 0, I, "Title", 0, Q, "Trigger", 0, L], 900567);
}, 78915, (e) => {
  "use strict";
  var t = e.i(360457);
  e.s(["VisuallyHidden", 0, t]);
}, 79587, (e) => {
  "use strict";
  let t;
  var n = e.i(900567), r = e.i(856757);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let o = r.default.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, onPress: () => {
  }, onRelease: () => {
  }, onDrag: () => {
  }, onNestedDrag: () => {
  }, onNestedOpenChange: () => {
  }, onNestedRelease: () => {
  }, openProp: void 0, dismissible: false, isOpen: false, isDragging: false, keyboardIsOpen: { current: false }, snapPointsOffset: null, snapPoints: null, handleOnly: false, modal: false, shouldFade: false, activeSnapPoint: null, onOpenChange: () => {
  }, setActiveSnapPoint: () => {
  }, closeDrawer: () => {
  }, direction: "bottom", shouldAnimate: { current: true }, shouldScaleBackground: false, setBackgroundColorOnScale: true, noBodyStyles: false, container: null, autoFocus: false }), i = () => {
    let e2 = r.default.useContext(o);
    if (!e2) throw Error("useDrawerContext must be used within a Drawer.Root");
    return e2;
  };
  function l() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
  function u() {
    return d(/^iPhone/) || d(/^iPad/) || d(/^Mac/) && navigator.maxTouchPoints > 1;
  }
  function d(e2) {
    return "u" > typeof window && null != window.navigator ? e2.test(window.navigator.platform) : void 0;
  }
  !(function(e2) {
    if (!e2 || "u" < typeof document) return;
    let t2 = document.head || document.getElementsByTagName("head")[0], n2 = document.createElement("style");
    n2.type = "text/css", t2.appendChild(n2), n2.styleSheet ? n2.styleSheet.cssText = e2 : n2.appendChild(document.createTextNode(e2));
  })("[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}");
  let s = "u" > typeof window ? r.useLayoutEffect : r.useEffect;
  function c(...e2) {
    return (...t2) => {
      for (let n2 of e2) "function" == typeof n2 && n2(...t2);
    };
  }
  let f = "u" > typeof document && window.visualViewport;
  function m(e2) {
    let t2 = window.getComputedStyle(e2);
    return /(auto|scroll)/.test(t2.overflow + t2.overflowX + t2.overflowY);
  }
  function p(e2) {
    for (m(e2) && (e2 = e2.parentElement); e2 && !m(e2); ) e2 = e2.parentElement;
    return e2 || document.scrollingElement || document.documentElement;
  }
  let v = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]), g = 0;
  function w(e2, t2, n2, r2) {
    return e2.addEventListener(t2, n2, r2), () => {
      e2.removeEventListener(t2, n2, r2);
    };
  }
  function h(e2) {
    let t2 = document.scrollingElement || document.documentElement;
    for (; e2 && e2 !== t2; ) {
      let t3 = p(e2);
      if (t3 !== document.documentElement && t3 !== document.body && t3 !== e2) {
        let n2 = t3.getBoundingClientRect().top, r2 = e2.getBoundingClientRect().top;
        e2.getBoundingClientRect().bottom > t3.getBoundingClientRect().bottom + 24 && (t3.scrollTop += r2 - n2);
      }
      e2 = t3.parentElement;
    }
  }
  function y(e2) {
    return e2 instanceof HTMLInputElement && !v.has(e2.type) || e2 instanceof HTMLTextAreaElement || e2 instanceof HTMLElement && e2.isContentEditable;
  }
  function b(...e2) {
    return r.useCallback(/* @__PURE__ */ (function(...e3) {
      return (t2) => e3.forEach((e4) => {
        "function" == typeof e4 ? e4(t2) : null != e4 && (e4.current = t2);
      });
    })(...e2), e2);
  }
  let E = /* @__PURE__ */ new WeakMap();
  function x(e2, t2, n2 = false) {
    if (!e2 || !(e2 instanceof HTMLElement)) return;
    let r2 = {};
    Object.entries(t2).forEach(([t3, n3]) => {
      t3.startsWith("--") ? e2.style.setProperty(t3, n3) : (r2[t3] = e2.style[t3], e2.style[t3] = n3);
    }), n2 || E.set(e2, r2);
  }
  let R = (e2) => {
    switch (e2) {
      case "top":
      case "bottom":
        return true;
      case "left":
      case "right":
        return false;
      default:
        return e2;
    }
  };
  function C(e2, t2) {
    if (!e2) return null;
    let n2 = window.getComputedStyle(e2), r2 = n2.transform || n2.webkitTransform || n2.mozTransform, a2 = r2.match(/^matrix3d\((.+)\)$/);
    return a2 ? parseFloat(a2[1].split(", ")[R(t2) ? 13 : 12]) : (a2 = r2.match(/^matrix\((.+)\)$/)) ? parseFloat(a2[1].split(", ")[R(t2) ? 5 : 4]) : null;
  }
  function M(e2, t2) {
    if (!e2) return () => {
    };
    let n2 = e2.style.cssText;
    return Object.assign(e2.style, t2), () => {
      e2.style.cssText = n2;
    };
  }
  let T = [0.32, 0.72, 0, 1], D = "vaul-dragging";
  function P(e2) {
    let t2 = r.default.useRef(e2);
    return r.default.useEffect(() => {
      t2.current = e2;
    }), r.default.useMemo(() => (...e3) => null == t2.current ? void 0 : t2.current.call(t2, ...e3), []);
  }
  function O({ prop: e2, defaultProp: t2, onChange: n2 = () => {
  } }) {
    let [a2, o2] = (function({ defaultProp: e3, onChange: t3 }) {
      let n3 = r.default.useState(e3), [a3] = n3, o3 = r.default.useRef(a3), i3 = P(t3);
      return r.default.useEffect(() => {
        o3.current !== a3 && (i3(a3), o3.current = a3);
      }, [a3, o3, i3]), n3;
    })({ defaultProp: t2, onChange: n2 }), i2 = void 0 !== e2, l2 = i2 ? e2 : a2, u2 = P(n2);
    return [l2, r.default.useCallback((t3) => {
      if (i2) {
        let n3 = "function" == typeof t3 ? t3(e2) : t3;
        n3 !== e2 && u2(n3);
      } else o2(t3);
    }, [i2, e2, o2, u2])];
  }
  let $ = () => () => {
  }, k = null;
  function F({ open: e2, onOpenChange: a2, children: i2, onDrag: d2, onRelease: m2, snapPoints: v2, shouldScaleBackground: b2 = false, setBackgroundColorOnScale: M2 = true, closeThreshold: P2 = 0.25, scrollLockTimeout: $2 = 100, dismissible: N2 = true, handleOnly: S2 = false, fadeFromIndex: j2 = v2 && v2.length - 1, activeSnapPoint: I2, setActiveSnapPoint: A, fixed: L, modal: _ = true, onClose: B, nested: H, noBodyStyles: W = false, direction: z = "bottom", defaultOpen: q = false, disablePreventScroll: K = true, snapToSequentialPoint: Y = false, preventScrollRestoration: U = false, repositionInputs: X = true, onAnimationEnd: V, container: Z, autoFocus: G = false }) {
    var J, Q;
    let [ee = false, et] = O({ defaultProp: q, prop: e2, onChange: (e3) => {
      null == a2 || a2(e3), e3 || H || eF(), setTimeout(() => {
        null == V || V(e3);
      }, 500), e3 && !_ && "u" > typeof window && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), e3 || (document.body.style.pointerEvents = "auto");
    } }), [en, er] = r.default.useState(false), [ea, eo] = r.default.useState(false), [ei, el] = r.default.useState(false), eu = r.default.useRef(null), ed = r.default.useRef(null), es = r.default.useRef(null), ec = r.default.useRef(null), ef = r.default.useRef(null), em = r.default.useRef(false), ep = r.default.useRef(null), ev = r.default.useRef(0), eg = r.default.useRef(false), ew = r.default.useRef(!q), eh = r.default.useRef(0), ey = r.default.useRef(null), eb = r.default.useRef((null == (J = ey.current) ? void 0 : J.getBoundingClientRect().height) || 0), eE = r.default.useRef((null == (Q = ey.current) ? void 0 : Q.getBoundingClientRect().width) || 0), ex = r.default.useRef(0), eR = r.default.useCallback((e3) => {
      v2 && e3 === eP.length - 1 && (ed.current = /* @__PURE__ */ new Date());
    }, []), { activeSnapPoint: eC, activeSnapPointIndex: eM, setActiveSnapPoint: eT, onRelease: eD, snapPointsOffset: eP, onDrag: eO, shouldFade: e$, getPercentageDragged: ek } = (function({ activeSnapPointProp: e3, setActiveSnapPointProp: t2, snapPoints: n2, drawerRef: a3, overlayRef: o2, fadeFromIndex: i3, onSnapPointChange: l2, direction: u2 = "bottom", container: d3, snapToSequentialPoint: s2 }) {
      let [c2, f2] = O({ prop: e3, defaultProp: null == n2 ? void 0 : n2[0], onChange: t2 }), [m3, p2] = r.default.useState("u" > typeof window ? { innerWidth: window.innerWidth, innerHeight: window.innerHeight } : void 0);
      r.default.useEffect(() => {
        function e4() {
          p2({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
        }
        return window.addEventListener("resize", e4), () => window.removeEventListener("resize", e4);
      }, []);
      let v3 = r.default.useMemo(() => c2 === (null == n2 ? void 0 : n2[n2.length - 1]) || null, [n2, c2]), g2 = r.default.useMemo(() => {
        var e4;
        return null != (e4 = null == n2 ? void 0 : n2.findIndex((e5) => e5 === c2)) ? e4 : null;
      }, [n2, c2]), w2 = n2 && n2.length > 0 && (i3 || 0 === i3) && !Number.isNaN(i3) && n2[i3] === c2 || !n2, h2 = r.default.useMemo(() => {
        var e4;
        let t3 = d3 ? { width: d3.getBoundingClientRect().width, height: d3.getBoundingClientRect().height } : "u" > typeof window ? { width: window.innerWidth, height: window.innerHeight } : { width: 0, height: 0 };
        return null != (e4 = null == n2 ? void 0 : n2.map((e5) => {
          let n3 = "string" == typeof e5, r2 = 0;
          if (n3 && (r2 = parseInt(e5, 10)), R(u2)) {
            let a5 = n3 ? r2 : m3 ? e5 * t3.height : 0;
            return m3 ? "bottom" === u2 ? t3.height - a5 : -t3.height + a5 : a5;
          }
          let a4 = n3 ? r2 : m3 ? e5 * t3.width : 0;
          return m3 ? "right" === u2 ? t3.width - a4 : -t3.width + a4 : a4;
        })) ? e4 : [];
      }, [n2, m3, d3]), y2 = r.default.useMemo(() => null !== g2 ? null == h2 ? void 0 : h2[g2] : null, [h2, g2]), b3 = r.default.useCallback((e4) => {
        var t3;
        let r2 = null != (t3 = null == h2 ? void 0 : h2.findIndex((t4) => t4 === e4)) ? t3 : null;
        l2(r2), x(a3.current, { transition: `transform 0.5s cubic-bezier(${T.join(",")})`, transform: R(u2) ? `translate3d(0, ${e4}px, 0)` : `translate3d(${e4}px, 0, 0)` }), h2 && r2 !== h2.length - 1 && void 0 !== i3 && r2 !== i3 && r2 < i3 ? x(o2.current, { transition: `opacity 0.5s cubic-bezier(${T.join(",")})`, opacity: "0" }) : x(o2.current, { transition: `opacity 0.5s cubic-bezier(${T.join(",")})`, opacity: "1" }), f2(null == n2 ? void 0 : n2[Math.max(r2, 0)]);
      }, [a3.current, n2, h2, i3, o2, f2]);
      return r.default.useEffect(() => {
        if (c2 || e3) {
          var t3;
          let r2 = null != (t3 = null == n2 ? void 0 : n2.findIndex((t4) => t4 === e3 || t4 === c2)) ? t3 : -1;
          h2 && -1 !== r2 && "number" == typeof h2[r2] && b3(h2[r2]);
        }
      }, [c2, e3, n2, h2, b3]), { isLastSnapPoint: v3, activeSnapPoint: c2, shouldFade: w2, getPercentageDragged: function(e4, t3) {
        if (!n2 || "number" != typeof g2 || !h2 || void 0 === i3) return null;
        let r2 = g2 === i3 - 1;
        if (g2 >= i3 && t3) return 0;
        if (r2 && !t3) return 1;
        if (!w2 && !r2) return null;
        let a4 = r2 ? g2 + 1 : g2 - 1, o3 = e4 / Math.abs(r2 ? h2[a4] - h2[a4 - 1] : h2[a4 + 1] - h2[a4]);
        return r2 ? 1 - o3 : o3;
      }, setActiveSnapPoint: f2, activeSnapPointIndex: g2, onRelease: function({ draggedDistance: e4, closeDrawer: t3, velocity: r2, dismissible: a4 }) {
        if (void 0 === i3) return;
        let l3 = "bottom" === u2 || "right" === u2 ? (null != y2 ? y2 : 0) - e4 : (null != y2 ? y2 : 0) + e4, d4 = g2 === i3 - 1, c3 = 0 === g2, f3 = e4 > 0;
        if (d4 && x(o2.current, { transition: `opacity 0.5s cubic-bezier(${T.join(",")})` }), !s2 && r2 > 2 && !f3) return void (a4 ? t3() : b3(h2[0]));
        if (!s2 && r2 > 2 && f3 && h2 && n2) return void b3(h2[n2.length - 1]);
        let m4 = null == h2 ? void 0 : h2.reduce((e5, t4) => "number" != typeof e5 || "number" != typeof t4 ? e5 : Math.abs(t4 - l3) < Math.abs(e5 - l3) ? t4 : e5), p3 = R(u2) ? window.innerHeight : window.innerWidth;
        if (r2 > 0.4 && Math.abs(e4) < 0.4 * p3) {
          let e5 = f3 ? 1 : -1;
          return e5 > 0 && v3 && n2 ? void b3(h2[n2.length - 1]) : void (c3 && e5 < 0 && a4 && t3(), null === g2 || b3(h2[g2 + e5]));
        }
        b3(m4);
      }, onDrag: function({ draggedDistance: e4 }) {
        if (null === y2) return;
        let t3 = "bottom" === u2 || "right" === u2 ? y2 - e4 : y2 + e4;
        ("bottom" === u2 || "right" === u2) && t3 < h2[h2.length - 1] || ("top" === u2 || "left" === u2) && t3 > h2[h2.length - 1] || x(a3.current, { transform: R(u2) ? `translate3d(0, ${t3}px, 0)` : `translate3d(${t3}px, 0, 0)` });
      }, snapPointsOffset: h2 };
    })({ snapPoints: v2, activeSnapPointProp: I2, setActiveSnapPointProp: A, drawerRef: ey, fadeFromIndex: j2, overlayRef: eu, onSnapPointChange: eR, direction: z, container: Z, snapToSequentialPoint: Y });
    !(function(e3 = {}) {
      let { isDisabled: n2 } = e3;
      s(() => {
        if (!n2) {
          var e4, r2, a3;
          let n3, o2, i3, l2, d3, s2, m3;
          return 1 == ++g && u() && (i3 = 0, l2 = window.pageXOffset, d3 = window.pageYOffset, s2 = c((e4 = document.documentElement, r2 = "paddingRight", a3 = `${window.innerWidth - document.documentElement.clientWidth}px`, n3 = e4.style[r2], e4.style[r2] = a3, () => {
            e4.style[r2] = n3;
          })), window.scrollTo(0, 0), m3 = c(w(document, "touchstart", (e5) => {
            ((o2 = p(e5.target)) !== document.documentElement || o2 !== document.body) && (i3 = e5.changedTouches[0].pageY);
          }, { passive: false, capture: true }), w(document, "touchmove", (e5) => {
            if (!o2 || o2 === document.documentElement || o2 === document.body) return void e5.preventDefault();
            let t2 = e5.changedTouches[0].pageY, n4 = o2.scrollTop, r3 = o2.scrollHeight - o2.clientHeight;
            0 !== r3 && ((n4 <= 0 && t2 > i3 || n4 >= r3 && t2 < i3) && e5.preventDefault(), i3 = t2);
          }, { passive: false, capture: true }), w(document, "touchend", (e5) => {
            let t2 = e5.target;
            y(t2) && t2 !== document.activeElement && (e5.preventDefault(), t2.style.transform = "translateY(-2000px)", t2.focus(), requestAnimationFrame(() => {
              t2.style.transform = "";
            }));
          }, { passive: false, capture: true }), w(document, "focus", (e5) => {
            let t2 = e5.target;
            y(t2) && (t2.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
              t2.style.transform = "", f && (f.height < window.innerHeight ? requestAnimationFrame(() => {
                h(t2);
              }) : f.addEventListener("resize", () => h(t2), { once: true }));
            }));
          }, true), w(window, "scroll", () => {
            window.scrollTo(0, 0);
          })), t = () => {
            s2(), m3(), window.scrollTo(l2, d3);
          }), () => {
            0 == --g && (null == t || t());
          };
        }
      }, [n2]);
    })({ isDisabled: !ee || ea || !_ || ei || !en || !X || !K });
    let { restorePositionSetting: eF } = (function({ isOpen: e3, modal: t2, nested: n2, hasBeenOpened: a3, preventScrollRestoration: o2, noBodyStyles: i3 }) {
      let [u2, d3] = r.default.useState(() => "u" > typeof window ? window.location.href : ""), s2 = r.default.useRef(0), c2 = r.default.useCallback(() => {
        if (l() && null === k && e3 && !i3) {
          k = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height, right: "unset" };
          let { scrollX: e4, innerHeight: t3 } = window;
          document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, { top: `${-s2.current}px`, left: `${-e4}px`, right: "0px", height: "auto" }), window.setTimeout(() => window.requestAnimationFrame(() => {
            let e5 = t3 - window.innerHeight;
            e5 && s2.current >= t3 && (document.body.style.top = `${-(s2.current + e5)}px`);
          }), 300);
        }
      }, [e3]), f2 = r.default.useCallback(() => {
        if (l() && null !== k && !i3) {
          let e4 = -parseInt(document.body.style.top, 10), t3 = -parseInt(document.body.style.left, 10);
          Object.assign(document.body.style, k), window.requestAnimationFrame(() => {
            o2 && u2 !== window.location.href ? d3(window.location.href) : window.scrollTo(t3, e4);
          }), k = null;
        }
      }, [u2]);
      return r.default.useEffect(() => {
        function e4() {
          s2.current = window.scrollY;
        }
        return e4(), window.addEventListener("scroll", e4), () => {
          window.removeEventListener("scroll", e4);
        };
      }, []), r.default.useEffect(() => {
        if (t2) return () => {
          "u" < typeof document || document.querySelector("[data-vaul-drawer]") || f2();
        };
      }, [t2, f2]), r.default.useEffect(() => {
        !n2 && a3 && (e3 ? (window.matchMedia("(display-mode: standalone)").matches || c2(), t2 || window.setTimeout(() => {
          f2();
        }, 500)) : f2());
      }, [e3, a3, u2, t2, n2, c2, f2]), { restorePositionSetting: f2 };
    })({ isOpen: ee, modal: _, nested: null != H && H, hasBeenOpened: en, preventScrollRestoration: U, noBodyStyles: W });
    function eN() {
      return (window.innerWidth - 26) / window.innerWidth;
    }
    function eS(e3, t2) {
      var n2;
      let r2 = e3, a3 = null == (n2 = window.getSelection()) ? void 0 : n2.toString(), o2 = ey.current ? C(ey.current, z) : null, i3 = /* @__PURE__ */ new Date();
      if ("SELECT" === r2.tagName || r2.hasAttribute("data-vaul-no-drag") || r2.closest("[data-vaul-no-drag]")) return false;
      if ("right" === z || "left" === z) return true;
      if (ed.current && i3.getTime() - ed.current.getTime() < 500) return false;
      if (null !== o2 && ("bottom" === z ? o2 > 0 : o2 < 0)) return true;
      if (a3 && a3.length > 0) return false;
      if (ef.current && i3.getTime() - ef.current.getTime() < $2 && 0 === o2 || t2) return ef.current = i3, false;
      for (; r2; ) {
        if (r2.scrollHeight > r2.clientHeight) {
          if (0 !== r2.scrollTop) return ef.current = /* @__PURE__ */ new Date(), false;
          if ("dialog" === r2.getAttribute("role")) break;
        }
        r2 = r2.parentNode;
      }
      return true;
    }
    function ej(e3) {
      ea && ey.current && (ey.current.classList.remove(D), em.current = false, eo(false), ec.current = /* @__PURE__ */ new Date()), null == B || B(), e3 || et(false), setTimeout(() => {
        v2 && eT(v2[0]);
      }, 500);
    }
    function eI() {
      if (!ey.current) return;
      let e3 = document.querySelector("[data-vaul-drawer-wrapper]"), t2 = C(ey.current, z);
      x(ey.current, { transform: "translate3d(0, 0, 0)", transition: `transform 0.5s cubic-bezier(${T.join(",")})` }), x(eu.current, { transition: `opacity 0.5s cubic-bezier(${T.join(",")})`, opacity: "1" }), b2 && t2 && t2 > 0 && ee && x(e3, { borderRadius: "8px", overflow: "hidden", ...R(z) ? { transform: `scale(${eN()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${eN()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: "0.5s", transitionTimingFunction: `cubic-bezier(${T.join(",")})` }, true);
    }
    return r.default.useEffect(() => {
      window.requestAnimationFrame(() => {
        ew.current = true;
      });
    }, []), r.default.useEffect(() => {
      var e3;
      function t2() {
        if (ey.current && X && (y(document.activeElement) || eg.current)) {
          var e4;
          let t3 = (null == (e4 = window.visualViewport) ? void 0 : e4.height) || 0, n2 = window.innerHeight, r2 = n2 - t3, a3 = ey.current.getBoundingClientRect().height || 0;
          ex.current || (ex.current = a3);
          let o2 = ey.current.getBoundingClientRect().top;
          if (Math.abs(eh.current - r2) > 60 && (eg.current = !eg.current), v2 && v2.length > 0 && eP && eM && (r2 += eP[eM] || 0), eh.current = r2, a3 > t3 || eg.current) {
            let e5 = ey.current.getBoundingClientRect().height, i3 = e5;
            e5 > t3 && (i3 = t3 - (a3 > 0.8 * n2 ? o2 : 26)), L ? ey.current.style.height = `${e5 - Math.max(r2, 0)}px` : ey.current.style.height = `${Math.max(i3, t3 - o2)}px`;
          } else {
            let e5;
            e5 = navigator.userAgent, "u" > typeof window && (/Firefox/.test(e5) && /Mobile/.test(e5) || /FxiOS/.test(e5)) || (ey.current.style.height = `${ex.current}px`);
          }
          v2 && v2.length > 0 && !eg.current ? ey.current.style.bottom = "0px" : ey.current.style.bottom = `${Math.max(r2, 0)}px`;
        }
      }
      return null == (e3 = window.visualViewport) || e3.addEventListener("resize", t2), () => {
        var e4;
        return null == (e4 = window.visualViewport) ? void 0 : e4.removeEventListener("resize", t2);
      };
    }, [eM, v2, eP]), r.default.useEffect(() => (ee && (x(document.documentElement, { scrollBehavior: "auto" }), ed.current = /* @__PURE__ */ new Date()), () => {
      !(function(e3, t2) {
        if (!e3 || !(e3 instanceof HTMLElement)) return;
        let n2 = E.get(e3);
        n2 && (e3.style[t2] = n2[t2]);
      })(document.documentElement, "scrollBehavior");
    }), [ee]), r.default.useEffect(() => {
      _ || window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      });
    }, [_]), r.default.createElement(n.Root, { defaultOpen: q, onOpenChange: (e3) => {
      (N2 || e3) && (e3 ? er(true) : ej(true), et(e3));
    }, open: ee }, r.default.createElement(o.Provider, { value: { activeSnapPoint: eC, snapPoints: v2, setActiveSnapPoint: eT, drawerRef: ey, overlayRef: eu, onOpenChange: a2, onPress: function(e3) {
      var t2, n2;
      !N2 && !v2 || (!ey.current || ey.current.contains(e3.target)) && (eb.current = (null == (t2 = ey.current) ? void 0 : t2.getBoundingClientRect().height) || 0, eE.current = (null == (n2 = ey.current) ? void 0 : n2.getBoundingClientRect().width) || 0, eo(true), es.current = /* @__PURE__ */ new Date(), u() && window.addEventListener("touchend", () => em.current = false, { once: true }), e3.target.setPointerCapture(e3.pointerId), ev.current = R(z) ? e3.pageY : e3.pageX);
    }, onRelease: function(e3) {
      var t2, n2;
      if (!ea || !ey.current) return;
      ey.current.classList.remove(D), em.current = false, eo(false), ec.current = /* @__PURE__ */ new Date();
      let r2 = C(ey.current, z);
      if (!e3 || !eS(e3.target, false) || !r2 || Number.isNaN(r2) || null === es.current) return;
      let a3 = ec.current.getTime() - es.current.getTime(), o2 = ev.current - (R(z) ? e3.pageY : e3.pageX), i3 = Math.abs(o2) / a3;
      if (i3 > 0.05 && (el(true), setTimeout(() => {
        el(false);
      }, 200)), v2) {
        eD({ draggedDistance: o2 * ("bottom" === z || "right" === z ? 1 : -1), closeDrawer: ej, velocity: i3, dismissible: N2 }), null == m2 || m2(e3, true);
        return;
      }
      if ("bottom" === z || "right" === z ? o2 > 0 : o2 < 0) {
        eI(), null == m2 || m2(e3, true);
        return;
      }
      if (i3 > 0.4) {
        ej(), null == m2 || m2(e3, false);
        return;
      }
      let l2 = Math.min(null != (t2 = ey.current.getBoundingClientRect().height) ? t2 : 0, window.innerHeight), u2 = Math.min(null != (n2 = ey.current.getBoundingClientRect().width) ? n2 : 0, window.innerWidth);
      if (Math.abs(r2) >= ("left" === z || "right" === z ? u2 : l2) * P2) {
        ej(), null == m2 || m2(e3, false);
        return;
      }
      null == m2 || m2(e3, true), eI();
    }, onDrag: function(e3) {
      if (ey.current && ea) {
        let t2 = "bottom" === z || "right" === z ? 1 : -1, n2 = (ev.current - (R(z) ? e3.pageY : e3.pageX)) * t2, r2 = n2 > 0, a3 = v2 && !N2 && !r2;
        if (a3 && 0 === eM) return;
        let o2 = Math.abs(n2), i3 = document.querySelector("[data-vaul-drawer-wrapper]"), l2 = o2 / ("bottom" === z || "top" === z ? eb.current : eE.current), u2 = ek(o2, r2);
        if (null !== u2 && (l2 = u2), a3 && l2 >= 1 || !em.current && !eS(e3.target, r2)) return;
        if (ey.current.classList.add(D), em.current = true, x(ey.current, { transition: "none" }), x(eu.current, { transition: "none" }), v2 && eO({ draggedDistance: n2 }), r2 && !v2) {
          let e4 = Math.min(-(8 * (Math.log(n2 + 1) - 2) * 1), 0) * t2;
          x(ey.current, { transform: R(z) ? `translate3d(0, ${e4}px, 0)` : `translate3d(${e4}px, 0, 0)` });
          return;
        }
        let s2 = 1 - l2;
        if ((e$ || j2 && eM === j2 - 1) && (null == d2 || d2(e3, l2), x(eu.current, { opacity: `${s2}`, transition: "none" }, true)), i3 && eu.current && b2) {
          let e4 = Math.min(eN() + l2 * (1 - eN()), 1), t3 = 8 - 8 * l2, n3 = Math.max(0, 14 - 14 * l2);
          x(i3, { borderRadius: `${t3}px`, transform: R(z) ? `scale(${e4}) translate3d(0, ${n3}px, 0)` : `scale(${e4}) translate3d(${n3}px, 0, 0)`, transition: "none" }, true);
        }
        if (!v2) {
          let e4 = o2 * t2;
          x(ey.current, { transform: R(z) ? `translate3d(0, ${e4}px, 0)` : `translate3d(${e4}px, 0, 0)` });
        }
      }
    }, dismissible: N2, shouldAnimate: ew, handleOnly: S2, isOpen: ee, isDragging: ea, shouldFade: e$, closeDrawer: ej, onNestedDrag: function(e3, t2) {
      if (t2 < 0) return;
      let n2 = (window.innerWidth - 16) / window.innerWidth, r2 = n2 + t2 * (1 - n2), a3 = -16 + 16 * t2;
      x(ey.current, { transform: R(z) ? `scale(${r2}) translate3d(0, ${a3}px, 0)` : `scale(${r2}) translate3d(${a3}px, 0, 0)`, transition: "none" });
    }, onNestedOpenChange: function(e3) {
      let t2 = e3 ? (window.innerWidth - 16) / window.innerWidth : 1, n2 = e3 ? -16 : 0;
      ep.current && window.clearTimeout(ep.current), x(ey.current, { transition: `transform 0.5s cubic-bezier(${T.join(",")})`, transform: R(z) ? `scale(${t2}) translate3d(0, ${n2}px, 0)` : `scale(${t2}) translate3d(${n2}px, 0, 0)` }), !e3 && ey.current && (ep.current = setTimeout(() => {
        let e4 = C(ey.current, z);
        x(ey.current, { transition: "none", transform: R(z) ? `translate3d(0, ${e4}px, 0)` : `translate3d(${e4}px, 0, 0)` });
      }, 500));
    }, onNestedRelease: function(e3, t2) {
      let n2 = R(z) ? window.innerHeight : window.innerWidth, r2 = t2 ? (n2 - 16) / n2 : 1, a3 = t2 ? -16 : 0;
      t2 && x(ey.current, { transition: `transform 0.5s cubic-bezier(${T.join(",")})`, transform: R(z) ? `scale(${r2}) translate3d(0, ${a3}px, 0)` : `scale(${r2}) translate3d(${a3}px, 0, 0)` });
    }, keyboardIsOpen: eg, modal: _, snapPointsOffset: eP, activeSnapPointIndex: eM, direction: z, shouldScaleBackground: b2, setBackgroundColorOnScale: M2, noBodyStyles: W, container: Z, autoFocus: G } }, i2));
  }
  let N = r.default.forwardRef(function({ ...e2 }, t2) {
    let { overlayRef: a2, snapPoints: o2, onRelease: l2, shouldFade: u2, isOpen: d2, modal: s2, shouldAnimate: c2 } = i(), f2 = b(t2, a2), m2 = o2 && o2.length > 0;
    if (!s2) return null;
    let p2 = r.default.useCallback((e3) => l2(e3), [l2]);
    return r.default.createElement(n.Overlay, { onMouseUp: p2, ref: f2, "data-vaul-overlay": "", "data-vaul-snap-points": d2 && m2 ? "true" : "false", "data-vaul-snap-points-overlay": d2 && u2 ? "true" : "false", "data-vaul-animate": (null == c2 ? void 0 : c2.current) ? "true" : "false", ...e2 });
  });
  N.displayName = "Drawer.Overlay";
  let S = r.default.forwardRef(function({ onPointerDownOutside: e2, style: t2, onOpenAutoFocus: a2, ...o2 }, l2) {
    let { drawerRef: u2, onPress: d2, onRelease: s2, onDrag: c2, keyboardIsOpen: f2, snapPointsOffset: m2, activeSnapPointIndex: p2, modal: v2, isOpen: g2, direction: w2, snapPoints: h2, container: y2, handleOnly: E2, shouldAnimate: x2, autoFocus: C2 } = i(), [D2, P2] = r.default.useState(false), O2 = b(l2, u2), k2 = r.default.useRef(null), F2 = r.default.useRef(null), N2 = r.default.useRef(false), S2 = h2 && h2.length > 0;
    function j2(e3) {
      k2.current = null, N2.current = false, s2(e3);
    }
    return !(function() {
      let { direction: e3, isOpen: t3, shouldScaleBackground: n2, setBackgroundColorOnScale: a3, noBodyStyles: o3 } = i(), l3 = r.default.useRef(null), u3 = (0, r.useMemo)(() => document.body.style.backgroundColor, []);
      function d3() {
        return (window.innerWidth - 26) / window.innerWidth;
      }
      r.default.useEffect(() => {
        if (t3 && n2) {
          l3.current && clearTimeout(l3.current);
          let t4 = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
          if (!t4) return;
          !/* @__PURE__ */ (function(...e4) {
          })(a3 && !o3 ? M(document.body, { background: "black" }) : $, M(t4, { transformOrigin: R(e3) ? "top" : "left", transitionProperty: "transform, border-radius", transitionDuration: "0.5s", transitionTimingFunction: `cubic-bezier(${T.join(",")})` }));
          let n3 = M(t4, { borderRadius: "8px", overflow: "hidden", ...R(e3) ? { transform: `scale(${d3()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)` } : { transform: `scale(${d3()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)` } });
          return () => {
            n3(), l3.current = window.setTimeout(() => {
              u3 ? document.body.style.background = u3 : document.body.style.removeProperty("background");
            }, 500);
          };
        }
      }, [t3, n2, u3]);
    })(), r.default.useEffect(() => {
      S2 && window.requestAnimationFrame(() => {
        P2(true);
      });
    }, []), r.default.createElement(n.Content, { "data-vaul-drawer-direction": w2, "data-vaul-drawer": "", "data-vaul-delayed-snap-points": D2 ? "true" : "false", "data-vaul-snap-points": g2 && S2 ? "true" : "false", "data-vaul-custom-container": y2 ? "true" : "false", "data-vaul-animate": (null == x2 ? void 0 : x2.current) ? "true" : "false", ...o2, ref: O2, style: m2 && m2.length > 0 ? { "--snap-point-height": `${m2[null != p2 ? p2 : 0]}px`, ...t2 } : t2, onPointerDown: (e3) => {
      E2 || (null == o2.onPointerDown || o2.onPointerDown.call(o2, e3), k2.current = { x: e3.pageX, y: e3.pageY }, d2(e3));
    }, onOpenAutoFocus: (e3) => {
      null == a2 || a2(e3), C2 || e3.preventDefault();
    }, onPointerDownOutside: (t3) => {
      (null == e2 || e2(t3), !v2 || t3.defaultPrevented) ? t3.preventDefault() : f2.current && (f2.current = false);
    }, onFocusOutside: (e3) => {
      if (!v2) return void e3.preventDefault();
    }, onPointerMove: (e3) => {
      if (F2.current = e3, E2 || (null == o2.onPointerMove || o2.onPointerMove.call(o2, e3), !k2.current)) return;
      let t3 = e3.pageY - k2.current.y, n2 = e3.pageX - k2.current.x, r2 = "touch" === e3.pointerType ? 10 : 2;
      ((e4, t4, n3 = 0) => {
        if (N2.current) return true;
        let r3 = Math.abs(e4.y), a3 = Math.abs(e4.x), o3 = a3 > r3, i2 = ["bottom", "right"].includes(t4) ? 1 : -1;
        if ("left" === t4 || "right" === t4) {
          if (!(e4.x * i2 < 0) && a3 >= 0 && a3 <= n3) return o3;
        } else if (!(e4.y * i2 < 0) && r3 >= 0 && r3 <= n3) return !o3;
        return N2.current = true, true;
      })({ x: n2, y: t3 }, w2, r2) ? c2(e3) : (Math.abs(n2) > r2 || Math.abs(t3) > r2) && (k2.current = null);
    }, onPointerUp: (e3) => {
      null == o2.onPointerUp || o2.onPointerUp.call(o2, e3), k2.current = null, N2.current = false, s2(e3);
    }, onPointerOut: (e3) => {
      null == o2.onPointerOut || o2.onPointerOut.call(o2, e3), j2(F2.current);
    }, onContextMenu: (e3) => {
      null == o2.onContextMenu || o2.onContextMenu.call(o2, e3), F2.current && j2(F2.current);
    } });
  });
  S.displayName = "Drawer.Content";
  let j = r.default.forwardRef(function({ preventCycle: e2 = false, children: t2, ...n2 }, a2) {
    let { closeDrawer: o2, isDragging: l2, snapPoints: u2, activeSnapPoint: d2, setActiveSnapPoint: s2, dismissible: c2, handleOnly: f2, isOpen: m2, onPress: p2, onDrag: v2 } = i(), g2 = r.default.useRef(null), w2 = r.default.useRef(false);
    function h2() {
      g2.current && window.clearTimeout(g2.current), w2.current = false;
    }
    return r.default.createElement("div", { onClick: function() {
      w2.current ? h2() : window.setTimeout(() => {
        !(function() {
          if (l2 || e2 || w2.current) return h2();
          if (h2(), !u2 || 0 === u2.length) {
            c2 || o2();
            return;
          }
          if (d2 === u2[u2.length - 1] && c2) return o2();
          let t3 = u2.findIndex((e3) => e3 === d2);
          -1 === t3 || s2(u2[t3 + 1]);
        })();
      }, 120);
    }, onPointerCancel: h2, onPointerDown: (e3) => {
      f2 && p2(e3), g2.current = window.setTimeout(() => {
        w2.current = true;
      }, 250);
    }, onPointerMove: (e3) => {
      f2 && v2(e3);
    }, ref: a2, "data-vaul-drawer-visible": m2 ? "true" : "false", "data-vaul-handle": "", "aria-hidden": "true", ...n2 }, r.default.createElement("span", { "data-vaul-handle-hitarea": "", "aria-hidden": "true" }, t2));
  });
  j.displayName = "Drawer.Handle";
  let I = { Root: F, NestedRoot: function({ onDrag: e2, onOpenChange: t2, open: n2, ...a2 }) {
    let { onNestedDrag: o2, onNestedOpenChange: l2, onNestedRelease: u2 } = i();
    if (!o2) throw Error("Drawer.NestedRoot must be placed in another drawer");
    return r.default.createElement(F, { nested: true, open: n2, onClose: () => {
      l2(false);
    }, onDrag: (t3, n3) => {
      o2(t3, n3), null == e2 || e2(t3, n3);
    }, onOpenChange: (e3) => {
      e3 && l2(e3), null == t2 || t2(e3);
    }, onRelease: u2, ...a2 });
  }, Content: S, Overlay: N, Trigger: n.Trigger, Portal: function(e2) {
    let t2 = i(), { container: a2 = t2.container, ...o2 } = e2;
    return r.default.createElement(n.Portal, { container: a2, ...o2 });
  }, Handle: j, Close: n.Close, Title: n.Title, Description: n.Description };
  e.s(["Drawer", 0, I]);
}]);
