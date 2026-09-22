;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "bc9f3425-4a67-e731-7af9-36bb29d374ce");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 429973, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function i(e2) {
    return Object.defineProperties(e2, { start: { value: (t2) => e2[t2][0] }, end: { value: (t2) => e2[t2][1] } }), e2;
  }
  e.s(["MediaPlayedRangesMixin", 0, function(e2) {
    return class extends e2 {
      _playedRanges = [];
      _currentPlayedRange = null;
      _RANGE_EPSILON = 0.5;
      _seeking = false;
      connectedCallback() {
        super.connectedCallback && super.connectedCallback(), this.addEventListener("play", () => this.onPlaybackStart({ time: this.currentTime })), this.addEventListener("pause", () => this.onPlaybackStop({ time: this.currentTime })), this.addEventListener("ended", () => this.onPlaybackStop({ time: this.currentTime })), this.addEventListener("seeking", () => this.onSeeking()), this.addEventListener("seeked", () => this.onSeeked({ time: this.currentTime }));
      }
      onPlaybackStart(e3 = {}) {
        this._seeking = false;
        let { time: t2 } = e3, i2 = "number" == typeof t2 ? t2 : this.currentTime;
        this._currentPlayedRange || (this._currentPlayedRange = { start: i2, end: i2 });
      }
      onSeeking() {
        this._seeking = true, this._commitCurrentRange();
      }
      onSeeked(e3 = {}) {
        this._seeking = false;
        let { time: t2 } = e3, i2 = "number" == typeof t2 ? t2 : this.currentTime;
        this._currentPlayedRange = { start: i2, end: i2 };
      }
      onPlaybackStop(e3 = {}) {
        let { time: t2 } = e3, i2 = "number" == typeof t2 ? t2 : this.currentTime;
        this._commitCurrentRange(i2);
      }
      _commitCurrentRange(e3) {
        if (!this._currentPlayedRange) return;
        "number" == typeof e3 && (this._currentPlayedRange.end = e3);
        let { start: t2, end: i2 } = this._currentPlayedRange;
        this._currentPlayedRange = null, this.addPlayedRange(t2, i2);
      }
      addPlayedRange(e3, t2) {
        if (e3 >= t2) return;
        let i2 = this._RANGE_EPSILON, a = [...this._playedRanges, { start: e3, end: t2 }];
        a.sort((e4, t3) => e4.start - t3.start);
        let n = [];
        for (let e4 of a) {
          if (!n.length) {
            n.push({ ...e4 });
            continue;
          }
          let t3 = n[n.length - 1];
          e4.start <= t3.end + i2 ? (t3.start = Math.min(t3.start, e4.start), t3.end = Math.max(t3.end, e4.end)) : n.push({ ...e4 });
        }
        this._playedRanges = n;
      }
      get played() {
        let e3 = this.currentTime;
        return (this.paused || this._currentPlayedRange || "number" != typeof e3 || (this._currentPlayedRange = { start: e3, end: e3 }), this._currentPlayedRange && "number" == typeof e3 && (e3 > this._currentPlayedRange.end && (this._currentPlayedRange.end = e3), this.addPlayedRange(this._currentPlayedRange.start, this._currentPlayedRange.end)), this._playedRanges.length) ? i(this._playedRanges.map((e4) => [e4.start, e4.end])) : i([[0, 0]]);
      }
    };
  }]);
}, 659429, (e) => {
  "use strict";
  var t = e.i(856757), i = e.i(429973);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let n = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})/, s = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/.*?[?&]list=)([\w_-]+)/;
  function r(e2, t2 = {}) {
    var i2;
    let a2 = { src: l(e2, t2), frameborder: 0, width: "100%", height: "100%", allow: "accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture" };
    return (null == (i2 = t2.config) ? void 0 : i2.referrerpolicy) && (a2.referrerpolicy = t2.config.referrerpolicy), t2.config && (a2["data-config"] = JSON.stringify(t2.config)), `
    <style>
      :host {
        display: inline-block;
        line-height: 0;
        position: relative;
        min-width: 300px;
        min-height: 150px;
      }
      iframe {
        position: absolute;
        top: 0;
        left: 0;
      }
    </style>
    <iframe${(function(e3) {
      let t3 = "";
      for (let i3 in e3) {
        let a3 = e3[i3];
        "" === a3 ? t3 += ` ${u(i3)}` : t3 += ` ${u(i3)}="${u(`${a3}`)}"`;
      }
      return t3;
    })(a2)}></iframe>
  `;
  }
  function l(e2, t2) {
    if (!e2.src) return;
    let i2 = e2.src.includes("-nocookie") ? "https://www.youtube-nocookie.com/embed" : "https://www.youtube.com/embed", a2 = { controls: "" === e2.controls ? null : 0, autoplay: e2.autoplay, loop: e2.loop, mute: e2.muted, playsinline: e2.playsinline, preload: e2.preload ?? "metadata", enablejsapi: 1, cc_load_policy: 1, showinfo: 0, rel: 0, iv_load_policy: 3, modestbranding: 1, start: (function(e3) {
      if (!e3) return;
      let t3 = e3.match(/[?&]t=([\dms]+)/i);
      if (!t3) return;
      let i3 = t3[1].toLowerCase(), a3 = 0, n2 = false, s2 = i3.match(/(\d+)m/);
      s2 && (a3 += 60 * parseInt(s2[1], 10), n2 = true);
      let r3 = i3.match(/(\d+)s?$/);
      return r3 && (a3 += parseInt(r3[1], 10), n2 = true), n2 ? a3 : void 0;
    })(e2.src), ...t2.config };
    if (n.test(e2.src)) {
      let t3 = e2.src.match(n), s2 = t3 && t3[1];
      return `${i2}/${s2}?${d(a2)}`;
    }
    let r2 = e2.src.match(s), l2 = { listType: "playlist", list: r2 && r2[1], ...a2 };
    return `${i2}?${d(l2)}`;
  }
  class o extends (0, i.MediaPlayedRangesMixin)(globalThis.HTMLElement ?? class {
  }) {
    static getTemplateHTML = r;
    static shadowRootOptions = { mode: "open" };
    static observedAttributes = ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src"];
    loadComplete = new g();
    #e;
    #t;
    #i = 0;
    #a = false;
    #n;
    isLoaded = false;
    #s = null;
    #r = null;
    #l = null;
    #o = 1;
    constructor() {
      super(), this.#u("config");
    }
    get config() {
      return this.#r;
    }
    set config(e2) {
      this.#r = e2;
    }
    async load() {
      let e2;
      if (this.#e) return;
      this.shadowRoot || this.attachShadow({ mode: "open" });
      let t2 = !this.#t;
      this.#t && (this.loadComplete = new g(), this.isLoaded = false), this.#t = true, await (this.#e = Promise.resolve()), this.#e = null, this.#i = 0, this.dispatchEvent(new Event("emptied"));
      let i2 = this.api;
      if (this.api = null, !this.src) {
        null == i2 || i2.destroy();
        return;
      }
      this.#l = document.createElement("video"), this.textTracks = this.#l.textTracks, this.textTracks.addEventListener("change", () => {
        var e3;
        let t3 = Array.from(this.textTracks).find((e4) => "showing" === e4.mode);
        null == (e3 = this.api) || e3.setOption("captions", "track", t3 ? { languageCode: t3.language } : {});
      }), this.dispatchEvent(new Event("loadstart"));
      let a2 = this.shadowRoot.querySelector("iframe"), n2 = (function(e3) {
        let t3 = {};
        for (let i3 of e3) t3[i3.name] = i3.value;
        return t3;
      })(this.attributes);
      t2 && a2 && (this.#r = JSON.parse(a2.getAttribute("data-config") || "{}")), (null == a2 ? void 0 : a2.src) && a2.src === l(n2, this) || (this.shadowRoot.innerHTML = r(n2, this), a2 = this.shadowRoot.querySelector("iframe"));
      let s2 = await c("https://www.youtube.com/iframe_api", "YT", "onYouTubeIframeAPIReady");
      this.api = new s2.Player(a2, { events: { onReady: () => {
        var e3;
        this.#i = 1, this.dispatchEvent(new Event("loadedmetadata")), this.dispatchEvent(new Event("durationchange")), 1 !== this.#o && (null == (e3 = this.api) || e3.setVolume(100 * this.#o)), this.dispatchEvent(new Event("volumechange")), this.dispatchEvent(new Event("loadcomplete")), this.isLoaded = true, this.loadComplete.resolve();
      }, onError: (e3) => {
        console.error(e3), this.#s = { code: e3.data, message: `YouTube iframe player error #${e3.data}; visit https://developers.google.com/youtube/iframe_api_reference#onError for the full error message.` }, this.dispatchEvent(new Event("error"));
      } } });
      let o2 = false;
      this.api.addEventListener("onStateChange", (e3) => {
        var t3;
        let i3 = e3.data;
        if ((i3 === s2.PlayerState.PLAYING || i3 === s2.PlayerState.BUFFERING) && (o2 || (o2 = true, this.dispatchEvent(new Event("play"))), (this.api.getOption("captions", "tracklist") || []).forEach((e4) => {
          [...this.textTracks].some((t4) => t4.language === e4.languageCode) || this.#l.addTextTrack("subtitles", e4.displayName, e4.languageCode), this.textTracks = this.#l.textTracks;
        }), this.dispatchEvent(new Event("loadstart"))), i3 === s2.PlayerState.PLAYING) this.seeking && (this.#a = false, null == (t3 = this.#n) || t3.resolve(), this.dispatchEvent(new Event("seeked"))), this.#i = 3, this.dispatchEvent(new Event("playing"));
        else if (i3 === s2.PlayerState.PAUSED) {
          let e4 = Math.abs(this.currentTime - u2);
          !this.seeking && e4 > 0.1 && (this.#a = true, this.dispatchEvent(new Event("seeking"))), o2 = false, this.dispatchEvent(new Event("pause"));
        }
        i3 === s2.PlayerState.ENDED && (o2 = false, this.dispatchEvent(new Event("pause")), this.dispatchEvent(new Event("ended")), this.loop && this.play());
      }), this.api.addEventListener("onPlaybackRateChange", () => {
        this.dispatchEvent(new Event("ratechange"));
      }), this.api.addEventListener("onVolumeChange", () => {
        var e3;
        let t3 = (null == (e3 = this.api) ? void 0 : e3.getVolume()) / 100;
        this.#o = t3, this.dispatchEvent(new Event("volumechange"));
      }), this.api.addEventListener("onVideoProgress", () => {
        this.dispatchEvent(new Event("timeupdate"));
      }), await this.loadComplete;
      let u2 = 0;
      setInterval(() => {
        var e3;
        let t3 = Math.abs(this.currentTime - u2), i3 = this.buffered.end(this.buffered.length - 1);
        this.seeking && i3 > 0.1 ? (this.#a = false, null == (e3 = this.#n) || e3.resolve(), this.dispatchEvent(new Event("seeked"))) : !this.seeking && t3 > 0.1 && (this.#a = true, this.dispatchEvent(new Event("seeking"))), u2 = this.currentTime;
      }, 50);
      let d2 = setInterval(() => {
        let t3 = this.buffered.end(this.buffered.length - 1);
        t3 >= this.duration && (clearInterval(d2), this.#i = 4), e2 != t3 && (e2 = t3, this.dispatchEvent(new Event("progress")));
      }, 100);
    }
    async attributeChangedCallback(e2, t2, i2) {
      if (t2 !== i2) switch (e2) {
        case "src":
        case "autoplay":
        case "controls":
        case "loop":
        case "playsinline":
          this.load();
      }
    }
    async play() {
      var e2, t2, i2;
      return this.#n = null, await this.loadComplete, null == (e2 = this.api) || e2.playVideo(), t2 = this, (i2 = (e3, i3) => {
        let a2;
        t2.addEventListener(e3, a2 = () => {
          t2.removeEventListener(e3, a2), i3();
        });
      }, (...e3) => new Promise((t3) => {
        i2(...e3, (...e4) => {
          e4.length > 1 ? t3(e4) : t3(e4[0]);
        });
      }))("playing");
    }
    async pause() {
      var e2;
      return await this.loadComplete, null == (e2 = this.api) ? void 0 : e2.pauseVideo();
    }
    get seeking() {
      return this.#a;
    }
    get readyState() {
      return this.#i;
    }
    get src() {
      return this.getAttribute("src");
    }
    set src(e2) {
      this.src != e2 && this.setAttribute("src", e2);
    }
    get error() {
      return this.#s;
    }
    get paused() {
      var e2, t2;
      return this.isLoaded ? [-1, 0, 2, 5].includes(null == (t2 = null == (e2 = this.api) ? void 0 : e2.getPlayerState) ? void 0 : t2.call(e2)) : !this.autoplay;
    }
    get duration() {
      var e2, t2;
      return (null == (t2 = null == (e2 = this.api) ? void 0 : e2.getDuration) ? void 0 : t2.call(e2)) ?? NaN;
    }
    get autoplay() {
      return this.hasAttribute("autoplay");
    }
    set autoplay(e2) {
      this.autoplay != e2 && this.toggleAttribute("autoplay", !!e2);
    }
    get buffered() {
      var e2, t2;
      if (!this.isLoaded) return y();
      let i2 = (null == (e2 = this.api) ? void 0 : e2.getVideoLoadedFraction()) * (null == (t2 = this.api) ? void 0 : t2.getDuration());
      return i2 > 0 ? y(0, i2) : y();
    }
    get controls() {
      return this.hasAttribute("controls");
    }
    set controls(e2) {
      this.controls != e2 && this.toggleAttribute("controls", !!e2);
    }
    get currentTime() {
      var e2, t2;
      return (null == (t2 = null == (e2 = this.api) ? void 0 : e2.getCurrentTime) ? void 0 : t2.call(e2)) ?? 0;
    }
    set currentTime(e2) {
      this.currentTime != e2 && (this.#n = new g(), this.loadComplete.then(() => {
        var t2, i2;
        null == (t2 = this.api) || t2.seekTo(e2, true), this.paused && (null == (i2 = this.#n) || i2.then(() => {
          var e3;
          this.#n && (null == (e3 = this.api) || e3.pauseVideo());
        }));
      }));
    }
    set defaultMuted(e2) {
      this.defaultMuted != e2 && this.toggleAttribute("muted", !!e2);
    }
    get defaultMuted() {
      return this.hasAttribute("muted");
    }
    get loop() {
      return this.hasAttribute("loop");
    }
    set loop(e2) {
      this.loop != e2 && this.toggleAttribute("loop", !!e2);
    }
    set muted(e2) {
      this.muted != e2 && this.loadComplete.then(() => {
        var t2, i2;
        e2 ? null == (t2 = this.api) || t2.mute() : null == (i2 = this.api) || i2.unMute();
      });
    }
    get muted() {
      var e2, t2;
      return this.isLoaded ? null == (t2 = null == (e2 = this.api) ? void 0 : e2.isMuted) ? void 0 : t2.call(e2) : this.defaultMuted;
    }
    get playbackRate() {
      var e2, t2;
      return (null == (t2 = null == (e2 = this.api) ? void 0 : e2.getPlaybackRate) ? void 0 : t2.call(e2)) ?? 1;
    }
    set playbackRate(e2) {
      this.playbackRate != e2 && this.loadComplete.then(() => {
        var t2;
        null == (t2 = this.api) || t2.setPlaybackRate(e2);
      });
    }
    get playsInline() {
      return this.hasAttribute("playsinline");
    }
    set playsInline(e2) {
      this.playsInline != e2 && this.toggleAttribute("playsinline", !!e2);
    }
    get poster() {
      return this.getAttribute("poster");
    }
    set poster(e2) {
      this.poster != e2 && this.setAttribute("poster", `${e2}`);
    }
    set volume(e2) {
      this.volume != e2 && (this.#o = e2, this.loadComplete.then(() => {
        var t2;
        null == (t2 = this.api) || t2.setVolume(100 * e2);
      }));
    }
    get volume() {
      var e2;
      return this.isLoaded ? (null == (e2 = this.api) ? void 0 : e2.getVolume()) / 100 : this.#o;
    }
    #u(e2) {
      if (Object.prototype.hasOwnProperty.call(this, e2)) {
        let t2 = this[e2];
        delete this[e2], this[e2] = t2;
      }
    }
  }
  function u(e2) {
    return e2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/`/g, "&#x60;");
  }
  function d(e2) {
    return String(new URLSearchParams((function(e3) {
      let t2 = {};
      for (let i2 in e3) {
        let a2 = e3[i2];
        true === a2 || "" === a2 ? t2[i2] = 1 : false === a2 ? t2[i2] = 0 : null != a2 && (t2[i2] = a2);
      }
      return t2;
    })(e2)));
  }
  let h = {};
  async function c(e2, t2, i2) {
    return h[e2] ? h[e2] : t2 && self[t2] ? (await p(0), self[t2]) : h[e2] = new Promise(function(a2, n2) {
      let s2 = document.createElement("script");
      s2.src = e2;
      let r2 = () => a2(self[t2]);
      i2 && (self[i2] = r2), s2.onload = () => !i2 && r2(), s2.onerror = n2, document.head.append(s2);
    });
  }
  let p = (e2) => new Promise((t2) => setTimeout(t2, e2));
  class g extends Promise {
    constructor(e2 = () => {
    }) {
      let t2, i2;
      super((a2, n2) => {
        e2(a2, n2), t2 = a2, i2 = n2;
      }), this.resolve = t2, this.reject = i2;
    }
  }
  function y(e2, t2) {
    return Array.isArray(e2) ? m(e2) : null == e2 || null == t2 || 0 === e2 && 0 === t2 ? m([[0, 0]]) : m([[e2, t2]]);
  }
  function m(e2) {
    return Object.defineProperties(e2, { start: { value: (t2) => e2[t2][0] }, end: { value: (t2) => e2[t2][1] } }), e2;
  }
  globalThis.customElements && !globalThis.customElements.get("youtube-video") && globalThis.customElements.define("youtube-video", o);
  try {
    var v = "u" > typeof window ? window : e.g;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var f = /* @__PURE__ */ new Set(["style", "children", "ref", "key", "suppressContentEditableWarning", "suppressHydrationWarning", "dangerouslySetInnerHTML"]), w = { className: "class", htmlFor: "for" };
  function b(e2) {
    return e2.toLowerCase();
  }
  function E(e2) {
    return "boolean" == typeof e2 ? e2 ? "" : void 0 : "function" == typeof e2 ? void 0 : "object" != typeof e2 || null === e2 ? e2 : void 0;
  }
  function k(e2, t2, i2) {
    var a2;
    e2[t2] = i2, null == i2 && t2 in ((null == (a2 = globalThis.HTMLElement) ? void 0 : a2.prototype) ?? {}) && e2.removeAttribute(t2);
  }
  var P = (function({ react: e2, tagName: t2, elementClass: i2, events: a2, displayName: n2, defaultProps: s2, toAttributeName: r2 = b, toAttributeValue: l2 = E }) {
    let o2 = Number.parseInt(e2.version) >= 19, u2 = e2.forwardRef((n3, u3) => {
      var d2, h2;
      let c2 = e2.useRef(null), p2 = e2.useRef(/* @__PURE__ */ new Map()), g2 = {}, y2 = {}, m2 = {}, v2 = {};
      for (let [e3, t3] of Object.entries(n3)) {
        if (f.has(e3)) {
          m2[e3] = t3;
          continue;
        }
        let a3 = r2(w[e3] ?? e3);
        if (i2.prototype && e3 in i2.prototype && !(e3 in ((null == (d2 = globalThis.HTMLElement) ? void 0 : d2.prototype) ?? {})) && !(null == (h2 = i2.observedAttributes) ? void 0 : h2.some((e4) => e4 === a3))) {
          v2[e3] = t3;
          continue;
        }
        if (e3.startsWith("on")) {
          g2[e3] = t3;
          continue;
        }
        let n4 = l2(t3);
        a3 && null != n4 && (y2[a3] = String(n4), o2 || (m2[a3] = n4)), a3 && o2 && (n4 !== E(t3) ? m2[a3] = n4 : m2[a3] = t3);
      }
      if ("u" > typeof window) {
        for (let t3 in g2) {
          let i3 = g2[t3], n4 = t3.endsWith("Capture"), s3 = ((null == a2 ? void 0 : a2[t3]) ?? t3.slice(2).toLowerCase()).slice(0, n4 ? -7 : void 0);
          e2.useLayoutEffect(() => {
            let e3 = null == c2 ? void 0 : c2.current;
            if (e3 && "function" == typeof i3) return e3.addEventListener(s3, i3, n4), () => {
              e3.removeEventListener(s3, i3, n4);
            };
          }, [null == c2 ? void 0 : c2.current, i3]);
        }
        e2.useLayoutEffect(() => {
          if (null === c2.current) return;
          let e3 = /* @__PURE__ */ new Map();
          for (let t3 in v2) k(c2.current, t3, v2[t3]), p2.current.delete(t3), e3.set(t3, v2[t3]);
          for (let [e4, t3] of p2.current) k(c2.current, e4, void 0);
          p2.current = e3;
        });
      }
      if ("u" < typeof window && (null == i2 ? void 0 : i2.getTemplateHTML) && (null == i2 ? void 0 : i2.shadowRootOptions)) {
        let { mode: t3, delegatesFocus: a3 } = i2.shadowRootOptions;
        m2.children = [e2.createElement("template", { shadowrootmode: t3, shadowrootdelegatesfocus: a3, dangerouslySetInnerHTML: { __html: i2.getTemplateHTML(y2, n3) }, key: "ce-la-react-ssr-template-shadow-root" }), m2.children];
      }
      return e2.createElement(t2, { ...s2, ...m2, ref: e2.useCallback((e3) => {
        c2.current = e3, "function" == typeof u3 ? u3(e3) : null !== u3 && (u3.current = e3);
      }, [u3]) }, m2.children);
    });
    return u2.displayName = n2 ?? i2.name, u2;
  })({ react: t.default, tagName: "youtube-video", elementClass: o, toAttributeName: (e2) => "muted" === e2 ? "" : "defaultMuted" === e2 ? "muted" : b(e2) });
  e.s(["default", 0, P], 659429);
}]);
