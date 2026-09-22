;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "627aaee6-3738-b77a-68d4-38524428e280");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 551360, 7284, (e) => {
  "use strict";
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function o() {
    for (var e2, r2, o2 = 0, t2 = "", s2 = arguments.length; o2 < s2; o2++) (e2 = arguments[o2]) && (r2 = (function e3(r3) {
      var o3, t3, s3 = "";
      if ("string" == typeof r3 || "number" == typeof r3) s3 += r3;
      else if ("object" == typeof r3) if (Array.isArray(r3)) {
        var a2 = r3.length;
        for (o3 = 0; o3 < a2; o3++) r3[o3] && (t3 = e3(r3[o3])) && (s3 && (s3 += " "), s3 += t3);
      } else for (t3 in r3) r3[t3] && (s3 && (s3 += " "), s3 += t3);
      return s3;
    })(e2)) && (t2 && (t2 += " "), t2 += r2);
    return t2;
  }
  e.s(["clsx", 0, o], 7284);
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let s = (e2 = /* @__PURE__ */ new Map(), r2 = null, o2) => ({ nextPart: e2, validators: r2, classGroupId: o2 }), a = [], l = (e2, r2, o2) => {
    if (0 == e2.length - r2) return o2.classGroupId;
    let t2 = e2[r2], s2 = o2.nextPart.get(t2);
    if (s2) {
      let o3 = l(e2, r2 + 1, s2);
      if (o3) return o3;
    }
    let a2 = o2.validators;
    if (null === a2) return;
    let n2 = 0 === r2 ? e2.join("-") : e2.slice(r2).join("-"), i2 = a2.length;
    for (let e3 = 0; e3 < i2; e3++) {
      let r3 = a2[e3];
      if (r3.validator(n2)) return r3.classGroupId;
    }
  }, n = (e2, r2) => {
    let o2 = s();
    for (let t2 in e2) i(e2[t2], o2, t2, r2);
    return o2;
  }, i = (e2, r2, o2, t2) => {
    let s2 = e2.length;
    for (let a2 = 0; a2 < s2; a2++) d(e2[a2], r2, o2, t2);
  }, d = (e2, r2, o2, t2) => {
    "string" == typeof e2 ? c(e2, r2, o2) : "function" == typeof e2 ? m(e2, r2, o2, t2) : p(e2, r2, o2, t2);
  }, c = (e2, r2, o2) => {
    ("" === e2 ? r2 : b(r2, e2)).classGroupId = o2;
  }, m = (e2, r2, o2, t2) => {
    u(e2) ? i(e2(t2), r2, o2, t2) : (null === r2.validators && (r2.validators = []), r2.validators.push({ classGroupId: o2, validator: e2 }));
  }, p = (e2, r2, o2, t2) => {
    let s2 = Object.entries(e2), a2 = s2.length;
    for (let e3 = 0; e3 < a2; e3++) {
      let [a3, l2] = s2[e3];
      i(l2, b(r2, a3), o2, t2);
    }
  }, b = (e2, r2) => {
    let o2 = e2, t2 = r2.split("-"), a2 = t2.length;
    for (let e3 = 0; e3 < a2; e3++) {
      let r3 = t2[e3], a3 = o2.nextPart.get(r3);
      a3 || (a3 = s(), o2.nextPart.set(r3, a3)), o2 = a3;
    }
    return o2;
  }, u = (e2) => "isThemeGetter" in e2 && true === e2.isThemeGetter, f = [], g = (e2, r2, o2, t2, s2) => ({ modifiers: e2, hasImportantModifier: r2, baseClassName: o2, maybePostfixModifierPosition: t2, isExternal: s2 }), h = /\s+/, k = (e2) => {
    let r2;
    if ("string" == typeof e2) return e2;
    let o2 = "";
    for (let t2 = 0; t2 < e2.length; t2++) e2[t2] && (r2 = k(e2[t2])) && (o2 && (o2 += " "), o2 += r2);
    return o2;
  }, x = (e2, ...r2) => {
    let o2, t2, s2, i2, d2 = (e3) => {
      let r3 = t2(e3);
      if (r3) return r3;
      let a2 = ((e4, r4) => {
        let { parseClassName: o3, getClassGroupId: t3, getConflictingClassGroupIds: s3, sortModifiers: a3, postfixLookupClassGroupIds: l2 } = r4, n2 = [], i3 = e4.trim().split(h), d3 = "";
        for (let e5 = i3.length - 1; e5 >= 0; e5 -= 1) {
          let r5, c2 = i3[e5], { isExternal: m2, modifiers: p2, hasImportantModifier: b2, baseClassName: u2, maybePostfixModifierPosition: f2 } = o3(c2);
          if (m2) {
            d3 = c2 + (d3.length > 0 ? " " + d3 : d3);
            continue;
          }
          let g2 = !!f2;
          if (g2) {
            let e6 = (r5 = t3(u2.substring(0, f2))) && l2[r5] ? t3(u2) : void 0;
            e6 && e6 !== r5 && (r5 = e6, g2 = false);
          } else r5 = t3(u2);
          if (!r5) {
            if (!g2 || !(r5 = t3(u2))) {
              d3 = c2 + (d3.length > 0 ? " " + d3 : d3);
              continue;
            }
            g2 = false;
          }
          let h2 = 0 === p2.length ? "" : 1 === p2.length ? p2[0] : a3(p2).join(":"), k2 = b2 ? h2 + "!" : h2, x2 = k2 + r5;
          if (n2.indexOf(x2) > -1) continue;
          n2.push(x2);
          let w2 = s3(r5, g2);
          for (let e6 = 0; e6 < w2.length; ++e6) {
            let r6 = w2[e6];
            n2.push(k2 + r6);
          }
          d3 = c2 + (d3.length > 0 ? " " + d3 : d3);
        }
        return d3;
      })(e3, o2);
      return s2(e3, a2), a2;
    };
    return i2 = (c2) => {
      var m2;
      let p2;
      return t2 = (o2 = { cache: ((e3) => {
        if (e3 < 1) return { get: () => void 0, set: () => {
        } };
        let r3 = 0, o3 = /* @__PURE__ */ Object.create(null), t3 = /* @__PURE__ */ Object.create(null), s3 = (s4, a2) => {
          o3[s4] = a2, ++r3 > e3 && (r3 = 0, t3 = o3, o3 = /* @__PURE__ */ Object.create(null));
        };
        return { get(e4) {
          let r4 = o3[e4];
          return void 0 !== r4 ? r4 : void 0 !== (r4 = t3[e4]) ? (s3(e4, r4), r4) : void 0;
        }, set(e4, r4) {
          e4 in o3 ? o3[e4] = r4 : s3(e4, r4);
        } };
      })((m2 = r2.reduce((e3, r3) => r3(e3), e2())).cacheSize), parseClassName: ((e3) => {
        let { prefix: r3, experimentalParseClassName: o3 } = e3, t3 = (e4) => {
          let r4, o4 = [], t4 = 0, s3 = 0, a2 = 0, l2 = e4.length;
          for (let n3 = 0; n3 < l2; n3++) {
            let l3 = e4[n3];
            if (0 === t4 && 0 === s3) {
              if (":" === l3) {
                o4.push(e4.slice(a2, n3)), a2 = n3 + 1;
                continue;
              }
              if ("/" === l3) {
                r4 = n3;
                continue;
              }
            }
            "[" === l3 ? t4++ : "]" === l3 ? t4-- : "(" === l3 ? s3++ : ")" === l3 && s3--;
          }
          let n2 = 0 === o4.length ? e4 : e4.slice(a2), i3 = n2, d3 = false;
          return n2.endsWith("!") ? (i3 = n2.slice(0, -1), d3 = true) : n2.startsWith("!") && (i3 = n2.slice(1), d3 = true), g(o4, d3, i3, r4 && r4 > a2 ? r4 - a2 : void 0);
        };
        if (r3) {
          let e4 = r3 + ":", o4 = t3;
          t3 = (r4) => r4.startsWith(e4) ? o4(r4.slice(e4.length)) : g(f, false, r4, void 0, true);
        }
        if (o3) {
          let e4 = t3;
          t3 = (r4) => o3({ className: r4, parseClassName: e4 });
        }
        return t3;
      })(m2), sortModifiers: (p2 = /* @__PURE__ */ new Map(), m2.orderSensitiveModifiers.forEach((e3, r3) => {
        p2.set(e3, 1e6 + r3);
      }), (e3) => {
        let r3 = [], o3 = [];
        for (let t3 = 0; t3 < e3.length; t3++) {
          let s3 = e3[t3], a2 = "[" === s3[0], l2 = p2.has(s3);
          a2 || l2 ? (o3.length > 0 && (o3.sort(), r3.push(...o3), o3 = []), r3.push(s3)) : o3.push(s3);
        }
        return o3.length > 0 && (o3.sort(), r3.push(...o3)), r3;
      }), postfixLookupClassGroupIds: ((e3) => {
        let r3 = /* @__PURE__ */ Object.create(null), o3 = e3.postfixLookupClassGroups;
        if (o3) for (let e4 = 0; e4 < o3.length; e4++) r3[o3[e4]] = true;
        return r3;
      })(m2), ...((e3) => {
        let r3 = ((e4) => {
          let { theme: r4, classGroups: o4 } = e4;
          return n(o4, r4);
        })(e3), { conflictingClassGroups: o3, conflictingClassGroupModifiers: t3 } = e3;
        return { getClassGroupId: (e4) => {
          if (e4.startsWith("[") && e4.endsWith("]")) {
            var o4;
            let r4, t5, s4;
            return -1 === (o4 = e4).slice(1, -1).indexOf(":") ? void 0 : (t5 = (r4 = o4.slice(1, -1)).indexOf(":"), (s4 = r4.slice(0, t5)) ? "arbitrary.." + s4 : void 0);
          }
          let t4 = e4.split("-"), s3 = +("" === t4[0] && t4.length > 1);
          return l(t4, s3, r3);
        }, getConflictingClassGroupIds: (e4, r4) => {
          if (r4) {
            let r5 = t3[e4], s3 = o3[e4];
            if (r5) {
              if (s3) {
                let e5 = Array(s3.length + r5.length);
                for (let r6 = 0; r6 < s3.length; r6++) e5[r6] = s3[r6];
                for (let o4 = 0; o4 < r5.length; o4++) e5[s3.length + o4] = r5[o4];
                return e5;
              }
              return r5;
            }
            return s3 || a;
          }
          return o3[e4] || a;
        } };
      })(m2) }).cache.get, s2 = o2.cache.set, i2 = d2, d2(c2);
    }, (...e3) => i2(((...e4) => {
      let r3, o3, t3 = 0, s3 = "";
      for (; t3 < e4.length; ) (r3 = e4[t3++]) && (o3 = k(r3)) && (s3 && (s3 += " "), s3 += o3);
      return s3;
    })(...e3));
  }, w = [], y = (e2) => {
    let r2 = (r3) => r3[e2] || w;
    return r2.isThemeGetter = true, r2;
  }, v = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, z = /^\((?:(\w[\w-]*):)?(.+)\)$/i, M = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, G = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, j = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, C = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, _ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, O = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, N = (e2) => M.test(e2), P = (e2) => !!e2 && !Number.isNaN(Number(e2)), S = (e2) => !!e2 && Number.isInteger(Number(e2)), W = (e2) => e2.endsWith("%") && P(e2.slice(0, -1)), A = (e2) => G.test(e2), I = () => true, E = (e2) => j.test(e2) && !C.test(e2), T = () => false, $ = (e2) => _.test(e2), L = (e2) => O.test(e2), q = (e2) => !R(e2) && !X(e2), B = (e2) => e2.startsWith("@container") && ("/" === e2[10] && void 0 !== e2[11] || "s" === e2[11] && void 0 !== e2[16] && e2.startsWith("-size/", 10) || "n" === e2[11] && void 0 !== e2[18] && e2.startsWith("-normal/", 10)), K = (e2) => ea(e2, ed, T), R = (e2) => v.test(e2), U = (e2) => ea(e2, ec, E), D = (e2) => ea(e2, em, P), F = (e2) => ea(e2, eb, I), H = (e2) => ea(e2, ep, T), J = (e2) => ea(e2, en, T), Q = (e2) => ea(e2, ei, L), V = (e2) => ea(e2, eu, $), X = (e2) => z.test(e2), Y = (e2) => el(e2, ec), Z = (e2) => el(e2, ep), ee = (e2) => el(e2, en), er = (e2) => el(e2, ed), eo = (e2) => el(e2, ei), et = (e2) => el(e2, eu, true), es = (e2) => el(e2, eb, true), ea = (e2, r2, o2) => {
    let t2 = v.exec(e2);
    return !!t2 && (t2[1] ? r2(t2[1]) : o2(t2[2]));
  }, el = (e2, r2, o2 = false) => {
    let t2 = z.exec(e2);
    return !!t2 && (t2[1] ? r2(t2[1]) : o2);
  }, en = (e2) => "position" === e2 || "percentage" === e2, ei = (e2) => "image" === e2 || "url" === e2, ed = (e2) => "length" === e2 || "size" === e2 || "bg-size" === e2, ec = (e2) => "length" === e2, em = (e2) => "number" === e2, ep = (e2) => "family-name" === e2, eb = (e2) => "number" === e2 || "weight" === e2, eu = (e2) => "shadow" === e2, ef = () => {
    let e2 = y("color"), r2 = y("font"), o2 = y("text"), t2 = y("font-weight"), s2 = y("tracking"), a2 = y("leading"), l2 = y("breakpoint"), n2 = y("container"), i2 = y("spacing"), d2 = y("radius"), c2 = y("shadow"), m2 = y("inset-shadow"), p2 = y("text-shadow"), b2 = y("drop-shadow"), u2 = y("blur"), f2 = y("perspective"), g2 = y("aspect"), h2 = y("ease"), k2 = y("animate"), x2 = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], w2 = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"], v2 = () => [...w2(), X, R], z2 = () => ["auto", "hidden", "clip", "visible", "scroll"], M2 = () => ["auto", "contain", "none"], G2 = () => [X, R, i2], j2 = () => [N, "full", "auto", ...G2()], C2 = () => [S, "none", "subgrid", X, R], _2 = () => ["auto", { span: ["full", S, X, R] }, S, X, R], O2 = () => [S, "auto", X, R], E2 = () => ["auto", "min", "max", "fr", X, R], T2 = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], $2 = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], L2 = () => ["auto", ...G2()], ea2 = () => [N, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...G2()], el2 = () => [N, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...G2()], en2 = () => [N, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...G2()], ei2 = () => [e2, X, R], ed2 = () => [...w2(), ee, J, { position: [X, R] }], ec2 = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }], em2 = () => ["auto", "cover", "contain", er, K, { size: [X, R] }], ep2 = () => [W, Y, U], eb2 = () => ["", "none", "full", d2, X, R], eu2 = () => ["", P, Y, U], ef2 = () => ["solid", "dashed", "dotted", "double"], eg2 = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], eh2 = () => [P, W, ee, J], ek2 = () => ["", "none", u2, X, R], ex2 = () => ["none", P, X, R], ew2 = () => ["none", P, X, R], ey2 = () => [P, X, R], ev = () => [N, "full", ...G2()];
    return { cacheSize: 500, theme: { animate: ["spin", "ping", "pulse", "bounce"], aspect: ["video"], blur: [A], breakpoint: [A], color: [I], container: [A], "drop-shadow": [A], ease: ["in", "out", "in-out"], font: [q], "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"], "inset-shadow": [A], leading: ["none", "tight", "snug", "normal", "relaxed", "loose"], perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"], radius: [A], shadow: [A], spacing: ["px", P], text: [A], "text-shadow": [A], tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"] }, classGroups: { aspect: [{ aspect: ["auto", "square", N, R, X, g2] }], container: ["container"], "container-type": [{ "@container": ["", "normal", "size", X, R] }], "container-named": [B], columns: [{ columns: [P, R, X, n2] }], "break-after": [{ "break-after": x2() }], "break-before": [{ "break-before": x2() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], sr: ["sr-only", "not-sr-only"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: v2() }], overflow: [{ overflow: z2() }], "overflow-x": [{ "overflow-x": z2() }], "overflow-y": [{ "overflow-y": z2() }], overscroll: [{ overscroll: M2() }], "overscroll-x": [{ "overscroll-x": M2() }], "overscroll-y": [{ "overscroll-y": M2() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: j2() }], "inset-x": [{ "inset-x": j2() }], "inset-y": [{ "inset-y": j2() }], start: [{ "inset-s": j2(), start: j2() }], end: [{ "inset-e": j2(), end: j2() }], "inset-bs": [{ "inset-bs": j2() }], "inset-be": [{ "inset-be": j2() }], top: [{ top: j2() }], right: [{ right: j2() }], bottom: [{ bottom: j2() }], left: [{ left: j2() }], visibility: ["visible", "invisible", "collapse"], z: [{ z: [S, "auto", X, R] }], basis: [{ basis: [N, "full", "auto", n2, ...G2()] }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }], flex: [{ flex: [P, N, "auto", "initial", "none", R] }], grow: [{ grow: ["", P, X, R] }], shrink: [{ shrink: ["", P, X, R] }], order: [{ order: [S, "first", "last", "none", X, R] }], "grid-cols": [{ "grid-cols": C2() }], "col-start-end": [{ col: _2() }], "col-start": [{ "col-start": O2() }], "col-end": [{ "col-end": O2() }], "grid-rows": [{ "grid-rows": C2() }], "row-start-end": [{ row: _2() }], "row-start": [{ "row-start": O2() }], "row-end": [{ "row-end": O2() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": E2() }], "auto-rows": [{ "auto-rows": E2() }], gap: [{ gap: G2() }], "gap-x": [{ "gap-x": G2() }], "gap-y": [{ "gap-y": G2() }], "justify-content": [{ justify: [...T2(), "normal"] }], "justify-items": [{ "justify-items": [...$2(), "normal"] }], "justify-self": [{ "justify-self": ["auto", ...$2()] }], "align-content": [{ content: ["normal", ...T2()] }], "align-items": [{ items: [...$2(), { baseline: ["", "last"] }] }], "align-self": [{ self: ["auto", ...$2(), { baseline: ["", "last"] }] }], "place-content": [{ "place-content": T2() }], "place-items": [{ "place-items": [...$2(), "baseline"] }], "place-self": [{ "place-self": ["auto", ...$2()] }], p: [{ p: G2() }], px: [{ px: G2() }], py: [{ py: G2() }], ps: [{ ps: G2() }], pe: [{ pe: G2() }], pbs: [{ pbs: G2() }], pbe: [{ pbe: G2() }], pt: [{ pt: G2() }], pr: [{ pr: G2() }], pb: [{ pb: G2() }], pl: [{ pl: G2() }], m: [{ m: L2() }], mx: [{ mx: L2() }], my: [{ my: L2() }], ms: [{ ms: L2() }], me: [{ me: L2() }], mbs: [{ mbs: L2() }], mbe: [{ mbe: L2() }], mt: [{ mt: L2() }], mr: [{ mr: L2() }], mb: [{ mb: L2() }], ml: [{ ml: L2() }], "space-x": [{ "space-x": G2() }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": G2() }], "space-y-reverse": ["space-y-reverse"], size: [{ size: ea2() }], "inline-size": [{ inline: ["auto", ...el2()] }], "min-inline-size": [{ "min-inline": ["auto", ...el2()] }], "max-inline-size": [{ "max-inline": ["none", ...el2()] }], "block-size": [{ block: ["auto", ...en2()] }], "min-block-size": [{ "min-block": ["auto", ...en2()] }], "max-block-size": [{ "max-block": ["none", ...en2()] }], w: [{ w: [n2, "screen", ...ea2()] }], "min-w": [{ "min-w": [n2, "screen", "none", ...ea2()] }], "max-w": [{ "max-w": [n2, "screen", "none", "prose", { screen: [l2] }, ...ea2()] }], h: [{ h: ["screen", "lh", ...ea2()] }], "min-h": [{ "min-h": ["screen", "lh", "none", ...ea2()] }], "max-h": [{ "max-h": ["screen", "lh", ...ea2()] }], "font-size": [{ text: ["base", o2, Y, U] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: [t2, es, F] }], "font-stretch": [{ "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", W, R] }], "font-family": [{ font: [Z, H, r2] }], "font-features": [{ "font-features": [R] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: [s2, X, R] }], "line-clamp": [{ "line-clamp": [P, "none", X, D] }], leading: [{ leading: [a2, ...G2()] }], "list-image": [{ "list-image": ["none", X, R] }], "list-style-position": [{ list: ["inside", "outside"] }], "list-style-type": [{ list: ["disc", "decimal", "none", X, R] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "placeholder-color": [{ placeholder: ei2() }], "text-color": [{ text: ei2() }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...ef2(), "wavy"] }], "text-decoration-thickness": [{ decoration: [P, "from-font", "auto", X, U] }], "text-decoration-color": [{ decoration: ei2() }], "underline-offset": [{ "underline-offset": [P, "auto", X, R] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: G2() }], "tab-size": [{ tab: [S, X, R] }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X, R] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], wrap: [{ wrap: ["break-word", "anywhere", "normal"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", X, R] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: ed2() }], "bg-repeat": [{ bg: ec2() }], "bg-size": [{ bg: em2() }], "bg-image": [{ bg: ["none", { linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, S, X, R], radial: ["", X, R], conic: [S, X, R] }, eo, Q] }], "bg-color": [{ bg: ei2() }], "gradient-from-pos": [{ from: ep2() }], "gradient-via-pos": [{ via: ep2() }], "gradient-to-pos": [{ to: ep2() }], "gradient-from": [{ from: ei2() }], "gradient-via": [{ via: ei2() }], "gradient-to": [{ to: ei2() }], rounded: [{ rounded: eb2() }], "rounded-s": [{ "rounded-s": eb2() }], "rounded-e": [{ "rounded-e": eb2() }], "rounded-t": [{ "rounded-t": eb2() }], "rounded-r": [{ "rounded-r": eb2() }], "rounded-b": [{ "rounded-b": eb2() }], "rounded-l": [{ "rounded-l": eb2() }], "rounded-ss": [{ "rounded-ss": eb2() }], "rounded-se": [{ "rounded-se": eb2() }], "rounded-ee": [{ "rounded-ee": eb2() }], "rounded-es": [{ "rounded-es": eb2() }], "rounded-tl": [{ "rounded-tl": eb2() }], "rounded-tr": [{ "rounded-tr": eb2() }], "rounded-br": [{ "rounded-br": eb2() }], "rounded-bl": [{ "rounded-bl": eb2() }], "border-w": [{ border: eu2() }], "border-w-x": [{ "border-x": eu2() }], "border-w-y": [{ "border-y": eu2() }], "border-w-s": [{ "border-s": eu2() }], "border-w-e": [{ "border-e": eu2() }], "border-w-bs": [{ "border-bs": eu2() }], "border-w-be": [{ "border-be": eu2() }], "border-w-t": [{ "border-t": eu2() }], "border-w-r": [{ "border-r": eu2() }], "border-w-b": [{ "border-b": eu2() }], "border-w-l": [{ "border-l": eu2() }], "divide-x": [{ "divide-x": eu2() }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": eu2() }], "divide-y-reverse": ["divide-y-reverse"], "border-style": [{ border: [...ef2(), "hidden", "none"] }], "divide-style": [{ divide: [...ef2(), "hidden", "none"] }], "border-color": [{ border: ei2() }], "border-color-x": [{ "border-x": ei2() }], "border-color-y": [{ "border-y": ei2() }], "border-color-s": [{ "border-s": ei2() }], "border-color-e": [{ "border-e": ei2() }], "border-color-bs": [{ "border-bs": ei2() }], "border-color-be": [{ "border-be": ei2() }], "border-color-t": [{ "border-t": ei2() }], "border-color-r": [{ "border-r": ei2() }], "border-color-b": [{ "border-b": ei2() }], "border-color-l": [{ "border-l": ei2() }], "divide-color": [{ divide: ei2() }], "outline-style": [{ outline: [...ef2(), "none", "hidden"] }], "outline-offset": [{ "outline-offset": [P, X, R] }], "outline-w": [{ outline: ["", P, Y, U] }], "outline-color": [{ outline: ei2() }], shadow: [{ shadow: ["", "none", c2, et, V] }], "shadow-color": [{ shadow: ei2() }], "inset-shadow": [{ "inset-shadow": ["none", m2, et, V] }], "inset-shadow-color": [{ "inset-shadow": ei2() }], "ring-w": [{ ring: eu2() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: ei2() }], "ring-offset-w": [{ "ring-offset": [P, U] }], "ring-offset-color": [{ "ring-offset": ei2() }], "inset-ring-w": [{ "inset-ring": eu2() }], "inset-ring-color": [{ "inset-ring": ei2() }], "text-shadow": [{ "text-shadow": ["none", p2, et, V] }], "text-shadow-color": [{ "text-shadow": ei2() }], opacity: [{ opacity: [P, X, R] }], "mix-blend": [{ "mix-blend": [...eg2(), "plus-darker", "plus-lighter"] }], "bg-blend": [{ "bg-blend": eg2() }], "mask-clip": [{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] }, "mask-no-clip"], "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }], "mask-image-linear-pos": [{ "mask-linear": [P] }], "mask-image-linear-from-pos": [{ "mask-linear-from": eh2() }], "mask-image-linear-to-pos": [{ "mask-linear-to": eh2() }], "mask-image-linear-from-color": [{ "mask-linear-from": ei2() }], "mask-image-linear-to-color": [{ "mask-linear-to": ei2() }], "mask-image-t-from-pos": [{ "mask-t-from": eh2() }], "mask-image-t-to-pos": [{ "mask-t-to": eh2() }], "mask-image-t-from-color": [{ "mask-t-from": ei2() }], "mask-image-t-to-color": [{ "mask-t-to": ei2() }], "mask-image-r-from-pos": [{ "mask-r-from": eh2() }], "mask-image-r-to-pos": [{ "mask-r-to": eh2() }], "mask-image-r-from-color": [{ "mask-r-from": ei2() }], "mask-image-r-to-color": [{ "mask-r-to": ei2() }], "mask-image-b-from-pos": [{ "mask-b-from": eh2() }], "mask-image-b-to-pos": [{ "mask-b-to": eh2() }], "mask-image-b-from-color": [{ "mask-b-from": ei2() }], "mask-image-b-to-color": [{ "mask-b-to": ei2() }], "mask-image-l-from-pos": [{ "mask-l-from": eh2() }], "mask-image-l-to-pos": [{ "mask-l-to": eh2() }], "mask-image-l-from-color": [{ "mask-l-from": ei2() }], "mask-image-l-to-color": [{ "mask-l-to": ei2() }], "mask-image-x-from-pos": [{ "mask-x-from": eh2() }], "mask-image-x-to-pos": [{ "mask-x-to": eh2() }], "mask-image-x-from-color": [{ "mask-x-from": ei2() }], "mask-image-x-to-color": [{ "mask-x-to": ei2() }], "mask-image-y-from-pos": [{ "mask-y-from": eh2() }], "mask-image-y-to-pos": [{ "mask-y-to": eh2() }], "mask-image-y-from-color": [{ "mask-y-from": ei2() }], "mask-image-y-to-color": [{ "mask-y-to": ei2() }], "mask-image-radial": [{ "mask-radial": [X, R] }], "mask-image-radial-from-pos": [{ "mask-radial-from": eh2() }], "mask-image-radial-to-pos": [{ "mask-radial-to": eh2() }], "mask-image-radial-from-color": [{ "mask-radial-from": ei2() }], "mask-image-radial-to-color": [{ "mask-radial-to": ei2() }], "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }], "mask-image-radial-size": [{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] }], "mask-image-radial-pos": [{ "mask-radial-at": w2() }], "mask-image-conic-pos": [{ "mask-conic": [P] }], "mask-image-conic-from-pos": [{ "mask-conic-from": eh2() }], "mask-image-conic-to-pos": [{ "mask-conic-to": eh2() }], "mask-image-conic-from-color": [{ "mask-conic-from": ei2() }], "mask-image-conic-to-color": [{ "mask-conic-to": ei2() }], "mask-mode": [{ mask: ["alpha", "luminance", "match"] }], "mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }], "mask-position": [{ mask: ed2() }], "mask-repeat": [{ mask: ec2() }], "mask-size": [{ mask: em2() }], "mask-type": [{ "mask-type": ["alpha", "luminance"] }], "mask-image": [{ mask: ["none", X, R] }], filter: [{ filter: ["", "none", X, R] }], blur: [{ blur: ek2() }], brightness: [{ brightness: [P, X, R] }], contrast: [{ contrast: [P, X, R] }], "drop-shadow": [{ "drop-shadow": ["", "none", b2, et, V] }], "drop-shadow-color": [{ "drop-shadow": ei2() }], grayscale: [{ grayscale: ["", P, X, R] }], "hue-rotate": [{ "hue-rotate": [P, X, R] }], invert: [{ invert: ["", P, X, R] }], saturate: [{ saturate: [P, X, R] }], sepia: [{ sepia: ["", P, X, R] }], "backdrop-filter": [{ "backdrop-filter": ["", "none", X, R] }], "backdrop-blur": [{ "backdrop-blur": ek2() }], "backdrop-brightness": [{ "backdrop-brightness": [P, X, R] }], "backdrop-contrast": [{ "backdrop-contrast": [P, X, R] }], "backdrop-grayscale": [{ "backdrop-grayscale": ["", P, X, R] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [P, X, R] }], "backdrop-invert": [{ "backdrop-invert": ["", P, X, R] }], "backdrop-opacity": [{ "backdrop-opacity": [P, X, R] }], "backdrop-saturate": [{ "backdrop-saturate": [P, X, R] }], "backdrop-sepia": [{ "backdrop-sepia": ["", P, X, R] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": G2() }], "border-spacing-x": [{ "border-spacing-x": G2() }], "border-spacing-y": [{ "border-spacing-y": G2() }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", X, R] }], "transition-behavior": [{ transition: ["normal", "discrete"] }], duration: [{ duration: [P, "initial", X, R] }], ease: [{ ease: ["linear", "initial", h2, X, R] }], delay: [{ delay: [P, X, R] }], animate: [{ animate: ["none", k2, X, R] }], backface: [{ backface: ["hidden", "visible"] }], perspective: [{ perspective: [f2, X, R] }], "perspective-origin": [{ "perspective-origin": v2() }], rotate: [{ rotate: ex2() }], "rotate-x": [{ "rotate-x": ex2() }], "rotate-y": [{ "rotate-y": ex2() }], "rotate-z": [{ "rotate-z": ex2() }], scale: [{ scale: ew2() }], "scale-x": [{ "scale-x": ew2() }], "scale-y": [{ "scale-y": ew2() }], "scale-z": [{ "scale-z": ew2() }], "scale-3d": ["scale-3d"], skew: [{ skew: ey2() }], "skew-x": [{ "skew-x": ey2() }], "skew-y": [{ "skew-y": ey2() }], transform: [{ transform: [X, R, "", "none", "gpu", "cpu"] }], "transform-origin": [{ origin: v2() }], "transform-style": [{ transform: ["3d", "flat"] }], translate: [{ translate: ev() }], "translate-x": [{ "translate-x": ev() }], "translate-y": [{ "translate-y": ev() }], "translate-z": [{ "translate-z": ev() }], "translate-none": ["translate-none"], zoom: [{ zoom: [S, X, R] }], accent: [{ accent: ei2() }], appearance: [{ appearance: ["none", "auto"] }], "caret-color": [{ caret: ei2() }], "color-scheme": [{ scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X, R] }], "field-sizing": [{ "field-sizing": ["fixed", "content"] }], "pointer-events": [{ "pointer-events": ["auto", "none"] }], resize: [{ resize: ["none", "", "y", "x"] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scrollbar-thumb-color": [{ "scrollbar-thumb": ei2() }], "scrollbar-track-color": [{ "scrollbar-track": ei2() }], "scrollbar-gutter": [{ "scrollbar-gutter": ["auto", "stable", "both"] }], "scrollbar-w": [{ scrollbar: ["auto", "thin", "none"] }], "scroll-m": [{ "scroll-m": G2() }], "scroll-mx": [{ "scroll-mx": G2() }], "scroll-my": [{ "scroll-my": G2() }], "scroll-ms": [{ "scroll-ms": G2() }], "scroll-me": [{ "scroll-me": G2() }], "scroll-mbs": [{ "scroll-mbs": G2() }], "scroll-mbe": [{ "scroll-mbe": G2() }], "scroll-mt": [{ "scroll-mt": G2() }], "scroll-mr": [{ "scroll-mr": G2() }], "scroll-mb": [{ "scroll-mb": G2() }], "scroll-ml": [{ "scroll-ml": G2() }], "scroll-p": [{ "scroll-p": G2() }], "scroll-px": [{ "scroll-px": G2() }], "scroll-py": [{ "scroll-py": G2() }], "scroll-ps": [{ "scroll-ps": G2() }], "scroll-pe": [{ "scroll-pe": G2() }], "scroll-pbs": [{ "scroll-pbs": G2() }], "scroll-pbe": [{ "scroll-pbe": G2() }], "scroll-pt": [{ "scroll-pt": G2() }], "scroll-pr": [{ "scroll-pr": G2() }], "scroll-pb": [{ "scroll-pb": G2() }], "scroll-pl": [{ "scroll-pl": G2() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", X, R] }], fill: [{ fill: ["none", ...ei2()] }], "stroke-w": [{ stroke: [P, Y, U, D] }], stroke: [{ stroke: ["none", ...ei2()] }], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { "container-named": ["container-type"], overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], translate: ["translate-x", "translate-y", "translate-none"], "translate-none": ["translate", "translate-x", "translate-y", "translate-z"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] }, postfixLookupClassGroups: ["container-type"], orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"] };
  }, eg = (e2, r2, o2) => {
    void 0 !== o2 && (e2[r2] = o2);
  }, eh = (e2, r2) => {
    if (r2) for (let o2 in r2) eg(e2, o2, r2[o2]);
  }, ek = (e2, r2) => {
    if (r2) for (let o2 in r2) ex(e2, r2, o2);
  }, ex = (e2, r2, o2) => {
    let t2 = r2[o2];
    void 0 !== t2 && (e2[o2] = e2[o2] ? e2[o2].concat(t2) : t2);
  };
  try {
    var ew = window;
    ew._sentryModuleMetadata = ew._sentryModuleMetadata || {}, ew._sentryModuleMetadata[new ew.Error().stack] = Object.assign({}, ew._sentryModuleMetadata[new ew.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let ey = ((e2, ...r2) => "function" == typeof e2 ? x(ef, e2, ...r2) : x(() => ((e3, { cacheSize: r3, prefix: o2, experimentalParseClassName: t2, extend: s2 = {}, override: a2 = {} }) => (eg(e3, "cacheSize", r3), eg(e3, "prefix", o2), eg(e3, "experimentalParseClassName", t2), eh(e3.theme, a2.theme), eh(e3.classGroups, a2.classGroups), eh(e3.conflictingClassGroups, a2.conflictingClassGroups), eh(e3.conflictingClassGroupModifiers, a2.conflictingClassGroupModifiers), eg(e3, "postfixLookupClassGroups", a2.postfixLookupClassGroups), eg(e3, "orderSensitiveModifiers", a2.orderSensitiveModifiers), ek(e3.theme, s2.theme), ek(e3.classGroups, s2.classGroups), ek(e3.conflictingClassGroups, s2.conflictingClassGroups), ek(e3.conflictingClassGroupModifiers, s2.conflictingClassGroupModifiers), ex(e3, s2, "postfixLookupClassGroups"), ex(e3, s2, "orderSensitiveModifiers"), e3))(ef(), e2), ...r2))({ extend: { classGroups: { "font-size": [{ text: ["heading-xs", "heading-sm", "heading-md", "heading-lg", "heading-xl", "heading-xs-serif", "heading-sm-serif", "heading-md-serif", "heading-lg-serif", "heading-xl-serif", "heading-responsive-sm", "heading-responsive-md", "heading-responsive-lg", "heading-responsive-xl", "heading-responsive-sm-serif", "heading-responsive-md-serif", "heading-responsive-lg-serif", "heading-responsive-xl-serif", "quote-sm", "quote", "quote-responsive", "overline"] }] } } });
  e.s(["cn", 0, function(...e2) {
    return ey(o(e2));
  }], 551360);
}]);
