;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "edfa92db-6f28-450a-1933-07cc2bd8c88e");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 932443, (t) => {
  "use strict";
  var e = t.i(856757);
  try {
    var a = "u" > typeof window ? window : t.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let i = "https://player.twitch.tv", s = /(?:www\.|go\.)?twitch\.tv\/(?:videos?\/|\?video=)(\d+)($|\?)/, r = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
  function n(t2, e2 = {}) {
    let a2 = { src: o(t2, e2), frameborder: "0", width: "100%", height: "100%", allow: "accelerometer; fullscreen; autoplay; encrypted-media; picture-in-picture;", sandbox: "allow-modals allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox", scrolling: "no" };
    return e2.config && (a2["data-config"] = JSON.stringify(e2.config)), `
    <style>
      :host {
        display: inline-block;
        min-width: 300px;
        min-height: 150px;
        position: relative;
      }
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      :host(:not([controls])) {
        pointer-events: none;
      }
    </style>
    <iframe${(function(t3) {
      let e3 = "";
      for (let a3 in t3) {
        let i2 = t3[a3];
        "" === i2 ? e3 += ` ${u(a3)}` : e3 += ` ${u(a3)}="${u(`${i2}`)}"`;
      }
      return e3;
    })(a2)}></iframe>
  `;
  }
  function o(t2, e2) {
    var a2;
    if (!t2.src) return;
    let n2 = t2.src.match(s), o2 = t2.src.match(r), l2 = { parent: null == (a2 = globalThis.location) ? void 0 : a2.hostname, controls: "" === t2.controls && null, autoplay: "" === t2.autoplay && null, muted: t2.muted, preload: t2.preload, ...e2.config };
    if (n2) {
      let t3 = n2[1];
      return `${i}/?video=v${t3}&${d(l2)}`;
    }
    if (o2) {
      let t3 = o2[1];
      return `${i}/?channel=${t3}&${d(l2)}`;
    }
    return "";
  }
  class l extends (globalThis.HTMLElement ?? class {
  }) {
    static getTemplateHTML = n;
    static shadowRootOptions = { mode: "open" };
    static observedAttributes = ["autoplay", "controls", "loop", "muted", "playsinline", "preload", "src"];
    loadComplete = new h();
    #t;
    #e;
    #a;
    #i = {};
    #s = 0;
    #r = false;
    #n = 1;
    #o = !this.autoplay;
    #l = false;
    #u = 0;
    #d = null;
    constructor() {
      super(), this.#h("config");
    }
    get config() {
      return this.#d;
    }
    set config(t2) {
      this.#d = t2;
    }
    async load() {
      if (this.#t) return;
      this.shadowRoot || this.attachShadow({ mode: "open" });
      let t2 = !this.#e;
      if (this.#e && (this.loadComplete = new h()), this.#e = true, await (this.#t = Promise.resolve()), this.#t = null, this.#u = 0, this.dispatchEvent(new Event("emptied")), !this.src) {
        this.shadowRoot.innerHTML = "", globalThis.removeEventListener("message", this.#c);
        return;
      }
      this.dispatchEvent(new Event("loadstart"));
      let e2 = this.shadowRoot.querySelector("iframe"), a2 = (function(t3) {
        let e3 = {};
        for (let a3 of t3) e3[a3.name] = a3.value;
        return e3;
      })(this.attributes);
      t2 && e2 && (this.#d = JSON.parse(e2.getAttribute("data-config") || "{}")), (null == e2 ? void 0 : e2.src) && e2.src === o(a2, this) || (this.shadowRoot.innerHTML = n(a2, this), e2 = this.shadowRoot.querySelector("iframe")), this.#a = e2, globalThis.addEventListener("message", this.#c);
    }
    attributeChangedCallback(t2, e2, a2) {
      if (e2 !== a2) switch (t2) {
        case "src":
        case "controls":
          this.load();
      }
    }
    getVideoPlaybackQuality() {
      return this.#i.stats.videoStats;
    }
    get src() {
      return this.getAttribute("src");
    }
    set src(t2) {
      this.setAttribute("src", t2);
    }
    get readyState() {
      return this.#u;
    }
    get seeking() {
      return this.#l;
    }
    get buffered() {
      var t2, e2, a2;
      return a2 = (null == (e2 = null == (t2 = this.#i.stats) ? void 0 : t2.videoStats) ? void 0 : e2.bufferSize) ?? 0, Array.isArray(0) ? c(0) : null == a2 || 0 === a2 ? c([[0, 0]]) : c([[0, a2]]);
    }
    get paused() {
      return this.#i.playback ? "Idle" === this.#i.playback : this.#o;
    }
    get ended() {
      return !!this.#i.playback && "Ended" === this.#i.playback;
    }
    get duration() {
      return this.#i.duration ?? NaN;
    }
    get autoplay() {
      return this.hasAttribute("autoplay");
    }
    set autoplay(t2) {
      this.autoplay != t2 && this.toggleAttribute("autoplay", !!t2);
    }
    get controls() {
      return this.hasAttribute("controls");
    }
    set controls(t2) {
      this.controls != t2 && this.toggleAttribute("controls", !!t2);
    }
    get currentTime() {
      return this.#i.currentTime ? this.#i.currentTime : this.#s;
    }
    set currentTime(t2) {
      this.#s = t2, this.loadComplete.then(() => {
        this.#p(4, t2);
      });
    }
    get defaultMuted() {
      return this.hasAttribute("muted");
    }
    set defaultMuted(t2) {
      this.toggleAttribute("muted", !!t2);
    }
    get loop() {
      return this.hasAttribute("loop");
    }
    set loop(t2) {
      this.toggleAttribute("loop", !!t2);
    }
    get muted() {
      return this.#r;
    }
    set muted(t2) {
      this.#r = t2, this.loadComplete.then(() => {
        this.#p(10, t2);
      });
    }
    get volume() {
      return this.#n;
    }
    set volume(t2) {
      this.#n = t2, this.loadComplete.then(() => {
        this.#p(11, t2);
      });
    }
    get playsInline() {
      return this.hasAttribute("playsinline");
    }
    set playsInline(t2) {
      this.toggleAttribute("playsinline", !!t2);
    }
    play() {
      this.#o = false, this.#p(3);
    }
    pause() {
      this.#o = true, this.#p(2);
    }
    #c = async (t2) => {
      var e2, a2, i2, s2;
      if (!this.#a.contentWindow) return;
      let { data: r2, source: n2 } = t2;
      if (n2 === this.#a.contentWindow) {
        if ("twitch-embed" === r2.namespace) await new Promise((t3) => setTimeout(t3, 10)), "ready" === r2.eventName ? (this.dispatchEvent(new Event("loadcomplete")), this.loadComplete.resolve(), this.#u = 1, this.dispatchEvent(new Event("loadedmetadata"))) : "seek" === r2.eventName ? (this.#l = true, this.dispatchEvent(new Event("seeking"))) : "playing" === r2.eventName ? (this.#l && (this.#l = false, this.dispatchEvent(new Event("seeked"))), this.#u = 3, this.dispatchEvent(new Event("playing"))) : this.dispatchEvent(new Event(r2.eventName));
        else if ("twitch-embed-player-proxy" === r2.namespace && "UPDATE_STATE" === r2.eventName) {
          let t3 = this.#i.duration, n3 = this.#i.currentTime, o2 = this.#i.volume, l2 = this.#i.muted, u2 = null == (a2 = null == (e2 = this.#i.stats) ? void 0 : e2.videoStats) ? void 0 : a2.bufferSize;
          this.#i = { ...this.#i, ...r2.params }, t3 !== this.#i.duration && this.dispatchEvent(new Event("durationchange")), n3 !== this.#i.currentTime && this.dispatchEvent(new Event("timeupdate")), (o2 !== this.#i.volume || l2 !== this.#i.muted) && (void 0 !== this.#i.volume && (this.#n = this.#i.volume), void 0 !== this.#i.muted && (this.#r = this.#i.muted), this.dispatchEvent(new Event("volumechange"))), u2 !== (null == (s2 = null == (i2 = this.#i.stats) ? void 0 : i2.videoStats) ? void 0 : s2.bufferSize) && this.dispatchEvent(new Event("progress"));
        }
      }
    };
    #p(t2, e2) {
      this.#a.contentWindow && this.#a.contentWindow.postMessage({ eventName: t2, params: e2, namespace: "twitch-embed-player-proxy" }, i);
    }
    #h(t2) {
      if (Object.prototype.hasOwnProperty.call(this, t2)) {
        let e2 = this[t2];
        delete this[t2], this[t2] = e2;
      }
    }
  }
  function u(t2) {
    return t2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/`/g, "&#x60;");
  }
  function d(t2) {
    return String(new URLSearchParams((function(t3) {
      let e2 = {};
      for (let a2 in t3) {
        let i2 = t3[a2];
        true === i2 || "" === i2 ? e2[a2] = true : false === i2 ? e2[a2] = false : null != i2 && (e2[a2] = i2);
      }
      return e2;
    })(t2)));
  }
  class h extends Promise {
    constructor(t2 = () => {
    }) {
      let e2, a2;
      super((i2, s2) => {
        t2(i2, s2), e2 = i2, a2 = s2;
      }), this.resolve = e2, this.reject = a2;
    }
  }
  function c(t2) {
    return Object.defineProperties(t2, { start: { value: (e2) => t2[e2][0] }, end: { value: (e2) => t2[e2][1] } }), t2;
  }
  globalThis.customElements && !globalThis.customElements.get("twitch-video") && globalThis.customElements.define("twitch-video", l);
  try {
    var p = "u" > typeof window ? window : t.g;
    p._sentryModuleMetadata = p._sentryModuleMetadata || {}, p._sentryModuleMetadata[new p.Error().stack] = Object.assign({}, p._sentryModuleMetadata[new p.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  var m = /* @__PURE__ */ new Set(["style", "children", "ref", "key", "suppressContentEditableWarning", "suppressHydrationWarning", "dangerouslySetInnerHTML"]), y = { className: "class", htmlFor: "for" };
  function f(t2) {
    return t2.toLowerCase();
  }
  function v(t2) {
    return "boolean" == typeof t2 ? t2 ? "" : void 0 : "function" == typeof t2 ? void 0 : "object" != typeof t2 || null === t2 ? t2 : void 0;
  }
  function g(t2, e2, a2) {
    var i2;
    t2[e2] = a2, null == a2 && e2 in ((null == (i2 = globalThis.HTMLElement) ? void 0 : i2.prototype) ?? {}) && t2.removeAttribute(e2);
  }
  var w = (function({ react: t2, tagName: e2, elementClass: a2, events: i2, displayName: s2, defaultProps: r2, toAttributeName: n2 = f, toAttributeValue: o2 = v }) {
    let l2 = Number.parseInt(t2.version) >= 19, u2 = t2.forwardRef((s3, u3) => {
      var d2, h2;
      let c2 = t2.useRef(null), p2 = t2.useRef(/* @__PURE__ */ new Map()), f2 = {}, w2 = {}, b = {}, S = {};
      for (let [t3, e3] of Object.entries(s3)) {
        if (m.has(t3)) {
          b[t3] = e3;
          continue;
        }
        let i3 = n2(y[t3] ?? t3);
        if (a2.prototype && t3 in a2.prototype && !(t3 in ((null == (d2 = globalThis.HTMLElement) ? void 0 : d2.prototype) ?? {})) && !(null == (h2 = a2.observedAttributes) ? void 0 : h2.some((t4) => t4 === i3))) {
          S[t3] = e3;
          continue;
        }
        if (t3.startsWith("on")) {
          f2[t3] = e3;
          continue;
        }
        let s4 = o2(e3);
        i3 && null != s4 && (w2[i3] = String(s4), l2 || (b[i3] = s4)), i3 && l2 && (s4 !== v(e3) ? b[i3] = s4 : b[i3] = e3);
      }
      if ("u" > typeof window) {
        for (let e3 in f2) {
          let a3 = f2[e3], s4 = e3.endsWith("Capture"), r3 = ((null == i2 ? void 0 : i2[e3]) ?? e3.slice(2).toLowerCase()).slice(0, s4 ? -7 : void 0);
          t2.useLayoutEffect(() => {
            let t3 = null == c2 ? void 0 : c2.current;
            if (t3 && "function" == typeof a3) return t3.addEventListener(r3, a3, s4), () => {
              t3.removeEventListener(r3, a3, s4);
            };
          }, [null == c2 ? void 0 : c2.current, a3]);
        }
        t2.useLayoutEffect(() => {
          if (null === c2.current) return;
          let t3 = /* @__PURE__ */ new Map();
          for (let e3 in S) g(c2.current, e3, S[e3]), p2.current.delete(e3), t3.set(e3, S[e3]);
          for (let [t4, e3] of p2.current) g(c2.current, t4, void 0);
          p2.current = t3;
        });
      }
      if ("u" < typeof window && (null == a2 ? void 0 : a2.getTemplateHTML) && (null == a2 ? void 0 : a2.shadowRootOptions)) {
        let { mode: e3, delegatesFocus: i3 } = a2.shadowRootOptions;
        b.children = [t2.createElement("template", { shadowrootmode: e3, shadowrootdelegatesfocus: i3, dangerouslySetInnerHTML: { __html: a2.getTemplateHTML(w2, s3) }, key: "ce-la-react-ssr-template-shadow-root" }), b.children];
      }
      return t2.createElement(e2, { ...r2, ...b, ref: t2.useCallback((t3) => {
        c2.current = t3, "function" == typeof u3 ? u3(t3) : null !== u3 && (u3.current = t3);
      }, [u3]) }, b.children);
    });
    return u2.displayName = s2 ?? a2.name, u2;
  })({ react: e.default, tagName: "twitch-video", elementClass: l, toAttributeName: (t2) => "muted" === t2 ? "" : "defaultMuted" === t2 ? "muted" : f(t2) });
  t.s(["default", 0, w], 932443);
}]);
