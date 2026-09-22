;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "a35b2613-c0d4-af98-e311-3e417be22a7a");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, { otherChunks: ["static/immutable/chunks/1bd2czkk-l1l7.js", "static/immutable/chunks/0jbbqt8iuty0k.js", "static/immutable/chunks/0bwsd8abe0don.js", "static/immutable/chunks/009wqjxobsq_h.js", "static/immutable/chunks/38pzfgk25espk.js", "static/immutable/chunks/18vkq60r4zunr.js", "static/immutable/chunks/2bislu5x9uy5p.js"], runtimeModuleIds: [679933] }]), (() => {
  let e;
  if (!Array.isArray(globalThis.TURBOPACK)) return;
  var t, r = "/_next/", n = (function() {
    if (null != self.TURBOPACK_ASSET_SUFFIX) return self.TURBOPACK_ASSET_SUFFIX;
    let e2 = document?.currentScript?.getAttribute?.("src") ?? "", t2 = e2.indexOf("?");
    return t2 >= 0 ? e2.slice(t2) : "";
  })(), o = ((t = o || {})[t.Runtime = 0] = "Runtime", t[t.Parent = 1] = "Parent", t[t.Update = 2] = "Update", t);
  let i = /* @__PURE__ */ new WeakMap();
  function l(e2, t2) {
    this.m = e2, this.e = t2;
  }
  let u = l.prototype, s = Object.prototype.hasOwnProperty, c = "u" > typeof Symbol && Symbol.toStringTag;
  function a(e2, t2, r2) {
    s.call(e2, t2) || Object.defineProperty(e2, t2, r2);
  }
  function f(e2, t2) {
    let r2 = e2[t2];
    return r2 || (r2 = p(t2), e2[t2] = r2), r2;
  }
  function p(e2) {
    return { exports: {}, error: void 0, id: e2, namespaceObject: void 0 };
  }
  function h(e2, t2, r2) {
    a(e2, "__esModule", { value: true }), c && a(e2, c, { value: "Module" });
    let n2 = 0;
    for (; n2 < t2.length; ) {
      let r3 = t2[n2++], o2 = t2[n2++];
      if ("number" == typeof o2) if (0 === o2) a(e2, r3, { value: t2[n2++], enumerable: true, writable: false });
      else throw Error(`unexpected tag: ${o2}`);
      else "function" == typeof t2[n2] ? a(e2, r3, { get: o2, set: t2[n2++], enumerable: true }) : a(e2, r3, { get: o2, enumerable: true });
    }
    r2 || Object.seal(e2);
  }
  function d(e2, t2) {
    (null != t2 ? f(this.c, t2) : this.m).exports = e2;
  }
  u.s = function(e2, t2, r2) {
    let n2, o2;
    null != t2 ? o2 = (n2 = f(this.c, t2)).exports : (n2 = this.m, o2 = this.e), n2.namespaceObject = o2, h(o2, e2, r2);
  }, u.j = function(e2, t2) {
    let r2, n2;
    null != t2 ? n2 = (r2 = f(this.c, t2)).exports : (r2 = this.m, n2 = this.e);
    let o2 = (function(e3, t3) {
      let r3 = i.get(e3);
      if (!r3) {
        i.set(e3, r3 = []);
        let n3 = (e4) => {
          if ("default" !== e4) {
            for (let t4 of r3) if (s.call(t4, e4)) return t4;
          }
        };
        e3.exports = e3.namespaceObject = new Proxy(t3, { get(e4, t4) {
          if (s.call(e4, t4) || "default" === t4 || "__esModule" === t4) return Reflect.get(e4, t4);
          let r4 = n3(t4);
          return r4 && Reflect.get(r4, t4);
        }, set: () => false, defineProperty: () => false, deleteProperty: () => false, has: (e4, t4) => !!Reflect.has(e4, t4) || "default" !== t4 && "__esModule" !== t4 && void 0 !== n3(t4), ownKeys(e4) {
          let t4 = Reflect.ownKeys(e4);
          for (let e5 of r3) for (let r4 of Reflect.ownKeys(e5)) "default" === r4 || t4.includes(r4) || t4.push(r4);
          return t4;
        }, getOwnPropertyDescriptor(e4, t4) {
          let r4 = Reflect.getOwnPropertyDescriptor(e4, t4);
          if (r4 || "default" === t4 || "__esModule" === t4) return r4;
          let o3 = n3(t4);
          if (o3) return { enumerable: true, configurable: true, get: () => Reflect.get(o3, t4) };
        } });
      }
      return r3;
    })(r2, n2);
    "object" == typeof e2 && null !== e2 && o2.push(e2);
  }, u.v = d, u.n = function(e2, t2) {
    let r2;
    (r2 = null != t2 ? f(this.c, t2) : this.m).exports = r2.namespaceObject = e2;
  };
  let m = Object.getPrototypeOf ? (e2) => Object.getPrototypeOf(e2) : (e2) => e2.__proto__, b = [null, m({}), m([]), m(m)];
  function y(e2, t2, r2) {
    let n2 = [], o2 = -1;
    for (let t3 = e2; ("object" == typeof t3 || "function" == typeof t3) && !b.includes(t3); t3 = m(t3)) for (let r3 of Object.getOwnPropertyNames(t3)) n2.push(r3, /* @__PURE__ */ (function(e3, t4) {
      return () => e3[t4];
    })(e2, r3)), -1 === o2 && "default" === r3 && (o2 = n2.length - 1);
    return r2 && o2 >= 0 || (o2 >= 0 ? n2.splice(o2, 1, 0, e2) : n2.push("default", 0, e2)), h(t2, n2), t2;
  }
  function g(e2) {
    let t2 = I(e2, this.m);
    if (t2.namespaceObject) return t2.namespaceObject;
    let r2 = t2.exports;
    return t2.namespaceObject = y(r2, "function" == typeof r2 ? function(...e3) {
      return r2.apply(this, e3);
    } : /* @__PURE__ */ Object.create(null), r2 && r2.__esModule);
  }
  function O(e2) {
    let t2 = e2.indexOf("#");
    -1 !== t2 && (e2 = e2.substring(0, t2));
    let r2 = e2.indexOf("?");
    return -1 !== r2 && (e2 = e2.substring(0, r2)), e2;
  }
  u.i = g, u.A = function(e2) {
    return this.r(e2)(g.bind(this));
  }, u.t = "function" == typeof require ? require : function() {
    throw Error("Unexpected use of runtime require");
  }, u.r = function(e2) {
    return I(e2, this.m).exports;
  }, u.f = function(e2) {
    function t2(t3) {
      if (t3 = O(t3), s.call(e2, t3)) return e2[t3].module();
      let r2 = Error(`Cannot find module '${t3}'`);
      throw r2.code = "MODULE_NOT_FOUND", r2;
    }
    return t2.keys = () => Object.keys(e2), t2.resolve = (t3) => {
      if (t3 = O(t3), s.call(e2, t3)) return e2[t3].id();
      let r2 = Error(`Cannot find module '${t3}'`);
      throw r2.code = "MODULE_NOT_FOUND", r2;
    }, t2.import = async (e3) => await t2(e3), t2;
  };
  let k = function(e2) {
    let t2 = new URL(e2, "x:/"), r2 = {};
    for (let e3 in t2) r2[e3] = t2[e3];
    for (let t3 in r2.href = e2, r2.pathname = e2.replace(/[?#].*/, ""), r2.origin = r2.protocol = "", r2.toString = r2.toJSON = (...t4) => e2, r2) Object.defineProperty(this, t3, { enumerable: true, configurable: true, value: r2[t3] });
  };
  function w(e2, t2) {
    throw Error(`Invariant: ${t2(e2)}`);
  }
  k.prototype = URL.prototype, u.U = k, u.z = function(e2) {
    throw Error("dynamic usage of require is not supported");
  }, u.g = globalThis;
  let j = /* @__PURE__ */ Symbol("turbopack queues"), v = /* @__PURE__ */ Symbol("turbopack exports"), R = /* @__PURE__ */ Symbol("turbopack error");
  function C() {
    let e2, t2;
    return { promise: new Promise((r2, n2) => {
      t2 = n2, e2 = r2;
    }), resolve: e2, reject: t2 };
  }
  function U(e2) {
    e2 && 1 !== e2.status && (e2.status = 1, e2.forEach((e3) => e3.queueCount--), e2.forEach((e3) => e3.queueCount-- ? e3.queueCount++ : e3()));
  }
  u.a = function(e2, t2) {
    let r2 = this.m, n2 = t2 ? Object.assign([], { status: -1 }) : void 0, o2 = /* @__PURE__ */ new Set(), { resolve: i2, reject: l2, promise: u2 } = C(), s2 = Object.assign(u2, { [v]: r2.exports, [j]: (e3) => {
      n2 && e3(n2), o2.forEach(e3), s2.catch(() => {
      });
    } }), c2 = { get: () => s2, set(e3) {
      e3 !== s2 && (s2[v] = e3);
    } };
    Object.defineProperty(r2, "exports", c2), Object.defineProperty(r2, "namespaceObject", c2), e2(function(e3) {
      let t3 = e3.map((e4) => {
        if (null !== e4 && "object" == typeof e4) {
          if (j in e4) return e4;
          if (null != e4 && "object" == typeof e4 && "then" in e4 && "function" == typeof e4.then) {
            let t4 = Object.assign([], { status: 0 }), r4 = { [v]: {}, [j]: (e5) => e5(t4) };
            return e4.then((e5) => {
              r4[v] = e5, U(t4);
            }, (e5) => {
              r4[R] = e5, U(t4);
            }), r4;
          }
        }
        return { [v]: e4, [j]: () => {
        } };
      }), r3 = () => t3.map((e4) => {
        if (e4[R]) throw e4[R];
        return e4[v];
      }), { promise: i3, resolve: l3 } = C(), u3 = Object.assign(() => l3(r3), { queueCount: 0 });
      function s3(e4) {
        e4 !== n2 && !o2.has(e4) && (o2.add(e4), e4 && 0 === e4.status && (u3.queueCount++, e4.push(u3)));
      }
      return t3.map((e4) => e4[j](s3)), u3.queueCount ? i3 : r3();
    }, function(e3) {
      e3 ? l2(s2[R] = e3) : i2(s2[v]), U(n2);
    }), n2 && -1 === n2.status && (n2.status = 0);
  };
  let P = l.prototype, $ = /* @__PURE__ */ new Map();
  u.M = $;
  let _ = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
  async function x(e2, t2, r2) {
    let n2;
    if ("string" == typeof r2) return (function(e3, t3, r3) {
      return M(e3, t3, r3);
    })(e2, t2, K(r2));
    let o2 = r2.included || [], i2 = o2.map((e3) => !!$.has(e3) || _.get(e3));
    if (i2.length > 0 && i2.every((e3) => e3)) return void await Promise.all(i2);
    for (let i3 of (n2 = M(e2, t2, K(r2.path)), o2)) _.has(i3) || _.set(i3, n2);
    await n2;
  }
  P.l = function(e2) {
    return x(o.Parent, this.m.id, e2);
  };
  let T = Promise.resolve(void 0), A = /* @__PURE__ */ new WeakMap();
  function M(t2, r2, n2) {
    let i2 = e.loadChunkCached(t2, n2), l2 = A.get(i2);
    if (void 0 === l2) {
      let e2 = A.set.bind(A, i2, T);
      l2 = i2.then(e2).catch((e3) => {
        let i3;
        switch (t2) {
          case o.Runtime:
            i3 = `as a runtime dependency of chunk ${r2}`;
            break;
          case o.Parent:
            i3 = `from module ${r2}`;
            break;
          case o.Update:
            i3 = "from an HMR update";
            break;
          default:
            w(t2, (e4) => `Unknown source type: ${e4}`);
        }
        let l3 = Error(`Failed to load chunk ${n2} ${i3}${e3 ? `: ${e3}` : ""}`, e3 ? { cause: e3 } : void 0);
        throw l3.name = "ChunkLoadError", l3;
      }), A.set(i2, l2);
    }
    return l2;
  }
  P.L = function(e2) {
    var t2, r2;
    return t2 = o.Parent, r2 = this.m.id, M(t2, r2, e2);
  };
  P.R = function(e2) {
    let t2 = this.r(e2);
    return t2?.default ?? t2;
  }, P.P = function(e2) {
    return `/ROOT/${e2 ?? ""}`;
  }, P.F = function(e2) {
    return e2 ? `file:///ROOT/${e2.split("/").map(encodeURIComponent).join("/")}` : "file:///ROOT/";
  }, P.q = function(e2, t2) {
    d.call(this, `${e2}${n}`, t2);
  };
  let q = /[^A-Za-z0-9\-_.!~*'()/]/;
  function K(e2, t2 = r) {
    let o2 = q.test(e2) ? e2.split("/").map(encodeURIComponent).join("/") : e2;
    return `${t2}${o2}${n}`;
  }
  function N(e2, t2) {
    let r2, n2 = e2.indexOf("?");
    if (-1 !== n2) r2 = n2;
    else {
      let t3 = e2.indexOf("#");
      r2 = -1 !== t3 ? t3 : e2.length;
    }
    return r2 >= t2.length && e2.startsWith(t2, r2 - t2.length);
  }
  P.b = r, P.X = n, P.h = K;
  function L(e2) {
    return N(e2, ".css");
  }
  let B = {};
  u.c = B;
  let I = (e2, t2) => {
    let r2 = B[e2];
    if (r2) {
      if (r2.error) throw r2.error;
      return r2;
    }
    return F(e2, o.Parent, t2.id);
  };
  function F(e2, t2, r2) {
    let n2 = $.get(e2);
    if ("function" != typeof n2) throw Error((function(e3, t3, r3) {
      let n3;
      switch (t3) {
        case 0:
          n3 = `as a runtime entry of chunk ${r3}`;
          break;
        case 1:
          n3 = `because it was required from module ${r3}`;
          break;
        case 2:
          n3 = "because of an HMR update";
          break;
        default:
          w(t3, (e4) => `Unknown source type: ${e4}`);
      }
      return `Module ${e3} was instantiated ${n3}, but the module factory is not available.`;
    })(e2, t2, r2));
    let o2 = p(e2), i2 = o2.exports;
    B[e2] = o2;
    let u2 = new l(o2, i2);
    try {
      n2(u2, o2, i2);
    } catch (e3) {
      throw o2.error = e3, e3;
    }
    return o2.namespaceObject && o2.exports !== o2.namespaceObject && y(o2.exports, o2.namespaceObject), o2;
  }
  function D(t2) {
    let r2;
    if (!Array.isArray(t2)) return e.registerChunk(void 0, t2);
    let n2 = (function(e2) {
      if ("string" == typeof e2) return e2;
      if (e2) return { src: e2.getAttribute("src") };
      if ("u" > typeof TURBOPACK_NEXT_CHUNK_URLS) return { src: TURBOPACK_NEXT_CHUNK_URLS.pop() };
      throw Error("chunk path empty but not in a worker");
    })(t2[0]);
    return 2 === t2.length ? r2 = t2[1] : (r2 = void 0, !(function(e2, t3) {
      let r3 = 1;
      for (; r3 < e2.length; ) {
        let n3, o2 = r3 + 1;
        for (; o2 < e2.length && "function" != typeof e2[o2]; ) o2++;
        if (o2 === e2.length) throw Error("malformed chunk format, expected a factory function");
        let i2 = e2[o2];
        for (let i3 = r3; i3 < o2; i3++) {
          let r4 = e2[i3], o3 = t3.get(r4);
          if (o3) {
            n3 = o3;
            break;
          }
        }
        let l2 = n3 ?? i2, u2 = false;
        for (let n4 = r3; n4 < o2; n4++) {
          let r4 = e2[n4];
          t3.has(r4) || (u2 || (l2 === i2 && Object.defineProperty(i2, "name", { value: "module evaluation" }), u2 = true), t3.set(r4, l2));
        }
        r3 = o2 + 1;
      }
    })(t2, $)), e.registerChunk(n2, r2);
  }
  let W = /* @__PURE__ */ new Map();
  function X(e2) {
    let t2 = W.get(e2);
    if (!t2) {
      let r2, n2;
      t2 = { resolved: false, loadingStarted: false, retryAttempts: 0, promise: new Promise((e3, t3) => {
        r2 = e3, n2 = t3;
      }), resolve: () => {
        t2.resolved = true, r2();
      }, reject: n2 }, W.set(e2, t2);
    }
    return t2;
  }
  function z(e2, t2, r2, n2, o2) {
    !(null == n2 || n2 instanceof DOMException && "NetworkError" === n2.name) || r2.retryAttempts >= 1 || W.get(t2) !== r2 ? (W.get(t2) === r2 && W.delete(t2), r2.reject(n2)) : (r2.retryAttempts++, setTimeout(() => {
      r2.resolved || W.get(t2) !== r2 || (o2 ? o2() : (r2.loadingStarted = false, H(e2, t2)));
    }, 200 + Math.floor(401 * Math.random())));
  }
  function H(e2, t2) {
    let r2 = X(t2);
    if (r2.loadingStarted) return r2.promise;
    if (e2 === o.Runtime) return r2.loadingStarted = true, L(t2) && r2.resolve(), r2.promise;
    if ("function" == typeof importScripts) if (L(t2)) ;
    else if (N(t2, ".js")) {
      self.TURBOPACK_NEXT_CHUNK_URLS.push(t2);
      try {
        importScripts(t2);
      } catch (n2) {
        z(e2, t2, r2, n2);
      }
    } else throw Error(`can't infer type of chunk from URL ${t2} in worker`);
    else {
      let n2 = decodeURI(t2);
      if (L(t2)) if (document.querySelectorAll(`link[rel=stylesheet][href="${t2}"],link[rel=stylesheet][href^="${t2}?"],link[rel=stylesheet][href="${n2}"],link[rel=stylesheet][href^="${n2}?"]`).length > 0) r2.resolve();
      else {
        let n3 = () => {
          let o2 = document.createElement("link");
          return o2.rel = "stylesheet", o2.crossOrigin = null, o2.href = t2, o2.onerror = () => {
            let i2 = document.createComment("");
            o2.replaceWith(i2), z(e2, t2, r2, void 0, () => i2.replaceWith(n3()));
          }, o2.onload = () => {
            r2.resolve();
          }, o2;
        };
        document.head.appendChild(n3());
      }
      else if (N(t2, ".js")) {
        let o2 = document.querySelectorAll(`script[src="${t2}"],script[src^="${t2}?"],script[src="${n2}"],script[src^="${n2}?"]`);
        if (o2.length > 0) for (let n3 of Array.from(o2)) n3.addEventListener("error", () => {
          n3.remove(), z(e2, t2, r2);
        }, { once: true });
        else {
          let n3 = document.createElement("script");
          n3.crossOrigin = null, n3.src = t2, n3.onerror = () => {
            n3.remove(), z(e2, t2, r2);
          }, document.head.appendChild(n3);
        }
      } else throw Error(`can't infer type of chunk from URL ${t2}`);
    }
    return r2.loadingStarted = true, r2.promise;
  }
  e = { async registerChunk(e2, t2) {
    let n2;
    if (null != e2 && (n2 = (function(e3) {
      if ("string" == typeof e3) return e3;
      let t3 = decodeURIComponent(e3.src.replace(/[?#].*$/, ""));
      return t3.startsWith(r) ? t3.slice(r.length) : t3;
    })(e2), X("string" == typeof e2 ? K(e2) : e2.src).resolve()), null != t2) {
      for (let e3 of t2.otherChunks) X(K("string" == typeof e3 ? e3 : e3.path));
      if (await Promise.all(t2.otherChunks.map((e3) => {
        var t3;
        return t3 = n2, x(o.Runtime, t3, e3);
      })), t2.runtimeModuleIds.length > 0) for (let e3 of t2.runtimeModuleIds) !(function(e4, t3) {
        let r2 = B[t3];
        if (r2) {
          if (r2.error) throw r2.error;
          return;
        }
        F(t3, o.Runtime, e4);
      })(n2, e3);
    }
  }, loadChunkCached: (e2, t2) => H(e2, t2) };
  var J = globalThis.TURBOPACK;
  globalThis.TURBOPACK = { push: D }, J.forEach(D);
})();
