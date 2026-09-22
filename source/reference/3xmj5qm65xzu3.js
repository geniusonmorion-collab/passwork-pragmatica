;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "8afa3806-175f-27cc-0940-b1b12439ce0e");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 459451, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(652531), o = e.i(393125), n = e.i(728654), a = e.i(543836), i = e.i(548913), l = e.i(45240), s = e.i(930469), c = e.i(119637), d = e.i(35555), u = e.i(68982);
  try {
    var p = "u" > typeof window ? window : e.g;
    p._sentryModuleMetadata = p._sentryModuleMetadata || {}, p._sentryModuleMetadata[new p.Error().stack] = Object.assign({}, p._sentryModuleMetadata[new p.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var f = Object.defineProperty, g = (e2, t2) => f(e2, "name", { value: t2, configurable: true }), x = "Accordion", m = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [b, h, w] = (0, o.createCollection)(x), [v, y] = (0, r.createContextScope)(x, [w, s.createCollapsibleScope]), C = (0, s.createCollapsibleScope)(), j = t.forwardRef(g(function(e2, t2) {
    let { type: r2, ...o2 } = e2;
    return (0, u.jsx)(b.Provider, { scope: e2.__scopeAccordion, children: "multiple" === r2 ? (0, u.jsx)(k, { ...o2, ref: t2 }) : (0, u.jsx)(I, { ...o2, ref: t2 }) });
  }, "Accordion")), [A, M] = v(x), [_, R] = v(x, { collapsible: false }), I = t.forwardRef(g(function(e2, r2) {
    let { value: o2, defaultValue: n2, onValueChange: a2 = g(() => {
    }, "onValueChange"), collapsible: l2 = false, ...s2 } = e2, [c2, d2] = (0, i.useControllableState)({ prop: o2, defaultProp: n2 ?? "", onChange: a2, caller: x });
    return (0, u.jsx)(A, { scope: e2.__scopeAccordion, value: t.useMemo(() => c2 ? [c2] : [], [c2]), onItemOpen: d2, onItemClose: t.useCallback(() => l2 && d2(""), [l2, d2]), children: (0, u.jsx)(_, { scope: e2.__scopeAccordion, collapsible: l2, children: (0, u.jsx)(N, { ...s2, ref: r2 }) }) });
  }, "AccordionImplSingle")), k = t.forwardRef(g(function(e2, r2) {
    let { value: o2, defaultValue: n2, onValueChange: a2 = g(() => {
    }, "onValueChange"), ...l2 } = e2, [s2, c2] = (0, i.useControllableState)({ prop: o2, defaultProp: n2 ?? [], onChange: a2, caller: x }), d2 = t.useCallback((e3) => c2((t2 = []) => [...t2, e3]), [c2]), p2 = t.useCallback((e3) => c2((t2 = []) => t2.filter((t3) => t3 !== e3)), [c2]);
    return (0, u.jsx)(A, { scope: e2.__scopeAccordion, value: s2, onItemOpen: d2, onItemClose: p2, children: (0, u.jsx)(_, { scope: e2.__scopeAccordion, collapsible: true, children: (0, u.jsx)(N, { ...l2, ref: r2 }) }) });
  }, "AccordionImplMultiple")), [P, S] = v(x), N = t.forwardRef(g(function(e2, r2) {
    let { __scopeAccordion: o2, disabled: i2, dir: s2, orientation: c2 = "vertical", ...p2 } = e2, f2 = t.useRef(null), x2 = (0, n.useComposedRefs)(f2, r2), w2 = h(o2), v2 = "ltr" === (0, d.useDirection)(s2), y2 = (0, a.composeEventHandlers)(e2.onKeyDown, (e3) => {
      if (!m.includes(e3.key)) return;
      let t2 = e3.target, r3 = w2().filter((e4) => !e4.ref.current?.disabled), o3 = r3.findIndex((e4) => e4.ref.current === t2), n2 = r3.length;
      if (-1 === o3) return;
      e3.preventDefault();
      let a2 = o3, i3 = n2 - 1, l2 = g(() => {
        (a2 = o3 + 1) > i3 && (a2 = 0);
      }, "moveNext"), s3 = g(() => {
        (a2 = o3 - 1) < 0 && (a2 = i3);
      }, "movePrev");
      switch (e3.key) {
        case "Home":
          a2 = 0;
          break;
        case "End":
          a2 = i3;
          break;
        case "ArrowRight":
          "horizontal" === c2 && (v2 ? l2() : s3());
          break;
        case "ArrowDown":
          "vertical" === c2 && l2();
          break;
        case "ArrowLeft":
          "horizontal" === c2 && (v2 ? s3() : l2());
          break;
        case "ArrowUp":
          "vertical" === c2 && s3();
      }
      let d2 = a2 % n2;
      r3[d2].ref.current?.focus();
    });
    return (0, u.jsx)(P, { scope: o2, disabled: i2, direction: s2, orientation: c2, children: (0, u.jsx)(b.Slot, { scope: o2, children: (0, u.jsx)(l.Primitive.div, { ...p2, "data-orientation": c2, ref: x2, onKeyDown: i2 ? void 0 : y2 }) }) });
  }, "AccordionImpl")), T = "AccordionItem", [E, O] = v(T), D = t.forwardRef(g(function(e2, t2) {
    let { __scopeAccordion: r2, value: o2, ...n2 } = e2, a2 = S(T, r2), i2 = M(T, r2), l2 = C(r2), d2 = (0, c.useId)(), p2 = o2 && i2.value.includes(o2) || false, f2 = a2.disabled || e2.disabled;
    return (0, u.jsx)(E, { scope: r2, open: p2, disabled: f2, triggerId: d2, children: (0, u.jsx)(s.Root, { "data-orientation": a2.orientation, "data-state": q(p2), ...l2, ...n2, ref: t2, disabled: f2, open: p2, onOpenChange: (e3) => {
      e3 ? i2.onItemOpen(o2) : i2.onItemClose(o2);
    } }) });
  }, "AccordionItem")), H = t.forwardRef(g(function(e2, t2) {
    let { __scopeAccordion: r2, ...o2 } = e2, n2 = S(x, r2), a2 = O("AccordionHeader", r2);
    return (0, u.jsx)(l.Primitive.h3, { "data-orientation": n2.orientation, "data-state": q(a2.open), "data-disabled": a2.disabled ? "" : void 0, ...o2, ref: t2 });
  }, "AccordionHeader")), K = "AccordionTrigger", B = t.forwardRef(g(function(e2, t2) {
    let { __scopeAccordion: r2, ...o2 } = e2, n2 = S(x, r2), a2 = O(K, r2), i2 = R(K, r2), l2 = C(r2);
    return (0, u.jsx)(b.ItemSlot, { scope: r2, children: (0, u.jsx)(s.Trigger, { "aria-disabled": a2.open && !i2.collapsible || void 0, "data-orientation": n2.orientation, id: a2.triggerId, ...l2, ...o2, ref: t2 }) });
  }, "AccordionTrigger")), U = t.forwardRef(g(function(e2, t2) {
    let { __scopeAccordion: r2, ...o2 } = e2, n2 = S(x, r2), a2 = O("AccordionContent", r2), i2 = C(r2);
    return (0, u.jsx)(s.Content, { role: "region", "aria-labelledby": a2.triggerId, "data-orientation": n2.orientation, ...i2, ...o2, ref: t2, style: { "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", ...e2.style } });
  }, "AccordionContent"));
  function q(e2) {
    return e2 ? "open" : "closed";
  }
  g(q, "getState"), e.s(["Accordion", 0, j, "AccordionContent", 0, U, "AccordionHeader", 0, H, "AccordionItem", 0, D, "AccordionTrigger", 0, B, "Content", 0, U, "Header", 0, H, "Item", 0, D, "Root", 0, j, "Trigger", 0, B, "createAccordionScope", 0, y]);
}, 930469, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(543836), o = e.i(652531), n = e.i(548913), a = e.i(386271), i = e.i(728654), l = e.i(45240), s = e.i(198623), c = e.i(119637), d = e.i(68982);
  try {
    var u = "u" > typeof window ? window : e.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var p = Object.defineProperty, f = (e2, t2) => p(e2, "name", { value: t2, configurable: true }), g = "Collapsible", [x, m] = (0, o.createContextScope)(g), [b, h] = x(g), w = t.forwardRef(f(function(e2, r2) {
    let { __scopeCollapsible: o2, open: a2, defaultOpen: i2, disabled: s2, onOpenChange: u2, ...p2 } = e2, [f2, x2] = (0, n.useControllableState)({ prop: a2, defaultProp: i2 ?? false, onChange: u2, caller: g });
    return (0, d.jsx)(b, { scope: o2, disabled: s2, contentId: (0, c.useId)(), open: f2, onOpenToggle: t.useCallback(() => x2((e3) => !e3), [x2]), children: (0, d.jsx)(l.Primitive.div, { "data-state": A(f2), "data-disabled": s2 ? "" : void 0, ...p2, ref: r2 }) });
  }, "Collapsible")), v = t.forwardRef(f(function(e2, t2) {
    let { __scopeCollapsible: o2, ...n2 } = e2, a2 = h("CollapsibleTrigger", o2);
    return (0, d.jsx)(l.Primitive.button, { type: "button", "aria-controls": a2.open ? a2.contentId : void 0, "aria-expanded": a2.open || false, "data-state": A(a2.open), "data-disabled": a2.disabled ? "" : void 0, disabled: a2.disabled, ...n2, ref: t2, onClick: (0, r.composeEventHandlers)(e2.onClick, a2.onOpenToggle) });
  }, "CollapsibleTrigger")), y = "CollapsibleContent", C = t.forwardRef(f(function(e2, t2) {
    let { forceMount: r2, ...o2 } = e2, n2 = h(y, e2.__scopeCollapsible);
    return (0, d.jsx)(s.Presence, { present: r2 || n2.open, children: ({ present: e3 }) => (0, d.jsx)(j, { ...o2, ref: t2, present: e3 }) });
  }, "CollapsibleContent")), j = t.forwardRef(f(function(e2, r2) {
    let { __scopeCollapsible: o2, present: n2, children: s2, ...c2 } = e2, u2 = h(y, o2), [p2, f2] = t.useState(n2), g2 = t.useRef(null), x2 = (0, i.useComposedRefs)(r2, g2), m2 = t.useRef(0), b2 = m2.current, w2 = t.useRef(0), v2 = w2.current, C2 = u2.open || p2, j2 = t.useRef(C2), M = t.useRef(void 0);
    return t.useEffect(() => {
      let e3 = requestAnimationFrame(() => j2.current = false);
      return () => cancelAnimationFrame(e3);
    }, []), (0, a.useLayoutEffect)(() => {
      let e3 = g2.current;
      if (e3) {
        M.current = M.current || { transitionDuration: e3.style.transitionDuration, animationName: e3.style.animationName }, e3.style.transitionDuration = "0s", e3.style.animationName = "none";
        let t2 = e3.getBoundingClientRect();
        m2.current = t2.height, w2.current = t2.width, j2.current || (e3.style.transitionDuration = M.current.transitionDuration, e3.style.animationName = M.current.animationName), f2(n2);
      }
    }, [u2.open, n2]), (0, d.jsx)(l.Primitive.div, { "data-state": A(u2.open), "data-disabled": u2.disabled ? "" : void 0, id: u2.contentId, hidden: !C2, ...c2, ref: x2, style: { "--radix-collapsible-content-height": b2 ? `${b2}px` : void 0, "--radix-collapsible-content-width": v2 ? `${v2}px` : void 0, ...e2.style }, children: C2 && s2 });
  }, "CollapsibleContentImpl"));
  function A(e2) {
    return e2 ? "open" : "closed";
  }
  f(A, "getState"), e.s(["Content", 0, C, "Root", 0, w, "Trigger", 0, v, "createCollapsibleScope", 0, m]);
}, 284198, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(459451), o = e.i(856757), n = e.i(269916), a = e.i(65228);
  try {
    var i = window;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function l({ question: e2, answer: o2 }) {
    return (0, t.jsxs)(r.Item, { value: e2, className: "-m-4 p-4", children: [(0, t.jsx)(r.Header, { children: (0, t.jsxs)(r.Trigger, { className: "group -mx-2 flex w-[calc(100%+16px)] cursor-pointer justify-between space-x-5 rounded-xl px-2 pt-[7px] pb-[7px] text-left text-lg outline-hidden transition-shadow duration-200 ease-in-out focus-visible:ring-3", children: [(0, t.jsx)("span", { children: e2 }), (0, t.jsx)(a.ChevronDown, { className: "mt-1 shrink-0 transition-transform group-data-open:-rotate-180" })] }) }), (0, t.jsx)(r.Content, { className: "overflow-hidden will-change-[height] data-closed:animate-slideUp data-open:animate-slideDown", children: (0, t.jsx)("div", { className: "pt-[5px] pb-[7px] text-tertiary-foreground", children: o2 }) })] });
  }
  var s = e.i(551360);
  try {
    var c = window;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AccordionClient", 0, function({ directionMobile: e2, directionDesktop: a2, items: i2 }) {
    let [c2, d] = (0, o.useState)(0);
    return (0, t.jsxs)("div", { className: "grid grid-cols-12 gap-x-6 gap-y-10 xl:grid-cols-10", children: [(0, t.jsx)(r.Root, { className: (0, s.cn)({ "-order-1 col-span-full lg:order-1 lg:col-span-6 xl:col-start-7 xl:col-end-11": "reverse" === a2, "col-span-full lg:col-span-6 xl:col-span-4": "row" === a2, "order-0": "reverse" === e2 }), type: "single", defaultValue: i2[0].question, onValueChange: (e3) => {
      d(i2.findIndex((t2) => t2.question === e3));
    }, children: i2.map(({ question: e3, answer: r2 }) => (0, t.jsx)("div", { className: "border-weak-stroke border-t pt-[23px] pb-[21px] last:border-b", children: (0, t.jsx)(l, { question: e3, answer: r2 }) }, e3)) }), (0, t.jsx)("div", { className: (0, s.cn)({ "-order-1 col-span-full lg:col-span-6 xl:col-span-5": "reverse" === a2, "-order-1 lg:order-0": "reverse" === e2, "col-span-full lg:col-span-6 xl:col-start-6 xl:col-end-11": "row" === a2 }), children: (0, t.jsx)(n.AttioStoryblokImage, { className: "rounded-3xl", imageAsset: i2[c2].image }) })] });
  }], 284198);
}, 275001, function(e) {
  e.n(e.i(284198));
}]);
