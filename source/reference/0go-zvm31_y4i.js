;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "a2358714-647f-f61f-7a80-e5d9cc7564c2");
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
  function n(e2) {
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
        let { time: t2 } = e3, n2 = "number" == typeof t2 ? t2 : this.currentTime;
        this._currentPlayedRange || (this._currentPlayedRange = { start: n2, end: n2 });
      }
      onSeeking() {
        this._seeking = true, this._commitCurrentRange();
      }
      onSeeked(e3 = {}) {
        this._seeking = false;
        let { time: t2 } = e3, n2 = "number" == typeof t2 ? t2 : this.currentTime;
        this._currentPlayedRange = { start: n2, end: n2 };
      }
      onPlaybackStop(e3 = {}) {
        let { time: t2 } = e3, n2 = "number" == typeof t2 ? t2 : this.currentTime;
        this._commitCurrentRange(n2);
      }
      _commitCurrentRange(e3) {
        if (!this._currentPlayedRange) return;
        "number" == typeof e3 && (this._currentPlayedRange.end = e3);
        let { start: t2, end: n2 } = this._currentPlayedRange;
        this._currentPlayedRange = null, this.addPlayedRange(t2, n2);
      }
      addPlayedRange(e3, t2) {
        if (e3 >= t2) return;
        let n2 = this._RANGE_EPSILON, a = [...this._playedRanges, { start: e3, end: t2 }];
        a.sort((e4, t3) => e4.start - t3.start);
        let r = [];
        for (let e4 of a) {
          if (!r.length) {
            r.push({ ...e4 });
            continue;
          }
          let t3 = r[r.length - 1];
          e4.start <= t3.end + n2 ? (t3.start = Math.min(t3.start, e4.start), t3.end = Math.max(t3.end, e4.end)) : r.push({ ...e4 });
        }
        this._playedRanges = r;
      }
      get played() {
        let e3 = this.currentTime;
        return (this.paused || this._currentPlayedRange || "number" != typeof e3 || (this._currentPlayedRange = { start: e3, end: e3 }), this._currentPlayedRange && "number" == typeof e3 && (e3 > this._currentPlayedRange.end && (this._currentPlayedRange.end = e3), this.addPlayedRange(this._currentPlayedRange.start, this._currentPlayedRange.end)), this._playedRanges.length) ? n(this._playedRanges.map((e4) => [e4.start, e4.end])) : n([[0, 0]]);
      }
    };
  }]);
}]);
