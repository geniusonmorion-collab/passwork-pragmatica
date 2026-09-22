;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "dd854d90-8405-de29-7f9c-008ed973381f");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 578225, 551392, (t) => {
  "use strict";
  try {
    var e = "u" > typeof window ? window : t.g;
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let n = { direction: "forward", speed: 2, startDelay: 1e3, active: true, breakpoints: {}, playOnInit: true, stopOnFocusIn: true, stopOnInteraction: true, stopOnMouseEnter: false, rootNode: null };
  function r(t2 = {}) {
    let e2, i2, a2, o2, s2, u2 = 0, l2 = false, c2 = false;
    function d2() {
      if (a2 || l2) return;
      i2.emit("autoScroll:play");
      let t3 = i2.internalEngine(), { ownerWindow: n2 } = t3;
      u2 = n2.setTimeout(() => {
        t3.scrollBody = (function(t4) {
          let { location: n3, previousLocation: r2, offsetLocation: a3, target: o3, scrollTarget: s3, index: u3, indexPrevious: l3, limit: { reachedMin: c3, reachedMax: d3, constrain: m3 }, options: { loop: p3 } } = t4, g3 = "forward" === e2.direction ? -1 : 1, x3 = () => M2, h3 = 0, y3 = 0, v2 = n3.get(), b2 = 0, w2 = false, M2 = { direction: () => y3, duration: () => -1, velocity: () => h3, settled: () => w2, seek: function() {
            r2.set(n3), h3 = g3 * e2.speed, v2 += h3, n3.add(h3), o3.set(n3), y3 = Math.sign(v2 - b2), b2 = v2;
            let t5 = s3.byDistance(0, false).index;
            u3.get() !== t5 && (l3.set(u3.get()), u3.set(t5), i2.emit("select"));
            let x4 = "forward" === e2.direction ? c3(a3.get()) : d3(a3.get());
            if (!p3 && x4) {
              w2 = true;
              let t6 = m3(n3.get());
              n3.set(t6), o3.set(n3), f2();
            }
            return M2;
          }, useBaseFriction: x3, useBaseDuration: x3, useFriction: x3, useDuration: x3 };
          return M2;
        })(t3), t3.animation.start();
      }, o2), l2 = true;
    }
    function f2() {
      if (a2 || !l2) return;
      i2.emit("autoScroll:stop");
      let t3 = i2.internalEngine(), { ownerWindow: e3 } = t3;
      t3.scrollBody = s2, e3.clearTimeout(u2), u2 = 0, l2 = false;
    }
    function m2() {
      c2 || f2();
    }
    function p2() {
      c2 || y2();
    }
    function g2() {
      c2 = true, f2();
    }
    function x2() {
      c2 = false, d2();
    }
    function h2() {
      i2.off("settle", h2), d2();
    }
    function y2() {
      i2.on("settle", h2);
    }
    return { name: "autoScroll", options: t2, init: function(u3, l3) {
      var c3, h3;
      let y3;
      i2 = u3;
      let { mergeOptions: v2, optionsAtMedia: b2 } = l3, w2 = v2(n, r.globalOptions);
      if (e2 = b2(v2(w2, t2)), i2.scrollSnapList().length <= 1) return;
      o2 = e2.startDelay, a2 = false, s2 = i2.internalEngine().scrollBody;
      let { eventStore: M2 } = i2.internalEngine(), _2 = !!i2.internalEngine().options.watchDrag, A2 = (c3 = i2, h3 = e2.rootNode, y3 = c3.rootNode(), h3 && h3(y3) || y3);
      _2 && i2.on("pointerDown", m2), _2 && !e2.stopOnInteraction && i2.on("pointerUp", p2), e2.stopOnMouseEnter && M2.add(A2, "mouseenter", g2), e2.stopOnMouseEnter && !e2.stopOnInteraction && M2.add(A2, "mouseleave", x2), e2.stopOnFocusIn && i2.on("slideFocusStart", f2), e2.stopOnFocusIn && !e2.stopOnInteraction && M2.add(i2.containerNode(), "focusout", d2), e2.playOnInit && d2();
    }, destroy: function() {
      i2.off("pointerDown", m2).off("pointerUp", p2).off("slideFocusStart", f2).off("settle", h2), f2(), a2 = true, l2 = false;
    }, play: function(t3) {
      void 0 !== t3 && (o2 = t3), d2();
    }, stop: function() {
      l2 && f2();
    }, reset: function() {
      l2 && (f2(), y2());
    }, isPlaying: function() {
      return l2;
    } };
  }
  r.globalOptions = void 0, t.s(["default", 0, r], 578225);
  var i = t.i(68982), a = t.i(856757);
  try {
    var o = "u" > typeof window ? window : t.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function s(t2) {
    return "[object Object]" === Object.prototype.toString.call(t2) || Array.isArray(t2);
  }
  function u(t2, e2) {
    let n2 = Object.keys(t2), r2 = Object.keys(e2);
    return n2.length === r2.length && JSON.stringify(Object.keys(t2.breakpoints || {})) === JSON.stringify(Object.keys(e2.breakpoints || {})) && n2.every((n3) => {
      let r3 = t2[n3], i2 = e2[n3];
      return "function" == typeof r3 ? `${r3}` == `${i2}` : s(r3) && s(i2) ? u(r3, i2) : r3 === i2;
    });
  }
  function l(t2) {
    return t2.concat().sort((t3, e2) => t3.name > e2.name ? 1 : -1).map((t3) => t3.options);
  }
  try {
    var c = "u" > typeof window ? window : t.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function d(t2) {
    return "number" == typeof t2;
  }
  function f(t2) {
    return "string" == typeof t2;
  }
  function m(t2) {
    return "boolean" == typeof t2;
  }
  function p(t2) {
    return "[object Object]" === Object.prototype.toString.call(t2);
  }
  function g(t2) {
    return Math.abs(t2);
  }
  function x(t2) {
    return Math.sign(t2);
  }
  function h(t2) {
    return w(t2).map(Number);
  }
  function y(t2) {
    return t2[v(t2)];
  }
  function v(t2) {
    return Math.max(0, t2.length - 1);
  }
  function b(t2, e2 = 0) {
    return Array.from(Array(t2), (t3, n2) => e2 + n2);
  }
  function w(t2) {
    return Object.keys(t2);
  }
  function M(t2, e2) {
    return void 0 !== e2.MouseEvent && t2 instanceof e2.MouseEvent;
  }
  function _() {
    let t2 = [], e2 = { add: function(n2, r2, i2, a2 = { passive: true }) {
      let o2;
      return "addEventListener" in n2 ? (n2.addEventListener(r2, i2, a2), o2 = () => n2.removeEventListener(r2, i2, a2)) : (n2.addListener(i2), o2 = () => n2.removeListener(i2)), t2.push(o2), e2;
    }, clear: function() {
      t2 = t2.filter((t3) => t3());
    } };
    return e2;
  }
  function A(t2 = 0, e2 = 0) {
    let n2 = g(t2 - e2);
    function r2(n3) {
      return n3 < t2 || n3 > e2;
    }
    return { length: n2, max: e2, min: t2, constrain: function(n3) {
      return r2(n3) ? n3 < t2 ? t2 : e2 : n3;
    }, reachedAny: r2, reachedMax: function(t3) {
      return t3 > e2;
    }, reachedMin: function(e3) {
      return e3 < t2;
    }, removeOffset: function(t3) {
      return n2 ? t3 - n2 * Math.ceil((t3 - e2) / n2) : t3;
    } };
  }
  function k(t2) {
    let e2 = t2;
    function n2(t3) {
      return d(t3) ? t3 : t3.get();
    }
    return { get: function() {
      return e2;
    }, set: function(t3) {
      e2 = n2(t3);
    }, add: function(t3) {
      e2 += n2(t3);
    }, subtract: function(t3) {
      e2 -= n2(t3);
    } };
  }
  function j(t2, e2) {
    let n2 = "x" === t2.scroll ? function(t3) {
      return `translate3d(${t3}px,0px,0px)`;
    } : function(t3) {
      return `translate3d(0px,${t3}px,0px)`;
    }, r2 = e2.style, i2 = null, a2 = false;
    return { clear: function() {
      !a2 && (r2.transform = "", e2.getAttribute("style") || e2.removeAttribute("style"));
    }, to: function(e3) {
      if (a2) return;
      let o2 = Math.round(100 * t2.direction(e3)) / 100;
      o2 !== i2 && (r2.transform = n2(o2), i2 = o2);
    }, toggleActive: function(t3) {
      a2 = !t3;
    } };
  }
  let E = { align: "center", axis: "x", container: null, slides: null, containScroll: "trimSnaps", direction: "ltr", slidesToScroll: 1, inViewThreshold: 0, breakpoints: {}, dragFree: false, dragThreshold: 10, loop: false, skipSnaps: false, duration: 25, startIndex: 0, active: true, watchDrag: true, watchResize: true, watchSlides: true, watchFocus: true };
  function S(t2, e2, n2) {
    let r2, i2, a2, o2, s2, u2, l2, c2, O2 = t2.ownerDocument, q2 = O2.defaultView, N2 = /* @__PURE__ */ (function(t3) {
      function e3(t4, e4) {
        return (function t5(e5, n3) {
          return [e5, n3].reduce((e6, n4) => (w(n4).forEach((r3) => {
            let i3 = e6[r3], a3 = n4[r3], o3 = p(i3) && p(a3);
            e6[r3] = o3 ? t5(i3, a3) : a3;
          }), e6), {});
        })(t4, e4 || {});
      }
      return { mergeOptions: e3, optionsAtMedia: function(n3) {
        let r3 = n3.breakpoints || {}, i3 = w(r3).filter((e4) => t3.matchMedia(e4).matches).map((t4) => r3[t4]).reduce((t4, n4) => e3(t4, n4), {});
        return e3(n3, i3);
      }, optionsMediaQueries: function(e4) {
        return e4.map((t4) => w(t4.breakpoints || {})).reduce((t4, e5) => t4.concat(e5), []).map(t3.matchMedia);
      } };
    })(q2), I2 = (c2 = [], { init: function(t3, e3) {
      return (c2 = e3.filter(({ options: t4 }) => false !== N2.optionsAtMedia(t4).active)).forEach((e4) => e4.init(t3, N2)), e3.reduce((t4, e4) => Object.assign(t4, { [e4.name]: e4 }), {});
    }, destroy: function() {
      c2 = c2.filter((t3) => t3.destroy());
    } }), D2 = _(), C2 = (i2 = {}, a2 = { init: function(t3) {
      r2 = t3;
    }, emit: function(t3) {
      return (i2[t3] || []).forEach((e3) => e3(r2, t3)), a2;
    }, off: function(t3, e3) {
      return i2[t3] = (i2[t3] || []).filter((t4) => t4 !== e3), a2;
    }, on: function(t3, e3) {
      return i2[t3] = (i2[t3] || []).concat([e3]), a2;
    }, clear: function() {
      i2 = {};
    } }), { mergeOptions: B, optionsAtMedia: F, optionsMediaQueries: z } = N2, { on: L, off: P, emit: R } = C2, T = false, $ = B(E, S.globalOptions), U = B($), K = [];
    function V(e3, n3) {
      T || (U = F($ = B($, e3)), K = n3 || K, (function() {
        let { container: e4, slides: n4 } = U;
        u2 = (f(e4) ? t2.querySelector(e4) : e4) || t2.children[0];
        let r3 = f(n4) ? u2.querySelectorAll(n4) : n4;
        l2 = [].slice.call(r3 || u2.children);
      })(), o2 = (function e4(n4) {
        let r3 = (function(t3, e5, n5, r4, i3, a3, o3) {
          var s3, u3;
          let l3, c3, p2, E2, S2, O3, q3, N3, I3, D3, C3, B2, F2, z2, { align: L2, axis: P2, direction: R2, startIndex: T2, loop: $2, duration: U2, dragFree: K2, dragThreshold: V2, inViewThreshold: W2, slidesToScroll: H2, skipSnaps: G2, containScroll: Q2, watchResize: J2, watchSlides: X, watchDrag: Y, watchFocus: Z } = a3, tt = { measure: function(t4) {
            let { offsetTop: e6, offsetLeft: n6, offsetWidth: r5, offsetHeight: i4 } = t4;
            return { top: e6, right: n6 + r5, bottom: e6 + i4, left: n6, width: r5, height: i4 };
          } }, te = tt.measure(e5), tn = n5.map(tt.measure), tr = (c3 = "rtl" === R2, E2 = (p2 = "y" === P2) || !c3 ? 1 : -1, S2 = p2 ? "top" : c3 ? "right" : "left", O3 = p2 ? "bottom" : c3 ? "left" : "right", { scroll: p2 ? "y" : "x", cross: p2 ? "x" : "y", startEdge: S2, endEdge: O3, measureSize: function(t4) {
            let { height: e6, width: n6 } = t4;
            return p2 ? e6 : n6;
          }, direction: function(t4) {
            return t4 * E2;
          } }), ti = tr.measureSize(te), ta = { measure: function(t4) {
            return t4 / 100 * ti;
          } }, to = (s3 = L2, u3 = ti, l3 = { start: function() {
            return 0;
          }, center: function(t4) {
            return (u3 - t4) / 2;
          }, end: function(t4) {
            return u3 - t4;
          } }, { measure: function(t4, e6) {
            return f(s3) ? l3[s3](t4) : s3(u3, t4, e6);
          } }), ts = !$2 && !!Q2, { slideSizes: tu, slideSizesWithGaps: tl, startGap: tc, endGap: td } = (function(t4, e6, n6, r5, i4, a4) {
            let { measureSize: o4, startEdge: s4, endEdge: u4 } = t4, l4 = n6[0] && i4, c4 = (function() {
              if (!l4) return 0;
              let t5 = n6[0];
              return g(e6[s4] - t5[s4]);
            })(), d2 = l4 ? parseFloat(a4.getComputedStyle(y(r5)).getPropertyValue(`margin-${u4}`)) : 0, f2 = n6.map(o4), m2 = n6.map((t5, e7, n7) => {
              let r6 = e7 === v(n7);
              return e7 ? r6 ? f2[e7] + d2 : n7[e7 + 1][s4] - t5[s4] : f2[e7] + c4;
            }).map(g);
            return { slideSizes: f2, slideSizesWithGaps: m2, startGap: c4, endGap: d2 };
          })(tr, te, tn, n5, $2 || !!Q2, i3), tf = (function(t4, e6, n6, r5, i4, a4, o4, s4) {
            let { startEdge: u4, endEdge: l4, direction: c4 } = t4, f2 = d(n6);
            return { groupSlides: function(t5) {
              return f2 ? h(t5).filter((t6) => t6 % n6 == 0).map((e7) => t5.slice(e7, e7 + n6)) : t5.length ? h(t5).reduce((n7, d2, f3) => {
                let m2 = y(n7) || 0, p3 = d2 === v(t5), x2 = i4[u4] - a4[m2][u4], h2 = i4[u4] - a4[d2][l4], b2 = r5 || 0 !== m2 ? 0 : c4(o4), w2 = g(h2 - (!r5 && p3 ? c4(s4) : 0) - (x2 + b2));
                return f3 && w2 > e6 + 2 && n7.push(d2), p3 && n7.push(t5.length), n7;
              }, []).map((e7, n7, r6) => {
                let i5 = Math.max(r6[n7 - 1] || 0);
                return t5.slice(i5, e7);
              }) : [];
            } };
          })(tr, ti, H2, $2, te, tn, tc, td), { snaps: tm, snapsAligned: tp } = (function(t4, e6, n6, r5, i4) {
            let { startEdge: a4, endEdge: o4 } = t4, { groupSlides: s4 } = i4, u4 = s4(r5).map((t5) => y(t5)[o4] - t5[0][a4]).map(g).map(e6.measure), l4 = r5.map((t5) => n6[a4] - t5[a4]).map((t5) => -g(t5)), c4 = s4(l4).map((t5) => t5[0]).map((t5, e7) => t5 + u4[e7]);
            return { snaps: l4, snapsAligned: c4 };
          })(tr, to, te, tn, tf), tg = -y(tm) + y(tl), { snapsContained: tx, scrollContainLimit: th } = (function(t4, e6, n6, r5) {
            let i4, a4, o4 = A(-e6 + t4, 0), s4 = n6.map((t5, e7) => {
              let { min: r6, max: i5 } = o4, a5 = o4.constrain(t5), s5 = e7 === v(n6);
              return e7 ? s5 || (function(t6, e8) {
                return 1 >= g(t6 - e8);
              })(r6, a5) ? r6 : (function(t6, e8) {
                return 1 >= g(t6 - e8);
              })(i5, a5) ? i5 : a5 : i5;
            }).map((t5) => parseFloat(t5.toFixed(3))), u4 = (i4 = s4[0], a4 = y(s4), A(s4.lastIndexOf(i4), s4.indexOf(a4) + 1));
            return { snapsContained: (function() {
              if (e6 <= t4 + 2) return [o4.max];
              if ("keepSnaps" === r5) return s4;
              let { min: n7, max: i5 } = u4;
              return s4.slice(n7, i5);
            })(), scrollContainLimit: u4 };
          })(ti, tg, tp, Q2), ty = ts ? tx : tp, { limit: tv } = (q3 = ty[0], { limit: A($2 ? q3 - tg : y(ty), q3) }), tb = (function t4(e6, n6, r5) {
            let { constrain: i4 } = A(0, e6), a4 = e6 + 1, o4 = s4(n6);
            function s4(t5) {
              return r5 ? g((a4 + t5) % a4) : i4(t5);
            }
            function u4() {
              return t4(e6, o4, r5);
            }
            let l4 = { get: function() {
              return o4;
            }, set: function(t5) {
              return o4 = s4(t5), l4;
            }, add: function(t5) {
              return u4().set(o4 + t5);
            }, clone: u4 };
            return l4;
          })(v(ty), T2, $2), tw = tb.clone(), tM = h(n5), t_ = (function(t4, e6, n6, r5) {
            let i4 = _(), a4 = 1e3 / 60, o4 = null, s4 = 0, u4 = 0;
            function l4(t5) {
              if (!u4) return;
              o4 || (o4 = t5, n6(), n6());
              let i5 = t5 - o4;
              for (o4 = t5, s4 += i5; s4 >= a4; ) n6(), s4 -= a4;
              r5(s4 / a4), u4 && (u4 = e6.requestAnimationFrame(l4));
            }
            function c4() {
              e6.cancelAnimationFrame(u4), o4 = null, s4 = 0, u4 = 0;
            }
            return { init: function() {
              i4.add(t4, "visibilitychange", () => {
                t4.hidden && (o4 = null, s4 = 0);
              });
            }, destroy: function() {
              c4(), i4.clear();
            }, start: function() {
              u4 || (u4 = e6.requestAnimationFrame(l4));
            }, stop: c4, update: n6, render: r5 };
          })(r4, i3, () => (({ dragHandler: t4, scrollBody: e6, scrollBounds: n6, options: { loop: r5 } }) => {
            r5 || n6.constrain(t4.pointerDown()), e6.seek();
          })(tz), (t4) => (({ scrollBody: t5, translate: e6, location: n6, offsetLocation: r5, previousLocation: i4, scrollLooper: a4, slideLooper: o4, dragHandler: s4, animation: u4, eventHandler: l4, scrollBounds: c4, options: { loop: d2 } }, f2) => {
            let m2 = t5.settled(), p3 = !c4.shouldConstrain(), g2 = d2 ? m2 : m2 && p3, x2 = g2 && !s4.pointerDown();
            x2 && u4.stop();
            let h2 = n6.get() * f2 + i4.get() * (1 - f2);
            r5.set(h2), d2 && (a4.loop(t5.direction()), o4.loop()), e6.to(r5.get()), x2 && l4.emit("settle"), g2 || l4.emit("scroll");
          })(tz, t4)), tA = ty[tb.get()], tk = k(tA), tj = k(tA), tE = k(tA), tS = k(tA), tO = (function(t4, e6, n6, r5, i4) {
            let a4 = 0, o4 = 0, s4 = i4, u4 = 0.68, l4 = t4.get(), c4 = 0;
            function d2(t5) {
              return s4 = t5, m2;
            }
            function f2(t5) {
              return u4 = t5, m2;
            }
            let m2 = { direction: function() {
              return o4;
            }, duration: function() {
              return s4;
            }, velocity: function() {
              return a4;
            }, seek: function() {
              let e7 = r5.get() - t4.get(), i5 = 0;
              return s4 ? (n6.set(t4), a4 += e7 / s4, a4 *= u4, l4 += a4, t4.add(a4), i5 = l4 - c4) : (a4 = 0, n6.set(r5), t4.set(r5), i5 = e7), o4 = x(i5), c4 = l4, m2;
            }, settled: function() {
              return 1e-3 > g(r5.get() - e6.get());
            }, useBaseFriction: function() {
              return f2(0.68);
            }, useBaseDuration: function() {
              return d2(i4);
            }, useFriction: f2, useDuration: d2 };
            return m2;
          })(tk, tE, tj, tS, U2), tq = (function(t4, e6, n6, r5, i4) {
            let { reachedAny: a4, removeOffset: o4, constrain: s4 } = r5;
            function u4(t5) {
              return t5.concat().sort((t6, e7) => g(t6) - g(e7))[0];
            }
            function l4(e7, r6) {
              let i5 = [e7, e7 + n6, e7 - n6];
              if (!t4) return e7;
              if (!r6) return u4(i5);
              let a5 = i5.filter((t5) => x(t5) === r6);
              return a5.length ? u4(a5) : y(i5) - n6;
            }
            return { byDistance: function(n7, r6) {
              let u5 = i4.get() + n7, { index: c4, distance: d2 } = (function(n8) {
                let r7 = t4 ? o4(n8) : s4(n8), { index: i5 } = e6.map((t5, e7) => ({ diff: l4(t5 - r7, 0), index: e7 })).sort((t5, e7) => g(t5.diff) - g(e7.diff))[0];
                return { index: i5, distance: r7 };
              })(u5), f2 = !t4 && a4(u5);
              if (!r6 || f2) return { index: c4, distance: n7 };
              let m2 = n7 + l4(e6[c4] - d2, 0);
              return { index: c4, distance: m2 };
            }, byIndex: function(t5, n7) {
              let r6 = l4(e6[t5] - i4.get(), n7);
              return { index: t5, distance: r6 };
            }, shortcut: l4 };
          })($2, ty, tg, tv, tS), tN = /* @__PURE__ */ (function(t4, e6, n6, r5, i4, a4, o4) {
            function s4(i5) {
              let s5 = i5.distance, u4 = i5.index !== e6.get();
              a4.add(s5), s5 && (r5.duration() ? t4.start() : (t4.update(), t4.render(1), t4.update())), u4 && (n6.set(e6.get()), e6.set(i5.index), o4.emit("select"));
            }
            return { distance: function(t5, e7) {
              s4(i4.byDistance(t5, e7));
            }, index: function(t5, n7) {
              let r6 = e6.clone().set(t5);
              s4(i4.byIndex(r6.get(), n7));
            } };
          })(t_, tb, tw, tO, tq, tS, o3), tI = (function(t4) {
            let { max: e6, length: n6 } = t4;
            return { get: function(t5) {
              return n6 ? -((t5 - e6) / n6) : 0;
            } };
          })(tv), tD = _(), tC = (I3 = {}, D3 = null, C3 = null, B2 = false, { init: function() {
            N3 = new IntersectionObserver((t4) => {
              B2 || (t4.forEach((t5) => {
                I3[n5.indexOf(t5.target)] = t5;
              }), D3 = null, C3 = null, o3.emit("slidesInView"));
            }, { root: e5.parentElement, threshold: W2 }), n5.forEach((t4) => N3.observe(t4));
          }, destroy: function() {
            N3 && N3.disconnect(), B2 = true;
          }, get: function(t4 = true) {
            if (t4 && D3) return D3;
            if (!t4 && C3) return C3;
            let e6 = w(I3).reduce((e7, n6) => {
              let r5 = parseInt(n6), { isIntersecting: i4 } = I3[r5];
              return (t4 && i4 || !t4 && !i4) && e7.push(r5), e7;
            }, []);
            return t4 && (D3 = e6), t4 || (C3 = e6), e6;
          } }), { slideRegistry: tB } = (function(t4, e6, n6, r5, i4, a4) {
            let o4, { groupSlides: s4 } = i4, { min: u4, max: l4 } = r5;
            return { slideRegistry: (o4 = s4(a4), 1 === n6.length ? [a4] : t4 && "keepSnaps" !== e6 ? o4.slice(u4, l4).map((t5, e7, n7) => {
              let r6 = e7 === v(n7);
              return e7 ? r6 ? b(v(a4) - y(n7)[0] + 1, y(n7)[0]) : t5 : b(y(n7[0]) + 1);
            }) : o4) };
          })(ts, Q2, ty, th, tf, tM), tF = /* @__PURE__ */ (function(t4, e6, n6, r5, i4, a4, o4, s4) {
            let u4 = { passive: true, capture: true }, l4 = 0;
            function c4(t5) {
              "Tab" === t5.code && (l4 = (/* @__PURE__ */ new Date()).getTime());
            }
            return { init: function(f2) {
              s4 && (a4.add(document, "keydown", c4, false), e6.forEach((e7, c5) => {
                a4.add(e7, "focus", (e8) => {
                  (m(s4) || s4(f2, e8)) && (function(e9) {
                    if ((/* @__PURE__ */ new Date()).getTime() - l4 > 10) return;
                    o4.emit("slideFocusStart"), t4.scrollLeft = 0;
                    let a5 = n6.findIndex((t5) => t5.includes(e9));
                    d(a5) && (i4.useDuration(0), r5.index(a5, 0), o4.emit("slideFocus"));
                  })(c5);
                }, u4);
              }));
            } };
          })(t3, n5, tB, tN, tO, tD, o3, Z), tz = { ownerDocument: r4, ownerWindow: i3, eventHandler: o3, containerRect: te, slideRects: tn, animation: t_, axis: tr, dragHandler: (function(t4, e6, n6, r5, i4, a4, o4, s4, u4, l4, c4, d2, f2, p3, h2, y2, v2, b2) {
            let { cross: w2, direction: k2 } = t4, j2 = ["INPUT", "SELECT", "TEXTAREA"], E3 = { passive: false }, S3 = _(), O4 = _(), q4 = A(50, 225).constrain(p3.measure(20)), N4 = { mouse: 300, touch: 400 }, I4 = { mouse: 500, touch: 600 }, D4 = h2 ? 43 : 25, C4 = false, B3 = 0, F3 = 0, z3 = false, L3 = false, P3 = false, R3 = false;
            function T3(t5) {
              if (!M(t5, r5) && t5.touches.length >= 2) return $3(t5);
              let e7 = a4.readPoint(t5), n7 = a4.readPoint(t5, w2), o5 = g(e7 - B3), u5 = g(n7 - F3);
              if (!L3 && !R3 && (!t5.cancelable || !(L3 = o5 > u5))) return $3(t5);
              let c5 = a4.pointerMove(t5);
              o5 > y2 && (P3 = true), l4.useFriction(0.3).useDuration(0.75), s4.start(), i4.add(k2(c5)), t5.preventDefault();
            }
            function $3(t5) {
              var e7;
              let n7, r6, i5 = c4.byDistance(0, false).index !== d2.get(), o5 = a4.pointerUp(t5) * (h2 ? I4 : N4)[R3 ? "mouse" : "touch"], s5 = (e7 = k2(o5), n7 = d2.add(-1 * x(e7)), r6 = c4.byDistance(e7, !h2).distance, h2 || g(e7) < q4 ? r6 : v2 && i5 ? 0.5 * r6 : c4.byIndex(n7.get(), 0).distance), m2 = (function(t6, e8) {
                var n8, r7;
                if (0 === t6 || 0 === e8 || g(t6) <= g(e8)) return 0;
                let i6 = (n8 = g(t6), r7 = g(e8), g(n8 - r7));
                return g(i6 / t6);
              })(o5, s5);
              L3 = false, z3 = false, O4.clear(), l4.useDuration(D4 - 10 * m2).useFriction(0.68 + m2 / 50), u4.distance(s5, !h2), R3 = false, f2.emit("pointerUp");
            }
            function U3(t5) {
              P3 && (t5.stopPropagation(), t5.preventDefault(), P3 = false);
            }
            return { init: function(t5) {
              b2 && S3.add(e6, "dragstart", (t6) => t6.preventDefault(), E3).add(e6, "touchmove", () => void 0, E3).add(e6, "touchend", () => void 0).add(e6, "touchstart", s5).add(e6, "mousedown", s5).add(e6, "touchcancel", $3).add(e6, "contextmenu", $3).add(e6, "click", U3, true);
              function s5(s6) {
                (m(b2) || b2(t5, s6)) && (function(t6) {
                  let s7, u5 = M(t6, r5);
                  if ((R3 = u5, P3 = h2 && u5 && !t6.buttons && C4, C4 = g(i4.get() - o4.get()) >= 2, !u5 || 0 === t6.button) && (s7 = t6.target.nodeName || "", !j2.includes(s7))) {
                    let r6;
                    z3 = true, a4.pointerDown(t6), l4.useFriction(0).useDuration(0), i4.set(o4), r6 = R3 ? n6 : e6, O4.add(r6, "touchmove", T3, E3).add(r6, "touchend", $3).add(r6, "mousemove", T3, E3).add(r6, "mouseup", $3), B3 = a4.readPoint(t6), F3 = a4.readPoint(t6, w2), f2.emit("pointerDown");
                  }
                })(s6);
              }
            }, destroy: function() {
              S3.clear(), O4.clear();
            }, pointerDown: function() {
              return z3;
            } };
          })(tr, t3, r4, i3, tS, /* @__PURE__ */ (function(t4, e6) {
            let n6, r5;
            function i4(t5) {
              return t5.timeStamp;
            }
            function a4(n7, r6) {
              let i5 = r6 || t4.scroll, a5 = `client${"x" === i5 ? "X" : "Y"}`;
              return (M(n7, e6) ? n7 : n7.touches[0])[a5];
            }
            return { pointerDown: function(t5) {
              return n6 = t5, r5 = t5, a4(t5);
            }, pointerMove: function(t5) {
              let e7 = a4(t5) - a4(r5), o4 = i4(t5) - i4(n6) > 170;
              return r5 = t5, o4 && (n6 = t5), e7;
            }, pointerUp: function(t5) {
              if (!n6 || !r5) return 0;
              let e7 = a4(r5) - a4(n6), o4 = i4(t5) - i4(n6), s4 = i4(t5) - i4(r5) > 170, u4 = e7 / o4;
              return o4 && !s4 && g(u4) > 0.1 ? u4 : 0;
            }, readPoint: a4 };
          })(tr, i3), tk, t_, tN, tO, tq, tb, o3, ta, K2, V2, G2, Y), eventStore: tD, percentOfView: ta, index: tb, indexPrevious: tw, limit: tv, location: tk, offsetLocation: tE, previousLocation: tj, options: a3, resizeHandler: (function(t4, e6, n6, r5, i4, a4, o4) {
            let s4, u4, l4 = [t4].concat(r5), c4 = [], d2 = false;
            function f2(t5) {
              return i4.measureSize(o4.measure(t5));
            }
            return { init: function(i5) {
              a4 && (u4 = f2(t4), c4 = r5.map(f2), s4 = new ResizeObserver((n7) => {
                (m(a4) || a4(i5, n7)) && (function(n8) {
                  for (let a5 of n8) {
                    if (d2) return;
                    let n9 = a5.target === t4, o5 = r5.indexOf(a5.target), s5 = n9 ? u4 : c4[o5];
                    if (g(f2(n9 ? t4 : r5[o5]) - s5) >= 0.5) {
                      i5.reInit(), e6.emit("resize");
                      break;
                    }
                  }
                })(n7);
              }), n6.requestAnimationFrame(() => {
                l4.forEach((t5) => s4.observe(t5));
              }));
            }, destroy: function() {
              d2 = true, s4 && s4.disconnect();
            } };
          })(e5, o3, i3, n5, tr, J2, tt), scrollBody: tO, scrollBounds: (function(t4, e6, n6, r5, i4) {
            let a4 = i4.measure(10), o4 = i4.measure(50), s4 = A(0.1, 0.99), u4 = false;
            function l4() {
              return !u4 && !!t4.reachedAny(n6.get()) && !!t4.reachedAny(e6.get());
            }
            return { shouldConstrain: l4, constrain: function(i5) {
              if (!l4()) return;
              let u5 = t4.reachedMin(e6.get()) ? "min" : "max", c4 = g(t4[u5] - e6.get()), d2 = n6.get() - e6.get(), f2 = s4.constrain(c4 / o4);
              n6.subtract(d2 * f2), !i5 && g(d2) < a4 && (n6.set(t4.constrain(n6.get())), r5.useDuration(25).useBaseFriction());
            }, toggleActive: function(t5) {
              u4 = !t5;
            } };
          })(tv, tE, tS, tO, ta), scrollLooper: (function(t4, e6, n6, r5) {
            let { reachedMin: i4, reachedMax: a4 } = A(e6.min + 0.1, e6.max + 0.1);
            return { loop: function(e7) {
              if (!(1 === e7 ? a4(n6.get()) : -1 === e7 && i4(n6.get()))) return;
              let o4 = -1 * e7 * t4;
              r5.forEach((t5) => t5.add(o4));
            } };
          })(tg, tv, tE, [tk, tE, tj, tS]), scrollProgress: tI, scrollSnapList: ty.map(tI.get), scrollSnaps: ty, scrollTarget: tq, scrollTo: tN, slideLooper: (function(t4, e6, n6, r5, i4, a4, o4, s4, u4) {
            let l4 = h(i4), c4 = h(i4).reverse(), d2 = p3(m2(c4, o4[0]), n6, false).concat(p3(m2(l4, e6 - o4[0] - 1), -n6, true));
            function f2(t5, e7) {
              return t5.reduce((t6, e8) => t6 - i4[e8], e7);
            }
            function m2(t5, e7) {
              return t5.reduce((t6, n7) => f2(t6, e7) > 0 ? t6.concat([n7]) : t6, []);
            }
            function p3(i5, o5, l5) {
              let c5 = a4.map((t5, n7) => ({ start: t5 - r5[n7] + 0.5 + o5, end: t5 + e6 - 0.5 + o5 }));
              return i5.map((e7) => {
                let r6 = l5 ? 0 : -n6, i6 = l5 ? n6 : 0, a5 = c5[e7][l5 ? "end" : "start"];
                return { index: e7, loopPoint: a5, slideLocation: k(-1), translate: j(t4, u4[e7]), target: () => s4.get() > a5 ? r6 : i6 };
              });
            }
            return { canLoop: function() {
              return d2.every(({ index: t5 }) => 0.1 >= f2(l4.filter((e7) => e7 !== t5), e6));
            }, clear: function() {
              d2.forEach((t5) => t5.translate.clear());
            }, loop: function() {
              d2.forEach((t5) => {
                let { target: e7, translate: n7, slideLocation: r6 } = t5, i5 = e7();
                i5 !== r6.get() && (n7.to(i5), r6.set(i5));
              });
            }, loopPoints: d2 };
          })(tr, ti, tg, tu, tl, tm, ty, tE, n5), slideFocus: tF, slidesHandler: (z2 = false, { init: function(t4) {
            X && (F2 = new MutationObserver((e6) => {
              !z2 && (m(X) || X(t4, e6)) && (function(e7) {
                for (let n6 of e7) if ("childList" === n6.type) {
                  t4.reInit(), o3.emit("slidesChanged");
                  break;
                }
              })(e6);
            })).observe(e5, { childList: true });
          }, destroy: function() {
            F2 && F2.disconnect(), z2 = true;
          } }), slidesInView: tC, slideIndexes: tM, slideRegistry: tB, slidesToScroll: tf, target: tS, translate: j(tr, e5) };
          return tz;
        })(t2, u2, l2, O2, q2, n4, C2);
        return n4.loop && !r3.slideLooper.canLoop() ? e4(Object.assign({}, n4, { loop: false })) : r3;
      })(U), z([$, ...K.map(({ options: t3 }) => t3)]).forEach((t3) => D2.add(t3, "change", W)), U.active && (o2.translate.to(o2.location.get()), o2.animation.init(), o2.slidesInView.init(), o2.slideFocus.init(J), o2.eventHandler.init(J), o2.resizeHandler.init(J), o2.slidesHandler.init(J), o2.options.loop && o2.slideLooper.loop(), u2.offsetParent && l2.length && o2.dragHandler.init(J), s2 = I2.init(J, K)));
    }
    function W(t3, e3) {
      let n3 = Q();
      H(), V(B({ startIndex: n3 }, t3), e3), C2.emit("reInit");
    }
    function H() {
      o2.dragHandler.destroy(), o2.eventStore.clear(), o2.translate.clear(), o2.slideLooper.clear(), o2.resizeHandler.destroy(), o2.slidesHandler.destroy(), o2.slidesInView.destroy(), o2.animation.destroy(), I2.destroy(), D2.clear();
    }
    function G(t3, e3, n3) {
      U.active && !T && (o2.scrollBody.useBaseFriction().useDuration(true === e3 ? 0 : U.duration), o2.scrollTo.index(t3, n3 || 0));
    }
    function Q() {
      return o2.index.get();
    }
    let J = { canScrollNext: function() {
      return o2.index.add(1).get() !== Q();
    }, canScrollPrev: function() {
      return o2.index.add(-1).get() !== Q();
    }, containerNode: function() {
      return u2;
    }, internalEngine: function() {
      return o2;
    }, destroy: function() {
      T || (T = true, D2.clear(), H(), C2.emit("destroy"), C2.clear());
    }, off: P, on: L, emit: R, plugins: function() {
      return s2;
    }, previousScrollSnap: function() {
      return o2.indexPrevious.get();
    }, reInit: W, rootNode: function() {
      return t2;
    }, scrollNext: function(t3) {
      G(o2.index.add(1).get(), t3, -1);
    }, scrollPrev: function(t3) {
      G(o2.index.add(-1).get(), t3, 1);
    }, scrollProgress: function() {
      return o2.scrollProgress.get(o2.offsetLocation.get());
    }, scrollSnapList: function() {
      return o2.scrollSnapList;
    }, scrollTo: G, selectedScrollSnap: Q, slideNodes: function() {
      return l2;
    }, slidesInView: function() {
      return o2.slidesInView.get();
    }, slidesNotInView: function() {
      return o2.slidesInView.get(false);
    } };
    return V(e2, n2), setTimeout(() => C2.emit("init"), 0), J;
  }
  S.globalOptions = void 0;
  try {
    var O = "u" > typeof window ? window : t.g;
    O._sentryModuleMetadata = O._sentryModuleMetadata || {}, O._sentryModuleMetadata[new O.Error().stack] = Object.assign({}, O._sentryModuleMetadata[new O.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function q(t2 = {}, e2 = []) {
    let n2 = (0, a.useRef)(t2), r2 = (0, a.useRef)(e2), [i2, o2] = (0, a.useState)(), [s2, c2] = (0, a.useState)(), d2 = (0, a.useCallback)(() => {
      i2 && i2.reInit(n2.current, r2.current);
    }, [i2]);
    return (0, a.useEffect)(() => {
      u(n2.current, t2) || (n2.current = t2, d2());
    }, [t2, d2]), (0, a.useEffect)(() => {
      !(function(t3, e3) {
        if (t3.length !== e3.length) return false;
        let n3 = l(t3), r3 = l(e3);
        return n3.every((t4, e4) => u(t4, r3[e4]));
      })(r2.current, e2) && (r2.current = e2, d2());
    }, [e2, d2]), (0, a.useEffect)(() => {
      if ("u" > typeof window && window.document && window.document.createElement && s2) {
        S.globalOptions = q.globalOptions;
        let t3 = S(s2, n2.current, r2.current);
        return o2(t3), () => t3.destroy();
      }
      o2(void 0);
    }, [s2, o2]), [c2, i2];
  }
  q.globalOptions = void 0;
  var N = t.i(551360);
  try {
    var I = window;
    I._sentryModuleMetadata = I._sentryModuleMetadata || {}, I._sentryModuleMetadata[new I.Error().stack] = Object.assign({}, I._sentryModuleMetadata[new I.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let D = a.createContext(null);
  function C() {
    let t2 = a.use(D);
    if (!t2) throw Error("useCarousel must be used within a <Carousel />");
    return t2;
  }
  t.s(["Carousel", 0, function({ orientation: t2 = "horizontal", opts: e2, setApi: n2, plugins: r2, className: o2, children: s2, ...u2 }) {
    let [l2, c2] = q({ ...e2, axis: "horizontal" === t2 ? "x" : "y" }, r2), [d2, f2] = a.useState(false), [m2, p2] = a.useState(false), g2 = a.useCallback((t3) => {
      t3 && (f2(t3.canScrollPrev()), p2(t3.canScrollNext()));
    }, []), x2 = a.useCallback(() => {
      c2?.scrollPrev();
    }, [c2]), h2 = a.useCallback(() => {
      c2?.scrollNext();
    }, [c2]), y2 = a.useCallback((t3) => {
      "ArrowLeft" === t3.key ? (t3.preventDefault(), x2()) : "ArrowRight" === t3.key && (t3.preventDefault(), h2());
    }, [x2, h2]);
    return a.useEffect(() => {
      c2 && n2 && n2(c2);
    }, [c2, n2]), a.useEffect(() => {
      if (c2) return g2(c2), c2.on("reInit", g2), c2.on("select", g2), () => {
        c2?.off("select", g2);
      };
    }, [c2, g2]), (0, i.jsx)(D.Provider, { value: { api: c2, canScrollNext: m2, canScrollPrev: d2, carouselRef: l2, opts: e2, orientation: t2 || (e2?.axis === "y" ? "vertical" : "horizontal"), scrollNext: h2, scrollPrev: x2 }, children: (0, i.jsx)("div", { onKeyDownCapture: y2, className: (0, N.cn)("relative", o2), role: "region", "aria-roledescription": "carousel", "data-slot": "carousel", ...u2, children: s2 }) });
  }, "CarouselContent", 0, function({ className: t2, ...e2 }) {
    let { carouselRef: n2, orientation: r2 } = C();
    return (0, i.jsx)("div", { ref: n2, className: "overflow-hidden", "data-slot": "carousel-content", children: (0, i.jsx)("div", { className: (0, N.cn)("flex", { "-ml-4": "horizontal" === r2 }, { "-mt-4 flex-col": "horizontal" !== r2 }, t2), ...e2 }) });
  }, "CarouselItem", 0, function({ className: t2, ...e2 }) {
    let { orientation: n2 } = C();
    return (0, i.jsx)("div", { role: "group", "aria-roledescription": "slide", "data-slot": "carousel-item", className: (0, N.cn)("min-w-0 shrink-0 grow-0 basis-full", { "pl-4": "horizontal" === n2 }, { "pt-4": "horizontal" !== n2 }, t2), ...e2 });
  }], 551392);
}, 136035, (t) => {
  t.q("/_next/static/immutable/media/browserbase.311xyiikr61ob.png");
}, 912269, (t) => {
  t.q("/_next/static/immutable/media/cursor.0auf0dzl3mox5.png");
}, 729420, 227398, (t) => {
  "use strict";
  let e = { src: t.i(912269).default, width: 430, height: 454, blurWidth: 8, blurHeight: 8, blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAlElEQVR42oWPMQqEMAAE8wBF8QcWgthbW1naKgriM/yC+IuUgeQJqdIH8pjUc3BXBDmOKwa2GJZdIYTgD59QVRXrujLPM2VZPoWu67iuC2MMWmvO86Su6yTs+45zjm3bKIri3TJNUxKO4yDGSAiBvu+x1rIsSxLatkUphfee+76RUtI0zXNknueM48gwDGRZ9v3iFy/1eWWP6tB/OgAAAABJRU5ErkJggg==" };
  t.s(["default", 0, e], 729420);
  let n = { src: t.i(936921).default, width: 376, height: 406, blurWidth: 7, blurHeight: 8, blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAS0lEQVR42pWOMQrAQAgE79/3Gyt/YGNhL/gaxXIDB6lMAimGXZgtdnU33lh3qSpk5skhzQxEBFWdkpmx9z6DfzIiICJw9yk/3z5xAaenzvhgQRRCAAAAAElFTkSuQmCC" };
  t.s(["default", 0, n], 227398);
}, 107614, (t) => {
  t.q("/_next/static/immutable/media/dropbox.02ox0mwl273xu.png");
}, 936921, (t) => {
  t.q("/_next/static/immutable/media/elevenlabs.29qajjsj5vjvb.png");
}, 63558, (t) => {
  t.q("/_next/static/immutable/media/granola.05iydegr23f5g.png");
}, 524199, (t) => {
  t.q("/_next/static/immutable/media/harvey.2h4ac858ph470.png");
}, 516597, (t) => {
  t.q("/_next/static/immutable/media/linear.1v5yzs9__96h_.png");
}, 113553, (t) => {
  t.q("/_next/static/immutable/media/notion-square.2h0iafxpo7pxb.png");
}, 241225, (t) => {
  t.q("/_next/static/immutable/media/openai.1q3ldnamzp2nd.png");
}, 931034, (t) => {
  t.q("/_next/static/immutable/media/ramp.096s8_leqotah.png");
}, 622618, (t) => {
  t.q("/_next/static/immutable/media/shopify.0uhh5_ktvytqn.png");
}, 667e3, (t) => {
  t.q("/_next/static/immutable/media/hero-slack-avatar.06yrawpz2a498.jpg");
}, 143329, (t) => {
  t.q("/_next/static/immutable/media/avatar-1.14js51ue_a48u.jpg");
}, 280071, (t) => {
  t.q("/_next/static/immutable/media/avatar.1o9_vp_7y2rqg.png");
}, 418386, (t) => {
  t.q("/_next/static/immutable/media/logo.1w86dkvs-5cd_.png");
}, 748448, (t) => {
  t.q("/_next/static/immutable/media/context-radial-mark.2uhsv6v997m9o.png");
}, 568855, (t) => {
  t.q("/_next/static/immutable/media/header-avatar.3clsd4uignt-9.png");
}, 68488, (t) => {
  t.q("/_next/static/immutable/media/owner-amelia.2i4a-uxfxwtin.png");
}, 330608, (t) => {
  t.q("/_next/static/immutable/media/owner-daniel.2iwoaxqbl7g72.png");
}, 367177, (t) => {
  t.q("/_next/static/immutable/media/owner-george.0jfgva5g98bc4.png");
}, 234375, (t) => {
  t.q("/_next/static/immutable/media/owner-isla.3p-wpi0ped5wm.png");
}, 609810, (t) => {
  t.q("/_next/static/immutable/media/owner-maxwell.1c05-qo80-s32.png");
}, 701845, (t) => {
  t.q("/_next/static/immutable/media/owner-nathan.3-kf3xa9n9hi_.png");
}, 12254, (t) => {
  t.q("/_next/static/immutable/media/owner-samuel.0mo8cxzkho_7v.png");
}, 660787, (t) => {
  t.q("/_next/static/immutable/media/owner-theo.1qzho4oxmm0qi.png");
}, 213736, (t) => {
  t.q("/_next/static/immutable/media/apollo.02u38bj2f8xjm.svg");
}, 992732, (t) => {
  t.q("/_next/static/immutable/media/chatgpt.2tk-pok11y62s.svg");
}, 72843, (t) => {
  t.q("/_next/static/immutable/media/claude.2nutjf_0spu_8.svg");
}, 728026, (t) => {
  t.q("/_next/static/immutable/media/fin.1x93s--m0zas0.svg");
}, 192404, (t) => {
  t.q("/_next/static/immutable/media/granola.1e705plmn6543.svg");
}, 155714, (t) => {
  t.q("/_next/static/immutable/media/lemlist.0ysfiovqdgfgg.svg");
}, 667091, (t) => {
  t.q("/_next/static/immutable/media/linear.24toa1a2d23rr.svg");
}, 336335, (t) => {
  t.q("/_next/static/immutable/media/notion.0_83efoo-4zvt.svg");
}, 642415, (t) => {
  t.q("/_next/static/immutable/media/pylon.1bflpjswhguzo.png");
}, 520347, (t) => {
  t.q("/_next/static/immutable/media/slack.0e7mm5wjqbvbr.svg");
}, 195641, (t) => {
  t.q("/_next/static/immutable/media/stripe.3c5to-2h9vh9d.svg");
}, 845400, (t) => {
  "use strict";
  var e = t.i(68982), n = t.i(549174), r = t.i(856757), i = t.i(351188), a = t.i(112086), o = t.i(551360);
  try {
    var s = window;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function u({ width: t2, height: n2, radius: i2 }) {
    let { horizontalRatio: s2, angleRatio: l2, verticalRatio: c2 } = (0, r.useMemo)(() => {
      let e2 = t2 - 2 * i2, r2 = n2 - 2 * i2, a2 = 2 * Math.PI * i2 / 4, o2 = 2 * e2 + 2 * r2 + 4 * a2;
      return { angleRatio: a2 / o2, horizontalRatio: e2 / o2, verticalRatio: r2 / o2 };
    }, [t2, n2, i2]);
    return (0, e.jsx)(a.motion.div, { className: "absolute -inset-px", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1, ease: "easeInOut" }, children: (0, e.jsx)(a.motion.div, { className: (0, o.cn)("h-full w-full", "bg-[conic-gradient(from_var(--angle)_at_var(--x)_var(--y)_in_oklch,#A3ECE900,#A3ECE9_20deg,#709FF5_100deg,#709FF500_120deg)]"), animate: { "--angle": ["-80deg", "-80deg", "10deg", "10deg", "100deg", "100deg", "190deg", "190deg", "280deg"], "--x": [`${i2}px`, `${t2 - i2}px`, `${t2 - i2}px`, `${t2 - i2}px`, `${t2 - i2}px`, `${i2}px`, `${i2}px`, `${i2}px`, `${i2}px`], "--y": [`${i2}px`, `${i2}px`, `${i2}px`, `${n2 - i2}px`, `${n2 - i2}px`, `${n2 - i2}px`, `${n2 - i2}px`, `${i2}px`, `${i2}px`] }, transition: { duration: 4, ease: "linear", repeat: 1 / 0, times: [0, s2, s2 + l2, s2 + l2 + c2, s2 + 2 * l2 + c2, 2 * s2 + 2 * l2 + c2, 2 * s2 + 3 * l2 + c2, 2 * s2 + 3 * l2 + 2 * c2, 2 * s2 + 4 * l2 + 2 * c2] }, style: { borderRadius: i2 } }) });
  }
  var l = t.i(508324);
  try {
    var c = window;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function d({ ...t2 }) {
    return (0, e.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", ...t2, children: (0, e.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.64646 2.64645C4.4512 2.84171 4.4512 3.15829 4.64646 3.35355L7.29291 6L4.64646 8.64645C4.4512 8.84171 4.4512 9.15829 4.64646 9.35355C4.84172 9.54882 5.15831 9.54882 5.35357 9.35355L8.35357 6.35355C8.54883 6.15829 8.54883 5.84171 8.35357 5.64645L5.35357 2.64645C5.15831 2.45118 4.84172 2.45118 4.64646 2.64645Z", fill: "currentColor" }) });
  }
  try {
    var f = window;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["AnimatedKicker", 0, function({ badge: t2, title: a2, link: s2 }) {
    let c2 = (0, r.useRef)(null), f2 = (0, n.useInView)(c2), [m, { width: p, height: g }] = (0, i.useMeasure)();
    return (0, e.jsx)("div", { ref: c2, "data-visual-test": "blackout", children: (0, e.jsxs)(l.AttioLink, { ref: m, className: (0, o.cn)("group relative", "block border border-weak-stroke active:border-subtle-stroke", "transition-colors duration-300 ease-in-out"), style: { borderRadius: 13 }, href: s2.href, target: s2.target, children: [f2 && !!p && !!g && (0, e.jsx)(u, { width: p, height: g, radius: 13 }), (0, e.jsxs)("div", { className: (0, o.cn)("relative flex items-center gap-x-1", "py-[5px] pr-[7px] pl-[11px]", "bg-white-100 hover:bg-[#FBFBFC]", "transition-colors duration-300 ease-in-out", "font-medium text-[13px]/[18px] text-secondary-foreground"), style: { borderRadius: 13 }, children: [t2 && t2.length > 0 && (0, e.jsx)("span", { className: "text-blue-500", children: t2 }), (0, e.jsx)("span", { className: "text-balance", children: a2 }), (0, e.jsx)(d, { className: "transition-transform duration-300 ease-in-out group-hover:-translate-x-px group-hover:duration-50 group-active:translate-x-0 group-active:duration-50 motion-reduce:transition-none" })] })] }) });
  }], 845400);
}, 439222, (t) => {
  t.q("/_next/static/immutable/media/attio-app-layout-header-avatars-3.2yjukc5t7mm7v.jpg");
}, 200375, (t) => {
  t.q("/_next/static/immutable/media/attio-app-layout-sidebar-header-avatar.3mldc_1k2pgtd.png");
}, 399116, (t) => {
  "use strict";
  var e = t.i(68982), n = t.i(551360);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["TextBody", 0, function({ className: t2, style: r2, children: i }) {
    return (0, e.jsx)("span", { className: (0, n.cn)("font-medium text-[7px] leading-[10px] tracking-[-0.14px]", "lg:text-[14px] lg:leading-5 lg:tracking-[-0.28px]", t2), style: r2, children: i });
  }]);
}, 104003, (t) => {
  "use strict";
  var e = t.i(68982), n = t.i(856757), r = t.i(308236), i = t.i(722638), a = t.i(552228), o = t.i(755083), s = t.i(871322), u = t.i(938160), l = t.i(249901), c = t.i(468884), d = t.i(310491);
  try {
    var f = window;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["FinalCta", 0, function() {
    let t2 = (0, n.useRef)(null), f2 = (0, d.useResolvedReducedMotion)();
    return (0, c.useNavigationDynamicDarkMode)({ sectionRef: t2 }), (0, e.jsxs)("section", { ref: t2, className: "dark relative overflow-hidden border-subtle-stroke border-t bg-primary-background text-primary-foreground", children: [(0, e.jsx)("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0", children: (0, e.jsx)("div", { className: "container h-full max-lg:contents", children: (0, e.jsx)("div", { className: "relative h-full w-full", children: (0, e.jsxs)("div", { className: "pointer-events-none absolute inset-0 overflow-hidden [-webkit-mask-image:var(--cta-pattern-mask)] [mask-image:var(--cta-pattern-mask)]", style: { "--cta-pattern-mask": "radial-gradient(ellipse 70% 50% at 50% 50%, transparent 35%, #000 75%)" }, children: [(0, e.jsx)(o.AttioStripes, { className: "absolute inset-0" }), (0, e.jsx)(u.SignalRays, { color: "#8a93a1", count: 6, direction: "up", easeDistance: 0, gridAlignment: "start", initialSpawn: "distributed", maxWidth: s.SIGNAL_MAX_WIDTH, minSpeedFactor: 1, minWidth: s.SIGNAL_MIN_WIDTH, peakOpacity: 0.26, shouldReduceMotion: f2, terminusFromBottom: 0 })] }) }) }) }), (0, e.jsx)(r.AttioContainer, { fullWidthMobile: true, innerProps: { className: "relative z-10" }, children: (0, e.jsx)("div", { className: "grid grid-cols-24", children: (0, e.jsxs)("div", { className: "col-[2/-2] flex flex-col items-center justify-center gap-9 py-30 max-lg:py-20 md:gap-7", children: [(0, e.jsx)("h2", { style: { fontSize: "clamp(36px, calc(26px + 2.5vw), 56px)", letterSpacing: "clamp(-0.84px, calc(-0.12px - 0.06vw), -0.36px)" }, className: "max-w-[12em] text-balance text-center font-display font-medium leading-[1]", children: "Agentic revenue runs on Attio." }), (0, e.jsxs)(i.CtaContainer, { className: "max-md:w-full", children: [(0, e.jsx)("div", { className: "max-md:order-last", children: (0, e.jsx)(l.CtaTalkToSales, { buttonSize: "sm", children: "Talk to sales" }) }), (0, e.jsx)("div", { className: "max-md:w-full", children: (0, e.jsx)(a.CtaGetStarted, { buttonSize: "sm", emailLayout: "row", emailSize: "sm", emailClassName: "mx-auto max-w-xs!", children: "Start for free" }) })] })] }) }) })] });
  }]);
}]);
