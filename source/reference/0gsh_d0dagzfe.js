;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "07fa0dcd-cee4-ee1a-3bf4-f28a85925082");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 523237, 322042, 222451, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(880269), n = e.i(424404), a = e.i(599607), o = e.i(441833), i = e.i(579180);
  try {
    var s = "u" > typeof window ? window : e.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let l = t.createContext(void 0);
  function u(e2 = false) {
    let r2 = t.useContext(l);
    if (void 0 === r2 && !e2) throw Error((0, i.default)(16));
    return r2;
  }
  e.s(["CompositeRootContext", 0, l, "useCompositeRootContext", 0, u], 322042);
  try {
    var c = "u" > typeof window ? window : e.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var d = e.i(479995);
  try {
    var f = "u" > typeof window ? window : e.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function p(e2, t2, { detail: r2 = 0 } = {}) {
    e2.dispatchEvent(new ((0, d.ownerWindow)(e2)).PointerEvent("click", { bubbles: true, cancelable: true, composed: true, detail: r2, shiftKey: t2.shiftKey, ctrlKey: t2.ctrlKey, altKey: t2.altKey, metaKey: t2.metaKey }));
  }
  e.s(["dispatchClickWithModifiers", 0, p], 222451);
  try {
    var y = "u" > typeof window ? window : e.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function h(e2) {
    return (0, r.isHTMLElement)(e2) && "BUTTON" === e2.tagName;
  }
  e.s(["useButton", 0, function(e2 = {}) {
    let { disabled: i2 = false, focusableWhenDisabled: s2, tabIndex: l2 = 0, native: c2 = true, composite: d2 } = e2, f2 = t.useRef(null), y2 = u(true), g = d2 ?? void 0 !== y2, { props: m } = (function(e3) {
      let { focusableWhenDisabled: r2, disabled: n2, composite: a2 = false, tabIndex: o2 = 0, isNativeButton: i3 } = e3, s3 = a2 && false !== r2, l3 = a2 && false === r2;
      return { props: t.useMemo(() => {
        let e4 = { onKeyDown(e5) {
          n2 && r2 && "Tab" !== e5.key && e5.preventDefault();
        } };
        return a2 || (e4.tabIndex = o2, !i3 && n2 && (e4.tabIndex = r2 ? o2 : -1)), (i3 && (r2 || s3) || !i3 && n2) && (e4["aria-disabled"] = n2), i3 && (!r2 || l3) && (e4.disabled = n2), e4;
      }, [a2, n2, r2, s3, l3, i3, o2]) };
    })({ focusableWhenDisabled: s2, disabled: i2, composite: g, tabIndex: l2, isNativeButton: c2 }), w = t.useCallback(() => {
      let e3 = f2.current;
      h(e3) && g && i2 && void 0 === m.disabled && e3.disabled && (e3.disabled = false);
    }, [i2, m.disabled, g]);
    return (0, a.useIsoLayoutEffect)(w, [w]), { getButtonProps: t.useCallback((e3 = {}) => {
      let { onClick: t2, onMouseDown: n2, onKeyUp: a2, onKeyDown: s3, onPointerDown: l3, ...u2 } = e3;
      return (0, o.mergeProps)({ onClick(e4) {
        i2 ? e4.preventDefault() : t2?.(e4);
      }, onMouseDown(e4) {
        i2 || n2?.(e4);
      }, onKeyDown(e4) {
        var t3;
        if (i2 || ((0, o.makeEventPreventable)(e4), s3?.(e4), e4.baseUIHandlerPrevented)) return;
        let n3 = e4.target === e4.currentTarget, a3 = e4.currentTarget, l4 = h(a3), u3 = !c2 && (t3 = a3, (0, r.isHTMLElement)(t3) && "A" === t3.tagName && !!t3.href), d3 = n3 && (c2 ? l4 : !u3), f3 = "Enter" === e4.key, y3 = " " === e4.key, m2 = a3.getAttribute("role"), w2 = m2?.startsWith("menuitem") || "option" === m2 || "gridcell" === m2;
        if (n3 && g && y3) {
          if (e4.defaultPrevented && w2) return;
          e4.preventDefault(), (!c2 || l4) && (e4.preventBaseUIHandler(), p(a3, e4));
          return;
        }
        if (!d3 || c2 || !y3 && !f3) {
          n3 && u3 && y3 && e4.preventDefault();
          return;
        }
        !e4.defaultPrevented && (e4.preventDefault(), f3 && (e4.preventBaseUIHandler(), p(a3, e4)));
      }, onKeyUp(e4) {
        i2 || (((0, o.makeEventPreventable)(e4), a2?.(e4), e4.target === e4.currentTarget && c2 && g && h(e4.currentTarget) && " " === e4.key) ? e4.preventDefault() : !e4.baseUIHandlerPrevented && (e4.target !== e4.currentTarget || c2 || g || e4.defaultPrevented || " " !== e4.key || (e4.preventBaseUIHandler(), p(e4.currentTarget, e4))));
      }, onPointerDown(e4) {
        i2 ? e4.preventDefault() : l3?.(e4);
      } }, c2 ? { type: "button" } : { role: "button" }, m, u2);
    }, [i2, m, g, c2]), buttonRef: (0, n.useStableCallback)((e3) => {
      f2.current = e3, w();
    }) };
  }], 523237);
}, 393125, 35555, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(652531), n = e.i(728654), a = e.i(603642), o = e.i(68982);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var s = Object.defineProperty, l = (e2, t2) => s(e2, "name", { value: t2, configurable: true });
  function u(e2) {
    let i2 = e2 + "CollectionProvider", [s2, u2] = (0, r.createContextScope)(i2), [c2, d2] = s2(i2, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), f2 = l((e3) => {
      let { scope: r2, children: n2 } = e3, a2 = t.useRef(null), i3 = t.useRef(/* @__PURE__ */ new Map()).current;
      return (0, o.jsx)(c2, { scope: r2, itemMap: i3, collectionRef: a2, children: n2 });
    }, "CollectionProvider");
    f2.displayName = i2;
    let p2 = e2 + "CollectionSlot", y2 = (0, a.createSlot)(p2), h2 = t.forwardRef((e3, t2) => {
      let { scope: r2, children: a2 } = e3, i3 = d2(p2, r2), s3 = (0, n.useComposedRefs)(t2, i3.collectionRef);
      return (0, o.jsx)(y2, { ref: s3, children: a2 });
    });
    h2.displayName = p2;
    let g2 = e2 + "CollectionItemSlot", m2 = "data-radix-collection-item", w2 = (0, a.createSlot)(g2), v2 = t.forwardRef((e3, r2) => {
      let { scope: a2, children: i3, ...s3 } = e3, l2 = t.useRef(null), u3 = (0, n.useComposedRefs)(r2, l2), c3 = d2(g2, a2);
      return t.useEffect(() => (c3.itemMap.set(l2, { ref: l2, ...s3 }), () => void c3.itemMap.delete(l2))), (0, o.jsx)(w2, { ...{ [m2]: "" }, ref: u3, children: i3 });
    });
    function M2(r2) {
      let n2 = d2(e2 + "CollectionConsumer", r2);
      return t.useCallback(() => {
        let e3 = n2.collectionRef.current;
        if (!e3) return [];
        let t2 = Array.from(e3.querySelectorAll(`[${m2}]`));
        return Array.from(n2.itemMap.values()).sort((e4, r3) => t2.indexOf(e4.ref.current) - t2.indexOf(r3.ref.current));
      }, [n2.collectionRef, n2.itemMap]);
    }
    return v2.displayName = g2, l(M2, "useCollection"), [{ Provider: f2, Slot: h2, ItemSlot: v2 }, M2, u2];
  }
  l(u, "createCollection");
  var c = /* @__PURE__ */ new WeakMap(), d = class e2 extends Map {
    static {
      l(this, "OrderedDict");
    }
    #e;
    constructor(e3) {
      super(e3), this.#e = [...super.keys()], c.set(this, true);
    }
    set(e3, t2) {
      return c.get(this) && (this.has(e3) ? this.#e[this.#e.indexOf(e3)] = e3 : this.#e.push(e3)), super.set(e3, t2), this;
    }
    insert(e3, t2, r2) {
      let n2, a2 = this.has(t2), o2 = this.#e.length, i2 = y(e3), s2 = i2 >= 0 ? i2 : o2 + i2, l2 = s2 < 0 || s2 >= o2 ? -1 : s2;
      if (l2 === this.size || a2 && l2 === this.size - 1 || -1 === l2) return this.set(t2, r2), this;
      let u2 = this.size + +!a2;
      i2 < 0 && s2++;
      let c2 = [...this.#e], d2 = false;
      for (let e4 = s2; e4 < u2; e4++) if (s2 === e4) {
        let o3 = c2[e4];
        c2[e4] === t2 && (o3 = c2[e4 + 1]), a2 && this.delete(t2), n2 = this.get(o3), this.set(t2, r2);
      } else {
        d2 || c2[e4 - 1] !== t2 || (d2 = true);
        let r3 = c2[d2 ? e4 : e4 - 1], a3 = n2;
        n2 = this.get(r3), this.delete(r3), this.set(r3, a3);
      }
      return this;
    }
    with(t2, r2, n2) {
      let a2 = new e2(this);
      return a2.insert(t2, r2, n2), a2;
    }
    before(e3) {
      let t2 = this.#e.indexOf(e3) - 1;
      if (!(t2 < 0)) return this.entryAt(t2);
    }
    setBefore(e3, t2, r2) {
      let n2 = this.#e.indexOf(e3);
      return -1 === n2 ? this : this.insert(n2, t2, r2);
    }
    after(e3) {
      let t2 = this.#e.indexOf(e3);
      if (-1 !== (t2 = -1 === t2 || t2 === this.size - 1 ? -1 : t2 + 1)) return this.entryAt(t2);
    }
    setAfter(e3, t2, r2) {
      let n2 = this.#e.indexOf(e3);
      return -1 === n2 ? this : this.insert(n2 + 1, t2, r2);
    }
    first() {
      return this.entryAt(0);
    }
    last() {
      return this.entryAt(-1);
    }
    clear() {
      return this.#e = [], super.clear();
    }
    delete(e3) {
      let t2 = super.delete(e3);
      return t2 && this.#e.splice(this.#e.indexOf(e3), 1), t2;
    }
    deleteAt(e3) {
      let t2 = this.keyAt(e3);
      return void 0 !== t2 && this.delete(t2);
    }
    at(e3) {
      let t2 = f(this.#e, e3);
      if (void 0 !== t2) return this.get(t2);
    }
    entryAt(e3) {
      let t2 = f(this.#e, e3);
      if (void 0 !== t2) return [t2, this.get(t2)];
    }
    indexOf(e3) {
      return this.#e.indexOf(e3);
    }
    keyAt(e3) {
      return f(this.#e, e3);
    }
    from(e3, t2) {
      let r2 = this.indexOf(e3);
      if (-1 === r2) return;
      let n2 = r2 + t2;
      return n2 < 0 && (n2 = 0), n2 >= this.size && (n2 = this.size - 1), this.at(n2);
    }
    keyFrom(e3, t2) {
      let r2 = this.indexOf(e3);
      if (-1 === r2) return;
      let n2 = r2 + t2;
      return n2 < 0 && (n2 = 0), n2 >= this.size && (n2 = this.size - 1), this.keyAt(n2);
    }
    find(e3, t2) {
      let r2 = 0;
      for (let n2 of this) {
        if (Reflect.apply(e3, t2, [n2, r2, this])) return n2;
        r2++;
      }
    }
    findIndex(e3, t2) {
      let r2 = 0;
      for (let n2 of this) {
        if (Reflect.apply(e3, t2, [n2, r2, this])) return r2;
        r2++;
      }
      return -1;
    }
    filter(t2, r2) {
      let n2 = [], a2 = 0;
      for (let e3 of this) Reflect.apply(t2, r2, [e3, a2, this]) && n2.push(e3), a2++;
      return new e2(n2);
    }
    map(t2, r2) {
      let n2 = [], a2 = 0;
      for (let e3 of this) n2.push([e3[0], Reflect.apply(t2, r2, [e3, a2, this])]), a2++;
      return new e2(n2);
    }
    reduce(...e3) {
      let [t2, r2] = e3, n2 = 0, a2 = r2 ?? this.at(0);
      for (let r3 of this) a2 = 0 === n2 && 1 === e3.length ? r3 : Reflect.apply(t2, this, [a2, r3, n2, this]), n2++;
      return a2;
    }
    reduceRight(...e3) {
      let [t2, r2] = e3, n2 = r2 ?? this.at(-1);
      for (let r3 = this.size - 1; r3 >= 0; r3--) {
        let a2 = this.at(r3);
        n2 = r3 === this.size - 1 && 1 === e3.length ? a2 : Reflect.apply(t2, this, [n2, a2, r3, this]);
      }
      return n2;
    }
    toSorted(t2) {
      return new e2([...this.entries()].sort(t2));
    }
    toReversed() {
      let t2 = new e2();
      for (let e3 = this.size - 1; e3 >= 0; e3--) {
        let r2 = this.keyAt(e3), n2 = this.get(r2);
        t2.set(r2, n2);
      }
      return t2;
    }
    toSpliced(...t2) {
      let r2 = [...this.entries()];
      return r2.splice(...t2), new e2(r2);
    }
    slice(t2, r2) {
      let n2 = new e2(), a2 = this.size - 1;
      if (void 0 === t2) return n2;
      t2 < 0 && (t2 += this.size), void 0 !== r2 && r2 > 0 && (a2 = r2 - 1);
      for (let e3 = t2; e3 <= a2; e3++) {
        let t3 = this.keyAt(e3), r3 = this.get(t3);
        n2.set(t3, r3);
      }
      return n2;
    }
    every(e3, t2) {
      let r2 = 0;
      for (let n2 of this) {
        if (!Reflect.apply(e3, t2, [n2, r2, this])) return false;
        r2++;
      }
      return true;
    }
    some(e3, t2) {
      let r2 = 0;
      for (let n2 of this) {
        if (Reflect.apply(e3, t2, [n2, r2, this])) return true;
        r2++;
      }
      return false;
    }
  };
  function f(e2, t2) {
    if ("at" in Array.prototype) return Array.prototype.at.call(e2, t2);
    let r2 = p(e2, t2);
    return -1 === r2 ? void 0 : e2[r2];
  }
  function p(e2, t2) {
    let r2 = e2.length, n2 = y(t2), a2 = n2 >= 0 ? n2 : r2 + n2;
    return a2 < 0 || a2 >= r2 ? -1 : a2;
  }
  function y(e2) {
    return e2 != e2 || 0 === e2 ? 0 : Math.trunc(e2);
  }
  function h(e2, t2) {
    if (e2 === t2) return true;
    if ("object" != typeof e2 || "object" != typeof t2 || null == e2 || null == t2) return false;
    let r2 = Object.keys(e2), n2 = Object.keys(t2);
    if (r2.length !== n2.length) return false;
    for (let n3 of r2) if (!Object.prototype.hasOwnProperty.call(t2, n3) || e2[n3] !== t2[n3]) return false;
    return true;
  }
  function g(e2, t2) {
    return !!(t2.compareDocumentPosition(e2) & Node.DOCUMENT_POSITION_PRECEDING);
  }
  function m(e2, t2) {
    return e2[1].element && t2[1].element ? g(e2[1].element, t2[1].element) ? -1 : 1 : 0;
  }
  function w(e2) {
    return new MutationObserver((t2) => {
      for (let r2 of t2) if ("childList" === r2.type) return void e2();
    });
  }
  l(f, "at"), l(p, "toSafeIndex"), l(y, "toSafeInteger"), l(function(e2) {
    let i2 = e2 + "CollectionProvider", [s2, u2] = (0, r.createContextScope)(i2), [c2, f2] = s2(i2, { collectionElement: null, collectionRef: { current: null }, collectionRefObject: { current: null }, itemMap: new d(), setItemMap: l(() => void 0, "setItemMap") }), p2 = l(({ state: e3, ...t2 }) => e3 ? (0, o.jsx)(g2, { ...t2, state: e3 }) : (0, o.jsx)(y2, { ...t2 }), "CollectionProvider");
    p2.displayName = i2;
    let y2 = l((e3) => {
      let t2 = E();
      return (0, o.jsx)(g2, { ...e3, state: t2 });
    }, "CollectionInit");
    y2.displayName = i2 + "Init";
    let g2 = l((e3) => {
      let { scope: r2, children: a2, state: i3 } = e3, s3 = t.useRef(null), [l2, u3] = t.useState(null), d2 = (0, n.useComposedRefs)(s3, u3), [f3, p3] = i3;
      return t.useEffect(() => {
        if (!l2) return;
        let e4 = w(() => {
        });
        return e4.observe(l2, { childList: true, subtree: true }), () => {
          e4.disconnect();
        };
      }, [l2]), (0, o.jsx)(c2, { scope: r2, itemMap: f3, setItemMap: p3, collectionRef: d2, collectionRefObject: s3, collectionElement: l2, children: a2 });
    }, "CollectionProviderImpl");
    g2.displayName = i2 + "Impl";
    let v2 = e2 + "CollectionSlot", M2 = (0, a.createSlot)(v2), b2 = t.forwardRef((e3, t2) => {
      let { scope: r2, children: a2 } = e3, i3 = f2(v2, r2), s3 = (0, n.useComposedRefs)(t2, i3.collectionRef);
      return (0, o.jsx)(M2, { ref: s3, children: a2 });
    });
    b2.displayName = v2;
    let _2 = e2 + "CollectionItemSlot", x = (0, a.createSlot)(_2), k = t.forwardRef((e3, r2) => {
      let { scope: a2, children: i3, ...s3 } = e3, l2 = t.useRef(null), [u3, c3] = t.useState(null), p3 = (0, n.useComposedRefs)(r2, l2, c3), { setItemMap: y3 } = f2(_2, a2), g3 = t.useRef(s3);
      h(g3.current, s3) || (g3.current = s3);
      let w2 = g3.current;
      return t.useEffect(() => (y3((e4) => u3 ? e4.has(u3) ? e4.set(u3, { ...w2, element: u3 }).toSorted(m) : (e4.set(u3, { ...w2, element: u3 }), e4.toSorted(m)) : e4), () => {
        y3((e4) => u3 && e4.has(u3) ? (e4.delete(u3), new d(e4)) : e4);
      }), [u3, w2, y3]), (0, o.jsx)(x, { "data-radix-collection-item": "", ref: p3, children: i3 });
    });
    function E() {
      return t.useState(new d());
    }
    function j(t2) {
      let { itemMap: r2 } = f2(e2 + "CollectionConsumer", t2);
      return r2;
    }
    return k.displayName = _2, l(E, "useInitCollection"), l(j, "useCollection"), [{ Provider: p2, Slot: b2, ItemSlot: k }, { createCollectionScope: u2, useCollection: j, useInitCollection: E }];
  }, "createCollection"), l(h, "shallowEqual"), l(g, "isElementPreceding"), l(m, "sortByDocumentPosition"), l(w, "getChildListObserver"), e.s(["createCollection", 0, u], 393125);
  try {
    var v = "u" > typeof window ? window : e.g;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var M = Object.defineProperty, b = t.createContext(void 0);
  function _(e2) {
    let r2 = t.useContext(b);
    return e2 || r2 || "ltr";
  }
  M(_, "name", { value: "useDirection", configurable: true }), e.s(["useDirection", 0, _], 35555);
}, 483951, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(712066), n = e.i(278928), a = e.i(45240), o = e.i(68982);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var s = Object.defineProperty, l = t.forwardRef(s(function(e2, t2) {
    let { children: r2, width: n2 = 10, height: i2 = 5, ...s2 } = e2;
    return (0, o.jsx)(a.Primitive.svg, { ...s2, ref: t2, width: n2, height: i2, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e2.asChild ? r2 : (0, o.jsx)("polygon", { points: "0,0 30,0 15,10" }) });
  }, "name", { value: "Arrow", configurable: true })), u = e.i(728654), c = e.i(652531), d = e.i(717979), f = e.i(386271);
  try {
    var p = "u" > typeof window ? window : e.g;
    p._sentryModuleMetadata = p._sentryModuleMetadata || {}, p._sentryModuleMetadata[new p.Error().stack] = Object.assign({}, p._sentryModuleMetadata[new p.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function y(e2) {
    let [r2, n2] = t.useState(void 0);
    return (0, f.useLayoutEffect)(() => {
      if (e2) {
        n2({ width: e2.offsetWidth, height: e2.offsetHeight });
        let t2 = new ResizeObserver((t3) => {
          let r3, a2;
          if (!Array.isArray(t3) || !t3.length) return;
          let o2 = t3[0];
          if ("borderBoxSize" in o2) {
            let e3 = o2.borderBoxSize, t4 = Array.isArray(e3) ? e3[0] : e3;
            r3 = t4.inlineSize, a2 = t4.blockSize;
          } else r3 = e2.offsetWidth, a2 = e2.offsetHeight;
          n2({ width: r3, height: a2 });
        });
        return t2.observe(e2, { box: "border-box" }), () => t2.unobserve(e2);
      }
      n2(void 0);
    }, [e2]), r2;
  }
  (0, Object.defineProperty)(y, "name", { value: "useSize", configurable: true });
  try {
    var h = "u" > typeof window ? window : e.g;
    h._sentryModuleMetadata = h._sentryModuleMetadata || {}, h._sentryModuleMetadata[new h.Error().stack] = Object.assign({}, h._sentryModuleMetadata[new h.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var g = Object.defineProperty, m = (e2, t2) => g(e2, "name", { value: t2, configurable: true }), w = "Popper", [v, M] = (0, c.createContextScope)(w), [b, _] = v(w), x = m((e2) => {
    let { __scopePopper: r2, children: n2 } = e2, [a2, i2] = t.useState(null), [s2, l2] = t.useState(void 0);
    return (0, o.jsx)(b, { scope: r2, anchor: a2, onAnchorChange: i2, placementState: s2, setPlacementState: l2, children: n2 });
  }, "Popper"), k = t.forwardRef(m(function(e2, r2) {
    let { __scopePopper: n2, virtualRef: i2, ...s2 } = e2, l2 = _("PopperAnchor", n2), c2 = t.useRef(null), d2 = l2.onAnchorChange, f2 = t.useCallback((e3) => {
      c2.current = e3, e3 && d2(e3);
    }, [d2]), p2 = (0, u.useComposedRefs)(r2, f2), y2 = t.useRef(null);
    t.useEffect(() => {
      if (!i2) return;
      let e3 = y2.current;
      y2.current = i2.current, e3 !== y2.current && d2(y2.current);
    });
    let h2 = l2.placementState && I(l2.placementState), g2 = h2?.[0], m2 = h2?.[1];
    return i2 ? null : (0, o.jsx)(a.Primitive.div, { "data-radix-popper-side": g2, "data-radix-popper-align": m2, ...s2, ref: p2 });
  }, "PopperAnchor")), E = "PopperContent", [j, A] = v(E), C = t.forwardRef(m(function(e2, i2) {
    let { __scopePopper: s2, side: l2 = "bottom", sideOffset: c2 = 0, align: p2 = "center", alignOffset: h2 = 0, arrowPadding: g2 = 0, avoidCollisions: w2 = true, collisionBoundary: v2 = [], collisionPadding: M2 = 0, sticky: b2 = "partial", hideWhenDetached: x2 = false, updatePositionStrategy: k2 = "optimized", onPlaced: A2, ...C2 } = e2, O2 = _(E, s2), [P2, L] = t.useState(null), R = (0, u.useComposedRefs)(i2, L), [N, T] = t.useState(null), q = y(N), z = q?.width ?? 0, K = q?.height ?? 0, U = "number" == typeof M2 ? M2 : { top: 0, right: 0, bottom: 0, left: 0, ...M2 }, D = Array.isArray(v2) ? v2 : [v2], $ = D.length > 0, W = { padding: U, boundary: D.filter(S), altBoundary: $ }, { refs: F, floatingStyles: H, placement: V, isPositioned: Y, middlewareData: X } = (0, r.useFloating)({ strategy: "fixed", placement: l2 + ("center" !== p2 ? "-" + p2 : ""), whileElementsMounted: m((...e3) => (0, n.autoUpdate)(...e3, { animationFrame: "always" === k2 }), "whileElementsMounted"), elements: { reference: O2.anchor }, middleware: [(0, r.offset)({ mainAxis: c2 + K, alignmentAxis: h2 }), w2 && (0, r.shift)({ mainAxis: true, crossAxis: false, limiter: "partial" === b2 ? (0, r.limitShift)() : void 0, ...W }), w2 && (0, r.flip)({ ...W }), (0, r.size)({ ...W, apply: m(({ elements: e3, rects: t2, availableWidth: r2, availableHeight: n2 }) => {
      let { width: a2, height: o2 } = t2.reference, i3 = e3.floating.style;
      i3.setProperty("--radix-popper-available-width", `${r2}px`), i3.setProperty("--radix-popper-available-height", `${n2}px`), i3.setProperty("--radix-popper-anchor-width", `${a2}px`), i3.setProperty("--radix-popper-anchor-height", `${o2}px`);
    }, "apply") }), N && (0, r.arrow)({ element: N, padding: g2 }), B({ arrowWidth: z, arrowHeight: K }), x2 && (0, r.hide)({ strategy: "referenceHidden", ...W, boundary: $ ? W.boundary : void 0 })] }), J = O2.setPlacementState;
    (0, f.useLayoutEffect)(() => (J(V), () => {
      J(void 0);
    }), [V, J]);
    let [Z, G] = I(V), Q = (0, d.useCallbackRef)(A2);
    (0, f.useLayoutEffect)(() => {
      Y && Q?.();
    }, [Y, Q]);
    let ee = X.arrow?.x, et = X.arrow?.y, er = X.arrow?.centerOffset !== 0, [en, ea] = t.useState();
    return (0, f.useLayoutEffect)(() => {
      P2 && ea(window.getComputedStyle(P2).zIndex);
    }, [P2]), (0, o.jsx)("div", { ref: F.setFloating, "data-radix-popper-content-wrapper": "", style: { ...H, transform: Y ? H.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: en, "--radix-popper-transform-origin": [X.transformOrigin?.x, X.transformOrigin?.y].join(" "), ...X.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" } }, dir: e2.dir, children: (0, o.jsx)(j, { scope: s2, placedSide: Z, placedAlign: G, onArrowChange: T, arrowX: ee, arrowY: et, shouldHideArrow: er, children: (0, o.jsx)(a.Primitive.div, { "data-side": Z, "data-align": G, ...C2, ref: R, style: { ...C2.style, animation: Y ? C2.style?.animation : "none" } }) }) });
  }, "PopperContent")), O = { top: "bottom", right: "left", bottom: "top", left: "right" }, P = t.forwardRef(m(function(e2, t2) {
    let { __scopePopper: r2, ...n2 } = e2, a2 = A("PopperArrow", r2), i2 = O[a2.placedSide];
    return (0, o.jsx)("span", { ref: a2.onArrowChange, style: { position: "absolute", left: a2.arrowX, top: a2.arrowY, [i2]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[a2.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[a2.placedSide], visibility: a2.shouldHideArrow ? "hidden" : void 0 }, children: (0, o.jsx)(l, { ...n2, ref: t2, style: { ...n2.style, display: "block" } }) });
  }, "PopperArrow"));
  function S(e2) {
    return null !== e2;
  }
  m(S, "isNotNull");
  var B = m((e2) => ({ name: "transformOrigin", options: e2, fn(t2) {
    let { placement: r2, rects: n2, middlewareData: a2 } = t2, o2 = a2.arrow?.centerOffset !== 0, i2 = o2 ? 0 : e2.arrowWidth, s2 = o2 ? 0 : e2.arrowHeight, [l2, u2] = I(r2), c2 = { start: "0%", center: "50%", end: "100%" }[u2], d2 = (a2.arrow?.x ?? 0) + i2 / 2, f2 = (a2.arrow?.y ?? 0) + s2 / 2, p2 = "", y2 = "";
    return "bottom" === l2 ? (p2 = o2 ? c2 : `${d2}px`, y2 = `${-s2}px`) : "top" === l2 ? (p2 = o2 ? c2 : `${d2}px`, y2 = `${n2.floating.height + s2}px`) : "right" === l2 ? (p2 = `${-s2}px`, y2 = o2 ? c2 : `${f2}px`) : "left" === l2 && (p2 = `${n2.floating.width + s2}px`, y2 = o2 ? c2 : `${f2}px`), { data: { x: p2, y: y2 } };
  } }), "transformOrigin");
  function I(e2) {
    let [t2, r2 = "center"] = e2.split("-");
    return [t2, r2];
  }
  m(I, "getSideAndAlignFromPlacement"), e.s(["Anchor", 0, k, "Arrow", 0, P, "Content", 0, C, "Root", 0, x, "createPopperScope", 0, M], 483951);
}, 603642, 728654, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = Object.defineProperty, a = (e2, t2) => n(e2, "name", { value: t2, configurable: true });
  function o(e2, t2) {
    if ("function" == typeof e2) return e2(t2);
    null != e2 && (e2.current = t2);
  }
  function i(...e2) {
    return (t2) => {
      let r2 = false, n2 = e2.map((e3) => {
        let n3 = o(e3, t2);
        return r2 || "function" != typeof n3 || (r2 = true), n3;
      });
      if (r2) return () => {
        for (let t3 = 0; t3 < n2.length; t3++) {
          let r3 = n2[t3];
          "function" == typeof r3 ? r3() : o(e2[t3], null);
        }
      };
    };
  }
  function s(...e2) {
    return t.useCallback(i(...e2), e2);
  }
  a(o, "setRef"), a(i, "composeRefs"), a(s, "useComposedRefs"), e.s(["useComposedRefs", 0, s], 728654);
  try {
    var l = "u" > typeof window ? window : e.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var u = Object.defineProperty, c = (e2, t2) => u(e2, "name", { value: t2, configurable: true });
  function d(e2) {
    let r2 = t.forwardRef((r3, n2) => {
      let { children: a2, ...o2 } = r3, i2 = null, l2 = false, u2 = [];
      M(a2) && "function" == typeof k && (a2 = k(a2._payload)), t.Children.forEach(a2, (e3) => {
        if (w(e3)) {
          l2 = true;
          let t2 = "child" in e3.props ? e3.props.child : e3.props.children;
          M(t2) && "function" == typeof k && (t2 = k(t2._payload)), i2 = h(e3, t2), u2.push(i2?.props?.children);
        } else u2.push(e3);
      }), i2 ? i2 = t.cloneElement(i2, void 0, u2) : !l2 && 1 === t.Children.count(a2) && t.isValidElement(a2) && (i2 = a2);
      let c2 = i2 ? m(i2) : void 0, d2 = s(n2, c2);
      if (!i2) {
        if (a2 || 0 === a2) throw Error(l2 ? x(e2) : _(e2));
        return a2;
      }
      let f2 = g(o2, i2.props ?? {});
      return i2.type !== t.Fragment && (f2.ref = n2 ? d2 : c2), t.cloneElement(i2, f2);
    });
    return r2.displayName = `${e2}.Slot`, r2;
  }
  c(d, "createSlot");
  var f = d("Slot"), p = /* @__PURE__ */ Symbol.for("radix.slottable");
  function y(e2) {
    let t2 = c((e3) => "child" in e3 ? e3.children(e3.child) : e3.children, "Slottable");
    return t2.displayName = `${e2}.Slottable`, t2.__radixId = p, t2;
  }
  c(y, "createSlottable");
  var h = c((e2, r2) => {
    if ("child" in e2.props) {
      let r3 = e2.props.child;
      return t.isValidElement(r3) ? t.cloneElement(r3, void 0, e2.props.children(r3.props.children)) : null;
    }
    return t.isValidElement(r2) ? r2 : null;
  }, "getSlottableElementFromSlottable");
  function g(e2, t2) {
    let r2 = { ...t2 };
    for (let n2 in t2) {
      let a2 = e2[n2], o2 = t2[n2];
      /^on[A-Z]/.test(n2) ? a2 && o2 ? r2[n2] = (...e3) => {
        let t3 = o2(...e3);
        return a2(...e3), t3;
      } : a2 && (r2[n2] = a2) : "style" === n2 ? r2[n2] = { ...a2, ...o2 } : "className" === n2 && (r2[n2] = [a2, o2].filter(Boolean).join(" "));
    }
    return { ...e2, ...r2 };
  }
  function m(e2) {
    let t2 = Object.getOwnPropertyDescriptor(e2.props, "ref")?.get, r2 = t2 && "isReactWarning" in t2 && t2.isReactWarning;
    return r2 ? e2.ref : (r2 = (t2 = Object.getOwnPropertyDescriptor(e2, "ref")?.get) && "isReactWarning" in t2 && t2.isReactWarning) ? e2.props.ref : e2.props.ref || e2.ref;
  }
  function w(e2) {
    return t.isValidElement(e2) && "function" == typeof e2.type && "__radixId" in e2.type && e2.type.__radixId === p;
  }
  c(g, "mergeProps"), c(m, "getElementRef"), c(w, "isSlottable");
  var v = /* @__PURE__ */ Symbol.for("react.lazy");
  function M(e2) {
    return null != e2 && "object" == typeof e2 && "$$typeof" in e2 && e2.$$typeof === v && "_payload" in e2 && b(e2._payload);
  }
  function b(e2) {
    return "object" == typeof e2 && null !== e2 && "then" in e2;
  }
  c(M, "isLazyComponent"), c(b, "isPromiseLike");
  var _ = c((e2) => `${e2} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), x = c((e2) => `${e2} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), k = t[" use ".trim().toString()];
  e.s(["Slot", 0, f, "createSlot", 0, d, "createSlottable", 0, y], 603642);
}, 360457, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(45240), n = e.i(68982);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var o = Object.defineProperty, i = Object.freeze({ position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal" }), s = t.forwardRef(o(function(e2, t2) {
    return (0, n.jsx)(r.Primitive.span, { ...e2, ref: t2, style: { ...i, ...e2.style } });
  }, "name", { value: "VisuallyHidden", configurable: true }));
  e.s(["Root", 0, s, "VISUALLY_HIDDEN_STYLES", 0, i, "VisuallyHidden", 0, s]);
}, 83301, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757), n = e.i(256192), a = e.i(753942), o = e.i(842070), i = e.i(134174);
  try {
    var s = "u" > typeof window ? window : e.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["MotionConfig", 0, function({ children: e2, isValidProp: s2, ...l }) {
    s2 && (0, o.loadExternalIsValidProp)(s2);
    let u = (0, r.useContext)(a.MotionConfigContext);
    (l = { ...u, ...l }).transition = (0, n.resolveTransition)(l.transition, u.transition), l.isStatic = (0, i.useConstant)(() => l.isStatic);
    let c = (0, r.useMemo)(() => l, [JSON.stringify(l.transition), l.transformPagePoint, l.reducedMotion, l.skipAnimations]);
    return (0, t.jsx)(a.MotionConfigContext.Provider, { value: c, children: e2 });
  }]);
}, 549174, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(427772);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let a = { some: 0, all: 1 };
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useInView", 0, function(e2, { root: n2, margin: o2, amount: i, once: s = false, initial: l = false } = {}) {
    let [u, c] = (0, t.useState)(l);
    return (0, t.useEffect)(() => {
      if (!e2.current || s && u) return;
      let t2 = { root: n2 && n2.current || void 0, margin: o2, amount: i };
      return (function(e3, t3, { root: n3, margin: o3, amount: i2 = "some" } = {}) {
        let s2 = (0, r.resolveElements)(e3), l2 = /* @__PURE__ */ new WeakMap(), u2 = new IntersectionObserver((e4) => {
          e4.forEach((e5) => {
            let r2 = l2.get(e5.target);
            if (!!r2 !== e5.isIntersecting) if (e5.isIntersecting) {
              let r3 = t3(e5.target, e5);
              "function" == typeof r3 ? l2.set(e5.target, r3) : u2.unobserve(e5.target);
            } else "function" == typeof r2 && (r2(e5), l2.delete(e5.target));
          });
        }, { root: n3, rootMargin: o3, threshold: "number" == typeof i2 ? i2 : a[i2] });
        return s2.forEach((e4) => u2.observe(e4)), () => u2.disconnect();
      })(e2.current, () => (c(true), s ? void 0 : () => c(false)), t2);
    }, [n2, e2, o2, s, i]), u;
  }], 549174);
}, 46946, (e) => {
  "use strict";
  var t = e.i(651692), r = e.i(702915), n = e.i(26809), a = e.i(856757), o = e.i(470919), i = e.i(967682);
  try {
    var s = "u" > typeof window ? window : e.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function l(e2, t2) {
    let r2, n2 = () => {
      let { currentTime: n3 } = t2, a2 = (null === n3 ? 0 : n3.value) / 100;
      r2 !== a2 && e2(a2), r2 = a2;
    };
    return i.frame.preUpdate(n2, true), () => (0, i.cancelFrame)(n2);
  }
  try {
    var u = "u" > typeof window ? window : e.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function c(e2) {
    return !("u" < typeof window) && (e2 ? (0, t.supportsViewTimeline)() : (0, t.supportsScrollTimeline)());
  }
  var d = e.i(460208), f = e.i(241058), p = e.i(921692);
  try {
    var y = "u" > typeof window ? window : e.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let h = () => ({ current: 0, offset: [], progress: 0, scrollLength: 0, targetOffset: 0, targetLength: 0, containerLength: 0, velocity: 0 }), g = { x: { length: "Width", position: "Left" }, y: { length: "Height", position: "Top" } };
  function m(e2, t2, r2, n2) {
    let a2 = r2[t2], { length: o2, position: i2 } = g[t2], s2 = a2.current, l2 = r2.time;
    a2.current = Math.abs(e2[`scroll${i2}`]), a2.scrollLength = e2[`scroll${o2}`] - e2[`client${o2}`], a2.offset.length = 0, a2.offset[0] = 0, a2.offset[1] = a2.scrollLength, a2.progress = (0, f.progress)(0, a2.scrollLength, a2.current);
    let u2 = n2 - l2;
    a2.velocity = u2 > 50 ? 0 : (0, p.velocityPerSecond)(a2.current - s2, u2);
  }
  var w = e.i(498920), v = e.i(805639), M = e.i(493858), b = e.i(250438);
  try {
    var _ = "u" > typeof window ? window : e.g;
    _._sentryModuleMetadata = _._sentryModuleMetadata || {}, _._sentryModuleMetadata[new _.Error().stack] = Object.assign({}, _._sentryModuleMetadata[new _.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var x = "u" > typeof window ? window : e.g;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let k = { start: 0, center: 0.5, end: 1 };
  function E(e2, t2, r2 = 0) {
    let n2 = 0;
    if (e2 in k && (e2 = k[e2]), "string" == typeof e2) {
      let t3 = parseFloat(e2);
      e2.endsWith("px") ? n2 = t3 : e2.endsWith("%") ? e2 = t3 / 100 : e2.endsWith("vw") ? n2 = t3 / 100 * document.documentElement.clientWidth : e2.endsWith("vh") ? n2 = t3 / 100 * document.documentElement.clientHeight : e2 = t3;
    }
    return "number" == typeof e2 && (n2 = t2 * e2), r2 + n2;
  }
  try {
    var j = "u" > typeof window ? window : e.g;
    j._sentryModuleMetadata = j._sentryModuleMetadata || {}, j._sentryModuleMetadata[new j.Error().stack] = Object.assign({}, j._sentryModuleMetadata[new j.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let A = [0, 0];
  try {
    var C = "u" > typeof window ? window : e.g;
    C._sentryModuleMetadata = C._sentryModuleMetadata || {}, C._sentryModuleMetadata[new C.Error().stack] = Object.assign({}, C._sentryModuleMetadata[new C.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let O = [[0, 0], [1, 1]];
  try {
    var P = "u" > typeof window ? window : e.g;
    P._sentryModuleMetadata = P._sentryModuleMetadata || {}, P._sentryModuleMetadata[new P.Error().stack] = Object.assign({}, P._sentryModuleMetadata[new P.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let S = { x: 0, y: 0 };
  try {
    var B = "u" > typeof window ? window : e.g;
    B._sentryModuleMetadata = B._sentryModuleMetadata || {}, B._sentryModuleMetadata[new B.Error().stack] = Object.assign({}, B._sentryModuleMetadata[new B.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var I = "u" > typeof window ? window : e.g;
    I._sentryModuleMetadata = I._sentryModuleMetadata || {}, I._sentryModuleMetadata[new I.Error().stack] = Object.assign({}, I._sentryModuleMetadata[new I.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let L = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap(), z = (e2) => e2 === document.scrollingElement ? window : e2;
  function K(e2, { container: t2 = document.scrollingElement, trackContentSize: r2 = false, ...n2 } = {}) {
    if (!t2) return o.noop;
    let a2 = N.get(t2);
    a2 || (a2 = /* @__PURE__ */ new Set(), N.set(t2, a2));
    let s2 = /* @__PURE__ */ (function(e3, t3, r3, n3 = {}) {
      return { measure: (t4) => {
        !(function(e4, t5 = e4, r4) {
          if (r4.x.targetOffset = 0, r4.y.targetOffset = 0, t5 !== e4) {
            let n4 = t5;
            for (; n4 && n4 !== e4; ) r4.x.targetOffset += n4.offsetLeft, r4.y.targetOffset += n4.offsetTop, n4 = n4.offsetParent;
          }
          r4.x.targetLength = t5 === e4 ? t5.scrollWidth : t5.clientWidth, r4.y.targetLength = t5 === e4 ? t5.scrollHeight : t5.clientHeight, r4.x.containerLength = e4.clientWidth, r4.y.containerLength = e4.clientHeight;
        })(e3, n3.target, r3), m(e3, "x", r3, t4), m(e3, "y", r3, t4), r3.time = t4, (n3.offset || n3.target) && (function(e4, t5, r4) {
          let { offset: n4 = O } = r4, { target: a3 = e4, axis: o2 = "y" } = r4, i2 = "y" === o2 ? "height" : "width", s3 = a3 !== e4 ? (function(e5, t6) {
            let r5 = { x: 0, y: 0 }, n5 = e5;
            for (; n5 && n5 !== t6; ) if ((0, b.isHTMLElement)(n5)) r5.x += n5.offsetLeft, r5.y += n5.offsetTop, n5 = n5.offsetParent;
            else if ("svg" === n5.tagName) {
              let e6 = n5.getBoundingClientRect(), t7 = (n5 = n5.parentElement).getBoundingClientRect();
              r5.x += e6.left - t7.left, r5.y += e6.top - t7.top;
            } else if (n5 instanceof SVGGraphicsElement) {
              let { x: e6, y: t7 } = n5.getBBox();
              r5.x += e6, r5.y += t7;
              let a4 = null, o3 = n5.parentNode;
              for (; !a4; ) "svg" === o3.tagName && (a4 = o3), o3 = n5.parentNode;
              n5 = a4;
            } else break;
            return r5;
          })(a3, e4) : S, l3 = a3 === e4 ? { width: e4.scrollWidth, height: e4.scrollHeight } : "getBBox" in a3 && "svg" !== a3.tagName ? a3.getBBox() : { width: a3.clientWidth, height: a3.clientHeight }, u2 = { width: e4.clientWidth, height: e4.clientHeight };
          t5[o2].offset.length = 0;
          let c2 = !t5[o2].interpolate, d2 = n4.length;
          for (let e5 = 0; e5 < d2; e5++) {
            let r5 = (function(e6, t6, r6, n5) {
              let a4 = Array.isArray(e6) ? e6 : A, o3 = 0;
              return "number" == typeof e6 ? a4 = [e6, e6] : "string" == typeof e6 && (a4 = (e6 = e6.trim()).includes(" ") ? e6.split(" ") : [e6, k[e6] ? e6 : "0"]), (o3 = E(a4[0], r6, n5)) - E(a4[1], t6);
            })(n4[e5], u2[i2], l3[i2], s3[o2]);
            c2 || r5 === t5[o2].interpolatorOffsets[e5] || (c2 = true), t5[o2].offset[e5] = r5;
          }
          c2 && (t5[o2].interpolate = (0, w.interpolate)(t5[o2].offset, (0, v.defaultOffset)(n4), { clamp: false }), t5[o2].interpolatorOffsets = [...t5[o2].offset]), t5[o2].progress = (0, M.clamp)(0, 1, t5[o2].interpolate(t5[o2].current));
        })(e3, r3, n3);
      }, notify: () => t3(r3) };
    })(t2, e2, { time: 0, x: h(), y: h() }, n2);
    if (a2.add(s2), !L.has(t2)) {
      let e3 = () => {
        for (let e4 of a2) e4.measure(i.frameData.timestamp);
        i.frame.preUpdate(r3);
      }, r3 = () => {
        for (let e4 of a2) e4.notify();
      }, n3 = () => i.frame.read(e3);
      L.set(t2, n3);
      let o2 = z(t2);
      window.addEventListener("resize", n3), t2 !== document.documentElement && R.set(t2, (0, d.resize)(t2, n3)), o2.addEventListener("scroll", n3), n3();
    }
    if (r2 && !q.has(t2)) {
      let e3 = L.get(t2), r3 = { width: t2.scrollWidth, height: t2.scrollHeight };
      T.set(t2, r3);
      let n3 = i.frame.read(() => {
        let n4 = t2.scrollWidth, a3 = t2.scrollHeight;
        (r3.width !== n4 || r3.height !== a3) && (e3(), r3.width = n4, r3.height = a3);
      }, true);
      q.set(t2, n3);
    }
    let l2 = L.get(t2);
    return i.frame.read(l2, false, true), () => {
      (0, i.cancelFrame)(l2);
      let e3 = N.get(t2);
      if (!e3 || (e3.delete(s2), e3.size)) return;
      let r3 = L.get(t2);
      L.delete(t2), r3 && (z(t2).removeEventListener("scroll", r3), R.get(t2)?.(), window.removeEventListener("resize", r3));
      let n3 = q.get(t2);
      n3 && ((0, i.cancelFrame)(n3), q.delete(t2)), T.delete(t2);
    };
  }
  try {
    var U = "u" > typeof window ? window : e.g;
    U._sentryModuleMetadata = U._sentryModuleMetadata || {}, U._sentryModuleMetadata[new U.Error().stack] = Object.assign({}, U._sentryModuleMetadata[new U.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let D = [[[[0, 1], [1, 1]], "entry"], [[[0, 0], [1, 0]], "exit"], [[[1, 0], [0, 1]], "cover"], [O, "contain"]], $ = { start: 0, end: 1 };
  function W(e2) {
    if (!e2) return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
    for (let [t2, r2] of D) if ((function(e3, t3) {
      let r3 = (function(e4) {
        if (2 !== e4.length) return;
        let t4 = [];
        for (let r4 of e4) if (Array.isArray(r4)) t4.push(r4);
        else {
          if ("string" != typeof r4) return;
          let e5 = (function(e6) {
            let t5 = e6.trim().split(/\s+/);
            if (2 !== t5.length) return;
            let r5 = $[t5[0]], n2 = $[t5[1]];
            if (void 0 !== r5 && void 0 !== n2) return [r5, n2];
          })(r4);
          if (!e5) return;
          t4.push(e5);
        }
        return t4;
      })(e3);
      if (!r3) return false;
      for (let e4 = 0; e4 < 2; e4++) {
        let n2 = r3[e4], a2 = t3[e4];
        if (n2[0] !== a2[0] || n2[1] !== a2[1]) return false;
      }
      return true;
    })(e2, t2)) return { rangeStart: `${r2} 0%`, rangeEnd: `${r2} 100%` };
  }
  try {
    var F = "u" > typeof window ? window : e.g;
    F._sentryModuleMetadata = F._sentryModuleMetadata || {}, F._sentryModuleMetadata[new F.Error().stack] = Object.assign({}, F._sentryModuleMetadata[new F.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let H = /* @__PURE__ */ new Map();
  function V(e2) {
    let t2 = { value: 0 }, r2 = K((r3) => {
      t2.value = 100 * r3[e2.axis].progress;
    }, e2);
    return { currentTime: t2, cancel: r2 };
  }
  function Y({ source: e2, container: t2, ...r2 }) {
    let { axis: n2 } = r2;
    e2 && (t2 = e2);
    let a2 = H.get(t2);
    a2 || (a2 = /* @__PURE__ */ new Map(), H.set(t2, a2));
    let o2 = r2.target ?? "self", i2 = a2.get(o2);
    i2 || (i2 = {}, a2.set(o2, i2));
    let s2 = n2 + (r2.offset ?? []).join(",");
    return i2[s2] || (r2.target && c(r2.target) ? W(r2.offset) ? i2[s2] = new ViewTimeline({ subject: r2.target, axis: n2 }) : i2[s2] = V({ container: t2, ...r2 }) : c() ? i2[s2] = new ScrollTimeline({ source: t2, axis: n2 }) : i2[s2] = V({ container: t2, ...r2 })), i2[s2];
  }
  try {
    var X = "u" > typeof window ? window : e.g;
    X._sentryModuleMetadata = X._sentryModuleMetadata || {}, X._sentryModuleMetadata[new X.Error().stack] = Object.assign({}, X._sentryModuleMetadata[new X.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var J = "u" > typeof window ? window : e.g;
    J._sentryModuleMetadata = J._sentryModuleMetadata || {}, J._sentryModuleMetadata[new J.Error().stack] = Object.assign({}, J._sentryModuleMetadata[new J.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var Z = "u" > typeof window ? window : e.g;
    Z._sentryModuleMetadata = Z._sentryModuleMetadata || {}, Z._sentryModuleMetadata[new Z.Error().stack] = Object.assign({}, Z._sentryModuleMetadata[new Z.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function G(e2, { axis: t2 = "y", container: r2 = document.scrollingElement, ...n2 } = {}) {
    var a2, i2;
    let s2, u2, d2;
    if (!r2) return o.noop;
    let f2 = { axis: t2, container: r2, ...n2 };
    return "function" == typeof e2 ? (a2 = e2, i2 = f2, 2 === a2.length ? K((e3) => {
      a2(e3[i2.axis].progress, e3);
    }, i2) : l(a2, Y(i2))) : (s2 = Y(f2), u2 = f2.target ? W(f2.offset) : void 0, d2 = f2.target ? c(f2.target) && !!u2 : c(), e2.attachTimeline({ timeline: d2 ? s2 : void 0, ...u2 && d2 && { rangeStart: u2.rangeStart, rangeEnd: u2.rangeEnd }, observe: (e3) => (e3.pause(), l((t3) => {
      e3.time = e3.iterationDuration * t3;
    }, s2)) }));
  }
  var Q = e.i(134174), ee = e.i(736986);
  try {
    var et = "u" > typeof window ? window : e.g;
    et._sentryModuleMetadata = et._sentryModuleMetadata || {}, et._sentryModuleMetadata[new et.Error().stack] = Object.assign({}, et._sentryModuleMetadata[new et.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let er = () => ({ scrollX: (0, r.motionValue)(0), scrollY: (0, r.motionValue)(0), scrollXProgress: (0, r.motionValue)(0), scrollYProgress: (0, r.motionValue)(0) }), en = (e2) => !!e2 && !e2.current;
  function ea(e2, t2, r2, n2) {
    return { factory: (a2) => G(a2, { ...t2, axis: e2, container: r2?.current || void 0, target: n2?.current || void 0 }), times: [0, 1], keyframes: [0, 1], ease: (e3) => e3, duration: 1 };
  }
  e.s(["useScroll", 0, function({ container: e2, target: r2, ...o2 } = {}) {
    var i2;
    let s2 = (0, Q.useConstant)(er);
    i2 = o2.offset, !("u" < typeof window) && (r2 ? (0, t.supportsViewTimeline)() && !!W(i2) : (0, t.supportsScrollTimeline)()) && (s2.scrollXProgress.accelerate = ea("x", o2, e2, r2), s2.scrollYProgress.accelerate = ea("y", o2, e2, r2));
    let l2 = (0, a.useRef)(null), u2 = (0, a.useRef)(false), c2 = (0, a.useCallback)(() => (l2.current = G((e3, { x: t2, y: r3 }) => {
      s2.scrollX.set(t2.current), s2.scrollXProgress.set(t2.progress), s2.scrollY.set(r3.current), s2.scrollYProgress.set(r3.progress);
    }, { ...o2, container: e2?.current || void 0, target: r2?.current || void 0 }), () => {
      l2.current?.();
    }), [e2, r2, JSON.stringify(o2.offset)]);
    return (0, ee.useIsomorphicLayoutEffect)(() => {
      if (u2.current = false, !(en(e2) || en(r2))) return c2();
      u2.current = true;
    }, [c2]), (0, a.useEffect)(() => u2.current ? ((0, n.invariant)(!en(e2), "Container ref is defined but not hydrated", "use-scroll-ref"), (0, n.invariant)(!en(r2), "Target ref is defined but not hydrated", "use-scroll-ref"), c2()) : void 0, [c2]), s2;
  }], 46946);
}, 224253, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { default: function() {
    return w;
  }, useLinkStatus: function() {
    return M;
  } };
  for (var o in a) Object.defineProperty(r, o, { enumerable: true, get: a[o] });
  let i = e.r(744066), s = e.r(68982), l = i._(e.r(856757)), u = e.r(293316), c = e.r(225478), d = e.r(326731), f = e.r(50595), p = e.r(907172), y = e.r(332304), h = e.r(151336), g = e.r(608651), m = e.r(409486);
  function w(t2) {
    var r2;
    let n2, a2, o2, [i2, w2] = (0, l.useOptimistic)(h.IDLE_LINK_STATUS), M2 = (0, l.useRef)(null), { href: b, as: _, children: x, prefetch: k = null, passHref: E, replace: j, shallow: A, scroll: C, onClick: O, onMouseEnter: P, onTouchStart: S, legacyBehavior: B = false, onNavigate: I, transitionTypes: L, ref: R, unstable_dynamicOnHover: N, ...T } = t2;
    n2 = x, B && ("string" == typeof n2 || "number" == typeof n2) && (n2 = (0, s.jsx)("a", { children: n2 }));
    let q = l.default.useContext(c.AppRouterContext), z = false !== k, K = false === k ? "none" : true === k ? "full" : "auto", U = "none" !== K ? "auto" === K ? m.FetchStrategy.PPR : m.FetchStrategy.Full : m.FetchStrategy.PPR, D = "string" == typeof (r2 = _ || b) ? r2 : (0, u.formatUrl)(r2);
    if (B) {
      if (n2?.$$typeof === /* @__PURE__ */ Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", { value: "E863", enumerable: false, configurable: true });
      a2 = l.default.Children.only(n2);
    }
    let $ = B ? a2 && "object" == typeof a2 && a2.ref : R, W, F = l.default.useCallback((e2) => (null !== q && (M2.current = (0, h.mountLinkInstance)(e2, D, q, U, z, w2, W)), () => {
      M2.current && ((0, h.unmountLinkForCurrentNavigation)(M2.current), M2.current = null), (0, h.unmountPrefetchableInstance)(e2);
    }), [z, D, q, U, w2, W]), H = { ref: (0, d.useMergedRef)(F, $), onClick(t3) {
      B || "function" != typeof O || O(t3), B && a2.props && "function" == typeof a2.props.onClick && a2.props.onClick(t3), !q || t3.defaultPrevented || (function(t4, r3, n3, a3, o3, i3, s2, u2 = "none") {
        if ("u" > typeof window) {
          let c2, { nodeName: d2 } = t4.currentTarget;
          if ("A" === d2.toUpperCase() && ((c2 = t4.currentTarget.getAttribute("target")) && "_self" !== c2 || t4.metaKey || t4.ctrlKey || t4.shiftKey || t4.altKey || t4.nativeEvent && 2 === t4.nativeEvent.which) || t4.currentTarget.hasAttribute("download")) return;
          if (!(0, g.isLocalURL)(r3)) {
            a3 && (t4.preventDefault(), location.replace(r3));
            return;
          }
          if (t4.preventDefault(), i3) {
            let e2 = false;
            if (i3({ preventDefault: () => {
              e2 = true;
            } }), e2) return;
          }
          let { dispatchNavigateAction: f2 } = e.r(200383);
          l.default.startTransition(() => {
            f2(r3, a3 ? "replace" : "push", false === o3 ? y.ScrollBehavior.NoScroll : y.ScrollBehavior.Default, n3.current, s2, u2);
          });
        }
      })(t3, D, M2, j, C, I, L, K);
    }, onMouseEnter(e2) {
      B || "function" != typeof P || P(e2), B && a2.props && "function" == typeof a2.props.onMouseEnter && a2.props.onMouseEnter(e2), q && z && (0, h.onNavigationIntent)(e2.currentTarget, true === N);
    }, onTouchStart: function(e2) {
      B || "function" != typeof S || S(e2), B && a2.props && "function" == typeof a2.props.onTouchStart && a2.props.onTouchStart(e2), q && z && (0, h.onNavigationIntent)(e2.currentTarget, true === N);
    } };
    return (0, f.isAbsoluteUrl)(D) ? H.href = D : B && !E && ("a" !== a2.type || "href" in a2.props) || (H.href = (0, p.addBasePath)(D)), o2 = B ? l.default.cloneElement(a2, H) : (0, s.jsx)("a", { ...T, ...H, children: n2 }), (0, s.jsx)(v.Provider, { value: i2, children: o2 });
  }
  let v = (0, l.createContext)(h.IDLE_LINK_STATUS), M = () => (0, l.useContext)(v);
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 824144, (e, t, r) => {
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var a = { 872: function(e2, t2) {
    "use strict";
    t2.byteLength = function(e3) {
      var t3 = l(e3), r3 = t3[0], n3 = t3[1];
      return (r3 + n3) * 3 / 4 - n3;
    }, t2.toByteArray = function(e3) {
      var t3, r3, o3 = l(e3), i3 = o3[0], s2 = o3[1], u = new a2((i3 + s2) * 3 / 4 - s2), c = 0, d = s2 > 0 ? i3 - 4 : i3;
      for (r3 = 0; r3 < d; r3 += 4) t3 = n2[e3.charCodeAt(r3)] << 18 | n2[e3.charCodeAt(r3 + 1)] << 12 | n2[e3.charCodeAt(r3 + 2)] << 6 | n2[e3.charCodeAt(r3 + 3)], u[c++] = t3 >> 16 & 255, u[c++] = t3 >> 8 & 255, u[c++] = 255 & t3;
      return 2 === s2 && (t3 = n2[e3.charCodeAt(r3)] << 2 | n2[e3.charCodeAt(r3 + 1)] >> 4, u[c++] = 255 & t3), 1 === s2 && (t3 = n2[e3.charCodeAt(r3)] << 10 | n2[e3.charCodeAt(r3 + 1)] << 4 | n2[e3.charCodeAt(r3 + 2)] >> 2, u[c++] = t3 >> 8 & 255, u[c++] = 255 & t3), u;
    }, t2.fromByteArray = function(e3) {
      for (var t3, n3 = e3.length, a3 = n3 % 3, o3 = [], i3 = 0, s2 = n3 - a3; i3 < s2; i3 += 16383) o3.push((function(e4, t4, n4) {
        for (var a4, o4 = [], i4 = t4; i4 < n4; i4 += 3) a4 = (e4[i4] << 16 & 16711680) + (e4[i4 + 1] << 8 & 65280) + (255 & e4[i4 + 2]), o4.push(r2[a4 >> 18 & 63] + r2[a4 >> 12 & 63] + r2[a4 >> 6 & 63] + r2[63 & a4]);
        return o4.join("");
      })(e3, i3, i3 + 16383 > s2 ? s2 : i3 + 16383));
      return 1 === a3 ? o3.push(r2[(t3 = e3[n3 - 1]) >> 2] + r2[t3 << 4 & 63] + "==") : 2 === a3 && o3.push(r2[(t3 = (e3[n3 - 2] << 8) + e3[n3 - 1]) >> 10] + r2[t3 >> 4 & 63] + r2[t3 << 2 & 63] + "="), o3.join("");
    };
    for (var r2 = [], n2 = [], a2 = "u" > typeof Uint8Array ? Uint8Array : Array, o2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i2 = 0, s = o2.length; i2 < s; ++i2) r2[i2] = o2[i2], n2[o2.charCodeAt(i2)] = i2;
    function l(e3) {
      var t3 = e3.length;
      if (t3 % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
      var r3 = e3.indexOf("=");
      -1 === r3 && (r3 = t3);
      var n3 = r3 === t3 ? 0 : 4 - r3 % 4;
      return [r3, n3];
    }
    n2[45] = 62, n2[95] = 63;
  }, 230: function(e2, t2, r2) {
    "use strict";
    var n2 = r2(872), a2 = r2(321), o2 = "function" == typeof Symbol && "function" == typeof Symbol.for ? /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom") : null;
    function i2(e3) {
      if (e3 > 2147483647) throw RangeError('The value "' + e3 + '" is invalid for option "size"');
      var t3 = new Uint8Array(e3);
      return Object.setPrototypeOf(t3, s.prototype), t3;
    }
    function s(e3, t3, r3) {
      if ("number" == typeof e3) {
        if ("string" == typeof t3) throw TypeError('The "string" argument must be of type string. Received type number');
        return c(e3);
      }
      return l(e3, t3, r3);
    }
    function l(e3, t3, r3) {
      if ("string" == typeof e3) {
        var n3 = e3, a3 = t3;
        if (("string" != typeof a3 || "" === a3) && (a3 = "utf8"), !s.isEncoding(a3)) throw TypeError("Unknown encoding: " + a3);
        var o3 = 0 | p(n3, a3), l2 = i2(o3), u2 = l2.write(n3, a3);
        return u2 !== o3 && (l2 = l2.slice(0, u2)), l2;
      }
      if (ArrayBuffer.isView(e3)) return d(e3);
      if (null == e3) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e3);
      if (O(e3, ArrayBuffer) || e3 && O(e3.buffer, ArrayBuffer) || "u" > typeof SharedArrayBuffer && (O(e3, SharedArrayBuffer) || e3 && O(e3.buffer, SharedArrayBuffer))) return (function(e4, t4, r4) {
        var n4;
        if (t4 < 0 || e4.byteLength < t4) throw RangeError('"offset" is outside of buffer bounds');
        if (e4.byteLength < t4 + (r4 || 0)) throw RangeError('"length" is outside of buffer bounds');
        return Object.setPrototypeOf(n4 = void 0 === t4 && void 0 === r4 ? new Uint8Array(e4) : void 0 === r4 ? new Uint8Array(e4, t4) : new Uint8Array(e4, t4, r4), s.prototype), n4;
      })(e3, t3, r3);
      if ("number" == typeof e3) throw TypeError('The "value" argument must not be of type number. Received type number');
      var c2 = e3.valueOf && e3.valueOf();
      if (null != c2 && c2 !== e3) return s.from(c2, t3, r3);
      var y2 = (function(e4) {
        if (s.isBuffer(e4)) {
          var t4 = 0 | f(e4.length), r4 = i2(t4);
          return 0 === r4.length || e4.copy(r4, 0, 0, t4), r4;
        }
        return void 0 !== e4.length ? "number" != typeof e4.length || (function(e5) {
          return e5 != e5;
        })(e4.length) ? i2(0) : d(e4) : "Buffer" === e4.type && Array.isArray(e4.data) ? d(e4.data) : void 0;
      })(e3);
      if (y2) return y2;
      if ("u" > typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e3[Symbol.toPrimitive]) return s.from(e3[Symbol.toPrimitive]("string"), t3, r3);
      throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e3);
    }
    function u(e3) {
      if ("number" != typeof e3) throw TypeError('"size" argument must be of type number');
      if (e3 < 0) throw RangeError('The value "' + e3 + '" is invalid for option "size"');
    }
    function c(e3) {
      return u(e3), i2(e3 < 0 ? 0 : 0 | f(e3));
    }
    function d(e3) {
      for (var t3 = e3.length < 0 ? 0 : 0 | f(e3.length), r3 = i2(t3), n3 = 0; n3 < t3; n3 += 1) r3[n3] = 255 & e3[n3];
      return r3;
    }
    t2.Buffer = s, t2.SlowBuffer = function(e3) {
      return +e3 != e3 && (e3 = 0), s.alloc(+e3);
    }, t2.INSPECT_MAX_BYTES = 50, t2.kMaxLength = 2147483647, s.TYPED_ARRAY_SUPPORT = (function() {
      try {
        var e3 = new Uint8Array(1), t3 = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(t3, Uint8Array.prototype), Object.setPrototypeOf(e3, t3), 42 === e3.foo();
      } catch (e4) {
        return false;
      }
    })(), !s.TYPED_ARRAY_SUPPORT && "u" > typeof console && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s.prototype, "parent", { enumerable: true, get: function() {
      if (s.isBuffer(this)) return this.buffer;
    } }), Object.defineProperty(s.prototype, "offset", { enumerable: true, get: function() {
      if (s.isBuffer(this)) return this.byteOffset;
    } }), s.poolSize = 8192, s.from = function(e3, t3, r3) {
      return l(e3, t3, r3);
    }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function(e3, t3, r3) {
      return (u(e3), e3 <= 0) ? i2(e3) : void 0 !== t3 ? "string" == typeof r3 ? i2(e3).fill(t3, r3) : i2(e3).fill(t3) : i2(e3);
    }, s.allocUnsafe = function(e3) {
      return c(e3);
    }, s.allocUnsafeSlow = function(e3) {
      return c(e3);
    };
    function f(e3) {
      if (e3 >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
      return 0 | e3;
    }
    function p(e3, t3) {
      if (s.isBuffer(e3)) return e3.length;
      if (ArrayBuffer.isView(e3) || O(e3, ArrayBuffer)) return e3.byteLength;
      if ("string" != typeof e3) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e3);
      var r3 = e3.length, n3 = arguments.length > 2 && true === arguments[2];
      if (!n3 && 0 === r3) return 0;
      for (var a3 = false; ; ) switch (t3) {
        case "ascii":
        case "latin1":
        case "binary":
          return r3;
        case "utf8":
        case "utf-8":
          return E(e3).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return 2 * r3;
        case "hex":
          return r3 >>> 1;
        case "base64":
          return A(e3).length;
        default:
          if (a3) return n3 ? -1 : E(e3).length;
          t3 = ("" + t3).toLowerCase(), a3 = true;
      }
    }
    function y(e3, t3, r3) {
      var a3, o3, i3, s2 = false;
      if ((void 0 === t3 || t3 < 0) && (t3 = 0), t3 > this.length || ((void 0 === r3 || r3 > this.length) && (r3 = this.length), r3 <= 0 || (r3 >>>= 0) <= (t3 >>>= 0))) return "";
      for (e3 || (e3 = "utf8"); ; ) switch (e3) {
        case "hex":
          return (function(e4, t4, r4) {
            var n3 = e4.length;
            (!t4 || t4 < 0) && (t4 = 0), (!r4 || r4 < 0 || r4 > n3) && (r4 = n3);
            for (var a4 = "", o4 = t4; o4 < r4; ++o4) a4 += P[e4[o4]];
            return a4;
          })(this, t3, r3);
        case "utf8":
        case "utf-8":
          return w(this, t3, r3);
        case "ascii":
          return (function(e4, t4, r4) {
            var n3 = "";
            r4 = Math.min(e4.length, r4);
            for (var a4 = t4; a4 < r4; ++a4) n3 += String.fromCharCode(127 & e4[a4]);
            return n3;
          })(this, t3, r3);
        case "latin1":
        case "binary":
          return (function(e4, t4, r4) {
            var n3 = "";
            r4 = Math.min(e4.length, r4);
            for (var a4 = t4; a4 < r4; ++a4) n3 += String.fromCharCode(e4[a4]);
            return n3;
          })(this, t3, r3);
        case "base64":
          return a3 = this, o3 = t3, i3 = r3, 0 === o3 && i3 === a3.length ? n2.fromByteArray(a3) : n2.fromByteArray(a3.slice(o3, i3));
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return (function(e4, t4, r4) {
            for (var n3 = e4.slice(t4, r4), a4 = "", o4 = 0; o4 < n3.length; o4 += 2) a4 += String.fromCharCode(n3[o4] + 256 * n3[o4 + 1]);
            return a4;
          })(this, t3, r3);
        default:
          if (s2) throw TypeError("Unknown encoding: " + e3);
          e3 = (e3 + "").toLowerCase(), s2 = true;
      }
    }
    function h(e3, t3, r3) {
      var n3 = e3[t3];
      e3[t3] = e3[r3], e3[r3] = n3;
    }
    function g(e3, t3, r3, n3, a3) {
      var o3;
      if (0 === e3.length) return -1;
      if ("string" == typeof r3 ? (n3 = r3, r3 = 0) : r3 > 2147483647 ? r3 = 2147483647 : r3 < -2147483648 && (r3 = -2147483648), (o3 = r3 *= 1) != o3 && (r3 = a3 ? 0 : e3.length - 1), r3 < 0 && (r3 = e3.length + r3), r3 >= e3.length) if (a3) return -1;
      else r3 = e3.length - 1;
      else if (r3 < 0) if (!a3) return -1;
      else r3 = 0;
      if ("string" == typeof t3 && (t3 = s.from(t3, n3)), s.isBuffer(t3)) return 0 === t3.length ? -1 : m(e3, t3, r3, n3, a3);
      if ("number" == typeof t3) {
        if (t3 &= 255, "function" == typeof Uint8Array.prototype.indexOf) if (a3) return Uint8Array.prototype.indexOf.call(e3, t3, r3);
        else return Uint8Array.prototype.lastIndexOf.call(e3, t3, r3);
        return m(e3, [t3], r3, n3, a3);
      }
      throw TypeError("val must be string, number or Buffer");
    }
    function m(e3, t3, r3, n3, a3) {
      var o3, i3 = 1, s2 = e3.length, l2 = t3.length;
      if (void 0 !== n3 && ("ucs2" === (n3 = String(n3).toLowerCase()) || "ucs-2" === n3 || "utf16le" === n3 || "utf-16le" === n3)) {
        if (e3.length < 2 || t3.length < 2) return -1;
        i3 = 2, s2 /= 2, l2 /= 2, r3 /= 2;
      }
      function u2(e4, t4) {
        return 1 === i3 ? e4[t4] : e4.readUInt16BE(t4 * i3);
      }
      if (a3) {
        var c2 = -1;
        for (o3 = r3; o3 < s2; o3++) if (u2(e3, o3) === u2(t3, -1 === c2 ? 0 : o3 - c2)) {
          if (-1 === c2 && (c2 = o3), o3 - c2 + 1 === l2) return c2 * i3;
        } else -1 !== c2 && (o3 -= o3 - c2), c2 = -1;
      } else for (r3 + l2 > s2 && (r3 = s2 - l2), o3 = r3; o3 >= 0; o3--) {
        for (var d2 = true, f2 = 0; f2 < l2; f2++) if (u2(e3, o3 + f2) !== u2(t3, f2)) {
          d2 = false;
          break;
        }
        if (d2) return o3;
      }
      return -1;
    }
    s.isBuffer = function(e3) {
      return null != e3 && true === e3._isBuffer && e3 !== s.prototype;
    }, s.compare = function(e3, t3) {
      if (O(e3, Uint8Array) && (e3 = s.from(e3, e3.offset, e3.byteLength)), O(t3, Uint8Array) && (t3 = s.from(t3, t3.offset, t3.byteLength)), !s.isBuffer(e3) || !s.isBuffer(t3)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (e3 === t3) return 0;
      for (var r3 = e3.length, n3 = t3.length, a3 = 0, o3 = Math.min(r3, n3); a3 < o3; ++a3) if (e3[a3] !== t3[a3]) {
        r3 = e3[a3], n3 = t3[a3];
        break;
      }
      return r3 < n3 ? -1 : +(n3 < r3);
    }, s.isEncoding = function(e3) {
      switch (String(e3).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, s.concat = function(e3, t3) {
      if (!Array.isArray(e3)) throw TypeError('"list" argument must be an Array of Buffers');
      if (0 === e3.length) return s.alloc(0);
      if (void 0 === t3) for (r3 = 0, t3 = 0; r3 < e3.length; ++r3) t3 += e3[r3].length;
      var r3, n3 = s.allocUnsafe(t3), a3 = 0;
      for (r3 = 0; r3 < e3.length; ++r3) {
        var o3 = e3[r3];
        if (O(o3, Uint8Array) && (o3 = s.from(o3)), !s.isBuffer(o3)) throw TypeError('"list" argument must be an Array of Buffers');
        o3.copy(n3, a3), a3 += o3.length;
      }
      return n3;
    }, s.byteLength = p, s.prototype._isBuffer = true, s.prototype.swap16 = function() {
      var e3 = this.length;
      if (e3 % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
      for (var t3 = 0; t3 < e3; t3 += 2) h(this, t3, t3 + 1);
      return this;
    }, s.prototype.swap32 = function() {
      var e3 = this.length;
      if (e3 % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
      for (var t3 = 0; t3 < e3; t3 += 4) h(this, t3, t3 + 3), h(this, t3 + 1, t3 + 2);
      return this;
    }, s.prototype.swap64 = function() {
      var e3 = this.length;
      if (e3 % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
      for (var t3 = 0; t3 < e3; t3 += 8) h(this, t3, t3 + 7), h(this, t3 + 1, t3 + 6), h(this, t3 + 2, t3 + 5), h(this, t3 + 3, t3 + 4);
      return this;
    }, s.prototype.toString = function() {
      var e3 = this.length;
      return 0 === e3 ? "" : 0 == arguments.length ? w(this, 0, e3) : y.apply(this, arguments);
    }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e3) {
      if (!s.isBuffer(e3)) throw TypeError("Argument must be a Buffer");
      return this === e3 || 0 === s.compare(this, e3);
    }, s.prototype.inspect = function() {
      var e3 = "", r3 = t2.INSPECT_MAX_BYTES;
      return e3 = this.toString("hex", 0, r3).replace(/(.{2})/g, "$1 ").trim(), this.length > r3 && (e3 += " ... "), "<Buffer " + e3 + ">";
    }, o2 && (s.prototype[o2] = s.prototype.inspect), s.prototype.compare = function(e3, t3, r3, n3, a3) {
      if (O(e3, Uint8Array) && (e3 = s.from(e3, e3.offset, e3.byteLength)), !s.isBuffer(e3)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e3);
      if (void 0 === t3 && (t3 = 0), void 0 === r3 && (r3 = e3 ? e3.length : 0), void 0 === n3 && (n3 = 0), void 0 === a3 && (a3 = this.length), t3 < 0 || r3 > e3.length || n3 < 0 || a3 > this.length) throw RangeError("out of range index");
      if (n3 >= a3 && t3 >= r3) return 0;
      if (n3 >= a3) return -1;
      if (t3 >= r3) return 1;
      if (t3 >>>= 0, r3 >>>= 0, n3 >>>= 0, a3 >>>= 0, this === e3) return 0;
      for (var o3 = a3 - n3, i3 = r3 - t3, l2 = Math.min(o3, i3), u2 = this.slice(n3, a3), c2 = e3.slice(t3, r3), d2 = 0; d2 < l2; ++d2) if (u2[d2] !== c2[d2]) {
        o3 = u2[d2], i3 = c2[d2];
        break;
      }
      return o3 < i3 ? -1 : +(i3 < o3);
    }, s.prototype.includes = function(e3, t3, r3) {
      return -1 !== this.indexOf(e3, t3, r3);
    }, s.prototype.indexOf = function(e3, t3, r3) {
      return g(this, e3, t3, r3, true);
    }, s.prototype.lastIndexOf = function(e3, t3, r3) {
      return g(this, e3, t3, r3, false);
    };
    function w(e3, t3, r3) {
      r3 = Math.min(e3.length, r3);
      for (var n3 = [], a3 = t3; a3 < r3; ) {
        var o3, i3, s2, l2, u2 = e3[a3], c2 = null, d2 = u2 > 239 ? 4 : u2 > 223 ? 3 : u2 > 191 ? 2 : 1;
        if (a3 + d2 <= r3) switch (d2) {
          case 1:
            u2 < 128 && (c2 = u2);
            break;
          case 2:
            (192 & (o3 = e3[a3 + 1])) == 128 && (l2 = (31 & u2) << 6 | 63 & o3) > 127 && (c2 = l2);
            break;
          case 3:
            o3 = e3[a3 + 1], i3 = e3[a3 + 2], (192 & o3) == 128 && (192 & i3) == 128 && (l2 = (15 & u2) << 12 | (63 & o3) << 6 | 63 & i3) > 2047 && (l2 < 55296 || l2 > 57343) && (c2 = l2);
            break;
          case 4:
            o3 = e3[a3 + 1], i3 = e3[a3 + 2], s2 = e3[a3 + 3], (192 & o3) == 128 && (192 & i3) == 128 && (192 & s2) == 128 && (l2 = (15 & u2) << 18 | (63 & o3) << 12 | (63 & i3) << 6 | 63 & s2) > 65535 && l2 < 1114112 && (c2 = l2);
        }
        null === c2 ? (c2 = 65533, d2 = 1) : c2 > 65535 && (c2 -= 65536, n3.push(c2 >>> 10 & 1023 | 55296), c2 = 56320 | 1023 & c2), n3.push(c2), a3 += d2;
      }
      var f2 = n3, p2 = f2.length;
      if (p2 <= 4096) return String.fromCharCode.apply(String, f2);
      for (var y2 = "", h2 = 0; h2 < p2; ) y2 += String.fromCharCode.apply(String, f2.slice(h2, h2 += 4096));
      return y2;
    }
    function v(e3, t3, r3) {
      if (e3 % 1 != 0 || e3 < 0) throw RangeError("offset is not uint");
      if (e3 + t3 > r3) throw RangeError("Trying to access beyond buffer length");
    }
    function M(e3, t3, r3, n3, a3, o3) {
      if (!s.isBuffer(e3)) throw TypeError('"buffer" argument must be a Buffer instance');
      if (t3 > a3 || t3 < o3) throw RangeError('"value" argument is out of bounds');
      if (r3 + n3 > e3.length) throw RangeError("Index out of range");
    }
    function b(e3, t3, r3, n3, a3, o3) {
      if (r3 + n3 > e3.length || r3 < 0) throw RangeError("Index out of range");
    }
    function _(e3, t3, r3, n3, o3) {
      return t3 *= 1, r3 >>>= 0, o3 || b(e3, t3, r3, 4, 34028234663852886e22, -34028234663852886e22), a2.write(e3, t3, r3, n3, 23, 4), r3 + 4;
    }
    function x(e3, t3, r3, n3, o3) {
      return t3 *= 1, r3 >>>= 0, o3 || b(e3, t3, r3, 8, 17976931348623157e292, -17976931348623157e292), a2.write(e3, t3, r3, n3, 52, 8), r3 + 8;
    }
    s.prototype.write = function(e3, t3, r3, n3) {
      if (void 0 === t3) n3 = "utf8", r3 = this.length, t3 = 0;
      else if (void 0 === r3 && "string" == typeof t3) n3 = t3, r3 = this.length, t3 = 0;
      else if (isFinite(t3)) t3 >>>= 0, isFinite(r3) ? (r3 >>>= 0, void 0 === n3 && (n3 = "utf8")) : (n3 = r3, r3 = void 0);
      else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      var a3, o3, i3, s2, l2, u2, c2, d2, f2 = this.length - t3;
      if ((void 0 === r3 || r3 > f2) && (r3 = f2), e3.length > 0 && (r3 < 0 || t3 < 0) || t3 > this.length) throw RangeError("Attempt to write outside buffer bounds");
      n3 || (n3 = "utf8");
      for (var p2 = false; ; ) switch (n3) {
        case "hex":
          return (function(e4, t4, r4, n4) {
            r4 = Number(r4) || 0;
            var a4 = e4.length - r4;
            n4 ? (n4 = Number(n4)) > a4 && (n4 = a4) : n4 = a4;
            var o4 = t4.length;
            n4 > o4 / 2 && (n4 = o4 / 2);
            for (var i4 = 0; i4 < n4; ++i4) {
              var s3, l3 = parseInt(t4.substr(2 * i4, 2), 16);
              if ((s3 = l3) != s3) break;
              e4[r4 + i4] = l3;
            }
            return i4;
          })(this, e3, t3, r3);
        case "utf8":
        case "utf-8":
          return a3 = t3, o3 = r3, C(E(e3, this.length - a3), this, a3, o3);
        case "ascii":
          return i3 = t3, s2 = r3, C(j(e3), this, i3, s2);
        case "latin1":
        case "binary":
          return (function(e4, t4, r4, n4) {
            return C(j(t4), e4, r4, n4);
          })(this, e3, t3, r3);
        case "base64":
          return l2 = t3, u2 = r3, C(A(e3), this, l2, u2);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return c2 = t3, d2 = r3, C((function(e4, t4) {
            for (var r4, n4, a4 = [], o4 = 0; o4 < e4.length && !((t4 -= 2) < 0); ++o4) n4 = (r4 = e4.charCodeAt(o4)) >> 8, a4.push(r4 % 256), a4.push(n4);
            return a4;
          })(e3, this.length - c2), this, c2, d2);
        default:
          if (p2) throw TypeError("Unknown encoding: " + n3);
          n3 = ("" + n3).toLowerCase(), p2 = true;
      }
    }, s.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    }, s.prototype.slice = function(e3, t3) {
      var r3 = this.length;
      e3 = ~~e3, t3 = void 0 === t3 ? r3 : ~~t3, e3 < 0 ? (e3 += r3) < 0 && (e3 = 0) : e3 > r3 && (e3 = r3), t3 < 0 ? (t3 += r3) < 0 && (t3 = 0) : t3 > r3 && (t3 = r3), t3 < e3 && (t3 = e3);
      var n3 = this.subarray(e3, t3);
      return Object.setPrototypeOf(n3, s.prototype), n3;
    }, s.prototype.readUIntLE = function(e3, t3, r3) {
      e3 >>>= 0, t3 >>>= 0, r3 || v(e3, t3, this.length);
      for (var n3 = this[e3], a3 = 1, o3 = 0; ++o3 < t3 && (a3 *= 256); ) n3 += this[e3 + o3] * a3;
      return n3;
    }, s.prototype.readUIntBE = function(e3, t3, r3) {
      e3 >>>= 0, t3 >>>= 0, r3 || v(e3, t3, this.length);
      for (var n3 = this[e3 + --t3], a3 = 1; t3 > 0 && (a3 *= 256); ) n3 += this[e3 + --t3] * a3;
      return n3;
    }, s.prototype.readUInt8 = function(e3, t3) {
      return e3 >>>= 0, t3 || v(e3, 1, this.length), this[e3];
    }, s.prototype.readUInt16LE = function(e3, t3) {
      return e3 >>>= 0, t3 || v(e3, 2, this.length), this[e3] | this[e3 + 1] << 8;
    }, s.prototype.readUInt16BE = function(e3, t3) {
      return e3 >>>= 0, t3 || v(e3, 2, this.length), this[e3] << 8 | this[e3 + 1];
    }, s.prototype.readUInt32LE = function(e3, t3) {
      return e3 >>>= 0, t3 || v(e3, 4, this.length), (this[e3] | this[e3 + 1] << 8 | this[e3 + 2] << 16) + 16777216 * this[e3 + 3];
    }, s.prototype.readUInt32BE = function(e3, t3) {
      return e3 >>>= 0, t3 || v(e3, 4, this.length), 16777216 * this[e3] + (this[e3 + 1] << 16 | this[e3 + 2] << 8 | this[e3 + 3]);
    }, s.prototype.readIntLE = function(e3, t3, r3) {
      e3 >>>= 0, t3 >>>= 0, r3 || v(e3, t3, this.length);
      for (var n3 = this[e3], a3 = 1, o3 = 0; ++o3 < t3 && (a3 *= 256); ) n3 += this[e3 + o3] * a3;
      return n3 >= (a3 *= 128) && (n3 -= Math.pow(2, 8 * t3)), n3;
    }, s.prototype.readIntBE = function(e3, t3, r3) {
      e3 >>>= 0, t3 >>>= 0, r3 || v(e3, t3, this.length);
      for (var n3 = t3, a3 = 1, o3 = this[e3 + --n3]; n3 > 0 && (a3 *= 256); ) o3 += this[e3 + --n3] * a3;
      return o3 >= (a3 *= 128) && (o3 -= Math.pow(2, 8 * t3)), o3;
    }, s.prototype.readInt8 = function(e3, t3) {
      return (e3 >>>= 0, t3 || v(e3, 1, this.length), 128 & this[e3]) ? -((255 - this[e3] + 1) * 1) : this[e3];
    }, s.prototype.readInt16LE = function(e3, t3) {
      e3 >>>= 0, t3 || v(e3, 2, this.length);
      var r3 = this[e3] | this[e3 + 1] << 8;
      return 32768 & r3 ? 4294901760 | r3 : r3;
    }, s.prototype.readInt16BE = function(e3, t3) {
      e3 >>>= 0, t3 || v(e3, 2, this.length);
      var r3 = this[e3 + 1] | this[e3] << 8;
      return 32768 & r3 ? 4294901760 | r3 : r3;
    }, s.prototype.readInt32LE = function(e3, t3) {
      return e3 >>>= 0, t3 || v(e3, 4, this.length), this[e3] | this[e3 + 1] << 8 | this[e3 + 2] << 16 | this[e3 + 3] << 24;
    }, s.prototype.readInt32BE = function(e3, t3) {
      return e3 >>>= 0, t3 || v(e3, 4, this.length), this[e3] << 24 | this[e3 + 1] << 16 | this[e3 + 2] << 8 | this[e3 + 3];
    }, s.prototype.readFloatLE = function(e3, t3) {
      return e3 >>>= 0, t3 || v(e3, 4, this.length), a2.read(this, e3, true, 23, 4);
    }, s.prototype.readFloatBE = function(e3, t3) {
      return e3 >>>= 0, t3 || v(e3, 4, this.length), a2.read(this, e3, false, 23, 4);
    }, s.prototype.readDoubleLE = function(e3, t3) {
      return e3 >>>= 0, t3 || v(e3, 8, this.length), a2.read(this, e3, true, 52, 8);
    }, s.prototype.readDoubleBE = function(e3, t3) {
      return e3 >>>= 0, t3 || v(e3, 8, this.length), a2.read(this, e3, false, 52, 8);
    }, s.prototype.writeUIntLE = function(e3, t3, r3, n3) {
      if (e3 *= 1, t3 >>>= 0, r3 >>>= 0, !n3) {
        var a3 = Math.pow(2, 8 * r3) - 1;
        M(this, e3, t3, r3, a3, 0);
      }
      var o3 = 1, i3 = 0;
      for (this[t3] = 255 & e3; ++i3 < r3 && (o3 *= 256); ) this[t3 + i3] = e3 / o3 & 255;
      return t3 + r3;
    }, s.prototype.writeUIntBE = function(e3, t3, r3, n3) {
      if (e3 *= 1, t3 >>>= 0, r3 >>>= 0, !n3) {
        var a3 = Math.pow(2, 8 * r3) - 1;
        M(this, e3, t3, r3, a3, 0);
      }
      var o3 = r3 - 1, i3 = 1;
      for (this[t3 + o3] = 255 & e3; --o3 >= 0 && (i3 *= 256); ) this[t3 + o3] = e3 / i3 & 255;
      return t3 + r3;
    }, s.prototype.writeUInt8 = function(e3, t3, r3) {
      return e3 *= 1, t3 >>>= 0, r3 || M(this, e3, t3, 1, 255, 0), this[t3] = 255 & e3, t3 + 1;
    }, s.prototype.writeUInt16LE = function(e3, t3, r3) {
      return e3 *= 1, t3 >>>= 0, r3 || M(this, e3, t3, 2, 65535, 0), this[t3] = 255 & e3, this[t3 + 1] = e3 >>> 8, t3 + 2;
    }, s.prototype.writeUInt16BE = function(e3, t3, r3) {
      return e3 *= 1, t3 >>>= 0, r3 || M(this, e3, t3, 2, 65535, 0), this[t3] = e3 >>> 8, this[t3 + 1] = 255 & e3, t3 + 2;
    }, s.prototype.writeUInt32LE = function(e3, t3, r3) {
      return e3 *= 1, t3 >>>= 0, r3 || M(this, e3, t3, 4, 4294967295, 0), this[t3 + 3] = e3 >>> 24, this[t3 + 2] = e3 >>> 16, this[t3 + 1] = e3 >>> 8, this[t3] = 255 & e3, t3 + 4;
    }, s.prototype.writeUInt32BE = function(e3, t3, r3) {
      return e3 *= 1, t3 >>>= 0, r3 || M(this, e3, t3, 4, 4294967295, 0), this[t3] = e3 >>> 24, this[t3 + 1] = e3 >>> 16, this[t3 + 2] = e3 >>> 8, this[t3 + 3] = 255 & e3, t3 + 4;
    }, s.prototype.writeIntLE = function(e3, t3, r3, n3) {
      if (e3 *= 1, t3 >>>= 0, !n3) {
        var a3 = Math.pow(2, 8 * r3 - 1);
        M(this, e3, t3, r3, a3 - 1, -a3);
      }
      var o3 = 0, i3 = 1, s2 = 0;
      for (this[t3] = 255 & e3; ++o3 < r3 && (i3 *= 256); ) e3 < 0 && 0 === s2 && 0 !== this[t3 + o3 - 1] && (s2 = 1), this[t3 + o3] = (e3 / i3 | 0) - s2 & 255;
      return t3 + r3;
    }, s.prototype.writeIntBE = function(e3, t3, r3, n3) {
      if (e3 *= 1, t3 >>>= 0, !n3) {
        var a3 = Math.pow(2, 8 * r3 - 1);
        M(this, e3, t3, r3, a3 - 1, -a3);
      }
      var o3 = r3 - 1, i3 = 1, s2 = 0;
      for (this[t3 + o3] = 255 & e3; --o3 >= 0 && (i3 *= 256); ) e3 < 0 && 0 === s2 && 0 !== this[t3 + o3 + 1] && (s2 = 1), this[t3 + o3] = (e3 / i3 | 0) - s2 & 255;
      return t3 + r3;
    }, s.prototype.writeInt8 = function(e3, t3, r3) {
      return e3 *= 1, t3 >>>= 0, r3 || M(this, e3, t3, 1, 127, -128), e3 < 0 && (e3 = 255 + e3 + 1), this[t3] = 255 & e3, t3 + 1;
    }, s.prototype.writeInt16LE = function(e3, t3, r3) {
      return e3 *= 1, t3 >>>= 0, r3 || M(this, e3, t3, 2, 32767, -32768), this[t3] = 255 & e3, this[t3 + 1] = e3 >>> 8, t3 + 2;
    }, s.prototype.writeInt16BE = function(e3, t3, r3) {
      return e3 *= 1, t3 >>>= 0, r3 || M(this, e3, t3, 2, 32767, -32768), this[t3] = e3 >>> 8, this[t3 + 1] = 255 & e3, t3 + 2;
    }, s.prototype.writeInt32LE = function(e3, t3, r3) {
      return e3 *= 1, t3 >>>= 0, r3 || M(this, e3, t3, 4, 2147483647, -2147483648), this[t3] = 255 & e3, this[t3 + 1] = e3 >>> 8, this[t3 + 2] = e3 >>> 16, this[t3 + 3] = e3 >>> 24, t3 + 4;
    }, s.prototype.writeInt32BE = function(e3, t3, r3) {
      return e3 *= 1, t3 >>>= 0, r3 || M(this, e3, t3, 4, 2147483647, -2147483648), e3 < 0 && (e3 = 4294967295 + e3 + 1), this[t3] = e3 >>> 24, this[t3 + 1] = e3 >>> 16, this[t3 + 2] = e3 >>> 8, this[t3 + 3] = 255 & e3, t3 + 4;
    }, s.prototype.writeFloatLE = function(e3, t3, r3) {
      return _(this, e3, t3, true, r3);
    }, s.prototype.writeFloatBE = function(e3, t3, r3) {
      return _(this, e3, t3, false, r3);
    }, s.prototype.writeDoubleLE = function(e3, t3, r3) {
      return x(this, e3, t3, true, r3);
    }, s.prototype.writeDoubleBE = function(e3, t3, r3) {
      return x(this, e3, t3, false, r3);
    }, s.prototype.copy = function(e3, t3, r3, n3) {
      if (!s.isBuffer(e3)) throw TypeError("argument should be a Buffer");
      if (r3 || (r3 = 0), n3 || 0 === n3 || (n3 = this.length), t3 >= e3.length && (t3 = e3.length), t3 || (t3 = 0), n3 > 0 && n3 < r3 && (n3 = r3), n3 === r3 || 0 === e3.length || 0 === this.length) return 0;
      if (t3 < 0) throw RangeError("targetStart out of bounds");
      if (r3 < 0 || r3 >= this.length) throw RangeError("Index out of range");
      if (n3 < 0) throw RangeError("sourceEnd out of bounds");
      n3 > this.length && (n3 = this.length), e3.length - t3 < n3 - r3 && (n3 = e3.length - t3 + r3);
      var a3 = n3 - r3;
      if (this === e3 && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t3, r3, n3);
      else if (this === e3 && r3 < t3 && t3 < n3) for (var o3 = a3 - 1; o3 >= 0; --o3) e3[o3 + t3] = this[o3 + r3];
      else Uint8Array.prototype.set.call(e3, this.subarray(r3, n3), t3);
      return a3;
    }, s.prototype.fill = function(e3, t3, r3, n3) {
      if ("string" == typeof e3) {
        if ("string" == typeof t3 ? (n3 = t3, t3 = 0, r3 = this.length) : "string" == typeof r3 && (n3 = r3, r3 = this.length), void 0 !== n3 && "string" != typeof n3) throw TypeError("encoding must be a string");
        if ("string" == typeof n3 && !s.isEncoding(n3)) throw TypeError("Unknown encoding: " + n3);
        if (1 === e3.length) {
          var a3, o3 = e3.charCodeAt(0);
          ("utf8" === n3 && o3 < 128 || "latin1" === n3) && (e3 = o3);
        }
      } else "number" == typeof e3 ? e3 &= 255 : "boolean" == typeof e3 && (e3 = Number(e3));
      if (t3 < 0 || this.length < t3 || this.length < r3) throw RangeError("Out of range index");
      if (r3 <= t3) return this;
      if (t3 >>>= 0, r3 = void 0 === r3 ? this.length : r3 >>> 0, e3 || (e3 = 0), "number" == typeof e3) for (a3 = t3; a3 < r3; ++a3) this[a3] = e3;
      else {
        var i3 = s.isBuffer(e3) ? e3 : s.from(e3, n3), l2 = i3.length;
        if (0 === l2) throw TypeError('The value "' + e3 + '" is invalid for argument "value"');
        for (a3 = 0; a3 < r3 - t3; ++a3) this[a3 + t3] = i3[a3 % l2];
      }
      return this;
    };
    var k = /[^+/0-9A-Za-z-_]/g;
    function E(e3, t3) {
      t3 = t3 || 1 / 0;
      for (var r3, n3 = e3.length, a3 = null, o3 = [], i3 = 0; i3 < n3; ++i3) {
        if ((r3 = e3.charCodeAt(i3)) > 55295 && r3 < 57344) {
          if (!a3) {
            if (r3 > 56319 || i3 + 1 === n3) {
              (t3 -= 3) > -1 && o3.push(239, 191, 189);
              continue;
            }
            a3 = r3;
            continue;
          }
          if (r3 < 56320) {
            (t3 -= 3) > -1 && o3.push(239, 191, 189), a3 = r3;
            continue;
          }
          r3 = (a3 - 55296 << 10 | r3 - 56320) + 65536;
        } else a3 && (t3 -= 3) > -1 && o3.push(239, 191, 189);
        if (a3 = null, r3 < 128) {
          if ((t3 -= 1) < 0) break;
          o3.push(r3);
        } else if (r3 < 2048) {
          if ((t3 -= 2) < 0) break;
          o3.push(r3 >> 6 | 192, 63 & r3 | 128);
        } else if (r3 < 65536) {
          if ((t3 -= 3) < 0) break;
          o3.push(r3 >> 12 | 224, r3 >> 6 & 63 | 128, 63 & r3 | 128);
        } else if (r3 < 1114112) {
          if ((t3 -= 4) < 0) break;
          o3.push(r3 >> 18 | 240, r3 >> 12 & 63 | 128, r3 >> 6 & 63 | 128, 63 & r3 | 128);
        } else throw Error("Invalid code point");
      }
      return o3;
    }
    function j(e3) {
      for (var t3 = [], r3 = 0; r3 < e3.length; ++r3) t3.push(255 & e3.charCodeAt(r3));
      return t3;
    }
    function A(e3) {
      return n2.toByteArray((function(e4) {
        if ((e4 = (e4 = e4.split("=")[0]).trim().replace(k, "")).length < 2) return "";
        for (; e4.length % 4 != 0; ) e4 += "=";
        return e4;
      })(e3));
    }
    function C(e3, t3, r3, n3) {
      for (var a3 = 0; a3 < n3 && !(a3 + r3 >= t3.length) && !(a3 >= e3.length); ++a3) t3[a3 + r3] = e3[a3];
      return a3;
    }
    function O(e3, t3) {
      return e3 instanceof t3 || null != e3 && null != e3.constructor && null != e3.constructor.name && e3.constructor.name === t3.name;
    }
    var P = (function() {
      for (var e3 = "0123456789abcdef", t3 = Array(256), r3 = 0; r3 < 16; ++r3) for (var n3 = 16 * r3, a3 = 0; a3 < 16; ++a3) t3[n3 + a3] = e3[r3] + e3[a3];
      return t3;
    })();
  }, 321: function(e2, t2) {
    t2.read = function(e3, t3, r2, n2, a2) {
      var o2, i2, s = 8 * a2 - n2 - 1, l = (1 << s) - 1, u = l >> 1, c = -7, d = r2 ? a2 - 1 : 0, f = r2 ? -1 : 1, p = e3[t3 + d];
      for (d += f, o2 = p & (1 << -c) - 1, p >>= -c, c += s; c > 0; o2 = 256 * o2 + e3[t3 + d], d += f, c -= 8) ;
      for (i2 = o2 & (1 << -c) - 1, o2 >>= -c, c += n2; c > 0; i2 = 256 * i2 + e3[t3 + d], d += f, c -= 8) ;
      if (0 === o2) o2 = 1 - u;
      else {
        if (o2 === l) return i2 ? NaN : 1 / 0 * (p ? -1 : 1);
        i2 += Math.pow(2, n2), o2 -= u;
      }
      return (p ? -1 : 1) * i2 * Math.pow(2, o2 - n2);
    }, t2.write = function(e3, t3, r2, n2, a2, o2) {
      var i2, s, l, u = 8 * o2 - a2 - 1, c = (1 << u) - 1, d = c >> 1, f = 5960464477539062e-23 * (23 === a2), p = n2 ? 0 : o2 - 1, y = n2 ? 1 : -1, h = +(t3 < 0 || 0 === t3 && 1 / t3 < 0);
      for (isNaN(t3 = Math.abs(t3)) || t3 === 1 / 0 ? (s = +!!isNaN(t3), i2 = c) : (i2 = Math.floor(Math.log(t3) / Math.LN2), t3 * (l = Math.pow(2, -i2)) < 1 && (i2--, l *= 2), i2 + d >= 1 ? t3 += f / l : t3 += f * Math.pow(2, 1 - d), t3 * l >= 2 && (i2++, l /= 2), i2 + d >= c ? (s = 0, i2 = c) : i2 + d >= 1 ? (s = (t3 * l - 1) * Math.pow(2, a2), i2 += d) : (s = t3 * Math.pow(2, d - 1) * Math.pow(2, a2), i2 = 0)); a2 >= 8; e3[r2 + p] = 255 & s, p += y, s /= 256, a2 -= 8) ;
      for (i2 = i2 << a2 | s, u += a2; u > 0; e3[r2 + p] = 255 & i2, p += y, i2 /= 256, u -= 8) ;
      e3[r2 + p - y] |= 128 * h;
    };
  } }, o = {};
  function i(e2) {
    var t2 = o[e2];
    if (void 0 !== t2) return t2.exports;
    var r2 = o[e2] = { exports: {} }, n2 = true;
    try {
      a[e2](r2, r2.exports, i), n2 = false;
    } finally {
      n2 && delete o[e2];
    }
    return r2.exports;
  }
  i.ab = "/ROOT/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.0_@opentelemetry+api@1.9.1_@playwright+test@1.62.1_@types+_5a54af28fb2ec2bbde711a7454bcebbf/node_modules/next/dist/compiled/buffer/", t.exports = i(230);
}, 543784, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var a = { bindSnapshot: function() {
    return c;
  }, createAsyncLocalStorage: function() {
    return u;
  }, createSnapshot: function() {
    return d;
  } };
  for (var o in a) Object.defineProperty(r, o, { enumerable: true, get: a[o] });
  let i = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", { value: "E504", enumerable: false, configurable: true });
  class s {
    disable() {
      throw i;
    }
    getStore() {
    }
    run() {
      throw i;
    }
    exit() {
      throw i;
    }
    enterWith() {
      throw i;
    }
    static bind(e2) {
      return e2;
    }
  }
  let l = "u" > typeof globalThis && globalThis.AsyncLocalStorage;
  function u() {
    return l ? new l() : new s();
  }
  function c(e2) {
    return l ? l.bind(e2) : s.bind(e2);
  }
  function d() {
    return l ? l.snapshot() : function(e2, ...t2) {
      return e2(...t2);
    };
  }
}, 157912, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "workAsyncStorageInstance", { enumerable: true, get: function() {
    return a;
  } });
  let a = (0, e.r(543784).createAsyncLocalStorage)();
}, 824209, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "workAsyncStorage", { enumerable: true, get: function() {
    return a.workAsyncStorageInstance;
  } });
  let a = e.r(157912);
}, 960318, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "BailoutToCSR", { enumerable: true, get: function() {
    return o;
  } });
  let a = e.r(292638);
  function o({ reason: e2, children: t2 }) {
    if ("u" < typeof window) throw Object.defineProperty(new a.BailoutToCSRError(e2), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
    return t2;
  }
}, 470465, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "PreloadChunks", { enumerable: true, get: function() {
    return u;
  } });
  let a = e.r(68982), o = e.r(403432), i = e.r(824209), s = e.r(542145), l = e.r(654216);
  function u({ moduleIds: e2 }) {
    if ("u" > typeof window) return null;
    let t2 = i.workAsyncStorage.getStore();
    if (void 0 === t2) return null;
    let r2 = [];
    if (t2.reactLoadableManifest && e2) {
      let n3 = t2.reactLoadableManifest;
      for (let t3 of e2) {
        if (!n3[t3]) continue;
        let e3 = n3[t3].files;
        r2.push(...e3);
      }
    }
    if (0 === r2.length) return null;
    let n2 = (0, l.getAssetTokenQuery)();
    return (0, a.jsx)(a.Fragment, { children: r2.map((e3) => {
      let r3 = `${t2.assetPrefix}/_next/${(0, s.encodeURIPath)(e3)}${n2}`;
      return e3.endsWith(".css") ? (0, a.jsx)("link", { precedence: "dynamic", href: r3, rel: "stylesheet", as: "style", nonce: t2.nonce }, e3) : ((0, o.preload)(r3, { as: "script", fetchPriority: "low", nonce: t2.nonce }), null);
    }) });
  }
}, 919084, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "default", { enumerable: true, get: function() {
    return c;
  } });
  let a = e.r(68982), o = e.r(856757), i = e.r(960318), s = e.r(470465);
  function l(e2) {
    return { default: e2 && "default" in e2 ? e2.default : e2 };
  }
  let u = { loader: () => Promise.resolve(l(() => null)), loading: null, ssr: true }, c = function(e2) {
    let t2 = { ...u, ...e2 }, r2 = (0, o.lazy)(() => t2.loader().then(l)), n2 = t2.loading;
    function c2(e3) {
      let l2 = n2 ? (0, a.jsx)(n2, { isLoading: true, pastDelay: true, error: null }) : null, u2 = !t2.ssr || !!t2.loading, c3 = u2 ? o.Suspense : o.Fragment, d = t2.ssr ? (0, a.jsxs)(a.Fragment, { children: ["u" < typeof window ? (0, a.jsx)(s.PreloadChunks, { moduleIds: t2.modules }) : null, (0, a.jsx)(r2, { ...e3 })] }) : (0, a.jsx)(i.BailoutToCSR, { reason: "next/dynamic", children: (0, a.jsx)(r2, { ...e3 }) });
      return (0, a.jsx)(c3, { ...u2 ? { fallback: l2 } : {}, children: d });
    }
    return c2.displayName = "LoadableComponent", c2;
  };
}, 969436, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "default", { enumerable: true, get: function() {
    return o;
  } });
  let a = e.r(481258)._(e.r(919084));
  function o(e2, t2) {
    let r2 = {};
    "function" == typeof e2 && (r2.loader = e2);
    let n2 = { ...r2, ...t2 };
    return (0, a.default)({ ...n2, modules: n2.loadableGenerated?.modules });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: true }), Object.assign(r.default, r), t.exports = r.default);
}, 992766, (e, t, r) => {
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = e.r(300593);
}, 838835, (e, t, r) => {
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = e.r(317131);
}, 965079, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = Object.defineProperty, a = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable, s = (e2, t2, r2) => t2 in e2 ? n(e2, t2, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[t2] = r2, l = (e2, t2) => {
    for (var r2 in t2 || (t2 = {})) o.call(t2, r2) && s(e2, r2, t2[r2]);
    if (a) for (var r2 of a(t2)) i.call(t2, r2) && s(e2, r2, t2[r2]);
    return e2;
  }, u = (e2, t2) => {
    let r2 = "[react-use-intercom]";
    switch (e2) {
      case "info":
      default:
        console.log(`${r2} ${t2}`);
        break;
      case "warn":
        console.warn(`${r2} ${t2}`);
        break;
      case "error":
        console.error(`${r2} ${t2}`);
    }
  }, c = "u" < typeof window, d = (e2) => (Object.keys(e2).forEach((t2) => {
    e2[t2] && "object" == typeof e2[t2] ? d(e2[t2]) : void 0 === e2[t2] && delete e2[t2];
  }), e2), f = (e2, ...t2) => {
    if (!c && window.Intercom) return window.Intercom.apply(null, [e2, ...t2]);
    u("error", `${e2} Intercom instance is not initalized yet`);
  }, p = t.createContext(void 0), y = (e2) => l({ company_id: e2.companyId, name: e2.name, created_at: e2.createdAt, plan: e2.plan, monthly_spend: e2.monthlySpend, user_count: e2.userCount, size: e2.size, website: e2.website, industry: e2.industry }, e2.customAttributes), h = (e2) => {
    var t2;
    let r2;
    return d(l(l({}, { custom_launcher_selector: e2.customLauncherSelector, alignment: e2.alignment, vertical_padding: e2.verticalPadding, horizontal_padding: e2.horizontalPadding, z_index: e2.zIndex, hide_default_launcher: e2.hideDefaultLauncher, session_duration: e2.sessionDuration, action_color: e2.actionColor, background_color: e2.backgroundColor, link_color: e2.linkColor, theme_mode: e2.themeMode, messenger_style_id: e2.messengerStyleId, hide_notifications: e2.hideNotifications }), l({ email: e2.email, user_id: e2.userId, created_at: e2.createdAt, name: e2.name, phone: e2.phone, last_request_at: e2.lastRequestAt, unsubscribed_from_emails: e2.unsubscribedFromEmails, language_override: e2.languageOverride, utm_campaign: e2.utmCampaign, utm_content: e2.utmContent, utm_medium: e2.utmMedium, utm_source: e2.utmSource, utm_term: e2.utmTerm, avatar: e2.avatar && { type: (r2 = e2.avatar).type, image_url: r2.imageUrl }, user_hash: e2.userHash, company: e2.company && y(e2.company), companies: null == (t2 = e2.companies) ? void 0 : t2.map(y), intercom_user_jwt: e2.intercomUserJwt, page_title: e2.pageTitle, auth_tokens: e2.authTokens }, e2.customAttributes)));
  };
  e.s(["IntercomProvider", 0, (e2) => {
    var { appId: r2, autoBoot: n2 = false, autoBootProps: s2, children: d2, crossOrigin: y2, onHide: g, onLoad: m, onLoadFailed: w, onShow: v, onUnreadCountChange: M, onUserEmailSupplied: b, shouldInitialize: _ = !c, apiBase: x, initializeDelay: k, cspNonce: E } = e2, j = ((e3, t2) => {
      var r3 = {};
      for (var n3 in e3) o.call(e3, n3) && 0 > t2.indexOf(n3) && (r3[n3] = e3[n3]);
      if (null != e3 && a) for (var n3 of a(e3)) 0 > t2.indexOf(n3) && i.call(e3, n3) && (r3[n3] = e3[n3]);
      return r3;
    })(e2, ["appId", "autoBoot", "autoBootProps", "children", "crossOrigin", "onHide", "onLoad", "onLoadFailed", "onShow", "onUnreadCountChange", "onUserEmailSupplied", "shouldInitialize", "apiBase", "initializeDelay", "cspNonce"]);
    let A = t.useRef(false), C = t.useRef(false), [O, P] = t.useState(false), S = Object.keys(j).filter((e3) => !e3.startsWith("data-"));
    S.length > 0 && u("warn", `some invalid props were passed to IntercomProvider. Please check following props: ${S.join(", ")}.`);
    let B = t.useCallback((e3) => {
      if (!window.Intercom && !_) return void u("warn", "Intercom instance is not initialized because `shouldInitialize` is set to `false` in `IntercomProvider`");
      if (A.current) return;
      f("onHide", () => {
        P(false), null == g || g();
      }), f("onShow", () => {
        P(true), null == v || v();
      }), f("onUserEmailSupplied", b), M && f("onUnreadCountChange", M);
      let t2 = l(l({ app_id: r2 }, x && { api_base: x }), e3 && h(e3));
      window.intercomSettings = t2, f("boot", t2), A.current = true;
    }, [x, r2, g, v, M, b, _]);
    c || !_ || C.current || (((e3, t2 = 0, r3, n3, a2, o2) => {
      var i2 = window, s3 = i2.Intercom;
      if ("function" == typeof s3) s3("reattach_activator"), s3("update", i2.intercomSettings);
      else {
        var l2 = document, u2 = function() {
          u2.c(arguments);
        };
        u2.q = [], u2.c = function(e4) {
          u2.q.push(e4);
        }, i2.Intercom = u2;
        var c2 = function() {
          setTimeout(function() {
            var t3 = l2.createElement("script");
            t3.type = "text/javascript", t3.async = true, r3 && t3.setAttribute("nonce", r3), n3 && (t3.crossOrigin = n3), t3.src = "https://widget.intercom.io/widget/" + e3, a2 && t3.addEventListener("load", a2), o2 && t3.addEventListener("error", o2);
            var i3 = l2.getElementsByTagName("script")[0];
            i3.parentNode.insertBefore(t3, i3);
          }, t2);
        };
        "complete" === document.readyState ? c2() : i2.attachEvent ? i2.attachEvent("onload", c2) : i2.addEventListener("load", c2, false);
      }
    })(r2, k, E, y2, m, w), n2 && B(s2), C.current = true);
    let I = t.useCallback((e3, t2) => window.Intercom || _ ? A.current ? t2() : void u("warn", `"${e3}" was called but Intercom has not booted yet. Please call 'boot' before calling '${e3}' or set 'autoBoot' to true in the IntercomProvider.`) : void u("warn", "Intercom instance is not initialized because `shouldInitialize` is set to `false` in `IntercomProvider`"), [_]), L = t.useCallback(() => {
      A.current && (f("shutdown"), delete window.intercomSettings, A.current = false);
    }, []), R = t.useCallback(() => {
      A.current && (f("shutdown"), delete window.Intercom, delete window.intercomSettings, A.current = false);
    }, []), N = t.useCallback(() => {
      I("update", () => {
        f("update", { last_request_at: Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3) });
      });
    }, [I]), T = t.useCallback((e3) => {
      I("update", () => {
        if (!e3) return void N();
        let t2 = h(e3);
        window.intercomSettings = l(l({}, window.intercomSettings), t2), f("update", t2);
      });
    }, [I, N]), q = t.useCallback(() => {
      I("hide", () => {
        f("hide");
      });
    }, [I]), z = t.useCallback(() => {
      I("show", () => f("show"));
    }, [I]), K = t.useCallback(() => {
      I("showMessages", () => {
        f("showMessages");
      });
    }, [I]), U = t.useCallback((e3) => {
      I("showNewMessage", () => {
        e3 ? f("showNewMessage", e3) : f("showNewMessage");
      });
    }, [I]), D = t.useCallback(() => I("getVisitorId", () => f("getVisitorId")), [I]), $ = t.useCallback((e3) => {
      I("startTour", () => {
        f("startTour", e3);
      });
    }, [I]), W = t.useCallback((e3) => {
      I("startChecklist", () => {
        f("startChecklist", e3);
      });
    }, [I]), F = t.useCallback((e3, t2) => {
      I("trackEvent", () => {
        t2 ? f("trackEvent", e3, t2) : f("trackEvent", e3);
      });
    }, [I]), H = t.useCallback((e3) => I("showArticle", () => {
      f("showArticle", e3);
    }), [I]), V = t.useCallback((e3) => I("showSpace", () => {
      f("showSpace", e3);
    }), [I]), Y = t.useCallback((e3) => {
      I("startSurvey", () => {
        f("startSurvey", e3);
      });
    }, [I]), X = t.useCallback((e3) => I("showNews", () => {
      f("showNews", e3);
    }), [I]), J = t.useCallback((e3) => I("showTicket", () => {
      f("showTicket", e3);
    }), [I]), Z = t.useCallback((e3) => I("showConversation", () => {
      f("showConversation", e3);
    }), [I]), G = t.useCallback((e3) => {
      I("hideNotifications", () => {
        f("hideNotifications", e3);
      });
    }, [I]), Q = t.useCallback((e3) => {
      I("startConversation", () => {
        f("startConversation", e3);
      });
    }, [I]), ee = t.useCallback((e3) => {
      I("setAuthTokens", () => {
        f("setAuthTokens", e3);
      });
    }, [I]), et = t.useMemo(() => ({ boot: B, shutdown: L, hardShutdown: R, update: T, hide: q, show: z, isOpen: O, showMessages: K, showNewMessage: U, startConversation: Q, getVisitorId: D, startTour: $, startChecklist: W, trackEvent: F, showArticle: H, startSurvey: Y, showSpace: V, showNews: X, showTicket: J, showConversation: Z, hideNotifications: G, setAuthTokens: ee }), [B, L, R, T, q, z, O, K, U, Q, D, $, W, F, H, Y, V, X, J, Z, G, ee]);
    return t.createElement(p.Provider, { value: et }, d2);
  }, "useIntercom", 0, () => (() => {
    let e2 = t.useContext(p);
    if (void 0 === e2) throw Error('"useIntercom" must be used within `IntercomProvider`.');
    return e2;
  })()]);
}, 149932, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var r = "u" > typeof window;
  e.s(["isBrowser", 0, r, "noop", 0, function() {
  }, "off", 0, function(e2) {
    for (var t2 = [], r2 = 1; r2 < arguments.length; r2++) t2[r2 - 1] = arguments[r2];
    e2 && e2.removeEventListener && e2.removeEventListener.apply(e2, t2);
  }, "on", 0, function(e2) {
    for (var t2 = [], r2 = 1; r2 < arguments.length; r2++) t2[r2 - 1] = arguments[r2];
    e2 && e2.addEventListener && e2.addEventListener.apply(e2, t2);
  }]);
}, 354615, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useDebounce", 0, function(e2, r2, n2) {
    void 0 === r2 && (r2 = 0), void 0 === n2 && (n2 = []);
    var a, o, i, s, l, u, c, d = (void 0 === (a = r2) && (a = 0), o = (0, t.useRef)(false), i = (0, t.useRef)(), s = (0, t.useRef)(e2), l = (0, t.useCallback)(function() {
      return o.current;
    }, []), u = (0, t.useCallback)(function() {
      o.current = false, i.current && clearTimeout(i.current), i.current = setTimeout(function() {
        o.current = true, s.current();
      }, a);
    }, [a]), c = (0, t.useCallback)(function() {
      o.current = null, i.current && clearTimeout(i.current);
    }, []), (0, t.useEffect)(function() {
      s.current = e2;
    }, [e2]), (0, t.useEffect)(function() {
      return u(), c;
    }, [a]), [l, c, u]), f = d[0], p = d[1], y = d[2];
    return (0, t.useEffect)(y, n2), [f, p];
  }], 354615);
}, 325661, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var a = e.r(856757), o = "function" == typeof Object.is ? Object.is : function(e2, t2) {
    return e2 === t2 && (0 !== e2 || 1 / e2 == 1 / t2) || e2 != e2 && t2 != t2;
  }, i = a.useState, s = a.useEffect, l = a.useLayoutEffect, u = a.useDebugValue;
  function c(e2) {
    var t2 = e2.getSnapshot;
    e2 = e2.value;
    try {
      var r2 = t2();
      return !o(e2, r2);
    } catch (e3) {
      return true;
    }
  }
  var d = "u" < typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e2, t2) {
    return t2();
  } : function(e2, t2) {
    var r2 = t2(), n2 = i({ inst: { value: r2, getSnapshot: t2 } }), a2 = n2[0].inst, o2 = n2[1];
    return l(function() {
      a2.value = r2, a2.getSnapshot = t2, c(a2) && o2({ inst: a2 });
    }, [e2, r2, t2]), s(function() {
      return c(a2) && o2({ inst: a2 }), e2(function() {
        c(a2) && o2({ inst: a2 });
      });
    }, [e2]), u(r2), r2;
  };
  r.useSyncExternalStore = void 0 !== a.useSyncExternalStore ? a.useSyncExternalStore : d;
}, 56032, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = e.r(325661);
}, 220206, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var a = e.r(856757), o = e.r(56032), i = "function" == typeof Object.is ? Object.is : function(e2, t2) {
    return e2 === t2 && (0 !== e2 || 1 / e2 == 1 / t2) || e2 != e2 && t2 != t2;
  }, s = o.useSyncExternalStore, l = a.useRef, u = a.useEffect, c = a.useMemo, d = a.useDebugValue;
  r.useSyncExternalStoreWithSelector = function(e2, t2, r2, n2, a2) {
    var o2 = l(null);
    if (null === o2.current) {
      var f = { hasValue: false, value: null };
      o2.current = f;
    } else f = o2.current;
    var p = s(e2, (o2 = c(function() {
      function e3(e4) {
        if (!l2) {
          if (l2 = true, o3 = e4, e4 = n2(e4), void 0 !== a2 && f.hasValue) {
            var t3 = f.value;
            if (a2(t3, e4)) return s2 = t3;
          }
          return s2 = e4;
        }
        if (t3 = s2, i(o3, e4)) return t3;
        var r3 = n2(e4);
        return void 0 !== a2 && a2(t3, r3) ? (o3 = e4, t3) : (o3 = e4, s2 = r3);
      }
      var o3, s2, l2 = false, u2 = void 0 === r2 ? null : r2;
      return [function() {
        return e3(t2());
      }, null === u2 ? void 0 : function() {
        return e3(u2());
      }];
    }, [t2, r2, n2, a2]))[0], o2[1]);
    return u(function() {
      f.hasValue = true, f.value = p;
    }, [p]), d(p), p;
  };
}, 596482, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = e.r(220206);
}, 4130, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(915501), n = e.i(38061), a = e.i(618901), o = e.i(551360);
  try {
    var i = window;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AppsAppCard", 0, function(e2) {
    let i2 = "app" in e2, s = i2 ? `/apps/${e2.app.slug}` : e2.url, l = i2 ? e2.app.short_description : e2.description, u = i2 ? e2.app.logo_url : e2.logo, c = i2 ? e2.app.title : e2.title, d = i2 ? e2.app.developer_account.title : e2.developerName, f = i2 ? e2.app.is_official : e2.isOfficial ?? false;
    return (0, t.jsxs)(a.AttioLinkCard, { href: s, className: "gap-3.5 p-5 max-lg:p-4 max-xl:gap-3", children: [(0, t.jsx)(a.AttioLinkCardHeader, { children: (0, t.jsx)("div", { className: "flex h-full w-full flex-col", children: (0, t.jsxs)("div", { className: (0, o.cn)("flex items-center gap-2.5", "max-xl:gap-2"), children: [(0, t.jsxs)("div", { className: (0, o.cn)("relative size-10 overflow-hidden rounded-[30%] bg-primary-background"), children: [(0, t.jsx)(r.default, { src: u, alt: c, width: 100, height: 100, className: "size-full object-cover" }), (0, t.jsx)("div", { className: "absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_1px] shadow-black-100/10" })] }), (0, t.jsxs)("div", { className: "flex flex-col", children: [(0, t.jsxs)("div", { className: "flex items-center gap-0.5", children: [(0, t.jsx)(a.AttioLinkCardTitle, { as: "h4", className: (0, o.cn)("font-semibold!", "max-xl:text-sm"), children: c }), f && (0, t.jsx)(n.AppsOfficialBadge, { tooltip: true, className: "size-3 xl:size-3.5" })] }), d && (0, t.jsxs)("p", { className: "shrink truncate text-accent-foreground text-sm", children: ["By ", d] })] })] }) }) }), (0, t.jsx)(a.AttioLinkCardDescription, { className: "line-clamp-2 text-pretty pr-2 text-accent-foreground", children: l })] });
  }]);
}, 94562, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757), n = e.i(354615), a = e.i(149932);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let i = function(e2, t2, n2) {
    if (!a.isBrowser) return [t2, a.noop, a.noop];
    if (!e2) throw Error("useLocalStorage key may not be falsy");
    var o2 = n2 ? n2.raw ? function(e3) {
      return e3;
    } : n2.deserializer : JSON.parse, i2 = (0, r.useRef)(function(e3) {
      try {
        var r2 = n2 ? n2.raw ? String : n2.serializer : JSON.stringify, a2 = localStorage.getItem(e3);
        if (null !== a2) return o2(a2);
        return t2 && localStorage.setItem(e3, r2(t2)), t2;
      } catch (e4) {
        return t2;
      }
    }), s2 = (0, r.useState)(function() {
      return i2.current(e2);
    }), l2 = s2[0], u2 = s2[1];
    (0, r.useLayoutEffect)(function() {
      return u2(i2.current(e2));
    }, [e2]);
    var c2 = (0, r.useCallback)(function(t3) {
      try {
        var r2 = "function" == typeof t3 ? t3(l2) : t3;
        if (void 0 === r2) return;
        var a2 = void 0;
        a2 = n2 ? n2.raw ? "string" == typeof r2 ? r2 : JSON.stringify(r2) : n2.serializer ? n2.serializer(r2) : JSON.stringify(r2) : JSON.stringify(r2), localStorage.setItem(e2, a2), u2(o2(a2));
      } catch (e3) {
      }
    }, [e2, u2]);
    return [l2, c2, (0, r.useCallback)(function() {
      try {
        localStorage.removeItem(e2), u2(void 0);
      } catch (e3) {
      }
    }, [e2, u2])];
  };
  var s = e.i(965079);
  try {
    var l = window;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function u(e2) {
    return (0, t.jsxs)("svg", { viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e2, children: [(0, t.jsx)("path", { d: "M13.512 10.317a4.506 4.506 0 0 1-1.576 1.704 4.055 4.055 0 0 1-2.15.623 4.055 4.055 0 0 1-2.15-.623 4.507 4.507 0 0 1-1.577-1.704", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), (0, t.jsx)("path", { d: "M8.31 6.829a.465.465 0 1 1-.93 0 .465.465 0 0 1 .93 0ZM12.037 6.829a.465.465 0 1 1-.93 0 .465.465 0 0 1 .93 0Z", fill: "currentColor", stroke: "currentColor", strokeWidth: "1.2" }), (0, t.jsx)("circle", { cx: "9.75", cy: "9", r: "7.25", stroke: "currentColor", strokeWidth: "1.2" })] });
  }
  try {
    var c = window;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function d(e2) {
    return (0, t.jsxs)("svg", { viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e2, children: [(0, t.jsx)("path", { d: "M13.512 12.644a4.505 4.505 0 0 0-1.576-1.704 4.054 4.054 0 0 0-2.15-.623c-.755 0-1.497.215-2.15.623a4.505 4.505 0 0 0-1.577 1.704", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }), (0, t.jsx)("path", { d: "M8.31 6.829a.465.465 0 1 1-.93 0 .465.465 0 0 1 .93 0ZM12.037 6.829a.465.465 0 1 1-.93 0 .465.465 0 0 1 .93 0Z", fill: "currentColor", stroke: "currentColor", strokeWidth: "1.2" }), (0, t.jsx)("circle", { cx: "9.75", cy: "9", r: "7.25", stroke: "currentColor", strokeWidth: "1.2" })] });
  }
  var f = e.i(167815), p = e.i(551360);
  try {
    var y = window;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["HelpArticleFeedbackWidgetClient", 0, function({ articleId: e2, articleTitle: a2, handleIncrementRatingAction: o2 }) {
    let { trackEvent: l2 } = (0, s.useIntercom)(), [c2, y2, h] = i(`help-article-feedback-${e2}`), [g, m] = (0, r.useState)(null);
    function w(e3) {
      let t2 = e3 ? "positive" : "negative";
      if (c2 === t2) {
        h(), m(null);
        return;
      }
      y2(t2), m({ rollbackTo: c2, type: e3 ? "likes" : "dislikes" }), e3 || l2("help-article-feedback-negative", { title: a2 });
    }
    return (0, n.useDebounce)(async () => {
      g && ((await o2(g.type)).success || (g.rollbackTo ? y2(g.rollbackTo) : h()), m(null));
    }, 3e3, [g]), (0, t.jsx)("div", { className: "mt-15 flex justify-center", children: (0, t.jsxs)("div", { className: (0, p.cn)("flex w-fit flex-col items-center gap-3 rounded-xl bg-primary-background p-4", "border border-subtle-stroke"), children: [(0, t.jsx)("span", { className: "px-2 text-center text-accent-foreground", children: "Did this article answer your question?" }), (0, t.jsxs)("div", { className: "flex w-full justify-center gap-2", children: [(0, t.jsxs)(f.Button, { variant: "ghost", size: "md", onClick: () => w(true), className: (0, p.cn)("flex w-full items-center justify-center gap-x-1.5 rounded-lg bg-secondary-background! transition-colors", { "hover:bg-surface-subtle! active:bg-surface!": "positive" !== c2 }, { "bg-blue-500/10! text-blue-500": "positive" === c2 }), children: [(0, t.jsx)(u, { className: "size-4" }), (0, t.jsx)("span", { children: "Yes" })] }), (0, t.jsxs)(f.Button, { variant: "ghost", size: "md", onClick: () => w(false), className: (0, p.cn)("flex w-full items-center justify-center gap-x-1.5 rounded-lg bg-secondary-background! transition-colors", { "hover:bg-surface-subtle! active:bg-surface!": "negative" !== c2 }, { "bg-red-500/10! text-red-500": "negative" === c2 }), children: [(0, t.jsx)(d, { className: "size-4" }), (0, t.jsx)("span", { children: "No" })] })] })] }) });
  }], 94562);
}, 962718, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(551360);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AttioCard", 0, function({ borderRadius: e2 = "20px", padding: n2 = "20px", className: a, style: o, children: i, innerProps: s, ...l }) {
    let { className: u, style: c, ...d } = s ?? {};
    return (0, t.jsx)("div", { className: (0, r.cn)("relative border border-black-100/5 backdrop-blur-xs dark:border-white-100/5", a), style: { borderRadius: e2, ...o }, ...l, children: (0, t.jsx)("div", { className: (0, r.cn)("overflow-hidden bg-primary-background shadow-attio-5 dark:bg-secondary-background", u), style: { borderRadius: `calc(${e2} - 1px)`, padding: n2, ...c }, ...d, children: i }) });
  }]);
}, 308236, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(551360);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AttioContainer", 0, function({ children: e2, className: n2, fullWidthMobile: a, innerProps: o, ...i }) {
    let { className: s, style: l, ...u } = o ?? {};
    return (0, t.jsx)("div", { className: (0, r.cn)("container flex flex-1 flex-col", { "max-lg:contents": a }, n2), ...i, children: (0, t.jsx)("div", { className: (0, r.cn)("flex w-full flex-1 flex-col border-subtle-stroke border-x", { "max-lg:border-none": a }, s), style: l, ...u, children: e2 }) });
  }]);
}, 108899, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(551360);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AttioDecoration", 0, function({ className: e2, children: n2, ...a }) {
    return (0, t.jsx)("div", { "aria-hidden": "true", className: (0, r.cn)("grid h-40 w-full grid-cols-12 overflow-hidden", "max-xl:h-30", "max-lg:h-25", e2), ...a, children: (0, t.jsx)("div", { className: "col-[2/-2] flex justify-between", children: n2 }) });
  }]);
}, 968351, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(551360);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AttioHoverUnderlay", 0, function({ className: e2, ...n2 }) {
    return (0, t.jsx)("div", { className: (0, r.cn)("pointer-events-none absolute inset-0 bg-secondary-background opacity-0", "transition-opacity duration-300 ease-in-out", "group-hover:opacity-80 group-hover:duration-50", "group-active:opacity-100 group-active:duration-50", e2), ...n2 });
  }]);
}, 618901, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757), n = e.i(968351), a = e.i(508324), o = e.i(139895), i = e.i(194510), s = e.i(551360);
  try {
    var l = window;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let u = (0, r.createContext)({ isExternal: false });
  e.s(["AttioLinkCard", 0, function({ href: e2, target: r2, rel: i2, children: l2, className: c, style: d }) {
    let f = (0, o.useIsTouchScreen)();
    return (0, t.jsx)(u.Provider, { value: { isExternal: "_blank" === r2 }, children: (0, t.jsxs)(a.AttioLink, { href: e2, target: r2, rel: i2, className: (0, s.cn)("group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-subtle-stroke p-6 pt-5.5", "transition-colors duration-400 ease-in-out", "hover:border-white-800 hover:duration-150", "active:border-white-800 active:duration-50", c), style: d, children: [(0, t.jsx)(n.AttioHoverUnderlay, { className: (0, s.cn)({ "group-hover:opacity-0": f }) }), l2] }) });
  }, "AttioLinkCardBody", 0, function({ children: e2, className: r2, ...n2 }) {
    return (0, t.jsx)("div", { className: (0, s.cn)("relative flex flex-col gap-1", r2), ...n2, children: e2 });
  }, "AttioLinkCardDescription", 0, function({ as: e2 = "p", children: r2, className: n2, ...a2 }) {
    return (0, t.jsx)(e2, { className: (0, s.cn)("relative text-balance text-sm text-tertiary-foreground", n2), ...a2, children: r2 });
  }, "AttioLinkCardHeader", 0, function({ children: e2, className: n2, ...a2 }) {
    let { isExternal: l2 } = (0, r.useContext)(u), c = (0, o.useIsTouchScreen)();
    return (0, t.jsxs)("div", { className: (0, s.cn)("relative flex items-center justify-between", n2), ...a2, children: [e2, (0, t.jsx)(i.ArrowRight14, { className: (0, s.cn)("relative order-last shrink-0 text-secondary-foreground opacity-0", "-translate-x-0.25 transition-[opacity,translate] duration-400 ease-in-out", "group-hover:translate-0 group-hover:opacity-100 group-hover:duration-150", "group-active:translate-0 group-active:opacity-100 group-active:duration-50", { "-rotate-45": l2 }, { "group-hover:opacity-0": c }) })] });
  }, "AttioLinkCardTitle", 0, function({ as: e2 = "h3", children: r2, className: n2, ...a2 }) {
    return (0, t.jsx)(e2, { className: (0, s.cn)("relative font-semibold text-secondary-foreground", n2), ...a2, children: r2 });
  }]);
}, 508324, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(224253);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AttioLink", 0, function({ href: e2, target: n2, rel: a, className: o, style: i, children: s, ...l }) {
    let u = e2.startsWith("/");
    e2.startsWith("/experts") && (u = false);
    let c = u ? r.default : "a", d = a;
    return a || "_blank" !== n2 || (d = "noopener noreferrer"), (0, t.jsx)(c, { href: e2, target: n2, rel: d, className: o, style: i, ...l, children: s });
  }]);
}, 269916, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(915501), n = e.i(145408);
  try {
    var a = window;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AttioStoryblokImage", 0, function({ imageAsset: e2, alt: a2, style: o, ...i }) {
    if (!e2.filename) throw console.error("Asset data:", e2), Error("AttioStoryblokImage: property 'filename' is required");
    let { width: s, height: l } = (0, n.getStoryblokAssetDimensions)(e2), { objectPosition: u } = (0, n.getStoryblokAssetObjectPosition)(e2) || {};
    return (0, t.jsx)(r.default, { src: e2.filename, alt: a2 || e2.alt || "", width: s, height: l, style: { objectPosition: u, ...o }, ...i });
  }]);
}, 171517, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757), n = e.i(551360);
  try {
    var a = window;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AttioDots", 0, function({ size: e2 = 10, className: a2, ...o }) {
    let i = (0, r.useId)();
    return (0, t.jsxs)("svg", { width: "100%", height: "100%", className: (0, n.cn)("text-muted-strong-background", a2), ...o, children: [(0, t.jsx)("defs", { children: (0, t.jsx)("pattern", { id: i, width: e2, height: e2, patternUnits: "userSpaceOnUse", children: (0, t.jsx)("rect", { x: e2 / 2 + 0.5, y: e2 / 2 + 0.5, width: "1", height: "1", fill: "currentColor" }) }) }), (0, t.jsx)("rect", { width: "100%", height: "100%", fill: `url(#${i})` })] });
  }]);
}, 385264, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(551360);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AttioHatch", 0, function({ size: e2 = 7, angle: n2 = 125, className: a, style: o, ...i }) {
    return (0, t.jsx)("div", { className: (0, r.cn)("size-full text-surface-subtle", a), style: { backgroundImage: `repeating-linear-gradient(${n2}deg, transparent, transparent ${e2 - 1}px, currentColor ${e2 - 1}px, currentColor ${e2}px)`, ...o }, ...i });
  }]);
}, 894584, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(551360);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AttioLine", 0, function({ vertical: e2 = false, dashed: n2 = false, className: a, ...o }) {
    return (0, t.jsx)("svg", { width: e2 ? "1" : "100%", height: e2 ? "100%" : "1", className: (0, r.cn)("text-subtle-stroke", a), ...o, children: (0, t.jsx)("line", { x1: e2 ? "0.5" : "0", y1: e2 ? "0" : "0.5", x2: e2 ? "0.5" : "100%", y2: e2 ? "100%" : "0.5", stroke: "currentColor", strokeDasharray: n2 ? "4 6" : void 0, strokeLinecap: "round" }) });
  }]);
}, 438479, (e) => {
  e.q("/_next/static/immutable/media/avatar-1.3zs_3yu04jho5.jpg");
}, 523062, (e) => {
  e.q("/_next/static/immutable/media/avatar-2.2xbn2jg3tw9hl.jpg");
}, 764620, (e) => {
  e.q("/_next/static/immutable/media/greenleaf-thumbnail.3lsiffar32-bb.jpg");
}, 142525, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(291196), n = e.i(140802), a = e.i(83301), o = e.i(112086), i = e.i(856757), s = e.i(149932);
  try {
    var l = "u" > typeof window ? window : e.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var u = ["mousedown", "touchstart"];
  let c = function(e2, t2, r2) {
    void 0 === r2 && (r2 = u);
    var n2 = (0, i.useRef)(t2);
    (0, i.useEffect)(function() {
      n2.current = t2;
    }, [t2]), (0, i.useEffect)(function() {
      for (var t3 = function(t4) {
        var r3 = e2.current;
        r3 && !r3.contains(t4.target) && n2.current(t4);
      }, a2 = 0, o2 = r2; a2 < o2.length; a2++) {
        var i2 = o2[a2];
        (0, s.on)(document, i2, t3);
      }
      return function() {
        for (var e3 = 0, n3 = r2; e3 < n3.length; e3++) {
          var a3 = n3[e3];
          (0, s.off)(document, a3, t3);
        }
      };
    }, [r2, e2]);
  };
  var d = e.i(167815), f = e.i(397441), p = e.i(551360);
  try {
    var y = window;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function h({ children: e2, uniqueId: r2, onToggleOpen: n2, isOpen: a2, ref: i2 }) {
    return (0, t.jsx)(o.motion.button, { ref: i2, layoutId: `dialog-${r2}`, className: "relative block cursor-zoom-in", onClick: () => {
      n2();
    }, onKeyDown: (e3) => {
      ("Enter" === e3.key || " " === e3.key) && (e3.preventDefault(), n2());
    }, role: "button", "aria-haspopup": "dialog", "aria-expanded": a2, "aria-controls": `dialog-content-${r2}`, children: e2 });
  }
  e.s(["ImageDialog", 0, ({ children: e2, triggerContent: s2, dialogContent: l2, dialogContentLeft: u2, dialogContentRight: y2 }) => {
    let [g, m] = (0, i.useState)(false), w = (0, i.useId)(), v = (0, i.useRef)(null), M = (0, i.useRef)(null), b = !!(u2 || y2);
    return (0, i.useEffect)(() => {
      let e3 = (e4) => {
        "Escape" === e4.key && g && (e4.preventDefault(), m(false), v.current?.focus());
      };
      return document.addEventListener("keydown", e3), () => {
        document.removeEventListener("keydown", e3);
      };
    }, [g]), (0, i.useEffect)(() => {
      let e3 = () => {
        g && (m(false), v.current?.focus());
      };
      return document.addEventListener("scroll", e3, { passive: true }), () => {
        document.removeEventListener("scroll", e3);
      };
    }, [g]), c(M, () => {
      g && m(false);
    }), (0, t.jsxs)(a.MotionConfig, { transition: { duration: 0.24, ease: [0.33, 1, 0.68, 1] }, children: [(0, t.jsx)(h, { ref: v, uniqueId: w, isOpen: g, onToggleOpen: () => {
      m((e3) => !e3);
    }, children: s2 }), e2, (0, t.jsx)(n.AnimatePresence, { initial: false, mode: "sync", children: g && (0, t.jsxs)(r.Root, { children: [(0, t.jsx)(o.motion.div, { className: "fixed inset-0 z-(--dialog-overlay-z-index) h-full w-full bg-white-800/40 backdrop-blur-xs dark:bg-black-100/40", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }, `backdrop-${w}`), (0, t.jsxs)("div", { className: "fixed inset-8 z-(--dialog-content-z-index) flex items-center justify-center", children: [(0, t.jsxs)("div", { ref: M, className: (0, p.cn)("grid max-w-full items-center", b && ["grid-cols-[1fr_1fr] gap-3 [grid-template-areas:'image_image'_'previous_next']", "lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-4 lg:[grid-template-areas:'previous_image_next']"]), role: "dialog", "aria-modal": "true", "aria-labelledby": `dialog-title-${w}`, "aria-describedby": `dialog-description-${w}`, children: [u2 && (0, t.jsx)(o.motion.div, { className: "justify-self-end [grid-area:previous] lg:justify-self-auto", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: (e3) => e3.stopPropagation(), children: u2 }), (0, t.jsx)(o.motion.div, { className: (0, p.cn)("relative grid max-w-(--breakpoint-lg) items-center overflow-hidden", b ? "max-h-[calc(100vh-7.75rem)] [grid-area:image] lg:max-h-[calc(100vh-4rem)]" : "max-h-[calc(100vh-4rem)]"), layoutId: `dialog-${w}`, children: l2 }), y2 && (0, t.jsx)(o.motion.div, { className: "justify-self-start [grid-area:next] lg:justify-self-auto", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: (e3) => e3.stopPropagation(), children: y2 })] }), (0, t.jsx)(o.motion.div, { "aria-label": "Close dialog", className: (0, p.cn)("absolute top-2 right-2"), initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: (0, t.jsx)(d.Button, { size: "smSquare", variant: "outline", onClick: () => m(false), children: (0, t.jsx)(f.Cross18, {}) }) }, `dialog-close-${w}`)] })] }) })] });
  }], 142525);
}, 167815, (e) => {
  "use strict";
  let t, r;
  var n = e.i(68982), a = e.i(603642), o = e.i(7284);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let s = (e2) => "boolean" == typeof e2 ? `${e2}` : 0 === e2 ? "0" : e2, l = o.clsx;
  var u = e.i(551360);
  try {
    var c = window;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let d = (t = "relative inline-flex cursor-pointer items-center justify-center text-nowrap border text-base transition-colors duration-300 ease-in-out hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default", r = { defaultVariants: { variant: "primary" }, variants: { size: { lg: "h-11.5 gap-x-2 rounded-xl px-3.5 text-base has-[>svg:last-child,>img:last-child]:pr-3 has-[>svg:first-child,>img:first-child]:pl-3", md: "h-10 gap-x-2 rounded-xl px-3.25 text-base has-[>svg:last-child,>img:last-child]:pr-2.5 has-[>svg:first-child,>img:first-child]:pl-2.5", mdSquare: "size-10 rounded-xl", responsive: ["h-9 gap-x-1.5 rounded-[10px] px-3 text-sm has-[>svg:last-child,>img:last-child]:pr-2 has-[>svg:first-child,>img:first-child]:pl-2", "max-lg:h-11.5 max-lg:gap-x-2 max-lg:rounded-xl max-lg:px-3.5 max-lg:text-base max-lg:has-[>svg:last-child,>img:last-child]:pr-3 max-lg:has-[>svg:first-child,>img:first-child]:pl-3"], sm: "h-9 gap-x-1.5 rounded-[10px] px-3 text-sm has-[>svg:last-child,>img:last-child]:pr-2 has-[>svg:first-child,>img:first-child]:pl-2", smSquare: "size-9 rounded-[10px]", smSquareResponsive: ["size-9 rounded-[10px]", "max-lg:size-12 max-lg:rounded-xl"], xs: "h-8 gap-x-1.5 rounded-[10px] px-2.5 text-xs has-[>svg:last-child,>img:last-child]:pr-1.5 has-[>svg:first-child,>img:first-child]:pl-1.5", xsSquare: "size-8 rounded-[10px]" }, variant: { ghost: "button-ghost", outline: "button-outline", primary: "button-primary" } } }, (e2) => {
    var n2;
    if ((null == r ? void 0 : r.variants) == null) return l(t, null == e2 ? void 0 : e2.class, null == e2 ? void 0 : e2.className);
    let { variants: a2, defaultVariants: o2 } = r, i2 = Object.keys(a2).map((t2) => {
      let r2 = null == e2 ? void 0 : e2[t2], n3 = null == o2 ? void 0 : o2[t2];
      if (null === r2) return null;
      let i3 = s(r2) || s(n3);
      return a2[t2][i3];
    }), u2 = e2 && Object.entries(e2).reduce((e3, t2) => {
      let [r2, n3] = t2;
      return void 0 === n3 || (e3[r2] = n3), e3;
    }, {});
    return l(t, i2, null == r || null == (n2 = r.compoundVariants) ? void 0 : n2.reduce((e3, t2) => {
      let { class: r2, className: n3, ...a3 } = t2;
      return Object.entries(a3).every((e4) => {
        let [t3, r3] = e4;
        return Array.isArray(r3) ? r3.includes({ ...o2, ...u2 }[t3]) : { ...o2, ...u2 }[t3] === r3;
      }) ? [...e3, r2, n3] : e3;
    }, []), null == e2 ? void 0 : e2.class, null == e2 ? void 0 : e2.className);
  });
  e.s(["Button", 0, function({ className: e2, variant: t2, size: r2, asChild: o2, children: i2, ...s2 }) {
    let l2 = o2 ? a.Slot : "button";
    return (0, n.jsx)(l2, { className: (0, u.cn)(d({ size: r2, variant: t2 }), e2), ...s2, children: i2 });
  }], 167815);
}, 159293, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(833288), n = e.i(824593);
  try {
    var a = window;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["FormTextareaField", 0, ({ name: e2, label: a2, ...o }) => (0, t.jsx)(r.FormField, { name: e2, label: a2, children: (0, t.jsx)(n.FormTextareaInput, { ...o }) })]);
}, 824593, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(551360);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["FormTextareaInput", 0, function({ className: e2, isError: n2, ref: a, ...o }) {
    return (0, t.jsx)("div", { children: (0, t.jsx)("textarea", { ref: a, className: (0, r.cn)("block w-full rounded-[10px] bg-white-100 p-[10px_13px] outline-hidden transition-all duration-300 ease-out", "text-secondary-foreground placeholder:text-black-700 placeholder:text-sm", !n2 && ["border border-[#D3D8DF]", "hover:border-greyscale-light-08 hover:shadow-[0px_1px_4px_rgba(56,_62,_71,_0.1)]", "focus-visible:border-blue-500 focus-visible:ring-[3px] focus-visible:ring-blue-300"], n2 && ["border border-red-500", "hover:border-red-[#CE2E4B] hover:shadow-[0px_1px_4px_rgba(56,_62,_71,_0.1)]", "focus-visible:border-[#CE2E4B] focus-visible:ring-[3px] focus-visible:ring-red-600/30"], e2), rows: 4, ...o }) });
  }]);
}, 985731, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(508324), n = e.i(551360);
  try {
    var a = window;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["LinkInline", 0, function({ href: e2, target: a2, rel: o, variant: i = "color", className: s, style: l, onClick: u, children: c }) {
    return (0, t.jsx)(r.AttioLink, { href: e2, target: a2, rel: o, onClick: u, className: (0, n.cn)("-mx-px rounded-sm px-px underline", "transition-colors duration-400", "hover:duration-150", "active:duration-50", { "hover:decoration-transparent": "underline" === i, "text-link-foreground decoration-transparent hover:text-link-strong-foreground hover:decoration-link-strong-foreground active:text-link-strong-foreground": "color" === i }, s), style: l, children: c });
  }]);
}, 905455, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(112086), n = e.i(856757), a = e.i(167815), o = e.i(551360);
  try {
    var i = window;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["SegmentedControl", 0, ({ items: e2, selectedItem: i2, onSelect: s, className: l }) => {
    let u = (0, n.useId)();
    return (0, t.jsx)(r.motion.div, { layout: true, className: (0, o.cn)("relative isolate grid w-fit gap-0.5 rounded-xl bg-surface-subtle p-0.5", l), style: { gridTemplateColumns: `repeat(${e2.length}, 1fr)` }, children: e2.map((e3) => (0, t.jsxs)("div", { className: "relative", children: [i2 === e3.value && (0, t.jsx)(r.motion.div, { layoutId: `segmented-control-background-${u}`, className: (0, o.cn)("absolute inset-0 z-0 rounded-[10px] bg-primary-background"), style: { boxShadow: "0px 0px 0px 1px rgba(28, 29, 31, 0.04),0px 1px 1px -0.5px rgba(28, 29, 31, 0.04),0px 3px 3px -1.5px rgba(28, 29, 31, 0.04)" }, transition: { duration: 0.4, ease: "easeInOut" } }), (0, t.jsx)(a.Button, { size: "xs", variant: "ghost", className: (0, o.cn)("!text-accent-foreground !bg-transparent relative z-10 w-full text-sm", "hover:!text-tertiary-foreground", "active:!text-primary-foreground", "disabled:!text-primary-foreground"), disabled: i2 === e3.value, onClick: () => s(e3.value), children: e3.label })] }, e3.value)) });
  }]);
}, 618807, (e) => {
  "use strict";
  var t = e.i(992766);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useAppPathname", 0, function() {
    let e2 = (0, t.usePathname)(), [, r2, ...n2] = e2.split("/");
    return "en" !== r2 ? e2 : `/${n2.join("/")}`;
  }], 618807);
}, 895587, (e) => {
  "use strict";
  var t = e.i(68982);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["ArrowRight12", 0, function({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", ...e2, children: (0, t.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.3536 6.35356C10.5488 6.1583 10.5488 5.84171 10.3536 5.64645L7.85355 3.14645C7.65829 2.95118 7.34171 2.95118 7.14645 3.14645C6.95118 3.34171 6.95118 3.65829 7.14645 3.85355L8.79289 5.5L2 5.50001C1.72386 5.50001 1.5 5.72386 1.5 6.00001C1.5 6.27615 1.72386 6.50001 2 6.50001L8.79289 6.5L7.14645 8.14645C6.95118 8.34171 6.95118 8.65829 7.14645 8.85355C7.34171 9.04882 7.65829 9.04882 7.85355 8.85355L10.3536 6.35356Z", fill: "currentColor" }) });
  }]);
}, 194510, (e) => {
  "use strict";
  var t = e.i(68982);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["ArrowRight14", 0, function({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", ...e2, children: (0, t.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.1", d: "M2.25 7h9.5m0 0L8.357 3.5M11.75 7l-3.393 3.5" }) });
  }]);
}, 448747, 79562, (e) => {
  "use strict";
  var t = e.i(68982);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["ChevronDown12", 0, function({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", ...e2, children: (0, t.jsx)("path", { d: "M9.35352 4.14645C9.15826 3.95119 8.84168 3.95118 8.64642 4.14645L5.99997 6.79289L3.35352 4.14645C3.15826 3.95118 2.84168 3.95118 2.64642 4.14645C2.45115 4.34171 2.45115 4.65829 2.64642 4.85355L5.64642 7.85355C5.84168 8.04882 6.15826 8.04882 6.35352 7.85355L9.35352 4.85355C9.54879 4.65829 9.54879 4.34171 9.35352 4.14645Z", fill: "currentColor" }) });
  }], 448747);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["ChevronUp12", 0, function({ ...e2 }) {
    return (0, t.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", ...e2, children: (0, t.jsx)("path", { d: "M2.64646 7.85355C2.84172 8.04882 3.15831 8.04882 3.35357 7.85355L6.00002 5.20711L8.64646 7.85355C8.84172 8.04882 9.15831 8.04882 9.35357 7.85355C9.54883 7.65829 9.54883 7.34171 9.35357 7.14645L6.35357 4.14645C6.15831 3.95118 5.84172 3.95118 5.64646 4.14645L2.64646 7.14645C2.4512 7.34171 2.4512 7.65829 2.64646 7.85355Z", fill: "currentColor" }) });
  }], 79562);
}, 65228, (e) => {
  "use strict";
  var t = e.i(68982);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["ChevronDown", 0, function({ className: e2 }) {
    return (0, t.jsx)("svg", { className: e2, xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", children: (0, t.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2", d: "M5.25 7.125 9 10.875l3.75-3.75" }) });
  }]);
}, 397441, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(551360);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["Cross18", 0, function({ className: e2 }) {
    return (0, t.jsx)("svg", { className: (0, r.cn)("text-black-500 dark:text-white-500", e2), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", width: "18", height: "18", fill: "none", children: (0, t.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.1", d: "m12.5 5.5-7 7m7 0-7-7" }) });
  }]);
}, 134367, (e) => {
  e.q("/_next/static/immutable/media/reporting-hero-product-growth-funnel-chart.1z37honihq1jy.svg");
}, 559203, (e) => {
  e.q("/_next/static/immutable/media/reporting-hero-product-growth-map.2zclmn6c71bh9.svg");
}, 267344, (e) => {
  e.q("/_next/static/immutable/media/reporting-hero-product-growth-pie-chart-mobile.2eg_g_8mntgw2.svg");
}, 498214, (e) => {
  e.q("/_next/static/immutable/media/reporting-hero-product-growth-pie-chart.2bj867bd6sc3y.svg");
}, 249268, (e) => {
  e.q("/_next/static/immutable/media/reporting-hero-revenue-operations-funnel-chart.32kscaaovkke1.svg");
}, 166482, (e) => {
  e.q("/_next/static/immutable/media/reporting-hero-revenue-operations-pie-chart.3rp7_krhsxt1a.svg");
}, 530708, (e) => {
  e.q("/_next/static/immutable/media/reporting-hero-sales-funnel-chart-mobile.0rqd-7ofhubi6.svg");
}, 371019, (e) => {
  e.q("/_next/static/immutable/media/reporting-hero-sales-funnel-chart.35y28zdzp8u30.svg");
}, 807141, (e) => {
  e.q("/_next/static/immutable/media/reporting-hero-sales-map.3kqcthh9e7y28.svg");
}, 647352, (e) => {
  e.q("/_next/static/immutable/media/reporting-hero-sales-pie-chart.2a7lgitvykui0.svg");
}, 116592, (e) => {
  "use strict";
  try {
    var t = window;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["careersEmploymentTypes", 0, { Contract: "B2B Contract", FullTime: "Full-time", Intern: "Internship", PartTime: "Part-time", Temporary: "Temporary" }, "careersWorkplaceTypes", 0, { Hybrid: "Hybrid", OnSite: "On-site", Remote: "Remote" }]);
}, 883477, (e) => {
  e.q("/_next/static/immutable/media/drew-houston.01pi646yliie3.png");
}, 821739, (e) => {
  e.q("/_next/static/immutable/media/greenleaf.2647i2xdj4k9m.png");
}, 883138, (e) => {
  e.q("/_next/static/immutable/media/cursor.2u619dedxyzmd.png");
}, 451688, (e) => {
  e.q("/_next/static/immutable/media/dropbox.200_qb145uu9z.png");
}, 197750, (e) => {
  e.q("/_next/static/immutable/media/mailchimp.0ayjgu5chg2w1.png");
}, 469949, (e) => {
  e.q("/_next/static/immutable/media/pablo-hernandez.2gz1n7cvbhvjr.png");
}, 937601, (e) => {
  e.q("/_next/static/immutable/media/call-intelligence-trigger-key-actions.3kz-yppwpgph3.png");
}, 834205, (e) => {
  e.q("/_next/static/immutable/media/aiuc.32qzygye5yitg.svg");
}, 712758, (e) => {
  e.q("/_next/static/immutable/media/granola.0y2-fbfxh5c4j.svg");
}, 699013, (e) => {
  e.q("/_next/static/immutable/media/lightdash.36990u4lwsy-5.svg");
}, 834900, (e) => {
  e.q("/_next/static/immutable/media/listen.29y745f_gee1n.svg");
}, 878113, (e) => {
  e.q("/_next/static/immutable/media/modal.2xywsy8w0j5z3.svg");
}, 557270, (e) => {
  e.q("/_next/static/immutable/media/near.2tio0982brnnt.svg");
}, 275548, (e) => {
  e.q("/_next/static/immutable/media/obvious.1923fnh7swkyf.svg");
}, 927980, (e) => {
  e.q("/_next/static/immutable/media/parallel.0lezqtkxokpb4.svg");
}, 747411, (e) => {
  e.q("/_next/static/immutable/media/passionfroot.08o_kevgk9_k0.svg");
}, 492363, (e) => {
  e.q("/_next/static/immutable/media/public.1mcqj4o_msplu.svg");
}, 332680, (e) => {
  e.q("/_next/static/immutable/media/railway.13aix7f0cbnzj.svg");
}, 919641, (e) => {
  e.q("/_next/static/immutable/media/taskrabbit.1de29s640o1iq.svg");
}, 533151, (e) => {
  e.q("/_next/static/immutable/media/turbopuffer.0n-8zzp7g5kh_.svg");
}, 475598, (e) => {
  e.q("/_next/static/immutable/media/wispr-flow.34eed4pj_n9m3.png");
}, 990983, (e) => {
  e.q("/_next/static/immutable/media/wordsmith.2_cluga6wyyro.svg");
}, 108296, (e) => {
  e.q("/_next/static/immutable/media/data-agent-cursor.1c483j3974fbi.png");
}, 541453, (e) => {
  e.q("/_next/static/immutable/media/lead-gen-cursor.32ecm_z_lox2_.png");
}, 762645, (e) => {
  e.q("/_next/static/immutable/media/tool-calls.1ho8m4cpalsu4.png");
}, 35098, (e) => {
  e.q("/_next/static/immutable/media/ask-attio-hero-avatar-1.06yrawpz2a498.jpg");
}, 529117, (e) => {
  e.q("/_next/static/immutable/media/ask-attio-hero-avatar-2.1f10l9qg0vjy8.jpg");
}, 268764, (e) => {
  e.q("/_next/static/immutable/media/ask-attio-hero-avatar-3.2te6oi_6gxl-d.jpg");
}, 972371, (e) => {
  e.q("/_next/static/immutable/media/digitalocean.1dyj3fu9q36pm.png");
}, 623325, (e) => {
  e.q("/_next/static/immutable/media/github.1212w0i33tvj3.png");
}, 61724, (e) => {
  e.q("/_next/static/immutable/media/greenleaf.0nt--_40xvx1c.png");
}, 760917, (e) => {
  e.q("/_next/static/immutable/media/stripe.3hzuis5doypxa.png");
}, 927589, (e) => {
  e.q("/_next/static/immutable/media/vercel.097b6ye57q71d.png");
}, 461956, (e) => {
  e.q("/_next/static/immutable/media/marketplaces-screen.35hzli705i02_.png");
}, 58683, (e) => {
  e.q("/_next/static/immutable/media/product-growth-screen.2dpguelh918rk.png");
}, 853402, (e) => {
  e.q("/_next/static/immutable/media/product-sales-screen.05jeaz5y-6ibr.png");
}, 790337, (e) => {
  e.q("/_next/static/immutable/media/sales-screen.10ayeqeum34ua.png");
}, 90867, (e) => {
  e.q("/_next/static/immutable/media/chatgpt.2tk-pok11y62s.svg");
}, 337865, (e) => {
  e.q("/_next/static/immutable/media/claude.0bklud8szpzzx.svg");
}, 187850, (e) => {
  e.q("/_next/static/immutable/media/gemini.1f9r8t02vq21-.svg");
}, 605302, (e) => {
  e.q("/_next/static/immutable/media/grok.36i3qbqb4cdj2.svg");
}, 424658, (e) => {
  e.q("/_next/static/immutable/media/perplexity.1c42huuewpe5p.svg");
}, 198374, (e) => {
  e.q("/_next/static/immutable/media/productivity-hero-comment.266tecrav4hyi.jpg");
}, 362258, (e) => {
  e.q("/_next/static/immutable/media/productivity-hero-email.2fjhlfg0-frcf.jpg");
}, 929065, (e) => {
  e.q("/_next/static/immutable/media/productivity-hero-list.1caqc7r-r-00y.jpg");
}, 789292, (e) => {
  e.q("/_next/static/immutable/media/productivity-hero-note.12aq4t_0_mtm4.jpg");
}, 896834, (e) => {
  e.q("/_next/static/immutable/media/sequences-avatar-1.3ju_s4zv9zovn.jpg");
}, 892793, (e) => {
  e.q("/_next/static/immutable/media/sequences-avatar-2.2qafs0c4u-scs.jpg");
}, 918591, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let n = (0, t.createContext)(void 0), a = n.Provider;
  e.s(["ContainerOffsetProvider", 0, a, "useContainerOffsetContext", 0, () => {
    let e2 = (0, t.use)(n);
    if (!e2) throw Error("useContainerOffsetContext must be used within a ContainerOffsetProvider");
    return e2;
  }]);
}, 120034, (e) => {
  e.q("/_next/static/immutable/media/avatar-1.2ovi1x8wsycks.png");
}, 205174, (e) => {
  e.q("/_next/static/immutable/media/avatar-2.2phrqzjwtoh1l.png");
}, 692403, (e) => {
  e.q("/_next/static/immutable/media/avatar-3.3c320r07ou9rz.png");
}, 833526, (e) => {
  e.q("/_next/static/immutable/media/greenleaf-avatar.088zng985andh.png");
}, 815652, (e) => {
  e.q("/_next/static/immutable/media/avatar-1.1gll15if2ygoz.png");
}, 529742, (e) => {
  e.q("/_next/static/immutable/media/avatar-2.3d-e3xfl_1to9.png");
}, 336567, (e) => {
  e.q("/_next/static/immutable/media/avatar-3.43zli847rnvj_.png");
}, 838776, (e) => {
  e.q("/_next/static/immutable/media/favicon-cnet.2ki6mkztkc620.png");
}, 944418, (e) => {
  e.q("/_next/static/immutable/media/favicon-vox.412vyqo5pk3az.png");
}, 189911, (e) => {
  e.q("/_next/static/immutable/media/favicon-x.1bu-yr4ke2oh7.png");
}, 252268, (e) => {
  e.q("/_next/static/immutable/media/calls-where-they-belong.2z_fa_osw5b-n.png");
}, 310495, (e) => {
  e.q("/_next/static/immutable/media/bridget.2br_i8ghm_mqf.jpg");
}, 502598, (e) => {
  e.q("/_next/static/immutable/media/esther.3352k23n360jk.jpg");
}, 200229, (e) => {
  e.q("/_next/static/immutable/media/jessica.3coy2gkignpc6.jpg");
}, 465734, (e) => {
  e.q("/_next/static/immutable/media/steve.0pbld5cdgjrly.jpg");
}, 355500, (e) => {
  e.q("/_next/static/immutable/media/trigger-key-actions.3kz-yppwpgph3.png");
}, 285044, (e) => {
  e.q("/_next/static/immutable/media/cody.2q7b2uzcson2d.jpg");
}, 145408, (e) => {
  "use strict";
  try {
    var t = window;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function r(e2) {
    if (!e2.filename) throw console.error("Asset data:", e2), Error("getStoryblokAssetDimensions: property 'filename' is required");
    return n(e2.filename);
  }
  function n(e2) {
    return { height: parseInt(e2.split("/")[5].split("x")[1], 10), width: parseInt(e2.split("/")[5].split("x")[0], 10) };
  }
  function a(e2) {
    return { href: "story" === e2.linktype ? "home" !== e2.cached_url ? `/${e2.cached_url}` : "/" : e2.url, rel: "_blank" === e2.target ? "noopener noreferrer" : void 0, target: e2.target };
  }
  e.s(["getStoryblokAssetDimensions", 0, r, "getStoryblokAssetDimensionsFromFilename", 0, n, "getStoryblokAssetObjectPosition", 0, function(e2) {
    if (!e2.focus) return null;
    if (!e2.filename) throw console.error("Asset data:", e2), Error("getStoryblokAssetObjectPosition: property 'filename' is required");
    let t2 = r(e2), n2 = e2.focus.split(":")[0].split("x").map((e3) => parseInt(e3, 10)), a2 = 100 * n2[0] / t2.width, o = 100 * n2[1] / t2.height;
    return { objectPosition: `${a2}% ${o}%` };
  }, "getStoryblokLinkProps", 0, a, "getValidStoryblokLinkProps", 0, function(e2) {
    if (!e2 || "story" === e2.linktype && !e2.cached_url || "story" !== e2.linktype && !e2.url) return null;
    let t2 = a(e2);
    return t2.href ? t2 : null;
  }]);
}, 863520, (e) => {
  "use strict";
  try {
    var t = window;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["isViewportOffsetInsideElementBounds", 0, function({ elementTop: e2, elementBottom: t2, viewportOffset: r }) {
    return e2 <= r && t2 > r;
  }, "scrollToElementWithId", 0, function(e2, t2) {
    let r = document.getElementById(e2);
    r ? (t2 && window.history.replaceState(null, "", `#${e2}`), r.scrollIntoView({ behavior: "smooth" })) : console.warn(`Element with ID "${e2}" not found`);
  }]);
}]);
