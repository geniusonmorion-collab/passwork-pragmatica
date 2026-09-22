;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "330f5b44-de4b-52e0-5e09-ec04f60300e4");
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
      <audio${d(e2)}></audio>
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
      <video${d(e2)}></video>
    </slot>
    <slot></slot>
  `;
  }
  function s(e2, { tag: t2, is: d2 }) {
    let o2 = globalThis.document?.createElement?.(t2, { is: d2 }), l2 = o2 ? (function(e3) {
      let t3 = [];
      for (let a2 = Object.getPrototypeOf(e3); a2 && a2 !== HTMLElement.prototype; a2 = Object.getPrototypeOf(a2)) {
        let e4 = Object.getOwnPropertyNames(a2);
        t3.push(...e4);
      }
      return t3;
    })(o2) : [];
    return class s2 extends e2 {
      static getTemplateHTML = t2.endsWith("audio") ? n : r;
      static shadowRootOptions = { mode: "open" };
      static Events = a;
      static #e = false;
      static get observedAttributes() {
        return s2.#t(), [...o2?.constructor?.observedAttributes ?? [], ...i];
      }
      static #t() {
        if (this.#e) return;
        this.#e = true;
        let e3 = new Set(this.observedAttributes);
        for (let t3 of (e3.delete("muted"), l2)) if (!(t3 in this.prototype)) if ("function" == typeof o2[t3]) this.prototype[t3] = function(...e4) {
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
      #d;
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
          d2 && (e3.is = d2), t2 && (e3.part = t2), this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e3);
        }
        for (let e3 of (this.nativeEl.muted = this.hasAttribute("muted"), l2)) this.#o(e3);
        this.#l();
      }
      #l() {
        for (let e3 of (this.#s = new MutationObserver(this.#c.bind(this)), this.#d = () => this.#h(), this.shadowRoot?.addEventListener("slotchange", this.#d), this.#h(), this.constructor.Events)) this.shadowRoot?.addEventListener(e3, this, true);
      }
      handleEvent(e3) {
        e3.target === this.nativeEl && this.dispatchEvent(new CustomEvent(e3.type, { detail: e3.detail }));
      }
      #h() {
        let e3 = new Map(this.#r), t3 = this.shadowRoot?.querySelector("slot:not([name])");
        (t3?.assignedElements({ flatten: true }).filter((e4) => ["track", "source"].includes(e4.localName))).forEach((t4) => {
          e3.delete(t4);
          let a2 = this.#r.get(t4);
          a2 || (a2 = t4.cloneNode(), this.#r.set(t4, a2), this.#s?.observe(t4, { attributes: true })), this.nativeEl?.append(a2), this.#u(a2);
        }), e3.forEach((e4, t4) => {
          e4.remove(), this.#r.delete(t4);
        });
      }
      #c(e3) {
        for (let t3 of e3) if ("attributes" === t3.type) {
          let { target: e4, attributeName: a2 } = t3, i2 = this.#r.get(e4);
          i2 && a2 && (i2.setAttribute(a2, e4.getAttribute(a2) ?? ""), this.#u(i2));
        }
      }
      #u(e3) {
        e3 && "track" === e3.localName && e3.default && ("chapters" === e3.kind || "metadata" === e3.kind) && "disabled" === e3.track.mode && (e3.track.mode = "hidden");
      }
      #o(e3) {
        if (Object.prototype.hasOwnProperty.call(this, e3)) {
          let t3 = this[e3];
          delete this[e3], this[e3] = t3;
        }
      }
      attributeChangedCallback(e3, t3, a2) {
        this.#a(), this.#k(e3, t3, a2);
      }
      #k(e3, t3, a2) {
        ["id", "class"].includes(e3) || !s2.observedAttributes.includes(e3) && this.constructor.observedAttributes.includes(e3) || (null === a2 ? this.nativeEl?.removeAttribute(e3) : this.nativeEl?.getAttribute(e3) !== a2 && this.nativeEl?.setAttribute(e3, a2));
      }
      connectedCallback() {
        this.#a(), this.#d || this.#l();
      }
      disconnectedCallback() {
        for (let e3 of (this.#s?.disconnect(), this.#s = void 0, this.#d && (this.shadowRoot?.removeEventListener("slotchange", this.#d), this.#d = void 0), this.constructor.Events)) this.shadowRoot?.removeEventListener(e3, this, true);
        this.#r.forEach((e3) => e3.remove()), this.#r.clear(), this.#n = null;
      }
    };
  }
  function d(e2) {
    let t2 = "";
    for (let a2 in e2) {
      if (!i.includes(a2)) continue;
      let n2 = e2[a2];
      "" === n2 ? t2 += ` ${a2}` : t2 += ` ${a2}="${n2}"`;
    }
    return t2;
  }
  let o = s(globalThis.HTMLElement ?? class {
  }, { tag: "video" });
  s(globalThis.HTMLElement ?? class {
  }, { tag: "audio" }), e.s(["CustomVideoElement", 0, o, "Events", 0, a], 116699);
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
    var h = "u" > typeof window ? window : e.g;
    h._sentryModuleMetadata = h._sentryModuleMetadata || {}, h._sentryModuleMetadata[new h.Error().stack] = Object.assign({}, h._sentryModuleMetadata[new h.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let u = /* @__PURE__ */ new WeakMap();
  function k(e2) {
    var t2, a2;
    let i2;
    return u.get(e2) ?? (t2 = e2, a2 = {}, (i2 = u.get(t2)) || u.set(t2, i2 = {}), Object.assign(i2, a2));
  }
  try {
    var v = "u" > typeof window ? window : e.g;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function p(e2, t2) {
    let a2 = e2.videoTracks;
    k(t2).media = new WeakRef(e2), k(t2).renditionSet || (k(t2).renditionSet = /* @__PURE__ */ new Set());
    let i2 = k(a2).trackSet;
    i2.add(t2);
    let n2 = i2.size - 1;
    n2 in y.prototype || Object.defineProperty(y.prototype, n2, { get() {
      return [...k(this).trackSet][n2];
    } }), queueMicrotask(() => {
      a2.dispatchEvent(new c("addtrack", { track: t2 }));
    });
  }
  function g(e2) {
    let t2 = k(e2).media?.deref()?.videoTracks;
    t2 && (k(t2).trackSet.delete(e2), queueMicrotask(() => {
      t2.dispatchEvent(new c("removetrack", { track: e2 }));
    }));
  }
  class y extends EventTarget {
    #v;
    #p;
    #g;
    constructor() {
      super(), k(this).trackSet = /* @__PURE__ */ new Set();
    }
    get #y() {
      return k(this).trackSet;
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
      return this.#p;
    }
    set onremovetrack(e2) {
      this.#p && (this.removeEventListener("removetrack", this.#p), this.#p = void 0), "function" == typeof e2 && (this.#p = e2, this.addEventListener("removetrack", e2));
    }
    get onchange() {
      return this.#g;
    }
    set onchange(e2) {
      this.#g && (this.removeEventListener("change", this.#g), this.#g = void 0), "function" == typeof e2 && (this.#g = e2, this.addEventListener("change", e2));
    }
  }
  try {
    var b = "u" > typeof window ? window : e.g;
    b._sentryModuleMetadata = b._sentryModuleMetadata || {}, b._sentryModuleMetadata[new b.Error().stack] = Object.assign({}, b._sentryModuleMetadata[new b.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class f extends Event {
    rendition;
    constructor(e2, t2) {
      super(e2), this.rendition = t2.rendition;
    }
  }
  try {
    var M = "u" > typeof window ? window : e.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function m(e2) {
    let t2 = k(e2).media?.deref();
    return t2 ? [...t2.videoTracks].filter((e3) => e3.selected).flatMap((e3) => [...k(e3).renditionSet]) : [];
  }
  class w extends EventTarget {
    #b;
    #f;
    #g;
    [Symbol.iterator]() {
      return m(this).values();
    }
    get length() {
      return m(this).length;
    }
    getRenditionById(e2) {
      return m(this).find((t2) => `${t2.id}` == `${e2}`) ?? null;
    }
    get selectedIndex() {
      return m(this).findIndex((e2) => e2.selected);
    }
    set selectedIndex(e2) {
      for (let [t2, a2] of m(this).entries()) a2.selected = t2 === e2;
    }
    get onaddrendition() {
      return this.#b;
    }
    set onaddrendition(e2) {
      this.#b && (this.removeEventListener("addrendition", this.#b), this.#b = void 0), "function" == typeof e2 && (this.#b = e2, this.addEventListener("addrendition", e2));
    }
    get onremoverendition() {
      return this.#f;
    }
    set onremoverendition(e2) {
      this.#f && (this.removeEventListener("removerendition", this.#f), this.#f = void 0), "function" == typeof e2 && (this.#f = e2, this.addEventListener("removerendition", e2));
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
  class C {
    src;
    id;
    width;
    height;
    bitrate;
    frameRate;
    codec;
    #M = false;
    get selected() {
      return this.#M;
    }
    set selected(e2) {
      if (this.#M !== e2) {
        var t2;
        let a2;
        this.#M = e2, t2 = this, (a2 = k(t2).media?.deref()?.videoRenditions) && !k(a2).changeRequested && (k(a2).changeRequested = true, queueMicrotask(() => {
          delete k(a2).changeRequested, k(t2).track.selected && a2.dispatchEvent(new Event("change"));
        }));
      }
    }
  }
  try {
    var T = "u" > typeof window ? window : e.g;
    T._sentryModuleMetadata = T._sentryModuleMetadata || {}, T._sentryModuleMetadata[new T.Error().stack] = Object.assign({}, T._sentryModuleMetadata[new T.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class R {
    id;
    kind;
    label = "";
    language = "";
    sourceBuffer;
    #M = false;
    addRendition(e2, t2, a2, i2, n2, r2) {
      var s2;
      let d2, o2, l2, c2 = new C();
      return c2.src = e2, c2.width = t2, c2.height = a2, c2.frameRate = r2, c2.bitrate = n2, c2.codec = i2, s2 = this, d2 = k(s2).media?.deref()?.videoRenditions, k(c2).media = k(s2).media, k(c2).track = s2, (o2 = k(s2).renditionSet).add(c2), (l2 = o2.size - 1) in w.prototype || Object.defineProperty(w.prototype, l2, { get() {
        return m(this)[l2];
      } }), queueMicrotask(() => {
        d2 && s2.selected && d2.dispatchEvent(new f("addrendition", { rendition: c2 }));
      }), c2;
    }
    removeRendition(e2) {
      let t2, a2;
      t2 = k(e2).media?.deref()?.videoRenditions, a2 = k(e2).track, k(a2).renditionSet.delete(e2), queueMicrotask(() => {
        let a3 = k(e2).track;
        t2 && a3.selected && t2.dispatchEvent(new f("removerendition", { rendition: e2 }));
      });
    }
    get selected() {
      return this.#M;
    }
    set selected(e2) {
      this.#M === e2 || (this.#M = e2, true === e2 && (function(e3) {
        let t2 = k(e3).media?.deref()?.videoTracks ?? [], a2 = false;
        for (let i2 of t2) i2 !== e3 && (i2.selected = false, a2 = true);
        if (a2) {
          if (k(t2).changeRequested) return;
          k(t2).changeRequested = true, queueMicrotask(() => {
            delete k(t2).changeRequested, t2.dispatchEvent(new Event("change"));
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
    let t2 = k(e2).media?.deref();
    return t2 ? [...t2.audioTracks].filter((e3) => e3.enabled).flatMap((e3) => [...k(e3).renditionSet]) : [];
  }
  class A extends EventTarget {
    #b;
    #f;
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
      return this.#b;
    }
    set onaddrendition(e2) {
      this.#b && (this.removeEventListener("addrendition", this.#b), this.#b = void 0), "function" == typeof e2 && (this.#b = e2, this.addEventListener("addrendition", e2));
    }
    get onremoverendition() {
      return this.#f;
    }
    set onremoverendition(e2) {
      this.#f && (this.removeEventListener("removerendition", this.#f), this.#f = void 0), "function" == typeof e2 && (this.#f = e2, this.addEventListener("removerendition", e2));
    }
    get onchange() {
      return this.#g;
    }
    set onchange(e2) {
      this.#g && (this.removeEventListener("change", this.#g), this.#g = void 0), "function" == typeof e2 && (this.#g = e2, this.addEventListener("change", e2));
    }
  }
  try {
    var O = "u" > typeof window ? window : e.g;
    O._sentryModuleMetadata = O._sentryModuleMetadata || {}, O._sentryModuleMetadata[new O.Error().stack] = Object.assign({}, O._sentryModuleMetadata[new O.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class j {
    src;
    id;
    bitrate;
    codec;
    #M = false;
    get selected() {
      return this.#M;
    }
    set selected(e2) {
      if (this.#M !== e2) {
        var t2;
        let a2;
        this.#M = e2, t2 = this, (a2 = k(t2).media?.deref()?.audioRenditions) && !k(a2).changeRequested && (k(a2).changeRequested = true, queueMicrotask(() => {
          delete k(a2).changeRequested, k(t2).track.enabled && a2.dispatchEvent(new Event("change"));
        }));
      }
    }
  }
  try {
    var S = "u" > typeof window ? window : e.g;
    S._sentryModuleMetadata = S._sentryModuleMetadata || {}, S._sentryModuleMetadata[new S.Error().stack] = Object.assign({}, S._sentryModuleMetadata[new S.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function P(e2, t2) {
    let a2 = e2.audioTracks;
    k(t2).media = new WeakRef(e2), k(t2).renditionSet || (k(t2).renditionSet = /* @__PURE__ */ new Set());
    let i2 = k(a2).trackSet;
    i2.add(t2);
    let n2 = i2.size - 1;
    n2 in x.prototype || Object.defineProperty(x.prototype, n2, { get() {
      return [...k(this).trackSet][n2];
    } }), queueMicrotask(() => {
      a2.dispatchEvent(new c("addtrack", { track: t2 }));
    });
  }
  function q(e2) {
    let t2 = k(e2).media?.deref()?.audioTracks;
    t2 && (k(t2).trackSet.delete(e2), queueMicrotask(() => {
      t2.dispatchEvent(new c("removetrack", { track: e2 }));
    }));
  }
  class x extends EventTarget {
    #v;
    #p;
    #g;
    constructor() {
      super(), k(this).trackSet = /* @__PURE__ */ new Set();
    }
    get #y() {
      return k(this).trackSet;
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
      return this.#p;
    }
    set onremovetrack(e2) {
      this.#p && (this.removeEventListener("removetrack", this.#p), this.#p = void 0), "function" == typeof e2 && (this.#p = e2, this.addEventListener("removetrack", e2));
    }
    get onchange() {
      return this.#g;
    }
    set onchange(e2) {
      this.#g && (this.removeEventListener("change", this.#g), this.#g = void 0), "function" == typeof e2 && (this.#g = e2, this.addEventListener("change", e2));
    }
  }
  try {
    var B = "u" > typeof window ? window : e.g;
    B._sentryModuleMetadata = B._sentryModuleMetadata || {}, B._sentryModuleMetadata[new B.Error().stack] = Object.assign({}, B._sentryModuleMetadata[new B.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  class K {
    id;
    kind;
    label = "";
    language = "";
    sourceBuffer;
    #m = false;
    addRendition(e2, t2, a2) {
      var i2;
      let n2, r2, s2, d2 = new j();
      return d2.src = e2, d2.codec = t2, d2.bitrate = a2, i2 = this, n2 = k(i2).media?.deref()?.audioRenditions, k(d2).media = k(i2).media, k(d2).track = i2, (r2 = k(i2).renditionSet).add(d2), (s2 = r2.size - 1) in A.prototype || Object.defineProperty(A.prototype, s2, { get() {
        return L(this)[s2];
      } }), queueMicrotask(() => {
        n2 && i2.enabled && n2.dispatchEvent(new f("addrendition", { rendition: d2 }));
      }), d2;
    }
    removeRendition(e2) {
      let t2, a2;
      t2 = k(e2).media?.deref()?.audioRenditions, a2 = k(e2).track, k(a2).renditionSet.delete(e2), queueMicrotask(() => {
        let a3 = k(e2).track;
        t2 && a3.enabled && t2.dispatchEvent(new f("removerendition", { rendition: e2 }));
      });
    }
    get enabled() {
      return this.#m;
    }
    set enabled(e2) {
      if (this.#m !== e2) {
        let t2;
        this.#m = e2, (t2 = k(this).media?.deref()?.audioTracks) && !k(t2).changeRequested && (k(t2).changeRequested = true, queueMicrotask(() => {
          delete k(t2).changeRequested, t2.dispatchEvent(new Event("change"));
        }));
      }
    }
  }
  try {
    var H = "u" > typeof window ? window : e.g;
    H._sentryModuleMetadata = H._sentryModuleMetadata || {}, H._sentryModuleMetadata[new H.Error().stack] = Object.assign({}, H._sentryModuleMetadata[new H.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let I = z(globalThis.HTMLMediaElement, "video"), $ = z(globalThis.HTMLMediaElement, "audio");
  function z(e2, t2) {
    if (e2?.prototype) return Object.getOwnPropertyDescriptor(e2.prototype, `${t2}Tracks`)?.get;
  }
  e.s(["MediaTracksMixin", 0, function(e2) {
    if (!e2?.prototype) return e2;
    let t2 = z(e2, "video");
    (!t2 || `${t2}`.includes("[native code]")) && Object.defineProperty(e2.prototype, "videoTracks", { get() {
      var e3 = this;
      let t3 = k(e3).videoTracks;
      if (!t3 && (t3 = new y(), k(e3).videoTracks = t3, I)) {
        let a3 = I.call(e3.nativeEl ?? e3);
        for (let t4 of a3) p(e3, t4);
        a3.addEventListener("change", () => {
          t3.dispatchEvent(new Event("change"));
        }), a3.addEventListener("addtrack", (i3) => {
          if ([...t3].some((e4) => e4 instanceof R)) {
            for (let e4 of a3) g(e4);
            return;
          }
          p(e3, i3.track);
        }), a3.addEventListener("removetrack", (e4) => {
          g(e4.track);
        });
      }
      return t3;
    } });
    let a2 = z(e2, "audio");
    (!a2 || `${a2}`.includes("[native code]")) && Object.defineProperty(e2.prototype, "audioTracks", { get() {
      var e3 = this;
      let t3 = k(e3).audioTracks;
      if (!t3 && (t3 = new x(), k(e3).audioTracks = t3, $)) {
        let a3 = $.call(e3.nativeEl ?? e3);
        for (let t4 of a3) P(e3, t4);
        a3.addEventListener("change", () => {
          t3.dispatchEvent(new Event("change"));
        }), a3.addEventListener("addtrack", (i3) => {
          if ([...t3].some((e4) => e4 instanceof K)) {
            for (let e4 of a3) q(e4);
            return;
          }
          P(e3, i3.track);
        }), a3.addEventListener("removetrack", (e4) => {
          q(e4.track);
        });
      }
      return t3;
    } }), "addVideoTrack" in e2.prototype || (e2.prototype.addVideoTrack = function(e3, t3 = "", a3 = "") {
      let i3 = new R();
      return i3.kind = e3, i3.label = t3, i3.language = a3, p(this, i3), i3;
    }), "removeVideoTrack" in e2.prototype || (e2.prototype.removeVideoTrack = g), "addAudioTrack" in e2.prototype || (e2.prototype.addAudioTrack = function(e3, t3 = "", a3 = "") {
      let i3 = new K();
      return i3.kind = e3, i3.label = t3, i3.language = a3, P(this, i3), i3;
    }), "removeAudioTrack" in e2.prototype || (e2.prototype.removeAudioTrack = q), "videoRenditions" in e2.prototype || Object.defineProperty(e2.prototype, "videoRenditions", { get() {
      return i2(this);
    } });
    let i2 = (e3) => {
      let t3 = k(e3).videoRenditions;
      return t3 || (k(t3 = new w()).media = new WeakRef(e3), k(e3).videoRenditions = t3), t3;
    };
    "audioRenditions" in e2.prototype || Object.defineProperty(e2.prototype, "audioRenditions", { get() {
      return n2(this);
    } });
    let n2 = (e3) => {
      let t3 = k(e3).audioRenditions;
      return t3 || (k(t3 = new A()).media = new WeakRef(e3), k(e3).audioRenditions = t3), t3;
    };
    return e2;
  }], 594975);
  try {
    var D = "u" > typeof window ? window : e.g;
    D._sentryModuleMetadata = D._sentryModuleMetadata || {}, D._sentryModuleMetadata[new D.Error().stack] = Object.assign({}, D._sentryModuleMetadata[new D.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s([], 292858);
}]);
