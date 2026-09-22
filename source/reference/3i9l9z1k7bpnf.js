;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "5eb132fa-4fb8-8389-4687-c44277828a10");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 291967, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  "u" > typeof window && window.document && window.document.createElement, e.s(["composeEventHandlers", 0, function(e2, t2, { checkForDefaultPrevented: r = true } = {}) {
    return function(n) {
      if (e2?.(n), false === r || !n.defaultPrevented) return t2?.(n);
    };
  }]);
}, 459451, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(652531), n = e.i(393125), o = e.i(728654), a = e.i(543836), i = e.i(548913), s = e.i(45240), l = e.i(930469), u = e.i(119637), d = e.i(35555), c = e.i(68982);
  try {
    var f = "u" > typeof window ? window : e.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var p = Object.defineProperty, y = (e2, t2) => p(e2, "name", { value: t2, configurable: true }), w = "Accordion", m = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [v, M, C] = (0, n.createCollection)(w), [g, b] = (0, r.createContextScope)(w, [C, l.createCollapsibleScope]), E = (0, l.createCollapsibleScope)(), h = t.forwardRef(y(function(e2, t2) {
    let { type: r2, ...n2 } = e2;
    return (0, c.jsx)(v.Provider, { scope: e2.__scopeAccordion, children: "multiple" === r2 ? (0, c.jsx)(P, { ...n2, ref: t2 }) : (0, c.jsx)(R, { ...n2, ref: t2 }) });
  }, "Accordion")), [_, x] = g(w), [A, j] = g(w, { collapsible: false }), R = t.forwardRef(y(function(e2, r2) {
    let { value: n2, defaultValue: o2, onValueChange: a2 = y(() => {
    }, "onValueChange"), collapsible: s2 = false, ...l2 } = e2, [u2, d2] = (0, i.useControllableState)({ prop: n2, defaultProp: o2 ?? "", onChange: a2, caller: w });
    return (0, c.jsx)(_, { scope: e2.__scopeAccordion, value: t.useMemo(() => u2 ? [u2] : [], [u2]), onItemOpen: d2, onItemClose: t.useCallback(() => s2 && d2(""), [s2, d2]), children: (0, c.jsx)(A, { scope: e2.__scopeAccordion, collapsible: s2, children: (0, c.jsx)(k, { ...l2, ref: r2 }) }) });
  }, "AccordionImplSingle")), P = t.forwardRef(y(function(e2, r2) {
    let { value: n2, defaultValue: o2, onValueChange: a2 = y(() => {
    }, "onValueChange"), ...s2 } = e2, [l2, u2] = (0, i.useControllableState)({ prop: n2, defaultProp: o2 ?? [], onChange: a2, caller: w }), d2 = t.useCallback((e3) => u2((t2 = []) => [...t2, e3]), [u2]), f2 = t.useCallback((e3) => u2((t2 = []) => t2.filter((t3) => t3 !== e3)), [u2]);
    return (0, c.jsx)(_, { scope: e2.__scopeAccordion, value: l2, onItemOpen: d2, onItemClose: f2, children: (0, c.jsx)(A, { scope: e2.__scopeAccordion, collapsible: true, children: (0, c.jsx)(k, { ...s2, ref: r2 }) }) });
  }, "AccordionImplMultiple")), [L, O] = g(w), k = t.forwardRef(y(function(e2, r2) {
    let { __scopeAccordion: n2, disabled: i2, dir: l2, orientation: u2 = "vertical", ...f2 } = e2, p2 = t.useRef(null), w2 = (0, o.useComposedRefs)(p2, r2), C2 = M(n2), g2 = "ltr" === (0, d.useDirection)(l2), b2 = (0, a.composeEventHandlers)(e2.onKeyDown, (e3) => {
      if (!m.includes(e3.key)) return;
      let t2 = e3.target, r3 = C2().filter((e4) => !e4.ref.current?.disabled), n3 = r3.findIndex((e4) => e4.ref.current === t2), o2 = r3.length;
      if (-1 === n3) return;
      e3.preventDefault();
      let a2 = n3, i3 = o2 - 1, s2 = y(() => {
        (a2 = n3 + 1) > i3 && (a2 = 0);
      }, "moveNext"), l3 = y(() => {
        (a2 = n3 - 1) < 0 && (a2 = i3);
      }, "movePrev");
      switch (e3.key) {
        case "Home":
          a2 = 0;
          break;
        case "End":
          a2 = i3;
          break;
        case "ArrowRight":
          "horizontal" === u2 && (g2 ? s2() : l3());
          break;
        case "ArrowDown":
          "vertical" === u2 && s2();
          break;
        case "ArrowLeft":
          "horizontal" === u2 && (g2 ? l3() : s2());
          break;
        case "ArrowUp":
          "vertical" === u2 && l3();
      }
      let d2 = a2 % o2;
      r3[d2].ref.current?.focus();
    });
    return (0, c.jsx)(L, { scope: n2, disabled: i2, direction: l2, orientation: u2, children: (0, c.jsx)(v.Slot, { scope: n2, children: (0, c.jsx)(s.Primitive.div, { ...f2, "data-orientation": u2, ref: w2, onKeyDown: i2 ? void 0 : b2 }) }) });
  }, "AccordionImpl")), S = "AccordionItem", [N, I] = g(S), T = t.forwardRef(y(function(e2, t2) {
    let { __scopeAccordion: r2, value: n2, ...o2 } = e2, a2 = O(S, r2), i2 = x(S, r2), s2 = E(r2), d2 = (0, u.useId)(), f2 = n2 && i2.value.includes(n2) || false, p2 = a2.disabled || e2.disabled;
    return (0, c.jsx)(N, { scope: r2, open: f2, disabled: p2, triggerId: d2, children: (0, c.jsx)(l.Root, { "data-orientation": a2.orientation, "data-state": K(f2), ...s2, ...o2, ref: t2, disabled: p2, open: f2, onOpenChange: (e3) => {
      e3 ? i2.onItemOpen(n2) : i2.onItemClose(n2);
    } }) });
  }, "AccordionItem")), D = t.forwardRef(y(function(e2, t2) {
    let { __scopeAccordion: r2, ...n2 } = e2, o2 = O(w, r2), a2 = I("AccordionHeader", r2);
    return (0, c.jsx)(s.Primitive.h3, { "data-orientation": o2.orientation, "data-state": K(a2.open), "data-disabled": a2.disabled ? "" : void 0, ...n2, ref: t2 });
  }, "AccordionHeader")), V = "AccordionTrigger", H = t.forwardRef(y(function(e2, t2) {
    let { __scopeAccordion: r2, ...n2 } = e2, o2 = O(w, r2), a2 = I(V, r2), i2 = j(V, r2), s2 = E(r2);
    return (0, c.jsx)(v.ItemSlot, { scope: r2, children: (0, c.jsx)(l.Trigger, { "aria-disabled": a2.open && !i2.collapsible || void 0, "data-orientation": o2.orientation, id: a2.triggerId, ...s2, ...n2, ref: t2 }) });
  }, "AccordionTrigger")), B = t.forwardRef(y(function(e2, t2) {
    let { __scopeAccordion: r2, ...n2 } = e2, o2 = O(w, r2), a2 = I("AccordionContent", r2), i2 = E(r2);
    return (0, c.jsx)(l.Content, { role: "region", "aria-labelledby": a2.triggerId, "data-orientation": o2.orientation, ...i2, ...n2, ref: t2, style: { "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", ...e2.style } });
  }, "AccordionContent"));
  function K(e2) {
    return e2 ? "open" : "closed";
  }
  y(K, "getState"), e.s(["Accordion", 0, h, "AccordionContent", 0, B, "AccordionHeader", 0, D, "AccordionItem", 0, T, "AccordionTrigger", 0, H, "Content", 0, B, "Header", 0, D, "Item", 0, T, "Root", 0, h, "Trigger", 0, H, "createAccordionScope", 0, b]);
}, 930469, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(543836), n = e.i(652531), o = e.i(548913), a = e.i(386271), i = e.i(728654), s = e.i(45240), l = e.i(198623), u = e.i(119637), d = e.i(68982);
  try {
    var c = "u" > typeof window ? window : e.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var f = Object.defineProperty, p = (e2, t2) => f(e2, "name", { value: t2, configurable: true }), y = "Collapsible", [w, m] = (0, n.createContextScope)(y), [v, M] = w(y), C = t.forwardRef(p(function(e2, r2) {
    let { __scopeCollapsible: n2, open: a2, defaultOpen: i2, disabled: l2, onOpenChange: c2, ...f2 } = e2, [p2, w2] = (0, o.useControllableState)({ prop: a2, defaultProp: i2 ?? false, onChange: c2, caller: y });
    return (0, d.jsx)(v, { scope: n2, disabled: l2, contentId: (0, u.useId)(), open: p2, onOpenToggle: t.useCallback(() => w2((e3) => !e3), [w2]), children: (0, d.jsx)(s.Primitive.div, { "data-state": _(p2), "data-disabled": l2 ? "" : void 0, ...f2, ref: r2 }) });
  }, "Collapsible")), g = t.forwardRef(p(function(e2, t2) {
    let { __scopeCollapsible: n2, ...o2 } = e2, a2 = M("CollapsibleTrigger", n2);
    return (0, d.jsx)(s.Primitive.button, { type: "button", "aria-controls": a2.open ? a2.contentId : void 0, "aria-expanded": a2.open || false, "data-state": _(a2.open), "data-disabled": a2.disabled ? "" : void 0, disabled: a2.disabled, ...o2, ref: t2, onClick: (0, r.composeEventHandlers)(e2.onClick, a2.onOpenToggle) });
  }, "CollapsibleTrigger")), b = "CollapsibleContent", E = t.forwardRef(p(function(e2, t2) {
    let { forceMount: r2, ...n2 } = e2, o2 = M(b, e2.__scopeCollapsible);
    return (0, d.jsx)(l.Presence, { present: r2 || o2.open, children: ({ present: e3 }) => (0, d.jsx)(h, { ...n2, ref: t2, present: e3 }) });
  }, "CollapsibleContent")), h = t.forwardRef(p(function(e2, r2) {
    let { __scopeCollapsible: n2, present: o2, children: l2, ...u2 } = e2, c2 = M(b, n2), [f2, p2] = t.useState(o2), y2 = t.useRef(null), w2 = (0, i.useComposedRefs)(r2, y2), m2 = t.useRef(0), v2 = m2.current, C2 = t.useRef(0), g2 = C2.current, E2 = c2.open || f2, h2 = t.useRef(E2), x = t.useRef(void 0);
    return t.useEffect(() => {
      let e3 = requestAnimationFrame(() => h2.current = false);
      return () => cancelAnimationFrame(e3);
    }, []), (0, a.useLayoutEffect)(() => {
      let e3 = y2.current;
      if (e3) {
        x.current = x.current || { transitionDuration: e3.style.transitionDuration, animationName: e3.style.animationName }, e3.style.transitionDuration = "0s", e3.style.animationName = "none";
        let t2 = e3.getBoundingClientRect();
        m2.current = t2.height, C2.current = t2.width, h2.current || (e3.style.transitionDuration = x.current.transitionDuration, e3.style.animationName = x.current.animationName), p2(o2);
      }
    }, [c2.open, o2]), (0, d.jsx)(s.Primitive.div, { "data-state": _(c2.open), "data-disabled": c2.disabled ? "" : void 0, id: c2.contentId, hidden: !E2, ...u2, ref: w2, style: { "--radix-collapsible-content-height": v2 ? `${v2}px` : void 0, "--radix-collapsible-content-width": g2 ? `${g2}px` : void 0, ...e2.style }, children: E2 && l2 });
  }, "CollapsibleContentImpl"));
  function _(e2) {
    return e2 ? "open" : "closed";
  }
  p(_, "getState"), e.s(["Content", 0, E, "Root", 0, C, "Trigger", 0, g, "createCollapsibleScope", 0, m]);
}, 205978, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function n(e2, t2) {
    if ("function" == typeof e2) return e2(t2);
    null != e2 && (e2.current = t2);
  }
  function o(...e2) {
    return (t2) => {
      let r2 = false, o2 = e2.map((e3) => {
        let o3 = n(e3, t2);
        return r2 || "function" != typeof o3 || (r2 = true), o3;
      });
      if (r2) return () => {
        for (let t3 = 0; t3 < o2.length; t3++) {
          let r3 = o2[t3];
          "function" == typeof r3 ? r3() : n(e2[t3], null);
        }
      };
    };
  }
  e.s(["composeRefs", 0, o, "useComposedRefs", 0, function(...e2) {
    return t.useCallback(o(...e2), e2);
  }]);
}, 922528, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(68982);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["createContext", 0, function(e2, n2) {
    let o = t.createContext(n2), a = (e3) => {
      let { children: n3, ...a2 } = e3, i = t.useMemo(() => a2, Object.values(a2));
      return (0, r.jsx)(o.Provider, { value: i, children: n3 });
    };
    return a.displayName = e2 + "Provider", [a, function(r2) {
      let a2 = t.useContext(o);
      if (a2) return a2;
      if (void 0 !== n2) return n2;
      throw Error(`\`${r2}\` must be used within \`${e2}\``);
    }];
  }, "createContextScope", 0, function(e2, n2 = []) {
    let o = [], a = () => {
      let r2 = o.map((e3) => t.createContext(e3));
      return function(n3) {
        let o2 = n3?.[e2] || r2;
        return t.useMemo(() => ({ [`__scope${e2}`]: { ...n3, [e2]: o2 } }), [n3, o2]);
      };
    };
    return a.scopeName = e2, [function(n3, a2) {
      let i = t.createContext(a2), s = o.length;
      o = [...o, a2];
      let l = (n4) => {
        let { scope: o2, children: a3, ...l2 } = n4, u = o2?.[e2]?.[s] || i, d = t.useMemo(() => l2, Object.values(l2));
        return (0, r.jsx)(u.Provider, { value: d, children: a3 });
      };
      return l.displayName = n3 + "Provider", [l, function(r2, o2) {
        let l2 = o2?.[e2]?.[s] || i, u = t.useContext(l2);
        if (u) return u;
        if (void 0 !== a2) return a2;
        throw Error(`\`${r2}\` must be used within \`${n3}\``);
      }];
    }, (function(...e3) {
      let r2 = e3[0];
      if (1 === e3.length) return r2;
      let n3 = () => {
        let n4 = e3.map((e4) => ({ useScope: e4(), scopeName: e4.scopeName }));
        return function(e4) {
          let o2 = n4.reduce((t2, { useScope: r3, scopeName: n5 }) => {
            let o3 = r3(e4)[`__scope${n5}`];
            return { ...t2, ...o3 };
          }, {});
          return t.useMemo(() => ({ [`__scope${r2.scopeName}`]: o2 }), [o2]);
        };
      };
      return n3.scopeName = r2.scopeName, n3;
    })(a, ...n2)];
  }]);
}, 253532, 786874, 287620, 929297, (e) => {
  "use strict";
  var t, r = e.i(856757), n = e.i(291967), o = e.i(403432), a = e.i(205978), i = e.i(68982);
  try {
    var s = "u" > typeof window ? window : e.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function l(e2) {
    var t2;
    let n2, o2 = (t2 = e2, (n2 = r.forwardRef((e3, t3) => {
      let { children: n3, ...o3 } = e3;
      if (r.isValidElement(n3)) {
        var i2;
        let e4, s3, l2 = (i2 = n3, (s3 = (e4 = Object.getOwnPropertyDescriptor(i2.props, "ref")?.get) && "isReactWarning" in e4 && e4.isReactWarning) ? i2.ref : (s3 = (e4 = Object.getOwnPropertyDescriptor(i2, "ref")?.get) && "isReactWarning" in e4 && e4.isReactWarning) ? i2.props.ref : i2.props.ref || i2.ref), u2 = (function(e5, t4) {
          let r2 = { ...t4 };
          for (let n4 in t4) {
            let o4 = e5[n4], a2 = t4[n4];
            /^on[A-Z]/.test(n4) ? o4 && a2 ? r2[n4] = (...e6) => {
              let t5 = a2(...e6);
              return o4(...e6), t5;
            } : o4 && (r2[n4] = o4) : "style" === n4 ? r2[n4] = { ...o4, ...a2 } : "className" === n4 && (r2[n4] = [o4, a2].filter(Boolean).join(" "));
          }
          return { ...e5, ...r2 };
        })(o3, n3.props);
        return n3.type !== r.Fragment && (u2.ref = t3 ? (0, a.composeRefs)(t3, l2) : l2), r.cloneElement(n3, u2);
      }
      return r.Children.count(n3) > 1 ? r.Children.only(null) : null;
    })).displayName = `${t2}.SlotClone`, n2), s2 = r.forwardRef((e3, t3) => {
      let { children: n3, ...a2 } = e3, s3 = r.Children.toArray(n3), l2 = s3.find(d);
      if (l2) {
        let e4 = l2.props.children, n4 = s3.map((t4) => t4 !== l2 ? t4 : r.Children.count(e4) > 1 ? r.Children.only(null) : r.isValidElement(e4) ? e4.props.children : null);
        return (0, i.jsx)(o2, { ...a2, ref: t3, children: r.isValidElement(e4) ? r.cloneElement(e4, void 0, n4) : null });
      }
      return (0, i.jsx)(o2, { ...a2, ref: t3, children: n3 });
    });
    return s2.displayName = `${e2}.Slot`, s2;
  }
  var u = /* @__PURE__ */ Symbol("radix.slottable");
  function d(e2) {
    return r.isValidElement(e2) && "function" == typeof e2.type && "__radixId" in e2.type && e2.type.__radixId === u;
  }
  e.s(["createSlot", 0, l, "createSlottable", 0, function(e2) {
    let t2 = ({ children: e3 }) => (0, i.jsx)(i.Fragment, { children: e3 });
    return t2.displayName = `${e2}.Slottable`, t2.__radixId = u, t2;
  }], 786874);
  try {
    var c = "u" > typeof window ? window : e.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var f = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e2, t2) => {
    let n2 = l(`Primitive.${t2}`), o2 = r.forwardRef((e3, r2) => {
      let { asChild: o3, ...a2 } = e3;
      return "u" > typeof window && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), (0, i.jsx)(o3 ? n2 : t2, { ...a2, ref: r2 });
    });
    return o2.displayName = `Primitive.${t2}`, { ...e2, [t2]: o2 };
  }, {});
  function p(e2, t2) {
    e2 && o.flushSync(() => e2.dispatchEvent(t2));
  }
  e.s(["Primitive", 0, f, "dispatchDiscreteCustomEvent", 0, p], 287620);
  try {
    var y = "u" > typeof window ? window : e.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function w(e2) {
    let t2 = r.useRef(e2);
    return r.useEffect(() => {
      t2.current = e2;
    }), r.useMemo(() => (...e3) => t2.current?.(...e3), []);
  }
  e.s(["useCallbackRef", 0, w], 929297);
  try {
    var m = "u" > typeof window ? window : e.g;
    m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[new m.Error().stack] = Object.assign({}, m._sentryModuleMetadata[new m.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var v = "u" > typeof window ? window : e.g;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var M = "dismissableLayer.update", C = r.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), g = r.forwardRef((e2, o2) => {
    let { disableOutsidePointerEvents: s2 = false, onEscapeKeyDown: l2, onPointerDownOutside: u2, onFocusOutside: d2, onInteractOutside: c2, onDismiss: p2, ...y2 } = e2, m2 = r.useContext(C), [v2, g2] = r.useState(null), h = v2?.ownerDocument ?? globalThis?.document, [, _] = r.useState({}), x = (0, a.useComposedRefs)(o2, (e3) => g2(e3)), A = Array.from(m2.layers), [j] = [...m2.layersWithOutsidePointerEventsDisabled].slice(-1), R = A.indexOf(j), P = v2 ? A.indexOf(v2) : -1, L = m2.layersWithOutsidePointerEventsDisabled.size > 0, O = P >= R, k = (function(e3, t2 = globalThis?.document) {
      let n2 = w(e3), o3 = r.useRef(false), a2 = r.useRef(() => {
      });
      return r.useEffect(() => {
        let e4 = (e5) => {
          if (e5.target && !o3.current) {
            let r3 = function() {
              E("dismissableLayer.pointerDownOutside", n2, o4, { discrete: true });
            }, o4 = { originalEvent: e5 };
            "touch" === e5.pointerType ? (t2.removeEventListener("click", a2.current), a2.current = r3, t2.addEventListener("click", a2.current, { once: true })) : r3();
          } else t2.removeEventListener("click", a2.current);
          o3.current = false;
        }, r2 = window.setTimeout(() => {
          t2.addEventListener("pointerdown", e4);
        }, 0);
        return () => {
          window.clearTimeout(r2), t2.removeEventListener("pointerdown", e4), t2.removeEventListener("click", a2.current);
        };
      }, [t2, n2]), { onPointerDownCapture: () => o3.current = true };
    })((e3) => {
      let t2 = e3.target, r2 = [...m2.branches].some((e4) => e4.contains(t2));
      O && !r2 && (u2?.(e3), c2?.(e3), e3.defaultPrevented || p2?.());
    }, h), S = (function(e3, t2 = globalThis?.document) {
      let n2 = w(e3), o3 = r.useRef(false);
      return r.useEffect(() => {
        let e4 = (e5) => {
          e5.target && !o3.current && E("dismissableLayer.focusOutside", n2, { originalEvent: e5 }, { discrete: false });
        };
        return t2.addEventListener("focusin", e4), () => t2.removeEventListener("focusin", e4);
      }, [t2, n2]), { onFocusCapture: () => o3.current = true, onBlurCapture: () => o3.current = false };
    })((e3) => {
      let t2 = e3.target;
      ![...m2.branches].some((e4) => e4.contains(t2)) && (d2?.(e3), c2?.(e3), e3.defaultPrevented || p2?.());
    }, h);
    return !(function(e3, t2 = globalThis?.document) {
      let n2 = w(e3);
      r.useEffect(() => {
        let e4 = (e5) => {
          "Escape" === e5.key && n2(e5);
        };
        return t2.addEventListener("keydown", e4, { capture: true }), () => t2.removeEventListener("keydown", e4, { capture: true });
      }, [n2, t2]);
    })((e3) => {
      P === m2.layers.size - 1 && (l2?.(e3), !e3.defaultPrevented && p2 && (e3.preventDefault(), p2()));
    }, h), r.useEffect(() => {
      if (v2) return s2 && (0 === m2.layersWithOutsidePointerEventsDisabled.size && (t = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), m2.layersWithOutsidePointerEventsDisabled.add(v2)), m2.layers.add(v2), b(), () => {
        s2 && 1 === m2.layersWithOutsidePointerEventsDisabled.size && (h.body.style.pointerEvents = t);
      };
    }, [v2, h, s2, m2]), r.useEffect(() => () => {
      v2 && (m2.layers.delete(v2), m2.layersWithOutsidePointerEventsDisabled.delete(v2), b());
    }, [v2, m2]), r.useEffect(() => {
      let e3 = () => _({});
      return document.addEventListener(M, e3), () => document.removeEventListener(M, e3);
    }, []), (0, i.jsx)(f.div, { ...y2, ref: x, style: { pointerEvents: L ? O ? "auto" : "none" : void 0, ...e2.style }, onFocusCapture: (0, n.composeEventHandlers)(e2.onFocusCapture, S.onFocusCapture), onBlurCapture: (0, n.composeEventHandlers)(e2.onBlurCapture, S.onBlurCapture), onPointerDownCapture: (0, n.composeEventHandlers)(e2.onPointerDownCapture, k.onPointerDownCapture) });
  });
  function b() {
    let e2 = new CustomEvent(M);
    document.dispatchEvent(e2);
  }
  function E(e2, t2, r2, { discrete: n2 }) {
    let o2 = r2.originalEvent.target, a2 = new CustomEvent(e2, { bubbles: false, cancelable: true, detail: r2 });
    t2 && o2.addEventListener(e2, t2, { once: true }), n2 ? p(o2, a2) : o2.dispatchEvent(a2);
  }
  g.displayName = "DismissableLayer", r.forwardRef((e2, t2) => {
    let n2 = r.useContext(C), o2 = r.useRef(null), s2 = (0, a.useComposedRefs)(t2, o2);
    return r.useEffect(() => {
      let e3 = o2.current;
      if (e3) return n2.branches.add(e3), () => {
        n2.branches.delete(e3);
      };
    }, [n2.branches]), (0, i.jsx)(f.div, { ...e2, ref: s2 });
  }).displayName = "DismissableLayerBranch", e.s(["DismissableLayer", 0, g], 253532);
}, 713123, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(305192);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var o = t[" useId ".trim().toString()] || (() => void 0), a = 0;
  e.s(["useId", 0, function(e2) {
    let [n2, i] = t.useState(o());
    return (0, r.useLayoutEffect)(() => {
      e2 || i((e3) => e3 ?? String(a++));
    }, [e2]), e2 || (n2 ? `radix-${n2}` : "");
  }]);
}, 339979, 685995, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(403432), n = e.i(287620), o = e.i(305192), a = e.i(68982);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var s = t.forwardRef((e2, i2) => {
    let { container: s2, ...l2 } = e2, [u2, d2] = t.useState(false);
    (0, o.useLayoutEffect)(() => d2(true), []);
    let c2 = s2 || u2 && globalThis?.document?.body;
    return c2 ? r.default.createPortal((0, a.jsx)(n.Primitive.div, { ...l2, ref: i2 }), c2) : null;
  });
  s.displayName = "Portal", e.s(["Portal", 0, s], 339979);
  var l = e.i(205978);
  try {
    var u = "u" > typeof window ? window : e.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var d = (e2) => {
    var r2;
    let n2, a2, { present: i2, children: s2 } = e2, u2 = (function(e3) {
      var r3, n3;
      let [a3, i3] = t.useState(), s3 = t.useRef(null), l2 = t.useRef(e3), u3 = t.useRef("none"), [d3, f2] = (r3 = e3 ? "mounted" : "unmounted", n3 = { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } }, t.useReducer((e4, t2) => n3[e4][t2] ?? e4, r3));
      return t.useEffect(() => {
        let e4 = c(s3.current);
        u3.current = "mounted" === d3 ? e4 : "none";
      }, [d3]), (0, o.useLayoutEffect)(() => {
        let t2 = s3.current, r4 = l2.current;
        if (r4 !== e3) {
          let n4 = u3.current, o2 = c(t2);
          e3 ? f2("MOUNT") : "none" === o2 || t2?.display === "none" ? f2("UNMOUNT") : r4 && n4 !== o2 ? f2("ANIMATION_OUT") : f2("UNMOUNT"), l2.current = e3;
        }
      }, [e3, f2]), (0, o.useLayoutEffect)(() => {
        if (a3) {
          let e4, t2 = a3.ownerDocument.defaultView ?? window, r4 = (r5) => {
            let n5 = c(s3.current).includes(CSS.escape(r5.animationName));
            if (r5.target === a3 && n5 && (f2("ANIMATION_END"), !l2.current)) {
              let r6 = a3.style.animationFillMode;
              a3.style.animationFillMode = "forwards", e4 = t2.setTimeout(() => {
                "forwards" === a3.style.animationFillMode && (a3.style.animationFillMode = r6);
              });
            }
          }, n4 = (e5) => {
            e5.target === a3 && (u3.current = c(s3.current));
          };
          return a3.addEventListener("animationstart", n4), a3.addEventListener("animationcancel", r4), a3.addEventListener("animationend", r4), () => {
            t2.clearTimeout(e4), a3.removeEventListener("animationstart", n4), a3.removeEventListener("animationcancel", r4), a3.removeEventListener("animationend", r4);
          };
        }
        f2("ANIMATION_END");
      }, [a3, f2]), { isPresent: ["mounted", "unmountSuspended"].includes(d3), ref: t.useCallback((e4) => {
        s3.current = e4 ? getComputedStyle(e4) : null, i3(e4);
      }, []) };
    })(i2), d2 = "function" == typeof s2 ? s2({ present: u2.isPresent }) : t.Children.only(s2), f = (0, l.useComposedRefs)(u2.ref, (r2 = d2, (a2 = (n2 = Object.getOwnPropertyDescriptor(r2.props, "ref")?.get) && "isReactWarning" in n2 && n2.isReactWarning) ? r2.ref : (a2 = (n2 = Object.getOwnPropertyDescriptor(r2, "ref")?.get) && "isReactWarning" in n2 && n2.isReactWarning) ? r2.props.ref : r2.props.ref || r2.ref));
    return "function" == typeof s2 || u2.isPresent ? t.cloneElement(d2, { ref: f }) : null;
  };
  function c(e2) {
    return e2?.animationName || "none";
  }
  d.displayName = "Presence", e.s(["Presence", 0, d], 685995);
}, 936589, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(305192);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t[" useEffectEvent ".trim().toString()], t[" useInsertionEffect ".trim().toString()];
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var a = t[" useInsertionEffect ".trim().toString()] || r.useLayoutEffect;
  /* @__PURE__ */ Symbol("RADIX:SYNC_STATE"), e.s(["useControllableState", 0, function({ prop: e2, defaultProp: r2, onChange: n2 = () => {
  }, caller: o2 }) {
    let [i, s, l] = (function({ defaultProp: e3, onChange: r3 }) {
      let [n3, o3] = t.useState(e3), i2 = t.useRef(n3), s2 = t.useRef(r3);
      return a(() => {
        s2.current = r3;
      }, [r3]), t.useEffect(() => {
        i2.current !== n3 && (s2.current?.(n3), i2.current = n3);
      }, [n3, i2]), [n3, o3, s2];
    })({ defaultProp: r2, onChange: n2 }), u = void 0 !== e2, d = u ? e2 : i;
    {
      let r3 = t.useRef(void 0 !== e2);
      t.useEffect(() => {
        let e3 = r3.current;
        if (e3 !== u) {
          let t2 = u ? "controlled" : "uncontrolled";
          console.warn(`${o2} is changing from ${e3 ? "controlled" : "uncontrolled"} to ${t2}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
        }
        r3.current = u;
      }, [u, o2]);
    }
    return [d, t.useCallback((t2) => {
      if (u) {
        let r3 = "function" == typeof t2 ? t2(e2) : t2;
        r3 !== e2 && l.current?.(r3);
      } else s(t2);
    }, [u, e2, s, l])];
  }], 936589);
}, 305192, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = globalThis?.document ? t.useLayoutEffect : () => {
  };
  e.s(["useLayoutEffect", 0, n]);
}, 962027, (e) => {
  "use strict";
  var t = e.i(68982);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AttioLockup", 0, function(e2) {
    return (0, t.jsxs)("svg", { width: "103", height: "26", viewBox: "0 0 103 26", fill: "none", ...e2, children: [(0, t.jsx)("path", { d: "M84.2267 1.03809H79.9922V5.27257H84.2267V1.03809Z", fill: "currentColor" }), (0, t.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.7423 11.9094H64.0236V18.7905C64.0236 19.364 64.1661 19.7836 64.4529 20.0473C64.7396 20.3129 65.1592 20.4669 65.7097 20.5112C66.2602 20.5324 66.9454 20.5227 67.7615 20.4785V24.3492C64.8725 24.6802 62.811 24.4146 61.5753 23.5562C60.3627 22.6746 59.7564 21.0867 59.7564 18.7924V11.9113H56.8789V7.80774H59.7564V4.46635L64.0236 3.17676V7.80967H70.6198V4.46828L74.887 3.17868V7.81159H78.6249V11.9152H74.887V18.7962C74.887 19.3698 75.0294 19.7894 75.3162 20.0531C75.603 20.3187 76.0226 20.4727 76.5731 20.517C77.1236 20.5381 77.8088 20.5285 78.623 20.4842V24.3549C75.7339 24.686 73.6725 24.4204 72.4368 23.5619C71.2242 22.6804 70.6179 21.0925 70.6179 18.7981V11.9171H67.7404L67.7423 11.9094Z", fill: "currentColor" }), (0, t.jsx)("path", { d: "M84.2477 7.80371H79.9805V24.3471H84.2477V7.80371Z", fill: "currentColor" }), (0, t.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M94.3015 7.375C89.4973 7.375 85.6016 11.2707 85.6016 16.0769C85.6016 20.883 89.4973 24.7787 94.3015 24.7787C99.1057 24.7787 103.001 20.883 103.001 16.0769C103.001 11.2707 99.1076 7.375 94.3015 7.375V7.375ZM94.2861 20.6771C91.7377 20.6771 89.6705 18.6099 89.6705 16.0615C89.6705 13.5131 91.7377 11.4459 94.2861 11.4459C96.8345 11.4459 98.8998 13.5111 98.8998 16.0615C98.8998 18.6118 96.8345 20.6771 94.2861 20.6771V20.6771Z", fill: "currentColor" }), (0, t.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M51.2865 7.7715V8.68961C49.9526 7.85812 48.3782 7.375 46.6902 7.375C41.886 7.375 37.9902 11.2707 37.9902 16.0769C37.9902 20.883 41.886 24.7787 46.6902 24.7787C48.3782 24.7787 49.9526 24.2975 51.2865 23.4641V24.3822H55.521V7.7715H51.2865ZM46.6748 20.6771C44.1264 20.6771 42.0592 18.6099 42.0592 16.0615C42.0592 13.5131 44.1264 11.4459 46.6748 11.4459C49.2232 11.4459 51.2461 13.4707 51.2865 15.9845V16.1365C51.2461 18.6503 49.1981 20.6751 46.6748 20.6751V20.6771Z", fill: "currentColor" }), (0, t.jsx)("path", { d: "M30.6468 17.7823L28.0599 13.6422C28.0599 13.6422 28.0503 13.6248 28.0445 13.6172L27.8405 13.2919C27.4555 12.674 26.7895 12.3045 26.062 12.3025L21.8949 12.2891L21.6042 12.7549L16.6249 20.7234L16.3496 21.1642L18.4361 24.4978C18.821 25.1176 19.487 25.4872 20.2203 25.4872H26.06C26.7799 25.4872 27.4613 25.108 27.8424 24.4998L28.0483 24.1706C28.0483 24.1706 28.056 24.161 28.058 24.1572L30.6487 20.0112C31.0741 19.3337 31.0741 18.4579 30.6487 17.7823H30.6468ZM29.8576 19.5166L27.2669 23.6625C27.2553 23.6817 27.2419 23.6971 27.2303 23.7125C27.1398 23.8146 27.0224 23.828 26.9705 23.828C26.9108 23.828 26.7645 23.8107 26.6702 23.6606L24.0795 19.5146C24.0506 19.4684 24.0256 19.4203 24.0025 19.3683C23.9794 19.3183 23.9621 19.2683 23.9467 19.2163C23.8889 19.0084 23.8889 18.7851 23.9467 18.5773C23.9755 18.4753 24.0198 18.3732 24.0775 18.2809L26.6644 14.1388C26.6644 14.1388 26.6683 14.133 26.6702 14.1291C26.7318 14.0367 26.8088 13.9944 26.8762 13.9809C26.9031 13.9732 26.9262 13.9713 26.9454 13.9675C26.9551 13.9675 26.9647 13.9675 26.9743 13.9675C27.034 13.9675 27.1822 13.9867 27.2746 14.1368L29.8615 18.277C30.0982 18.6543 30.0982 19.1393 29.8615 19.5166H29.8576Z", fill: "currentColor" }), (0, t.jsx)("path", { d: "M22.9913 7.7644C23.4148 7.08496 23.4148 6.21112 22.9913 5.53553L20.4044 1.39536L20.1889 1.04697C19.802 0.429125 19.136 0.0595703 18.4046 0.0595703H12.5649C11.8354 0.0595703 11.1694 0.429125 10.7806 1.0489L0.323361 17.7847C0.113561 18.1196 0 18.5065 0 18.8992C0 19.2918 0.111636 19.6787 0.321436 20.0117L3.12582 24.5022C3.5127 25.1219 4.17866 25.4896 4.90815 25.4896H10.7479C11.4812 25.4896 12.1472 25.12 12.5321 24.5002L12.7458 24.1615C12.7458 24.1615 12.7458 24.1615 12.7458 24.1576C12.7458 24.1576 12.7496 24.1519 12.7496 24.1499L14.8342 20.8162L21.0127 10.9287L22.9875 7.76633L22.9913 7.7644ZM22.3812 6.64996C22.3812 6.86361 22.3215 7.07919 22.2002 7.26974L11.9566 23.6649C11.8643 23.8131 11.716 23.8304 11.6564 23.8304C11.5967 23.8304 11.4504 23.8131 11.3561 23.6649L8.7673 19.517C8.53248 19.1417 8.53248 18.6586 8.7673 18.2794L19.0109 1.8881C19.1033 1.73797 19.2515 1.72064 19.3112 1.72064C19.3708 1.72064 19.519 1.73797 19.6134 1.89002L22.2002 6.03019C22.3215 6.22074 22.3812 6.43632 22.3812 6.64996V6.64996Z", fill: "currentColor" })] });
  }]);
}]);
