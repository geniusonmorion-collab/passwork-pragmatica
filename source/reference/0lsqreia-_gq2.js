;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "f740506a-295c-9e78-f483-b4db7ce2b5b6");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 712066, 278928, (t) => {
  "use strict";
  let e;
  try {
    var n = "u" > typeof window ? window : t.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let r = ["top", "right", "bottom", "left"], i = r.reduce((t2, e2) => t2.concat(e2, e2 + "-start", e2 + "-end"), []), o = Math.min, l = Math.max, a = Math.round, f = Math.floor, u = (t2) => ({ x: t2, y: t2 }), c = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function s(t2, e2) {
    return "function" == typeof t2 ? t2(e2) : t2;
  }
  function d(t2) {
    return t2.split("-")[0];
  }
  function h(t2) {
    return t2.split("-")[1];
  }
  function p(t2) {
    return "x" === t2 ? "y" : "x";
  }
  function m(t2) {
    return "y" === t2 ? "height" : "width";
  }
  function g(t2) {
    let e2 = t2[0];
    return "t" === e2 || "b" === e2 ? "y" : "x";
  }
  function y(t2, e2, n2) {
    void 0 === n2 && (n2 = false);
    let r2 = h(t2), i2 = p(g(t2)), o2 = m(i2), l2 = "x" === i2 ? r2 === (n2 ? "end" : "start") ? "right" : "left" : "start" === r2 ? "bottom" : "top";
    return e2.reference[o2] > e2.floating[o2] && (l2 = R(l2)), [l2, R(l2)];
  }
  function w(t2) {
    return t2.includes("start") ? t2.replace("start", "end") : t2.replace("end", "start");
  }
  let v = ["left", "right"], x = ["right", "left"], b = ["top", "bottom"], M = ["bottom", "top"];
  function R(t2) {
    let e2 = d(t2);
    return c[e2] + t2.slice(e2.length);
  }
  function A(t2) {
    return "number" != typeof t2 ? { top: 0, right: 0, bottom: 0, left: 0, ...t2 } : { top: t2, right: t2, bottom: t2, left: t2 };
  }
  function E(t2) {
    let { x: e2, y: n2, width: r2, height: i2 } = t2;
    return { width: r2, height: i2, top: n2, left: e2, right: e2 + r2, bottom: n2 + i2, x: e2, y: n2 };
  }
  try {
    var O = "u" > typeof window ? window : t.g;
    O._sentryModuleMetadata = O._sentryModuleMetadata || {}, O._sentryModuleMetadata[new O.Error().stack] = Object.assign({}, O._sentryModuleMetadata[new O.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function T(t2, e2, n2) {
    let r2, { reference: i2, floating: o2 } = t2, l2 = g(e2), a2 = p(g(e2)), f2 = m(a2), u2 = d(e2), c2 = "y" === l2, s2 = i2.x + i2.width / 2 - o2.width / 2, y2 = i2.y + i2.height / 2 - o2.height / 2, w2 = i2[f2] / 2 - o2[f2] / 2;
    switch (u2) {
      case "top":
        r2 = { x: s2, y: i2.y - o2.height };
        break;
      case "bottom":
        r2 = { x: s2, y: i2.y + i2.height };
        break;
      case "right":
        r2 = { x: i2.x + i2.width, y: y2 };
        break;
      case "left":
        r2 = { x: i2.x - o2.width, y: y2 };
        break;
      default:
        r2 = { x: i2.x, y: i2.y };
    }
    switch (h(e2)) {
      case "start":
        r2[a2] -= w2 * (n2 && c2 ? -1 : 1);
        break;
      case "end":
        r2[a2] += w2 * (n2 && c2 ? -1 : 1);
    }
    return r2;
  }
  async function L(t2, e2) {
    var n2;
    void 0 === e2 && (e2 = {});
    let { x: r2, y: i2, platform: o2, rects: l2, elements: a2, strategy: f2 } = t2, { boundary: u2 = "clippingAncestors", rootBoundary: c2 = "viewport", elementContext: d2 = "floating", altBoundary: h2 = false, padding: p2 = 0 } = s(e2, t2), m2 = A(p2), g2 = a2[h2 ? "floating" === d2 ? "reference" : "floating" : d2], y2 = E(await o2.getClippingRect({ element: null == (n2 = await (null == o2.isElement ? void 0 : o2.isElement(g2))) || n2 ? g2 : g2.contextElement || await (null == o2.getDocumentElement ? void 0 : o2.getDocumentElement(a2.floating)), boundary: u2, rootBoundary: c2, strategy: f2 })), w2 = "floating" === d2 ? { x: r2, y: i2, width: l2.floating.width, height: l2.floating.height } : l2.reference, v2 = await (null == o2.getOffsetParent ? void 0 : o2.getOffsetParent(a2.floating)), x2 = await (null == o2.isElement ? void 0 : o2.isElement(v2)) && await (null == o2.getScale ? void 0 : o2.getScale(v2)) || { x: 1, y: 1 }, b2 = E(o2.convertOffsetParentRelativeRectToViewportRelativeRect ? await o2.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: a2, rect: w2, offsetParent: v2, strategy: f2 }) : w2);
    return { top: (y2.top - b2.top + m2.top) / x2.y, bottom: (b2.bottom - y2.bottom + m2.bottom) / x2.y, left: (y2.left - b2.left + m2.left) / x2.x, right: (b2.right - y2.right + m2.right) / x2.x };
  }
  let P = async (t2, e2, n2) => {
    let { placement: r2 = "bottom", strategy: i2 = "absolute", middleware: o2 = [], platform: l2 } = n2, a2 = l2.detectOverflow ? l2 : { ...l2, detectOverflow: L }, f2 = await (null == l2.isRTL ? void 0 : l2.isRTL(e2)), u2 = await l2.getElementRects({ reference: t2, floating: e2, strategy: i2 }), { x: c2, y: s2 } = T(u2, r2, f2), d2 = r2, h2 = 0, p2 = {};
    for (let n3 = 0; n3 < o2.length; n3++) {
      let m2 = o2[n3];
      if (!m2) continue;
      let { name: g2, fn: y2 } = m2, { x: w2, y: v2, data: x2, reset: b2 } = await y2({ x: c2, y: s2, initialPlacement: r2, placement: d2, strategy: i2, middlewareData: p2, rects: u2, platform: a2, elements: { reference: t2, floating: e2 } });
      c2 = null != w2 ? w2 : c2, s2 = null != v2 ? v2 : s2, p2[g2] = { ...p2[g2], ...x2 }, b2 && h2 < 50 && (h2++, "object" == typeof b2 && (b2.placement && (d2 = b2.placement), b2.rects && (u2 = true === b2.rects ? await l2.getElementRects({ reference: t2, floating: e2, strategy: i2 }) : b2.rects), { x: c2, y: s2 } = T(u2, d2, f2)), n3 = -1);
    }
    return { x: c2, y: s2, placement: d2, strategy: i2, middlewareData: p2 };
  };
  function _(t2, e2) {
    return { top: t2.top - e2.height, right: t2.right - e2.width, bottom: t2.bottom - e2.height, left: t2.left - e2.width };
  }
  function C(t2) {
    return r.some((e2) => t2[e2] >= 0);
  }
  function S(t2) {
    let e2 = o(...t2.map((t3) => t3.left)), n2 = o(...t2.map((t3) => t3.top));
    return { x: e2, y: n2, width: l(...t2.map((t3) => t3.right)) - e2, height: l(...t2.map((t3) => t3.bottom)) - n2 };
  }
  let k = /* @__PURE__ */ new Set(["left", "top"]);
  async function D(t2, e2) {
    let { placement: n2, platform: r2, elements: i2 } = t2, o2 = await (null == r2.isRTL ? void 0 : r2.isRTL(i2.floating)), l2 = d(n2), a2 = h(n2), f2 = "y" === g(n2), u2 = k.has(l2) ? -1 : 1, c2 = o2 && f2 ? -1 : 1, p2 = s(e2, t2), { mainAxis: m2, crossAxis: y2, alignmentAxis: w2 } = "number" == typeof p2 ? { mainAxis: p2, crossAxis: 0, alignmentAxis: null } : { mainAxis: p2.mainAxis || 0, crossAxis: p2.crossAxis || 0, alignmentAxis: p2.alignmentAxis };
    return a2 && "number" == typeof w2 && (y2 = "end" === a2 ? -1 * w2 : w2), f2 ? { x: y2 * c2, y: m2 * u2 } : { x: m2 * u2, y: y2 * c2 };
  }
  try {
    var F = "u" > typeof window ? window : t.g;
    F._sentryModuleMetadata = F._sentryModuleMetadata || {}, F._sentryModuleMetadata[new F.Error().stack] = Object.assign({}, F._sentryModuleMetadata[new F.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function B() {
    return "u" > typeof window;
  }
  function H(t2) {
    return V(t2) ? (t2.nodeName || "").toLowerCase() : "#document";
  }
  function W(t2) {
    var e2;
    return (null == t2 || null == (e2 = t2.ownerDocument) ? void 0 : e2.defaultView) || window;
  }
  function j(t2) {
    var e2;
    return null == (e2 = (V(t2) ? t2.ownerDocument : t2.document) || window.document) ? void 0 : e2.documentElement;
  }
  function V(t2) {
    return !!B() && (t2 instanceof Node || t2 instanceof W(t2).Node);
  }
  function z(t2) {
    return !!B() && (t2 instanceof Element || t2 instanceof W(t2).Element);
  }
  function K(t2) {
    return !!B() && (t2 instanceof HTMLElement || t2 instanceof W(t2).HTMLElement);
  }
  function N(t2) {
    return !(!B() || "u" < typeof ShadowRoot) && (t2 instanceof ShadowRoot || t2 instanceof W(t2).ShadowRoot);
  }
  function $(t2) {
    let { overflow: e2, overflowX: n2, overflowY: r2, display: i2 } = Q(t2);
    return /auto|scroll|overlay|hidden|clip/.test(e2 + r2 + n2) && "inline" !== i2 && "contents" !== i2;
  }
  function I(t2) {
    try {
      if (t2.matches(":popover-open")) return true;
    } catch (t3) {
    }
    try {
      return t2.matches(":modal");
    } catch (t3) {
      return false;
    }
  }
  let U = /transform|translate|scale|rotate|perspective|filter/, q = /paint|layout|strict|content/, X = (t2) => !!t2 && "none" !== t2;
  function Y(t2) {
    let e2 = z(t2) ? Q(t2) : t2;
    return X(e2.transform) || X(e2.translate) || X(e2.scale) || X(e2.rotate) || X(e2.perspective) || !G() && (X(e2.backdropFilter) || X(e2.filter)) || U.test(e2.willChange || "") || q.test(e2.contain || "");
  }
  function G() {
    return null == e && (e = "u" > typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), e;
  }
  function J(t2) {
    return /^(html|body|#document)$/.test(H(t2));
  }
  function Q(t2) {
    return W(t2).getComputedStyle(t2);
  }
  function Z(t2) {
    return z(t2) ? { scrollLeft: t2.scrollLeft, scrollTop: t2.scrollTop } : { scrollLeft: t2.scrollX, scrollTop: t2.scrollY };
  }
  function tt(t2) {
    if ("html" === H(t2)) return t2;
    let e2 = t2.assignedSlot || t2.parentNode || N(t2) && t2.host || j(t2);
    return N(e2) ? e2.host : e2;
  }
  function te(t2, e2, n2) {
    var r2;
    void 0 === e2 && (e2 = []), void 0 === n2 && (n2 = true);
    let i2 = (function t3(e3) {
      let n3 = tt(e3);
      return J(n3) ? e3.ownerDocument ? e3.ownerDocument.body : e3.body : K(n3) && $(n3) ? n3 : t3(n3);
    })(t2), o2 = i2 === (null == (r2 = t2.ownerDocument) ? void 0 : r2.body), l2 = W(i2);
    if (!o2) return e2.concat(i2, te(i2, [], n2));
    {
      let t3 = tn(l2);
      return e2.concat(l2, l2.visualViewport || [], $(i2) ? i2 : [], t3 && n2 ? te(t3) : []);
    }
  }
  function tn(t2) {
    return t2.parent && Object.getPrototypeOf(t2.parent) ? t2.frameElement : null;
  }
  try {
    var tr = "u" > typeof window ? window : t.g;
    tr._sentryModuleMetadata = tr._sentryModuleMetadata || {}, tr._sentryModuleMetadata[new tr.Error().stack] = Object.assign({}, tr._sentryModuleMetadata[new tr.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function ti(t2) {
    let e2 = Q(t2), n2 = parseFloat(e2.width) || 0, r2 = parseFloat(e2.height) || 0, i2 = K(t2), o2 = i2 ? t2.offsetWidth : n2, l2 = i2 ? t2.offsetHeight : r2, f2 = a(n2) !== o2 || a(r2) !== l2;
    return f2 && (n2 = o2, r2 = l2), { width: n2, height: r2, $: f2 };
  }
  function to(t2) {
    return z(t2) ? t2 : t2.contextElement;
  }
  function tl(t2) {
    let e2 = to(t2);
    if (!K(e2)) return u(1);
    let n2 = e2.getBoundingClientRect(), { width: r2, height: i2, $: o2 } = ti(e2), l2 = (o2 ? a(n2.width) : n2.width) / r2, f2 = (o2 ? a(n2.height) : n2.height) / i2;
    return l2 && Number.isFinite(l2) || (l2 = 1), f2 && Number.isFinite(f2) || (f2 = 1), { x: l2, y: f2 };
  }
  let ta = u(0);
  function tf(t2) {
    let e2 = W(t2);
    return G() && e2.visualViewport ? { x: e2.visualViewport.offsetLeft, y: e2.visualViewport.offsetTop } : ta;
  }
  function tu(t2, e2, n2, r2) {
    var i2;
    void 0 === e2 && (e2 = false), void 0 === n2 && (n2 = false);
    let o2 = t2.getBoundingClientRect(), l2 = to(t2), a2 = u(1);
    e2 && (r2 ? z(r2) && (a2 = tl(r2)) : a2 = tl(t2));
    let f2 = (void 0 === (i2 = n2) && (i2 = false), r2 && (!i2 || r2 === W(l2)) && i2) ? tf(l2) : u(0), c2 = (o2.left + f2.x) / a2.x, s2 = (o2.top + f2.y) / a2.y, d2 = o2.width / a2.x, h2 = o2.height / a2.y;
    if (l2) {
      let t3 = W(l2), e3 = r2 && z(r2) ? W(r2) : r2, n3 = t3, i3 = tn(n3);
      for (; i3 && r2 && e3 !== n3; ) {
        let t4 = tl(i3), e4 = i3.getBoundingClientRect(), r3 = Q(i3), o3 = e4.left + (i3.clientLeft + parseFloat(r3.paddingLeft)) * t4.x, l3 = e4.top + (i3.clientTop + parseFloat(r3.paddingTop)) * t4.y;
        c2 *= t4.x, s2 *= t4.y, d2 *= t4.x, h2 *= t4.y, c2 += o3, s2 += l3, i3 = tn(n3 = W(i3));
      }
    }
    return E({ width: d2, height: h2, x: c2, y: s2 });
  }
  function tc(t2, e2) {
    let n2 = Z(t2).scrollLeft;
    return e2 ? e2.left + n2 : tu(j(t2)).left + n2;
  }
  function ts(t2, e2) {
    let n2 = t2.getBoundingClientRect();
    return { x: n2.left + e2.scrollLeft - tc(t2, n2), y: n2.top + e2.scrollTop };
  }
  function td(t2, e2, n2) {
    var r2;
    let i2;
    if ("viewport" === e2) i2 = (function(t3, e3) {
      let n3 = W(t3), r3 = j(t3), i3 = n3.visualViewport, o2 = r3.clientWidth, l2 = r3.clientHeight, a2 = 0, f2 = 0;
      if (i3) {
        o2 = i3.width, l2 = i3.height;
        let t4 = G();
        (!t4 || t4 && "fixed" === e3) && (a2 = i3.offsetLeft, f2 = i3.offsetTop);
      }
      let u2 = tc(r3);
      if (u2 <= 0) {
        let t4 = r3.ownerDocument, e4 = t4.body, n4 = getComputedStyle(e4), i4 = "CSS1Compat" === t4.compatMode && parseFloat(n4.marginLeft) + parseFloat(n4.marginRight) || 0, l3 = Math.abs(r3.clientWidth - e4.clientWidth - i4);
        l3 <= 25 && (o2 -= l3);
      } else u2 <= 25 && (o2 += u2);
      return { width: o2, height: l2, x: a2, y: f2 };
    })(t2, n2);
    else if ("document" === e2) {
      let e3, n3, o2, a2, f2, u2, c2;
      r2 = j(t2), e3 = j(r2), n3 = Z(r2), o2 = r2.ownerDocument.body, a2 = l(e3.scrollWidth, e3.clientWidth, o2.scrollWidth, o2.clientWidth), f2 = l(e3.scrollHeight, e3.clientHeight, o2.scrollHeight, o2.clientHeight), u2 = -n3.scrollLeft + tc(r2), c2 = -n3.scrollTop, "rtl" === Q(o2).direction && (u2 += l(e3.clientWidth, o2.clientWidth) - a2), i2 = { width: a2, height: f2, x: u2, y: c2 };
    } else if (z(e2)) {
      let t3, r3, o2, l2, a2, f2;
      r3 = (t3 = tu(e2, true, "fixed" === n2)).top + e2.clientTop, o2 = t3.left + e2.clientLeft, l2 = K(e2) ? tl(e2) : u(1), a2 = e2.clientWidth * l2.x, f2 = e2.clientHeight * l2.y, i2 = { width: a2, height: f2, x: o2 * l2.x, y: r3 * l2.y };
    } else {
      let n3 = tf(t2);
      i2 = { x: e2.x - n3.x, y: e2.y - n3.y, width: e2.width, height: e2.height };
    }
    return E(i2);
  }
  function th(t2) {
    return "static" === Q(t2).position;
  }
  function tp(t2, e2) {
    if (!K(t2) || "fixed" === Q(t2).position) return null;
    if (e2) return e2(t2);
    let n2 = t2.offsetParent;
    return j(t2) === n2 && (n2 = n2.ownerDocument.body), n2;
  }
  function tm(t2, e2) {
    var n2;
    let r2 = W(t2);
    if (I(t2)) return r2;
    if (!K(t2)) {
      let e3 = tt(t2);
      for (; e3 && !J(e3); ) {
        if (z(e3) && !th(e3)) return e3;
        e3 = tt(e3);
      }
      return r2;
    }
    let i2 = tp(t2, e2);
    for (; i2 && (n2 = i2, /^(table|td|th)$/.test(H(n2))) && th(i2); ) i2 = tp(i2, e2);
    return i2 && J(i2) && th(i2) && !Y(i2) ? r2 : i2 || (function(t3) {
      let e3 = tt(t3);
      for (; K(e3) && !J(e3); ) {
        if (Y(e3)) return e3;
        if (I(e3)) break;
        e3 = tt(e3);
      }
      return null;
    })(t2) || r2;
  }
  let tg = async function(t2) {
    let e2 = this.getOffsetParent || tm, n2 = this.getDimensions, r2 = await n2(t2.floating);
    return { reference: (function(t3, e3, n3) {
      let r3 = K(e3), i2 = j(e3), o2 = "fixed" === n3, l2 = tu(t3, true, o2, e3), a2 = { scrollLeft: 0, scrollTop: 0 }, f2 = u(0);
      if (r3 || !r3 && !o2) if (("body" !== H(e3) || $(i2)) && (a2 = Z(e3)), r3) {
        let t4 = tu(e3, true, o2, e3);
        f2.x = t4.x + e3.clientLeft, f2.y = t4.y + e3.clientTop;
      } else i2 && (f2.x = tc(i2));
      o2 && !r3 && i2 && (f2.x = tc(i2));
      let c2 = !i2 || r3 || o2 ? u(0) : ts(i2, a2);
      return { x: l2.left + a2.scrollLeft - f2.x - c2.x, y: l2.top + a2.scrollTop - f2.y - c2.y, width: l2.width, height: l2.height };
    })(t2.reference, await e2(t2.floating), t2.strategy), floating: { x: 0, y: 0, width: r2.width, height: r2.height } };
  }, ty = { convertOffsetParentRelativeRectToViewportRelativeRect: function(t2) {
    let { elements: e2, rect: n2, offsetParent: r2, strategy: i2 } = t2, o2 = "fixed" === i2, l2 = j(r2), a2 = !!e2 && I(e2.floating);
    if (r2 === l2 || a2 && o2) return n2;
    let f2 = { scrollLeft: 0, scrollTop: 0 }, c2 = u(1), s2 = u(0), d2 = K(r2);
    if ((d2 || !d2 && !o2) && (("body" !== H(r2) || $(l2)) && (f2 = Z(r2)), d2)) {
      let t3 = tu(r2);
      c2 = tl(r2), s2.x = t3.x + r2.clientLeft, s2.y = t3.y + r2.clientTop;
    }
    let h2 = !l2 || d2 || o2 ? u(0) : ts(l2, f2);
    return { width: n2.width * c2.x, height: n2.height * c2.y, x: n2.x * c2.x - f2.scrollLeft * c2.x + s2.x + h2.x, y: n2.y * c2.y - f2.scrollTop * c2.y + s2.y + h2.y };
  }, getDocumentElement: j, getClippingRect: function(t2) {
    let { element: e2, boundary: n2, rootBoundary: r2, strategy: i2 } = t2, a2 = [..."clippingAncestors" === n2 ? I(e2) ? [] : (function(t3, e3) {
      let n3 = e3.get(t3);
      if (n3) return n3;
      let r3 = te(t3, [], false).filter((t4) => z(t4) && "body" !== H(t4)), i3 = null, o2 = "fixed" === Q(t3).position, l2 = o2 ? tt(t3) : t3;
      for (; z(l2) && !J(l2); ) {
        let e4 = Q(l2), n4 = Y(l2);
        n4 || "fixed" !== e4.position || (i3 = null), (o2 ? n4 || i3 : !(!n4 && "static" === e4.position && i3 && ("absolute" === i3.position || "fixed" === i3.position) || $(l2) && !n4 && (function t4(e5, n5) {
          let r4 = tt(e5);
          return !(r4 === n5 || !z(r4) || J(r4)) && ("fixed" === Q(r4).position || t4(r4, n5));
        })(t3, l2))) ? i3 = e4 : r3 = r3.filter((t4) => t4 !== l2), l2 = tt(l2);
      }
      return e3.set(t3, r3), r3;
    })(e2, this._c) : [].concat(n2), r2], f2 = td(e2, a2[0], i2), u2 = f2.top, c2 = f2.right, s2 = f2.bottom, d2 = f2.left;
    for (let t3 = 1; t3 < a2.length; t3++) {
      let n3 = td(e2, a2[t3], i2);
      u2 = l(n3.top, u2), c2 = o(n3.right, c2), s2 = o(n3.bottom, s2), d2 = l(n3.left, d2);
    }
    return { width: c2 - d2, height: s2 - u2, x: d2, y: u2 };
  }, getOffsetParent: tm, getElementRects: tg, getClientRects: function(t2) {
    return Array.from(t2.getClientRects());
  }, getDimensions: function(t2) {
    let { width: e2, height: n2 } = ti(t2);
    return { width: e2, height: n2 };
  }, getScale: tl, isElement: z, isRTL: function(t2) {
    return "rtl" === Q(t2).direction;
  } };
  function tw(t2, e2) {
    return t2.x === e2.x && t2.y === e2.y && t2.width === e2.width && t2.height === e2.height;
  }
  let tv = function(t2) {
    return void 0 === t2 && (t2 = 0), { name: "offset", options: t2, async fn(e2) {
      var n2, r2;
      let { x: i2, y: o2, placement: l2, middlewareData: a2 } = e2, f2 = await D(e2, t2);
      return l2 === (null == (n2 = a2.offset) ? void 0 : n2.placement) && null != (r2 = a2.arrow) && r2.alignmentOffset ? {} : { x: i2 + f2.x, y: o2 + f2.y, data: { ...f2, placement: l2 } };
    } };
  }, tx = function(t2) {
    return void 0 === t2 && (t2 = {}), { name: "shift", options: t2, async fn(e2) {
      let { x: n2, y: r2, placement: i2, platform: a2 } = e2, { mainAxis: f2 = true, crossAxis: u2 = false, limiter: c2 = { fn: (t3) => {
        let { x: e3, y: n3 } = t3;
        return { x: e3, y: n3 };
      } }, ...h2 } = s(t2, e2), m2 = { x: n2, y: r2 }, y2 = await a2.detectOverflow(e2, h2), w2 = g(d(i2)), v2 = p(w2), x2 = m2[v2], b2 = m2[w2];
      if (f2) {
        let t3 = "y" === v2 ? "top" : "left", e3 = "y" === v2 ? "bottom" : "right", n3 = x2 + y2[t3], r3 = x2 - y2[e3];
        x2 = l(n3, o(x2, r3));
      }
      if (u2) {
        let t3 = "y" === w2 ? "top" : "left", e3 = "y" === w2 ? "bottom" : "right", n3 = b2 + y2[t3], r3 = b2 - y2[e3];
        b2 = l(n3, o(b2, r3));
      }
      let M2 = c2.fn({ ...e2, [v2]: x2, [w2]: b2 });
      return { ...M2, data: { x: M2.x - n2, y: M2.y - r2, enabled: { [v2]: f2, [w2]: u2 } } };
    } };
  }, tb = function(t2) {
    return void 0 === t2 && (t2 = {}), { name: "flip", options: t2, async fn(e2) {
      var n2, r2, i2, o2, l2;
      let a2, f2, u2, { placement: c2, middlewareData: p2, rects: m2, initialPlacement: A2, platform: E2, elements: O2 } = e2, { mainAxis: T2 = true, crossAxis: L2 = true, fallbackPlacements: P2, fallbackStrategy: _2 = "bestFit", fallbackAxisSideDirection: C2 = "none", flipAlignment: S2 = true, ...k2 } = s(t2, e2);
      if (null != (n2 = p2.arrow) && n2.alignmentOffset) return {};
      let D2 = d(c2), F2 = g(A2), B2 = d(A2) === A2, H2 = await (null == E2.isRTL ? void 0 : E2.isRTL(O2.floating)), W2 = P2 || (B2 || !S2 ? [R(A2)] : (a2 = R(A2), [w(A2), a2, w(a2)])), j2 = "none" !== C2;
      !P2 && j2 && W2.push(...(f2 = h(A2), u2 = (function(t3, e3, n3) {
        switch (t3) {
          case "top":
          case "bottom":
            if (n3) return e3 ? x : v;
            return e3 ? v : x;
          case "left":
          case "right":
            return e3 ? b : M;
          default:
            return [];
        }
      })(d(A2), "start" === C2, H2), f2 && (u2 = u2.map((t3) => t3 + "-" + f2), S2 && (u2 = u2.concat(u2.map(w)))), u2));
      let V2 = [A2, ...W2], z2 = await E2.detectOverflow(e2, k2), K2 = [], N2 = (null == (r2 = p2.flip) ? void 0 : r2.overflows) || [];
      if (T2 && K2.push(z2[D2]), L2) {
        let t3 = y(c2, m2, H2);
        K2.push(z2[t3[0]], z2[t3[1]]);
      }
      if (N2 = [...N2, { placement: c2, overflows: K2 }], !K2.every((t3) => t3 <= 0)) {
        let t3 = ((null == (i2 = p2.flip) ? void 0 : i2.index) || 0) + 1, e3 = V2[t3];
        if (e3 && ("alignment" !== L2 || F2 === g(e3) || N2.every((t4) => g(t4.placement) !== F2 || t4.overflows[0] > 0))) return { data: { index: t3, overflows: N2 }, reset: { placement: e3 } };
        let n3 = null == (o2 = N2.filter((t4) => t4.overflows[0] <= 0).sort((t4, e4) => t4.overflows[1] - e4.overflows[1])[0]) ? void 0 : o2.placement;
        if (!n3) switch (_2) {
          case "bestFit": {
            let t4 = null == (l2 = N2.filter((t5) => {
              if (j2) {
                let e4 = g(t5.placement);
                return e4 === F2 || "y" === e4;
              }
              return true;
            }).map((t5) => [t5.placement, t5.overflows.filter((t6) => t6 > 0).reduce((t6, e4) => t6 + e4, 0)]).sort((t5, e4) => t5[1] - e4[1])[0]) ? void 0 : l2[0];
            t4 && (n3 = t4);
            break;
          }
          case "initialPlacement":
            n3 = A2;
        }
        if (c2 !== n3) return { reset: { placement: n3 } };
      }
      return {};
    } };
  }, tM = function(t2) {
    return void 0 === t2 && (t2 = {}), { name: "size", options: t2, async fn(e2) {
      var n2, r2;
      let i2, a2, { placement: f2, rects: u2, platform: c2, elements: p2 } = e2, { apply: m2 = () => {
      }, ...y2 } = s(t2, e2), w2 = await c2.detectOverflow(e2, y2), v2 = d(f2), x2 = h(f2), b2 = "y" === g(f2), { width: M2, height: R2 } = u2.floating;
      "top" === v2 || "bottom" === v2 ? (i2 = v2, a2 = x2 === (await (null == c2.isRTL ? void 0 : c2.isRTL(p2.floating)) ? "start" : "end") ? "left" : "right") : (a2 = v2, i2 = "end" === x2 ? "top" : "bottom");
      let A2 = R2 - w2.top - w2.bottom, E2 = M2 - w2.left - w2.right, O2 = o(R2 - w2[i2], A2), T2 = o(M2 - w2[a2], E2), L2 = !e2.middlewareData.shift, P2 = O2, _2 = T2;
      if (null != (n2 = e2.middlewareData.shift) && n2.enabled.x && (_2 = E2), null != (r2 = e2.middlewareData.shift) && r2.enabled.y && (P2 = A2), L2 && !x2) {
        let t3 = l(w2.left, 0), e3 = l(w2.right, 0), n3 = l(w2.top, 0), r3 = l(w2.bottom, 0);
        b2 ? _2 = M2 - 2 * (0 !== t3 || 0 !== e3 ? t3 + e3 : l(w2.left, w2.right)) : P2 = R2 - 2 * (0 !== n3 || 0 !== r3 ? n3 + r3 : l(w2.top, w2.bottom));
      }
      await m2({ ...e2, availableWidth: _2, availableHeight: P2 });
      let C2 = await c2.getDimensions(p2.floating);
      return M2 !== C2.width || R2 !== C2.height ? { reset: { rects: true } } : {};
    } };
  }, tR = function(t2) {
    return void 0 === t2 && (t2 = {}), { name: "hide", options: t2, async fn(e2) {
      let { rects: n2, platform: r2 } = e2, { strategy: i2 = "referenceHidden", ...o2 } = s(t2, e2);
      switch (i2) {
        case "referenceHidden": {
          let t3 = _(await r2.detectOverflow(e2, { ...o2, elementContext: "reference" }), n2.reference);
          return { data: { referenceHiddenOffsets: t3, referenceHidden: C(t3) } };
        }
        case "escaped": {
          let t3 = _(await r2.detectOverflow(e2, { ...o2, altBoundary: true }), n2.floating);
          return { data: { escapedOffsets: t3, escaped: C(t3) } };
        }
        default:
          return {};
      }
    } };
  }, tA = (t2) => ({ name: "arrow", options: t2, async fn(e2) {
    let { x: n2, y: r2, placement: i2, rects: a2, platform: f2, elements: u2, middlewareData: c2 } = e2, { element: d2, padding: y2 = 0 } = s(t2, e2) || {};
    if (null == d2) return {};
    let w2 = A(y2), v2 = { x: n2, y: r2 }, x2 = p(g(i2)), b2 = m(x2), M2 = await f2.getDimensions(d2), R2 = "y" === x2, E2 = R2 ? "clientHeight" : "clientWidth", O2 = a2.reference[b2] + a2.reference[x2] - v2[x2] - a2.floating[b2], T2 = v2[x2] - a2.reference[x2], L2 = await (null == f2.getOffsetParent ? void 0 : f2.getOffsetParent(d2)), P2 = L2 ? L2[E2] : 0;
    P2 && await (null == f2.isElement ? void 0 : f2.isElement(L2)) || (P2 = u2.floating[E2] || a2.floating[b2]);
    let _2 = P2 / 2 - M2[b2] / 2 - 1, C2 = o(w2[R2 ? "top" : "left"], _2), S2 = o(w2[R2 ? "bottom" : "right"], _2), k2 = P2 - M2[b2] - S2, D2 = P2 / 2 - M2[b2] / 2 + (O2 / 2 - T2 / 2), F2 = l(C2, o(D2, k2)), B2 = !c2.arrow && null != h(i2) && D2 !== F2 && a2.reference[b2] / 2 - (D2 < C2 ? C2 : S2) - M2[b2] / 2 < 0, H2 = B2 ? D2 < C2 ? D2 - C2 : D2 - k2 : 0;
    return { [x2]: v2[x2] + H2, data: { [x2]: F2, centerOffset: D2 - F2 - H2, ...B2 && { alignmentOffset: H2 } }, reset: B2 };
  } }), tE = function(t2) {
    return void 0 === t2 && (t2 = {}), { options: t2, fn(e2) {
      let { x: n2, y: r2, placement: i2, rects: o2, middlewareData: l2 } = e2, { offset: a2 = 0, mainAxis: f2 = true, crossAxis: u2 = true } = s(t2, e2), c2 = { x: n2, y: r2 }, h2 = g(i2), m2 = p(h2), y2 = c2[m2], w2 = c2[h2], v2 = s(a2, e2), x2 = "number" == typeof v2 ? { mainAxis: v2, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...v2 };
      if (f2) {
        let t3 = "y" === m2 ? "height" : "width", e3 = o2.reference[m2] - o2.floating[t3] + x2.mainAxis, n3 = o2.reference[m2] + o2.reference[t3] - x2.mainAxis;
        y2 < e3 ? y2 = e3 : y2 > n3 && (y2 = n3);
      }
      if (u2) {
        var b2, M2;
        let t3 = "y" === m2 ? "width" : "height", e3 = k.has(d(i2)), n3 = o2.reference[h2] - o2.floating[t3] + (e3 && (null == (b2 = l2.offset) ? void 0 : b2[h2]) || 0) + (e3 ? 0 : x2.crossAxis), r3 = o2.reference[h2] + o2.reference[t3] + (e3 ? 0 : (null == (M2 = l2.offset) ? void 0 : M2[h2]) || 0) - (e3 ? x2.crossAxis : 0);
        w2 < n3 ? w2 = n3 : w2 > r3 && (w2 = r3);
      }
      return { [m2]: y2, [h2]: w2 };
    } };
  }, tO = (t2, e2, n2) => {
    let r2 = /* @__PURE__ */ new Map(), i2 = { platform: ty, ...n2 }, o2 = { ...i2.platform, _c: r2 };
    return P(t2, e2, { ...i2, platform: o2 });
  };
  t.s(["arrow", 0, tA, "autoPlacement", 0, function(t2) {
    return void 0 === t2 && (t2 = {}), { name: "autoPlacement", options: t2, async fn(e2) {
      var n2, r2, o2, l2;
      let { rects: a2, middlewareData: f2, placement: u2, platform: c2, elements: p2 } = e2, { crossAxis: m2 = false, alignment: g2, allowedPlacements: v2 = i, autoAlignment: x2 = true, ...b2 } = s(t2, e2), M2 = void 0 !== g2 || v2 === i ? ((l2 = g2 || null) ? [...v2.filter((t3) => h(t3) === l2), ...v2.filter((t3) => h(t3) !== l2)] : v2.filter((t3) => d(t3) === t3)).filter((t3) => !l2 || h(t3) === l2 || !!x2 && w(t3) !== t3) : v2, R2 = await c2.detectOverflow(e2, b2), A2 = (null == (n2 = f2.autoPlacement) ? void 0 : n2.index) || 0, E2 = M2[A2];
      if (null == E2) return {};
      let O2 = y(E2, a2, await (null == c2.isRTL ? void 0 : c2.isRTL(p2.floating)));
      if (u2 !== E2) return { reset: { placement: M2[0] } };
      let T2 = [R2[d(E2)], R2[O2[0]], R2[O2[1]]], L2 = [...(null == (r2 = f2.autoPlacement) ? void 0 : r2.overflows) || [], { placement: E2, overflows: T2 }], P2 = M2[A2 + 1];
      if (P2) return { data: { index: A2 + 1, overflows: L2 }, reset: { placement: P2 } };
      let _2 = L2.map((t3) => {
        let e3 = h(t3.placement);
        return [t3.placement, e3 && m2 ? t3.overflows.slice(0, 2).reduce((t4, e4) => t4 + e4, 0) : t3.overflows[0], t3.overflows];
      }).sort((t3, e3) => t3[1] - e3[1]), C2 = (null == (o2 = _2.filter((t3) => t3[2].slice(0, h(t3[0]) ? 2 : 3).every((t4) => t4 <= 0))[0]) ? void 0 : o2[0]) || _2[0][0];
      return C2 !== u2 ? { data: { index: A2 + 1, overflows: L2 }, reset: { placement: C2 } } : {};
    } };
  }, "autoUpdate", 0, function(t2, e2, n2, r2) {
    let i2;
    void 0 === r2 && (r2 = {});
    let { ancestorScroll: a2 = true, ancestorResize: u2 = true, elementResize: c2 = "function" == typeof ResizeObserver, layoutShift: s2 = "function" == typeof IntersectionObserver, animationFrame: d2 = false } = r2, h2 = to(t2), p2 = a2 || u2 ? [...h2 ? te(h2) : [], ...e2 ? te(e2) : []] : [];
    p2.forEach((t3) => {
      a2 && t3.addEventListener("scroll", n2, { passive: true }), u2 && t3.addEventListener("resize", n2);
    });
    let m2 = h2 && s2 ? (function(t3, e3) {
      let n3, r3 = null, i3 = j(t3);
      function a3() {
        var t4;
        clearTimeout(n3), null == (t4 = r3) || t4.disconnect(), r3 = null;
      }
      return !(function u3(c3, s3) {
        void 0 === c3 && (c3 = false), void 0 === s3 && (s3 = 1), a3();
        let d3 = t3.getBoundingClientRect(), { left: h3, top: p3, width: m3, height: g3 } = d3;
        if (c3 || e3(), !m3 || !g3) return;
        let y3 = { rootMargin: -f(p3) + "px " + -f(i3.clientWidth - (h3 + m3)) + "px " + -f(i3.clientHeight - (p3 + g3)) + "px " + -f(h3) + "px", threshold: l(0, o(1, s3)) || 1 }, w3 = true;
        function v2(e4) {
          let r4 = e4[0].intersectionRatio;
          if (r4 !== s3) {
            if (!w3) return u3();
            r4 ? u3(false, r4) : n3 = setTimeout(() => {
              u3(false, 1e-7);
            }, 1e3);
          }
          1 !== r4 || tw(d3, t3.getBoundingClientRect()) || u3(), w3 = false;
        }
        try {
          r3 = new IntersectionObserver(v2, { ...y3, root: i3.ownerDocument });
        } catch (t4) {
          r3 = new IntersectionObserver(v2, y3);
        }
        r3.observe(t3);
      })(true), a3;
    })(h2, n2) : null, g2 = -1, y2 = null;
    c2 && (y2 = new ResizeObserver((t3) => {
      let [r3] = t3;
      r3 && r3.target === h2 && y2 && e2 && (y2.unobserve(e2), cancelAnimationFrame(g2), g2 = requestAnimationFrame(() => {
        var t4;
        null == (t4 = y2) || t4.observe(e2);
      })), n2();
    }), h2 && !d2 && y2.observe(h2), e2 && y2.observe(e2));
    let w2 = d2 ? tu(t2) : null;
    return d2 && (function e3() {
      let r3 = tu(t2);
      w2 && !tw(w2, r3) && n2(), w2 = r3, i2 = requestAnimationFrame(e3);
    })(), n2(), () => {
      var t3;
      p2.forEach((t4) => {
        a2 && t4.removeEventListener("scroll", n2), u2 && t4.removeEventListener("resize", n2);
      }), null == m2 || m2(), null == (t3 = y2) || t3.disconnect(), y2 = null, d2 && cancelAnimationFrame(i2);
    };
  }, "computePosition", 0, tO, "flip", 0, tb, "hide", 0, tR, "inline", 0, function(t2) {
    return void 0 === t2 && (t2 = {}), { name: "inline", options: t2, async fn(e2) {
      let { placement: n2, elements: r2, rects: i2, platform: a2, strategy: f2 } = e2, { padding: u2 = 2, x: c2, y: h2 } = s(t2, e2), p2 = Array.from(await (null == a2.getClientRects ? void 0 : a2.getClientRects(r2.reference)) || []), m2 = (function(t3) {
        let e3 = t3.slice().sort((t4, e4) => t4.y - e4.y), n3 = [], r3 = null;
        for (let t4 = 0; t4 < e3.length; t4++) {
          let i3 = e3[t4];
          !r3 || i3.y - r3.y > r3.height / 2 ? n3.push([i3]) : n3[n3.length - 1].push(i3), r3 = i3;
        }
        return n3.map((t4) => E(S(t4)));
      })(p2), y2 = E(S(p2)), w2 = A(u2), v2 = await a2.getElementRects({ reference: { getBoundingClientRect: function() {
        if (2 === m2.length && m2[0].left > m2[1].right && null != c2 && null != h2) return m2.find((t3) => c2 > t3.left - w2.left && c2 < t3.right + w2.right && h2 > t3.top - w2.top && h2 < t3.bottom + w2.bottom) || y2;
        if (m2.length >= 2) {
          if ("y" === g(n2)) {
            let t4 = m2[0], e4 = m2[m2.length - 1], r4 = "top" === d(n2), i4 = t4.top, o2 = e4.bottom, l2 = r4 ? t4.left : e4.left, a4 = r4 ? t4.right : e4.right;
            return { top: i4, bottom: o2, left: l2, right: a4, width: a4 - l2, height: o2 - i4, x: l2, y: i4 };
          }
          let t3 = "left" === d(n2), e3 = l(...m2.map((t4) => t4.right)), r3 = o(...m2.map((t4) => t4.left)), i3 = m2.filter((n3) => t3 ? n3.left === r3 : n3.right === e3), a3 = i3[0].top, f3 = i3[i3.length - 1].bottom;
          return { top: a3, bottom: f3, left: r3, right: e3, width: e3 - r3, height: f3 - a3, x: r3, y: a3 };
        }
        return y2;
      } }, floating: r2.floating, strategy: f2 });
      return i2.reference.x !== v2.reference.x || i2.reference.y !== v2.reference.y || i2.reference.width !== v2.reference.width || i2.reference.height !== v2.reference.height ? { reset: { rects: v2 } } : {};
    } };
  }, "limitShift", 0, tE, "offset", 0, tv, "shift", 0, tx, "size", 0, tM], 278928);
  var tT = t.i(856757), tL = t.i(403432);
  try {
    var tP = "u" > typeof window ? window : t.g;
    tP._sentryModuleMetadata = tP._sentryModuleMetadata || {}, tP._sentryModuleMetadata[new tP.Error().stack] = Object.assign({}, tP._sentryModuleMetadata[new tP.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  var t_ = "u" > typeof document ? tT.useLayoutEffect : function() {
  };
  function tC(t2, e2) {
    let n2, r2, i2;
    if (t2 === e2) return true;
    if (typeof t2 != typeof e2) return false;
    if ("function" == typeof t2 && t2.toString() === e2.toString()) return true;
    if (t2 && e2 && "object" == typeof t2) {
      if (Array.isArray(t2)) {
        if ((n2 = t2.length) !== e2.length) return false;
        for (r2 = n2; 0 != r2--; ) if (!tC(t2[r2], e2[r2])) return false;
        return true;
      }
      if ((n2 = (i2 = Object.keys(t2)).length) !== Object.keys(e2).length) return false;
      for (r2 = n2; 0 != r2--; ) if (!{}.hasOwnProperty.call(e2, i2[r2])) return false;
      for (r2 = n2; 0 != r2--; ) {
        let n3 = i2[r2];
        if (("_owner" !== n3 || !t2.$$typeof) && !tC(t2[n3], e2[n3])) return false;
      }
      return true;
    }
    return t2 != t2 && e2 != e2;
  }
  function tS(t2) {
    return "u" < typeof window ? 1 : (t2.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function tk(t2, e2) {
    let n2 = tS(t2);
    return Math.round(e2 * n2) / n2;
  }
  function tD(t2) {
    let e2 = tT.useRef(t2);
    return t_(() => {
      e2.current = t2;
    }), e2;
  }
  t.s(["arrow", 0, (t2, e2) => {
    let n2 = { name: "arrow", options: t2, fn(e3) {
      let { element: n3, padding: r2 } = "function" == typeof t2 ? t2(e3) : t2;
      return n3 && {}.hasOwnProperty.call(n3, "current") ? null != n3.current ? tA({ element: n3.current, padding: r2 }).fn(e3) : {} : n3 ? tA({ element: n3, padding: r2 }).fn(e3) : {};
    } };
    return { name: n2.name, fn: n2.fn, options: [t2, e2] };
  }, "flip", 0, (t2, e2) => {
    let n2 = tb(t2);
    return { name: n2.name, fn: n2.fn, options: [t2, e2] };
  }, "hide", 0, (t2, e2) => {
    let n2 = tR(t2);
    return { name: n2.name, fn: n2.fn, options: [t2, e2] };
  }, "limitShift", 0, (t2, e2) => ({ fn: tE(t2).fn, options: [t2, e2] }), "offset", 0, (t2, e2) => {
    let n2 = tv(t2);
    return { name: n2.name, fn: n2.fn, options: [t2, e2] };
  }, "shift", 0, (t2, e2) => {
    let n2 = tx(t2);
    return { name: n2.name, fn: n2.fn, options: [t2, e2] };
  }, "size", 0, (t2, e2) => {
    let n2 = tM(t2);
    return { name: n2.name, fn: n2.fn, options: [t2, e2] };
  }, "useFloating", 0, function(t2) {
    void 0 === t2 && (t2 = {});
    let { placement: e2 = "bottom", strategy: n2 = "absolute", middleware: r2 = [], platform: i2, elements: { reference: o2, floating: l2 } = {}, transform: a2 = true, whileElementsMounted: f2, open: u2 } = t2, [c2, s2] = tT.useState({ x: 0, y: 0, strategy: n2, placement: e2, middlewareData: {}, isPositioned: false }), [d2, h2] = tT.useState(r2);
    tC(d2, r2) || h2(r2);
    let [p2, m2] = tT.useState(null), [g2, y2] = tT.useState(null), w2 = tT.useCallback((t3) => {
      t3 !== M2.current && (M2.current = t3, m2(t3));
    }, []), v2 = tT.useCallback((t3) => {
      t3 !== R2.current && (R2.current = t3, y2(t3));
    }, []), x2 = o2 || p2, b2 = l2 || g2, M2 = tT.useRef(null), R2 = tT.useRef(null), A2 = tT.useRef(c2), E2 = null != f2, O2 = tD(f2), T2 = tD(i2), L2 = tD(u2), P2 = tT.useCallback(() => {
      if (!M2.current || !R2.current) return;
      let t3 = { placement: e2, strategy: n2, middleware: d2 };
      T2.current && (t3.platform = T2.current), tO(M2.current, R2.current, t3).then((t4) => {
        let e3 = { ...t4, isPositioned: false !== L2.current };
        _2.current && !tC(A2.current, e3) && (A2.current = e3, tL.flushSync(() => {
          s2(e3);
        }));
      });
    }, [d2, e2, n2, T2, L2]);
    t_(() => {
      false === u2 && A2.current.isPositioned && (A2.current.isPositioned = false, s2((t3) => ({ ...t3, isPositioned: false })));
    }, [u2]);
    let _2 = tT.useRef(false);
    t_(() => (_2.current = true, () => {
      _2.current = false;
    }), []), t_(() => {
      if (x2 && (M2.current = x2), b2 && (R2.current = b2), x2 && b2) {
        if (O2.current) return O2.current(x2, b2, P2);
        P2();
      }
    }, [x2, b2, P2, O2, E2]);
    let C2 = tT.useMemo(() => ({ reference: M2, floating: R2, setReference: w2, setFloating: v2 }), [w2, v2]), S2 = tT.useMemo(() => ({ reference: x2, floating: b2 }), [x2, b2]), k2 = tT.useMemo(() => {
      let t3 = { position: n2, left: 0, top: 0 };
      if (!S2.floating) return t3;
      let e3 = tk(S2.floating, c2.x), r3 = tk(S2.floating, c2.y);
      return a2 ? { ...t3, transform: "translate(" + e3 + "px, " + r3 + "px)", ...tS(S2.floating) >= 1.5 && { willChange: "transform" } } : { position: n2, left: e3, top: r3 };
    }, [n2, a2, S2.floating, c2.x, c2.y]);
    return tT.useMemo(() => ({ ...c2, update: P2, refs: C2, elements: S2, floatingStyles: k2 }), [c2, P2, C2, S2, k2]);
  }], 712066);
}]);
