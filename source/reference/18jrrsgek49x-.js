;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "27c41bbd-cbe9-040b-8898-78c443ce52e6");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 5095, (e) => {
  "use strict";
  var t, n, r, i, o = e.i(856757), a = e.i(429973);
  try {
    var u = "u" > typeof window ? window : e.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function s(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function c(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? s(Object(n2), true).forEach(function(t3) {
        y(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : s(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function l() {
    l = function() {
      return e2;
    };
    var e2 = {}, t2 = Object.prototype, n2 = t2.hasOwnProperty, r2 = Object.defineProperty || function(e3, t3, n3) {
      e3[t3] = n3.value;
    }, i2 = "function" == typeof Symbol ? Symbol : {}, o2 = i2.iterator || "@@iterator", a2 = i2.asyncIterator || "@@asyncIterator", u2 = i2.toStringTag || "@@toStringTag";
    function s2(e3, t3, n3) {
      return Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }), e3[t3];
    }
    try {
      s2({}, "");
    } catch (e3) {
      s2 = function(e4, t3, n3) {
        return e4[t3] = n3;
      };
    }
    function c2(e3, t3, n3, i3) {
      var o3, a3, u3, s3, c3 = Object.create((t3 && t3.prototype instanceof f2 ? t3 : f2).prototype);
      return r2(c3, "_invoke", { value: (o3 = e3, a3 = n3, u3 = new x2(i3 || []), s3 = "suspendedStart", function(e4, t4) {
        if ("executing" === s3) throw Error("Generator is already running");
        if ("completed" === s3) {
          if ("throw" === e4) throw t4;
          return _2();
        }
        for (u3.method = e4, u3.arg = t4; ; ) {
          var n4 = u3.delegate;
          if (n4) {
            var r3 = (function e5(t5, n5) {
              var r4 = n5.method, i5 = t5.iterator[r4];
              if (void 0 === i5) return n5.delegate = null, "throw" === r4 && t5.iterator.return && (n5.method = "return", n5.arg = void 0, e5(t5, n5), "throw" === n5.method) || "return" !== r4 && (n5.method = "throw", n5.arg = TypeError("The iterator does not provide a '" + r4 + "' method")), d2;
              var o4 = h2(i5, t5.iterator, n5.arg);
              if ("throw" === o4.type) return n5.method = "throw", n5.arg = o4.arg, n5.delegate = null, d2;
              var a4 = o4.arg;
              return a4 ? a4.done ? (n5[t5.resultName] = a4.value, n5.next = t5.nextLoc, "return" !== n5.method && (n5.method = "next", n5.arg = void 0), n5.delegate = null, d2) : a4 : (n5.method = "throw", n5.arg = TypeError("iterator result is not an object"), n5.delegate = null, d2);
            })(n4, u3);
            if (r3) {
              if (r3 === d2) continue;
              return r3;
            }
          }
          if ("next" === u3.method) u3.sent = u3._sent = u3.arg;
          else if ("throw" === u3.method) {
            if ("suspendedStart" === s3) throw s3 = "completed", u3.arg;
            u3.dispatchException(u3.arg);
          } else "return" === u3.method && u3.abrupt("return", u3.arg);
          s3 = "executing";
          var i4 = h2(o3, a3, u3);
          if ("normal" === i4.type) {
            if (s3 = u3.done ? "completed" : "suspendedYield", i4.arg === d2) continue;
            return { value: i4.arg, done: u3.done };
          }
          "throw" === i4.type && (s3 = "completed", u3.method = "throw", u3.arg = i4.arg);
        }
      }) }), c3;
    }
    function h2(e3, t3, n3) {
      try {
        return { type: "normal", arg: e3.call(t3, n3) };
      } catch (e4) {
        return { type: "throw", arg: e4 };
      }
    }
    e2.wrap = c2;
    var d2 = {};
    function f2() {
    }
    function p2() {
    }
    function v2() {
    }
    var y2 = {};
    s2(y2, o2, function() {
      return this;
    });
    var m2 = Object.getPrototypeOf, g2 = m2 && m2(m2(P2([])));
    g2 && g2 !== t2 && n2.call(g2, o2) && (y2 = g2);
    var w2 = v2.prototype = f2.prototype = Object.create(y2);
    function b2(e3) {
      ["next", "throw", "return"].forEach(function(t3) {
        s2(e3, t3, function(e4) {
          return this._invoke(t3, e4);
        });
      });
    }
    function k2(e3, t3) {
      var i3;
      r2(this, "_invoke", { value: function(r3, o3) {
        function a3() {
          return new t3(function(i4, a4) {
            !(function r4(i5, o4, a5, u3) {
              var s3 = h2(e3[i5], e3, o4);
              if ("throw" !== s3.type) {
                var c3 = s3.arg, l2 = c3.value;
                return l2 && "object" == typeof l2 && n2.call(l2, "__await") ? t3.resolve(l2.__await).then(function(e4) {
                  r4("next", e4, a5, u3);
                }, function(e4) {
                  r4("throw", e4, a5, u3);
                }) : t3.resolve(l2).then(function(e4) {
                  c3.value = e4, a5(c3);
                }, function(e4) {
                  return r4("throw", e4, a5, u3);
                });
              }
              u3(s3.arg);
            })(r3, o3, i4, a4);
          });
        }
        return i3 = i3 ? i3.then(a3, a3) : a3();
      } });
    }
    function E2(e3) {
      var t3 = { tryLoc: e3[0] };
      1 in e3 && (t3.catchLoc = e3[1]), 2 in e3 && (t3.finallyLoc = e3[2], t3.afterLoc = e3[3]), this.tryEntries.push(t3);
    }
    function T2(e3) {
      var t3 = e3.completion || {};
      t3.type = "normal", delete t3.arg, e3.completion = t3;
    }
    function x2(e3) {
      this.tryEntries = [{ tryLoc: "root" }], e3.forEach(E2, this), this.reset(true);
    }
    function P2(e3) {
      if (e3) {
        var t3 = e3[o2];
        if (t3) return t3.call(e3);
        if ("function" == typeof e3.next) return e3;
        if (!isNaN(e3.length)) {
          var r3 = -1, i3 = function t4() {
            for (; ++r3 < e3.length; ) if (n2.call(e3, r3)) return t4.value = e3[r3], t4.done = false, t4;
            return t4.value = void 0, t4.done = true, t4;
          };
          return i3.next = i3;
        }
      }
      return { next: _2 };
    }
    function _2() {
      return { value: void 0, done: true };
    }
    return p2.prototype = v2, r2(w2, "constructor", { value: v2, configurable: true }), r2(v2, "constructor", { value: p2, configurable: true }), p2.displayName = s2(v2, u2, "GeneratorFunction"), e2.isGeneratorFunction = function(e3) {
      var t3 = "function" == typeof e3 && e3.constructor;
      return !!t3 && (t3 === p2 || "GeneratorFunction" === (t3.displayName || t3.name));
    }, e2.mark = function(e3) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e3, v2) : (e3.__proto__ = v2, s2(e3, u2, "GeneratorFunction")), e3.prototype = Object.create(w2), e3;
    }, e2.awrap = function(e3) {
      return { __await: e3 };
    }, b2(k2.prototype), s2(k2.prototype, a2, function() {
      return this;
    }), e2.AsyncIterator = k2, e2.async = function(t3, n3, r3, i3, o3) {
      void 0 === o3 && (o3 = Promise);
      var a3 = new k2(c2(t3, n3, r3, i3), o3);
      return e2.isGeneratorFunction(n3) ? a3 : a3.next().then(function(e3) {
        return e3.done ? e3.value : a3.next();
      });
    }, b2(w2), s2(w2, u2, "Generator"), s2(w2, o2, function() {
      return this;
    }), s2(w2, "toString", function() {
      return "[object Generator]";
    }), e2.keys = function(e3) {
      var t3 = Object(e3), n3 = [];
      for (var r3 in t3) n3.push(r3);
      return n3.reverse(), function e4() {
        for (; n3.length; ) {
          var r4 = n3.pop();
          if (r4 in t3) return e4.value = r4, e4.done = false, e4;
        }
        return e4.done = true, e4;
      };
    }, e2.values = P2, x2.prototype = { constructor: x2, reset: function(e3) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(T2), !e3) for (var t3 in this) "t" === t3.charAt(0) && n2.call(this, t3) && !isNaN(+t3.slice(1)) && (this[t3] = void 0);
    }, stop: function() {
      this.done = true;
      var e3 = this.tryEntries[0].completion;
      if ("throw" === e3.type) throw e3.arg;
      return this.rval;
    }, dispatchException: function(e3) {
      if (this.done) throw e3;
      var t3 = this;
      function r3(n3, r4) {
        return a3.type = "throw", a3.arg = e3, t3.next = n3, r4 && (t3.method = "next", t3.arg = void 0), !!r4;
      }
      for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
        var o3 = this.tryEntries[i3], a3 = o3.completion;
        if ("root" === o3.tryLoc) return r3("end");
        if (o3.tryLoc <= this.prev) {
          var u3 = n2.call(o3, "catchLoc"), s3 = n2.call(o3, "finallyLoc");
          if (u3 && s3) {
            if (this.prev < o3.catchLoc) return r3(o3.catchLoc, true);
            if (this.prev < o3.finallyLoc) return r3(o3.finallyLoc);
          } else if (u3) {
            if (this.prev < o3.catchLoc) return r3(o3.catchLoc, true);
          } else {
            if (!s3) throw Error("try statement without catch or finally");
            if (this.prev < o3.finallyLoc) return r3(o3.finallyLoc);
          }
        }
      }
    }, abrupt: function(e3, t3) {
      for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
        var i3 = this.tryEntries[r3];
        if (i3.tryLoc <= this.prev && n2.call(i3, "finallyLoc") && this.prev < i3.finallyLoc) {
          var o3 = i3;
          break;
        }
      }
      o3 && ("break" === e3 || "continue" === e3) && o3.tryLoc <= t3 && t3 <= o3.finallyLoc && (o3 = null);
      var a3 = o3 ? o3.completion : {};
      return a3.type = e3, a3.arg = t3, o3 ? (this.method = "next", this.next = o3.finallyLoc, d2) : this.complete(a3);
    }, complete: function(e3, t3) {
      if ("throw" === e3.type) throw e3.arg;
      return "break" === e3.type || "continue" === e3.type ? this.next = e3.arg : "return" === e3.type ? (this.rval = this.arg = e3.arg, this.method = "return", this.next = "end") : "normal" === e3.type && t3 && (this.next = t3), d2;
    }, finish: function(e3) {
      for (var t3 = this.tryEntries.length - 1; t3 >= 0; --t3) {
        var n3 = this.tryEntries[t3];
        if (n3.finallyLoc === e3) return this.complete(n3.completion, n3.afterLoc), T2(n3), d2;
      }
    }, catch: function(e3) {
      for (var t3 = this.tryEntries.length - 1; t3 >= 0; --t3) {
        var n3 = this.tryEntries[t3];
        if (n3.tryLoc === e3) {
          var r3 = n3.completion;
          if ("throw" === r3.type) {
            var i3 = r3.arg;
            T2(n3);
          }
          return i3;
        }
      }
      throw Error("illegal catch attempt");
    }, delegateYield: function(e3, t3, n3) {
      return this.delegate = { iterator: P2(e3), resultName: t3, nextLoc: n3 }, "next" === this.method && (this.arg = void 0), d2;
    } }, e2;
  }
  function h(e2, t2, n2, r2, i2, o2, a2) {
    try {
      var u2 = e2[o2](a2), s2 = u2.value;
    } catch (e3) {
      n2(e3);
      return;
    }
    u2.done ? t2(s2) : Promise.resolve(s2).then(r2, i2);
  }
  function d(e2) {
    return function() {
      var t2 = this, n2 = arguments;
      return new Promise(function(r2, i2) {
        var o2 = e2.apply(t2, n2);
        function a2(e3) {
          h(o2, r2, i2, a2, u2, "next", e3);
        }
        function u2(e3) {
          h(o2, r2, i2, a2, u2, "throw", e3);
        }
        a2(void 0);
      });
    };
  }
  function f(e2, t2) {
    if (!(e2 instanceof t2)) throw TypeError("Cannot call a class as a function");
  }
  function p(e2, t2) {
    for (var n2 = 0; n2 < t2.length; n2++) {
      var r2 = t2[n2];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, T(r2.key), r2);
    }
  }
  function v(e2, t2, n2) {
    return t2 && p(e2.prototype, t2), n2 && p(e2, n2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
  }
  function y(e2, t2, n2) {
    return (t2 = T(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function m(e2) {
    return (m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
      return e3.__proto__ || Object.getPrototypeOf(e3);
    })(e2);
  }
  function g(e2, t2) {
    return (g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
      return e3.__proto__ = t3, e3;
    })(e2, t2);
  }
  function w() {
    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return false;
    if ("function" == typeof Proxy) return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (e2) {
      return false;
    }
  }
  function b(e2, t2, n2) {
    return (b = w() ? Reflect.construct.bind() : function(e3, t3, n3) {
      var r2 = [null];
      r2.push.apply(r2, t3);
      var i2 = new (Function.bind.apply(e3, r2))();
      return n3 && g(i2, n3.prototype), i2;
    }).apply(null, arguments);
  }
  function k(e2) {
    var t2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
    return (k = function(e3) {
      if (null === e3 || -1 === Function.toString.call(e3).indexOf("[native code]")) return e3;
      if ("function" != typeof e3) throw TypeError("Super expression must either be null or a function");
      if (void 0 !== t2) {
        if (t2.has(e3)) return t2.get(e3);
        t2.set(e3, n2);
      }
      function n2() {
        return b(e3, arguments, m(this).constructor);
      }
      return n2.prototype = Object.create(e3.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), g(n2, e3);
    })(e2);
  }
  function E(e2) {
    if (void 0 === e2) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e2;
  }
  function T(e2) {
    var t2 = (function(e3, t3) {
      if ("object" != typeof e3 || null === e3) return e3;
      var n2 = e3[Symbol.toPrimitive];
      if (void 0 !== n2) {
        var r2 = n2.call(e3, t3 || "default");
        if ("object" != typeof r2) return r2;
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e3);
    })(e2, "string");
    return "symbol" == typeof t2 ? t2 : String(t2);
  }
  var x = "[object global]" === {}.toString.call(e.g);
  function P(e2, t2) {
    return 0 === e2.indexOf(t2.toLowerCase()) ? e2 : "".concat(t2.toLowerCase()).concat(e2.substr(0, 1).toUpperCase()).concat(e2.substr(1));
  }
  function _(e2) {
    return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(e2);
  }
  function M(e2) {
    return /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/.test(e2);
  }
  function j() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t2 = e2.id, n2 = e2.url, r2 = t2 || n2;
    if (!r2) throw Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
    if (!isNaN(parseFloat(r2)) && isFinite(r2) && Math.floor(r2) == r2) return "https://vimeo.com/".concat(r2);
    if (_(r2)) return r2.replace("http:", "https:");
    if (t2) throw TypeError("\u201C".concat(t2, "\u201D is not a valid video id."));
    throw TypeError("\u201C".concat(r2, "\u201D is not a vimeo.com url."));
  }
  var O = function(e2, t2, n2) {
    var r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "addEventListener", i2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "removeEventListener", o2 = "string" == typeof t2 ? [t2] : t2;
    return o2.forEach(function(t3) {
      e2[r2](t3, n2);
    }), { cancel: function() {
      return o2.forEach(function(t3) {
        return e2[i2](t3, n2);
      });
    } };
  }, A = void 0 !== Array.prototype.indexOf, C = "u" > typeof window && void 0 !== window.postMessage;
  if (!x && (!A || !C)) throw Error("Sorry, the Vimeo Player API is not available in this browser.");
  var S = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : e.g;
  !(function(e2) {
    if (!e2.WeakMap) {
      var t2 = Object.prototype.hasOwnProperty, n2 = Object.defineProperty && (function() {
        try {
          return 1 === Object.defineProperty({}, "x", { value: 1 }).x;
        } catch (e3) {
        }
      })(), r2 = function(e3, t3, r3) {
        n2 ? Object.defineProperty(e3, t3, { configurable: true, writable: true, value: r3 }) : e3[t3] = r3;
      };
      e2.WeakMap = (function() {
        function e3() {
          if (void 0 === this) throw TypeError("Constructor WeakMap requires 'new'");
          if (r2(this, "_id", "_WeakMap_" + o2() + "." + o2()), arguments.length > 0) throw TypeError("WeakMap iterable is not supported");
        }
        function n3(e4, n4) {
          if (!i2(e4) || !t2.call(e4, "_id")) throw TypeError(n4 + " method called on incompatible receiver " + typeof e4);
        }
        function o2() {
          return Math.random().toString().substring(2);
        }
        return r2(e3.prototype, "delete", function(e4) {
          if (n3(this, "delete"), !i2(e4)) return false;
          var t3 = e4[this._id];
          return !!t3 && t3[0] === e4 && (delete e4[this._id], true);
        }), r2(e3.prototype, "get", function(e4) {
          if (n3(this, "get"), i2(e4)) {
            var t3 = e4[this._id];
            if (t3 && t3[0] === e4) return t3[1];
          }
        }), r2(e3.prototype, "has", function(e4) {
          if (n3(this, "has"), !i2(e4)) return false;
          var t3 = e4[this._id];
          return !!t3 && t3[0] === e4;
        }), r2(e3.prototype, "set", function(e4, t3) {
          if (n3(this, "set"), !i2(e4)) throw TypeError("Invalid value used as weak map key");
          var o3 = e4[this._id];
          return o3 && o3[0] === e4 ? o3[1] = t3 : r2(e4, this._id, [e4, t3]), this;
        }), r2(e3, "_polyfill", true), e3;
      })();
    }
    function i2(e3) {
      return Object(e3) === e3;
    }
  })("u" > typeof globalThis ? globalThis : "u" > typeof self ? self : "u" > typeof window ? window : S);
  var L = ((function(e2) {
    var t2;
    t2 = "Promise", S[t2] = S[t2] || (function() {
      var e3, t3, n2, r2 = Object.prototype.toString, i2 = "u" > typeof setImmediate ? function(e4) {
        return setImmediate(e4);
      } : setTimeout;
      try {
        Object.defineProperty({}, "x", {}), e3 = function(e4, t4, n3, r3) {
          return Object.defineProperty(e4, t4, { value: n3, writable: true, configurable: false !== r3 });
        };
      } catch (t4) {
        e3 = function(e4, t5, n3) {
          return e4[t5] = n3, e4;
        };
      }
      function o2(e4, r3) {
        n2.add(e4, r3), t3 || (t3 = i2(n2.drain));
      }
      function a2(e4) {
        var t4, n3 = typeof e4;
        return null != e4 && ("object" == n3 || "function" == n3) && (t4 = e4.then), "function" == typeof t4 && t4;
      }
      function u2() {
        for (var e4 = 0; e4 < this.chain.length; e4++) !(function(e5, t4, n3) {
          var r3, i3;
          try {
            false === t4 ? n3.reject(e5.msg) : (r3 = true === t4 ? e5.msg : t4.call(void 0, e5.msg)) === n3.promise ? n3.reject(TypeError("Promise-chain cycle")) : (i3 = a2(r3)) ? i3.call(r3, n3.resolve, n3.reject) : n3.resolve(r3);
          } catch (e6) {
            n3.reject(e6);
          }
        })(this, 1 === this.state ? this.chain[e4].success : this.chain[e4].failure, this.chain[e4]);
        this.chain.length = 0;
      }
      function s2(e4) {
        var t4, n3 = this;
        if (!n3.triggered) {
          n3.triggered = true, n3.def && (n3 = n3.def);
          try {
            (t4 = a2(e4)) ? o2(function() {
              var r3 = new h2(n3);
              try {
                t4.call(e4, function() {
                  s2.apply(r3, arguments);
                }, function() {
                  c2.apply(r3, arguments);
                });
              } catch (e5) {
                c2.call(r3, e5);
              }
            }) : (n3.msg = e4, n3.state = 1, n3.chain.length > 0 && o2(u2, n3));
          } catch (e5) {
            c2.call(new h2(n3), e5);
          }
        }
      }
      function c2(e4) {
        var t4 = this;
        !t4.triggered && (t4.triggered = true, t4.def && (t4 = t4.def), t4.msg = e4, t4.state = 2, t4.chain.length > 0 && o2(u2, t4));
      }
      function l2(e4, t4, n3, r3) {
        for (var i3 = 0; i3 < t4.length; i3++) !(function(i4) {
          e4.resolve(t4[i4]).then(function(e5) {
            n3(i4, e5);
          }, r3);
        })(i3);
      }
      function h2(e4) {
        this.def = e4, this.triggered = false;
      }
      function d2(e4) {
        this.promise = e4, this.state = 0, this.triggered = false, this.chain = [], this.msg = void 0;
      }
      function f2(e4) {
        if ("function" != typeof e4) throw TypeError("Not a function");
        if (0 !== this.__NPO__) throw TypeError("Not a promise");
        this.__NPO__ = 1;
        var t4 = new d2(this);
        this.then = function(e5, n3) {
          var r3 = { success: "function" != typeof e5 || e5, failure: "function" == typeof n3 && n3 };
          return r3.promise = new this.constructor(function(e6, t5) {
            if ("function" != typeof e6 || "function" != typeof t5) throw TypeError("Not a function");
            r3.resolve = e6, r3.reject = t5;
          }), t4.chain.push(r3), 0 !== t4.state && o2(u2, t4), r3.promise;
        }, this.catch = function(e5) {
          return this.then(void 0, e5);
        };
        try {
          e4.call(void 0, function(e5) {
            s2.call(t4, e5);
          }, function(e5) {
            c2.call(t4, e5);
          });
        } catch (e5) {
          c2.call(t4, e5);
        }
      }
      n2 = /* @__PURE__ */ (function() {
        var e4, n3, r3;
        function i3(e5, t4) {
          this.fn = e5, this.self = t4, this.next = void 0;
        }
        return { add: function(t4, o3) {
          r3 = new i3(t4, o3), n3 ? n3.next = r3 : e4 = r3, n3 = r3, r3 = void 0;
        }, drain: function() {
          var r4 = e4;
          for (e4 = n3 = t3 = void 0; r4; ) r4.fn.call(r4.self), r4 = r4.next;
        } };
      })();
      var p2 = e3({}, "constructor", f2, false);
      return f2.prototype = p2, e3(p2, "__NPO__", 0, false), e3(f2, "resolve", function(e4) {
        return e4 && "object" == typeof e4 && 1 === e4.__NPO__ ? e4 : new this(function(t4, n3) {
          if ("function" != typeof t4 || "function" != typeof n3) throw TypeError("Not a function");
          t4(e4);
        });
      }), e3(f2, "reject", function(e4) {
        return new this(function(t4, n3) {
          if ("function" != typeof t4 || "function" != typeof n3) throw TypeError("Not a function");
          n3(e4);
        });
      }), e3(f2, "all", function(e4) {
        var t4 = this;
        return "[object Array]" != r2.call(e4) ? t4.reject(TypeError("Not an array")) : 0 === e4.length ? t4.resolve([]) : new t4(function(n3, r3) {
          if ("function" != typeof n3 || "function" != typeof r3) throw TypeError("Not a function");
          var i3 = e4.length, o3 = Array(i3), a3 = 0;
          l2(t4, e4, function(e5, t5) {
            o3[e5] = t5, ++a3 === i3 && n3(o3);
          }, r3);
        });
      }), e3(f2, "race", function(e4) {
        var t4 = this;
        return "[object Array]" != r2.call(e4) ? t4.reject(TypeError("Not an array")) : new t4(function(n3, r3) {
          if ("function" != typeof n3 || "function" != typeof r3) throw TypeError("Not a function");
          l2(t4, e4, function(e5, t5) {
            n3(t5);
          }, r3);
        });
      }), f2;
    })(), e2.exports && (e2.exports = S[t2]);
  })(t = { exports: {} }, t.exports), t.exports), N = /* @__PURE__ */ new WeakMap();
  function R(e2, t2, n2) {
    var r2 = N.get(e2.element) || {};
    t2 in r2 || (r2[t2] = []), r2[t2].push(n2), N.set(e2.element, r2);
  }
  function F(e2, t2) {
    return (N.get(e2.element) || {})[t2] || [];
  }
  function q(e2, t2, n2) {
    var r2 = N.get(e2.element) || {};
    if (!r2[t2]) return true;
    if (!n2) return r2[t2] = [], N.set(e2.element, r2), true;
    var i2 = r2[t2].indexOf(n2);
    return -1 !== i2 && r2[t2].splice(i2, 1), N.set(e2.element, r2), r2[t2] && 0 === r2[t2].length;
  }
  function I(e2) {
    if ("string" == typeof e2) try {
      e2 = JSON.parse(e2);
    } catch (e3) {
      return console.warn(e3), {};
    }
    return e2;
  }
  function V(e2, t2, n2) {
    if (e2.element.contentWindow && e2.element.contentWindow.postMessage) {
      var r2 = { method: t2 };
      void 0 !== n2 && (r2.value = n2);
      var i2 = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
      i2 >= 8 && i2 < 10 && (r2 = JSON.stringify(r2)), e2.element.contentWindow.postMessage(r2, e2.origin);
    }
  }
  var W = ["airplay", "audio_tracks", "audiotrack", "autopause", "autoplay", "background", "byline", "cc", "chapter_id", "chapters", "chromecast", "color", "colors", "controls", "dnt", "end_time", "fullscreen", "height", "id", "initial_quality", "interactive_params", "keyboard", "loop", "maxheight", "max_quality", "maxwidth", "min_quality", "muted", "play_button_position", "playsinline", "portrait", "preload", "progress_bar", "quality", "quality_selector", "responsive", "skipping_forward", "speed", "start_time", "texttrack", "thumbnail_id", "title", "transcript", "transparent", "unmute_button", "url", "vimeo_logo", "volume", "watch_full_video", "width"];
  function H(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return W.reduce(function(t3, n2) {
      var r2 = e2.getAttribute("data-vimeo-".concat(n2));
      return (r2 || "" === r2) && (t3[n2] = "" === r2 ? 1 : r2), t3;
    }, t2);
  }
  function D(e2, t2) {
    var n2 = e2.html;
    if (!t2) throw TypeError("An element must be provided");
    if (null !== t2.getAttribute("data-vimeo-initialized")) return t2.querySelector("iframe");
    var r2 = document.createElement("div");
    return r2.innerHTML = n2, t2.appendChild(r2.firstChild), t2.setAttribute("data-vimeo-initialized", "true"), t2.querySelector("iframe");
  }
  function z(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function(r2, i2) {
      if (!_(e2)) throw TypeError("\u201C".concat(e2, "\u201D is not a vimeo.com url."));
      var o2 = (function(e3) {
        for (var t3 = (e3 || "").match(/^(?:https?:)?(?:\/\/)?([^/?]+)/), n3 = (t3 && t3[1] || "").replace("player.", ""), r3 = 0, i3 = [".videoji.hk", ".vimeo.work", ".videoji.cn"]; r3 < i3.length; r3++) {
          var o3 = i3[r3];
          if (n3.endsWith(o3)) return n3;
        }
        return "vimeo.com";
      })(e2), a2 = "https://".concat(o2, "/api/oembed.json?url=").concat(encodeURIComponent(e2));
      for (var u2 in t2) t2.hasOwnProperty(u2) && (a2 += "&".concat(u2, "=").concat(encodeURIComponent(t2[u2])));
      var s2 = "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
      s2.open("GET", a2, true), s2.onload = function() {
        if (404 === s2.status) return void i2(Error("\u201C".concat(e2, "\u201D was not found.")));
        if (403 === s2.status) return void i2(Error("\u201C".concat(e2, "\u201D is not embeddable.")));
        try {
          var t3 = JSON.parse(s2.responseText);
          if (403 === t3.domain_status_code) {
            D(t3, n2), i2(Error("\u201C".concat(e2, "\u201D is not embeddable.")));
            return;
          }
          r2(t3);
        } catch (e3) {
          i2(e3);
        }
      }, s2.onerror = function() {
        var e3 = s2.status ? " (".concat(s2.status, ")") : "";
        i2(Error("There was an error fetching the embed code from Vimeo".concat(e3, ".")));
      }, s2.send();
    });
  }
  var U = { role: "viewer", autoPlayMuted: true, allowedDrift: 0.3, maxAllowedDrift: 1, minCheckInterval: 0.1, maxRateAdjustment: 0.2, maxTimeToCatchUp: 1 }, $ = (function(e2) {
    if ("function" != typeof e2 && null !== e2) throw TypeError("Super expression must either be null or a function");
    a2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: a2, writable: true, configurable: true } }), Object.defineProperty(a2, "prototype", { writable: false }), e2 && g(a2, e2);
    var t2, n2, r2, i2, o2 = (t2 = w(), function() {
      var e3, n3 = m(a2);
      e3 = t2 ? Reflect.construct(n3, arguments, m(this).constructor) : n3.apply(this, arguments);
      if (e3 && ("object" == typeof e3 || "function" == typeof e3)) return e3;
      if (void 0 !== e3) throw TypeError("Derived constructors may only return object or undefined");
      return E(this);
    });
    function a2(e3, t3) {
      var n3, r3, i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, u2 = arguments.length > 3 ? arguments[3] : void 0;
      return f(this, a2), y(E(r3 = o2.call(this)), "logger", void 0), y(E(r3), "speedAdjustment", 0), y(E(r3), "adjustSpeed", (n3 = d(l().mark(function e4(t4, n4) {
        var i4;
        return l().wrap(function(e5) {
          for (; ; ) switch (e5.prev = e5.next) {
            case 0:
              if (r3.speedAdjustment !== n4) {
                e5.next = 2;
                break;
              }
              return e5.abrupt("return");
            case 2:
              return e5.next = 4, t4.getPlaybackRate();
            case 4:
              return e5.t0 = e5.sent, e5.t1 = r3.speedAdjustment, e5.t2 = e5.t0 - e5.t1, e5.t3 = n4, i4 = e5.t2 + e5.t3, r3.log("New playbackRate:  ".concat(i4)), e5.next = 12, t4.setPlaybackRate(i4);
            case 12:
              r3.speedAdjustment = n4;
            case 13:
            case "end":
              return e5.stop();
          }
        }, e4);
      })), function(e4, t4) {
        return n3.apply(this, arguments);
      })), r3.logger = u2, r3.init(t3, e3, c(c({}, U), i3)), r3;
    }
    return v(a2, [{ key: "disconnect", value: function() {
      this.dispatchEvent(new Event("disconnect"));
    } }, { key: "init", value: (n2 = d(l().mark(function e3(t3, n3, r3) {
      var i3, o3, a3, u2 = this;
      return l().wrap(function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            return e4.next = 2, this.waitForTOReadyState(t3, "open");
          case 2:
            if ("viewer" !== r3.role) {
              e4.next = 10;
              break;
            }
            return e4.next = 5, this.updatePlayer(t3, n3, r3);
          case 5:
            i3 = O(t3, "change", function() {
              return u2.updatePlayer(t3, n3, r3);
            }), o3 = this.maintainPlaybackPosition(t3, n3, r3), this.addEventListener("disconnect", function() {
              o3.cancel(), i3.cancel();
            }), e4.next = 14;
            break;
          case 10:
            return e4.next = 12, this.updateTimingObject(t3, n3);
          case 12:
            a3 = O(n3, ["seeked", "play", "pause", "ratechange"], function() {
              return u2.updateTimingObject(t3, n3);
            }, "on", "off"), this.addEventListener("disconnect", function() {
              return a3.cancel();
            });
          case 14:
          case "end":
            return e4.stop();
        }
      }, e3, this);
    })), function(e3, t3, r3) {
      return n2.apply(this, arguments);
    }) }, { key: "updateTimingObject", value: (r2 = d(l().mark(function e3(t3, n3) {
      return l().wrap(function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            return e4.t0 = t3, e4.next = 3, n3.getCurrentTime();
          case 3:
            return e4.t1 = e4.sent, e4.next = 6, n3.getPaused();
          case 6:
            if (!e4.sent) {
              e4.next = 10;
              break;
            }
            e4.t2 = 0, e4.next = 13;
            break;
          case 10:
            return e4.next = 12, n3.getPlaybackRate();
          case 12:
            e4.t2 = e4.sent;
          case 13:
            e4.t3 = e4.t2, e4.t4 = { position: e4.t1, velocity: e4.t3 }, e4.t0.update.call(e4.t0, e4.t4);
          case 16:
          case "end":
            return e4.stop();
        }
      }, e3);
    })), function(e3, t3) {
      return r2.apply(this, arguments);
    }) }, { key: "updatePlayer", value: (i2 = d(l().mark(function e3(t3, n3, r3) {
      var i3, o3, a3;
      return l().wrap(function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            if (o3 = (i3 = t3.query()).position, a3 = i3.velocity, "number" == typeof o3 && n3.setCurrentTime(o3), "number" != typeof a3) {
              e4.next = 25;
              break;
            }
            if (0 !== a3) {
              e4.next = 11;
              break;
            }
            return e4.next = 6, n3.getPaused();
          case 6:
            if (e4.t0 = e4.sent, false !== e4.t0) {
              e4.next = 9;
              break;
            }
            n3.pause();
          case 9:
            e4.next = 25;
            break;
          case 11:
            if (!(a3 > 0)) {
              e4.next = 25;
              break;
            }
            return e4.next = 14, n3.getPaused();
          case 14:
            if (e4.t1 = e4.sent, true !== e4.t1) {
              e4.next = 19;
              break;
            }
            return e4.next = 18, n3.play().catch((function() {
              var e5 = d(l().mark(function e6(t4) {
                return l().wrap(function(e7) {
                  for (; ; ) switch (e7.prev = e7.next) {
                    case 0:
                      if (!("NotAllowedError" === t4.name && r3.autoPlayMuted)) {
                        e7.next = 5;
                        break;
                      }
                      return e7.next = 3, n3.setMuted(true);
                    case 3:
                      return e7.next = 5, n3.play().catch(function(e8) {
                        return console.error("Couldn't play the video from TimingSrcConnector. Error:", e8);
                      });
                    case 5:
                    case "end":
                      return e7.stop();
                  }
                }, e6);
              }));
              return function(t4) {
                return e5.apply(this, arguments);
              };
            })());
          case 18:
            this.updatePlayer(t3, n3, r3);
          case 19:
            return e4.next = 21, n3.getPlaybackRate();
          case 21:
            if (e4.t2 = e4.sent, e4.t3 = a3, e4.t2 === e4.t3) {
              e4.next = 25;
              break;
            }
            n3.setPlaybackRate(a3);
          case 25:
          case "end":
            return e4.stop();
        }
      }, e3, this);
    })), function(e3, t3, n3) {
      return i2.apply(this, arguments);
    }) }, { key: "maintainPlaybackPosition", value: function(e3, t3, n3) {
      var r3, i3 = this, o3 = n3.allowedDrift, a3 = n3.maxAllowedDrift, u2 = n3.minCheckInterval, s2 = n3.maxRateAdjustment, c2 = n3.maxTimeToCatchUp, h2 = 1e3 * Math.min(c2, Math.max(u2, a3)), f2 = (r3 = d(l().mark(function n4() {
        var r4, u3, h3, d2, f3;
        return l().wrap(function(n5) {
          for (; ; ) switch (n5.prev = n5.next) {
            case 0:
              if (n5.t0 = 0 === e3.query().velocity, n5.t0) {
                n5.next = 6;
                break;
              }
              return n5.next = 4, t3.getPaused();
            case 4:
              n5.t1 = n5.sent, n5.t0 = true === n5.t1;
            case 6:
              if (!n5.t0) {
                n5.next = 8;
                break;
              }
              return n5.abrupt("return");
            case 8:
              return n5.t2 = e3.query().position, n5.next = 11, t3.getCurrentTime();
            case 11:
              if (n5.t3 = n5.sent, u3 = Math.abs(r4 = n5.t2 - n5.t3), i3.log("Drift: ".concat(r4)), !(u3 > a3)) {
                n5.next = 22;
                break;
              }
              return n5.next = 18, i3.adjustSpeed(t3, 0);
            case 18:
              t3.setCurrentTime(e3.query().position), i3.log("Resync by currentTime"), n5.next = 29;
              break;
            case 22:
              if (!(u3 > o3)) {
                n5.next = 29;
                break;
              }
              return f3 = (h3 = u3 / c2) < (d2 = s2) ? (d2 - h3) / 2 : d2, n5.next = 28, i3.adjustSpeed(t3, f3 * Math.sign(r4));
            case 28:
              i3.log("Resync by playbackRate");
            case 29:
            case "end":
              return n5.stop();
          }
        }, n4);
      })), function() {
        return r3.apply(this, arguments);
      }), p2 = setInterval(function() {
        return f2();
      }, h2);
      return { cancel: function() {
        return clearInterval(p2);
      } };
    } }, { key: "log", value: function(e3) {
      var t3;
      null == (t3 = this.logger) || t3.call(this, "TimingSrcConnector: ".concat(e3));
    } }, { key: "waitForTOReadyState", value: function(e3, t3) {
      return new Promise(function(n3) {
        !(function r3() {
          e3.readyState === t3 ? n3() : e3.addEventListener("readystatechange", r3, { once: true });
        })();
      });
    } }]), a2;
  })(k(EventTarget)), B = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakMap(), Y = {}, Q = (function() {
    var e2;
    function t2(e3) {
      var n2, r2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (f(this, t2), window.jQuery && e3 instanceof jQuery && (e3.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), e3 = e3[0]), "u" > typeof document && "string" == typeof e3 && (e3 = document.getElementById(e3)), !((n2 = e3) && 1 === n2.nodeType && "nodeName" in n2 && n2.ownerDocument && n2.ownerDocument.defaultView)) throw TypeError("You must pass either a valid element or a valid id.");
      if ("IFRAME" !== e3.nodeName) {
        var o2 = e3.querySelector("iframe");
        o2 && (e3 = o2);
      }
      if ("IFRAME" === e3.nodeName && !_(e3.getAttribute("src") || "")) throw Error("The player element passed isn\u2019t a Vimeo embed.");
      if (B.has(e3)) return B.get(e3);
      this._window = e3.ownerDocument.defaultView, this.element = e3, this.origin = "*";
      var a2 = new L(function(t3, n3) {
        if (r2._onMessage = function(e4) {
          if (_(e4.origin) && r2.element.contentWindow === e4.source) {
            "*" === r2.origin && (r2.origin = e4.origin);
            var i3 = I(e4.data);
            if (i3 && "error" === i3.event && i3.data && "ready" === i3.data.method) {
              var o4 = Error(i3.data.message);
              o4.name = i3.data.name, n3(o4);
              return;
            }
            var a3 = i3 && "ready" === i3.event, u3 = i3 && "ping" === i3.method;
            if (a3 || u3) {
              r2.element.setAttribute("data-ready", "true"), t3();
              return;
            }
            var s2 = i3;
            s2 = I(s2);
            var c2, l2 = [];
            if (s2.event) "error" === s2.event && F(r2, s2.data.method).forEach(function(e5) {
              var t4 = Error(s2.data.message);
              t4.name = s2.data.name, e5.reject(t4), q(r2, s2.data.method, e5);
            }), l2 = F(r2, "event:".concat(s2.event)), c2 = s2.data;
            else if (s2.method) {
              var h2 = (function(e5, t4) {
                var n4 = F(e5, t4);
                if (n4.length < 1) return false;
                var r3 = n4.shift();
                return q(e5, t4, r3), r3;
              })(r2, s2.method);
              h2 && (l2.push(h2), c2 = s2.value);
            }
            l2.forEach(function(e5) {
              try {
                if ("function" == typeof e5) return void e5.call(r2, c2);
                e5.resolve(c2);
              } catch (e6) {
              }
            });
          }
        }, r2._window.addEventListener("message", r2._onMessage), "IFRAME" !== r2.element.nodeName) {
          var o3 = H(e3, i2);
          z(j(o3), o3, e3).then(function(t4) {
            var n4, i3, o4 = D(t4, e3);
            return r2.element = o4, r2._originalElement = e3, n4 = e3, i3 = N.get(n4), N.set(o4, i3), N.delete(n4), B.set(r2.element, r2), t4;
          }).catch(n3);
        }
      });
      if (G.set(this, a2), B.set(this.element, this), "IFRAME" === this.element.nodeName && V(this, "ping"), Y.isEnabled) {
        var u2 = function() {
          return Y.exit();
        };
        this.fullscreenchangeHandler = function() {
          Y.isFullscreen ? R(r2, "event:exitFullscreen", u2) : q(r2, "event:exitFullscreen", u2), r2.ready().then(function() {
            V(r2, "fullscreenchange", Y.isFullscreen);
          });
        }, Y.on("fullscreenchange", this.fullscreenchangeHandler);
      }
      return this;
    }
    return v(t2, [{ key: "callMethod", value: function(e3) {
      for (var t3 = this, n2 = arguments.length, r2 = Array(n2 > 1 ? n2 - 1 : 0), i2 = 1; i2 < n2; i2++) r2[i2 - 1] = arguments[i2];
      if (null == e3) throw TypeError("You must pass a method name.");
      return new L(function(n3, i3) {
        return t3.ready().then(function() {
          R(t3, e3, { resolve: n3, reject: i3 }), V(t3, e3, r2);
        }).catch(i3);
      });
    } }, { key: "get", value: function(e3) {
      var t3 = this;
      return new L(function(n2, r2) {
        return e3 = P(e3, "get"), t3.ready().then(function() {
          R(t3, e3, { resolve: n2, reject: r2 }), V(t3, e3);
        }).catch(r2);
      });
    } }, { key: "set", value: function(e3, t3) {
      var n2 = this;
      return new L(function(r2, i2) {
        if (e3 = P(e3, "set"), null == t3) throw TypeError("There must be a value to set.");
        return n2.ready().then(function() {
          R(n2, e3, { resolve: r2, reject: i2 }), V(n2, e3, t3);
        }).catch(i2);
      });
    } }, { key: "on", value: function(e3, t3) {
      if (!e3) throw TypeError("You must pass an event name.");
      if (!t3) throw TypeError("You must pass a callback function.");
      if ("function" != typeof t3) throw TypeError("The callback must be a function.");
      0 === F(this, "event:".concat(e3)).length && this.callMethod("addEventListener", e3).catch(function() {
      }), R(this, "event:".concat(e3), t3);
    } }, { key: "off", value: function(e3, t3) {
      if (!e3) throw TypeError("You must pass an event name.");
      if (t3 && "function" != typeof t3) throw TypeError("The callback must be a function.");
      q(this, "event:".concat(e3), t3) && this.callMethod("removeEventListener", e3).catch(function(e4) {
      });
    } }, { key: "loadVideo", value: function(e3) {
      return this.callMethod("loadVideo", e3);
    } }, { key: "ready", value: function() {
      var e3 = G.get(this) || new L(function(e4, t3) {
        t3(Error("Unknown player. Probably unloaded."));
      });
      return L.resolve(e3);
    } }, { key: "addCuePoint", value: function(e3) {
      var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return this.callMethod("addCuePoint", { time: e3, data: t3 });
    } }, { key: "removeCuePoint", value: function(e3) {
      return this.callMethod("removeCuePoint", e3);
    } }, { key: "enableTextTrack", value: function(e3, t3) {
      if (!e3) throw TypeError("You must pass a language.");
      return this.callMethod("enableTextTrack", { language: e3, kind: t3 });
    } }, { key: "disableTextTrack", value: function() {
      return this.callMethod("disableTextTrack");
    } }, { key: "pause", value: function() {
      return this.callMethod("pause");
    } }, { key: "play", value: function() {
      return this.callMethod("play");
    } }, { key: "requestFullscreen", value: function() {
      return Y.isEnabled ? Y.request(this.element) : this.callMethod("requestFullscreen");
    } }, { key: "exitFullscreen", value: function() {
      return Y.isEnabled ? Y.exit() : this.callMethod("exitFullscreen");
    } }, { key: "getFullscreen", value: function() {
      return Y.isEnabled ? L.resolve(Y.isFullscreen) : this.get("fullscreen");
    } }, { key: "requestPictureInPicture", value: function() {
      return this.callMethod("requestPictureInPicture");
    } }, { key: "exitPictureInPicture", value: function() {
      return this.callMethod("exitPictureInPicture");
    } }, { key: "getPictureInPicture", value: function() {
      return this.get("pictureInPicture");
    } }, { key: "remotePlaybackPrompt", value: function() {
      return this.callMethod("remotePlaybackPrompt");
    } }, { key: "unload", value: function() {
      return this.callMethod("unload");
    } }, { key: "destroy", value: function() {
      var e3 = this;
      return new L(function(t3) {
        if (G.delete(e3), B.delete(e3.element), e3._originalElement && (B.delete(e3._originalElement), e3._originalElement.removeAttribute("data-vimeo-initialized")), e3.element && "IFRAME" === e3.element.nodeName && e3.element.parentNode && (e3.element.parentNode.parentNode && e3._originalElement && e3._originalElement !== e3.element.parentNode ? e3.element.parentNode.parentNode.removeChild(e3.element.parentNode) : e3.element.parentNode.removeChild(e3.element)), e3.element && "DIV" === e3.element.nodeName && e3.element.parentNode) {
          e3.element.removeAttribute("data-vimeo-initialized");
          var n2 = e3.element.querySelector("iframe");
          n2 && n2.parentNode && (n2.parentNode.parentNode && e3._originalElement && e3._originalElement !== n2.parentNode ? n2.parentNode.parentNode.removeChild(n2.parentNode) : n2.parentNode.removeChild(n2));
        }
        e3._window.removeEventListener("message", e3._onMessage), Y.isEnabled && Y.off("fullscreenchange", e3.fullscreenchangeHandler), t3();
      });
    } }, { key: "getAutopause", value: function() {
      return this.get("autopause");
    } }, { key: "setAutopause", value: function(e3) {
      return this.set("autopause", e3);
    } }, { key: "getBuffered", value: function() {
      return this.get("buffered");
    } }, { key: "getCameraProps", value: function() {
      return this.get("cameraProps");
    } }, { key: "setCameraProps", value: function(e3) {
      return this.set("cameraProps", e3);
    } }, { key: "getChapters", value: function() {
      return this.get("chapters");
    } }, { key: "getCurrentChapter", value: function() {
      return this.get("currentChapter");
    } }, { key: "getColor", value: function() {
      return this.get("color");
    } }, { key: "getColors", value: function() {
      return L.all([this.get("colorOne"), this.get("colorTwo"), this.get("colorThree"), this.get("colorFour")]);
    } }, { key: "setColor", value: function(e3) {
      return this.set("color", e3);
    } }, { key: "setColors", value: function(e3) {
      if (!Array.isArray(e3)) return new L(function(e4, t4) {
        return t4(TypeError("Argument must be an array."));
      });
      var t3 = new L(function(e4) {
        return e4(null);
      }), n2 = [e3[0] ? this.set("colorOne", e3[0]) : t3, e3[1] ? this.set("colorTwo", e3[1]) : t3, e3[2] ? this.set("colorThree", e3[2]) : t3, e3[3] ? this.set("colorFour", e3[3]) : t3];
      return L.all(n2);
    } }, { key: "getCuePoints", value: function() {
      return this.get("cuePoints");
    } }, { key: "getCurrentTime", value: function() {
      return this.get("currentTime");
    } }, { key: "setCurrentTime", value: function(e3) {
      return this.set("currentTime", e3);
    } }, { key: "getDuration", value: function() {
      return this.get("duration");
    } }, { key: "getEnded", value: function() {
      return this.get("ended");
    } }, { key: "getLoop", value: function() {
      return this.get("loop");
    } }, { key: "setLoop", value: function(e3) {
      return this.set("loop", e3);
    } }, { key: "setMuted", value: function(e3) {
      return this.set("muted", e3);
    } }, { key: "getMuted", value: function() {
      return this.get("muted");
    } }, { key: "getPaused", value: function() {
      return this.get("paused");
    } }, { key: "getPlaybackRate", value: function() {
      return this.get("playbackRate");
    } }, { key: "setPlaybackRate", value: function(e3) {
      return this.set("playbackRate", e3);
    } }, { key: "getPlayed", value: function() {
      return this.get("played");
    } }, { key: "getQualities", value: function() {
      return this.get("qualities");
    } }, { key: "getQuality", value: function() {
      return this.get("quality");
    } }, { key: "setQuality", value: function(e3) {
      return this.set("quality", e3);
    } }, { key: "getRemotePlaybackAvailability", value: function() {
      return this.get("remotePlaybackAvailability");
    } }, { key: "getRemotePlaybackState", value: function() {
      return this.get("remotePlaybackState");
    } }, { key: "getSeekable", value: function() {
      return this.get("seekable");
    } }, { key: "getSeeking", value: function() {
      return this.get("seeking");
    } }, { key: "getTextTracks", value: function() {
      return this.get("textTracks");
    } }, { key: "getVideoEmbedCode", value: function() {
      return this.get("videoEmbedCode");
    } }, { key: "getVideoId", value: function() {
      return this.get("videoId");
    } }, { key: "getVideoTitle", value: function() {
      return this.get("videoTitle");
    } }, { key: "getVideoWidth", value: function() {
      return this.get("videoWidth");
    } }, { key: "getVideoHeight", value: function() {
      return this.get("videoHeight");
    } }, { key: "getVideoUrl", value: function() {
      return this.get("videoUrl");
    } }, { key: "getVolume", value: function() {
      return this.get("volume");
    } }, { key: "setVolume", value: function(e3) {
      return this.set("volume", e3);
    } }, { key: "setTimingSrc", value: (e2 = d(l().mark(function e3(t3, n2) {
      var r2, i2 = this;
      return l().wrap(function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            if (t3) {
              e4.next = 2;
              break;
            }
            throw TypeError("A Timing Object must be provided.");
          case 2:
            return e4.next = 4, this.ready();
          case 4:
            return r2 = new $(this, t3, n2), V(this, "notifyTimingObjectConnect"), r2.addEventListener("disconnect", function() {
              return V(i2, "notifyTimingObjectDisconnect");
            }), e4.abrupt("return", r2);
          case 8:
          case "end":
            return e4.stop();
        }
      }, e3, this);
    })), function(t3, n2) {
      return e2.apply(this, arguments);
    }) }]), t2;
  })();
  x || (r = { fullscreenchange: (n = (function() {
    for (var e2, t2 = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n2 = 0, r2 = t2.length, i2 = {}; n2 < r2; n2++) if ((e2 = t2[n2]) && e2[1] in document) {
      for (n2 = 0; n2 < e2.length; n2++) i2[t2[0][n2]] = e2[n2];
      return i2;
    }
    return false;
  })()).fullscreenchange, fullscreenerror: n.fullscreenerror }, Object.defineProperties(i = { request: function(e2) {
    return new Promise(function(t2, r2) {
      var o2 = function e3() {
        i.off("fullscreenchange", e3), t2();
      };
      i.on("fullscreenchange", o2);
      var a2 = (e2 = e2 || document.documentElement)[n.requestFullscreen]();
      a2 instanceof Promise && a2.then(o2).catch(r2);
    });
  }, exit: function() {
    return new Promise(function(e2, t2) {
      if (!i.isFullscreen) return void e2();
      var r2 = function t3() {
        i.off("fullscreenchange", t3), e2();
      };
      i.on("fullscreenchange", r2);
      var o2 = document[n.exitFullscreen]();
      o2 instanceof Promise && o2.then(r2).catch(t2);
    });
  }, on: function(e2, t2) {
    var n2 = r[e2];
    n2 && document.addEventListener(n2, t2);
  }, off: function(e2, t2) {
    var n2 = r[e2];
    n2 && document.removeEventListener(n2, t2);
  } }, { isFullscreen: { get: function() {
    return !!document[n.fullscreenElement];
  } }, element: { enumerable: true, get: function() {
    return document[n.fullscreenElement];
  } }, isEnabled: { enumerable: true, get: function() {
    return !!document[n.fullscreenEnabled];
  } } }), Y = i, (function() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, t2 = [].slice.call(e2.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")), n2 = function(e3) {
      "console" in window && console.error && console.error("There was an error creating an embed: ".concat(e3));
    };
    t2.forEach(function(e3) {
      try {
        if (null !== e3.getAttribute("data-vimeo-defer")) return;
        var t3 = H(e3), r2 = j(t3);
        z(r2, t3, e3).then(function(t4) {
          return D(t4, e3);
        }).catch(n2);
      } catch (e4) {
        n2(e4);
      }
    });
  })(), (function() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
    window.VimeoPlayerResizeEmbeds_ || (window.VimeoPlayerResizeEmbeds_ = true, window.addEventListener("message", function(t2) {
      if (_(t2.origin) && t2.data && "spacechange" === t2.data.event) {
        for (var n2 = e2.querySelectorAll("iframe"), r2 = 0; r2 < n2.length; r2++) if (n2[r2].contentWindow === t2.source) {
          n2[r2].parentElement.style.paddingBottom = "".concat(t2.data.data[0].bottom, "px");
          break;
        }
      }
    }));
  })(), (function() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
    window.VimeoSeoMetadataAppended || (window.VimeoSeoMetadataAppended = true, window.addEventListener("message", function(t2) {
      if (_(t2.origin)) {
        var n2 = I(t2.data);
        if (n2 && "ready" === n2.event) for (var r2 = e2.querySelectorAll("iframe"), i2 = 0; i2 < r2.length; i2++) {
          var o2 = r2[i2], a2 = o2.contentWindow === t2.source;
          M(o2.src) && a2 && new Q(o2).callMethod("appendVideoMetadata", window.location.href);
        }
      }
    }));
  })(), (function() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
    if (!window.VimeoCheckedUrlTimeParam) {
      window.VimeoCheckedUrlTimeParam = true;
      var t2 = function(e3) {
        "console" in window && console.error && console.error("There was an error getting video Id: ".concat(e3));
      };
      window.addEventListener("message", function(n2) {
        if (_(n2.origin)) {
          var r2 = I(n2.data);
          if (r2 && "ready" === r2.event) for (var i2 = e2.querySelectorAll("iframe"), o2 = 0; o2 < i2.length; o2++) !(function() {
            var e3 = i2[o2], r3 = e3.contentWindow === n2.source;
            if (M(e3.src) && r3) {
              var a2 = new Q(e3);
              a2.getVideoId().then(function(e4) {
                var t3 = new RegExp("[?&]vimeo_t_".concat(e4, "=([^&#]*)")).exec(window.location.href);
                if (t3 && t3[1]) {
                  var n3 = decodeURI(t3[1]);
                  a2.setCurrentTime(n3);
                }
              }).catch(t2);
            }
          })();
        }
      });
    }
  })());
  try {
    var J = "u" > typeof window ? window : e.g;
    J._sentryModuleMetadata = J._sentryModuleMetadata || {}, J._sentryModuleMetadata[new J.Error().stack] = Object.assign({}, J._sentryModuleMetadata[new J.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let K = /vimeo\.com\/(video\/|event\/)?(\d+)(?:\/([\w-]+))?/;
  function X(e2, t2 = {}) {
    var n2;
    let r2 = { src: (function(e3, t3) {
      if (!e3.src) return;
      let n3 = new URL(e3.src), r3 = e3.src.match(K), i2 = null == r3 ? void 0 : r3[1], o2 = null == r3 ? void 0 : r3[2], a2 = n3.searchParams.get("h") || (null == r3 ? void 0 : r3[3]), u2 = { controls: "" === e3.controls ? null : 0, autoplay: e3.autoplay, loop: e3.loop, muted: e3.muted, playsinline: e3.playsinline, preload: e3.preload ?? "metadata", transparent: false, autopause: e3.autopause, h: a2, ...t3.config };
      if ("event/" === i2) {
        let e4 = a2 ? `/${a2}` : "";
        return delete u2.h, `https://vimeo.com/event/${o2}/embed${e4}?${et(u2)}`;
      }
      return `https://player.vimeo.com/video/${o2}?${et(u2)}`;
    })(e2, t2), frameborder: 0, width: "100%", height: "100%", allow: "accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture" };
    return t2.config && (r2["data-config"] = JSON.stringify(t2.config)), (null == (n2 = t2.config) ? void 0 : n2.referrerpolicy) && (r2.referrerpolicy = t2.config.referrerpolicy), `
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
      }
      :host(:not([controls])) {
        pointer-events: none;
      }
    </style>
    <iframe${(function(e3) {
      let t3 = "";
      for (let n3 in e3) {
        let r3 = e3[n3];
        "" === r3 ? t3 += ` ${ee(n3)}` : t3 += ` ${ee(n3)}="${ee(`${r3}`)}"`;
      }
      return t3;
    })(r2)}></iframe>
  `;
  }
  class Z extends (0, a.MediaPlayedRangesMixin)(globalThis.HTMLElement ?? class {
  }) {
    static getTemplateHTML = X;
    static shadowRootOptions = { mode: "open" };
    static observedAttributes = ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src"];
    loadComplete = new en();
    #e;
    #t;
    #n;
    #r = 0;
    #i = NaN;
    #o = false;
    #a = !this.autoplay;
    #u = 1;
    #s = 0;
    #c = 0;
    #l = false;
    #h = 1;
    #d = NaN;
    #f = NaN;
    #p = null;
    constructor() {
      super(), this.#v("config");
    }
    requestFullscreen() {
      var e2, t2;
      return null == (t2 = null == (e2 = this.api) ? void 0 : e2.requestFullscreen) ? void 0 : t2.call(e2);
    }
    exitFullscreen() {
      var e2, t2;
      return null == (t2 = null == (e2 = this.api) ? void 0 : e2.exitFullscreen) ? void 0 : t2.call(e2);
    }
    requestPictureInPicture() {
      var e2, t2;
      return null == (t2 = null == (e2 = this.api) ? void 0 : e2.requestPictureInPicture) ? void 0 : t2.call(e2);
    }
    exitPictureInPicture() {
      var e2, t2;
      return null == (t2 = null == (e2 = this.api) ? void 0 : e2.exitPictureInPicture) ? void 0 : t2.call(e2);
    }
    get config() {
      return this.#p;
    }
    set config(e2) {
      this.#p = e2;
    }
    async load() {
      var e2;
      if (this.#e) return;
      let t2 = !this.#t;
      this.#t && (this.loadComplete = new en()), this.#t = true, await (this.#e = Promise.resolve()), this.#e = null, this.#r = 0, this.#i = NaN, this.#o = false, this.#a = !this.autoplay, this.#u = 1, this.#s = 0, this.#c = 0, this.#l = false, this.#h = 1, this.#c = 0, this.#d = NaN, this.#f = NaN, this.dispatchEvent(new Event("emptied"));
      let n2 = this.api;
      if (this.api = null, !this.src) return;
      this.dispatchEvent(new Event("loadstart"));
      let r2 = { autoplay: this.autoplay, controls: this.controls, loop: this.loop, muted: this.defaultMuted, playsinline: this.playsInline, preload: this.preload ?? "metadata", transparent: false, autopause: this.hasAttribute("autopause"), ...this.#p }, i2 = async () => {
        this.#c = 1, this.dispatchEvent(new Event("loadedmetadata")), this.api && (this.#o = await this.api.getMuted(), this.#h = await this.api.getVolume(), this.dispatchEvent(new Event("volumechange")), this.#i = await this.api.getDuration(), this.dispatchEvent(new Event("durationchange"))), this.dispatchEvent(new Event("loadcomplete")), this.loadComplete.resolve();
      };
      if (this.#n) {
        this.api = n2, await this.api.loadVideo({ ...r2, url: this.src }), await i2(), await this.loadComplete;
        return;
      }
      this.#n = true;
      let o2 = null == (e2 = this.shadowRoot) ? void 0 : e2.querySelector("iframe");
      t2 && o2 && (this.#p = JSON.parse(o2.getAttribute("data-config") || "{}")), this.shadowRoot || (this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = X((function(e3) {
        let t3 = {};
        for (let n3 of e3) t3[n3.name] = n3.value;
        return t3;
      })(this.attributes), this), o2 = this.shadowRoot.querySelector("iframe")), this.api = new Q(o2);
      let a2 = document.createElement("video");
      this.textTracks = a2.textTracks, this.api.getTextTracks().then((e3) => {
        e3.forEach((e4) => {
          a2.addTextTrack(e4.kind, e4.label, e4.language);
        });
      }), this.textTracks.addEventListener("change", () => {
        let e3 = Array.from(this.textTracks).find((e4) => "showing" === e4.mode);
        e3 ? this.api.enableTextTrack(e3.language, e3.kind) : this.api.disableTextTrack();
      });
      let u2 = () => {
        this.api.off("loaded", u2), i2();
      };
      this.api.on("loaded", u2), this.api.on("bufferstart", () => {
        this.#a && (this.#a = false, this.dispatchEvent(new Event("play"))), this.dispatchEvent(new Event("waiting"));
      }), this.api.on("play", () => {
        this.#a && (this.#a = false, this.dispatchEvent(new Event("play")));
      }), this.api.on("playing", () => {
        this.#c = 3, this.#a = false, this.dispatchEvent(new Event("playing"));
      }), this.api.on("seeking", () => {
        this.#l = true, this.onSeeking(), this.dispatchEvent(new Event("seeking"));
      }), this.api.on("seeked", async () => {
        this.#l = false, this.#r = await this.api.getCurrentTime().catch(() => this.#r), this.dispatchEvent(new Event("seeked"));
      }), this.api.on("pause", () => {
        this.#a = true, this.dispatchEvent(new Event("pause"));
      }), this.api.on("ended", () => {
        this.#a = true, this.dispatchEvent(new Event("ended"));
      }), this.api.on("ratechange", ({ playbackRate: e3 }) => {
        this.#u = e3, this.dispatchEvent(new Event("ratechange"));
      }), this.api.on("volumechange", async ({ volume: e3 }) => {
        this.#h = e3, this.api && (this.#o = await this.api.getMuted()), this.dispatchEvent(new Event("volumechange"));
      }), this.api.on("durationchange", ({ duration: e3 }) => {
        this.#i = e3, this.dispatchEvent(new Event("durationchange"));
      }), this.api.on("timeupdate", ({ seconds: e3 }) => {
        let t3 = Math.round(100 * e3) / 100;
        this.#r = t3, this.dispatchEvent(new Event("timeupdate"));
      }), this.api.on("progress", ({ seconds: e3 }) => {
        this.#s = e3, this.dispatchEvent(new Event("progress"));
      }), this.api.on("resize", ({ videoWidth: e3, videoHeight: t3 }) => {
        this.#d = e3, this.#f = t3, this.dispatchEvent(new Event("resize"));
      }), await this.loadComplete;
    }
    async attributeChangedCallback(e2, t2, n2) {
      if (t2 !== n2) {
        switch (e2) {
          case "autoplay":
          case "controls":
          case "src":
            return void this.load();
        }
        await this.loadComplete, "loop" === e2 && this.api.setLoop(this.loop);
      }
    }
    async play() {
      var e2;
      this.#a = false, this.dispatchEvent(new Event("play")), await this.loadComplete;
      try {
        await (null == (e2 = this.api) ? void 0 : e2.play());
      } catch (e3) {
        throw this.#a = true, this.dispatchEvent(new Event("pause")), e3;
      }
    }
    async pause() {
      var e2;
      return await this.loadComplete, null == (e2 = this.api) ? void 0 : e2.pause();
    }
    get ended() {
      return this.#r >= this.#i;
    }
    get seeking() {
      return this.#l;
    }
    get readyState() {
      return this.#c;
    }
    get videoWidth() {
      return this.#d;
    }
    get videoHeight() {
      return this.#f;
    }
    get src() {
      return this.getAttribute("src");
    }
    set src(e2) {
      this.src != e2 && this.setAttribute("src", e2);
    }
    get paused() {
      return this.#a;
    }
    get duration() {
      return this.#i;
    }
    get autoplay() {
      return this.hasAttribute("autoplay");
    }
    set autoplay(e2) {
      this.autoplay != e2 && this.toggleAttribute("autoplay", !!e2);
    }
    get buffered() {
      return this.#s > 0 ? er(0, this.#s) : er();
    }
    get controls() {
      return this.hasAttribute("controls");
    }
    set controls(e2) {
      this.controls != e2 && this.toggleAttribute("controls", !!e2);
    }
    get currentTime() {
      return this.#r;
    }
    set currentTime(e2) {
      this.currentTime != e2 && (this.#r = e2, this.loadComplete.then(() => {
        var t2;
        null == (t2 = this.api) || t2.setCurrentTime(e2).catch(() => {
        });
      }));
    }
    get defaultMuted() {
      return this.hasAttribute("muted");
    }
    set defaultMuted(e2) {
      this.defaultMuted != e2 && this.toggleAttribute("muted", !!e2);
    }
    get loop() {
      return this.hasAttribute("loop");
    }
    set loop(e2) {
      this.loop != e2 && this.toggleAttribute("loop", !!e2);
    }
    get muted() {
      return this.#o;
    }
    set muted(e2) {
      this.muted != e2 && (this.#o = e2, this.loadComplete.then(() => {
        var t2;
        null == (t2 = this.api) || t2.setMuted(e2).catch(() => {
        });
      }));
    }
    get playbackRate() {
      return this.#u;
    }
    set playbackRate(e2) {
      this.playbackRate != e2 && (this.#u = e2, this.loadComplete.then(() => {
        var t2;
        null == (t2 = this.api) || t2.setPlaybackRate(e2).catch(() => {
        });
      }));
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
    get volume() {
      return this.#h;
    }
    set volume(e2) {
      this.volume != e2 && (this.#h = e2, this.loadComplete.then(() => {
        var t2;
        null == (t2 = this.api) || t2.setVolume(e2).catch(() => {
        });
      }));
    }
    #v(e2) {
      if (Object.prototype.hasOwnProperty.call(this, e2)) {
        let t2 = this[e2];
        delete this[e2], this[e2] = t2;
      }
    }
  }
  function ee(e2) {
    return e2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/`/g, "&#x60;");
  }
  function et(e2) {
    return String(new URLSearchParams((function(e3) {
      let t2 = {};
      for (let n2 in e3) {
        let r2 = e3[n2];
        true === r2 || "" === r2 ? t2[n2] = 1 : false === r2 ? t2[n2] = 0 : null != r2 && (t2[n2] = r2);
      }
      return t2;
    })(e2)));
  }
  class en extends Promise {
    constructor(e2 = () => {
    }) {
      let t2, n2;
      super((r2, i2) => {
        e2(r2, i2), t2 = r2, n2 = i2;
      }), this.resolve = t2, this.reject = n2;
    }
  }
  function er(e2, t2) {
    return Array.isArray(e2) ? ei(e2) : null == e2 || null == t2 || 0 === e2 && 0 === t2 ? ei([[0, 0]]) : ei([[e2, t2]]);
  }
  function ei(e2) {
    return Object.defineProperties(e2, { start: { value: (t2) => e2[t2][0] }, end: { value: (t2) => e2[t2][1] } }), e2;
  }
  globalThis.customElements && !globalThis.customElements.get("vimeo-video") && globalThis.customElements.define("vimeo-video", Z);
  try {
    var eo = "u" > typeof window ? window : e.g;
    eo._sentryModuleMetadata = eo._sentryModuleMetadata || {}, eo._sentryModuleMetadata[new eo.Error().stack] = Object.assign({}, eo._sentryModuleMetadata[new eo.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var ea = /* @__PURE__ */ new Set(["style", "children", "ref", "key", "suppressContentEditableWarning", "suppressHydrationWarning", "dangerouslySetInnerHTML"]), eu = { className: "class", htmlFor: "for" };
  function es(e2) {
    return e2.toLowerCase();
  }
  function ec(e2) {
    return "boolean" == typeof e2 ? e2 ? "" : void 0 : "function" == typeof e2 ? void 0 : "object" != typeof e2 || null === e2 ? e2 : void 0;
  }
  function el(e2, t2, n2) {
    var r2;
    e2[t2] = n2, null == n2 && t2 in ((null == (r2 = globalThis.HTMLElement) ? void 0 : r2.prototype) ?? {}) && e2.removeAttribute(t2);
  }
  var eh = (function({ react: e2, tagName: t2, elementClass: n2, events: r2, displayName: i2, defaultProps: o2, toAttributeName: a2 = es, toAttributeValue: u2 = ec }) {
    let s2 = Number.parseInt(e2.version) >= 19, c2 = e2.forwardRef((i3, c3) => {
      var l2, h2;
      let d2 = e2.useRef(null), f2 = e2.useRef(/* @__PURE__ */ new Map()), p2 = {}, v2 = {}, y2 = {}, m2 = {};
      for (let [e3, t3] of Object.entries(i3)) {
        if (ea.has(e3)) {
          y2[e3] = t3;
          continue;
        }
        let r3 = a2(eu[e3] ?? e3);
        if (n2.prototype && e3 in n2.prototype && !(e3 in ((null == (l2 = globalThis.HTMLElement) ? void 0 : l2.prototype) ?? {})) && !(null == (h2 = n2.observedAttributes) ? void 0 : h2.some((e4) => e4 === r3))) {
          m2[e3] = t3;
          continue;
        }
        if (e3.startsWith("on")) {
          p2[e3] = t3;
          continue;
        }
        let i4 = u2(t3);
        r3 && null != i4 && (v2[r3] = String(i4), s2 || (y2[r3] = i4)), r3 && s2 && (i4 !== ec(t3) ? y2[r3] = i4 : y2[r3] = t3);
      }
      if ("u" > typeof window) {
        for (let t3 in p2) {
          let n3 = p2[t3], i4 = t3.endsWith("Capture"), o3 = ((null == r2 ? void 0 : r2[t3]) ?? t3.slice(2).toLowerCase()).slice(0, i4 ? -7 : void 0);
          e2.useLayoutEffect(() => {
            let e3 = null == d2 ? void 0 : d2.current;
            if (e3 && "function" == typeof n3) return e3.addEventListener(o3, n3, i4), () => {
              e3.removeEventListener(o3, n3, i4);
            };
          }, [null == d2 ? void 0 : d2.current, n3]);
        }
        e2.useLayoutEffect(() => {
          if (null === d2.current) return;
          let e3 = /* @__PURE__ */ new Map();
          for (let t3 in m2) el(d2.current, t3, m2[t3]), f2.current.delete(t3), e3.set(t3, m2[t3]);
          for (let [e4, t3] of f2.current) el(d2.current, e4, void 0);
          f2.current = e3;
        });
      }
      if ("u" < typeof window && (null == n2 ? void 0 : n2.getTemplateHTML) && (null == n2 ? void 0 : n2.shadowRootOptions)) {
        let { mode: t3, delegatesFocus: r3 } = n2.shadowRootOptions;
        y2.children = [e2.createElement("template", { shadowrootmode: t3, shadowrootdelegatesfocus: r3, dangerouslySetInnerHTML: { __html: n2.getTemplateHTML(v2, i3) }, key: "ce-la-react-ssr-template-shadow-root" }), y2.children];
      }
      return e2.createElement(t2, { ...o2, ...y2, ref: e2.useCallback((e3) => {
        d2.current = e3, "function" == typeof c3 ? c3(e3) : null !== c3 && (c3.current = e3);
      }, [c3]) }, y2.children);
    });
    return c2.displayName = i2 ?? n2.name, c2;
  })({ react: o.default, tagName: "vimeo-video", elementClass: Z, toAttributeName: (e2) => "muted" === e2 ? "" : "defaultMuted" === e2 ? "muted" : es(e2) });
  e.s(["default", 0, eh], 5095);
}]);
