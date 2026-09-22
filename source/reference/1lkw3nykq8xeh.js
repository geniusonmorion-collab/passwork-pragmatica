;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "14e8d079-36e0-66d3-70da-43a47e8bfbda");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 917976, 992882, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(880269), n = e.i(517124), o = e.i(703921), l = e.i(548302), i = e.i(825696), a = e.i(424404), s = e.i(599607), u = e.i(639306), c = e.i(553254), d = e.i(54705), f = e.i(219710), g = e.i(479995), p = e.i(234091), y = e.i(635338), h = e.i(765391), w = e.i(66769), b = e.i(639761), m = e.i(143882), v = e.i(775368), M = e.i(930296), E = e.i(296232), k = e.i(205549), R = e.i(550034);
  try {
    var T = "u" > typeof window ? window : e.g;
    T._sentryModuleMetadata = T._sentryModuleMetadata || {}, T._sentryModuleMetadata[new T.Error().stack] = Object.assign({}, T._sentryModuleMetadata[new T.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let A = 0;
  function S(e2, t2 = {}) {
    let { preventScroll: r2 = false, sync: n2 = false, shouldFocus: o2 } = t2;
    function l2() {
      (!o2 || o2()) && e2?.focus({ preventScroll: r2 });
    }
    if (cancelAnimationFrame(A), n2) return l2(), R.NOOP;
    let i2 = requestAnimationFrame(l2);
    return A = i2, () => {
      A === i2 && (cancelAnimationFrame(i2), A = 0);
    };
  }
  e.s(["enqueueFocus", 0, S], 992882);
  try {
    var _ = "u" > typeof window ? window : e.g;
    _._sentryModuleMetadata = _._sentryModuleMetadata || {}, _._sentryModuleMetadata[new _.Error().stack] = Object.assign({}, _._sentryModuleMetadata[new _.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let L = { inert: /* @__PURE__ */ new WeakMap(), "aria-hidden": /* @__PURE__ */ new WeakMap() }, P = "data-base-ui-inert", O = { inert: /* @__PURE__ */ new WeakSet(), "aria-hidden": /* @__PURE__ */ new WeakSet() }, x = /* @__PURE__ */ new WeakMap(), C = 0, W = (e2, t2) => t2.map((t3) => {
    if (e2.contains(t3)) return t3;
    let n2 = (function e3(t4) {
      return t4 ? (0, r.isShadowRoot)(t4) ? t4.host : e3(t4.parentNode) : null;
    })(t3);
    return e2.contains(n2) ? n2 : null;
  }).filter((e3) => null != e3), F = (e2) => {
    let t2 = /* @__PURE__ */ new Set();
    return e2.forEach((e3) => {
      let r2 = e3;
      for (; r2 && !t2.has(r2); ) t2.add(r2), r2 = r2.parentNode;
    }), t2;
  }, N = (e2, t2, n2) => {
    let o2 = [], l2 = (e3) => {
      !e3 || n2.has(e3) || Array.from(e3.children).forEach((e4) => {
        "script" !== (0, r.getNodeName)(e4) && (t2.has(e4) ? l2(e4) : o2.push(e4));
      });
    };
    return l2(e2), o2;
  };
  function B(e2, t2 = {}) {
    let { ariaHidden: r2 = false, inert: n2 = false, mark: o2 = true } = t2, l2 = (0, f.ownerDocument)(e2[0]).body;
    return (function(e3, t3, r3, n3, { mark: o3 = true }) {
      let l3 = null;
      n3 ? l3 = "inert" : r3 && (l3 = "aria-hidden");
      let i2 = null, a2 = null, s2 = W(t3, e3), u2 = o3 ? N(t3, F(s2), new Set(s2)) : [], c2 = [], d2 = [];
      if (l3) {
        let e4 = L[l3], r4 = O[l3];
        a2 = r4, i2 = e4;
        let n4 = W(t3, Array.from(t3.querySelectorAll("[aria-live]"))), o4 = s2.concat(n4);
        N(t3, F(o4), new Set(o4)).forEach((t4) => {
          let n5 = t4.getAttribute(l3), o5 = null !== n5 && "false" !== n5, i3 = (e4.get(t4) || 0) + 1;
          e4.set(t4, i3), c2.push(t4), 1 === i3 && o5 && r4.add(t4), o5 || t4.setAttribute(l3, "inert" === l3 ? "" : "true");
        });
      }
      return o3 && u2.forEach((e4) => {
        let t4 = (x.get(e4) || 0) + 1;
        x.set(e4, t4), d2.push(e4), 1 === t4 && e4.setAttribute(P, "");
      }), C += 1, () => {
        i2 && c2.forEach((e4) => {
          let t4 = (i2.get(e4) || 0) - 1;
          i2.set(e4, t4), t4 || (!a2?.has(e4) && l3 && e4.removeAttribute(l3), a2?.delete(e4));
        }), o3 && d2.forEach((e4) => {
          let t4 = (x.get(e4) || 0) - 1;
          x.set(e4, t4), t4 || e4.removeAttribute(P);
        }), (C -= 1) || (L.inert = /* @__PURE__ */ new WeakMap(), L["aria-hidden"] = /* @__PURE__ */ new WeakMap(), O.inert = /* @__PURE__ */ new WeakSet(), O["aria-hidden"] = /* @__PURE__ */ new WeakSet(), x = /* @__PURE__ */ new WeakMap());
      };
    })(e2, l2, r2, n2, { mark: o2 });
  }
  var I = e.i(801873), D = e.i(872191), H = e.i(867383), j = e.i(988404), Y = e.i(68982);
  try {
    var K = "u" > typeof window ? window : e.g;
    K._sentryModuleMetadata = K._sentryModuleMetadata || {}, K._sentryModuleMetadata[new K.Error().stack] = Object.assign({}, K._sentryModuleMetadata[new K.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let X = [];
  function $() {
    X = X.filter((e2) => e2.deref()?.isConnected);
  }
  function q(e2) {
    $(), e2 && "body" !== (0, r.getNodeName)(e2) && (X.push(new WeakRef(e2)), X.length > 20 && (X = X.slice(-20)));
  }
  function G() {
    return $(), X[X.length - 1]?.deref();
  }
  function V(e2) {
    if (e2.hasAttribute("tabindex") && !e2.hasAttribute("data-tabindex") || !e2.getAttribute("role")?.includes("dialog")) return;
    let t2 = (0, b.focusable)(e2).filter((e3) => {
      let t3 = e3.getAttribute("data-tabindex") || "";
      return (0, b.isTabbable)(e3) || e3.hasAttribute("data-tabindex") && !t3.startsWith("-");
    }), r2 = e2.getAttribute("tabindex");
    0 === t2.length ? "0" !== r2 && (e2.setAttribute("tabindex", "0"), e2.setAttribute("data-tabindex", "0")) : ("-1" !== r2 || e2.hasAttribute("data-tabindex") && "-1" !== e2.getAttribute("data-tabindex")) && (e2.setAttribute("tabindex", "-1"), e2.setAttribute("data-tabindex", "-1"));
  }
  e.s(["FloatingFocusManager", 0, function(e2) {
    let { context: R2, children: T2, disabled: A2 = false, initialFocus: _2 = true, returnFocus: L2 = true, restoreFocus: P2 = false, modal: O2 = true, closeOnFocusOut: x2 = true, openInteractionType: C2 = "", nextFocusableElement: W2, previousFocusableElement: F2, beforeContentFocusGuardRef: N2, externalTree: K2, getInsideElements: X2 } = e2, U = "rootStore" in R2 ? R2.rootStore : R2, z = U.useState("open"), J = U.useState("domReferenceElement"), Q = U.useState("floatingElement"), { events: Z, dataRef: ee } = U.context, et = (0, a.useStableCallback)(() => ee.current.floatingContext?.nodeId), er = (0, h.isTypeableCombobox)(J) && false === _2, en = (0, i.useValueAsRef)(_2), eo = (0, i.useValueAsRef)(L2), el = (0, i.useValueAsRef)(C2), ei = (0, i.useValueAsRef)(z), ea = (0, D.useFloatingTree)(K2), es = (0, I.usePortalContext)(), eu = t.useRef(false), ec = t.useRef(false), ed = t.useRef(false), ef = t.useRef(null), eg = t.useRef(""), ep = t.useRef(""), ey = t.useRef(null), eh = t.useRef(null), ew = (0, l.useMergedRefs)(ey, N2, es?.beforeInsideRef), eb = (0, l.useMergedRefs)(eh, es?.afterInsideRef), em = (0, u.useTimeout)(), ev = (0, u.useTimeout)(), eM = (0, d.useAnimationFrame)(), eE = null != es, ek = (0, h.getFloatingFocusElement)(Q), eR = (0, a.useStableCallback)((e3 = ek) => e3 ? (0, b.tabbable)(e3) : []), eT = (0, a.useStableCallback)(() => X2?.().filter((e3) => null != e3) ?? []);
    t.useEffect(() => {
      if (A2 || !O2) return;
      let e3 = (0, f.ownerDocument)(ek);
      return (0, n.addEventListener)(e3, "keydown", function(e4) {
        "Tab" === e4.key && (0, y.contains)(ek, (0, y.activeElement)((0, f.ownerDocument)(ek))) && 0 === eR().length && !er && (0, w.stopEvent)(e4);
      });
    }, [A2, ek, O2, er, eR]), t.useEffect(() => {
      if (A2 || !z) return;
      let e3 = (0, f.ownerDocument)(ek);
      function t2() {
        ed.current = false;
      }
      return (0, o.mergeCleanups)((0, n.addEventListener)(e3, "pointerdown", function(e4) {
        let t3 = (0, y.getTarget)(e4), r2 = eT();
        ed.current = !((0, y.contains)(Q, t3) || (0, y.contains)(J, t3) || (0, y.contains)(es?.portalNode, t3) || r2.some((e5) => e5 === t3 || (0, y.contains)(e5, t3))), ep.current = e4.pointerType || "keyboard", t3?.closest(`[${H.CLICK_TRIGGER_IDENTIFIER}]`) && (ec.current = true, ev.start(0, () => {
          ec.current = false;
        }));
      }, true), (0, n.addEventListener)(e3, "pointerup", t2, true), (0, n.addEventListener)(e3, "pointercancel", t2, true), (0, n.addEventListener)(e3, "keydown", function() {
        ep.current = "keyboard";
      }, true), t2);
    }, [A2, Q, J, ek, z, es, ev, eT]), t.useEffect(() => {
      if (A2 || !x2) return;
      let e3 = (0, f.ownerDocument)(ek);
      function t2(t3) {
        let n2 = t3.relatedTarget, o2 = t3.currentTarget, l3 = (0, y.getTarget)(t3);
        O2 && null == n2 && null != l3 && (0, y.contains)(Q, l3) && q(l3), queueMicrotask(() => {
          let i2 = et(), a2 = U.context.triggerElements, s2 = eT(), u2 = n2?.hasAttribute((0, k.createAttribute)("focus-guard")) && [ey.current, eh.current, es?.beforeInsideRef.current, es?.afterInsideRef.current, es?.beforeOutsideRef.current, es?.afterOutsideRef.current, (0, j.resolveRef)(F2), (0, j.resolveRef)(W2)].includes(n2), c2 = !((0, y.contains)(J, n2) || (0, y.contains)(Q, n2) || (0, y.contains)(n2, Q) || (0, y.contains)(es?.portalNode, n2) || s2.some((e4) => e4 === n2 || (0, y.contains)(e4, n2)) || a2.hasMatchingElement((e4) => (0, y.contains)(e4, n2)) || u2 || ea && ((0, m.getNodeChildren)(ea.nodesRef.current, i2).find((e4) => (0, y.contains)(e4.context?.elements.floating, n2) || (0, y.contains)(e4.context?.elements.domReference, n2)) || (0, m.getNodeAncestors)(ea.nodesRef.current, i2).find((e4) => [e4.context?.elements.floating, (0, h.getFloatingFocusElement)(e4.context?.elements.floating)].includes(n2) || e4.context?.elements.domReference === n2)));
          if (o2 === J && ek && V(ek), P2 && o2 !== J && !(0, v.isElementVisible)(l3) && (0, y.activeElement)(e3) === e3.body) {
            if ((0, r.isHTMLElement)(ek) && (ek.focus(), "popup" === P2)) return void eM.request(() => {
              ek.focus();
            });
            let e4 = eR(), t4 = ef.current, n3 = (t4 && e4.includes(t4) ? t4 : null) || e4[e4.length - 1] || ek;
            (0, r.isHTMLElement)(n3) && n3.focus();
          }
          if (ee.current.insideReactTree) {
            ee.current.insideReactTree = false;
            return;
          }
          (er || !O2) && n2 && c2 && !ec.current && (er || n2 !== G()) && (eu.current = true, U.setOpen(false, (0, M.createChangeEventDetails)(E.REASONS.focusOut, t3)));
        });
      }
      let l2 = (0, r.isHTMLElement)(J) ? J : null;
      if (Q || l2) return (0, o.mergeCleanups)(l2 && (0, n.addEventListener)(l2, "focusout", t2), l2 && (0, n.addEventListener)(l2, "pointerdown", function() {
        ec.current = true, ev.start(0, () => {
          ec.current = false;
        });
      }), Q && (0, n.addEventListener)(Q, "focusin", function(e4) {
        let t3 = (0, y.getTarget)(e4);
        (0, b.isTabbable)(t3) && (ef.current = t3);
      }), Q && (0, n.addEventListener)(Q, "focusout", t2), Q && es && (0, n.addEventListener)(Q, "focusout", function() {
        ed.current || (ee.current.insideReactTree = true, em.start(0, () => {
          ee.current.insideReactTree = false;
        }));
      }, true));
    }, [A2, J, Q, ek, O2, ea, es, U, x2, P2, eR, er, et, ee, em, ev, eM, W2, F2, eT]), t.useEffect(() => {
      if (A2 || !Q || !z) return;
      let e3 = Array.from(es?.portalNode?.querySelectorAll(`[${(0, k.createAttribute)("portal")}]`) || []), t2 = ea ? (0, m.getNodeAncestors)(ea.nodesRef.current, et()) : [], r2 = t2.find((e4) => (0, h.isTypeableCombobox)(e4.context?.elements.domReference || null))?.context?.elements.domReference, n2 = B([Q, ...e3, ey.current, eh.current, es?.beforeOutsideRef.current, es?.afterOutsideRef.current, ...eT(), r2, (0, j.resolveRef)(F2), (0, j.resolveRef)(W2), er ? J : null].filter((e4) => null != e4), { ariaHidden: O2 || er, mark: false }), o2 = B([Q, ...e3].filter((e4) => null != e4));
      return () => {
        o2(), n2();
      };
    }, [z, A2, J, Q, O2, es, er, ea, et, W2, F2, eT]), (0, s.useIsoLayoutEffect)(() => {
      if (!z || A2 || !(0, r.isHTMLElement)(ek)) return;
      eg.current = "", ep.current = "";
      let e3 = (0, f.ownerDocument)(ek), t2 = (0, y.activeElement)(e3);
      queueMicrotask(() => {
        let r2, n2 = en.current, o2 = "function" == typeof n2 ? n2(el.current || "") : n2;
        if (void 0 === o2 || false === o2 || (0, y.contains)(ek, t2)) return;
        let l2 = null, i2 = () => (null == l2 && (l2 = eR(ek)), l2[0] || ek);
        r2 = (r2 = true === o2 || null === o2 ? i2() : (0, j.resolveRef)(o2)) || i2();
        let a2 = (0, y.contains)(ek, (0, y.activeElement)(e3));
        S(r2, { preventScroll: r2 === ek, shouldFocus() {
          if (!ei.current) return false;
          if (a2) return true;
          let t3 = (0, y.activeElement)(e3);
          return !(t3 !== r2 && (0, y.contains)(ek, t3));
        } });
      });
    }, [A2, z, ek, eR, en, el, ei]), (0, s.useIsoLayoutEffect)(() => {
      if (A2 || !ek) return;
      let e3 = (0, f.ownerDocument)(ek), t2 = (0, y.activeElement)(e3), n2 = null == el.current;
      function o2(e4) {
        var t3, r2;
        let n3;
        if (e4.open || (t3 = e4.nativeEvent, r2 = ep.current, n3 = (0, g.ownerWindow)((0, y.getTarget)(t3)), eg.current = t3 instanceof n3.KeyboardEvent ? "keyboard" : t3 instanceof n3.FocusEvent ? r2 || "keyboard" : "pointerType" in t3 ? t3.pointerType || "keyboard" : "touches" in t3 ? "touch" : t3 instanceof n3.MouseEvent ? r2 || (0 === t3.detail ? "keyboard" : "mouse") : ""), e4.reason === E.REASONS.triggerHover && "mouseleave" === e4.nativeEvent.type && (eu.current = true), e4.reason === E.REASONS.outsidePress) if (e4.nested) eu.current = false;
        else if ((0, w.isVirtualClick)(e4.nativeEvent) || (0, w.isVirtualPointerEvent)(e4.nativeEvent)) eu.current = false;
        else {
          let e5 = false;
          (0, f.ownerDocument)(ek).createElement("div").focus({ get preventScroll() {
            return e5 = true, false;
          } }), e5 ? eu.current = false : eu.current = true;
        }
      }
      return q(t2), Z.on("openchange", o2), () => {
        Z.off("openchange", o2);
        let l2 = (0, y.activeElement)(e3), i2 = eT(), a2 = (0, y.contains)(Q, l2) || i2.some((e4) => e4 === l2 || (0, y.contains)(e4, l2)) || ea && (0, m.getNodeChildren)(ea.nodesRef.current, et(), false).some((e4) => (0, y.contains)(e4.context?.elements.floating, l2)), s2 = eo.current, u2 = eg.current, c2 = (function(e4) {
          let o3 = eo.current, l3 = "function" == typeof o3 ? o3(e4) : o3;
          if (void 0 === l3 || false === l3) return null;
          null === l3 && (l3 = true);
          let i3 = J?.isConnected ? J : null, a3 = t2?.isConnected && "body" !== (0, r.getNodeName)(t2) ? t2 : null, s3 = n2 ? a3 || i3 : i3 || a3;
          return (s3 || (s3 = G() || null), "boolean" == typeof l3) ? s3 : (0, j.resolveRef)(l3) || s3 || null;
        })(u2);
        queueMicrotask(() => {
          let t3 = c2 ? (0, b.isTabbable)(c2) ? c2 : (0, b.tabbable)(c2)[0] || c2 : null;
          if (s2 && !eu.current && (0, r.isHTMLElement)(t3) && ("boolean" != typeof s2 || t3 === l2 || l2 === e3.body || a2)) {
            let e4 = { preventScroll: true };
            "keyboard" === u2 && (e4.focusVisible = true), t3.focus(e4);
          }
          eu.current = false;
        });
      };
    }, [A2, Q, ek, eo, el, Z, ea, J, et, eT]), (0, s.useIsoLayoutEffect)(() => {
      if (!c.platform.engine.webkit || z || !Q) return;
      let e3 = (0, y.activeElement)((0, f.ownerDocument)(Q));
      (0, r.isHTMLElement)(e3) && (0, h.isTypeableElement)(e3) && (0, y.contains)(Q, e3) && e3.blur();
    }, [z, Q]), (0, s.useIsoLayoutEffect)(() => {
      if (!A2 && es) return es.setFocusManagerState({ modal: O2, closeOnFocusOut: x2, open: z, onOpenChange: U.setOpen, domReference: J }), () => {
        es.setFocusManagerState(null);
      };
    }, [A2, es, O2, z, U, x2, J]), (0, s.useIsoLayoutEffect)(() => {
      if (!A2 && ek) return V(ek), () => {
        queueMicrotask($);
      };
    }, [A2, ek]);
    let eA = !A2 && (!O2 || !er) && (eE || O2);
    return (0, Y.jsxs)(t.Fragment, { children: [eA && (0, Y.jsx)(p.FocusGuard, { "data-type": "inside", ref: ew, onFocus: (e3) => {
      if (O2) {
        let e4 = eR();
        S(e4[e4.length - 1]);
      } else if (es?.portalNode) if (eu.current = false, (0, b.isOutsideEvent)(e3, es.portalNode)) {
        let e4 = (0, b.getNextTabbable)(J);
        e4?.focus();
      } else (0, j.resolveRef)(F2 ?? es.beforeOutsideRef)?.focus();
    } }), T2, eA && (0, Y.jsx)(p.FocusGuard, { "data-type": "inside", ref: eb, onFocus: (e3) => {
      if (O2) S(eR()[0]);
      else if (es?.portalNode) if (x2 && (eu.current = true), (0, b.isOutsideEvent)(e3, es.portalNode)) {
        let e4 = (0, b.getPreviousTabbable)(J);
        e4?.focus();
      } else (0, j.resolveRef)(W2 ?? es.afterOutsideRef)?.focus();
    } })] });
  }], 917976);
}, 84588, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(54705), n = e.i(639306), o = e.i(550034), l = e.i(635338), i = e.i(765391), a = e.i(66769), s = e.i(930296), u = e.i(296232);
  try {
    var c = "u" > typeof window ? window : e.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useClick", 0, function(e2, c2 = {}) {
    let { enabled: d = true, event: f = "click", toggle: g = true, ignoreMouse: p = false, stickIfOpen: y = true, touchOpenDelay: h = 0, reason: w = u.REASONS.triggerPress } = c2, b = "rootStore" in e2 ? e2.rootStore : e2, m = b.context.dataRef, v = t.useRef(void 0), M = (0, r.useAnimationFrame)(), E = (0, n.useTimeout)(), k = t.useMemo(() => {
      function e3(e4, t3, r2, n2) {
        let o2 = (0, s.createChangeEventDetails)(w, t3, r2);
        e4 && "touch" === n2 && h > 0 ? E.start(h, () => {
          b.setOpen(true, o2);
        }) : b.setOpen(e4, o2);
      }
      function t2(e4, t3, r2) {
        let n2 = m.current.openEvent, o2 = b.select("domReferenceElement") !== t3;
        return !!e4 && !!o2 || !e4 || !g || !!n2 && !!y && !r2(n2.type);
      }
      return { onPointerDown(e4) {
        v.current = (0, a.isMouseLikePointerType)(e4.pointerType, true) && (0, a.isVirtualPointerEvent)(e4.nativeEvent) ? "virtual" : e4.pointerType;
      }, onMouseDown(r2) {
        let n2 = v.current, o2 = r2.nativeEvent, s2 = b.select("open");
        if (0 !== r2.button || "click" === f || (0, a.isMouseLikePointerType)(n2, true) && p) return;
        let u2 = t2(s2, r2.currentTarget, (e4) => "click" === e4 || "mousedown" === e4), c3 = (0, l.getTarget)(o2);
        if ((0, i.isTypeableElement)(c3)) return void e3(u2, o2, c3, n2);
        let d2 = r2.currentTarget;
        M.request(() => {
          e3(u2, o2, d2, n2);
        });
      }, onClick(r2) {
        if ("mousedown-only" === f) return;
        let n2 = v.current;
        if ("mousedown" === f && n2) {
          v.current = void 0;
          return;
        }
        (0, a.isMouseLikePointerType)(n2, true) && p || e3(t2(b.select("open"), r2.currentTarget, (e4) => "click" === e4 || "mousedown" === e4 || "keydown" === e4 || "keyup" === e4), r2.nativeEvent, r2.currentTarget, n2);
      }, onKeyDown() {
        v.current = void 0;
      } };
    }, [m, f, p, w, b, y, g, M, E, h]);
    return t.useMemo(() => d ? { reference: k } : o.EMPTY_OBJECT, [d, k]);
  }]);
}, 925202, (e) => {
  "use strict";
  var t = e.i(880269);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let n = "ArrowUp", o = "ArrowDown", l = "ArrowLeft", i = "ArrowRight", a = "Home", s = /* @__PURE__ */ new Set([n, o, l, i, a, "End"]);
  function u(e2, t2, r2) {
    let n2 = "left" === r2 ? "offsetLeft" : "offsetTop", o2 = 0;
    for (; t2.offsetParent && (o2 += t2[n2], t2.offsetParent !== e2); ) t2 = t2.offsetParent;
    return o2;
  }
  function c(e2) {
    let t2 = getComputedStyle(e2);
    return { scrollMarginTop: parseFloat(t2.scrollMarginTop) || 0, scrollMarginRight: parseFloat(t2.scrollMarginRight) || 0, scrollMarginBottom: parseFloat(t2.scrollMarginBottom) || 0, scrollMarginLeft: parseFloat(t2.scrollMarginLeft) || 0, scrollPaddingTop: parseFloat(t2.scrollPaddingTop) || 0, scrollPaddingRight: parseFloat(t2.scrollPaddingRight) || 0, scrollPaddingBottom: parseFloat(t2.scrollPaddingBottom) || 0, scrollPaddingLeft: parseFloat(t2.scrollPaddingLeft) || 0 };
  }
  e.s(["ARROW_DOWN", 0, o, "ARROW_LEFT", 0, l, "ARROW_RIGHT", 0, i, "ARROW_UP", 0, n, "COMPOSITE_KEYS", 0, s, "END", 0, "End", "HOME", 0, a, "MODIFIER_KEYS", 0, ["Shift", "Control", "Alt", "Meta"], "isNativeInput", 0, function(e2) {
    return !!((0, t.isHTMLElement)(e2) && "INPUT" === e2.tagName && null != e2.selectionStart || (0, t.isHTMLElement)(e2) && "TEXTAREA" === e2.tagName);
  }, "scrollIntoViewIfNeeded", 0, function(e2, t2, r2, n2) {
    if (!e2 || !t2 || !t2.scrollTo) return;
    let o2 = e2.scrollLeft, l2 = e2.scrollTop, i2 = e2.clientWidth < e2.scrollWidth, a2 = e2.clientHeight < e2.scrollHeight;
    if (i2 && "vertical" !== n2) {
      let n3 = u(e2, t2, "left"), l3 = c(e2), i3 = c(t2);
      "ltr" === r2 && (n3 + t2.offsetWidth + i3.scrollMarginRight > e2.scrollLeft + e2.clientWidth - l3.scrollPaddingRight ? o2 = n3 + t2.offsetWidth + i3.scrollMarginRight - e2.clientWidth + l3.scrollPaddingRight : n3 - i3.scrollMarginLeft < e2.scrollLeft + l3.scrollPaddingLeft && (o2 = n3 - i3.scrollMarginLeft - l3.scrollPaddingLeft)), "rtl" === r2 && (n3 - i3.scrollMarginLeft < e2.scrollLeft + l3.scrollPaddingLeft ? o2 = n3 - i3.scrollMarginLeft - l3.scrollPaddingLeft : n3 + t2.offsetWidth + i3.scrollMarginRight > e2.scrollLeft + e2.clientWidth - l3.scrollPaddingRight && (o2 = n3 + t2.offsetWidth + i3.scrollMarginRight - e2.clientWidth + l3.scrollPaddingRight));
    }
    if (a2 && "horizontal" !== n2) {
      let r3 = u(e2, t2, "top"), n3 = c(e2), o3 = c(t2);
      r3 - o3.scrollMarginTop < e2.scrollTop + n3.scrollPaddingTop ? l2 = r3 - o3.scrollMarginTop - n3.scrollPaddingTop : r3 + t2.offsetHeight + o3.scrollMarginBottom > e2.scrollTop + e2.clientHeight - n3.scrollPaddingBottom && (l2 = r3 + t2.offsetHeight + o3.scrollMarginBottom - e2.clientHeight + n3.scrollPaddingBottom);
    }
    e2.scrollTo({ left: o2, top: l2, behavior: "auto" });
  }]);
}, 60125, 547470, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(68982);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let o = t.forwardRef(function(e2, t2) {
    let n2, { cutout: o2, ...l2 } = e2;
    if (o2) {
      let e3 = o2.getBoundingClientRect();
      n2 = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${e3.left}px ${e3.top}px,${e3.left}px ${e3.bottom}px,${e3.right}px ${e3.bottom}px,${e3.right}px ${e3.top}px,${e3.left}px ${e3.top}px)`;
    }
    return (0, r.jsx)("div", { ref: t2, role: "presentation", "data-base-ui-inert": "", ...l2, style: { position: "fixed", inset: 0, userSelect: "none", WebkitUserSelect: "none", clipPath: n2 } });
  });
  e.s(["InternalBackdrop", 0, o], 60125);
  var l = e.i(880269), i = e.i(517124), a = e.i(553254), s = e.i(219710), u = e.i(479995), c = e.i(599607), d = e.i(639306), f = e.i(54705);
  try {
    var g = "u" > typeof window ? window : e.g;
    g._sentryModuleMetadata = g._sentryModuleMetadata || {}, g._sentryModuleMetadata[new g.Error().stack] = Object.assign({}, g._sentryModuleMetadata[new g.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let p = {}, y = {}, h = "";
  function w(e2, t2) {
    return (0, l.isOverflowElement)(e2) ? e2 : t2;
  }
  function b(e2, t2, r2) {
    return /hidden|clip/.test(e2.getComputedStyle(w(t2, r2)).overflowY);
  }
  class m {
    lockCount = 0;
    restore = null;
    timeoutLock = d.Timeout.create();
    timeoutUnlock = d.Timeout.create();
    acquire(e2) {
      return this.lockCount += 1, 1 === this.lockCount && null === this.restore && this.timeoutLock.start(0, () => this.lock(e2)), this.release;
    }
    release = () => {
      this.lockCount -= 1, 0 === this.lockCount && this.restore && this.timeoutUnlock.start(0, this.unlock);
    };
    unlock = () => {
      0 === this.lockCount && this.restore && (this.restore?.(), this.restore = null);
    };
    lock(e2) {
      let t2, r2, n2;
      if (0 === this.lockCount || null !== this.restore) return;
      let o2 = (0, s.ownerDocument)(e2), l2 = o2.documentElement, c2 = o2.body, d2 = (0, u.ownerWindow)(l2);
      if (b(d2, l2, c2)) {
        let t3 = new d2.MutationObserver(() => {
          b(d2, l2, c2) || (t3.disconnect(), this.restore = null, this.lock(e2));
        }), r3 = { attributes: true };
        t3.observe(l2, r3), t3.observe(c2, r3), this.restore = () => t3.disconnect();
        return;
      }
      let g2 = a.platform.os.ios || !(function(e3) {
        if ("u" < typeof document) return false;
        let t3 = (0, s.ownerDocument)(e3);
        return (0, u.ownerWindow)(t3).innerWidth - t3.documentElement.clientWidth > 0;
      })(e2);
      this.restore = g2 ? (n2 = { overflowY: (r2 = w((t2 = (0, s.ownerDocument)(e2)).documentElement, t2.body)).style.overflowY, overflowX: r2.style.overflowX }, Object.assign(r2.style, { overflowY: "hidden", overflowX: "hidden" }), () => {
        Object.assign(r2.style, n2);
      }) : (function(e3) {
        let t3 = (0, s.ownerDocument)(e3), r3 = t3.documentElement, n3 = t3.body, o3 = (0, u.ownerWindow)(r3), l3 = 0, c3 = 0, d3 = false, g3 = f.AnimationFrame.create();
        if (a.platform.engine.webkit && (o3.visualViewport?.scale ?? 1) !== 1) return () => {
        };
        function b2() {
          let t4 = o3.getComputedStyle(r3), i2 = o3.getComputedStyle(n3), a2 = (t4.scrollbarGutter || "").includes("both-edges") ? "stable both-edges" : "stable";
          l3 = r3.scrollTop, c3 = r3.scrollLeft, p = { scrollbarGutter: r3.style.scrollbarGutter, overflowY: r3.style.overflowY, overflowX: r3.style.overflowX }, h = r3.style.scrollBehavior, y = { position: n3.style.position, height: n3.style.height, width: n3.style.width, boxSizing: n3.style.boxSizing, overflowY: n3.style.overflowY, overflowX: n3.style.overflowX, scrollBehavior: n3.style.scrollBehavior };
          let u2 = r3.scrollHeight > r3.clientHeight, f2 = r3.scrollWidth > r3.clientWidth, g4 = "scroll" === t4.overflowY || "scroll" === i2.overflowY, b3 = "scroll" === t4.overflowX || "scroll" === i2.overflowX, m3 = Math.max(0, o3.innerWidth - n3.clientWidth), v3 = Math.max(0, o3.innerHeight - n3.clientHeight), M = parseFloat(i2.marginTop) + parseFloat(i2.marginBottom), E = parseFloat(i2.marginLeft) + parseFloat(i2.marginRight), k = w(r3, n3);
          if (d3 = (function(e4) {
            if (!("u" > typeof CSS && CSS.supports && CSS.supports("scrollbar-gutter", "stable")) || "u" < typeof document) return false;
            let t5 = (0, s.ownerDocument)(e4), r4 = t5.documentElement, n4 = w(r4, t5.body), o4 = n4.style.overflowY, l4 = r4.style.scrollbarGutter;
            r4.style.scrollbarGutter = "stable", n4.style.overflowY = "scroll";
            let i3 = n4.offsetWidth;
            n4.style.overflowY = "hidden";
            let a3 = n4.offsetWidth;
            return n4.style.overflowY = o4, r4.style.scrollbarGutter = l4, i3 === a3;
          })(e3)) {
            r3.style.scrollbarGutter = a2, k.style.overflowY = "hidden", k.style.overflowX = "hidden";
            return;
          }
          Object.assign(r3.style, { scrollbarGutter: a2, overflowY: "hidden", overflowX: "hidden" }), (u2 || g4) && (r3.style.overflowY = "scroll"), (f2 || b3) && (r3.style.overflowX = "scroll"), Object.assign(n3.style, { position: "relative", height: M || v3 ? `calc(100dvh - ${M + v3}px)` : "100dvh", width: E || m3 ? `calc(100vw - ${E + m3}px)` : "100vw", boxSizing: "border-box", overflowY: "hidden", overflowX: "hidden", scrollBehavior: "unset" }), n3.scrollTop = l3, n3.scrollLeft = c3, r3.setAttribute("data-base-ui-scroll-locked", ""), r3.style.scrollBehavior = "unset";
        }
        function m2() {
          Object.assign(r3.style, p), Object.assign(n3.style, y), d3 || (r3.scrollTop = l3, r3.scrollLeft = c3, r3.removeAttribute("data-base-ui-scroll-locked"), r3.style.scrollBehavior = h);
        }
        b2();
        let v2 = (0, i.addEventListener)(o3, "resize", function() {
          m2(), g3.request(b2);
        });
        return () => {
          g3.cancel(), m2(), "function" == typeof o3.removeEventListener && v2();
        };
      })(e2);
    }
  }
  let v = new m();
  e.s(["useScrollLock", 0, function(e2 = true, t2 = null) {
    (0, c.useIsoLayoutEffect)(() => {
      if (e2) return v.acquire(t2);
    }, [e2, t2]);
  }], 547470);
}, 522353, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(424404);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var o = e.i(553254), l = e.i(599607);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function s(e2, n2) {
    var l2;
    let i2, a2, { onClick: s2, onPointerDown: u } = (l2 = (0, r.useStableCallback)((t2, r2) => {
      ("function" == typeof e2 ? e2() : e2) || n2(r2 || (o.platform.os.ios ? "touch" : ""));
    }), i2 = t.useRef(""), a2 = t.useCallback((e3) => {
      e3.defaultPrevented || (i2.current = e3.pointerType, l2(e3, e3.pointerType));
    }, [l2]), { onClick: t.useCallback((e3) => {
      0 === e3.detail ? l2(e3, "keyboard") : ("pointerType" in e3 ? l2(e3, e3.pointerType) : l2(e3, i2.current), i2.current = "");
    }, [l2]), onPointerDown: a2 });
    return t.useMemo(() => ({ onClick: s2, onPointerDown: u }), [s2, u]);
  }
  e.s(["useOpenInteractionType", 0, function(e2) {
    var n2;
    let o2, i2, [a2, u] = t.useState(null), c = s(e2, u);
    return n2 = (t2) => {
      t2 && !e2 && u(null);
    }, o2 = t.useRef(e2), i2 = (0, r.useStableCallback)(n2), (0, l.useIsoLayoutEffect)(() => {
      o2.current !== e2 && i2(o2.current), o2.current = e2;
    }, [e2, i2]), t.useMemo(() => ({ openMethod: a2, triggerProps: c }), [a2, c]);
  }, "useOpenMethodTriggerProps", 0, s], 522353);
}]);
