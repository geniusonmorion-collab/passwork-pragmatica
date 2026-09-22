;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "88966d2e-01f0-ed25-36fb-ff6e00ab920b");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 537109, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let r = "64px", l = {};
  e.s(["default", 0, ({ src: e2, light: a2, oEmbedUrl: n, onClickPreview: i, playIcon: o, previewTabIndex: d, previewAriaLabel: s }) => {
    let [u, c] = (0, t.useState)(null);
    (0, t.useEffect)(() => {
      e2 && a2 && n && p({ src: e2, light: a2, oEmbedUrl: n });
    }, [e2, a2, n]);
    let p = async ({ src: e3, light: a3, oEmbedUrl: r2 }) => {
      if (t.default.isValidElement(a3)) return;
      if ("string" == typeof a3) return void c(a3);
      if (l[e3]) return void c(l[e3]);
      c(null);
      let n2 = await fetch(r2.replace("{url}", e3)), i2 = await n2.json();
      if (i2.thumbnail_url) {
        let t2 = i2.thumbnail_url.replace("height=100", "height=480").replace("-d_295x166", "-d_640");
        c(t2), l[e3] = t2;
      }
    }, y = t.default.isValidElement(a2), h = { display: "flex", alignItems: "center", justifyContent: "center" }, g = { preview: { width: "100%", height: "100%", backgroundImage: u && !y ? `url(${u})` : void 0, backgroundSize: "cover", backgroundPosition: "center", cursor: "pointer", ...h }, shadow: { background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)", borderRadius: r, width: r, height: r, position: y ? "absolute" : void 0, ...h }, playIcon: { borderStyle: "solid", borderWidth: "16px 0 16px 26px", borderColor: "transparent transparent transparent white", marginLeft: "7px" } }, b = t.default.createElement("div", { style: g.shadow, className: "react-player__shadow" }, t.default.createElement("div", { style: g.playIcon, className: "react-player__play-icon" }));
    return t.default.createElement("div", { style: g.preview, className: "react-player__preview", tabIndex: d, onClick: (e3) => {
      null == i || i(e3);
    }, onKeyDown: (e3) => {
      ("Enter" === e3.key || " " === e3.key) && (null == i || i(e3));
    }, ...s ? { "aria-label": s } : {} }, y ? a2 : null, o || b);
  }]);
}]);
