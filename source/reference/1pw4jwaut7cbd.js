;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "7fa60816-7e12-a98e-85ea-07af58022da0");
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
  function k(e2, t2) {
    let a2 = e2.videoTracks;
    p(t2).media = new WeakRef(e2), p(t2).renditionSet || (p(t2).renditionSet = /* @__PURE__ */ new Set());
    let i2 = p(a2).trackSet;
    i2.add(t2);
    let n2 = i2.size - 1;
    n2 in y.prototype || Object.defineProperty(y.prototype, n2, { get() {
      return [...p(this).trackSet][n2];
    } }), queueMicrotask(() => {
      a2.dispatchEvent(new c("addtrack", { track: t2 }));
    });
  }
  function g(e2) {
    let t2 = p(e2).media?.deref()?.videoTracks;
    t2 && (p(t2).trackSet.delete(e2), queueMicrotask(() => {
      t2.dispatchEvent(new c("removetrack", { track: e2 }));
    }));
  }
  class y extends EventTarget {
    #v;
    #k;
    #g;
    constructor() {
      super(), p(this).trackSet = /* @__PURE__ */ new Set();
    }
    get #y() {
      return p(this).trackSet;
    }
    [Symbol.iterator]() {
      return this.#y.values();
    }
    get length() {
      return this.#y.size;
    }
    getTrackById(e2) {
      return [...this.#y].find((t2) => t2.id === e2) ?? null;
    }
    get selectedIndex() {
      return [...this.#y].findIndex((e2) => e2.selected);
    }
    get onaddtrack() {
      return this.#v;
    }
    set onaddtrack(e2) {
      this.#v && (this.removeEventListener("addtrack", this.#v), this.#v = void 0), "function" == typeof e2 && (this.#v = e2, this.addEventListener("addtrack", e2));
    }
    get onremovetrack() {
      return this.#k;
    }
    set onremovetrack(e2) {
      this.#k && (this.removeEventListener("removetrack", this.#k), this.#k = void 0), "function" == typeof e2 && (this.#k = e2, this.addEventListener("removetrack", e2));
    }
    get onchange() {
      return this.#g;
    }
    set onchange(e2) {
      this.#g && (this.removeEventListener("change", this.#g), this.#g = void 0), "function" == typeof e2 && (this.#g = e2, this.addEventListener("change", e2));
    }
  }
  try {
    var f = "u" > typeof window ? window : e.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
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
  function M(e2) {
    let t2 = p(e2).media?.deref();
    return t2 ? [...t2.videoTracks].filter((e3) => e3.selected).flatMap((e3) => [...p(e3).renditionSet]) : [];
  }
  class w extends EventTarget {
    #f;
    #b;
    #g;
    [Symbol.iterator]() {
      return M(this).values();
    }
    get length() {
      return M(this).length;
    }
    getRenditionById(e2) {
      return M(this).find((t2) => `${t2.id}` == `${e2}`) ?? null;
    }
    get selectedIndex() {
      return M(this).findIndex((e2) => e2.selected);
    }
    set selectedIndex(e2) {
      for (let [t2, a2] of M(this).entries()) a2.selected = t2 === e2;
    }
    get onaddrendition() {
      return this.#f;
    }
    set onaddrendition(e2) {
      this.#f && (this.removeEventListener("addrendition", this.#f), this.#f = void 0), "function" == typeof e2 && (this.#f = e2, this.addEventListener("addrendition", e2));
    }
    get onremoverendition() {
      return this.#b;
    }
    set onremoverendition(e2) {
      this.#b && (this.removeEventListener("removerendition", this.#b), this.#b = void 0), "function" == typeof e2 && (this.#b = e2, this.addEventListener("removerendition", e2));
    }
    get onchange() {
      return this.#g;
    }
    set onchange(e2) {
      this.#g && (this.removeEventListener("change", this.#g), this.#g = void 0), "function" == typeof e2 && (this.#g = e2, this.addEventListener("change", e2));
    }
  }
  try {
    var E = "u" > typeof window ? window : e.g;
    E._sentryModuleMetadata = E._sentryModuleMetadata || {}, E._sentryModuleMetadata[new E.Error().stack] = Object.assign({}, E._sentryModuleMetadata[new E.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
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
        return M(this)[l2];
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
    var _ = "u" > typeof window ? window : e.g;
    _._sentryModuleMetadata = _._sentryModuleMetadata || {}, _._sentryModuleMetadata[new _.Error().stack] = Object.assign({}, _._sentryModuleMetadata[new _.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function L(e2) {
    let t2 = p(e2).media?.deref();
    return t2 ? [...t2.audioTracks].filter((e3) => e3.enabled).flatMap((e3) => [...p(e3).renditionSet]) : [];
  }
  class O extends EventTarget {
    #f;
    #b;
    #g;
    [Symbol.iterator]() {
      return L(this).values();
    }
    get length() {
      return L(this).length;
    }
    getRenditionById(e2) {
      return L(this).find((t2) => `${t2.id}` == `${e2}`) ?? null;
    }
    get selectedIndex() {
      return L(this).findIndex((e2) => e2.selected);
    }
    set selectedIndex(e2) {
      for (let [t2, a2] of L(this).entries()) a2.selected = t2 === e2;
    }
    get onaddrendition() {
      return this.#f;
    }
    set onaddrendition(e2) {
      this.#f && (this.removeEventListener("addrendition", this.#f), this.#f = void 0), "function" == typeof e2 && (this.#f = e2, this.addEventListener("addrendition", e2));
    }
    get onremoverendition() {
      return this.#b;
    }
    set onremoverendition(e2) {
      this.#b && (this.removeEventListener("removerendition", this.#b), this.#b = void 0), "function" == typeof e2 && (this.#b = e2, this.addEventListener("removerendition", e2));
    }
    get onchange() {
      return this.#g;
    }
    set onchange(e2) {
      this.#g && (this.removeEventListener("change", this.#g), this.#g = void 0), "function" == typeof e2 && (this.#g = e2, this.addEventListener("change", e2));
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
    var j = "u" > typeof window ? window : e.g;
    j._sentryModuleMetadata = j._sentryModuleMetadata || {}, j._sentryModuleMetadata[new j.Error().stack] = Object.assign({}, j._sentryModuleMetadata[new j.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function P(e2, t2) {
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
    #k;
    #g;
    constructor() {
      super(), p(this).trackSet = /* @__PURE__ */ new Set();
    }
    get #y() {
      return p(this).trackSet;
    }
    [Symbol.iterator]() {
      return this.#y.values();
    }
    get length() {
      return this.#y.size;
    }
    getTrackById(e2) {
      return [...this.#y].find((t2) => t2.id === e2) ?? null;
    }
    get onaddtrack() {
      return this.#v;
    }
    set onaddtrack(e2) {
      this.#v && (this.removeEventListener("addtrack", this.#v), this.#v = void 0), "function" == typeof e2 && (this.#v = e2, this.addEventListener("addtrack", e2));
    }
    get onremovetrack() {
      return this.#k;
    }
    set onremovetrack(e2) {
      this.#k && (this.removeEventListener("removetrack", this.#k), this.#k = void 0), "function" == typeof e2 && (this.#k = e2, this.addEventListener("removetrack", e2));
    }
    get onchange() {
      return this.#g;
    }
    set onchange(e2) {
      this.#g && (this.removeEventListener("change", this.#g), this.#g = void 0), "function" == typeof e2 && (this.#g = e2, this.addEventListener("change", e2));
    }
  }
  try {
    var q = "u" > typeof window ? window : e.g;
    q._sentryModuleMetadata = q._sentryModuleMetadata || {}, q._sentryModuleMetadata[new q.Error().stack] = Object.assign({}, q._sentryModuleMetadata[new q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class I {
    id;
    kind;
    label = "";
    language = "";
    sourceBuffer;
    #M = false;
    addRendition(e2, t2, a2) {
      var i2;
      let n2, r2, s2, o2 = new S();
      return o2.src = e2, o2.codec = t2, o2.bitrate = a2, i2 = this, n2 = p(i2).media?.deref()?.audioRenditions, p(o2).media = p(i2).media, p(o2).track = i2, (r2 = p(i2).renditionSet).add(o2), (s2 = r2.size - 1) in O.prototype || Object.defineProperty(O.prototype, s2, { get() {
        return L(this)[s2];
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
      return this.#M;
    }
    set enabled(e2) {
      if (this.#M !== e2) {
        let t2;
        this.#M = e2, (t2 = p(this).media?.deref()?.audioTracks) && !p(t2).changeRequested && (p(t2).changeRequested = true, queueMicrotask(() => {
          delete p(t2).changeRequested, t2.dispatchEvent(new Event("change"));
        }));
      }
    }
  }
  try {
    var $ = "u" > typeof window ? window : e.g;
    $._sentryModuleMetadata = $._sentryModuleMetadata || {}, $._sentryModuleMetadata[new $.Error().stack] = Object.assign({}, $._sentryModuleMetadata[new $.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let H = N(globalThis.HTMLMediaElement, "video"), K = N(globalThis.HTMLMediaElement, "audio");
  function N(e2, t2) {
    if (e2?.prototype) return Object.getOwnPropertyDescriptor(e2.prototype, `${t2}Tracks`)?.get;
  }
  e.s(["MediaTracksMixin", 0, function(e2) {
    if (!e2?.prototype) return e2;
    let t2 = N(e2, "video");
    (!t2 || `${t2}`.includes("[native code]")) && Object.defineProperty(e2.prototype, "videoTracks", { get() {
      var e3 = this;
      let t3 = p(e3).videoTracks;
      if (!t3 && (t3 = new y(), p(e3).videoTracks = t3, H)) {
        let a3 = H.call(e3.nativeEl ?? e3);
        for (let t4 of a3) k(e3, t4);
        a3.addEventListener("change", () => {
          t3.dispatchEvent(new Event("change"));
        }), a3.addEventListener("addtrack", (i3) => {
          if ([...t3].some((e4) => e4 instanceof R)) {
            for (let e4 of a3) g(e4);
            return;
          }
          k(e3, i3.track);
        }), a3.addEventListener("removetrack", (e4) => {
          g(e4.track);
        });
      }
      return t3;
    } });
    let a2 = N(e2, "audio");
    (!a2 || `${a2}`.includes("[native code]")) && Object.defineProperty(e2.prototype, "audioTracks", { get() {
      var e3 = this;
      let t3 = p(e3).audioTracks;
      if (!t3 && (t3 = new B(), p(e3).audioTracks = t3, K)) {
        let a3 = K.call(e3.nativeEl ?? e3);
        for (let t4 of a3) P(e3, t4);
        a3.addEventListener("change", () => {
          t3.dispatchEvent(new Event("change"));
        }), a3.addEventListener("addtrack", (i3) => {
          if ([...t3].some((e4) => e4 instanceof I)) {
            for (let e4 of a3) x(e4);
            return;
          }
          P(e3, i3.track);
        }), a3.addEventListener("removetrack", (e4) => {
          x(e4.track);
        });
      }
      return t3;
    } }), "addVideoTrack" in e2.prototype || (e2.prototype.addVideoTrack = function(e3, t3 = "", a3 = "") {
      let i3 = new R();
      return i3.kind = e3, i3.label = t3, i3.language = a3, k(this, i3), i3;
    }), "removeVideoTrack" in e2.prototype || (e2.prototype.removeVideoTrack = g), "addAudioTrack" in e2.prototype || (e2.prototype.addAudioTrack = function(e3, t3 = "", a3 = "") {
      let i3 = new I();
      return i3.kind = e3, i3.label = t3, i3.language = a3, P(this, i3), i3;
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
    var D = "u" > typeof window ? window : e.g;
    D._sentryModuleMetadata = D._sentryModuleMetadata || {}, D._sentryModuleMetadata[new D.Error().stack] = Object.assign({}, D._sentryModuleMetadata[new D.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s([], 292858);
}, 70105, (e) => {
  "use strict";
  var t = e.i(856757), a = e.i(116699);
  e.i(292858);
  var i = e.i(594975);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class r extends (0, i.MediaTracksMixin)(a.CustomVideoElement) {
    static shadowRootOptions = { ...a.CustomVideoElement.shadowRootOptions };
    static getTemplateHTML = (e2) => {
      let { src: t2, ...i2 } = e2;
      return a.CustomVideoElement.getTemplateHTML(i2);
    };
    #w;
    attributeChangedCallback(e2, t2, a2) {
      "src" !== e2 && super.attributeChangedCallback(e2, t2, a2), "src" === e2 && t2 != a2 && this.load();
    }
    async _initThumbnails(e2) {
      let t2 = async (t3, a3) => {
        let i3 = [], n3 = e2.timescale || 1, r3 = e2.startNumber || 1, s2 = e2.presentationTimeOffset ? e2.presentationTimeOffset / n3 : 0, o2 = e2.segmentDuration;
        for (let e3 = 0; e3 < t3; e3++) {
          let n4 = (function({ thIndex: e4, tduration: t4, thduration: a4, ttiles: i4, startNumber: n5, pto: r4 }) {
            return (Math.floor(e4 / i4) + n5 - 1) * t4 - r4 + (e4 % i4 + 1 - 1) * a4;
          })({ thIndex: e3, thduration: a3, ttiles: t3, tduration: o2, startNumber: r3, pto: s2 }), d2 = n4 + a3, l2 = new Promise((e4, t4) => {
            this.api.provideThumbnail(n4, ({ url: a4, width: i4, height: r4, x: s3, y: o3 }) => {
              try {
                let t5 = new VTTCue(n4, d2, `${a4}#xywh=${s3},${o3},${i4},${r4}`);
                e4(t5);
              } catch (e5) {
                t4(e5);
              }
            });
          });
          i3.push(l2);
        }
        return await Promise.all(i3).catch((e3) => console.error("Error processing thumbnails", e3));
      }, { totalThumbnails: a2, thumbnailDuration: i2 } = (function(e3) {
        var t3, a3;
        let [i3, n3] = e3.essentialProperties[0].value.split("x").map(Number), r3 = (null == (a3 = null == (t3 = e3.adaptation) ? void 0 : t3.period) ? void 0 : a3.duration) || null, s2 = e3.segmentDuration, o2 = s2 / (e3.timescale || 1) / (i3 * n3);
        return { totalThumbnails: null != r3 ? Math.ceil(r3 / o2) : Math.ceil(s2 / o2), thumbnailDuration: o2 };
      })(e2), n2 = await t2(a2, i2), r2 = this.nativeEl.querySelector('track[label="thumbnails"]');
      if (!r2) {
        let e3;
        (e3 = document.createElement("track")).kind = "metadata", e3.label = "thumbnails", e3.srclang = "en", e3.mode = "hidden", e3.default = true, r2 = e3, this.nativeEl.appendChild(r2);
        let t3 = (function(e4) {
          let t4 = "WEBVTT\n\n";
          for (let a4 of e4) t4 += `${i3(a4.startTime)} --> ${i3(a4.endTime)}
${a4.text}

`;
          let a3 = new Blob([t4], { type: "text/vtt" });
          return URL.createObjectURL(a3);
          function i3(e5) {
            let t5 = String(Math.floor(e5 / 3600)).padStart(2, "0"), a4 = String(Math.floor(e5 % 3600 / 60)).padStart(2, "0"), i4 = (e5 % 60).toFixed(3).padStart(6, "0");
            return `${t5}:${a4}:${i4}`;
          }
        })(n2);
        r2.src = t3, r2.dispatchEvent(new Event("change"));
      }
    }
    async load() {
      if (this.#w) return void this.api.attachSource(this.src);
      this.#w = true;
      let t2 = await e.A(164184);
      this.api = t2.MediaPlayer().create(), this.api.initialize(this.nativeEl, this.src, this.autoplay), this.api.on(t2.MediaPlayer.events.STREAM_INITIALIZED, () => {
        let e2 = this.api.getRepresentationsByType("video"), t3 = this.videoTracks.getTrackById("main");
        t3 || ((t3 = this.addVideoTrack("main")).id = "main", t3.selected = true), e2.forEach((e3) => {
          let a2 = e3.bandwidth ?? e3.bitrate ?? (Number.isFinite(e3.bitrateInKbit) ? 1e3 * e3.bitrateInKbit : void 0);
          t3.addRendition(e3.id, e3.width, e3.height, e3.mimeType ?? e3.codec, a2).id = e3.id;
        }), this.videoRenditions.addEventListener("change", () => {
          let e3 = this.videoRenditions[this.videoRenditions.selectedIndex];
          (null == e3 ? void 0 : e3.id) ? (this.api.updateSettings({ streaming: { abr: { autoSwitchBitrate: { video: false } } } }), this.api.setRepresentationForTypeById("video", e3.id, true)) : this.api.updateSettings({ streaming: { abr: { autoSwitchBitrate: { video: true } } } });
        }), this.api.isDynamic() || this.api.getRepresentationsByType("image").forEach(async (e3, t4) => {
          t4 > 0 || this._initThumbnails(e3);
        });
      });
    }
  }
  globalThis.customElements && !globalThis.customElements.get("dash-video") && globalThis.customElements.define("dash-video", r);
  try {
    var s = "u" > typeof window ? window : e.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var o = /* @__PURE__ */ new Set(["style", "children", "ref", "key", "suppressContentEditableWarning", "suppressHydrationWarning", "dangerouslySetInnerHTML"]), d = { className: "class", htmlFor: "for" };
  function l(e2) {
    return e2.toLowerCase();
  }
  function c(e2) {
    return "boolean" == typeof e2 ? e2 ? "" : void 0 : "function" == typeof e2 ? void 0 : "object" != typeof e2 || null === e2 ? e2 : void 0;
  }
  function u(e2, t2, a2) {
    var i2;
    e2[t2] = a2, null == a2 && t2 in ((null == (i2 = globalThis.HTMLElement) ? void 0 : i2.prototype) ?? {}) && e2.removeAttribute(t2);
  }
  var h = (function({ react: e2, tagName: t2, elementClass: a2, events: i2, displayName: n2, defaultProps: r2, toAttributeName: s2 = l, toAttributeValue: h2 = c }) {
    let p = Number.parseInt(e2.version) >= 19, v = e2.forwardRef((n3, l2) => {
      var v2, k;
      let g = e2.useRef(null), y = e2.useRef(/* @__PURE__ */ new Map()), f = {}, b = {}, m = {}, M = {};
      for (let [e3, t3] of Object.entries(n3)) {
        if (o.has(e3)) {
          m[e3] = t3;
          continue;
        }
        let i3 = s2(d[e3] ?? e3);
        if (a2.prototype && e3 in a2.prototype && !(e3 in ((null == (v2 = globalThis.HTMLElement) ? void 0 : v2.prototype) ?? {})) && !(null == (k = a2.observedAttributes) ? void 0 : k.some((e4) => e4 === i3))) {
          M[e3] = t3;
          continue;
        }
        if (e3.startsWith("on")) {
          f[e3] = t3;
          continue;
        }
        let n4 = h2(t3);
        i3 && null != n4 && (b[i3] = String(n4), p || (m[i3] = n4)), i3 && p && (n4 !== c(t3) ? m[i3] = n4 : m[i3] = t3);
      }
      if ("u" > typeof window) {
        for (let t3 in f) {
          let a3 = f[t3], n4 = t3.endsWith("Capture"), r3 = ((null == i2 ? void 0 : i2[t3]) ?? t3.slice(2).toLowerCase()).slice(0, n4 ? -7 : void 0);
          e2.useLayoutEffect(() => {
            let e3 = null == g ? void 0 : g.current;
            if (e3 && "function" == typeof a3) return e3.addEventListener(r3, a3, n4), () => {
              e3.removeEventListener(r3, a3, n4);
            };
          }, [null == g ? void 0 : g.current, a3]);
        }
        e2.useLayoutEffect(() => {
          if (null === g.current) return;
          let e3 = /* @__PURE__ */ new Map();
          for (let t3 in M) u(g.current, t3, M[t3]), y.current.delete(t3), e3.set(t3, M[t3]);
          for (let [e4, t3] of y.current) u(g.current, e4, void 0);
          y.current = e3;
        });
      }
      if ("u" < typeof window && (null == a2 ? void 0 : a2.getTemplateHTML) && (null == a2 ? void 0 : a2.shadowRootOptions)) {
        let { mode: t3, delegatesFocus: i3 } = a2.shadowRootOptions;
        m.children = [e2.createElement("template", { shadowrootmode: t3, shadowrootdelegatesfocus: i3, dangerouslySetInnerHTML: { __html: a2.getTemplateHTML(b, n3) }, key: "ce-la-react-ssr-template-shadow-root" }), m.children];
      }
      return e2.createElement(t2, { ...r2, ...m, ref: e2.useCallback((e3) => {
        g.current = e3, "function" == typeof l2 ? l2(e3) : null !== l2 && (l2.current = e3);
      }, [l2]) }, m.children);
    });
    return v.displayName = n2 ?? a2.name, v;
  })({ react: t.default, tagName: "dash-video", elementClass: r, toAttributeName: (e2) => "muted" === e2 ? "" : "defaultMuted" === e2 ? "muted" : l(e2) });
  e.s(["default", 0, h], 70105);
}, 164184, (e) => {
  e.v((t) => Promise.all(["static/immutable/chunks/0xulgma3dxpqj.js"].map((t2) => e.l(t2))).then(() => t(520860)));
}]);
