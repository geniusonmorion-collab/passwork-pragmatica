;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "f7241fdb-bb88-df27-12f6-89c9b65c0d0e");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 718015, (t) => {
  "use strict";
  var e = t.i(856757), a = t.i(370338);
  try {
    var r = "u" > typeof window ? window : t.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["usePresence", 0, function(t2 = true) {
    let r2 = (0, e.useContext)(a.PresenceContext);
    if (null === r2) return [true, null];
    let { isPresent: n, onExitComplete: s, register: i } = r2, o = (0, e.useId)();
    (0, e.useEffect)(() => {
      if (t2) return i(o);
    }, [t2]);
    let l = (0, e.useCallback)(() => t2 && s && s(o), [o, s, t2]);
    return !n && s ? [false, l] : [true];
  }]);
}, 807464, (t) => {
  "use strict";
  var e = t.i(856757);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let r = (0, e.createContext)({});
  t.s(["LayoutGroupContext", 0, r]);
}, 247237, 891433, 631563, 405470, 426756, 243725, 147220, (t) => {
  "use strict";
  var e = t.i(856757);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let r = (0, e.createContext)({ strict: false });
  t.s(["LazyContext", 0, r], 247237);
  try {
    var n = "u" > typeof window ? window : t.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let s = (0, e.createContext)({});
  t.s(["MotionContext", 0, s], 891433);
  var i = t.i(21280), o = t.i(786843);
  try {
    var l = "u" > typeof window ? window : t.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  try {
    var d = "u" > typeof window ? window : t.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function u(t2) {
    return Array.isArray(t2) ? t2.join(" ") : t2;
  }
  t.s(["useCreateMotionContext", 0, function(t2) {
    let { initial: a2, animate: r2 } = (function(t3, e2) {
      if ((0, i.isControllingVariants)(t3)) {
        let { initial: e3, animate: a3 } = t3;
        return { initial: false === e3 || (0, o.isVariantLabel)(e3) ? e3 : void 0, animate: (0, o.isVariantLabel)(a3) ? a3 : void 0 };
      }
      return false !== t3.inherit ? e2 : {};
    })(t2, (0, e.useContext)(s));
    return (0, e.useMemo)(() => ({ initial: a2, animate: r2 }), [u(a2), u(r2)]);
  }], 631563);
  var c = t.i(236585), y = t.i(235629), p = t.i(19563);
  try {
    var h = "u" > typeof window ? window : t.g;
    h._sentryModuleMetadata = h._sentryModuleMetadata || {}, h._sentryModuleMetadata[new h.Error().stack] = Object.assign({}, h._sentryModuleMetadata[new h.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let M = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
  t.s(["createHtmlRenderState", 0, M], 405470);
  try {
    var w = "u" > typeof window ? window : t.g;
    w._sentryModuleMetadata = w._sentryModuleMetadata || {}, w._sentryModuleMetadata[new w.Error().stack] = Object.assign({}, w._sentryModuleMetadata[new w.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function m(t2, e2, a2) {
    for (let r2 in e2) (0, c.isMotionValue)(e2[r2]) || (0, y.isForcedMotionValue)(r2, a2) || (t2[r2] = e2[r2]);
  }
  t.s(["copyRawValuesOnly", 0, m, "useHTMLProps", 0, function(t2, a2) {
    let r2, n2, s2 = {}, i2 = (r2 = t2.style || {}, m(n2 = {}, r2, t2), Object.assign(n2, (function({ transformTemplate: t3 }, a3) {
      return (0, e.useMemo)(() => {
        let e2 = M();
        return (0, p.buildHTMLStyles)(e2, a3, t3), Object.assign({}, e2.vars, e2.style);
      }, [a3]);
    })(t2, a2)), n2);
    return t2.drag && false !== t2.dragListener && (s2.draggable = false, i2.userSelect = i2.WebkitUserSelect = i2.WebkitTouchCallout = "none", i2.touchAction = true === t2.drag ? "none" : `pan-${"x" === t2.drag ? "y" : "x"}`), void 0 === t2.tabIndex && (t2.onTap || t2.onTapStart || t2.whileTap) && (s2.tabIndex = 0), s2.style = i2, s2;
  }], 426756);
  var g = t.i(348971), f = t.i(604445);
  try {
    var v = "u" > typeof window ? window : t.g;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let _ = () => ({ ...M(), attrs: {} });
  t.s(["createSvgRenderState", 0, _], 243725);
  try {
    var E = "u" > typeof window ? window : t.g;
    E._sentryModuleMetadata = E._sentryModuleMetadata || {}, E._sentryModuleMetadata[new E.Error().stack] = Object.assign({}, E._sentryModuleMetadata[new E.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["useSVGProps", 0, function(t2, a2, r2, n2) {
    let s2 = (0, e.useMemo)(() => {
      let e2 = _();
      return (0, g.buildSVGAttrs)(e2, a2, (0, f.isSVGTag)(n2), t2.transformTemplate, t2.style), { ...e2.attrs, style: { ...e2.style } };
    }, [a2]);
    if (t2.style) {
      let e2 = {};
      m(e2, t2.style, t2), s2.style = { ...e2, ...s2.style };
    }
    return s2;
  }], 147220);
}, 753942, (t) => {
  "use strict";
  var e = t.i(856757);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let r = (0, e.createContext)({ transformPagePoint: (t2) => t2, isStatic: false, reducedMotion: "never" });
  t.s(["MotionConfigContext", 0, r]);
}, 370338, (t) => {
  "use strict";
  var e = t.i(856757);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let r = (0, e.createContext)(null);
  t.s(["PresenceContext", 0, r]);
}, 933112, 636333, 136656, 169486, 441169, 692672, 765869, 597719, 413316, 253422, 94801, 43866, 550743, 39993, 524785, (t) => {
  "use strict";
  var e = t.i(68982), a = t.i(856757), r = t.i(807464), n = t.i(247237), s = t.i(753942), i = t.i(891433), o = t.i(631563), l = t.i(408106), d = t.i(592798), u = t.i(730525), c = t.i(891945), y = t.i(21280), p = t.i(991363), h = t.i(161560), M = t.i(370338), w = t.i(134174);
  try {
    var m = "u" > typeof window ? window : t.g;
    m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[new m.Error().stack] = Object.assign({}, m._sentryModuleMetadata[new m.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let g = (t10) => (e2, r2) => {
    let n2 = (0, a.useContext)(i.MotionContext), s2 = (0, a.useContext)(M.PresenceContext), o2 = () => (function({ scrapeMotionValuesFromProps: t11, createRenderState: e3 }, a2, r3, n3) {
      return { latestValues: (function(t12, e4, a3, r4) {
        let n4 = {}, s3 = r4(t12, {});
        for (let t13 in s3) n4[t13] = (0, c.resolveMotionValue)(s3[t13]);
        let { initial: i2, animate: o3 } = t12, l2 = (0, y.isControllingVariants)(t12), d2 = (0, y.isVariantNode)(t12);
        e4 && d2 && !l2 && false !== t12.inherit && (void 0 === i2 && (i2 = e4.initial), void 0 === o3 && (o3 = e4.animate));
        let u2 = !!a3 && false === a3.initial, M2 = (u2 = u2 || false === i2) ? o3 : i2;
        if (M2 && "boolean" != typeof M2 && !(0, p.isAnimationControls)(M2)) {
          let e5 = Array.isArray(M2) ? M2 : [M2];
          for (let a4 = 0; a4 < e5.length; a4++) {
            let r5 = (0, h.resolveVariantFromProps)(t12, e5[a4]);
            if (r5) {
              let { transitionEnd: t13, transition: e6, ...a5 } = r5;
              for (let t14 in a5) {
                let e7 = a5[t14];
                if (Array.isArray(e7)) {
                  let t15 = u2 ? e7.length - 1 : 0;
                  e7 = e7[t15];
                }
                null !== e7 && (n4[t14] = e7);
              }
              for (let e7 in t13) n4[e7] = t13[e7];
            }
          }
        }
        return n4;
      })(a2, r3, n3, t11), renderState: e3() };
    })(t10, e2, n2, s2);
    return r2 ? o2() : (0, w.useConstant)(o2);
  };
  var f = t.i(405470);
  try {
    var v = "u" > typeof window ? window : t.g;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let _ = g({ scrapeMotionValuesFromProps: u.scrapeHTMLMotionValuesFromProps, createRenderState: f.createHtmlRenderState });
  var E = t.i(742917), E = E, k = t.i(243725);
  try {
    var b = "u" > typeof window ? window : t.g;
    b._sentryModuleMetadata = b._sentryModuleMetadata || {}, b._sentryModuleMetadata[new b.Error().stack] = Object.assign({}, b._sentryModuleMetadata[new b.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let P = g({ scrapeMotionValuesFromProps: E.scrapeMotionValuesFromProps, createRenderState: k.createSvgRenderState });
  var x = t.i(96819);
  try {
    var A = "u" > typeof window ? window : t.g;
    A._sentryModuleMetadata = A._sentryModuleMetadata || {}, A._sentryModuleMetadata[new A.Error().stack] = Object.assign({}, A._sentryModuleMetadata[new A.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let T = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] }, B = false;
  function S() {
    return !(function() {
      if (B) return;
      let t10 = {};
      for (let e2 in T) t10[e2] = { isEnabled: (t11) => T[e2].some((e3) => !!t11[e3]) };
      (0, x.setFeatureDefinitions)(t10), B = true;
    })(), (0, x.getFeatureDefinitions)();
  }
  try {
    var O = "u" > typeof window ? window : t.g;
    O._sentryModuleMetadata = O._sentryModuleMetadata || {}, O._sentryModuleMetadata[new O.Error().stack] = Object.assign({}, O._sentryModuleMetadata[new O.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  try {
    var j = "u" > typeof window ? window : t.g;
    j._sentryModuleMetadata = j._sentryModuleMetadata || {}, j._sentryModuleMetadata[new j.Error().stack] = Object.assign({}, j._sentryModuleMetadata[new j.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let V = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
  try {
    var K = "u" > typeof window ? window : t.g;
    K._sentryModuleMetadata = K._sentryModuleMetadata || {}, K._sentryModuleMetadata[new K.Error().stack] = Object.assign({}, K._sentryModuleMetadata[new K.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  var C = t.i(261254);
  try {
    var D = "u" > typeof window ? window : t.g;
    D._sentryModuleMetadata = D._sentryModuleMetadata || {}, D._sentryModuleMetadata[new D.Error().stack] = Object.assign({}, D._sentryModuleMetadata[new D.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let R = (0, a.createContext)({});
  t.s(["SwitchLayoutGroupContext", 0, R], 636333);
  try {
    var L = "u" > typeof window ? window : t.g;
    L._sentryModuleMetadata = L._sentryModuleMetadata || {}, L._sentryModuleMetadata[new L.Error().stack] = Object.assign({}, L._sentryModuleMetadata[new L.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function F(t10) {
    return t10 && "object" == typeof t10 && Object.prototype.hasOwnProperty.call(t10, "current");
  }
  var I = t.i(736986);
  try {
    var N = "u" > typeof window ? window : t.g;
    N._sentryModuleMetadata = N._sentryModuleMetadata || {}, N._sentryModuleMetadata[new N.Error().stack] = Object.assign({}, N._sentryModuleMetadata[new N.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  try {
    var U = "u" > typeof window ? window : t.g;
    U._sentryModuleMetadata = U._sentryModuleMetadata || {}, U._sentryModuleMetadata[new U.Error().stack] = Object.assign({}, U._sentryModuleMetadata[new U.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function W(t10, { forwardMotionProps: u2 = false, type: c2 } = {}, y2, p2) {
    y2 && (function(t11) {
      let e2 = S();
      for (let a2 in t11) e2[a2] = { ...e2[a2], ...t11[a2] };
      (0, x.setFeatureDefinitions)(e2);
    })(y2);
    let h2 = c2 ? "svg" === c2 : (0, d.isSVGComponent)(t10), w2 = h2 ? P : _;
    function m2(d2, c3) {
      var y3;
      let m3, g3, f2, v2 = { ...(0, a.useContext)(s.MotionConfigContext), ...d2, layoutId: (function({ layoutId: t11 }) {
        let e2 = (0, a.useContext)(r.LayoutGroupContext).id;
        return e2 && void 0 !== t11 ? e2 + "-" + t11 : t11;
      })(d2) }, { isStatic: _2 } = v2, E2 = (0, o.useCreateMotionContext)(d2), k2 = w2(d2, _2);
      if (!_2 && "u" > typeof window) {
        (0, a.useContext)(n.LazyContext).strict;
        let e2 = (function(t11) {
          let { drag: e3, layout: a2 } = S();
          if (!e3 && !a2) return {};
          let r2 = { ...e3, ...a2 };
          return { MeasureLayout: e3?.isEnabled(t11) || a2?.isEnabled(t11) ? r2.MeasureLayout : void 0, ProjectionNode: r2.ProjectionNode };
        })(v2);
        m3 = e2.MeasureLayout, E2.visualElement = (function(t11, e3, r2, o2, l2, d3) {
          let { visualElement: u3 } = (0, a.useContext)(i.MotionContext), c4 = (0, a.useContext)(n.LazyContext), y4 = (0, a.useContext)(M.PresenceContext), p3 = (0, a.useContext)(s.MotionConfigContext), h3 = p3.reducedMotion, w3 = p3.skipAnimations, m4 = (0, a.useRef)(null), g4 = (0, a.useRef)(false);
          o2 = o2 || c4.renderer, !m4.current && o2 && (m4.current = o2(t11, { visualState: e3, parent: u3, props: r2, presenceContext: y4, blockInitialAnimation: !!y4 && false === y4.initial, reducedMotionConfig: h3, skipAnimations: w3, isSVG: d3 }), g4.current && m4.current && (m4.current.manuallyAnimateOnMount = true));
          let f3 = m4.current, v3 = (0, a.useContext)(R);
          f3 && !f3.projection && l2 && ("html" === f3.type || "svg" === f3.type) && (function(t12, e4, a2, r3) {
            let { layoutId: n2, layout: s2, drag: i2, dragConstraints: o3, layoutScroll: l3, layoutRoot: d4, layoutAnchor: u4, layoutCrossfade: c5 } = e4;
            t12.projection = new a2(t12.latestValues, e4["data-framer-portal-id"] ? void 0 : (function t13(e5) {
              if (e5) return false !== e5.options.allowProjection ? e5.projection : t13(e5.parent);
            })(t12.parent)), t12.projection.setOptions({ layoutId: n2, layout: s2, alwaysMeasureLayout: !!i2 || o3 && F(o3), visualElement: t12, animationType: "string" == typeof s2 ? s2 : "both", initialPromotionConfig: r3, crossfade: c5, layoutScroll: l3, layoutRoot: d4, layoutAnchor: u4 });
          })(m4.current, r2, l2, v3);
          let _3 = (0, a.useRef)(false);
          (0, a.useInsertionEffect)(() => {
            f3 && _3.current && f3.update(r2, y4);
          });
          let E3 = r2[C.optimizedAppearDataAttribute], k3 = (0, a.useRef)(!!E3 && "u" > typeof window && !window.MotionHandoffIsComplete?.(E3) && window.MotionHasOptimisedAnimation?.(E3));
          return (0, I.useIsomorphicLayoutEffect)(() => {
            g4.current = true, f3 && (_3.current = true, window.MotionIsMounted = true, f3.updateFeatures(), f3.scheduleRenderMicrotask(), k3.current && f3.animationState && f3.animationState.animateChanges());
          }), (0, a.useEffect)(() => {
            f3 && (!k3.current && f3.animationState && f3.animationState.animateChanges(), k3.current && (queueMicrotask(() => {
              window.MotionHandoffMarkAsComplete?.(E3);
            }), k3.current = false), f3.enteringChildren = void 0);
          }), f3;
        })(t10, k2, v2, p2, e2.ProjectionNode, h2);
      }
      return (0, e.jsxs)(i.MotionContext.Provider, { value: E2, children: [m3 && E2.visualElement ? (0, e.jsx)(m3, { visualElement: E2.visualElement, ...v2 }) : null, (0, l.useRender)(t10, d2, (y3 = E2.visualElement, g3 = (0, a.useRef)(c3), (0, a.useInsertionEffect)(() => {
        g3.current = c3;
      }), f2 = (0, a.useRef)(null), (0, a.useCallback)((t11) => {
        t11 && k2.onMount?.(t11);
        let e2 = g3.current;
        if ("function" == typeof e2) if (t11) {
          let a2 = e2(t11);
          "function" == typeof a2 && (f2.current = a2);
        } else f2.current ? (f2.current(), f2.current = null) : e2(t11);
        else e2 && (e2.current = t11);
        y3 && (t11 ? y3.mount(t11) : y3.unmount());
      }, [y3])), k2, _2, u2, h2)] });
    }
    m2.displayName = `motion.${"string" == typeof t10 ? t10 : `create(${t10.displayName ?? t10.name ?? ""})`}`;
    let g2 = (0, a.forwardRef)(m2);
    return g2[V] = t10, g2;
  }
  try {
    var G = "u" > typeof window ? window : t.g;
    G._sentryModuleMetadata = G._sentryModuleMetadata || {}, G._sentryModuleMetadata[new G.Error().stack] = Object.assign({}, G._sentryModuleMetadata[new G.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  t.s(["createMotionProxy", 0, function(t10, e2) {
    if ("u" < typeof Proxy) return W;
    let a2 = /* @__PURE__ */ new Map(), r2 = (a3, r3) => W(a3, r3, t10, e2);
    return new Proxy((t11, e3) => r2(t11, e3), { get: (n2, s2) => "create" === s2 ? r2 : (a2.has(s2) || a2.set(s2, W(s2, void 0, t10, e2)), a2.get(s2)) });
  }], 933112);
  try {
    var z = "u" > typeof window ? window : t.g;
    z._sentryModuleMetadata = z._sentryModuleMetadata || {}, z._sentryModuleMetadata[new z.Error().stack] = Object.assign({}, z._sentryModuleMetadata[new z.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  class $ {
    constructor(t10) {
      this.isMounted = false, this.node = t10;
    }
    update() {
    }
  }
  t.s(["Feature", 0, $], 136656);
  var H = t.i(937642), Y = t.i(771788);
  try {
    var X = "u" > typeof window ? window : t.g;
    X._sentryModuleMetadata = X._sentryModuleMetadata || {}, X._sentryModuleMetadata[new X.Error().stack] = Object.assign({}, X._sentryModuleMetadata[new X.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function q(t10, e2, a2, r2 = 0, n2 = 1) {
    let s2 = Array.from(t10).sort((t11, e3) => t11.sortNodePosition(e3)).indexOf(e2), i2 = t10.size, o2 = (i2 - 1) * r2;
    return "function" == typeof a2 ? a2(s2, i2) : 1 === n2 ? s2 * r2 : o2 - s2 * r2;
  }
  try {
    var Z = "u" > typeof window ? window : t.g;
    Z._sentryModuleMetadata = Z._sentryModuleMetadata || {}, Z._sentryModuleMetadata[new Z.Error().stack] = Object.assign({}, Z._sentryModuleMetadata[new Z.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function J(t10, e2, a2 = {}) {
    let r2 = (0, H.resolveVariant)(t10, e2, "exit" === a2.type ? t10.presenceContext?.custom : void 0), { transition: n2 = t10.getDefaultTransition() || {} } = r2 || {};
    a2.transitionOverride && (n2 = a2.transitionOverride);
    let s2 = r2 ? () => Promise.all((0, Y.animateTarget)(t10, r2, a2)) : () => Promise.resolve(), i2 = t10.variantChildren && t10.variantChildren.size ? (r3 = 0) => {
      let { delayChildren: s3 = 0, staggerChildren: i3, staggerDirection: o3 } = n2;
      return (function(t11, e3, a3 = 0, r4 = 0, n3 = 0, s4 = 1, i4) {
        let o4 = [];
        for (let l2 of t11.variantChildren) l2.notify("AnimationStart", e3), o4.push(J(l2, e3, { ...i4, delay: a3 + ("function" == typeof r4 ? 0 : r4) + q(t11.variantChildren, l2, r4, n3, s4) }).then(() => l2.notify("AnimationComplete", e3)));
        return Promise.all(o4);
      })(t10, e2, r3, s3, i3, o3, a2);
    } : () => Promise.resolve(), { when: o2 } = n2;
    if (!o2) return Promise.all([s2(), i2(a2.delay)]);
    {
      let [t11, e3] = "beforeChildren" === o2 ? [s2, i2] : [i2, s2];
      return t11().then(() => e3());
    }
  }
  try {
    var Q = "u" > typeof window ? window : t.g;
    Q._sentryModuleMetadata = Q._sentryModuleMetadata || {}, Q._sentryModuleMetadata[new Q.Error().stack] = Object.assign({}, Q._sentryModuleMetadata[new Q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function tt(t10, e2, a2 = {}) {
    let r2;
    if (t10.notify("AnimationStart", e2), Array.isArray(e2)) r2 = Promise.all(e2.map((e3) => J(t10, e3, a2)));
    else if ("string" == typeof e2) r2 = J(t10, e2, a2);
    else {
      let n2 = "function" == typeof e2 ? (0, H.resolveVariant)(t10, e2, a2.custom) : e2;
      r2 = Promise.all((0, Y.animateTarget)(t10, n2, a2));
    }
    return r2.then(() => {
      t10.notify("AnimationComplete", e2);
    });
  }
  t.s(["animateVisualElement", 0, tt], 169486);
  var te = t.i(786843), ta = t.i(16919);
  try {
    var tr = "u" > typeof window ? window : t.g;
    tr._sentryModuleMetadata = tr._sentryModuleMetadata || {}, tr._sentryModuleMetadata[new tr.Error().stack] = Object.assign({}, tr._sentryModuleMetadata[new tr.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let tn = ta.variantProps.length;
  var ts = t.i(167235);
  try {
    var ti = "u" > typeof window ? window : t.g;
    ti._sentryModuleMetadata = ti._sentryModuleMetadata || {}, ti._sentryModuleMetadata[new ti.Error().stack] = Object.assign({}, ti._sentryModuleMetadata[new ti.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function to(t10, e2) {
    if (!Array.isArray(e2)) return false;
    let a2 = e2.length;
    if (a2 !== t10.length) return false;
    for (let r2 = 0; r2 < a2; r2++) if (e2[r2] !== t10[r2]) return false;
    return true;
  }
  try {
    var tl = "u" > typeof window ? window : t.g;
    tl._sentryModuleMetadata = tl._sentryModuleMetadata || {}, tl._sentryModuleMetadata[new tl.Error().stack] = Object.assign({}, tl._sentryModuleMetadata[new tl.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let td = [...ta.variantPriorityOrder].reverse(), tu = ta.variantPriorityOrder.length;
  function tc(t10 = false) {
    return { isActive: t10, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
  }
  function ty() {
    return { animate: tc(true), whileInView: tc(), whileHover: tc(), whileTap: tc(), whileDrag: tc(), whileFocus: tc(), exit: tc() };
  }
  try {
    var tp = "u" > typeof window ? window : t.g;
    tp._sentryModuleMetadata = tp._sentryModuleMetadata || {}, tp._sentryModuleMetadata[new tp.Error().stack] = Object.assign({}, tp._sentryModuleMetadata[new tp.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  try {
    var th = "u" > typeof window ? window : t.g;
    th._sentryModuleMetadata = th._sentryModuleMetadata || {}, th._sentryModuleMetadata[new th.Error().stack] = Object.assign({}, th._sentryModuleMetadata[new th.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let tM = 0;
  try {
    var tw = "u" > typeof window ? window : t.g;
    tw._sentryModuleMetadata = tw._sentryModuleMetadata || {}, tw._sentryModuleMetadata[new tw.Error().stack] = Object.assign({}, tw._sentryModuleMetadata[new tw.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  t.s(["animations", 0, { animation: { Feature: class extends $ {
    constructor(t10) {
      super(t10), t10.animationState || (t10.animationState = (function(t11) {
        let e2 = (e3) => Promise.all(e3.map(({ animation: e4, options: a3 }) => tt(t11, e4, a3))), a2 = ty(), r2 = true, n2 = false, s2 = (e3) => (a3, r3) => {
          let n3 = (0, H.resolveVariant)(t11, r3, "exit" === e3 ? t11.presenceContext?.custom : void 0);
          if (n3) {
            let { transition: t12, transitionEnd: e4, ...r4 } = n3;
            a3 = { ...a3, ...r4, ...e4 };
          }
          return a3;
        };
        function i2(i3) {
          let { props: o2 } = t11, l2 = (function t12(e3) {
            if (!e3) return;
            if (!e3.isControllingVariants) {
              let a4 = e3.parent && t12(e3.parent) || {};
              return void 0 !== e3.props.initial && (a4.initial = e3.props.initial), a4;
            }
            let a3 = {};
            for (let t13 = 0; t13 < tn; t13++) {
              let r3 = ta.variantProps[t13], n3 = e3.props[r3];
              ((0, te.isVariantLabel)(n3) || false === n3) && (a3[r3] = n3);
            }
            return a3;
          })(t11.parent) || {}, d2 = [], u2 = /* @__PURE__ */ new Set(), c2 = {}, y2 = 1 / 0;
          for (let e3 = 0; e3 < tu; e3++) {
            var h2, M2;
            let w3 = td[e3], m2 = a2[w3], g2 = void 0 !== o2[w3] ? o2[w3] : l2[w3], f2 = (0, te.isVariantLabel)(g2), v2 = w3 === i3 ? m2.isActive : null;
            false === v2 && (y2 = e3);
            let _2 = g2 === l2[w3] && g2 !== o2[w3] && f2;
            if (_2 && (r2 || n2) && t11.manuallyAnimateOnMount && (_2 = false), m2.protectedKeys = { ...c2 }, !m2.isActive && null === v2 || !g2 && !m2.prevProp || (0, p.isAnimationControls)(g2) || "boolean" == typeof g2) continue;
            if ("exit" === w3 && m2.isActive && true !== v2) {
              m2.prevResolvedValues && (c2 = { ...c2, ...m2.prevResolvedValues });
              continue;
            }
            let E2 = (h2 = m2.prevProp, "string" == typeof (M2 = g2) ? M2 !== h2 : !!Array.isArray(M2) && !to(M2, h2)), k2 = E2 || w3 === i3 && m2.isActive && !_2 && f2 || e3 > y2 && f2, b2 = false, P2 = Array.isArray(g2) ? g2 : [g2], x2 = P2.reduce(s2(w3), {});
            false === v2 && (x2 = {});
            let { prevResolvedValues: A2 = {} } = m2, T2 = { ...A2, ...x2 }, B2 = (e4) => {
              k2 = true, u2.has(e4) && (b2 = true, u2.delete(e4)), m2.needsAnimating[e4] = true;
              let a3 = t11.getValue(e4);
              a3 && (a3.liveStyle = false);
            };
            for (let t12 in T2) {
              let e4 = x2[t12], a3 = A2[t12];
              if (!c2.hasOwnProperty(t12)) ((0, ts.isKeyframesTarget)(e4) && (0, ts.isKeyframesTarget)(a3) ? to(e4, a3) : e4 === a3) ? void 0 !== e4 && u2.has(t12) ? B2(t12) : m2.protectedKeys[t12] = true : null != e4 ? B2(t12) : u2.add(t12);
            }
            m2.prevProp = g2, m2.prevResolvedValues = x2, m2.isActive && (c2 = { ...c2, ...x2 }), (r2 || n2) && t11.blockInitialAnimation && (k2 = false);
            let S2 = _2 && E2, O2 = !S2 || b2;
            k2 && O2 && d2.push(...P2.map((e4) => {
              let a3 = { type: w3 };
              if ("string" == typeof e4 && (r2 || n2) && !S2 && t11.manuallyAnimateOnMount && t11.parent) {
                let { parent: r3 } = t11, n3 = (0, H.resolveVariant)(r3, e4);
                if (r3.enteringChildren && n3) {
                  let { delayChildren: e5 } = n3.transition || {};
                  a3.delay = q(r3.enteringChildren, t11, e5);
                }
              }
              return { animation: e4, options: a3 };
            }));
          }
          if (u2.size) {
            let e3 = {};
            if ("boolean" != typeof o2.initial) {
              let a3 = (0, H.resolveVariant)(t11, Array.isArray(o2.initial) ? o2.initial[0] : o2.initial);
              a3 && a3.transition && (e3.transition = a3.transition);
            }
            u2.forEach((a3) => {
              let r3 = t11.getBaseTarget(a3), n3 = t11.getValue(a3);
              n3 && (n3.liveStyle = true), e3[a3] = r3 ?? null;
            }), d2.push({ animation: e3 });
          }
          let w2 = !!d2.length;
          return r2 && (false === o2.initial || o2.initial === o2.animate) && !t11.manuallyAnimateOnMount && (w2 = false), r2 = false, n2 = false, w2 ? e2(d2) : Promise.resolve();
        }
        return { animateChanges: i2, setActive: function(e3, r3) {
          if (a2[e3].isActive === r3) return Promise.resolve();
          t11.variantChildren?.forEach((t12) => t12.animationState?.setActive(e3, r3)), a2[e3].isActive = r3;
          let n3 = i2(e3);
          for (let t12 in a2) a2[t12].protectedKeys = {};
          return n3;
        }, setAnimateFunction: function(a3) {
          e2 = a3(t11);
        }, getState: () => a2, reset: () => {
          a2 = ty(), n2 = true;
        } };
      })(t10));
    }
    updateAnimationControlsSubscription() {
      let { animate: t10 } = this.node.getProps();
      (0, p.isAnimationControls)(t10) && (this.unmountControls = t10.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: t10 } = this.node.getProps(), { animate: e2 } = this.node.prevProps || {};
      t10 !== e2 && this.updateAnimationControlsSubscription();
    }
    unmount() {
      this.node.animationState.reset(), this.unmountControls?.();
    }
  } }, exit: { Feature: class extends $ {
    constructor() {
      super(...arguments), this.id = tM++, this.isExitComplete = false;
    }
    update() {
      if (!this.node.presenceContext) return;
      let { isPresent: t10, onExitComplete: e2 } = this.node.presenceContext, { isPresent: a2 } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || t10 === a2) return;
      if (t10 && false === a2) {
        if (this.isExitComplete) {
          let { initial: t11, custom: e3 } = this.node.getProps();
          if ("string" == typeof t11) {
            let a3 = (0, H.resolveVariant)(this.node, t11, e3);
            if (a3) {
              let { transition: t12, transitionEnd: e4, ...r3 } = a3;
              for (let t13 in r3) this.node.getValue(t13)?.jump(r3[t13]);
            }
          }
          this.node.animationState.reset(), this.node.animationState.animateChanges();
        } else this.node.animationState.setActive("exit", false);
        this.isExitComplete = false;
        return;
      }
      let r2 = this.node.animationState.setActive("exit", !t10);
      e2 && !t10 && r2.then(() => {
        this.isExitComplete = true, e2(this.id);
      });
    }
    mount() {
      let { register: t10, onExitComplete: e2 } = this.node.presenceContext || {};
      e2 && e2(this.id), t10 && (this.unmount = t10(this.id));
    }
    unmount() {
    }
  } } }], 441169);
  var tm = t.i(470919), tg = t.i(427684), tf = t.i(967682);
  try {
    var tv = "u" > typeof window ? window : t.g;
    tv._sentryModuleMetadata = tv._sentryModuleMetadata || {}, tv._sentryModuleMetadata[new tv.Error().stack] = Object.assign({}, tv._sentryModuleMetadata[new tv.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function t_(t10) {
    return [t10("x"), t10("y")];
  }
  t.s(["eachAxis", 0, t_], 692672);
  var tE = t.i(679514), tk = t.i(364646), tb = t.i(850669), tP = t.i(502225), tx = t.i(870820);
  try {
    var tA = "u" > typeof window ? window : t.g;
    tA._sentryModuleMetadata = tA._sentryModuleMetadata || {}, tA._sentryModuleMetadata[new tA.Error().stack] = Object.assign({}, tA._sentryModuleMetadata[new tA.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function tT(t10, e2, a2, r2 = { passive: true }) {
    return t10.addEventListener(e2, a2, r2), () => t10.removeEventListener(e2, a2);
  }
  t.s(["addDomEvent", 0, tT], 765869);
  try {
    var tB = "u" > typeof window ? window : t.g;
    tB._sentryModuleMetadata = tB._sentryModuleMetadata || {}, tB._sentryModuleMetadata[new tB.Error().stack] = Object.assign({}, tB._sentryModuleMetadata[new tB.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let tS = { x: false, y: false };
  t.s(["isDragActive", 0, function() {
    return tS.x || tS.y;
  }, "isDragging", 0, tS], 597719);
  try {
    var tO = "u" > typeof window ? window : t.g;
    tO._sentryModuleMetadata = tO._sentryModuleMetadata || {}, tO._sentryModuleMetadata[new tO.Error().stack] = Object.assign({}, tO._sentryModuleMetadata[new tO.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  var tj = t.i(409138);
  try {
    var tV = "u" > typeof window ? window : t.g;
    tV._sentryModuleMetadata = tV._sentryModuleMetadata || {}, tV._sentryModuleMetadata[new tV.Error().stack] = Object.assign({}, tV._sentryModuleMetadata[new tV.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function tK(t10) {
    return t10.max - t10.min;
  }
  function tC(t10, e2, a2, r2 = 0.5) {
    t10.origin = r2, t10.originPoint = (0, tx.mixNumber)(e2.min, e2.max, t10.origin), t10.scale = tK(a2) / tK(e2), t10.translate = (0, tx.mixNumber)(a2.min, a2.max, t10.origin) - t10.originPoint, (t10.scale >= 0.9999 && t10.scale <= 1.0001 || isNaN(t10.scale)) && (t10.scale = 1), (t10.translate >= -0.01 && t10.translate <= 0.01 || isNaN(t10.translate)) && (t10.translate = 0);
  }
  function tD(t10, e2, a2, r2 = 0) {
    t10.min = (r2 ? (0, tx.mixNumber)(a2.min, a2.max, r2) : a2.min) + e2.min, t10.max = t10.min + tK(e2);
  }
  function tR(t10, e2, a2, r2 = 0) {
    let n2 = r2 ? (0, tx.mixNumber)(a2.min, a2.max, r2) : a2.min;
    t10.min = e2.min - n2, t10.max = t10.min + tK(e2);
  }
  t.s(["calcBoxDelta", 0, function(t10, e2, a2, r2) {
    tC(t10.x, e2.x, a2.x, r2 ? r2.originX : void 0), tC(t10.y, e2.y, a2.y, r2 ? r2.originY : void 0);
  }, "calcLength", 0, tK, "calcRelativeBox", 0, function(t10, e2, a2, r2) {
    tD(t10.x, e2.x, a2.x, r2?.x), tD(t10.y, e2.y, a2.y, r2?.y);
  }, "calcRelativePosition", 0, function(t10, e2, a2, r2) {
    tR(t10.x, e2.x, a2.x, r2?.x), tR(t10.y, e2.y, a2.y, r2?.y);
  }, "isNear", 0, function(t10, e2, a2) {
    return Math.abs(t10 - e2) <= a2;
  }], 413316);
  var tL = t.i(460208);
  try {
    var tF = "u" > typeof window ? window : t.g;
    tF._sentryModuleMetadata = tF._sentryModuleMetadata || {}, tF._sentryModuleMetadata[new tF.Error().stack] = Object.assign({}, tF._sentryModuleMetadata[new tF.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let tI = /* @__PURE__ */ new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]), tN = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
  function tU(t10) {
    return tN.has(t10.tagName) || true === t10.isContentEditable;
  }
  t.s(["isElementKeyboardAccessible", 0, function(t10) {
    return tI.has(t10.tagName) || true === t10.isContentEditable;
  }, "isElementTextInput", 0, tU], 253422);
  var tW = t.i(26809);
  try {
    var tG = "u" > typeof window ? window : t.g;
    tG._sentryModuleMetadata = tG._sentryModuleMetadata || {}, tG._sentryModuleMetadata[new tG.Error().stack] = Object.assign({}, tG._sentryModuleMetadata[new tG.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let tz = (t10) => "mouse" === t10.pointerType ? "number" != typeof t10.button || t10.button <= 0 : false !== t10.isPrimary;
  t.s(["isPrimaryPointer", 0, tz], 94801);
  try {
    var t$ = "u" > typeof window ? window : t.g;
    t$._sentryModuleMetadata = t$._sentryModuleMetadata || {}, t$._sentryModuleMetadata[new t$.Error().stack] = Object.assign({}, t$._sentryModuleMetadata[new t$.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function tH(t10) {
    return { point: { x: t10.pageX, y: t10.pageY } };
  }
  let tY = (t10) => (e2) => tz(e2) && t10(e2, tH(e2));
  t.s(["addPointerInfo", 0, tY, "extractEventInfo", 0, tH], 43866);
  try {
    var tX = "u" > typeof window ? window : t.g;
    tX._sentryModuleMetadata = tX._sentryModuleMetadata || {}, tX._sentryModuleMetadata[new tX.Error().stack] = Object.assign({}, tX._sentryModuleMetadata[new tX.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function tq(t10, e2, a2, r2) {
    return tT(t10, e2, tY(a2), r2);
  }
  try {
    var tZ = "u" > typeof window ? window : t.g;
    tZ._sentryModuleMetadata = tZ._sentryModuleMetadata || {}, tZ._sentryModuleMetadata[new tZ.Error().stack] = Object.assign({}, tZ._sentryModuleMetadata[new tZ.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let tJ = ({ current: t10 }) => t10 ? t10.ownerDocument.defaultView : null;
  var tQ = t.i(92727), t0 = t.i(490692);
  try {
    var t1 = "u" > typeof window ? window : t.g;
    t1._sentryModuleMetadata = t1._sentryModuleMetadata || {}, t1._sentryModuleMetadata[new t1.Error().stack] = Object.assign({}, t1._sentryModuleMetadata[new t1.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let t9 = (t10, e2) => Math.abs(t10 - e2);
  try {
    var t2 = "u" > typeof window ? window : t.g;
    t2._sentryModuleMetadata = t2._sentryModuleMetadata || {}, t2._sentryModuleMetadata[new t2.Error().stack] = Object.assign({}, t2._sentryModuleMetadata[new t2.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let t3 = /* @__PURE__ */ new Set(["auto", "scroll"]);
  class t6 {
    constructor(t10, e2, { transformPagePoint: a2, contextWindow: r2 = window, dragSnapToOrigin: n2 = false, distanceThreshold: s2 = 3, element: i2 } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (t11) => {
        this.handleScroll(t11.target);
      }, this.onWindowScroll = () => {
        this.handleScroll(window);
      }, this.updatePoint = () => {
        var t11, e3;
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo && (this.lastMoveEventInfo = t4(this.lastRawMoveEventInfo, this.transformPagePoint));
        let a3 = t5(this.lastMoveEventInfo, this.history), r3 = null !== this.startEvent, n3 = (t11 = a3.offset, e3 = { x: 0, y: 0 }, Math.sqrt(t9(t11.x, e3.x) ** 2 + t9(t11.y, e3.y) ** 2) >= this.distanceThreshold);
        if (!r3 && !n3) return;
        let { point: s3 } = a3, { timestamp: i3 } = tf.frameData;
        this.history.push({ ...s3, timestamp: i3 });
        let { onStart: o3, onMove: l3 } = this.handlers;
        r3 || (o3 && o3(this.lastMoveEvent, a3), this.startEvent = this.lastMoveEvent), l3 && l3(this.lastMoveEvent, a3);
      }, this.handlePointerMove = (t11, e3) => {
        this.lastMoveEvent = t11, this.lastRawMoveEventInfo = e3, this.lastMoveEventInfo = t4(e3, this.transformPagePoint), tf.frame.update(this.updatePoint, true);
      }, this.handlePointerUp = (t11, e3) => {
        this.end();
        let { onEnd: a3, onSessionEnd: r3, resumeAnimation: n3 } = this.handlers;
        if ((this.dragSnapToOrigin || !this.startEvent) && n3 && n3(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let s3 = t5("pointercancel" === t11.type ? this.lastMoveEventInfo : t4(e3, this.transformPagePoint), this.history);
        this.startEvent && a3 && a3(t11, s3), r3 && r3(t11, s3);
      }, !tz(t10)) return;
      this.dragSnapToOrigin = n2, this.handlers = e2, this.transformPagePoint = a2, this.distanceThreshold = s2, this.contextWindow = r2 || window;
      const o2 = t4(tH(t10), this.transformPagePoint), { point: l2 } = o2, { timestamp: d2 } = tf.frameData;
      this.history = [{ ...l2, timestamp: d2 }];
      const { onSessionStart: u2 } = e2;
      u2 && u2(t10, t5(o2, this.history)), this.removeListeners = (0, tQ.pipe)(tq(this.contextWindow, "pointermove", this.handlePointerMove), tq(this.contextWindow, "pointerup", this.handlePointerUp), tq(this.contextWindow, "pointercancel", this.handlePointerUp)), i2 && this.startScrollTracking(i2);
    }
    startScrollTracking(t10) {
      let e2 = t10.parentElement;
      for (; e2; ) {
        let t11 = getComputedStyle(e2);
        (t3.has(t11.overflowX) || t3.has(t11.overflowY)) && this.scrollPositions.set(e2, { x: e2.scrollLeft, y: e2.scrollTop }), e2 = e2.parentElement;
      }
      this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }), window.addEventListener("scroll", this.onElementScroll, { capture: true }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
        window.removeEventListener("scroll", this.onElementScroll, { capture: true }), window.removeEventListener("scroll", this.onWindowScroll);
      };
    }
    handleScroll(t10) {
      let e2 = this.scrollPositions.get(t10);
      if (!e2) return;
      let a2 = t10 === window, r2 = a2 ? { x: window.scrollX, y: window.scrollY } : { x: t10.scrollLeft, y: t10.scrollTop }, n2 = { x: r2.x - e2.x, y: r2.y - e2.y };
      (0 !== n2.x || 0 !== n2.y) && (a2 ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += n2.x, this.lastMoveEventInfo.point.y += n2.y) : this.history.length > 0 && (this.history[0].x -= n2.x, this.history[0].y -= n2.y), this.scrollPositions.set(t10, r2), tf.frame.update(this.updatePoint, true));
    }
    updateHandlers(t10) {
      this.handlers = t10;
    }
    end() {
      this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), (0, tf.cancelFrame)(this.updatePoint);
    }
  }
  function t4(t10, e2) {
    return e2 ? { point: e2(t10.point) } : t10;
  }
  function t7(t10, e2) {
    return { x: t10.x - e2.x, y: t10.y - e2.y };
  }
  function t5({ point: t10 }, e2) {
    return { point: t10, delta: t7(t10, t8(e2)), offset: t7(t10, e2[0]), velocity: (function(t11) {
      if (t11.length < 2) return { x: 0, y: 0 };
      let e3 = t11.length - 1, a2 = null, r2 = t8(t11);
      for (; e3 >= 0 && (a2 = t11[e3], !(r2.timestamp - a2.timestamp > (0, t0.secondsToMilliseconds)(0.1))); ) e3--;
      if (!a2) return { x: 0, y: 0 };
      a2 === t11[0] && t11.length > 2 && r2.timestamp - a2.timestamp > 2 * (0, t0.secondsToMilliseconds)(0.1) && (a2 = t11[1]);
      let n2 = (0, t0.millisecondsToSeconds)(r2.timestamp - a2.timestamp);
      if (0 === n2) return { x: 0, y: 0 };
      let s2 = { x: (r2.x - a2.x) / n2, y: (r2.y - a2.y) / n2 };
      return s2.x === 1 / 0 && (s2.x = 0), s2.y === 1 / 0 && (s2.y = 0), s2;
    })(e2) };
  }
  function t8(t10) {
    return t10[t10.length - 1];
  }
  var et = t.i(241058), ee = t.i(493858);
  try {
    var ea = "u" > typeof window ? window : t.g;
    ea._sentryModuleMetadata = ea._sentryModuleMetadata || {}, ea._sentryModuleMetadata[new ea.Error().stack] = Object.assign({}, ea._sentryModuleMetadata[new ea.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function er(t10, e2, a2) {
    return { min: void 0 !== e2 ? t10.min + e2 : void 0, max: void 0 !== a2 ? t10.max + a2 - (t10.max - t10.min) : void 0 };
  }
  function en(t10, e2) {
    let a2 = e2.min - t10.min, r2 = e2.max - t10.max;
    return e2.max - e2.min < t10.max - t10.min && ([a2, r2] = [r2, a2]), { min: a2, max: r2 };
  }
  function es(t10, e2, a2) {
    return { min: ei(t10, e2), max: ei(t10, a2) };
  }
  function ei(t10, e2) {
    return "number" == typeof t10 ? t10 : t10[e2] || 0;
  }
  try {
    var eo = "u" > typeof window ? window : t.g;
    eo._sentryModuleMetadata = eo._sentryModuleMetadata || {}, eo._sentryModuleMetadata[new eo.Error().stack] = Object.assign({}, eo._sentryModuleMetadata[new eo.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let el = /* @__PURE__ */ new WeakMap();
  class ed {
    constructor(t10) {
      this.openDragLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = (0, tg.createBox)(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t10;
    }
    start(t10, { snapToCursor: e2 = false, distanceThreshold: a2 } = {}) {
      let { presenceContext: r2 } = this.visualElement;
      if (r2 && false === r2.isPresent) return;
      let n2 = (t11) => {
        e2 && this.snapToCursor(tH(t11).point), this.stopAnimation();
      }, s2 = (t11, e3) => {
        let { drag: a3, dragPropagation: r3, onDragStart: n3 } = this.getProps();
        if (a3 && !r3 && (this.openDragLock && this.openDragLock(), this.openDragLock = (function(t12) {
          if ("x" === t12 || "y" === t12) if (tS[t12]) return null;
          else return tS[t12] = true, () => {
            tS[t12] = false;
          };
          return tS.x || tS.y ? null : (tS.x = tS.y = true, () => {
            tS.x = tS.y = false;
          });
        })(a3), !this.openDragLock)) return;
        this.latestPointerEvent = t11, this.latestPanInfo = e3, this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), t_((t12) => {
          let e4 = this.getAxisMotionValue(t12).get() || 0;
          if (tj.percent.test(e4)) {
            let { projection: a4 } = this.visualElement;
            if (a4 && a4.layout) {
              let r4 = a4.layout.layoutBox[t12];
              r4 && (e4 = tK(r4) * (parseFloat(e4) / 100));
            }
          }
          this.originPoint[t12] = e4;
        }), n3 && tf.frame.update(() => n3(t11, e3), false, true), (0, tb.addValueToWillChange)(this.visualElement, "transform");
        let { animationState: s3 } = this.visualElement;
        s3 && s3.setActive("whileDrag", true);
      }, i2 = (t11, e3) => {
        this.latestPointerEvent = t11, this.latestPanInfo = e3;
        let { dragPropagation: a3, dragDirectionLock: r3, onDirectionLock: n3, onDrag: s3 } = this.getProps();
        if (!a3 && !this.openDragLock) return;
        let { offset: i3 } = e3;
        if (r3 && null === this.currentDirection) {
          this.currentDirection = (function(t12, e4 = 10) {
            let a4 = null;
            return Math.abs(t12.y) > e4 ? a4 = "y" : Math.abs(t12.x) > e4 && (a4 = "x"), a4;
          })(i3), null !== this.currentDirection && n3 && n3(this.currentDirection);
          return;
        }
        this.updateAxis("x", e3.point, i3), this.updateAxis("y", e3.point, i3), this.visualElement.render(), s3 && tf.frame.update(() => s3(t11, e3), false, true);
      }, o2 = (t11, e3) => {
        this.latestPointerEvent = t11, this.latestPanInfo = e3, this.stop(t11, e3), this.latestPointerEvent = null, this.latestPanInfo = null;
      }, l2 = () => {
        let { dragSnapToOrigin: t11 } = this.getProps();
        (t11 || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      }, { dragSnapToOrigin: d2 } = this.getProps();
      this.panSession = new t6(t10, { onSessionStart: n2, onStart: s2, onMove: i2, onSessionEnd: o2, resumeAnimation: l2 }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: d2, distanceThreshold: a2, contextWindow: tJ(this.visualElement), element: this.visualElement.current });
    }
    stop(t10, e2) {
      let a2 = t10 || this.latestPointerEvent, r2 = e2 || this.latestPanInfo, n2 = this.isDragging;
      if (this.cancel(), !n2 || !r2 || !a2) return;
      let { velocity: s2 } = r2;
      this.startAnimation(s2);
      let { onDragEnd: i2 } = this.getProps();
      i2 && tf.frame.postRender(() => i2(a2, r2));
    }
    cancel() {
      this.isDragging = false;
      let { projection: t10, animationState: e2 } = this.visualElement;
      t10 && (t10.isAnimationBlocked = false), this.endPanSession();
      let { dragPropagation: a2 } = this.getProps();
      !a2 && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e2 && e2.setActive("whileDrag", false);
    }
    endPanSession() {
      this.panSession && this.panSession.end(), this.panSession = void 0;
    }
    updateAxis(t10, e2, a2) {
      let { drag: r2 } = this.getProps();
      if (!a2 || !ec(t10, r2, this.currentDirection)) return;
      let n2 = this.getAxisMotionValue(t10), s2 = this.originPoint[t10] + a2[t10];
      this.constraints && this.constraints[t10] && (s2 = (function(t11, { min: e3, max: a3 }, r3) {
        return void 0 !== e3 && t11 < e3 ? t11 = r3 ? (0, tx.mixNumber)(e3, t11, r3.min) : Math.max(t11, e3) : void 0 !== a3 && t11 > a3 && (t11 = r3 ? (0, tx.mixNumber)(a3, t11, r3.max) : Math.min(t11, a3)), t11;
      })(s2, this.constraints[t10], this.elastic[t10])), n2.set(s2);
    }
    resolveConstraints() {
      let { dragConstraints: t10, dragElastic: e2 } = this.getProps(), a2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout, r2 = this.constraints;
      t10 && F(t10) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t10 && a2 ? this.constraints = (function(t11, { top: e3, left: a3, bottom: r3, right: n2 }) {
        return { x: er(t11.x, a3, n2), y: er(t11.y, e3, r3) };
      })(a2.layoutBox, t10) : this.constraints = false, this.elastic = (function(t11 = 0.35) {
        return false === t11 ? t11 = 0 : true === t11 && (t11 = 0.35), { x: es(t11, "left", "right"), y: es(t11, "top", "bottom") };
      })(e2), r2 !== this.constraints && !F(t10) && a2 && this.constraints && !this.hasMutatedConstraints && t_((t11) => {
        var e3, r3;
        let n2;
        false !== this.constraints && this.getAxisMotionValue(t11) && (this.constraints[t11] = (e3 = a2.layoutBox[t11], r3 = this.constraints[t11], n2 = {}, void 0 !== r3.min && (n2.min = r3.min - e3.min), void 0 !== r3.max && (n2.max = r3.max - e3.min), n2));
      });
    }
    resolveRefConstraints() {
      var t10;
      let { dragConstraints: e2, onMeasureDragConstraints: a2 } = this.getProps();
      if (!e2 || !F(e2)) return false;
      let r2 = e2.current;
      (0, tW.invariant)(null !== r2, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
      let { projection: n2 } = this.visualElement;
      if (!n2 || !n2.layout) return false;
      let s2 = (0, tE.measurePageBox)(r2, n2.root, this.visualElement.getTransformPagePoint()), i2 = (t10 = n2.layout.layoutBox, { x: en(t10.x, s2.x), y: en(t10.y, s2.y) });
      if (a2) {
        let t11 = a2((0, tk.convertBoxToBoundingBox)(i2));
        this.hasMutatedConstraints = !!t11, t11 && (i2 = (0, tk.convertBoundingBoxToBox)(t11));
      }
      return i2;
    }
    startAnimation(t10) {
      let { drag: e2, dragMomentum: a2, dragElastic: r2, dragTransition: n2, dragSnapToOrigin: s2, onDragTransitionEnd: i2 } = this.getProps(), o2 = this.constraints || {};
      return Promise.all(t_((i3) => {
        if (!ec(i3, e2, this.currentDirection)) return;
        let l2 = o2 && o2[i3] || {};
        (true === s2 || s2 === i3) && (l2 = { min: 0, max: 0 });
        let d2 = { type: "inertia", velocity: a2 ? t10[i3] : 0, bounceStiffness: r2 ? 200 : 1e6, bounceDamping: r2 ? 40 : 1e7, timeConstant: 750, restDelta: 1, restSpeed: 10, ...n2, ...l2 };
        return this.startAxisValueAnimation(i3, d2);
      })).then(i2);
    }
    startAxisValueAnimation(t10, e2) {
      let a2 = this.getAxisMotionValue(t10);
      return (0, tb.addValueToWillChange)(this.visualElement, t10), a2.start((0, tP.animateMotionValue)(t10, a2, 0, e2, this.visualElement, false));
    }
    stopAnimation() {
      t_((t10) => this.getAxisMotionValue(t10).stop());
    }
    getAxisMotionValue(t10) {
      let e2 = `_drag${t10.toUpperCase()}`, a2 = this.visualElement.getProps();
      return a2[e2] || this.visualElement.getValue(t10, (a2.initial ? a2.initial[t10] : void 0) || 0);
    }
    snapToCursor(t10) {
      t_((e2) => {
        let { drag: a2 } = this.getProps();
        if (!ec(e2, a2, this.currentDirection)) return;
        let { projection: r2 } = this.visualElement, n2 = this.getAxisMotionValue(e2);
        if (r2 && r2.layout) {
          let { min: a3, max: s2 } = r2.layout.layoutBox[e2], i2 = n2.get() || 0;
          n2.set(t10[e2] - (0, tx.mixNumber)(a3, s2, 0.5) + i2);
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: t10, dragConstraints: e2 } = this.getProps(), { projection: a2 } = this.visualElement;
      if (!F(e2) || !a2 || !this.constraints) return;
      this.stopAnimation();
      let r2 = { x: 0, y: 0 };
      t_((t11) => {
        let e3 = this.getAxisMotionValue(t11);
        if (e3 && false !== this.constraints) {
          var a3, n3;
          let s2, i2, o2, l2 = e3.get();
          r2[t11] = (a3 = { min: l2, max: l2 }, n3 = this.constraints[t11], s2 = 0.5, i2 = tK(a3), (o2 = tK(n3)) > i2 ? s2 = (0, et.progress)(n3.min, n3.max - i2, a3.min) : i2 > o2 && (s2 = (0, et.progress)(a3.min, a3.max - o2, n3.min)), (0, ee.clamp)(0, 1, s2));
        }
      });
      let { transformTemplate: n2 } = this.visualElement.getProps();
      this.visualElement.current.style.transform = n2 ? n2({}, "") : "none", a2.root && a2.root.updateScroll(), a2.updateLayout(), this.constraints = false, this.resolveConstraints(), t_((e3) => {
        if (!ec(e3, t10, null)) return;
        let a3 = this.getAxisMotionValue(e3), { min: n3, max: s2 } = this.constraints[e3];
        a3.set((0, tx.mixNumber)(n3, s2, r2[e3]));
      }), this.visualElement.render();
    }
    addListeners() {
      let t10;
      if (!this.visualElement.current) return;
      el.set(this.visualElement, this);
      let e2 = this.visualElement.current, a2 = tq(e2, "pointerdown", (t11) => {
        let { drag: a3, dragListener: r3 = true } = this.getProps(), n3 = t11.target, s3 = n3 !== e2 && tU(n3);
        a3 && r3 && !s3 && this.start(t11);
      }), r2 = () => {
        var a3, r3, n3;
        let s3, i3, { dragConstraints: o3 } = this.getProps();
        F(o3) && o3.current && (this.constraints = this.resolveRefConstraints(), t10 || (a3 = e2, r3 = o3.current, n3 = () => this.scalePositionWithinConstraints(), s3 = (0, tL.resize)(a3, eu(n3)), i3 = (0, tL.resize)(r3, eu(n3)), t10 = () => {
          s3(), i3();
        }));
      }, { projection: n2 } = this.visualElement, s2 = n2.addEventListener("measure", r2);
      n2 && !n2.layout && (n2.root && n2.root.updateScroll(), n2.updateLayout()), tf.frame.read(r2);
      let i2 = tT(window, "resize", () => this.scalePositionWithinConstraints()), o2 = n2.addEventListener("didUpdate", ({ delta: t11, hasLayoutChanged: e3 }) => {
        this.isDragging && e3 && (t_((e4) => {
          let a3 = this.getAxisMotionValue(e4);
          a3 && (this.originPoint[e4] += t11[e4].translate, a3.set(a3.get() + t11[e4].translate));
        }), this.visualElement.render());
      });
      return () => {
        i2(), a2(), s2(), o2 && o2(), t10 && t10();
      };
    }
    getProps() {
      let t10 = this.visualElement.getProps(), { drag: e2 = false, dragDirectionLock: a2 = false, dragPropagation: r2 = false, dragConstraints: n2 = false, dragElastic: s2 = 0.35, dragMomentum: i2 = true } = t10;
      return { ...t10, drag: e2, dragDirectionLock: a2, dragPropagation: r2, dragConstraints: n2, dragElastic: s2, dragMomentum: i2 };
    }
  }
  function eu(t10) {
    let e2 = true;
    return () => {
      if (e2) {
        e2 = false;
        return;
      }
      t10();
    };
  }
  function ec(t10, e2, a2) {
    return (true === e2 || e2 === t10) && (null === a2 || a2 === t10);
  }
  try {
    var ey = "u" > typeof window ? window : t.g;
    ey._sentryModuleMetadata = ey._sentryModuleMetadata || {}, ey._sentryModuleMetadata[new ey.Error().stack] = Object.assign({}, ey._sentryModuleMetadata[new ey.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  t.s(["DragGesture", 0, class extends $ {
    constructor(t10) {
      super(t10), this.removeGroupControls = tm.noop, this.removeListeners = tm.noop, this.controls = new ed(t10);
    }
    mount() {
      let { dragControls: t10 } = this.node.getProps();
      t10 && (this.removeGroupControls = t10.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || tm.noop;
    }
    update() {
      let { dragControls: t10 } = this.node.getProps(), { dragControls: e2 } = this.node.prevProps || {};
      t10 !== e2 && (this.removeGroupControls(), t10 && (this.removeGroupControls = t10.subscribe(this.controls)));
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
    }
  }], 550743);
  try {
    var ep = "u" > typeof window ? window : t.g;
    ep._sentryModuleMetadata = ep._sentryModuleMetadata || {}, ep._sentryModuleMetadata[new ep.Error().stack] = Object.assign({}, ep._sentryModuleMetadata[new ep.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let eh = (t10) => (e2, a2) => {
    t10 && tf.frame.update(() => t10(e2, a2), false, true);
  };
  t.s(["PanGesture", 0, class extends $ {
    constructor() {
      super(...arguments), this.removePointerDownListener = tm.noop;
    }
    onPointerDown(t10) {
      this.session = new t6(t10, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: tJ(this.node) });
    }
    createPanHandlers() {
      let { onPanSessionStart: t10, onPanStart: e2, onPan: a2, onPanEnd: r2 } = this.node.getProps();
      return { onSessionStart: eh(t10), onStart: eh(e2), onMove: eh(a2), onEnd: (t11, e3) => {
        delete this.session, r2 && tf.frame.postRender(() => r2(t11, e3));
      } };
    }
    mount() {
      this.removePointerDownListener = tq(this.node.current, "pointerdown", (t10) => this.onPointerDown(t10));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }], 39993);
  try {
    var eM = "u" > typeof window ? window : t.g;
    eM._sentryModuleMetadata = eM._sentryModuleMetadata || {}, eM._sentryModuleMetadata[new eM.Error().stack] = Object.assign({}, eM._sentryModuleMetadata[new eM.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  t.s(["globalProjectionState", 0, { hasAnimatedSinceResize: true, hasEverUpdated: false }], 524785);
}, 112086, (t) => {
  "use strict";
  var e = t.i(818454), a = t.i(933112), r = t.i(441169), n = t.i(550743), s = t.i(39993), i = t.i(68982), o = t.i(524785), l = t.i(967682), d = t.i(427139), u = t.i(856757), c = t.i(718015), y = t.i(807464), p = t.i(636333);
  try {
    var h = "u" > typeof window ? window : t.g;
    h._sentryModuleMetadata = h._sentryModuleMetadata || {}, h._sentryModuleMetadata[new h.Error().stack] = Object.assign({}, h._sentryModuleMetadata[new h.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let M = false;
  class w extends u.Component {
    componentDidMount() {
      let { visualElement: t10, layoutGroup: e2, switchLayoutGroup: a2, layoutId: r2 } = this.props, { projection: n2 } = t10;
      n2 && (e2.group && e2.group.add(n2), a2 && a2.register && r2 && a2.register(n2), M && n2.root.didUpdate(), n2.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }), n2.setOptions({ ...n2.options, layoutDependency: this.props.layoutDependency, onExitComplete: () => this.safeToRemove() })), o.globalProjectionState.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(t10) {
      let { layoutDependency: e2, visualElement: a2, drag: r2, isPresent: n2 } = this.props, { projection: s2 } = a2;
      return s2 && (s2.isPresent = n2, t10.layoutDependency !== e2 && s2.setOptions({ ...s2.options, layoutDependency: e2 }), M = true, r2 || t10.layoutDependency !== e2 || void 0 === e2 || t10.isPresent !== n2 ? s2.willUpdate() : this.safeToRemove(), t10.isPresent !== n2 && (n2 ? s2.promote() : s2.relegate() || l.frame.postRender(() => {
        let t11 = s2.getStack();
        t11 && t11.members.length || this.safeToRemove();
      }))), null;
    }
    componentDidUpdate() {
      let { visualElement: t10, layoutAnchor: e2 } = this.props, { projection: a2 } = t10;
      a2 && (a2.options.layoutAnchor = e2, a2.root.didUpdate(), d.microtask.postRender(() => {
        !a2.currentAnimation && a2.isLead() && this.safeToRemove();
      }));
    }
    componentWillUnmount() {
      let { visualElement: t10, layoutGroup: e2, switchLayoutGroup: a2 } = this.props, { projection: r2 } = t10;
      M = true, r2 && (r2.scheduleCheckAfterUnmount(), e2 && e2.group && e2.group.remove(r2), a2 && a2.deregister && a2.deregister(r2));
    }
    safeToRemove() {
      let { safeToRemove: t10 } = this.props;
      t10 && t10();
    }
    render() {
      return null;
    }
  }
  function m(t10) {
    let [e2, a2] = (0, c.usePresence)(), r2 = (0, u.useContext)(y.LayoutGroupContext);
    return (0, i.jsx)(w, { ...t10, layoutGroup: r2, switchLayoutGroup: (0, u.useContext)(p.SwitchLayoutGroupContext), isPresent: e2, safeToRemove: a2 });
  }
  var g = t.i(796457), f = t.i(493858), v = t.i(470919), _ = t.i(597849), E = t.i(530017), k = t.i(138526), b = t.i(957798), P = t.i(639068), x = t.i(431772), A = t.i(94907);
  t.i(490692);
  try {
    var T = "u" > typeof window ? window : t.g;
    T._sentryModuleMetadata = T._sentryModuleMetadata || {}, T._sentryModuleMetadata[new T.Error().stack] = Object.assign({}, T._sentryModuleMetadata[new T.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  var B = t.i(838752), S = t.i(497474), O = t.i(870820), j = t.i(702915), V = t.i(891945), K = t.i(409138), C = t.i(241058), D = t.i(771559);
  try {
    var R = "u" > typeof window ? window : t.g;
    R._sentryModuleMetadata = R._sentryModuleMetadata || {}, R._sentryModuleMetadata[new R.Error().stack] = Object.assign({}, R._sentryModuleMetadata[new R.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let L = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"], F = L.length, I = (t10) => "string" == typeof t10 ? parseFloat(t10) : t10, N = (t10) => "number" == typeof t10 || K.px.test(t10);
  function U(t10, e2) {
    return void 0 !== t10[e2] ? t10[e2] : t10.borderRadius;
  }
  let W = z(0, 0.5, D.circOut), G = z(0.5, 0.95, v.noop);
  function z(t10, e2, a2) {
    return (r2) => r2 < t10 ? 0 : r2 > e2 ? 1 : a2((0, C.progress)(t10, e2, r2));
  }
  try {
    var $ = "u" > typeof window ? window : t.g;
    $._sentryModuleMetadata = $._sentryModuleMetadata || {}, $._sentryModuleMetadata[new $.Error().stack] = Object.assign({}, $._sentryModuleMetadata[new $.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function H(t10, e2) {
    t10.min = e2.min, t10.max = e2.max;
  }
  function Y(t10, e2) {
    H(t10.x, e2.x), H(t10.y, e2.y);
  }
  function X(t10, e2) {
    t10.translate = e2.translate, t10.scale = e2.scale, t10.originPoint = e2.originPoint, t10.origin = e2.origin;
  }
  var q = t.i(656731), Z = t.i(413316);
  try {
    var J = "u" > typeof window ? window : t.g;
    J._sentryModuleMetadata = J._sentryModuleMetadata || {}, J._sentryModuleMetadata[new J.Error().stack] = Object.assign({}, J._sentryModuleMetadata[new J.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function Q(t10, e2, a2, r2, n2) {
    return t10 -= e2, t10 = (0, q.scalePoint)(t10, 1 / a2, r2), void 0 !== n2 && (t10 = (0, q.scalePoint)(t10, 1 / n2, r2)), t10;
  }
  function tt(t10, e2, [a2, r2, n2], s2, i2) {
    !(function(t11, e3 = 0, a3 = 1, r3 = 0.5, n3, s3 = t11, i3 = t11) {
      if (K.percent.test(e3) && (e3 = parseFloat(e3), e3 = (0, O.mixNumber)(i3.min, i3.max, e3 / 100) - i3.min), "number" != typeof e3) return;
      let o2 = (0, O.mixNumber)(s3.min, s3.max, r3);
      t11 === s3 && (o2 -= e3), t11.min = Q(t11.min, e3, a3, o2, n3), t11.max = Q(t11.max, e3, a3, o2, n3);
    })(t10, e2[a2], e2[r2], e2[n2], e2.scale, s2, i2);
  }
  let te = ["x", "scaleX", "originX"], ta = ["y", "scaleY", "originY"];
  function tr(t10, e2, a2, r2) {
    tt(t10.x, e2, te, a2 ? a2.x : void 0, r2 ? r2.x : void 0), tt(t10.y, e2, ta, a2 ? a2.y : void 0, r2 ? r2.y : void 0);
  }
  var tn = t.i(427684);
  try {
    var ts = "u" > typeof window ? window : t.g;
    ts._sentryModuleMetadata = ts._sentryModuleMetadata || {}, ts._sentryModuleMetadata[new ts.Error().stack] = Object.assign({}, ts._sentryModuleMetadata[new ts.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function ti(t10) {
    return 0 === t10.translate && 1 === t10.scale;
  }
  function to(t10) {
    return ti(t10.x) && ti(t10.y);
  }
  function tl(t10, e2) {
    return t10.min === e2.min && t10.max === e2.max;
  }
  function td(t10, e2) {
    return Math.round(t10.min) === Math.round(e2.min) && Math.round(t10.max) === Math.round(e2.max);
  }
  function tu(t10, e2) {
    return td(t10.x, e2.x) && td(t10.y, e2.y);
  }
  function tc(t10) {
    return (0, Z.calcLength)(t10.x) / (0, Z.calcLength)(t10.y);
  }
  function ty(t10, e2) {
    return t10.translate === e2.translate && t10.scale === e2.scale && t10.originPoint === e2.originPoint;
  }
  var tp = t.i(57307);
  try {
    var th = "u" > typeof window ? window : t.g;
    th._sentryModuleMetadata = th._sentryModuleMetadata || {}, th._sentryModuleMetadata[new th.Error().stack] = Object.assign({}, th._sentryModuleMetadata[new th.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  class tM {
    constructor() {
      this.members = [];
    }
    add(t10) {
      (0, tp.addUniqueItem)(this.members, t10);
      for (let e2 = this.members.length - 1; e2 >= 0; e2--) {
        let a2 = this.members[e2];
        if (a2 === t10 || a2 === this.lead || a2 === this.prevLead) continue;
        let r2 = a2.instance;
        r2 && false !== r2.isConnected || a2.snapshot || ((0, tp.removeItem)(this.members, a2), a2.unmount());
      }
      t10.scheduleRender();
    }
    remove(t10) {
      if ((0, tp.removeItem)(this.members, t10), t10 === this.prevLead && (this.prevLead = void 0), t10 === this.lead) {
        let t11 = this.members[this.members.length - 1];
        t11 && this.promote(t11);
      }
    }
    relegate(t10) {
      for (let e2 = this.members.indexOf(t10) - 1; e2 >= 0; e2--) {
        let t11 = this.members[e2];
        if (false !== t11.isPresent && t11.instance?.isConnected !== false) return this.promote(t11), true;
      }
      return false;
    }
    promote(t10, e2) {
      let a2 = this.lead;
      if (t10 !== a2 && (this.prevLead = a2, this.lead = t10, t10.show(), a2)) {
        a2.updateSnapshot(), t10.scheduleRender();
        let { layoutDependency: r2 } = a2.options, { layoutDependency: n2 } = t10.options;
        (void 0 === r2 || r2 !== n2) && (t10.resumeFrom = a2, e2 && (a2.preserveOpacity = true), a2.snapshot && (t10.snapshot = a2.snapshot, t10.snapshot.latestValues = a2.animationValues || a2.latestValues), t10.root?.isUpdating && (t10.isLayoutDirty = true)), false === t10.options.crossfade && a2.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((t10) => {
        t10.options.onExitComplete?.(), t10.resumingFrom?.options.onExitComplete?.();
      });
    }
    scheduleRender() {
      this.members.forEach((t10) => t10.instance && t10.scheduleRender(false));
    }
    removeLeadSnapshot() {
      this.lead?.snapshot && (this.lead.snapshot = void 0);
    }
  }
  try {
    var tw = "u" > typeof window ? window : t.g;
    tw._sentryModuleMetadata = tw._sentryModuleMetadata || {}, tw._sentryModuleMetadata[new tw.Error().stack] = Object.assign({}, tw._sentryModuleMetadata[new tw.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  var tm = t.i(692672);
  try {
    var tg = "u" > typeof window ? window : t.g;
    tg._sentryModuleMetadata = tg._sentryModuleMetadata || {}, tg._sentryModuleMetadata[new tg.Error().stack] = Object.assign({}, tg._sentryModuleMetadata[new tg.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let tf = (t10, e2) => t10.depth - e2.depth;
  try {
    var tv = "u" > typeof window ? window : t.g;
    tv._sentryModuleMetadata = tv._sentryModuleMetadata || {}, tv._sentryModuleMetadata[new tv.Error().stack] = Object.assign({}, tv._sentryModuleMetadata[new tv.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  class t_ {
    constructor() {
      this.children = [], this.isDirty = false;
    }
    add(t10) {
      (0, tp.addUniqueItem)(this.children, t10), this.isDirty = true;
    }
    remove(t10) {
      (0, tp.removeItem)(this.children, t10), this.isDirty = true;
    }
    forEach(t10) {
      this.isDirty && this.children.sort(tf), this.isDirty = false, this.children.forEach(t10);
    }
  }
  var tE = t.i(961417);
  try {
    var tk = "u" > typeof window ? window : t.g;
    tk._sentryModuleMetadata = tk._sentryModuleMetadata || {}, tk._sentryModuleMetadata[new tk.Error().stack] = Object.assign({}, tk._sentryModuleMetadata[new tk.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let tb = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 }, tP = ["", "X", "Y", "Z"], tx = 0;
  function tA(t10, e2, a2, r2) {
    let { latestValues: n2 } = e2;
    n2[t10] && (a2[t10] = n2[t10], e2.setStaticValue(t10, 0), r2 && (r2[t10] = 0));
  }
  function tT({ attachResizeListener: t10, defaultParent: e2, measureScroll: a2, checkIsScrollRoot: r2, resetTransform: n2 }) {
    return class {
      constructor(t11 = {}, a3 = e2?.()) {
        this.id = tx++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.layoutVersion = 0, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          this.projectionUpdateScheduled = false, A.statsBuffer.value && (tb.nodes = tb.calculatedTargetDeltas = tb.calculatedProjections = 0), this.nodes.forEach(tO), this.nodes.forEach(tI), this.nodes.forEach(tN), this.nodes.forEach(tj), A.statsBuffer.addProjectionMetrics && A.statsBuffer.addProjectionMetrics(tb);
        }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = t11, this.root = a3 ? a3.root || a3 : this, this.path = a3 ? [...a3.path, a3] : [], this.parent = a3, this.depth = a3 ? a3.depth + 1 : 0;
        for (let t12 = 0; t12 < this.path.length; t12++) this.path[t12].shouldResetTransform = true;
        this.root === this && (this.nodes = new t_());
      }
      addEventListener(t11, e3) {
        return this.eventHandlers.has(t11) || this.eventHandlers.set(t11, new g.SubscriptionManager()), this.eventHandlers.get(t11).add(e3);
      }
      notifyListeners(t11, ...e3) {
        let a3 = this.eventHandlers.get(t11);
        a3 && a3.notify(...e3);
      }
      hasListeners(t11) {
        return this.eventHandlers.has(t11);
      }
      mount(e3) {
        if (this.instance) return;
        this.isSVG = (0, B.isSVGElement)(e3) && !(0, S.isSVGSVGElement)(e3), this.instance = e3;
        let { layoutId: a3, layout: r3, visualElement: n3 } = this.options;
        if (n3 && !n3.current && n3.mount(e3), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r3 || a3) && (this.isLayoutDirty = true), t10) {
          let a4, r4 = 0, n4 = () => this.root.updateBlockedByResize = false;
          l.frame.read(() => {
            r4 = window.innerWidth;
          }), t10(e3, () => {
            let t11 = window.innerWidth;
            if (t11 !== r4) {
              let e4, s2;
              r4 = t11, this.root.updateBlockedByResize = true, a4 && a4(), e4 = b.time.now(), s2 = ({ timestamp: t12 }) => {
                let a5 = t12 - e4;
                a5 >= 250 && ((0, l.cancelFrame)(s2), n4());
              }, l.frame.setup(s2, true), a4 = () => (0, l.cancelFrame)(s2), o.globalProjectionState.hasAnimatedSinceResize && (o.globalProjectionState.hasAnimatedSinceResize = false, this.nodes.forEach(tF));
            }
          });
        }
        a3 && this.root.registerSharedNode(a3, this), false !== this.options.animate && n3 && (a3 || r3) && this.addEventListener("didUpdate", ({ delta: t11, hasLayoutChanged: e4, hasRelativeLayoutChanged: a4, layout: r4 }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return;
          }
          let s2 = this.options.transition || n3.getDefaultTransition() || tH, { onLayoutAnimationStart: i2, onLayoutAnimationComplete: o2 } = n3.getProps(), l2 = !this.targetLayout || !tu(this.targetLayout, r4), d2 = !e4 && a4;
          if (this.options.layoutRoot || this.resumeFrom || d2 || e4 && (l2 || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
            let e5 = { ...(0, k.getValueTransition)(s2, "layout"), onPlay: i2, onComplete: o2 };
            (n3.shouldReduceMotion || this.options.layoutRoot) && (e5.delay = 0, e5.type = false), this.startAnimation(e5), this.setAnimationOrigin(t11, d2);
          } else e4 || tF(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = r4;
        });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
        let t11 = this.getStack();
        t11 && t11.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), (0, l.cancelFrame)(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = true;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = false;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
      }
      startUpdate() {
        !this.isUpdateBlocked() && (this.isUpdating = true, this.nodes && this.nodes.forEach(tU), this.animationId++);
      }
      getTransformTemplate() {
        let { visualElement: t11 } = this.options;
        return t11 && t11.getProps().transformTemplate;
      }
      willUpdate(t11 = true) {
        if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && (function t12(e4) {
          if (e4.hasCheckedOptimisedAppear = true, e4.root === e4) return;
          let { visualElement: a4 } = e4.options;
          if (!a4) return;
          let r4 = (0, E.getOptimisedAppearId)(a4);
          if (window.MotionHasOptimisedAnimation(r4, "transform")) {
            let { layout: t13, layoutId: a5 } = e4.options;
            window.MotionCancelOptimisedAnimation(r4, "transform", l.frame, !(t13 || a5));
          }
          let { parent: n3 } = e4;
          n3 && !n3.hasCheckedOptimisedAppear && t12(n3);
        })(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
        this.isLayoutDirty = true;
        for (let t12 = 0; t12 < this.path.length; t12++) {
          let e4 = this.path[t12];
          e4.shouldResetTransform = true, ("string" == typeof e4.latestValues.x || "string" == typeof e4.latestValues.y) && (e4.isLayoutDirty = true), e4.updateScroll("snapshot"), e4.options.layoutRoot && e4.willUpdate(false);
        }
        let { layoutId: e3, layout: a3 } = this.options;
        if (void 0 === e3 && !a3) return;
        let r3 = this.getTransformTemplate();
        this.prevTransformTemplateValue = r3 ? r3(this.latestValues, "") : void 0, this.updateSnapshot(), t11 && this.notifyListeners("willUpdate");
      }
      update() {
        if (this.updateScheduled = false, this.isUpdateBlocked()) {
          let t12 = this.updateBlockedByResize;
          this.unblockUpdate(), this.updateBlockedByResize = false, this.clearAllSnapshots(), t12 && this.nodes.forEach(tC), this.nodes.forEach(tK);
          return;
        }
        if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(tD);
        this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = false, this.nodes.forEach(tR), this.nodes.forEach(tL), this.nodes.forEach(tB), this.nodes.forEach(tS)) : this.nodes.forEach(tD), this.clearAllSnapshots();
        let t11 = b.time.now();
        l.frameData.delta = (0, f.clamp)(0, 1e3 / 60, t11 - l.frameData.timestamp), l.frameData.timestamp = t11, l.frameData.isProcessing = true, l.frameSteps.update.process(l.frameData), l.frameSteps.preRender.process(l.frameData), l.frameSteps.render.process(l.frameData), l.frameData.isProcessing = false;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = true, d.microtask.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(tV), this.sharedNodes.forEach(tW);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, l.frame.preRender(this.updateProjection, false, true));
      }
      scheduleCheckAfterUnmount() {
        l.frame.postRender(() => {
          this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || (0, Z.calcLength)(this.snapshot.measuredBox.x) || (0, Z.calcLength)(this.snapshot.measuredBox.y) || (this.snapshot = void 0));
      }
      updateLayout() {
        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
        if (this.resumeFrom && !this.resumeFrom.instance) for (let t12 = 0; t12 < this.path.length; t12++) this.path[t12].updateScroll();
        let t11 = this.layout;
        this.layout = this.measure(false), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = (0, tn.createBox)()), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
        let { visualElement: e3 } = this.options;
        e3 && e3.notify("LayoutMeasure", this.layout.layoutBox, t11 ? t11.layoutBox : void 0);
      }
      updateScroll(t11 = "measure") {
        let e3 = !!(this.options.layoutScroll && this.instance);
        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t11 && (e3 = false), e3 && this.instance) {
          let e4 = r2(this.instance);
          this.scroll = { animationId: this.root.animationId, phase: t11, isRoot: e4, offset: a2(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : e4 };
        }
      }
      resetTransform() {
        if (!n2) return;
        let t11 = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, e3 = this.projectionDelta && !to(this.projectionDelta), a3 = this.getTransformTemplate(), r3 = a3 ? a3(this.latestValues, "") : void 0, s2 = r3 !== this.prevTransformTemplateValue;
        t11 && this.instance && (e3 || (0, tE.hasTransform)(this.latestValues) || s2) && (n2(this.instance, r3), this.shouldResetTransform = false, this.scheduleRender());
      }
      measure(t11 = true) {
        var e3;
        let a3 = this.measurePageBox(), r3 = this.removeElementScroll(a3);
        return t11 && (r3 = this.removeTransform(r3)), tq((e3 = r3).x), tq(e3.y), { animationId: this.root.animationId, measuredBox: a3, layoutBox: r3, latestValues: {}, source: this.id };
      }
      measurePageBox() {
        let { visualElement: t11 } = this.options;
        if (!t11) return (0, tn.createBox)();
        let e3 = t11.measureViewportBox();
        if (!(this.scroll?.wasRoot || this.path.some(tJ))) {
          let { scroll: t12 } = this.root;
          t12 && ((0, q.translateAxis)(e3.x, t12.offset.x), (0, q.translateAxis)(e3.y, t12.offset.y));
        }
        return e3;
      }
      removeElementScroll(t11) {
        let e3 = (0, tn.createBox)();
        if (Y(e3, t11), this.scroll?.wasRoot) return e3;
        for (let a3 = 0; a3 < this.path.length; a3++) {
          let r3 = this.path[a3], { scroll: n3, options: s2 } = r3;
          r3 !== this.root && n3 && s2.layoutScroll && (n3.wasRoot && Y(e3, t11), (0, q.translateAxis)(e3.x, n3.offset.x), (0, q.translateAxis)(e3.y, n3.offset.y));
        }
        return e3;
      }
      applyTransform(t11, e3 = false, a3) {
        let r3 = a3 || (0, tn.createBox)();
        Y(r3, t11);
        for (let t12 = 0; t12 < this.path.length; t12++) {
          let a4 = this.path[t12];
          !e3 && a4.options.layoutScroll && a4.scroll && a4 !== a4.root && ((0, q.translateAxis)(r3.x, -a4.scroll.offset.x), (0, q.translateAxis)(r3.y, -a4.scroll.offset.y)), (0, tE.hasTransform)(a4.latestValues) && (0, q.transformBox)(r3, a4.latestValues, a4.layout?.layoutBox);
        }
        return (0, tE.hasTransform)(this.latestValues) && (0, q.transformBox)(r3, this.latestValues, this.layout?.layoutBox), r3;
      }
      removeTransform(t11) {
        let e3 = (0, tn.createBox)();
        Y(e3, t11);
        for (let t12 = 0; t12 < this.path.length; t12++) {
          let a3, r3 = this.path[t12];
          (0, tE.hasTransform)(r3.latestValues) && (r3.instance && ((0, tE.hasScale)(r3.latestValues) && r3.updateSnapshot(), Y(a3 = (0, tn.createBox)(), r3.measurePageBox())), tr(e3, r3.latestValues, r3.snapshot?.layoutBox, a3));
        }
        return (0, tE.hasTransform)(this.latestValues) && tr(e3, this.latestValues), e3;
      }
      setTargetDelta(t11) {
        this.targetDelta = t11, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
      }
      setOptions(t11) {
        this.options = { ...this.options, ...t11, crossfade: void 0 === t11.crossfade || t11.crossfade };
      }
      clearMeasurements() {
        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== l.frameData.timestamp && this.relativeParent.resolveTargetDelta(true);
      }
      resolveTargetDelta(t11 = false) {
        let e3 = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = e3.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e3.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e3.isSharedProjectionDirty);
        let a3 = !!this.resumingFrom || this !== e3;
        if (!(t11 || a3 && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
        let { layout: r3, layoutId: n3 } = this.options;
        if (!this.layout || !(r3 || n3)) return;
        this.resolvedRelativeTargetAt = l.frameData.timestamp;
        let s2 = this.getClosestProjectingParent();
        s2 && this.linkedParentVersion !== s2.layoutVersion && !s2.options.layoutRoot && this.removeRelativeTarget(), this.targetDelta || this.relativeTarget || (false !== this.options.layoutAnchor && s2 && s2.layout ? this.createRelativeTarget(s2, this.layout.layoutBox, s2.layout.layoutBox) : this.removeRelativeTarget()), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = (0, tn.createBox)(), this.targetWithTransforms = (0, tn.createBox)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), (0, Z.calcRelativeBox)(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, false, this.target) : Y(this.target, this.layout.layoutBox), (0, q.applyBoxDelta)(this.target, this.targetDelta)) : Y(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = false, false !== this.options.layoutAnchor && s2 && !!s2.resumingFrom == !!this.resumingFrom && !s2.options.layoutScroll && s2.target && 1 !== this.animationProgress ? this.createRelativeTarget(s2, this.target, s2.target) : this.relativeParent = this.relativeTarget = void 0), A.statsBuffer.value && tb.calculatedTargetDeltas++);
      }
      getClosestProjectingParent() {
        if (!(!this.parent || (0, tE.hasScale)(this.parent.latestValues) || (0, tE.has2DTranslate)(this.parent.latestValues))) if (this.parent.isProjecting()) return this.parent;
        else return this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      createRelativeTarget(t11, e3, a3) {
        this.relativeParent = t11, this.linkedParentVersion = t11.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, tn.createBox)(), this.relativeTargetOrigin = (0, tn.createBox)(), (0, Z.calcRelativePosition)(this.relativeTargetOrigin, e3, a3, this.options.layoutAnchor || void 0), Y(this.relativeTarget, this.relativeTargetOrigin);
      }
      removeRelativeTarget() {
        this.relativeParent = this.relativeTarget = void 0;
      }
      calcProjection() {
        let t11 = this.getLead(), e3 = !!this.resumingFrom || this !== t11, a3 = true;
        if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (a3 = false), e3 && (this.isSharedProjectionDirty || this.isTransformDirty) && (a3 = false), this.resolvedRelativeTargetAt === l.frameData.timestamp && (a3 = false), a3) return;
        let { layout: r3, layoutId: n3 } = this.options;
        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r3 || n3)) return;
        Y(this.layoutCorrected, this.layout.layoutBox);
        let s2 = this.treeScale.x, i2 = this.treeScale.y;
        (0, q.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, e3), t11.layout && !t11.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t11.target = t11.layout.layoutBox, t11.targetWithTransforms = (0, tn.createBox)());
        let { target: o2 } = t11;
        if (!o2) {
          this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        this.projectionDelta && this.prevProjectionDelta ? (X(this.prevProjectionDelta.x, this.projectionDelta.x), X(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), (0, Z.calcBoxDelta)(this.projectionDelta, this.layoutCorrected, o2, this.latestValues), this.treeScale.x === s2 && this.treeScale.y === i2 && ty(this.projectionDelta.x, this.prevProjectionDelta.x) && ty(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", o2)), A.statsBuffer.value && tb.calculatedProjections++;
      }
      hide() {
        this.isVisible = false;
      }
      show() {
        this.isVisible = true;
      }
      scheduleRender(t11 = true) {
        if (this.options.visualElement?.scheduleRender(), t11) {
          let t12 = this.getStack();
          t12 && t12.scheduleRender();
        }
        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        this.prevProjectionDelta = (0, tn.createDelta)(), this.projectionDelta = (0, tn.createDelta)(), this.projectionDeltaWithTransform = (0, tn.createDelta)();
      }
      setAnimationOrigin(t11, e3 = false) {
        let a3, r3 = this.snapshot, n3 = r3 ? r3.latestValues : {}, s2 = { ...this.latestValues }, i2 = (0, tn.createDelta)();
        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e3;
        let o2 = (0, tn.createBox)(), l2 = (r3 ? r3.source : void 0) !== (this.layout ? this.layout.source : void 0), d2 = this.getStack(), u2 = !d2 || d2.members.length <= 1, c2 = !!(l2 && !u2 && true === this.options.crossfade && !this.path.some(t$));
        this.animationProgress = 0, this.mixTargetDelta = (e4) => {
          let r4 = e4 / 1e3;
          if (tG(i2.x, t11.x, r4), tG(i2.y, t11.y, r4), this.setTargetDelta(i2), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
            var d3, y2, p2, h2, M2, w2;
            (0, Z.calcRelativePosition)(o2, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), p2 = this.relativeTarget, h2 = this.relativeTargetOrigin, M2 = o2, w2 = r4, tz(p2.x, h2.x, M2.x, w2), tz(p2.y, h2.y, M2.y, w2), a3 && (d3 = this.relativeTarget, y2 = a3, tl(d3.x, y2.x) && tl(d3.y, y2.y)) && (this.isProjectionDirty = false), a3 || (a3 = (0, tn.createBox)()), Y(a3, this.relativeTarget);
          }
          l2 && (this.animationValues = s2, (function(t12, e5, a4, r5, n4, s3) {
            n4 ? (t12.opacity = (0, O.mixNumber)(0, a4.opacity ?? 1, W(r5)), t12.opacityExit = (0, O.mixNumber)(e5.opacity ?? 1, 0, G(r5))) : s3 && (t12.opacity = (0, O.mixNumber)(e5.opacity ?? 1, a4.opacity ?? 1, r5));
            for (let n5 = 0; n5 < F; n5++) {
              let s4 = L[n5], i3 = U(e5, s4), o3 = U(a4, s4);
              (void 0 !== i3 || void 0 !== o3) && (i3 || (i3 = 0), o3 || (o3 = 0), 0 === i3 || 0 === o3 || N(i3) === N(o3) ? (t12[s4] = Math.max((0, O.mixNumber)(I(i3), I(o3), r5), 0), (K.percent.test(o3) || K.percent.test(i3)) && (t12[s4] += "%")) : t12[s4] = o3);
            }
            (e5.rotate || a4.rotate) && (t12.rotate = (0, O.mixNumber)(e5.rotate || 0, a4.rotate || 0, r5));
          })(s2, n3, this.latestValues, r4, c2, u2)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = r4;
        }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
      }
      startAnimation(t11) {
        this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && ((0, l.cancelFrame)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = l.frame.update(() => {
          o.globalProjectionState.hasAnimatedSinceResize = true, x.activeAnimations.layout++, this.motionValue || (this.motionValue = (0, j.motionValue)(0)), this.motionValue.jump(0, false), this.currentAnimation = (0, _.animateSingleValue)(this.motionValue, [0, 1e3], { ...t11, velocity: 0, isSync: true, onUpdate: (e3) => {
            this.mixTargetDelta(e3), t11.onUpdate && t11.onUpdate(e3);
          }, onStop: () => {
            x.activeAnimations.layout--;
          }, onComplete: () => {
            x.activeAnimations.layout--, t11.onComplete && t11.onComplete(), this.completeAnimation();
          } }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
        });
      }
      completeAnimation() {
        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
        let t11 = this.getStack();
        t11 && t11.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        let t11 = this.getLead(), { targetWithTransforms: e3, target: a3, layout: r3, latestValues: n3 } = t11;
        if (e3 && a3 && r3) {
          if (this !== t11 && this.layout && r3 && tZ(this.options.animationType, this.layout.layoutBox, r3.layoutBox)) {
            a3 = this.target || (0, tn.createBox)();
            let e4 = (0, Z.calcLength)(this.layout.layoutBox.x);
            a3.x.min = t11.target.x.min, a3.x.max = a3.x.min + e4;
            let r4 = (0, Z.calcLength)(this.layout.layoutBox.y);
            a3.y.min = t11.target.y.min, a3.y.max = a3.y.min + r4;
          }
          Y(e3, a3), (0, q.transformBox)(e3, n3), (0, Z.calcBoxDelta)(this.projectionDeltaWithTransform, this.layoutCorrected, e3, n3);
        }
      }
      registerSharedNode(t11, e3) {
        this.sharedNodes.has(t11) || this.sharedNodes.set(t11, new tM()), this.sharedNodes.get(t11).add(e3);
        let a3 = e3.options.initialPromotionConfig;
        e3.promote({ transition: a3 ? a3.transition : void 0, preserveFollowOpacity: a3 && a3.shouldPreserveFollowOpacity ? a3.shouldPreserveFollowOpacity(e3) : void 0 });
      }
      isLead() {
        let t11 = this.getStack();
        return !t11 || t11.lead === this;
      }
      getLead() {
        let { layoutId: t11 } = this.options;
        return t11 && this.getStack()?.lead || this;
      }
      getPrevLead() {
        let { layoutId: t11 } = this.options;
        return t11 ? this.getStack()?.prevLead : void 0;
      }
      getStack() {
        let { layoutId: t11 } = this.options;
        if (t11) return this.root.sharedNodes.get(t11);
      }
      promote({ needsReset: t11, transition: e3, preserveFollowOpacity: a3 } = {}) {
        let r3 = this.getStack();
        r3 && r3.promote(this, a3), t11 && (this.projectionDelta = void 0, this.needsReset = true), e3 && this.setOptions({ transition: e3 });
      }
      relegate() {
        let t11 = this.getStack();
        return !!t11 && t11.relegate(this);
      }
      resetSkewAndRotation() {
        let { visualElement: t11 } = this.options;
        if (!t11) return;
        let e3 = false, { latestValues: a3 } = t11;
        if ((a3.z || a3.rotate || a3.rotateX || a3.rotateY || a3.rotateZ || a3.skewX || a3.skewY) && (e3 = true), !e3) return;
        let r3 = {};
        a3.z && tA("z", t11, r3, this.animationValues);
        for (let e4 = 0; e4 < tP.length; e4++) tA(`rotate${tP[e4]}`, t11, r3, this.animationValues), tA(`skew${tP[e4]}`, t11, r3, this.animationValues);
        for (let e4 in t11.render(), r3) t11.setStaticValue(e4, r3[e4]), this.animationValues && (this.animationValues[e4] = r3[e4]);
        t11.scheduleRender();
      }
      applyProjectionStyles(t11, e3) {
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) {
          t11.visibility = "hidden";
          return;
        }
        let a3 = this.getTransformTemplate();
        if (this.needsReset) {
          this.needsReset = false, t11.visibility = "", t11.opacity = "", t11.pointerEvents = (0, V.resolveMotionValue)(e3?.pointerEvents) || "", t11.transform = a3 ? a3(this.latestValues, "") : "none";
          return;
        }
        let r3 = this.getLead();
        if (!this.projectionDelta || !this.layout || !r3.target) {
          this.options.layoutId && (t11.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t11.pointerEvents = (0, V.resolveMotionValue)(e3?.pointerEvents) || ""), this.hasProjected && !(0, tE.hasTransform)(this.latestValues) && (t11.transform = a3 ? a3({}, "") : "none", this.hasProjected = false);
          return;
        }
        t11.visibility = "";
        let n3 = r3.animationValues || r3.latestValues;
        this.applyTransformsToTarget();
        let s2 = (function(t12, e4, a4) {
          let r4 = "", n4 = t12.x.translate / e4.x, s3 = t12.y.translate / e4.y, i3 = a4?.z || 0;
          if ((n4 || s3 || i3) && (r4 = `translate3d(${n4}px, ${s3}px, ${i3}px) `), (1 !== e4.x || 1 !== e4.y) && (r4 += `scale(${1 / e4.x}, ${1 / e4.y}) `), a4) {
            let { transformPerspective: t13, rotate: e5, rotateX: n5, rotateY: s4, skewX: i4, skewY: o4 } = a4;
            t13 && (r4 = `perspective(${t13}px) ${r4}`), e5 && (r4 += `rotate(${e5}deg) `), n5 && (r4 += `rotateX(${n5}deg) `), s4 && (r4 += `rotateY(${s4}deg) `), i4 && (r4 += `skewX(${i4}deg) `), o4 && (r4 += `skewY(${o4}deg) `);
          }
          let o3 = t12.x.scale * e4.x, l2 = t12.y.scale * e4.y;
          return (1 !== o3 || 1 !== l2) && (r4 += `scale(${o3}, ${l2})`), r4 || "none";
        })(this.projectionDeltaWithTransform, this.treeScale, n3);
        a3 && (s2 = a3(n3, s2)), t11.transform = s2;
        let { x: i2, y: o2 } = this.projectionDelta;
        for (let e4 in t11.transformOrigin = `${100 * i2.origin}% ${100 * o2.origin}% 0`, r3.animationValues ? t11.opacity = r3 === this ? n3.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : n3.opacityExit : t11.opacity = r3 === this ? void 0 !== n3.opacity ? n3.opacity : "" : void 0 !== n3.opacityExit ? n3.opacityExit : 0, P.scaleCorrectors) {
          if (void 0 === n3[e4]) continue;
          let { correct: a4, applyTo: i3, isCSSVariable: o3 } = P.scaleCorrectors[e4], l2 = "none" === s2 ? n3[e4] : a4(n3[e4], r3);
          if (i3) {
            let e5 = i3.length;
            for (let a5 = 0; a5 < e5; a5++) t11[i3[a5]] = l2;
          } else o3 ? this.options.visualElement.renderState.vars[e4] = l2 : t11[e4] = l2;
        }
        this.options.layoutId && (t11.pointerEvents = r3 === this ? (0, V.resolveMotionValue)(e3?.pointerEvents) || "" : "none");
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((t11) => t11.currentAnimation?.stop()), this.root.nodes.forEach(tK), this.root.sharedNodes.clear();
      }
    };
  }
  function tB(t10) {
    t10.updateLayout();
  }
  function tS(t10) {
    let e2 = t10.resumeFrom?.snapshot || t10.snapshot;
    if (t10.isLead() && t10.layout && e2 && t10.hasListeners("didUpdate")) {
      let { layoutBox: a2, measuredBox: r2 } = t10.layout, { animationType: n2 } = t10.options, s2 = e2.source !== t10.layout.source;
      if ("size" === n2) (0, tm.eachAxis)((t11) => {
        let r3 = s2 ? e2.measuredBox[t11] : e2.layoutBox[t11], n3 = (0, Z.calcLength)(r3);
        r3.min = a2[t11].min, r3.max = r3.min + n3;
      });
      else if ("x" === n2 || "y" === n2) {
        let t11 = "x" === n2 ? "y" : "x";
        H(s2 ? e2.measuredBox[t11] : e2.layoutBox[t11], a2[t11]);
      } else tZ(n2, e2.layoutBox, a2) && (0, tm.eachAxis)((r3) => {
        let n3 = s2 ? e2.measuredBox[r3] : e2.layoutBox[r3], i3 = (0, Z.calcLength)(a2[r3]);
        n3.max = n3.min + i3, t10.relativeTarget && !t10.currentAnimation && (t10.isProjectionDirty = true, t10.relativeTarget[r3].max = t10.relativeTarget[r3].min + i3);
      });
      let i2 = (0, tn.createDelta)();
      (0, Z.calcBoxDelta)(i2, a2, e2.layoutBox);
      let o2 = (0, tn.createDelta)();
      s2 ? (0, Z.calcBoxDelta)(o2, t10.applyTransform(r2, true), e2.measuredBox) : (0, Z.calcBoxDelta)(o2, a2, e2.layoutBox);
      let l2 = !to(i2), d2 = false;
      if (!t10.resumeFrom) {
        let r3 = t10.getClosestProjectingParent();
        if (r3 && !r3.resumeFrom) {
          let { snapshot: n3, layout: s3 } = r3;
          if (n3 && s3) {
            let i3 = t10.options.layoutAnchor || void 0, o3 = (0, tn.createBox)();
            (0, Z.calcRelativePosition)(o3, e2.layoutBox, n3.layoutBox, i3);
            let l3 = (0, tn.createBox)();
            (0, Z.calcRelativePosition)(l3, a2, s3.layoutBox, i3), tu(o3, l3) || (d2 = true), r3.options.layoutRoot && (t10.relativeTarget = l3, t10.relativeTargetOrigin = o3, t10.relativeParent = r3);
          }
        }
      }
      t10.notifyListeners("didUpdate", { layout: a2, snapshot: e2, delta: o2, layoutDelta: i2, hasLayoutChanged: l2, hasRelativeLayoutChanged: d2 });
    } else if (t10.isLead()) {
      let { onExitComplete: e3 } = t10.options;
      e3 && e3();
    }
    t10.options.transition = void 0;
  }
  function tO(t10) {
    A.statsBuffer.value && tb.nodes++, t10.parent && (t10.isProjecting() || (t10.isProjectionDirty = t10.parent.isProjectionDirty), t10.isSharedProjectionDirty || (t10.isSharedProjectionDirty = !!(t10.isProjectionDirty || t10.parent.isProjectionDirty || t10.parent.isSharedProjectionDirty)), t10.isTransformDirty || (t10.isTransformDirty = t10.parent.isTransformDirty));
  }
  function tj(t10) {
    t10.isProjectionDirty = t10.isSharedProjectionDirty = t10.isTransformDirty = false;
  }
  function tV(t10) {
    t10.clearSnapshot();
  }
  function tK(t10) {
    t10.clearMeasurements();
  }
  function tC(t10) {
    t10.isLayoutDirty = true, t10.updateLayout();
  }
  function tD(t10) {
    t10.isLayoutDirty = false;
  }
  function tR(t10) {
    t10.isAnimationBlocked && t10.layout && !t10.isLayoutDirty && (t10.snapshot = t10.layout, t10.isLayoutDirty = true);
  }
  function tL(t10) {
    let { visualElement: e2 } = t10.options;
    e2 && e2.getProps().onBeforeLayoutMeasure && e2.notify("BeforeLayoutMeasure"), t10.resetTransform();
  }
  function tF(t10) {
    t10.finishAnimation(), t10.targetDelta = t10.relativeTarget = t10.target = void 0, t10.isProjectionDirty = true;
  }
  function tI(t10) {
    t10.resolveTargetDelta();
  }
  function tN(t10) {
    t10.calcProjection();
  }
  function tU(t10) {
    t10.resetSkewAndRotation();
  }
  function tW(t10) {
    t10.removeLeadSnapshot();
  }
  function tG(t10, e2, a2) {
    t10.translate = (0, O.mixNumber)(e2.translate, 0, a2), t10.scale = (0, O.mixNumber)(e2.scale, 1, a2), t10.origin = e2.origin, t10.originPoint = e2.originPoint;
  }
  function tz(t10, e2, a2, r2) {
    t10.min = (0, O.mixNumber)(e2.min, a2.min, r2), t10.max = (0, O.mixNumber)(e2.max, a2.max, r2);
  }
  function t$(t10) {
    return t10.animationValues && void 0 !== t10.animationValues.opacityExit;
  }
  let tH = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }, tY = (t10) => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t10), tX = tY("applewebkit/") && !tY("chrome/") ? Math.round : v.noop;
  function tq(t10) {
    t10.min = tX(t10.min), t10.max = tX(t10.max);
  }
  function tZ(t10, e2, a2) {
    return "position" === t10 || "preserve-aspect" === t10 && !(0, Z.isNear)(tc(e2), tc(a2), 0.2);
  }
  function tJ(t10) {
    return t10 !== t10.root && t10.scroll?.wasRoot;
  }
  var tQ = t.i(765869);
  try {
    var t0 = "u" > typeof window ? window : t.g;
    t0._sentryModuleMetadata = t0._sentryModuleMetadata || {}, t0._sentryModuleMetadata[new t0.Error().stack] = Object.assign({}, t0._sentryModuleMetadata[new t0.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let t1 = tT({ attachResizeListener: (t10, e2) => (0, tQ.addDomEvent)(t10, "resize", e2), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0, y: document.documentElement.scrollTop || document.body?.scrollTop || 0 }), checkIsScrollRoot: () => true });
  try {
    var t9 = "u" > typeof window ? window : t.g;
    t9._sentryModuleMetadata = t9._sentryModuleMetadata || {}, t9._sentryModuleMetadata[new t9.Error().stack] = Object.assign({}, t9._sentryModuleMetadata[new t9.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let t2 = { current: void 0 }, t3 = tT({ measureScroll: (t10) => ({ x: t10.scrollLeft, y: t10.scrollTop }), defaultParent: () => {
    if (!t2.current) {
      let t10 = new t1({});
      t10.mount(window), t10.setOptions({ layoutScroll: true }), t2.current = t10;
    }
    return t2.current;
  }, resetTransform: (t10, e2) => {
    t10.style.transform = void 0 !== e2 ? e2 : "none";
  }, checkIsScrollRoot: (t10) => "fixed" === window.getComputedStyle(t10).position });
  try {
    var t6 = "u" > typeof window ? window : t.g;
    t6._sentryModuleMetadata = t6._sentryModuleMetadata || {}, t6._sentryModuleMetadata[new t6.Error().stack] = Object.assign({}, t6._sentryModuleMetadata[new t6.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let t4 = { pan: { Feature: s.PanGesture }, drag: { Feature: n.DragGesture, ProjectionNode: t3, MeasureLayout: m } };
  var t7 = t.i(136656), t5 = t.i(597719), t8 = t.i(427772);
  try {
    var et = "u" > typeof window ? window : t.g;
    et._sentryModuleMetadata = et._sentryModuleMetadata || {}, et._sentryModuleMetadata[new et.Error().stack] = Object.assign({}, et._sentryModuleMetadata[new et.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function ee(t10, e2) {
    let a2 = (0, t8.resolveElements)(t10), r2 = new AbortController();
    return [a2, { passive: true, ...e2, signal: r2.signal }, () => r2.abort()];
  }
  try {
    var ea = "u" > typeof window ? window : t.g;
    ea._sentryModuleMetadata = ea._sentryModuleMetadata || {}, ea._sentryModuleMetadata[new ea.Error().stack] = Object.assign({}, ea._sentryModuleMetadata[new ea.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  var er = t.i(43866);
  try {
    var en = "u" > typeof window ? window : t.g;
    en._sentryModuleMetadata = en._sentryModuleMetadata || {}, en._sentryModuleMetadata[new en.Error().stack] = Object.assign({}, en._sentryModuleMetadata[new en.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function es(t10, e2, a2) {
    let { props: r2 } = t10;
    t10.animationState && r2.whileHover && t10.animationState.setActive("whileHover", "Start" === a2);
    let n2 = r2["onHover" + a2];
    n2 && l.frame.postRender(() => n2(e2, (0, er.extractEventInfo)(e2)));
  }
  class ei extends t7.Feature {
    mount() {
      let { current: t10 } = this.node;
      t10 && (this.unmount = (function(t11, e2, a2 = {}) {
        let [r2, n2, s2] = ee(t11, a2);
        return r2.forEach((t12) => {
          let a3, r3 = false, s3 = false, i2 = (e3) => {
            a3 && (a3(e3), a3 = void 0), t12.removeEventListener("pointerleave", l2);
          }, o2 = (t13) => {
            r3 = false, window.removeEventListener("pointerup", o2), window.removeEventListener("pointercancel", o2), s3 && (s3 = false, i2(t13));
          }, l2 = (t13) => {
            if ("touch" !== t13.pointerType) {
              if (r3) {
                s3 = true;
                return;
              }
              i2(t13);
            }
          };
          t12.addEventListener("pointerenter", (r4) => {
            if ("touch" === r4.pointerType || (0, t5.isDragActive)()) return;
            s3 = false;
            let i3 = e2(t12, r4);
            "function" == typeof i3 && (a3 = i3, t12.addEventListener("pointerleave", l2, n2));
          }, n2), t12.addEventListener("pointerdown", () => {
            r3 = true, window.addEventListener("pointerup", o2, n2), window.addEventListener("pointercancel", o2, n2);
          }, n2);
        }), s2;
      })(t10, (t11, e2) => (es(this.node, e2, "Start"), (t12) => es(this.node, t12, "End"))));
    }
    unmount() {
    }
  }
  var eo = t7, el = t.i(92727);
  try {
    var ed = "u" > typeof window ? window : t.g;
    ed._sentryModuleMetadata = ed._sentryModuleMetadata || {}, ed._sentryModuleMetadata[new ed.Error().stack] = Object.assign({}, ed._sentryModuleMetadata[new ed.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  class eu extends eo.Feature {
    constructor() {
      super(...arguments), this.isActive = false;
    }
    onFocus() {
      let t10 = false;
      try {
        t10 = this.node.current.matches(":focus-visible");
      } catch (e2) {
        t10 = true;
      }
      t10 && this.node.animationState && (this.node.animationState.setActive("whileFocus", true), this.isActive = true);
    }
    onBlur() {
      this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", false), this.isActive = false);
    }
    mount() {
      this.unmount = (0, el.pipe)((0, tQ.addDomEvent)(this.node.current, "focus", () => this.onFocus()), (0, tQ.addDomEvent)(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
  }
  var ec = t7, ey = t.i(250438);
  try {
    var ep = "u" > typeof window ? window : t.g;
    ep._sentryModuleMetadata = ep._sentryModuleMetadata || {}, ep._sentryModuleMetadata[new ep.Error().stack] = Object.assign({}, ep._sentryModuleMetadata[new ep.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let eh = (t10, e2) => !!e2 && (t10 === e2 || eh(t10, e2.parentElement));
  var eM = t.i(94801), ew = t.i(253422);
  try {
    var em = "u" > typeof window ? window : t.g;
    em._sentryModuleMetadata = em._sentryModuleMetadata || {}, em._sentryModuleMetadata[new em.Error().stack] = Object.assign({}, em._sentryModuleMetadata[new em.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let eg = /* @__PURE__ */ new WeakSet();
  try {
    var ef = "u" > typeof window ? window : t.g;
    ef._sentryModuleMetadata = ef._sentryModuleMetadata || {}, ef._sentryModuleMetadata[new ef.Error().stack] = Object.assign({}, ef._sentryModuleMetadata[new ef.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function ev(t10) {
    return (e2) => {
      "Enter" === e2.key && t10(e2);
    };
  }
  function e_(t10, e2) {
    t10.dispatchEvent(new PointerEvent("pointer" + e2, { isPrimary: true, bubbles: true }));
  }
  try {
    var eE = "u" > typeof window ? window : t.g;
    eE._sentryModuleMetadata = eE._sentryModuleMetadata || {}, eE._sentryModuleMetadata[new eE.Error().stack] = Object.assign({}, eE._sentryModuleMetadata[new eE.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function ek(t10) {
    return (0, eM.isPrimaryPointer)(t10) && !(0, t5.isDragActive)();
  }
  let eb = /* @__PURE__ */ new WeakSet();
  try {
    var eP = "u" > typeof window ? window : t.g;
    eP._sentryModuleMetadata = eP._sentryModuleMetadata || {}, eP._sentryModuleMetadata[new eP.Error().stack] = Object.assign({}, eP._sentryModuleMetadata[new eP.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  function ex(t10, e2, a2) {
    let { props: r2 } = t10;
    if (t10.current instanceof HTMLButtonElement && t10.current.disabled) return;
    t10.animationState && r2.whileTap && t10.animationState.setActive("whileTap", "Start" === a2);
    let n2 = r2["onTap" + ("End" === a2 ? "" : a2)];
    n2 && l.frame.postRender(() => n2(e2, (0, er.extractEventInfo)(e2)));
  }
  class eA extends ec.Feature {
    mount() {
      let { current: t10 } = this.node;
      if (!t10) return;
      let { globalTapTarget: e2, propagate: a2 } = this.node.props;
      this.unmount = (function(t11, e3, a3 = {}) {
        let [r2, n2, s2] = ee(t11, a3), i2 = (t12) => {
          let r3 = t12.currentTarget;
          if (!ek(t12) || eb.has(t12)) return;
          eg.add(r3), a3.stopPropagation && eb.add(t12);
          let s3 = e3(r3, t12), i3 = (t13, e4) => {
            window.removeEventListener("pointerup", o2), window.removeEventListener("pointercancel", l2), eg.has(r3) && eg.delete(r3), ek(t13) && "function" == typeof s3 && s3(t13, { success: e4 });
          }, o2 = (t13) => {
            i3(t13, r3 === window || r3 === document || a3.useGlobalTarget || eh(r3, t13.target));
          }, l2 = (t13) => {
            i3(t13, false);
          };
          window.addEventListener("pointerup", o2, n2), window.addEventListener("pointercancel", l2, n2);
        };
        return r2.forEach((t12) => {
          (a3.useGlobalTarget ? window : t12).addEventListener("pointerdown", i2, n2), (0, ey.isHTMLElement)(t12) && (t12.addEventListener("focus", (t13) => ((t14, e4) => {
            let a4 = t14.currentTarget;
            if (!a4) return;
            let r3 = ev(() => {
              if (eg.has(a4)) return;
              e_(a4, "down");
              let t15 = ev(() => {
                e_(a4, "up");
              });
              a4.addEventListener("keyup", t15, e4), a4.addEventListener("blur", () => e_(a4, "cancel"), e4);
            });
            a4.addEventListener("keydown", r3, e4), a4.addEventListener("blur", () => a4.removeEventListener("keydown", r3), e4);
          })(t13, n2)), (0, ew.isElementKeyboardAccessible)(t12) || t12.hasAttribute("tabindex") || (t12.tabIndex = 0));
        }), s2;
      })(t10, (t11, e3) => (ex(this.node, e3, "Start"), (t12, { success: e4 }) => ex(this.node, t12, e4 ? "End" : "Cancel")), { useGlobalTarget: e2, stopPropagation: a2?.tap === false });
    }
    unmount() {
    }
  }
  var eT = t7;
  try {
    var eB = "u" > typeof window ? window : t.g;
    eB._sentryModuleMetadata = eB._sentryModuleMetadata || {}, eB._sentryModuleMetadata[new eB.Error().stack] = Object.assign({}, eB._sentryModuleMetadata[new eB.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let eS = /* @__PURE__ */ new WeakMap(), eO = /* @__PURE__ */ new WeakMap(), ej = (t10) => {
    let e2 = eS.get(t10.target);
    e2 && e2(t10);
  }, eV = (t10) => {
    t10.forEach(ej);
  };
  try {
    var eK = "u" > typeof window ? window : t.g;
    eK._sentryModuleMetadata = eK._sentryModuleMetadata || {}, eK._sentryModuleMetadata[new eK.Error().stack] = Object.assign({}, eK._sentryModuleMetadata[new eK.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let eC = { some: 0, all: 1 };
  class eD extends eT.Feature {
    constructor() {
      super(...arguments), this.hasEnteredView = false, this.isInView = false;
    }
    startObserver() {
      var t10;
      let e2;
      this.stopObserver?.();
      let { viewport: a2 = {} } = this.node.getProps(), { root: r2, margin: n2, amount: s2 = "some", once: i2 } = a2, o2 = { root: r2 ? r2.current : void 0, rootMargin: n2, threshold: "number" == typeof s2 ? s2 : eC[s2] }, l2 = (t11) => {
        let { isIntersecting: e3 } = t11;
        if (this.isInView === e3 || (this.isInView = e3, i2 && !e3 && this.hasEnteredView)) return;
        e3 && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", e3);
        let { onViewportEnter: a3, onViewportLeave: r3 } = this.node.getProps(), n3 = e3 ? a3 : r3;
        n3 && n3(t11);
      };
      this.stopObserver = (t10 = this.node.current, e2 = (function({ root: t11, ...e3 }) {
        let a3 = t11 || document;
        eO.has(a3) || eO.set(a3, {});
        let r3 = eO.get(a3), n3 = JSON.stringify(e3);
        return r3[n3] || (r3[n3] = new IntersectionObserver(eV, { root: t11, ...e3 })), r3[n3];
      })(o2), eS.set(t10, l2), e2.observe(t10), () => {
        eS.delete(t10), e2.unobserve(t10);
      });
    }
    mount() {
      this.startObserver();
    }
    update() {
      if ("u" < typeof IntersectionObserver) return;
      let { props: t10, prevProps: e2 } = this.node;
      ["amount", "margin", "root"].some((function({ viewport: t11 = {} }, { viewport: e3 = {} } = {}) {
        return (a2) => t11[a2] !== e3[a2];
      })(t10, e2)) && this.startObserver();
    }
    unmount() {
      this.stopObserver?.(), this.hasEnteredView = false, this.isInView = false;
    }
  }
  try {
    var eR = "u" > typeof window ? window : t.g;
    eR._sentryModuleMetadata = eR._sentryModuleMetadata || {}, eR._sentryModuleMetadata[new eR.Error().stack] = Object.assign({}, eR._sentryModuleMetadata[new eR.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  try {
    var eL = "u" > typeof window ? window : t.g;
    eL._sentryModuleMetadata = eL._sentryModuleMetadata || {}, eL._sentryModuleMetadata[new eL.Error().stack] = Object.assign({}, eL._sentryModuleMetadata[new eL.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  try {
    var eF = "u" > typeof window ? window : t.g;
    eF._sentryModuleMetadata = eF._sentryModuleMetadata || {}, eF._sentryModuleMetadata[new eF.Error().stack] = Object.assign({}, eF._sentryModuleMetadata[new eF.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let eI = { ...r.animations, inView: { Feature: eD }, tap: { Feature: eA }, focus: { Feature: eu }, hover: { Feature: ei }, ...t4, layout: { ProjectionNode: t3, MeasureLayout: m } };
  try {
    var eN = "u" > typeof window ? window : t.g;
    eN._sentryModuleMetadata = eN._sentryModuleMetadata || {}, eN._sentryModuleMetadata[new eN.Error().stack] = Object.assign({}, eN._sentryModuleMetadata[new eN.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t10) {
  }
  let eU = (0, a.createMotionProxy)(eI, e.createDomVisualElement);
  t.s(["motion", 0, eU], 112086);
}, 818454, 592798, (t) => {
  "use strict";
  var e = t.i(141577), a = t.i(597157), r = t.i(856757);
  try {
    var n = "u" > typeof window ? window : t.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let s = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
  try {
    var i = "u" > typeof window ? window : t.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function o(t2) {
    if ("string" != typeof t2 || t2.includes("-")) ;
    else if (s.indexOf(t2) > -1 || /[A-Z]/u.test(t2)) return true;
    return false;
  }
  t.s(["isSVGComponent", 0, o], 592798);
  try {
    var l = "u" > typeof window ? window : t.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["createDomVisualElement", 0, (t2, n2) => n2.isSVG ?? o(t2) ? new e.SVGVisualElement(n2) : new a.HTMLVisualElement(n2, { allowProjection: t2 !== r.Fragment })], 818454);
}, 408106, 730525, 891945, (t) => {
  "use strict";
  var e = t.i(236585), a = t.i(856757), r = t.i(426756), n = t.i(147220), s = t.i(842070), i = t.i(592798);
  try {
    var o = "u" > typeof window ? window : t.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["useRender", 0, function(t2, o2, l2, { latestValues: d2 }, u, c = false, y) {
    let p = (y ?? (0, i.isSVGComponent)(t2) ? n.useSVGProps : r.useHTMLProps)(o2, d2, u, t2), h = (0, s.filterProps)(o2, "string" == typeof t2, c), M = t2 !== a.Fragment ? { ...h, ...p, ref: l2 } : {}, { children: w } = o2, m = (0, a.useMemo)(() => (0, e.isMotionValue)(w) ? w.get() : w, [w]);
    return (0, a.createElement)(t2, { ...M, children: m });
  }], 408106);
  var l = t.i(645744);
  t.s(["scrapeHTMLMotionValuesFromProps", () => l.scrapeMotionValuesFromProps], 730525);
  try {
    var d = "u" > typeof window ? window : t.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["resolveMotionValue", 0, function(t2) {
    return (0, e.isMotionValue)(t2) ? t2.get() : t2;
  }], 891945);
}, 842070, (t) => {
  "use strict";
  var e = t.i(236585);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let r = /* @__PURE__ */ new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
  function n(t2) {
    return t2.startsWith("while") || t2.startsWith("drag") && "draggable" !== t2 || t2.startsWith("layout") || t2.startsWith("onTap") || t2.startsWith("onPan") || t2.startsWith("onLayout") || r.has(t2);
  }
  try {
    var s = "u" > typeof window ? window : t.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let i = (t2) => !n(t2);
  function o(t2) {
    "function" == typeof t2 && (i = (e2) => e2.startsWith("on") ? !n(e2) : t2(e2));
  }
  try {
    o((() => {
      let t2 = Error("Cannot find module '@emotion/is-prop-valid'");
      throw t2.code = "MODULE_NOT_FOUND", t2;
    })().default);
  } catch {
  }
  t.s(["filterProps", 0, function(t2, a2, r2) {
    let s2 = {};
    for (let o2 in t2) ("values" !== o2 || "object" != typeof t2.values) && !(0, e.isMotionValue)(t2[o2]) && (i(o2) || true === r2 && n(o2) || !a2 && !n(o2) || t2.draggable && o2.startsWith("onDrag")) && (s2[o2] = t2[o2]);
    return s2;
  }, "loadExternalIsValidProp", 0, o], 842070);
}, 134174, 736986, (t) => {
  "use strict";
  var e = t.i(856757);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["useConstant", 0, function(t2) {
    let a2 = (0, e.useRef)(null);
    return null === a2.current && (a2.current = t2()), a2.current;
  }], 134174);
  try {
    var r = "u" > typeof window ? window : t.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let n = "u" > typeof window;
  try {
    var s = "u" > typeof window ? window : t.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let i = n ? e.useLayoutEffect : e.useEffect;
  t.s(["useIsomorphicLayoutEffect", 0, i], 736986);
}, 551583, (t) => {
  "use strict";
  var e = t.i(926490), a = t.i(470919), r = t.i(957798), n = t.i(823864), s = t.i(168741), i = t.i(369379), o = t.i(264153), l = t.i(477851), d = t.i(113386), u = t.i(796402), c = t.i(287120), y = t.i(290932);
  try {
    var p = "u" > typeof window ? window : t.g;
    p._sentryModuleMetadata = p._sentryModuleMetadata || {}, p._sentryModuleMetadata[new p.Error().stack] = Object.assign({}, p._sentryModuleMetadata[new p.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let h = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
  try {
    var M = "u" > typeof window ? window : t.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let w = /* @__PURE__ */ new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]), m = (0, c.memo)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
  try {
    var g = "u" > typeof window ? window : t.g;
    g._sentryModuleMetadata = g._sentryModuleMetadata || {}, g._sentryModuleMetadata[new g.Error().stack] = Object.assign({}, g._sentryModuleMetadata[new g.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  class f extends u.WithPromise {
    constructor({ autoplay: t2 = true, delay: e2 = 0, type: a2 = "keyframes", repeat: n2 = 0, repeatDelay: s2 = 0, repeatType: o2 = "loop", keyframes: l2, name: d2, motionValue: u2, element: c2, ...y2 }) {
      super(), this.stop = () => {
        this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
      }, this.createdAt = r.time.now();
      const p2 = { autoplay: t2, delay: e2, type: a2, repeat: n2, repeatDelay: s2, repeatType: o2, name: d2, motionValue: u2, element: c2, ...y2 }, h2 = c2?.KeyframeResolver || i.KeyframeResolver;
      this.keyframeResolver = new h2(l2, (t3, e3, a3) => this.onKeyframesResolved(t3, e3, p2, !a3), d2, u2, c2), this.keyframeResolver?.scheduleResolve();
    }
    onKeyframesResolved(t2, i2, u2, c2) {
      let p2;
      this.keyframeResolver = void 0;
      let { name: M2, type: g2, velocity: f2, delay: v, isHandoff: _, onUpdate: E } = u2;
      this.resolvedAt = r.time.now();
      let k = true;
      (0, l.canAnimate)(t2, M2, g2, f2) || (k = false, (e.MotionGlobalConfig.instantAnimations || !v) && E?.((0, s.getFinalKeyframe)(t2, u2, i2)), t2[0] = t2[t2.length - 1], (0, d.makeAnimationInstant)(u2), u2.repeat = 0);
      let b = { startTime: c2 ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0, finalKeyframe: i2, ...u2, keyframes: t2 }, P = k && !_ && (function(t3) {
        let { motionValue: e2, name: a2, repeatDelay: r2, repeatType: n2, damping: s2, type: i3, keyframes: o2 } = t3;
        if (!(e2?.owner?.current instanceof HTMLElement)) return false;
        let { onUpdate: l2, transformTemplate: d2 } = e2.owner.getProps();
        return m() && a2 && (y.acceleratedValues.has(a2) || w.has(a2) && (function(t4) {
          for (let e3 = 0; e3 < t4.length; e3++) if ("string" == typeof t4[e3] && h.test(t4[e3])) return true;
          return false;
        })(o2)) && ("transform" !== a2 || !d2) && !l2 && !r2 && "mirror" !== n2 && 0 !== s2 && "inertia" !== i3;
      })(b), x = b.motionValue?.owner?.current;
      if (P) try {
        p2 = new o.NativeAnimationExtended({ ...b, element: x });
      } catch {
        p2 = new n.JSAnimation(b);
      }
      else p2 = new n.JSAnimation(b);
      p2.finished.then(() => {
        this.notifyFinished();
      }).catch(a.noop), this.pendingTimeline && (this.stopTimeline = p2.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = p2;
    }
    get finished() {
      return this._animation ? this.animation.finished : this._finished;
    }
    then(t2, e2) {
      return this.finished.finally(t2).then(() => {
      });
    }
    get animation() {
      return this._animation || (this.keyframeResolver?.resume(), (0, i.flushKeyframeResolvers)()), this._animation;
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(t2) {
      this.animation.time = t2;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(t2) {
      this.animation.speed = t2;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(t2) {
      return this._animation ? this.stopTimeline = this.animation.attachTimeline(t2) : this.pendingTimeline = t2, () => this.stop();
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
    }
  }
  t.s(["AsyncMotionValueAnimation", 0, f], 551583);
}, 823864, (t) => {
  "use strict";
  var e = t.i(92727), a = t.i(493858), r = t.i(490692), n = t.i(957798), s = t.i(431772), i = t.i(422430), o = t.i(569222), l = t.i(367712), d = t.i(770931), u = t.i(742622), c = t.i(42233), y = t.i(168741), p = t.i(785068), h = t.i(796402);
  try {
    var M = "u" > typeof window ? window : t.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let w = (t2) => t2 / 100;
  class m extends h.WithPromise {
    constructor(t2) {
      super(), this.state = "idle", this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = { done: false, value: void 0 }, this.stop = () => {
        let { motionValue: t3 } = this.options;
        t3 && t3.updatedAt !== n.time.now() && this.tick(n.time.now()), this.isStopped = true, "idle" !== this.state && (this.teardown(), this.options.onStop?.());
      }, s.activeAnimations.mainThread++, this.options = t2, this.initAnimation(), this.play(), false === t2.autoplay && this.pause();
    }
    initAnimation() {
      let { options: t2 } = this;
      (0, p.replaceTransitionType)(t2);
      let { type: a2 = d.keyframes, repeat: r2 = 0, repeatDelay: n2 = 0, repeatType: s2, velocity: o2 = 0 } = t2, { keyframes: l2 } = t2, c2 = a2 || d.keyframes;
      c2 !== d.keyframes && "number" != typeof l2[0] && (this.mixKeyframes = (0, e.pipe)(w, (0, i.mix)(l2[0], l2[1])), l2 = [0, 100]);
      let y2 = c2({ ...t2, keyframes: l2 });
      "mirror" === s2 && (this.mirroredGenerator = c2({ ...t2, keyframes: [...l2].reverse(), velocity: -o2 })), null === y2.calculatedDuration && (y2.calculatedDuration = (0, u.calcGeneratorDuration)(y2));
      let { calculatedDuration: h2 } = y2;
      this.calculatedDuration = h2, this.resolvedDuration = h2 + n2, this.totalDuration = this.resolvedDuration * (r2 + 1) - n2, this.generator = y2;
    }
    updateTime(t2) {
      let e2 = Math.round(t2 - this.startTime) * this.playbackSpeed;
      null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e2;
    }
    tick(t2, e2 = false) {
      let r2, { generator: n2, totalDuration: s2, mixKeyframes: i2, mirroredGenerator: o2, resolvedDuration: d2, calculatedDuration: u2 } = this;
      if (null === this.startTime) return n2.next(0);
      let { delay: c2 = 0, keyframes: p2, repeat: h2, repeatType: M2, repeatDelay: w2, type: m2, onUpdate: g, finalKeyframe: f } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, t2) : this.speed < 0 && (this.startTime = Math.min(t2 - s2 / this.speed, this.startTime)), e2 ? this.currentTime = t2 : this.updateTime(t2);
      let v = this.currentTime - c2 * (this.playbackSpeed >= 0 ? 1 : -1), _ = this.playbackSpeed >= 0 ? v < 0 : v > s2;
      this.currentTime = Math.max(v, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = s2);
      let E = this.currentTime, k = n2;
      if (h2) {
        let t3 = Math.min(this.currentTime, s2) / d2, e3 = Math.floor(t3), r3 = t3 % 1;
        !r3 && t3 >= 1 && (r3 = 1), 1 === r3 && e3--, (e3 = Math.min(e3, h2 + 1)) % 2 && ("reverse" === M2 ? (r3 = 1 - r3, w2 && (r3 -= w2 / d2)) : "mirror" === M2 && (k = o2)), E = (0, a.clamp)(0, 1, r3) * d2;
      }
      _ ? (this.delayState.value = p2[0], r2 = this.delayState) : r2 = k.next(E), i2 && !_ && (r2.value = i2(r2.value));
      let { done: b } = r2;
      _ || null === u2 || (b = this.playbackSpeed >= 0 ? this.currentTime >= s2 : this.currentTime <= 0);
      let P = null === this.holdTime && ("finished" === this.state || "running" === this.state && b);
      return P && m2 !== l.inertia && (r2.value = (0, y.getFinalKeyframe)(p2, this.options, f, this.speed)), g && g(r2.value), P && this.finish(), r2;
    }
    then(t2, e2) {
      return this.finished.then(t2, e2);
    }
    get duration() {
      return (0, r.millisecondsToSeconds)(this.calculatedDuration);
    }
    get iterationDuration() {
      let { delay: t2 = 0 } = this.options || {};
      return this.duration + (0, r.millisecondsToSeconds)(t2);
    }
    get time() {
      return (0, r.millisecondsToSeconds)(this.currentTime);
    }
    set time(t2) {
      t2 = (0, r.secondsToMilliseconds)(t2), this.currentTime = t2, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t2 : this.driver && (this.startTime = this.driver.now() - t2 / this.playbackSpeed), this.driver ? this.driver.start(false) : (this.startTime = 0, this.state = "paused", this.holdTime = t2, this.tick(t2));
    }
    getGeneratorVelocity() {
      let t2 = this.currentTime;
      if (t2 <= 0) return this.options.velocity || 0;
      if (this.generator.velocity) return this.generator.velocity(t2);
      let e2 = this.generator.next(t2).value;
      return (0, c.getGeneratorVelocity)((t3) => this.generator.next(t3).value, t2, e2);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(t2) {
      let e2 = this.playbackSpeed !== t2;
      e2 && this.driver && this.updateTime(n.time.now()), this.playbackSpeed = t2, e2 && this.driver && (this.time = (0, r.millisecondsToSeconds)(this.currentTime));
    }
    play() {
      if (this.isStopped) return;
      let { driver: t2 = o.frameloopDriver, startTime: e2 } = this.options;
      this.driver || (this.driver = t2((t3) => this.tick(t3))), this.options.onPlay?.();
      let a2 = this.driver.now();
      "finished" === this.state ? (this.updateFinished(), this.startTime = a2) : null !== this.holdTime ? this.startTime = a2 - this.holdTime : this.startTime || (this.startTime = e2 ?? a2), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
    }
    pause() {
      this.state = "paused", this.updateTime(n.time.now()), this.holdTime = this.currentTime;
    }
    complete() {
      "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null;
    }
    finish() {
      this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
    }
    cancel() {
      this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
    }
    teardown() {
      this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, s.activeAnimations.mainThread--;
    }
    stopDriver() {
      this.driver && (this.driver.stop(), this.driver = void 0);
    }
    sample(t2) {
      return this.startTime = 0, this.tick(t2, true);
    }
    attachTimeline(t2) {
      return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t2.observe(this);
    }
  }
  t.s(["JSAnimation", 0, m]);
}, 105110, (t) => {
  "use strict";
  var e = t.i(26809), a = t.i(490692), r = t.i(470919), n = t.i(119058), s = t.i(651692), i = t.i(168741), o = t.i(796402), l = t.i(361376), d = t.i(716476), u = t.i(181142);
  try {
    var c = "u" > typeof window ? window : t.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  try {
    var y = "u" > typeof window ? window : t.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  class p extends o.WithPromise {
    constructor(t2) {
      if (super(), this.finishedTime = null, this.isStopped = false, this.manualStartTime = null, !t2) return;
      const { element: a2, name: r2, keyframes: s2, pseudoElement: o2, allowFlatten: c2 = false, finalKeyframe: y2, onComplete: p2 } = t2;
      this.isPseudoElement = !!o2, this.allowFlatten = c2, this.options = t2, (0, e.invariant)("string" != typeof t2.type, `Mini animate() doesn't support "type" as a string.`, "mini-spring");
      const h = (function({ type: t3, ...e2 }) {
        return (0, u.isGenerator)(t3) && (0, d.supportsLinearEasing)() ? t3.applyToOptions(e2) : (e2.duration ?? (e2.duration = 300), e2.ease ?? (e2.ease = "easeOut"), e2);
      })(t2);
      this.animation = (0, l.startWaapiAnimation)(a2, r2, s2, h, o2), false === h.autoplay && this.animation.pause(), this.animation.onfinish = () => {
        if (this.finishedTime = this.time, !o2) {
          let t3 = (0, i.getFinalKeyframe)(s2, this.options, y2, this.speed);
          this.updateMotionValue && this.updateMotionValue(t3), (0, n.setStyle)(a2, r2, t3), this.animation.cancel();
        }
        p2?.(), this.notifyFinished();
      };
    }
    play() {
      this.isStopped || (this.manualStartTime = null, this.animation.play(), "finished" === this.state && this.updateFinished());
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.finish?.();
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch (t2) {
      }
    }
    stop() {
      if (this.isStopped) return;
      this.isStopped = true;
      let { state: t2 } = this;
      "idle" !== t2 && "finished" !== t2 && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
    }
    commitStyles() {
      let t2 = this.options?.element;
      !this.isPseudoElement && t2?.isConnected && this.animation.commitStyles?.();
    }
    get duration() {
      let t2 = this.animation.effect?.getComputedTiming?.().duration || 0;
      return (0, a.millisecondsToSeconds)(Number(t2));
    }
    get iterationDuration() {
      let { delay: t2 = 0 } = this.options || {};
      return this.duration + (0, a.millisecondsToSeconds)(t2);
    }
    get time() {
      return (0, a.millisecondsToSeconds)(Number(this.animation.currentTime) || 0);
    }
    set time(t2) {
      let e2 = null !== this.finishedTime;
      this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = (0, a.secondsToMilliseconds)(t2), e2 && this.animation.pause();
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(t2) {
      t2 < 0 && (this.finishedTime = null), this.animation.playbackRate = t2;
    }
    get state() {
      return null !== this.finishedTime ? "finished" : this.animation.playState;
    }
    get startTime() {
      return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(t2) {
      this.manualStartTime = this.animation.startTime = t2;
    }
    attachTimeline({ timeline: t2, rangeStart: e2, rangeEnd: a2, observe: n2 }) {
      return (this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, t2 && (0, s.supportsScrollTimeline)()) ? (this.animation.timeline = t2, e2 && (this.animation.rangeStart = e2), a2 && (this.animation.rangeEnd = a2), r.noop) : n2(this);
    }
  }
  t.s(["NativeAnimation", 0, p], 105110);
}, 264153, 477851, 113386, (t) => {
  "use strict";
  var e = t.i(493858), a = t.i(957798), r = t.i(119058), n = t.i(823864), s = t.i(105110), i = t.i(785068), o = t.i(771559), l = t.i(436697), d = t.i(999267);
  try {
    var u = "u" > typeof window ? window : t.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let c = { anticipate: d.anticipate, backInOut: l.backInOut, circInOut: o.circInOut };
  try {
    var y = "u" > typeof window ? window : t.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  class p extends s.NativeAnimation {
    constructor(t2) {
      !(function(t3) {
        "string" == typeof t3.ease && t3.ease in c && (t3.ease = c[t3.ease]);
      })(t2), (0, i.replaceTransitionType)(t2), super(t2), void 0 !== t2.startTime && false !== t2.autoplay && (this.startTime = t2.startTime), this.options = t2;
    }
    updateMotionValue(t2) {
      let { motionValue: s2, onUpdate: i2, onComplete: o2, element: l2, ...d2 } = this.options;
      if (!s2) return;
      if (void 0 !== t2) return void s2.set(t2);
      let u2 = new n.JSAnimation({ ...d2, autoplay: false }), c2 = Math.max(10, a.time.now() - this.startTime), y2 = (0, e.clamp)(0, 10, c2 - 10), p2 = u2.sample(c2).value, { name: h2 } = this.options;
      l2 && h2 && (0, r.setStyle)(l2, h2, p2), s2.setWithVelocity(u2.sample(Math.max(0, c2 - y2)).value, p2, y2), u2.stop();
    }
  }
  t.s(["NativeAnimationExtended", 0, p], 264153);
  var h = t.i(26809), M = t.i(181142), w = t.i(929289);
  try {
    var m = "u" > typeof window ? window : t.g;
    m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[new m.Error().stack] = Object.assign({}, m._sentryModuleMetadata[new m.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let g = (t2, e2) => "zIndex" !== e2 && !!("number" == typeof t2 || Array.isArray(t2) || "string" == typeof t2 && (w.complex.test(t2) || "0" === t2) && !t2.startsWith("url("));
  try {
    var f = "u" > typeof window ? window : t.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["canAnimate", 0, function(t2, e2, a2, r2) {
    let n2 = t2[0];
    if (null === n2) return false;
    if ("display" === e2 || "visibility" === e2) return true;
    let s2 = t2[t2.length - 1], i2 = g(n2, e2), o2 = g(s2, e2);
    return (0, h.warning)(i2 === o2, `You are trying to animate ${e2} from "${n2}" to "${s2}". "${i2 ? s2 : n2}" is not an animatable value.`, "value-not-animatable"), !!i2 && !!o2 && ((function(t3) {
      let e3 = t3[0];
      if (1 === t3.length) return true;
      for (let a3 = 0; a3 < t3.length; a3++) if (t3[a3] !== e3) return true;
    })(t2) || ("spring" === a2 || (0, M.isGenerator)(a2)) && r2);
  }], 477851);
  try {
    var v = "u" > typeof window ? window : t.g;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["makeAnimationInstant", 0, function(t2) {
    t2.duration = 0, t2.type = "keyframes";
  }], 113386);
}, 597849, (t) => {
  "use strict";
  var e = t.i(502225), a = t.i(702915), r = t.i(236585);
  try {
    var n = "u" > typeof window ? window : t.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["animateSingleValue", 0, function(t2, n2, s) {
    let i = (0, r.isMotionValue)(t2) ? t2 : (0, a.motionValue)(t2);
    return i.start((0, e.animateMotionValue)("", i, n2, s)), i.animation;
  }]);
}, 569222, (t) => {
  "use strict";
  var e = t.i(957798), a = t.i(967682);
  try {
    var r = "u" > typeof window ? window : t.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["frameloopDriver", 0, (t2) => {
    let r2 = ({ timestamp: e2 }) => t2(e2);
    return { start: (t3 = true) => a.frame.update(r2, t3), stop: () => (0, a.cancelFrame)(r2), now: () => a.frameData.isProcessing ? a.frameData.timestamp : e.time.now() };
  }]);
}, 367712, 42233, 332117, 858674, (t) => {
  "use strict";
  var e = t.i(512065), a = t.i(921692);
  try {
    var r = "u" > typeof window ? window : t.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function n(t2, e2, r2) {
    let n2 = Math.max(e2 - 5, 0);
    return (0, a.velocityPerSecond)(r2 - t2(n2), e2 - n2);
  }
  t.s(["getGeneratorVelocity", 0, n], 42233);
  try {
    var s = "u" > typeof window ? window : t.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["inertia", 0, function({ keyframes: t2, velocity: a2 = 0, power: r2 = 0.8, timeConstant: s2 = 325, bounceDamping: i2 = 10, bounceStiffness: o2 = 500, modifyTarget: l2, min: d2, max: u2, restDelta: c2 = 0.5, restSpeed: y2 }) {
    let p2, h, M = t2[0], w = { done: false, value: M }, m = r2 * a2, g = M + m, f = void 0 === l2 ? g : l2(g);
    f !== g && (m = f - M);
    let v = (t3) => -m * Math.exp(-t3 / s2), _ = (t3) => f + v(t3), E = (t3) => {
      let e2 = v(t3), a3 = _(t3);
      w.done = Math.abs(e2) <= c2, w.value = w.done ? f : a3;
    }, k = (t3) => {
      let a3;
      if (a3 = w.value, void 0 !== d2 && a3 < d2 || void 0 !== u2 && a3 > u2) {
        var r3;
        p2 = t3, h = (0, e.spring)({ keyframes: [w.value, (r3 = w.value, void 0 === d2 ? u2 : void 0 === u2 || Math.abs(d2 - r3) < Math.abs(u2 - r3) ? d2 : u2)], velocity: n(_, t3, w.value), damping: i2, stiffness: o2, restDelta: c2, restSpeed: y2 });
      }
    };
    return k(0), { calculatedDuration: null, next: (t3) => {
      let e2 = false;
      return (h || void 0 !== p2 || (e2 = true, E(t3), k(t3)), void 0 !== p2 && t3 >= p2) ? h.next(t3 - p2) : (e2 || E(t3), w);
    } };
  }], 367712);
  var i = t.i(470919);
  try {
    var o = "u" > typeof window ? window : t.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let l = (t2, e2, a2) => (((1 - 3 * a2 + 3 * e2) * t2 + (3 * a2 - 6 * e2)) * t2 + 3 * e2) * t2;
  function d(t2, e2, a2, r2) {
    return t2 === e2 && a2 === r2 ? i.noop : (n2) => 0 === n2 || 1 === n2 ? n2 : l((function(t3, e3, a3, r3, n3) {
      let s2, i2, o2 = 0;
      do
        (s2 = l(i2 = e3 + (a3 - e3) / 2, r3, n3) - t3) > 0 ? a3 = i2 : e3 = i2;
      while (Math.abs(s2) > 1e-7 && ++o2 < 12);
      return i2;
    })(n2, 0, 1, t2, a2), e2, r2);
  }
  t.s(["cubicBezier", 0, d], 332117);
  try {
    var u = "u" > typeof window ? window : t.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let c = d(0.42, 0, 1, 1), y = d(0, 0, 0.58, 1), p = d(0.42, 0, 0.58, 1);
  t.s(["easeIn", 0, c, "easeInOut", 0, p, "easeOut", 0, y], 858674);
}, 770931, 310699, (t) => {
  "use strict";
  var e = t.i(858674), a = t.i(633191), r = t.i(26809), n = t.i(470919), s = t.i(999267), i = t.i(436697), o = t.i(771559), l = t.i(332117), d = t.i(828301);
  try {
    var u = "u" > typeof window ? window : t.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let c = { linear: n.noop, easeIn: e.easeIn, easeInOut: e.easeInOut, easeOut: e.easeOut, circIn: o.circIn, circInOut: o.circInOut, circOut: o.circOut, backIn: i.backIn, backInOut: i.backInOut, backOut: i.backOut, anticipate: s.anticipate }, y = (t2) => {
    if ((0, d.isBezierDefinition)(t2)) {
      (0, r.invariant)(4 === t2.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
      let [e2, a2, n2, s2] = t2;
      return (0, l.cubicBezier)(e2, a2, n2, s2);
    }
    return "string" == typeof t2 ? ((0, r.invariant)(void 0 !== c[t2], `Invalid easing type '${t2}'`, "invalid-easing-type"), c[t2]) : t2;
  };
  t.s(["easingDefinitionToFunction", 0, y], 310699);
  var p = t.i(498920), h = t.i(805639);
  try {
    var M = "u" > typeof window ? window : t.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  try {
    var w = "u" > typeof window ? window : t.g;
    w._sentryModuleMetadata = w._sentryModuleMetadata || {}, w._sentryModuleMetadata[new w.Error().stack] = Object.assign({}, w._sentryModuleMetadata[new w.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["keyframes", 0, function({ duration: t2 = 300, keyframes: r2, times: n2, ease: s2 = "easeInOut" }) {
    var i2;
    let o2 = (0, a.isEasingArray)(s2) ? s2.map(y) : y(s2), l2 = { done: false, value: r2[0] }, d2 = (i2 = n2 && n2.length === r2.length ? n2 : (0, h.defaultOffset)(r2), i2.map((e2) => e2 * t2)), u2 = (0, p.interpolate)(d2, r2, { ease: Array.isArray(o2) ? o2 : r2.map(() => o2 || e.easeInOut).splice(0, r2.length - 1) });
    return { calculatedDuration: t2, next: (e2) => (l2.value = u2(e2), l2.done = e2 >= t2, l2) };
  }], 770931);
}, 512065, 742622, 620117, (t) => {
  "use strict";
  var e = t.i(490692), a = t.i(493858), r = t.i(26809), n = t.i(146500);
  try {
    var s = "u" > typeof window ? window : t.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function i(t2) {
    let e2 = 0, a2 = t2.next(e2);
    for (; !a2.done && e2 < 2e4; ) e2 += 50, a2 = t2.next(e2);
    return e2 >= 2e4 ? 1 / 0 : e2;
  }
  t.s(["calcGeneratorDuration", 0, i, "maxGeneratorDuration", 0, 2e4], 742622);
  try {
    var o = "u" > typeof window ? window : t.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function l(t2, a2 = 100, r2) {
    let n2 = r2({ ...t2, keyframes: [0, a2] }), s2 = Math.min(i(n2), 2e4);
    return { type: "keyframes", ease: (t3) => n2.next(s2 * t3).value / a2, duration: (0, e.millisecondsToSeconds)(s2) };
  }
  t.s(["createGeneratorEasing", 0, l], 620117);
  try {
    var d = "u" > typeof window ? window : t.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let u = 0.01, c = 2, y = 5e-3, p = 0.5;
  function h(t2, e2) {
    return t2 * Math.sqrt(1 - e2 * e2);
  }
  let M = ["duration", "bounce"], w = ["stiffness", "damping", "mass"];
  function m(t2, e2) {
    return e2.some((e3) => void 0 !== t2[e3]);
  }
  function g(t2 = 0.3, s2 = 0.3) {
    let o2, l2, d2, f, v, _, E = "object" != typeof t2 ? { visualDuration: t2, keyframes: [0, 1], bounce: s2 } : t2, { restSpeed: k, restDelta: b } = E, P = E.keyframes[0], x = E.keyframes[E.keyframes.length - 1], A = { done: false, value: P }, { stiffness: T, damping: B, mass: S, duration: O, velocity: j, isResolvedFromDuration: V } = (function(t3) {
      let n2 = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false, ...t3 };
      if (!m(t3, w) && m(t3, M)) if (n2.velocity = 0, t3.visualDuration) {
        let e2 = 2 * Math.PI / (1.2 * t3.visualDuration), r2 = e2 * e2, s3 = 2 * (0, a.clamp)(0.05, 1, 1 - (t3.bounce || 0)) * Math.sqrt(r2);
        n2 = { ...n2, mass: 1, stiffness: r2, damping: s3 };
      } else {
        let s3 = (function({ duration: t4 = 800, bounce: n3 = 0.3, velocity: s4 = 0, mass: i2 = 1 }) {
          let o3, l3;
          (0, r.warning)(t4 <= (0, e.secondsToMilliseconds)(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
          let d3 = 1 - n3;
          d3 = (0, a.clamp)(0.05, 1, d3), t4 = (0, a.clamp)(0.01, 10, (0, e.millisecondsToSeconds)(t4)), d3 < 1 ? (o3 = (e2) => {
            let a2 = e2 * d3, r2 = a2 * t4;
            return 1e-3 - (a2 - s4) / h(e2, d3) * Math.exp(-r2);
          }, l3 = (e2) => {
            let a2 = e2 * d3 * t4, r2 = Math.pow(d3, 2) * Math.pow(e2, 2) * t4, n4 = Math.exp(-a2), i3 = h(Math.pow(e2, 2), d3);
            return (a2 * s4 + s4 - r2) * n4 * (-o3(e2) + 1e-3 > 0 ? -1 : 1) / i3;
          }) : (o3 = (e2) => -1e-3 + Math.exp(-e2 * t4) * ((e2 - s4) * t4 + 1), l3 = (e2) => t4 * t4 * (s4 - e2) * Math.exp(-e2 * t4));
          let u2 = (function(t5, e2, a2) {
            let r2 = a2;
            for (let a3 = 1; a3 < 12; a3++) r2 -= t5(r2) / e2(r2);
            return r2;
          })(o3, l3, 5 / t4);
          if (t4 = (0, e.secondsToMilliseconds)(t4), isNaN(u2)) return { stiffness: 100, damping: 10, duration: t4 };
          {
            let e2 = Math.pow(u2, 2) * i2;
            return { stiffness: e2, damping: 2 * d3 * Math.sqrt(i2 * e2), duration: t4 };
          }
        })({ ...t3, velocity: 0 });
        (n2 = { ...n2, ...s3, mass: 1 }).isResolvedFromDuration = true;
      }
      return n2;
    })({ ...E, velocity: -(0, e.millisecondsToSeconds)(E.velocity || 0) }), K = j || 0, C = B / (2 * Math.sqrt(T * S)), D = x - P, R = (0, e.millisecondsToSeconds)(Math.sqrt(T / S)), L = 5 > Math.abs(D);
    if (k || (k = L ? u : c), b || (b = L ? y : p), C < 1) d2 = h(R, C), f = (K + C * R * D) / d2, o2 = (t3) => x - Math.exp(-C * R * t3) * (f * Math.sin(d2 * t3) + D * Math.cos(d2 * t3)), v = C * R * f + D * d2, _ = C * R * D - f * d2, l2 = (t3) => Math.exp(-C * R * t3) * (v * Math.sin(d2 * t3) + _ * Math.cos(d2 * t3));
    else if (1 === C) {
      o2 = (t4) => x - Math.exp(-R * t4) * (D + (K + R * D) * t4);
      let t3 = K + R * D;
      l2 = (e2) => Math.exp(-R * e2) * (R * t3 * e2 - K);
    } else {
      let t3 = R * Math.sqrt(C * C - 1);
      o2 = (e3) => {
        let a3 = Math.exp(-C * R * e3), r3 = Math.min(t3 * e3, 300);
        return x - a3 * ((K + C * R * D) * Math.sinh(r3) + t3 * D * Math.cosh(r3)) / t3;
      };
      let e2 = (K + C * R * D) / t3, a2 = C * R * e2 - D * t3, r2 = C * R * D - e2 * t3;
      l2 = (e3) => {
        let n2 = Math.exp(-C * R * e3), s3 = Math.min(t3 * e3, 300);
        return n2 * (a2 * Math.sinh(s3) + r2 * Math.cosh(s3));
      };
    }
    let F = { calculatedDuration: V && O || null, velocity: (t3) => (0, e.secondsToMilliseconds)(l2(t3)), next: (t3) => {
      if (!V && C < 1) {
        let a3 = Math.exp(-C * R * t3), r2 = Math.sin(d2 * t3), n2 = Math.cos(d2 * t3), s3 = x - a3 * (f * r2 + D * n2);
        return A.done = Math.abs((0, e.secondsToMilliseconds)(a3 * (v * r2 + _ * n2))) <= k && Math.abs(x - s3) <= b, A.value = A.done ? x : s3, A;
      }
      let a2 = o2(t3);
      return V ? A.done = t3 >= O : A.done = Math.abs((0, e.secondsToMilliseconds)(l2(t3))) <= k && Math.abs(x - a2) <= b, A.value = A.done ? x : a2, A;
    }, toString: () => {
      let t3 = Math.min(i(F), 2e4), e2 = (0, n.generateLinearEasing)((e3) => F.next(t3 * e3).value, t3, 30);
      return t3 + "ms " + e2;
    }, toTransition: () => {
    } };
    return F;
  }
  g.applyToOptions = (t2) => {
    let a2 = l(t2, 100, g);
    return t2.ease = a2.ease, t2.duration = (0, e.secondsToMilliseconds)(a2.duration), t2.type = "keyframes", t2;
  }, t.s(["spring", 0, g], 512065);
}, 181142, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["isGenerator", 0, function(t2) {
    return "function" == typeof t2 && "applyToOptions" in t2;
  }]);
}, 502225, (t) => {
  "use strict";
  var e = t.i(490692), a = t.i(926490), r = t.i(551583), n = t.i(823864), s = t.i(138526), i = t.i(113386), o = t.i(324032);
  try {
    var l = "u" > typeof window ? window : t.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let d = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }, u = { type: "keyframes", duration: 0.8 }, c = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 };
  var y = t.i(168741);
  try {
    var p = "u" > typeof window ? window : t.g;
    p._sentryModuleMetadata = p._sentryModuleMetadata || {}, p._sentryModuleMetadata[new p.Error().stack] = Object.assign({}, p._sentryModuleMetadata[new p.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let h = /* @__PURE__ */ new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
  var M = t.i(967682);
  try {
    var w = "u" > typeof window ? window : t.g;
    w._sentryModuleMetadata = w._sentryModuleMetadata || {}, w._sentryModuleMetadata[new w.Error().stack] = Object.assign({}, w._sentryModuleMetadata[new w.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["animateMotionValue", 0, (t2, l2, p2, w2 = {}, m, g) => (f) => {
    let v = (0, s.getValueTransition)(w2, t2) || {}, _ = v.delay || w2.delay || 0, { elapsed: E = 0 } = w2;
    E -= (0, e.secondsToMilliseconds)(_);
    let k = { keyframes: Array.isArray(p2) ? p2 : [null, p2], ease: "easeOut", velocity: l2.getVelocity(), ...v, delay: -E, onUpdate: (t3) => {
      l2.set(t3), v.onUpdate && v.onUpdate(t3);
    }, onComplete: () => {
      f(), v.onComplete && v.onComplete();
    }, name: t2, motionValue: l2, element: g ? void 0 : m };
    !(function(t3) {
      for (let e2 in t3) if (!h.has(e2)) return true;
      return false;
    })(v) && Object.assign(k, ((t3, { keyframes: e2 }) => e2.length > 2 ? u : o.transformProps.has(t3) ? t3.startsWith("scale") ? { type: "spring", stiffness: 550, damping: 0 === e2[1] ? 2 * Math.sqrt(550) : 30, restSpeed: 10 } : d : c)(t2, k)), k.duration && (k.duration = (0, e.secondsToMilliseconds)(k.duration)), k.repeatDelay && (k.repeatDelay = (0, e.secondsToMilliseconds)(k.repeatDelay)), void 0 !== k.from && (k.keyframes[0] = k.from);
    let b = false;
    if (false !== k.type && (0 !== k.duration || k.repeatDelay) || ((0, i.makeAnimationInstant)(k), 0 === k.delay && (b = true)), (a.MotionGlobalConfig.instantAnimations || a.MotionGlobalConfig.skipAnimations || m?.shouldSkipAnimations) && (b = true, (0, i.makeAnimationInstant)(k), k.delay = 0), k.allowFlatten = !v.type && !v.ease, b && !g && void 0 !== l2.get()) {
      let t3 = (0, y.getFinalKeyframe)(k.keyframes, v);
      if (void 0 !== t3) return void M.frame.update(() => {
        k.onUpdate(t3), k.onComplete();
      });
    }
    return v.isSync ? new n.JSAnimation(k) : new r.AsyncMotionValueAnimation(k);
  }], 502225);
}, 771788, (t) => {
  "use strict";
  var e = t.i(138526), a = t.i(256192), r = t.i(611920), n = t.i(999504), s = t.i(850669), i = t.i(530017), o = t.i(502225), l = t.i(967682);
  try {
    var d = "u" > typeof window ? window : t.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["animateTarget", 0, function(t2, d2, { delay: u = 0, transitionOverride: c, type: y } = {}) {
    let { transition: p, transitionEnd: h, ...M } = d2, w = t2.getDefaultTransition();
    p = p ? (0, a.resolveTransition)(p, w) : w;
    let m = p?.reduceMotion;
    c && (p = c);
    let g = [], f = y && t2.animationState && t2.animationState.getState()[y];
    for (let a2 in M) {
      let n2 = t2.getValue(a2, t2.latestValues[a2] ?? null), d3 = M[a2];
      if (void 0 === d3 || f && (function({ protectedKeys: t3, needsAnimating: e2 }, a3) {
        let r2 = t3.hasOwnProperty(a3) && true !== e2[a3];
        return e2[a3] = false, r2;
      })(f, a2)) continue;
      let c2 = { delay: u, ...(0, e.getValueTransition)(p || {}, a2) }, y2 = n2.get();
      if (void 0 !== y2 && !n2.isAnimating() && !Array.isArray(d3) && d3 === y2 && !c2.velocity) {
        l.frame.update(() => n2.set(d3));
        continue;
      }
      let h2 = false;
      if (window.MotionHandoffAnimation) {
        let e2 = (0, i.getOptimisedAppearId)(t2);
        if (e2) {
          let t3 = window.MotionHandoffAnimation(e2, a2, l.frame);
          null !== t3 && (c2.startTime = t3, h2 = true);
        }
      }
      (0, s.addValueToWillChange)(t2, a2);
      let w2 = m ?? t2.shouldReduceMotion;
      n2.start((0, o.animateMotionValue)(a2, n2, d3, w2 && r.positionalKeys.has(a2) ? { type: false } : c2, t2, h2));
      let v = n2.animation;
      v && g.push(v);
    }
    if (h) {
      let e2 = () => l.frame.update(() => {
        h && (0, n.setTarget)(t2, h);
      });
      g.length ? Promise.all(g).then(e2) : e2();
    }
    return g;
  }]);
}, 721096, 735142, 808557, (t) => {
  "use strict";
  var e = t.i(611920), a = t.i(339484), r = t.i(500718), n = t.i(282466), s = t.i(369379);
  try {
    var i = "u" > typeof window ? window : t.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let o = (t2) => /^0[^.\s]+$/u.test(t2);
  t.s(["isZeroValueString", 0, o], 735142);
  try {
    var l = "u" > typeof window ? window : t.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  var d = t.i(929289), u = t.i(737412), c = t.i(654743), y = t.i(707273);
  try {
    var p = "u" > typeof window ? window : t.g;
    p._sentryModuleMetadata = p._sentryModuleMetadata || {}, p._sentryModuleMetadata[new p.Error().stack] = Object.assign({}, p._sentryModuleMetadata[new p.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let h = /* @__PURE__ */ new Set([u.filter, c.mask]);
  function M(t2, e2) {
    let a2 = (0, y.getDefaultValueType)(t2);
    return h.has(a2) || (a2 = d.complex), a2.getAnimatableNone ? a2.getAnimatableNone(e2) : void 0;
  }
  t.s(["getAnimatableNone", 0, M], 808557);
  try {
    var w = "u" > typeof window ? window : t.g;
    w._sentryModuleMetadata = w._sentryModuleMetadata || {}, w._sentryModuleMetadata[new w.Error().stack] = Object.assign({}, w._sentryModuleMetadata[new w.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let m = /* @__PURE__ */ new Set(["auto", "none", "0"]);
  var g = t.i(189863);
  try {
    var f = "u" > typeof window ? window : t.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  class v extends s.KeyframeResolver {
    constructor(t2, e2, a2, r2, n2) {
      super(t2, e2, a2, r2, n2, true);
    }
    readKeyframes() {
      let { unresolvedKeyframes: t2, element: s2, name: i2 } = this;
      if (!s2 || !s2.current) return;
      super.readKeyframes();
      for (let e2 = 0; e2 < t2.length; e2++) {
        let a2 = t2[e2];
        if ("string" == typeof a2 && (a2 = a2.trim(), (0, n.isCSSVariableToken)(a2))) {
          let n2 = (0, r.getVariableValue)(a2, s2.current);
          void 0 !== n2 && (t2[e2] = n2), e2 === t2.length - 1 && (this.finalKeyframe = a2);
        }
      }
      if (this.resolveNoneKeyframes(), !e.positionalKeys.has(i2) || 2 !== t2.length) return;
      let [o2, l2] = t2, d2 = (0, a.findDimensionValueType)(o2), u2 = (0, a.findDimensionValueType)(l2);
      if ((0, n.containsCSSVariable)(o2) !== (0, n.containsCSSVariable)(l2) && g.positionalValues[i2]) {
        this.needsMeasurement = true;
        return;
      }
      if (d2 !== u2) if ((0, g.isNumOrPxType)(d2) && (0, g.isNumOrPxType)(u2)) for (let e2 = 0; e2 < t2.length; e2++) {
        let a2 = t2[e2];
        "string" == typeof a2 && (t2[e2] = parseFloat(a2));
      }
      else g.positionalValues[i2] && (this.needsMeasurement = true);
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: t2, name: e2 } = this, a2 = [];
      for (let e3 = 0; e3 < t2.length; e3++) {
        var r2;
        (null === t2[e3] || ("number" == typeof (r2 = t2[e3]) ? 0 === r2 : null === r2 || "none" === r2 || "0" === r2 || o(r2))) && a2.push(e3);
      }
      a2.length && (function(t3, e3, a3) {
        let r3, n2 = 0;
        for (; n2 < t3.length && !r3; ) {
          let e4 = t3[n2];
          "string" == typeof e4 && !m.has(e4) && (0, d.analyseComplexValue)(e4).values.length && (r3 = t3[n2]), n2++;
        }
        if (r3 && a3) for (let n3 of e3) t3[n3] = M(a3, r3);
      })(t2, a2, e2);
    }
    measureInitialState() {
      let { element: t2, unresolvedKeyframes: e2, name: a2 } = this;
      if (!t2 || !t2.current) return;
      "height" === a2 && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = g.positionalValues[a2](t2.measureViewportBox(), window.getComputedStyle(t2.current)), e2[0] = this.measuredOrigin;
      let r2 = e2[e2.length - 1];
      void 0 !== r2 && t2.getValue(a2, r2).jump(r2, false);
    }
    measureEndState() {
      let { element: t2, name: e2, unresolvedKeyframes: a2 } = this;
      if (!t2 || !t2.current) return;
      let r2 = t2.getValue(e2);
      r2 && r2.jump(this.measuredOrigin, false);
      let n2 = a2.length - 1, s2 = a2[n2];
      a2[n2] = g.positionalValues[e2](t2.measureViewportBox(), window.getComputedStyle(t2.current)), null !== s2 && void 0 === this.finalKeyframe && (this.finalKeyframe = s2), this.removedTransforms?.length && this.removedTransforms.forEach(([e3, a3]) => {
        t2.getValue(e3).set(a3);
      }), this.resolveNoneKeyframes();
    }
  }
  t.s(["DOMKeyframesResolver", 0, v], 721096);
}, 369379, 189863, (t) => {
  "use strict";
  var e = t.i(289199), a = t.i(433639), r = t.i(324032), n = t.i(438313), s = t.i(409138);
  try {
    var i = "u" > typeof window ? window : t.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let o = /* @__PURE__ */ new Set(["x", "y", "z"]), l = r.transformPropOrder.filter((t2) => !o.has(t2));
  function d(t2) {
    let e2 = [];
    return l.forEach((a2) => {
      let r2 = t2.getValue(a2);
      void 0 !== r2 && (e2.push([a2, r2.get()]), r2.set(+!!a2.startsWith("scale")));
    }), e2;
  }
  let u = { width: ({ x: t2 }, { paddingLeft: e2 = "0", paddingRight: a2 = "0", boxSizing: r2 }) => {
    let n2 = t2.max - t2.min;
    return "border-box" === r2 ? n2 : n2 - parseFloat(e2) - parseFloat(a2);
  }, height: ({ y: t2 }, { paddingTop: e2 = "0", paddingBottom: a2 = "0", boxSizing: r2 }) => {
    let n2 = t2.max - t2.min;
    return "border-box" === r2 ? n2 : n2 - parseFloat(e2) - parseFloat(a2);
  }, top: (t2, { top: e2 }) => parseFloat(e2), left: (t2, { left: e2 }) => parseFloat(e2), bottom: ({ y: t2 }, { top: e2 }) => parseFloat(e2) + (t2.max - t2.min), right: ({ x: t2 }, { left: e2 }) => parseFloat(e2) + (t2.max - t2.min), x: (t2, { transform: e2 }) => (0, a.parseValueFromTransform)(e2, "x"), y: (t2, { transform: e2 }) => (0, a.parseValueFromTransform)(e2, "y") };
  u.translateX = u.x, u.translateY = u.y, t.s(["isNumOrPxType", 0, (t2) => t2 === n.number || t2 === s.px, "positionalValues", 0, u, "removeNonTranslationalTransform", 0, d], 189863);
  var c = t.i(967682);
  try {
    var y = "u" > typeof window ? window : t.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let p = /* @__PURE__ */ new Set(), h = false, M = false, w = false;
  function m() {
    if (M) {
      let t2 = Array.from(p).filter((t3) => t3.needsMeasurement), e2 = new Set(t2.map((t3) => t3.element)), a2 = /* @__PURE__ */ new Map();
      e2.forEach((t3) => {
        let e3 = d(t3);
        e3.length && (a2.set(t3, e3), t3.render());
      }), t2.forEach((t3) => t3.measureInitialState()), e2.forEach((t3) => {
        t3.render();
        let e3 = a2.get(t3);
        e3 && e3.forEach(([e4, a3]) => {
          t3.getValue(e4)?.set(a3);
        });
      }), t2.forEach((t3) => t3.measureEndState()), t2.forEach((t3) => {
        void 0 !== t3.suspendedScrollY && window.scrollTo(0, t3.suspendedScrollY);
      });
    }
    M = false, h = false, p.forEach((t2) => t2.complete(w)), p.clear();
  }
  function g() {
    p.forEach((t2) => {
      t2.readKeyframes(), t2.needsMeasurement && (M = true);
    });
  }
  t.s(["KeyframeResolver", 0, class {
    constructor(t2, e2, a2, r2, n2, s2 = false) {
      this.state = "pending", this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [...t2], this.onComplete = e2, this.name = a2, this.motionValue = r2, this.element = n2, this.isAsync = s2;
    }
    scheduleResolve() {
      this.state = "scheduled", this.isAsync ? (p.add(this), h || (h = true, c.frame.read(g), c.frame.resolveKeyframes(m))) : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      let { unresolvedKeyframes: t2, name: a2, element: r2, motionValue: n2 } = this;
      if (null === t2[0]) {
        let e2 = n2?.get(), s2 = t2[t2.length - 1];
        if (void 0 !== e2) t2[0] = e2;
        else if (r2 && a2) {
          let e3 = r2.readValue(a2, s2);
          null != e3 && (t2[0] = e3);
        }
        void 0 === t2[0] && (t2[0] = s2), n2 && void 0 === e2 && n2.set(t2[0]);
      }
      (0, e.fillWildcards)(t2);
    }
    setFinalKeyframe() {
    }
    measureInitialState() {
    }
    renderEndStyles() {
    }
    measureEndState() {
    }
    complete(t2 = false) {
      this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t2), p.delete(this);
    }
    cancel() {
      "scheduled" === this.state && (p.delete(this), this.state = "pending");
    }
    resume() {
      "pending" === this.state && this.scheduleResolve();
    }
  }, "flushKeyframeResolvers", 0, function() {
    w = true, g(), m(), w = false;
  }], 369379);
}, 168741, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let a = (t2) => null !== t2;
  t.s(["getFinalKeyframe", 0, function(t2, { repeat: e2, repeatType: r = "loop" }, n, s = 1) {
    let i = t2.filter(a), o = s < 0 || e2 && "loop" !== r && e2 % 2 == 1 ? 0 : i.length - 1;
    return o && void 0 !== n ? n : i[o];
  }]);
}, 805639, 659056, (t) => {
  "use strict";
  var e = t.i(241058), a = t.i(870820);
  try {
    var r = "u" > typeof window ? window : t.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function n(t2, r2) {
    let n2 = t2[t2.length - 1];
    for (let s2 = 1; s2 <= r2; s2++) {
      let i = (0, e.progress)(0, r2, s2);
      t2.push((0, a.mixNumber)(n2, 1, i));
    }
  }
  t.s(["fillOffset", 0, n], 659056);
  try {
    var s = "u" > typeof window ? window : t.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["defaultOffset", 0, function(t2) {
    let e2 = [0];
    return n(e2, t2.length - 1), e2;
  }], 805639);
}, 289199, 433639, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["fillWildcards", 0, function(t2) {
    for (let e2 = 1; e2 < t2.length; e2++) t2[e2] ?? (t2[e2] = t2[e2 - 1]);
  }], 289199);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let r = (t2) => 180 * t2 / Math.PI, n = (t2) => i(r(Math.atan2(t2[1], t2[0]))), s = { x: 4, y: 5, translateX: 4, translateY: 5, scaleX: 0, scaleY: 3, scale: (t2) => (Math.abs(t2[0]) + Math.abs(t2[3])) / 2, rotate: n, rotateZ: n, skewX: (t2) => r(Math.atan(t2[1])), skewY: (t2) => r(Math.atan(t2[2])), skew: (t2) => (Math.abs(t2[1]) + Math.abs(t2[2])) / 2 }, i = (t2) => ((t2 %= 360) < 0 && (t2 += 360), t2), o = (t2) => Math.sqrt(t2[0] * t2[0] + t2[1] * t2[1]), l = (t2) => Math.sqrt(t2[4] * t2[4] + t2[5] * t2[5]), d = { x: 12, y: 13, z: 14, translateX: 12, translateY: 13, translateZ: 14, scaleX: o, scaleY: l, scale: (t2) => (o(t2) + l(t2)) / 2, rotateX: (t2) => i(r(Math.atan2(t2[6], t2[5]))), rotateY: (t2) => i(r(Math.atan2(-t2[2], t2[0]))), rotateZ: n, rotate: n, skewX: (t2) => r(Math.atan(t2[4])), skewY: (t2) => r(Math.atan(t2[1])), skew: (t2) => (Math.abs(t2[1]) + Math.abs(t2[4])) / 2 };
  function u(t2) {
    return +!!t2.includes("scale");
  }
  function c(t2, e2) {
    let a2, r2;
    if (!t2 || "none" === t2) return u(e2);
    let n2 = t2.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    if (n2) a2 = d, r2 = n2;
    else {
      let e3 = t2.match(/^matrix\(([-\d.e\s,]+)\)$/u);
      a2 = s, r2 = e3;
    }
    if (!r2) return u(e2);
    let i2 = a2[e2], o2 = r2[1].split(",").map(y);
    return "function" == typeof i2 ? i2(o2) : o2[i2];
  }
  function y(t2) {
    return parseFloat(t2.trim());
  }
  t.s(["defaultTransformValue", 0, u, "parseValueFromTransform", 0, c, "readTransformValue", 0, (t2, e2) => {
    let { transform: a2 = "none" } = getComputedStyle(t2);
    return c(a2, e2);
  }], 433639);
}, 261254, (t) => {
  "use strict";
  var e = t.i(488599);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let r = "data-" + (0, e.camelToDash)("framerAppearId");
  t.s(["optimizedAppearDataAttribute", 0, r]);
}, 530017, (t) => {
  "use strict";
  var e = t.i(261254);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["getOptimisedAppearId", 0, function(t2) {
    return t2.props[e.optimizedAppearDataAttribute];
  }]);
}, 796402, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["WithPromise", 0, class {
    constructor() {
      this.updateFinished();
    }
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise((t2) => {
        this.resolve = t2;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    then(t2, e2) {
      return this.finished.then(t2, e2);
    }
  }]);
}, 138526, (t) => {
  "use strict";
  var e = t.i(256192);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["getValueTransition", 0, function(t2, a2) {
    let r = t2?.[a2] ?? t2?.default ?? t2;
    return r !== t2 ? (0, e.resolveTransition)(r, t2) : r;
  }]);
}, 282466, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let a = (t2) => (e2) => "string" == typeof e2 && e2.startsWith(t2), r = a("--"), n = a("var(--"), s = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  t.s(["containsCSSVariable", 0, function(t2) {
    return "string" == typeof t2 && t2.split("/*")[0].includes("var(--");
  }, "isCSSVariableName", 0, r, "isCSSVariableToken", 0, (t2) => !!n(t2) && s.test(t2.split("/*")[0].trim())]);
}, 785068, (t) => {
  "use strict";
  var e = t.i(367712), a = t.i(770931), r = t.i(512065);
  try {
    var n = "u" > typeof window ? window : t.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let s = { decay: e.inertia, inertia: e.inertia, tween: a.keyframes, keyframes: a.keyframes, spring: r.spring };
  t.s(["replaceTransitionType", 0, function(t2) {
    "string" == typeof t2.type && (t2.type = s[t2.type]);
  }]);
}, 256192, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["resolveTransition", 0, function(t2, e2) {
    if (t2?.inherit && e2) {
      let { inherit: a, ...r } = t2;
      return { ...e2, ...r };
    }
    return t2;
  }]);
}, 361376, (t) => {
  "use strict";
  var e = t.i(431772), a = t.i(94907), r = t.i(828301), n = t.i(716476), s = t.i(146500);
  try {
    var i = "u" > typeof window ? window : t.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let o = ([t2, e2, a2, r2]) => `cubic-bezier(${t2}, ${e2}, ${a2}, ${r2})`;
  try {
    var l = "u" > typeof window ? window : t.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let d = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: o([0, 0.65, 0.55, 1]), circOut: o([0.55, 0, 1, 0.45]), backIn: o([0.31, 0.01, 0.66, -0.59]), backOut: o([0.33, 1.53, 0.69, 0.99]) };
  try {
    var u = "u" > typeof window ? window : t.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  try {
    var c = "u" > typeof window ? window : t.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["startWaapiAnimation", 0, function(t2, i2, l2, { delay: u2 = 0, duration: c2 = 300, repeat: y = 0, repeatType: p = "loop", ease: h = "easeOut", times: M } = {}, w) {
    let m = { [i2]: l2 };
    M && (m.offset = M);
    let g = (function t3(e2, a2) {
      if (e2) return "function" == typeof e2 ? (0, n.supportsLinearEasing)() ? (0, s.generateLinearEasing)(e2, a2) : "ease-out" : (0, r.isBezierDefinition)(e2) ? o(e2) : Array.isArray(e2) ? e2.map((e3) => t3(e3, a2) || d.easeOut) : d[e2];
    })(h, c2);
    Array.isArray(g) && (m.easing = g), a.statsBuffer.value && e.activeAnimations.waapi++;
    let f = { delay: u2, duration: c2, easing: Array.isArray(g) ? "linear" : g, fill: "both", iterations: y + 1, direction: "reverse" === p ? "alternate" : "normal" };
    w && (f.pseudoElement = w);
    let v = t2.animate(m, f);
    return a.statsBuffer.value && v.finished.finally(() => {
      e.activeAnimations.waapi--;
    }), v;
  }], 361376);
}, 290932, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let a = /* @__PURE__ */ new Set(["opacity", "clipPath", "filter", "transform"]);
  t.s(["acceleratedValues", 0, a]);
}, 146500, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["generateLinearEasing", 0, (t2, e2, a = 10) => {
    let r = "", n = Math.max(Math.round(e2 / a), 2);
    for (let e3 = 0; e3 < n; e3++) r += Math.round(1e4 * t2(e3 / (n - 1))) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  }]);
}, 967682, 470919, 94907, 992310, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let a = (t2) => t2;
  t.s(["noop", 0, a], 470919);
  var r = t.i(926490);
  try {
    var n = "u" > typeof window ? window : t.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let s = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
  try {
    var i = "u" > typeof window ? window : t.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let o = { value: null, addProjectionMetrics: null };
  t.s(["statsBuffer", 0, o], 94907);
  try {
    var l = "u" > typeof window ? window : t.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  try {
    var d = "u" > typeof window ? window : t.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function u(t2, e2) {
    let a2 = false, n2 = true, i2 = { delta: 0, timestamp: 0, isProcessing: false }, l2 = () => a2 = true, d2 = s.reduce((t3, a3) => (t3[a3] = /* @__PURE__ */ (function(t4, e3) {
      let a4 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Set(), n3 = false, s2 = false, i3 = /* @__PURE__ */ new WeakSet(), l3 = { delta: 0, timestamp: 0, isProcessing: false }, d3 = 0;
      function u3(e4) {
        i3.has(e4) && (c3.schedule(e4), t4()), d3++, e4(l3);
      }
      let c3 = { schedule: (t5, e4 = false, s3 = false) => {
        let o2 = s3 && n3 ? a4 : r2;
        return e4 && i3.add(t5), o2.add(t5), t5;
      }, cancel: (t5) => {
        r2.delete(t5), i3.delete(t5);
      }, process: (t5) => {
        if (l3 = t5, n3) {
          s2 = true;
          return;
        }
        n3 = true;
        let i4 = a4;
        a4 = r2, r2 = i4, a4.forEach(u3), e3 && o.value && o.value.frameloop[e3].push(d3), d3 = 0, a4.clear(), n3 = false, s2 && (s2 = false, c3.process(t5));
      } };
      return c3;
    })(l2, e2 ? a3 : void 0), t3), {}), { setup: u2, read: c2, resolveKeyframes: y2, preUpdate: p2, update: h2, preRender: M2, render: w, postRender: m } = d2, g = () => {
      let s2 = r.MotionGlobalConfig.useManualTiming, o2 = s2 ? i2.timestamp : performance.now();
      a2 = false, s2 || (i2.delta = n2 ? 1e3 / 60 : Math.max(Math.min(o2 - i2.timestamp, 40), 1)), i2.timestamp = o2, i2.isProcessing = true, u2.process(i2), c2.process(i2), y2.process(i2), p2.process(i2), h2.process(i2), M2.process(i2), w.process(i2), m.process(i2), i2.isProcessing = false, a2 && e2 && (n2 = false, t2(g));
    };
    return { schedule: s.reduce((e3, r2) => {
      let s2 = d2[r2];
      return e3[r2] = (e4, r3 = false, o2 = false) => (!a2 && (a2 = true, n2 = true, i2.isProcessing || t2(g)), s2.schedule(e4, r3, o2)), e3;
    }, {}), cancel: (t3) => {
      for (let e3 = 0; e3 < s.length; e3++) d2[s[e3]].cancel(t3);
    }, state: i2, steps: d2 };
  }
  t.s(["createRenderBatcher", 0, u], 992310);
  try {
    var c = "u" > typeof window ? window : t.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let { schedule: y, cancel: p, state: h, steps: M } = u("u" > typeof requestAnimationFrame ? requestAnimationFrame : a, true);
  t.s(["cancelFrame", 0, p, "frame", 0, y, "frameData", 0, h, "frameSteps", 0, M], 967682);
}, 427139, 451664, (t) => {
  "use strict";
  var e = t.i(992310);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let { schedule: r } = (0, e.createRenderBatcher)(queueMicrotask, false);
  t.s(["microtask", 0, r], 427139);
  var n = t.i(33795), s = t.i(929289), i = t.i(339484), o = t.i(397308);
  try {
    var l = "u" > typeof window ? window : t.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let d = [...i.dimensionValueTypes, n.color, s.complex];
  t.s(["findValueType", 0, (t2) => d.find((0, o.testValueType)(t2))], 451664);
}, 957798, (t) => {
  "use strict";
  let e;
  var a = t.i(926490), r = t.i(967682);
  try {
    var n = "u" > typeof window ? window : t.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function s() {
    e = void 0;
  }
  let i = { now: () => (void 0 === e && i.set(r.frameData.isProcessing || a.MotionGlobalConfig.useManualTiming ? r.frameData.timestamp : performance.now()), e), set: (t2) => {
    e = t2, queueMicrotask(s);
  } };
  t.s(["time", 0, i]);
}, 604365, 96819, (t) => {
  "use strict";
  var e = t.i(236585), a = t.i(721096), r = t.i(490692), n = t.i(932255), s = t.i(735142), i = t.i(796457), o = t.i(369379), l = t.i(105110), d = t.i(290932), u = t.i(427139), c = t.i(957798), y = t.i(427684), p = t.i(702915), h = t.i(929289), M = t.i(808557), w = t.i(451664), m = t.i(499737), g = t.i(21280), f = t.i(324032), v = t.i(694344), _ = t.i(634907), E = t.i(161560), k = t.i(420460), b = t.i(967682);
  try {
    var P = "u" > typeof window ? window : t.g;
    P._sentryModuleMetadata = P._sentryModuleMetadata || {}, P._sentryModuleMetadata[new P.Error().stack] = Object.assign({}, P._sentryModuleMetadata[new P.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let x = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"], A = {};
  class T {
    scrapeMotionValuesFromProps(t2, e2, a2) {
      return {};
    }
    constructor({ parent: t2, props: a2, presenceContext: r2, reducedMotionConfig: n2, skipAnimations: s2, blockInitialAnimation: i2, visualState: l2 }, d2 = {}) {
      this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.shouldSkipAnimations = false, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = o.KeyframeResolver, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = false, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }, this.renderScheduledAt = 0, this.scheduleRender = () => {
        let t3 = c.time.now();
        this.renderScheduledAt < t3 && (this.renderScheduledAt = t3, b.frame.render(this.render, false, true));
      };
      const { latestValues: u2, renderState: y2 } = l2;
      this.latestValues = u2, this.baseTarget = { ...u2 }, this.initialValues = a2.initial ? { ...u2 } : {}, this.renderState = y2, this.parent = t2, this.props = a2, this.presenceContext = r2, this.depth = t2 ? t2.depth + 1 : 0, this.reducedMotionConfig = n2, this.skipAnimationsConfig = s2, this.options = d2, this.blockInitialAnimation = !!i2, this.isControllingVariants = (0, g.isControllingVariants)(a2), this.isVariantNode = (0, g.isVariantNode)(a2), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t2 && t2.current);
      const { willChange: p2, ...h2 } = this.scrapeMotionValuesFromProps(a2, {}, this);
      for (const t3 in h2) {
        const a3 = h2[t3];
        void 0 !== u2[t3] && (0, e.isMotionValue)(a3) && a3.set(u2[t3]);
      }
    }
    mount(t2) {
      if (this.hasBeenMounted) for (let t3 in this.initialValues) this.values.get(t3)?.jump(this.initialValues[t3]), this.latestValues[t3] = this.initialValues[t3];
      this.current = t2, m.visualElementStore.set(t2, this), this.projection && !this.projection.instance && this.projection.mount(t2), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t3, e2) => this.bindToMotionValue(e2, t3)), "never" === this.reducedMotionConfig ? this.shouldReduceMotion = false : "always" === this.reducedMotionConfig ? this.shouldReduceMotion = true : (k.hasReducedMotionListener.current || (0, _.initPrefersReducedMotion)(), this.shouldReduceMotion = k.prefersReducedMotion.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? false, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = true;
    }
    unmount() {
      for (let t2 in this.projection && this.projection.unmount(), (0, b.cancelFrame)(this.notifyUpdate), (0, b.cancelFrame)(this.render), this.valueSubscriptions.forEach((t3) => t3()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[t2].clear();
      for (let t2 in this.features) {
        let e2 = this.features[t2];
        e2 && (e2.unmount(), e2.isMounted = false);
      }
      this.current = null;
    }
    addChild(t2) {
      this.children.add(t2), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t2);
    }
    removeChild(t2) {
      this.children.delete(t2), this.enteringChildren && this.enteringChildren.delete(t2);
    }
    bindToMotionValue(t2, e2) {
      let a2;
      if (this.valueSubscriptions.has(t2) && this.valueSubscriptions.get(t2)(), e2.accelerate && d.acceleratedValues.has(t2) && this.current instanceof HTMLElement) {
        let { factory: a3, keyframes: n3, times: s3, ease: i2, duration: o2 } = e2.accelerate, d2 = new l.NativeAnimation({ element: this.current, name: t2, keyframes: n3, times: s3, ease: i2, duration: (0, r.secondsToMilliseconds)(o2) }), u2 = a3(d2);
        this.valueSubscriptions.set(t2, () => {
          u2(), d2.cancel();
        });
        return;
      }
      let n2 = f.transformProps.has(t2);
      n2 && this.onBindTransform && this.onBindTransform();
      let s2 = e2.on("change", (e3) => {
        this.latestValues[t2] = e3, this.props.onUpdate && b.frame.preRender(this.notifyUpdate), n2 && this.projection && (this.projection.isTransformDirty = true), this.scheduleRender();
      });
      "u" > typeof window && window.MotionCheckAppearSync && (a2 = window.MotionCheckAppearSync(this, t2, e2)), this.valueSubscriptions.set(t2, () => {
        s2(), a2 && a2(), e2.owner && e2.stop();
      });
    }
    sortNodePosition(t2) {
      return this.current && this.sortInstanceNodePosition && this.type === t2.type ? this.sortInstanceNodePosition(this.current, t2.current) : 0;
    }
    updateFeatures() {
      let t2 = "animation";
      for (t2 in A) {
        let e2 = A[t2];
        if (!e2) continue;
        let { isEnabled: a2, Feature: r2 } = e2;
        if (!this.features[t2] && r2 && a2(this.props) && (this.features[t2] = new r2(this)), this.features[t2]) {
          let e3 = this.features[t2];
          e3.isMounted ? e3.update() : (e3.mount(), e3.isMounted = true);
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, y.createBox)();
    }
    getStaticValue(t2) {
      return this.latestValues[t2];
    }
    setStaticValue(t2, e2) {
      this.latestValues[t2] = e2;
    }
    update(t2, e2) {
      (t2.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t2, this.prevPresenceContext = this.presenceContext, this.presenceContext = e2;
      for (let e3 = 0; e3 < x.length; e3++) {
        let a2 = x[e3];
        this.propEventSubscriptions[a2] && (this.propEventSubscriptions[a2](), delete this.propEventSubscriptions[a2]);
        let r2 = t2["on" + a2];
        r2 && (this.propEventSubscriptions[a2] = this.on(a2, r2));
      }
      this.prevMotionValues = (0, v.updateMotionValuesFromProps)(this, this.scrapeMotionValuesFromProps(t2, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(t2) {
      return this.props.variants ? this.props.variants[t2] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    addVariantChild(t2) {
      let e2 = this.getClosestVariantNode();
      if (e2) return e2.variantChildren && e2.variantChildren.add(t2), () => e2.variantChildren.delete(t2);
    }
    addValue(t2, e2) {
      let a2 = this.values.get(t2);
      e2 !== a2 && (a2 && this.removeValue(t2), this.bindToMotionValue(t2, e2), this.values.set(t2, e2), this.latestValues[t2] = e2.get());
    }
    removeValue(t2) {
      this.values.delete(t2);
      let e2 = this.valueSubscriptions.get(t2);
      e2 && (e2(), this.valueSubscriptions.delete(t2)), delete this.latestValues[t2], this.removeValueFromRenderState(t2, this.renderState);
    }
    hasValue(t2) {
      return this.values.has(t2);
    }
    getValue(t2, e2) {
      if (this.props.values && this.props.values[t2]) return this.props.values[t2];
      let a2 = this.values.get(t2);
      return void 0 === a2 && void 0 !== e2 && (a2 = (0, p.motionValue)(null === e2 ? void 0 : e2, { owner: this }), this.addValue(t2, a2)), a2;
    }
    readValue(t2, a2) {
      let r2 = void 0 === this.latestValues[t2] && this.current ? this.getBaseTargetFromProps(this.props, t2) ?? this.readValueFromInstance(this.current, t2, this.options) : this.latestValues[t2];
      return null != r2 && ("string" == typeof r2 && ((0, n.isNumericalString)(r2) || (0, s.isZeroValueString)(r2)) ? r2 = parseFloat(r2) : !(0, w.findValueType)(r2) && h.complex.test(a2) && (r2 = (0, M.getAnimatableNone)(t2, a2)), this.setBaseTarget(t2, (0, e.isMotionValue)(r2) ? r2.get() : r2)), (0, e.isMotionValue)(r2) ? r2.get() : r2;
    }
    setBaseTarget(t2, e2) {
      this.baseTarget[t2] = e2;
    }
    getBaseTarget(t2) {
      let a2, { initial: r2 } = this.props;
      if ("string" == typeof r2 || "object" == typeof r2) {
        let e2 = (0, E.resolveVariantFromProps)(this.props, r2, this.presenceContext?.custom);
        e2 && (a2 = e2[t2]);
      }
      if (r2 && void 0 !== a2) return a2;
      let n2 = this.getBaseTargetFromProps(this.props, t2);
      return void 0 === n2 || (0, e.isMotionValue)(n2) ? void 0 !== this.initialValues[t2] && void 0 === a2 ? void 0 : this.baseTarget[t2] : n2;
    }
    on(t2, e2) {
      return this.events[t2] || (this.events[t2] = new i.SubscriptionManager()), this.events[t2].add(e2);
    }
    notify(t2, ...e2) {
      this.events[t2] && this.events[t2].notify(...e2);
    }
    scheduleRenderMicrotask() {
      u.microtask.render(this.render);
    }
  }
  t.s(["VisualElement", 0, T, "getFeatureDefinitions", 0, function() {
    return A;
  }, "setFeatureDefinitions", 0, function(t2) {
    A = t2;
  }], 96819);
  try {
    var B = "u" > typeof window ? window : t.g;
    B._sentryModuleMetadata = B._sentryModuleMetadata || {}, B._sentryModuleMetadata[new B.Error().stack] = Object.assign({}, B._sentryModuleMetadata[new B.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["DOMVisualElement", 0, class extends T {
    constructor() {
      super(...arguments), this.KeyframeResolver = a.DOMKeyframesResolver;
    }
    sortInstanceNodePosition(t2, e2) {
      return 2 & t2.compareDocumentPosition(e2) ? 1 : -1;
    }
    getBaseTargetFromProps(t2, e2) {
      let a2 = t2.style;
      return a2 ? a2[e2] : void 0;
    }
    removeValueFromRenderState(t2, { vars: e2, style: a2 }) {
      delete e2[t2], delete a2[t2];
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      let { children: t2 } = this.props;
      (0, e.isMotionValue)(t2) && (this.childSubscription = t2.on("change", (t3) => {
        this.current && (this.current.textContent = `${t3}`);
      }));
    }
  }], 604365);
}, 119058, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["setStyle", 0, function(t2, e2, a2) {
    e2.startsWith("--") ? t2.style.setProperty(e2, a2) : t2.style[e2] = a2;
  }], 119058);
}, 488599, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["camelToDash", 0, function(t2) {
    return t2.replace(/([A-Z])/g, (t3) => `-${t3.toLowerCase()}`);
  }]);
}, 499737, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let a = /* @__PURE__ */ new WeakMap();
  t.s(["visualElementStore", 0, a]);
}, 141577, 19563, 348971, 604445, 639068, 235629, 645744, 742917, 364646, 961417, 656731, 679514, 597157, (t) => {
  "use strict";
  var e = t.i(324032), a = t.i(707273), r = t.i(427684), n = t.i(604365), s = t.i(488599);
  try {
    var i = "u" > typeof window ? window : t.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let o = (t2, e2) => e2 && "number" == typeof t2 ? e2.transform(t2) : t2;
  var l = t.i(80093), d = t.i(282466);
  try {
    var u = "u" > typeof window ? window : t.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let c = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" }, y = e.transformPropOrder.length;
  try {
    var p = "u" > typeof window ? window : t.g;
    p._sentryModuleMetadata = p._sentryModuleMetadata || {}, p._sentryModuleMetadata[new p.Error().stack] = Object.assign({}, p._sentryModuleMetadata[new p.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function h(t2, a2, r2) {
    let { style: n2, vars: s2, transformOrigin: i2 } = t2, u2 = false, p2 = false;
    for (let t3 in a2) {
      let r3 = a2[t3];
      if (e.transformProps.has(t3)) {
        u2 = true;
        continue;
      }
      if ((0, d.isCSSVariableName)(t3)) {
        s2[t3] = r3;
        continue;
      }
      {
        let e2 = o(r3, l.numberValueTypes[t3]);
        t3.startsWith("origin") ? (p2 = true, i2[t3] = e2) : n2[t3] = e2;
      }
    }
    if (!a2.transform && (u2 || r2 ? n2.transform = (function(t3, a3, r3) {
      let n3 = "", s3 = true;
      for (let i3 = 0; i3 < y; i3++) {
        let d2 = e.transformPropOrder[i3], u3 = t3[d2];
        if (void 0 === u3) continue;
        let y2 = true;
        if ("number" == typeof u3) y2 = u3 === +!!d2.startsWith("scale");
        else {
          let t4 = parseFloat(u3);
          y2 = d2.startsWith("scale") ? 1 === t4 : 0 === t4;
        }
        if (!y2 || r3) {
          let t4 = o(u3, l.numberValueTypes[d2]);
          if (!y2) {
            s3 = false;
            let e2 = c[d2] || d2;
            n3 += `${e2}(${t4}) `;
          }
          r3 && (a3[d2] = t4);
        }
      }
      return n3 = n3.trim(), r3 ? n3 = r3(a3, s3 ? "" : n3) : s3 && (n3 = "none"), n3;
    })(a2, t2.transform, r2) : n2.transform && (n2.transform = "none")), p2) {
      let { originX: t3 = "50%", originY: e2 = "50%", originZ: a3 = 0 } = i2;
      n2.transformOrigin = `${t3} ${e2} ${a3}`;
    }
  }
  t.s(["buildHTMLStyles", 0, h], 19563);
  try {
    var M = "u" > typeof window ? window : t.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let w = { offset: "stroke-dashoffset", array: "stroke-dasharray" }, m = { offset: "strokeDashoffset", array: "strokeDasharray" };
  try {
    var g = "u" > typeof window ? window : t.g;
    g._sentryModuleMetadata = g._sentryModuleMetadata || {}, g._sentryModuleMetadata[new g.Error().stack] = Object.assign({}, g._sentryModuleMetadata[new g.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let f = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
  function v(t2, { attrX: e2, attrY: a2, attrScale: r2, pathLength: n2, pathSpacing: s2 = 1, pathOffset: i2 = 0, ...o2 }, l2, d2, u2) {
    if (h(t2, o2, d2), l2) {
      t2.style.viewBox && (t2.attrs.viewBox = t2.style.viewBox);
      return;
    }
    t2.attrs = t2.style, t2.style = {};
    let { attrs: c2, style: y2 } = t2;
    for (let t3 of (c2.transform && (y2.transform = c2.transform, delete c2.transform), (y2.transform || c2.transformOrigin) && (y2.transformOrigin = c2.transformOrigin ?? "50% 50%", delete c2.transformOrigin), y2.transform && (y2.transformBox = u2?.transformBox ?? "fill-box", delete c2.transformBox), f)) void 0 !== c2[t3] && (y2[t3] = c2[t3], delete c2[t3]);
    void 0 !== e2 && (c2.x = e2), void 0 !== a2 && (c2.y = a2), void 0 !== r2 && (c2.scale = r2), void 0 !== n2 && (function(t3, e3, a3 = 1, r3 = 0, n3 = true) {
      t3.pathLength = 1;
      let s3 = n3 ? w : m;
      t3[s3.offset] = `${-r3}`, t3[s3.array] = `${e3} ${a3}`;
    })(c2, n2, s2, i2, false);
  }
  t.s(["buildSVGAttrs", 0, v], 348971);
  try {
    var _ = "u" > typeof window ? window : t.g;
    _._sentryModuleMetadata = _._sentryModuleMetadata || {}, _._sentryModuleMetadata[new _.Error().stack] = Object.assign({}, _._sentryModuleMetadata[new _.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let E = /* @__PURE__ */ new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
  try {
    var k = "u" > typeof window ? window : t.g;
    k._sentryModuleMetadata = k._sentryModuleMetadata || {}, k._sentryModuleMetadata[new k.Error().stack] = Object.assign({}, k._sentryModuleMetadata[new k.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let b = (t2) => "string" == typeof t2 && "svg" === t2.toLowerCase();
  t.s(["isSVGTag", 0, b], 604445);
  try {
    var P = "u" > typeof window ? window : t.g;
    P._sentryModuleMetadata = P._sentryModuleMetadata || {}, P._sentryModuleMetadata[new P.Error().stack] = Object.assign({}, P._sentryModuleMetadata[new P.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function x(t2, { style: e2, vars: a2 }, r2, n2) {
    let s2, i2 = t2.style;
    for (s2 in e2) i2[s2] = e2[s2];
    for (s2 in n2?.applyProjectionStyles(i2, r2), a2) i2.setProperty(s2, a2[s2]);
  }
  try {
    var A = "u" > typeof window ? window : t.g;
    A._sentryModuleMetadata = A._sentryModuleMetadata || {}, A._sentryModuleMetadata[new A.Error().stack] = Object.assign({}, A._sentryModuleMetadata[new A.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  var T = t.i(236585), B = t.i(409138);
  try {
    var S = "u" > typeof window ? window : t.g;
    S._sentryModuleMetadata = S._sentryModuleMetadata || {}, S._sentryModuleMetadata[new S.Error().stack] = Object.assign({}, S._sentryModuleMetadata[new S.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function O(t2, e2) {
    return e2.max === e2.min ? 0 : t2 / (e2.max - e2.min) * 100;
  }
  let j = { correct: (t2, e2) => {
    if (!e2.target) return t2;
    if ("string" == typeof t2) if (!B.px.test(t2)) return t2;
    else t2 = parseFloat(t2);
    let a2 = O(t2, e2.target.x), r2 = O(t2, e2.target.y);
    return `${a2}% ${r2}%`;
  } };
  var V = t.i(929289), K = t.i(870820);
  try {
    var C = "u" > typeof window ? window : t.g;
    C._sentryModuleMetadata = C._sentryModuleMetadata || {}, C._sentryModuleMetadata[new C.Error().stack] = Object.assign({}, C._sentryModuleMetadata[new C.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  try {
    var D = "u" > typeof window ? window : t.g;
    D._sentryModuleMetadata = D._sentryModuleMetadata || {}, D._sentryModuleMetadata[new D.Error().stack] = Object.assign({}, D._sentryModuleMetadata[new D.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let R = { borderRadius: { ...j, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: j, borderTopRightRadius: j, borderBottomLeftRadius: j, borderBottomRightRadius: j, boxShadow: { correct: (t2, { treeScale: e2, projectionDelta: a2 }) => {
    let r2 = V.complex.parse(t2);
    if (r2.length > 5) return t2;
    let n2 = V.complex.createTransformer(t2), s2 = +("number" != typeof r2[0]), i2 = a2.x.scale * e2.x, o2 = a2.y.scale * e2.y;
    r2[0 + s2] /= i2, r2[1 + s2] /= o2;
    let l2 = (0, K.mixNumber)(i2, o2, 0.5);
    return "number" == typeof r2[2 + s2] && (r2[2 + s2] /= l2), "number" == typeof r2[3 + s2] && (r2[3 + s2] /= l2), n2(r2);
  } } };
  t.s(["scaleCorrectors", 0, R], 639068);
  try {
    var L = "u" > typeof window ? window : t.g;
    L._sentryModuleMetadata = L._sentryModuleMetadata || {}, L._sentryModuleMetadata[new L.Error().stack] = Object.assign({}, L._sentryModuleMetadata[new L.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function F(t2, { layout: a2, layoutId: r2 }) {
    return e.transformProps.has(t2) || t2.startsWith("origin") || (a2 || void 0 !== r2) && (!!R[t2] || "opacity" === t2);
  }
  t.s(["isForcedMotionValue", 0, F], 235629);
  try {
    var I = "u" > typeof window ? window : t.g;
    I._sentryModuleMetadata = I._sentryModuleMetadata || {}, I._sentryModuleMetadata[new I.Error().stack] = Object.assign({}, I._sentryModuleMetadata[new I.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function N(t2, e2, a2) {
    let r2 = t2.style, n2 = e2?.style, s2 = {};
    if (!r2) return s2;
    for (let e3 in r2) ((0, T.isMotionValue)(r2[e3]) || n2 && (0, T.isMotionValue)(n2[e3]) || F(e3, t2) || a2?.getValue(e3)?.liveStyle !== void 0) && (s2[e3] = r2[e3]);
    return s2;
  }
  t.s(["scrapeMotionValuesFromProps", 0, N], 645744);
  try {
    var U = "u" > typeof window ? window : t.g;
    U._sentryModuleMetadata = U._sentryModuleMetadata || {}, U._sentryModuleMetadata[new U.Error().stack] = Object.assign({}, U._sentryModuleMetadata[new U.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function W(t2, a2, r2) {
    let n2 = N(t2, a2, r2);
    for (let r3 in t2) ((0, T.isMotionValue)(t2[r3]) || (0, T.isMotionValue)(a2[r3])) && (n2[-1 !== e.transformPropOrder.indexOf(r3) ? "attr" + r3.charAt(0).toUpperCase() + r3.substring(1) : r3] = t2[r3]);
    return n2;
  }
  t.s(["scrapeMotionValuesFromProps", 0, W], 742917);
  try {
    var G = "u" > typeof window ? window : t.g;
    G._sentryModuleMetadata = G._sentryModuleMetadata || {}, G._sentryModuleMetadata[new G.Error().stack] = Object.assign({}, G._sentryModuleMetadata[new G.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  class z extends n.DOMVisualElement {
    constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = r.createBox;
    }
    getBaseTargetFromProps(t2, e2) {
      return t2[e2];
    }
    readValueFromInstance(t2, r2) {
      if (e.transformProps.has(r2)) {
        let t3 = (0, a.getDefaultValueType)(r2);
        return t3 && t3.default || 0;
      }
      return r2 = E.has(r2) ? r2 : (0, s.camelToDash)(r2), t2.getAttribute(r2);
    }
    scrapeMotionValuesFromProps(t2, e2, a2) {
      return W(t2, e2, a2);
    }
    build(t2, e2, a2) {
      v(t2, e2, this.isSVGTag, a2.transformTemplate, a2.style);
    }
    renderInstance(t2, e2, a2, r2) {
      for (let a3 in x(t2, e2, void 0, r2), e2.attrs) t2.setAttribute(E.has(a3) ? a3 : (0, s.camelToDash)(a3), e2.attrs[a3]);
    }
    mount(t2) {
      this.isSVGTag = b(t2.tagName), super.mount(t2);
    }
  }
  t.s(["SVGVisualElement", 0, z], 141577);
  var $ = t.i(433639);
  try {
    var H = "u" > typeof window ? window : t.g;
    H._sentryModuleMetadata = H._sentryModuleMetadata || {}, H._sentryModuleMetadata[new H.Error().stack] = Object.assign({}, H._sentryModuleMetadata[new H.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function Y({ top: t2, left: e2, right: a2, bottom: r2 }) {
    return { x: { min: e2, max: a2 }, y: { min: t2, max: r2 } };
  }
  function X(t2, e2) {
    if (!e2) return t2;
    let a2 = e2({ x: t2.left, y: t2.top }), r2 = e2({ x: t2.right, y: t2.bottom });
    return { top: a2.y, left: a2.x, bottom: r2.y, right: r2.x };
  }
  t.s(["convertBoundingBoxToBox", 0, Y, "convertBoxToBoundingBox", 0, function({ x: t2, y: e2 }) {
    return { top: e2.min, right: t2.max, bottom: e2.max, left: t2.min };
  }, "transformBoxPoints", 0, X], 364646);
  try {
    var q = "u" > typeof window ? window : t.g;
    q._sentryModuleMetadata = q._sentryModuleMetadata || {}, q._sentryModuleMetadata[new q.Error().stack] = Object.assign({}, q._sentryModuleMetadata[new q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function Z(t2) {
    return void 0 === t2 || 1 === t2;
  }
  function J({ scale: t2, scaleX: e2, scaleY: a2 }) {
    return !Z(t2) || !Z(e2) || !Z(a2);
  }
  function Q(t2) {
    return J(t2) || tt(t2) || t2.z || t2.rotate || t2.rotateX || t2.rotateY || t2.skewX || t2.skewY;
  }
  function tt(t2) {
    var e2, a2;
    return (e2 = t2.x) && "0%" !== e2 || (a2 = t2.y) && "0%" !== a2;
  }
  t.s(["has2DTranslate", 0, tt, "hasScale", 0, J, "hasTransform", 0, Q], 961417);
  try {
    var te = "u" > typeof window ? window : t.g;
    te._sentryModuleMetadata = te._sentryModuleMetadata || {}, te._sentryModuleMetadata[new te.Error().stack] = Object.assign({}, te._sentryModuleMetadata[new te.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function ta(t2, e2, a2) {
    return a2 + e2 * (t2 - a2);
  }
  function tr(t2, e2, a2, r2, n2) {
    return void 0 !== n2 && (t2 = ta(t2, n2, r2)), ta(t2, a2, r2) + e2;
  }
  function tn(t2, e2 = 0, a2 = 1, r2, n2) {
    t2.min = tr(t2.min, e2, a2, r2, n2), t2.max = tr(t2.max, e2, a2, r2, n2);
  }
  function ts(t2, { x: e2, y: a2 }) {
    tn(t2.x, e2.translate, e2.scale, e2.originPoint), tn(t2.y, a2.translate, a2.scale, a2.originPoint);
  }
  function ti(t2, e2) {
    t2.min += e2, t2.max += e2;
  }
  function to(t2, e2, a2, r2, n2 = 0.5) {
    let s2 = (0, K.mixNumber)(t2.min, t2.max, n2);
    tn(t2, e2, a2, s2, r2);
  }
  function tl(t2, e2) {
    return "string" == typeof t2 ? parseFloat(t2) / 100 * (e2.max - e2.min) : t2;
  }
  function td(t2, e2, a2) {
    let r2 = a2 ?? t2;
    to(t2.x, tl(e2.x, r2.x), e2.scaleX, e2.scale, e2.originX), to(t2.y, tl(e2.y, r2.y), e2.scaleY, e2.scale, e2.originY);
  }
  t.s(["applyBoxDelta", 0, ts, "applyTreeDeltas", 0, function(t2, e2, a2, r2 = false) {
    let n2, s2, i2 = a2.length;
    if (i2) {
      e2.x = e2.y = 1;
      for (let o2 = 0; o2 < i2; o2++) {
        s2 = (n2 = a2[o2]).projectionDelta;
        let { visualElement: i3 } = n2.options;
        (!i3 || !i3.props.style || "contents" !== i3.props.style.display) && (r2 && n2.options.layoutScroll && n2.scroll && n2 !== n2.root && (ti(t2.x, -n2.scroll.offset.x), ti(t2.y, -n2.scroll.offset.y)), s2 && (e2.x *= s2.x.scale, e2.y *= s2.y.scale, ts(t2, s2)), r2 && Q(n2.latestValues) && td(t2, n2.latestValues, n2.layout?.layoutBox));
      }
      e2.x < 1.0000000000001 && e2.x > 0.999999999999 && (e2.x = 1), e2.y < 1.0000000000001 && e2.y > 0.999999999999 && (e2.y = 1);
    }
  }, "scalePoint", 0, ta, "transformBox", 0, td, "translateAxis", 0, ti], 656731);
  try {
    var tu = "u" > typeof window ? window : t.g;
    tu._sentryModuleMetadata = tu._sentryModuleMetadata || {}, tu._sentryModuleMetadata[new tu.Error().stack] = Object.assign({}, tu._sentryModuleMetadata[new tu.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function tc(t2, e2) {
    return Y(X(t2.getBoundingClientRect(), e2));
  }
  t.s(["measurePageBox", 0, function(t2, e2, a2) {
    let r2 = tc(t2, a2), { scroll: n2 } = e2;
    return n2 && (ti(r2.x, n2.offset.x), ti(r2.y, n2.offset.y)), r2;
  }, "measureViewportBox", 0, tc], 679514);
  var ty = n;
  try {
    var tp = "u" > typeof window ? window : t.g;
    tp._sentryModuleMetadata = tp._sentryModuleMetadata || {}, tp._sentryModuleMetadata[new tp.Error().stack] = Object.assign({}, tp._sentryModuleMetadata[new tp.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  class th extends ty.DOMVisualElement {
    constructor() {
      super(...arguments), this.type = "html", this.renderInstance = x;
    }
    readValueFromInstance(t2, a2) {
      if (e.transformProps.has(a2)) return this.projection?.isProjecting ? (0, $.defaultTransformValue)(a2) : (0, $.readTransformValue)(t2, a2);
      {
        let e2 = window.getComputedStyle(t2), r2 = ((0, d.isCSSVariableName)(a2) ? e2.getPropertyValue(a2) : e2[a2]) || 0;
        return "string" == typeof r2 ? r2.trim() : r2;
      }
    }
    measureInstanceViewportBox(t2, { transformPagePoint: e2 }) {
      return tc(t2, e2);
    }
    build(t2, e2, a2) {
      h(t2, e2, a2.transformTemplate);
    }
    scrapeMotionValuesFromProps(t2, e2, a2) {
      return N(t2, e2, a2);
    }
  }
  t.s(["HTMLVisualElement", 0, th], 597157);
}, 21280, 991363, 786843, 16919, 694344, 420460, 634907, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function a(t2) {
    return null !== t2 && "object" == typeof t2 && "function" == typeof t2.start;
  }
  t.s(["isAnimationControls", 0, a], 991363);
  try {
    var r = "u" > typeof window ? window : t.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function n(t2) {
    return "string" == typeof t2 || Array.isArray(t2);
  }
  t.s(["isVariantLabel", 0, n], 786843);
  try {
    var s = "u" > typeof window ? window : t.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let i = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"], o = ["initial", ...i];
  t.s(["variantPriorityOrder", 0, i, "variantProps", 0, o], 16919);
  try {
    var l = "u" > typeof window ? window : t.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function d(t2) {
    return a(t2.animate) || o.some((e2) => n(t2[e2]));
  }
  t.s(["isControllingVariants", 0, d, "isVariantNode", 0, function(t2) {
    return !!(d(t2) || t2.variants);
  }], 21280);
  var u = t.i(702915), c = t.i(236585);
  try {
    var y = "u" > typeof window ? window : t.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["updateMotionValuesFromProps", 0, function(t2, e2, a2) {
    for (let r2 in e2) {
      let n2 = e2[r2], s2 = a2[r2];
      if ((0, c.isMotionValue)(n2)) t2.addValue(r2, n2);
      else if ((0, c.isMotionValue)(s2)) t2.addValue(r2, (0, u.motionValue)(n2, { owner: t2 }));
      else if (s2 !== n2) if (t2.hasValue(r2)) {
        let e3 = t2.getValue(r2);
        true === e3.liveStyle ? e3.jump(n2) : e3.hasAnimated || e3.set(n2);
      } else {
        let e3 = t2.getStaticValue(r2);
        t2.addValue(r2, (0, u.motionValue)(void 0 !== e3 ? e3 : n2, { owner: t2 }));
      }
    }
    for (let r2 in a2) void 0 === e2[r2] && t2.removeValue(r2);
    return e2;
  }], 694344);
  try {
    var p = "u" > typeof window ? window : t.g;
    p._sentryModuleMetadata = p._sentryModuleMetadata || {}, p._sentryModuleMetadata[new p.Error().stack] = Object.assign({}, p._sentryModuleMetadata[new p.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let h = { current: null }, M = { current: false };
  t.s(["hasReducedMotionListener", 0, M, "prefersReducedMotion", 0, h], 420460);
  try {
    var w = "u" > typeof window ? window : t.g;
    w._sentryModuleMetadata = w._sentryModuleMetadata || {}, w._sentryModuleMetadata[new w.Error().stack] = Object.assign({}, w._sentryModuleMetadata[new w.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let m = "u" > typeof window;
  t.s(["initPrefersReducedMotion", 0, function() {
    if (M.current = true, m) if (window.matchMedia) {
      let t2 = window.matchMedia("(prefers-reduced-motion)"), e2 = () => h.current = t2.matches;
      t2.addEventListener("change", e2), e2();
    } else h.current = false;
  }], 634907);
}, 611920, (t) => {
  "use strict";
  var e = t.i(324032);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let r = /* @__PURE__ */ new Set(["width", "height", "top", "left", "right", "bottom", ...e.transformPropOrder]);
  t.s(["positionalKeys", 0, r]);
}, 324032, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let a = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"], r = new Set(a);
  t.s(["transformPropOrder", 0, a, "transformProps", 0, r]);
}, 937642, (t) => {
  "use strict";
  var e = t.i(161560);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["resolveVariant", 0, function(t2, a2, r) {
    let n = t2.getProps();
    return (0, e.resolveVariantFromProps)(n, a2, void 0 !== r ? r : n.custom, t2);
  }]);
}, 161560, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function a(t2) {
    let e2 = [{}, {}];
    return t2?.values.forEach((t3, a2) => {
      e2[0][a2] = t3.get(), e2[1][a2] = t3.getVelocity();
    }), e2;
  }
  t.s(["resolveVariantFromProps", 0, function(t2, e2, r, n) {
    if ("function" == typeof e2) {
      let [s, i] = a(n);
      e2 = e2(void 0 !== r ? r : t2.custom, s, i);
    }
    if ("string" == typeof e2 && (e2 = t2.variants && t2.variants[e2]), "function" == typeof e2) {
      let [s, i] = a(n);
      e2 = e2(void 0 !== r ? r : t2.custom, s, i);
    }
    return e2;
  }]);
}, 999504, 167235, 850669, (t) => {
  "use strict";
  var e = t.i(702915), a = t.i(937642);
  try {
    var r = "u" > typeof window ? window : t.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let n = (t2) => Array.isArray(t2);
  t.s(["isKeyframesTarget", 0, n], 167235);
  try {
    var s = "u" > typeof window ? window : t.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["setTarget", 0, function(t2, r2) {
    let { transitionEnd: s2 = {}, transition: i2 = {}, ...o2 } = (0, a.resolveVariant)(t2, r2) || {};
    for (let a2 in o2 = { ...o2, ...s2 }) {
      var l2;
      let r3 = n(l2 = o2[a2]) ? l2[l2.length - 1] || 0 : l2;
      t2.hasValue(a2) ? t2.getValue(a2).set(r3) : t2.addValue(a2, (0, e.motionValue)(r3));
    }
  }], 999504);
  var i = t.i(926490), o = t.i(236585);
  try {
    var l = "u" > typeof window ? window : t.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  try {
    var d = "u" > typeof window ? window : t.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["addValueToWillChange", 0, function(t2, e2) {
    let a2 = t2.getValue("willChange");
    if ((0, o.isMotionValue)(a2) && a2.add) return a2.add(e2);
    if (!a2 && i.MotionGlobalConfig.WillChange) {
      let a3 = new i.MotionGlobalConfig.WillChange("auto");
      t2.addValue("willChange", a3), a3.add(e2);
    }
  }], 850669);
}, 460208, (t) => {
  "use strict";
  let e, a;
  var r = t.i(838752), n = t.i(427772);
  try {
    var s = "u" > typeof window ? window : t.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let i = /* @__PURE__ */ new WeakMap(), o = (t2, e2, a2) => (n2, s2) => s2 && s2[0] ? s2[0][t2 + "Size"] : (0, r.isSVGElement)(n2) && "getBBox" in n2 ? n2.getBBox()[e2] : n2[a2], l = o("inline", "width", "offsetWidth"), d = o("block", "height", "offsetHeight");
  function u({ target: t2, borderBoxSize: e2 }) {
    i.get(t2)?.forEach((a2) => {
      a2(t2, { get width() {
        return l(t2, e2);
      }, get height() {
        return d(t2, e2);
      } });
    });
  }
  function c(t2) {
    t2.forEach(u);
  }
  try {
    var y = "u" > typeof window ? window : t.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let p = /* @__PURE__ */ new Set();
  try {
    var h = "u" > typeof window ? window : t.g;
    h._sentryModuleMetadata = h._sentryModuleMetadata || {}, h._sentryModuleMetadata[new h.Error().stack] = Object.assign({}, h._sentryModuleMetadata[new h.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["resize", 0, function(t2, r2) {
    let s2;
    return "function" == typeof t2 ? (p.add(t2), a || (a = () => {
      let t3 = { get width() {
        return window.innerWidth;
      }, get height() {
        return window.innerHeight;
      } };
      p.forEach((e2) => e2(t3));
    }, window.addEventListener("resize", a)), () => {
      p.delete(t2), p.size || "function" != typeof a || (window.removeEventListener("resize", a), a = void 0);
    }) : (!e && "u" > typeof ResizeObserver && (e = new ResizeObserver(c)), (s2 = (0, n.resolveElements)(t2)).forEach((t3) => {
      let a2 = i.get(t3);
      a2 || (a2 = /* @__PURE__ */ new Set(), i.set(t3, a2)), a2.add(r2), e?.observe(t3);
    }), () => {
      s2.forEach((t3) => {
        let a2 = i.get(t3);
        a2?.delete(r2), a2?.size || e?.unobserve(t3);
      });
    });
  }], 460208);
}, 431772, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["activeAnimations", 0, { layout: 0, mainThread: 0, waapi: 0 }]);
}, 498920, (t) => {
  "use strict";
  var e = t.i(26809), a = t.i(493858), r = t.i(926490), n = t.i(470919), s = t.i(92727), i = t.i(241058), o = t.i(422430);
  try {
    var l = "u" > typeof window ? window : t.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["interpolate", 0, function(t2, l2, { clamp: d = true, ease: u, mixer: c } = {}) {
    let y = t2.length;
    if ((0, e.invariant)(y === l2.length, "Both input and output ranges must be the same length", "range-length"), 1 === y) return () => l2[0];
    if (2 === y && l2[0] === l2[1]) return () => l2[1];
    let p = t2[0] === t2[1];
    t2[0] > t2[y - 1] && (t2 = [...t2].reverse(), l2 = [...l2].reverse());
    let h = (function(t3, e2, a2) {
      let i2 = [], l3 = a2 || r.MotionGlobalConfig.mix || o.mix, d2 = t3.length - 1;
      for (let a3 = 0; a3 < d2; a3++) {
        let r2 = l3(t3[a3], t3[a3 + 1]);
        if (e2) {
          let t4 = Array.isArray(e2) ? e2[a3] || n.noop : e2;
          r2 = (0, s.pipe)(t4, r2);
        }
        i2.push(r2);
      }
      return i2;
    })(l2, u, c), M = h.length, w = (e2) => {
      if (p && e2 < t2[0]) return l2[0];
      let a2 = 0;
      if (M > 1) for (; a2 < t2.length - 2 && !(e2 < t2[a2 + 1]); a2++) ;
      let r2 = (0, i.progress)(t2[a2], t2[a2 + 1], e2);
      return h[a2](r2);
    };
    return d ? (e2) => w((0, a.clamp)(t2[0], t2[y - 1], e2)) : w;
  }]);
}, 250438, (t) => {
  "use strict";
  var e = t.i(921496);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["isHTMLElement", 0, function(t2) {
    return (0, e.isObject)(t2) && "offsetHeight" in t2 && !("ownerSVGElement" in t2);
  }]);
}, 838752, (t) => {
  "use strict";
  var e = t.i(921496);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["isSVGElement", 0, function(t2) {
    return (0, e.isObject)(t2) && "ownerSVGElement" in t2;
  }]);
}, 497474, (t) => {
  "use strict";
  var e = t.i(838752);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["isSVGSVGElement", 0, function(t2) {
    return (0, e.isSVGElement)(t2) && "svg" === t2.tagName;
  }]);
}, 422430, (t) => {
  "use strict";
  var e = t.i(92727), a = t.i(26809), r = t.i(282466), n = t.i(33795), s = t.i(929289), i = t.i(831388), o = t.i(369844);
  try {
    var l = "u" > typeof window ? window : t.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function d(t2, e2, a2) {
    return (a2 < 0 && (a2 += 1), a2 > 1 && (a2 -= 1), a2 < 1 / 6) ? t2 + (e2 - t2) * 6 * a2 : a2 < 0.5 ? e2 : a2 < 2 / 3 ? t2 + (e2 - t2) * (2 / 3 - a2) * 6 : t2;
  }
  var u = t.i(919496);
  try {
    var c = "u" > typeof window ? window : t.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function y(t2, e2) {
    return (a2) => a2 > 0 ? e2 : t2;
  }
  var p = t.i(870820);
  try {
    var h = "u" > typeof window ? window : t.g;
    h._sentryModuleMetadata = h._sentryModuleMetadata || {}, h._sentryModuleMetadata[new h.Error().stack] = Object.assign({}, h._sentryModuleMetadata[new h.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let M = (t2, e2, a2) => {
    let r2 = t2 * t2, n2 = a2 * (e2 * e2 - r2) + r2;
    return n2 < 0 ? 0 : Math.sqrt(n2);
  }, w = [i.hex, u.rgba, o.hsla];
  function m(t2) {
    let e2 = w.find((e3) => e3.test(t2));
    if ((0, a.warning)(!!e2, `'${t2}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e2) return false;
    let r2 = e2.parse(t2);
    return e2 === o.hsla && (r2 = (function({ hue: t3, saturation: e3, lightness: a2, alpha: r3 }) {
      t3 /= 360, a2 /= 100;
      let n2 = 0, s2 = 0, i2 = 0;
      if (e3 /= 100) {
        let r4 = a2 < 0.5 ? a2 * (1 + e3) : a2 + e3 - a2 * e3, o2 = 2 * a2 - r4;
        n2 = d(o2, r4, t3 + 1 / 3), s2 = d(o2, r4, t3), i2 = d(o2, r4, t3 - 1 / 3);
      } else n2 = s2 = i2 = a2;
      return { red: Math.round(255 * n2), green: Math.round(255 * s2), blue: Math.round(255 * i2), alpha: r3 };
    })(r2)), r2;
  }
  let g = (t2, e2) => {
    let a2 = m(t2), r2 = m(e2);
    if (!a2 || !r2) return y(t2, e2);
    let n2 = { ...a2 };
    return (t3) => (n2.red = M(a2.red, r2.red, t3), n2.green = M(a2.green, r2.green, t3), n2.blue = M(a2.blue, r2.blue, t3), n2.alpha = (0, p.mixNumber)(a2.alpha, r2.alpha, t3), u.rgba.transform(n2));
  };
  try {
    var f = "u" > typeof window ? window : t.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let v = /* @__PURE__ */ new Set(["none", "hidden"]);
  try {
    var _ = "u" > typeof window ? window : t.g;
    _._sentryModuleMetadata = _._sentryModuleMetadata || {}, _._sentryModuleMetadata[new _.Error().stack] = Object.assign({}, _._sentryModuleMetadata[new _.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function E(t2, e2) {
    return (a2) => (0, p.mixNumber)(t2, e2, a2);
  }
  function k(t2) {
    return "number" == typeof t2 ? E : "string" == typeof t2 ? (0, r.isCSSVariableToken)(t2) ? y : n.color.test(t2) ? g : x : Array.isArray(t2) ? b : "object" == typeof t2 ? n.color.test(t2) ? g : P : y;
  }
  function b(t2, e2) {
    let a2 = [...t2], r2 = a2.length, n2 = t2.map((t3, a3) => k(t3)(t3, e2[a3]));
    return (t3) => {
      for (let e3 = 0; e3 < r2; e3++) a2[e3] = n2[e3](t3);
      return a2;
    };
  }
  function P(t2, e2) {
    let a2 = { ...t2, ...e2 }, r2 = {};
    for (let n2 in a2) void 0 !== t2[n2] && void 0 !== e2[n2] && (r2[n2] = k(t2[n2])(t2[n2], e2[n2]));
    return (t3) => {
      for (let e3 in r2) a2[e3] = r2[e3](t3);
      return a2;
    };
  }
  let x = (t2, r2) => {
    let n2 = s.complex.createTransformer(r2), i2 = (0, s.analyseComplexValue)(t2), o2 = (0, s.analyseComplexValue)(r2);
    if (!(i2.indexes.var.length === o2.indexes.var.length && i2.indexes.color.length === o2.indexes.color.length && i2.indexes.number.length >= o2.indexes.number.length)) return (0, a.warning)(true, `Complex values '${t2}' and '${r2}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), y(t2, r2);
    if (v.has(t2) && !o2.values.length || v.has(r2) && !i2.values.length) return v.has(t2) ? (e2) => e2 <= 0 ? t2 : r2 : (e2) => e2 >= 1 ? r2 : t2;
    return (0, e.pipe)(b((function(t3, e2) {
      let a2 = [], r3 = { color: 0, var: 0, number: 0 };
      for (let n3 = 0; n3 < e2.values.length; n3++) {
        let s2 = e2.types[n3], i3 = t3.indexes[s2][r3[s2]], o3 = t3.values[i3] ?? 0;
        a2[n3] = o3, r3[s2]++;
      }
      return a2;
    })(i2, o2), o2.values), n2);
  };
  try {
    var A = "u" > typeof window ? window : t.g;
    A._sentryModuleMetadata = A._sentryModuleMetadata || {}, A._sentryModuleMetadata[new A.Error().stack] = Object.assign({}, A._sentryModuleMetadata[new A.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["mix", 0, function(t2, e2, a2) {
    return "number" == typeof t2 && "number" == typeof e2 && "number" == typeof a2 ? (0, p.mixNumber)(t2, e2, a2) : k(t2)(t2, e2);
  }], 422430);
}, 870820, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["mixNumber", 0, (t2, e2, a) => t2 + (e2 - t2) * a]);
}, 427772, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["resolveElements", 0, function(t2, e2, a) {
    if (null == t2) return [];
    if (t2 instanceof EventTarget) return [t2];
    if ("string" == typeof t2) {
      let r = document;
      e2 && (r = e2.current);
      let n = a?.[t2] ?? r.querySelectorAll(t2);
      return n ? Array.from(n) : [];
    }
    return Array.from(t2).filter((t3) => null != t3);
  }]);
}, 716476, (t) => {
  "use strict";
  var e = t.i(600444);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let r = (0, e.memoSupports)(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (t2) {
      return false;
    }
    return true;
  }, "linearEasing");
  t.s(["supportsLinearEasing", 0, r]);
}, 651692, 287120, 600444, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function a(t2) {
    let e2;
    return () => (void 0 === e2 && (e2 = t2()), e2);
  }
  t.s(["memo", 0, a], 287120);
  try {
    var r = "u" > typeof window ? window : t.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let n = {};
  try {
    var s = "u" > typeof window ? window : t.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function i(t2, e2) {
    let r2 = a(t2);
    return () => n[e2] ?? r2();
  }
  t.s(["memoSupports", 0, i], 600444);
  try {
    var o = "u" > typeof window ? window : t.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let l = i(() => void 0 !== window.ScrollTimeline, "scrollTimeline"), d = i(() => void 0 !== window.ViewTimeline, "viewTimeline");
  t.s(["supportsScrollTimeline", 0, l, "supportsViewTimeline", 0, d], 651692);
}, 702915, (t) => {
  "use strict";
  var e = t.i(796457), a = t.i(921692), r = t.i(957798), n = t.i(967682);
  try {
    var s = "u" > typeof window ? window : t.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let i = { current: void 0 };
  class o {
    constructor(t2, e2 = {}) {
      this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t3) => {
        let e3 = r.time.now();
        if (this.updatedAt !== e3 && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t3), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let t4 of this.dependents) t4.dirty();
      }, this.hasAnimated = false, this.setCurrent(t2), this.owner = e2.owner;
    }
    setCurrent(t2) {
      this.current = t2, this.updatedAt = r.time.now(), null === this.canTrackVelocity && void 0 !== t2 && (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
    }
    setPrevFrameValue(t2 = this.current) {
      this.prevFrameValue = t2, this.prevUpdatedAt = this.updatedAt;
    }
    onChange(t2) {
      return this.on("change", t2);
    }
    on(t2, a2) {
      this.events[t2] || (this.events[t2] = new e.SubscriptionManager());
      let r2 = this.events[t2].add(a2);
      return "change" === t2 ? () => {
        r2(), n.frame.read(() => {
          this.events.change.getSize() || this.stop();
        });
      } : r2;
    }
    clearListeners() {
      for (let t2 in this.events) this.events[t2].clear();
    }
    attach(t2, e2) {
      this.passiveEffect = t2, this.stopPassiveEffect = e2;
    }
    set(t2) {
      this.passiveEffect ? this.passiveEffect(t2, this.updateAndNotify) : this.updateAndNotify(t2);
    }
    setWithVelocity(t2, e2, a2) {
      this.set(e2), this.prev = void 0, this.prevFrameValue = t2, this.prevUpdatedAt = this.updatedAt - a2;
    }
    jump(t2, e2 = true) {
      this.updateAndNotify(t2), this.prev = t2, this.prevUpdatedAt = this.prevFrameValue = void 0, e2 && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
    dirty() {
      this.events.change?.notify(this.current);
    }
    addDependent(t2) {
      this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t2);
    }
    removeDependent(t2) {
      this.dependents && this.dependents.delete(t2);
    }
    get() {
      return i.current && i.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let t2 = r.time.now();
      if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t2 - this.updatedAt > 30) return 0;
      let e2 = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
      return (0, a.velocityPerSecond)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e2);
    }
    start(t2) {
      return this.stop(), new Promise((e2) => {
        this.hasAnimated = true, this.animation = t2(e2), this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
      });
    }
    stop() {
      this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
  }
  t.s(["collectMotionValues", 0, i, "motionValue", 0, function(t2, e2) {
    return new o(t2, e2);
  }]);
}, 33795, 438313, 291814, 919496, 831388, 409138, 369844, 929289, (t) => {
  "use strict";
  var e = t.i(493858);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let r = { test: (t2) => "number" == typeof t2, parse: parseFloat, transform: (t2) => t2 }, n = { ...r, transform: (t2) => (0, e.clamp)(0, 1, t2) }, s = { ...r, default: 1 };
  t.s(["alpha", 0, n, "number", 0, r, "scale", 0, s], 438313);
  try {
    var i = "u" > typeof window ? window : t.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let o = (t2) => Math.round(1e5 * t2) / 1e5;
  try {
    var l = "u" > typeof window ? window : t.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let d = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  t.s(["floatRegex", 0, d], 291814);
  try {
    var u = "u" > typeof window ? window : t.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  try {
    var c = "u" > typeof window ? window : t.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let y = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
  try {
    var p = "u" > typeof window ? window : t.g;
    p._sentryModuleMetadata = p._sentryModuleMetadata || {}, p._sentryModuleMetadata[new p.Error().stack] = Object.assign({}, p._sentryModuleMetadata[new p.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let h = (t2, e2) => (a2) => !!("string" == typeof a2 && y.test(a2) && a2.startsWith(t2) || e2 && null != a2 && Object.prototype.hasOwnProperty.call(a2, e2)), M = (t2, e2, a2) => (r2) => {
    if ("string" != typeof r2) return r2;
    let [n2, s2, i2, o2] = r2.match(d);
    return { [t2]: parseFloat(n2), [e2]: parseFloat(s2), [a2]: parseFloat(i2), alpha: void 0 !== o2 ? parseFloat(o2) : 1 };
  };
  try {
    var w = "u" > typeof window ? window : t.g;
    w._sentryModuleMetadata = w._sentryModuleMetadata || {}, w._sentryModuleMetadata[new w.Error().stack] = Object.assign({}, w._sentryModuleMetadata[new w.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let m = { ...r, transform: (t2) => Math.round((0, e.clamp)(0, 255, t2)) }, g = { test: h("rgb", "red"), parse: M("red", "green", "blue"), transform: ({ red: t2, green: e2, blue: a2, alpha: r2 = 1 }) => "rgba(" + m.transform(t2) + ", " + m.transform(e2) + ", " + m.transform(a2) + ", " + o(n.transform(r2)) + ")" };
  t.s(["rgba", 0, g], 919496);
  try {
    var f = "u" > typeof window ? window : t.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let v = { test: h("#"), parse: function(t2) {
    let e2 = "", a2 = "", r2 = "", n2 = "";
    return t2.length > 5 ? (e2 = t2.substring(1, 3), a2 = t2.substring(3, 5), r2 = t2.substring(5, 7), n2 = t2.substring(7, 9)) : (e2 = t2.substring(1, 2), a2 = t2.substring(2, 3), r2 = t2.substring(3, 4), n2 = t2.substring(4, 5), e2 += e2, a2 += a2, r2 += r2, n2 += n2), { red: parseInt(e2, 16), green: parseInt(a2, 16), blue: parseInt(r2, 16), alpha: n2 ? parseInt(n2, 16) / 255 : 1 };
  }, transform: g.transform };
  t.s(["hex", 0, v], 831388);
  try {
    var _ = "u" > typeof window ? window : t.g;
    _._sentryModuleMetadata = _._sentryModuleMetadata || {}, _._sentryModuleMetadata[new _.Error().stack] = Object.assign({}, _._sentryModuleMetadata[new _.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let E = (t2) => ({ test: (e2) => "string" == typeof e2 && e2.endsWith(t2) && 1 === e2.split(" ").length, parse: parseFloat, transform: (e2) => `${e2}${t2}` }), k = E("deg"), b = E("%"), P = E("px"), x = E("vh"), A = E("vw"), T = { ...b, parse: (t2) => b.parse(t2) / 100, transform: (t2) => b.transform(100 * t2) };
  t.s(["degrees", 0, k, "percent", 0, b, "progressPercentage", 0, T, "px", 0, P, "vh", 0, x, "vw", 0, A], 409138);
  try {
    var B = "u" > typeof window ? window : t.g;
    B._sentryModuleMetadata = B._sentryModuleMetadata || {}, B._sentryModuleMetadata[new B.Error().stack] = Object.assign({}, B._sentryModuleMetadata[new B.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let S = { test: h("hsl", "hue"), parse: M("hue", "saturation", "lightness"), transform: ({ hue: t2, saturation: e2, lightness: a2, alpha: r2 = 1 }) => "hsla(" + Math.round(t2) + ", " + b.transform(o(e2)) + ", " + b.transform(o(a2)) + ", " + o(n.transform(r2)) + ")" };
  t.s(["hsla", 0, S], 369844);
  try {
    var O = "u" > typeof window ? window : t.g;
    O._sentryModuleMetadata = O._sentryModuleMetadata || {}, O._sentryModuleMetadata[new O.Error().stack] = Object.assign({}, O._sentryModuleMetadata[new O.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let j = { test: (t2) => g.test(t2) || v.test(t2) || S.test(t2), parse: (t2) => g.test(t2) ? g.parse(t2) : S.test(t2) ? S.parse(t2) : v.parse(t2), transform: (t2) => "string" == typeof t2 ? t2 : t2.hasOwnProperty("red") ? g.transform(t2) : S.transform(t2), getAnimatableNone: (t2) => {
    let e2 = j.parse(t2);
    return e2.alpha = 0, j.transform(e2);
  } };
  t.s(["color", 0, j], 33795);
  try {
    var V = "u" > typeof window ? window : t.g;
    V._sentryModuleMetadata = V._sentryModuleMetadata || {}, V._sentryModuleMetadata[new V.Error().stack] = Object.assign({}, V._sentryModuleMetadata[new V.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let K = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  try {
    var C = "u" > typeof window ? window : t.g;
    C._sentryModuleMetadata = C._sentryModuleMetadata || {}, C._sentryModuleMetadata[new C.Error().stack] = Object.assign({}, C._sentryModuleMetadata[new C.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let D = "number", R = "color", L = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function F(t2) {
    let e2 = t2.toString(), a2 = [], r2 = { color: [], number: [], var: [] }, n2 = [], s2 = 0, i2 = e2.replace(L, (t3) => (j.test(t3) ? (r2.color.push(s2), n2.push(R), a2.push(j.parse(t3))) : t3.startsWith("var(") ? (r2.var.push(s2), n2.push("var"), a2.push(t3)) : (r2.number.push(s2), n2.push(D), a2.push(parseFloat(t3))), ++s2, "${}")).split("${}");
    return { values: a2, split: i2, indexes: r2, types: n2 };
  }
  function I({ split: t2, types: e2 }) {
    let a2 = t2.length;
    return (r2) => {
      let n2 = "";
      for (let s2 = 0; s2 < a2; s2++) if (n2 += t2[s2], void 0 !== r2[s2]) {
        let t3 = e2[s2];
        t3 === D ? n2 += o(r2[s2]) : t3 === R ? n2 += j.transform(r2[s2]) : n2 += r2[s2];
      }
      return n2;
    };
  }
  t.s(["analyseComplexValue", 0, F, "complex", 0, { test: function(t2) {
    return isNaN(t2) && "string" == typeof t2 && (t2.match(d)?.length || 0) + (t2.match(K)?.length || 0) > 0;
  }, parse: function(t2) {
    return F(t2).values;
  }, createTransformer: function(t2) {
    return I(F(t2));
  }, getAnimatableNone: function(t2) {
    let e2 = F(t2);
    return I(e2)(e2.values.map((t3, a2) => ((t4, e3) => "number" == typeof t4 ? e3?.trim().endsWith("/") ? t4 : 0 : "number" == typeof t4 ? 0 : j.test(t4) ? j.getAnimatableNone(t4) : t4)(t3, e2.split[a2])));
  } }], 929289);
}, 339484, 397308, 932255, 500718, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  var a = t.i(438313), r = t.i(409138);
  try {
    var n = "u" > typeof window ? window : t.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let s = (t2) => (e2) => e2.test(t2);
  t.s(["testValueType", 0, s], 397308);
  try {
    var i = "u" > typeof window ? window : t.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let o = [a.number, r.px, r.percent, r.degrees, r.vw, r.vh, { test: (t2) => "auto" === t2, parse: (t2) => t2 }];
  t.s(["dimensionValueTypes", 0, o, "findDimensionValueType", 0, (t2) => o.find(s(t2))], 339484);
  var l = t.i(26809);
  try {
    var d = "u" > typeof window ? window : t.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let u = (t2) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t2);
  t.s(["isNumericalString", 0, u], 932255);
  var c = t.i(282466);
  try {
    var y = "u" > typeof window ? window : t.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let p = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  t.s(["getVariableValue", 0, function t2(e2, a2, r2 = 1) {
    (0, l.invariant)(r2 <= 4, `Max CSS variable fallback depth detected in property "${e2}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    let [n2, s2] = (function(t3) {
      let e3 = p.exec(t3);
      if (!e3) return [,];
      let [, a3, r3, n3] = e3;
      return [`--${a3 ?? r3}`, n3];
    })(e2);
    if (!n2) return;
    let i2 = window.getComputedStyle(a2).getPropertyValue(n2);
    if (i2) {
      let t3 = i2.trim();
      return u(t3) ? parseFloat(t3) : t3;
    }
    return (0, c.isCSSVariableToken)(s2) ? t2(s2, a2, r2 + 1) : s2;
  }], 500718);
}, 707273, 737412, 654743, 80093, 427684, (t) => {
  "use strict";
  var e = t.i(33795), a = t.i(929289), r = t.i(291814);
  try {
    var n = "u" > typeof window ? window : t.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let s = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
  function i(t2) {
    let [e2, a2] = t2.slice(0, -1).split("(");
    if ("drop-shadow" === e2) return t2;
    let [n2] = a2.match(r.floatRegex) || [];
    if (!n2) return t2;
    let i2 = a2.replace(n2, ""), o2 = +!!s.has(e2);
    return n2 !== a2 && (o2 *= 100), e2 + "(" + o2 + i2 + ")";
  }
  let o = /\b([a-z-]*)\(.*?\)/gu, l = { ...a.complex, getAnimatableNone: (t2) => {
    let e2 = t2.match(o);
    return e2 ? e2.map(i).join(" ") : t2;
  } };
  t.s(["filter", 0, l], 737412);
  try {
    var d = "u" > typeof window ? window : t.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let u = { ...a.complex, getAnimatableNone: (t2) => {
    let e2 = a.complex.parse(t2);
    return a.complex.createTransformer(t2)(e2.map((t3) => "number" == typeof t3 ? 0 : "object" == typeof t3 ? { ...t3, alpha: 1 } : t3));
  } };
  t.s(["mask", 0, u], 654743);
  var c = t.i(438313);
  try {
    var y = "u" > typeof window ? window : t.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let p = { ...c.number, transform: Math.round };
  var h = t.i(409138);
  try {
    var M = "u" > typeof window ? window : t.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let w = { rotate: h.degrees, rotateX: h.degrees, rotateY: h.degrees, rotateZ: h.degrees, scale: c.scale, scaleX: c.scale, scaleY: c.scale, scaleZ: c.scale, skew: h.degrees, skewX: h.degrees, skewY: h.degrees, distance: h.px, translateX: h.px, translateY: h.px, translateZ: h.px, x: h.px, y: h.px, z: h.px, perspective: h.px, transformPerspective: h.px, opacity: c.alpha, originX: h.progressPercentage, originY: h.progressPercentage, originZ: h.px };
  try {
    var m = "u" > typeof window ? window : t.g;
    m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[new m.Error().stack] = Object.assign({}, m._sentryModuleMetadata[new m.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let g = { borderWidth: h.px, borderTopWidth: h.px, borderRightWidth: h.px, borderBottomWidth: h.px, borderLeftWidth: h.px, borderRadius: h.px, borderTopLeftRadius: h.px, borderTopRightRadius: h.px, borderBottomRightRadius: h.px, borderBottomLeftRadius: h.px, width: h.px, maxWidth: h.px, height: h.px, maxHeight: h.px, top: h.px, right: h.px, bottom: h.px, left: h.px, inset: h.px, insetBlock: h.px, insetBlockStart: h.px, insetBlockEnd: h.px, insetInline: h.px, insetInlineStart: h.px, insetInlineEnd: h.px, padding: h.px, paddingTop: h.px, paddingRight: h.px, paddingBottom: h.px, paddingLeft: h.px, paddingBlock: h.px, paddingBlockStart: h.px, paddingBlockEnd: h.px, paddingInline: h.px, paddingInlineStart: h.px, paddingInlineEnd: h.px, margin: h.px, marginTop: h.px, marginRight: h.px, marginBottom: h.px, marginLeft: h.px, marginBlock: h.px, marginBlockStart: h.px, marginBlockEnd: h.px, marginInline: h.px, marginInlineStart: h.px, marginInlineEnd: h.px, fontSize: h.px, backgroundPositionX: h.px, backgroundPositionY: h.px, ...w, zIndex: p, fillOpacity: c.alpha, strokeOpacity: c.alpha, numOctaves: p };
  t.s(["numberValueTypes", 0, g], 80093);
  try {
    var f = "u" > typeof window ? window : t.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let v = { ...g, color: e.color, backgroundColor: e.color, outlineColor: e.color, fill: e.color, stroke: e.color, borderColor: e.color, borderTopColor: e.color, borderRightColor: e.color, borderBottomColor: e.color, borderLeftColor: e.color, filter: l, WebkitFilter: l, mask: u, WebkitMask: u };
  t.s(["getDefaultValueType", 0, (t2) => v[t2]], 707273);
  try {
    var _ = "u" > typeof window ? window : t.g;
    _._sentryModuleMetadata = _._sentryModuleMetadata || {}, _._sentryModuleMetadata[new _.Error().stack] = Object.assign({}, _._sentryModuleMetadata[new _.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let E = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }), k = () => ({ min: 0, max: 0 });
  t.s(["createBox", 0, () => ({ x: k(), y: k() }), "createDelta", 0, () => ({ x: E(), y: E() })], 427684);
}, 236585, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["isMotionValue", 0, (t2) => !!(t2 && t2.getVelocity)]);
}, 493858, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["clamp", 0, (t2, e2, a) => a > e2 ? e2 : a < t2 ? t2 : a]);
}, 999267, 436697, 771559, (t) => {
  "use strict";
  var e = t.i(332117);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let r = (t2) => (e2) => e2 <= 0.5 ? t2(2 * e2) / 2 : (2 - t2(2 * (1 - e2))) / 2;
  try {
    var n = "u" > typeof window ? window : t.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let s = (t2) => (e2) => 1 - t2(1 - e2);
  try {
    var i = "u" > typeof window ? window : t.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let o = (0, e.cubicBezier)(0.33, 1.53, 0.69, 0.99), l = s(o), d = r(l);
  t.s(["backIn", 0, l, "backInOut", 0, d, "backOut", 0, o], 436697);
  try {
    var u = "u" > typeof window ? window : t.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["anticipate", 0, (t2) => t2 >= 1 ? 1 : (t2 *= 2) < 1 ? 0.5 * l(t2) : 0.5 * (2 - Math.pow(2, -10 * (t2 - 1)))], 999267);
  try {
    var c = "u" > typeof window ? window : t.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let y = (t2) => 1 - Math.sin(Math.acos(t2)), p = s(y), h = r(y);
  t.s(["circIn", 0, y, "circInOut", 0, h, "circOut", 0, p], 771559);
}, 828301, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["isBezierDefinition", 0, (t2) => Array.isArray(t2) && "number" == typeof t2[0]]);
}, 633191, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["isEasingArray", 0, (t2) => Array.isArray(t2) && "number" != typeof t2[0]]);
}, 26809, (t) => {
  "use strict";
  var e = t.i(541130);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  try {
    var r = "u" > typeof window ? window : t.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  e.default, t.s(["invariant", 0, () => {
  }, "warning", 0, () => {
  }], 26809);
}, 926490, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["MotionGlobalConfig", 0, {}]);
}, 921496, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["isObject", 0, function(t2) {
    return "object" == typeof t2 && null !== t2;
  }]);
}, 92727, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let a = (t2, e2) => (a2) => e2(t2(a2));
  t.s(["pipe", 0, (...t2) => t2.reduce(a)]);
}, 241058, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["progress", 0, (t2, e2, a) => {
    let r = e2 - t2;
    return 0 === r ? 1 : (a - t2) / r;
  }]);
}, 796457, 57307, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function a(t2, e2) {
    -1 === t2.indexOf(e2) && t2.push(e2);
  }
  function r(t2, e2) {
    let a2 = t2.indexOf(e2);
    a2 > -1 && t2.splice(a2, 1);
  }
  t.s(["addUniqueItem", 0, a, "removeItem", 0, r], 57307);
  try {
    var n = "u" > typeof window ? window : t.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["SubscriptionManager", 0, class {
    constructor() {
      this.subscriptions = [];
    }
    add(t2) {
      return a(this.subscriptions, t2), () => r(this.subscriptions, t2);
    }
    notify(t2, e2, a2) {
      let r2 = this.subscriptions.length;
      if (r2) if (1 === r2) this.subscriptions[0](t2, e2, a2);
      else for (let n2 = 0; n2 < r2; n2++) {
        let r3 = this.subscriptions[n2];
        r3 && r3(t2, e2, a2);
      }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }], 796457);
}, 490692, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["millisecondsToSeconds", 0, (t2) => t2 / 1e3, "secondsToMilliseconds", 0, (t2) => 1e3 * t2]);
}, 921692, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["velocityPerSecond", 0, function(t2, e2) {
    return e2 ? 1e3 / e2 * t2 : 0;
  }]);
}]);
