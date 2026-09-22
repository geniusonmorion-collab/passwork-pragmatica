;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "b3e441a9-f93b-6ade-ca42-117b910fcef6");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 450375, (t) => {
  "use strict";
  var e = t.i(856757);
  try {
    var i = "u" > typeof window ? window : t.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let s = /open\.spotify\.com\/(\w+)\/(\w+)/i;
  function n(t2, e2 = {}) {
    let i2 = { src: r(t2, e2), scrolling: "no", frameborder: 0, width: "100%", height: "100%", allow: "accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture" };
    return `
    <style>
      :host {
        display: inline-block;
        min-width: 160px;
        min-height: 80px;
        position: relative;
      }
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      :host(:not([controls])) {
        display: none !important;
      }
    </style>
    <iframe${(function(t3) {
      let e3 = "";
      for (let i3 in t3) {
        let s2 = t3[i3];
        "" === s2 ? e3 += ` ${i3}` : e3 += ` ${i3}="${s2}"`;
      }
      return e3;
    })(i2)}></iframe>
  `;
  }
  function r(t2, e2) {
    var i2, n2, r2;
    if (!t2.src) return;
    let o2 = t2.src.match(s), a2 = o2 && o2[1], l2 = o2 && o2[2], d2 = { t: null == (i2 = e2.config) ? void 0 : i2.startAt, theme: (null == (n2 = e2.config) ? void 0 : n2.theme) === "dark" ? "0" : null }, u2 = (null == (r2 = e2.config) ? void 0 : r2.preferVideo) ? "/video" : "";
    return `https://open.spotify.com/embed/${a2}/${l2}${u2}?${String(new URLSearchParams((function(t3) {
      let e3 = {};
      for (let i3 in t3) {
        let s2 = t3[i3];
        true === s2 || "" === s2 ? e3[i3] = 1 : false === s2 ? e3[i3] = 0 : null != s2 && (e3[i3] = s2);
      }
      return e3;
    })(d2)))}`;
  }
  class o extends (globalThis.HTMLElement ?? class {
  }) {
    static getTemplateHTML = n;
    static shadowRootOptions = { mode: "open" };
    static observedAttributes = ["controls", "loop", "src"];
    loadComplete = new u();
    #t;
    #e;
    #i;
    #s = false;
    #n = false;
    #r = true;
    #o = 0;
    #a = NaN;
    #l = false;
    #d = null;
    constructor() {
      super(), this.#u("config");
    }
    async load() {
      var t2, e2, i2;
      if (this.#t) return;
      this.#e && (this.loadComplete = new u()), this.#e = true, await (this.#t = Promise.resolve()), this.#t = null, this.#s = false, this.#n = false, this.#o = 0, this.#a = NaN, this.#l = false, this.dispatchEvent(new Event("emptied"));
      let s2 = this.api;
      if (this.api = null, !this.src) return;
      this.dispatchEvent(new Event("loadstart"));
      let o2 = { t: null == (t2 = this.config) ? void 0 : t2.startAt, theme: (null == (e2 = this.config) ? void 0 : e2.theme) === "dark" ? "0" : null, preferVideo: null == (i2 = this.config) ? void 0 : i2.preferVideo };
      if (this.#i) this.api = s2, this.api.iframeElement.src = r(a(this.attributes), this);
      else {
        this.#i = true, this.shadowRoot || (this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = n(a(this.attributes), this));
        let t3 = this.shadowRoot.querySelector("iframe"), e3 = await d("https://open.spotify.com/embed-podcast/iframe-api/v1", "SpotifyIframeApi", "onSpotifyIframeApiReady");
        this.api = await new Promise((i3) => e3.createController(t3, o2, i3)), this.api.iframeElement = t3, this.api.addListener("ready", () => {
          this.dispatchEvent(new Event("loadedmetadata")), this.dispatchEvent(new Event("durationchange")), this.dispatchEvent(new Event("volumechange"));
        }), this.api.addListener("playback_update", (t4) => {
          if (this.#n && this.#r && (t4.data.isBuffering || !t4.data.isPaused)) {
            this.#n = false, this.currentTime = 1;
            return;
          }
          if (t4.data.duration / 1e3 !== this.#a && (this.#n = false, this.#a = t4.data.duration / 1e3, this.dispatchEvent(new Event("durationchange"))), t4.data.position / 1e3 !== this.#o && (this.#l = false, this.#n = false, this.#o = t4.data.position / 1e3, this.dispatchEvent(new Event("timeupdate"))), !this.#s && !this.#r && t4.data.isPaused) {
            this.#r = true, this.dispatchEvent(new Event("pause"));
            return;
          }
          if (this.#r && (t4.data.isBuffering || !t4.data.isPaused)) {
            this.#r = false, this.dispatchEvent(new Event("play")), this.#s = t4.data.isBuffering, this.#s ? this.dispatchEvent(new Event("waiting")) : this.dispatchEvent(new Event("playing"));
            return;
          }
          if (this.#s && !t4.data.isPaused) {
            this.#s = false, this.dispatchEvent(new Event("playing"));
            return;
          }
          if (!this.paused && !this.seeking && !this.#n && Math.ceil(this.currentTime) >= this.duration) {
            if (this.#n = true, this.loop) {
              this.currentTime = 1;
              return;
            }
            this.continuous || (this.pause(), this.dispatchEvent(new Event("ended")));
            return;
          }
        });
      }
      this.loadComplete.resolve(), await this.loadComplete;
    }
    async attributeChangedCallback(t2, e2, i2) {
      if (e2 !== i2 && "src" === t2) return void this.load();
    }
    async play() {
      var t2;
      return this.#r = false, this.#s = true, this.dispatchEvent(new Event("play")), await this.loadComplete, null == (t2 = this.api) ? void 0 : t2.resume();
    }
    async pause() {
      var t2;
      return await this.loadComplete, null == (t2 = this.api) ? void 0 : t2.pause();
    }
    get config() {
      return this.#d;
    }
    set config(t2) {
      this.#d = t2;
    }
    get paused() {
      return this.#r ?? true;
    }
    get muted() {
      return false;
    }
    set muted(t2) {
    }
    get volume() {
      return 1;
    }
    set volume(t2) {
    }
    get ended() {
      return Math.ceil(this.currentTime) >= this.duration;
    }
    get seeking() {
      return this.#l;
    }
    get loop() {
      return this.hasAttribute("loop");
    }
    set loop(t2) {
      this.loop != t2 && this.toggleAttribute("loop", !!t2);
    }
    get currentTime() {
      return this.#o;
    }
    set currentTime(t2) {
      if (this.currentTime == t2) return;
      this.#l = true;
      let e2 = this.#o;
      this.#o = t2, this.dispatchEvent(new Event("timeupdate")), this.#o = e2, this.loadComplete.then(() => {
        var e3;
        null == (e3 = this.api) || e3.seek(t2);
      });
    }
    get duration() {
      return this.#a;
    }
    get src() {
      return this.getAttribute("src");
    }
    set src(t2) {
      this.setAttribute("src", `${t2}`);
    }
    #u(t2) {
      if (Object.prototype.hasOwnProperty.call(this, t2)) {
        let e2 = this[t2];
        delete this[t2], this[t2] = e2;
      }
    }
  }
  function a(t2) {
    let e2 = {};
    for (let i2 of t2) e2[i2.name] = i2.value;
    return e2;
  }
  let l = {};
  async function d(t2, e2, i2) {
    return l[t2] ? l[t2] : e2 && self[e2] ? Promise.resolve(self[e2]) : l[t2] = new Promise(function(e3, s2) {
      let n2 = document.createElement("script");
      n2.src = t2;
      let r2 = (t3) => e3(t3);
      i2 && (self[i2] = r2), n2.onload = () => !i2 && r2(), n2.onerror = s2, document.head.append(n2);
    });
  }
  class u extends Promise {
    constructor(t2 = () => {
    }) {
      let e2, i2;
      super((s2, n2) => {
        t2(s2, n2), e2 = s2, i2 = n2;
      }), this.resolve = e2, this.reject = i2;
    }
  }
  globalThis.customElements && !globalThis.customElements.get("spotify-audio") && globalThis.customElements.define("spotify-audio", o);
  try {
    var h = "u" > typeof window ? window : t.g;
    h._sentryModuleMetadata = h._sentryModuleMetadata || {}, h._sentryModuleMetadata[new h.Error().stack] = Object.assign({}, h._sentryModuleMetadata[new h.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  var c = /* @__PURE__ */ new Set(["style", "children", "ref", "key", "suppressContentEditableWarning", "suppressHydrationWarning", "dangerouslySetInnerHTML"]), p = { className: "class", htmlFor: "for" };
  function f(t2) {
    return t2.toLowerCase();
  }
  function m(t2) {
    return "boolean" == typeof t2 ? t2 ? "" : void 0 : "function" == typeof t2 ? void 0 : "object" != typeof t2 || null === t2 ? t2 : void 0;
  }
  function v(t2, e2, i2) {
    var s2;
    t2[e2] = i2, null == i2 && e2 in ((null == (s2 = globalThis.HTMLElement) ? void 0 : s2.prototype) ?? {}) && t2.removeAttribute(e2);
  }
  var g = (function({ react: t2, tagName: e2, elementClass: i2, events: s2, displayName: n2, defaultProps: r2, toAttributeName: o2 = f, toAttributeValue: a2 = m }) {
    let l2 = Number.parseInt(t2.version) >= 19, d2 = t2.forwardRef((n3, d3) => {
      var u2, h2;
      let f2 = t2.useRef(null), g2 = t2.useRef(/* @__PURE__ */ new Map()), y = {}, w = {}, E = {}, T = {};
      for (let [t3, e3] of Object.entries(n3)) {
        if (c.has(t3)) {
          E[t3] = e3;
          continue;
        }
        let s3 = o2(p[t3] ?? t3);
        if (i2.prototype && t3 in i2.prototype && !(t3 in ((null == (u2 = globalThis.HTMLElement) ? void 0 : u2.prototype) ?? {})) && !(null == (h2 = i2.observedAttributes) ? void 0 : h2.some((t4) => t4 === s3))) {
          T[t3] = e3;
          continue;
        }
        if (t3.startsWith("on")) {
          y[t3] = e3;
          continue;
        }
        let n4 = a2(e3);
        s3 && null != n4 && (w[s3] = String(n4), l2 || (E[s3] = n4)), s3 && l2 && (n4 !== m(e3) ? E[s3] = n4 : E[s3] = e3);
      }
      if ("u" > typeof window) {
        for (let e3 in y) {
          let i3 = y[e3], n4 = e3.endsWith("Capture"), r3 = ((null == s2 ? void 0 : s2[e3]) ?? e3.slice(2).toLowerCase()).slice(0, n4 ? -7 : void 0);
          t2.useLayoutEffect(() => {
            let t3 = null == f2 ? void 0 : f2.current;
            if (t3 && "function" == typeof i3) return t3.addEventListener(r3, i3, n4), () => {
              t3.removeEventListener(r3, i3, n4);
            };
          }, [null == f2 ? void 0 : f2.current, i3]);
        }
        t2.useLayoutEffect(() => {
          if (null === f2.current) return;
          let t3 = /* @__PURE__ */ new Map();
          for (let e3 in T) v(f2.current, e3, T[e3]), g2.current.delete(e3), t3.set(e3, T[e3]);
          for (let [t4, e3] of g2.current) v(f2.current, t4, void 0);
          g2.current = t3;
        });
      }
      if ("u" < typeof window && (null == i2 ? void 0 : i2.getTemplateHTML) && (null == i2 ? void 0 : i2.shadowRootOptions)) {
        let { mode: e3, delegatesFocus: s3 } = i2.shadowRootOptions;
        E.children = [t2.createElement("template", { shadowrootmode: e3, shadowrootdelegatesfocus: s3, dangerouslySetInnerHTML: { __html: i2.getTemplateHTML(w, n3) }, key: "ce-la-react-ssr-template-shadow-root" }), E.children];
      }
      return t2.createElement(e2, { ...r2, ...E, ref: t2.useCallback((t3) => {
        f2.current = t3, "function" == typeof d3 ? d3(t3) : null !== d3 && (d3.current = t3);
      }, [d3]) }, E.children);
    });
    return d2.displayName = n2 ?? i2.name, d2;
  })({ react: e.default, tagName: "spotify-audio", elementClass: o, toAttributeName: (t2) => "muted" === t2 ? "" : "defaultMuted" === t2 ? "muted" : f(t2) });
  t.s(["default", 0, g], 450375);
}]);
