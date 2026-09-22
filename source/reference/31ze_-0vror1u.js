;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "fcd9564d-bab9-9cd5-9b23-4396b450ec1b");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 116699, 594975, 292858, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let a = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting", "waitingforkey", "resize", "enterpictureinpicture", "leavepictureinpicture", "webkitbeginfullscreen", "webkitendfullscreen", "webkitpresentationmodechanged"], i = ["autopictureinpicture", "disablepictureinpicture", "disableremoteplayback", "autoplay", "controls", "controlslist", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src"];
  function n(e2) {
    return `
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${o(e2)}></audio>
    </slot>
    <slot></slot>
  `;
  }
  function r(e2) {
    return `
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${o(e2)}></video>
    </slot>
    <slot></slot>
  `;
  }
  function s(e2, { tag: t2, is: o2 }) {
    let d2 = globalThis.document?.createElement?.(t2, { is: o2 }), l2 = d2 ? (function(e3) {
      let t3 = [];
      for (let a2 = Object.getPrototypeOf(e3); a2 && a2 !== HTMLElement.prototype; a2 = Object.getPrototypeOf(a2)) {
        let e4 = Object.getOwnPropertyNames(a2);
        t3.push(...e4);
      }
      return t3;
    })(d2) : [];
    return class s2 extends e2 {
      static getTemplateHTML = t2.endsWith("audio") ? n : r;
      static shadowRootOptions = { mode: "open" };
      static Events = a;
      static #e = false;
      static get observedAttributes() {
        return s2.#t(), [...d2?.constructor?.observedAttributes ?? [], ...i];
      }
      static #t() {
        if (this.#e) return;
        this.#e = true;
        let e3 = new Set(this.observedAttributes);
        for (let t3 of (e3.delete("muted"), l2)) if (!(t3 in this.prototype)) if ("function" == typeof d2[t3]) this.prototype[t3] = function(...e4) {
          return this.#a(), (() => {
            if (this.call) return this.call(t3, ...e4);
            let a2 = this.nativeEl?.[t3];
            return a2?.apply(this.nativeEl, e4);
          })();
        };
        else {
          let a2 = { get() {
            this.#a();
            let a3 = t3.toLowerCase();
            if (e3.has(a3)) {
              let e4 = this.getAttribute(a3);
              return null !== e4 && ("" === e4 || e4);
            }
            return this.get?.(t3) ?? this.nativeEl?.[t3];
          } };
          t3 !== t3.toUpperCase() && (a2.set = function(a3) {
            this.#a();
            let i2 = t3.toLowerCase();
            e3.has(i2) ? true === a3 || false === a3 || null == a3 ? this.toggleAttribute(i2, !!a3) : this.setAttribute(i2, a3) : this.set ? this.set(t3, a3) : this.nativeEl && (this.nativeEl[t3] = a3);
          }), Object.defineProperty(this.prototype, t3, a2);
        }
      }
      #i = false;
      #n = null;
      #r = /* @__PURE__ */ new Map();
      #s;
      #o;
      get;
      set;
      call;
      get nativeEl() {
        return this.#a(), this.#n ?? this.querySelector(":scope > [slot=media]") ?? this.querySelector(t2) ?? this.shadowRoot?.querySelector(t2) ?? null;
      }
      set nativeEl(e3) {
        this.#n = e3;
      }
      get defaultMuted() {
        return this.hasAttribute("muted");
      }
      set defaultMuted(e3) {
        this.toggleAttribute("muted", e3);
      }
      get src() {
        return this.getAttribute("src");
      }
      set src(e3) {
        this.setAttribute("src", `${e3}`);
      }
      get preload() {
        return this.getAttribute("preload") ?? this.nativeEl?.preload;
      }
      set preload(e3) {
        this.setAttribute("preload", `${e3}`);
      }
      #a() {
        this.#i || (this.#i = true, this.init());
      }
      init() {
        if (!this.shadowRoot) {
          this.attachShadow({ mode: "open" });
          let e3 = (function(e4) {
            let t3 = {};
            for (let a2 of e4) t3[a2.name] = a2.value;
            return t3;
          })(this.attributes);
          o2 && (e3.is = o2), t2 && (e3.part = t2), this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e3);
        }
        for (let e3 of (this.nativeEl.muted = this.hasAttribute("muted"), l2)) this.#d(e3);
        this.#l();
      }
      #l() {
        for (let e3 of (this.#s = new MutationObserver(this.#c.bind(this)), this.#o = () => this.#u(), this.shadowRoot?.addEventListener("slotchange", this.#o), this.#u(), this.constructor.Events)) this.shadowRoot?.addEventListener(e3, this, true);
      }
      handleEvent(e3) {
        e3.target === this.nativeEl && this.dispatchEvent(new CustomEvent(e3.type, { detail: e3.detail }));
      }
      #u() {
        let e3 = new Map(this.#r), t3 = this.shadowRoot?.querySelector("slot:not([name])");
        (t3?.assignedElements({ flatten: true }).filter((e4) => ["track", "source"].includes(e4.localName))).forEach((t4) => {
          e3.delete(t4);
          let a2 = this.#r.get(t4);
          a2 || (a2 = t4.cloneNode(), this.#r.set(t4, a2), this.#s?.observe(t4, { attributes: true })), this.nativeEl?.append(a2), this.#h(a2);
        }), e3.forEach((e4, t4) => {
          e4.remove(), this.#r.delete(t4);
        });
      }
      #c(e3) {
        for (let t3 of e3) if ("attributes" === t3.type) {
          let { target: e4, attributeName: a2 } = t3, i2 = this.#r.get(e4);
          i2 && a2 && (i2.setAttribute(a2, e4.getAttribute(a2) ?? ""), this.#h(i2));
        }
      }
      #h(e3) {
        e3 && "track" === e3.localName && e3.default && ("chapters" === e3.kind || "metadata" === e3.kind) && "disabled" === e3.track.mode && (e3.track.mode = "hidden");
      }
      #d(e3) {
        if (Object.prototype.hasOwnProperty.call(this, e3)) {
          let t3 = this[e3];
          delete this[e3], this[e3] = t3;
        }
      }
      attributeChangedCallback(e3, t3, a2) {
        this.#a(), this.#p(e3, t3, a2);
      }
      #p(e3, t3, a2) {
        ["id", "class"].includes(e3) || !s2.observedAttributes.includes(e3) && this.constructor.observedAttributes.includes(e3) || (null === a2 ? this.nativeEl?.removeAttribute(e3) : this.nativeEl?.getAttribute(e3) !== a2 && this.nativeEl?.setAttribute(e3, a2));
      }
      connectedCallback() {
        this.#a(), this.#o || this.#l();
      }
      disconnectedCallback() {
        for (let e3 of (this.#s?.disconnect(), this.#s = void 0, this.#o && (this.shadowRoot?.removeEventListener("slotchange", this.#o), this.#o = void 0), this.constructor.Events)) this.shadowRoot?.removeEventListener(e3, this, true);
        this.#r.forEach((e3) => e3.remove()), this.#r.clear(), this.#n = null;
      }
    };
  }
  function o(e2) {
    let t2 = "";
    for (let a2 in e2) {
      if (!i.includes(a2)) continue;
      let n2 = e2[a2];
      "" === n2 ? t2 += ` ${a2}` : t2 += ` ${a2}="${n2}"`;
    }
    return t2;
  }
  let d = s(globalThis.HTMLElement ?? class {
  }, { tag: "video" });
  s(globalThis.HTMLElement ?? class {
  }, { tag: "audio" }), e.s(["CustomVideoElement", 0, d, "Events", 0, a], 116699);
  try {
    var l = "u" > typeof window ? window : e.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class c extends Event {
    track;
    constructor(e2, t2) {
      super(e2), this.track = t2.track;
    }
  }
  try {
    var u = "u" > typeof window ? window : e.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let h = /* @__PURE__ */ new WeakMap();
  function p(e2) {
    var t2, a2;
    let i2;
    return h.get(e2) ?? (t2 = e2, a2 = {}, (i2 = h.get(t2)) || h.set(t2, i2 = {}), Object.assign(i2, a2));
  }
  try {
    var v = "u" > typeof window ? window : e.g;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function g(e2, t2) {
    let a2 = e2.videoTracks;
    p(t2).media = new WeakRef(e2), p(t2).renditionSet || (p(t2).renditionSet = /* @__PURE__ */ new Set());
    let i2 = p(a2).trackSet;
    i2.add(t2);
    let n2 = i2.size - 1;
    n2 in k.prototype || Object.defineProperty(k.prototype, n2, { get() {
      return [...p(this).trackSet][n2];
    } }), queueMicrotask(() => {
      a2.dispatchEvent(new c("addtrack", { track: t2 }));
    });
  }
  function f(e2) {
    let t2 = p(e2).media?.deref()?.videoTracks;
    t2 && (p(t2).trackSet.delete(e2), queueMicrotask(() => {
      t2.dispatchEvent(new c("removetrack", { track: e2 }));
    }));
  }
  class k extends EventTarget {
    #v;
    #g;
    #f;
    constructor() {
      super(), p(this).trackSet = /* @__PURE__ */ new Set();
    }
    get #k() {
      return p(this).trackSet;
    }
    [Symbol.iterator]() {
      return this.#k.values();
    }
    get length() {
      return this.#k.size;
    }
    getTrackById(e2) {
      return [...this.#k].find((t2) => t2.id === e2) ?? null;
    }
    get selectedIndex() {
      return [...this.#k].findIndex((e2) => e2.selected);
    }
    get onaddtrack() {
      return this.#v;
    }
    set onaddtrack(e2) {
      this.#v && (this.removeEventListener("addtrack", this.#v), this.#v = void 0), "function" == typeof e2 && (this.#v = e2, this.addEventListener("addtrack", e2));
    }
    get onremovetrack() {
      return this.#g;
    }
    set onremovetrack(e2) {
      this.#g && (this.removeEventListener("removetrack", this.#g), this.#g = void 0), "function" == typeof e2 && (this.#g = e2, this.addEventListener("removetrack", e2));
    }
    get onchange() {
      return this.#f;
    }
    set onchange(e2) {
      this.#f && (this.removeEventListener("change", this.#f), this.#f = void 0), "function" == typeof e2 && (this.#f = e2, this.addEventListener("change", e2));
    }
  }
  try {
    var y = "u" > typeof window ? window : e.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class b extends Event {
    rendition;
    constructor(e2, t2) {
      super(e2), this.rendition = t2.rendition;
    }
  }
  try {
    var m = "u" > typeof window ? window : e.g;
    m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[new m.Error().stack] = Object.assign({}, m._sentryModuleMetadata[new m.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function E(e2) {
    let t2 = p(e2).media?.deref();
    return t2 ? [...t2.videoTracks].filter((e3) => e3.selected).flatMap((e3) => [...p(e3).renditionSet]) : [];
  }
  class w extends EventTarget {
    #y;
    #b;
    #f;
    [Symbol.iterator]() {
      return E(this).values();
    }
    get length() {
      return E(this).length;
    }
    getRenditionById(e2) {
      return E(this).find((t2) => `${t2.id}` == `${e2}`) ?? null;
    }
    get selectedIndex() {
      return E(this).findIndex((e2) => e2.selected);
    }
    set selectedIndex(e2) {
      for (let [t2, a2] of E(this).entries()) a2.selected = t2 === e2;
    }
    get onaddrendition() {
      return this.#y;
    }
    set onaddrendition(e2) {
      this.#y && (this.removeEventListener("addrendition", this.#y), this.#y = void 0), "function" == typeof e2 && (this.#y = e2, this.addEventListener("addrendition", e2));
    }
    get onremoverendition() {
      return this.#b;
    }
    set onremoverendition(e2) {
      this.#b && (this.removeEventListener("removerendition", this.#b), this.#b = void 0), "function" == typeof e2 && (this.#b = e2, this.addEventListener("removerendition", e2));
    }
    get onchange() {
      return this.#f;
    }
    set onchange(e2) {
      this.#f && (this.removeEventListener("change", this.#f), this.#f = void 0), "function" == typeof e2 && (this.#f = e2, this.addEventListener("change", e2));
    }
  }
  try {
    var M = "u" > typeof window ? window : e.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class T {
    src;
    id;
    width;
    height;
    bitrate;
    frameRate;
    codec;
    #m = false;
    get selected() {
      return this.#m;
    }
    set selected(e2) {
      if (this.#m !== e2) {
        var t2;
        let a2;
        this.#m = e2, t2 = this, (a2 = p(t2).media?.deref()?.videoRenditions) && !p(a2).changeRequested && (p(a2).changeRequested = true, queueMicrotask(() => {
          delete p(a2).changeRequested, p(t2).track.selected && a2.dispatchEvent(new Event("change"));
        }));
      }
    }
  }
  try {
    var C = "u" > typeof window ? window : e.g;
    C._sentryModuleMetadata = C._sentryModuleMetadata || {}, C._sentryModuleMetadata[new C.Error().stack] = Object.assign({}, C._sentryModuleMetadata[new C.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class R {
    id;
    kind;
    label = "";
    language = "";
    sourceBuffer;
    #m = false;
    addRendition(e2, t2, a2, i2, n2, r2) {
      var s2;
      let o2, d2, l2, c2 = new T();
      return c2.src = e2, c2.width = t2, c2.height = a2, c2.frameRate = r2, c2.bitrate = n2, c2.codec = i2, s2 = this, o2 = p(s2).media?.deref()?.videoRenditions, p(c2).media = p(s2).media, p(c2).track = s2, (d2 = p(s2).renditionSet).add(c2), (l2 = d2.size - 1) in w.prototype || Object.defineProperty(w.prototype, l2, { get() {
        return E(this)[l2];
      } }), queueMicrotask(() => {
        o2 && s2.selected && o2.dispatchEvent(new b("addrendition", { rendition: c2 }));
      }), c2;
    }
    removeRendition(e2) {
      let t2, a2;
      t2 = p(e2).media?.deref()?.videoRenditions, a2 = p(e2).track, p(a2).renditionSet.delete(e2), queueMicrotask(() => {
        let a3 = p(e2).track;
        t2 && a3.selected && t2.dispatchEvent(new b("removerendition", { rendition: e2 }));
      });
    }
    get selected() {
      return this.#m;
    }
    set selected(e2) {
      this.#m === e2 || (this.#m = e2, true === e2 && (function(e3) {
        let t2 = p(e3).media?.deref()?.videoTracks ?? [], a2 = false;
        for (let i2 of t2) i2 !== e3 && (i2.selected = false, a2 = true);
        if (a2) {
          if (p(t2).changeRequested) return;
          p(t2).changeRequested = true, queueMicrotask(() => {
            delete p(t2).changeRequested, t2.dispatchEvent(new Event("change"));
          });
        }
      })(this));
    }
  }
  try {
    var L = "u" > typeof window ? window : e.g;
    L._sentryModuleMetadata = L._sentryModuleMetadata || {}, L._sentryModuleMetadata[new L.Error().stack] = Object.assign({}, L._sentryModuleMetadata[new L.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function _(e2) {
    let t2 = p(e2).media?.deref();
    return t2 ? [...t2.audioTracks].filter((e3) => e3.enabled).flatMap((e3) => [...p(e3).renditionSet]) : [];
  }
  class O extends EventTarget {
    #y;
    #b;
    #f;
    [Symbol.iterator]() {
      return _(this).values();
    }
    get length() {
      return _(this).length;
    }
    getRenditionById(e2) {
      return _(this).find((t2) => `${t2.id}` == `${e2}`) ?? null;
    }
    get selectedIndex() {
      return _(this).findIndex((e2) => e2.selected);
    }
    set selectedIndex(e2) {
      for (let [t2, a2] of _(this).entries()) a2.selected = t2 === e2;
    }
    get onaddrendition() {
      return this.#y;
    }
    set onaddrendition(e2) {
      this.#y && (this.removeEventListener("addrendition", this.#y), this.#y = void 0), "function" == typeof e2 && (this.#y = e2, this.addEventListener("addrendition", e2));
    }
    get onremoverendition() {
      return this.#b;
    }
    set onremoverendition(e2) {
      this.#b && (this.removeEventListener("removerendition", this.#b), this.#b = void 0), "function" == typeof e2 && (this.#b = e2, this.addEventListener("removerendition", e2));
    }
    get onchange() {
      return this.#f;
    }
    set onchange(e2) {
      this.#f && (this.removeEventListener("change", this.#f), this.#f = void 0), "function" == typeof e2 && (this.#f = e2, this.addEventListener("change", e2));
    }
  }
  try {
    var A = "u" > typeof window ? window : e.g;
    A._sentryModuleMetadata = A._sentryModuleMetadata || {}, A._sentryModuleMetadata[new A.Error().stack] = Object.assign({}, A._sentryModuleMetadata[new A.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class S {
    src;
    id;
    bitrate;
    codec;
    #m = false;
    get selected() {
      return this.#m;
    }
    set selected(e2) {
      if (this.#m !== e2) {
        var t2;
        let a2;
        this.#m = e2, t2 = this, (a2 = p(t2).media?.deref()?.audioRenditions) && !p(a2).changeRequested && (p(a2).changeRequested = true, queueMicrotask(() => {
          delete p(a2).changeRequested, p(t2).track.enabled && a2.dispatchEvent(new Event("change"));
        }));
      }
    }
  }
  try {
    var P = "u" > typeof window ? window : e.g;
    P._sentryModuleMetadata = P._sentryModuleMetadata || {}, P._sentryModuleMetadata[new P.Error().stack] = Object.assign({}, P._sentryModuleMetadata[new P.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function j(e2, t2) {
    let a2 = e2.audioTracks;
    p(t2).media = new WeakRef(e2), p(t2).renditionSet || (p(t2).renditionSet = /* @__PURE__ */ new Set());
    let i2 = p(a2).trackSet;
    i2.add(t2);
    let n2 = i2.size - 1;
    n2 in B.prototype || Object.defineProperty(B.prototype, n2, { get() {
      return [...p(this).trackSet][n2];
    } }), queueMicrotask(() => {
      a2.dispatchEvent(new c("addtrack", { track: t2 }));
    });
  }
  function x(e2) {
    let t2 = p(e2).media?.deref()?.audioTracks;
    t2 && (p(t2).trackSet.delete(e2), queueMicrotask(() => {
      t2.dispatchEvent(new c("removetrack", { track: e2 }));
    }));
  }
  class B extends EventTarget {
    #v;
    #g;
    #f;
    constructor() {
      super(), p(this).trackSet = /* @__PURE__ */ new Set();
    }
    get #k() {
      return p(this).trackSet;
    }
    [Symbol.iterator]() {
      return this.#k.values();
    }
    get length() {
      return this.#k.size;
    }
    getTrackById(e2) {
      return [...this.#k].find((t2) => t2.id === e2) ?? null;
    }
    get onaddtrack() {
      return this.#v;
    }
    set onaddtrack(e2) {
      this.#v && (this.removeEventListener("addtrack", this.#v), this.#v = void 0), "function" == typeof e2 && (this.#v = e2, this.addEventListener("addtrack", e2));
    }
    get onremovetrack() {
      return this.#g;
    }
    set onremovetrack(e2) {
      this.#g && (this.removeEventListener("removetrack", this.#g), this.#g = void 0), "function" == typeof e2 && (this.#g = e2, this.addEventListener("removetrack", e2));
    }
    get onchange() {
      return this.#f;
    }
    set onchange(e2) {
      this.#f && (this.removeEventListener("change", this.#f), this.#f = void 0), "function" == typeof e2 && (this.#f = e2, this.addEventListener("change", e2));
    }
  }
  try {
    var I = "u" > typeof window ? window : e.g;
    I._sentryModuleMetadata = I._sentryModuleMetadata || {}, I._sentryModuleMetadata[new I.Error().stack] = Object.assign({}, I._sentryModuleMetadata[new I.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class q {
    id;
    kind;
    label = "";
    language = "";
    sourceBuffer;
    #E = false;
    addRendition(e2, t2, a2) {
      var i2;
      let n2, r2, s2, o2 = new S();
      return o2.src = e2, o2.codec = t2, o2.bitrate = a2, i2 = this, n2 = p(i2).media?.deref()?.audioRenditions, p(o2).media = p(i2).media, p(o2).track = i2, (r2 = p(i2).renditionSet).add(o2), (s2 = r2.size - 1) in O.prototype || Object.defineProperty(O.prototype, s2, { get() {
        return _(this)[s2];
      } }), queueMicrotask(() => {
        n2 && i2.enabled && n2.dispatchEvent(new b("addrendition", { rendition: o2 }));
      }), o2;
    }
    removeRendition(e2) {
      let t2, a2;
      t2 = p(e2).media?.deref()?.audioRenditions, a2 = p(e2).track, p(a2).renditionSet.delete(e2), queueMicrotask(() => {
        let a3 = p(e2).track;
        t2 && a3.enabled && t2.dispatchEvent(new b("removerendition", { rendition: e2 }));
      });
    }
    get enabled() {
      return this.#E;
    }
    set enabled(e2) {
      if (this.#E !== e2) {
        let t2;
        this.#E = e2, (t2 = p(this).media?.deref()?.audioTracks) && !p(t2).changeRequested && (p(t2).changeRequested = true, queueMicrotask(() => {
          delete p(t2).changeRequested, t2.dispatchEvent(new Event("change"));
        }));
      }
    }
  }
  try {
    var H = "u" > typeof window ? window : e.g;
    H._sentryModuleMetadata = H._sentryModuleMetadata || {}, H._sentryModuleMetadata[new H.Error().stack] = Object.assign({}, H._sentryModuleMetadata[new H.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let $ = D(globalThis.HTMLMediaElement, "video"), K = D(globalThis.HTMLMediaElement, "audio");
  function D(e2, t2) {
    if (e2?.prototype) return Object.getOwnPropertyDescriptor(e2.prototype, `${t2}Tracks`)?.get;
  }
  e.s(["MediaTracksMixin", 0, function(e2) {
    if (!e2?.prototype) return e2;
    let t2 = D(e2, "video");
    (!t2 || `${t2}`.includes("[native code]")) && Object.defineProperty(e2.prototype, "videoTracks", { get() {
      var e3 = this;
      let t3 = p(e3).videoTracks;
      if (!t3 && (t3 = new k(), p(e3).videoTracks = t3, $)) {
        let a3 = $.call(e3.nativeEl ?? e3);
        for (let t4 of a3) g(e3, t4);
        a3.addEventListener("change", () => {
          t3.dispatchEvent(new Event("change"));
        }), a3.addEventListener("addtrack", (i3) => {
          if ([...t3].some((e4) => e4 instanceof R)) {
            for (let e4 of a3) f(e4);
            return;
          }
          g(e3, i3.track);
        }), a3.addEventListener("removetrack", (e4) => {
          f(e4.track);
        });
      }
      return t3;
    } });
    let a2 = D(e2, "audio");
    (!a2 || `${a2}`.includes("[native code]")) && Object.defineProperty(e2.prototype, "audioTracks", { get() {
      var e3 = this;
      let t3 = p(e3).audioTracks;
      if (!t3 && (t3 = new B(), p(e3).audioTracks = t3, K)) {
        let a3 = K.call(e3.nativeEl ?? e3);
        for (let t4 of a3) j(e3, t4);
        a3.addEventListener("change", () => {
          t3.dispatchEvent(new Event("change"));
        }), a3.addEventListener("addtrack", (i3) => {
          if ([...t3].some((e4) => e4 instanceof q)) {
            for (let e4 of a3) x(e4);
            return;
          }
          j(e3, i3.track);
        }), a3.addEventListener("removetrack", (e4) => {
          x(e4.track);
        });
      }
      return t3;
    } }), "addVideoTrack" in e2.prototype || (e2.prototype.addVideoTrack = function(e3, t3 = "", a3 = "") {
      let i3 = new R();
      return i3.kind = e3, i3.label = t3, i3.language = a3, g(this, i3), i3;
    }), "removeVideoTrack" in e2.prototype || (e2.prototype.removeVideoTrack = f), "addAudioTrack" in e2.prototype || (e2.prototype.addAudioTrack = function(e3, t3 = "", a3 = "") {
      let i3 = new q();
      return i3.kind = e3, i3.label = t3, i3.language = a3, j(this, i3), i3;
    }), "removeAudioTrack" in e2.prototype || (e2.prototype.removeAudioTrack = x), "videoRenditions" in e2.prototype || Object.defineProperty(e2.prototype, "videoRenditions", { get() {
      return i2(this);
    } });
    let i2 = (e3) => {
      let t3 = p(e3).videoRenditions;
      return t3 || (p(t3 = new w()).media = new WeakRef(e3), p(e3).videoRenditions = t3), t3;
    };
    "audioRenditions" in e2.prototype || Object.defineProperty(e2.prototype, "audioRenditions", { get() {
      return n2(this);
    } });
    let n2 = (e3) => {
      let t3 = p(e3).audioRenditions;
      return t3 || (p(t3 = new O()).media = new WeakRef(e3), p(e3).audioRenditions = t3), t3;
    };
    return e2;
  }], 594975);
  try {
    var N = "u" > typeof window ? window : e.g;
    N._sentryModuleMetadata = N._sentryModuleMetadata || {}, N._sentryModuleMetadata[new N.Error().stack] = Object.assign({}, N._sentryModuleMetadata[new N.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s([], 292858);
}, 388566, (e) => {
  "use strict";
  let t;
  var a = e.i(856757), i = e.i(116699);
  e.i(292858);
  var n = e.i(594975), r = e.i(945811);
  try {
    var s = "u" > typeof window ? window : e.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let o = (t = (0, n.MediaTracksMixin)(i.CustomVideoElement), class extends t {
    static shadowRootOptions = { ...t.shadowRootOptions };
    static getTemplateHTML = (e2, a2 = {}) => {
      let { src: i2, ...n2 } = e2;
      return `
        <script type="application/json" id="config">
          ${JSON.stringify(a2.config || {})}
        <\/script>
        ${t.getTemplateHTML(n2)}
      `;
    };
    #w = null;
    #M = null;
    constructor() {
      super(), this.#d("config");
    }
    get config() {
      return this.#M;
    }
    set config(e2) {
      this.#M = e2;
    }
    attributeChangedCallback(e2, t2, a2) {
      "src" !== e2 && super.attributeChangedCallback(e2, t2, a2), "src" === e2 && t2 != a2 && this.load();
    }
    #T() {
      var e2, t2;
      null == (e2 = this.#w) || e2.remove(), null == (t2 = this.nativeEl) || t2.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged", this.#C), this.api && (this.api.detachMedia(), this.api.destroy(), this.api = null);
    }
    async load() {
      var e2, t2;
      let a2 = !this.api;
      if (this.#T(), this.src) {
        if (a2 && !this.#M && (this.#M = JSON.parse((null == (e2 = this.shadowRoot.getElementById("config")) ? void 0 : e2.textContent) || "{}")), r.default.isSupported()) {
          switch (await Promise.resolve(), this.api = new r.default({ liveDurationInfinity: true, autoStartLoad: false, ...this.config }), this.api.loadSource(this.src), this.api.attachMedia(this.nativeEl), this.nativeEl.preload) {
            case "none": {
              let e4 = () => this.api.startLoad();
              this.nativeEl.addEventListener("play", e4, { once: true }), this.api.on(r.default.Events.DESTROYING, () => {
                this.nativeEl.removeEventListener("play", e4);
              });
              break;
            }
            case "metadata": {
              let e4 = this.api.config.maxBufferLength, t3 = this.api.config.maxBufferSize;
              this.api.config.maxBufferLength = 1, this.api.config.maxBufferSize = 1;
              let a4 = () => {
                this.api.config.maxBufferLength = e4, this.api.config.maxBufferSize = t3;
              };
              this.nativeEl.addEventListener("play", a4, { once: true }), this.api.on(r.default.Events.DESTROYING, () => {
                this.nativeEl.removeEventListener("play", a4);
              }), this.api.startLoad();
              break;
            }
            default:
              this.api.startLoad();
          }
          this.nativeEl.webkitCurrentPlaybackTargetIsWireless && this.api.stopLoad(), this.nativeEl.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", this.#C), this.#w = document.createElement("source"), this.#w.setAttribute("type", "application/x-mpegURL"), this.#w.setAttribute("src", this.src), this.nativeEl.disableRemotePlayback = false, this.nativeEl.append(this.#w);
          let e3 = /* @__PURE__ */ new WeakMap();
          this.api.on(r.default.Events.MANIFEST_PARSED, (t3, a4) => {
            this.nativeEl.autoplay && this.nativeEl.paused && this.nativeEl.play().catch((e4) => {
              console.warn("Autoplay failed:", e4);
            }), n2();
            let i3 = this.videoTracks.getTrackById("main");
            for (let [t4, n3] of (i3 || ((i3 = this.addVideoTrack("main")).id = "main", i3.selected = true), a4.levels.entries())) {
              let a5 = i3.addRendition(n3.url[0], n3.width, n3.height, n3.videoCodec, n3.bitrate);
              e3.set(n3, `${t4}`), a5.id = `${t4}`;
            }
            for (let [e4, t4] of a4.audioTracks.entries()) {
              let a5 = t4.default ? "main" : "alternative", i4 = this.addAudioTrack(a5, t4.name, t4.lang);
              i4.id = `${e4}`, t4.default && (i4.enabled = true);
            }
          }), this.audioTracks.addEventListener("change", () => {
            var e4;
            let t3 = +(null == (e4 = [...this.audioTracks].find((e5) => e5.enabled)) ? void 0 : e4.id), a4 = this.api.audioTracks.map((e5) => e5.id);
            t3 != this.api.audioTrack && a4.includes(t3) && (this.api.audioTrack = t3);
          }), this.api.on(r.default.Events.LEVELS_UPDATED, (t3, a4) => {
            let i3 = this.videoTracks[this.videoTracks.selectedIndex ?? 0];
            if (!i3) return;
            let n3 = a4.levels.map((t4) => e3.get(t4));
            for (let e4 of this.videoRenditions) e4.id && !n3.includes(e4.id) && i3.removeRendition(e4);
          });
          let a3 = null;
          this.api.on(r.default.Events.ERROR, (e4, t3) => {
            t3.type === r.default.ErrorTypes.NETWORK_ERROR && t3.details === r.default.ErrorDetails.FRAG_LOAD_ERROR && (a3 = t3.frag.level);
          }), this.api.on(r.default.Events.LEVEL_SWITCHED, (e4, t3) => {
            let i3 = t3.level;
            null !== a3 && i3 < a3 && (console.warn(`\u26A0\uFE0F hls.js downgraded quality from level ${a3} to ${i3} due to fragment load failure.`), this.videoRenditions.selectedIndex = i3, a3 = null);
          });
          let i2 = (e4) => {
            let t3 = e4.target.selectedIndex;
            t3 != this.api.nextLevel && (this.api.nextLevel = t3);
          };
          null == (t2 = this.videoRenditions) || t2.addEventListener("change", i2);
          let n2 = () => {
            for (let e4 of this.videoTracks) this.removeVideoTrack(e4);
            for (let e4 of this.audioTracks) this.removeAudioTrack(e4);
          };
          this.api.once(r.default.Events.DESTROYING, n2);
          return;
        }
        await Promise.resolve(), this.nativeEl.canPlayType("application/vnd.apple.mpegurl") && (this.nativeEl.src = this.src);
      }
    }
    #C = () => {
      var e2, t2, a2;
      (null == (e2 = this.nativeEl) ? void 0 : e2.webkitCurrentPlaybackTargetIsWireless) ? null == (t2 = this.api) || t2.stopLoad() : null == (a2 = this.api) || a2.startLoad();
    };
    #d(e2) {
      if (Object.prototype.hasOwnProperty.call(this, e2)) {
        let t2 = this[e2];
        delete this[e2], this[e2] = t2;
      }
    }
  });
  globalThis.customElements && !globalThis.customElements.get("hls-video") && globalThis.customElements.define("hls-video", o);
  try {
    var d = "u" > typeof window ? window : e.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var l = /* @__PURE__ */ new Set(["style", "children", "ref", "key", "suppressContentEditableWarning", "suppressHydrationWarning", "dangerouslySetInnerHTML"]), c = { className: "class", htmlFor: "for" };
  function u(e2) {
    return e2.toLowerCase();
  }
  function h(e2) {
    return "boolean" == typeof e2 ? e2 ? "" : void 0 : "function" == typeof e2 ? void 0 : "object" != typeof e2 || null === e2 ? e2 : void 0;
  }
  function p(e2, t2, a2) {
    var i2;
    e2[t2] = a2, null == a2 && t2 in ((null == (i2 = globalThis.HTMLElement) ? void 0 : i2.prototype) ?? {}) && e2.removeAttribute(t2);
  }
  var v = (function({ react: e2, tagName: t2, elementClass: a2, events: i2, displayName: n2, defaultProps: r2, toAttributeName: s2 = u, toAttributeValue: o2 = h }) {
    let d2 = Number.parseInt(e2.version) >= 19, v2 = e2.forwardRef((n3, u2) => {
      var v3, g;
      let f = e2.useRef(null), k = e2.useRef(/* @__PURE__ */ new Map()), y = {}, b = {}, m = {}, E = {};
      for (let [e3, t3] of Object.entries(n3)) {
        if (l.has(e3)) {
          m[e3] = t3;
          continue;
        }
        let i3 = s2(c[e3] ?? e3);
        if (a2.prototype && e3 in a2.prototype && !(e3 in ((null == (v3 = globalThis.HTMLElement) ? void 0 : v3.prototype) ?? {})) && !(null == (g = a2.observedAttributes) ? void 0 : g.some((e4) => e4 === i3))) {
          E[e3] = t3;
          continue;
        }
        if (e3.startsWith("on")) {
          y[e3] = t3;
          continue;
        }
        let n4 = o2(t3);
        i3 && null != n4 && (b[i3] = String(n4), d2 || (m[i3] = n4)), i3 && d2 && (n4 !== h(t3) ? m[i3] = n4 : m[i3] = t3);
      }
      if ("u" > typeof window) {
        for (let t3 in y) {
          let a3 = y[t3], n4 = t3.endsWith("Capture"), r3 = ((null == i2 ? void 0 : i2[t3]) ?? t3.slice(2).toLowerCase()).slice(0, n4 ? -7 : void 0);
          e2.useLayoutEffect(() => {
            let e3 = null == f ? void 0 : f.current;
            if (e3 && "function" == typeof a3) return e3.addEventListener(r3, a3, n4), () => {
              e3.removeEventListener(r3, a3, n4);
            };
          }, [null == f ? void 0 : f.current, a3]);
        }
        e2.useLayoutEffect(() => {
          if (null === f.current) return;
          let e3 = /* @__PURE__ */ new Map();
          for (let t3 in E) p(f.current, t3, E[t3]), k.current.delete(t3), e3.set(t3, E[t3]);
          for (let [e4, t3] of k.current) p(f.current, e4, void 0);
          k.current = e3;
        });
      }
      if ("u" < typeof window && (null == a2 ? void 0 : a2.getTemplateHTML) && (null == a2 ? void 0 : a2.shadowRootOptions)) {
        let { mode: t3, delegatesFocus: i3 } = a2.shadowRootOptions;
        m.children = [e2.createElement("template", { shadowrootmode: t3, shadowrootdelegatesfocus: i3, dangerouslySetInnerHTML: { __html: a2.getTemplateHTML(b, n3) }, key: "ce-la-react-ssr-template-shadow-root" }), m.children];
      }
      return e2.createElement(t2, { ...r2, ...m, ref: e2.useCallback((e3) => {
        f.current = e3, "function" == typeof u2 ? u2(e3) : null !== u2 && (u2.current = e3);
      }, [u2]) }, m.children);
    });
    return v2.displayName = n2 ?? a2.name, v2;
  })({ react: a.default, tagName: "hls-video", elementClass: o, toAttributeName: (e2) => "muted" === e2 ? "" : "defaultMuted" === e2 ? "muted" : u(e2) });
  e.s(["default", 0, v], 388566);
}]);
