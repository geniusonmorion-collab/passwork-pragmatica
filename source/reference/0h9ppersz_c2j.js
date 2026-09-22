;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "148d18c2-bae1-977a-36d7-0a8f1d2775f0");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 493115, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class r {
    constructor(e2) {
      this.stop = () => this.runAll("stop"), this.animations = e2.filter(Boolean);
    }
    get finished() {
      return Promise.all(this.animations.map((e2) => e2.finished));
    }
    getAll(e2) {
      return this.animations[0][e2];
    }
    setAll(e2, t2) {
      for (let r2 = 0; r2 < this.animations.length; r2++) this.animations[r2][e2] = t2;
    }
    attachTimeline(e2) {
      let t2 = this.animations.map((t3) => t3.attachTimeline(e2));
      return () => {
        t2.forEach((e3, t3) => {
          e3 && e3(), this.animations[t3].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(e2) {
      this.setAll("time", e2);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(e2) {
      this.setAll("speed", e2);
    }
    get state() {
      return this.getAll("state");
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      return a(this.animations, "duration");
    }
    get iterationDuration() {
      return a(this.animations, "iterationDuration");
    }
    runAll(e2) {
      this.animations.forEach((t2) => t2[e2]());
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  }
  function a(e2, t2) {
    let r2 = 0;
    for (let a2 = 0; a2 < e2.length; a2++) {
      let n2 = e2[a2][t2];
      null !== n2 && n2 > r2 && (r2 = n2);
    }
    return r2;
  }
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class o extends r {
    then(e2, t2) {
      return this.finished.finally(e2).then(() => {
      });
    }
  }
  var s = e.i(57307), i = e.i(702915), u = e.i(512065), l = e.i(236585), d = e.i(805639), c = e.i(181142), y = e.i(620117), M = e.i(659056), p = e.i(241058), f = e.i(490692), w = e.i(26809);
  try {
    var h = "u" > typeof window ? window : e.g;
    h._sentryModuleMetadata = h._sentryModuleMetadata || {}, h._sentryModuleMetadata[new h.Error().stack] = Object.assign({}, h._sentryModuleMetadata[new h.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var g = e.i(633191);
  try {
    var _ = "u" > typeof window ? window : e.g;
    _._sentryModuleMetadata = _._sentryModuleMetadata || {}, _._sentryModuleMetadata[new _.Error().stack] = Object.assign({}, _._sentryModuleMetadata[new _.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function m(e2, t2) {
    var r2;
    let a2;
    return (0, g.isEasingArray)(e2) ? e2[r2 = e2.length, ((t2 - 0) % (a2 = r2 - 0) + a2) % a2 + 0] : e2;
  }
  var v = e.i(427772);
  try {
    var E = "u" > typeof window ? window : e.g;
    E._sentryModuleMetadata = E._sentryModuleMetadata || {}, E._sentryModuleMetadata[new E.Error().stack] = Object.assign({}, E._sentryModuleMetadata[new E.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function b(e2) {
    return "object" == typeof e2 && !Array.isArray(e2);
  }
  try {
    var k = "u" > typeof window ? window : e.g;
    k._sentryModuleMetadata = k._sentryModuleMetadata || {}, k._sentryModuleMetadata[new k.Error().stack] = Object.assign({}, k._sentryModuleMetadata[new k.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function A(e2, t2, r2, a2) {
    return null == e2 ? [] : "string" == typeof e2 && b(t2) ? (0, v.resolveElements)(e2, r2, a2) : e2 instanceof NodeList ? Array.from(e2) : Array.isArray(e2) ? e2.filter((e3) => null != e3) : [e2];
  }
  try {
    var O = "u" > typeof window ? window : e.g;
    O._sentryModuleMetadata = O._sentryModuleMetadata || {}, O._sentryModuleMetadata[new O.Error().stack] = Object.assign({}, O._sentryModuleMetadata[new O.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var P = "u" > typeof window ? window : e.g;
    P._sentryModuleMetadata = P._sentryModuleMetadata || {}, P._sentryModuleMetadata[new P.Error().stack] = Object.assign({}, P._sentryModuleMetadata[new P.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function j(e2, t2, r2, a2) {
    return "number" == typeof t2 ? t2 : t2.startsWith("-") || t2.startsWith("+") ? Math.max(0, e2 + parseFloat(t2)) : "<" === t2 ? r2 : t2.startsWith("<") ? Math.max(0, r2 + parseFloat(t2.slice(1))) : a2.get(t2) ?? e2;
  }
  var B = e.i(870820);
  try {
    var K = "u" > typeof window ? window : e.g;
    K._sentryModuleMetadata = K._sentryModuleMetadata || {}, K._sentryModuleMetadata[new K.Error().stack] = Object.assign({}, K._sentryModuleMetadata[new K.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var x = "u" > typeof window ? window : e.g;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var L = "u" > typeof window ? window : e.g;
    L._sentryModuleMetadata = L._sentryModuleMetadata || {}, L._sentryModuleMetadata[new L.Error().stack] = Object.assign({}, L._sentryModuleMetadata[new L.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function S(e2, t2) {
    return e2.at !== t2.at ? e2.at - t2.at : null === e2.value ? 1 : null === t2.value ? -1 : 0;
  }
  try {
    var C = "u" > typeof window ? window : e.g;
    C._sentryModuleMetadata = C._sentryModuleMetadata || {}, C._sentryModuleMetadata[new C.Error().stack] = Object.assign({}, C._sentryModuleMetadata[new C.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function R(e2, t2) {
    return t2.has(e2) || t2.set(e2, {}), t2.get(e2);
  }
  function T(e2, t2) {
    return t2[e2] || (t2[e2] = []), t2[e2];
  }
  let V = (e2) => "number" == typeof e2, I = (e2) => e2.every(V);
  var $ = e.i(597849), F = e.i(499737), N = e.i(771788), G = e.i(838752), H = e.i(497474), z = e.i(141577), U = e.i(597157), D = e.i(427684), W = e.i(96819);
  try {
    var q = "u" > typeof window ? window : e.g;
    q._sentryModuleMetadata = q._sentryModuleMetadata || {}, q._sentryModuleMetadata[new q.Error().stack] = Object.assign({}, q._sentryModuleMetadata[new q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class Q extends W.VisualElement {
    constructor() {
      super(...arguments), this.type = "object";
    }
    readValueFromInstance(e2, t2) {
      if (t2 in e2) {
        let r2 = e2[t2];
        if ("string" == typeof r2 || "number" == typeof r2) return r2;
      }
    }
    getBaseTargetFromProps() {
    }
    removeValueFromRenderState(e2, t2) {
      delete t2.output[e2];
    }
    measureInstanceViewportBox() {
      return (0, D.createBox)();
    }
    build(e2, t2) {
      Object.assign(e2.output, t2);
    }
    renderInstance(e2, { output: t2 }) {
      Object.assign(e2, t2);
    }
    sortInstanceNodePosition() {
      return 0;
    }
  }
  try {
    var X = "u" > typeof window ? window : e.g;
    X._sentryModuleMetadata = X._sentryModuleMetadata || {}, X._sentryModuleMetadata[new X.Error().stack] = Object.assign({}, X._sentryModuleMetadata[new X.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function Y(e2) {
    let t2 = { presenceContext: null, props: {}, visualState: { renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {} }, latestValues: {} } }, r2 = (0, G.isSVGElement)(e2) && !(0, H.isSVGSVGElement)(e2) ? new z.SVGVisualElement(t2) : new U.HTMLVisualElement(t2);
    r2.mount(e2), F.visualElementStore.set(e2, r2);
  }
  function Z(e2) {
    let t2 = new Q({ presenceContext: null, props: {}, visualState: { renderState: { output: {} }, latestValues: {} } });
    t2.mount(e2), F.visualElementStore.set(e2, t2);
  }
  try {
    var J = "u" > typeof window ? window : e.g;
    J._sentryModuleMetadata = J._sentryModuleMetadata || {}, J._sentryModuleMetadata[new J.Error().stack] = Object.assign({}, J._sentryModuleMetadata[new J.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function ee(e2, t2, r2, a2) {
    let n2 = [];
    if ((0, l.isMotionValue)(e2) || "number" == typeof e2 || "string" == typeof e2 && !b(t2)) n2.push((0, $.animateSingleValue)(e2, b(t2) && t2.default || t2, r2 && r2.default || r2));
    else {
      if (null == e2) return n2;
      let o2 = A(e2, t2, a2), s2 = o2.length;
      (0, w.invariant)(!!s2, "No valid elements provided.", "no-valid-elements");
      for (let e3 = 0; e3 < s2; e3++) {
        let a3 = o2[e3], i2 = a3 instanceof Element ? Y : Z;
        F.visualElementStore.has(a3) || i2(a3);
        let u2 = F.visualElementStore.get(a3), l2 = { ...r2 };
        "delay" in l2 && "function" == typeof l2.delay && (l2.delay = l2.delay(e3, s2)), n2.push(...(0, N.animateTarget)(u2, { ...t2, transition: l2 }, {}));
      }
    }
    return n2;
  }
  try {
    var et = "u" > typeof window ? window : e.g;
    et._sentryModuleMetadata = et._sentryModuleMetadata || {}, et._sentryModuleMetadata[new et.Error().stack] = Object.assign({}, et._sentryModuleMetadata[new et.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var er = "u" > typeof window ? window : e.g;
    er._sentryModuleMetadata = er._sentryModuleMetadata || {}, er._sentryModuleMetadata[new er.Error().stack] = Object.assign({}, er._sentryModuleMetadata[new er.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function ea(e2 = {}) {
    let { scope: t2, reduceMotion: r2 } = e2;
    return function(e3, a2, n2) {
      var h2;
      let g2, _2 = [];
      if (Array.isArray(e3) && e3.some(Array.isArray)) {
        let n3, { onComplete: o2, ...v3 } = a2 || {};
        "function" == typeof o2 && (g2 = o2), h2 = void 0 !== r2 ? { reduceMotion: r2, ...v3 } : v3, n3 = [], (function(e4, { defaultTransition: t3 = {}, ...r3 } = {}, a3, n4) {
          let o3 = t3.duration || 0.3, i2 = /* @__PURE__ */ new Map(), u2 = /* @__PURE__ */ new Map(), h3 = {}, g3 = /* @__PURE__ */ new Map(), _3 = 0, v4 = 0, E2 = 0;
          for (let r4 = 0; r4 < e4.length; r4++) {
            let i3 = e4[r4];
            if ("string" == typeof i3) {
              g3.set(i3, v4);
              continue;
            }
            if (!Array.isArray(i3)) {
              g3.set(i3.name, j(v4, i3.at, _3, g3));
              continue;
            }
            let [p2, O2, P2 = {}] = i3;
            void 0 !== P2.at && (v4 = j(v4, P2.at, _3, g3));
            let K2 = 0, x2 = (e5, r5, a4, i4 = 0, u3 = 0) => {
              var l2;
              let p3 = Array.isArray(l2 = e5) ? l2 : [l2], { delay: h4 = 0, times: g4 = (0, d.defaultOffset)(p3), type: _4 = t3.type || "keyframes", repeat: b3, repeatType: k3, repeatDelay: A2 = 0, ...O3 } = r5, { ease: P3 = t3.ease || "easeOut", duration: j2 } = r5, x3 = "function" == typeof h4 ? h4(i4, u3) : h4, L2 = p3.length, S2 = (0, c.isGenerator)(_4) ? _4 : n4?.[_4 || "keyframes"];
              if (L2 <= 2 && S2) {
                let e6 = 100;
                2 === L2 && I(p3) && (e6 = Math.abs(p3[1] - p3[0]));
                let r6 = { ...t3, ...O3 };
                void 0 !== j2 && (r6.duration = (0, f.secondsToMilliseconds)(j2));
                let a5 = (0, y.createGeneratorEasing)(r6, e6, S2);
                P3 = a5.ease, j2 = a5.duration;
              }
              j2 ?? (j2 = o3);
              let C2 = v4 + x3;
              1 === g4.length && 0 === g4[0] && (g4[1] = 1);
              let R2 = g4.length - p3.length;
              if (R2 > 0 && (0, M.fillOffset)(g4, R2), 1 === p3.length && p3.unshift(null), b3) {
                (0, w.invariant)(b3 < 20, "Repeat count too high, must be less than 20", "repeat-count-high"), j2 *= b3 + 1;
                let e6 = [...p3], t4 = [...g4], r6 = [...P3 = Array.isArray(P3) ? [...P3] : [P3]];
                for (let a5 = 0; a5 < b3; a5++) {
                  p3.push(...e6);
                  for (let n5 = 0; n5 < e6.length; n5++) g4.push(t4[n5] + (a5 + 1)), P3.push(0 === n5 ? "linear" : m(r6, n5 - 1));
                }
                for (let e7 = 0; e7 < g4.length; e7++) g4[e7] = g4[e7] / (b3 + 1);
              }
              let T2 = C2 + j2;
              !(function(e6, t4, r6, a5, n5, o4) {
                for (let t5 = 0; t5 < e6.length; t5++) {
                  let r7 = e6[t5];
                  r7.at > n5 && r7.at < o4 && ((0, s.removeItem)(e6, r7), t5--);
                }
                for (let s2 = 0; s2 < t4.length; s2++) e6.push({ value: t4[s2], at: (0, B.mixNumber)(n5, o4, a5[s2]), easing: m(r6, s2) });
              })(a4, p3, P3, g4, C2, T2), K2 = Math.max(x3 + j2, K2), E2 = Math.max(T2, E2);
            };
            if ((0, l.isMotionValue)(p2)) x2(O2, P2, T("default", R(p2, u2)));
            else {
              let e5 = A(p2, O2, a3, h3), t4 = e5.length;
              for (let r5 = 0; r5 < t4; r5++) {
                let a4 = R(e5[r5], u2);
                for (let e6 in O2) {
                  var b2, k2;
                  x2(O2[e6], (b2 = P2, k2 = e6, b2 && b2[k2] ? { ...b2, ...b2[k2] } : { ...b2 }), T(e6, a4), r5, t4);
                }
              }
            }
            _3 = v4, v4 += K2;
          }
          return u2.forEach((e5, a4) => {
            for (let n5 in e5) {
              let o4 = e5[n5];
              o4.sort(S);
              let s2 = [], u3 = [], l2 = [];
              for (let e6 = 0; e6 < o4.length; e6++) {
                let { at: t4, value: r4, easing: a5 } = o4[e6];
                s2.push(r4), u3.push((0, p.progress)(0, E2, t4)), l2.push(a5 || "easeOut");
              }
              0 !== u3[0] && (u3.unshift(0), s2.unshift(s2[0]), l2.unshift("easeInOut")), 1 !== u3[u3.length - 1] && (u3.push(1), s2.push(null)), i2.has(a4) || i2.set(a4, { keyframes: {}, transition: {} });
              let d2 = i2.get(a4);
              d2.keyframes[n5] = s2;
              let { type: c2, ...y2 } = t3;
              d2.transition[n5] = { ...y2, duration: E2, ease: l2, times: u3, ...r3 };
            }
          }), i2;
        })(e3.map((e4) => {
          if (Array.isArray(e4) && "function" == typeof e4[0]) {
            let t3 = e4[0], r3 = (0, i.motionValue)(0);
            return (r3.on("change", t3), 1 === e4.length) ? [r3, [0, 1]] : 2 === e4.length ? [r3, [0, 1], e4[1]] : [r3, e4[1], e4[2]];
          }
          return e4;
        }), h2, t2, { spring: u.spring }).forEach(({ keyframes: e4, transition: t3 }, r3) => {
          n3.push(...ee(r3, e4, t3));
        }), _2 = n3;
      } else {
        let { onComplete: o2, ...s2 } = n2 || {};
        "function" == typeof o2 && (g2 = o2), _2 = ee(e3, a2, void 0 !== r2 ? { reduceMotion: r2, ...s2 } : s2, t2);
      }
      let v2 = new o(_2);
      return g2 && v2.finished.then(g2), t2 && (t2.animations.push(v2), v2.finished.then(() => {
        (0, s.removeItem)(t2.animations, v2);
      })), v2;
    };
  }
  let en = ea();
  e.s(["animate", 0, en, "createScopedAnimate", 0, ea], 493115);
}, 655197, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(134174);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.i(753942), o = e.i(665143);
  try {
    var s = "u" > typeof window ? window : e.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var i = e.i(493115);
  try {
    var u = "u" > typeof window ? window : e.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useAnimate", 0, function() {
    var e2;
    let a2 = (0, r.useConstant)(() => ({ current: null, animations: [] })), s2 = (function() {
      let e3 = (0, o.useReducedMotion)(), { reducedMotion: r2 } = (0, t.useContext)(n.MotionConfigContext);
      return "never" !== r2 && ("always" === r2 || e3);
    })() ?? void 0, u2 = (0, t.useMemo)(() => (0, i.createScopedAnimate)({ scope: a2, reduceMotion: s2 }), [a2, s2]);
    return e2 = () => {
      a2.animations.forEach((e3) => e3.stop()), a2.animations.length = 0;
    }, (0, t.useEffect)(() => () => e2(), []), [a2, u2];
  }], 655197);
}, 140802, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757), a = e.i(807464), n = e.i(134174), o = e.i(736986), s = e.i(370338), i = e.i(250438), u = r, l = e.i(753942);
  try {
    var d = "u" > typeof window ? window : e.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function c(e2, t2) {
    if ("function" == typeof e2) return e2(t2);
    null != e2 && (e2.current = t2);
  }
  try {
    var y = "u" > typeof window ? window : e.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class M extends u.Component {
    getSnapshotBeforeUpdate(e2) {
      let t2 = this.props.childRef.current;
      if ((0, i.isHTMLElement)(t2) && e2.isPresent && !this.props.isPresent && false !== this.props.pop) {
        let e3 = t2.offsetParent, r2 = (0, i.isHTMLElement)(e3) && e3.offsetWidth || 0, a2 = (0, i.isHTMLElement)(e3) && e3.offsetHeight || 0, n2 = getComputedStyle(t2), o2 = this.props.sizeRef.current;
        o2.height = parseFloat(n2.height), o2.width = parseFloat(n2.width), o2.top = t2.offsetTop, o2.left = t2.offsetLeft, o2.right = r2 - o2.width - o2.left, o2.bottom = a2 - o2.height - o2.top;
      }
      return null;
    }
    componentDidUpdate() {
    }
    render() {
      return this.props.children;
    }
  }
  function p({ children: e2, isPresent: a2, anchorX: n2, anchorY: o2, root: s2, pop: i2 }) {
    let d2 = (0, u.useId)(), y2 = (0, u.useRef)(null), f2 = (0, u.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }), { nonce: w2 } = (0, u.useContext)(l.MotionConfigContext), h2 = (function(...e3) {
      return r.useCallback(/* @__PURE__ */ (function(...e4) {
        return (t2) => {
          let r2 = false, a3 = e4.map((e5) => {
            let a4 = c(e5, t2);
            return r2 || "function" != typeof a4 || (r2 = true), a4;
          });
          if (r2) return () => {
            for (let t3 = 0; t3 < a3.length; t3++) {
              let r3 = a3[t3];
              "function" == typeof r3 ? r3() : c(e4[t3], null);
            }
          };
        };
      })(...e3), e3);
    })(y2, e2.props?.ref ?? e2?.ref);
    return (0, u.useInsertionEffect)(() => {
      let { width: e3, height: t2, top: r2, left: u2, right: l2, bottom: c2 } = f2.current;
      if (a2 || false === i2 || !y2.current || !e3 || !t2) return;
      let M2 = "left" === n2 ? `left: ${u2}` : `right: ${l2}`, p2 = "bottom" === o2 ? `bottom: ${c2}` : `top: ${r2}`;
      y2.current.dataset.motionPopId = d2;
      let h3 = document.createElement("style");
      w2 && (h3.nonce = w2);
      let g2 = s2 ?? document.head;
      return g2.appendChild(h3), h3.sheet && h3.sheet.insertRule(`
          [data-motion-pop-id="${d2}"] {
            position: absolute !important;
            width: ${e3}px !important;
            height: ${t2}px !important;
            ${M2}px !important;
            ${p2}px !important;
          }
        `), () => {
        y2.current?.removeAttribute("data-motion-pop-id"), g2.contains(h3) && g2.removeChild(h3);
      };
    }, [a2]), (0, t.jsx)(M, { isPresent: a2, childRef: y2, sizeRef: f2, pop: i2, children: false === i2 ? e2 : u.cloneElement(e2, { ref: h2 }) });
  }
  try {
    var f = "u" > typeof window ? window : e.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let w = ({ children: e2, initial: a2, isPresent: o2, onExitComplete: i2, custom: u2, presenceAffectsLayout: l2, mode: d2, anchorX: c2, anchorY: y2, root: M2 }) => {
    let f2 = (0, n.useConstant)(h), w2 = (0, r.useId)(), g2 = true, _2 = (0, r.useMemo)(() => (g2 = false, { id: w2, initial: a2, isPresent: o2, custom: u2, onExitComplete: (e3) => {
      for (let t2 of (f2.set(e3, true), f2.values())) if (!t2) return;
      i2 && i2();
    }, register: (e3) => (f2.set(e3, false), () => f2.delete(e3)) }), [o2, f2, i2]);
    return l2 && g2 && (_2 = { ..._2 }), (0, r.useMemo)(() => {
      f2.forEach((e3, t2) => f2.set(t2, false));
    }, [o2]), r.useEffect(() => {
      o2 || f2.size || !i2 || i2();
    }, [o2]), e2 = (0, t.jsx)(p, { pop: "popLayout" === d2, isPresent: o2, anchorX: c2, anchorY: y2, root: M2, children: e2 }), (0, t.jsx)(s.PresenceContext.Provider, { value: _2, children: e2 });
  };
  function h() {
    return /* @__PURE__ */ new Map();
  }
  var g = e.i(718015);
  try {
    var _ = "u" > typeof window ? window : e.g;
    _._sentryModuleMetadata = _._sentryModuleMetadata || {}, _._sentryModuleMetadata[new _.Error().stack] = Object.assign({}, _._sentryModuleMetadata[new _.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let m = (e2) => e2.key || "";
  function v(e2) {
    let t2 = [];
    return r.Children.forEach(e2, (e3) => {
      (0, r.isValidElement)(e3) && t2.push(e3);
    }), t2;
  }
  try {
    var E = "u" > typeof window ? window : e.g;
    E._sentryModuleMetadata = E._sentryModuleMetadata || {}, E._sentryModuleMetadata[new E.Error().stack] = Object.assign({}, E._sentryModuleMetadata[new E.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["AnimatePresence", 0, ({ children: e2, custom: s2, initial: i2 = true, onExitComplete: u2, presenceAffectsLayout: l2 = true, mode: d2 = "sync", propagate: c2 = false, anchorX: y2 = "left", anchorY: M2 = "top", root: p2 }) => {
    let [f2, h2] = (0, g.usePresence)(c2), _2 = (0, r.useMemo)(() => v(e2), [e2]), E2 = c2 && !f2 ? [] : _2.map(m), b = (0, r.useRef)(true), k = (0, r.useRef)(_2), A = (0, n.useConstant)(() => /* @__PURE__ */ new Map()), O = (0, r.useRef)(/* @__PURE__ */ new Set()), [P, j] = (0, r.useState)(_2), [B, K] = (0, r.useState)(_2);
    (0, o.useIsomorphicLayoutEffect)(() => {
      b.current = false, k.current = _2;
      for (let e3 = 0; e3 < B.length; e3++) {
        let t2 = m(B[e3]);
        E2.includes(t2) ? (A.delete(t2), O.current.delete(t2)) : true !== A.get(t2) && A.set(t2, false);
      }
    }, [B, E2.length, E2.join("-")]);
    let x = [];
    if (_2 !== P) {
      let e3 = [..._2];
      for (let t2 = 0; t2 < B.length; t2++) {
        let r2 = B[t2], a2 = m(r2);
        E2.includes(a2) || (e3.splice(t2, 0, r2), x.push(r2));
      }
      return "wait" === d2 && x.length && (e3 = x), K(v(e3)), j(_2), null;
    }
    let { forceRender: L } = (0, r.useContext)(a.LayoutGroupContext);
    return (0, t.jsx)(t.Fragment, { children: B.map((e3) => {
      let r2 = m(e3), a2 = (!c2 || !!f2) && (_2 === B || E2.includes(r2));
      return (0, t.jsx)(w, { isPresent: a2, initial: (!b.current || !!i2) && void 0, custom: s2, presenceAffectsLayout: l2, mode: d2, root: p2, onExitComplete: a2 ? void 0 : () => {
        if (O.current.has(r2) || !A.has(r2)) return;
        O.current.add(r2), A.set(r2, true);
        let e4 = true;
        A.forEach((t2) => {
          t2 || (e4 = false);
        }), e4 && (L?.(), K(k.current), c2 && h2?.(), u2 && u2());
      }, anchorX: y2, anchorY: M2, children: e3 }, r2);
    }) });
  }], 140802);
}, 665143, (e) => {
  "use strict";
  var t = e.i(420460), r = e.i(634907), a = e.i(856757);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useReducedMotion", 0, function() {
    t.hasReducedMotionListener.current || (0, r.initPrefersReducedMotion)();
    let [e2] = (0, a.useState)(t.prefersReducedMotion.current);
    return e2;
  }]);
}, 598596, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let a = "u" > typeof window ? t.default.useInsertionEffect || t.default.useLayoutEffect : () => {
  };
  function n() {
    throw Error("INVALID_USEEVENT_INVOCATION: the callback from useEvent cannot be invoked before the component has mounted.");
  }
  e.s(["default", 0, function(e2) {
    let r2 = t.default.useRef(n);
    a(() => {
      r2.current = e2;
    }, [e2]);
    let o = t.default.useRef(null);
    return o.current || (o.current = function() {
      return r2.current.apply(this, arguments);
    }), o.current;
  }]);
}, 351188, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(149932);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = r.isBrowser ? t.useLayoutEffect : t.useEffect;
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var s = { x: 0, y: 0, width: 0, height: 0, top: 0, left: 0, bottom: 0, right: 0 };
  let i = r.isBrowser && void 0 !== window.ResizeObserver ? function() {
    var e2 = (0, t.useState)(null), r2 = e2[0], a2 = e2[1], o2 = (0, t.useState)(s), i2 = o2[0], u = o2[1], l = (0, t.useMemo)(function() {
      return new window.ResizeObserver(function(e3) {
        if (e3[0]) {
          var t2 = e3[0].contentRect;
          u({ x: t2.x, y: t2.y, width: t2.width, height: t2.height, top: t2.top, left: t2.left, bottom: t2.bottom, right: t2.right });
        }
      });
    }, []);
    return n(function() {
      if (r2) return l.observe(r2), function() {
        l.disconnect();
      };
    }, [r2]), [a2, i2];
  } : function() {
    return [r.noop, s];
  };
  e.s(["useMeasure", 0, i], 351188);
}, 230513, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), r.default = function(e2) {
    return e2.replace(/[A-Z]/g, function(e3) {
      return "-" + e3.toLowerCase();
    }).toLowerCase();
  };
}, 313667, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var n = e.r(230513);
  r.default = function(e2) {
    return "string" == typeof e2 ? e2 : Object.entries(e2).map(function(e3) {
      var t2 = e3[0], r2 = e3[1], a2 = n.default(t2), o = r2;
      return "boolean" == typeof o ? o ? a2 : "not " + a2 : ("number" == typeof o && /[height|width]$/.test(a2) && (o += "px"), "(" + a2 + ": " + o + ")");
    }).join(" and ");
  };
}, 120599, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), r.default = function() {
  };
}, 879161, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), r.noop = r.queryObjectToString = r.camelToHyphen = void 0;
  var n = e.r(230513);
  Object.defineProperty(r, "camelToHyphen", { enumerable: true, get: function() {
    return n.default;
  } });
  var o = e.r(313667);
  Object.defineProperty(r, "queryObjectToString", { enumerable: true, get: function() {
    return o.default;
  } });
  var s = e.r(120599);
  Object.defineProperty(r, "noop", { enumerable: true, get: function() {
    return s.default;
  } });
}, 348657, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), r.useMediaLayout = r.useMedia = r.mockMediaQueryList = void 0;
  var n = e.r(856757), o = e.r(879161);
  r.mockMediaQueryList = { media: "", matches: false, onchange: o.noop, addListener: o.noop, removeListener: o.noop, addEventListener: o.noop, removeEventListener: o.noop, dispatchEvent: function(e2) {
    return true;
  } };
  var s = function(e2) {
    return function(t2, a2) {
      void 0 === a2 && (a2 = false);
      var s2 = n.useState(a2), i = s2[0], u = s2[1], l = o.queryObjectToString(t2);
      return e2(function() {
        var e3 = true, t3 = "u" < typeof window ? r.mockMediaQueryList : window.matchMedia(l), a3 = function() {
          e3 && u(!!t3.matches);
        };
        return t3.addListener(a3), u(t3.matches), function() {
          e3 = false, t3.removeListener(a3);
        };
      }, [l]), i;
    };
  };
  r.useMedia = s(n.useEffect), r.useMediaLayout = s(n.useLayoutEffect), r.default = r.useMedia;
}, 810903, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), r.useMediaLayout = r.useMedia = r.default = void 0;
  var n = e.r(348657);
  Object.defineProperty(r, "default", { enumerable: true, get: function() {
    return n.default;
  } }), Object.defineProperty(r, "useMedia", { enumerable: true, get: function() {
    return n.useMedia;
  } }), Object.defineProperty(r, "useMediaLayout", { enumerable: true, get: function() {
    return n.useMediaLayout;
  } });
}]);
