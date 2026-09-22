;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "f19f0828-10a3-4d25-a621-f84974b46e51");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 945811, (e) => {
  "use strict";
  let t;
  try {
    var i, r, s, a, n, l, o, h, d, u = "u" > typeof window ? window : e.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let f = Number.isFinite || function(e10) {
    return "number" == typeof e10 && isFinite(e10);
  }, c = Number.isSafeInteger || function(e10) {
    return "number" == typeof e10 && Math.abs(e10) <= g;
  }, g = Number.MAX_SAFE_INTEGER || 9007199254740991, m = ((v = {}).NETWORK_ERROR = "networkError", v.MEDIA_ERROR = "mediaError", v.KEY_SYSTEM_ERROR = "keySystemError", v.MUX_ERROR = "muxError", v.OTHER_ERROR = "otherError", v), p = ((E = {}).KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", E.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", E.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", E.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", E.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", E.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", E.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", E.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", E.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", E.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", E.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR = "keySystemDestroyMediaKeysError", E.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR = "keySystemDestroyCloseSessionError", E.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR = "keySystemDestroyRemoveSessionError", E.MANIFEST_LOAD_ERROR = "manifestLoadError", E.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", E.MANIFEST_PARSING_ERROR = "manifestParsingError", E.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", E.LEVEL_EMPTY_ERROR = "levelEmptyError", E.LEVEL_LOAD_ERROR = "levelLoadError", E.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", E.LEVEL_PARSING_ERROR = "levelParsingError", E.LEVEL_SWITCH_ERROR = "levelSwitchError", E.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", E.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", E.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", E.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", E.FRAG_LOAD_ERROR = "fragLoadError", E.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", E.FRAG_DECRYPT_ERROR = "fragDecryptError", E.FRAG_PARSING_ERROR = "fragParsingError", E.FRAG_GAP = "fragGap", E.REMUX_ALLOC_ERROR = "remuxAllocError", E.KEY_LOAD_ERROR = "keyLoadError", E.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", E.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", E.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", E.BUFFER_APPEND_ERROR = "bufferAppendError", E.BUFFER_APPENDING_ERROR = "bufferAppendingError", E.BUFFER_STALLED_ERROR = "bufferStalledError", E.BUFFER_FULL_ERROR = "bufferFullError", E.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", E.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", E.ASSET_LIST_LOAD_ERROR = "assetListLoadError", E.ASSET_LIST_LOAD_TIMEOUT = "assetListLoadTimeout", E.ASSET_LIST_PARSING_ERROR = "assetListParsingError", E.INTERSTITIAL_ASSET_ITEM_ERROR = "interstitialAssetItemError", E.INTERNAL_EXCEPTION = "internalException", E.INTERNAL_ABORTED = "aborted", E.ATTACH_MEDIA_ERROR = "attachMediaError", E.UNKNOWN = "unknown", E), y = ((T = {}).MEDIA_ATTACHING = "hlsMediaAttaching", T.MEDIA_ATTACHED = "hlsMediaAttached", T.MEDIA_DETACHING = "hlsMediaDetaching", T.MEDIA_DETACHED = "hlsMediaDetached", T.MEDIA_ENDED = "hlsMediaEnded", T.STALL_RESOLVED = "hlsStallResolved", T.BUFFER_RESET = "hlsBufferReset", T.BUFFER_CODECS = "hlsBufferCodecs", T.BUFFER_CREATED = "hlsBufferCreated", T.BUFFER_APPENDING = "hlsBufferAppending", T.BUFFER_APPENDED = "hlsBufferAppended", T.BUFFER_EOS = "hlsBufferEos", T.BUFFERED_TO_END = "hlsBufferedToEnd", T.BUFFER_FLUSHING = "hlsBufferFlushing", T.BUFFER_FLUSHED = "hlsBufferFlushed", T.MANIFEST_LOADING = "hlsManifestLoading", T.MANIFEST_LOADED = "hlsManifestLoaded", T.MANIFEST_PARSED = "hlsManifestParsed", T.LEVEL_SWITCHING = "hlsLevelSwitching", T.LEVEL_SWITCHED = "hlsLevelSwitched", T.LEVEL_LOADING = "hlsLevelLoading", T.LEVEL_LOADED = "hlsLevelLoaded", T.LEVEL_UPDATED = "hlsLevelUpdated", T.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", T.LEVELS_UPDATED = "hlsLevelsUpdated", T.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", T.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", T.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", T.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", T.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", T.AUDIO_TRACK_UPDATED = "hlsAudioTrackUpdated", T.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", T.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", T.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", T.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", T.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", T.SUBTITLE_TRACK_UPDATED = "hlsSubtitleTrackUpdated", T.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", T.CUES_PARSED = "hlsCuesParsed", T.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", T.INIT_PTS_FOUND = "hlsInitPtsFound", T.FRAG_LOADING = "hlsFragLoading", T.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", T.FRAG_LOADED = "hlsFragLoaded", T.FRAG_DECRYPTED = "hlsFragDecrypted", T.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", T.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", T.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", T.FRAG_PARSED = "hlsFragParsed", T.FRAG_BUFFERED = "hlsFragBuffered", T.FRAG_CHANGED = "hlsFragChanged", T.FPS_DROP = "hlsFpsDrop", T.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", T.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated", T.ERROR = "hlsError", T.DESTROYING = "hlsDestroying", T.KEY_LOADING = "hlsKeyLoading", T.KEY_LOADED = "hlsKeyLoaded", T.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", T.BACK_BUFFER_REACHED = "hlsBackBufferReached", T.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded", T.ASSET_LIST_LOADING = "hlsAssetListLoading", T.ASSET_LIST_LOADED = "hlsAssetListLoaded", T.INTERSTITIALS_UPDATED = "hlsInterstitialsUpdated", T.INTERSTITIALS_BUFFERED_TO_BOUNDARY = "hlsInterstitialsBufferedToBoundary", T.INTERSTITIAL_ASSET_PLAYER_CREATED = "hlsInterstitialAssetPlayerCreated", T.INTERSTITIAL_STARTED = "hlsInterstitialStarted", T.INTERSTITIAL_ASSET_STARTED = "hlsInterstitialAssetStarted", T.INTERSTITIAL_ASSET_ENDED = "hlsInterstitialAssetEnded", T.INTERSTITIAL_ASSET_ERROR = "hlsInterstitialAssetError", T.INTERSTITIAL_ENDED = "hlsInterstitialEnded", T.INTERSTITIALS_PRIMARY_RESUMED = "hlsInterstitialsPrimaryResumed", T.PLAYOUT_LIMIT_REACHED = "hlsPlayoutLimitReached", T.EVENT_CUE_ENTER = "hlsEventCueEnter", T);
  var v, E, T, S, A, L = "manifest", R = "level", b = "audioTrack", I = "subtitleTrack", k = "main", D = "audio", _ = "subtitle";
  class P {
    constructor(e10, t10 = 0, i10 = 0) {
      this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = e10, this.alpha_ = e10 ? Math.exp(Math.log(0.5) / e10) : 0, this.estimate_ = t10, this.totalWeight_ = i10;
    }
    sample(e10, t10) {
      let i10 = Math.pow(this.alpha_, e10);
      this.estimate_ = t10 * (1 - i10) + i10 * this.estimate_, this.totalWeight_ += e10;
    }
    getTotalWeight() {
      return this.totalWeight_;
    }
    getEstimate() {
      if (this.alpha_) {
        let e10 = 1 - Math.pow(this.alpha_, this.totalWeight_);
        if (e10) return this.estimate_ / e10;
      }
      return this.estimate_;
    }
  }
  class C {
    constructor(e10, t10, i10, r10 = 100) {
      this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = i10, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new P(e10), this.fast_ = new P(t10), this.defaultTTFB_ = r10, this.ttfb_ = new P(e10);
    }
    update(e10, t10) {
      let { slow_: i10, fast_: r10, ttfb_: s10 } = this;
      i10.halfLife !== e10 && (this.slow_ = new P(e10, i10.getEstimate(), i10.getTotalWeight())), r10.halfLife !== t10 && (this.fast_ = new P(t10, r10.getEstimate(), r10.getTotalWeight())), s10.halfLife !== e10 && (this.ttfb_ = new P(e10, s10.getEstimate(), s10.getTotalWeight()));
    }
    sample(e10, t10) {
      let i10 = (e10 = Math.max(e10, this.minDelayMs_)) / 1e3, r10 = 8 * t10 / i10;
      this.fast_.sample(i10, r10), this.slow_.sample(i10, r10);
    }
    sampleTTFB(e10) {
      let t10 = Math.sqrt(2) * Math.exp(-Math.pow(e10 / 1e3, 2) / 2);
      this.ttfb_.sample(t10, Math.max(e10, 5));
    }
    canEstimate() {
      return this.fast_.getTotalWeight() >= this.minWeight_;
    }
    getEstimate() {
      return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
    }
    getEstimateTTFB() {
      return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_;
    }
    get defaultEstimate() {
      return this.defaultEstimate_;
    }
    destroy() {
    }
  }
  function w() {
    return (w = Object.assign.bind()).apply(null, arguments);
  }
  function x(e10, t10) {
    var i10 = Object.keys(e10);
    if (Object.getOwnPropertySymbols) {
      var r10 = Object.getOwnPropertySymbols(e10);
      t10 && (r10 = r10.filter(function(t11) {
        return Object.getOwnPropertyDescriptor(e10, t11).enumerable;
      })), i10.push.apply(i10, r10);
    }
    return i10;
  }
  function M(e10) {
    for (var t10 = 1; t10 < arguments.length; t10++) {
      var i10 = null != arguments[t10] ? arguments[t10] : {};
      t10 % 2 ? x(Object(i10), true).forEach(function(t11) {
        var r10, s10;
        r10 = t11, s10 = i10[t11], (r10 = (function(e11) {
          var t12 = (function(e12, t13) {
            if ("object" != typeof e12 || !e12) return e12;
            var i11 = e12[Symbol.toPrimitive];
            if (void 0 !== i11) {
              var r11 = i11.call(e12, t13);
              if ("object" != typeof r11) return r11;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t13 ? String : Number)(e12);
          })(e11, "string");
          return "symbol" == typeof t12 ? t12 : t12 + "";
        })(r10)) in e10 ? Object.defineProperty(e10, r10, { value: s10, enumerable: true, configurable: true, writable: true }) : e10[r10] = s10;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e10, Object.getOwnPropertyDescriptors(i10)) : x(Object(i10)).forEach(function(t11) {
        Object.defineProperty(e10, t11, Object.getOwnPropertyDescriptor(i10, t11));
      });
    }
    return e10;
  }
  class O {
    constructor(e10, t10) {
      this.trace = void 0, this.debug = void 0, this.log = void 0, this.warn = void 0, this.info = void 0, this.error = void 0;
      const i10 = `[${e10}]:`;
      this.trace = F, this.debug = t10.debug.bind(null, i10), this.log = t10.log.bind(null, i10), this.warn = t10.warn.bind(null, i10), this.info = t10.info.bind(null, i10), this.error = t10.error.bind(null, i10);
    }
  }
  let F = function() {
  }, $ = { trace: F, debug: F, log: F, warn: F, info: F, error: F };
  function U() {
    return w({}, $);
  }
  function B(e10, t10, i10) {
    let r10;
    return t10[e10] ? t10[e10].bind(t10) : (r10 = self.console[e10]) ? r10.bind(self.console, `${i10 ? "[" + i10 + "] " : ""}[${e10}] >`) : F;
  }
  let N = U();
  function G(e10 = true) {
    if (!("u" < typeof self)) return (e10 || !self.MediaSource) && self.ManagedMediaSource || self.MediaSource || self.WebKitMediaSource;
  }
  function K(e10, t10) {
    let i10 = Object.keys(e10), r10 = Object.keys(t10), s10 = i10.length, a10 = r10.length;
    return !s10 || !a10 || s10 === a10 && !i10.some((e11) => -1 === r10.indexOf(e11));
  }
  function H(e10, t10 = false) {
    let i10, r10;
    if ("u" > typeof TextDecoder) {
      let i11 = new TextDecoder("utf-8").decode(e10);
      if (t10) {
        let e11 = i11.indexOf("\0");
        return -1 !== e11 ? i11.substring(0, e11) : i11;
      }
      return i11.replace(/\0/g, "");
    }
    let s10 = e10.length, a10 = "", n2 = 0;
    for (; n2 < s10 && (0 !== (i10 = e10[n2++]) || !t10); ) if (0 !== i10 && 3 !== i10) switch (i10 >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        a10 += String.fromCharCode(i10);
        break;
      case 12:
      case 13:
        a10 += String.fromCharCode((31 & i10) << 6 | 63 & (r10 = e10[n2++]));
        break;
      case 14:
        a10 += String.fromCharCode((15 & i10) << 12 | (63 & (r10 = e10[n2++])) << 6 | 63 & e10[n2++]);
    }
    return a10;
  }
  function V(e10) {
    let t10 = "";
    for (let i10 = 0; i10 < e10.length; i10++) {
      let r10 = e10[i10].toString(16);
      r10.length < 2 && (r10 = "0" + r10), t10 += r10;
    }
    return t10;
  }
  function Y(e10) {
    return Uint8Array.from(e10.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer;
  }
  var j = { exports: {} }, W = S ? j.exports : (S = 1, i = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, r = /^(?=([^\/?#]*))\1([^]*)$/, s = /(?:\/|^)\.(?=\/)/g, a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, j.exports = n = { buildAbsoluteURL: function(e10, t10, i10) {
    if (i10 = i10 || {}, e10 = e10.trim(), !(t10 = t10.trim())) {
      if (!i10.alwaysNormalize) return e10;
      var s10 = n.parseURL(e10);
      if (!s10) throw Error("Error trying to parse base URL.");
      return s10.path = n.normalizePath(s10.path), n.buildURLFromParts(s10);
    }
    var a10 = n.parseURL(t10);
    if (!a10) throw Error("Error trying to parse relative URL.");
    if (a10.scheme) return i10.alwaysNormalize ? (a10.path = n.normalizePath(a10.path), n.buildURLFromParts(a10)) : t10;
    var l2 = n.parseURL(e10);
    if (!l2) throw Error("Error trying to parse base URL.");
    if (!l2.netLoc && l2.path && "/" !== l2.path[0]) {
      var o2 = r.exec(l2.path);
      l2.netLoc = o2[1], l2.path = o2[2];
    }
    l2.netLoc && !l2.path && (l2.path = "/");
    var h2 = { scheme: l2.scheme, netLoc: a10.netLoc, path: null, params: a10.params, query: a10.query, fragment: a10.fragment };
    if (!a10.netLoc && (h2.netLoc = l2.netLoc, "/" !== a10.path[0])) if (a10.path) {
      var d2 = l2.path, u2 = d2.substring(0, d2.lastIndexOf("/") + 1) + a10.path;
      h2.path = n.normalizePath(u2);
    } else h2.path = l2.path, !a10.params && (h2.params = l2.params, a10.query || (h2.query = l2.query));
    return null === h2.path && (h2.path = i10.alwaysNormalize ? n.normalizePath(a10.path) : a10.path), n.buildURLFromParts(h2);
  }, parseURL: function(e10) {
    var t10 = i.exec(e10);
    return t10 ? { scheme: t10[1] || "", netLoc: t10[2] || "", path: t10[3] || "", params: t10[4] || "", query: t10[5] || "", fragment: t10[6] || "" } : null;
  }, normalizePath: function(e10) {
    for (e10 = e10.split("").reverse().join("").replace(s, ""); e10.length !== (e10 = e10.replace(a, "")).length; ) ;
    return e10.split("").reverse().join("");
  }, buildURLFromParts: function(e10) {
    return e10.scheme + e10.netLoc + e10.path + e10.params + e10.query + e10.fragment;
  } }, j.exports);
  class q {
    constructor() {
      this.aborted = false, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = { start: 0, first: 0, end: 0 }, this.parsing = { start: 0, end: 0 }, this.buffering = { start: 0, first: 0, end: 0 };
    }
  }
  var X = "audio", Q = "video", z = "audiovideo";
  class Z {
    constructor(e10) {
      this._byteRange = null, this._url = null, this._stats = null, this._streams = null, this.base = void 0, this.relurl = void 0, "string" == typeof e10 && (e10 = { url: e10 }), this.base = e10, (function(e11, t10) {
        let i10 = (function e12(t11, i11) {
          let r10 = Object.getPrototypeOf(t11);
          if (r10) {
            let t12 = Object.getOwnPropertyDescriptor(r10, i11);
            return t12 || e12(r10, i11);
          }
        })(e11, t10);
        i10 && (i10.enumerable = true, Object.defineProperty(e11, t10, i10));
      })(this, "stats");
    }
    setByteRange(e10, t10) {
      let i10, r10 = e10.split("@", 2);
      i10 = 1 === r10.length ? (null == t10 ? void 0 : t10.byteRangeEndOffset) || 0 : parseInt(r10[1]), this._byteRange = [i10, parseInt(r10[0]) + i10];
    }
    get baseurl() {
      return this.base.url;
    }
    get byteRange() {
      return null === this._byteRange ? [] : this._byteRange;
    }
    get byteRangeStartOffset() {
      return this.byteRange[0];
    }
    get byteRangeEndOffset() {
      return this.byteRange[1];
    }
    get elementaryStreams() {
      return null === this._streams && (this._streams = { [X]: null, [Q]: null, [z]: null }), this._streams;
    }
    set elementaryStreams(e10) {
      this._streams = e10;
    }
    get hasStats() {
      return null !== this._stats;
    }
    get hasStreams() {
      return null !== this._streams;
    }
    get stats() {
      return null === this._stats && (this._stats = new q()), this._stats;
    }
    set stats(e10) {
      this._stats = e10;
    }
    get url() {
      return !this._url && this.baseurl && this.relurl && (this._url = W.buildAbsoluteURL(this.baseurl, this.relurl, { alwaysNormalize: true })), this._url || "";
    }
    set url(e10) {
      this._url = e10;
    }
    clearElementaryStreamInfo() {
      let { elementaryStreams: e10 } = this;
      e10[X] = null, e10[Q] = null, e10[z] = null;
    }
  }
  function J(e10) {
    return "initSegment" !== e10.sn;
  }
  class ee extends Z {
    constructor(e10, t10) {
      super(t10), this._decryptdata = null, this._programDateTime = null, this._ref = null, this._bitrate = void 0, this.rawProgramDateTime = null, this.tagList = [], this.duration = 0, this.sn = 0, this.levelkeys = void 0, this.type = void 0, this.loader = null, this.keyLoader = null, this.level = -1, this.cc = 0, this.startPTS = void 0, this.endPTS = void 0, this.startDTS = void 0, this.endDTS = void 0, this.start = 0, this.playlistOffset = 0, this.deltaPTS = void 0, this.maxStartPTS = void 0, this.minEndPTS = void 0, this.data = void 0, this.bitrateTest = false, this.title = null, this.initSegment = null, this.endList = void 0, this.gap = void 0, this.urlId = 0, this.type = e10;
    }
    get byteLength() {
      if (this.hasStats) {
        let e10 = this.stats.total;
        if (e10) return e10;
      }
      if (this.byteRange.length) {
        let e10 = this.byteRange[0], t10 = this.byteRange[1];
        if (f(e10) && f(t10)) return t10 - e10;
      }
      return null;
    }
    get bitrate() {
      return this.byteLength ? 8 * this.byteLength / this.duration : this._bitrate ? this._bitrate : null;
    }
    set bitrate(e10) {
      this._bitrate = e10;
    }
    get decryptdata() {
      var e10;
      let { levelkeys: t10 } = this;
      if (!t10 || t10.NONE) return null;
      if (t10.identity) this._decryptdata || (this._decryptdata = t10.identity.getDecryptData(this.sn));
      else if (!(null != (e10 = this._decryptdata) && e10.keyId)) {
        let e11 = Object.keys(t10);
        if (1 === e11.length) {
          let i10 = this._decryptdata = t10[e11[0]] || null;
          i10 && (this._decryptdata = i10.getDecryptData(this.sn, t10));
        }
      }
      return this._decryptdata;
    }
    get end() {
      return this.start + this.duration;
    }
    get endProgramDateTime() {
      if (null === this.programDateTime) return null;
      let e10 = f(this.duration) ? this.duration : 0;
      return this.programDateTime + 1e3 * e10;
    }
    get encrypted() {
      var e10, t10;
      if (null != (e10 = this._decryptdata) && e10.encrypted) return true;
      if (this.levelkeys) {
        let e11 = Object.keys(this.levelkeys), i10 = e11.length;
        if (i10 > 1 || 1 === i10 && null != (t10 = this.levelkeys[e11[0]]) && t10.encrypted) return true;
      }
      return false;
    }
    get programDateTime() {
      return null === this._programDateTime && this.rawProgramDateTime && (this.programDateTime = Date.parse(this.rawProgramDateTime)), this._programDateTime;
    }
    set programDateTime(e10) {
      if (!f(e10)) {
        this._programDateTime = this.rawProgramDateTime = null;
        return;
      }
      this._programDateTime = e10;
    }
    get ref() {
      return J(this) ? (this._ref || (this._ref = { base: this.base, start: this.start, duration: this.duration, sn: this.sn, programDateTime: this.programDateTime }), this._ref) : null;
    }
    addStart(e10) {
      this.setStart(this.start + e10);
    }
    setStart(e10) {
      this.start = e10, this._ref && (this._ref.start = e10);
    }
    setDuration(e10) {
      this.duration = e10, this._ref && (this._ref.duration = e10);
    }
    setKeyFormat(e10) {
      let t10 = this.levelkeys;
      if (t10) {
        var i10;
        let r10 = t10[e10];
        r10 && !(null != (i10 = this._decryptdata) && i10.keyId) && (this._decryptdata = r10.getDecryptData(this.sn, t10));
      }
    }
    abortRequests() {
      var e10, t10;
      null == (e10 = this.loader) || e10.abort(), null == (t10 = this.keyLoader) || t10.abort();
    }
    setElementaryStreamInfo(e10, t10, i10, r10, s10, a10 = false) {
      let { elementaryStreams: n2 } = this, l2 = n2[e10];
      if (!l2) {
        n2[e10] = { startPTS: t10, endPTS: i10, startDTS: r10, endDTS: s10, partial: a10 };
        return;
      }
      l2.startPTS = Math.min(l2.startPTS, t10), l2.endPTS = Math.max(l2.endPTS, i10), l2.startDTS = Math.min(l2.startDTS, r10), l2.endDTS = Math.max(l2.endDTS, s10);
    }
  }
  class et extends Z {
    constructor(e10, t10, i10, r10, s10) {
      super(i10), this.fragOffset = 0, this.duration = 0, this.gap = false, this.independent = false, this.relurl = void 0, this.fragment = void 0, this.index = void 0, this.duration = e10.decimalFloatingPoint("DURATION"), this.gap = e10.bool("GAP"), this.independent = e10.bool("INDEPENDENT"), this.relurl = e10.enumeratedString("URI"), this.fragment = t10, this.index = r10;
      const a10 = e10.enumeratedString("BYTERANGE");
      a10 && this.setByteRange(a10, s10), s10 && (this.fragOffset = s10.fragOffset + s10.duration);
    }
    get start() {
      return this.fragment.start + this.fragOffset;
    }
    get end() {
      return this.start + this.duration;
    }
    get loaded() {
      let { elementaryStreams: e10 } = this;
      return !!(e10.audio || e10.video || e10.audiovideo);
    }
  }
  let ei = [].push, er = { video: 1, audio: 2, id3: 3, text: 4 };
  function es(e10) {
    return String.fromCharCode.apply(null, e10);
  }
  function ea(e10, t10) {
    let i10 = e10[t10] << 8 | e10[t10 + 1];
    return i10 < 0 ? 65536 + i10 : i10;
  }
  function en(e10, t10) {
    let i10 = eo(e10, t10);
    return i10 < 0 ? 4294967296 + i10 : i10;
  }
  function el(e10, t10) {
    let i10 = en(e10, t10);
    return i10 *= 4294967296, i10 += en(e10, t10 + 4);
  }
  function eo(e10, t10) {
    return e10[t10] << 24 | e10[t10 + 1] << 16 | e10[t10 + 2] << 8 | e10[t10 + 3];
  }
  function eh(e10, t10) {
    let i10 = [];
    if (!t10.length) return i10;
    let r10 = e10.byteLength;
    for (let s10 = 0; s10 < r10; ) {
      let a10 = en(e10, s10), n2 = es(e10.subarray(s10 + 4, s10 + 8)), l2 = a10 > 1 ? s10 + a10 : r10;
      if (n2 === t10[0]) if (1 === t10.length) i10.push(e10.subarray(s10 + 8, l2));
      else {
        let r11 = eh(e10.subarray(s10 + 8, l2), t10.slice(1));
        r11.length && ei.apply(i10, r11);
      }
      s10 = l2;
    }
    return i10;
  }
  function ed(e10) {
    let t10 = [], i10 = eh(e10, ["moov", "trak"]);
    for (let e11 = 0; e11 < i10.length; e11++) {
      let r10 = i10[e11], s10 = eh(r10, ["tkhd"])[0];
      if (s10) {
        let e12 = s10[0], i11 = en(s10, 0 === e12 ? 12 : 20), a10 = eh(r10, ["mdia", "mdhd"])[0];
        if (a10) {
          e12 = a10[0];
          let s11 = en(a10, 0 === e12 ? 12 : 20), n2 = eh(r10, ["mdia", "hdlr"])[0];
          if (n2) {
            let e13 = es(n2.subarray(8, 12)), a11 = { soun: X, vide: Q }[e13], l2 = (function(e14) {
              let t11, i12 = e14.subarray(8), r11 = i12.subarray(86), s12 = es(i12.subarray(4, 8)), a12 = s12, n3 = "enca" === s12 || "encv" === s12;
              if (n3) {
                let e15 = eh(i12, [s12])[0].subarray("enca" === s12 ? 28 : 78);
                eh(e15, ["sinf"]).forEach((e16) => {
                  let t12 = eh(e16, ["schm"])[0];
                  if (t12) {
                    let i13 = es(t12.subarray(4, 8));
                    if ("cbcs" === i13 || "cenc" === i13) {
                      let t13 = eh(e16, ["frma"])[0];
                      t13 && (a12 = es(t13));
                    }
                  }
                });
              }
              let l3 = a12;
              switch (a12) {
                case "avc1":
                case "avc2":
                case "avc3":
                case "avc4": {
                  let e15 = eh(r11, ["avcC"])[0];
                  e15 && e15.length > 3 && (a12 += "." + ec(e15[1]) + ec(e15[2]) + ec(e15[3]), t11 = eu("avc1" === l3 ? "dva1" : "dvav", r11));
                  break;
                }
                case "mp4a": {
                  let e15 = eh(i12, [s12])[0], t12 = eh(e15.subarray(28), ["esds"])[0];
                  if (t12 && t12.length > 7) {
                    let e16 = 4;
                    if (3 !== t12[e16++]) break;
                    e16 = ef(t12, e16) + 2;
                    let i13 = t12[e16++];
                    if (128 & i13 && (e16 += 2), 64 & i13 && (e16 += t12[e16++]), 4 !== t12[e16++]) break;
                    e16 = ef(t12, e16);
                    let r12 = t12[e16++];
                    if (64 === r12) a12 += "." + ec(r12);
                    else break;
                    if (e16 += 12, 5 !== t12[e16++]) break;
                    e16 = ef(t12, e16);
                    let s13 = t12[e16++], n4 = (248 & s13) >> 3;
                    31 === n4 && (n4 += 1 + ((7 & s13) << 3) + ((224 & t12[e16]) >> 5)), a12 += "." + n4;
                  }
                  break;
                }
                case "hvc1":
                case "hev1": {
                  let e15 = eh(r11, ["hvcC"])[0];
                  if (e15 && e15.length > 12) {
                    let t12 = e15[1], i13 = ["", "A", "B", "C"][t12 >> 6], r12 = en(e15, 2), s13 = e15[12], n4 = e15.subarray(6, 12);
                    a12 += "." + i13 + (31 & t12), a12 += "." + (function(e16) {
                      let t13 = 0;
                      for (let i14 = 0; i14 < 32; i14++) t13 |= (e16 >> i14 & 1) << 31 - i14;
                      return t13 >>> 0;
                    })(r12).toString(16).toUpperCase(), a12 += "." + ((32 & t12) >> 5 ? "H" : "L") + s13;
                    let l4 = "";
                    for (let e16 = n4.length; e16--; ) {
                      let t13 = n4[e16];
                      (t13 || l4) && (l4 = "." + t13.toString(16).toUpperCase() + l4);
                    }
                    a12 += l4;
                  }
                  t11 = eu("hev1" == l3 ? "dvhe" : "dvh1", r11);
                  break;
                }
                case "dvh1":
                case "dvhe":
                case "dvav":
                case "dva1":
                case "dav1":
                  a12 = eu(a12, r11) || a12;
                  break;
                case "vp09": {
                  let e15 = eh(r11, ["vpcC"])[0];
                  if (e15 && e15.length > 6) {
                    let t12 = e15[4], i13 = e15[5], r12 = e15[6] >> 4 & 15;
                    a12 += "." + eg(t12) + "." + eg(i13) + "." + eg(r12);
                  }
                  break;
                }
                case "av01": {
                  let e15 = eh(r11, ["av1C"])[0];
                  if (e15 && e15.length > 2) {
                    let i13 = e15[1] >>> 5, s13 = 31 & e15[1], n4 = e15[2] >>> 7 ? "H" : "M", l4 = (64 & e15[2]) >> 6, o2 = (32 & e15[2]) >> 5, h2 = (16 & e15[2]) >> 4, d2 = (8 & e15[2]) >> 3, u2 = (4 & e15[2]) >> 2, f2 = 3 & e15[2];
                    a12 += "." + i13 + "." + eg(s13) + n4 + "." + eg(2 === i13 && l4 ? o2 ? 12 : 10 : l4 ? 10 : 8) + "." + h2 + "." + d2 + u2 + f2 + "." + eg(1) + "." + eg(1) + "." + eg(1) + ".0", t11 = eu("dav1", r11);
                  }
                }
              }
              return { codec: a12, encrypted: n3, supplemental: t11 };
            })(eh(r10, ["mdia", "minf", "stbl", "stsd"])[0]);
            a11 ? (t10[i11] = { timescale: s11, type: a11, stsd: l2 }, t10[a11] = M({ timescale: s11, id: i11 }, l2)) : t10[i11] = { timescale: s11, type: e13, stsd: l2 };
          }
        }
      }
    }
    return eh(e10, ["moov", "mvex", "trex"]).forEach((e11) => {
      let i11 = t10[en(e11, 4)];
      i11 && (i11.default = { duration: en(e11, 12), flags: en(e11, 20) });
    }), t10;
  }
  function eu(e10, t10) {
    let i10 = eh(t10, ["dvvC"]), r10 = i10.length ? i10[0] : eh(t10, ["dvcC"])[0];
    if (r10) {
      let t11 = r10[2] >> 1 & 127, i11 = r10[2] << 5 & 32 | r10[3] >> 3 & 31;
      return e10 + "." + eg(t11) + "." + eg(i11);
    }
  }
  function ef(e10, t10) {
    let i10 = t10 + 5;
    for (; 128 & e10[t10++] && t10 < i10; ) ;
    return t10;
  }
  function ec(e10) {
    return ("0" + e10.toString(16).toUpperCase()).slice(-2);
  }
  function eg(e10) {
    return (e10 < 10 ? "0" : "") + e10;
  }
  function em(e10, t10) {
    eh(e10, ["moov", "trak"]).forEach((e11) => {
      let i10 = eh(e11, ["mdia", "minf", "stbl", "stsd"])[0];
      if (!i10) return;
      let r10 = i10.subarray(8), s10 = eh(r10, ["enca"]), a10 = s10.length > 0;
      a10 || (s10 = eh(r10, ["encv"])), s10.forEach((e12) => {
        eh(a10 ? e12.subarray(28) : e12.subarray(78), ["sinf"]).forEach((e13) => {
          let i11 = ep(e13);
          i11 && t10(i11, a10);
        });
      });
    });
  }
  function ep(e10) {
    let t10 = eh(e10, ["schm"])[0];
    if (t10) {
      let i10 = es(t10.subarray(4, 8));
      if ("cbcs" === i10 || "cenc" === i10) {
        let t11 = eh(e10, ["schi", "tenc"])[0];
        if (t11) return t11;
      }
    }
  }
  function ey(e10, t10) {
    let i10 = new Uint8Array(e10.length + t10.length);
    return i10.set(e10), i10.set(t10, e10.length), i10;
  }
  function ev(e10, t10) {
    let i10 = [], r10 = t10.samples, s10 = t10.timescale, a10 = t10.id, n2 = false;
    return eh(r10, ["moof"]).map((l2) => {
      let o2 = l2.byteOffset - 8;
      eh(l2, ["traf"]).map((l3) => {
        let h2 = eh(l3, ["tfdt"]).map((e11) => {
          let t11 = e11[0], i11 = en(e11, 4);
          return 1 === t11 && (i11 *= 4294967296, i11 += en(e11, 8)), i11 / s10;
        })[0];
        return void 0 !== h2 && (e10 = h2), eh(l3, ["tfhd"]).map((h3) => {
          let d2 = en(h3, 4), u2 = 16777215 & en(h3, 0), f2 = 0, c2 = 0, g2 = 8;
          d2 === a10 && ((1 & u2) != 0 && (g2 += 8), (2 & u2) != 0 && (g2 += 4), (8 & u2) != 0 && (f2 = en(h3, g2), g2 += 4), (16 & u2) != 0 && (c2 = en(h3, g2), g2 += 4), (32 & u2) != 0 && (g2 += 4), "video" === t10.type && (n2 = eE(t10.codec)), eh(l3, ["trun"]).map((a11) => {
            let l4 = a11[0], h4 = 16777215 & en(a11, 0), d3 = 0, u3 = (256 & h4) != 0, g3 = 0, m2 = (512 & h4) != 0, p2 = 0, y2 = (1024 & h4) != 0, v2 = (2048 & h4) != 0, E2 = 0, T2 = en(a11, 4), S2 = 8;
            (1 & h4) != 0 && (d3 = en(a11, S2), S2 += 4), (4 & h4) != 0 && (S2 += 4);
            let A2 = d3 + o2;
            for (let o3 = 0; o3 < T2; o3++) {
              if (u3 ? (g3 = en(a11, S2), S2 += 4) : g3 = f2, m2 ? (p2 = en(a11, S2), S2 += 4) : p2 = c2, y2 && (S2 += 4), v2 && (E2 = 0 === l4 ? en(a11, S2) : eo(a11, S2), S2 += 4), t10.type === Q) {
                let t11 = 0;
                for (; t11 < p2; ) {
                  let a12 = en(r10, A2);
                  A2 += 4, (function(e11, t12) {
                    if (!e11) return 6 == (31 & t12);
                    {
                      let e12 = t12 >> 1 & 63;
                      return 39 === e12 || 40 === e12;
                    }
                  })(n2, r10[A2]) && eT(r10.subarray(A2, A2 + a12), n2 ? 2 : 1, e10 + E2 / s10, i10), A2 += a12, t11 += a12 + 4;
                }
              }
              e10 += g3 / s10;
            }
          }));
        });
      });
    }), i10;
  }
  function eE(e10) {
    if (!e10) return false;
    let t10 = e10.substring(0, 4);
    return "hvc1" === t10 || "hev1" === t10 || "dvh1" === t10 || "dvhe" === t10;
  }
  function eT(e10, t10, i10, r10) {
    let s10, a10 = eS(e10);
    s10 = 0 + t10;
    let n2 = 0, l2 = 0, o2 = 0;
    for (; s10 < a10.length; ) {
      n2 = 0;
      do {
        if (s10 >= a10.length) break;
        n2 += o2 = a10[s10++];
      } while (255 === o2);
      l2 = 0;
      do {
        if (s10 >= a10.length) break;
        l2 += o2 = a10[s10++];
      } while (255 === o2);
      let e11 = a10.length - s10, t11 = s10;
      if (l2 < e11) s10 += l2;
      else if (l2 > e11) {
        N.error(`Malformed SEI payload. ${l2} is too small, only ${e11} bytes left to parse.`);
        break;
      }
      if (4 === n2) {
        if (181 === a10[t11++]) {
          let e12 = ea(a10, t11);
          if (t11 += 2, 49 === e12) {
            let e13 = en(a10, t11);
            if (t11 += 4, 1195456820 === e13) {
              let e14 = a10[t11++];
              if (3 === e14) {
                let s11 = a10[t11++], l3 = 31 & s11, o3 = 64 & s11, h2 = o3 ? 2 + 3 * l3 : 0, d2 = new Uint8Array(h2);
                if (o3) {
                  d2[0] = s11;
                  for (let e15 = 1; e15 < h2; e15++) d2[e15] = a10[t11++];
                }
                r10.push({ type: e14, payloadType: n2, pts: i10, bytes: d2 });
              }
            }
          }
        }
      } else if (5 === n2 && l2 > 16) {
        let e12 = [];
        for (let i11 = 0; i11 < 16; i11++) {
          let r11 = a10[t11++].toString(16);
          e12.push(1 == r11.length ? "0" + r11 : r11), (3 === i11 || 5 === i11 || 7 === i11 || 9 === i11) && e12.push("-");
        }
        let s11 = l2 - 16, o3 = new Uint8Array(s11);
        for (let e13 = 0; e13 < s11; e13++) o3[e13] = a10[t11++];
        r10.push({ payloadType: n2, pts: i10, uuid: e12.join(""), userData: H(o3), userDataBytes: o3 });
      }
    }
  }
  function eS(e10) {
    let t10 = e10.byteLength, i10 = [], r10 = 1;
    for (; r10 < t10 - 2; ) 0 === e10[r10] && 0 === e10[r10 + 1] && 3 === e10[r10 + 2] ? (i10.push(r10 + 2), r10 += 2) : r10++;
    if (0 === i10.length) return e10;
    let s10 = t10 - i10.length, a10 = new Uint8Array(s10), n2 = 0;
    for (r10 = 0; r10 < s10; n2++, r10++) n2 === i10[0] && (n2++, i10.shift()), a10[r10] = e10[n2];
    return a10;
  }
  let eA = { audio: { a3ds: 1, "ac-3": 0.95, "ac-4": 1, alac: 0.9, alaw: 1, dra1: 1, "dts+": 1, "dts-": 1, dtsc: 1, dtse: 1, dtsh: 1, "ec-3": 0.9, enca: 1, fLaC: 0.9, flac: 0.9, FLAC: 0.9, g719: 1, g726: 1, m4ae: 1, mha1: 1, mha2: 1, mhm1: 1, mhm2: 1, mlpa: 1, mp4a: 1, "raw ": 1, Opus: 1, opus: 1, samr: 1, sawb: 1, sawp: 1, sevc: 1, sqcp: 1, ssmv: 1, twos: 1, ulaw: 1 }, video: { avc1: 1, avc2: 1, avc3: 1, avc4: 1, avcp: 1, av01: 0.8, dav1: 0.8, drac: 1, dva1: 1, dvav: 1, dvh1: 0.7, dvhe: 0.7, encv: 1, hev1: 0.75, hvc1: 0.75, mjp2: 1, mp4v: 1, mvc1: 1, mvc2: 1, mvc3: 1, mvc4: 1, resv: 1, rv60: 1, s263: 1, svc1: 1, svc2: 1, "vc-1": 1, vp08: 1, vp09: 0.9 }, text: { stpp: 1, wvtt: 1 } };
  function eL(e10, t10) {
    let i10 = eA[t10];
    return !!i10 && !!i10[e10.slice(0, 4)];
  }
  function eR(e10, t10, i10 = true) {
    return !e10.split(",").some((e11) => !eb(e11, t10, i10));
  }
  function eb(e10, t10, i10 = true) {
    var r10;
    let s10 = G(i10);
    return null != (r10 = null == s10 ? void 0 : s10.isTypeSupported(eI(e10, t10))) && r10;
  }
  function eI(e10, t10) {
    return `${t10}/mp4;codecs=${e10}`;
  }
  function ek(e10) {
    if (e10) {
      let t10 = e10.substring(0, 4);
      return eA.video[t10];
    }
    return 2;
  }
  function eD(e10) {
    let t10 = /\(Windows.+Firefox\//i.test(navigator.userAgent);
    return e10.split(",").reduce((e11, i10) => {
      let r10 = t10 && eE(i10) ? 9 : eA.video[i10];
      return r10 ? (2 * r10 + e11) / (e11 ? 3 : 2) : (eA.audio[i10] + e11) / (e11 ? 2 : 1);
    }, 0);
  }
  let e_ = {}, eP = /flac|opus|mp4a\.40\.34/i;
  function eC(e10, t10 = true) {
    return e10.replace(eP, (e11) => (function(e12, t11 = true) {
      if (e_[e12]) return e_[e12];
      let i10 = { flac: ["flac", "fLaC", "FLAC"], opus: ["opus", "Opus"], "mp4a.40.34": ["mp3"] }[e12];
      for (let s10 = 0; s10 < i10.length; s10++) {
        var r10;
        if (eb(i10[s10], "audio", t11)) return e_[e12] = i10[s10], i10[s10];
        if ("mp3" === i10[s10] && null != (r10 = G(t11)) && r10.isTypeSupported("audio/mpeg")) return "";
      }
      return e12;
    })(e11.toLowerCase(), t10));
  }
  function ew(e10, t10) {
    if (e10 && (e10.length > 4 || -1 !== ["ac-3", "ec-3", "alac", "fLaC", "Opus"].indexOf(e10)) && (ex(e10, "audio") || ex(e10, "video"))) return e10;
    if (t10) {
      let i10 = t10.split(",");
      if (i10.length > 1) {
        if (e10) {
          for (let t11 = i10.length; t11--; ) if (i10[t11].substring(0, 4) === e10.substring(0, 4)) return i10[t11];
        }
        return i10[0];
      }
    }
    return t10 || e10;
  }
  function ex(e10, t10) {
    return eL(e10, t10) && eb(e10, t10);
  }
  function eM(e10) {
    let t10 = G(e10) || { isTypeSupported: () => false };
    return { mpeg: t10.isTypeSupported("audio/mpeg"), mp3: t10.isTypeSupported('audio/mp4; codecs="mp3"'), ac3: t10.isTypeSupported('audio/mp4; codecs="ac-3"') };
  }
  function eO(e10) {
    return e10.replace(/^.+codecs=["']?([^"']+).*$/, "$1");
  }
  let eF = { supported: false, smooth: false, powerEfficient: false }, e$ = { supported: true, configurations: [], decodingInfoResults: [{ supported: true, powerEfficient: true, smooth: true }] };
  function eU(e10, t10) {
    return { supported: false, configurations: t10, decodingInfoResults: [eF], error: e10 };
  }
  function eB(e10, t10, i10, r10 = {}) {
    var s10, a10, n2, l2, o2, h2;
    let d2, u2, f2, c2, g2, m2, p2, y2, v2 = e10.videoCodec;
    if (!v2 && !e10.audioCodec || !i10) return Promise.resolve(e$);
    let E2 = [], T2 = (d2 = null == (a10 = (s10 = e10).videoCodec) ? void 0 : a10.split(","), u2 = eN(s10), f2 = s10.width || 640, c2 = s10.height || 480, g2 = s10.frameRate || 30, m2 = s10.videoRange.toLowerCase(), d2 ? d2.map((e11) => {
      let t11 = { contentType: eI((function(e12) {
        if (e12.startsWith("av01.")) {
          let t12 = e12.split("."), i11 = ["0", "111", "01", "01", "01", "0"];
          for (let e13 = t12.length; e13 > 4 && e13 < 10; e13++) t12[e13] = i11[e13 - 4];
          return t12.join(".");
        }
        return e12;
      })(e11), "video"), width: f2, height: c2, bitrate: u2, framerate: g2 };
      return "sdr" !== m2 && (t11.transferFunction = m2), t11;
    }) : []), S2 = T2.length, A2 = (n2 = e10, l2 = t10, o2 = S2 > 0, p2 = null == (h2 = n2.audioCodec) ? void 0 : h2.split(","), y2 = eN(n2), p2 && n2.audioGroups ? n2.audioGroups.reduce((e11, t11) => {
      var i11;
      let r11 = t11 ? null == (i11 = l2.groups[t11]) ? void 0 : i11.tracks : null;
      return r11 ? r11.reduce((e12, i12) => {
        if (i12.groupId === t11) {
          let t12 = parseFloat(i12.channels || "");
          p2.forEach((i13) => {
            let r12 = { contentType: eI(i13, "audio"), bitrate: o2 ? (function(e13, t13) {
              if (t13 <= 1) return 1;
              let i14 = 128e3;
              return "ec-3" === e13 ? i14 = 768e3 : "ac-3" === e13 && (i14 = 64e4), Math.min(t13 / 2, i14);
            })(i13, y2) : y2 };
            t12 && (r12.channels = "" + t12), e12.push(r12);
          });
        }
        return e12;
      }, e11) : e11;
    }, []) : []), L2 = A2.length;
    for (let e11 = S2 || +L2 || 1; e11--; ) {
      let t11 = { type: "media-source" };
      if (S2 && (t11.video = T2[e11 % S2]), L2) {
        t11.audio = A2[e11 % L2];
        let i11 = t11.audio.bitrate;
        t11.video && i11 && (t11.video.bitrate -= i11);
      }
      E2.push(t11);
    }
    if (v2) {
      let e11 = navigator.userAgent;
      if (v2.split(",").some((e12) => eE(e12)) && /\(Windows.+Firefox\//i.test(navigator.userAgent)) return Promise.resolve(eU(Error(`Overriding Windows Firefox HEVC MediaCapabilities result based on user-agent string: (${e11})`), E2));
    }
    return Promise.all(E2.map((e11) => {
      let t11 = (function(e12) {
        let t12 = "", { audio: i11, video: r11 } = e12;
        if (r11) {
          let e13 = eO(r11.contentType);
          t12 += `${e13}_r${r11.height}x${r11.width}f${Math.ceil(r11.framerate)}${r11.transferFunction || "sd"}_${Math.ceil(r11.bitrate / 1e5)}`;
        }
        if (i11) {
          let e13 = eO(i11.contentType);
          t12 += `${r11 ? "_" : ""}${e13}_c${i11.channels}`;
        }
        return t12;
      })(e11);
      return r10[t11] || (r10[t11] = i10.decodingInfo(e11));
    })).then((e11) => ({ supported: !e11.some((e12) => !e12.supported), configurations: E2, decodingInfoResults: e11 })).catch((e11) => ({ supported: false, configurations: E2, decodingInfoResults: [], error: e11 }));
  }
  function eN(e10) {
    return 1e3 * Math.ceil(Math.max(0.9 * e10.bitrate, e10.averageBitrate) / 1e3) || 1;
  }
  let eG = ["NONE", "TYPE-0", "TYPE-1", null], eK = ["SDR", "PQ", "HLG"];
  function eH(e10) {
    let { canSkipUntil: t10, canSkipDateRanges: i10, age: r10 } = e10;
    return t10 && r10 < t10 / 2 ? i10 ? "v2" : "YES" : "";
  }
  class eV {
    constructor(e10, t10, i10) {
      this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = e10, this.part = t10, this.skip = i10;
    }
    addDirectives(e10) {
      let t10 = new self.URL(e10);
      return void 0 !== this.msn && t10.searchParams.set("_HLS_msn", this.msn.toString()), void 0 !== this.part && t10.searchParams.set("_HLS_part", this.part.toString()), this.skip && t10.searchParams.set("_HLS_skip", this.skip), t10.href;
    }
  }
  class eY {
    constructor(e10) {
      if (this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.url = void 0, this.frameRate = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.supplemental = void 0, this.videoCodec = void 0, this.width = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.supportedPromise = void 0, this.supportedResult = void 0, this._avgBitrate = 0, this._audioGroups = void 0, this._subtitleGroups = void 0, this._urlId = 0, this.url = [e10.url], this._attrs = [e10.attrs], this.bitrate = e10.bitrate, e10.details && (this.details = e10.details), this.id = e10.id || 0, this.name = e10.name, this.width = e10.width || 0, this.height = e10.height || 0, this.frameRate = e10.attrs.optionalFloat("FRAME-RATE", 0), this._avgBitrate = e10.attrs.decimalInteger("AVERAGE-BANDWIDTH"), this.audioCodec = e10.audioCodec, this.videoCodec = e10.videoCodec, this.codecSet = [e10.videoCodec, e10.audioCodec].filter((e11) => !!e11).map((e11) => e11.substring(0, 4)).join(","), "supplemental" in e10) {
        var t10;
        this.supplemental = e10.supplemental;
        const i10 = null == (t10 = e10.supplemental) ? void 0 : t10.videoCodec;
        i10 && i10 !== e10.videoCodec && (this.codecSet += `,${i10.substring(0, 4)}`);
      }
      this.addGroupId("audio", e10.attrs.AUDIO), this.addGroupId("text", e10.attrs.SUBTITLES);
    }
    get maxBitrate() {
      return Math.max(this.realBitrate, this.bitrate);
    }
    get averageBitrate() {
      return this._avgBitrate || this.realBitrate || this.bitrate;
    }
    get attrs() {
      return this._attrs[0];
    }
    get codecs() {
      return this.attrs.CODECS || "";
    }
    get pathwayId() {
      return this.attrs["PATHWAY-ID"] || ".";
    }
    get videoRange() {
      return this.attrs["VIDEO-RANGE"] || "SDR";
    }
    get score() {
      return this.attrs.optionalFloat("SCORE", 0);
    }
    get uri() {
      return this.url[0] || "";
    }
    hasAudioGroup(e10) {
      return ej(this._audioGroups, e10);
    }
    hasSubtitleGroup(e10) {
      return ej(this._subtitleGroups, e10);
    }
    get audioGroups() {
      return this._audioGroups;
    }
    get subtitleGroups() {
      return this._subtitleGroups;
    }
    addGroupId(e10, t10) {
      if (t10) {
        if ("audio" === e10) {
          let e11 = this._audioGroups;
          e11 || (e11 = this._audioGroups = []), -1 === e11.indexOf(t10) && e11.push(t10);
        } else if ("text" === e10) {
          let e11 = this._subtitleGroups;
          e11 || (e11 = this._subtitleGroups = []), -1 === e11.indexOf(t10) && e11.push(t10);
        }
      }
    }
    get urlId() {
      return 0;
    }
    set urlId(e10) {
    }
    get audioGroupIds() {
      return this.audioGroups ? [this.audioGroupId] : void 0;
    }
    get textGroupIds() {
      return this.subtitleGroups ? [this.textGroupId] : void 0;
    }
    get audioGroupId() {
      var e10;
      return null == (e10 = this.audioGroups) ? void 0 : e10[0];
    }
    get textGroupId() {
      var e10;
      return null == (e10 = this.subtitleGroups) ? void 0 : e10[0];
    }
    addFallback() {
    }
  }
  function ej(e10, t10) {
    return !!t10 && !!e10 && -1 !== e10.indexOf(t10);
  }
  let eW = (e10, t10) => {
    let i10;
    return JSON.stringify(e10, (i10 = /* @__PURE__ */ new WeakSet(), (e11, r10) => {
      if (t10 && (r10 = t10(e11, r10)), "object" == typeof r10 && null !== r10) {
        if (i10.has(r10)) return;
        i10.add(r10);
      }
      return r10;
    }));
  };
  function eq(e10, t10) {
    N.log(`[abr] start candidates with "${e10}" ignored because ${t10}`);
  }
  function eX(e10) {
    return e10.reduce((e11, t10) => {
      let i10 = e11.groups[t10.groupId];
      i10 || (i10 = e11.groups[t10.groupId] = { tracks: [], channels: { 2: 0 }, hasDefault: false, hasAutoSelect: false }), i10.tracks.push(t10);
      let r10 = t10.channels || "2";
      return i10.channels[r10] = (i10.channels[r10] || 0) + 1, i10.hasDefault = i10.hasDefault || t10.default, i10.hasAutoSelect = i10.hasAutoSelect || t10.autoselect, i10.hasDefault && (e11.hasDefaultAudio = true), i10.hasAutoSelect && (e11.hasAutoSelectAudio = true), e11;
    }, { hasDefaultAudio: false, hasAutoSelectAudio: false, groups: {} });
  }
  function eQ(e10) {
    if (!e10) return e10;
    let { lang: t10, assocLang: i10, characteristics: r10, channels: s10, audioCodec: a10 } = e10;
    return { lang: t10, assocLang: i10, characteristics: r10, channels: s10, audioCodec: a10 };
  }
  function ez(e10, t10, i10) {
    if ("attrs" in e10) {
      let i11 = t10.indexOf(e10);
      if (-1 !== i11) return i11;
    }
    for (let r10 = 0; r10 < t10.length; r10++) if (eZ(e10, t10[r10], i10)) return r10;
    return -1;
  }
  function eZ(e10, t10, i10) {
    let { groupId: r10, name: s10, lang: a10, assocLang: n2, default: l2 } = e10, o2 = e10.forced;
    return (void 0 === r10 || t10.groupId === r10) && (void 0 === s10 || t10.name === s10) && (void 0 === a10 || (function(e11, t11 = "--") {
      return e11.length === t11.length ? e11 === t11 : e11.startsWith(t11) || t11.startsWith(e11);
    })(a10, t10.lang)) && (void 0 === a10 || t10.assocLang === n2) && (void 0 === l2 || t10.default === l2) && (void 0 === o2 || t10.forced === o2) && (!("characteristics" in e10) || (function(e11, t11 = "") {
      let i11 = e11.split(","), r11 = t11.split(",");
      return i11.length === r11.length && !i11.some((e12) => -1 === r11.indexOf(e12));
    })(e10.characteristics || "", t10.characteristics)) && (void 0 === i10 || i10(e10, t10));
  }
  function eJ(e10, t10) {
    let { audioCodec: i10, channels: r10 } = e10;
    return (void 0 === i10 || (t10.audioCodec || "").substring(0, 4) === i10.substring(0, 4)) && (void 0 === r10 || r10 === (t10.channels || "2"));
  }
  function e0(e10, t10, i10) {
    for (let r10 = t10; r10 > -1; r10--) if (i10(e10[r10])) return r10;
    for (let r10 = t10 + 1; r10 < e10.length; r10++) if (i10(e10[r10])) return r10;
    return -1;
  }
  function e1(e10, t10) {
    var i10;
    return !!e10 && e10 !== (null == (i10 = t10.loadLevelObj) ? void 0 : i10.uri);
  }
  let e2 = function(e10, t10) {
    let i10 = 0, r10 = e10.length - 1, s10 = null, a10 = null;
    for (; i10 <= r10; ) {
      let n2 = t10(a10 = e10[s10 = (i10 + r10) / 2 | 0]);
      if (n2 > 0) i10 = s10 + 1;
      else {
        if (!(n2 < 0)) return a10;
        r10 = s10 - 1;
      }
    }
    return null;
  };
  function e3(e10, t10, i10 = 0, r10 = 0, s10 = 5e-3) {
    let a10 = null;
    if (e10) {
      a10 = t10[1 + e10.sn - t10[0].sn] || null;
      let r11 = e10.endDTS - i10;
      r11 > 0 && r11 < 15e-7 && (i10 += 15e-7), a10 && e10.level !== a10.level && a10.end <= e10.end && (a10 = t10[2 + e10.sn - t10[0].sn] || null);
    } else 0 === i10 && 0 === t10[0].start && (a10 = t10[0]);
    if (a10 && ((!e10 || e10.level === a10.level) && 0 === e4(i10, r10, a10) || (function(e11, t11, i11) {
      if (t11 && 0 === t11.start && t11.level < e11.level && (t11.endPTS || 0) > 0) {
        let r11 = t11.tagList.reduce((e12, t12) => ("INF" === t12[0] && (e12 += parseFloat(t12[1])), e12), i11);
        return e11.start <= r11;
      }
      return false;
    })(a10, e10, Math.min(s10, r10)))) return a10;
    let n2 = e2(t10, e4.bind(null, i10, r10));
    return n2 && (n2 !== e10 || !a10) ? n2 : a10;
  }
  function e4(e10 = 0, t10 = 0, i10) {
    if (i10.start <= e10 && i10.start + i10.duration > e10) return 0;
    let r10 = Math.min(t10, i10.duration + (i10.deltaPTS ? i10.deltaPTS : 0));
    return i10.start + i10.duration - r10 <= e10 ? 1 : i10.start - r10 > e10 && i10.start ? -1 : 0;
  }
  function e5(e10, t10, i10) {
    if (e10 && e10.startCC <= t10 && e10.endCC >= t10) {
      let r10, s10 = e10.fragments, { fragmentHint: a10 } = e10;
      return a10 && (s10 = s10.concat(a10)), e2(s10, (e11) => e11.cc < t10 ? 1 : e11.cc > t10 ? -1 : (r10 = e11, e11.end <= i10) ? 1 : e11.start > i10 ? -1 : 0), r10 || null;
    }
    return null;
  }
  function e8(e10) {
    switch (e10.details) {
      case p.FRAG_LOAD_TIMEOUT:
      case p.KEY_LOAD_TIMEOUT:
      case p.LEVEL_LOAD_TIMEOUT:
      case p.MANIFEST_LOAD_TIMEOUT:
        return true;
    }
    return false;
  }
  function e6(e10) {
    return e10.details.startsWith("key");
  }
  function e9(e10) {
    return e6(e10) && !!e10.frag && !e10.frag.decryptdata;
  }
  function e7(e10, t10) {
    let i10 = e8(t10);
    return e10.default[`${i10 ? "timeout" : "error"}Retry`];
  }
  function te(e10, t10) {
    return Math.min(("linear" === e10.backoff ? 1 : Math.pow(2, t10)) * e10.retryDelayMs, e10.maxRetryDelayMs);
  }
  function tt(e10) {
    return M(M({}, e10), { errorRetry: null, timeoutRetry: null });
  }
  function ti(e10, t10, i10, r10) {
    var s10;
    if (!e10) return false;
    let a10 = null == r10 ? void 0 : r10.code, n2 = t10 < e10.maxNumRetry && (tr(s10 = a10) || !!s10 && (s10 < 400 || s10 > 499) || !!i10);
    return e10.shouldRetry ? e10.shouldRetry(e10, t10, i10, r10, n2) : n2;
  }
  function tr(e10) {
    return 0 === e10 && false === navigator.onLine;
  }
  function ts(e10) {
    let t10 = { action: 0, flags: 0 };
    return e10 && (t10.resolved = true), t10;
  }
  var ta = "NOT_LOADED", tn = "APPENDING", tl = "PARTIAL";
  class to {
    constructor(e10) {
      this.activePartLists = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.fragments = /* @__PURE__ */ Object.create(null), this.timeRanges = /* @__PURE__ */ Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hasGaps = false, this.hls = e10, this._registerListeners();
    }
    _registerListeners() {
      let { hls: e10 } = this;
      e10 && (e10.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.on(y.BUFFER_APPENDED, this.onBufferAppended, this), e10.on(y.FRAG_BUFFERED, this.onFragBuffered, this), e10.on(y.FRAG_LOADED, this.onFragLoaded, this));
    }
    _unregisterListeners() {
      let { hls: e10 } = this;
      e10 && (e10.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.off(y.BUFFER_APPENDED, this.onBufferAppended, this), e10.off(y.FRAG_BUFFERED, this.onFragBuffered, this), e10.off(y.FRAG_LOADED, this.onFragLoaded, this));
    }
    destroy() {
      this._unregisterListeners(), this.hls = this.fragments = this.activePartLists = this.endListFragments = this.timeRanges = null;
    }
    getAppendedFrag(e10, t10) {
      let i10 = this.activePartLists[t10];
      if (i10) for (let t11 = i10.length; t11--; ) {
        let r10 = i10[t11];
        if (!r10) break;
        if (r10.start <= e10 && e10 <= r10.end && r10.loaded) return r10;
      }
      return this.getBufferedFrag(e10, t10);
    }
    getBufferedFrag(e10, t10) {
      return this.getFragAtPos(e10, t10, true);
    }
    getFragAtPos(e10, t10, i10) {
      let { fragments: r10 } = this, s10 = Object.keys(r10);
      for (let a10 = s10.length; a10--; ) {
        let n2 = r10[s10[a10]];
        if ((null == n2 ? void 0 : n2.body.type) === t10 && (!i10 || n2.buffered)) {
          let t11 = n2.body;
          if (t11.start <= e10 && e10 <= t11.end) return t11;
        }
      }
      return null;
    }
    detectEvictedFragments(e10, t10, i10, r10, s10) {
      this.timeRanges && (this.timeRanges[e10] = t10);
      let a10 = (null == r10 ? void 0 : r10.fragment.sn) || -1;
      Object.keys(this.fragments).forEach((r11) => {
        let n2 = this.fragments[r11];
        if (!n2 || a10 >= n2.body.sn) return;
        if (!n2.buffered && (!n2.loaded || s10)) {
          n2.body.type === i10 && this.removeFragment(n2.body);
          return;
        }
        let l2 = n2.range[e10];
        if (l2) {
          if (0 === l2.time.length) return void this.removeFragment(n2.body);
          l2.time.some((e11) => {
            let i11 = !this.isTimeBuffered(e11.startPTS, e11.endPTS, t10);
            return i11 && this.removeFragment(n2.body), i11;
          });
        }
      });
    }
    detectPartialFragments(e10) {
      let t10 = this.timeRanges;
      if (!t10 || "initSegment" === e10.frag.sn) return;
      let i10 = e10.frag, r10 = td(i10), s10 = this.fragments[r10];
      if (!s10 || s10.buffered && i10.gap) return;
      let a10 = !i10.relurl;
      Object.keys(t10).forEach((r11) => {
        let n2 = i10.elementaryStreams[r11];
        if (!n2) return;
        let l2 = t10[r11], o2 = a10 || true === n2.partial;
        s10.range[r11] = this.getBufferedTimes(i10, e10.part, o2, l2);
      }), s10.loaded = null, Object.keys(s10.range).length ? (this.bufferedEnd(s10, i10), th(s10) || this.removeParts(i10.sn - 1, i10.type)) : this.removeFragment(s10.body);
    }
    bufferedEnd(e10, t10) {
      e10.buffered = true, (e10.body.endList = t10.endList || e10.body.endList) && (this.endListFragments[e10.body.type] = e10);
    }
    removeParts(e10, t10) {
      let i10 = this.activePartLists[t10];
      i10 && (this.activePartLists[t10] = tu(i10, (t11) => t11.fragment.sn >= e10));
    }
    fragBuffered(e10, t10) {
      let i10 = td(e10), r10 = this.fragments[i10];
      !r10 && t10 && (r10 = this.fragments[i10] = { body: e10, appendedPTS: null, loaded: null, buffered: false, range: /* @__PURE__ */ Object.create(null) }, e10.gap && (this.hasGaps = true)), r10 && (r10.loaded = null, this.bufferedEnd(r10, e10));
    }
    getBufferedTimes(e10, t10, i10, r10) {
      let s10 = { time: [], partial: i10 }, a10 = e10.start, n2 = e10.end, l2 = e10.minEndPTS || n2, o2 = e10.maxStartPTS || a10;
      for (let e11 = 0; e11 < r10.length; e11++) {
        let t11 = r10.start(e11) - this.bufferPadding, i11 = r10.end(e11) + this.bufferPadding;
        if (o2 >= t11 && l2 <= i11) {
          s10.time.push({ startPTS: Math.max(a10, r10.start(e11)), endPTS: Math.min(n2, r10.end(e11)) });
          break;
        }
        if (a10 < i11 && n2 > t11) {
          let t12 = Math.max(a10, r10.start(e11)), i12 = Math.min(n2, r10.end(e11));
          i12 > t12 && (s10.partial = true, s10.time.push({ startPTS: t12, endPTS: i12 }));
        } else if (n2 <= t11) break;
      }
      return s10;
    }
    getPartialFragment(e10) {
      let t10, i10, r10, s10 = null, a10 = 0, { bufferPadding: n2, fragments: l2 } = this;
      return Object.keys(l2).forEach((o2) => {
        let h2 = l2[o2];
        h2 && th(h2) && (i10 = h2.body.start - n2, r10 = h2.body.end + n2, e10 >= i10 && e10 <= r10 && a10 <= (t10 = Math.min(e10 - i10, r10 - e10)) && (s10 = h2.body, a10 = t10));
      }), s10;
    }
    isEndListAppended(e10) {
      let t10 = this.endListFragments[e10];
      return void 0 !== t10 && (t10.buffered || th(t10));
    }
    getState(e10) {
      let t10 = td(e10), i10 = this.fragments[t10];
      if (i10) if (!i10.buffered) return tn;
      else if (th(i10)) return tl;
      else return "OK";
      return ta;
    }
    isTimeBuffered(e10, t10, i10) {
      let r10, s10;
      for (let a10 = 0; a10 < i10.length; a10++) {
        if (r10 = i10.start(a10) - this.bufferPadding, s10 = i10.end(a10) + this.bufferPadding, e10 >= r10 && t10 <= s10) return true;
        if (t10 <= r10) break;
      }
      return false;
    }
    onManifestLoading() {
      this.removeAllFragments();
    }
    onFragLoaded(e10, t10) {
      if ("initSegment" === t10.frag.sn || t10.frag.bitrateTest) return;
      let i10 = t10.frag, r10 = t10.part ? null : t10, s10 = td(i10);
      this.fragments[s10] = { body: i10, appendedPTS: null, loaded: r10, buffered: false, range: /* @__PURE__ */ Object.create(null) };
    }
    onBufferAppended(e10, t10) {
      let { frag: i10, part: r10, timeRanges: s10, type: a10 } = t10;
      if ("initSegment" === i10.sn) return;
      let n2 = i10.type;
      if (r10) {
        let e11 = this.activePartLists[n2];
        e11 || (this.activePartLists[n2] = e11 = []), e11.push(r10);
      }
      this.timeRanges = s10;
      let l2 = s10[a10];
      this.detectEvictedFragments(a10, l2, n2, r10);
    }
    onFragBuffered(e10, t10) {
      this.detectPartialFragments(t10);
    }
    hasFragment(e10) {
      let t10 = td(e10);
      return !!this.fragments[t10];
    }
    hasFragments(e10) {
      let { fragments: t10 } = this, i10 = Object.keys(t10);
      if (!e10) return i10.length > 0;
      for (let r10 = i10.length; r10--; ) {
        let s10 = t10[i10[r10]];
        if ((null == s10 ? void 0 : s10.body.type) === e10) return true;
      }
      return false;
    }
    hasParts(e10) {
      var t10;
      return !!(null != (t10 = this.activePartLists[e10]) && t10.length);
    }
    removeFragmentsInRange(e10, t10, i10, r10, s10) {
      (!r10 || this.hasGaps) && Object.keys(this.fragments).forEach((a10) => {
        let n2 = this.fragments[a10];
        if (!n2) return;
        let l2 = n2.body;
        l2.type === i10 && (!r10 || l2.gap) && l2.start < t10 && l2.end > e10 && (n2.buffered || s10) && this.removeFragment(l2);
      });
    }
    removeFragment(e10) {
      let t10 = td(e10);
      e10.clearElementaryStreamInfo();
      let i10 = this.activePartLists[e10.type];
      if (i10) {
        let t11 = e10.sn;
        this.activePartLists[e10.type] = tu(i10, (e11) => e11.fragment.sn !== t11);
      }
      delete this.fragments[t10], e10.endList && delete this.endListFragments[e10.type];
    }
    removeAllFragments() {
      var e10;
      this.fragments = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.activePartLists = /* @__PURE__ */ Object.create(null), this.hasGaps = false;
      let t10 = null == (e10 = this.hls) || null == (e10 = e10.latestLevelDetails) ? void 0 : e10.partList;
      t10 && t10.forEach((e11) => e11.clearElementaryStreamInfo());
    }
  }
  function th(e10) {
    var t10, i10, r10;
    return e10.buffered && !!(e10.body.gap || null != (t10 = e10.range.video) && t10.partial || null != (i10 = e10.range.audio) && i10.partial || null != (r10 = e10.range.audiovideo) && r10.partial);
  }
  function td(e10) {
    return `${e10.type}_${e10.level}_${e10.sn}`;
  }
  function tu(e10, t10) {
    return e10.filter((e11) => {
      let i10 = t10(e11);
      return i10 || e11.clearElementaryStreamInfo(), i10;
    });
  }
  class tf {
    constructor(e10, t10, i10) {
      this.subtle = void 0, this.aesIV = void 0, this.aesMode = void 0, this.subtle = e10, this.aesIV = t10, this.aesMode = i10;
    }
    decrypt(e10, t10) {
      switch (this.aesMode) {
        case 0:
          return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, t10, e10);
        case 1:
          return this.subtle.decrypt({ name: "AES-CTR", counter: this.aesIV, length: 64 }, t10, e10);
        default:
          throw Error(`[AESCrypto] invalid aes mode ${this.aesMode}`);
      }
    }
  }
  class tc {
    constructor() {
      this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
    }
    uint8ArrayToUint32Array_(e10) {
      let t10 = new DataView(e10), i10 = new Uint32Array(4);
      for (let e11 = 0; e11 < 4; e11++) i10[e11] = t10.getUint32(4 * e11);
      return i10;
    }
    initTable() {
      let e10 = this.sBox, t10 = this.invSBox, i10 = this.subMix, r10 = i10[0], s10 = i10[1], a10 = i10[2], n2 = i10[3], l2 = this.invSubMix, o2 = l2[0], h2 = l2[1], d2 = l2[2], u2 = l2[3], f2 = new Uint32Array(256), c2 = 0, g2 = 0, m2 = 0;
      for (m2 = 0; m2 < 256; m2++) m2 < 128 ? f2[m2] = m2 << 1 : f2[m2] = m2 << 1 ^ 283;
      for (m2 = 0; m2 < 256; m2++) {
        let i11 = g2 ^ g2 << 1 ^ g2 << 2 ^ g2 << 3 ^ g2 << 4;
        i11 = i11 >>> 8 ^ 255 & i11 ^ 99, e10[c2] = i11, t10[i11] = c2;
        let l3 = f2[c2], m3 = f2[l3], p2 = f2[m3], y2 = 257 * f2[i11] ^ 16843008 * i11;
        r10[c2] = y2 << 24 | y2 >>> 8, s10[c2] = y2 << 16 | y2 >>> 16, a10[c2] = y2 << 8 | y2 >>> 24, n2[c2] = y2, y2 = 16843009 * p2 ^ 65537 * m3 ^ 257 * l3 ^ 16843008 * c2, o2[i11] = y2 << 24 | y2 >>> 8, h2[i11] = y2 << 16 | y2 >>> 16, d2[i11] = y2 << 8 | y2 >>> 24, u2[i11] = y2, c2 ? (c2 = l3 ^ f2[f2[f2[p2 ^ l3]]], g2 ^= f2[f2[g2]]) : c2 = g2 = 1;
      }
    }
    expandKey(e10) {
      let t10, i10, r10, s10, a10 = this.uint8ArrayToUint32Array_(e10), n2 = true, l2 = 0;
      for (; l2 < a10.length && n2; ) n2 = a10[l2] === this.key[l2], l2++;
      if (n2) return;
      this.key = a10;
      let o2 = this.keySize = a10.length;
      if (4 !== o2 && 6 !== o2 && 8 !== o2) throw Error("Invalid aes key size=" + o2);
      let h2 = this.ksRows = (o2 + 6 + 1) * 4, d2 = this.keySchedule = new Uint32Array(h2), u2 = this.invKeySchedule = new Uint32Array(h2), f2 = this.sBox, c2 = this.rcon, g2 = this.invSubMix, m2 = g2[0], p2 = g2[1], y2 = g2[2], v2 = g2[3];
      for (t10 = 0; t10 < h2; t10++) {
        if (t10 < o2) {
          r10 = d2[t10] = a10[t10];
          continue;
        }
        s10 = r10, t10 % o2 == 0 ? s10 = (f2[(s10 = s10 << 8 | s10 >>> 24) >>> 24] << 24 | f2[s10 >>> 16 & 255] << 16 | f2[s10 >>> 8 & 255] << 8 | f2[255 & s10]) ^ c2[t10 / o2 | 0] << 24 : o2 > 6 && t10 % o2 == 4 && (s10 = f2[s10 >>> 24] << 24 | f2[s10 >>> 16 & 255] << 16 | f2[s10 >>> 8 & 255] << 8 | f2[255 & s10]), d2[t10] = r10 = (d2[t10 - o2] ^ s10) >>> 0;
      }
      for (i10 = 0; i10 < h2; i10++) t10 = h2 - i10, s10 = 3 & i10 ? d2[t10] : d2[t10 - 4], i10 < 4 || t10 <= 4 ? u2[i10] = s10 : u2[i10] = m2[f2[s10 >>> 24]] ^ p2[f2[s10 >>> 16 & 255]] ^ y2[f2[s10 >>> 8 & 255]] ^ v2[f2[255 & s10]], u2[i10] = u2[i10] >>> 0;
    }
    networkToHostOrderSwap(e10) {
      return e10 << 24 | (65280 & e10) << 8 | (16711680 & e10) >> 8 | e10 >>> 24;
    }
    decrypt(e10, t10, i10) {
      let r10, s10, a10, n2, l2, o2, h2, d2, u2, f2, c2, g2, m2, p2, y2 = this.keySize + 6, v2 = this.invKeySchedule, E2 = this.invSBox, T2 = this.invSubMix, S2 = T2[0], A2 = T2[1], L2 = T2[2], R2 = T2[3], b2 = this.uint8ArrayToUint32Array_(i10), I2 = b2[0], k2 = b2[1], D2 = b2[2], _2 = b2[3], P2 = new Int32Array(e10), C2 = new Int32Array(P2.length), w2 = this.networkToHostOrderSwap;
      for (; t10 < P2.length; ) {
        for (u2 = w2(P2[t10]), f2 = w2(P2[t10 + 1]), c2 = w2(P2[t10 + 2]), g2 = w2(P2[t10 + 3]), l2 = u2 ^ v2[0], o2 = g2 ^ v2[1], h2 = c2 ^ v2[2], d2 = f2 ^ v2[3], m2 = 4, p2 = 1; p2 < y2; p2++) r10 = S2[l2 >>> 24] ^ A2[o2 >> 16 & 255] ^ L2[h2 >> 8 & 255] ^ R2[255 & d2] ^ v2[m2], s10 = S2[o2 >>> 24] ^ A2[h2 >> 16 & 255] ^ L2[d2 >> 8 & 255] ^ R2[255 & l2] ^ v2[m2 + 1], a10 = S2[h2 >>> 24] ^ A2[d2 >> 16 & 255] ^ L2[l2 >> 8 & 255] ^ R2[255 & o2] ^ v2[m2 + 2], n2 = S2[d2 >>> 24] ^ A2[l2 >> 16 & 255] ^ L2[o2 >> 8 & 255] ^ R2[255 & h2] ^ v2[m2 + 3], l2 = r10, o2 = s10, h2 = a10, d2 = n2, m2 += 4;
        r10 = E2[l2 >>> 24] << 24 ^ E2[o2 >> 16 & 255] << 16 ^ E2[h2 >> 8 & 255] << 8 ^ E2[255 & d2] ^ v2[m2], s10 = E2[o2 >>> 24] << 24 ^ E2[h2 >> 16 & 255] << 16 ^ E2[d2 >> 8 & 255] << 8 ^ E2[255 & l2] ^ v2[m2 + 1], a10 = E2[h2 >>> 24] << 24 ^ E2[d2 >> 16 & 255] << 16 ^ E2[l2 >> 8 & 255] << 8 ^ E2[255 & o2] ^ v2[m2 + 2], n2 = E2[d2 >>> 24] << 24 ^ E2[l2 >> 16 & 255] << 16 ^ E2[o2 >> 8 & 255] << 8 ^ E2[255 & h2] ^ v2[m2 + 3], C2[t10] = w2(r10 ^ I2), C2[t10 + 1] = w2(n2 ^ k2), C2[t10 + 2] = w2(a10 ^ D2), C2[t10 + 3] = w2(s10 ^ _2), I2 = u2, k2 = f2, D2 = c2, _2 = g2, t10 += 4;
      }
      return C2.buffer;
    }
  }
  class tg {
    constructor(e10, t10, i10) {
      this.subtle = void 0, this.key = void 0, this.aesMode = void 0, this.subtle = e10, this.key = t10, this.aesMode = i10;
    }
    expandKey() {
      let e10 = (function(e11) {
        switch (e11) {
          case 0:
            return "AES-CBC";
          case 1:
            return "AES-CTR";
          default:
            throw Error(`[FastAESKey] invalid aes mode ${e11}`);
        }
      })(this.aesMode);
      return this.subtle.importKey("raw", this.key, { name: e10 }, false, ["encrypt", "decrypt"]);
    }
  }
  class tm {
    constructor(e10, { removePKCS7Padding: t10 = true } = {}) {
      if (this.logEnabled = true, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.enableSoftwareAES = void 0, this.enableSoftwareAES = e10.enableSoftwareAES, this.removePKCS7Padding = t10, t10) try {
        const e11 = self.crypto;
        e11 && (this.subtle = e11.subtle || e11.webkitSubtle);
      } catch (e11) {
      }
      this.useSoftware = !this.subtle;
    }
    destroy() {
      this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null;
    }
    isSync() {
      return this.useSoftware;
    }
    flush() {
      let { currentResult: e10, remainderData: t10 } = this;
      if (!e10 || t10) return this.reset(), null;
      let i10 = new Uint8Array(e10);
      if (this.reset(), this.removePKCS7Padding) {
        let e11, t11;
        return (t11 = (e11 = i10.byteLength) && new DataView(i10.buffer).getUint8(e11 - 1)) ? i10.slice(0, e11 - t11) : i10;
      }
      return i10;
    }
    reset() {
      this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
    }
    decrypt(e10, t10, i10, r10) {
      return this.useSoftware ? new Promise((s10, a10) => {
        let n2 = ArrayBuffer.isView(e10) ? e10 : new Uint8Array(e10);
        this.softwareDecrypt(n2, t10, i10, r10);
        let l2 = this.flush();
        l2 ? s10(l2.buffer) : a10(Error("[softwareDecrypt] Failed to decrypt data"));
      }) : this.webCryptoDecrypt(new Uint8Array(e10), t10, i10, r10);
    }
    softwareDecrypt(e10, t10, i10, r10) {
      let { currentIV: s10, currentResult: a10, remainderData: n2 } = this;
      if (0 !== r10 || 16 !== t10.byteLength) return N.warn("SoftwareDecrypt: can only handle AES-128-CBC"), null;
      this.logOnce("JS AES decrypt"), n2 && (e10 = ey(n2, e10), this.remainderData = null);
      let l2 = this.getValidChunk(e10);
      if (!l2.length) return null;
      s10 && (i10 = s10);
      let o2 = this.softwareDecrypter;
      return (o2 || (o2 = this.softwareDecrypter = new tc()), o2.expandKey(t10), this.currentResult = o2.decrypt(l2.buffer, 0, i10), this.currentIV = l2.slice(-16).buffer, a10) ? a10 : null;
    }
    webCryptoDecrypt(e10, t10, i10, r10) {
      if (this.key !== t10 || !this.fastAesKey) {
        if (!this.subtle) return Promise.resolve(this.onWebCryptoError(e10, t10, i10, r10));
        this.key = t10, this.fastAesKey = new tg(this.subtle, t10, r10);
      }
      return this.fastAesKey.expandKey().then((t11) => this.subtle ? (this.logOnce("WebCrypto AES decrypt"), new tf(this.subtle, new Uint8Array(i10), r10).decrypt(e10.buffer, t11)) : Promise.reject(Error("web crypto not initialized"))).catch((s10) => (N.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${s10.name}: ${s10.message}`), this.onWebCryptoError(e10, t10, i10, r10)));
    }
    onWebCryptoError(e10, t10, i10, r10) {
      let s10 = this.enableSoftwareAES;
      if (s10) {
        this.useSoftware = true, this.logEnabled = true, this.softwareDecrypt(e10, t10, i10, r10);
        let s11 = this.flush();
        if (s11) return s11.buffer;
      }
      throw Error("WebCrypto" + (s10 ? " and softwareDecrypt" : "") + ": failed to decrypt data");
    }
    getValidChunk(e10) {
      let t10 = e10, i10 = e10.length - e10.length % 16;
      return i10 !== e10.length && (t10 = e10.slice(0, i10), this.remainderData = e10.slice(i10)), t10;
    }
    logOnce(e10) {
      this.logEnabled && (N.log(`[decrypter]: ${e10}`), this.logEnabled = false);
    }
  }
  class tp {
    constructor(e10) {
      this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = e10;
    }
    destroy() {
      this.loader && (this.loader.destroy(), this.loader = null);
    }
    abort() {
      this.loader && this.loader.abort();
    }
    load(e10, t10) {
      let i10 = e10.url;
      if (!i10) return Promise.reject(new tE({ type: m.NETWORK_ERROR, details: p.FRAG_LOAD_ERROR, fatal: false, frag: e10, error: Error(`Fragment does not have a ${i10 ? "part list" : "url"}`), networkDetails: null }));
      this.abort();
      let r10 = this.config, s10 = r10.fLoader, a10 = r10.loader;
      return new Promise((n2, l2) => {
        if (this.loader && this.loader.destroy(), e10.gap) if (e10.tagList.some((e11) => "GAP" === e11[0])) return void l2(tv(e10));
        else e10.gap = false;
        let o2 = this.loader = s10 ? new s10(r10) : new a10(r10), h2 = ty(e10);
        e10.loader = o2;
        let d2 = tt(r10.fragLoadPolicy.default), u2 = { loadPolicy: d2, timeout: d2.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0, highWaterMark: "initSegment" === e10.sn ? 1 / 0 : 131072 };
        e10.stats = o2.stats;
        let f2 = { onSuccess: (t11, i11, r11, s11) => {
          this.resetLoader(e10, o2);
          let a11 = t11.data;
          r11.resetIV && e10.decryptdata && (e10.decryptdata.iv = new Uint8Array(a11.slice(0, 16)), a11 = a11.slice(16)), n2({ frag: e10, part: null, payload: a11, networkDetails: s11 });
        }, onError: (t11, r11, s11, a11) => {
          this.resetLoader(e10, o2), l2(new tE({ type: m.NETWORK_ERROR, details: p.FRAG_LOAD_ERROR, fatal: false, frag: e10, response: M({ url: i10, data: void 0 }, t11), error: Error(`HTTP Error ${t11.code} ${t11.text}`), networkDetails: s11, stats: a11 }));
        }, onAbort: (t11, i11, r11) => {
          this.resetLoader(e10, o2), l2(new tE({ type: m.NETWORK_ERROR, details: p.INTERNAL_ABORTED, fatal: false, frag: e10, error: Error("Aborted"), networkDetails: r11, stats: t11 }));
        }, onTimeout: (t11, i11, r11) => {
          this.resetLoader(e10, o2), l2(new tE({ type: m.NETWORK_ERROR, details: p.FRAG_LOAD_TIMEOUT, fatal: false, frag: e10, error: Error(`Timeout after ${u2.timeout}ms`), networkDetails: r11, stats: t11 }));
        } };
        t10 && (f2.onProgress = (i11, r11, s11, a11) => t10({ frag: e10, part: null, payload: s11, networkDetails: a11 })), o2.load(h2, u2, f2);
      });
    }
    loadPart(e10, t10, i10) {
      this.abort();
      let r10 = this.config, s10 = r10.fLoader, a10 = r10.loader;
      return new Promise((n2, l2) => {
        if (this.loader && this.loader.destroy(), e10.gap || t10.gap) return void l2(tv(e10, t10));
        let o2 = this.loader = s10 ? new s10(r10) : new a10(r10), h2 = ty(e10, t10);
        e10.loader = o2;
        let d2 = tt(r10.fragLoadPolicy.default), u2 = { loadPolicy: d2, timeout: d2.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0, highWaterMark: 131072 };
        t10.stats = o2.stats, o2.load(h2, u2, { onSuccess: (r11, s11, a11, l3) => {
          this.resetLoader(e10, o2), this.updateStatsFromPart(e10, t10);
          let h3 = { frag: e10, part: t10, payload: r11.data, networkDetails: l3 };
          i10(h3), n2(h3);
        }, onError: (i11, r11, s11, a11) => {
          this.resetLoader(e10, o2), l2(new tE({ type: m.NETWORK_ERROR, details: p.FRAG_LOAD_ERROR, fatal: false, frag: e10, part: t10, response: M({ url: h2.url, data: void 0 }, i11), error: Error(`HTTP Error ${i11.code} ${i11.text}`), networkDetails: s11, stats: a11 }));
        }, onAbort: (i11, r11, s11) => {
          e10.stats.aborted = t10.stats.aborted, this.resetLoader(e10, o2), l2(new tE({ type: m.NETWORK_ERROR, details: p.INTERNAL_ABORTED, fatal: false, frag: e10, part: t10, error: Error("Aborted"), networkDetails: s11, stats: i11 }));
        }, onTimeout: (i11, r11, s11) => {
          this.resetLoader(e10, o2), l2(new tE({ type: m.NETWORK_ERROR, details: p.FRAG_LOAD_TIMEOUT, fatal: false, frag: e10, part: t10, error: Error(`Timeout after ${u2.timeout}ms`), networkDetails: s11, stats: i11 }));
        } });
      });
    }
    updateStatsFromPart(e10, t10) {
      let i10 = e10.stats, r10 = t10.stats, s10 = r10.total;
      if (i10.loaded += r10.loaded, s10) {
        let r11 = Math.round(e10.duration / t10.duration), a11 = Math.min(Math.round(i10.loaded / s10), r11), n3 = (r11 - a11) * Math.round(i10.loaded / a11);
        i10.total = i10.loaded + n3;
      } else i10.total = Math.max(i10.loaded, i10.total);
      let a10 = i10.loading, n2 = r10.loading;
      a10.start ? a10.first += n2.first - n2.start : (a10.start = n2.start, a10.first = n2.first), a10.end = n2.end;
    }
    resetLoader(e10, t10) {
      e10.loader = null, this.loader === t10 && (self.clearTimeout(this.partLoadTimeout), this.loader = null), t10.destroy();
    }
  }
  function ty(e10, t10 = null) {
    let i10 = t10 || e10, r10 = { frag: e10, part: t10, responseType: "arraybuffer", url: i10.url, headers: {}, rangeStart: 0, rangeEnd: 0 }, s10 = i10.byteRangeStartOffset, a10 = i10.byteRangeEndOffset;
    if (f(s10) && f(a10)) {
      var n2, l2;
      let t11 = s10, i11 = a10;
      if ("initSegment" === e10.sn && ("AES-128" === (l2 = null == (n2 = e10.decryptdata) ? void 0 : n2.method) || "AES-256" === l2)) {
        let e11 = a10 - s10;
        e11 % 16 && (i11 = a10 + (16 - e11 % 16)), 0 !== s10 && (r10.resetIV = true, t11 = s10 - 16);
      }
      r10.rangeStart = t11, r10.rangeEnd = i11;
    }
    return r10;
  }
  function tv(e10, t10) {
    let i10 = Error(`GAP ${e10.gap ? "tag" : "attribute"} found`), r10 = { type: m.MEDIA_ERROR, details: p.FRAG_GAP, fatal: false, frag: e10, error: i10, networkDetails: null };
    return t10 && (r10.part = t10), (t10 || e10).stats.aborted = true, new tE(r10);
  }
  class tE extends Error {
    constructor(e10) {
      super(e10.error.message), this.data = void 0, this.data = e10;
    }
  }
  class tT extends O {
    constructor(e10, t10) {
      super(e10, t10), this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
    }
    destroy() {
      this.onHandlerDestroying(), this.onHandlerDestroyed();
    }
    onHandlerDestroying() {
      this.clearNextTick(), this.clearInterval();
    }
    onHandlerDestroyed() {
    }
    hasInterval() {
      return !!this._tickInterval;
    }
    hasNextTick() {
      return !!this._tickTimer;
    }
    setInterval(e10) {
      return !this._tickInterval && (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, e10), true);
    }
    clearInterval() {
      return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, true);
    }
    clearNextTick() {
      return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, true);
    }
    tick() {
      this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
    }
    tickImmediate() {
      this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
    }
    doTick() {
    }
  }
  class tS {
    constructor(e10, t10, i10, r10 = 0, s10 = -1, a10 = false) {
      this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = tA(), this.buffering = { audio: tA(), video: tA(), audiovideo: tA() }, this.level = e10, this.sn = t10, this.id = i10, this.size = r10, this.part = s10, this.partial = a10;
    }
  }
  function tA() {
    return { start: 0, executeStart: 0, executeEnd: 0, end: 0 };
  }
  let tL = { length: 0, start: () => 0, end: () => 0 };
  class tR {
    static isBuffered(e10, t10) {
      if (e10) {
        let i10 = tR.getBuffered(e10);
        for (let e11 = i10.length; e11--; ) if (t10 >= i10.start(e11) && t10 <= i10.end(e11)) return true;
      }
      return false;
    }
    static bufferedRanges(e10) {
      if (e10) {
        let t10 = tR.getBuffered(e10);
        return tR.timeRangesToArray(t10);
      }
      return [];
    }
    static timeRangesToArray(e10) {
      let t10 = [];
      for (let i10 = 0; i10 < e10.length; i10++) t10.push({ start: e10.start(i10), end: e10.end(i10) });
      return t10;
    }
    static bufferInfo(e10, t10, i10) {
      if (e10) {
        let r10 = tR.bufferedRanges(e10);
        if (r10.length) return tR.bufferedInfo(r10, t10, i10);
      }
      return { len: 0, start: t10, end: t10, bufferedIndex: -1 };
    }
    static bufferedInfo(e10, t10, i10) {
      let r10;
      t10 = Math.max(0, t10), e10.length > 1 && e10.sort((e11, t11) => e11.start - t11.start || t11.end - e11.end);
      let s10 = -1, a10 = [];
      if (i10) for (let r11 = 0; r11 < e10.length; r11++) {
        t10 >= e10[r11].start && t10 <= e10[r11].end && (s10 = r11);
        let n3 = a10.length;
        if (n3) {
          let t11 = a10[n3 - 1].end;
          e10[r11].start - t11 < i10 ? e10[r11].end > t11 && (a10[n3 - 1].end = e10[r11].end) : a10.push(e10[r11]);
        } else a10.push(e10[r11]);
      }
      else a10 = e10;
      let n2 = 0, l2 = t10, o2 = t10;
      for (let e11 = 0; e11 < a10.length; e11++) {
        let h2 = a10[e11].start, d2 = a10[e11].end;
        if (-1 === s10 && t10 >= h2 && t10 <= d2 && (s10 = e11), t10 + i10 >= h2 && t10 < d2) l2 = h2, n2 = (o2 = d2) - t10;
        else if (t10 + i10 < h2) {
          r10 = h2;
          break;
        }
      }
      return { len: n2, start: l2 || 0, end: o2 || 0, nextStart: r10, buffered: e10, bufferedIndex: s10 };
    }
    static getBuffered(e10) {
      try {
        return e10.buffered || tL;
      } catch (e11) {
        return N.log("failed to get media.buffered", e11), tL;
      }
    }
  }
  let tb = /\{\$([a-zA-Z0-9-_]+)\}/g;
  function tI(e10, t10) {
    if (null !== e10.variableList || e10.hasVariableRefs) {
      let i10 = e10.variableList;
      return t10.replace(tb, (t11) => {
        let r10 = t11.substring(2, t11.length - 1), s10 = null == i10 ? void 0 : i10[r10];
        return void 0 === s10 ? (e10.playlistParsingError || (e10.playlistParsingError = Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${r10}"`)), t11) : s10;
      });
    }
    return t10;
  }
  function tk(e10, t10, i10) {
    let r10, s10, a10 = e10.variableList;
    if (a10 || (e10.variableList = a10 = {}), "QUERYPARAM" in t10) {
      r10 = t10.QUERYPARAM;
      try {
        let e11 = new self.URL(i10).searchParams;
        if (e11.has(r10)) s10 = e11.get(r10);
        else throw Error(`"${r10}" does not match any query parameter in URI: "${i10}"`);
      } catch (t11) {
        e10.playlistParsingError || (e10.playlistParsingError = Error(`EXT-X-DEFINE QUERYPARAM: ${t11.message}`));
      }
    } else r10 = t10.NAME, s10 = t10.VALUE;
    r10 in a10 ? e10.playlistParsingError || (e10.playlistParsingError = Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${r10}"`)) : a10[r10] = s10 || "";
  }
  let tD = /^(\d+)x(\d+)$/, t_ = /(.+?)=(".*?"|.*?)(?:,|$)/g;
  class tP {
    constructor(e10, t10) {
      "string" == typeof e10 && (e10 = tP.parseAttrList(e10, t10)), w(this, e10);
    }
    get clientAttrs() {
      return Object.keys(this).filter((e10) => "X-" === e10.substring(0, 2));
    }
    decimalInteger(e10) {
      let t10 = parseInt(this[e10], 10);
      return t10 > Number.MAX_SAFE_INTEGER ? 1 / 0 : t10;
    }
    hexadecimalInteger(e10) {
      if (this[e10]) {
        let t10 = (this[e10] || "0x").slice(2), i10 = new Uint8Array((t10 = (1 & t10.length ? "0" : "") + t10).length / 2);
        for (let e11 = 0; e11 < t10.length / 2; e11++) i10[e11] = parseInt(t10.slice(2 * e11, 2 * e11 + 2), 16);
        return i10;
      }
      return null;
    }
    hexadecimalIntegerAsNumber(e10) {
      let t10 = parseInt(this[e10], 16);
      return t10 > Number.MAX_SAFE_INTEGER ? 1 / 0 : t10;
    }
    decimalFloatingPoint(e10) {
      return parseFloat(this[e10]);
    }
    optionalFloat(e10, t10) {
      let i10 = this[e10];
      return i10 ? parseFloat(i10) : t10;
    }
    enumeratedString(e10) {
      return this[e10];
    }
    enumeratedStringList(e10, t10) {
      let i10 = this[e10];
      return (i10 ? i10.split(/[ ,]+/) : []).reduce((e11, t11) => (e11[t11.toLowerCase()] = true, e11), t10);
    }
    bool(e10) {
      return "YES" === this[e10];
    }
    decimalResolution(e10) {
      let t10 = tD.exec(this[e10]);
      if (null !== t10) return { width: parseInt(t10[1], 10), height: parseInt(t10[2], 10) };
    }
    static parseAttrList(e10, t10) {
      let i10, r10 = {};
      for (t_.lastIndex = 0; null !== (i10 = t_.exec(e10)); ) {
        let s10 = i10[1].trim(), a10 = i10[2], n2 = 0 === a10.indexOf('"') && a10.lastIndexOf('"') === a10.length - 1, l2 = false;
        if (n2) a10 = a10.slice(1, -1);
        else switch (s10) {
          case "IV":
          case "SCTE35-CMD":
          case "SCTE35-IN":
          case "SCTE35-OUT":
            l2 = true;
        }
        if (t10 && (n2 || l2)) a10 = tI(t10, a10);
        else if (!l2 && !n2) switch (s10) {
          case "CLOSED-CAPTIONS":
            if ("NONE" === a10) break;
          case "ALLOWED-CPC":
          case "CLASS":
          case "ASSOC-LANGUAGE":
          case "AUDIO":
          case "BYTERANGE":
          case "CHANNELS":
          case "CHARACTERISTICS":
          case "CODECS":
          case "DATA-ID":
          case "END-DATE":
          case "GROUP-ID":
          case "ID":
          case "IMPORT":
          case "INSTREAM-ID":
          case "KEYFORMAT":
          case "KEYFORMATVERSIONS":
          case "LANGUAGE":
          case "NAME":
          case "PATHWAY-ID":
          case "QUERYPARAM":
          case "RECENTLY-REMOVED-DATERANGES":
          case "SERVER-URI":
          case "STABLE-RENDITION-ID":
          case "STABLE-VARIANT-ID":
          case "START-DATE":
          case "SUBTITLES":
          case "SUPPLEMENTAL-CODECS":
          case "URI":
          case "VALUE":
          case "VIDEO":
          case "X-ASSET-LIST":
          case "X-ASSET-URI":
            N.warn(`${e10}: attribute ${s10} is missing quotes`);
        }
        r10[s10] = a10;
      }
      return r10;
    }
  }
  class tC {
    constructor(e10, t10, i10 = 0) {
      var r10;
      if (this.attr = void 0, this.tagAnchor = void 0, this.tagOrder = void 0, this._startDate = void 0, this._endDate = void 0, this._dateAtEnd = void 0, this._cue = void 0, this._badValueForSameId = void 0, this.tagAnchor = (null == t10 ? void 0 : t10.tagAnchor) || null, this.tagOrder = null != (r10 = null == t10 ? void 0 : t10.tagOrder) ? r10 : i10, t10) {
        const i11 = t10.attr;
        for (const t11 in i11) if (Object.prototype.hasOwnProperty.call(e10, t11) && e10[t11] !== i11[t11]) {
          N.warn(`DATERANGE tag attribute: "${t11}" does not match for tags with ID: "${e10.ID}"`), this._badValueForSameId = t11;
          break;
        }
        e10 = w(new tP({}), i11, e10);
      }
      if (this.attr = e10, t10 ? (this._startDate = t10._startDate, this._cue = t10._cue, this._endDate = t10._endDate, this._dateAtEnd = t10._dateAtEnd) : this._startDate = new Date(e10["START-DATE"]), "END-DATE" in this.attr) {
        const e11 = (null == t10 ? void 0 : t10.endDate) || new Date(this.attr["END-DATE"]);
        f(e11.getTime()) && (this._endDate = e11);
      }
    }
    get id() {
      return this.attr.ID;
    }
    get class() {
      return this.attr.CLASS;
    }
    get cue() {
      let e10 = this._cue;
      return void 0 === e10 ? this._cue = this.attr.enumeratedStringList(this.attr.CUE ? "CUE" : "X-CUE", { pre: false, post: false, once: false }) : e10;
    }
    get startTime() {
      let { tagAnchor: e10 } = this;
      return null === e10 || null === e10.programDateTime ? (N.warn(`Expected tagAnchor Fragment with PDT set for DateRange "${this.id}": ${e10}`), NaN) : e10.start + (this.startDate.getTime() - e10.programDateTime) / 1e3;
    }
    get startDate() {
      return this._startDate;
    }
    get endDate() {
      let e10 = this._endDate || this._dateAtEnd;
      if (e10) return e10;
      let t10 = this.duration;
      return null !== t10 ? this._dateAtEnd = new Date(this._startDate.getTime() + 1e3 * t10) : null;
    }
    get duration() {
      if ("DURATION" in this.attr) {
        let e10 = this.attr.decimalFloatingPoint("DURATION");
        if (f(e10)) return e10;
      } else if (this._endDate) return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
      return null;
    }
    get plannedDuration() {
      return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null;
    }
    get endOnNext() {
      return this.attr.bool("END-ON-NEXT");
    }
    get isInterstitial() {
      return "com.apple.hls.interstitial" === this.class;
    }
    get isValid() {
      return !!this.id && !this._badValueForSameId && f(this.startDate.getTime()) && (null === this.duration || this.duration >= 0) && (!this.endOnNext || !!this.class) && (!this.attr.CUE || !this.cue.pre && !this.cue.post || this.cue.pre !== this.cue.post) && (!this.isInterstitial || "X-ASSET-URI" in this.attr || "X-ASSET-LIST" in this.attr);
    }
  }
  class tw {
    constructor(e10) {
      this.PTSKnown = false, this.alignedSliding = false, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.dateRangeTagCount = 0, this.live = true, this.requestScheduled = -1, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = true, this.advanced = true, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = false, this.canSkipUntil = 0, this.canSkipDateRanges = false, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = false, this.appliedTimelineOffset = void 0, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = e10;
    }
    reloaded(e10) {
      if (!e10) {
        this.advanced = true, this.updated = true;
        return;
      }
      let t10 = this.lastPartSn - e10.lastPartSn, i10 = this.lastPartIndex - e10.lastPartIndex;
      this.updated = this.endSN !== e10.endSN || !!i10 || !!t10 || !this.live, this.advanced = this.endSN > e10.endSN || t10 > 0 || 0 === t10 && i10 > 0, this.updated || this.advanced ? this.misses = Math.floor(0.6 * e10.misses) : this.misses = e10.misses + 1;
    }
    hasKey(e10) {
      return this.encryptedFragments.some((t10) => {
        let i10 = t10.decryptdata;
        return i10 || (t10.setKeyFormat(e10.keyFormat), i10 = t10.decryptdata), !!i10 && e10.matches(i10);
      });
    }
    get hasProgramDateTime() {
      return !!this.fragments.length && f(this.fragments[this.fragments.length - 1].programDateTime);
    }
    get levelTargetDuration() {
      return this.averagetargetduration || this.targetduration || 10;
    }
    get drift() {
      let e10 = this.driftEndTime - this.driftStartTime;
      return e10 > 0 ? 1e3 * (this.driftEnd - this.driftStart) / e10 : 1;
    }
    get edge() {
      return this.partEnd || this.fragmentEnd;
    }
    get partEnd() {
      var e10;
      return null != (e10 = this.partList) && e10.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
    }
    get fragmentEnd() {
      return this.fragments.length ? this.fragments[this.fragments.length - 1].end : 0;
    }
    get fragmentStart() {
      return this.fragments.length ? this.fragments[0].start : 0;
    }
    get age() {
      return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
    }
    get lastPartIndex() {
      var e10;
      return null != (e10 = this.partList) && e10.length ? this.partList[this.partList.length - 1].index : -1;
    }
    get maxPartIndex() {
      let e10 = this.partList;
      if (e10) {
        let t10 = this.lastPartIndex;
        if (-1 !== t10) {
          for (let i10 = e10.length; i10--; ) if (e10[i10].index > t10) return e10[i10].index;
          return t10;
        }
      }
      return 0;
    }
    get lastPartSn() {
      var e10;
      return null != (e10 = this.partList) && e10.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
    }
    get expired() {
      if (this.live && this.age && this.misses < 3) {
        let e10 = this.partEnd - this.fragmentStart;
        return this.age > Math.max(e10, this.totalduration) + this.levelTargetDuration;
      }
      return false;
    }
  }
  function tx(e10, t10) {
    return e10.length === t10.length && !e10.some((e11, i10) => e11 !== t10[i10]);
  }
  function tM(e10, t10) {
    return !e10 && !t10 || !!e10 && !!t10 && tx(e10, t10);
  }
  function tO(e10) {
    return "AES-128" === e10 || "AES-256" === e10 || "AES-256-CTR" === e10;
  }
  function tF(e10) {
    switch (e10) {
      case "AES-128":
      case "AES-256":
        return 0;
      case "AES-256-CTR":
        return 1;
      default:
        throw Error(`invalid full segment method ${e10}`);
    }
  }
  function t$(e10) {
    return Uint8Array.from(atob(e10), (e11) => e11.charCodeAt(0));
  }
  function tU(e10) {
    return Uint8Array.from(unescape(encodeURIComponent(e10)), (e11) => e11.charCodeAt(0));
  }
  function tB(e10) {
    let t10 = function(e11, t11, i10) {
      let r10 = e11[t11];
      e11[t11] = e11[i10], e11[i10] = r10;
    };
    t10(e10, 0, 3), t10(e10, 1, 2), t10(e10, 4, 5), t10(e10, 6, 7);
  }
  function tN(e10) {
    let t10 = e10.split(":"), i10 = null;
    if ("data" === t10[0] && 2 === t10.length) {
      let e11 = t10[1].split(";"), r10 = e11[e11.length - 1].split(",");
      if (2 === r10.length) {
        let t11 = "base64" === r10[0], s10 = r10[1];
        if (t11) e11.splice(-1, 1), i10 = t$(s10);
        else {
          let e12, t12;
          e12 = tU(s10).subarray(0, 16), (t12 = new Uint8Array(16)).set(e12, 16 - e12.length), i10 = t12;
        }
      }
    }
    return i10;
  }
  let tG = "u" > typeof self ? self : void 0;
  var tK = "org.w3.clearkey", tH = "com.apple.fps", tV = "com.microsoft.playready", tY = "com.widevine.alpha", tj = "org.w3.clearkey", tW = "com.apple.streamingkeydelivery", tq = "com.microsoft.playready", tX = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";
  function tQ(e10) {
    switch (e10) {
      case tW:
        return tH;
      case tq:
        return tV;
      case tX:
        return tY;
      case tj:
        return tK;
    }
  }
  function tz(e10) {
    switch (e10) {
      case tH:
        return tW;
      case tV:
        return tq;
      case tY:
        return tX;
      case tK:
        return tj;
    }
  }
  function tZ(e10) {
    let { drmSystems: t10, widevineLicenseUrl: i10 } = e10, r10 = t10 ? [tH, tY, tV, tK].filter((e11) => !!t10[e11]) : [];
    return !r10[tY] && i10 && r10.push(tY), r10;
  }
  let tJ = null != tG && null != (l = tG.navigator) && l.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
  function t0(e10) {
    let t10 = new Uint16Array(e10.buffer, e10.byteOffset, e10.byteLength / 2), i10 = String.fromCharCode.apply(null, Array.from(t10)), r10 = i10.substring(i10.indexOf("<"), i10.length), s10 = new DOMParser().parseFromString(r10, "text/xml").getElementsByTagName("KID")[0];
    if (s10) {
      let e11 = s10.childNodes[0] ? s10.childNodes[0].nodeValue : s10.getAttribute("VALUE");
      if (e11) {
        let t11 = t$(e11).subarray(0, 16);
        return tB(t11), t11;
      }
    }
    return null;
  }
  let t1 = {};
  class t2 {
    static clearKeyUriToKeyIdMap() {
      t1 = {};
    }
    static setKeyIdForUri(e10, t10) {
      t1[e10] = t10;
    }
    static addKeyIdForUri(e10) {
      let t10 = Object.keys(t1).length % Number.MAX_SAFE_INTEGER, i10 = new Uint8Array(16);
      return new DataView(i10.buffer, 12, 4).setUint32(0, t10), t1[e10] = i10, i10;
    }
    constructor(e10, t10, i10, r10 = [1], s10 = null, a10) {
      this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = e10, this.uri = t10, this.keyFormat = i10, this.keyFormatVersions = r10, this.iv = s10, this.encrypted = !!e10 && "NONE" !== e10, this.isCommonEncryption = this.encrypted && !tO(e10), null != a10 && a10.startsWith("0x") && (this.keyId = new Uint8Array(Y(a10)));
    }
    matches(e10) {
      return e10.uri === this.uri && e10.method === this.method && e10.encrypted === this.encrypted && e10.keyFormat === this.keyFormat && tx(e10.keyFormatVersions, this.keyFormatVersions) && tM(e10.iv, this.iv) && tM(e10.keyId, this.keyId);
    }
    isSupported() {
      if (this.method) {
        if (tO(this.method) || "NONE" === this.method) return true;
        if ("identity" === this.keyFormat) return "SAMPLE-AES" === this.method;
        switch (this.keyFormat) {
          case tW:
          case tX:
          case tq:
          case tj:
            return -1 !== ["SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method);
        }
      }
      return false;
    }
    getDecryptData(e10, t10) {
      var i10, r10;
      if (!this.encrypted || !this.uri) return null;
      if (tO(this.method)) {
        let t11 = this.iv;
        return t11 || ("number" != typeof e10 && (N.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`), e10 = 0), t11 = (function(e11) {
          let t12 = new Uint8Array(16);
          for (let i11 = 12; i11 < 16; i11++) t12[i11] = e11 >> 8 * (15 - i11) & 255;
          return t12;
        })(e10)), new t2(this.method, this.uri, "identity", this.keyFormatVersions, t11);
      }
      if (this.keyId) {
        let e11 = t1[this.uri];
        if (e11 && !tx(this.keyId, e11) && t2.setKeyIdForUri(this.uri, this.keyId), this.pssh) return this;
      }
      let s10 = tN(this.uri);
      if (s10) switch (this.keyFormat) {
        case tX:
          if (this.pssh = s10, !this.keyId) {
            let e11 = (function(e12) {
              let t11 = [];
              if (e12 instanceof ArrayBuffer) {
                let i11 = e12.byteLength, r11 = 0;
                for (; r11 + 32 < i11; ) {
                  let i12 = (function(e13) {
                    let t12 = e13.getUint32(0), i13 = e13.byteOffset, r12 = e13.byteLength;
                    if (r12 < t12) return { offset: i13, size: r12 };
                    if (1886614376 !== e13.getUint32(4)) return { offset: i13, size: t12 };
                    let s11 = e13.getUint32(8) >>> 24;
                    if (0 !== s11 && 1 !== s11) return { offset: i13, size: t12 };
                    let a10 = e13.buffer, n2 = V(new Uint8Array(a10, i13 + 12, 16)), l2 = null, o2 = 0;
                    if (0 === s11) o2 = 28;
                    else {
                      let s12 = e13.getUint32(28);
                      if (!s12 || r12 < 32 + 16 * s12) return { offset: i13, size: t12 };
                      l2 = [];
                      for (let e14 = 0; e14 < s12; e14++) l2.push(new Uint8Array(a10, i13 + 32 + 16 * e14, 16));
                      o2 = 32 + 16 * s12;
                    }
                    if (!o2) return { offset: i13, size: t12 };
                    let h2 = e13.getUint32(o2);
                    return t12 - 32 < h2 ? { offset: i13, size: t12 } : { version: s11, systemId: n2, kids: l2, data: new Uint8Array(a10, i13 + o2 + 4, h2), offset: i13, size: t12 };
                  })(new DataView(e12, r11));
                  t11.push(i12), r11 += i12.size;
                }
              }
              return t11;
            })(s10.buffer);
            if (e11.length) {
              let t11 = e11[0];
              this.keyId = null != (i10 = t11.kids) && i10.length ? t11.kids[0] : null;
            }
          }
          this.keyId || (this.keyId = t3(t10));
          break;
        case tq: {
          let e11 = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
          this.pssh = (function(e12, t11) {
            let i11, r11;
            if (16 !== e12.byteLength) throw RangeError("Invalid system id");
            i11 = new Uint8Array(), r11 = new Uint8Array();
            let s11 = new Uint8Array(4);
            return t11.byteLength > 0 && new DataView(s11.buffer).setUint32(0, t11.byteLength, false), (function(e13, ...t12) {
              let i12 = t12.length, r12 = 8, s12 = i12;
              for (; s12--; ) r12 += t12[s12].byteLength;
              let a10 = new Uint8Array(r12);
              for (a10[0] = r12 >> 24 & 255, a10[1] = r12 >> 16 & 255, a10[2] = r12 >> 8 & 255, a10[3] = 255 & r12, a10.set(e13, 4), s12 = 0, r12 = 8; s12 < i12; s12++) a10.set(t12[s12], r12), r12 += t12[s12].byteLength;
              return a10;
            })([112, 115, 115, 104], new Uint8Array([0, 0, 0, 0]), e12, r11, i11, s11, t11);
          })(e11, s10), this.keyId = t0(s10);
          break;
        }
        default: {
          let e11 = s10.subarray(0, 16);
          if (16 !== e11.length) {
            let t11 = new Uint8Array(16);
            t11.set(e11, 16 - e11.length), e11 = t11;
          }
          this.keyId = e11;
        }
      }
      if (!this.keyId || 16 !== this.keyId.byteLength) {
        let e11, i11;
        !(e11 = (i11 = null == (r10 = t10) ? void 0 : r10[tX]) ? i11.keyId : null) && ((e11 = t3(t10)) || (e11 = t1[this.uri])), e11 && (this.keyId = e11, t2.setKeyIdForUri(this.uri, e11));
      }
      return this;
    }
  }
  function t3(e10) {
    let t10 = null == e10 ? void 0 : e10[tq];
    if (t10) {
      let e11 = tN(t10.uri);
      if (e11) return t0(e11);
    }
    return null;
  }
  let t4 = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g, t5 = /#EXT-X-MEDIA:(.*)/g, t8 = /^#EXT(?:INF|-X-TARGETDURATION):/m, t6 = RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[^\r\n]*)/.source, /#.*/.source].join("|"), "g"), t9 = new RegExp([/#EXT-X-(PROGRAM-DATE-TIME|BYTERANGE|DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
  class t7 {
    static findGroup(e10, t10) {
      for (let i10 = 0; i10 < e10.length; i10++) {
        let r10 = e10[i10];
        if (r10.id === t10) return r10;
      }
    }
    static resolve(e10, t10) {
      return W.buildAbsoluteURL(t10, e10, { alwaysNormalize: true });
    }
    static isMediaPlaylist(e10) {
      return t8.test(e10);
    }
    static parseMasterPlaylist(e10, t10) {
      var i10;
      let r10, s10 = { contentSteering: null, levels: [], playlistParsingError: null, sessionData: null, sessionKeys: null, startTimeOffset: null, variableList: null, hasVariableRefs: tb.test(e10) }, a10 = [];
      if (t4.lastIndex = 0, !e10.startsWith("#EXTM3U")) return s10.playlistParsingError = Error("no EXTM3U delimiter"), s10;
      for (; null != (r10 = t4.exec(e10)); ) if (r10[1]) {
        let e11 = new tP(r10[1], s10), n3 = tI(s10, r10[2]), l2 = { attrs: e11, bitrate: e11.decimalInteger("BANDWIDTH") || e11.decimalInteger("AVERAGE-BANDWIDTH"), name: e11.NAME, url: t7.resolve(n3, t10) }, o2 = e11.decimalResolution("RESOLUTION");
        o2 && (l2.width = o2.width, l2.height = o2.height), ir(e11.CODECS, l2);
        let h2 = e11["SUPPLEMENTAL-CODECS"];
        h2 && (l2.supplemental = {}, ir(h2, l2.supplemental)), null != (i10 = l2.unknownCodecs) && i10.length || a10.push(l2), s10.levels.push(l2);
      } else if (r10[3]) {
        let e11 = r10[3], i11 = r10[4];
        switch (e11) {
          case "SESSION-DATA": {
            let e12 = new tP(i11, s10), t11 = e12["DATA-ID"];
            t11 && (null === s10.sessionData && (s10.sessionData = {}), s10.sessionData[t11] = e12);
            break;
          }
          case "SESSION-KEY": {
            let e12 = it(i11, t10, s10);
            e12.encrypted && e12.isSupported() ? (null === s10.sessionKeys && (s10.sessionKeys = []), s10.sessionKeys.push(e12)) : N.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${i11}"`);
            break;
          }
          case "DEFINE":
            {
              let e12 = new tP(i11, s10);
              tk(s10, e12, t10);
            }
            break;
          case "CONTENT-STEERING": {
            let e12 = new tP(i11, s10);
            s10.contentSteering = { uri: t7.resolve(e12["SERVER-URI"], t10), pathwayId: e12["PATHWAY-ID"] || "." };
            break;
          }
          case "START":
            s10.startTimeOffset = ii(i11);
        }
      }
      let n2 = a10.length > 0 && a10.length < s10.levels.length;
      return s10.levels = n2 ? a10 : s10.levels, 0 === s10.levels.length && (s10.playlistParsingError = Error("no levels found in manifest")), s10;
    }
    static parseMasterPlaylistMedia(e10, t10, i10) {
      let r10, s10 = {}, a10 = i10.levels, n2 = { AUDIO: a10.map((e11) => ({ id: e11.attrs.AUDIO, audioCodec: e11.audioCodec })), SUBTITLES: a10.map((e11) => ({ id: e11.attrs.SUBTITLES, textCodec: e11.textCodec })), "CLOSED-CAPTIONS": [] }, l2 = 0;
      for (t5.lastIndex = 0; null !== (r10 = t5.exec(e10)); ) {
        let e11 = new tP(r10[1], i10), a11 = e11.TYPE;
        if (a11) {
          let i11 = n2[a11], r11 = s10[a11] || [];
          s10[a11] = r11;
          let o2 = e11.LANGUAGE, h2 = e11["ASSOC-LANGUAGE"], d2 = e11.CHANNELS, u2 = e11.CHARACTERISTICS, f2 = e11["INSTREAM-ID"], c2 = { attrs: e11, bitrate: 0, id: l2++, groupId: e11["GROUP-ID"] || "", name: e11.NAME || o2 || "", type: a11, default: e11.bool("DEFAULT"), autoselect: e11.bool("AUTOSELECT"), forced: e11.bool("FORCED"), lang: o2, url: e11.URI ? t7.resolve(e11.URI, t10) : "" };
          if (h2 && (c2.assocLang = h2), d2 && (c2.channels = d2), u2 && (c2.characteristics = u2), f2 && (c2.instreamId = f2), null != i11 && i11.length) {
            let e12 = t7.findGroup(i11, c2.groupId) || i11[0];
            is(c2, e12, "audioCodec"), is(c2, e12, "textCodec");
          }
          r11.push(c2);
        }
      }
      return s10;
    }
    static parseLevelPlaylist(e10, t10, i10, r10, s10, a10) {
      var n2;
      let l2, o2, h2, d2, u2 = { url: t10 }, c2 = new tw(t10), g2 = c2.fragments, m2 = [], p2 = null, y2 = 0, v2 = 0, E2 = 0, T2 = 0, S2 = 0, A2 = null, L2 = new ee(r10, u2), R2 = -1, b2 = false, I2 = null;
      if (t6.lastIndex = 0, c2.m3u8 = e10, c2.hasVariableRefs = tb.test(e10), (null == (n2 = t6.exec(e10)) ? void 0 : n2[0]) !== "#EXTM3U") return c2.playlistParsingError = Error("Missing format identifier #EXTM3U"), c2;
      for (; null !== (l2 = t6.exec(e10)); ) {
        b2 && (b2 = false, (L2 = new ee(r10, u2)).playlistOffset = E2, L2.setStart(E2), L2.sn = y2, L2.cc = T2, S2 && (L2.bitrate = S2), L2.level = i10, p2 && (L2.initSegment = p2, p2.rawProgramDateTime && (L2.rawProgramDateTime = p2.rawProgramDateTime, p2.rawProgramDateTime = null), I2 && (L2.setByteRange(I2), I2 = null)));
        let e11 = l2[1];
        if (e11) {
          L2.duration = parseFloat(e11);
          let t11 = (" " + l2[2]).slice(1);
          L2.title = t11 || null, L2.tagList.push(t11 ? ["INF", e11, t11] : ["INF", e11]);
        } else if (l2[3]) {
          if (f(L2.duration)) {
            L2.playlistOffset = E2, L2.setStart(E2), h2 && io(L2, h2, c2), L2.sn = y2, L2.level = i10, L2.cc = T2, g2.push(L2);
            let e12 = (" " + l2[3]).slice(1);
            L2.relurl = tI(c2, e12), ia(L2, A2, m2), A2 = L2, E2 += L2.duration, y2++, v2 = 0, b2 = true;
          }
        } else {
          if (!(l2 = l2[0].match(t9))) {
            N.warn("No matches on slow regex match for level playlist!");
            continue;
          }
          for (o2 = 1; o2 < l2.length && void 0 === l2[o2]; o2++) ;
          let e12 = (" " + l2[o2]).slice(1), s11 = (" " + l2[o2 + 1]).slice(1), n3 = l2[o2 + 2] ? (" " + l2[o2 + 2]).slice(1) : null;
          switch (e12) {
            case "BYTERANGE":
              A2 ? L2.setByteRange(s11, A2) : L2.setByteRange(s11);
              break;
            case "PROGRAM-DATE-TIME":
              L2.rawProgramDateTime = s11, L2.tagList.push(["PROGRAM-DATE-TIME", s11]), -1 === R2 && (R2 = g2.length);
              break;
            case "PLAYLIST-TYPE":
              c2.type && ih(c2, e12, l2), c2.type = s11.toUpperCase();
              break;
            case "MEDIA-SEQUENCE":
              0 !== c2.startSN ? ih(c2, e12, l2) : g2.length > 0 && id(c2, e12, l2), y2 = c2.startSN = parseInt(s11);
              break;
            case "SKIP": {
              c2.skippedSegments && ih(c2, e12, l2);
              let t11 = new tP(s11, c2), i11 = t11.decimalInteger("SKIPPED-SEGMENTS");
              if (f(i11)) {
                c2.skippedSegments += i11;
                for (let e13 = i11; e13--; ) g2.push(null);
                y2 += i11;
              }
              let r11 = t11.enumeratedString("RECENTLY-REMOVED-DATERANGES");
              r11 && (c2.recentlyRemovedDateranges = (c2.recentlyRemovedDateranges || []).concat(r11.split("	")));
              break;
            }
            case "TARGETDURATION":
              0 !== c2.targetduration && ih(c2, e12, l2), c2.targetduration = Math.max(parseInt(s11), 1);
              break;
            case "VERSION":
              null !== c2.version && ih(c2, e12, l2), c2.version = parseInt(s11);
              break;
            case "INDEPENDENT-SEGMENTS":
              break;
            case "ENDLIST":
              c2.live || ih(c2, e12, l2), c2.live = false;
              break;
            case "#":
              (s11 || n3) && L2.tagList.push(n3 ? [s11, n3] : [s11]);
              break;
            case "DISCONTINUITY":
              T2++, L2.tagList.push(["DIS"]);
              break;
            case "GAP":
              L2.gap = true, L2.tagList.push([e12]);
              break;
            case "BITRATE":
              L2.tagList.push([e12, s11]), f(S2 = 1e3 * parseInt(s11)) ? L2.bitrate = S2 : S2 = 0;
              break;
            case "DATERANGE": {
              let e13 = new tP(s11, c2), t11 = new tC(e13, c2.dateRanges[e13.ID], c2.dateRangeTagCount);
              c2.dateRangeTagCount++, t11.isValid || c2.skippedSegments ? c2.dateRanges[t11.id] = t11 : N.warn(`Ignoring invalid DATERANGE tag: "${s11}"`), L2.tagList.push(["EXT-X-DATERANGE", s11]);
              break;
            }
            case "DEFINE":
              {
                let e13 = new tP(s11, c2);
                "IMPORT" in e13 ? (function(e14, t11, i11) {
                  let r11 = t11.IMPORT;
                  if (i11 && r11 in i11) {
                    let t12 = e14.variableList;
                    t12 || (e14.variableList = t12 = {}), t12[r11] = i11[r11];
                  } else e14.playlistParsingError || (e14.playlistParsingError = Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${r11}"`));
                })(c2, e13, a10) : tk(c2, e13, t10);
              }
              break;
            case "DISCONTINUITY-SEQUENCE":
              0 !== c2.startCC ? ih(c2, e12, l2) : g2.length > 0 && id(c2, e12, l2), c2.startCC = T2 = parseInt(s11);
              break;
            case "KEY": {
              let e13 = it(s11, t10, c2);
              if (e13.isSupported()) {
                if ("NONE" === e13.method) {
                  h2 = void 0;
                  break;
                }
                h2 || (h2 = {});
                let t11 = h2[e13.keyFormat];
                null != t11 && t11.matches(e13) || (t11 && (h2 = w({}, h2)), h2[e13.keyFormat] = e13);
              } else N.warn(`[Keys] Ignoring unsupported EXT-X-KEY tag: "${s11}"`);
              break;
            }
            case "START":
              c2.startTimeOffset = ii(s11);
              break;
            case "MAP": {
              let e13 = new tP(s11, c2);
              if (L2.duration) {
                let t11 = new ee(r10, u2);
                il(t11, e13, i10, h2), p2 = t11, L2.initSegment = p2, p2.rawProgramDateTime && !L2.rawProgramDateTime && (L2.rawProgramDateTime = p2.rawProgramDateTime);
              } else {
                let t11 = L2.byteRangeEndOffset;
                if (t11) {
                  let e14 = L2.byteRangeStartOffset;
                  I2 = `${t11 - e14}@${e14}`;
                } else I2 = null;
                il(L2, e13, i10, h2), p2 = L2, b2 = true;
              }
              p2.cc = T2;
              break;
            }
            case "SERVER-CONTROL":
              d2 && ih(c2, e12, l2), c2.canBlockReload = (d2 = new tP(s11)).bool("CAN-BLOCK-RELOAD"), c2.canSkipUntil = d2.optionalFloat("CAN-SKIP-UNTIL", 0), c2.canSkipDateRanges = c2.canSkipUntil > 0 && d2.bool("CAN-SKIP-DATERANGES"), c2.partHoldBack = d2.optionalFloat("PART-HOLD-BACK", 0), c2.holdBack = d2.optionalFloat("HOLD-BACK", 0);
              break;
            case "PART-INF":
              c2.partTarget && ih(c2, e12, l2), c2.partTarget = new tP(s11).decimalFloatingPoint("PART-TARGET");
              break;
            case "PART": {
              let e13 = c2.partList;
              e13 || (e13 = c2.partList = []);
              let t11 = v2 > 0 ? e13[e13.length - 1] : void 0, i11 = v2++, r11 = new et(new tP(s11, c2), L2, u2, i11, t11);
              e13.push(r11), L2.duration += r11.duration;
              break;
            }
            case "PRELOAD-HINT": {
              let e13 = new tP(s11, c2);
              c2.preloadHint = e13;
              break;
            }
            case "RENDITION-REPORT": {
              let e13 = new tP(s11, c2);
              c2.renditionReports = c2.renditionReports || [], c2.renditionReports.push(e13);
              break;
            }
            default:
              N.warn(`line parsed but not handled: ${l2}`);
          }
        }
      }
      A2 && !A2.relurl ? (g2.pop(), E2 -= A2.duration, c2.partList && (c2.fragmentHint = A2)) : c2.partList && (ia(L2, A2, m2), L2.cc = T2, c2.fragmentHint = L2, h2 && io(L2, h2, c2)), c2.targetduration || (c2.playlistParsingError = Error("Missing Target Duration"));
      let k2 = g2.length, D2 = g2[0], _2 = g2[k2 - 1];
      if ((E2 += c2.skippedSegments * c2.targetduration) > 0 && k2 && _2) {
        c2.averagetargetduration = E2 / k2;
        let e11 = _2.sn;
        c2.endSN = "initSegment" !== e11 ? e11 : 0, c2.live || (_2.endList = true), R2 > 0 && ((function(e12, t11) {
          let i11 = e12[t11];
          for (let r11 = t11; r11--; ) {
            let t12 = e12[r11];
            if (!t12) return;
            t12.programDateTime = i11.programDateTime - 1e3 * t12.duration, i11 = t12;
          }
        })(g2, R2), D2 && m2.unshift(D2));
      }
      return c2.fragmentHint && (E2 += c2.fragmentHint.duration), c2.totalduration = E2, m2.length && c2.dateRangeTagCount && D2 && ie(m2, c2), c2.endCC = T2, c2;
    }
  }
  function ie(e10, t10) {
    let i10 = e10.length;
    if (!i10) if (!t10.hasProgramDateTime) return;
    else {
      let r11 = t10.fragments[t10.fragments.length - 1];
      e10.push(r11), i10++;
    }
    let r10 = e10[i10 - 1], s10 = t10.live ? 1 / 0 : t10.totalduration, a10 = Object.keys(t10.dateRanges);
    for (let l2 = a10.length; l2--; ) {
      let o2 = t10.dateRanges[a10[l2]], h2 = o2.startDate.getTime();
      o2.tagAnchor = r10.ref;
      for (let r11 = i10; r11--; ) {
        var n2;
        if ((null == (n2 = e10[r11]) ? void 0 : n2.sn) < t10.startSN) break;
        let i11 = (function(e11, t11, i12, r12, s11) {
          let a11 = i12[r12];
          if (a11) {
            let l3 = a11.programDateTime;
            if (t11 >= l3 || 0 === r12) {
              var n3;
              if (t11 <= l3 + 1e3 * (((null == (n3 = i12[r12 + 1]) ? void 0 : n3.start) || s11) - a11.start)) {
                let s12 = i12[r12].sn - e11.startSN;
                if (s12 < 0) return -1;
                let a12 = e11.fragments;
                if (a12.length > i12.length) {
                  let n4 = (i12[r12 + 1] || a12[a12.length - 1]).sn - e11.startSN;
                  for (let e12 = n4; e12 > s12; e12--) {
                    let i13 = a12[e12].programDateTime;
                    if (t11 >= i13 && t11 < i13 + 1e3 * a12[e12].duration) return e12;
                  }
                }
                return s12;
              }
            }
          }
          return -1;
        })(t10, h2, e10, r11, s10);
        if (-1 !== i11) {
          o2.tagAnchor = t10.fragments[i11].ref;
          break;
        }
      }
    }
  }
  function it(e10, t10, i10) {
    var r10, s10;
    let a10 = new tP(e10, i10), n2 = null != (r10 = a10.METHOD) ? r10 : "", l2 = a10.URI, o2 = a10.hexadecimalInteger("IV"), h2 = a10.KEYFORMATVERSIONS, d2 = null != (s10 = a10.KEYFORMAT) ? s10 : "identity";
    return l2 && a10.IV && !o2 && N.error(`Invalid IV: ${a10.IV}`), new t2(n2, l2 ? t7.resolve(l2, t10) : "", d2, (h2 || "1").split("/").map(Number).filter(Number.isFinite), o2, a10.KEYID);
  }
  function ii(e10) {
    let t10 = new tP(e10).decimalFloatingPoint("TIME-OFFSET");
    return f(t10) ? t10 : null;
  }
  function ir(e10, t10) {
    let i10 = (e10 || "").split(/[ ,]+/).filter((e11) => e11);
    ["video", "audio", "text"].forEach((e11) => {
      let r10 = i10.filter((t11) => eL(t11, e11));
      r10.length && (t10[`${e11}Codec`] = r10.map((e12) => e12.split("/")[0]).join(","), i10 = i10.filter((e12) => -1 === r10.indexOf(e12)));
    }), t10.unknownCodecs = i10;
  }
  function is(e10, t10, i10) {
    let r10 = t10[i10];
    r10 && (e10[i10] = r10);
  }
  function ia(e10, t10, i10) {
    e10.rawProgramDateTime ? i10.push(e10) : null != t10 && t10.programDateTime && (e10.programDateTime = t10.endProgramDateTime);
  }
  function il(e10, t10, i10, r10) {
    e10.relurl = t10.URI, t10.BYTERANGE && e10.setByteRange(t10.BYTERANGE), e10.level = i10, e10.sn = "initSegment", r10 && (e10.levelkeys = r10), e10.initSegment = null;
  }
  function io(e10, t10, i10) {
    e10.levelkeys = t10;
    let { encryptedFragments: r10 } = i10;
    (!r10.length || r10[r10.length - 1].levelkeys !== t10) && Object.keys(t10).some((e11) => t10[e11].isCommonEncryption) && r10.push(e10);
  }
  function ih(e10, t10, i10) {
    e10.playlistParsingError = Error(`#EXT-X-${t10} must not appear more than once (${i10[0]})`);
  }
  function id(e10, t10, i10) {
    e10.playlistParsingError = Error(`#EXT-X-${t10} must appear before the first Media Segment (${i10[0]})`);
  }
  function iu(e10, t10) {
    let i10 = t10.startPTS;
    if (f(i10)) {
      let r10, s10 = 0;
      t10.sn > e10.sn ? (s10 = i10 - e10.start, r10 = e10) : (s10 = e10.start - i10, r10 = t10), r10.duration !== s10 && r10.setDuration(s10);
    } else t10.sn > e10.sn ? e10.cc === t10.cc && e10.minEndPTS ? t10.setStart(e10.start + (e10.minEndPTS - e10.start)) : t10.setStart(e10.start + e10.duration) : t10.setStart(Math.max(e10.start - t10.duration, 0));
  }
  function ic(e10, t10, i10, r10, s10, a10, n2) {
    let l2;
    r10 - i10 <= 0 && (n2.warn("Fragment should have a positive duration", t10), r10 = i10 + t10.duration, a10 = s10 + t10.duration);
    let o2 = i10, h2 = r10, d2 = t10.startPTS, u2 = t10.endPTS;
    if (f(d2)) {
      let l3 = Math.abs(d2 - i10);
      e10 && l3 > e10.totalduration ? n2.warn(`media timestamps and playlist times differ by ${l3}s for level ${t10.level} ${e10.url}`) : f(t10.deltaPTS) ? t10.deltaPTS = Math.max(l3, t10.deltaPTS) : t10.deltaPTS = l3, o2 = Math.max(i10, d2), i10 = Math.min(i10, d2), s10 = void 0 !== t10.startDTS ? Math.min(s10, t10.startDTS) : s10, h2 = Math.min(r10, u2), r10 = Math.max(r10, u2), a10 = void 0 !== t10.endDTS ? Math.max(a10, t10.endDTS) : a10;
    }
    let c2 = i10 - t10.start;
    0 !== t10.start && t10.setStart(i10), t10.setDuration(r10 - t10.start), t10.startPTS = i10, t10.maxStartPTS = o2, t10.startDTS = s10, t10.endPTS = r10, t10.minEndPTS = h2, t10.endDTS = a10;
    let g2 = t10.sn;
    if (!e10 || g2 < e10.startSN || g2 > e10.endSN) return 0;
    let m2 = g2 - e10.startSN, p2 = e10.fragments;
    for (p2[m2] = t10, l2 = m2; l2 > 0; l2--) iu(p2[l2], p2[l2 - 1]);
    for (l2 = m2; l2 < p2.length - 1; l2++) iu(p2[l2], p2[l2 + 1]);
    return e10.fragmentHint && iu(p2[p2.length - 1], e10.fragmentHint), e10.PTSKnown = e10.alignedSliding = true, c2;
  }
  function ig(e10, t10, i10, r10, s10) {
    return Error(`${e10} ${s10.url}
Playlist starting @${t10.startSN}
${t10.m3u8}

Playlist starting @${i10.startSN}
${i10.m3u8}`);
  }
  function im(e10, t10, i10 = true) {
    let r10 = t10.startSN + t10.skippedSegments - e10.startSN, s10 = e10.fragments, a10 = r10 >= 0, n2 = 0;
    if (a10 && r10 < s10.length) n2 = s10[r10].start;
    else if (a10 && t10.startSN === e10.endSN + 1) n2 = e10.fragmentEnd;
    else if (a10 && i10) n2 = e10.fragmentStart + r10 * t10.levelTargetDuration;
    else {
      if (t10.skippedSegments || 0 !== t10.fragmentStart) return;
      n2 = e10.fragmentStart;
    }
    ip(t10, n2);
  }
  function ip(e10, t10) {
    if (t10) {
      let i10 = e10.fragments;
      for (let r10 = e10.skippedSegments; r10 < i10.length; r10++) i10[r10].addStart(t10);
      e10.fragmentHint && e10.fragmentHint.addStart(t10);
    }
  }
  function iy(e10, t10 = 1 / 0) {
    let i10 = 1e3 * e10.targetduration;
    if (e10.updated) {
      let r10 = e10.fragments;
      if (r10.length && 4 * i10 > t10) {
        let e11 = 1e3 * r10[r10.length - 1].duration;
        e11 < i10 && (i10 = e11);
      }
    } else i10 /= 2;
    return Math.round(i10);
  }
  function iv(e10, t10, i10) {
    if (!e10) return null;
    let r10 = e10.fragments[t10 - e10.startSN];
    return r10 || (r10 = e10.fragmentHint) && r10.sn === t10 ? r10 : t10 < e10.startSN && i10 && i10.sn === t10 ? i10 : null;
  }
  function iE(e10, t10, i10) {
    return e10 ? iT(e10.partList, t10, i10) : null;
  }
  function iT(e10, t10, i10) {
    if (e10) for (let r10 = e10.length; r10--; ) {
      let s10 = e10[r10];
      if (s10.index === i10 && s10.fragment.sn === t10) return s10;
    }
    return null;
  }
  function iS(e10) {
    e10.forEach((e11, t10) => {
      var i10;
      null == (i10 = e11.details) || i10.fragments.forEach((e12) => {
        e12.level = t10, e12.initSegment && (e12.initSegment.level = t10);
      });
    });
  }
  function iA(e10) {
    return e10.replace(/\?[^?]*$/, "");
  }
  function iL(e10, t10) {
    for (let r10 = 0, s10 = e10.length; r10 < s10; r10++) {
      var i10;
      if ((null == (i10 = e10[r10]) ? void 0 : i10.cc) === t10) return e10[r10];
    }
    return null;
  }
  function iR(e10, t10) {
    let i10 = e10.start + t10;
    e10.startPTS = i10, e10.setStart(i10), e10.endPTS = i10 + e10.duration;
  }
  function ib(e10, t10) {
    let i10 = t10.fragments;
    for (let t11 = 0, r10 = i10.length; t11 < r10; t11++) iR(i10[t11], e10);
    t10.fragmentHint && iR(t10.fragmentHint, e10), t10.alignedSliding = true;
  }
  function iI(e10, t10) {
    if ((!t10 || !(e10.startCC < t10.endCC) || !(e10.endCC > t10.startCC)) && 1) return;
    let i10 = Math.min(t10.endCC, e10.endCC), r10 = iL(t10.fragments, i10), s10 = iL(e10.fragments, i10);
    r10 && s10 && (N.log(`Aligning playlist at start of dicontinuity sequence ${i10}`), ib(r10.start - s10.start, e10));
  }
  function ik(e10, t10) {
    let i10, r10;
    if (!e10.hasProgramDateTime || !t10.hasProgramDateTime) return;
    let s10 = e10.fragments, a10 = t10.fragments;
    if (!s10.length || !a10.length) return;
    let n2 = Math.min(t10.endCC, e10.endCC);
    t10.startCC < n2 && e10.startCC < n2 && (i10 = iL(a10, n2), r10 = iL(s10, n2)), i10 && r10 || (r10 = iL(s10, (i10 = a10[Math.floor(a10.length / 2)]).cc) || s10[Math.floor(s10.length / 2)]);
    let l2 = i10.programDateTime, o2 = r10.programDateTime;
    l2 && o2 && ib((o2 - l2) / 1e3 - (r10.start - i10.start), e10);
  }
  function iD(e10, t10, i10) {
    i_(e10, t10, i10), e10.addEventListener(t10, i10);
  }
  function i_(e10, t10, i10) {
    e10.removeEventListener(t10, i10);
  }
  let iP = function(e10) {
    let t10 = "", i10 = e10.length;
    for (let r10 = 0; r10 < i10; r10++) t10 += `[${e10.start(r10).toFixed(3)}-${e10.end(r10).toFixed(3)}]`;
    return t10;
  }, iC = "STOPPED", iw = "IDLE", ix = "KEY_LOADING", iM = "FRAG_LOADING", iO = "FRAG_LOADING_WAITING_RETRY", iF = "WAITING_TRACK", i$ = "PARSING", iU = "PARSED", iB = "ENDED", iN = "ERROR", iG = "WAITING_INIT_PTS", iK = "WAITING_LEVEL";
  class iH extends tT {
    constructor(e10, t10, i10, r10, s10) {
      super(r10, e10.logger), this.hls = void 0, this.fragPrevious = null, this.fragCurrent = null, this.fragmentTracker = void 0, this.transmuxer = null, this._state = iC, this.playlistType = void 0, this.media = null, this.mediaBuffer = null, this.config = void 0, this.bitrateTest = false, this.lastCurrentTime = 0, this.nextLoadPosition = 0, this.startPosition = 0, this.startTimeOffset = null, this.retryDate = 0, this.levels = null, this.fragmentLoader = void 0, this.keyLoader = void 0, this.levelLastLoaded = null, this.startFragRequested = false, this.decrypter = void 0, this.initPTS = [], this.buffering = true, this.loadingParts = false, this.loopSn = void 0, this.onMediaSeeking = () => {
        let { config: e11, fragCurrent: t11, media: i11, mediaBuffer: r11, state: s11 } = this, a10 = i11 ? i11.currentTime : 0, n2 = tR.bufferInfo(r11 || i11, a10, e11.maxBufferHole), l2 = !n2.len;
        if (this.log(`Media seeking to ${f(a10) ? a10.toFixed(3) : a10}, state: ${s11}, ${l2 ? "out of" : "in"} buffer`), this.state === iB) this.resetLoadingState();
        else if (t11) {
          let i12 = e11.maxFragLookUpTolerance, r12 = t11.start - i12, s12 = t11.start + t11.duration + i12;
          if (l2 || s12 < n2.start || r12 > n2.end) {
            let e12 = a10 > s12;
            (a10 < r12 || e12) && (e12 && t11.loader && (this.log(`Cancelling fragment load for seek (sn: ${t11.sn})`), t11.abortRequests(), this.resetLoadingState()), this.fragPrevious = null);
          }
        }
        if (i11 && (this.fragmentTracker.removeFragmentsInRange(a10, 1 / 0, this.playlistType, true), a10 > this.lastCurrentTime && (this.lastCurrentTime = a10), !this.loadingParts)) {
          let e12 = Math.max(n2.end, a10), t12 = this.shouldLoadParts(this.getLevelDetails(), e12);
          t12 && (this.log(`LL-Part loading ON after seeking to ${a10.toFixed(2)} with buffer @${e12.toFixed(2)}`), this.loadingParts = t12);
        }
        !this.hls.hasEnoughToStart && (this.log(`Setting ${l2 ? "startPosition" : "nextLoadPosition"} to ${a10} for seek without enough to start`), this.nextLoadPosition = a10, l2 && (this.startPosition = a10)), l2 && this.state === iw && this.tickImmediate();
      }, this.onMediaEnded = () => {
        this.log("setting startPosition to 0 because media ended"), this.startPosition = this.lastCurrentTime = 0;
      }, this.playlistType = s10, this.hls = e10, this.fragmentLoader = new tp(e10.config), this.keyLoader = i10, this.fragmentTracker = t10, this.config = e10.config, this.decrypter = new tm(e10.config);
    }
    registerListeners() {
      let { hls: e10 } = this;
      e10.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e10.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e10.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.on(y.MANIFEST_LOADED, this.onManifestLoaded, this), e10.on(y.ERROR, this.onError, this);
    }
    unregisterListeners() {
      let { hls: e10 } = this;
      e10.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e10.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e10.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), e10.off(y.ERROR, this.onError, this);
    }
    doTick() {
      this.onTickEnd();
    }
    onTickEnd() {
    }
    startLoad(e10) {
    }
    stopLoad() {
      if (this.state === iC) return;
      this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
      let e10 = this.fragCurrent;
      null != e10 && e10.loader && (e10.abortRequests(), this.fragmentTracker.removeFragment(e10)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = iC;
    }
    get startPositionValue() {
      let { nextLoadPosition: e10, startPosition: t10 } = this;
      return -1 === t10 && e10 ? e10 : t10;
    }
    get bufferingEnabled() {
      return this.buffering;
    }
    pauseBuffering() {
      this.buffering = false;
    }
    resumeBuffering() {
      this.buffering = true;
    }
    get inFlightFrag() {
      return { frag: this.fragCurrent, state: this.state };
    }
    _streamEnded(e10, t10) {
      if (t10.live || !this.media) return false;
      let i10 = e10.end || 0, r10 = this.config.timelineOffset || 0;
      if (i10 <= r10) return false;
      let s10 = e10.buffered;
      this.config.maxBufferHole && s10 && s10.length > 1 && (e10 = tR.bufferedInfo(s10, e10.start, 0));
      let a10 = e10.nextStart;
      if (a10 && a10 > r10 && a10 < t10.edge || this.media.currentTime < e10.start) return false;
      let n2 = t10.partList;
      if (null != n2 && n2.length) {
        let e11 = n2[n2.length - 1];
        return tR.isBuffered(this.media, e11.start + e11.duration / 2);
      }
      let l2 = t10.fragments[t10.fragments.length - 1].type;
      return this.fragmentTracker.isEndListAppended(l2);
    }
    getLevelDetails() {
      if (this.levels && null !== this.levelLastLoaded) return this.levelLastLoaded.details;
    }
    get timelineOffset() {
      let e10 = this.config.timelineOffset;
      if (e10) {
        var t10;
        return (null == (t10 = this.getLevelDetails()) ? void 0 : t10.appliedTimelineOffset) || e10;
      }
      return 0;
    }
    onMediaAttached(e10, t10) {
      let i10 = this.media = this.mediaBuffer = t10.media;
      iD(i10, "seeking", this.onMediaSeeking), iD(i10, "ended", this.onMediaEnded);
      let r10 = this.config;
      this.levels && r10.autoStartLoad && this.state === iC && this.startLoad(r10.startPosition);
    }
    onMediaDetaching(e10, t10) {
      let i10 = !!t10.transferMedia, r10 = this.media;
      if (null !== r10) {
        if (r10.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), i_(r10, "seeking", this.onMediaSeeking), i_(r10, "ended", this.onMediaEnded), this.keyLoader && !i10 && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loopSn = void 0, i10) {
          this.resetLoadingState(), this.resetTransmuxer();
          return;
        }
        this.loadingParts = false, this.fragmentTracker.removeAllFragments(), this.stopLoad();
      }
    }
    onManifestLoading() {
      this.initPTS = [], this.levels = this.levelLastLoaded = this.fragCurrent = null, this.lastCurrentTime = this.startPosition = 0, this.startFragRequested = false;
    }
    onError(e10, t10) {
    }
    onManifestLoaded(e10, t10) {
      this.startTimeOffset = t10.startTimeOffset;
    }
    onHandlerDestroying() {
      this.stopLoad(), this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null), super.onHandlerDestroying(), this.hls = this.onMediaSeeking = this.onMediaEnded = null;
    }
    onHandlerDestroyed() {
      this.state = iC, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, super.onHandlerDestroyed();
    }
    loadFragment(e10, t10, i10) {
      this.startFragRequested = true, this._loadFragForPlayback(e10, t10, i10);
    }
    _loadFragForPlayback(e10, t10, i10) {
      let r10 = (e11) => {
        let t11 = e11.frag;
        if (this.fragContextChanged(t11)) {
          this.warn(`${t11.type} sn: ${t11.sn}${e11.part ? " part: " + e11.part.index : ""} of ${this.fragInfo(t11, false, e11.part)}) was dropped during download.`), this.fragmentTracker.removeFragment(t11);
          return;
        }
        t11.stats.chunkCount++, this._handleFragmentLoadProgress(e11);
      };
      this._doFragLoad(e10, t10, i10, r10).then((e11) => {
        if (!e11) return;
        let t11 = this.state, i11 = e11.frag;
        if (this.fragContextChanged(i11)) {
          t11 !== iM && (this.fragCurrent || t11 !== i$) || (this.fragmentTracker.removeFragment(i11), this.state = iw);
          return;
        }
        "payload" in e11 && (this.log(`Loaded ${i11.type} sn: ${i11.sn} of ${this.playlistLabel()} ${i11.level}`), this.hls.trigger(y.FRAG_LOADED, e11)), this._handleFragmentLoadComplete(e11);
      }).catch((t11) => {
        this.state !== iC && this.state !== iN && (this.warn(`Frag error: ${(null == t11 ? void 0 : t11.message) || t11}`), this.resetFragmentLoading(e10));
      });
    }
    clearTrackerIfNeeded(e10) {
      var t10;
      let { fragmentTracker: i10 } = this;
      if (i10.getState(e10) === tn) {
        let t11 = e10.type, r10 = this.getFwdBufferInfo(this.mediaBuffer, t11), s10 = Math.max(e10.duration, r10 ? r10.len : this.config.maxBufferLength), a10 = this.backtrackFragment;
        (1 == (a10 ? e10.sn - a10.sn : 0) || this.reduceMaxBufferLength(s10, e10.duration)) && i10.removeFragment(e10);
      } else (null == (t10 = this.mediaBuffer) ? void 0 : t10.buffered.length) === 0 ? i10.removeAllFragments() : i10.hasParts(e10.type) && (i10.detectPartialFragments({ frag: e10, part: null, stats: e10.stats, id: e10.type }), i10.getState(e10) === tl && i10.removeFragment(e10));
    }
    checkLiveUpdate(e10) {
      if (e10.updated && !e10.live) {
        let t10 = e10.fragments[e10.fragments.length - 1];
        this.fragmentTracker.detectPartialFragments({ frag: t10, part: null, stats: t10.stats, id: t10.type });
      }
      e10.fragments[0] || (e10.deltaUpdateFailed = true);
    }
    waitForLive(e10) {
      let t10 = e10.details;
      return (null == t10 ? void 0 : t10.live) && "EVENT" !== t10.type && (this.levelLastLoaded !== e10 || t10.expired);
    }
    flushMainBuffer(e10, t10, i10 = null) {
      e10 - t10 && this.hls.trigger(y.BUFFER_FLUSHING, { startOffset: e10, endOffset: t10, type: i10 });
    }
    _loadInitSegment(e10, t10) {
      this._doFragLoad(e10, t10).then((e11) => {
        let t11 = null == e11 ? void 0 : e11.frag;
        if (!t11 || this.fragContextChanged(t11) || !this.levels) throw Error("init load aborted");
        return e11;
      }).then((e11) => {
        let { hls: t11 } = this, { frag: i10, payload: r10 } = e11, s10 = i10.decryptdata;
        if (r10 && r10.byteLength > 0 && null != s10 && s10.key && s10.iv && tO(s10.method)) {
          let a10 = self.performance.now();
          return this.decrypter.decrypt(new Uint8Array(r10), s10.key.buffer, s10.iv.buffer, tF(s10.method)).catch((e12) => {
            throw t11.trigger(y.ERROR, { type: m.MEDIA_ERROR, details: p.FRAG_DECRYPT_ERROR, fatal: false, error: e12, reason: e12.message, frag: i10 }), e12;
          }).then((r11) => {
            let s11 = self.performance.now();
            return t11.trigger(y.FRAG_DECRYPTED, { frag: i10, payload: r11, stats: { tstart: a10, tdecrypt: s11 } }), e11.payload = r11, this.completeInitSegmentLoad(e11);
          });
        }
        return this.completeInitSegmentLoad(e11);
      }).catch((t11) => {
        this.state !== iC && this.state !== iN && (this.warn(t11), this.resetFragmentLoading(e10));
      });
    }
    completeInitSegmentLoad(e10) {
      let { levels: t10 } = this;
      if (!t10) throw Error("init load aborted, missing levels");
      let i10 = e10.frag.stats;
      this.state !== iC && (this.state = iw), e10.frag.data = new Uint8Array(e10.payload), i10.parsing.start = i10.buffering.start = self.performance.now(), i10.parsing.end = i10.buffering.end = self.performance.now(), this.tick();
    }
    unhandledEncryptionError(e10, t10) {
      var i10, r10;
      let s10 = e10.tracks;
      if (s10 && !t10.encrypted && (null != (i10 = s10.audio) && i10.encrypted || null != (r10 = s10.video) && r10.encrypted) && (!this.config.emeEnabled || !this.keyLoader.emeController)) {
        let e11 = this.media, i11 = Error(`Encrypted track with no key in ${this.fragInfo(t10)} (media ${e11 ? "attached mediaKeys: " + e11.mediaKeys : "detached"})`);
        return this.warn(i11.message), !!e11 && !e11.mediaKeys && (this.hls.trigger(y.ERROR, { type: m.KEY_SYSTEM_ERROR, details: p.KEY_SYSTEM_NO_KEYS, fatal: false, error: i11, frag: t10 }), this.resetTransmuxer(), true);
      }
      return false;
    }
    fragContextChanged(e10) {
      let { fragCurrent: t10 } = this;
      return !e10 || !t10 || e10.sn !== t10.sn || e10.level !== t10.level;
    }
    fragBufferedComplete(e10, t10) {
      let i10 = this.mediaBuffer ? this.mediaBuffer : this.media;
      if (this.log(`Buffered ${e10.type} sn: ${e10.sn}${t10 ? " part: " + t10.index : ""} of ${this.fragInfo(e10, false, t10)} > buffer:${i10 ? iP(tR.getBuffered(i10)) : "(detached)"})`), J(e10)) {
        var r10;
        if (e10.type !== _) {
          let t12 = e10.elementaryStreams;
          if (!Object.keys(t12).some((e11) => !!t12[e11])) {
            this.state = iw;
            return;
          }
        }
        let t11 = null == (r10 = this.levels) ? void 0 : r10[e10.level];
        null != t11 && t11.fragmentError && (this.log(`Resetting level fragment error count of ${t11.fragmentError} on frag buffered`), t11.fragmentError = 0);
      }
      this.state = iw;
    }
    _handleFragmentLoadComplete(e10) {
      let { transmuxer: t10 } = this;
      if (!t10) return;
      let { frag: i10, part: r10, partsLoaded: s10 } = e10, a10 = !s10 || 0 === s10.length || s10.some((e11) => !e11), n2 = new tS(i10.level, i10.sn, i10.stats.chunkCount + 1, 0, r10 ? r10.index : -1, !a10);
      t10.flush(n2);
    }
    _handleFragmentLoadProgress(e10) {
    }
    _doFragLoad(e10, t10, i10 = null, r10) {
      var s10, a10;
      let n2;
      this.fragCurrent = e10;
      let l2 = t10.details;
      if (!this.levels || !l2) throw Error(`frag load aborted, missing level${l2 ? "" : " detail"}s`);
      let o2 = null;
      if (e10.encrypted && !(null != (s10 = e10.decryptdata) && s10.key)) {
        if (this.log(`Loading key for ${e10.sn} of [${l2.startSN}-${l2.endSN}], ${this.playlistLabel()} ${e10.level}`), this.state = ix, this.fragCurrent = e10, o2 = this.keyLoader.load(e10).then((e11) => {
          if (!this.fragContextChanged(e11.frag)) return this.hls.trigger(y.KEY_LOADED, e11), this.state === ix && (this.state = iw), e11;
        }), this.hls.trigger(y.KEY_LOADING, { frag: e10 }), null === this.fragCurrent) return this.log("context changed in KEY_LOADING"), Promise.resolve(null);
      } else !e10.encrypted && (o2 = this.keyLoader.loadClear(e10, l2.encryptedFragments, this.startFragRequested)) && this.log("[eme] blocking frag load until media-keys acquired");
      let h2 = this.fragPrevious;
      if (J(e10) && (!h2 || e10.sn !== h2.sn)) {
        let i11 = this.shouldLoadParts(t10.details, e10.end);
        i11 !== this.loadingParts && (this.log(`LL-Part loading ${i11 ? "ON" : "OFF"} loading sn ${null == h2 ? void 0 : h2.sn}->${e10.sn}`), this.loadingParts = i11);
      }
      if (i10 = Math.max(e10.start, i10 || 0), this.loadingParts && J(e10)) {
        let s11 = l2.partList;
        if (s11 && r10) {
          i10 > l2.fragmentEnd && l2.fragmentHint && (e10 = l2.fragmentHint);
          let a11 = this.getNextPart(s11, e10, i10);
          if (a11 > -1) {
            let n3, h3 = s11[a11];
            return (e10 = this.fragCurrent = h3.fragment, this.log(`Loading ${e10.type} sn: ${e10.sn} part: ${h3.index} (${a11}/${s11.length - 1}) of ${this.fragInfo(e10, false, h3)}) cc: ${e10.cc} [${l2.startSN}-${l2.endSN}], target: ${parseFloat(i10.toFixed(3))}`), this.nextLoadPosition = h3.start + h3.duration, this.state = iM, n3 = o2 ? o2.then((i11) => !i11 || this.fragContextChanged(i11.frag) ? null : this.doFragPartsLoad(e10, h3, t10, r10)).catch((e11) => this.handleFragLoadError(e11)) : this.doFragPartsLoad(e10, h3, t10, r10).catch((e11) => this.handleFragLoadError(e11)), this.hls.trigger(y.FRAG_LOADING, { frag: e10, part: h3, targetBufferTime: i10 }), null === this.fragCurrent) ? Promise.reject(Error("frag load aborted, context changed in FRAG_LOADING parts")) : n3;
          }
          if (!e10.url || this.loadedEndOfParts(s11, i10)) return Promise.resolve(null);
        }
      }
      if (J(e10) && this.loadingParts) this.log(`LL-Part loading OFF after next part miss @${i10.toFixed(2)} Check buffer at sn: ${e10.sn} loaded parts: ${null == (a10 = l2.partList) ? void 0 : a10.filter((e11) => e11.loaded).map((e11) => `[${e11.start}-${e11.end}]`)}`), this.loadingParts = false;
      else if (!e10.url) return Promise.resolve(null);
      this.log(`Loading ${e10.type} sn: ${e10.sn} of ${this.fragInfo(e10, false)}) cc: ${e10.cc} ${"[" + l2.startSN + "-" + l2.endSN + "]"}, target: ${parseFloat(i10.toFixed(3))}`), f(e10.sn) && !this.bitrateTest && (this.nextLoadPosition = e10.start + e10.duration), this.state = iM;
      let d2 = this.config.progressive && e10.type !== _;
      return (n2 = d2 && o2 ? o2.then((t11) => !t11 || this.fragContextChanged(t11.frag) ? null : this.fragmentLoader.load(e10, r10)).catch((e11) => this.handleFragLoadError(e11)) : Promise.all([this.fragmentLoader.load(e10, d2 ? r10 : void 0), o2]).then(([e11]) => (!d2 && r10 && r10(e11), e11)).catch((e11) => this.handleFragLoadError(e11)), this.hls.trigger(y.FRAG_LOADING, { frag: e10, targetBufferTime: i10 }), null === this.fragCurrent) ? Promise.reject(Error("frag load aborted, context changed in FRAG_LOADING")) : n2;
    }
    doFragPartsLoad(e10, t10, i10, r10) {
      return new Promise((s10, a10) => {
        var n2;
        let l2 = [], o2 = null == (n2 = i10.details) ? void 0 : n2.partList, h2 = (t11) => {
          this.fragmentLoader.loadPart(e10, t11, r10).then((r11) => {
            l2[t11.index] = r11;
            let a11 = r11.part;
            this.hls.trigger(y.FRAG_LOADED, r11);
            let n3 = iE(i10.details, e10.sn, t11.index + 1) || iT(o2, e10.sn, t11.index + 1);
            if (!n3) return s10({ frag: e10, part: a11, partsLoaded: l2 });
            h2(n3);
          }).catch(a10);
        };
        h2(t10);
      });
    }
    handleFragLoadError(e10) {
      if ("data" in e10) {
        let t10 = e10.data;
        t10.frag && t10.details === p.INTERNAL_ABORTED ? this.handleFragLoadAborted(t10.frag, t10.part) : t10.frag && t10.type === m.KEY_SYSTEM_ERROR ? (t10.frag.abortRequests(), this.resetStartWhenNotLoaded(), this.resetFragmentLoading(t10.frag)) : this.hls.trigger(y.ERROR, t10);
      } else this.hls.trigger(y.ERROR, { type: m.OTHER_ERROR, details: p.INTERNAL_EXCEPTION, err: e10, error: e10, fatal: true });
      return null;
    }
    _handleTransmuxerFlush(e10) {
      let t10 = this.getCurrentContext(e10);
      if (!t10 || this.state !== i$) {
        this.fragCurrent || this.state === iC || this.state === iN || (this.state = iw);
        return;
      }
      let { frag: i10, part: r10, level: s10 } = t10, a10 = self.performance.now();
      i10.stats.parsing.end = a10, r10 && (r10.stats.parsing.end = a10);
      let n2 = this.getLevelDetails(), l2 = n2 && i10.sn > n2.endSN || this.shouldLoadParts(n2, i10.end);
      l2 !== this.loadingParts && (this.log(`LL-Part loading ${l2 ? "ON" : "OFF"} after parsing segment ending @${i10.end.toFixed(2)}`), this.loadingParts = l2), this.updateLevelTiming(i10, r10, s10, e10.partial);
    }
    shouldLoadParts(e10, t10) {
      if (this.config.lowLatencyMode) {
        if (!e10) return this.loadingParts;
        if (e10.partList) {
          var i10, r10;
          let s10 = e10.partList[0];
          if (s10.fragment.type === _) return false;
          if (t10 >= s10.end + ((null == (i10 = e10.fragmentHint) ? void 0 : i10.duration) || 0) && (this.hls.hasEnoughToStart ? (null == (r10 = this.media) ? void 0 : r10.currentTime) || this.lastCurrentTime : this.getLoadPosition()) > s10.start - s10.fragment.duration) return true;
        }
      }
      return false;
    }
    getCurrentContext(e10) {
      let { levels: t10, fragCurrent: i10 } = this, { level: r10, sn: s10, part: a10 } = e10;
      if (!(null != t10 && t10[r10])) return this.warn(`Levels object was unset while buffering fragment ${s10} of ${this.playlistLabel()} ${r10}. The current chunk will not be buffered.`), null;
      let n2 = t10[r10], l2 = n2.details, o2 = a10 > -1 ? iE(l2, s10, a10) : null, h2 = o2 ? o2.fragment : iv(l2, s10, i10);
      return h2 ? (i10 && i10 !== h2 && (h2.stats = i10.stats), { frag: h2, part: o2, level: n2 }) : null;
    }
    bufferFragmentData(e10, t10, i10, r10, s10) {
      if (this.state !== i$) return;
      let { data1: a10, data2: n2 } = e10, l2 = a10;
      if (n2 && (l2 = ey(a10, n2)), !l2.length) return;
      let o2 = this.initPTS[t10.cc], h2 = o2 ? -o2.baseTime / o2.timescale : void 0, d2 = { type: e10.type, frag: t10, part: i10, chunkMeta: r10, offset: h2, parent: t10.type, data: l2 };
      if (this.hls.trigger(y.BUFFER_APPENDING, d2), e10.dropped && e10.independent && !i10) {
        if (s10) return;
        this.flushBufferGap(t10);
      }
    }
    flushBufferGap(e10) {
      let t10 = this.media;
      if (!t10) return;
      if (!tR.isBuffered(t10, t10.currentTime)) return void this.flushMainBuffer(0, e10.start);
      let i10 = t10.currentTime, r10 = tR.bufferInfo(t10, i10, 0), s10 = e10.duration, a10 = Math.min(2 * this.config.maxFragLookUpTolerance, 0.25 * s10), n2 = Math.max(Math.min(e10.start - a10, r10.end - a10), i10 + a10);
      e10.start - n2 > a10 && this.flushMainBuffer(n2, e10.start);
    }
    getFwdBufferInfo(e10, t10) {
      var i10;
      let r10 = this.getLoadPosition();
      if (!f(r10)) return null;
      let s10 = this.lastCurrentTime > r10 || null != (i10 = this.media) && i10.paused ? 0 : this.config.maxBufferHole;
      return this.getFwdBufferInfoAtPos(e10, r10, t10, s10);
    }
    getFwdBufferInfoAtPos(e10, t10, i10, r10) {
      let s10 = tR.bufferInfo(e10, t10, r10);
      if (0 === s10.len && void 0 !== s10.nextStart) {
        let a10 = this.fragmentTracker.getBufferedFrag(t10, i10);
        if (a10 && (s10.nextStart <= a10.end || a10.gap)) {
          let i11 = Math.max(Math.min(s10.nextStart, a10.end) - t10, r10);
          return tR.bufferInfo(e10, t10, i11);
        }
      }
      return s10;
    }
    getMaxBufferLength(e10) {
      let { config: t10 } = this;
      return Math.min(e10 ? Math.max(8 * t10.maxBufferSize / e10, t10.maxBufferLength) : t10.maxBufferLength, t10.maxMaxBufferLength);
    }
    exceedsMaxBuffer(e10, t10, i10) {
      let r10 = e10.nextStart;
      if (r10 && i10.start > r10) {
        let r11 = e10.buffered;
        if (r11) {
          let s10 = e10.len, a10 = e10.bufferedIndex;
          for (let e11 = r11.length - 1; e11 > a10; e11--) r11[e11].start < i10.start && (s10 += r11[e11].end - r11[e11].start);
          return s10 >= t10;
        }
      }
      return false;
    }
    reduceMaxBufferLength(e10, t10) {
      let i10 = this.config, r10 = Math.max(Math.min(e10 - t10, i10.maxBufferLength), t10), s10 = Math.max(e10 - 3 * t10, i10.maxMaxBufferLength / 2, r10);
      return s10 >= r10 && (i10.maxMaxBufferLength = s10, this.warn(`Reduce max buffer length to ${s10}s`), true);
    }
    getAppendedFrag(e10, t10 = k) {
      let i10 = this.fragmentTracker ? this.fragmentTracker.getAppendedFrag(e10, t10) : null;
      return i10 && "fragment" in i10 ? i10.fragment : i10;
    }
    getNextFragment(e10, t10) {
      let i10 = t10.fragments, r10 = i10.length;
      if (!r10) return null;
      let { config: s10 } = this, a10 = t10.fragmentStart, n2 = s10.lowLatencyMode && !!t10.partList, l2 = null;
      if (t10.live) {
        let i11 = s10.initialLiveManifestSize;
        if (r10 < i11) return this.warn(`Not enough fragments to start playback (have: ${r10}, need: ${i11})`), null;
        if (!t10.PTSKnown && !this.startFragRequested && -1 === this.startPosition || e10 < a10) {
          var o2;
          let i12, r11;
          n2 && !this.loadingParts && (this.log("LL-Part loading ON for initial live fragment"), this.loadingParts = true), l2 = this.getInitialLiveFragment(t10);
          let s11 = this.config.startPosition, h3 = this.hls.startPosition, d2 = this.hls.liveSyncPosition, u2 = (null == (o2 = l2) ? void 0 : o2.start) || 0;
          -1 !== h3 && h3 >= a10 ? (i12 = h3, r11 = h3 === s11 ? "config" : "next load start") : null !== d2 ? (i12 = d2, r11 = "live edge") : (i12 = e10, r11 = "buffer pos"), i12 < u2 && (i12 = u2, r11 = "live frag start"), i12 < a10 && (i12 = a10, r11 = "playlist start"), (this.startPosition != i12 || this.nextLoadPosition != i12) && (this.log(`Setting startPosition to ${i12.toFixed(3)} ${-1 === h3 ? "" : `(from ${s11}) `}based on ${r11}. live edge: ${d2} live frag start: ${u2.toFixed(3)} playlist start: ${a10.toFixed(3)} buffer pos: ${e10}`), this.startPosition = this.nextLoadPosition = i12);
        }
      } else e10 <= a10 && (l2 = i10[0]);
      if (!l2) {
        let i11 = this.loadingParts ? t10.partEnd : t10.fragmentEnd;
        l2 = this.getFragmentAtPosition(e10, i11, t10);
      }
      let h2 = this.filterReplacedPrimary(l2, t10);
      if (!h2 && l2) {
        let e11 = l2.sn - t10.startSN;
        h2 = this.filterReplacedPrimary(i10[e11 + 1] || null, t10);
      }
      return this.mapToInitFragWhenRequired(h2);
    }
    isLoopLoading(e10, t10) {
      if (this.nextLoadPosition <= t10) return false;
      let i10 = this.fragmentTracker.getState(e10);
      return "OK" === i10 || i10 === tl && !!e10.gap;
    }
    getNextFragmentLoopLoading(e10, t10, i10, r10, s10) {
      let a10 = null;
      if (e10.gap && (a10 = this.getNextFragment(this.nextLoadPosition, t10)) && !a10.gap && i10.nextStart) {
        let e11 = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, i10.nextStart, r10, 0);
        if (null !== e11 && i10.len + e11.len >= s10) {
          let e12 = a10.sn;
          return this.loopSn !== e12 && (this.log(`buffer full after gaps in "${r10}" playlist starting at sn: ${e12}`), this.loopSn = e12), null;
        }
      }
      return this.loopSn = void 0, a10;
    }
    get primaryPrefetch() {
      if (iV(this.config)) {
        var e10;
        if (null == (e10 = this.hls.interstitialsManager) || null == (e10 = e10.playingItem) ? void 0 : e10.event) return true;
      }
      return false;
    }
    filterReplacedPrimary(e10, t10) {
      if (!e10) return e10;
      if (iV(this.config) && e10.type !== _) {
        let i10 = this.hls.interstitialsManager, r10 = null == i10 ? void 0 : i10.bufferingItem;
        if (r10) {
          let i11 = r10.event;
          if (i11) {
            if (i11.appendInPlace || Math.abs(e10.start - r10.start) > 1 || 0 === r10.start) return null;
          } else if (e10.end <= r10.start && (null == t10 ? void 0 : t10.live) === false || e10.start > r10.end && r10.nextEvent && (r10.nextEvent.appendInPlace || e10.start - r10.end > 1)) return null;
        }
        let s10 = null == i10 ? void 0 : i10.playerQueue;
        if (s10) for (let t11 = s10.length; t11--; ) {
          let i11 = s10[t11].interstitial;
          if (i11.appendInPlace && e10.start >= i11.startTime && e10.end <= i11.resumeTime) return null;
        }
      }
      return e10;
    }
    mapToInitFragWhenRequired(e10) {
      return null == e10 || !e10.initSegment || e10.initSegment.data || this.bitrateTest ? e10 : e10.initSegment;
    }
    getNextPart(e10, t10, i10) {
      let r10 = -1, s10 = false, a10 = true;
      for (let n2 = 0, l2 = e10.length; n2 < l2; n2++) {
        let l3 = e10[n2];
        if (a10 = a10 && !l3.independent, r10 > -1 && i10 < l3.start) break;
        let o2 = l3.loaded;
        o2 ? r10 = -1 : (s10 || (l3.independent || a10) && l3.fragment === t10) && (l3.fragment !== t10 && this.warn(`Need buffer at ${i10} but next unloaded part starts at ${l3.start}`), r10 = n2), s10 = o2;
      }
      return r10;
    }
    loadedEndOfParts(e10, t10) {
      let i10;
      for (let r10 = e10.length; r10-- && (i10 = e10[r10]).loaded; ) if (t10 > i10.start) return true;
      return false;
    }
    getInitialLiveFragment(e10) {
      let t10 = e10.fragments, i10 = this.fragPrevious, r10 = null;
      if (i10) {
        if (e10.hasProgramDateTime && (r10 = (function(e11, t11, i11) {
          if (null === t11 || !Array.isArray(e11) || !e11.length || !f(t11) || t11 < (e11[0].programDateTime || 0) || t11 >= (e11[e11.length - 1].endProgramDateTime || 0)) return null;
          for (let r11 = 0; r11 < e11.length; ++r11) {
            let s10 = e11[r11];
            if ((function(e12, t12, i12) {
              let r12 = 1e3 * Math.min(t12, i12.duration + (i12.deltaPTS ? i12.deltaPTS : 0));
              return (i12.endProgramDateTime || 0) - r12 > e12;
            })(t11, i11, s10)) return s10;
          }
          return null;
        })(t10, i10.endProgramDateTime, this.config.maxFragLookUpTolerance)) && this.log(`Live playlist, switching playlist, load frag with same PDT: ${i10.programDateTime}`), !r10) {
          let s10 = i10.sn + 1;
          if (s10 >= e10.startSN && s10 <= e10.endSN) {
            let a10 = t10[s10 - e10.startSN];
            i10.cc === a10.cc && (r10 = a10, this.log(`Live playlist, switching playlist, load frag with next SN: ${r10.sn}`));
          }
          !r10 && (r10 = e5(e10, i10.cc, i10.end)) && this.log(`Live playlist, switching playlist, load frag with same CC: ${r10.sn}`);
        }
      } else {
        let t11 = this.hls.liveSyncPosition;
        null !== t11 && (r10 = this.getFragmentAtPosition(t11, this.bitrateTest ? e10.fragmentEnd : e10.edge, e10));
      }
      return r10;
    }
    getFragmentAtPosition(e10, t10, i10) {
      let r10, { config: s10 } = this, { fragPrevious: a10 } = this, { fragments: n2, endSN: l2 } = i10, { fragmentHint: o2 } = i10, { maxFragLookUpTolerance: h2 } = s10, d2 = i10.partList, u2 = !!(this.loadingParts && null != d2 && d2.length && o2);
      if (u2 && !this.bitrateTest && d2[d2.length - 1].fragment.sn === o2.sn && (n2 = n2.concat(o2), l2 = o2.sn), e10 < t10) {
        var f2;
        let i11 = e10 < this.lastCurrentTime || e10 > t10 - h2 || null != (f2 = this.media) && f2.paused || !this.startFragRequested ? 0 : h2;
        r10 = e3(a10, n2, e10, i11);
      } else r10 = n2[n2.length - 1];
      if (r10) {
        let e11 = r10.sn - i10.startSN, t11 = this.fragmentTracker.getState(r10);
        if (("OK" === t11 || t11 === tl && r10.gap) && (a10 = r10), a10 && r10.sn === a10.sn && (!u2 || d2[0].fragment.sn > r10.sn || !i10.live) && r10.level === a10.level) {
          let t12 = n2[e11 + 1];
          r10 = r10.sn < l2 && "OK" !== this.fragmentTracker.getState(t12) ? t12 : null;
        }
      }
      return r10;
    }
    alignPlaylists(e10, t10, i10) {
      let r10 = e10.fragments.length;
      if (!r10) return this.warn("No fragments in live playlist"), 0;
      let s10 = e10.fragmentStart, a10 = !t10, n2 = e10.alignedSliding && f(s10);
      if (a10 || !n2 && !s10) {
        i10 && (iI(e10, i10), e10.alignedSliding || ik(e10, i10), e10.alignedSliding || e10.skippedSegments || im(i10, e10, false));
        let s11 = e10.fragmentStart;
        return this.log(`Live playlist sliding: ${s11.toFixed(2)} start-sn: ${t10 ? t10.startSN : "na"}->${e10.startSN} fragments: ${r10}`), s11;
      }
      return s10;
    }
    waitForCdnTuneIn(e10) {
      return e10.live && e10.canBlockReload && e10.partTarget && e10.tuneInGoal > Math.max(e10.partHoldBack, 3 * e10.partTarget);
    }
    setStartPosition(e10, t10) {
      let i10 = this.startPosition;
      i10 < t10 && (i10 = -1);
      let r10 = this.timelineOffset;
      if (-1 === i10) {
        let s10 = null !== this.startTimeOffset, a10 = s10 ? this.startTimeOffset : e10.startTimeOffset;
        null !== a10 && f(a10) ? (i10 = t10 + a10, a10 < 0 && (i10 += e10.edge), i10 = Math.min(Math.max(t10, i10), t10 + e10.totalduration), this.log(`Setting startPosition to ${i10} for start time offset ${a10} found in ${s10 ? "multivariant" : "media"} playlist`), this.startPosition = i10) : e10.live ? (i10 = this.hls.liveSyncPosition || t10, this.log(`Setting startPosition to -1 to start at live edge ${i10}`), this.startPosition = -1) : (this.log("setting startPosition to 0 by default"), this.startPosition = i10 = 0), this.lastCurrentTime = i10 + r10;
      }
      this.nextLoadPosition = i10 + r10;
    }
    getLoadPosition() {
      var e10;
      let { media: t10 } = this, i10 = 0;
      return null != (e10 = this.hls) && e10.hasEnoughToStart && t10 ? i10 = t10.currentTime : this.nextLoadPosition >= 0 && (i10 = this.nextLoadPosition), i10;
    }
    handleFragLoadAborted(e10, t10) {
      this.transmuxer && e10.type === this.playlistType && J(e10) && e10.stats.aborted && (this.log(`Fragment ${e10.sn}${t10 ? " part " + t10.index : ""} of ${this.playlistLabel()} ${e10.level} was aborted`), this.resetFragmentLoading(e10));
    }
    resetFragmentLoading(e10) {
      this.fragCurrent && (this.fragContextChanged(e10) || this.state === iO) || (this.state = iw);
    }
    onFragmentOrKeyLoadError(e10, t10) {
      var i10, r10, s10;
      if (t10.chunkMeta && !t10.frag) {
        let e11 = this.getCurrentContext(t10.chunkMeta);
        e11 && (t10.frag = e11.frag);
      }
      let a10 = t10.frag;
      if (!a10 || a10.type !== e10 || !this.levels) return;
      if (this.fragContextChanged(a10)) return void this.warn(`Frag load error must match current frag to retry ${a10.url} > ${null == (r10 = this.fragCurrent) ? void 0 : r10.url}`);
      let n2 = t10.details === p.FRAG_GAP;
      n2 && this.fragmentTracker.fragBuffered(a10, true);
      let l2 = t10.errorAction;
      if (!l2) {
        this.state = iN;
        return;
      }
      let { action: o2, flags: h2, retryCount: d2 = 0, retryConfig: u2 } = l2, f2 = !!u2, c2 = f2 && 5 === o2, g2 = f2 && !l2.resolved && 1 === h2, m2 = null == (i10 = this.hls.latestLevelDetails) ? void 0 : i10.live;
      if (!c2 && g2 && J(a10) && !a10.endList && m2 && !e9(t10)) this.resetFragmentErrors(e10), this.treatAsGap(a10), l2.resolved = true;
      else if ((c2 || g2) && d2 < u2.maxNumRetry) {
        let i11 = tr(null == (s10 = t10.response) ? void 0 : s10.code), r11 = te(u2, d2);
        if (this.resetStartWhenNotLoaded(), this.retryDate = self.performance.now() + r11, this.state = iO, l2.resolved = true, i11) {
          this.log("Waiting for connection (offline)"), this.retryDate = 1 / 0, t10.reason = "offline";
          return;
        }
        this.warn(`Fragment ${a10.sn} of ${e10} ${a10.level} errored with ${t10.details}, retrying loading ${d2 + 1}/${u2.maxNumRetry} in ${r11}ms`);
      } else if (u2) {
        if (this.resetFragmentErrors(e10), !(d2 < u2.maxNumRetry)) return void this.warn(`${t10.details} reached or exceeded max retry (${d2})`);
        n2 || 3 === o2 || (l2.resolved = true);
      } else 2 === o2 ? this.state = iK : this.state = iN;
      this.tickImmediate();
    }
    checkRetryDate() {
      let e10 = self.performance.now(), t10 = this.retryDate, i10 = t10 === 1 / 0;
      (!t10 || e10 >= t10 || i10 && !tr(0)) && (i10 && this.log("Connection restored (online)"), this.resetStartWhenNotLoaded(), this.state = iw);
    }
    reduceLengthAndFlushBuffer(e10) {
      if (this.state === i$ || this.state === iU) {
        let t10 = e10.frag, i10 = e10.parent, r10 = this.getFwdBufferInfo(this.mediaBuffer, i10), s10 = r10 && r10.len > 0.5;
        s10 && this.reduceMaxBufferLength(r10.len, (null == t10 ? void 0 : t10.duration) || 10);
        let a10 = !s10;
        return a10 && this.warn(`Buffer full error while media.currentTime (${this.getLoadPosition()}) is not buffered, flush ${i10} buffer`), t10 && (this.fragmentTracker.removeFragment(t10), this.nextLoadPosition = t10.start), this.resetLoadingState(), a10;
      }
      return false;
    }
    resetFragmentErrors(e10) {
      e10 === D && (this.fragCurrent = null), this.hls.hasEnoughToStart || (this.startFragRequested = false), this.state !== iC && (this.state = iw);
    }
    afterBufferFlushed(e10, t10, i10) {
      if (!e10) return;
      let r10 = tR.getBuffered(e10);
      this.fragmentTracker.detectEvictedFragments(t10, r10, i10), this.state === iB && this.resetLoadingState();
    }
    resetLoadingState() {
      this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state !== iC && (this.state = iw);
    }
    resetStartWhenNotLoaded() {
      if (!this.hls.hasEnoughToStart) {
        this.startFragRequested = false;
        let e10 = this.levelLastLoaded, t10 = e10 ? e10.details : null;
        null != t10 && t10.live ? (this.log("resetting startPosition for live start"), this.startPosition = -1, this.setStartPosition(t10, t10.fragmentStart), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition;
      }
    }
    resetWhenMissingContext(e10) {
      this.log(`Loading context changed while buffering sn ${e10.sn} of ${this.playlistLabel()} ${-1 === e10.level ? "<removed>" : e10.level}. This chunk will not be buffered.`), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(), this.resetLoadingState();
    }
    removeUnbufferedFrags(e10 = 0) {
      this.fragmentTracker.removeFragmentsInRange(e10, 1 / 0, this.playlistType, false, true);
    }
    updateLevelTiming(e10, t10, i10, r10) {
      let s10 = i10.details;
      if (!s10) return void this.warn("level.details undefined");
      if (!Object.keys(e10.elementaryStreams).reduce((t11, a11) => {
        let n2 = e10.elementaryStreams[a11];
        if (n2) {
          let l2 = n2.endPTS - n2.startPTS;
          if (l2 <= 0) return this.warn(`Could not parse fragment ${e10.sn} ${a11} duration reliably (${l2})`), t11 || false;
          let o2 = r10 ? 0 : ic(s10, e10, n2.startPTS, n2.endPTS, n2.startDTS, n2.endDTS, this);
          return this.hls.trigger(y.LEVEL_PTS_UPDATED, { details: s10, level: i10, drift: o2, type: a11, frag: e10, start: n2.startPTS, end: n2.endPTS }), true;
        }
        return t11;
      }, false)) {
        var a10;
        let t11 = (null == (a10 = this.transmuxer) ? void 0 : a10.error) === null;
        if ((0 === i10.fragmentError || t11 && (i10.fragmentError < 2 || e10.endList)) && this.treatAsGap(e10, i10), t11) {
          let t12 = Error(`Found no media in fragment ${e10.sn} of ${this.playlistLabel()} ${e10.level} resetting transmuxer to fallback to playlist timing`);
          if (this.warn(t12.message), this.hls.trigger(y.ERROR, { type: m.MEDIA_ERROR, details: p.FRAG_PARSING_ERROR, fatal: false, error: t12, frag: e10, reason: `Found no media in msn ${e10.sn} of ${this.playlistLabel()} "${i10.url}"` }), !this.hls) return;
          this.resetTransmuxer();
        }
      }
      this.state = iU, this.log(`Parsed ${e10.type} sn: ${e10.sn}${t10 ? " part: " + t10.index : ""} of ${this.fragInfo(e10, false, t10)})`), this.hls.trigger(y.FRAG_PARSED, { frag: e10, part: t10 });
    }
    playlistLabel() {
      return this.playlistType === k ? "level" : "track";
    }
    fragInfo(e10, t10 = true, i10) {
      var r10, s10;
      return `${this.playlistLabel()} ${e10.level} (${i10 ? "part" : "frag"}:[${(null != (r10 = t10 && !i10 ? e10.startPTS : (i10 || e10).start) ? r10 : NaN).toFixed(3)}-${(null != (s10 = t10 && !i10 ? e10.endPTS : (i10 || e10).end) ? s10 : NaN).toFixed(3)}]${i10 && "main" === e10.type ? "INDEPENDENT=" + (i10.independent ? "YES" : "NO") : ""}`;
    }
    treatAsGap(e10, t10) {
      t10 && t10.fragmentError++, e10.gap = true, this.fragmentTracker.removeFragment(e10), this.fragmentTracker.fragBuffered(e10, true);
    }
    resetTransmuxer() {
      var e10;
      null == (e10 = this.transmuxer) || e10.reset();
    }
    recoverWorkerError(e10) {
      "demuxerWorker" === e10.event && (this.fragmentTracker.removeAllFragments(), this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null), this.resetStartWhenNotLoaded(), this.resetLoadingState());
    }
    set state(e10) {
      let t10 = this._state;
      t10 !== e10 && (this._state = e10, this.log(`${t10}->${e10}`));
    }
    get state() {
      return this._state;
    }
  }
  function iV(e10) {
    return !!e10.interstitialsController && false !== e10.enableInterstitialPlayback;
  }
  class iY {
    constructor() {
      this.chunks = [], this.dataLength = 0;
    }
    push(e10) {
      this.chunks.push(e10), this.dataLength += e10.length;
    }
    flush() {
      let e10, { chunks: t10, dataLength: i10 } = this;
      return t10.length ? (e10 = 1 === t10.length ? t10[0] : (function(e11, t11) {
        let i11 = new Uint8Array(t11), r10 = 0;
        for (let t12 = 0; t12 < e11.length; t12++) {
          let s10 = e11[t12];
          i11.set(s10, r10), r10 += s10.length;
        }
        return i11;
      })(t10, i10), this.reset(), e10) : new Uint8Array(0);
    }
    reset() {
      this.chunks.length = 0, this.dataLength = 0;
    }
  }
  var ij = { exports: {} }, iW = (A || (A = 1, !(function(e10) {
    var t10 = Object.prototype.hasOwnProperty, i10 = "~";
    function r10() {
    }
    function s10(e11, t11, i11) {
      this.fn = e11, this.context = t11, this.once = i11 || false;
    }
    function a10(e11, t11, r11, a11, n3) {
      if ("function" != typeof r11) throw TypeError("The listener must be a function");
      var l3 = new s10(r11, a11 || e11, n3), o2 = i10 ? i10 + t11 : t11;
      return e11._events[o2] ? e11._events[o2].fn ? e11._events[o2] = [e11._events[o2], l3] : e11._events[o2].push(l3) : (e11._events[o2] = l3, e11._eventsCount++), e11;
    }
    function n2(e11, t11) {
      0 == --e11._eventsCount ? e11._events = new r10() : delete e11._events[t11];
    }
    function l2() {
      this._events = new r10(), this._eventsCount = 0;
    }
    Object.create && (r10.prototype = /* @__PURE__ */ Object.create(null), new r10().__proto__ || (i10 = false)), l2.prototype.eventNames = function() {
      var e11, r11, s11 = [];
      if (0 === this._eventsCount) return s11;
      for (r11 in e11 = this._events) t10.call(e11, r11) && s11.push(i10 ? r11.slice(1) : r11);
      return Object.getOwnPropertySymbols ? s11.concat(Object.getOwnPropertySymbols(e11)) : s11;
    }, l2.prototype.listeners = function(e11) {
      var t11 = i10 ? i10 + e11 : e11, r11 = this._events[t11];
      if (!r11) return [];
      if (r11.fn) return [r11.fn];
      for (var s11 = 0, a11 = r11.length, n3 = Array(a11); s11 < a11; s11++) n3[s11] = r11[s11].fn;
      return n3;
    }, l2.prototype.listenerCount = function(e11) {
      var t11 = i10 ? i10 + e11 : e11, r11 = this._events[t11];
      return r11 ? r11.fn ? 1 : r11.length : 0;
    }, l2.prototype.emit = function(e11, t11, r11, s11, a11, n3) {
      var l3 = i10 ? i10 + e11 : e11;
      if (!this._events[l3]) return false;
      var o2, h2, d2 = this._events[l3], u2 = arguments.length;
      if (d2.fn) {
        switch (d2.once && this.removeListener(e11, d2.fn, void 0, true), u2) {
          case 1:
            return d2.fn.call(d2.context), true;
          case 2:
            return d2.fn.call(d2.context, t11), true;
          case 3:
            return d2.fn.call(d2.context, t11, r11), true;
          case 4:
            return d2.fn.call(d2.context, t11, r11, s11), true;
          case 5:
            return d2.fn.call(d2.context, t11, r11, s11, a11), true;
          case 6:
            return d2.fn.call(d2.context, t11, r11, s11, a11, n3), true;
        }
        for (h2 = 1, o2 = Array(u2 - 1); h2 < u2; h2++) o2[h2 - 1] = arguments[h2];
        d2.fn.apply(d2.context, o2);
      } else {
        var f2, c2 = d2.length;
        for (h2 = 0; h2 < c2; h2++) switch (d2[h2].once && this.removeListener(e11, d2[h2].fn, void 0, true), u2) {
          case 1:
            d2[h2].fn.call(d2[h2].context);
            break;
          case 2:
            d2[h2].fn.call(d2[h2].context, t11);
            break;
          case 3:
            d2[h2].fn.call(d2[h2].context, t11, r11);
            break;
          case 4:
            d2[h2].fn.call(d2[h2].context, t11, r11, s11);
            break;
          default:
            if (!o2) for (f2 = 1, o2 = Array(u2 - 1); f2 < u2; f2++) o2[f2 - 1] = arguments[f2];
            d2[h2].fn.apply(d2[h2].context, o2);
        }
      }
      return true;
    }, l2.prototype.on = function(e11, t11, i11) {
      return a10(this, e11, t11, i11, false);
    }, l2.prototype.once = function(e11, t11, i11) {
      return a10(this, e11, t11, i11, true);
    }, l2.prototype.removeListener = function(e11, t11, r11, s11) {
      var a11 = i10 ? i10 + e11 : e11;
      if (!this._events[a11]) return this;
      if (!t11) return n2(this, a11), this;
      var l3 = this._events[a11];
      if (l3.fn) l3.fn !== t11 || s11 && !l3.once || r11 && l3.context !== r11 || n2(this, a11);
      else {
        for (var o2 = 0, h2 = [], d2 = l3.length; o2 < d2; o2++) (l3[o2].fn !== t11 || s11 && !l3[o2].once || r11 && l3[o2].context !== r11) && h2.push(l3[o2]);
        h2.length ? this._events[a11] = 1 === h2.length ? h2[0] : h2 : n2(this, a11);
      }
      return this;
    }, l2.prototype.removeAllListeners = function(e11) {
      var t11;
      return e11 ? (t11 = i10 ? i10 + e11 : e11, this._events[t11] && n2(this, t11)) : (this._events = new r10(), this._eventsCount = 0), this;
    }, l2.prototype.off = l2.prototype.removeListener, l2.prototype.addListener = l2.prototype.on, l2.prefixed = i10, l2.EventEmitter = l2, e10.exports = l2;
  })(ij)), (o = ij.exports) && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")) ? o.default : o;
  let iq = "1.6.16", iX = {};
  function iQ(e10, t10) {
    return t10 + 10 <= e10.length && 51 === e10[t10] && 68 === e10[t10 + 1] && 73 === e10[t10 + 2] && e10[t10 + 3] < 255 && e10[t10 + 4] < 255 && e10[t10 + 6] < 128 && e10[t10 + 7] < 128 && e10[t10 + 8] < 128 && e10[t10 + 9] < 128 || false;
  }
  function iz(e10, t10) {
    return t10 + 10 <= e10.length && 73 === e10[t10] && 68 === e10[t10 + 1] && 51 === e10[t10 + 2] && e10[t10 + 3] < 255 && e10[t10 + 4] < 255 && e10[t10 + 6] < 128 && e10[t10 + 7] < 128 && e10[t10 + 8] < 128 && e10[t10 + 9] < 128 || false;
  }
  function iZ(e10, t10) {
    return (127 & e10[t10]) << 21 | (127 & e10[t10 + 1]) << 14 | (127 & e10[t10 + 2]) << 7 | 127 & e10[t10 + 3];
  }
  function iJ(e10, t10) {
    let i10 = t10, r10 = 0;
    for (; iz(e10, t10); ) r10 += 10, r10 += iZ(e10, t10 + 6), iQ(e10, t10 + 10) && (r10 += 10), t10 += r10;
    if (r10 > 0) return e10.subarray(i10, i10 + r10);
  }
  function i0(e10, t10) {
    return 255 === e10[t10] && (246 & e10[t10 + 1]) == 240;
  }
  function i1(e10, t10) {
    return 1 & e10[t10 + 1] ? 7 : 9;
  }
  function i2(e10, t10) {
    return (3 & e10[t10 + 3]) << 11 | e10[t10 + 4] << 3 | (224 & e10[t10 + 5]) >>> 5;
  }
  function i3(e10, t10) {
    return t10 + 1 < e10.length && i0(e10, t10);
  }
  function i4(e10, t10, i10, r10, s10) {
    if (!e10.samplerate) {
      let a10 = (function(e11, t11, i11, r11) {
        let s11 = t11[i11 + 2], a11 = s11 >> 2 & 15;
        if (a11 > 12) {
          let t12 = Error(`invalid ADTS sampling index:${a11}`);
          e11.emit(y.ERROR, y.ERROR, { type: m.MEDIA_ERROR, details: p.FRAG_PARSING_ERROR, fatal: true, error: t12, reason: t12.message });
          return;
        }
        let n2 = (s11 >> 6 & 3) + 1, l2 = t11[i11 + 3] >> 6 & 3 | (1 & s11) << 2, o2 = "mp4a.40." + n2, h2 = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350][a11], d2 = a11;
        (5 === n2 || 29 === n2) && (d2 -= 3);
        let u2 = [n2 << 3 | (14 & d2) >> 1, (1 & d2) << 7 | l2 << 3];
        return N.log(`manifest codec:${r11}, parsed codec:${o2}, channels:${l2}, rate:${h2} (ADTS object type:${n2} sampling index:${a11})`), { config: u2, samplerate: h2, channelCount: l2, codec: o2, parsedCodec: o2, manifestCodec: r11 };
      })(t10, i10, r10, s10);
      a10 && w(e10, a10);
    }
  }
  function i5(e10, t10, i10, r10, s10) {
    let a10, n2 = r10 + s10 * (9216e4 / e10.samplerate), l2 = (function(e11, t11) {
      let i11 = i1(e11, t11);
      if (t11 + i11 <= e11.length) {
        let r11 = i2(e11, t11) - i11;
        if (r11 > 0) return { headerLength: i11, frameLength: r11 };
      }
    })(t10, i10);
    if (l2) {
      let { frameLength: r11, headerLength: s11 } = l2, o3 = s11 + r11, h2 = Math.max(0, i10 + o3 - t10.length);
      h2 ? (a10 = new Uint8Array(o3 - s11)).set(t10.subarray(i10 + s11, t10.length), 0) : a10 = t10.subarray(i10 + s11, i10 + o3);
      let d2 = { unit: a10, pts: n2 };
      return h2 || e10.samples.push(d2), { sample: d2, length: o3, missing: h2 };
    }
    let o2 = t10.length - i10;
    return (a10 = new Uint8Array(o2)).set(t10.subarray(i10, t10.length), 0), { sample: { unit: a10, pts: n2 }, length: o2, missing: -1 };
  }
  function i8(e10, t10 = 0, i10 = 1 / 0) {
    var r10, s10, a10, n2, l2, o2;
    let h2, d2, u2, f2, c2, g2;
    return r10 = e10, s10 = t10, a10 = i10, n2 = Uint8Array, h2 = (l2 = r10) instanceof ArrayBuffer ? l2 : l2.buffer, d2 = 1, "BYTES_PER_ELEMENT" in n2 && (d2 = n2.BYTES_PER_ELEMENT), f2 = ((u2 = (o2 = r10) && o2.buffer instanceof ArrayBuffer && void 0 !== o2.byteLength && void 0 !== o2.byteOffset ? r10.byteOffset : 0) + r10.byteLength) / d2, g2 = Math.floor(Math.min((c2 = Math.floor(Math.max(0, Math.min((u2 + s10) / d2, f2)))) + Math.max(a10, 0), f2)), new n2(h2, c2, g2 - c2);
  }
  function i6(e10) {
    let t10 = 0, i10 = [];
    for (; iz(e10, t10); ) {
      let r10 = iZ(e10, t10 + 6);
      e10[t10 + 5] >> 6 & 1 && (t10 += 10);
      let s10 = (t10 += 10) + r10;
      for (; t10 + 10 < s10; ) {
        let r11 = (function(e11) {
          let t11 = String.fromCharCode(e11[0], e11[1], e11[2], e11[3]), i11 = iZ(e11, 4);
          return { type: t11, size: i11, data: e11.subarray(10, 10 + i11) };
        })(e10.subarray(t10)), s11 = (function(e11) {
          if ("PRIV" === e11.type) {
            if (e11.size < 2) return;
            let t12 = H(e11.data, true), i11 = new Uint8Array(e11.data.subarray(t12.length + 1));
            return { key: e11.type, info: t12, data: i11.buffer };
          }
          if ("W" === e11.type[0]) {
            if ("WXXX" === e11.type) {
              if (e11.size < 2) return;
              let t13 = 1, i11 = H(e11.data.subarray(t13), true);
              t13 += i11.length + 1;
              let r12 = H(e11.data.subarray(t13));
              return { key: e11.type, info: i11, data: r12 };
            }
            let t12 = H(e11.data);
            return { key: e11.type, info: "", data: t12 };
          }
          if ("APIC" === e11.type) return (function(e12) {
            let t12, i11 = { key: e12.type, description: "", data: "", mimeType: null, pictureType: null };
            if (e12.size < 2) return;
            if (3 !== e12.data[0]) return void console.log("Ignore frame with unrecognized character encoding");
            let r12 = e12.data.subarray(1).indexOf(0);
            if (-1 === r12) return;
            let s12 = H(i8(e12.data, 1, r12)), a10 = e12.data[2 + r12], n2 = e12.data.subarray(3 + r12).indexOf(0);
            if (-1 === n2) return;
            let l2 = H(i8(e12.data, 3 + r12, n2));
            if ("-->" === s12) t12 = H(i8(e12.data, 4 + r12 + n2));
            else {
              var o2;
              t12 = (o2 = e12.data.subarray(4 + r12 + n2)) instanceof ArrayBuffer ? o2 : 0 == o2.byteOffset && o2.byteLength == o2.buffer.byteLength ? o2.buffer : new Uint8Array(o2).buffer;
            }
            return i11.mimeType = s12, i11.pictureType = a10, i11.description = l2, i11.data = t12, i11;
          })(e11);
          if (e11.size < 2) return;
          if ("TXXX" === e11.type) {
            let t12 = 1, i11 = H(e11.data.subarray(t12), true);
            t12 += i11.length + 1;
            let r12 = H(e11.data.subarray(t12));
            return { key: e11.type, info: i11, data: r12 };
          }
          let t11 = H(e11.data.subarray(1));
          return { key: e11.type, info: "", data: t11 };
        })(r11);
        s11 && i10.push(s11), t10 += r11.size + 10;
      }
      iQ(e10, t10) && (t10 += 10);
    }
    return i10;
  }
  function i9(e10) {
    return e10 && "PRIV" === e10.key && "com.apple.streaming.transportStreamTimestamp" === e10.info;
  }
  function i7(e10) {
    let t10 = i6(e10);
    for (let e11 = 0; e11 < t10.length; e11++) {
      let i10 = t10[e11];
      if (i9(i10)) return (function(e12) {
        if (8 === e12.data.byteLength) {
          let t11 = new Uint8Array(e12.data), i11 = 1 & t11[3], r10 = (t11[4] << 23) + (t11[5] << 15) + (t11[6] << 7) + t11[7];
          return r10 /= 45, i11 && (r10 += 4772185884e-2), Math.round(r10);
        }
      })(i10);
    }
  }
  let re = ((h = {}).audioId3 = "org.id3", h.dateRange = "com.apple.quicktime.HLS", h.emsg = "https://aomedia.org/emsg/ID3", h.misbklv = "urn:misb:KLV:bin:1910.1", h);
  function rt(e10 = "", t10 = 9e4) {
    return { type: e10, id: -1, pid: -1, inputTimeScale: t10, sequenceNumber: -1, samples: [], dropped: 0 };
  }
  class ri {
    constructor() {
      this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null;
    }
    resetInitSegment(e10, t10, i10, r10) {
      this._id3Track = { type: "id3", id: 3, pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0 };
    }
    resetTimeStamp(e10) {
      this.initPTS = e10, this.resetContiguity();
    }
    resetContiguity() {
      this.basePTS = null, this.lastPTS = null, this.frameIndex = 0;
    }
    canParse(e10, t10) {
      return false;
    }
    appendFrame(e10, t10, i10) {
    }
    demux(e10, t10) {
      let i10;
      this.cachedData && (e10 = ey(this.cachedData, e10), this.cachedData = null);
      let r10 = iJ(e10, 0), s10 = r10 ? r10.length : 0, a10 = this._audioTrack, n2 = this._id3Track, l2 = r10 ? i7(r10) : void 0, o2 = e10.length;
      for ((null === this.basePTS || 0 === this.frameIndex && f(l2)) && (this.basePTS = rr(l2, t10, this.initPTS), this.lastPTS = this.basePTS), null === this.lastPTS && (this.lastPTS = this.basePTS), r10 && r10.length > 0 && n2.samples.push({ pts: this.lastPTS, dts: this.lastPTS, data: r10, type: re.audioId3, duration: 1 / 0 }); s10 < o2; ) {
        if (this.canParse(e10, s10)) {
          let t11 = this.appendFrame(a10, e10, s10);
          t11 ? (this.frameIndex++, this.lastPTS = t11.sample.pts, s10 += t11.length, i10 = s10) : s10 = o2;
        } else {
          var h2, d2;
          iz(h2 = e10, d2 = s10) && iZ(h2, d2 + 6) + 10 <= h2.length - d2 ? (r10 = iJ(e10, s10), n2.samples.push({ pts: this.lastPTS, dts: this.lastPTS, data: r10, type: re.audioId3, duration: 1 / 0 }), s10 += r10.length, i10 = s10) : s10++;
        }
        if (s10 === o2 && i10 !== o2) {
          let t11 = e10.slice(i10);
          this.cachedData ? this.cachedData = ey(this.cachedData, t11) : this.cachedData = t11;
        }
      }
      return { audioTrack: a10, videoTrack: rt(), id3Track: n2, textTrack: rt() };
    }
    demuxSampleAes(e10, t10, i10) {
      return Promise.reject(Error(`[${this}] This demuxer does not support Sample-AES decryption`));
    }
    flush(e10) {
      let t10 = this.cachedData;
      return t10 && (this.cachedData = null, this.demux(t10, 0)), { audioTrack: this._audioTrack, videoTrack: rt(), id3Track: this._id3Track, textTrack: rt() };
    }
    destroy() {
      this.cachedData = null, this._audioTrack = this._id3Track = void 0;
    }
  }
  let rr = (e10, t10, i10) => f(e10) ? 90 * e10 : 9e4 * t10 + (i10 ? 9e4 * i10.baseTime / i10.timescale : 0), rs = null, ra = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], rn = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], rl = [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]], ro = [0, 1, 1, 4];
  function rh(e10, t10, i10, r10, s10) {
    if (i10 + 24 > t10.length) return;
    let a10 = rd(t10, i10);
    if (a10 && i10 + a10.frameLength <= t10.length) {
      let n2 = r10 + s10 * (9e4 * a10.samplesPerFrame / a10.sampleRate), l2 = { unit: t10.subarray(i10, i10 + a10.frameLength), pts: n2, dts: n2 };
      return e10.config = [], e10.channelCount = a10.channelCount, e10.samplerate = a10.sampleRate, e10.samples.push(l2), { sample: l2, length: a10.frameLength, missing: 0 };
    }
  }
  function rd(e10, t10) {
    let i10 = e10[t10 + 1] >> 3 & 3, r10 = e10[t10 + 1] >> 1 & 3, s10 = e10[t10 + 2] >> 4 & 15, a10 = e10[t10 + 2] >> 2 & 3;
    if (1 !== i10 && 0 !== s10 && 15 !== s10 && 3 !== a10) {
      let n2 = e10[t10 + 2] >> 1 & 1, l2 = e10[t10 + 3] >> 6, o2 = 1e3 * ra[14 * (3 === i10 ? 3 - r10 : 3 === r10 ? 3 : 4) + s10 - 1], h2 = rn[3 * (3 === i10 ? 0 : 2 === i10 ? 1 : 2) + a10], d2 = rl[i10][r10], u2 = ro[r10], f2 = Math.floor(d2 * o2 / h2 + n2) * u2;
      if (null === rs) {
        let e11 = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
        rs = e11 ? parseInt(e11[1]) : 0;
      }
      return rs && rs <= 87 && 2 === r10 && o2 >= 224e3 && 0 === l2 && (e10[t10 + 3] = 128 | e10[t10 + 3]), { sampleRate: h2, channelCount: 3 === l2 ? 1 : 2, frameLength: f2, samplesPerFrame: 8 * d2 * u2 };
    }
  }
  function ru(e10, t10) {
    return 255 === e10[t10] && (224 & e10[t10 + 1]) == 224 && (6 & e10[t10 + 1]) != 0;
  }
  function rf(e10, t10) {
    return t10 + 1 < e10.length && ru(e10, t10);
  }
  function rc(e10, t10) {
    if (t10 + 1 < e10.length && ru(e10, t10)) {
      let i10 = rd(e10, t10), r10 = 4;
      null != i10 && i10.frameLength && (r10 = i10.frameLength);
      let s10 = t10 + r10;
      return s10 === e10.length || rf(e10, s10);
    }
    return false;
  }
  let rg = (e10, t10) => {
    let i10 = 0, r10 = 5;
    t10 += 5;
    let s10 = new Uint32Array(1), a10 = new Uint32Array(1), n2 = new Uint8Array(1);
    for (; r10 > 0; ) {
      n2[0] = e10[t10];
      let l2 = Math.min(r10, 8), o2 = 8 - l2;
      a10[0] = 4278190080 >>> 24 + o2 << o2, s10[0] = (n2[0] & a10[0]) >> o2, i10 = i10 ? i10 << l2 | s10[0] : s10[0], t10 += 1, r10 -= l2;
    }
    return i10;
  };
  function rm(e10, t10, i10, r10, s10) {
    if (i10 + 8 > t10.length || 11 !== t10[i10] || 119 !== t10[i10 + 1]) return -1;
    let a10 = t10[i10 + 4] >> 6;
    if (a10 >= 3) return -1;
    let n2 = [48e3, 44100, 32e3][a10], l2 = 63 & t10[i10 + 4], o2 = 2 * [64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920][3 * l2 + a10];
    if (i10 + o2 > t10.length) return -1;
    let h2 = t10[i10 + 6] >> 5, d2 = 0;
    2 === h2 ? d2 += 2 : (1 & h2 && 1 !== h2 && (d2 += 2), 4 & h2 && (d2 += 2));
    let u2 = (t10[i10 + 6] << 8 | t10[i10 + 7]) >> 12 - d2 & 1, f2 = [2, 1, 2, 3, 3, 4, 4, 5][h2] + u2, c2 = t10[i10 + 5] >> 3, g2 = 7 & t10[i10 + 5], m2 = new Uint8Array([a10 << 6 | c2 << 1 | g2 >> 2, (3 & g2) << 6 | h2 << 3 | u2 << 2 | l2 >> 4, l2 << 4 & 224]), p2 = t10.subarray(i10, i10 + o2);
    return e10.config = m2, e10.channelCount = f2, e10.samplerate = n2, e10.samples.push({ unit: p2, pts: r10 + 1536 / n2 * 9e4 * s10 }), o2;
  }
  let rp = /\/emsg[-/]ID3/i;
  function ry(e10, t10) {
    return f(e10.presentationTime) ? e10.presentationTime / e10.timeScale : t10 + e10.presentationTimeDelta / e10.timeScale;
  }
  class rv {
    constructor(e10, t10, i10) {
      this.keyData = void 0, this.decrypter = void 0, this.keyData = i10, this.decrypter = new tm(t10, { removePKCS7Padding: false });
    }
    decryptBuffer(e10) {
      return this.decrypter.decrypt(e10, this.keyData.key.buffer, this.keyData.iv.buffer, 0);
    }
    decryptAacSample(e10, t10, i10) {
      let r10 = e10[t10].unit;
      if (r10.length <= 16) return;
      let s10 = r10.subarray(16, r10.length - r10.length % 16), a10 = s10.buffer.slice(s10.byteOffset, s10.byteOffset + s10.length);
      this.decryptBuffer(a10).then((s11) => {
        let a11 = new Uint8Array(s11);
        r10.set(a11, 16), this.decrypter.isSync() || this.decryptAacSamples(e10, t10 + 1, i10);
      }).catch(i10);
    }
    decryptAacSamples(e10, t10, i10) {
      for (; ; t10++) {
        if (t10 >= e10.length) return void i10();
        if (!(e10[t10].unit.length < 32) && (this.decryptAacSample(e10, t10, i10), !this.decrypter.isSync())) return;
      }
    }
    getAvcEncryptedData(e10) {
      let t10 = new Int8Array(16 * Math.floor((e10.length - 48) / 160) + 16), i10 = 0;
      for (let r10 = 32; r10 < e10.length - 16; r10 += 160, i10 += 16) t10.set(e10.subarray(r10, r10 + 16), i10);
      return t10;
    }
    getAvcDecryptedUnit(e10, t10) {
      let i10 = new Uint8Array(t10), r10 = 0;
      for (let t11 = 32; t11 < e10.length - 16; t11 += 160, r10 += 16) e10.set(i10.subarray(r10, r10 + 16), t11);
      return e10;
    }
    decryptAvcSample(e10, t10, i10, r10, s10) {
      let a10 = eS(s10.data), n2 = this.getAvcEncryptedData(a10);
      this.decryptBuffer(n2.buffer).then((n3) => {
        s10.data = this.getAvcDecryptedUnit(a10, n3), this.decrypter.isSync() || this.decryptAvcSamples(e10, t10, i10 + 1, r10);
      }).catch(r10);
    }
    decryptAvcSamples(e10, t10, i10, r10) {
      if (e10 instanceof Uint8Array) throw Error("Cannot decrypt samples of type Uint8Array");
      for (; ; t10++, i10 = 0) {
        if (t10 >= e10.length) return void r10();
        let s10 = e10[t10].units;
        for (; !(i10 >= s10.length); i10++) {
          let a10 = s10[i10];
          if (!(a10.data.length <= 48) && (1 === a10.type || 5 === a10.type) && (this.decryptAvcSample(e10, t10, i10, r10, a10), !this.decrypter.isSync())) return;
        }
      }
    }
  }
  class rE {
    constructor() {
      this.VideoSample = null;
    }
    createVideoSample(e10, t10, i10) {
      return { key: e10, frame: false, pts: t10, dts: i10, units: [], length: 0 };
    }
    getLastNalUnit(e10) {
      var t10;
      let i10, r10 = this.VideoSample;
      if (r10 && 0 !== r10.units.length || (r10 = e10[e10.length - 1]), null != (t10 = r10) && t10.units) {
        let e11 = r10.units;
        i10 = e11[e11.length - 1];
      }
      return i10;
    }
    pushAccessUnit(e10, t10) {
      if (e10.units.length && e10.frame) {
        if (void 0 === e10.pts) {
          let i10 = t10.samples, r10 = i10.length;
          if (!r10) return void t10.dropped++;
          {
            let t11 = i10[r10 - 1];
            e10.pts = t11.pts, e10.dts = t11.dts;
          }
        }
        t10.samples.push(e10);
      }
    }
    parseNALu(e10, t10, i10) {
      let r10, s10, a10, n2 = t10.byteLength, l2 = e10.naluState || 0, o2 = l2, h2 = [], d2 = 0, u2 = -1, f2 = 0;
      for (-1 === l2 && (u2 = 0, f2 = this.getNALuType(t10, 0), l2 = 0, d2 = 1); d2 < n2; ) {
        if (r10 = t10[d2++], !l2) {
          l2 = +!r10;
          continue;
        }
        if (1 === l2) {
          l2 = 2 * !r10;
          continue;
        }
        if (r10) if (1 === r10) {
          if (s10 = d2 - l2 - 1, u2 >= 0) {
            let e11 = { data: t10.subarray(u2, s10), type: f2 };
            h2.push(e11);
          } else {
            let i11 = this.getLastNalUnit(e10.samples);
            i11 && (o2 && d2 <= 4 - o2 && i11.state && (i11.data = i11.data.subarray(0, i11.data.byteLength - o2)), s10 > 0 && (i11.data = ey(i11.data, t10.subarray(0, s10)), i11.state = 0));
          }
          d2 < n2 ? (a10 = this.getNALuType(t10, d2), u2 = d2, f2 = a10, l2 = 0) : l2 = -1;
        } else l2 = 0;
        else l2 = 3;
      }
      if (u2 >= 0 && l2 >= 0) {
        let e11 = { data: t10.subarray(u2, n2), type: f2, state: l2 };
        h2.push(e11);
      }
      if (0 === h2.length) {
        let i11 = this.getLastNalUnit(e10.samples);
        i11 && (i11.data = ey(i11.data, t10));
      }
      return e10.naluState = l2, h2;
    }
  }
  class rT {
    constructor(e10) {
      this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = e10, this.bytesAvailable = e10.byteLength, this.word = 0, this.bitsAvailable = 0;
    }
    loadWord() {
      let e10 = this.data, t10 = this.bytesAvailable, i10 = e10.byteLength - t10, r10 = new Uint8Array(4), s10 = Math.min(4, t10);
      if (0 === s10) throw Error("no bytes available");
      r10.set(e10.subarray(i10, i10 + s10)), this.word = new DataView(r10.buffer).getUint32(0), this.bitsAvailable = 8 * s10, this.bytesAvailable -= s10;
    }
    skipBits(e10) {
      let t10;
      e10 = Math.min(e10, 8 * this.bytesAvailable + this.bitsAvailable), this.bitsAvailable > e10 || (e10 -= this.bitsAvailable, t10 = e10 >> 3, e10 -= t10 << 3, this.bytesAvailable -= t10, this.loadWord()), this.word <<= e10, this.bitsAvailable -= e10;
    }
    readBits(e10) {
      let t10 = Math.min(this.bitsAvailable, e10), i10 = this.word >>> 32 - t10;
      if (e10 > 32 && N.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t10, this.bitsAvailable > 0) this.word <<= t10;
      else if (this.bytesAvailable > 0) this.loadWord();
      else throw Error("no bits available");
      return (t10 = e10 - t10) > 0 && this.bitsAvailable ? i10 << t10 | this.readBits(t10) : i10;
    }
    skipLZ() {
      let e10;
      for (e10 = 0; e10 < this.bitsAvailable; ++e10) if ((this.word & 2147483648 >>> e10) != 0) return this.word <<= e10, this.bitsAvailable -= e10, e10;
      return this.loadWord(), e10 + this.skipLZ();
    }
    skipUEG() {
      this.skipBits(1 + this.skipLZ());
    }
    skipEG() {
      this.skipBits(1 + this.skipLZ());
    }
    readUEG() {
      let e10 = this.skipLZ();
      return this.readBits(e10 + 1) - 1;
    }
    readEG() {
      let e10 = this.readUEG();
      return 1 & e10 ? 1 + e10 >>> 1 : -1 * (e10 >>> 1);
    }
    readBoolean() {
      return 1 === this.readBits(1);
    }
    readUByte() {
      return this.readBits(8);
    }
    readUShort() {
      return this.readBits(16);
    }
    readUInt() {
      return this.readBits(32);
    }
  }
  class rS extends rE {
    parsePES(e10, t10, i10, r10) {
      let s10, a10 = this.parseNALu(e10, i10.data, r10), n2 = this.VideoSample, l2 = false;
      i10.data = null, n2 && a10.length && !e10.audFound && (this.pushAccessUnit(n2, e10), n2 = this.VideoSample = this.createVideoSample(false, i10.pts, i10.dts)), a10.forEach((r11) => {
        var a11, o2, h2, d2, u2;
        switch (r11.type) {
          case 1: {
            let t11 = false;
            s10 = true;
            let a12 = r11.data;
            if (l2 && a12.length > 4) {
              let e11 = this.readSliceType(a12);
              (2 === e11 || 4 === e11 || 7 === e11 || 9 === e11) && (t11 = true);
            }
            t11 && null != (h2 = n2) && h2.frame && !n2.key && (this.pushAccessUnit(n2, e10), n2 = this.VideoSample = null), n2 || (n2 = this.VideoSample = this.createVideoSample(true, i10.pts, i10.dts)), n2.frame = true, n2.key = t11;
            break;
          }
          case 5:
            s10 = true, null != (a11 = n2) && a11.frame && !n2.key && (this.pushAccessUnit(n2, e10), n2 = this.VideoSample = null), n2 || (n2 = this.VideoSample = this.createVideoSample(true, i10.pts, i10.dts)), n2.key = true, n2.frame = true;
            break;
          case 6:
            s10 = true, eT(r11.data, 1, i10.pts, t10.samples);
            break;
          case 7: {
            s10 = true, l2 = true;
            let t11 = r11.data, i11 = this.readSPS(t11);
            if (!e10.sps || e10.width !== i11.width || e10.height !== i11.height || (null == (d2 = e10.pixelRatio) ? void 0 : d2[0]) !== i11.pixelRatio[0] || (null == (u2 = e10.pixelRatio) ? void 0 : u2[1]) !== i11.pixelRatio[1]) {
              e10.width = i11.width, e10.height = i11.height, e10.pixelRatio = i11.pixelRatio, e10.sps = [t11];
              let r12 = t11.subarray(1, 4), s11 = "avc1.";
              for (let e11 = 0; e11 < 3; e11++) {
                let t12 = r12[e11].toString(16);
                t12.length < 2 && (t12 = "0" + t12), s11 += t12;
              }
              e10.codec = s11;
            }
            break;
          }
          case 8:
            s10 = true, e10.pps = [r11.data];
            break;
          case 9:
            s10 = true, e10.audFound = true, null != (o2 = n2) && o2.frame && (this.pushAccessUnit(n2, e10), n2 = null), n2 || (n2 = this.VideoSample = this.createVideoSample(false, i10.pts, i10.dts));
            break;
          case 12:
            s10 = true;
            break;
          default:
            s10 = false;
        }
        n2 && s10 && n2.units.push(r11);
      }), r10 && n2 && (this.pushAccessUnit(n2, e10), this.VideoSample = null);
    }
    getNALuType(e10, t10) {
      return 31 & e10[t10];
    }
    readSliceType(e10) {
      let t10 = new rT(e10);
      return t10.readUByte(), t10.readUEG(), t10.readUEG();
    }
    skipScalingList(e10, t10) {
      let i10 = 8, r10 = 8;
      for (let s10 = 0; s10 < e10; s10++) 0 !== r10 && (r10 = (i10 + t10.readEG() + 256) % 256), i10 = 0 === r10 ? i10 : r10;
    }
    readSPS(e10) {
      let t10, i10, r10, s10 = new rT(e10), a10 = 0, n2 = 0, l2 = 0, o2 = 0, h2 = s10.readUByte.bind(s10), d2 = s10.readBits.bind(s10), u2 = s10.readUEG.bind(s10), f2 = s10.readBoolean.bind(s10), c2 = s10.skipBits.bind(s10), g2 = s10.skipEG.bind(s10), m2 = s10.skipUEG.bind(s10), p2 = this.skipScalingList.bind(this);
      h2();
      let y2 = h2();
      if (d2(5), c2(3), h2(), m2(), 100 === y2 || 110 === y2 || 122 === y2 || 244 === y2 || 44 === y2 || 83 === y2 || 86 === y2 || 118 === y2 || 128 === y2) {
        let e11 = u2();
        if (3 === e11 && c2(1), m2(), m2(), c2(1), f2()) for (i10 = 3 !== e11 ? 8 : 12, r10 = 0; r10 < i10; r10++) f2() && p2(r10 < 6 ? 16 : 64, s10);
      }
      m2();
      let v2 = u2();
      if (0 === v2) u2();
      else if (1 === v2) for (c2(1), g2(), g2(), t10 = u2(), r10 = 0; r10 < t10; r10++) g2();
      m2(), c2(1);
      let E2 = u2(), T2 = u2(), S2 = d2(1);
      0 === S2 && c2(1), c2(1), f2() && (a10 = u2(), n2 = u2(), l2 = u2(), o2 = u2());
      let A2 = [1, 1];
      if (f2() && f2()) switch (h2()) {
        case 1:
          A2 = [1, 1];
          break;
        case 2:
          A2 = [12, 11];
          break;
        case 3:
          A2 = [10, 11];
          break;
        case 4:
          A2 = [16, 11];
          break;
        case 5:
          A2 = [40, 33];
          break;
        case 6:
          A2 = [24, 11];
          break;
        case 7:
          A2 = [20, 11];
          break;
        case 8:
          A2 = [32, 11];
          break;
        case 9:
          A2 = [80, 33];
          break;
        case 10:
          A2 = [18, 11];
          break;
        case 11:
          A2 = [15, 11];
          break;
        case 12:
          A2 = [64, 33];
          break;
        case 13:
          A2 = [160, 99];
          break;
        case 14:
          A2 = [4, 3];
          break;
        case 15:
          A2 = [3, 2];
          break;
        case 16:
          A2 = [2, 1];
          break;
        case 255:
          A2 = [h2() << 8 | h2(), h2() << 8 | h2()];
      }
      return { width: Math.ceil((E2 + 1) * 16 - 2 * a10 - 2 * n2), height: (2 - S2) * (T2 + 1) * 16 - (S2 ? 2 : 4) * (l2 + o2), pixelRatio: A2 };
    }
  }
  class rA extends rE {
    constructor(...e10) {
      super(...e10), this.initVPS = null;
    }
    parsePES(e10, t10, i10, r10) {
      let s10, a10 = this.parseNALu(e10, i10.data, r10), n2 = this.VideoSample, l2 = false;
      i10.data = null, n2 && a10.length && !e10.audFound && (this.pushAccessUnit(n2, e10), n2 = this.VideoSample = this.createVideoSample(false, i10.pts, i10.dts)), a10.forEach((r11) => {
        var a11, o2, h2;
        switch (r11.type) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
            n2 || (n2 = this.VideoSample = this.createVideoSample(false, i10.pts, i10.dts)), n2.frame = true, s10 = true;
            break;
          case 16:
          case 17:
          case 18:
          case 21:
            s10 = true, l2 && null != (h2 = n2) && h2.frame && !n2.key && (this.pushAccessUnit(n2, e10), n2 = this.VideoSample = null), n2 || (n2 = this.VideoSample = this.createVideoSample(true, i10.pts, i10.dts)), n2.key = true, n2.frame = true;
            break;
          case 19:
          case 20:
            s10 = true, null != (a11 = n2) && a11.frame && !n2.key && (this.pushAccessUnit(n2, e10), n2 = this.VideoSample = null), n2 || (n2 = this.VideoSample = this.createVideoSample(true, i10.pts, i10.dts)), n2.key = true, n2.frame = true;
            break;
          case 39:
            s10 = true, eT(r11.data, 2, i10.pts, t10.samples);
            break;
          case 32:
            s10 = true, e10.vps || ("object" != typeof e10.params && (e10.params = {}), e10.params = w(e10.params, this.readVPS(r11.data)), this.initVPS = r11.data), e10.vps = [r11.data];
            break;
          case 33:
            if (s10 = true, l2 = true, void 0 === e10.vps || e10.vps[0] === this.initVPS || void 0 === e10.sps || this.matchSPS(e10.sps[0], r11.data) || (this.initVPS = e10.vps[0], e10.sps = e10.pps = void 0), !e10.sps) {
              let t11 = this.readSPS(r11.data);
              for (let i11 in e10.width = t11.width, e10.height = t11.height, e10.pixelRatio = t11.pixelRatio, e10.codec = t11.codecString, e10.sps = [], "object" != typeof e10.params && (e10.params = {}), t11.params) e10.params[i11] = t11.params[i11];
            }
            this.pushParameterSet(e10.sps, r11.data, e10.vps), n2 || (n2 = this.VideoSample = this.createVideoSample(true, i10.pts, i10.dts)), n2.key = true;
            break;
          case 34:
            if (s10 = true, "object" == typeof e10.params) {
              if (!e10.pps) {
                e10.pps = [];
                let t11 = this.readPPS(r11.data);
                for (let i11 in t11) e10.params[i11] = t11[i11];
              }
              this.pushParameterSet(e10.pps, r11.data, e10.vps);
            }
            break;
          case 35:
            s10 = true, e10.audFound = true, null != (o2 = n2) && o2.frame && (this.pushAccessUnit(n2, e10), n2 = null), n2 || (n2 = this.VideoSample = this.createVideoSample(false, i10.pts, i10.dts));
            break;
          default:
            s10 = false;
        }
        n2 && s10 && n2.units.push(r11);
      }), r10 && n2 && (this.pushAccessUnit(n2, e10), this.VideoSample = null);
    }
    pushParameterSet(e10, t10, i10) {
      (!i10 || i10[0] !== this.initVPS) && (i10 || e10.length) || e10.push(t10);
    }
    getNALuType(e10, t10) {
      return (126 & e10[t10]) >>> 1;
    }
    ebsp2rbsp(e10) {
      let t10 = new Uint8Array(e10.byteLength), i10 = 0;
      for (let r10 = 0; r10 < e10.byteLength; r10++) (!(r10 >= 2) || 3 !== e10[r10] || 0 !== e10[r10 - 1] || 0 !== e10[r10 - 2]) && (t10[i10] = e10[r10], i10++);
      return new Uint8Array(t10.buffer, 0, i10);
    }
    pushAccessUnit(e10, t10) {
      super.pushAccessUnit(e10, t10), this.initVPS && (this.initVPS = null);
    }
    readVPS(e10) {
      let t10 = new rT(e10);
      return t10.readUByte(), t10.readUByte(), t10.readBits(4), t10.skipBits(2), t10.readBits(6), { numTemporalLayers: t10.readBits(3) + 1, temporalIdNested: t10.readBoolean() };
    }
    readSPS(e10) {
      let t10 = new rT(this.ebsp2rbsp(e10));
      t10.readUByte(), t10.readUByte(), t10.readBits(4);
      let i10 = t10.readBits(3);
      t10.readBoolean();
      let r10 = t10.readBits(2), s10 = t10.readBoolean(), a10 = t10.readBits(5), n2 = t10.readUByte(), l2 = t10.readUByte(), o2 = t10.readUByte(), h2 = t10.readUByte(), d2 = t10.readUByte(), u2 = t10.readUByte(), f2 = t10.readUByte(), c2 = t10.readUByte(), g2 = t10.readUByte(), m2 = t10.readUByte(), p2 = t10.readUByte(), y2 = [], v2 = [];
      for (let e11 = 0; e11 < i10; e11++) y2.push(t10.readBoolean()), v2.push(t10.readBoolean());
      if (i10 > 0) for (let e11 = i10; e11 < 8; e11++) t10.readBits(2);
      for (let e11 = 0; e11 < i10; e11++) y2[e11] && (t10.readUByte(), t10.readUByte(), t10.readUByte(), t10.readUByte(), t10.readUByte(), t10.readUByte(), t10.readUByte(), t10.readUByte(), t10.readUByte(), t10.readUByte(), t10.readUByte()), v2[e11] && t10.readUByte();
      t10.readUEG();
      let E2 = t10.readUEG();
      3 == E2 && t10.skipBits(1);
      let T2 = t10.readUEG(), S2 = t10.readUEG(), A2 = t10.readBoolean(), L2 = 0, R2 = 0, b2 = 0, I2 = 0;
      A2 && (L2 += t10.readUEG(), R2 += t10.readUEG(), b2 += t10.readUEG(), I2 += t10.readUEG());
      let k2 = t10.readUEG(), D2 = t10.readUEG(), _2 = t10.readUEG(), P2 = t10.readBoolean();
      for (let e11 = P2 ? 0 : i10; e11 <= i10; e11++) t10.skipUEG(), t10.skipUEG(), t10.skipUEG();
      if (t10.skipUEG(), t10.skipUEG(), t10.skipUEG(), t10.skipUEG(), t10.skipUEG(), t10.skipUEG(), t10.readBoolean() && t10.readBoolean()) for (let e11 = 0; e11 < 4; e11++) for (let i11 = 0; i11 < (3 === e11 ? 2 : 6); i11++) if (t10.readBoolean()) {
        let i12 = Math.min(64, 1 << 4 + (e11 << 1));
        e11 > 1 && t10.readEG();
        for (let e12 = 0; e12 < i12; e12++) t10.readEG();
      } else t10.readUEG();
      t10.readBoolean(), t10.readBoolean(), t10.readBoolean() && (t10.readUByte(), t10.skipUEG(), t10.skipUEG(), t10.readBoolean());
      let C2 = t10.readUEG(), w2 = 0;
      for (let e11 = 0; e11 < C2; e11++) {
        let i11 = false;
        if (0 !== e11 && (i11 = t10.readBoolean()), i11) {
          e11 === C2 && t10.readUEG(), t10.readBoolean(), t10.readUEG();
          let i12 = 0;
          for (let e12 = 0; e12 <= w2; e12++) {
            let e13 = t10.readBoolean(), r11 = false;
            e13 || (r11 = t10.readBoolean()), (e13 || r11) && i12++;
          }
          w2 = i12;
        } else {
          let e12 = t10.readUEG(), i12 = t10.readUEG();
          w2 = e12 + i12;
          for (let i13 = 0; i13 < e12; i13++) t10.readUEG(), t10.readBoolean();
          for (let e13 = 0; e13 < i12; e13++) t10.readUEG(), t10.readBoolean();
        }
      }
      if (t10.readBoolean()) {
        let e11 = t10.readUEG();
        for (let i11 = 0; i11 < e11; i11++) {
          for (let e12 = 0; e12 < _2 + 4; e12++) t10.readBits(1);
          t10.readBits(1);
        }
      }
      let x2 = 0, M2 = 1, O2 = 1, F2 = true, $2 = 1, U2 = 0;
      t10.readBoolean(), t10.readBoolean();
      if (t10.readBoolean()) {
        if (t10.readBoolean()) {
          let e11 = t10.readUByte();
          e11 > 0 && e11 < 16 ? (M2 = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][e11 - 1], O2 = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][e11 - 1]) : 255 === e11 && (M2 = t10.readBits(16), O2 = t10.readBits(16));
        }
        if (t10.readBoolean() && t10.readBoolean(), t10.readBoolean() && (t10.readBits(3), t10.readBoolean(), t10.readBoolean() && (t10.readUByte(), t10.readUByte(), t10.readUByte())), t10.readBoolean() && (t10.readUEG(), t10.readUEG()), t10.readBoolean(), t10.readBoolean(), t10.readBoolean(), t10.readBoolean() && (t10.skipUEG(), t10.skipUEG(), t10.skipUEG(), t10.skipUEG()), t10.readBoolean() && ($2 = t10.readBits(32), U2 = t10.readBits(32), t10.readBoolean() && t10.readUEG(), t10.readBoolean())) {
          let e11 = t10.readBoolean(), r11 = t10.readBoolean(), s11 = false;
          (e11 || r11) && ((s11 = t10.readBoolean()) && (t10.readUByte(), t10.readBits(5), t10.readBoolean(), t10.readBits(5)), t10.readBits(4), t10.readBits(4), s11 && t10.readBits(4), t10.readBits(5), t10.readBits(5), t10.readBits(5));
          for (let a11 = 0; a11 <= i10; a11++) {
            let i11 = (F2 = t10.readBoolean()) || t10.readBoolean(), a12 = false;
            i11 ? t10.readEG() : a12 = t10.readBoolean();
            let n3 = a12 ? 1 : t10.readUEG() + 1;
            if (e11) for (let e12 = 0; e12 < n3; e12++) t10.readUEG(), t10.readUEG(), s11 && (t10.readUEG(), t10.readUEG()), t10.skipBits(1);
            if (r11) for (let e12 = 0; e12 < n3; e12++) t10.readUEG(), t10.readUEG(), s11 && (t10.readUEG(), t10.readUEG()), t10.skipBits(1);
          }
        }
        t10.readBoolean() && (t10.readBoolean(), t10.readBoolean(), t10.readBoolean(), x2 = t10.readUEG());
      }
      let B2 = T2, N2 = S2;
      if (A2) {
        let e11 = 1, t11 = 1;
        1 === E2 ? e11 = t11 = 2 : 2 == E2 && (e11 = 2), B2 = T2 - e11 * R2 - e11 * L2, N2 = S2 - t11 * I2 - t11 * b2;
      }
      let G2 = r10 ? ["A", "B", "C"][r10] : "", K2 = n2 << 24 | l2 << 16 | o2 << 8 | h2, H2 = 0;
      for (let e11 = 0; e11 < 32; e11++) H2 = (H2 | (K2 >> e11 & 1) << 31 - e11) >>> 0;
      let V2 = H2.toString(16);
      return 1 === a10 && "2" === V2 && (V2 = "6"), { codecString: `hvc1.${G2}${a10}.${V2}.${s10 ? "H" : "L"}${p2}.B0`, params: { general_tier_flag: s10, general_profile_idc: a10, general_profile_space: r10, general_profile_compatibility_flags: [n2, l2, o2, h2], general_constraint_indicator_flags: [d2, u2, f2, c2, g2, m2], general_level_idc: p2, bit_depth: k2 + 8, bit_depth_luma_minus8: k2, bit_depth_chroma_minus8: D2, min_spatial_segmentation_idc: x2, chroma_format_idc: E2, frame_rate: { fixed: F2, fps: U2 / $2 } }, width: B2, height: N2, pixelRatio: [M2, O2] };
    }
    readPPS(e10) {
      let t10 = new rT(this.ebsp2rbsp(e10));
      t10.readUByte(), t10.readUByte(), t10.skipUEG(), t10.skipUEG(), t10.skipBits(2), t10.skipBits(3), t10.skipBits(2), t10.skipUEG(), t10.skipUEG(), t10.skipEG(), t10.skipBits(2), t10.readBoolean() && t10.skipUEG(), t10.skipEG(), t10.skipEG(), t10.skipBits(4);
      let i10 = t10.readBoolean(), r10 = t10.readBoolean(), s10 = 1;
      return r10 && i10 ? s10 = 0 : r10 ? s10 = 3 : i10 && (s10 = 2), { parallelismType: s10 };
    }
    matchSPS(e10, t10) {
      return String.fromCharCode.apply(null, e10).substr(3) === String.fromCharCode.apply(null, t10).substr(3);
    }
  }
  function rL(e10, t10) {
    return ((31 & e10[t10 + 1]) << 8) + e10[t10 + 2];
  }
  function rR(e10, t10, i10, r10) {
    r10.warn(`parsing error: ${t10.message}`), e10.emit(y.ERROR, y.ERROR, { type: m.MEDIA_ERROR, details: p.FRAG_PARSING_ERROR, fatal: false, levelRetry: i10, error: t10, reason: t10.message });
  }
  function rb(e10, t10) {
    t10.log(`${e10} with AES-128-CBC encryption found in unencrypted stream`);
  }
  function rI(e10, t10) {
    let i10, r10, s10, a10, n2, l2 = 0, o2 = e10.data;
    if (!e10 || 0 === e10.size) return null;
    for (; o2[0].length < 19 && o2.length > 1; ) o2[0] = ey(o2[0], o2[1]), o2.splice(1, 1);
    if (1 === ((i10 = o2[0])[0] << 16) + (i10[1] << 8) + i10[2]) {
      if ((r10 = (i10[4] << 8) + i10[5]) && r10 > e10.size - 6) return null;
      let h2 = i10[7];
      192 & h2 && (a10 = (14 & i10[9]) * 536870912 + (255 & i10[10]) * 4194304 + (254 & i10[11]) * 16384 + (255 & i10[12]) * 128 + (254 & i10[13]) / 2, 64 & h2 ? a10 - (n2 = (14 & i10[14]) * 536870912 + (255 & i10[15]) * 4194304 + (254 & i10[16]) * 16384 + (255 & i10[17]) * 128 + (254 & i10[18]) / 2) > 54e5 && (t10.warn(`${Math.round((a10 - n2) / 9e4)}s delta between PTS and DTS, align them`), a10 = n2) : n2 = a10);
      let d2 = (s10 = i10[8]) + 9;
      if (e10.size <= d2) return null;
      e10.size -= d2;
      let u2 = new Uint8Array(e10.size);
      for (let e11 = 0, t11 = o2.length; e11 < t11; e11++) {
        let t12 = (i10 = o2[e11]).byteLength;
        if (d2) if (d2 > t12) {
          d2 -= t12;
          continue;
        } else i10 = i10.subarray(d2), t12 -= d2, d2 = 0;
        u2.set(i10, l2), l2 += t12;
      }
      return r10 && (r10 -= s10 + 3), { data: u2, pts: a10, dts: n2, len: r10 };
    }
    return null;
  }
  class rk {
    static getSilentFrame(e10, t10) {
      if ("mp4a.40.2" === e10) {
        if (1 === t10) return new Uint8Array([0, 200, 0, 128, 35, 128]);
        if (2 === t10) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
        if (3 === t10) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
        else if (4 === t10) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
        else if (5 === t10) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
        else if (6 === t10) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
      } else {
        if (1 === t10) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (2 === t10) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (3 === t10) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
      }
    }
  }
  class rD {
    static init() {
      let e10;
      for (e10 in rD.types = { avc1: [], avcC: [], hvc1: [], hvcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], ".mp3": [], dac3: [], "ac-3": [], mvex: [], mvhd: [], pasp: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [] }, rD.types) rD.types.hasOwnProperty(e10) && (rD.types[e10] = [e10.charCodeAt(0), e10.charCodeAt(1), e10.charCodeAt(2), e10.charCodeAt(3)]);
      rD.HDLR_TYPES = { video: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), audio: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]) };
      let t10 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]);
      rD.STTS = rD.STSC = rD.STCO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), rD.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), rD.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), rD.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), rD.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
      let i10 = new Uint8Array([105, 115, 111, 109]), r10 = new Uint8Array([97, 118, 99, 49]), s10 = new Uint8Array([0, 0, 0, 1]);
      rD.FTYP = rD.box(rD.types.ftyp, i10, s10, i10, r10), rD.DINF = rD.box(rD.types.dinf, rD.box(rD.types.dref, t10));
    }
    static box(e10, ...t10) {
      let i10 = 8, r10 = t10.length, s10 = r10;
      for (; r10--; ) i10 += t10[r10].byteLength;
      let a10 = new Uint8Array(i10);
      for (a10[0] = i10 >> 24 & 255, a10[1] = i10 >> 16 & 255, a10[2] = i10 >> 8 & 255, a10[3] = 255 & i10, a10.set(e10, 4), r10 = 0, i10 = 8; r10 < s10; r10++) a10.set(t10[r10], i10), i10 += t10[r10].byteLength;
      return a10;
    }
    static hdlr(e10) {
      return rD.box(rD.types.hdlr, rD.HDLR_TYPES[e10]);
    }
    static mdat(e10) {
      return rD.box(rD.types.mdat, e10);
    }
    static mdhd(e10, t10) {
      let i10 = Math.floor((t10 *= e10) / 4294967296), r10 = Math.floor(t10 % 4294967296);
      return rD.box(rD.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e10 >> 24 & 255, e10 >> 16 & 255, e10 >> 8 & 255, 255 & e10, i10 >> 24, i10 >> 16 & 255, i10 >> 8 & 255, 255 & i10, r10 >> 24, r10 >> 16 & 255, r10 >> 8 & 255, 255 & r10, 85, 196, 0, 0]));
    }
    static mdia(e10) {
      return rD.box(rD.types.mdia, rD.mdhd(e10.timescale || 0, e10.duration || 0), rD.hdlr(e10.type), rD.minf(e10));
    }
    static mfhd(e10) {
      return rD.box(rD.types.mfhd, new Uint8Array([0, 0, 0, 0, e10 >> 24, e10 >> 16 & 255, e10 >> 8 & 255, 255 & e10]));
    }
    static minf(e10) {
      return "audio" === e10.type ? rD.box(rD.types.minf, rD.box(rD.types.smhd, rD.SMHD), rD.DINF, rD.stbl(e10)) : rD.box(rD.types.minf, rD.box(rD.types.vmhd, rD.VMHD), rD.DINF, rD.stbl(e10));
    }
    static moof(e10, t10, i10) {
      return rD.box(rD.types.moof, rD.mfhd(e10), rD.traf(i10, t10));
    }
    static moov(e10) {
      let t10 = e10.length, i10 = [];
      for (; t10--; ) i10[t10] = rD.trak(e10[t10]);
      return rD.box.apply(null, [rD.types.moov, rD.mvhd(e10[0].timescale || 0, e10[0].duration || 0)].concat(i10).concat(rD.mvex(e10)));
    }
    static mvex(e10) {
      let t10 = e10.length, i10 = [];
      for (; t10--; ) i10[t10] = rD.trex(e10[t10]);
      return rD.box.apply(null, [rD.types.mvex, ...i10]);
    }
    static mvhd(e10, t10) {
      let i10 = Math.floor((t10 *= e10) / 4294967296), r10 = Math.floor(t10 % 4294967296), s10 = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e10 >> 24 & 255, e10 >> 16 & 255, e10 >> 8 & 255, 255 & e10, i10 >> 24, i10 >> 16 & 255, i10 >> 8 & 255, 255 & i10, r10 >> 24, r10 >> 16 & 255, r10 >> 8 & 255, 255 & r10, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
      return rD.box(rD.types.mvhd, s10);
    }
    static sdtp(e10) {
      let t10, i10, r10 = e10.samples || [], s10 = new Uint8Array(4 + r10.length);
      for (t10 = 0; t10 < r10.length; t10++) i10 = r10[t10].flags, s10[t10 + 4] = i10.dependsOn << 4 | i10.isDependedOn << 2 | i10.hasRedundancy;
      return rD.box(rD.types.sdtp, s10);
    }
    static stbl(e10) {
      return rD.box(rD.types.stbl, rD.stsd(e10), rD.box(rD.types.stts, rD.STTS), rD.box(rD.types.stsc, rD.STSC), rD.box(rD.types.stsz, rD.STSZ), rD.box(rD.types.stco, rD.STCO));
    }
    static avc1(e10) {
      let t10, i10, r10, s10 = [], a10 = [];
      for (t10 = 0; t10 < e10.sps.length; t10++) r10 = (i10 = e10.sps[t10]).byteLength, s10.push(r10 >>> 8 & 255), s10.push(255 & r10), s10 = s10.concat(Array.prototype.slice.call(i10));
      for (t10 = 0; t10 < e10.pps.length; t10++) r10 = (i10 = e10.pps[t10]).byteLength, a10.push(r10 >>> 8 & 255), a10.push(255 & r10), a10 = a10.concat(Array.prototype.slice.call(i10));
      let n2 = rD.box(rD.types.avcC, new Uint8Array([1, s10[3], s10[4], s10[5], 255, 224 | e10.sps.length].concat(s10).concat([e10.pps.length]).concat(a10))), l2 = e10.width, o2 = e10.height, h2 = e10.pixelRatio[0], d2 = e10.pixelRatio[1];
      return rD.box(rD.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l2 >> 8 & 255, 255 & l2, o2 >> 8 & 255, 255 & o2, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), n2, rD.box(rD.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), rD.box(rD.types.pasp, new Uint8Array([h2 >> 24, h2 >> 16 & 255, h2 >> 8 & 255, 255 & h2, d2 >> 24, d2 >> 16 & 255, d2 >> 8 & 255, 255 & d2])));
    }
    static esds(e10) {
      return new Uint8Array([0, 0, 0, 0, 3, 25, 0, 1, 0, 4, 17, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, ...e10.config, 6, 1, 2]);
    }
    static audioStsd(e10) {
      let t10 = e10.samplerate || 0;
      return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e10.channelCount || 0, 0, 16, 0, 0, 0, 0, t10 >> 8 & 255, 255 & t10, 0, 0]);
    }
    static mp4a(e10) {
      return rD.box(rD.types.mp4a, rD.audioStsd(e10), rD.box(rD.types.esds, rD.esds(e10)));
    }
    static mp3(e10) {
      return rD.box(rD.types[".mp3"], rD.audioStsd(e10));
    }
    static ac3(e10) {
      return rD.box(rD.types["ac-3"], rD.audioStsd(e10), rD.box(rD.types.dac3, e10.config));
    }
    static stsd(e10) {
      let { segmentCodec: t10 } = e10;
      if ("audio" === e10.type) {
        if ("aac" === t10) return rD.box(rD.types.stsd, rD.STSD, rD.mp4a(e10));
        if ("ac3" === t10 && e10.config) return rD.box(rD.types.stsd, rD.STSD, rD.ac3(e10));
        if ("mp3" === t10 && "mp3" === e10.codec) return rD.box(rD.types.stsd, rD.STSD, rD.mp3(e10));
      } else if (e10.pps && e10.sps) {
        if ("avc" === t10) return rD.box(rD.types.stsd, rD.STSD, rD.avc1(e10));
        if ("hevc" === t10 && e10.vps) return rD.box(rD.types.stsd, rD.STSD, rD.hvc1(e10));
      } else throw Error("video track missing pps or sps");
      throw Error(`unsupported ${e10.type} segment codec (${t10}/${e10.codec})`);
    }
    static tkhd(e10) {
      let t10 = e10.id, i10 = (e10.duration || 0) * (e10.timescale || 0), r10 = e10.width || 0, s10 = e10.height || 0, a10 = Math.floor(i10 / 4294967296), n2 = Math.floor(i10 % 4294967296);
      return rD.box(rD.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t10 >> 24 & 255, t10 >> 16 & 255, t10 >> 8 & 255, 255 & t10, 0, 0, 0, 0, a10 >> 24, a10 >> 16 & 255, a10 >> 8 & 255, 255 & a10, n2 >> 24, n2 >> 16 & 255, n2 >> 8 & 255, 255 & n2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, r10 >> 8 & 255, 255 & r10, 0, 0, s10 >> 8 & 255, 255 & s10, 0, 0]));
    }
    static traf(e10, t10) {
      let i10 = rD.sdtp(e10), r10 = e10.id, s10 = Math.floor(t10 / 4294967296), a10 = Math.floor(t10 % 4294967296);
      return rD.box(rD.types.traf, rD.box(rD.types.tfhd, new Uint8Array([0, 0, 0, 0, r10 >> 24, r10 >> 16 & 255, r10 >> 8 & 255, 255 & r10])), rD.box(rD.types.tfdt, new Uint8Array([1, 0, 0, 0, s10 >> 24, s10 >> 16 & 255, s10 >> 8 & 255, 255 & s10, a10 >> 24, a10 >> 16 & 255, a10 >> 8 & 255, 255 & a10])), rD.trun(e10, i10.length + 16 + 20 + 8 + 16 + 8 + 8), i10);
    }
    static trak(e10) {
      return e10.duration = e10.duration || 4294967295, rD.box(rD.types.trak, rD.tkhd(e10), rD.mdia(e10));
    }
    static trex(e10) {
      let t10 = e10.id;
      return rD.box(rD.types.trex, new Uint8Array([0, 0, 0, 0, t10 >> 24, t10 >> 16 & 255, t10 >> 8 & 255, 255 & t10, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]));
    }
    static trun(e10, t10) {
      let i10, r10, s10, a10, n2, l2, o2 = e10.samples || [], h2 = o2.length, d2 = 12 + 16 * h2, u2 = new Uint8Array(d2);
      for (t10 += 8 + d2, u2.set([+("video" === e10.type), 0, 15, 1, h2 >>> 24 & 255, h2 >>> 16 & 255, h2 >>> 8 & 255, 255 & h2, t10 >>> 24 & 255, t10 >>> 16 & 255, t10 >>> 8 & 255, 255 & t10], 0), i10 = 0; i10 < h2; i10++) s10 = (r10 = o2[i10]).duration, a10 = r10.size, n2 = r10.flags, l2 = r10.cts, u2.set([s10 >>> 24 & 255, s10 >>> 16 & 255, s10 >>> 8 & 255, 255 & s10, a10 >>> 24 & 255, a10 >>> 16 & 255, a10 >>> 8 & 255, 255 & a10, n2.isLeading << 2 | n2.dependsOn, n2.isDependedOn << 6 | n2.hasRedundancy << 4 | n2.paddingValue << 1 | n2.isNonSync, 61440 & n2.degradPrio, 15 & n2.degradPrio, l2 >>> 24 & 255, l2 >>> 16 & 255, l2 >>> 8 & 255, 255 & l2], 12 + 16 * i10);
      return rD.box(rD.types.trun, u2);
    }
    static initSegment(e10) {
      rD.types || rD.init();
      let t10 = rD.moov(e10);
      return ey(rD.FTYP, t10);
    }
    static hvc1(e10) {
      let t10 = e10.params, i10 = [e10.vps, e10.sps, e10.pps], r10 = new Uint8Array([1, t10.general_profile_space << 6 | 32 * !!t10.general_tier_flag | t10.general_profile_idc, t10.general_profile_compatibility_flags[0], t10.general_profile_compatibility_flags[1], t10.general_profile_compatibility_flags[2], t10.general_profile_compatibility_flags[3], t10.general_constraint_indicator_flags[0], t10.general_constraint_indicator_flags[1], t10.general_constraint_indicator_flags[2], t10.general_constraint_indicator_flags[3], t10.general_constraint_indicator_flags[4], t10.general_constraint_indicator_flags[5], t10.general_level_idc, 240 | t10.min_spatial_segmentation_idc >> 8, 255 & t10.min_spatial_segmentation_idc, 252 | t10.parallelismType, 252 | t10.chroma_format_idc, 248 | t10.bit_depth_luma_minus8, 248 | t10.bit_depth_chroma_minus8, 0, parseInt(t10.frame_rate.fps), 3 | t10.temporal_id_nested << 2 | t10.num_temporal_layers << 3 | 64 * !!t10.frame_rate.fixed, i10.length]), s10 = r10.length;
      for (let e11 = 0; e11 < i10.length; e11 += 1) {
        s10 += 3;
        for (let t11 = 0; t11 < i10[e11].length; t11 += 1) s10 += 2 + i10[e11][t11].length;
      }
      let a10 = new Uint8Array(s10);
      a10.set(r10, 0), s10 = r10.length;
      let n2 = i10.length - 1;
      for (let e11 = 0; e11 < i10.length; e11 += 1) {
        a10.set(new Uint8Array([32 + e11 | 128 * (e11 === n2), 0, i10[e11].length]), s10), s10 += 3;
        for (let t11 = 0; t11 < i10[e11].length; t11 += 1) a10.set(new Uint8Array([i10[e11][t11].length >> 8, 255 & i10[e11][t11].length]), s10), s10 += 2, a10.set(i10[e11][t11], s10), s10 += i10[e11][t11].length;
      }
      let l2 = rD.box(rD.types.hvcC, a10), o2 = e10.width, h2 = e10.height, d2 = e10.pixelRatio[0], u2 = e10.pixelRatio[1];
      return rD.box(rD.types.hvc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, o2 >> 8 & 255, 255 & o2, h2 >> 8 & 255, 255 & h2, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), l2, rD.box(rD.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), rD.box(rD.types.pasp, new Uint8Array([d2 >> 24, d2 >> 16 & 255, d2 >> 8 & 255, 255 & d2, u2 >> 24, u2 >> 16 & 255, u2 >> 8 & 255, 255 & u2])));
    }
  }
  function r_(e10, t10, i10 = 1, r10 = false) {
    let s10 = e10 * t10 * i10;
    return r10 ? Math.round(s10) : s10;
  }
  function rP(e10, t10 = false) {
    return r_(e10, 1e3, 11111111111111112e-21, t10);
  }
  function rC(e10) {
    let { baseTime: t10, timescale: i10, trackId: r10 } = e10;
    return `${t10 / i10} (${t10}/${i10}) trackId: ${r10}`;
  }
  rD.types = void 0, rD.HDLR_TYPES = void 0, rD.STTS = void 0, rD.STSC = void 0, rD.STCO = void 0, rD.STSZ = void 0, rD.VMHD = void 0, rD.SMHD = void 0, rD.STSD = void 0, rD.FTYP = void 0, rD.DINF = void 0;
  let rw = null, rx = null;
  function rM(e10, t10, i10, r10) {
    return { duration: t10, size: i10, cts: r10, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: e10 ? 2 : 1, isNonSync: +!e10 } };
  }
  class rO extends O {
    constructor(e10, t10, i10, r10) {
      if (super("mp4-remuxer", r10), this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = false, this._initPTS = null, this._initDTS = null, this.nextVideoTs = null, this.nextAudioTs = null, this.videoSampleDuration = null, this.isAudioContiguous = false, this.isVideoContiguous = false, this.videoTrackConfig = void 0, this.observer = e10, this.config = t10, this.typeSupported = i10, this.ISGenerated = false, null === rw) {
        const e11 = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
        rw = e11 ? parseInt(e11[1]) : 0;
      }
      if (null === rx) {
        const e11 = navigator.userAgent.match(/Safari\/(\d+)/i);
        rx = e11 ? parseInt(e11[1]) : 0;
      }
    }
    destroy() {
      this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null;
    }
    resetTimeStamp(e10) {
      let t10 = this._initPTS;
      t10 && e10 && e10.trackId === t10.trackId && e10.baseTime === t10.baseTime && e10.timescale === t10.timescale || this.log(`Reset initPTS: ${t10 ? rC(t10) : t10} > ${e10 ? rC(e10) : e10}`), this._initPTS = this._initDTS = e10;
    }
    resetNextTimestamp() {
      this.log("reset next timestamp"), this.isVideoContiguous = false, this.isAudioContiguous = false;
    }
    resetInitSegment() {
      this.log("ISGenerated flag reset"), this.ISGenerated = false, this.videoTrackConfig = void 0;
    }
    getVideoStartPts(e10) {
      let t10 = false, i10 = e10[0].pts, r10 = e10.reduce((e11, r11) => {
        let s10 = r11.pts, a10 = s10 - e11;
        return (a10 < -4294967296 && (t10 = true, a10 = (s10 = rF(s10, i10)) - e11), a10 > 0) ? e11 : s10;
      }, i10);
      return t10 && this.debug("PTS rollover detected"), r10;
    }
    remux(e10, t10, i10, r10, s10, a10, n2, l2) {
      let o2, h2, d2, u2, f2, c2, g2 = s10, m2 = s10, p2 = e10.pid > -1, y2 = t10.pid > -1, v2 = t10.samples.length, E2 = e10.samples.length > 0, T2 = n2 && v2 > 0 || v2 > 1;
      if ((!p2 || E2) && (!y2 || T2) || this.ISGenerated || n2) {
        let i11;
        if (this.ISGenerated) {
          var S2, A2, L2, R2;
          let e11 = this.videoTrackConfig;
          (e11 && (t10.width !== e11.width || t10.height !== e11.height || (null == (S2 = t10.pixelRatio) ? void 0 : S2[0]) !== (null == (A2 = e11.pixelRatio) ? void 0 : A2[0]) || (null == (L2 = t10.pixelRatio) ? void 0 : L2[1]) !== (null == (R2 = e11.pixelRatio) ? void 0 : R2[1])) || !e11 && T2 || null === this.nextAudioTs && E2) && this.resetInitSegment();
        }
        this.ISGenerated || (d2 = this.generateIS(e10, t10, s10, a10));
        let r11 = this.isVideoContiguous, n3 = -1;
        if (T2 && (n3 = (function(e11) {
          for (let t11 = 0; t11 < e11.length; t11++) if (e11[t11].key) return t11;
          return -1;
        })(t10.samples), !r11 && this.config.forceKeyFrameOnDiscontinuity)) if (c2 = true, n3 > 0) {
          this.warn(`Dropped ${n3} out of ${v2} video samples due to a missing keyframe`);
          let e11 = this.getVideoStartPts(t10.samples);
          t10.samples = t10.samples.slice(n3), t10.dropped += n3, m2 += (t10.samples[0].pts - e11) / t10.inputTimeScale, i11 = m2;
        } else -1 === n3 && (this.warn(`No keyframe found out of ${v2} video samples`), c2 = false);
        if (this.ISGenerated) {
          if (E2 && T2) {
            let i12 = this.getVideoStartPts(t10.samples), r12 = (rF(e10.samples[0].pts, i12) - i12) / t10.inputTimeScale;
            g2 += Math.max(0, r12), m2 += Math.max(0, -r12);
          }
          if (E2) {
            if (e10.samplerate || (this.warn("regenerate InitSegment as audio detected"), d2 = this.generateIS(e10, t10, s10, a10)), h2 = this.remuxAudio(e10, g2, this.isAudioContiguous, a10, y2 || T2 || l2 === D ? m2 : void 0), T2) {
              let i12 = h2 ? h2.endPTS - h2.startPTS : 0;
              t10.inputTimeScale || (this.warn("regenerate InitSegment as video detected"), d2 = this.generateIS(e10, t10, s10, a10)), o2 = this.remuxVideo(t10, m2, r11, i12);
            }
          } else T2 && (o2 = this.remuxVideo(t10, m2, r11, 0));
          o2 && (o2.firstKeyFrame = n3, o2.independent = -1 !== n3, o2.firstKeyFramePTS = i11);
        }
      }
      return this.ISGenerated && this._initPTS && this._initDTS && (i10.samples.length && (f2 = r$(i10, s10, this._initPTS, this._initDTS)), r10.samples.length && (u2 = rU(r10, s10, this._initPTS))), { audio: h2, video: o2, initSegment: d2, independent: c2, text: u2, id3: f2 };
    }
    computeInitPts(e10, t10, i10, r10) {
      let s10 = Math.round(i10 * t10), a10 = rF(e10, s10);
      if (a10 < s10 + t10) for (this.log(`Adjusting PTS for rollover in timeline near ${(s10 - a10) / t10} ${r10}`); a10 < s10 + t10; ) a10 += 8589934592;
      return a10 - s10;
    }
    generateIS(e10, t10, i10, r10) {
      let s10, a10, n2, l2 = e10.samples, o2 = t10.samples, h2 = this.typeSupported, d2 = {}, u2 = this._initPTS, f2 = !u2 || r10, c2 = "audio/mp4", g2 = -1;
      if (f2 && (s10 = a10 = 1 / 0), e10.config && l2.length) {
        switch (e10.timescale = e10.samplerate, e10.segmentCodec) {
          case "mp3":
            h2.mpeg ? (c2 = "audio/mpeg", e10.codec = "") : h2.mp3 && (e10.codec = "mp3");
            break;
          case "ac3":
            e10.codec = "ac-3";
        }
        d2.audio = { id: "audio", container: c2, codec: e10.codec, initSegment: "mp3" === e10.segmentCodec && h2.mpeg ? new Uint8Array(0) : rD.initSegment([e10]), metadata: { channelCount: e10.channelCount } }, f2 && (g2 = e10.id, n2 = e10.inputTimeScale, u2 && n2 === u2.timescale ? f2 = false : s10 = a10 = this.computeInitPts(l2[0].pts, n2, i10, "audio"));
      }
      if (t10.sps && t10.pps && o2.length) {
        if (t10.timescale = t10.inputTimeScale, d2.video = { id: "main", container: "video/mp4", codec: t10.codec, initSegment: rD.initSegment([t10]), metadata: { width: t10.width, height: t10.height } }, f2) if (g2 = t10.id, n2 = t10.inputTimeScale, u2 && n2 === u2.timescale) f2 = false;
        else {
          let e11 = this.getVideoStartPts(o2), t11 = rF(o2[0].dts, e11), r11 = this.computeInitPts(t11, n2, i10, "video"), l3 = this.computeInitPts(e11, n2, i10, "video");
          a10 = Math.min(a10, r11), s10 = Math.min(s10, l3);
        }
        this.videoTrackConfig = { width: t10.width, height: t10.height, pixelRatio: t10.pixelRatio };
      }
      if (Object.keys(d2).length) return this.ISGenerated = true, f2 ? (u2 && this.warn(`Timestamps at playlist time: ${r10 ? "" : "~"}${i10} ${s10 / n2} != initPTS: ${u2.baseTime / u2.timescale} (${u2.baseTime}/${u2.timescale}) trackId: ${u2.trackId}`), this.log(`Found initPTS at playlist time: ${i10} offset: ${s10 / n2} (${s10}/${n2}) trackId: ${g2}`), this._initPTS = { baseTime: s10, timescale: n2, trackId: g2 }, this._initDTS = { baseTime: a10, timescale: n2, trackId: g2 }) : s10 = n2 = void 0, { tracks: d2, initPTS: s10, timescale: n2, trackId: g2 };
    }
    remuxVideo(e10, t10, i10, r10) {
      let s10, a10, n2, l2 = e10.inputTimeScale, o2 = e10.samples, h2 = [], d2 = o2.length, u2 = this._initPTS, f2 = u2.baseTime * l2 / u2.timescale, c2 = this.nextVideoTs, g2 = 8, v2 = this.videoSampleDuration, E2 = 1 / 0, T2 = -1 / 0, S2 = false;
      if (!i10 || null === c2) {
        let e11 = f2 + t10 * l2, r11 = o2[0].pts - rF(o2[0].dts, o2[0].pts);
        rw && null !== c2 && 15e3 > Math.abs(e11 - r11 - (c2 + f2)) ? i10 = true : c2 = e11 - r11 - f2;
      }
      let A2 = c2 + f2;
      for (let e11 = 0; e11 < d2; e11++) {
        let t11 = o2[e11];
        t11.pts = rF(t11.pts, A2), t11.dts = rF(t11.dts, A2), t11.dts < o2[e11 > 0 ? e11 - 1 : e11].dts && (S2 = true);
      }
      S2 && o2.sort(function(e11, t11) {
        let i11 = e11.dts - t11.dts, r11 = e11.pts - t11.pts;
        return i11 || r11;
      }), s10 = o2[0].dts;
      let L2 = (a10 = o2[o2.length - 1].dts) - s10, R2 = L2 ? Math.round(L2 / (d2 - 1)) : v2 || e10.inputTimeScale / 30;
      if (i10) {
        let i11 = s10 - A2, r11 = i11 > R2, a11 = i11 < -1;
        if ((r11 || a11) && (r11 ? this.warn(`${(e10.segmentCodec || "").toUpperCase()}: ${rP(i11, true)} ms (${i11}dts) hole between fragments detected at ${t10.toFixed(3)}`) : this.warn(`${(e10.segmentCodec || "").toUpperCase()}: ${rP(-i11, true)} ms (${i11}dts) overlapping between fragments detected at ${t10.toFixed(3)}`), !a11 || A2 >= o2[0].pts || rw)) {
          s10 = A2;
          let e11 = o2[0].pts - i11;
          if (r11) o2[0].dts = s10, o2[0].pts = e11;
          else {
            let t11 = true;
            for (let r12 = 0; r12 < o2.length && (!(o2[r12].dts > e11) || !t11); r12++) {
              let e12 = o2[r12].pts;
              if (o2[r12].dts -= i11, o2[r12].pts -= i11, r12 < o2.length - 1) {
                let i12 = o2[r12 + 1].pts;
                t11 = i12 <= o2[r12].pts == i12 <= e12;
              }
            }
          }
          this.log(`Video: Initial PTS/DTS adjusted: ${rP(e11, true)}/${rP(s10, true)}, delta: ${rP(i11, true)} ms`);
        }
      }
      let b2 = 0, I2 = 0, k2 = s10 = Math.max(0, s10);
      for (let e11 = 0; e11 < d2; e11++) {
        let t11 = o2[e11], i11 = t11.units, r11 = i11.length, s11 = 0;
        for (let e12 = 0; e12 < r11; e12++) s11 += i11[e12].data.length;
        I2 += s11, b2 += r11, t11.length = s11, t11.dts < k2 ? (t11.dts = k2, k2 += R2 / 4 | 0 || 1) : k2 = t11.dts, E2 = Math.min(t11.pts, E2), T2 = Math.max(t11.pts, T2);
      }
      a10 = o2[d2 - 1].dts;
      let D2 = I2 + 4 * b2 + 8;
      try {
        n2 = new Uint8Array(D2);
      } catch (e11) {
        this.observer.emit(y.ERROR, y.ERROR, { type: m.MUX_ERROR, details: p.REMUX_ALLOC_ERROR, fatal: false, error: e11, bytes: D2, reason: `fail allocating video mdat ${D2}` });
        return;
      }
      let _2 = new DataView(n2.buffer);
      _2.setUint32(0, D2), n2.set(rD.types.mdat, 4);
      let P2 = false, C2 = 1 / 0, x2 = 1 / 0, M2 = -1 / 0, O2 = -1 / 0;
      for (let e11 = 0; e11 < d2; e11++) {
        let t11, i11 = o2[e11], s11 = i11.units, a11 = 0;
        for (let e12 = 0, t12 = s11.length; e12 < t12; e12++) {
          let t13 = s11[e12], i12 = t13.data, r11 = t13.data.byteLength;
          _2.setUint32(g2, r11), g2 += 4, n2.set(i12, g2), g2 += r11, a11 += 4 + r11;
        }
        if (e11 < d2 - 1) v2 = o2[e11 + 1].dts - i11.dts, t11 = o2[e11 + 1].pts - i11.pts;
        else {
          let s12 = this.config, a12 = e11 > 0 ? i11.dts - o2[e11 - 1].dts : R2;
          if (t11 = e11 > 0 ? i11.pts - o2[e11 - 1].pts : R2, s12.stretchShortVideoTrack && null !== this.nextAudioTs) {
            let e12 = Math.floor(s12.maxBufferHole * l2), t12 = (r10 ? E2 + r10 * l2 : this.nextAudioTs + f2) - i11.pts;
            t12 > e12 ? ((v2 = t12 - a12) < 0 ? v2 = a12 : P2 = true, this.log(`It is approximately ${t12 / 90} ms to the next segment; using duration ${v2 / 90} ms for the last video frame.`)) : v2 = a12;
          } else v2 = a12;
        }
        let u3 = Math.round(i11.pts - i11.dts);
        C2 = Math.min(C2, v2), M2 = Math.max(M2, v2), x2 = Math.min(x2, t11), O2 = Math.max(O2, t11), h2.push(rM(i11.key, v2, a11, u3));
      }
      if (h2.length) {
        if (rw) {
          if (rw < 70) {
            let e11 = h2[0].flags;
            e11.dependsOn = 2, e11.isNonSync = 0;
          }
        } else if (rx && O2 - x2 < M2 - C2 && R2 / M2 < 0.025 && 0 === h2[0].cts) {
          this.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
          let e11 = s10;
          for (let t11 = 0, i11 = h2.length; t11 < i11; t11++) {
            let r11 = e11 + h2[t11].duration, s11 = e11 + h2[t11].cts;
            if (t11 < i11 - 1) {
              let e12 = r11 + h2[t11 + 1].cts;
              h2[t11].duration = e12 - s11;
            } else h2[t11].duration = t11 ? h2[t11 - 1].duration : R2;
            h2[t11].cts = 0, e11 = r11;
          }
        }
      }
      let F2 = a10 + (v2 = P2 || !v2 ? R2 : v2);
      this.nextVideoTs = c2 = F2 - f2, this.videoSampleDuration = v2, this.isVideoContiguous = true;
      let $2 = { data1: rD.moof(e10.sequenceNumber++, s10, w(e10, { samples: h2 })), data2: n2, startPTS: (E2 - f2) / l2, endPTS: (T2 + v2 - f2) / l2, startDTS: (s10 - f2) / l2, endDTS: c2 / l2, type: "video", hasAudio: false, hasVideo: true, nb: h2.length, dropped: e10.dropped };
      return e10.samples = [], e10.dropped = 0, $2;
    }
    getSamplesPerFrame(e10) {
      switch (e10.segmentCodec) {
        case "mp3":
          return 1152;
        case "ac3":
          return 1536;
        default:
          return 1024;
      }
    }
    remuxAudio(e10, t10, i10, r10, s10) {
      let a10, n2 = e10.inputTimeScale, l2 = e10.samplerate ? e10.samplerate : n2, o2 = n2 / l2, h2 = this.getSamplesPerFrame(e10), d2 = h2 * o2, u2 = this._initPTS, f2 = "mp3" === e10.segmentCodec && this.typeSupported.mpeg, c2 = [], g2 = void 0 !== s10, v2 = e10.samples, E2 = 8 * !f2, T2 = this.nextAudioTs || -1, S2 = u2.baseTime * n2 / u2.timescale, A2 = S2 + t10 * n2;
      if (this.isAudioContiguous = i10 = i10 || v2.length && T2 > 0 && (r10 && 9e3 > Math.abs(A2 - (T2 + S2)) || Math.abs(rF(v2[0].pts, A2) - (T2 + S2)) < 20 * d2), v2.forEach(function(e11) {
        e11.pts = rF(e11.pts, A2);
      }), !i10 || T2 < 0) {
        let e11 = v2.length;
        if (e11 !== (v2 = v2.filter((e12) => e12.pts >= 0)).length && this.warn(`Removed ${v2.length - e11} of ${e11} samples (initPTS ${S2} / ${n2})`), !v2.length) return;
        T2 = 0 === s10 ? 0 : r10 && !g2 ? Math.max(0, A2 - S2) : v2[0].pts - S2;
      }
      if ("aac" === e10.segmentCodec) {
        let t11 = this.config.maxAudioFramesDrift;
        for (let i11 = 0, r11 = T2 + S2; i11 < v2.length; i11++) {
          let s11 = v2[i11], a11 = s11.pts, l3 = a11 - r11, o3 = Math.abs(1e3 * l3 / n2);
          if (l3 <= -t11 * d2 && g2) 0 === i11 && (this.warn(`Audio frame @ ${(a11 / n2).toFixed(3)}s overlaps marker by ${Math.round(1e3 * l3 / n2)} ms.`), this.nextAudioTs = T2 = a11 - S2, r11 = a11);
          else if (l3 >= t11 * d2 && o3 < 1e4 && g2) {
            let t12 = Math.round(l3 / d2);
            for (r11 = a11 - t12 * d2; r11 < 0 && t12 && d2; ) t12--, r11 += d2;
            0 === i11 && (this.nextAudioTs = T2 = r11 - S2), this.warn(`Injecting ${t12} audio frames @ ${((r11 - S2) / n2).toFixed(3)}s due to ${Math.round(1e3 * l3 / n2)} ms gap.`);
            for (let a12 = 0; a12 < t12; a12++) {
              let t13 = rk.getSilentFrame(e10.parsedCodec || e10.manifestCodec || e10.codec, e10.channelCount);
              t13 || (this.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), t13 = s11.unit.subarray()), v2.splice(i11, 0, { unit: t13, pts: r11 }), r11 += d2, i11++;
            }
          }
          s11.pts = r11, r11 += d2;
        }
      }
      let L2 = null, R2 = null, b2 = 0, I2 = v2.length;
      for (; I2--; ) b2 += v2[I2].unit.byteLength;
      for (let t11 = 0, r11 = v2.length; t11 < r11; t11++) {
        let r12 = v2[t11], s11 = r12.unit, n3 = r12.pts;
        if (null !== R2) c2[t11 - 1].duration = Math.round((n3 - R2) / o2);
        else {
          if (i10 && "aac" === e10.segmentCodec && (n3 = T2 + S2), L2 = n3, !(b2 > 0)) return;
          b2 += E2;
          try {
            a10 = new Uint8Array(b2);
          } catch (e11) {
            this.observer.emit(y.ERROR, y.ERROR, { type: m.MUX_ERROR, details: p.REMUX_ALLOC_ERROR, fatal: false, error: e11, bytes: b2, reason: `fail allocating audio mdat ${b2}` });
            return;
          }
          f2 || (new DataView(a10.buffer).setUint32(0, b2), a10.set(rD.types.mdat, 4));
        }
        a10.set(s11, E2);
        let l3 = s11.byteLength;
        E2 += l3, c2.push(rM(true, h2, l3, 0)), R2 = n3;
      }
      let k2 = c2.length;
      if (!k2) return;
      let D2 = c2[c2.length - 1];
      T2 = R2 - S2, this.nextAudioTs = T2 + o2 * D2.duration;
      let _2 = f2 ? new Uint8Array(0) : rD.moof(e10.sequenceNumber++, L2 / o2, w({}, e10, { samples: c2 }));
      e10.samples = [];
      let P2 = (L2 - S2) / n2, C2 = this.nextAudioTs / n2, x2 = { data1: _2, data2: a10, startPTS: P2, endPTS: C2, startDTS: P2, endDTS: C2, type: "audio", hasAudio: true, hasVideo: false, nb: k2 };
      return this.isAudioContiguous = true, x2;
    }
  }
  function rF(e10, t10) {
    let i10;
    if (null === t10) return e10;
    for (i10 = t10 < e10 ? -8589934592 : 8589934592; Math.abs(e10 - t10) > 4294967296; ) e10 += i10;
    return e10;
  }
  function r$(e10, t10, i10, r10) {
    let s10 = e10.samples.length;
    if (!s10) return;
    let a10 = e10.inputTimeScale;
    for (let n3 = 0; n3 < s10; n3++) {
      let s11 = e10.samples[n3];
      s11.pts = rF(s11.pts - i10.baseTime * a10 / i10.timescale, t10 * a10) / a10, s11.dts = rF(s11.dts - r10.baseTime * a10 / r10.timescale, t10 * a10) / a10;
    }
    let n2 = e10.samples;
    return e10.samples = [], { samples: n2 };
  }
  function rU(e10, t10, i10) {
    let r10 = e10.samples.length;
    if (!r10) return;
    let s10 = e10.inputTimeScale;
    for (let a11 = 0; a11 < r10; a11++) {
      let r11 = e10.samples[a11];
      r11.pts = rF(r11.pts - i10.baseTime * s10 / i10.timescale, t10 * s10) / s10;
    }
    e10.samples.sort((e11, t11) => e11.pts - t11.pts);
    let a10 = e10.samples;
    return e10.samples = [], { samples: a10 };
  }
  function rB(e10, t10, i10 = false) {
    return (null == e10 ? void 0 : e10.start) !== void 0 ? (e10.start + (i10 ? e10.duration : 0)) / e10.timescale : t10;
  }
  function rN(e10, t10, i10) {
    let r10 = e10.codec;
    return r10 && r10.length > 4 ? r10 : t10 === X ? "ec-3" === r10 || "ac-3" === r10 || "alac" === r10 ? r10 : "fLaC" === r10 || "Opus" === r10 ? eC(r10, false) : (i10.warn(`Unhandled audio codec "${r10}" in mp4 MAP`), r10 || "mp4a") : (i10.warn(`Unhandled video codec "${r10}" in mp4 MAP`), r10 || "avc1");
  }
  try {
    t = self.performance.now.bind(self.performance);
  } catch (e10) {
    t = Date.now;
  }
  let rG = [{ demux: class {
    constructor(e10, t10) {
      this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = t10;
    }
    resetTimeStamp() {
    }
    resetInitSegment(e10, t10, i10, r10) {
      let s10 = this.videoTrack = rt("video", 1), a10 = this.audioTrack = rt("audio", 1), n2 = this.txtTrack = rt("text", 1);
      if (this.id3Track = rt("id3", 1), this.timeOffset = 0, !(null != e10 && e10.byteLength)) return;
      let l2 = ed(e10);
      if (l2.video) {
        let { id: e11, timescale: t11, codec: i11, supplemental: r11 } = l2.video;
        s10.id = e11, s10.timescale = n2.timescale = t11, s10.codec = i11, s10.supplemental = r11;
      }
      if (l2.audio) {
        let { id: e11, timescale: t11, codec: i11 } = l2.audio;
        a10.id = e11, a10.timescale = t11, a10.codec = i11;
      }
      n2.id = er.text, s10.sampleDuration = 0, s10.duration = a10.duration = r10;
    }
    resetContiguity() {
      this.remainderData = null;
    }
    static probe(e10) {
      let t10 = e10.byteLength;
      for (let i10 = 0; i10 < t10; ) {
        let r10 = en(e10, i10);
        if (r10 > 8 && 109 === e10[i10 + 4] && 111 === e10[i10 + 5] && 111 === e10[i10 + 6] && 102 === e10[i10 + 7]) return true;
        i10 = r10 > 1 ? i10 + r10 : t10;
      }
      return false;
    }
    demux(e10, t10) {
      this.timeOffset = t10;
      let i10 = e10, r10 = this.videoTrack, s10 = this.txtTrack;
      if (this.config.progressive) {
        this.remainderData && (i10 = ey(this.remainderData, e10));
        let t11 = (function(e11) {
          let t12 = { valid: null, remainder: null }, i11 = eh(e11, ["moof"]);
          if (i11.length < 2) return t12.remainder = e11, t12;
          let r11 = i11[i11.length - 1];
          return t12.valid = e11.slice(0, r11.byteOffset - 8), t12.remainder = e11.slice(r11.byteOffset - 8), t12;
        })(i10);
        this.remainderData = t11.remainder, r10.samples = t11.valid || new Uint8Array();
      } else r10.samples = i10;
      let a10 = this.extractID3Track(r10, t10);
      return s10.samples = ev(t10, r10), { videoTrack: r10, audioTrack: this.audioTrack, id3Track: a10, textTrack: this.txtTrack };
    }
    flush() {
      let e10 = this.timeOffset, t10 = this.videoTrack, i10 = this.txtTrack;
      t10.samples = this.remainderData || new Uint8Array(), this.remainderData = null;
      let r10 = this.extractID3Track(t10, this.timeOffset);
      return i10.samples = ev(e10, t10), { videoTrack: t10, audioTrack: rt(), id3Track: r10, textTrack: rt() };
    }
    extractID3Track(e10, t10) {
      let i10 = this.id3Track;
      return e10.samples.length && eh(e10.samples, ["emsg"]).forEach((e11) => {
        let r10 = (function(e12) {
          let t11 = e12[0], i11 = "", r11 = "", s10 = 0, a10 = 0, n2 = 0, l2 = 0, o2 = 0, h2 = 0;
          if (0 === t11) {
            for (; "\0" !== es(e12.subarray(h2, h2 + 1)); ) i11 += es(e12.subarray(h2, h2 + 1)), h2 += 1;
            for (i11 += es(e12.subarray(h2, h2 + 1)), h2 += 1; "\0" !== es(e12.subarray(h2, h2 + 1)); ) r11 += es(e12.subarray(h2, h2 + 1)), h2 += 1;
            r11 += es(e12.subarray(h2, h2 + 1)), h2 += 1, s10 = en(e12, 12), a10 = en(e12, 16), l2 = en(e12, 20), o2 = en(e12, 24), h2 = 28;
          } else if (1 === t11) {
            h2 += 4, s10 = en(e12, h2);
            let t12 = en(e12, h2 += 4), a11 = en(e12, h2 += 4);
            for (h2 += 4, c(n2 = 4294967296 * t12 + a11) || (n2 = Number.MAX_SAFE_INTEGER, N.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), l2 = en(e12, h2), h2 += 4, o2 = en(e12, h2), h2 += 4; "\0" !== es(e12.subarray(h2, h2 + 1)); ) i11 += es(e12.subarray(h2, h2 + 1)), h2 += 1;
            for (i11 += es(e12.subarray(h2, h2 + 1)), h2 += 1; "\0" !== es(e12.subarray(h2, h2 + 1)); ) r11 += es(e12.subarray(h2, h2 + 1)), h2 += 1;
            r11 += es(e12.subarray(h2, h2 + 1)), h2 += 1;
          }
          return { schemeIdUri: i11, value: r11, timeScale: s10, presentationTime: n2, presentationTimeDelta: a10, eventDuration: l2, id: o2, payload: e12.subarray(h2, e12.byteLength) };
        })(e11);
        if (rp.test(r10.schemeIdUri)) {
          let e12 = ry(r10, t10), s10 = 4294967295 === r10.eventDuration ? 1 / 0 : r10.eventDuration / r10.timeScale;
          s10 <= 1e-3 && (s10 = 1 / 0);
          let a10 = r10.payload;
          i10.samples.push({ data: a10, len: a10.byteLength, dts: e12, pts: e12, type: re.emsg, duration: s10 });
        } else if (this.config.enableEmsgKLVMetadata && r10.schemeIdUri.startsWith("urn:misb:KLV:bin:1910.1")) {
          let e12 = ry(r10, t10);
          i10.samples.push({ data: r10.payload, len: r10.payload.byteLength, dts: e12, pts: e12, type: re.misbklv, duration: 1 / 0 });
        }
      }), i10;
    }
    demuxSampleAes(e10, t10, i10) {
      return Promise.reject(Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
    }
    destroy() {
      this.config = null, this.remainderData = null, this.videoTrack = this.audioTrack = this.id3Track = this.txtTrack = void 0;
    }
  }, remux: class extends O {
    constructor(e10, t10, i10, r10) {
      super("passthrough-remuxer", r10), this.emitInitSegment = false, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null, this.isVideoContiguous = false;
    }
    destroy() {
    }
    resetTimeStamp(e10) {
      this.lastEndTime = null;
      let t10 = this.initPTS;
      t10 && e10 && t10.baseTime === e10.baseTime && t10.timescale === e10.timescale || (this.initPTS = e10);
    }
    resetNextTimestamp() {
      this.isVideoContiguous = false, this.lastEndTime = null;
    }
    resetInitSegment(e10, t10, i10, r10) {
      this.audioCodec = t10, this.videoCodec = i10, this.generateInitSegment(e10, r10), this.emitInitSegment = true;
    }
    generateInitSegment(e10, t10) {
      let { audioCodec: i10, videoCodec: r10 } = this;
      if (!(null != e10 && e10.byteLength)) {
        this.initTracks = void 0, this.initData = void 0;
        return;
      }
      let { audio: s10, video: a10 } = this.initData = ed(e10);
      if (t10) !(function(e11, t11) {
        if (!e11 || !t11) return;
        let i11 = t11.keyId;
        i11 && t11.isCommonEncryption && em(e11, (e12, t12) => {
          let r11 = e12.subarray(8, 24);
          r11.some((e13) => 0 !== e13) || (N.log(`[eme] Patching keyId in 'enc${t12 ? "a" : "v"}>sinf>>tenc' box: ${V(r11)} -> ${V(i11)}`), e12.set(i11, 8));
        });
      })(e10, t10);
      else {
        let e11 = s10 || a10;
        null != e11 && e11.encrypted && this.warn(`Init segment with encrypted track with has no key ("${e11.codec}")!`);
      }
      s10 && (i10 = rN(s10, X, this)), a10 && (r10 = rN(a10, Q, this));
      let n2 = {};
      s10 && a10 ? n2.audiovideo = { container: "video/mp4", codec: i10 + "," + r10, supplemental: a10.supplemental, encrypted: a10.encrypted, initSegment: e10, id: "main" } : s10 ? n2.audio = { container: "audio/mp4", codec: i10, encrypted: s10.encrypted, initSegment: e10, id: "audio" } : a10 ? n2.video = { container: "video/mp4", codec: r10, supplemental: a10.supplemental, encrypted: a10.encrypted, initSegment: e10, id: "main" } : this.warn("initSegment does not contain moov or trak boxes."), this.initTracks = n2;
    }
    remux(e10, t10, i10, r10, s10, a10) {
      var n2, l2;
      let { initPTS: o2, lastEndTime: h2 } = this, d2 = { audio: void 0, video: void 0, text: r10, id3: i10, initSegment: void 0 };
      f(h2) || (h2 = this.lastEndTime = s10 || 0);
      let u2 = t10.samples;
      if (!u2.length) return d2;
      let c2 = { initPTS: void 0, timescale: void 0, trackId: void 0 }, g2 = this.initData;
      if (null != (n2 = g2) && n2.length || (this.generateInitSegment(u2), g2 = this.initData), !(null != (l2 = g2) && l2.length)) return this.warn("Failed to generate initSegment."), d2;
      this.emitInitSegment && (c2.tracks = this.initTracks, this.emitInitSegment = false);
      let m2 = (function(e11, t11, i11) {
        let r11 = {}, s11 = eh(e11, ["moof", "traf"]);
        for (let e12 = 0; e12 < s11.length; e12++) {
          let a11 = s11[e12], n3 = eh(a11, ["tfhd"])[0], l3 = en(n3, 4), o3 = t11[l3];
          if (!o3) continue;
          r11[l3] || (r11[l3] = { start: NaN, duration: 0, sampleCount: 0, timescale: o3.timescale, type: o3.type });
          let h3 = r11[l3], d3 = eh(a11, ["tfdt"])[0];
          if (d3) {
            let e13 = d3[0], t12 = en(d3, 4);
            1 === e13 && (4294967295 === t12 ? i11.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time") : (t12 *= 4294967296, t12 += en(d3, 8))), f(t12) && (!f(h3.start) || t12 < h3.start) && (h3.start = t12);
          }
          let u3 = o3.default, c3 = en(n3, 0) | (null == u3 ? void 0 : u3.flags), g3 = (null == u3 ? void 0 : u3.duration) || 0;
          8 & c3 && (g3 = 2 & c3 ? en(n3, 12) : en(n3, 8));
          let m3 = eh(a11, ["trun"]), p3 = h3.start || 0, y3 = 0, v3 = g3;
          for (let e13 = 0; e13 < m3.length; e13++) {
            let t12 = m3[e13], i12 = en(t12, 4), r12 = h3.sampleCount;
            h3.sampleCount += i12;
            let s12 = 1 & t12[3], a12 = 4 & t12[3], n4 = 1 & t12[2], l4 = 2 & t12[2], o4 = 4 & t12[2], d4 = 8 & t12[2], u4 = 8, f2 = i12;
            for (s12 && (u4 += 4), a12 && i12 && (1 & t12[u4 + 1] || void 0 !== h3.keyFrameIndex || (h3.keyFrameIndex = r12), u4 += 4, n4 ? (v3 = en(t12, u4), u4 += 4) : v3 = g3, l4 && (u4 += 4), d4 && (u4 += 4), p3 += v3, y3 += v3, f2--); f2--; ) n4 ? (v3 = en(t12, u4), u4 += 4) : v3 = g3, l4 && (u4 += 4), o4 && (1 & t12[u4 + 1] || void 0 !== h3.keyFrameIndex || (h3.keyFrameIndex = h3.sampleCount - (f2 + 1), h3.keyFrameStart = p3), u4 += 4), d4 && (u4 += 4), p3 += v3, y3 += v3;
            !y3 && g3 && (y3 += g3 * i12);
          }
          h3.duration += y3;
        }
        if (!Object.keys(r11).some((e12) => r11[e12].duration)) {
          let t12 = 1 / 0, i12 = 0, s12 = eh(e11, ["sidx"]);
          for (let e12 = 0; e12 < s12.length; e12++) {
            let r12 = (function(e13) {
              let t13 = [], i13 = e13[0], r13 = 8, s13 = en(e13, 8);
              r13 += 4;
              let a11 = 0, n3 = 0;
              0 === i13 ? (a11 = en(e13, r13), n3 = en(e13, r13 + 4), r13 += 8) : (a11 = el(e13, r13), n3 = el(e13, r13 + 8), r13 += 16), r13 += 2;
              let l3 = e13.length + n3, o3 = ea(e13, r13);
              r13 += 2;
              for (let i14 = 0; i14 < o3; i14++) {
                let i15 = r13, a12 = en(e13, i15);
                i15 += 4;
                let n4 = 2147483647 & a12;
                if (1 == (2147483648 & a12) >>> 31) return N.warn("SIDX has hierarchical references (not supported)"), null;
                let o4 = en(e13, i15);
                i15 += 4, t13.push({ referenceSize: n4, subsegmentDuration: o4, info: { duration: o4 / s13, start: l3, end: l3 + n4 - 1 } }), l3 += n4, i15 += 4, r13 = i15;
              }
              return { earliestPresentationTime: a11, timescale: s13, version: i13, referencesCount: o3, references: t13 };
            })(s12[e12]);
            if (null != r12 && r12.references) {
              t12 = Math.min(t12, r12.earliestPresentationTime / r12.timescale);
              let e13 = r12.references.reduce((e14, t13) => e14 + t13.info.duration || 0, 0);
              i12 = Math.max(i12, e13 + r12.earliestPresentationTime / r12.timescale);
            }
          }
          i12 && f(i12) && Object.keys(r11).forEach((e12) => {
            r11[e12].duration || (r11[e12].duration = i12 * r11[e12].timescale - r11[e12].start);
          });
        }
        return r11;
      })(u2, g2, this), p2 = g2.audio ? m2[g2.audio.id] : null, y2 = g2.video ? m2[g2.video.id] : null, v2 = rB(y2, 1 / 0), E2 = rB(p2, 1 / 0), T2 = rB(y2, 0, true), S2 = rB(p2, 0, true), A2 = s10, L2 = 0, R2 = p2 && (!y2 || !o2 && E2 < v2 || o2 && o2.trackId === g2.audio.id), b2 = R2 ? p2 : y2;
      if (b2) {
        let e11 = b2.timescale, t11 = b2.start - s10 * e11, i11 = R2 ? g2.audio.id : g2.video.id;
        A2 = b2.start / e11, L2 = R2 ? S2 - E2 : T2 - v2, (a10 || !o2) && ((function(e12, t12, i12, r11) {
          if (null === e12) return true;
          let s11 = Math.max(r11, 1);
          return Math.abs(t12 - e12.baseTime / e12.timescale - i12) > s11;
        })(o2, A2, s10, L2) || e11 !== o2.timescale) && (o2 && this.warn(`Timestamps at playlist time: ${a10 ? "" : "~"}${s10} ${t11 / e11} != initPTS: ${o2.baseTime / o2.timescale} (${o2.baseTime}/${o2.timescale}) trackId: ${o2.trackId}`), this.log(`Found initPTS at playlist time: ${s10} offset: ${A2 - s10} (${t11}/${e11}) trackId: ${i11}`), o2 = null, c2.initPTS = t11, c2.timescale = e11, c2.trackId = i11);
      } else this.warn(`No audio or video samples found for initPTS at playlist time: ${s10}`);
      o2 ? (c2.initPTS = o2.baseTime, c2.timescale = o2.timescale, c2.trackId = o2.trackId) : (c2.timescale && void 0 !== c2.trackId && void 0 !== c2.initPTS || (this.warn("Could not set initPTS"), c2.initPTS = A2, c2.timescale = 1, c2.trackId = -1), this.initPTS = o2 = { baseTime: c2.initPTS, timescale: c2.timescale, trackId: c2.trackId });
      let I2 = A2 - o2.baseTime / o2.timescale, k2 = I2 + L2;
      L2 > 0 ? this.lastEndTime = k2 : (this.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
      let D2 = !!g2.audio, _2 = !!g2.video, P2 = "";
      D2 && (P2 += "audio"), _2 && (P2 += "video");
      let C2 = { data1: u2, startPTS: I2, startDTS: I2, endPTS: k2, endDTS: k2, type: P2, hasAudio: D2, hasVideo: _2, nb: 1, dropped: 0, encrypted: !!g2.audio && g2.audio.encrypted || !!g2.video && g2.video.encrypted };
      d2.audio = D2 && !_2 ? C2 : void 0, d2.video = _2 ? C2 : void 0;
      let w2 = null == y2 ? void 0 : y2.sampleCount;
      if (w2) {
        let e11 = y2.keyFrameIndex, t11 = -1 !== e11;
        C2.nb = w2, C2.dropped = 0 === e11 || this.isVideoContiguous ? 0 : t11 ? e11 : w2, C2.independent = t11, C2.firstKeyFrame = e11, t11 && y2.keyFrameStart && (C2.firstKeyFramePTS = (y2.keyFrameStart - o2.baseTime) / o2.timescale), this.isVideoContiguous || (d2.independent = t11), this.isVideoContiguous || (this.isVideoContiguous = t11), C2.dropped && this.warn(`fmp4 does not start with IDR: firstIDR ${e11}/${w2} dropped: ${C2.dropped} start: ${C2.firstKeyFramePTS || "NA"}`);
      }
      return d2.initSegment = c2, d2.id3 = r$(i10, s10, o2, o2), r10.samples.length && (d2.text = rU(r10, s10, o2)), d2;
    }
  } }, { demux: class e10 {
    constructor(e11, t10, i10, r10) {
      this.logger = void 0, this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = false, this.audioCodec = void 0, this.videoCodec = void 0, this._pmtId = -1, this._videoTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.remainderData = null, this.videoParser = void 0, this.observer = e11, this.config = t10, this.typeSupported = i10, this.logger = r10, this.videoParser = null;
    }
    static probe(t10, i10) {
      let r10 = e10.syncOffset(t10);
      return r10 > 0 && i10.warn(`MPEG2-TS detected but first sync word found @ offset ${r10}`), -1 !== r10;
    }
    static syncOffset(e11) {
      let t10 = e11.length, i10 = Math.min(940, t10 - 188) + 1, r10 = 0;
      for (; r10 < i10; ) {
        let s10 = false, a10 = -1, n2 = 0;
        for (let l2 = r10; l2 < t10; l2 += 188) if (71 === e11[l2] && (t10 - l2 == 188 || 71 === e11[l2 + 188])) {
          if (n2++, -1 === a10 && 0 !== (a10 = l2) && (i10 = Math.min(a10 + 18612, e11.length - 188) + 1), s10 || (s10 = 0 === rL(e11, l2)), s10 && n2 > 1 && (0 === a10 && n2 > 2 || l2 + 188 > i10)) return a10;
        } else if (n2) return -1;
        else break;
        r10++;
      }
      return -1;
    }
    static createTrack(e11, t10) {
      return { container: "video" === e11 || "audio" === e11 ? "video/mp2t" : void 0, type: e11, id: er[e11], pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0, duration: "audio" === e11 ? t10 : void 0 };
    }
    resetInitSegment(t10, i10, r10, s10) {
      this.pmtParsed = false, this._pmtId = -1, this._videoTrack = e10.createTrack("video"), this._videoTrack.duration = s10, this._audioTrack = e10.createTrack("audio", s10), this._id3Track = e10.createTrack("id3"), this._txtTrack = e10.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.videoParser = null, this.aacOverFlow = null, this.remainderData = null, this.audioCodec = i10, this.videoCodec = r10;
    }
    resetTimeStamp() {
    }
    resetContiguity() {
      let { _audioTrack: e11, _videoTrack: t10, _id3Track: i10 } = this;
      e11 && (e11.pesData = null), t10 && (t10.pesData = null), i10 && (i10.pesData = null), this.aacOverFlow = null, this.remainderData = null;
    }
    demux(t10, i10, r10 = false, s10 = false) {
      let a10;
      r10 || (this.sampleAes = null);
      let n2 = this._videoTrack, l2 = this._audioTrack, o2 = this._id3Track, h2 = this._txtTrack, d2 = n2.pid, u2 = n2.pesData, f2 = l2.pid, c2 = o2.pid, g2 = l2.pesData, m2 = o2.pesData, p2 = null, y2 = this.pmtParsed, v2 = this._pmtId, E2 = t10.length;
      if (this.remainderData && (E2 = (t10 = ey(this.remainderData, t10)).length, this.remainderData = null), E2 < 188 && !s10) return this.remainderData = t10, { audioTrack: l2, videoTrack: n2, id3Track: o2, textTrack: h2 };
      let T2 = Math.max(0, e10.syncOffset(t10));
      (E2 -= (E2 - T2) % 188) < t10.byteLength && !s10 && (this.remainderData = new Uint8Array(t10.buffer, E2, t10.buffer.byteLength - E2));
      let S2 = 0;
      for (let e11 = T2; e11 < E2; e11 += 188) if (71 === t10[e11]) {
        let i11, s11 = !!(64 & t10[e11 + 1]), E3 = rL(t10, e11);
        if ((48 & t10[e11 + 3]) >> 4 > 1) {
          if ((i11 = e11 + 5 + t10[e11 + 4]) === e11 + 188) continue;
        } else i11 = e11 + 4;
        switch (E3) {
          case d2:
            s11 && (u2 && (a10 = rI(u2, this.logger)) && (this.readyVideoParser(n2.segmentCodec), null !== this.videoParser && this.videoParser.parsePES(n2, h2, a10, false)), u2 = { data: [], size: 0 }), u2 && (u2.data.push(t10.subarray(i11, e11 + 188)), u2.size += e11 + 188 - i11);
            break;
          case f2:
            if (s11) {
              if (g2 && (a10 = rI(g2, this.logger))) switch (l2.segmentCodec) {
                case "aac":
                  this.parseAACPES(l2, a10);
                  break;
                case "mp3":
                  this.parseMPEGPES(l2, a10);
                  break;
                case "ac3":
                  this.parseAC3PES(l2, a10);
              }
              g2 = { data: [], size: 0 };
            }
            g2 && (g2.data.push(t10.subarray(i11, e11 + 188)), g2.size += e11 + 188 - i11);
            break;
          case c2:
            s11 && (m2 && (a10 = rI(m2, this.logger)) && this.parseID3PES(o2, a10), m2 = { data: [], size: 0 }), m2 && (m2.data.push(t10.subarray(i11, e11 + 188)), m2.size += e11 + 188 - i11);
            break;
          case 0:
            var A2, L2;
            s11 && (i11 += t10[i11] + 1), v2 = this._pmtId = (31 & (A2 = t10)[(L2 = i11) + 10]) << 8 | A2[L2 + 11];
            break;
          case v2: {
            s11 && (i11 += t10[i11] + 1);
            let a11 = (function(e12, t11, i12, r11, s12, a12) {
              let n3 = { audioPid: -1, videoPid: -1, id3Pid: -1, segmentVideoCodec: "avc", segmentAudioCodec: "aac" }, l3 = (15 & e12[t11 + 1]) << 8 | e12[t11 + 2], o3 = t11 + 3 + l3 - 4, h3 = (15 & e12[t11 + 10]) << 8 | e12[t11 + 11];
              for (t11 += 12 + h3; t11 < o3; ) {
                let l4 = rL(e12, t11), o4 = (15 & e12[t11 + 3]) << 8 | e12[t11 + 4];
                switch (e12[t11]) {
                  case 207:
                    if (!r11) {
                      rb("ADTS AAC", a12);
                      break;
                    }
                  case 15:
                    -1 === n3.audioPid && (n3.audioPid = l4);
                    break;
                  case 21:
                    -1 === n3.id3Pid && (n3.id3Pid = l4);
                    break;
                  case 219:
                    if (!r11) {
                      rb("H.264", a12);
                      break;
                    }
                  case 27:
                    -1 === n3.videoPid && (n3.videoPid = l4);
                    break;
                  case 3:
                  case 4:
                    i12.mpeg || i12.mp3 ? -1 === n3.audioPid && (n3.audioPid = l4, n3.segmentAudioCodec = "mp3") : a12.log("MPEG audio found, not supported in this browser");
                    break;
                  case 193:
                    if (!r11) {
                      rb("AC-3", a12);
                      break;
                    }
                  case 129:
                    i12.ac3 ? -1 === n3.audioPid && (n3.audioPid = l4, n3.segmentAudioCodec = "ac3") : a12.log("AC-3 audio found, not supported in this browser");
                    break;
                  case 6:
                    if (-1 === n3.audioPid && o4 > 0) {
                      let r12 = t11 + 5, s13 = o4;
                      for (; s13 > 2; ) {
                        106 === e12[r12] && (true !== i12.ac3 ? a12.log("AC-3 audio found, not supported in this browser for now") : (n3.audioPid = l4, n3.segmentAudioCodec = "ac3"));
                        let t12 = e12[r12 + 1] + 2;
                        r12 += t12, s13 -= t12;
                      }
                    }
                    break;
                  case 194:
                  case 135:
                    return rR(s12, Error("Unsupported EC-3 in M2TS found"), void 0, a12), n3;
                  case 36:
                    -1 === n3.videoPid && (n3.videoPid = l4, n3.segmentVideoCodec = "hevc", a12.log("HEVC in M2TS found"));
                }
                t11 += o4 + 5;
              }
              return n3;
            })(t10, i11, this.typeSupported, r10, this.observer, this.logger);
            (d2 = a11.videoPid) > 0 && (n2.pid = d2, n2.segmentCodec = a11.segmentVideoCodec), (f2 = a11.audioPid) > 0 && (l2.pid = f2, l2.segmentCodec = a11.segmentAudioCodec), (c2 = a11.id3Pid) > 0 && (o2.pid = c2), null === p2 || y2 || (this.logger.warn(`MPEG-TS PMT found at ${e11} after unknown PID '${p2}'. Backtracking to sync byte @${T2} to parse all TS packets.`), p2 = null, e11 = T2 - 188), y2 = this.pmtParsed = true;
            break;
          }
          case 17:
          case 8191:
            break;
          default:
            p2 = E3;
        }
      } else S2++;
      S2 > 0 && rR(this.observer, Error(`Found ${S2} TS packet/s that do not start with 0x47`), void 0, this.logger), n2.pesData = u2, l2.pesData = g2, o2.pesData = m2;
      let R2 = { audioTrack: l2, videoTrack: n2, id3Track: o2, textTrack: h2 };
      return s10 && this.extractRemainingSamples(R2), R2;
    }
    flush() {
      let e11, { remainderData: t10 } = this;
      return (this.remainderData = null, e11 = t10 ? this.demux(t10, -1, false, true) : { videoTrack: this._videoTrack, audioTrack: this._audioTrack, id3Track: this._id3Track, textTrack: this._txtTrack }, this.extractRemainingSamples(e11), this.sampleAes) ? this.decrypt(e11, this.sampleAes) : e11;
    }
    extractRemainingSamples(e11) {
      let t10, { audioTrack: i10, videoTrack: r10, id3Track: s10, textTrack: a10 } = e11, n2 = r10.pesData, l2 = i10.pesData, o2 = s10.pesData;
      if (n2 && (t10 = rI(n2, this.logger)) ? (this.readyVideoParser(r10.segmentCodec), null !== this.videoParser && (this.videoParser.parsePES(r10, a10, t10, true), r10.pesData = null)) : r10.pesData = n2, l2 && (t10 = rI(l2, this.logger))) {
        switch (i10.segmentCodec) {
          case "aac":
            this.parseAACPES(i10, t10);
            break;
          case "mp3":
            this.parseMPEGPES(i10, t10);
            break;
          case "ac3":
            this.parseAC3PES(i10, t10);
        }
        i10.pesData = null;
      } else null != l2 && l2.size && this.logger.log("last AAC PES packet truncated,might overlap between fragments"), i10.pesData = l2;
      o2 && (t10 = rI(o2, this.logger)) ? (this.parseID3PES(s10, t10), s10.pesData = null) : s10.pesData = o2;
    }
    demuxSampleAes(e11, t10, i10) {
      let r10 = this.demux(e11, i10, true, !this.config.progressive), s10 = this.sampleAes = new rv(this.observer, this.config, t10);
      return this.decrypt(r10, s10);
    }
    readyVideoParser(e11) {
      null === this.videoParser && ("avc" === e11 ? this.videoParser = new rS() : "hevc" === e11 && (this.videoParser = new rA()));
    }
    decrypt(e11, t10) {
      return new Promise((i10) => {
        let { audioTrack: r10, videoTrack: s10 } = e11;
        r10.samples && "aac" === r10.segmentCodec ? t10.decryptAacSamples(r10.samples, 0, () => {
          s10.samples ? t10.decryptAvcSamples(s10.samples, 0, 0, () => {
            i10(e11);
          }) : i10(e11);
        }) : s10.samples && t10.decryptAvcSamples(s10.samples, 0, 0, () => {
          i10(e11);
        });
      });
    }
    destroy() {
      this.observer && this.observer.removeAllListeners(), this.config = this.logger = this.observer = null, this.aacOverFlow = this.videoParser = this.remainderData = this.sampleAes = null, this._videoTrack = this._audioTrack = this._id3Track = this._txtTrack = void 0;
    }
    parseAACPES(e11, t10) {
      let i10, r10, s10, a10, n2 = 0, l2 = this.aacOverFlow, o2 = t10.data;
      if (l2) {
        this.aacOverFlow = null;
        let t11 = l2.missing, i11 = l2.sample.unit.byteLength;
        -1 === t11 ? o2 = ey(l2.sample.unit, o2) : (l2.sample.unit.set(o2.subarray(0, t11), i11 - t11), e11.samples.push(l2.sample), n2 = l2.missing);
      }
      for (i10 = n2, r10 = o2.length; i10 < r10 - 1 && !i3(o2, i10); i10++) ;
      if (i10 !== n2) {
        let e12, t11 = i10 < r10 - 1;
        if (e12 = t11 ? `AAC PES did not start with ADTS header,offset:${i10}` : "No ADTS header found in AAC PES", rR(this.observer, Error(e12), t11, this.logger), !t11) return;
      }
      if (i4(e11, this.observer, o2, i10, this.audioCodec), void 0 !== t10.pts) s10 = t10.pts;
      else {
        if (!l2) return void this.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
        let t11 = 9216e4 / e11.samplerate;
        s10 = l2.sample.pts + t11;
      }
      let h2 = 0;
      for (; i10 < r10; ) {
        if (a10 = i5(e11, o2, i10, s10, h2), i10 += a10.length, a10.missing) {
          this.aacOverFlow = a10;
          break;
        }
        for (h2++; i10 < r10 - 1 && !i3(o2, i10); i10++) ;
      }
    }
    parseMPEGPES(e11, t10) {
      let i10 = t10.data, r10 = i10.length, s10 = 0, a10 = 0, n2 = t10.pts;
      if (void 0 === n2) return void this.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
      for (; a10 < r10; ) if (rf(i10, a10)) {
        let t11 = rh(e11, i10, a10, n2, s10);
        if (t11) a10 += t11.length, s10++;
        else break;
      } else a10++;
    }
    parseAC3PES(e11, t10) {
      {
        let i10, r10 = t10.data, s10 = t10.pts;
        if (void 0 === s10) return void this.logger.warn("[tsdemuxer]: AC3 PES unknown PTS");
        let a10 = r10.length, n2 = 0, l2 = 0;
        for (; l2 < a10 && (i10 = rm(e11, r10, l2, s10, n2++)) > 0; ) l2 += i10;
      }
    }
    parseID3PES(e11, t10) {
      if (void 0 === t10.pts) return void this.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
      let i10 = w({}, t10, { type: this._videoTrack ? re.emsg : re.audioId3, duration: 1 / 0 });
      e11.samples.push(i10);
    }
  }, remux: rO }, { demux: class extends ri {
    constructor(e10, t10) {
      super(), this.observer = void 0, this.config = void 0, this.observer = e10, this.config = t10;
    }
    resetInitSegment(e10, t10, i10, r10) {
      super.resetInitSegment(e10, t10, i10, r10), this._audioTrack = { container: "audio/adts", type: "audio", id: 2, pid: -1, sequenceNumber: 0, segmentCodec: "aac", samples: [], manifestCodec: t10, duration: r10, inputTimeScale: 9e4, dropped: 0 };
    }
    static probe(e10, t10) {
      if (!e10) return false;
      let i10 = iJ(e10, 0), r10 = (null == i10 ? void 0 : i10.length) || 0;
      if (rc(e10, r10)) return false;
      for (let i11 = e10.length; r10 < i11; r10++) if ((function(e11, t11) {
        if (i3(e11, t11)) {
          let i12 = i1(e11, t11);
          if (t11 + i12 >= e11.length) return false;
          let r11 = i2(e11, t11);
          if (r11 <= i12) return false;
          let s10 = t11 + r11;
          return s10 === e11.length || i3(e11, s10);
        }
        return false;
      })(e10, r10)) return t10.log("ADTS sync word found !"), true;
      return false;
    }
    canParse(e10, t10) {
      return t10 + 5 < e10.length && i0(e10, t10) && i2(e10, t10) <= e10.length - t10;
    }
    appendFrame(e10, t10, i10) {
      i4(e10, this.observer, t10, i10, e10.manifestCodec);
      let r10 = i5(e10, t10, i10, this.basePTS, this.frameIndex);
      if (r10 && 0 === r10.missing) return r10;
    }
  }, remux: rO }, { demux: class extends ri {
    resetInitSegment(e10, t10, i10, r10) {
      super.resetInitSegment(e10, t10, i10, r10), this._audioTrack = { container: "audio/mpeg", type: "audio", id: 2, pid: -1, sequenceNumber: 0, segmentCodec: "mp3", samples: [], manifestCodec: t10, duration: r10, inputTimeScale: 9e4, dropped: 0 };
    }
    static probe(e10) {
      if (!e10) return false;
      let t10 = iJ(e10, 0), i10 = (null == t10 ? void 0 : t10.length) || 0;
      if (t10 && 11 === e10[i10] && 119 === e10[i10 + 1] && void 0 !== i7(t10) && 16 >= rg(e10, i10)) return false;
      for (let t11 = e10.length; i10 < t11; i10++) if (rc(e10, i10)) return N.log("MPEG Audio sync word found !"), true;
      return false;
    }
    canParse(e10, t10) {
      return ru(e10, t10) && 4 <= e10.length - t10;
    }
    appendFrame(e10, t10, i10) {
      if (null !== this.basePTS) return rh(e10, t10, i10, this.basePTS, this.frameIndex);
    }
  }, remux: rO }];
  rG.splice(2, 0, { demux: class extends ri {
    constructor(e10) {
      super(), this.observer = void 0, this.observer = e10;
    }
    resetInitSegment(e10, t10, i10, r10) {
      super.resetInitSegment(e10, t10, i10, r10), this._audioTrack = { container: "audio/ac-3", type: "audio", id: 2, pid: -1, sequenceNumber: 0, segmentCodec: "ac3", samples: [], manifestCodec: t10, duration: r10, inputTimeScale: 9e4, dropped: 0 };
    }
    canParse(e10, t10) {
      return t10 + 64 < e10.length;
    }
    appendFrame(e10, t10, i10) {
      let r10 = rm(e10, t10, i10, this.basePTS, this.frameIndex);
      if (-1 !== r10) return { sample: e10.samples[e10.samples.length - 1], length: r10, missing: 0 };
    }
    static probe(e10) {
      if (!e10) return false;
      let t10 = iJ(e10, 0);
      if (!t10) return false;
      let i10 = t10.length;
      return !!(11 === e10[i10] && 119 === e10[i10 + 1] && void 0 !== i7(t10) && 16 > rg(e10, i10));
    }
  }, remux: rO });
  class rK {
    constructor(e10, t10, i10, r10, s10, a10) {
      this.asyncResult = false, this.logger = void 0, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = e10, this.typeSupported = t10, this.config = i10, this.id = s10, this.logger = a10;
    }
    configure(e10) {
      this.transmuxConfig = e10, this.decrypter && this.decrypter.reset();
    }
    push(e10, i10, r10, s10) {
      var a10, n2;
      let l2, o2 = r10.transmuxing;
      o2.executeStart = t();
      let h2 = new Uint8Array(e10), { currentTransmuxState: d2, transmuxConfig: u2 } = this;
      s10 && (this.currentTransmuxState = s10);
      let { contiguous: f2, discontinuity: c2, trackSwitch: g2, accurateTimeOffset: v2, timeOffset: E2, initSegmentChange: T2 } = s10 || d2, { audioCodec: S2, videoCodec: A2, defaultInitPts: L2, duration: R2, initSegmentData: b2 } = u2, I2 = (a10 = h2, n2 = i10, l2 = null, a10.byteLength > 0 && (null == n2 ? void 0 : n2.key) != null && null !== n2.iv && null != n2.method && (l2 = n2), l2);
      if (I2 && tO(I2.method)) {
        let e11 = this.getDecrypter(), i11 = tF(I2.method);
        if (!e11.isSync()) return this.asyncResult = true, this.decryptionPromise = e11.webCryptoDecrypt(h2, I2.key.buffer, I2.iv.buffer, i11).then((e12) => {
          let t10 = this.push(e12, null, r10);
          return this.decryptionPromise = null, t10;
        }), this.decryptionPromise;
        {
          let s11 = e11.softwareDecrypt(h2, I2.key.buffer, I2.iv.buffer, i11);
          if (r10.part > -1) {
            let t10 = e11.flush();
            s11 = t10 ? t10.buffer : t10;
          }
          if (!s11) return o2.executeEnd = t(), rH(r10);
          h2 = new Uint8Array(s11);
        }
      }
      let k2 = this.needsProbing(c2, g2);
      if (k2) {
        let e11 = this.configureTransmuxer(h2);
        if (e11) return this.logger.warn(`[transmuxer] ${e11.message}`), this.observer.emit(y.ERROR, y.ERROR, { type: m.MEDIA_ERROR, details: p.FRAG_PARSING_ERROR, fatal: false, error: e11, reason: e11.message }), o2.executeEnd = t(), rH(r10);
      }
      (c2 || g2 || T2 || k2) && this.resetInitSegment(b2, S2, A2, R2, i10), (c2 || T2 || k2) && this.resetInitialTimestamp(L2), f2 || this.resetContiguity();
      let D2 = this.transmux(h2, I2, E2, v2, r10);
      this.asyncResult = rV(D2);
      let _2 = this.currentTransmuxState;
      return _2.contiguous = true, _2.discontinuity = false, _2.trackSwitch = false, o2.executeEnd = t(), D2;
    }
    flush(e10) {
      let i10 = e10.transmuxing;
      i10.executeStart = t();
      let { decrypter: r10, currentTransmuxState: s10, decryptionPromise: a10 } = this;
      if (a10) return this.asyncResult = true, a10.then(() => this.flush(e10));
      let n2 = [], { timeOffset: l2 } = s10;
      if (r10) {
        let t10 = r10.flush();
        t10 && n2.push(this.push(t10.buffer, null, e10));
      }
      let { demuxer: o2, remuxer: h2 } = this;
      if (!o2 || !h2) {
        i10.executeEnd = t();
        let r11 = [rH(e10)];
        return this.asyncResult ? Promise.resolve(r11) : r11;
      }
      let d2 = o2.flush(l2);
      return rV(d2) ? (this.asyncResult = true, d2.then((t10) => (this.flushRemux(n2, t10, e10), n2))) : (this.flushRemux(n2, d2, e10), this.asyncResult) ? Promise.resolve(n2) : n2;
    }
    flushRemux(e10, i10, r10) {
      let { audioTrack: s10, videoTrack: a10, id3Track: n2, textTrack: l2 } = i10, { accurateTimeOffset: o2, timeOffset: h2 } = this.currentTransmuxState;
      this.logger.log(`[transmuxer.ts]: Flushed ${this.id} sn: ${r10.sn}${r10.part > -1 ? " part: " + r10.part : ""} of ${this.id === k ? "level" : "track"} ${r10.level}`);
      let d2 = this.remuxer.remux(s10, a10, n2, l2, h2, o2, true, this.id);
      e10.push({ remuxResult: d2, chunkMeta: r10 }), r10.transmuxing.executeEnd = t();
    }
    resetInitialTimestamp(e10) {
      let { demuxer: t10, remuxer: i10 } = this;
      t10 && i10 && (t10.resetTimeStamp(e10), i10.resetTimeStamp(e10));
    }
    resetContiguity() {
      let { demuxer: e10, remuxer: t10 } = this;
      e10 && t10 && (e10.resetContiguity(), t10.resetNextTimestamp());
    }
    resetInitSegment(e10, t10, i10, r10, s10) {
      let { demuxer: a10, remuxer: n2 } = this;
      a10 && n2 && (a10.resetInitSegment(e10, t10, i10, r10), n2.resetInitSegment(e10, t10, i10, s10));
    }
    destroy() {
      this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
    }
    transmux(e10, t10, i10, r10, s10) {
      return t10 && "SAMPLE-AES" === t10.method ? this.transmuxSampleAes(e10, t10, i10, r10, s10) : this.transmuxUnencrypted(e10, i10, r10, s10);
    }
    transmuxUnencrypted(e10, t10, i10, r10) {
      let { audioTrack: s10, videoTrack: a10, id3Track: n2, textTrack: l2 } = this.demuxer.demux(e10, t10, false, !this.config.progressive);
      return { remuxResult: this.remuxer.remux(s10, a10, n2, l2, t10, i10, false, this.id), chunkMeta: r10 };
    }
    transmuxSampleAes(e10, t10, i10, r10, s10) {
      return this.demuxer.demuxSampleAes(e10, t10, i10).then((e11) => ({ remuxResult: this.remuxer.remux(e11.audioTrack, e11.videoTrack, e11.id3Track, e11.textTrack, i10, r10, false, this.id), chunkMeta: s10 }));
    }
    configureTransmuxer(e10) {
      let t10, { config: i10, observer: r10, typeSupported: s10 } = this;
      for (let i11 = 0, r11 = rG.length; i11 < r11; i11++) {
        var a10;
        if (null != (a10 = rG[i11].demux) && a10.probe(e10, this.logger)) {
          t10 = rG[i11];
          break;
        }
      }
      if (!t10) return Error("Failed to find demuxer by probing fragment data");
      let n2 = this.demuxer, l2 = this.remuxer, o2 = t10.remux, h2 = t10.demux;
      l2 && l2 instanceof o2 || (this.remuxer = new o2(r10, i10, s10, this.logger)), n2 && n2 instanceof h2 || (this.demuxer = new h2(r10, i10, s10, this.logger), this.probe = h2.probe);
    }
    needsProbing(e10, t10) {
      return !this.demuxer || !this.remuxer || e10 || t10;
    }
    getDecrypter() {
      let e10 = this.decrypter;
      return e10 || (e10 = this.decrypter = new tm(this.config)), e10;
    }
  }
  let rH = (e10) => ({ remuxResult: {}, chunkMeta: e10 });
  function rV(e10) {
    return "then" in e10 && e10.then instanceof Function;
  }
  class rY {
    constructor(e10, t10, i10, r10, s10) {
      this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = e10, this.videoCodec = t10, this.initSegmentData = i10, this.duration = r10, this.defaultInitPts = s10 || null;
    }
  }
  class rj {
    constructor(e10, t10, i10, r10, s10, a10) {
      this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = e10, this.contiguous = t10, this.accurateTimeOffset = i10, this.trackSwitch = r10, this.timeOffset = s10, this.initSegmentChange = a10;
    }
  }
  let rW = 0;
  class rq {
    constructor(e10, t10, i10, r10) {
      this.error = null, this.hls = void 0, this.id = void 0, this.instanceNo = rW++, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.onWorkerMessage = (e11) => {
        let t11 = e11.data, i11 = this.hls;
        if (i11 && null != t11 && t11.event && t11.instanceNo === this.instanceNo) switch (t11.event) {
          case "init": {
            var r11;
            let e12 = null == (r11 = this.workerContext) ? void 0 : r11.objectURL;
            e12 && self.URL.revokeObjectURL(e12);
            break;
          }
          case "transmuxComplete":
            this.handleTransmuxComplete(t11.data);
            break;
          case "flush":
            this.onFlush(t11.data);
            break;
          case "workerLog":
            i11.logger[t11.data.logType] && i11.logger[t11.data.logType](t11.data.message);
            break;
          default:
            t11.data = t11.data || {}, t11.data.frag = this.frag, t11.data.part = this.part, t11.data.id = this.id, i11.trigger(t11.event, t11.data);
        }
      }, this.onWorkerError = (e11) => {
        if (!this.hls) return;
        let t11 = Error(`${e11.message}  (${e11.filename}:${e11.lineno})`);
        this.hls.config.enableWorker = false, this.hls.logger.warn(`Error in "${this.id}" Web Worker, fallback to inline`), this.hls.trigger(y.ERROR, { type: m.OTHER_ERROR, details: p.INTERNAL_EXCEPTION, fatal: false, event: "demuxerWorker", error: t11 });
      };
      const s10 = e10.config;
      this.hls = e10, this.id = t10, this.useWorker = !!s10.enableWorker, this.onTransmuxComplete = i10, this.onFlush = r10;
      const a10 = (e11, t11) => {
        (t11 = t11 || {}).frag = this.frag || void 0, e11 === y.ERROR && (t11.parent = this.id, t11.part = this.part, this.error = t11.error), this.hls.trigger(e11, t11);
      };
      this.observer = new iW(), this.observer.on(y.FRAG_DECRYPTED, a10), this.observer.on(y.ERROR, a10);
      const n2 = eM(s10.preferManagedMediaSource);
      if (this.useWorker && "u" > typeof Worker) {
        const i11 = this.hls.logger;
        if (s10.workerPath || "function" == typeof __HLS_WORKER_BUNDLE__) {
          try {
            s10.workerPath ? (i11.log(`loading Web Worker ${s10.workerPath} for "${t10}"`), this.workerContext = (function(e12) {
              let t11 = iX[e12];
              if (t11) return t11.clientCount++, t11;
              let i12 = new self.URL(e12, self.location.href).href, r11 = { worker: new self.Worker(i12), scriptURL: i12, clientCount: 1 };
              return iX[e12] = r11, r11;
            })(s10.workerPath)) : (i11.log(`injecting Web Worker for "${t10}"`), this.workerContext = (function() {
              let e12 = iX[iq];
              if (e12) return e12.clientCount++, e12;
              let t11 = new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`], { type: "text/javascript" }), i12 = self.URL.createObjectURL(t11), r11 = { worker: new self.Worker(i12), objectURL: i12, clientCount: 1 };
              return iX[iq] = r11, r11;
            })());
            const { worker: e11 } = this.workerContext;
            e11.addEventListener("message", this.onWorkerMessage), e11.addEventListener("error", this.onWorkerError), e11.postMessage({ instanceNo: this.instanceNo, cmd: "init", typeSupported: n2, id: t10, config: eW(s10) });
          } catch (r11) {
            i11.warn(`Error setting up "${t10}" Web Worker, fallback to inline`, r11), this.terminateWorker(), this.error = null, this.transmuxer = new rK(this.observer, n2, s10, "", t10, e10.logger);
          }
          return;
        }
      }
      this.transmuxer = new rK(this.observer, n2, s10, "", t10, e10.logger);
    }
    reset() {
      if (this.frag = null, this.part = null, this.workerContext) {
        let e10 = this.instanceNo;
        this.instanceNo = rW++;
        let t10 = this.hls.config, i10 = eM(t10.preferManagedMediaSource);
        this.workerContext.worker.postMessage({ instanceNo: this.instanceNo, cmd: "reset", resetNo: e10, typeSupported: i10, id: this.id, config: eW(t10) });
      }
    }
    terminateWorker() {
      if (this.workerContext) {
        let { worker: e10 } = this.workerContext;
        this.workerContext = null, e10.removeEventListener("message", this.onWorkerMessage), e10.removeEventListener("error", this.onWorkerError), (function(e11) {
          let t10 = iX[e11 || iq];
          if (t10 && 1 == t10.clientCount--) {
            let { worker: i10, objectURL: r10 } = t10;
            delete iX[e11 || iq], r10 && self.URL.revokeObjectURL(r10), i10.terminate();
          }
        })(this.hls.config.workerPath);
      }
    }
    destroy() {
      if (this.workerContext) this.terminateWorker(), this.onWorkerMessage = this.onWorkerError = null;
      else {
        let e11 = this.transmuxer;
        e11 && (e11.destroy(), this.transmuxer = null);
      }
      let e10 = this.observer;
      e10 && e10.removeAllListeners(), this.frag = null, this.part = null, this.observer = null, this.hls = null;
    }
    push(e10, t10, i10, r10, s10, a10, n2, l2, o2, h2) {
      var d2, u2;
      o2.transmuxing.start = self.performance.now();
      let { instanceNo: f2, transmuxer: c2 } = this, g2 = a10 ? a10.start : s10.start, m2 = s10.decryptdata, p2 = this.frag, y2 = !(p2 && s10.cc === p2.cc), v2 = !(p2 && o2.level === p2.level), E2 = p2 ? o2.sn - p2.sn : -1, T2 = this.part ? o2.part - this.part.index : -1, S2 = 0 === E2 && o2.id > 1 && o2.id === (null == p2 ? void 0 : p2.stats.chunkCount), A2 = !v2 && (1 === E2 || 0 === E2 && (1 === T2 || S2 && T2 <= 0)), L2 = self.performance.now();
      (v2 || E2 || 0 === s10.stats.parsing.start) && (s10.stats.parsing.start = L2), a10 && (T2 || !A2) && (a10.stats.parsing.start = L2);
      let R2 = !(p2 && (null == (d2 = s10.initSegment) ? void 0 : d2.url) === (null == (u2 = p2.initSegment) ? void 0 : u2.url)), b2 = new rj(y2, A2, l2, v2, g2, R2);
      if (!A2 || y2 || R2) {
        this.hls.logger.log(`[transmuxer-interface]: Starting new transmux session for ${s10.type} sn: ${o2.sn}${o2.part > -1 ? " part: " + o2.part : ""} ${this.id === k ? "level" : "track"}: ${o2.level} id: ${o2.id}
        discontinuity: ${y2}
        trackSwitch: ${v2}
        contiguous: ${A2}
        accurateTimeOffset: ${l2}
        timeOffset: ${g2}
        initSegmentChange: ${R2}`);
        let e11 = new rY(i10, r10, t10, n2, h2);
        this.configureTransmuxer(e11);
      }
      if (this.frag = s10, this.part = a10, this.workerContext) this.workerContext.worker.postMessage({ instanceNo: f2, cmd: "demux", data: e10, decryptdata: m2, chunkMeta: o2, state: b2 }, e10 instanceof ArrayBuffer ? [e10] : []);
      else if (c2) {
        let t11 = c2.push(e10, m2, o2, b2);
        rV(t11) ? t11.then((e11) => {
          this.handleTransmuxComplete(e11);
        }).catch((e11) => {
          this.transmuxerError(e11, o2, "transmuxer-interface push error");
        }) : this.handleTransmuxComplete(t11);
      }
    }
    flush(e10) {
      e10.transmuxing.start = self.performance.now();
      let { instanceNo: t10, transmuxer: i10 } = this;
      if (this.workerContext) this.workerContext.worker.postMessage({ instanceNo: t10, cmd: "flush", chunkMeta: e10 });
      else if (i10) {
        let t11 = i10.flush(e10);
        rV(t11) ? t11.then((t12) => {
          this.handleFlushResult(t12, e10);
        }).catch((t12) => {
          this.transmuxerError(t12, e10, "transmuxer-interface flush error");
        }) : this.handleFlushResult(t11, e10);
      }
    }
    transmuxerError(e10, t10, i10) {
      this.hls && (this.error = e10, this.hls.trigger(y.ERROR, { type: m.MEDIA_ERROR, details: p.FRAG_PARSING_ERROR, chunkMeta: t10, frag: this.frag || void 0, part: this.part || void 0, fatal: false, error: e10, err: e10, reason: i10 }));
    }
    handleFlushResult(e10, t10) {
      e10.forEach((e11) => {
        this.handleTransmuxComplete(e11);
      }), this.onFlush(t10);
    }
    configureTransmuxer(e10) {
      let { instanceNo: t10, transmuxer: i10 } = this;
      this.workerContext ? this.workerContext.worker.postMessage({ instanceNo: t10, cmd: "configure", config: e10 }) : i10 && i10.configure(e10);
    }
    handleTransmuxComplete(e10) {
      e10.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(e10);
    }
  }
  class rX extends O {
    constructor(e10, t10) {
      super(t10, e10.logger), this.hls = void 0, this.canLoad = false, this.timer = -1, this.hls = e10;
    }
    destroy() {
      this.clearTimer(), this.hls = this.log = this.warn = null;
    }
    clearTimer() {
      -1 !== this.timer && (self.clearTimeout(this.timer), this.timer = -1);
    }
    startLoad() {
      this.canLoad = true, this.loadPlaylist();
    }
    stopLoad() {
      this.canLoad = false, this.clearTimer();
    }
    switchParams(e10, t10, i10) {
      let r10 = null == t10 ? void 0 : t10.renditionReports;
      if (r10) {
        let s10 = -1;
        for (let i11 = 0; i11 < r10.length; i11++) {
          let a10, n2 = r10[i11];
          try {
            a10 = new self.URL(n2.URI, t10.url).href;
          } catch (e11) {
            this.warn(`Could not construct new URL for Rendition Report: ${e11}`), a10 = n2.URI || "";
          }
          if (a10 === e10) {
            s10 = i11;
            break;
          }
          a10 === e10.substring(0, a10.length) && (s10 = i11);
        }
        if (-1 !== s10) {
          let e11 = r10[s10], a10 = parseInt(e11["LAST-MSN"]) || t10.lastPartSn, n2 = parseInt(e11["LAST-PART"]) || t10.lastPartIndex;
          if (this.hls.config.lowLatencyMode) {
            let e12 = Math.min(t10.age - t10.partTarget, t10.targetduration);
            n2 >= 0 && e12 > t10.partTarget && (n2 += 1);
          }
          return new eV(a10, n2 >= 0 ? n2 : void 0, i10 && eH(i10));
        }
      }
    }
    loadPlaylist(e10) {
      this.clearTimer();
    }
    loadingPlaylist(e10, t10) {
      this.clearTimer();
    }
    shouldLoadPlaylist(e10) {
      return this.canLoad && !!e10 && !!e10.url && (!e10.details || e10.details.live);
    }
    getUrlWithDirectives(e10, t10) {
      if (t10) try {
        return t10.addDirectives(e10);
      } catch (e11) {
        this.warn(`Could not construct new URL with HLS Delivery Directives: ${e11}`);
      }
      return e10;
    }
    playlistLoaded(e10, t10, i10) {
      let { details: r10, stats: s10 } = t10, a10 = self.performance.now(), n2 = s10.loading.first ? Math.max(0, a10 - s10.loading.first) : 0;
      r10.advancedDateTime = Date.now() - n2;
      let l2 = this.hls.config.timelineOffset;
      if (l2 !== r10.appliedTimelineOffset) {
        let e11 = Math.max(l2 || 0, 0);
        r10.appliedTimelineOffset = e11, r10.fragments.forEach((t11) => {
          t11.setStart(t11.playlistOffset + e11);
        });
      }
      if (r10.live || null != i10 && i10.live) {
        let l3, h2, d2, u2 = "levelInfo" in t10 ? t10.levelInfo : t10.track;
        if (r10.reloaded(i10), i10 && r10.fragments.length > 0) {
          !(function(e12, t11, i11) {
            let r11;
            if (e12 === t11) return;
            let s11 = null, a11 = e12.fragments;
            for (let e13 = a11.length - 1; e13 >= 0; e13--) {
              let t12 = a11[e13].initSegment;
              if (t12) {
                s11 = t12;
                break;
              }
            }
            e12.fragmentHint && delete e12.fragmentHint.endPTS, (function(e13, t12, i12) {
              let r12 = t12.skippedSegments, s12 = Math.max(e13.startSN, t12.startSN) - t12.startSN, a12 = +!!e13.fragmentHint + (r12 ? t12.endSN : Math.min(e13.endSN, t12.endSN)) - t12.startSN, n4 = t12.startSN - e13.startSN, l5 = t12.fragmentHint ? t12.fragments.concat(t12.fragmentHint) : t12.fragments, o4 = e13.fragmentHint ? e13.fragments.concat(e13.fragmentHint) : e13.fragments;
              for (let u3 = s12; u3 <= a12; u3++) {
                let s13 = o4[n4 + u3], a13 = l5[u3];
                if (r12 && !a13 && s13 && (a13 = t12.fragments[u3] = s13), s13 && a13) {
                  var h4, d3;
                  i12(s13, a13, u3, l5);
                  let r13 = s13.relurl, n5 = a13.relurl;
                  if (r13 && (h4 = r13) !== (d3 = n5) && d3 && iA(h4) !== iA(d3)) {
                    t12.playlistParsingError = ig(`media sequence mismatch ${a13.sn}:`, e13, t12, s13, a13);
                    return;
                  }
                  if (s13.cc !== a13.cc) {
                    t12.playlistParsingError = ig(`discontinuity sequence mismatch (${s13.cc}!=${a13.cc})`, e13, t12, s13, a13);
                    return;
                  }
                }
              }
            })(e12, t11, (e13, i12, a12, n4) => {
              if ((!t11.startCC || t11.skippedSegments) && i12.cc !== e13.cc) {
                let r12 = e13.cc - i12.cc;
                for (let e14 = a12; e14 < n4.length; e14++) n4[e14].cc += r12;
                t11.endCC = n4[n4.length - 1].cc;
              }
              f(e13.startPTS) && f(e13.endPTS) && (i12.setStart(i12.startPTS = e13.startPTS), i12.startDTS = e13.startDTS, i12.maxStartPTS = e13.maxStartPTS, i12.endPTS = e13.endPTS, i12.endDTS = e13.endDTS, i12.minEndPTS = e13.minEndPTS, i12.setDuration(e13.endPTS - e13.startPTS), i12.duration && (r11 = i12), t11.PTSKnown = t11.alignedSliding = true), e13.hasStreams && (i12.elementaryStreams = e13.elementaryStreams), i12.loader = e13.loader, e13.hasStats && (i12.stats = e13.stats), e13.initSegment && (i12.initSegment = e13.initSegment, s11 = e13.initSegment);
            });
            let n3 = t11.fragments, l4 = t11.fragmentHint ? n3.concat(t11.fragmentHint) : n3;
            if (s11 && l4.forEach((e13) => {
              var t12;
              e13 && (!e13.initSegment || e13.initSegment.relurl === (null == (t12 = s11) ? void 0 : t12.relurl)) && (e13.initSegment = s11);
            }), t11.skippedSegments) {
              if (t11.deltaUpdateFailed = n3.some((e13) => !e13), t11.deltaUpdateFailed) {
                i11.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
                for (let e13 = t11.skippedSegments; e13--; ) n3.shift();
                t11.startSN = n3[0].sn;
              } else {
                t11.canSkipDateRanges && (t11.dateRanges = (function(e13, t12, i12) {
                  let { dateRanges: r13, recentlyRemovedDateranges: s12 } = t12, a12 = w({}, e13);
                  s12 && s12.forEach((e14) => {
                    delete a12[e14];
                  });
                  let n4 = Object.keys(a12).length;
                  return n4 ? (Object.keys(r13).forEach((e14) => {
                    let t13 = a12[e14], s13 = new tC(r13[e14].attr, t13);
                    s13.isValid ? (a12[e14] = s13, t13 || (s13.tagOrder += n4)) : i12.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${eW(r13[e14].attr)}"`);
                  }), a12) : r13;
                })(e12.dateRanges, t11, i11));
                let r12 = e12.fragments.filter((e13) => e13.rawProgramDateTime);
                if (e12.hasProgramDateTime && !t11.hasProgramDateTime) for (let e13 = 1; e13 < l4.length; e13++) null === l4[e13].programDateTime && ia(l4[e13], l4[e13 - 1], r12);
                ie(r12, t11);
              }
              t11.endCC = n3[n3.length - 1].cc;
            }
            if (!t11.startCC) {
              var o3;
              let i12 = iv(e12, t11.startSN - 1);
              t11.startCC = null != (o3 = null == i12 ? void 0 : i12.cc) ? o3 : n3[0].cc;
            }
            (function(e13, t12, i12) {
              if (e13 && t12) {
                let r12 = 0;
                for (let s12 = 0, a12 = e13.length; s12 <= a12; s12++) {
                  let a13 = e13[s12], n4 = t12[s12 + r12];
                  a13 && n4 && a13.index === n4.index && a13.fragment.sn === n4.fragment.sn ? i12(a13, n4) : r12--;
                }
              }
            })(e12.partList, t11.partList, (e13, t12) => {
              t12.elementaryStreams = e13.elementaryStreams, t12.stats = e13.stats;
            }), r11 ? ic(t11, r11, r11.startPTS, r11.endPTS, r11.startDTS, r11.endDTS, i11) : im(e12, t11), n3.length && (t11.totalduration = t11.edge - n3[0].start), t11.driftStartTime = e12.driftStartTime, t11.driftStart = e12.driftStart;
            let h3 = t11.advancedDateTime;
            if (t11.advanced && h3) {
              let e13 = t11.edge;
              t11.driftStart || (t11.driftStartTime = h3, t11.driftStart = e13), t11.driftEndTime = h3, t11.driftEnd = e13;
            } else t11.driftEndTime = e12.driftEndTime, t11.driftEnd = e12.driftEnd, t11.advancedDateTime = e12.advancedDateTime;
            -1 === t11.requestScheduled && (t11.requestScheduled = e12.requestScheduled);
          })(i10, r10, this);
          let e11 = r10.playlistParsingError;
          if (e11) {
            this.warn(e11);
            let i11 = this.hls;
            if (!i11.config.ignorePlaylistParsingErrors) {
              var o2;
              let { networkDetails: a11 } = t10;
              i11.trigger(y.ERROR, { type: m.NETWORK_ERROR, details: p.LEVEL_PARSING_ERROR, fatal: false, url: r10.url, error: e11, reason: e11.message, level: t10.level || void 0, parent: null == (o2 = r10.fragments[0]) ? void 0 : o2.type, networkDetails: a11, stats: s10 });
              return;
            }
            r10.playlistParsingError = null;
          }
        }
        -1 === r10.requestScheduled && (r10.requestScheduled = s10.loading.start);
        let c2 = this.hls.mainForwardBufferInfo, g2 = c2 ? c2.end - c2.len : 0, v2 = (r10.edge - g2) * 1e3, E2 = iy(r10, v2);
        if (r10.requestScheduled + E2 < a10 ? r10.requestScheduled = a10 : r10.requestScheduled += E2, this.log(`live playlist ${e10} ${r10.advanced ? "REFRESHED " + r10.lastPartSn + "-" + r10.lastPartIndex : r10.updated ? "UPDATED" : "MISSED"}`), !this.canLoad || !r10.live) return;
        if (r10.canBlockReload && r10.endSN && r10.advanced) {
          let e11 = this.hls.config.lowLatencyMode, s11 = r10.lastPartSn, n3 = r10.endSN, o3 = r10.lastPartIndex, f2 = s11 === n3;
          -1 !== o3 ? f2 ? (h2 = n3 + 1, d2 = e11 ? 0 : o3) : (h2 = s11, d2 = e11 ? o3 + 1 : r10.maxPartIndex) : h2 = n3 + 1;
          let c3 = r10.age, g3 = c3 + r10.ageHeader, m2 = Math.min(g3 - r10.partTarget, 1.5 * r10.targetduration);
          if (m2 > 0) {
            if (g3 > 3 * r10.targetduration) this.log(`Playlist last advanced ${c3.toFixed(2)}s ago. Omitting segment and part directives.`), h2 = void 0, d2 = void 0;
            else if (null != i10 && i10.tuneInGoal && g3 - r10.partTarget > i10.tuneInGoal) this.warn(`CDN Tune-in goal increased from: ${i10.tuneInGoal} to: ${m2} with playlist age: ${r10.age}`), m2 = 0;
            else {
              let e12 = Math.floor(m2 / r10.targetduration);
              h2 += e12, void 0 !== d2 && (d2 += Math.round(m2 % r10.targetduration / r10.partTarget)), this.log(`CDN Tune-in age: ${r10.ageHeader}s last advanced ${c3.toFixed(2)}s goal: ${m2} skip sn ${e12} to part ${d2}`);
            }
            r10.tuneInGoal = m2;
          }
          if (l3 = this.getDeliveryDirectives(r10, t10.deliveryDirectives, h2, d2), e11 || !f2) {
            r10.requestScheduled = a10, this.loadingPlaylist(u2, l3);
            return;
          }
        } else (r10.canBlockReload || r10.canSkipUntil) && (l3 = this.getDeliveryDirectives(r10, t10.deliveryDirectives, h2, d2));
        l3 && void 0 !== h2 && r10.canBlockReload && (r10.requestScheduled = s10.loading.first + Math.max(E2 - 2 * n2, E2 / 2)), this.scheduleLoading(u2, l3, r10);
      } else this.clearTimer();
    }
    scheduleLoading(e10, t10, i10) {
      let r10 = i10 || e10.details;
      if (!r10) return void this.loadingPlaylist(e10, t10);
      let s10 = self.performance.now(), a10 = r10.requestScheduled;
      if (s10 >= a10) return void this.loadingPlaylist(e10, t10);
      let n2 = a10 - s10;
      this.log(`reload live playlist ${e10.name || e10.bitrate + "bps"} in ${Math.round(n2)} ms`), this.clearTimer(), this.timer = self.setTimeout(() => this.loadingPlaylist(e10, t10), n2);
    }
    getDeliveryDirectives(e10, t10, i10, r10) {
      let s10 = eH(e10);
      return null != t10 && t10.skip && e10.deltaUpdateFailed && (i10 = t10.msn, r10 = t10.part, s10 = ""), new eV(i10, r10, s10);
    }
    checkRetry(e10) {
      let t10 = e10.details, i10 = e8(e10), r10 = e10.errorAction, { action: s10, retryCount: a10 = 0, retryConfig: n2 } = r10 || {}, l2 = !!r10 && !!n2 && (5 === s10 || !r10.resolved && 2 === s10);
      if (l2) {
        var o2;
        if (a10 >= n2.maxNumRetry) return false;
        if (i10 && null != (o2 = e10.context) && o2.deliveryDirectives) this.warn(`Retrying playlist loading ${a10 + 1}/${n2.maxNumRetry} after "${t10}" without delivery-directives`), this.loadPlaylist();
        else {
          let e11 = te(n2, a10);
          this.clearTimer(), this.timer = self.setTimeout(() => this.loadPlaylist(), e11), this.warn(`Retrying playlist loading ${a10 + 1}/${n2.maxNumRetry} after "${t10}" in ${e11}ms`);
        }
        e10.levelRetry = true, r10.resolved = true;
      }
      return l2;
    }
  }
  function rQ(e10, t10) {
    if (e10.length !== t10.length) return false;
    for (let i10 = 0; i10 < e10.length; i10++) if (!rz(e10[i10].attrs, t10[i10].attrs)) return false;
    return true;
  }
  function rz(e10, t10, i10) {
    let r10 = e10["STABLE-RENDITION-ID"];
    return r10 && !i10 ? r10 === t10["STABLE-RENDITION-ID"] : !(i10 || ["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED", "ASSOC-LANGUAGE"]).some((i11) => e10[i11] !== t10[i11]);
  }
  function rZ(e10, t10) {
    return t10.label.toLowerCase() === e10.name.toLowerCase() && (!t10.language || t10.language.toLowerCase() === (e10.lang || "").toLowerCase());
  }
  class rJ {
    constructor(e10) {
      this.tracks = void 0, this.queues = { video: [], audio: [], audiovideo: [] }, this.tracks = e10;
    }
    destroy() {
      this.tracks = this.queues = null;
    }
    append(e10, t10, i10) {
      if (null === this.queues || null === this.tracks) return;
      let r10 = this.queues[t10];
      r10.push(e10), 1 !== r10.length || i10 || this.executeNext(t10);
    }
    appendBlocker(e10) {
      return new Promise((t10) => {
        this.append({ label: "async-blocker", execute: t10, onStart: () => {
        }, onComplete: () => {
        }, onError: () => {
        } }, e10);
      });
    }
    prependBlocker(e10) {
      return new Promise((t10) => {
        this.queues && this.queues[e10].unshift({ label: "async-blocker-prepend", execute: t10, onStart: () => {
        }, onComplete: () => {
        }, onError: () => {
        } });
      });
    }
    removeBlockers() {
      null !== this.queues && [this.queues.video, this.queues.audio, this.queues.audiovideo].forEach((e10) => {
        var t10;
        let i10 = null == (t10 = e10[0]) ? void 0 : t10.label;
        ("async-blocker" === i10 || "async-blocker-prepend" === i10) && (e10[0].execute(), e10.splice(0, 1));
      });
    }
    unblockAudio(e10) {
      null === this.queues || this.queues.audio[0] === e10 && this.shiftAndExecuteNext("audio");
    }
    executeNext(e10) {
      if (null === this.queues || null === this.tracks) return;
      let t10 = this.queues[e10];
      if (t10.length) {
        let r10 = t10[0];
        try {
          r10.execute();
        } catch (s10) {
          var i10;
          if (r10.onError(s10), null === this.queues || null === this.tracks) return;
          let t11 = null == (i10 = this.tracks[e10]) ? void 0 : i10.buffer;
          null != t11 && t11.updating || this.shiftAndExecuteNext(e10);
        }
      }
    }
    shiftAndExecuteNext(e10) {
      null !== this.queues && (this.queues[e10].shift(), this.executeNext(e10));
    }
    current(e10) {
      var t10;
      return (null == (t10 = this.queues) ? void 0 : t10[e10][0]) || null;
    }
    toString() {
      let { queues: e10, tracks: t10 } = this;
      return null === e10 || null === t10 ? "<destroyed>" : `
${this.list("video")}
${this.list("audio")}
${this.list("audiovideo")}}`;
    }
    list(e10) {
      var t10, i10;
      return null != (t10 = this.queues) && t10[e10] || null != (i10 = this.tracks) && i10[e10] ? `${e10}: (${this.listSbInfo(e10)}) ${this.listOps(e10)}` : "";
    }
    listSbInfo(e10) {
      var t10;
      let i10 = null == (t10 = this.tracks) ? void 0 : t10[e10], r10 = null == i10 ? void 0 : i10.buffer;
      return r10 ? `SourceBuffer${r10.updating ? " updating" : ""}${i10.ended ? " ended" : ""}${i10.ending ? " ending" : ""}` : "none";
    }
    listOps(e10) {
      var t10;
      return (null == (t10 = this.queues) ? void 0 : t10[e10].map((e11) => e11.label).join(", ")) || "";
    }
  }
  let r0 = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/, r1 = "HlsJsTrackRemovedError";
  class r2 extends Error {
    constructor(e10) {
      super(e10), this.name = r1;
    }
  }
  function r3(e10) {
    let t10 = e10.querySelectorAll("source");
    [].slice.call(t10).forEach((t11) => {
      e10.removeChild(t11);
    });
  }
  function r4(e10) {
    return +("audio" === e10);
  }
  class r5 {
    constructor(e10) {
      this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = e10, this.autoLevelCapping = 1 / 0, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
    }
    setStreamController(e10) {
      this.streamController = e10;
    }
    destroy() {
      this.hls && this.unregisterListener(), this.timer && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
    }
    registerListeners() {
      let { hls: e10 } = this;
      e10.on(y.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e10.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e10.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e10.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e10.on(y.BUFFER_CODECS, this.onBufferCodecs, this), e10.on(y.MEDIA_DETACHING, this.onMediaDetaching, this);
    }
    unregisterListener() {
      let { hls: e10 } = this;
      e10.off(y.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e10.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e10.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e10.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e10.off(y.BUFFER_CODECS, this.onBufferCodecs, this), e10.off(y.MEDIA_DETACHING, this.onMediaDetaching, this);
    }
    onFpsDropLevelCapping(e10, t10) {
      let i10 = this.hls.levels[t10.droppedLevel];
      this.isLevelAllowed(i10) && this.restrictedLevels.push({ bitrate: i10.bitrate, height: i10.height, width: i10.width });
    }
    onMediaAttaching(e10, t10) {
      this.media = t10.media instanceof HTMLVideoElement ? t10.media : null, this.clientRect = null, this.timer && this.hls.levels.length && this.detectPlayerSize();
    }
    onManifestParsed(e10, t10) {
      let i10 = this.hls;
      this.restrictedLevels = [], this.firstLevel = t10.firstLevel, i10.config.capLevelToPlayerSize && t10.video && this.startCapping();
    }
    onLevelsUpdated(e10, t10) {
      this.timer && f(this.autoLevelCapping) && this.detectPlayerSize();
    }
    onBufferCodecs(e10, t10) {
      this.hls.config.capLevelToPlayerSize && t10.video && this.startCapping();
    }
    onMediaDetaching() {
      this.stopCapping(), this.media = null;
    }
    detectPlayerSize() {
      if (this.media) {
        if (this.mediaHeight <= 0 || this.mediaWidth <= 0) {
          this.clientRect = null;
          return;
        }
        let e10 = this.hls.levels;
        if (e10.length) {
          let t10 = this.hls, i10 = this.getMaxLevel(e10.length - 1);
          i10 !== this.autoLevelCapping && t10.logger.log(`Setting autoLevelCapping to ${i10}: ${e10[i10].height}p@${e10[i10].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`), t10.autoLevelCapping = i10, t10.autoLevelEnabled && t10.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = t10.autoLevelCapping;
        }
      }
    }
    getMaxLevel(e10) {
      let t10 = this.hls.levels;
      if (!t10.length) return -1;
      let i10 = t10.filter((t11, i11) => this.isLevelAllowed(t11) && i11 <= e10);
      return this.clientRect = null, r5.getMaxLevelByMediaSize(i10, this.mediaWidth, this.mediaHeight);
    }
    startCapping() {
      this.timer || (this.autoLevelCapping = 1 / 0, self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
    }
    stopCapping() {
      this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = 1 / 0, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
    }
    getDimensions() {
      if (this.clientRect) return this.clientRect;
      let e10 = this.media, t10 = { width: 0, height: 0 };
      if (e10) {
        let i10 = e10.getBoundingClientRect();
        t10.width = i10.width, t10.height = i10.height, t10.width || t10.height || (t10.width = i10.right - i10.left || e10.width || 0, t10.height = i10.bottom - i10.top || e10.height || 0);
      }
      return this.clientRect = t10, t10;
    }
    get mediaWidth() {
      return this.getDimensions().width * this.contentScaleFactor;
    }
    get mediaHeight() {
      return this.getDimensions().height * this.contentScaleFactor;
    }
    get contentScaleFactor() {
      let e10 = 1;
      if (!this.hls.config.ignoreDevicePixelRatio) try {
        e10 = self.devicePixelRatio;
      } catch (e11) {
      }
      return Math.min(e10, this.hls.config.maxDevicePixelRatio);
    }
    isLevelAllowed(e10) {
      return !this.restrictedLevels.some((t10) => e10.bitrate === t10.bitrate && e10.width === t10.width && e10.height === t10.height);
    }
    static getMaxLevelByMediaSize(e10, t10, i10) {
      if (!(null != e10 && e10.length)) return -1;
      let r10 = (e11, t11) => !t11 || e11.width !== t11.width || e11.height !== t11.height, s10 = e10.length - 1, a10 = Math.max(t10, i10);
      for (let t11 = 0; t11 < e10.length; t11 += 1) {
        let i11 = e10[t11];
        if ((i11.width >= a10 || i11.height >= a10) && r10(i11, e10[t11 + 1])) {
          s10 = t11;
          break;
        }
      }
      return s10;
    }
  }
  class r8 {
    constructor(e10, t10) {
      Array.isArray(e10) && (e10 = e10.map((e11) => e11 instanceof r8 ? e11 : new r8(e11))), this.value = e10, this.params = t10;
    }
  }
  function r6(e10, t10, i10) {
    return Error(`failed to serialize "${Array.isArray(e10) ? JSON.stringify(e10) : e10 instanceof Map ? "Map{}" : e10 instanceof Set ? "Set{}" : "object" == typeof e10 ? JSON.stringify(e10) : String(e10)}" as ${t10}`, { cause: i10 });
  }
  class r9 {
    constructor(e10) {
      this.description = e10;
    }
  }
  let r7 = "Bare Item";
  function se(e10) {
    if (e10 < -999999999999999 || 999999999999999 < e10) throw r6(e10, "Integer");
    return e10.toString();
  }
  let st = /[\x00-\x1f\x7f]+/;
  function si(e10) {
    let t10 = e10.description || e10.toString().slice(7, -1);
    if (false === /^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(t10)) throw r6(t10, "Token");
    return t10;
  }
  function sr(e10) {
    switch (typeof e10) {
      case "number":
        if (!f(e10)) throw r6(e10, r7);
        if (Number.isInteger(e10)) return se(e10);
        let t10 = (function e11(t11, i11) {
          if (t11 < 0) return -e11(-t11, i11);
          let r10 = Math.pow(10, i11);
          if (!(Math.abs(t11 * r10 % 1 - 0.5) < Number.EPSILON)) return Math.round(t11 * r10) / r10;
          {
            let e12 = Math.floor(t11 * r10);
            return (e12 % 2 == 0 ? e12 : e12 + 1) / r10;
          }
        })(e10, 3);
        if (Math.floor(Math.abs(t10)).toString().length > 12) throw r6(e10, "Decimal");
        let i10 = t10.toString();
        return i10.includes(".") ? i10 : `${i10}.0`;
      case "string":
        if (st.test(e10)) throw r6(e10, "String");
        return `"${e10.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
      case "symbol":
        return si(e10);
      case "boolean":
        if ("boolean" != typeof e10) throw r6(e10, "Boolean");
        return e10 ? "?1" : "?0";
      case "object":
        if (e10 instanceof Date) return `@${se(e10.getTime() / 1e3)}`;
        if (e10 instanceof Uint8Array) {
          if (false === ArrayBuffer.isView(e10)) throw r6(e10, "Byte Sequence");
          return `:${btoa(String.fromCharCode(...e10))}:`;
        }
        if (e10 instanceof r9) return si(e10);
      default:
        throw r6(e10, r7);
    }
  }
  function ss(e10) {
    if (false === /^[a-z*][a-z0-9\-_.*]*$/.test(e10)) throw r6(e10, "Key");
    return e10;
  }
  function sa(e10) {
    return null == e10 ? "" : Object.entries(e10).map(([e11, t10]) => true === t10 ? `;${ss(e11)}` : `;${ss(e11)}=${sr(t10)}`).join("");
  }
  function sn(e10) {
    return e10 instanceof r8 ? `${sr(e10.value)}${sa(e10.params)}` : sr(e10);
  }
  function sl(e10, t10) {
    return (function(e11, t11 = { whitespace: true }) {
      if ("object" != typeof e11 || null == e11) throw r6(e11, "Dict");
      let i10 = e11 instanceof Map ? e11.entries() : Object.entries(e11), r10 = (null == t11 ? void 0 : t11.whitespace) ? " " : "";
      return Array.from(i10).map(([e12, t12]) => {
        t12 instanceof r8 == false && (t12 = new r8(t12));
        let i11 = ss(e12);
        if (true === t12.value) i11 += sa(t12.params);
        else if (i11 += "=", Array.isArray(t12.value)) {
          var r11;
          i11 += (r11 = t12, `(${r11.value.map(sn).join(" ")})${sa(r11.params)}`);
        } else i11 += sn(t12);
        return i11;
      }).join(`,${r10}`);
    })(e10, t10);
  }
  let so = "CMCD-Object", sh = "CMCD-Request", sd = "CMCD-Session", su = "CMCD-Status", sf = { br: so, ab: so, d: so, ot: so, tb: so, tpb: so, lb: so, tab: so, lab: so, url: so, pb: sh, bl: sh, tbl: sh, dl: sh, ltc: sh, mtp: sh, nor: sh, nrr: sh, rc: sh, sn: sh, sta: sh, su: sh, ttfb: sh, ttfbb: sh, ttlb: sh, cmsdd: sh, cmsds: sh, smrt: sh, df: sh, cs: sh, ts: sh, cid: sd, pr: sd, sf: sd, sid: sd, st: sd, v: sd, msd: sd, bs: su, bsd: su, cdn: su, rtp: su, bg: su, pt: su, ec: su, e: su }, sc = "event", sg = (e10) => Math.round(e10), sm = (e10, t10) => Array.isArray(e10) ? e10.map((e11) => sm(e11, t10)) : e10 instanceof r8 && "string" == typeof e10.value ? new r8(sm(e10.value, t10), e10.params) : (t10.baseUrl && (e10 = (function(e11, t11) {
    let i10 = new URL(e11), r10 = new URL(t11);
    if (i10.origin !== r10.origin) return e11;
    let s10 = i10.pathname.split("/").slice(1), a10 = r10.pathname.split("/").slice(1, -1);
    for (; s10[0] === a10[0]; ) s10.shift(), a10.shift();
    for (; a10.length; ) a10.shift(), s10.unshift("..");
    return s10.join("/") + i10.search + i10.hash;
  })(e10, t10.baseUrl)), 1 === t10.version ? encodeURIComponent(e10) : e10), sp = (e10) => 100 * sg(e10 / 100), sy = { br: sg, d: sg, bl: sp, dl: sp, mtp: sp, nor: (e10, t10) => {
    let i10 = e10;
    return t10.version >= 2 && (e10 instanceof r8 && "string" == typeof e10.value ? i10 = new r8([e10]) : "string" == typeof e10 && (i10 = [e10])), sm(i10, t10);
  }, rtp: sp, tb: sg }, sv = "request", sE = "response", sT = ["ab", "bg", "bl", "br", "bs", "bsd", "cdn", "cid", "cs", "df", "ec", "lab", "lb", "ltc", "msd", "mtp", "pb", "pr", "pt", "sf", "sid", "sn", "st", "sta", "tab", "tb", "tbl", "tpb", "ts", "v"], sS = ["e"], sA = /^[a-zA-Z0-9-.]+-[a-zA-Z0-9-.]+$/;
  function sL(e10) {
    return sA.test(e10);
  }
  let sR = ["d", "dl", "nor", "ot", "rtp", "su"], sb = ["cmsdd", "cmsds", "rc", "smrt", "ttfb", "ttfbb", "ttlb", "url"], sI = ["bl", "br", "bs", "cid", "d", "dl", "mtp", "nor", "nrr", "ot", "pr", "rtp", "sf", "sid", "st", "su", "tb", "v"];
  function sk(e10) {
    return sI.includes(e10) || sL(e10);
  }
  let sD = { [sE]: function(e10) {
    return sT.includes(e10) || sR.includes(e10) || sb.includes(e10) || sL(e10);
  }, [sc]: function(e10) {
    return sT.includes(e10) || sS.includes(e10) || sL(e10);
  }, [sv]: function(e10) {
    return sT.includes(e10) || sR.includes(e10) || sL(e10);
  } };
  function s_(e10, t10 = {}) {
    let i10 = {};
    if (null == e10 || "object" != typeof e10) return i10;
    let r10 = t10.version || e10.v || 1, s10 = t10.reportingMode || sv, a10 = 1 === r10 ? sk : sD[s10], n2 = Object.keys(e10).filter(a10), l2 = t10.filter;
    "function" == typeof l2 && (n2 = n2.filter(l2));
    let o2 = s10 === sE || s10 === sc;
    o2 && !n2.includes("ts") && n2.push("ts"), r10 > 1 && !n2.includes("v") && n2.push("v");
    let h2 = w({}, sy, t10.formatters), d2 = { version: r10, reportingMode: s10, baseUrl: t10.baseUrl };
    return n2.sort().forEach((t11) => {
      var s11;
      let a11 = e10[t11], n3 = h2[t11];
      if ("function" == typeof n3 && (a11 = n3(a11, d2)), "v" === t11) if (1 === r10) return;
      else a11 = r10;
      ("pr" != t11 || 1 !== a11) && (o2 && "ts" === t11 && !f(a11) && (a11 = Date.now()), ("number" == typeof (s11 = a11) ? f(s11) : null != s11 && "" !== s11 && false !== s11) && (["ot", "sf", "st", "e", "sta"].includes(t11) && "string" == typeof a11 && (a11 = new r9(a11)), i10[t11] = a11));
    }), i10;
  }
  let sP = /CMCD=[^&#]+/;
  function sC(e10, t10, i10, r10) {
    e10 && Object.keys(t10).forEach((s10) => {
      let a10 = e10.filter((e11) => e11.groupId === s10).map((e11) => {
        let a11 = w({}, e11);
        return a11.details = void 0, a11.attrs = new tP(a11.attrs), a11.url = a11.attrs.URI = sw(e11.url, e11.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", i10), a11.groupId = a11.attrs["GROUP-ID"] = t10[s10], a11.attrs["PATHWAY-ID"] = r10, a11;
      });
      e10.push(...a10);
    });
  }
  function sw(e10, t10, i10, r10) {
    let s10, { HOST: a10, PARAMS: n2, [i10]: l2 } = r10;
    t10 && (s10 = null == l2 ? void 0 : l2[t10]) && (e10 = s10);
    let o2 = new self.URL(e10);
    return a10 && !s10 && (o2.host = a10), n2 && Object.keys(n2).sort().forEach((e11) => {
      e11 && o2.searchParams.set(e11, n2[e11]);
    }), o2.href;
  }
  class sx extends O {
    constructor(e10) {
      super("eme", e10.logger), this.hls = void 0, this.config = void 0, this.media = null, this.mediaResolved = void 0, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.mediaKeys = null, this.setMediaKeysQueue = sx.CDMCleanupPromise ? [sx.CDMCleanupPromise] : [], this.bannedKeyIds = {}, this.onMediaEncrypted = (e11) => {
        let { initDataType: t10, initData: i10 } = e11, r10 = `"${e11.type}" event: init data type: "${t10}"`;
        if (this.debug(r10), null !== i10) {
          if (!this.keyFormatPromise) {
            let e12 = Object.keys(this.keySystemAccessPromises);
            e12.length || (e12 = tZ(this.config));
            let t11 = e12.map(tz).filter((e13) => !!e13);
            this.keyFormatPromise = this.getKeyFormatPromise(t11);
          }
          this.keyFormatPromise.then((s10) => {
            let a10, n2 = tQ(s10);
            if ("sinf" !== t10 || n2 !== tH) return void this.log(`Ignoring "${e11.type}" event with init data type: "${t10}" for selected key-system ${n2}`);
            try {
              let e12 = es(new Uint8Array(i10)), t11 = t$(JSON.parse(e12).sinf), r11 = ep(t11);
              if (!r11) throw Error("'schm' box missing or not cbcs/cenc with schi > tenc");
              a10 = new Uint8Array(r11.subarray(8, 24));
            } catch (e12) {
              this.warn(`${r10} Failed to parse sinf: ${e12}`);
              return;
            }
            let l2 = V(a10), { keyIdToKeySessionPromise: o2, mediaKeySessions: h2 } = this, d2 = o2[l2];
            for (let e12 = 0; e12 < h2.length; e12++) {
              let r11 = h2[e12], s11 = r11.decryptdata;
              if (!s11.keyId) continue;
              let n3 = V(s11.keyId);
              if (tx(a10, s11.keyId) || -1 !== s11.uri.replace(/-/g, "").indexOf(l2)) {
                if (!(d2 = o2[n3])) continue;
                if (s11.pssh) break;
                delete o2[n3], s11.pssh = new Uint8Array(i10), s11.keyId = a10, (d2 = o2[l2] = d2.then(() => this.generateRequestWithPreferredKeySession(r11, t10, i10, "encrypted-event-key-match"))).catch((e13) => this.handleError(e13));
                break;
              }
            }
            d2 || this.handleError(Error(`Key ID ${l2} not encountered in playlist. Key-system sessions ${h2.length}.`));
          }).catch((e12) => this.handleError(e12));
        }
      }, this.onWaitingForKey = (e11) => {
        this.log(`"${e11.type}" event`);
      }, this.hls = e10, this.config = e10.config, this.registerListeners();
    }
    destroy() {
      this.onDestroying(), this.onMediaDetached();
      let e10 = this.config;
      e10.requestMediaKeySystemAccessFunc = null, e10.licenseXhrSetup = e10.licenseResponseCallback = void 0, e10.drmSystems = e10.drmSystemOptions = {}, this.hls = this.config = this.keyIdToKeySessionPromise = null, this.onMediaEncrypted = this.onWaitingForKey = null;
    }
    registerListeners() {
      this.hls.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(y.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(y.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(y.MANIFEST_LOADED, this.onManifestLoaded, this), this.hls.on(y.DESTROYING, this.onDestroying, this);
    }
    unregisterListeners() {
      this.hls.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(y.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(y.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), this.hls.off(y.DESTROYING, this.onDestroying, this);
    }
    getLicenseServerUrl(e10) {
      let { drmSystems: t10, widevineLicenseUrl: i10 } = this.config, r10 = null == t10 ? void 0 : t10[e10];
      return r10 ? r10.licenseUrl : e10 === tY && i10 ? i10 : void 0;
    }
    getLicenseServerUrlOrThrow(e10) {
      let t10 = this.getLicenseServerUrl(e10);
      if (void 0 === t10) throw Error(`no license server URL configured for key-system "${e10}"`);
      return t10;
    }
    getServerCertificateUrl(e10) {
      let { drmSystems: t10 } = this.config, i10 = null == t10 ? void 0 : t10[e10];
      if (i10) return i10.serverCertificateUrl;
      this.log(`No Server Certificate in config.drmSystems["${e10}"]`);
    }
    attemptKeySystemAccess(e10) {
      let t10 = this.hls.levels, i10 = (e11, t11, i11) => !!e11 && i11.indexOf(e11) === t11, r10 = t10.map((e11) => e11.audioCodec).filter(i10), s10 = t10.map((e11) => e11.videoCodec).filter(i10);
      return r10.length + s10.length === 0 && s10.push("avc1.42e01e"), new Promise((t11, i11) => {
        let a10 = (e11) => {
          let n2 = e11.shift();
          this.getMediaKeysPromise(n2, r10, s10).then((e12) => t11({ keySystem: n2, mediaKeys: e12 })).catch((t12) => {
            e11.length ? a10(e11) : t12 instanceof sO ? i11(t12) : i11(new sO({ type: m.KEY_SYSTEM_ERROR, details: p.KEY_SYSTEM_NO_ACCESS, error: t12, fatal: true }, t12.message));
          });
        };
        a10(e10);
      });
    }
    requestMediaKeySystemAccess(e10, t10) {
      let { requestMediaKeySystemAccessFunc: i10 } = this.config;
      if ("function" != typeof i10) {
        let e11 = `Configured requestMediaKeySystemAccess is not a function ${i10}`;
        return null === tJ && "http:" === self.location.protocol && (e11 = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`), Promise.reject(Error(e11));
      }
      return i10(e10, t10);
    }
    getMediaKeysPromise(e10, t10, i10) {
      var r10;
      let s10 = (function(e11, t11, i11, r11) {
        var s11, a11, n3, l2;
        let o2;
        switch (e11) {
          case tH:
            o2 = ["cenc", "sinf"];
            break;
          case tY:
          case tV:
            o2 = ["cenc"];
            break;
          case tK:
            o2 = ["cenc", "keyids"];
            break;
          default:
            throw Error(`Unknown key-system: ${e11}`);
        }
        return s11 = o2, a11 = t11, n3 = i11, [{ initDataTypes: s11, persistentState: (l2 = r11).persistentState || "optional", distinctiveIdentifier: l2.distinctiveIdentifier || "optional", sessionTypes: l2.sessionTypes || [l2.sessionType || "temporary"], audioCapabilities: a11.map((e12) => ({ contentType: `audio/mp4; codecs=${e12}`, robustness: l2.audioRobustness || "", encryptionScheme: l2.audioEncryptionScheme || null })), videoCapabilities: n3.map((e12) => ({ contentType: `video/mp4; codecs=${e12}`, robustness: l2.videoRobustness || "", encryptionScheme: l2.videoEncryptionScheme || null })) }];
      })(e10, t10, i10, this.config.drmSystemOptions || {}), a10 = this.keySystemAccessPromises[e10], n2 = null == (r10 = a10) ? void 0 : r10.keySystemAccess;
      if (!n2) {
        this.log(`Requesting encrypted media "${e10}" key-system access with config: ${eW(s10)}`), n2 = this.requestMediaKeySystemAccess(e10, s10);
        let t11 = a10 = this.keySystemAccessPromises[e10] = { keySystemAccess: n2 };
        return n2.catch((t12) => {
          this.log(`Failed to obtain access to key-system "${e10}": ${t12}`);
        }), n2.then((i11) => {
          this.log(`Access for key-system "${i11.keySystem}" obtained`);
          let r11 = this.fetchServerCertificate(e10);
          this.log(`Create media-keys for "${e10}"`);
          let s11 = t11.mediaKeys = i11.createMediaKeys().then((i12) => (this.log(`Media-keys created for "${e10}"`), t11.hasMediaKeys = true, r11.then((t12) => t12 ? this.setMediaKeysServerCertificate(i12, e10, t12) : i12)));
          return s11.catch((t12) => {
            this.error(`Failed to create media-keys for "${e10}"}: ${t12}`);
          }), s11;
        });
      }
      return n2.then(() => a10.mediaKeys);
    }
    createMediaKeySessionContext({ decryptdata: e10, keySystem: t10, mediaKeys: i10 }) {
      this.log(`Creating key-system session "${t10}" keyId: ${V(e10.keyId || [])} keyUri: ${e10.uri}`);
      let r10 = i10.createSession(), s10 = { decryptdata: e10, keySystem: t10, mediaKeys: i10, mediaKeysSession: r10, keyStatus: "status-pending" };
      return this.mediaKeySessions.push(s10), s10;
    }
    renewKeySession(e10) {
      let t10 = e10.decryptdata;
      if (t10.pssh) {
        let i10 = this.createMediaKeySessionContext(e10), r10 = sM(t10);
        this.keyIdToKeySessionPromise[r10] = this.generateRequestWithPreferredKeySession(i10, "cenc", t10.pssh.buffer, "expired");
      } else this.warn("Could not renew expired session. Missing pssh initData.");
      this.removeSession(e10);
    }
    updateKeySession(e10, t10) {
      let i10 = e10.mediaKeysSession;
      return this.log(`Updating key-session "${i10.sessionId}" for keyId ${V(e10.decryptdata.keyId || [])}
      } (data length: ${t10.byteLength})`), i10.update(t10);
    }
    getSelectedKeySystemFormats() {
      return Object.keys(this.keySystemAccessPromises).map((e10) => ({ keySystem: e10, hasMediaKeys: this.keySystemAccessPromises[e10].hasMediaKeys })).filter(({ hasMediaKeys: e10 }) => !!e10).map(({ keySystem: e10 }) => tz(e10)).filter((e10) => !!e10);
    }
    getKeySystemAccess(e10) {
      return this.getKeySystemSelectionPromise(e10).then(({ keySystem: e11, mediaKeys: t10 }) => this.attemptSetMediaKeys(e11, t10));
    }
    selectKeySystem(e10) {
      return new Promise((t10, i10) => {
        this.getKeySystemSelectionPromise(e10).then(({ keySystem: e11 }) => {
          let r10 = tz(e11);
          r10 ? t10(r10) : i10(Error(`Unable to find format for key-system "${e11}"`));
        }).catch(i10);
      });
    }
    selectKeySystemFormat(e10) {
      let t10 = Object.keys(e10.levelkeys || {});
      return this.keyFormatPromise || (this.log(`Selecting key-system from fragment (sn: ${e10.sn} ${e10.type}: ${e10.level}) key formats ${t10.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(t10)), this.keyFormatPromise;
    }
    getKeyFormatPromise(e10) {
      let t10 = tZ(this.config), i10 = e10.map(tQ).filter((e11) => !!e11 && -1 !== t10.indexOf(e11));
      return this.selectKeySystem(i10);
    }
    getKeyStatus(e10) {
      let { mediaKeySessions: t10 } = this;
      for (let s10 = 0; s10 < t10.length; s10++) {
        var i10, r10;
        let a10 = (i10 = e10, r10 = t10[s10], i10.keyId && r10.mediaKeysSession.keyStatuses.has(i10.keyId) ? r10.mediaKeysSession.keyStatuses.get(i10.keyId) : i10.matches(r10.decryptdata) ? r10.keyStatus : void 0);
        if (a10) return a10;
      }
    }
    loadKey(e10) {
      let t10 = e10.keyInfo.decryptdata, i10 = sM(t10), r10 = this.bannedKeyIds[i10];
      if (r10 || "internal-error" === this.getKeyStatus(t10)) {
        let i11 = sF(r10 || "internal-error", t10);
        return this.handleError(i11, e10.frag), Promise.reject(i11);
      }
      let s10 = `(keyId: ${i10} format: "${t10.keyFormat}" method: ${t10.method} uri: ${t10.uri})`;
      this.log(`Starting session for key ${s10}`);
      let a10 = this.keyIdToKeySessionPromise[i10];
      if (!a10) {
        let r11 = this.getKeySystemForKeyPromise(t10).then(({ keySystem: i11, mediaKeys: r12 }) => (this.throwIfDestroyed(), this.log(`Handle encrypted media sn: ${e10.frag.sn} ${e10.frag.type}: ${e10.frag.level} using key ${s10}`), this.attemptSetMediaKeys(i11, r12).then(() => (this.throwIfDestroyed(), this.createMediaKeySessionContext({ keySystem: i11, mediaKeys: r12, decryptdata: t10 }))))).then((e11) => {
          let i11 = t10.pssh ? t10.pssh.buffer : null;
          return this.generateRequestWithPreferredKeySession(e11, "cenc", i11, "playlist-key");
        });
        return r11.catch((t11) => this.handleError(t11, e10.frag)), this.keyIdToKeySessionPromise[i10] = r11, r11;
      }
      return a10.catch((i11) => {
        if (i11 instanceof sO) {
          let r11 = M({}, i11.data);
          "internal-error" === this.getKeyStatus(t10) && (r11.decryptdata = t10);
          let s11 = new sO(r11, i11.message);
          this.handleError(s11, e10.frag);
        }
      }), a10;
    }
    throwIfDestroyed(e10 = "Invalid state") {
      if (!this.hls) throw Error("invalid state");
    }
    handleError(e10, t10) {
      if (this.hls) if (e10 instanceof sO) {
        t10 && (e10.data.frag = t10);
        let i10 = e10.data.decryptdata;
        this.error(`${e10.message}${i10 ? ` (${V(i10.keyId || [])})` : ""}`), this.hls.trigger(y.ERROR, e10.data);
      } else this.error(e10.message), this.hls.trigger(y.ERROR, { type: m.KEY_SYSTEM_ERROR, details: p.KEY_SYSTEM_NO_KEYS, error: e10, fatal: true });
    }
    getKeySystemForKeyPromise(e10) {
      let t10 = sM(e10), i10 = this.keyIdToKeySessionPromise[t10];
      if (!i10) {
        let t11 = tQ(e10.keyFormat), i11 = t11 ? [t11] : tZ(this.config);
        return this.attemptKeySystemAccess(i11);
      }
      return i10;
    }
    getKeySystemSelectionPromise(e10) {
      if (e10.length || (e10 = tZ(this.config)), 0 === e10.length) throw new sO({ type: m.KEY_SYSTEM_ERROR, details: p.KEY_SYSTEM_NO_CONFIGURED_LICENSE, fatal: true }, `Missing key-system license configuration options ${eW({ drmSystems: this.config.drmSystems })}`);
      return this.attemptKeySystemAccess(e10);
    }
    attemptSetMediaKeys(e10, t10) {
      if (this.mediaResolved = void 0, this.mediaKeys === t10) return Promise.resolve();
      let i10 = this.setMediaKeysQueue.slice();
      this.log(`Setting media-keys for "${e10}"`);
      let r10 = Promise.all(i10).then(() => this.media ? this.media.setMediaKeys(t10) : new Promise((e11, i11) => {
        this.mediaResolved = () => {
          if (this.mediaResolved = void 0, !this.media) return i11(Error("Attempted to set mediaKeys without media element attached"));
          this.mediaKeys = t10, this.media.setMediaKeys(t10).then(e11).catch(i11);
        };
      }));
      return this.mediaKeys = t10, this.setMediaKeysQueue.push(r10), r10.then(() => {
        this.log(`Media-keys set for "${e10}"`), i10.push(r10), this.setMediaKeysQueue = this.setMediaKeysQueue.filter((e11) => -1 === i10.indexOf(e11));
      });
    }
    generateRequestWithPreferredKeySession(e10, t10, i10, r10) {
      var s10;
      let a10 = null == (s10 = this.config.drmSystems) || null == (s10 = s10[e10.keySystem]) ? void 0 : s10.generateRequest;
      if (a10) try {
        let r11 = a10.call(this.hls, t10, i10, e10);
        if (!r11) throw Error("Invalid response from configured generateRequest filter");
        t10 = r11.initDataType, i10 = r11.initData ? r11.initData : null, e10.decryptdata.pssh = i10 ? new Uint8Array(i10) : null;
      } catch (e11) {
        if (this.warn(e11.message), this.hls && this.hls.config.debug) throw e11;
      }
      if (null === i10) return this.log(`Skipping key-session request for "${r10}" (no initData)`), Promise.resolve(e10);
      let n2 = sM(e10.decryptdata), l2 = e10.decryptdata.uri;
      this.log(`Generating key-session request for "${r10}" keyId: ${n2} URI: ${l2} (init data type: ${t10} length: ${i10.byteLength})`);
      let o2 = new iW(), h2 = e10._onmessage = (t11) => {
        let i11 = e10.mediaKeysSession;
        if (!i11) return void o2.emit("error", Error("invalid state"));
        let { messageType: r11, message: s11 } = t11;
        this.log(`"${r11}" message event for session "${i11.sessionId}" message size: ${s11.byteLength}`), "license-request" === r11 || "license-renewal" === r11 ? this.renewLicense(e10, s11).catch((e11) => {
          o2.eventNames().length ? o2.emit("error", e11) : this.handleError(e11);
        }) : "license-release" === r11 ? e10.keySystem === tH && this.updateKeySession(e10, tU("acknowledged")).then(() => this.removeSession(e10)).catch((e11) => this.handleError(e11)) : this.warn(`unhandled media key message type "${r11}"`);
      }, d2 = (e11, t11) => {
        let i11;
        t11.keyStatus = e11, e11.startsWith("usable") ? o2.emit("resolved") : "internal-error" === e11 || "output-restricted" === e11 || "output-downscaled" === e11 ? i11 = sF(e11, t11.decryptdata) : "expired" === e11 ? i11 = Error(`key expired (keyId: ${n2})`) : "released" === e11 ? i11 = Error("key released") : "status-pending" === e11 || this.warn(`unhandled key status change "${e11}" (keyId: ${n2})`), i11 && (o2.eventNames().length ? o2.emit("error", i11) : this.handleError(i11));
      }, u2 = e10._onkeystatuseschange = (t11) => {
        if (!e10.mediaKeysSession) return void o2.emit("error", Error("invalid state"));
        let i11 = this.getKeyStatuses(e10);
        if (!Object.keys(i11).some((e11) => "status-pending" !== i11[e11])) return;
        if ("expired" === i11[n2]) {
          this.log(`Expired key ${eW(i11)} in key-session "${e10.mediaKeysSession.sessionId}"`), this.renewKeySession(e10);
          return;
        }
        let r11 = i11[n2];
        if (r11) d2(r11, e10);
        else {
          var s11;
          e10.keyStatusTimeouts || (e10.keyStatusTimeouts = {}), (s11 = e10.keyStatusTimeouts)[n2] || (s11[n2] = self.setTimeout(() => {
            if (!e10.mediaKeysSession || !this.mediaKeys) return;
            let t12 = this.getKeyStatus(e10.decryptdata);
            if (t12 && "status-pending" !== t12) return this.log(`No status for keyId ${n2} in key-session "${e10.mediaKeysSession.sessionId}". Using session key-status ${t12} from other session.`), d2(t12, e10);
            this.log(`key status for ${n2} in key-session "${e10.mediaKeysSession.sessionId}" timed out after 1000ms`), d2(r11 = "internal-error", e10);
          }, 1e3)), this.log(`No status for keyId ${n2} (${eW(i11)}).`);
        }
      };
      iD(e10.mediaKeysSession, "message", h2), iD(e10.mediaKeysSession, "keystatuseschange", u2);
      let f2 = new Promise((e11, t11) => {
        o2.on("error", t11), o2.on("resolved", e11);
      });
      return e10.mediaKeysSession.generateRequest(t10, i10).then(() => {
        this.log(`Request generated for key-session "${e10.mediaKeysSession.sessionId}" keyId: ${n2} URI: ${l2}`);
      }).catch((t11) => {
        throw new sO({ type: m.KEY_SYSTEM_ERROR, details: p.KEY_SYSTEM_NO_SESSION, error: t11, decryptdata: e10.decryptdata, fatal: false }, `Error generating key-session request: ${t11}`);
      }).then(() => f2).catch((t11) => (o2.removeAllListeners(), this.removeSession(e10).then(() => {
        throw t11;
      }))).then(() => (o2.removeAllListeners(), e10));
    }
    getKeyStatuses(e10) {
      let t10 = {};
      return e10.mediaKeysSession.keyStatuses.forEach((i10, r10) => {
        if ("string" == typeof r10 && "object" == typeof i10) {
          let e11 = r10;
          r10 = i10, i10 = e11;
        }
        let s10 = "buffer" in r10 ? new Uint8Array(r10.buffer, r10.byteOffset, r10.byteLength) : new Uint8Array(r10);
        e10.keySystem === tV && 16 === s10.length && (t10[V(s10)] = i10, tB(s10));
        let a10 = V(s10);
        "internal-error" === i10 && (this.bannedKeyIds[a10] = i10), this.log(`key status change "${i10}" for keyStatuses keyId: ${a10} key-session "${e10.mediaKeysSession.sessionId}"`), t10[a10] = i10;
      }), t10;
    }
    fetchServerCertificate(e10) {
      let t10 = this.config, i10 = new t10.loader(t10), r10 = this.getServerCertificateUrl(e10);
      return r10 ? (this.log(`Fetching server certificate for "${e10}"`), new Promise((s10, a10) => {
        let n2 = { responseType: "arraybuffer", url: r10 }, l2 = t10.certLoadPolicy.default, o2 = { loadPolicy: l2, timeout: l2.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 };
        i10.load(n2, o2, { onSuccess: (e11, t11, i11, r11) => {
          s10(e11.data);
        }, onError: (t11, i11, s11, l3) => {
          a10(new sO({ type: m.KEY_SYSTEM_ERROR, details: p.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED, fatal: true, networkDetails: s11, response: M({ url: n2.url, data: void 0 }, t11) }, `"${e10}" certificate request failed (${r10}). Status: ${t11.code} (${t11.text})`));
        }, onTimeout: (t11, i11, s11) => {
          a10(new sO({ type: m.KEY_SYSTEM_ERROR, details: p.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED, fatal: true, networkDetails: s11, response: { url: n2.url, data: void 0 } }, `"${e10}" certificate request timed out (${r10})`));
        }, onAbort: (e11, t11, i11) => {
          a10(Error("aborted"));
        } });
      })) : Promise.resolve();
    }
    setMediaKeysServerCertificate(e10, t10, i10) {
      return new Promise((r10, s10) => {
        e10.setServerCertificate(i10).then((s11) => {
          this.log(`setServerCertificate ${s11 ? "success" : "not supported by CDM"} (${i10.byteLength}) on "${t10}"`), r10(e10);
        }).catch((e11) => {
          s10(new sO({ type: m.KEY_SYSTEM_ERROR, details: p.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED, error: e11, fatal: true }, e11.message));
        });
      });
    }
    renewLicense(e10, t10) {
      return this.requestLicense(e10, new Uint8Array(t10)).then((t11) => this.updateKeySession(e10, new Uint8Array(t11)).catch((t12) => {
        throw new sO({ type: m.KEY_SYSTEM_ERROR, details: p.KEY_SYSTEM_SESSION_UPDATE_FAILED, decryptdata: e10.decryptdata, error: t12, fatal: false }, t12.message);
      }));
    }
    unpackPlayReadyKeyMessage(e10, t10) {
      let i10 = String.fromCharCode.apply(null, new Uint16Array(t10.buffer));
      if (!i10.includes("PlayReadyKeyMessage")) return e10.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), t10;
      let r10 = new DOMParser().parseFromString(i10, "application/xml"), s10 = r10.querySelectorAll("HttpHeader");
      if (s10.length > 0) {
        let t11;
        for (let i11 = 0, r11 = s10.length; i11 < r11; i11++) {
          var a10, n2;
          let r12 = null == (a10 = (t11 = s10[i11]).querySelector("name")) ? void 0 : a10.textContent, l3 = null == (n2 = t11.querySelector("value")) ? void 0 : n2.textContent;
          r12 && l3 && e10.setRequestHeader(r12, l3);
        }
      }
      let l2 = r10.querySelector("Challenge"), o2 = null == l2 ? void 0 : l2.textContent;
      if (!o2) throw Error("Cannot find <Challenge> in key message");
      return tU(atob(o2));
    }
    setupLicenseXHR(e10, t10, i10, r10) {
      let s10 = this.config.licenseXhrSetup;
      return s10 ? Promise.resolve().then(() => {
        if (!i10.decryptdata) throw Error("Key removed");
        return s10.call(this.hls, e10, t10, i10, r10);
      }).catch((a10) => {
        if (!i10.decryptdata) throw a10;
        return e10.open("POST", t10, true), s10.call(this.hls, e10, t10, i10, r10);
      }).then((i11) => (e10.readyState || e10.open("POST", t10, true), { xhr: e10, licenseChallenge: i11 || r10 })) : (e10.open("POST", t10, true), Promise.resolve({ xhr: e10, licenseChallenge: r10 }));
    }
    requestLicense(e10, t10) {
      let i10 = this.config.keyLoadPolicy.default;
      return new Promise((r10, s10) => {
        let a10 = this.getLicenseServerUrlOrThrow(e10.keySystem);
        this.log(`Sending license request to URL: ${a10}`);
        let n2 = new XMLHttpRequest();
        n2.responseType = "arraybuffer", n2.onreadystatechange = () => {
          if (!this.hls || !e10.mediaKeysSession) return s10(Error("invalid state"));
          if (4 === n2.readyState) if (200 === n2.status) {
            this._requestLicenseFailureCount = 0;
            let t11 = n2.response;
            this.log(`License received ${t11 instanceof ArrayBuffer ? t11.byteLength : t11}`);
            let i11 = this.config.licenseResponseCallback;
            if (i11) try {
              t11 = i11.call(this.hls, n2, a10, e10);
            } catch (e11) {
              this.error(e11);
            }
            r10(t11);
          } else {
            let l2 = i10.errorRetry, o2 = l2 ? l2.maxNumRetry : 0;
            if (this._requestLicenseFailureCount++, this._requestLicenseFailureCount > o2 || n2.status >= 400 && n2.status < 500) s10(new sO({ type: m.KEY_SYSTEM_ERROR, details: p.KEY_SYSTEM_LICENSE_REQUEST_FAILED, decryptdata: e10.decryptdata, fatal: true, networkDetails: n2, response: { url: a10, data: void 0, code: n2.status, text: n2.statusText } }, `License Request XHR failed (${a10}). Status: ${n2.status} (${n2.statusText})`));
            else {
              let i11 = o2 - this._requestLicenseFailureCount + 1;
              this.warn(`Retrying license request, ${i11} attempts left`), this.requestLicense(e10, t10).then(r10, s10);
            }
          }
        }, e10.licenseXhr && e10.licenseXhr.readyState !== XMLHttpRequest.DONE && e10.licenseXhr.abort(), e10.licenseXhr = n2, this.setupLicenseXHR(n2, a10, e10, t10).then(({ xhr: t11, licenseChallenge: i11 }) => {
          e10.keySystem == tV && (i11 = this.unpackPlayReadyKeyMessage(t11, i11)), t11.send(i11);
        }).catch(s10);
      });
    }
    onDestroying() {
      this.unregisterListeners(), this._clear();
    }
    onMediaAttached(e10, t10) {
      if (!this.config.emeEnabled) return;
      let i10 = t10.media;
      this.media = i10, iD(i10, "encrypted", this.onMediaEncrypted), iD(i10, "waitingforkey", this.onWaitingForKey);
      let r10 = this.mediaResolved;
      r10 ? r10() : this.mediaKeys = i10.mediaKeys;
    }
    onMediaDetached() {
      let e10 = this.media;
      e10 && (i_(e10, "encrypted", this.onMediaEncrypted), i_(e10, "waitingforkey", this.onWaitingForKey), this.media = null, this.mediaKeys = null);
    }
    _clear() {
      var e10;
      this._requestLicenseFailureCount = 0, this.keyIdToKeySessionPromise = {}, this.bannedKeyIds = {};
      let t10 = this.mediaResolved;
      if (t10 && t10(), !this.mediaKeys && !this.mediaKeySessions.length) return;
      let i10 = this.media, r10 = this.mediaKeySessions.slice();
      this.mediaKeySessions = [], this.mediaKeys = null, t2.clearKeyUriToKeyIdMap();
      let s10 = r10.length;
      sx.CDMCleanupPromise = Promise.all(r10.map((e11) => this.removeSession(e11)).concat((null == i10 || null == (e10 = i10.setMediaKeys(null)) ? void 0 : e10.catch((e11) => {
        this.log(`Could not clear media keys: ${e11}`), this.hls && this.hls.trigger(y.ERROR, { type: m.OTHER_ERROR, details: p.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR, fatal: false, error: Error(`Could not clear media keys: ${e11}`) });
      })) || Promise.resolve())).catch((e11) => {
        this.log(`Could not close sessions and clear media keys: ${e11}`), this.hls && this.hls.trigger(y.ERROR, { type: m.OTHER_ERROR, details: p.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR, fatal: false, error: Error(`Could not close sessions and clear media keys: ${e11}`) });
      }).then(() => {
        s10 && this.log("finished closing key sessions and clearing media keys");
      });
    }
    onManifestLoading() {
      this._clear();
    }
    onManifestLoaded(e10, { sessionKeys: t10 }) {
      if (t10 && this.config.emeEnabled && !this.keyFormatPromise) {
        let e11 = t10.reduce((e12, t11) => (-1 === e12.indexOf(t11.keyFormat) && e12.push(t11.keyFormat), e12), []);
        this.log(`Selecting key-system from session-keys ${e11.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(e11);
      }
    }
    removeSession(e10) {
      let { mediaKeysSession: t10, licenseXhr: i10, decryptdata: r10 } = e10;
      if (t10) {
        var s10;
        this.log(`Remove licenses and keys and close session "${t10.sessionId}" keyId: ${V((null == r10 ? void 0 : r10.keyId) || [])}`), e10._onmessage && (t10.removeEventListener("message", e10._onmessage), e10._onmessage = void 0), e10._onkeystatuseschange && (t10.removeEventListener("keystatuseschange", e10._onkeystatuseschange), e10._onkeystatuseschange = void 0), i10 && i10.readyState !== XMLHttpRequest.DONE && i10.abort(), e10.mediaKeysSession = e10.decryptdata = e10.licenseXhr = void 0;
        let a10 = this.mediaKeySessions.indexOf(e10);
        a10 > -1 && this.mediaKeySessions.splice(a10, 1);
        let { keyStatusTimeouts: n2 } = e10;
        n2 && Object.keys(n2).forEach((e11) => self.clearTimeout(n2[e11]));
        let { drmSystemOptions: l2 } = this.config;
        return (l2 && ("persistent-license" === l2.sessionType || null != (s10 = l2.sessionTypes) && s10.some((e11) => "persistent-license" === e11)) ? new Promise((e11, i11) => {
          self.setTimeout(() => i11(Error("MediaKeySession.remove() timeout")), 8e3), t10.remove().then(e11).catch(i11);
        }) : Promise.resolve()).catch((e11) => {
          this.log(`Could not remove session: ${e11}`), this.hls && this.hls.trigger(y.ERROR, { type: m.OTHER_ERROR, details: p.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR, fatal: false, error: Error(`Could not remove session: ${e11}`) });
        }).then(() => t10.close()).catch((e11) => {
          this.log(`Could not close session: ${e11}`), this.hls && this.hls.trigger(y.ERROR, { type: m.OTHER_ERROR, details: p.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR, fatal: false, error: Error(`Could not close session: ${e11}`) });
        });
      }
      return Promise.resolve();
    }
  }
  function sM(e10) {
    if (!e10) throw Error("Could not read keyId of undefined decryptdata");
    if (null === e10.keyId) throw Error("keyId is null");
    return V(e10.keyId);
  }
  sx.CDMCleanupPromise = void 0;
  class sO extends Error {
    constructor(e10, t10) {
      super(t10), this.data = void 0, e10.error || (e10.error = Error(t10)), this.data = e10, e10.err = e10.error;
    }
  }
  function sF(e10, t10) {
    let i10 = "output-restricted" === e10, r10 = i10 ? p.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED : p.KEY_SYSTEM_STATUS_INTERNAL_ERROR;
    return new sO({ type: m.KEY_SYSTEM_ERROR, details: r10, fatal: false, decryptdata: t10 }, i10 ? "HDCP level output restricted" : `key status changed to "${e10}"`);
  }
  function s$(e10, t10) {
    let i10;
    try {
      i10 = new Event("addtrack");
    } catch (e11) {
      (i10 = document.createEvent("Event")).initEvent("addtrack", false, false);
    }
    i10.track = e10, t10.dispatchEvent(i10);
  }
  function sU(e10, t10) {
    let i10 = e10.mode;
    if ("disabled" === i10 && (e10.mode = "hidden"), e10.cues && !e10.cues.getCueById(t10.id)) try {
      if (e10.addCue(t10), !e10.cues.getCueById(t10.id)) throw Error(`addCue is failed for: ${t10}`);
    } catch (i11) {
      N.debug(`[texttrack-utils]: ${i11}`);
      try {
        let i12 = new self.TextTrackCue(t10.startTime, t10.endTime, t10.text);
        i12.id = t10.id, e10.addCue(i12);
      } catch (e11) {
        N.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${e11}`);
      }
    }
    "disabled" === i10 && (e10.mode = i10);
  }
  function sB(e10, t10) {
    let i10 = e10.mode;
    if ("disabled" === i10 && (e10.mode = "hidden"), e10.cues) for (let i11 = e10.cues.length; i11--; ) t10 && e10.cues[i11].removeEventListener("enter", t10), e10.removeCue(e10.cues[i11]);
    "disabled" === i10 && (e10.mode = i10);
  }
  function sN(e10, t10, i10, r10) {
    let s10 = e10.mode;
    if ("disabled" === s10 && (e10.mode = "hidden"), e10.cues && e10.cues.length > 0) {
      let s11 = (function(e11, t11, i11) {
        let r11 = [], s12 = (function(e12, t12) {
          let i12;
          if (t12 <= e12[0].startTime) return 0;
          let r12 = e12.length - 1;
          if (t12 > e12[r12].endTime) return -1;
          let s13 = 0, a10 = r12;
          for (; s13 <= a10; ) if (t12 < e12[i12 = Math.floor((a10 + s13) / 2)].startTime) a10 = i12 - 1;
          else {
            if (!(t12 > e12[i12].startTime) || !(s13 < r12)) return i12;
            s13 = i12 + 1;
          }
          return e12[s13].startTime - t12 < t12 - e12[a10].startTime ? s13 : a10;
        })(e11, t11);
        if (s12 > -1) for (let a10 = s12, n2 = e11.length; a10 < n2; a10++) {
          let s13 = e11[a10];
          if (s13.startTime >= t11 && s13.endTime <= i11) r11.push(s13);
          else if (s13.startTime > i11) break;
        }
        return r11;
      })(e10.cues, t10, i10);
      for (let t11 = 0; t11 < s11.length; t11++) (!r10 || r10(s11[t11])) && e10.removeCue(s11[t11]);
    }
    "disabled" === s10 && (e10.mode = s10);
  }
  function sG(e10) {
    let t10 = [];
    for (let i10 = 0; i10 < e10.length; i10++) {
      let r10 = e10[i10];
      ("subtitles" === r10.kind || "captions" === r10.kind) && r10.label && t10.push(e10[i10]);
    }
    return t10;
  }
  function sK(e10) {
    let t10 = 5381, i10 = e10.length;
    for (; i10; ) t10 = 33 * t10 ^ e10.charCodeAt(--i10);
    return (t10 >>> 0).toString();
  }
  let sH = ((d = {})[d.Point = 0] = "Point", d[d.Range = 1] = "Range", d);
  class sV {
    constructor(e10, t10) {
      this.base = void 0, this._duration = null, this._timelineStart = null, this.appendInPlaceDisabled = void 0, this.appendInPlaceStarted = void 0, this.dateRange = void 0, this.hasPlayed = false, this.cumulativeDuration = 0, this.resumeOffset = NaN, this.playoutLimit = NaN, this.restrictions = { skip: false, jump: false }, this.snapOptions = { out: false, in: false }, this.assetList = [], this.assetListLoader = void 0, this.assetListResponse = null, this.resumeAnchor = void 0, this.error = void 0, this.resetOnResume = void 0, this.base = t10, this.dateRange = e10, this.setDateRange(e10);
    }
    setDateRange(e10) {
      this.dateRange = e10, this.resumeOffset = e10.attr.optionalFloat("X-RESUME-OFFSET", this.resumeOffset), this.playoutLimit = e10.attr.optionalFloat("X-PLAYOUT-LIMIT", this.playoutLimit), this.restrictions = e10.attr.enumeratedStringList("X-RESTRICT", this.restrictions), this.snapOptions = e10.attr.enumeratedStringList("X-SNAP", this.snapOptions);
    }
    reset() {
      var e10;
      this.appendInPlaceStarted = false, null == (e10 = this.assetListLoader) || e10.destroy(), this.assetListLoader = void 0, this.supplementsPrimary || (this.assetListResponse = null, this.assetList = [], this._duration = null);
    }
    isAssetPastPlayoutLimit(e10) {
      var t10;
      if (e10 > 0 && e10 >= this.assetList.length) return true;
      let i10 = this.playoutLimit;
      return !(e10 <= 0 || isNaN(i10)) && (0 === i10 || ((null == (t10 = this.assetList[e10]) ? void 0 : t10.startOffset) || 0) > i10);
    }
    findAssetIndex(e10) {
      return this.assetList.indexOf(e10);
    }
    get identifier() {
      return this.dateRange.id;
    }
    get startDate() {
      return this.dateRange.startDate;
    }
    get startTime() {
      let e10 = this.dateRange.startTime;
      if (this.snapOptions.out) {
        let t10 = this.dateRange.tagAnchor;
        if (t10) return sY(e10, t10);
      }
      return e10;
    }
    get startOffset() {
      return this.cue.pre ? 0 : this.startTime;
    }
    get startIsAligned() {
      if (0 === this.startTime || this.snapOptions.out) return true;
      let e10 = this.dateRange.tagAnchor;
      if (e10) {
        let t10 = this.dateRange.startTime, i10 = sY(t10, e10);
        return t10 - i10 < 0.1;
      }
      return false;
    }
    get resumptionOffset() {
      let e10 = this.resumeOffset, t10 = f(e10) ? e10 : this.duration;
      return this.cumulativeDuration + t10;
    }
    get resumeTime() {
      let e10 = this.startOffset + this.resumptionOffset;
      if (this.snapOptions.in) {
        let t10 = this.resumeAnchor;
        if (t10) return sY(e10, t10);
      }
      return e10;
    }
    get appendInPlace() {
      return !!this.appendInPlaceStarted || !this.appendInPlaceDisabled && !!(!this.cue.once && !this.cue.pre && this.startIsAligned && (isNaN(this.playoutLimit) && isNaN(this.resumeOffset) || this.resumeOffset && this.duration && 0.025 > Math.abs(this.resumeOffset - this.duration)));
    }
    set appendInPlace(e10) {
      if (this.appendInPlaceStarted) {
        this.resetOnResume = !e10;
        return;
      }
      this.appendInPlaceDisabled = !e10;
    }
    get timelineStart() {
      return null !== this._timelineStart ? this._timelineStart : this.startTime;
    }
    set timelineStart(e10) {
      this._timelineStart = e10;
    }
    get duration() {
      let e10, t10 = this.playoutLimit;
      return e10 = null !== this._duration ? this._duration : this.dateRange.duration ? this.dateRange.duration : this.dateRange.plannedDuration || 0, !isNaN(t10) && t10 < e10 && (e10 = t10), e10;
    }
    set duration(e10) {
      this._duration = e10;
    }
    get cue() {
      return this.dateRange.cue;
    }
    get timelineOccupancy() {
      return "RANGE" === this.dateRange.attr["X-TIMELINE-OCCUPIES"] ? sH.Range : sH.Point;
    }
    get supplementsPrimary() {
      return "PRIMARY" === this.dateRange.attr["X-TIMELINE-STYLE"];
    }
    get contentMayVary() {
      return "NO" !== this.dateRange.attr["X-CONTENT-MAY-VARY"];
    }
    get assetUrl() {
      return this.dateRange.attr["X-ASSET-URI"];
    }
    get assetListUrl() {
      return this.dateRange.attr["X-ASSET-LIST"];
    }
    get baseUrl() {
      return this.base.url;
    }
    get assetListLoaded() {
      return this.assetList.length > 0 || null !== this.assetListResponse;
    }
    toString() {
      var e10;
      return e10 = this, `["${e10.identifier}" ${e10.cue.pre ? "<pre>" : e10.cue.post ? "<post>" : ""}${e10.timelineStart.toFixed(2)}-${e10.resumeTime.toFixed(2)}]`;
    }
  }
  function sY(e10, t10) {
    return e10 - t10.start < t10.duration / 2 && !(0.025 > Math.abs(e10 - (t10.start + t10.duration))) ? t10.start : t10.start + t10.duration;
  }
  function sj(e10, t10, i10) {
    let r10 = new self.URL(e10, i10);
    return "data:" !== r10.protocol && r10.searchParams.set("_HLS_primary_id", t10), r10;
  }
  function sW(e10, t10) {
    for (; null != (i10 = e10.assetList[++t10]) && i10.error; ) var i10;
    return t10;
  }
  function sq(e10) {
    let t10 = e10.timelineStart, i10 = e10.duration || 0;
    return `["${e10.identifier}" ${t10.toFixed(2)}-${(t10 + i10).toFixed(2)}]`;
  }
  class sX {
    constructor(e10, t10, i10, r10) {
      this.hls = void 0, this.interstitial = void 0, this.assetItem = void 0, this.tracks = null, this.hasDetails = false, this.mediaAttached = null, this._currentTime = void 0, this._bufferedEosTime = void 0, this.checkPlayout = () => {
        this.reachedPlayout(this.currentTime) && this.hls && this.hls.trigger(y.PLAYOUT_LIMIT_REACHED, {});
      };
      const s10 = this.hls = new e10(t10);
      this.interstitial = i10, this.assetItem = r10;
      const a10 = () => {
        this.hasDetails = true;
      };
      s10.once(y.LEVEL_LOADED, a10), s10.once(y.AUDIO_TRACK_LOADED, a10), s10.once(y.SUBTITLE_TRACK_LOADED, a10), s10.on(y.MEDIA_ATTACHING, (e11, { media: t11 }) => {
        this.removeMediaListeners(), this.mediaAttached = t11, this.interstitial.playoutLimit && (t11.addEventListener("timeupdate", this.checkPlayout), this.appendInPlace && s10.on(y.BUFFER_APPENDED, () => {
          let e12 = this.bufferedEnd;
          this.reachedPlayout(e12) && (this._bufferedEosTime = e12, s10.trigger(y.BUFFERED_TO_END, void 0));
        }));
      });
    }
    get appendInPlace() {
      return this.interstitial.appendInPlace;
    }
    loadSource() {
      let e10 = this.hls;
      if (e10) if (e10.url) e10.levels.length && !e10.started && e10.startLoad(-1, true);
      else {
        let t10 = this.assetItem.uri;
        try {
          t10 = sj(t10, e10.config.primarySessionId || "").href;
        } catch (e11) {
        }
        e10.loadSource(t10);
      }
    }
    bufferedInPlaceToEnd(e10) {
      var t10;
      if (!this.appendInPlace) return false;
      if (null != (t10 = this.hls) && t10.bufferedToEnd) return true;
      if (!e10) return false;
      let i10 = Math.min(this._bufferedEosTime || 1 / 0, this.duration), r10 = this.timelineOffset, s10 = tR.bufferInfo(e10, r10, 0);
      return this.getAssetTime(s10.end) >= i10 - 0.02;
    }
    reachedPlayout(e10) {
      let t10 = this.interstitial.playoutLimit;
      return this.startOffset + e10 >= t10;
    }
    get destroyed() {
      var e10;
      return !(null != (e10 = this.hls) && e10.userConfig);
    }
    get assetId() {
      return this.assetItem.identifier;
    }
    get interstitialId() {
      return this.assetItem.parentIdentifier;
    }
    get media() {
      var e10;
      return (null == (e10 = this.hls) ? void 0 : e10.media) || null;
    }
    get bufferedEnd() {
      let e10 = this.media || this.mediaAttached;
      if (!e10) return this._bufferedEosTime ? this._bufferedEosTime : this.currentTime;
      let t10 = tR.bufferInfo(e10, e10.currentTime, 1e-3);
      return this.getAssetTime(t10.end);
    }
    get currentTime() {
      let e10 = this.media || this.mediaAttached;
      return e10 ? this.getAssetTime(e10.currentTime) : this._currentTime || 0;
    }
    get duration() {
      let e10 = this.assetItem.duration;
      if (!e10) return 0;
      let t10 = this.interstitial.playoutLimit;
      if (t10) {
        let i10 = t10 - this.startOffset;
        if (i10 > 0 && i10 < e10) return i10;
      }
      return e10;
    }
    get remaining() {
      let e10 = this.duration;
      return e10 ? Math.max(0, e10 - this.currentTime) : 0;
    }
    get startOffset() {
      return this.assetItem.startOffset;
    }
    get timelineOffset() {
      var e10;
      return (null == (e10 = this.hls) ? void 0 : e10.config.timelineOffset) || 0;
    }
    set timelineOffset(e10) {
      let t10 = this.timelineOffset;
      if (e10 !== t10 && Math.abs(e10 - t10) > 1 / 9e4 && this.hls) {
        if (this.hasDetails) throw Error("Cannot set timelineOffset after playlists are loaded");
        this.hls.config.timelineOffset = e10;
      }
    }
    getAssetTime(e10) {
      return Math.min(Math.max(0, e10 - this.timelineOffset), this.duration);
    }
    removeMediaListeners() {
      let e10 = this.mediaAttached;
      e10 && (this._currentTime = e10.currentTime, this.bufferSnapShot(), e10.removeEventListener("timeupdate", this.checkPlayout));
    }
    bufferSnapShot() {
      if (this.mediaAttached) {
        var e10;
        null != (e10 = this.hls) && e10.bufferedToEnd && (this._bufferedEosTime = this.bufferedEnd);
      }
    }
    destroy() {
      this.removeMediaListeners(), this.hls && this.hls.destroy(), this.hls = null, this.tracks = this.mediaAttached = this.checkPlayout = null;
    }
    attachMedia(e10) {
      var t10;
      this.loadSource(), null == (t10 = this.hls) || t10.attachMedia(e10);
    }
    detachMedia() {
      var e10;
      this.removeMediaListeners(), this.mediaAttached = null, null == (e10 = this.hls) || e10.detachMedia();
    }
    resumeBuffering() {
      var e10;
      null == (e10 = this.hls) || e10.resumeBuffering();
    }
    pauseBuffering() {
      var e10;
      null == (e10 = this.hls) || e10.pauseBuffering();
    }
    transferMedia() {
      var e10;
      return this.bufferSnapShot(), (null == (e10 = this.hls) ? void 0 : e10.transferMedia()) || null;
    }
    resetDetails() {
      let e10 = this.hls;
      if (e10 && this.hasDetails) {
        e10.stopLoad();
        let t10 = (e11) => delete e11.details;
        e10.levels.forEach(t10), e10.allAudioTracks.forEach(t10), e10.allSubtitleTracks.forEach(t10), this.hasDetails = false;
      }
    }
    on(e10, t10, i10) {
      var r10;
      null == (r10 = this.hls) || r10.on(e10, t10);
    }
    once(e10, t10, i10) {
      var r10;
      null == (r10 = this.hls) || r10.once(e10, t10);
    }
    off(e10, t10, i10) {
      var r10;
      null == (r10 = this.hls) || r10.off(e10, t10);
    }
    toString() {
      var e10;
      return `HlsAssetPlayer: ${sq(this.assetItem)} ${null == (e10 = this.hls) ? void 0 : e10.sessionId} ${this.appendInPlace ? "append-in-place" : ""}`;
    }
  }
  class sQ extends O {
    constructor(e10, t10) {
      super("interstitials-sched", t10), this.onScheduleUpdate = void 0, this.eventMap = {}, this.events = null, this.items = null, this.durations = { primary: 0, playout: 0, integrated: 0 }, this.onScheduleUpdate = e10;
    }
    destroy() {
      this.reset(), this.onScheduleUpdate = null;
    }
    reset() {
      this.eventMap = {}, this.setDurations(0, 0, 0), this.events && this.events.forEach((e10) => e10.reset()), this.events = this.items = null;
    }
    resetErrorsInRange(e10, t10) {
      return this.events ? this.events.reduce((i10, r10) => e10 <= r10.startOffset && t10 > r10.startOffset ? (delete r10.error, i10 + 1) : i10, 0) : 0;
    }
    get duration() {
      let e10 = this.items;
      return e10 ? e10[e10.length - 1].end : 0;
    }
    get length() {
      return this.items ? this.items.length : 0;
    }
    getEvent(e10) {
      return e10 && this.eventMap[e10] || null;
    }
    hasEvent(e10) {
      return e10 in this.eventMap;
    }
    findItemIndex(e10, t10) {
      if (e10.event) return this.findEventIndex(e10.event.identifier);
      let i10 = -1;
      e10.nextEvent ? i10 = this.findEventIndex(e10.nextEvent.identifier) - 1 : e10.previousEvent && (i10 = this.findEventIndex(e10.previousEvent.identifier) + 1);
      let r10 = this.items;
      if (r10) for (r10[i10] || (void 0 === t10 && (t10 = e10.start), i10 = this.findItemIndexAtTime(t10)); i10 >= 0 && null != (s10 = r10[i10]) && s10.event; ) {
        var s10;
        i10--;
      }
      return i10;
    }
    findItemIndexAtTime(e10, t10) {
      let i10 = this.items;
      if (i10) for (let r10 = 0; r10 < i10.length; r10++) {
        let s10 = i10[r10];
        if (t10 && "primary" !== t10 && (s10 = s10[t10]), e10 === s10.start || e10 > s10.start && e10 < s10.end) return r10;
      }
      return -1;
    }
    findJumpRestrictedIndex(e10, t10) {
      let i10 = this.items;
      if (i10) for (let r10 = e10; r10 <= t10 && i10[r10]; r10++) {
        let e11 = i10[r10].event;
        if (null != e11 && e11.restrictions.jump && !e11.appendInPlace) return r10;
      }
      return -1;
    }
    findEventIndex(e10) {
      let t10 = this.items;
      if (t10) for (let r10 = t10.length; r10--; ) {
        var i10;
        if ((null == (i10 = t10[r10].event) ? void 0 : i10.identifier) === e10) return r10;
      }
      return -1;
    }
    findAssetIndex(e10, t10) {
      let i10 = e10.assetList, r10 = i10.length;
      if (r10 > 1) for (let e11 = 0; e11 < r10; e11++) {
        let s10 = i10[e11];
        if (!s10.error) {
          let i11 = s10.timelineStart;
          if (t10 === i11 || t10 > i11 && (t10 < i11 + (s10.duration || 0) || e11 === r10 - 1)) return e11;
        }
      }
      return 0;
    }
    get assetIdAtEnd() {
      var e10;
      let t10 = null == (e10 = this.items) || null == (e10 = e10[this.length - 1]) ? void 0 : e10.event;
      if (t10) {
        let e11 = t10.assetList, i10 = e11[e11.length - 1];
        if (i10) return i10.identifier;
      }
      return null;
    }
    parseInterstitialDateRanges(e10, t10) {
      let i10 = e10.main.details, { dateRanges: r10 } = i10, s10 = this.events, a10 = this.parseDateRanges(r10, { url: i10.url }, t10), n2 = Object.keys(r10), l2 = s10 ? s10.filter((e11) => !n2.includes(e11.identifier)) : [];
      a10.length && a10.sort((e11, t11) => {
        let i11 = e11.cue.pre, r11 = e11.cue.post, s11 = t11.cue.pre, a11 = t11.cue.post;
        if (i11 && !s11) return -1;
        if (s11 && !i11 || r11 && !a11) return 1;
        if (a11 && !r11) return -1;
        if (!i11 && !s11 && !r11 && !a11) {
          let i12 = e11.startTime, r12 = t11.startTime;
          if (i12 !== r12) return i12 - r12;
        }
        return e11.dateRange.tagOrder - t11.dateRange.tagOrder;
      }), this.events = a10, l2.forEach((e11) => {
        this.removeEvent(e11);
      }), this.updateSchedule(e10, l2);
    }
    updateSchedule(e10, t10 = [], i10 = false) {
      let r10 = this.events || [];
      if (r10.length || t10.length || this.length < 2) {
        let s10 = this.items, a10 = this.parseSchedule(r10, e10);
        (i10 || t10.length || (null == s10 ? void 0 : s10.length) !== a10.length || a10.some((e11, t11) => Math.abs(e11.playout.start - s10[t11].playout.start) > 5e-3 || Math.abs(e11.playout.end - s10[t11].playout.end) > 5e-3)) && (this.items = a10, this.onScheduleUpdate(t10, s10));
      }
    }
    parseDateRanges(e10, t10, i10) {
      let r10 = [], s10 = Object.keys(e10);
      for (let a10 = 0; a10 < s10.length; a10++) {
        let n2 = s10[a10], l2 = e10[n2];
        if (l2.isInterstitial) {
          let e11 = this.eventMap[n2];
          e11 ? e11.setDateRange(l2) : (e11 = new sV(l2, t10), this.eventMap[n2] = e11, false === i10 && (e11.appendInPlace = i10)), r10.push(e11);
        }
      }
      return r10;
    }
    parseSchedule(e10, t10) {
      let i10 = [], r10 = t10.main.details, s10 = r10.live ? 1 / 0 : r10.edge, a10 = 0;
      if ((e10 = e10.filter((e11) => !e11.error && !(e11.cue.once && e11.hasPlayed))).length) {
        this.resolveOffsets(e10, t10);
        let r11 = 0, l2 = 0;
        if (e10.forEach((t11, n3) => {
          let o2 = t11.cue.pre, h2 = t11.cue.post, d2 = e10[n3 - 1] || null, u2 = t11.appendInPlace, f2 = h2 ? s10 : t11.startOffset, c2 = t11.duration, g2 = t11.timelineOccupancy === sH.Range ? c2 : 0, m2 = t11.resumptionOffset, p2 = (null == d2 ? void 0 : d2.startTime) === f2, y2 = f2 + t11.cumulativeDuration, v2 = u2 ? y2 + c2 : f2 + m2;
          if (o2 || !h2 && f2 <= 0) {
            let e11 = l2;
            l2 += g2, t11.timelineStart = y2;
            let r12 = a10;
            a10 += c2, i10.push({ event: t11, start: y2, end: v2, playout: { start: r12, end: a10 }, integrated: { start: e11, end: l2 } });
          } else {
            if (!(f2 <= s10)) return;
            if (!p2) {
              let s11 = f2 - r11;
              if (s11 > 0.033) {
                let o4 = r11, h3 = l2;
                l2 += s11;
                let d3 = a10;
                a10 += s11;
                let u4 = { previousEvent: e10[n3 - 1] || null, nextEvent: t11, start: o4, end: o4 + s11, playout: { start: d3, end: a10 }, integrated: { start: h3, end: l2 } };
                i10.push(u4);
              } else s11 > 0 && d2 && (d2.cumulativeDuration += s11, i10[i10.length - 1].end = f2);
            }
            h2 && (v2 = y2), t11.timelineStart = y2;
            let o3 = l2;
            l2 += g2;
            let u3 = a10;
            a10 += c2, i10.push({ event: t11, start: y2, end: v2, playout: { start: u3, end: a10 }, integrated: { start: o3, end: l2 } });
          }
          let E2 = t11.resumeTime;
          r11 = h2 || E2 > s10 ? s10 : E2;
        }), r11 < s10) {
          var n2;
          let e11 = r11, t11 = l2, o2 = s10 - r11;
          l2 += o2;
          let h2 = a10;
          a10 += o2, i10.push({ previousEvent: (null == (n2 = i10[i10.length - 1]) ? void 0 : n2.event) || null, nextEvent: null, start: r11, end: e11 + o2, playout: { start: h2, end: a10 }, integrated: { start: t11, end: l2 } });
        }
        this.setDurations(s10, a10, l2);
      } else i10.push({ previousEvent: null, nextEvent: null, start: 0, end: s10, playout: { start: 0, end: s10 }, integrated: { start: 0, end: s10 } }), this.setDurations(s10, s10, s10);
      return i10;
    }
    setDurations(e10, t10, i10) {
      this.durations = { primary: e10, playout: t10, integrated: i10 };
    }
    resolveOffsets(e10, t10) {
      let i10 = t10.main.details, r10 = i10.live ? 1 / 0 : i10.edge, s10 = 0, a10 = -1;
      e10.forEach((n2, l2) => {
        let o2 = n2.cue.pre, h2 = n2.cue.post, d2 = o2 ? 0 : h2 ? r10 : n2.startTime;
        this.updateAssetDurations(n2), a10 === d2 ? n2.cumulativeDuration = s10 : (s10 = 0, a10 = d2), !h2 && n2.snapOptions.in && (n2.resumeAnchor = e3(null, i10.fragments, n2.startOffset + n2.resumptionOffset, 0, 0) || void 0), n2.appendInPlace && !n2.appendInPlaceStarted && (this.primaryCanResumeInPlaceAt(n2, t10) || (n2.appendInPlace = false)), !n2.appendInPlace && l2 + 1 < e10.length && e10[l2 + 1].startTime - e10[l2].resumeTime < 0.033 && (e10[l2 + 1].appendInPlace = false, e10[l2 + 1].appendInPlace && this.warn(`Could not change append strategy for abutting event ${n2}`));
        let u2 = f(n2.resumeOffset) ? n2.resumeOffset : n2.duration;
        s10 += u2;
      });
    }
    primaryCanResumeInPlaceAt(e10, t10) {
      let i10 = e10.resumeTime, r10 = e10.startTime + e10.resumptionOffset;
      return Math.abs(i10 - r10) > 0.025 ? (this.log(`"${e10.identifier}" resumption ${i10} not aligned with estimated timeline end ${r10}`), false) : !Object.keys(t10).some((r11) => {
        let s10 = t10[r11].details, a10 = s10.edge;
        if (i10 >= a10) return this.log(`"${e10.identifier}" resumption ${i10} past ${r11} playlist end ${a10}`), false;
        let n2 = e3(null, s10.fragments, i10);
        if (!n2) return this.log(`"${e10.identifier}" resumption ${i10} does not align with any fragments in ${r11} playlist (${s10.fragStart}-${s10.fragmentEnd})`), true;
        let l2 = 0.175 * ("audio" === r11);
        return !(Math.abs(n2.start - i10) < 0.025 + l2 || Math.abs(n2.end - i10) < 0.025 + l2) && (this.log(`"${e10.identifier}" resumption ${i10} not aligned with ${r11} fragment bounds (${n2.start}-${n2.end} sn: ${n2.sn} cc: ${n2.cc})`), true);
      });
    }
    updateAssetDurations(e10) {
      if (!e10.assetListLoaded) return;
      let t10 = e10.timelineStart, i10 = 0, r10 = false, s10 = false;
      for (let a10 = 0; a10 < e10.assetList.length; a10++) {
        let n2 = e10.assetList[a10], l2 = t10 + i10;
        n2.startOffset = i10, n2.timelineStart = l2, r10 || (r10 = null === n2.duration), s10 || (s10 = !!n2.error), i10 += n2.error ? 0 : n2.duration || 0;
      }
      r10 && !s10 ? e10.duration = Math.max(i10, e10.duration) : e10.duration = i10;
    }
    removeEvent(e10) {
      e10.reset(), delete this.eventMap[e10.identifier];
    }
  }
  function sz(e10) {
    return `[${e10.event ? '"' + e10.event.identifier + '"' : "primary"}: ${e10.start.toFixed(2)}-${e10.end.toFixed(2)}]`;
  }
  class sZ {
    constructor(e10) {
      this.hls = void 0, this.hls = e10;
    }
    destroy() {
      this.hls = null;
    }
    loadAssetList(e10, t10) {
      let i10, r10 = e10.assetListUrl;
      try {
        i10 = sj(r10, this.hls.sessionId, e10.baseUrl);
      } catch (i11) {
        let t11 = this.assignAssetListError(e10, p.ASSET_LIST_LOAD_ERROR, i11, r10);
        this.hls.trigger(y.ERROR, t11);
        return;
      }
      t10 && "data:" !== i10.protocol && i10.searchParams.set("_HLS_start_offset", "" + t10);
      let s10 = this.hls.config, a10 = new s10.loader(s10), n2 = { responseType: "json", url: i10.href }, l2 = s10.interstitialAssetListLoadPolicy.default, o2 = { loadPolicy: l2, timeout: l2.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 };
      return a10.load(n2, o2, { onSuccess: (t11, i11, r11, s11) => {
        let a11 = t11.data;
        if (!Array.isArray(null == a11 ? void 0 : a11.ASSETS)) {
          let t12 = this.assignAssetListError(e10, p.ASSET_LIST_PARSING_ERROR, Error("Invalid interstitial asset list"), r11.url, i11, s11);
          this.hls.trigger(y.ERROR, t12);
          return;
        }
        e10.assetListResponse = a11, this.hls.trigger(y.ASSET_LIST_LOADED, { event: e10, assetListResponse: a11, networkDetails: s11 });
      }, onError: (t11, i11, r11, s11) => {
        let a11 = this.assignAssetListError(e10, p.ASSET_LIST_LOAD_ERROR, Error(`Error loading X-ASSET-LIST: HTTP status ${t11.code} ${t11.text} (${i11.url})`), i11.url, s11, r11);
        this.hls.trigger(y.ERROR, a11);
      }, onTimeout: (t11, i11, r11) => {
        let s11 = this.assignAssetListError(e10, p.ASSET_LIST_LOAD_TIMEOUT, Error(`Timeout loading X-ASSET-LIST (${i11.url})`), i11.url, t11, r11);
        this.hls.trigger(y.ERROR, s11);
      } }), this.hls.trigger(y.ASSET_LIST_LOADING, { event: e10 }), a10;
    }
    assignAssetListError(e10, t10, i10, r10, s10, a10) {
      return e10.error = i10, { type: m.NETWORK_ERROR, details: t10, fatal: false, interstitial: e10, url: r10, error: i10, networkDetails: a10, stats: s10 };
    }
  }
  function sJ(e10) {
    var t10;
    null == e10 || null == (t10 = e10.play()) || t10.catch(() => {
    });
  }
  function s0(e10, t10) {
    return `[${e10}] Advancing timeline position to ${t10}`;
  }
  class s1 {
    constructor(e10) {
      this.buffered = void 0;
      const t10 = (t11, i10, r10) => {
        if ((i10 >>>= 0) > r10 - 1) throw new DOMException(`Failed to execute '${t11}' on 'TimeRanges': The index provided (${i10}) is greater than the maximum bound (${r10})`);
        return e10[i10][t11];
      };
      this.buffered = { get length() {
        return e10.length;
      }, end: (i10) => t10("end", i10, e10.length), start: (i10) => t10("start", i10, e10.length) };
    }
  }
  let s2 = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 128: 174, 129: 176, 130: 189, 131: 191, 132: 8482, 133: 162, 134: 163, 135: 9834, 136: 224, 137: 32, 138: 232, 139: 226, 140: 234, 141: 238, 142: 244, 143: 251, 144: 193, 145: 201, 146: 211, 147: 218, 148: 220, 149: 252, 150: 8216, 151: 161, 152: 42, 153: 8217, 154: 9473, 155: 169, 156: 8480, 157: 8226, 158: 8220, 159: 8221, 160: 192, 161: 194, 162: 199, 163: 200, 164: 202, 165: 203, 166: 235, 167: 206, 168: 207, 169: 239, 170: 212, 171: 217, 172: 249, 173: 219, 174: 171, 175: 187, 176: 195, 177: 227, 178: 205, 179: 204, 180: 236, 181: 210, 182: 242, 183: 213, 184: 245, 185: 123, 186: 125, 187: 92, 188: 94, 189: 95, 190: 124, 191: 8764, 192: 196, 193: 228, 194: 214, 195: 246, 196: 223, 197: 165, 198: 164, 199: 9475, 200: 197, 201: 229, 202: 216, 203: 248, 204: 9487, 205: 9491, 206: 9495, 207: 9499 }, s3 = (e10) => String.fromCharCode(s2[e10] || e10), s4 = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 }, s5 = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 }, s8 = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 }, s6 = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 }, s9 = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
  class s7 {
    constructor() {
      this.time = null, this.verboseLevel = 0;
    }
    log(e10, t10) {
      if (this.verboseLevel >= e10) {
        let i10 = "function" == typeof t10 ? t10() : t10;
        N.log(`${this.time} [${e10}] ${i10}`);
      }
    }
  }
  let ae = function(e10) {
    let t10 = [];
    for (let i10 = 0; i10 < e10.length; i10++) t10.push(e10[i10].toString(16));
    return t10;
  };
  class at {
    constructor() {
      this.foreground = "white", this.underline = false, this.italics = false, this.background = "black", this.flash = false;
    }
    reset() {
      this.foreground = "white", this.underline = false, this.italics = false, this.background = "black", this.flash = false;
    }
    setStyles(e10) {
      let t10 = ["foreground", "underline", "italics", "background", "flash"];
      for (let i10 = 0; i10 < t10.length; i10++) {
        let r10 = t10[i10];
        e10.hasOwnProperty(r10) && (this[r10] = e10[r10]);
      }
    }
    isDefault() {
      return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash;
    }
    equals(e10) {
      return this.foreground === e10.foreground && this.underline === e10.underline && this.italics === e10.italics && this.background === e10.background && this.flash === e10.flash;
    }
    copy(e10) {
      this.foreground = e10.foreground, this.underline = e10.underline, this.italics = e10.italics, this.background = e10.background, this.flash = e10.flash;
    }
    toString() {
      return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
    }
  }
  class ai {
    constructor() {
      this.uchar = " ", this.penState = new at();
    }
    reset() {
      this.uchar = " ", this.penState.reset();
    }
    setChar(e10, t10) {
      this.uchar = e10, this.penState.copy(t10);
    }
    setPenState(e10) {
      this.penState.copy(e10);
    }
    equals(e10) {
      return this.uchar === e10.uchar && this.penState.equals(e10.penState);
    }
    copy(e10) {
      this.uchar = e10.uchar, this.penState.copy(e10.penState);
    }
    isEmpty() {
      return " " === this.uchar && this.penState.isDefault();
    }
  }
  class ar {
    constructor(e10) {
      this.chars = [], this.pos = 0, this.currPenState = new at(), this.cueStartTime = null, this.logger = void 0;
      for (let e11 = 0; e11 < 100; e11++) this.chars.push(new ai());
      this.logger = e10;
    }
    equals(e10) {
      for (let t10 = 0; t10 < 100; t10++) if (!this.chars[t10].equals(e10.chars[t10])) return false;
      return true;
    }
    copy(e10) {
      for (let t10 = 0; t10 < 100; t10++) this.chars[t10].copy(e10.chars[t10]);
    }
    isEmpty() {
      let e10 = true;
      for (let t10 = 0; t10 < 100; t10++) if (!this.chars[t10].isEmpty()) {
        e10 = false;
        break;
      }
      return e10;
    }
    setCursor(e10) {
      this.pos !== e10 && (this.pos = e10), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > 100 && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = 100);
    }
    moveCursor(e10) {
      let t10 = this.pos + e10;
      if (e10 > 1) for (let e11 = this.pos + 1; e11 < t10 + 1; e11++) this.chars[e11].setPenState(this.currPenState);
      this.setCursor(t10);
    }
    backSpace() {
      this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
    }
    insertChar(e10) {
      e10 >= 144 && this.backSpace();
      let t10 = s3(e10);
      this.pos >= 100 ? this.logger.log(0, () => "Cannot insert " + e10.toString(16) + " (" + t10 + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t10, this.currPenState), this.moveCursor(1));
    }
    clearFromPos(e10) {
      let t10;
      for (t10 = e10; t10 < 100; t10++) this.chars[t10].reset();
    }
    clear() {
      this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
    }
    clearToEndOfRow() {
      this.clearFromPos(this.pos);
    }
    getTextString() {
      let e10 = [], t10 = true;
      for (let i10 = 0; i10 < 100; i10++) {
        let r10 = this.chars[i10].uchar;
        " " !== r10 && (t10 = false), e10.push(r10);
      }
      return t10 ? "" : e10.join("");
    }
    setPenStyles(e10) {
      this.currPenState.setStyles(e10), this.chars[this.pos].setPenState(this.currPenState);
    }
  }
  class as {
    constructor(e10) {
      this.rows = [], this.currRow = 14, this.nrRollUpRows = null, this.lastOutputScreen = null, this.logger = void 0;
      for (let t10 = 0; t10 < 15; t10++) this.rows.push(new ar(e10));
      this.logger = e10;
    }
    reset() {
      for (let e10 = 0; e10 < 15; e10++) this.rows[e10].clear();
      this.currRow = 14;
    }
    equals(e10) {
      let t10 = true;
      for (let i10 = 0; i10 < 15; i10++) if (!this.rows[i10].equals(e10.rows[i10])) {
        t10 = false;
        break;
      }
      return t10;
    }
    copy(e10) {
      for (let t10 = 0; t10 < 15; t10++) this.rows[t10].copy(e10.rows[t10]);
    }
    isEmpty() {
      let e10 = true;
      for (let t10 = 0; t10 < 15; t10++) if (!this.rows[t10].isEmpty()) {
        e10 = false;
        break;
      }
      return e10;
    }
    backSpace() {
      this.rows[this.currRow].backSpace();
    }
    clearToEndOfRow() {
      this.rows[this.currRow].clearToEndOfRow();
    }
    insertChar(e10) {
      this.rows[this.currRow].insertChar(e10);
    }
    setPen(e10) {
      this.rows[this.currRow].setPenStyles(e10);
    }
    moveCursor(e10) {
      this.rows[this.currRow].moveCursor(e10);
    }
    setCursor(e10) {
      this.logger.log(2, "setCursor: " + e10), this.rows[this.currRow].setCursor(e10);
    }
    setPAC(e10) {
      this.logger.log(2, () => "pacData = " + eW(e10));
      let t10 = e10.row - 1;
      if (this.nrRollUpRows && t10 < this.nrRollUpRows - 1 && (t10 = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t10) {
        for (let e12 = 0; e12 < 15; e12++) this.rows[e12].clear();
        let e11 = this.currRow + 1 - this.nrRollUpRows, i11 = this.lastOutputScreen;
        if (i11) {
          let r11 = i11.rows[e11].cueStartTime, s10 = this.logger.time;
          if (null !== r11 && null !== s10 && r11 < s10) for (let r12 = 0; r12 < this.nrRollUpRows; r12++) this.rows[t10 - this.nrRollUpRows + r12 + 1].copy(i11.rows[e11 + r12]);
        }
      }
      this.currRow = t10;
      let i10 = this.rows[this.currRow];
      if (null !== e10.indent) {
        let t11 = Math.max(e10.indent - 1, 0);
        i10.setCursor(e10.indent), e10.color = i10.chars[t11].penState.foreground;
      }
      let r10 = { foreground: e10.color, underline: e10.underline, italics: e10.italics, background: "black", flash: false };
      this.setPen(r10);
    }
    setBkgData(e10) {
      this.logger.log(2, () => "bkgData = " + eW(e10)), this.backSpace(), this.setPen(e10), this.insertChar(32);
    }
    setRollUpRows(e10) {
      this.nrRollUpRows = e10;
    }
    rollUp() {
      if (null === this.nrRollUpRows) return void this.logger.log(3, "roll_up but nrRollUpRows not set yet");
      this.logger.log(1, () => this.getDisplayText());
      let e10 = this.currRow + 1 - this.nrRollUpRows, t10 = this.rows.splice(e10, 1)[0];
      t10.clear(), this.rows.splice(this.currRow, 0, t10), this.logger.log(2, "Rolling up");
    }
    getDisplayText(e10) {
      e10 = e10 || false;
      let t10 = [], i10 = "", r10 = -1;
      for (let i11 = 0; i11 < 15; i11++) {
        let s10 = this.rows[i11].getTextString();
        s10 && (r10 = i11 + 1, e10 ? t10.push("Row " + r10 + ": '" + s10 + "'") : t10.push(s10.trim()));
      }
      return t10.length > 0 && (i10 = e10 ? "[" + t10.join(" | ") + "]" : t10.join("\n")), i10;
    }
    getTextAndFormat() {
      return this.rows;
    }
  }
  class aa {
    constructor(e10, t10, i10) {
      this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = e10, this.outputFilter = t10, this.mode = null, this.verbose = 0, this.displayedMemory = new as(i10), this.nonDisplayedMemory = new as(i10), this.lastOutputScreen = new as(i10), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = i10;
    }
    reset() {
      this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
    }
    getHandler() {
      return this.outputFilter;
    }
    setHandler(e10) {
      this.outputFilter = e10;
    }
    setPAC(e10) {
      this.writeScreen.setPAC(e10);
    }
    setBkgData(e10) {
      this.writeScreen.setBkgData(e10);
    }
    setMode(e10) {
      e10 !== this.mode && (this.mode = e10, this.logger.log(2, () => "MODE=" + e10), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e10);
    }
    insertChars(e10) {
      for (let t11 = 0; t11 < e10.length; t11++) this.writeScreen.insertChar(e10[t11]);
      let t10 = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
      this.logger.log(2, () => t10 + ": " + this.writeScreen.getDisplayText(true)), ("MODE_PAINT-ON" === this.mode || "MODE_ROLL-UP" === this.mode) && (this.logger.log(1, () => "DISPLAYED: " + this.displayedMemory.getDisplayText(true)), this.outputDataUpdate());
    }
    ccRCL() {
      this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
    }
    ccBS() {
      this.logger.log(2, "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
    }
    ccAOF() {
    }
    ccAON() {
    }
    ccDER() {
      this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
    }
    ccRU(e10) {
      this.logger.log(2, "RU(" + e10 + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e10);
    }
    ccFON() {
      this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({ flash: true });
    }
    ccRDC() {
      this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
    }
    ccTR() {
      this.logger.log(2, "TR"), this.setMode("MODE_TEXT");
    }
    ccRTD() {
      this.logger.log(2, "RTD"), this.setMode("MODE_TEXT");
    }
    ccEDM() {
      this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(true);
    }
    ccCR() {
      this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(true);
    }
    ccENM() {
      this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
    }
    ccEOC() {
      if (this.logger.log(2, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
        let e10 = this.displayedMemory;
        this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e10, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, () => "DISP: " + this.displayedMemory.getDisplayText());
      }
      this.outputDataUpdate(true);
    }
    ccTO(e10) {
      this.logger.log(2, "TO(" + e10 + ") - Tab Offset"), this.writeScreen.moveCursor(e10);
    }
    ccMIDROW(e10) {
      let t10 = { flash: false };
      (t10.underline = e10 % 2 == 1, t10.italics = e10 >= 46, t10.italics) ? t10.foreground = "white" : t10.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][Math.floor(e10 / 2) - 16], this.logger.log(2, "MIDROW: " + eW(t10)), this.writeScreen.setPen(t10);
    }
    outputDataUpdate(e10 = false) {
      let t10 = this.logger.time;
      null !== t10 && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t10, this.lastOutputScreen), e10 && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t10) : this.cueStartTime = t10, this.lastOutputScreen.copy(this.displayedMemory));
    }
    cueSplitAtTime(e10) {
      this.outputFilter && !this.displayedMemory.isEmpty() && (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e10, this.displayedMemory), this.cueStartTime = e10);
    }
  }
  class an {
    constructor(e10, t10, i10) {
      this.channels = void 0, this.currentChannel = 0, this.cmdHistory = { a: null, b: null }, this.logger = void 0;
      const r10 = this.logger = new s7();
      this.channels = [null, new aa(e10, t10, r10), new aa(e10 + 1, i10, r10)];
    }
    getHandler(e10) {
      return this.channels[e10].getHandler();
    }
    setHandler(e10, t10) {
      this.channels[e10].setHandler(t10);
    }
    addData(e10, t10) {
      this.logger.time = e10;
      for (let e11 = 0; e11 < t10.length; e11 += 2) {
        var i10, r10, s10, a10, n2, l2, o2, h2;
        let d2 = 127 & t10[e11], u2 = 127 & t10[e11 + 1], f2 = false, c2 = null;
        if (0 === d2 && 0 === u2) continue;
        this.logger.log(3, () => "[" + ae([t10[e11], t10[e11 + 1]]) + "] -> (" + ae([d2, u2]) + ")");
        let g2 = this.cmdHistory;
        if (d2 >= 16 && d2 <= 31) {
          if (i10 = d2, r10 = u2, (s10 = g2).a === i10 && s10.b === r10) {
            (a10 = g2).a = null, a10.b = null, this.logger.log(3, () => "Repeated command (" + ae([d2, u2]) + ") is dropped");
            continue;
          }
          n2 = d2, l2 = u2, (o2 = this.cmdHistory).a = n2, o2.b = l2, (f2 = this.parseCmd(d2, u2)) || (f2 = this.parseMidrow(d2, u2)), f2 || (f2 = this.parsePAC(d2, u2)), f2 || (f2 = this.parseBackgroundAttributes(d2, u2));
        } else {
          (h2 = g2).a = null, h2.b = null;
        }
        if (!f2 && (c2 = this.parseChars(d2, u2))) {
          let e12 = this.currentChannel;
          e12 && e12 > 0 ? this.channels[e12].insertChars(c2) : this.logger.log(2, "No channel found yet. TEXT-MODE?");
        }
        f2 || c2 || this.logger.log(2, () => "Couldn't parse cleaned data " + ae([d2, u2]) + " orig: " + ae([t10[e11], t10[e11 + 1]]));
      }
    }
    parseCmd(e10, t10) {
      if (!((20 === e10 || 28 === e10 || 21 === e10 || 29 === e10) && t10 >= 32 && t10 <= 47 || (23 === e10 || 31 === e10) && t10 >= 33 && t10 <= 35)) return false;
      let i10 = 20 === e10 || 21 === e10 || 23 === e10 ? 1 : 2, r10 = this.channels[i10];
      return 20 === e10 || 21 === e10 || 28 === e10 || 29 === e10 ? 32 === t10 ? r10.ccRCL() : 33 === t10 ? r10.ccBS() : 34 === t10 ? r10.ccAOF() : 35 === t10 ? r10.ccAON() : 36 === t10 ? r10.ccDER() : 37 === t10 ? r10.ccRU(2) : 38 === t10 ? r10.ccRU(3) : 39 === t10 ? r10.ccRU(4) : 40 === t10 ? r10.ccFON() : 41 === t10 ? r10.ccRDC() : 42 === t10 ? r10.ccTR() : 43 === t10 ? r10.ccRTD() : 44 === t10 ? r10.ccEDM() : 45 === t10 ? r10.ccCR() : 46 === t10 ? r10.ccENM() : 47 === t10 && r10.ccEOC() : r10.ccTO(t10 - 32), this.currentChannel = i10, true;
    }
    parseMidrow(e10, t10) {
      let i10 = 0;
      if ((17 === e10 || 25 === e10) && t10 >= 32 && t10 <= 47) {
        if ((i10 = 17 === e10 ? 1 : 2) !== this.currentChannel) return this.logger.log(0, "Mismatch channel in midrow parsing"), false;
        let r10 = this.channels[i10];
        return !!r10 && (r10.ccMIDROW(t10), this.logger.log(3, () => "MIDROW (" + ae([e10, t10]) + ")"), true);
      }
      return false;
    }
    parsePAC(e10, t10) {
      let i10, r10 = (e10 >= 17 && e10 <= 23 || e10 >= 25 && e10 <= 31) && t10 >= 64 && t10 <= 127, s10 = (16 === e10 || 24 === e10) && t10 >= 64 && t10 <= 95;
      if (!(r10 || s10)) return false;
      let a10 = e10 <= 23 ? 1 : 2;
      i10 = t10 >= 64 && t10 <= 95 ? 1 === a10 ? s4[e10] : s8[e10] : 1 === a10 ? s5[e10] : s6[e10];
      let n2 = this.channels[a10];
      return !!n2 && (n2.setPAC(this.interpretPAC(i10, t10)), this.currentChannel = a10, true);
    }
    interpretPAC(e10, t10) {
      let i10, r10 = { color: null, italics: false, indent: null, underline: false, row: e10 };
      return r10.underline = (1 & (i10 = t10 > 95 ? t10 - 96 : t10 - 64)) == 1, i10 <= 13 ? r10.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(i10 / 2)] : i10 <= 15 ? (r10.italics = true, r10.color = "white") : r10.indent = 4 * Math.floor((i10 - 16) / 2), r10;
    }
    parseChars(e10, t10) {
      let i10, r10 = null, s10 = null;
      if (e10 >= 25 ? (i10 = 2, s10 = e10 - 8) : (i10 = 1, s10 = e10), s10 >= 17 && s10 <= 19) {
        let e11;
        e11 = 17 === s10 ? t10 + 80 : 18 === s10 ? t10 + 112 : t10 + 144, this.logger.log(2, () => "Special char '" + s3(e11) + "' in channel " + i10), r10 = [e11];
      } else e10 >= 32 && e10 <= 127 && (r10 = 0 === t10 ? [e10] : [e10, t10]);
      return r10 && this.logger.log(3, () => "Char codes =  " + ae(r10).join(",")), r10;
    }
    parseBackgroundAttributes(e10, t10) {
      if (!((16 === e10 || 24 === e10) && t10 >= 32 && t10 <= 47 || (23 === e10 || 31 === e10) && t10 >= 45 && t10 <= 47)) return false;
      let i10 = {};
      return 16 === e10 || 24 === e10 ? (i10.background = s9[Math.floor((t10 - 32) / 2)], t10 % 2 == 1 && (i10.background = i10.background + "_semi")) : 45 === t10 ? i10.background = "transparent" : (i10.foreground = "black", 47 === t10 && (i10.underline = true)), this.channels[e10 <= 23 ? 1 : 2].setBkgData(i10), true;
    }
    reset() {
      var e10;
      for (let e11 = 0; e11 < Object.keys(this.channels).length; e11++) {
        let t10 = this.channels[e11];
        t10 && t10.reset();
      }
      (e10 = this.cmdHistory).a = null, e10.b = null;
    }
    cueSplitAtTime(e10) {
      for (let t10 = 0; t10 < this.channels.length; t10++) {
        let i10 = this.channels[t10];
        i10 && i10.cueSplitAtTime(e10);
      }
    }
  }
  var al = (function() {
    if (null != tG && tG.VTTCue) return self.VTTCue;
    let e10 = ["", "lr", "rl"], t10 = ["start", "middle", "end", "left", "right"];
    function i10(e11, t11) {
      if ("string" != typeof t11 || !Array.isArray(e11)) return false;
      let i11 = t11.toLowerCase();
      return !!~e11.indexOf(i11) && i11;
    }
    function r10(e11) {
      let t11 = 1;
      for (; t11 < arguments.length; t11++) {
        let i11 = arguments[t11];
        for (let t12 in i11) e11[t12] = i11[t12];
      }
      return e11;
    }
    function s10(s11, a10, n2) {
      let l2 = { enumerable: true };
      this.hasBeenReset = false;
      let o2 = "", h2 = false, d2 = s11, u2 = a10, f2 = n2, c2 = null, g2 = "", m2 = true, p2 = "auto", y2 = "start", v2 = 50, E2 = "middle", T2 = 50, S2 = "middle";
      Object.defineProperty(this, "id", r10({}, l2, { get: function() {
        return o2;
      }, set: function(e11) {
        o2 = "" + e11;
      } })), Object.defineProperty(this, "pauseOnExit", r10({}, l2, { get: function() {
        return h2;
      }, set: function(e11) {
        h2 = !!e11;
      } })), Object.defineProperty(this, "startTime", r10({}, l2, { get: function() {
        return d2;
      }, set: function(e11) {
        if ("number" != typeof e11) throw TypeError("Start time must be set to a number.");
        d2 = e11, this.hasBeenReset = true;
      } })), Object.defineProperty(this, "endTime", r10({}, l2, { get: function() {
        return u2;
      }, set: function(e11) {
        if ("number" != typeof e11) throw TypeError("End time must be set to a number.");
        u2 = e11, this.hasBeenReset = true;
      } })), Object.defineProperty(this, "text", r10({}, l2, { get: function() {
        return f2;
      }, set: function(e11) {
        f2 = "" + e11, this.hasBeenReset = true;
      } })), Object.defineProperty(this, "region", r10({}, l2, { get: function() {
        return c2;
      }, set: function(e11) {
        c2 = e11, this.hasBeenReset = true;
      } })), Object.defineProperty(this, "vertical", r10({}, l2, { get: function() {
        return g2;
      }, set: function(t11) {
        let r11 = i10(e10, t11);
        if (false === r11) throw SyntaxError("An invalid or illegal string was specified.");
        g2 = r11, this.hasBeenReset = true;
      } })), Object.defineProperty(this, "snapToLines", r10({}, l2, { get: function() {
        return m2;
      }, set: function(e11) {
        m2 = !!e11, this.hasBeenReset = true;
      } })), Object.defineProperty(this, "line", r10({}, l2, { get: function() {
        return p2;
      }, set: function(e11) {
        if ("number" != typeof e11 && "auto" !== e11) throw SyntaxError("An invalid number or illegal string was specified.");
        p2 = e11, this.hasBeenReset = true;
      } })), Object.defineProperty(this, "lineAlign", r10({}, l2, { get: function() {
        return y2;
      }, set: function(e11) {
        let r11 = i10(t10, e11);
        if (!r11) throw SyntaxError("An invalid or illegal string was specified.");
        y2 = r11, this.hasBeenReset = true;
      } })), Object.defineProperty(this, "position", r10({}, l2, { get: function() {
        return v2;
      }, set: function(e11) {
        if (e11 < 0 || e11 > 100) throw Error("Position must be between 0 and 100.");
        v2 = e11, this.hasBeenReset = true;
      } })), Object.defineProperty(this, "positionAlign", r10({}, l2, { get: function() {
        return E2;
      }, set: function(e11) {
        let r11 = i10(t10, e11);
        if (!r11) throw SyntaxError("An invalid or illegal string was specified.");
        E2 = r11, this.hasBeenReset = true;
      } })), Object.defineProperty(this, "size", r10({}, l2, { get: function() {
        return T2;
      }, set: function(e11) {
        if (e11 < 0 || e11 > 100) throw Error("Size must be between 0 and 100.");
        T2 = e11, this.hasBeenReset = true;
      } })), Object.defineProperty(this, "align", r10({}, l2, { get: function() {
        return S2;
      }, set: function(e11) {
        let r11 = i10(t10, e11);
        if (!r11) throw SyntaxError("An invalid or illegal string was specified.");
        S2 = r11, this.hasBeenReset = true;
      } })), this.displayState = void 0;
    }
    return s10.prototype.getCueAsHTML = function() {
      return self.WebVTT.convertCueToDOMTree(self, this.text);
    }, s10;
  })();
  class ao {
    decode(e10, t10) {
      if (!e10) return "";
      if ("string" != typeof e10) throw Error("Error - expected string data.");
      return decodeURIComponent(encodeURIComponent(e10));
    }
  }
  function ah(e10) {
    function t10(e11, t11, i11, r10) {
      return (0 | e11) * 3600 + (0 | t11) * 60 + (0 | i11) + parseFloat(r10 || 0);
    }
    let i10 = e10.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
    return i10 ? parseFloat(i10[2]) > 59 ? t10(i10[2], i10[3], 0, i10[4]) : t10(i10[1], i10[2], i10[3], i10[4]) : null;
  }
  class ad {
    constructor() {
      this.values = /* @__PURE__ */ Object.create(null);
    }
    set(e10, t10) {
      this.get(e10) || "" === t10 || (this.values[e10] = t10);
    }
    get(e10, t10, i10) {
      return i10 ? this.has(e10) ? this.values[e10] : t10[i10] : this.has(e10) ? this.values[e10] : t10;
    }
    has(e10) {
      return e10 in this.values;
    }
    alt(e10, t10, i10) {
      for (let r10 = 0; r10 < i10.length; ++r10) if (t10 === i10[r10]) {
        this.set(e10, t10);
        break;
      }
    }
    integer(e10, t10) {
      /^-?\d+$/.test(t10) && this.set(e10, parseInt(t10, 10));
    }
    percent(e10, t10) {
      if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t10)) {
        let i10 = parseFloat(t10);
        if (i10 >= 0 && i10 <= 100) return this.set(e10, i10), true;
      }
      return false;
    }
  }
  function au(e10, t10, i10, r10) {
    let s10 = r10 ? e10.split(r10) : [e10];
    for (let e11 in s10) {
      if ("string" != typeof s10[e11]) continue;
      let r11 = s10[e11].split(i10);
      if (2 === r11.length) t10(r11[0], r11[1]);
    }
  }
  let af = new al(0, 0, ""), ac = "middle" === af.align ? "middle" : "center";
  function ag(e10) {
    return e10.replace(/<br(?: \/)?>/gi, "\n");
  }
  class am {
    constructor() {
      this.state = "INITIAL", this.buffer = "", this.decoder = new ao(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
    }
    parse(e10) {
      let t10 = this;
      function i10() {
        let e11 = t10.buffer, i11 = 0;
        for (e11 = ag(e11); i11 < e11.length && "\r" !== e11[i11] && "\n" !== e11[i11]; ) ++i11;
        let r11 = e11.slice(0, i11);
        return "\r" === e11[i11] && ++i11, "\n" === e11[i11] && ++i11, t10.buffer = e11.slice(i11), r11;
      }
      e10 && (t10.buffer += t10.decoder.decode(e10, { stream: true }));
      try {
        let e11 = "";
        if ("INITIAL" === t10.state) {
          if (!/\r\n|\n/.test(t10.buffer)) return this;
          let r11 = (e11 = i10()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
          if (!(null != r11 && r11[0])) throw Error("Malformed WebVTT signature.");
          t10.state = "HEADER";
        }
        let s10 = false;
        for (; t10.buffer && /\r\n|\n/.test(t10.buffer); ) switch (s10 ? s10 = false : e11 = i10(), t10.state) {
          case "HEADER":
            if (/:/.test(e11)) {
              var r10;
              r10 = e11, au(r10, function(e12, t11) {
              }, /:/);
            } else e11 || (t10.state = "ID");
            continue;
          case "NOTE":
            e11 || (t10.state = "ID");
            continue;
          case "ID":
            if (/^NOTE($|[ \t])/.test(e11)) {
              t10.state = "NOTE";
              break;
            }
            if (!e11) continue;
            if (t10.cue = new al(0, 0, ""), t10.state = "CUE", -1 === e11.indexOf("-->")) {
              t10.cue.id = e11;
              continue;
            }
          case "CUE":
            if (!t10.cue) {
              t10.state = "BADCUE";
              continue;
            }
            try {
              !(function(e12, t11, i11) {
                var r11;
                let s11, a10, n2, l2 = e12;
                function o2() {
                  let t12 = ah(e12);
                  if (null === t12) throw Error("Malformed timestamp: " + l2);
                  return e12 = e12.replace(/^[^\sa-zA-Z-]+/, ""), t12;
                }
                function h2() {
                  e12 = e12.replace(/^\s+/, "");
                }
                if (h2(), t11.startTime = o2(), h2(), "-->" !== e12.slice(0, 3)) throw Error("Malformed time stamp (time stamps must be separated by '-->'): " + l2);
                e12 = e12.slice(3), h2(), t11.endTime = o2(), h2(), r11 = e12, s11 = new ad(), au(r11, function(e13, t12) {
                  let r12;
                  switch (e13) {
                    case "region":
                      for (let r13 = i11.length - 1; r13 >= 0; r13--) if (i11[r13].id === t12) {
                        s11.set(e13, i11[r13].region);
                        break;
                      }
                      break;
                    case "vertical":
                      s11.alt(e13, t12, ["rl", "lr"]);
                      break;
                    case "line":
                      r12 = t12.split(","), s11.integer(e13, r12[0]), s11.percent(e13, r12[0]) && s11.set("snapToLines", false), s11.alt(e13, r12[0], ["auto"]), 2 === r12.length && s11.alt("lineAlign", r12[1], ["start", ac, "end"]);
                      break;
                    case "position":
                      r12 = t12.split(","), s11.percent(e13, r12[0]), 2 === r12.length && s11.alt("positionAlign", r12[1], ["start", ac, "end", "line-left", "line-right", "auto"]);
                      break;
                    case "size":
                      s11.percent(e13, t12);
                      break;
                    case "align":
                      s11.alt(e13, t12, ["start", ac, "end", "left", "right"]);
                  }
                }, /:/, /\s/), t11.region = s11.get("region", null), t11.vertical = s11.get("vertical", ""), "auto" === (a10 = s11.get("line", "auto")) && -1 === af.line && (a10 = -1), t11.line = a10, t11.lineAlign = s11.get("lineAlign", "start"), t11.snapToLines = s11.get("snapToLines", true), t11.size = s11.get("size", 100), t11.align = s11.get("align", ac), "auto" === (n2 = s11.get("position", "auto")) && 50 === af.position && (n2 = "start" === t11.align || "left" === t11.align ? 0 : "end" === t11.align || "right" === t11.align ? 100 : 50), t11.position = n2;
              })(e11, t10.cue, t10.regionList);
            } catch (e12) {
              t10.cue = null, t10.state = "BADCUE";
              continue;
            }
            t10.state = "CUETEXT";
            continue;
          case "CUETEXT":
            {
              let i11 = -1 !== e11.indexOf("-->");
              if (!e11 || i11 && (s10 = true)) {
                t10.oncue && t10.cue && t10.oncue(t10.cue), t10.cue = null, t10.state = "ID";
                continue;
              }
              if (null === t10.cue) continue;
              t10.cue.text && (t10.cue.text += "\n"), t10.cue.text += e11;
            }
            continue;
          case "BADCUE":
            e11 || (t10.state = "ID");
        }
      } catch (e11) {
        "CUETEXT" === t10.state && t10.cue && t10.oncue && t10.oncue(t10.cue), t10.cue = null, t10.state = "INITIAL" === t10.state ? "BADWEBVTT" : "BADCUE";
      }
      return this;
    }
    flush() {
      try {
        if ((this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state || "BADWEBVTT" === this.state) throw Error("Malformed WebVTT signature.");
      } catch (e10) {
        this.onparsingerror && this.onparsingerror(e10);
      }
      return this.onflush && this.onflush(), this;
    }
  }
  let ap = /\r\n|\n\r|\n|\r/g, ay = function(e10, t10, i10 = 0) {
    return e10.slice(i10, i10 + t10.length) === t10;
  }, av = function(e10) {
    let t10 = parseInt(e10.slice(-3)), i10 = parseInt(e10.slice(-6, -4)), r10 = parseInt(e10.slice(-9, -7)), s10 = e10.length > 9 ? parseInt(e10.substring(0, e10.indexOf(":"))) : 0;
    if (!f(t10) || !f(i10) || !f(r10) || !f(s10)) throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e10}`);
    return t10 += 1e3 * i10, t10 += 6e4 * r10, t10 += 36e5 * s10;
  };
  function aE(e10, t10, i10) {
    return sK(e10.toString()) + sK(t10.toString()) + sK(i10);
  }
  let aT = function(e10, t10, i10) {
    let r10 = e10[t10], s10 = e10[r10.prevCC];
    if (!s10 || !s10.new && r10.new) {
      e10.ccOffset = e10.presentationOffset = r10.start, r10.new = false;
      return;
    }
    for (; null != (a10 = s10) && a10.new; ) {
      var a10;
      e10.ccOffset += r10.start - s10.start, r10.new = false, s10 = e10[(r10 = s10).prevCC];
    }
    e10.presentationOffset = i10;
  }, aS = "stpp.ttml.im1t", aA = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, aL = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, aR = { left: "start", center: "center", right: "end", start: "start", end: "end" };
  function ab(e10, t10, i10, r10) {
    let s10 = eh(new Uint8Array(e10), ["mdat"]);
    if (0 === s10.length) return void r10(Error("Could not parse IMSC1 mdat"));
    let a10 = s10.map((e11) => H(e11)), n2 = (function(e11, t11 = 1, i11 = false) {
      return r_(e11, 1, 1 / t11, i11);
    })(t10.baseTime, t10.timescale);
    try {
      a10.forEach((e11) => i10((function(e12, t11) {
        let i11 = new DOMParser().parseFromString(e12, "text/xml").getElementsByTagName("tt")[0];
        if (!i11) throw Error("Invalid ttml");
        let r11 = { frameRate: 30, subFrameRate: 1, frameRateMultiplier: 0, tickRate: 0 }, s11 = Object.keys(r11).reduce((e13, t12) => (e13[t12] = i11.getAttribute(`ttp:${t12}`) || r11[t12], e13), {}), a11 = "preserve" !== i11.getAttribute("xml:space"), n3 = ak(aI(i11, "styling", "style")), l2 = ak(aI(i11, "layout", "region")), o2 = aI(i11, "body", "[begin]");
        return [].map.call(o2, (e13) => {
          var i12, r12, o3;
          let h2, d2, u2, f2 = (function e14(t12, i13) {
            return [].slice.call(t12.childNodes).reduce((t13, r13, s12) => {
              var a12;
              return "br" === r13.nodeName && s12 ? t13 + "\n" : null != (a12 = r13.childNodes) && a12.length ? e14(r13, i13) : i13 ? t13 + r13.textContent.trim().replace(/\s+/g, " ") : t13 + r13.textContent;
            }, "");
          })(e13, a11);
          if (!f2 || !e13.hasAttribute("begin")) return null;
          let c2 = aP(e13.getAttribute("begin"), s11), g2 = aP(e13.getAttribute("dur"), s11), m2 = aP(e13.getAttribute("end"), s11);
          if (null === c2) throw a_(e13);
          if (null === m2) {
            if (null === g2) throw a_(e13);
            m2 = c2 + g2;
          }
          let p2 = new al(c2 - t11, m2 - t11, f2);
          p2.id = aE(p2.startTime, p2.endTime, p2.text);
          let y2 = (i12 = l2[e13.getAttribute("region")], r12 = n3[e13.getAttribute("style")], o3 = n3, h2 = "http://www.w3.org/ns/ttml#styling", d2 = null, (u2 = null != i12 && i12.hasAttribute("style") ? i12.getAttribute("style") : null) && o3.hasOwnProperty(u2) && (d2 = o3[u2]), ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"].reduce((e14, t12) => {
            let s12 = aD(r12, h2, t12) || aD(i12, h2, t12) || aD(d2, h2, t12);
            return s12 && (e14[t12] = s12), e14;
          }, {})), { textAlign: v2 } = y2;
          if (v2) {
            let e14 = aR[v2];
            e14 && (p2.lineAlign = e14), p2.align = v2;
          }
          return w(p2, y2), p2;
        }).filter((e13) => null !== e13);
      })(e11, n2)));
    } catch (e11) {
      r10(e11);
    }
  }
  function aI(e10, t10, i10) {
    let r10 = e10.getElementsByTagName(t10)[0];
    return r10 ? [].slice.call(r10.querySelectorAll(i10)) : [];
  }
  function ak(e10) {
    return e10.reduce((e11, t10) => {
      let i10 = t10.getAttribute("xml:id");
      return i10 && (e11[i10] = t10), e11;
    }, {});
  }
  function aD(e10, t10, i10) {
    return e10 && e10.hasAttributeNS(t10, i10) ? e10.getAttributeNS(t10, i10) : null;
  }
  function a_(e10) {
    return Error(`Could not parse ttml timestamp ${e10}`);
  }
  function aP(e10, t10) {
    var i10, r10;
    let s10, a10;
    if (!e10) return null;
    let n2 = ah(e10);
    return null === n2 && (aA.test(e10) ? (i10 = e10, r10 = t10, a10 = (0 | (s10 = aA.exec(i10))[4]) + (0 | s10[5]) / r10.subFrameRate, n2 = (0 | s10[1]) * 3600 + (0 | s10[2]) * 60 + (0 | s10[3]) + a10 / r10.frameRate) : aL.test(e10) && (n2 = (function(e11, t11) {
      let i11 = aL.exec(e11), r11 = Number(i11[1]);
      switch (i11[2]) {
        case "h":
          return 3600 * r11;
        case "m":
          return 60 * r11;
        case "ms":
          return 1e3 * r11;
        case "f":
          return r11 / t11.frameRate;
        case "t":
          return r11 / t11.tickRate;
      }
      return r11;
    })(e10, t10))), n2;
  }
  class aC {
    constructor(e10, t10) {
      this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = e10, this.trackName = t10;
    }
    dispatchCue() {
      null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null);
    }
    newCue(e10, t10, i10) {
      (null === this.startTime || this.startTime > e10) && (this.startTime = e10), this.endTime = t10, this.screen = i10, this.timelineController.createCaptionsTrack(this.trackName);
    }
    reset() {
      this.cueRanges = [], this.startTime = null;
    }
  }
  function aw(e10) {
    return e10.characteristics && /transcribes-spoken-dialog/gi.test(e10.characteristics) && /describes-music-and-sound/gi.test(e10.characteristics) ? "captions" : "subtitles";
  }
  function ax(e10, t10) {
    return !!e10 && e10.kind === aw(t10) && rZ(t10, e10);
  }
  function aM() {
    return { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: true } };
  }
  let aO = /\s/, aF = { newCue(e10, t10, i10, r10) {
    let s10, a10, n2, l2, o2, h2 = [], d2 = self.VTTCue || self.TextTrackCue;
    for (let f2 = 0; f2 < r10.rows.length; f2++) if (s10 = r10.rows[f2], n2 = true, l2 = 0, o2 = "", !s10.isEmpty()) {
      var u2;
      for (let e11 = 0; e11 < s10.chars.length; e11++) aO.test(s10.chars[e11].uchar) && n2 ? l2++ : (o2 += s10.chars[e11].uchar, n2 = false);
      s10.cueStartTime = t10, t10 === i10 && (i10 += 1e-4), l2 >= 16 ? l2-- : l2++;
      let r11 = ag(o2.trim()), c2 = aE(t10, i10, r11);
      null != e10 && null != (u2 = e10.cues) && u2.getCueById(c2) || ((a10 = new d2(t10, i10, r11)).id = c2, a10.line = f2 + 1, a10.align = "left", a10.position = 10 + Math.min(80, 10 * Math.floor(8 * l2 / 32)), h2.push(a10));
    }
    return e10 && h2.length && (h2.sort((e11, t11) => "auto" === e11.line || "auto" === t11.line ? 0 : e11.line > 8 && t11.line > 8 ? t11.line - e11.line : e11.line - t11.line), h2.forEach((t11) => sU(e10, t11))), h2;
  } }, a$ = /(\d+)-(\d+)\/(\d+)/;
  class aU {
    constructor(e10) {
      this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = null, this.response = null, this.controller = void 0, this.context = null, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = e10.fetchSetup || aB, this.controller = new self.AbortController(), this.stats = new q();
    }
    destroy() {
      this.loader = this.callbacks = this.context = this.config = this.request = null, this.abortInternal(), this.response = null, this.fetchSetup = this.controller = this.stats = null;
    }
    abortInternal() {
      this.controller && !this.stats.loading.end && (this.stats.aborted = true, this.controller.abort());
    }
    abort() {
      var e10;
      this.abortInternal(), null != (e10 = this.callbacks) && e10.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
    }
    load(e10, t10, i10) {
      var r10;
      let s10, a10 = this.stats;
      if (a10.loading.start) throw Error("Loader can only be used once.");
      a10.loading.start = self.performance.now();
      let n2 = (r10 = e10, s10 = { method: "GET", mode: "cors", credentials: "same-origin", signal: this.controller.signal, headers: new self.Headers(w({}, r10.headers)) }, r10.rangeEnd && s10.headers.set("Range", "bytes=" + r10.rangeStart + "-" + String(r10.rangeEnd - 1)), s10), l2 = "arraybuffer" === e10.responseType, o2 = l2 ? "byteLength" : "length", { maxTimeToFirstByteMs: h2, maxLoadTimeMs: d2 } = t10.loadPolicy;
      this.context = e10, this.config = t10, this.callbacks = i10, this.request = this.fetchSetup(e10, n2), self.clearTimeout(this.requestTimeout), t10.timeout = h2 && f(h2) ? h2 : d2, this.requestTimeout = self.setTimeout(() => {
        this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(a10, e10, this.response));
      }, t10.timeout), (rV(this.request) ? this.request.then(self.fetch) : self.fetch(this.request)).then((i11) => {
        var r11;
        this.response = this.loader = i11;
        let s11 = Math.max(self.performance.now(), a10.loading.start);
        if (self.clearTimeout(this.requestTimeout), t10.timeout = d2, this.requestTimeout = self.setTimeout(() => {
          this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(a10, e10, this.response));
        }, d2 - (s11 - a10.loading.start)), !i11.ok) {
          let { status: e11, statusText: t11 } = i11;
          throw new aN(t11 || "fetch, bad network response", e11, i11);
        }
        a10.loading.first = s11, a10.total = (function(e11) {
          let t11 = e11.get("Content-Range");
          if (t11) {
            let e12 = (function(e13) {
              let t12 = a$.exec(e13);
              if (t12) return parseInt(t12[2]) - parseInt(t12[1]) + 1;
            })(t11);
            if (f(e12)) return e12;
          }
          let i12 = e11.get("Content-Length");
          if (i12) return parseInt(i12);
        })(i11.headers) || a10.total;
        let n3 = null == (r11 = this.callbacks) ? void 0 : r11.onProgress;
        return n3 && f(t10.highWaterMark) ? this.loadProgressively(i11, a10, e10, t10.highWaterMark, n3) : l2 ? i11.arrayBuffer() : "json" === e10.responseType ? i11.json() : i11.text();
      }).then((i11) => {
        var r11, s11;
        let n3 = this.response;
        if (!n3) throw Error("loader destroyed");
        self.clearTimeout(this.requestTimeout), a10.loading.end = Math.max(self.performance.now(), a10.loading.first);
        let l3 = i11[o2];
        l3 && (a10.loaded = a10.total = l3);
        let h3 = { url: n3.url, data: i11, code: n3.status }, d3 = null == (r11 = this.callbacks) ? void 0 : r11.onProgress;
        d3 && !f(t10.highWaterMark) && d3(a10, e10, i11, n3), null == (s11 = this.callbacks) || s11.onSuccess(h3, a10, e10, n3);
      }).catch((t11) => {
        var i11;
        if (self.clearTimeout(this.requestTimeout), a10.aborted) return;
        let r11 = t11 && t11.code || 0, s11 = t11 ? t11.message : null;
        null == (i11 = this.callbacks) || i11.onError({ code: r11, text: s11 }, e10, t11 ? t11.details : null, a10);
      });
    }
    getCacheAge() {
      let e10 = null;
      if (this.response) {
        let t10 = this.response.headers.get("age");
        e10 = t10 ? parseFloat(t10) : null;
      }
      return e10;
    }
    getResponseHeader(e10) {
      return this.response ? this.response.headers.get(e10) : null;
    }
    loadProgressively(e10, t10, i10, r10 = 0, s10) {
      let a10 = new iY(), n2 = e10.body.getReader(), l2 = () => n2.read().then((n3) => {
        if (n3.done) return a10.dataLength && s10(t10, i10, a10.flush().buffer, e10), Promise.resolve(new ArrayBuffer(0));
        let o2 = n3.value, h2 = o2.length;
        return t10.loaded += h2, h2 < r10 || a10.dataLength ? (a10.push(o2), a10.dataLength >= r10 && s10(t10, i10, a10.flush().buffer, e10)) : s10(t10, i10, o2.buffer, e10), l2();
      }).catch(() => Promise.reject());
      return l2();
    }
  }
  function aB(e10, t10) {
    return new self.Request(e10.url, t10);
  }
  class aN extends Error {
    constructor(e10, t10, i10) {
      super(e10), this.code = void 0, this.details = void 0, this.code = t10, this.details = i10;
    }
  }
  let aG = /^age:\s*[\d.]+\s*$/im;
  class aK {
    constructor(e10) {
      this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = null, this.loader = null, this.stats = void 0, this.xhrSetup = e10 && e10.xhrSetup || null, this.stats = new q(), this.retryDelay = 0;
    }
    destroy() {
      this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null, this.context = null, this.xhrSetup = null;
    }
    abortInternal() {
      let e10 = this.loader;
      self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), e10 && (e10.onreadystatechange = null, e10.onprogress = null, 4 !== e10.readyState && (this.stats.aborted = true, e10.abort()));
    }
    abort() {
      var e10;
      this.abortInternal(), null != (e10 = this.callbacks) && e10.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
    }
    load(e10, t10, i10) {
      if (this.stats.loading.start) throw Error("Loader can only be used once.");
      this.stats.loading.start = self.performance.now(), this.context = e10, this.config = t10, this.callbacks = i10, this.loadInternal();
    }
    loadInternal() {
      let { config: e10, context: t10 } = this;
      if (!e10 || !t10) return;
      let i10 = this.loader = new self.XMLHttpRequest(), r10 = this.stats;
      r10.loading.first = 0, r10.loaded = 0, r10.aborted = false;
      let s10 = this.xhrSetup;
      s10 ? Promise.resolve().then(() => {
        if (this.loader === i10 && !this.stats.aborted) return s10(i10, t10.url);
      }).catch((e11) => {
        if (this.loader === i10 && !this.stats.aborted) return i10.open("GET", t10.url, true), s10(i10, t10.url);
      }).then(() => {
        this.loader !== i10 || this.stats.aborted || this.openAndSendXhr(i10, t10, e10);
      }).catch((e11) => {
        var s11;
        null == (s11 = this.callbacks) || s11.onError({ code: i10.status, text: e11.message }, t10, i10, r10);
      }) : this.openAndSendXhr(i10, t10, e10);
    }
    openAndSendXhr(e10, t10, i10) {
      e10.readyState || e10.open("GET", t10.url, true);
      let r10 = t10.headers, { maxTimeToFirstByteMs: s10, maxLoadTimeMs: a10 } = i10.loadPolicy;
      if (r10) for (let t11 in r10) e10.setRequestHeader(t11, r10[t11]);
      t10.rangeEnd && e10.setRequestHeader("Range", "bytes=" + t10.rangeStart + "-" + (t10.rangeEnd - 1)), e10.onreadystatechange = this.readystatechange.bind(this), e10.onprogress = this.loadprogress.bind(this), e10.responseType = t10.responseType, self.clearTimeout(this.requestTimeout), i10.timeout = s10 && f(s10) ? s10 : a10, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), i10.timeout), e10.send();
    }
    readystatechange() {
      let { context: e10, loader: t10, stats: i10 } = this;
      if (!e10 || !t10) return;
      let r10 = t10.readyState, s10 = this.config;
      if (!i10.aborted && r10 >= 2 && (0 === i10.loading.first && (i10.loading.first = Math.max(self.performance.now(), i10.loading.start), s10.timeout !== s10.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), s10.timeout = s10.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), s10.loadPolicy.maxLoadTimeMs - (i10.loading.first - i10.loading.start)))), 4 === r10)) {
        var a10, n2, l2;
        self.clearTimeout(this.requestTimeout), t10.onreadystatechange = null, t10.onprogress = null;
        let r11 = t10.status, o2 = "text" === t10.responseType ? t10.responseText : null;
        if (r11 >= 200 && r11 < 300) {
          let s11 = null != o2 ? o2 : t10.response;
          if (null != s11) {
            i10.loading.end = Math.max(self.performance.now(), i10.loading.first), i10.loaded = i10.total = "arraybuffer" === t10.responseType ? s11.byteLength : s11.length, i10.bwEstimate = 8e3 * i10.total / (i10.loading.end - i10.loading.first);
            let l3 = null == (a10 = this.callbacks) ? void 0 : a10.onProgress;
            l3 && l3(i10, e10, s11, t10);
            let o3 = { url: t10.responseURL, data: s11, code: r11 };
            null == (n2 = this.callbacks) || n2.onSuccess(o3, i10, e10, t10);
            return;
          }
        }
        let h2 = s10.loadPolicy.errorRetry;
        ti(h2, i10.retry, false, { url: e10.url, data: void 0, code: r11 }) ? this.retry(h2) : (N.error(`${r11} while loading ${e10.url}`), null == (l2 = this.callbacks) || l2.onError({ code: r11, text: t10.statusText }, e10, t10, i10));
      }
    }
    loadtimeout() {
      if (!this.config) return;
      let e10 = this.config.loadPolicy.timeoutRetry;
      if (ti(e10, this.stats.retry, true)) this.retry(e10);
      else {
        var t10;
        N.warn(`timeout while loading ${null == (t10 = this.context) ? void 0 : t10.url}`);
        let e11 = this.callbacks;
        e11 && (this.abortInternal(), e11.onTimeout(this.stats, this.context, this.loader));
      }
    }
    retry(e10) {
      let { context: t10, stats: i10 } = this;
      this.retryDelay = te(e10, i10.retry), i10.retry++, N.warn(`${status ? "HTTP Status " + status : "Timeout"} while loading ${null == t10 ? void 0 : t10.url}, retrying ${i10.retry}/${e10.maxNumRetry} in ${this.retryDelay}ms`), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay);
    }
    loadprogress(e10) {
      let t10 = this.stats;
      t10.loaded = e10.loaded, e10.lengthComputable && (t10.total = e10.total);
    }
    getCacheAge() {
      let e10 = null;
      if (this.loader && aG.test(this.loader.getAllResponseHeaders())) {
        let t10 = this.loader.getResponseHeader("age");
        e10 = t10 ? parseFloat(t10) : null;
      }
      return e10;
    }
    getResponseHeader(e10) {
      return this.loader && RegExp(`^${e10}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(e10) : null;
    }
  }
  let aH = M(M({ autoStartLoad: true, startPosition: -1, defaultAudioCodec: void 0, debug: false, capLevelOnFPSDrop: false, capLevelToPlayerSize: false, ignoreDevicePixelRatio: false, maxDevicePixelRatio: 1 / 0, preferManagedMediaSource: true, initialLiveManifestSize: 1, maxBufferLength: 30, backBufferLength: 1 / 0, frontBufferFlushThreshold: 1 / 0, startOnSegmentBoundary: false, maxBufferSize: 6e7, maxFragLookUpTolerance: 0.25, maxBufferHole: 0.1, detectStallWithCurrentTimeMs: 1250, highBufferWatchdogPeriod: 2, nudgeOffset: 0.1, nudgeMaxRetry: 3, nudgeOnVideoHole: true, liveSyncMode: "edge", liveSyncDurationCount: 3, liveSyncOnStallIncrease: 1, liveMaxLatencyDurationCount: 1 / 0, liveSyncDuration: void 0, liveMaxLatencyDuration: void 0, maxLiveSyncPlaybackRate: 1, liveDurationInfinity: false, liveBackBufferLength: null, maxMaxBufferLength: 600, enableWorker: true, workerPath: null, enableSoftwareAES: true, startLevel: void 0, startFragPrefetch: false, fpsDroppedMonitoringPeriod: 5e3, fpsDroppedMonitoringThreshold: 0.2, appendErrorMaxRetry: 3, ignorePlaylistParsingErrors: false, loader: aK, fLoader: void 0, pLoader: void 0, xhrSetup: void 0, licenseXhrSetup: void 0, licenseResponseCallback: void 0, abrController: class extends O {
    constructor(e10) {
      super("abr", e10.logger), this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = -1, this.firstSelection = -1, this._nextAutoLevel = -1, this.nextAutoLevelKey = "", this.audioTracksByGroup = null, this.codecTiers = null, this.timer = -1, this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.rebufferNotice = -1, this.supportedCache = {}, this.bwEstimator = void 0, this._abandonRulesCheck = (e11) => {
        var t10;
        let i10, { fragCurrent: r10, partCurrent: s10, hls: a10 } = this, { autoLevelEnabled: n2, media: l2 } = a10;
        if (!r10 || !l2) return;
        let o2 = performance.now(), h2 = s10 ? s10.stats : r10.stats, d2 = s10 ? s10.duration : r10.duration, u2 = o2 - h2.loading.start, c2 = a10.minAutoLevel, g2 = r10.level, m2 = this._nextAutoLevel;
        if (h2.aborted || h2.loaded && h2.loaded === h2.total || g2 <= c2) {
          this.clearTimer(), this._nextAutoLevel = -1;
          return;
        }
        if (!n2) return;
        let p2 = m2 > -1 && m2 !== g2, v2 = !!e11 || p2;
        if (!v2 && (l2.paused || !l2.playbackRate || !l2.readyState)) return;
        let E2 = a10.mainForwardBufferInfo;
        if (!v2 && null === E2) return;
        let T2 = this.bwEstimator.getEstimateTTFB(), S2 = Math.abs(l2.playbackRate);
        if (u2 <= Math.max(T2, d2 / (2 * S2) * 1e3)) return;
        let A2 = E2 ? E2.len / S2 : 0, L2 = h2.loading.first ? h2.loading.first - h2.loading.start : -1, R2 = h2.loaded && L2 > -1, b2 = this.getBwEstimate(), I2 = a10.levels, k2 = I2[g2], D2 = Math.max(h2.loaded, Math.round(d2 * (r10.bitrate || k2.averageBitrate) / 8)), _2 = R2 ? u2 - L2 : u2;
        _2 < 1 && R2 && (_2 = Math.min(u2, 8 * h2.loaded / b2));
        let P2 = R2 ? 1e3 * h2.loaded / _2 : 0, C2 = T2 / 1e3, w2 = P2 ? (D2 - h2.loaded) / P2 : 8 * D2 / b2 + C2;
        if (w2 <= A2) return;
        let x2 = P2 ? 8 * P2 : b2, M2 = (null == (t10 = (null == e11 ? void 0 : e11.details) || this.hls.latestLevelDetails) ? void 0 : t10.live) === true, O2 = this.hls.config.abrBandWidthUpFactor, F2 = 1 / 0;
        for (i10 = g2 - 1; i10 > c2; i10--) {
          let e12 = I2[i10].maxBitrate, t11 = !I2[i10].details || M2;
          if ((F2 = this.getTimeToLoadFrag(C2, x2, d2 * e12, t11)) < Math.min(A2, d2 + C2)) break;
        }
        if (F2 >= w2 || F2 > 10 * d2) return;
        R2 ? this.bwEstimator.sample(u2 - Math.min(T2, L2), h2.loaded) : this.bwEstimator.sampleTTFB(u2);
        let $2 = I2[i10].maxBitrate;
        this.getBwEstimate() * O2 > $2 && this.resetEstimator($2);
        let U2 = this.findBestLevel($2, c2, i10, 0, A2, 1, 1);
        U2 > -1 && (i10 = U2), this.warn(`Fragment ${r10.sn}${s10 ? " part " + s10.index : ""} of level ${g2} is loading too slowly;
      Fragment duration: ${r10.duration.toFixed(3)}
      Time to underbuffer: ${A2.toFixed(3)} s
      Estimated load time for current fragment: ${w2.toFixed(3)} s
      Estimated load time for down switch fragment: ${F2.toFixed(3)} s
      TTFB estimate: ${0 | L2} ms
      Current BW estimate: ${f(b2) ? 0 | b2 : "Unknown"} bps
      New BW estimate: ${0 | this.getBwEstimate()} bps
      Switching to level ${i10} @ ${0 | $2} bps`), a10.nextLoadLevel = a10.nextAutoLevel = i10, this.clearTimer();
        let B2 = () => {
          if (this.clearTimer(), this.fragCurrent === r10 && this.hls.loadLevel === i10 && i10 > 0) {
            let e12 = this.getStarvationDelay();
            if (this.warn(`Aborting inflight request ${i10 > 0 ? "and switching down" : ""}
      Fragment duration: ${r10.duration.toFixed(3)} s
      Time to underbuffer: ${e12.toFixed(3)} s`), r10.abortRequests(), this.fragCurrent = this.partCurrent = null, i10 > c2) {
              let t11 = this.findBestLevel(this.hls.levels[c2].bitrate, c2, i10, 0, e12, 1, 1);
              -1 === t11 && (t11 = c2), this.hls.nextLoadLevel = this.hls.nextAutoLevel = t11, this.resetEstimator(this.hls.levels[t11].bitrate);
            }
          }
        };
        p2 || w2 > 2 * F2 ? B2() : this.timer = self.setInterval(B2, 1e3 * F2), a10.trigger(y.FRAG_LOAD_EMERGENCY_ABORTED, { frag: r10, part: s10, stats: h2 });
      }, this.hls = e10, this.bwEstimator = this.initEstimator(), this.registerListeners();
    }
    resetEstimator(e10) {
      e10 && (this.log(`setting initial bwe to ${e10}`), this.hls.config.abrEwmaDefaultEstimate = e10), this.firstSelection = -1, this.bwEstimator = this.initEstimator();
    }
    initEstimator() {
      let e10 = this.hls.config;
      return new C(e10.abrEwmaSlowVoD, e10.abrEwmaFastVoD, e10.abrEwmaDefaultEstimate);
    }
    registerListeners() {
      let { hls: e10 } = this;
      e10.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.on(y.FRAG_LOADING, this.onFragLoading, this), e10.on(y.FRAG_LOADED, this.onFragLoaded, this), e10.on(y.FRAG_BUFFERED, this.onFragBuffered, this), e10.on(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e10.on(y.LEVEL_LOADED, this.onLevelLoaded, this), e10.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e10.on(y.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e10.on(y.ERROR, this.onError, this);
    }
    unregisterListeners() {
      let { hls: e10 } = this;
      e10 && (e10.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.off(y.FRAG_LOADING, this.onFragLoading, this), e10.off(y.FRAG_LOADED, this.onFragLoaded, this), e10.off(y.FRAG_BUFFERED, this.onFragBuffered, this), e10.off(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e10.off(y.LEVEL_LOADED, this.onLevelLoaded, this), e10.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e10.off(y.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e10.off(y.ERROR, this.onError, this));
    }
    destroy() {
      this.unregisterListeners(), this.clearTimer(), this.hls = this._abandonRulesCheck = this.supportedCache = null, this.fragCurrent = this.partCurrent = null;
    }
    onManifestLoading(e10, t10) {
      this.lastLoadedFragLevel = -1, this.firstSelection = -1, this.lastLevelLoadSec = 0, this.supportedCache = {}, this.fragCurrent = this.partCurrent = null, this.onLevelsUpdated(), this.clearTimer();
    }
    onLevelsUpdated() {
      this.lastLoadedFragLevel > -1 && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level), this._nextAutoLevel = -1, this.onMaxAutoLevelUpdated(), this.codecTiers = null, this.audioTracksByGroup = null;
    }
    onMaxAutoLevelUpdated() {
      this.firstSelection = -1, this.nextAutoLevelKey = "";
    }
    onFragLoading(e10, t10) {
      let i10 = t10.frag;
      if (!this.ignoreFragment(i10)) {
        if (!i10.bitrateTest) {
          var r10;
          this.fragCurrent = i10, this.partCurrent = null != (r10 = t10.part) ? r10 : null;
        }
        this.clearTimer(), this.timer = self.setInterval(this._abandonRulesCheck, 100);
      }
    }
    onLevelSwitching(e10, t10) {
      this.clearTimer();
    }
    onError(e10, t10) {
      if (!t10.fatal) switch (t10.details) {
        case p.BUFFER_ADD_CODEC_ERROR:
        case p.BUFFER_APPEND_ERROR:
          this.lastLoadedFragLevel = -1, this.firstSelection = -1;
          break;
        case p.FRAG_LOAD_TIMEOUT: {
          let e11 = t10.frag, { fragCurrent: i10, partCurrent: r10 } = this;
          if (e11 && i10 && e11.sn === i10.sn && e11.level === i10.level) {
            let t11 = performance.now(), i11 = r10 ? r10.stats : e11.stats, s10 = t11 - i11.loading.start, a10 = i11.loading.first ? i11.loading.first - i11.loading.start : -1;
            if (i11.loaded && a10 > -1) {
              let e12 = this.bwEstimator.getEstimateTTFB();
              this.bwEstimator.sample(s10 - Math.min(e12, a10), i11.loaded);
            } else this.bwEstimator.sampleTTFB(s10);
          }
        }
      }
    }
    getTimeToLoadFrag(e10, t10, i10, r10) {
      let s10 = r10 ? e10 + this.lastLevelLoadSec : 0;
      return e10 + i10 / t10 + s10;
    }
    onLevelLoaded(e10, t10) {
      let i10 = this.hls.config, { loading: r10 } = t10.stats, s10 = r10.end - r10.first;
      f(s10) && (this.lastLevelLoadSec = s10 / 1e3), t10.details.live ? this.bwEstimator.update(i10.abrEwmaSlowLive, i10.abrEwmaFastLive) : this.bwEstimator.update(i10.abrEwmaSlowVoD, i10.abrEwmaFastVoD), this.timer > -1 && this._abandonRulesCheck(t10.levelInfo);
    }
    onFragLoaded(e10, { frag: t10, part: i10 }) {
      let r10 = i10 ? i10.stats : t10.stats;
      if (t10.type === k && this.bwEstimator.sampleTTFB(r10.loading.first - r10.loading.start), !this.ignoreFragment(t10)) {
        if (this.clearTimer(), t10.level === this._nextAutoLevel && (this._nextAutoLevel = -1), this.firstSelection = -1, this.hls.config.abrMaxWithRealBitrate) {
          let e11 = i10 ? i10.duration : t10.duration, s10 = this.hls.levels[t10.level], a10 = (s10.loaded ? s10.loaded.bytes : 0) + r10.loaded, n2 = (s10.loaded ? s10.loaded.duration : 0) + e11;
          s10.loaded = { bytes: a10, duration: n2 }, s10.realBitrate = Math.round(8 * a10 / n2);
        }
        if (t10.bitrateTest) {
          let e11 = { stats: r10, frag: t10, part: i10, id: t10.type };
          this.onFragBuffered(y.FRAG_BUFFERED, e11), t10.bitrateTest = false;
        } else this.lastLoadedFragLevel = t10.level;
      }
    }
    onFragBuffered(e10, t10) {
      let { frag: i10, part: r10 } = t10, s10 = null != r10 && r10.stats.loaded ? r10.stats : i10.stats;
      if (s10.aborted || this.ignoreFragment(i10)) return;
      let a10 = s10.parsing.end - s10.loading.start - Math.min(s10.loading.first - s10.loading.start, this.bwEstimator.getEstimateTTFB());
      this.bwEstimator.sample(a10, s10.loaded), s10.bwEstimate = this.getBwEstimate(), i10.bitrateTest ? this.bitrateTestDelay = a10 / 1e3 : this.bitrateTestDelay = 0;
    }
    ignoreFragment(e10) {
      return e10.type !== k || "initSegment" === e10.sn;
    }
    clearTimer() {
      this.timer > -1 && (self.clearInterval(this.timer), this.timer = -1);
    }
    get firstAutoLevel() {
      let { maxAutoLevel: e10, minAutoLevel: t10 } = this.hls, i10 = this.getBwEstimate(), r10 = this.hls.config.maxStarvationDelay, s10 = this.findBestLevel(i10, t10, e10, 0, r10, 1, 1);
      if (s10 > -1) return s10;
      let a10 = this.hls.firstLevel, n2 = Math.min(Math.max(a10, t10), e10);
      return this.warn(`Could not find best starting auto level. Defaulting to first in playlist ${a10} clamped to ${n2}`), n2;
    }
    get forcedAutoLevel() {
      return this.nextAutoLevelKey ? -1 : this._nextAutoLevel;
    }
    get nextAutoLevel() {
      let e10 = this.forcedAutoLevel, t10 = this.bwEstimator.canEstimate(), i10 = this.lastLoadedFragLevel > -1;
      if (-1 !== e10 && (!t10 || !i10 || this.nextAutoLevelKey === this.getAutoLevelKey())) return e10;
      let r10 = t10 && i10 ? this.getNextABRAutoLevel() : this.firstAutoLevel;
      if (-1 !== e10) {
        let t11 = this.hls.levels;
        if (t11.length > Math.max(e10, r10) && t11[e10].loadError <= t11[r10].loadError) return e10;
      }
      return this._nextAutoLevel = r10, this.nextAutoLevelKey = this.getAutoLevelKey(), r10;
    }
    getAutoLevelKey() {
      return `${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`;
    }
    getNextABRAutoLevel() {
      let { fragCurrent: e10, partCurrent: t10, hls: i10 } = this;
      if (i10.levels.length <= 1) return i10.loadLevel;
      let { maxAutoLevel: r10, config: s10, minAutoLevel: a10 } = i10, n2 = t10 ? t10.duration : e10 ? e10.duration : 0, l2 = this.getBwEstimate(), o2 = this.getStarvationDelay(), h2 = s10.abrBandWidthFactor, d2 = s10.abrBandWidthUpFactor;
      if (o2) {
        let e11 = this.findBestLevel(l2, a10, r10, o2, 0, h2, d2);
        if (e11 >= 0) return this.rebufferNotice = -1, e11;
      }
      let u2 = n2 ? Math.min(n2, s10.maxStarvationDelay) : s10.maxStarvationDelay;
      if (!o2) {
        let e11 = this.bitrateTestDelay;
        e11 && (u2 = (n2 ? Math.min(n2, s10.maxLoadingDelay) : s10.maxLoadingDelay) - e11, this.info(`bitrate test took ${Math.round(1e3 * e11)}ms, set first fragment max fetchDuration to ${Math.round(1e3 * u2)} ms`), h2 = d2 = 1);
      }
      let f2 = this.findBestLevel(l2, a10, r10, o2, u2, h2, d2);
      if (this.rebufferNotice !== f2 && (this.rebufferNotice = f2, this.info(`${o2 ? "rebuffering expected" : "buffer is empty"}, optimal quality level ${f2}`)), f2 > -1) return f2;
      let c2 = i10.levels[a10], g2 = i10.loadLevelObj;
      return g2 && (null == c2 ? void 0 : c2.bitrate) < g2.bitrate ? a10 : i10.loadLevel;
    }
    getStarvationDelay() {
      let e10 = this.hls, t10 = e10.media;
      if (!t10) return 1 / 0;
      let i10 = t10 && 0 !== t10.playbackRate ? Math.abs(t10.playbackRate) : 1, r10 = e10.mainForwardBufferInfo;
      return (r10 ? r10.len : 0) / i10;
    }
    getBwEstimate() {
      return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate;
    }
    findBestLevel(e10, t10, i10, r10, s10, a10, n2) {
      var l2, o2;
      let h2, d2 = r10 + s10, u2 = this.lastLoadedFragLevel, c2 = -1 === u2 ? this.hls.firstLevel : u2, { fragCurrent: g2, partCurrent: m2 } = this, { levels: p2, allAudioTracks: y2, loadLevel: v2, config: E2 } = this.hls;
      if (1 === p2.length) return 0;
      let T2 = p2[c2], S2 = !!(null != (l2 = this.hls.latestLevelDetails) && l2.live), A2 = -1 === v2 || -1 === u2, L2 = "SDR", R2 = (null == T2 ? void 0 : T2.frameRate) || 0, { audioPreference: b2, videoPreference: I2 } = E2, k2 = this.audioTracksByGroup || (this.audioTracksByGroup = eX(y2)), D2 = -1;
      if (A2) {
        if (-1 !== this.firstSelection) return this.firstSelection;
        let r11 = (function(e11, t11, i11, r12, s12) {
          let a12 = Object.keys(e11), n4 = null == r12 ? void 0 : r12.channels, l4 = null == r12 ? void 0 : r12.audioCodec, o4 = null == s12 ? void 0 : s12.videoCodec, h3 = n4 && 2 === parseInt(n4), d4 = false, u3 = false, c3 = 1 / 0, g3 = 1 / 0, m3 = 1 / 0, p3 = 1 / 0, y3 = 0, v3 = [], { preferHDR: E3, allowedVideoRanges: T3 } = (function(e12, t12) {
            let i12 = false, r13 = [];
            if (e12 && (i12 = "SDR" !== e12, r13 = [e12]), t12) {
              let e13 = "SDR" !== (r13 = t12.allowedVideoRanges || eK.slice(0)).join("") && !t12.videoCodec;
              (i12 = void 0 !== t12.preferHDR ? t12.preferHDR : e13 && (function() {
                if ("function" == typeof matchMedia) {
                  let e14 = matchMedia("(dynamic-range: high)"), t13 = matchMedia("bad query");
                  if (e14.media !== t13.media) return true === e14.matches;
                }
                return false;
              })()) || (r13 = ["SDR"]);
            }
            return { preferHDR: i12, allowedVideoRanges: r13 };
          })(t11, s12);
          for (let t12 = a12.length; t12--; ) {
            let i12 = e11[a12[t12]];
            d4 || (d4 = i12.channels[2] > 0), c3 = Math.min(c3, i12.minHeight), g3 = Math.min(g3, i12.minFramerate), m3 = Math.min(m3, i12.minBitrate), T3.filter((e12) => i12.videoRanges[e12] > 0).length > 0 && (u3 = true);
          }
          c3 = f(c3) ? c3 : 0, g3 = f(g3) ? g3 : 0;
          let S3 = Math.max(1080, c3), A3 = Math.max(30, g3);
          i11 = Math.max(m3 = f(m3) ? m3 : i11, i11), u3 || (t11 = void 0);
          let L3 = a12.length > 1;
          return { codecSet: a12.reduce((t12, r13) => {
            let s13 = e11[r13];
            if (r13 === t12) return t12;
            if (v3 = u3 ? T3.filter((e12) => s13.videoRanges[e12] > 0) : [], L3) {
              if (s13.minBitrate > i11) return eq(r13, `min bitrate of ${s13.minBitrate} > current estimate of ${i11}`), t12;
              if (!s13.hasDefaultAudio) return eq(r13, "no renditions with default or auto-select sound found"), t12;
              if (l4 && r13.indexOf(l4.substring(0, 4)) % 5 != 0) return eq(r13, `audio codec preference "${l4}" not found`), t12;
              if (n4 && !h3) {
                if (!s13.channels[n4]) return eq(r13, `no renditions with ${n4} channel sound found (channels options: ${Object.keys(s13.channels)})`), t12;
              } else if ((!l4 || h3) && d4 && 0 === s13.channels["2"]) return eq(r13, "no renditions with stereo sound found"), t12;
              if (s13.minHeight > S3) return eq(r13, `min resolution of ${s13.minHeight} > maximum of ${S3}`), t12;
              if (s13.minFramerate > A3) return eq(r13, `min framerate of ${s13.minFramerate} > maximum of ${A3}`), t12;
              if (!v3.some((e12) => s13.videoRanges[e12] > 0)) return eq(r13, `no variants with VIDEO-RANGE of ${eW(v3)} found`), t12;
              if (o4 && r13.indexOf(o4.substring(0, 4)) % 5 != 0) return eq(r13, `video codec preference "${o4}" not found`), t12;
              if (s13.maxScore < y3) return eq(r13, `max score of ${s13.maxScore} < selected max of ${y3}`), t12;
            }
            return t12 && (eD(r13) >= eD(t12) || s13.fragmentError > e11[t12].fragmentError) ? t12 : (p3 = s13.minIndex, y3 = s13.maxScore, r13);
          }, void 0), videoRanges: v3, preferHDR: E3, minFramerate: g3, minBitrate: m3, minIndex: p3 };
        })(this.codecTiers || (this.codecTiers = p2.slice(t10, i10 + 1).reduce((e11, t11, i11) => {
          if (!t11.codecSet) return e11;
          let r12 = t11.audioGroups, s12 = e11[t11.codecSet];
          s12 || (e11[t11.codecSet] = s12 = { minBitrate: 1 / 0, minHeight: 1 / 0, minFramerate: 1 / 0, minIndex: i11, maxScore: 0, videoRanges: { SDR: 0 }, channels: { 2: 0 }, hasDefaultAudio: !r12, fragmentError: 0 }), s12.minBitrate = Math.min(s12.minBitrate, t11.bitrate);
          let a12 = Math.min(t11.height, t11.width);
          return s12.minHeight = Math.min(s12.minHeight, a12), s12.minFramerate = Math.min(s12.minFramerate, t11.frameRate), s12.minIndex = Math.min(s12.minIndex, i11), s12.maxScore = Math.max(s12.maxScore, t11.score), s12.fragmentError += t11.fragmentError, s12.videoRanges[t11.videoRange] = (s12.videoRanges[t11.videoRange] || 0) + 1, r12 && r12.forEach((e12) => {
            if (!e12) return;
            let t12 = k2.groups[e12];
            t12 && (s12.hasDefaultAudio = s12.hasDefaultAudio || k2.hasDefaultAudio ? t12.hasDefault : t12.hasAutoSelect || !k2.hasDefaultAudio && !k2.hasAutoSelectAudio, Object.keys(t12.channels).forEach((e13) => {
              s12.channels[e13] = (s12.channels[e13] || 0) + t12.channels[e13];
            }));
          }), e11;
        }, {})), L2, e10, b2, I2), { codecSet: s11, videoRanges: a11, minFramerate: n3, minBitrate: l3, minIndex: o3, preferHDR: d3 } = r11;
        D2 = o3, h2 = s11, L2 = d3 ? a11[a11.length - 1] : a11[0], R2 = n3, e10 = Math.max(e10, l3), this.log(`picked start tier ${eW(r11)}`);
      } else h2 = null == T2 ? void 0 : T2.codecSet, L2 = null == T2 ? void 0 : T2.videoRange;
      let _2 = m2 ? m2.duration : g2 ? g2.duration : 0, P2 = this.bwEstimator.getEstimateTTFB() / 1e3, C2 = [];
      for (let l3 = i10; l3 >= t10; l3--) {
        let t11, g3 = p2[l3], y3 = l3 > c2;
        if (!g3) continue;
        if (E2.useMediaCapabilities && !g3.supportedResult && !g3.supportedPromise) {
          let t12 = navigator.mediaCapabilities;
          "function" == typeof (null == t12 ? void 0 : t12.decodingInfo) && (function(e11, t13, i11, r11, s11, a11) {
            let n3 = e11.videoCodec, l4 = e11.audioCodec ? e11.audioGroups : null, o3 = null == a11 ? void 0 : a11.audioCodec, h3 = null == a11 ? void 0 : a11.channels, d3 = h3 ? parseInt(h3) : o3 ? 1 / 0 : 2, u3 = null;
            if (null != l4 && l4.length) try {
              u3 = 1 === l4.length && l4[0] ? t13.groups[l4[0]].channels : l4.reduce((e12, i12) => {
                if (i12) {
                  let r12 = t13.groups[i12];
                  if (!r12) throw Error(`Audio track group ${i12} not found`);
                  Object.keys(r12.channels).forEach((t14) => {
                    e12[t14] = (e12[t14] || 0) + r12.channels[t14];
                  });
                }
                return e12;
              }, { 2: 0 });
            } catch (e12) {
              return true;
            }
            return void 0 !== n3 && (n3.split(",").some((e12) => eE(e12)) || e11.width > 1920 && e11.height > 1088 || e11.height > 1920 && e11.width > 1088 || e11.frameRate > Math.max(r11, 30) || "SDR" !== e11.videoRange && e11.videoRange !== i11 || e11.bitrate > Math.max(s11, 8e6)) || !!u3 && f(d3) && Object.keys(u3).some((e12) => parseInt(e12) > d3);
          })(g3, k2, L2, R2, e10, b2) ? (g3.supportedPromise = eB(g3, k2, t12, this.supportedCache), g3.supportedPromise.then((e11) => {
            if (!this.hls) return;
            g3.supportedResult = e11;
            let t13 = this.hls.levels, i11 = t13.indexOf(g3);
            e11.error ? this.warn(`MediaCapabilities decodingInfo error: "${e11.error}" for level ${i11} ${eW(e11)}`) : e11.supported ? e11.decodingInfoResults.some((e12) => false === e12.smooth || false === e12.powerEfficient) && this.log(`MediaCapabilities decodingInfo for level ${i11} not smooth or powerEfficient: ${eW(e11)}`) : (this.warn(`Unsupported MediaCapabilities decodingInfo result for level ${i11} ${eW(e11)}`), i11 > -1 && t13.length > 1 && (this.log(`Removing unsupported level ${i11}`), this.hls.removeLevel(i11), -1 === this.hls.loadLevel && (this.hls.nextLoadLevel = 0)));
          }).catch((e11) => {
            this.warn(`Error handling MediaCapabilities decodingInfo: ${e11}`);
          })) : g3.supportedResult = e$;
        }
        if ((h2 && g3.codecSet !== h2 || L2 && g3.videoRange !== L2 || y3 && R2 > g3.frameRate || !y3 && R2 > 0 && R2 < g3.frameRate || null != (o2 = g3.supportedResult) && null != (o2 = o2.decodingInfoResults) && o2.some((e11) => false === e11.smooth)) && (!A2 || l3 !== D2)) {
          C2.push(l3);
          continue;
        }
        let T3 = g3.details, I3 = (m2 ? null == T3 ? void 0 : T3.partTarget : null == T3 ? void 0 : T3.averagetargetduration) || _2;
        t11 = y3 ? n2 * e10 : a10 * e10;
        let w2 = _2 && r10 >= 2 * _2 && 0 === s10 ? g3.averageBitrate : g3.maxBitrate, x2 = this.getTimeToLoadFrag(P2, t11, w2 * I3, void 0 === T3);
        if (t11 >= w2 && (l3 === u2 || 0 === g3.loadError && 0 === g3.fragmentError) && (x2 <= P2 || !f(x2) || S2 && !this.bitrateTestDelay || x2 < d2)) {
          let e11 = this.forcedAutoLevel;
          return l3 !== v2 && (-1 === e11 || e11 !== v2) && (C2.length && this.trace(`Skipped level(s) ${C2.join(",")} of ${i10} max with CODECS and VIDEO-RANGE:"${p2[C2[0]].codecs}" ${p2[C2[0]].videoRange}; not compatible with "${h2}" ${L2}`), this.info(`switch candidate:${c2}->${l3} adjustedbw(${Math.round(t11)})-bitrate=${Math.round(t11 - w2)} ttfb:${P2.toFixed(1)} avgDuration:${I3.toFixed(1)} maxFetchDuration:${d2.toFixed(1)} fetchDuration:${x2.toFixed(1)} firstSelection:${A2} codecSet:${g3.codecSet} videoRange:${g3.videoRange} hls.loadLevel:${v2}`)), A2 && (this.firstSelection = l3), l3;
        }
      }
      return -1;
    }
    set nextAutoLevel(e10) {
      let t10 = this.deriveNextAutoLevel(e10);
      this._nextAutoLevel !== t10 && (this.nextAutoLevelKey = "", this._nextAutoLevel = t10);
    }
    deriveNextAutoLevel(e10) {
      let { maxAutoLevel: t10, minAutoLevel: i10 } = this.hls;
      return Math.min(Math.max(e10, i10), t10);
    }
  }, bufferController: class extends O {
    constructor(e10, t10) {
      super("buffer-controller", e10.logger), this.hls = void 0, this.fragmentTracker = void 0, this.details = null, this._objectUrl = null, this.operationQueue = null, this.bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.blockedAudioAppend = null, this.lastVideoAppendEnd = 0, this.appendSource = void 0, this.transferData = void 0, this.overrides = void 0, this.appendErrors = { audio: 0, video: 0, audiovideo: 0 }, this.tracks = {}, this.sourceBuffers = [[null, null], [null, null]], this._onEndStreaming = (e11) => {
        var t11;
        this.hls && (null == (t11 = this.mediaSource) ? void 0 : t11.readyState) === "open" && this.hls.pauseBuffering();
      }, this._onStartStreaming = (e11) => {
        this.hls && this.hls.resumeBuffering();
      }, this._onMediaSourceOpen = (e11) => {
        let { media: t11, mediaSource: i10 } = this;
        e11 && this.log("Media source opened"), t11 && i10 && (i10.removeEventListener("sourceopen", this._onMediaSourceOpen), t11.removeEventListener("emptied", this._onMediaEmptied), this.updateDuration(), this.hls.trigger(y.MEDIA_ATTACHED, { media: t11, mediaSource: i10 }), null !== this.mediaSource && this.checkPendingTracks());
      }, this._onMediaSourceClose = () => {
        this.log("Media source closed");
      }, this._onMediaSourceEnded = () => {
        this.log("Media source ended");
      }, this._onMediaEmptied = () => {
        let { mediaSrc: e11, _objectUrl: t11 } = this;
        e11 !== t11 && this.error(`Media element src was set while attaching MediaSource (${t11} > ${e11})`);
      }, this.hls = e10, this.fragmentTracker = t10, this.appendSource = (function(e11) {
        return "u" > typeof self && e11 === self.ManagedMediaSource;
      })(G(e10.config.preferManagedMediaSource)), this.initTracks(), this.registerListeners();
    }
    hasSourceTypes() {
      return Object.keys(this.tracks).length > 0;
    }
    destroy() {
      this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = this.blockedAudioAppend = null, this.transferData = this.overrides = void 0, this.operationQueue && (this.operationQueue.destroy(), this.operationQueue = null), this.hls = this.fragmentTracker = null, this._onMediaSourceOpen = this._onMediaSourceClose = null, this._onMediaSourceEnded = null, this._onStartStreaming = this._onEndStreaming = null;
    }
    registerListeners() {
      let { hls: e10 } = this;
      e10.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e10.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e10.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e10.on(y.BUFFER_RESET, this.onBufferReset, this), e10.on(y.BUFFER_APPENDING, this.onBufferAppending, this), e10.on(y.BUFFER_CODECS, this.onBufferCodecs, this), e10.on(y.BUFFER_EOS, this.onBufferEos, this), e10.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e10.on(y.LEVEL_UPDATED, this.onLevelUpdated, this), e10.on(y.FRAG_PARSED, this.onFragParsed, this), e10.on(y.FRAG_CHANGED, this.onFragChanged, this), e10.on(y.ERROR, this.onError, this);
    }
    unregisterListeners() {
      let { hls: e10 } = this;
      e10.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e10.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e10.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e10.off(y.BUFFER_RESET, this.onBufferReset, this), e10.off(y.BUFFER_APPENDING, this.onBufferAppending, this), e10.off(y.BUFFER_CODECS, this.onBufferCodecs, this), e10.off(y.BUFFER_EOS, this.onBufferEos, this), e10.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e10.off(y.LEVEL_UPDATED, this.onLevelUpdated, this), e10.off(y.FRAG_PARSED, this.onFragParsed, this), e10.off(y.FRAG_CHANGED, this.onFragChanged, this), e10.off(y.ERROR, this.onError, this);
    }
    transferMedia() {
      let { media: e10, mediaSource: t10 } = this;
      if (!e10) return null;
      let i10 = {};
      if (this.operationQueue) {
        let e11 = this.isUpdating();
        e11 || this.operationQueue.removeBlockers();
        let t11 = this.isQueued();
        (e11 || t11) && this.warn(`Transfering MediaSource with${t11 ? " operations in queue" : ""}${e11 ? " updating SourceBuffer(s)" : ""} ${this.operationQueue}`), this.operationQueue.destroy();
      }
      let r10 = this.transferData;
      return !this.sourceBufferCount && r10 && r10.mediaSource === t10 ? w(i10, r10.tracks) : this.sourceBuffers.forEach((e11) => {
        let [t11] = e11;
        t11 && (i10[t11] = w({}, this.tracks[t11]), this.removeBuffer(t11)), e11[0] = e11[1] = null;
      }), { media: e10, mediaSource: t10, tracks: i10 };
    }
    initTracks() {
      this.sourceBuffers = [[null, null], [null, null]], this.tracks = {}, this.resetQueue(), this.resetAppendErrors(), this.lastMpegAudioChunk = this.blockedAudioAppend = null, this.lastVideoAppendEnd = 0;
    }
    onManifestLoading() {
      this.bufferCodecEventsTotal = 0, this.details = null;
    }
    onManifestParsed(e10, t10) {
      var i10;
      let r10 = 2;
      (!t10.audio || t10.video) && t10.altAudio || (r10 = 1), this.bufferCodecEventsTotal = r10, this.log(`${r10} bufferCodec event(s) expected.`), null != (i10 = this.transferData) && i10.mediaSource && this.sourceBufferCount && r10 && this.bufferCreated();
    }
    onMediaAttaching(e10, t10) {
      let i10 = this.media = t10.media;
      this.transferData = this.overrides = void 0;
      let r10 = G(this.appendSource);
      if (r10) {
        let e11 = !!t10.mediaSource;
        (e11 || t10.overrides) && (this.transferData = t10, this.overrides = t10.overrides);
        let n2 = this.mediaSource = t10.mediaSource || new r10();
        if (this.assignMediaSource(n2), e11) this._objectUrl = i10.src, this.attachTransferred();
        else {
          let e12 = this._objectUrl = self.URL.createObjectURL(n2);
          if (this.appendSource) try {
            var s10, a10;
            let t11;
            i10.removeAttribute("src");
            let r11 = self.ManagedMediaSource;
            i10.disableRemotePlayback = i10.disableRemotePlayback || r11 && n2 instanceof r11, r3(i10), s10 = i10, a10 = e12, (t11 = self.document.createElement("source")).type = "video/mp4", t11.src = a10, s10.appendChild(t11), i10.load();
          } catch (t11) {
            i10.src = e12;
          }
          else i10.src = e12;
        }
        i10.addEventListener("emptied", this._onMediaEmptied);
      }
    }
    assignMediaSource(e10) {
      var t10, i10;
      this.log(`${(null == (t10 = this.transferData) ? void 0 : t10.mediaSource) === e10 ? "transferred" : "created"} media source: ${null == (i10 = e10.constructor) ? void 0 : i10.name}`), e10.addEventListener("sourceopen", this._onMediaSourceOpen), e10.addEventListener("sourceended", this._onMediaSourceEnded), e10.addEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (e10.addEventListener("startstreaming", this._onStartStreaming), e10.addEventListener("endstreaming", this._onEndStreaming));
    }
    attachTransferred() {
      let e10 = this.media, t10 = this.transferData;
      if (!t10 || !e10) return;
      let i10 = this.tracks, r10 = t10.tracks, s10 = r10 ? Object.keys(r10) : null, a10 = s10 ? s10.length : 0, n2 = () => {
        Promise.resolve().then(() => {
          this.media && this.mediaSourceOpenOrEnded && this._onMediaSourceOpen();
        });
      };
      if (r10 && s10 && a10) {
        if (!this.tracksReady) {
          this.hls.config.startFragPrefetch = true, this.log("attachTransferred: waiting for SourceBuffer track info");
          return;
        }
        if (this.log(`attachTransferred: (bufferCodecEventsTotal ${this.bufferCodecEventsTotal})
required tracks: ${eW(i10, (e11, t11) => "initSegment" === e11 ? void 0 : t11)};
transfer tracks: ${eW(r10, (e11, t11) => "initSegment" === e11 ? void 0 : t11)}}`), !K(r10, i10)) {
          t10.mediaSource = null, t10.tracks = void 0;
          let s11 = e10.currentTime, a11 = this.details, n3 = Math.max(s11, (null == a11 ? void 0 : a11.fragments[0].start) || 0);
          return n3 - s11 > 1 ? void this.log(`attachTransferred: waiting for playback to reach new tracks start time ${s11} -> ${n3}`) : (this.warn(`attachTransferred: resetting MediaSource for incompatible tracks ("${Object.keys(r10)}"->"${Object.keys(i10)}") start time: ${n3} currentTime: ${s11}`), this.onMediaDetaching(y.MEDIA_DETACHING, {}), this.onMediaAttaching(y.MEDIA_ATTACHING, t10), void (e10.currentTime = n3));
        }
        this.transferData = void 0, s10.forEach((e11) => {
          let t11 = r10[e11];
          if (t11) {
            let i11 = t11.buffer;
            if (i11) {
              let r11 = this.fragmentTracker, s11 = t11.id;
              if (r11.hasFragments(s11) || r11.hasParts(s11)) {
                let t12 = tR.getBuffered(i11);
                r11.detectEvictedFragments(e11, t12, s11, null, true);
              }
              let a11 = r4(e11), n3 = [e11, i11];
              this.sourceBuffers[a11] = n3, i11.updating && this.operationQueue && this.operationQueue.prependBlocker(e11), this.trackSourceBuffer(e11, t11);
            }
          }
        }), n2(), this.bufferCreated();
      } else this.log("attachTransferred: MediaSource w/o SourceBuffers"), n2();
    }
    get mediaSourceOpenOrEnded() {
      var e10;
      let t10 = null == (e10 = this.mediaSource) ? void 0 : e10.readyState;
      return "open" === t10 || "ended" === t10;
    }
    onMediaDetaching(e10, t10) {
      let i10 = !!t10.transferMedia;
      this.transferData = this.overrides = void 0;
      let { media: r10, mediaSource: s10, _objectUrl: a10 } = this;
      if (s10) {
        if (this.log(`media source ${i10 ? "transferring" : "detaching"}`), i10) this.sourceBuffers.forEach(([e11]) => {
          e11 && this.removeBuffer(e11);
        }), this.resetQueue();
        else {
          if (this.mediaSourceOpenOrEnded) {
            let e11 = "open" === s10.readyState;
            try {
              let t11 = s10.sourceBuffers;
              for (let i11 = t11.length; i11--; ) e11 && t11[i11].abort(), s10.removeSourceBuffer(t11[i11]);
              e11 && s10.endOfStream();
            } catch (e12) {
              this.warn(`onMediaDetaching: ${e12.message} while calling endOfStream`);
            }
          }
          this.sourceBufferCount && this.onBufferReset();
        }
        s10.removeEventListener("sourceopen", this._onMediaSourceOpen), s10.removeEventListener("sourceended", this._onMediaSourceEnded), s10.removeEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (s10.removeEventListener("startstreaming", this._onStartStreaming), s10.removeEventListener("endstreaming", this._onEndStreaming)), this.mediaSource = null, this._objectUrl = null;
      }
      r10 && (r10.removeEventListener("emptied", this._onMediaEmptied), i10 || (a10 && self.URL.revokeObjectURL(a10), this.mediaSrc === a10 ? (r10.removeAttribute("src"), this.appendSource && r3(r10), r10.load()) : this.warn("media|source.src was changed by a third party - skip cleanup")), this.media = null), this.hls.trigger(y.MEDIA_DETACHED, t10);
    }
    onBufferReset() {
      this.sourceBuffers.forEach(([e10]) => {
        e10 && this.resetBuffer(e10);
      }), this.initTracks();
    }
    resetBuffer(e10) {
      var t10, i10;
      let r10 = null == (t10 = this.tracks[e10]) ? void 0 : t10.buffer;
      if (this.removeBuffer(e10), r10) try {
        null != (i10 = this.mediaSource) && i10.sourceBuffers.length && this.mediaSource.removeSourceBuffer(r10);
      } catch (t11) {
        this.warn(`onBufferReset ${e10}`, t11);
      }
      delete this.tracks[e10];
    }
    removeBuffer(e10) {
      this.removeBufferListeners(e10), this.sourceBuffers[r4(e10)] = [null, null];
      let t10 = this.tracks[e10];
      t10 && (t10.buffer = void 0);
    }
    resetQueue() {
      this.operationQueue && this.operationQueue.destroy(), this.operationQueue = new rJ(this.tracks);
    }
    onBufferCodecs(e10, t10) {
      var i10;
      let r10 = this.tracks, s10 = Object.keys(t10);
      this.log(`BUFFER_CODECS: "${s10}" (current SB count ${this.sourceBufferCount})`);
      let a10 = "audiovideo" in t10 && (r10.audio || r10.video) || r10.audiovideo && ("audio" in t10 || "video" in t10), n2 = !a10 && this.sourceBufferCount && this.media && s10.some((e11) => !r10[e11]);
      a10 || n2 ? this.warn(`Unsupported transition between "${Object.keys(r10)}" and "${s10}" SourceBuffers`) : (s10.forEach((e11) => {
        var i11, s11;
        let { id: a11, codec: n3, levelCodec: l2, container: o2, metadata: h2, supplemental: d2 } = t10[e11], u2 = r10[e11], f2 = null == (i11 = this.transferData) || null == (i11 = i11.tracks) ? void 0 : i11[e11], c2 = null != f2 && f2.buffer ? f2 : u2, g2 = (null == c2 ? void 0 : c2.pendingCodec) || (null == c2 ? void 0 : c2.codec), m2 = null == c2 ? void 0 : c2.levelCodec;
        u2 || (u2 = r10[e11] = { buffer: void 0, listeners: [], codec: n3, supplemental: d2, container: o2, levelCodec: l2, metadata: h2, id: a11 });
        let p2 = ew(g2, m2), y2 = null == p2 ? void 0 : p2.replace(r0, "$1"), v2 = ew(n3, l2), E2 = null == (s11 = v2) ? void 0 : s11.replace(r0, "$1");
        v2 && p2 && y2 !== E2 && ("audio" === e11.slice(0, 5) && (v2 = eC(v2, this.appendSource)), this.log(`switching codec ${g2} to ${v2}`), v2 !== (u2.pendingCodec || u2.codec) && (u2.pendingCodec = v2), u2.container = o2, this.appendChangeType(e11, o2, v2));
      }), (this.tracksReady || this.sourceBufferCount) && (t10.tracks = this.sourceBufferTracks), !this.sourceBufferCount && (!(this.bufferCodecEventsTotal > 1) || this.tracks.video || t10.video || (null == (i10 = t10.audio) ? void 0 : i10.id) !== "main" || (this.log("Main audio-only"), this.bufferCodecEventsTotal = 1), this.mediaSourceOpenOrEnded && this.checkPendingTracks()));
    }
    get sourceBufferTracks() {
      return Object.keys(this.tracks).reduce((e10, t10) => {
        let i10 = this.tracks[t10];
        return e10[t10] = { id: i10.id, container: i10.container, codec: i10.codec, levelCodec: i10.levelCodec }, e10;
      }, {});
    }
    appendChangeType(e10, t10, i10) {
      let r10 = `${t10};codecs=${i10}`, s10 = { label: `change-type=${r10}`, execute: () => {
        let s11 = this.tracks[e10];
        if (s11) {
          let a10 = s11.buffer;
          null != a10 && a10.changeType && (this.log(`changing ${e10} sourceBuffer type to ${r10}`), a10.changeType(r10), s11.codec = i10, s11.container = t10);
        }
        this.shiftAndExecuteNext(e10);
      }, onStart: () => {
      }, onComplete: () => {
      }, onError: (t11) => {
        this.warn(`Failed to change ${e10} SourceBuffer type`, t11);
      } };
      this.append(s10, e10, this.isPending(this.tracks[e10]));
    }
    blockAudio(e10) {
      var t10;
      let i10 = e10.start, r10 = i10 + 0.05 * e10.duration;
      if ((null == (t10 = this.fragmentTracker.getAppendedFrag(i10, k)) ? void 0 : t10.gap) === true) return;
      let s10 = { label: "block-audio", execute: () => {
        var e11;
        let t11 = this.tracks.video;
        (this.lastVideoAppendEnd > r10 || null != t11 && t11.buffer && tR.isBuffered(t11.buffer, r10) || (null == (e11 = this.fragmentTracker.getAppendedFrag(r10, k)) ? void 0 : e11.gap) === true) && (this.blockedAudioAppend = null, this.shiftAndExecuteNext("audio"));
      }, onStart: () => {
      }, onComplete: () => {
      }, onError: (e11) => {
        this.warn("Error executing block-audio operation", e11);
      } };
      this.blockedAudioAppend = { op: s10, frag: e10 }, this.append(s10, "audio", true);
    }
    unblockAudio() {
      let { blockedAudioAppend: e10, operationQueue: t10 } = this;
      e10 && t10 && (this.blockedAudioAppend = null, t10.unblockAudio(e10.op));
    }
    onBufferAppending(e10, t10) {
      let { tracks: i10 } = this, { data: r10, type: s10, parent: a10, frag: n2, part: l2, chunkMeta: o2, offset: h2 } = t10, d2 = o2.buffering[s10], { sn: u2, cc: c2 } = n2, g2 = self.performance.now();
      d2.start = g2;
      let v2 = n2.stats.buffering, E2 = l2 ? l2.stats.buffering : null;
      0 === v2.start && (v2.start = g2), E2 && 0 === E2.start && (E2.start = g2);
      let T2 = i10.audio, S2 = false;
      "audio" === s10 && (null == T2 ? void 0 : T2.container) === "audio/mpeg" && (S2 = !this.lastMpegAudioChunk || 1 === o2.id || this.lastMpegAudioChunk.sn !== o2.sn, this.lastMpegAudioChunk = o2);
      let A2 = i10.video, L2 = null == A2 ? void 0 : A2.buffer;
      if (L2 && "initSegment" !== u2) {
        let e11 = l2 || n2, t11 = this.blockedAudioAppend;
        if ("audio" !== s10 || "main" === a10 || this.blockedAudioAppend || A2.ending || A2.ended) {
          if ("video" === s10) {
            let i11 = e11.end;
            if (t11) {
              let e12 = t11.frag.start;
              (i11 > e12 || i11 < this.lastVideoAppendEnd || tR.isBuffered(L2, e12)) && this.unblockAudio();
            }
            this.lastVideoAppendEnd = i11;
          }
        } else {
          let t12 = e11.start + 0.05 * e11.duration, i11 = L2.buffered, r11 = this.currentOp("video");
          (i11.length || r11) && (r11 || tR.isBuffered(L2, t12) || !(this.lastVideoAppendEnd < t12)) || this.blockAudio(e11);
        }
      }
      let R2 = (l2 || n2).start, b2 = { label: `append-${s10}`, execute: () => {
        var e11;
        d2.executeStart = self.performance.now();
        let t11 = null == (e11 = this.tracks[s10]) ? void 0 : e11.buffer;
        t11 && (S2 ? this.updateTimestampOffset(t11, R2, 0.1, s10, u2, c2) : void 0 !== h2 && f(h2) && this.updateTimestampOffset(t11, h2, 1e-6, s10, u2, c2)), this.appendExecutor(r10, s10);
      }, onStart: () => {
      }, onComplete: () => {
        let e11 = self.performance.now();
        d2.executeEnd = d2.end = e11, 0 === v2.first && (v2.first = e11), E2 && 0 === E2.first && (E2.first = e11);
        let t11 = {};
        this.sourceBuffers.forEach(([e12, i11]) => {
          e12 && (t11[e12] = tR.getBuffered(i11));
        }), this.appendErrors[s10] = 0, "audio" === s10 || "video" === s10 ? this.appendErrors.audiovideo = 0 : (this.appendErrors.audio = 0, this.appendErrors.video = 0), this.hls.trigger(y.BUFFER_APPENDED, { type: s10, frag: n2, part: l2, chunkMeta: o2, parent: n2.type, timeRanges: t11 });
      }, onError: (e11) => {
        var t11;
        let i11 = { type: m.MEDIA_ERROR, parent: n2.type, details: p.BUFFER_APPEND_ERROR, sourceBufferName: s10, frag: n2, part: l2, chunkMeta: o2, error: e11, err: e11, fatal: false }, r11 = null == (t11 = this.media) ? void 0 : t11.error;
        if (e11.code === DOMException.QUOTA_EXCEEDED_ERR || "QuotaExceededError" == e11.name || "quota" in e11) i11.details = p.BUFFER_FULL_ERROR;
        else if (e11.code === DOMException.INVALID_STATE_ERR && this.mediaSourceOpenOrEnded && !r11) i11.errorAction = ts(true);
        else if (e11.name === r1 && 0 === this.sourceBufferCount) i11.errorAction = ts(true);
        else {
          let e12 = ++this.appendErrors[s10];
          this.warn(`Failed ${e12}/${this.hls.config.appendErrorMaxRetry} times to append segment in "${s10}" sourceBuffer (${r11 || "no media error"})`), (e12 >= this.hls.config.appendErrorMaxRetry || r11) && (i11.fatal = true);
        }
        this.hls.trigger(y.ERROR, i11);
      } };
      this.log(`queuing "${s10}" append sn: ${u2}${l2 ? " p: " + l2.index : ""} of ${n2.type === k ? "level" : "track"} ${n2.level} cc: ${c2}`), this.append(b2, s10, this.isPending(this.tracks[s10]));
    }
    getFlushOp(e10, t10, i10) {
      return this.log(`queuing "${e10}" remove ${t10}-${i10}`), { label: "remove", execute: () => {
        this.removeExecutor(e10, t10, i10);
      }, onStart: () => {
      }, onComplete: () => {
        this.hls.trigger(y.BUFFER_FLUSHED, { type: e10 });
      }, onError: (r10) => {
        this.warn(`Failed to remove ${t10}-${i10} from "${e10}" SourceBuffer`, r10);
      } };
    }
    onBufferFlushing(e10, t10) {
      let { type: i10, startOffset: r10, endOffset: s10 } = t10;
      i10 ? this.append(this.getFlushOp(i10, r10, s10), i10) : this.sourceBuffers.forEach(([e11]) => {
        e11 && this.append(this.getFlushOp(e11, r10, s10), e11);
      });
    }
    onFragParsed(e10, t10) {
      let { frag: i10, part: r10 } = t10, s10 = [], a10 = r10 ? r10.elementaryStreams : i10.elementaryStreams;
      a10[z] ? s10.push("audiovideo") : (a10[X] && s10.push("audio"), a10[Q] && s10.push("video"));
      let n2 = () => {
        let e11 = self.performance.now();
        i10.stats.buffering.end = e11, r10 && (r10.stats.buffering.end = e11);
        let t11 = r10 ? r10.stats : i10.stats;
        this.hls.trigger(y.FRAG_BUFFERED, { frag: i10, part: r10, stats: t11, id: i10.type });
      };
      0 === s10.length && this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${i10.type} level: ${i10.level} sn: ${i10.sn}`), this.blockBuffers(n2, s10).catch((e11) => {
        this.warn(`Fragment buffered callback ${e11}`), this.stepOperationQueue(this.sourceBufferTypes);
      });
    }
    onFragChanged(e10, t10) {
      this.trimBuffers();
    }
    get bufferedToEnd() {
      return this.sourceBufferCount > 0 && !this.sourceBuffers.some(([e10]) => {
        if (e10) {
          let t10 = this.tracks[e10];
          if (t10) return !t10.ended || t10.ending;
        }
        return false;
      });
    }
    onBufferEos(e10, t10) {
      var i10;
      this.sourceBuffers.forEach(([e11]) => {
        if (e11) {
          let i11 = this.tracks[e11];
          (!t10.type || t10.type === e11) && (i11.ending = true, i11.ended || (i11.ended = true, this.log(`${e11} buffer reached EOS`)));
        }
      });
      let r10 = (null == (i10 = this.overrides) ? void 0 : i10.endOfStream) !== false;
      this.sourceBufferCount > 0 && !this.sourceBuffers.some(([e11]) => {
        var t11;
        return e11 && !(null != (t11 = this.tracks[e11]) && t11.ended);
      }) ? r10 ? (this.log("Queueing EOS"), this.blockUntilOpen(() => {
        this.tracksEnded();
        let { mediaSource: e11 } = this;
        if (!e11 || "open" !== e11.readyState) {
          e11 && this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${e11.readyState}`);
          return;
        }
        this.log("Calling mediaSource.endOfStream()"), e11.endOfStream(), this.hls.trigger(y.BUFFERED_TO_END, void 0);
      })) : (this.tracksEnded(), this.hls.trigger(y.BUFFERED_TO_END, void 0)) : "video" === t10.type && this.unblockAudio();
    }
    tracksEnded() {
      this.sourceBuffers.forEach(([e10]) => {
        if (null !== e10) {
          let t10 = this.tracks[e10];
          t10 && (t10.ending = false);
        }
      });
    }
    onLevelUpdated(e10, { details: t10 }) {
      t10.fragments.length && (this.details = t10, this.updateDuration());
    }
    updateDuration() {
      this.blockUntilOpen(() => {
        let e10 = this.getDurationAndRange();
        e10 && this.updateMediaSource(e10);
      });
    }
    onError(e10, t10) {
      if (t10.details === p.BUFFER_APPEND_ERROR && t10.frag) {
        var i10;
        let e11 = null == (i10 = t10.errorAction) ? void 0 : i10.nextAutoLevel;
        f(e11) && e11 !== t10.frag.level && this.resetAppendErrors();
      }
    }
    resetAppendErrors() {
      this.appendErrors = { audio: 0, video: 0, audiovideo: 0 };
    }
    trimBuffers() {
      let { hls: e10, details: t10, media: i10 } = this;
      if (!i10 || null === t10 || !this.sourceBufferCount) return;
      let r10 = e10.config, s10 = i10.currentTime, a10 = t10.levelTargetDuration, n2 = t10.live && null !== r10.liveBackBufferLength ? r10.liveBackBufferLength : r10.backBufferLength;
      if (f(n2) && n2 >= 0) {
        let e11 = Math.max(n2, a10), t11 = Math.floor(s10 / a10) * a10 - e11;
        this.flushBackBuffer(s10, a10, t11);
      }
      let l2 = r10.frontBufferFlushThreshold;
      if (f(l2) && l2 > 0) {
        let e11 = Math.max(Math.max(r10.maxBufferLength, l2), a10), t11 = Math.floor(s10 / a10) * a10 + e11;
        this.flushFrontBuffer(s10, a10, t11);
      }
    }
    flushBackBuffer(e10, t10, i10) {
      this.sourceBuffers.forEach(([e11, t11]) => {
        if (t11) {
          let s10 = tR.getBuffered(t11);
          if (s10.length > 0 && i10 > s10.start(0)) {
            var r10;
            this.hls.trigger(y.BACK_BUFFER_REACHED, { bufferEnd: i10 });
            let t12 = this.tracks[e11];
            if (null != (r10 = this.details) && r10.live) this.hls.trigger(y.LIVE_BACK_BUFFER_REACHED, { bufferEnd: i10 });
            else if (null != t12 && t12.ended) return void this.log(`Cannot flush ${e11} back buffer while SourceBuffer is in ended state`);
            this.hls.trigger(y.BUFFER_FLUSHING, { startOffset: 0, endOffset: i10, type: e11 });
          }
        }
      });
    }
    flushFrontBuffer(e10, t10, i10) {
      this.sourceBuffers.forEach(([t11, r10]) => {
        if (r10) {
          let s10 = tR.getBuffered(r10), a10 = s10.length;
          if (a10 < 2) return;
          let n2 = s10.start(a10 - 1), l2 = s10.end(a10 - 1);
          i10 > n2 || e10 >= n2 && e10 <= l2 || this.hls.trigger(y.BUFFER_FLUSHING, { startOffset: n2, endOffset: 1 / 0, type: t11 });
        }
      });
    }
    getDurationAndRange() {
      var e10;
      let { details: t10, mediaSource: i10 } = this;
      if (!t10 || !this.media || (null == i10 ? void 0 : i10.readyState) !== "open") return null;
      let r10 = t10.edge;
      if (t10.live && this.hls.config.liveDurationInfinity) {
        if (t10.fragments.length && i10.setLiveSeekableRange) {
          let e11 = Math.max(0, t10.fragmentStart), i11 = Math.max(e11, r10);
          return { duration: 1 / 0, start: e11, end: i11 };
        }
        return { duration: 1 / 0 };
      }
      let s10 = null == (e10 = this.overrides) ? void 0 : e10.duration;
      if (s10) return f(s10) ? { duration: s10 } : null;
      let a10 = this.media.duration;
      return r10 > (f(i10.duration) ? i10.duration : 0) && r10 > a10 || !f(a10) ? { duration: r10 } : null;
    }
    updateMediaSource({ duration: e10, start: t10, end: i10 }) {
      let r10 = this.mediaSource;
      this.media && r10 && "open" === r10.readyState && (r10.duration !== e10 && (f(e10) && this.log(`Updating MediaSource duration to ${e10.toFixed(3)}`), r10.duration = e10), void 0 !== t10 && void 0 !== i10 && (this.log(`MediaSource duration is set to ${r10.duration}. Setting seekable range to ${t10}-${i10}.`), r10.setLiveSeekableRange(t10, i10)));
    }
    get tracksReady() {
      let e10 = this.pendingTrackCount;
      return e10 > 0 && (e10 >= this.bufferCodecEventsTotal || this.isPending(this.tracks.audiovideo));
    }
    checkPendingTracks() {
      let { bufferCodecEventsTotal: e10, pendingTrackCount: t10, tracks: i10 } = this;
      if (this.log(`checkPendingTracks (pending: ${t10} codec events expected: ${e10}) ${eW(i10)}`), this.tracksReady) {
        var r10;
        let e11 = null == (r10 = this.transferData) ? void 0 : r10.tracks;
        e11 && Object.keys(e11).length ? this.attachTransferred() : this.createSourceBuffers();
      }
    }
    bufferCreated() {
      if (this.sourceBufferCount) {
        let e10 = {};
        this.sourceBuffers.forEach(([t10, i10]) => {
          if (t10) {
            let r10 = this.tracks[t10];
            e10[t10] = { buffer: i10, container: r10.container, codec: r10.codec, supplemental: r10.supplemental, levelCodec: r10.levelCodec, id: r10.id, metadata: r10.metadata };
          }
        }), this.hls.trigger(y.BUFFER_CREATED, { tracks: e10 }), this.log(`SourceBuffers created. Running queue: ${this.operationQueue}`), this.sourceBuffers.forEach(([e11]) => {
          this.executeNext(e11);
        });
      } else {
        let e10 = Error("could not create source buffer for media codec(s)");
        this.hls.trigger(y.ERROR, { type: m.MEDIA_ERROR, details: p.BUFFER_INCOMPATIBLE_CODECS_ERROR, fatal: true, error: e10, reason: e10.message });
      }
    }
    createSourceBuffers() {
      let { tracks: e10, sourceBuffers: t10, mediaSource: i10 } = this;
      if (!i10) throw Error("createSourceBuffers called when mediaSource was null");
      for (let s10 in e10) {
        let a10 = e10[s10];
        if (this.isPending(a10)) {
          let e11 = this.getTrackCodec(a10, s10), n2 = `${a10.container};codecs=${e11}`;
          a10.codec = e11, this.log(`creating sourceBuffer(${n2})${this.currentOp(s10) ? " Queued" : ""} ${eW(a10)}`);
          try {
            let e12 = i10.addSourceBuffer(n2), r11 = r4(s10), l2 = [s10, e12];
            t10[r11] = l2, a10.buffer = e12;
          } catch (e12) {
            var r10;
            this.error(`error while trying to add sourceBuffer: ${e12.message}`), this.shiftAndExecuteNext(s10), null == (r10 = this.operationQueue) || r10.removeBlockers(), delete this.tracks[s10], this.hls.trigger(y.ERROR, { type: m.MEDIA_ERROR, details: p.BUFFER_ADD_CODEC_ERROR, fatal: false, error: e12, sourceBufferName: s10, mimeType: n2, parent: a10.id });
            return;
          }
          this.trackSourceBuffer(s10, a10);
        }
      }
      this.bufferCreated();
    }
    getTrackCodec(e10, t10) {
      let i10 = e10.supplemental, r10 = e10.codec;
      i10 && ("video" === t10 || "audiovideo" === t10) && eR(i10, "video") && (r10 = (function(e11, t11) {
        let i11 = [];
        if (e11) {
          let t12 = e11.split(",");
          for (let e12 = 0; e12 < t12.length; e12++) eL(t12[e12], "video") || i11.push(t12[e12]);
        }
        return t11 && i11.push(t11), i11.join(",");
      })(r10, i10));
      let s10 = ew(r10, e10.levelCodec);
      return s10 ? "audio" === t10.slice(0, 5) ? eC(s10, this.appendSource) : s10 : "";
    }
    trackSourceBuffer(e10, t10) {
      let i10 = t10.buffer;
      if (!i10) return;
      let r10 = this.getTrackCodec(t10, e10);
      this.tracks[e10] = { buffer: i10, codec: r10, container: t10.container, levelCodec: t10.levelCodec, supplemental: t10.supplemental, metadata: t10.metadata, id: t10.id, listeners: [] }, this.removeBufferListeners(e10), this.addBufferListener(e10, "updatestart", this.onSBUpdateStart), this.addBufferListener(e10, "updateend", this.onSBUpdateEnd), this.addBufferListener(e10, "error", this.onSBUpdateError), this.appendSource && this.addBufferListener(e10, "bufferedchange", (e11, t11) => {
        let i11 = t11.removedRanges;
        null != i11 && i11.length && this.hls.trigger(y.BUFFER_FLUSHED, { type: e11 });
      });
    }
    get mediaSrc() {
      var e10, t10;
      let i10 = (null == (e10 = this.media) || null == (t10 = e10.querySelector) ? void 0 : t10.call(e10, "source")) || this.media;
      return null == i10 ? void 0 : i10.src;
    }
    onSBUpdateStart(e10) {
      let t10 = this.currentOp(e10);
      t10 && t10.onStart();
    }
    onSBUpdateEnd(e10) {
      var t10;
      if ((null == (t10 = this.mediaSource) ? void 0 : t10.readyState) === "closed") return void this.resetBuffer(e10);
      let i10 = this.currentOp(e10);
      i10 && (i10.onComplete(), this.shiftAndExecuteNext(e10));
    }
    onSBUpdateError(e10, t10) {
      var i10;
      let r10 = Error(`${e10} SourceBuffer error. MediaSource readyState: ${null == (i10 = this.mediaSource) ? void 0 : i10.readyState}`);
      this.error(`${r10}`, t10), this.hls.trigger(y.ERROR, { type: m.MEDIA_ERROR, details: p.BUFFER_APPENDING_ERROR, sourceBufferName: e10, error: r10, fatal: false });
      let s10 = this.currentOp(e10);
      s10 && s10.onError(r10);
    }
    updateTimestampOffset(e10, t10, i10, r10, s10, a10) {
      Math.abs(t10 - e10.timestampOffset) >= i10 && (this.log(`Updating ${r10} SourceBuffer timestampOffset to ${t10} (sn: ${s10} cc: ${a10})`), e10.timestampOffset = t10);
    }
    removeExecutor(e10, t10, i10) {
      let { media: r10, mediaSource: s10 } = this, a10 = this.tracks[e10], n2 = null == a10 ? void 0 : a10.buffer;
      if (!r10 || !s10 || !n2) {
        this.warn(`Attempting to remove from the ${e10} SourceBuffer, but it does not exist`), this.shiftAndExecuteNext(e10);
        return;
      }
      let l2 = f(r10.duration) ? r10.duration : 1 / 0, o2 = f(s10.duration) ? s10.duration : 1 / 0, h2 = Math.max(0, t10), d2 = Math.min(i10, l2, o2);
      d2 > h2 && (!a10.ending || a10.ended) ? (a10.ended = false, this.log(`Removing [${h2},${d2}] from the ${e10} SourceBuffer`), n2.remove(h2, d2)) : this.shiftAndExecuteNext(e10);
    }
    appendExecutor(e10, t10) {
      let i10 = this.tracks[t10], r10 = null == i10 ? void 0 : i10.buffer;
      if (!r10) throw new r2(`Attempting to append to the ${t10} SourceBuffer, but it does not exist`);
      i10.ending = false, i10.ended = false, r10.appendBuffer(e10);
    }
    blockUntilOpen(e10) {
      if (this.isUpdating() || this.isQueued()) this.blockBuffers(e10).catch((e11) => {
        this.warn(`SourceBuffer blocked callback ${e11}`), this.stepOperationQueue(this.sourceBufferTypes);
      });
      else try {
        e10();
      } catch (e11) {
        this.warn(`Callback run without blocking ${this.operationQueue} ${e11}`);
      }
    }
    isUpdating() {
      return this.sourceBuffers.some(([e10, t10]) => e10 && t10.updating);
    }
    isQueued() {
      return this.sourceBuffers.some(([e10]) => e10 && !!this.currentOp(e10));
    }
    isPending(e10) {
      return !!e10 && !e10.buffer;
    }
    blockBuffers(e10, t10 = this.sourceBufferTypes) {
      if (!t10.length) return this.log("Blocking operation requested, but no SourceBuffers exist"), Promise.resolve().then(e10);
      let { operationQueue: i10 } = this, r10 = t10.map((e11) => this.appendBlocker(e11));
      return t10.length > 1 && this.blockedAudioAppend && this.unblockAudio(), Promise.all(r10).then((t11) => {
        i10 === this.operationQueue && (e10(), this.stepOperationQueue(this.sourceBufferTypes));
      });
    }
    stepOperationQueue(e10) {
      e10.forEach((e11) => {
        var t10;
        let i10 = null == (t10 = this.tracks[e11]) ? void 0 : t10.buffer;
        i10 && !i10.updating && this.shiftAndExecuteNext(e11);
      });
    }
    append(e10, t10, i10) {
      this.operationQueue && this.operationQueue.append(e10, t10, i10);
    }
    appendBlocker(e10) {
      if (this.operationQueue) return this.operationQueue.appendBlocker(e10);
    }
    currentOp(e10) {
      return this.operationQueue ? this.operationQueue.current(e10) : null;
    }
    executeNext(e10) {
      e10 && this.operationQueue && this.operationQueue.executeNext(e10);
    }
    shiftAndExecuteNext(e10) {
      this.operationQueue && this.operationQueue.shiftAndExecuteNext(e10);
    }
    get pendingTrackCount() {
      return Object.keys(this.tracks).reduce((e10, t10) => e10 + +!!this.isPending(this.tracks[t10]), 0);
    }
    get sourceBufferCount() {
      return this.sourceBuffers.reduce((e10, [t10]) => e10 + +!!t10, 0);
    }
    get sourceBufferTypes() {
      return this.sourceBuffers.map(([e10]) => e10).filter((e10) => !!e10);
    }
    addBufferListener(e10, t10, i10) {
      let r10 = this.tracks[e10];
      if (!r10) return;
      let s10 = r10.buffer;
      if (!s10) return;
      let a10 = i10.bind(this, e10);
      r10.listeners.push({ event: t10, listener: a10 }), s10.addEventListener(t10, a10);
    }
    removeBufferListeners(e10) {
      let t10 = this.tracks[e10];
      if (!t10) return;
      let i10 = t10.buffer;
      i10 && (t10.listeners.forEach((e11) => {
        i10.removeEventListener(e11.event, e11.listener);
      }), t10.listeners.length = 0);
    }
  }, capLevelController: r5, errorController: class extends O {
    constructor(e10) {
      super("error-controller", e10.logger), this.hls = void 0, this.playlistError = 0, this.hls = e10, this.registerListeners();
    }
    registerListeners() {
      let e10 = this.hls;
      e10.on(y.ERROR, this.onError, this), e10.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.on(y.LEVEL_UPDATED, this.onLevelUpdated, this);
    }
    unregisterListeners() {
      let e10 = this.hls;
      e10 && (e10.off(y.ERROR, this.onError, this), e10.off(y.ERROR, this.onErrorOut, this), e10.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.off(y.LEVEL_UPDATED, this.onLevelUpdated, this));
    }
    destroy() {
      this.unregisterListeners(), this.hls = null;
    }
    startLoad(e10) {
    }
    stopLoad() {
      this.playlistError = 0;
    }
    getVariantLevelIndex(e10) {
      return (null == e10 ? void 0 : e10.type) === k ? e10.level : this.getVariantIndex();
    }
    getVariantIndex() {
      var e10;
      let t10 = this.hls, i10 = t10.currentLevel;
      return null != (e10 = t10.loadLevelObj) && e10.details || -1 === i10 ? t10.loadLevel : i10;
    }
    variantHasKey(e10, t10) {
      if (e10) {
        var i10;
        if (null != (i10 = e10.details) && i10.hasKey(t10)) return true;
        let r10 = e10.audioGroups;
        if (r10) return this.hls.allAudioTracks.filter((e11) => r10.indexOf(e11.groupId) >= 0).some((e11) => {
          var i11;
          return null == (i11 = e11.details) ? void 0 : i11.hasKey(t10);
        });
      }
      return false;
    }
    onManifestLoading() {
      this.playlistError = 0;
    }
    onLevelUpdated() {
      this.playlistError = 0;
    }
    onError(e10, t10) {
      var i10, r10, s10;
      if (t10.fatal) return;
      let a10 = this.hls, n2 = t10.context;
      switch (t10.details) {
        case p.FRAG_LOAD_ERROR:
        case p.FRAG_LOAD_TIMEOUT:
        case p.KEY_LOAD_ERROR:
        case p.KEY_LOAD_TIMEOUT:
          t10.errorAction = this.getFragRetryOrSwitchAction(t10);
          return;
        case p.FRAG_PARSING_ERROR:
          if (null != (i10 = t10.frag) && i10.gap) {
            t10.errorAction = ts();
            return;
          }
        case p.FRAG_GAP:
        case p.FRAG_DECRYPT_ERROR:
          t10.errorAction = this.getFragRetryOrSwitchAction(t10), t10.errorAction.action = 2;
          return;
        case p.LEVEL_EMPTY_ERROR:
        case p.LEVEL_PARSING_ERROR:
          {
            let e11 = t10.parent === k ? t10.level : a10.loadLevel;
            t10.details === p.LEVEL_EMPTY_ERROR && null != (r10 = t10.context) && null != (r10 = r10.levelDetails) && r10.live ? t10.errorAction = this.getPlaylistRetryOrSwitchAction(t10, e11) : (t10.levelRetry = false, t10.errorAction = this.getLevelSwitchAction(t10, e11));
          }
          return;
        case p.LEVEL_LOAD_ERROR:
        case p.LEVEL_LOAD_TIMEOUT:
          "number" == typeof (null == n2 ? void 0 : n2.level) && (t10.errorAction = this.getPlaylistRetryOrSwitchAction(t10, n2.level));
          return;
        case p.AUDIO_TRACK_LOAD_ERROR:
        case p.AUDIO_TRACK_LOAD_TIMEOUT:
        case p.SUBTITLE_LOAD_ERROR:
        case p.SUBTITLE_TRACK_LOAD_TIMEOUT:
          if (n2) {
            let e11 = a10.loadLevelObj;
            e11 && (n2.type === b && e11.hasAudioGroup(n2.groupId) || n2.type === I && e11.hasSubtitleGroup(n2.groupId)) && (t10.errorAction = this.getPlaylistRetryOrSwitchAction(t10, a10.loadLevel), t10.errorAction.action = 2, t10.errorAction.flags = 1);
          }
          return;
        case p.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
          t10.errorAction = { action: 2, flags: 2 };
          return;
        case p.KEY_SYSTEM_SESSION_UPDATE_FAILED:
        case p.KEY_SYSTEM_STATUS_INTERNAL_ERROR:
        case p.KEY_SYSTEM_NO_SESSION:
          t10.errorAction = { action: 2, flags: 4 };
          return;
        case p.BUFFER_ADD_CODEC_ERROR:
        case p.REMUX_ALLOC_ERROR:
        case p.BUFFER_APPEND_ERROR:
          t10.errorAction || (t10.errorAction = this.getLevelSwitchAction(t10, null != (s10 = t10.level) ? s10 : a10.loadLevel));
          return;
        case p.INTERNAL_EXCEPTION:
        case p.BUFFER_APPENDING_ERROR:
        case p.BUFFER_FULL_ERROR:
        case p.LEVEL_SWITCH_ERROR:
        case p.BUFFER_STALLED_ERROR:
        case p.BUFFER_SEEK_OVER_HOLE:
        case p.BUFFER_NUDGE_ON_STALL:
          t10.errorAction = ts();
          return;
      }
      t10.type === m.KEY_SYSTEM_ERROR && (t10.levelRetry = false, t10.errorAction = ts());
    }
    getPlaylistRetryOrSwitchAction(e10, t10) {
      let i10 = e7(this.hls.config.playlistLoadPolicy, e10), r10 = this.playlistError++;
      if (ti(i10, r10, e8(e10), e10.response)) return { action: 5, flags: 0, retryConfig: i10, retryCount: r10 };
      let s10 = this.getLevelSwitchAction(e10, t10);
      return i10 && (s10.retryConfig = i10, s10.retryCount = r10), s10;
    }
    getFragRetryOrSwitchAction(e10) {
      let t10 = this.hls, i10 = this.getVariantLevelIndex(e10.frag), r10 = t10.levels[i10], { fragLoadPolicy: s10, keyLoadPolicy: a10 } = t10.config, n2 = e7(e6(e10) ? a10 : s10, e10), l2 = t10.levels.reduce((e11, t11) => e11 + t11.fragmentError, 0);
      if (r10 && (e10.details !== p.FRAG_GAP && r10.fragmentError++, !e9(e10)) && ti(n2, l2, e8(e10), e10.response)) return { action: 5, flags: 0, retryConfig: n2, retryCount: l2 };
      let o2 = this.getLevelSwitchAction(e10, i10);
      return n2 && (o2.retryConfig = n2, o2.retryCount = l2), o2;
    }
    getLevelSwitchAction(e10, t10) {
      let i10 = this.hls;
      null == t10 && (t10 = i10.loadLevel);
      let r10 = this.hls.levels[t10];
      if (r10) {
        var s10, a10, n2, l2;
        let t11 = e10.details;
        r10.loadError++, t11 === p.BUFFER_APPEND_ERROR && r10.fragmentError++;
        let o2 = -1, { levels: h2, loadLevel: d2, minAutoLevel: u2, maxAutoLevel: f2 } = i10;
        i10.autoLevelEnabled || i10.config.preserveManualLevelOnError || (i10.loadLevel = -1);
        let c2 = null == (s10 = e10.frag) ? void 0 : s10.type, g2 = (c2 === D && t11 === p.FRAG_PARSING_ERROR || "audio" === e10.sourceBufferName && (t11 === p.BUFFER_ADD_CODEC_ERROR || t11 === p.BUFFER_APPEND_ERROR)) && h2.some(({ audioCodec: e11 }) => r10.audioCodec !== e11), m2 = "video" === e10.sourceBufferName && (t11 === p.BUFFER_ADD_CODEC_ERROR || t11 === p.BUFFER_APPEND_ERROR) && h2.some(({ codecSet: e11, audioCodec: t12 }) => r10.codecSet !== e11 && r10.audioCodec === t12), { type: y2, groupId: v2 } = null != (a10 = e10.context) ? a10 : {};
        for (let i11 = h2.length; i11--; ) {
          let s11 = (i11 + d2) % h2.length;
          if (s11 !== d2 && s11 >= u2 && s11 <= f2 && 0 === h2[s11].loadError) {
            let i12 = h2[s11];
            if (t11 === p.FRAG_GAP && c2 === k && e10.frag) {
              let t12 = h2[s11].details;
              if (t12) {
                let i13 = e3(e10.frag, t12.fragments, e10.frag.start);
                if (null != i13 && i13.gap) continue;
              }
            } else if (y2 === b && i12.hasAudioGroup(v2) || y2 === I && i12.hasSubtitleGroup(v2)) continue;
            else if (c2 === D && null != (n2 = r10.audioGroups) && n2.some((e11) => i12.hasAudioGroup(e11)) || c2 === _ && null != (l2 = r10.subtitleGroups) && l2.some((e11) => i12.hasSubtitleGroup(e11)) || g2 && r10.audioCodec === i12.audioCodec || m2 && r10.codecSet === i12.codecSet || !g2 && r10.codecSet !== i12.codecSet) continue;
            o2 = s11;
            break;
          }
        }
        if (o2 > -1 && i10.loadLevel !== o2) return e10.levelRetry = true, this.playlistError = 0, { action: 2, flags: 0, nextAutoLevel: o2 };
      }
      return { action: 2, flags: 1 };
    }
    onErrorOut(e10, t10) {
      var i10;
      switch (null == (i10 = t10.errorAction) ? void 0 : i10.action) {
        case 0:
          break;
        case 2:
          this.sendAlternateToPenaltyBox(t10), t10.errorAction.resolved || t10.details === p.FRAG_GAP ? /MediaSource readyState: ended/.test(t10.error.message) && (this.warn(`MediaSource ended after "${t10.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`), this.hls.recoverMediaError()) : t10.fatal = true;
      }
      if (t10.fatal) return void this.hls.stopLoad();
    }
    sendAlternateToPenaltyBox(e10) {
      let t10 = this.hls, i10 = e10.errorAction;
      if (!i10) return;
      let { flags: r10 } = i10, s10 = i10.nextAutoLevel;
      switch (r10) {
        case 0:
          this.switchLevel(e10, s10);
          break;
        case 2: {
          let r11 = this.getVariantLevelIndex(e10.frag), s11 = t10.levels[r11], a11 = null == s11 ? void 0 : s11.attrs["HDCP-LEVEL"];
          if (i10.hdcpLevel = a11, "NONE" === a11) this.warn("HDCP policy resticted output with HDCP-LEVEL=NONE");
          else if (a11) {
            t10.maxHdcpLevel = eG[eG.indexOf(a11) - 1], i10.resolved = true, this.warn(`Restricting playback to HDCP-LEVEL of "${t10.maxHdcpLevel}" or lower`);
            break;
          }
        }
        case 4: {
          let t11 = e10.decryptdata;
          if (t11) {
            let r11 = this.hls.levels, s11 = r11.length;
            for (let i11 = s11; i11--; ) if (this.variantHasKey(r11[i11], t11)) {
              var a10, n2;
              this.log(`Banned key found in level ${i11} (${r11[i11].bitrate}bps) or audio group "${null == (a10 = r11[i11].audioGroups) ? void 0 : a10.join(",")}" (${null == (n2 = e10.frag) ? void 0 : n2.type} fragment) ${V(t11.keyId || [])}`), r11[i11].fragmentError++, r11[i11].loadError++, this.log(`Removing level ${i11} with key error (${e10.error})`), this.hls.removeLevel(i11);
            }
            let l2 = e10.frag;
            if (this.hls.levels.length < s11) i10.resolved = true;
            else if (l2 && l2.type !== k) {
              let e11 = l2.decryptdata;
              e11 && !t11.matches(e11) && (i10.resolved = true);
            }
          }
        }
      }
      i10.resolved || this.switchLevel(e10, s10);
    }
    switchLevel(e10, t10) {
      if (void 0 !== t10 && e10.errorAction && (this.warn(`switching to level ${t10} after ${e10.details}`), this.hls.nextAutoLevel = t10, e10.errorAction.resolved = true, this.hls.nextLoadLevel = this.hls.nextAutoLevel, e10.details === p.BUFFER_ADD_CODEC_ERROR && e10.mimeType && "audiovideo" !== e10.sourceBufferName)) {
        let t11 = eO(e10.mimeType), i10 = this.hls.levels;
        for (let r10 = i10.length; r10--; ) i10[r10][`${e10.sourceBufferName}Codec`] === t11 && (this.log(`Removing level ${r10} for ${e10.details} ("${t11}" not supported)`), this.hls.removeLevel(r10));
      }
    }
  }, fpsController: class {
    constructor(e10) {
      this.hls = void 0, this.isVideoPlaybackQualityAvailable = false, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = e10, this.registerListeners();
    }
    setStreamController(e10) {
      this.streamController = e10;
    }
    registerListeners() {
      this.hls.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.on(y.MEDIA_DETACHING, this.onMediaDetaching, this);
    }
    unregisterListeners() {
      this.hls.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.off(y.MEDIA_DETACHING, this.onMediaDetaching, this);
    }
    destroy() {
      this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = false, this.media = null;
    }
    onMediaAttaching(e10, t10) {
      let i10 = this.hls.config;
      if (i10.capLevelOnFPSDrop) {
        let e11 = t10.media instanceof self.HTMLVideoElement ? t10.media : null;
        this.media = e11, e11 && "function" == typeof e11.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = true), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), i10.fpsDroppedMonitoringPeriod);
      }
    }
    onMediaDetaching() {
      this.media = null;
    }
    checkFPS(e10, t10, i10) {
      let r10 = performance.now();
      if (t10) {
        if (this.lastTime) {
          let e11 = r10 - this.lastTime, s10 = i10 - this.lastDroppedFrames, a10 = t10 - this.lastDecodedFrames, n2 = 1e3 * s10 / e11, l2 = this.hls;
          if (l2.trigger(y.FPS_DROP, { currentDropped: s10, currentDecoded: a10, totalDroppedFrames: i10 }), n2 > 0 && s10 > l2.config.fpsDroppedMonitoringThreshold * a10) {
            let e12 = l2.currentLevel;
            l2.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + e12), e12 > 0 && (-1 === l2.autoLevelCapping || l2.autoLevelCapping >= e12) && (e12 -= 1, l2.trigger(y.FPS_DROP_LEVEL_CAPPING, { level: e12, droppedLevel: l2.currentLevel }), l2.autoLevelCapping = e12, this.streamController.nextLevelSwitch());
          }
        }
        this.lastTime = r10, this.lastDroppedFrames = i10, this.lastDecodedFrames = t10;
      }
    }
    checkFPSInterval() {
      let e10 = this.media;
      if (e10) if (this.isVideoPlaybackQualityAvailable) {
        let t10 = e10.getVideoPlaybackQuality();
        this.checkFPS(e10, t10.totalVideoFrames, t10.droppedVideoFrames);
      } else this.checkFPS(e10, e10.webkitDecodedFrameCount, e10.webkitDroppedFrameCount);
    }
  }, stretchShortVideoTrack: false, maxAudioFramesDrift: 1, forceKeyFrameOnDiscontinuity: true, abrEwmaFastLive: 3, abrEwmaSlowLive: 9, abrEwmaFastVoD: 3, abrEwmaSlowVoD: 9, abrEwmaDefaultEstimate: 5e5, abrEwmaDefaultEstimateMax: 5e6, abrBandWidthFactor: 0.95, abrBandWidthUpFactor: 0.7, abrMaxWithRealBitrate: false, maxStarvationDelay: 4, maxLoadingDelay: 4, minAutoBitrate: 0, emeEnabled: false, widevineLicenseUrl: void 0, drmSystems: {}, drmSystemOptions: {}, requestMediaKeySystemAccessFunc: tJ, requireKeySystemAccessOnStart: false, testBandwidth: true, progressive: false, lowLatencyMode: true, cmcd: void 0, enableDateRangeMetadataCues: true, enableEmsgMetadataCues: true, enableEmsgKLVMetadata: false, enableID3MetadataCues: true, enableInterstitialPlayback: true, interstitialAppendInPlace: true, interstitialLiveLookAhead: 10, useMediaCapabilities: true, preserveManualLevelOnError: false, certLoadPolicy: { default: { maxTimeToFirstByteMs: 8e3, maxLoadTimeMs: 2e4, timeoutRetry: null, errorRetry: null } }, keyLoadPolicy: { default: { maxTimeToFirstByteMs: 8e3, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 2e4, backoff: "linear" }, errorRetry: { maxNumRetry: 8, retryDelayMs: 1e3, maxRetryDelayMs: 2e4, backoff: "linear" } } }, manifestLoadPolicy: { default: { maxTimeToFirstByteMs: 1 / 0, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, playlistLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 2, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, fragLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 12e4, timeoutRetry: { maxNumRetry: 4, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 6, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, steeringManifestLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, interstitialAssetListLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 3e4, timeoutRetry: { maxNumRetry: 0, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 0, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, manifestLoadingTimeOut: 1e4, manifestLoadingMaxRetry: 1, manifestLoadingRetryDelay: 1e3, manifestLoadingMaxRetryTimeout: 64e3, levelLoadingTimeOut: 1e4, levelLoadingMaxRetry: 4, levelLoadingRetryDelay: 1e3, levelLoadingMaxRetryTimeout: 64e3, fragLoadingTimeOut: 2e4, fragLoadingMaxRetry: 6, fragLoadingRetryDelay: 1e3, fragLoadingMaxRetryTimeout: 64e3 }, { cueHandler: aF, enableWebVTT: true, enableIMSC1: true, enableCEA708Captions: true, captionsTextTrack1Label: "English", captionsTextTrack1LanguageCode: "en", captionsTextTrack2Label: "Spanish", captionsTextTrack2LanguageCode: "es", captionsTextTrack3Label: "Unknown CC", captionsTextTrack3LanguageCode: "", captionsTextTrack4Label: "Unknown CC", captionsTextTrack4LanguageCode: "", renderTextTracksNatively: true }), {}, { subtitleStreamController: class extends iH {
    constructor(e10, t10, i10) {
      super(e10, t10, i10, "subtitle-stream-controller", _), this.currentTrackId = -1, this.tracksBuffered = [], this.mainDetails = null, this.registerListeners();
    }
    onHandlerDestroying() {
      this.unregisterListeners(), super.onHandlerDestroying(), this.mainDetails = null;
    }
    registerListeners() {
      super.registerListeners();
      let { hls: e10 } = this;
      e10.on(y.LEVEL_LOADED, this.onLevelLoaded, this), e10.on(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e10.on(y.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e10.on(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e10.on(y.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e10.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this);
    }
    unregisterListeners() {
      super.unregisterListeners();
      let { hls: e10 } = this;
      e10.off(y.LEVEL_LOADED, this.onLevelLoaded, this), e10.off(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e10.off(y.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e10.off(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e10.off(y.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e10.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this);
    }
    startLoad(e10, t10) {
      this.stopLoad(), this.state = iw, this.setInterval(500), this.nextLoadPosition = this.lastCurrentTime = e10 + this.timelineOffset, this.startPosition = t10 ? -1 : e10, this.tick();
    }
    onManifestLoading() {
      super.onManifestLoading(), this.mainDetails = null;
    }
    onMediaDetaching(e10, t10) {
      this.tracksBuffered = [], super.onMediaDetaching(e10, t10);
    }
    onLevelLoaded(e10, t10) {
      this.mainDetails = t10.details;
    }
    onSubtitleFragProcessed(e10, t10) {
      let i10, { frag: r10, success: s10 } = t10;
      if (this.fragContextChanged(r10) || (J(r10) && (this.fragPrevious = r10), this.state = iw), !s10) return;
      let a10 = this.tracksBuffered[this.currentTrackId];
      if (!a10) return;
      let n2 = r10.start;
      for (let e11 = 0; e11 < a10.length; e11++) if (n2 >= a10[e11].start && n2 <= a10[e11].end) {
        i10 = a10[e11];
        break;
      }
      let l2 = r10.start + r10.duration;
      i10 ? i10.end = l2 : (i10 = { start: n2, end: l2 }, a10.push(i10)), this.fragmentTracker.fragBuffered(r10), this.fragBufferedComplete(r10, null), this.media && this.tick();
    }
    onBufferFlushing(e10, t10) {
      let { startOffset: i10, endOffset: r10 } = t10;
      if (0 === i10 && r10 !== 1 / 0) {
        let e11 = r10 - 1;
        if (e11 <= 0) return;
        t10.endOffsetSubtitles = Math.max(0, e11), this.tracksBuffered.forEach((t11) => {
          for (let i11 = 0; i11 < t11.length; ) {
            if (t11[i11].end <= e11) {
              t11.shift();
              continue;
            }
            if (t11[i11].start < e11) t11[i11].start = e11;
            else break;
            i11++;
          }
        }), this.fragmentTracker.removeFragmentsInRange(i10, e11, _);
      }
    }
    onError(e10, t10) {
      let i10 = t10.frag;
      (null == i10 ? void 0 : i10.type) === _ && (t10.details === p.FRAG_GAP && this.fragmentTracker.fragBuffered(i10, true), this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== iC && (this.state = iw));
    }
    onSubtitleTracksUpdated(e10, { subtitleTracks: t10 }) {
      if (this.levels && rQ(this.levels, t10)) {
        this.levels = t10.map((e11) => new eY(e11));
        return;
      }
      this.tracksBuffered = [], this.levels = t10.map((e11) => {
        let t11 = new eY(e11);
        return this.tracksBuffered[t11.id] = [], t11;
      }), this.fragmentTracker.removeFragmentsInRange(0, 1 / 0, _), this.fragPrevious = null, this.mediaBuffer = null;
    }
    onSubtitleTrackSwitch(e10, t10) {
      var i10;
      if (this.currentTrackId = t10.id, !(null != (i10 = this.levels) && i10.length) || -1 === this.currentTrackId) return void this.clearInterval();
      let r10 = this.levels[this.currentTrackId];
      null != r10 && r10.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, r10 && this.state !== iC && this.setInterval(500);
    }
    onSubtitleTrackLoaded(e10, t10) {
      var i10, r10;
      let { currentTrackId: s10, levels: a10 } = this, { details: n2, id: l2 } = t10;
      if (!a10) return void this.warn(`Subtitle tracks were reset while loading level ${l2}`);
      let o2 = a10[l2];
      if (l2 >= a10.length || !o2) return;
      this.log(`Subtitle track ${l2} loaded [${n2.startSN},${n2.endSN}]${n2.lastPartSn ? `[part-${n2.lastPartSn}-${n2.lastPartIndex}]` : ""},duration:${n2.totalduration}`), this.mediaBuffer = this.mediaBufferTimeRanges;
      let h2 = 0;
      if (n2.live || null != (i10 = o2.details) && i10.live) {
        if (n2.deltaUpdateFailed) return;
        let e11 = this.mainDetails;
        if (!e11) {
          this.startFragRequested = false;
          return;
        }
        let t11 = e11.fragments[0];
        o2.details ? 0 === (h2 = this.alignPlaylists(n2, o2.details, null == (r10 = this.levelLastLoaded) ? void 0 : r10.details)) && t11 && ip(n2, h2 = t11.start) : n2.hasProgramDateTime && e11.hasProgramDateTime ? (ik(n2, e11), h2 = n2.fragmentStart) : t11 && ip(n2, h2 = t11.start), e11 && !this.startFragRequested && this.setStartPosition(e11, h2);
      }
      o2.details = n2, this.levelLastLoaded = o2, l2 === s10 && (this.hls.trigger(y.SUBTITLE_TRACK_UPDATED, { details: n2, id: l2, groupId: t10.groupId }), this.tick(), n2.live && !this.fragCurrent && this.media && this.state === iw && (e3(null, n2.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), o2.details = void 0)));
    }
    _handleFragmentLoadComplete(e10) {
      let { frag: t10, payload: i10 } = e10, r10 = t10.decryptdata, s10 = this.hls;
      if (!this.fragContextChanged(t10) && i10 && i10.byteLength > 0 && null != r10 && r10.key && r10.iv && tO(r10.method)) {
        let e11 = performance.now();
        this.decrypter.decrypt(new Uint8Array(i10), r10.key.buffer, r10.iv.buffer, tF(r10.method)).catch((e12) => {
          throw s10.trigger(y.ERROR, { type: m.MEDIA_ERROR, details: p.FRAG_DECRYPT_ERROR, fatal: false, error: e12, reason: e12.message, frag: t10 }), e12;
        }).then((i11) => {
          let r11 = performance.now();
          s10.trigger(y.FRAG_DECRYPTED, { frag: t10, payload: i11, stats: { tstart: e11, tdecrypt: r11 } });
        }).catch((e12) => {
          this.warn(`${e12.name}: ${e12.message}`), this.state = iw;
        });
      }
    }
    doTick() {
      if (!this.media) {
        this.state = iw;
        return;
      }
      if (this.state === iw) {
        let { currentTrackId: e10, levels: t10 } = this, i10 = null == t10 ? void 0 : t10[e10];
        if (!i10 || !t10.length || !i10.details || this.waitForLive(i10)) return;
        let { config: r10 } = this, s10 = this.getLoadPosition(), { end: a10, len: n2 } = tR.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], s10, r10.maxBufferHole), l2 = i10.details;
        if (n2 > this.hls.maxBufferLength + l2.levelTargetDuration) return;
        let o2 = l2.fragments, h2 = o2.length, d2 = l2.edge, u2 = null, f2 = this.fragPrevious;
        if (a10 < d2) {
          let e11 = r10.maxFragLookUpTolerance;
          (u2 = e3(f2, o2, Math.max(o2[0].start, a10), a10 > d2 - e11 ? 0 : e11)) || !f2 || !(f2.start < o2[0].start) || (u2 = o2[0]);
        } else u2 = o2[h2 - 1];
        if (!(u2 = this.filterReplacedPrimary(u2, i10.details))) return;
        let c2 = o2[u2.sn - l2.startSN - 1];
        if (c2 && c2.cc === u2.cc && this.fragmentTracker.getState(c2) === ta && (u2 = c2), this.fragmentTracker.getState(u2) === ta) {
          let e11 = this.mapToInitFragWhenRequired(u2);
          e11 && this.loadFragment(e11, i10, a10);
        }
      }
    }
    loadFragment(e10, t10, i10) {
      J(e10) ? super.loadFragment(e10, t10, i10) : this._loadInitSegment(e10, t10);
    }
    get mediaBufferTimeRanges() {
      return new s1(this.tracksBuffered[this.currentTrackId] || []);
    }
  }, subtitleTrackController: class extends rX {
    constructor(e10) {
      super(e10, "subtitle-track-controller"), this.media = null, this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = true, this.queuedDefaultTrack = -1, this.useTextTrackPolling = false, this.subtitlePollingInterval = -1, this._subtitleDisplay = true, this.asyncPollTrackChange = () => this.pollTrackChange(0), this.onTextTracksChanged = () => {
        if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !this.media || !this.hls.config.renderTextTracksNatively) return;
        let e11 = null, t10 = sG(this.media.textTracks);
        for (let i11 = 0; i11 < t10.length; i11++) if ("hidden" === t10[i11].mode) e11 = t10[i11];
        else if ("showing" === t10[i11].mode) {
          e11 = t10[i11];
          break;
        }
        let i10 = this.findTrackForTextTrack(e11);
        this.subtitleTrack !== i10 && this.setSubtitleTrack(i10);
      }, this.registerListeners();
    }
    destroy() {
      this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, this.onTextTracksChanged = this.asyncPollTrackChange = null, super.destroy();
    }
    get subtitleDisplay() {
      return this._subtitleDisplay;
    }
    set subtitleDisplay(e10) {
      this._subtitleDisplay = e10, this.trackId > -1 && this.toggleTrackModes();
    }
    registerListeners() {
      let { hls: e10 } = this;
      e10.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e10.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e10.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e10.on(y.LEVEL_LOADING, this.onLevelLoading, this), e10.on(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e10.on(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e10.on(y.ERROR, this.onError, this);
    }
    unregisterListeners() {
      let { hls: e10 } = this;
      e10.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e10.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e10.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e10.off(y.LEVEL_LOADING, this.onLevelLoading, this), e10.off(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e10.off(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e10.off(y.ERROR, this.onError, this);
    }
    onMediaAttached(e10, t10) {
      this.media = t10.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
    }
    pollTrackChange(e10) {
      self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.onTextTracksChanged, e10);
    }
    onMediaDetaching(e10, t10) {
      let i10 = this.media;
      if (!i10) return;
      let r10 = !!t10.transferMedia;
      self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || i10.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), this.subtitleTrack = -1, this.media = null, r10 || sG(i10.textTracks).forEach((e11) => {
        sB(e11);
      });
    }
    onManifestLoading() {
      this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = true;
    }
    onManifestParsed(e10, t10) {
      this.tracks = t10.subtitleTracks;
    }
    onSubtitleTrackLoaded(e10, t10) {
      let { id: i10, groupId: r10, details: s10 } = t10, a10 = this.tracksInGroup[i10];
      if (!a10 || a10.groupId !== r10) return void this.warn(`Subtitle track with id:${i10} and group:${r10} not found in active group ${null == a10 ? void 0 : a10.groupId}`);
      let n2 = a10.details;
      a10.details = t10.details, this.log(`Subtitle track ${i10} "${a10.name}" lang:${a10.lang} group:${r10} loaded [${s10.startSN}-${s10.endSN}]`), i10 === this.trackId && this.playlistLoaded(i10, t10, n2);
    }
    onLevelLoading(e10, t10) {
      this.switchLevel(t10.level);
    }
    onLevelSwitching(e10, t10) {
      this.switchLevel(t10.level);
    }
    switchLevel(e10) {
      let t10 = this.hls.levels[e10];
      if (!t10) return;
      let i10 = t10.subtitleGroups || null, r10 = this.groupIds, s10 = this.currentTrack;
      if (!i10 || (null == r10 ? void 0 : r10.length) !== (null == i10 ? void 0 : i10.length) || null != i10 && i10.some((e11) => (null == r10 ? void 0 : r10.indexOf(e11)) === -1)) {
        this.groupIds = i10, this.trackId = -1, this.currentTrack = null;
        let e11 = this.tracks.filter((e12) => !i10 || -1 !== i10.indexOf(e12.groupId));
        if (e11.length) this.selectDefaultTrack && !e11.some((e12) => e12.default) && (this.selectDefaultTrack = false), e11.forEach((e12, t12) => {
          e12.id = t12;
        });
        else if (!s10 && !this.tracksInGroup.length) return;
        this.tracksInGroup = e11;
        let t11 = this.hls.config.subtitlePreference;
        if (!s10 && t11) {
          this.selectDefaultTrack = false;
          let i11 = ez(t11, e11);
          if (i11 > -1) s10 = e11[i11];
          else {
            let e12 = ez(t11, this.tracks);
            s10 = this.tracks[e12];
          }
        }
        let r11 = this.findTrackId(s10);
        -1 === r11 && s10 && (r11 = this.findTrackId(null)), this.log(`Updating subtitle tracks, ${e11.length} track(s) found in "${null == i10 ? void 0 : i10.join(",")}" group-id`), this.hls.trigger(y.SUBTITLE_TRACKS_UPDATED, { subtitleTracks: e11 }), -1 !== r11 && -1 === this.trackId && this.setSubtitleTrack(r11);
      }
    }
    findTrackId(e10) {
      let t10 = this.tracksInGroup, i10 = this.selectDefaultTrack;
      for (let r10 = 0; r10 < t10.length; r10++) {
        let s10 = t10[r10];
        if ((!i10 || s10.default) && (i10 || e10) && (!e10 || eZ(s10, e10))) return r10;
      }
      if (e10) {
        for (let i11 = 0; i11 < t10.length; i11++) {
          let r10 = t10[i11];
          if (rz(e10.attrs, r10.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"])) return i11;
        }
        for (let i11 = 0; i11 < t10.length; i11++) {
          let r10 = t10[i11];
          if (rz(e10.attrs, r10.attrs, ["LANGUAGE"])) return i11;
        }
      }
      return -1;
    }
    findTrackForTextTrack(e10) {
      if (e10) {
        let t10 = this.tracksInGroup;
        for (let i10 = 0; i10 < t10.length; i10++) if (rZ(t10[i10], e10)) return i10;
      }
      return -1;
    }
    onError(e10, t10) {
      !t10.fatal && t10.context && (t10.context.type !== I || t10.context.id !== this.trackId || this.groupIds && -1 === this.groupIds.indexOf(t10.context.groupId) || this.checkRetry(t10));
    }
    get allSubtitleTracks() {
      return this.tracks;
    }
    get subtitleTracks() {
      return this.tracksInGroup;
    }
    get subtitleTrack() {
      return this.trackId;
    }
    set subtitleTrack(e10) {
      this.selectDefaultTrack = false, this.setSubtitleTrack(e10);
    }
    setSubtitleOption(e10) {
      if (this.hls.config.subtitlePreference = e10, e10) {
        if (-1 === e10.id) return this.setSubtitleTrack(-1), null;
        let t10 = this.allSubtitleTracks;
        if (this.selectDefaultTrack = false, t10.length) {
          let i10 = this.currentTrack;
          if (i10 && eZ(e10, i10)) return i10;
          let r10 = ez(e10, this.tracksInGroup);
          if (r10 > -1) {
            let e11 = this.tracksInGroup[r10];
            return this.setSubtitleTrack(r10), e11;
          }
          {
            if (i10) return null;
            let r11 = ez(e10, t10);
            if (r11 > -1) return t10[r11];
          }
        }
      }
      return null;
    }
    loadPlaylist(e10) {
      super.loadPlaylist(), this.shouldLoadPlaylist(this.currentTrack) && this.scheduleLoading(this.currentTrack, e10);
    }
    loadingPlaylist(e10, t10) {
      super.loadingPlaylist(e10, t10);
      let i10 = e10.id, r10 = e10.groupId, s10 = this.getUrlWithDirectives(e10.url, t10), a10 = e10.details, n2 = null == a10 ? void 0 : a10.age;
      this.log(`Loading subtitle ${i10} "${e10.name}" lang:${e10.lang} group:${r10}${(null == t10 ? void 0 : t10.msn) !== void 0 ? " at sn " + t10.msn + " part " + t10.part : ""}${n2 && a10.live ? " age " + n2.toFixed(1) + (a10.type ? " " + a10.type : "") : ""} ${s10}`), this.hls.trigger(y.SUBTITLE_TRACK_LOADING, { url: s10, id: i10, groupId: r10, deliveryDirectives: t10 || null, track: e10 });
    }
    toggleTrackModes() {
      let e10, { media: t10 } = this;
      if (!t10) return;
      let i10 = sG(t10.textTracks), r10 = this.currentTrack;
      if (r10 && ((e10 = i10.filter((e11) => rZ(r10, e11))[0]) || this.warn(`Unable to find subtitle TextTrack with name "${r10.name}" and language "${r10.lang}"`)), [].slice.call(i10).forEach((t11) => {
        "disabled" !== t11.mode && t11 !== e10 && (t11.mode = "disabled");
      }), e10) {
        let t11 = this.subtitleDisplay ? "showing" : "hidden";
        e10.mode !== t11 && (e10.mode = t11);
      }
    }
    setSubtitleTrack(e10) {
      let t10 = this.tracksInGroup;
      if (!this.media) {
        this.queuedDefaultTrack = e10;
        return;
      }
      if (e10 < -1 || e10 >= t10.length || !f(e10)) return void this.warn(`Invalid subtitle track id: ${e10}`);
      this.selectDefaultTrack = false;
      let i10 = this.currentTrack, r10 = t10[e10] || null;
      if (this.trackId = e10, this.currentTrack = r10, this.toggleTrackModes(), !r10) return void this.hls.trigger(y.SUBTITLE_TRACK_SWITCH, { id: e10 });
      let s10 = !!r10.details && !r10.details.live;
      if (e10 === this.trackId && r10 === i10 && s10) return;
      this.log(`Switching to subtitle-track ${e10}` + (r10 ? ` "${r10.name}" lang:${r10.lang} group:${r10.groupId}` : ""));
      let { id: a10, groupId: n2 = "", name: l2, type: o2, url: h2 } = r10;
      this.hls.trigger(y.SUBTITLE_TRACK_SWITCH, { id: a10, groupId: n2, name: l2, type: o2, url: h2 });
      let d2 = this.switchParams(r10.url, null == i10 ? void 0 : i10.details, r10.details);
      this.loadPlaylist(d2);
    }
  }, timelineController: class {
    constructor(e10) {
      this.hls = void 0, this.media = null, this.config = void 0, this.enabled = true, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = aM(), this.captionsProperties = void 0, this.hls = e10, this.config = e10.config, this.Cues = e10.config.cueHandler, this.captionsProperties = { textTrack1: { label: this.config.captionsTextTrack1Label, languageCode: this.config.captionsTextTrack1LanguageCode }, textTrack2: { label: this.config.captionsTextTrack2Label, languageCode: this.config.captionsTextTrack2LanguageCode }, textTrack3: { label: this.config.captionsTextTrack3Label, languageCode: this.config.captionsTextTrack3LanguageCode }, textTrack4: { label: this.config.captionsTextTrack4Label, languageCode: this.config.captionsTextTrack4LanguageCode } }, e10.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e10.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e10.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.on(y.MANIFEST_LOADED, this.onManifestLoaded, this), e10.on(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e10.on(y.FRAG_LOADING, this.onFragLoading, this), e10.on(y.FRAG_LOADED, this.onFragLoaded, this), e10.on(y.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e10.on(y.FRAG_DECRYPTED, this.onFragDecrypted, this), e10.on(y.INIT_PTS_FOUND, this.onInitPtsFound, this), e10.on(y.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e10.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this);
    }
    destroy() {
      let { hls: e10 } = this;
      e10.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e10.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e10.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), e10.off(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e10.off(y.FRAG_LOADING, this.onFragLoading, this), e10.off(y.FRAG_LOADED, this.onFragLoaded, this), e10.off(y.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e10.off(y.FRAG_DECRYPTED, this.onFragDecrypted, this), e10.off(y.INIT_PTS_FOUND, this.onInitPtsFound, this), e10.off(y.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e10.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.media = null, this.cea608Parser1 = this.cea608Parser2 = void 0;
    }
    initCea608Parsers() {
      let e10 = new aC(this, "textTrack1"), t10 = new aC(this, "textTrack2"), i10 = new aC(this, "textTrack3"), r10 = new aC(this, "textTrack4");
      this.cea608Parser1 = new an(1, e10, t10), this.cea608Parser2 = new an(3, i10, r10);
    }
    addCues(e10, t10, i10, r10, s10) {
      let a10 = false;
      for (let e11 = s10.length; e11--; ) {
        var n2, l2;
        let r11 = s10[e11], o2 = (n2 = r11[0], l2 = r11[1], Math.min(l2, i10) - Math.max(n2, t10));
        if (o2 >= 0 && (r11[0] = Math.min(r11[0], t10), r11[1] = Math.max(r11[1], i10), a10 = true, o2 / (i10 - t10) > 0.5)) return;
      }
      if (a10 || s10.push([t10, i10]), this.config.renderTextTracksNatively) {
        let s11 = this.captionsTracks[e10];
        this.Cues.newCue(s11, t10, i10, r10);
      } else {
        let s11 = this.Cues.newCue(null, t10, i10, r10);
        this.hls.trigger(y.CUES_PARSED, { type: "captions", cues: s11, track: e10 });
      }
    }
    onInitPtsFound(e10, { frag: t10, id: i10, initPTS: r10, timescale: s10, trackId: a10 }) {
      let { unparsedVttFrags: n2 } = this;
      i10 === k && (this.initPTS[t10.cc] = { baseTime: r10, timescale: s10, trackId: a10 }), n2.length && (this.unparsedVttFrags = [], n2.forEach((e11) => {
        this.initPTS[e11.frag.cc] ? this.onFragLoaded(y.FRAG_LOADED, e11) : this.hls.trigger(y.SUBTITLE_FRAG_PROCESSED, { success: false, frag: e11.frag, error: Error("Subtitle discontinuity domain does not match main") });
      }));
    }
    getExistingTrack(e10, t10) {
      let { media: i10 } = this;
      if (i10) for (let r10 = 0; r10 < i10.textTracks.length; r10++) {
        let s10 = i10.textTracks[r10];
        if (ax(s10, { name: e10, lang: t10, characteristics: "transcribes-spoken-dialog,describes-music-and-sound" })) return s10;
      }
      return null;
    }
    createCaptionsTrack(e10) {
      this.config.renderTextTracksNatively ? this.createNativeTrack(e10) : this.createNonNativeTrack(e10);
    }
    createNativeTrack(e10) {
      if (this.captionsTracks[e10]) return;
      let { captionsProperties: t10, captionsTracks: i10, media: r10 } = this, { label: s10, languageCode: a10 } = t10[e10], n2 = this.getExistingTrack(s10, a10);
      if (n2) i10[e10] = n2, sB(i10[e10]), s$(i10[e10], r10);
      else {
        let t11 = this.createTextTrack("captions", s10, a10);
        t11 && (t11[e10] = true, i10[e10] = t11);
      }
    }
    createNonNativeTrack(e10) {
      if (this.nonNativeCaptionsTracks[e10]) return;
      let t10 = this.captionsProperties[e10];
      if (!t10) return;
      let i10 = { _id: e10, label: t10.label, kind: "captions", default: !!t10.media && !!t10.media.default, closedCaptions: t10.media };
      this.nonNativeCaptionsTracks[e10] = i10, this.hls.trigger(y.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [i10] });
    }
    createTextTrack(e10, t10, i10) {
      let r10 = this.media;
      if (r10) return r10.addTextTrack(e10, t10, i10);
    }
    onMediaAttaching(e10, t10) {
      this.media = t10.media, t10.mediaSource || this._cleanTracks();
    }
    onMediaDetaching(e10, t10) {
      let i10 = !!t10.transferMedia;
      if (this.media = null, i10) return;
      let { captionsTracks: r10 } = this;
      Object.keys(r10).forEach((e11) => {
        sB(r10[e11]), delete r10[e11];
      }), this.nonNativeCaptionsTracks = {};
    }
    onManifestLoading() {
      this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = aM(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
    }
    _cleanTracks() {
      let { media: e10 } = this;
      if (!e10) return;
      let t10 = e10.textTracks;
      if (t10) for (let e11 = 0; e11 < t10.length; e11++) sB(t10[e11]);
    }
    onSubtitleTracksUpdated(e10, t10) {
      let i10 = t10.subtitleTracks || [], r10 = i10.some((e11) => e11.textCodec === aS);
      if (this.config.enableWebVTT || r10 && this.config.enableIMSC1) {
        if (rQ(this.tracks, i10)) {
          this.tracks = i10;
          return;
        }
        if (this.textTracks = [], this.tracks = i10, this.config.renderTextTracksNatively) {
          let e11 = this.media, t11 = e11 ? sG(e11.textTracks) : null;
          if (this.tracks.forEach((e12, i11) => {
            let r11;
            if (t11) {
              let i12 = null;
              for (let r12 = 0; r12 < t11.length; r12++) if (t11[r12] && ax(t11[r12], e12)) {
                i12 = t11[r12], t11[r12] = null;
                break;
              }
              i12 && (r11 = i12);
            }
            if (r11) sB(r11);
            else {
              let t12 = aw(e12);
              (r11 = this.createTextTrack(t12, e12.name, e12.lang)) && (r11.mode = "disabled");
            }
            r11 && this.textTracks.push(r11);
          }), null != t11 && t11.length) {
            let e12 = t11.filter((e13) => null !== e13).map((e13) => e13.label);
            e12.length && this.hls.logger.warn(`Media element contains unused subtitle tracks: ${e12.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`);
          }
        } else if (this.tracks.length) {
          let e11 = this.tracks.map((e12) => ({ label: e12.name, kind: e12.type.toLowerCase(), default: e12.default, subtitleTrack: e12 }));
          this.hls.trigger(y.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: e11 });
        }
      }
    }
    onManifestLoaded(e10, t10) {
      this.config.enableCEA708Captions && t10.captions && t10.captions.forEach((e11) => {
        let t11 = /(?:CC|SERVICE)([1-4])/.exec(e11.instreamId);
        if (!t11) return;
        let i10 = `textTrack${t11[1]}`, r10 = this.captionsProperties[i10];
        r10 && (r10.label = e11.name, e11.lang && (r10.languageCode = e11.lang), r10.media = e11);
      });
    }
    closedCaptionsForLevel(e10) {
      let t10 = this.hls.levels[e10.level];
      return null == t10 ? void 0 : t10.attrs["CLOSED-CAPTIONS"];
    }
    onFragLoading(e10, t10) {
      if (this.enabled && t10.frag.type === k) {
        var i10, r10;
        let { cea608Parser1: e11, cea608Parser2: s10, lastSn: a10 } = this, { cc: n2, sn: l2 } = t10.frag, o2 = null != (i10 = null == (r10 = t10.part) ? void 0 : r10.index) ? i10 : -1;
        e11 && s10 && (l2 !== a10 + 1 || l2 === a10 && o2 !== this.lastPartIndex + 1 || n2 !== this.lastCc) && (e11.reset(), s10.reset()), this.lastCc = n2, this.lastSn = l2, this.lastPartIndex = o2;
      }
    }
    onFragLoaded(e10, t10) {
      let { frag: i10, payload: r10 } = t10;
      if (i10.type === _) if (r10.byteLength) {
        let e11 = i10.decryptdata, s10 = "stats" in t10;
        if (null == e11 || !e11.encrypted || s10) {
          let e12 = this.tracks[i10.level], s11 = this.vttCCs;
          s11[i10.cc] || (s11[i10.cc] = { start: i10.start, prevCC: this.prevCC, new: true }, this.prevCC = i10.cc), e12 && e12.textCodec === aS ? this._parseIMSC1(i10, r10) : this._parseVTTs(t10);
        }
      } else this.hls.trigger(y.SUBTITLE_FRAG_PROCESSED, { success: false, frag: i10, error: Error("Empty subtitle payload") });
    }
    _parseIMSC1(e10, t10) {
      let i10 = this.hls;
      ab(t10, this.initPTS[e10.cc], (t11) => {
        this._appendCues(t11, e10.level), i10.trigger(y.SUBTITLE_FRAG_PROCESSED, { success: true, frag: e10 });
      }, (t11) => {
        i10.logger.log(`Failed to parse IMSC1: ${t11}`), i10.trigger(y.SUBTITLE_FRAG_PROCESSED, { success: false, frag: e10, error: t11 });
      });
    }
    _parseVTTs(e10) {
      var t10, i10, r10, s10, a10, n2, l2, o2;
      let h2, d2, u2, f2, c2, g2, m2, p2, v2, { frag: E2, payload: T2 } = e10, { initPTS: S2, unparsedVttFrags: A2 } = this, L2 = S2.length - 1;
      if (!S2[E2.cc] && -1 === L2) return void A2.push(e10);
      let R2 = this.hls;
      i10 = null != (t10 = E2.initSegment) && t10.data ? ey(E2.initSegment.data, new Uint8Array(T2)).buffer : T2, r10 = this.initPTS[E2.cc], s10 = this.vttCCs, a10 = E2.cc, n2 = E2.start, l2 = (e11) => {
        this._appendCues(e11, E2.level), R2.trigger(y.SUBTITLE_FRAG_PROCESSED, { success: true, frag: E2 });
      }, o2 = (t11) => {
        let i11 = "Missing initPTS for VTT MPEGTS" === t11.message;
        i11 ? A2.push(e10) : this._fallbackToIMSC1(E2, T2), R2.logger.log(`Failed to parse VTT cue: ${t11}`), i11 && L2 > E2.cc || R2.trigger(y.SUBTITLE_FRAG_PROCESSED, { success: false, frag: E2, error: t11 });
      }, d2 = new am(), u2 = H(new Uint8Array(i10)).trim().replace(ap, "\n").split("\n"), f2 = [], c2 = r10 ? (function(e11, t11 = 1) {
        return r_(e11, 9e4, 1 / t11);
      })(r10.baseTime, r10.timescale) : 0, g2 = "00:00.000", m2 = 0, p2 = 0, v2 = true, d2.oncue = function(e11) {
        let t11 = s10[a10], i11 = s10.ccOffset, l3 = (m2 - c2) / 9e4;
        if (null != t11 && t11.new && (void 0 !== p2 ? i11 = s10.ccOffset = t11.start : aT(s10, a10, l3)), l3) {
          if (!r10) {
            h2 = Error("Missing initPTS for VTT MPEGTS");
            return;
          }
          i11 = l3 - s10.presentationOffset;
        }
        let o3 = e11.endTime - e11.startTime, d3 = rF((e11.startTime + i11 - p2) * 9e4, 9e4 * n2) / 9e4;
        e11.startTime = Math.max(d3, 0), e11.endTime = Math.max(d3 + o3, 0);
        let u3 = e11.text.trim();
        e11.text = decodeURIComponent(encodeURIComponent(u3)), e11.id || (e11.id = aE(e11.startTime, e11.endTime, u3)), e11.endTime > 0 && f2.push(e11);
      }, d2.onparsingerror = function(e11) {
        h2 = e11;
      }, d2.onflush = function() {
        h2 ? o2(h2) : l2(f2);
      }, u2.forEach((e11) => {
        if (v2) if (ay(e11, "X-TIMESTAMP-MAP=")) {
          v2 = false, e11.slice(16).split(",").forEach((e12) => {
            ay(e12, "LOCAL:") ? g2 = e12.slice(6) : ay(e12, "MPEGTS:") && (m2 = parseInt(e12.slice(7)));
          });
          try {
            p2 = av(g2) / 1e3;
          } catch (e12) {
            h2 = e12;
          }
          return;
        } else "" === e11 && (v2 = false);
        d2.parse(e11 + "\n");
      }), d2.flush();
    }
    _fallbackToIMSC1(e10, t10) {
      let i10 = this.tracks[e10.level];
      i10.textCodec || ab(t10, this.initPTS[e10.cc], () => {
        i10.textCodec = aS, this._parseIMSC1(e10, t10);
      }, () => {
        i10.textCodec = "wvtt";
      });
    }
    _appendCues(e10, t10) {
      let i10 = this.hls;
      if (this.config.renderTextTracksNatively) {
        let i11 = this.textTracks[t10];
        if (!i11 || "disabled" === i11.mode) return;
        e10.forEach((e11) => sU(i11, e11));
      } else {
        let r10 = this.tracks[t10];
        if (!r10) return;
        let s10 = r10.default ? "default" : "subtitles" + t10;
        i10.trigger(y.CUES_PARSED, { type: "subtitles", cues: e10, track: s10 });
      }
    }
    onFragDecrypted(e10, t10) {
      let { frag: i10 } = t10;
      i10.type === _ && this.onFragLoaded(y.FRAG_LOADED, t10);
    }
    onSubtitleTracksCleared() {
      this.tracks = [], this.captionsTracks = {};
    }
    onFragParsingUserdata(e10, t10) {
      if (!this.enabled || !this.config.enableCEA708Captions) return;
      let { frag: i10, samples: r10 } = t10;
      if (i10.type !== k || "NONE" !== this.closedCaptionsForLevel(i10)) for (let e11 = 0; e11 < r10.length; e11++) {
        let t11 = r10[e11].bytes;
        if (t11) {
          this.cea608Parser1 || this.initCea608Parsers();
          let i11 = this.extractCea608Data(t11);
          this.cea608Parser1.addData(r10[e11].pts, i11[0]), this.cea608Parser2.addData(r10[e11].pts, i11[1]);
        }
      }
    }
    onBufferFlushing(e10, { startOffset: t10, endOffset: i10, endOffsetSubtitles: r10, type: s10 }) {
      let { media: a10 } = this;
      if (a10 && !(a10.currentTime < i10)) {
        if (!s10 || "video" === s10) {
          let { captionsTracks: e11 } = this;
          Object.keys(e11).forEach((r11) => sN(e11[r11], t10, i10));
        }
        if (this.config.renderTextTracksNatively && 0 === t10 && void 0 !== r10) {
          let { textTracks: e11 } = this;
          Object.keys(e11).forEach((i11) => sN(e11[i11], t10, r10));
        }
      }
    }
    extractCea608Data(e10) {
      let t10 = [[], []], i10 = 31 & e10[0], r10 = 2;
      for (let s10 = 0; s10 < i10; s10++) {
        let i11 = e10[r10++], s11 = 127 & e10[r10++], a10 = 127 & e10[r10++];
        if ((0 !== s11 || 0 !== a10) && (4 & i11) != 0) {
          let e11 = 3 & i11;
          (0 === e11 || 1 === e11) && (t10[e11].push(s11), t10[e11].push(a10));
        }
      }
      return t10;
    }
  }, audioStreamController: class extends iH {
    constructor(e10, t10, i10) {
      super(e10, t10, i10, "audio-stream-controller", D), this.mainAnchor = null, this.mainFragLoading = null, this.audioOnly = false, this.bufferedTrack = null, this.switchingTrack = null, this.trackId = -1, this.waitingData = null, this.mainDetails = null, this.flushing = false, this.bufferFlushed = false, this.cachedTrackLoadedData = null, this.registerListeners();
    }
    onHandlerDestroying() {
      this.unregisterListeners(), super.onHandlerDestroying(), this.resetItem();
    }
    resetItem() {
      this.mainDetails = this.mainAnchor = this.mainFragLoading = this.bufferedTrack = this.switchingTrack = this.waitingData = this.cachedTrackLoadedData = null;
    }
    registerListeners() {
      super.registerListeners();
      let { hls: e10 } = this;
      e10.on(y.LEVEL_LOADED, this.onLevelLoaded, this), e10.on(y.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e10.on(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e10.on(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e10.on(y.BUFFER_RESET, this.onBufferReset, this), e10.on(y.BUFFER_CREATED, this.onBufferCreated, this), e10.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e10.on(y.BUFFER_FLUSHED, this.onBufferFlushed, this), e10.on(y.INIT_PTS_FOUND, this.onInitPtsFound, this), e10.on(y.FRAG_LOADING, this.onFragLoading, this), e10.on(y.FRAG_BUFFERED, this.onFragBuffered, this);
    }
    unregisterListeners() {
      let { hls: e10 } = this;
      e10 && (super.unregisterListeners(), e10.off(y.LEVEL_LOADED, this.onLevelLoaded, this), e10.off(y.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e10.off(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e10.off(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e10.off(y.BUFFER_RESET, this.onBufferReset, this), e10.off(y.BUFFER_CREATED, this.onBufferCreated, this), e10.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e10.off(y.BUFFER_FLUSHED, this.onBufferFlushed, this), e10.off(y.INIT_PTS_FOUND, this.onInitPtsFound, this), e10.off(y.FRAG_LOADING, this.onFragLoading, this), e10.off(y.FRAG_BUFFERED, this.onFragBuffered, this));
    }
    onInitPtsFound(e10, { frag: t10, id: i10, initPTS: r10, timescale: s10, trackId: a10 }) {
      if (i10 === k) {
        let e11 = t10.cc, i11 = this.fragCurrent;
        if (this.initPTS[e11] = { baseTime: r10, timescale: s10, trackId: a10 }, this.log(`InitPTS for cc: ${e11} found from main: ${r10 / s10} (${r10}/${s10}) trackId: ${a10}`), this.mainAnchor = t10, this.state === iG) {
          let i12 = this.waitingData;
          (i12 || this.loadingParts) && (!i12 || i12.frag.cc === e11) || this.syncWithAnchor(t10, null == i12 ? void 0 : i12.frag);
        } else !this.hls.hasEnoughToStart && i11 && i11.cc !== e11 ? (i11.abortRequests(), this.syncWithAnchor(t10, i11)) : this.state === iw && this.tick();
      }
    }
    getLoadPosition() {
      return !this.startFragRequested && this.nextLoadPosition >= 0 ? this.nextLoadPosition : super.getLoadPosition();
    }
    syncWithAnchor(e10, t10) {
      var i10;
      let r10 = (null == (i10 = this.mainFragLoading) ? void 0 : i10.frag) || null;
      if (t10 && (null == r10 ? void 0 : r10.cc) === t10.cc) return;
      let s10 = (r10 || e10).cc, a10 = e5(this.getLevelDetails(), s10, this.getLoadPosition());
      a10 && (this.log(`Syncing with main frag at ${a10.start} cc ${a10.cc}`), this.startFragRequested = false, this.nextLoadPosition = a10.start, this.resetLoadingState(), this.state === iw && this.doTickIdle());
    }
    startLoad(e10, t10) {
      if (!this.levels) {
        this.startPosition = e10, this.state = iC;
        return;
      }
      let i10 = this.lastCurrentTime;
      this.stopLoad(), this.setInterval(100), i10 > 0 && -1 === e10 ? (this.log(`Override startPosition with lastCurrentTime @${i10.toFixed(3)}`), e10 = i10, this.state = iw) : this.state = iF, this.nextLoadPosition = this.lastCurrentTime = e10 + this.timelineOffset, this.startPosition = t10 ? -1 : e10, this.tick();
    }
    doTick() {
      switch (this.state) {
        case iw:
          this.doTickIdle();
          break;
        case iF: {
          let { levels: e10, trackId: t10 } = this, i10 = null == e10 ? void 0 : e10[t10], r10 = null == i10 ? void 0 : i10.details;
          if (r10 && !this.waitForLive(i10)) {
            if (this.waitForCdnTuneIn(r10)) break;
            this.state = iG;
          }
          break;
        }
        case iO:
          this.checkRetryDate();
          break;
        case iG: {
          let e10 = this.waitingData;
          if (e10) {
            let { frag: t10, part: i10, cache: r10, complete: s10 } = e10, a10 = this.mainAnchor;
            if (void 0 !== this.initPTS[t10.cc]) {
              this.waitingData = null, this.state = iM;
              let e11 = { frag: t10, part: i10, payload: r10.flush().buffer, networkDetails: null };
              this._handleFragmentLoadProgress(e11), s10 && super._handleFragmentLoadComplete(e11);
            } else a10 && a10.cc !== e10.frag.cc && this.syncWithAnchor(a10, e10.frag);
          } else this.state = iw;
        }
      }
      this.onTickEnd();
    }
    resetLoadingState() {
      let e10 = this.waitingData;
      e10 && (this.fragmentTracker.removeFragment(e10.frag), this.waitingData = null), super.resetLoadingState();
    }
    onTickEnd() {
      let { media: e10 } = this;
      null != e10 && e10.readyState && (this.lastCurrentTime = e10.currentTime);
    }
    doTickIdle() {
      var e10;
      let { hls: t10, levels: i10, media: r10, trackId: s10 } = this, a10 = t10.config;
      if (!this.buffering || !r10 && !this.primaryPrefetch && (this.startFragRequested || !a10.startFragPrefetch) || !(null != i10 && i10[s10])) return;
      let n2 = i10[s10], l2 = n2.details;
      if (!l2 || this.waitForLive(n2) || this.waitForCdnTuneIn(l2)) {
        this.state = iF, this.startFragRequested = false;
        return;
      }
      let o2 = this.mediaBuffer ? this.mediaBuffer : this.media;
      this.bufferFlushed && o2 && (this.bufferFlushed = false, this.afterBufferFlushed(o2, X, D));
      let h2 = this.getFwdBufferInfo(o2, D);
      if (null === h2) return;
      if (!this.switchingTrack && this._streamEnded(h2, l2)) {
        t10.trigger(y.BUFFER_EOS, { type: "audio" }), this.state = iB;
        return;
      }
      let d2 = h2.len, u2 = t10.maxBufferLength, f2 = l2.fragments, c2 = f2[0].start, g2 = this.getLoadPosition(), m2 = this.flushing ? g2 : h2.end;
      if (this.switchingTrack && r10 && l2.PTSKnown && g2 < c2 && (h2.end > c2 || h2.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), r10.currentTime = c2 + 0.05), d2 >= u2 && !this.switchingTrack && m2 < f2[f2.length - 1].start) return;
      let p2 = this.getNextFragment(m2, l2);
      if (p2 && this.isLoopLoading(p2, m2) && (p2 = this.getNextFragmentLoopLoading(p2, l2, h2, k, u2)), !p2) {
        this.bufferFlushed = true;
        return;
      }
      if (this.exceedsMaxBuffer(h2, u2, p2)) return;
      let v2 = (null == (e10 = this.mainFragLoading) ? void 0 : e10.frag) || null;
      if (!this.audioOnly && this.startFragRequested && v2 && J(p2) && !p2.endList && (!l2.live || !this.loadingParts && m2 < this.hls.liveSyncPosition) && ("OK" === this.fragmentTracker.getState(v2) && (this.mainFragLoading = v2 = null), v2 && J(v2))) {
        if (p2.start > v2.end) {
          let e11 = this.fragmentTracker.getFragAtPos(m2, k);
          e11 && e11.end > v2.end && (v2 = e11, this.mainFragLoading = { frag: e11, targetBufferTime: null });
        }
        if (p2.start > v2.end) return;
      }
      this.loadFragment(p2, n2, m2);
    }
    onMediaDetaching(e10, t10) {
      this.bufferFlushed = this.flushing = false, super.onMediaDetaching(e10, t10);
    }
    onAudioTracksUpdated(e10, { audioTracks: t10 }) {
      this.resetTransmuxer(), this.levels = t10.map((e11) => new eY(e11));
    }
    onAudioTrackSwitching(e10, t10) {
      let i10 = !!t10.url;
      this.trackId = t10.id;
      let { fragCurrent: r10 } = this;
      r10 && (r10.abortRequests(), this.removeUnbufferedFrags(r10.start)), this.resetLoadingState(), i10 ? (this.switchingTrack = t10, this.flushAudioIfNeeded(t10), this.state !== iC && (this.setInterval(100), this.state = iw, this.tick())) : (this.resetTransmuxer(), this.switchingTrack = null, this.bufferedTrack = t10, this.clearInterval());
    }
    onManifestLoading() {
      super.onManifestLoading(), this.bufferFlushed = this.flushing = this.audioOnly = false, this.resetItem(), this.trackId = -1;
    }
    onLevelLoaded(e10, t10) {
      this.mainDetails = t10.details;
      let i10 = this.cachedTrackLoadedData;
      i10 && (this.cachedTrackLoadedData = null, this.onAudioTrackLoaded(y.AUDIO_TRACK_LOADED, i10));
    }
    onAudioTrackLoaded(e10, t10) {
      var i10, r10;
      let { levels: s10 } = this, { details: a10, id: n2, groupId: l2, track: o2 } = t10;
      if (!s10) return void this.warn(`Audio tracks reset while loading track ${n2} "${o2.name}" of "${l2}"`);
      let h2 = this.mainDetails;
      if (!h2 || a10.endCC > h2.endCC || h2.expired) {
        this.cachedTrackLoadedData = t10, this.state !== iC && (this.state = iF);
        return;
      }
      this.cachedTrackLoadedData = null, this.log(`Audio track ${n2} "${o2.name}" of "${l2}" loaded [${a10.startSN},${a10.endSN}]${a10.lastPartSn ? `[part-${a10.lastPartSn}-${a10.lastPartIndex}]` : ""},duration:${a10.totalduration}`);
      let d2 = s10[n2], u2 = 0;
      if (a10.live || null != (i10 = d2.details) && i10.live) {
        if (this.checkLiveUpdate(a10), a10.deltaUpdateFailed) return;
        d2.details && (u2 = this.alignPlaylists(a10, d2.details, null == (r10 = this.levelLastLoaded) ? void 0 : r10.details)), a10.alignedSliding || (iI(a10, h2), a10.alignedSliding || ik(a10, h2), u2 = a10.fragmentStart);
      }
      d2.details = a10, this.levelLastLoaded = d2, this.startFragRequested || this.setStartPosition(h2, u2), this.hls.trigger(y.AUDIO_TRACK_UPDATED, { details: a10, id: n2, groupId: t10.groupId }), this.state !== iF || this.waitForCdnTuneIn(a10) || (this.state = iw), this.tick();
    }
    _handleFragmentLoadProgress(e10) {
      var t10;
      let i10 = e10.frag, { part: r10, payload: s10 } = e10, { config: a10, trackId: n2, levels: l2 } = this;
      if (!l2) return void this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${i10.sn} of level ${i10.level} will not be buffered`);
      let o2 = l2[n2];
      if (!o2) return void this.warn("Audio track is undefined on fragment load progress");
      let h2 = o2.details;
      if (!h2) {
        this.warn("Audio track details undefined on fragment load progress"), this.removeUnbufferedFrags(i10.start);
        return;
      }
      let d2 = a10.defaultAudioCodec || o2.audioCodec || "mp4a.40.2", u2 = this.transmuxer;
      u2 || (u2 = this.transmuxer = new rq(this.hls, D, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
      let f2 = this.initPTS[i10.cc], c2 = null == (t10 = i10.initSegment) ? void 0 : t10.data;
      if (void 0 !== f2) {
        let e11 = r10 ? r10.index : -1, t11 = new tS(i10.level, i10.sn, i10.stats.chunkCount, s10.byteLength, e11, -1 !== e11);
        u2.push(s10, c2, d2, "", i10, r10, h2.totalduration, false, t11, f2);
      } else {
        this.log(`Unknown video PTS for cc ${i10.cc}, waiting for video PTS before demuxing audio frag ${i10.sn} of [${h2.startSN} ,${h2.endSN}],track ${n2}`);
        let { cache: e11 } = this.waitingData = this.waitingData || { frag: i10, part: r10, cache: new iY(), complete: false };
        e11.push(new Uint8Array(s10)), this.state !== iC && (this.state = iG);
      }
    }
    _handleFragmentLoadComplete(e10) {
      if (this.waitingData) {
        this.waitingData.complete = true;
        return;
      }
      super._handleFragmentLoadComplete(e10);
    }
    onBufferReset() {
      this.mediaBuffer = null;
    }
    onBufferCreated(e10, t10) {
      this.bufferFlushed = this.flushing = false;
      let i10 = t10.tracks.audio;
      i10 && (this.mediaBuffer = i10.buffer || null);
    }
    onFragLoading(e10, t10) {
      !this.audioOnly && t10.frag.type === k && J(t10.frag) && (this.mainFragLoading = t10, this.state === iw && this.tick());
    }
    onFragBuffered(e10, t10) {
      let { frag: i10, part: r10 } = t10;
      if (i10.type !== D) {
        this.audioOnly || i10.type !== k || i10.elementaryStreams.video || i10.elementaryStreams.audiovideo || (this.audioOnly = true, this.mainFragLoading = null);
        return;
      }
      if (this.fragContextChanged(i10)) return void this.warn(`Fragment ${i10.sn}${r10 ? " p: " + r10.index : ""} of level ${i10.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack ? this.switchingTrack.name : "false"}`);
      if (J(i10)) {
        this.fragPrevious = i10;
        let e11 = this.switchingTrack;
        e11 && (this.bufferedTrack = e11, this.switchingTrack = null, this.hls.trigger(y.AUDIO_TRACK_SWITCHED, M({}, e11)));
      }
      this.fragBufferedComplete(i10, r10), this.media && this.tick();
    }
    onError(e10, t10) {
      var i10;
      if (t10.fatal) {
        this.state = iN;
        return;
      }
      switch (t10.details) {
        case p.FRAG_GAP:
        case p.FRAG_PARSING_ERROR:
        case p.FRAG_DECRYPT_ERROR:
        case p.FRAG_LOAD_ERROR:
        case p.FRAG_LOAD_TIMEOUT:
        case p.KEY_LOAD_ERROR:
        case p.KEY_LOAD_TIMEOUT:
          this.onFragmentOrKeyLoadError(D, t10);
          break;
        case p.AUDIO_TRACK_LOAD_ERROR:
        case p.AUDIO_TRACK_LOAD_TIMEOUT:
        case p.LEVEL_PARSING_ERROR:
          t10.levelRetry || this.state !== iF || (null == (i10 = t10.context) ? void 0 : i10.type) !== b || (this.state = iw);
          break;
        case p.BUFFER_ADD_CODEC_ERROR:
        case p.BUFFER_APPEND_ERROR:
          if ("audio" !== t10.parent) return;
          this.reduceLengthAndFlushBuffer(t10) || this.resetLoadingState();
          break;
        case p.BUFFER_FULL_ERROR:
          if ("audio" !== t10.parent) return;
          this.reduceLengthAndFlushBuffer(t10) && (this.bufferedTrack = null, super.flushMainBuffer(0, 1 / 0, "audio"));
          break;
        case p.INTERNAL_EXCEPTION:
          this.recoverWorkerError(t10);
      }
    }
    onBufferFlushing(e10, { type: t10 }) {
      t10 !== Q && (this.flushing = true);
    }
    onBufferFlushed(e10, { type: t10 }) {
      if (t10 !== Q) {
        this.flushing = false, this.bufferFlushed = true, this.state === iB && (this.state = iw);
        let e11 = this.mediaBuffer || this.media;
        e11 && (this.afterBufferFlushed(e11, t10, D), this.tick());
      }
    }
    _handleTransmuxComplete(e10) {
      var t10;
      let i10 = "audio", { hls: r10 } = this, { remuxResult: s10, chunkMeta: a10 } = e10, n2 = this.getCurrentContext(a10);
      if (!n2) return void this.resetWhenMissingContext(a10);
      let { frag: l2, part: o2, level: h2 } = n2, { details: d2 } = h2, { audio: u2, text: f2, id3: c2, initSegment: g2 } = s10;
      if (this.fragContextChanged(l2) || !d2) return void this.fragmentTracker.removeFragment(l2);
      if (this.state = i$, this.switchingTrack && u2 && this.completeAudioSwitch(this.switchingTrack), null != g2 && g2.tracks) {
        let e11 = l2.initSegment || l2;
        if (this.unhandledEncryptionError(g2, l2)) return;
        this._bufferInitSegment(h2, g2.tracks, e11, a10), r10.trigger(y.FRAG_PARSING_INIT_SEGMENT, { frag: e11, id: i10, tracks: g2.tracks });
      }
      if (u2) {
        let { startPTS: e11, endPTS: t11, startDTS: i11, endDTS: r11 } = u2;
        o2 && (o2.elementaryStreams[X] = { startPTS: e11, endPTS: t11, startDTS: i11, endDTS: r11 }), l2.setElementaryStreamInfo(X, e11, t11, i11, r11), this.bufferFragmentData(u2, l2, o2, a10);
      }
      if (null != c2 && null != (t10 = c2.samples) && t10.length) {
        let e11 = w({ id: i10, frag: l2, details: d2 }, c2);
        r10.trigger(y.FRAG_PARSING_METADATA, e11);
      }
      if (f2) {
        let e11 = w({ id: i10, frag: l2, details: d2 }, f2);
        r10.trigger(y.FRAG_PARSING_USERDATA, e11);
      }
    }
    _bufferInitSegment(e10, t10, i10, r10) {
      if (this.state !== i$ || (t10.video && delete t10.video, t10.audiovideo && delete t10.audiovideo, !t10.audio)) return;
      let s10 = t10.audio;
      s10.id = D;
      let a10 = e10.audioCodec;
      this.log(`Init audio buffer, container:${s10.container}, codecs[level/parsed]=[${a10}/${s10.codec}]`), a10 && 1 === a10.split(",").length && (s10.levelCodec = a10), this.hls.trigger(y.BUFFER_CODECS, t10);
      let n2 = s10.initSegment;
      if (null != n2 && n2.byteLength) {
        let e11 = { type: "audio", frag: i10, part: null, chunkMeta: r10, parent: i10.type, data: n2 };
        this.hls.trigger(y.BUFFER_APPENDING, e11);
      }
      this.tickImmediate();
    }
    loadFragment(e10, t10, i10) {
      let r10 = this.fragmentTracker.getState(e10);
      if (this.switchingTrack || r10 === ta || r10 === tl) {
        var s10;
        if (J(e10)) if (null != (s10 = t10.details) && s10.live && !this.initPTS[e10.cc]) {
          this.log(`Waiting for video PTS in continuity counter ${e10.cc} of live stream before loading audio fragment ${e10.sn} of level ${this.trackId}`), this.state = iG;
          let i11 = this.mainDetails;
          i11 && i11.fragmentStart !== t10.details.fragmentStart && ik(t10.details, i11);
        } else super.loadFragment(e10, t10, i10);
        else this._loadInitSegment(e10, t10);
      } else this.clearTrackerIfNeeded(e10);
    }
    flushAudioIfNeeded(e10) {
      if (this.media && this.bufferedTrack) {
        let { name: t10, lang: i10, assocLang: r10, characteristics: s10, audioCodec: a10, channels: n2 } = this.bufferedTrack;
        eZ({ name: t10, lang: i10, assocLang: r10, characteristics: s10, audioCodec: a10, channels: n2 }, e10, eJ) || (e1(e10.url, this.hls) ? (this.log("Switching audio track : flushing all audio"), super.flushMainBuffer(0, 1 / 0, "audio"), this.bufferedTrack = null) : this.bufferedTrack = e10);
      }
    }
    completeAudioSwitch(e10) {
      let { hls: t10 } = this;
      this.flushAudioIfNeeded(e10), this.bufferedTrack = e10, this.switchingTrack = null, t10.trigger(y.AUDIO_TRACK_SWITCHED, M({}, e10));
    }
  }, audioTrackController: class extends rX {
    constructor(e10) {
      super(e10, "audio-track-controller"), this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = true, this.registerListeners();
    }
    registerListeners() {
      let { hls: e10 } = this;
      e10.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e10.on(y.LEVEL_LOADING, this.onLevelLoading, this), e10.on(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e10.on(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e10.on(y.ERROR, this.onError, this);
    }
    unregisterListeners() {
      let { hls: e10 } = this;
      e10.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e10.off(y.LEVEL_LOADING, this.onLevelLoading, this), e10.off(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e10.off(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e10.off(y.ERROR, this.onError, this);
    }
    destroy() {
      this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, super.destroy();
    }
    onManifestLoading() {
      this.tracks = [], this.tracksInGroup = [], this.groupIds = null, this.currentTrack = null, this.trackId = -1, this.selectDefaultTrack = true;
    }
    onManifestParsed(e10, t10) {
      this.tracks = t10.audioTracks || [];
    }
    onAudioTrackLoaded(e10, t10) {
      let { id: i10, groupId: r10, details: s10 } = t10, a10 = this.tracksInGroup[i10];
      if (!a10 || a10.groupId !== r10) return void this.warn(`Audio track with id:${i10} and group:${r10} not found in active group ${null == a10 ? void 0 : a10.groupId}`);
      let n2 = a10.details;
      a10.details = t10.details, this.log(`Audio track ${i10} "${a10.name}" lang:${a10.lang} group:${r10} loaded [${s10.startSN}-${s10.endSN}]`), i10 === this.trackId && this.playlistLoaded(i10, t10, n2);
    }
    onLevelLoading(e10, t10) {
      this.switchLevel(t10.level);
    }
    onLevelSwitching(e10, t10) {
      this.switchLevel(t10.level);
    }
    switchLevel(e10) {
      let t10 = this.hls.levels[e10];
      if (!t10) return;
      let i10 = t10.audioGroups || null, r10 = this.groupIds, s10 = this.currentTrack;
      if (!i10 || (null == r10 ? void 0 : r10.length) !== (null == i10 ? void 0 : i10.length) || null != i10 && i10.some((e11) => (null == r10 ? void 0 : r10.indexOf(e11)) === -1)) {
        this.groupIds = i10, this.trackId = -1, this.currentTrack = null;
        let e11 = this.tracks.filter((e12) => !i10 || -1 !== i10.indexOf(e12.groupId));
        if (e11.length) this.selectDefaultTrack && !e11.some((e12) => e12.default) && (this.selectDefaultTrack = false), e11.forEach((e12, t12) => {
          e12.id = t12;
        });
        else if (!s10 && !this.tracksInGroup.length) return;
        this.tracksInGroup = e11;
        let t11 = this.hls.config.audioPreference;
        if (!s10 && t11) {
          let i11 = ez(t11, e11, eJ);
          if (i11 > -1) s10 = e11[i11];
          else {
            let e12 = ez(t11, this.tracks);
            s10 = this.tracks[e12];
          }
        }
        let r11 = this.findTrackId(s10);
        -1 === r11 && s10 && (r11 = this.findTrackId(null)), this.log(`Updating audio tracks, ${e11.length} track(s) found in group(s): ${null == i10 ? void 0 : i10.join(",")}`), this.hls.trigger(y.AUDIO_TRACKS_UPDATED, { audioTracks: e11 });
        let n2 = this.trackId;
        if (-1 !== r11 && -1 === n2) this.setAudioTrack(r11);
        else if (e11.length && -1 === n2) {
          var a10;
          let t12 = Error(`No audio track selected for current audio group-ID(s): ${null == (a10 = this.groupIds) ? void 0 : a10.join(",")} track count: ${e11.length}`);
          this.warn(t12.message), this.hls.trigger(y.ERROR, { type: m.MEDIA_ERROR, details: p.AUDIO_TRACK_LOAD_ERROR, fatal: true, error: t12 });
        }
      }
    }
    onError(e10, t10) {
      !t10.fatal && t10.context && (t10.context.type !== b || t10.context.id !== this.trackId || this.groupIds && -1 === this.groupIds.indexOf(t10.context.groupId) || this.checkRetry(t10));
    }
    get allAudioTracks() {
      return this.tracks;
    }
    get audioTracks() {
      return this.tracksInGroup;
    }
    get audioTrack() {
      return this.trackId;
    }
    set audioTrack(e10) {
      this.selectDefaultTrack = false, this.setAudioTrack(e10);
    }
    setAudioOption(e10) {
      let t10 = this.hls;
      if (t10.config.audioPreference = e10, e10) {
        let s10 = this.allAudioTracks;
        if (this.selectDefaultTrack = false, s10.length) {
          let a10 = this.currentTrack;
          if (a10 && eZ(e10, a10, eJ)) return a10;
          let n2 = ez(e10, this.tracksInGroup, eJ);
          if (n2 > -1) {
            let e11 = this.tracksInGroup[n2];
            return this.setAudioTrack(n2), e11;
          }
          if (a10) {
            var i10, r10;
            let a11, n3, l2, o2, h2, d2, u2 = t10.loadLevel;
            -1 === u2 && (u2 = t10.firstAutoLevel);
            let f2 = (i10 = t10.levels, a11 = i10[r10 = u2], (n3 = i10.reduce((e11, t11, i11) => {
              let r11 = t11.uri;
              return (e11[r11] || (e11[r11] = [])).push(i11), e11;
            }, {})[a11.uri]).length > 1 && (r10 = Math.max.apply(Math, n3)), l2 = a11.videoRange, o2 = a11.frameRate, h2 = a11.codecSet.substring(0, 4), (d2 = e0(i10, r10, (t11) => {
              if (t11.videoRange !== l2 || t11.frameRate !== o2 || t11.codecSet.substring(0, 4) !== h2) return false;
              let i11 = t11.audioGroups;
              return ez(e10, s10.filter((e11) => !i11 || -1 !== i11.indexOf(e11.groupId)), eJ) > -1;
            })) > -1 ? d2 : e0(i10, r10, (t11) => {
              let i11 = t11.audioGroups;
              return ez(e10, s10.filter((e11) => !i11 || -1 !== i11.indexOf(e11.groupId)), eJ) > -1;
            }));
            if (-1 === f2) return null;
            t10.nextLoadLevel = f2;
          }
          if (e10.channels || e10.audioCodec) {
            let t11 = ez(e10, s10);
            if (t11 > -1) return s10[t11];
          }
        }
      }
      return null;
    }
    setAudioTrack(e10) {
      let t10 = this.tracksInGroup;
      if (e10 < 0 || e10 >= t10.length) return void this.warn(`Invalid audio track id: ${e10}`);
      this.selectDefaultTrack = false;
      let i10 = this.currentTrack, r10 = t10[e10], s10 = r10.details && !r10.details.live;
      if (e10 === this.trackId && r10 === i10 && s10 || (this.log(`Switching to audio-track ${e10} "${r10.name}" lang:${r10.lang} group:${r10.groupId} channels:${r10.channels}`), this.trackId = e10, this.currentTrack = r10, this.hls.trigger(y.AUDIO_TRACK_SWITCHING, M({}, r10)), s10)) return;
      let a10 = this.switchParams(r10.url, null == i10 ? void 0 : i10.details, r10.details);
      this.loadPlaylist(a10);
    }
    findTrackId(e10) {
      let t10 = this.tracksInGroup;
      for (let i10 = 0; i10 < t10.length; i10++) {
        let r10 = t10[i10];
        if ((!this.selectDefaultTrack || r10.default) && (!e10 || eZ(e10, r10, eJ))) return i10;
      }
      if (e10) {
        let { name: i10, lang: r10, assocLang: s10, characteristics: a10, audioCodec: n2, channels: l2 } = e10;
        for (let e11 = 0; e11 < t10.length; e11++) if (eZ({ name: i10, lang: r10, assocLang: s10, characteristics: a10, audioCodec: n2, channels: l2 }, t10[e11], eJ)) return e11;
        for (let i11 = 0; i11 < t10.length; i11++) {
          let r11 = t10[i11];
          if (rz(e10.attrs, r11.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"])) return i11;
        }
        for (let i11 = 0; i11 < t10.length; i11++) {
          let r11 = t10[i11];
          if (rz(e10.attrs, r11.attrs, ["LANGUAGE"])) return i11;
        }
      }
      return -1;
    }
    loadPlaylist(e10) {
      super.loadPlaylist();
      let t10 = this.currentTrack;
      this.shouldLoadPlaylist(t10) && e1(t10.url, this.hls) && this.scheduleLoading(t10, e10);
    }
    loadingPlaylist(e10, t10) {
      super.loadingPlaylist(e10, t10);
      let i10 = e10.id, r10 = e10.groupId, s10 = this.getUrlWithDirectives(e10.url, t10), a10 = e10.details, n2 = null == a10 ? void 0 : a10.age;
      this.log(`Loading audio-track ${i10} "${e10.name}" lang:${e10.lang} group:${r10}${(null == t10 ? void 0 : t10.msn) !== void 0 ? " at sn " + t10.msn + " part " + t10.part : ""}${n2 && a10.live ? " age " + n2.toFixed(1) + (a10.type ? " " + a10.type : "") : ""} ${s10}`), this.hls.trigger(y.AUDIO_TRACK_LOADING, { url: s10, id: i10, groupId: r10, deliveryDirectives: t10 || null, track: e10 });
    }
  }, emeController: sx, cmcdController: class {
    constructor(e10) {
      this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = false, this.includeKeys = void 0, this.initialized = false, this.starved = false, this.buffering = true, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = () => {
        this.initialized && (this.starved = true), this.buffering = true;
      }, this.onPlaying = () => {
        this.initialized || (this.initialized = true), this.buffering = false;
      }, this.applyPlaylistData = (e11) => {
        try {
          this.apply(e11, { ot: "m", su: !this.initialized });
        } catch (e12) {
          this.hls.logger.warn("Could not generate manifest CMCD data.", e12);
        }
      }, this.applyFragmentData = (e11) => {
        try {
          let { frag: t11, part: i11 } = e11, r10 = this.hls.levels[t11.level], s10 = this.getObjectType(t11), a10 = { d: 1e3 * (i11 || t11).duration, ot: s10 };
          ("v" === s10 || "a" === s10 || "av" == s10) && (a10.br = r10.bitrate / 1e3, a10.tb = this.getTopBandwidth(s10) / 1e3, a10.bl = this.getBufferLength(s10));
          let n2 = i11 ? this.getNextPart(i11) : this.getNextFrag(t11);
          null != n2 && n2.url && n2.url !== t11.url && (a10.nor = n2.url), this.apply(e11, a10);
        } catch (e12) {
          this.hls.logger.warn("Could not generate segment CMCD data.", e12);
        }
      }, this.hls = e10;
      const t10 = this.config = e10.config, { cmcd: i10 } = t10;
      null != i10 && (t10.pLoader = this.createPlaylistLoader(), t10.fLoader = this.createFragmentLoader(), this.sid = i10.sessionId || e10.sessionId, this.cid = i10.contentId, this.useHeaders = true === i10.useHeaders, this.includeKeys = i10.includeKeys, this.registerListeners());
    }
    registerListeners() {
      let e10 = this.hls;
      e10.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e10.on(y.MEDIA_DETACHED, this.onMediaDetached, this), e10.on(y.BUFFER_CREATED, this.onBufferCreated, this);
    }
    unregisterListeners() {
      let e10 = this.hls;
      e10.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e10.off(y.MEDIA_DETACHED, this.onMediaDetached, this), e10.off(y.BUFFER_CREATED, this.onBufferCreated, this);
    }
    destroy() {
      this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null, this.onWaiting = this.onPlaying = this.media = null;
    }
    onMediaAttached(e10, t10) {
      this.media = t10.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying);
    }
    onMediaDetached() {
      this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null);
    }
    onBufferCreated(e10, t10) {
      var i10, r10;
      this.audioBuffer = null == (i10 = t10.tracks.audio) ? void 0 : i10.buffer, this.videoBuffer = null == (r10 = t10.tracks.video) ? void 0 : r10.buffer;
    }
    createData() {
      var e10;
      return { v: 1, sf: "h", sid: this.sid, cid: this.cid, pr: null == (e10 = this.media) ? void 0 : e10.playbackRate, mtp: this.hls.bandwidthEstimate / 1e3 };
    }
    apply(e10, t10 = {}) {
      w(t10, this.createData());
      let i10 = "i" === t10.ot || "v" === t10.ot || "av" === t10.ot;
      this.starved && i10 && (t10.bs = true, t10.su = true, this.starved = false), null == t10.su && (t10.su = this.buffering);
      let { includeKeys: r10 } = this;
      r10 && (t10 = Object.keys(t10).reduce((e11, i11) => (r10.includes(i11) && (e11[i11] = t10[i11]), e11), {}));
      let s10 = { baseUrl: e10.url };
      if (this.useHeaders) {
        var a10;
        e10.headers || (e10.headers = {}), a10 = e10.headers, w(a10, (function(e11, t11 = {}) {
          let i11 = {};
          return e11 ? Object.entries((function(e12, t12) {
            let i12 = {};
            if (!e12) return i12;
            let r11 = Object.keys(e12), s11 = t12 ? Object.keys(t12).reduce((e13, i13) => {
              var r12;
              return null == (r12 = t12[i13]) || r12.forEach((t13) => e13[t13] = i13), e13;
            }, {}) : {};
            return r11.reduce((t13, i13) => {
              var r12;
              let a11 = sf[i13] || s11[i13] || sh;
              return (null != (r12 = t13[a11]) ? r12 : t13[a11] = {})[i13] = e12[i13], t13;
            }, i12);
          })(s_(e11, t11), null == t11 ? void 0 : t11.customHeaderMap)).reduce((e12, [t12, i12]) => {
            let r11 = sl(i12, { whitespace: false });
            return r11 && (e12[t12] = r11), e12;
          }, i11) : i11;
        })(t10, s10));
      } else e10.url = (function(e11, t11, i11) {
        let r11 = (function(e12, t12 = {}) {
          if (!e12) return "";
          let i12 = (function(e13, t13 = {}) {
            return e13 ? encodeURIComponent((function(e14, t14 = {}) {
              return e14 ? sl(s_(e14, t14), { whitespace: false }) : "";
            })(e13, t13)) : "";
          })(e12, t12);
          return `CMCD=${i12}`;
        })(t11, i11);
        if (!r11) return e11;
        if (sP.test(e11)) return e11.replace(sP, r11);
        let s11 = e11.includes("?") ? "&" : "?";
        return `${e11}${s11}${r11}`;
      })(e10.url, t10, s10);
    }
    getNextFrag(e10) {
      var t10;
      let i10 = null == (t10 = this.hls.levels[e10.level]) ? void 0 : t10.details;
      if (i10) {
        let t11 = e10.sn - i10.startSN;
        return i10.fragments[t11 + 1];
      }
    }
    getNextPart(e10) {
      var t10;
      let { index: i10, fragment: r10 } = e10, s10 = null == (t10 = this.hls.levels[r10.level]) || null == (t10 = t10.details) ? void 0 : t10.partList;
      if (s10) {
        let { sn: e11 } = r10;
        for (let t11 = s10.length - 1; t11 >= 0; t11--) {
          let r11 = s10[t11];
          if (r11.index === i10 && r11.fragment.sn === e11) return s10[t11 + 1];
        }
      }
    }
    getObjectType(e10) {
      let { type: t10 } = e10;
      return "subtitle" === t10 ? "tt" : "initSegment" === e10.sn ? "i" : "audio" === t10 ? "a" : "main" === t10 ? this.hls.audioTracks.length ? "v" : "av" : void 0;
    }
    getTopBandwidth(e10) {
      let t10, i10 = 0, r10 = this.hls;
      if ("a" === e10) t10 = r10.audioTracks;
      else {
        let e11 = r10.maxAutoLevel, i11 = e11 > -1 ? e11 + 1 : r10.levels.length;
        t10 = r10.levels.slice(0, i11);
      }
      return t10.forEach((e11) => {
        e11.bitrate > i10 && (i10 = e11.bitrate);
      }), i10 > 0 ? i10 : NaN;
    }
    getBufferLength(e10) {
      let t10 = this.media, i10 = "a" === e10 ? this.audioBuffer : this.videoBuffer;
      return i10 && t10 ? 1e3 * tR.bufferInfo(i10, t10.currentTime, this.config.maxBufferHole).len : NaN;
    }
    createPlaylistLoader() {
      let { pLoader: e10 } = this.config, t10 = this.applyPlaylistData, i10 = e10 || this.config.loader;
      return class {
        constructor(e11) {
          this.loader = void 0, this.loader = new i10(e11);
        }
        get stats() {
          return this.loader.stats;
        }
        get context() {
          return this.loader.context;
        }
        destroy() {
          this.loader.destroy();
        }
        abort() {
          this.loader.abort();
        }
        load(e11, i11, r10) {
          t10(e11), this.loader.load(e11, i11, r10);
        }
      };
    }
    createFragmentLoader() {
      let { fLoader: e10 } = this.config, t10 = this.applyFragmentData, i10 = e10 || this.config.loader;
      return class {
        constructor(e11) {
          this.loader = void 0, this.loader = new i10(e11);
        }
        get stats() {
          return this.loader.stats;
        }
        get context() {
          return this.loader.context;
        }
        destroy() {
          this.loader.destroy();
        }
        abort() {
          this.loader.abort();
        }
        load(e11, i11, r10) {
          t10(e11), this.loader.load(e11, i11, r10);
        }
      };
    }
  }, contentSteeringController: class extends O {
    constructor(e10) {
      super("content-steering", e10.logger), this.hls = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this._pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = false, this.enabled = true, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = e10, this.registerListeners();
    }
    registerListeners() {
      let e10 = this.hls;
      e10.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.on(y.MANIFEST_LOADED, this.onManifestLoaded, this), e10.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e10.on(y.ERROR, this.onError, this);
    }
    unregisterListeners() {
      let e10 = this.hls;
      e10 && (e10.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), e10.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e10.off(y.ERROR, this.onError, this));
    }
    pathways() {
      return (this.levels || []).reduce((e10, t10) => (-1 === e10.indexOf(t10.pathwayId) && e10.push(t10.pathwayId), e10), []);
    }
    get pathwayPriority() {
      return this._pathwayPriority;
    }
    set pathwayPriority(e10) {
      this.updatePathwayPriority(e10);
    }
    startLoad() {
      if (this.started = true, this.clearTimeout(), this.enabled && this.uri) {
        if (this.updated) {
          let e10 = 1e3 * this.timeToLoad - (performance.now() - this.updated);
          if (e10 > 0) return void this.scheduleRefresh(this.uri, e10);
        }
        this.loadSteeringManifest(this.uri);
      }
    }
    stopLoad() {
      this.started = false, this.loader && (this.loader.destroy(), this.loader = null), this.clearTimeout();
    }
    clearTimeout() {
      -1 !== this.reloadTimer && (self.clearTimeout(this.reloadTimer), this.reloadTimer = -1);
    }
    destroy() {
      this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null;
    }
    removeLevel(e10) {
      let t10 = this.levels;
      t10 && (this.levels = t10.filter((t11) => t11 !== e10));
    }
    onManifestLoading() {
      this.stopLoad(), this.enabled = true, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null;
    }
    onManifestLoaded(e10, t10) {
      let { contentSteering: i10 } = t10;
      null !== i10 && (this.pathwayId = i10.pathwayId, this.uri = i10.uri, this.started && this.startLoad());
    }
    onManifestParsed(e10, t10) {
      this.audioTracks = t10.audioTracks, this.subtitleTracks = t10.subtitleTracks;
    }
    onError(e10, t10) {
      let { errorAction: i10 } = t10;
      if ((null == i10 ? void 0 : i10.action) === 2 && 1 === i10.flags) {
        let e11 = this.levels, r10 = this._pathwayPriority, s10 = this.pathwayId;
        if (t10.context) {
          let { groupId: i11, pathwayId: r11, type: a10 } = t10.context;
          i11 && e11 ? s10 = this.getPathwayForGroupId(i11, a10, s10) : r11 && (s10 = r11);
        }
        s10 in this.penalizedPathways || (this.penalizedPathways[s10] = performance.now()), !r10 && e11 && (r10 = this.pathways()), r10 && r10.length > 1 && (this.updatePathwayPriority(r10), i10.resolved = this.pathwayId !== s10), t10.details !== p.BUFFER_APPEND_ERROR || t10.fatal ? i10.resolved || this.warn(`Could not resolve ${t10.details} ("${t10.error.message}") with content-steering for Pathway: ${s10} levels: ${e11 ? e11.length : e11} priorities: ${eW(r10)} penalized: ${eW(this.penalizedPathways)}`) : i10.resolved = true;
      }
    }
    filterParsedLevels(e10) {
      this.levels = e10;
      let t10 = this.getLevelsForPathway(this.pathwayId);
      if (0 === t10.length) {
        let i10 = e10[0].pathwayId;
        this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${i10}"`), t10 = this.getLevelsForPathway(i10), this.pathwayId = i10;
      }
      return t10.length !== e10.length && this.log(`Found ${t10.length}/${e10.length} levels in Pathway "${this.pathwayId}"`), t10;
    }
    getLevelsForPathway(e10) {
      return null === this.levels ? [] : this.levels.filter((t10) => e10 === t10.pathwayId);
    }
    updatePathwayPriority(e10) {
      let t10;
      this._pathwayPriority = e10;
      let i10 = this.penalizedPathways, r10 = performance.now();
      Object.keys(i10).forEach((e11) => {
        r10 - i10[e11] > 3e5 && delete i10[e11];
      });
      for (let r11 = 0; r11 < e10.length; r11++) {
        let s10 = e10[r11];
        if (s10 in i10) continue;
        if (s10 === this.pathwayId) return;
        let a10 = this.hls.nextLoadLevel, n2 = this.hls.levels[a10];
        if ((t10 = this.getLevelsForPathway(s10)).length > 0) {
          this.log(`Setting Pathway to "${s10}"`), this.pathwayId = s10, iS(t10), this.hls.trigger(y.LEVELS_UPDATED, { levels: t10 });
          let e11 = this.hls.levels[a10];
          n2 && e11 && this.levels && (e11.attrs["STABLE-VARIANT-ID"] !== n2.attrs["STABLE-VARIANT-ID"] && e11.bitrate !== n2.bitrate && this.log(`Unstable Pathways change from bitrate ${n2.bitrate} to ${e11.bitrate}`), this.hls.nextLoadLevel = a10);
          break;
        }
      }
    }
    getPathwayForGroupId(e10, t10, i10) {
      let r10 = this.getLevelsForPathway(i10).concat(this.levels || []);
      for (let i11 = 0; i11 < r10.length; i11++) if (t10 === b && r10[i11].hasAudioGroup(e10) || t10 === I && r10[i11].hasSubtitleGroup(e10)) return r10[i11].pathwayId;
      return i10;
    }
    clonePathways(e10) {
      let t10 = this.levels;
      if (!t10) return;
      let i10 = {}, r10 = {};
      e10.forEach((e11) => {
        let { ID: s10, "BASE-ID": a10, "URI-REPLACEMENT": n2 } = e11;
        if (t10.some((e12) => e12.pathwayId === s10)) return;
        let l2 = this.getLevelsForPathway(a10).map((e12) => {
          let t11 = new tP(e12.attrs);
          t11["PATHWAY-ID"] = s10;
          let a11 = t11.AUDIO && `${t11.AUDIO}_clone_${s10}`, l3 = t11.SUBTITLES && `${t11.SUBTITLES}_clone_${s10}`;
          a11 && (i10[t11.AUDIO] = a11, t11.AUDIO = a11), l3 && (r10[t11.SUBTITLES] = l3, t11.SUBTITLES = l3);
          let o2 = sw(e12.uri, t11["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", n2), h2 = new eY({ attrs: t11, audioCodec: e12.audioCodec, bitrate: e12.bitrate, height: e12.height, name: e12.name, url: o2, videoCodec: e12.videoCodec, width: e12.width });
          if (e12.audioGroups) for (let t12 = 1; t12 < e12.audioGroups.length; t12++) h2.addGroupId("audio", `${e12.audioGroups[t12]}_clone_${s10}`);
          if (e12.subtitleGroups) for (let t12 = 1; t12 < e12.subtitleGroups.length; t12++) h2.addGroupId("text", `${e12.subtitleGroups[t12]}_clone_${s10}`);
          return h2;
        });
        t10.push(...l2), sC(this.audioTracks, i10, n2, s10), sC(this.subtitleTracks, r10, n2, s10);
      });
    }
    loadSteeringManifest(e10) {
      let t10, i10 = this.hls.config, r10 = i10.loader;
      this.loader && this.loader.destroy(), this.loader = new r10(i10);
      try {
        t10 = new self.URL(e10);
      } catch (t11) {
        this.enabled = false, this.log(`Failed to parse Steering Manifest URI: ${e10}`);
        return;
      }
      if ("data:" !== t10.protocol) {
        let e11 = 0 | (this.hls.bandwidthEstimate || i10.abrEwmaDefaultEstimate);
        t10.searchParams.set("_HLS_pathway", this.pathwayId), t10.searchParams.set("_HLS_throughput", "" + e11);
      }
      let s10 = { responseType: "json", url: t10.href }, a10 = i10.steeringManifestLoadPolicy.default, n2 = a10.errorRetry || a10.timeoutRetry || {}, l2 = { loadPolicy: a10, timeout: a10.maxLoadTimeMs, maxRetry: n2.maxNumRetry || 0, retryDelay: n2.retryDelayMs || 0, maxRetryDelay: n2.maxRetryDelayMs || 0 };
      this.log(`Requesting steering manifest: ${t10}`), this.loader.load(s10, l2, { onSuccess: (e11, i11, r11, s11) => {
        this.log(`Loaded steering manifest: "${t10}"`);
        let a11 = e11.data;
        if ((null == a11 ? void 0 : a11.VERSION) !== 1) return void this.log(`Steering VERSION ${a11.VERSION} not supported!`);
        this.updated = performance.now(), this.timeToLoad = a11.TTL;
        let { "RELOAD-URI": n3, "PATHWAY-CLONES": l3, "PATHWAY-PRIORITY": o2 } = a11;
        if (n3) try {
          this.uri = new self.URL(n3, t10).href;
        } catch (e12) {
          this.enabled = false, this.log(`Failed to parse Steering Manifest RELOAD-URI: ${n3}`);
          return;
        }
        this.scheduleRefresh(this.uri || r11.url), l3 && this.clonePathways(l3);
        let h2 = { steeringManifest: a11, url: t10.toString() };
        this.hls.trigger(y.STEERING_MANIFEST_LOADED, h2), o2 && this.updatePathwayPriority(o2);
      }, onError: (e11, t11, i11, r11) => {
        if (this.log(`Error loading steering manifest: ${e11.code} ${e11.text} (${t11.url})`), this.stopLoad(), 410 === e11.code) {
          this.enabled = false, this.log(`Steering manifest ${t11.url} no longer available`);
          return;
        }
        let s11 = 1e3 * this.timeToLoad;
        if (429 === e11.code) {
          let e12 = this.loader;
          if ("function" == typeof (null == e12 ? void 0 : e12.getResponseHeader)) {
            let t12 = e12.getResponseHeader("Retry-After");
            t12 && (s11 = 1e3 * parseFloat(t12));
          }
          this.log(`Steering manifest ${t11.url} rate limited`);
          return;
        }
        this.scheduleRefresh(this.uri || t11.url, s11);
      }, onTimeout: (e11, t11, i11) => {
        this.log(`Timeout loading steering manifest (${t11.url})`), this.scheduleRefresh(this.uri || t11.url);
      } });
    }
    scheduleRefresh(e10, t10 = 1e3 * this.timeToLoad) {
      this.clearTimeout(), this.reloadTimer = self.setTimeout(() => {
        var t11;
        let i10 = null == (t11 = this.hls) ? void 0 : t11.media;
        i10 && !i10.ended ? this.loadSteeringManifest(e10) : this.scheduleRefresh(e10, 1e3 * this.timeToLoad);
      }, t10);
    }
  }, interstitialsController: class extends O {
    constructor(e10, t10) {
      super("interstitials", e10.logger), this.HlsPlayerClass = void 0, this.hls = void 0, this.assetListLoader = void 0, this.mediaSelection = null, this.altSelection = null, this.media = null, this.detachedData = null, this.requiredTracks = null, this.manager = null, this.playerQueue = [], this.bufferedPos = -1, this.timelinePos = -1, this.schedule = void 0, this.playingItem = null, this.bufferingItem = null, this.waitingItem = null, this.endedItem = null, this.playingAsset = null, this.endedAsset = null, this.bufferingAsset = null, this.shouldPlay = false, this.onPlay = () => {
        this.shouldPlay = true;
      }, this.onPause = () => {
        this.shouldPlay = false;
      }, this.onSeeking = () => {
        var e11, t11;
        let i10 = this.currentTime;
        if (void 0 === i10 || this.playbackDisabled || !this.schedule) return;
        let r10 = i10 - this.timelinePos;
        if (Math.abs(r10) < 1 / 7056e5) return;
        let s10 = r10 <= -0.01;
        -1 !== this.timelinePos || this.effectivePlayingItem || this.checkStart(), this.timelinePos = i10, this.bufferedPos = i10;
        let a10 = this.playingItem;
        if (!a10) return void this.checkBuffer();
        if (s10 && this.schedule.resetErrorsInRange(i10, i10 - r10) && this.updateSchedule(true), this.checkBuffer(), s10 && i10 < a10.start || i10 >= a10.end) {
          let t12 = this.findItemIndex(a10), r11 = this.schedule.findItemIndexAtTime(i10);
          if (-1 === r11 && (r11 = t12 + (s10 ? -1 : 1), this.log(`seeked ${s10 ? "back " : ""}to position not covered by schedule ${i10} (resolving from ${t12} to ${r11})`)), !this.isInterstitial(a10) && null != (e11 = this.media) && e11.paused && (this.shouldPlay = false), !s10 && r11 > t12) {
            let e12 = this.schedule.findJumpRestrictedIndex(t12 + 1, r11);
            if (e12 > t12) return void this.setSchedulePosition(e12);
          }
          this.setSchedulePosition(r11);
          return;
        }
        let n2 = this.playingAsset;
        if (!n2) {
          if (this.playingLastItem && this.isInterstitial(a10)) {
            let e12 = a10.event.assetList[0];
            e12 && (this.endedItem = this.playingItem, this.playingItem = null, this.setScheduleToAssetAtTime(i10, e12));
          }
          return;
        }
        let l2 = n2.timelineStart, o2 = n2.duration || 0;
        (s10 && i10 < l2 || i10 >= l2 + o2) && (null != (t11 = a10.event) && t11.appendInPlace && (this.clearAssetPlayers(a10.event, a10), this.flushFrontBuffer(i10)), this.setScheduleToAssetAtTime(i10, n2));
      }, this.onTimeupdate = () => {
        let e11 = this.currentTime;
        if (void 0 === e11 || this.playbackDisabled || (-1 !== this.timelinePos || this.effectivePlayingItem || this.checkStart(), !(e11 > this.timelinePos))) return;
        this.timelinePos = e11, e11 > this.bufferedPos && this.checkBuffer();
        let t11 = this.playingItem;
        if (!t11 || this.playingLastItem) return;
        if (e11 >= t11.end) {
          this.timelinePos = t11.end;
          let e12 = this.findItemIndex(t11);
          this.setSchedulePosition(e12 + 1);
        }
        let i10 = this.playingAsset;
        !i10 || e11 >= i10.timelineStart + (i10.duration || 0) && this.setScheduleToAssetAtTime(e11, i10);
      }, this.onScheduleUpdate = (e11, t11) => {
        let i10 = this.schedule;
        if (!i10) return;
        let r10 = this.playingItem, s10 = i10.events || [], a10 = i10.items || [], n2 = i10.durations, l2 = e11.map((e12) => e12.identifier), o2 = !!(s10.length || l2.length);
        (o2 || t11) && this.log(`INTERSTITIALS_UPDATED (${s10.length}): ${s10}
Schedule: ${a10.map((e12) => sz(e12))} pos: ${this.timelinePos}`), l2.length && this.log(`Removed events ${l2}`);
        let h2 = null, d2 = null;
        r10 && (h2 = this.updateItem(r10, this.timelinePos), this.itemsMatch(r10, h2) ? this.playingItem = h2 : this.waitingItem = this.endedItem = null), this.waitingItem = this.updateItem(this.waitingItem), this.endedItem = this.updateItem(this.endedItem);
        let u2 = this.bufferingItem;
        if (u2 && (d2 = this.updateItem(u2, this.bufferedPos), this.itemsMatch(u2, d2) ? this.bufferingItem = d2 : u2.event && (this.bufferingItem = this.playingItem, this.clearInterstitial(u2.event, null))), e11.forEach((e12) => {
          e12.assetList.forEach((e13) => {
            this.clearAssetPlayer(e13.identifier, null);
          });
        }), this.playerQueue.forEach((e12) => {
          if (e12.interstitial.appendInPlace) {
            let t12 = e12.assetItem.timelineStart, i11 = e12.timelineOffset - t12;
            if (i11) try {
              e12.timelineOffset = t12;
            } catch (r11) {
              Math.abs(i11) > 0.025 && this.warn(`${r11} ("${e12.assetId}" ${e12.timelineOffset}->${t12})`);
            }
          }
        }), o2 || t11) {
          if (this.hls.trigger(y.INTERSTITIALS_UPDATED, { events: s10.slice(0), schedule: a10.slice(0), durations: n2, removedIds: l2 }), this.isInterstitial(r10) && l2.includes(r10.event.identifier)) {
            this.warn(`Interstitial "${r10.event.identifier}" removed while playing`), this.primaryFallback(r10.event);
            return;
          }
          r10 && this.trimInPlace(h2, r10), u2 && d2 !== h2 && this.trimInPlace(d2, u2), this.checkBuffer();
        }
      }, this.hls = e10, this.HlsPlayerClass = t10, this.assetListLoader = new sZ(e10), this.schedule = new sQ(this.onScheduleUpdate, e10.logger), this.registerListeners();
    }
    registerListeners() {
      let e10 = this.hls;
      e10 && (e10.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e10.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e10.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e10.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.on(y.LEVEL_UPDATED, this.onLevelUpdated, this), e10.on(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e10.on(y.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this), e10.on(y.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e10.on(y.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this), e10.on(y.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this), e10.on(y.ASSET_LIST_LOADED, this.onAssetListLoaded, this), e10.on(y.BUFFER_APPENDED, this.onBufferAppended, this), e10.on(y.BUFFER_FLUSHED, this.onBufferFlushed, this), e10.on(y.BUFFERED_TO_END, this.onBufferedToEnd, this), e10.on(y.MEDIA_ENDED, this.onMediaEnded, this), e10.on(y.ERROR, this.onError, this), e10.on(y.DESTROYING, this.onDestroying, this));
    }
    unregisterListeners() {
      let e10 = this.hls;
      e10 && (e10.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e10.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e10.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e10.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.off(y.LEVEL_UPDATED, this.onLevelUpdated, this), e10.off(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e10.off(y.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this), e10.off(y.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e10.off(y.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this), e10.off(y.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this), e10.off(y.ASSET_LIST_LOADED, this.onAssetListLoaded, this), e10.off(y.BUFFER_CODECS, this.onBufferCodecs, this), e10.off(y.BUFFER_APPENDED, this.onBufferAppended, this), e10.off(y.BUFFER_FLUSHED, this.onBufferFlushed, this), e10.off(y.BUFFERED_TO_END, this.onBufferedToEnd, this), e10.off(y.MEDIA_ENDED, this.onMediaEnded, this), e10.off(y.ERROR, this.onError, this), e10.off(y.DESTROYING, this.onDestroying, this));
    }
    startLoad() {
      this.resumeBuffering();
    }
    stopLoad() {
      this.pauseBuffering();
    }
    resumeBuffering() {
      var e10;
      null == (e10 = this.getBufferingPlayer()) || e10.resumeBuffering();
    }
    pauseBuffering() {
      var e10;
      null == (e10 = this.getBufferingPlayer()) || e10.pauseBuffering();
    }
    destroy() {
      this.unregisterListeners(), this.stopLoad(), this.assetListLoader && this.assetListLoader.destroy(), this.emptyPlayerQueue(), this.clearScheduleState(), this.schedule && this.schedule.destroy(), this.media = this.detachedData = this.mediaSelection = this.requiredTracks = this.altSelection = this.schedule = this.manager = null, this.hls = this.HlsPlayerClass = this.log = null, this.assetListLoader = null, this.onPlay = this.onPause = this.onSeeking = this.onTimeupdate = null, this.onScheduleUpdate = null;
    }
    onDestroying() {
      let e10 = this.primaryMedia || this.media;
      e10 && this.removeMediaListeners(e10);
    }
    removeMediaListeners(e10) {
      i_(e10, "play", this.onPlay), i_(e10, "pause", this.onPause), i_(e10, "seeking", this.onSeeking), i_(e10, "timeupdate", this.onTimeupdate);
    }
    onMediaAttaching(e10, t10) {
      let i10 = this.media = t10.media;
      iD(i10, "seeking", this.onSeeking), iD(i10, "timeupdate", this.onTimeupdate), iD(i10, "play", this.onPlay), iD(i10, "pause", this.onPause);
    }
    onMediaAttached(e10, t10) {
      let i10 = this.effectivePlayingItem, r10 = this.detachedData;
      if (this.detachedData = null, null === i10) this.checkStart();
      else if (!r10) {
        this.clearScheduleState();
        let e11 = this.findItemIndex(i10);
        this.setSchedulePosition(e11);
      }
    }
    clearScheduleState() {
      this.log("clear schedule state"), this.playingItem = this.bufferingItem = this.waitingItem = this.endedItem = this.playingAsset = this.endedAsset = this.bufferingAsset = null;
    }
    onMediaDetaching(e10, t10) {
      let i10 = !!t10.transferMedia, r10 = this.media;
      if (this.media = null, !i10 && (r10 && this.removeMediaListeners(r10), this.detachedData)) {
        let e11 = this.getBufferingPlayer();
        e11 && (this.log(`Removing schedule state for detachedData and ${e11}`), this.playingAsset = this.endedAsset = this.bufferingAsset = this.bufferingItem = this.waitingItem = this.detachedData = null, e11.detachMedia()), this.shouldPlay = false;
      }
    }
    get interstitialsManager() {
      if (!this.hls) return null;
      if (this.manager) return this.manager;
      let e10 = this, t10 = (t11) => t11 ? e10.getAssetPlayer(t11.identifier) : t11, i10 = (i11, s11, a11, n3, l3) => {
        if (i11) {
          let o2 = i11[s11].start, h2 = i11.event;
          if (h2) {
            if ("playout" === s11 || h2.timelineOccupancy !== sH.Point) {
              let e11 = t10(a11);
              (null == e11 ? void 0 : e11.interstitial) === h2 && (o2 += e11.assetItem.startOffset + e11[l3]);
            }
          } else o2 += ("bufferedPos" === n3 ? r10() : e10[n3]) - i11.start;
          return o2;
        }
        return 0;
      }, r10 = () => {
        let t11 = e10.bufferedPos;
        return t11 === Number.MAX_VALUE ? s10("primary") : Math.max(t11, 0);
      }, s10 = (t11) => {
        var i11, r11;
        return null != (i11 = e10.primaryDetails) && i11.live ? e10.primaryDetails.edge : (null == (r11 = e10.schedule) ? void 0 : r11.durations[t11]) || 0;
      }, a10 = (r11, s11) => {
        var a11, n3;
        let l3 = e10.effectivePlayingItem;
        if (null != l3 && null != (a11 = l3.event) && a11.restrictions.skip || !e10.schedule) return;
        e10.log(`seek to ${r11} "${s11}"`);
        let o2 = e10.effectivePlayingItem, h2 = e10.schedule.findItemIndexAtTime(r11, s11), d2 = null == (n3 = e10.schedule.items) ? void 0 : n3[h2], u2 = e10.getBufferingPlayer(), f2 = null == u2 ? void 0 : u2.interstitial, c2 = null == f2 ? void 0 : f2.appendInPlace, g2 = o2 && e10.itemsMatch(o2, d2);
        if (o2 && (c2 || g2)) {
          let a12 = t10(e10.playingAsset), n4 = (null == a12 ? void 0 : a12.media) || e10.primaryMedia;
          if (n4) {
            let t11 = "primary" === s11 ? n4.currentTime : i10(o2, s11, e10.playingAsset, "timelinePos", "currentTime"), l4 = r11 - t11, h3 = (c2 ? t11 : n4.currentTime) + l4;
            if (h3 >= 0 && (!a12 || c2 || h3 <= a12.duration)) {
              n4.currentTime = h3;
              return;
            }
          }
        }
        if (d2) {
          let t11 = r11;
          if ("primary" !== s11) {
            let e11 = r11 - d2[s11].start;
            t11 = d2.start + e11;
          }
          let i11 = !e10.isInterstitial(d2);
          if ((!e10.isInterstitial(o2) || o2.event.appendInPlace) && (i11 || d2.event.appendInPlace)) {
            let i12 = e10.media || (c2 ? null == u2 ? void 0 : u2.media : null);
            i12 && (i12.currentTime = t11);
          } else if (o2) {
            let a12 = e10.findItemIndex(o2);
            if (h2 > a12) {
              let t12 = e10.schedule.findJumpRestrictedIndex(a12 + 1, h2);
              if (t12 > a12) return void e10.setSchedulePosition(t12);
            }
            let n4 = 0;
            if (i11) e10.timelinePos = t11, e10.checkBuffer();
            else {
              let e11 = d2.event.assetList, t12 = r11 - (d2[s11] || d2).start;
              for (let i12 = e11.length; i12--; ) {
                let r12 = e11[i12];
                if (r12.duration && t12 >= r12.startOffset && t12 < r12.startOffset + r12.duration) {
                  n4 = i12;
                  break;
                }
              }
            }
            e10.setSchedulePosition(h2, n4);
          }
        }
      }, n2 = () => {
        let t11 = e10.effectivePlayingItem;
        if (e10.isInterstitial(t11)) return t11;
        let i11 = e10.bufferingItem || e10.waitingItem;
        return e10.isInterstitial(i11) ? i11 : null;
      }, l2 = { get bufferedEnd() {
        let t11 = e10.bufferingItem || e10.waitingItem, r11 = e10.bufferingItem;
        if (r11 && r11 === t11) {
          var o2;
          return i10(r11, "playout", e10.bufferingAsset, "bufferedPos", "bufferedEnd") - r11.playout.start || (null == (o2 = e10.bufferingAsset) ? void 0 : o2.startOffset) || 0;
        }
        return 0;
      }, get currentTime() {
        let t11 = n2(), r11 = e10.effectivePlayingItem;
        if (r11 && r11 === t11) return i10(r11, "playout", e10.effectivePlayingAsset, "timelinePos", "currentTime") - r11.playout.start;
        return 0;
      }, set currentTime(time) {
        let t11 = n2(), i11 = e10.effectivePlayingItem;
        i11 && i11 === t11 && a10(time + i11.playout.start, "playout");
      }, get duration() {
        let e11 = n2();
        if (e11) return e11.playout.end - e11.playout.start;
        return 0;
      }, get assetPlayers() {
        var h2;
        let t11 = null == (h2 = n2()) ? void 0 : h2.event.assetList;
        if (t11) return t11.map((t12) => e10.getAssetPlayer(t12.identifier));
        return [];
      }, get playingIndex() {
        var d2;
        let t11 = null == (d2 = n2()) ? void 0 : d2.event;
        if (t11 && e10.effectivePlayingAsset) return t11.findAssetIndex(e10.effectivePlayingAsset);
        return -1;
      }, get scheduleItem() {
        return n2();
      } };
      return this.manager = { get events() {
        var u2;
        return (null == (u2 = e10.schedule) || null == (u2 = u2.events) ? void 0 : u2.slice(0)) || [];
      }, get schedule() {
        var f2;
        return (null == (f2 = e10.schedule) || null == (f2 = f2.items) ? void 0 : f2.slice(0)) || [];
      }, get interstitialPlayer() {
        if (n2()) return l2;
        return null;
      }, get playerQueue() {
        return e10.playerQueue.slice(0);
      }, get bufferingAsset() {
        return e10.bufferingAsset;
      }, get bufferingItem() {
        return e10.bufferingItem || e10.waitingItem;
      }, get bufferingIndex() {
        let t11 = e10.bufferingItem || e10.waitingItem;
        return e10.findItemIndex(t11);
      }, get playingAsset() {
        return e10.effectivePlayingAsset;
      }, get playingItem() {
        return e10.effectivePlayingItem;
      }, get playingIndex() {
        let t11 = e10.effectivePlayingItem;
        return e10.findItemIndex(t11);
      }, primary: { get bufferedEnd() {
        return r10();
      }, get currentTime() {
        let t11 = e10.timelinePos;
        return t11 > 0 ? t11 : 0;
      }, set currentTime(time) {
        a10(time, "primary");
      }, get duration() {
        return s10("primary");
      }, get seekableStart() {
        var c2;
        return (null == (c2 = e10.primaryDetails) ? void 0 : c2.fragmentStart) || 0;
      } }, integrated: { get bufferedEnd() {
        return i10(e10.bufferingItem || e10.waitingItem, "integrated", e10.bufferingAsset, "bufferedPos", "bufferedEnd");
      }, get currentTime() {
        return i10(e10.effectivePlayingItem, "integrated", e10.effectivePlayingAsset, "timelinePos", "currentTime");
      }, set currentTime(time) {
        a10(time, "integrated");
      }, get duration() {
        return s10("integrated");
      }, get seekableStart() {
        var g2;
        return ((t11, i11) => {
          var r11, s11;
          if (0 !== t11 && "primary" !== i11 && null != (r11 = e10.schedule) && r11.length) {
            let r12 = e10.schedule.findItemIndexAtTime(t11), a11 = null == (s11 = e10.schedule.items) ? void 0 : s11[r12];
            if (a11) return t11 + (a11[i11].start - a11.start);
          }
          return t11;
        })((null == (g2 = e10.primaryDetails) ? void 0 : g2.fragmentStart) || 0, "integrated");
      } }, skip: () => {
        let t11 = e10.effectivePlayingItem, i11 = null == t11 ? void 0 : t11.event;
        if (i11 && !i11.restrictions.skip) {
          let r11 = e10.findItemIndex(t11);
          i11.appendInPlace ? a10(t11.playout.start + t11.event.duration + 1e-3, "playout") : e10.advanceAfterAssetEnded(i11, r11, 1 / 0);
        }
      } };
    }
    get effectivePlayingItem() {
      return this.waitingItem || this.playingItem || this.endedItem;
    }
    get effectivePlayingAsset() {
      return this.playingAsset || this.endedAsset;
    }
    get playingLastItem() {
      var e10;
      let t10 = this.playingItem, i10 = null == (e10 = this.schedule) ? void 0 : e10.items;
      return !!this.playbackStarted && !!t10 && !!i10 && this.findItemIndex(t10) === i10.length - 1;
    }
    get playbackStarted() {
      return null !== this.effectivePlayingItem;
    }
    get currentTime() {
      var e10, t10;
      if (null === this.mediaSelection) return;
      let i10 = this.waitingItem || this.playingItem;
      if (this.isInterstitial(i10) && !i10.event.appendInPlace) return;
      let r10 = this.media;
      !r10 && null != (e10 = this.bufferingItem) && null != (e10 = e10.event) && e10.appendInPlace && (r10 = this.primaryMedia);
      let s10 = null == (t10 = r10) ? void 0 : t10.currentTime;
      if (void 0 !== s10 && f(s10)) return s10;
    }
    get primaryMedia() {
      var e10;
      return this.media || (null == (e10 = this.detachedData) ? void 0 : e10.media) || null;
    }
    isInterstitial(e10) {
      return !!(null != e10 && e10.event);
    }
    retreiveMediaSource(e10, t10) {
      let i10 = this.getAssetPlayer(e10);
      i10 && this.transferMediaFromPlayer(i10, t10);
    }
    transferMediaFromPlayer(e10, t10) {
      let i10 = e10.interstitial.appendInPlace, r10 = e10.media;
      if (i10 && r10 === this.primaryMedia) {
        if (this.bufferingAsset = null, (!t10 || this.isInterstitial(t10) && !t10.event.appendInPlace) && t10 && r10) {
          this.detachedData = { media: r10 };
          return;
        }
        let i11 = e10.transferMedia();
        this.log(`transfer MediaSource from ${e10} ${eW(i11)}`), this.detachedData = i11;
      } else t10 && r10 && (this.shouldPlay || (this.shouldPlay = !r10.paused));
    }
    transferMediaTo(e10, t10) {
      var i10, r10;
      let s10;
      if (e10.media === t10) return;
      let a10 = null, n2 = this.hls, l2 = e10 !== n2, o2 = l2 && e10.interstitial.appendInPlace, h2 = null == (i10 = this.detachedData) ? void 0 : i10.mediaSource;
      if (n2.media) o2 && (a10 = n2.transferMedia(), this.detachedData = a10), s10 = "Primary";
      else if (h2) {
        let e11 = this.getBufferingPlayer();
        e11 ? (a10 = e11.transferMedia(), s10 = `${e11}`) : s10 = "detached MediaSource";
      } else s10 = "detached media";
      if (!a10) {
        if (h2) a10 = this.detachedData, this.log(`using detachedData: MediaSource ${eW(a10)}`);
        else if (!this.detachedData || n2.media === t10) {
          let e11 = this.playerQueue;
          e11.length > 1 && e11.forEach((e12) => {
            if (l2 && e12.interstitial.appendInPlace !== o2) {
              let t11 = e12.interstitial;
              this.clearInterstitial(e12.interstitial, null), t11.appendInPlace = false, t11.appendInPlace && this.warn(`Could not change append strategy for queued assets ${t11}`);
            }
          }), this.hls.detachMedia(), this.detachedData = { media: t10 };
        }
      }
      let d2 = a10 && "mediaSource" in a10 && (null == (r10 = a10.mediaSource) ? void 0 : r10.readyState) !== "closed", u2 = d2 && a10 ? a10 : t10;
      this.log(`${d2 ? "transfering MediaSource" : "attaching media"} to ${l2 ? e10 : "Primary"} from ${s10} (media.currentTime: ${t10.currentTime})`);
      let f2 = this.schedule;
      if (u2 === a10 && f2) {
        let t11 = l2 && e10.assetId === f2.assetIdAtEnd;
        u2.overrides = { duration: f2.duration, endOfStream: !l2 || t11, cueRemoval: !l2 };
      }
      e10.attachMedia(u2);
    }
    onInterstitialCueEnter() {
      this.onTimeupdate();
    }
    checkStart() {
      let e10 = this.schedule, t10 = null == e10 ? void 0 : e10.events;
      if (!t10 || this.playbackDisabled || !this.media) return;
      -1 === this.bufferedPos && (this.bufferedPos = 0);
      let i10 = this.timelinePos, r10 = this.effectivePlayingItem;
      if (-1 === i10) {
        let i11 = this.hls.startPosition;
        if (this.timelinePos = i11, 0 === t10.length) this.setSchedulePosition(0);
        else if (t10[0].cue.pre) {
          this.log(s0("checkStart (preroll)", i11));
          let r11 = e10.findEventIndex(t10[0].identifier);
          this.setSchedulePosition(r11);
        } else if (i11 >= 0 || !this.primaryLive) {
          this.log(s0("checkStart", i11));
          let t11 = this.timelinePos = i11 > 0 ? i11 : 0, r11 = e10.findItemIndexAtTime(t11);
          this.setSchedulePosition(r11);
        } else 0 === this.hls.liveSyncPosition ? this.setSchedulePosition(0) : this.log("[checkStart] waiting for live start");
      } else if (r10 && !this.playingItem) {
        this.log(s0("checkStart (playing item)", r10.start));
        let t11 = e10.findItemIndex(r10);
        this.setSchedulePosition(t11);
      }
    }
    advanceAssetBuffering(e10, t10) {
      let i10 = e10.event, r10 = i10.findAssetIndex(t10), s10 = sW(i10, r10);
      if (i10.isAssetPastPlayoutLimit(s10)) {
        if (this.schedule) {
          var a10;
          let t11 = null == (a10 = this.schedule.items) ? void 0 : a10[this.findItemIndex(e10) + 1];
          t11 && this.bufferedToItem(t11);
        }
      } else this.bufferedToEvent(e10, s10);
    }
    advanceAfterAssetEnded(e10, t10, i10) {
      let r10 = sW(e10, i10);
      if (e10.isAssetPastPlayoutLimit(r10)) {
        if (this.schedule) {
          let i11 = this.schedule.items;
          if (i11) {
            let r11 = t10 + 1;
            if (r11 >= i11.length) return void this.setSchedulePosition(-1);
            let s10 = e10.resumeTime;
            this.timelinePos < s10 && (this.log(s0("advanceAfterAssetEnded", s10)), this.timelinePos = s10, e10.appendInPlace && this.advanceInPlace(s10), this.checkBuffer(this.bufferedPos < s10)), this.setSchedulePosition(r11);
          }
        }
      } else {
        if (e10.appendInPlace) {
          let t11 = e10.assetList[r10];
          t11 && this.advanceInPlace(t11.timelineStart);
        }
        this.setSchedulePosition(t10, r10);
      }
    }
    setScheduleToAssetAtTime(e10, t10) {
      let i10 = this.schedule;
      if (!i10) return;
      let r10 = t10.parentIdentifier, s10 = i10.getEvent(r10);
      if (s10) {
        let t11 = i10.findEventIndex(r10), a10 = i10.findAssetIndex(s10, e10);
        this.advanceAfterAssetEnded(s10, t11, a10 - 1);
      }
    }
    setSchedulePosition(e10, t10) {
      var i10, r10, s10;
      let a10 = null == (i10 = this.schedule) ? void 0 : i10.items;
      if (!a10 || this.playbackDisabled) return;
      let n2 = e10 >= 0 ? a10[e10] : null;
      this.log(`setSchedulePosition ${e10}, ${t10} (${n2 ? sz(n2) : n2}) pos: ${this.timelinePos}`);
      let l2 = this.waitingItem || this.playingItem, o2 = this.playingLastItem;
      if (this.isInterstitial(l2)) {
        let i11 = l2.event, h2 = this.playingAsset, d2 = null == h2 ? void 0 : h2.identifier, u2 = d2 ? this.getAssetPlayer(d2) : null;
        if (u2 && d2 && (!this.eventItemsMatch(l2, n2) || void 0 !== t10 && d2 !== i11.assetList[t10].identifier)) {
          let t11 = i11.findAssetIndex(h2);
          if (this.log(`INTERSTITIAL_ASSET_ENDED ${t11 + 1}/${i11.assetList.length} ${sq(h2)}`), this.endedAsset = h2, this.playingAsset = null, this.hls.trigger(y.INTERSTITIAL_ASSET_ENDED, { asset: h2, assetListIndex: t11, event: i11, schedule: a10.slice(0), scheduleIndex: e10, player: u2 }), l2 !== this.playingItem) {
            this.itemsMatch(l2, this.playingItem) && !this.playingAsset && this.advanceAfterAssetEnded(i11, this.findItemIndex(this.playingItem), t11);
            return;
          }
          this.retreiveMediaSource(d2, n2), u2.media && !(null != (r10 = this.detachedData) && r10.mediaSource) && u2.detachMedia();
        }
        if (!this.eventItemsMatch(l2, n2) && (this.endedItem = l2, this.playingItem = null, this.log(`INTERSTITIAL_ENDED ${i11} ${sz(l2)}`), i11.hasPlayed = true, this.hls.trigger(y.INTERSTITIAL_ENDED, { event: i11, schedule: a10.slice(0), scheduleIndex: e10 }), i11.cue.once)) {
          this.updateSchedule();
          let e11 = null == (s10 = this.schedule) ? void 0 : s10.items;
          if (n2 && e11) {
            let i12 = this.findItemIndex(n2);
            this.advanceSchedule(i12, e11, t10, l2, o2);
          }
          return;
        }
      }
      this.advanceSchedule(e10, a10, t10, l2, o2);
    }
    advanceSchedule(e10, t10, i10, r10, s10) {
      let a10 = this.schedule;
      if (!a10) return;
      let n2 = t10[e10] || null, l2 = this.primaryMedia, o2 = this.playerQueue;
      if (o2.length && o2.forEach((t11) => {
        let i11 = t11.interstitial, r11 = a10.findEventIndex(i11.identifier);
        (r11 < e10 || r11 > e10 + 1) && this.clearInterstitial(i11, n2);
      }), this.isInterstitial(n2)) {
        this.timelinePos = Math.min(Math.max(this.timelinePos, n2.start), n2.end);
        let s11 = n2.event;
        if (void 0 === i10) {
          i10 = a10.findAssetIndex(s11, this.timelinePos);
          let t11 = sW(s11, i10 - 1);
          if (s11.isAssetPastPlayoutLimit(t11) || s11.appendInPlace && this.timelinePos === n2.end) return void this.advanceAfterAssetEnded(s11, e10, i10);
          i10 = t11;
        }
        let o3 = this.waitingItem;
        this.assetsBuffered(n2, l2) || this.setBufferingItem(n2);
        let h2 = this.preloadAssets(s11, i10);
        if (this.eventItemsMatch(n2, o3 || r10) || (this.waitingItem = n2, this.log(`INTERSTITIAL_STARTED ${sz(n2)} ${s11.appendInPlace ? "append in place" : ""}`), this.hls.trigger(y.INTERSTITIAL_STARTED, { event: s11, schedule: t10.slice(0), scheduleIndex: e10 })), !s11.assetListLoaded) return void this.log(`Waiting for ASSET-LIST to complete loading ${s11}`);
        if (s11.assetListLoader && (s11.assetListLoader.destroy(), s11.assetListLoader = void 0), !l2) return void this.log(`Waiting for attachMedia to start Interstitial ${s11}`);
        this.waitingItem = this.endedItem = null, this.playingItem = n2;
        let d2 = s11.assetList[i10];
        if (!d2) return void this.advanceAfterAssetEnded(s11, e10, i10 || 0);
        if (h2 || (h2 = this.getAssetPlayer(d2.identifier)), null === h2 || h2.destroyed) {
          let e11 = s11.assetList.length;
          this.warn(`asset ${i10 + 1}/${e11} player destroyed ${s11}`), (h2 = this.createAssetPlayer(s11, d2, i10)).loadSource();
        }
        if (!this.eventItemsMatch(n2, this.bufferingItem) && s11.appendInPlace && this.isAssetBuffered(d2)) return;
        this.startAssetPlayer(h2, i10, t10, e10, l2), this.shouldPlay && sJ(h2.media);
      } else n2 ? (this.resumePrimary(n2, e10, r10), this.shouldPlay && sJ(this.hls.media)) : s10 && this.isInterstitial(r10) && (this.endedItem = null, this.playingItem = r10, r10.event.appendInPlace || this.attachPrimary(a10.durations.primary, null));
    }
    get playbackDisabled() {
      return false === this.hls.config.enableInterstitialPlayback;
    }
    get primaryDetails() {
      var e10;
      return null == (e10 = this.mediaSelection) ? void 0 : e10.main.details;
    }
    get primaryLive() {
      var e10;
      return !!(null != (e10 = this.primaryDetails) && e10.live);
    }
    resumePrimary(e10, t10, i10) {
      var r10, s10;
      if (this.playingItem = e10, this.playingAsset = this.endedAsset = null, this.waitingItem = this.endedItem = null, this.bufferedToItem(e10), this.log(`resuming ${sz(e10)}`), !(null != (r10 = this.detachedData) && r10.mediaSource)) {
        let i11 = this.timelinePos;
        (i11 < e10.start || i11 >= e10.end) && (i11 = this.getPrimaryResumption(e10, t10), this.log(s0("resumePrimary", i11)), this.timelinePos = i11), this.attachPrimary(i11, e10);
      }
      if (!i10) return;
      let a10 = null == (s10 = this.schedule) ? void 0 : s10.items;
      a10 && (this.log(`INTERSTITIALS_PRIMARY_RESUMED ${sz(e10)}`), this.hls.trigger(y.INTERSTITIALS_PRIMARY_RESUMED, { schedule: a10.slice(0), scheduleIndex: t10 }), this.checkBuffer());
    }
    getPrimaryResumption(e10, t10) {
      let i10 = e10.start;
      if (this.primaryLive) {
        let e11 = this.primaryDetails;
        if (0 === t10) return this.hls.startPosition;
        if (e11 && (i10 < e11.fragmentStart || i10 > e11.edge)) return this.hls.liveSyncPosition || -1;
      }
      return i10;
    }
    isAssetBuffered(e10) {
      let t10 = this.getAssetPlayer(e10.identifier);
      return null != t10 && t10.hls ? t10.hls.bufferedToEnd : tR.bufferInfo(this.primaryMedia, this.timelinePos, 0).end + 1 >= e10.timelineStart + (e10.duration || 0);
    }
    attachPrimary(e10, t10, i10) {
      t10 ? this.setBufferingItem(t10) : this.bufferingItem = this.playingItem, this.bufferingAsset = null;
      let r10 = this.primaryMedia;
      if (!r10) return;
      let s10 = this.hls;
      s10.media ? this.checkBuffer() : (this.transferMediaTo(s10, r10), i10 && this.startLoadingPrimaryAt(e10, i10)), i10 || (this.log(s0("attachPrimary", e10)), this.timelinePos = e10, this.startLoadingPrimaryAt(e10, i10));
    }
    startLoadingPrimaryAt(e10, t10) {
      var i10;
      let r10 = this.hls;
      !r10.loadingEnabled || !r10.media || Math.abs(((null == (i10 = r10.mainForwardBufferInfo) ? void 0 : i10.start) || r10.media.currentTime) - e10) > 0.5 ? r10.startLoad(e10, t10) : r10.bufferingEnabled || r10.resumeBuffering();
    }
    onManifestLoading() {
      var e10;
      this.stopLoad(), null == (e10 = this.schedule) || e10.reset(), this.emptyPlayerQueue(), this.clearScheduleState(), this.shouldPlay = false, this.bufferedPos = this.timelinePos = -1, this.mediaSelection = this.altSelection = this.manager = this.requiredTracks = null, this.hls.off(y.BUFFER_CODECS, this.onBufferCodecs, this), this.hls.on(y.BUFFER_CODECS, this.onBufferCodecs, this);
    }
    onLevelUpdated(e10, t10) {
      if (-1 === t10.level || !this.schedule) return;
      let i10 = this.hls.levels[t10.level];
      if (!i10.details) return;
      let r10 = M(M({}, this.mediaSelection || this.altSelection), {}, { main: i10 });
      this.mediaSelection = r10, this.schedule.parseInterstitialDateRanges(r10, this.hls.config.interstitialAppendInPlace), !this.effectivePlayingItem && this.schedule.items && this.checkStart();
    }
    onAudioTrackUpdated(e10, t10) {
      let i10 = this.hls.audioTracks[t10.id], r10 = this.mediaSelection;
      if (!r10) {
        this.altSelection = M(M({}, this.altSelection), {}, { audio: i10 });
        return;
      }
      let s10 = M(M({}, r10), {}, { audio: i10 });
      this.mediaSelection = s10;
    }
    onSubtitleTrackUpdated(e10, t10) {
      let i10 = this.hls.subtitleTracks[t10.id], r10 = this.mediaSelection;
      if (!r10) {
        this.altSelection = M(M({}, this.altSelection), {}, { subtitles: i10 });
        return;
      }
      let s10 = M(M({}, r10), {}, { subtitles: i10 });
      this.mediaSelection = s10;
    }
    onAudioTrackSwitching(e10, t10) {
      let i10 = eQ(t10);
      this.playerQueue.forEach(({ hls: e11 }) => e11 && (e11.setAudioOption(t10) || e11.setAudioOption(i10)));
    }
    onSubtitleTrackSwitch(e10, t10) {
      let i10 = eQ(t10);
      this.playerQueue.forEach(({ hls: e11 }) => e11 && (e11.setSubtitleOption(t10) || -1 !== t10.id && e11.setSubtitleOption(i10)));
    }
    onBufferCodecs(e10, t10) {
      let i10 = t10.tracks;
      i10 && (this.requiredTracks = i10);
    }
    onBufferAppended(e10, t10) {
      this.checkBuffer();
    }
    onBufferFlushed(e10, t10) {
      let i10 = this.playingItem;
      if (i10 && !this.itemsMatch(i10, this.bufferingItem) && !this.isInterstitial(i10)) {
        let e11 = this.timelinePos;
        this.bufferedPos = e11, this.checkBuffer();
      }
    }
    onBufferedToEnd(e10) {
      if (!this.schedule) return;
      let t10 = this.schedule.events;
      if (this.bufferedPos < Number.MAX_VALUE && t10) {
        for (let e11 = 0; e11 < t10.length; e11++) {
          let r10 = t10[e11];
          if (r10.cue.post) {
            var i10;
            let e12 = this.schedule.findEventIndex(r10.identifier), t11 = null == (i10 = this.schedule.items) ? void 0 : i10[e12];
            this.isInterstitial(t11) && this.eventItemsMatch(t11, this.bufferingItem) && this.bufferedToItem(t11, 0);
            break;
          }
        }
        this.bufferedPos = Number.MAX_VALUE;
      }
    }
    onMediaEnded(e10) {
      let t10 = this.playingItem;
      if (!this.playingLastItem && t10) {
        let e11 = this.findItemIndex(t10);
        this.setSchedulePosition(e11 + 1);
      } else this.shouldPlay = false;
    }
    updateItem(e10, t10) {
      var i10;
      let r10 = null == (i10 = this.schedule) ? void 0 : i10.items;
      return e10 && r10 && r10[this.findItemIndex(e10, t10)] || null;
    }
    trimInPlace(e10, t10) {
      if (this.isInterstitial(e10) && e10.event.appendInPlace && t10.end - e10.end > 0.25) {
        e10.event.assetList.forEach((t11, i11) => {
          e10.event.isAssetPastPlayoutLimit(i11) && this.clearAssetPlayer(t11.identifier, null);
        });
        let i10 = e10.end + 0.25, r10 = tR.bufferInfo(this.primaryMedia, i10, 0);
        (r10.end > i10 || (r10.nextStart || 0) > i10) && (this.log(`trim buffered interstitial ${sz(e10)} (was ${sz(t10)})`), this.attachPrimary(i10, null, true), this.flushFrontBuffer(i10));
      }
    }
    itemsMatch(e10, t10) {
      return !!t10 && (e10 === t10 || e10.event && t10.event && this.eventItemsMatch(e10, t10) || !e10.event && !t10.event && this.findItemIndex(e10) === this.findItemIndex(t10));
    }
    eventItemsMatch(e10, t10) {
      var i10;
      return !!t10 && (e10 === t10 || e10.event.identifier === (null == (i10 = t10.event) ? void 0 : i10.identifier));
    }
    findItemIndex(e10, t10) {
      return e10 && this.schedule ? this.schedule.findItemIndex(e10, t10) : -1;
    }
    updateSchedule(e10 = false) {
      var t10;
      let i10 = this.mediaSelection;
      i10 && (null == (t10 = this.schedule) || t10.updateSchedule(i10, [], e10));
    }
    checkBuffer(e10) {
      var t10;
      let i10 = null == (t10 = this.schedule) ? void 0 : t10.items;
      if (!i10) return;
      let r10 = tR.bufferInfo(this.primaryMedia, this.timelinePos, 0);
      e10 && (this.bufferedPos = this.timelinePos), e10 || (e10 = r10.len < 1), this.updateBufferedPos(r10.end, i10, e10);
    }
    updateBufferedPos(e10, t10, i10) {
      let r10 = this.schedule, s10 = this.bufferingItem;
      if (this.bufferedPos > e10 || !r10) return;
      if (1 === t10.length && this.itemsMatch(t10[0], s10)) {
        this.bufferedPos = e10;
        return;
      }
      let a10 = this.playingItem, n2 = this.findItemIndex(a10), l2 = r10.findItemIndexAtTime(e10);
      if (this.bufferedPos < e10) {
        var o2;
        let i11 = this.findItemIndex(s10), r11 = Math.min(i11 + 1, t10.length - 1), a11 = t10[r11];
        if ((-1 === l2 && s10 && e10 >= s10.end || null != (o2 = a11.event) && o2.appendInPlace && e10 + 0.01 >= a11.start) && (l2 = r11), this.isInterstitial(s10)) {
          let e11 = s10.event;
          if (r11 - n2 > 1 && false === e11.appendInPlace || 0 === e11.assetList.length && e11.assetListLoader) return;
        }
        if (this.bufferedPos = e10, l2 > i11 && l2 > n2) this.bufferedToItem(a11);
        else {
          let t11 = this.primaryDetails;
          this.primaryLive && t11 && e10 > t11.edge - t11.targetduration && a11.start < t11.edge + this.hls.config.interstitialLiveLookAhead && this.isInterstitial(a11) && this.preloadAssets(a11.event, 0);
        }
      } else i10 && a10 && !this.itemsMatch(a10, s10) && (l2 === n2 ? this.bufferedToItem(a10) : l2 === n2 + 1 && this.bufferedToItem(t10[l2]));
    }
    assetsBuffered(e10, t10) {
      return 0 !== e10.event.assetList.length && !e10.event.assetList.some((e11) => {
        let i10 = this.getAssetPlayer(e11.identifier);
        return !(null != i10 && i10.bufferedInPlaceToEnd(t10));
      });
    }
    setBufferingItem(e10) {
      let t10 = this.bufferingItem, i10 = this.schedule;
      if (!this.itemsMatch(e10, t10) && i10) {
        let { items: r10, events: s10 } = i10;
        if (!r10 || !s10) return t10;
        let a10 = this.isInterstitial(e10), n2 = this.getBufferingPlayer();
        this.bufferingItem = e10, this.bufferedPos = Math.max(e10.start, Math.min(e10.end, this.timelinePos));
        let l2 = n2 ? n2.remaining : t10 ? t10.end - this.timelinePos : 0;
        if (this.log(`INTERSTITIALS_BUFFERED_TO_BOUNDARY ${sz(e10)}` + (t10 ? ` (${l2.toFixed(2)} remaining)` : "")), !this.playbackDisabled) if (a10) {
          let t11 = i10.findAssetIndex(e10.event, this.bufferedPos);
          e10.event.assetList.forEach((e11, i11) => {
            let r11 = this.getAssetPlayer(e11.identifier);
            r11 && (i11 === t11 && r11.loadSource(), r11.resumeBuffering());
          });
        } else this.hls.resumeBuffering(), this.playerQueue.forEach((e11) => e11.pauseBuffering());
        this.hls.trigger(y.INTERSTITIALS_BUFFERED_TO_BOUNDARY, { events: s10.slice(0), schedule: r10.slice(0), bufferingIndex: this.findItemIndex(e10), playingIndex: this.findItemIndex(this.playingItem) });
      } else this.bufferingItem !== e10 && (this.bufferingItem = e10);
      return t10;
    }
    bufferedToItem(e10, t10 = 0) {
      let i10 = this.setBufferingItem(e10);
      if (!this.playbackDisabled) {
        if (this.isInterstitial(e10)) this.bufferedToEvent(e10, t10);
        else if (null !== i10) {
          this.bufferingAsset = null;
          let t11 = this.detachedData;
          t11 && t11.mediaSource ? this.attachPrimary(e10.start, e10, true) : this.preloadPrimary(e10);
        }
      }
    }
    preloadPrimary(e10) {
      let t10 = this.findItemIndex(e10), i10 = this.getPrimaryResumption(e10, t10);
      this.startLoadingPrimaryAt(i10);
    }
    bufferedToEvent(e10, t10) {
      let i10 = e10.event, r10 = 0 === i10.assetList.length && !i10.assetListLoader, s10 = i10.cue.once;
      if (r10 || !s10) {
        let e11 = this.preloadAssets(i10, t10);
        if (null != e11 && e11.interstitial.appendInPlace) {
          let t11 = this.primaryMedia;
          t11 && this.bufferAssetPlayer(e11, t11);
        }
      }
    }
    preloadAssets(e10, t10) {
      let i10 = e10.assetUrl, r10 = e10.assetList.length, s10 = 0 === r10 && !e10.assetListLoader, a10 = e10.cue.once;
      if (s10) {
        let s11, a11 = e10.timelineStart;
        if (e10.appendInPlace) {
          var n2;
          let t11 = this.playingItem;
          this.isInterstitial(t11) || (null == t11 || null == (n2 = t11.nextEvent) ? void 0 : n2.identifier) !== e10.identifier || this.flushFrontBuffer(a11 + 0.25);
        }
        let l2 = 0;
        if (!this.playingItem && this.primaryLive && -1 === (l2 = this.hls.startPosition) && (l2 = this.hls.liveSyncPosition || 0), l2 && !(e10.cue.pre || e10.cue.post)) {
          let e11 = l2 - a11;
          e11 > 0 && (s11 = Math.round(1e3 * e11) / 1e3);
        }
        if (this.log(`Load interstitial asset ${t10 + 1}/${i10 ? 1 : r10} ${e10}${s11 ? ` live-start: ${l2} start-offset: ${s11}` : ""}`), i10) return this.createAsset(e10, 0, 0, a11, e10.duration, i10);
        let o2 = this.assetListLoader.loadAssetList(e10, s11);
        o2 && (e10.assetListLoader = o2);
      } else if (!a10 && r10) {
        for (let i12 = t10; i12 < r10; i12++) {
          let t11 = e10.assetList[i12], r11 = this.getAssetPlayerQueueIndex(t11.identifier);
          (-1 === r11 || this.playerQueue[r11].destroyed) && !t11.error && this.createAssetPlayer(e10, t11, i12);
        }
        let i11 = e10.assetList[t10];
        if (i11) {
          let e11 = this.getAssetPlayer(i11.identifier);
          return e11 && e11.loadSource(), e11;
        }
      }
      return null;
    }
    flushFrontBuffer(e10) {
      let t10 = this.requiredTracks;
      t10 && (this.log(`Removing front buffer starting at ${e10}`), Object.keys(t10).forEach((t11) => {
        this.hls.trigger(y.BUFFER_FLUSHING, { startOffset: e10, endOffset: 1 / 0, type: t11 });
      }));
    }
    getAssetPlayerQueueIndex(e10) {
      let t10 = this.playerQueue;
      for (let i10 = 0; i10 < t10.length; i10++) if (e10 === t10[i10].assetId) return i10;
      return -1;
    }
    getAssetPlayer(e10) {
      let t10 = this.getAssetPlayerQueueIndex(e10);
      return this.playerQueue[t10] || null;
    }
    getBufferingPlayer() {
      let { playerQueue: e10, primaryMedia: t10 } = this;
      if (t10) {
        for (let i10 = 0; i10 < e10.length; i10++) if (e10[i10].media === t10) return e10[i10];
      }
      return null;
    }
    createAsset(e10, t10, i10, r10, s10, a10) {
      let n2 = { parentIdentifier: e10.identifier, identifier: `${e10.identifier}-${t10 + 1}-${sK(a10)}`, duration: s10, startOffset: i10, timelineStart: r10, uri: a10 };
      return this.createAssetPlayer(e10, n2, t10);
    }
    createAssetPlayer(e10, t10, i10) {
      let r10 = this.hls, s10 = r10.userConfig, a10 = s10.videoPreference, n2 = r10.loadLevelObj || r10.levels[r10.currentLevel];
      (a10 || n2) && (a10 = w({}, a10), n2.videoCodec && (a10.videoCodec = n2.videoCodec), n2.videoRange && (a10.allowedVideoRanges = [n2.videoRange]));
      let l2 = r10.audioTracks[r10.audioTrack], o2 = r10.subtitleTracks[r10.subtitleTrack], h2 = 0;
      if (this.primaryLive || e10.appendInPlace) {
        let e11 = this.timelinePos - t10.timelineStart;
        if (e11 > 1) {
          let i11 = t10.duration;
          i11 && e11 < i11 && (h2 = e11);
        }
      }
      let d2 = t10.identifier, u2 = M(M({}, s10), {}, { maxMaxBufferLength: Math.min(180, r10.config.maxMaxBufferLength), autoStartLoad: true, startFragPrefetch: true, primarySessionId: r10.sessionId, assetPlayerId: d2, abrEwmaDefaultEstimate: r10.bandwidthEstimate, interstitialsController: void 0, startPosition: h2, liveDurationInfinity: false, testBandwidth: false, videoPreference: a10, audioPreference: l2 || s10.audioPreference, subtitlePreference: o2 || s10.subtitlePreference });
      e10.appendInPlace && (e10.appendInPlaceStarted = true, t10.timelineStart && (u2.timelineOffset = t10.timelineStart));
      let f2 = u2.cmcd;
      null != f2 && f2.sessionId && f2.contentId && (u2.cmcd = w({}, f2, { contentId: sK(t10.uri) })), this.getAssetPlayer(d2) && this.warn(`Duplicate date range identifier ${e10} and asset ${d2}`);
      let c2 = new sX(this.HlsPlayerClass, u2, e10, t10);
      this.playerQueue.push(c2), e10.assetList[i10] = t10;
      let g2 = true, v2 = (r11) => {
        if (r11.live) {
          var s11;
          let t11 = Error(`Interstitials MUST be VOD assets ${e10}`), r12 = { fatal: true, type: m.OTHER_ERROR, details: p.INTERSTITIAL_ASSET_ITEM_ERROR, error: t11 }, a12 = (null == (s11 = this.schedule) ? void 0 : s11.findEventIndex(e10.identifier)) || -1;
          this.handleAssetItemError(r12, e10, a12, i10, t11.message);
          return;
        }
        let a11 = r11.edge - r11.fragmentStart, n3 = t10.duration;
        (g2 || null === n3 || a11 > n3) && (g2 = false, this.log(`Interstitial asset "${d2}" duration change ${n3} > ${a11}`), t10.duration = a11, this.updateSchedule());
      };
      c2.on(y.LEVEL_UPDATED, (e11, { details: t11 }) => v2(t11)), c2.on(y.LEVEL_PTS_UPDATED, (e11, { details: t11 }) => v2(t11)), c2.on(y.EVENT_CUE_ENTER, () => this.onInterstitialCueEnter());
      let E2 = (e11, t11) => {
        let i11 = this.getAssetPlayer(d2);
        if (i11 && t11.tracks) {
          i11.off(y.BUFFER_CODECS, E2), i11.tracks = t11.tracks;
          let e12 = this.primaryMedia;
          this.bufferingAsset === i11.assetItem && e12 && !i11.media && this.bufferAssetPlayer(i11, e12);
        }
      };
      c2.on(y.BUFFER_CODECS, E2);
      let T2 = () => {
        var i11;
        let r11 = this.getAssetPlayer(d2);
        if (this.log(`buffered to end of asset ${r11}`), !r11 || !this.schedule) return;
        let s11 = this.schedule.findEventIndex(e10.identifier), a11 = null == (i11 = this.schedule.items) ? void 0 : i11[s11];
        this.isInterstitial(a11) && this.advanceAssetBuffering(a11, t10);
      };
      c2.on(y.BUFFERED_TO_END, T2);
      let S2 = (t11) => () => {
        if (!this.getAssetPlayer(d2) || !this.schedule) return;
        this.shouldPlay = true;
        let i11 = this.schedule.findEventIndex(e10.identifier);
        this.advanceAfterAssetEnded(e10, i11, t11);
      };
      return c2.once(y.MEDIA_ENDED, S2(i10)), c2.once(y.PLAYOUT_LIMIT_REACHED, S2(1 / 0)), c2.on(y.ERROR, (t11, r11) => {
        if (!this.schedule) return;
        let s11 = this.getAssetPlayer(d2);
        r11.details === p.BUFFER_STALLED_ERROR ? null != s11 && s11.appendInPlace ? this.handleInPlaceStall(e10) : (this.onTimeupdate(), this.checkBuffer(true)) : this.handleAssetItemError(r11, e10, this.schedule.findEventIndex(e10.identifier), i10, `Asset player error ${r11.error} ${e10}`);
      }), c2.on(y.DESTROYING, () => {
        if (!this.getAssetPlayer(d2) || !this.schedule) return;
        let t11 = Error(`Asset player destroyed unexpectedly ${d2}`), r11 = { fatal: true, type: m.OTHER_ERROR, details: p.INTERSTITIAL_ASSET_ITEM_ERROR, error: t11 };
        this.handleAssetItemError(r11, e10, this.schedule.findEventIndex(e10.identifier), i10, t11.message);
      }), this.log(`INTERSTITIAL_ASSET_PLAYER_CREATED ${sq(t10)}`), this.hls.trigger(y.INTERSTITIAL_ASSET_PLAYER_CREATED, { asset: t10, assetListIndex: i10, event: e10, player: c2 }), c2;
    }
    clearInterstitial(e10, t10) {
      this.clearAssetPlayers(e10, t10), e10.reset();
    }
    clearAssetPlayers(e10, t10) {
      e10.assetList.forEach((e11) => {
        this.clearAssetPlayer(e11.identifier, t10);
      });
    }
    resetAssetPlayer(e10) {
      let t10 = this.getAssetPlayerQueueIndex(e10);
      if (-1 !== t10) {
        this.log(`reset asset player "${e10}" after error`);
        let i10 = this.playerQueue[t10];
        this.transferMediaFromPlayer(i10, null), i10.resetDetails();
      }
    }
    clearAssetPlayer(e10, t10) {
      let i10 = this.getAssetPlayerQueueIndex(e10);
      if (-1 !== i10) {
        let e11 = this.playerQueue[i10];
        this.log(`clear ${e11} toSegment: ${t10 ? sz(t10) : t10}`), this.transferMediaFromPlayer(e11, t10), this.playerQueue.splice(i10, 1), e11.destroy();
      }
    }
    emptyPlayerQueue() {
      let e10;
      for (; e10 = this.playerQueue.pop(); ) e10.destroy();
      this.playerQueue = [];
    }
    startAssetPlayer(e10, t10, i10, r10, s10) {
      let { interstitial: a10, assetItem: n2, assetId: l2 } = e10, o2 = a10.assetList.length, h2 = this.playingAsset;
      this.endedAsset = null, this.playingAsset = n2, h2 && h2.identifier === l2 || (h2 && (this.clearAssetPlayer(h2.identifier, i10[r10]), delete h2.error), this.log(`INTERSTITIAL_ASSET_STARTED ${t10 + 1}/${o2} ${sq(n2)}`), this.hls.trigger(y.INTERSTITIAL_ASSET_STARTED, { asset: n2, assetListIndex: t10, event: a10, schedule: i10.slice(0), scheduleIndex: r10, player: e10 })), this.bufferAssetPlayer(e10, s10);
    }
    bufferAssetPlayer(e10, t10) {
      var i10, r10;
      if (!this.schedule) return;
      let { interstitial: s10, assetItem: a10 } = e10, n2 = this.schedule.findEventIndex(s10.identifier), l2 = null == (i10 = this.schedule.items) ? void 0 : i10[n2];
      if (!l2) return;
      e10.loadSource(), this.setBufferingItem(l2), this.bufferingAsset = a10;
      let o2 = this.getBufferingPlayer();
      if (o2 === e10) return;
      let h2 = s10.appendInPlace;
      if (h2 && (null == o2 ? void 0 : o2.interstitial.appendInPlace) === false) return;
      let d2 = (null == o2 ? void 0 : o2.tracks) || (null == (r10 = this.detachedData) ? void 0 : r10.tracks) || this.requiredTracks;
      if (h2 && a10 !== this.playingAsset) {
        if (!e10.tracks) return void this.log(`Waiting for track info before buffering ${e10}`);
        if (d2 && !K(d2, e10.tracks)) {
          let t11 = Error(`Asset ${sq(a10)} SourceBuffer tracks ('${Object.keys(e10.tracks)}') are not compatible with primary content tracks ('${Object.keys(d2)}')`), i11 = { fatal: true, type: m.OTHER_ERROR, details: p.INTERSTITIAL_ASSET_ITEM_ERROR, error: t11 }, r11 = s10.findAssetIndex(a10);
          this.handleAssetItemError(i11, s10, n2, r11, t11.message);
          return;
        }
      }
      this.transferMediaTo(e10, t10);
    }
    handleInPlaceStall(e10) {
      let t10 = this.schedule, i10 = this.primaryMedia;
      if (!t10 || !i10) return;
      let r10 = i10.currentTime, s10 = t10.findAssetIndex(e10, r10), a10 = e10.assetList[s10];
      if (a10) {
        let n2 = this.getAssetPlayer(a10.identifier);
        if (n2) {
          let l2 = n2.currentTime || r10 - a10.timelineStart, o2 = n2.duration - l2;
          if (this.warn(`Stalled at ${l2} of ${l2 + o2} in ${n2} ${e10} (media.currentTime: ${r10})`), l2 && (o2 / i10.playbackRate < 0.5 || n2.bufferedInPlaceToEnd(i10)) && n2.hls) {
            let i11 = t10.findEventIndex(e10.identifier);
            this.advanceAfterAssetEnded(e10, i11, s10);
          }
        }
      }
    }
    advanceInPlace(e10) {
      let t10 = this.primaryMedia;
      t10 && t10.currentTime < e10 && (t10.currentTime = e10);
    }
    handleAssetItemError(e10, t10, i10, r10, s10) {
      if (e10.details === p.BUFFER_STALLED_ERROR) return;
      let a10 = t10.assetList[r10] || null;
      if (this.warn(`INTERSTITIAL_ASSET_ERROR ${a10 ? sq(a10) : a10} ${e10.error}`), !this.schedule) return;
      let n2 = (null == a10 ? void 0 : a10.identifier) || "", l2 = this.getAssetPlayerQueueIndex(n2), o2 = this.playerQueue[l2] || null, h2 = this.schedule.items, d2 = w({}, e10, { fatal: false, errorAction: ts(true), asset: a10, assetListIndex: r10, event: t10, schedule: h2, scheduleIndex: i10, player: o2 });
      if (this.hls.trigger(y.INTERSTITIAL_ASSET_ERROR, d2), !e10.fatal) return;
      let u2 = this.playingAsset, f2 = this.bufferingAsset, c2 = Error(s10);
      if (a10 && (this.clearAssetPlayer(n2, null), a10.error = c2), t10.assetList.some((e11) => !e11.error)) for (let e11 = r10; e11 < t10.assetList.length; e11++) this.resetAssetPlayer(t10.assetList[e11].identifier);
      else t10.error = c2;
      this.updateSchedule(true), t10.error ? this.primaryFallback(t10) : u2 && u2.identifier === n2 ? this.advanceAfterAssetEnded(t10, i10, r10) : f2 && f2.identifier === n2 && this.isInterstitial(this.bufferingItem) && this.advanceAssetBuffering(this.bufferingItem, f2);
    }
    primaryFallback(e10) {
      let t10 = e10.timelineStart, i10 = this.effectivePlayingItem, r10 = this.timelinePos;
      if (i10) {
        this.log(`Fallback to primary from event "${e10.identifier}" start: ${t10} pos: ${r10} playing: ${sz(i10)} error: ${e10.error}`), -1 === r10 && (r10 = this.hls.startPosition);
        let s11 = this.updateItem(i10, r10);
        this.itemsMatch(i10, s11) && this.clearInterstitial(e10, null), e10.appendInPlace && (this.attachPrimary(t10, null), this.flushFrontBuffer(t10));
      } else if (-1 === r10) return void this.checkStart();
      if (!this.schedule) return;
      let s10 = this.schedule.findItemIndexAtTime(r10);
      this.setSchedulePosition(s10);
    }
    onAssetListLoaded(e10, t10) {
      var i10, r10, s10;
      let a10 = t10.event, n2 = a10.identifier, l2 = t10.assetListResponse.ASSETS;
      if (!(null != (i10 = this.schedule) && i10.hasEvent(n2))) return;
      let o2 = a10.timelineStart, h2 = a10.duration, d2 = 0;
      l2.forEach((e11, t11) => {
        let i11 = parseFloat(e11.DURATION);
        this.createAsset(a10, t11, d2, o2 + d2, i11, e11.URI), d2 += i11;
      }), a10.duration = d2, this.log(`Loaded asset-list with duration: ${d2} (was: ${h2}) ${a10}`);
      let u2 = this.waitingItem, f2 = (null == u2 ? void 0 : u2.event.identifier) === n2;
      this.updateSchedule();
      let c2 = null == (r10 = this.bufferingItem) ? void 0 : r10.event;
      if (f2) {
        let e11 = this.schedule.findEventIndex(n2), t11 = null == (s10 = this.schedule.items) ? void 0 : s10[e11];
        if (t11) {
          if (!this.playingItem && this.timelinePos > t11.end && this.schedule.findItemIndexAtTime(this.timelinePos) !== e11) {
            a10.error = Error(`Interstitial ${l2.length ? "no longer within playback range" : "asset-list is empty"} ${this.timelinePos} ${a10}`), this.log(a10.error.message), this.updateSchedule(true), this.primaryFallback(a10);
            return;
          }
          this.setBufferingItem(t11);
        }
        this.setSchedulePosition(e11);
      } else if ((null == c2 ? void 0 : c2.identifier) === n2) {
        let e11 = a10.assetList[0];
        if (e11) {
          let t11 = this.getAssetPlayer(e11.identifier);
          if (c2.appendInPlace) {
            let e12 = this.primaryMedia;
            t11 && e12 && this.bufferAssetPlayer(t11, e12);
          } else t11 && t11.loadSource();
        }
      }
    }
    onError(e10, t10) {
      if (this.schedule) switch (t10.details) {
        case p.ASSET_LIST_PARSING_ERROR:
        case p.ASSET_LIST_LOAD_ERROR:
        case p.ASSET_LIST_LOAD_TIMEOUT: {
          let e11 = t10.interstitial;
          e11 && (this.updateSchedule(true), this.primaryFallback(e11));
          break;
        }
        case p.BUFFER_STALLED_ERROR: {
          let e11 = this.endedItem || this.waitingItem || this.playingItem;
          if (this.isInterstitial(e11) && e11.event.appendInPlace) return void this.handleInPlaceStall(e11.event);
          this.log(`Primary player stall @${this.timelinePos} bufferedPos: ${this.bufferedPos}`), this.onTimeupdate(), this.checkBuffer(true);
        }
      }
    }
  } });
  class aV extends tT {
    constructor(e10, t10) {
      super("gap-controller", e10.logger), this.hls = void 0, this.fragmentTracker = void 0, this.media = null, this.mediaSource = void 0, this.nudgeRetry = 0, this.stallReported = false, this.stalled = null, this.moved = false, this.seeking = false, this.buffered = {}, this.lastCurrentTime = 0, this.ended = 0, this.waiting = 0, this.onMediaPlaying = () => {
        this.ended = 0, this.waiting = 0;
      }, this.onMediaWaiting = () => {
        var e11;
        null != (e11 = this.media) && e11.seeking || (this.waiting = self.performance.now(), this.tick());
      }, this.onMediaEnded = () => {
        if (this.hls) {
          var e11;
          this.ended = (null == (e11 = this.media) ? void 0 : e11.currentTime) || 1, this.hls.trigger(y.MEDIA_ENDED, { stalled: false });
        }
      }, this.hls = e10, this.fragmentTracker = t10, this.registerListeners();
    }
    registerListeners() {
      let { hls: e10 } = this;
      e10 && (e10.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e10.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e10.on(y.BUFFER_APPENDED, this.onBufferAppended, this));
    }
    unregisterListeners() {
      let { hls: e10 } = this;
      e10 && (e10.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e10.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e10.off(y.BUFFER_APPENDED, this.onBufferAppended, this));
    }
    destroy() {
      super.destroy(), this.unregisterListeners(), this.media = this.hls = this.fragmentTracker = null, this.mediaSource = void 0;
    }
    onMediaAttached(e10, t10) {
      this.setInterval(100), this.mediaSource = t10.mediaSource;
      let i10 = this.media = t10.media;
      iD(i10, "playing", this.onMediaPlaying), iD(i10, "waiting", this.onMediaWaiting), iD(i10, "ended", this.onMediaEnded);
    }
    onMediaDetaching(e10, t10) {
      this.clearInterval();
      let { media: i10 } = this;
      i10 && (i_(i10, "playing", this.onMediaPlaying), i_(i10, "waiting", this.onMediaWaiting), i_(i10, "ended", this.onMediaEnded), this.media = null), this.mediaSource = void 0;
    }
    onBufferAppended(e10, t10) {
      this.buffered = t10.timeRanges;
    }
    get hasBuffered() {
      return Object.keys(this.buffered).length > 0;
    }
    tick() {
      var e10;
      if (!(null != (e10 = this.media) && e10.readyState) || !this.hasBuffered) return;
      let t10 = this.media.currentTime;
      this.poll(t10, this.lastCurrentTime), this.lastCurrentTime = t10;
    }
    poll(e10, t10) {
      var i10, r10, s10;
      let a10 = null == (i10 = this.hls) ? void 0 : i10.config;
      if (!a10) return;
      let n2 = this.media;
      if (!n2) return;
      let { seeking: l2 } = n2, o2 = this.seeking && !l2, h2 = !this.seeking && l2, d2 = n2.paused && !l2 || n2.ended || 0 === n2.playbackRate;
      if (this.seeking = l2, e10 !== t10) {
        t10 && (this.ended = 0), this.moved = true, !l2 && (this.nudgeRetry = 0, a10.nudgeOnVideoHole && !d2 && e10 > t10 && this.nudgeOnVideoHole(e10, t10)), 0 === this.waiting && this.stallResolved(e10);
        return;
      }
      if (h2 || o2) {
        o2 && this.stallResolved(e10);
        return;
      }
      if (d2) {
        this.nudgeRetry = 0, this.stallResolved(e10), !this.ended && n2.ended && this.hls && (this.ended = e10 || 1, this.hls.trigger(y.MEDIA_ENDED, { stalled: false }));
        return;
      }
      if (!tR.getBuffered(n2).length) {
        this.nudgeRetry = 0;
        return;
      }
      let u2 = tR.bufferInfo(n2, e10, 0), f2 = u2.nextStart || 0, c2 = this.fragmentTracker;
      if (l2 && c2 && this.hls) {
        let t11 = aY(this.hls.inFlightFragments, e10), i11 = u2.len > 2, r11 = !f2 || t11 || f2 - e10 > 2 && !c2.getPartialFragment(e10);
        if (i11 || r11) return;
        this.moved = false;
      }
      let g2 = null == (r10 = this.hls) ? void 0 : r10.latestLevelDetails;
      if (!this.moved && null !== this.stalled && c2) {
        if (!(u2.len > 0) && !f2) return;
        let t11 = Math.max(f2, u2.start || 0) - e10, i11 = null != g2 && g2.live ? 2 * g2.targetduration : 2, r11 = aW(e10, c2);
        if (t11 > 0 && (t11 <= i11 || r11)) {
          n2.paused || this._trySkipBufferHole(r11);
          return;
        }
      }
      let m2 = a10.detectStallWithCurrentTimeMs, p2 = self.performance.now(), v2 = this.waiting, E2 = this.stalled;
      if (null === E2) if (v2 > 0 && p2 - v2 < m2) E2 = this.stalled = v2;
      else {
        this.stalled = p2;
        return;
      }
      let T2 = p2 - E2;
      if (!l2 && (T2 >= m2 || v2) && this.hls) {
        if ((null == (s10 = this.mediaSource) ? void 0 : s10.readyState) === "ended" && !(null != g2 && g2.live) && 1 > Math.abs(e10 - ((null == g2 ? void 0 : g2.edge) || 0))) {
          if (this.ended) return;
          this.ended = e10 || 1, this.hls.trigger(y.MEDIA_ENDED, { stalled: true });
          return;
        }
        if (this._reportStall(u2), !this.media || !this.hls) return;
      }
      let S2 = tR.bufferInfo(n2, e10, a10.maxBufferHole);
      this._tryFixBufferStall(S2, T2, e10);
    }
    stallResolved(e10) {
      let t10 = this.stalled;
      if (t10 && this.hls && (this.stalled = null, this.stallReported)) {
        let i10 = self.performance.now() - t10;
        this.log(`playback not stuck anymore @${e10}, after ${Math.round(i10)}ms`), this.stallReported = false, this.waiting = 0, this.hls.trigger(y.STALL_RESOLVED, {});
      }
    }
    nudgeOnVideoHole(e10, t10) {
      var i10;
      let r10 = this.buffered.video;
      if (this.hls && this.media && this.fragmentTracker && null != (i10 = this.buffered.audio) && i10.length && r10 && r10.length > 1 && e10 > r10.end(0)) {
        let i11 = tR.bufferedInfo(tR.timeRangesToArray(this.buffered.audio), e10, 0);
        if (i11.len > 1 && t10 >= i11.start) {
          let i12 = tR.timeRangesToArray(r10), s10 = tR.bufferedInfo(i12, t10, 0).bufferedIndex;
          if (s10 > -1 && s10 < i12.length - 1) {
            let t11 = tR.bufferedInfo(i12, e10, 0).bufferedIndex, r11 = i12[s10].end, a10 = i12[s10 + 1].start;
            if ((-1 === t11 || t11 > s10) && a10 - r11 < 1 && e10 - r11 < 2) {
              let i13 = Error(`nudging playhead to flush pipeline after video hole. currentTime: ${e10} hole: ${r11} -> ${a10} buffered index: ${t11}`);
              this.warn(i13.message), this.media.currentTime += 1e-6;
              let s11 = aW(e10, this.fragmentTracker);
              s11 && "fragment" in s11 ? s11 = s11.fragment : s11 || (s11 = void 0);
              let n2 = tR.bufferInfo(this.media, e10, 0);
              this.hls.trigger(y.ERROR, { type: m.MEDIA_ERROR, details: p.BUFFER_SEEK_OVER_HOLE, fatal: false, error: i13, reason: i13.message, frag: s11, buffer: n2.len, bufferInfo: n2 });
            }
          }
        }
      }
    }
    _tryFixBufferStall(e10, t10, i10) {
      var r10, s10;
      let { fragmentTracker: a10, media: n2 } = this, l2 = null == (r10 = this.hls) ? void 0 : r10.config;
      if (!n2 || !a10 || !l2) return;
      let o2 = null == (s10 = this.hls) ? void 0 : s10.latestLevelDetails, h2 = aW(i10, a10);
      if ((h2 || null != o2 && o2.live && i10 < o2.fragmentStart) && (this._trySkipBufferHole(h2) || !this.media)) return;
      let d2 = e10.buffered, u2 = this.adjacentTraversal(e10, i10);
      (d2 && d2.length > 1 && e10.len > l2.maxBufferHole || e10.nextStart && (e10.nextStart - i10 < l2.maxBufferHole || u2)) && (t10 > 1e3 * l2.highBufferWatchdogPeriod || this.waiting) && (this.warn("Trying to nudge playhead over buffer-hole"), this._tryNudgeBuffer(e10));
    }
    adjacentTraversal(e10, t10) {
      let i10 = this.fragmentTracker, r10 = e10.nextStart;
      if (i10 && r10) {
        let e11 = i10.getFragAtPos(t10, k), s10 = i10.getFragAtPos(r10, k);
        if (e11 && s10) return s10.sn - e11.sn < 2;
      }
      return false;
    }
    _reportStall(e10) {
      let { hls: t10, media: i10, stallReported: r10, stalled: s10 } = this;
      if (!r10 && null !== s10 && i10 && t10) {
        this.stallReported = true;
        let r11 = Error(`Playback stalling at @${i10.currentTime} due to low buffer (${eW(e10)})`);
        this.warn(r11.message), t10.trigger(y.ERROR, { type: m.MEDIA_ERROR, details: p.BUFFER_STALLED_ERROR, fatal: false, error: r11, buffer: e10.len, bufferInfo: e10, stalled: { start: s10 } });
      }
    }
    _trySkipBufferHole(e10) {
      var t10, i10;
      let { fragmentTracker: r10, media: s10 } = this, a10 = null == (t10 = this.hls) ? void 0 : t10.config;
      if (!s10 || !r10 || !a10) return 0;
      let n2 = s10.currentTime, l2 = tR.bufferInfo(s10, n2, 0), o2 = n2 < l2.start ? l2.start : l2.nextStart;
      if (o2 && this.hls) {
        let t11 = l2.len <= a10.maxBufferHole, h2 = l2.len > 0 && l2.len < 1 && s10.readyState < 3, d2 = o2 - n2;
        if (d2 > 0 && (t11 || h2)) {
          if (d2 > a10.maxBufferHole) {
            let t13 = false;
            if (0 === n2) {
              let e11 = r10.getAppendedFrag(0, k);
              e11 && o2 < e11.end && (t13 = true);
            }
            if (!t13 && e10) {
              if (!(null != (i10 = this.hls.loadLevelObj) && i10.details) || aY(this.hls.inFlightFragments, o2)) return 0;
              let t14 = false, s11 = e10.end;
              for (; s11 < o2; ) {
                let e11 = aW(s11, r10);
                if (e11) s11 += e11.duration;
                else {
                  t14 = true;
                  break;
                }
              }
              if (t14) return 0;
            }
          }
          let t12 = Math.max(o2 + 0.05, n2 + 0.1);
          if (this.warn(`skipping hole, adjusting currentTime from ${n2} to ${t12}`), this.moved = true, s10.currentTime = t12, !(null != e10 && e10.gap)) {
            let i11 = Error(`fragment loaded with buffer holes, seeking from ${n2} to ${t12}`), r11 = { type: m.MEDIA_ERROR, details: p.BUFFER_SEEK_OVER_HOLE, fatal: false, error: i11, reason: i11.message, buffer: l2.len, bufferInfo: l2 };
            e10 && ("fragment" in e10 ? r11.part = e10 : r11.frag = e10), this.hls.trigger(y.ERROR, r11);
          }
          return t12;
        }
      }
      return 0;
    }
    _tryNudgeBuffer(e10) {
      let { hls: t10, media: i10, nudgeRetry: r10 } = this, s10 = null == t10 ? void 0 : t10.config;
      if (!i10 || !s10) return 0;
      let a10 = i10.currentTime;
      if (this.nudgeRetry++, r10 < s10.nudgeMaxRetry) {
        let n2 = a10 + (r10 + 1) * s10.nudgeOffset, l2 = Error(`Nudging 'currentTime' from ${a10} to ${n2}`);
        this.warn(l2.message), i10.currentTime = n2, t10.trigger(y.ERROR, { type: m.MEDIA_ERROR, details: p.BUFFER_NUDGE_ON_STALL, error: l2, fatal: false, buffer: e10.len, bufferInfo: e10 });
      } else {
        let i11 = Error(`Playhead still not moving while enough data buffered @${a10} after ${s10.nudgeMaxRetry} nudges`);
        this.error(i11.message), t10.trigger(y.ERROR, { type: m.MEDIA_ERROR, details: p.BUFFER_STALLED_ERROR, error: i11, fatal: true, buffer: e10.len, bufferInfo: e10 });
      }
    }
  }
  function aY(e10, t10) {
    let i10 = aj(e10.main);
    if (i10 && i10.start <= t10) return i10;
    let r10 = aj(e10.audio);
    return r10 && r10.start <= t10 ? r10 : null;
  }
  function aj(e10) {
    if (!e10) return null;
    switch (e10.state) {
      case iw:
      case iC:
      case iB:
      case iN:
        return null;
    }
    return e10.frag;
  }
  function aW(e10, t10) {
    return t10.getAppendedFrag(e10, k) || t10.getPartialFragment(e10);
  }
  function aq() {
    if ("u" > typeof self) return self.VTTCue || self.TextTrackCue;
  }
  function aX(e10, t10, i10, r10, s10) {
    let a10 = new e10(t10, i10, "");
    try {
      a10.value = r10, s10 && (a10.type = s10);
    } catch (n2) {
      a10 = new e10(t10, i10, eW(s10 ? M({ type: s10 }, r10) : r10));
    }
    return a10;
  }
  let aQ = (() => {
    let e10 = aq();
    try {
      e10 && new e10(0, 1 / 0, "");
    } catch (e11) {
      return Number.MAX_VALUE;
    }
    return 1 / 0;
  })();
  class az {
    constructor(e10) {
      this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.removeCues = true, this.assetCue = void 0, this.onEventCueEnter = () => {
        this.hls && this.hls.trigger(y.EVENT_CUE_ENTER, {});
      }, this.hls = e10, this._registerListeners();
    }
    destroy() {
      this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = this.onEventCueEnter = null;
    }
    _registerListeners() {
      let { hls: e10 } = this;
      e10 && (e10.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e10.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e10.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e10.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.on(y.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e10.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e10.on(y.LEVEL_UPDATED, this.onLevelUpdated, this), e10.on(y.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this));
    }
    _unregisterListeners() {
      let { hls: e10 } = this;
      e10 && (e10.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e10.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e10.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e10.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.off(y.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e10.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e10.off(y.LEVEL_UPDATED, this.onLevelUpdated, this), e10.off(y.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this));
    }
    onMediaAttaching(e10, t10) {
      var i10;
      this.media = t10.media, (null == (i10 = t10.overrides) ? void 0 : i10.cueRemoval) === false && (this.removeCues = false);
    }
    onMediaAttached() {
      var e10;
      let t10 = null == (e10 = this.hls) ? void 0 : e10.latestLevelDetails;
      t10 && this.updateDateRangeCues(t10);
    }
    onMediaDetaching(e10, t10) {
      this.media = null, t10.transferMedia || (this.id3Track && (this.removeCues && sB(this.id3Track, this.onEventCueEnter), this.id3Track = null), this.dateRangeCuesAppended = {});
    }
    onManifestLoading() {
      this.dateRangeCuesAppended = {};
    }
    createTrack(e10) {
      let t10 = this.getID3Track(e10.textTracks);
      return t10.mode = "hidden", t10;
    }
    getID3Track(e10) {
      if (this.media) {
        for (let t10 = 0; t10 < e10.length; t10++) {
          let i10 = e10[t10];
          if ("metadata" === i10.kind && "id3" === i10.label) return s$(i10, this.media), i10;
        }
        return this.media.addTextTrack("metadata", "id3");
      }
    }
    onFragParsingMetadata(e10, t10) {
      if (!this.media || !this.hls) return;
      let { enableEmsgMetadataCues: i10, enableID3MetadataCues: r10 } = this.hls.config;
      if (!i10 && !r10) return;
      let { samples: s10 } = t10;
      this.id3Track || (this.id3Track = this.createTrack(this.media));
      let a10 = aq();
      if (a10) for (let e11 = 0; e11 < s10.length; e11++) {
        let t11 = s10[e11].type;
        if (t11 === re.emsg && !i10 || !r10) continue;
        let n2 = i6(s10[e11].data), l2 = s10[e11].pts, o2 = l2 + s10[e11].duration;
        o2 > aQ && (o2 = aQ), o2 - l2 <= 0 && (o2 = l2 + 0.25);
        for (let e12 = 0; e12 < n2.length; e12++) {
          let i11 = n2[e12];
          if (!i9(i11)) {
            this.updateId3CueEnds(l2, t11);
            let e13 = aX(a10, l2, o2, i11, t11);
            e13 && this.id3Track.addCue(e13);
          }
        }
      }
    }
    updateId3CueEnds(e10, t10) {
      var i10;
      let r10 = null == (i10 = this.id3Track) ? void 0 : i10.cues;
      if (r10) for (let i11 = r10.length; i11--; ) {
        let s10 = r10[i11];
        s10.type === t10 && s10.startTime < e10 && s10.endTime === aQ && (s10.endTime = e10);
      }
    }
    onBufferFlushing(e10, { startOffset: t10, endOffset: i10, type: r10 }) {
      let { id3Track: s10, hls: a10 } = this;
      if (!a10) return;
      let { config: { enableEmsgMetadataCues: n2, enableID3MetadataCues: l2 } } = a10;
      s10 && (n2 || l2) && sN(s10, t10, i10, "audio" === r10 ? (e11) => e11.type === re.audioId3 && l2 : "video" === r10 ? (e11) => e11.type === re.emsg && n2 : (e11) => e11.type === re.audioId3 && l2 || e11.type === re.emsg && n2);
    }
    onLevelUpdated(e10, { details: t10 }) {
      this.updateDateRangeCues(t10, true);
    }
    onLevelPtsUpdated(e10, t10) {
      Math.abs(t10.drift) > 0.01 && this.updateDateRangeCues(t10.details);
    }
    updateDateRangeCues(e10, t10) {
      var i10, r10;
      if (!this.hls || !this.media) return;
      let { assetPlayerId: s10, timelineOffset: a10, enableDateRangeMetadataCues: n2, interstitialsController: l2 } = this.hls.config;
      if (!n2) return;
      let o2 = aq();
      if (s10 && a10 && !l2) {
        let { fragmentStart: t11, fragmentEnd: i11 } = e10, r11 = this.assetCue;
        r11 ? (r11.startTime = t11, r11.endTime = i11) : o2 && (r11 = this.assetCue = aX(o2, t11, i11, { assetPlayerId: this.hls.config.assetPlayerId }, "hlsjs.interstitial.asset")) && (r11.id = s10, this.id3Track || (this.id3Track = this.createTrack(this.media)), this.id3Track.addCue(r11), r11.addEventListener("enter", this.onEventCueEnter));
      }
      if (!e10.hasProgramDateTime) return;
      let { id3Track: h2 } = this, { dateRanges: d2 } = e10, u2 = Object.keys(d2), c2 = this.dateRangeCuesAppended;
      if (h2 && t10) if (null != (i10 = h2.cues) && i10.length) {
        let e11 = Object.keys(c2).filter((e12) => !u2.includes(e12));
        for (let t11 = e11.length; t11--; ) {
          let i11 = e11[t11], s11 = null == (r10 = c2[i11]) ? void 0 : r10.cues;
          delete c2[i11], s11 && Object.keys(s11).forEach((e12) => {
            let t12 = s11[e12];
            if (t12) {
              t12.removeEventListener("enter", this.onEventCueEnter);
              try {
                h2.removeCue(t12);
              } catch (e13) {
              }
            }
          });
        }
      } else c2 = this.dateRangeCuesAppended = {};
      let g2 = e10.fragments[e10.fragments.length - 1];
      if (0 !== u2.length && f(null == g2 ? void 0 : g2.programDateTime)) {
        this.id3Track || (this.id3Track = this.createTrack(this.media));
        for (let e11 = 0; e11 < u2.length; e11++) {
          let t11 = u2[e11], i11 = d2[t11], r11 = i11.startTime, s11 = c2[t11], a11 = (null == s11 ? void 0 : s11.cues) || {}, n3 = (null == s11 ? void 0 : s11.durationKnown) || false, h3 = aQ, { duration: f2, endDate: g3 } = i11;
          if (g3 && null !== f2) h3 = r11 + f2, n3 = true;
          else if (i11.endOnNext && !n3) {
            let e12 = u2.reduce((e13, t12) => {
              if (t12 !== i11.id) {
                let r12 = d2[t12];
                if (r12.class === i11.class && r12.startDate > i11.startDate && (!e13 || i11.startDate < e13.startDate)) return r12;
              }
              return e13;
            }, null);
            e12 && (h3 = e12.startTime, n3 = true);
          }
          let m2 = Object.keys(i11.attr);
          for (let e12 = 0; e12 < m2.length; e12++) {
            let d3 = m2[e12];
            if ("ID" === d3 || "CLASS" === d3 || "CUE" === d3 || "START-DATE" === d3 || "DURATION" === d3 || "END-DATE" === d3 || "END-ON-NEXT" === d3) continue;
            let u3 = a11[d3];
            if (u3) n3 && !(null != s11 && s11.durationKnown) ? u3.endTime = h3 : Math.abs(u3.startTime - r11) > 0.01 && (u3.startTime = r11, u3.endTime = h3);
            else if (o2) {
              let e13 = i11.attr[d3];
              ("SCTE35-OUT" === d3 || "SCTE35-IN" === d3 || "SCTE35-CMD" === d3) && (e13 = Y(e13));
              let s12 = aX(o2, r11, h3, { key: d3, data: e13 }, re.dateRange);
              s12 && (s12.id = t11, this.id3Track.addCue(s12), a11[d3] = s12, l2 && ("X-ASSET-LIST" === d3 || "X-ASSET-URL" === d3) && s12.addEventListener("enter", this.onEventCueEnter));
            }
          }
          c2[t11] = { cues: a11, dateRange: i11, durationKnown: n3 };
        }
      }
    }
  }
  class aZ {
    constructor(e10) {
      this.hls = void 0, this.config = void 0, this.media = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this._targetLatencyUpdated = false, this.onTimeupdate = () => {
        let { media: e11 } = this, t10 = this.levelDetails;
        if (!e11 || !t10) return;
        this.currentTime = e11.currentTime;
        let i10 = this.computeLatency();
        if (null === i10) return;
        this._latency = i10;
        let { lowLatencyMode: r10, maxLiveSyncPlaybackRate: s10 } = this.config;
        if (!r10 || 1 === s10 || !t10.live) return;
        let a10 = this.targetLatency;
        if (null === a10) return;
        let n2 = i10 - a10;
        if (n2 < Math.min(this.maxLatency, a10 + t10.targetduration) && n2 > 0.05 && this.forwardBufferLength > 1) {
          let t11 = Math.min(Math.min(2, Math.max(1, s10)), Math.max(1, Math.round(2 / (1 + Math.exp(-0.75 * n2 - this.edgeStalled)) * 20) / 20));
          this.changeMediaPlaybackRate(e11, t11);
        } else 1 !== e11.playbackRate && 0 !== e11.playbackRate && this.changeMediaPlaybackRate(e11, 1);
      }, this.hls = e10, this.config = e10.config, this.registerListeners();
    }
    get levelDetails() {
      var e10;
      return (null == (e10 = this.hls) ? void 0 : e10.latestLevelDetails) || null;
    }
    get latency() {
      return this._latency || 0;
    }
    get maxLatency() {
      let { config: e10 } = this;
      if (void 0 !== e10.liveMaxLatencyDuration) return e10.liveMaxLatencyDuration;
      let t10 = this.levelDetails;
      return t10 ? e10.liveMaxLatencyDurationCount * t10.targetduration : 0;
    }
    get targetLatency() {
      let e10 = this.levelDetails;
      if (null === e10 || null === this.hls) return null;
      let { holdBack: t10, partHoldBack: i10, targetduration: r10 } = e10, { liveSyncDuration: s10, liveSyncDurationCount: a10, lowLatencyMode: n2 } = this.config, l2 = this.hls.userConfig, o2 = n2 && i10 || t10;
      return (this._targetLatencyUpdated || l2.liveSyncDuration || l2.liveSyncDurationCount || 0 === o2) && (o2 = void 0 !== s10 ? s10 : a10 * r10), o2 + Math.min(this.stallCount * this.config.liveSyncOnStallIncrease, r10);
    }
    set targetLatency(e10) {
      this.stallCount = 0, this.config.liveSyncDuration = e10, this._targetLatencyUpdated = true;
    }
    get liveSyncPosition() {
      let e10 = this.estimateLiveEdge(), t10 = this.targetLatency;
      if (null === e10 || null === t10) return null;
      let i10 = this.levelDetails;
      if (null === i10) return null;
      let r10 = i10.edge, s10 = e10 - t10 - this.edgeStalled;
      return Math.min(Math.max(r10 - i10.totalduration, s10), r10 - (this.config.lowLatencyMode && i10.partTarget || i10.targetduration));
    }
    get drift() {
      let e10 = this.levelDetails;
      return null === e10 ? 1 : e10.drift;
    }
    get edgeStalled() {
      let e10 = this.levelDetails;
      if (null === e10) return 0;
      let t10 = 3 * (this.config.lowLatencyMode && e10.partTarget || e10.targetduration);
      return Math.max(e10.age - t10, 0);
    }
    get forwardBufferLength() {
      let { media: e10 } = this, t10 = this.levelDetails;
      if (!e10 || !t10) return 0;
      let i10 = e10.buffered.length;
      return (i10 ? e10.buffered.end(i10 - 1) : t10.edge) - this.currentTime;
    }
    destroy() {
      this.unregisterListeners(), this.onMediaDetaching(), this.hls = null;
    }
    registerListeners() {
      let { hls: e10 } = this;
      e10 && (e10.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e10.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e10.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.on(y.LEVEL_UPDATED, this.onLevelUpdated, this), e10.on(y.ERROR, this.onError, this));
    }
    unregisterListeners() {
      let { hls: e10 } = this;
      e10 && (e10.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e10.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e10.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.off(y.LEVEL_UPDATED, this.onLevelUpdated, this), e10.off(y.ERROR, this.onError, this));
    }
    onMediaAttached(e10, t10) {
      this.media = t10.media, this.media.addEventListener("timeupdate", this.onTimeupdate);
    }
    onMediaDetaching() {
      this.media && (this.media.removeEventListener("timeupdate", this.onTimeupdate), this.media = null);
    }
    onManifestLoading() {
      this._latency = null, this.stallCount = 0;
    }
    onLevelUpdated(e10, { details: t10 }) {
      t10.advanced && this.onTimeupdate(), !t10.live && this.media && this.media.removeEventListener("timeupdate", this.onTimeupdate);
    }
    onError(e10, t10) {
      var i10;
      t10.details === p.BUFFER_STALLED_ERROR && (this.stallCount++, this.hls && null != (i10 = this.levelDetails) && i10.live && this.hls.logger.warn("[latency-controller]: Stall detected, adjusting target latency"));
    }
    changeMediaPlaybackRate(e10, t10) {
      var i10, r10;
      e10.playbackRate !== t10 && (null == (i10 = this.hls) || i10.logger.debug(`[latency-controller]: latency=${this.latency.toFixed(3)}, targetLatency=${null == (r10 = this.targetLatency) ? void 0 : r10.toFixed(3)}, forwardBufferLength=${this.forwardBufferLength.toFixed(3)}: adjusting playback rate from ${e10.playbackRate} to ${t10}`), e10.playbackRate = t10);
    }
    estimateLiveEdge() {
      let e10 = this.levelDetails;
      return null === e10 ? null : e10.edge + e10.age;
    }
    computeLatency() {
      let e10 = this.estimateLiveEdge();
      return null === e10 ? null : e10 - this.currentTime;
    }
  }
  class aJ extends rX {
    constructor(e10, t10) {
      super(e10, "level-controller"), this._levels = [], this._firstLevel = -1, this._maxAutoLevel = -1, this._startLevel = void 0, this.currentLevel = null, this.currentLevelIndex = -1, this.manualLevelIndex = -1, this.steering = void 0, this.onParsedComplete = void 0, this.steering = t10, this._registerListeners();
    }
    _registerListeners() {
      let { hls: e10 } = this;
      e10.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.on(y.MANIFEST_LOADED, this.onManifestLoaded, this), e10.on(y.LEVEL_LOADED, this.onLevelLoaded, this), e10.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e10.on(y.FRAG_BUFFERED, this.onFragBuffered, this), e10.on(y.ERROR, this.onError, this);
    }
    _unregisterListeners() {
      let { hls: e10 } = this;
      e10.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), e10.off(y.LEVEL_LOADED, this.onLevelLoaded, this), e10.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e10.off(y.FRAG_BUFFERED, this.onFragBuffered, this), e10.off(y.ERROR, this.onError, this);
    }
    destroy() {
      this._unregisterListeners(), this.steering = null, this.resetLevels(), super.destroy();
    }
    stopLoad() {
      this._levels.forEach((e10) => {
        e10.loadError = 0, e10.fragmentError = 0;
      }), super.stopLoad();
    }
    resetLevels() {
      this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [], this._maxAutoLevel = -1;
    }
    onManifestLoading(e10, t10) {
      this.resetLevels();
    }
    onManifestLoaded(e10, t10) {
      let i10 = this.hls.config.preferManagedMediaSource, r10 = [], s10 = {}, a10 = {}, n2 = false, l2 = false, o2 = false;
      t10.levels.forEach((e11) => {
        let t11 = e11.attrs, { audioCodec: h2, videoCodec: d2 } = e11;
        h2 && (e11.audioCodec = h2 = eC(h2, i10) || void 0), d2 && (d2 = e11.videoCodec = (function(e12) {
          let t12 = e12.split(",");
          for (let e13 = 0; e13 < t12.length; e13++) {
            let i11 = t12[e13].split(".");
            i11.length > 2 && "avc1" === i11[0] && (t12[e13] = `avc1.${parseInt(i11[1]).toString(16)}${("000" + parseInt(i11[2]).toString(16)).slice(-4)}`);
          }
          return t12.join(",");
        })(d2));
        let { width: u2, height: f2, unknownCodecs: c2 } = e11, g2 = (null == c2 ? void 0 : c2.length) || 0;
        if (n2 || (n2 = !!(u2 && f2)), l2 || (l2 = !!d2), o2 || (o2 = !!h2), g2 || h2 && !this.isAudioSupported(h2) || d2 && !this.isVideoSupported(d2)) return void this.log(`Some or all CODECS not supported "${t11.CODECS}"`);
        let { CODECS: m2, "FRAME-RATE": p2, "HDCP-LEVEL": y2, "PATHWAY-ID": v2, RESOLUTION: E2, "VIDEO-RANGE": T2 } = t11, S2 = `${v2 || "."}-`, A2 = `${S2}${e11.bitrate}-${E2}-${p2}-${m2}-${T2}-${y2}`;
        if (s10[A2]) if (s10[A2].uri === e11.url || e11.attrs["PATHWAY-ID"]) s10[A2].addGroupId("audio", t11.AUDIO), s10[A2].addGroupId("text", t11.SUBTITLES);
        else {
          let t12 = a10[A2] += 1;
          e11.attrs["PATHWAY-ID"] = Array(t12 + 1).join(".");
          let i11 = this.createLevel(e11);
          s10[A2] = i11, r10.push(i11);
        }
        else {
          let t12 = this.createLevel(e11);
          s10[A2] = t12, a10[A2] = 1, r10.push(t12);
        }
      }), this.filterAndSortMediaOptions(r10, t10, n2, l2, o2);
    }
    createLevel(e10) {
      let t10 = new eY(e10), i10 = e10.supplemental;
      if (null != i10 && i10.videoCodec && !this.isVideoSupported(i10.videoCodec)) {
        let e11 = Error(`SUPPLEMENTAL-CODECS not supported "${i10.videoCodec}"`);
        this.log(e11.message), t10.supportedResult = eU(e11, []);
      }
      return t10;
    }
    isAudioSupported(e10) {
      return eR(e10, "audio", this.hls.config.preferManagedMediaSource);
    }
    isVideoSupported(e10) {
      return eR(e10, "video", this.hls.config.preferManagedMediaSource);
    }
    filterAndSortMediaOptions(e10, t10, i10, r10, s10) {
      var a10, n2;
      let l2 = [], o2 = [], h2 = e10, d2 = (null == (a10 = t10.stats) ? void 0 : a10.parsing) || {};
      if ((i10 || r10) && s10 && (h2 = h2.filter(({ videoCodec: e11, videoRange: t11, width: i11, height: r11 }) => {
        var s11;
        return (!!e11 || !!(i11 && r11)) && !!(s11 = t11) && eK.indexOf(s11) > -1;
      })), 0 === h2.length) {
        Promise.resolve().then(() => {
          if (this.hls) {
            let e11 = "no level with compatible codecs found in manifest", i11 = e11;
            t10.levels.length && (i11 = `one or more CODECS in variant not supported: ${eW(t10.levels.map((e12) => e12.attrs.CODECS).filter((e12, t11, i12) => i12.indexOf(e12) === t11))}`, this.warn(i11), e11 += ` (${i11})`);
            let r11 = Error(e11);
            this.hls.trigger(y.ERROR, { type: m.MEDIA_ERROR, details: p.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal: true, url: t10.url, error: r11, reason: i11 });
          }
        }), d2.end = performance.now();
        return;
      }
      t10.audioTracks && a0(l2 = t10.audioTracks.filter((e11) => !e11.audioCodec || this.isAudioSupported(e11.audioCodec))), t10.subtitles && a0(o2 = t10.subtitles);
      let u2 = h2.slice(0);
      h2.sort((e11, t11) => {
        if (e11.attrs["HDCP-LEVEL"] !== t11.attrs["HDCP-LEVEL"]) return (e11.attrs["HDCP-LEVEL"] || "") > (t11.attrs["HDCP-LEVEL"] || "") ? 1 : -1;
        if (i10 && e11.height !== t11.height) return e11.height - t11.height;
        if (e11.frameRate !== t11.frameRate) return e11.frameRate - t11.frameRate;
        if (e11.videoRange !== t11.videoRange) return eK.indexOf(e11.videoRange) - eK.indexOf(t11.videoRange);
        if (e11.videoCodec !== t11.videoCodec) {
          let i11 = ek(e11.videoCodec), r11 = ek(t11.videoCodec);
          if (i11 !== r11) return r11 - i11;
        }
        if (e11.uri === t11.uri && e11.codecSet !== t11.codecSet) {
          let i11 = eD(e11.codecSet), r11 = eD(t11.codecSet);
          if (i11 !== r11) return r11 - i11;
        }
        return e11.averageBitrate !== t11.averageBitrate ? e11.averageBitrate - t11.averageBitrate : 0;
      });
      let f2 = u2[0];
      if (this.steering && (h2 = this.steering.filterParsedLevels(h2)).length !== u2.length) {
        for (let e11 = 0; e11 < u2.length; e11++) if (u2[e11].pathwayId === h2[0].pathwayId) {
          f2 = u2[e11];
          break;
        }
      }
      this._levels = h2;
      for (let e11 = 0; e11 < h2.length; e11++) if (h2[e11] === f2) {
        this._firstLevel = e11;
        let t11 = f2.bitrate, i11 = this.hls.bandwidthEstimate;
        if (this.log(`manifest loaded, ${h2.length} level(s) found, first bitrate: ${t11}`), (null == (n2 = this.hls.userConfig) ? void 0 : n2.abrEwmaDefaultEstimate) === void 0) {
          let e12 = Math.min(t11, this.hls.config.abrEwmaDefaultEstimateMax);
          e12 > i11 && i11 === this.hls.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = e12);
        }
        break;
      }
      let c2 = s10 && !r10, g2 = this.hls.config, v2 = !!(g2.audioStreamController && g2.audioTrackController), E2 = { levels: h2, audioTracks: l2, subtitleTracks: o2, sessionData: t10.sessionData, sessionKeys: t10.sessionKeys, firstLevel: this._firstLevel, stats: t10.stats, audio: s10, video: r10, altAudio: v2 && !c2 && l2.some((e11) => !!e11.url) };
      d2.end = performance.now(), this.hls.trigger(y.MANIFEST_PARSED, E2);
    }
    get levels() {
      return 0 === this._levels.length ? null : this._levels;
    }
    get loadLevelObj() {
      return this.currentLevel;
    }
    get level() {
      return this.currentLevelIndex;
    }
    set level(e10) {
      let t10 = this._levels;
      if (0 === t10.length) return;
      if (e10 < 0 || e10 >= t10.length) {
        let i11 = Error("invalid level idx"), r11 = e10 < 0;
        if (this.hls.trigger(y.ERROR, { type: m.OTHER_ERROR, details: p.LEVEL_SWITCH_ERROR, level: e10, fatal: r11, error: i11, reason: i11.message }), r11) return;
        e10 = Math.min(e10, t10.length - 1);
      }
      let i10 = this.currentLevelIndex, r10 = this.currentLevel, s10 = r10 ? r10.attrs["PATHWAY-ID"] : void 0, a10 = t10[e10], n2 = a10.attrs["PATHWAY-ID"];
      if (this.currentLevelIndex = e10, this.currentLevel = a10, i10 === e10 && r10 && s10 === n2) return;
      this.log(`Switching to level ${e10} (${a10.height ? a10.height + "p " : ""}${a10.videoRange ? a10.videoRange + " " : ""}${a10.codecSet ? a10.codecSet + " " : ""}@${a10.bitrate})${n2 ? " with Pathway " + n2 : ""} from level ${i10}${s10 ? " with Pathway " + s10 : ""}`);
      let l2 = { level: e10, attrs: a10.attrs, details: a10.details, bitrate: a10.bitrate, averageBitrate: a10.averageBitrate, maxBitrate: a10.maxBitrate, realBitrate: a10.realBitrate, width: a10.width, height: a10.height, codecSet: a10.codecSet, audioCodec: a10.audioCodec, videoCodec: a10.videoCodec, audioGroups: a10.audioGroups, subtitleGroups: a10.subtitleGroups, loaded: a10.loaded, loadError: a10.loadError, fragmentError: a10.fragmentError, name: a10.name, id: a10.id, uri: a10.uri, url: a10.url, urlId: 0, audioGroupIds: a10.audioGroupIds, textGroupIds: a10.textGroupIds };
      this.hls.trigger(y.LEVEL_SWITCHING, l2);
      let o2 = a10.details;
      if (!o2 || o2.live) {
        let e11 = this.switchParams(a10.uri, null == r10 ? void 0 : r10.details, o2);
        this.loadPlaylist(e11);
      }
    }
    get manualLevel() {
      return this.manualLevelIndex;
    }
    set manualLevel(e10) {
      this.manualLevelIndex = e10, void 0 === this._startLevel && (this._startLevel = e10), -1 !== e10 && (this.level = e10);
    }
    get firstLevel() {
      return this._firstLevel;
    }
    set firstLevel(e10) {
      this._firstLevel = e10;
    }
    get startLevel() {
      if (void 0 === this._startLevel) {
        let e10 = this.hls.config.startLevel;
        return void 0 !== e10 ? e10 : this.hls.firstAutoLevel;
      }
      return this._startLevel;
    }
    set startLevel(e10) {
      this._startLevel = e10;
    }
    get pathways() {
      return this.steering ? this.steering.pathways() : [];
    }
    get pathwayPriority() {
      return this.steering ? this.steering.pathwayPriority : null;
    }
    set pathwayPriority(e10) {
      if (this.steering) {
        let t10 = this.steering.pathways(), i10 = e10.filter((e11) => -1 !== t10.indexOf(e11));
        if (e10.length < 1) return void this.warn(`pathwayPriority ${e10} should contain at least one pathway from list: ${t10}`);
        this.steering.pathwayPriority = i10;
      }
    }
    onError(e10, t10) {
      !t10.fatal && t10.context && t10.context.type === R && t10.context.level === this.level && this.checkRetry(t10);
    }
    onFragBuffered(e10, { frag: t10 }) {
      if (void 0 !== t10 && t10.type === k) {
        let e11 = t10.elementaryStreams;
        if (!Object.keys(e11).some((t11) => !!e11[t11])) return;
        let i10 = this._levels[t10.level];
        null != i10 && i10.loadError && (this.log(`Resetting level error count of ${i10.loadError} on frag buffered`), i10.loadError = 0);
      }
    }
    onLevelLoaded(e10, t10) {
      var i10, r10;
      let { level: s10, details: a10 } = t10, n2 = t10.levelInfo;
      if (!n2) {
        this.warn(`Invalid level index ${s10}`), null != (r10 = t10.deliveryDirectives) && r10.skip && (a10.deltaUpdateFailed = true);
        return;
      }
      if (n2 === this.currentLevel || t10.withoutMultiVariant) {
        0 === n2.fragmentError && (n2.loadError = 0);
        let e11 = n2.details;
        e11 === t10.details && e11.advanced && (e11 = void 0), this.playlistLoaded(s10, t10, e11);
      } else null != (i10 = t10.deliveryDirectives) && i10.skip && (a10.deltaUpdateFailed = true);
    }
    loadPlaylist(e10) {
      super.loadPlaylist(), this.shouldLoadPlaylist(this.currentLevel) && this.scheduleLoading(this.currentLevel, e10);
    }
    loadingPlaylist(e10, t10) {
      super.loadingPlaylist(e10, t10);
      let i10 = this.getUrlWithDirectives(e10.uri, t10), r10 = this.currentLevelIndex, s10 = e10.attrs["PATHWAY-ID"], a10 = e10.details, n2 = null == a10 ? void 0 : a10.age;
      this.log(`Loading level index ${r10}${(null == t10 ? void 0 : t10.msn) !== void 0 ? " at sn " + t10.msn + " part " + t10.part : ""}${s10 ? " Pathway " + s10 : ""}${n2 && a10.live ? " age " + n2.toFixed(1) + (a10.type ? " " + a10.type : "") : ""} ${i10}`), this.hls.trigger(y.LEVEL_LOADING, { url: i10, level: r10, levelInfo: e10, pathwayId: e10.attrs["PATHWAY-ID"], id: 0, deliveryDirectives: t10 || null });
    }
    get nextLoadLevel() {
      return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel;
    }
    set nextLoadLevel(e10) {
      this.level = e10, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e10);
    }
    removeLevel(e10) {
      var t10;
      if (1 === this._levels.length) return;
      let i10 = this._levels.filter((t11, i11) => i11 !== e10 || (this.steering && this.steering.removeLevel(t11), t11 === this.currentLevel && (this.currentLevel = null, this.currentLevelIndex = -1, t11.details && t11.details.fragments.forEach((e11) => e11.level = -1)), false));
      iS(i10), this._levels = i10, this.currentLevelIndex > -1 && null != (t10 = this.currentLevel) && t10.details && (this.currentLevelIndex = this.currentLevel.details.fragments[0].level), this.manualLevelIndex > -1 && (this.manualLevelIndex = this.currentLevelIndex);
      let r10 = i10.length - 1;
      this._firstLevel = Math.min(this._firstLevel, r10), this._startLevel && (this._startLevel = Math.min(this._startLevel, r10)), this.hls.trigger(y.LEVELS_UPDATED, { levels: i10 });
    }
    onLevelsUpdated(e10, { levels: t10 }) {
      this._levels = t10;
    }
    checkMaxAutoUpdated() {
      let { autoLevelCapping: e10, maxAutoLevel: t10, maxHdcpLevel: i10 } = this.hls;
      this._maxAutoLevel !== t10 && (this._maxAutoLevel = t10, this.hls.trigger(y.MAX_AUTO_LEVEL_UPDATED, { autoLevelCapping: e10, levels: this.levels, maxAutoLevel: t10, minAutoLevel: this.hls.minAutoLevel, maxHdcpLevel: i10 }));
    }
  }
  function a0(e10) {
    let t10 = {};
    e10.forEach((e11) => {
      let i10 = e11.groupId || "";
      e11.id = t10[i10] = t10[i10] || 0, t10[i10]++;
    });
  }
  function a1() {
    return self.SourceBuffer || self.WebKitSourceBuffer;
  }
  function a2() {
    if (!G()) return false;
    let e10 = a1();
    return !e10 || e10.prototype && "function" == typeof e10.prototype.appendBuffer && "function" == typeof e10.prototype.remove;
  }
  class a3 extends iH {
    constructor(e10, t10, i10) {
      super(e10, t10, i10, "stream-controller", k), this.audioCodecSwap = false, this.level = -1, this._forceStartLoad = false, this._hasEnoughToStart = false, this.altAudio = 0, this.audioOnly = false, this.fragPlaying = null, this.fragLastKbps = 0, this.couldBacktrack = false, this.backtrackFragment = null, this.audioCodecSwitch = false, this.videoBuffer = null, this.onMediaPlaying = () => {
        this.tick();
      }, this.onMediaSeeked = () => {
        let e11 = this.media, t11 = e11 ? e11.currentTime : null;
        if (null === t11 || !f(t11) || (this.log(`Media seeked to ${t11.toFixed(3)}`), !this.getBufferedFrag(t11))) return;
        let i11 = this.getFwdBufferInfoAtPos(e11, t11, k, 0);
        null === i11 || 0 === i11.len ? this.warn(`Main forward buffer length at ${t11} on "seeked" event ${i11 ? i11.len : "empty"})`) : this.tick();
      }, this.registerListeners();
    }
    registerListeners() {
      super.registerListeners();
      let { hls: e10 } = this;
      e10.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e10.on(y.LEVEL_LOADING, this.onLevelLoading, this), e10.on(y.LEVEL_LOADED, this.onLevelLoaded, this), e10.on(y.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e10.on(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e10.on(y.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e10.on(y.BUFFER_CREATED, this.onBufferCreated, this), e10.on(y.BUFFER_FLUSHED, this.onBufferFlushed, this), e10.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e10.on(y.FRAG_BUFFERED, this.onFragBuffered, this);
    }
    unregisterListeners() {
      super.unregisterListeners();
      let { hls: e10 } = this;
      e10.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e10.off(y.LEVEL_LOADED, this.onLevelLoaded, this), e10.off(y.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e10.off(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e10.off(y.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e10.off(y.BUFFER_CREATED, this.onBufferCreated, this), e10.off(y.BUFFER_FLUSHED, this.onBufferFlushed, this), e10.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e10.off(y.FRAG_BUFFERED, this.onFragBuffered, this);
    }
    onHandlerDestroying() {
      this.onMediaPlaying = this.onMediaSeeked = null, this.unregisterListeners(), super.onHandlerDestroying();
    }
    startLoad(e10, t10) {
      if (this.levels) {
        let { lastCurrentTime: i10, hls: r10 } = this;
        if (this.stopLoad(), this.setInterval(100), this.level = -1, !this.startFragRequested) {
          let e11 = r10.startLevel;
          -1 === e11 && (r10.config.testBandwidth && this.levels.length > 1 ? (e11 = 0, this.bitrateTest = true) : e11 = r10.firstAutoLevel), r10.nextLoadLevel = e11, this.level = r10.loadLevel, this._hasEnoughToStart = !!t10;
        }
        i10 > 0 && -1 === e10 && !t10 && (this.log(`Override startPosition with lastCurrentTime @${i10.toFixed(3)}`), e10 = i10), this.state = iw, this.nextLoadPosition = this.lastCurrentTime = e10 + this.timelineOffset, this.startPosition = t10 ? -1 : e10, this.tick();
      } else this._forceStartLoad = true, this.state = iC;
    }
    stopLoad() {
      this._forceStartLoad = false, super.stopLoad();
    }
    doTick() {
      switch (this.state) {
        case iK: {
          let { levels: e10, level: t10 } = this, i10 = null == e10 ? void 0 : e10[t10], r10 = null == i10 ? void 0 : i10.details;
          if (!r10 || r10.live && (this.levelLastLoaded !== i10 || this.waitForLive(i10))) this.hls.nextLoadLevel !== this.level && (this.state = iw);
          else {
            if (this.waitForCdnTuneIn(r10)) break;
            this.state = iw;
          }
          break;
        }
        case iO:
          this.checkRetryDate();
      }
      this.state === iw && this.doTickIdle(), this.onTickEnd();
    }
    onTickEnd() {
      var e10;
      super.onTickEnd(), null != (e10 = this.media) && e10.readyState && false === this.media.seeking && (this.lastCurrentTime = this.media.currentTime), this.checkFragmentChanged();
    }
    doTickIdle() {
      let { hls: e10, levelLastLoaded: t10, levels: i10, media: r10 } = this;
      if (null === t10 || !r10 && !this.primaryPrefetch && (this.startFragRequested || !e10.config.startFragPrefetch) || this.altAudio && this.audioOnly) return;
      let s10 = this.buffering ? e10.nextLoadLevel : e10.loadLevel;
      if (!(null != i10 && i10[s10])) return;
      let a10 = i10[s10], n2 = this.getMainFwdBufferInfo();
      if (null === n2) return;
      let l2 = this.getLevelDetails();
      if (l2 && this._streamEnded(n2, l2)) {
        let e11 = {};
        2 === this.altAudio && (e11.type = "video"), this.hls.trigger(y.BUFFER_EOS, e11), this.state = iB;
        return;
      }
      if (!this.buffering) return;
      e10.loadLevel !== s10 && -1 === e10.manualLevel && this.log(`Adapting to level ${s10} from level ${this.level}`), this.level = e10.nextLoadLevel = s10;
      let o2 = a10.details;
      if (!o2 || this.state === iK || this.waitForLive(a10)) {
        this.level = s10, this.state = iK, this.startFragRequested = false;
        return;
      }
      let h2 = n2.len, d2 = this.getMaxBufferLength(a10.maxBitrate);
      if (h2 >= d2) return;
      this.backtrackFragment && this.backtrackFragment.start > n2.end && (this.backtrackFragment = null);
      let u2 = this.backtrackFragment ? this.backtrackFragment.start : n2.end, f2 = this.getNextFragment(u2, o2);
      if (this.couldBacktrack && !this.fragPrevious && f2 && J(f2) && "OK" !== this.fragmentTracker.getState(f2)) {
        var c2;
        let e11 = (null != (c2 = this.backtrackFragment) ? c2 : f2).sn - o2.startSN, t11 = o2.fragments[e11 - 1];
        t11 && f2.cc === t11.cc && (f2 = t11, this.fragmentTracker.removeFragment(t11));
      } else this.backtrackFragment && n2.len && (this.backtrackFragment = null);
      if (f2 && this.isLoopLoading(f2, u2)) {
        if (!f2.gap) {
          let e11 = this.audioOnly && !this.altAudio ? X : Q, t11 = (e11 === Q ? this.videoBuffer : this.mediaBuffer) || this.media;
          t11 && this.afterBufferFlushed(t11, e11, k);
        }
        f2 = this.getNextFragmentLoopLoading(f2, o2, n2, k, d2);
      }
      !f2 || this.exceedsMaxBuffer(n2, d2, f2) || (!f2.initSegment || f2.initSegment.data || this.bitrateTest || (f2 = f2.initSegment), this.loadFragment(f2, a10, u2));
    }
    loadFragment(e10, t10, i10) {
      let r10 = this.fragmentTracker.getState(e10);
      r10 === ta || r10 === tl ? J(e10) ? this.bitrateTest ? (this.log(`Fragment ${e10.sn} of level ${e10.level} is being downloaded to test bitrate and will not be buffered`), this._loadBitrateTestFrag(e10, t10)) : super.loadFragment(e10, t10, i10) : this._loadInitSegment(e10, t10) : this.clearTrackerIfNeeded(e10);
    }
    getBufferedFrag(e10) {
      return this.fragmentTracker.getBufferedFrag(e10, k);
    }
    followingBufferedFrag(e10) {
      return e10 ? this.getBufferedFrag(e10.end + 0.5) : null;
    }
    immediateLevelSwitch() {
      if (this.abortCurrentFrag(), this.flushMainBuffer(0, 1 / 0), 0 !== this.altAudio) {
        var e10;
        ((null == (e10 = this.getLevelDetails()) ? void 0 : e10.fragmentStart) || 0) > this.lastCurrentTime && super.flushMainBuffer(0, 1 / 0, "audio");
      }
    }
    nextLevelSwitch() {
      let { levels: e10, media: t10 } = this;
      if (null != t10 && t10.readyState) {
        let i10, r10 = this.getAppendedFrag(t10.currentTime);
        r10 && r10.start > 1 && this.flushMainBuffer(0, r10.start - 1);
        let s10 = this.getLevelDetails();
        if (null != s10 && s10.live) {
          let e11 = this.getMainFwdBufferInfo();
          if (!e11 || e11.len < 2 * s10.targetduration) return;
        }
        if (!t10.paused && e10) {
          let t11 = e10[this.hls.nextLoadLevel], r11 = this.fragLastKbps;
          i10 = r11 && this.fragCurrent ? this.fragCurrent.duration * t11.maxBitrate / (1e3 * r11) + 1 : 0;
        } else i10 = 0;
        let a10 = this.getBufferedFrag(t10.currentTime + i10);
        if (a10) {
          let e11 = this.followingBufferedFrag(a10);
          if (e11) {
            this.abortCurrentFrag();
            let t11 = e11.maxStartPTS ? e11.maxStartPTS : e11.start, i11 = e11.duration, r11 = Math.max(a10.end, t11 + Math.min(Math.max(i11 - this.config.maxFragLookUpTolerance, i11 * (this.couldBacktrack ? 0.5 : 0.125)), i11 * (this.couldBacktrack ? 0.75 : 0.25)));
            this.flushMainBuffer(r11, 1 / 0);
          }
        }
      }
    }
    abortCurrentFrag() {
      let e10 = this.fragCurrent;
      switch (this.fragCurrent = null, this.backtrackFragment = null, e10 && (e10.abortRequests(), this.fragmentTracker.removeFragment(e10)), this.state) {
        case ix:
        case iM:
        case iO:
        case i$:
        case iU:
          this.state = iw;
      }
      this.nextLoadPosition = this.getLoadPosition();
    }
    flushMainBuffer(e10, t10) {
      super.flushMainBuffer(e10, t10, 2 === this.altAudio ? "video" : null);
    }
    onMediaAttached(e10, t10) {
      super.onMediaAttached(e10, t10);
      let i10 = t10.media;
      iD(i10, "playing", this.onMediaPlaying), iD(i10, "seeked", this.onMediaSeeked);
    }
    onMediaDetaching(e10, t10) {
      let { media: i10 } = this;
      i10 && (i_(i10, "playing", this.onMediaPlaying), i_(i10, "seeked", this.onMediaSeeked)), this.videoBuffer = null, this.fragPlaying = null, super.onMediaDetaching(e10, t10), t10.transferMedia || (this._hasEnoughToStart = false);
    }
    onManifestLoading() {
      super.onManifestLoading(), this.log("Trigger BUFFER_RESET"), this.hls.trigger(y.BUFFER_RESET, void 0), this.couldBacktrack = false, this.fragLastKbps = 0, this.fragPlaying = this.backtrackFragment = null, this.altAudio = 0, this.audioOnly = false;
    }
    onManifestParsed(e10, t10) {
      var i10;
      let r10, s10 = false, a10 = false;
      for (let e11 = 0; e11 < t10.levels.length; e11++) {
        let i11 = t10.levels[e11].audioCodec;
        i11 && (s10 = s10 || -1 !== i11.indexOf("mp4a.40.2"), a10 = a10 || -1 !== i11.indexOf("mp4a.40.5"));
      }
      this.audioCodecSwitch = s10 && a10 && "function" != typeof (null == (r10 = a1()) || null == (i10 = r10.prototype) ? void 0 : i10.changeType), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t10.levels, this.startFragRequested = false;
    }
    onLevelLoading(e10, t10) {
      let { levels: i10 } = this;
      if (!i10 || this.state !== iw) return;
      let r10 = t10.levelInfo;
      (!r10.details || r10.details.live && (this.levelLastLoaded !== r10 || r10.details.expired) || this.waitForCdnTuneIn(r10.details)) && (this.state = iK);
    }
    onLevelLoaded(e10, t10) {
      var i10, r10;
      let { levels: s10, startFragRequested: a10 } = this, n2 = t10.level, l2 = t10.details, o2 = l2.totalduration;
      if (!s10) return void this.warn(`Levels were reset while loading level ${n2}`);
      this.log(`Level ${n2} loaded [${l2.startSN},${l2.endSN}]${l2.lastPartSn ? `[part-${l2.lastPartSn}-${l2.lastPartIndex}]` : ""}, cc [${l2.startCC}, ${l2.endCC}] duration:${o2}`);
      let h2 = t10.levelInfo, d2 = this.fragCurrent;
      d2 && (this.state === iM || this.state === iO) && d2.level !== t10.level && d2.loader && this.abortCurrentFrag();
      let u2 = 0;
      if (l2.live || null != (i10 = h2.details) && i10.live) {
        if (this.checkLiveUpdate(l2), l2.deltaUpdateFailed) return;
        u2 = this.alignPlaylists(l2, h2.details, null == (r10 = this.levelLastLoaded) ? void 0 : r10.details);
      }
      if (h2.details = l2, this.levelLastLoaded = h2, a10 || this.setStartPosition(l2, u2), this.hls.trigger(y.LEVEL_UPDATED, { details: l2, level: n2 }), this.state === iK) {
        if (this.waitForCdnTuneIn(l2)) return;
        this.state = iw;
      }
      a10 && l2.live && this.synchronizeToLiveEdge(l2), this.tick();
    }
    synchronizeToLiveEdge(e10) {
      let { config: t10, media: i10 } = this;
      if (!i10) return;
      let r10 = this.hls.liveSyncPosition, s10 = this.getLoadPosition(), a10 = e10.fragmentStart, n2 = e10.edge, l2 = s10 >= a10 - t10.maxFragLookUpTolerance && s10 <= n2;
      if (null !== r10 && i10.duration > r10 && (s10 < r10 || !l2)) {
        let a11 = void 0 !== t10.liveMaxLatencyDuration ? t10.liveMaxLatencyDuration : t10.liveMaxLatencyDurationCount * e10.targetduration;
        if ((!l2 && i10.readyState < 4 || s10 < n2 - a11) && (this._hasEnoughToStart || (this.nextLoadPosition = r10), i10.readyState)) if (this.warn(`Playback: ${s10.toFixed(3)} is located too far from the end of live sliding playlist: ${n2}, reset currentTime to : ${r10.toFixed(3)}`), "buffered" === this.config.liveSyncMode) {
          var o2;
          let e11 = tR.bufferInfo(i10, r10, 0);
          if (!(null != (o2 = e11.buffered) && o2.length) || e11.start <= s10) {
            i10.currentTime = r10;
            return;
          }
          let { nextStart: t11 } = tR.bufferedInfo(e11.buffered, s10, 0);
          t11 && (i10.currentTime = t11);
        } else i10.currentTime = r10;
      }
    }
    _handleFragmentLoadProgress(e10) {
      var t10;
      let i10 = e10.frag, { part: r10, payload: s10 } = e10, { levels: a10 } = this;
      if (!a10) return void this.warn(`Levels were reset while fragment load was in progress. Fragment ${i10.sn} of level ${i10.level} will not be buffered`);
      let n2 = a10[i10.level];
      if (!n2) return void this.warn(`Level ${i10.level} not found on progress`);
      let l2 = n2.details;
      if (!l2) {
        this.warn(`Dropping fragment ${i10.sn} of level ${i10.level} after level details were reset`), this.fragmentTracker.removeFragment(i10);
        return;
      }
      let o2 = n2.videoCodec, h2 = l2.PTSKnown || !l2.live, d2 = null == (t10 = i10.initSegment) ? void 0 : t10.data, u2 = this._getAudioCodec(n2), f2 = this.transmuxer = this.transmuxer || new rq(this.hls, k, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), c2 = r10 ? r10.index : -1, g2 = new tS(i10.level, i10.sn, i10.stats.chunkCount, s10.byteLength, c2, -1 !== c2), m2 = this.initPTS[i10.cc];
      f2.push(s10, d2, u2, o2, i10, r10, l2.totalduration, h2, g2, m2);
    }
    onAudioTrackSwitching(e10, t10) {
      let i10 = this.hls, r10 = 0 !== this.altAudio;
      if (e1(t10.url, i10)) this.altAudio = 1;
      else {
        if (this.mediaBuffer !== this.media) {
          this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
          let e11 = this.fragCurrent;
          e11 && (this.log("Switching to main audio track, cancel main fragment load"), e11.abortRequests(), this.fragmentTracker.removeFragment(e11)), this.resetTransmuxer(), this.resetLoadingState();
        } else this.audioOnly && this.resetTransmuxer();
        if (r10) {
          this.altAudio = 0, this.fragmentTracker.removeAllFragments(), i10.once(y.BUFFER_FLUSHED, () => {
            this.hls && this.hls.trigger(y.AUDIO_TRACK_SWITCHED, t10);
          }), i10.trigger(y.BUFFER_FLUSHING, { startOffset: 0, endOffset: 1 / 0, type: null });
          return;
        }
        i10.trigger(y.AUDIO_TRACK_SWITCHED, t10);
      }
    }
    onAudioTrackSwitched(e10, t10) {
      let i10 = e1(t10.url, this.hls);
      if (i10) {
        let e11 = this.videoBuffer;
        e11 && this.mediaBuffer !== e11 && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = e11);
      }
      this.altAudio = 2 * !!i10, this.tick();
    }
    onBufferCreated(e10, t10) {
      let i10, r10, s10 = t10.tracks, a10 = false;
      for (let e11 in s10) {
        let t11 = s10[e11];
        if ("main" === t11.id) {
          if (r10 = e11, i10 = t11, "video" === e11) {
            let t12 = s10[e11];
            t12 && (this.videoBuffer = t12.buffer);
          }
        } else a10 = true;
      }
      a10 && i10 ? (this.log(`Alternate track found, use ${r10}.buffered to schedule main fragment loading`), this.mediaBuffer = i10.buffer) : this.mediaBuffer = this.media;
    }
    onFragBuffered(e10, t10) {
      let { frag: i10, part: r10 } = t10, s10 = i10.type === k;
      if (s10) {
        if (this.fragContextChanged(i10)) {
          this.warn(`Fragment ${i10.sn}${r10 ? " p: " + r10.index : ""} of level ${i10.level} finished buffering, but was aborted. state: ${this.state}`), this.state === iU && (this.state = iw);
          return;
        }
        let e11 = r10 ? r10.stats : i10.stats;
        this.fragLastKbps = Math.round(8 * e11.total / (e11.buffering.end - e11.loading.first)), J(i10) && (this.fragPrevious = i10), this.fragBufferedComplete(i10, r10);
      }
      let a10 = this.media;
      a10 && (!this._hasEnoughToStart && tR.getBuffered(a10).length && (this._hasEnoughToStart = true, this.seekToStartPos()), s10 && this.tick());
    }
    get hasEnoughToStart() {
      return this._hasEnoughToStart;
    }
    onError(e10, t10) {
      var i10;
      if (t10.fatal) {
        this.state = iN;
        return;
      }
      switch (t10.details) {
        case p.FRAG_GAP:
        case p.FRAG_PARSING_ERROR:
        case p.FRAG_DECRYPT_ERROR:
        case p.FRAG_LOAD_ERROR:
        case p.FRAG_LOAD_TIMEOUT:
        case p.KEY_LOAD_ERROR:
        case p.KEY_LOAD_TIMEOUT:
          this.onFragmentOrKeyLoadError(k, t10);
          break;
        case p.LEVEL_LOAD_ERROR:
        case p.LEVEL_LOAD_TIMEOUT:
        case p.LEVEL_PARSING_ERROR:
          t10.levelRetry || this.state !== iK || (null == (i10 = t10.context) ? void 0 : i10.type) !== R || (this.state = iw);
          break;
        case p.BUFFER_ADD_CODEC_ERROR:
        case p.BUFFER_APPEND_ERROR:
          if ("main" !== t10.parent) return;
          this.reduceLengthAndFlushBuffer(t10) && this.resetLoadingState();
          break;
        case p.BUFFER_FULL_ERROR:
          if ("main" !== t10.parent) return;
          this.reduceLengthAndFlushBuffer(t10) && (!this.config.interstitialsController && this.config.assetPlayerId ? this._hasEnoughToStart = true : this.flushMainBuffer(0, 1 / 0));
          break;
        case p.INTERNAL_EXCEPTION:
          this.recoverWorkerError(t10);
      }
    }
    onFragLoadEmergencyAborted() {
      this.state = iw, this._hasEnoughToStart || (this.startFragRequested = false, this.nextLoadPosition = this.lastCurrentTime), this.tickImmediate();
    }
    onBufferFlushed(e10, { type: t10 }) {
      if (t10 !== X || !this.altAudio) {
        let e11 = (t10 === Q ? this.videoBuffer : this.mediaBuffer) || this.media;
        e11 && (this.afterBufferFlushed(e11, t10, k), this.tick());
      }
    }
    onLevelsUpdated(e10, t10) {
      this.level > -1 && this.fragCurrent && (this.level = this.fragCurrent.level, -1 === this.level && this.resetWhenMissingContext(this.fragCurrent)), this.levels = t10.levels;
    }
    swapAudioCodec() {
      this.audioCodecSwap = !this.audioCodecSwap;
    }
    seekToStartPos() {
      let { media: e10 } = this;
      if (!e10) return;
      let t10 = e10.currentTime, i10 = this.startPosition;
      if (i10 >= 0 && t10 < i10) {
        if (e10.seeking) return void this.log(`could not seek to ${i10}, already seeking at ${t10}`);
        let r10 = this.timelineOffset;
        r10 && i10 && (i10 += r10);
        let s10 = this.getLevelDetails(), a10 = tR.getBuffered(e10), n2 = a10.length ? a10.start(0) : 0, l2 = n2 - i10, o2 = Math.max(this.config.maxBufferHole, this.config.maxFragLookUpTolerance);
        (this.config.startOnSegmentBoundary || l2 > 0 && (l2 < o2 || this.loadingParts && l2 < 2 * ((null == s10 ? void 0 : s10.partTarget) || 0))) && (this.log(`adjusting start position by ${l2} to match buffer start`), i10 += l2, this.startPosition = i10), t10 < i10 && (this.log(`seek to target start position ${i10} from current time ${t10} buffer start ${n2}`), e10.currentTime = i10);
      }
    }
    _getAudioCodec(e10) {
      let t10 = this.config.defaultAudioCodec || e10.audioCodec;
      return this.audioCodecSwap && t10 && (this.log("Swapping audio codec"), t10 = -1 !== t10.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), t10;
    }
    _loadBitrateTestFrag(e10, t10) {
      e10.bitrateTest = true, this._doFragLoad(e10, t10).then((e11) => {
        let { hls: i10 } = this, r10 = null == e11 ? void 0 : e11.frag;
        if (!r10 || this.fragContextChanged(r10)) return;
        t10.fragmentError = 0, this.state = iw, this.startFragRequested = false, this.bitrateTest = false;
        let s10 = r10.stats;
        s10.parsing.start = s10.parsing.end = s10.buffering.start = s10.buffering.end = self.performance.now(), i10.trigger(y.FRAG_LOADED, e11), r10.bitrateTest = false;
      }).catch((t11) => {
        this.state !== iC && this.state !== iN && (this.warn(t11), this.resetFragmentLoading(e10));
      });
    }
    _handleTransmuxComplete(e10) {
      let t10 = this.playlistType, { hls: i10 } = this, { remuxResult: r10, chunkMeta: s10 } = e10, a10 = this.getCurrentContext(s10);
      if (!a10) return void this.resetWhenMissingContext(s10);
      let { frag: n2, part: l2, level: o2 } = a10, { video: h2, text: d2, id3: u2, initSegment: c2 } = r10, { details: g2 } = o2, m2 = this.altAudio ? void 0 : r10.audio;
      if (this.fragContextChanged(n2)) return void this.fragmentTracker.removeFragment(n2);
      if (this.state = i$, c2) {
        let e11 = c2.tracks;
        if (e11) {
          let r12 = n2.initSegment || n2;
          if (this.unhandledEncryptionError(c2, n2)) return;
          this._bufferInitSegment(o2, e11, r12, s10), i10.trigger(y.FRAG_PARSING_INIT_SEGMENT, { frag: r12, id: t10, tracks: e11 });
        }
        let r11 = c2.initPTS, a11 = c2.timescale, l3 = this.initPTS[n2.cc];
        if (f(r11) && (!l3 || l3.baseTime !== r11 || l3.timescale !== a11)) {
          let e12 = c2.trackId;
          this.initPTS[n2.cc] = { baseTime: r11, timescale: a11, trackId: e12 }, i10.trigger(y.INIT_PTS_FOUND, { frag: n2, id: t10, initPTS: r11, timescale: a11, trackId: e12 });
        }
      }
      if (h2 && g2) {
        m2 && "audiovideo" === h2.type && this.logMuxedErr(n2);
        let e11 = g2.fragments[n2.sn - 1 - g2.startSN], t11 = n2.sn === g2.startSN, i11 = !e11 || n2.cc > e11.cc;
        if (false !== r10.independent) {
          let { startPTS: e12, endPTS: r11, startDTS: a11, endDTS: o3 } = h2;
          if (l2) l2.elementaryStreams[h2.type] = { startPTS: e12, endPTS: r11, startDTS: a11, endDTS: o3 };
          else if (h2.firstKeyFrame && h2.independent && 1 === s10.id && !i11 && (this.couldBacktrack = true), h2.dropped && h2.independent) {
            let s11 = this.getMainFwdBufferInfo(), a12 = (s11 ? s11.end : this.getLoadPosition()) + this.config.maxBufferHole, l3 = h2.firstKeyFramePTS ? h2.firstKeyFramePTS : e12;
            if (!t11 && a12 < l3 - this.config.maxBufferHole && !i11) return void this.backtrack(n2);
            i11 && (n2.gap = true), n2.setElementaryStreamInfo(h2.type, n2.start, r11, n2.start, o3, true);
          } else t11 && e12 - (g2.appliedTimelineOffset || 0) > 2 && (n2.gap = true);
          n2.setElementaryStreamInfo(h2.type, e12, r11, a11, o3), this.backtrackFragment && (this.backtrackFragment = n2), this.bufferFragmentData(h2, n2, l2, s10, t11 || i11);
        } else {
          if (!t11 && !i11) return void this.backtrack(n2);
          n2.gap = true;
        }
      }
      if (m2) {
        let { startPTS: e11, endPTS: t11, startDTS: i11, endDTS: r11 } = m2;
        l2 && (l2.elementaryStreams[X] = { startPTS: e11, endPTS: t11, startDTS: i11, endDTS: r11 }), n2.setElementaryStreamInfo(X, e11, t11, i11, r11), this.bufferFragmentData(m2, n2, l2, s10);
      }
      if (g2 && null != u2 && u2.samples.length) {
        let e11 = { id: t10, frag: n2, details: g2, samples: u2.samples };
        i10.trigger(y.FRAG_PARSING_METADATA, e11);
      }
      if (g2 && d2) {
        let e11 = { id: t10, frag: n2, details: g2, samples: d2.samples };
        i10.trigger(y.FRAG_PARSING_USERDATA, e11);
      }
    }
    logMuxedErr(e10) {
      this.warn(`${J(e10) ? "Media" : "Init"} segment with muxed audiovideo where only video expected: ${e10.url}`);
    }
    _bufferInitSegment(e10, t10, i10, r10) {
      if (this.state !== i$) return;
      this.audioOnly = !!t10.audio && !t10.video, this.altAudio && !this.audioOnly && (delete t10.audio, t10.audiovideo && this.logMuxedErr(i10));
      let { audio: s10, video: a10, audiovideo: n2 } = t10;
      if (s10) {
        let i11 = e10.audioCodec, r11 = ew(s10.codec, i11);
        "mp4a" === r11 && (r11 = "mp4a.40.5");
        let a11 = navigator.userAgent.toLowerCase();
        if (this.audioCodecSwitch) {
          r11 && (r11 = -1 !== r11.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5");
          let e11 = s10.metadata;
          e11 && "channelCount" in e11 && 1 !== (e11.channelCount || 1) && -1 === a11.indexOf("firefox") && (r11 = "mp4a.40.5");
        }
        r11 && -1 !== r11.indexOf("mp4a.40.5") && -1 !== a11.indexOf("android") && "audio/mpeg" !== s10.container && (r11 = "mp4a.40.2", this.log(`Android: force audio codec to ${r11}`)), i11 && i11 !== r11 && this.log(`Swapping manifest audio codec "${i11}" for "${r11}"`), s10.levelCodec = r11, s10.id = k, this.log(`Init audio buffer, container:${s10.container}, codecs[selected/level/parsed]=[${r11 || ""}/${i11 || ""}/${s10.codec}]`), delete t10.audiovideo;
      }
      if (a10) {
        a10.levelCodec = e10.videoCodec, a10.id = k;
        let i11 = a10.codec;
        if ((null == i11 ? void 0 : i11.length) === 4) switch (i11) {
          case "hvc1":
          case "hev1":
            a10.codec = "hvc1.1.6.L120.90";
            break;
          case "av01":
            a10.codec = "av01.0.04M.08";
            break;
          case "avc1":
            a10.codec = "avc1.42e01e";
        }
        this.log(`Init video buffer, container:${a10.container}, codecs[level/parsed]=[${e10.videoCodec || ""}/${i11}]${a10.codec !== i11 ? " parsed-corrected=" + a10.codec : ""}${a10.supplemental ? " supplemental=" + a10.supplemental : ""}`), delete t10.audiovideo;
      }
      n2 && (this.log(`Init audiovideo buffer, container:${n2.container}, codecs[level/parsed]=[${e10.codecs}/${n2.codec}]`), delete t10.video, delete t10.audio);
      let l2 = Object.keys(t10);
      if (l2.length) {
        if (this.hls.trigger(y.BUFFER_CODECS, t10), !this.hls) return;
        l2.forEach((e11) => {
          let s11 = t10[e11].initSegment;
          null != s11 && s11.byteLength && this.hls.trigger(y.BUFFER_APPENDING, { type: e11, data: s11, frag: i10, part: null, chunkMeta: r10, parent: i10.type });
        });
      }
      this.tickImmediate();
    }
    getMainFwdBufferInfo() {
      let e10 = this.mediaBuffer && 2 === this.altAudio ? this.mediaBuffer : this.media;
      return this.getFwdBufferInfo(e10, k);
    }
    get maxBufferLength() {
      let { levels: e10, level: t10 } = this, i10 = null == e10 ? void 0 : e10[t10];
      return i10 ? this.getMaxBufferLength(i10.maxBitrate) : this.config.maxBufferLength;
    }
    backtrack(e10) {
      this.couldBacktrack = true, this.backtrackFragment = e10, this.resetTransmuxer(), this.flushBufferGap(e10), this.fragmentTracker.removeFragment(e10), this.fragPrevious = null, this.nextLoadPosition = e10.start, this.state = iw;
    }
    checkFragmentChanged() {
      let e10 = this.media, t10 = null;
      if (e10 && e10.readyState > 1 && false === e10.seeking) {
        let i10 = e10.currentTime;
        if (tR.isBuffered(e10, i10) ? t10 = this.getAppendedFrag(i10) : tR.isBuffered(e10, i10 + 0.1) && (t10 = this.getAppendedFrag(i10 + 0.1)), t10) {
          this.backtrackFragment = null;
          let e11 = this.fragPlaying, i11 = t10.level;
          (!e11 || t10.sn !== e11.sn || e11.level !== i11) && (this.fragPlaying = t10, this.hls.trigger(y.FRAG_CHANGED, { frag: t10 }), e11 && e11.level === i11 || this.hls.trigger(y.LEVEL_SWITCHED, { level: i11 }));
        }
      }
    }
    get nextLevel() {
      let e10 = this.nextBufferedFrag;
      return e10 ? e10.level : -1;
    }
    get currentFrag() {
      var e10;
      if (this.fragPlaying) return this.fragPlaying;
      let t10 = (null == (e10 = this.media) ? void 0 : e10.currentTime) || this.lastCurrentTime;
      return f(t10) ? this.getAppendedFrag(t10) : null;
    }
    get currentProgramDateTime() {
      var e10;
      let t10 = (null == (e10 = this.media) ? void 0 : e10.currentTime) || this.lastCurrentTime;
      if (f(t10)) {
        let e11 = this.getLevelDetails(), i10 = this.currentFrag || (e11 ? e3(null, e11.fragments, t10) : null);
        if (i10) {
          let e12 = i10.programDateTime;
          if (null !== e12) return new Date(e12 + (t10 - i10.start) * 1e3);
        }
      }
      return null;
    }
    get currentLevel() {
      let e10 = this.currentFrag;
      return e10 ? e10.level : -1;
    }
    get nextBufferedFrag() {
      let e10 = this.currentFrag;
      return e10 ? this.followingBufferedFrag(e10) : null;
    }
    get forceStartLoad() {
      return this._forceStartLoad;
    }
  }
  class a4 extends O {
    constructor(e10, t10) {
      super("key-loader", t10), this.config = void 0, this.keyIdToKeyInfo = {}, this.emeController = null, this.config = e10;
    }
    abort(e10) {
      for (let i10 in this.keyIdToKeyInfo) {
        let r10 = this.keyIdToKeyInfo[i10].loader;
        if (r10) {
          var t10;
          if (e10 && e10 !== (null == (t10 = r10.context) ? void 0 : t10.frag.type)) return;
          r10.abort();
        }
      }
    }
    detach() {
      for (let e10 in this.keyIdToKeyInfo) {
        let t10 = this.keyIdToKeyInfo[e10];
        (t10.mediaKeySessionContext || t10.decryptdata.isCommonEncryption) && delete this.keyIdToKeyInfo[e10];
      }
    }
    destroy() {
      for (let e10 in this.detach(), this.keyIdToKeyInfo) {
        let t10 = this.keyIdToKeyInfo[e10].loader;
        t10 && t10.destroy();
      }
      this.keyIdToKeyInfo = {};
    }
    createKeyLoadError(e10, t10 = p.KEY_LOAD_ERROR, i10, r10, s10) {
      return new tE({ type: m.NETWORK_ERROR, details: t10, fatal: false, frag: e10, response: s10, error: i10, networkDetails: r10 });
    }
    loadClear(e10, t10, i10) {
      if (this.emeController && this.config.emeEnabled && !this.emeController.getSelectedKeySystemFormats().length) {
        if (t10.length) for (let r10 = 0, s10 = t10.length; r10 < s10; r10++) {
          let a10 = t10[r10];
          if (e10.cc <= a10.cc && (!J(e10) || !J(a10) || e10.sn < a10.sn) || !i10 && r10 == s10 - 1) return this.emeController.selectKeySystemFormat(a10).then((e11) => {
            if (!this.emeController) return;
            a10.setKeyFormat(e11);
            let t11 = tQ(e11);
            if (t11) return this.emeController.getKeySystemAccess([t11]);
          });
        }
        if (this.config.requireKeySystemAccessOnStart) {
          let e11 = tZ(this.config);
          if (e11.length) return this.emeController.getKeySystemAccess(e11);
        }
      }
      return null;
    }
    load(e10) {
      return !e10.decryptdata && e10.encrypted && this.emeController && this.config.emeEnabled ? this.emeController.selectKeySystemFormat(e10).then((t10) => this.loadInternal(e10, t10)) : this.loadInternal(e10);
    }
    loadInternal(e10, t10) {
      var i10, r10;
      t10 && e10.setKeyFormat(t10);
      let s10 = e10.decryptdata;
      if (!s10) {
        let i11 = Error(t10 ? `Expected frag.decryptdata to be defined after setting format ${t10}` : `Missing decryption data on fragment in onKeyLoading (emeEnabled with controller: ${this.emeController && this.config.emeEnabled})`);
        return Promise.reject(this.createKeyLoadError(e10, p.KEY_LOAD_ERROR, i11));
      }
      let a10 = s10.uri;
      if (!a10) return Promise.reject(this.createKeyLoadError(e10, p.KEY_LOAD_ERROR, Error(`Invalid key URI: "${a10}"`)));
      let n2 = a5(s10), l2 = this.keyIdToKeyInfo[n2];
      if (null != (i10 = l2) && i10.decryptdata.key) return s10.key = l2.decryptdata.key, Promise.resolve({ frag: e10, keyInfo: l2 });
      if (this.emeController && null != (r10 = l2) && r10.keyLoadPromise) switch (this.emeController.getKeyStatus(l2.decryptdata)) {
        case "usable":
        case "usable-in-future":
          return l2.keyLoadPromise.then((t11) => {
            let { keyInfo: i11 } = t11;
            return s10.key = i11.decryptdata.key, { frag: e10, keyInfo: i11 };
          });
      }
      switch (this.log(`${this.keyIdToKeyInfo[n2] ? "Rel" : "L"}oading${s10.keyId ? " keyId: " + V(s10.keyId) : ""} URI: ${s10.uri} from ${e10.type} ${e10.level}`), l2 = this.keyIdToKeyInfo[n2] = { decryptdata: s10, keyLoadPromise: null, loader: null, mediaKeySessionContext: null }, s10.method) {
        case "SAMPLE-AES":
        case "SAMPLE-AES-CENC":
        case "SAMPLE-AES-CTR":
          if ("identity" === s10.keyFormat) return this.loadKeyHTTP(l2, e10);
          return this.loadKeyEME(l2, e10);
        case "AES-128":
        case "AES-256":
        case "AES-256-CTR":
          return this.loadKeyHTTP(l2, e10);
        default:
          return Promise.reject(this.createKeyLoadError(e10, p.KEY_LOAD_ERROR, Error(`Key supplied with unsupported METHOD: "${s10.method}"`)));
      }
    }
    loadKeyEME(e10, t10) {
      let i10 = { frag: t10, keyInfo: e10 };
      if (this.emeController && this.config.emeEnabled) {
        var r10, s10;
        if (!e10.decryptdata.keyId && null != (r10 = t10.initSegment) && r10.data) {
          let i11, r11 = (s10 = t10.initSegment.data, i11 = [], em(s10, (e11) => i11.push(e11.subarray(8, 24))), i11);
          if (r11.length) {
            let t11 = r11[0];
            t11.some((e11) => 0 !== e11) ? (this.log(`Using keyId found in init segment ${V(t11)}`), t2.setKeyIdForUri(e10.decryptdata.uri, t11)) : (t11 = t2.addKeyIdForUri(e10.decryptdata.uri), this.log(`Generating keyId to patch media ${V(t11)}`)), e10.decryptdata.keyId = t11;
          }
        }
        return e10.decryptdata.keyId || J(t10) ? (e10.keyLoadPromise = this.emeController.loadKey(i10).then((t11) => (e10.mediaKeySessionContext = t11, i10))).catch((i11) => {
          throw e10.keyLoadPromise = null, "data" in i11 && (i11.data.frag = t10), i11;
        }) : Promise.resolve(i10);
      }
      return Promise.resolve(i10);
    }
    loadKeyHTTP(e10, t10) {
      let i10 = this.config, r10 = new i10.loader(i10);
      return t10.keyLoader = e10.loader = r10, e10.keyLoadPromise = new Promise((s10, a10) => {
        let n2 = { keyInfo: e10, frag: t10, responseType: "arraybuffer", url: e10.decryptdata.uri }, l2 = i10.keyLoadPolicy.default, o2 = { loadPolicy: l2, timeout: l2.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 };
        r10.load(n2, o2, { onSuccess: (e11, t11, i11, r11) => {
          let { frag: n3, keyInfo: l3 } = i11, o3 = a5(l3.decryptdata);
          if (!n3.decryptdata || l3 !== this.keyIdToKeyInfo[o3]) return a10(this.createKeyLoadError(n3, p.KEY_LOAD_ERROR, Error("after key load, decryptdata unset or changed"), r11));
          l3.decryptdata.key = n3.decryptdata.key = new Uint8Array(e11.data), n3.keyLoader = null, l3.loader = null, s10({ frag: n3, keyInfo: l3 });
        }, onError: (e11, i11, r11, s11) => {
          this.resetLoader(i11), a10(this.createKeyLoadError(t10, p.KEY_LOAD_ERROR, Error(`HTTP Error ${e11.code} loading key ${e11.text}`), r11, M({ url: n2.url, data: void 0 }, e11)));
        }, onTimeout: (e11, i11, r11) => {
          this.resetLoader(i11), a10(this.createKeyLoadError(t10, p.KEY_LOAD_TIMEOUT, Error("key loading timed out"), r11));
        }, onAbort: (e11, i11, r11) => {
          this.resetLoader(i11), a10(this.createKeyLoadError(t10, p.INTERNAL_ABORTED, Error("key loading aborted"), r11));
        } });
      });
    }
    resetLoader(e10) {
      let { frag: t10, keyInfo: i10, url: r10 } = e10, s10 = i10.loader;
      t10.keyLoader === s10 && (t10.keyLoader = null, i10.loader = null);
      let a10 = a5(i10.decryptdata) || r10;
      delete this.keyIdToKeyInfo[a10], s10 && s10.destroy();
    }
  }
  function a5(e10) {
    if (e10.keyFormat !== tW) {
      let t10 = e10.keyId;
      if (t10) return V(t10);
    }
    return e10.uri;
  }
  function a8(e10) {
    let { type: t10 } = e10;
    switch (t10) {
      case b:
        return D;
      case I:
        return _;
      default:
        return k;
    }
  }
  function a6(e10, t10) {
    let i10 = e10.url;
    return (void 0 === i10 || 0 === i10.indexOf("data:")) && (i10 = t10.url), i10;
  }
  class a9 {
    constructor(e10) {
      this.hls = void 0, this.loaders = /* @__PURE__ */ Object.create(null), this.variableList = null, this.onManifestLoaded = this.checkAutostartLoad, this.hls = e10, this.registerListeners();
    }
    startLoad(e10) {
    }
    stopLoad() {
      this.destroyInternalLoaders();
    }
    registerListeners() {
      let { hls: e10 } = this;
      e10.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.on(y.LEVEL_LOADING, this.onLevelLoading, this), e10.on(y.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e10.on(y.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this), e10.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this);
    }
    unregisterListeners() {
      let { hls: e10 } = this;
      e10.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e10.off(y.LEVEL_LOADING, this.onLevelLoading, this), e10.off(y.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e10.off(y.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this), e10.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this);
    }
    createInternalLoader(e10) {
      let t10 = this.hls.config, i10 = t10.pLoader, r10 = t10.loader, s10 = new (i10 || r10)(t10);
      return this.loaders[e10.type] = s10, s10;
    }
    getInternalLoader(e10) {
      return this.loaders[e10.type];
    }
    resetInternalLoader(e10) {
      this.loaders[e10] && delete this.loaders[e10];
    }
    destroyInternalLoaders() {
      for (let e10 in this.loaders) {
        let t10 = this.loaders[e10];
        t10 && t10.destroy(), this.resetInternalLoader(e10);
      }
    }
    destroy() {
      this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders();
    }
    onManifestLoading(e10, t10) {
      let { url: i10 } = t10;
      this.variableList = null, this.load({ id: null, level: 0, responseType: "text", type: L, url: i10, deliveryDirectives: null, levelOrTrack: null });
    }
    onLevelLoading(e10, t10) {
      let { id: i10, level: r10, pathwayId: s10, url: a10, deliveryDirectives: n2, levelInfo: l2 } = t10;
      this.load({ id: i10, level: r10, pathwayId: s10, responseType: "text", type: R, url: a10, deliveryDirectives: n2, levelOrTrack: l2 });
    }
    onAudioTrackLoading(e10, t10) {
      let { id: i10, groupId: r10, url: s10, deliveryDirectives: a10, track: n2 } = t10;
      this.load({ id: i10, groupId: r10, level: null, responseType: "text", type: b, url: s10, deliveryDirectives: a10, levelOrTrack: n2 });
    }
    onSubtitleTrackLoading(e10, t10) {
      let { id: i10, groupId: r10, url: s10, deliveryDirectives: a10, track: n2 } = t10;
      this.load({ id: i10, groupId: r10, level: null, responseType: "text", type: I, url: s10, deliveryDirectives: a10, levelOrTrack: n2 });
    }
    onLevelsUpdated(e10, t10) {
      let i10 = this.loaders[R];
      if (i10) {
        let e11 = i10.context;
        e11 && !t10.levels.some((t11) => t11 === e11.levelOrTrack) && (i10.abort(), delete this.loaders[R]);
      }
    }
    load(e10) {
      var t10;
      let i10, r10 = this.hls.config, s10 = this.getInternalLoader(e10);
      if (s10) {
        let t11 = this.hls.logger, i11 = s10.context;
        if (i11 && i11.levelOrTrack === e10.levelOrTrack && (i11.url === e10.url || i11.deliveryDirectives && !e10.deliveryDirectives)) return void (i11.url === e10.url ? t11.log(`[playlist-loader]: ignore ${e10.url} ongoing request`) : t11.log(`[playlist-loader]: ignore ${e10.url} in favor of ${i11.url}`));
        t11.log(`[playlist-loader]: aborting previous loader for type: ${e10.type}`), s10.abort();
      }
      if (i10 = e10.type === L ? r10.manifestLoadPolicy.default : w({}, r10.playlistLoadPolicy.default, { timeoutRetry: null, errorRetry: null }), s10 = this.createInternalLoader(e10), f(null == (t10 = e10.deliveryDirectives) ? void 0 : t10.part)) {
        let t11;
        if (e10.type === R && null !== e10.level ? t11 = this.hls.levels[e10.level].details : e10.type === b && null !== e10.id ? t11 = this.hls.audioTracks[e10.id].details : e10.type === I && null !== e10.id && (t11 = this.hls.subtitleTracks[e10.id].details), t11) {
          let e11 = t11.partTarget, r11 = t11.targetduration;
          if (e11 && r11) {
            let t12 = 1e3 * Math.max(3 * e11, 0.8 * r11);
            i10 = w({}, i10, { maxTimeToFirstByteMs: Math.min(t12, i10.maxTimeToFirstByteMs), maxLoadTimeMs: Math.min(t12, i10.maxTimeToFirstByteMs) });
          }
        }
      }
      let a10 = i10.errorRetry || i10.timeoutRetry || {}, n2 = { loadPolicy: i10, timeout: i10.maxLoadTimeMs, maxRetry: a10.maxNumRetry || 0, retryDelay: a10.retryDelayMs || 0, maxRetryDelay: a10.maxRetryDelayMs || 0 };
      s10.load(e10, n2, { onSuccess: (e11, t11, i11, r11) => {
        let s11 = this.getInternalLoader(i11);
        this.resetInternalLoader(i11.type);
        let a11 = e11.data;
        t11.parsing.start = performance.now(), t7.isMediaPlaylist(a11) || i11.type !== L ? this.handleTrackOrLevelPlaylist(e11, t11, i11, r11 || null, s11) : this.handleMasterPlaylist(e11, t11, i11, r11);
      }, onError: (e11, t11, i11, r11) => {
        this.handleNetworkError(t11, i11, false, e11, r11);
      }, onTimeout: (e11, t11, i11) => {
        this.handleNetworkError(t11, i11, true, void 0, e11);
      } });
    }
    checkAutostartLoad() {
      if (!this.hls) return;
      let { config: { autoStartLoad: e10, startPosition: t10 }, forceStartLoad: i10 } = this.hls;
      (e10 || i10) && (this.hls.logger.log(`${e10 ? "auto" : "force"} startLoad with configured startPosition ${t10}`), this.hls.startLoad(t10));
    }
    handleMasterPlaylist(e10, t10, i10, r10) {
      let s10 = this.hls, a10 = e10.data, n2 = a6(e10, i10), l2 = t7.parseMasterPlaylist(a10, n2);
      if (l2.playlistParsingError) {
        t10.parsing.end = performance.now(), this.handleManifestParsingError(e10, i10, l2.playlistParsingError, r10, t10);
        return;
      }
      let { contentSteering: o2, levels: h2, sessionData: d2, sessionKeys: u2, startTimeOffset: f2, variableList: c2 } = l2;
      this.variableList = c2, h2.forEach((e11) => {
        let { unknownCodecs: t11 } = e11;
        if (t11) {
          let { preferManagedMediaSource: i11 } = this.hls.config, { audioCodec: r11, videoCodec: s11 } = e11;
          for (let a11 = t11.length; a11--; ) {
            let n3 = t11[a11];
            eR(n3, "audio", i11) ? (e11.audioCodec = r11 = r11 ? `${r11},${n3}` : n3, eA.audio[r11.substring(0, 4)] = 2, t11.splice(a11, 1)) : eR(n3, "video", i11) && (e11.videoCodec = s11 = s11 ? `${s11},${n3}` : n3, eA.video[s11.substring(0, 4)] = 2, t11.splice(a11, 1));
          }
        }
      });
      let { AUDIO: g2 = [], SUBTITLES: m2, "CLOSED-CAPTIONS": p2 } = t7.parseMasterPlaylistMedia(a10, n2, l2);
      g2.length && (g2.some((e11) => !e11.url) || !h2[0].audioCodec || h2[0].attrs.AUDIO || (this.hls.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), g2.unshift({ type: "main", name: "main", groupId: "main", default: false, autoselect: false, forced: false, id: -1, attrs: new tP({}), bitrate: 0, url: "" }))), s10.trigger(y.MANIFEST_LOADED, { levels: h2, audioTracks: g2, subtitles: m2, captions: p2, contentSteering: o2, url: n2, stats: t10, networkDetails: r10, sessionData: d2, sessionKeys: u2, startTimeOffset: f2, variableList: c2 });
    }
    handleTrackOrLevelPlaylist(e10, t10, i10, r10, s10) {
      let a10 = this.hls, { id: n2, level: l2, type: o2 } = i10, h2 = a6(e10, i10), d2 = f(l2) ? l2 : f(n2) ? n2 : 0, u2 = a8(i10), c2 = t7.parseLevelPlaylist(e10.data, h2, d2, u2, 0, this.variableList);
      if (o2 === L) {
        let e11 = { attrs: new tP({}), bitrate: 0, details: c2, name: "", url: h2 };
        c2.requestScheduled = t10.loading.start + iy(c2, 0), a10.trigger(y.MANIFEST_LOADED, { levels: [e11], audioTracks: [], url: h2, stats: t10, networkDetails: r10, sessionData: null, sessionKeys: null, contentSteering: null, startTimeOffset: null, variableList: null });
      }
      t10.parsing.end = performance.now(), i10.levelDetails = c2, this.handlePlaylistLoaded(c2, e10, t10, i10, r10, s10);
    }
    handleManifestParsingError(e10, t10, i10, r10, s10) {
      this.hls.trigger(y.ERROR, { type: m.NETWORK_ERROR, details: p.MANIFEST_PARSING_ERROR, fatal: t10.type === L, url: e10.url, err: i10, error: i10, reason: i10.message, response: e10, context: t10, networkDetails: r10, stats: s10 });
    }
    handleNetworkError(e10, t10, i10 = false, r10, s10) {
      let a10 = `A network ${i10 ? "timeout" : "error" + (r10 ? " (status " + r10.code + ")" : "")} occurred while loading ${e10.type}`;
      e10.type === R ? a10 += `: ${e10.level} id: ${e10.id}` : (e10.type === b || e10.type === I) && (a10 += ` id: ${e10.id} group-id: "${e10.groupId}"`);
      let n2 = Error(a10);
      this.hls.logger.warn(`[playlist-loader]: ${a10}`);
      let l2 = p.UNKNOWN, o2 = false, h2 = this.getInternalLoader(e10);
      switch (e10.type) {
        case L:
          l2 = i10 ? p.MANIFEST_LOAD_TIMEOUT : p.MANIFEST_LOAD_ERROR, o2 = true;
          break;
        case R:
          l2 = i10 ? p.LEVEL_LOAD_TIMEOUT : p.LEVEL_LOAD_ERROR, o2 = false;
          break;
        case b:
          l2 = i10 ? p.AUDIO_TRACK_LOAD_TIMEOUT : p.AUDIO_TRACK_LOAD_ERROR, o2 = false;
          break;
        case I:
          l2 = i10 ? p.SUBTITLE_TRACK_LOAD_TIMEOUT : p.SUBTITLE_LOAD_ERROR, o2 = false;
      }
      h2 && this.resetInternalLoader(e10.type);
      let d2 = { type: m.NETWORK_ERROR, details: l2, fatal: o2, url: e10.url, loader: h2, context: e10, error: n2, networkDetails: t10, stats: s10 };
      r10 && (d2.response = M({ url: (null == t10 ? void 0 : t10.url) || e10.url, data: void 0 }, r10)), this.hls.trigger(y.ERROR, d2);
    }
    handlePlaylistLoaded(e10, t10, i10, r10, s10, a10) {
      let n2 = this.hls, { type: l2, level: o2, levelOrTrack: h2, id: d2, groupId: u2, deliveryDirectives: f2 } = r10, c2 = a6(t10, r10), g2 = a8(r10), v2 = "number" == typeof r10.level && g2 === k ? o2 : void 0, E2 = e10.playlistParsingError;
      if (E2) {
        if (this.hls.logger.warn(`${E2} ${e10.url}`), !n2.config.ignorePlaylistParsingErrors) return void n2.trigger(y.ERROR, { type: m.NETWORK_ERROR, details: p.LEVEL_PARSING_ERROR, fatal: false, url: c2, error: E2, reason: E2.message, response: t10, context: r10, level: v2, parent: g2, networkDetails: s10, stats: i10 });
        e10.playlistParsingError = null;
      }
      if (!e10.fragments.length) {
        let a11 = e10.playlistParsingError = Error("No Segments found in Playlist");
        n2.trigger(y.ERROR, { type: m.NETWORK_ERROR, details: p.LEVEL_EMPTY_ERROR, fatal: false, url: c2, error: a11, reason: a11.message, response: t10, context: r10, level: v2, parent: g2, networkDetails: s10, stats: i10 });
        return;
      }
      switch (e10.live && a10 && (a10.getCacheAge && (e10.ageHeader = a10.getCacheAge() || 0), (!a10.getCacheAge || isNaN(e10.ageHeader)) && (e10.ageHeader = 0)), l2) {
        case L:
        case R:
          if (v2) if (h2) {
            if (h2 !== n2.levels[v2]) {
              let e11 = n2.levels.indexOf(h2);
              e11 > -1 && (v2 = e11);
            }
          } else v2 = 0;
          n2.trigger(y.LEVEL_LOADED, { details: e10, levelInfo: h2 || n2.levels[0], level: v2 || 0, id: d2 || 0, stats: i10, networkDetails: s10, deliveryDirectives: f2, withoutMultiVariant: l2 === L });
          break;
        case b:
          n2.trigger(y.AUDIO_TRACK_LOADED, { details: e10, track: h2, id: d2 || 0, groupId: u2 || "", stats: i10, networkDetails: s10, deliveryDirectives: f2 });
          break;
        case I:
          n2.trigger(y.SUBTITLE_TRACK_LOADED, { details: e10, track: h2, id: d2 || 0, groupId: u2 || "", stats: i10, networkDetails: s10, deliveryDirectives: f2 });
      }
    }
  }
  class a7 {
    static get version() {
      return iq;
    }
    static isMSESupported() {
      return a2();
    }
    static isSupported() {
      if (!a2()) return false;
      let e10 = G();
      return "function" == typeof (null == e10 ? void 0 : e10.isTypeSupported) && (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some((t10) => e10.isTypeSupported(eI(t10, "video"))) || ["mp4a.40.2", "fLaC"].some((t10) => e10.isTypeSupported(eI(t10, "audio"))));
    }
    static getMediaSource() {
      return G();
    }
    static get Events() {
      return y;
    }
    static get MetadataSchema() {
      return re;
    }
    static get ErrorTypes() {
      return m;
    }
    static get ErrorDetails() {
      return p;
    }
    static get DefaultConfig() {
      return a7.defaultConfig ? a7.defaultConfig : aH;
    }
    static set DefaultConfig(e10) {
      a7.defaultConfig = e10;
    }
    constructor(e10 = {}) {
      this.config = void 0, this.userConfig = void 0, this.logger = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new iW(), this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioStreamController = void 0, this.subtititleStreamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.interstitialsController = void 0, this.gapController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this._url = null, this._sessionId = void 0, this.triggeringException = void 0, this.started = false;
      const t10 = this.logger = (function(e11, t11, i11) {
        let r11 = U();
        if ("object" == typeof console && true === e11 || "object" == typeof e11) {
          let s11 = ["debug", "log", "info", "warn", "error"];
          s11.forEach((t12) => {
            r11[t12] = B(t12, e11, i11);
          });
          try {
            r11.log(`Debug logs enabled for "${t11}" in hls.js version 1.6.16`);
          } catch (e12) {
            return U();
          }
          s11.forEach((t12) => {
            N[t12] = B(t12, e11);
          });
        } else w(N, r11);
        return r11;
      })(e10.debug || false, "Hls instance", e10.assetPlayerId), i10 = this.config = (function(e11, t11, i11) {
        if ((t11.liveSyncDurationCount || t11.liveMaxLatencyDurationCount) && (t11.liveSyncDuration || t11.liveMaxLatencyDuration)) throw Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
        if (void 0 !== t11.liveMaxLatencyDurationCount && (void 0 === t11.liveSyncDurationCount || t11.liveMaxLatencyDurationCount <= t11.liveSyncDurationCount)) throw Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
        if (void 0 !== t11.liveMaxLatencyDuration && (void 0 === t11.liveSyncDuration || t11.liveMaxLatencyDuration <= t11.liveSyncDuration)) throw Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
        let r11 = (function e12(t12) {
          return t12 && "object" == typeof t12 ? Array.isArray(t12) ? t12.map(e12) : Object.keys(t12).reduce((i12, r12) => (i12[r12] = e12(t12[r12]), i12), {}) : t12;
        })(e11), s11 = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
        return ["manifest", "level", "frag"].forEach((e12) => {
          let a11 = `${"level" === e12 ? "playlist" : e12}LoadPolicy`, n3 = void 0 === t11[a11], l3 = [];
          s11.forEach((i12) => {
            let s12 = `${e12}Loading${i12}`, o3 = t11[s12];
            if (void 0 !== o3 && n3) {
              l3.push(s12);
              let e13 = r11[a11].default;
              switch (t11[a11] = { default: e13 }, i12) {
                case "TimeOut":
                  e13.maxLoadTimeMs = o3, e13.maxTimeToFirstByteMs = o3;
                  break;
                case "MaxRetry":
                  e13.errorRetry.maxNumRetry = o3, e13.timeoutRetry.maxNumRetry = o3;
                  break;
                case "RetryDelay":
                  e13.errorRetry.retryDelayMs = o3, e13.timeoutRetry.retryDelayMs = o3;
                  break;
                case "MaxRetryTimeout":
                  e13.errorRetry.maxRetryDelayMs = o3, e13.timeoutRetry.maxRetryDelayMs = o3;
              }
            }
          }), l3.length && i11.warn(`hls.js config: "${l3.join('", "')}" setting(s) are deprecated, use "${a11}": ${eW(t11[a11])}`);
        }), M(M({}, r11), t11);
      })(a7.DefaultConfig, e10, t10);
      this.userConfig = e10, i10.progressive && (function(e11, t11) {
        let i11 = e11.loader;
        i11 !== aU && i11 !== aK ? (t11.log("[config]: Custom loader detected, cannot enable progressive streaming"), e11.progressive = false) : (function() {
          if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
            return new self.ReadableStream({}), true;
          } catch (e12) {
          }
          return false;
        })() && (e11.loader = aU, e11.progressive = true, e11.enableSoftwareAES = true, t11.log("[config]: Progressive streaming enabled, using FetchLoader"));
      })(i10, t10);
      const { abrController: r10, bufferController: s10, capLevelController: a10, errorController: n2, fpsController: l2 } = i10, o2 = new n2(this), h2 = this.abrController = new r10(this), d2 = new to(this), u2 = i10.interstitialsController, f2 = u2 ? this.interstitialsController = new u2(this, a7) : null, c2 = this.bufferController = new s10(this, d2), g2 = this.capLevelController = new a10(this), m2 = new l2(this), p2 = new a9(this), v2 = i10.contentSteeringController, E2 = v2 ? new v2(this) : null, T2 = this.levelController = new aJ(this, E2), S2 = new az(this), A2 = new a4(this.config, this.logger), L2 = this.streamController = new a3(this, d2, A2), R2 = this.gapController = new aV(this, d2);
      g2.setStreamController(L2), m2.setStreamController(L2);
      const b2 = [p2, T2, L2];
      f2 && b2.splice(1, 0, f2), E2 && b2.splice(1, 0, E2), this.networkControllers = b2;
      const I2 = [h2, c2, R2, g2, m2, S2, d2];
      this.audioTrackController = this.createController(i10.audioTrackController, b2);
      const k2 = i10.audioStreamController;
      k2 && b2.push(this.audioStreamController = new k2(this, d2, A2)), this.subtitleTrackController = this.createController(i10.subtitleTrackController, b2);
      const D2 = i10.subtitleStreamController;
      D2 && b2.push(this.subtititleStreamController = new D2(this, d2, A2)), this.createController(i10.timelineController, I2), A2.emeController = this.emeController = this.createController(i10.emeController, I2), this.cmcdController = this.createController(i10.cmcdController, I2), this.latencyController = this.createController(aZ, I2), this.coreComponents = I2, b2.push(o2);
      const _2 = o2.onErrorOut;
      "function" == typeof _2 && this.on(y.ERROR, _2, o2), this.on(y.MANIFEST_LOADED, p2.onManifestLoaded, p2);
    }
    createController(e10, t10) {
      if (e10) {
        let i10 = new e10(this);
        return t10 && t10.push(i10), i10;
      }
      return null;
    }
    on(e10, t10, i10 = this) {
      this._emitter.on(e10, t10, i10);
    }
    once(e10, t10, i10 = this) {
      this._emitter.once(e10, t10, i10);
    }
    removeAllListeners(e10) {
      this._emitter.removeAllListeners(e10);
    }
    off(e10, t10, i10 = this, r10) {
      this._emitter.off(e10, t10, i10, r10);
    }
    listeners(e10) {
      return this._emitter.listeners(e10);
    }
    emit(e10, t10, i10) {
      return this._emitter.emit(e10, t10, i10);
    }
    trigger(e10, t10) {
      if (this.config.debug) return this.emit(e10, e10, t10);
      try {
        return this.emit(e10, e10, t10);
      } catch (t11) {
        if (this.logger.error("An internal error happened while handling event " + e10 + '. Error message: "' + t11.message + '". Here is a stacktrace:', t11), !this.triggeringException) {
          this.triggeringException = true;
          let i10 = e10 === y.ERROR;
          this.trigger(y.ERROR, { type: m.OTHER_ERROR, details: p.INTERNAL_EXCEPTION, fatal: i10, event: e10, error: t11 }), this.triggeringException = false;
        }
      }
      return false;
    }
    listenerCount(e10) {
      return this._emitter.listenerCount(e10);
    }
    destroy() {
      this.logger.log("destroy"), this.trigger(y.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this._url = null, this.networkControllers.forEach((e11) => e11.destroy()), this.networkControllers.length = 0, this.coreComponents.forEach((e11) => e11.destroy()), this.coreComponents.length = 0;
      let e10 = this.config;
      e10.xhrSetup = e10.fetchSetup = void 0, this.userConfig = null;
    }
    attachMedia(e10) {
      if (!e10 || "media" in e10 && !e10.media) {
        let t11 = Error(`attachMedia failed: invalid argument (${e10})`);
        this.trigger(y.ERROR, { type: m.OTHER_ERROR, details: p.ATTACH_MEDIA_ERROR, fatal: true, error: t11 });
        return;
      }
      this.logger.log("attachMedia"), this._media && (this.logger.warn("media must be detached before attaching"), this.detachMedia());
      let t10 = "media" in e10, i10 = t10 ? e10.media : e10, r10 = t10 ? e10 : { media: i10 };
      this._media = i10, this.trigger(y.MEDIA_ATTACHING, r10);
    }
    detachMedia() {
      this.logger.log("detachMedia"), this.trigger(y.MEDIA_DETACHING, {}), this._media = null;
    }
    transferMedia() {
      this._media = null;
      let e10 = this.bufferController.transferMedia();
      return this.trigger(y.MEDIA_DETACHING, { transferMedia: e10 }), e10;
    }
    loadSource(e10) {
      this.stopLoad();
      let t10 = this.media, i10 = this._url, r10 = this._url = W.buildAbsoluteURL(self.location.href, e10, { alwaysNormalize: true });
      this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.logger.log(`loadSource:${r10}`), t10 && i10 && (i10 !== r10 || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t10)), this.trigger(y.MANIFEST_LOADING, { url: e10 });
    }
    get url() {
      return this._url;
    }
    get hasEnoughToStart() {
      return this.streamController.hasEnoughToStart;
    }
    get startPosition() {
      return this.streamController.startPositionValue;
    }
    startLoad(e10 = -1, t10) {
      this.logger.log(`startLoad(${e10 + (t10 ? ", <skip seek to start>" : "")})`), this.started = true, this.resumeBuffering();
      for (let i10 = 0; i10 < this.networkControllers.length && (this.networkControllers[i10].startLoad(e10, t10), this.started && this.networkControllers); i10++) ;
    }
    stopLoad() {
      this.logger.log("stopLoad"), this.started = false;
      for (let e10 = 0; e10 < this.networkControllers.length && (this.networkControllers[e10].stopLoad(), !this.started && this.networkControllers); e10++) ;
    }
    get loadingEnabled() {
      return this.started;
    }
    get bufferingEnabled() {
      return this.streamController.bufferingEnabled;
    }
    resumeBuffering() {
      this.bufferingEnabled || (this.logger.log("resume buffering"), this.networkControllers.forEach((e10) => {
        e10.resumeBuffering && e10.resumeBuffering();
      }));
    }
    pauseBuffering() {
      this.bufferingEnabled && (this.logger.log("pause buffering"), this.networkControllers.forEach((e10) => {
        e10.pauseBuffering && e10.pauseBuffering();
      }));
    }
    get inFlightFragments() {
      let e10 = { [k]: this.streamController.inFlightFrag };
      return this.audioStreamController && (e10[D] = this.audioStreamController.inFlightFrag), this.subtititleStreamController && (e10[_] = this.subtititleStreamController.inFlightFrag), e10;
    }
    swapAudioCodec() {
      this.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec();
    }
    recoverMediaError() {
      this.logger.log("recoverMediaError");
      let e10 = this._media, t10 = null == e10 ? void 0 : e10.currentTime;
      this.detachMedia(), e10 && (this.attachMedia(e10), t10 && this.startLoad(t10));
    }
    removeLevel(e10) {
      this.levelController.removeLevel(e10);
    }
    get sessionId() {
      let e10 = this._sessionId;
      return e10 || (e10 = this._sessionId = (function() {
        try {
          return crypto.randomUUID();
        } catch (e11) {
          try {
            let e12 = URL.createObjectURL(new Blob()), t10 = e12.toString();
            return URL.revokeObjectURL(e12), t10.slice(t10.lastIndexOf("/") + 1);
          } catch (t10) {
            let e12 = (/* @__PURE__ */ new Date()).getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t11) => {
              let i10 = (e12 + 16 * Math.random()) % 16 | 0;
              return e12 = Math.floor(e12 / 16), ("x" == t11 ? i10 : 3 & i10 | 8).toString(16);
            });
          }
        }
      })()), e10;
    }
    get levels() {
      return this.levelController.levels || [];
    }
    get latestLevelDetails() {
      return this.streamController.getLevelDetails() || null;
    }
    get loadLevelObj() {
      return this.levelController.loadLevelObj;
    }
    get currentLevel() {
      return this.streamController.currentLevel;
    }
    set currentLevel(e10) {
      this.logger.log(`set currentLevel:${e10}`), this.levelController.manualLevel = e10, this.streamController.immediateLevelSwitch();
    }
    get nextLevel() {
      return this.streamController.nextLevel;
    }
    set nextLevel(e10) {
      this.logger.log(`set nextLevel:${e10}`), this.levelController.manualLevel = e10, this.streamController.nextLevelSwitch();
    }
    get loadLevel() {
      return this.levelController.level;
    }
    set loadLevel(e10) {
      this.logger.log(`set loadLevel:${e10}`), this.levelController.manualLevel = e10;
    }
    get nextLoadLevel() {
      return this.levelController.nextLoadLevel;
    }
    set nextLoadLevel(e10) {
      this.levelController.nextLoadLevel = e10;
    }
    get firstLevel() {
      return Math.max(this.levelController.firstLevel, this.minAutoLevel);
    }
    set firstLevel(e10) {
      this.logger.log(`set firstLevel:${e10}`), this.levelController.firstLevel = e10;
    }
    get startLevel() {
      let e10 = this.levelController.startLevel;
      return -1 === e10 && this.abrController.forcedAutoLevel > -1 ? this.abrController.forcedAutoLevel : e10;
    }
    set startLevel(e10) {
      this.logger.log(`set startLevel:${e10}`), -1 !== e10 && (e10 = Math.max(e10, this.minAutoLevel)), this.levelController.startLevel = e10;
    }
    get capLevelToPlayerSize() {
      return this.config.capLevelToPlayerSize;
    }
    set capLevelToPlayerSize(e10) {
      let t10 = !!e10;
      t10 !== this.config.capLevelToPlayerSize && (t10 ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t10);
    }
    get autoLevelCapping() {
      return this._autoLevelCapping;
    }
    get bandwidthEstimate() {
      let { bwEstimator: e10 } = this.abrController;
      return e10 ? e10.getEstimate() : NaN;
    }
    set bandwidthEstimate(e10) {
      this.abrController.resetEstimator(e10);
    }
    get abrEwmaDefaultEstimate() {
      let { bwEstimator: e10 } = this.abrController;
      return e10 ? e10.defaultEstimate : NaN;
    }
    get ttfbEstimate() {
      let { bwEstimator: e10 } = this.abrController;
      return e10 ? e10.getEstimateTTFB() : NaN;
    }
    set autoLevelCapping(e10) {
      this._autoLevelCapping !== e10 && (this.logger.log(`set autoLevelCapping:${e10}`), this._autoLevelCapping = e10, this.levelController.checkMaxAutoUpdated());
    }
    get maxHdcpLevel() {
      return this._maxHdcpLevel;
    }
    set maxHdcpLevel(e10) {
      eG.indexOf(e10) > -1 && this._maxHdcpLevel !== e10 && (this._maxHdcpLevel = e10, this.levelController.checkMaxAutoUpdated());
    }
    get autoLevelEnabled() {
      return -1 === this.levelController.manualLevel;
    }
    get manualLevel() {
      return this.levelController.manualLevel;
    }
    get minAutoLevel() {
      let { levels: e10, config: { minAutoBitrate: t10 } } = this;
      if (!e10) return 0;
      let i10 = e10.length;
      for (let r10 = 0; r10 < i10; r10++) if (e10[r10].maxBitrate >= t10) return r10;
      return 0;
    }
    get maxAutoLevel() {
      let e10, { levels: t10, autoLevelCapping: i10, maxHdcpLevel: r10 } = this;
      if (e10 = -1 === i10 && null != t10 && t10.length ? t10.length - 1 : i10, r10) for (let i11 = e10; i11--; ) {
        let e11 = t10[i11].attrs["HDCP-LEVEL"];
        if (e11 && e11 <= r10) return i11;
      }
      return e10;
    }
    get firstAutoLevel() {
      return this.abrController.firstAutoLevel;
    }
    get nextAutoLevel() {
      return this.abrController.nextAutoLevel;
    }
    set nextAutoLevel(e10) {
      this.abrController.nextAutoLevel = e10;
    }
    get playingDate() {
      return this.streamController.currentProgramDateTime;
    }
    get mainForwardBufferInfo() {
      return this.streamController.getMainFwdBufferInfo();
    }
    get maxBufferLength() {
      return this.streamController.maxBufferLength;
    }
    setAudioOption(e10) {
      var t10;
      return (null == (t10 = this.audioTrackController) ? void 0 : t10.setAudioOption(e10)) || null;
    }
    setSubtitleOption(e10) {
      var t10;
      return (null == (t10 = this.subtitleTrackController) ? void 0 : t10.setSubtitleOption(e10)) || null;
    }
    get allAudioTracks() {
      let e10 = this.audioTrackController;
      return e10 ? e10.allAudioTracks : [];
    }
    get audioTracks() {
      let e10 = this.audioTrackController;
      return e10 ? e10.audioTracks : [];
    }
    get audioTrack() {
      let e10 = this.audioTrackController;
      return e10 ? e10.audioTrack : -1;
    }
    set audioTrack(e10) {
      let t10 = this.audioTrackController;
      t10 && (t10.audioTrack = e10);
    }
    get allSubtitleTracks() {
      let e10 = this.subtitleTrackController;
      return e10 ? e10.allSubtitleTracks : [];
    }
    get subtitleTracks() {
      let e10 = this.subtitleTrackController;
      return e10 ? e10.subtitleTracks : [];
    }
    get subtitleTrack() {
      let e10 = this.subtitleTrackController;
      return e10 ? e10.subtitleTrack : -1;
    }
    get media() {
      return this._media;
    }
    set subtitleTrack(e10) {
      let t10 = this.subtitleTrackController;
      t10 && (t10.subtitleTrack = e10);
    }
    get subtitleDisplay() {
      let e10 = this.subtitleTrackController;
      return !!e10 && e10.subtitleDisplay;
    }
    set subtitleDisplay(e10) {
      let t10 = this.subtitleTrackController;
      t10 && (t10.subtitleDisplay = e10);
    }
    get lowLatencyMode() {
      return this.config.lowLatencyMode;
    }
    set lowLatencyMode(e10) {
      this.config.lowLatencyMode = e10;
    }
    get liveSyncPosition() {
      return this.latencyController.liveSyncPosition;
    }
    get latency() {
      return this.latencyController.latency;
    }
    get maxLatency() {
      return this.latencyController.maxLatency;
    }
    get targetLatency() {
      return this.latencyController.targetLatency;
    }
    set targetLatency(e10) {
      this.latencyController.targetLatency = e10;
    }
    get drift() {
      return this.latencyController.drift;
    }
    get forceStartLoad() {
      return this.streamController.forceStartLoad;
    }
    get pathways() {
      return this.levelController.pathways;
    }
    get pathwayPriority() {
      return this.levelController.pathwayPriority;
    }
    set pathwayPriority(e10) {
      this.levelController.pathwayPriority = e10;
    }
    get bufferedToEnd() {
      var e10;
      return !!(null != (e10 = this.bufferController) && e10.bufferedToEnd);
    }
    get interstitialsManager() {
      var e10;
      return (null == (e10 = this.interstitialsController) ? void 0 : e10.interstitialsManager) || null;
    }
    getMediaDecodingInfo(e10, t10 = this.allAudioTracks) {
      return eB(e10, eX(t10), navigator.mediaCapabilities);
    }
  }
  a7.defaultConfig = void 0, e.s(["CapLevelController", 0, r5, "default", 0, a7]);
}]);
