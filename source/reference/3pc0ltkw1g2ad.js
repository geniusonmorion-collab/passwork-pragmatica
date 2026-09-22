;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "f7d8c1be-41bb-d29d-8fee-7ed9e169785f");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 18896, (e) => {
  e.v((t) => Promise.all(["static/immutable/chunks/013l_n6rdyyhl.js", "static/immutable/chunks/3_cktgt2w23ny.js", "static/immutable/chunks/42iut351yflaj.js"].map((t2) => e.l(t2))).then(() => t(849648)));
}, 8507, 916301, (e) => {
  "use strict";
  var t, r, a, n, l = e.i(68982), o = e.i(856757);
  try {
    var s = "u" > typeof window ? window : e.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let u = ((t = {}).DOCUMENT = "doc", t.HEADING = "heading", t.PARAGRAPH = "paragraph", t.QUOTE = "blockquote", t.OL_LIST = "ordered_list", t.UL_LIST = "bullet_list", t.LIST_ITEM = "list_item", t.CODE_BLOCK = "code_block", t.HR = "horizontal_rule", t.BR = "hard_break", t.IMAGE = "image", t.EMOJI = "emoji", t.COMPONENT = "blok", t.TABLE = "table", t.TABLE_ROW = "tableRow", t.TABLE_CELL = "tableCell", t.TABLE_HEADER = "tableHeader", t), c = ((r = {}).BOLD = "bold", r.STRONG = "strong", r.STRIKE = "strike", r.UNDERLINE = "underline", r.ITALIC = "italic", r.CODE = "code", r.LINK = "link", r.ANCHOR = "anchor", r.STYLED = "styled", r.SUPERSCRIPT = "superscript", r.SUBSCRIPT = "subscript", r.TEXT_STYLE = "textStyle", r.HIGHLIGHT = "highlight", r), d = ((a = {}).TEXT = "text", a), p = ((n = {}).URL = "url", n.STORY = "story", n.ASSET = "asset", n.EMAIL = "email", n), m = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];
  function h(e2) {
    return e2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
  let y = (e2) => Object.fromEntries(Object.entries(e2).filter(([e3, t2]) => void 0 !== t2));
  function b(e2, t2 = {}, r2) {
    let a2 = ((e3 = {}) => {
      let { custom: t3, ...r3 } = e3, a3 = { ...r3, ...t3 };
      return Object.keys(a3).map((e4) => `${e4}="${a3[e4]}"`).join(" ");
    })(t2), n2 = a2 ? `${e2} ${a2}` : e2, l2 = Array.isArray(r2) ? r2.join("") : r2 || "";
    return e2 ? m.includes(e2) ? `<${n2}>` : `<${n2}>${l2}</${e2}>` : l2;
  }
  function g(e2 = {}) {
    let t2 = /* @__PURE__ */ new Map(), { renderFn: r2 = b, textFn: a2 = h, resolvers: n2 = {}, optimizeImages: l2 = false, keyedResolvers: o2 = false } = e2, s2 = r2 !== b, i2 = (e3 = {}) => {
      let { textAlign: t3, class: r3, id: a3, style: n3, ...l3 } = e3, o3 = [];
      return n3 && o3.push(n3.endsWith(";") ? n3 : `${n3};`), t3 && o3.push(`text-align: ${t3};`), y({ ...l3, class: r3, id: a3, ...o3.length > 0 ? { style: o3.join(" ") } : {} });
    }, m2 = (e3) => (t3, r3) => {
      let a3 = i2(t3.attrs);
      return r3.render(e3, a3, t3.children || null);
    }, f2 = (e3, t3 = false) => ({ text: r3, attrs: a3 }, n3) => {
      let { class: l3, id: o3, ...s3 } = a3 || {}, i3 = t3 ? { class: l3, id: o3, style: ((e4 = {}) => Object.keys(e4).map((t4) => `${t4}: ${e4[t4]}`).join("; "))(s3) || void 0 } : a3 || {};
      return n3.render(e3, y(i3), r3);
    }, k2 = (e3, t3) => {
      let { linktype: r3, href: a3, anchor: n3, ...l3 } = e3.attrs || {}, o3 = "";
      switch (r3) {
        case p.ASSET:
        case p.URL:
          o3 = a3;
          break;
        case p.EMAIL:
          o3 = `mailto:${a3}`;
          break;
        case p.STORY:
          o3 = a3, n3 && (o3 = `${o3}#${n3}`);
          break;
        default:
          o3 = a3;
      }
      let s3 = { ...l3 };
      return o3 && (s3.href = o3), t3.render("a", s3, e3.text);
    }, w2 = /* @__PURE__ */ new Map([[u.DOCUMENT, m2("")], [u.HEADING, (e3, t3) => {
      let { level: r3, ...a3 } = e3.attrs || {}, n3 = i2(a3);
      return t3.render(`h${r3}`, n3, e3.children);
    }], [u.PARAGRAPH, m2("p")], [u.UL_LIST, m2("ul")], [u.OL_LIST, m2("ol")], [u.LIST_ITEM, m2("li")], [u.IMAGE, (e3, t3) => {
      let { src: r3, alt: a3, title: n3, srcset: o3, sizes: s3 } = e3.attrs || {}, i3 = r3, u2 = {};
      if (l2) {
        let { src: e4, attrs: t4 } = (function(e5, t5) {
          if (!t5) return { src: e5, attrs: {} };
          let r4 = 0, a4 = 0, n4 = {}, l3 = [];
          function o4(e6, t6, r5, a5, n5) {
            "number" != typeof e6 || e6 <= t6 || e6 >= r5 ? console.warn(`[StoryblokRichText] - ${a5.charAt(0).toUpperCase() + a5.slice(1)} value must be a number between ${t6} and ${r5} (inclusive)`) : n5.push(`${a5}(${e6})`);
          }
          if ("object" == typeof t5) {
            if (void 0 !== t5.width && ("number" == typeof t5.width && t5.width >= 0 ? (n4.width = t5.width, r4 = t5.width) : console.warn("[StoryblokRichText] - Width value must be a number greater than or equal to 0")), void 0 !== t5.height && ("number" == typeof t5.height && t5.height >= 0 ? (n4.height = t5.height, a4 = t5.height) : console.warn("[StoryblokRichText] - Height value must be a number greater than or equal to 0")), 0 === t5.height && 0 === t5.width && (delete n4.width, delete n4.height, console.warn("[StoryblokRichText] - Width and height values cannot both be 0")), t5.loading && ["lazy", "eager"].includes(t5.loading) && (n4.loading = t5.loading), t5.class && (n4.class = t5.class), t5.filters) {
              let { filters: e6 } = t5 || {}, { blur: r5, brightness: a5, fill: n5, format: s5, grayscale: i4, quality: u3, rotate: c3 } = e6 || {};
              r5 && o4(r5, 0, 100, "blur", l3), u3 && o4(u3, 0, 100, "quality", l3), a5 && o4(a5, 0, 100, "brightness", l3), n5 && l3.push(`fill(${n5})`), i4 && l3.push("grayscale()"), c3 && [0, 90, 180, 270].includes(t5.filters.rotate || 0) && l3.push(`rotate(${c3})`), s5 && ["webp", "png", "jpeg"].includes(s5) && l3.push(`format(${s5})`);
            }
            t5.srcset && (n4.srcset = t5.srcset.map((t6) => {
              if ("number" == typeof t6) return `${e5}/m/${t6}x0/${l3.length > 0 ? `filters:${l3.join(":")}` : ""} ${t6}w`;
              if (!Array.isArray(t6) || 2 !== t6.length) return void console.warn("[StoryblokRichText] - srcset entry must be a number or a tuple of two numbers");
              {
                let [r5, a5] = t6;
                return `${e5}/m/${r5}x${a5}/${l3.length > 0 ? `filters:${l3.join(":")}` : ""} ${r5}w`;
              }
            }).join(", ")), t5.sizes && (n4.sizes = t5.sizes.join(", "));
          }
          let s4 = `${e5}/m/`;
          return (r4 > 0 || a4 > 0) && (s4 = `${s4}${r4}x${a4}/`), l3.length > 0 && (s4 = `${s4}filters:${l3.join(":")}`), { src: s4, attrs: n4 };
        })(r3, l2);
        i3 = e4, u2 = t4;
      }
      let c2 = { src: i3, alt: a3, title: n3, srcset: o3, sizes: s3, ...u2 };
      return t3.render("img", y(c2));
    }], [u.EMOJI, (e3, t3) => {
      var r3, a3, n3, l3;
      let o3 = t3.render("img", { src: null == (r3 = e3.attrs) ? void 0 : r3.fallbackImage, alt: null == (a3 = e3.attrs) ? void 0 : a3.alt, style: "width: 1.25em; height: 1.25em; vertical-align: text-top", draggable: "false", loading: "lazy" });
      return t3.render("span", { "data-type": "emoji", "data-name": null == (n3 = e3.attrs) ? void 0 : n3.name, "data-emoji": null == (l3 = e3.attrs) ? void 0 : l3.emoji }, o3);
    }], [u.CODE_BLOCK, (e3, t3) => t3.render("pre", e3.attrs || {}, t3.render("code", {}, e3.children || ""))], [u.HR, m2("hr")], [u.BR, m2("br")], [u.QUOTE, m2("blockquote")], [u.COMPONENT, (e3, t3) => {
      var r3, a3;
      return console.warn("[StoryblokRichtText] - BLOK resolver is not available for vanilla usage"), t3.render("span", { blok: null == (r3 = null == e3 ? void 0 : e3.attrs) ? void 0 : r3.body[0], id: null == (a3 = e3.attrs) ? void 0 : a3.id, style: "display: none" });
    }], [d.TEXT, (e3) => {
      let { marks: r3, ...n3 } = e3;
      if ("text" in e3) {
        if (r3) return r3.reduce((e4, t3) => E2({ ...t3, text: e4 }), E2({ ...n3, children: n3.children }));
        let l3 = e3.attrs || {};
        if (o2) {
          let e4 = t2.get("txt") || 0;
          t2.set("txt", e4 + 1), l3.key = `txt-${e4}`;
        }
        return a2(n3.text, l3);
      }
      return "";
    }], [c.LINK, k2], [c.ANCHOR, k2], [c.STYLED, f2("span", true)], [c.BOLD, f2("strong")], [c.TEXT_STYLE, f2("span", true)], [c.ITALIC, f2("em")], [c.UNDERLINE, f2("u")], [c.STRIKE, f2("s")], [c.CODE, f2("code")], [c.SUPERSCRIPT, f2("sup")], [c.SUBSCRIPT, f2("sub")], [c.HIGHLIGHT, f2("mark")], [u.TABLE, (e3, t3) => {
      let r3 = i2(e3.attrs), a3 = e3.children || null;
      return t3.render("table", r3, t3.render("tbody", {}, a3));
    }], [u.TABLE_ROW, (e3, t3) => {
      let r3 = i2(e3.attrs);
      return t3.render("tr", r3, e3.children);
    }], [u.TABLE_CELL, (e3, t3) => {
      let { colspan: r3, rowspan: a3, colwidth: n3, backgroundColor: l3, textAlign: o3, ...s3 } = e3.attrs || {}, i3 = [];
      n3 && i3.push(`width: ${n3}px;`), l3 && i3.push(`background-color: ${l3};`), o3 && i3.push(`text-align: ${o3};`);
      let u2 = { ...s3, ...r3 > 1 ? { colspan: r3 } : {}, ...a3 > 1 ? { rowspan: a3 } : {}, ...i3.length > 0 ? { style: i3.join(" ") } : {} };
      return t3.render("td", y(u2), e3.children);
    }], [u.TABLE_HEADER, (e3, t3) => {
      let { colspan: r3, rowspan: a3, colwidth: n3, backgroundColor: l3, textAlign: o3, ...s3 } = e3.attrs || {}, i3 = [];
      n3 && i3.push(`width: ${n3}px;`), l3 && i3.push(`background-color: ${l3};`), o3 && i3.push(`text-align: ${o3};`);
      let u2 = { ...s3, ...r3 > 1 ? { colspan: r3 } : {}, ...a3 > 1 ? { rowspan: a3 } : {}, ...i3.length > 0 ? { style: i3.join(" ") } : {} };
      return t3.render("th", y(u2), e3.children);
    }]]), v2 = new Map([...w2, ...Object.entries(n2).map(([e3, t3]) => [e3, t3])]);
    function j2(e3) {
      let a3 = v2.get(e3.type);
      if (!a3) return console.error("<Storyblok>", `No resolver found for node type ${e3.type}`), "";
      let n3 = { render: (e4, a4 = {}, n4) => {
        if (o2 && e4) {
          let r3 = t2.get(e4) || 0;
          t2.set(e4, r3 + 1), a4.key = `${e4}-${r3}`;
        }
        return r2(e4, a4, n4);
      }, originalResolvers: w2, mergedResolvers: v2 };
      if ("text" === e3.type) return a3(e3, n3);
      let l3 = e3.content ? e3.content.map(E2) : void 0;
      return a3({ ...e3, children: l3 }, n3);
    }
    function E2(e3) {
      return "doc" === e3.type ? s2 ? e3.content.map(j2) : e3.content.map(j2).join("") : Array.isArray(e3) ? e3.map(j2) : j2(e3);
    }
    return { render: E2 };
  }
  let f = (e2, t2, r2) => {
    let a2 = [];
    for (let n2 in e2) {
      let l2;
      if (!Object.prototype.hasOwnProperty.call(e2, n2)) continue;
      let o2 = e2[n2];
      if (null == o2) continue;
      let s2 = r2 ? "" : encodeURIComponent(n2);
      l2 = "object" == typeof o2 ? f(o2, t2 ? t2 + encodeURIComponent(`[${s2}]`) : s2, Array.isArray(o2)) : `${t2 ? t2 + encodeURIComponent(`[${s2}]`) : s2}=${encodeURIComponent(o2)}`, a2.push(l2);
    }
    return a2.join("&");
  };
  e.s(["BlockTypes", 0, u, "MarkTypes", 0, c, "richTextResolver", 0, g], 916301);
  var k = e.i(847593);
  try {
    var w = "u" > typeof window ? window : e.g;
    w._sentryModuleMetadata = w._sentryModuleMetadata || {}, w._sentryModuleMetadata[new w.Error().stack] = Object.assign({}, w._sentryModuleMetadata[new w.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let v = (0, o.forwardRef)(({ blok: e2, ...t2 }, r2) => {
    if (!e2) return console.error("Please provide a 'blok' property to the StoryblokComponent"), (0, l.jsx)("div", { children: "Please provide a blok property to the StoryblokComponent" });
    let a2 = (0, k.getComponent)(e2.component);
    if (a2) return (0, l.jsx)(a2, { ref: r2, blok: e2, ...t2 });
    if ((0, k.getEnableFallbackComponent)()) {
      let r3 = (0, k.getCustomFallbackComponent)();
      return r3 ? (0, l.jsx)(r3, { blok: e2, ...t2 }) : (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)("p", { children: ["Component could not be found for blok", " ", (0, l.jsx)("strong", { children: e2.component }), "! Is it configured correctly?"] }) });
    }
    return (0, l.jsx)("div", {});
  });
  v.displayName = "StoryblokComponent";
  try {
    var j = "u" > typeof window ? window : e.g;
    j._sentryModuleMetadata = j._sentryModuleMetadata || {}, j._sentryModuleMetadata[new j.Error().stack] = Object.assign({}, j._sentryModuleMetadata[new j.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var E = "u" > typeof window ? window : e.g;
    E._sentryModuleMetadata = E._sentryModuleMetadata || {}, E._sentryModuleMetadata[new E.Error().stack] = Object.assign({}, E._sentryModuleMetadata[new E.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let M = (function(e2, { isServerContext: t2 = false } = {}) {
    return function(r2) {
      let a2 = (function(e3, { isServerContext: t3 = false } = {}) {
        return function(r3) {
          var a3, n3;
          let l3 = null == (a3 = null == r3 ? void 0 : r3.attrs) ? void 0 : a3.body;
          if (!Array.isArray(l3) || 0 === l3.length) return [];
          let s2 = (null == (n3 = r3.attrs) ? void 0 : n3.id) || (t3 ? `fallback-key-${JSON.stringify(r3.attrs)}` : void 0);
          return l3.map((t4, r4) => o.default.createElement(e3, { blok: t4, key: `${s2}-${r4}` }));
        };
      })(e2, { isServerContext: t2 }), { resolvers: n2, ...l2 } = r2;
      return g({ ...t2 ? r2 : {}, renderFn: o.default.createElement, textFn: (e3) => o.default.createElement(o.default.Fragment, { key: Math.random().toString(36).substring(2, 15) }, e3), resolvers: { [u.COMPONENT]: a2, ...n2 }, keyedResolvers: true, ...t2 ? {} : l2 });
    };
  })(v, { isServerContext: false });
  try {
    var T = "u" > typeof window ? window : e.g;
    T._sentryModuleMetadata = T._sentryModuleMetadata || {}, T._sentryModuleMetadata[new T.Error().stack] = Object.assign({}, T._sentryModuleMetadata[new T.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let _ = (0, o.forwardRef)(({ doc: e2, resolvers: t2 }, r2) => {
    let { render: a2 } = M({ resolvers: t2 }), n2 = (function e3(t3) {
      if (Array.isArray(t3)) return t3.map((t4) => e3(t4));
      let r3 = { allowfullscreen: "allowFullScreen", autocomplete: "autoComplete", autofocus: "autoFocus", autoplay: "autoPlay", charset: "charSet", class: "className", colspan: "colSpan", colwidth: "colWidth", contenteditable: "contentEditable", crossorigin: "crossOrigin", enctype: "encType", for: "htmlFor", formnovalidate: "formNoValidate", frameborder: "frameBorder", inputmode: "inputMode", marginheight: "marginHeight", marginwidth: "marginWidth", maxlength: "maxLength", minlength: "minLength", novalidate: "noValidate", playsinline: "playsInline", readonly: "readOnly", referrerpolicy: "referrerPolicy", rowspan: "rowSpan", srcset: "srcSet", tabindex: "tabIndex", targetAttr: "targetattr", usemap: "useMap" }, a3 = Object.keys(t3.props).reduce((e4, a4) => {
        let n4 = t3.props[a4];
        return "style" === a4 && "string" == typeof n4 && (n4 = n4.split(";").reduce((e5, t4) => {
          let [r4, a5] = t4.split(":");
          return r4 = null == r4 ? void 0 : r4.trim(), a5 = null == a5 ? void 0 : a5.trim(), r4 && a5 && (e5[r4.replace(/-([a-z])/g, (e6) => e6[1].toUpperCase())] = a5), e5;
        }, {})), e4[r3[a4] || a4] = n4, e4;
      }, {});
      a3.key = t3.key;
      let n3 = o.default.Children.map(t3.props.children, (t4) => "string" == typeof t4 ? t4 : e3(t4));
      return o.default.createElement(t3.type, a3, n3);
    })(a2(e2));
    return (0, l.jsx)("div", { ref: r2, children: n2 });
  });
  e.s(["StoryblokRichText", 0, _], 8507);
}, 362526, (e) => {
  e.v((t) => Promise.all(["static/immutable/chunks/1pw4jwaut7cbd.js"].map((t2) => e.l(t2))).then(() => t(70105)));
}, 641812, (e) => {
  e.v((t) => Promise.all(["static/immutable/chunks/31ze_-0vror1u.js", "static/immutable/chunks/3_cktgt2w23ny.js"].map((t2) => e.l(t2))).then(() => t(388566)));
}, 215818, (e) => {
  e.v((t) => Promise.all(["static/immutable/chunks/02tljl056-mbx.js"].map((t2) => e.l(t2))).then(() => t(537109)));
}, 930411, (e) => {
  e.v((t) => Promise.all(["static/immutable/chunks/0dob_swpt19jw.js"].map((t2) => e.l(t2))).then(() => t(450375)));
}, 930698, (e) => {
  e.v((t) => Promise.all(["static/immutable/chunks/2ai3_hpdkn6jb.js"].map((t2) => e.l(t2))).then(() => t(286624)));
}, 252342, (e) => {
  e.v((t) => Promise.all(["static/immutable/chunks/2t7m63b3736ny.js"].map((t2) => e.l(t2))).then(() => t(932443)));
}, 805023, (e) => {
  e.v((t) => Promise.all(["static/immutable/chunks/0go-zvm31_y4i.js", "static/immutable/chunks/18jrrsgek49x-.js"].map((t2) => e.l(t2))).then(() => t(5095)));
}, 622218, (e) => {
  e.v((t) => Promise.all(["static/immutable/chunks/41zvs3yj8a6wj.js"].map((t2) => e.l(t2))).then(() => t(640134)));
}, 614781, (e) => {
  e.v((t) => Promise.all(["static/immutable/chunks/1f1g2kiv09glm.js"].map((t2) => e.l(t2))).then(() => t(659429)));
}, 446953, (e) => {
  e.v((t) => Promise.all(["static/immutable/chunks/1web6gam2h9l3.css", "static/immutable/chunks/0j6v6nh83-gyj.js"].map((t2) => e.l(t2))).then(() => t(131444)));
}, 734963, (e) => {
  e.v((t) => Promise.all(["static/immutable/chunks/0pgqjaqdtizkn.js", "static/immutable/chunks/33su8nhoyo9ui.js"].map((t2) => e.l(t2))).then(() => t(187369)));
}, 644469, (e) => {
  e.v((t) => Promise.all(["static/immutable/chunks/3xmj5qm65xzu3.js"].map((t2) => e.l(t2))).then(() => t(275001)));
}, 287945, (e) => {
  e.v((t) => Promise.all(["static/immutable/chunks/20q-gt6fmiuit.js"].map((t2) => e.l(t2))).then(() => t(742018)));
}]);
