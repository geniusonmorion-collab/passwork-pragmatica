;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "0522d2d9-baaa-3143-168b-7b100c93e323");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 286624, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let s = /tiktok\.com\/(?:player\/v1\/|share\/video\/|@[^/]+\/video\/)([0-9]+)/, r = { [-1]: "emptied", 2: "pause", 0: "ended", 1: "play", 3: "waiting" };
  function i(e2, t2 = {}) {
    let o2 = { src: a(e2, t2), frameborder: 0, width: "100%", height: "100%", allow: "accelerometer; autoplay; fullscreen; encrypted-media; gyroscope; picture-in-picture" };
    return t2.config && (o2["data-config"] = JSON.stringify(t2.config)), `
    <style>
      :host {
        display:inline-block;
        min-width: 300px;
        min-height: 150px;
        position: relative;
      }
      iframe {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        border:0;
      }
    </style>
    <iframe ${(function(e3) {
      let t3 = "";
      for (let o3 in e3) {
        let s2 = e3[o3];
        "" === s2 ? t3 += ` ${u(o3)}` : t3 += ` ${u(o3)}="${u(`${s2}`)}"`;
      }
      return t3;
    })(o2)} title="TikTok video"></iframe>
  `;
  }
  function a(e2, t2 = {}) {
    if (!e2.src) return;
    let o2 = e2.src.match(s), r2 = o2 && o2[1], i2 = { controls: "" === e2.controls ? null : 0, autoplay: e2.autoplay, muted: e2.muted, loop: e2.loop, rel: 0, ...t2.config };
    return `https://www.tiktok.com/player/v1/${r2}?${String(new URLSearchParams((function(e3) {
      let t3 = {};
      for (let o3 in e3) {
        let s2 = e3[o3];
        true === s2 || "" === s2 ? t3[o3] = 1 : false === s2 ? t3[o3] = 0 : null != s2 && (t3[o3] = s2);
      }
      return t3;
    })(i2)))}`;
  }
  class n extends (globalThis.HTMLElement ?? class {
  }) {
    static getTemplateHTML = i;
    static shadowRootOptions = { mode: "open" };
    static get observedAttributes() {
      return ["src", "controls", "loop", "autoplay", "muted"];
    }
    loadComplete = new l();
    #e;
    #t;
    #o = false;
    #s = 0;
    #r = true;
    #i = null;
    #a = 100;
    #n = 0;
    #l;
    constructor() {
      super(), this.#u("config");
    }
    async load() {
      if (this.#e) return;
      this.shadowRoot || this.attachShadow(n.shadowRootOptions);
      let e2 = !this.#t;
      if (this.#t && (this.loadComplete = new l()), this.#t = true, await (this.#e = Promise.resolve()), this.#e = null, this.#s = 0, this.#o = false, this.#r = true, !this.src) {
        this.shadowRoot.innerHTML = "", globalThis.removeEventListener("message", this.#d);
        return;
      }
      let t2 = this.shadowRoot.querySelector("iframe"), o2 = (function(e3) {
        let t3 = {};
        for (let o3 of e3) t3[o3.name] = o3.value;
        return t3;
      })(this.attributes);
      e2 && t2 && (this.#i = JSON.parse(t2.getAttribute("data-config") || "{}")), (null == t2 ? void 0 : t2.src) && t2.src === a(o2, this) || (this.shadowRoot.innerHTML = i(o2, this), t2 = this.shadowRoot.querySelector("iframe")), this.#l = t2, globalThis.addEventListener("message", this.#d);
    }
    async attributeChangedCallback(e2, t2, o2) {
      if (t2 !== o2) switch (e2) {
        case "muted":
          await this.loadComplete, this.muted = null != o2;
          break;
        case "autoplay":
        case "controls":
        case "loop":
        case "src":
          return void this.load();
      }
    }
    get config() {
      return this.#i;
    }
    set config(e2) {
      this.#i = e2;
    }
    #d = (e2) => {
      var t2;
      if (e2.source !== (null == (t2 = this.#l) ? void 0 : t2.contentWindow)) return;
      let o2 = e2.data;
      if (null == o2 ? void 0 : o2["x-tiktok-player"]) switch (o2.type) {
        case "onPlayerReady":
          this.loadComplete.resolve();
          break;
        case "onStateChange": {
          this.#r = [-1, 2, 0].includes(o2.value);
          let e3 = r[o2.value];
          e3 && this.dispatchEvent(new Event(e3));
          break;
        }
        case "onCurrentTime":
          this.#s = o2.value.currentTime, this.#n = o2.value.duration, this.dispatchEvent(new Event("durationchange")), this.dispatchEvent(new Event("timeupdate"));
          break;
        case "onVolumeChange":
          this.#a = o2.value, this.dispatchEvent(new Event("volumechange"));
          break;
        case "onMute":
          this.#o = !!o2.value, this.#a = o2.value ? 0 : this.#a, this.dispatchEvent(new Event("volumechange"));
          break;
        case "onError":
          this.dispatchEvent(new Event("error"));
          break;
        default:
          console.warn("Unhandled TikTok player message:", o2);
      }
    };
    #c(e2, t2) {
      var o2;
      if (!(null == (o2 = this.#l) ? void 0 : o2.contentWindow)) return;
      let s2 = { "x-tiktok-player": true, type: e2, ...void 0 !== t2 ? { value: t2 } : {} };
      this.#l.contentWindow.postMessage(s2, "*");
    }
    async play() {
      await this.loadComplete, this.#c("play");
    }
    async pause() {
      await this.loadComplete, this.#c("pause");
    }
    async #h(e2) {
      await this.loadComplete, this.#c("seekTo", Number(e2));
    }
    async #p() {
      await this.loadComplete, this.#c("mute");
    }
    async #m() {
      await this.loadComplete, this.#c("unMute");
    }
    get volume() {
      return this.#a / 100;
    }
    set volume(e2) {
      console.warn("Volume control is not supported for TikTok videos.");
    }
    get currentTime() {
      return this.#s;
    }
    set currentTime(e2) {
      this.#h(e2);
    }
    get muted() {
      return this.#o;
    }
    set muted(e2) {
      this.#o = e2, e2 ? this.#p() : this.#m();
    }
    get defaultMuted() {
      return this.hasAttribute("muted");
    }
    set defaultMuted(e2) {
      this.toggleAttribute("muted", !!e2);
    }
    get paused() {
      return this.#r;
    }
    get duration() {
      return this.#n;
    }
    get src() {
      return this.getAttribute("src");
    }
    set src(e2) {
      this.setAttribute("src", e2 ?? "");
    }
    #u(e2) {
      if (Object.prototype.hasOwnProperty.call(this, e2)) {
        let t2 = this[e2];
        delete this[e2], this[e2] = t2;
      }
    }
  }
  class l extends Promise {
    constructor(e2 = () => {
    }) {
      let t2, o2;
      super((s2, r2) => {
        e2(s2, r2), t2 = s2, o2 = r2;
      }), this.resolve = t2, this.reject = o2;
    }
  }
  function u(e2) {
    return e2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/`/g, "&#x60;");
  }
  globalThis.customElements && !globalThis.customElements.get("tiktok-video") && globalThis.customElements.define("tiktok-video", n);
  try {
    var d = "u" > typeof window ? window : e.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var c = /* @__PURE__ */ new Set(["style", "children", "ref", "key", "suppressContentEditableWarning", "suppressHydrationWarning", "dangerouslySetInnerHTML"]), h = { className: "class", htmlFor: "for" };
  function p(e2) {
    return e2.toLowerCase();
  }
  function m(e2) {
    return "boolean" == typeof e2 ? e2 ? "" : void 0 : "function" == typeof e2 ? void 0 : "object" != typeof e2 || null === e2 ? e2 : void 0;
  }
  function f(e2, t2, o2) {
    var s2;
    e2[t2] = o2, null == o2 && t2 in ((null == (s2 = globalThis.HTMLElement) ? void 0 : s2.prototype) ?? {}) && e2.removeAttribute(t2);
  }
  var g = (function({ react: e2, tagName: t2, elementClass: o2, events: s2, displayName: r2, defaultProps: i2, toAttributeName: a2 = p, toAttributeValue: n2 = m }) {
    let l2 = Number.parseInt(e2.version) >= 19, u2 = e2.forwardRef((r3, u3) => {
      var d2, p2;
      let g2 = e2.useRef(null), v = e2.useRef(/* @__PURE__ */ new Map()), y = {}, w = {}, b = {}, T = {};
      for (let [e3, t3] of Object.entries(r3)) {
        if (c.has(e3)) {
          b[e3] = t3;
          continue;
        }
        let s3 = a2(h[e3] ?? e3);
        if (o2.prototype && e3 in o2.prototype && !(e3 in ((null == (d2 = globalThis.HTMLElement) ? void 0 : d2.prototype) ?? {})) && !(null == (p2 = o2.observedAttributes) ? void 0 : p2.some((e4) => e4 === s3))) {
          T[e3] = t3;
          continue;
        }
        if (e3.startsWith("on")) {
          y[e3] = t3;
          continue;
        }
        let r4 = n2(t3);
        s3 && null != r4 && (w[s3] = String(r4), l2 || (b[s3] = r4)), s3 && l2 && (r4 !== m(t3) ? b[s3] = r4 : b[s3] = t3);
      }
      if ("u" > typeof window) {
        for (let t3 in y) {
          let o3 = y[t3], r4 = t3.endsWith("Capture"), i3 = ((null == s2 ? void 0 : s2[t3]) ?? t3.slice(2).toLowerCase()).slice(0, r4 ? -7 : void 0);
          e2.useLayoutEffect(() => {
            let e3 = null == g2 ? void 0 : g2.current;
            if (e3 && "function" == typeof o3) return e3.addEventListener(i3, o3, r4), () => {
              e3.removeEventListener(i3, o3, r4);
            };
          }, [null == g2 ? void 0 : g2.current, o3]);
        }
        e2.useLayoutEffect(() => {
          if (null === g2.current) return;
          let e3 = /* @__PURE__ */ new Map();
          for (let t3 in T) f(g2.current, t3, T[t3]), v.current.delete(t3), e3.set(t3, T[t3]);
          for (let [e4, t3] of v.current) f(g2.current, e4, void 0);
          v.current = e3;
        });
      }
      if ("u" < typeof window && (null == o2 ? void 0 : o2.getTemplateHTML) && (null == o2 ? void 0 : o2.shadowRootOptions)) {
        let { mode: t3, delegatesFocus: s3 } = o2.shadowRootOptions;
        b.children = [e2.createElement("template", { shadowrootmode: t3, shadowrootdelegatesfocus: s3, dangerouslySetInnerHTML: { __html: o2.getTemplateHTML(w, r3) }, key: "ce-la-react-ssr-template-shadow-root" }), b.children];
      }
      return e2.createElement(t2, { ...i2, ...b, ref: e2.useCallback((e3) => {
        g2.current = e3, "function" == typeof u3 ? u3(e3) : null !== u3 && (u3.current = e3);
      }, [u3]) }, b.children);
    });
    return u2.displayName = r2 ?? o2.name, u2;
  })({ react: t.default, tagName: "tiktok-video", elementClass: n, toAttributeName: (e2) => "muted" === e2 ? "" : "defaultMuted" === e2 ? "muted" : p(e2) });
  e.s(["default", 0, g], 286624);
}]);
