;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "a3d1e0d4-9c38-5cee-2813-719a0d276502");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 59016, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), r.default = function({ html: e2, height: t2 = null, width: r2 = null, children: n2, dataNtpc: s = "" }) {
    return (0, o.useEffect)(() => {
      s && performance.mark("mark_feature_usage", { detail: { feature: `next-third-parties-${s}` } });
    }, [s]), (0, i.jsxs)(i.Fragment, { children: [n2, e2 ? (0, i.jsx)("div", { style: { height: null != t2 ? `${t2}px` : "auto", width: null != r2 ? `${r2}px` : "auto" }, "data-ntpc": s, dangerouslySetInnerHTML: { __html: e2 } }) : null] });
  };
  let i = e.r(68982), o = e.r(856757);
}, 161338, (e, t, r) => {
  "use strict";
  let n;
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var o = e.e && e.e.__importDefault || function(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  };
  Object.defineProperty(r, "__esModule", { value: true }), r.GoogleAnalytics = function(e2) {
    let { gaId: t2, debugMode: r2, dataLayerName: i2 = "dataLayer", nonce: o2 } = e2;
    return void 0 === n && (n = i2), (0, a.useEffect)(() => {
      performance.mark("mark_feature_usage", { detail: { feature: "next-third-parties-ga" } });
    }, []), (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(c.default, { id: "_next-ga-init", dangerouslySetInnerHTML: { __html: `
          window['${i2}'] = window['${i2}'] || [];
          function gtag(){window['${i2}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t2}' ${r2 ? ",{ 'debug_mode': true }" : ""});` }, nonce: o2 }), (0, s.jsx)(c.default, { id: "_next-ga", src: `https://www.googletagmanager.com/gtag/js?id=${t2}`, nonce: o2 })] });
  }, r.sendGAEvent = function() {
    void 0 === n ? console.warn("@next/third-parties: GA has not been initialized") : window[n] ? window[n].push(arguments) : console.warn(`@next/third-parties: GA dataLayer ${n} does not exist`);
  };
  let s = e.r(68982), a = e.r(856757), c = o(e.r(838835));
}, 984027, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var i = e.e && e.e.__importDefault || function(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  };
  Object.defineProperty(r, "__esModule", { value: true }), r.default = function(e2) {
    let { apiKey: t2, ...r2 } = e2, n2 = { ...r2, key: t2 }, { html: i2 } = (0, s.GoogleMapsEmbed)(n2);
    return (0, o.jsx)(a.default, { height: n2.height || null, width: n2.width || null, html: i2, dataNtpc: "GoogleMapsEmbed" });
  };
  let o = e.r(68982), s = e.r(508751), a = i(e.r(59016));
}, 42710, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var i = e.e && e.e.__importDefault || function(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  };
  Object.defineProperty(r, "__esModule", { value: true }), r.sendGTMEvent = void 0, r.GoogleTagManager = function(e2) {
    let { gtmId: t2, gtmScriptUrl: r2, dataLayerName: n2 = "dataLayer", auth: i2, preview: u, dataLayer: l, nonce: p } = e2;
    c = n2;
    let h = new URL(r2 || "https://www.googletagmanager.com/gtm.js");
    return t2 && h.searchParams.set("id", t2), "dataLayer" !== n2 && h.searchParams.set("l", n2), i2 && h.searchParams.set("gtm_auth", i2), u && (h.searchParams.set("gtm_preview", u), h.searchParams.set("gtm_cookies_win", "x")), (0, s.useEffect)(() => {
      performance.mark("mark_feature_usage", { detail: { feature: "next-third-parties-gtm" } });
    }, []), (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(a.default, { id: "_next-gtm-init", dangerouslySetInnerHTML: { __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${l ? `w[l].push(${JSON.stringify(l)})` : ""}
      })(window,'${n2}');` }, nonce: p }), (0, o.jsx)(a.default, { id: "_next-gtm", "data-ntpc": "GTM", src: h.href, nonce: p })] });
  };
  let o = e.r(68982), s = e.r(856757), a = i(e.r(838835)), c = "dataLayer";
  r.sendGTMEvent = (e2, t2) => {
    let r2 = t2 || c;
    window[r2] = window[r2] || [], window[r2].push(e2);
  };
}, 773732, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var i = e.e && e.e.__importDefault || function(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  };
  Object.defineProperty(r, "__esModule", { value: true }), r.sendGAEvent = r.GoogleAnalytics = r.sendGTMEvent = r.GoogleTagManager = r.YouTubeEmbed = r.GoogleMapsEmbed = void 0;
  var o = e.r(984027);
  Object.defineProperty(r, "GoogleMapsEmbed", { enumerable: true, get: function() {
    return i(o).default;
  } });
  var s = e.r(15124);
  Object.defineProperty(r, "YouTubeEmbed", { enumerable: true, get: function() {
    return i(s).default;
  } });
  var a = e.r(42710);
  Object.defineProperty(r, "GoogleTagManager", { enumerable: true, get: function() {
    return a.GoogleTagManager;
  } }), Object.defineProperty(r, "sendGTMEvent", { enumerable: true, get: function() {
    return a.sendGTMEvent;
  } });
  var c = e.r(161338);
  Object.defineProperty(r, "GoogleAnalytics", { enumerable: true, get: function() {
    return c.GoogleAnalytics;
  } }), Object.defineProperty(r, "sendGAEvent", { enumerable: true, get: function() {
    return c.sendGAEvent;
  } });
}, 15124, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var i = e.e && e.e.__importDefault || function(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  };
  Object.defineProperty(r, "__esModule", { value: true }), r.default = function(e2) {
    let { html: t2, scripts: r2, stylesheets: n2 } = (0, a.YouTubeEmbed)(e2);
    return (0, o.jsx)(c.default, { height: e2.height || null, width: e2.width || null, html: t2, dataNtpc: "YouTubeEmbed", children: null == r2 ? void 0 : r2.map((e3) => (0, o.jsx)(s.default, { src: e3.url, strategy: u[e3.strategy], stylesheets: n2 }, e3.url)) });
  };
  let o = e.r(68982), s = i(e.r(838835)), a = e.r(508751), c = i(e.r(59016)), u = { server: "beforeInteractive", client: "afterInteractive", idle: "lazyOnload", worker: "worker" };
}, 366279, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(543836), n = e.i(728654), i = e.i(652531), o = e.i(119637), s = e.i(548913), a = e.i(999819), c = e.i(619784), u = e.i(291196), l = e.i(198623), p = e.i(45240), h = e.i(67110), d = e.i(386271), f = e.i(813044), g = e.i(73772), m = e.i(603642), v = e.i(68982);
  try {
    var y = "u" > typeof window ? window : e.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var _ = Object.defineProperty, b = (e2, t2) => _(e2, "name", { value: t2, configurable: true }), w = "Dialog", [k, x] = (0, i.createContextScope)(w), [S, C] = k(w), M = b((e2) => {
    let { __scopeDialog: r2, children: n2, open: i2, defaultOpen: a2, onOpenChange: c2, modal: u2 = true } = e2, l2 = t.useRef(null), p2 = t.useRef(null), [h2, d2] = (0, s.useControllableState)({ prop: i2, defaultProp: a2 ?? false, onChange: c2, caller: w }), [f2, g2] = t.useState(0), [m2, y2] = t.useState(0);
    return (0, v.jsx)(S, { scope: r2, triggerRef: l2, contentRef: p2, contentId: (0, o.useId)(), titleId: (0, o.useId)(), descriptionId: (0, o.useId)(), titlePresent: f2 > 0, descriptionPresent: m2 > 0, setTitleCount: g2, setDescriptionCount: y2, open: h2, onOpenChange: d2, onOpenToggle: t.useCallback(() => d2((e3) => !e3), [d2]), modal: u2, children: n2 });
  }, "Dialog"), I = t.forwardRef(b(function(e2, t2) {
    let { __scopeDialog: i2, ...o2 } = e2, s2 = C("DialogTrigger", i2), a2 = (0, n.useComposedRefs)(t2, s2.triggerRef);
    return (0, v.jsx)(p.Primitive.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": s2.open, "aria-controls": s2.open ? s2.contentId : void 0, "data-state": $(s2.open), ...o2, ref: a2, onClick: (0, r.composeEventHandlers)(e2.onClick, s2.onOpenToggle) });
  }, "DialogTrigger")), O = "DialogPortal", [E, R] = k(O, { forceMount: void 0 }), A = b((e2) => {
    let { __scopeDialog: r2, forceMount: n2, children: i2, container: o2 } = e2, s2 = C(O, r2);
    return (0, v.jsx)(E, { scope: r2, forceMount: n2, children: t.Children.map(i2, (e3) => (0, v.jsx)(l.Presence, { present: n2 || s2.open, children: (0, v.jsx)(u.Portal, { asChild: true, container: o2, children: e3 }) })) });
  }, "DialogPortal"), T = "DialogOverlay", P = t.forwardRef(b(function(e2, t2) {
    let r2 = R(T, e2.__scopeDialog), { forceMount: n2 = r2.forceMount, ...i2 } = e2, o2 = C(T, e2.__scopeDialog);
    return o2.modal ? (0, v.jsx)(l.Presence, { present: n2 || o2.open, children: (0, v.jsx)(L, { ...i2, ref: t2 }) }) : null;
  }, "DialogOverlay")), D = (0, m.createSlot)("DialogOverlay.RemoveScroll"), L = t.forwardRef(b(function(e2, t2) {
    let { __scopeDialog: r2, ...i2 } = e2, o2 = C(T, r2), s2 = (0, a.useDismissableLayerSurface)(), c2 = (0, n.useComposedRefs)(t2, s2);
    return (0, v.jsx)(f.RemoveScroll, { as: D, allowPinchZoom: true, shards: [o2.contentRef], children: (0, v.jsx)(p.Primitive.div, { "data-state": $(o2.open), ...i2, ref: c2, style: { pointerEvents: "auto", ...i2.style } }) });
  }, "DialogOverlayImpl")), F = "DialogContent", j = t.forwardRef(b(function(e2, t2) {
    let r2 = R(F, e2.__scopeDialog), { forceMount: n2 = r2.forceMount, ...i2 } = e2, o2 = C(F, e2.__scopeDialog);
    return (0, v.jsx)(l.Presence, { present: n2 || o2.open, children: o2.modal ? (0, v.jsx)(N, { ...i2, ref: t2 }) : (0, v.jsx)(U, { ...i2, ref: t2 }) });
  }, "DialogContent")), N = t.forwardRef(b(function(e2, i2) {
    let o2 = C(F, e2.__scopeDialog), s2 = t.useRef(null), a2 = (0, n.useComposedRefs)(i2, o2.contentRef, s2);
    return t.useEffect(() => {
      let e3 = s2.current;
      if (e3) return (0, g.hideOthers)(e3);
    }, []), (0, v.jsx)(B, { ...e2, ref: a2, trapFocus: o2.open, disableOutsidePointerEvents: o2.open, onCloseAutoFocus: (0, r.composeEventHandlers)(e2.onCloseAutoFocus, (e3) => {
      e3.preventDefault(), o2.triggerRef.current?.focus();
    }), onPointerDownOutside: (0, r.composeEventHandlers)(e2.onPointerDownOutside, (e3) => {
      let t2 = e3.detail.originalEvent, r2 = 0 === t2.button && true === t2.ctrlKey;
      (2 === t2.button || r2) && e3.preventDefault();
    }), onFocusOutside: (0, r.composeEventHandlers)(e2.onFocusOutside, (e3) => e3.preventDefault()) });
  }, "DialogContentModal")), U = t.forwardRef(b(function(e2, r2) {
    let n2 = C(F, e2.__scopeDialog), i2 = t.useRef(false), o2 = t.useRef(false);
    return (0, v.jsx)(B, { ...e2, ref: r2, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (t2) => {
      e2.onCloseAutoFocus?.(t2), t2.defaultPrevented || (i2.current || n2.triggerRef.current?.focus(), t2.preventDefault()), i2.current = false, o2.current = false;
    }, onInteractOutside: (t2) => {
      e2.onInteractOutside?.(t2), t2.defaultPrevented || (i2.current = true, "pointerdown" === t2.detail.originalEvent.type && (o2.current = true));
      let r3 = t2.target;
      n2.triggerRef.current?.contains(r3) && t2.preventDefault(), "focusin" === t2.detail.originalEvent.type && o2.current && t2.preventDefault();
    } });
  }, "DialogContentNonModal")), B = t.forwardRef(b(function(e2, t2) {
    let { __scopeDialog: r2, trapFocus: n2, onOpenAutoFocus: i2, onCloseAutoFocus: o2, ...s2 } = e2, u2 = C(F, r2);
    return (0, h.useFocusGuards)(), (0, v.jsx)(v.Fragment, { children: (0, v.jsx)(c.FocusScope, { asChild: true, loop: true, trapped: n2, onMountAutoFocus: i2, onUnmountAutoFocus: o2, children: (0, v.jsx)(a.DismissableLayer, { role: "dialog", id: u2.contentId, "aria-describedby": u2.descriptionPresent ? u2.descriptionId : void 0, "aria-labelledby": u2.titlePresent ? u2.titleId : void 0, "data-state": $(u2.open), ...s2, ref: t2, deferPointerDownOutside: true, onDismiss: () => u2.onOpenChange(false) }) }) });
  }, "DialogContentImpl")), z = t.forwardRef(b(function(e2, t2) {
    let { __scopeDialog: r2, ...n2 } = e2, i2 = C("DialogTitle", r2), { setTitleCount: o2 } = i2;
    return (0, d.useLayoutEffect)(() => (o2((e3) => e3 + 1), () => o2((e3) => e3 - 1)), [o2]), (0, v.jsx)(p.Primitive.h2, { id: i2.titleId, ...n2, ref: t2 });
  }, "DialogTitle")), q = t.forwardRef(b(function(e2, t2) {
    let { __scopeDialog: r2, ...n2 } = e2, i2 = C("DialogDescription", r2), { setDescriptionCount: o2 } = i2;
    return (0, d.useLayoutEffect)(() => (o2((e3) => e3 + 1), () => o2((e3) => e3 - 1)), [o2]), (0, v.jsx)(p.Primitive.p, { id: i2.descriptionId, ...n2, ref: t2 });
  }, "DialogDescription")), W = t.forwardRef(b(function(e2, t2) {
    let { __scopeDialog: n2, ...i2 } = e2, o2 = C("DialogClose", n2);
    return (0, v.jsx)(p.Primitive.button, { type: "button", ...i2, ref: t2, onClick: (0, r.composeEventHandlers)(e2.onClick, () => o2.onOpenChange(false)) });
  }, "DialogClose")), V = b((e2) => e2.children, "WarningProvider");
  function $(e2) {
    return e2 ? "open" : "closed";
  }
  b($, "getState"), e.s(["Close", 0, W, "Content", 0, j, "Description", 0, q, "Dialog", 0, M, "DialogClose", 0, W, "DialogContent", 0, j, "DialogDescription", 0, q, "DialogOverlay", 0, P, "DialogPortal", 0, A, "DialogTitle", 0, z, "DialogTrigger", 0, I, "Overlay", 0, P, "Portal", 0, A, "Root", 0, M, "Title", 0, z, "Trigger", 0, I, "WarningProvider", 0, V, "createDialogScope", 0, x]);
}, 734804, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function r(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var r2 = arguments[t2];
      for (var n2 in r2) "__proto__" !== n2 && (e2[n2] = r2[n2]);
    }
    return e2;
  }
  var n = (function e2(t2, n2) {
    function i(e3, i2, o) {
      if ("u" > typeof document) {
        "number" == typeof (o = r({}, n2, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)), o.expires && (o.expires = o.expires.toUTCString()), e3 = encodeURIComponent(e3).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
        var s = "";
        for (var a in o) o[a] && (s += "; " + a, true !== o[a] && (s += "=" + o[a].split(";")[0]));
        return document.cookie = e3 + "=" + t2.write(i2, e3) + s;
      }
    }
    return Object.create({ set: i, get: function(e3) {
      if ("u" > typeof document && (!arguments.length || e3)) {
        for (var r2 = document.cookie ? document.cookie.split("; ") : [], n3 = {}, i2 = 0; i2 < r2.length; i2++) {
          var o = r2[i2].split("="), s = o.slice(1).join("=");
          try {
            var a = decodeURIComponent(o[0]);
            if (a in n3 || (n3[a] = t2.read(s, a)), e3 === a) break;
          } catch (e4) {
          }
        }
        return e3 ? n3[e3] : n3;
      }
    }, remove: function(e3, t3) {
      i(e3, "", r({}, t3, { expires: -1 }));
    }, withAttributes: function(t3) {
      return e2(this.converter, r({}, this.attributes, t3));
    }, withConverter: function(t3) {
      return e2(r({}, this.converter, t3), this.attributes);
    } }, { attributes: { value: Object.freeze(n2) }, converter: { value: Object.freeze(t2) } });
  })({ read: function(e2) {
    return '"' === e2[0] && (e2 = e2.slice(1, -1)), e2.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  }, write: function(e2) {
    return encodeURIComponent(e2).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
  } }, { path: "/" });
  e.s(["default", 0, n]);
}, 269378, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true });
  var i = e.r(856757);
  function o(e2) {
    return Array.prototype.slice.call(e2);
  }
  function s(e2, t2) {
    var r2 = Math.floor(e2);
    return r2 === t2 || r2 + 1 === t2 ? e2 : t2;
  }
  function a() {
    return Date.now();
  }
  function c(e2, t2, r2) {
    if (t2 = "data-keen-slider-" + t2, null === r2) return e2.removeAttribute(t2);
    e2.setAttribute(t2, r2 || "");
  }
  function u(e2, t2) {
    return t2 = t2 || document, "function" == typeof e2 && (e2 = e2(t2)), Array.isArray(e2) ? e2 : "string" == typeof e2 ? o(t2.querySelectorAll(e2)) : e2 instanceof HTMLElement ? [e2] : e2 instanceof NodeList ? o(e2) : [];
  }
  function l(e2) {
    e2.raw && (e2 = e2.raw), e2.cancelable && !e2.defaultPrevented && e2.preventDefault();
  }
  function p(e2) {
    e2.raw && (e2 = e2.raw), e2.stopPropagation && e2.stopPropagation();
  }
  function h() {
    var e2 = [];
    return { add: function(t2, r2, n2, i2) {
      t2.addListener ? t2.addListener(n2) : t2.addEventListener(r2, n2, i2), e2.push([t2, r2, n2, i2]);
    }, input: function(e3, t2, r2, n2) {
      this.add(e3, t2, function(e4) {
        e4.nativeEvent && (e4 = e4.nativeEvent);
        var t3 = e4.changedTouches || [], n3 = e4.targetTouches || [], i2 = e4.detail && e4.detail.x ? e4.detail : null;
        return r2({ id: i2 ? i2.identifier ? i2.identifier : "i" : n3[0] ? n3[0] ? n3[0].identifier : "e" : "d", idChanged: i2 ? i2.identifier ? i2.identifier : "i" : t3[0] ? t3[0] ? t3[0].identifier : "e" : "d", raw: e4, x: i2 && i2.x ? i2.x : n3[0] ? n3[0].screenX : i2 ? i2.x : e4.pageX, y: i2 && i2.y ? i2.y : n3[0] ? n3[0].screenY : i2 ? i2.y : e4.pageY });
      }, n2);
    }, purge: function() {
      e2.forEach(function(e3) {
        e3[0].removeListener ? e3[0].removeListener(e3[2]) : e3[0].removeEventListener(e3[1], e3[2], e3[3]);
      }), e2 = [];
    } };
  }
  function d(e2, t2, r2) {
    return Math.min(Math.max(e2, t2), r2);
  }
  function f(e2) {
    return (e2 > 0) - (e2 < 0) || +e2;
  }
  function g(e2) {
    var t2 = e2.getBoundingClientRect();
    return { height: s(t2.height, e2.offsetHeight), width: s(t2.width, e2.offsetWidth) };
  }
  function m(e2, t2, r2, n2) {
    var i2 = e2 && e2[t2];
    return null == i2 ? r2 : n2 && "function" == typeof i2 ? i2() : i2;
  }
  function v(e2) {
    return Math.round(1e6 * e2) / 1e6;
  }
  var y = function() {
    return (y = Object.assign || function(e2) {
      for (var t2, r2 = 1, n2 = arguments.length; r2 < n2; r2++) for (var i2 in t2 = arguments[r2]) Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
      return e2;
    }).apply(this, arguments);
  };
  function _(e2, t2, r2) {
    if (r2 || 2 == arguments.length) for (var n2, i2 = 0, o2 = t2.length; i2 < o2; i2++) !n2 && i2 in t2 || (n2 || (n2 = Array.prototype.slice.call(t2, 0, i2)), n2[i2] = t2[i2]);
    return e2.concat(n2 || Array.prototype.slice.call(t2));
  }
  function b(e2) {
    var t2, r2, n2, i2, o2, s2, a2, c2;
    function u2(e3) {
      return 1 - Math.pow(1 - e3, 3);
    }
    function l2() {
      return n2 ? e2.track.velocity() : 0;
    }
    function p2(e3, t3) {
      void 0 === t3 && (t3 = 1e3);
      var r3 = 147e-9 + (e3 = Math.abs(e3)) / t3;
      return { dist: Math.pow(e3, 2) / r3, dur: e3 / r3 };
    }
    function h2() {
      var t3 = e2.track.details;
      t3 && (o2 = t3.min, s2 = t3.max, a2 = t3.minIdx, c2 = t3.maxIdx);
    }
    function g2() {
      e2.animator.stop();
    }
    e2.on("updated", h2), e2.on("optionsChanged", h2), e2.on("created", h2), e2.on("dragStarted", function() {
      n2 = false, g2(), t2 = r2 = e2.track.details.abs;
    }), e2.on("dragChecked", function() {
      n2 = true;
    }), e2.on("dragEnded", function() {
      var n3, h3, m2, v2, y2, _2, b2 = e2.options.mode;
      "snap" === b2 && (n3 = e2.track, m2 = (h3 = e2.track.details).position, v2 = f(l2()), (m2 > s2 || m2 < o2) && (v2 = 0), y2 = t2 + v2, 0 === h3.slides[n3.absToRel(y2)].portion && (y2 -= v2), t2 !== r2 && (y2 = r2), f(n3.idxToDist(y2, true)) !== v2 && (y2 += v2), y2 = d(y2, a2, c2), _2 = n3.idxToDist(y2, true), e2.animator.start([{ distance: _2, duration: 500, easing: function(e3) {
        return 1 + --e3 * e3 * e3 * e3 * e3;
      } }])), "free" !== b2 && "free-snap" !== b2 || (function() {
        g2();
        var t3 = "free-snap" === e2.options.mode, r3 = e2.track, n4 = l2();
        i2 = f(n4);
        var h4 = e2.track.details, m3 = [];
        if (n4 || !t3) {
          var v3 = p2(n4), y3 = v3.dist, _3 = v3.dur;
          if (_3 *= 2, y3 *= i2, t3) {
            var b3 = r3.idxToDist(r3.distToIdx(y3), true);
            b3 && (y3 = b3);
          }
          m3.push({ distance: y3, duration: _3, easing: u2 });
          var w2 = h4.position, k2 = w2 + y3;
          if (k2 < o2 || k2 > s2) {
            var x2 = k2 < o2 ? o2 - w2 : s2 - w2, S = 0, C = n4;
            if (f(x2) === i2) {
              var M = Math.min(Math.abs(x2) / Math.abs(y3), 1), I = (1 - Math.pow(1 - M, 1 / 3)) * _3;
              m3[0].earlyExit = I, C = n4 * (1 - M);
            } else m3[0].earlyExit = 0, S += x2;
            var O = p2(C, 100), E = O.dist * i2;
            e2.options.rubberband && (m3.push({ distance: E, duration: 2 * O.dur, easing: u2 }), m3.push({ distance: -E + S, duration: 500, easing: u2 }));
          }
          e2.animator.start(m3);
        } else e2.moveToIdx(d(h4.abs, a2, c2), true, { duration: 500, easing: function(e3) {
          return 1 + --e3 * e3 * e3 * e3 * e3;
        } });
      })();
    }), e2.on("dragged", function() {
      r2 = e2.track.details.abs;
    });
  }
  function w(e2) {
    var t2, r2, n2, i2, o2, s2, a2, c2, g2, m2, v2, y2, _2, b2, w2, k2, x2, S, C = h();
    function M(t3) {
      if (s2 && c2 === t3.id) {
        var u2 = R(t3);
        if (g2) {
          if (!E(t3)) return O(t3);
          m2 = u2, g2 = false, e2.emit("dragChecked");
        }
        if (k2) return m2 = u2;
        l(t3);
        var h2 = (function(t4) {
          if (x2 === -1 / 0 && S === 1 / 0) return t4;
          var n3 = e2.track.details, s3 = n3.length, a3 = n3.position, c3 = d(t4, x2 - a3, S - a3);
          if (0 === s3) return 0;
          if (!e2.options.rubberband) return c3;
          if (a3 <= S && a3 >= x2 || a3 < x2 && r2 > 0 || a3 > S && r2 < 0) return t4;
          var u3 = Math.max(0, 1 - Math.abs((a3 < x2 ? a3 - x2 : a3 - S) / s3 * (i2 * s3)) / o2 * 2);
          return u3 * u3 * t4;
        })(a2(m2 - u2) / i2 * n2);
        r2 = f(h2);
        var _3 = e2.track.details.position;
        (_3 > x2 && _3 < S || _3 === x2 && r2 > 0 || _3 === S && r2 < 0) && p(t3), v2 += h2, !y2 && Math.abs(v2 * i2) > 5 && (y2 = true), e2.track.add(h2), m2 = u2, e2.emit("dragged");
      }
    }
    function I(t3) {
      !s2 && e2.track.details && e2.track.details.length && (v2 = 0, s2 = true, y2 = false, g2 = true, c2 = t3.id, E(t3), m2 = R(t3), e2.emit("dragStarted"));
    }
    function O(t3) {
      s2 && c2 === t3.idChanged && (s2 = false, e2.emit("dragEnded"));
    }
    function E(e3) {
      var t3 = A(), r3 = t3 ? e3.y : e3.x, n3 = t3 ? e3.x : e3.y, i3 = void 0 !== _2 && void 0 !== b2 && Math.abs(b2 - n3) <= Math.abs(_2 - r3);
      return _2 = r3, b2 = n3, i3;
    }
    function R(e3) {
      return A() ? e3.y : e3.x;
    }
    function A() {
      return e2.options.vertical;
    }
    function T() {
      i2 = e2.size, o2 = A() ? window.innerHeight : window.innerWidth;
      var t3 = e2.track.details;
      t3 && (x2 = t3.min, S = t3.max);
    }
    function P(e3) {
      y2 && (p(e3), l(e3));
    }
    function D() {
      if (C.purge(), e2.options.drag && !e2.options.disabled) {
        a2 = "function" == typeof (r3 = e2.options.dragSpeed || 1) ? r3 : function(e3) {
          return e3 * r3;
        }, n2 = e2.options.rtl ? -1 : 1, T(), t2 = e2.container, u("[".concat("data-keen-slider-clickable", "]:not([").concat("data-keen-slider-clickable", "=false])"), t2).map(function(e3) {
          C.add(e3, "dragstart", p), C.add(e3, "mousedown", p), C.add(e3, "touchstart", p);
        }), C.add(t2, "dragstart", function(e3) {
          l(e3);
        }), C.add(t2, "click", P, { capture: true }), C.input(t2, "ksDragStart", I), C.input(t2, "ksDrag", M), C.input(t2, "ksDragEnd", O), C.input(t2, "mousedown", I), C.input(t2, "mousemove", M), C.input(t2, "mouseleave", O), C.input(t2, "mouseup", O), C.input(t2, "touchstart", I, { passive: true }), C.input(t2, "touchmove", M, { passive: false }), C.input(t2, "touchend", O), C.input(t2, "touchcancel", O), C.add(window, "wheel", function(e3) {
          s2 && l(e3);
        });
        var r3, i3 = "data-keen-slider-scrollable";
        u("[".concat(i3, "]:not([").concat(i3, "=false])"), e2.container).map(function(e3) {
          var t3;
          C.input(e3, "touchstart", function(e4) {
            t3 = R(e4), k2 = true, w2 = true;
          }, { passive: true }), C.input(e3, "touchmove", function(r4) {
            var n3 = A(), i4 = n3 ? e3.scrollHeight - e3.clientHeight : e3.scrollWidth - e3.clientWidth, o3 = t3 - R(r4), s3 = n3 ? e3.scrollTop : e3.scrollLeft, a3 = n3 && "scroll" === e3.style.overflowY || !n3 && "scroll" === e3.style.overflowX;
            if (t3 = R(r4), (o3 < 0 && s3 > 0 || o3 > 0 && s3 < i4) && w2 && a3) return k2 = true;
            w2 = false, l(r4), k2 = false;
          }), C.input(e3, "touchend", function() {
            k2 = false;
          });
        });
      }
    }
    e2.on("updated", T), e2.on("optionsChanged", D), e2.on("created", D), e2.on("destroyed", C.purge);
  }
  function k(e2) {
    var t2, r2, n2 = null;
    function i2(t3, r3, n3) {
      e2.animator.active ? s2(t3, r3, n3) : requestAnimationFrame(function() {
        return s2(t3, r3, n3);
      });
    }
    function o2() {
      i2(false, false, r2);
    }
    function s2(r3, i3, o3) {
      var s3 = 0, a3 = e2.size, l3 = e2.track.details;
      if (l3 && t2) {
        var p3 = l3.slides;
        t2.forEach(function(e3, t3) {
          if (r3) !n2 && i3 && c2(e3, null, o3), u2(e3, null, o3);
          else {
            if (!p3[t3]) return;
            var l4 = p3[t3].size * a3;
            !n2 && i3 && c2(e3, l4, o3), u2(e3, p3[t3].distance * a3 - s3, o3), s3 += l4;
          }
        });
      }
    }
    function a2(t3) {
      return "performance" === e2.options.renderMode ? Math.round(t3) : t3;
    }
    function c2(e3, t3, r3) {
      var n3 = r3 ? "height" : "width";
      null !== t3 && (t3 = a2(t3) + "px"), e3.style["min-" + n3] = t3, e3.style["max-" + n3] = t3;
    }
    function u2(e3, t3, r3) {
      if (null !== t3) {
        t3 = a2(t3);
        var n3 = r3 ? t3 : 0;
        t3 = "translate3d(".concat(r3 ? 0 : t3, "px, ").concat(n3, "px, 0)");
      }
      e3.style.transform = t3, e3.style["-webkit-transform"] = t3;
    }
    function l2() {
      t2 && (s2(true, true, r2), t2 = null), e2.on("detailsChanged", o2, true);
    }
    function p2() {
      i2(false, true, r2);
    }
    function h2() {
      l2(), r2 = e2.options.vertical, e2.options.disabled || "custom" === e2.options.renderMode || (n2 = "auto" === m(e2.options.slides, "perView", null), e2.on("detailsChanged", o2), (t2 = e2.slides).length && p2());
    }
    e2.on("created", h2), e2.on("optionsChanged", h2), e2.on("beforeOptionsChanged", function() {
      l2();
    }), e2.on("updated", p2), e2.on("destroyed", l2);
  }
  var x = function(e2, t2, r2) {
    try {
      var n2, i2, o2, s2;
      return i2 = _([(n2 = { drag: true, mode: "snap", renderMode: "precision", rubberband: true, selector: ".keen-slider__slide" }, function(t3) {
        var r3, i3, o3, s3, a2, l2, p2 = h();
        function d2(e3) {
          var r4;
          c(t3.container, "reverse", "rtl" !== (r4 = t3.container, window.getComputedStyle(r4, null).getPropertyValue("direction")) || e3 ? null : ""), c(t3.container, "v", t3.options.vertical && !e3 ? "" : null), c(t3.container, "disabled", t3.options.disabled && !e3 ? "" : null);
        }
        function f2() {
          v2() && k2();
        }
        function v2() {
          var e3 = null;
          if (s3.forEach(function(t4) {
            t4.matches && (e3 = t4.__media);
          }), e3 === r3) return false;
          r3 || t3.emit("beforeOptionsChanged"), r3 = e3;
          var n3 = e3 ? o3.breakpoints[e3] : o3;
          return t3.options = y(y({}, o3), n3), d2(), I(), O(), S(), true;
        }
        function _2() {
          return t3.options.trackConfig.length;
        }
        function b2(e3) {
          for (var a3 in r3 = false, o3 = y(y({}, n2), e3), p2.purge(), i3 = t3.size, s3 = [], o3.breakpoints || []) {
            var c2 = window.matchMedia(a3);
            c2.__media = a3, s3.push(c2), p2.add(c2, "change", f2);
          }
          p2.add(window, "orientationchange", M), p2.add(window, "resize", C), v2();
        }
        function w2(e3) {
          t3.animator.stop();
          var r4 = t3.track.details;
          t3.track.init(null != e3 ? e3 : r4 ? r4.abs : 0);
        }
        function k2(e3) {
          w2(e3), t3.emit("optionsChanged");
        }
        function x2(e3, r4) {
          if (e3) return b2(e3), void k2(r4);
          I(), O();
          var n3 = _2();
          S(), _2() !== n3 ? k2(r4) : w2(r4), t3.emit("updated");
        }
        function S() {
          var e3 = t3.options.slides;
          if ("function" == typeof e3) return t3.options.trackConfig = e3(t3.size, t3.slides);
          for (var r4 = t3.slides, n3 = r4.length, i4 = "number" == typeof e3 ? e3 : m(e3, "number", n3, true), o4 = [], s4 = m(e3, "perView", 1, true), a3 = m(e3, "spacing", 0, true) / t3.size || 0, c2 = "auto" === s4 ? a3 : a3 / s4, u2 = m(e3, "origin", "auto"), l3 = 0, p3 = 0; p3 < i4; p3++) {
            var h2 = "auto" === s4 ? (function(e4) {
              var r5 = g(e4);
              return (t3.options.vertical ? r5.height : r5.width) / t3.size || 1;
            })(r4[p3]) : 1 / s4 - a3 + c2, d3 = "center" === u2 ? 0.5 - h2 / 2 : "auto" === u2 ? 0 : u2;
            o4.push({ origin: d3, size: h2, spacing: a3 }), l3 += h2;
          }
          if (l3 += a3 * (i4 - 1), "auto" === u2 && !t3.options.loop && 1 !== s4) {
            var f3 = 0;
            o4.map(function(e4) {
              var t4 = l3 - f3;
              return f3 += e4.size + a3, t4 >= 1 || (e4.origin = 1 - t4 - (l3 > 1 ? 0 : 1 - l3)), e4;
            });
          }
          t3.options.trackConfig = o4;
        }
        function C() {
          I();
          var e3 = t3.size;
          t3.options.disabled || e3 === i3 || (i3 = e3, x2());
        }
        function M() {
          C(), setTimeout(C, 500), setTimeout(C, 2e3);
        }
        function I() {
          var e3 = g(t3.container);
          t3.size = (t3.options.vertical ? e3.height : e3.width) || 1;
        }
        function O() {
          t3.slides = u(t3.options.selector, t3.container);
        }
        t3.container = (l2 = u(e2, a2 || document)).length ? l2[0] : null, t3.destroy = function() {
          p2.purge(), t3.emit("destroyed"), d2(true);
        }, t3.prev = function() {
          t3.moveToIdx(t3.track.details.abs - 1, true);
        }, t3.next = function() {
          t3.moveToIdx(t3.track.details.abs + 1, true);
        }, t3.update = x2, b2(t3.options);
      }), k, w, b], r2 || [], true), s2 = {}, o2 = { emit: function(e3) {
        s2[e3] && s2[e3].forEach(function(e4) {
          e4(o2);
        });
        var t3 = o2.options && o2.options[e3];
        t3 && t3(o2);
      }, moveToIdx: function(e3, t3, r3) {
        var n3 = o2.track.idxToDist(e3, t3);
        if (n3) {
          var i3 = o2.options.defaultAnimation;
          o2.animator.start([{ distance: n3, duration: m(r3 || i3, "duration", 500), easing: m(r3 || i3, "easing", function(e4) {
            return 1 + --e4 * e4 * e4 * e4 * e4;
          }) }]);
        }
      }, on: function(e3, t3, r3) {
        void 0 === r3 && (r3 = false), s2[e3] || (s2[e3] = []);
        var n3 = s2[e3].indexOf(t3);
        n3 > -1 ? r3 && delete s2[e3][n3] : r3 || s2[e3].push(t3);
      }, options: t2 }, (function() {
        if (o2.track = (function(e4) {
          var t3, r3, n3, i3, o3, s3, c2, u2, l2, p2, h2, g2, y2, b2, w2 = 1 / 0, k2 = [], x2 = null, S = 0;
          function C(e5) {
            T(S + e5);
          }
          function M(e5) {
            var t4, r4 = I(S + e5).abs;
            return (t4 = r4, R(t4) === t4) ? r4 : null;
          }
          function I(e5) {
            var t4 = Math.floor(Math.abs(v(e5 / r3))), n4 = v((e5 % r3 + r3) % r3);
            n4 === r3 && (n4 = 0);
            var i4 = f(e5), o4 = c2.indexOf(_([], c2, true).reduce(function(e6, t5) {
              return Math.abs(t5 - n4) < Math.abs(e6 - n4) ? t5 : e6;
            })), a2 = o4;
            return i4 < 0 && t4++, o4 === s3 && (a2 = 0, t4 += i4 > 0 ? 1 : -1), { abs: a2 + t4 * s3 * i4, origin: o4, rel: a2 };
          }
          function O(e5, t4, r4) {
            if (t4 || !i3.loop) return E(e5, r4);
            if (n4 = e5, R(n4) !== n4) return null;
            var n4, o4, a2 = I(null != r4 ? r4 : S), c3 = a2.abs, u3 = e5 - a2.rel, l3 = c3 + u3;
            o4 = E(l3);
            var p3 = E(l3 - s3 * f(u3));
            return (null !== p3 && Math.abs(p3) < Math.abs(o4) || null === o4) && (o4 = p3), v(o4);
          }
          function E(e5, t4) {
            if (null == t4 && (t4 = v(S)), n4 = e5, R(n4) !== n4 || null === e5) return null;
            e5 = Math.round(e5);
            var n4, i4 = I(t4), o4 = i4.abs, a2 = i4.rel, u3 = i4.origin, l3 = A(e5), p3 = (t4 % r3 + r3) % r3, h3 = c2[u3], d2 = Math.floor((e5 - (o4 - a2)) / s3) * r3;
            return v(h3 - p3 - h3 + c2[l3] + d2 + (u3 === s3 ? r3 : 0));
          }
          function R(e5) {
            return d(e5, l2, p2);
          }
          function A(e5) {
            return (e5 % s3 + s3) % s3;
          }
          function T(t4) {
            r4 = t4 - S, k2.push({ distance: r4, timestamp: a() }), k2.length > 6 && (k2 = k2.slice(-6)), S = v(t4);
            var r4, n4 = P().abs;
            if (n4 !== x2) {
              var i4 = null !== x2;
              x2 = n4, i4 && e4.emit("slideChanged");
            }
          }
          function P(a2) {
            var c3 = a2 ? null : (function() {
              if (s3) {
                var e5 = i3.loop, t4 = e5 ? (S % r3 + r3) % r3 : S, a3 = (e5 ? S % r3 : S) - o3[0][2], c4 = 0 - (a3 < 0 && e5 ? r3 - Math.abs(a3) : a3), u3 = 0, d2 = I(S), m2 = d2.abs, v2 = d2.rel, _2 = o3[v2][2], w3 = o3.map(function(t5, n4) {
                  var o4 = c4 + u3;
                  (o4 < 0 - t5[0] || o4 > 1) && (o4 += (Math.abs(o4) > r3 - 1 && e5 ? r3 : 0) * f(-o4));
                  var a4 = n4 - v2, l3 = f(a4), p3 = a4 + m2;
                  e5 && (-1 === l3 && o4 > _2 && (p3 += s3), 1 === l3 && o4 < _2 && (p3 -= s3), null !== h2 && p3 < h2 && (o4 += r3), null !== g2 && p3 > g2 && (o4 -= r3));
                  var d3 = o4 + t5[0] + t5[1], y3 = Math.max(o4 >= 0 && d3 <= 1 ? 1 : d3 < 0 || o4 > 1 ? 0 : o4 < 0 ? Math.min(1, (t5[0] + o4) / t5[0]) : (1 - o4) / t5[0], 0);
                  return u3 += t5[0] + t5[1], { abs: p3, distance: i3.rtl ? -1 * o4 + 1 - t5[0] : o4, portion: y3, size: t5[0] };
                });
                return v2 = A(m2 = R(m2)), { abs: R(m2), length: n3, max: b2, maxIdx: p2, min: y2, minIdx: l2, position: S, progress: e5 ? t4 / r3 : S / n3, rel: v2, slides: w3, slidesLength: r3 };
              }
            })();
            return t3.details = c3, e4.emit("detailsChanged"), c3;
          }
          return t3 = { absToRel: A, add: C, details: null, distToIdx: M, idxToDist: O, init: function(t4) {
            var a2, d2, f2, _2;
            if ((function() {
              if (s3 = (o3 = ((i3 = e4.options).trackConfig || []).map(function(e5) {
                return [m(e5, "size", 1), m(e5, "spacing", 0), m(e5, "origin", 0)];
              })).length) {
                r3 = v(o3.reduce(function(e5, t6) {
                  return e5 + t6[0] + t6[1];
                }, 0));
                var t5, a3 = s3 - 1;
                n3 = v(r3 + o3[0][2] - o3[a3][0] - o3[a3][2] - o3[a3][1]), c2 = o3.reduce(function(e5, r4) {
                  if (!e5) return [0];
                  var n4 = o3[e5.length - 1], i4 = e5[e5.length - 1] + (n4[0] + n4[2]) + n4[1];
                  return i4 -= r4[2], e5[e5.length - 1] > i4 && (i4 = e5[e5.length - 1]), i4 = v(i4), e5.push(i4), (!t5 || t5 < i4) && (u2 = e5.length - 1), t5 = i4, e5;
                }, null), 0 === n3 && (u2 = 0), c2.push(v(r3));
              }
            })(), !s3) return P(true);
            a2 = e4.options.range, h2 = l2 = (d2 = e4.options.loop) ? m(d2, "min", -1 / 0) : 0, g2 = p2 = d2 ? m(d2, "max", w2) : u2, f2 = m(a2, "min", null), _2 = m(a2, "max", null), null !== f2 && (l2 = f2), null !== _2 && (p2 = _2), y2 = l2 === -1 / 0 ? l2 : e4.track.idxToDist(l2 || 0, true, 0), b2 = p2 === w2 ? p2 : O(p2, true, 0), null === _2 && (g2 = p2), m(a2, "align", false) && p2 !== w2 && 0 === o3[A(p2)][2] && (b2 -= 1 - o3[A(p2)][0], p2 = M(b2 - S)), y2 = v(y2), b2 = v(b2), Number(t4) === t4 ? C(E(R(t4))) : P();
          }, to: T, velocity: function() {
            var e5 = a(), t4 = k2.reduce(function(t5, r4) {
              var n4 = r4.distance, i4 = r4.timestamp;
              return e5 - i4 > 200 || (f(n4) !== f(t5.distance) && t5.distance && (t5 = { distance: 0, lastTimestamp: 0, time: 0 }), t5.time && (t5.distance += n4), t5.lastTimestamp && (t5.time += i4 - t5.lastTimestamp), t5.lastTimestamp = i4), t5;
            }, { distance: 0, lastTimestamp: 0, time: 0 });
            return t4.distance / t4.time || 0;
          } };
        })(o2), o2.animator = (function(e4) {
          var t3, r3, n3, i3, o3, s3;
          function a2(e5) {
            t3.active = e5;
          }
          function c2(e5) {
            t3.targetIdx = e5;
          }
          function u2() {
            var t4;
            t4 = o3, window.cancelAnimationFrame(t4), a2(false), c2(null), s3 && e4.emit("animationStopped"), s3 = null;
          }
          return t3 = { active: false, start: function(t4) {
            if (u2(), e4.track.details) {
              var l2 = 0, p2 = e4.track.details.position;
              r3 = 0, n3 = 0, i3 = t4.map(function(e5) {
                var t5, r4 = Number(p2), i4 = null != (t5 = e5.earlyExit) ? t5 : e5.duration, o4 = e5.easing, s4 = e5.distance * o4(i4 / e5.duration) || 0;
                p2 += s4;
                var a3 = n3;
                return n3 += i4, l2 += s4, [r4, e5.distance, a3, n3, e5.duration, o4];
              }), c2(e4.track.distToIdx(l2)), (function t5() {
                o3 = window.requestAnimationFrame(function o4(u3) {
                  s3 || (s3 = u3), a2(true);
                  var l3 = u3 - s3;
                  l3 > n3 && (l3 = n3);
                  var p3 = i3[r3];
                  if (p3[3] < l3) return r3++, o4(u3);
                  var h2 = p3[2], d2 = p3[4], f2 = p3[0], g2 = p3[1] * (0, p3[5])(0 === d2 ? 1 : (l3 - h2) / d2);
                  if (g2 && e4.track.to(f2 + g2), l3 < n3) return t5();
                  s3 = null, a2(false), c2(null), e4.emit("animationEnded");
                });
              })(), e4.emit("animationStarted");
            }
          }, stop: u2, targetIdx: null };
        })(o2), i2) for (var e3 = 0; e3 < i2.length; e3++) (0, i2[e3])(o2);
        o2.track.init(o2.options.initial || 0), o2.emit("created");
      })(), o2;
    } catch (e3) {
      console.error(e3);
    }
  };
  r.useKeenSlider = function(e2, t2) {
    var r2 = i.useRef(null), n2 = i.useRef(false), o2 = i.useRef(e2), s2 = i.useCallback(function(i2) {
      i2 ? (o2.current = e2, r2.current = new x(i2, e2, t2), n2.current = false) : (r2.current && r2.current.destroy && r2.current.destroy(), r2.current = null);
    }, []);
    return i.useEffect(function() {
      (function e3(t3, r3) {
        if (t3 === r3) return true;
        var n3 = typeof t3;
        if (n3 !== typeof r3) return false;
        if ("object" !== n3 || null === t3 || null === r3) return "function" === n3 && t3.toString() === r3.toString();
        if (t3.length !== r3.length || Object.getOwnPropertyNames(t3).length !== Object.getOwnPropertyNames(r3).length) return false;
        for (var i2 in t3) if (!e3(t3[i2], r3[i2])) return false;
        return true;
      })(o2.current, e2) || (o2.current = e2, r2.current && r2.current.update(o2.current));
    }, [e2]), [s2, r2];
  };
}, 96533, (e) => {
  "use strict";
  var t, r, n, i, o, s, a, c, u, l, p, h, d, f, g, m, v, y, _ = e.i(824144), b = e.i(541130);
  try {
    var w = "u" > typeof window ? window : e.g;
    w._sentryModuleMetadata = w._sentryModuleMetadata || {}, w._sentryModuleMetadata[new w.Error().stack] = Object.assign({}, w._sentryModuleMetadata[new w.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  if ("u" < typeof window) {
    var k = { hostname: "" };
    se = { crypto: { randomUUID: function() {
      throw Error("unsupported");
    } }, navigator: { userAgent: "", onLine: true }, document: { createElement: function() {
      return {};
    }, location: k, referrer: "" }, screen: { width: 0, height: 0 }, location: k, addEventListener: function() {
    }, removeEventListener: function() {
    }, dispatchEvent: function() {
    }, CustomEvent: function() {
    } };
  } else se = window;
  var x = { DEBUG: false, LIB_VERSION: "2.81.0" }, S = "__mp_targeting", C = "__mp_recorder", M = "__MP_TARGETING_FILENAME__";
  function I(e10, t10) {
    (null == t10 || t10 > e10.length) && (t10 = e10.length);
    for (var r10 = 0, n10 = Array(t10); r10 < t10; r10++) n10[r10] = e10[r10];
    return n10;
  }
  function O(e10, t10, r10, n10, i10, o10, s10) {
    try {
      var a10 = e10[o10](s10), c10 = a10.value;
    } catch (e11) {
      r10(e11);
      return;
    }
    a10.done ? t10(c10) : Promise.resolve(c10).then(n10, i10);
  }
  function E(e10) {
    return function() {
      var t10 = this, r10 = arguments;
      return new Promise(function(n10, i10) {
        var o10 = e10.apply(t10, r10);
        function s10(e11) {
          O(o10, n10, i10, s10, a10, "next", e11);
        }
        function a10(e11) {
          O(o10, n10, i10, s10, a10, "throw", e11);
        }
        s10(void 0);
      });
    };
  }
  function R(e10, t10, r10) {
    return (R = B() ? Reflect.construct : function(e11, t11, r11) {
      var n10 = [null];
      n10.push.apply(n10, t11);
      var i10 = new (Function.bind.apply(e11, n10))();
      return r11 && j(i10, r11.prototype), i10;
    }).apply(null, arguments);
  }
  function A(e10, t10, r10) {
    return t10 && (function(e11, t11) {
      for (var r11 = 0; r11 < t11.length; r11++) {
        var n10 = t11[r11];
        n10.enumerable = n10.enumerable || false, n10.configurable = true, "value" in n10 && (n10.writable = true), Object.defineProperty(e11, n10.key, n10);
      }
    })(e10.prototype, t10), e10;
  }
  function T() {
    return (T = Object.assign || function(e10) {
      for (var t10 = 1; t10 < arguments.length; t10++) {
        var r10 = arguments[t10];
        for (var n10 in r10) Object.prototype.hasOwnProperty.call(r10, n10) && (e10[n10] = r10[n10]);
      }
      return e10;
    }).apply(this, arguments);
  }
  function P(e10) {
    return (P = Object.setPrototypeOf ? Object.getPrototypeOf : function(e11) {
      return e11.__proto__ || Object.getPrototypeOf(e11);
    })(e10);
  }
  function D(e10, t10) {
    if ("function" != typeof t10 && null !== t10) throw TypeError("Super expression must either be null or a function");
    e10.prototype = Object.create(t10 && t10.prototype, { constructor: { value: e10, writable: true, configurable: true } }), t10 && j(e10, t10);
  }
  function L(e10, t10) {
    return null != t10 && "u" > typeof Symbol && t10[Symbol.hasInstance] ? !!t10[Symbol.hasInstance](e10) : e10 instanceof t10;
  }
  function F(e10, t10) {
    if (null == e10) return {};
    var r10, n10, i10 = {}, o10 = Object.keys(e10);
    for (n10 = 0; n10 < o10.length; n10++) r10 = o10[n10], t10.indexOf(r10) >= 0 || (i10[r10] = e10[r10]);
    return i10;
  }
  function j(e10, t10) {
    return (j = Object.setPrototypeOf || function(e11, t11) {
      return e11.__proto__ = t11, e11;
    })(e10, t10);
  }
  function N(e10) {
    return e10 && "u" > typeof Symbol && e10.constructor === Symbol ? "symbol" : typeof e10;
  }
  function U(e10) {
    var t10 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
    return (U = function(e11) {
      if (null === e11 || -1 === Function.toString.call(e11).indexOf("[native code]")) return e11;
      if ("function" != typeof e11) throw TypeError("Super expression must either be null or a function");
      if (void 0 !== t10) {
        if (t10.has(e11)) return t10.get(e11);
        t10.set(e11, r10);
      }
      function r10() {
        return R(e11, arguments, P(this).constructor);
      }
      return r10.prototype = Object.create(e11.prototype, { constructor: { value: r10, enumerable: false, writable: true, configurable: true } }), j(r10, e11);
    })(e10);
  }
  function B() {
    try {
      var e10 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (e11) {
    }
    return (B = function() {
      return !!e10;
    })();
  }
  function z(e10, t10) {
    var r10 = "u" > typeof Symbol && e10[Symbol.iterator] || e10["@@iterator"];
    if (r10) return (r10 = r10.call(e10)).next.bind(r10);
    if (Array.isArray(e10) || (r10 = (function(e11) {
      if (e11) {
        if ("string" == typeof e11) return I(e11, void 0);
        var t11 = Object.prototype.toString.call(e11).slice(8, -1);
        if ("Object" === t11 && e11.constructor && (t11 = e11.constructor.name), "Map" === t11 || "Set" === t11) return Array.from(t11);
        if ("Arguments" === t11 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t11)) return I(e11, void 0);
      }
    })(e10)) || t10) {
      r10 && (e10 = r10);
      var n10 = 0;
      return function() {
        return n10 >= e10.length ? { done: true } : { done: false, value: e10[n10++] };
      };
    }
    throw TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function q(e10, t10) {
    var r10, n10, i10, o10, s10 = { label: 0, sent: function() {
      if (1 & i10[0]) throw i10[1];
      return i10[1];
    }, trys: [], ops: [] };
    return o10 = { next: a10(0), throw: a10(1), return: a10(2) }, "function" == typeof Symbol && (o10[Symbol.iterator] = function() {
      return this;
    }), o10;
    function a10(o11) {
      return function(a11) {
        var c10 = [o11, a11];
        if (r10) throw TypeError("Generator is already executing.");
        for (; s10; ) try {
          if (r10 = 1, n10 && (i10 = 2 & c10[0] ? n10.return : c10[0] ? n10.throw || ((i10 = n10.return) && i10.call(n10), 0) : n10.next) && !(i10 = i10.call(n10, c10[1])).done) return i10;
          switch (n10 = 0, i10 && (c10 = [2 & c10[0], i10.value]), c10[0]) {
            case 0:
            case 1:
              i10 = c10;
              break;
            case 4:
              return s10.label++, { value: c10[1], done: false };
            case 5:
              s10.label++, n10 = c10[1], c10 = [0];
              continue;
            case 7:
              c10 = s10.ops.pop(), s10.trys.pop();
              continue;
            default:
              if (!(i10 = (i10 = s10.trys).length > 0 && i10[i10.length - 1]) && (6 === c10[0] || 2 === c10[0])) {
                s10 = 0;
                continue;
              }
              if (3 === c10[0] && (!i10 || c10[1] > i10[0] && c10[1] < i10[3])) {
                s10.label = c10[1];
                break;
              }
              if (6 === c10[0] && s10.label < i10[1]) {
                s10.label = i10[1], i10 = c10;
                break;
              }
              if (i10 && s10.label < i10[2]) {
                s10.label = i10[2], s10.ops.push(c10);
                break;
              }
              i10[2] && s10.ops.pop(), s10.trys.pop();
              continue;
          }
          c10 = t10.call(e10, s10);
        } catch (e11) {
          c10 = [6, e11], n10 = 0;
        } finally {
          r10 = i10 = 0;
        }
        if (5 & c10[0]) throw c10[1];
        return { value: c10[0] ? c10[1] : void 0, done: true };
      };
    }
  }
  function W(e10) {
    var t10 = "function" == typeof Symbol && Symbol.iterator, r10 = t10 && e10[t10], n10 = 0;
    if (r10) return r10.call(e10);
    if (e10 && "number" == typeof e10.length) return { next: function() {
      return e10 && n10 >= e10.length && (e10 = void 0), { value: e10 && e10[n10++], done: !e10 };
    } };
    throw TypeError(t10 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  var V = Object.defineProperty, $ = function(e10, t10, r10) {
    var n10;
    return n10 = (void 0 === t10 ? "undefined" : N(t10)) !== "symbol" ? t10 + "" : t10, n10 in e10 ? V(e10, n10, { enumerable: true, configurable: true, writable: true, value: r10 }) : e10[n10] = r10;
  }, G = Object.defineProperty, H = function(e10, t10, r10) {
    var n10;
    return n10 = (void 0 === t10 ? "undefined" : N(t10)) !== "symbol" ? t10 + "" : t10, n10 in e10 ? G(e10, n10, { enumerable: true, configurable: true, writable: true, value: r10 }) : e10[n10] = r10;
  }, K = ((o1 = K || {})[o1.Document = 0] = "Document", o1[o1.DocumentType = 1] = "DocumentType", o1[o1.Element = 2] = "Element", o1[o1.Text = 3] = "Text", o1[o1.CDATA = 4] = "CDATA", o1[o1.Comment = 5] = "Comment", o1), Y = { Node: ["childNodes", "parentNode", "parentElement", "textContent"], ShadowRoot: ["host", "styleSheets"], Element: ["shadowRoot", "querySelector", "querySelectorAll"], MutationObserver: [] }, J = { Node: ["contains", "getRootNode"], ShadowRoot: ["getSelection"], Element: [], MutationObserver: ["constructor"] }, Z = {};
  function X(e10) {
    if (Z[e10]) return Z[e10];
    var t10 = globalThis[e10], r10 = t10.prototype, n10 = e10 in Y ? Y[e10] : void 0, i10 = !!(n10 && n10.every(function(e11) {
      var t11, n11;
      return !!(null == (n11 = null == (t11 = Object.getOwnPropertyDescriptor(r10, e11)) ? void 0 : t11.get) ? void 0 : n11.toString().includes("[native code]"));
    })), o10 = e10 in J ? J[e10] : void 0, s10 = !!(o10 && o10.every(function(e11) {
      var t11;
      return "function" == typeof r10[e11] && (null == (t11 = r10[e11]) ? void 0 : t11.toString().includes("[native code]"));
    }));
    if (i10 && s10 && !globalThis.Zone) return Z[e10] = t10.prototype, t10.prototype;
    try {
      var a10 = document.createElement("iframe");
      document.body.appendChild(a10);
      var c10 = a10.contentWindow;
      if (!c10) return t10.prototype;
      var u10 = c10[e10].prototype;
      if (document.body.removeChild(a10), !u10) return r10;
      return Z[e10] = u10;
    } catch (e11) {
      return r10;
    }
  }
  var Q = {};
  function ee(e10, t10, r10) {
    var n10, i10 = e10 + "." + String(r10);
    if (Q[i10]) return Q[i10].call(t10);
    var o10 = null == (n10 = Object.getOwnPropertyDescriptor(X(e10), r10)) ? void 0 : n10.get;
    return o10 ? (Q[i10] = o10, o10.call(t10)) : t10[r10];
  }
  var et = function(e10) {
    return ee("Node", e10, "childNodes");
  }, er = function(e10) {
    return ee("Node", e10, "parentNode");
  }, en = function(e10) {
    return ee("Node", e10, "parentElement");
  }, ei = function(e10) {
    return ee("Node", e10, "textContent");
  }, eo = function(e10) {
    return e10 && "shadowRoot" in e10 ? ee("Element", e10, "shadowRoot") : null;
  };
  function es(e10) {
    return e10.nodeType === e10.ELEMENT_NODE;
  }
  function ea(e10) {
    var t10, r10 = e10 && "host" in e10 && "mode" in e10 && ((t10 = e10) && "host" in t10 ? ee("ShadowRoot", t10, "host") : null) || null;
    return !!(r10 && "shadowRoot" in r10 && eo(r10) === e10);
  }
  function ec(e10) {
    return "[object ShadowRoot]" === Object.prototype.toString.call(e10);
  }
  function eu(e10) {
    try {
      var t10, r10 = e10.rules || e10.cssRules;
      if (!r10) return null;
      var n10 = e10.href;
      return !n10 && e10.ownerNode && e10.ownerNode.ownerDocument && (n10 = e10.ownerNode.ownerDocument.location.href), (t10 = Array.from(r10, function(e11) {
        return el(e11, n10);
      }).join("")).includes(" background-clip: text;") && !t10.includes(" -webkit-background-clip: text;") && (t10 = t10.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), t10;
    } catch (e11) {
      return null;
    }
  }
  function el(e10, t10) {
    if ("styleSheet" in e10) {
      var r10;
      try {
        r10 = eu(e10.styleSheet) || (function(e11) {
          var t11 = e11.cssText;
          if (t11.split('"').length < 3) return t11;
          var r11 = ["@import", "url(" + JSON.stringify(e11.href) + ")"];
          return "" === e11.layerName ? r11.push("layer") : e11.layerName && r11.push("layer(" + e11.layerName + ")"), e11.supportsText && r11.push("supports(" + e11.supportsText + ")"), e11.media.length && r11.push(e11.media.mediaText), r11.join(" ") + ";";
        })(e10);
      } catch (t11) {
        r10 = e10.cssText;
      }
      return e10.styleSheet.href ? ew(r10, e10.styleSheet.href) : r10;
    }
    var n10 = e10.cssText;
    return ("selectorText" in e10 && e10.selectorText.includes(":") && (n10 = n10.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")), t10) ? ew(n10, t10) : n10;
  }
  var ep = (function() {
    function e10() {
      H(this, "idNodeMap", /* @__PURE__ */ new Map()), H(this, "nodeMetaMap", /* @__PURE__ */ new WeakMap());
    }
    var t10 = e10.prototype;
    return t10.getId = function(e11) {
      if (!e11) return -1;
      var t11, r10 = null == (t11 = this.getMeta(e11)) ? void 0 : t11.id;
      return null != r10 ? r10 : -1;
    }, t10.getNode = function(e11) {
      return this.idNodeMap.get(e11) || null;
    }, t10.getIds = function() {
      return Array.from(this.idNodeMap.keys());
    }, t10.getMeta = function(e11) {
      return this.nodeMetaMap.get(e11) || null;
    }, t10.removeNodeFromMap = function(e11, t11) {
      var r10 = this;
      void 0 === t11 && (t11 = false);
      var n10 = this.getId(e11);
      this.idNodeMap.delete(n10), t11 && this.nodeMetaMap.delete(e11), e11.childNodes && e11.childNodes.forEach(function(e12) {
        return r10.removeNodeFromMap(e12, t11);
      });
    }, t10.has = function(e11) {
      return this.idNodeMap.has(e11);
    }, t10.hasNode = function(e11) {
      return this.nodeMetaMap.has(e11);
    }, t10.add = function(e11, t11) {
      var r10 = t11.id;
      this.idNodeMap.set(r10, e11), this.nodeMetaMap.set(e11, t11);
    }, t10.replace = function(e11, t11) {
      var r10 = this.getNode(e11);
      if (r10) {
        var n10 = this.nodeMetaMap.get(r10);
        n10 && this.nodeMetaMap.set(t11, n10);
      }
      this.idNodeMap.set(e11, t11);
    }, t10.reset = function() {
      this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }, e10;
  })();
  function eh(e10) {
    var t10 = e10.element, r10 = e10.maskInputOptions, n10 = e10.tagName, i10 = e10.type, o10 = e10.value, s10 = e10.maskInputFn, a10 = o10 || "", c10 = i10 && ed(i10);
    return (r10[n10.toLowerCase()] || c10 && r10[c10]) && (a10 = s10 ? s10(a10, t10) : "*".repeat(a10.length)), a10;
  }
  function ed(e10) {
    return e10.toLowerCase();
  }
  var ef = "__rrweb_original__";
  function eg(e10) {
    var t10 = e10.type;
    return e10.hasAttribute("data-rr-is-password") ? "password" : t10 ? ed(t10) : null;
  }
  function em(e10, t10) {
    try {
      r10 = new URL(e10, null != t10 ? t10 : window.location.href);
    } catch (e11) {
      return null;
    }
    var r10, n10, i10 = r10.pathname.match(/\.([0-9a-z]+)(?:$)/i);
    return null != (n10 = null == i10 ? void 0 : i10[1]) ? n10 : null;
  }
  var ev = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, ey = /^(?:[a-z+]+:)?\/\//i, e_ = /^www\..*/i, eb = /^(data:)([^,]*),(.*)/i;
  function ew(e10, t10) {
    return (e10 || "").replace(ev, function(e11, r10, n10, i10, o10, s10) {
      var a10 = n10 || o10 || s10, c10 = r10 || i10 || "";
      if (!a10) return e11;
      if (ey.test(a10) || e_.test(a10) || eb.test(a10)) return "url(" + c10 + a10 + c10 + ")";
      if ("/" === a10[0]) return "url(" + c10 + ((t10.indexOf("//") > -1 ? t10.split("/").slice(0, 3).join("/") : t10.split("/")[0]).split("?")[0] + a10) + c10 + ")";
      var u10 = t10.split("/"), l2 = a10.split("/");
      u10.pop();
      for (var p2, h2, d2 = z(l2); !(h2 = d2()).done; ) {
        var f2 = h2.value;
        "." !== f2 && (".." === f2 ? u10.pop() : u10.push(f2));
      }
      return "url(" + c10 + u10.join("/") + c10 + ")";
    });
  }
  function ek(e10, t10) {
    return (void 0 === t10 && (t10 = false), t10) ? e10.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "") : e10.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "").replace(/0px/g, "0");
  }
  var ex = 1, eS = RegExp("[^a-z0-9-_:]");
  function eC() {
    return ex++;
  }
  var eM = /^[^ \t\n\r\u000c]+/, eI = /^[, \t\n\r\u000c]+/, eO = /* @__PURE__ */ new WeakMap();
  function eE(e10, t10) {
    return t10 && "" !== t10.trim() ? eR(e10, t10) : t10;
  }
  function eR(e10, t10) {
    var r10 = eO.get(e10);
    if (r10 || (r10 = e10.createElement("a"), eO.set(e10, r10)), t10) {
      if (t10.startsWith("blob:") || t10.startsWith("data:")) return t10;
    } else t10 = "";
    return r10.setAttribute("href", t10), r10.href;
  }
  function eA(e10, t10, r10, n10) {
    if (!n10) return n10;
    if ("src" === r10 || "href" === r10 && ("use" !== t10 || "#" !== n10[0]) || "xlink:href" === r10 && "#" !== n10[0]) return eE(e10, n10);
    if ("background" === r10 && ("table" === t10 || "td" === t10 || "th" === t10)) return eE(e10, n10);
    if ("srcset" === r10) return (function(e11, t11) {
      if ("" === t11.trim()) return t11;
      var r11 = 0;
      function n11(e12) {
        var n12, i11 = e12.exec(t11.substring(r11));
        return i11 ? (n12 = i11[0], r11 += n12.length, n12) : "";
      }
      for (var i10 = []; n11(eI), !(r11 >= t11.length); ) {
        var o10 = n11(eM);
        if ("," === o10.slice(-1)) o10 = eE(e11, o10.substring(0, o10.length - 1)), i10.push(o10);
        else {
          var s10 = "";
          o10 = eE(e11, o10);
          for (var a10 = false; ; ) {
            var c10 = t11.charAt(r11);
            if ("" === c10) {
              i10.push((o10 + s10).trim());
              break;
            }
            if (a10) ")" === c10 && (a10 = false);
            else if ("," === c10) {
              r11 += 1, i10.push((o10 + s10).trim());
              break;
            } else "(" === c10 && (a10 = true);
            s10 += c10, r11 += 1;
          }
        }
      }
      return i10.join(", ");
    })(e10, n10);
    if ("style" === r10) return ew(n10, eR(e10));
    else if ("object" === t10 && "data" === r10) return eE(e10, n10);
    return n10;
  }
  function eT(e10, t10, r10) {
    return ("video" === e10 || "audio" === e10) && "autoplay" === t10;
  }
  function eP(e10, t10, r10) {
    if (!e10) return false;
    if (e10.nodeType !== e10.ELEMENT_NODE) return !!r10 && eP(er(e10), t10, r10);
    for (var n10 = e10.classList.length; n10--; ) {
      var i10 = e10.classList[n10];
      if (t10.test(i10)) return true;
    }
    return !!r10 && eP(er(e10), t10, r10);
  }
  function eD(e10, t10, r10, n10) {
    var i10;
    if (es(e10)) {
      if (!et(i10 = e10).length) return false;
    } else {
      if (null === en(e10)) return false;
      i10 = en(e10);
    }
    try {
      if ("string" == typeof t10) {
        if (n10) {
          if (i10.closest("." + t10)) return true;
        } else if (i10.classList.contains(t10)) return true;
      } else if (eP(i10, t10, n10)) return true;
      if (r10) {
        if (n10) {
          if (i10.closest(r10)) return true;
        } else if (i10.matches(r10)) return true;
      }
    } catch (e11) {
    }
    return false;
  }
  function eL(e10) {
    return null == e10 ? "" : e10.toLowerCase();
  }
  function eF(e10, t10) {
    var r10 = t10.doc, n10 = t10.mirror, i10 = t10.blockClass, o10 = t10.blockSelector, s10 = t10.maskTextClass, a10 = t10.maskTextSelector, c10 = t10.skipChild, u10 = void 0 !== c10 && c10, l2 = t10.inlineStylesheet, p2 = void 0 === l2 || l2, h2 = t10.maskInputOptions, d2 = void 0 === h2 ? {} : h2, f2 = t10.maskTextFn, g2 = t10.maskInputFn, m2 = t10.slimDOMOptions, v2 = t10.dataURLOptions, y2 = void 0 === v2 ? {} : v2, _2 = t10.inlineImages, b2 = void 0 !== _2 && _2, w2 = t10.recordCanvas, k2 = void 0 !== w2 && w2, x2 = t10.onSerialize, S2 = t10.onIframeLoad, C2 = t10.iframeLoadTimeout, M2 = void 0 === C2 ? 5e3 : C2, I2 = t10.onStylesheetLoad, O2 = t10.stylesheetLoadTimeout, E2 = void 0 === O2 ? 5e3 : O2, R2 = t10.keepIframeSrcFn, A2 = void 0 === R2 ? function() {
      return false;
    } : R2, T2 = t10.newlyAddedElement, P2 = t10.cssCaptured, D2 = t10.needsMask, F2 = t10.preserveWhiteSpace, j2 = void 0 === F2 || F2;
    D2 || (D2 = eD(e10, s10, a10, void 0 === D2));
    var N2 = (function(e11, t11) {
      var r11, n11, i11, o11, s11, a11, c11, u11, l3, p3, h3, d3 = t11.doc, f3 = t11.mirror, g3 = t11.blockClass, m3 = t11.blockSelector, v3 = t11.needsMask, y3 = t11.inlineStylesheet, _3 = t11.maskInputOptions, b3 = t11.maskTextFn, w3 = t11.maskInputFn, k3 = t11.dataURLOptions, x3 = t11.inlineImages, S3 = t11.recordCanvas, C3 = t11.keepIframeSrcFn, M3 = t11.newlyAddedElement, I3 = t11.cssCaptured, O3 = (function(e12, t12) {
        if (t12.hasNode(e12)) {
          var r12 = t12.getId(e12);
          return 1 === r12 ? void 0 : r12;
        }
      })(d3, f3);
      switch (e11.nodeType) {
        case e11.DOCUMENT_NODE:
          if ("CSS1Compat" !== e11.compatMode) return { type: K.Document, childNodes: [], compatMode: e11.compatMode };
          return { type: K.Document, childNodes: [] };
        case e11.DOCUMENT_TYPE_NODE:
          return { type: K.DocumentType, name: e11.name, publicId: e11.publicId, systemId: e11.systemId, rootId: O3 };
        case e11.ELEMENT_NODE:
          return (function(e12, t12) {
            for (var r12, n12 = t12.doc, i12 = t12.blockClass, o12 = t12.blockSelector, s12 = t12.inlineStylesheet, a12 = t12.maskInputOptions, c12 = void 0 === a12 ? {} : a12, u12 = t12.maskInputFn, l4 = t12.dataURLOptions, p4 = void 0 === l4 ? {} : l4, h4 = t12.inlineImages, d4 = t12.recordCanvas, f4 = t12.keepIframeSrcFn, g4 = t12.newlyAddedElement, m4 = t12.rootId, v4 = (function(e13, t13, r13) {
              try {
                if ("string" == typeof t13) {
                  if (e13.classList.contains(t13)) return true;
                } else for (var n13 = e13.classList.length; n13--; ) {
                  var i13 = e13.classList[n13];
                  if (t13.test(i13)) return true;
                }
                if (r13) return e13.matches(r13);
              } catch (e14) {
              }
              return false;
            })(e12, i12, o12), y4 = (function(e13) {
              if (L(e13, HTMLFormElement)) return "form";
              var t13 = ed(e13.tagName);
              return eS.test(t13) ? "div" : t13;
            })(e12), _4 = {}, b4 = e12.attributes.length, w4 = 0; w4 < b4; w4++) {
              var k4 = e12.attributes[w4];
              eT(y4, k4.name, k4.value) || (_4[k4.name] = eA(n12, y4, ed(k4.name), k4.value));
            }
            if ("link" === y4 && s12) {
              var x4 = Array.from(n12.styleSheets).find(function(t13) {
                return t13.href === e12.href;
              }), S4 = null;
              x4 && (S4 = eu(x4)), S4 && (delete _4.rel, delete _4.href, _4._cssText = S4);
            }
            if ("style" === y4 && e12.sheet) {
              var C4 = eu(e12.sheet);
              C4 && (e12.childNodes.length > 1 && (C4 = (function(e13, t13, r13) {
                void 0 === r13 && (r13 = false);
                var n13 = Array.from(t13.childNodes), i13 = [], o13 = 0;
                if (n13.length > 1 && e13 && "string" == typeof e13) {
                  for (var s13 = ek(e13, r13), a13 = s13.length / e13.length, c13 = 1; c13 < n13.length; c13++) if (n13[c13].textContent && "string" == typeof n13[c13].textContent) {
                    for (var u13 = ek(n13[c13].textContent, r13), l5 = 3; l5 < u13.length && (u13[l5].match(/[a-zA-Z0-9]/) || -1 !== u13.indexOf(u13.substring(0, l5), 1)); l5++) ;
                    for (; l5 < u13.length; l5++) {
                      var p5 = u13.substring(0, l5), h5 = s13.split(p5), d5 = -1;
                      if (2 === h5.length) d5 = h5[0].length;
                      else if (h5.length > 2 && "" === h5[0] && "" !== n13[c13 - 1].textContent) d5 = s13.indexOf(p5, 1);
                      else if (1 === h5.length) {
                        if (p5 = p5.substring(0, p5.length - 1), (h5 = s13.split(p5)).length <= 1) return i13.push(e13), i13;
                        l5 = 101;
                      } else l5 === u13.length - 1 && (d5 = s13.indexOf(p5));
                      if (h5.length >= 2 && l5 > 100) {
                        var f5 = n13[c13 - 1].textContent;
                        if (f5 && "string" == typeof f5) {
                          var g5 = ek(f5).length;
                          d5 = s13.indexOf(p5, g5);
                        }
                        -1 === d5 && (d5 = h5[0].length);
                      }
                      if (-1 !== d5) {
                        for (var m5 = Math.floor(d5 / a13); m5 > 0 && m5 < e13.length; ) {
                          if ((o13 += 1) > 50 * n13.length) return i13.push(e13), i13;
                          var v5 = ek(e13.substring(0, m5), r13);
                          if (v5.length === d5) {
                            i13.push(e13.substring(0, m5)), e13 = e13.substring(m5), s13 = s13.substring(d5);
                            break;
                          }
                          v5.length < d5 ? m5 += Math.max(1, Math.floor((d5 - v5.length) / a13)) : m5 -= Math.max(1, Math.floor((v5.length - d5) * a13));
                        }
                        break;
                      }
                    }
                  }
                }
                return i13.push(e13), i13;
              })(C4, e12).join("/* rr_split */")), _4._cssText = C4);
            }
            if ("input" === y4 || "textarea" === y4 || "select" === y4) {
              var M4 = e12.value, I4 = e12.checked;
              "radio" !== _4.type && "checkbox" !== _4.type && "submit" !== _4.type && "button" !== _4.type && M4 ? _4.value = eh({ element: e12, type: eg(e12), tagName: y4, value: M4, maskInputOptions: c12, maskInputFn: u12 }) : I4 && (_4.checked = I4);
            }
            if ("option" === y4 && (e12.selected && !c12.select ? _4.selected = true : delete _4.selected), "dialog" === y4 && e12.open && (_4.rr_open_mode = e12.matches("dialog:modal") ? "modal" : "non-modal"), "canvas" === y4 && d4) {
              if ("2d" === e12.__context) !(function(e13) {
                var t13 = e13.getContext("2d");
                if (!t13) return true;
                for (var r13 = 0; r13 < e13.width; r13 += 50) for (var n13 = 0; n13 < e13.height; n13 += 50) {
                  var i13 = t13.getImageData;
                  if (new Uint32Array((ef in i13 ? i13[ef] : i13).call(t13, r13, n13, Math.min(50, e13.width - r13), Math.min(50, e13.height - n13)).data.buffer).some(function(e14) {
                    return 0 !== e14;
                  })) return false;
                }
                return true;
              })(e12) && (_4.rr_dataURL = e12.toDataURL(p4.type, p4.quality));
              else if (!("__context" in e12)) {
                var O4 = e12.toDataURL(p4.type, p4.quality), E3 = n12.createElement("canvas");
                E3.width = e12.width, E3.height = e12.height, O4 !== E3.toDataURL(p4.type, p4.quality) && (_4.rr_dataURL = O4);
              }
            }
            if ("img" === y4 && h4) {
              sr || (sn = (sr = n12.createElement("canvas")).getContext("2d"));
              var R3 = e12.currentSrc || e12.getAttribute("src") || "<unknown-src>", A3 = e12.crossOrigin, T3 = function() {
                e12.removeEventListener("load", T3);
                try {
                  sr.width = e12.naturalWidth, sr.height = e12.naturalHeight, sn.drawImage(e12, 0, 0), _4.rr_dataURL = sr.toDataURL(p4.type, p4.quality);
                } catch (t13) {
                  if ("anonymous" !== e12.crossOrigin) {
                    e12.crossOrigin = "anonymous", e12.complete && 0 !== e12.naturalWidth ? T3() : e12.addEventListener("load", T3);
                    return;
                  }
                  console.warn("Cannot inline img src=" + R3 + "! Error: " + t13);
                }
                "anonymous" === e12.crossOrigin && (A3 ? _4.crossOrigin = A3 : e12.removeAttribute("crossorigin"));
              };
              e12.complete && 0 !== e12.naturalWidth ? T3() : e12.addEventListener("load", T3);
            }
            if ("audio" === y4 || "video" === y4) {
              var P3 = _4;
              P3.rr_mediaState = e12.paused ? "paused" : "played", P3.rr_mediaCurrentTime = e12.currentTime, P3.rr_mediaPlaybackRate = e12.playbackRate, P3.rr_mediaMuted = e12.muted, P3.rr_mediaLoop = e12.loop, P3.rr_mediaVolume = e12.volume;
            }
            if (!(void 0 !== g4 && g4) && (e12.scrollLeft && (_4.rr_scrollLeft = e12.scrollLeft), e12.scrollTop && (_4.rr_scrollTop = e12.scrollTop)), v4) {
              var D3 = e12.getBoundingClientRect(), F3 = D3.width, j3 = D3.height;
              _4 = { class: _4.class, rr_width: "" + F3 + "px", rr_height: "" + j3 + "px" };
            }
            "iframe" !== y4 || f4(_4.src) || (e12.contentDocument || (_4.rr_src = _4.src), delete _4.src);
            try {
              customElements.get(y4) && (r12 = true);
            } catch (e13) {
            }
            return { type: K.Element, tagName: y4, attributes: _4, childNodes: [], isSVG: !!("svg" === e12.tagName || e12.ownerSVGElement) || void 0, needBlock: v4, rootId: m4, isCustom: r12 };
          })(e11, { doc: d3, blockClass: g3, blockSelector: m3, inlineStylesheet: y3, maskInputOptions: void 0 === _3 ? {} : _3, maskInputFn: w3, dataURLOptions: void 0 === k3 ? {} : k3, inlineImages: x3, recordCanvas: S3, keepIframeSrcFn: C3, newlyAddedElement: void 0 !== M3 && M3, rootId: O3 });
        case e11.TEXT_NODE:
          return r11 = e11, i11 = (n11 = { doc: d3, needsMask: v3, maskTextFn: b3, rootId: O3, cssCaptured: void 0 !== I3 && I3 }).needsMask, o11 = n11.maskTextFn, s11 = n11.rootId, a11 = n11.cssCaptured, u11 = (c11 = er(r11)) && c11.tagName, l3 = "", p3 = "STYLE" === u11 || void 0, (h3 = "SCRIPT" === u11 || void 0) ? l3 = "SCRIPT_PLACEHOLDER" : !a11 && (l3 = ei(r11), p3 && l3 && (l3 = ew(l3, eR(n11.doc)))), !p3 && !h3 && l3 && i11 && (l3 = o11 ? o11(l3, en(r11)) : l3.replace(/[\S]/g, "*")), { type: K.Text, textContent: l3 || "", rootId: s11 };
        case e11.CDATA_SECTION_NODE:
          return { type: K.CDATA, textContent: "", rootId: O3 };
        case e11.COMMENT_NODE:
          return { type: K.Comment, textContent: ei(e11) || "", rootId: O3 };
        default:
          return false;
      }
    })(e10, { doc: r10, mirror: n10, blockClass: i10, blockSelector: o10, needsMask: D2, inlineStylesheet: p2, maskInputOptions: d2, maskTextFn: f2, maskInputFn: g2, dataURLOptions: y2, inlineImages: b2, recordCanvas: k2, keepIframeSrcFn: A2, newlyAddedElement: void 0 !== T2 && T2, cssCaptured: void 0 !== P2 && P2 });
    if (!N2) return console.warn(e10, "not serialized"), null;
    V2 = n10.hasNode(e10) ? n10.getId(e10) : !(function(e11, t11) {
      if (t11.comment && e11.type === K.Comment) return true;
      if (e11.type === K.Element) {
        if (t11.script && ("script" === e11.tagName || "link" === e11.tagName && ("preload" === e11.attributes.rel && "script" === e11.attributes.as || "modulepreload" === e11.attributes.rel) || "link" === e11.tagName && "prefetch" === e11.attributes.rel && "string" == typeof e11.attributes.href && "js" === em(e11.attributes.href))) return true;
        else if (t11.headFavicon && ("link" === e11.tagName && "shortcut icon" === e11.attributes.rel || "meta" === e11.tagName && (eL(e11.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === eL(e11.attributes.name) || "icon" === eL(e11.attributes.rel) || "apple-touch-icon" === eL(e11.attributes.rel) || "shortcut icon" === eL(e11.attributes.rel)))) return true;
        else if ("meta" === e11.tagName) {
          if (t11.headMetaDescKeywords && eL(e11.attributes.name).match(/^description|keywords$/)) return true;
          else if (t11.headMetaSocial && (eL(e11.attributes.property).match(/^(og|twitter|fb):/) || eL(e11.attributes.name).match(/^(og|twitter):/) || "pinterest" === eL(e11.attributes.name))) return true;
          else if (t11.headMetaRobots && ("robots" === eL(e11.attributes.name) || "googlebot" === eL(e11.attributes.name) || "bingbot" === eL(e11.attributes.name))) return true;
          else if (t11.headMetaHttpEquiv && void 0 !== e11.attributes["http-equiv"]) return true;
          else if (t11.headMetaAuthorship && ("author" === eL(e11.attributes.name) || "generator" === eL(e11.attributes.name) || "framework" === eL(e11.attributes.name) || "publisher" === eL(e11.attributes.name) || "progid" === eL(e11.attributes.name) || eL(e11.attributes.property).match(/^article:/) || eL(e11.attributes.property).match(/^product:/))) return true;
          else if (t11.headMetaVerification && ("google-site-verification" === eL(e11.attributes.name) || "yandex-verification" === eL(e11.attributes.name) || "csrf-token" === eL(e11.attributes.name) || "p:domain_verify" === eL(e11.attributes.name) || "verify-v1" === eL(e11.attributes.name) || "verification" === eL(e11.attributes.name) || "shopify-checkout-api-token" === eL(e11.attributes.name))) return true;
        }
      }
      return false;
    })(N2, m2) && (j2 || N2.type !== K.Text || N2.textContent.replace(/^\s+|\s+$/gm, "").length) ? eC() : -2;
    var U2 = Object.assign(N2, { id: V2 });
    if (n10.add(e10, U2), -2 === V2) return null;
    x2 && x2(e10);
    var B2 = !u10;
    if (U2.type === K.Element) {
      B2 = B2 && !U2.needBlock, delete U2.needBlock;
      var q2 = eo(e10);
      q2 && ec(q2) && (U2.isShadowHost = true);
    }
    if ((U2.type === K.Document || U2.type === K.Element) && B2) {
      m2.headWhitespace && U2.type === K.Element && "head" === U2.tagName && (j2 = false);
      var W2 = { doc: r10, mirror: n10, blockClass: i10, blockSelector: o10, needsMask: D2, maskTextClass: s10, maskTextSelector: a10, skipChild: u10, inlineStylesheet: p2, maskInputOptions: d2, maskTextFn: f2, maskInputFn: g2, slimDOMOptions: m2, dataURLOptions: y2, inlineImages: b2, recordCanvas: k2, preserveWhiteSpace: j2, onSerialize: x2, onIframeLoad: S2, iframeLoadTimeout: M2, onStylesheetLoad: I2, stylesheetLoadTimeout: E2, keepIframeSrcFn: A2, cssCaptured: false };
      if (U2.type === K.Element && "textarea" === U2.tagName && void 0 !== U2.attributes.value) ;
      else {
        U2.type === K.Element && void 0 !== U2.attributes._cssText && "string" == typeof U2.attributes._cssText && (W2.cssCaptured = true);
        for (var V2, $2, G2 = z(Array.from(et(e10))); !($2 = G2()).done; ) {
          var H2 = eF($2.value, W2);
          H2 && U2.childNodes.push(H2);
        }
      }
      var Y2 = null;
      if (es(e10) && (Y2 = eo(e10))) for (var J2, Z2 = z(Array.from(et(Y2))); !(J2 = Z2()).done; ) {
        var X2 = eF(J2.value, W2);
        X2 && (ec(Y2) && (X2.isShadow = true), U2.childNodes.push(X2));
      }
    }
    var Q2 = er(e10);
    return Q2 && ea(Q2) && ec(Q2) && (U2.isShadow = true), U2.type === K.Element && "iframe" === U2.tagName && (function(e11, t11, r11) {
      var n11, i11 = e11.contentWindow;
      if (i11) {
        var o11 = false;
        try {
          n11 = i11.document.readyState;
        } catch (e12) {
          return;
        }
        if ("complete" !== n11) {
          var s11 = setTimeout(function() {
            o11 || (t11(), o11 = true);
          }, r11);
          e11.addEventListener("load", function() {
            clearTimeout(s11), o11 = true, t11();
          });
          return;
        }
        var a11 = "about:blank";
        if (i11.location.href !== a11 || e11.src === a11 || "" === e11.src) return setTimeout(t11, 0), e11.addEventListener("load", t11);
        e11.addEventListener("load", t11);
      }
    })(e10, function() {
      var t11 = e10.contentDocument;
      if (t11 && S2) {
        var r11 = eF(t11, { doc: t11, mirror: n10, blockClass: i10, blockSelector: o10, needsMask: D2, maskTextClass: s10, maskTextSelector: a10, skipChild: false, inlineStylesheet: p2, maskInputOptions: d2, maskTextFn: f2, maskInputFn: g2, slimDOMOptions: m2, dataURLOptions: y2, inlineImages: b2, recordCanvas: k2, preserveWhiteSpace: j2, onSerialize: x2, onIframeLoad: S2, iframeLoadTimeout: M2, onStylesheetLoad: I2, stylesheetLoadTimeout: E2, keepIframeSrcFn: A2 });
        r11 && S2(e10, r11);
      }
    }, M2), U2.type === K.Element && "link" === U2.tagName && "string" == typeof U2.attributes.rel && ("stylesheet" === U2.attributes.rel || "preload" === U2.attributes.rel && "string" == typeof U2.attributes.href && "css" === em(U2.attributes.href)) && (function(e11, t11, r11) {
      var n11, i11 = false;
      try {
        n11 = e11.sheet;
      } catch (e12) {
        return;
      }
      if (!n11) {
        var o11 = setTimeout(function() {
          i11 || (t11(), i11 = true);
        }, r11);
        e11.addEventListener("load", function() {
          clearTimeout(o11), i11 = true, t11();
        });
      }
    })(e10, function() {
      if (I2) {
        var t11 = eF(e10, { doc: r10, mirror: n10, blockClass: i10, blockSelector: o10, needsMask: D2, maskTextClass: s10, maskTextSelector: a10, skipChild: false, inlineStylesheet: p2, maskInputOptions: d2, maskTextFn: f2, maskInputFn: g2, slimDOMOptions: m2, dataURLOptions: y2, inlineImages: b2, recordCanvas: k2, preserveWhiteSpace: j2, onSerialize: x2, onIframeLoad: S2, iframeLoadTimeout: M2, onStylesheetLoad: I2, stylesheetLoadTimeout: E2, keepIframeSrcFn: A2 });
        t11 && I2(e10, t11);
      }
    }, E2), U2;
  }
  var ej = { exports: {} }, eN = String, eU = function() {
    return { isColorSupported: false, reset: eN, bold: eN, dim: eN, italic: eN, underline: eN, inverse: eN, hidden: eN, strikethrough: eN, black: eN, red: eN, green: eN, yellow: eN, blue: eN, magenta: eN, cyan: eN, white: eN, gray: eN, bgBlack: eN, bgRed: eN, bgGreen: eN, bgYellow: eN, bgBlue: eN, bgMagenta: eN, bgCyan: eN, bgWhite: eN };
  };
  ej.exports = eU(), ej.exports.createColors = eU;
  var eB = ej.exports, ez = (function(e10) {
    if (e10.__esModule) return e10;
    var t10 = e10.default;
    if ("function" == typeof t10) {
      var r10 = function e11() {
        return L(this, e11) ? Reflect.construct(t10, arguments, this.constructor) : t10.apply(this, arguments);
      };
      r10.prototype = t10.prototype;
    } else r10 = {};
    return Object.defineProperty(r10, "__esModule", { value: true }), Object.keys(e10).forEach(function(t11) {
      var n10 = Object.getOwnPropertyDescriptor(e10, t11);
      Object.defineProperty(r10, t11, n10.get ? n10 : { enumerable: true, get: function() {
        return e10[t11];
      } });
    }), r10;
  })(Object.freeze(Object.defineProperty({ __proto__: null, default: {} }, Symbol.toStringTag, { value: "Module" }))), eq = (function(e10) {
    function t10(r11, n10, i10, o10, s10, a10) {
      var c10;
      return (c10 = e10.call(this, r11) || this).name = "CssSyntaxError", c10.reason = r11, s10 && (c10.file = s10), o10 && (c10.source = o10), a10 && (c10.plugin = a10), void 0 !== n10 && void 0 !== i10 && ("number" == typeof n10 ? (c10.line = n10, c10.column = i10) : (c10.line = n10.line, c10.column = n10.column, c10.endLine = i10.line, c10.endColumn = i10.column)), c10.setMessage(), Error.captureStackTrace && Error.captureStackTrace(c10, t10), c10;
    }
    D(t10, e10);
    var r10 = t10.prototype;
    return r10.setMessage = function() {
      this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", void 0 !== this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
    }, r10.showSourceCode = function(e11) {
      var t11, r11, n10 = this;
      if (!this.source) return "";
      var i10 = this.source;
      null == e11 && (e11 = eB.isColorSupported), ez && e11 && (i10 = ez(i10));
      var o10 = i10.split(/\r?\n/), s10 = Math.max(this.line - 3, 0), a10 = Math.min(this.line + 2, o10.length), c10 = String(a10).length;
      if (e11) {
        var u10 = eB.createColors(true), l2 = u10.bold, p2 = u10.gray, h2 = u10.red;
        t11 = function(e12) {
          return l2(h2(e12));
        }, r11 = function(e12) {
          return p2(e12);
        };
      } else t11 = r11 = function(e12) {
        return e12;
      };
      return o10.slice(s10, a10).map(function(e12, i11) {
        var o11 = s10 + 1 + i11, a11 = " " + (" " + o11).slice(-c10) + " | ";
        if (o11 === n10.line) {
          var u11 = r11(a11.replace(/\d/g, " ")) + e12.slice(0, n10.column - 1).replace(/[^\t]/g, " ");
          return t11(">") + r11(a11) + e12 + "\n " + u11 + t11("^");
        }
        return " " + r11(a11) + e12;
      }).join("\n");
    }, r10.toString = function() {
      var e11 = this.showSourceCode();
      return e11 && (e11 = "\n\n" + e11 + "\n"), this.name + ": " + this.message + e11;
    }, t10;
  })(U(Error));
  eq.default = eq;
  var eW = {};
  eW.isClean = /* @__PURE__ */ Symbol("isClean"), eW.my = /* @__PURE__ */ Symbol("my");
  var eV = { after: "\n", beforeClose: "\n", beforeComment: "\n", beforeDecl: "\n", beforeOpen: " ", beforeRule: "\n", colon: ": ", commentLeft: " ", commentRight: " ", emptyBody: "", indent: "    ", semicolon: false }, e$ = (function() {
    function e10(e11) {
      this.builder = e11;
    }
    var t10 = e10.prototype;
    return t10.atrule = function(e11, t11) {
      var r10 = "@" + e11.name, n10 = e11.params ? this.rawValue(e11, "params") : "";
      if (void 0 !== e11.raws.afterName ? r10 += e11.raws.afterName : n10 && (r10 += " "), e11.nodes) this.block(e11, r10 + n10);
      else {
        var i10 = (e11.raws.between || "") + (t11 ? ";" : "");
        this.builder(r10 + n10 + i10, e11);
      }
    }, t10.beforeAfter = function(e11, t11) {
      for (var r10 = "decl" === e11.type ? this.raw(e11, null, "beforeDecl") : "comment" === e11.type ? this.raw(e11, null, "beforeComment") : "before" === t11 ? this.raw(e11, null, "beforeRule") : this.raw(e11, null, "beforeClose"), n10 = e11.parent, i10 = 0; n10 && "root" !== n10.type; ) i10 += 1, n10 = n10.parent;
      if (r10.includes("\n")) {
        var o10 = this.raw(e11, null, "indent");
        if (o10.length) for (var s10 = 0; s10 < i10; s10++) r10 += o10;
      }
      return r10;
    }, t10.block = function(e11, t11) {
      var r10, n10 = this.raw(e11, "between", "beforeOpen");
      this.builder(t11 + n10 + "{", e11, "start"), e11.nodes && e11.nodes.length ? (this.body(e11), r10 = this.raw(e11, "after")) : r10 = this.raw(e11, "after", "emptyBody"), r10 && this.builder(r10), this.builder("}", e11, "end");
    }, t10.body = function(e11) {
      for (var t11 = e11.nodes.length - 1; t11 > 0 && "comment" === e11.nodes[t11].type; ) t11 -= 1;
      for (var r10 = this.raw(e11, "semicolon"), n10 = 0; n10 < e11.nodes.length; n10++) {
        var i10 = e11.nodes[n10], o10 = this.raw(i10, "before");
        o10 && this.builder(o10), this.stringify(i10, t11 !== n10 || r10);
      }
    }, t10.comment = function(e11) {
      var t11 = this.raw(e11, "left", "commentLeft"), r10 = this.raw(e11, "right", "commentRight");
      this.builder("/*" + t11 + e11.text + r10 + "*/", e11);
    }, t10.decl = function(e11, t11) {
      var r10 = this.raw(e11, "between", "colon"), n10 = e11.prop + r10 + this.rawValue(e11, "value");
      e11.important && (n10 += e11.raws.important || " !important"), t11 && (n10 += ";"), this.builder(n10, e11);
    }, t10.document = function(e11) {
      this.body(e11);
    }, t10.raw = function(e11, t11, r10) {
      if (r10 || (r10 = t11), t11 && void 0 !== (n10 = e11.raws[t11])) return n10;
      var n10, i10 = e11.parent;
      if ("before" === r10 && (!i10 || "root" === i10.type && i10.first === e11 || i10 && "document" === i10.type)) return "";
      if (!i10) return eV[r10];
      var o10 = e11.root();
      if (o10.rawCache || (o10.rawCache = {}), void 0 !== o10.rawCache[r10]) return o10.rawCache[r10];
      if ("before" === r10 || "after" === r10) return this.beforeAfter(e11, r10);
      var s10, a10 = "raw" + ((s10 = r10)[0].toUpperCase() + s10.slice(1));
      return this[a10] ? n10 = this[a10](o10, e11) : o10.walk(function(e12) {
        if (void 0 !== (n10 = e12.raws[t11])) return false;
      }), void 0 === n10 && (n10 = eV[r10]), o10.rawCache[r10] = n10, n10;
    }, t10.rawBeforeClose = function(e11) {
      var t11;
      return e11.walk(function(e12) {
        if (e12.nodes && e12.nodes.length > 0 && void 0 !== e12.raws.after) return (t11 = e12.raws.after).includes("\n") && (t11 = t11.replace(/[^\n]+$/, "")), false;
      }), t11 && (t11 = t11.replace(/\S/g, "")), t11;
    }, t10.rawBeforeComment = function(e11, t11) {
      var r10;
      return e11.walkComments(function(e12) {
        if (void 0 !== e12.raws.before) return (r10 = e12.raws.before).includes("\n") && (r10 = r10.replace(/[^\n]+$/, "")), false;
      }), void 0 === r10 ? r10 = this.raw(t11, null, "beforeDecl") : r10 && (r10 = r10.replace(/\S/g, "")), r10;
    }, t10.rawBeforeDecl = function(e11, t11) {
      var r10;
      return e11.walkDecls(function(e12) {
        if (void 0 !== e12.raws.before) return (r10 = e12.raws.before).includes("\n") && (r10 = r10.replace(/[^\n]+$/, "")), false;
      }), void 0 === r10 ? r10 = this.raw(t11, null, "beforeRule") : r10 && (r10 = r10.replace(/\S/g, "")), r10;
    }, t10.rawBeforeOpen = function(e11) {
      var t11;
      return e11.walk(function(e12) {
        if ("decl" !== e12.type && void 0 !== (t11 = e12.raws.between)) return false;
      }), t11;
    }, t10.rawBeforeRule = function(e11) {
      var t11;
      return e11.walk(function(r10) {
        if (r10.nodes && (r10.parent !== e11 || e11.first !== r10) && void 0 !== r10.raws.before) return (t11 = r10.raws.before).includes("\n") && (t11 = t11.replace(/[^\n]+$/, "")), false;
      }), t11 && (t11 = t11.replace(/\S/g, "")), t11;
    }, t10.rawColon = function(e11) {
      var t11;
      return e11.walkDecls(function(e12) {
        if (void 0 !== e12.raws.between) return t11 = e12.raws.between.replace(/[^\s:]/g, ""), false;
      }), t11;
    }, t10.rawEmptyBody = function(e11) {
      var t11;
      return e11.walk(function(e12) {
        if (e12.nodes && 0 === e12.nodes.length && void 0 !== (t11 = e12.raws.after)) return false;
      }), t11;
    }, t10.rawIndent = function(e11) {
      var t11;
      return e11.raws.indent ? e11.raws.indent : (e11.walk(function(r10) {
        var n10 = r10.parent;
        if (n10 && n10 !== e11 && n10.parent && n10.parent === e11 && void 0 !== r10.raws.before) {
          var i10 = r10.raws.before.split("\n");
          return t11 = (t11 = i10[i10.length - 1]).replace(/\S/g, ""), false;
        }
      }), t11);
    }, t10.rawSemicolon = function(e11) {
      var t11;
      return e11.walk(function(e12) {
        if (e12.nodes && e12.nodes.length && "decl" === e12.last.type && void 0 !== (t11 = e12.raws.semicolon)) return false;
      }), t11;
    }, t10.rawValue = function(e11, t11) {
      var r10 = e11[t11], n10 = e11.raws[t11];
      return n10 && n10.value === r10 ? n10.raw : r10;
    }, t10.root = function(e11) {
      this.body(e11), e11.raws.after && this.builder(e11.raws.after);
    }, t10.rule = function(e11) {
      this.block(e11, this.rawValue(e11, "selector")), e11.raws.ownSemicolon && this.builder(e11.raws.ownSemicolon, e11, "end");
    }, t10.stringify = function(e11, t11) {
      if (!this[e11.type]) throw Error("Unknown AST node type " + e11.type + ". Maybe you need to change PostCSS stringifier.");
      this[e11.type](e11, t11);
    }, e10;
  })();
  function eG(e10, t10) {
    new e$(t10).stringify(e10);
  }
  e$.default = e$, eG.default = eG;
  var eH = eW.isClean, eK = eW.my, eY = (function() {
    function e10(e11) {
      for (var t11 in void 0 === e11 && (e11 = {}), this.raws = {}, this[eH] = false, this[eK] = true, e11) if ("nodes" === t11) {
        this.nodes = [];
        for (var r10, n10 = z(e11[t11]); !(r10 = n10()).done; ) {
          var i10 = r10.value;
          "function" == typeof i10.clone ? this.append(i10.clone()) : this.append(i10);
        }
      } else this[t11] = e11[t11];
    }
    var t10 = e10.prototype;
    return t10.addToError = function(e11) {
      if (e11.postcssNode = this, e11.stack && this.source && /\n\s{4}at /.test(e11.stack)) {
        var t11 = this.source;
        e11.stack = e11.stack.replace(/\n\s{4}at /, "$&" + t11.input.from + ":" + t11.start.line + ":" + t11.start.column + "$&");
      }
      return e11;
    }, t10.after = function(e11) {
      return this.parent.insertAfter(this, e11), this;
    }, t10.assign = function(e11) {
      for (var t11 in void 0 === e11 && (e11 = {}), e11) this[t11] = e11[t11];
      return this;
    }, t10.before = function(e11) {
      return this.parent.insertBefore(this, e11), this;
    }, t10.cleanRaws = function(e11) {
      delete this.raws.before, delete this.raws.after, e11 || delete this.raws.between;
    }, t10.clone = function(e11) {
      void 0 === e11 && (e11 = {});
      var t11 = (function e12(t12, r11) {
        var n10 = new t12.constructor();
        for (var i10 in t12) if (Object.prototype.hasOwnProperty.call(t12, i10) && "proxyCache" !== i10) {
          var o10 = t12[i10], s10 = void 0 === o10 ? "undefined" : N(o10);
          "parent" === i10 && "object" === s10 ? r11 && (n10[i10] = r11) : "source" === i10 ? n10[i10] = o10 : Array.isArray(o10) ? n10[i10] = o10.map(function(t13) {
            return e12(t13, n10);
          }) : ("object" === s10 && null !== o10 && (o10 = e12(o10)), n10[i10] = o10);
        }
        return n10;
      })(this);
      for (var r10 in e11) t11[r10] = e11[r10];
      return t11;
    }, t10.cloneAfter = function(e11) {
      void 0 === e11 && (e11 = {});
      var t11 = this.clone(e11);
      return this.parent.insertAfter(this, t11), t11;
    }, t10.cloneBefore = function(e11) {
      void 0 === e11 && (e11 = {});
      var t11 = this.clone(e11);
      return this.parent.insertBefore(this, t11), t11;
    }, t10.error = function(e11, t11) {
      if (void 0 === t11 && (t11 = {}), this.source) {
        var r10 = this.rangeBy(t11), n10 = r10.end, i10 = r10.start;
        return this.source.input.error(e11, { column: i10.column, line: i10.line }, { column: n10.column, line: n10.line }, t11);
      }
      return new eq(e11);
    }, t10.getProxyProcessor = function() {
      return { get: function(e11, t11) {
        return "proxyOf" === t11 ? e11 : "root" === t11 ? function() {
          return e11.root().toProxy();
        } : e11[t11];
      }, set: function(e11, t11, r10) {
        return e11[t11] === r10 || (e11[t11] = r10, ("prop" === t11 || "value" === t11 || "name" === t11 || "params" === t11 || "important" === t11 || "text" === t11) && e11.markDirty(), true);
      } };
    }, t10.markDirty = function() {
      if (this[eH]) {
        this[eH] = false;
        for (var e11 = this; e11 = e11.parent; ) e11[eH] = false;
      }
    }, t10.next = function() {
      if (this.parent) {
        var e11 = this.parent.index(this);
        return this.parent.nodes[e11 + 1];
      }
    }, t10.positionBy = function(e11, t11) {
      var r10 = this.source.start;
      if (e11.index) r10 = this.positionInside(e11.index, t11);
      else if (e11.word) {
        var n10 = (t11 = this.toString()).indexOf(e11.word);
        -1 !== n10 && (r10 = this.positionInside(n10, t11));
      }
      return r10;
    }, t10.positionInside = function(e11, t11) {
      for (var r10 = t11 || this.toString(), n10 = this.source.start.column, i10 = this.source.start.line, o10 = 0; o10 < e11; o10++) "\n" === r10[o10] ? (n10 = 1, i10 += 1) : n10 += 1;
      return { column: n10, line: i10 };
    }, t10.prev = function() {
      if (this.parent) {
        var e11 = this.parent.index(this);
        return this.parent.nodes[e11 - 1];
      }
    }, t10.rangeBy = function(e11) {
      var t11 = { column: this.source.start.column, line: this.source.start.line }, r10 = this.source.end ? { column: this.source.end.column + 1, line: this.source.end.line } : { column: t11.column + 1, line: t11.line };
      if (e11.word) {
        var n10 = this.toString(), i10 = n10.indexOf(e11.word);
        -1 !== i10 && (t11 = this.positionInside(i10, n10), r10 = this.positionInside(i10 + e11.word.length, n10));
      } else e11.start ? t11 = { column: e11.start.column, line: e11.start.line } : e11.index && (t11 = this.positionInside(e11.index)), e11.end ? r10 = { column: e11.end.column, line: e11.end.line } : "number" == typeof e11.endIndex ? r10 = this.positionInside(e11.endIndex) : e11.index && (r10 = this.positionInside(e11.index + 1));
      return (r10.line < t11.line || r10.line === t11.line && r10.column <= t11.column) && (r10 = { column: t11.column + 1, line: t11.line }), { end: r10, start: t11 };
    }, t10.raw = function(e11, t11) {
      return new e$().raw(this, e11, t11);
    }, t10.remove = function() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }, t10.replaceWith = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r10 = 0; r10 < e11; r10++) t11[r10] = arguments[r10];
      if (this.parent) {
        for (var n10, i10 = this, o10 = false, s10 = z(t11); !(n10 = s10()).done; ) {
          var a10 = n10.value;
          a10 === this ? o10 = true : o10 ? (this.parent.insertAfter(i10, a10), i10 = a10) : this.parent.insertBefore(i10, a10);
        }
        o10 || this.remove();
      }
      return this;
    }, t10.root = function() {
      for (var e11 = this; e11.parent && "document" !== e11.parent.type; ) e11 = e11.parent;
      return e11;
    }, t10.toJSON = function(e11, t11) {
      var r10 = {}, n10 = null == t11;
      t11 = t11 || /* @__PURE__ */ new Map();
      var i10 = 0;
      for (var o10 in this) if (Object.prototype.hasOwnProperty.call(this, o10) && "parent" !== o10 && "proxyCache" !== o10) {
        var s10 = this[o10];
        if (Array.isArray(s10)) r10[o10] = s10.map(function(e12) {
          return (void 0 === e12 ? "undefined" : N(e12)) === "object" && e12.toJSON ? e12.toJSON(null, t11) : e12;
        });
        else if ((void 0 === s10 ? "undefined" : N(s10)) === "object" && s10.toJSON) r10[o10] = s10.toJSON(null, t11);
        else if ("source" === o10) {
          var a10 = t11.get(s10.input);
          null == a10 && (a10 = i10, t11.set(s10.input, i10), i10++), r10[o10] = { end: s10.end, inputId: a10, start: s10.start };
        } else r10[o10] = s10;
      }
      return n10 && (r10.inputs = [].concat(t11.keys()).map(function(e12) {
        return e12.toJSON();
      })), r10;
    }, t10.toProxy = function() {
      return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
    }, t10.toString = function(e11) {
      void 0 === e11 && (e11 = eG), e11.stringify && (e11 = e11.stringify);
      var t11 = "";
      return e11(this, function(e12) {
        t11 += e12;
      }), t11;
    }, t10.warn = function(e11, t11, r10) {
      var n10 = { node: this };
      for (var i10 in r10) n10[i10] = r10[i10];
      return e11.warn(t11, n10);
    }, A(e10, [{ key: "proxyOf", get: function() {
      return this;
    } }]), e10;
  })();
  eY.default = eY;
  var eJ = (function(e10) {
    function t10(t11) {
      var r10;
      return t11 && void 0 !== t11.value && "string" != typeof t11.value && (t11 = T({}, t11, { value: String(t11.value) })), (r10 = e10.call(this, t11) || this).type = "decl", r10;
    }
    return D(t10, e10), A(t10, [{ key: "variable", get: function() {
      return this.prop.startsWith("--") || "$" === this.prop[0];
    } }]), t10;
  })(eY);
  eJ.default = eJ;
  var eZ = ez.SourceMapConsumer, eX = ez.SourceMapGenerator, eQ = ez.existsSync, e0 = ez.readFileSync, e1 = ez.dirname, e2 = ez.join, e3 = (function() {
    function e10(e11, t11) {
      if (false !== t11.map) {
        this.loadAnnotation(e11), this.inline = this.startWith(this.annotation, "data:");
        var r10 = t11.map ? t11.map.prev : void 0, n10 = this.loadMap(t11.from, r10);
        !this.mapFile && t11.from && (this.mapFile = t11.from), this.mapFile && (this.root = e1(this.mapFile)), n10 && (this.text = n10);
      }
    }
    var t10 = e10.prototype;
    return t10.consumer = function() {
      return this.consumerCache || (this.consumerCache = new eZ(this.text)), this.consumerCache;
    }, t10.decodeInline = function(e11) {
      if (/^data:application\/json;charset=utf-?8,/.test(e11) || /^data:application\/json,/.test(e11)) return decodeURIComponent(e11.substr(RegExp.lastMatch.length));
      if (/^data:application\/json;charset=utf-?8;base64,/.test(e11) || /^data:application\/json;base64,/.test(e11)) {
        var t11;
        return t11 = e11.substr(RegExp.lastMatch.length), _.Buffer.from(t11, "base64").toString();
      }
      throw Error("Unsupported source map encoding " + e11.match(/data:application\/json;([^,]+),/)[1]);
    }, t10.getAnnotationURL = function(e11) {
      return e11.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }, t10.isMap = function(e11) {
      return (void 0 === e11 ? "undefined" : N(e11)) === "object" && ("string" == typeof e11.mappings || "string" == typeof e11._mappings || Array.isArray(e11.sections));
    }, t10.loadAnnotation = function(e11) {
      var t11 = e11.match(/\/\*\s*# sourceMappingURL=/gm);
      if (t11) {
        var r10 = e11.lastIndexOf(t11.pop()), n10 = e11.indexOf("*/", r10);
        r10 > -1 && n10 > -1 && (this.annotation = this.getAnnotationURL(e11.substring(r10, n10)));
      }
    }, t10.loadFile = function(e11) {
      if (this.root = e1(e11), eQ(e11)) return this.mapFile = e11, e0(e11, "utf-8").toString().trim();
    }, t10.loadMap = function(e11, t11) {
      if (false === t11) return false;
      if (t11) if ("string" == typeof t11) return t11;
      else if ("function" == typeof t11) {
        var r10 = t11(e11);
        if (r10) {
          var n10 = this.loadFile(r10);
          if (!n10) throw Error("Unable to load previous source map: " + r10.toString());
          return n10;
        }
      } else if (L(t11, eZ)) return eX.fromSourceMap(t11).toString();
      else if (L(t11, eX)) return t11.toString();
      else if (this.isMap(t11)) return JSON.stringify(t11);
      else throw Error("Unsupported previous source map format: " + t11.toString());
      else if (this.inline) return this.decodeInline(this.annotation);
      else if (this.annotation) {
        var i10 = this.annotation;
        return e11 && (i10 = e2(e1(e11), i10)), this.loadFile(i10);
      }
    }, t10.startWith = function(e11, t11) {
      return !!e11 && e11.substr(0, t11.length) === t11;
    }, t10.withContent = function() {
      return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }, e10;
  })();
  e3.default = e3;
  var e5 = ez.SourceMapConsumer, e9 = ez.SourceMapGenerator, e6 = ez.fileURLToPath, e4 = ez.pathToFileURL, e8 = ez.isAbsolute, e7 = ez.resolve, te = function(e10) {
    void 0 === e10 && (e10 = 21);
    for (var t10 = "", r10 = e10; r10--; ) t10 += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64 * Math.random() | 0];
    return t10;
  }, tt = /* @__PURE__ */ Symbol("fromOffsetCache"), tr = !!(e5 && e9), tn = !!(e7 && e8), ti = (function() {
    function e10(e11, t11) {
      if (void 0 === t11 && (t11 = {}), null == e11 || (void 0 === e11 ? "undefined" : N(e11)) === "object" && !e11.toString) throw Error("PostCSS received " + e11 + " instead of CSS string");
      if (this.css = e11.toString(), "\uFEFF" === this.css[0] || "\uFFFE" === this.css[0] ? (this.hasBOM = true, this.css = this.css.slice(1)) : this.hasBOM = false, t11.from && (!tn || /^\w+:\/\//.test(t11.from) || e8(t11.from) ? this.file = t11.from : this.file = e7(t11.from)), tn && tr) {
        var r10 = new e3(this.css, t11);
        if (r10.text) {
          this.map = r10;
          var n10 = r10.consumer().file;
          !this.file && n10 && (this.file = this.mapResolve(n10));
        }
      }
      this.file || (this.id = "<input css " + te(6) + ">"), this.map && (this.map.file = this.from);
    }
    var t10 = e10.prototype;
    return t10.error = function(e11, t11, r10, n10) {
      if (void 0 === n10 && (n10 = {}), t11 && (void 0 === t11 ? "undefined" : N(t11)) === "object") {
        var i10, o10, s10, a10 = t11, c10 = r10;
        if ("number" == typeof a10.offset) {
          var u10 = this.fromOffset(a10.offset);
          t11 = u10.line, r10 = u10.col;
        } else t11 = a10.line, r10 = a10.column;
        if ("number" == typeof c10.offset) {
          var l2 = this.fromOffset(c10.offset);
          o10 = l2.line, s10 = l2.col;
        } else o10 = c10.line, s10 = c10.column;
      } else if (!r10) {
        var p2 = this.fromOffset(t11);
        t11 = p2.line, r10 = p2.col;
      }
      var h2 = this.origin(t11, r10, o10, s10);
      return (i10 = h2 ? new eq(e11, void 0 === h2.endLine ? h2.line : { column: h2.column, line: h2.line }, void 0 === h2.endLine ? h2.column : { column: h2.endColumn, line: h2.endLine }, h2.source, h2.file, n10.plugin) : new eq(e11, void 0 === o10 ? t11 : { column: r10, line: t11 }, void 0 === o10 ? r10 : { column: s10, line: o10 }, this.css, this.file, n10.plugin)).input = { column: r10, endColumn: s10, endLine: o10, line: t11, source: this.css }, this.file && (e4 && (i10.input.url = e4(this.file).toString()), i10.input.file = this.file), i10;
    }, t10.fromOffset = function(e11) {
      if (this[tt]) a10 = this[tt];
      else {
        var t11 = this.css.split("\n");
        a10 = Array(t11.length);
        for (var r10 = 0, n10 = 0, i10 = t11.length; n10 < i10; n10++) a10[n10] = r10, r10 += t11[n10].length + 1;
        this[tt] = a10;
      }
      s10 = a10[a10.length - 1];
      var o10 = 0;
      if (e11 >= s10) o10 = a10.length - 1;
      else for (var s10, a10, c10, u10 = a10.length - 2; o10 < u10; ) if (e11 < a10[c10 = o10 + (u10 - o10 >> 1)]) u10 = c10 - 1;
      else if (e11 >= a10[c10 + 1]) o10 = c10 + 1;
      else {
        o10 = c10;
        break;
      }
      return { col: e11 - a10[o10] + 1, line: o10 + 1 };
    }, t10.mapResolve = function(e11) {
      return /^\w+:\/\//.test(e11) ? e11 : e7(this.map.consumer().sourceRoot || this.map.root || ".", e11);
    }, t10.origin = function(e11, t11, r10, n10) {
      if (!this.map) return false;
      var i10, o10, s10 = this.map.consumer(), a10 = s10.originalPositionFor({ column: t11, line: e11 });
      if (!a10.source) return false;
      "number" == typeof r10 && (i10 = s10.originalPositionFor({ column: n10, line: r10 })), o10 = e8(a10.source) ? e4(a10.source) : new URL(a10.source, this.map.consumer().sourceRoot || e4(this.map.mapFile));
      var c10 = { column: a10.column, endColumn: i10 && i10.column, endLine: i10 && i10.line, line: a10.line, url: o10.toString() };
      if ("file:" === o10.protocol) if (e6) c10.file = e6(o10);
      else throw Error("file: protocol is not available in this PostCSS build");
      var u10 = s10.sourceContentFor(a10.source);
      return u10 && (c10.source = u10), c10;
    }, t10.toJSON = function() {
      for (var e11 = {}, t11 = 0, r10 = ["hasBOM", "css", "file", "id"]; t11 < r10.length; t11++) {
        var n10 = r10[t11];
        null != this[n10] && (e11[n10] = this[n10]);
      }
      return this.map && (e11.map = T({}, this.map), e11.map.consumerCache && (e11.map.consumerCache = void 0)), e11;
    }, A(e10, [{ key: "from", get: function() {
      return this.file || this.id;
    } }]), e10;
  })();
  ti.default = ti, ez && ez.registerInput && ez.registerInput(ti);
  var to = ez.SourceMapConsumer, ts = ez.SourceMapGenerator, ta = ez.dirname, tc = ez.relative, tu = ez.resolve, tl = ez.sep, tp = ez.pathToFileURL, th = !!(to && ts), td = !!(ta && tu && tc && tl), tf = (function() {
    function e10(e11, t11, r10, n10) {
      this.stringify = e11, this.mapOpts = r10.map || {}, this.root = t11, this.opts = r10, this.css = n10, this.originalCSS = n10, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    var t10 = e10.prototype;
    return t10.addAnnotation = function() {
      var e11 = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" == typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" == typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map", t11 = "\n";
      this.css.includes("\r\n") && (t11 = "\r\n"), this.css += t11 + "/*# sourceMappingURL=" + e11 + " */";
    }, t10.applyPrevMaps = function() {
      for (var e11, t11 = z(this.previous()); !(e11 = t11()).done; ) {
        var r10 = e11.value, n10 = this.toUrl(this.path(r10.file)), i10 = r10.root || ta(r10.file), o10 = void 0;
        false === this.mapOpts.sourcesContent ? (o10 = new to(r10.text)).sourcesContent && (o10.sourcesContent = null) : o10 = r10.consumer(), this.map.applySourceMap(o10, n10, this.toUrl(this.path(i10)));
      }
    }, t10.clearAnnotation = function() {
      if (false !== this.mapOpts.annotation) if (this.root) for (var e11, t11 = this.root.nodes.length - 1; t11 >= 0; t11--) "comment" === (e11 = this.root.nodes[t11]).type && 0 === e11.text.indexOf("# sourceMappingURL=") && this.root.removeChild(t11);
      else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""));
    }, t10.generate = function() {
      if (this.clearAnnotation(), td && th && this.isMap()) return this.generateMap();
      var e11 = "";
      return this.stringify(this.root, function(t11) {
        e11 += t11;
      }), [e11];
    }, t10.generateMap = function() {
      if (this.root) this.generateString();
      else if (1 === this.previous().length) {
        var e11 = this.previous()[0].consumer();
        e11.file = this.outputFile(), this.map = ts.fromSourceMap(e11, { ignoreInvalidMapping: true });
      } else this.map = new ts({ file: this.outputFile(), ignoreInvalidMapping: true }), this.map.addMapping({ generated: { column: 0, line: 1 }, original: { column: 0, line: 1 }, source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>" });
      return (this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline()) ? [this.css] : [this.css, this.map];
    }, t10.generateString = function() {
      var e11, t11, r10 = this;
      this.css = "", this.map = new ts({ file: this.outputFile(), ignoreInvalidMapping: true });
      var n10 = 1, i10 = 1, o10 = "<no source>", s10 = { generated: { column: 0, line: 0 }, original: { column: 0, line: 0 }, source: "" };
      this.stringify(this.root, function(a10, c10, u10) {
        if (r10.css += a10, c10 && "end" !== u10 && (s10.generated.line = n10, s10.generated.column = i10 - 1, c10.source && c10.source.start ? (s10.source = r10.sourcePath(c10), s10.original.line = c10.source.start.line, s10.original.column = c10.source.start.column - 1) : (s10.source = o10, s10.original.line = 1, s10.original.column = 0), r10.map.addMapping(s10)), (e11 = a10.match(/\n/g)) ? (n10 += e11.length, t11 = a10.lastIndexOf("\n"), i10 = a10.length - t11) : i10 += a10.length, c10 && "start" !== u10) {
          var l2 = c10.parent || { raws: {} };
          (!("decl" === c10.type || "atrule" === c10.type && !c10.nodes) || c10 !== l2.last || l2.raws.semicolon) && (c10.source && c10.source.end ? (s10.source = r10.sourcePath(c10), s10.original.line = c10.source.end.line, s10.original.column = c10.source.end.column - 1, s10.generated.line = n10, s10.generated.column = i10 - 2) : (s10.source = o10, s10.original.line = 1, s10.original.column = 0, s10.generated.line = n10, s10.generated.column = i10 - 1), r10.map.addMapping(s10));
        }
      });
    }, t10.isAnnotation = function() {
      return !!this.isInline() || (void 0 !== this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some(function(e11) {
        return e11.annotation;
      }));
    }, t10.isInline = function() {
      if (void 0 !== this.mapOpts.inline) return this.mapOpts.inline;
      var e11 = this.mapOpts.annotation;
      return (void 0 === e11 || true === e11) && (!this.previous().length || this.previous().some(function(e12) {
        return e12.inline;
      }));
    }, t10.isMap = function() {
      return void 0 !== this.opts.map ? !!this.opts.map : this.previous().length > 0;
    }, t10.isSourcesContent = function() {
      return void 0 !== this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some(function(e11) {
        return e11.withContent();
      });
    }, t10.outputFile = function() {
      return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
    }, t10.path = function(e11) {
      if (this.mapOpts.absolute || 60 === e11.charCodeAt(0) || /^\w+:\/\//.test(e11)) return e11;
      var t11 = this.memoizedPaths.get(e11);
      if (t11) return t11;
      var r10 = this.opts.to ? ta(this.opts.to) : ".";
      "string" == typeof this.mapOpts.annotation && (r10 = ta(tu(r10, this.mapOpts.annotation)));
      var n10 = tc(r10, e11);
      return this.memoizedPaths.set(e11, n10), n10;
    }, t10.previous = function() {
      var e11 = this;
      if (!this.previousMaps) if (this.previousMaps = [], this.root) this.root.walk(function(t12) {
        if (t12.source && t12.source.input.map) {
          var r10 = t12.source.input.map;
          e11.previousMaps.includes(r10) || e11.previousMaps.push(r10);
        }
      });
      else {
        var t11 = new ti(this.originalCSS, this.opts);
        t11.map && this.previousMaps.push(t11.map);
      }
      return this.previousMaps;
    }, t10.setSourcesContent = function() {
      var e11 = this, t11 = {};
      if (this.root) this.root.walk(function(r11) {
        if (r11.source) {
          var n10 = r11.source.input.from;
          if (n10 && !t11[n10]) {
            t11[n10] = true;
            var i10 = e11.usesFileUrls ? e11.toFileUrl(n10) : e11.toUrl(e11.path(n10));
            e11.map.setSourceContent(i10, r11.source.input.css);
          }
        }
      });
      else if (this.css) {
        var r10 = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
        this.map.setSourceContent(r10, this.css);
      }
    }, t10.sourcePath = function(e11) {
      return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e11.source.input.from) : this.toUrl(this.path(e11.source.input.from));
    }, t10.toBase64 = function(e11) {
      return _.Buffer.from(e11).toString("base64");
    }, t10.toFileUrl = function(e11) {
      var t11 = this.memoizedFileURLs.get(e11);
      if (t11) return t11;
      if (tp) {
        var r10 = tp(e11).toString();
        return this.memoizedFileURLs.set(e11, r10), r10;
      }
      throw Error("`map.absolute` option is not available in this PostCSS build");
    }, t10.toUrl = function(e11) {
      var t11 = this.memoizedURLs.get(e11);
      if (t11) return t11;
      "\\" === tl && (e11 = e11.replace(/\\/g, "/"));
      var r10 = encodeURI(e11).replace(/[#?]/g, encodeURIComponent);
      return this.memoizedURLs.set(e11, r10), r10;
    }, e10;
  })(), tg = (function(e10) {
    function t10(t11) {
      var r10;
      return (r10 = e10.call(this, t11) || this).type = "comment", r10;
    }
    return D(t10, e10), t10;
  })(eY);
  tg.default = tg;
  var tm = eW.isClean, tv = eW.my, ty = (function(e10) {
    function t10() {
      return e10.apply(this, arguments) || this;
    }
    D(t10, e10);
    var r10 = t10.prototype;
    return r10.append = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      for (var n10, i10 = z(t11); !(n10 = i10()).done; ) for (var o10, s10 = n10.value, a10 = this.normalize(s10, this.last), c10 = z(a10); !(o10 = c10()).done; ) {
        var u10 = o10.value;
        this.proxyOf.nodes.push(u10);
      }
      return this.markDirty(), this;
    }, r10.cleanRaws = function(t11) {
      if (e10.prototype.cleanRaws.call(this, t11), this.nodes) for (var r11, n10 = z(this.nodes); !(r11 = n10()).done; ) r11.value.cleanRaws(t11);
    }, r10.each = function(e11) {
      if (this.proxyOf.nodes) {
        for (var t11, r11, n10 = this.getIterator(); this.indexes[n10] < this.proxyOf.nodes.length && (t11 = this.indexes[n10], false !== (r11 = e11(this.proxyOf.nodes[t11], t11))); ) this.indexes[n10] += 1;
        return delete this.indexes[n10], r11;
      }
    }, r10.every = function(e11) {
      return this.nodes.every(e11);
    }, r10.getIterator = function() {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
      var e11 = this.lastEach;
      return this.indexes[e11] = 0, e11;
    }, r10.getProxyProcessor = function() {
      return { get: function(e11, t11) {
        if ("proxyOf" === t11) return e11;
        if (!e11[t11]) return e11[t11];
        if ("each" === t11 || "string" == typeof t11 && t11.startsWith("walk")) return function() {
          for (var r11 = arguments.length, n10 = Array(r11), i10 = 0; i10 < r11; i10++) n10[i10] = arguments[i10];
          return e11[t11].apply(e11, [].concat(n10.map(function(e12) {
            return "function" == typeof e12 ? function(t12, r12) {
              return e12(t12.toProxy(), r12);
            } : e12;
          })));
        };
        if ("every" === t11 || "some" === t11) return function(r11) {
          return e11[t11](function(e12) {
            for (var t12 = arguments.length, n10 = Array(t12 > 1 ? t12 - 1 : 0), i10 = 1; i10 < t12; i10++) n10[i10 - 1] = arguments[i10];
            return r11.apply(void 0, [].concat([e12.toProxy()], n10));
          });
        };
        if ("root" === t11) return function() {
          return e11.root().toProxy();
        };
        else if ("nodes" === t11) return e11.nodes.map(function(e12) {
          return e12.toProxy();
        });
        else if ("first" === t11 || "last" === t11) return e11[t11].toProxy();
        else return e11[t11];
      }, set: function(e11, t11, r11) {
        return e11[t11] === r11 || (e11[t11] = r11, ("name" === t11 || "params" === t11 || "selector" === t11) && e11.markDirty(), true);
      } };
    }, r10.index = function(e11) {
      return "number" == typeof e11 ? e11 : (e11.proxyOf && (e11 = e11.proxyOf), this.proxyOf.nodes.indexOf(e11));
    }, r10.insertAfter = function(e11, t11) {
      var r11, n10 = this.index(e11), i10 = this.normalize(t11, this.proxyOf.nodes[n10]).reverse();
      n10 = this.index(e11);
      for (var o10, s10 = z(i10); !(o10 = s10()).done; ) {
        var a10 = o10.value;
        this.proxyOf.nodes.splice(n10 + 1, 0, a10);
      }
      for (var c10 in this.indexes) n10 < (r11 = this.indexes[c10]) && (this.indexes[c10] = r11 + i10.length);
      return this.markDirty(), this;
    }, r10.insertBefore = function(e11, t11) {
      var r11, n10 = this.index(e11), i10 = 0 === n10 && "prepend", o10 = this.normalize(t11, this.proxyOf.nodes[n10], i10).reverse();
      n10 = this.index(e11);
      for (var s10, a10 = z(o10); !(s10 = a10()).done; ) {
        var c10 = s10.value;
        this.proxyOf.nodes.splice(n10, 0, c10);
      }
      for (var u10 in this.indexes) n10 <= (r11 = this.indexes[u10]) && (this.indexes[u10] = r11 + o10.length);
      return this.markDirty(), this;
    }, r10.normalize = function(e11, r11) {
      var n10 = this;
      if ("string" == typeof e11) e11 = (function e12(t11) {
        return t11.map(function(t12) {
          return t12.nodes && (t12.nodes = e12(t12.nodes)), delete t12.source, t12;
        });
      })(si(e11).nodes);
      else if (void 0 === e11) e11 = [];
      else if (Array.isArray(e11)) {
        e11 = e11.slice(0);
        for (var i10, o10 = z(e11); !(i10 = o10()).done; ) {
          var s10 = i10.value;
          s10.parent && s10.parent.removeChild(s10, "ignore");
        }
      } else if ("root" === e11.type && "document" !== this.type) {
        e11 = e11.nodes.slice(0);
        for (var a10, c10 = z(e11); !(a10 = c10()).done; ) {
          var u10 = a10.value;
          u10.parent && u10.parent.removeChild(u10, "ignore");
        }
      } else if (e11.type) e11 = [e11];
      else if (e11.prop) {
        if (void 0 === e11.value) throw Error("Value field is missed in node creation");
        "string" != typeof e11.value && (e11.value = String(e11.value)), e11 = [new eJ(e11)];
      } else if (e11.selector) e11 = [new so(e11)];
      else if (e11.name) e11 = [new ss(e11)];
      else if (e11.text) e11 = [new tg(e11)];
      else throw Error("Unknown node type in node creation");
      return e11.map(function(e12) {
        return e12[tv] || t10.rebuild(e12), (e12 = e12.proxyOf).parent && e12.parent.removeChild(e12), e12[tm] && (function e13(t11) {
          if (t11[tm] = false, t11.proxyOf.nodes) for (var r12, n11 = z(t11.proxyOf.nodes); !(r12 = n11()).done; ) e13(r12.value);
        })(e12), void 0 === e12.raws.before && r11 && void 0 !== r11.raws.before && (e12.raws.before = r11.raws.before.replace(/\S/g, "")), e12.parent = n10.proxyOf, e12;
      });
    }, r10.prepend = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      t11 = t11.reverse();
      for (var n10, i10 = z(t11); !(n10 = i10()).done; ) {
        for (var o10, s10 = n10.value, a10 = this.normalize(s10, this.first, "prepend").reverse(), c10 = z(a10); !(o10 = c10()).done; ) {
          var u10 = o10.value;
          this.proxyOf.nodes.unshift(u10);
        }
        for (var l2 in this.indexes) this.indexes[l2] = this.indexes[l2] + a10.length;
      }
      return this.markDirty(), this;
    }, r10.push = function(e11) {
      return e11.parent = this, this.proxyOf.nodes.push(e11), this;
    }, r10.removeAll = function() {
      for (var e11, t11 = z(this.proxyOf.nodes); !(e11 = t11()).done; ) e11.value.parent = void 0;
      return this.proxyOf.nodes = [], this.markDirty(), this;
    }, r10.removeChild = function(e11) {
      var t11;
      for (var r11 in e11 = this.index(e11), this.proxyOf.nodes[e11].parent = void 0, this.proxyOf.nodes.splice(e11, 1), this.indexes) (t11 = this.indexes[r11]) >= e11 && (this.indexes[r11] = t11 - 1);
      return this.markDirty(), this;
    }, r10.replaceValues = function(e11, t11, r11) {
      return r11 || (r11 = t11, t11 = {}), this.walkDecls(function(n10) {
        t11.props && !t11.props.includes(n10.prop) || (!t11.fast || n10.value.includes(t11.fast)) && (n10.value = n10.value.replace(e11, r11));
      }), this.markDirty(), this;
    }, r10.some = function(e11) {
      return this.nodes.some(e11);
    }, r10.walk = function(e11) {
      return this.each(function(t11, r11) {
        var n10;
        try {
          n10 = e11(t11, r11);
        } catch (e12) {
          throw t11.addToError(e12);
        }
        return false !== n10 && t11.walk && (n10 = t11.walk(e11)), n10;
      });
    }, r10.walkAtRules = function(e11, t11) {
      return t11 ? L(e11, RegExp) ? this.walk(function(r11, n10) {
        if ("atrule" === r11.type && e11.test(r11.name)) return t11(r11, n10);
      }) : this.walk(function(r11, n10) {
        if ("atrule" === r11.type && r11.name === e11) return t11(r11, n10);
      }) : (t11 = e11, this.walk(function(e12, r11) {
        if ("atrule" === e12.type) return t11(e12, r11);
      }));
    }, r10.walkComments = function(e11) {
      return this.walk(function(t11, r11) {
        if ("comment" === t11.type) return e11(t11, r11);
      });
    }, r10.walkDecls = function(e11, t11) {
      return t11 ? L(e11, RegExp) ? this.walk(function(r11, n10) {
        if ("decl" === r11.type && e11.test(r11.prop)) return t11(r11, n10);
      }) : this.walk(function(r11, n10) {
        if ("decl" === r11.type && r11.prop === e11) return t11(r11, n10);
      }) : (t11 = e11, this.walk(function(e12, r11) {
        if ("decl" === e12.type) return t11(e12, r11);
      }));
    }, r10.walkRules = function(e11, t11) {
      return t11 ? L(e11, RegExp) ? this.walk(function(r11, n10) {
        if ("rule" === r11.type && e11.test(r11.selector)) return t11(r11, n10);
      }) : this.walk(function(r11, n10) {
        if ("rule" === r11.type && r11.selector === e11) return t11(r11, n10);
      }) : (t11 = e11, this.walk(function(e12, r11) {
        if ("rule" === e12.type) return t11(e12, r11);
      }));
    }, A(t10, [{ key: "first", get: function() {
      if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
    } }, { key: "last", get: function() {
      if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    } }]), t10;
  })(eY);
  ty.registerParse = function(e10) {
    si = e10;
  }, ty.registerRule = function(e10) {
    so = e10;
  }, ty.registerAtRule = function(e10) {
    ss = e10;
  }, ty.registerRoot = function(e10) {
    sa = e10;
  }, ty.default = ty, ty.rebuild = function(e10) {
    "atrule" === e10.type ? Object.setPrototypeOf(e10, ss.prototype) : "rule" === e10.type ? Object.setPrototypeOf(e10, so.prototype) : "decl" === e10.type ? Object.setPrototypeOf(e10, eJ.prototype) : "comment" === e10.type ? Object.setPrototypeOf(e10, tg.prototype) : "root" === e10.type && Object.setPrototypeOf(e10, sa.prototype), e10[tv] = true, e10.nodes && e10.nodes.forEach(function(e11) {
      ty.rebuild(e11);
    });
  };
  var t_ = (function(e10) {
    function t10(t11) {
      var r10;
      return (r10 = e10.call(this, T({ type: "document" }, t11)) || this).nodes || (r10.nodes = []), r10;
    }
    return D(t10, e10), t10.prototype.toResult = function(e11) {
      return void 0 === e11 && (e11 = {}), new sc(new su(), this, e11).stringify();
    }, t10;
  })(ty);
  t_.registerLazyResult = function(e10) {
    sc = e10;
  }, t_.registerProcessor = function(e10) {
    su = e10;
  }, t_.default = t_;
  var tb = (function() {
    function e10(e11, t10) {
      if (void 0 === t10 && (t10 = {}), this.type = "warning", this.text = e11, t10.node && t10.node.source) {
        var r10 = t10.node.rangeBy(t10);
        this.line = r10.start.line, this.column = r10.start.column, this.endLine = r10.end.line, this.endColumn = r10.end.column;
      }
      for (var n10 in t10) this[n10] = t10[n10];
    }
    return e10.prototype.toString = function() {
      return this.node ? this.node.error(this.text, { index: this.index, plugin: this.plugin, word: this.word }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
    }, e10;
  })();
  tb.default = tb;
  var tw = (function() {
    function e10(e11, t11, r10) {
      this.processor = e11, this.messages = [], this.root = t11, this.opts = r10, this.css = void 0, this.map = void 0;
    }
    var t10 = e10.prototype;
    return t10.toString = function() {
      return this.css;
    }, t10.warn = function(e11, t11) {
      void 0 === t11 && (t11 = {}), !t11.plugin && this.lastPlugin && this.lastPlugin.postcssPlugin && (t11.plugin = this.lastPlugin.postcssPlugin);
      var r10 = new tb(e11, t11);
      return this.messages.push(r10), r10;
    }, t10.warnings = function() {
      return this.messages.filter(function(e11) {
        return "warning" === e11.type;
      });
    }, A(e10, [{ key: "content", get: function() {
      return this.css;
    } }]), e10;
  })();
  tw.default = tw;
  var tk = /[\t\n\f\r "#'()/;[\\\]{}]/g, tx = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, tS = /.[\r\n"'(/\\]/, tC = /[\da-f]/i, tM = (function(e10) {
    function t10(t11) {
      var r11;
      return (r11 = e10.call(this, t11) || this).type = "atrule", r11;
    }
    D(t10, e10);
    var r10 = t10.prototype;
    return r10.append = function() {
      for (var t11, r11 = arguments.length, n10 = Array(r11), i10 = 0; i10 < r11; i10++) n10[i10] = arguments[i10];
      return this.proxyOf.nodes || (this.nodes = []), (t11 = e10.prototype.append).call.apply(t11, [].concat([this], n10));
    }, r10.prepend = function() {
      for (var t11, r11 = arguments.length, n10 = Array(r11), i10 = 0; i10 < r11; i10++) n10[i10] = arguments[i10];
      return this.proxyOf.nodes || (this.nodes = []), (t11 = e10.prototype.prepend).call.apply(t11, [].concat([this], n10));
    }, t10;
  })(ty);
  tM.default = tM, ty.registerAtRule(tM);
  var tI = (function(e10) {
    function t10(t11) {
      var r11;
      return (r11 = e10.call(this, t11) || this).type = "root", r11.nodes || (r11.nodes = []), r11;
    }
    D(t10, e10);
    var r10 = t10.prototype;
    return r10.normalize = function(t11, r11, n10) {
      var i10 = e10.prototype.normalize.call(this, t11);
      if (r11) {
        if ("prepend" === n10) this.nodes.length > 1 ? r11.raws.before = this.nodes[1].raws.before : delete r11.raws.before;
        else if (this.first !== r11) for (var o10, s10 = z(i10); !(o10 = s10()).done; ) o10.value.raws.before = r11.raws.before;
      }
      return i10;
    }, r10.removeChild = function(t11, r11) {
      var n10 = this.index(t11);
      return !r11 && 0 === n10 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n10].raws.before), e10.prototype.removeChild.call(this, t11);
    }, r10.toResult = function(e11) {
      return void 0 === e11 && (e11 = {}), new sl(new sp(), this, e11).stringify();
    }, t10;
  })(ty);
  tI.registerLazyResult = function(e10) {
    sl = e10;
  }, tI.registerProcessor = function(e10) {
    sp = e10;
  }, tI.default = tI, ty.registerRoot(tI);
  var tO = { comma: function(e10) {
    return tO.split(e10, [","], true);
  }, space: function(e10) {
    return tO.split(e10, [" ", "\n", "	"]);
  }, split: function(e10, t10, r10) {
    for (var n10, i10 = [], o10 = "", s10 = false, a10 = 0, c10 = false, u10 = "", l2 = false, p2 = z(e10); !(n10 = p2()).done; ) {
      var h2 = n10.value;
      l2 ? l2 = false : "\\" === h2 ? l2 = true : c10 ? h2 === u10 && (c10 = false) : '"' === h2 || "'" === h2 ? (c10 = true, u10 = h2) : "(" === h2 ? a10 += 1 : ")" === h2 ? a10 > 0 && (a10 -= 1) : 0 === a10 && t10.includes(h2) && (s10 = true), s10 ? ("" !== o10 && i10.push(o10.trim()), o10 = "", s10 = false) : o10 += h2;
    }
    return (r10 || "" !== o10) && i10.push(o10.trim()), i10;
  } };
  tO.default = tO;
  var tE = (function(e10) {
    function t10(t11) {
      var r10;
      return (r10 = e10.call(this, t11) || this).type = "rule", r10.nodes || (r10.nodes = []), r10;
    }
    return D(t10, e10), A(t10, [{ key: "selectors", get: function() {
      return tO.comma(this.selector);
    }, set: function(e11) {
      var t11 = this.selector ? this.selector.match(/,\s*/) : null, r10 = t11 ? t11[0] : "," + this.raw("between", "beforeOpen");
      this.selector = e11.join(r10);
    } }]), t10;
  })(ty);
  tE.default = tE, ty.registerRule(tE);
  var tR = function(e10, t10) {
    void 0 === t10 && (t10 = {});
    var r10, n10, i10, o10, s10, a10, c10, u10, l2, p2, h2 = e10.css.valueOf(), d2 = t10.ignoreErrors, f2 = h2.length, g2 = 0, m2 = [], v2 = [];
    function y2(t11) {
      throw e10.error("Unclosed " + t11, g2);
    }
    return { back: function(e11) {
      v2.push(e11);
    }, endOfFile: function() {
      return 0 === v2.length && g2 >= f2;
    }, nextToken: function(e11) {
      if (v2.length) return v2.pop();
      if (!(g2 >= f2)) {
        var t11 = !!e11 && e11.ignoreUnclosed;
        switch (r10 = h2.charCodeAt(g2)) {
          case 10:
          case 32:
          case 9:
          case 13:
          case 12:
            n10 = g2;
            do
              n10 += 1, r10 = h2.charCodeAt(n10);
            while (32 === r10 || 10 === r10 || 9 === r10 || 13 === r10 || 12 === r10);
            p2 = ["space", h2.slice(g2, n10)], g2 = n10 - 1;
            break;
          case 91:
          case 93:
          case 123:
          case 125:
          case 58:
          case 59:
          case 41:
            var _2 = String.fromCharCode(r10);
            p2 = [_2, _2, g2];
            break;
          case 40:
            if (u10 = m2.length ? m2.pop()[1] : "", l2 = h2.charCodeAt(g2 + 1), "url" === u10 && 39 !== l2 && 34 !== l2 && 32 !== l2 && 10 !== l2 && 9 !== l2 && 12 !== l2 && 13 !== l2) {
              n10 = g2;
              do {
                if (a10 = false, -1 === (n10 = h2.indexOf(")", n10 + 1))) if (d2 || t11) {
                  n10 = g2;
                  break;
                } else y2("bracket");
                for (c10 = n10; 92 === h2.charCodeAt(c10 - 1); ) c10 -= 1, a10 = !a10;
              } while (a10);
              p2 = ["brackets", h2.slice(g2, n10 + 1), g2, n10], g2 = n10;
            } else n10 = h2.indexOf(")", g2 + 1), o10 = h2.slice(g2, n10 + 1), -1 === n10 || tS.test(o10) ? p2 = ["(", "(", g2] : (p2 = ["brackets", o10, g2, n10], g2 = n10);
            break;
          case 39:
          case 34:
            i10 = 39 === r10 ? "'" : '"', n10 = g2;
            do {
              if (a10 = false, -1 === (n10 = h2.indexOf(i10, n10 + 1))) if (d2 || t11) {
                n10 = g2 + 1;
                break;
              } else y2("string");
              for (c10 = n10; 92 === h2.charCodeAt(c10 - 1); ) c10 -= 1, a10 = !a10;
            } while (a10);
            p2 = ["string", h2.slice(g2, n10 + 1), g2, n10], g2 = n10;
            break;
          case 64:
            tk.lastIndex = g2 + 1, tk.test(h2), n10 = 0 === tk.lastIndex ? h2.length - 1 : tk.lastIndex - 2, p2 = ["at-word", h2.slice(g2, n10 + 1), g2, n10], g2 = n10;
            break;
          case 92:
            for (n10 = g2, s10 = true; 92 === h2.charCodeAt(n10 + 1); ) n10 += 1, s10 = !s10;
            if (r10 = h2.charCodeAt(n10 + 1), s10 && 47 !== r10 && 32 !== r10 && 10 !== r10 && 9 !== r10 && 13 !== r10 && 12 !== r10 && (n10 += 1, tC.test(h2.charAt(n10)))) {
              for (; tC.test(h2.charAt(n10 + 1)); ) n10 += 1;
              32 === h2.charCodeAt(n10 + 1) && (n10 += 1);
            }
            p2 = ["word", h2.slice(g2, n10 + 1), g2, n10], g2 = n10;
            break;
          default:
            47 === r10 && 42 === h2.charCodeAt(g2 + 1) ? (0 === (n10 = h2.indexOf("*/", g2 + 2) + 1) && (d2 || t11 ? n10 = h2.length : y2("comment")), p2 = ["comment", h2.slice(g2, n10 + 1), g2, n10]) : (tx.lastIndex = g2 + 1, tx.test(h2), n10 = 0 === tx.lastIndex ? h2.length - 1 : tx.lastIndex - 2, p2 = ["word", h2.slice(g2, n10 + 1), g2, n10], m2.push(p2)), g2 = n10;
        }
        return g2++, p2;
      }
    }, position: function() {
      return g2;
    } };
  }, tA = { empty: true, space: true }, tT = (function() {
    function e10(e11) {
      this.input = e11, this.root = new tI(), this.current = this.root, this.spaces = "", this.semicolon = false, this.createTokenizer(), this.root.source = { input: e11, start: { column: 1, line: 1, offset: 0 } };
    }
    var t10 = e10.prototype;
    return t10.atrule = function(e11) {
      var t11, r10, n10, i10 = new tM();
      i10.name = e11[1].slice(1), "" === i10.name && this.unnamedAtrule(i10, e11), this.init(i10, e11[2]);
      for (var o10 = false, s10 = false, a10 = [], c10 = []; !this.tokenizer.endOfFile(); ) {
        if ("(" === (t11 = (e11 = this.tokenizer.nextToken())[0]) || "[" === t11 ? c10.push("(" === t11 ? ")" : "]") : "{" === t11 && c10.length > 0 ? c10.push("}") : t11 === c10[c10.length - 1] && c10.pop(), 0 === c10.length) if (";" === t11) {
          i10.source.end = this.getPosition(e11[2]), i10.source.end.offset++, this.semicolon = true;
          break;
        } else if ("{" === t11) {
          s10 = true;
          break;
        } else if ("}" === t11) {
          if (a10.length > 0) {
            for (n10 = a10.length - 1, r10 = a10[n10]; r10 && "space" === r10[0]; ) r10 = a10[--n10];
            r10 && (i10.source.end = this.getPosition(r10[3] || r10[2]), i10.source.end.offset++);
          }
          this.end(e11);
          break;
        } else a10.push(e11);
        else a10.push(e11);
        if (this.tokenizer.endOfFile()) {
          o10 = true;
          break;
        }
      }
      i10.raws.between = this.spacesAndCommentsFromEnd(a10), a10.length ? (i10.raws.afterName = this.spacesAndCommentsFromStart(a10), this.raw(i10, "params", a10), o10 && (e11 = a10[a10.length - 1], i10.source.end = this.getPosition(e11[3] || e11[2]), i10.source.end.offset++, this.spaces = i10.raws.between, i10.raws.between = "")) : (i10.raws.afterName = "", i10.params = ""), s10 && (i10.nodes = [], this.current = i10);
    }, t10.checkMissedSemicolon = function(e11) {
      var t11, r10 = this.colon(e11);
      if (false !== r10) {
        for (var n10 = 0, i10 = r10 - 1; i10 >= 0 && ("space" === (t11 = e11[i10])[0] || 2 !== (n10 += 1)); i10--) ;
        throw this.input.error("Missed semicolon", "word" === t11[0] ? t11[3] + 1 : t11[2]);
      }
    }, t10.colon = function(e11) {
      for (var t11, r10, n10, i10 = 0, o10 = z(e11.entries()); !(n10 = o10()).done; ) {
        var s10 = n10.value, a10 = s10[0], c10 = s10[1];
        if ("(" === (t11 = c10[0]) && (i10 += 1), ")" === t11 && (i10 -= 1), 0 === i10 && ":" === t11) if (r10) if ("word" === r10[0] && "progid" === r10[1]) continue;
        else return a10;
        else this.doubleColon(c10);
        r10 = c10;
      }
      return false;
    }, t10.comment = function(e11) {
      var t11 = new tg();
      this.init(t11, e11[2]), t11.source.end = this.getPosition(e11[3] || e11[2]), t11.source.end.offset++;
      var r10 = e11[1].slice(2, -2);
      if (/^\s*$/.test(r10)) t11.text = "", t11.raws.left = r10, t11.raws.right = "";
      else {
        var n10 = r10.match(/^(\s*)([^]*\S)(\s*)$/);
        t11.text = n10[2], t11.raws.left = n10[1], t11.raws.right = n10[3];
      }
    }, t10.createTokenizer = function() {
      this.tokenizer = tR(this.input);
    }, t10.decl = function(e11, t11) {
      var r10, n10, i10 = new eJ();
      this.init(i10, e11[0][2]);
      var o10 = e11[e11.length - 1];
      for (";" === o10[0] && (this.semicolon = true, e11.pop()), i10.source.end = this.getPosition(o10[3] || o10[2] || (function(e12) {
        for (var t12 = e12.length - 1; t12 >= 0; t12--) {
          var r11 = e12[t12], n11 = r11[3] || r11[2];
          if (n11) return n11;
        }
      })(e11)), i10.source.end.offset++; "word" !== e11[0][0]; ) 1 === e11.length && this.unknownWord(e11), i10.raws.before += e11.shift()[1];
      for (i10.source.start = this.getPosition(e11[0][2]), i10.prop = ""; e11.length; ) {
        var s10 = e11[0][0];
        if (":" === s10 || "space" === s10 || "comment" === s10) break;
        i10.prop += e11.shift()[1];
      }
      for (i10.raws.between = ""; e11.length; ) {
        if (":" === (r10 = e11.shift())[0]) {
          i10.raws.between += r10[1];
          break;
        }
        "word" === r10[0] && /\w/.test(r10[1]) && this.unknownWord([r10]), i10.raws.between += r10[1];
      }
      ("_" === i10.prop[0] || "*" === i10.prop[0]) && (i10.raws.before += i10.prop[0], i10.prop = i10.prop.slice(1));
      for (var a10 = []; e11.length && ("space" === (n10 = e11[0][0]) || "comment" === n10); ) a10.push(e11.shift());
      this.precheckMissedSemicolon(e11);
      for (var c10 = e11.length - 1; c10 >= 0; c10--) {
        if ("!important" === (r10 = e11[c10])[1].toLowerCase()) {
          i10.important = true;
          var u10 = this.stringFrom(e11, c10);
          " !important" !== (u10 = this.spacesFromEnd(e11) + u10) && (i10.raws.important = u10);
          break;
        }
        if ("important" === r10[1].toLowerCase()) {
          for (var l2 = e11.slice(0), p2 = "", h2 = c10; h2 > 0; h2--) {
            var d2 = l2[h2][0];
            if (0 === p2.trim().indexOf("!") && "space" !== d2) break;
            p2 = l2.pop()[1] + p2;
          }
          0 === p2.trim().indexOf("!") && (i10.important = true, i10.raws.important = p2, e11 = l2);
        }
        if ("space" !== r10[0] && "comment" !== r10[0]) break;
      }
      e11.some(function(e12) {
        return "space" !== e12[0] && "comment" !== e12[0];
      }) && (i10.raws.between += a10.map(function(e12) {
        return e12[1];
      }).join(""), a10 = []), this.raw(i10, "value", a10.concat(e11), t11), i10.value.includes(":") && !t11 && this.checkMissedSemicolon(e11);
    }, t10.doubleColon = function(e11) {
      throw this.input.error("Double colon", { offset: e11[2] }, { offset: e11[2] + e11[1].length });
    }, t10.emptyRule = function(e11) {
      var t11 = new tE();
      this.init(t11, e11[2]), t11.selector = "", t11.raws.between = "", this.current = t11;
    }, t10.end = function(e11) {
      this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = false, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e11[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e11);
    }, t10.endFile = function() {
      this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
    }, t10.freeSemicolon = function(e11) {
      if (this.spaces += e11[1], this.current.nodes) {
        var t11 = this.current.nodes[this.current.nodes.length - 1];
        t11 && "rule" === t11.type && !t11.raws.ownSemicolon && (t11.raws.ownSemicolon = this.spaces, this.spaces = "");
      }
    }, t10.getPosition = function(e11) {
      var t11 = this.input.fromOffset(e11);
      return { column: t11.col, line: t11.line, offset: e11 };
    }, t10.init = function(e11, t11) {
      this.current.push(e11), e11.source = { input: this.input, start: this.getPosition(t11) }, e11.raws.before = this.spaces, this.spaces = "", "comment" !== e11.type && (this.semicolon = false);
    }, t10.other = function(e11) {
      for (var t11 = false, r10 = null, n10 = false, i10 = null, o10 = [], s10 = e11[1].startsWith("--"), a10 = [], c10 = e11; c10; ) {
        if (r10 = c10[0], a10.push(c10), "(" === r10 || "[" === r10) i10 || (i10 = c10), o10.push("(" === r10 ? ")" : "]");
        else if (s10 && n10 && "{" === r10) i10 || (i10 = c10), o10.push("}");
        else if (0 === o10.length) if (";" === r10) if (n10) return void this.decl(a10, s10);
        else break;
        else if ("{" === r10) return void this.rule(a10);
        else if ("}" === r10) {
          this.tokenizer.back(a10.pop()), t11 = true;
          break;
        } else ":" === r10 && (n10 = true);
        else r10 === o10[o10.length - 1] && (o10.pop(), 0 === o10.length && (i10 = null));
        c10 = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile() && (t11 = true), o10.length > 0 && this.unclosedBracket(i10), t11 && n10) {
        if (!s10) for (; a10.length && ("space" === (c10 = a10[a10.length - 1][0]) || "comment" === c10); ) this.tokenizer.back(a10.pop());
        this.decl(a10, s10);
      } else this.unknownWord(a10);
    }, t10.parse = function() {
      for (var e11; !this.tokenizer.endOfFile(); ) switch ((e11 = this.tokenizer.nextToken())[0]) {
        case "space":
          this.spaces += e11[1];
          break;
        case ";":
          this.freeSemicolon(e11);
          break;
        case "}":
          this.end(e11);
          break;
        case "comment":
          this.comment(e11);
          break;
        case "at-word":
          this.atrule(e11);
          break;
        case "{":
          this.emptyRule(e11);
          break;
        default:
          this.other(e11);
      }
      this.endFile();
    }, t10.precheckMissedSemicolon = function() {
    }, t10.raw = function(e11, t11, r10, n10) {
      for (var i10, o10, s10, a10, c10 = r10.length, u10 = "", l2 = true, p2 = 0; p2 < c10; p2 += 1) "space" !== (o10 = (i10 = r10[p2])[0]) || p2 !== c10 - 1 || n10 ? "comment" === o10 ? (a10 = r10[p2 - 1] ? r10[p2 - 1][0] : "empty", s10 = r10[p2 + 1] ? r10[p2 + 1][0] : "empty", tA[a10] || tA[s10] || "," === u10.slice(-1) ? l2 = false : u10 += i10[1]) : u10 += i10[1] : l2 = false;
      if (!l2) {
        var h2 = r10.reduce(function(e12, t12) {
          return e12 + t12[1];
        }, "");
        e11.raws[t11] = { raw: h2, value: u10 };
      }
      e11[t11] = u10;
    }, t10.rule = function(e11) {
      e11.pop();
      var t11 = new tE();
      this.init(t11, e11[0][2]), t11.raws.between = this.spacesAndCommentsFromEnd(e11), this.raw(t11, "selector", e11), this.current = t11;
    }, t10.spacesAndCommentsFromEnd = function(e11) {
      for (var t11, r10 = ""; e11.length && ("space" === (t11 = e11[e11.length - 1][0]) || "comment" === t11); ) r10 = e11.pop()[1] + r10;
      return r10;
    }, t10.spacesAndCommentsFromStart = function(e11) {
      for (var t11, r10 = ""; e11.length && ("space" === (t11 = e11[0][0]) || "comment" === t11); ) r10 += e11.shift()[1];
      return r10;
    }, t10.spacesFromEnd = function(e11) {
      for (var t11 = ""; e11.length && "space" === e11[e11.length - 1][0]; ) t11 = e11.pop()[1] + t11;
      return t11;
    }, t10.stringFrom = function(e11, t11) {
      for (var r10 = "", n10 = t11; n10 < e11.length; n10++) r10 += e11[n10][1];
      return e11.splice(t11, e11.length - t11), r10;
    }, t10.unclosedBlock = function() {
      var e11 = this.current.source.start;
      throw this.input.error("Unclosed block", e11.line, e11.column);
    }, t10.unclosedBracket = function(e11) {
      throw this.input.error("Unclosed bracket", { offset: e11[2] }, { offset: e11[2] + 1 });
    }, t10.unexpectedClose = function(e11) {
      throw this.input.error("Unexpected }", { offset: e11[2] }, { offset: e11[2] + 1 });
    }, t10.unknownWord = function(e11) {
      throw this.input.error("Unknown word", { offset: e11[0][2] }, { offset: e11[0][2] + e11[0][1].length });
    }, t10.unnamedAtrule = function(e11, t11) {
      throw this.input.error("At-rule without name", { offset: t11[2] }, { offset: t11[2] + t11[1].length });
    }, e10;
  })();
  function tP(e10, t10) {
    var r10 = new tT(new ti(e10, t10));
    try {
      r10.parse();
    } catch (e11) {
      throw e11;
    }
    return r10.root;
  }
  tP.default = tP, ty.registerParse(tP);
  var tD = eW.isClean, tL = eW.my, tF = { atrule: "AtRule", comment: "Comment", decl: "Declaration", document: "Document", root: "Root", rule: "Rule" }, tj = { AtRule: true, AtRuleExit: true, Comment: true, CommentExit: true, Declaration: true, DeclarationExit: true, Document: true, DocumentExit: true, Once: true, OnceExit: true, postcssPlugin: true, prepare: true, Root: true, RootExit: true, Rule: true, RuleExit: true }, tN = { Once: true, postcssPlugin: true, prepare: true };
  function tU(e10) {
    return (void 0 === e10 ? "undefined" : N(e10)) === "object" && "function" == typeof e10.then;
  }
  function tB(e10) {
    var t10 = false, r10 = tF[e10.type];
    return ("decl" === e10.type ? t10 = e10.prop.toLowerCase() : "atrule" === e10.type && (t10 = e10.name.toLowerCase()), t10 && e10.append) ? [r10, r10 + "-" + t10, 0, r10 + "Exit", r10 + "Exit-" + t10] : t10 ? [r10, r10 + "-" + t10, r10 + "Exit", r10 + "Exit-" + t10] : e10.append ? [r10, 0, r10 + "Exit"] : [r10, r10 + "Exit"];
  }
  function tz(e10) {
    return { eventIndex: 0, events: "document" === e10.type ? ["Document", 0, "DocumentExit"] : "root" === e10.type ? ["Root", 0, "RootExit"] : tB(e10), iterator: 0, node: e10, visitorIndex: 0, visitors: [] };
  }
  function tq(e10) {
    return e10[tD] = false, e10.nodes && e10.nodes.forEach(function(e11) {
      return tq(e11);
    }), e10;
  }
  var tW = {}, tV = (function() {
    function e10(t11, r10, n10) {
      var i10, o10 = this;
      if (this.stringified = false, this.processed = false, (void 0 === r10 ? "undefined" : N(r10)) === "object" && null !== r10 && ("root" === r10.type || "document" === r10.type)) i10 = tq(r10);
      else if (L(r10, e10) || L(r10, tw)) i10 = tq(r10.root), r10.map && (void 0 === n10.map && (n10.map = {}), n10.map.inline || (n10.map.inline = false), n10.map.prev = r10.map);
      else {
        var s10 = tP;
        n10.syntax && (s10 = n10.syntax.parse), n10.parser && (s10 = n10.parser), s10.parse && (s10 = s10.parse);
        try {
          i10 = s10(r10, n10);
        } catch (e11) {
          this.processed = true, this.error = e11;
        }
        i10 && !i10[tL] && ty.rebuild(i10);
      }
      this.result = new tw(t11, i10, n10), this.helpers = T({}, tW, { postcss: tW, result: this.result }), this.plugins = this.processor.plugins.map(function(e11) {
        return (void 0 === e11 ? "undefined" : N(e11)) === "object" && e11.prepare ? T({}, e11, e11.prepare(o10.result)) : e11;
      });
    }
    var t10 = e10.prototype;
    return t10.async = function() {
      return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
    }, t10.catch = function(e11) {
      return this.async().catch(e11);
    }, t10.finally = function(e11) {
      return this.async().then(e11, e11);
    }, t10.getAsyncError = function() {
      throw Error("Use process(css).then(cb) to work with async plugins");
    }, t10.handleError = function(e11, t11) {
      var r10 = this.result.lastPlugin;
      try {
        t11 && t11.addToError(e11), this.error = e11, "CssSyntaxError" !== e11.name || e11.plugin ? r10.postcssVersion : (e11.plugin = r10.postcssPlugin, e11.setMessage());
      } catch (e12) {
        console && console.error && console.error(e12);
      }
      return e11;
    }, t10.prepareVisitors = function() {
      var e11 = this;
      this.listeners = {};
      for (var t11, r10 = function(t12, r11, n11) {
        e11.listeners[r11] || (e11.listeners[r11] = []), e11.listeners[r11].push([t12, n11]);
      }, n10 = z(this.plugins); !(t11 = n10()).done; ) {
        var i10 = t11.value;
        if ((void 0 === i10 ? "undefined" : N(i10)) === "object") for (var o10 in i10) {
          if (!tj[o10] && /^[A-Z]/.test(o10)) throw Error("Unknown event " + o10 + " in " + i10.postcssPlugin + ". Try to update PostCSS (" + this.processor.version + " now).");
          if (!tN[o10]) if ("object" === N(i10[o10])) for (var s10 in i10[o10]) r10(i10, "*" === s10 ? o10 : o10 + "-" + s10.toLowerCase(), i10[o10][s10]);
          else "function" == typeof i10[o10] && r10(i10, o10, i10[o10]);
        }
      }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }, t10.runAsync = function() {
      var e11 = this;
      return E(function() {
        var t11, r10, n10, i10, o10, s10, a10, c10, u10, l2, p2, h2;
        return q(this, function(d2) {
          switch (d2.label) {
            case 0:
              e11.plugin = 0, t11 = 0, d2.label = 1;
            case 1:
              if (!(t11 < e11.plugins.length)) return [3, 6];
              if (r10 = e11.plugins[t11], !tU(n10 = e11.runOnRoot(r10))) return [3, 5];
              d2.label = 2;
            case 2:
              return d2.trys.push([2, 4, , 5]), [4, n10];
            case 3:
              return d2.sent(), [3, 5];
            case 4:
              throw i10 = d2.sent(), e11.handleError(i10);
            case 5:
              return t11++, [3, 1];
            case 6:
              if (e11.prepareVisitors(), !e11.hasListener) return [3, 18];
              o10 = e11.result.root, d2.label = 7;
            case 7:
              if (o10[tD]) return [3, 14];
              o10[tD] = true, s10 = [tz(o10)], d2.label = 8;
            case 8:
              if (!(s10.length > 0)) return [3, 13];
              if (!tU(a10 = e11.visitTick(s10))) return [3, 12];
              d2.label = 9;
            case 9:
              return d2.trys.push([9, 11, , 12]), [4, a10];
            case 10:
              return d2.sent(), [3, 12];
            case 11:
              throw c10 = d2.sent(), u10 = s10[s10.length - 1].node, e11.handleError(c10, u10);
            case 12:
              return [3, 8];
            case 13:
              return [3, 7];
            case 14:
              if (!e11.listeners.OnceExit) return [3, 18];
              l2 = function() {
                var t12, r11, n11, i11;
                return q(this, function(s11) {
                  switch (s11.label) {
                    case 0:
                      r11 = (t12 = h2.value)[0], n11 = t12[1], e11.result.lastPlugin = r11, s11.label = 1;
                    case 1:
                      if (s11.trys.push([1, 6, , 7]), "document" !== o10.type) return [3, 3];
                      return [4, Promise.all(o10.nodes.map(function(t13) {
                        return n11(t13, e11.helpers);
                      }))];
                    case 2:
                      return s11.sent(), [3, 5];
                    case 3:
                      return [4, n11(o10, e11.helpers)];
                    case 4:
                      s11.sent(), s11.label = 5;
                    case 5:
                      return [3, 7];
                    case 6:
                      throw i11 = s11.sent(), e11.handleError(i11);
                    case 7:
                      return [2];
                  }
                });
              }, p2 = z(e11.listeners.OnceExit), d2.label = 15;
            case 15:
              if ((h2 = p2()).done) return [3, 18];
              return [5, W(l2())];
            case 16:
              d2.sent(), d2.label = 17;
            case 17:
              return [3, 15];
            case 18:
              return e11.processed = true, [2, e11.stringify()];
          }
        });
      })();
    }, t10.runOnRoot = function(e11) {
      var t11 = this;
      this.result.lastPlugin = e11;
      try {
        if ((void 0 === e11 ? "undefined" : N(e11)) === "object" && e11.Once) {
          if ("document" === this.result.root.type) {
            var r10 = this.result.root.nodes.map(function(r11) {
              return e11.Once(r11, t11.helpers);
            });
            if (tU(r10[0])) return Promise.all(r10);
            return r10;
          }
          return e11.Once(this.result.root, this.helpers);
        }
        if ("function" == typeof e11) return e11(this.result.root, this.result);
      } catch (e12) {
        throw this.handleError(e12);
      }
    }, t10.stringify = function() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      this.stringified = true, this.sync();
      var e11 = this.result.opts, t11 = eG;
      e11.syntax && (t11 = e11.syntax.stringify), e11.stringifier && (t11 = e11.stringifier), t11.stringify && (t11 = t11.stringify);
      var r10 = new tf(t11, this.result.root, this.result.opts).generate();
      return this.result.css = r10[0], this.result.map = r10[1], this.result;
    }, t10.sync = function() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      if (this.processed = true, this.processing) throw this.getAsyncError();
      for (var e11, t11 = z(this.plugins); !(e11 = t11()).done; ) {
        var r10 = e11.value;
        if (tU(this.runOnRoot(r10))) throw this.getAsyncError();
      }
      if (this.prepareVisitors(), this.hasListener) {
        for (var n10 = this.result.root; !n10[tD]; ) n10[tD] = true, this.walkSync(n10);
        if (this.listeners.OnceExit) if ("document" === n10.type) for (var i10, o10 = z(n10.nodes); !(i10 = o10()).done; ) {
          var s10 = i10.value;
          this.visitSync(this.listeners.OnceExit, s10);
        }
        else this.visitSync(this.listeners.OnceExit, n10);
      }
      return this.result;
    }, t10.then = function(e11, t11) {
      return this.async().then(e11, t11);
    }, t10.toString = function() {
      return this.css;
    }, t10.visitSync = function(e11, t11) {
      for (var r10, n10 = z(e11); !(r10 = n10()).done; ) {
        var i10 = r10.value, o10 = i10[0], s10 = i10[1];
        this.result.lastPlugin = o10;
        var a10 = void 0;
        try {
          a10 = s10(t11, this.helpers);
        } catch (e12) {
          throw this.handleError(e12, t11.proxyOf);
        }
        if ("root" !== t11.type && "document" !== t11.type && !t11.parent) return true;
        if (tU(a10)) throw this.getAsyncError();
      }
    }, t10.visitTick = function(e11) {
      var t11 = e11[e11.length - 1], r10 = t11.node, n10 = t11.visitors;
      if ("root" !== r10.type && "document" !== r10.type && !r10.parent) return void e11.pop();
      if (n10.length > 0 && t11.visitorIndex < n10.length) {
        var i10 = n10[t11.visitorIndex], o10 = i10[0], s10 = i10[1];
        t11.visitorIndex += 1, t11.visitorIndex === n10.length && (t11.visitors = [], t11.visitorIndex = 0), this.result.lastPlugin = o10;
        try {
          return s10(r10.toProxy(), this.helpers);
        } catch (e12) {
          throw this.handleError(e12, r10);
        }
      }
      if (0 !== t11.iterator) {
        for (var a10, c10 = t11.iterator; a10 = r10.nodes[r10.indexes[c10]]; ) if (r10.indexes[c10] += 1, !a10[tD]) {
          a10[tD] = true, e11.push(tz(a10));
          return;
        }
        t11.iterator = 0, delete r10.indexes[c10];
      }
      for (var u10 = t11.events; t11.eventIndex < u10.length; ) {
        var l2 = u10[t11.eventIndex];
        if (t11.eventIndex += 1, 0 === l2) {
          r10.nodes && r10.nodes.length && (r10[tD] = true, t11.iterator = r10.getIterator());
          return;
        }
        if (this.listeners[l2]) {
          t11.visitors = this.listeners[l2];
          return;
        }
      }
      e11.pop();
    }, t10.walkSync = function(e11) {
      var t11 = this;
      e11[tD] = true;
      for (var r10, n10 = tB(e11), i10 = z(n10); !(r10 = i10()).done; ) {
        var o10 = r10.value;
        if (0 === o10) e11.nodes && e11.each(function(e12) {
          e12[tD] || t11.walkSync(e12);
        });
        else {
          var s10 = this.listeners[o10];
          if (s10 && this.visitSync(s10, e11.toProxy())) return;
        }
      }
    }, t10.warnings = function() {
      return this.sync().warnings();
    }, A(e10, [{ key: "content", get: function() {
      return this.stringify().content;
    } }, { key: "css", get: function() {
      return this.stringify().css;
    } }, { key: "map", get: function() {
      return this.stringify().map;
    } }, { key: "messages", get: function() {
      return this.sync().messages;
    } }, { key: "opts", get: function() {
      return this.result.opts;
    } }, { key: "processor", get: function() {
      return this.result.processor;
    } }, { key: "root", get: function() {
      return this.sync().root;
    } }, { key: Symbol.toStringTag, get: function() {
      return "LazyResult";
    } }]), e10;
  })();
  tV.registerPostcss = function(e10) {
    tW = e10;
  }, tV.default = tV, tI.registerLazyResult(tV), t_.registerLazyResult(tV);
  var t$ = (function() {
    function e10(e11, t11, r10) {
      t11 = t11.toString(), this.stringified = false, this._processor = e11, this._css = t11, this._opts = r10, this._map = void 0, this.result = new tw(this._processor, n10, this._opts), this.result.css = t11;
      var n10, i10 = this;
      Object.defineProperty(this.result, "root", { get: function() {
        return i10.root;
      } });
      var o10 = new tf(eG, n10, this._opts, t11);
      if (o10.isMap()) {
        var s10 = o10.generate(), a10 = s10[0], c10 = s10[1];
        a10 && (this.result.css = a10), c10 && (this.result.map = c10);
      } else o10.clearAnnotation(), this.result.css = o10.css;
    }
    var t10 = e10.prototype;
    return t10.async = function() {
      return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
    }, t10.catch = function(e11) {
      return this.async().catch(e11);
    }, t10.finally = function(e11) {
      return this.async().then(e11, e11);
    }, t10.sync = function() {
      if (this.error) throw this.error;
      return this.result;
    }, t10.then = function(e11, t11) {
      return this.async().then(e11, t11);
    }, t10.toString = function() {
      return this._css;
    }, t10.warnings = function() {
      return [];
    }, A(e10, [{ key: "content", get: function() {
      return this.result.css;
    } }, { key: "css", get: function() {
      return this.result.css;
    } }, { key: "map", get: function() {
      return this.result.map;
    } }, { key: "messages", get: function() {
      return [];
    } }, { key: "opts", get: function() {
      return this.result.opts;
    } }, { key: "processor", get: function() {
      return this.result.processor;
    } }, { key: "root", get: function() {
      var e11;
      if (this._root) return this._root;
      try {
        e11 = tP(this._css, this._opts);
      } catch (e12) {
        this.error = e12;
      }
      if (!this.error) return this._root = e11, e11;
      throw this.error;
    } }, { key: Symbol.toStringTag, get: function() {
      return "NoWorkResult";
    } }]), e10;
  })();
  t$.default = t$;
  var tG = (function() {
    function e10(e11) {
      void 0 === e11 && (e11 = []), this.version = "8.4.38", this.plugins = this.normalize(e11);
    }
    var t10 = e10.prototype;
    return t10.normalize = function(e11) {
      for (var t11, r10 = [], n10 = z(e11); !(t11 = n10()).done; ) {
        var i10 = t11.value;
        if (true === i10.postcss ? i10 = i10() : i10.postcss && (i10 = i10.postcss), (void 0 === i10 ? "undefined" : N(i10)) === "object" && Array.isArray(i10.plugins)) r10 = r10.concat(i10.plugins);
        else if ((void 0 === i10 ? "undefined" : N(i10)) === "object" && i10.postcssPlugin) r10.push(i10);
        else if ("function" == typeof i10) r10.push(i10);
        else if ((void 0 === i10 ? "undefined" : N(i10)) === "object" && (i10.parse || i10.stringify)) ;
        else throw Error(i10 + " is not a PostCSS plugin");
      }
      return r10;
    }, t10.process = function(e11, t11) {
      return (void 0 === t11 && (t11 = {}), this.plugins.length || t11.parser || t11.stringifier || t11.syntax) ? new tV(this, e11, t11) : new t$(this, e11, t11);
    }, t10.use = function(e11) {
      return this.plugins = this.plugins.concat(this.normalize([e11])), this;
    }, e10;
  })();
  function tH(e10, t10) {
    if (Array.isArray(e10)) return e10.map(function(e11) {
      return tH(e11);
    });
    var r10 = e10.inputs, n10 = F(e10, ["inputs"]);
    if (r10) {
      t10 = [];
      for (var i10, o10 = z(r10); !(i10 = o10()).done; ) {
        var s10 = i10.value, a10 = T({}, s10, { __proto__: ti.prototype });
        a10.map && (a10.map = T({}, a10.map, { __proto__: e3.prototype })), t10.push(a10);
      }
    }
    if (n10.nodes && (n10.nodes = e10.nodes.map(function(e11) {
      return tH(e11, t10);
    })), n10.source) {
      var c10 = n10.source, u10 = c10.inputId;
      n10.source = F(c10, ["inputId"]), null != u10 && (n10.source.input = t10[u10]);
    }
    if ("root" === n10.type) return new tI(n10);
    if ("decl" === n10.type) return new eJ(n10);
    if ("rule" === n10.type) return new tE(n10);
    if ("comment" === n10.type) return new tg(n10);
    if ("atrule" === n10.type) return new tM(n10);
    else throw Error("Unknown node type: " + e10.type);
  }
  function tK() {
    for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++) t10[r10] = arguments[r10];
    return 1 === t10.length && Array.isArray(t10[0]) && (t10 = t10[0]), new tG(t10);
  }
  tG.default = tG, tI.registerProcessor(tG), t_.registerProcessor(tG), tH.default = tH, tK.plugin = function(e10, t10) {
    var r10, n10 = false;
    function i10() {
      for (var r11 = arguments.length, i11 = Array(r11), o10 = 0; o10 < r11; o10++) i11[o10] = arguments[o10];
      console && console.warn && !n10 && (n10 = true, console.warn(e10 + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), b.default.env.LANG && b.default.env.LANG.startsWith("cn") && console.warn(e10 + ": \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
      var s10 = t10.apply(void 0, [].concat(i11));
      return s10.postcssPlugin = e10, s10.postcssVersion = new tG().version, s10;
    }
    return Object.defineProperty(i10, "postcss", { get: function() {
      return r10 || (r10 = i10()), r10;
    } }), i10.process = function(e11, t11, r11) {
      return tK([i10(r11)]).process(e11, t11);
    }, i10;
  }, tK.stringify = eG, tK.parse = tP, tK.fromJSON = tH, tK.list = tO, tK.comment = function(e10) {
    return new tg(e10);
  }, tK.atRule = function(e10) {
    return new tM(e10);
  }, tK.decl = function(e10) {
    return new eJ(e10);
  }, tK.rule = function(e10) {
    return new tE(e10);
  }, tK.root = function(e10) {
    return new tI(e10);
  }, tK.document = function(e10) {
    return new t_(e10);
  }, tK.CssSyntaxError = eq, tK.Declaration = eJ, tK.Container = ty, tK.Processor = tG, tK.Document = t_, tK.Comment = tg, tK.Warning = tb, tK.AtRule = tM, tK.Result = tw, tK.Input = ti, tK.Rule = tE, tK.Root = tI, tK.Node = eY, tV.registerPostcss(tK), tK.default = tK;
  var tY = tK && tK.__esModule && Object.prototype.hasOwnProperty.call(tK, "default") ? tK.default : tK;
  tY.stringify, tY.fromJSON, tY.plugin, tY.parse, tY.list, tY.document, tY.comment, tY.atRule, tY.rule, tY.decl, tY.root, tY.CssSyntaxError, tY.Declaration, tY.Container, tY.Processor, tY.Document, tY.Comment, tY.Warning, tY.AtRule, tY.Result, tY.Input, tY.Rule, tY.Root, tY.Node;
  var tJ = Object.defineProperty, tZ = function(e10, t10, r10) {
    var n10;
    return n10 = (void 0 === t10 ? "undefined" : N(t10)) !== "symbol" ? t10 + "" : t10, n10 in e10 ? tJ(e10, n10, { enumerable: true, configurable: true, writable: true, value: r10 }) : e10[n10] = r10;
  }, tX = { exports: {} }, tQ = String, t0 = function() {
    return { isColorSupported: false, reset: tQ, bold: tQ, dim: tQ, italic: tQ, underline: tQ, inverse: tQ, hidden: tQ, strikethrough: tQ, black: tQ, red: tQ, green: tQ, yellow: tQ, blue: tQ, magenta: tQ, cyan: tQ, white: tQ, gray: tQ, bgBlack: tQ, bgRed: tQ, bgGreen: tQ, bgYellow: tQ, bgBlue: tQ, bgMagenta: tQ, bgCyan: tQ, bgWhite: tQ };
  };
  tX.exports = t0(), tX.exports.createColors = t0;
  var t1 = tX.exports, t2 = (function(e10) {
    if (e10.__esModule) return e10;
    var t10 = e10.default;
    if ("function" == typeof t10) {
      var r10 = function e11() {
        return L(this, e11) ? Reflect.construct(t10, arguments, this.constructor) : t10.apply(this, arguments);
      };
      r10.prototype = t10.prototype;
    } else r10 = {};
    return Object.defineProperty(r10, "__esModule", { value: true }), Object.keys(e10).forEach(function(t11) {
      var n10 = Object.getOwnPropertyDescriptor(e10, t11);
      Object.defineProperty(r10, t11, n10.get ? n10 : { enumerable: true, get: function() {
        return e10[t11];
      } });
    }), r10;
  })(Object.freeze(Object.defineProperty({ __proto__: null, default: {} }, Symbol.toStringTag, { value: "Module" }))), t3 = (function(e10) {
    function t10(r11, n10, i10, o10, s10, a10) {
      var c10;
      return (c10 = e10.call(this, r11) || this).name = "CssSyntaxError", c10.reason = r11, s10 && (c10.file = s10), o10 && (c10.source = o10), a10 && (c10.plugin = a10), void 0 !== n10 && void 0 !== i10 && ("number" == typeof n10 ? (c10.line = n10, c10.column = i10) : (c10.line = n10.line, c10.column = n10.column, c10.endLine = i10.line, c10.endColumn = i10.column)), c10.setMessage(), Error.captureStackTrace && Error.captureStackTrace(c10, t10), c10;
    }
    D(t10, e10);
    var r10 = t10.prototype;
    return r10.setMessage = function() {
      this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", void 0 !== this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
    }, r10.showSourceCode = function(e11) {
      var t11, r11, n10 = this;
      if (!this.source) return "";
      var i10 = this.source;
      null == e11 && (e11 = t1.isColorSupported), t2 && e11 && (i10 = t2(i10));
      var o10 = i10.split(/\r?\n/), s10 = Math.max(this.line - 3, 0), a10 = Math.min(this.line + 2, o10.length), c10 = String(a10).length;
      if (e11) {
        var u10 = t1.createColors(true), l2 = u10.bold, p2 = u10.gray, h2 = u10.red;
        t11 = function(e12) {
          return l2(h2(e12));
        }, r11 = function(e12) {
          return p2(e12);
        };
      } else t11 = r11 = function(e12) {
        return e12;
      };
      return o10.slice(s10, a10).map(function(e12, i11) {
        var o11 = s10 + 1 + i11, a11 = " " + (" " + o11).slice(-c10) + " | ";
        if (o11 === n10.line) {
          var u11 = r11(a11.replace(/\d/g, " ")) + e12.slice(0, n10.column - 1).replace(/[^\t]/g, " ");
          return t11(">") + r11(a11) + e12 + "\n " + u11 + t11("^");
        }
        return " " + r11(a11) + e12;
      }).join("\n");
    }, r10.toString = function() {
      var e11 = this.showSourceCode();
      return e11 && (e11 = "\n\n" + e11 + "\n"), this.name + ": " + this.message + e11;
    }, t10;
  })(U(Error));
  t3.default = t3;
  var t5 = {};
  t5.isClean = /* @__PURE__ */ Symbol("isClean"), t5.my = /* @__PURE__ */ Symbol("my");
  var t9 = { after: "\n", beforeClose: "\n", beforeComment: "\n", beforeDecl: "\n", beforeOpen: " ", beforeRule: "\n", colon: ": ", commentLeft: " ", commentRight: " ", emptyBody: "", indent: "    ", semicolon: false }, t6 = (function() {
    function e10(e11) {
      this.builder = e11;
    }
    var t10 = e10.prototype;
    return t10.atrule = function(e11, t11) {
      var r10 = "@" + e11.name, n10 = e11.params ? this.rawValue(e11, "params") : "";
      if (void 0 !== e11.raws.afterName ? r10 += e11.raws.afterName : n10 && (r10 += " "), e11.nodes) this.block(e11, r10 + n10);
      else {
        var i10 = (e11.raws.between || "") + (t11 ? ";" : "");
        this.builder(r10 + n10 + i10, e11);
      }
    }, t10.beforeAfter = function(e11, t11) {
      for (var r10 = "decl" === e11.type ? this.raw(e11, null, "beforeDecl") : "comment" === e11.type ? this.raw(e11, null, "beforeComment") : "before" === t11 ? this.raw(e11, null, "beforeRule") : this.raw(e11, null, "beforeClose"), n10 = e11.parent, i10 = 0; n10 && "root" !== n10.type; ) i10 += 1, n10 = n10.parent;
      if (r10.includes("\n")) {
        var o10 = this.raw(e11, null, "indent");
        if (o10.length) for (var s10 = 0; s10 < i10; s10++) r10 += o10;
      }
      return r10;
    }, t10.block = function(e11, t11) {
      var r10, n10 = this.raw(e11, "between", "beforeOpen");
      this.builder(t11 + n10 + "{", e11, "start"), e11.nodes && e11.nodes.length ? (this.body(e11), r10 = this.raw(e11, "after")) : r10 = this.raw(e11, "after", "emptyBody"), r10 && this.builder(r10), this.builder("}", e11, "end");
    }, t10.body = function(e11) {
      for (var t11 = e11.nodes.length - 1; t11 > 0 && "comment" === e11.nodes[t11].type; ) t11 -= 1;
      for (var r10 = this.raw(e11, "semicolon"), n10 = 0; n10 < e11.nodes.length; n10++) {
        var i10 = e11.nodes[n10], o10 = this.raw(i10, "before");
        o10 && this.builder(o10), this.stringify(i10, t11 !== n10 || r10);
      }
    }, t10.comment = function(e11) {
      var t11 = this.raw(e11, "left", "commentLeft"), r10 = this.raw(e11, "right", "commentRight");
      this.builder("/*" + t11 + e11.text + r10 + "*/", e11);
    }, t10.decl = function(e11, t11) {
      var r10 = this.raw(e11, "between", "colon"), n10 = e11.prop + r10 + this.rawValue(e11, "value");
      e11.important && (n10 += e11.raws.important || " !important"), t11 && (n10 += ";"), this.builder(n10, e11);
    }, t10.document = function(e11) {
      this.body(e11);
    }, t10.raw = function(e11, t11, r10) {
      if (r10 || (r10 = t11), t11 && void 0 !== (n10 = e11.raws[t11])) return n10;
      var n10, i10 = e11.parent;
      if ("before" === r10 && (!i10 || "root" === i10.type && i10.first === e11 || i10 && "document" === i10.type)) return "";
      if (!i10) return t9[r10];
      var o10 = e11.root();
      if (o10.rawCache || (o10.rawCache = {}), void 0 !== o10.rawCache[r10]) return o10.rawCache[r10];
      if ("before" === r10 || "after" === r10) return this.beforeAfter(e11, r10);
      var s10, a10 = "raw" + ((s10 = r10)[0].toUpperCase() + s10.slice(1));
      return this[a10] ? n10 = this[a10](o10, e11) : o10.walk(function(e12) {
        if (void 0 !== (n10 = e12.raws[t11])) return false;
      }), void 0 === n10 && (n10 = t9[r10]), o10.rawCache[r10] = n10, n10;
    }, t10.rawBeforeClose = function(e11) {
      var t11;
      return e11.walk(function(e12) {
        if (e12.nodes && e12.nodes.length > 0 && void 0 !== e12.raws.after) return (t11 = e12.raws.after).includes("\n") && (t11 = t11.replace(/[^\n]+$/, "")), false;
      }), t11 && (t11 = t11.replace(/\S/g, "")), t11;
    }, t10.rawBeforeComment = function(e11, t11) {
      var r10;
      return e11.walkComments(function(e12) {
        if (void 0 !== e12.raws.before) return (r10 = e12.raws.before).includes("\n") && (r10 = r10.replace(/[^\n]+$/, "")), false;
      }), void 0 === r10 ? r10 = this.raw(t11, null, "beforeDecl") : r10 && (r10 = r10.replace(/\S/g, "")), r10;
    }, t10.rawBeforeDecl = function(e11, t11) {
      var r10;
      return e11.walkDecls(function(e12) {
        if (void 0 !== e12.raws.before) return (r10 = e12.raws.before).includes("\n") && (r10 = r10.replace(/[^\n]+$/, "")), false;
      }), void 0 === r10 ? r10 = this.raw(t11, null, "beforeRule") : r10 && (r10 = r10.replace(/\S/g, "")), r10;
    }, t10.rawBeforeOpen = function(e11) {
      var t11;
      return e11.walk(function(e12) {
        if ("decl" !== e12.type && void 0 !== (t11 = e12.raws.between)) return false;
      }), t11;
    }, t10.rawBeforeRule = function(e11) {
      var t11;
      return e11.walk(function(r10) {
        if (r10.nodes && (r10.parent !== e11 || e11.first !== r10) && void 0 !== r10.raws.before) return (t11 = r10.raws.before).includes("\n") && (t11 = t11.replace(/[^\n]+$/, "")), false;
      }), t11 && (t11 = t11.replace(/\S/g, "")), t11;
    }, t10.rawColon = function(e11) {
      var t11;
      return e11.walkDecls(function(e12) {
        if (void 0 !== e12.raws.between) return t11 = e12.raws.between.replace(/[^\s:]/g, ""), false;
      }), t11;
    }, t10.rawEmptyBody = function(e11) {
      var t11;
      return e11.walk(function(e12) {
        if (e12.nodes && 0 === e12.nodes.length && void 0 !== (t11 = e12.raws.after)) return false;
      }), t11;
    }, t10.rawIndent = function(e11) {
      var t11;
      return e11.raws.indent ? e11.raws.indent : (e11.walk(function(r10) {
        var n10 = r10.parent;
        if (n10 && n10 !== e11 && n10.parent && n10.parent === e11 && void 0 !== r10.raws.before) {
          var i10 = r10.raws.before.split("\n");
          return t11 = (t11 = i10[i10.length - 1]).replace(/\S/g, ""), false;
        }
      }), t11);
    }, t10.rawSemicolon = function(e11) {
      var t11;
      return e11.walk(function(e12) {
        if (e12.nodes && e12.nodes.length && "decl" === e12.last.type && void 0 !== (t11 = e12.raws.semicolon)) return false;
      }), t11;
    }, t10.rawValue = function(e11, t11) {
      var r10 = e11[t11], n10 = e11.raws[t11];
      return n10 && n10.value === r10 ? n10.raw : r10;
    }, t10.root = function(e11) {
      this.body(e11), e11.raws.after && this.builder(e11.raws.after);
    }, t10.rule = function(e11) {
      this.block(e11, this.rawValue(e11, "selector")), e11.raws.ownSemicolon && this.builder(e11.raws.ownSemicolon, e11, "end");
    }, t10.stringify = function(e11, t11) {
      if (!this[e11.type]) throw Error("Unknown AST node type " + e11.type + ". Maybe you need to change PostCSS stringifier.");
      this[e11.type](e11, t11);
    }, e10;
  })();
  function t4(e10, t10) {
    new t6(t10).stringify(e10);
  }
  t6.default = t6, t4.default = t4;
  var t8 = t5.isClean, t7 = t5.my, re = (function() {
    function e10(e11) {
      for (var t11 in void 0 === e11 && (e11 = {}), this.raws = {}, this[t8] = false, this[t7] = true, e11) if ("nodes" === t11) {
        this.nodes = [];
        for (var r10, n10 = z(e11[t11]); !(r10 = n10()).done; ) {
          var i10 = r10.value;
          "function" == typeof i10.clone ? this.append(i10.clone()) : this.append(i10);
        }
      } else this[t11] = e11[t11];
    }
    var t10 = e10.prototype;
    return t10.addToError = function(e11) {
      if (e11.postcssNode = this, e11.stack && this.source && /\n\s{4}at /.test(e11.stack)) {
        var t11 = this.source;
        e11.stack = e11.stack.replace(/\n\s{4}at /, "$&" + t11.input.from + ":" + t11.start.line + ":" + t11.start.column + "$&");
      }
      return e11;
    }, t10.after = function(e11) {
      return this.parent.insertAfter(this, e11), this;
    }, t10.assign = function(e11) {
      for (var t11 in void 0 === e11 && (e11 = {}), e11) this[t11] = e11[t11];
      return this;
    }, t10.before = function(e11) {
      return this.parent.insertBefore(this, e11), this;
    }, t10.cleanRaws = function(e11) {
      delete this.raws.before, delete this.raws.after, e11 || delete this.raws.between;
    }, t10.clone = function(e11) {
      void 0 === e11 && (e11 = {});
      var t11 = (function e12(t12, r11) {
        var n10 = new t12.constructor();
        for (var i10 in t12) if (Object.prototype.hasOwnProperty.call(t12, i10) && "proxyCache" !== i10) {
          var o10 = t12[i10], s10 = void 0 === o10 ? "undefined" : N(o10);
          "parent" === i10 && "object" === s10 ? r11 && (n10[i10] = r11) : "source" === i10 ? n10[i10] = o10 : Array.isArray(o10) ? n10[i10] = o10.map(function(t13) {
            return e12(t13, n10);
          }) : ("object" === s10 && null !== o10 && (o10 = e12(o10)), n10[i10] = o10);
        }
        return n10;
      })(this);
      for (var r10 in e11) t11[r10] = e11[r10];
      return t11;
    }, t10.cloneAfter = function(e11) {
      void 0 === e11 && (e11 = {});
      var t11 = this.clone(e11);
      return this.parent.insertAfter(this, t11), t11;
    }, t10.cloneBefore = function(e11) {
      void 0 === e11 && (e11 = {});
      var t11 = this.clone(e11);
      return this.parent.insertBefore(this, t11), t11;
    }, t10.error = function(e11, t11) {
      if (void 0 === t11 && (t11 = {}), this.source) {
        var r10 = this.rangeBy(t11), n10 = r10.end, i10 = r10.start;
        return this.source.input.error(e11, { column: i10.column, line: i10.line }, { column: n10.column, line: n10.line }, t11);
      }
      return new t3(e11);
    }, t10.getProxyProcessor = function() {
      return { get: function(e11, t11) {
        return "proxyOf" === t11 ? e11 : "root" === t11 ? function() {
          return e11.root().toProxy();
        } : e11[t11];
      }, set: function(e11, t11, r10) {
        return e11[t11] === r10 || (e11[t11] = r10, ("prop" === t11 || "value" === t11 || "name" === t11 || "params" === t11 || "important" === t11 || "text" === t11) && e11.markDirty(), true);
      } };
    }, t10.markDirty = function() {
      if (this[t8]) {
        this[t8] = false;
        for (var e11 = this; e11 = e11.parent; ) e11[t8] = false;
      }
    }, t10.next = function() {
      if (this.parent) {
        var e11 = this.parent.index(this);
        return this.parent.nodes[e11 + 1];
      }
    }, t10.positionBy = function(e11, t11) {
      var r10 = this.source.start;
      if (e11.index) r10 = this.positionInside(e11.index, t11);
      else if (e11.word) {
        var n10 = (t11 = this.toString()).indexOf(e11.word);
        -1 !== n10 && (r10 = this.positionInside(n10, t11));
      }
      return r10;
    }, t10.positionInside = function(e11, t11) {
      for (var r10 = t11 || this.toString(), n10 = this.source.start.column, i10 = this.source.start.line, o10 = 0; o10 < e11; o10++) "\n" === r10[o10] ? (n10 = 1, i10 += 1) : n10 += 1;
      return { column: n10, line: i10 };
    }, t10.prev = function() {
      if (this.parent) {
        var e11 = this.parent.index(this);
        return this.parent.nodes[e11 - 1];
      }
    }, t10.rangeBy = function(e11) {
      var t11 = { column: this.source.start.column, line: this.source.start.line }, r10 = this.source.end ? { column: this.source.end.column + 1, line: this.source.end.line } : { column: t11.column + 1, line: t11.line };
      if (e11.word) {
        var n10 = this.toString(), i10 = n10.indexOf(e11.word);
        -1 !== i10 && (t11 = this.positionInside(i10, n10), r10 = this.positionInside(i10 + e11.word.length, n10));
      } else e11.start ? t11 = { column: e11.start.column, line: e11.start.line } : e11.index && (t11 = this.positionInside(e11.index)), e11.end ? r10 = { column: e11.end.column, line: e11.end.line } : "number" == typeof e11.endIndex ? r10 = this.positionInside(e11.endIndex) : e11.index && (r10 = this.positionInside(e11.index + 1));
      return (r10.line < t11.line || r10.line === t11.line && r10.column <= t11.column) && (r10 = { column: t11.column + 1, line: t11.line }), { end: r10, start: t11 };
    }, t10.raw = function(e11, t11) {
      return new t6().raw(this, e11, t11);
    }, t10.remove = function() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }, t10.replaceWith = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r10 = 0; r10 < e11; r10++) t11[r10] = arguments[r10];
      if (this.parent) {
        for (var n10, i10 = this, o10 = false, s10 = z(t11); !(n10 = s10()).done; ) {
          var a10 = n10.value;
          a10 === this ? o10 = true : o10 ? (this.parent.insertAfter(i10, a10), i10 = a10) : this.parent.insertBefore(i10, a10);
        }
        o10 || this.remove();
      }
      return this;
    }, t10.root = function() {
      for (var e11 = this; e11.parent && "document" !== e11.parent.type; ) e11 = e11.parent;
      return e11;
    }, t10.toJSON = function(e11, t11) {
      var r10 = {}, n10 = null == t11;
      t11 = t11 || /* @__PURE__ */ new Map();
      var i10 = 0;
      for (var o10 in this) if (Object.prototype.hasOwnProperty.call(this, o10) && "parent" !== o10 && "proxyCache" !== o10) {
        var s10 = this[o10];
        if (Array.isArray(s10)) r10[o10] = s10.map(function(e12) {
          return (void 0 === e12 ? "undefined" : N(e12)) === "object" && e12.toJSON ? e12.toJSON(null, t11) : e12;
        });
        else if ((void 0 === s10 ? "undefined" : N(s10)) === "object" && s10.toJSON) r10[o10] = s10.toJSON(null, t11);
        else if ("source" === o10) {
          var a10 = t11.get(s10.input);
          null == a10 && (a10 = i10, t11.set(s10.input, i10), i10++), r10[o10] = { end: s10.end, inputId: a10, start: s10.start };
        } else r10[o10] = s10;
      }
      return n10 && (r10.inputs = [].concat(t11.keys()).map(function(e12) {
        return e12.toJSON();
      })), r10;
    }, t10.toProxy = function() {
      return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
    }, t10.toString = function(e11) {
      void 0 === e11 && (e11 = t4), e11.stringify && (e11 = e11.stringify);
      var t11 = "";
      return e11(this, function(e12) {
        t11 += e12;
      }), t11;
    }, t10.warn = function(e11, t11, r10) {
      var n10 = { node: this };
      for (var i10 in r10) n10[i10] = r10[i10];
      return e11.warn(t11, n10);
    }, A(e10, [{ key: "proxyOf", get: function() {
      return this;
    } }]), e10;
  })();
  re.default = re;
  var rt = (function(e10) {
    function t10(t11) {
      var r10;
      return t11 && void 0 !== t11.value && "string" != typeof t11.value && (t11 = T({}, t11, { value: String(t11.value) })), (r10 = e10.call(this, t11) || this).type = "decl", r10;
    }
    return D(t10, e10), A(t10, [{ key: "variable", get: function() {
      return this.prop.startsWith("--") || "$" === this.prop[0];
    } }]), t10;
  })(re);
  rt.default = rt;
  var rr = t2.SourceMapConsumer, rn = t2.SourceMapGenerator, ri = t2.existsSync, ro = t2.readFileSync, rs = t2.dirname, ra = t2.join, rc = (function() {
    function e10(e11, t11) {
      if (false !== t11.map) {
        this.loadAnnotation(e11), this.inline = this.startWith(this.annotation, "data:");
        var r10 = t11.map ? t11.map.prev : void 0, n10 = this.loadMap(t11.from, r10);
        !this.mapFile && t11.from && (this.mapFile = t11.from), this.mapFile && (this.root = rs(this.mapFile)), n10 && (this.text = n10);
      }
    }
    var t10 = e10.prototype;
    return t10.consumer = function() {
      return this.consumerCache || (this.consumerCache = new rr(this.text)), this.consumerCache;
    }, t10.decodeInline = function(e11) {
      if (/^data:application\/json;charset=utf-?8,/.test(e11) || /^data:application\/json,/.test(e11)) return decodeURIComponent(e11.substr(RegExp.lastMatch.length));
      if (/^data:application\/json;charset=utf-?8;base64,/.test(e11) || /^data:application\/json;base64,/.test(e11)) {
        var t11;
        return t11 = e11.substr(RegExp.lastMatch.length), _.Buffer.from(t11, "base64").toString();
      }
      throw Error("Unsupported source map encoding " + e11.match(/data:application\/json;([^,]+),/)[1]);
    }, t10.getAnnotationURL = function(e11) {
      return e11.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }, t10.isMap = function(e11) {
      return (void 0 === e11 ? "undefined" : N(e11)) === "object" && ("string" == typeof e11.mappings || "string" == typeof e11._mappings || Array.isArray(e11.sections));
    }, t10.loadAnnotation = function(e11) {
      var t11 = e11.match(/\/\*\s*# sourceMappingURL=/gm);
      if (t11) {
        var r10 = e11.lastIndexOf(t11.pop()), n10 = e11.indexOf("*/", r10);
        r10 > -1 && n10 > -1 && (this.annotation = this.getAnnotationURL(e11.substring(r10, n10)));
      }
    }, t10.loadFile = function(e11) {
      if (this.root = rs(e11), ri(e11)) return this.mapFile = e11, ro(e11, "utf-8").toString().trim();
    }, t10.loadMap = function(e11, t11) {
      if (false === t11) return false;
      if (t11) if ("string" == typeof t11) return t11;
      else if ("function" == typeof t11) {
        var r10 = t11(e11);
        if (r10) {
          var n10 = this.loadFile(r10);
          if (!n10) throw Error("Unable to load previous source map: " + r10.toString());
          return n10;
        }
      } else if (L(t11, rr)) return rn.fromSourceMap(t11).toString();
      else if (L(t11, rn)) return t11.toString();
      else if (this.isMap(t11)) return JSON.stringify(t11);
      else throw Error("Unsupported previous source map format: " + t11.toString());
      else if (this.inline) return this.decodeInline(this.annotation);
      else if (this.annotation) {
        var i10 = this.annotation;
        return e11 && (i10 = ra(rs(e11), i10)), this.loadFile(i10);
      }
    }, t10.startWith = function(e11, t11) {
      return !!e11 && e11.substr(0, t11.length) === t11;
    }, t10.withContent = function() {
      return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }, e10;
  })();
  rc.default = rc;
  var ru = t2.SourceMapConsumer, rl = t2.SourceMapGenerator, rp = t2.fileURLToPath, rh = t2.pathToFileURL, rd = t2.isAbsolute, rf = t2.resolve, rg = function(e10) {
    void 0 === e10 && (e10 = 21);
    for (var t10 = "", r10 = e10; r10--; ) t10 += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64 * Math.random() | 0];
    return t10;
  }, rm = /* @__PURE__ */ Symbol("fromOffsetCache"), rv = !!(ru && rl), ry = !!(rf && rd), r_ = (function() {
    function e10(e11, t11) {
      if (void 0 === t11 && (t11 = {}), null == e11 || (void 0 === e11 ? "undefined" : N(e11)) === "object" && !e11.toString) throw Error("PostCSS received " + e11 + " instead of CSS string");
      if (this.css = e11.toString(), "\uFEFF" === this.css[0] || "\uFFFE" === this.css[0] ? (this.hasBOM = true, this.css = this.css.slice(1)) : this.hasBOM = false, t11.from && (!ry || /^\w+:\/\//.test(t11.from) || rd(t11.from) ? this.file = t11.from : this.file = rf(t11.from)), ry && rv) {
        var r10 = new rc(this.css, t11);
        if (r10.text) {
          this.map = r10;
          var n10 = r10.consumer().file;
          !this.file && n10 && (this.file = this.mapResolve(n10));
        }
      }
      this.file || (this.id = "<input css " + rg(6) + ">"), this.map && (this.map.file = this.from);
    }
    var t10 = e10.prototype;
    return t10.error = function(e11, t11, r10, n10) {
      if (void 0 === n10 && (n10 = {}), t11 && (void 0 === t11 ? "undefined" : N(t11)) === "object") {
        var i10, o10, s10, a10 = t11, c10 = r10;
        if ("number" == typeof a10.offset) {
          var u10 = this.fromOffset(a10.offset);
          t11 = u10.line, r10 = u10.col;
        } else t11 = a10.line, r10 = a10.column;
        if ("number" == typeof c10.offset) {
          var l2 = this.fromOffset(c10.offset);
          o10 = l2.line, s10 = l2.col;
        } else o10 = c10.line, s10 = c10.column;
      } else if (!r10) {
        var p2 = this.fromOffset(t11);
        t11 = p2.line, r10 = p2.col;
      }
      var h2 = this.origin(t11, r10, o10, s10);
      return (i10 = h2 ? new t3(e11, void 0 === h2.endLine ? h2.line : { column: h2.column, line: h2.line }, void 0 === h2.endLine ? h2.column : { column: h2.endColumn, line: h2.endLine }, h2.source, h2.file, n10.plugin) : new t3(e11, void 0 === o10 ? t11 : { column: r10, line: t11 }, void 0 === o10 ? r10 : { column: s10, line: o10 }, this.css, this.file, n10.plugin)).input = { column: r10, endColumn: s10, endLine: o10, line: t11, source: this.css }, this.file && (rh && (i10.input.url = rh(this.file).toString()), i10.input.file = this.file), i10;
    }, t10.fromOffset = function(e11) {
      if (this[rm]) a10 = this[rm];
      else {
        var t11 = this.css.split("\n");
        a10 = Array(t11.length);
        for (var r10 = 0, n10 = 0, i10 = t11.length; n10 < i10; n10++) a10[n10] = r10, r10 += t11[n10].length + 1;
        this[rm] = a10;
      }
      s10 = a10[a10.length - 1];
      var o10 = 0;
      if (e11 >= s10) o10 = a10.length - 1;
      else for (var s10, a10, c10, u10 = a10.length - 2; o10 < u10; ) if (e11 < a10[c10 = o10 + (u10 - o10 >> 1)]) u10 = c10 - 1;
      else if (e11 >= a10[c10 + 1]) o10 = c10 + 1;
      else {
        o10 = c10;
        break;
      }
      return { col: e11 - a10[o10] + 1, line: o10 + 1 };
    }, t10.mapResolve = function(e11) {
      return /^\w+:\/\//.test(e11) ? e11 : rf(this.map.consumer().sourceRoot || this.map.root || ".", e11);
    }, t10.origin = function(e11, t11, r10, n10) {
      if (!this.map) return false;
      var i10, o10, s10 = this.map.consumer(), a10 = s10.originalPositionFor({ column: t11, line: e11 });
      if (!a10.source) return false;
      "number" == typeof r10 && (i10 = s10.originalPositionFor({ column: n10, line: r10 })), o10 = rd(a10.source) ? rh(a10.source) : new URL(a10.source, this.map.consumer().sourceRoot || rh(this.map.mapFile));
      var c10 = { column: a10.column, endColumn: i10 && i10.column, endLine: i10 && i10.line, line: a10.line, url: o10.toString() };
      if ("file:" === o10.protocol) if (rp) c10.file = rp(o10);
      else throw Error("file: protocol is not available in this PostCSS build");
      var u10 = s10.sourceContentFor(a10.source);
      return u10 && (c10.source = u10), c10;
    }, t10.toJSON = function() {
      for (var e11 = {}, t11 = 0, r10 = ["hasBOM", "css", "file", "id"]; t11 < r10.length; t11++) {
        var n10 = r10[t11];
        null != this[n10] && (e11[n10] = this[n10]);
      }
      return this.map && (e11.map = T({}, this.map), e11.map.consumerCache && (e11.map.consumerCache = void 0)), e11;
    }, A(e10, [{ key: "from", get: function() {
      return this.file || this.id;
    } }]), e10;
  })();
  r_.default = r_, t2 && t2.registerInput && t2.registerInput(r_);
  var rb = t2.SourceMapConsumer, rw = t2.SourceMapGenerator, rk = t2.dirname, rx = t2.relative, rS = t2.resolve, rC = t2.sep, rM = t2.pathToFileURL, rI = !!(rb && rw), rO = !!(rk && rS && rx && rC), rE = (function() {
    function e10(e11, t11, r10, n10) {
      this.stringify = e11, this.mapOpts = r10.map || {}, this.root = t11, this.opts = r10, this.css = n10, this.originalCSS = n10, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    var t10 = e10.prototype;
    return t10.addAnnotation = function() {
      var e11 = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" == typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" == typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map", t11 = "\n";
      this.css.includes("\r\n") && (t11 = "\r\n"), this.css += t11 + "/*# sourceMappingURL=" + e11 + " */";
    }, t10.applyPrevMaps = function() {
      for (var e11, t11 = z(this.previous()); !(e11 = t11()).done; ) {
        var r10 = e11.value, n10 = this.toUrl(this.path(r10.file)), i10 = r10.root || rk(r10.file), o10 = void 0;
        false === this.mapOpts.sourcesContent ? (o10 = new rb(r10.text)).sourcesContent && (o10.sourcesContent = null) : o10 = r10.consumer(), this.map.applySourceMap(o10, n10, this.toUrl(this.path(i10)));
      }
    }, t10.clearAnnotation = function() {
      if (false !== this.mapOpts.annotation) if (this.root) for (var e11, t11 = this.root.nodes.length - 1; t11 >= 0; t11--) "comment" === (e11 = this.root.nodes[t11]).type && 0 === e11.text.indexOf("# sourceMappingURL=") && this.root.removeChild(t11);
      else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""));
    }, t10.generate = function() {
      if (this.clearAnnotation(), rO && rI && this.isMap()) return this.generateMap();
      var e11 = "";
      return this.stringify(this.root, function(t11) {
        e11 += t11;
      }), [e11];
    }, t10.generateMap = function() {
      if (this.root) this.generateString();
      else if (1 === this.previous().length) {
        var e11 = this.previous()[0].consumer();
        e11.file = this.outputFile(), this.map = rw.fromSourceMap(e11, { ignoreInvalidMapping: true });
      } else this.map = new rw({ file: this.outputFile(), ignoreInvalidMapping: true }), this.map.addMapping({ generated: { column: 0, line: 1 }, original: { column: 0, line: 1 }, source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>" });
      return (this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline()) ? [this.css] : [this.css, this.map];
    }, t10.generateString = function() {
      var e11, t11, r10 = this;
      this.css = "", this.map = new rw({ file: this.outputFile(), ignoreInvalidMapping: true });
      var n10 = 1, i10 = 1, o10 = "<no source>", s10 = { generated: { column: 0, line: 0 }, original: { column: 0, line: 0 }, source: "" };
      this.stringify(this.root, function(a10, c10, u10) {
        if (r10.css += a10, c10 && "end" !== u10 && (s10.generated.line = n10, s10.generated.column = i10 - 1, c10.source && c10.source.start ? (s10.source = r10.sourcePath(c10), s10.original.line = c10.source.start.line, s10.original.column = c10.source.start.column - 1) : (s10.source = o10, s10.original.line = 1, s10.original.column = 0), r10.map.addMapping(s10)), (e11 = a10.match(/\n/g)) ? (n10 += e11.length, t11 = a10.lastIndexOf("\n"), i10 = a10.length - t11) : i10 += a10.length, c10 && "start" !== u10) {
          var l2 = c10.parent || { raws: {} };
          (!("decl" === c10.type || "atrule" === c10.type && !c10.nodes) || c10 !== l2.last || l2.raws.semicolon) && (c10.source && c10.source.end ? (s10.source = r10.sourcePath(c10), s10.original.line = c10.source.end.line, s10.original.column = c10.source.end.column - 1, s10.generated.line = n10, s10.generated.column = i10 - 2) : (s10.source = o10, s10.original.line = 1, s10.original.column = 0, s10.generated.line = n10, s10.generated.column = i10 - 1), r10.map.addMapping(s10));
        }
      });
    }, t10.isAnnotation = function() {
      return !!this.isInline() || (void 0 !== this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some(function(e11) {
        return e11.annotation;
      }));
    }, t10.isInline = function() {
      if (void 0 !== this.mapOpts.inline) return this.mapOpts.inline;
      var e11 = this.mapOpts.annotation;
      return (void 0 === e11 || true === e11) && (!this.previous().length || this.previous().some(function(e12) {
        return e12.inline;
      }));
    }, t10.isMap = function() {
      return void 0 !== this.opts.map ? !!this.opts.map : this.previous().length > 0;
    }, t10.isSourcesContent = function() {
      return void 0 !== this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some(function(e11) {
        return e11.withContent();
      });
    }, t10.outputFile = function() {
      return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
    }, t10.path = function(e11) {
      if (this.mapOpts.absolute || 60 === e11.charCodeAt(0) || /^\w+:\/\//.test(e11)) return e11;
      var t11 = this.memoizedPaths.get(e11);
      if (t11) return t11;
      var r10 = this.opts.to ? rk(this.opts.to) : ".";
      "string" == typeof this.mapOpts.annotation && (r10 = rk(rS(r10, this.mapOpts.annotation)));
      var n10 = rx(r10, e11);
      return this.memoizedPaths.set(e11, n10), n10;
    }, t10.previous = function() {
      var e11 = this;
      if (!this.previousMaps) if (this.previousMaps = [], this.root) this.root.walk(function(t12) {
        if (t12.source && t12.source.input.map) {
          var r10 = t12.source.input.map;
          e11.previousMaps.includes(r10) || e11.previousMaps.push(r10);
        }
      });
      else {
        var t11 = new r_(this.originalCSS, this.opts);
        t11.map && this.previousMaps.push(t11.map);
      }
      return this.previousMaps;
    }, t10.setSourcesContent = function() {
      var e11 = this, t11 = {};
      if (this.root) this.root.walk(function(r11) {
        if (r11.source) {
          var n10 = r11.source.input.from;
          if (n10 && !t11[n10]) {
            t11[n10] = true;
            var i10 = e11.usesFileUrls ? e11.toFileUrl(n10) : e11.toUrl(e11.path(n10));
            e11.map.setSourceContent(i10, r11.source.input.css);
          }
        }
      });
      else if (this.css) {
        var r10 = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
        this.map.setSourceContent(r10, this.css);
      }
    }, t10.sourcePath = function(e11) {
      return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e11.source.input.from) : this.toUrl(this.path(e11.source.input.from));
    }, t10.toBase64 = function(e11) {
      return _.Buffer.from(e11).toString("base64");
    }, t10.toFileUrl = function(e11) {
      var t11 = this.memoizedFileURLs.get(e11);
      if (t11) return t11;
      if (rM) {
        var r10 = rM(e11).toString();
        return this.memoizedFileURLs.set(e11, r10), r10;
      }
      throw Error("`map.absolute` option is not available in this PostCSS build");
    }, t10.toUrl = function(e11) {
      var t11 = this.memoizedURLs.get(e11);
      if (t11) return t11;
      "\\" === rC && (e11 = e11.replace(/\\/g, "/"));
      var r10 = encodeURI(e11).replace(/[#?]/g, encodeURIComponent);
      return this.memoizedURLs.set(e11, r10), r10;
    }, e10;
  })(), rR = (function(e10) {
    function t10(t11) {
      var r10;
      return (r10 = e10.call(this, t11) || this).type = "comment", r10;
    }
    return D(t10, e10), t10;
  })(re);
  rR.default = rR;
  var rA = t5.isClean, rT = t5.my, rP = (function(e10) {
    function t10() {
      return e10.apply(this, arguments) || this;
    }
    D(t10, e10);
    var r10 = t10.prototype;
    return r10.append = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      for (var n10, i10 = z(t11); !(n10 = i10()).done; ) for (var o10, s10 = n10.value, a10 = this.normalize(s10, this.last), c10 = z(a10); !(o10 = c10()).done; ) {
        var u10 = o10.value;
        this.proxyOf.nodes.push(u10);
      }
      return this.markDirty(), this;
    }, r10.cleanRaws = function(t11) {
      if (e10.prototype.cleanRaws.call(this, t11), this.nodes) for (var r11, n10 = z(this.nodes); !(r11 = n10()).done; ) r11.value.cleanRaws(t11);
    }, r10.each = function(e11) {
      if (this.proxyOf.nodes) {
        for (var t11, r11, n10 = this.getIterator(); this.indexes[n10] < this.proxyOf.nodes.length && (t11 = this.indexes[n10], false !== (r11 = e11(this.proxyOf.nodes[t11], t11))); ) this.indexes[n10] += 1;
        return delete this.indexes[n10], r11;
      }
    }, r10.every = function(e11) {
      return this.nodes.every(e11);
    }, r10.getIterator = function() {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
      var e11 = this.lastEach;
      return this.indexes[e11] = 0, e11;
    }, r10.getProxyProcessor = function() {
      return { get: function(e11, t11) {
        if ("proxyOf" === t11) return e11;
        if (!e11[t11]) return e11[t11];
        if ("each" === t11 || "string" == typeof t11 && t11.startsWith("walk")) return function() {
          for (var r11 = arguments.length, n10 = Array(r11), i10 = 0; i10 < r11; i10++) n10[i10] = arguments[i10];
          return e11[t11].apply(e11, [].concat(n10.map(function(e12) {
            return "function" == typeof e12 ? function(t12, r12) {
              return e12(t12.toProxy(), r12);
            } : e12;
          })));
        };
        if ("every" === t11 || "some" === t11) return function(r11) {
          return e11[t11](function(e12) {
            for (var t12 = arguments.length, n10 = Array(t12 > 1 ? t12 - 1 : 0), i10 = 1; i10 < t12; i10++) n10[i10 - 1] = arguments[i10];
            return r11.apply(void 0, [].concat([e12.toProxy()], n10));
          });
        };
        if ("root" === t11) return function() {
          return e11.root().toProxy();
        };
        else if ("nodes" === t11) return e11.nodes.map(function(e12) {
          return e12.toProxy();
        });
        else if ("first" === t11 || "last" === t11) return e11[t11].toProxy();
        else return e11[t11];
      }, set: function(e11, t11, r11) {
        return e11[t11] === r11 || (e11[t11] = r11, ("name" === t11 || "params" === t11 || "selector" === t11) && e11.markDirty(), true);
      } };
    }, r10.index = function(e11) {
      return "number" == typeof e11 ? e11 : (e11.proxyOf && (e11 = e11.proxyOf), this.proxyOf.nodes.indexOf(e11));
    }, r10.insertAfter = function(e11, t11) {
      var r11, n10 = this.index(e11), i10 = this.normalize(t11, this.proxyOf.nodes[n10]).reverse();
      n10 = this.index(e11);
      for (var o10, s10 = z(i10); !(o10 = s10()).done; ) {
        var a10 = o10.value;
        this.proxyOf.nodes.splice(n10 + 1, 0, a10);
      }
      for (var c10 in this.indexes) n10 < (r11 = this.indexes[c10]) && (this.indexes[c10] = r11 + i10.length);
      return this.markDirty(), this;
    }, r10.insertBefore = function(e11, t11) {
      var r11, n10 = this.index(e11), i10 = 0 === n10 && "prepend", o10 = this.normalize(t11, this.proxyOf.nodes[n10], i10).reverse();
      n10 = this.index(e11);
      for (var s10, a10 = z(o10); !(s10 = a10()).done; ) {
        var c10 = s10.value;
        this.proxyOf.nodes.splice(n10, 0, c10);
      }
      for (var u10 in this.indexes) n10 <= (r11 = this.indexes[u10]) && (this.indexes[u10] = r11 + o10.length);
      return this.markDirty(), this;
    }, r10.normalize = function(e11, r11) {
      var n10 = this;
      if ("string" == typeof e11) e11 = (function e12(t11) {
        return t11.map(function(t12) {
          return t12.nodes && (t12.nodes = e12(t12.nodes)), delete t12.source, t12;
        });
      })(sh(e11).nodes);
      else if (void 0 === e11) e11 = [];
      else if (Array.isArray(e11)) {
        e11 = e11.slice(0);
        for (var i10, o10 = z(e11); !(i10 = o10()).done; ) {
          var s10 = i10.value;
          s10.parent && s10.parent.removeChild(s10, "ignore");
        }
      } else if ("root" === e11.type && "document" !== this.type) {
        e11 = e11.nodes.slice(0);
        for (var a10, c10 = z(e11); !(a10 = c10()).done; ) {
          var u10 = a10.value;
          u10.parent && u10.parent.removeChild(u10, "ignore");
        }
      } else if (e11.type) e11 = [e11];
      else if (e11.prop) {
        if (void 0 === e11.value) throw Error("Value field is missed in node creation");
        "string" != typeof e11.value && (e11.value = String(e11.value)), e11 = [new rt(e11)];
      } else if (e11.selector) e11 = [new sd(e11)];
      else if (e11.name) e11 = [new sf(e11)];
      else if (e11.text) e11 = [new rR(e11)];
      else throw Error("Unknown node type in node creation");
      return e11.map(function(e12) {
        return e12[rT] || t10.rebuild(e12), (e12 = e12.proxyOf).parent && e12.parent.removeChild(e12), e12[rA] && (function e13(t11) {
          if (t11[rA] = false, t11.proxyOf.nodes) for (var r12, n11 = z(t11.proxyOf.nodes); !(r12 = n11()).done; ) e13(r12.value);
        })(e12), void 0 === e12.raws.before && r11 && void 0 !== r11.raws.before && (e12.raws.before = r11.raws.before.replace(/\S/g, "")), e12.parent = n10.proxyOf, e12;
      });
    }, r10.prepend = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      t11 = t11.reverse();
      for (var n10, i10 = z(t11); !(n10 = i10()).done; ) {
        for (var o10, s10 = n10.value, a10 = this.normalize(s10, this.first, "prepend").reverse(), c10 = z(a10); !(o10 = c10()).done; ) {
          var u10 = o10.value;
          this.proxyOf.nodes.unshift(u10);
        }
        for (var l2 in this.indexes) this.indexes[l2] = this.indexes[l2] + a10.length;
      }
      return this.markDirty(), this;
    }, r10.push = function(e11) {
      return e11.parent = this, this.proxyOf.nodes.push(e11), this;
    }, r10.removeAll = function() {
      for (var e11, t11 = z(this.proxyOf.nodes); !(e11 = t11()).done; ) e11.value.parent = void 0;
      return this.proxyOf.nodes = [], this.markDirty(), this;
    }, r10.removeChild = function(e11) {
      var t11;
      for (var r11 in e11 = this.index(e11), this.proxyOf.nodes[e11].parent = void 0, this.proxyOf.nodes.splice(e11, 1), this.indexes) (t11 = this.indexes[r11]) >= e11 && (this.indexes[r11] = t11 - 1);
      return this.markDirty(), this;
    }, r10.replaceValues = function(e11, t11, r11) {
      return r11 || (r11 = t11, t11 = {}), this.walkDecls(function(n10) {
        t11.props && !t11.props.includes(n10.prop) || (!t11.fast || n10.value.includes(t11.fast)) && (n10.value = n10.value.replace(e11, r11));
      }), this.markDirty(), this;
    }, r10.some = function(e11) {
      return this.nodes.some(e11);
    }, r10.walk = function(e11) {
      return this.each(function(t11, r11) {
        var n10;
        try {
          n10 = e11(t11, r11);
        } catch (e12) {
          throw t11.addToError(e12);
        }
        return false !== n10 && t11.walk && (n10 = t11.walk(e11)), n10;
      });
    }, r10.walkAtRules = function(e11, t11) {
      return t11 ? L(e11, RegExp) ? this.walk(function(r11, n10) {
        if ("atrule" === r11.type && e11.test(r11.name)) return t11(r11, n10);
      }) : this.walk(function(r11, n10) {
        if ("atrule" === r11.type && r11.name === e11) return t11(r11, n10);
      }) : (t11 = e11, this.walk(function(e12, r11) {
        if ("atrule" === e12.type) return t11(e12, r11);
      }));
    }, r10.walkComments = function(e11) {
      return this.walk(function(t11, r11) {
        if ("comment" === t11.type) return e11(t11, r11);
      });
    }, r10.walkDecls = function(e11, t11) {
      return t11 ? L(e11, RegExp) ? this.walk(function(r11, n10) {
        if ("decl" === r11.type && e11.test(r11.prop)) return t11(r11, n10);
      }) : this.walk(function(r11, n10) {
        if ("decl" === r11.type && r11.prop === e11) return t11(r11, n10);
      }) : (t11 = e11, this.walk(function(e12, r11) {
        if ("decl" === e12.type) return t11(e12, r11);
      }));
    }, r10.walkRules = function(e11, t11) {
      return t11 ? L(e11, RegExp) ? this.walk(function(r11, n10) {
        if ("rule" === r11.type && e11.test(r11.selector)) return t11(r11, n10);
      }) : this.walk(function(r11, n10) {
        if ("rule" === r11.type && r11.selector === e11) return t11(r11, n10);
      }) : (t11 = e11, this.walk(function(e12, r11) {
        if ("rule" === e12.type) return t11(e12, r11);
      }));
    }, A(t10, [{ key: "first", get: function() {
      if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
    } }, { key: "last", get: function() {
      if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    } }]), t10;
  })(re);
  rP.registerParse = function(e10) {
    sh = e10;
  }, rP.registerRule = function(e10) {
    sd = e10;
  }, rP.registerAtRule = function(e10) {
    sf = e10;
  }, rP.registerRoot = function(e10) {
    sg = e10;
  }, rP.default = rP, rP.rebuild = function(e10) {
    "atrule" === e10.type ? Object.setPrototypeOf(e10, sf.prototype) : "rule" === e10.type ? Object.setPrototypeOf(e10, sd.prototype) : "decl" === e10.type ? Object.setPrototypeOf(e10, rt.prototype) : "comment" === e10.type ? Object.setPrototypeOf(e10, rR.prototype) : "root" === e10.type && Object.setPrototypeOf(e10, sg.prototype), e10[rT] = true, e10.nodes && e10.nodes.forEach(function(e11) {
      rP.rebuild(e11);
    });
  };
  var rD = (function(e10) {
    function t10(t11) {
      var r10;
      return (r10 = e10.call(this, T({ type: "document" }, t11)) || this).nodes || (r10.nodes = []), r10;
    }
    return D(t10, e10), t10.prototype.toResult = function(e11) {
      return void 0 === e11 && (e11 = {}), new sm(new sv(), this, e11).stringify();
    }, t10;
  })(rP);
  rD.registerLazyResult = function(e10) {
    sm = e10;
  }, rD.registerProcessor = function(e10) {
    sv = e10;
  }, rD.default = rD;
  var rL = (function() {
    function e10(e11, t10) {
      if (void 0 === t10 && (t10 = {}), this.type = "warning", this.text = e11, t10.node && t10.node.source) {
        var r10 = t10.node.rangeBy(t10);
        this.line = r10.start.line, this.column = r10.start.column, this.endLine = r10.end.line, this.endColumn = r10.end.column;
      }
      for (var n10 in t10) this[n10] = t10[n10];
    }
    return e10.prototype.toString = function() {
      return this.node ? this.node.error(this.text, { index: this.index, plugin: this.plugin, word: this.word }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
    }, e10;
  })();
  rL.default = rL;
  var rF = (function() {
    function e10(e11, t11, r10) {
      this.processor = e11, this.messages = [], this.root = t11, this.opts = r10, this.css = void 0, this.map = void 0;
    }
    var t10 = e10.prototype;
    return t10.toString = function() {
      return this.css;
    }, t10.warn = function(e11, t11) {
      void 0 === t11 && (t11 = {}), !t11.plugin && this.lastPlugin && this.lastPlugin.postcssPlugin && (t11.plugin = this.lastPlugin.postcssPlugin);
      var r10 = new rL(e11, t11);
      return this.messages.push(r10), r10;
    }, t10.warnings = function() {
      return this.messages.filter(function(e11) {
        return "warning" === e11.type;
      });
    }, A(e10, [{ key: "content", get: function() {
      return this.css;
    } }]), e10;
  })();
  rF.default = rF;
  var rj = /[\t\n\f\r "#'()/;[\\\]{}]/g, rN = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, rU = /.[\r\n"'(/\\]/, rB = /[\da-f]/i, rz = (function(e10) {
    function t10(t11) {
      var r11;
      return (r11 = e10.call(this, t11) || this).type = "atrule", r11;
    }
    D(t10, e10);
    var r10 = t10.prototype;
    return r10.append = function() {
      for (var t11, r11 = arguments.length, n10 = Array(r11), i10 = 0; i10 < r11; i10++) n10[i10] = arguments[i10];
      return this.proxyOf.nodes || (this.nodes = []), (t11 = e10.prototype.append).call.apply(t11, [].concat([this], n10));
    }, r10.prepend = function() {
      for (var t11, r11 = arguments.length, n10 = Array(r11), i10 = 0; i10 < r11; i10++) n10[i10] = arguments[i10];
      return this.proxyOf.nodes || (this.nodes = []), (t11 = e10.prototype.prepend).call.apply(t11, [].concat([this], n10));
    }, t10;
  })(rP);
  rz.default = rz, rP.registerAtRule(rz);
  var rq = (function(e10) {
    function t10(t11) {
      var r11;
      return (r11 = e10.call(this, t11) || this).type = "root", r11.nodes || (r11.nodes = []), r11;
    }
    D(t10, e10);
    var r10 = t10.prototype;
    return r10.normalize = function(t11, r11, n10) {
      var i10 = e10.prototype.normalize.call(this, t11);
      if (r11) {
        if ("prepend" === n10) this.nodes.length > 1 ? r11.raws.before = this.nodes[1].raws.before : delete r11.raws.before;
        else if (this.first !== r11) for (var o10, s10 = z(i10); !(o10 = s10()).done; ) o10.value.raws.before = r11.raws.before;
      }
      return i10;
    }, r10.removeChild = function(t11, r11) {
      var n10 = this.index(t11);
      return !r11 && 0 === n10 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n10].raws.before), e10.prototype.removeChild.call(this, t11);
    }, r10.toResult = function(e11) {
      return void 0 === e11 && (e11 = {}), new sy(new s_(), this, e11).stringify();
    }, t10;
  })(rP);
  rq.registerLazyResult = function(e10) {
    sy = e10;
  }, rq.registerProcessor = function(e10) {
    s_ = e10;
  }, rq.default = rq, rP.registerRoot(rq);
  var rW = { comma: function(e10) {
    return rW.split(e10, [","], true);
  }, space: function(e10) {
    return rW.split(e10, [" ", "\n", "	"]);
  }, split: function(e10, t10, r10) {
    for (var n10, i10 = [], o10 = "", s10 = false, a10 = 0, c10 = false, u10 = "", l2 = false, p2 = z(e10); !(n10 = p2()).done; ) {
      var h2 = n10.value;
      l2 ? l2 = false : "\\" === h2 ? l2 = true : c10 ? h2 === u10 && (c10 = false) : '"' === h2 || "'" === h2 ? (c10 = true, u10 = h2) : "(" === h2 ? a10 += 1 : ")" === h2 ? a10 > 0 && (a10 -= 1) : 0 === a10 && t10.includes(h2) && (s10 = true), s10 ? ("" !== o10 && i10.push(o10.trim()), o10 = "", s10 = false) : o10 += h2;
    }
    return (r10 || "" !== o10) && i10.push(o10.trim()), i10;
  } };
  rW.default = rW;
  var rV = (function(e10) {
    function t10(t11) {
      var r10;
      return (r10 = e10.call(this, t11) || this).type = "rule", r10.nodes || (r10.nodes = []), r10;
    }
    return D(t10, e10), A(t10, [{ key: "selectors", get: function() {
      return rW.comma(this.selector);
    }, set: function(e11) {
      var t11 = this.selector ? this.selector.match(/,\s*/) : null, r10 = t11 ? t11[0] : "," + this.raw("between", "beforeOpen");
      this.selector = e11.join(r10);
    } }]), t10;
  })(rP);
  rV.default = rV, rP.registerRule(rV);
  var r$ = function(e10, t10) {
    void 0 === t10 && (t10 = {});
    var r10, n10, i10, o10, s10, a10, c10, u10, l2, p2, h2 = e10.css.valueOf(), d2 = t10.ignoreErrors, f2 = h2.length, g2 = 0, m2 = [], v2 = [];
    function y2(t11) {
      throw e10.error("Unclosed " + t11, g2);
    }
    return { back: function(e11) {
      v2.push(e11);
    }, endOfFile: function() {
      return 0 === v2.length && g2 >= f2;
    }, nextToken: function(e11) {
      if (v2.length) return v2.pop();
      if (!(g2 >= f2)) {
        var t11 = !!e11 && e11.ignoreUnclosed;
        switch (r10 = h2.charCodeAt(g2)) {
          case 10:
          case 32:
          case 9:
          case 13:
          case 12:
            n10 = g2;
            do
              n10 += 1, r10 = h2.charCodeAt(n10);
            while (32 === r10 || 10 === r10 || 9 === r10 || 13 === r10 || 12 === r10);
            p2 = ["space", h2.slice(g2, n10)], g2 = n10 - 1;
            break;
          case 91:
          case 93:
          case 123:
          case 125:
          case 58:
          case 59:
          case 41:
            var _2 = String.fromCharCode(r10);
            p2 = [_2, _2, g2];
            break;
          case 40:
            if (u10 = m2.length ? m2.pop()[1] : "", l2 = h2.charCodeAt(g2 + 1), "url" === u10 && 39 !== l2 && 34 !== l2 && 32 !== l2 && 10 !== l2 && 9 !== l2 && 12 !== l2 && 13 !== l2) {
              n10 = g2;
              do {
                if (a10 = false, -1 === (n10 = h2.indexOf(")", n10 + 1))) if (d2 || t11) {
                  n10 = g2;
                  break;
                } else y2("bracket");
                for (c10 = n10; 92 === h2.charCodeAt(c10 - 1); ) c10 -= 1, a10 = !a10;
              } while (a10);
              p2 = ["brackets", h2.slice(g2, n10 + 1), g2, n10], g2 = n10;
            } else n10 = h2.indexOf(")", g2 + 1), o10 = h2.slice(g2, n10 + 1), -1 === n10 || rU.test(o10) ? p2 = ["(", "(", g2] : (p2 = ["brackets", o10, g2, n10], g2 = n10);
            break;
          case 39:
          case 34:
            i10 = 39 === r10 ? "'" : '"', n10 = g2;
            do {
              if (a10 = false, -1 === (n10 = h2.indexOf(i10, n10 + 1))) if (d2 || t11) {
                n10 = g2 + 1;
                break;
              } else y2("string");
              for (c10 = n10; 92 === h2.charCodeAt(c10 - 1); ) c10 -= 1, a10 = !a10;
            } while (a10);
            p2 = ["string", h2.slice(g2, n10 + 1), g2, n10], g2 = n10;
            break;
          case 64:
            rj.lastIndex = g2 + 1, rj.test(h2), n10 = 0 === rj.lastIndex ? h2.length - 1 : rj.lastIndex - 2, p2 = ["at-word", h2.slice(g2, n10 + 1), g2, n10], g2 = n10;
            break;
          case 92:
            for (n10 = g2, s10 = true; 92 === h2.charCodeAt(n10 + 1); ) n10 += 1, s10 = !s10;
            if (r10 = h2.charCodeAt(n10 + 1), s10 && 47 !== r10 && 32 !== r10 && 10 !== r10 && 9 !== r10 && 13 !== r10 && 12 !== r10 && (n10 += 1, rB.test(h2.charAt(n10)))) {
              for (; rB.test(h2.charAt(n10 + 1)); ) n10 += 1;
              32 === h2.charCodeAt(n10 + 1) && (n10 += 1);
            }
            p2 = ["word", h2.slice(g2, n10 + 1), g2, n10], g2 = n10;
            break;
          default:
            47 === r10 && 42 === h2.charCodeAt(g2 + 1) ? (0 === (n10 = h2.indexOf("*/", g2 + 2) + 1) && (d2 || t11 ? n10 = h2.length : y2("comment")), p2 = ["comment", h2.slice(g2, n10 + 1), g2, n10]) : (rN.lastIndex = g2 + 1, rN.test(h2), n10 = 0 === rN.lastIndex ? h2.length - 1 : rN.lastIndex - 2, p2 = ["word", h2.slice(g2, n10 + 1), g2, n10], m2.push(p2)), g2 = n10;
        }
        return g2++, p2;
      }
    }, position: function() {
      return g2;
    } };
  }, rG = { empty: true, space: true }, rH = (function() {
    function e10(e11) {
      this.input = e11, this.root = new rq(), this.current = this.root, this.spaces = "", this.semicolon = false, this.createTokenizer(), this.root.source = { input: e11, start: { column: 1, line: 1, offset: 0 } };
    }
    var t10 = e10.prototype;
    return t10.atrule = function(e11) {
      var t11, r10, n10, i10 = new rz();
      i10.name = e11[1].slice(1), "" === i10.name && this.unnamedAtrule(i10, e11), this.init(i10, e11[2]);
      for (var o10 = false, s10 = false, a10 = [], c10 = []; !this.tokenizer.endOfFile(); ) {
        if ("(" === (t11 = (e11 = this.tokenizer.nextToken())[0]) || "[" === t11 ? c10.push("(" === t11 ? ")" : "]") : "{" === t11 && c10.length > 0 ? c10.push("}") : t11 === c10[c10.length - 1] && c10.pop(), 0 === c10.length) if (";" === t11) {
          i10.source.end = this.getPosition(e11[2]), i10.source.end.offset++, this.semicolon = true;
          break;
        } else if ("{" === t11) {
          s10 = true;
          break;
        } else if ("}" === t11) {
          if (a10.length > 0) {
            for (n10 = a10.length - 1, r10 = a10[n10]; r10 && "space" === r10[0]; ) r10 = a10[--n10];
            r10 && (i10.source.end = this.getPosition(r10[3] || r10[2]), i10.source.end.offset++);
          }
          this.end(e11);
          break;
        } else a10.push(e11);
        else a10.push(e11);
        if (this.tokenizer.endOfFile()) {
          o10 = true;
          break;
        }
      }
      i10.raws.between = this.spacesAndCommentsFromEnd(a10), a10.length ? (i10.raws.afterName = this.spacesAndCommentsFromStart(a10), this.raw(i10, "params", a10), o10 && (e11 = a10[a10.length - 1], i10.source.end = this.getPosition(e11[3] || e11[2]), i10.source.end.offset++, this.spaces = i10.raws.between, i10.raws.between = "")) : (i10.raws.afterName = "", i10.params = ""), s10 && (i10.nodes = [], this.current = i10);
    }, t10.checkMissedSemicolon = function(e11) {
      var t11, r10 = this.colon(e11);
      if (false !== r10) {
        for (var n10 = 0, i10 = r10 - 1; i10 >= 0 && ("space" === (t11 = e11[i10])[0] || 2 !== (n10 += 1)); i10--) ;
        throw this.input.error("Missed semicolon", "word" === t11[0] ? t11[3] + 1 : t11[2]);
      }
    }, t10.colon = function(e11) {
      for (var t11, r10, n10, i10 = 0, o10 = z(e11.entries()); !(n10 = o10()).done; ) {
        var s10 = n10.value, a10 = s10[0], c10 = s10[1];
        if ("(" === (t11 = c10[0]) && (i10 += 1), ")" === t11 && (i10 -= 1), 0 === i10 && ":" === t11) if (r10) if ("word" === r10[0] && "progid" === r10[1]) continue;
        else return a10;
        else this.doubleColon(c10);
        r10 = c10;
      }
      return false;
    }, t10.comment = function(e11) {
      var t11 = new rR();
      this.init(t11, e11[2]), t11.source.end = this.getPosition(e11[3] || e11[2]), t11.source.end.offset++;
      var r10 = e11[1].slice(2, -2);
      if (/^\s*$/.test(r10)) t11.text = "", t11.raws.left = r10, t11.raws.right = "";
      else {
        var n10 = r10.match(/^(\s*)([^]*\S)(\s*)$/);
        t11.text = n10[2], t11.raws.left = n10[1], t11.raws.right = n10[3];
      }
    }, t10.createTokenizer = function() {
      this.tokenizer = r$(this.input);
    }, t10.decl = function(e11, t11) {
      var r10, n10, i10 = new rt();
      this.init(i10, e11[0][2]);
      var o10 = e11[e11.length - 1];
      for (";" === o10[0] && (this.semicolon = true, e11.pop()), i10.source.end = this.getPosition(o10[3] || o10[2] || (function(e12) {
        for (var t12 = e12.length - 1; t12 >= 0; t12--) {
          var r11 = e12[t12], n11 = r11[3] || r11[2];
          if (n11) return n11;
        }
      })(e11)), i10.source.end.offset++; "word" !== e11[0][0]; ) 1 === e11.length && this.unknownWord(e11), i10.raws.before += e11.shift()[1];
      for (i10.source.start = this.getPosition(e11[0][2]), i10.prop = ""; e11.length; ) {
        var s10 = e11[0][0];
        if (":" === s10 || "space" === s10 || "comment" === s10) break;
        i10.prop += e11.shift()[1];
      }
      for (i10.raws.between = ""; e11.length; ) {
        if (":" === (r10 = e11.shift())[0]) {
          i10.raws.between += r10[1];
          break;
        }
        "word" === r10[0] && /\w/.test(r10[1]) && this.unknownWord([r10]), i10.raws.between += r10[1];
      }
      ("_" === i10.prop[0] || "*" === i10.prop[0]) && (i10.raws.before += i10.prop[0], i10.prop = i10.prop.slice(1));
      for (var a10 = []; e11.length && ("space" === (n10 = e11[0][0]) || "comment" === n10); ) a10.push(e11.shift());
      this.precheckMissedSemicolon(e11);
      for (var c10 = e11.length - 1; c10 >= 0; c10--) {
        if ("!important" === (r10 = e11[c10])[1].toLowerCase()) {
          i10.important = true;
          var u10 = this.stringFrom(e11, c10);
          " !important" !== (u10 = this.spacesFromEnd(e11) + u10) && (i10.raws.important = u10);
          break;
        }
        if ("important" === r10[1].toLowerCase()) {
          for (var l2 = e11.slice(0), p2 = "", h2 = c10; h2 > 0; h2--) {
            var d2 = l2[h2][0];
            if (0 === p2.trim().indexOf("!") && "space" !== d2) break;
            p2 = l2.pop()[1] + p2;
          }
          0 === p2.trim().indexOf("!") && (i10.important = true, i10.raws.important = p2, e11 = l2);
        }
        if ("space" !== r10[0] && "comment" !== r10[0]) break;
      }
      e11.some(function(e12) {
        return "space" !== e12[0] && "comment" !== e12[0];
      }) && (i10.raws.between += a10.map(function(e12) {
        return e12[1];
      }).join(""), a10 = []), this.raw(i10, "value", a10.concat(e11), t11), i10.value.includes(":") && !t11 && this.checkMissedSemicolon(e11);
    }, t10.doubleColon = function(e11) {
      throw this.input.error("Double colon", { offset: e11[2] }, { offset: e11[2] + e11[1].length });
    }, t10.emptyRule = function(e11) {
      var t11 = new rV();
      this.init(t11, e11[2]), t11.selector = "", t11.raws.between = "", this.current = t11;
    }, t10.end = function(e11) {
      this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = false, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e11[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e11);
    }, t10.endFile = function() {
      this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
    }, t10.freeSemicolon = function(e11) {
      if (this.spaces += e11[1], this.current.nodes) {
        var t11 = this.current.nodes[this.current.nodes.length - 1];
        t11 && "rule" === t11.type && !t11.raws.ownSemicolon && (t11.raws.ownSemicolon = this.spaces, this.spaces = "");
      }
    }, t10.getPosition = function(e11) {
      var t11 = this.input.fromOffset(e11);
      return { column: t11.col, line: t11.line, offset: e11 };
    }, t10.init = function(e11, t11) {
      this.current.push(e11), e11.source = { input: this.input, start: this.getPosition(t11) }, e11.raws.before = this.spaces, this.spaces = "", "comment" !== e11.type && (this.semicolon = false);
    }, t10.other = function(e11) {
      for (var t11 = false, r10 = null, n10 = false, i10 = null, o10 = [], s10 = e11[1].startsWith("--"), a10 = [], c10 = e11; c10; ) {
        if (r10 = c10[0], a10.push(c10), "(" === r10 || "[" === r10) i10 || (i10 = c10), o10.push("(" === r10 ? ")" : "]");
        else if (s10 && n10 && "{" === r10) i10 || (i10 = c10), o10.push("}");
        else if (0 === o10.length) if (";" === r10) if (n10) return void this.decl(a10, s10);
        else break;
        else if ("{" === r10) return void this.rule(a10);
        else if ("}" === r10) {
          this.tokenizer.back(a10.pop()), t11 = true;
          break;
        } else ":" === r10 && (n10 = true);
        else r10 === o10[o10.length - 1] && (o10.pop(), 0 === o10.length && (i10 = null));
        c10 = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile() && (t11 = true), o10.length > 0 && this.unclosedBracket(i10), t11 && n10) {
        if (!s10) for (; a10.length && ("space" === (c10 = a10[a10.length - 1][0]) || "comment" === c10); ) this.tokenizer.back(a10.pop());
        this.decl(a10, s10);
      } else this.unknownWord(a10);
    }, t10.parse = function() {
      for (var e11; !this.tokenizer.endOfFile(); ) switch ((e11 = this.tokenizer.nextToken())[0]) {
        case "space":
          this.spaces += e11[1];
          break;
        case ";":
          this.freeSemicolon(e11);
          break;
        case "}":
          this.end(e11);
          break;
        case "comment":
          this.comment(e11);
          break;
        case "at-word":
          this.atrule(e11);
          break;
        case "{":
          this.emptyRule(e11);
          break;
        default:
          this.other(e11);
      }
      this.endFile();
    }, t10.precheckMissedSemicolon = function() {
    }, t10.raw = function(e11, t11, r10, n10) {
      for (var i10, o10, s10, a10, c10 = r10.length, u10 = "", l2 = true, p2 = 0; p2 < c10; p2 += 1) "space" !== (o10 = (i10 = r10[p2])[0]) || p2 !== c10 - 1 || n10 ? "comment" === o10 ? (a10 = r10[p2 - 1] ? r10[p2 - 1][0] : "empty", s10 = r10[p2 + 1] ? r10[p2 + 1][0] : "empty", rG[a10] || rG[s10] || "," === u10.slice(-1) ? l2 = false : u10 += i10[1]) : u10 += i10[1] : l2 = false;
      if (!l2) {
        var h2 = r10.reduce(function(e12, t12) {
          return e12 + t12[1];
        }, "");
        e11.raws[t11] = { raw: h2, value: u10 };
      }
      e11[t11] = u10;
    }, t10.rule = function(e11) {
      e11.pop();
      var t11 = new rV();
      this.init(t11, e11[0][2]), t11.raws.between = this.spacesAndCommentsFromEnd(e11), this.raw(t11, "selector", e11), this.current = t11;
    }, t10.spacesAndCommentsFromEnd = function(e11) {
      for (var t11, r10 = ""; e11.length && ("space" === (t11 = e11[e11.length - 1][0]) || "comment" === t11); ) r10 = e11.pop()[1] + r10;
      return r10;
    }, t10.spacesAndCommentsFromStart = function(e11) {
      for (var t11, r10 = ""; e11.length && ("space" === (t11 = e11[0][0]) || "comment" === t11); ) r10 += e11.shift()[1];
      return r10;
    }, t10.spacesFromEnd = function(e11) {
      for (var t11 = ""; e11.length && "space" === e11[e11.length - 1][0]; ) t11 = e11.pop()[1] + t11;
      return t11;
    }, t10.stringFrom = function(e11, t11) {
      for (var r10 = "", n10 = t11; n10 < e11.length; n10++) r10 += e11[n10][1];
      return e11.splice(t11, e11.length - t11), r10;
    }, t10.unclosedBlock = function() {
      var e11 = this.current.source.start;
      throw this.input.error("Unclosed block", e11.line, e11.column);
    }, t10.unclosedBracket = function(e11) {
      throw this.input.error("Unclosed bracket", { offset: e11[2] }, { offset: e11[2] + 1 });
    }, t10.unexpectedClose = function(e11) {
      throw this.input.error("Unexpected }", { offset: e11[2] }, { offset: e11[2] + 1 });
    }, t10.unknownWord = function(e11) {
      throw this.input.error("Unknown word", { offset: e11[0][2] }, { offset: e11[0][2] + e11[0][1].length });
    }, t10.unnamedAtrule = function(e11, t11) {
      throw this.input.error("At-rule without name", { offset: t11[2] }, { offset: t11[2] + t11[1].length });
    }, e10;
  })();
  function rK(e10, t10) {
    var r10 = new rH(new r_(e10, t10));
    try {
      r10.parse();
    } catch (e11) {
      throw e11;
    }
    return r10.root;
  }
  rK.default = rK, rP.registerParse(rK);
  var rY = t5.isClean, rJ = t5.my, rZ = { atrule: "AtRule", comment: "Comment", decl: "Declaration", document: "Document", root: "Root", rule: "Rule" }, rX = { AtRule: true, AtRuleExit: true, Comment: true, CommentExit: true, Declaration: true, DeclarationExit: true, Document: true, DocumentExit: true, Once: true, OnceExit: true, postcssPlugin: true, prepare: true, Root: true, RootExit: true, Rule: true, RuleExit: true }, rQ = { Once: true, postcssPlugin: true, prepare: true };
  function r0(e10) {
    return (void 0 === e10 ? "undefined" : N(e10)) === "object" && "function" == typeof e10.then;
  }
  function r1(e10) {
    var t10 = false, r10 = rZ[e10.type];
    return ("decl" === e10.type ? t10 = e10.prop.toLowerCase() : "atrule" === e10.type && (t10 = e10.name.toLowerCase()), t10 && e10.append) ? [r10, r10 + "-" + t10, 0, r10 + "Exit", r10 + "Exit-" + t10] : t10 ? [r10, r10 + "-" + t10, r10 + "Exit", r10 + "Exit-" + t10] : e10.append ? [r10, 0, r10 + "Exit"] : [r10, r10 + "Exit"];
  }
  function r2(e10) {
    return { eventIndex: 0, events: "document" === e10.type ? ["Document", 0, "DocumentExit"] : "root" === e10.type ? ["Root", 0, "RootExit"] : r1(e10), iterator: 0, node: e10, visitorIndex: 0, visitors: [] };
  }
  function r3(e10) {
    return e10[rY] = false, e10.nodes && e10.nodes.forEach(function(e11) {
      return r3(e11);
    }), e10;
  }
  var r5 = {}, r9 = (function() {
    function e10(t11, r10, n10) {
      var i10, o10 = this;
      if (this.stringified = false, this.processed = false, (void 0 === r10 ? "undefined" : N(r10)) === "object" && null !== r10 && ("root" === r10.type || "document" === r10.type)) i10 = r3(r10);
      else if (L(r10, e10) || L(r10, rF)) i10 = r3(r10.root), r10.map && (void 0 === n10.map && (n10.map = {}), n10.map.inline || (n10.map.inline = false), n10.map.prev = r10.map);
      else {
        var s10 = rK;
        n10.syntax && (s10 = n10.syntax.parse), n10.parser && (s10 = n10.parser), s10.parse && (s10 = s10.parse);
        try {
          i10 = s10(r10, n10);
        } catch (e11) {
          this.processed = true, this.error = e11;
        }
        i10 && !i10[rJ] && rP.rebuild(i10);
      }
      this.result = new rF(t11, i10, n10), this.helpers = T({}, r5, { postcss: r5, result: this.result }), this.plugins = this.processor.plugins.map(function(e11) {
        return (void 0 === e11 ? "undefined" : N(e11)) === "object" && e11.prepare ? T({}, e11, e11.prepare(o10.result)) : e11;
      });
    }
    var t10 = e10.prototype;
    return t10.async = function() {
      return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
    }, t10.catch = function(e11) {
      return this.async().catch(e11);
    }, t10.finally = function(e11) {
      return this.async().then(e11, e11);
    }, t10.getAsyncError = function() {
      throw Error("Use process(css).then(cb) to work with async plugins");
    }, t10.handleError = function(e11, t11) {
      var r10 = this.result.lastPlugin;
      try {
        t11 && t11.addToError(e11), this.error = e11, "CssSyntaxError" !== e11.name || e11.plugin ? r10.postcssVersion : (e11.plugin = r10.postcssPlugin, e11.setMessage());
      } catch (e12) {
        console && console.error && console.error(e12);
      }
      return e11;
    }, t10.prepareVisitors = function() {
      var e11 = this;
      this.listeners = {};
      for (var t11, r10 = function(t12, r11, n11) {
        e11.listeners[r11] || (e11.listeners[r11] = []), e11.listeners[r11].push([t12, n11]);
      }, n10 = z(this.plugins); !(t11 = n10()).done; ) {
        var i10 = t11.value;
        if ((void 0 === i10 ? "undefined" : N(i10)) === "object") for (var o10 in i10) {
          if (!rX[o10] && /^[A-Z]/.test(o10)) throw Error("Unknown event " + o10 + " in " + i10.postcssPlugin + ". Try to update PostCSS (" + this.processor.version + " now).");
          if (!rQ[o10]) if ("object" === N(i10[o10])) for (var s10 in i10[o10]) r10(i10, "*" === s10 ? o10 : o10 + "-" + s10.toLowerCase(), i10[o10][s10]);
          else "function" == typeof i10[o10] && r10(i10, o10, i10[o10]);
        }
      }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }, t10.runAsync = function() {
      var e11 = this;
      return E(function() {
        var t11, r10, n10, i10, o10, s10, a10, c10, u10, l2, p2, h2;
        return q(this, function(d2) {
          switch (d2.label) {
            case 0:
              e11.plugin = 0, t11 = 0, d2.label = 1;
            case 1:
              if (!(t11 < e11.plugins.length)) return [3, 6];
              if (r10 = e11.plugins[t11], !r0(n10 = e11.runOnRoot(r10))) return [3, 5];
              d2.label = 2;
            case 2:
              return d2.trys.push([2, 4, , 5]), [4, n10];
            case 3:
              return d2.sent(), [3, 5];
            case 4:
              throw i10 = d2.sent(), e11.handleError(i10);
            case 5:
              return t11++, [3, 1];
            case 6:
              if (e11.prepareVisitors(), !e11.hasListener) return [3, 18];
              o10 = e11.result.root, d2.label = 7;
            case 7:
              if (o10[rY]) return [3, 14];
              o10[rY] = true, s10 = [r2(o10)], d2.label = 8;
            case 8:
              if (!(s10.length > 0)) return [3, 13];
              if (!r0(a10 = e11.visitTick(s10))) return [3, 12];
              d2.label = 9;
            case 9:
              return d2.trys.push([9, 11, , 12]), [4, a10];
            case 10:
              return d2.sent(), [3, 12];
            case 11:
              throw c10 = d2.sent(), u10 = s10[s10.length - 1].node, e11.handleError(c10, u10);
            case 12:
              return [3, 8];
            case 13:
              return [3, 7];
            case 14:
              if (!e11.listeners.OnceExit) return [3, 18];
              l2 = function() {
                var t12, r11, n11, i11;
                return q(this, function(s11) {
                  switch (s11.label) {
                    case 0:
                      r11 = (t12 = h2.value)[0], n11 = t12[1], e11.result.lastPlugin = r11, s11.label = 1;
                    case 1:
                      if (s11.trys.push([1, 6, , 7]), "document" !== o10.type) return [3, 3];
                      return [4, Promise.all(o10.nodes.map(function(t13) {
                        return n11(t13, e11.helpers);
                      }))];
                    case 2:
                      return s11.sent(), [3, 5];
                    case 3:
                      return [4, n11(o10, e11.helpers)];
                    case 4:
                      s11.sent(), s11.label = 5;
                    case 5:
                      return [3, 7];
                    case 6:
                      throw i11 = s11.sent(), e11.handleError(i11);
                    case 7:
                      return [2];
                  }
                });
              }, p2 = z(e11.listeners.OnceExit), d2.label = 15;
            case 15:
              if ((h2 = p2()).done) return [3, 18];
              return [5, W(l2())];
            case 16:
              d2.sent(), d2.label = 17;
            case 17:
              return [3, 15];
            case 18:
              return e11.processed = true, [2, e11.stringify()];
          }
        });
      })();
    }, t10.runOnRoot = function(e11) {
      var t11 = this;
      this.result.lastPlugin = e11;
      try {
        if ((void 0 === e11 ? "undefined" : N(e11)) === "object" && e11.Once) {
          if ("document" === this.result.root.type) {
            var r10 = this.result.root.nodes.map(function(r11) {
              return e11.Once(r11, t11.helpers);
            });
            if (r0(r10[0])) return Promise.all(r10);
            return r10;
          }
          return e11.Once(this.result.root, this.helpers);
        }
        if ("function" == typeof e11) return e11(this.result.root, this.result);
      } catch (e12) {
        throw this.handleError(e12);
      }
    }, t10.stringify = function() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      this.stringified = true, this.sync();
      var e11 = this.result.opts, t11 = t4;
      e11.syntax && (t11 = e11.syntax.stringify), e11.stringifier && (t11 = e11.stringifier), t11.stringify && (t11 = t11.stringify);
      var r10 = new rE(t11, this.result.root, this.result.opts).generate();
      return this.result.css = r10[0], this.result.map = r10[1], this.result;
    }, t10.sync = function() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      if (this.processed = true, this.processing) throw this.getAsyncError();
      for (var e11, t11 = z(this.plugins); !(e11 = t11()).done; ) {
        var r10 = e11.value;
        if (r0(this.runOnRoot(r10))) throw this.getAsyncError();
      }
      if (this.prepareVisitors(), this.hasListener) {
        for (var n10 = this.result.root; !n10[rY]; ) n10[rY] = true, this.walkSync(n10);
        if (this.listeners.OnceExit) if ("document" === n10.type) for (var i10, o10 = z(n10.nodes); !(i10 = o10()).done; ) {
          var s10 = i10.value;
          this.visitSync(this.listeners.OnceExit, s10);
        }
        else this.visitSync(this.listeners.OnceExit, n10);
      }
      return this.result;
    }, t10.then = function(e11, t11) {
      return this.async().then(e11, t11);
    }, t10.toString = function() {
      return this.css;
    }, t10.visitSync = function(e11, t11) {
      for (var r10, n10 = z(e11); !(r10 = n10()).done; ) {
        var i10 = r10.value, o10 = i10[0], s10 = i10[1];
        this.result.lastPlugin = o10;
        var a10 = void 0;
        try {
          a10 = s10(t11, this.helpers);
        } catch (e12) {
          throw this.handleError(e12, t11.proxyOf);
        }
        if ("root" !== t11.type && "document" !== t11.type && !t11.parent) return true;
        if (r0(a10)) throw this.getAsyncError();
      }
    }, t10.visitTick = function(e11) {
      var t11 = e11[e11.length - 1], r10 = t11.node, n10 = t11.visitors;
      if ("root" !== r10.type && "document" !== r10.type && !r10.parent) return void e11.pop();
      if (n10.length > 0 && t11.visitorIndex < n10.length) {
        var i10 = n10[t11.visitorIndex], o10 = i10[0], s10 = i10[1];
        t11.visitorIndex += 1, t11.visitorIndex === n10.length && (t11.visitors = [], t11.visitorIndex = 0), this.result.lastPlugin = o10;
        try {
          return s10(r10.toProxy(), this.helpers);
        } catch (e12) {
          throw this.handleError(e12, r10);
        }
      }
      if (0 !== t11.iterator) {
        for (var a10, c10 = t11.iterator; a10 = r10.nodes[r10.indexes[c10]]; ) if (r10.indexes[c10] += 1, !a10[rY]) {
          a10[rY] = true, e11.push(r2(a10));
          return;
        }
        t11.iterator = 0, delete r10.indexes[c10];
      }
      for (var u10 = t11.events; t11.eventIndex < u10.length; ) {
        var l2 = u10[t11.eventIndex];
        if (t11.eventIndex += 1, 0 === l2) {
          r10.nodes && r10.nodes.length && (r10[rY] = true, t11.iterator = r10.getIterator());
          return;
        }
        if (this.listeners[l2]) {
          t11.visitors = this.listeners[l2];
          return;
        }
      }
      e11.pop();
    }, t10.walkSync = function(e11) {
      var t11 = this;
      e11[rY] = true;
      for (var r10, n10 = r1(e11), i10 = z(n10); !(r10 = i10()).done; ) {
        var o10 = r10.value;
        if (0 === o10) e11.nodes && e11.each(function(e12) {
          e12[rY] || t11.walkSync(e12);
        });
        else {
          var s10 = this.listeners[o10];
          if (s10 && this.visitSync(s10, e11.toProxy())) return;
        }
      }
    }, t10.warnings = function() {
      return this.sync().warnings();
    }, A(e10, [{ key: "content", get: function() {
      return this.stringify().content;
    } }, { key: "css", get: function() {
      return this.stringify().css;
    } }, { key: "map", get: function() {
      return this.stringify().map;
    } }, { key: "messages", get: function() {
      return this.sync().messages;
    } }, { key: "opts", get: function() {
      return this.result.opts;
    } }, { key: "processor", get: function() {
      return this.result.processor;
    } }, { key: "root", get: function() {
      return this.sync().root;
    } }, { key: Symbol.toStringTag, get: function() {
      return "LazyResult";
    } }]), e10;
  })();
  r9.registerPostcss = function(e10) {
    r5 = e10;
  }, r9.default = r9, rq.registerLazyResult(r9), rD.registerLazyResult(r9);
  var r6 = (function() {
    function e10(e11, t11, r10) {
      t11 = t11.toString(), this.stringified = false, this._processor = e11, this._css = t11, this._opts = r10, this._map = void 0, this.result = new rF(this._processor, n10, this._opts), this.result.css = t11;
      var n10, i10 = this;
      Object.defineProperty(this.result, "root", { get: function() {
        return i10.root;
      } });
      var o10 = new rE(t4, n10, this._opts, t11);
      if (o10.isMap()) {
        var s10 = o10.generate(), a10 = s10[0], c10 = s10[1];
        a10 && (this.result.css = a10), c10 && (this.result.map = c10);
      } else o10.clearAnnotation(), this.result.css = o10.css;
    }
    var t10 = e10.prototype;
    return t10.async = function() {
      return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
    }, t10.catch = function(e11) {
      return this.async().catch(e11);
    }, t10.finally = function(e11) {
      return this.async().then(e11, e11);
    }, t10.sync = function() {
      if (this.error) throw this.error;
      return this.result;
    }, t10.then = function(e11, t11) {
      return this.async().then(e11, t11);
    }, t10.toString = function() {
      return this._css;
    }, t10.warnings = function() {
      return [];
    }, A(e10, [{ key: "content", get: function() {
      return this.result.css;
    } }, { key: "css", get: function() {
      return this.result.css;
    } }, { key: "map", get: function() {
      return this.result.map;
    } }, { key: "messages", get: function() {
      return [];
    } }, { key: "opts", get: function() {
      return this.result.opts;
    } }, { key: "processor", get: function() {
      return this.result.processor;
    } }, { key: "root", get: function() {
      var e11;
      if (this._root) return this._root;
      try {
        e11 = rK(this._css, this._opts);
      } catch (e12) {
        this.error = e12;
      }
      if (!this.error) return this._root = e11, e11;
      throw this.error;
    } }, { key: Symbol.toStringTag, get: function() {
      return "NoWorkResult";
    } }]), e10;
  })();
  r6.default = r6;
  var r4 = (function() {
    function e10(e11) {
      void 0 === e11 && (e11 = []), this.version = "8.4.38", this.plugins = this.normalize(e11);
    }
    var t10 = e10.prototype;
    return t10.normalize = function(e11) {
      for (var t11, r10 = [], n10 = z(e11); !(t11 = n10()).done; ) {
        var i10 = t11.value;
        if (true === i10.postcss ? i10 = i10() : i10.postcss && (i10 = i10.postcss), (void 0 === i10 ? "undefined" : N(i10)) === "object" && Array.isArray(i10.plugins)) r10 = r10.concat(i10.plugins);
        else if ((void 0 === i10 ? "undefined" : N(i10)) === "object" && i10.postcssPlugin) r10.push(i10);
        else if ("function" == typeof i10) r10.push(i10);
        else if ((void 0 === i10 ? "undefined" : N(i10)) === "object" && (i10.parse || i10.stringify)) ;
        else throw Error(i10 + " is not a PostCSS plugin");
      }
      return r10;
    }, t10.process = function(e11, t11) {
      return (void 0 === t11 && (t11 = {}), this.plugins.length || t11.parser || t11.stringifier || t11.syntax) ? new r9(this, e11, t11) : new r6(this, e11, t11);
    }, t10.use = function(e11) {
      return this.plugins = this.plugins.concat(this.normalize([e11])), this;
    }, e10;
  })();
  function r8(e10, t10) {
    if (Array.isArray(e10)) return e10.map(function(e11) {
      return r8(e11);
    });
    var r10 = e10.inputs, n10 = F(e10, ["inputs"]);
    if (r10) {
      t10 = [];
      for (var i10, o10 = z(r10); !(i10 = o10()).done; ) {
        var s10 = i10.value, a10 = T({}, s10, { __proto__: r_.prototype });
        a10.map && (a10.map = T({}, a10.map, { __proto__: rc.prototype })), t10.push(a10);
      }
    }
    if (n10.nodes && (n10.nodes = e10.nodes.map(function(e11) {
      return r8(e11, t10);
    })), n10.source) {
      var c10 = n10.source, u10 = c10.inputId;
      n10.source = F(c10, ["inputId"]), null != u10 && (n10.source.input = t10[u10]);
    }
    if ("root" === n10.type) return new rq(n10);
    if ("decl" === n10.type) return new rt(n10);
    if ("rule" === n10.type) return new rV(n10);
    if ("comment" === n10.type) return new rR(n10);
    if ("atrule" === n10.type) return new rz(n10);
    else throw Error("Unknown node type: " + e10.type);
  }
  function r7() {
    for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++) t10[r10] = arguments[r10];
    return 1 === t10.length && Array.isArray(t10[0]) && (t10 = t10[0]), new r4(t10);
  }
  r4.default = r4, rq.registerProcessor(r4), rD.registerProcessor(r4), r8.default = r8, r7.plugin = function(e10, t10) {
    var r10, n10 = false;
    function i10() {
      for (var r11 = arguments.length, i11 = Array(r11), o10 = 0; o10 < r11; o10++) i11[o10] = arguments[o10];
      console && console.warn && !n10 && (n10 = true, console.warn(e10 + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), b.default.env.LANG && b.default.env.LANG.startsWith("cn") && console.warn(e10 + ": \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
      var s10 = t10.apply(void 0, [].concat(i11));
      return s10.postcssPlugin = e10, s10.postcssVersion = new r4().version, s10;
    }
    return Object.defineProperty(i10, "postcss", { get: function() {
      return r10 || (r10 = i10()), r10;
    } }), i10.process = function(e11, t11, r11) {
      return r7([i10(r11)]).process(e11, t11);
    }, i10;
  }, r7.stringify = t4, r7.parse = rK, r7.fromJSON = r8, r7.list = rW, r7.comment = function(e10) {
    return new rR(e10);
  }, r7.atRule = function(e10) {
    return new rz(e10);
  }, r7.decl = function(e10) {
    return new rt(e10);
  }, r7.rule = function(e10) {
    return new rV(e10);
  }, r7.root = function(e10) {
    return new rq(e10);
  }, r7.document = function(e10) {
    return new rD(e10);
  }, r7.CssSyntaxError = t3, r7.Declaration = rt, r7.Container = rP, r7.Processor = r4, r7.Document = rD, r7.Comment = rR, r7.Warning = rL, r7.AtRule = rz, r7.Result = rF, r7.Input = r_, r7.Rule = rV, r7.Root = rq, r7.Node = re, r9.registerPostcss(r7), r7.default = r7;
  var ne = r7 && r7.__esModule && Object.prototype.hasOwnProperty.call(r7, "default") ? r7.default : r7;
  ne.stringify, ne.fromJSON, ne.plugin, ne.parse, ne.list, ne.document, ne.comment, ne.atRule, ne.rule, ne.decl, ne.root, ne.CssSyntaxError, ne.Declaration, ne.Container, ne.Processor, ne.Document, ne.Comment, ne.Warning, ne.AtRule, ne.Result, ne.Input, ne.Rule, ne.Root, ne.Node;
  var nt = (function() {
    function e10() {
      for (var e11 = arguments.length, t11 = Array(e11), r10 = 0; r10 < e11; r10++) t11[r10] = arguments[r10];
      tZ(this, "parentElement", null), tZ(this, "parentNode", null), tZ(this, "ownerDocument"), tZ(this, "firstChild", null), tZ(this, "lastChild", null), tZ(this, "previousSibling", null), tZ(this, "nextSibling", null), tZ(this, "ELEMENT_NODE", 1), tZ(this, "TEXT_NODE", 3), tZ(this, "nodeType"), tZ(this, "nodeName"), tZ(this, "RRNodeType");
    }
    var t10 = e10.prototype;
    return t10.contains = function(t11) {
      if (!L(t11, e10) || t11.ownerDocument !== this.ownerDocument) return false;
      if (t11 === this) return true;
      for (; t11.parentNode; ) {
        if (t11.parentNode === this) return true;
        t11 = t11.parentNode;
      }
      return false;
    }, t10.appendChild = function(e11) {
      throw Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.");
    }, t10.insertBefore = function(e11, t11) {
      throw Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.");
    }, t10.removeChild = function(e11) {
      throw Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.");
    }, t10.toString = function() {
      return "RRNode";
    }, A(e10, [{ key: "childNodes", get: function() {
      for (var e11 = [], t11 = this.firstChild; t11; ) e11.push(t11), t11 = t11.nextSibling;
      return e11;
    } }]), e10;
  })(), nr = { Node: ["childNodes", "parentNode", "parentElement", "textContent"], ShadowRoot: ["host", "styleSheets"], Element: ["shadowRoot", "querySelector", "querySelectorAll"], MutationObserver: [] }, nn = { Node: ["contains", "getRootNode"], ShadowRoot: ["getSelection"], Element: [], MutationObserver: ["constructor"] }, ni = {};
  function no(e10) {
    if (ni[e10]) return ni[e10];
    var t10 = globalThis[e10], r10 = t10.prototype, n10 = e10 in nr ? nr[e10] : void 0, i10 = !!(n10 && n10.every(function(e11) {
      var t11, n11;
      return !!(null == (n11 = null == (t11 = Object.getOwnPropertyDescriptor(r10, e11)) ? void 0 : t11.get) ? void 0 : n11.toString().includes("[native code]"));
    })), o10 = e10 in nn ? nn[e10] : void 0, s10 = !!(o10 && o10.every(function(e11) {
      var t11;
      return "function" == typeof r10[e11] && (null == (t11 = r10[e11]) ? void 0 : t11.toString().includes("[native code]"));
    }));
    if (i10 && s10 && !globalThis.Zone) return ni[e10] = t10.prototype, t10.prototype;
    try {
      var a10 = document.createElement("iframe");
      document.body.appendChild(a10);
      var c10 = a10.contentWindow;
      if (!c10) return t10.prototype;
      var u10 = c10[e10].prototype;
      if (document.body.removeChild(a10), !u10) return r10;
      return ni[e10] = u10;
    } catch (e11) {
      return r10;
    }
  }
  var ns = {};
  function na(e10, t10, r10) {
    var n10, i10 = e10 + "." + String(r10);
    if (ns[i10]) return ns[i10].call(t10);
    var o10 = null == (n10 = Object.getOwnPropertyDescriptor(no(e10), r10)) ? void 0 : n10.get;
    return o10 ? (ns[i10] = o10, o10.call(t10)) : t10[r10];
  }
  var nc = {};
  function nu(e10, t10, r10) {
    var n10 = e10 + "." + String(r10);
    if (nc[n10]) return nc[n10].bind(t10);
    var i10 = no(e10)[r10];
    return "function" != typeof i10 ? t10[r10] : (nc[n10] = i10, i10.bind(t10));
  }
  function nl(e10, t10, r10) {
    try {
      if (!(t10 in e10)) return function() {
      };
      var n10 = e10[t10], i10 = r10(n10);
      return "function" == typeof i10 && (i10.prototype = i10.prototype || {}, Object.defineProperties(i10, { __rrweb_original__: { enumerable: false, value: n10 } })), e10[t10] = i10, function() {
        e10[t10] = n10;
      };
    } catch (e11) {
      return function() {
      };
    }
  }
  var np = function(e10) {
    return na("Node", e10, "childNodes");
  }, nh = function(e10) {
    return na("Node", e10, "parentNode");
  }, nd = function(e10) {
    return na("Node", e10, "parentElement");
  }, nf = function(e10) {
    return na("Node", e10, "textContent");
  }, ng = function(e10, t10) {
    return nu("Node", e10, "contains")(t10);
  }, nm = function(e10) {
    return nu("Node", e10, "getRootNode")();
  }, nv = function(e10) {
    return e10 && "host" in e10 ? na("ShadowRoot", e10, "host") : null;
  }, ny = function(e10) {
    return e10 && "shadowRoot" in e10 ? na("Element", e10, "shadowRoot") : null;
  };
  function n_(e10, t10, r10) {
    void 0 === r10 && (r10 = document);
    var n10 = { capture: true, passive: true };
    return r10.addEventListener(e10, t10, n10), function() {
      return r10.removeEventListener(e10, t10, n10);
    };
  }
  var nb = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.", nw = { map: {}, getId: function() {
    return console.error(nb), -1;
  }, getNode: function() {
    return console.error(nb), null;
  }, removeNodeFromMap: function() {
    console.error(nb);
  }, has: function() {
    return console.error(nb), false;
  }, reset: function() {
    console.error(nb);
  } };
  function nk(e10, t10, r10) {
    void 0 === r10 && (r10 = {});
    var n10 = null, i10 = 0;
    return function() {
      for (var o10 = arguments.length, s10 = Array(o10), a10 = 0; a10 < o10; a10++) s10[a10] = arguments[a10];
      var c10 = Date.now();
      i10 || false !== r10.leading || (i10 = c10);
      var u10 = t10 - (c10 - i10), l2 = this;
      u10 <= 0 || u10 > t10 ? (n10 && (clearTimeout(n10), n10 = null), i10 = c10, e10.apply(l2, s10)) : n10 || false === r10.trailing || (n10 = setTimeout(function() {
        i10 = false === r10.leading ? 0 : Date.now(), n10 = null, e10.apply(l2, s10);
      }, u10));
    };
  }
  function nx(e10, t10, r10, n10, i10) {
    void 0 === i10 && (i10 = window);
    var o10 = i10.Object.getOwnPropertyDescriptor(e10, t10);
    return i10.Object.defineProperty(e10, t10, n10 ? r10 : { set: function(e11) {
      var t11 = this;
      setTimeout(function() {
        r10.set.call(t11, e11);
      }, 0), o10 && o10.set && o10.set.call(this, e11);
    } }), function() {
      return nx(e10, t10, o10 || {}, true);
    };
  }
  "u" > typeof window && window.Proxy && window.Reflect && (nw = new Proxy(nw, { get: function(e10, t10, r10) {
    return "map" === t10 && console.error(nb), Reflect.get(e10, t10, r10);
  } }));
  var nS = Date.now;
  function nC(e10) {
    var t10, r10, n10, i10, o10 = e10.document;
    return { left: o10.scrollingElement ? o10.scrollingElement.scrollLeft : void 0 !== e10.pageXOffset ? e10.pageXOffset : o10.documentElement.scrollLeft || (null == o10 ? void 0 : o10.body) && (null == (t10 = nd(o10.body)) ? void 0 : t10.scrollLeft) || (null == (r10 = null == o10 ? void 0 : o10.body) ? void 0 : r10.scrollLeft) || 0, top: o10.scrollingElement ? o10.scrollingElement.scrollTop : void 0 !== e10.pageYOffset ? e10.pageYOffset : (null == o10 ? void 0 : o10.documentElement.scrollTop) || (null == o10 ? void 0 : o10.body) && (null == (n10 = nd(o10.body)) ? void 0 : n10.scrollTop) || (null == (i10 = null == o10 ? void 0 : o10.body) ? void 0 : i10.scrollTop) || 0 };
  }
  function nM() {
    return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
  }
  function nI() {
    return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
  }
  function nO(e10) {
    return e10 ? e10.nodeType === e10.ELEMENT_NODE ? e10 : nd(e10) : null;
  }
  function nE(e10, t10, r10, n10) {
    if (!e10) return false;
    var i10 = nO(e10);
    if (!i10) return false;
    try {
      if ("string" == typeof t10) {
        if (i10.classList.contains(t10) || n10 && null !== i10.closest("." + t10)) return true;
      } else if (eP(i10, t10, n10)) return true;
    } catch (e11) {
    }
    return !!(r10 && (i10.matches(r10) || n10 && null !== i10.closest(r10))) || false;
  }
  function nR(e10, t10, r10) {
    return "TITLE" === e10.tagName && !!r10.headTitleMutations || -2 === t10.getId(e10);
  }
  function nA(e10) {
    return !!e10.changedTouches;
  }
  function nT(e10, t10) {
    return !!("IFRAME" === e10.nodeName && t10.getMeta(e10));
  }
  function nP(e10, t10) {
    return !!("LINK" === e10.nodeName && e10.nodeType === e10.ELEMENT_NODE && e10.getAttribute && "stylesheet" === e10.getAttribute("rel") && t10.getMeta(e10));
  }
  function nD(e10) {
    return !!e10 && (L(e10, nt) && "shadowRoot" in e10 ? !!e10.shadowRoot : !!ny(e10));
  }
  /[1-9][0-9]{12}/.test(Date.now().toString()) || (nS = function() {
    return (/* @__PURE__ */ new Date()).getTime();
  });
  var nL = (function() {
    function e10() {
      $(this, "id", 1), $(this, "styleIDMap", /* @__PURE__ */ new WeakMap()), $(this, "idStyleMap", /* @__PURE__ */ new Map());
    }
    var t10 = e10.prototype;
    return t10.getId = function(e11) {
      var t11;
      return null != (t11 = this.styleIDMap.get(e11)) ? t11 : -1;
    }, t10.has = function(e11) {
      return this.styleIDMap.has(e11);
    }, t10.add = function(e11, t11) {
      var r10;
      return this.has(e11) ? this.getId(e11) : (r10 = void 0 === t11 ? this.id++ : t11, this.styleIDMap.set(e11, r10), this.idStyleMap.set(r10, e11), r10);
    }, t10.getStyle = function(e11) {
      return this.idStyleMap.get(e11) || null;
    }, t10.reset = function() {
      this.styleIDMap = /* @__PURE__ */ new WeakMap(), this.idStyleMap = /* @__PURE__ */ new Map(), this.id = 1;
    }, t10.generateId = function() {
      return this.id++;
    }, t10.remove = function(e11) {
      var t11 = this.styleIDMap.get(e11);
      return void 0 !== t11 && (this.styleIDMap.delete(e11), this.idStyleMap.delete(t11), true);
    }, e10;
  })();
  function nF(e10) {
    var t10, r10 = null;
    return "getRootNode" in e10 && (null == (t10 = nm(e10)) ? void 0 : t10.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && nv(nm(e10)) && (r10 = nv(nm(e10))), r10;
  }
  function nj(e10) {
    var t10, r10, n10 = e10.ownerDocument;
    return !!n10 && (ng(n10, e10) || !!(r10 = (t10 = e10).ownerDocument) && ng(r10, (function(e11) {
      for (var t11, r11 = e11; t11 = nF(r11); ) r11 = t11;
      return r11;
    })(t10)));
  }
  var nN = ((o2 = nN || {})[o2.DomContentLoaded = 0] = "DomContentLoaded", o2[o2.Load = 1] = "Load", o2[o2.FullSnapshot = 2] = "FullSnapshot", o2[o2.IncrementalSnapshot = 3] = "IncrementalSnapshot", o2[o2.Meta = 4] = "Meta", o2[o2.Custom = 5] = "Custom", o2[o2.Plugin = 6] = "Plugin", o2), nU = ((o3 = nU || {})[o3.Mutation = 0] = "Mutation", o3[o3.MouseMove = 1] = "MouseMove", o3[o3.MouseInteraction = 2] = "MouseInteraction", o3[o3.Scroll = 3] = "Scroll", o3[o3.ViewportResize = 4] = "ViewportResize", o3[o3.Input = 5] = "Input", o3[o3.TouchMove = 6] = "TouchMove", o3[o3.MediaInteraction = 7] = "MediaInteraction", o3[o3.StyleSheetRule = 8] = "StyleSheetRule", o3[o3.CanvasMutation = 9] = "CanvasMutation", o3[o3.Font = 10] = "Font", o3[o3.Log = 11] = "Log", o3[o3.Drag = 12] = "Drag", o3[o3.StyleDeclaration = 13] = "StyleDeclaration", o3[o3.Selection = 14] = "Selection", o3[o3.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", o3[o3.CustomElement = 16] = "CustomElement", o3), nB = ((o5 = nB || {})[o5.MouseUp = 0] = "MouseUp", o5[o5.MouseDown = 1] = "MouseDown", o5[o5.Click = 2] = "Click", o5[o5.ContextMenu = 3] = "ContextMenu", o5[o5.DblClick = 4] = "DblClick", o5[o5.Focus = 5] = "Focus", o5[o5.Blur = 6] = "Blur", o5[o5.TouchStart = 7] = "TouchStart", o5[o5.TouchMove_Departed = 8] = "TouchMove_Departed", o5[o5.TouchEnd = 9] = "TouchEnd", o5[o5.TouchCancel = 10] = "TouchCancel", o5), nz = ((o9 = nz || {})[o9.Mouse = 0] = "Mouse", o9[o9.Pen = 1] = "Pen", o9[o9.Touch = 2] = "Touch", o9), nq = ((o6 = nq || {})[o6["2D"] = 0] = "2D", o6[o6.WebGL = 1] = "WebGL", o6[o6.WebGL2 = 2] = "WebGL2", o6), nW = ((o4 = nW || {})[o4.Play = 0] = "Play", o4[o4.Pause = 1] = "Pause", o4[o4.Seeked = 2] = "Seeked", o4[o4.VolumeChange = 3] = "VolumeChange", o4[o4.RateChange = 4] = "RateChange", o4), nV = ((o8 = nV || {})[o8.Document = 0] = "Document", o8[o8.DocumentType = 1] = "DocumentType", o8[o8.Element = 2] = "Element", o8[o8.Text = 3] = "Text", o8[o8.CDATA = 4] = "CDATA", o8[o8.Comment = 5] = "Comment", o8), n$ = (function() {
    function e10() {
      $(this, "length", 0), $(this, "head", null), $(this, "tail", null);
    }
    var t10 = e10.prototype;
    return t10.get = function(e11) {
      if (e11 >= this.length) throw Error("Position outside of list range");
      for (var t11 = this.head, r10 = 0; r10 < e11; r10++) t11 = (null == t11 ? void 0 : t11.next) || null;
      return t11;
    }, t10.addNode = function(e11) {
      var t11 = { value: e11, previous: null, next: null };
      if (e11.__ln = t11, e11.previousSibling && "__ln" in e11.previousSibling) {
        var r10 = e11.previousSibling.__ln.next;
        t11.next = r10, t11.previous = e11.previousSibling.__ln, e11.previousSibling.__ln.next = t11, r10 && (r10.previous = t11);
      } else if (e11.nextSibling && "__ln" in e11.nextSibling && e11.nextSibling.__ln.previous) {
        var n10 = e11.nextSibling.__ln.previous;
        t11.previous = n10, t11.next = e11.nextSibling.__ln, e11.nextSibling.__ln.previous = t11, n10 && (n10.next = t11);
      } else this.head && (this.head.previous = t11), t11.next = this.head, this.head = t11;
      null === t11.next && (this.tail = t11), this.length++;
    }, t10.removeNode = function(e11) {
      var t11 = e11.__ln;
      this.head && (t11.previous ? (t11.previous.next = t11.next, t11.next ? t11.next.previous = t11.previous : this.tail = t11.previous) : (this.head = t11.next, this.head ? this.head.previous = null : this.tail = null), e11.__ln && delete e11.__ln, this.length--);
    }, e10;
  })(), nG = function(e10, t10) {
    return e10 + "@" + t10;
  }, nH = (function() {
    function e10() {
      var e11 = this;
      $(this, "frozen", false), $(this, "locked", false), $(this, "texts", []), $(this, "attributes", []), $(this, "attributeMap", /* @__PURE__ */ new WeakMap()), $(this, "removes", []), $(this, "mapRemoves", []), $(this, "movedMap", {}), $(this, "addedSet", /* @__PURE__ */ new Set()), $(this, "movedSet", /* @__PURE__ */ new Set()), $(this, "droppedSet", /* @__PURE__ */ new Set()), $(this, "removesSubTreeCache", /* @__PURE__ */ new Set()), $(this, "mutationCb"), $(this, "blockClass"), $(this, "blockSelector"), $(this, "maskTextClass"), $(this, "maskTextSelector"), $(this, "inlineStylesheet"), $(this, "maskInputOptions"), $(this, "maskTextFn"), $(this, "maskInputFn"), $(this, "keepIframeSrcFn"), $(this, "recordCanvas"), $(this, "inlineImages"), $(this, "slimDOMOptions"), $(this, "dataURLOptions"), $(this, "doc"), $(this, "mirror"), $(this, "iframeManager"), $(this, "stylesheetManager"), $(this, "shadowDomManager"), $(this, "canvasManager"), $(this, "processedNodeManager"), $(this, "unattachedDoc"), $(this, "processMutations", function(t11) {
        t11.forEach(e11.processMutation), e11.emit();
      }), $(this, "emit", function() {
        if (!e11.frozen && !e11.locked) {
          for (var t11 = [], r10 = /* @__PURE__ */ new Set(), n10 = new n$(), i10 = function(t12) {
            for (var r11 = t12, n11 = -2; -2 === n11; ) n11 = (r11 = r11 && r11.nextSibling) && e11.mirror.getId(r11);
            return n11;
          }, o10 = function(o11) {
            var s11 = nh(o11);
            if (s11 && nj(o11)) {
              var a11 = false;
              if (o11.nodeType === Node.TEXT_NODE) {
                var c11 = s11.tagName;
                if ("TEXTAREA" === c11) return;
                "STYLE" === c11 && e11.addedSet.has(s11) && (a11 = true);
              }
              var u11 = ea(s11) ? e11.mirror.getId(nF(o11)) : e11.mirror.getId(s11), l3 = i10(o11);
              if (-1 === u11 || -1 === l3) return n10.addNode(o11);
              var p3 = eF(o11, { doc: e11.doc, mirror: e11.mirror, blockClass: e11.blockClass, blockSelector: e11.blockSelector, maskTextClass: e11.maskTextClass, maskTextSelector: e11.maskTextSelector, skipChild: true, newlyAddedElement: true, inlineStylesheet: e11.inlineStylesheet, maskInputOptions: e11.maskInputOptions, maskTextFn: e11.maskTextFn, maskInputFn: e11.maskInputFn, slimDOMOptions: e11.slimDOMOptions, dataURLOptions: e11.dataURLOptions, recordCanvas: e11.recordCanvas, inlineImages: e11.inlineImages, onSerialize: function(t12) {
                nT(t12, e11.mirror) && e11.iframeManager.addIframe(t12), nP(t12, e11.mirror) && e11.stylesheetManager.trackLinkElement(t12), nD(o11) && e11.shadowDomManager.addShadowRoot(ny(o11), e11.doc);
              }, onIframeLoad: function(t12, r11) {
                e11.iframeManager.attachIframe(t12, r11), e11.shadowDomManager.observeAttachShadow(t12);
              }, onStylesheetLoad: function(t12, r11) {
                e11.stylesheetManager.attachLinkElement(t12, r11);
              }, cssCaptured: a11 });
              p3 && (t11.push({ parentId: u11, nextId: l3, node: p3 }), r10.add(p3.id));
            }
          }; e11.mapRemoves.length; ) {
            var s10 = e11.mapRemoves.shift();
            e11.cleanupRemovedNode(s10), e11.mirror.removeNodeFromMap(s10);
          }
          for (var a10, c10 = z(e11.movedSet); !(a10 = c10()).done; ) {
            var u10 = a10.value;
            (!nY(e11.removesSubTreeCache, u10, e11.mirror) || e11.movedSet.has(nh(u10))) && o10(u10);
          }
          for (var l2, p2 = z(e11.addedSet); !(l2 = p2()).done; ) {
            var h2 = l2.value;
            nJ(e11.droppedSet, h2) || nY(e11.removesSubTreeCache, h2, e11.mirror) ? nJ(e11.movedSet, h2) ? o10(h2) : e11.droppedSet.add(h2) : o10(h2);
          }
          for (var d2 = null; n10.length; ) {
            var f2 = null;
            if (d2) {
              var g2 = e11.mirror.getId(nh(d2.value)), m2 = i10(d2.value);
              -1 !== g2 && -1 !== m2 && (f2 = d2);
            }
            if (!f2) for (var v2 = n10.tail; v2; ) {
              var y2 = v2;
              if (v2 = v2.previous, y2) {
                var _2 = e11.mirror.getId(nh(y2.value));
                if (-1 === i10(y2.value)) continue;
                if (-1 !== _2) {
                  f2 = y2;
                  break;
                }
                var b2 = nh(y2.value);
                if (b2 && b2.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  var w2 = nv(b2);
                  if (-1 !== e11.mirror.getId(w2)) {
                    f2 = y2;
                    break;
                  }
                }
              }
            }
            if (!f2) {
              for (; n10.head; ) n10.removeNode(n10.head.value);
              break;
            }
            d2 = f2.previous, n10.removeNode(f2.value), o10(f2.value);
          }
          var k2 = { texts: e11.texts.map(function(t12) {
            var r11 = t12.node, n11 = nh(r11);
            return n11 && "TEXTAREA" === n11.tagName && e11.genTextAreaValueMutation(n11), { id: e11.mirror.getId(r11), value: t12.value };
          }).filter(function(e12) {
            return !r10.has(e12.id);
          }).filter(function(t12) {
            return e11.mirror.has(t12.id);
          }), attributes: e11.attributes.map(function(t12) {
            var r11 = t12.attributes;
            if ("string" == typeof r11.style) {
              var n11 = JSON.stringify(t12.styleDiff), i11 = JSON.stringify(t12._unchangedStyles);
              n11.length < r11.style.length && (n11 + i11).split("var(").length === r11.style.split("var(").length && (r11.style = t12.styleDiff);
            }
            return { id: e11.mirror.getId(t12.node), attributes: r11 };
          }).filter(function(e12) {
            return !r10.has(e12.id);
          }).filter(function(t12) {
            return e11.mirror.has(t12.id);
          }), removes: e11.removes, adds: t11 };
          (k2.texts.length || k2.attributes.length || k2.removes.length || k2.adds.length) && (e11.texts = [], e11.attributes = [], e11.attributeMap = /* @__PURE__ */ new WeakMap(), e11.removes = [], e11.addedSet = /* @__PURE__ */ new Set(), e11.movedSet = /* @__PURE__ */ new Set(), e11.droppedSet = /* @__PURE__ */ new Set(), e11.removesSubTreeCache = /* @__PURE__ */ new Set(), e11.movedMap = {}, e11.mutationCb(k2));
        }
      }), $(this, "genTextAreaValueMutation", function(t11) {
        var r10 = e11.attributeMap.get(t11);
        r10 || (r10 = { node: t11, attributes: {}, styleDiff: {}, _unchangedStyles: {} }, e11.attributes.push(r10), e11.attributeMap.set(t11, r10));
        var n10 = Array.from(np(t11), function(e12) {
          return nf(e12) || "";
        }).join("");
        r10.attributes.value = eh({ element: t11, maskInputOptions: e11.maskInputOptions, tagName: t11.tagName, type: eg(t11), value: n10, maskInputFn: e11.maskInputFn });
      }), $(this, "processMutation", function(t11) {
        if (!nR(t11.target, e11.mirror, e11.slimDOMOptions)) switch (t11.type) {
          case "characterData":
            var r10 = nf(t11.target);
            nE(t11.target, e11.blockClass, e11.blockSelector, false) || r10 === t11.oldValue || e11.texts.push({ value: eD(t11.target, e11.maskTextClass, e11.maskTextSelector, true) && r10 ? e11.maskTextFn ? e11.maskTextFn(r10, nO(t11.target)) : r10.replace(/[\S]/g, "*") : r10, node: t11.target });
            break;
          case "attributes":
            var n10 = t11.target, i10 = t11.attributeName, o10 = t11.target.getAttribute(i10);
            if ("value" === i10) {
              var s10 = eg(n10);
              o10 = eh({ element: n10, maskInputOptions: e11.maskInputOptions, tagName: n10.tagName, type: s10, value: o10, maskInputFn: e11.maskInputFn });
            }
            if (nE(t11.target, e11.blockClass, e11.blockSelector, false) || o10 === t11.oldValue) return;
            var a10 = e11.attributeMap.get(t11.target);
            if ("IFRAME" === n10.tagName && "src" === i10 && !e11.keepIframeSrcFn(o10)) if (n10.contentDocument) return;
            else i10 = "rr_src";
            if (a10 || (a10 = { node: t11.target, attributes: {}, styleDiff: {}, _unchangedStyles: {} }, e11.attributes.push(a10), e11.attributeMap.set(t11.target, a10)), "type" === i10 && "INPUT" === n10.tagName && "password" === (t11.oldValue || "").toLowerCase() && n10.setAttribute("data-rr-is-password", "true"), !eT(n10.tagName, i10)) if (a10.attributes[i10] = eA(e11.doc, ed(n10.tagName), ed(i10), o10), "style" === i10) {
              if (!e11.unattachedDoc) try {
                e11.unattachedDoc = document.implementation.createHTMLDocument();
              } catch (t12) {
                e11.unattachedDoc = e11.doc;
              }
              var c10 = e11.unattachedDoc.createElement("span");
              t11.oldValue && c10.setAttribute("style", t11.oldValue);
              for (var u10, l2 = z(Array.from(n10.style)); !(u10 = l2()).done; ) {
                var p2 = u10.value, h2 = n10.style.getPropertyValue(p2), d2 = n10.style.getPropertyPriority(p2);
                h2 !== c10.style.getPropertyValue(p2) || d2 !== c10.style.getPropertyPriority(p2) ? "" === d2 ? a10.styleDiff[p2] = h2 : a10.styleDiff[p2] = [h2, d2] : a10._unchangedStyles[p2] = [h2, d2];
              }
              for (var f2, g2 = z(Array.from(c10.style)); !(f2 = g2()).done; ) {
                var m2 = f2.value;
                "" === n10.style.getPropertyValue(m2) && (a10.styleDiff[m2] = false);
              }
            } else "open" === i10 && "DIALOG" === n10.tagName && (n10.matches("dialog:modal") ? a10.attributes.rr_open_mode = "modal" : a10.attributes.rr_open_mode = "non-modal");
            break;
          case "childList":
            if (nE(t11.target, e11.blockClass, e11.blockSelector, true)) return;
            if ("TEXTAREA" === t11.target.tagName) return void e11.genTextAreaValueMutation(t11.target);
            t11.addedNodes.forEach(function(r11) {
              return e11.genAdds(r11, t11.target);
            }), t11.removedNodes.forEach(function(r11) {
              var n11 = e11.mirror.getId(r11), i11 = ea(t11.target) ? e11.mirror.getId(nv(t11.target)) : e11.mirror.getId(t11.target);
              nE(t11.target, e11.blockClass, e11.blockSelector, false) || nR(r11, e11.mirror, e11.slimDOMOptions) || -1 === e11.mirror.getId(r11) || (e11.addedSet.has(r11) ? (nK(e11.addedSet, r11), e11.droppedSet.add(r11)) : e11.addedSet.has(t11.target) && -1 === n11 || (function e12(t12, r12) {
                if (ea(t12)) return false;
                var n12 = r12.getId(t12);
                if (!r12.has(n12)) return true;
                var i12 = nh(t12);
                return (!i12 || i12.nodeType !== t12.DOCUMENT_NODE) && (!i12 || e12(i12, r12));
              })(t11.target, e11.mirror) || (e11.movedSet.has(r11) && e11.movedMap[nG(n11, i11)] ? nK(e11.movedSet, r11) : (e11.removes.push({ parentId: i11, id: n11, isShadow: !!(ea(t11.target) && ec(t11.target)) || void 0 }), (function(e12, t12) {
                for (var r12 = [e12]; r12.length; ) {
                  var n12 = r12.pop();
                  t12.has(n12) || (t12.add(n12), np(n12).forEach(function(e13) {
                    return r12.push(e13);
                  }));
                }
              })(r11, e11.removesSubTreeCache))), e11.mapRemoves.push(r11));
            });
        }
      }), $(this, "genAdds", function(t11, r10) {
        if (!e11.processedNodeManager.inOtherBuffer(t11, e11) && !(e11.addedSet.has(t11) || e11.movedSet.has(t11))) {
          if (e11.mirror.hasNode(t11)) {
            if (nR(t11, e11.mirror, e11.slimDOMOptions)) return;
            e11.movedSet.add(t11);
            var n10 = null;
            r10 && e11.mirror.hasNode(r10) && (n10 = e11.mirror.getId(r10)), n10 && -1 !== n10 && (e11.movedMap[nG(e11.mirror.getId(t11), n10)] = true);
          } else e11.addedSet.add(t11), e11.droppedSet.delete(t11);
          !nE(t11, e11.blockClass, e11.blockSelector, false) && (np(t11).forEach(function(t12) {
            return e11.genAdds(t12);
          }), nD(t11) && np(ny(t11)).forEach(function(r11) {
            e11.processedNodeManager.add(r11, e11), e11.genAdds(r11, t11);
          }));
        }
      }), $(this, "cleanupRemovedNode", function(t11) {
        if ("IFRAME" === t11.nodeName) try {
          e11.iframeManager.removeIframe(t11);
        } catch (e12) {
        }
        else try {
          e11.stylesheetManager.cleanupStylesheetsForRemovedNode(t11);
        } catch (e12) {
        }
        t11.childNodes.forEach(function(t12) {
          e11.cleanupRemovedNode(t12);
        });
      });
    }
    var t10 = e10.prototype;
    return t10.init = function(e11) {
      var t11 = this;
      ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(function(r10) {
        t11[r10] = e11[r10];
      });
    }, t10.freeze = function() {
      this.frozen = true, this.canvasManager.freeze();
    }, t10.unfreeze = function() {
      this.frozen = false, this.canvasManager.unfreeze(), this.emit();
    }, t10.isFrozen = function() {
      return this.frozen;
    }, t10.lock = function() {
      this.locked = true, this.canvasManager.lock();
    }, t10.unlock = function() {
      this.locked = false, this.canvasManager.unlock(), this.emit();
    }, t10.reset = function() {
      this.shadowDomManager.reset(), this.canvasManager.reset();
    }, t10.getDoc = function() {
      return this.doc;
    }, e10;
  })();
  function nK(e10, t10) {
    e10.delete(t10), np(t10).forEach(function(t11) {
      return nK(e10, t11);
    });
  }
  function nY(e10, t10, r10) {
    var n10, i10;
    return 0 !== e10.size && (n10 = e10, !!(i10 = nh(t10)) && n10.has(i10));
  }
  function nJ(e10, t10) {
    return 0 !== e10.size && (function e11(t11, r10) {
      var n10 = nh(r10);
      return !!n10 && (!!t11.has(n10) || e11(t11, n10));
    })(e10, t10);
  }
  var nZ = function(e10) {
    return sb ? function() {
      for (var t10 = arguments.length, r10 = Array(t10), n10 = 0; n10 < t10; n10++) r10[n10] = arguments[n10];
      try {
        return e10.apply(void 0, [].concat(r10));
      } catch (e11) {
        if (sb && true === sb(e11)) return;
        throw e11;
      }
    } : e10;
  }, nX = [];
  function nQ(e10) {
    try {
      if ("composedPath" in e10) {
        var t10 = e10.composedPath();
        if (t10.length) return t10[0];
      } else if ("path" in e10 && e10.path.length) return e10.path[0];
    } catch (e11) {
    }
    return e10 && e10.target;
  }
  function n0(e10, t10) {
    var r10 = new nH();
    nX.push(r10), r10.init(e10);
    var n10 = new (no("MutationObserver")).constructor(nZ(r10.processMutations.bind(r10)));
    return n10.observe(t10, { attributes: true, attributeOldValue: true, characterData: true, characterDataOldValue: true, childList: true, subtree: true }), n10;
  }
  function n1(e10) {
    var t10 = e10.scrollCb, r10 = e10.doc, n10 = e10.mirror, i10 = e10.blockClass, o10 = e10.blockSelector, s10 = e10.sampling;
    return n_("scroll", nZ(nk(nZ(function(e11) {
      var s11 = nQ(e11);
      if (!(!s11 || nE(s11, i10, o10, true))) {
        var a10 = n10.getId(s11);
        if (s11 === r10 && r10.defaultView) {
          var c10 = nC(r10.defaultView);
          t10({ id: a10, x: c10.left, y: c10.top });
        } else t10({ id: a10, x: s11.scrollLeft, y: s11.scrollTop });
      }
    }), s10.scroll || 100)), r10);
  }
  var n2 = ["INPUT", "TEXTAREA", "SELECT"], n3 = /* @__PURE__ */ new WeakMap();
  function n5(e10) {
    var t10 = [];
    if (n8("CSSGroupingRule") && L(e10.parentRule, CSSGroupingRule) || n8("CSSMediaRule") && L(e10.parentRule, CSSMediaRule) || n8("CSSSupportsRule") && L(e10.parentRule, CSSSupportsRule) || n8("CSSConditionRule") && L(e10.parentRule, CSSConditionRule)) {
      var r10 = Array.from(e10.parentRule.cssRules).indexOf(e10);
      t10.unshift(r10);
    } else if (e10.parentStyleSheet) {
      var n10 = Array.from(e10.parentStyleSheet.cssRules).indexOf(e10);
      t10.unshift(n10);
    }
    return t10;
  }
  function n9(e10, t10, r10) {
    var n10, i10;
    return e10 ? (e10.ownerNode ? n10 = t10.getId(e10.ownerNode) : i10 = r10.getId(e10), { styleId: i10, id: n10 }) : {};
  }
  function n6(e10, t10) {
    var r10, n10, i10, o10 = e10.mirror, s10 = e10.stylesheetManager, a10 = null;
    a10 = "#document" === t10.nodeName ? o10.getId(t10) : o10.getId(nv(t10));
    var c10 = "#document" === t10.nodeName ? null == (r10 = t10.defaultView) ? void 0 : r10.Document : null == (i10 = null == (n10 = t10.ownerDocument) ? void 0 : n10.defaultView) ? void 0 : i10.ShadowRoot, u10 = (null == c10 ? void 0 : c10.prototype) ? Object.getOwnPropertyDescriptor(null == c10 ? void 0 : c10.prototype, "adoptedStyleSheets") : void 0;
    return null !== a10 && -1 !== a10 && c10 && u10 ? (Object.defineProperty(t10, "adoptedStyleSheets", { configurable: u10.configurable, enumerable: u10.enumerable, get: function() {
      var e11;
      return null == (e11 = u10.get) ? void 0 : e11.call(this);
    }, set: function(e11) {
      var t11, r11 = null == (t11 = u10.set) ? void 0 : t11.call(this, e11);
      if (null !== a10 && -1 !== a10) try {
        s10.adoptStyleSheets(e11, a10);
      } catch (e12) {
      }
      return r11;
    } }), nZ(function() {
      Object.defineProperty(t10, "adoptedStyleSheets", { configurable: u10.configurable, enumerable: u10.enumerable, get: u10.get, set: u10.set });
    })) : function() {
    };
  }
  function n4(e10, t10) {
    void 0 === t10 && (t10 = {});
    var r10 = e10.doc.defaultView;
    if (!r10) return function() {
    };
    d2 = t10, f2 = e10.mutationCb, g2 = e10.mousemoveCb, m2 = e10.mouseInteractionCb, v2 = e10.scrollCb, y2 = e10.viewportResizeCb, _2 = e10.inputCb, b2 = e10.mediaInteractionCb, w2 = e10.styleSheetRuleCb, k2 = e10.styleDeclarationCb, x2 = e10.canvasMutationCb, S2 = e10.fontCb, C2 = e10.selectionCb, M2 = e10.customElementCb, e10.mutationCb = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      d2.mutation && d2.mutation.apply(d2, [].concat(t11)), f2.apply(void 0, [].concat(t11));
    }, e10.mousemoveCb = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      d2.mousemove && d2.mousemove.apply(d2, [].concat(t11)), g2.apply(void 0, [].concat(t11));
    }, e10.mouseInteractionCb = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      d2.mouseInteraction && d2.mouseInteraction.apply(d2, [].concat(t11)), m2.apply(void 0, [].concat(t11));
    }, e10.scrollCb = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      d2.scroll && d2.scroll.apply(d2, [].concat(t11)), v2.apply(void 0, [].concat(t11));
    }, e10.viewportResizeCb = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      d2.viewportResize && d2.viewportResize.apply(d2, [].concat(t11)), y2.apply(void 0, [].concat(t11));
    }, e10.inputCb = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      d2.input && d2.input.apply(d2, [].concat(t11)), _2.apply(void 0, [].concat(t11));
    }, e10.mediaInteractionCb = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      d2.mediaInteaction && d2.mediaInteaction.apply(d2, [].concat(t11)), b2.apply(void 0, [].concat(t11));
    }, e10.styleSheetRuleCb = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      d2.styleSheetRule && d2.styleSheetRule.apply(d2, [].concat(t11)), w2.apply(void 0, [].concat(t11));
    }, e10.styleDeclarationCb = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      d2.styleDeclaration && d2.styleDeclaration.apply(d2, [].concat(t11)), k2.apply(void 0, [].concat(t11));
    }, e10.canvasMutationCb = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      d2.canvasMutation && d2.canvasMutation.apply(d2, [].concat(t11)), x2.apply(void 0, [].concat(t11));
    }, e10.fontCb = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      d2.font && d2.font.apply(d2, [].concat(t11)), S2.apply(void 0, [].concat(t11));
    }, e10.selectionCb = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      d2.selection && d2.selection.apply(d2, [].concat(t11)), C2.apply(void 0, [].concat(t11));
    }, e10.customElementCb = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      d2.customElement && d2.customElement.apply(d2, [].concat(t11)), M2.apply(void 0, [].concat(t11));
    }, e10.recordDOM && (es2 = n0(e10, e10.doc));
    var n10 = (function(e11) {
      var t11, r11 = e11.mousemoveCb, n11 = e11.sampling, i11 = e11.doc, o11 = e11.mirror;
      if (false === n11.mousemove) return function() {
      };
      var s11 = "number" == typeof n11.mousemove ? n11.mousemove : 50, a11 = "number" == typeof n11.mousemoveCallback ? n11.mousemoveCallback : 500, c11 = [], u11 = nk(nZ(function(e12) {
        var n12 = Date.now() - t11;
        r11(c11.map(function(e13) {
          return e13.timeOffset -= n12, e13;
        }), e12), c11 = [], t11 = null;
      }), a11), l3 = nZ(nk(nZ(function(e12) {
        var r12 = nQ(e12), n12 = nA(e12) ? e12.changedTouches[0] : e12, i12 = n12.clientX, s12 = n12.clientY;
        t11 || (t11 = nS()), c11.push({ x: i12, y: s12, id: o11.getId(r12), timeOffset: nS() - t11 }), u11("u" > typeof DragEvent && L(e12, DragEvent) ? nU.Drag : L(e12, MouseEvent) ? nU.MouseMove : nU.TouchMove);
      }), s11, { trailing: false })), p3 = [n_("mousemove", l3, i11), n_("touchmove", l3, i11), n_("drag", l3, i11)];
      return nZ(function() {
        p3.forEach(function(e12) {
          return e12();
        });
      });
    })(e10), i10 = (function(e11) {
      var t11 = e11.mouseInteractionCb, r11 = e11.doc, n11 = e11.mirror, i11 = e11.blockClass, o11 = e11.blockSelector, s11 = e11.sampling;
      if (false === s11.mouseInteraction) return function() {
      };
      var a11 = true === s11.mouseInteraction || void 0 === s11.mouseInteraction ? {} : s11.mouseInteraction, c11 = [], u11 = null;
      return Object.keys(nB).filter(function(e12) {
        return Number.isNaN(Number(e12)) && !e12.endsWith("_Departed") && false !== a11[e12];
      }).forEach(function(e12) {
        var s12 = ed(e12), a12 = function(r12) {
          var s13 = nQ(r12);
          if (!nE(s13, i11, o11, true)) {
            var a13 = null, c12 = e12;
            if ("pointerType" in r12) {
              switch (r12.pointerType) {
                case "mouse":
                  a13 = nz.Mouse;
                  break;
                case "touch":
                  a13 = nz.Touch;
                  break;
                case "pen":
                  a13 = nz.Pen;
              }
              a13 === nz.Touch ? nB[e12] === nB.MouseDown ? c12 = "TouchStart" : nB[e12] === nB.MouseUp && (c12 = "TouchEnd") : nz.Pen;
            } else nA(r12) && (a13 = nz.Touch);
            null !== a13 ? (u11 = a13, (c12.startsWith("Touch") && a13 === nz.Touch || c12.startsWith("Mouse") && a13 === nz.Mouse) && (a13 = null)) : nB[e12] === nB.Click && (a13 = u11, u11 = null);
            var l3 = nA(r12) ? r12.changedTouches[0] : r12;
            if (l3) {
              var p3 = n11.getId(s13), h3 = l3.clientX, d3 = l3.clientY;
              nZ(t11)(T({ type: nB[c12], id: p3, x: h3, y: d3 }, null !== a13 && { pointerType: a13 }));
            }
          }
        };
        if (window.PointerEvent) switch (nB[e12]) {
          case nB.MouseDown:
          case nB.MouseUp:
            s12 = s12.replace("mouse", "pointer");
            break;
          case nB.TouchStart:
          case nB.TouchEnd:
            return;
        }
        c11.push(n_(s12, a12, r11));
      }), nZ(function() {
        c11.forEach(function(e12) {
          return e12();
        });
      });
    })(e10), o10 = n1(e10), s10 = (I2 = { win: r10 }, O2 = e10.viewportResizeCb, E2 = I2.win, R2 = -1, A2 = -1, n_("resize", nZ(nk(nZ(function() {
      var e11 = nM(), t11 = nI();
      (R2 !== e11 || A2 !== t11) && (O2({ width: Number(t11), height: Number(e11) }), R2 = e11, A2 = t11);
    }), 200)), E2)), a10 = (function(e11) {
      var t11 = e11.inputCb, r11 = e11.doc, n11 = e11.mirror, i11 = e11.blockClass, o11 = e11.blockSelector, s11 = e11.ignoreClass, a11 = e11.ignoreSelector, c11 = e11.maskInputOptions, u11 = e11.maskInputFn, l3 = e11.sampling, p3 = e11.userTriggeredOnInput;
      function h3(e12) {
        var t12 = nQ(e12), n12 = e12.isTrusted, l4 = t12 && t12.tagName;
        if ((t12 && "OPTION" === l4 && (t12 = nd(t12)), !(!t12 || !l4 || 0 > n2.indexOf(l4) || nE(t12, i11, o11, true))) && !(t12.classList.contains(s11) || a11 && t12.matches(a11))) {
          var h4 = t12.value, f4 = false, g4 = eg(t12) || "";
          "radio" === g4 || "checkbox" === g4 ? f4 = t12.checked : (c11[l4.toLowerCase()] || c11[g4]) && (h4 = eh({ element: t12, maskInputOptions: c11, tagName: l4, type: g4, value: h4, maskInputFn: u11 })), d3(t12, p3 ? { text: h4, isChecked: f4, userTriggered: n12 } : { text: h4, isChecked: f4 });
          var m4 = t12.name;
          "radio" === g4 && m4 && f4 && r11.querySelectorAll('input[type="radio"][name="' + m4 + '"]').forEach(function(e13) {
            if (e13 !== t12) {
              var r12 = e13.value;
              d3(e13, p3 ? { text: r12, isChecked: !f4, userTriggered: false } : { text: r12, isChecked: !f4 });
            }
          });
        }
      }
      function d3(e12, r12) {
        var i12 = n3.get(e12);
        if (!i12 || i12.text !== r12.text || i12.isChecked !== r12.isChecked) {
          n3.set(e12, r12);
          var o12 = n11.getId(e12);
          nZ(t11)(T({}, r12, { id: o12 }));
        }
      }
      var f3 = ("last" === l3.input ? ["change"] : ["input", "change"]).map(function(e12) {
        return n_(e12, nZ(h3), r11);
      }), g3 = r11.defaultView;
      if (!g3) return function() {
        f3.forEach(function(e12) {
          return e12();
        });
      };
      var m3 = g3.Object.getOwnPropertyDescriptor(g3.HTMLInputElement.prototype, "value"), v3 = [[g3.HTMLInputElement.prototype, "value"], [g3.HTMLInputElement.prototype, "checked"], [g3.HTMLSelectElement.prototype, "value"], [g3.HTMLTextAreaElement.prototype, "value"], [g3.HTMLSelectElement.prototype, "selectedIndex"], [g3.HTMLOptionElement.prototype, "selected"]];
      return m3 && m3.set && f3.push.apply(f3, [].concat(v3.map(function(e12) {
        return nx(e12[0], e12[1], { set: function() {
          nZ(h3)({ target: this, isTrusted: false });
        } }, false, g3);
      }))), nZ(function() {
        f3.forEach(function(e12) {
          return e12();
        });
      });
    })(e10), c10 = (P2 = e10.mediaInteractionCb, D2 = e10.blockClass, F2 = e10.blockSelector, j2 = e10.mirror, N2 = e10.sampling, U2 = e10.doc, q2 = [n_("play", (B2 = nZ(function(e11) {
      return nk(nZ(function(t11) {
        var r11 = nQ(t11);
        if (!(!r11 || nE(r11, D2, F2, true))) {
          var n11 = r11.currentTime, i11 = r11.volume, o11 = r11.muted, s11 = r11.playbackRate, a11 = r11.loop;
          P2({ type: e11, id: j2.getId(r11), currentTime: n11, volume: i11, muted: o11, playbackRate: s11, loop: a11 });
        }
      }), N2.media || 500);
    }))(nW.Play), U2), n_("pause", B2(nW.Pause), U2), n_("seeked", B2(nW.Seeked), U2), n_("volumechange", B2(nW.VolumeChange), U2), n_("ratechange", B2(nW.RateChange), U2)], nZ(function() {
      q2.forEach(function(e11) {
        return e11();
      });
    })), u10 = function() {
    }, l2 = function() {
    }, p2 = function() {
    }, h2 = function() {
    };
    e10.recordDOM && (u10 = (function(e11, t11) {
      var r11, n11, i11 = e11.styleSheetRuleCb, o11 = e11.mirror, s11 = e11.stylesheetManager, a11 = t11.win;
      if (!a11.CSSStyleSheet || !a11.CSSStyleSheet.prototype) return function() {
      };
      var c11 = a11.CSSStyleSheet.prototype.insertRule;
      a11.CSSStyleSheet.prototype.insertRule = new Proxy(c11, { apply: nZ(function(e12, t12, r12) {
        var n12 = r12[0], a12 = r12[1], c12 = n9(t12, o11, s11.styleMirror), u12 = c12.id, l4 = c12.styleId;
        return (u12 && -1 !== u12 || l4 && -1 !== l4) && i11({ id: u12, styleId: l4, adds: [{ rule: n12, index: a12 }] }), e12.apply(t12, r12);
      }) }), a11.CSSStyleSheet.prototype.addRule = function(e12, t12, r12) {
        return void 0 === r12 && (r12 = this.cssRules.length), a11.CSSStyleSheet.prototype.insertRule.apply(this, [e12 + " { " + t12 + " }", r12]);
      };
      var u11 = a11.CSSStyleSheet.prototype.deleteRule;
      a11.CSSStyleSheet.prototype.deleteRule = new Proxy(u11, { apply: nZ(function(e12, t12, r12) {
        var n12 = r12[0], a12 = n9(t12, o11, s11.styleMirror), c12 = a12.id, u12 = a12.styleId;
        return (c12 && -1 !== c12 || u12 && -1 !== u12) && i11({ id: c12, styleId: u12, removes: [{ index: n12 }] }), e12.apply(t12, r12);
      }) }), a11.CSSStyleSheet.prototype.removeRule = function(e12) {
        return a11.CSSStyleSheet.prototype.deleteRule.apply(this, [e12]);
      }, a11.CSSStyleSheet.prototype.replace && (r11 = a11.CSSStyleSheet.prototype.replace, a11.CSSStyleSheet.prototype.replace = new Proxy(r11, { apply: nZ(function(e12, t12, r12) {
        var n12 = r12[0], a12 = n9(t12, o11, s11.styleMirror), c12 = a12.id, u12 = a12.styleId;
        return (c12 && -1 !== c12 || u12 && -1 !== u12) && i11({ id: c12, styleId: u12, replace: n12 }), e12.apply(t12, r12);
      }) })), a11.CSSStyleSheet.prototype.replaceSync && (n11 = a11.CSSStyleSheet.prototype.replaceSync, a11.CSSStyleSheet.prototype.replaceSync = new Proxy(n11, { apply: nZ(function(e12, t12, r12) {
        var n12 = r12[0], a12 = n9(t12, o11, s11.styleMirror), c12 = a12.id, u12 = a12.styleId;
        return (c12 && -1 !== c12 || u12 && -1 !== u12) && i11({ id: c12, styleId: u12, replaceSync: n12 }), e12.apply(t12, r12);
      }) }));
      var l3 = {};
      n7("CSSGroupingRule") ? l3.CSSGroupingRule = a11.CSSGroupingRule : (n7("CSSMediaRule") && (l3.CSSMediaRule = a11.CSSMediaRule), n7("CSSConditionRule") && (l3.CSSConditionRule = a11.CSSConditionRule), n7("CSSSupportsRule") && (l3.CSSSupportsRule = a11.CSSSupportsRule));
      var p3 = {};
      return Object.entries(l3).forEach(function(e12) {
        var t12 = e12[0], r12 = e12[1];
        p3[t12] = { insertRule: r12.prototype.insertRule, deleteRule: r12.prototype.deleteRule }, r12.prototype.insertRule = new Proxy(p3[t12].insertRule, { apply: nZ(function(e13, t13, r13) {
          var n12 = r13[0], a12 = r13[1], c12 = n9(t13.parentStyleSheet, o11, s11.styleMirror), u12 = c12.id, l4 = c12.styleId;
          return (u12 && -1 !== u12 || l4 && -1 !== l4) && i11({ id: u12, styleId: l4, adds: [{ rule: n12, index: [].concat(n5(t13), [a12 || 0]) }] }), e13.apply(t13, r13);
        }) }), r12.prototype.deleteRule = new Proxy(p3[t12].deleteRule, { apply: nZ(function(e13, t13, r13) {
          var n12 = r13[0], a12 = n9(t13.parentStyleSheet, o11, s11.styleMirror), c12 = a12.id, u12 = a12.styleId;
          return (c12 && -1 !== c12 || u12 && -1 !== u12) && i11({ id: c12, styleId: u12, removes: [{ index: [].concat(n5(t13), [n12]) }] }), e13.apply(t13, r13);
        }) });
      }), nZ(function() {
        a11.CSSStyleSheet.prototype.insertRule = c11, a11.CSSStyleSheet.prototype.deleteRule = u11, r11 && (a11.CSSStyleSheet.prototype.replace = r11), n11 && (a11.CSSStyleSheet.prototype.replaceSync = n11), Object.entries(l3).forEach(function(e12) {
          var t12 = e12[0], r12 = e12[1];
          r12.prototype.insertRule = p3[t12].insertRule, r12.prototype.deleteRule = p3[t12].deleteRule;
        });
      });
    })(e10, { win: r10 }), l2 = n6(e10, e10.doc), W2 = e10.styleDeclarationCb, V2 = e10.mirror, $2 = e10.ignoreCSSAttributes, G2 = e10.stylesheetManager, K2 = (H2 = { win: r10 }.win).CSSStyleDeclaration.prototype.setProperty, H2.CSSStyleDeclaration.prototype.setProperty = new Proxy(K2, { apply: nZ(function(e11, t11, r11) {
      var n11, i11 = r11[0], o11 = r11[1], s11 = r11[2];
      if ($2.has(i11)) return K2.apply(t11, [i11, o11, s11]);
      var a11 = n9(null == (n11 = t11.parentRule) ? void 0 : n11.parentStyleSheet, V2, G2.styleMirror), c11 = a11.id, u11 = a11.styleId;
      return (c11 && -1 !== c11 || u11 && -1 !== u11) && W2({ id: c11, styleId: u11, set: { property: i11, value: o11, priority: s11 }, index: n5(t11.parentRule) }), e11.apply(t11, r11);
    }) }), Y2 = H2.CSSStyleDeclaration.prototype.removeProperty, H2.CSSStyleDeclaration.prototype.removeProperty = new Proxy(Y2, { apply: nZ(function(e11, t11, r11) {
      var n11, i11 = r11[0];
      if ($2.has(i11)) return Y2.apply(t11, [i11]);
      var o11 = n9(null == (n11 = t11.parentRule) ? void 0 : n11.parentStyleSheet, V2, G2.styleMirror), s11 = o11.id, a11 = o11.styleId;
      return (s11 && -1 !== s11 || a11 && -1 !== a11) && W2({ id: s11, styleId: a11, remove: { property: i11 }, index: n5(t11.parentRule) }), e11.apply(t11, r11);
    }) }), p2 = nZ(function() {
      H2.CSSStyleDeclaration.prototype.setProperty = K2, H2.CSSStyleDeclaration.prototype.removeProperty = Y2;
    }), e10.collectFonts && (h2 = (function(e11) {
      var t11 = e11.fontCb, r11 = e11.doc, n11 = r11.defaultView;
      if (!n11) return function() {
      };
      var i11 = [], o11 = /* @__PURE__ */ new WeakMap(), s11 = n11.FontFace;
      n11.FontFace = function(e12, t12, r12) {
        var n12 = new s11(e12, t12, r12);
        return o11.set(n12, { family: e12, buffer: "string" != typeof t12, descriptors: r12, fontSource: "string" == typeof t12 ? t12 : JSON.stringify(Array.from(new Uint8Array(t12))) }), n12;
      };
      var a11 = nl(r11.fonts, "add", function(e12) {
        return function(r12) {
          return setTimeout(nZ(function() {
            var e13 = o11.get(r12);
            e13 && (t11(e13), o11.delete(r12));
          }), 0), e12.apply(this, [r12]);
        };
      });
      return i11.push(function() {
        n11.FontFace = s11;
      }), i11.push(a11), nZ(function() {
        i11.forEach(function(e12) {
          return e12();
        });
      });
    })(e10)));
    for (var d2, f2, g2, m2, v2, y2, _2, b2, w2, k2, x2, S2, C2, M2, I2, O2, E2, R2, A2, P2, D2, F2, j2, N2, U2, B2, q2, W2, V2, $2, G2, H2, K2, Y2, J2, Z2, X2, Q2, ee2, et2, er2, en2, ei2, eo2, es2, ea2, ec2 = (J2 = e10.doc, Z2 = e10.mirror, X2 = e10.blockClass, Q2 = e10.blockSelector, ee2 = e10.selectionCb, et2 = true, (er2 = nZ(function() {
      var e11 = J2.getSelection();
      if (e11 && (!et2 || null == e11 || !e11.isCollapsed)) {
        et2 = e11.isCollapsed || false;
        for (var t11 = [], r11 = e11.rangeCount || 0, n11 = 0; n11 < r11; n11++) {
          var i11 = e11.getRangeAt(n11), o11 = i11.startContainer, s11 = i11.startOffset, a11 = i11.endContainer, c11 = i11.endOffset;
          nE(o11, X2, Q2, true) || nE(a11, X2, Q2, true) || t11.push({ start: Z2.getId(o11), startOffset: s11, end: Z2.getId(a11), endOffset: c11 });
        }
        ee2({ ranges: t11 });
      }
    }))(), n_("selectionchange", er2)), eu2 = (en2 = e10.doc, ei2 = e10.customElementCb, (eo2 = en2.defaultView) && eo2.customElements ? nl(eo2.customElements, "define", function(e11) {
      return function(t11, r11, n11) {
        try {
          ei2({ define: { name: t11 } });
        } catch (e12) {
          console.warn("Custom element callback failed for " + t11);
        }
        return e11.apply(this, [t11, r11, n11]);
      };
    }) : function() {
    }), el2 = [], ep2 = z(e10.plugins); !(ea2 = ep2()).done; ) {
      var ef2 = ea2.value;
      el2.push(ef2.observer(ef2.callback, r10, ef2.options));
    }
    return nZ(function() {
      nX.forEach(function(e11) {
        return e11.reset();
      }), null == es2 || es2.disconnect(), n10(), i10(), o10(), s10(), a10(), c10(), u10(), l2(), p2(), h2(), ec2(), eu2(), el2.forEach(function(e11) {
        return e11();
      });
    });
  }
  function n8(e10) {
    return void 0 !== window[e10];
  }
  function n7(e10) {
    return !!(void 0 !== window[e10] && window[e10].prototype && "insertRule" in window[e10].prototype && "deleteRule" in window[e10].prototype);
  }
  for (var ie = (function() {
    function e10(e11) {
      $(this, "iframeIdToRemoteIdMap", /* @__PURE__ */ new WeakMap()), $(this, "iframeRemoteIdToIdMap", /* @__PURE__ */ new WeakMap()), this.generateIdFn = e11;
    }
    var t10 = e10.prototype;
    return t10.getId = function(e11, t11, r10, n10) {
      var i10 = r10 || this.getIdToRemoteIdMap(e11), o10 = n10 || this.getRemoteIdToIdMap(e11), s10 = i10.get(t11);
      return s10 || (s10 = this.generateIdFn(), i10.set(t11, s10), o10.set(s10, t11)), s10;
    }, t10.getIds = function(e11, t11) {
      var r10 = this, n10 = this.getIdToRemoteIdMap(e11), i10 = this.getRemoteIdToIdMap(e11);
      return t11.map(function(t12) {
        return r10.getId(e11, t12, n10, i10);
      });
    }, t10.getRemoteId = function(e11, t11, r10) {
      var n10 = r10 || this.getRemoteIdToIdMap(e11);
      if ("number" != typeof t11) return t11;
      var i10 = n10.get(t11);
      return i10 || -1;
    }, t10.getRemoteIds = function(e11, t11) {
      var r10 = this, n10 = this.getRemoteIdToIdMap(e11);
      return t11.map(function(t12) {
        return r10.getRemoteId(e11, t12, n10);
      });
    }, t10.reset = function(e11) {
      if (!e11) {
        this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap(), this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
        return;
      }
      this.iframeIdToRemoteIdMap.delete(e11), this.iframeRemoteIdToIdMap.delete(e11);
    }, t10.getIdToRemoteIdMap = function(e11) {
      var t11 = this.iframeIdToRemoteIdMap.get(e11);
      return t11 || (t11 = /* @__PURE__ */ new Map(), this.iframeIdToRemoteIdMap.set(e11, t11)), t11;
    }, t10.getRemoteIdToIdMap = function(e11) {
      var t11 = this.iframeRemoteIdToIdMap.get(e11);
      return t11 || (t11 = /* @__PURE__ */ new Map(), this.iframeRemoteIdToIdMap.set(e11, t11)), t11;
    }, e10;
  })(), it = (function() {
    function e10(e11) {
      $(this, "iframes", /* @__PURE__ */ new WeakMap()), $(this, "crossOriginIframeMap", /* @__PURE__ */ new WeakMap()), $(this, "crossOriginIframeMirror", new ie(eC)), $(this, "crossOriginIframeStyleMirror"), $(this, "crossOriginIframeRootIdMap", /* @__PURE__ */ new WeakMap()), $(this, "iframeContentDocumentMap", /* @__PURE__ */ new WeakMap()), $(this, "iframeObserverCleanupMap", /* @__PURE__ */ new WeakMap()), $(this, "mirror"), $(this, "mutationCb"), $(this, "wrappedEmit"), $(this, "loadListener"), $(this, "stylesheetManager"), $(this, "recordCrossOriginIframes"), this.mutationCb = e11.mutationCb, this.wrappedEmit = e11.wrappedEmit, this.stylesheetManager = e11.stylesheetManager, this.recordCrossOriginIframes = e11.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new ie(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e11.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this));
    }
    var t10 = e10.prototype;
    return t10.addIframe = function(e11) {
      this.iframes.set(e11, true), e11.contentWindow && this.crossOriginIframeMap.set(e11.contentWindow, e11);
    }, t10.getIframeContentDocument = function(e11) {
      return this.iframeContentDocumentMap.get(e11);
    }, t10.setObserverCleanup = function(e11, t11) {
      this.iframeObserverCleanupMap.set(e11, t11);
    }, t10.getObserverCleanup = function(e11) {
      return this.iframeObserverCleanupMap.get(e11);
    }, t10.removeIframe = function(e11) {
      var t11 = this.iframeContentDocumentMap.get(e11);
      t11 && (this.stylesheetManager.cleanupStylesheetsForRemovedNode(t11), this.mirror.removeNodeFromMap(t11, true)), this.iframes.delete(e11), this.iframeContentDocumentMap.delete(e11);
      var r10 = this.iframeObserverCleanupMap.get(e11);
      if (r10) {
        try {
          r10();
        } catch (e12) {
        }
        this.iframeObserverCleanupMap.delete(e11);
      }
    }, t10.addLoadListener = function(e11) {
      this.loadListener = e11;
    }, t10.attachIframe = function(e11, t11) {
      var r10, n10;
      this.mutationCb({ adds: [{ parentId: this.mirror.getId(e11), nextId: null, node: t11 }], removes: [], texts: [], attributes: [], isAttachIframe: true }), e11.contentDocument && this.iframeContentDocumentMap.set(e11, e11.contentDocument), this.recordCrossOriginIframes && (null == (r10 = e11.contentWindow) || r10.addEventListener("message", this.handleMessage.bind(this))), null == (n10 = this.loadListener) || n10.call(this, e11), e11.contentDocument && e11.contentDocument.adoptedStyleSheets && e11.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e11.contentDocument.adoptedStyleSheets, this.mirror.getId(e11.contentDocument));
    }, t10.handleMessage = function(e11) {
      if ("rrweb" === e11.data.type && e11.origin === e11.data.origin && e11.source) {
        var t11 = this.crossOriginIframeMap.get(e11.source);
        if (t11) {
          var r10 = this.transformCrossOriginEvent(t11, e11.data.event);
          r10 && this.wrappedEmit(r10, e11.data.isCheckout);
        }
      }
    }, t10.transformCrossOriginEvent = function(e11, t11) {
      var r10, n10 = this;
      switch (t11.type) {
        case nN.FullSnapshot:
          this.crossOriginIframeMirror.reset(e11), this.crossOriginIframeStyleMirror.reset(e11), this.replaceIdOnNode(t11.data.node, e11);
          var i10 = t11.data.node.id;
          return this.crossOriginIframeRootIdMap.set(e11, i10), this.patchRootIdOnNode(t11.data.node, i10), { timestamp: t11.timestamp, type: nN.IncrementalSnapshot, data: { source: nU.Mutation, adds: [{ parentId: this.mirror.getId(e11), nextId: null, node: t11.data.node }], removes: [], texts: [], attributes: [], isAttachIframe: true } };
        case nN.Meta:
        case nN.Load:
        case nN.DomContentLoaded:
          break;
        case nN.Plugin:
          return t11;
        case nN.Custom:
          return this.replaceIds(t11.data.payload, e11, ["id", "parentId", "previousId", "nextId"]), t11;
        case nN.IncrementalSnapshot:
          switch (t11.data.source) {
            case nU.Mutation:
              return t11.data.adds.forEach(function(t12) {
                n10.replaceIds(t12, e11, ["parentId", "nextId", "previousId"]), n10.replaceIdOnNode(t12.node, e11);
                var r11 = n10.crossOriginIframeRootIdMap.get(e11);
                r11 && n10.patchRootIdOnNode(t12.node, r11);
              }), t11.data.removes.forEach(function(t12) {
                n10.replaceIds(t12, e11, ["parentId", "id"]);
              }), t11.data.attributes.forEach(function(t12) {
                n10.replaceIds(t12, e11, ["id"]);
              }), t11.data.texts.forEach(function(t12) {
                n10.replaceIds(t12, e11, ["id"]);
              }), t11;
            case nU.Drag:
            case nU.TouchMove:
            case nU.MouseMove:
              return t11.data.positions.forEach(function(t12) {
                n10.replaceIds(t12, e11, ["id"]);
              }), t11;
            case nU.ViewportResize:
              return false;
            case nU.MediaInteraction:
            case nU.MouseInteraction:
            case nU.Scroll:
            case nU.CanvasMutation:
            case nU.Input:
              return this.replaceIds(t11.data, e11, ["id"]), t11;
            case nU.StyleSheetRule:
            case nU.StyleDeclaration:
              return this.replaceIds(t11.data, e11, ["id"]), this.replaceStyleIds(t11.data, e11, ["styleId"]), t11;
            case nU.Font:
              return t11;
            case nU.Selection:
              return t11.data.ranges.forEach(function(t12) {
                n10.replaceIds(t12, e11, ["start", "end"]);
              }), t11;
            case nU.AdoptedStyleSheet:
              return this.replaceIds(t11.data, e11, ["id"]), this.replaceStyleIds(t11.data, e11, ["styleIds"]), null == (r10 = t11.data.styles) || r10.forEach(function(t12) {
                n10.replaceStyleIds(t12, e11, ["styleId"]);
              }), t11;
          }
      }
      return false;
    }, t10.replace = function(e11, t11, r10, n10) {
      for (var i10, o10 = z(n10); !(i10 = o10()).done; ) {
        var s10 = i10.value;
        (Array.isArray(t11[s10]) || "number" == typeof t11[s10]) && (Array.isArray(t11[s10]) ? t11[s10] = e11.getIds(r10, t11[s10]) : t11[s10] = e11.getId(r10, t11[s10]));
      }
      return t11;
    }, t10.replaceIds = function(e11, t11, r10) {
      return this.replace(this.crossOriginIframeMirror, e11, t11, r10);
    }, t10.replaceStyleIds = function(e11, t11, r10) {
      return this.replace(this.crossOriginIframeStyleMirror, e11, t11, r10);
    }, t10.replaceIdOnNode = function(e11, t11) {
      var r10 = this;
      this.replaceIds(e11, t11, ["id", "rootId"]), "childNodes" in e11 && e11.childNodes.forEach(function(e12) {
        r10.replaceIdOnNode(e12, t11);
      });
    }, t10.patchRootIdOnNode = function(e11, t11) {
      var r10 = this;
      e11.type === nV.Document || e11.rootId || (e11.rootId = t11), "childNodes" in e11 && e11.childNodes.forEach(function(e12) {
        r10.patchRootIdOnNode(e12, t11);
      });
    }, e10;
  })(), ir = (function() {
    function e10(e11) {
      $(this, "shadowDoms", /* @__PURE__ */ new WeakSet()), $(this, "mutationCb"), $(this, "scrollCb"), $(this, "bypassOptions"), $(this, "mirror"), $(this, "restoreHandlers", []), this.mutationCb = e11.mutationCb, this.scrollCb = e11.scrollCb, this.bypassOptions = e11.bypassOptions, this.mirror = e11.mirror, this.init();
    }
    var t10 = e10.prototype;
    return t10.init = function() {
      this.reset(), this.patchAttachShadow(Element, document);
    }, t10.addShadowRoot = function(e11, t11) {
      var r10 = this;
      if (ec(e11) && !this.shadowDoms.has(e11)) {
        this.shadowDoms.add(e11);
        var n10 = n0(T({}, this.bypassOptions, { doc: t11, mutationCb: this.mutationCb, mirror: this.mirror, shadowDomManager: this }), e11);
        this.restoreHandlers.push(function() {
          return n10.disconnect();
        }), this.restoreHandlers.push(n1(T({}, this.bypassOptions, { scrollCb: this.scrollCb, doc: e11, mirror: this.mirror }))), setTimeout(function() {
          e11.adoptedStyleSheets && e11.adoptedStyleSheets.length > 0 && r10.bypassOptions.stylesheetManager.adoptStyleSheets(e11.adoptedStyleSheets, r10.mirror.getId(nv(e11))), r10.restoreHandlers.push(n6({ mirror: r10.mirror, stylesheetManager: r10.bypassOptions.stylesheetManager }, e11));
        }, 0);
      }
    }, t10.observeAttachShadow = function(e11) {
      e11.contentWindow && e11.contentDocument && this.patchAttachShadow(e11.contentWindow.Element, e11.contentDocument);
    }, t10.patchAttachShadow = function(e11, t11) {
      var r10 = this;
      this.restoreHandlers.push(nl(e11.prototype, "attachShadow", function(e12) {
        return function(n10) {
          var i10 = e12.call(this, n10), o10 = ny(this);
          return o10 && nj(this) && r10.addShadowRoot(o10, t11), i10;
        };
      }));
    }, t10.reset = function() {
      this.restoreHandlers.forEach(function(e11) {
        try {
          e11();
        } catch (e12) {
        }
      }), this.restoreHandlers = [], this.shadowDoms = /* @__PURE__ */ new WeakSet();
    }, e10;
  })(), ii = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", io = "u" < typeof Uint8Array ? [] : new Uint8Array(256), is = 0; is < ii.length; is++) io[ii.charCodeAt(is)] = is;
  var ia = function(e10) {
    var t10, r10 = new Uint8Array(e10), n10 = r10.length, i10 = "";
    for (t10 = 0; t10 < n10; t10 += 3) i10 += ii[r10[t10] >> 2], i10 += ii[(3 & r10[t10]) << 4 | r10[t10 + 1] >> 4], i10 += ii[(15 & r10[t10 + 1]) << 2 | r10[t10 + 2] >> 6], i10 += ii[63 & r10[t10 + 2]];
    return n10 % 3 == 2 ? i10 = i10.substring(0, i10.length - 1) + "=" : n10 % 3 == 1 && (i10 = i10.substring(0, i10.length - 2) + "=="), i10;
  }, ic = /* @__PURE__ */ new Map(), iu = function(e10, t10, r10) {
    if (e10 && (ip(e10, t10) || (void 0 === e10 ? "undefined" : N(e10)) === "object")) {
      var n10, i10 = e10.constructor.name, o10 = ((n10 = ic.get(r10)) || (n10 = /* @__PURE__ */ new Map(), ic.set(r10, n10)), n10.has(i10) || n10.set(i10, []), n10.get(i10)), s10 = o10.indexOf(e10);
      return -1 === s10 && (s10 = o10.length, o10.push(e10)), s10;
    }
  }, il = function(e10, t10, r10) {
    return e10.map(function(e11) {
      return (function e12(t11, r11, n10) {
        if (L(t11, Array)) return t11.map(function(t12) {
          return e12(t12, r11, n10);
        });
        if (null === t11) ;
        else if (L(t11, Float32Array) || L(t11, Float64Array) || L(t11, Int32Array) || L(t11, Uint32Array) || L(t11, Uint8Array) || L(t11, Uint16Array) || L(t11, Int16Array) || L(t11, Int8Array) || L(t11, Uint8ClampedArray)) return { rr_type: t11.constructor.name, args: [Object.values(t11)] };
        else if (L(t11, ArrayBuffer)) return { rr_type: t11.constructor.name, base64: ia(t11) };
        else if (L(t11, DataView)) return { rr_type: t11.constructor.name, args: [e12(t11.buffer, r11, n10), t11.byteOffset, t11.byteLength] };
        else if (L(t11, HTMLImageElement)) return { rr_type: t11.constructor.name, src: t11.src };
        else if (L(t11, HTMLCanvasElement)) return { rr_type: "HTMLImageElement", src: t11.toDataURL() };
        else if (L(t11, ImageData)) return { rr_type: t11.constructor.name, args: [e12(t11.data, r11, n10), t11.width, t11.height] };
        else if (ip(t11, r11) || (void 0 === t11 ? "undefined" : N(t11)) === "object") return { rr_type: t11.constructor.name, index: iu(t11, r11, n10) };
        return t11;
      })(e11, t10, r10);
    });
  }, ip = function(e10, t10) {
    return !!["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(function(e11) {
      return "function" == typeof t10[e11];
    }).find(function(r10) {
      return L(e10, t10[r10]);
    });
  };
  function ih(e10, t10, r10, n10) {
    var i10 = [];
    try {
      var o10 = nl(e10.HTMLCanvasElement.prototype, "getContext", function(e11) {
        return function(i11) {
          for (var o11 = arguments.length, s10 = Array(o11 > 1 ? o11 - 1 : 0), a10 = 1; a10 < o11; a10++) s10[a10 - 1] = arguments[a10];
          if (!nE(this, t10, r10, true)) {
            var c10 = "experimental-webgl" === i11 ? "webgl" : i11;
            if ("__context" in this || (this.__context = c10), n10 && ["webgl", "webgl2"].includes(c10)) if (s10[0] && "object" === N(s10[0])) {
              var u10 = s10[0];
              u10.preserveDrawingBuffer || (u10.preserveDrawingBuffer = true);
            } else s10.splice(0, 1, { preserveDrawingBuffer: true });
          }
          return e11.apply(this, [].concat([i11], s10));
        };
      });
      i10.push(o10);
    } catch (e11) {
      console.error("failed to patch HTMLCanvasElement.prototype.getContext");
    }
    return function() {
      i10.forEach(function(e11) {
        return e11();
      });
    };
  }
  function id(e10, t10, r10, n10, i10, o10) {
    for (var s10, a10 = [], c10 = Object.getOwnPropertyNames(e10), u10 = z(c10); !(s10 = u10()).done; ) !(function() {
      var c11 = s10.value;
      if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(c11)) try {
        if ("function" != typeof e10[c11]) return "continue";
        var u11 = nl(e10, c11, function(e11) {
          return function() {
            for (var s11 = arguments.length, a11 = Array(s11), u12 = 0; u12 < s11; u12++) a11[u12] = arguments[u12];
            var l2 = e11.apply(this, a11);
            if (iu(l2, o10, this), "tagName" in this.canvas && !nE(this.canvas, n10, i10, true)) {
              var p2 = il(a11, o10, this);
              r10(this.canvas, { type: t10, property: c11, args: p2 });
            }
            return l2;
          };
        });
        a10.push(u11);
      } catch (n11) {
        a10.push(nx(e10, c11, { set: function(e11) {
          r10(this.canvas, { type: t10, property: c11, args: [e11], setter: true });
        } }));
      }
    })();
    return a10;
  }
  var ig = "KGZ1bmN0aW9uKCkgewogICJ1c2Ugc3RyaWN0IjsKICB2YXIgY2hhcnMgPSAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyI7CiAgdmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAidW5kZWZpbmVkIiA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTsKICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7CiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpOwogIH0KICB2YXIgZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHsKICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSwgaTIsIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gIiI7CiAgICBmb3IgKGkyID0gMDsgaTIgPCBsZW47IGkyICs9IDMpIHsKICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kyXSA+PiAyXTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMl0gJiAzKSA8PCA0IHwgYnl0ZXNbaTIgKyAxXSA+PiA0XTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMiArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpMiArIDJdID4+IDZdOwogICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaTIgKyAyXSAmIDYzXTsKICAgIH0KICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgIj0iOwogICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgIj09IjsKICAgIH0KICAgIHJldHVybiBiYXNlNjQ7CiAgfTsKICBjb25zdCBsYXN0QmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7CiAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICBhc3luYyBmdW5jdGlvbiBnZXRUcmFuc3BhcmVudEJsb2JGb3Iod2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMpIHsKICAgIGNvbnN0IGlkID0gYCR7d2lkdGh9LSR7aGVpZ2h0fWA7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBpZiAodHJhbnNwYXJlbnRCbG9iTWFwLmhhcyhpZCkpIHJldHVybiB0cmFuc3BhcmVudEJsb2JNYXAuZ2V0KGlkKTsKICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsKICAgICAgb2Zmc2NyZWVuLmdldENvbnRleHQoIjJkIik7CiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBvZmZzY3JlZW4uY29udmVydFRvQmxvYihkYXRhVVJMT3B0aW9ucyk7CiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpOwogICAgICBjb25zdCBiYXNlNjQgPSBlbmNvZGUoYXJyYXlCdWZmZXIpOwogICAgICB0cmFuc3BhcmVudEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICByZXR1cm4gYmFzZTY0OwogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuICIiOwogICAgfQogIH0KICBjb25zdCB3b3JrZXIgPSBzZWxmOwogIHdvcmtlci5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbihlKSB7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBjb25zdCB7IGlkLCBiaXRtYXAsIHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zIH0gPSBlLmRhdGE7CiAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKAogICAgICAgIHdpZHRoLAogICAgICAgIGhlaWdodCwKICAgICAgICBkYXRhVVJMT3B0aW9ucwogICAgICApOwogICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOwogICAgICBjb25zdCBjdHggPSBvZmZzY3JlZW4uZ2V0Q29udGV4dCgiMmQiKTsKICAgICAgY3R4LmRyYXdJbWFnZShiaXRtYXAsIDAsIDApOwogICAgICBiaXRtYXAuY2xvc2UoKTsKICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IG9mZnNjcmVlbi5jb252ZXJ0VG9CbG9iKGRhdGFVUkxPcHRpb25zKTsKICAgICAgY29uc3QgdHlwZSA9IGJsb2IudHlwZTsKICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7CiAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7CiAgICAgIGlmICghbGFzdEJsb2JNYXAuaGFzKGlkKSAmJiBhd2FpdCB0cmFuc3BhcmVudEJhc2U2NCA9PT0gYmFzZTY0KSB7CiAgICAgICAgbGFzdEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICAgIHJldHVybiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZCB9KTsKICAgICAgfQogICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KSByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7CiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7CiAgICAgICAgaWQsCiAgICAgICAgdHlwZSwKICAgICAgICBiYXNlNjQsCiAgICAgICAgd2lkdGgsCiAgICAgICAgaGVpZ2h0CiAgICAgIH0pOwogICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsKICAgIH0KICB9Owp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS1iaXRtYXAtZGF0YS11cmwtd29ya2VyLUlKcEM3Z19iLmpzLm1hcAo=", im = "u" > typeof window && window.Blob && new Blob([Uint8Array.from(atob(ig), function(e10) {
    return e10.charCodeAt(0);
  })], { type: "text/javascript;charset=utf-8" });
  function iv(e10) {
    var t10;
    try {
      if (!(t10 = im && (window.URL || window.webkitURL).createObjectURL(im))) throw "";
      var r10 = new Worker(t10, { name: null == e10 ? void 0 : e10.name });
      return r10.addEventListener("error", function() {
        (window.URL || window.webkitURL).revokeObjectURL(t10);
      }), r10;
    } catch (t11) {
      return new Worker("data:text/javascript;base64," + ig, { name: null == e10 ? void 0 : e10.name });
    } finally {
      t10 && (window.URL || window.webkitURL).revokeObjectURL(t10);
    }
  }
  var iy = (function() {
    function e10(e11) {
      var t11 = this;
      $(this, "pendingCanvasMutations", /* @__PURE__ */ new Map()), $(this, "rafStamps", { latestId: 0, invokeId: null }), $(this, "mirror"), $(this, "mutationCb"), $(this, "resetObservers"), $(this, "frozen", false), $(this, "locked", false), $(this, "processMutation", function(e12, r11) {
        (t11.rafStamps.invokeId && t11.rafStamps.latestId !== t11.rafStamps.invokeId || !t11.rafStamps.invokeId) && (t11.rafStamps.invokeId = t11.rafStamps.latestId), t11.pendingCanvasMutations.has(e12) || t11.pendingCanvasMutations.set(e12, []), t11.pendingCanvasMutations.get(e12).push(r11);
      });
      var r10 = e11.sampling, n10 = void 0 === r10 ? "all" : r10, i10 = e11.win, o10 = e11.blockClass, s10 = e11.blockSelector, a10 = e11.recordCanvas, c10 = e11.dataURLOptions;
      this.mutationCb = e11.mutationCb, this.mirror = e11.mirror, a10 && "all" === n10 && this.initCanvasMutationObserver(i10, o10, s10), a10 && "number" == typeof n10 && this.initCanvasFPSObserver(n10, i10, o10, s10, { dataURLOptions: c10 });
    }
    var t10 = e10.prototype;
    return t10.reset = function() {
      this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers();
    }, t10.freeze = function() {
      this.frozen = true;
    }, t10.unfreeze = function() {
      this.frozen = false;
    }, t10.lock = function() {
      this.locked = true;
    }, t10.unlock = function() {
      this.locked = false;
    }, t10.initCanvasFPSObserver = function(e11, t11, r10, n10, i10) {
      var o10, s10 = this, a10 = ih(t11, r10, n10, true), c10 = /* @__PURE__ */ new Map(), u10 = new iv();
      u10.onmessage = function(e12) {
        var t12 = e12.data.id;
        if (c10.set(t12, false), "base64" in e12.data) {
          var r11 = e12.data, n11 = r11.base64, i11 = r11.type, o11 = r11.width, a11 = r11.height;
          s10.mutationCb({ id: t12, type: nq["2D"], commands: [{ property: "clearRect", args: [0, 0, o11, a11] }, { property: "drawImage", args: [{ rr_type: "ImageBitmap", args: [{ rr_type: "Blob", data: [{ rr_type: "ArrayBuffer", base64: n11 }], type: i11 }] }, 0, 0] }] });
        }
      };
      var l2 = 1e3 / e11, p2 = 0, h2 = function() {
        var e12 = [];
        return t11.document.querySelectorAll("canvas").forEach(function(t12) {
          nE(t12, r10, n10, true) || e12.push(t12);
        }), e12;
      }, d2 = function(e12) {
        if (p2 && e12 - p2 < l2) {
          o10 = requestAnimationFrame(d2);
          return;
        }
        p2 = e12, h2().forEach(E(function(e13) {
          var t12, r11, n11, o11;
          return q(this, function(a11) {
            switch (a11.label) {
              case 0:
                if (r11 = s10.mirror.getId(e13), c10.get(r11) || 0 === e13.width || 0 === e13.height) return [2];
                return c10.set(r11, true), ["webgl", "webgl2"].includes(e13.__context) && (null == (t12 = null == (n11 = e13.getContext(e13.__context)) ? void 0 : n11.getContextAttributes()) ? void 0 : t12.preserveDrawingBuffer) === false && n11.clear(n11.COLOR_BUFFER_BIT), [4, createImageBitmap(e13)];
              case 1:
                return o11 = a11.sent(), u10.postMessage({ id: r11, bitmap: o11, width: e13.width, height: e13.height, dataURLOptions: i10.dataURLOptions }, [o11]), [2];
            }
          });
        })), o10 = requestAnimationFrame(d2);
      };
      o10 = requestAnimationFrame(d2), this.resetObservers = function() {
        a10(), cancelAnimationFrame(o10);
      };
    }, t10.initCanvasMutationObserver = function(e11, t11, r10) {
      this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
      var n10, i10, o10 = ih(e11, t11, r10, false), s10 = (function(e12, t12, r11, n11) {
        for (var i11, o11 = [], s11 = Object.getOwnPropertyNames(t12.CanvasRenderingContext2D.prototype), a11 = z(s11); !(i11 = a11()).done; ) !(function() {
          var s12 = i11.value;
          try {
            if ("function" != typeof t12.CanvasRenderingContext2D.prototype[s12]) return "continue";
            var a12 = nl(t12.CanvasRenderingContext2D.prototype, s12, function(i12) {
              return function() {
                for (var o12 = this, a13 = arguments.length, c11 = Array(a13), u10 = 0; u10 < a13; u10++) c11[u10] = arguments[u10];
                return nE(this.canvas, r11, n11, true) || setTimeout(function() {
                  var r12 = il(c11, t12, o12);
                  e12(o12.canvas, { type: nq["2D"], property: s12, args: r12 });
                }, 0), i12.apply(this, c11);
              };
            });
            o11.push(a12);
          } catch (r12) {
            var c10 = nx(t12.CanvasRenderingContext2D.prototype, s12, { set: function(t13) {
              e12(this.canvas, { type: nq["2D"], property: s12, args: [t13], setter: true });
            } });
            o11.push(c10);
          }
        })();
        return function() {
          o11.forEach(function(e13) {
            return e13();
          });
        };
      })(this.processMutation.bind(this), e11, t11, r10), a10 = (n10 = this.processMutation.bind(this), (i10 = []).push.apply(i10, [].concat(id(e11.WebGLRenderingContext.prototype, nq.WebGL, n10, t11, r10, e11))), void 0 !== e11.WebGL2RenderingContext && i10.push.apply(i10, [].concat(id(e11.WebGL2RenderingContext.prototype, nq.WebGL2, n10, t11, r10, e11))), function() {
        i10.forEach(function(e12) {
          return e12();
        });
      });
      this.resetObservers = function() {
        o10(), s10(), a10();
      };
    }, t10.startPendingCanvasMutationFlusher = function() {
      var e11 = this;
      requestAnimationFrame(function() {
        return e11.flushPendingCanvasMutations();
      });
    }, t10.startRAFTimestamping = function() {
      var e11 = this, t11 = function(r10) {
        e11.rafStamps.latestId = r10, requestAnimationFrame(t11);
      };
      requestAnimationFrame(t11);
    }, t10.flushPendingCanvasMutations = function() {
      var e11 = this;
      this.pendingCanvasMutations.forEach(function(t11, r10) {
        var n10 = e11.mirror.getId(r10);
        e11.flushPendingCanvasMutationFor(r10, n10);
      }), requestAnimationFrame(function() {
        return e11.flushPendingCanvasMutations();
      });
    }, t10.flushPendingCanvasMutationFor = function(e11, t11) {
      if (!this.frozen && !this.locked) {
        var r10 = this.pendingCanvasMutations.get(e11);
        if (r10 && -1 !== t11) {
          var n10 = r10.map(function(e12) {
            return e12.type, F(e12, ["type"]);
          }), i10 = r10[0].type;
          this.mutationCb({ id: t11, type: i10, commands: n10 }), this.pendingCanvasMutations.delete(e11);
        }
      }
    }, e10;
  })(), i_ = (function() {
    function e10(e11) {
      $(this, "trackedLinkElements", /* @__PURE__ */ new WeakSet()), $(this, "mutationCb"), $(this, "adoptedStyleSheetCb"), $(this, "styleMirror", new nL()), this.mutationCb = e11.mutationCb, this.adoptedStyleSheetCb = e11.adoptedStyleSheetCb;
    }
    var t10 = e10.prototype;
    return t10.attachLinkElement = function(e11, t11) {
      "_cssText" in t11.attributes && this.mutationCb({ adds: [], removes: [], texts: [], attributes: [{ id: t11.id, attributes: t11.attributes }] }), this.trackLinkElement(e11);
    }, t10.trackLinkElement = function(e11) {
      this.trackedLinkElements.has(e11) || (this.trackedLinkElements.add(e11), this.trackStylesheetInLinkElement(e11));
    }, t10.adoptStyleSheets = function(e11, t11) {
      if (0 !== e11.length) {
        for (var r10, n10, i10 = { id: t11, styleIds: [] }, o10 = [], s10 = z(e11); !(n10 = s10()).done; ) r10 = this, (function() {
          var e12 = n10.value, t12 = void 0;
          r10.styleMirror.has(e12) ? t12 = r10.styleMirror.getId(e12) : (t12 = r10.styleMirror.add(e12), o10.push({ styleId: t12, rules: Array.from(e12.rules || CSSRule, function(t13, r11) {
            return { rule: el(t13, e12.href), index: r11 };
          }) })), i10.styleIds.push(t12);
        })();
        o10.length > 0 && (i10.styles = o10), this.adoptedStyleSheetCb(i10);
      }
    }, t10.reset = function() {
      this.styleMirror.reset(), this.trackedLinkElements = /* @__PURE__ */ new WeakSet();
    }, t10.cleanupStylesheetsForRemovedNode = function(e11) {
      var t11 = this;
      try {
        if (e11.nodeType === Node.DOCUMENT_NODE && e11.adoptedStyleSheets) for (var r10, n10 = z(e11.adoptedStyleSheets); !(r10 = n10()).done; ) {
          var i10 = r10.value;
          this.styleMirror.remove(i10);
        }
        "STYLE" === e11.nodeName && e11.sheet && this.styleMirror.remove(e11.sheet), "LINK" === e11.nodeName && "stylesheet" === e11.rel && e11.sheet && this.styleMirror.remove(e11.sheet), e11.childNodes && e11.childNodes.forEach(function(e12) {
          t11.cleanupStylesheetsForRemovedNode(e12);
        });
      } catch (e12) {
      }
    }, t10.trackStylesheetInLinkElement = function(e11) {
    }, e10;
  })(), ib = (function() {
    function e10() {
      $(this, "nodeMap", /* @__PURE__ */ new WeakMap()), $(this, "active", false);
    }
    var t10 = e10.prototype;
    return t10.inOtherBuffer = function(e11, t11) {
      var r10 = this.nodeMap.get(e11);
      return r10 && Array.from(r10).some(function(e12) {
        return e12 !== t11;
      });
    }, t10.add = function(e11, t11) {
      var r10 = this;
      this.active || (this.active = true, requestAnimationFrame(function() {
        r10.nodeMap = /* @__PURE__ */ new WeakMap(), r10.active = false;
      })), this.nodeMap.set(e11, (this.nodeMap.get(e11) || /* @__PURE__ */ new Set()).add(t11));
    }, t10.destroy = function() {
    }, e10;
  })(), iw = false;
  try {
    if (2 !== Array.from([1], function(e10) {
      return 2 * e10;
    })[0]) {
      var ik = document.createElement("iframe");
      document.body.appendChild(ik), Array.from = (null == (st = ik.contentWindow) ? void 0 : st.Array.from) || Array.from, document.body.removeChild(ik);
    }
  } catch (e10) {
    console.debug("Unable to override Array.from", e10);
  }
  var ix = new ep();
  function iS(e10) {
    void 0 === e10 && (e10 = {});
    var t10 = e10.emit, r10 = e10.checkoutEveryNms, n10 = e10.checkoutEveryNth, i10 = e10.blockClass, o10 = void 0 === i10 ? "rr-block" : i10, s10 = e10.blockSelector, a10 = void 0 === s10 ? null : s10, c10 = e10.ignoreClass, u10 = void 0 === c10 ? "rr-ignore" : c10, l2 = e10.ignoreSelector, p2 = void 0 === l2 ? null : l2, h2 = e10.maskTextClass, d2 = void 0 === h2 ? "rr-mask" : h2, f2 = e10.maskTextSelector, g2 = void 0 === f2 ? null : f2, m2 = e10.inlineStylesheet, v2 = void 0 === m2 || m2, y2 = e10.maskAllInputs, _2 = e10.maskInputOptions, b2 = e10.slimDOMOptions, w2 = e10.maskInputFn, k2 = e10.maskTextFn, x2 = e10.hooks, S2 = e10.packFn, C2 = e10.sampling, M2 = void 0 === C2 ? {} : C2, I2 = e10.dataURLOptions, O2 = void 0 === I2 ? {} : I2, E2 = e10.mousemoveWait, R2 = e10.recordDOM, A2 = void 0 === R2 || R2, P2 = e10.recordCanvas, D2 = void 0 !== P2 && P2, L2 = e10.recordCrossOriginIframes, F2 = void 0 !== L2 && L2, j2 = e10.allowedIframeOrigins, U2 = e10.recordAfter, B2 = void 0 === U2 ? "DOMContentLoaded" === e10.recordAfter ? e10.recordAfter : "load" : U2, q2 = e10.userTriggeredOnInput, W2 = void 0 !== q2 && q2, V2 = e10.collectFonts, $2 = void 0 !== V2 && V2, G2 = e10.inlineImages, H2 = void 0 !== G2 && G2, K2 = e10.plugins, Y2 = e10.keepIframeSrcFn, J2 = void 0 === Y2 ? function() {
      return false;
    } : Y2, Z2 = e10.ignoreCSSAttributes, X2 = void 0 === Z2 ? /* @__PURE__ */ new Set([]) : Z2;
    sb = e10.errorHandler, F2 && j2 && j2.length > 0 && 0 === (es2 = (function(e11) {
      if (!Array.isArray(e11) || 0 === e11.length) throw Error("[rrweb] allowedIframeOrigins must be a non-empty array of origin strings.");
      for (var t11 = /* @__PURE__ */ new Set(), r11 = 0; r11 < e11.length; r11++) {
        var n11 = e11[r11];
        if ("string" != typeof n11) throw Error("[rrweb] allowedIframeOrigins[" + r11 + "] must be a string, got " + (void 0 === n11 ? "undefined" : N(n11)) + ".");
        var i11 = (function(e12) {
          try {
            var t12 = new URL(e12).origin;
            return "null" !== t12 ? t12 : null;
          } catch (e13) {
            return null;
          }
        })(n11);
        i11 && t11.add(i11);
      }
      return Object.freeze(t11);
    })(j2)).size && (es2 = void 0);
    var Q2 = !F2 || window.parent === window, ee2 = false;
    if (!Q2) try {
      window.parent.document && (ee2 = false);
    } catch (e11) {
      ee2 = true;
    }
    if (Q2 && !t10) throw Error("emit function is required");
    if (!Q2 && !ee2) return function() {
    };
    void 0 !== E2 && void 0 === M2.mousemove && (M2.mousemove = E2), ix.reset();
    var et2 = true === y2 ? { color: true, date: true, "datetime-local": true, email: true, month: true, number: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true, textarea: true, select: true, password: true, hidden: true } : void 0 !== _2 ? _2 : { password: true }, er2 = true === b2 || "all" === b2 ? { script: true, comment: true, headFavicon: true, headWhitespace: true, headMetaSocial: true, headMetaRobots: true, headMetaHttpEquiv: true, headMetaVerification: true, headMetaAuthorship: "all" === b2, headMetaDescKeywords: "all" === b2, headTitleMutations: "all" === b2 } : b2 || {};
    void 0 === eo2 && (eo2 = window), "NodeList" in eo2 && !eo2.NodeList.prototype.forEach && (eo2.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in eo2 && !eo2.DOMTokenList.prototype.forEach && (eo2.DOMTokenList.prototype.forEach = Array.prototype.forEach);
    var en2 = 0, ei2 = function(e11) {
      for (var t11, r11 = z(K2 || []); !(t11 = r11()).done; ) {
        var n11 = t11.value;
        n11.eventProcessor && (e11 = n11.eventProcessor(e11));
      }
      return S2 && !ee2 && (e11 = S2(e11)), e11;
    };
    sw = function(e11, i11) {
      if (e11.timestamp = nS(), (null == (s11 = nX[0]) ? void 0 : s11.isFrozen()) && e11.type !== nN.FullSnapshot && (e11.type !== nN.IncrementalSnapshot || e11.data.source !== nU.Mutation) && nX.forEach(function(e12) {
        return e12.unfreeze();
      }), Q2) null == t10 || t10(ei2(e11), i11);
      else if (ee2) {
        var o11 = { type: "rrweb", event: ei2(e11), origin: window.location.origin, isCheckout: i11 };
        if (es2) for (var s11, a11, c11 = z(es2); !(a11 = c11()).done; ) {
          var u11 = a11.value;
          window.parent.postMessage(o11, u11);
        }
        else window.parent.postMessage(o11, "*");
      }
      if (e11.type === nN.FullSnapshot) ea2 = e11, en2 = 0;
      else if (e11.type === nN.IncrementalSnapshot) {
        if (e11.data.source === nU.Mutation && e11.data.isAttachIframe) return;
        en2++;
        var l3 = n10 && en2 >= n10, p3 = r10 && e11.timestamp - ea2.timestamp > r10;
        (l3 || p3) && sk(true);
      }
    };
    for (var eo2, es2, ea2, ec2, eu2 = function(e11) {
      sw({ type: nN.IncrementalSnapshot, data: T({ source: nU.Mutation }, e11) });
    }, el2 = function(e11) {
      return sw({ type: nN.IncrementalSnapshot, data: T({ source: nU.Scroll }, e11) });
    }, eh2 = function(e11) {
      return sw({ type: nN.IncrementalSnapshot, data: T({ source: nU.CanvasMutation }, e11) });
    }, ed2 = new i_({ mutationCb: eu2, adoptedStyleSheetCb: function(e11) {
      return sw({ type: nN.IncrementalSnapshot, data: T({ source: nU.AdoptedStyleSheet }, e11) });
    } }), ef2 = new it({ mirror: ix, mutationCb: eu2, stylesheetManager: ed2, recordCrossOriginIframes: F2, wrappedEmit: sw }), eg2 = z(K2 || []); !(ec2 = eg2()).done; ) {
      var em2 = ec2.value;
      em2.getMirror && em2.getMirror({ nodeMirror: ix, crossOriginIframeMirror: ef2.crossOriginIframeMirror, crossOriginIframeStyleMirror: ef2.crossOriginIframeStyleMirror });
    }
    var ev2 = new ib();
    sx = new iy({ recordCanvas: D2, mutationCb: eh2, win: window, blockClass: o10, blockSelector: a10, mirror: ix, sampling: M2.canvas, dataURLOptions: O2 });
    var ey2 = new ir({ mutationCb: eu2, scrollCb: el2, bypassOptions: { blockClass: o10, blockSelector: a10, maskTextClass: d2, maskTextSelector: g2, inlineStylesheet: v2, maskInputOptions: et2, dataURLOptions: O2, maskTextFn: k2, maskInputFn: w2, recordCanvas: D2, inlineImages: H2, sampling: M2, slimDOMOptions: er2, iframeManager: ef2, stylesheetManager: ed2, canvasManager: sx, keepIframeSrcFn: J2, processedNodeManager: ev2 }, mirror: ix });
    sk = function(e11) {
      if (void 0 === e11 && (e11 = false), A2) {
        sw({ type: nN.Meta, data: { href: window.location.href, width: nI(), height: nM() } }, e11), ed2.reset(), ey2.init(), nX.forEach(function(e12) {
          return e12.lock();
        });
        var t11, r11, n11, i11, s11, c11, u11, l3, p3, h3, f3, m3, y3, _3, b3, x3, S3, C3, M3, I3, E3, R3, T2, P3, L3 = (t11 = document, i11 = void 0 === (n11 = (r11 = { mirror: ix, blockClass: o10, blockSelector: a10, maskTextClass: d2, maskTextSelector: g2, inlineStylesheet: v2, maskAllInputs: et2, maskTextFn: k2, maskInputFn: w2, slimDOM: er2, dataURLOptions: O2, recordCanvas: D2, inlineImages: H2, onSerialize: function(e12) {
          nT(e12, ix) && ef2.addIframe(e12), nP(e12, ix) && ed2.trackLinkElement(e12), nD(e12) && ey2.addShadowRoot(ny(e12), document);
        }, onIframeLoad: function(e12, t12) {
          ef2.attachIframe(e12, t12), ey2.observeAttachShadow(e12);
        }, onStylesheetLoad: function(e12, t12) {
          ed2.attachLinkElement(e12, t12);
        }, keepIframeSrcFn: J2 }).mirror) ? new ep() : n11, s11 = r11.blockClass, c11 = r11.blockSelector, u11 = r11.maskTextClass, l3 = r11.maskTextSelector, p3 = r11.inlineStylesheet, h3 = r11.inlineImages, f3 = r11.recordCanvas, y3 = void 0 !== (m3 = r11.maskAllInputs) && m3, _3 = r11.maskTextFn, b3 = r11.maskInputFn, S3 = void 0 !== (x3 = r11.slimDOM) && x3, C3 = r11.dataURLOptions, M3 = r11.preserveWhiteSpace, I3 = r11.onSerialize, E3 = r11.onIframeLoad, R3 = r11.iframeLoadTimeout, T2 = r11.onStylesheetLoad, eF(t11, { doc: t11, mirror: i11, blockClass: void 0 === s11 ? "rr-block" : s11, blockSelector: void 0 === c11 ? null : c11, maskTextClass: void 0 === u11 ? "rr-mask" : u11, maskTextSelector: void 0 === l3 ? null : l3, skipChild: false, inlineStylesheet: void 0 === p3 || p3, maskInputOptions: true === y3 ? { color: true, date: true, "datetime-local": true, email: true, month: true, number: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true, textarea: true, select: true, password: true, hidden: true } : false === y3 ? { password: true } : y3, maskTextFn: _3, maskInputFn: b3, slimDOMOptions: true === S3 || "all" === S3 ? { script: true, comment: true, headFavicon: true, headWhitespace: true, headMetaDescKeywords: "all" === S3, headMetaSocial: true, headMetaRobots: true, headMetaHttpEquiv: true, headMetaAuthorship: true, headMetaVerification: true } : false === S3 ? {} : S3, dataURLOptions: C3, inlineImages: void 0 !== h3 && h3, recordCanvas: void 0 !== f3 && f3, preserveWhiteSpace: M3, onSerialize: I3, onIframeLoad: E3, iframeLoadTimeout: R3, onStylesheetLoad: T2, stylesheetLoadTimeout: r11.stylesheetLoadTimeout, keepIframeSrcFn: void 0 === (P3 = r11.keepIframeSrcFn) ? function() {
          return false;
        } : P3, newlyAddedElement: false }));
        if (!L3) return console.warn("Failed to snapshot the document");
        sw({ type: nN.FullSnapshot, data: { node: L3, initialOffset: nC(window) } }, e11), nX.forEach(function(e12) {
          return e12.unlock();
        }), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && ed2.adoptStyleSheets(document.adoptedStyleSheets, ix.getId(document));
      }
    };
    try {
      var e_2 = [], eb2 = function(e11) {
        var t11;
        return nZ(n4)({ mutationCb: eu2, mousemoveCb: function(e12, t12) {
          return sw({ type: nN.IncrementalSnapshot, data: { source: t12, positions: e12 } });
        }, mouseInteractionCb: function(e12) {
          return sw({ type: nN.IncrementalSnapshot, data: T({ source: nU.MouseInteraction }, e12) });
        }, scrollCb: el2, viewportResizeCb: function(e12) {
          return sw({ type: nN.IncrementalSnapshot, data: T({ source: nU.ViewportResize }, e12) });
        }, inputCb: function(e12) {
          return sw({ type: nN.IncrementalSnapshot, data: T({ source: nU.Input }, e12) });
        }, mediaInteractionCb: function(e12) {
          return sw({ type: nN.IncrementalSnapshot, data: T({ source: nU.MediaInteraction }, e12) });
        }, styleSheetRuleCb: function(e12) {
          return sw({ type: nN.IncrementalSnapshot, data: T({ source: nU.StyleSheetRule }, e12) });
        }, styleDeclarationCb: function(e12) {
          return sw({ type: nN.IncrementalSnapshot, data: T({ source: nU.StyleDeclaration }, e12) });
        }, canvasMutationCb: eh2, fontCb: function(e12) {
          return sw({ type: nN.IncrementalSnapshot, data: T({ source: nU.Font }, e12) });
        }, selectionCb: function(e12) {
          sw({ type: nN.IncrementalSnapshot, data: T({ source: nU.Selection }, e12) });
        }, customElementCb: function(e12) {
          sw({ type: nN.IncrementalSnapshot, data: T({ source: nU.CustomElement }, e12) });
        }, blockClass: o10, ignoreClass: u10, ignoreSelector: p2, maskTextClass: d2, maskTextSelector: g2, maskInputOptions: et2, inlineStylesheet: v2, sampling: M2, recordDOM: A2, recordCanvas: D2, inlineImages: H2, userTriggeredOnInput: W2, collectFonts: $2, doc: e11, maskInputFn: w2, maskTextFn: k2, keepIframeSrcFn: J2, blockSelector: a10, slimDOMOptions: er2, dataURLOptions: O2, mirror: ix, iframeManager: ef2, stylesheetManager: ed2, shadowDomManager: ey2, processedNodeManager: ev2, canvasManager: sx, ignoreCSSAttributes: X2, plugins: (null == (t11 = null == K2 ? void 0 : K2.filter(function(e12) {
          return e12.observer;
        })) ? void 0 : t11.map(function(e12) {
          return { observer: e12.observer, options: e12.options, callback: function(t12) {
            return sw({ type: nN.Plugin, data: { plugin: e12.name, payload: t12 } });
          } };
        })) || [] }, x2);
      };
      ef2.addLoadListener(function(e11) {
        try {
          var t11 = e11.contentDocument, r11 = eb2(t11);
          e_2.push(r11);
          var n11 = ef2.getObserverCleanup(e11);
          ef2.setObserverCleanup(e11, function() {
            if (n11) try {
              n11();
            } catch (e13) {
            }
            try {
              r11();
              var e12 = e_2.indexOf(r11);
              -1 !== e12 && e_2.splice(e12, 1);
              for (var i11 = nX.length - 1; i11 >= 0; i11--) nX[i11].getDoc() === t11 && nX.splice(i11, 1);
            } catch (e13) {
            }
          });
        } catch (e12) {
          console.warn(e12);
        }
      });
      var ew2 = function() {
        sk(), e_2.push(eb2(document)), iw = true;
      };
      return "interactive" === document.readyState || "complete" === document.readyState ? ew2() : (e_2.push(n_("DOMContentLoaded", function() {
        sw({ type: nN.DomContentLoaded, data: {} }), "DOMContentLoaded" === B2 && ew2();
      })), e_2.push(n_("load", function() {
        sw({ type: nN.Load, data: {} }), "load" === B2 && ew2();
      }, window))), function() {
        e_2.forEach(function(e11) {
          try {
            e11();
          } catch (e12) {
            String(e12).toLowerCase().includes("cross-origin") || console.warn(e12);
          }
        }), ev2.destroy(), iw = false, sb = void 0;
      };
    } catch (e11) {
      console.warn(e11);
    }
  }
  iS.addCustomEvent = function(e10, t10) {
    if (!iw) throw Error("please add custom event after start recording");
    sw({ type: nN.Custom, data: { tag: e10, payload: t10 } });
  }, iS.freezePage = function() {
    nX.forEach(function(e10) {
      return e10.freeze();
    });
  }, iS.takeFullSnapshot = function(e10) {
    if (!iw) throw Error("please take full snapshot after start recording");
    sk(e10);
  }, iS.mirror = ix, (o7 = sS || (sS = {}))[o7.NotStarted = 0] = "NotStarted", o7[o7.Running = 1] = "Running", o7[o7.Stopped = 2] = "Stopped", iS.addCustomEvent, iS.freezePage, iS.takeFullSnapshot;
  var iC = { Node: ["childNodes", "parentNode", "parentElement", "textContent"], ShadowRoot: ["host", "styleSheets"], Element: ["shadowRoot", "querySelector", "querySelectorAll"], MutationObserver: [] }, iM = { Node: ["contains", "getRootNode"], ShadowRoot: ["getSelection"], Element: [], MutationObserver: ["constructor"] }, iI = {};
  function iO(e10) {
    if (iI[e10]) return iI[e10];
    var t10 = globalThis[e10], r10 = t10.prototype, n10 = e10 in iC ? iC[e10] : void 0, i10 = !!(n10 && n10.every(function(e11) {
      var t11, n11;
      return !!(null == (n11 = null == (t11 = Object.getOwnPropertyDescriptor(r10, e11)) ? void 0 : t11.get) ? void 0 : n11.toString().includes("[native code]"));
    })), o10 = e10 in iM ? iM[e10] : void 0, s10 = !!(o10 && o10.every(function(e11) {
      var t11;
      return "function" == typeof r10[e11] && (null == (t11 = r10[e11]) ? void 0 : t11.toString().includes("[native code]"));
    }));
    if (i10 && s10 && !globalThis.Zone) return iI[e10] = t10.prototype, t10.prototype;
    try {
      var a10 = document.createElement("iframe");
      document.body.appendChild(a10);
      var c10 = a10.contentWindow;
      if (!c10) return t10.prototype;
      var u10 = c10[e10].prototype;
      if (document.body.removeChild(a10), !u10) return r10;
      return iI[e10] = u10;
    } catch (e11) {
      return r10;
    }
  }
  var iE = {}, iR = function(e10) {
    var t10 = "Node", r10 = e10, n10 = "parentNode", i10, o10 = t10 + "." + String(n10);
    if (iE[o10]) return iE[o10].call(r10);
    var s10 = null == (i10 = Object.getOwnPropertyDescriptor(iO(t10), n10)) ? void 0 : i10.get;
    return s10 ? (iE[o10] = s10, s10.call(r10)) : r10[n10];
  }, iA = { exports: {} }, iT = String, iP = function() {
    return { isColorSupported: false, reset: iT, bold: iT, dim: iT, italic: iT, underline: iT, inverse: iT, hidden: iT, strikethrough: iT, black: iT, red: iT, green: iT, yellow: iT, blue: iT, magenta: iT, cyan: iT, white: iT, gray: iT, bgBlack: iT, bgRed: iT, bgGreen: iT, bgYellow: iT, bgBlue: iT, bgMagenta: iT, bgCyan: iT, bgWhite: iT };
  };
  iA.exports = iP(), iA.exports.createColors = iP;
  var iD = iA.exports, iL = (function(e10) {
    if (e10.__esModule) return e10;
    var t10 = e10.default;
    if ("function" == typeof t10) {
      var r10 = function e11() {
        return L(this, e11) ? Reflect.construct(t10, arguments, this.constructor) : t10.apply(this, arguments);
      };
      r10.prototype = t10.prototype;
    } else r10 = {};
    return Object.defineProperty(r10, "__esModule", { value: true }), Object.keys(e10).forEach(function(t11) {
      var n10 = Object.getOwnPropertyDescriptor(e10, t11);
      Object.defineProperty(r10, t11, n10.get ? n10 : { enumerable: true, get: function() {
        return e10[t11];
      } });
    }), r10;
  })(Object.freeze(Object.defineProperty({ __proto__: null, default: {} }, Symbol.toStringTag, { value: "Module" }))), iF = (function(e10) {
    function t10(r11, n10, i10, o10, s10, a10) {
      var c10;
      return (c10 = e10.call(this, r11) || this).name = "CssSyntaxError", c10.reason = r11, s10 && (c10.file = s10), o10 && (c10.source = o10), a10 && (c10.plugin = a10), void 0 !== n10 && void 0 !== i10 && ("number" == typeof n10 ? (c10.line = n10, c10.column = i10) : (c10.line = n10.line, c10.column = n10.column, c10.endLine = i10.line, c10.endColumn = i10.column)), c10.setMessage(), Error.captureStackTrace && Error.captureStackTrace(c10, t10), c10;
    }
    D(t10, e10);
    var r10 = t10.prototype;
    return r10.setMessage = function() {
      this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", void 0 !== this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
    }, r10.showSourceCode = function(e11) {
      var t11, r11, n10 = this;
      if (!this.source) return "";
      var i10 = this.source;
      null == e11 && (e11 = iD.isColorSupported), iL && e11 && (i10 = iL(i10));
      var o10 = i10.split(/\r?\n/), s10 = Math.max(this.line - 3, 0), a10 = Math.min(this.line + 2, o10.length), c10 = String(a10).length;
      if (e11) {
        var u10 = iD.createColors(true), l2 = u10.bold, p2 = u10.gray, h2 = u10.red;
        t11 = function(e12) {
          return l2(h2(e12));
        }, r11 = function(e12) {
          return p2(e12);
        };
      } else t11 = r11 = function(e12) {
        return e12;
      };
      return o10.slice(s10, a10).map(function(e12, i11) {
        var o11 = s10 + 1 + i11, a11 = " " + (" " + o11).slice(-c10) + " | ";
        if (o11 === n10.line) {
          var u11 = r11(a11.replace(/\d/g, " ")) + e12.slice(0, n10.column - 1).replace(/[^\t]/g, " ");
          return t11(">") + r11(a11) + e12 + "\n " + u11 + t11("^");
        }
        return " " + r11(a11) + e12;
      }).join("\n");
    }, r10.toString = function() {
      var e11 = this.showSourceCode();
      return e11 && (e11 = "\n\n" + e11 + "\n"), this.name + ": " + this.message + e11;
    }, t10;
  })(U(Error));
  iF.default = iF;
  var ij = {};
  ij.isClean = /* @__PURE__ */ Symbol("isClean"), ij.my = /* @__PURE__ */ Symbol("my");
  var iN = { after: "\n", beforeClose: "\n", beforeComment: "\n", beforeDecl: "\n", beforeOpen: " ", beforeRule: "\n", colon: ": ", commentLeft: " ", commentRight: " ", emptyBody: "", indent: "    ", semicolon: false }, iU = (function() {
    function e10(e11) {
      this.builder = e11;
    }
    var t10 = e10.prototype;
    return t10.atrule = function(e11, t11) {
      var r10 = "@" + e11.name, n10 = e11.params ? this.rawValue(e11, "params") : "";
      if (void 0 !== e11.raws.afterName ? r10 += e11.raws.afterName : n10 && (r10 += " "), e11.nodes) this.block(e11, r10 + n10);
      else {
        var i10 = (e11.raws.between || "") + (t11 ? ";" : "");
        this.builder(r10 + n10 + i10, e11);
      }
    }, t10.beforeAfter = function(e11, t11) {
      for (var r10 = "decl" === e11.type ? this.raw(e11, null, "beforeDecl") : "comment" === e11.type ? this.raw(e11, null, "beforeComment") : "before" === t11 ? this.raw(e11, null, "beforeRule") : this.raw(e11, null, "beforeClose"), n10 = e11.parent, i10 = 0; n10 && "root" !== n10.type; ) i10 += 1, n10 = n10.parent;
      if (r10.includes("\n")) {
        var o10 = this.raw(e11, null, "indent");
        if (o10.length) for (var s10 = 0; s10 < i10; s10++) r10 += o10;
      }
      return r10;
    }, t10.block = function(e11, t11) {
      var r10, n10 = this.raw(e11, "between", "beforeOpen");
      this.builder(t11 + n10 + "{", e11, "start"), e11.nodes && e11.nodes.length ? (this.body(e11), r10 = this.raw(e11, "after")) : r10 = this.raw(e11, "after", "emptyBody"), r10 && this.builder(r10), this.builder("}", e11, "end");
    }, t10.body = function(e11) {
      for (var t11 = e11.nodes.length - 1; t11 > 0 && "comment" === e11.nodes[t11].type; ) t11 -= 1;
      for (var r10 = this.raw(e11, "semicolon"), n10 = 0; n10 < e11.nodes.length; n10++) {
        var i10 = e11.nodes[n10], o10 = this.raw(i10, "before");
        o10 && this.builder(o10), this.stringify(i10, t11 !== n10 || r10);
      }
    }, t10.comment = function(e11) {
      var t11 = this.raw(e11, "left", "commentLeft"), r10 = this.raw(e11, "right", "commentRight");
      this.builder("/*" + t11 + e11.text + r10 + "*/", e11);
    }, t10.decl = function(e11, t11) {
      var r10 = this.raw(e11, "between", "colon"), n10 = e11.prop + r10 + this.rawValue(e11, "value");
      e11.important && (n10 += e11.raws.important || " !important"), t11 && (n10 += ";"), this.builder(n10, e11);
    }, t10.document = function(e11) {
      this.body(e11);
    }, t10.raw = function(e11, t11, r10) {
      if (r10 || (r10 = t11), t11 && void 0 !== (n10 = e11.raws[t11])) return n10;
      var n10, i10 = e11.parent;
      if ("before" === r10 && (!i10 || "root" === i10.type && i10.first === e11 || i10 && "document" === i10.type)) return "";
      if (!i10) return iN[r10];
      var o10 = e11.root();
      if (o10.rawCache || (o10.rawCache = {}), void 0 !== o10.rawCache[r10]) return o10.rawCache[r10];
      if ("before" === r10 || "after" === r10) return this.beforeAfter(e11, r10);
      var s10, a10 = "raw" + ((s10 = r10)[0].toUpperCase() + s10.slice(1));
      return this[a10] ? n10 = this[a10](o10, e11) : o10.walk(function(e12) {
        if (void 0 !== (n10 = e12.raws[t11])) return false;
      }), void 0 === n10 && (n10 = iN[r10]), o10.rawCache[r10] = n10, n10;
    }, t10.rawBeforeClose = function(e11) {
      var t11;
      return e11.walk(function(e12) {
        if (e12.nodes && e12.nodes.length > 0 && void 0 !== e12.raws.after) return (t11 = e12.raws.after).includes("\n") && (t11 = t11.replace(/[^\n]+$/, "")), false;
      }), t11 && (t11 = t11.replace(/\S/g, "")), t11;
    }, t10.rawBeforeComment = function(e11, t11) {
      var r10;
      return e11.walkComments(function(e12) {
        if (void 0 !== e12.raws.before) return (r10 = e12.raws.before).includes("\n") && (r10 = r10.replace(/[^\n]+$/, "")), false;
      }), void 0 === r10 ? r10 = this.raw(t11, null, "beforeDecl") : r10 && (r10 = r10.replace(/\S/g, "")), r10;
    }, t10.rawBeforeDecl = function(e11, t11) {
      var r10;
      return e11.walkDecls(function(e12) {
        if (void 0 !== e12.raws.before) return (r10 = e12.raws.before).includes("\n") && (r10 = r10.replace(/[^\n]+$/, "")), false;
      }), void 0 === r10 ? r10 = this.raw(t11, null, "beforeRule") : r10 && (r10 = r10.replace(/\S/g, "")), r10;
    }, t10.rawBeforeOpen = function(e11) {
      var t11;
      return e11.walk(function(e12) {
        if ("decl" !== e12.type && void 0 !== (t11 = e12.raws.between)) return false;
      }), t11;
    }, t10.rawBeforeRule = function(e11) {
      var t11;
      return e11.walk(function(r10) {
        if (r10.nodes && (r10.parent !== e11 || e11.first !== r10) && void 0 !== r10.raws.before) return (t11 = r10.raws.before).includes("\n") && (t11 = t11.replace(/[^\n]+$/, "")), false;
      }), t11 && (t11 = t11.replace(/\S/g, "")), t11;
    }, t10.rawColon = function(e11) {
      var t11;
      return e11.walkDecls(function(e12) {
        if (void 0 !== e12.raws.between) return t11 = e12.raws.between.replace(/[^\s:]/g, ""), false;
      }), t11;
    }, t10.rawEmptyBody = function(e11) {
      var t11;
      return e11.walk(function(e12) {
        if (e12.nodes && 0 === e12.nodes.length && void 0 !== (t11 = e12.raws.after)) return false;
      }), t11;
    }, t10.rawIndent = function(e11) {
      var t11;
      return e11.raws.indent ? e11.raws.indent : (e11.walk(function(r10) {
        var n10 = r10.parent;
        if (n10 && n10 !== e11 && n10.parent && n10.parent === e11 && void 0 !== r10.raws.before) {
          var i10 = r10.raws.before.split("\n");
          return t11 = (t11 = i10[i10.length - 1]).replace(/\S/g, ""), false;
        }
      }), t11);
    }, t10.rawSemicolon = function(e11) {
      var t11;
      return e11.walk(function(e12) {
        if (e12.nodes && e12.nodes.length && "decl" === e12.last.type && void 0 !== (t11 = e12.raws.semicolon)) return false;
      }), t11;
    }, t10.rawValue = function(e11, t11) {
      var r10 = e11[t11], n10 = e11.raws[t11];
      return n10 && n10.value === r10 ? n10.raw : r10;
    }, t10.root = function(e11) {
      this.body(e11), e11.raws.after && this.builder(e11.raws.after);
    }, t10.rule = function(e11) {
      this.block(e11, this.rawValue(e11, "selector")), e11.raws.ownSemicolon && this.builder(e11.raws.ownSemicolon, e11, "end");
    }, t10.stringify = function(e11, t11) {
      if (!this[e11.type]) throw Error("Unknown AST node type " + e11.type + ". Maybe you need to change PostCSS stringifier.");
      this[e11.type](e11, t11);
    }, e10;
  })();
  function iB(e10, t10) {
    new iU(t10).stringify(e10);
  }
  iU.default = iU, iB.default = iB;
  var iz = ij.isClean, iq = ij.my, iW = (function() {
    function e10(e11) {
      for (var t11 in void 0 === e11 && (e11 = {}), this.raws = {}, this[iz] = false, this[iq] = true, e11) if ("nodes" === t11) {
        this.nodes = [];
        for (var r10, n10 = z(e11[t11]); !(r10 = n10()).done; ) {
          var i10 = r10.value;
          "function" == typeof i10.clone ? this.append(i10.clone()) : this.append(i10);
        }
      } else this[t11] = e11[t11];
    }
    var t10 = e10.prototype;
    return t10.addToError = function(e11) {
      if (e11.postcssNode = this, e11.stack && this.source && /\n\s{4}at /.test(e11.stack)) {
        var t11 = this.source;
        e11.stack = e11.stack.replace(/\n\s{4}at /, "$&" + t11.input.from + ":" + t11.start.line + ":" + t11.start.column + "$&");
      }
      return e11;
    }, t10.after = function(e11) {
      return this.parent.insertAfter(this, e11), this;
    }, t10.assign = function(e11) {
      for (var t11 in void 0 === e11 && (e11 = {}), e11) this[t11] = e11[t11];
      return this;
    }, t10.before = function(e11) {
      return this.parent.insertBefore(this, e11), this;
    }, t10.cleanRaws = function(e11) {
      delete this.raws.before, delete this.raws.after, e11 || delete this.raws.between;
    }, t10.clone = function(e11) {
      void 0 === e11 && (e11 = {});
      var t11 = (function e12(t12, r11) {
        var n10 = new t12.constructor();
        for (var i10 in t12) if (Object.prototype.hasOwnProperty.call(t12, i10) && "proxyCache" !== i10) {
          var o10 = t12[i10], s10 = void 0 === o10 ? "undefined" : N(o10);
          "parent" === i10 && "object" === s10 ? r11 && (n10[i10] = r11) : "source" === i10 ? n10[i10] = o10 : Array.isArray(o10) ? n10[i10] = o10.map(function(t13) {
            return e12(t13, n10);
          }) : ("object" === s10 && null !== o10 && (o10 = e12(o10)), n10[i10] = o10);
        }
        return n10;
      })(this);
      for (var r10 in e11) t11[r10] = e11[r10];
      return t11;
    }, t10.cloneAfter = function(e11) {
      void 0 === e11 && (e11 = {});
      var t11 = this.clone(e11);
      return this.parent.insertAfter(this, t11), t11;
    }, t10.cloneBefore = function(e11) {
      void 0 === e11 && (e11 = {});
      var t11 = this.clone(e11);
      return this.parent.insertBefore(this, t11), t11;
    }, t10.error = function(e11, t11) {
      if (void 0 === t11 && (t11 = {}), this.source) {
        var r10 = this.rangeBy(t11), n10 = r10.end, i10 = r10.start;
        return this.source.input.error(e11, { column: i10.column, line: i10.line }, { column: n10.column, line: n10.line }, t11);
      }
      return new iF(e11);
    }, t10.getProxyProcessor = function() {
      return { get: function(e11, t11) {
        return "proxyOf" === t11 ? e11 : "root" === t11 ? function() {
          return e11.root().toProxy();
        } : e11[t11];
      }, set: function(e11, t11, r10) {
        return e11[t11] === r10 || (e11[t11] = r10, ("prop" === t11 || "value" === t11 || "name" === t11 || "params" === t11 || "important" === t11 || "text" === t11) && e11.markDirty(), true);
      } };
    }, t10.markDirty = function() {
      if (this[iz]) {
        this[iz] = false;
        for (var e11 = this; e11 = e11.parent; ) e11[iz] = false;
      }
    }, t10.next = function() {
      if (this.parent) {
        var e11 = this.parent.index(this);
        return this.parent.nodes[e11 + 1];
      }
    }, t10.positionBy = function(e11, t11) {
      var r10 = this.source.start;
      if (e11.index) r10 = this.positionInside(e11.index, t11);
      else if (e11.word) {
        var n10 = (t11 = this.toString()).indexOf(e11.word);
        -1 !== n10 && (r10 = this.positionInside(n10, t11));
      }
      return r10;
    }, t10.positionInside = function(e11, t11) {
      for (var r10 = t11 || this.toString(), n10 = this.source.start.column, i10 = this.source.start.line, o10 = 0; o10 < e11; o10++) "\n" === r10[o10] ? (n10 = 1, i10 += 1) : n10 += 1;
      return { column: n10, line: i10 };
    }, t10.prev = function() {
      if (this.parent) {
        var e11 = this.parent.index(this);
        return this.parent.nodes[e11 - 1];
      }
    }, t10.rangeBy = function(e11) {
      var t11 = { column: this.source.start.column, line: this.source.start.line }, r10 = this.source.end ? { column: this.source.end.column + 1, line: this.source.end.line } : { column: t11.column + 1, line: t11.line };
      if (e11.word) {
        var n10 = this.toString(), i10 = n10.indexOf(e11.word);
        -1 !== i10 && (t11 = this.positionInside(i10, n10), r10 = this.positionInside(i10 + e11.word.length, n10));
      } else e11.start ? t11 = { column: e11.start.column, line: e11.start.line } : e11.index && (t11 = this.positionInside(e11.index)), e11.end ? r10 = { column: e11.end.column, line: e11.end.line } : "number" == typeof e11.endIndex ? r10 = this.positionInside(e11.endIndex) : e11.index && (r10 = this.positionInside(e11.index + 1));
      return (r10.line < t11.line || r10.line === t11.line && r10.column <= t11.column) && (r10 = { column: t11.column + 1, line: t11.line }), { end: r10, start: t11 };
    }, t10.raw = function(e11, t11) {
      return new iU().raw(this, e11, t11);
    }, t10.remove = function() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }, t10.replaceWith = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r10 = 0; r10 < e11; r10++) t11[r10] = arguments[r10];
      if (this.parent) {
        for (var n10, i10 = this, o10 = false, s10 = z(t11); !(n10 = s10()).done; ) {
          var a10 = n10.value;
          a10 === this ? o10 = true : o10 ? (this.parent.insertAfter(i10, a10), i10 = a10) : this.parent.insertBefore(i10, a10);
        }
        o10 || this.remove();
      }
      return this;
    }, t10.root = function() {
      for (var e11 = this; e11.parent && "document" !== e11.parent.type; ) e11 = e11.parent;
      return e11;
    }, t10.toJSON = function(e11, t11) {
      var r10 = {}, n10 = null == t11;
      t11 = t11 || /* @__PURE__ */ new Map();
      var i10 = 0;
      for (var o10 in this) if (Object.prototype.hasOwnProperty.call(this, o10) && "parent" !== o10 && "proxyCache" !== o10) {
        var s10 = this[o10];
        if (Array.isArray(s10)) r10[o10] = s10.map(function(e12) {
          return (void 0 === e12 ? "undefined" : N(e12)) === "object" && e12.toJSON ? e12.toJSON(null, t11) : e12;
        });
        else if ((void 0 === s10 ? "undefined" : N(s10)) === "object" && s10.toJSON) r10[o10] = s10.toJSON(null, t11);
        else if ("source" === o10) {
          var a10 = t11.get(s10.input);
          null == a10 && (a10 = i10, t11.set(s10.input, i10), i10++), r10[o10] = { end: s10.end, inputId: a10, start: s10.start };
        } else r10[o10] = s10;
      }
      return n10 && (r10.inputs = [].concat(t11.keys()).map(function(e12) {
        return e12.toJSON();
      })), r10;
    }, t10.toProxy = function() {
      return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
    }, t10.toString = function(e11) {
      void 0 === e11 && (e11 = iB), e11.stringify && (e11 = e11.stringify);
      var t11 = "";
      return e11(this, function(e12) {
        t11 += e12;
      }), t11;
    }, t10.warn = function(e11, t11, r10) {
      var n10 = { node: this };
      for (var i10 in r10) n10[i10] = r10[i10];
      return e11.warn(t11, n10);
    }, A(e10, [{ key: "proxyOf", get: function() {
      return this;
    } }]), e10;
  })();
  iW.default = iW;
  var iV = (function(e10) {
    function t10(t11) {
      var r10;
      return t11 && void 0 !== t11.value && "string" != typeof t11.value && (t11 = T({}, t11, { value: String(t11.value) })), (r10 = e10.call(this, t11) || this).type = "decl", r10;
    }
    return D(t10, e10), A(t10, [{ key: "variable", get: function() {
      return this.prop.startsWith("--") || "$" === this.prop[0];
    } }]), t10;
  })(iW);
  iV.default = iV;
  var i$ = iL.SourceMapConsumer, iG = iL.SourceMapGenerator, iH = iL.existsSync, iK = iL.readFileSync, iY = iL.dirname, iJ = iL.join, iZ = (function() {
    function e10(e11, t11) {
      if (false !== t11.map) {
        this.loadAnnotation(e11), this.inline = this.startWith(this.annotation, "data:");
        var r10 = t11.map ? t11.map.prev : void 0, n10 = this.loadMap(t11.from, r10);
        !this.mapFile && t11.from && (this.mapFile = t11.from), this.mapFile && (this.root = iY(this.mapFile)), n10 && (this.text = n10);
      }
    }
    var t10 = e10.prototype;
    return t10.consumer = function() {
      return this.consumerCache || (this.consumerCache = new i$(this.text)), this.consumerCache;
    }, t10.decodeInline = function(e11) {
      if (/^data:application\/json;charset=utf-?8,/.test(e11) || /^data:application\/json,/.test(e11)) return decodeURIComponent(e11.substr(RegExp.lastMatch.length));
      if (/^data:application\/json;charset=utf-?8;base64,/.test(e11) || /^data:application\/json;base64,/.test(e11)) {
        var t11;
        return t11 = e11.substr(RegExp.lastMatch.length), _.Buffer.from(t11, "base64").toString();
      }
      throw Error("Unsupported source map encoding " + e11.match(/data:application\/json;([^,]+),/)[1]);
    }, t10.getAnnotationURL = function(e11) {
      return e11.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }, t10.isMap = function(e11) {
      return (void 0 === e11 ? "undefined" : N(e11)) === "object" && ("string" == typeof e11.mappings || "string" == typeof e11._mappings || Array.isArray(e11.sections));
    }, t10.loadAnnotation = function(e11) {
      var t11 = e11.match(/\/\*\s*# sourceMappingURL=/gm);
      if (t11) {
        var r10 = e11.lastIndexOf(t11.pop()), n10 = e11.indexOf("*/", r10);
        r10 > -1 && n10 > -1 && (this.annotation = this.getAnnotationURL(e11.substring(r10, n10)));
      }
    }, t10.loadFile = function(e11) {
      if (this.root = iY(e11), iH(e11)) return this.mapFile = e11, iK(e11, "utf-8").toString().trim();
    }, t10.loadMap = function(e11, t11) {
      if (false === t11) return false;
      if (t11) if ("string" == typeof t11) return t11;
      else if ("function" == typeof t11) {
        var r10 = t11(e11);
        if (r10) {
          var n10 = this.loadFile(r10);
          if (!n10) throw Error("Unable to load previous source map: " + r10.toString());
          return n10;
        }
      } else if (L(t11, i$)) return iG.fromSourceMap(t11).toString();
      else if (L(t11, iG)) return t11.toString();
      else if (this.isMap(t11)) return JSON.stringify(t11);
      else throw Error("Unsupported previous source map format: " + t11.toString());
      else if (this.inline) return this.decodeInline(this.annotation);
      else if (this.annotation) {
        var i10 = this.annotation;
        return e11 && (i10 = iJ(iY(e11), i10)), this.loadFile(i10);
      }
    }, t10.startWith = function(e11, t11) {
      return !!e11 && e11.substr(0, t11.length) === t11;
    }, t10.withContent = function() {
      return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }, e10;
  })();
  iZ.default = iZ;
  var iX = iL.SourceMapConsumer, iQ = iL.SourceMapGenerator, i0 = iL.fileURLToPath, i1 = iL.pathToFileURL, i2 = iL.isAbsolute, i3 = iL.resolve, i5 = function(e10) {
    void 0 === e10 && (e10 = 21);
    for (var t10 = "", r10 = e10; r10--; ) t10 += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64 * Math.random() | 0];
    return t10;
  }, i9 = /* @__PURE__ */ Symbol("fromOffsetCache"), i6 = !!(iX && iQ), i4 = !!(i3 && i2), i8 = (function() {
    function e10(e11, t11) {
      if (void 0 === t11 && (t11 = {}), null == e11 || (void 0 === e11 ? "undefined" : N(e11)) === "object" && !e11.toString) throw Error("PostCSS received " + e11 + " instead of CSS string");
      if (this.css = e11.toString(), "\uFEFF" === this.css[0] || "\uFFFE" === this.css[0] ? (this.hasBOM = true, this.css = this.css.slice(1)) : this.hasBOM = false, t11.from && (!i4 || /^\w+:\/\//.test(t11.from) || i2(t11.from) ? this.file = t11.from : this.file = i3(t11.from)), i4 && i6) {
        var r10 = new iZ(this.css, t11);
        if (r10.text) {
          this.map = r10;
          var n10 = r10.consumer().file;
          !this.file && n10 && (this.file = this.mapResolve(n10));
        }
      }
      this.file || (this.id = "<input css " + i5(6) + ">"), this.map && (this.map.file = this.from);
    }
    var t10 = e10.prototype;
    return t10.error = function(e11, t11, r10, n10) {
      if (void 0 === n10 && (n10 = {}), t11 && (void 0 === t11 ? "undefined" : N(t11)) === "object") {
        var i10, o10, s10, a10 = t11, c10 = r10;
        if ("number" == typeof a10.offset) {
          var u10 = this.fromOffset(a10.offset);
          t11 = u10.line, r10 = u10.col;
        } else t11 = a10.line, r10 = a10.column;
        if ("number" == typeof c10.offset) {
          var l2 = this.fromOffset(c10.offset);
          o10 = l2.line, s10 = l2.col;
        } else o10 = c10.line, s10 = c10.column;
      } else if (!r10) {
        var p2 = this.fromOffset(t11);
        t11 = p2.line, r10 = p2.col;
      }
      var h2 = this.origin(t11, r10, o10, s10);
      return (i10 = h2 ? new iF(e11, void 0 === h2.endLine ? h2.line : { column: h2.column, line: h2.line }, void 0 === h2.endLine ? h2.column : { column: h2.endColumn, line: h2.endLine }, h2.source, h2.file, n10.plugin) : new iF(e11, void 0 === o10 ? t11 : { column: r10, line: t11 }, void 0 === o10 ? r10 : { column: s10, line: o10 }, this.css, this.file, n10.plugin)).input = { column: r10, endColumn: s10, endLine: o10, line: t11, source: this.css }, this.file && (i1 && (i10.input.url = i1(this.file).toString()), i10.input.file = this.file), i10;
    }, t10.fromOffset = function(e11) {
      if (this[i9]) a10 = this[i9];
      else {
        var t11 = this.css.split("\n");
        a10 = Array(t11.length);
        for (var r10 = 0, n10 = 0, i10 = t11.length; n10 < i10; n10++) a10[n10] = r10, r10 += t11[n10].length + 1;
        this[i9] = a10;
      }
      s10 = a10[a10.length - 1];
      var o10 = 0;
      if (e11 >= s10) o10 = a10.length - 1;
      else for (var s10, a10, c10, u10 = a10.length - 2; o10 < u10; ) if (e11 < a10[c10 = o10 + (u10 - o10 >> 1)]) u10 = c10 - 1;
      else if (e11 >= a10[c10 + 1]) o10 = c10 + 1;
      else {
        o10 = c10;
        break;
      }
      return { col: e11 - a10[o10] + 1, line: o10 + 1 };
    }, t10.mapResolve = function(e11) {
      return /^\w+:\/\//.test(e11) ? e11 : i3(this.map.consumer().sourceRoot || this.map.root || ".", e11);
    }, t10.origin = function(e11, t11, r10, n10) {
      if (!this.map) return false;
      var i10, o10, s10 = this.map.consumer(), a10 = s10.originalPositionFor({ column: t11, line: e11 });
      if (!a10.source) return false;
      "number" == typeof r10 && (i10 = s10.originalPositionFor({ column: n10, line: r10 })), o10 = i2(a10.source) ? i1(a10.source) : new URL(a10.source, this.map.consumer().sourceRoot || i1(this.map.mapFile));
      var c10 = { column: a10.column, endColumn: i10 && i10.column, endLine: i10 && i10.line, line: a10.line, url: o10.toString() };
      if ("file:" === o10.protocol) if (i0) c10.file = i0(o10);
      else throw Error("file: protocol is not available in this PostCSS build");
      var u10 = s10.sourceContentFor(a10.source);
      return u10 && (c10.source = u10), c10;
    }, t10.toJSON = function() {
      for (var e11 = {}, t11 = 0, r10 = ["hasBOM", "css", "file", "id"]; t11 < r10.length; t11++) {
        var n10 = r10[t11];
        null != this[n10] && (e11[n10] = this[n10]);
      }
      return this.map && (e11.map = T({}, this.map), e11.map.consumerCache && (e11.map.consumerCache = void 0)), e11;
    }, A(e10, [{ key: "from", get: function() {
      return this.file || this.id;
    } }]), e10;
  })();
  i8.default = i8, iL && iL.registerInput && iL.registerInput(i8);
  var i7 = iL.SourceMapConsumer, oe = iL.SourceMapGenerator, ot = iL.dirname, or = iL.relative, on = iL.resolve, oi = iL.sep, oo = iL.pathToFileURL, os = !!(i7 && oe), oa = !!(ot && on && or && oi), oc = (function() {
    function e10(e11, t11, r10, n10) {
      this.stringify = e11, this.mapOpts = r10.map || {}, this.root = t11, this.opts = r10, this.css = n10, this.originalCSS = n10, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    var t10 = e10.prototype;
    return t10.addAnnotation = function() {
      var e11 = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" == typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" == typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map", t11 = "\n";
      this.css.includes("\r\n") && (t11 = "\r\n"), this.css += t11 + "/*# sourceMappingURL=" + e11 + " */";
    }, t10.applyPrevMaps = function() {
      for (var e11, t11 = z(this.previous()); !(e11 = t11()).done; ) {
        var r10 = e11.value, n10 = this.toUrl(this.path(r10.file)), i10 = r10.root || ot(r10.file), o10 = void 0;
        false === this.mapOpts.sourcesContent ? (o10 = new i7(r10.text)).sourcesContent && (o10.sourcesContent = null) : o10 = r10.consumer(), this.map.applySourceMap(o10, n10, this.toUrl(this.path(i10)));
      }
    }, t10.clearAnnotation = function() {
      if (false !== this.mapOpts.annotation) if (this.root) for (var e11, t11 = this.root.nodes.length - 1; t11 >= 0; t11--) "comment" === (e11 = this.root.nodes[t11]).type && 0 === e11.text.indexOf("# sourceMappingURL=") && this.root.removeChild(t11);
      else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""));
    }, t10.generate = function() {
      if (this.clearAnnotation(), oa && os && this.isMap()) return this.generateMap();
      var e11 = "";
      return this.stringify(this.root, function(t11) {
        e11 += t11;
      }), [e11];
    }, t10.generateMap = function() {
      if (this.root) this.generateString();
      else if (1 === this.previous().length) {
        var e11 = this.previous()[0].consumer();
        e11.file = this.outputFile(), this.map = oe.fromSourceMap(e11, { ignoreInvalidMapping: true });
      } else this.map = new oe({ file: this.outputFile(), ignoreInvalidMapping: true }), this.map.addMapping({ generated: { column: 0, line: 1 }, original: { column: 0, line: 1 }, source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>" });
      return (this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline()) ? [this.css] : [this.css, this.map];
    }, t10.generateString = function() {
      var e11, t11, r10 = this;
      this.css = "", this.map = new oe({ file: this.outputFile(), ignoreInvalidMapping: true });
      var n10 = 1, i10 = 1, o10 = "<no source>", s10 = { generated: { column: 0, line: 0 }, original: { column: 0, line: 0 }, source: "" };
      this.stringify(this.root, function(a10, c10, u10) {
        if (r10.css += a10, c10 && "end" !== u10 && (s10.generated.line = n10, s10.generated.column = i10 - 1, c10.source && c10.source.start ? (s10.source = r10.sourcePath(c10), s10.original.line = c10.source.start.line, s10.original.column = c10.source.start.column - 1) : (s10.source = o10, s10.original.line = 1, s10.original.column = 0), r10.map.addMapping(s10)), (e11 = a10.match(/\n/g)) ? (n10 += e11.length, t11 = a10.lastIndexOf("\n"), i10 = a10.length - t11) : i10 += a10.length, c10 && "start" !== u10) {
          var l2 = c10.parent || { raws: {} };
          (!("decl" === c10.type || "atrule" === c10.type && !c10.nodes) || c10 !== l2.last || l2.raws.semicolon) && (c10.source && c10.source.end ? (s10.source = r10.sourcePath(c10), s10.original.line = c10.source.end.line, s10.original.column = c10.source.end.column - 1, s10.generated.line = n10, s10.generated.column = i10 - 2) : (s10.source = o10, s10.original.line = 1, s10.original.column = 0, s10.generated.line = n10, s10.generated.column = i10 - 1), r10.map.addMapping(s10));
        }
      });
    }, t10.isAnnotation = function() {
      return !!this.isInline() || (void 0 !== this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some(function(e11) {
        return e11.annotation;
      }));
    }, t10.isInline = function() {
      if (void 0 !== this.mapOpts.inline) return this.mapOpts.inline;
      var e11 = this.mapOpts.annotation;
      return (void 0 === e11 || true === e11) && (!this.previous().length || this.previous().some(function(e12) {
        return e12.inline;
      }));
    }, t10.isMap = function() {
      return void 0 !== this.opts.map ? !!this.opts.map : this.previous().length > 0;
    }, t10.isSourcesContent = function() {
      return void 0 !== this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some(function(e11) {
        return e11.withContent();
      });
    }, t10.outputFile = function() {
      return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
    }, t10.path = function(e11) {
      if (this.mapOpts.absolute || 60 === e11.charCodeAt(0) || /^\w+:\/\//.test(e11)) return e11;
      var t11 = this.memoizedPaths.get(e11);
      if (t11) return t11;
      var r10 = this.opts.to ? ot(this.opts.to) : ".";
      "string" == typeof this.mapOpts.annotation && (r10 = ot(on(r10, this.mapOpts.annotation)));
      var n10 = or(r10, e11);
      return this.memoizedPaths.set(e11, n10), n10;
    }, t10.previous = function() {
      var e11 = this;
      if (!this.previousMaps) if (this.previousMaps = [], this.root) this.root.walk(function(t12) {
        if (t12.source && t12.source.input.map) {
          var r10 = t12.source.input.map;
          e11.previousMaps.includes(r10) || e11.previousMaps.push(r10);
        }
      });
      else {
        var t11 = new i8(this.originalCSS, this.opts);
        t11.map && this.previousMaps.push(t11.map);
      }
      return this.previousMaps;
    }, t10.setSourcesContent = function() {
      var e11 = this, t11 = {};
      if (this.root) this.root.walk(function(r11) {
        if (r11.source) {
          var n10 = r11.source.input.from;
          if (n10 && !t11[n10]) {
            t11[n10] = true;
            var i10 = e11.usesFileUrls ? e11.toFileUrl(n10) : e11.toUrl(e11.path(n10));
            e11.map.setSourceContent(i10, r11.source.input.css);
          }
        }
      });
      else if (this.css) {
        var r10 = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
        this.map.setSourceContent(r10, this.css);
      }
    }, t10.sourcePath = function(e11) {
      return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e11.source.input.from) : this.toUrl(this.path(e11.source.input.from));
    }, t10.toBase64 = function(e11) {
      return _.Buffer.from(e11).toString("base64");
    }, t10.toFileUrl = function(e11) {
      var t11 = this.memoizedFileURLs.get(e11);
      if (t11) return t11;
      if (oo) {
        var r10 = oo(e11).toString();
        return this.memoizedFileURLs.set(e11, r10), r10;
      }
      throw Error("`map.absolute` option is not available in this PostCSS build");
    }, t10.toUrl = function(e11) {
      var t11 = this.memoizedURLs.get(e11);
      if (t11) return t11;
      "\\" === oi && (e11 = e11.replace(/\\/g, "/"));
      var r10 = encodeURI(e11).replace(/[#?]/g, encodeURIComponent);
      return this.memoizedURLs.set(e11, r10), r10;
    }, e10;
  })(), ou = (function(e10) {
    function t10(t11) {
      var r10;
      return (r10 = e10.call(this, t11) || this).type = "comment", r10;
    }
    return D(t10, e10), t10;
  })(iW);
  ou.default = ou;
  var ol = ij.isClean, op = ij.my, oh = (function(e10) {
    function t10() {
      return e10.apply(this, arguments) || this;
    }
    D(t10, e10);
    var r10 = t10.prototype;
    return r10.append = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      for (var n10, i10 = z(t11); !(n10 = i10()).done; ) for (var o10, s10 = n10.value, a10 = this.normalize(s10, this.last), c10 = z(a10); !(o10 = c10()).done; ) {
        var u10 = o10.value;
        this.proxyOf.nodes.push(u10);
      }
      return this.markDirty(), this;
    }, r10.cleanRaws = function(t11) {
      if (e10.prototype.cleanRaws.call(this, t11), this.nodes) for (var r11, n10 = z(this.nodes); !(r11 = n10()).done; ) r11.value.cleanRaws(t11);
    }, r10.each = function(e11) {
      if (this.proxyOf.nodes) {
        for (var t11, r11, n10 = this.getIterator(); this.indexes[n10] < this.proxyOf.nodes.length && (t11 = this.indexes[n10], false !== (r11 = e11(this.proxyOf.nodes[t11], t11))); ) this.indexes[n10] += 1;
        return delete this.indexes[n10], r11;
      }
    }, r10.every = function(e11) {
      return this.nodes.every(e11);
    }, r10.getIterator = function() {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
      var e11 = this.lastEach;
      return this.indexes[e11] = 0, e11;
    }, r10.getProxyProcessor = function() {
      return { get: function(e11, t11) {
        if ("proxyOf" === t11) return e11;
        if (!e11[t11]) return e11[t11];
        if ("each" === t11 || "string" == typeof t11 && t11.startsWith("walk")) return function() {
          for (var r11 = arguments.length, n10 = Array(r11), i10 = 0; i10 < r11; i10++) n10[i10] = arguments[i10];
          return e11[t11].apply(e11, [].concat(n10.map(function(e12) {
            return "function" == typeof e12 ? function(t12, r12) {
              return e12(t12.toProxy(), r12);
            } : e12;
          })));
        };
        if ("every" === t11 || "some" === t11) return function(r11) {
          return e11[t11](function(e12) {
            for (var t12 = arguments.length, n10 = Array(t12 > 1 ? t12 - 1 : 0), i10 = 1; i10 < t12; i10++) n10[i10 - 1] = arguments[i10];
            return r11.apply(void 0, [].concat([e12.toProxy()], n10));
          });
        };
        if ("root" === t11) return function() {
          return e11.root().toProxy();
        };
        else if ("nodes" === t11) return e11.nodes.map(function(e12) {
          return e12.toProxy();
        });
        else if ("first" === t11 || "last" === t11) return e11[t11].toProxy();
        else return e11[t11];
      }, set: function(e11, t11, r11) {
        return e11[t11] === r11 || (e11[t11] = r11, ("name" === t11 || "params" === t11 || "selector" === t11) && e11.markDirty(), true);
      } };
    }, r10.index = function(e11) {
      return "number" == typeof e11 ? e11 : (e11.proxyOf && (e11 = e11.proxyOf), this.proxyOf.nodes.indexOf(e11));
    }, r10.insertAfter = function(e11, t11) {
      var r11, n10 = this.index(e11), i10 = this.normalize(t11, this.proxyOf.nodes[n10]).reverse();
      n10 = this.index(e11);
      for (var o10, s10 = z(i10); !(o10 = s10()).done; ) {
        var a10 = o10.value;
        this.proxyOf.nodes.splice(n10 + 1, 0, a10);
      }
      for (var c10 in this.indexes) n10 < (r11 = this.indexes[c10]) && (this.indexes[c10] = r11 + i10.length);
      return this.markDirty(), this;
    }, r10.insertBefore = function(e11, t11) {
      var r11, n10 = this.index(e11), i10 = 0 === n10 && "prepend", o10 = this.normalize(t11, this.proxyOf.nodes[n10], i10).reverse();
      n10 = this.index(e11);
      for (var s10, a10 = z(o10); !(s10 = a10()).done; ) {
        var c10 = s10.value;
        this.proxyOf.nodes.splice(n10, 0, c10);
      }
      for (var u10 in this.indexes) n10 <= (r11 = this.indexes[u10]) && (this.indexes[u10] = r11 + o10.length);
      return this.markDirty(), this;
    }, r10.normalize = function(e11, r11) {
      var n10 = this;
      if ("string" == typeof e11) e11 = (function e12(t11) {
        return t11.map(function(t12) {
          return t12.nodes && (t12.nodes = e12(t12.nodes)), delete t12.source, t12;
        });
      })(sC(e11).nodes);
      else if (void 0 === e11) e11 = [];
      else if (Array.isArray(e11)) {
        e11 = e11.slice(0);
        for (var i10, o10 = z(e11); !(i10 = o10()).done; ) {
          var s10 = i10.value;
          s10.parent && s10.parent.removeChild(s10, "ignore");
        }
      } else if ("root" === e11.type && "document" !== this.type) {
        e11 = e11.nodes.slice(0);
        for (var a10, c10 = z(e11); !(a10 = c10()).done; ) {
          var u10 = a10.value;
          u10.parent && u10.parent.removeChild(u10, "ignore");
        }
      } else if (e11.type) e11 = [e11];
      else if (e11.prop) {
        if (void 0 === e11.value) throw Error("Value field is missed in node creation");
        "string" != typeof e11.value && (e11.value = String(e11.value)), e11 = [new iV(e11)];
      } else if (e11.selector) e11 = [new sM(e11)];
      else if (e11.name) e11 = [new sI(e11)];
      else if (e11.text) e11 = [new ou(e11)];
      else throw Error("Unknown node type in node creation");
      return e11.map(function(e12) {
        return e12[op] || t10.rebuild(e12), (e12 = e12.proxyOf).parent && e12.parent.removeChild(e12), e12[ol] && (function e13(t11) {
          if (t11[ol] = false, t11.proxyOf.nodes) for (var r12, n11 = z(t11.proxyOf.nodes); !(r12 = n11()).done; ) e13(r12.value);
        })(e12), void 0 === e12.raws.before && r11 && void 0 !== r11.raws.before && (e12.raws.before = r11.raws.before.replace(/\S/g, "")), e12.parent = n10.proxyOf, e12;
      });
    }, r10.prepend = function() {
      for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++) t11[r11] = arguments[r11];
      t11 = t11.reverse();
      for (var n10, i10 = z(t11); !(n10 = i10()).done; ) {
        for (var o10, s10 = n10.value, a10 = this.normalize(s10, this.first, "prepend").reverse(), c10 = z(a10); !(o10 = c10()).done; ) {
          var u10 = o10.value;
          this.proxyOf.nodes.unshift(u10);
        }
        for (var l2 in this.indexes) this.indexes[l2] = this.indexes[l2] + a10.length;
      }
      return this.markDirty(), this;
    }, r10.push = function(e11) {
      return e11.parent = this, this.proxyOf.nodes.push(e11), this;
    }, r10.removeAll = function() {
      for (var e11, t11 = z(this.proxyOf.nodes); !(e11 = t11()).done; ) e11.value.parent = void 0;
      return this.proxyOf.nodes = [], this.markDirty(), this;
    }, r10.removeChild = function(e11) {
      var t11;
      for (var r11 in e11 = this.index(e11), this.proxyOf.nodes[e11].parent = void 0, this.proxyOf.nodes.splice(e11, 1), this.indexes) (t11 = this.indexes[r11]) >= e11 && (this.indexes[r11] = t11 - 1);
      return this.markDirty(), this;
    }, r10.replaceValues = function(e11, t11, r11) {
      return r11 || (r11 = t11, t11 = {}), this.walkDecls(function(n10) {
        t11.props && !t11.props.includes(n10.prop) || (!t11.fast || n10.value.includes(t11.fast)) && (n10.value = n10.value.replace(e11, r11));
      }), this.markDirty(), this;
    }, r10.some = function(e11) {
      return this.nodes.some(e11);
    }, r10.walk = function(e11) {
      return this.each(function(t11, r11) {
        var n10;
        try {
          n10 = e11(t11, r11);
        } catch (e12) {
          throw t11.addToError(e12);
        }
        return false !== n10 && t11.walk && (n10 = t11.walk(e11)), n10;
      });
    }, r10.walkAtRules = function(e11, t11) {
      return t11 ? L(e11, RegExp) ? this.walk(function(r11, n10) {
        if ("atrule" === r11.type && e11.test(r11.name)) return t11(r11, n10);
      }) : this.walk(function(r11, n10) {
        if ("atrule" === r11.type && r11.name === e11) return t11(r11, n10);
      }) : (t11 = e11, this.walk(function(e12, r11) {
        if ("atrule" === e12.type) return t11(e12, r11);
      }));
    }, r10.walkComments = function(e11) {
      return this.walk(function(t11, r11) {
        if ("comment" === t11.type) return e11(t11, r11);
      });
    }, r10.walkDecls = function(e11, t11) {
      return t11 ? L(e11, RegExp) ? this.walk(function(r11, n10) {
        if ("decl" === r11.type && e11.test(r11.prop)) return t11(r11, n10);
      }) : this.walk(function(r11, n10) {
        if ("decl" === r11.type && r11.prop === e11) return t11(r11, n10);
      }) : (t11 = e11, this.walk(function(e12, r11) {
        if ("decl" === e12.type) return t11(e12, r11);
      }));
    }, r10.walkRules = function(e11, t11) {
      return t11 ? L(e11, RegExp) ? this.walk(function(r11, n10) {
        if ("rule" === r11.type && e11.test(r11.selector)) return t11(r11, n10);
      }) : this.walk(function(r11, n10) {
        if ("rule" === r11.type && r11.selector === e11) return t11(r11, n10);
      }) : (t11 = e11, this.walk(function(e12, r11) {
        if ("rule" === e12.type) return t11(e12, r11);
      }));
    }, A(t10, [{ key: "first", get: function() {
      if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
    } }, { key: "last", get: function() {
      if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    } }]), t10;
  })(iW);
  oh.registerParse = function(e10) {
    sC = e10;
  }, oh.registerRule = function(e10) {
    sM = e10;
  }, oh.registerAtRule = function(e10) {
    sI = e10;
  }, oh.registerRoot = function(e10) {
    sO = e10;
  }, oh.default = oh, oh.rebuild = function(e10) {
    "atrule" === e10.type ? Object.setPrototypeOf(e10, sI.prototype) : "rule" === e10.type ? Object.setPrototypeOf(e10, sM.prototype) : "decl" === e10.type ? Object.setPrototypeOf(e10, iV.prototype) : "comment" === e10.type ? Object.setPrototypeOf(e10, ou.prototype) : "root" === e10.type && Object.setPrototypeOf(e10, sO.prototype), e10[op] = true, e10.nodes && e10.nodes.forEach(function(e11) {
      oh.rebuild(e11);
    });
  };
  var od = (function(e10) {
    function t10(t11) {
      var r10;
      return (r10 = e10.call(this, T({ type: "document" }, t11)) || this).nodes || (r10.nodes = []), r10;
    }
    return D(t10, e10), t10.prototype.toResult = function(e11) {
      return void 0 === e11 && (e11 = {}), new sE(new sR(), this, e11).stringify();
    }, t10;
  })(oh);
  od.registerLazyResult = function(e10) {
    sE = e10;
  }, od.registerProcessor = function(e10) {
    sR = e10;
  }, od.default = od;
  var of = (function() {
    function e10(e11, t10) {
      if (void 0 === t10 && (t10 = {}), this.type = "warning", this.text = e11, t10.node && t10.node.source) {
        var r10 = t10.node.rangeBy(t10);
        this.line = r10.start.line, this.column = r10.start.column, this.endLine = r10.end.line, this.endColumn = r10.end.column;
      }
      for (var n10 in t10) this[n10] = t10[n10];
    }
    return e10.prototype.toString = function() {
      return this.node ? this.node.error(this.text, { index: this.index, plugin: this.plugin, word: this.word }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
    }, e10;
  })();
  of.default = of;
  var og = (function() {
    function e10(e11, t11, r10) {
      this.processor = e11, this.messages = [], this.root = t11, this.opts = r10, this.css = void 0, this.map = void 0;
    }
    var t10 = e10.prototype;
    return t10.toString = function() {
      return this.css;
    }, t10.warn = function(e11, t11) {
      void 0 === t11 && (t11 = {}), !t11.plugin && this.lastPlugin && this.lastPlugin.postcssPlugin && (t11.plugin = this.lastPlugin.postcssPlugin);
      var r10 = new of(e11, t11);
      return this.messages.push(r10), r10;
    }, t10.warnings = function() {
      return this.messages.filter(function(e11) {
        return "warning" === e11.type;
      });
    }, A(e10, [{ key: "content", get: function() {
      return this.css;
    } }]), e10;
  })();
  og.default = og;
  var om = /[\t\n\f\r "#'()/;[\\\]{}]/g, ov = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, oy = /.[\r\n"'(/\\]/, o_ = /[\da-f]/i, ob = (function(e10) {
    function t10(t11) {
      var r11;
      return (r11 = e10.call(this, t11) || this).type = "atrule", r11;
    }
    D(t10, e10);
    var r10 = t10.prototype;
    return r10.append = function() {
      for (var t11, r11 = arguments.length, n10 = Array(r11), i10 = 0; i10 < r11; i10++) n10[i10] = arguments[i10];
      return this.proxyOf.nodes || (this.nodes = []), (t11 = e10.prototype.append).call.apply(t11, [].concat([this], n10));
    }, r10.prepend = function() {
      for (var t11, r11 = arguments.length, n10 = Array(r11), i10 = 0; i10 < r11; i10++) n10[i10] = arguments[i10];
      return this.proxyOf.nodes || (this.nodes = []), (t11 = e10.prototype.prepend).call.apply(t11, [].concat([this], n10));
    }, t10;
  })(oh);
  ob.default = ob, oh.registerAtRule(ob);
  var ow = (function(e10) {
    function t10(t11) {
      var r11;
      return (r11 = e10.call(this, t11) || this).type = "root", r11.nodes || (r11.nodes = []), r11;
    }
    D(t10, e10);
    var r10 = t10.prototype;
    return r10.normalize = function(t11, r11, n10) {
      var i10 = e10.prototype.normalize.call(this, t11);
      if (r11) {
        if ("prepend" === n10) this.nodes.length > 1 ? r11.raws.before = this.nodes[1].raws.before : delete r11.raws.before;
        else if (this.first !== r11) for (var o10, s10 = z(i10); !(o10 = s10()).done; ) o10.value.raws.before = r11.raws.before;
      }
      return i10;
    }, r10.removeChild = function(t11, r11) {
      var n10 = this.index(t11);
      return !r11 && 0 === n10 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n10].raws.before), e10.prototype.removeChild.call(this, t11);
    }, r10.toResult = function(e11) {
      return void 0 === e11 && (e11 = {}), new sA(new sT(), this, e11).stringify();
    }, t10;
  })(oh);
  ow.registerLazyResult = function(e10) {
    sA = e10;
  }, ow.registerProcessor = function(e10) {
    sT = e10;
  }, ow.default = ow, oh.registerRoot(ow);
  var ok = { comma: function(e10) {
    return ok.split(e10, [","], true);
  }, space: function(e10) {
    return ok.split(e10, [" ", "\n", "	"]);
  }, split: function(e10, t10, r10) {
    for (var n10, i10 = [], o10 = "", s10 = false, a10 = 0, c10 = false, u10 = "", l2 = false, p2 = z(e10); !(n10 = p2()).done; ) {
      var h2 = n10.value;
      l2 ? l2 = false : "\\" === h2 ? l2 = true : c10 ? h2 === u10 && (c10 = false) : '"' === h2 || "'" === h2 ? (c10 = true, u10 = h2) : "(" === h2 ? a10 += 1 : ")" === h2 ? a10 > 0 && (a10 -= 1) : 0 === a10 && t10.includes(h2) && (s10 = true), s10 ? ("" !== o10 && i10.push(o10.trim()), o10 = "", s10 = false) : o10 += h2;
    }
    return (r10 || "" !== o10) && i10.push(o10.trim()), i10;
  } };
  ok.default = ok;
  var ox = (function(e10) {
    function t10(t11) {
      var r10;
      return (r10 = e10.call(this, t11) || this).type = "rule", r10.nodes || (r10.nodes = []), r10;
    }
    return D(t10, e10), A(t10, [{ key: "selectors", get: function() {
      return ok.comma(this.selector);
    }, set: function(e11) {
      var t11 = this.selector ? this.selector.match(/,\s*/) : null, r10 = t11 ? t11[0] : "," + this.raw("between", "beforeOpen");
      this.selector = e11.join(r10);
    } }]), t10;
  })(oh);
  ox.default = ox, oh.registerRule(ox);
  var oS = function(e10, t10) {
    void 0 === t10 && (t10 = {});
    var r10, n10, i10, o10, s10, a10, c10, u10, l2, p2, h2 = e10.css.valueOf(), d2 = t10.ignoreErrors, f2 = h2.length, g2 = 0, m2 = [], v2 = [];
    function y2(t11) {
      throw e10.error("Unclosed " + t11, g2);
    }
    return { back: function(e11) {
      v2.push(e11);
    }, endOfFile: function() {
      return 0 === v2.length && g2 >= f2;
    }, nextToken: function(e11) {
      if (v2.length) return v2.pop();
      if (!(g2 >= f2)) {
        var t11 = !!e11 && e11.ignoreUnclosed;
        switch (r10 = h2.charCodeAt(g2)) {
          case 10:
          case 32:
          case 9:
          case 13:
          case 12:
            n10 = g2;
            do
              n10 += 1, r10 = h2.charCodeAt(n10);
            while (32 === r10 || 10 === r10 || 9 === r10 || 13 === r10 || 12 === r10);
            p2 = ["space", h2.slice(g2, n10)], g2 = n10 - 1;
            break;
          case 91:
          case 93:
          case 123:
          case 125:
          case 58:
          case 59:
          case 41:
            var _2 = String.fromCharCode(r10);
            p2 = [_2, _2, g2];
            break;
          case 40:
            if (u10 = m2.length ? m2.pop()[1] : "", l2 = h2.charCodeAt(g2 + 1), "url" === u10 && 39 !== l2 && 34 !== l2 && 32 !== l2 && 10 !== l2 && 9 !== l2 && 12 !== l2 && 13 !== l2) {
              n10 = g2;
              do {
                if (a10 = false, -1 === (n10 = h2.indexOf(")", n10 + 1))) if (d2 || t11) {
                  n10 = g2;
                  break;
                } else y2("bracket");
                for (c10 = n10; 92 === h2.charCodeAt(c10 - 1); ) c10 -= 1, a10 = !a10;
              } while (a10);
              p2 = ["brackets", h2.slice(g2, n10 + 1), g2, n10], g2 = n10;
            } else n10 = h2.indexOf(")", g2 + 1), o10 = h2.slice(g2, n10 + 1), -1 === n10 || oy.test(o10) ? p2 = ["(", "(", g2] : (p2 = ["brackets", o10, g2, n10], g2 = n10);
            break;
          case 39:
          case 34:
            i10 = 39 === r10 ? "'" : '"', n10 = g2;
            do {
              if (a10 = false, -1 === (n10 = h2.indexOf(i10, n10 + 1))) if (d2 || t11) {
                n10 = g2 + 1;
                break;
              } else y2("string");
              for (c10 = n10; 92 === h2.charCodeAt(c10 - 1); ) c10 -= 1, a10 = !a10;
            } while (a10);
            p2 = ["string", h2.slice(g2, n10 + 1), g2, n10], g2 = n10;
            break;
          case 64:
            om.lastIndex = g2 + 1, om.test(h2), n10 = 0 === om.lastIndex ? h2.length - 1 : om.lastIndex - 2, p2 = ["at-word", h2.slice(g2, n10 + 1), g2, n10], g2 = n10;
            break;
          case 92:
            for (n10 = g2, s10 = true; 92 === h2.charCodeAt(n10 + 1); ) n10 += 1, s10 = !s10;
            if (r10 = h2.charCodeAt(n10 + 1), s10 && 47 !== r10 && 32 !== r10 && 10 !== r10 && 9 !== r10 && 13 !== r10 && 12 !== r10 && (n10 += 1, o_.test(h2.charAt(n10)))) {
              for (; o_.test(h2.charAt(n10 + 1)); ) n10 += 1;
              32 === h2.charCodeAt(n10 + 1) && (n10 += 1);
            }
            p2 = ["word", h2.slice(g2, n10 + 1), g2, n10], g2 = n10;
            break;
          default:
            47 === r10 && 42 === h2.charCodeAt(g2 + 1) ? (0 === (n10 = h2.indexOf("*/", g2 + 2) + 1) && (d2 || t11 ? n10 = h2.length : y2("comment")), p2 = ["comment", h2.slice(g2, n10 + 1), g2, n10]) : (ov.lastIndex = g2 + 1, ov.test(h2), n10 = 0 === ov.lastIndex ? h2.length - 1 : ov.lastIndex - 2, p2 = ["word", h2.slice(g2, n10 + 1), g2, n10], m2.push(p2)), g2 = n10;
        }
        return g2++, p2;
      }
    }, position: function() {
      return g2;
    } };
  }, oC = { empty: true, space: true }, oM = (function() {
    function e10(e11) {
      this.input = e11, this.root = new ow(), this.current = this.root, this.spaces = "", this.semicolon = false, this.createTokenizer(), this.root.source = { input: e11, start: { column: 1, line: 1, offset: 0 } };
    }
    var t10 = e10.prototype;
    return t10.atrule = function(e11) {
      var t11, r10, n10, i10 = new ob();
      i10.name = e11[1].slice(1), "" === i10.name && this.unnamedAtrule(i10, e11), this.init(i10, e11[2]);
      for (var o10 = false, s10 = false, a10 = [], c10 = []; !this.tokenizer.endOfFile(); ) {
        if ("(" === (t11 = (e11 = this.tokenizer.nextToken())[0]) || "[" === t11 ? c10.push("(" === t11 ? ")" : "]") : "{" === t11 && c10.length > 0 ? c10.push("}") : t11 === c10[c10.length - 1] && c10.pop(), 0 === c10.length) if (";" === t11) {
          i10.source.end = this.getPosition(e11[2]), i10.source.end.offset++, this.semicolon = true;
          break;
        } else if ("{" === t11) {
          s10 = true;
          break;
        } else if ("}" === t11) {
          if (a10.length > 0) {
            for (n10 = a10.length - 1, r10 = a10[n10]; r10 && "space" === r10[0]; ) r10 = a10[--n10];
            r10 && (i10.source.end = this.getPosition(r10[3] || r10[2]), i10.source.end.offset++);
          }
          this.end(e11);
          break;
        } else a10.push(e11);
        else a10.push(e11);
        if (this.tokenizer.endOfFile()) {
          o10 = true;
          break;
        }
      }
      i10.raws.between = this.spacesAndCommentsFromEnd(a10), a10.length ? (i10.raws.afterName = this.spacesAndCommentsFromStart(a10), this.raw(i10, "params", a10), o10 && (e11 = a10[a10.length - 1], i10.source.end = this.getPosition(e11[3] || e11[2]), i10.source.end.offset++, this.spaces = i10.raws.between, i10.raws.between = "")) : (i10.raws.afterName = "", i10.params = ""), s10 && (i10.nodes = [], this.current = i10);
    }, t10.checkMissedSemicolon = function(e11) {
      var t11, r10 = this.colon(e11);
      if (false !== r10) {
        for (var n10 = 0, i10 = r10 - 1; i10 >= 0 && ("space" === (t11 = e11[i10])[0] || 2 !== (n10 += 1)); i10--) ;
        throw this.input.error("Missed semicolon", "word" === t11[0] ? t11[3] + 1 : t11[2]);
      }
    }, t10.colon = function(e11) {
      for (var t11, r10, n10, i10 = 0, o10 = z(e11.entries()); !(n10 = o10()).done; ) {
        var s10 = n10.value, a10 = s10[0], c10 = s10[1];
        if ("(" === (t11 = c10[0]) && (i10 += 1), ")" === t11 && (i10 -= 1), 0 === i10 && ":" === t11) if (r10) if ("word" === r10[0] && "progid" === r10[1]) continue;
        else return a10;
        else this.doubleColon(c10);
        r10 = c10;
      }
      return false;
    }, t10.comment = function(e11) {
      var t11 = new ou();
      this.init(t11, e11[2]), t11.source.end = this.getPosition(e11[3] || e11[2]), t11.source.end.offset++;
      var r10 = e11[1].slice(2, -2);
      if (/^\s*$/.test(r10)) t11.text = "", t11.raws.left = r10, t11.raws.right = "";
      else {
        var n10 = r10.match(/^(\s*)([^]*\S)(\s*)$/);
        t11.text = n10[2], t11.raws.left = n10[1], t11.raws.right = n10[3];
      }
    }, t10.createTokenizer = function() {
      this.tokenizer = oS(this.input);
    }, t10.decl = function(e11, t11) {
      var r10, n10, i10 = new iV();
      this.init(i10, e11[0][2]);
      var o10 = e11[e11.length - 1];
      for (";" === o10[0] && (this.semicolon = true, e11.pop()), i10.source.end = this.getPosition(o10[3] || o10[2] || (function(e12) {
        for (var t12 = e12.length - 1; t12 >= 0; t12--) {
          var r11 = e12[t12], n11 = r11[3] || r11[2];
          if (n11) return n11;
        }
      })(e11)), i10.source.end.offset++; "word" !== e11[0][0]; ) 1 === e11.length && this.unknownWord(e11), i10.raws.before += e11.shift()[1];
      for (i10.source.start = this.getPosition(e11[0][2]), i10.prop = ""; e11.length; ) {
        var s10 = e11[0][0];
        if (":" === s10 || "space" === s10 || "comment" === s10) break;
        i10.prop += e11.shift()[1];
      }
      for (i10.raws.between = ""; e11.length; ) {
        if (":" === (r10 = e11.shift())[0]) {
          i10.raws.between += r10[1];
          break;
        }
        "word" === r10[0] && /\w/.test(r10[1]) && this.unknownWord([r10]), i10.raws.between += r10[1];
      }
      ("_" === i10.prop[0] || "*" === i10.prop[0]) && (i10.raws.before += i10.prop[0], i10.prop = i10.prop.slice(1));
      for (var a10 = []; e11.length && ("space" === (n10 = e11[0][0]) || "comment" === n10); ) a10.push(e11.shift());
      this.precheckMissedSemicolon(e11);
      for (var c10 = e11.length - 1; c10 >= 0; c10--) {
        if ("!important" === (r10 = e11[c10])[1].toLowerCase()) {
          i10.important = true;
          var u10 = this.stringFrom(e11, c10);
          " !important" !== (u10 = this.spacesFromEnd(e11) + u10) && (i10.raws.important = u10);
          break;
        }
        if ("important" === r10[1].toLowerCase()) {
          for (var l2 = e11.slice(0), p2 = "", h2 = c10; h2 > 0; h2--) {
            var d2 = l2[h2][0];
            if (0 === p2.trim().indexOf("!") && "space" !== d2) break;
            p2 = l2.pop()[1] + p2;
          }
          0 === p2.trim().indexOf("!") && (i10.important = true, i10.raws.important = p2, e11 = l2);
        }
        if ("space" !== r10[0] && "comment" !== r10[0]) break;
      }
      e11.some(function(e12) {
        return "space" !== e12[0] && "comment" !== e12[0];
      }) && (i10.raws.between += a10.map(function(e12) {
        return e12[1];
      }).join(""), a10 = []), this.raw(i10, "value", a10.concat(e11), t11), i10.value.includes(":") && !t11 && this.checkMissedSemicolon(e11);
    }, t10.doubleColon = function(e11) {
      throw this.input.error("Double colon", { offset: e11[2] }, { offset: e11[2] + e11[1].length });
    }, t10.emptyRule = function(e11) {
      var t11 = new ox();
      this.init(t11, e11[2]), t11.selector = "", t11.raws.between = "", this.current = t11;
    }, t10.end = function(e11) {
      this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = false, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e11[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e11);
    }, t10.endFile = function() {
      this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
    }, t10.freeSemicolon = function(e11) {
      if (this.spaces += e11[1], this.current.nodes) {
        var t11 = this.current.nodes[this.current.nodes.length - 1];
        t11 && "rule" === t11.type && !t11.raws.ownSemicolon && (t11.raws.ownSemicolon = this.spaces, this.spaces = "");
      }
    }, t10.getPosition = function(e11) {
      var t11 = this.input.fromOffset(e11);
      return { column: t11.col, line: t11.line, offset: e11 };
    }, t10.init = function(e11, t11) {
      this.current.push(e11), e11.source = { input: this.input, start: this.getPosition(t11) }, e11.raws.before = this.spaces, this.spaces = "", "comment" !== e11.type && (this.semicolon = false);
    }, t10.other = function(e11) {
      for (var t11 = false, r10 = null, n10 = false, i10 = null, o10 = [], s10 = e11[1].startsWith("--"), a10 = [], c10 = e11; c10; ) {
        if (r10 = c10[0], a10.push(c10), "(" === r10 || "[" === r10) i10 || (i10 = c10), o10.push("(" === r10 ? ")" : "]");
        else if (s10 && n10 && "{" === r10) i10 || (i10 = c10), o10.push("}");
        else if (0 === o10.length) if (";" === r10) if (n10) return void this.decl(a10, s10);
        else break;
        else if ("{" === r10) return void this.rule(a10);
        else if ("}" === r10) {
          this.tokenizer.back(a10.pop()), t11 = true;
          break;
        } else ":" === r10 && (n10 = true);
        else r10 === o10[o10.length - 1] && (o10.pop(), 0 === o10.length && (i10 = null));
        c10 = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile() && (t11 = true), o10.length > 0 && this.unclosedBracket(i10), t11 && n10) {
        if (!s10) for (; a10.length && ("space" === (c10 = a10[a10.length - 1][0]) || "comment" === c10); ) this.tokenizer.back(a10.pop());
        this.decl(a10, s10);
      } else this.unknownWord(a10);
    }, t10.parse = function() {
      for (var e11; !this.tokenizer.endOfFile(); ) switch ((e11 = this.tokenizer.nextToken())[0]) {
        case "space":
          this.spaces += e11[1];
          break;
        case ";":
          this.freeSemicolon(e11);
          break;
        case "}":
          this.end(e11);
          break;
        case "comment":
          this.comment(e11);
          break;
        case "at-word":
          this.atrule(e11);
          break;
        case "{":
          this.emptyRule(e11);
          break;
        default:
          this.other(e11);
      }
      this.endFile();
    }, t10.precheckMissedSemicolon = function() {
    }, t10.raw = function(e11, t11, r10, n10) {
      for (var i10, o10, s10, a10, c10 = r10.length, u10 = "", l2 = true, p2 = 0; p2 < c10; p2 += 1) "space" !== (o10 = (i10 = r10[p2])[0]) || p2 !== c10 - 1 || n10 ? "comment" === o10 ? (a10 = r10[p2 - 1] ? r10[p2 - 1][0] : "empty", s10 = r10[p2 + 1] ? r10[p2 + 1][0] : "empty", oC[a10] || oC[s10] || "," === u10.slice(-1) ? l2 = false : u10 += i10[1]) : u10 += i10[1] : l2 = false;
      if (!l2) {
        var h2 = r10.reduce(function(e12, t12) {
          return e12 + t12[1];
        }, "");
        e11.raws[t11] = { raw: h2, value: u10 };
      }
      e11[t11] = u10;
    }, t10.rule = function(e11) {
      e11.pop();
      var t11 = new ox();
      this.init(t11, e11[0][2]), t11.raws.between = this.spacesAndCommentsFromEnd(e11), this.raw(t11, "selector", e11), this.current = t11;
    }, t10.spacesAndCommentsFromEnd = function(e11) {
      for (var t11, r10 = ""; e11.length && ("space" === (t11 = e11[e11.length - 1][0]) || "comment" === t11); ) r10 = e11.pop()[1] + r10;
      return r10;
    }, t10.spacesAndCommentsFromStart = function(e11) {
      for (var t11, r10 = ""; e11.length && ("space" === (t11 = e11[0][0]) || "comment" === t11); ) r10 += e11.shift()[1];
      return r10;
    }, t10.spacesFromEnd = function(e11) {
      for (var t11 = ""; e11.length && "space" === e11[e11.length - 1][0]; ) t11 = e11.pop()[1] + t11;
      return t11;
    }, t10.stringFrom = function(e11, t11) {
      for (var r10 = "", n10 = t11; n10 < e11.length; n10++) r10 += e11[n10][1];
      return e11.splice(t11, e11.length - t11), r10;
    }, t10.unclosedBlock = function() {
      var e11 = this.current.source.start;
      throw this.input.error("Unclosed block", e11.line, e11.column);
    }, t10.unclosedBracket = function(e11) {
      throw this.input.error("Unclosed bracket", { offset: e11[2] }, { offset: e11[2] + 1 });
    }, t10.unexpectedClose = function(e11) {
      throw this.input.error("Unexpected }", { offset: e11[2] }, { offset: e11[2] + 1 });
    }, t10.unknownWord = function(e11) {
      throw this.input.error("Unknown word", { offset: e11[0][2] }, { offset: e11[0][2] + e11[0][1].length });
    }, t10.unnamedAtrule = function(e11, t11) {
      throw this.input.error("At-rule without name", { offset: t11[2] }, { offset: t11[2] + t11[1].length });
    }, e10;
  })();
  function oI(e10, t10) {
    var r10 = new oM(new i8(e10, t10));
    try {
      r10.parse();
    } catch (e11) {
      throw e11;
    }
    return r10.root;
  }
  oI.default = oI, oh.registerParse(oI);
  var oO = ij.isClean, oE = ij.my, oR = { atrule: "AtRule", comment: "Comment", decl: "Declaration", document: "Document", root: "Root", rule: "Rule" }, oA = { AtRule: true, AtRuleExit: true, Comment: true, CommentExit: true, Declaration: true, DeclarationExit: true, Document: true, DocumentExit: true, Once: true, OnceExit: true, postcssPlugin: true, prepare: true, Root: true, RootExit: true, Rule: true, RuleExit: true }, oT = { Once: true, postcssPlugin: true, prepare: true };
  function oP(e10) {
    return (void 0 === e10 ? "undefined" : N(e10)) === "object" && "function" == typeof e10.then;
  }
  function oD(e10) {
    var t10 = false, r10 = oR[e10.type];
    return ("decl" === e10.type ? t10 = e10.prop.toLowerCase() : "atrule" === e10.type && (t10 = e10.name.toLowerCase()), t10 && e10.append) ? [r10, r10 + "-" + t10, 0, r10 + "Exit", r10 + "Exit-" + t10] : t10 ? [r10, r10 + "-" + t10, r10 + "Exit", r10 + "Exit-" + t10] : e10.append ? [r10, 0, r10 + "Exit"] : [r10, r10 + "Exit"];
  }
  function oL(e10) {
    return { eventIndex: 0, events: "document" === e10.type ? ["Document", 0, "DocumentExit"] : "root" === e10.type ? ["Root", 0, "RootExit"] : oD(e10), iterator: 0, node: e10, visitorIndex: 0, visitors: [] };
  }
  function oF(e10) {
    return e10[oO] = false, e10.nodes && e10.nodes.forEach(function(e11) {
      return oF(e11);
    }), e10;
  }
  var oj = {}, oN = (function() {
    function e10(t11, r10, n10) {
      var i10, o10 = this;
      if (this.stringified = false, this.processed = false, (void 0 === r10 ? "undefined" : N(r10)) === "object" && null !== r10 && ("root" === r10.type || "document" === r10.type)) i10 = oF(r10);
      else if (L(r10, e10) || L(r10, og)) i10 = oF(r10.root), r10.map && (void 0 === n10.map && (n10.map = {}), n10.map.inline || (n10.map.inline = false), n10.map.prev = r10.map);
      else {
        var s10 = oI;
        n10.syntax && (s10 = n10.syntax.parse), n10.parser && (s10 = n10.parser), s10.parse && (s10 = s10.parse);
        try {
          i10 = s10(r10, n10);
        } catch (e11) {
          this.processed = true, this.error = e11;
        }
        i10 && !i10[oE] && oh.rebuild(i10);
      }
      this.result = new og(t11, i10, n10), this.helpers = T({}, oj, { postcss: oj, result: this.result }), this.plugins = this.processor.plugins.map(function(e11) {
        return (void 0 === e11 ? "undefined" : N(e11)) === "object" && e11.prepare ? T({}, e11, e11.prepare(o10.result)) : e11;
      });
    }
    var t10 = e10.prototype;
    return t10.async = function() {
      return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
    }, t10.catch = function(e11) {
      return this.async().catch(e11);
    }, t10.finally = function(e11) {
      return this.async().then(e11, e11);
    }, t10.getAsyncError = function() {
      throw Error("Use process(css).then(cb) to work with async plugins");
    }, t10.handleError = function(e11, t11) {
      var r10 = this.result.lastPlugin;
      try {
        t11 && t11.addToError(e11), this.error = e11, "CssSyntaxError" !== e11.name || e11.plugin ? r10.postcssVersion : (e11.plugin = r10.postcssPlugin, e11.setMessage());
      } catch (e12) {
        console && console.error && console.error(e12);
      }
      return e11;
    }, t10.prepareVisitors = function() {
      var e11 = this;
      this.listeners = {};
      for (var t11, r10 = function(t12, r11, n11) {
        e11.listeners[r11] || (e11.listeners[r11] = []), e11.listeners[r11].push([t12, n11]);
      }, n10 = z(this.plugins); !(t11 = n10()).done; ) {
        var i10 = t11.value;
        if ((void 0 === i10 ? "undefined" : N(i10)) === "object") for (var o10 in i10) {
          if (!oA[o10] && /^[A-Z]/.test(o10)) throw Error("Unknown event " + o10 + " in " + i10.postcssPlugin + ". Try to update PostCSS (" + this.processor.version + " now).");
          if (!oT[o10]) if ("object" === N(i10[o10])) for (var s10 in i10[o10]) r10(i10, "*" === s10 ? o10 : o10 + "-" + s10.toLowerCase(), i10[o10][s10]);
          else "function" == typeof i10[o10] && r10(i10, o10, i10[o10]);
        }
      }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }, t10.runAsync = function() {
      var e11 = this;
      return E(function() {
        var t11, r10, n10, i10, o10, s10, a10, c10, u10, l2, p2, h2;
        return q(this, function(d2) {
          switch (d2.label) {
            case 0:
              e11.plugin = 0, t11 = 0, d2.label = 1;
            case 1:
              if (!(t11 < e11.plugins.length)) return [3, 6];
              if (r10 = e11.plugins[t11], !oP(n10 = e11.runOnRoot(r10))) return [3, 5];
              d2.label = 2;
            case 2:
              return d2.trys.push([2, 4, , 5]), [4, n10];
            case 3:
              return d2.sent(), [3, 5];
            case 4:
              throw i10 = d2.sent(), e11.handleError(i10);
            case 5:
              return t11++, [3, 1];
            case 6:
              if (e11.prepareVisitors(), !e11.hasListener) return [3, 18];
              o10 = e11.result.root, d2.label = 7;
            case 7:
              if (o10[oO]) return [3, 14];
              o10[oO] = true, s10 = [oL(o10)], d2.label = 8;
            case 8:
              if (!(s10.length > 0)) return [3, 13];
              if (!oP(a10 = e11.visitTick(s10))) return [3, 12];
              d2.label = 9;
            case 9:
              return d2.trys.push([9, 11, , 12]), [4, a10];
            case 10:
              return d2.sent(), [3, 12];
            case 11:
              throw c10 = d2.sent(), u10 = s10[s10.length - 1].node, e11.handleError(c10, u10);
            case 12:
              return [3, 8];
            case 13:
              return [3, 7];
            case 14:
              if (!e11.listeners.OnceExit) return [3, 18];
              l2 = function() {
                var t12, r11, n11, i11;
                return q(this, function(s11) {
                  switch (s11.label) {
                    case 0:
                      r11 = (t12 = h2.value)[0], n11 = t12[1], e11.result.lastPlugin = r11, s11.label = 1;
                    case 1:
                      if (s11.trys.push([1, 6, , 7]), "document" !== o10.type) return [3, 3];
                      return [4, Promise.all(o10.nodes.map(function(t13) {
                        return n11(t13, e11.helpers);
                      }))];
                    case 2:
                      return s11.sent(), [3, 5];
                    case 3:
                      return [4, n11(o10, e11.helpers)];
                    case 4:
                      s11.sent(), s11.label = 5;
                    case 5:
                      return [3, 7];
                    case 6:
                      throw i11 = s11.sent(), e11.handleError(i11);
                    case 7:
                      return [2];
                  }
                });
              }, p2 = z(e11.listeners.OnceExit), d2.label = 15;
            case 15:
              if ((h2 = p2()).done) return [3, 18];
              return [5, W(l2())];
            case 16:
              d2.sent(), d2.label = 17;
            case 17:
              return [3, 15];
            case 18:
              return e11.processed = true, [2, e11.stringify()];
          }
        });
      })();
    }, t10.runOnRoot = function(e11) {
      var t11 = this;
      this.result.lastPlugin = e11;
      try {
        if ((void 0 === e11 ? "undefined" : N(e11)) === "object" && e11.Once) {
          if ("document" === this.result.root.type) {
            var r10 = this.result.root.nodes.map(function(r11) {
              return e11.Once(r11, t11.helpers);
            });
            if (oP(r10[0])) return Promise.all(r10);
            return r10;
          }
          return e11.Once(this.result.root, this.helpers);
        }
        if ("function" == typeof e11) return e11(this.result.root, this.result);
      } catch (e12) {
        throw this.handleError(e12);
      }
    }, t10.stringify = function() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      this.stringified = true, this.sync();
      var e11 = this.result.opts, t11 = iB;
      e11.syntax && (t11 = e11.syntax.stringify), e11.stringifier && (t11 = e11.stringifier), t11.stringify && (t11 = t11.stringify);
      var r10 = new oc(t11, this.result.root, this.result.opts).generate();
      return this.result.css = r10[0], this.result.map = r10[1], this.result;
    }, t10.sync = function() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      if (this.processed = true, this.processing) throw this.getAsyncError();
      for (var e11, t11 = z(this.plugins); !(e11 = t11()).done; ) {
        var r10 = e11.value;
        if (oP(this.runOnRoot(r10))) throw this.getAsyncError();
      }
      if (this.prepareVisitors(), this.hasListener) {
        for (var n10 = this.result.root; !n10[oO]; ) n10[oO] = true, this.walkSync(n10);
        if (this.listeners.OnceExit) if ("document" === n10.type) for (var i10, o10 = z(n10.nodes); !(i10 = o10()).done; ) {
          var s10 = i10.value;
          this.visitSync(this.listeners.OnceExit, s10);
        }
        else this.visitSync(this.listeners.OnceExit, n10);
      }
      return this.result;
    }, t10.then = function(e11, t11) {
      return this.async().then(e11, t11);
    }, t10.toString = function() {
      return this.css;
    }, t10.visitSync = function(e11, t11) {
      for (var r10, n10 = z(e11); !(r10 = n10()).done; ) {
        var i10 = r10.value, o10 = i10[0], s10 = i10[1];
        this.result.lastPlugin = o10;
        var a10 = void 0;
        try {
          a10 = s10(t11, this.helpers);
        } catch (e12) {
          throw this.handleError(e12, t11.proxyOf);
        }
        if ("root" !== t11.type && "document" !== t11.type && !t11.parent) return true;
        if (oP(a10)) throw this.getAsyncError();
      }
    }, t10.visitTick = function(e11) {
      var t11 = e11[e11.length - 1], r10 = t11.node, n10 = t11.visitors;
      if ("root" !== r10.type && "document" !== r10.type && !r10.parent) return void e11.pop();
      if (n10.length > 0 && t11.visitorIndex < n10.length) {
        var i10 = n10[t11.visitorIndex], o10 = i10[0], s10 = i10[1];
        t11.visitorIndex += 1, t11.visitorIndex === n10.length && (t11.visitors = [], t11.visitorIndex = 0), this.result.lastPlugin = o10;
        try {
          return s10(r10.toProxy(), this.helpers);
        } catch (e12) {
          throw this.handleError(e12, r10);
        }
      }
      if (0 !== t11.iterator) {
        for (var a10, c10 = t11.iterator; a10 = r10.nodes[r10.indexes[c10]]; ) if (r10.indexes[c10] += 1, !a10[oO]) {
          a10[oO] = true, e11.push(oL(a10));
          return;
        }
        t11.iterator = 0, delete r10.indexes[c10];
      }
      for (var u10 = t11.events; t11.eventIndex < u10.length; ) {
        var l2 = u10[t11.eventIndex];
        if (t11.eventIndex += 1, 0 === l2) {
          r10.nodes && r10.nodes.length && (r10[oO] = true, t11.iterator = r10.getIterator());
          return;
        }
        if (this.listeners[l2]) {
          t11.visitors = this.listeners[l2];
          return;
        }
      }
      e11.pop();
    }, t10.walkSync = function(e11) {
      var t11 = this;
      e11[oO] = true;
      for (var r10, n10 = oD(e11), i10 = z(n10); !(r10 = i10()).done; ) {
        var o10 = r10.value;
        if (0 === o10) e11.nodes && e11.each(function(e12) {
          e12[oO] || t11.walkSync(e12);
        });
        else {
          var s10 = this.listeners[o10];
          if (s10 && this.visitSync(s10, e11.toProxy())) return;
        }
      }
    }, t10.warnings = function() {
      return this.sync().warnings();
    }, A(e10, [{ key: "content", get: function() {
      return this.stringify().content;
    } }, { key: "css", get: function() {
      return this.stringify().css;
    } }, { key: "map", get: function() {
      return this.stringify().map;
    } }, { key: "messages", get: function() {
      return this.sync().messages;
    } }, { key: "opts", get: function() {
      return this.result.opts;
    } }, { key: "processor", get: function() {
      return this.result.processor;
    } }, { key: "root", get: function() {
      return this.sync().root;
    } }, { key: Symbol.toStringTag, get: function() {
      return "LazyResult";
    } }]), e10;
  })();
  oN.registerPostcss = function(e10) {
    oj = e10;
  }, oN.default = oN, ow.registerLazyResult(oN), od.registerLazyResult(oN);
  var oU = (function() {
    function e10(e11, t11, r10) {
      t11 = t11.toString(), this.stringified = false, this._processor = e11, this._css = t11, this._opts = r10, this._map = void 0, this.result = new og(this._processor, n10, this._opts), this.result.css = t11;
      var n10, i10 = this;
      Object.defineProperty(this.result, "root", { get: function() {
        return i10.root;
      } });
      var o10 = new oc(iB, n10, this._opts, t11);
      if (o10.isMap()) {
        var s10 = o10.generate(), a10 = s10[0], c10 = s10[1];
        a10 && (this.result.css = a10), c10 && (this.result.map = c10);
      } else o10.clearAnnotation(), this.result.css = o10.css;
    }
    var t10 = e10.prototype;
    return t10.async = function() {
      return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
    }, t10.catch = function(e11) {
      return this.async().catch(e11);
    }, t10.finally = function(e11) {
      return this.async().then(e11, e11);
    }, t10.sync = function() {
      if (this.error) throw this.error;
      return this.result;
    }, t10.then = function(e11, t11) {
      return this.async().then(e11, t11);
    }, t10.toString = function() {
      return this._css;
    }, t10.warnings = function() {
      return [];
    }, A(e10, [{ key: "content", get: function() {
      return this.result.css;
    } }, { key: "css", get: function() {
      return this.result.css;
    } }, { key: "map", get: function() {
      return this.result.map;
    } }, { key: "messages", get: function() {
      return [];
    } }, { key: "opts", get: function() {
      return this.result.opts;
    } }, { key: "processor", get: function() {
      return this.result.processor;
    } }, { key: "root", get: function() {
      var e11;
      if (this._root) return this._root;
      try {
        e11 = oI(this._css, this._opts);
      } catch (e12) {
        this.error = e12;
      }
      if (!this.error) return this._root = e11, e11;
      throw this.error;
    } }, { key: Symbol.toStringTag, get: function() {
      return "NoWorkResult";
    } }]), e10;
  })();
  oU.default = oU;
  var oB = (function() {
    function e10(e11) {
      void 0 === e11 && (e11 = []), this.version = "8.4.38", this.plugins = this.normalize(e11);
    }
    var t10 = e10.prototype;
    return t10.normalize = function(e11) {
      for (var t11, r10 = [], n10 = z(e11); !(t11 = n10()).done; ) {
        var i10 = t11.value;
        if (true === i10.postcss ? i10 = i10() : i10.postcss && (i10 = i10.postcss), (void 0 === i10 ? "undefined" : N(i10)) === "object" && Array.isArray(i10.plugins)) r10 = r10.concat(i10.plugins);
        else if ((void 0 === i10 ? "undefined" : N(i10)) === "object" && i10.postcssPlugin) r10.push(i10);
        else if ("function" == typeof i10) r10.push(i10);
        else if ((void 0 === i10 ? "undefined" : N(i10)) === "object" && (i10.parse || i10.stringify)) ;
        else throw Error(i10 + " is not a PostCSS plugin");
      }
      return r10;
    }, t10.process = function(e11, t11) {
      return (void 0 === t11 && (t11 = {}), this.plugins.length || t11.parser || t11.stringifier || t11.syntax) ? new oN(this, e11, t11) : new oU(this, e11, t11);
    }, t10.use = function(e11) {
      return this.plugins = this.plugins.concat(this.normalize([e11])), this;
    }, e10;
  })();
  function oz(e10, t10) {
    if (Array.isArray(e10)) return e10.map(function(e11) {
      return oz(e11);
    });
    var r10 = e10.inputs, n10 = F(e10, ["inputs"]);
    if (r10) {
      t10 = [];
      for (var i10, o10 = z(r10); !(i10 = o10()).done; ) {
        var s10 = i10.value, a10 = T({}, s10, { __proto__: i8.prototype });
        a10.map && (a10.map = T({}, a10.map, { __proto__: iZ.prototype })), t10.push(a10);
      }
    }
    if (n10.nodes && (n10.nodes = e10.nodes.map(function(e11) {
      return oz(e11, t10);
    })), n10.source) {
      var c10 = n10.source, u10 = c10.inputId;
      n10.source = F(c10, ["inputId"]), null != u10 && (n10.source.input = t10[u10]);
    }
    if ("root" === n10.type) return new ow(n10);
    if ("decl" === n10.type) return new iV(n10);
    if ("rule" === n10.type) return new ox(n10);
    if ("comment" === n10.type) return new ou(n10);
    if ("atrule" === n10.type) return new ob(n10);
    else throw Error("Unknown node type: " + e10.type);
  }
  function oq() {
    for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++) t10[r10] = arguments[r10];
    return 1 === t10.length && Array.isArray(t10[0]) && (t10 = t10[0]), new oB(t10);
  }
  oB.default = oB, ow.registerProcessor(oB), od.registerProcessor(oB), oz.default = oz, oq.plugin = function(e10, t10) {
    var r10, n10 = false;
    function i10() {
      for (var r11 = arguments.length, i11 = Array(r11), o10 = 0; o10 < r11; o10++) i11[o10] = arguments[o10];
      console && console.warn && !n10 && (n10 = true, console.warn(e10 + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), b.default.env.LANG && b.default.env.LANG.startsWith("cn") && console.warn(e10 + ": \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
      var s10 = t10.apply(void 0, [].concat(i11));
      return s10.postcssPlugin = e10, s10.postcssVersion = new oB().version, s10;
    }
    return Object.defineProperty(i10, "postcss", { get: function() {
      return r10 || (r10 = i10()), r10;
    } }), i10.process = function(e11, t11, r11) {
      return oq([i10(r11)]).process(e11, t11);
    }, i10;
  }, oq.stringify = iB, oq.parse = oI, oq.fromJSON = oz, oq.list = ok, oq.comment = function(e10) {
    return new ou(e10);
  }, oq.atRule = function(e10) {
    return new ob(e10);
  }, oq.decl = function(e10) {
    return new iV(e10);
  }, oq.rule = function(e10) {
    return new ox(e10);
  }, oq.root = function(e10) {
    return new ow(e10);
  }, oq.document = function(e10) {
    return new od(e10);
  }, oq.CssSyntaxError = iF, oq.Declaration = iV, oq.Container = oh, oq.Processor = oB, oq.Document = od, oq.Comment = ou, oq.Warning = of, oq.AtRule = ob, oq.Result = og, oq.Input = i8, oq.Rule = ox, oq.Root = ow, oq.Node = iW, oN.registerPostcss(oq), oq.default = oq;
  var oW = oq && oq.__esModule && Object.prototype.hasOwnProperty.call(oq, "default") ? oq.default : oq;
  oW.stringify, oW.fromJSON, oW.plugin, oW.parse, oW.list, oW.document, oW.comment, oW.atRule, oW.rule, oW.decl, oW.root, oW.CssSyntaxError, oW.Declaration, oW.Container, oW.Processor, oW.Document, oW.Comment, oW.Warning, oW.AtRule, oW.Result, oW.Input, oW.Rule, oW.Root, oW.Node;
  var oV = Object.defineProperty, o$ = function(e10, t10, r10) {
    var n10;
    return n10 = (void 0 === t10 ? "undefined" : N(t10)) !== "symbol" ? t10 + "" : t10, n10 in e10 ? oV(e10, n10, { enumerable: true, configurable: true, writable: true, value: r10 }) : e10[n10] = r10;
  }, oG = (function() {
    function e10(e11) {
      o$(this, "fileName"), o$(this, "functionName"), o$(this, "lineNumber"), o$(this, "columnNumber"), this.fileName = e11.fileName || "", this.functionName = e11.functionName || "", this.lineNumber = e11.lineNumber, this.columnNumber = e11.columnNumber;
    }
    return e10.prototype.toString = function() {
      var e11 = this.lineNumber || "", t10 = this.columnNumber || "";
      return this.functionName ? this.functionName + " (" + this.fileName + ":" + e11 + ":" + t10 + ")" : this.fileName + ":" + e11 + ":" + t10;
    }, e10;
  })(), oH = /(^|@)\S+:\d+/, oK = /^\s*at .*(\S+:\d+|\(native\))/m, oY = /^(eval@)?(\[native code])?$/, oJ = { parse: function(e10) {
    return e10 ? void 0 !== e10.stacktrace || void 0 !== e10["opera#sourceloc"] ? this.parseOpera(e10) : e10.stack && e10.stack.match(oK) ? this.parseV8OrIE(e10) : e10.stack ? this.parseFFOrSafari(e10) : (console.warn("[console-record-plugin]: Failed to parse error object:", e10), []) : [];
  }, extractLocation: function(e10) {
    if (-1 === e10.indexOf(":")) return [e10];
    var t10 = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e10.replace(/[()]/g, ""));
    if (!t10) throw Error("Cannot parse given url: " + e10);
    return [t10[1], t10[2] || void 0, t10[3] || void 0];
  }, parseV8OrIE: function(e10) {
    return e10.stack.split("\n").filter(function(e11) {
      return !!e11.match(oK);
    }, this).map(function(e11) {
      e11.indexOf("(eval ") > -1 && (e11 = e11.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
      var t10 = e11.replace(/^\s+/, "").replace(/\(eval code/g, "("), r10 = t10.match(/ (\((.+):(\d+):(\d+)\)$)/), n10 = (t10 = r10 ? t10.replace(r10[0], "") : t10).split(/\s+/).slice(1), i10 = this.extractLocation(r10 ? r10[1] : n10.pop());
      return new oG({ functionName: n10.join(" ") || void 0, fileName: ["eval", "<anonymous>"].indexOf(i10[0]) > -1 ? void 0 : i10[0], lineNumber: i10[1], columnNumber: i10[2] });
    }, this);
  }, parseFFOrSafari: function(e10) {
    return e10.stack.split("\n").filter(function(e11) {
      return !e11.match(oY);
    }, this).map(function(e11) {
      if (e11.indexOf(" > eval") > -1 && (e11 = e11.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === e11.indexOf("@") && -1 === e11.indexOf(":")) return new oG({ functionName: e11 });
      var t10 = /((.*".+"[^@]*)?[^@]*)(?:@)/, r10 = e11.match(t10), n10 = r10 && r10[1] ? r10[1] : void 0, i10 = this.extractLocation(e11.replace(t10, ""));
      return new oG({ functionName: n10, fileName: i10[0], lineNumber: i10[1], columnNumber: i10[2] });
    }, this);
  }, parseOpera: function(e10) {
    return !e10.stacktrace || e10.message.indexOf("\n") > -1 && e10.message.split("\n").length > e10.stacktrace.split("\n").length ? this.parseOpera9(e10) : e10.stack ? this.parseOpera11(e10) : this.parseOpera10(e10);
  }, parseOpera9: function(e10) {
    for (var t10 = /Line (\d+).*script (?:in )?(\S+)/i, r10 = e10.message.split("\n"), n10 = [], i10 = 2, o10 = r10.length; i10 < o10; i10 += 2) {
      var s10 = t10.exec(r10[i10]);
      s10 && n10.push(new oG({ fileName: s10[2], lineNumber: parseFloat(s10[1]) }));
    }
    return n10;
  }, parseOpera10: function(e10) {
    for (var t10 = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r10 = e10.stacktrace.split("\n"), n10 = [], i10 = 0, o10 = r10.length; i10 < o10; i10 += 2) {
      var s10 = t10.exec(r10[i10]);
      s10 && n10.push(new oG({ functionName: s10[3] || void 0, fileName: s10[2], lineNumber: parseFloat(s10[1]) }));
    }
    return n10;
  }, parseOpera11: function(e10) {
    return e10.stack.split("\n").filter(function(e11) {
      return !!e11.match(oH) && !e11.match(/^Error created at/);
    }, this).map(function(e11) {
      var t10 = e11.split("@"), r10 = this.extractLocation(t10.pop());
      return new oG({ functionName: (t10.shift() || "").replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0, fileName: r10[0], lineNumber: r10[1], columnNumber: r10[2] });
    }, this);
  } };
  function oZ(e10) {
    return "[object Object]" === Object.prototype.toString.call(e10);
  }
  function oX(e10, t10) {
    var r10 = { numOfKeysLimit: 50, depthOfLimit: 4 };
    Object.assign(r10, t10);
    var n10 = [], i10 = [];
    return JSON.stringify(e10, function(e11, t11) {
      if (n10.length > 0) {
        var o10, s10, a10 = n10.indexOf(this);
        ~a10 ? n10.splice(a10 + 1) : n10.push(this), ~a10 ? i10.splice(a10, 1 / 0, e11) : i10.push(e11), ~n10.indexOf(t11) && (t11 = n10[0] === t11 ? "[Circular ~]" : "[Circular ~." + i10.slice(0, n10.indexOf(t11)).join(".") + "]");
      } else n10.push(t11);
      if (null === t11) return t11;
      if (void 0 === t11) return "undefined";
      if (oZ(o10 = t11) && Object.keys(o10).length > r10.numOfKeysLimit || "function" == typeof o10 || oZ(o10) && (function e12(t12, r11) {
        if (0 === r11) return true;
        for (var n11, i11 = Object.keys(t12), o11 = z(i11); !(n11 = o11()).done; ) {
          var s11 = n11.value;
          if (oZ(t12[s11]) && e12(t12[s11], r11 - 1)) return true;
        }
        return false;
      })(o10, r10.depthOfLimit)) {
        return s10 = t11.toString(), r10.stringLengthLimit && s10.length > r10.stringLengthLimit && (s10 = "" + s10.slice(0, r10.stringLengthLimit) + "..."), s10;
      }
      if ((void 0 === t11 ? "undefined" : N(t11)) === "bigint") return t11.toString() + "n";
      if (L(t11, Event)) {
        var c10 = {};
        for (var u10 in t11) {
          var l2 = t11[u10];
          Array.isArray(l2) ? c10[u10] = (function(e12) {
            if (!e12 || !e12.outerHTML) return "";
            for (var t12 = ""; e12.parentElement; ) {
              var r11 = e12.localName;
              if (!r11) break;
              r11 = r11.toLowerCase();
              var n11 = e12.parentElement, i11 = [];
              if (n11.children && n11.children.length > 0) for (var o11 = 0; o11 < n11.children.length; o11++) {
                var s11 = n11.children[o11];
                s11.localName && s11.localName.toLowerCase && s11.localName.toLowerCase() === r11 && i11.push(s11);
              }
              i11.length > 1 && (r11 += ":eq(" + i11.indexOf(e12) + ")"), t12 = r11 + (t12 ? ">" + t12 : ""), e12 = n11;
            }
            return t12;
          })(l2.length ? l2[0] : null) : c10[u10] = l2;
        }
        return c10;
      }
      return L(t11, Node) ? L(t11, HTMLElement) ? t11 ? t11.outerHTML : "" : t11.nodeName : L(t11, Error) ? t11.stack ? t11.stack + "\nEnd of stack for Error object" : t11.name + ": " + t11.message : t11;
    });
  }
  var oQ = { level: ["assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"], lengthThreshold: 1e3, logger: "console" };
  function o0(e10, t10, r10) {
    var n10 = r10 ? Object.assign({}, oQ, r10) : oQ, i10 = n10.logger;
    if (!i10) return function() {
    };
    l2 = "string" == typeof i10 ? t10[i10] : i10;
    var o10 = 0, s10 = false, a10 = [];
    if (n10.level.includes("error")) {
      var c10 = function(t11) {
        var r11 = t11.message, i11 = t11.error;
        e10({ level: "error", trace: oJ.parse(i11).map(function(e11) {
          return e11.toString();
        }), payload: [oX(r11, n10.stringifyOptions)] });
      };
      t10.addEventListener("error", c10), a10.push(function() {
        t10.removeEventListener("error", c10);
      });
      var u10 = function(t11) {
        var r11, i11;
        L(t11.reason, Error) ? i11 = [oX("Uncaught (in promise) " + (r11 = t11.reason).name + ": " + r11.message, n10.stringifyOptions)] : (r11 = Error(), i11 = [oX("Uncaught (in promise)", n10.stringifyOptions), oX(t11.reason, n10.stringifyOptions)]), e10({ level: "error", trace: oJ.parse(r11).map(function(e11) {
          return e11.toString();
        }), payload: i11 });
      };
      t10.addEventListener("unhandledrejection", u10), a10.push(function() {
        t10.removeEventListener("unhandledrejection", u10);
      });
    }
    for (var l2, p2, h2 = z(n10.level); !(p2 = h2()).done; ) {
      var d2 = p2.value;
      a10.push((function(t11, r11) {
        var i11 = this;
        if (!t11[r11]) return function() {
        };
        try {
          if (!(r11 in t11)) return function() {
          };
          var a11 = t11[r11], c11 = /* @__PURE__ */ (function(t12) {
            return function() {
              for (var a12 = arguments.length, c12 = Array(a12), u11 = 0; u11 < a12; u11++) c12[u11] = arguments[u11];
              if ((t12.apply(i11, c12), "assert" !== r11 || !c12[0]) && !s10) {
                s10 = true;
                try {
                  var l3 = oJ.parse(Error()).map(function(e11) {
                    return e11.toString();
                  }).splice(1), p3 = ("assert" === r11 ? c12.slice(1) : c12).map(function(e11) {
                    return oX(e11, n10.stringifyOptions);
                  });
                  ++o10 < n10.lengthThreshold ? e10({ level: r11, trace: l3, payload: p3 }) : o10 === n10.lengthThreshold && e10({ level: "warn", trace: [], payload: [oX("The number of log records reached the threshold.")] });
                } catch (e11) {
                  t12.apply(void 0, [].concat(["rrweb logger error:", e11], c12));
                } finally {
                  s10 = false;
                }
              }
            };
          })(a11);
          return "function" == typeof c11 && (c11.prototype = c11.prototype || {}, Object.defineProperties(c11, { __rrweb_original__: { enumerable: false, value: a11 } })), t11[r11] = c11, function() {
            t11[r11] = a11;
          };
        } catch (e11) {
          return function() {
          };
        }
      })(l2, d2));
    }
    return function() {
      a10.forEach(function(e11) {
        return e11();
      });
    };
  }
  var o1, o2, o3, o5, o9, o6, o4, o8, o7, se, st, sr, sn, si, so, ss, sa, sc, su, sl, sp, sh, sd, sf, sg, sm, sv, sy, s_, sb, sw, sk, sx, sS, sC, sM, sI, sO, sE, sR, sA, sT, sP, sD, sL, sF = se.setImmediate, sj = Object.prototype.toString, sN = void 0 !== sF ? function(e10) {
    return sF(e10);
  } : setTimeout;
  try {
    Object.defineProperty({}, "x", {}), sP = function(e10, t10, r10, n10) {
      return Object.defineProperty(e10, t10, { value: r10, writable: true, configurable: false !== n10 });
    };
  } catch (e10) {
    sP = function(e11, t10, r10) {
      return e11[t10] = r10, e11;
    };
  }
  function sU(e10, t10) {
    sL.add(e10, t10), sD || (sD = sN(sL.drain));
  }
  function sB(e10) {
    var t10, r10 = typeof e10;
    return null !== e10 && ("object" === r10 || "function" === r10) && (t10 = e10.then), "function" == typeof t10 && t10;
  }
  function sz() {
    for (var e10 = 0; e10 < this.chain.length; e10++) !(function(e11, t10, r10) {
      var n10, i10;
      try {
        false === t10 ? r10.reject(e11.msg) : (n10 = true === t10 ? e11.msg : t10.call(void 0, e11.msg)) === r10.promise ? r10.reject(TypeError("Promise-chain cycle")) : (i10 = sB(n10)) ? i10.call(n10, r10.resolve, r10.reject) : r10.resolve(n10);
      } catch (e12) {
        r10.reject(e12);
      }
    })(this, 1 === this.state ? this.chain[e10].success : this.chain[e10].failure, this.chain[e10]);
    this.chain.length = 0;
  }
  function sq(e10) {
    var t10, r10 = this;
    if (!r10.triggered) {
      r10.triggered = true, r10.def && (r10 = r10.def);
      try {
        (t10 = sB(e10)) ? sU(function() {
          var n10 = new s$(r10);
          try {
            t10.call(e10, function() {
              sq.apply(n10, arguments);
            }, function() {
              sW.apply(n10, arguments);
            });
          } catch (e11) {
            sW.call(n10, e11);
          }
        }) : (r10.msg = e10, r10.state = 1, r10.chain.length > 0 && sU(sz, r10));
      } catch (e11) {
        sW.call(new s$(r10), e11);
      }
    }
  }
  function sW(e10) {
    var t10 = this;
    !t10.triggered && (t10.triggered = true, t10.def && (t10 = t10.def), t10.msg = e10, t10.state = 2, t10.chain.length > 0 && sU(sz, t10));
  }
  function sV(e10, t10, r10, n10) {
    for (var i10 = 0; i10 < t10.length; i10++) !(function(i11) {
      e10.resolve(t10[i11]).then(function(e11) {
        r10(i11, e11);
      }, n10);
    })(i10);
  }
  function s$(e10) {
    this.def = e10, this.triggered = false;
  }
  function sG(e10) {
    this.promise = e10, this.state = 0, this.triggered = false, this.chain = [], this.msg = void 0;
  }
  function sH(e10) {
    if ("function" != typeof e10) throw TypeError("Not a function");
    if (0 !== this.__NPO__) throw TypeError("Not a promise");
    this.__NPO__ = 1;
    var t10 = new sG(this);
    this.then = function(e11, r10) {
      var n10 = { success: "function" != typeof e11 || e11, failure: "function" == typeof r10 && r10 };
      return n10.promise = new this.constructor(function(e12, t11) {
        if ("function" != typeof e12 || "function" != typeof t11) throw TypeError("Not a function");
        n10.resolve = e12, n10.reject = t11;
      }), t10.chain.push(n10), 0 !== t10.state && sU(sz, t10), n10.promise;
    }, this.catch = function(e11) {
      return this.then(void 0, e11);
    };
    try {
      e10.call(void 0, function(e11) {
        sq.call(t10, e11);
      }, function(e11) {
        sW.call(t10, e11);
      });
    } catch (e11) {
      sW.call(t10, e11);
    }
  }
  sL = /* @__PURE__ */ (function() {
    var e10, t10, r10;
    function n10(e11, t11) {
      this.fn = e11, this.self = t11, this.next = void 0;
    }
    return { add: function(i10, o10) {
      r10 = new n10(i10, o10), t10 ? t10.next = r10 : e10 = r10, t10 = r10, r10 = void 0;
    }, drain: function() {
      var r11 = e10;
      for (e10 = t10 = sD = void 0; r11; ) r11.fn.call(r11.self), r11 = r11.next;
    } };
  })();
  var sK = sP({}, "constructor", sH, false);
  sH.prototype = sK, sP(sK, "__NPO__", 0, false), sP(sH, "resolve", function(e10) {
    return e10 && "object" == typeof e10 && 1 === e10.__NPO__ ? e10 : new this(function(t10, r10) {
      if ("function" != typeof t10 || "function" != typeof r10) throw TypeError("Not a function");
      t10(e10);
    });
  }), sP(sH, "reject", function(e10) {
    return new this(function(t10, r10) {
      if ("function" != typeof t10 || "function" != typeof r10) throw TypeError("Not a function");
      r10(e10);
    });
  }), sP(sH, "all", function(e10) {
    var t10 = this;
    return "[object Array]" !== sj.call(e10) ? t10.reject(TypeError("Not an array")) : 0 === e10.length ? t10.resolve([]) : new t10(function(r10, n10) {
      if ("function" != typeof r10 || "function" != typeof n10) throw TypeError("Not a function");
      var i10 = e10.length, o10 = Array(i10), s10 = 0;
      sV(t10, e10, function(e11, t11) {
        o10[e11] = t11, ++s10 === i10 && r10(o10);
      }, n10);
    });
  }), sP(sH, "race", function(e10) {
    var t10 = this;
    return "[object Array]" !== sj.call(e10) ? t10.reject(TypeError("Not an array")) : new t10(function(r10, n10) {
      if ("function" != typeof r10 || "function" != typeof n10) throw TypeError("Not a function");
      sV(t10, e10, function(e11, t11) {
        r10(t11);
      }, n10);
    });
  }), g = "u" > typeof Promise && -1 !== Promise.toString().indexOf("[native code]") ? Promise : sH;
  var sY = Array.prototype, sJ = Function.prototype, sZ = Object.prototype, sX = sY.slice, sQ = sZ.toString, s0 = sZ.hasOwnProperty, s1 = se.console, s2 = se.navigator, s3 = se.document, s5 = se.opera, s9 = se.screen, s6 = s2.userAgent, s4 = sJ.bind, s8 = sY.forEach, s7 = sY.indexOf, ae = sY.map, at = Array.isArray, ar = {}, an = { trim: function(e10) {
    return e10.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  } }, ai = { log: function() {
    if (x.DEBUG && !an.isUndefined(s1) && s1) try {
      s1.log.apply(s1, arguments);
    } catch (e10) {
      an.each(arguments, function(e11) {
        s1.log(e11);
      });
    }
  }, warn: function() {
    if (x.DEBUG && !an.isUndefined(s1) && s1) {
      var e10 = ["Mixpanel warning:"].concat(an.toArray(arguments));
      try {
        s1.warn.apply(s1, e10);
      } catch (t10) {
        an.each(e10, function(e11) {
          s1.warn(e11);
        });
      }
    }
  }, error: function() {
    if (x.DEBUG && !an.isUndefined(s1) && s1) {
      var e10 = ["Mixpanel error:"].concat(an.toArray(arguments));
      try {
        s1.error.apply(s1, e10);
      } catch (t10) {
        an.each(e10, function(e11) {
          s1.error(e11);
        });
      }
    }
  }, critical: function() {
    if (!an.isUndefined(s1) && s1) {
      var e10 = ["Mixpanel error:"].concat(an.toArray(arguments));
      try {
        s1.error.apply(s1, e10);
      } catch (t10) {
        an.each(e10, function(e11) {
          s1.error(e11);
        });
      }
    }
  } }, ao = function(e10, t10) {
    return function() {
      return arguments[0] = "[" + t10 + "] " + arguments[0], e10.apply(ai, arguments);
    };
  }, as = function(e10) {
    return { log: ao(ai.log, e10), warn: ao(ai.warn, e10), error: ao(ai.error, e10), critical: ao(ai.critical, e10) };
  }, aa = function(e10) {
    return function() {
      try {
        return e10.apply(this, arguments);
      } catch (e11) {
        ai.critical("Implementation error. Please turn on debug and contact support@mixpanel.com."), x.DEBUG && ai.critical(e11);
      }
    };
  }, ac = function(e10) {
    var t10 = e10.prototype;
    for (var r10 in t10) "function" == typeof t10[r10] && (t10[r10] = aa(t10[r10]));
  };
  an.bind = function(e10, t10) {
    var r10, n10;
    if (s4 && e10.bind === s4) return s4.apply(e10, sX.call(arguments, 1));
    if (!an.isFunction(e10)) throw TypeError();
    return r10 = sX.call(arguments, 2), n10 = function() {
      if (!(this instanceof n10)) return e10.apply(t10, r10.concat(sX.call(arguments)));
      var i10 = {};
      i10.prototype = e10.prototype;
      var o10 = new i10();
      i10.prototype = null;
      var s10 = e10.apply(o10, r10.concat(sX.call(arguments)));
      return Object(s10) === s10 ? s10 : o10;
    };
  }, an.each = function(e10, t10, r10) {
    if (null != e10) {
      if (s8 && e10.forEach === s8) e10.forEach(t10, r10);
      else if (e10.length === +e10.length) {
        for (var n10 = 0, i10 = e10.length; n10 < i10; n10++) if (n10 in e10 && t10.call(r10, e10[n10], n10, e10) === ar) return;
      } else for (var o10 in e10) if (s0.call(e10, o10) && t10.call(r10, e10[o10], o10, e10) === ar) return;
    }
  }, an.extend = function(e10) {
    return an.each(sX.call(arguments, 1), function(t10) {
      for (var r10 in t10) void 0 !== t10[r10] && (e10[r10] = t10[r10]);
    }), e10;
  }, an.isArray = at || function(e10) {
    return "[object Array]" === sQ.call(e10);
  }, an.isFunction = function(e10) {
    return "function" == typeof e10;
  }, an.isArguments = function(e10) {
    return !!(e10 && s0.call(e10, "callee"));
  }, an.toArray = function(e10) {
    return e10 ? e10.toArray ? e10.toArray() : an.isArray(e10) || an.isArguments(e10) ? sX.call(e10) : an.values(e10) : [];
  }, an.map = function(e10, t10, r10) {
    if (ae && e10.map === ae) return e10.map(t10, r10);
    var n10 = [];
    return an.each(e10, function(e11) {
      n10.push(t10.call(r10, e11));
    }), n10;
  }, an.keys = function(e10) {
    var t10 = [];
    return null === e10 || an.each(e10, function(e11, r10) {
      t10[t10.length] = r10;
    }), t10;
  }, an.values = function(e10) {
    var t10 = [];
    return null === e10 || an.each(e10, function(e11) {
      t10[t10.length] = e11;
    }), t10;
  }, an.include = function(e10, t10) {
    var r10 = false;
    return null === e10 ? r10 : s7 && e10.indexOf === s7 ? -1 != e10.indexOf(t10) : (an.each(e10, function(e11) {
      if (r10 || (r10 = e11 === t10)) return ar;
    }), r10);
  }, an.includes = function(e10, t10) {
    return -1 !== e10.indexOf(t10);
  }, an.inherit = function(e10, t10) {
    return e10.prototype = new t10(), e10.prototype.constructor = e10, e10.superclass = t10.prototype, e10;
  }, an.isObject = function(e10) {
    return e10 === Object(e10) && !an.isArray(e10);
  }, an.isEmptyObject = function(e10) {
    if (an.isObject(e10)) {
      for (var t10 in e10) if (s0.call(e10, t10)) return false;
      return true;
    }
    return false;
  }, an.isUndefined = function(e10) {
    return void 0 === e10;
  }, an.isString = function(e10) {
    return "[object String]" == sQ.call(e10);
  }, an.isDate = function(e10) {
    return "[object Date]" == sQ.call(e10);
  }, an.isNumber = function(e10) {
    return "[object Number]" == sQ.call(e10);
  }, an.isElement = function(e10) {
    return !!(e10 && 1 === e10.nodeType);
  }, an.encodeDates = function(e10) {
    return an.each(e10, function(t10, r10) {
      an.isDate(t10) ? e10[r10] = an.formatDate(t10) : an.isObject(t10) && (e10[r10] = an.encodeDates(t10));
    }), e10;
  }, an.timestamp = function() {
    return Date.now = Date.now || function() {
      return +/* @__PURE__ */ new Date();
    }, Date.now();
  }, an.formatDate = function(e10) {
    function t10(e11) {
      return e11 < 10 ? "0" + e11 : e11;
    }
    return e10.getUTCFullYear() + "-" + t10(e10.getUTCMonth() + 1) + "-" + t10(e10.getUTCDate()) + "T" + t10(e10.getUTCHours()) + ":" + t10(e10.getUTCMinutes()) + ":" + t10(e10.getUTCSeconds());
  }, an.strip_empty_properties = function(e10) {
    var t10 = {};
    return an.each(e10, function(e11, r10) {
      an.isString(e11) && e11.length > 0 && (t10[r10] = e11);
    }), t10;
  }, an.truncate = function(e10, t10) {
    var r10;
    return "string" == typeof e10 ? r10 = e10.slice(0, t10) : an.isArray(e10) ? (r10 = [], an.each(e10, function(e11) {
      r10.push(an.truncate(e11, t10));
    })) : an.isObject(e10) ? (r10 = {}, an.each(e10, function(e11, n10) {
      r10[n10] = an.truncate(e11, t10);
    })) : r10 = e10, r10;
  }, an.JSONEncode = function(e10) {
    var t10 = function(e11) {
      var t11 = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, r11 = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" };
      return t11.lastIndex = 0, t11.test(e11) ? '"' + e11.replace(t11, function(e12) {
        var t12 = r11[e12];
        return "string" == typeof t12 ? t12 : "\\u" + ("0000" + e12.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + e11 + '"';
    }, r10 = function(e11, n10) {
      var i10 = "", o10 = 0, s10 = "", a10 = "", c10 = 0, u10 = i10, l2 = [], p2 = n10[e11];
      switch (p2 && "object" == typeof p2 && "function" == typeof p2.toJSON && (p2 = p2.toJSON(e11)), typeof p2) {
        case "string":
          return t10(p2);
        case "number":
          return isFinite(p2) ? String(p2) : "null";
        case "boolean":
        case "null":
          return String(p2);
        case "object":
          if (!p2) return "null";
          if (i10 += "    ", l2 = [], "[object Array]" === sQ.apply(p2)) {
            for (c10 = p2.length, o10 = 0; o10 < c10; o10 += 1) l2[o10] = r10(o10, p2) || "null";
            return a10 = 0 === l2.length ? "[]" : i10 ? "[\n" + i10 + l2.join(",\n" + i10) + "\n" + u10 + "]" : "[" + l2.join(",") + "]", i10 = u10, a10;
          }
          for (s10 in p2) s0.call(p2, s10) && (a10 = r10(s10, p2)) && l2.push(t10(s10) + (i10 ? ": " : ":") + a10);
          return a10 = 0 === l2.length ? "{}" : i10 ? "{" + l2.join(",") + u10 + "}" : "{" + l2.join(",") + "}", i10 = u10, a10;
      }
    };
    return r10("", { "": e10 });
  }, o = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: "\n", r: "\r", t: "	" }, s = function(e10) {
    var r10 = SyntaxError(e10);
    throw r10.at = t, r10.text = n, r10;
  }, a = function(e10) {
    return e10 && e10 !== r && s("Expected '" + e10 + "' instead of '" + r + "'"), r = n.charAt(t), t += 1, r;
  }, c = function() {
    var e10, t10 = "";
    for ("-" === r && (t10 = "-", a("-")); r >= "0" && r <= "9"; ) t10 += r, a();
    if ("." === r) for (t10 += "."; a() && r >= "0" && r <= "9"; ) t10 += r;
    if ("e" === r || "E" === r) for (t10 += r, a(), ("-" === r || "+" === r) && (t10 += r, a()); r >= "0" && r <= "9"; ) t10 += r, a();
    if (isFinite(e10 = +t10)) return e10;
    s("Bad number");
  }, u = function() {
    var e10, t10, n10, i10 = "";
    if ('"' === r) for (; a(); ) {
      if ('"' === r) return a(), i10;
      if ("\\" === r) if (a(), "u" === r) {
        for (t10 = 0, n10 = 0; t10 < 4 && isFinite(e10 = parseInt(a(), 16)); t10 += 1) n10 = 16 * n10 + e10;
        i10 += String.fromCharCode(n10);
      } else if ("string" == typeof o[r]) i10 += o[r];
      else break;
      else i10 += r;
    }
    s("Bad string");
  }, l = function() {
    for (; r && r <= " "; ) a();
  }, p = function() {
    switch (r) {
      case "t":
        return a("t"), a("r"), a("u"), a("e"), true;
      case "f":
        return a("f"), a("a"), a("l"), a("s"), a("e"), false;
      case "n":
        return a("n"), a("u"), a("l"), a("l"), null;
    }
    s('Unexpected "' + r + '"');
  }, h = function() {
    var e10 = [];
    if ("[" === r) {
      if (a("["), l(), "]" === r) return a("]"), e10;
      for (; r; ) {
        if (e10.push(i()), l(), "]" === r) return a("]"), e10;
        a(","), l();
      }
    }
    s("Bad array");
  }, d = function() {
    var e10, t10 = {};
    if ("{" === r) {
      if (a("{"), l(), "}" === r) return a("}"), t10;
      for (; r; ) {
        if (e10 = u(), l(), a(":"), Object.hasOwnProperty.call(t10, e10) && s('Duplicate key "' + e10 + '"'), t10[e10] = i(), l(), "}" === r) return a("}"), t10;
        a(","), l();
      }
    }
    s("Bad object");
  }, i = function() {
    switch (l(), r) {
      case "{":
        return d();
      case "[":
        return h();
      case '"':
        return u();
      case "-":
        return c();
      default:
        return r >= "0" && r <= "9" ? c() : p();
    }
  }, an.JSONDecode = function(e10) {
    var o10;
    return n = e10, t = 0, r = " ", o10 = i(), l(), r && s("Syntax error"), o10;
  }, an.base64Encode = function(e10) {
    var t10, r10, n10, i10, o10, s10, a10 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c10 = 0, u10 = 0, l2 = "", p2 = [];
    if (!e10) return e10;
    e10 = an.utf8Encode(e10);
    do
      t10 = e10.charCodeAt(c10++), r10 = (s10 = t10 << 16 | e10.charCodeAt(c10++) << 8 | e10.charCodeAt(c10++)) >> 18 & 63, n10 = s10 >> 12 & 63, i10 = s10 >> 6 & 63, o10 = 63 & s10, p2[u10++] = a10.charAt(r10) + a10.charAt(n10) + a10.charAt(i10) + a10.charAt(o10);
    while (c10 < e10.length);
    switch (l2 = p2.join(""), e10.length % 3) {
      case 1:
        l2 = l2.slice(0, -2) + "==";
        break;
      case 2:
        l2 = l2.slice(0, -1) + "=";
    }
    return l2;
  }, an.utf8Encode = function(e10) {
    e10 = (e10 + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    var t10, r10, n10, i10 = "", o10 = 0;
    for (t10 = r10 = 0, o10 = e10.length, n10 = 0; n10 < o10; n10++) {
      var s10 = e10.charCodeAt(n10), a10 = null;
      s10 < 128 ? r10++ : a10 = s10 > 127 && s10 < 2048 ? String.fromCharCode(s10 >> 6 | 192, 63 & s10 | 128) : String.fromCharCode(s10 >> 12 | 224, s10 >> 6 & 63 | 128, 63 & s10 | 128), null !== a10 && (r10 > t10 && (i10 += e10.substring(t10, r10)), i10 += a10, t10 = r10 = n10 + 1);
    }
    return r10 > t10 && (i10 += e10.substring(t10, e10.length)), i10;
  }, an.UUID = function() {
    try {
      return se.crypto.randomUUID();
    } catch (r10) {
      for (var e10 = Array(36), t10 = 0; t10 < 36; t10++) e10[t10] = Math.floor(16 * Math.random());
      return e10[14] = 4, e10[19] = e10[19] &= -5, e10[19] = e10[19] |= 8, e10[8] = e10[13] = e10[18] = e10[23] = "-", an.map(e10, function(e11) {
        return e11.toString(16);
      }).join("");
    }
  };
  var au = ["ahrefsbot", "ahrefssiteaudit", "amazonbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandex", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
  an.isBlockedUA = function(e10) {
    var t10;
    for (e10 = e10.toLowerCase(), t10 = 0; t10 < au.length; t10++) if (-1 !== e10.indexOf(au[t10])) return true;
    return false;
  }, an.HTTPBuildQuery = function(e10, t10) {
    var r10, n10, i10 = [];
    return an.isUndefined(t10) && (t10 = "&"), an.each(e10, function(e11, t11) {
      r10 = encodeURIComponent(e11.toString()), n10 = encodeURIComponent(t11), i10[i10.length] = n10 + "=" + r10;
    }), i10.join(t10);
  }, an.getQueryParam = function(e10, t10) {
    var r10 = RegExp("[\\?&]" + (t10 = t10.replace(/[[]/g, "\\[").replace(/[\]]/g, "\\]")) + "=([^&#]*)").exec(e10);
    if (null === r10 || r10 && "string" != typeof r10[1] && r10[1].length) return "";
    var n10 = r10[1];
    try {
      n10 = decodeURIComponent(n10);
    } catch (e11) {
      ai.error("Skipping decoding for malformed query param: " + n10);
    }
    return n10.replace(/\+/g, " ");
  }, an.cookie = { get: function(e10) {
    for (var t10 = e10 + "=", r10 = s3.cookie.split(";"), n10 = 0; n10 < r10.length; n10++) {
      for (var i10 = r10[n10]; " " == i10.charAt(0); ) i10 = i10.substring(1, i10.length);
      if (0 === i10.indexOf(t10)) return decodeURIComponent(i10.substring(t10.length, i10.length));
    }
    return null;
  }, parse: function(e10) {
    var t10;
    try {
      t10 = an.JSONDecode(an.cookie.get(e10)) || {};
    } catch (e11) {
    }
    return t10;
  }, set_seconds: function(e10, t10, r10, n10, i10, o10, s10) {
    var a10 = "", c10 = "", u10 = "";
    if (s10) a10 = "; domain=" + s10;
    else if (n10) {
      var l2 = aS(s3.location.hostname);
      a10 = l2 ? "; domain=." + l2 : "";
    }
    if (r10) {
      var p2 = /* @__PURE__ */ new Date();
      p2.setTime(p2.getTime() + 1e3 * r10), c10 = "; expires=" + p2.toGMTString();
    }
    o10 && (i10 = true, u10 = "; SameSite=None"), i10 && (u10 += "; secure"), s3.cookie = e10 + "=" + encodeURIComponent(t10) + c10 + "; path=/" + a10 + u10;
  }, set: function(e10, t10, r10, n10, i10, o10, s10) {
    var a10 = "", c10 = "", u10 = "";
    if (s10) a10 = "; domain=" + s10;
    else if (n10) {
      var l2 = aS(s3.location.hostname);
      a10 = l2 ? "; domain=." + l2 : "";
    }
    if (r10) {
      var p2 = /* @__PURE__ */ new Date();
      p2.setTime(p2.getTime() + 24 * r10 * 36e5), c10 = "; expires=" + p2.toGMTString();
    }
    o10 && (i10 = true, u10 = "; SameSite=None"), i10 && (u10 += "; secure");
    var h2 = e10 + "=" + encodeURIComponent(t10) + c10 + "; path=/" + a10 + u10;
    return s3.cookie = h2, h2;
  }, remove: function(e10, t10, r10) {
    an.cookie.set(e10, "", -1, t10, false, false, r10);
  } };
  var al = function(e10) {
    var t10 = true;
    try {
      var r10 = "__mplss_" + ab(8);
      e10.setItem(r10, "xyz"), "xyz" !== e10.getItem(r10) && (t10 = false), e10.removeItem(r10);
    } catch (e11) {
      t10 = false;
    }
    return t10;
  }, ap = null, ah = function(e10, t10) {
    return null === ap || t10 ? ap = al(e10) : ap;
  }, ad = null;
  function af(e10, t10, r10) {
    var n10 = function(e11) {
      ai.error(t10 + " error: " + e11);
    };
    return { is_supported: function(n11) {
      var i10 = r10(e10, n11);
      return i10 || ai.error(t10 + " unsupported"), i10;
    }, error: n10, get: function(t11) {
      try {
        return e10.getItem(t11);
      } catch (e11) {
        n10(e11);
      }
      return null;
    }, parse: function(t11) {
      try {
        return an.JSONDecode(e10.getItem(t11)) || {};
      } catch (e11) {
      }
      return null;
    }, set: function(t11, r11) {
      try {
        e10.setItem(t11, r11);
      } catch (e11) {
        n10(e11);
      }
    }, remove: function(t11) {
      try {
        e10.removeItem(t11);
      } catch (e11) {
        n10(e11);
      }
    } };
  }
  var ag = function() {
    try {
      return se.localStorage;
    } catch (e10) {
      return null;
    }
  };
  an.localStorage = af(ag(), "localStorage", ah), an.sessionStorage = af((function() {
    try {
      return se.sessionStorage;
    } catch (e10) {
      return null;
    }
  })(), "sessionStorage", function(e10, t10) {
    return null === ad || t10 ? ad = al(e10) : ad;
  }), an.register_event = (function() {
    function e10(t10) {
      return t10 && (t10.preventDefault = e10.preventDefault, t10.stopPropagation = e10.stopPropagation), t10;
    }
    return e10.preventDefault = function() {
      this.returnValue = false;
    }, e10.stopPropagation = function() {
      this.cancelBubble = true;
    }, function(t10, r10, n10, i10, o10) {
      if (!t10) return void ai.error("No valid element provided to register_event");
      if (t10.addEventListener && !i10) t10.addEventListener(r10, n10, !!o10);
      else {
        var s10, a10, c10, u10 = "on" + r10, l2 = t10[u10];
        t10[u10] = (s10 = t10, a10 = n10, c10 = l2, function(t11) {
          if (t11 = t11 || e10(se.event)) {
            var r11, n11, i11 = true;
            return an.isFunction(c10) && (r11 = c10(t11)), n11 = a10.call(s10, t11), (false === r11 || false === n11) && (i11 = false), i11;
          }
        });
      }
    };
  })();
  var am = RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
  an.dom_query = /* @__PURE__ */ (function() {
    function e10(e11) {
      return e11.all ? e11.all : e11.getElementsByTagName("*");
    }
    var t10 = /[\t\r\n]/g;
    function r10(r11) {
      if (!s3.getElementsByTagName) return [];
      var n10 = r11.split(" "), i10 = [s3];
      for (f2 = 0; f2 < n10.length; f2++) {
        if ((l2 = n10[f2].replace(/^\s+/, "").replace(/\s+$/, "")).indexOf("#") > -1) {
          b2 = (p2 = l2.split("#"))[0];
          var o10 = p2[1], s10 = s3.getElementById(o10);
          if (!s10 || b2 && s10.nodeName.toLowerCase() != b2) return [];
          i10 = [s10];
          continue;
        }
        if (l2.indexOf(".") > -1) {
          b2 = (p2 = l2.split("."))[0];
          var a10, c10 = p2[1];
          for (b2 || (b2 = "*"), h2 = [], d2 = 0, g2 = 0; g2 < i10.length; g2++) for (v2 = "*" == b2 ? e10(i10[g2]) : i10[g2].getElementsByTagName(b2), m2 = 0; m2 < v2.length; m2++) h2[d2++] = v2[m2];
          for (g2 = 0, i10 = [], y2 = 0; g2 < h2.length; g2++) h2[g2].className && an.isString(h2[g2].className) && (a10 = h2[g2], (" " + a10.className + " ").replace(t10, " ").indexOf(" " + c10 + " ") >= 0) && (i10[y2++] = h2[g2]);
          continue;
        }
        var u10 = l2.match(am);
        if (u10) {
          var l2, p2, h2, d2, f2, g2, m2, v2, y2, _2, b2 = u10[1], w2 = u10[2], k2 = u10[3], x2 = u10[4];
          for (b2 || (b2 = "*"), h2 = [], d2 = 0, g2 = 0; g2 < i10.length; g2++) for (v2 = "*" == b2 ? e10(i10[g2]) : i10[g2].getElementsByTagName(b2), m2 = 0; m2 < v2.length; m2++) h2[d2++] = v2[m2];
          switch (i10 = [], y2 = 0, k2) {
            case "=":
              _2 = function(e11) {
                return e11.getAttribute(w2) == x2;
              };
              break;
            case "~":
              _2 = function(e11) {
                return e11.getAttribute(w2).match(RegExp("\\b" + x2 + "\\b"));
              };
              break;
            case "|":
              _2 = function(e11) {
                return e11.getAttribute(w2).match(RegExp("^" + x2 + "-?"));
              };
              break;
            case "^":
              _2 = function(e11) {
                return 0 === e11.getAttribute(w2).indexOf(x2);
              };
              break;
            case "$":
              _2 = function(e11) {
                return e11.getAttribute(w2).lastIndexOf(x2) == e11.getAttribute(w2).length - x2.length;
              };
              break;
            case "*":
              _2 = function(e11) {
                return e11.getAttribute(w2).indexOf(x2) > -1;
              };
              break;
            default:
              _2 = function(e11) {
                return e11.getAttribute(w2);
              };
          }
          for (g2 = 0, i10 = [], y2 = 0; g2 < h2.length; g2++) _2(h2[g2]) && (i10[y2++] = h2[g2]);
          continue;
        }
        for (b2 = l2, h2 = [], d2 = 0, g2 = 0; g2 < i10.length; g2++) for (v2 = i10[g2].getElementsByTagName(b2), m2 = 0; m2 < v2.length; m2++) h2[d2++] = v2[m2];
        i10 = h2;
      }
      return i10;
    }
    return function(e11) {
      return an.isElement(e11) ? [e11] : an.isObject(e11) && !an.isUndefined(e11.length) ? e11 : r10.call(this, e11);
    };
  })();
  var av = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id", "utm_source_platform", "utm_campaign_id", "utm_creative_format", "utm_marketing_tactic"], ay = ["dclid", "fbclid", "gclid", "ko_click_id", "li_fat_id", "msclkid", "sccid", "ttclid", "twclid", "wbraid"];
  an.info = { campaignParams: function(e10) {
    var t10 = "", r10 = {};
    return an.each(av, function(n10) {
      (t10 = an.getQueryParam(s3.URL, n10)).length ? r10[n10] = t10 : void 0 !== e10 && (r10[n10] = e10);
    }), r10;
  }, clickParams: function() {
    var e10 = "", t10 = {};
    return an.each(ay, function(r10) {
      (e10 = an.getQueryParam(s3.URL, r10)).length && (t10[r10] = e10);
    }), t10;
  }, marketingParams: function() {
    return an.extend(an.info.campaignParams(), an.info.clickParams());
  }, searchEngine: function(e10) {
    return 0 === e10.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e10.search("https?://(.*)bing.com") ? "bing" : 0 === e10.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e10.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null;
  }, searchInfo: function(e10) {
    var t10 = an.info.searchEngine(e10), r10 = {};
    if (null !== t10) {
      r10.$search_engine = t10;
      var n10 = an.getQueryParam(e10, "yahoo" != t10 ? "q" : "p");
      n10.length && (r10.mp_keyword = n10);
    }
    return r10;
  }, browser: function(e10, t10, r10) {
    if (t10 = t10 || "", r10 || an.includes(e10, " OPR/")) return an.includes(e10, "Mini") ? "Opera Mini" : "Opera";
    if (/(BlackBerry|PlayBook|BB10)/i.test(e10)) return "BlackBerry";
    if (an.includes(e10, "IEMobile") || an.includes(e10, "WPDesktop")) return "Internet Explorer Mobile";
    if (an.includes(e10, "SamsungBrowser/")) return "Samsung Internet";
    if (an.includes(e10, "Edge") || an.includes(e10, "Edg/")) return "Microsoft Edge";
    else if (an.includes(e10, "FBIOS")) return "Facebook Mobile";
    else if (an.includes(e10, "Whale/")) return "Whale Browser";
    else if (an.includes(e10, "Chrome")) return "Chrome";
    else if (an.includes(e10, "CriOS")) return "Chrome iOS";
    else if (an.includes(e10, "UCWEB") || an.includes(e10, "UCBrowser")) return "UC Browser";
    else if (an.includes(e10, "FxiOS")) return "Firefox iOS";
    else if (an.includes(t10, "Apple")) return an.includes(e10, "Mobile") ? "Mobile Safari" : "Safari";
    else if (an.includes(e10, "Android")) return "Android Mobile";
    else if (an.includes(e10, "Konqueror")) return "Konqueror";
    else if (an.includes(e10, "Firefox")) return "Firefox";
    else if (an.includes(e10, "MSIE") || an.includes(e10, "Trident/")) return "Internet Explorer";
    else if (an.includes(e10, "Gecko")) return "Mozilla";
    else return "";
  }, browserVersion: function(e10, t10, r10) {
    var n10 = { "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/, "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/, Chrome: /Chrome\/(\d+(\.\d+)?)/, "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/, "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/, Safari: /Version\/(\d+(\.\d+)?)/, "Mobile Safari": /Version\/(\d+(\.\d+)?)/, Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/, Firefox: /Firefox\/(\d+(\.\d+)?)/, "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/, Konqueror: /Konqueror:(\d+(\.\d+)?)/, BlackBerry: /BlackBerry (\d+(\.\d+)?)/, "Android Mobile": /android\s(\d+(\.\d+)?)/, "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/, "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/, Mozilla: /rv:(\d+(\.\d+)?)/, "Whale Browser": /Whale\/(\d+(\.\d+)?)/ }[an.info.browser(e10, t10, r10)];
    if (void 0 === n10) return null;
    var i10 = e10.match(n10);
    return i10 ? parseFloat(i10[i10.length - 2]) : null;
  }, os: function() {
    if (/Windows/i.test(s6)) return /Phone/.test(s6) || /WPDesktop/.test(s6) ? "Windows Phone" : "Windows";
    if (/(iPhone|iPad|iPod)/.test(s6)) return "iOS";
    if (/Android/.test(s6)) return "Android";
    if (/(BlackBerry|PlayBook|BB10)/i.test(s6)) return "BlackBerry";
    if (/Mac/i.test(s6)) return "Mac OS X";
    else if (/Linux/.test(s6)) return "Linux";
    else if (/CrOS/.test(s6)) return "Chrome OS";
    else return "";
  }, device: function(e10) {
    if (/Windows Phone/i.test(e10) || /WPDesktop/.test(e10)) return "Windows Phone";
    if (/iPad/.test(e10)) return "iPad";
    if (/iPod/.test(e10)) return "iPod Touch";
    if (/iPhone/.test(e10)) return "iPhone";
    if (/(BlackBerry|PlayBook|BB10)/i.test(e10)) return "BlackBerry";
    else if (/Android/.test(e10)) return "Android";
    else return "";
  }, referringDomain: function(e10) {
    var t10 = e10.split("/");
    return t10.length >= 3 ? t10[2] : "";
  }, currentUrl: function() {
    return se.location.href;
  }, properties: function(e10) {
    return "object" != typeof e10 && (e10 = {}), an.extend(an.strip_empty_properties({ $os: an.info.os(), $browser: an.info.browser(s6, s2.vendor, s5), $referrer: s3.referrer, $referring_domain: an.info.referringDomain(s3.referrer), $device: an.info.device(s6) }), { $current_url: an.info.currentUrl(), $browser_version: an.info.browserVersion(s6, s2.vendor, s5), $screen_height: s9.height, $screen_width: s9.width, mp_lib: "web", $lib_version: x.LIB_VERSION, $insert_id: ab(), time: an.timestamp() / 1e3 }, an.strip_empty_properties(e10));
  }, people_properties: function() {
    return an.extend(an.strip_empty_properties({ $os: an.info.os(), $browser: an.info.browser(s6, s2.vendor, s5) }), { $browser_version: an.info.browserVersion(s6, s2.vendor, s5) });
  }, mpPageViewProperties: function() {
    return an.strip_empty_properties({ current_page_title: s3.title, current_domain: se.location.hostname, current_url_path: se.location.pathname, current_url_protocol: se.location.protocol, current_url_search: se.location.search });
  } };
  var a_ = function(e10, t10) {
    var r10 = null, n10 = [];
    return function(i10) {
      var o10 = this;
      return n10.push(i10), r10 || (r10 = new g(function(i11) {
        setTimeout(function() {
          var t11 = e10.apply(o10, [n10]);
          r10 = null, n10 = [], i11(t11);
        }, t10);
      })), r10;
    };
  }, ab = function(e10) {
    var t10 = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    return e10 ? t10.substring(0, e10) : t10;
  }, aw = function() {
    return "00-" + an.UUID().replace(/-/g, "") + "-" + an.UUID().replace(/-/g, "").substring(0, 16) + "-01";
  }, ak = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i, ax = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i, aS = function(e10) {
    var t10 = ax, r10 = e10.split("."), n10 = r10[r10.length - 1];
    (n10.length > 4 || "com" === n10 || "org" === n10) && (t10 = ak);
    var i10 = e10.match(t10);
    return i10 ? i10[0] : "";
  }, aC = function() {
    var e10 = se.navigator.onLine;
    return an.isUndefined(e10) || e10;
  }, aM = function() {
  }, aI = function(e10, t10) {
    for (var r10 = false, n10 = 0; n10 < t10.length; n10++) if (e10.match(t10[n10])) {
      r10 = true;
      break;
    }
    return r10;
  }, aO = null, aE = null;
  "u" > typeof JSON && (aO = JSON.stringify, aE = JSON.parse), aO = aO || an.JSONEncode, aE = aE || an.JSONDecode;
  var aR = function(e10, t10, r10) {
    if (!se.CompressionStream) return false;
    var n10 = an.info.browser(e10, t10, r10), i10 = an.info.browserVersion(e10, t10, r10);
    return "Safari" !== n10 && "Mobile Safari" !== n10 || !(i10 >= 16.4) || !(i10 < 16.6);
  };
  an.info = an.info, an.info.browser = an.info.browser, an.info.browserVersion = an.info.browserVersion, an.info.device = an.info.device, an.info.properties = an.info.properties, an.isBlockedUA = an.isBlockedUA, an.isEmptyObject = an.isEmptyObject, an.isObject = an.isObject, an.JSONDecode = an.JSONDecode, an.JSONEncode = an.JSONEncode, an.toArray = an.toArray, an.NPO = sH;
  var aA = function(e10, t10, r10) {
    this.dbName = e10, this.storeName = t10, this.version = r10.version, this.storeNamesInDb = r10.storeNames, this.dbPromise = null;
  };
  aA.prototype._openDb = function() {
    var e10 = this.dbName, t10 = this.version, r10 = this.storeNamesInDb;
    return new g(function(n10, i10) {
      var o10 = se.indexedDB.open(e10, t10);
      o10.onerror = function() {
        i10(o10.error);
      }, o10.onsuccess = function() {
        n10(o10.result);
      }, o10.onupgradeneeded = function(e11) {
        var t11 = e11.target.result;
        r10.forEach(function(e12) {
          t11.objectStoreNames.contains(e12) || t11.createObjectStore(e12);
        });
      };
    });
  }, aA.prototype.init = function() {
    return se.indexedDB ? (this.dbPromise || (this.dbPromise = this._openDb()), this.dbPromise.then(function(e10) {
      return e10 instanceof se.IDBDatabase ? g.resolve() : g.reject(e10);
    })) : g.reject("indexedDB is not supported in this browser");
  }, aA.prototype.isInitialized = function() {
    return !!this.dbPromise;
  }, aA.prototype.makeTransaction = function(e10, t10) {
    var r10 = this.storeName, n10 = function(n11) {
      return new g(function(i10, o10) {
        var s10 = n11.transaction(r10, e10);
        s10.oncomplete = function() {
          i10(s10);
        }, s10.onabort = s10.onerror = function() {
          o10(s10.error);
        }, t10(s10.objectStore(r10));
      });
    };
    return this.dbPromise.then(n10).catch((function(e11) {
      return e11 && "InvalidStateError" === e11.name ? (this.dbPromise = this._openDb(), this.dbPromise.then(n10)) : g.reject(e11);
    }).bind(this));
  }, aA.prototype.setItem = function(e10, t10) {
    return this.makeTransaction("readwrite", function(r10) {
      r10.put(t10, e10);
    });
  }, aA.prototype.getItem = function(e10) {
    var t10;
    return this.makeTransaction("readonly", function(r10) {
      t10 = r10.get(e10);
    }).then(function() {
      return t10.result;
    });
  }, aA.prototype.removeItem = function(e10) {
    return this.makeTransaction("readwrite", function(t10) {
      t10.delete(e10);
    });
  }, aA.prototype.getAll = function() {
    var e10;
    return this.makeTransaction("readonly", function(t10) {
      e10 = t10.getAll();
    }).then(function() {
      return e10.result;
    });
  };
  var aT = "mixpanelBrowserDb", aP = "mixpanelRecordingEvents", aD = "mixpanelRecordingRegistry", aL = { version: 1, storeNames: [aP, aD] };
  function aF(e10, t10) {
    aH(true, e10, t10);
  }
  function aj(e10, t10) {
    aH(false, e10, t10);
  }
  function aN(e10, t10) {
    return "1" === aG(e10, t10);
  }
  function aU(e10, t10) {
    if ((function(e11) {
      if (e11 && e11.ignoreDnt) return false;
      var t11 = e11 && e11.window || se, r11 = t11.navigator || {}, n10 = false;
      return an.each([r11.doNotTrack, r11.msDoNotTrack, t11.doNotTrack], function(e12) {
        an.includes([true, 1, "1", "yes"], e12) && (n10 = true);
      }), n10;
    })(t10)) return ai.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'), true;
    var r10 = "0" === aG(e10, t10);
    return r10 && ai.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."), r10;
  }
  function aB(e10) {
    return aK(e10, function(e11) {
      return this.get_config(e11);
    });
  }
  function az(e10) {
    return aK(e10, function(e11) {
      return this._get_config(e11);
    });
  }
  function aq(e10) {
    return aK(e10, function(e11) {
      return this._get_config(e11);
    });
  }
  function aW(e10, t10) {
    aV(t10 = t10 || {}).remove(a$(e10, t10), !!t10.crossSubdomainCookie, t10.cookieDomain);
  }
  function aV(e10) {
    return "localStorage" === (e10 = e10 || {}).persistenceType ? an.localStorage : an.cookie;
  }
  function a$(e10, t10) {
    return ((t10 = t10 || {}).persistencePrefix || "__mp_opt_in_out_") + e10;
  }
  function aG(e10, t10) {
    return aV(t10).get(a$(e10, t10));
  }
  function aH(e10, t10, r10) {
    an.isString(t10) && t10.length ? (aV(r10 = r10 || {}).set(a$(t10, r10), +!!e10, an.isNumber(r10.cookieExpiration) ? r10.cookieExpiration : null, !!r10.crossSubdomainCookie, !!r10.secureCookie, !!r10.crossSiteCookie, r10.cookieDomain), r10.track && e10 && r10.track(r10.trackEventName || "$opt_in", r10.trackProperties, { send_immediately: true })) : ai.error("gdpr." + (e10 ? "optIn" : "optOut") + " called with an invalid token");
  }
  function aK(e10, t10) {
    return function() {
      var r10 = false;
      try {
        var n10 = t10.call(this, "token"), i10 = t10.call(this, "ignore_dnt"), o10 = t10.call(this, "opt_out_tracking_persistence_type"), s10 = t10.call(this, "opt_out_tracking_cookie_prefix"), a10 = t10.call(this, "window");
        n10 && (r10 = aU(n10, { ignoreDnt: i10, persistenceType: o10, persistencePrefix: s10, window: a10 }));
      } catch (e11) {
        ai.error("Unexpected error when checking tracking opt-out status: " + e11);
      }
      if (!r10) return e10.apply(this, arguments);
      var c10 = arguments[arguments.length - 1];
      "function" == typeof c10 && c10(0);
    };
  }
  var aY = as("lock"), aJ = function(e10, t10) {
    t10 = t10 || {}, this.storageKey = e10, this.storage = t10.storage || ag(), this.pollIntervalMS = t10.pollIntervalMS || 100, this.timeoutMS = t10.timeoutMS || 2e3, this.promiseImpl = t10.promiseImpl || g;
  };
  aJ.prototype.withLock = function(e10, t10) {
    return new this.promiseImpl(an.bind(function(r10, n10) {
      var i10 = t10 || (/* @__PURE__ */ new Date()).getTime() + "|" + Math.random(), o10 = (/* @__PURE__ */ new Date()).getTime(), s10 = this.storageKey, a10 = this.pollIntervalMS, c10 = this.timeoutMS, u10 = this.storage, l2 = s10 + ":X", p2 = s10 + ":Y", h2 = s10 + ":Z", d2 = function(e11) {
        if ((/* @__PURE__ */ new Date()).getTime() - o10 > c10) {
          aY.error("Timeout waiting for mutex on " + s10 + "; clearing lock. [" + i10 + "]"), u10.removeItem(h2), u10.removeItem(p2), m2();
          return;
        }
        setTimeout(function() {
          try {
            e11();
          } catch (e12) {
            n10(e12);
          }
        }, a10 * (Math.random() + 0.1));
      }, f2 = function(e11, t11) {
        e11() ? t11() : d2(function() {
          f2(e11, t11);
        });
      }, g2 = function() {
        var e11 = u10.getItem(p2);
        return (!e11 || e11 === i10) && (u10.setItem(p2, i10), u10.getItem(p2) === i10 || (ah(u10, true) || n10(Error("localStorage support dropped while acquiring lock")), false));
      }, m2 = function() {
        u10.setItem(l2, i10), f2(g2, function() {
          u10.getItem(l2) === i10 ? v2() : d2(function() {
            u10.getItem(p2) !== i10 ? m2() : f2(function() {
              return !u10.getItem(h2);
            }, v2);
          });
        });
      }, v2 = function() {
        u10.setItem(h2, "1");
        var t11 = function() {
          u10.removeItem(h2), u10.getItem(p2) === i10 && u10.removeItem(p2), u10.getItem(l2) === i10 && u10.removeItem(l2);
        };
        e10().then(function(e11) {
          t11(), r10(e11);
        }).catch(function(e11) {
          t11(), n10(e11);
        });
      };
      try {
        if (ah(u10, true)) m2();
        else throw Error("localStorage support check failed");
      } catch (e11) {
        n10(e11);
      }
    }, this));
  };
  var aZ = function(e10) {
    this.storage = e10 || ag();
  };
  aZ.prototype.init = function() {
    return this.storage ? g.resolve() : g.reject(Error("localStorage is not available"));
  }, aZ.prototype.isInitialized = function() {
    return true;
  }, aZ.prototype.setItem = function(e10, t10) {
    return new g(an.bind(function(r10, n10) {
      try {
        this.storage.setItem(e10, aO(t10));
      } catch (e11) {
        n10(e11);
      }
      r10();
    }, this));
  }, aZ.prototype.getItem = function(e10) {
    return new g(an.bind(function(t10, r10) {
      var n10;
      try {
        n10 = aE(this.storage.getItem(e10));
      } catch (e11) {
        r10(e11);
      }
      t10(n10);
    }, this));
  }, aZ.prototype.removeItem = function(e10) {
    return new g(an.bind(function(t10, r10) {
      try {
        this.storage.removeItem(e10);
      } catch (e11) {
        r10(e11);
      }
      t10();
    }, this));
  };
  var aX = as("batch"), aQ = function(e10, t10) {
    t10 = t10 || {}, this.storageKey = e10, this.usePersistence = t10.usePersistence, this.usePersistence && (this.queueStorage = t10.queueStorage || new aZ(), this.lock = new aJ(e10, { storage: t10.sharedLockStorage, timeoutMS: t10.sharedLockTimeoutMS })), this.reportError = t10.errorReporter || an.bind(aX.error, aX), this.pid = t10.pid || null, this.memQueue = [], this.initialized = false, t10.enqueueThrottleMs ? this.enqueuePersisted = a_(an.bind(this._enqueuePersisted, this), t10.enqueueThrottleMs) : this.enqueuePersisted = an.bind(function(e11) {
      return this._enqueuePersisted([e11]);
    }, this);
  };
  aQ.prototype.ensureInit = function() {
    return this.initialized || !this.usePersistence ? g.resolve() : this.queueStorage.init().then(an.bind(function() {
      this.initialized = true;
    }, this)).catch(an.bind(function(e10) {
      this.reportError("Error initializing queue persistence. Disabling persistence", e10), this.initialized = true, this.usePersistence = false;
    }, this));
  }, aQ.prototype.enqueue = function(e10, t10) {
    var r10 = { id: ab(), flushAfter: (/* @__PURE__ */ new Date()).getTime() + 2 * t10, payload: e10 };
    return this.usePersistence ? this.enqueuePersisted(r10) : (this.memQueue.push(r10), g.resolve(true));
  }, aQ.prototype._enqueuePersisted = function(e10) {
    var t10 = an.bind(function() {
      return this.ensureInit().then(an.bind(function() {
        return this.readFromStorage();
      }, this)).then(an.bind(function(t11) {
        return this.saveToStorage(t11.concat(e10));
      }, this)).then(an.bind(function(t11) {
        return t11 && (this.memQueue = this.memQueue.concat(e10)), t11;
      }, this)).catch(an.bind(function(t11) {
        return this.reportError("Error enqueueing items", t11, e10), false;
      }, this));
    }, this);
    return this.lock.withLock(t10, this.pid).catch(an.bind(function(e11) {
      return this.reportError("Error acquiring storage lock", e11), false;
    }, this));
  }, aQ.prototype.fillBatch = function(e10) {
    var t10 = this.memQueue.slice(0, e10);
    return this.usePersistence && t10.length < e10 ? this.ensureInit().then(an.bind(function() {
      return this.readFromStorage();
    }, this)).then(an.bind(function(r10) {
      if (r10.length) {
        var n10 = {};
        an.each(t10, function(e11) {
          n10[e11.id] = true;
        });
        for (var i10 = 0; i10 < r10.length; i10++) {
          var o10 = r10[i10];
          if ((/* @__PURE__ */ new Date()).getTime() > o10.flushAfter && !n10[o10.id] && (o10.orphaned = true, t10.push(o10), t10.length >= e10)) break;
        }
      }
      return t10;
    }, this)) : g.resolve(t10);
  };
  var a0 = function(e10, t10) {
    var r10 = [];
    return an.each(e10, function(e11) {
      e11.id && !t10[e11.id] && r10.push(e11);
    }), r10;
  };
  aQ.prototype.removeItemsByID = function(e10) {
    var t10 = {};
    if (an.each(e10, function(e11) {
      t10[e11] = true;
    }), this.memQueue = a0(this.memQueue, t10), !this.usePersistence) return g.resolve(true);
    var r10 = an.bind(function() {
      return this.ensureInit().then(an.bind(function() {
        return this.readFromStorage();
      }, this)).then(an.bind(function(e11) {
        return e11 = a0(e11, t10), this.saveToStorage(e11);
      }, this)).then(an.bind(function() {
        return this.readFromStorage();
      }, this)).then(an.bind(function(e11) {
        for (var r11 = 0; r11 < e11.length; r11++) {
          var n10 = e11[r11];
          if (n10.id && t10[n10.id]) throw Error("Item not removed from storage");
        }
        return true;
      }, this)).catch(an.bind(function(t11) {
        return this.reportError("Error removing items", t11, e10), false;
      }, this));
    }, this);
    return this.lock.withLock(r10, this.pid).catch(an.bind(function(e11) {
      return this.reportError("Error acquiring storage lock", e11), !ah(this.lock.storage, true) && r10().then(an.bind(function(e12) {
        return e12 || this.queueStorage.removeItem(this.storageKey).then(function() {
          return e12;
        });
      }, this)).catch(an.bind(function(e12) {
        return this.reportError("Error clearing queue", e12), false;
      }, this));
    }, this));
  };
  var a1 = function(e10, t10) {
    var r10 = [];
    return an.each(e10, function(e11) {
      var n10 = e11.id;
      if (n10 in t10) {
        var i10 = t10[n10];
        null !== i10 && (e11.payload = i10, r10.push(e11));
      } else r10.push(e11);
    }), r10;
  };
  aQ.prototype.updatePayloads = function(e10) {
    return (this.memQueue = a1(this.memQueue, e10), this.usePersistence) ? this.lock.withLock(an.bind(function() {
      return this.ensureInit().then(an.bind(function() {
        return this.readFromStorage();
      }, this)).then(an.bind(function(t10) {
        return t10 = a1(t10, e10), this.saveToStorage(t10);
      }, this)).catch(an.bind(function(t10) {
        return this.reportError("Error updating items", e10, t10), false;
      }, this));
    }, this), this.pid).catch(an.bind(function(e11) {
      return this.reportError("Error acquiring storage lock", e11), false;
    }, this)) : g.resolve(true);
  }, aQ.prototype.readFromStorage = function() {
    return this.ensureInit().then(an.bind(function() {
      return this.queueStorage.getItem(this.storageKey);
    }, this)).then(an.bind(function(e10) {
      return e10 && !an.isArray(e10) && (this.reportError("Invalid storage entry:", e10), e10 = null), e10 || [];
    }, this)).catch(an.bind(function(e10) {
      return this.reportError("Error retrieving queue", e10), [];
    }, this));
  }, aQ.prototype.saveToStorage = function(e10) {
    return this.ensureInit().then(an.bind(function() {
      return this.queueStorage.setItem(this.storageKey, e10);
    }, this)).then(function() {
      return true;
    }).catch(an.bind(function(e11) {
      return this.reportError("Error saving queue", e11), false;
    }, this));
  }, aQ.prototype.clear = function() {
    return (this.memQueue = [], this.usePersistence) ? this.ensureInit().then(an.bind(function() {
      return this.queueStorage.removeItem(this.storageKey);
    }, this)) : g.resolve();
  };
  var a2 = as("batch"), a3 = function(e10, t10) {
    this.errorReporter = t10.errorReporter, this.queue = new aQ(e10, { errorReporter: an.bind(this.reportError, this), queueStorage: t10.queueStorage, sharedLockStorage: t10.sharedLockStorage, sharedLockTimeoutMS: t10.sharedLockTimeoutMS, usePersistence: t10.usePersistence, enqueueThrottleMs: t10.enqueueThrottleMs }), this.libConfig = t10.libConfig, this.sendRequest = t10.sendRequestFunc, this.beforeSendHook = t10.beforeSendHook, this.stopAllBatching = t10.stopAllBatchingFunc, this.batchSize = this.libConfig.batch_size, this.flushInterval = this.libConfig.batch_flush_interval_ms, this.stopped = !this.libConfig.batch_autostart, this.consecutiveRemovalFailures = 0, this.itemIdsSentSuccessfully = {}, this.flushOnlyOnInterval = t10.flushOnlyOnInterval || false, this._flushPromise = null;
  };
  a3.prototype.enqueue = function(e10) {
    return this.queue.enqueue(e10, this.flushInterval);
  }, a3.prototype.start = function() {
    return this.stopped = false, this.consecutiveRemovalFailures = 0, this.flush();
  }, a3.prototype.stop = function() {
    this.stopped = true, this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null);
  }, a3.prototype.clear = function() {
    return this.queue.clear();
  }, a3.prototype.resetBatchSize = function() {
    this.batchSize = this.libConfig.batch_size;
  }, a3.prototype.resetFlush = function() {
    this.scheduleFlush(this.libConfig.batch_flush_interval_ms);
  }, a3.prototype.scheduleFlush = function(e10) {
    this.flushInterval = e10, this.stopped || (this.timeoutID = setTimeout(an.bind(function() {
      this.stopped || (this._flushPromise = this.flush());
    }, this), this.flushInterval));
  }, a3.prototype.sendRequestPromise = function(e10, t10) {
    return new g(an.bind(function(r10) {
      this.sendRequest(e10, t10, r10);
    }, this));
  }, a3.prototype.flush = function(e10) {
    if (this.requestInProgress) return a2.log("Flush: Request already in progress"), g.resolve();
    this.requestInProgress = true, e10 = e10 || {};
    var t10 = this.libConfig.batch_request_timeout_ms, r10 = (/* @__PURE__ */ new Date()).getTime(), n10 = this.batchSize;
    return this.queue.fillBatch(n10).then(an.bind(function(i10) {
      var o10 = i10.length === n10, s10 = [], a10 = {};
      if (an.each(i10, function(e11) {
        var t11 = e11.payload;
        if (this.beforeSendHook && !e11.orphaned && (t11 = this.beforeSendHook(t11)), t11) {
          t11.event && t11.properties && (t11.properties = an.extend({}, t11.properties, { mp_sent_by_lib_version: x.LIB_VERSION }));
          var r11 = true, n11 = e11.id;
          n11 ? (this.itemIdsSentSuccessfully[n11] || 0) > 5 && (this.reportError("[dupe] item ID sent too many times, not sending", { item: e11, batchSize: i10.length, timesSent: this.itemIdsSentSuccessfully[n11] }), r11 = false) : this.reportError("[dupe] found item with no ID", { item: e11 }), r11 && s10.push(t11);
        }
        a10[e11.id] = t11;
      }, this), s10.length < 1) return this.requestInProgress = false, this.resetFlush(), g.resolve();
      var c10 = an.bind(function() {
        return this.queue.removeItemsByID(an.map(i10, function(e11) {
          return e11.id;
        })).then(an.bind(function(e11) {
          return (an.each(i10, an.bind(function(e12) {
            var t11 = e12.id;
            t11 ? (this.itemIdsSentSuccessfully[t11] = this.itemIdsSentSuccessfully[t11] || 0, this.itemIdsSentSuccessfully[t11]++, this.itemIdsSentSuccessfully[t11] > 5 && this.reportError("[dupe] item ID sent too many times", { item: e12, batchSize: i10.length, timesSent: this.itemIdsSentSuccessfully[t11] })) : this.reportError("[dupe] found item with no ID while removing", { item: e12 });
          }, this)), e11) ? (this.consecutiveRemovalFailures = 0, this.flushOnlyOnInterval && !o10) ? (this.resetFlush(), g.resolve()) : this.flush() : (++this.consecutiveRemovalFailures > 5 ? (this.reportError("Too many queue failures; disabling batching system."), this.stopAllBatching()) : this.resetFlush(), g.resolve());
        }, this));
      }, this), u10 = an.bind(function(o11) {
        this.requestInProgress = false;
        try {
          if (e10.unloading) return this.queue.updatePayloads(a10);
          if (an.isObject(o11) && "timeout" === o11.error && (/* @__PURE__ */ new Date()).getTime() - r10 >= t10) return this.reportError("Network timeout; retrying"), this.flush();
          if (an.isObject(o11) && (o11.httpStatusCode >= 500 || 429 === o11.httpStatusCode || o11.httpStatusCode <= 0 && !aC() || "timeout" === o11.error)) {
            var s11 = 2 * this.flushInterval;
            return o11.retryAfter && (s11 = 1e3 * parseInt(o11.retryAfter, 10) || s11), s11 = Math.min(6e5, s11), this.reportError("Error; retry in " + s11 + " ms"), this.scheduleFlush(s11), g.resolve();
          } else {
            if (!an.isObject(o11) || 413 !== o11.httpStatusCode) return c10();
            if (!(i10.length > 1)) return this.reportError("Single-event request too large; dropping", i10), this.resetBatchSize(), c10();
            var u11 = Math.max(1, Math.floor(n10 / 2));
            return this.batchSize = Math.min(this.batchSize, u11, i10.length - 1), this.reportError("413 response; reducing batch size to " + this.batchSize), this.resetFlush(), g.resolve();
          }
        } catch (e11) {
          this.reportError("Error handling API response", e11), this.resetFlush();
        }
      }, this), l2 = { method: "POST", verbose: true, ignore_json_errors: true, timeout_ms: t10 };
      return e10.unloading && (l2.transport = "sendBeacon"), a2.log("MIXPANEL REQUEST:", s10), this.sendRequestPromise(s10, l2).then(u10);
    }, this)).catch(an.bind(function(e11) {
      this.reportError("Error flushing request queue", e11), this.resetFlush();
    }, this));
  }, a3.prototype.reportError = function(e10, t10) {
    if (a2.error.apply(a2.error, arguments), this.errorReporter) try {
      t10 instanceof Error || (t10 = Error(e10)), this.errorReporter(e10, t10);
    } catch (e11) {
      a2.error(e11);
    }
  };
  var a5 = function(e10) {
    var t10 = Date.now();
    return !e10 || t10 > e10.maxExpires || t10 > e10.idleExpires;
  }, a9 = function(e10, t10) {
    if (!an.isArray(e10)) return e10 && t10.critical("record_allowed_iframe_origins must be an array of origin strings, cross-origin recording will be disabled."), [];
    for (var r10 = [], n10 = 0; n10 < e10.length; n10++) try {
      var i10 = new URL(e10[n10]).origin;
      if ("null" === i10) {
        t10.critical(e10[n10] + " has an opaque origin. Skipping this entry.");
        continue;
      }
      r10.push(i10);
    } catch (r11) {
      t10.critical(e10[n10] + " is not a valid origin URL. Skipping this entry.");
    }
    return r10;
  }, a6 = "change", a4 = "click", a8 = "hashchange", a7 = "load", ce = "mp_locationchange", ct = "popstate", cr = "scrollend", cn = "scroll", ci = "submit", co = "visibilitychange", cs = ["clientX", "clientY", "offsetX", "offsetY", "pageX", "pageY", "screenX", "screenY", "x", "y"], ca = ["mp-include"], cc = ["mp-no-track"], cu = cc.concat(["mp-sensitive"]), cl = ["aria-label", "aria-labelledby", "aria-describedby", "href", "name", "role", "title", "type"], cp = { button: true, checkbox: true, combobox: true, grid: true, link: true, listbox: true, menu: true, menubar: true, menuitem: true, menuitemcheckbox: true, menuitemradio: true, navigation: true, option: true, radio: true, radiogroup: true, searchbox: true, slider: true, spinbutton: true, switch: true, tab: true, tablist: true, textbox: true, tree: true, treegrid: true, treeitem: true }, ch = { base: true, head: true, html: true, link: true, meta: true, script: true, style: true, title: true, br: true, hr: true, wbr: true, noscript: true, picture: true, source: true, template: true, track: true }, cd = { article: true, div: true, h1: true, h2: true, h3: true, h4: true, h5: true, h6: true, p: true, section: true, span: true }, cf = ["onclick", "onmousedown", "onmouseup", "onpointerdown", "onpointerup", "ontouchend", "ontouchstart"], cg = as("autocapture");
  function cm(e10) {
    for (var t10 = {}, r10 = cv(e10).split(" "), n10 = 0; n10 < r10.length; n10++) {
      var i10 = r10[n10];
      i10 && (t10[i10] = true);
    }
    return t10;
  }
  function cv(e10) {
    switch (typeof e10.className) {
      case "string":
        return e10.className;
      case "object":
        return e10.className.baseVal || e10.getAttribute("class") || "";
      default:
        return "";
    }
  }
  function cy(e10, t10, r10, n10, i10, o10) {
    var s10 = { $classes: cv(e10).split(" "), $tag_name: e10.tagName.toLowerCase() }, a10 = e10.id;
    a10 && (s10.$id = a10), cM(e10, t10, i10, o10) && an.each(cl.concat(n10), function(t11) {
      if (e10.hasAttribute(t11) && !r10[t11]) {
        var n11 = e10.getAttribute(t11);
        cI(n11) && (s10["$attr-" + t11] = n11);
      }
    });
    for (var c10 = 1, u10 = 1, l2 = e10; l2 = (function(e11) {
      if (e11.previousElementSibling) return e11.previousElementSibling;
      do
        e11 = e11.previousSibling;
      while (e11 && !ck(e11));
      return e11;
    })(l2); ) c10++, l2.tagName === e10.tagName && u10++;
    return s10.$nth_child = c10, s10.$nth_of_type = u10, s10;
  }
  function c_(e10, t10, r10, n10) {
    var i10 = "";
    return cM(e10, t10, r10, n10) && e10.childNodes && e10.childNodes.length && an.each(e10.childNodes, function(e11) {
      cS(e11) && e11.textContent && (i10 += an.trim(e11.textContent).split(/(\s+)/).filter(cI).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255));
    }), an.trim(i10);
  }
  function cb(e10, t10, r10, n10) {
    if (r10) try {
      if (!r10(e10, t10)) return false;
    } catch (e11) {
      return cg.critical("Error while checking element in allowElementCallback", e11), false;
    }
    if (!n10.length) return true;
    for (var i10 = 0; i10 < n10.length; i10++) {
      var o10 = n10[i10];
      try {
        if (e10.matches(o10)) return true;
      } catch (e11) {
        cg.critical("Error while checking selector: " + o10, e11);
      }
    }
    return false;
  }
  function cw(e10, t10, r10, n10) {
    if (r10) try {
      if (r10(e10, t10)) return true;
    } catch (e11) {
      return cg.critical("Error while checking element in blockElementCallback", e11), true;
    }
    if (n10 && n10.length) for (i10 = 0; i10 < n10.length; i10++) {
      var i10, o10 = n10[i10];
      try {
        if (e10.matches(o10)) return true;
      } catch (e11) {
        cg.critical("Error while checking selector: " + o10, e11);
      }
    }
    var s10 = cm(e10);
    for (i10 = 0; i10 < cc.length; i10++) if (s10[cc[i10]]) return true;
    return false;
  }
  function ck(e10) {
    return e10 && 1 === e10.nodeType;
  }
  function cx(e10, t10) {
    return e10 && e10.tagName && e10.tagName.toLowerCase() === t10.toLowerCase();
  }
  function cS(e10) {
    return e10 && 3 === e10.nodeType;
  }
  function cC(e10) {
    var t10 = (e10.name || e10.id || "").toString().toLowerCase();
    return !!("string" == typeof t10 && /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(t10.replace(/[^a-zA-Z0-9]/g, ""))) || false;
  }
  function cM(e10, t10, r10, n10) {
    if (!cb(e10, t10, r10, n10)) return false;
    for (var i10, o10 = e10; o10.parentNode && !cx(o10, "body"); o10 = o10.parentNode) {
      var s10 = cm(o10);
      for (i10 = 0; i10 < cu.length; i10++) if (s10[cu[i10]]) return false;
    }
    var a10 = cm(e10);
    for (i10 = 0; i10 < ca.length; i10++) if (a10[ca[i10]]) return true;
    if (cx(e10, "input") || cx(e10, "select") || cx(e10, "textarea") || "true" === e10.getAttribute("contenteditable")) return false;
    var c10 = e10.type || "";
    if ("string" == typeof c10) switch (c10.toLowerCase()) {
      case "hidden":
      case "password":
        return false;
    }
    return !cC(e10);
  }
  function cI(e10) {
    if (null === e10 || an.isUndefined(e10)) return false;
    if ("string" == typeof e10 && (e10 = an.trim(e10), /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test((e10 || "").replace(/[- ]/g, "")) || /(^\d{3}-?\d{2}-?\d{4}$)/.test(e10))) return false;
    return true;
  }
  function cO(e10) {
    var t10 = "onscrollend" in se, r10 = aa(e10), n10 = cr;
    if (!t10) {
      var i10 = null;
      r10 = aa(function() {
        clearTimeout(i10), i10 = setTimeout(e10, 100);
      }), n10 = cn;
    }
    return { listener: r10, eventType: n10 };
  }
  function cE(e10) {
    var t10, r10 = e10.tagName.toLowerCase();
    return !!("button" === r10 || "input" === r10 || "select" === r10 || "textarea" === r10 || "details" === r10 || "dialog" === r10 || e10.isContentEditable || e10.onclick || e10.onmousedown || e10.onmouseup || e10.ontouchstart || e10.ontouchend || (function(e11) {
      for (var t11 = 0; t11 < cf.length; t11++) if (e11.hasAttribute(cf[t11])) return true;
      return false;
    })(e10)) || !!((t10 = e10.getAttribute("role")) && cp[t10.trim().split(/\s+/)[0].toLowerCase()] || "a" === r10 && e10.hasAttribute("href") || e10.hasAttribute("tabindex"));
  }
  function cR(e10) {
    if (!e10 || !e10.tagName) return true;
    var t10 = e10.tagName.toLowerCase();
    if (ch[t10]) return true;
    if (cE(e10)) return false;
    for (var r10 = e10.parentElement, n10 = 0; r10 && n10 < 5; ) {
      if (cE(r10)) return false;
      if (r10.getRootNode && r10.getRootNode() !== s3) {
        var i10 = r10.getRootNode();
        if (i10.host && cE(i10.host)) return false;
      }
      r10 = r10.parentElement, n10++;
    }
    return !!cd[t10];
  }
  function cA(e10) {
    return "composedPath" in e10 ? e10.composedPath() : [];
  }
  function cT(e10) {
    var t10 = cA(e10);
    return t10 && t10.length > 0 ? t10[0] : e10.target || e10.srcElement;
  }
  var cP = ".mp-mask, .fs-mask, .amp-mask, .rr-mask, .ph-mask", cD = ["password", "email", "tel", "hidden"];
  function cL(e10) {
    return e10 ? Array.isArray(e10) ? e10 : [e10] : [];
  }
  function cF(e10, t10) {
    return !!t10 && !!e10.closest(t10);
  }
  function cj(e10, t10) {
    var r10 = (e10.getAttribute("type") || "").toLowerCase();
    if (-1 !== cD.indexOf(r10)) return true;
    var n10 = (e10.getAttribute("autocomplete") || "").toLowerCase();
    return !!(n10 && "" !== n10 && "off" !== n10 || e10.hasAttribute("data-rr-is-password") || cC(e10)) || (t10.input.maskAll ? !cF(e10, t10.input.unmaskingSelector) : !!(cF(e10, t10.input.maskingSelector) || cF(e10, cP)));
  }
  function cN(e10, t10) {
    return !!e10 && (!!(t10.text._legacyClassRegex && (function e11(t11, r10, n10) {
      if (!t11) return false;
      if (t11.nodeType !== t11.ELEMENT_NODE) return e11(iR(t11), r10);
      for (var i10 = t11.classList.length; i10--; ) {
        var o10 = t11.classList[i10];
        if (r10.test(o10)) return true;
      }
      return e11(iR(t11), r10);
    })(e10, t10.text._legacyClassRegex)) || (t10.text.maskAll ? !cF(e10, t10.text.unmaskingSelector) : !!(cF(e10, t10.text.maskingSelector) || cF(e10, cP))));
  }
  var cU = as("network-plugin");
  function cB(e10) {
    return Math.round(Date.now() - e10.performance.now());
  }
  var cz = { initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"], ignoreRequestFn: function() {
    return false;
  }, recordHeaders: { request: [], response: [] }, recordBodyUrls: { request: [], response: [] }, recordInitialRequests: false };
  function cq(e10) {
    return "resource" === e10.entryType;
  }
  function cW(e10, t10, r10) {
    if (!(t10 in e10) || "function" != typeof e10[t10]) return function() {
    };
    var n10 = e10[t10], i10 = r10(n10);
    return e10[t10] = i10, function() {
      e10[t10] = n10;
    };
  }
  function cV(e10) {
    return e10 && "string" == typeof e10 && e10.length > 1048576 ? (cU.error("Body truncated from " + e10.length + " to 1048576 characters"), e10.substring(0, 1048576) + "... [truncated]") : e10;
  }
  function c$(e10, t10, r10) {
    return !!t10[e10] && 0 !== t10[e10].length && t10[e10].includes(r10.toLowerCase());
  }
  function cG(e10, t10, r10) {
    return !!t10[e10] && 0 !== t10[e10].length && aI(r10, t10[e10]);
  }
  function cH(e10) {
    var t10;
    if (null == e10) return null;
    if ("string" == typeof e10) t10 = e10;
    else if (e10 instanceof Document) t10 = e10.textContent;
    else if (e10 instanceof FormData) t10 = an.HTTPBuildQuery(e10);
    else if (!an.isObject(e10)) return "Cannot read body of type " + typeof e10;
    else try {
      t10 = JSON.stringify(e10);
    } catch (e11) {
      return "Failed to stringify response object";
    }
    return cV(t10);
  }
  function cK(e10) {
    return new Promise(function(t10) {
      var r10 = setTimeout(function() {
        t10("Timeout while trying to read body");
      }, 500);
      try {
        e10.clone().text().then(function(e11) {
          clearTimeout(r10), t10(cV(e11));
        }, function(e11) {
          clearTimeout(r10), t10("Failed to read body: " + String(e11));
        });
      } catch (e11) {
        clearTimeout(r10), t10("Failed to read body: " + String(e11));
      }
    });
  }
  function cY(e10, t10, r10, n10, i10, o10) {
    if (void 0 === o10 && (o10 = 0), o10 > 10) return cU.error("Cannot find performance entry"), Promise.resolve(null);
    var s10 = (function(e11, t11) {
      for (var r11 = e11.length, n11 = r11 - 1; n11 >= 0; n11 -= 1) if (t11(e11[n11])) return e11[n11];
    })(e10.performance.getEntriesByName(r10), function(e11) {
      return cq(e11) && e11.initiatorType === t10 && (!n10 || e11.startTime >= n10) && (!i10 || e11.startTime <= i10);
    });
    return s10 ? Promise.resolve(s10) : new Promise(function(e11) {
      setTimeout(e11, 50 * o10);
    }).then(function() {
      return cY(e10, t10, r10, n10, i10, o10 + 1);
    });
  }
  function cJ(e10, t10, r10) {
    if (!("performance" in t10)) return function() {
    };
    var n10 = Object.assign({}, cz.recordHeaders, r10.recordHeaders || {}), i10 = Object.assign({}, cz.recordBodyUrls, r10.recordBodyUrls || {}), o10 = Object.assign({}, cz, r10 = Object.assign({}, r10, { recordHeaders: n10, recordBodyUrls: i10 })), s10 = function(t11) {
      var r11 = t11.requests.filter(function(e11) {
        return !aI(e11.url, o10.ignoreRequestUrls || []) && !o10.ignoreRequestFn(e11);
      });
      (r11.length > 0 || t11.isInitial) && e10(Object.assign({}, t11, { requests: r11 }));
    }, a10 = (function(e11, t11, r11) {
      if (!t11.PerformanceObserver) return cU.error("PerformanceObserver not supported"), function() {
      };
      r11.recordInitialRequests && e11({ requests: t11.performance.getEntries().filter(function(e12) {
        return "navigation" === e12.entryType || cq(e12) && r11.initiatorTypes.includes(e12.initiatorType);
      }).map(function(e12) {
        return { url: e12.name, initiatorType: e12.initiatorType, status: "responseStatus" in e12 ? e12.responseStatus : void 0, startTime: Math.round(e12.startTime), endTime: Math.round(e12.responseEnd), timeOrigin: cB(t11) };
      }), isInitial: true });
      var n11 = new t11.PerformanceObserver(function(n12) {
        e11({ requests: n12.getEntries().filter(function(e12) {
          return cq(e12) && r11.initiatorTypes.includes(e12.initiatorType) && "xmlhttprequest" !== e12.initiatorType && "fetch" !== e12.initiatorType;
        }).map(function(e12) {
          return { url: e12.name, initiatorType: e12.initiatorType, status: "responseStatus" in e12 ? e12.responseStatus : void 0, startTime: Math.round(e12.startTime), endTime: Math.round(e12.responseEnd), timeOrigin: cB(t11) };
        }) });
      });
      return n11.observe({ entryTypes: ["navigation", "resource"] }), function() {
        n11.disconnect();
      };
    })(s10, t10, o10), c10 = (function(e11, t11, r11) {
      if (!r11.initiatorTypes.includes("xmlhttprequest")) return function() {
      };
      var n11 = cW(t11.XMLHttpRequest.prototype, "open", function(n12) {
        return function(i11, o11, s11, a11, c11) {
          void 0 === s11 && (s11 = true);
          var u11, l2, p2 = this, h2 = new Request(o11, { method: i11 }), d2 = {}, f2 = {}, g2 = p2.setRequestHeader.bind(p2);
          p2.setRequestHeader = function(e12, t12) {
            return c$("request", r11.recordHeaders, e12) && (f2[e12] = t12), g2(e12, t12);
          }, d2.requestHeaders = f2;
          var m2 = p2.send.bind(p2);
          p2.send = function(e12) {
            return cG("request", r11.recordBodyUrls, h2.url) && (d2.requestBody = cH(e12)), u11 = t11.performance.now(), m2(e12);
          }, p2.addEventListener("readystatechange", function() {
            if (p2.readyState === p2.DONE) {
              l2 = t11.performance.now();
              var n13 = {}, i12 = p2.getAllResponseHeaders();
              i12 && i12.trim().split(/[\r\n]+/).forEach(function(e12) {
                if (e12) {
                  var t12 = e12.indexOf(": ");
                  if (-1 !== t12) {
                    var i13 = e12.substring(0, t12), o12 = e12.substring(t12 + 2);
                    i13 && c$("response", r11.recordHeaders, i13) && (n13[i13] = o12);
                  }
                }
              }), d2.responseHeaders = n13, cG("response", r11.recordBodyUrls, h2.url) && (d2.responseBody = cH(p2.response)), cY(t11, "xmlhttprequest", h2.url, u11, l2).then(function(r12) {
                r12 ? e11({ requests: [{ url: r12.name, method: h2.method, initiatorType: r12.initiatorType, status: p2.status, startTime: Math.round(r12.startTime), endTime: Math.round(r12.responseEnd), timeOrigin: cB(t11), requestHeaders: d2.requestHeaders, requestBody: d2.requestBody, responseHeaders: d2.responseHeaders, responseBody: d2.responseBody }] }) : cU.error("Failed to get performance entry for XHR request to " + h2.url);
              }).catch(function(e12) {
                cU.error("Error recording XHR request to " + h2.url + ": " + String(e12));
              });
            }
          }), n12.call(p2, i11, o11, s11, a11, c11);
        };
      });
      return function() {
        n11();
      };
    })(s10, t10, o10), u10 = (function(e11, t11, r11) {
      if (!r11.initiatorTypes.includes("fetch")) return function() {
      };
      var n11 = cW(t11, "fetch", function(n12) {
        return function() {
          var i11, o11, s11, a11, c11 = new Request(arguments[0], arguments[1]), u11 = {}, l2 = Promise.resolve(void 0), p2 = Promise.resolve(void 0);
          try {
            var h2 = {};
            c11.headers.forEach(function(e12, t12) {
              c$("request", r11.recordHeaders, t12) && (h2[t12] = e12);
            }), u11.requestHeaders = h2, cG("request", r11.recordBodyUrls, c11.url) && (l2 = cK(c11).then(function(e12) {
              u11.requestBody = e12;
            })), o11 = t11.performance.now(), a11 = n12.apply(t11, arguments).then(function(e12) {
              i11 = e12, s11 = t11.performance.now();
              var n13 = {};
              return i11.headers.forEach(function(e13, t12) {
                c$("response", r11.recordHeaders, t12) && (n13[t12] = e13);
              }), u11.responseHeaders = n13, cG("response", r11.recordBodyUrls, c11.url) && (p2 = cK(i11).then(function(e13) {
                u11.responseBody = e13;
              })), i11;
            });
          } catch (e12) {
            a11 = Promise.reject(e12);
          }
          return Promise.all([l2, p2, a11]).then(function() {
            return cY(t11, "fetch", c11.url, o11, s11);
          }).then(function(r12) {
            r12 ? e11({ requests: [{ url: r12.name, method: c11.method, initiatorType: r12.initiatorType, status: i11 ? i11.status : void 0, startTime: Math.round(r12.startTime), endTime: Math.round(r12.responseEnd), timeOrigin: cB(t11), requestHeaders: u11.requestHeaders, requestBody: u11.requestBody, responseHeaders: u11.responseHeaders, responseBody: u11.responseBody }] }) : cU.error("Failed to get performance entry for fetch request to " + c11.url);
          }).catch(function(e12) {
            cU.error("Error recording fetch request to " + c11.url + ": " + String(e12));
          }), a11;
        };
      });
      return function() {
        n11();
      };
    })(s10, t10, o10);
    return function() {
      a10(), c10(), u10();
    };
  }
  var cZ = as("recorder"), cX = se.CompressionStream, cQ = { batch_size: 1e3, batch_flush_interval_ms: 1e4, batch_request_timeout_ms: 9e4, batch_autostart: true }, c0 = /* @__PURE__ */ new Set([nU.MouseMove, nU.MouseInteraction, nU.Scroll, nU.ViewportResize, nU.Input, nU.TouchMove, nU.MediaInteraction, nU.Drag, nU.Selection]), c1 = function(e10) {
    this._mixpanel = e10.mixpanelInstance, this._onIdleTimeout = e10.onIdleTimeout || aM, this._onMaxLengthReached = e10.onMaxLengthReached || aM, this._onBatchSent = e10.onBatchSent || aM, this._rrwebRecord = e10.rrwebRecord || null, this._stopRecording = null, this.replayId = e10.replayId, this.batchStartUrl = e10.batchStartUrl || null, this.replayStartUrl = e10.replayStartUrl || null, this.idleExpires = e10.idleExpires || null, this.maxExpires = e10.maxExpires || null, this.replayStartTime = e10.replayStartTime || null, this.lastEventTimestamp = e10.lastEventTimestamp || null, this.seqNo = e10.seqNo || 0, this.idleTimeoutId = null, this.maxTimeoutId = null, this.recordMaxMs = 864e5, this.recordMinMs = 0, this._recordMinMsCheckStart = null;
    var t10 = ah(e10.sharedLockStorage || ag(), true) && !this.getConfig("disable_persistence");
    this.batcherKey = "__mprec_" + this.getConfig("name") + "_" + this.getConfig("token") + "_" + this.replayId, this.queueStorage = new aA(aT, aP, aL), this.batcher = new a3(this.batcherKey, { errorReporter: this.reportError.bind(this), flushOnlyOnInterval: true, libConfig: cQ, sendRequestFunc: this.flushEventsWithOptOut.bind(this), queueStorage: this.queueStorage, sharedLockStorage: e10.sharedLockStorage, usePersistence: t10, stopAllBatchingFunc: this.stopRecording.bind(this), enqueueThrottleMs: 250, sharedLockTimeoutMS: 1e4 });
  };
  c1.prototype.getUserIdInfo = function() {
    if (this.finalFlushUserIdInfo) return this.finalFlushUserIdInfo;
    var e10 = { distinct_id: String(this._mixpanel.get_distinct_id()) }, t10 = this._mixpanel.get_property("$device_id");
    t10 && (e10.$device_id = t10);
    var r10 = this._mixpanel.get_property("$user_id");
    return r10 && (e10.$user_id = r10), e10;
  }, c1.prototype.unloadPersistedData = function() {
    return this.batcher.stop(), this.queueStorage.init().catch((function() {
      this.reportError("Error initializing IndexedDB storage for unloading persisted data.");
    }).bind(this)).then((function() {
      return this.getDurationMs() < this._getRecordMinMs() ? this.queueStorage.removeItem(this.batcherKey) : this.batcher.flush().then((function() {
        return this.queueStorage.removeItem(this.batcherKey);
      }).bind(this));
    }).bind(this));
  }, c1.prototype.getConfig = function(e10) {
    return this._mixpanel.get_config(e10);
  }, c1.prototype.get_config = function(e10) {
    return this.getConfig(e10);
  }, c1.prototype.startRecording = function(e10) {
    if (null === this._rrwebRecord) return void this.reportError("rrweb record function not provided. ");
    if (null !== this._stopRecording) return void cZ.log("Recording already in progress, skipping startRecording.");
    this.recordMaxMs = this.getConfig("record_max_ms"), this.recordMaxMs > 864e5 && (this.recordMaxMs = 864e5, cZ.critical("record_max_ms cannot be greater than 86400000ms. Capping value.")), this.maxExpires || (this.maxExpires = (/* @__PURE__ */ new Date()).getTime() + this.recordMaxMs), this.recordMinMs = this._getRecordMinMs(), this.replayStartTime || (this.replayStartTime = (/* @__PURE__ */ new Date()).getTime(), this.batchStartUrl = an.info.currentUrl(), this.replayStartUrl = an.info.currentUrl()), e10 || this.recordMinMs > 0 ? (this.batcher.stop(), this._recordMinMsCheckStart = null) : this.batcher.start();
    var t10 = (function() {
      clearTimeout(this.idleTimeoutId);
      var e11 = this.getConfig("record_idle_timeout_ms");
      this.idleTimeoutId = setTimeout(this._onIdleTimeout, e11), this.idleExpires = (/* @__PURE__ */ new Date()).getTime() + e11;
    }).bind(this);
    t10();
    var r10 = this.getConfig("record_block_selector");
    ("" === r10 || null === r10) && (r10 = void 0);
    var n10 = (function(e11) {
      var t11 = { input: { maskingSelector: "", unmaskingSelector: "", maskAll: true }, text: { maskingSelector: "", unmaskingSelector: "", maskAll: true } }, r11 = e11.get_config("record_mask_input_selector"), n11 = e11.get_config("record_unmask_input_selector"), i11 = e11.get_config("record_mask_all_inputs");
      t11.input.maskingSelector = cL(r11).join(","), t11.input.unmaskingSelector = cL(n11).join(","), void 0 !== i11 && (t11.input.maskAll = i11);
      var o11 = e11.get_config("record_mask_text_selector"), s11 = e11.get_config("record_unmask_text_selector"), a11 = e11.get_config("record_mask_all_text"), c11 = e11.get_config("record_mask_text_class"), u10 = cL(o11);
      if (c11) if (c11 instanceof RegExp) t11.text._legacyClassRegex = c11;
      else {
        var l2 = "." + c11;
        -1 === u10.indexOf(l2) && u10.push(l2);
      }
      return t11.text.maskingSelector = u10.join(","), t11.text.unmaskingSelector = cL(s11).join(","), void 0 === a11 && void 0 !== o11 ? t11.text.maskAll = false : void 0 !== a11 && (t11.text.maskAll = a11), t11;
    })(this._mixpanel), i10 = [];
    if (this.getConfig("record_network")) {
      var o10 = this.getConfig("record_network_options") || {}, s10 = (o10.ignoreRequestUrls || []).slice();
      s10.push(this._getApiRoute()), o10.ignoreRequestUrls = s10, i10.push({ name: "rrweb/network@1.mp", observer: cJ, options: o10 });
    }
    this.getConfig("record_console") && i10.push({ name: "rrweb/console@1", observer: o0, options: { stringifyOptions: { stringLengthLimit: 1e3, numOfKeysLimit: 50, depthOfLimit: 2 } } });
    var a10 = a9(this.getConfig("record_allowed_iframe_origins"), cZ);
    try {
      this._stopRecording = this._rrwebRecord({ emit: (function(e11) {
        this.idleExpires && this.idleExpires < e11.timestamp ? this._onIdleTimeout() : (null === this._recordMinMsCheckStart && (this._recordMinMsCheckStart = e11.timestamp), e11.type === nN.IncrementalSnapshot && c0.has(e11.data.source) && (this.batcher.stopped && e11.timestamp - this._recordMinMsCheckStart >= this.recordMinMs && this.batcher.start(), t10()), this.__enqueuePromise = this.batcher.enqueue(e11), (null === this.lastEventTimestamp || e11.timestamp > this.lastEventTimestamp) && (this.lastEventTimestamp = e11.timestamp));
      }).bind(this), blockClass: this.getConfig("record_block_class"), blockSelector: r10, collectFonts: this.getConfig("record_collect_fonts"), dataURLOptions: { type: "image/webp", quality: 0.6 }, maskAllInputs: true, maskTextSelector: "*", maskInputFn: this._getMaskFn(cj, n10), maskTextFn: this._getMaskFn(cN, n10), recordCrossOriginIframes: a10.length > 0, allowedIframeOrigins: a10, recordCanvas: this.getConfig("record_canvas"), sampling: { canvas: 15 }, plugins: i10 });
    } catch (e11) {
      this.reportError("Unexpected error when starting rrweb recording.", e11);
    }
    if ("function" != typeof this._stopRecording) {
      this.reportError("rrweb failed to start, skipping this recording."), this._stopRecording = null, this.stopRecording();
      return;
    }
    var c10 = this.maxExpires - (/* @__PURE__ */ new Date()).getTime();
    this.maxTimeoutId = setTimeout(this._onMaxLengthReached.bind(this), c10);
  }, c1.prototype.stopRecording = function(e10) {
    var t10;
    if (this.finalFlushUserIdInfo = this.getUserIdInfo(), !this.isRrwebStopped()) {
      try {
        this._stopRecording();
      } catch (e11) {
        this.reportError("Error with rrweb stopRecording", e11);
      }
      this._stopRecording = null;
    }
    return this.batcher.stopped ? t10 = this.batcher.clear() : e10 || (t10 = this.batcher.flush()), this.batcher.stop(), clearTimeout(this.idleTimeoutId), clearTimeout(this.maxTimeoutId), t10;
  }, c1.prototype.isRrwebStopped = function() {
    return null === this._stopRecording;
  }, c1.prototype.flushEventsWithOptOut = function(e10, t10, r10) {
    var n10 = (function(e11) {
      0 === e11 && (this.stopRecording(), r10({ error: "Tracking has been opted out, stopping recording." }));
    }).bind(this);
    this._flushEvents(e10, t10, r10, n10);
  }, c1.prototype.serialize = function() {
    var e10;
    try {
      e10 = this._mixpanel.get_tab_id();
    } catch (t10) {
      this.reportError("Error getting tab ID for serialization ", t10), e10 = null;
    }
    return { replayId: this.replayId, seqNo: this.seqNo, replayStartTime: this.replayStartTime, batchStartUrl: this.batchStartUrl, replayStartUrl: this.replayStartUrl, lastEventTimestamp: this.lastEventTimestamp, idleExpires: this.idleExpires, maxExpires: this.maxExpires, tabId: e10 };
  }, c1.deserialize = function(e10, t10) {
    return new c1(an.extend({}, t10, { replayId: e10.replayId, batchStartUrl: e10.batchStartUrl, replayStartUrl: e10.replayStartUrl, idleExpires: e10.idleExpires, maxExpires: e10.maxExpires, replayStartTime: e10.replayStartTime, lastEventTimestamp: e10.lastEventTimestamp, seqNo: e10.seqNo, sharedLockStorage: t10.sharedLockStorage }));
  }, c1.prototype._getApiRoute = function() {
    return this.getConfig("api_routes").record;
  }, c1.prototype._sendRequest = function(e10, t10, r10, n10) {
    var i10 = (function(t11, r11) {
      200 === t11.status && this.replayId === e10 && (this.seqNo++, this.batchStartUrl = an.info.currentUrl()), this._onBatchSent(), n10({ status: 0, httpStatusCode: t11.status, responseBody: r11, retryAfter: t11.headers.get("Retry-After") });
    }).bind(this), o10 = this._mixpanel.get_api_host && this._mixpanel.get_api_host("record") || this.getConfig("api_host");
    se.fetch(o10 + "/" + this._getApiRoute() + "?" + new URLSearchParams(t10), { method: "POST", headers: { Authorization: "Basic " + btoa(this.getConfig("token") + ":"), "Content-Type": "application/octet-stream" }, body: r10 }).then(function(e11) {
      e11.json().then(function(t11) {
        i10(e11, t11);
      }).catch(function(e12) {
        n10({ error: e12 });
      });
    }).catch(function(e11) {
      n10({ error: e11, httpStatusCode: 0 });
    });
  }, c1.prototype._flushEvents = aB(function(e10, t10, r10) {
    var n10 = e10.length;
    if (n10 > 0) {
      for (var i10 = this.replayId, o10 = 1 / 0, s10 = -1 / 0, a10 = false, c10 = 0; c10 < n10; c10++) o10 = Math.min(o10, e10[c10].timestamp), s10 = Math.max(s10, e10[c10].timestamp), e10[c10].type === nN.FullSnapshot && (a10 = true);
      if (0 === this.seqNo) {
        if (!a10) {
          r10({ error: "First batch does not contain a full snapshot. Aborting recording." }), this.stopRecording(true);
          return;
        }
        this.replayStartTime = o10;
      } else this.replayStartTime || (this.reportError("Replay start time not set but seqNo is not 0. Using current batch start time as a fallback."), this.replayStartTime = o10);
      var u10 = s10 - this.replayStartTime, l2 = { $current_url: this.batchStartUrl, $lib_version: x.LIB_VERSION, batch_start_time: o10 / 1e3, mp_lib: "web", replay_id: i10, replay_length_ms: u10, replay_start_time: this.replayStartTime / 1e3, replay_start_url: this.replayStartUrl, seq: this.seqNo }, p2 = JSON.stringify(e10);
      Object.assign(l2, this.getUserIdInfo()), aR(s6, s2.vendor, s5) ? new Response(new Blob([p2], { type: "application/json" }).stream().pipeThrough(new cX("gzip"))).blob().then((function(e11) {
        l2.format = "gzip", this._sendRequest(i10, l2, e11, r10);
      }).bind(this)) : (l2.format = "body", this._sendRequest(i10, l2, p2, r10));
    }
  }), c1.prototype.reportError = function(e10, t10) {
    cZ.error.apply(cZ.error, arguments);
    try {
      t10 || e10 instanceof Error || (e10 = Error(e10)), this.getConfig("error_reporter")(e10, t10);
    } catch (e11) {
      cZ.error(e11);
    }
  }, c1.prototype.getDurationMs = function() {
    return null === this.replayStartTime ? 0 : null === this.lastEventTimestamp ? (/* @__PURE__ */ new Date()).getTime() - this.replayStartTime : this.lastEventTimestamp - this.replayStartTime;
  }, c1.prototype._getRecordMinMs = function() {
    var e10 = this.getConfig("record_min_ms");
    return e10 > 8e3 ? (cZ.critical("record_min_ms cannot be greater than 8000ms. Capping value."), 8e3) : e10;
  }, c1.prototype._getMaskFn = function(e10, t10) {
    return (function(r10, n10) {
      if (!r10.trim().length) return "";
      var i10 = true;
      try {
        i10 = e10(n10, t10);
      } catch (e11) {
        this.reportError("Error checking if text should be masked, defaulting to masked", e11);
      }
      if (!i10) return r10;
      var o10 = Math.min(r10.length, 1e4);
      return "*".repeat(o10);
    }).bind(this);
  };
  var c2 = function(e10) {
    this.idb = new aA(aT, aD, aL), this.errorReporter = e10.errorReporter, this.mixpanelInstance = e10.mixpanelInstance, this.sharedLockStorage = e10.sharedLockStorage;
  };
  c2.prototype.isPersistenceEnabled = function() {
    return !this.mixpanelInstance.get_config("disable_persistence");
  }, c2.prototype.handleError = function(e10) {
    this.errorReporter("IndexedDB error: ", e10);
  }, c2.prototype.setActiveRecording = function(e10) {
    if (!this.isPersistenceEnabled()) return g.resolve();
    var t10 = e10.tabId;
    return t10 ? this.idb.init().then((function() {
      return this.idb.setItem(t10, e10);
    }).bind(this)).catch(this.handleError.bind(this)) : (console.warn("No tab ID is set, cannot persist recording metadata."), g.resolve());
  }, c2.prototype.getActiveRecording = function() {
    return this.isPersistenceEnabled() ? this.idb.init().then((function() {
      return this.idb.getItem(this.mixpanelInstance.get_tab_id());
    }).bind(this)).then((function(e10) {
      return a5(e10) ? null : e10;
    }).bind(this)).catch(this.handleError.bind(this)) : g.resolve(null);
  }, c2.prototype.clearActiveRecording = function() {
    return this.isPersistenceEnabled() ? this.markActiveRecordingExpired() : this.deleteActiveRecording();
  }, c2.prototype.markActiveRecordingExpired = function() {
    return this.getActiveRecording().then((function(e10) {
      if (e10) return e10.maxExpires = 0, this.setActiveRecording(e10);
    }).bind(this)).catch(this.handleError.bind(this));
  }, c2.prototype.deleteActiveRecording = function() {
    return this.idb.isInitialized() ? this.idb.removeItem(this.mixpanelInstance.get_tab_id()).catch(this.handleError.bind(this)) : g.resolve();
  }, c2.prototype.flushInactiveRecordings = function() {
    return this.isPersistenceEnabled() ? this.idb.init().then((function() {
      return this.idb.getAll();
    }).bind(this)).then((function(e10) {
      var t10 = e10.filter(function(e11) {
        return a5(e11);
      }).map((function(e11) {
        return c1.deserialize(e11, { mixpanelInstance: this.mixpanelInstance, sharedLockStorage: this.sharedLockStorage }).unloadPersistedData().then((function() {
          return this.idb.removeItem(e11.tabId);
        }).bind(this)).catch(this.handleError.bind(this));
      }).bind(this));
      return g.all(t10);
    }).bind(this)).catch(this.handleError.bind(this)) : g.resolve([]);
  };
  var c3 = as("recorder"), c5 = function(e10, t10, r10) {
    this.mixpanelInstance = e10, this.rrwebRecord = t10 || iS, this.sharedLockStorage = r10, this.recordingRegistry = new c2({ mixpanelInstance: this.mixpanelInstance, errorReporter: c3.error, sharedLockStorage: r10 }), this._flushInactivePromise = this.recordingRegistry.flushInactiveRecordings(), this.activeRecording = null, this.stopRecordingInProgress = false;
  };
  c5.prototype.startRecording = function(e10) {
    if (e10 = e10 || {}, this.activeRecording && !this.activeRecording.isRrwebStopped()) return void c3.log("Recording already in progress, skipping startRecording.");
    var t10 = (function() {
      c3.log("Idle timeout reached, restarting recording."), this.resetRecording();
    }).bind(this), r10 = (function() {
      c3.log("Max recording length reached, stopping recording."), this.resetRecording();
    }).bind(this), n10 = (function() {
      this.recordingRegistry.setActiveRecording(this.activeRecording.serialize()), this.__flushPromise = this.activeRecording.batcher._flushPromise;
    }).bind(this), i10 = { mixpanelInstance: this.mixpanelInstance, onBatchSent: n10, onIdleTimeout: t10, onMaxLengthReached: r10, replayId: an.UUID(), rrwebRecord: this.rrwebRecord, sharedLockStorage: this.sharedLockStorage };
    return e10.activeSerializedRecording ? this.activeRecording = c1.deserialize(e10.activeSerializedRecording, i10) : this.activeRecording = new c1(i10), this.activeRecording.startRecording(e10.shouldStopBatcher), this.recordingRegistry.setActiveRecording(this.activeRecording.serialize());
  }, c5.prototype.stopRecording = function() {
    return this.stopRecordingInProgress = true, this._stopCurrentRecording(false, true).then((function() {
      return this.recordingRegistry.clearActiveRecording();
    }).bind(this)).then((function() {
      this.stopRecordingInProgress = false;
    }).bind(this));
  }, c5.prototype.pauseRecording = function() {
    return this._stopCurrentRecording(false);
  }, c5.prototype._stopCurrentRecording = function(e10, t10) {
    if (this.activeRecording) {
      var r10 = this.activeRecording.stopRecording(e10);
      return t10 && (this.activeRecording = null), r10;
    }
    return g.resolve();
  }, c5.prototype.resumeRecording = function(e10) {
    return this.activeRecording && this.activeRecording.isRrwebStopped() ? (this.activeRecording.startRecording(false), g.resolve(null)) : this.recordingRegistry.getActiveRecording().then((function(t10) {
      return t10 && !this.stopRecordingInProgress ? this.startRecording({ activeSerializedRecording: t10 }) : e10 ? this.startRecording({ shouldStopBatcher: false }) : (c3.log("No resumable recording found."), null);
    }).bind(this));
  }, c5.prototype.resetRecording = function() {
    this.stopRecording(), this.startRecording({ shouldStopBatcher: true });
  }, c5.prototype.isRecording = function() {
    return this.activeRecording && !this.activeRecording.isRrwebStopped();
  }, c5.prototype.getActiveReplayId = function() {
    return this.isRecording() ? this.activeRecording.replayId : null;
  }, Object.defineProperty(c5.prototype, "replayId", { get: function() {
    return this.getActiveReplayId();
  } }), se[C] = c5;
  var c9 = { exports: {} }, c6 = (c9.exports, (f = (function() {
    var e10, t10;
    if (m) return c9.exports;
    return m = 1, Array.isArray || (Array.isArray = function(e11) {
      return "[object Array]" === Object.prototype.toString.call(e11);
    }), e10 = {}, t10 = { "==": function(e11, t11) {
      return e11 == t11;
    }, "===": function(e11, t11) {
      return e11 === t11;
    }, "!=": function(e11, t11) {
      return e11 != t11;
    }, "!==": function(e11, t11) {
      return e11 !== t11;
    }, ">": function(e11, t11) {
      return e11 > t11;
    }, ">=": function(e11, t11) {
      return e11 >= t11;
    }, "<": function(e11, t11, r10) {
      return void 0 === r10 ? e11 < t11 : e11 < t11 && t11 < r10;
    }, "<=": function(e11, t11, r10) {
      return void 0 === r10 ? e11 <= t11 : e11 <= t11 && t11 <= r10;
    }, "!!": function(t11) {
      return e10.truthy(t11);
    }, "!": function(t11) {
      return !e10.truthy(t11);
    }, "%": function(e11, t11) {
      return e11 % t11;
    }, log: function(e11) {
      return console.log(e11), e11;
    }, in: function(e11, t11) {
      return !!t11 && void 0 !== t11.indexOf && -1 !== t11.indexOf(e11);
    }, cat: function() {
      return Array.prototype.join.call(arguments, "");
    }, substr: function(e11, t11, r10) {
      if (r10 < 0) {
        var n10 = String(e11).substr(t11);
        return n10.substr(0, n10.length + r10);
      }
      return String(e11).substr(t11, r10);
    }, "+": function() {
      return Array.prototype.reduce.call(arguments, function(e11, t11) {
        return parseFloat(e11, 10) + parseFloat(t11, 10);
      }, 0);
    }, "*": function() {
      return Array.prototype.reduce.call(arguments, function(e11, t11) {
        return parseFloat(e11, 10) * parseFloat(t11, 10);
      });
    }, "-": function(e11, t11) {
      return void 0 === t11 ? -e11 : e11 - t11;
    }, "/": function(e11, t11) {
      return e11 / t11;
    }, min: function() {
      return Math.min.apply(this, arguments);
    }, max: function() {
      return Math.max.apply(this, arguments);
    }, merge: function() {
      return Array.prototype.reduce.call(arguments, function(e11, t11) {
        return e11.concat(t11);
      }, []);
    }, var: function(e11, t11) {
      var r10 = void 0 === t11 ? null : t11, n10 = this;
      if (void 0 === e11 || "" === e11 || null === e11) return n10;
      for (var i10 = String(e11).split("."), o10 = 0; o10 < i10.length; o10++) if (null == n10 || void 0 === (n10 = n10[i10[o10]])) return r10;
      return n10;
    }, missing: function() {
      for (var t11 = [], r10 = Array.isArray(arguments[0]) ? arguments[0] : arguments, n10 = 0; n10 < r10.length; n10++) {
        var i10 = r10[n10], o10 = e10.apply({ var: i10 }, this);
        (null === o10 || "" === o10) && t11.push(i10);
      }
      return t11;
    }, missing_some: function(t11, r10) {
      var n10 = e10.apply({ missing: r10 }, this);
      return r10.length - n10.length >= t11 ? [] : n10;
    } }, e10.is_logic = function(e11) {
      return "object" == typeof e11 && null !== e11 && !Array.isArray(e11) && 1 === Object.keys(e11).length;
    }, e10.truthy = function(e11) {
      return (!Array.isArray(e11) || 0 !== e11.length) && !!e11;
    }, e10.get_operator = function(e11) {
      return Object.keys(e11)[0];
    }, e10.get_values = function(t11) {
      return t11[e10.get_operator(t11)];
    }, e10.apply = function(r10, n10) {
      if (Array.isArray(r10)) return r10.map(function(t11) {
        return e10.apply(t11, n10);
      });
      if (!e10.is_logic(r10)) return r10;
      var i10, o10, s10, a10, c10, u10 = e10.get_operator(r10), l2 = r10[u10];
      if (Array.isArray(l2) || (l2 = [l2]), "if" === u10 || "?:" == u10) {
        for (i10 = 0; i10 < l2.length - 1; i10 += 2) if (e10.truthy(e10.apply(l2[i10], n10))) return e10.apply(l2[i10 + 1], n10);
        return l2.length === i10 + 1 ? e10.apply(l2[i10], n10) : null;
      }
      if ("and" === u10) {
        for (i10 = 0; i10 < l2.length && (o10 = e10.apply(l2[i10], n10), e10.truthy(o10)); i10 += 1) ;
        return o10;
      }
      if ("or" === u10) {
        for (i10 = 0; i10 < l2.length && (o10 = e10.apply(l2[i10], n10), !e10.truthy(o10)); i10 += 1) ;
        return o10;
      }
      if ("filter" === u10) return (a10 = e10.apply(l2[0], n10), s10 = l2[1], Array.isArray(a10)) ? a10.filter(function(t11) {
        return e10.truthy(e10.apply(s10, t11));
      }) : [];
      if ("map" === u10) return (a10 = e10.apply(l2[0], n10), s10 = l2[1], Array.isArray(a10)) ? a10.map(function(t11) {
        return e10.apply(s10, t11);
      }) : [];
      else if ("reduce" === u10) return (a10 = e10.apply(l2[0], n10), s10 = l2[1], c10 = void 0 !== l2[2] ? e10.apply(l2[2], n10) : null, Array.isArray(a10)) ? a10.reduce(function(t11, r11) {
        return e10.apply(s10, { current: r11, accumulator: t11 });
      }, c10) : c10;
      else if ("all" === u10) {
        if (a10 = e10.apply(l2[0], n10), s10 = l2[1], !Array.isArray(a10) || !a10.length) return false;
        for (i10 = 0; i10 < a10.length; i10 += 1) if (!e10.truthy(e10.apply(s10, a10[i10]))) return false;
        return true;
      } else if ("none" === u10) {
        if (a10 = e10.apply(l2[0], n10), s10 = l2[1], !Array.isArray(a10) || !a10.length) return true;
        for (i10 = 0; i10 < a10.length; i10 += 1) if (e10.truthy(e10.apply(s10, a10[i10]))) return false;
        return true;
      } else if ("some" === u10) {
        if (a10 = e10.apply(l2[0], n10), s10 = l2[1], !Array.isArray(a10) || !a10.length) return false;
        for (i10 = 0; i10 < a10.length; i10 += 1) if (e10.truthy(e10.apply(s10, a10[i10]))) return true;
        return false;
      }
      if (l2 = l2.map(function(t11) {
        return e10.apply(t11, n10);
      }), t10.hasOwnProperty(u10) && "function" == typeof t10[u10]) return t10[u10].apply(n10, l2);
      if (u10.indexOf(".") > 0) {
        var p2 = String(u10).split("."), h2 = t10;
        for (i10 = 0; i10 < p2.length; i10++) {
          if (!h2.hasOwnProperty(p2[i10])) throw Error("Unrecognized operation " + u10 + " (failed at " + p2.slice(0, i10 + 1).join(".") + ")");
          h2 = h2[p2[i10]];
        }
        return h2.apply(n10, l2);
      }
      throw Error("Unrecognized operation " + u10);
    }, e10.uses_data = function(t11) {
      var r10 = [];
      if (e10.is_logic(t11)) {
        var n10 = e10.get_operator(t11), i10 = t11[n10];
        Array.isArray(i10) || (i10 = [i10]), "var" === n10 ? r10.push(i10[0]) : i10.forEach(function(t12) {
          r10.push.apply(r10, e10.uses_data(t12));
        });
      }
      for (var o10 = [], s10 = 0, a10 = r10.length; s10 < a10; s10++) -1 === o10.indexOf(r10[s10]) && o10.push(r10[s10]);
      return o10;
    }, e10.add_operation = function(e11, r10) {
      t10[e11] = r10;
    }, e10.rm_operation = function(e11) {
      delete t10[e11];
    }, e10.rule_like = function(t11, r10) {
      if (r10 === t11 || "@" === r10) return true;
      if ("number" === r10) return "number" == typeof t11;
      if ("string" === r10) return "string" == typeof t11;
      if ("array" === r10) return Array.isArray(t11) && !e10.is_logic(t11);
      if (e10.is_logic(r10)) {
        if (e10.is_logic(t11)) {
          var n10 = e10.get_operator(r10), i10 = e10.get_operator(t11);
          if ("@" === n10 || n10 === i10) return e10.rule_like(e10.get_values(t11, false), e10.get_values(r10, false));
        }
        return false;
      }
      if (Array.isArray(r10) && Array.isArray(t11)) {
        if (r10.length !== t11.length) return false;
        for (var o10 = 0; o10 < r10.length; o10 += 1) if (!e10.rule_like(t11[o10], r10[o10])) return false;
        return true;
      }
      return false;
    }, c9.exports = e10, c9.exports;
  })()) && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f), c4 = {};
  function c8() {
    this.clicks = [];
  }
  function c7(e10, t10) {
    this.changeCallback = e10 || function() {
    }, this.observerConfig = t10, this.observedShadowRoots = null, this.shadowObservers = [];
  }
  c4.eventMatchesCriteria = function(e10, t10, r10) {
    if (e10 !== r10.event_name) return { matches: false };
    var n10 = r10.property_filters, i10 = true;
    if (n10 && !an.isEmptyObject(n10)) try {
      i10 = c6.apply(n10, t10 || {});
    } catch (e11) {
      return { matches: false, error: e11.toString() };
    }
    return { matches: i10 };
  }, se[S] = Promise.resolve(c4), c8.prototype.isRageClick = function(e10, t10) {
    var r10 = (t10 = t10 || {}).threshold_px || 30, n10 = t10.timeout_ms || 1e3, i10 = t10.click_count || 4;
    if (t10.interactive_elements_only) {
      var o10 = cT(e10);
      if (!o10 || cR(o10)) return false;
    }
    var s10 = Date.now(), a10 = e10.pageX, c10 = e10.pageY, u10 = this.clicks[this.clicks.length - 1];
    if (u10 && s10 - u10.timestamp < n10 && Math.sqrt(Math.pow(a10 - u10.x, 2) + Math.pow(c10 - u10.y, 2)) < r10) {
      if (this.clicks.push({ x: a10, y: c10, timestamp: s10 }), this.clicks.length >= i10) return this.clicks = [], true;
    } else this.clicks = [{ x: a10, y: c10, timestamp: s10 }];
    return false;
  }, c7.prototype.getEventTarget = function(e10) {
    if (this.observedShadowRoots) return cT(e10);
  }, c7.prototype.observeFromEvent = function(e10) {
    if (this.observedShadowRoots) for (var t10 = cA(e10), r10 = 0; r10 < t10.length; r10++) {
      var n10 = t10[r10];
      n10 && n10.shadowRoot && this.observeShadowRoot(n10.shadowRoot);
    }
  }, c7.prototype.observeShadowRoot = function(e10) {
    if (!(!this.observedShadowRoots || this.observedShadowRoots.has(e10))) {
      var t10 = this;
      try {
        this.observedShadowRoots.add(e10);
        var r10 = new window.MutationObserver(function() {
          t10.changeCallback();
        });
        r10.observe(e10, this.observerConfig), this.shadowObservers.push(r10);
      } catch (e11) {
        cg.critical("Error while observing shadow root", e11);
      }
    }
  }, c7.prototype.start = function() {
    if (!this.observedShadowRoots) {
      if (!("u" > typeof WeakSet)) return void cg.critical("Shadow DOM observation unavailable: WeakSet not supported");
      this.observedShadowRoots = /* @__PURE__ */ new WeakSet();
    }
  }, c7.prototype.stop = function() {
    if (this.observedShadowRoots) {
      for (var e10 = 0; e10 < this.shadowObservers.length; e10++) try {
        this.shadowObservers[e10].disconnect();
      } catch (e11) {
        cg.critical("Error while disconnecting shadow DOM observer", e11);
      }
      this.shadowObservers = [], this.observedShadowRoots = null;
    }
  };
  var ue = [a6, "input", ci, "select", "toggle"], ut = [cr], ur = [a8], un = { characterData: true, childList: true, subtree: true, attributes: true, attributeFilter: ["style", "class", "hidden", "checked", "selected", "value", "display", "visibility"] };
  function ui(e10) {
    this.eventListeners = [], this.mutationObserver = null, this.shadowDOMObserver = null, this.isTracking = false, this.lastChangeEventTimestamp = 0, this.pendingClicks = [], this.onDeadClickCallback = e10, this.processingActive = false, this.processingTimeout = null;
  }
  ui.prototype.addClick = function(e10) {
    var t10 = this.shadowDOMObserver && this.shadowDOMObserver.getEventTarget(e10);
    return t10 || (t10 = e10.target || e10.srcElement), !(!t10 || cR(t10)) && (this.shadowDOMObserver && this.shadowDOMObserver.observeFromEvent(e10), this.pendingClicks.push({ element: t10, event: e10, timestamp: Date.now() }), true);
  }, ui.prototype.trackClick = function(e10, t10) {
    if (!this.isTracking) return false;
    var r10 = this.addClick(e10);
    return r10 && this.triggerProcessing(t10), r10;
  }, ui.prototype.getDeadClicks = function(e10) {
    if (0 === this.pendingClicks.length) return [];
    var t10 = e10.timeout_ms, r10 = Date.now(), n10 = this.pendingClicks.slice();
    this.pendingClicks = [];
    for (var i10 = [], o10 = 0; o10 < n10.length; o10++) {
      var s10 = n10[o10];
      r10 - s10.timestamp >= t10 ? this.hasChangesAfter(s10.timestamp) || i10.push(s10) : this.pendingClicks.push(s10);
    }
    return i10;
  }, ui.prototype.hasChangesAfter = function(e10) {
    return this.lastChangeEventTimestamp >= e10 - 100;
  }, ui.prototype.recordChangeEvent = function() {
    this.lastChangeEventTimestamp = Date.now();
  }, ui.prototype.triggerProcessing = function(e10) {
    this.processingActive || (this.processingActive = true, this.processRecursively(e10));
  }, ui.prototype.processRecursively = function(e10) {
    if (!this.isTracking || !this.onDeadClickCallback) {
      this.processingActive = false;
      return;
    }
    var t10 = e10.timeout_ms, r10 = this;
    this.processingTimeout = setTimeout(function() {
      if (r10.processingActive) {
        for (var t11 = r10.getDeadClicks(e10), n10 = 0; n10 < t11.length; n10++) r10.onDeadClickCallback(t11[n10].event);
        r10.pendingClicks.length > 0 ? r10.processRecursively(e10) : r10.processingActive = false;
      }
    }, t10);
  }, ui.prototype.startTracking = function() {
    if (!this.isTracking) {
      this.isTracking = true;
      var e10 = this;
      ue.forEach(function(t11) {
        var r10 = function() {
          e10.recordChangeEvent();
        };
        document.addEventListener(t11, r10, { capture: true, passive: true }), e10.eventListeners.push({ target: document, event: t11, handler: r10, options: { capture: true, passive: true } });
      }), ur.forEach(function(t11) {
        var r10 = function() {
          e10.recordChangeEvent();
        };
        window.addEventListener(t11, r10), e10.eventListeners.push({ target: window, event: t11, handler: r10 });
      }), ut.forEach(function(t11) {
        var r10 = function() {
          e10.recordChangeEvent();
        };
        window.addEventListener(t11, r10, { passive: true }), e10.eventListeners.push({ target: window, event: t11, handler: r10, options: { passive: true } });
      });
      var t10 = function() {
        e10.recordChangeEvent();
      };
      if (document.addEventListener("selectionchange", t10), e10.eventListeners.push({ target: document, event: "selectionchange", handler: t10 }), window.MutationObserver) try {
        this.mutationObserver = new window.MutationObserver(function() {
          e10.recordChangeEvent();
        }), this.mutationObserver.observe(document.body || document.documentElement, un);
      } catch (e11) {
        cg.critical("Error while setting up mutation observer", e11);
      }
      if (window.customElements) try {
        this.shadowDOMObserver = new c7(function() {
          e10.recordChangeEvent();
        }, un), this.shadowDOMObserver.start();
      } catch (e11) {
        cg.critical("Error while setting up shadow DOM observer", e11), this.shadowDOMObserver = null;
      }
    }
  }, ui.prototype.stopTracking = function() {
    if (this.isTracking) {
      this.isTracking = false, this.pendingClicks = [], this.lastChangeEventTimestamp = 0, this.processingActive = false, this.processingTimeout && (clearTimeout(this.processingTimeout), this.processingTimeout = null);
      for (var e10 = 0; e10 < this.eventListeners.length; e10++) {
        var t10 = this.eventListeners[e10];
        try {
          t10.target.removeEventListener(t10.event, t10.handler, t10.options);
        } catch (e11) {
          cg.critical("Error while removing event listener", e11);
        }
      }
      if (this.eventListeners = [], this.mutationObserver) {
        try {
          this.mutationObserver.disconnect();
        } catch (e11) {
          cg.critical("Error while disconnecting mutation observer", e11);
        }
        this.mutationObserver = null;
      }
      if (this.shadowDOMObserver) {
        try {
          this.shadowDOMObserver.stop();
        } catch (e11) {
          cg.critical("Error while stopping shadow DOM observer", e11);
        }
        this.shadowDOMObserver = null;
      }
    }
  };
  var uo = "autocapture", us = "full-url", ua = "allow_selectors", uc = "allow_url_regexes", uu = "block_attrs", ul = "block_element_callback", up = "block_selectors", uh = "block_url_regexes", ud = "capture_extra_attrs", uf = "capture_text_content", ug = "scroll_capture_all", um = "scroll_depth_percent_checkpoints", uv = "click", uy = "dead_click", u_ = "input", ub = "pageview", uw = "rage_click", uk = "scroll", ux = "page_leave", uS = "submit", uC = {};
  uC[ua] = [], uC[uc] = [], uC[uu] = [], uC[ul] = null, uC[up] = [], uC[uh] = [], uC[ud] = [], uC[uf] = false, uC[ug] = false, uC[um] = [25, 50, 75, 100], uC[uv] = true, uC[uy] = true, uC[u_] = true, uC[ub] = us, uC[uw] = true, uC[uk] = true, uC[ux] = false, uC[uS] = true;
  var uM = { $mp_autocapture: true }, uI = "$mp_click", uO = "$mp_dead_click", uE = "$mp_rage_click", uR = function(e10) {
    this.mp = e10, this.maxScrollViewDepth = 0, this.hasTrackedScrollSession = false, this.previousScrollHeight = 0;
  };
  uR.prototype.init = function() {
    !(function() {
      try {
        return !!s3.createElement("div").matches;
      } catch (e10) {
        return false;
      }
    })() ? cg.critical("Autocapture unavailable: missing required DOM APIs") : (this.initPageListeners(), this.initPageviewTracking(), this.initClickTracking(), this.initDeadClickTracking(), this.initInputTracking(), this.initScrollTracking(), this.initSubmitTracking(), this.initRageClickTracking(), this.initPageLeaveTracking());
  }, uR.prototype.getFullConfig = function() {
    var e10 = this.mp.get_config(uo);
    return e10 ? an.isObject(e10) ? an.extend({}, uC, e10) : uC : {};
  }, uR.prototype.getConfig = function(e10) {
    return this.getFullConfig()[e10];
  }, uR.prototype.currentUrlBlocked = function() {
    var e10 = an.info.currentUrl(), t10 = this.getConfig(uc) || [];
    if (t10.length) try {
      return !aI(e10, t10);
    } catch (e11) {
      return cg.critical("Error while checking block URL regexes: ", e11), true;
    }
    var r10 = this.getConfig(uh) || [];
    if (!r10 || !r10.length) return false;
    try {
      return aI(e10, r10);
    } catch (e11) {
      return cg.critical("Error while checking block URL regexes: ", e11), true;
    }
  }, uR.prototype.pageviewTrackingConfig = function() {
    return this.mp.get_config(uo) ? this.getConfig(ub) : this.mp.get_config("track_pageview");
  }, uR.prototype.trackDomEvent = function(e10, t10) {
    if (!this.currentUrlBlocked()) {
      var r10 = this.mp.is_recording_heatmap_data() && (t10 === uI && !this.getConfig(uv) || t10 === uE && !this._getClickTrackingConfig(uw) || t10 === uO && !this._getClickTrackingConfig(uy)), n10 = (function(e11, t11) {
        var r11 = t11.allowElementCallback, n11 = t11.allowSelectors || [], i10 = t11.blockAttrs || [], o10 = t11.blockElementCallback, s10 = t11.blockSelectors || [], a10 = t11.captureTextContent || false, c10 = t11.captureExtraAttrs || [], u10 = t11.capturedForHeatMap || false, l2 = {};
        an.each(i10, function(e12) {
          l2[e12] = true;
        });
        var p2 = null, h2 = void 0 === e11.target ? e11.srcElement : e11.target;
        if (cS(h2) && (h2 = h2.parentNode), (function(e12, t12) {
          if (!e12 || cx(e12, "html") || !ck(e12)) return false;
          switch (e12.tagName.toLowerCase()) {
            case "form":
              return t12.type === ci;
            case "input":
              if (-1 === ["button", "submit"].indexOf(e12.getAttribute("type"))) return t12.type === a6;
              return t12.type === a4;
            case "select":
            case "textarea":
              return t12.type === a6;
            default:
              return t12.type === a4;
          }
        })(h2, e11) && cb(h2, e11, r11, n11) && !cw(h2, e11, o10, s10)) {
          for (var d2 = [h2], f2 = h2; f2.parentNode && !cx(f2, "body"); ) d2.push(f2.parentNode), f2 = f2.parentNode;
          var g2, m2 = [], v2 = false;
          if (an.each(d2, function(t12) {
            var i11 = cM(t12, e11, r11, n11);
            l2.href || "a" !== t12.tagName.toLowerCase() || (g2 = t12.getAttribute("href"), g2 = i11 && cI(g2) && g2), cw(t12, e11, o10, s10) && (v2 = true), m2.push(cy(t12, e11, l2, c10, r11, n11));
          }, this), !v2) {
            var y2 = s3.documentElement;
            if (p2 = { $event_type: e11.type, $host: se.location.host, $pathname: se.location.pathname, $elements: m2, $el_attr__href: g2, $viewportHeight: Math.max(y2.clientHeight, se.innerHeight || 0), $viewportWidth: Math.max(y2.clientWidth, se.innerWidth || 0), $pageHeight: s3.body.offsetHeight || 0, $pageWidth: s3.body.offsetWidth || 0 }, an.each(c10, function(e12) {
              if (!l2[e12] && h2.hasAttribute(e12)) {
                var t12 = h2.getAttribute(e12);
                cI(t12) && (p2["$el_attr__" + e12] = t12);
              }
            }), a10 && (_2 = c_(h2, e11, r11, n11)) && _2.length && (p2.$el_text = _2), e11.type === a4 && (an.each(cs, function(t12) {
              t12 in e11 && (p2["$" + t12] = e11[t12]);
            }), u10 && (p2.$captured_for_heatmap = true), h2 = (function(e12) {
              for (var t12 = e12.target, r12 = e12.composedPath(), n12 = 0; n12 < r12.length; n12++) {
                var i11 = r12[n12];
                if (cx(i11, "a") || cx(i11, "button") || cx(i11, "input") || cx(i11, "select") || i11.getAttribute && "button" === i11.getAttribute("role")) {
                  t12 = i11;
                  break;
                }
                if (i11 === t12) break;
              }
              return t12;
            })(e11)), a10) {
              var _2 = c_(h2, e11, r11, n11);
              _2 && _2.length && (p2.$el_text = _2);
            }
            if (h2) {
              if (!cb(h2, e11, r11, n11) || cw(h2, e11, o10, s10)) return null;
              var b2 = cy(h2, e11, l2, c10, r11, n11);
              p2.$target = b2, p2.$el_classes = b2.$classes, an.extend(p2, an.strip_empty_properties({ $el_id: b2.$id, $el_tag_name: b2.$tag_name }));
            }
          }
        }
        return p2;
      })(e10, { allowElementCallback: this.getConfig("allow_element_callback"), allowSelectors: this.getConfig(ua), blockAttrs: this.getConfig(uu), blockElementCallback: this.getConfig(ul), blockSelectors: this.getConfig(up), captureExtraAttrs: this.getConfig(ud), captureTextContent: this.getConfig(uf), capturedForHeatMap: r10 });
      n10 && (an.extend(n10, uM), this.mp.track(t10, n10));
    }
  }, uR.prototype.initPageListeners = function() {
    if (se.removeEventListener(ct, this.listenerPopstate), se.removeEventListener(a8, this.listenerHashchange), this.pageviewTrackingConfig() || this.getConfig(ux) || this.mp.get_config("record_heatmap_data")) {
      this.listenerPopstate = function() {
        se.dispatchEvent(new Event(ce));
      }, this.listenerHashchange = function() {
        se.dispatchEvent(new Event(ce));
      }, se.addEventListener(ct, this.listenerPopstate), se.addEventListener(a8, this.listenerHashchange);
      var e10 = se.history.pushState;
      "function" == typeof e10 && (se.history.pushState = function(t11, r10, n10) {
        e10.call(se.history, t11, r10, n10), se.dispatchEvent(new Event(ce));
      });
      var t10 = se.history.replaceState;
      "function" == typeof t10 && (se.history.replaceState = function(e11, r10, n10) {
        t10.call(se.history, e11, r10, n10), se.dispatchEvent(new Event(ce));
      });
    }
  }, uR.prototype._getClickTrackingConfig = function(e10) {
    var t10 = this.getConfig(e10);
    return t10 ? true === t10 ? {} : "object" == typeof t10 ? t10 : {} : null;
  }, uR.prototype._trackPageLeave = function(e10, t10, r10) {
    if (!this.hasTrackedScrollSession && (this.getConfig(ux) || this.mp.is_recording_heatmap_data())) {
      this.hasTrackedScrollSession = true;
      var n10 = Math.max(s3.documentElement.clientHeight, se.innerHeight || 0), i10 = Math.round(Math.max(this.maxScrollViewDepth - n10, 0) / (r10 - n10) * 100), o10 = Math.round(n10 / r10 * 100);
      r10 <= n10 && (i10 = 100, o10 = 100);
      var s10 = an.extend({ $max_scroll_view_depth: this.maxScrollViewDepth, $max_scroll_percentage: i10, $fold_line_percentage: o10, $scroll_height: r10, $event_type: e10.type, $current_url: t10 || an.info.currentUrl(), $viewportHeight: n10, $viewportWidth: Math.max(s3.documentElement.clientWidth, se.innerWidth || 0), $captured_for_heatmap: this.mp.is_recording_heatmap_data() }, uM);
      this.mp.track("$mp_page_leave", s10, { transport: "sendBeacon" });
    }
  }, uR.prototype._initScrollDepthTracking = function() {
    if (se.removeEventListener(cn, this.listenerScrollDepth), se.removeEventListener(cr, this.listenerScrollDepth), this.mp.get_config("record_heatmap_data")) {
      cg.log("Initializing scroll depth tracking"), this.maxScrollViewDepth = Math.max(s3.documentElement.clientHeight, se.innerHeight || 0);
      var e10 = cO((function() {
        if (!this.currentUrlBlocked()) {
          var e11 = Math.max(s3.documentElement.clientHeight, se.innerHeight || 0) + se.scrollY;
          e11 > this.maxScrollViewDepth && (this.maxScrollViewDepth = e11), this.previousScrollHeight = s3.body.scrollHeight;
        }
      }).bind(this));
      this.listenerScrollDepth = e10.listener, se.addEventListener(e10.eventType, this.listenerScrollDepth);
    }
  }, uR.prototype.initClickTracking = function() {
    se.removeEventListener(a4, this.listenerClick, true), (this.getConfig(uv) || this.mp.get_config("record_heatmap_data")) && (cg.log("Initializing click tracking"), this.listenerClick = (function(e10) {
      (this.getConfig(uv) || this.mp.is_recording_heatmap_data()) && this.trackDomEvent(e10, uI);
    }).bind(this), se.addEventListener(a4, this.listenerClick, true));
  }, uR.prototype.initDeadClickTracking = function() {
    this._getClickTrackingConfig(uy) || this.mp.get_config("record_heatmap_data") ? (cg.log("Initializing dead click tracking"), this._deadClickTracker || (this._deadClickTracker = new ui((function(e10) {
      this.trackDomEvent(e10, uO);
    }).bind(this)), this._deadClickTracker.startTracking()), this.listenerDeadClick || (this.listenerDeadClick = (function(e10) {
      var t10 = this._getClickTrackingConfig(uy);
      if ((t10 || this.mp.is_recording_heatmap_data()) && !this.currentUrlBlocked()) {
        var r10 = t10 || {};
        r10.timeout_ms || (r10.timeout_ms = 500), this._deadClickTracker.trackClick(e10, r10);
      }
    }).bind(this), se.addEventListener(a4, this.listenerDeadClick, true))) : this.stopDeadClickTracking();
  }, uR.prototype.initInputTracking = function() {
    se.removeEventListener(a6, this.listenerChange, true), this.getConfig(u_) && (cg.log("Initializing input tracking"), this.listenerChange = (function(e10) {
      this.getConfig(u_) && this.trackDomEvent(e10, "$mp_input_change");
    }).bind(this), se.addEventListener(a6, this.listenerChange, true));
  }, uR.prototype.initPageviewTracking = function() {
    if (se.removeEventListener(ce, this.listenerLocationchange), this.pageviewTrackingConfig() || this.mp.get_config("record_heatmap_data")) {
      cg.log("Initializing pageview tracking");
      var e10 = "", t10 = false;
      (this.pageviewTrackingConfig() || this.mp.is_recording_heatmap_data()) && !this.currentUrlBlocked() && (t10 = this.mp.track_pageview(uM)), t10 && (e10 = an.info.currentUrl()), this.listenerLocationchange = aa((function() {
        if (!this.currentUrlBlocked()) {
          var t11 = an.info.currentUrl(), r10 = false, n10 = t11.split("#")[0].split("?")[0] !== e10.split("#")[0].split("?")[0], i10 = this.pageviewTrackingConfig();
          !i10 && this.mp.is_recording_heatmap_data() && (i10 = us), i10 === us ? r10 = t11 !== e10 : "url-with-path-and-query-string" === i10 ? r10 = t11.split("#")[0] !== e10.split("#")[0] : "url-with-path" === i10 && (r10 = n10), r10 && (this.mp.track_pageview(uM) && (e10 = t11), n10 && (this.lastScrollCheckpoint = 0, cg.log("Path change: re-initializing scroll depth checkpoints")));
        }
      }).bind(this)), se.addEventListener(ce, this.listenerLocationchange);
    }
  }, uR.prototype.initRageClickTracking = function() {
    se.removeEventListener(a4, this.listenerRageClick, true), (this._getClickTrackingConfig(uw) || this.mp.get_config("record_heatmap_data")) && (cg.log("Initializing rage click tracking"), this._rageClickTracker || (this._rageClickTracker = new c8()), this.listenerRageClick = (function(e10) {
      var t10 = this._getClickTrackingConfig(uw);
      (t10 || this.mp.is_recording_heatmap_data()) && !this.currentUrlBlocked() && this._rageClickTracker.isRageClick(e10, t10) && this.trackDomEvent(e10, uE);
    }).bind(this), se.addEventListener(a4, this.listenerRageClick, true));
  }, uR.prototype.initScrollTracking = function() {
    if (se.removeEventListener(cr, this.listenerScroll), se.removeEventListener(cn, this.listenerScroll), this.getConfig(uk)) {
      cg.log("Initializing scroll tracking"), this.lastScrollCheckpoint = 0;
      var e10 = cO((function() {
        if (this.getConfig(uk) && !this.currentUrlBlocked()) {
          var e11 = this.getConfig(ug), t10 = (this.getConfig(um) || []).slice().sort(function(e12, t11) {
            return e12 - t11;
          }), r10 = se.scrollY, n10 = an.extend({ $scroll_top: r10 }, uM);
          try {
            var i10 = s3.body.scrollHeight, o10 = Math.round(r10 / (i10 - se.innerHeight) * 100);
            if (n10.$scroll_height = i10, n10.$scroll_percentage = o10, o10 > this.lastScrollCheckpoint) for (var s10 = 0; s10 < t10.length; s10++) {
              var a10 = t10[s10];
              o10 >= a10 && this.lastScrollCheckpoint < a10 && (n10.$scroll_checkpoint = a10, this.lastScrollCheckpoint = a10, e11 = true);
            }
          } catch (e12) {
            cg.critical("Error while calculating scroll percentage", e12);
          }
          e11 && this.mp.track("$mp_scroll", n10);
        }
      }).bind(this));
      this.listenerScroll = e10.listener, se.addEventListener(e10.eventType, this.listenerScroll);
    }
  }, uR.prototype.initSubmitTracking = function() {
    se.removeEventListener(ci, this.listenerSubmit, true), this.getConfig(uS) && (cg.log("Initializing submit tracking"), this.listenerSubmit = (function(e10) {
      this.getConfig(uS) && this.trackDomEvent(e10, "$mp_submit");
    }).bind(this), se.addEventListener(ci, this.listenerSubmit, true));
  }, uR.prototype.initPageLeaveTracking = function() {
    if (s3.removeEventListener(co, this.listenerPageLeaveVisibilitychange), se.removeEventListener(ce, this.listenerPageLeaveLocationchange), se.removeEventListener(a7, this.listenerPageLoad), this.getConfig(ux) || this.mp.get_config("record_heatmap_data")) {
      cg.log("Initializing page visibility tracking."), this._initScrollDepthTracking();
      var e10 = an.info.currentUrl();
      this.listenerPageLoad = (function() {
        this.previousScrollHeight = s3.body.scrollHeight;
      }).bind(this), se.addEventListener(a7, this.listenerPageLoad), this.listenerPageLeaveLocationchange = aa((function(t10) {
        if (!this.currentUrlBlocked()) {
          var r10 = an.info.currentUrl();
          r10 !== e10 && (this._trackPageLeave(t10, e10, this.previousScrollHeight), e10 = r10, this.maxScrollViewDepth = Math.max(s3.documentElement.clientHeight, se.innerHeight || 0), this.previousScrollHeight = s3.body.scrollHeight, this.hasTrackedScrollSession = false);
        }
      }).bind(this)), se.addEventListener(ce, this.listenerPageLeaveLocationchange), this.listenerPageLeaveVisibilitychange = (function(t10) {
        s3.hidden && this._trackPageLeave(t10, e10, this.previousScrollHeight);
      }).bind(this), s3.addEventListener(co, this.listenerPageLeaveVisibilitychange);
    }
  }, uR.prototype.stopDeadClickTracking = function() {
    this.listenerDeadClick && (se.removeEventListener(a4, this.listenerDeadClick, true), this.listenerDeadClick = null), this._deadClickTracker && (this._deadClickTracker.stopTracking(), this._deadClickTracker = null);
  }, ac(uR);
  var uA = function(e10, t10) {
    return se[S] && "function" == typeof se[S].then || (se[S] = new Promise(function(r10) {
      e10(t10, r10);
    }).then(function() {
      var e11 = se[S];
      if (e11 && "function" == typeof e11.then) return e11;
      throw Error("targeting failed to load");
    }).catch(function(e11) {
      throw delete se[S], e11;
    })), se[S];
  }, uT = as("flags"), uP = "mixpanelFlags", uD = { version: 1, storeNames: [uP] }, uL = Object.freeze({ NETWORK_ONLY: "networkOnly", NETWORK_FIRST: "networkFirst", PERSISTENCE_UNTIL_NETWORK_SUCCESS: "persistenceUntilNetworkSuccess" }), uF = [uL.NETWORK_ONLY, uL.NETWORK_FIRST, uL.PERSISTENCE_UNTIL_NETWORK_SUCCESS], uj = function(e10, t10, r10) {
    this.idb = new aA("mixpanelFlagsDb", uP, uD), this.persistenceConfig = e10, this.persistedVariantsKey = "persisted_variants_for_" + t10, this.isGloballyDisabled = r10 || function() {
      return false;
    };
  };
  uj.prototype.getPolicy = function() {
    return this.isGloballyDisabled() || !this._isConfigValid() ? uL.NETWORK_ONLY : this.persistenceConfig.variantLookupPolicy;
  }, uj.prototype.getTtlMs = function() {
    if (!this._isConfigValid()) return 864e5;
    var e10 = this.persistenceConfig.persistenceTtlMs;
    return null == e10 ? 864e5 : e10;
  }, uj.prototype._isConfigValid = function() {
    var e10 = this.persistenceConfig;
    return !!e10 && (-1 === uF.indexOf(e10.variantLookupPolicy) ? (uT.error("Invalid variantLookupPolicy:", e10.variantLookupPolicy), false) : void 0 === e10.persistenceTtlMs || null === e10.persistenceTtlMs || !(e10.persistenceTtlMs <= 0) || (uT.error("If provided, persistenceTtlMs must be a positive number. Provided value:", e10.persistenceTtlMs), false));
  }, uj.prototype.loadFlagsFromStorage = function(e10) {
    var t10 = an.bind(function() {
      return this.clear().then(function() {
        return null;
      }).catch(function() {
        return null;
      });
    }, this);
    if (this.getPolicy() === uL.NETWORK_ONLY) return t10();
    var r10 = this.getTtlMs();
    return this.idb.init().then(an.bind(function() {
      return this.idb.getItem(this.persistedVariantsKey);
    }, this)).then(an.bind(function(n10) {
      if (!n10) return uT.log("No persisted variants found in IndexedDB"), null;
      if (r10 && Date.now() - n10.persistedAt >= r10) return uT.log("Persisted variants are expiring"), null;
      if (!e10 || n10.distinctId !== e10.distinct_id) return uT.log("Persisted variants found, but for a different distinct_id so clearing."), t10();
      var i10 = /* @__PURE__ */ new Map();
      return an.each(n10.flagVariants, function(e11, t11) {
        i10.set(t11, { key: e11.variant_key, value: e11.variant_value, experiment_id: e11.experiment_id, is_experiment_active: e11.is_experiment_active, is_qa_tester: e11.is_qa_tester, variant_source: "persistence", persisted_at_in_ms: n10.persistedAt, ttl_in_ms: r10 });
      }), uT.log("Loaded", i10.size, "variants from IndexedDB for distinct_id", n10.distinctId), { flags: i10, pendingFirstTimeEvents: n10.pendingFirstTimeEvents || {}, persistedAtMs: n10.persistedAt, ttlMs: r10 };
    }, this)).catch(an.bind(function(e11) {
      return uT.error("Failed to load persisted variants from IndexedDB, so clearing", e11), t10();
    }, this));
  }, uj.prototype.save = function(e10, t10, r10) {
    if (this.getPolicy() === uL.NETWORK_ONLY) return Promise.resolve();
    var n10 = {};
    t10.forEach(function(e11, t11) {
      n10[t11] = { variant_key: e11.key, variant_value: e11.value, experiment_id: e11.experiment_id, is_experiment_active: e11.is_experiment_active, is_qa_tester: e11.is_qa_tester };
    });
    var i10 = { persistedAt: Date.now(), distinctId: e10 && e10.distinct_id, context: e10, flagVariants: n10, pendingFirstTimeEvents: r10 || {} };
    return this.idb.init().then(an.bind(function() {
      return this.idb.setItem(this.persistedVariantsKey, i10);
    }, this)).then(function() {
      uT.log("Saved", t10.size, "variants to IndexedDB for distinct_id", i10.distinctId);
    }).catch(function(e11) {
      uT.error("Failed to persist variants to IndexedDB:", e11);
    });
  }, uj.prototype.clear = function() {
    return this.isGloballyDisabled() ? Promise.resolve() : this.idb.init().then(an.bind(function() {
      return this.idb.removeItem(this.persistedVariantsKey);
    }, this)).then(function() {
      uT.log("Cleared persisted variants from IndexedDB");
    }).catch(function(e10) {
      uT.error("Failed to clear persisted variants from IndexedDB:", e10);
    });
  };
  var uN = as("flags"), uU = "flags", uB = "context", uz = {};
  uz[uB] = {};
  var uq = function(e10) {
    return an.isObject(e10) ? an.extend({}, e10, { variant_source: "fallback" }) : { value: e10, variant_source: "fallback" };
  }, uW = function(e10) {
    this.fetch = se.fetch, this.getFullApiRoute = e10.getFullApiRoute, this.getMpConfig = e10.getConfigFunc, this.setMpConfig = e10.setConfigFunc, this.getMpProperty = e10.getPropertyFunc, this.track = e10.trackingFunc, this.loadExtraBundle = e10.loadExtraBundle || function() {
    }, this.targetingSrc = e10.targetingSrc || "";
  };
  function uV(e10) {
    return null != e10;
  }
  uW.prototype.init = function() {
    return this.minApisSupported() ? (this.flags = null, this.trackedFeatures = /* @__PURE__ */ new Set(), this.pendingFirstTimeEvents = {}, this.activatedFirstTimeEvents = {}, this._loadedPersistedAtMs = null, this._loadedTtlMs = null, this.persistence = new uj(this.getConfig("persistence"), this.getMpConfig("token"), an.bind(function() {
      return this.getMpConfig("disable_persistence");
    }, this)), this.persistenceLoadedPromise = this.persistence.loadFlagsFromStorage(this._buildContext()).then(an.bind(function(e10) {
      e10 && (this.flags = e10.flags, this.pendingFirstTimeEvents = e10.pendingFirstTimeEvents, this._loadedPersistedAtMs = e10.persistedAtMs, this._loadedTtlMs = e10.ttlMs);
    }, this)), this.persistenceLoadedPromise.then(an.bind(function() {
      return this.fetchFlags();
    }, this)).catch(function() {
      uN.error("Error initializing feature flags");
    })) : void uN.critical("Feature Flags unavailable: missing minimum required APIs");
  }, uW.prototype._buildContext = function() {
    return an.extend({ distinct_id: this.getMpProperty("distinct_id"), device_id: this.getMpProperty("$device_id") }, this.getConfig(uB));
  }, uW.prototype.reset = function() {
    return this.persistence ? (this.flags = null, this.pendingFirstTimeEvents = {}, this.activatedFirstTimeEvents = {}, this.trackedFeatures = /* @__PURE__ */ new Set(), this.fetchPromise = null, this._fetchInProgressStartTime = null, this._loadedPersistedAtMs = null, this._loadedTtlMs = null, this.persistence.clear().then(an.bind(function() {
      return this.fetchFlags();
    }, this)).catch(function() {
      uN.error("Error during flags reset");
    })) : Promise.resolve();
  }, uW.prototype.getFullConfig = function() {
    var e10 = this.getMpConfig(uU);
    return e10 ? an.isObject(e10) ? an.extend({}, uz, e10) : uz : {};
  }, uW.prototype.getConfig = function(e10) {
    return this.getFullConfig()[e10];
  }, uW.prototype.isSystemEnabled = function() {
    return !!this.getMpConfig(uU);
  }, uW.prototype.updateContext = function(e10, t10) {
    if (!this.isSystemEnabled()) return uN.critical("Feature Flags not enabled, cannot update context"), Promise.resolve();
    var r10 = this.getMpConfig(uU);
    an.isObject(r10) || (r10 = {});
    var n10 = t10 && t10.replace ? {} : this.getConfig(uB);
    r10[uB] = an.extend({}, n10, e10);
    var i10 = {};
    return i10[uU] = r10, this.setMpConfig(i10), this.fetchFlags().catch(function() {
      uN.error("Error fetching flags during updateContext");
    });
  }, uW.prototype.areFlagsReady = function() {
    return this.isSystemEnabled() || uN.error("Feature Flags not enabled"), !!this.flags;
  }, uW.prototype.fetchFlags = function() {
    if (!this.isSystemEnabled()) return Promise.resolve();
    var e10 = this._buildContext(), t10 = e10.distinct_id, r10 = aw();
    uN.log("Fetching flags for distinct ID: " + t10);
    var n10 = new URLSearchParams();
    n10.set("context", JSON.stringify(e10)), n10.set("token", this.getMpConfig("token")), n10.set("mp_lib", "web"), n10.set("$lib_version", x.LIB_VERSION);
    var i10 = this.getFullApiRoute() + "?" + n10.toString();
    return this._fetchInProgressStartTime = Date.now(), this.fetchPromise = this.fetch.call(se, i10, { method: "GET", headers: { Authorization: "Basic " + btoa(this.getMpConfig("token") + ":"), traceparent: r10 } }).then((function(e11) {
      return this.markFetchComplete(), e11.json();
    }).bind(this)).then((function(t11) {
      var n11 = t11.flags;
      if (!n11) throw Error("No flags in API response");
      var i11 = /* @__PURE__ */ new Map(), o10 = {};
      an.each(n11, function(e11, t12) {
        var r11 = false, n12 = t12 + ":";
        if (an.each(this.activatedFirstTimeEvents, function(e12, t13) {
          t13.startsWith(n12) && (r11 = true);
        }), r11) {
          var o11 = this.flags && this.flags.get(t12);
          o11 && i11.set(t12, o11);
        } else i11.set(t12, { key: e11.variant_key, value: e11.variant_value, experiment_id: e11.experiment_id, is_experiment_active: e11.is_experiment_active, is_qa_tester: e11.is_qa_tester, variant_source: "network" });
      }, this);
      var s10 = t11.pending_first_time_events;
      s10 && s10.length > 0 && an.each(s10, function(e11) {
        var t12 = e11.flag_key, r11 = t12 + ":" + e11.first_time_event_hash;
        this.activatedFirstTimeEvents[r11] || (o10[r11] = { flag_key: t12, flag_id: e11.flag_id, project_id: e11.project_id, first_time_event_hash: e11.first_time_event_hash, event_name: e11.event_name, property_filters: e11.property_filters, pending_variant: e11.pending_variant });
      }, this), this.activatedFirstTimeEvents && an.each(this.activatedFirstTimeEvents, function(e11, t12) {
        var r11 = t12.split(":")[0];
        e11 && !i11.has(r11) && this.flags && this.flags.has(r11) && i11.set(r11, this.flags.get(r11));
      }, this), this.flags = i11, this.trackedFeatures = /* @__PURE__ */ new Set(), this.pendingFirstTimeEvents = o10, this._loadedPersistedAtMs = null, this._loadedTtlMs = null, this._traceparent = r10, this._loadTargetingIfNeeded(), this.persistence.save(e10, this.flags, this.pendingFirstTimeEvents);
    }).bind(this)).catch((function(e11) {
      throw this._fetchInProgressStartTime && this.markFetchComplete(), uN.error(e11), e11;
    }).bind(this)), this.fetchPromise;
  }, uW.prototype.loadFlags = function() {
    return this.isSystemEnabled() ? this.trackedFeatures ? this._fetchInProgressStartTime ? this.fetchPromise : this.fetchFlags() : (uN.error("loadFlags called before init"), Promise.resolve()) : Promise.resolve();
  }, uW.prototype.markFetchComplete = function() {
    this._fetchInProgressStartTime ? (this._fetchStartTime = this._fetchInProgressStartTime, this._fetchCompleteTime = Date.now(), this._fetchLatency = this._fetchCompleteTime - this._fetchStartTime, this._fetchInProgressStartTime = null) : uN.error("Fetch in progress started time not set, cannot mark fetch complete");
  }, uW.prototype._loadTargetingIfNeeded = function() {
    var e10 = false;
    an.each(this.pendingFirstTimeEvents, function(t10) {
      t10.property_filters && !an.isEmptyObject(t10.property_filters) && (e10 = true);
    }), e10 && this.getTargeting().then(function() {
      uN.log("targeting loaded for property filter evaluation");
    });
  }, uW.prototype.getTargeting = function() {
    return uA(this.loadExtraBundle.bind(this), this.targetingSrc).catch((function(e10) {
      uN.error("Failed to load targeting: " + e10);
    }).bind(this));
  }, uW.prototype.checkFirstTimeEvents = function(e10, t10) {
    !this.pendingFirstTimeEvents || an.isEmptyObject(this.pendingFirstTimeEvents) || (se[S] && an.isFunction(se[S].then) ? se[S].then((function(r10) {
      this._processFirstTimeEventCheck(e10, t10, r10);
    }).bind(this)).catch((function() {
      this._processFirstTimeEventCheck(e10, t10, null);
    }).bind(this)) : this._processFirstTimeEventCheck(e10, t10, null));
  }, uW.prototype._processFirstTimeEventCheck = function(e10, t10, r10) {
    an.each(this.pendingFirstTimeEvents, function(n10, i10) {
      if (!this.activatedFirstTimeEvents[i10]) {
        var o10, s10 = n10.flag_key;
        if (!r10 && n10.property_filters && !an.isEmptyObject(n10.property_filters)) return void uN.warn('Skipping event check for "' + s10 + '" - property filters require targeting library');
        if (r10) {
          var a10 = { event_name: n10.event_name, property_filters: n10.property_filters };
          o10 = r10.eventMatchesCriteria(e10, t10, a10);
        } else o10 = { matches: e10 === n10.event_name, error: null };
        if (o10.error) return void uN.error('Error checking first-time event for flag "' + s10 + '": ' + o10.error);
        if (o10.matches) {
          uN.log('First-time event matched for flag "' + s10 + '": ' + e10);
          var c10 = { key: n10.pending_variant.variant_key, value: n10.pending_variant.variant_value, experiment_id: n10.pending_variant.experiment_id, is_experiment_active: n10.pending_variant.is_experiment_active };
          this.flags.set(s10, c10), this.trackedFeatures.delete(s10), this.activatedFirstTimeEvents[i10] = true, this.recordFirstTimeEvent(n10.flag_id, n10.project_id, n10.first_time_event_hash);
        }
      }
    }, this);
  }, uW.prototype.getFirstTimeEventApiRoute = function(e10) {
    return this.getFullApiRoute().replace(/\/$/, "") + "/" + e10 + "/first-time-events";
  }, uW.prototype.recordFirstTimeEvent = function(e10, t10, r10) {
    var n10 = this.getMpProperty("distinct_id"), i10 = aw(), o10 = new URLSearchParams();
    o10.set("mp_lib", "web"), o10.set("$lib_version", x.LIB_VERSION);
    var s10 = this.getFirstTimeEventApiRoute(e10) + "?" + o10.toString();
    uN.log("Recording first-time event for flag: " + e10), this.fetch.call(se, s10, { method: "POST", headers: { "Content-Type": "application/json", Authorization: "Basic " + btoa(this.getMpConfig("token") + ":"), traceparent: i10 }, body: JSON.stringify({ distinct_id: n10, project_id: t10, first_time_event_hash: r10 }) }).catch(function(t11) {
      uN.error("Failed to record first-time event for flag " + e10 + ": " + t11);
    });
  }, uW.prototype.getVariant = function(e10, t10) {
    if (!this.persistenceLoadedPromise) return new Promise(function(e11) {
      uN.critical("Feature Flags not initialized"), e11(uq(t10));
    });
    var r10 = this.persistence.getPolicy();
    return this.persistenceLoadedPromise.then(an.bind(function() {
      if (r10 === uL.PERSISTENCE_UNTIL_NETWORK_SUCCESS) return this.areFlagsReady() && !this._loadedPersistenceIsStale() ? this.getVariantSync(e10, t10) : this.fetchPromise ? this.fetchPromise.then(an.bind(function() {
        return this.getVariantSync(e10, t10);
      }, this)).catch(function(e11) {
        return uN.error(e11), uq(t10);
      }) : uq(t10);
      var n10 = an.bind(function() {
        return this.getVariantSync(e10, t10);
      }, this);
      return this.fetchPromise ? this.fetchPromise.then(n10).catch(n10) : uq(t10);
    }, this));
  }, uW.prototype._loadedPersistenceIsStale = function() {
    return !!this._loadedPersistedAtMs && !!this._loadedTtlMs && Date.now() - this._loadedPersistedAtMs >= this._loadedTtlMs;
  }, uW.prototype.getVariantSync = function(e10, t10) {
    if (this._loadedPersistenceIsStale()) return uN.log('Loaded persisted variants are past TTL so returning fallback for "' + e10 + '"'), uq(t10);
    if (!this.areFlagsReady()) return uN.log("Flags not loaded yet"), uq(t10);
    var r10 = this.flags.get(e10);
    return r10 ? (this.trackFeatureCheck(e10, r10), r10) : (uN.log('No flag found: "' + e10 + '"'), uq(t10));
  }, uW.prototype.getAllVariants = function() {
    if (!this.persistenceLoadedPromise) return uN.critical("Feature Flags not initialized"), Promise.resolve(/* @__PURE__ */ new Map());
    var e10 = this.persistence.getPolicy();
    return this.persistenceLoadedPromise.then(an.bind(function() {
      if (e10 === uL.PERSISTENCE_UNTIL_NETWORK_SUCCESS) return this.areFlagsReady() && !this._loadedPersistenceIsStale() ? this.getAllVariantsSync() : this.fetchPromise ? this.fetchPromise.then(an.bind(function() {
        return this.getAllVariantsSync();
      }, this)).catch(function(e11) {
        return uN.error(e11), /* @__PURE__ */ new Map();
      }) : /* @__PURE__ */ new Map();
      var t10 = an.bind(this.getAllVariantsSync, this);
      return this.fetchPromise ? this.fetchPromise.then(t10).catch(t10) : /* @__PURE__ */ new Map();
    }, this));
  }, uW.prototype.getAllVariantsSync = function() {
    return this._loadedPersistenceIsStale() ? (uN.log("Loaded persisted variants are past TTL so returning empty Map"), /* @__PURE__ */ new Map()) : this.flags || /* @__PURE__ */ new Map();
  }, uW.prototype.getVariantValue = function(e10, t10) {
    return this.getVariant(e10, { value: t10 }).then(function(e11) {
      return e11.value;
    }).catch(function(e11) {
      return uN.error(e11), t10;
    });
  }, uW.prototype.getFeatureData = function(e10, t10) {
    return uN.critical("mixpanel.flags.get_feature_data() is deprecated and will be removed in a future release. Use mixpanel.flags.get_variant_value() instead."), this.getVariantValue(e10, t10);
  }, uW.prototype.getVariantValueSync = function(e10, t10) {
    return this.getVariantSync(e10, { value: t10 }).value;
  }, uW.prototype.isEnabled = function(e10, t10) {
    return this.getVariantValue(e10).then((function() {
      return this.isEnabledSync(e10, t10);
    }).bind(this)).catch(function(e11) {
      return uN.error(e11), t10;
    });
  }, uW.prototype.isEnabledSync = function(e10, t10) {
    t10 = t10 || false;
    var r10 = this.getVariantValueSync(e10, t10);
    return true !== r10 && false !== r10 && (uN.error('Feature flag "' + e10 + '" value: ' + r10 + " is not a boolean; returning fallback value: " + t10), r10 = t10), r10;
  }, uW.prototype.trackFeatureCheck = function(e10, t10) {
    if (!this.trackedFeatures.has(e10)) {
      this.trackedFeatures.add(e10);
      var r10 = { "Experiment name": e10, "Variant name": t10.key, $experiment_type: "feature_flag", "Variant fetch start time": uV(this._fetchStartTime) ? new Date(this._fetchStartTime).toISOString() : null, "Variant fetch complete time": uV(this._fetchCompleteTime) ? new Date(this._fetchCompleteTime).toISOString() : null, "Variant fetch latency (ms)": this._fetchLatency, "Variant fetch traceparent": this._traceparent };
      uV(t10.experiment_id) && (r10.$experiment_id = t10.experiment_id), uV(t10.is_experiment_active) && (r10.$is_experiment_active = t10.is_experiment_active), uV(t10.is_qa_tester) && (r10.$is_qa_tester = t10.is_qa_tester), uV(t10.variant_source) && (r10.$variant_source = t10.variant_source), uV(t10.persisted_at_in_ms) && (r10.$persisted_at_in_ms = t10.persisted_at_in_ms), uV(t10.ttl_in_ms) && (r10.$ttl_in_ms = t10.ttl_in_ms), this.track("$experiment_started", r10);
    }
  }, uW.prototype.whenReady = function() {
    return this.fetchPromise ? this.fetchPromise : Promise.resolve();
  }, uW.prototype.minApisSupported = function() {
    return !!this.fetch && "u" > typeof Promise && "u" > typeof Map && "u" > typeof Set;
  }, ac(uW), uW.prototype.are_flags_ready = uW.prototype.areFlagsReady, uW.prototype.get_variant = uW.prototype.getVariant, uW.prototype.get_variant_sync = uW.prototype.getVariantSync, uW.prototype.get_all_variants = uW.prototype.getAllVariants, uW.prototype.get_all_variants_sync = uW.prototype.getAllVariantsSync, uW.prototype.get_variant_value = uW.prototype.getVariantValue, uW.prototype.get_variant_value_sync = uW.prototype.getVariantValueSync, uW.prototype.is_enabled = uW.prototype.isEnabled, uW.prototype.is_enabled_sync = uW.prototype.isEnabledSync, uW.prototype.load_flags = uW.prototype.loadFlags, uW.prototype.update_context = uW.prototype.updateContext, uW.prototype.when_ready = uW.prototype.whenReady, uW.prototype.get_feature_data = uW.prototype.getFeatureData, uW.prototype.getTargeting = uW.prototype.getTargeting;
  var u$ = as("recorder"), uG = "mp_iframe_handshake_request", uH = "mp_iframe_handshake_response", uK = function(e10) {
    this.mixpanelInstance = e10.mixpanelInstance, this.getMpConfig = e10.getConfigFunc, this.getTabId = e10.getTabIdFunc, this.reportError = e10.reportErrorFunc, this.getDistinctId = e10.getDistinctIdFunc, this.loadExtraBundle = e10.loadExtraBundle, this.recorderSrc = e10.recorderSrc, this.targetingSrc = e10.targetingSrc, this.libBasePath = e10.libBasePath, this._recorder = null, this._parentReplayId = null, this._parentFrameRetryInterval = null;
  };
  uK.prototype.shouldLoadRecorder = function() {
    if (this.getMpConfig("disable_persistence")) return ai.log("Load recorder check skipped due to disable_persistence config"), g.resolve(false);
    var e10 = new aA(aT, aD, aL), t10 = this.getTabId();
    return e10.init().then(function() {
      return e10.getAll();
    }).then(function(e11) {
      for (var r10 = 0; r10 < e11.length; r10++) if (a5(e11[r10]) || e11[r10].tabId === t10) return true;
      return false;
    }).catch(an.bind(function(e11) {
      return this.reportError("Error checking recording registry", e11), false;
    }, this));
  }, uK.prototype.checkAndStartSessionRecording = function(e10, t10) {
    if (!se.MutationObserver) return ai.critical("Browser does not support MutationObserver; skipping session recording"), g.resolve();
    var r10 = an.bind(function(e11) {
      return new g(an.bind(function(t11) {
        var r11 = aa(an.bind(function() {
          this._recorder = this._recorder || new se[C](this.mixpanelInstance), this._recorder.resumeRecording(e11), t11();
        }, this));
        if (an.isUndefined(se[C])) {
          var n11 = this.recorderSrc || this.libBasePath + "__MP_RECORDER_FILENAME__";
          this.loadExtraBundle(n11, r11);
        } else r11();
      }, this));
    }, this), n10 = a9(this.getMpConfig("record_allowed_iframe_origins"), u$);
    if (n10.length > 0 && (this._setupParentFrameListener(n10), se.parent !== se)) return this._setupChildFrameListener(n10, r10), this._sendParentFrameRequestWithRetry(n10), g.resolve();
    var i10 = an.isUndefined(t10) ? this.getMpConfig("record_sessions_percent") : t10, o10 = i10 > 0 && 100 * Math.random() <= i10;
    return e10 || o10 ? r10(true) : this.shouldLoadRecorder().then(an.bind(function(e11) {
      return e11 ? r10(false) : g.resolve();
    }, this));
  }, uK.prototype.isRecording = function() {
    if (!this._recorder || !an.isFunction(this._recorder.isRecording)) return false;
    try {
      return this._recorder.isRecording();
    } catch (e10) {
      return this.reportError("Error checking if recording is active", e10), false;
    }
  }, uK.prototype.startRecordingOnEvent = function(e10, t10) {
    var r10 = this.isRecording(), n10 = this.getMpConfig("recording_event_triggers");
    if (!r10 && n10) {
      var i10 = n10[e10];
      if (i10 && "number" == typeof i10.percentage) {
        var o10 = i10.percentage, s10 = i10.property_filters;
        if (s10 && !an.isEmptyObject(s10)) {
          var a10 = this.targetingSrc || this.libBasePath + M;
          uA(this.loadExtraBundle, a10).then((function(r11) {
            try {
              r11.eventMatchesCriteria(e10, t10, { event_name: e10, property_filters: s10 }).matches && this.checkAndStartSessionRecording(false, o10);
            } catch (e11) {
              ai.critical("Could not parse recording event trigger properties logic:", e11);
            }
          }).bind(this)).catch(function(e11) {
            ai.critical("Failed to load targeting library:", e11);
          });
        } else this.checkAndStartSessionRecording(false, o10);
      }
    }
  }, uK.prototype.stopSessionRecording = function() {
    return this._recorder ? this._recorder.stopRecording() : g.resolve();
  }, uK.prototype.pauseSessionRecording = function() {
    return this._recorder ? this._recorder.pauseRecording() : g.resolve();
  }, uK.prototype.resumeSessionRecording = function() {
    return this._recorder ? this._recorder.resumeRecording() : g.resolve();
  }, uK.prototype.isRecordingHeatmapData = function() {
    return this.getSessionReplayId() && this.getMpConfig("record_heatmap_data");
  }, uK.prototype.getSessionRecordingProperties = function() {
    var e10 = {}, t10 = this.getSessionReplayId();
    return t10 && (e10.$mp_replay_id = t10), e10;
  }, uK.prototype.getSessionReplayUrl = function() {
    var e10 = null, t10 = this.getSessionReplayId();
    return t10 && (e10 = "https://mixpanel.com/projects/replay-redirect?" + an.HTTPBuildQuery({ replay_id: t10, distinct_id: this.getDistinctId(), token: this.getMpConfig("token") })), e10;
  }, uK.prototype.getSessionReplayId = function() {
    if (this._parentReplayId) return this._parentReplayId;
    var e10 = null;
    return this._recorder && (e10 = this._recorder.replayId), e10 || null;
  }, uK.prototype.getRecorder = function() {
    return this._recorder;
  }, uK.prototype._setupChildFrameListener = function(e10, t10) {
    if (!this._childFrameMessageHandler) {
      var r10 = this;
      this._childFrameMessageHandler = function(n10) {
        if (-1 !== e10.indexOf(n10.origin)) {
          var i10 = n10.data;
          i10 && i10.type === uH && i10.token === r10.getMpConfig("token") && i10.replayId && (r10._parentReplayId = i10.replayId, i10.distinctId && r10.mixpanelInstance.identify(i10.distinctId), r10._parentFrameRetryActive = false, se.removeEventListener("message", r10._childFrameMessageHandler), r10._childFrameMessageHandler = null, t10(true));
        }
      }, se.addEventListener("message", this._childFrameMessageHandler);
    }
  }, uK.prototype._sendParentFrameRequest = function(e10) {
    var t10 = {};
    t10.type = uG, t10.token = this.getMpConfig("token");
    for (var r10 = 0; r10 < e10.length; r10++) try {
      se.parent.postMessage(t10, e10[r10]);
    } catch (e11) {
    }
  }, uK.prototype._sendParentFrameRequestWithRetry = function(e10) {
    var t10 = this, r10 = 0, n10 = 50;
    this._parentFrameRetryActive = true, this._sendParentFrameRequest(e10), !(function i10() {
      setTimeout(function() {
        !t10._parentFrameRetryActive || t10._parentReplayId || ++r10 >= 10 || (t10._sendParentFrameRequest(e10), n10 *= 2, i10());
      }, n10);
    })();
  }, uK.prototype._setupParentFrameListener = function(e10) {
    if (!this._parentFrameMessageHandler) {
      var t10 = this;
      this._parentFrameMessageHandler = function(r10) {
        if (-1 !== e10.indexOf(r10.origin)) {
          var n10 = r10.data;
          if (n10 && n10.type === uG && n10.token === t10.getMpConfig("token")) {
            var i10 = t10.getSessionReplayId();
            if (i10) {
              var o10 = {};
              o10.type = uH, o10.token = t10.getMpConfig("token"), o10.replayId = i10, o10.distinctId = t10.getDistinctId(), r10.source.postMessage(o10, r10.origin);
            }
          }
        }
      }, se.addEventListener("message", this._parentFrameMessageHandler);
    }
  }, ac(uK);
  var uY = function() {
  };
  uY.prototype.create_properties = function() {
  }, uY.prototype.event_handler = function() {
  }, uY.prototype.after_track_handler = function() {
  }, uY.prototype.init = function(e10) {
    return this.mp = e10, this;
  }, uY.prototype.track = function(e10, t10, r10, n10) {
    var i10 = this, o10 = an.dom_query(e10);
    return 0 === o10.length ? void ai.error("The DOM query (" + e10 + ") returned 0 elements") : (an.each(o10, function(e11) {
      an.register_event(e11, this.override_event, function(e12) {
        var o11 = {}, s10 = i10.create_properties(r10, this), a10 = i10.mp.get_config("track_links_timeout");
        i10.event_handler(e12, this, o11), window.setTimeout(i10.track_callback(n10, s10, o11, true), a10), i10.mp.track(t10, s10, i10.track_callback(n10, s10, o11));
      });
    }, this), true);
  }, uY.prototype.track_callback = function(e10, t10, r10, n10) {
    n10 = n10 || false;
    var i10 = this;
    return function() {
      r10.callback_fired || (r10.callback_fired = true, e10 && false === e10(n10, t10) || i10.after_track_handler(t10, r10, n10));
    };
  }, uY.prototype.create_properties = function(e10, t10) {
    return "function" == typeof e10 ? e10(t10) : an.extend({}, e10);
  };
  var uJ = function() {
    this.override_event = "click";
  };
  an.inherit(uJ, uY), uJ.prototype.create_properties = function(e10, t10) {
    var r10 = uJ.superclass.create_properties.apply(this, arguments);
    return t10.href && (r10.url = t10.href), r10;
  }, uJ.prototype.event_handler = function(e10, t10, r10) {
    r10.new_tab = 2 === e10.which || e10.metaKey || e10.ctrlKey || "_blank" === t10.target, r10.href = t10.href, r10.new_tab || e10.preventDefault();
  }, uJ.prototype.after_track_handler = function(e10, t10) {
    t10.new_tab || setTimeout(function() {
      window.location = t10.href;
    }, 0);
  };
  var uZ = function() {
    this.override_event = "submit";
  };
  an.inherit(uZ, uY), uZ.prototype.event_handler = function(e10, t10, r10) {
    r10.element = t10, e10.preventDefault();
  }, uZ.prototype.after_track_handler = function(e10, t10) {
    setTimeout(function() {
      t10.element.submit();
    }, 0);
  };
  var uX = "$set", uQ = "$set_once", u0 = "$unset", u1 = "$add", u2 = "$append", u3 = "$union", u5 = "$remove", u9 = { set_action: function(e10, t10) {
    var r10 = {}, n10 = {};
    return an.isObject(e10) ? an.each(e10, function(e11, t11) {
      this._is_reserved_property(t11) || (n10[t11] = e11);
    }, this) : n10[e10] = t10, r10[uX] = n10, r10;
  }, unset_action: function(e10) {
    var t10 = {}, r10 = [];
    return an.isArray(e10) || (e10 = [e10]), an.each(e10, function(e11) {
      this._is_reserved_property(e11) || r10.push(e11);
    }, this), t10[u0] = r10, t10;
  }, set_once_action: function(e10, t10) {
    var r10 = {}, n10 = {};
    return an.isObject(e10) ? an.each(e10, function(e11, t11) {
      this._is_reserved_property(t11) || (n10[t11] = e11);
    }, this) : n10[e10] = t10, r10[uQ] = n10, r10;
  }, union_action: function(e10, t10) {
    var r10 = {}, n10 = {};
    return an.isObject(e10) ? an.each(e10, function(e11, t11) {
      this._is_reserved_property(t11) || (n10[t11] = an.isArray(e11) ? e11 : [e11]);
    }, this) : n10[e10] = an.isArray(t10) ? t10 : [t10], r10[u3] = n10, r10;
  }, append_action: function(e10, t10) {
    var r10 = {}, n10 = {};
    return an.isObject(e10) ? an.each(e10, function(e11, t11) {
      this._is_reserved_property(t11) || (n10[t11] = e11);
    }, this) : n10[e10] = t10, r10[u2] = n10, r10;
  }, remove_action: function(e10, t10) {
    var r10 = {}, n10 = {};
    return an.isObject(e10) ? an.each(e10, function(e11, t11) {
      this._is_reserved_property(t11) || (n10[t11] = e11);
    }, this) : n10[e10] = t10, r10[u5] = n10, r10;
  }, delete_action: function() {
    var e10 = {};
    return e10.$delete = "", e10;
  } }, u6 = function() {
  };
  an.extend(u6.prototype, u9), u6.prototype._init = function(e10, t10, r10) {
    this._mixpanel = e10, this._group_key = t10, this._group_id = r10;
  }, u6.prototype.set = aq(function(e10, t10, r10) {
    var n10 = this.set_action(e10, t10);
    return an.isObject(e10) && (r10 = t10), this._send_request(n10, r10);
  }), u6.prototype.set_once = aq(function(e10, t10, r10) {
    var n10 = this.set_once_action(e10, t10);
    return an.isObject(e10) && (r10 = t10), this._send_request(n10, r10);
  }), u6.prototype.unset = aq(function(e10, t10) {
    var r10 = this.unset_action(e10);
    return this._send_request(r10, t10);
  }), u6.prototype.union = aq(function(e10, t10, r10) {
    an.isObject(e10) && (r10 = t10);
    var n10 = this.union_action(e10, t10);
    return this._send_request(n10, r10);
  }), u6.prototype.delete = aq(function(e10) {
    var t10 = this.delete_action();
    return this._send_request(t10, e10);
  }), u6.prototype.remove = aq(function(e10, t10, r10) {
    var n10 = this.remove_action(e10, t10);
    return this._send_request(n10, r10);
  }), u6.prototype._send_request = function(e10, t10) {
    e10.$group_key = this._group_key, e10.$group_id = this._group_id, e10.$token = this._get_config("token");
    var r10 = an.encodeDates(e10);
    return this._mixpanel._track_or_batch({ type: "groups", data: r10, endpoint: this._mixpanel.get_api_host("groups") + "/" + this._get_config("api_routes").groups, batcher: this._mixpanel.request_batchers.groups }, t10);
  }, u6.prototype._is_reserved_property = function(e10) {
    return "$group_key" === e10 || "$group_id" === e10;
  }, u6.prototype._get_config = function(e10) {
    return this._mixpanel.get_config(e10);
  }, u6.prototype.toString = function() {
    return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id;
  }, u6.prototype.remove = u6.prototype.remove, u6.prototype.set = u6.prototype.set, u6.prototype.set_once = u6.prototype.set_once, u6.prototype.union = u6.prototype.union, u6.prototype.unset = u6.prototype.unset, u6.prototype.toString = u6.prototype.toString;
  var u4 = function() {
  };
  an.extend(u4.prototype, u9), u4.prototype._init = function(e10) {
    this._mixpanel = e10;
  }, u4.prototype.set = az(function(e10, t10, r10) {
    var n10 = this.set_action(e10, t10);
    return an.isObject(e10) && (r10 = t10), this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer), n10[uX] = an.extend({}, an.info.people_properties(), n10[uX]), this._send_request(n10, r10);
  }), u4.prototype.set_once = az(function(e10, t10, r10) {
    var n10 = this.set_once_action(e10, t10);
    return an.isObject(e10) && (r10 = t10), this._send_request(n10, r10);
  }), u4.prototype.unset = az(function(e10, t10) {
    var r10 = this.unset_action(e10);
    return this._send_request(r10, t10);
  }), u4.prototype.increment = az(function(e10, t10, r10) {
    var n10 = {}, i10 = {};
    return an.isObject(e10) ? (an.each(e10, function(e11, t11) {
      if (!this._is_reserved_property(t11)) if (isNaN(parseFloat(e11))) return void ai.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
      else i10[t11] = e11;
    }, this), r10 = t10) : (an.isUndefined(t10) && (t10 = 1), i10[e10] = t10), n10[u1] = i10, this._send_request(n10, r10);
  }), u4.prototype.append = az(function(e10, t10, r10) {
    an.isObject(e10) && (r10 = t10);
    var n10 = this.append_action(e10, t10);
    return this._send_request(n10, r10);
  }), u4.prototype.remove = az(function(e10, t10, r10) {
    an.isObject(e10) && (r10 = t10);
    var n10 = this.remove_action(e10, t10);
    return this._send_request(n10, r10);
  }), u4.prototype.union = az(function(e10, t10, r10) {
    an.isObject(e10) && (r10 = t10);
    var n10 = this.union_action(e10, t10);
    return this._send_request(n10, r10);
  }), u4.prototype.track_charge = az(function() {
    ai.error("mixpanel.people.track_charge() is deprecated and no longer has any effect.");
  }), u4.prototype.clear_charges = function(e10) {
    return this.set("$transactions", [], e10);
  }, u4.prototype.delete_user = function() {
    if (!this._identify_called()) return void ai.error("mixpanel.people.delete_user() requires you to call identify() first");
    var e10 = { $delete: this._mixpanel.get_distinct_id() };
    return this._send_request(e10);
  }, u4.prototype.toString = function() {
    return this._mixpanel.toString() + ".people";
  }, u4.prototype._send_request = function(e10, t10) {
    e10.$token = this._get_config("token"), e10.$distinct_id = this._mixpanel.get_distinct_id();
    var r10 = this._mixpanel.get_property("$device_id"), n10 = this._mixpanel.get_property("$user_id"), i10 = this._mixpanel.get_property("$had_persisted_distinct_id");
    r10 && (e10.$device_id = r10), n10 && (e10.$user_id = n10), i10 && (e10.$had_persisted_distinct_id = i10);
    var o10 = an.encodeDates(e10);
    return this._identify_called() ? this._mixpanel._track_or_batch({ type: "people", data: o10, endpoint: this._mixpanel.get_api_host("people") + "/" + this._get_config("api_routes").engage, batcher: this._mixpanel.request_batchers.people }, t10) : (this._enqueue(e10), an.isUndefined(t10) || t10(this._get_config("verbose") ? { status: -1, error: null } : -1), an.truncate(o10, 255));
  }, u4.prototype._get_config = function(e10) {
    return this._mixpanel.get_config(e10);
  }, u4.prototype._identify_called = function() {
    return true === this._mixpanel._flags.identify_called;
  }, u4.prototype._enqueue = function(e10) {
    uX in e10 ? this._mixpanel.persistence._add_to_people_queue(uX, e10) : uQ in e10 ? this._mixpanel.persistence._add_to_people_queue(uQ, e10) : u0 in e10 ? this._mixpanel.persistence._add_to_people_queue(u0, e10) : u1 in e10 ? this._mixpanel.persistence._add_to_people_queue(u1, e10) : u2 in e10 ? this._mixpanel.persistence._add_to_people_queue(u2, e10) : u5 in e10 ? this._mixpanel.persistence._add_to_people_queue(u5, e10) : u3 in e10 ? this._mixpanel.persistence._add_to_people_queue(u3, e10) : ai.error("Invalid call to _enqueue():", e10);
  }, u4.prototype._flush_one_queue = function(e10, t10, r10, n10) {
    var i10 = this, o10 = an.extend({}, this._mixpanel.persistence.load_queue(e10)), s10 = o10;
    !an.isUndefined(o10) && an.isObject(o10) && !an.isEmptyObject(o10) && (i10._mixpanel.persistence._pop_from_people_queue(e10, o10), i10._mixpanel.persistence.save(), n10 && (s10 = n10(o10)), t10.call(i10, s10, function(t11, n11) {
      0 === t11 && i10._mixpanel.persistence._add_to_people_queue(e10, o10), an.isUndefined(r10) || r10(t11, n11);
    }));
  }, u4.prototype._flush = function(e10, t10, r10, n10, i10, o10, s10) {
    var a10 = this;
    this._flush_one_queue(uX, this.set, e10), this._flush_one_queue(uQ, this.set_once, n10), this._flush_one_queue(u0, this.unset, o10, function(e11) {
      return an.keys(e11);
    }), this._flush_one_queue(u1, this.increment, t10), this._flush_one_queue(u3, this.union, i10);
    var c10 = this._mixpanel.persistence.load_queue(u2);
    if (!an.isUndefined(c10) && an.isArray(c10) && c10.length) for (var u10, l2 = function(e11, t11) {
      0 === e11 && a10._mixpanel.persistence._add_to_people_queue(u2, u10), an.isUndefined(r10) || r10(e11, t11);
    }, p2 = c10.length - 1; p2 >= 0; p2--) u10 = (c10 = this._mixpanel.persistence.load_queue(u2)).pop(), a10._mixpanel.persistence.save(), an.isEmptyObject(u10) || a10.append(u10, l2);
    var h2 = this._mixpanel.persistence.load_queue(u5);
    if (!an.isUndefined(h2) && an.isArray(h2) && h2.length) for (var d2, f2 = function(e11, t11) {
      0 === e11 && a10._mixpanel.persistence._add_to_people_queue(u5, d2), an.isUndefined(s10) || s10(e11, t11);
    }, g2 = h2.length - 1; g2 >= 0; g2--) d2 = (h2 = this._mixpanel.persistence.load_queue(u5)).pop(), a10._mixpanel.persistence.save(), an.isEmptyObject(d2) || a10.remove(d2, f2);
  }, u4.prototype._is_reserved_property = function(e10) {
    return "$distinct_id" === e10 || "$token" === e10 || "$device_id" === e10 || "$user_id" === e10 || "$had_persisted_distinct_id" === e10;
  }, u4.prototype.set = u4.prototype.set, u4.prototype.set_once = u4.prototype.set_once, u4.prototype.unset = u4.prototype.unset, u4.prototype.increment = u4.prototype.increment, u4.prototype.append = u4.prototype.append, u4.prototype.remove = u4.prototype.remove, u4.prototype.union = u4.prototype.union, u4.prototype.track_charge = u4.prototype.track_charge, u4.prototype.clear_charges = u4.prototype.clear_charges, u4.prototype.delete_user = u4.prototype.delete_user, u4.prototype.toString = u4.prototype.toString;
  var u8 = "__mps", u7 = "__mpso", le = "__mpus", lt = "__mpa", lr = "__mpap", ln = "__mpr", li = "__mpu", lo = "$people_distinct_id", ls = "__alias", la = "__timers", lc = [u8, u7, le, lt, lr, ln, li, lo, ls, la], lu = function(e10) {
    this.props = {}, this.campaign_params_saved = false, e10.persistence_name ? this.name = "mp_" + e10.persistence_name : this.name = "mp_" + e10.token + "_mixpanel";
    var t10 = e10.persistence;
    "cookie" !== t10 && "localStorage" !== t10 && (ai.critical("Unknown persistence type " + t10 + "; falling back to cookie"), t10 = e10.persistence = "cookie"), "localStorage" === t10 && an.localStorage.is_supported() ? this.storage = an.localStorage : this.storage = an.cookie, this.load(), this.update_config(e10), this.upgrade(), this.save();
  };
  lu.prototype.properties = function() {
    var e10 = {};
    return this.load(), an.each(this.props, function(t10, r10) {
      an.include(lc, r10) || (e10[r10] = t10);
    }), e10;
  }, lu.prototype.load = function() {
    if (!this.disabled) {
      var e10 = this.storage.parse(this.name);
      e10 && (this.props = an.extend({}, e10));
    }
  }, lu.prototype.upgrade = function() {
    var e10, t10;
    this.storage === an.localStorage ? (e10 = an.cookie.parse(this.name), an.cookie.remove(this.name), an.cookie.remove(this.name, true), e10 && this.register_once(e10)) : this.storage === an.cookie && (t10 = an.localStorage.parse(this.name), an.localStorage.remove(this.name), t10 && this.register_once(t10));
  }, lu.prototype.save = function() {
    this.disabled || this.storage.set(this.name, aO(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain);
  }, lu.prototype.load_prop = function(e10) {
    return this.load(), this.props[e10];
  }, lu.prototype.remove = function() {
    this.storage.remove(this.name, false, this.cookie_domain), this.storage.remove(this.name, true, this.cookie_domain);
  }, lu.prototype.clear = function() {
    this.remove(), this.props = {};
  }, lu.prototype.register_once = function(e10, t10, r10) {
    return !!an.isObject(e10) && (void 0 === t10 && (t10 = "None"), this.expire_days = void 0 === r10 ? this.default_expiry : r10, this.load(), an.each(e10, function(e11, r11) {
      this.props.hasOwnProperty(r11) && this.props[r11] !== t10 || (this.props[r11] = e11);
    }, this), this.save(), true);
  }, lu.prototype.register = function(e10, t10) {
    return !!an.isObject(e10) && (this.expire_days = void 0 === t10 ? this.default_expiry : t10, this.load(), an.extend(this.props, e10), this.save(), true);
  }, lu.prototype.unregister = function(e10) {
    this.load(), e10 in this.props && (delete this.props[e10], this.save());
  }, lu.prototype.update_search_keyword = function(e10) {
    this.register(an.info.searchInfo(e10));
  }, lu.prototype.update_referrer_info = function(e10) {
    this.register_once({ $initial_referrer: e10 || "$direct", $initial_referring_domain: an.info.referringDomain(e10) || "$direct" }, "");
  }, lu.prototype.get_referrer_info = function() {
    return an.strip_empty_properties({ $initial_referrer: this.props.$initial_referrer, $initial_referring_domain: this.props.$initial_referring_domain });
  }, lu.prototype.update_config = function(e10) {
    this.default_expiry = this.expire_days = e10.cookie_expiration, this.set_disabled(e10.disable_persistence), this.set_cookie_domain(e10.cookie_domain), this.set_cross_site(e10.cross_site_cookie), this.set_cross_subdomain(e10.cross_subdomain_cookie), this.set_secure(e10.secure_cookie);
  }, lu.prototype.set_disabled = function(e10) {
    this.disabled = e10, this.disabled ? this.remove() : this.save();
  }, lu.prototype.set_cookie_domain = function(e10) {
    e10 !== this.cookie_domain && (this.remove(), this.cookie_domain = e10, this.save());
  }, lu.prototype.set_cross_site = function(e10) {
    e10 !== this.cross_site && (this.cross_site = e10, this.remove(), this.save());
  }, lu.prototype.set_cross_subdomain = function(e10) {
    e10 !== this.cross_subdomain && (this.cross_subdomain = e10, this.remove(), this.save());
  }, lu.prototype.get_cross_subdomain = function() {
    return this.cross_subdomain;
  }, lu.prototype.set_secure = function(e10) {
    e10 !== this.secure && (this.secure = !!e10, this.remove(), this.save());
  }, lu.prototype._add_to_people_queue = function(e10, t10) {
    var r10 = this._get_queue_key(e10), n10 = t10[e10], i10 = this._get_or_create_queue(uX), o10 = this._get_or_create_queue(uQ), s10 = this._get_or_create_queue(u0), a10 = this._get_or_create_queue(u1), c10 = this._get_or_create_queue(u3), u10 = this._get_or_create_queue(u5, []), l2 = this._get_or_create_queue(u2, []);
    r10 === u8 ? (an.extend(i10, n10), this._pop_from_people_queue(u1, n10), this._pop_from_people_queue(u3, n10), this._pop_from_people_queue(u0, n10)) : r10 === u7 ? (an.each(n10, function(e11, t11) {
      t11 in o10 || (o10[t11] = e11);
    }), this._pop_from_people_queue(u0, n10)) : r10 === le ? an.each(n10, function(e11) {
      an.each([i10, o10, a10, c10], function(t11) {
        e11 in t11 && delete t11[e11];
      }), an.each(l2, function(t11) {
        e11 in t11 && delete t11[e11];
      }), s10[e11] = true;
    }) : r10 === lt ? (an.each(n10, function(e11, t11) {
      t11 in i10 ? i10[t11] += e11 : (t11 in a10 || (a10[t11] = 0), a10[t11] += e11);
    }, this), this._pop_from_people_queue(u0, n10)) : r10 === li ? (an.each(n10, function(e11, t11) {
      an.isArray(e11) && (t11 in c10 || (c10[t11] = []), an.each(e11, function(e12) {
        an.include(c10[t11], e12) || c10[t11].push(e12);
      }));
    }), this._pop_from_people_queue(u0, n10)) : r10 === ln ? (u10.push(n10), this._pop_from_people_queue(u2, n10)) : r10 === lr && (l2.push(n10), this._pop_from_people_queue(u0, n10)), ai.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), ai.log(t10), this.save();
  }, lu.prototype._pop_from_people_queue = function(e10, t10) {
    var r10 = this.props[this._get_queue_key(e10)];
    an.isUndefined(r10) || an.each(t10, function(t11, n10) {
      e10 === u2 || e10 === u5 ? an.each(r10, function(e11) {
        e11[n10] === t11 && delete e11[n10];
      }) : delete r10[n10];
    }, this);
  }, lu.prototype.load_queue = function(e10) {
    return this.load_prop(this._get_queue_key(e10));
  }, lu.prototype._get_queue_key = function(e10) {
    return e10 === uX ? u8 : e10 === uQ ? u7 : e10 === u0 ? le : e10 === u1 ? lt : e10 === u2 ? lr : e10 === u5 ? ln : e10 === u3 ? li : void ai.error("Invalid queue:", e10);
  }, lu.prototype._get_or_create_queue = function(e10, t10) {
    var r10 = this._get_queue_key(e10);
    return t10 = an.isUndefined(t10) ? {} : t10, this.props[r10] || (this.props[r10] = t10);
  }, lu.prototype.set_event_timer = function(e10, t10) {
    var r10 = this.load_prop(la) || {};
    r10[e10] = t10, this.props[la] = r10, this.save();
  }, lu.prototype.remove_event_timer = function(e10) {
    var t10 = (this.load_prop(la) || {})[e10];
    return an.isUndefined(t10) || (delete this.props[la][e10], this.save()), t10;
  };
  var ll = function(e10, t10) {
    throw Error(e10 + " not available in this build.");
  }, lp = "mixpanel", lh = "base64", ld = "$device:", lf = se.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(), lg = !lf && -1 === s6.indexOf("MSIE") && -1 === s6.indexOf("Mozilla"), lm = null;
  s2.sendBeacon && (lm = function() {
    return s2.sendBeacon.apply(s2, arguments);
  });
  var lv = { track: "track/", engage: "engage/", groups: "groups/", record: "record/", flags: "flags/", settings: "settings/" }, ly = { api_host: "https://api-js.mixpanel.com", api_hosts: {}, api_routes: lv, api_extra_query_params: {}, api_method: "POST", api_transport: "XHR", api_payload_format: lh, app_host: "https://mixpanel.com", autocapture: false, cdn: "https://cdn.mxpnl.com", cross_site_cookie: false, cross_subdomain_cookie: true, error_reporter: aM, flags: false, persistence: "cookie", persistence_name: "", cookie_domain: "", cookie_name: "", loaded: aM, mp_loader: null, track_marketing: true, track_pageview: false, skip_first_touch_marketing: false, store_google: true, stop_utm_persistence: false, save_referrer: true, test: false, verbose: false, img: false, debug: false, track_links_timeout: 300, cookie_expiration: 365, upgrade: false, disable_persistence: false, disable_cookie: false, secure_cookie: false, ip: true, opt_out_tracking_by_default: false, opt_out_persistence_by_default: false, opt_out_tracking_persistence_type: "localStorage", opt_out_tracking_cookie_prefix: null, property_blacklist: [], xhr_headers: {}, ignore_dnt: false, batch_requests: true, batch_size: 50, batch_flush_interval_ms: 5e3, batch_request_timeout_ms: 9e4, batch_autostart: true, hooks: {}, record_allowed_iframe_origins: [], record_block_class: RegExp("^(mp-block|fs-exclude|amp-block|rr-block|ph-no-capture)$"), record_block_selector: "img, video, audio", record_canvas: false, record_collect_fonts: false, record_console: true, record_heatmap_data: false, recording_event_triggers: {}, record_idle_timeout_ms: 18e5, record_mask_inputs: true, record_max_ms: 864e5, record_min_ms: 0, record_network: false, record_network_options: {}, record_sessions_percent: 0, recorder_src: null, targeting_src: null, lib_base_path: "https://cdn.mxpnl.com/libs/", remote_settings_mode: "disabled" }, l_ = false, lb = function() {
  }, lw = function(e10, t10, r10) {
    var n10, i10 = r10 === lp ? y : y[r10];
    if (i10 && 0 === v) n10 = i10;
    else {
      if (i10 && !an.isArray(i10)) return void ai.error("You have already initialized " + r10);
      n10 = new lb();
    }
    if (n10._cached_groups = {}, n10._init(e10, t10, r10), n10.people = new u4(), n10.people._init(n10), !n10.get_config("skip_first_touch_marketing")) {
      var o10 = an.info.campaignParams(null), s10 = {}, a10 = false;
      an.each(o10, function(e11, t11) {
        s10["initial_" + t11] = e11, e11 && (a10 = true);
      }), a10 && n10.people.set_once(s10);
    }
    x.DEBUG = x.DEBUG || n10.get_config("debug");
    var c10 = 0 === v ? "module" : "snippet";
    return se.dispatchEvent(new se.CustomEvent("$mp_sdk_to_extension_event", { detail: { instance: n10, source: c10, token: e10, name: r10, info: an.info } })), !an.isUndefined(i10) && an.isArray(i10) && (n10._execute_array.call(n10.people, i10.people), n10._execute_array(i10)), n10;
  };
  lb.prototype.init = function(e10, t10, r10) {
    if (an.isUndefined(r10)) return void this.report_error("You must name your new library: init(token, config, name)");
    if (r10 === lp) return void this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
    var n10 = lw(e10, t10, r10);
    return y[r10] = n10, n10._loaded(), n10;
  }, lb.prototype._init = function(e10, t10, r10) {
    t10 = t10 || {}, this.__loaded = true, this.config = {};
    var n10 = {};
    if ("api_payload_format" in t10 || (t10.api_host || ly.api_host).match(/\.mixpanel\.com/) && (n10.api_payload_format = "json"), this.hooks = {}, this.set_config(an.extend({}, ly, n10, t10, { name: r10, token: e10, callback_fn: (r10 === lp ? r10 : lp + "." + r10) + "._jsc" })), this.recorderManager = new uK({ mixpanelInstance: this, getConfigFunc: an.bind(this.get_config, this), setConfigFunc: an.bind(this.set_config, this), getTabIdFunc: an.bind(this.get_tab_id, this), reportErrorFunc: an.bind(this.report_error, this), getDistinctIdFunc: an.bind(this.get_distinct_id, this), recorderSrc: this.get_config("recorder_src"), targetingSrc: this.get_config("targeting_src"), libBasePath: this.get_config("lib_base_path"), loadExtraBundle: ll }), this._jsc = aM, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = { disable_all_events: false, identify_called: false }, this._remote_settings_strict_disabled = false, this.request_batchers = {}, this._batch_requests = this.get_config("batch_requests"), this._batch_requests) if (an.localStorage.is_supported(true) && lf) {
      if (this.init_batchers(), lm && se.addEventListener) {
        var i10 = an.bind(function() {
          this.request_batchers.events.stopped || this.request_batchers.events.flush({ unloading: true });
        }, this);
        se.addEventListener("pagehide", function(e11) {
          e11.persisted && i10();
        }), se.addEventListener("visibilitychange", function() {
          "hidden" === s3.visibilityState && i10();
        });
      }
    } else this._batch_requests = false, ai.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support"), an.each(this.get_batcher_configs(), function(e11) {
      ai.log("Clearing batch queue " + e11.queue_key), an.localStorage.remove(e11.queue_key);
    });
    this.persistence = this.cookie = new lu(this.config), this.unpersisted_superprops = {}, this._gdpr_init();
    var o10 = an.UUID();
    this.get_distinct_id() || this.register_once({ distinct_id: ld + o10, $device_id: o10 }, ""), this.flags = new uW({ getFullApiRoute: an.bind(function() {
      return this.get_api_host("flags") + "/" + this.get_config("api_routes").flags;
    }, this), getConfigFunc: an.bind(this.get_config, this), setConfigFunc: an.bind(this.set_config, this), getPropertyFunc: an.bind(this.get_property, this), trackingFunc: an.bind(this.track, this), loadExtraBundle: ll, targetingSrc: this.get_config("targeting_src") || this.get_config("lib_base_path") + M }), this.flags.init(), this.flags = this.flags, this._init_tab_id();
    var s10 = this.get_config("remote_settings_mode");
    "strict" === s10 || "fallback" === s10 ? this.__session_recording_init_promise = this._fetch_remote_settings(s10).then(an.bind(function() {
      return this._check_and_start_session_recording();
    }, this)) : this.__session_recording_init_promise = this._check_and_start_session_recording(), this.autocapture = new uR(this), this.autocapture.init();
  }, lb.prototype._init_tab_id = function() {
    if (this.get_config("disable_persistence")) ai.log("Tab ID initialization skipped due to disable_persistence config");
    else if (an.sessionStorage.is_supported()) try {
      var e10 = this.get_config("name") + "_" + this.get_config("token"), t10 = "mp_tab_id_" + e10, r10 = "mp_gen_new_tab_id_" + e10;
      (an.sessionStorage.get(r10) || !an.sessionStorage.get(t10)) && an.sessionStorage.set(t10, "$tab-" + an.UUID()), an.sessionStorage.set(r10, "1"), this.tab_id = an.sessionStorage.get(t10), se.addEventListener("beforeunload", function() {
        an.sessionStorage.remove(r10);
      });
    } catch (e11) {
      this.report_error("Error initializing tab id", e11);
    }
    else this.report_error("Session storage is not supported, cannot keep track of unique tab ID.");
  }, lb.prototype.get_tab_id = function() {
    return this.tab_id || null;
  }, lb.prototype._check_and_start_session_recording = aB(function(e10) {
    return this.recorderManager.checkAndStartSessionRecording(e10);
  }), lb.prototype._start_recording_on_event = aa(function(e10, t10) {
    this.__session_recording_init_promise && this.__session_recording_init_promise.then(an.bind(function() {
      if (!this._remote_settings_strict_disabled) return this.recorderManager.startRecordingOnEvent(e10, t10);
    }, this));
  }), lb.prototype.start_session_recording = function() {
    return this._check_and_start_session_recording(true);
  }, lb.prototype.stop_session_recording = function() {
    return this.recorderManager.stopSessionRecording();
  }, lb.prototype.pause_session_recording = function() {
    return this.recorderManager.pauseSessionRecording();
  }, lb.prototype.resume_session_recording = function() {
    return this.recorderManager.resumeSessionRecording();
  }, lb.prototype.is_recording_heatmap_data = function() {
    return this.recorderManager.isRecordingHeatmapData();
  }, lb.prototype.get_session_recording_properties = function() {
    return this.recorderManager.getSessionRecordingProperties();
  }, lb.prototype.get_session_replay_url = function() {
    return this.recorderManager.getSessionReplayUrl();
  }, lb.prototype.__get_recorder = function() {
    return this.recorderManager.getRecorder();
  }, lb.prototype.__get_recording_init_promise = function() {
    return this.__session_recording_init_promise;
  }, lb.prototype._loaded = function() {
    if (this.get_config("loaded")(this), this._set_default_superprops(), this.people.set_once(this.persistence.get_referrer_info()), this.get_config("store_google") && this.get_config("stop_utm_persistence")) {
      var e10 = an.info.campaignParams(null);
      an.each(e10, (function(e11, t10) {
        this.unregister(t10);
      }).bind(this));
    }
  }, lb.prototype._set_default_superprops = function() {
    this.persistence.update_search_keyword(s3.referrer), this.get_config("store_google") && !this.get_config("stop_utm_persistence") && this.register(an.info.campaignParams()), this.get_config("save_referrer") && this.persistence.update_referrer_info(s3.referrer);
  }, lb.prototype._dom_loaded = function() {
    an.each(this.__dom_loaded_queue, function(e10) {
      this._track_dom.apply(this, e10);
    }, this), this.has_opted_out_tracking() || an.each(this.__request_queue, function(e10) {
      this._send_request.apply(this, e10);
    }, this), delete this.__dom_loaded_queue, delete this.__request_queue;
  }, lb.prototype._track_dom = function(e10, t10) {
    if (this.get_config("img")) return this.report_error("You can't use DOM tracking functions with img = true."), false;
    if (!l_) return this.__dom_loaded_queue.push([e10, t10]), false;
    var r10 = new e10().init(this);
    return r10.track.apply(r10, t10);
  }, lb.prototype._prepare_callback = function(e10, t10) {
    if (an.isUndefined(e10)) return null;
    if (lf) return function(r11) {
      e10(r11, t10);
    };
    var r10 = this._jsc, n10 = "" + Math.floor(1e8 * Math.random()), i10 = this.get_config("callback_fn") + "[" + n10 + "]";
    return r10[n10] = function(i11) {
      delete r10[n10], e10(i11, t10);
    }, i10;
  }, lb.prototype._send_request = function(e10, t10, r10, n10) {
    var i10 = true;
    if (lg) return this.__request_queue.push(arguments), i10;
    var o10 = { method: this.get_config("api_method"), transport: this.get_config("api_transport"), verbose: this.get_config("verbose") }, s10 = null;
    !n10 && (an.isFunction(r10) || "string" == typeof r10) && (n10 = r10, r10 = null), r10 = an.extend(o10, r10 || {}), lf || (r10.method = "GET");
    var a10 = "POST" === r10.method, c10 = lm && a10 && "sendbeacon" === r10.transport.toLowerCase(), u10 = r10.verbose;
    t10.verbose && (u10 = true), this.get_config("test") && (t10.test = 1), u10 && (t10.verbose = 1), this.get_config("img") && (t10.img = 1), !lf && (n10 ? t10.callback = n10 : (u10 || this.get_config("test")) && (t10.callback = "(function(){})")), t10.ip = +!!this.get_config("ip"), t10._ = (/* @__PURE__ */ new Date()).getTime().toString(), a10 && (s10 = "data=" + encodeURIComponent(t10.data), delete t10.data), an.extend(t10, this.get_config("api_extra_query_params")), e10 += "?" + an.HTTPBuildQuery(t10);
    var l2 = this;
    if ("img" in t10) {
      var p2 = s3.createElement("img");
      p2.src = e10, s3.body.appendChild(p2);
    } else if (c10) {
      try {
        i10 = lm(e10, s10);
      } catch (e11) {
        l2.report_error(e11), i10 = false;
      }
      try {
        n10 && n10(+!!i10);
      } catch (e11) {
        l2.report_error(e11);
      }
    } else if (lf) try {
      var h2 = new XMLHttpRequest();
      h2.open(r10.method, e10, true);
      var d2 = this.get_config("xhr_headers");
      if (a10 && (d2["Content-Type"] = "application/x-www-form-urlencoded"), an.each(d2, function(e11, t11) {
        h2.setRequestHeader(t11, e11);
      }), r10.timeout_ms && void 0 !== h2.timeout) {
        h2.timeout = r10.timeout_ms;
        var f2 = (/* @__PURE__ */ new Date()).getTime();
      }
      h2.withCredentials = true, h2.onreadystatechange = function() {
        if (4 === h2.readyState) {
          if (200 === h2.status) {
            if (n10) if (u10) {
              try {
                e11 = an.JSONDecode(h2.responseText);
              } catch (t12) {
                if (l2.report_error(t12), !r10.ignore_json_errors) return;
                e11 = h2.responseText;
              }
              n10(e11);
            } else n10(Number(h2.responseText));
          } else if (t11 = h2.timeout && !h2.status && (/* @__PURE__ */ new Date()).getTime() - f2 >= h2.timeout ? "timeout" : "Bad HTTP status: " + h2.status + " " + h2.statusText, l2.report_error(t11), n10) if (u10) {
            var e11, t11, i11 = h2.responseHeaders || {};
            n10({ status: 0, httpStatusCode: h2.status, error: t11, retryAfter: i11["Retry-After"] });
          } else n10(0);
        }
      }, h2.send(s10);
    } catch (e11) {
      l2.report_error(e11), i10 = false;
    }
    else {
      var g2 = s3.createElement("script");
      g2.type = "text/javascript", g2.async = true, g2.defer = true, g2.src = e10;
      var m2 = s3.getElementsByTagName("script")[0];
      m2.parentNode.insertBefore(g2, m2);
    }
    return i10;
  }, lb.prototype._fetch_remote_settings = function(e10) {
    var t10 = this, r10 = function() {
      "strict" === e10 && (t10.set_config({ record_sessions_percent: 0 }), t10._remote_settings_strict_disabled = true);
    };
    if (!se.AbortController) return ai.critical("Remote settings unavailable: missing minimum required APIs"), r10(), Promise.resolve();
    var n10 = this.get_api_host("settings") + "/" + this.get_config("api_routes").settings, i10 = { $lib_version: x.LIB_VERSION, mp_lib: "web", sdk_config: "1" }, o10 = an.HTTPBuildQuery(i10), s10 = new AbortController(), a10 = setTimeout(function() {
      s10.abort();
    }, 500), c10 = { method: "GET", headers: { Authorization: "Basic " + btoa(t10.get_config("token") + ":") }, signal: s10.signal };
    return se.fetch(n10 + "?" + o10, c10).then(function(e11) {
      if (clearTimeout(a10), !e11.ok) {
        ai.critical("Network response was not ok"), r10();
        return;
      }
      return e11.json();
    }).then(function(e11) {
      if (e11 && e11.sdk_config && e11.sdk_config.config) {
        var n11 = e11.sdk_config.config, i11 = {};
        an.each(n11, function(e12, t11) {
          ly.hasOwnProperty(t11) && (i11[t11] = e12);
        }), an.isEmptyObject(i11) ? (ai.critical("No valid config keys found in remote settings."), r10()) : t10.set_config(i11);
      } else r10();
    }).catch(function(e11) {
      clearTimeout(a10), ai.critical("Failed to fetch remote settings", e11), r10();
    });
  }, lb.prototype._execute_array = function(e10) {
    var t10, r10 = [], n10 = [], i10 = [];
    an.each(e10, function(e11) {
      e11 && (t10 = e11[0], an.isArray(t10) ? i10.push(e11) : "function" == typeof e11 ? e11.call(this) : an.isArray(e11) && "alias" === t10 ? r10.push(e11) : an.isArray(e11) && -1 !== t10.indexOf("track") && "function" == typeof this[t10] ? i10.push(e11) : n10.push(e11));
    }, this);
    var o10 = function(e11, t11) {
      an.each(e11, function(e12) {
        if (an.isArray(e12[0])) {
          var r11 = t11;
          an.each(e12, function(e13) {
            r11 = r11[e13[0]].apply(r11, e13.slice(1));
          });
        } else this[e12[0]].apply(this, e12.slice(1));
      }, t11);
    };
    o10(r10, this), o10(n10, this), o10(i10, this);
  }, lb.prototype.are_batchers_initialized = function() {
    return !!this.request_batchers.events;
  }, lb.prototype.get_batcher_configs = function() {
    var e10 = "__mpq_" + this.get_config("token");
    return this._batcher_configs = this._batcher_configs || { events: { type: "events", api_name: "track", queue_key: e10 + "_ev" }, people: { type: "people", api_name: "engage", queue_key: e10 + "_pp" }, groups: { type: "groups", api_name: "groups", queue_key: e10 + "_gr" } }, this._batcher_configs;
  }, lb.prototype.init_batchers = function() {
    if (!this.are_batchers_initialized()) {
      var e10 = an.bind(function(e11) {
        return new a3(e11.queue_key, { libConfig: this.config, errorReporter: this.get_config("error_reporter"), sendRequestFunc: an.bind(function(t11, r10, n10) {
          var i10 = this.get_config("api_routes");
          this._send_request(this.get_api_host(e11.api_name) + "/" + i10[e11.api_name], this._encode_data_for_request(t11), r10, this._prepare_callback(n10, t11));
        }, this), beforeSendHook: an.bind(function(t11) {
          var r10 = this._run_hook("before_send_" + e11.type, t11);
          return r10 ? r10[0] : null;
        }, this), stopAllBatchingFunc: an.bind(this.stop_batch_senders, this), usePersistence: true });
      }, this), t10 = this.get_batcher_configs();
      this.request_batchers = { events: e10(t10.events), people: e10(t10.people), groups: e10(t10.groups) };
    }
    this.get_config("batch_autostart") && this.start_batch_senders();
  }, lb.prototype.start_batch_senders = function() {
    this._batchers_were_started = true, this.are_batchers_initialized() && (this._batch_requests = true, an.each(this.request_batchers, function(e10) {
      e10.start();
    }));
  }, lb.prototype.stop_batch_senders = function() {
    this._batch_requests = false, an.each(this.request_batchers, function(e10) {
      e10.stop(), e10.clear();
    });
  }, lb.prototype.push = function(e10) {
    this._execute_array([e10]);
  }, lb.prototype.enable = function(e10) {
    var t10, r10, n10, i10;
    if (void 0 === e10) this._flags.disable_all_events = false;
    else {
      for (n10 = 0, t10 = {}, r10 = []; n10 < e10.length; n10++) t10[e10[n10]] = true;
      for (i10 = 0; i10 < this.__disabled_events.length; i10++) t10[this.__disabled_events[i10]] || r10.push(this.__disabled_events[i10]);
      this.__disabled_events = r10;
    }
  }, lb.prototype.disable = function(e10) {
    void 0 === e10 ? this._flags.disable_all_events = true : this.__disabled_events = this.__disabled_events.concat(e10);
  }, lb.prototype._encode_data_for_request = function(e10) {
    var t10 = aO(e10);
    return this.get_config("api_payload_format") === lh && (t10 = an.base64Encode(t10)), { data: t10 };
  }, lb.prototype._track_or_batch = function(e10, t10) {
    var r10 = an.truncate(e10.data, 255), n10 = e10.endpoint, i10 = e10.batcher, o10 = e10.should_send_immediately, s10 = e10.send_request_options || {};
    t10 = t10 || aM;
    var a10 = true, c10 = an.bind(function() {
      return (!s10.skip_hooks && (r10 = this._run_hook("before_send_" + e10.type, r10)) && (r10 = r10[0]), r10) ? (ai.log("MIXPANEL REQUEST:"), ai.log(r10), this._send_request(n10, this._encode_data_for_request(r10), s10, this._prepare_callback(t10, r10))) : null;
    }, this);
    return this._batch_requests && !o10 ? i10.enqueue(r10).then(function(e11) {
      e11 ? t10(1, r10) : c10();
    }) : a10 = c10(), a10 && r10;
  }, lb.prototype.track = aB(function(e10, t10, r10, n10) {
    if (!(r10 && r10.skip_hooks)) {
      if (null === (i10 = this._run_hook("before_track", e10, t10))) return;
      e10 = i10[0], t10 = i10[1];
    }
    n10 || "function" != typeof r10 || (n10 = r10, r10 = null);
    var i10, o10 = (r10 = r10 || {}).transport;
    o10 && (r10.transport = o10);
    var s10 = r10.send_immediately;
    if ("function" != typeof n10 && (n10 = aM), an.isUndefined(e10)) return void this.report_error("No event name provided to mixpanel.track");
    if (this._event_is_disabled(e10)) return void n10(0);
    (t10 = an.extend({}, t10)).token = this.get_config("token");
    var a10 = this.persistence.remove_event_timer(e10);
    if (!an.isUndefined(a10)) {
      var c10 = (/* @__PURE__ */ new Date()).getTime() - a10;
      t10.$duration = parseFloat((c10 / 1e3).toFixed(3));
    }
    this._set_default_superprops();
    var u10 = this.get_config("track_marketing") ? an.info.marketingParams() : {};
    t10 = an.extend({}, an.info.properties({ mp_loader: this.get_config("mp_loader") }), u10, this.persistence.properties(), this.unpersisted_superprops, this.get_session_recording_properties(), t10);
    var l2 = this.get_config("property_blacklist");
    an.isArray(l2) ? an.each(l2, function(e11) {
      delete t10[e11];
    }) : this.report_error("Invalid value for property_blacklist config: " + l2), this._start_recording_on_event(e10, t10);
    var p2 = { event: e10, properties: t10 };
    return i10 = this._track_or_batch({ type: "events", data: p2, endpoint: this.get_api_host("events") + "/" + this.get_config("api_routes").track, batcher: this.request_batchers.events, should_send_immediately: s10, send_request_options: r10 }, n10), this.flags && this.flags.checkFirstTimeEvents && this.flags.checkFirstTimeEvents(e10, t10), i10;
  }), lb.prototype.set_group = aB(function(e10, t10, r10) {
    an.isArray(t10) || (t10 = [t10]);
    var n10 = {};
    return n10[e10] = t10, this.register(n10), this.people.set(e10, t10, r10);
  }), lb.prototype.add_group = aB(function(e10, t10, r10) {
    var n10 = this.get_property(e10), i10 = {};
    return void 0 === n10 ? (i10[e10] = [t10], this.register(i10)) : -1 === n10.indexOf(t10) && (n10.push(t10), i10[e10] = n10, this.register(i10)), this.people.union(e10, t10, r10);
  }), lb.prototype.remove_group = aB(function(e10, t10, r10) {
    var n10 = this.get_property(e10);
    if (void 0 !== n10) {
      var i10 = n10.indexOf(t10);
      i10 > -1 && (n10.splice(i10, 1), this.register({ group_key: n10 })), 0 === n10.length && this.unregister(e10);
    }
    return this.people.remove(e10, t10, r10);
  }), lb.prototype.track_with_groups = aB(function(e10, t10, r10, n10) {
    var i10 = an.extend({}, t10 || {});
    return an.each(r10, function(e11, t11) {
      null != e11 && (i10[t11] = e11);
    }), this.track(e10, i10, n10);
  }), lb.prototype._create_map_key = function(e10, t10) {
    return e10 + "_" + JSON.stringify(t10);
  }, lb.prototype._remove_group_from_cache = function(e10, t10) {
    delete this._cached_groups[this._create_map_key(e10, t10)];
  }, lb.prototype.get_group = function(e10, t10) {
    var r10 = this._create_map_key(e10, t10), n10 = this._cached_groups[r10];
    return (void 0 === n10 || n10._group_key !== e10 || n10._group_id !== t10) && ((n10 = new u6())._init(this, e10, t10), this._cached_groups[r10] = n10), n10;
  }, lb.prototype.track_pageview = aB(function(e10, t10) {
    "object" != typeof e10 && (e10 = {});
    var r10 = (t10 = t10 || {}).event_name || "$mp_web_page_view", n10 = an.extend(an.info.mpPageViewProperties(), an.info.campaignParams(), an.info.clickParams()), i10 = an.extend({}, n10, e10);
    return this.is_recording_heatmap_data() && (i10.$captured_for_heatmap = true), this.track(r10, i10);
  }), lb.prototype.track_links = function() {
    return this._track_dom.call(this, uJ, arguments);
  }, lb.prototype.track_forms = function() {
    return this._track_dom.call(this, uZ, arguments);
  }, lb.prototype.time_event = function(e10) {
    an.isUndefined(e10) ? this.report_error("No event name provided to mixpanel.time_event") : this._event_is_disabled(e10) || this.persistence.set_event_timer(e10, (/* @__PURE__ */ new Date()).getTime());
  };
  var lk = { persistent: true }, lx = function(e10) {
    var t10;
    return t10 = an.isObject(e10) ? e10 : an.isUndefined(e10) ? {} : { days: e10 }, an.extend({}, lk, t10);
  };
  lb.prototype.register = function(e10, t10) {
    var r10 = this._run_hook("before_register", e10, t10);
    if (null !== r10) {
      e10 = r10[0];
      var n10 = lx(t10 = r10[1]);
      n10.persistent ? this.persistence.register(e10, n10.days) : an.extend(this.unpersisted_superprops, e10);
    }
  }, lb.prototype.register_once = function(e10, t10, r10) {
    var n10 = this._run_hook("before_register_once", e10, t10, r10);
    if (null !== n10) {
      e10 = n10[0], t10 = n10[1];
      var i10 = lx(r10 = n10[2]);
      i10.persistent ? this.persistence.register_once(e10, t10, i10.days) : (void 0 === t10 && (t10 = "None"), an.each(e10, function(e11, r11) {
        this.unpersisted_superprops.hasOwnProperty(r11) && this.unpersisted_superprops[r11] !== t10 || (this.unpersisted_superprops[r11] = e11);
      }, this));
    }
  }, lb.prototype.unregister = function(e10, t10) {
    var r10 = this._run_hook("before_unregister", e10, t10);
    null !== r10 && (e10 = r10[0], (t10 = lx(t10 = r10[1])).persistent ? this.persistence.unregister(e10) : delete this.unpersisted_superprops[e10]);
  }, lb.prototype._register_single = function(e10, t10) {
    var r10 = {};
    r10[e10] = t10, this.register(r10);
  }, lb.prototype.identify = function(e10, t10, r10, n10, i10, o10, s10, a10) {
    var c10 = this._run_hook("before_identify", e10);
    if (null === c10) return -1;
    e10 = c10[0];
    var u10 = this.get_distinct_id();
    if (e10 && u10 !== e10) {
      if ("string" == typeof e10 && 0 === e10.indexOf(ld)) return this.report_error("distinct_id cannot have $device: prefix"), -1;
      this.register({ $user_id: e10 });
    }
    this.get_property("$device_id") || this.register_once({ $had_persisted_distinct_id: true, $device_id: u10 }, ""), e10 !== u10 && e10 !== this.get_property(ls) && (this.unregister(ls), this.register({ distinct_id: e10 })), this._flags.identify_called = true, this.people._flush(t10, r10, n10, i10, o10, s10, a10), e10 !== u10 && this.track("$identify", { distinct_id: e10, $anon_distinct_id: u10 }, { skip_hooks: true }), e10 !== u10 && this.flags.fetchFlags().catch(function() {
      ai.error("[flags] Error fetching flags during identify");
    });
  }, lb.prototype.reset = function() {
    this.stop_session_recording(), this.persistence.clear(), this._flags.identify_called = false;
    var e10 = an.UUID();
    this.register_once({ distinct_id: ld + e10, $device_id: e10 }, ""), this._check_and_start_session_recording(), this.flags.reset();
  }, lb.prototype.get_distinct_id = function() {
    return this.get_property("distinct_id");
  }, lb.prototype.alias = function(e10, t10) {
    if (e10 === this.get_property(lo)) return this.report_error("Attempting to create alias for existing People user - aborting."), -2;
    var r10 = this;
    return (an.isUndefined(t10) && (t10 = this.get_distinct_id()), e10 !== t10) ? (this._register_single(ls, e10), this.track("$create_alias", { alias: e10, distinct_id: t10 }, { skip_hooks: true }, function() {
      r10.identify(e10);
    })) : (this.report_error("alias matches current distinct_id - skipping api call."), this.identify(e10), -1);
  }, lb.prototype.name_tag = function(e10) {
    this._register_single("mp_name_tag", e10);
  }, lb.prototype.set_config = function(e10) {
    an.isObject(e10) && (an.extend(this.config, e10), e10.batch_size && an.each(this.request_batchers, function(e11) {
      e11.resetBatchSize();
    }), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), x.DEBUG = x.DEBUG || this.get_config("debug"), ("autocapture" in e10 || "record_heatmap_data" in e10) && this.autocapture && this.autocapture.init(), an.isObject(e10.hooks) && (this.hooks = {}, an.each(e10.hooks, function(e11, t10) {
      if (an.isFunction(e11)) this.hooks[t10] = [e11];
      else if (an.isArray(e11)) {
        this.hooks[t10] = [];
        for (var r10 = 0; r10 < e11.length; r10++) an.isFunction(e11[r10]) || ai.critical("Invalid hook added. Hook is not a function"), this.hooks[t10].push(e11[r10]);
      } else ai.critical("Invalid hooks added. Ensure that the hook values passed into config.hooks are functions or arrays of functions.");
    }, this)));
  }, lb.prototype.get_config = function(e10) {
    return this.config[e10];
  }, lb.prototype._run_hook = function(e10) {
    var t10 = sX.call(arguments, 1);
    return an.each(this.hooks[e10], function(r10) {
      if (null === t10) return null;
      var n10 = r10.apply(this, t10);
      void 0 === n10 ? (this.report_error(e10 + " hook did not return a valid value"), t10 = null) : (an.isArray(n10) || (n10 = [n10]), t10.splice.apply(t10, [0, n10.length].concat(n10)));
    }, this), t10;
  }, lb.prototype.get_property = function(e10) {
    return this.persistence.load_prop([e10]);
  }, lb.prototype.get_api_host = function(e10) {
    return this.get_config("api_hosts")[e10] || this.get_config("api_host");
  }, lb.prototype.toString = function() {
    var e10 = this.get_config("name");
    return e10 !== lp && (e10 = lp + "." + e10), e10;
  }, lb.prototype._event_is_disabled = function(e10) {
    return an.isBlockedUA(s6) || this._flags.disable_all_events || an.include(this.__disabled_events, e10);
  }, lb.prototype._gdpr_init = function() {
    "localStorage" === this.get_config("opt_out_tracking_persistence_type") && an.localStorage.is_supported() && (!this.has_opted_in_tracking() && this.has_opted_in_tracking({ persistence_type: "cookie" }) && this.opt_in_tracking({ enable_persistence: false }), !this.has_opted_out_tracking() && this.has_opted_out_tracking({ persistence_type: "cookie" }) && this.opt_out_tracking({ clear_persistence: false }), this.clear_opt_in_out_tracking({ persistence_type: "cookie", enable_persistence: false })), this.has_opted_out_tracking() ? this._gdpr_update_persistence({ clear_persistence: true }) : !this.has_opted_in_tracking() && (this.get_config("opt_out_tracking_by_default") || an.cookie.get("mp_optout")) && (an.cookie.remove("mp_optout"), this.opt_out_tracking({ clear_persistence: this.get_config("opt_out_persistence_by_default") }));
  }, lb.prototype._gdpr_update_persistence = function(e10) {
    var t10;
    if (e10 && e10.clear_persistence) t10 = true;
    else {
      if (!e10 || !e10.enable_persistence) return;
      t10 = false;
    }
    this.get_config("disable_persistence") || this.persistence.disabled === t10 || this.persistence.set_disabled(t10), t10 ? (this.stop_batch_senders(), this.stop_session_recording()) : this._batchers_were_started && this.start_batch_senders();
  }, lb.prototype._gdpr_call_func = function(e10, t10) {
    return t10 = an.extend({ track: an.bind(this.track, this), persistence_type: this.get_config("opt_out_tracking_persistence_type"), cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"), cookie_expiration: this.get_config("cookie_expiration"), cross_site_cookie: this.get_config("cross_site_cookie"), cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"), cookie_domain: this.get_config("cookie_domain"), secure_cookie: this.get_config("secure_cookie"), ignore_dnt: this.get_config("ignore_dnt") }, t10), an.localStorage.is_supported() || (t10.persistence_type = "cookie"), e10(this.get_config("token"), { track: t10.track, trackEventName: t10.track_event_name, trackProperties: t10.track_properties, persistenceType: t10.persistence_type, persistencePrefix: t10.cookie_prefix, cookieDomain: t10.cookie_domain, cookieExpiration: t10.cookie_expiration, crossSiteCookie: t10.cross_site_cookie, crossSubdomainCookie: t10.cross_subdomain_cookie, secureCookie: t10.secure_cookie, ignoreDnt: t10.ignore_dnt });
  }, lb.prototype.opt_in_tracking = function(e10) {
    e10 = an.extend({ enable_persistence: true }, e10), this._gdpr_call_func(aF, e10), this._gdpr_update_persistence(e10);
  }, lb.prototype.opt_out_tracking = function(e10) {
    (e10 = an.extend({ clear_persistence: true, delete_user: true }, e10)).delete_user && this.people && this.people._identify_called() && (this.people.delete_user(), this.people.clear_charges()), this._gdpr_call_func(aj, e10), this._gdpr_update_persistence(e10);
  }, lb.prototype.has_opted_in_tracking = function(e10) {
    return this._gdpr_call_func(aN, e10);
  }, lb.prototype.has_opted_out_tracking = function(e10) {
    return this._gdpr_call_func(aU, e10);
  }, lb.prototype.clear_opt_in_out_tracking = function(e10) {
    e10 = an.extend({ enable_persistence: true }, e10), this._gdpr_call_func(aW, e10), this._gdpr_update_persistence(e10);
  }, lb.prototype.report_error = function(e10, t10) {
    ai.error.apply(ai.error, arguments);
    try {
      t10 || e10 instanceof Error || (e10 = Error(e10)), this.get_config("error_reporter")(e10, t10);
    } catch (e11) {
      ai.error(e11);
    }
  }, lb.prototype.add_hook = function(e10, t10) {
    this.hooks[e10] || (this.hooks[e10] = []), this.hooks[e10].push(t10);
  }, lb.prototype.remove_hook = function(e10, t10) {
    var r10;
    this.hooks[e10] && (-1 !== (r10 = this.hooks[e10].indexOf(t10)) ? this.hooks[e10].splice(r10, 1) : ai.log("remove_hook failed. Matching hook was not found"));
  }, lb.prototype.init = lb.prototype.init, lb.prototype.reset = lb.prototype.reset, lb.prototype.enable = lb.prototype.enable, lb.prototype.disable = lb.prototype.disable, lb.prototype.time_event = lb.prototype.time_event, lb.prototype.track = lb.prototype.track, lb.prototype.track_links = lb.prototype.track_links, lb.prototype.track_forms = lb.prototype.track_forms, lb.prototype.track_pageview = lb.prototype.track_pageview, lb.prototype.register = lb.prototype.register, lb.prototype.register_once = lb.prototype.register_once, lb.prototype.unregister = lb.prototype.unregister, lb.prototype.identify = lb.prototype.identify, lb.prototype.alias = lb.prototype.alias, lb.prototype.name_tag = lb.prototype.name_tag, lb.prototype.set_config = lb.prototype.set_config, lb.prototype.get_config = lb.prototype.get_config, lb.prototype.get_api_host = lb.prototype.get_api_host, lb.prototype.get_property = lb.prototype.get_property, lb.prototype.get_distinct_id = lb.prototype.get_distinct_id, lb.prototype.toString = lb.prototype.toString, lb.prototype.opt_out_tracking = lb.prototype.opt_out_tracking, lb.prototype.opt_in_tracking = lb.prototype.opt_in_tracking, lb.prototype.has_opted_out_tracking = lb.prototype.has_opted_out_tracking, lb.prototype.has_opted_in_tracking = lb.prototype.has_opted_in_tracking, lb.prototype.clear_opt_in_out_tracking = lb.prototype.clear_opt_in_out_tracking, lb.prototype.get_group = lb.prototype.get_group, lb.prototype.set_group = lb.prototype.set_group, lb.prototype.add_group = lb.prototype.add_group, lb.prototype.remove_group = lb.prototype.remove_group, lb.prototype.add_hook = lb.prototype.add_hook, lb.prototype.remove_hook = lb.prototype.remove_hook, lb.prototype.track_with_groups = lb.prototype.track_with_groups, lb.prototype.start_batch_senders = lb.prototype.start_batch_senders, lb.prototype.stop_batch_senders = lb.prototype.stop_batch_senders, lb.prototype.start_session_recording = lb.prototype.start_session_recording, lb.prototype.stop_session_recording = lb.prototype.stop_session_recording, lb.prototype.pause_session_recording = lb.prototype.pause_session_recording, lb.prototype.resume_session_recording = lb.prototype.resume_session_recording, lb.prototype.get_session_recording_properties = lb.prototype.get_session_recording_properties, lb.prototype.get_session_replay_url = lb.prototype.get_session_replay_url, lb.prototype.get_tab_id = lb.prototype.get_tab_id, lb.prototype.DEFAULT_API_ROUTES = lv, lb.prototype.__get_recorder = lb.prototype.__get_recorder, lb.prototype.__get_recording_init_promise = lb.prototype.__get_recording_init_promise, lu.prototype.properties = lu.prototype.properties, lu.prototype.update_search_keyword = lu.prototype.update_search_keyword, lu.prototype.update_referrer_info = lu.prototype.update_referrer_info, lu.prototype.get_cross_subdomain = lu.prototype.get_cross_subdomain, lu.prototype.clear = lu.prototype.clear;
  var lS = {}, lC = function() {
    an.each(lS, function(e10, t10) {
      t10 !== lp && (y[t10] = e10);
    }), y._ = an;
  }, lM = (ll = function(e10, t10) {
    t10();
  }, v = 0, (y = new lb()).init = function(e10, t10, r10) {
    if (r10) return y[r10] || (y[r10] = lS[r10] = lw(e10, t10, r10), y[r10]._loaded()), y[r10];
    var n10 = y;
    lS[lp] ? n10 = lS[lp] : e10 && ((n10 = lw(e10, t10, lp))._loaded(), lS[lp] = n10), y = n10, 1 === v && (se[lp] = y), lC();
  }, y.init(), (function() {
    function e10() {
      e10.done || (e10.done = true, l_ = true, lg = false, an.each(lS, function(e11) {
        e11._dom_loaded();
      }));
    }
    if (s3.addEventListener) "complete" === s3.readyState ? e10() : s3.addEventListener("DOMContentLoaded", e10, false);
    else if (s3.attachEvent) {
      s3.attachEvent("onreadystatechange", e10);
      var t10 = false;
      try {
        t10 = null === se.frameElement;
      } catch (e11) {
      }
      s3.documentElement.doScroll && t10 && (function t11() {
        try {
          s3.documentElement.doScroll("left");
        } catch (e11) {
          setTimeout(t11, 1);
          return;
        }
        e10();
      })();
    }
    an.register_event(se, "load", e10, true);
  })(), y);
  e.s(["default", 0, lM]);
}, 904590, 489821, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let r = Math.sqrt(3), n = 0.5 * (r - 1), i = (3 - r) / 6, o = (e2) => 0 | Math.floor(e2), s = new Float64Array([1, 1, -1, 1, 1, -1, -1, -1, 1, 0, -1, 0, 1, 0, -1, 0, 0, 1, 0, -1, 0, 1, 0, -1]);
  e.s(["createNoise2D", 0, function(e2 = Math.random) {
    let t2 = (function(e3) {
      let t3 = new Uint8Array(512);
      for (let e4 = 0; e4 < 256; e4++) t3[e4] = e4;
      for (let r3 = 0; r3 < 255; r3++) {
        let n2 = r3 + ~~(e3() * (256 - r3)), i2 = t3[r3];
        t3[r3] = t3[n2], t3[n2] = i2;
      }
      for (let e4 = 256; e4 < 512; e4++) t3[e4] = t3[e4 - 256];
      return t3;
    })(e2), r2 = new Float64Array(t2).map((e3) => s[e3 % 12 * 2]), a2 = new Float64Array(t2).map((e3) => s[e3 % 12 * 2 + 1]);
    return function(e3, s2) {
      let c, u, l = 0, p = 0, h = 0, d = (e3 + s2) * n, f = o(e3 + d), g = o(s2 + d), m = (f + g) * i, v = e3 - (f - m), y = s2 - (g - m);
      v > y ? (c = 1, u = 0) : (c = 0, u = 1);
      let _ = v - c + i, b = y - u + i, w = v - 1 + 2 * i, k = y - 1 + 2 * i, x = 255 & f, S = 255 & g, C = 0.5 - v * v - y * y;
      if (C >= 0) {
        let e4 = x + t2[S], n2 = r2[e4], i2 = a2[e4];
        C *= C, l = C * C * (n2 * v + i2 * y);
      }
      let M = 0.5 - _ * _ - b * b;
      if (M >= 0) {
        let e4 = x + c + t2[S + u], n2 = r2[e4], i2 = a2[e4];
        M *= M, p = M * M * (n2 * _ + i2 * b);
      }
      let I = 0.5 - w * w - k * k;
      if (I >= 0) {
        let e4 = x + 1 + t2[S + 1], n2 = r2[e4], i2 = a2[e4];
        I *= I, h = I * I * (n2 * w + i2 * k);
      }
      return 70 * (l + p + h);
    };
  }], 904590);
  try {
    var a = window;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["getRectanglePolygon", 0, function(e2, t2) {
    let [r2, n2, i2, o2] = e2, s2 = i2 - r2, a2 = o2 - n2, c = Math.ceil(0.5 * t2 * s2 / (s2 + a2)) - 1, u = t2 / 2 - c;
    return [[r2, n2], ...Array.from({ length: c }).map((e3, t3) => [r2 + s2 * (t3 + 1) / (c + 1), n2]), [i2, n2], ...Array.from({ length: u }).map((e3, t3) => [i2, n2 + a2 * (t3 + 1) / (u + 1)]), [i2, o2], ...Array.from({ length: c }).map((e3, t3) => [i2 - s2 * (t3 + 1) / (c + 1), o2]), [r2, o2], ...Array.from({ length: u }).map((e3, t3) => [r2, o2 - a2 * (t3 + 1) / (u + 1)])];
  }], 489821);
}, 418704, (e, t, r) => {
  t.exports = { id: "google-analytics", description: "Install a Google Analytics tag on your website", website: "https://analytics.google.com/analytics/web/", scripts: [{ url: "https://www.googletagmanager.com/gtag/js", params: ["id"], strategy: "worker", location: "head", action: "append" }, { code: "window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag('js',new Date());gtag('config','${args.id}')", strategy: "worker", location: "head", action: "append" }] };
}, 6154, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function i(e2, t2, r2 = false) {
    return t2 ? Object.keys(e2).filter((e3) => r2 ? !t2.includes(e3) : t2.includes(e3)).reduce((t3, r3) => (t3[r3] = e2[r3], t3), {}) : {};
  }
  function o(e2, t2, r2, n2) {
    let i2 = n2 && Object.keys(n2).length > 0 ? new URL(Object.values(n2)[0], e2) : new URL(e2);
    return t2 && r2 && t2.forEach((e3) => {
      r2[e3] && i2.searchParams.set(e3, r2[e3]);
    }), i2.toString();
  }
  function s(e2, t2, r2, n2, i2) {
    var s2;
    if (!t2) return `<${e2}></${e2}>`;
    let a = (null == (s2 = t2.src) ? void 0 : s2.url) ? Object.assign(Object.assign({}, t2), { src: o(t2.src.url, t2.src.params, n2, i2) }) : t2, c = Object.keys(Object.assign(Object.assign({}, a), r2)).reduce((e3, t3) => {
      let n3 = null == r2 ? void 0 : r2[t3], i3 = a[t3], o2 = null != n3 ? n3 : i3, s3 = true === o2 ? t3 : `${t3}="${o2}"`;
      return o2 ? e3 + ` ${s3}` : e3;
    }, "");
    return `<${e2}${c}></${e2}>`;
  }
  Object.defineProperty(r, "__esModule", { value: true }), r.formatData = r.createHtml = r.formatUrl = void 0, r.formatUrl = o, r.createHtml = s, r.formatData = function(e2, t2) {
    var r2, n2, a, c, u;
    let l = i(t2, null == (r2 = e2.scripts) ? void 0 : r2.reduce((e3, t3) => [...e3, ...Array.isArray(t3.params) ? t3.params : []], [])), p = i(t2, null == (a = null == (n2 = e2.html) ? void 0 : n2.attributes.src) ? void 0 : a.params), h = i(t2, [null == (u = null == (c = e2.html) ? void 0 : c.attributes.src) ? void 0 : u.slugParam]), d = i(t2, [...Object.keys(l), ...Object.keys(p), ...Object.keys(h)], true);
    return Object.assign(Object.assign({}, e2), { html: e2.html ? s(e2.html.element, e2.html.attributes, d, p, h) : null, scripts: e2.scripts ? e2.scripts.map((e3) => Object.assign(Object.assign({}, e3), { url: o(e3.url, e3.params, l) })) : null });
  };
}, 880092, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var i = e.e && e.e.__rest || function(e2, t2) {
    var r2 = {};
    for (var n2 in e2) Object.prototype.hasOwnProperty.call(e2, n2) && 0 > t2.indexOf(n2) && (r2[n2] = e2[n2]);
    if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) for (var i2 = 0, n2 = Object.getOwnPropertySymbols(e2); i2 < n2.length; i2++) 0 > t2.indexOf(n2[i2]) && Object.prototype.propertyIsEnumerable.call(e2, n2[i2]) && (r2[n2[i2]] = e2[n2[i2]]);
    return r2;
  }, o = e.e && e.e.__importDefault || function(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  };
  Object.defineProperty(r, "__esModule", { value: true }), r.GoogleAnalytics = void 0;
  let s = o(e.r(418704)), a = e.r(6154);
  r.GoogleAnalytics = (e2) => {
    var t2 = i(e2, []);
    return (0, a.formatData)(s.default, t2);
  };
}, 731292, (e, t, r) => {
  t.exports = { id: "google-maps-embed", description: "Embed a Google Maps embed on your webpage", website: "https://developers.google.com/maps/documentation/embed/get-started", html: { element: "iframe", attributes: { loading: "lazy", src: { url: "https://www.google.com/maps/embed/v1/place", slugParam: "mode", params: ["key", "q", "center", "zoom", "maptype", "language", "region"] }, referrerpolicy: "no-referrer-when-downgrade", frameborder: "0", style: "border:0", allowfullscreen: true, width: null, height: null } } };
}, 490057, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var i = e.e && e.e.__rest || function(e2, t2) {
    var r2 = {};
    for (var n2 in e2) Object.prototype.hasOwnProperty.call(e2, n2) && 0 > t2.indexOf(n2) && (r2[n2] = e2[n2]);
    if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) for (var i2 = 0, n2 = Object.getOwnPropertySymbols(e2); i2 < n2.length; i2++) 0 > t2.indexOf(n2[i2]) && Object.prototype.propertyIsEnumerable.call(e2, n2[i2]) && (r2[n2[i2]] = e2[n2[i2]]);
    return r2;
  }, o = e.e && e.e.__importDefault || function(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  };
  Object.defineProperty(r, "__esModule", { value: true }), r.GoogleMapsEmbed = void 0;
  let s = o(e.r(731292)), a = e.r(6154);
  r.GoogleMapsEmbed = (e2) => {
    var t2 = i(e2, []);
    return (0, a.formatData)(s.default, t2);
  };
}, 447716, (e, t, r) => {
  t.exports = { id: "youtube-embed", description: "Embed a YouTube embed on your webpage.", website: "https://github.com/paulirish/lite-youtube-embed", html: { element: "lite-youtube", attributes: { videoid: null, playlabel: null } }, stylesheets: ["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"], scripts: [{ url: "https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js", strategy: "idle", location: "head", action: "append" }] };
}, 761564, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var i = e.e && e.e.__rest || function(e2, t2) {
    var r2 = {};
    for (var n2 in e2) Object.prototype.hasOwnProperty.call(e2, n2) && 0 > t2.indexOf(n2) && (r2[n2] = e2[n2]);
    if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) for (var i2 = 0, n2 = Object.getOwnPropertySymbols(e2); i2 < n2.length; i2++) 0 > t2.indexOf(n2[i2]) && Object.prototype.propertyIsEnumerable.call(e2, n2[i2]) && (r2[n2[i2]] = e2[n2[i2]]);
    return r2;
  }, o = e.e && e.e.__importDefault || function(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  };
  Object.defineProperty(r, "__esModule", { value: true }), r.YouTubeEmbed = void 0;
  let s = o(e.r(447716)), a = e.r(6154);
  r.YouTubeEmbed = (e2) => {
    var t2 = i(e2, []);
    return (0, a.formatData)(s.default, t2);
  };
}, 508751, (e, t, r) => {
  "use strict";
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  Object.defineProperty(r, "__esModule", { value: true }), r.YouTubeEmbed = r.GoogleMapsEmbed = r.GoogleAnalytics = void 0;
  var i = e.r(880092);
  Object.defineProperty(r, "GoogleAnalytics", { enumerable: true, get: function() {
    return i.GoogleAnalytics;
  } });
  var o = e.r(490057);
  Object.defineProperty(r, "GoogleMapsEmbed", { enumerable: true, get: function() {
    return o.GoogleMapsEmbed;
  } });
  var s = e.r(761564);
  Object.defineProperty(r, "YouTubeEmbed", { enumerable: true, get: function() {
    return s.YouTubeEmbed;
  } });
}, 277592, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(799458), n = e.i(856757), i = e.i(817422), o = e.i(366279), s = e.i(167815), a = e.i(988321), c = e.i(397441), u = e.i(551360);
  try {
    var l = window;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function p({ triggerRef: e2, title: r2, description: n2, onClose: i2 }) {
    return (0, t.jsx)(o.Root, { open: true, onOpenChange: i2, children: (0, t.jsxs)(o.Portal, { children: [(0, t.jsx)(o.Overlay, { className: (0, u.cn)("fixed top-0 left-0 z-(--dialog-overlay-z-index) h-screen w-screen bg-black-100/50 backdrop-blur-xs", "data-open:fade-in data-open:animate-in data-open:duration-300 data-open:ease-out") }), (0, t.jsx)(o.Content, { className: "group container fixed top-1/2 left-1/2 z-(--dialog-content-z-index) max-w-xl -translate-x-1/2 -translate-y-[50%]", onCloseAutoFocus: (t2) => {
      t2.preventDefault(), e2.current?.focus();
    }, children: (0, t.jsxs)("div", { className: (0, u.cn)("relative rounded-3xl bg-surface-subtle p-8", "group-data-open:fade-in-30 group-data-open:zoom-in-90 group-data-open:slide-in-from-bottom-6 origin-top group-data-open:animate-in group-data-open:duration-300 group-data-open:ease-out"), children: [(0, t.jsx)(o.Close, { asChild: true, children: (0, t.jsx)(s.Button, { className: "absolute top-8 right-8", variant: "outline", size: "smSquare", children: (0, t.jsx)(c.Cross18, {}) }) }), (0, t.jsxs)("div", { className: "flex flex-col items-center gap-4 pt-[111px] pb-[102px]", children: [(0, t.jsx)(a.FormSuccessIcon, {}), (0, t.jsx)("h2", { className: "text-center text-heading-sm text-secondary-foreground", children: r2 }), (0, t.jsx)("p", { className: "text-center text-tertiary-foreground", children: n2 })] })] }) })] }) });
  }
  var h = e.i(23210), d = e.i(733332), f = e.i(300655), g = e.i(150669), m = e.i(542958), v = e.i(522326), y = e.i(906345), _ = e.i(714009);
  try {
    var b = window;
    b._sentryModuleMetadata = b._sentryModuleMetadata || {}, b._sentryModuleMetadata[new b.Error().stack] = Object.assign({}, b._sentryModuleMetadata[new b.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let w = i.z.string().min(1, { message: "Please enter email address" }).max(256).email({ message: "Please enter a valid email address" }).refine(y.isKnownTld, { error: (e2) => (0, y.invalidTldError)(String(e2.input)) }), k = i.z.object({ email: w }), x = i.z.object({ email: w.refine(_.isWorkEmail, { error: _.WORK_EMAIL_ERROR }) });
  e.s(["CtaEmail", 0, function({ className: e2, align: i2 = "start", layout: o2 = "stack", size: a2 = "default", analyticsEvent: c2, customerEvent: l2, successTitle: y2, successDescription: _2, requireWorkEmail: b2 = true, children: w2 }) {
    let S = (0, n.useRef)(null), C = (0, g.useAnalyticsTrack)("product", c2), [M, I] = (0, n.useState)({ status: "initial" }), O = async (e3) => {
      I({ status: "initial" }), C();
      try {
        let t2 = await (0, m.getCaptchaHeaders)("email_cta"), r2 = await fetch("/api/forms/email-cta", { body: JSON.stringify({ ...e3, customerEvent: l2 }), headers: { "Content-Type": "application/json", ...t2 }, method: "POST" }), n2 = await r2.json();
        if ("success" === n2.status) return I({ status: "success" });
        if ("error" === n2.status) return I({ errorCode: n2.errorCode, status: "failure" });
        return I({ errorCode: v.FORM_ERROR_CODES.UNKNOWN_ERROR, status: "failure" });
      } catch (t2) {
        return (0, r.captureException)(t2, { extra: { form: "email-cta", values: e3 } }), I({ errorCode: v.FORM_ERROR_CODES.UNKNOWN_ERROR, status: "failure" });
      }
    };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(h.Form, { className: (0, u.cn)("row" === o2 ? ["relative grid min-h-16 w-full max-w-sm items-start gap-2", "md:grid-cols-[1fr_min-content]", "[&_button]:h-10", "[&_input]:h-10!"] : "relative flex w-full max-w-xs flex-col gap-2", e2), schema: b2 ? x : k, defaultValues: { email: "" }, onSubmit: O, toolname: "subscribe_newsletter", tooldescription: b2 ? "Subscribe to Attio product updates and newsletters with a work email address" : "Subscribe to Attio updates with an email address", children: ({ isSubmitting: e3 }) => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(d.FormTextField, { className: (0, u.cn)("placeholder:max-w-full placeholder-shown:truncate", "sm" === a2 ? "text-sm placeholder:text-sm" : "placeholder:text-base", { "text-center placeholder:text-center": "center" === i2 }), name: "email", placeholder: "Your email address", floatError: "row" === o2 }), (0, t.jsxs)(s.Button, { ref: S, size: "sm" === a2 ? "sm" : "lg", className: "relative", type: "submit", disabled: e3, children: [(0, t.jsx)("div", { className: "absolute inset-0 flex items-center justify-center", children: (0, t.jsx)(f.LoadingSpinner18, { className: (0, u.cn)("animate-spin opacity-0", "transition-opacity duration-150", { "opacity-100": e3 }) }) }), (0, t.jsx)("span", { className: (0, u.cn)("transition-opacity duration-150", { "opacity-0": e3 }), children: w2 })] }), "failure" === M.status && (0, t.jsx)("p", { className: (0, u.cn)("absolute top-full right-0 left-0 mt-1.5 text-pretty text-red-600 text-xs", { "text-center": "center" === i2 }), children: (0, v.getFormErrorMessage)(M.errorCode, "support@attio.com") })] }) }), "success" === M.status && (0, t.jsx)(p, { triggerRef: S, title: y2, description: _2, onClose: () => I({ status: "initial" }) })] });
  }], 277592);
}, 552228, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(224253), n = e.i(277592), i = e.i(167815), o = e.i(150669), s = e.i(551360);
  try {
    var a = window;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["CtaGetStarted", 0, function({ children: e2, emailLabel: a2 = "Send me a demo", successTitle: c = "Check your inbox.", successDescription: u = "We sent a demo to your email.", emailClassName: l, emailLayout: p, emailSize: h, buttonSize: d = "responsive", ...f }) {
    let g = (0, o.useAnalyticsTrack)("product", "sign_up");
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(i.Button, { size: d, className: "max-md:hidden", onClick: () => g(), asChild: true, ...f, children: (0, t.jsx)(r.default, { href: "https://app.attio.com/welcome/sign-in", children: e2 }) }), (0, t.jsx)(n.CtaEmail, { className: (0, s.cn)("md:hidden", l), layout: p, size: h, analyticsEvent: "submit_email_cta", customerEvent: "email_cta_submitted", successTitle: c, successDescription: u, children: a2 })] });
  }]);
}, 770902, (e) => {
  "use strict";
  var t = e.i(799458), r = e.i(856757);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let i = (0, r.createContext)({ onOpen: () => {
    t.captureException("TalkToSalesContext onOpen not implemented");
  } });
  e.s(["TalkToSalesContext", 0, i]);
}, 249901, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757), n = e.i(770902);
  try {
    var i = window;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var o = e.i(167815), s = e.i(194510), a = e.i(762370);
  try {
    var c = window;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var u = e.i(551360);
  try {
    var l = window;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function p({ children: e2, size: i2 = "responsive", ...s2 }) {
    let c2 = (0, r.useRef)(null), { location: u2 } = (function() {
      let { location: e3 } = (0, r.use)(a.AnalyticsContext);
      return { location: e3 };
    })(), { onOpen: l2 } = (function() {
      let { onOpen: e3 } = (0, r.use)(n.TalkToSalesContext);
      return { onOpen: e3 };
    })();
    return (0, t.jsx)(o.Button, { ref: c2, size: i2, onClick: () => l2(u2, c2), ...s2, children: e2 });
  }
  e.s(["CtaTalkToSales", 0, function({ children: e2, buttonSize: r2 = "responsive", ...n2 }) {
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(p, { variant: "outline", size: r2, ...n2, className: "max-md:hidden", children: e2 }), (0, t.jsxs)(p, { variant: "ghost", size: r2, ...n2, className: "group self-center md:hidden", children: [(0, t.jsx)("span", { children: e2 }), (0, t.jsx)(s.ArrowRight14, { className: (0, u.cn)("relative", "transition-[translate] duration-400 ease-in-out", "group-hover:translate-x-0.25 group-hover:duration-150", "group-active:translate-x-0.25 group-active:duration-50") })] })] });
  }], 249901);
}, 988321, (e) => {
  "use strict";
  var t = e.i(68982);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["FormSuccessIcon", 0, function({ ...e2 }) {
    return (0, t.jsxs)("svg", { width: "213", height: "120", viewBox: "0 0 213 120", fill: "none", ...e2, children: [(0, t.jsx)("path", { d: "M77.6204 42.3796C85.1525 34.8475 95.2896 30.496 105.938 30.2237C116.587 29.9515 126.933 33.7794 134.84 40.9167C142.747 48.054 147.611 57.9555 148.427 68.5762C149.243 79.1968 145.949 89.7252 139.225 97.9866C132.501 106.248 122.861 111.612 112.296 112.969C101.731 114.327 91.0478 111.575 82.4535 105.282C73.8592 98.9891 68.0101 89.6357 66.1143 79.1538C64.2186 68.672 66.4209 57.8624 72.2665 48.9577", stroke: "#99A2AF" }), (0, t.jsx)("path", { d: "M158.342 3.0876L148.457 4.84691C147.399 5.03327 146.422 5.54765 145.662 6.30803L103.356 48.6134L85.3382 30.0214C84.1231 28.769 82.3638 28.195 80.6417 28.5007L70.809 30.2451C69.7504 30.4314 68.7739 30.9458 68.0135 31.7062L52.5375 47.1896C50.4875 49.2396 50.4875 52.5719 52.5375 54.6294L74.9389 77.0308L93.3669 95.4588C94.582 96.6739 96.3115 97.2181 98.0037 96.9199L107.889 95.1606C108.947 94.9742 109.924 94.4598 110.684 93.6995L177.687 26.6966C179.737 24.6466 179.737 21.3143 177.687 19.2568L162.971 4.54126C161.756 3.32615 160.027 2.78195 158.335 3.08014L158.342 3.0876Z", fill: "#FAFAFA", stroke: "#6F7988", strokeWidth: "2", strokeLinejoin: "round" }), (0, t.jsx)("path", { d: "M69.5417 30.8862L95.3126 56.6571L103.356 48.606", stroke: "#6F7988", strokeWidth: "2", strokeLinejoin: "round" }), (0, t.jsx)("path", { d: "M144.856 7.11308L146.839 5.13013L167.206 25.5038L95.8567 96.8528", stroke: "#6F7988", strokeLinejoin: "round" }), (0, t.jsx)("path", { d: "M179.774 23.2673L167.206 25.5037", stroke: "#6F7988", strokeLinejoin: "round" })] });
  }]);
}, 300655, (e) => {
  "use strict";
  var t = e.i(68982);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["LoadingSpinner18", 0, function({ ...e2 }) {
    return (0, t.jsxs)("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", ...e2, children: [(0, t.jsx)("circle", { cx: "9", cy: "9", r: "8", stroke: "currentColor", strokeOpacity: "0.1", strokeWidth: "1.5" }), (0, t.jsx)("path", { d: "M17 9C17 10.0506 16.7931 11.0909 16.391 12.0615C15.989 13.0321 15.3997 13.914 14.6569 14.6569C13.914 15.3997 13.0321 15.989 12.0615 16.391C11.0909 16.7931 10.0506 17 9 17", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] });
  }]);
}, 762370, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let n = (0, t.createContext)({ location: void 0 });
  e.s(["AnalyticsContext", 0, n]);
}, 150669, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(762370), n = e.i(773732), i = e.i(799458), o = e.i(734804), s = e.i(96533), a = e.i(791768);
  try {
    var c = window;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var u = window;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useAnalyticsTrack", 0, function(e2, c2) {
    let { location: u2 } = (0, t.use)(r.AnalyticsContext);
    return (0, t.useCallback)((t2) => (function(e3) {
      if ("block" !== o.default.get(a.env.NEXT_PUBLIC_COOKIE_DECISION_KEY)) {
        if (((0, n.sendGTMEvent)({ event: e3.action, value: { action: e3.action, category: e3.category, label: e3.label } }), "function" == typeof s.default?.track) && a.env.NEXT_PUBLIC_MIXPANEL_TOKEN) try {
          s.default.track(e3.action, { category: e3.category, label: e3.label ?? "undefined" });
        } catch (e4) {
          i.captureException(e4);
        }
      }
    })({ action: c2, category: e2, label: t2 ?? u2 }), [e2, u2, c2]);
  }], 150669);
}, 906345, 714009, (e) => {
  "use strict";
  try {
    var t = window;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let r = /* @__PURE__ */ new Set(["aaa", "aarp", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "actor", "ad", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "airbus", "airforce", "airtel", "akdn", "al", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "amazon", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics", "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "arab", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", "auto", "autos", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva", "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "build", "builders", "business", "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "casa", "case", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cc", "cd", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "charity", "chase", "chat", "cheap", "chintai", "christmas", "chrome", "church", "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "ck", "cl", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "co", "coach", "codes", "coffee", "college", "cologne", "com", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cpa", "cr", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruise", "cruises", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dog", "domains", "dot", "download", "drive", "dtv", "dubai", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "edu", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "et", "eu", "eurovision", "eus", "events", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero", "fi", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontier", "ftr", "fujitsu", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gay", "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goodyear", "goog", "google", "gop", "got", "gov", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "grocery", "group", "gs", "gt", "gu", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "horse", "hospital", "host", "hosting", "hot", "hotels", "hotmail", "house", "how", "hr", "hsbc", "ht", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "inc", "industries", "infiniti", "info", "ing", "ink", "institute", "insurance", "insure", "int", "international", "intuit", "investments", "io", "ipiranga", "iq", "ir", "irish", "is", "ismaili", "ist", "istanbul", "it", "itau", "itv", "jaguar", "java", "jcb", "je", "jeep", "jetzt", "jewelry", "jio", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kids", "kim", "kindle", "kitchen", "kiwi", "km", "kn", "koeln", "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "lamborghini", "lamer", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "link", "live", "living", "lk", "llc", "llp", "loan", "loans", "locker", "locus", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "luxe", "luxury", "lv", "ly", "ma", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "map", "market", "marketing", "markets", "marriott", "marshalls", "mattel", "mba", "mc", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "merck", "merckmsd", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi", "mk", "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "moda", "moe", "moi", "mom", "monash", "money", "monster", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtr", "mu", "museum", "music", "mv", "mw", "mx", "my", "mz", "na", "nab", "nagoya", "name", "navy", "nba", "nc", "ne", "nec", "net", "netbank", "netflix", "network", "neustar", "new", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo", "nhk", "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "office", "okinawa", "olayan", "olayangroup", "ollo", "om", "omega", "one", "ong", "onl", "online", "ooo", "open", "oracle", "orange", "org", "organic", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "panasonic", "paris", "pars", "partners", "parts", "party", "pay", "pccw", "pe", "pet", "pf", "pfizer", "pg", "ph", "pharmacy", "phd", "philips", "phone", "photo", "photography", "photos", "physio", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", "play", "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "racing", "radio", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "ril", "rio", "rip", "ro", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", "ru", "rugby", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scot", "sd", "se", "search", "seat", "secure", "security", "seek", "select", "sener", "services", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", "show", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype", "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "spa", "space", "sport", "spot", "sr", "srl", "ss", "st", "stada", "staples", "star", "statebank", "statefarm", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiss", "sx", "sy", "sydney", "systems", "sz", "tab", "taipei", "talk", "taobao", "target", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "ug", "uk", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "viva", "vivo", "vlaanderen", "vn", "vodka", "volvo", "vote", "voting", "voto", "voyage", "vu", "wales", "walmart", "walter", "wang", "wanggou", "watch", "watches", "weather", "weatherchannel", "web", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xihuan", "xin", "xn--11b4c3d", "xn--1ck2e1b", "xn--1qqw23a", "xn--2scrj9c", "xn--30rr7y", "xn--3bst00m", "xn--3ds443g", "xn--3e0b707e", "xn--3hcrj9c", "xn--3pxu8k", "xn--42c2d9a", "xn--45br5cyl", "xn--45brj9c", "xn--45q11c", "xn--4dbrk0ce", "xn--4gbrim", "xn--54b7fta0cc", "xn--55qw42g", "xn--55qx5d", "xn--5su34j936bgsg", "xn--5tzm5g", "xn--6frz82g", "xn--6qq986b3xl", "xn--80adxhks", "xn--80ao21a", "xn--80aqecdr1a", "xn--80asehdb", "xn--80aswg", "xn--8y0a063a", "xn--90a3ac", "xn--90ae", "xn--90ais", "xn--9dbq2a", "xn--9et52u", "xn--9krt00a", "xn--b4w605ferd", "xn--bck1b9a5dre4c", "xn--c1avg", "xn--c2br7g", "xn--cck2b3b", "xn--cckwcxetd", "xn--cg4bki", "xn--clchc0ea0b2g2a9gcd", "xn--czr694b", "xn--czrs0t", "xn--czru2d", "xn--d1acj3b", "xn--d1alf", "xn--e1a4c", "xn--eckvdtc9d", "xn--efvy88h", "xn--fct429k", "xn--fhbei", "xn--fiq228c5hs", "xn--fiq64b", "xn--fiqs8s", "xn--fiqz9s", "xn--fjq720a", "xn--flw351e", "xn--fpcrj9c3d", "xn--fzc2c9e2c", "xn--fzys8d69uvgm", "xn--g2xx48c", "xn--gckr3f0f", "xn--gecrj9c", "xn--gk3at1e", "xn--h2breg3eve", "xn--h2brj9c", "xn--h2brj9c8c", "xn--hxt814e", "xn--i1b6b1a6a2e", "xn--imr513n", "xn--io0a7i", "xn--j1aef", "xn--j1amh", "xn--j6w193g", "xn--jlq480n2rg", "xn--jvr189m", "xn--kcrx77d1x4a", "xn--kprw13d", "xn--kpry57d", "xn--kput3i", "xn--l1acc", "xn--lgbbat1ad8j", "xn--mgb9awbf", "xn--mgba3a3ejt", "xn--mgba3a4f16a", "xn--mgba7c0bbn0a", "xn--mgbaam7a8h", "xn--mgbab2bd", "xn--mgbah1a3hjkrd", "xn--mgbai9azgqp6j", "xn--mgbayh7gpa", "xn--mgbbh1a", "xn--mgbbh1a71e", "xn--mgbc0a9azcg", "xn--mgbca7dzdo", "xn--mgbcpq6gpa1a", "xn--mgberp4a5d4ar", "xn--mgbgu82a", "xn--mgbi4ecexp", "xn--mgbpl2fh", "xn--mgbt3dhd", "xn--mgbtx2b", "xn--mgbx4cd0ab", "xn--mix891f", "xn--mk1bu44c", "xn--mxtq1m", "xn--ngbc5azd", "xn--ngbe9e0a", "xn--ngbrx", "xn--node", "xn--nqv7f", "xn--nqv7fs00ema", "xn--nyqy26a", "xn--o3cw4h", "xn--ogbpf8fl", "xn--otu796d", "xn--p1acf", "xn--p1ai", "xn--pgbs0dh", "xn--pssy2u", "xn--q7ce6a", "xn--q9jyb4c", "xn--qcka1pmc", "xn--qxa6a", "xn--qxam", "xn--rhqv96g", "xn--rovu88b", "xn--rvc1e0am3e", "xn--s9brj9c", "xn--ses554g", "xn--t60b56a", "xn--tckwe", "xn--tiq49xqyj", "xn--unup4y", "xn--vermgensberater-ctb", "xn--vermgensberatung-pwb", "xn--vhquv", "xn--vuq861b", "xn--w4r85el8fhu5dnra", "xn--w4rs40l", "xn--wgbh1c", "xn--wgbl6a", "xn--xhq521b", "xn--xkc2al3hye2a", "xn--xkc2dl3a5ee0h", "xn--y9a3aq", "xn--yfro4i67o", "xn--ygbi2ammx", "xn--zfr164b", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zm", "zone", "zuerich", "zw"]);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["invalidTldError", 0, (e2) => `Check the domain \u2014 ".${e2.split(".").at(-1) ?? ""}" isn't a valid domain ending`, "isKnownTld", 0, (e2) => {
    let [, t2] = e2.split("@"), n2 = t2?.split(".") ?? [];
    return n2.length < 2 || r.has(n2.at(-1)?.toLowerCase() ?? "");
  }], 906345);
  var i = e.i(522326);
  try {
    var o = window;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["WORK_EMAIL_ERROR", 0, "Please provide a work email address (e.g. you@company.com)", "isWorkEmail", 0, (e2) => !i.PUBLIC_EMAIL_PROVIDERS.includes(e2.split("@")[1]?.toLowerCase() ?? "")], 714009);
}]);
