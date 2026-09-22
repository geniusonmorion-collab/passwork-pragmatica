;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "e4d75d03-3f8f-b4bd-16e5-43cec686a92e");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 640134, (t) => {
  "use strict";
  var e, i, s = t.i(856757);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let o = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting", "waitingforkey", "resize", "enterpictureinpicture", "leavepictureinpicture", "webkitbeginfullscreen", "webkitendfullscreen", "webkitpresentationmodechanged"], l = globalThis.document?.createElement("template");
  l && (l.innerHTML = `
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video,
      audio {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
      }
    </style>
    <slot></slot>
  `);
  let n = (t2, { tag: e2, is: i2 }) => {
    let s2 = globalThis.document?.createElement(e2, { is: i2 }), a2 = s2 ? r(s2) : [];
    return class n2 extends t2 {
      static Events = o;
      static template = l;
      static skipAttributes = [];
      static #t;
      static get observedAttributes() {
        return n2.#e(), [...s2?.constructor?.observedAttributes ?? [], "autopictureinpicture", "disablepictureinpicture", "disableremoteplayback", "autoplay", "controls", "controlslist", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src"];
      }
      static #e() {
        if (this.#t) return;
        this.#t = true;
        let t3 = new Set(this.observedAttributes);
        for (let e3 of (t3.delete("muted"), a2)) if (!(e3 in this.prototype)) if ("function" == typeof s2[e3]) this.prototype[e3] = function(...t4) {
          this.#i();
          let i3 = () => this.call ? this.call(e3, ...t4) : this.nativeEl[e3].apply(this.nativeEl, t4);
          return this.loadComplete && !this.isLoaded ? this.loadComplete.then(i3) : i3();
        };
        else {
          let i3 = { get() {
            this.#i();
            let i4 = e3.toLowerCase();
            if (t3.has(i4)) {
              let t4 = this.getAttribute(i4);
              return null !== t4 && ("" === t4 || t4);
            }
            return this.get?.(e3) ?? this.nativeEl?.[e3] ?? this.#s[e3];
          } };
          e3 !== e3.toUpperCase() && (i3.set = async function(i4) {
            this.#i();
            let s3 = e3.toLowerCase();
            t3.has(s3) ? true === i4 || false === i4 || null == i4 ? this.toggleAttribute(s3, !!i4) : this.setAttribute(s3, i4) : (this.loadComplete && !this.isLoaded && await this.loadComplete, this.set) ? this.set(e3, i4) : this.nativeEl[e3] = i4;
          }), Object.defineProperty(this.prototype, e3, i3);
        }
      }
      #a;
      #o;
      #l = false;
      #n = false;
      #r;
      #s;
      constructor() {
        super(), this.shadowRoot || (this.attachShadow({ mode: "open" }), this.shadowRoot.append(this.constructor.template.content.cloneNode(true))), this.load !== n2.prototype.load && (this.loadComplete = new d());
      }
      get loadComplete() {
        return this.#o;
      }
      set loadComplete(t3) {
        this.#n = false, this.#o = t3, t3?.then(() => {
          this.#n = true;
        });
      }
      get isLoaded() {
        return this.#n;
      }
      get nativeEl() {
        return this.#r ?? this.shadowRoot.querySelector(e2) ?? this.querySelector(e2);
      }
      set nativeEl(t3) {
        this.#r = t3;
      }
      get defaultMuted() {
        return this.hasAttribute("muted");
      }
      set defaultMuted(t3) {
        this.toggleAttribute("muted", !!t3);
      }
      get src() {
        return this.getAttribute("src");
      }
      set src(t3) {
        this.setAttribute("src", `${t3}`);
      }
      get preload() {
        return this.getAttribute("preload") ?? this.nativeEl?.preload;
      }
      set preload(t3) {
        this.setAttribute("preload", `${t3}`);
      }
      async #i() {
        if (this.#a) return;
        for (let t4 of (this.#a = true, this.#d(), this.#u(), a2)) this.#h(t4);
        let t3 = /* @__PURE__ */ new Map(), e3 = this.shadowRoot.querySelector("slot:not([name])");
        for (let i3 of (e3?.addEventListener("slotchange", () => {
          let i4 = new Map(t3);
          e3.assignedElements().filter((t4) => ["track", "source"].includes(t4.localName)).forEach(async (e4) => {
            i4.delete(e4);
            let s3 = t3.get(e4);
            s3 || (s3 = e4.cloneNode(), t3.set(e4, s3)), this.loadComplete && !this.isLoaded && await this.loadComplete, this.nativeEl.append?.(s3);
          }), i4.forEach((t4) => t4.remove());
        }), this.constructor.Events)) this.shadowRoot.addEventListener?.(i3, (t4) => {
          t4.target === this.nativeEl && this.dispatchEvent(new CustomEvent(t4.type, { detail: t4.detail }));
        }, true);
      }
      #h(t3) {
        if (Object.prototype.hasOwnProperty.call(this, t3)) {
          let e3 = this[t3];
          delete this[t3], this[t3] = e3;
        }
      }
      #d() {
        let t3 = document.createElement(e2, { is: i2 });
        for (let { name: e3, value: i3 } of (t3.muted = this.hasAttribute("muted"), this.attributes)) t3.setAttribute(e3, i3);
        for (let e3 of (this.#s = {}, r(t3))) this.#s[e3] = t3[e3];
        t3.removeAttribute("src"), t3.load();
      }
      async #u() {
        if (this.loadComplete && !this.isLoaded && await this.loadComplete, !this.nativeEl) {
          let t3 = document.createElement(e2, { is: i2 });
          t3.part = e2, this.shadowRoot.append(t3);
        }
        this.nativeEl.muted = this.hasAttribute("muted");
      }
      attributeChangedCallback(t3, e3, i3) {
        this.#i(), "src" === t3 && this.load !== n2.prototype.load && this.#c(), this.#p(t3, e3, i3);
      }
      async #c() {
        this.#l && (this.loadComplete = new d()), this.#l = true, await Promise.resolve(), await this.load(), this.loadComplete?.resolve(), await this.loadComplete;
      }
      async #p(t3, e3, i3) {
        this.loadComplete && !this.isLoaded && await this.loadComplete, ["id", "class", ...this.constructor.skipAttributes].includes(t3) || (null === i3 ? this.nativeEl.removeAttribute?.(t3) : this.nativeEl.setAttribute?.(t3, i3));
      }
      connectedCallback() {
        this.#i();
      }
    };
  };
  function r(t2) {
    let e2 = [];
    for (let i2 = Object.getPrototypeOf(t2); i2 && i2 !== HTMLElement.prototype; i2 = Object.getPrototypeOf(i2)) e2.push(...Object.getOwnPropertyNames(i2));
    return e2;
  }
  class d extends Promise {
    constructor(t2 = () => {
    }) {
      let e2, i2;
      super((s2, a2) => {
        t2(s2, a2), e2 = s2, i2 = a2;
      }), this.resolve = e2, this.reject = i2;
    }
  }
  let u = globalThis.document ? n(HTMLElement, { tag: "video" }) : class {
  };
  globalThis.document && n(HTMLElement, { tag: "audio" });
  try {
    var h = "u" > typeof window ? window : t.g;
    h._sentryModuleMetadata = h._sentryModuleMetadata || {}, h._sentryModuleMetadata[new h.Error().stack] = Object.assign({}, h._sentryModuleMetadata[new h.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let c = null == (e = globalThis.document) ? void 0 : e.createElement("template");
  c && (c.innerHTML = `
  <div class="wistia_embed"></div>
  `);
  let p = null == (i = globalThis.document) ? void 0 : i.createElement("template");
  p && (p.innerHTML = `
  <style>
    :host {
      display: inline-block;
      min-width: 300px;
      min-height: 150px;
      position: relative;
    }
    ::slotted(.wistia_embed) {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  </style>
  <slot></slot>
  `);
  class m extends u {
    static template = p;
    static skipAttributes = ["src"];
    get nativeEl() {
      var t2;
      return (null == (t2 = this.api) ? void 0 : t2.elem()) ?? this.querySelector("video");
    }
    async load() {
      var t2, e2;
      let i2;
      if (null == (t2 = this.querySelector(".wistia_embed")) || t2.remove(), !this.src) return;
      await new Promise((t3) => setTimeout(t3, 50));
      let s2 = this.src.match(/(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/i)[1], a2 = { autoPlay: this.autoplay, preload: this.preload ?? "metadata", playsinline: this.playsInline, endVideoBehavior: this.loop && "loop", chromeless: !this.controls, playButton: this.controls, muted: this.defaultMuted };
      this.append(c.content.cloneNode(true));
      let o2 = this.querySelector(".wistia_embed");
      o2.id || (e2 = s2, i2 = ++w, o2.id = `${e2}${i2}`), o2.classList.add(`wistia_async_${s2}`), await f("https://fast.wistia.com/assets/external/E-v1.js", "Wistia"), this.api = await new Promise((t3) => {
        globalThis._wq.push({ id: o2.id, onReady: t3, options: a2 });
      });
    }
    async attributeChangedCallback(t2, e2, i2) {
      if ("controls" === t2) {
        await this.loadComplete, "controls" === t2 && (this.api.bigPlayButtonEnabled(this.controls), this.controls ? this.api.releaseChromeless() : this.api.requestChromeless());
        return;
      }
      super.attributeChangedCallback(t2, e2, i2);
    }
    get duration() {
      var t2;
      return null == (t2 = this.api) ? void 0 : t2.duration();
    }
    async play() {
      return await this.loadComplete, this.api.play(), new Promise((t2) => this.addEventListener("playing", t2));
    }
  }
  let y = {};
  async function f(t2, e2) {
    return e2 ? y[t2] ? y[t2] : self[e2] ? self[e2] : y[t2] = new Promise((i2, s2) => {
      let a2 = document.createElement("script");
      a2.defer = true, a2.src = t2, a2.onload = () => i2(self[e2]), a2.onerror = s2, document.head.append(a2);
    }) : import(t2);
  }
  let w = 0;
  globalThis.customElements && !globalThis.customElements.get("wistia-video") && globalThis.customElements.define("wistia-video", m);
  try {
    var b = "u" > typeof window ? window : t.g;
    b._sentryModuleMetadata = b._sentryModuleMetadata || {}, b._sentryModuleMetadata[new b.Error().stack] = Object.assign({}, b._sentryModuleMetadata[new b.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  var g = /* @__PURE__ */ new Set(["style", "children", "ref", "key", "suppressContentEditableWarning", "suppressHydrationWarning", "dangerouslySetInnerHTML"]), v = { className: "class", htmlFor: "for" };
  function E(t2) {
    return t2.toLowerCase();
  }
  function M(t2) {
    return "boolean" == typeof t2 ? t2 ? "" : void 0 : "function" == typeof t2 ? void 0 : "object" != typeof t2 || null === t2 ? t2 : void 0;
  }
  function C(t2, e2, i2) {
    var s2;
    t2[e2] = i2, null == i2 && e2 in ((null == (s2 = globalThis.HTMLElement) ? void 0 : s2.prototype) ?? {}) && t2.removeAttribute(e2);
  }
  var L = (function({ react: t2, tagName: e2, elementClass: i2, events: s2, displayName: a2, defaultProps: o2, toAttributeName: l2 = E, toAttributeValue: n2 = M }) {
    let r2 = Number.parseInt(t2.version) >= 19, d2 = t2.forwardRef((a3, d3) => {
      var u2, h2;
      let c2 = t2.useRef(null), p2 = t2.useRef(/* @__PURE__ */ new Map()), m2 = {}, y2 = {}, f2 = {}, w2 = {};
      for (let [t3, e3] of Object.entries(a3)) {
        if (g.has(t3)) {
          f2[t3] = e3;
          continue;
        }
        let s3 = l2(v[t3] ?? t3);
        if (i2.prototype && t3 in i2.prototype && !(t3 in ((null == (u2 = globalThis.HTMLElement) ? void 0 : u2.prototype) ?? {})) && !(null == (h2 = i2.observedAttributes) ? void 0 : h2.some((t4) => t4 === s3))) {
          w2[t3] = e3;
          continue;
        }
        if (t3.startsWith("on")) {
          m2[t3] = e3;
          continue;
        }
        let a4 = n2(e3);
        s3 && null != a4 && (y2[s3] = String(a4), r2 || (f2[s3] = a4)), s3 && r2 && (a4 !== M(e3) ? f2[s3] = a4 : f2[s3] = e3);
      }
      if ("u" > typeof window) {
        for (let e3 in m2) {
          let i3 = m2[e3], a4 = e3.endsWith("Capture"), o3 = ((null == s2 ? void 0 : s2[e3]) ?? e3.slice(2).toLowerCase()).slice(0, a4 ? -7 : void 0);
          t2.useLayoutEffect(() => {
            let t3 = null == c2 ? void 0 : c2.current;
            if (t3 && "function" == typeof i3) return t3.addEventListener(o3, i3, a4), () => {
              t3.removeEventListener(o3, i3, a4);
            };
          }, [null == c2 ? void 0 : c2.current, i3]);
        }
        t2.useLayoutEffect(() => {
          if (null === c2.current) return;
          let t3 = /* @__PURE__ */ new Map();
          for (let e3 in w2) C(c2.current, e3, w2[e3]), p2.current.delete(e3), t3.set(e3, w2[e3]);
          for (let [t4, e3] of p2.current) C(c2.current, t4, void 0);
          p2.current = t3;
        });
      }
      if ("u" < typeof window && (null == i2 ? void 0 : i2.getTemplateHTML) && (null == i2 ? void 0 : i2.shadowRootOptions)) {
        let { mode: e3, delegatesFocus: s3 } = i2.shadowRootOptions;
        f2.children = [t2.createElement("template", { shadowrootmode: e3, shadowrootdelegatesfocus: s3, dangerouslySetInnerHTML: { __html: i2.getTemplateHTML(y2, a3) }, key: "ce-la-react-ssr-template-shadow-root" }), f2.children];
      }
      return t2.createElement(e2, { ...o2, ...f2, ref: t2.useCallback((t3) => {
        c2.current = t3, "function" == typeof d3 ? d3(t3) : null !== d3 && (d3.current = t3);
      }, [d3]) }, f2.children);
    });
    return d2.displayName = a2 ?? i2.name, d2;
  })({ react: s.default, tagName: "wistia-video", elementClass: m, toAttributeName: (t2) => "muted" === t2 ? "" : "defaultMuted" === t2 ? "muted" : E(t2) });
  t.s(["default", 0, L], 640134);
}]);
