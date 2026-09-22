;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "941b607f-def0-6729-e76e-35619fb6e29d");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 106824, (e, t, r) => {
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function n() {
    this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
  }
  function i(e2) {
    return "function" == typeof e2;
  }
  function o(e2) {
    return "object" == typeof e2 && null !== e2;
  }
  t.exports = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(e2) {
    if ("number" != typeof e2 || e2 < 0 || isNaN(e2)) throw TypeError("n must be a positive number");
    return this._maxListeners = e2, this;
  }, n.prototype.emit = function(e2) {
    var t2, r2, a2, n2, s, c;
    if (this._events || (this._events = {}), "error" === e2 && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
      if (t2 = arguments[1], t2 instanceof Error) throw t2;
      var u = Error('Uncaught, unspecified "error" event. (' + t2 + ")");
      throw u.context = t2, u;
    }
    if (void 0 === (r2 = this._events[e2])) return false;
    if (i(r2)) switch (arguments.length) {
      case 1:
        r2.call(this);
        break;
      case 2:
        r2.call(this, arguments[1]);
        break;
      case 3:
        r2.call(this, arguments[1], arguments[2]);
        break;
      default:
        n2 = Array.prototype.slice.call(arguments, 1), r2.apply(this, n2);
    }
    else if (o(r2)) for (n2 = Array.prototype.slice.call(arguments, 1), a2 = (c = r2.slice()).length, s = 0; s < a2; s++) c[s].apply(this, n2);
    return true;
  }, n.prototype.addListener = function(e2, t2) {
    var r2;
    if (!i(t2)) throw TypeError("listener must be a function");
    return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e2, i(t2.listener) ? t2.listener : t2), this._events[e2] ? o(this._events[e2]) ? this._events[e2].push(t2) : this._events[e2] = [this._events[e2], t2] : this._events[e2] = t2, o(this._events[e2]) && !this._events[e2].warned && (r2 = void 0 === this._maxListeners ? n.defaultMaxListeners : this._maxListeners) && r2 > 0 && this._events[e2].length > r2 && (this._events[e2].warned = true, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e2].length), "function" == typeof console.trace && console.trace()), this;
  }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e2, t2) {
    if (!i(t2)) throw TypeError("listener must be a function");
    var r2 = false;
    function a2() {
      this.removeListener(e2, a2), r2 || (r2 = true, t2.apply(this, arguments));
    }
    return a2.listener = t2, this.on(e2, a2), this;
  }, n.prototype.removeListener = function(e2, t2) {
    var r2, a2, n2, s;
    if (!i(t2)) throw TypeError("listener must be a function");
    if (!this._events || !this._events[e2]) return this;
    if (n2 = (r2 = this._events[e2]).length, a2 = -1, r2 === t2 || i(r2.listener) && r2.listener === t2) delete this._events[e2], this._events.removeListener && this.emit("removeListener", e2, t2);
    else if (o(r2)) {
      for (s = n2; s-- > 0; ) if (r2[s] === t2 || r2[s].listener && r2[s].listener === t2) {
        a2 = s;
        break;
      }
      if (a2 < 0) return this;
      1 === r2.length ? (r2.length = 0, delete this._events[e2]) : r2.splice(a2, 1), this._events.removeListener && this.emit("removeListener", e2, t2);
    }
    return this;
  }, n.prototype.removeAllListeners = function(e2) {
    var t2, r2;
    if (!this._events) return this;
    if (!this._events.removeListener) return 0 == arguments.length ? this._events = {} : this._events[e2] && delete this._events[e2], this;
    if (0 == arguments.length) {
      for (t2 in this._events) "removeListener" !== t2 && this.removeAllListeners(t2);
      return this.removeAllListeners("removeListener"), this._events = {}, this;
    }
    if (i(r2 = this._events[e2])) this.removeListener(e2, r2);
    else if (r2) for (; r2.length; ) this.removeListener(e2, r2[r2.length - 1]);
    return delete this._events[e2], this;
  }, n.prototype.listeners = function(e2) {
    return this._events && this._events[e2] ? i(this._events[e2]) ? [this._events[e2]] : this._events[e2].slice() : [];
  }, n.prototype.listenerCount = function(e2) {
    if (this._events) {
      var t2 = this._events[e2];
      if (i(t2)) return 1;
      if (t2) return t2.length;
    }
    return 0;
  }, n.listenerCount = function(e2, t2) {
    return e2.listenerCount(t2);
  };
}, 465223, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var r = 0, a = Array(t2); r < t2; r++) a[r] = e2[r];
    return a;
  }]);
}, 494844, 187694, 816131, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function(e2) {
    if (Array.isArray(e2)) return e2;
  }], 494844);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function(e2, t2) {
    var r2, a2, n = null == e2 ? null : "u" > typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
    if (null != n) {
      var i = [], o = true, s = false;
      try {
        for (n = n.call(e2); !(o = (r2 = n.next()).done) && (i.push(r2.value), !t2 || i.length !== t2); o = true) ;
      } catch (e3) {
        s = true, a2 = e3;
      } finally {
        try {
          o || null == n.return || n.return();
        } finally {
          if (s) throw a2;
        }
      }
      return i;
    }
  }], 187694);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function() {
    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }], 816131);
}, 113645, (e) => {
  "use strict";
  var t = e.i(465223);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function(e2) {
    if (Array.isArray(e2)) return (0, t._)(e2);
  }]);
}, 498167, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function(e2) {
    if ("u" > typeof Symbol && null != e2[Symbol.iterator] || null != e2["@@iterator"]) return Array.from(e2);
  }]);
}, 31680, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function() {
    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }]);
}, 164309, 868275, 784544, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function r(e2, t2, r2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
  }
  e.s(["_", 0, r], 868275);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var a2 = null != arguments[t2] ? arguments[t2] : {}, n2 = Object.keys(a2);
      "function" == typeof Object.getOwnPropertySymbols && (n2 = n2.concat(Object.getOwnPropertySymbols(a2).filter(function(e3) {
        return Object.getOwnPropertyDescriptor(a2, e3).enumerable;
      }))), n2.forEach(function(t3) {
        r(e2, t3, a2[t3]);
      });
    }
    return e2;
  }], 164309);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function(e2, t2) {
    return t2 = null != t2 ? t2 : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : (function(e3) {
      var t3 = Object.keys(e3);
      if (Object.getOwnPropertySymbols) {
        var r2 = Object.getOwnPropertySymbols(e3);
        t3.push.apply(t3, r2);
      }
      return t3;
    })(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e2, r2, Object.getOwnPropertyDescriptor(t2, r2));
    }), e2;
  }], 784544);
}, 766417, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function(e2, t2) {
    if (null == e2) return {};
    var r2, a, n = (function(e3, t3) {
      if (null == e3) return {};
      var r3, a2, n2 = {}, i2 = Object.keys(e3);
      for (a2 = 0; a2 < i2.length; a2++) r3 = i2[a2], t3.indexOf(r3) >= 0 || (n2[r3] = e3[r3]);
      return n2;
    })(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e2);
      for (a = 0; a < i.length; a++) r2 = i[a], !(t2.indexOf(r2) >= 0) && Object.prototype.propertyIsEnumerable.call(e2, r2) && (n[r2] = e2[r2]);
    }
    return n;
  }], 766417);
}, 177619, (e) => {
  "use strict";
  var t = e.i(494844), r = e.i(187694), a = e.i(816131), n = e.i(343234);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function(e2, i2) {
    return (0, t._)(e2) || (0, r._)(e2, i2) || (0, n._)(e2, i2) || (0, a._)();
  }]);
}, 278308, (e) => {
  "use strict";
  var t = e.i(494844), r = e.i(498167), a = e.i(816131), n = e.i(343234);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function(e2) {
    return (0, t._)(e2) || (0, r._)(e2) || (0, n._)(e2) || (0, a._)();
  }]);
}, 648486, 396784, 401157, 319465, 785337, 94e4, (e) => {
  "use strict";
  var t = e.i(113645), r = e.i(498167), a = e.i(31680), n = e.i(343234);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function(e2) {
    return (0, t._)(e2) || (0, r._)(e2) || (0, n._)(e2) || (0, a._)();
  }], 648486);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function s(e2) {
    return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e3) {
      return e3.__proto__ || Object.getPrototypeOf(e3);
    })(e2);
  }
  try {
    var c = "u" > typeof window ? window : e.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function u() {
    try {
      var e2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (e3) {
    }
    return (u = function() {
      return !!e2;
    })();
  }
  try {
    var d = "u" > typeof window ? window : e.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var l = e.i(536038);
  try {
    var h = "u" > typeof window ? window : e.g;
    h._sentryModuleMetadata = h._sentryModuleMetadata || {}, h._sentryModuleMetadata[new h.Error().stack] = Object.assign({}, h._sentryModuleMetadata[new h.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var p = "u" > typeof window ? window : e.g;
    p._sentryModuleMetadata = p._sentryModuleMetadata || {}, p._sentryModuleMetadata[new p.Error().stack] = Object.assign({}, p._sentryModuleMetadata[new p.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function(e2, t2, r2) {
    t2 = s(t2);
    var a2 = u() ? Reflect.construct(t2, r2 || [], s(e2).constructor) : t2.apply(e2, r2);
    if (a2 && ("object" === (0, l._)(a2) || "function" == typeof a2)) return a2;
    if (void 0 === e2) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e2;
  }], 396784);
  try {
    var f = "u" > typeof window ? window : e.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function(e2, t2) {
    if (!(e2 instanceof t2)) throw TypeError("Cannot call a class as a function");
  }], 401157);
  try {
    var y = "u" > typeof window ? window : e.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function m(e2, t2) {
    for (var r2 = 0; r2 < t2.length; r2++) {
      var a2 = t2[r2];
      a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e2, a2.key, a2);
    }
  }
  e.s(["_", 0, function(e2, t2, r2) {
    return t2 && m(e2.prototype, t2), r2 && m(e2, r2), e2;
  }], 319465);
  try {
    var g = "u" > typeof window ? window : e.g;
    g._sentryModuleMetadata = g._sentryModuleMetadata || {}, g._sentryModuleMetadata[new g.Error().stack] = Object.assign({}, g._sentryModuleMetadata[new g.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function v(e2, t2) {
    return (v = Object.setPrototypeOf || function(e3, t3) {
      return e3.__proto__ = t3, e3;
    })(e2, t2);
  }
  try {
    var T = "u" > typeof window ? window : e.g;
    T._sentryModuleMetadata = T._sentryModuleMetadata || {}, T._sentryModuleMetadata[new T.Error().stack] = Object.assign({}, T._sentryModuleMetadata[new T.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function(e2, t2) {
    if ("function" != typeof t2 && null !== t2) throw TypeError("Super expression must either be null or a function");
    e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, writable: true, configurable: true } }), t2 && v(e2, t2);
  }], 785337);
  try {
    var P = "u" > typeof window ? window : e.g;
    P._sentryModuleMetadata = P._sentryModuleMetadata || {}, P._sentryModuleMetadata[new P.Error().stack] = Object.assign({}, P._sentryModuleMetadata[new P.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function(e2, t2) {
    return null != t2 && "u" > typeof Symbol && t2[Symbol.hasInstance] ? !!t2[Symbol.hasInstance](e2) : e2 instanceof t2;
  }], 94e4);
}, 343234, (e) => {
  "use strict";
  var t = e.i(465223);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function(e2, r2) {
    if (e2) {
      if ("string" == typeof e2) return (0, t._)(e2, r2);
      var a = Object.prototype.toString.call(e2).slice(8, -1);
      if ("Object" === a && e2.constructor && (a = e2.constructor.name), "Map" === a || "Set" === a) return Array.from(a);
      if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return (0, t._)(e2, r2);
    }
  }]);
}, 888201, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = function(e2, t2) {
    e2.prototype = Object.create(t2.prototype, { constructor: { value: e2, enumerable: false, writable: true, configurable: true } });
  };
}, 292322, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(106824);
  function i(e2, t2, r2) {
    this.main = e2, this.fn = t2, this.recommendFn = r2, this.lastResults = null, this.lastRecommendResults = null;
  }
  e.r(888201)(i, n), i.prototype.detach = function() {
    this.removeAllListeners(), this.main.detachDerivedHelper(this);
  }, i.prototype.getModifiedState = function(e2) {
    return this.fn(e2);
  }, i.prototype.getModifiedRecommendState = function(e2) {
    return this.recommendFn(e2);
  }, t.exports = i;
}, 43783, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = { escapeFacetValue: function(e2) {
    return "string" != typeof e2 ? e2 : String(e2).replace(/^-/, "\\-");
  }, unescapeFacetValue: function(e2) {
    return "string" != typeof e2 ? e2 : e2.replace(/^\\-/, "-");
  } };
}, 337789, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function n(e2) {
    return "function" == typeof e2 || Array.isArray(e2) || "[object Object]" === Object.prototype.toString.call(e2);
  }
  t.exports = function(e2) {
    n(e2) || (e2 = {});
    for (var t2 = 1, r2 = arguments.length; t2 < r2; t2++) {
      var a2 = arguments[t2];
      n(a2) && (function e3(t3, r3) {
        if (t3 === r3) return t3;
        for (var a3 in r3) if (Object.prototype.hasOwnProperty.call(r3, a3) && "__proto__" !== a3 && "constructor" !== a3) {
          var i = r3[a3], o = t3[a3];
          (void 0 === o || void 0 !== i) && (n(o) && n(i) ? t3[a3] = e3(o, i) : t3[a3] = "object" == typeof i && null !== i ? e3(Array.isArray(i) ? [] : {}, i) : i);
        }
        return t3;
      })(e2, a2);
    }
    return e2;
  };
}, 471e3, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = function(e2) {
    return e2 && Object.keys(e2).length > 0;
  };
}, 101324, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = function(e2, t2) {
    if (null === e2) return {};
    var r2, a2, n = {}, i = Object.keys(e2);
    for (a2 = 0; a2 < i.length; a2++) r2 = i[a2], t2.indexOf(r2) >= 0 || (n[r2] = e2[r2]);
    return n;
  };
}, 131629, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function n(e2) {
    e2 = e2 || {}, this.params = e2.params || [];
  }
  n.prototype = { constructor: n, addParams: function(e2) {
    var t2 = this.params.slice();
    return t2.push(e2), new n({ params: t2 });
  }, removeParams: function(e2) {
    return new n({ params: this.params.filter(function(t2) {
      return t2.$$id !== e2;
    }) });
  }, addFrequentlyBoughtTogether: function(e2) {
    return this.addParams(Object.assign({}, e2, { model: "bought-together" }));
  }, addRelatedProducts: function(e2) {
    return this.addParams(Object.assign({}, e2, { model: "related-products" }));
  }, addTrendingItems: function(e2) {
    return this.addParams(Object.assign({}, e2, { model: "trending-items" }));
  }, addTrendingFacets: function(e2) {
    return this.addParams(Object.assign({}, e2, { model: "trending-facets" }));
  }, addLookingSimilar: function(e2) {
    return this.addParams(Object.assign({}, e2, { model: "looking-similar" }));
  }, _buildQueries: function(e2, t2) {
    return this.params.filter(function(e3) {
      return void 0 === t2[e3.$$id];
    }).map(function(t3) {
      var r2 = Object.assign({}, t3, { indexName: e2, threshold: t3.threshold || 0 });
      return delete r2.$$id, r2;
    });
  } }, t.exports = n;
}, 909183, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function n(e2, t2) {
    this._state = e2, this._rawResults = {};
    var r2 = this;
    e2.params.forEach(function(e3) {
      var a2 = e3.$$id;
      r2[a2] = t2[a2], r2._rawResults[a2] = t2[a2];
    });
  }
  n.prototype = { constructor: n }, t.exports = n;
}, 741789, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(337789);
  function i(e2) {
    return Object.keys(e2).sort().reduce(function(t2, r2) {
      return t2[r2] = e2[r2], t2;
    }, {});
  }
  var o = { _getQueries: function(e2, t2) {
    var r2 = [];
    return r2.push({ indexName: e2, params: o._getHitsSearchParams(t2) }), t2.getRefinedDisjunctiveFacets().forEach(function(a2) {
      r2.push({ indexName: e2, params: o._getDisjunctiveFacetSearchParams(t2, a2) });
    }), t2.getRefinedHierarchicalFacets().forEach(function(a2) {
      var n2 = t2.getHierarchicalFacetByName(a2), i2 = t2.getHierarchicalRefinement(a2), s = t2._getHierarchicalFacetSeparator(n2);
      if (i2.length > 0 && i2[0].split(s).length > 1) {
        var c = i2[0].split(s).slice(0, -1).reduce(function(e3, t3, r3) {
          return e3.concat({ attribute: n2.attributes[r3], value: 0 === r3 ? t3 : [e3[e3.length - 1].value, t3].join(s) });
        }, []);
        c.forEach(function(a3, i3) {
          var s2 = o._getDisjunctiveFacetSearchParams(t2, a3.attribute, 0 === i3);
          function u(e3) {
            return n2.attributes.some(function(t3) {
              return t3 === e3.split(":")[0];
            });
          }
          var d = (s2.facetFilters || []).reduce(function(e3, t3) {
            if (Array.isArray(t3)) {
              var r3 = t3.filter(function(e4) {
                return !u(e4);
              });
              r3.length > 0 && e3.push(r3);
            }
            return "string" != typeof t3 || u(t3) || e3.push(t3), e3;
          }, []), l = c[i3 - 1];
          i3 > 0 ? s2.facetFilters = d.concat(l.attribute + ":" + l.value) : d.length > 0 ? s2.facetFilters = d : delete s2.facetFilters, r2.push({ indexName: e2, params: s2 });
        });
      }
    }), r2;
  }, _getCompositionQueries: function(e2) {
    return [{ compositionID: e2.index, requestBody: { params: o._getCompositionHitsSearchParams(e2) } }];
  }, _getHitsSearchParams: function(e2) {
    var t2 = e2.facets.concat(e2.disjunctiveFacets).concat(o._getHitsHierarchicalFacetsAttributes(e2)).sort(), r2 = o._getFacetFilters(e2), a2 = o._getNumericFilters(e2), s = o._getTagFilters(e2), c = {};
    return t2.length > 0 && (c.facets = t2.indexOf("*") > -1 ? ["*"] : t2), s.length > 0 && (c.tagFilters = s), r2.length > 0 && (c.facetFilters = r2), a2.length > 0 && (c.numericFilters = a2), i(n({}, e2.getQueryParams(), c));
  }, _getCompositionHitsSearchParams: function(e2) {
    var t2 = e2.facets.concat(e2.disjunctiveFacets.map(function(t3) {
      return e2.disjunctiveFacetsRefinements && e2.disjunctiveFacetsRefinements[t3] && e2.disjunctiveFacetsRefinements[t3].length > 0 ? "disjunctive(" + t3 + ")" : t3;
    })).concat(o._getHitsHierarchicalFacetsAttributes(e2)).sort(), r2 = o._getFacetFilters(e2), a2 = o._getNumericFilters(e2), s = o._getTagFilters(e2), c = {};
    t2.length > 0 && (c.facets = t2.indexOf("*") > -1 ? ["*"] : t2), s.length > 0 && (c.tagFilters = s), r2.length > 0 && (c.facetFilters = r2), a2.length > 0 && (c.numericFilters = a2);
    var u = e2.getQueryParams();
    return delete u.highlightPreTag, delete u.highlightPostTag, delete u.index, i(n({}, u, c));
  }, _getDisjunctiveFacetSearchParams: function(e2, t2, r2) {
    var a2 = o._getFacetFilters(e2, t2, r2), s = o._getNumericFilters(e2, t2), c = o._getTagFilters(e2), u = { hitsPerPage: 0, page: 0, analytics: false, clickAnalytics: false };
    c.length > 0 && (u.tagFilters = c);
    var d = e2.getHierarchicalFacetByName(t2);
    return d ? u.facets = o._getDisjunctiveHierarchicalFacetAttribute(e2, d, r2) : u.facets = t2, s.length > 0 && (u.numericFilters = s), a2.length > 0 && (u.facetFilters = a2), i(n({}, e2.getQueryParams(), u));
  }, _getNumericFilters: function(e2, t2) {
    if (e2.numericFilters) return e2.numericFilters;
    var r2 = [];
    return Object.keys(e2.numericRefinements).forEach(function(a2) {
      var n2 = e2.numericRefinements[a2] || {};
      Object.keys(n2).forEach(function(e3) {
        var i2 = n2[e3] || [];
        t2 !== a2 && i2.forEach(function(t3) {
          if (Array.isArray(t3)) {
            var n3 = t3.map(function(t4) {
              return a2 + e3 + t4;
            });
            r2.push(n3);
          } else r2.push(a2 + e3 + t3);
        });
      });
    }), r2;
  }, _getTagFilters: function(e2) {
    return e2.tagFilters ? e2.tagFilters : e2.tagRefinements.join(",");
  }, _getFacetFilters: function(e2, t2, r2) {
    var a2 = [], n2 = e2.facetsRefinements || {};
    Object.keys(n2).sort().forEach(function(e3) {
      (n2[e3] || []).slice().sort().forEach(function(t3) {
        a2.push(e3 + ":" + t3);
      });
    });
    var i2 = e2.facetsExcludes || {};
    Object.keys(i2).sort().forEach(function(e3) {
      (i2[e3] || []).sort().forEach(function(t3) {
        a2.push(e3 + ":-" + t3);
      });
    });
    var o2 = e2.disjunctiveFacetsRefinements || {};
    Object.keys(o2).sort().forEach(function(e3) {
      var r3 = o2[e3] || [];
      if (e3 !== t2 && r3 && 0 !== r3.length) {
        var n3 = [];
        r3.slice().sort().forEach(function(t3) {
          n3.push(e3 + ":" + t3);
        }), a2.push(n3);
      }
    });
    var s = e2.hierarchicalFacetsRefinements || {};
    return Object.keys(s).sort().forEach(function(n3) {
      var i3, o3, c = (s[n3] || [])[0];
      if (void 0 !== c) {
        var u = e2.getHierarchicalFacetByName(n3), d = e2._getHierarchicalFacetSeparator(u), l = e2._getHierarchicalRootPath(u);
        if (t2 === n3) {
          if (-1 === c.indexOf(d) || !l && true === r2 || l && l.split(d).length === c.split(d).length) return;
          l ? (o3 = l.split(d).length - 1, c = l) : (o3 = c.split(d).length - 2, c = c.slice(0, c.lastIndexOf(d))), i3 = u.attributes[o3];
        } else o3 = c.split(d).length - 1, i3 = u.attributes[o3];
        i3 && a2.push([i3 + ":" + c]);
      }
    }), a2;
  }, _getHitsHierarchicalFacetsAttributes: function(e2) {
    return e2.hierarchicalFacets.reduce(function(t2, r2) {
      var a2 = e2.getHierarchicalRefinement(r2.name)[0];
      if (!a2) return t2.push(r2.attributes[0]), t2;
      var n2 = e2._getHierarchicalFacetSeparator(r2), i2 = a2.split(n2).length, o2 = r2.attributes.slice(0, i2 + 1);
      return t2.concat(o2);
    }, []);
  }, _getDisjunctiveHierarchicalFacetAttribute: function(e2, t2, r2) {
    var a2 = e2._getHierarchicalFacetSeparator(t2);
    if (true === r2) {
      var n2 = e2._getHierarchicalRootPath(t2), i2 = 0;
      return n2 && (i2 = n2.split(a2).length), [t2.attributes[i2]];
    }
    var o2 = (e2.getHierarchicalRefinement(t2.name)[0] || "").split(a2).length - 1;
    return t2.attributes.slice(0, o2 + 1);
  }, getSearchForFacetQuery: function(e2, t2, r2, a2) {
    var s = a2.isDisjunctiveFacet(e2) ? a2.clearRefinements(e2) : a2, c = { facetQuery: t2, facetName: e2 };
    return "number" == typeof r2 && (c.maxFacetHits = r2), i(n({}, o._getHitsSearchParams(s), c));
  } };
  t.exports = o;
}, 446800, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = function() {
    var e2 = Array.prototype.slice.call(arguments);
    return e2.reduceRight(function(e3, t2) {
      return Object.keys(Object(t2)).forEach(function(r2) {
        void 0 !== t2[r2] && (void 0 !== e3[r2] && delete e3[r2], e3[r2] = t2[r2]);
      }), e3;
    }, {});
  };
}, 990753, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = function(e2, t2) {
    if (Array.isArray(e2)) {
      for (var r2 = 0; r2 < e2.length; r2++) if (t2(e2[r2])) return e2[r2];
    }
  };
}, 709345, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = function(e2, t2) {
    return e2.filter(function(r2, a2) {
      return t2.indexOf(r2) > -1 && e2.indexOf(r2) === a2;
    });
  };
}, 39273, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = function e2(t2) {
    if ("number" == typeof t2) return t2;
    if ("string" == typeof t2) return parseFloat(t2);
    if (Array.isArray(t2)) return t2.map(e2);
    throw Error("The value should be a number, a parsable string or an array of those.");
  };
}, 707747, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = function(e2) {
    return null !== e2 && /^[a-zA-Z0-9_-]{1,64}$/.test(e2);
  };
}, 196458, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(446800), i = e.r(471e3), o = e.r(101324), s = { addRefinement: function(e2, t2, r2) {
    if (s.isRefined(e2, t2, r2)) return e2;
    var a2 = "" + r2, i2 = e2[t2] ? e2[t2].concat(a2) : [a2], o2 = {};
    return o2[t2] = i2, n(o2, e2);
  }, removeRefinement: function(e2, t2, r2) {
    if (void 0 === r2) return s.clearRefinement(e2, function(e3, r3) {
      return t2 === r3;
    });
    var a2 = "" + r2;
    return s.clearRefinement(e2, function(e3, r3) {
      return t2 === r3 && a2 === e3;
    });
  }, toggleRefinement: function(e2, t2, r2) {
    if (void 0 === r2) throw Error("toggleRefinement should be used with a value");
    return s.isRefined(e2, t2, r2) ? s.removeRefinement(e2, t2, r2) : s.addRefinement(e2, t2, r2);
  }, clearRefinement: function(e2, t2, r2) {
    if (void 0 === t2) return i(e2) ? {} : e2;
    if ("string" == typeof t2) return o(e2, [t2]);
    if ("function" == typeof t2) {
      var a2 = false, n2 = Object.keys(e2).reduce(function(n3, i2) {
        var o2 = e2[i2] || [], s2 = o2.filter(function(e3) {
          return !t2(e3, i2, r2);
        });
        return s2.length !== o2.length && (a2 = true), n3[i2] = s2, n3;
      }, {});
      return a2 ? n2 : e2;
    }
  }, isRefined: function(e2, t2, r2) {
    var a2 = !!e2[t2] && e2[t2].length > 0;
    return void 0 !== r2 && a2 ? -1 !== e2[t2].indexOf("" + r2) : a2;
  } };
  t.exports = s;
}, 471263, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(446800), i = e.r(990753), o = e.r(709345), s = e.r(337789), c = e.r(471e3), u = e.r(101324), d = e.r(39273), l = e.r(707747), h = e.r(196458);
  function p(e2, t2) {
    return Array.isArray(e2) && Array.isArray(t2) ? e2.length === t2.length && e2.every(function(e3, r2) {
      return p(t2[r2], e3);
    }) : e2 === t2;
  }
  function f(e2) {
    var t2 = e2 ? f._parseNumbers(e2) : {};
    void 0 === t2.userToken || l(t2.userToken) || console.warn("[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}"), this.facets = t2.facets || [], this.disjunctiveFacets = t2.disjunctiveFacets || [], this.hierarchicalFacets = t2.hierarchicalFacets || [], this.facetsRefinements = t2.facetsRefinements || {}, this.facetsExcludes = t2.facetsExcludes || {}, this.disjunctiveFacetsRefinements = t2.disjunctiveFacetsRefinements || {}, this.numericRefinements = t2.numericRefinements || {}, this.tagRefinements = t2.tagRefinements || [], this.hierarchicalFacetsRefinements = t2.hierarchicalFacetsRefinements || {};
    var r2 = this;
    Object.keys(t2).forEach(function(e3) {
      var a2 = -1 !== f.PARAMETERS.indexOf(e3), n2 = void 0 !== t2[e3];
      !a2 && n2 && (r2[e3] = t2[e3]);
    });
  }
  function y(e2) {
    var t2 = parseFloat(e2);
    return isFinite(t2) ? t2 : null;
  }
  f.PARAMETERS = Object.keys(new f()), f._parseNumbers = function(e2) {
    if (e2 instanceof f) return e2;
    var t2 = {};
    if (["aroundPrecision", "aroundRadius", "getRankingInfo", "minWordSizefor2Typos", "minWordSizefor1Typo", "page", "maxValuesPerFacet", "distinct", "minimumAroundRadius", "hitsPerPage", "minProximity"].forEach(function(r3) {
      var a2 = e2[r3];
      if ("string" == typeof a2) {
        var n2 = parseFloat(a2);
        isNaN(n2) ? t2[r3] = a2 : isFinite(n2) ? t2[r3] = n2 : t2[r3] = null;
      } else "number" != typeof a2 || isFinite(a2) || (t2[r3] = null);
    }), Array.isArray(e2.insideBoundingBox) && (t2.insideBoundingBox = e2.insideBoundingBox.map(function(e3) {
      return Array.isArray(e3) ? e3.map(function(e4) {
        return "string" == typeof e4 ? y(e4) : "number" != typeof e4 || isFinite(e4) ? e4 : null;
      }) : e3;
    })), e2.numericRefinements) {
      var r2 = {};
      Object.keys(e2.numericRefinements).forEach(function(t3) {
        var a2 = e2.numericRefinements[t3] || {};
        r2[t3] = {}, Object.keys(a2).forEach(function(e3) {
          var n2 = a2[e3].map(function(e4) {
            return Array.isArray(e4) ? e4.map(function(e5) {
              return "string" == typeof e5 ? y(e5) : "number" != typeof e5 || isFinite(e5) ? e5 : null;
            }) : "string" == typeof e4 ? y(e4) : "number" != typeof e4 || isFinite(e4) ? e4 : null;
          });
          r2[t3][e3] = n2;
        });
      }), t2.numericRefinements = r2;
    }
    return s(e2, t2);
  }, f.make = function(e2) {
    var t2 = new f(e2);
    return (e2.hierarchicalFacets || []).forEach(function(e3) {
      if (e3.rootPath) {
        var r2 = t2.getHierarchicalRefinement(e3.name);
        r2.length > 0 && 0 !== r2[0].indexOf(e3.rootPath) && (t2 = t2.clearRefinements(e3.name)), 0 === (r2 = t2.getHierarchicalRefinement(e3.name)).length && (t2 = t2.toggleHierarchicalFacetRefinement(e3.name, e3.rootPath));
      }
    }), t2;
  }, f.validate = function(e2, t2) {
    var r2 = t2 || {};
    return e2.tagFilters && r2.tagRefinements && r2.tagRefinements.length > 0 ? Error("[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.") : e2.tagRefinements.length > 0 && r2.tagFilters ? Error("[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.") : e2.numericFilters && r2.numericRefinements && c(r2.numericRefinements) ? Error("[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : c(e2.numericRefinements) && r2.numericFilters ? Error("[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : null;
  }, f.prototype = { constructor: f, clearRefinements: function(e2) {
    var t2 = { numericRefinements: this._clearNumericRefinements(e2), facetsRefinements: h.clearRefinement(this.facetsRefinements, e2, "conjunctiveFacet"), facetsExcludes: h.clearRefinement(this.facetsExcludes, e2, "exclude"), disjunctiveFacetsRefinements: h.clearRefinement(this.disjunctiveFacetsRefinements, e2, "disjunctiveFacet"), hierarchicalFacetsRefinements: h.clearRefinement(this.hierarchicalFacetsRefinements, e2, "hierarchicalFacet") };
    return t2.numericRefinements === this.numericRefinements && t2.facetsRefinements === this.facetsRefinements && t2.facetsExcludes === this.facetsExcludes && t2.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && t2.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements ? this : this.setQueryParameters(t2);
  }, clearTags: function() {
    return void 0 === this.tagFilters && 0 === this.tagRefinements.length ? this : this.setQueryParameters({ tagFilters: void 0, tagRefinements: [] });
  }, setIndex: function(e2) {
    return e2 === this.index ? this : this.setQueryParameters({ index: e2 });
  }, setQuery: function(e2) {
    return e2 === this.query ? this : this.setQueryParameters({ query: e2 });
  }, setPage: function(e2) {
    return e2 === this.page ? this : this.setQueryParameters({ page: e2 });
  }, setFacets: function(e2) {
    return this.setQueryParameters({ facets: e2 });
  }, setDisjunctiveFacets: function(e2) {
    return this.setQueryParameters({ disjunctiveFacets: e2 });
  }, setHitsPerPage: function(e2) {
    return this.hitsPerPage === e2 ? this : this.setQueryParameters({ hitsPerPage: e2 });
  }, setTypoTolerance: function(e2) {
    return this.typoTolerance === e2 ? this : this.setQueryParameters({ typoTolerance: e2 });
  }, addNumericRefinement: function(e2, t2, r2) {
    var a2 = d(r2);
    if (this.isNumericRefined(e2, t2, a2)) return this;
    var n2 = s({}, this.numericRefinements);
    return n2[e2] = s({}, n2[e2]), n2[e2][t2] ? (n2[e2][t2] = n2[e2][t2].slice(), n2[e2][t2].push(a2)) : n2[e2][t2] = [a2], this.setQueryParameters({ numericRefinements: n2 });
  }, getConjunctiveRefinements: function(e2) {
    return this.isConjunctiveFacet(e2) && this.facetsRefinements[e2] || [];
  }, getDisjunctiveRefinements: function(e2) {
    return this.isDisjunctiveFacet(e2) && this.disjunctiveFacetsRefinements[e2] || [];
  }, getHierarchicalRefinement: function(e2) {
    return this.hierarchicalFacetsRefinements[e2] || [];
  }, getExcludeRefinements: function(e2) {
    return this.isConjunctiveFacet(e2) && this.facetsExcludes[e2] || [];
  }, removeNumericRefinement: function(e2, t2, r2) {
    return void 0 !== r2 ? this.isNumericRefined(e2, t2, r2) ? this.setQueryParameters({ numericRefinements: this._clearNumericRefinements(function(a2, n2) {
      return n2 === e2 && a2.op === t2 && p(a2.val, d(r2));
    }) }) : this : void 0 !== t2 ? this.isNumericRefined(e2, t2) ? this.setQueryParameters({ numericRefinements: this._clearNumericRefinements(function(r3, a2) {
      return a2 === e2 && r3.op === t2;
    }) }) : this : this.isNumericRefined(e2) ? this.setQueryParameters({ numericRefinements: this._clearNumericRefinements(function(t3, r3) {
      return r3 === e2;
    }) }) : this;
  }, getNumericRefinements: function(e2) {
    return this.numericRefinements[e2] || {};
  }, getNumericRefinement: function(e2, t2) {
    return this.numericRefinements[e2] && this.numericRefinements[e2][t2];
  }, _clearNumericRefinements: function(e2) {
    if (void 0 === e2) return c(this.numericRefinements) ? {} : this.numericRefinements;
    if ("string" == typeof e2) return u(this.numericRefinements, [e2]);
    if ("function" == typeof e2) {
      var t2 = false, r2 = this.numericRefinements, a2 = Object.keys(r2).reduce(function(a3, n2) {
        var i2 = r2[n2], o2 = {};
        return Object.keys(i2 = i2 || {}).forEach(function(r3) {
          var a4 = i2[r3] || [], s2 = [];
          a4.forEach(function(t3) {
            e2({ val: t3, op: r3 }, n2, "numeric") || s2.push(t3);
          }), s2.length !== a4.length && (t2 = true), o2[r3] = s2;
        }), a3[n2] = o2, a3;
      }, {});
      return t2 ? a2 : this.numericRefinements;
    }
  }, addFacet: function(e2) {
    return this.isConjunctiveFacet(e2) ? this : this.setQueryParameters({ facets: this.facets.concat([e2]) });
  }, addDisjunctiveFacet: function(e2) {
    return this.isDisjunctiveFacet(e2) ? this : this.setQueryParameters({ disjunctiveFacets: this.disjunctiveFacets.concat([e2]) });
  }, addHierarchicalFacet: function(e2) {
    if (this.isHierarchicalFacet(e2.name)) throw Error("Cannot declare two hierarchical facets with the same name: `" + e2.name + "`");
    return this.setQueryParameters({ hierarchicalFacets: this.hierarchicalFacets.concat([e2]) });
  }, addFacetRefinement: function(e2, t2) {
    if (!this.isConjunctiveFacet(e2)) throw Error(e2 + " is not defined in the facets attribute of the helper configuration");
    return h.isRefined(this.facetsRefinements, e2, t2) ? this : this.setQueryParameters({ facetsRefinements: h.addRefinement(this.facetsRefinements, e2, t2) });
  }, addExcludeRefinement: function(e2, t2) {
    if (!this.isConjunctiveFacet(e2)) throw Error(e2 + " is not defined in the facets attribute of the helper configuration");
    return h.isRefined(this.facetsExcludes, e2, t2) ? this : this.setQueryParameters({ facetsExcludes: h.addRefinement(this.facetsExcludes, e2, t2) });
  }, addDisjunctiveFacetRefinement: function(e2, t2) {
    if (!this.isDisjunctiveFacet(e2)) throw Error(e2 + " is not defined in the disjunctiveFacets attribute of the helper configuration");
    return h.isRefined(this.disjunctiveFacetsRefinements, e2, t2) ? this : this.setQueryParameters({ disjunctiveFacetsRefinements: h.addRefinement(this.disjunctiveFacetsRefinements, e2, t2) });
  }, addTagRefinement: function(e2) {
    if (this.isTagRefined(e2)) return this;
    var t2 = { tagRefinements: this.tagRefinements.concat(e2) };
    return this.setQueryParameters(t2);
  }, removeFacet: function(e2) {
    return this.isConjunctiveFacet(e2) ? this.clearRefinements(e2).setQueryParameters({ facets: this.facets.filter(function(t2) {
      return t2 !== e2;
    }) }) : this;
  }, removeDisjunctiveFacet: function(e2) {
    return this.isDisjunctiveFacet(e2) ? this.clearRefinements(e2).setQueryParameters({ disjunctiveFacets: this.disjunctiveFacets.filter(function(t2) {
      return t2 !== e2;
    }) }) : this;
  }, removeHierarchicalFacet: function(e2) {
    return this.isHierarchicalFacet(e2) ? this.clearRefinements(e2).setQueryParameters({ hierarchicalFacets: this.hierarchicalFacets.filter(function(t2) {
      return t2.name !== e2;
    }) }) : this;
  }, removeFacetRefinement: function(e2, t2) {
    if (!this.isConjunctiveFacet(e2)) throw Error(e2 + " is not defined in the facets attribute of the helper configuration");
    return h.isRefined(this.facetsRefinements, e2, t2) ? this.setQueryParameters({ facetsRefinements: h.removeRefinement(this.facetsRefinements, e2, t2) }) : this;
  }, removeExcludeRefinement: function(e2, t2) {
    if (!this.isConjunctiveFacet(e2)) throw Error(e2 + " is not defined in the facets attribute of the helper configuration");
    return h.isRefined(this.facetsExcludes, e2, t2) ? this.setQueryParameters({ facetsExcludes: h.removeRefinement(this.facetsExcludes, e2, t2) }) : this;
  }, removeDisjunctiveFacetRefinement: function(e2, t2) {
    if (!this.isDisjunctiveFacet(e2)) throw Error(e2 + " is not defined in the disjunctiveFacets attribute of the helper configuration");
    return h.isRefined(this.disjunctiveFacetsRefinements, e2, t2) ? this.setQueryParameters({ disjunctiveFacetsRefinements: h.removeRefinement(this.disjunctiveFacetsRefinements, e2, t2) }) : this;
  }, removeTagRefinement: function(e2) {
    if (!this.isTagRefined(e2)) return this;
    var t2 = { tagRefinements: this.tagRefinements.filter(function(t3) {
      return t3 !== e2;
    }) };
    return this.setQueryParameters(t2);
  }, toggleRefinement: function(e2, t2) {
    return this.toggleFacetRefinement(e2, t2);
  }, toggleFacetRefinement: function(e2, t2) {
    if (this.isHierarchicalFacet(e2)) return this.toggleHierarchicalFacetRefinement(e2, t2);
    if (this.isConjunctiveFacet(e2)) return this.toggleConjunctiveFacetRefinement(e2, t2);
    if (this.isDisjunctiveFacet(e2)) return this.toggleDisjunctiveFacetRefinement(e2, t2);
    throw Error("Cannot refine the undeclared facet " + e2 + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets");
  }, toggleConjunctiveFacetRefinement: function(e2, t2) {
    if (!this.isConjunctiveFacet(e2)) throw Error(e2 + " is not defined in the facets attribute of the helper configuration");
    return this.setQueryParameters({ facetsRefinements: h.toggleRefinement(this.facetsRefinements, e2, t2) });
  }, toggleExcludeFacetRefinement: function(e2, t2) {
    if (!this.isConjunctiveFacet(e2)) throw Error(e2 + " is not defined in the facets attribute of the helper configuration");
    return this.setQueryParameters({ facetsExcludes: h.toggleRefinement(this.facetsExcludes, e2, t2) });
  }, toggleDisjunctiveFacetRefinement: function(e2, t2) {
    if (!this.isDisjunctiveFacet(e2)) throw Error(e2 + " is not defined in the disjunctiveFacets attribute of the helper configuration");
    return this.setQueryParameters({ disjunctiveFacetsRefinements: h.toggleRefinement(this.disjunctiveFacetsRefinements, e2, t2) });
  }, toggleHierarchicalFacetRefinement: function(e2, t2) {
    if (!this.isHierarchicalFacet(e2)) throw Error(e2 + " is not defined in the hierarchicalFacets attribute of the helper configuration");
    var r2 = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e2)), a2 = {};
    return void 0 !== this.hierarchicalFacetsRefinements[e2] && this.hierarchicalFacetsRefinements[e2].length > 0 && (this.hierarchicalFacetsRefinements[e2][0] === t2 || 0 === this.hierarchicalFacetsRefinements[e2][0].indexOf(t2 + r2)) ? -1 === t2.indexOf(r2) ? a2[e2] = [] : a2[e2] = [t2.slice(0, t2.lastIndexOf(r2))] : a2[e2] = [t2], this.setQueryParameters({ hierarchicalFacetsRefinements: n(a2, this.hierarchicalFacetsRefinements) });
  }, addHierarchicalFacetRefinement: function(e2, t2) {
    if (this.isHierarchicalFacetRefined(e2)) throw Error(e2 + " is already refined.");
    if (!this.isHierarchicalFacet(e2)) throw Error(e2 + " is not defined in the hierarchicalFacets attribute of the helper configuration.");
    var r2 = {};
    return r2[e2] = [t2], this.setQueryParameters({ hierarchicalFacetsRefinements: n(r2, this.hierarchicalFacetsRefinements) });
  }, removeHierarchicalFacetRefinement: function(e2) {
    if (!this.isHierarchicalFacetRefined(e2)) return this;
    var t2 = {};
    return t2[e2] = [], this.setQueryParameters({ hierarchicalFacetsRefinements: n(t2, this.hierarchicalFacetsRefinements) });
  }, toggleTagRefinement: function(e2) {
    return this.isTagRefined(e2) ? this.removeTagRefinement(e2) : this.addTagRefinement(e2);
  }, isDisjunctiveFacet: function(e2) {
    return this.disjunctiveFacets.indexOf(e2) > -1;
  }, isHierarchicalFacet: function(e2) {
    return void 0 !== this.getHierarchicalFacetByName(e2);
  }, isConjunctiveFacet: function(e2) {
    return this.facets.indexOf(e2) > -1;
  }, isFacetRefined: function(e2, t2) {
    return !!this.isConjunctiveFacet(e2) && h.isRefined(this.facetsRefinements, e2, t2);
  }, isExcludeRefined: function(e2, t2) {
    return !!this.isConjunctiveFacet(e2) && h.isRefined(this.facetsExcludes, e2, t2);
  }, isDisjunctiveFacetRefined: function(e2, t2) {
    return !!this.isDisjunctiveFacet(e2) && h.isRefined(this.disjunctiveFacetsRefinements, e2, t2);
  }, isHierarchicalFacetRefined: function(e2, t2) {
    if (!this.isHierarchicalFacet(e2)) return false;
    var r2 = this.getHierarchicalRefinement(e2);
    return t2 ? -1 !== r2.indexOf(t2) : r2.length > 0;
  }, isNumericRefined: function(e2, t2, r2) {
    if (void 0 === r2 && void 0 === t2) return !!this.numericRefinements[e2];
    var a2, n2 = this.numericRefinements[e2] && void 0 !== this.numericRefinements[e2][t2];
    if (void 0 === r2 || !n2) return n2;
    var o2 = d(r2), s2 = void 0 !== (a2 = this.numericRefinements[e2][t2], i(a2, function(e3) {
      return p(e3, o2);
    }));
    return n2 && s2;
  }, isTagRefined: function(e2) {
    return -1 !== this.tagRefinements.indexOf(e2);
  }, getRefinedDisjunctiveFacets: function() {
    var e2 = this, t2 = o(Object.keys(this.numericRefinements).filter(function(t3) {
      return Object.keys(e2.numericRefinements[t3]).length > 0;
    }), this.disjunctiveFacets);
    return Object.keys(this.disjunctiveFacetsRefinements).filter(function(t3) {
      return e2.disjunctiveFacetsRefinements[t3].length > 0;
    }).concat(t2).concat(this.getRefinedHierarchicalFacets()).sort();
  }, getRefinedHierarchicalFacets: function() {
    var e2 = this;
    return o(this.hierarchicalFacets.map(function(e3) {
      return e3.name;
    }), Object.keys(this.hierarchicalFacetsRefinements).filter(function(t2) {
      return e2.hierarchicalFacetsRefinements[t2].length > 0;
    })).sort();
  }, getUnrefinedDisjunctiveFacets: function() {
    var e2 = this.getRefinedDisjunctiveFacets();
    return this.disjunctiveFacets.filter(function(t2) {
      return -1 === e2.indexOf(t2);
    });
  }, managedParameters: ["index", "facets", "disjunctiveFacets", "facetsRefinements", "hierarchicalFacets", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacetsRefinements"], getQueryParams: function() {
    var e2 = this.managedParameters, t2 = {}, r2 = this;
    return Object.keys(this).forEach(function(a2) {
      var n2 = r2[a2];
      -1 === e2.indexOf(a2) && void 0 !== n2 && (t2[a2] = n2);
    }), t2;
  }, setQueryParameter: function(e2, t2) {
    if (this[e2] === t2) return this;
    var r2 = {};
    return r2[e2] = t2, this.setQueryParameters(r2);
  }, setQueryParameters: function(e2) {
    if (!e2) return this;
    var t2 = f.validate(this, e2);
    if (t2) throw t2;
    var r2 = this, a2 = f._parseNumbers(e2), n2 = Object.keys(this).reduce(function(e3, t3) {
      return e3[t3] = r2[t3], e3;
    }, {}), i2 = Object.keys(a2).reduce(function(e3, t3) {
      var r3 = void 0 !== e3[t3], n3 = void 0 !== a2[t3];
      return r3 && !n3 ? u(e3, [t3]) : (n3 && (e3[t3] = a2[t3]), e3);
    }, n2);
    return new this.constructor(i2);
  }, resetPage: function() {
    return void 0 === this.page ? this : this.setPage(0);
  }, _getHierarchicalFacetSortBy: function(e2) {
    return e2.sortBy || ["isRefined:desc", "name:asc"];
  }, _getHierarchicalFacetSeparator: function(e2) {
    return e2.separator || " > ";
  }, _getHierarchicalRootPath: function(e2) {
    return e2.rootPath || null;
  }, _getHierarchicalShowParentLevel: function(e2) {
    return "boolean" != typeof e2.showParentLevel || e2.showParentLevel;
  }, getHierarchicalFacetByName: function(e2) {
    return i(this.hierarchicalFacets, function(t2) {
      return t2.name === e2;
    });
  }, getHierarchicalFacetBreadcrumb: function(e2) {
    if (!this.isHierarchicalFacet(e2)) return [];
    var t2 = this.getHierarchicalRefinement(e2)[0];
    if (!t2) return [];
    var r2 = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e2));
    return t2.split(r2).map(function(e3) {
      return e3.trim();
    });
  }, toString: function() {
    return JSON.stringify(this, null, 2);
  } }, t.exports = f;
}, 981004, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = function(e2) {
    return Array.isArray(e2) ? e2.filter(Boolean) : [];
  };
}, 340456, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = function(e2, t2) {
    if (!Array.isArray(e2)) return -1;
    for (var r2 = 0; r2 < e2.length; r2++) if (t2(e2[r2])) return r2;
    return -1;
  };
}, 911221, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(990753);
  t.exports = function(e2, t2) {
    var r2 = (t2 || []).map(function(e3) {
      return e3.split(":");
    });
    return e2.reduce(function(e3, t3) {
      var a2 = t3.split(":"), i = n(r2, function(e4) {
        return e4[0] === a2[0];
      });
      return a2.length > 1 || !i ? (e3[0].push(a2[0]), e3[1].push(a2[1])) : (e3[0].push(i[0]), e3[1].push(i[1])), e3;
    }, [[], []]);
  };
}, 837752, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = function() {
    var e2 = Array.prototype.slice.call(arguments);
    return e2.reduceRight(function(e3, t2) {
      return Object.keys(Object(t2)).forEach(function(r2) {
        var a2 = "number" == typeof e3[r2] ? e3[r2] : 0, n = t2[r2];
        void 0 !== n && n >= a2 && (void 0 !== e3[r2] && delete e3[r2], e3[r2] = n);
      }), e3;
    }, {});
  };
}, 685340, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = function(e2, t2, r2) {
    if (!Array.isArray(e2)) return [];
    Array.isArray(r2) || (r2 = []);
    var a2 = e2.map(function(e3, r3) {
      return { criteria: t2.map(function(t3) {
        return e3[t3];
      }), index: r3, value: e3 };
    });
    return a2.sort(function(e3, t3) {
      for (var a3 = -1; ++a3 < e3.criteria.length; ) {
        var n = (function(e4, t4) {
          if (e4 !== t4) {
            var r3 = void 0 !== e4, a4 = null === e4, n2 = void 0 !== t4, i = null === t4;
            if (!i && e4 > t4 || a4 && n2 || !r3) return 1;
            if (!a4 && e4 < t4 || i && r3 || !n2) return -1;
          }
          return 0;
        })(e3.criteria[a3], t3.criteria[a3]);
        if (n) {
          if (a3 >= r2.length) return n;
          if ("desc" === r2[a3]) return -n;
          return n;
        }
      }
      return e3.index - t3.index;
    }), a2.map(function(e3) {
      return e3.value;
    });
  };
}, 999827, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = function(e2) {
    return function(t2, r2) {
      var a2, n2, d, l, h, p = e2.hierarchicalFacets[r2], f = e2.hierarchicalFacetsRefinements[p.name] && e2.hierarchicalFacetsRefinements[p.name][0] || "", y = e2._getHierarchicalFacetSeparator(p), m = e2._getHierarchicalRootPath(p), g = e2._getHierarchicalShowParentLevel(p), v = o(e2._getHierarchicalFacetSortBy(p)), T = t2.every(function(e3) {
        return e3.exhaustive;
      }), P = (a2 = v, n2 = y, d = m, l = g, h = f, function(e3, t3, r3) {
        var o2 = e3;
        if (r3 > 0) {
          var p2 = 0;
          for (o2 = e3; p2 < r3; ) o2 = i(o2 && Array.isArray(o2.data) ? o2.data : [], function(e4) {
            return e4.isRefined;
          }), p2++;
        }
        if (o2) {
          var f2 = Object.keys(t3.data).map(function(e4) {
            return [e4, t3.data[e4]];
          }).filter(function(e4) {
            var t4, r4, a3, i2, s2, c2;
            return t4 = e4[0], r4 = o2.path || d, a3 = h, i2 = n2, s2 = d, c2 = l, (!s2 || 0 === t4.indexOf(s2) && s2 !== t4) && (!s2 && -1 === t4.indexOf(i2) || s2 && t4.split(i2).length - s2.split(i2).length == 1 || -1 === t4.indexOf(i2) && -1 === a3.indexOf(i2) || 0 === a3.indexOf(t4) || 0 === t4.indexOf(r4 + i2) && (c2 || 0 === t4.indexOf(a3)));
          });
          o2.data = s(f2.map(function(e4) {
            var r4, a3, i2, o3, s2, d2, l2 = e4[0];
            return r4 = e4[1], a3 = l2, i2 = n2, o3 = u(h), s2 = t3.exhaustive, { name: (d2 = a3.split(i2))[d2.length - 1].trim(), path: a3, escapedValue: c(a3), count: r4, isRefined: o3 === a3 || 0 === o3.indexOf(a3 + i2), exhaustive: s2, data: null };
          }), a2[0], a2[1]);
        }
        return e3;
      }), w = t2;
      return m && (w = t2.slice(m.split(y).length)), w.reduce(P, { name: e2.hierarchicalFacets[r2].name, count: null, isRefined: true, path: null, escapedValue: null, exhaustive: T, data: null });
    };
  };
  var n = e.r(43783), i = e.r(990753), o = e.r(911221), s = e.r(685340), c = n.escapeFacetValue, u = n.unescapeFacetValue;
}, 615298, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(981004), i = e.r(446800), o = e.r(43783), s = e.r(990753), c = e.r(340456), u = e.r(911221), d = e.r(837752), l = e.r(685340), h = o.escapeFacetValue, p = o.unescapeFacetValue, f = e.r(999827);
  function y(e2) {
    var t2 = {};
    return e2.forEach(function(e3, r2) {
      t2[e3] = r2;
    }), t2;
  }
  function m(e2, t2, r2) {
    t2 && t2[r2] && (e2.stats = t2[r2]);
  }
  function g(e2, t2, r2) {
    var a2 = t2[0] || {};
    this._rawResults = t2;
    var o2 = this;
    Object.keys(a2).forEach(function(e3) {
      o2[e3] = a2[e3];
    });
    var u2 = i(r2, { persistHierarchicalRootCount: false });
    Object.keys(u2).forEach(function(e3) {
      o2[e3] = u2[e3];
    }), this.processingTimeMS = t2.reduce(function(e3, t3) {
      return void 0 === t3.processingTimeMS ? e3 : e3 + t3.processingTimeMS;
    }, 0), this.disjunctiveFacets = [], this.hierarchicalFacets = e2.hierarchicalFacets.map(function() {
      return [];
    }), this.facets = [];
    var l2 = e2.getRefinedDisjunctiveFacets(), h2 = y(e2.facets), g2 = y(e2.disjunctiveFacets), v2 = 1, T2 = a2.facets || {};
    Object.keys(T2).forEach(function(t3) {
      var r3 = T2[t3], n2 = (d2 = e2.hierarchicalFacets, s(d2, function(e3) {
        return (e3.attributes || []).indexOf(t3) > -1;
      }));
      if (n2) {
        var i2 = n2.attributes.indexOf(t3), u3 = c(e2.hierarchicalFacets, function(e3) {
          return e3.name === n2.name;
        });
        o2.hierarchicalFacets[u3][i2] = { attribute: t3, data: r3, exhaustive: a2.exhaustiveFacetsCount };
      } else {
        var d2, l3, p2 = -1 !== e2.disjunctiveFacets.indexOf(t3), f2 = -1 !== e2.facets.indexOf(t3);
        p2 && (l3 = g2[t3], o2.disjunctiveFacets[l3] = { name: t3, data: r3, exhaustive: a2.exhaustiveFacetsCount }, m(o2.disjunctiveFacets[l3], a2.facets_stats, t3)), f2 && (l3 = h2[t3], o2.facets[l3] = { name: t3, data: r3, exhaustive: a2.exhaustiveFacetsCount }, m(o2.facets[l3], a2.facets_stats, t3));
      }
    }), this.hierarchicalFacets = n(this.hierarchicalFacets), l2.forEach(function(r3) {
      var n2 = t2[v2], s2 = n2 && n2.facets ? n2.facets : {}, u3 = e2.getHierarchicalFacetByName(r3);
      Object.keys(s2).forEach(function(t3) {
        var r4, l3 = s2[t3];
        if (u3) {
          r4 = c(e2.hierarchicalFacets, function(e3) {
            return e3.name === u3.name;
          });
          var h3 = c(o2.hierarchicalFacets[r4], function(e3) {
            return e3.attribute === t3;
          });
          if (-1 === h3) return;
          o2.hierarchicalFacets[r4][h3].data = o2.persistHierarchicalRootCount ? d(o2.hierarchicalFacets[r4][h3].data, l3) : i(l3, o2.hierarchicalFacets[r4][h3].data);
        } else {
          r4 = g2[t3];
          var f2 = a2.facets && a2.facets[t3] || {};
          o2.disjunctiveFacets[r4] = { name: t3, data: d(f2, l3), exhaustive: n2.exhaustiveFacetsCount }, m(o2.disjunctiveFacets[r4], n2.facets_stats, t3), e2.disjunctiveFacetsRefinements[t3] && e2.disjunctiveFacetsRefinements[t3].forEach(function(a3) {
            !o2.disjunctiveFacets[r4].data[a3] && e2.disjunctiveFacetsRefinements[t3].indexOf(p(a3)) > -1 && (o2.disjunctiveFacets[r4].data[a3] = 0);
          });
        }
      }), v2++;
    }), e2.getRefinedHierarchicalFacets().forEach(function(r3) {
      var a3 = e2.getHierarchicalFacetByName(r3), n2 = e2._getHierarchicalFacetSeparator(a3), s2 = e2.getHierarchicalRefinement(r3);
      0 === s2.length || s2[0].split(n2).length < 2 || t2.slice(v2).forEach(function(t3) {
        var r4 = t3 && t3.facets ? t3.facets : {};
        Object.keys(r4).forEach(function(t4) {
          var u3 = r4[t4], d2 = c(e2.hierarchicalFacets, function(e3) {
            return e3.name === a3.name;
          }), l3 = c(o2.hierarchicalFacets[d2], function(e3) {
            return e3.attribute === t4;
          });
          if (-1 !== l3) {
            var h3 = {};
            if (s2.length > 0 && !o2.persistHierarchicalRootCount) {
              var p2 = s2[0].split(n2)[0];
              h3[p2] = o2.hierarchicalFacets[d2][l3].data[p2];
            }
            o2.hierarchicalFacets[d2][l3].data = i(h3, u3, o2.hierarchicalFacets[d2][l3].data);
          }
        }), v2++;
      });
    }), Object.keys(e2.facetsExcludes).forEach(function(t3) {
      var r3 = e2.facetsExcludes[t3], n2 = h2[t3];
      o2.facets[n2] = { name: t3, data: T2[t3], exhaustive: a2.exhaustiveFacetsCount }, r3.forEach(function(e3) {
        o2.facets[n2] = o2.facets[n2] || { name: t3 }, o2.facets[n2].data = o2.facets[n2].data || {}, o2.facets[n2].data[e3] = 0;
      });
    }), this.hierarchicalFacets = this.hierarchicalFacets.map(f(e2)), this.facets = n(this.facets), this.disjunctiveFacets = n(this.disjunctiveFacets), this._state = e2;
  }
  function v(e2, t2) {
    var r2 = s(e2, function(e3) {
      return e3.name === t2;
    });
    return r2 && r2.stats;
  }
  function T(e2, t2, r2, a2, n2) {
    var i2 = s(n2, function(e3) {
      return e3.name === r2;
    }), o2 = i2 && i2.data && i2.data[a2] ? i2.data[a2] : 0;
    return { type: t2, attributeName: r2, name: a2, count: o2, exhaustive: i2 && i2.exhaustive || false };
  }
  g.prototype.getFacetByName = function(e2) {
    function t2(t3) {
      return t3.name === e2;
    }
    return s(this.facets, t2) || s(this.disjunctiveFacets, t2) || s(this.hierarchicalFacets, t2);
  }, g.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"], g.prototype.getFacetValues = function(e2, t2) {
    var r2, a2 = (function(e3, t3) {
      function r3(e4) {
        return e4.name === t3;
      }
      if (e3._state.isConjunctiveFacet(t3)) {
        var a3 = s(e3.facets, r3);
        return a3 ? Object.keys(a3.data).map(function(r4) {
          var n4 = h(r4);
          return { name: r4, escapedValue: n4, count: a3.data[r4], isRefined: e3._state.isFacetRefined(t3, n4), isExcluded: e3._state.isExcludeRefined(t3, r4) };
        }) : [];
      }
      if (e3._state.isDisjunctiveFacet(t3)) {
        var n3 = s(e3.disjunctiveFacets, r3);
        return n3 ? Object.keys(n3.data).map(function(r4) {
          var a4 = h(r4);
          return { name: r4, escapedValue: a4, count: n3.data[r4], isRefined: e3._state.isDisjunctiveFacetRefined(t3, a4) };
        }) : [];
      }
      if (e3._state.isHierarchicalFacet(t3)) {
        var i2 = s(e3.hierarchicalFacets, r3);
        if (!i2) return i2;
        var o3 = e3._state.getHierarchicalFacetByName(t3), c2 = e3._state._getHierarchicalFacetSeparator(o3), u2 = p(e3._state.getHierarchicalRefinement(t3)[0] || "");
        0 === u2.indexOf(o3.rootPath) && (u2 = u2.replace(o3.rootPath + c2, ""));
        var d2 = u2.split(c2);
        return d2.unshift(t3), (function e4(t4, r4, a4) {
          t4.isRefined = t4.name === (r4[a4] && r4[a4].trim()), t4.data && t4.data.forEach(function(t5) {
            e4(t5, r4, a4 + 1);
          });
        })(i2, d2, 0), i2;
      }
    })(this, e2);
    if (a2) {
      var n2 = i(t2, { sortBy: g.DEFAULT_SORT, facetOrdering: !(t2 && t2.sortBy) }), o2 = this;
      return r2 = Array.isArray(a2) ? [e2] : o2._state.getHierarchicalFacetByName(a2.name).attributes, (function e3(t3, r3, a3, n3) {
        if (n3 = n3 || 0, Array.isArray(r3)) return t3(r3, a3[n3]);
        if (!r3.data || 0 === r3.data.length) return r3;
        var o3 = r3.data.map(function(r4) {
          return e3(t3, r4, a3, n3 + 1);
        });
        return i({ data: t3(o3, a3[n3]) }, r3);
      })(function(e3, t3) {
        var r3, a3, i2, s2, c2, d2, h2, p2 = o2.renderingContent && o2.renderingContent.facetOrdering && o2.renderingContent.facetOrdering.values && o2.renderingContent.facetOrdering.values[t3];
        if (n2.facetOrdering && p2) return a3 = [], i2 = [], s2 = p2.hide || [], c2 = (p2.order || []).reduce(function(e4, t4, r4) {
          return e4[t4] = r4, e4;
        }, {}), e3.forEach(function(e4) {
          var t4 = e4.path || e4.name, r4 = s2.indexOf(t4) > -1;
          r4 || void 0 === c2[t4] ? r4 || i2.push(e4) : a3[c2[t4]] = e4;
        }), a3 = a3.filter(function(e4) {
          return e4;
        }), "hidden" === (d2 = p2.sortRemainingBy) ? a3 : (r3 = "alpha" === d2 ? [["path", "name"], ["asc", "asc"]] : [["count"], ["desc"]], a3.concat(l(i2, r3[0], r3[1])));
        if (Array.isArray(n2.sortBy)) {
          var f2 = u(n2.sortBy, g.DEFAULT_SORT), y2 = l(e3, f2[0], f2[1]), m2 = p2 && p2.hide ? p2.hide : [];
          if (m2.length > 0) {
            var v2 = [];
            return y2.forEach(function(e4) {
              var t4 = e4.path || e4.name;
              -1 === m2.indexOf(t4) && v2.push(e4);
            }), v2;
          }
          return y2;
        }
        if ("function" == typeof n2.sortBy) return h2 = n2.sortBy, e3.sort(h2);
        throw Error("options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function");
      }, a2, r2);
    }
  }, g.prototype.getFacetStats = function(e2) {
    return this._state.isConjunctiveFacet(e2) ? v(this.facets, e2) : this._state.isDisjunctiveFacet(e2) ? v(this.disjunctiveFacets, e2) : void 0;
  }, g.prototype.getRefinements = function() {
    var e2 = this._state, t2 = this, r2 = [];
    return Object.keys(e2.facetsRefinements).forEach(function(a2) {
      e2.facetsRefinements[a2].forEach(function(n2) {
        r2.push(T(e2, "facet", a2, n2, t2.facets));
      });
    }), Object.keys(e2.facetsExcludes).forEach(function(a2) {
      e2.facetsExcludes[a2].forEach(function(n2) {
        r2.push(T(e2, "exclude", a2, n2, t2.facets));
      });
    }), Object.keys(e2.disjunctiveFacetsRefinements).forEach(function(a2) {
      e2.disjunctiveFacetsRefinements[a2].forEach(function(n2) {
        r2.push(T(e2, "disjunctive", a2, n2, t2.disjunctiveFacets));
      });
    }), Object.keys(e2.hierarchicalFacetsRefinements).forEach(function(a2) {
      e2.hierarchicalFacetsRefinements[a2].forEach(function(n2) {
        var i2, o2, c2, u2, d2, l2, h2, p2, f2, y2, m2;
        r2.push((i2 = e2, o2 = a2, c2 = n2, u2 = t2.hierarchicalFacets, d2 = i2.getHierarchicalFacetByName(o2), l2 = i2._getHierarchicalFacetSeparator(d2), h2 = c2.split(l2), p2 = s(u2, function(e3) {
          return e3.name === o2;
        }), y2 = (f2 = h2.reduce(function(e3, t3) {
          var r3 = e3 && s(e3.data, function(e4) {
            return e4.name === t3;
          });
          return void 0 !== r3 ? r3 : e3;
        }, p2)) && f2.count || 0, m2 = f2 && f2.exhaustive || false, { type: "hierarchical", attributeName: o2, name: f2 && f2.path || "", count: y2, exhaustive: m2 }));
      });
    }), Object.keys(e2.numericRefinements).forEach(function(t3) {
      var a2 = e2.numericRefinements[t3];
      Object.keys(a2).forEach(function(e3) {
        a2[e3].forEach(function(a3) {
          r2.push({ type: "numeric", attributeName: t3, name: a3, numericValue: a3, operator: e3 });
        });
      });
    }), e2.tagRefinements.forEach(function(e3) {
      r2.push({ type: "tag", attributeName: "_tags", name: e3 });
    }), r2;
  }, t.exports = g;
}, 370127, (e, t, r) => {
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = function(e2) {
    return e2.reduce(function(e3, t2) {
      return e3.concat(t2);
    }, []);
  };
}, 166897, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(990753), i = e.r(370127);
  t.exports = function(e2, t2) {
    var r2, a2, o = {};
    return t2.forEach(function(t3) {
      t3.forEach(function(t4, r3) {
        e2.includes(t4.objectID) || (o[t4.objectID] ? o[t4.objectID] = { indexSum: o[t4.objectID].indexSum + r3, count: o[t4.objectID].count + 1 } : o[t4.objectID] = { indexSum: r3, count: 1 });
      });
    }), (r2 = t2.length, a2 = [], Object.keys(o).forEach(function(e3) {
      o[e3].count < 2 && (o[e3].indexSum += 100), a2.push({ objectID: e3, avgOfIndices: o[e3].indexSum / r2 });
    }), a2.sort(function(e3, t3) {
      return e3.avgOfIndices > t3.avgOfIndices ? 1 : -1;
    })).reduce(function(e3, r3) {
      var a3 = n(i(t2), function(e4) {
        return e4.objectID === r3.objectID;
      });
      return a3 ? e3.concat(a3) : e3;
    }, []);
  };
}, 58524, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(106824), i = e.r(292322), o = e.r(43783).escapeFacetValue, s = e.r(888201), c = e.r(337789), u = e.r(471e3), d = e.r(101324), l = e.r(131629), h = e.r(909183), p = e.r(741789), f = e.r(471263), y = e.r(615298), m = e.r(166897), g = e.r(176424);
  function v(e2, t2, r2, a2) {
    "function" == typeof e2.addAlgoliaAgent && e2.addAlgoliaAgent("JS Helper (" + g + ")"), this.setClient(e2);
    var n2 = r2 || {};
    n2.index = t2, this.state = f.make(n2), this.recommendState = new l({ params: n2.recommendState }), this.lastResults = null, this.lastRecommendResults = null, this._queryId = 0, this._recommendQueryId = 0, this._lastQueryIdReceived = -1, this._lastRecommendQueryIdReceived = -1, this.derivedHelpers = [], this._currentNbQueries = 0, this._currentNbRecommendQueries = 0, this._searchResultsOptions = a2, this._recommendCache = {};
  }
  function T(e2) {
    if (e2 < 0) throw Error("Page requested below 0.");
    return this._change({ state: this.state.setPage(e2), isPageReset: false }), this;
  }
  function P() {
    return this.state.page;
  }
  s(v, n), v.prototype.search = function() {
    return this._search({ onlyWithDerivedHelpers: false }), this;
  }, v.prototype.searchOnlyWithDerivedHelpers = function() {
    return this._search({ onlyWithDerivedHelpers: true }), this;
  }, v.prototype.searchWithComposition = function() {
    return this._runComposition({ onlyWithDerivedHelpers: true }), this;
  }, v.prototype.recommend = function() {
    return this._recommend(), this;
  }, v.prototype.getQuery = function() {
    var e2 = this.state;
    return p._getHitsSearchParams(e2);
  }, v.prototype.searchOnce = function(e2, t2) {
    var r2 = e2 ? this.state.setQueryParameters(e2) : this.state, a2 = p._getQueries(r2.index, r2), n2 = this;
    return (this._currentNbQueries++, this.emit("searchOnce", { state: r2 }), t2) ? void this.client.search(a2).then(function(e3) {
      n2._currentNbQueries--, 0 === n2._currentNbQueries && n2.emit("searchQueueEmpty"), t2(null, new y(r2, e3.results), r2);
    }).catch(function(e3) {
      n2._currentNbQueries--, 0 === n2._currentNbQueries && n2.emit("searchQueueEmpty"), t2(e3, null, r2);
    }) : this.client.search(a2).then(function(e3) {
      return n2._currentNbQueries--, 0 === n2._currentNbQueries && n2.emit("searchQueueEmpty"), { content: new y(r2, e3.results), state: r2, _originalResponse: e3 };
    }, function(e3) {
      throw n2._currentNbQueries--, 0 === n2._currentNbQueries && n2.emit("searchQueueEmpty"), e3;
    });
  }, v.prototype.findAnswers = function(e2) {
    console.warn("[algoliasearch-helper] answers is no longer supported");
    var t2 = this.state, r2 = this.derivedHelpers[0];
    if (!r2) return Promise.resolve([]);
    var a2 = r2.getModifiedState(t2), n2 = c({ attributesForPrediction: e2.attributesForPrediction, nbHits: e2.nbHits }, { params: d(p._getHitsSearchParams(a2), ["attributesToSnippet", "hitsPerPage", "restrictSearchableAttributes", "snippetEllipsisText"]) }), i2 = "search for answers was called, but this client does not have a function client.initIndex(index).findAnswers";
    if ("function" != typeof this.client.initIndex) throw Error(i2);
    var o2 = this.client.initIndex(a2.index);
    if ("function" != typeof o2.findAnswers) throw Error(i2);
    return o2.findAnswers(a2.query, e2.queryLanguages, n2);
  }, v.prototype.searchForFacetValues = function(e2, t2, r2, a2) {
    var n2, i2 = "function" == typeof this.client.searchForFacetValues && "function" != typeof this.client.searchForFacets, s2 = "function" == typeof this.client.initIndex;
    if (!i2 && !s2 && "function" != typeof this.client.search) throw Error("search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues");
    var c2 = this.state.setQueryParameters(a2 || {}), u2 = c2.isDisjunctiveFacet(e2), d2 = p.getSearchForFacetQuery(e2, t2, r2, c2);
    this._currentNbQueries++;
    var l2 = this;
    i2 ? n2 = this.client.searchForFacetValues([{ indexName: c2.index, params: d2 }]) : s2 ? n2 = this.client.initIndex(c2.index).searchForFacetValues(d2) : (delete d2.facetName, n2 = this.client.search([{ type: "facet", facet: e2, indexName: c2.index, params: d2 }]).then(function(e3) {
      return e3.results[0];
    })), this.emit("searchForFacetValues", { state: c2, facet: e2, query: t2 });
    var h2 = this.lastResults && this.lastResults.index === c2.index && this.lastResults.renderingContent && this.lastResults.renderingContent.facetOrdering && this.lastResults.renderingContent.facetOrdering.values && this.lastResults.renderingContent.facetOrdering.values[e2] && this.lastResults.renderingContent.facetOrdering.values[e2].hide || [];
    return n2.then(function(t3) {
      return l2._currentNbQueries--, 0 === l2._currentNbQueries && l2.emit("searchQueueEmpty"), (t3 = Array.isArray(t3) ? t3[0] : t3).facetHits = t3.facetHits.reduce(function(t4, r3) {
        return h2.indexOf(r3.value) > -1 || (r3.escapedValue = o(r3.value), r3.isRefined = u2 ? c2.isDisjunctiveFacetRefined(e2, r3.escapedValue) : c2.isFacetRefined(e2, r3.escapedValue), t4.push(r3)), t4;
      }, []), t3;
    }, function(e3) {
      throw l2._currentNbQueries--, 0 === l2._currentNbQueries && l2.emit("searchQueueEmpty"), e3;
    });
  }, v.prototype.searchForCompositionFacetValues = function(e2, t2, r2, a2) {
    if ("function" != typeof this.client.searchForFacetValues) throw Error("search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues");
    var n2, i2 = this.state.setQueryParameters(a2 || {}), s2 = i2.isDisjunctiveFacet(e2);
    this._currentNbQueries++;
    var c2 = this;
    return n2 = this.client.searchForFacetValues({ compositionID: i2.index, facetName: e2, searchForFacetValuesRequest: { params: { query: t2, maxFacetHits: r2, searchQuery: p._getCompositionHitsSearchParams(i2) } } }), this.emit("searchForFacetValues", { state: i2, facet: e2, query: t2 }), n2.then(function(t3) {
      return c2._currentNbQueries--, 0 === c2._currentNbQueries && c2.emit("searchQueueEmpty"), (t3 = t3.results[0]).facetHits.forEach(function(t4) {
        t4.escapedValue = o(t4.value), t4.isRefined = s2 ? i2.isDisjunctiveFacetRefined(e2, t4.escapedValue) : i2.isFacetRefined(e2, t4.escapedValue);
      }), t3;
    }, function(e3) {
      throw c2._currentNbQueries--, 0 === c2._currentNbQueries && c2.emit("searchQueueEmpty"), e3;
    });
  }, v.prototype.setQuery = function(e2) {
    return this._change({ state: this.state.resetPage().setQuery(e2), isPageReset: true }), this;
  }, v.prototype.clearRefinements = function(e2) {
    return this._change({ state: this.state.resetPage().clearRefinements(e2), isPageReset: true }), this;
  }, v.prototype.clearTags = function() {
    return this._change({ state: this.state.resetPage().clearTags(), isPageReset: true }), this;
  }, v.prototype.addDisjunctiveFacetRefinement = function(e2, t2) {
    return this._change({ state: this.state.resetPage().addDisjunctiveFacetRefinement(e2, t2), isPageReset: true }), this;
  }, v.prototype.addDisjunctiveRefine = function() {
    return this.addDisjunctiveFacetRefinement.apply(this, arguments);
  }, v.prototype.addHierarchicalFacetRefinement = function(e2, t2) {
    return this._change({ state: this.state.resetPage().addHierarchicalFacetRefinement(e2, t2), isPageReset: true }), this;
  }, v.prototype.addNumericRefinement = function(e2, t2, r2) {
    return this._change({ state: this.state.resetPage().addNumericRefinement(e2, t2, r2), isPageReset: true }), this;
  }, v.prototype.addFacetRefinement = function(e2, t2) {
    return this._change({ state: this.state.resetPage().addFacetRefinement(e2, t2), isPageReset: true }), this;
  }, v.prototype.addRefine = function() {
    return this.addFacetRefinement.apply(this, arguments);
  }, v.prototype.addFacetExclusion = function(e2, t2) {
    return this._change({ state: this.state.resetPage().addExcludeRefinement(e2, t2), isPageReset: true }), this;
  }, v.prototype.addExclude = function() {
    return this.addFacetExclusion.apply(this, arguments);
  }, v.prototype.addTag = function(e2) {
    return this._change({ state: this.state.resetPage().addTagRefinement(e2), isPageReset: true }), this;
  }, v.prototype.addFrequentlyBoughtTogether = function(e2) {
    return this._recommendChange({ state: this.recommendState.addFrequentlyBoughtTogether(e2) }), this;
  }, v.prototype.addRelatedProducts = function(e2) {
    return this._recommendChange({ state: this.recommendState.addRelatedProducts(e2) }), this;
  }, v.prototype.addTrendingItems = function(e2) {
    return this._recommendChange({ state: this.recommendState.addTrendingItems(e2) }), this;
  }, v.prototype.addTrendingFacets = function(e2) {
    return this._recommendChange({ state: this.recommendState.addTrendingFacets(e2) }), this;
  }, v.prototype.addLookingSimilar = function(e2) {
    return this._recommendChange({ state: this.recommendState.addLookingSimilar(e2) }), this;
  }, v.prototype.removeNumericRefinement = function(e2, t2, r2) {
    return this._change({ state: this.state.resetPage().removeNumericRefinement(e2, t2, r2), isPageReset: true }), this;
  }, v.prototype.removeDisjunctiveFacetRefinement = function(e2, t2) {
    return this._change({ state: this.state.resetPage().removeDisjunctiveFacetRefinement(e2, t2), isPageReset: true }), this;
  }, v.prototype.removeDisjunctiveRefine = function() {
    return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
  }, v.prototype.removeHierarchicalFacetRefinement = function(e2) {
    return this._change({ state: this.state.resetPage().removeHierarchicalFacetRefinement(e2), isPageReset: true }), this;
  }, v.prototype.removeFacetRefinement = function(e2, t2) {
    return this._change({ state: this.state.resetPage().removeFacetRefinement(e2, t2), isPageReset: true }), this;
  }, v.prototype.removeRefine = function() {
    return this.removeFacetRefinement.apply(this, arguments);
  }, v.prototype.removeFacetExclusion = function(e2, t2) {
    return this._change({ state: this.state.resetPage().removeExcludeRefinement(e2, t2), isPageReset: true }), this;
  }, v.prototype.removeExclude = function() {
    return this.removeFacetExclusion.apply(this, arguments);
  }, v.prototype.removeTag = function(e2) {
    return this._change({ state: this.state.resetPage().removeTagRefinement(e2), isPageReset: true }), this;
  }, v.prototype.removeFrequentlyBoughtTogether = function(e2) {
    return this._recommendChange({ state: this.recommendState.removeParams(e2) }), this;
  }, v.prototype.removeRelatedProducts = function(e2) {
    return this._recommendChange({ state: this.recommendState.removeParams(e2) }), this;
  }, v.prototype.removeTrendingItems = function(e2) {
    return this._recommendChange({ state: this.recommendState.removeParams(e2) }), this;
  }, v.prototype.removeTrendingFacets = function(e2) {
    return this._recommendChange({ state: this.recommendState.removeParams(e2) }), this;
  }, v.prototype.removeLookingSimilar = function(e2) {
    return this._recommendChange({ state: this.recommendState.removeParams(e2) }), this;
  }, v.prototype.toggleFacetExclusion = function(e2, t2) {
    return this._change({ state: this.state.resetPage().toggleExcludeFacetRefinement(e2, t2), isPageReset: true }), this;
  }, v.prototype.toggleExclude = function() {
    return this.toggleFacetExclusion.apply(this, arguments);
  }, v.prototype.toggleRefinement = function(e2, t2) {
    return this.toggleFacetRefinement(e2, t2);
  }, v.prototype.toggleFacetRefinement = function(e2, t2) {
    return this._change({ state: this.state.resetPage().toggleFacetRefinement(e2, t2), isPageReset: true }), this;
  }, v.prototype.toggleRefine = function() {
    return this.toggleFacetRefinement.apply(this, arguments);
  }, v.prototype.toggleTag = function(e2) {
    return this._change({ state: this.state.resetPage().toggleTagRefinement(e2), isPageReset: true }), this;
  }, v.prototype.nextPage = function() {
    var e2 = this.state.page || 0;
    return this.setPage(e2 + 1);
  }, v.prototype.previousPage = function() {
    var e2 = this.state.page || 0;
    return this.setPage(e2 - 1);
  }, v.prototype.setCurrentPage = T, v.prototype.setPage = T, v.prototype.setIndex = function(e2) {
    return this._change({ state: this.state.resetPage().setIndex(e2), isPageReset: true }), this;
  }, v.prototype.setQueryParameter = function(e2, t2) {
    return this._change({ state: this.state.resetPage().setQueryParameter(e2, t2), isPageReset: true }), this;
  }, v.prototype.setState = function(e2) {
    return this._change({ state: f.make(e2), isPageReset: false }), this;
  }, v.prototype.overrideStateWithoutTriggeringChangeEvent = function(e2) {
    return this.state = new f(e2), this;
  }, v.prototype.hasRefinements = function(e2) {
    return !!u(this.state.getNumericRefinements(e2)) || (this.state.isConjunctiveFacet(e2) ? this.state.isFacetRefined(e2) : this.state.isDisjunctiveFacet(e2) ? this.state.isDisjunctiveFacetRefined(e2) : !!this.state.isHierarchicalFacet(e2) && this.state.isHierarchicalFacetRefined(e2));
  }, v.prototype.isExcluded = function(e2, t2) {
    return this.state.isExcludeRefined(e2, t2);
  }, v.prototype.isDisjunctiveRefined = function(e2, t2) {
    return this.state.isDisjunctiveFacetRefined(e2, t2);
  }, v.prototype.hasTag = function(e2) {
    return this.state.isTagRefined(e2);
  }, v.prototype.isTagRefined = function() {
    return this.hasTagRefinements.apply(this, arguments);
  }, v.prototype.getIndex = function() {
    return this.state.index;
  }, v.prototype.getCurrentPage = P, v.prototype.getPage = P, v.prototype.getTags = function() {
    return this.state.tagRefinements;
  }, v.prototype.getRefinements = function(e2) {
    var t2 = [];
    this.state.isConjunctiveFacet(e2) ? (this.state.getConjunctiveRefinements(e2).forEach(function(e3) {
      t2.push({ value: e3, type: "conjunctive" });
    }), this.state.getExcludeRefinements(e2).forEach(function(e3) {
      t2.push({ value: e3, type: "exclude" });
    })) : this.state.isDisjunctiveFacet(e2) && this.state.getDisjunctiveRefinements(e2).forEach(function(e3) {
      t2.push({ value: e3, type: "disjunctive" });
    });
    var r2 = this.state.getNumericRefinements(e2);
    return Object.keys(r2).forEach(function(e3) {
      var a2 = r2[e3];
      t2.push({ value: a2, operator: e3, type: "numeric" });
    }), t2;
  }, v.prototype.getNumericRefinement = function(e2, t2) {
    return this.state.getNumericRefinement(e2, t2);
  }, v.prototype.getHierarchicalFacetBreadcrumb = function(e2) {
    return this.state.getHierarchicalFacetBreadcrumb(e2);
  }, v.prototype._search = function(e2) {
    var t2 = this.state, r2 = [], a2 = [];
    e2.onlyWithDerivedHelpers || (a2 = p._getQueries(t2.index, t2), r2.push({ state: t2, queriesCount: a2.length, helper: this }), this.emit("search", { state: t2, results: this.lastResults }));
    var n2 = this.derivedHelpers.map(function(e3) {
      var a3 = e3.getModifiedState(t2), n3 = a3.index ? p._getQueries(a3.index, a3) : [];
      return r2.push({ state: a3, queriesCount: n3.length, helper: e3 }), e3.emit("search", { state: a3, results: e3.lastResults }), n3;
    }), i2 = Array.prototype.concat.apply(a2, n2), o2 = this._queryId++;
    if (this._currentNbQueries++, !i2.length) return Promise.resolve({ results: [] }).then(this._dispatchAlgoliaResponse.bind(this, r2, o2));
    try {
      this.client.search(i2).then(this._dispatchAlgoliaResponse.bind(this, r2, o2)).catch(this._dispatchAlgoliaError.bind(this, o2));
    } catch (e3) {
      this.emit("error", { error: e3 });
    }
  }, v.prototype._runComposition = function() {
    var e2 = this.state, t2 = [], r2 = this.derivedHelpers.map(function(r3) {
      var a3 = r3.getModifiedState(e2), n3 = p._getCompositionQueries(a3);
      return t2.push({ state: a3, helper: r3 }), r3.emit("search", { state: a3, results: r3.lastResults }), n3;
    }), a2 = Array.prototype.concat.apply([], r2), n2 = this._queryId++;
    if (this._currentNbQueries++, !a2.length) return Promise.resolve({ results: [] }).then(this._dispatchAlgoliaResponse.bind(this, t2, n2));
    if (a2.length > 1) throw Error("Only one query is allowed when using a composition.");
    var i2 = a2[0];
    try {
      this.client.search(i2).then(this._dispatchAlgoliaResponse.bind(this, t2, n2)).catch(this._dispatchAlgoliaError.bind(this, n2));
    } catch (e3) {
      this.emit("error", { error: e3 });
    }
  }, v.prototype._recommend = function() {
    var e2 = this.state, t2 = this.recommendState, r2 = this.getIndex(), a2 = [{ state: t2, index: r2, helper: this }], n2 = t2.params.map(function(e3) {
      return e3.$$id;
    });
    this.emit("fetch", { recommend: { state: t2, results: this.lastRecommendResults } });
    var i2 = this._recommendCache, o2 = this.derivedHelpers.map(function(t3) {
      var r3 = t3.getModifiedState(e2).index;
      if (!r3) return [];
      var o3 = t3.getModifiedRecommendState(new l());
      return a2.push({ state: o3, index: r3, helper: t3 }), n2 = Array.prototype.concat.apply(n2, o3.params.map(function(e3) {
        return e3.$$id;
      })), t3.emit("fetch", { recommend: { state: o3, results: t3.lastRecommendResults } }), o3._buildQueries(r3, i2);
    }), s2 = Array.prototype.concat.apply(this.recommendState._buildQueries(r2, i2), o2);
    if (0 !== s2.length) {
      if (s2.length > 0 && void 0 === this.client.getRecommendations) return void console.warn("Please update algoliasearch/lite to the latest version in order to use recommend widgets.");
      var c2 = this._recommendQueryId++;
      this._currentNbRecommendQueries++;
      try {
        this.client.getRecommendations(s2).then(this._dispatchRecommendResponse.bind(this, c2, a2, n2)).catch(this._dispatchRecommendError.bind(this, c2));
      } catch (e3) {
        this.emit("error", { error: e3 });
      }
    }
  }, v.prototype._dispatchAlgoliaResponse = function(e2, t2, r2) {
    var a2 = this;
    if (!(t2 < this._lastQueryIdReceived)) {
      this._currentNbQueries -= t2 - this._lastQueryIdReceived, this._lastQueryIdReceived = t2, 0 === this._currentNbQueries && this.emit("searchQueueEmpty");
      var n2 = r2.results.slice(), i2 = Object.keys(r2).reduce(function(e3, t3) {
        return "results" !== t3 && (e3[t3] = r2[t3]), e3;
      }, {});
      Object.keys(i2).length <= 0 && (i2 = void 0), e2.forEach(function(e3) {
        var t3 = e3.state, r3 = e3.queriesCount, o2 = e3.helper, s2 = void 0 !== r3 ? n2.splice(0, r3) : n2;
        if (!t3.index) return void o2.emit("result", { results: null, state: t3 });
        if (s2.length > 0 && s2[0].feedID) {
          var c2 = s2.map(function(e4) {
            var r4 = new y(t3, [e4], a2._searchResultsOptions);
            return void 0 !== i2 && (r4._rawContent = i2), r4;
          });
          o2.lastResults = new y(t3, [s2[0]], a2._searchResultsOptions), o2.lastResults.feeds = c2, void 0 !== i2 && (o2.lastResults._rawContent = i2);
        } else o2.lastResults = new y(t3, s2, a2._searchResultsOptions), void 0 !== i2 && (o2.lastResults._rawContent = i2);
        o2.emit("result", { results: o2.lastResults, state: t3 });
      });
    }
  }, v.prototype._dispatchRecommendResponse = function(e2, t2, r2, a2) {
    if (!(e2 < this._lastRecommendQueryIdReceived)) {
      this._currentNbRecommendQueries -= e2 - this._lastRecommendQueryIdReceived, this._lastRecommendQueryIdReceived = e2, 0 === this._currentNbRecommendQueries && this.emit("recommendQueueEmpty");
      var n2 = this._recommendCache, i2 = {};
      r2.filter(function(e3) {
        return void 0 === n2[e3];
      }).forEach(function(e3, t3) {
        i2[e3] || (i2[e3] = []), i2[e3].push(t3);
      }), Object.keys(i2).forEach(function(e3) {
        var t3 = i2[e3], o3 = a2.results[t3[0]];
        if (1 === t3.length) {
          n2[e3] = o3;
          return;
        }
        n2[e3] = Object.assign({}, o3, { hits: m(r2, t3.map(function(e4) {
          return a2.results[e4].hits;
        })) });
      });
      var o2 = {};
      r2.forEach(function(e3) {
        o2[e3] = n2[e3];
      }), t2.forEach(function(e3) {
        var t3 = e3.state, r3 = e3.helper;
        e3.index ? (r3.lastRecommendResults = new h(t3, o2), r3.emit("recommend:result", { recommend: { results: r3.lastRecommendResults, state: t3 } })) : r3.emit("recommend:result", { results: null, state: t3 });
      });
    }
  }, v.prototype._dispatchAlgoliaError = function(e2, t2) {
    e2 < this._lastQueryIdReceived || (this._currentNbQueries -= e2 - this._lastQueryIdReceived, this._lastQueryIdReceived = e2, this.emit("error", { error: t2 }), 0 === this._currentNbQueries && this.emit("searchQueueEmpty"));
  }, v.prototype._dispatchRecommendError = function(e2, t2) {
    e2 < this._lastRecommendQueryIdReceived || (this._currentNbRecommendQueries -= e2 - this._lastRecommendQueryIdReceived, this._lastRecommendQueryIdReceived = e2, this.emit("error", { error: t2 }), 0 === this._currentNbRecommendQueries && this.emit("recommendQueueEmpty"));
  }, v.prototype.containsRefinement = function(e2, t2, r2, a2) {
    return e2 || 0 !== t2.length || 0 !== r2.length || 0 !== a2.length;
  }, v.prototype._hasDisjunctiveRefinements = function(e2) {
    return this.state.disjunctiveRefinements[e2] && this.state.disjunctiveRefinements[e2].length > 0;
  }, v.prototype._change = function(e2) {
    var t2 = e2.state, r2 = e2.isPageReset;
    t2 !== this.state && (this.state = t2, this.emit("change", { state: this.state, results: this.lastResults, isPageReset: r2 }));
  }, v.prototype._recommendChange = function(e2) {
    var t2 = e2.state;
    t2 !== this.recommendState && (this.recommendState = t2, this.emit("recommend:change", { search: { results: this.lastResults, state: this.state }, recommend: { results: this.lastRecommendResults, state: this.recommendState } }));
  }, v.prototype.clearCache = function() {
    return this.client.clearCache && this.client.clearCache(), this;
  }, v.prototype.setClient = function(e2) {
    return this.client === e2 || ("function" == typeof e2.addAlgoliaAgent && e2.addAlgoliaAgent("JS Helper (" + g + ")"), this.client = e2), this;
  }, v.prototype.getClient = function() {
    return this.client;
  }, v.prototype.derive = function(e2, t2) {
    var r2 = new i(this, e2, t2);
    return this.derivedHelpers.push(r2), r2;
  }, v.prototype.detachDerivedHelper = function(e2) {
    var t2 = this.derivedHelpers.indexOf(e2);
    if (-1 === t2) throw Error("Derived helper already detached");
    this.derivedHelpers.splice(t2, 1);
  }, v.prototype.hasPendingRequests = function() {
    return this._currentNbQueries > 0;
  }, t.exports = v;
}, 133070, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(58524), i = e.r(131629), o = e.r(909183), s = e.r(471263), c = e.r(615298);
  function u(e2, t2, r2, a2) {
    return new n(e2, t2, r2, a2);
  }
  u.version = e.r(176424), u.AlgoliaSearchHelper = n, u.SearchParameters = s, u.RecommendParameters = i, u.SearchResults = c, u.RecommendResults = o, t.exports = u;
}, 176424, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = "3.29.3";
}, 231473, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = TypeError;
}, 787405, (e, t, r) => {
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = "function" == typeof Map && Map.prototype, i = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, o = n && i && "function" == typeof i.get ? i.get : null, s = n && Map.prototype.forEach, c = "function" == typeof Set && Set.prototype, u = Object.getOwnPropertyDescriptor && c ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, d = c && u && "function" == typeof u.get ? u.get : null, l = c && Set.prototype.forEach, h = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null, p = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null, f = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null, y = Boolean.prototype.valueOf, m = Object.prototype.toString, g = Function.prototype.toString, v = String.prototype.match, T = String.prototype.slice, P = String.prototype.replace, w = String.prototype.toUpperCase, I = String.prototype.toLowerCase, M = RegExp.prototype.test, _ = Array.prototype.concat, S = Array.prototype.join, b = Array.prototype.slice, E = Math.floor, R = "function" == typeof BigInt ? BigInt.prototype.valueOf : null, x = Object.getOwnPropertySymbols, k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null, H = "function" == typeof Symbol && "object" == typeof Symbol.iterator, A = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === H ? "object" : "symbol") ? Symbol.toStringTag : null, q = Object.prototype.propertyIsEnumerable, W = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e2) {
    return e2.__proto__;
  } : null);
  function j(e2, t2) {
    if (e2 === 1 / 0 || e2 === -1 / 0 || e2 != e2 || e2 && e2 > -1e3 && e2 < 1e3 || M.call(/e/, t2)) return t2;
    var r2 = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ("number" == typeof e2) {
      var a2 = e2 < 0 ? -E(-e2) : E(e2);
      if (a2 !== e2) {
        var n2 = String(a2), i2 = T.call(t2, n2.length + 1);
        return P.call(n2, r2, "$&_") + "." + P.call(P.call(i2, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return P.call(t2, r2, "$&_");
  }
  var O = {}, D = O.custom, C = G(D) ? D : null, N = { __proto__: null, double: '"', single: "'" }, U = { __proto__: null, double: /(["\\])/g, single: /(['\\])/g };
  function F(e2, t2, r2) {
    var a2 = N[r2.quoteStyle || t2];
    return a2 + e2 + a2;
  }
  function B(e2) {
    return !A || !("object" == typeof e2 && (A in e2 || void 0 !== e2[A]));
  }
  function K(e2) {
    return "[object Array]" === V(e2) && B(e2);
  }
  function L(e2) {
    return "[object RegExp]" === V(e2) && B(e2);
  }
  function G(e2) {
    if (H) return e2 && "object" == typeof e2 && e2 instanceof Symbol;
    if ("symbol" == typeof e2) return true;
    if (!e2 || "object" != typeof e2 || !k) return false;
    try {
      return k.call(e2), true;
    } catch (e3) {
    }
    return false;
  }
  t.exports = function t2(r2, a2, n2, i2) {
    var c2, u2, m2, w2, M2, E2 = a2 || {};
    if ($(E2, "quoteStyle") && !$(N, E2.quoteStyle)) throw TypeError('option "quoteStyle" must be "single" or "double"');
    if ($(E2, "maxStringLength") && ("number" == typeof E2.maxStringLength ? E2.maxStringLength < 0 && E2.maxStringLength !== 1 / 0 : null !== E2.maxStringLength)) throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var x2 = !$(E2, "customInspect") || E2.customInspect;
    if ("boolean" != typeof x2 && "symbol" !== x2) throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if ($(E2, "indent") && null !== E2.indent && "	" !== E2.indent && !(parseInt(E2.indent, 10) === E2.indent && E2.indent > 0)) throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if ($(E2, "numericSeparator") && "boolean" != typeof E2.numericSeparator) throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var D2 = E2.numericSeparator;
    if (void 0 === r2) return "undefined";
    if (null === r2) return "null";
    if ("boolean" == typeof r2) return r2 ? "true" : "false";
    if ("string" == typeof r2) return (function e2(t3, r3) {
      if (t3.length > r3.maxStringLength) {
        var a3 = t3.length - r3.maxStringLength;
        return e2(T.call(t3, 0, r3.maxStringLength), r3) + ("... " + a3) + " more character" + (a3 > 1 ? "s" : "");
      }
      var n3 = U[r3.quoteStyle || "single"];
      return n3.lastIndex = 0, F(P.call(P.call(t3, n3, "\\$1"), /[\x00-\x1f]/g, J), "single", r3);
    })(r2, E2);
    if ("number" == typeof r2) {
      if (0 === r2) return 1 / 0 / r2 > 0 ? "0" : "-0";
      var Q2 = String(r2);
      return D2 ? j(r2, Q2) : Q2;
    }
    if ("bigint" == typeof r2) {
      var er = String(r2) + "n";
      return D2 ? j(r2, er) : er;
    }
    var ea = void 0 === E2.depth ? 5 : E2.depth;
    if (void 0 === n2 && (n2 = 0), n2 >= ea && ea > 0 && "object" == typeof r2) return K(r2) ? "[Array]" : "[Object]";
    var en = (function(e2, t3) {
      var r3;
      if ("	" === e2.indent) r3 = "	";
      else {
        if ("number" != typeof e2.indent || !(e2.indent > 0)) return null;
        r3 = S.call(Array(e2.indent + 1), " ");
      }
      return { base: r3, prev: S.call(Array(t3 + 1), r3) };
    })(E2, n2);
    if (void 0 === i2) i2 = [];
    else if (z(i2, r2) >= 0) return "[Circular]";
    function ei(e2, r3, a3) {
      if (r3 && (i2 = b.call(i2)).push(r3), a3) {
        var o2 = { depth: E2.depth };
        return $(E2, "quoteStyle") && (o2.quoteStyle = E2.quoteStyle), t2(e2, o2, n2 + 1, i2);
      }
      return t2(e2, E2, n2 + 1, i2);
    }
    if ("function" == typeof r2 && !L(r2)) {
      var eo = (function(e2) {
        if (e2.name) return e2.name;
        var t3 = v.call(g.call(e2), /^function\s*([\w$]+)/);
        return t3 ? t3[1] : null;
      })(r2), es = et(r2, ei);
      return "[Function" + (eo ? ": " + eo : " (anonymous)") + "]" + (es.length > 0 ? " { " + S.call(es, ", ") + " }" : "");
    }
    if (G(r2)) {
      var ec = H ? P.call(String(r2), /^(Symbol\(.*\))_[^)]*$/, "$1") : k.call(r2);
      return "object" != typeof r2 || H ? ec : X(ec);
    }
    if ((eu = r2) && "object" == typeof eu && ("u" > typeof HTMLElement && eu instanceof HTMLElement || "string" == typeof eu.nodeName && "function" == typeof eu.getAttribute)) {
      for (var eu, ed, el = "<" + I.call(String(r2.nodeName)), eh = r2.attributes || [], ep = 0; ep < eh.length; ep++) {
        el += " " + eh[ep].name + "=" + F((ed = eh[ep].value, P.call(String(ed), /"/g, "&quot;")), "double", E2);
      }
      return el += ">", r2.childNodes && r2.childNodes.length && (el += "..."), el += "</" + I.call(String(r2.nodeName)) + ">";
    }
    if (K(r2)) {
      if (0 === r2.length) return "[]";
      var ef = et(r2, ei);
      return en && !(function(e2) {
        for (var t3 = 0; t3 < e2.length; t3++) if (z(e2[t3], "\n") >= 0) return false;
        return true;
      })(ef) ? "[" + ee(ef, en) + "]" : "[ " + S.call(ef, ", ") + " ]";
    }
    if ("[object Error]" === V(c2 = r2) && B(c2)) {
      var ey = et(r2, ei);
      return "cause" in Error.prototype || !("cause" in r2) || q.call(r2, "cause") ? 0 === ey.length ? "[" + String(r2) + "]" : "{ [" + String(r2) + "] " + S.call(ey, ", ") + " }" : "{ [" + String(r2) + "] " + S.call(_.call("[cause]: " + ei(r2.cause), ey), ", ") + " }";
    }
    if ("object" == typeof r2 && x2) {
      if (C && "function" == typeof r2[C] && O) return O(r2, { depth: ea - n2 });
      else if ("symbol" !== x2 && "function" == typeof r2.inspect) return r2.inspect();
    }
    if ((function(e2) {
      if (!o || !e2 || "object" != typeof e2) return false;
      try {
        o.call(e2);
        try {
          d.call(e2);
        } catch (e3) {
          return true;
        }
        return e2 instanceof Map;
      } catch (e3) {
      }
      return false;
    })(r2)) {
      var em = [];
      return s && s.call(r2, function(e2, t3) {
        em.push(ei(t3, r2, true) + " => " + ei(e2, r2));
      }), Z("Map", o.call(r2), em, en);
    }
    if ((function(e2) {
      if (!d || !e2 || "object" != typeof e2) return false;
      try {
        d.call(e2);
        try {
          o.call(e2);
        } catch (e3) {
          return true;
        }
        return e2 instanceof Set;
      } catch (e3) {
      }
      return false;
    })(r2)) {
      var eg = [];
      return l && l.call(r2, function(e2) {
        eg.push(ei(e2, r2));
      }), Z("Set", d.call(r2), eg, en);
    }
    if ((function(e2) {
      if (!h || !e2 || "object" != typeof e2) return false;
      try {
        h.call(e2, h);
        try {
          p.call(e2, p);
        } catch (e3) {
          return true;
        }
        return e2 instanceof WeakMap;
      } catch (e3) {
      }
      return false;
    })(r2)) return Y("WeakMap");
    if ((function(e2) {
      if (!p || !e2 || "object" != typeof e2) return false;
      try {
        p.call(e2, p);
        try {
          h.call(e2, h);
        } catch (e3) {
          return true;
        }
        return e2 instanceof WeakSet;
      } catch (e3) {
      }
      return false;
    })(r2)) return Y("WeakSet");
    if ((function(e2) {
      if (!f || !e2 || "object" != typeof e2) return false;
      try {
        return f.call(e2), true;
      } catch (e3) {
      }
      return false;
    })(r2)) return Y("WeakRef");
    if ("[object Number]" === V(u2 = r2) && B(u2)) return X(ei(Number(r2)));
    if ((function(e2) {
      if (!e2 || "object" != typeof e2 || !R) return false;
      try {
        return R.call(e2), true;
      } catch (e3) {
      }
      return false;
    })(r2)) return X(ei(R.call(r2)));
    if ("[object Boolean]" === V(m2 = r2) && B(m2)) return X(y.call(r2));
    if ("[object String]" === V(w2 = r2) && B(w2)) return X(ei(String(r2)));
    if ("u" > typeof window && r2 === window) return "{ [object Window] }";
    if ("u" > typeof globalThis && r2 === globalThis || r2 === e.g) return "{ [object globalThis] }";
    if (!("[object Date]" === V(M2 = r2) && B(M2)) && !L(r2)) {
      var ev = et(r2, ei), eT = W ? W(r2) === Object.prototype : r2 instanceof Object || r2.constructor === Object, eP = r2 instanceof Object ? "" : "null prototype", ew = !eT && A && Object(r2) === r2 && A in r2 ? T.call(V(r2), 8, -1) : eP ? "Object" : "", eI = (eT || "function" != typeof r2.constructor ? "" : r2.constructor.name ? r2.constructor.name + " " : "") + (ew || eP ? "[" + S.call(_.call([], ew || [], eP || []), ": ") + "] " : "");
      return 0 === ev.length ? eI + "{}" : en ? eI + "{" + ee(ev, en) + "}" : eI + "{ " + S.call(ev, ", ") + " }";
    }
    return String(r2);
  };
  var Q = Object.prototype.hasOwnProperty || function(e2) {
    return e2 in this;
  };
  function $(e2, t2) {
    return Q.call(e2, t2);
  }
  function V(e2) {
    return m.call(e2);
  }
  function z(e2, t2) {
    if (e2.indexOf) return e2.indexOf(t2);
    for (var r2 = 0, a2 = e2.length; r2 < a2; r2++) if (e2[r2] === t2) return r2;
    return -1;
  }
  function J(e2) {
    var t2 = e2.charCodeAt(0), r2 = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t2];
    return r2 ? "\\" + r2 : "\\x" + (t2 < 16 ? "0" : "") + w.call(t2.toString(16));
  }
  function X(e2) {
    return "Object(" + e2 + ")";
  }
  function Y(e2) {
    return e2 + " { ? }";
  }
  function Z(e2, t2, r2, a2) {
    return e2 + " (" + t2 + ") {" + (a2 ? ee(r2, a2) : S.call(r2, ", ")) + "}";
  }
  function ee(e2, t2) {
    if (0 === e2.length) return "";
    var r2 = "\n" + t2.prev + t2.base;
    return r2 + S.call(e2, "," + r2) + "\n" + t2.prev;
  }
  function et(e2, t2) {
    var r2, a2 = K(e2), n2 = [];
    if (a2) {
      n2.length = e2.length;
      for (var i2 = 0; i2 < e2.length; i2++) n2[i2] = $(e2, i2) ? t2(e2[i2], e2) : "";
    }
    var o2 = "function" == typeof x ? x(e2) : [];
    if (H) {
      r2 = {};
      for (var s2 = 0; s2 < o2.length; s2++) r2["$" + o2[s2]] = o2[s2];
    }
    for (var c2 in e2) if ($(e2, c2) && (!a2 || String(Number(c2)) !== c2 || !(c2 < e2.length))) if (H && r2["$" + c2] instanceof Symbol) continue;
    else M.call(/[^\w$]/, c2) ? n2.push(t2(c2, e2) + ": " + t2(e2[c2], e2)) : n2.push(c2 + ": " + t2(e2[c2], e2));
    if ("function" == typeof x) for (var u2 = 0; u2 < o2.length; u2++) q.call(e2, o2[u2]) && n2.push("[" + t2(o2[u2]) + "]: " + t2(e2[o2[u2]], e2));
    return n2;
  }
}, 174353, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(787405), i = e.r(231473), o = function(e2, t2, r2) {
    for (var a2, n2 = e2; null != (a2 = n2.next); n2 = a2) if (a2.key === t2) return n2.next = a2.next, r2 || (a2.next = e2.next, e2.next = a2), a2;
  }, s = function(e2, t2) {
    if (e2) {
      var r2 = o(e2, t2);
      return r2 && r2.value;
    }
  }, c = function(e2, t2, r2) {
    var a2 = o(e2, t2);
    a2 ? a2.value = r2 : e2.next = { key: t2, next: e2.next, value: r2 };
  }, u = function(e2, t2) {
    if (e2) return o(e2, t2, true);
  };
  t.exports = function() {
    var e2, t2 = { assert: function(e3) {
      if (!t2.has(e3)) throw new i("Side channel does not contain " + n(e3));
    }, delete: function(t3) {
      var r2 = u(e2, t3);
      return r2 && e2 && !e2.next && (e2 = void 0), !!r2;
    }, get: function(t3) {
      return s(e2, t3);
    }, has: function(t3) {
      var r2;
      return !!(r2 = e2) && !!o(r2, t3);
    }, set: function(t3, r2) {
      e2 || (e2 = { next: void 0 }), c(e2, t3, r2);
    } };
    return t2;
  };
}, 314174, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = Object;
}, 892715, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = Error;
}, 607829, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = EvalError;
}, 498493, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = RangeError;
}, 167914, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = ReferenceError;
}, 26857, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = SyntaxError;
}, 991878, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = URIError;
}, 978866, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = Math.abs;
}, 365335, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = Math.floor;
}, 922083, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = Math.max;
}, 640465, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = Math.min;
}, 18849, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = Math.pow;
}, 97988, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = Math.round;
}, 636469, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = Number.isNaN || function(e2) {
    return e2 != e2;
  };
}, 366205, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(636469);
  t.exports = function(e2) {
    return n(e2) || 0 === e2 ? e2 : e2 < 0 ? -1 : 1;
  };
}, 484153, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = Object.getOwnPropertyDescriptor;
}, 83585, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(484153);
  if (n) try {
    n([], "length");
  } catch (e2) {
    n = null;
  }
  t.exports = n;
}, 393155, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = Object.defineProperty || false;
  if (n) try {
    n({}, "a", { value: 1 });
  } catch (e2) {
    n = false;
  }
  t.exports = n;
}, 199260, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = function() {
    if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return false;
    if ("symbol" == typeof Symbol.iterator) return true;
    var e2 = {}, t2 = /* @__PURE__ */ Symbol("test"), r2 = Object(t2);
    if ("string" == typeof t2 || "[object Symbol]" !== Object.prototype.toString.call(t2) || "[object Symbol]" !== Object.prototype.toString.call(r2)) return false;
    for (var a2 in e2[t2] = 42, e2) return false;
    if ("function" == typeof Object.keys && 0 !== Object.keys(e2).length || "function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e2).length) return false;
    var n = Object.getOwnPropertySymbols(e2);
    if (1 !== n.length || n[0] !== t2 || !Object.prototype.propertyIsEnumerable.call(e2, t2)) return false;
    if ("function" == typeof Object.getOwnPropertyDescriptor) {
      var i = Object.getOwnPropertyDescriptor(e2, t2);
      if (42 !== i.value || true !== i.enumerable) return false;
    }
    return true;
  };
}, 811880, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = "u" > typeof Symbol && Symbol, i = e.r(199260);
  t.exports = function() {
    return "function" == typeof n && "function" == typeof Symbol && "symbol" == typeof n("foo") && "symbol" == typeof /* @__PURE__ */ Symbol("bar") && i();
  };
}, 277146, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = "u" > typeof Reflect && Reflect.getPrototypeOf || null;
}, 818991, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = e.r(314174).getPrototypeOf || null;
}, 992819, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = Object.prototype.toString, i = Math.max, o = function(e2, t2) {
    for (var r2 = [], a2 = 0; a2 < e2.length; a2 += 1) r2[a2] = e2[a2];
    for (var n2 = 0; n2 < t2.length; n2 += 1) r2[n2 + e2.length] = t2[n2];
    return r2;
  }, s = function(e2, t2) {
    for (var r2 = [], a2 = t2 || 0, n2 = 0; a2 < e2.length; a2 += 1, n2 += 1) r2[n2] = e2[a2];
    return r2;
  }, c = function(e2, t2) {
    for (var r2 = "", a2 = 0; a2 < e2.length; a2 += 1) r2 += e2[a2], a2 + 1 < e2.length && (r2 += t2);
    return r2;
  };
  t.exports = function(e2) {
    var t2, r2 = this;
    if ("function" != typeof r2 || "[object Function]" !== n.apply(r2)) throw TypeError("Function.prototype.bind called on incompatible " + r2);
    for (var a2 = s(arguments, 1), u = i(0, r2.length - a2.length), d = [], l = 0; l < u; l++) d[l] = "$" + l;
    if (t2 = Function("binder", "return function (" + c(d, ",") + "){ return binder.apply(this,arguments); }")(function() {
      if (this instanceof t2) {
        var n2 = r2.apply(this, o(a2, arguments));
        return Object(n2) === n2 ? n2 : this;
      }
      return r2.apply(e2, o(a2, arguments));
    }), r2.prototype) {
      var h = function() {
      };
      h.prototype = r2.prototype, t2.prototype = new h(), h.prototype = null;
    }
    return t2;
  };
}, 78387, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(992819);
  t.exports = Function.prototype.bind || n;
}, 487957, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = Function.prototype.call;
}, 996077, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = Function.prototype.apply;
}, 628403, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = "u" > typeof Reflect && Reflect && Reflect.apply;
}, 510938, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(78387), i = e.r(996077), o = e.r(487957);
  t.exports = e.r(628403) || n.call(o, i);
}, 954767, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(78387), i = e.r(231473), o = e.r(487957), s = e.r(510938);
  t.exports = function(e2) {
    if (e2.length < 1 || "function" != typeof e2[0]) throw new i("a function is required");
    return s(n, o, e2);
  };
}, 905408, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n, i = e.r(954767), o = e.r(83585);
  try {
    n = [].__proto__ === Array.prototype;
  } catch (e2) {
    if (!e2 || "object" != typeof e2 || !("code" in e2) || "ERR_PROTO_ACCESS" !== e2.code) throw e2;
  }
  var s = !!n && o && o(Object.prototype, "__proto__"), c = Object, u = c.getPrototypeOf;
  t.exports = s && "function" == typeof s.get ? i([s.get]) : "function" == typeof u && function(e2) {
    return u(null == e2 ? e2 : c(e2));
  };
}, 211915, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(277146), i = e.r(818991), o = e.r(905408);
  t.exports = n ? function(e2) {
    return n(e2);
  } : i ? function(e2) {
    if (!e2 || "object" != typeof e2 && "function" != typeof e2) throw TypeError("getProto: not an object");
    return i(e2);
  } : o ? function(e2) {
    return o(e2);
  } : null;
}, 137714, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = Function.prototype.call, i = Object.prototype.hasOwnProperty;
  t.exports = e.r(78387).call(n, i);
}, 343473, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(314174), i = e.r(892715), o = e.r(607829), s = e.r(498493), c = e.r(167914), u = e.r(26857), d = e.r(231473), l = e.r(991878), h = e.r(978866), p = e.r(365335), f = e.r(922083), y = e.r(640465), m = e.r(18849), g = e.r(97988), v = e.r(366205), T = Function, P = function(e2) {
    try {
      return T('"use strict"; return (' + e2 + ").constructor;")();
    } catch (e3) {
    }
  }, w = e.r(83585), I = e.r(393155), M = function() {
    throw new d();
  }, _ = w ? (function() {
    try {
      return arguments.callee, M;
    } catch (e2) {
      try {
        return w(arguments, "callee").get;
      } catch (e3) {
        return M;
      }
    }
  })() : M, S = e.r(811880)(), b = e.r(211915), E = e.r(818991), R = e.r(277146), x = e.r(996077), k = e.r(487957), H = {}, A = "u" > typeof Uint8Array && b ? b(Uint8Array) : void 0, q = { __proto__: null, "%AggregateError%": "u" < typeof AggregateError ? void 0 : AggregateError, "%Array%": Array, "%ArrayBuffer%": "u" < typeof ArrayBuffer ? void 0 : ArrayBuffer, "%ArrayIteratorPrototype%": S && b ? b([][Symbol.iterator]()) : void 0, "%AsyncFromSyncIteratorPrototype%": void 0, "%AsyncFunction%": H, "%AsyncGenerator%": H, "%AsyncGeneratorFunction%": H, "%AsyncIteratorPrototype%": H, "%Atomics%": "u" < typeof Atomics ? void 0 : Atomics, "%BigInt%": "u" < typeof BigInt ? void 0 : BigInt, "%BigInt64Array%": "u" < typeof BigInt64Array ? void 0 : BigInt64Array, "%BigUint64Array%": "u" < typeof BigUint64Array ? void 0 : BigUint64Array, "%Boolean%": Boolean, "%DataView%": "u" < typeof DataView ? void 0 : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": i, "%eval%": eval, "%EvalError%": o, "%Float16Array%": "u" < typeof Float16Array ? void 0 : Float16Array, "%Float32Array%": "u" < typeof Float32Array ? void 0 : Float32Array, "%Float64Array%": "u" < typeof Float64Array ? void 0 : Float64Array, "%FinalizationRegistry%": "u" < typeof FinalizationRegistry ? void 0 : FinalizationRegistry, "%Function%": T, "%GeneratorFunction%": H, "%Int8Array%": "u" < typeof Int8Array ? void 0 : Int8Array, "%Int16Array%": "u" < typeof Int16Array ? void 0 : Int16Array, "%Int32Array%": "u" < typeof Int32Array ? void 0 : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": S && b ? b(b([][Symbol.iterator]())) : void 0, "%JSON%": "object" == typeof JSON ? JSON : void 0, "%Map%": "u" < typeof Map ? void 0 : Map, "%MapIteratorPrototype%": "u" > typeof Map && S && b ? b((/* @__PURE__ */ new Map())[Symbol.iterator]()) : void 0, "%Math%": Math, "%Number%": Number, "%Object%": n, "%Object.getOwnPropertyDescriptor%": w, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": "u" < typeof Promise ? void 0 : Promise, "%Proxy%": "u" < typeof Proxy ? void 0 : Proxy, "%RangeError%": s, "%ReferenceError%": c, "%Reflect%": "u" < typeof Reflect ? void 0 : Reflect, "%RegExp%": RegExp, "%Set%": "u" < typeof Set ? void 0 : Set, "%SetIteratorPrototype%": "u" > typeof Set && S && b ? b((/* @__PURE__ */ new Set())[Symbol.iterator]()) : void 0, "%SharedArrayBuffer%": "u" < typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": S && b ? b(""[Symbol.iterator]()) : void 0, "%Symbol%": S ? Symbol : void 0, "%SyntaxError%": u, "%ThrowTypeError%": _, "%TypedArray%": A, "%TypeError%": d, "%Uint8Array%": "u" < typeof Uint8Array ? void 0 : Uint8Array, "%Uint8ClampedArray%": "u" < typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray, "%Uint16Array%": "u" < typeof Uint16Array ? void 0 : Uint16Array, "%Uint32Array%": "u" < typeof Uint32Array ? void 0 : Uint32Array, "%URIError%": l, "%WeakMap%": "u" < typeof WeakMap ? void 0 : WeakMap, "%WeakRef%": "u" < typeof WeakRef ? void 0 : WeakRef, "%WeakSet%": "u" < typeof WeakSet ? void 0 : WeakSet, "%Function.prototype.call%": k, "%Function.prototype.apply%": x, "%Object.defineProperty%": I, "%Object.getPrototypeOf%": E, "%Math.abs%": h, "%Math.floor%": p, "%Math.max%": f, "%Math.min%": y, "%Math.pow%": m, "%Math.round%": g, "%Math.sign%": v, "%Reflect.getPrototypeOf%": R };
  if (b) try {
    null.error;
  } catch (e2) {
    var W = b(b(e2));
    q["%Error.prototype%"] = W;
  }
  var j = function e2(t2) {
    var r2;
    if ("%AsyncFunction%" === t2) r2 = P("async function () {}");
    else if ("%GeneratorFunction%" === t2) r2 = P("function* () {}");
    else if ("%AsyncGeneratorFunction%" === t2) r2 = P("async function* () {}");
    else if ("%AsyncGenerator%" === t2) {
      var a2 = e2("%AsyncGeneratorFunction%");
      a2 && (r2 = a2.prototype);
    } else if ("%AsyncIteratorPrototype%" === t2) {
      var n2 = e2("%AsyncGenerator%");
      n2 && b && (r2 = b(n2.prototype));
    }
    return q[t2] = r2, r2;
  }, O = { __proto__: null, "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, D = e.r(78387), C = e.r(137714), N = D.call(k, Array.prototype.concat), U = D.call(x, Array.prototype.splice), F = D.call(k, String.prototype.replace), B = D.call(k, String.prototype.slice), K = D.call(k, RegExp.prototype.exec), L = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, G = /\\(\\)?/g, Q = function(e2) {
    var t2 = B(e2, 0, 1), r2 = B(e2, -1);
    if ("%" === t2 && "%" !== r2) throw new u("invalid intrinsic syntax, expected closing `%`");
    if ("%" === r2 && "%" !== t2) throw new u("invalid intrinsic syntax, expected opening `%`");
    var a2 = [];
    return F(e2, L, function(e3, t3, r3, n2) {
      a2[a2.length] = r3 ? F(n2, G, "$1") : t3 || e3;
    }), a2;
  }, $ = function(e2, t2) {
    var r2, a2 = e2;
    if (C(O, a2) && (a2 = "%" + (r2 = O[a2])[0] + "%"), C(q, a2)) {
      var n2 = q[a2];
      if (n2 === H && (n2 = j(a2)), void 0 === n2 && !t2) throw new d("intrinsic " + e2 + " exists, but is not available. Please file an issue!");
      return { alias: r2, name: a2, value: n2 };
    }
    throw new u("intrinsic " + e2 + " does not exist!");
  };
  t.exports = function(e2, t2) {
    if ("string" != typeof e2 || 0 === e2.length) throw new d("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && "boolean" != typeof t2) throw new d('"allowMissing" argument must be a boolean');
    if (null === K(/^%?[^%]*%?$/, e2)) throw new u("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var r2 = Q(e2), a2 = r2.length > 0 ? r2[0] : "", n2 = $("%" + a2 + "%", t2), i2 = n2.name, o2 = n2.value, s2 = false, c2 = n2.alias;
    c2 && (a2 = c2[0], U(r2, N([0, 1], c2)));
    for (var l2 = 1, h2 = true; l2 < r2.length; l2 += 1) {
      var p2 = r2[l2], f2 = B(p2, 0, 1), y2 = B(p2, -1);
      if (('"' === f2 || "'" === f2 || "`" === f2 || '"' === y2 || "'" === y2 || "`" === y2) && f2 !== y2) throw new u("property names with quotes must have matching quotes");
      if ("constructor" !== p2 && h2 || (s2 = true), a2 += "." + p2, C(q, i2 = "%" + a2 + "%")) o2 = q[i2];
      else if (null != o2) {
        if (!(p2 in o2)) {
          if (!t2) throw new d("base intrinsic for " + e2 + " exists, but the property is not available.");
          return;
        }
        if (w && l2 + 1 >= r2.length) {
          var m2 = w(o2, p2);
          o2 = (h2 = !!m2) && "get" in m2 && !("originalValue" in m2.get) ? m2.get : o2[p2];
        } else h2 = C(o2, p2), o2 = o2[p2];
        h2 && !s2 && (q[i2] = o2);
      }
    }
    return o2;
  };
}, 795081, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(343473), i = e.r(954767), o = i([n("%String.prototype.indexOf%")]);
  t.exports = function(e2, t2) {
    var r2 = n(e2, !!t2);
    return "function" == typeof r2 && o(e2, ".prototype.") > -1 ? i([r2]) : r2;
  };
}, 975251, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(343473), i = e.r(795081), o = e.r(787405), s = e.r(231473), c = n("%Map%", true), u = i("Map.prototype.get", true), d = i("Map.prototype.set", true), l = i("Map.prototype.has", true), h = i("Map.prototype.delete", true), p = i("Map.prototype.size", true);
  t.exports = !!c && function() {
    var e2, t2 = { assert: function(e3) {
      if (!t2.has(e3)) throw new s("Side channel does not contain " + o(e3));
    }, delete: function(t3) {
      if (e2) {
        var r2 = h(e2, t3);
        return 0 === p(e2) && (e2 = void 0), r2;
      }
      return false;
    }, get: function(t3) {
      if (e2) return u(e2, t3);
    }, has: function(t3) {
      return !!e2 && l(e2, t3);
    }, set: function(t3, r2) {
      e2 || (e2 = new c()), d(e2, t3, r2);
    } };
    return t2;
  };
}, 720719, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(343473), i = e.r(795081), o = e.r(787405), s = e.r(975251), c = e.r(231473), u = n("%WeakMap%", true), d = i("WeakMap.prototype.get", true), l = i("WeakMap.prototype.set", true), h = i("WeakMap.prototype.has", true), p = i("WeakMap.prototype.delete", true);
  t.exports = u ? function() {
    var e2, t2, r2 = { assert: function(e3) {
      if (!r2.has(e3)) throw new c("Side channel does not contain " + o(e3));
    }, delete: function(r3) {
      if (u && r3 && ("object" == typeof r3 || "function" == typeof r3)) {
        if (e2) return p(e2, r3);
      } else if (s && t2) return t2.delete(r3);
      return false;
    }, get: function(r3) {
      return u && r3 && ("object" == typeof r3 || "function" == typeof r3) && e2 ? d(e2, r3) : t2 && t2.get(r3);
    }, has: function(r3) {
      return u && r3 && ("object" == typeof r3 || "function" == typeof r3) && e2 ? h(e2, r3) : !!t2 && t2.has(r3);
    }, set: function(r3, a2) {
      u && r3 && ("object" == typeof r3 || "function" == typeof r3) ? (e2 || (e2 = new u()), l(e2, r3, a2)) : s && (t2 || (t2 = s()), t2.set(r3, a2));
    } };
    return r2;
  } : s;
}, 168251, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(231473), i = e.r(787405), o = e.r(174353), s = e.r(975251), c = e.r(720719) || s || o;
  t.exports = function() {
    var e2, t2 = { assert: function(e3) {
      if (!t2.has(e3)) throw new n("Side channel does not contain " + i(e3));
    }, delete: function(t3) {
      return !!e2 && e2.delete(t3);
    }, get: function(t3) {
      return e2 && e2.get(t3);
    }, has: function(t3) {
      return !!e2 && e2.has(t3);
    }, set: function(t3, r2) {
      e2 || (e2 = c()), e2.set(t3, r2);
    } };
    return t2;
  };
}, 720419, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = String.prototype.replace, i = /%20/g, o = "RFC3986";
  t.exports = { default: o, formatters: { RFC1738: function(e2) {
    return n.call(e2, i, "+");
  }, RFC3986: function(e2) {
    return String(e2);
  } }, RFC1738: "RFC1738", RFC3986: o };
}, 906676, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(720419), i = e.r(168251), o = Object.prototype.hasOwnProperty, s = Array.isArray, c = i(), u = function(e2, t2) {
    return c.set(e2, t2), e2;
  }, d = function(e2) {
    return c.has(e2);
  }, l = function(e2) {
    return c.get(e2);
  }, h = function(e2, t2) {
    c.set(e2, t2);
  }, p = (function() {
    for (var e2 = [], t2 = 0; t2 < 256; ++t2) e2[e2.length] = "%" + ((t2 < 16 ? "0" : "") + t2.toString(16)).toUpperCase();
    return e2;
  })(), f = function(e2) {
    for (; e2.length > 1; ) {
      var t2 = e2.pop(), r2 = t2.obj[t2.prop];
      if (s(r2)) {
        for (var a2 = [], n2 = 0; n2 < r2.length; ++n2) void 0 !== r2[n2] && (a2[a2.length] = r2[n2]);
        t2.obj[t2.prop] = a2;
      }
    }
  }, y = function(e2, t2) {
    for (var r2 = t2 && t2.plainObjects ? { __proto__: null } : {}, a2 = 0; a2 < e2.length; ++a2) void 0 !== e2[a2] && (r2[a2] = e2[a2]);
    return r2;
  };
  t.exports = { arrayToObject: y, assign: function(e2, t2) {
    return Object.keys(t2).reduce(function(e3, r2) {
      return e3[r2] = t2[r2], e3;
    }, e2);
  }, combine: function(e2, t2, r2, a2) {
    if (d(e2)) {
      var n2 = l(e2) + 1;
      return e2[n2] = t2, h(e2, n2), e2;
    }
    var i2 = [].concat(e2, t2);
    return i2.length > r2 ? u(y(i2, { plainObjects: a2 }), i2.length - 1) : i2;
  }, compact: function(e2) {
    for (var t2 = [{ obj: { o: e2 }, prop: "o" }], r2 = [], a2 = 0; a2 < t2.length; ++a2) for (var n2 = t2[a2], i2 = n2.obj[n2.prop], o2 = Object.keys(i2), s2 = 0; s2 < o2.length; ++s2) {
      var c2 = o2[s2], u2 = i2[c2];
      "object" == typeof u2 && null !== u2 && -1 === r2.indexOf(u2) && (t2[t2.length] = { obj: i2, prop: c2 }, r2[r2.length] = u2);
    }
    return f(t2), e2;
  }, decode: function(e2, t2, r2) {
    var a2 = e2.replace(/\+/g, " ");
    if ("iso-8859-1" === r2) return a2.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(a2);
    } catch (e3) {
      return a2;
    }
  }, encode: function(e2, t2, r2, a2, i2) {
    if (0 === e2.length) return e2;
    var o2 = e2;
    if ("symbol" == typeof e2 ? o2 = Symbol.prototype.toString.call(e2) : "string" != typeof e2 && (o2 = String(e2)), "iso-8859-1" === r2) return escape(o2).replace(/%u[0-9a-f]{4}/gi, function(e3) {
      return "%26%23" + parseInt(e3.slice(2), 16) + "%3B";
    });
    for (var s2 = "", c2 = 0; c2 < o2.length; c2 += 1024) {
      for (var u2 = o2.length >= 1024 ? o2.slice(c2, c2 + 1024) : o2, d2 = [], l2 = 0; l2 < u2.length; ++l2) {
        var h2 = u2.charCodeAt(l2);
        if (45 === h2 || 46 === h2 || 95 === h2 || 126 === h2 || h2 >= 48 && h2 <= 57 || h2 >= 65 && h2 <= 90 || h2 >= 97 && h2 <= 122 || i2 === n.RFC1738 && (40 === h2 || 41 === h2)) {
          d2[d2.length] = u2.charAt(l2);
          continue;
        }
        if (h2 < 128) {
          d2[d2.length] = p[h2];
          continue;
        }
        if (h2 < 2048) {
          d2[d2.length] = p[192 | h2 >> 6] + p[128 | 63 & h2];
          continue;
        }
        if (h2 < 55296 || h2 >= 57344) {
          d2[d2.length] = p[224 | h2 >> 12] + p[128 | h2 >> 6 & 63] + p[128 | 63 & h2];
          continue;
        }
        l2 += 1, h2 = 65536 + ((1023 & h2) << 10 | 1023 & u2.charCodeAt(l2)), d2[d2.length] = p[240 | h2 >> 18] + p[128 | h2 >> 12 & 63] + p[128 | h2 >> 6 & 63] + p[128 | 63 & h2];
      }
      s2 += d2.join("");
    }
    return s2;
  }, isBuffer: function(e2) {
    return !!e2 && "object" == typeof e2 && !!(e2.constructor && e2.constructor.isBuffer && e2.constructor.isBuffer(e2));
  }, isOverflow: d, isRegExp: function(e2) {
    return "[object RegExp]" === Object.prototype.toString.call(e2);
  }, markOverflow: u, maybeMap: function(e2, t2) {
    if (s(e2)) {
      for (var r2 = [], a2 = 0; a2 < e2.length; a2 += 1) r2[r2.length] = t2(e2[a2]);
      return r2;
    }
    return t2(e2);
  }, merge: function e2(t2, r2, a2) {
    if (!r2) return t2;
    if ("object" != typeof r2 && "function" != typeof r2) {
      if (s(t2)) {
        var n2 = t2.length;
        if (a2 && "number" == typeof a2.arrayLimit && n2 > a2.arrayLimit) return u(y(t2.concat(r2), a2), n2);
        t2[n2] = r2;
      } else if (!t2 || "object" != typeof t2) return [t2, r2];
      else if (d(t2)) {
        var i2 = l(t2) + 1;
        t2[i2] = r2, h(t2, i2);
      } else {
        if (a2 && a2.strictMerge) return [t2, r2];
        (a2 && (a2.plainObjects || a2.allowPrototypes) || !o.call(Object.prototype, r2)) && (t2[r2] = true);
      }
      return t2;
    }
    if (!t2 || "object" != typeof t2) {
      if (d(r2)) {
        for (var c2 = Object.keys(r2), p2 = a2 && a2.plainObjects ? { __proto__: null, 0: t2 } : { 0: t2 }, f2 = 0; f2 < c2.length; f2++) p2[parseInt(c2[f2], 10) + 1] = r2[c2[f2]];
        return u(p2, l(r2) + 1);
      }
      var m = [t2].concat(r2);
      return a2 && "number" == typeof a2.arrayLimit && m.length > a2.arrayLimit ? u(y(m, a2), m.length - 1) : m;
    }
    var g = t2;
    return (s(t2) && !s(r2) && (g = y(t2, a2)), s(t2) && s(r2)) ? (r2.forEach(function(r3, n3) {
      if (o.call(t2, n3)) {
        var i3 = t2[n3];
        i3 && "object" == typeof i3 && r3 && "object" == typeof r3 ? t2[n3] = e2(i3, r3, a2) : t2[t2.length] = r3;
      } else t2[n3] = r3;
    }), t2) : Object.keys(r2).reduce(function(t3, n3) {
      var i3 = r2[n3];
      if (o.call(t3, n3) ? t3[n3] = e2(t3[n3], i3, a2) : t3[n3] = i3, d(r2) && !d(t3) && u(t3, l(r2)), d(t3)) {
        var s2 = parseInt(n3, 10);
        String(s2) === n3 && s2 >= 0 && s2 > l(t3) && h(t3, s2);
      }
      return t3;
    }, g);
  } };
}, 725937, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(168251), i = e.r(906676), o = e.r(720419), s = Object.prototype.hasOwnProperty, c = { brackets: function(e2) {
    return e2 + "[]";
  }, comma: "comma", indices: function(e2, t2) {
    return e2 + "[" + t2 + "]";
  }, repeat: function(e2) {
    return e2;
  } }, u = Array.isArray, d = Array.prototype.push, l = function(e2, t2) {
    d.apply(e2, u(t2) ? t2 : [t2]);
  }, h = Date.prototype.toISOString, p = o.default, f = { addQueryPrefix: false, allowDots: false, allowEmptyArrays: false, arrayFormat: "indices", charset: "utf-8", charsetSentinel: false, commaRoundTrip: false, delimiter: "&", encode: true, encodeDotInKeys: false, encoder: i.encode, encodeValuesOnly: false, filter: void 0, format: p, formatter: o.formatters[p], indices: false, serializeDate: function(e2) {
    return h.call(e2);
  }, skipNulls: false, strictNullHandling: false }, y = {}, m = function e2(t2, r2, a2, o2, s2, c2, d2, h2, p2, m2, g2, v, T, P, w, I, M, _) {
    for (var S, b, E = t2, R = _, x = 0, k = false; void 0 !== (R = R.get(y)) && !k; ) {
      var H = R.get(t2);
      if (x += 1, void 0 !== H) if (H === x) throw RangeError("Cyclic object value");
      else k = true;
      void 0 === R.get(y) && (x = 0);
    }
    if ("function" == typeof m2 ? E = m2(r2, E) : E instanceof Date ? E = T(E) : "comma" === a2 && u(E) && (E = i.maybeMap(E, function(e3) {
      return e3 instanceof Date ? T(e3) : e3;
    })), null === E) {
      if (c2) return p2 && !I ? p2(r2, f.encoder, M, "key", P) : r2;
      E = "";
    }
    if ("string" == typeof (S = E) || "number" == typeof S || "boolean" == typeof S || "symbol" == typeof S || "bigint" == typeof S || i.isBuffer(E)) return p2 ? [w(I ? r2 : p2(r2, f.encoder, M, "key", P)) + "=" + w(p2(E, f.encoder, M, "value", P))] : [w(r2) + "=" + w(String(E))];
    var A = [];
    if (void 0 === E) return A;
    if ("comma" === a2 && u(E)) I && p2 && (E = i.maybeMap(E, p2)), b = [{ value: E.length > 0 ? E.join(",") || null : void 0 }];
    else if (u(m2)) b = m2;
    else {
      var q = Object.keys(E);
      b = g2 ? q.sort(g2) : q;
    }
    var W = h2 ? String(r2).replace(/\./g, "%2E") : String(r2), j = o2 && u(E) && 1 === E.length ? W + "[]" : W;
    if (s2 && u(E) && 0 === E.length) return j + "[]";
    for (var O = 0; O < b.length; ++O) {
      var D = b[O], C = "object" == typeof D && D && void 0 !== D.value ? D.value : E[D];
      if (!d2 || null !== C) {
        var N = v && h2 ? String(D).replace(/\./g, "%2E") : String(D), U = u(E) ? "function" == typeof a2 ? a2(j, N) : j : j + (v ? "." + N : "[" + N + "]");
        _.set(t2, x);
        var F = n();
        F.set(y, _), l(A, e2(C, U, a2, o2, s2, c2, d2, h2, "comma" === a2 && I && u(E) ? null : p2, m2, g2, v, T, P, w, I, M, F));
      }
    }
    return A;
  }, g = function(e2) {
    if (!e2) return f;
    if (void 0 !== e2.allowEmptyArrays && "boolean" != typeof e2.allowEmptyArrays) throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (void 0 !== e2.encodeDotInKeys && "boolean" != typeof e2.encodeDotInKeys) throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (null !== e2.encoder && void 0 !== e2.encoder && "function" != typeof e2.encoder) throw TypeError("Encoder has to be a function.");
    var t2, r2 = e2.charset || f.charset;
    if (void 0 !== e2.charset && "utf-8" !== e2.charset && "iso-8859-1" !== e2.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var a2 = o.default;
    if (void 0 !== e2.format) {
      if (!s.call(o.formatters, e2.format)) throw TypeError("Unknown format option provided.");
      a2 = e2.format;
    }
    var n2 = o.formatters[a2], i2 = f.filter;
    if (("function" == typeof e2.filter || u(e2.filter)) && (i2 = e2.filter), t2 = e2.arrayFormat in c ? e2.arrayFormat : "indices" in e2 ? e2.indices ? "indices" : "repeat" : f.arrayFormat, "commaRoundTrip" in e2 && "boolean" != typeof e2.commaRoundTrip) throw TypeError("`commaRoundTrip` must be a boolean, or absent");
    var d2 = void 0 === e2.allowDots ? true === e2.encodeDotInKeys || f.allowDots : !!e2.allowDots;
    return { addQueryPrefix: "boolean" == typeof e2.addQueryPrefix ? e2.addQueryPrefix : f.addQueryPrefix, allowDots: d2, allowEmptyArrays: "boolean" == typeof e2.allowEmptyArrays ? !!e2.allowEmptyArrays : f.allowEmptyArrays, arrayFormat: t2, charset: r2, charsetSentinel: "boolean" == typeof e2.charsetSentinel ? e2.charsetSentinel : f.charsetSentinel, commaRoundTrip: !!e2.commaRoundTrip, delimiter: void 0 === e2.delimiter ? f.delimiter : e2.delimiter, encode: "boolean" == typeof e2.encode ? e2.encode : f.encode, encodeDotInKeys: "boolean" == typeof e2.encodeDotInKeys ? e2.encodeDotInKeys : f.encodeDotInKeys, encoder: "function" == typeof e2.encoder ? e2.encoder : f.encoder, encodeValuesOnly: "boolean" == typeof e2.encodeValuesOnly ? e2.encodeValuesOnly : f.encodeValuesOnly, filter: i2, format: a2, formatter: n2, serializeDate: "function" == typeof e2.serializeDate ? e2.serializeDate : f.serializeDate, skipNulls: "boolean" == typeof e2.skipNulls ? e2.skipNulls : f.skipNulls, sort: "function" == typeof e2.sort ? e2.sort : null, strictNullHandling: "boolean" == typeof e2.strictNullHandling ? e2.strictNullHandling : f.strictNullHandling };
  };
  t.exports = function(e2, t2) {
    var r2, a2 = e2, i2 = g(t2);
    "function" == typeof i2.filter ? a2 = (0, i2.filter)("", a2) : u(i2.filter) && (r2 = i2.filter);
    var o2 = [];
    if ("object" != typeof a2 || null === a2) return "";
    var s2 = c[i2.arrayFormat], d2 = "comma" === s2 && i2.commaRoundTrip;
    r2 || (r2 = Object.keys(a2)), i2.sort && r2.sort(i2.sort);
    for (var h2 = n(), p2 = 0; p2 < r2.length; ++p2) {
      var f2 = r2[p2], y2 = a2[f2];
      i2.skipNulls && null === y2 || l(o2, m(y2, f2, s2, d2, i2.allowEmptyArrays, i2.strictNullHandling, i2.skipNulls, i2.encodeDotInKeys, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset, h2));
    }
    var v = o2.join(i2.delimiter), T = true === i2.addQueryPrefix ? "?" : "";
    return i2.charsetSentinel && ("iso-8859-1" === i2.charset ? T += "utf8=%26%2310003%3B&" : T += "utf8=%E2%9C%93&"), v.length > 0 ? T + v : "";
  };
}, 888381, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(906676), i = Object.prototype.hasOwnProperty, o = Array.isArray, s = { allowDots: false, allowEmptyArrays: false, allowPrototypes: false, allowSparse: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decodeDotInKeys: false, decoder: n.decode, delimiter: "&", depth: 5, duplicates: "combine", ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictDepth: false, strictMerge: true, strictNullHandling: false, throwOnLimitExceeded: false }, c = function(e2, t2, r2) {
    if (e2 && "string" == typeof e2 && t2.comma && e2.indexOf(",") > -1) return e2.split(",");
    if (t2.throwOnLimitExceeded && r2 >= t2.arrayLimit) throw RangeError("Array limit exceeded. Only " + t2.arrayLimit + " element" + (1 === t2.arrayLimit ? "" : "s") + " allowed in an array.");
    return e2;
  }, u = function(e2, t2) {
    var r2 = { __proto__: null }, a2 = t2.ignoreQueryPrefix ? e2.replace(/^\?/, "") : e2;
    a2 = a2.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var u2 = t2.parameterLimit === 1 / 0 ? void 0 : t2.parameterLimit, d2 = a2.split(t2.delimiter, t2.throwOnLimitExceeded && void 0 !== u2 ? u2 + 1 : u2);
    if (t2.throwOnLimitExceeded && void 0 !== u2 && d2.length > u2) throw RangeError("Parameter limit exceeded. Only " + u2 + " parameter" + (1 === u2 ? "" : "s") + " allowed.");
    var l2 = -1, h2 = t2.charset;
    if (t2.charsetSentinel) for (p2 = 0; p2 < d2.length; ++p2) 0 === d2[p2].indexOf("utf8=") && ("utf8=%E2%9C%93" === d2[p2] ? h2 = "utf-8" : "utf8=%26%2310003%3B" === d2[p2] && (h2 = "iso-8859-1"), l2 = p2, p2 = d2.length);
    for (p2 = 0; p2 < d2.length; ++p2) if (p2 !== l2) {
      var p2, f, y, m = d2[p2], g = m.indexOf("]="), v = -1 === g ? m.indexOf("=") : g + 1;
      if (-1 === v ? (f = t2.decoder(m, s.decoder, h2, "key"), y = t2.strictNullHandling ? null : "") : null !== (f = t2.decoder(m.slice(0, v), s.decoder, h2, "key")) && (y = n.maybeMap(c(m.slice(v + 1), t2, o(r2[f]) ? r2[f].length : 0), function(e3) {
        return t2.decoder(e3, s.decoder, h2, "value");
      })), y && t2.interpretNumericEntities && "iso-8859-1" === h2 && (y = String(y).replace(/&#(\d+);/g, function(e3, t3) {
        return String.fromCharCode(parseInt(t3, 10));
      })), m.indexOf("[]=") > -1 && (y = o(y) ? [y] : y), t2.comma && o(y) && y.length > t2.arrayLimit) {
        if (t2.throwOnLimitExceeded) throw RangeError("Array limit exceeded. Only " + t2.arrayLimit + " element" + (1 === t2.arrayLimit ? "" : "s") + " allowed in an array.");
        y = n.combine([], y, t2.arrayLimit, t2.plainObjects);
      }
      if (null !== f) {
        var T = i.call(r2, f);
        T && ("combine" === t2.duplicates || m.indexOf("[]=") > -1) ? r2[f] = n.combine(r2[f], y, t2.arrayLimit, t2.plainObjects) : T && "last" !== t2.duplicates || (r2[f] = y);
      }
    }
    return r2;
  }, d = function(e2, t2, r2, a2) {
    var i2 = 0;
    if (e2.length > 0 && "[]" === e2[e2.length - 1]) {
      var o2 = e2.slice(0, -1).join("");
      i2 = Array.isArray(t2) && t2[o2] ? t2[o2].length : 0;
    }
    for (var s2 = a2 ? t2 : c(t2, r2, i2), u2 = e2.length - 1; u2 >= 0; --u2) {
      var d2, l2 = e2[u2];
      if ("[]" === l2 && r2.parseArrays) d2 = n.isOverflow(s2) ? s2 : r2.allowEmptyArrays && ("" === s2 || r2.strictNullHandling && null === s2) ? [] : n.combine([], s2, r2.arrayLimit, r2.plainObjects);
      else {
        d2 = r2.plainObjects ? { __proto__: null } : {};
        var h2 = "[" === l2.charAt(0) && "]" === l2.charAt(l2.length - 1) ? l2.slice(1, -1) : l2, p2 = r2.decodeDotInKeys ? h2.replace(/%2E/g, ".") : h2, f = parseInt(p2, 10), y = !isNaN(f) && l2 !== p2 && String(f) === p2 && f >= 0 && r2.parseArrays;
        if (r2.parseArrays || "" !== p2) if (y && f < r2.arrayLimit) (d2 = [])[f] = s2;
        else if (y && r2.throwOnLimitExceeded) throw RangeError("Array limit exceeded. Only " + r2.arrayLimit + " element" + (1 === r2.arrayLimit ? "" : "s") + " allowed in an array.");
        else y ? (d2[f] = s2, n.markOverflow(d2, f)) : "__proto__" !== p2 && (d2[p2] = s2);
        else d2 = { 0: s2 };
      }
      s2 = d2;
    }
    return s2;
  }, l = function(e2, t2) {
    var r2 = t2.allowDots ? e2.replace(/\.([^.[]+)/g, "[$1]") : e2;
    if (t2.depth <= 0) {
      if (!t2.plainObjects && i.call(Object.prototype, r2) && !t2.allowPrototypes) return;
      return [r2];
    }
    var a2 = /(\[[^[\]]*])/g, n2 = /(\[[^[\]]*])/.exec(r2), o2 = n2 ? r2.slice(0, n2.index) : r2, s2 = [];
    if (o2) {
      if (!t2.plainObjects && i.call(Object.prototype, o2) && !t2.allowPrototypes) return;
      s2[s2.length] = o2;
    }
    for (var c2 = 0; null !== (n2 = a2.exec(r2)) && c2 < t2.depth; ) {
      c2 += 1;
      var u2 = n2[1].slice(1, -1);
      if (!t2.plainObjects && i.call(Object.prototype, u2) && !t2.allowPrototypes) return;
      s2[s2.length] = n2[1];
    }
    if (n2) {
      if (true === t2.strictDepth) throw RangeError("Input depth exceeded depth option of " + t2.depth + " and strictDepth is true");
      s2[s2.length] = "[" + r2.slice(n2.index) + "]";
    }
    return s2;
  }, h = function(e2, t2, r2, a2) {
    if (e2) {
      var n2 = l(e2, r2);
      if (n2) return d(n2, t2, r2, a2);
    }
  }, p = function(e2) {
    if (!e2) return s;
    if (void 0 !== e2.allowEmptyArrays && "boolean" != typeof e2.allowEmptyArrays) throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (void 0 !== e2.decodeDotInKeys && "boolean" != typeof e2.decodeDotInKeys) throw TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (null !== e2.decoder && void 0 !== e2.decoder && "function" != typeof e2.decoder) throw TypeError("Decoder has to be a function.");
    if (void 0 !== e2.charset && "utf-8" !== e2.charset && "iso-8859-1" !== e2.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (void 0 !== e2.throwOnLimitExceeded && "boolean" != typeof e2.throwOnLimitExceeded) throw TypeError("`throwOnLimitExceeded` option must be a boolean");
    var t2 = void 0 === e2.charset ? s.charset : e2.charset, r2 = void 0 === e2.duplicates ? s.duplicates : e2.duplicates;
    if ("combine" !== r2 && "first" !== r2 && "last" !== r2) throw TypeError("The duplicates option must be either combine, first, or last");
    return { allowDots: void 0 === e2.allowDots ? true === e2.decodeDotInKeys || s.allowDots : !!e2.allowDots, allowEmptyArrays: "boolean" == typeof e2.allowEmptyArrays ? !!e2.allowEmptyArrays : s.allowEmptyArrays, allowPrototypes: "boolean" == typeof e2.allowPrototypes ? e2.allowPrototypes : s.allowPrototypes, allowSparse: "boolean" == typeof e2.allowSparse ? e2.allowSparse : s.allowSparse, arrayLimit: "number" == typeof e2.arrayLimit ? e2.arrayLimit : s.arrayLimit, charset: t2, charsetSentinel: "boolean" == typeof e2.charsetSentinel ? e2.charsetSentinel : s.charsetSentinel, comma: "boolean" == typeof e2.comma ? e2.comma : s.comma, decodeDotInKeys: "boolean" == typeof e2.decodeDotInKeys ? e2.decodeDotInKeys : s.decodeDotInKeys, decoder: "function" == typeof e2.decoder ? e2.decoder : s.decoder, delimiter: "string" == typeof e2.delimiter || n.isRegExp(e2.delimiter) ? e2.delimiter : s.delimiter, depth: "number" == typeof e2.depth || false === e2.depth ? +e2.depth : s.depth, duplicates: r2, ignoreQueryPrefix: true === e2.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof e2.interpretNumericEntities ? e2.interpretNumericEntities : s.interpretNumericEntities, parameterLimit: "number" == typeof e2.parameterLimit ? e2.parameterLimit : s.parameterLimit, parseArrays: false !== e2.parseArrays, plainObjects: "boolean" == typeof e2.plainObjects ? e2.plainObjects : s.plainObjects, strictDepth: "boolean" == typeof e2.strictDepth ? !!e2.strictDepth : s.strictDepth, strictMerge: "boolean" == typeof e2.strictMerge ? !!e2.strictMerge : s.strictMerge, strictNullHandling: "boolean" == typeof e2.strictNullHandling ? e2.strictNullHandling : s.strictNullHandling, throwOnLimitExceeded: "boolean" == typeof e2.throwOnLimitExceeded && e2.throwOnLimitExceeded };
  };
  t.exports = function(e2, t2) {
    var r2 = p(t2);
    if ("" === e2 || null == e2) return r2.plainObjects ? { __proto__: null } : {};
    for (var a2 = "string" == typeof e2 ? u(e2, r2) : e2, i2 = r2.plainObjects ? { __proto__: null } : {}, o2 = Object.keys(a2), s2 = 0; s2 < o2.length; ++s2) {
      var c2 = o2[s2], d2 = h(c2, a2[c2], r2, "string" == typeof e2);
      i2 = n.merge(i2, d2, r2);
    }
    return true === r2.allowSparse ? i2 : n.compact(i2);
  };
}, 537134, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(725937), i = e.r(888381);
  t.exports = { formats: e.r(720419), parse: i, stringify: n };
}, 928342, 865120, 264201, 498578, 494617, 427379, 613442, (e) => {
  "use strict";
  var t = e.i(164309), r = e.i(784544), a = e.i(177619), n = e.i(648486), i = e.i(97034), o = e.i(793544), s = e.i(629917), c = e.i(428929), u = e.i(102865), d = e.i(395974), l = e.i(783026), h = e.i(425869), p = e.i(238079), f = e.i(608237), y = e.i(828177);
  try {
    var m = "u" > typeof window ? window : e.g;
    m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[new m.Error().stack] = Object.assign({}, m._sentryModuleMetadata[new m.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function g(e2) {
    return e2.transporter && e2.transporter.userAgent ? e2.transporter.userAgent.value : e2._ua;
  }
  try {
    var v = "u" > typeof window ? window : e.g;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var T = "2.17.2", P = "https://cdn.jsdelivr.net/npm/search-insights@".concat(T, "/dist/search-insights.min.js"), w = ["searchClient", "insightsClient", "initialUiState"];
  function I(e2) {
    var t2 = (0, a._)((e2.version || "").split(".").map(Number), 2), r2 = t2[0], n2 = t2[1];
    return r2 >= 3 || 2 === r2 && n2 >= 6 || 1 === r2 && n2 >= 10;
  }
  function M(e2) {
    if (e2) return "number" == typeof e2 ? e2.toString() : e2;
  }
  e.s(["createInsightsMiddleware", 0, function() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, m2 = e2.insightsClient, v2 = e2.insightsInitParams, _2 = e2.onEvent, S2 = e2.$$internal, b2 = void 0 !== S2 && S2, E2 = e2.$$automatic, R2 = void 0 !== E2 && E2, x2 = m2;
    m2 || null === m2 || (0, h.safelyRunOnBrowser)(function(e3) {
      var t2 = e3.window, r2 = t2.AlgoliaAnalyticsObject || "aa";
      "string" == typeof r2 && (x2 = t2[r2]), x2 || (t2.AlgoliaAnalyticsObject = r2, t2[r2] || (t2[r2] = function() {
        for (var e4 = arguments.length, a2 = Array(e4), n2 = 0; n2 < e4; n2++) a2[n2] = arguments[n2];
        t2[r2].queue || (t2[r2].queue = []), t2[r2].queue.push(a2);
      }, t2[r2].version = T, t2[r2].shouldAddScript = true), x2 = t2[r2]);
    });
    var k2 = x2 || y.noop;
    return function(e3) {
      var m3, T2, S3, E3 = e3.instantSearchInstance, x3 = E3.middleware.filter(function(e4) {
        return "ais.insights" === e4.instance.$$type && e4.instance.$$internal;
      }).map(function(e4) {
        return e4.creator;
      });
      E3.unuse.apply(E3, (0, n._)(x3));
      var H2 = (0, a._)((0, p.getAppIdAndApiKey)(E3.client), 2), A2 = H2[0], q2 = H2[1], W2 = void 0, j2 = void 0, O2 = void 0, D2 = k2.queue;
      Array.isArray(D2) && (j2 = (m3 = (0, a._)(["setUserToken", "init"].map(function(e4) {
        return (0, a._)((0, f.find)(D2.slice().reverse(), function(t2) {
          return (0, a._)(t2, 1)[0] === e4;
        }) || [], 2)[1];
      }), 2))[0], W2 = m3[1]), k2("getUserToken", null, function(e4, t2) {
        O2 = M(t2);
      }), (v2 || !I(k2)) && k2("init", (0, t._)({ appId: A2, apiKey: q2, partial: true }, v2));
      var C2 = null;
      return { $$type: "ais.insights", $$internal: b2, $$automatic: R2, onStateChange: function() {
      }, subscribe: function() {
        if (k2.shouldAddScript) {
          var e4 = "[insights middleware]: could not load search-insights.js. Please load it manually following https://alg.li/insights-init";
          try {
            var t2 = document.createElement("script");
            t2.async = true, t2.src = P, t2.onerror = function() {
              E3.emit("error", Error(e4));
            }, document.body.appendChild(t2), k2.shouldAddScript = false;
          } catch (t3) {
            k2.shouldAddScript = false, E3.emit("error", Error(e4));
          }
        }
      }, started: function() {
        k2("addAlgoliaAgent", "insights-middleware"), S3 = E3.mainHelper;
        var e4, y2, m4, P2, x4, H3, q3, D3, N2, U2, F2, B2, K2 = k2.queue;
        Array.isArray(K2) && (j2 = (U2 = (0, a._)(["setUserToken", "init"].map(function(e5) {
          return (0, a._)((0, f.find)(K2.slice().reverse(), function(t2) {
            return (0, a._)(t2, 1)[0] === e5;
          }) || [], 2)[1];
        }), 2))[0], W2 = U2[1]), P2 = (null == (m4 = (e4 = E3)._initialResults) || null == (y2 = m4[e4.indexName]) ? void 0 : y2.state) || {}, x4 = e4.mainHelper.state, T2 = { userToken: P2.userToken || x4.userToken, clickAnalytics: P2.clickAnalytics || x4.clickAnalytics }, R2 || S3.overrideStateWithoutTriggeringChangeEvent((0, r._)((0, t._)({}, S3.state), { clickAnalytics: true })), b2 || E3.scheduleSearch();
        var L2 = function(e5) {
          var a2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n2 = M(e5);
          if (n2) {
            var i2 = S3.state.userToken;
            a2 ? o2() : setTimeout(o2, 0);
          }
          function o2() {
            S3.overrideStateWithoutTriggeringChangeEvent((0, r._)((0, t._)({}, S3.state), { userToken: n2 })), i2 && i2 !== n2 && (S3._recommendCache = {}, E3.scheduleSearch());
          }
        };
        function G2(e5) {
          L2(e5, true), k2("setUserToken", e5);
        }
        var Q2 = void 0, $2 = (0, s.getInsightsAnonymousUserTokenInternal)();
        Q2 = $2 || "anonymous-".concat((0, i.createUUID)());
        var V2 = T2.userToken;
        (null == v2 ? void 0 : v2.userToken) && (F2 = v2.userToken), F2 ? G2(F2) : V2 ? G2(V2) : O2 ? G2(O2) : j2 ? G2(j2) : Q2 && (G2(Q2), ((null == v2 ? void 0 : v2.useCookie) || (null == W2 ? void 0 : W2.useCookie)) && (H3 = Q2, q3 = (null == v2 ? void 0 : v2.cookieDuration) || (null == W2 ? void 0 : W2.cookieDuration), (D3 = /* @__PURE__ */ new Date()).setTime(D3.getTime() + (q3 || 15552e6)), N2 = "expires=".concat(D3.toUTCString()), document.cookie = "_ALGOLIA=".concat(H3, ";").concat(N2, ";path=/"))), k2("onUserTokenChange", function(e5) {
          return L2(e5, true);
        }, { immediate: true });
        var z = k2;
        I(k2) && (z = function(e5, t2) {
          var r2 = (0, a._)((0, p.getAppIdAndApiKey)(E3.client), 2);
          return k2(e5, t2, { headers: { "X-Algolia-Application-Id": r2[0], "X-Algolia-API-Key": r2[1] } });
        });
        var J = /* @__PURE__ */ new Set();
        E3.mainHelper.derivedHelpers[0].on("result", function(e5) {
          var t2 = e5.results;
          t2 && (!t2.queryID || t2.queryID !== B2) && (B2 = t2.queryID, J.clear());
        }), E3.sendEventToInsights = function(e5) {
          if (_2) _2(e5, z);
          else if (e5.insightsMethod) {
            if ("viewedObjectIDs" === e5.insightsMethod) {
              var t2 = e5.payload, r2 = function(e6) {
                return t2.queryID ? "".concat(t2.queryID, ":").concat(e6) : e6;
              }, a2 = t2.objectIDs.filter(function(e6) {
                return !J.has(r2(e6));
              });
              if (0 === a2.length) return;
              a2.forEach(function(e6) {
                return J.add(r2(e6));
              }), t2.objectIDs = a2;
            }
            e5.payload.algoliaSource = ["instantsearch"], R2 && e5.payload.algoliaSource.push("instantsearch-automatic"), "internal" === e5.eventModifier && e5.payload.algoliaSource.push("instantsearch-internal"), z(e5.insightsMethod, e5.payload);
          }
        }, (0, h.safelyRunOnBrowser)(function() {
          var e5 = (0, c.getUsageSessionId)(), r2 = function() {
            try {
              var r3, a2, i2, s2 = Math.round((0, u.now)() - E3._createdAt);
              r3 = { eventName: "__start__", algoliaAgent: g(E3.client), version: o.default, applicationId: A2, performance: { bootstrapMs: s2 }, widgets: [{ type: "ais.instantSearch", params: E3._initialOptions ? (0, d.serializeWidgetParams)((0, l.omit)(E3._initialOptions, (0, n._)(w))) : [], children: (0, d.buildWidgetTree)(E3.mainIndex.getWidgets(), E3) }] }, i2 = null == (a2 = S3.state) ? void 0 : a2.userToken, z("sendEvents", [(0, t._)({ eventType: "instantsearch", timestamp: Date.now(), sessionID: e5, userToken: i2 ? String(i2) : void 0 }, r3)]);
            } catch (e6) {
            }
          };
          E3.once("render", r2), C2 = function() {
            return E3.removeListener("render", r2);
          };
        });
      }, unsubscribe: function() {
        C2 && C2(), k2("onUserTokenChange", void 0), E3.sendEventToInsights = y.noop, S3 && T2 && (S3.overrideStateWithoutTriggeringChangeEvent((0, t._)({}, S3.state, T2)), E3.scheduleSearch());
      } };
    };
  }], 928342);
  var _ = e.i(786512), S = e.i(293321);
  try {
    var b = "u" > typeof window ? window : e.g;
    b._sentryModuleMetadata = b._sentryModuleMetadata || {}, b._sentryModuleMetadata[new b.Error().stack] = Object.assign({}, b._sentryModuleMetadata[new b.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var E = "u" > typeof window ? window : e.g;
    E._sentryModuleMetadata = E._sentryModuleMetadata || {}, E._sentryModuleMetadata[new E.Error().stack] = Object.assign({}, E._sentryModuleMetadata[new E.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["createMetadataMiddleware", 0, function() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t2 = e2.$$internal, r2 = void 0 !== t2 && t2;
    return function(e3) {
      var t3 = e3.instantSearchInstance, a2 = { widgets: [] }, n2 = document.createElement("meta"), i2 = document.querySelector("head");
      return n2.name = "instantsearch:widgets", { $$type: "ais.metadata", $$internal: r2, onStateChange: function() {
      }, subscribe: function() {
        setTimeout(function() {
          a2.ua = g(t3.client), (function e4(t4, r3, a3) {
            var n3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r3.mainIndex, i3 = (0, S.createInitArgs)(r3, n3, r3._initialUiState);
            t4.forEach(function(t5) {
              var n4 = {};
              if (t5.getWidgetRenderState) {
                var o2 = t5.getWidgetRenderState(i3);
                o2 && o2.widgetParams && (n4 = o2.widgetParams);
              }
              var s2 = Object.keys(n4).filter(function(e5) {
                return void 0 !== n4[e5];
              });
              a3.widgets.push({ type: t5.$$type, widgetType: t5.$$widgetType, params: s2 }), (0, _.isIndexWidget)(t5) && e4(t5.getWidgets(), r3, a3, t5);
            });
          })(t3.mainIndex.getWidgets(), t3, a2), t3.middleware.forEach(function(e4) {
            return a2.widgets.push({ middleware: true, type: e4.instance.$$type, internal: e4.instance.$$internal });
          }), n2.content = JSON.stringify(a2), i2.appendChild(n2);
        }, 0);
      }, started: function() {
      }, unsubscribe: function() {
        n2.remove();
      } };
    };
  }, "isMetadataEnabled", 0, function() {
    return (0, h.safelyRunOnBrowser)(function(e2) {
      var t2, r2;
      return (null == (r2 = e2.window.navigator) || null == (t2 = r2.userAgent) ? void 0 : t2.indexOf("Algolia Crawler")) > -1;
    }, { fallback: function() {
      return false;
    } });
  }], 865120);
  var R = e.i(868275), x = e.i(401157), k = e.i(319465), H = e.i(537134);
  try {
    var A = "u" > typeof window ? window : e.g;
    A._sentryModuleMetadata = A._sentryModuleMetadata || {}, A._sentryModuleMetadata[new A.Error().stack] = Object.assign({}, A._sentryModuleMetadata[new A.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var q = function(e2) {
    e2 && (window.document.title = e2);
  }, W = (function() {
    function e2(t2) {
      var r2 = this, a2 = t2.windowTitle, n2 = t2.writeDelay, i2 = t2.createURL, o2 = t2.parseURL, s2 = t2.getLocation, c2 = t2.start, u2 = t2.dispose, d2 = t2.push, l2 = t2.cleanUrlOnDispose;
      (0, x._)(this, e2), (0, R._)(this, "$$type", "ais.browser"), (0, R._)(this, "windowTitle", void 0), (0, R._)(this, "writeDelay", void 0), (0, R._)(this, "_createURL", void 0), (0, R._)(this, "parseURL", void 0), (0, R._)(this, "getLocation", void 0), (0, R._)(this, "writeTimer", void 0), (0, R._)(this, "_onPopState", void 0), (0, R._)(this, "inPopState", false), (0, R._)(this, "isDisposed", false), (0, R._)(this, "latestAcknowledgedHistory", 0), (0, R._)(this, "_start", void 0), (0, R._)(this, "_dispose", void 0), (0, R._)(this, "_push", void 0), (0, R._)(this, "_cleanUrlOnDispose", void 0), this.windowTitle = a2, this.writeTimer = void 0, this.writeDelay = void 0 === n2 ? 400 : n2, this._createURL = i2, this.parseURL = o2, this.getLocation = s2, this._start = c2, this._dispose = u2, this._push = d2, this._cleanUrlOnDispose = void 0 === l2 || l2, (0, h.safelyRunOnBrowser)(function(e3) {
        var t3 = e3.window;
        q(r2.windowTitle && r2.windowTitle(r2.read())), r2.latestAcknowledgedHistory = t3.history.length;
      });
    }
    return (0, k._)(e2, [{ key: "read", value: function() {
      return this.parseURL({ qsModule: H.default, location: this.getLocation() });
    } }, { key: "write", value: function(e3) {
      var t2 = this;
      (0, h.safelyRunOnBrowser)(function(r2) {
        var a2 = r2.window, n2 = t2.createURL(e3), i2 = t2.windowTitle && t2.windowTitle(e3);
        t2.writeTimer && clearTimeout(t2.writeTimer), t2.writeTimer = setTimeout(function() {
          q(i2), t2.shouldWrite(n2) && (t2._push ? t2._push(n2) : a2.history.pushState(e3, i2 || "", n2), t2.latestAcknowledgedHistory = a2.history.length), t2.inPopState = false, t2.writeTimer = void 0;
        }, t2.writeDelay);
      });
    } }, { key: "onUpdate", value: function(e3) {
      var t2 = this;
      this._start && this._start(function() {
        e3(t2.read());
      }), this._onPopState = function() {
        t2.writeTimer && (clearTimeout(t2.writeTimer), t2.writeTimer = void 0), t2.inPopState = true, e3(t2.read());
      }, (0, h.safelyRunOnBrowser)(function(e4) {
        e4.window.addEventListener("popstate", t2._onPopState);
      });
    } }, { key: "createURL", value: function(e3) {
      return this._createURL({ qsModule: H.default, routeState: e3, location: this.getLocation() });
    } }, { key: "dispose", value: function() {
      var e3 = this;
      this._dispose && this._dispose(), this.isDisposed = true, (0, h.safelyRunOnBrowser)(function(t2) {
        var r2 = t2.window;
        e3._onPopState && r2.removeEventListener("popstate", e3._onPopState);
      }), this.writeTimer && clearTimeout(this.writeTimer), this._cleanUrlOnDispose && this.write({});
    } }, { key: "start", value: function() {
      this.isDisposed = false;
    } }, { key: "shouldWrite", value: function(e3) {
      var t2 = this;
      return (0, h.safelyRunOnBrowser)(function(r2) {
        var a2 = r2.window;
        if (t2.isDisposed && !t2._cleanUrlOnDispose) return false;
        var n2 = !(t2.isDisposed && t2.latestAcknowledgedHistory !== a2.history.length);
        return !t2.inPopState && n2 && e3 !== a2.location.href;
      });
    } }]), e2;
  })(), j = e.i(766417), O = e.i(536038);
  try {
    var D = "u" > typeof window ? window : e.g;
    D._sentryModuleMetadata = D._sentryModuleMetadata || {}, D._sentryModuleMetadata[new D.Error().stack] = Object.assign({}, D._sentryModuleMetadata[new D.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function C(e2) {
    return e2.configure, (0, j._)(e2, ["configure"]);
  }
  try {
    var N = "u" > typeof window ? window : e.g;
    N._sentryModuleMetadata = N._sentryModuleMetadata || {}, N._sentryModuleMetadata[new N.Error().stack] = Object.assign({}, N._sentryModuleMetadata[new N.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function U(e2) {
    return e2 !== Object(e2);
  }
  try {
    var F = "u" > typeof window ? window : e.g;
    F._sentryModuleMetadata = F._sentryModuleMetadata || {}, F._sentryModuleMetadata[new F.Error().stack] = Object.assign({}, F._sentryModuleMetadata[new F.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["createRouterMiddleware", 0, function() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a2 = e2.router, n2 = void 0 === a2 ? (function() {
      var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t2 = e3.createURL, r2 = void 0 === t2 ? function(e4) {
        var t3 = e4.qsModule, r3 = e4.routeState, a4 = e4.location, n4 = a4.protocol, i4 = a4.hostname, o4 = a4.port, s4 = void 0 === o4 ? "" : o4, c3 = a4.pathname, u2 = a4.hash, d2 = t3.stringify(r3), l2 = "" === s4 ? "" : ":".concat(s4);
        return d2 ? "".concat(n4, "//").concat(i4).concat(l2).concat(c3, "?").concat(d2).concat(u2) : "".concat(n4, "//").concat(i4).concat(l2).concat(c3).concat(u2);
      } : t2, a3 = e3.parseURL, n3 = void 0 === a3 ? function(e4) {
        var t3 = e4.qsModule, r3 = e4.location;
        return t3.parse(r3.search.slice(1), { arrayLimit: 99 });
      } : a3, i3 = e3.writeDelay, o3 = e3.windowTitle, s3 = e3.getLocation;
      return new W({ createURL: r2, parseURL: n3, writeDelay: void 0 === i3 ? 400 : i3, windowTitle: o3, getLocation: void 0 === s3 ? function() {
        return (0, h.safelyRunOnBrowser)(function(e4) {
          return e4.window.location;
        }, { fallback: function() {
          throw Error("You need to provide `getLocation` to the `history` router in environments where `window` does not exist.");
        } });
      } : s3, start: e3.start, dispose: e3.dispose, push: e3.push, cleanUrlOnDispose: e3.cleanUrlOnDispose });
    })() : a2, i2 = e2.stateMapping, o2 = void 0 === i2 ? { $$type: "ais.simple", stateToRoute: function(e3) {
      return Object.keys(e3).reduce(function(a3, n3) {
        return (0, r._)((0, t._)({}, a3), (0, R._)({}, n3, C(e3[n3])));
      }, {});
    }, routeToState: function() {
      var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Object.keys(e3).reduce(function(a3, n3) {
        var i3 = e3[n3];
        return (void 0 === i3 ? "undefined" : (0, O._)(i3)) !== "object" || null === i3 ? a3 : (0, r._)((0, t._)({}, a3), (0, R._)({}, n3, C(i3)));
      }, {});
    } } : i2, s2 = e2.$$internal, c2 = void 0 !== s2 && s2;
    return function(e3) {
      var a3 = e3.instantSearchInstance;
      a3._createURL = function(e4) {
        var i4 = 0 === a3.mainIndex.getWidgets().length ? a3._initialUiState : a3.mainIndex.getWidgetUiState({}), s4 = Object.keys(e4).reduce(function(a4, n3) {
          return (0, r._)((0, t._)({}, a4), (0, R._)({}, n3, e4[n3]));
        }, i4), c3 = o2.stateToRoute(s4);
        return n2.createURL(c3);
      };
      var i3 = void 0, s3 = a3._initialUiState;
      return { $$type: "ais.router({router:".concat(n2.$$type || "__unknown__", ", stateMapping:").concat(o2.$$type || "__unknown__", "})"), $$internal: c2, onStateChange: function(e4) {
        var t2 = e4.uiState, r2 = o2.stateToRoute(t2);
        (void 0 === i3 || !(function e5(t3, r3) {
          if (t3 === r3) return true;
          if (U(t3) || U(r3) || "function" == typeof t3 || "function" == typeof r3) return t3 === r3;
          if (Object.keys(t3).length !== Object.keys(r3).length) return false;
          var a4 = true, n3 = false, i4 = void 0;
          try {
            for (var o3, s4 = Object.keys(t3)[Symbol.iterator](); !(a4 = (o3 = s4.next()).done); a4 = true) {
              var c3 = o3.value;
              if (!(c3 in r3) || !e5(t3[c3], r3[c3])) return false;
            }
          } catch (e6) {
            n3 = true, i4 = e6;
          } finally {
            try {
              a4 || null == s4.return || s4.return();
            } finally {
              if (n3) throw i4;
            }
          }
          return true;
        })(i3, r2)) && (n2.write(r2), i3 = r2);
      }, subscribe: function() {
        a3._initialUiState = (0, t._)({}, s3, o2.routeToState(n2.read())), n2.onUpdate(function(e4) {
          a3.mainIndex.getWidgets().length > 0 && a3.setUiState(o2.routeToState(e4));
        });
      }, started: function() {
        var e4;
        null == (e4 = n2.start) || e4.call(n2);
      }, unsubscribe: function() {
        n2.dispose();
      } };
    };
  }], 264201);
  try {
    var B = "u" > typeof window ? window : e.g;
    B._sentryModuleMetadata = B._sentryModuleMetadata || {}, B._sentryModuleMetadata[new B.Error().stack] = Object.assign({}, B._sentryModuleMetadata[new B.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var K = 0;
  e.s(["addWidgetId", 0, function(e2) {
    "recommend" === e2.dependsOn && (e2.$$id = K++);
  }], 498578);
  try {
    var L = "u" > typeof window ? window : e.g;
    L._sentryModuleMetadata = L._sentryModuleMetadata || {}, L._sentryModuleMetadata[new L.Error().stack] = Object.assign({}, L._sentryModuleMetadata[new L.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var G = Promise.resolve();
  e.s(["defer", 0, function(e2) {
    var t2 = null, r2 = false, a2 = function() {
      for (var a3 = arguments.length, i2 = Array(a3), o2 = 0; o2 < a3; o2++) i2[o2] = arguments[o2];
      null === t2 && (t2 = G.then(function() {
        if (t2 = null, r2) {
          r2 = false;
          return;
        }
        e2.apply(void 0, (0, n._)(i2));
      }));
    };
    return a2.wait = function() {
      if (null === t2) throw Error("The deferred function should be called before calling `wait()`");
      return t2;
    }, a2.cancel = function() {
      null !== t2 && (r2 = true);
    }, a2;
  }], 494617);
  try {
    var Q = "u" > typeof window ? window : e.g;
    Q._sentryModuleMetadata = Q._sentryModuleMetadata || {}, Q._sentryModuleMetadata[new Q.Error().stack] = Object.assign({}, Q._sentryModuleMetadata[new Q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["resolveSearchParameters", 0, function(e2) {
    for (var t2 = e2.getParent(), r2 = [e2.getHelper().state]; null !== t2; ) r2 = [t2.getHelper().state].concat(r2), t2 = t2.getParent();
    return r2;
  }], 427379);
  var $ = e.i(133070);
  try {
    var V = "u" > typeof window ? window : e.g;
    V._sentryModuleMetadata = V._sentryModuleMetadata || {}, V._sentryModuleMetadata[new V.Error().stack] = Object.assign({}, V._sentryModuleMetadata[new V.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["addInsightsToRecommendParameters", 0, function(e2, a2) {
    var n2 = a2.userToken, i2 = a2.clickAnalytics;
    return void 0 === n2 && void 0 === i2 ? e2 : new $.default.RecommendParameters({ params: e2.params.map(function(e3) {
      var a3 = e3.queryParameters;
      return (0, r._)((0, t._)({}, e3), { queryParameters: (0, t._)({}, void 0 === i2 ? {} : { clickAnalytics: i2 }, void 0 === n2 ? {} : { userToken: n2 }, a3) });
    }) });
  }], 613442);
}, 247984, 948741, (e) => {
  "use strict";
  var t = e.i(396784), r = e.i(401157), a = e.i(319465), n = e.i(868275), i = e.i(785337), o = e.i(94e4), s = e.i(164309), c = e.i(648486), u = e.i(106824), d = e.i(133070), l = e.i(928342), h = e.i(865120), p = e.i(264201), f = e.i(784544), y = e.i(766417), m = e.i(498578), g = e.i(786512), v = e.i(494617), T = e.i(427379), P = e.i(613442), w = e.i(369670), I = e.i(313042), M = e.i(293321);
  try {
    var _ = "u" > typeof window ? window : e.g;
    _._sentryModuleMetadata = _._sentryModuleMetadata || {}, _._sentryModuleMetadata[new _.Error().stack] = Object.assign({}, _._sentryModuleMetadata[new _.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var S = (0, w.createDocumentationMessageGenerator)({ name: "index-widget" });
  function b(e2, t2) {
    var r2 = t2.state, a2 = t2.recommendState, n2 = t2.isPageReset, i2 = t2._uiState;
    r2 !== e2.state && (e2.state = r2, e2.emit("change", { state: e2.state, results: e2.lastResults, isPageReset: n2, _uiState: i2 })), a2 !== e2.recommendState && (e2.recommendState = a2);
  }
  function E(e2, t2) {
    var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return e2.reduce(function(e3, r3) {
      return !(0, g.isIndexWidget)(r3) && (r3.getWidgetUiState || r3.getWidgetState) ? r3.getWidgetUiState ? r3.getWidgetUiState(e3, t2) : r3.getWidgetState(e3, t2) : e3;
    }, r2);
  }
  function R(e2, t2) {
    var r2 = t2.initialSearchParameters, a2 = (0, y._)(t2, ["initialSearchParameters"]);
    return e2.reduce(function(e3, t3) {
      return !t3.getWidgetSearchParameters || (0, g.isIndexWidget)(t3) ? e3 : "search" === t3.dependsOn && t3.getWidgetParameters ? t3.getWidgetParameters(e3, a2) : t3.getWidgetSearchParameters(e3, a2);
    }, r2);
  }
  function x(e2, t2) {
    var r2 = t2.initialRecommendParameters, a2 = (0, y._)(t2, ["initialRecommendParameters"]);
    return e2.reduce(function(e3, t3) {
      return !(0, g.isIndexWidget)(t3) && "recommend" === t3.dependsOn && t3.getWidgetParameters ? t3.getWidgetParameters(e3, a2) : e3;
    }, r2);
  }
  var k = function(e2) {
    if (void 0 === e2 || void 0 === e2.indexName && !e2.isolated && !e2.EXPERIMENTAL_isolated) throw Error(S("The `indexName` option is required."));
    var t2, r2 = e2.indexName, a2 = void 0 === r2 ? "" : r2, i2 = e2.indexId, u2 = void 0 === i2 ? a2 : i2, l2 = e2.isolated, h2 = void 0 === l2 ? null != (t2 = e2.EXPERIMENTAL_isolated) && t2 : l2, p2 = [], y2 = {}, w2 = null, _2 = null, k2 = null, H2 = null, A2 = null, q2 = function() {
      var e3, t3, r3, a3;
      w2 && (r3 = (t3 = (function e4(t4) {
        return t4.reduce(function(t5, r4) {
          if ((0, g.isIndexWidget)(r4)) {
            if (r4._isolated) return t5;
            var a4 = e4(r4.getWidgets());
            return { hasSearchWidget: t5.hasSearchWidget || a4.hasSearchWidget, hasRecommendWidget: t5.hasRecommendWidget || a4.hasRecommendWidget };
          }
          return "recommend" === r4.dependsOn ? (0, f._)((0, s._)({}, t5), { hasRecommendWidget: true }) : "none" === r4.dependsOn ? t5 : (0, f._)((0, s._)({}, t5), { hasSearchWidget: true });
        }, { hasSearchWidget: false, hasRecommendWidget: false });
      })((e3 = w2).mainIndex.getWidgets())).hasSearchWidget, a3 = t3.hasRecommendWidget, e3._hasSearchWidget = r3, e3._hasRecommendWidget = a3);
    };
    return { $$type: "ais.index", $$widgetType: "ais.index", _isolated: h2, getIndexName: function() {
      return a2;
    }, getIndexId: function() {
      return u2;
    }, getHelper: function() {
      return k2;
    }, getResults: function() {
      return (null == H2 ? void 0 : H2.lastResults) ? (H2.lastResults._state = k2.state, H2.lastResults) : null;
    }, getResultsForWidget: function(e3) {
      return "recommend" !== e3.dependsOn || (0, g.isIndexWidget)(e3) || void 0 === e3.$$id ? this.getResults() : (null == k2 ? void 0 : k2.lastRecommendResults) ? k2.lastRecommendResults[e3.$$id] : null;
    }, getPreviousState: function() {
      return A2;
    }, getScopedResults: function() {
      var e3 = this.getParent();
      return (function e4(t3) {
        return t3.filter(g.isIndexWidget).reduce(function(t4, r3) {
          return t4.concat.apply(t4, [{ indexId: r3.getIndexId(), results: r3.getResults(), helper: r3.getHelper() }].concat((0, c._)(e4(r3.getWidgets()))));
        }, []);
      })(e3 ? e3.getWidgets() : 0 === a2.length ? this.getWidgets() : [this]);
    }, getParent: function() {
      return h2 ? null : _2;
    }, createURL: function(e3) {
      return "function" == typeof e3 ? w2._createURL((0, n._)({}, u2, e3(y2))) : w2._createURL((0, n._)({}, u2, E(p2, { searchParameters: e3, helper: k2 })));
    }, scheduleLocalSearch: (0, v.defer)(function() {
      h2 && (null == k2 || k2.search());
    }), getWidgets: function() {
      return p2;
    }, addWidgets: function(e3) {
      var t3 = this;
      if (!Array.isArray(e3)) throw Error(S("The `addWidgets` method expects an array of widgets."));
      var r3 = e3.reduce(function(e4, t4) {
        return e4.concat(Array.isArray(t4) ? t4 : [t4]);
      }, []);
      if (r3.some(function(e4) {
        return "function" != typeof e4.init && "function" != typeof e4.render;
      })) throw Error(S("The widget definition expects a `render` and/or an `init` method."));
      return r3.forEach(function(e4) {
        e4.parent = t3, (0, g.isIndexWidget)(e4) || (0, m.addWidgetId)(e4);
      }), p2 = p2.concat(r3), q2(), w2 && r3.length && (b(k2, { state: R(p2, { uiState: y2, initialSearchParameters: k2.state }), recommendState: x(p2, { uiState: y2, initialRecommendParameters: k2.recommendState }), _uiState: y2 }), r3.forEach(function(e4) {
        if (e4.getRenderState) {
          var r4 = e4.getRenderState(w2.renderState[t3.getIndexId()] || {}, (0, M.createInitArgs)(w2, t3, w2._initialUiState));
          (0, M.storeRenderState)({ renderState: r4, instantSearchInstance: w2, parent: t3 });
        }
      }), r3.forEach(function(e4) {
        e4.init && e4.init((0, M.createInitArgs)(w2, t3, w2._initialUiState));
      }), h2 ? this.scheduleLocalSearch() : w2.scheduleSearch()), this;
    }, removeWidgets: function(e3) {
      var t3 = this;
      if (!Array.isArray(e3)) throw Error(S("The `removeWidgets` method expects an array of widgets."));
      var r3 = e3.reduce(function(e4, t4) {
        return e4.concat(Array.isArray(t4) ? t4 : [t4]);
      }, []);
      if (r3.some(function(e4) {
        return "function" != typeof e4.dispose;
      })) throw Error(S("The widget definition expects a `dispose` method."));
      if (p2 = p2.filter(function(e4) {
        return -1 === r3.indexOf(e4);
      }), r3.forEach(function(e4) {
        e4.parent = void 0;
      }), q2(), w2 && r3.length) {
        var a3 = r3.reduce(function(e4, r4) {
          var a4 = r4.dispose({ helper: k2, state: e4.cleanedSearchState, recommendState: e4.cleanedRecommendState, parent: t3 });
          return (0, o._)(a4, d.default.RecommendParameters) ? e4.cleanedRecommendState = a4 : a4 && (e4.cleanedSearchState = a4), e4;
        }, { cleanedSearchState: k2.state, cleanedRecommendState: k2.recommendState }), n2 = a3.cleanedSearchState, i3 = a3.cleanedRecommendState, s2 = w2.future.preserveSharedStateOnUnmount ? R(p2, { uiState: y2, initialSearchParameters: new d.default.SearchParameters({ index: this.getIndexName() }) }) : R(p2, { uiState: E(p2, { searchParameters: n2, helper: k2 }), initialSearchParameters: n2 });
        y2 = E(p2, { searchParameters: s2, helper: k2 }), k2.setState(s2), k2.recommendState = i3, p2.length && (h2 ? this.scheduleLocalSearch() : w2.scheduleSearch());
      }
      return this;
    }, init: function(e3) {
      var t3, r3 = this, n2 = e3.instantSearchInstance, i3 = e3.parent, o2 = e3.uiState;
      if (null === k2) {
        w2 = n2, _2 = i3, y2 = o2[u2] || {};
        var s2 = n2.mainHelper, l3 = R(p2, { uiState: y2, initialSearchParameters: new d.default.SearchParameters({ index: a2 }) }), f2 = x(p2, { uiState: y2, initialRecommendParameters: new d.default.RecommendParameters() });
        (k2 = (0, d.default)(s2.getClient(), l3.index, l3)).recommendState = f2, k2.search = function() {
          return h2 ? (n2.status = "loading", r3.render({ instantSearchInstance: n2 }), n2.compositionID ? k2.searchWithComposition() : k2.searchOnlyWithDerivedHelpers()) : n2.onStateChange ? (n2.onStateChange({ uiState: n2.mainIndex.getWidgetUiState({}), setUiState: function(e4) {
            return n2.setUiState(e4, false);
          } }), s2) : s2.search();
        }, k2.searchWithoutTriggeringOnStateChange = function() {
          return s2.search();
        }, k2.searchForFacetValues = function(e4, t4, a3, n3) {
          var i4 = I.mergeSearchParameters.apply(void 0, [s2.state].concat((0, c._)((0, T.resolveSearchParameters)(r3)))).setQueryParameters(n3);
          return s2.searchForFacetValues(e4, t4, a3, i4);
        };
        var m2 = a2 ? k2 : (0, d.default)({}, "__empty_index__", {});
        H2 = (h2 ? m2 : (function(e4, t4) {
          for (; e4; ) {
            if (e4._isolated) return e4.getHelper();
            e4 = e4.getParent();
          }
          return t4;
        })(i3, s2)).derive(function() {
          return I.mergeSearchParameters.apply(void 0, [s2.state].concat((0, c._)((0, T.resolveSearchParameters)(r3))));
        }, function() {
          return (0, P.addInsightsToRecommendParameters)(r3.getHelper().recommendState, s2.state);
        });
        var v2 = null == (t3 = n2._initialResults) ? void 0 : t3[this.getIndexId()];
        if (null == v2 ? void 0 : v2.results) {
          var S2 = new d.default.SearchResults(new d.default.SearchParameters(v2.state), v2.results);
          H2.lastResults = S2, k2.lastResults = S2;
        }
        if (null == v2 ? void 0 : v2.recommendResults) {
          var W2 = new d.default.RecommendResults(new d.default.RecommendParameters({ params: v2.recommendResults.params }), v2.recommendResults.results);
          H2.lastRecommendResults = W2, k2.lastRecommendResults = W2;
        }
        k2.on("change", function(e4) {
          e4.isPageReset && (function e5(t4) {
            var r4 = t4.filter(g.isIndexWidget);
            0 !== r4.length && r4.forEach(function(t5) {
              var r5 = t5.getHelper();
              b(r5, { state: r5.state.resetPage(), recommendState: r5.recommendState, isPageReset: true }), e5(t5.getWidgets());
            });
          })(p2);
        }), H2.on("search", function() {
          n2.scheduleStalledRender();
        }), H2.on("result", function(e4) {
          var t4 = e4.results;
          n2.scheduleRender(), k2.lastResults = t4, A2 = null == t4 ? void 0 : t4._state;
        }), H2.on("recommend:result", function(e4) {
          var t4 = e4.recommend;
          n2.scheduleRender(), k2.lastRecommendResults = t4.results;
        }), p2.forEach(function(e4) {
          if (e4.getRenderState) {
            var t4 = e4.getRenderState(n2.renderState[r3.getIndexId()] || {}, (0, M.createInitArgs)(n2, r3, o2));
            (0, M.storeRenderState)({ renderState: t4, instantSearchInstance: n2, parent: r3 });
          }
        }), p2.forEach(function(e4) {
          e4.init && e4.init((0, M.createInitArgs)(n2, r3, o2));
        }), k2.on("change", function(e4) {
          var t4 = e4.state, r4 = e4._uiState;
          y2 = E(p2, { searchParameters: t4, helper: k2 }, r4 || {}), n2.onStateChange || n2.onInternalStateChange();
        }), v2 && n2.scheduleRender(), q2();
      }
    }, render: function(e3) {
      var t3 = this, r3 = e3.instantSearchInstance;
      "error" === r3.status && !r3.mainHelper.hasPendingRequests() && A2 && k2.setState(A2);
      var n2 = this.getResults() || (null == H2 ? void 0 : H2.lastRecommendResults) || h2 && !a2 ? p2 : p2.filter(function(e4) {
        return e4.shouldRender;
      });
      (n2 = n2.filter(function(e4) {
        return !e4.shouldRender || e4.shouldRender({ instantSearchInstance: r3 });
      })).forEach(function(e4) {
        if (e4.getRenderState) {
          var a3 = e4.getRenderState(r3.renderState[t3.getIndexId()] || {}, (0, M.createRenderArgs)(r3, t3, e4));
          (0, M.storeRenderState)({ renderState: a3, instantSearchInstance: r3, parent: t3 });
        }
      }), n2.forEach(function(e4) {
        e4.render && e4.render((0, M.createRenderArgs)(r3, t3, e4));
      });
    }, dispose: function() {
      var e3 = this;
      p2.forEach(function(t3) {
        t3.dispose && k2 && t3.dispose({ helper: k2, state: k2.state, recommendState: k2.recommendState, parent: e3 });
      }), w2 = null, _2 = null, null == k2 || k2.removeAllListeners(), k2 = null, null == H2 || H2.detach(), H2 = null;
    }, getWidgetUiState: function(e3) {
      return p2.filter(g.isIndexWidget).filter(function(e4) {
        return !e4._isolated;
      }).reduce(function(e4, t3) {
        return t3.getWidgetUiState(e4);
      }, (0, f._)((0, s._)({}, e3), (0, n._)({}, u2, (0, s._)({}, e3[u2], y2))));
    }, getWidgetState: function(e3) {
      return this.getWidgetUiState(e3);
    }, getWidgetSearchParameters: function(e3, t3) {
      var r3 = t3.uiState;
      return R(p2, { uiState: r3, initialSearchParameters: e3 });
    }, shouldRender: function() {
      return true;
    }, refreshUiState: function() {
      y2 = E(p2, { searchParameters: this.getHelper().state, helper: this.getHelper() }, y2);
    }, setIndexUiState: function(e3) {
      var t3 = "function" == typeof e3 ? e3(y2) : e3;
      w2.setUiState(function(e4) {
        return (0, f._)((0, s._)({}, e4), (0, n._)({}, u2, t3));
      });
    } };
  };
  try {
    var H = "u" > typeof window ? window : e.g;
    H._sentryModuleMetadata = H._sentryModuleMetadata || {}, H._sentryModuleMetadata[new H.Error().stack] = Object.assign({}, H._sentryModuleMetadata[new H.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var A = "u" > typeof window ? window : e.g;
    A._sentryModuleMetadata = A._sentryModuleMetadata || {}, A._sentryModuleMetadata[new A.Error().stack] = Object.assign({}, A._sentryModuleMetadata[new A.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var q = function(e2) {
    return function() {
      var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = t2.descendantName, a2 = t2.modifierName;
      return "".concat("ais", "-").concat(e2).concat(r2 ? "-".concat(r2) : "").concat(a2 ? "--".concat(a2) : "");
    };
  }, W = e.i(27028), j = e.i(697388);
  try {
    var O = "u" > typeof window ? window : e.g;
    O._sentryModuleMetadata = O._sentryModuleMetadata || {}, O._sentryModuleMetadata[new O.Error().stack] = Object.assign({}, O._sentryModuleMetadata[new O.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var D = q("Highlight");
  try {
    var C = "u" > typeof window ? window : e.g;
    C._sentryModuleMetadata = C._sentryModuleMetadata || {}, C._sentryModuleMetadata[new C.Error().stack] = Object.assign({}, C._sentryModuleMetadata[new C.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function N(e2) {
    var t2 = j.TAG_REPLACEMENT.highlightPreTag, r2 = j.TAG_REPLACEMENT.highlightPostTag;
    return e2.map(function(e3) {
      return e3.isHighlighted ? t2 + e3.value + r2 : e3.value;
    }).join("");
  }
  var U = e.i(134098);
  try {
    var F = "u" > typeof window ? window : e.g;
    F._sentryModuleMetadata = F._sentryModuleMetadata || {}, F._sentryModuleMetadata[new F.Error().stack] = Object.assign({}, F._sentryModuleMetadata[new F.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var B = new RegExp(/\w/i);
  try {
    var K = "u" > typeof window ? window : e.g;
    K._sentryModuleMetadata = K._sentryModuleMetadata || {}, K._sentryModuleMetadata[new K.Error().stack] = Object.assign({}, K._sentryModuleMetadata[new K.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function L(e2) {
    return e2.some(function(e3) {
      return e3.isHighlighted;
    }) ? e2.map(function(t2, r2) {
      var a2, n2, i2, o2, c2, u2, d2;
      return (0, f._)((0, s._)({}, t2), { isHighlighted: (c2 = e2[r2], u2 = null == (a2 = null == (i2 = e2[r2 + 1]) ? void 0 : i2.isHighlighted) || a2, d2 = null == (n2 = null == (o2 = e2[r2 - 1]) ? void 0 : o2.isHighlighted) || n2, B.test((0, U.unescape)(c2.value)) || d2 !== u2 ? !c2.isHighlighted : !d2) });
    }) : e2.map(function(e3) {
      return (0, f._)((0, s._)({}, e3), { isHighlighted: false });
    });
  }
  var G = e.i(158043);
  try {
    var Q = "u" > typeof window ? window : e.g;
    Q._sentryModuleMetadata = Q._sentryModuleMetadata || {}, Q._sentryModuleMetadata[new Q.Error().stack] = Object.assign({}, Q._sentryModuleMetadata[new Q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var $ = q("ReverseHighlight");
  try {
    var V = "u" > typeof window ? window : e.g;
    V._sentryModuleMetadata = V._sentryModuleMetadata || {}, V._sentryModuleMetadata[new V.Error().stack] = Object.assign({}, V._sentryModuleMetadata[new V.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var z = q("Snippet");
  try {
    var J = "u" > typeof window ? window : e.g;
    J._sentryModuleMetadata = J._sentryModuleMetadata || {}, J._sentryModuleMetadata[new J.Error().stack] = Object.assign({}, J._sentryModuleMetadata[new J.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var X = q("ReverseSnippet"), Y = e.i(428929);
  try {
    var Z = "u" > typeof window ? window : e.g;
    Z._sentryModuleMetadata = Z._sentryModuleMetadata || {}, Z._sentryModuleMetadata[new Z.Error().stack] = Object.assign({}, Z._sentryModuleMetadata[new Z.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var ee = e.i(793544), et = e.i(177619);
  try {
    var er = "u" > typeof window ? window : e.g;
    er._sentryModuleMetadata = er._sentryModuleMetadata || {}, er._sentryModuleMetadata[new er.Error().stack] = Object.assign({}, er._sentryModuleMetadata[new er.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function ea(e2) {
    var t2;
    return (null == (t2 = e2.compositionFeedsResults) ? void 0 : t2.length) ? e2.compositionFeedsResults : e2.results || [];
  }
  function en(e2) {
    var t2 = function(e3) {
      for (var t3 = arguments.length, r2 = Array(t3 > 1 ? t3 - 1 : 0), a2 = 1; a2 < t3; a2++) r2[a2 - 1] = arguments[a2];
      var n2 = 0;
      return e3.replace(/%s/g, function() {
        return encodeURIComponent(r2[n2++]);
      });
    };
    return Object.keys(e2).map(function(r2) {
      var a2;
      return t2("%s=%s", r2, (a2 = e2[r2], "[object Object]" === Object.prototype.toString.call(a2) || "[object Array]" === Object.prototype.toString.call(a2)) ? JSON.stringify(e2[r2]) : e2[r2]);
    }).join("&");
  }
  try {
    var ei = "u" > typeof window ? window : e.g;
    ei._sentryModuleMetadata = ei._sentryModuleMetadata || {}, ei._sentryModuleMetadata[new ei.Error().stack] = Object.assign({}, ei._sentryModuleMetadata[new ei.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var eo = "u" > typeof window ? window : e.g;
    eo._sentryModuleMetadata = eo._sentryModuleMetadata || {}, eo._sentryModuleMetadata[new eo.Error().stack] = Object.assign({}, eo._sentryModuleMetadata[new eo.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function es(e2, t2) {
    var r2 = e2[t2.getIndexId()] || {};
    t2.getHelper().setState(t2.getWidgetSearchParameters(t2.getHelper().state, { uiState: r2 })), t2.getWidgets().filter(g.isIndexWidget).forEach(function(t3) {
      return es(e2, t3);
    });
  }
  var ec = e.i(102865), eu = e.i(828177);
  try {
    var ed = "u" > typeof window ? window : e.g;
    ed._sentryModuleMetadata = ed._sentryModuleMetadata || {}, ed._sentryModuleMetadata[new ed.Error().stack] = Object.assign({}, ed._sentryModuleMetadata[new ed.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var el = (0, w.createDocumentationMessageGenerator)({ name: "instantsearch" });
  function eh() {
    return "#";
  }
  var ep = { preserveSharedStateOnUnmount: false, persistHierarchicalRootCount: false }, ef = (function(e2) {
    function u2(e3) {
      (0, r._)(this, u2), a2 = (0, t._)(this, u2), (0, n._)(a2, "client", void 0), (0, n._)(a2, "indexName", void 0), (0, n._)(a2, "compositionID", void 0), (0, n._)(a2, "insightsClient", void 0), (0, n._)(a2, "onStateChange", null), (0, n._)(a2, "future", void 0), (0, n._)(a2, "helper", void 0), (0, n._)(a2, "mainHelper", void 0), (0, n._)(a2, "mainIndex", void 0), (0, n._)(a2, "started", void 0), (0, n._)(a2, "templatesConfig", void 0), (0, n._)(a2, "renderState", {}), (0, n._)(a2, "_stalledSearchDelay", void 0), (0, n._)(a2, "_searchStalledTimer", void 0), (0, n._)(a2, "_initialUiState", void 0), (0, n._)(a2, "_initialResults", void 0), (0, n._)(a2, "_manuallyResetScheduleSearch", false), (0, n._)(a2, "_resetScheduleSearch", void 0), (0, n._)(a2, "_createURL", void 0), (0, n._)(a2, "_searchFunction", void 0), (0, n._)(a2, "_mainHelperSearch", void 0), (0, n._)(a2, "_hasSearchWidget", false), (0, n._)(a2, "_hasRecommendWidget", false), (0, n._)(a2, "_insights", void 0), (0, n._)(a2, "_initialOptions", void 0), (0, n._)(a2, "middleware", []), (0, n._)(a2, "sendEventToInsights", void 0), (0, n._)(a2, "_createdAt", (0, ec.now)()), (0, n._)(a2, "status", "idle"), (0, n._)(a2, "error", void 0), (0, n._)(a2, "scheduleSearch", (0, v.defer)(function() {
        a2.started && a2.mainHelper.search();
      })), (0, n._)(a2, "scheduleRender", (0, v.defer)(function() {
        var e4, t2 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        (null == (e4 = a2.mainHelper) ? void 0 : e4.hasPendingRequests()) || (clearTimeout(a2._searchStalledTimer), a2._searchStalledTimer = null, t2 && (a2.status = "idle", a2.error = void 0)), a2.mainIndex.render({ instantSearchInstance: a2 }), a2.emit("render");
      })), (0, n._)(a2, "onInternalStateChange", (0, v.defer)(function() {
        var e4 = a2.mainIndex.getWidgetUiState({});
        a2.middleware.forEach(function(t2) {
          t2.instance.onStateChange({ uiState: e4 });
        });
      })), a2.setMaxListeners(100);
      var a2, i2 = e3.indexName, o2 = e3.compositionID, c2 = e3.numberLocale, d2 = e3.initialUiState, y2 = e3.routing, m2 = void 0 === y2 ? null : y2, g2 = e3.insights, T2 = void 0 === g2 ? void 0 : g2, P2 = e3.searchFunction, w2 = e3.stalledSearchDelay, I2 = e3.searchClient, M2 = void 0 === I2 ? null : I2, _2 = e3.insightsClient, S2 = void 0 === _2 ? null : _2, b2 = e3.onStateChange, E2 = e3.future, R2 = void 0 === E2 ? (0, s._)({}, ep, e3.future || {}) : E2;
      if (null === M2) throw Error(el("The `searchClient` option is required."));
      if ("function" != typeof M2.search) throw Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
      if ("function" == typeof M2.addAlgoliaAgent && M2.addAlgoliaAgent("instantsearch.js (".concat(ee.default, ")")), S2 && "function" != typeof S2) throw Error(el("The `insightsClient` option should be a function."));
      if (a2._initialOptions = e3, a2.client = M2, a2.future = R2, a2.insightsClient = S2, a2.indexName = void 0 === i2 ? "" : i2, a2.compositionID = o2, a2.helper = null, a2.mainHelper = null, a2.mainIndex = k({ indexName: a2.compositionID || a2.indexName }), a2.onStateChange = void 0 === b2 ? null : b2, a2.started = false, a2.templatesConfig = { helpers: { formatNumber: function(e4, t2) {
        var r2;
        return r2 = Number(t2(e4)), r2.toLocaleString(c2);
      }, highlight: function(e4, t2) {
        try {
          var r2, a3, n2, i3, o3, c3, u3, d3, l2, h2 = JSON.parse(e4);
          return t2((a3 = (r2 = (0, f._)((0, s._)({}, h2), { hit: this })).attribute, n2 = r2.highlightedTagName, i3 = void 0 === n2 ? "mark" : n2, o3 = r2.hit, c3 = r2.cssClasses, u3 = void 0 === c3 ? {} : c3, d3 = ((0, W.getPropertyByPath)(o3._highlightResult, a3) || {}).value, l2 = D({ descendantName: "highlighted" }) + (u3.highlighted ? " ".concat(u3.highlighted) : ""), (void 0 === d3 ? "" : d3).replace(RegExp(j.TAG_REPLACEMENT.highlightPreTag, "g"), "<".concat(i3, ' class="').concat(l2, '">')).replace(RegExp(j.TAG_REPLACEMENT.highlightPostTag, "g"), "</".concat(i3, ">"))));
        } catch (e5) {
          throw Error('\nThe highlight helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }');
        }
      }, reverseHighlight: function(e4, t2) {
        try {
          var r2, a3, n2, i3, o3, c3, u3, d3, l2, h2 = JSON.parse(e4);
          return t2((a3 = (r2 = (0, f._)((0, s._)({}, h2), { hit: this })).attribute, n2 = r2.highlightedTagName, i3 = void 0 === n2 ? "mark" : n2, o3 = r2.hit, c3 = r2.cssClasses, u3 = void 0 === c3 ? {} : c3, d3 = ((0, W.getPropertyByPath)(o3._highlightResult, a3) || {}).value, l2 = $({ descendantName: "highlighted" }) + (u3.highlighted ? " ".concat(u3.highlighted) : ""), N(L((0, G.getHighlightedParts)(void 0 === d3 ? "" : d3))).replace(RegExp(j.TAG_REPLACEMENT.highlightPreTag, "g"), "<".concat(i3, ' class="').concat(l2, '">')).replace(RegExp(j.TAG_REPLACEMENT.highlightPostTag, "g"), "</".concat(i3, ">"))));
        } catch (e5) {
          throw Error('\n  The reverseHighlight helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }');
        }
      }, snippet: function(e4, t2) {
        try {
          var r2, a3, n2, i3, o3, c3, u3, d3, l2, h2 = JSON.parse(e4);
          return t2((a3 = (r2 = (0, f._)((0, s._)({}, h2), { hit: this })).attribute, n2 = r2.highlightedTagName, i3 = void 0 === n2 ? "mark" : n2, o3 = r2.hit, c3 = r2.cssClasses, u3 = void 0 === c3 ? {} : c3, d3 = ((0, W.getPropertyByPath)(o3._snippetResult, a3) || {}).value, l2 = z({ descendantName: "highlighted" }) + (u3.highlighted ? " ".concat(u3.highlighted) : ""), (void 0 === d3 ? "" : d3).replace(RegExp(j.TAG_REPLACEMENT.highlightPreTag, "g"), "<".concat(i3, ' class="').concat(l2, '">')).replace(RegExp(j.TAG_REPLACEMENT.highlightPostTag, "g"), "</".concat(i3, ">"))));
        } catch (e5) {
          throw Error('\nThe snippet helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }');
        }
      }, reverseSnippet: function(e4, t2) {
        try {
          var r2, a3, n2, i3, o3, c3, u3, d3, l2, h2 = JSON.parse(e4);
          return t2((a3 = (r2 = (0, f._)((0, s._)({}, h2), { hit: this })).attribute, n2 = r2.highlightedTagName, i3 = void 0 === n2 ? "mark" : n2, o3 = r2.hit, c3 = r2.cssClasses, u3 = void 0 === c3 ? {} : c3, d3 = ((0, W.getPropertyByPath)(o3._snippetResult, a3) || {}).value, l2 = X({ descendantName: "highlighted" }) + (u3.highlighted ? " ".concat(u3.highlighted) : ""), N(L((0, G.getHighlightedParts)(void 0 === d3 ? "" : d3))).replace(RegExp(j.TAG_REPLACEMENT.highlightPreTag, "g"), "<".concat(i3, ' class="').concat(l2, '">')).replace(RegExp(j.TAG_REPLACEMENT.highlightPostTag, "g"), "</".concat(i3, ">"))));
        } catch (e5) {
          throw Error('\n  The reverseSnippet helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }');
        }
      }, insights: function(e4, t2) {
        try {
          var r2 = JSON.parse(e4), a3 = r2.method, n2 = r2.payload;
          return t2((0, Y.default)(a3, (0, s._)({ objectIDs: [this.objectID] }, n2)));
        } catch (e5) {
          throw Error('\nThe insights helper expects a JSON object of the format:\n{ "method": "method-name", "payload": { "eventName": "name of the event" } }');
        }
      } }, compileOptions: {} }, a2._stalledSearchDelay = void 0 === w2 ? 200 : w2, a2._searchStalledTimer = null, a2._createURL = eh, a2._initialUiState = void 0 === d2 ? {} : d2, a2._initialResults = null, a2._insights = T2, P2 && (a2._searchFunction = P2), a2.sendEventToInsights = eu.noop, m2) {
        var x2 = "boolean" == typeof m2 ? {} : m2;
        x2.$$internal = true, a2.use((0, p.createRouterMiddleware)(x2));
      }
      if (T2) {
        var H2 = "boolean" == typeof T2 ? {} : T2;
        H2.$$internal = true, a2.use((0, l.createInsightsMiddleware)(H2));
      }
      return (0, h.isMetadataEnabled)() && a2.use((0, h.createMetadataMiddleware)({ $$internal: true })), a2;
    }
    return (0, i._)(u2, e2), (0, a._)(u2, [{ key: "_isSearchStalled", get: function() {
      return "stalled" === this.status;
    } }, { key: "use", value: function() {
      for (var e3 = this, t2 = arguments.length, r2 = Array(t2), a2 = 0; a2 < t2; a2++) r2[a2] = arguments[a2];
      var n2 = r2.map(function(t3) {
        var r3 = (0, s._)({ $$type: "__unknown__", $$internal: false, subscribe: eu.noop, started: eu.noop, unsubscribe: eu.noop, onStateChange: eu.noop }, t3({ instantSearchInstance: e3 }));
        return e3.middleware.push({ creator: t3, instance: r3 }), r3;
      });
      return this.started && n2.forEach(function(e4) {
        e4.subscribe(), e4.started();
      }), this;
    } }, { key: "unuse", value: function() {
      for (var e3 = arguments.length, t2 = Array(e3), r2 = 0; r2 < e3; r2++) t2[r2] = arguments[r2];
      return this.middleware.filter(function(e4) {
        return t2.includes(e4.creator);
      }).forEach(function(e4) {
        return e4.instance.unsubscribe();
      }), this.middleware = this.middleware.filter(function(e4) {
        return !t2.includes(e4.creator);
      }), this;
    } }, { key: "EXPERIMENTAL_use", value: function() {
      for (var e3 = arguments.length, t2 = Array(e3), r2 = 0; r2 < e3; r2++) t2[r2] = arguments[r2];
      return this.use.apply(this, (0, c._)(t2));
    } }, { key: "addWidget", value: function(e3) {
      return this.addWidgets([e3]);
    } }, { key: "addWidgets", value: function(e3) {
      if (!Array.isArray(e3)) throw Error(el("The `addWidgets` method expects an array of widgets. Please use `addWidget`."));
      if (this.compositionID && e3.some(function(e4) {
        return !Array.isArray(e4) && (0, g.isIndexWidget)(e4) && !e4._isolated;
      })) throw Error(el("The `index` widget cannot be used with a composition-based InstantSearch implementation."));
      return this.mainIndex.addWidgets(e3), this;
    } }, { key: "removeWidget", value: function(e3) {
      return this.removeWidgets([e3]);
    } }, { key: "removeWidgets", value: function(e3) {
      if (!Array.isArray(e3)) throw Error(el("The `removeWidgets` method expects an array of widgets. Please use `removeWidget`."));
      return this.mainIndex.removeWidgets(e3), this;
    } }, { key: "start", value: function() {
      var e3 = this;
      if (this.started) throw Error(el("The `start` method has already been called once."));
      var t2 = this.mainHelper || (0, d.default)(this.client, this.indexName, void 0, { persistHierarchicalRootCount: this.future.persistHierarchicalRootCount });
      if (this.compositionID && (t2.searchForFacetValues = t2.searchForCompositionFacetValues.bind(t2)), t2.search = function() {
        var r3 = e3._hasSearchWidget || e3._hasRecommendWidget;
        return r3 && (e3.status = "loading"), e3.scheduleRender(!r3), e3._hasSearchWidget && (e3.compositionID ? t2.searchWithComposition() : t2.searchOnlyWithDerivedHelpers()), e3._hasRecommendWidget && t2.recommend(), t2;
      }, this._searchFunction) {
        var r2 = { search: function() {
          return new Promise(eu.noop);
        } };
        this._mainHelperSearch = t2.search.bind(t2), t2.search = function() {
          var a3 = e3.mainIndex.getHelper(), n2 = (0, d.default)(r2, a3.state.index, a3.state);
          return n2.once("search", function(t3) {
            var r3 = t3.state;
            a3.overrideStateWithoutTriggeringChangeEvent(r3), e3._mainHelperSearch();
          }), n2.on("change", function(e4) {
            var t3 = e4.state;
            a3.setState(t3);
          }), e3._searchFunction(n2), t2;
        };
      }
      if (t2.on("error", function(t3) {
        var r3 = t3.error;
        if (!(0, o._)(r3, Error)) {
          var a3 = r3;
          r3 = Object.keys(a3).reduce(function(e4, t4) {
            return e4[t4] = a3[t4], e4;
          }, Error(a3.message));
        }
        r3.error = r3, e3.error = r3, e3.status = "error", e3.scheduleRender(!e3._hasSearchWidget && !e3._hasRecommendWidget), e3.emit("error", r3);
      }), this.mainHelper = t2, this.middleware.forEach(function(e4) {
        e4.instance.subscribe();
      }), this.mainIndex.init({ instantSearchInstance: this, parent: null, uiState: this._initialUiState }), this._initialResults) {
        !(function(e4, t3) {
          if (t3 && ("transporter" in e4 && !e4._cacheHydrated || e4._useCache && "function" == typeof e4.addAlgoliaAgent)) {
            var r3 = [Object.keys(t3).reduce(function(e5, r4) {
              var a4 = t3[r4], n2 = a4.state, i4 = a4.requestParams, o3 = ea(a4), c2 = o3 && n2 ? o3.map(function(e6, t4) {
                return (0, s._)({ indexName: n2.index || e6.index }, (null == i4 ? void 0 : i4[t4]) || e6.params ? { params: en((null == i4 ? void 0 : i4[t4]) || e6.params.split("&").reduce(function(e7, t5) {
                  var r5 = (0, et._)(t5.split("="), 2), a5 = r5[0], n3 = r5[1];
                  return e7[a5] = n3 ? decodeURIComponent(n3) : "", e7;
                }, {})) } : {});
              }) : [];
              return e5.concat(c2);
            }, [])], a3 = Object.keys(t3).reduce(function(e5, r4) {
              var a4 = ea(t3[r4]);
              return a4 ? e5.concat(a4) : e5;
            }, []);
            if ("transporter" in e4 && !e4._cacheHydrated) {
              e4._cacheHydrated = true;
              var i3 = e4.search.bind(e4);
              e4.search = function(t4) {
                for (var r4 = arguments.length, a4 = Array(r4 > 1 ? r4 - 1 : 0), n2 = 1; n2 < r4; n2++) a4[n2 - 1] = arguments[n2];
                var o3 = Array.isArray(t4) ? t4.map(function(e5) {
                  return (0, f._)((0, s._)({}, e5), { params: en(e5.params) });
                }) : en(t4.requestBody.params);
                return e4.transporter.responsesCache.get({ method: "search", args: [o3].concat((0, c._)(a4)) }, function() {
                  return i3.apply(void 0, [t4].concat((0, c._)(a4)));
                });
              }, e4.transporter.responsesCache.set({ method: "search", args: r3 }, { results: a3 });
            }
            if (!("transporter" in e4)) {
              var o2 = "/1/indexes/*/queries_body_".concat(JSON.stringify({ requests: r3 }));
              e4.cache = (0, f._)((0, s._)({}, e4.cache), (0, n._)({}, o2, JSON.stringify({ results: Object.keys(t3).map(function(e5) {
                return ea(t3[e5]);
              }) })));
            }
          }
        })(this.client, this._initialResults), this.mainHelper._recommendCache = Object.keys(a2 = this._initialResults).reduce(function(e4, t3) {
          var r3 = a2[t3];
          return r3.recommendResults ? (0, s._)({}, e4, r3.recommendResults.results) : e4;
        }, {});
        var a2, i2 = this.scheduleSearch;
        this.scheduleSearch = (0, v.defer)(eu.noop), this._manuallyResetScheduleSearch ? this._resetScheduleSearch = function() {
          e3.scheduleSearch = i2;
        } : (0, v.defer)(function() {
          e3.scheduleSearch = i2;
        })();
      } else this.mainIndex.getWidgets().length > 0 && this.scheduleSearch();
      this.helper = this.mainIndex.getHelper(), this.started = true, this.middleware.forEach(function(e4) {
        e4.instance.started();
      }), void 0 === this._insights && t2.derivedHelpers[0].once("result", function() {
        e3.mainIndex.getScopedResults().some(function(e4) {
          var t3 = e4.results;
          return null == t3 ? void 0 : t3._automaticInsights;
        }) && e3.use((0, l.createInsightsMiddleware)({ $$internal: true, $$automatic: true }));
      });
    } }, { key: "dispose", value: function() {
      var e3;
      this.scheduleSearch.cancel(), this.scheduleRender.cancel(), clearTimeout(this._searchStalledTimer), this.removeWidgets(this.mainIndex.getWidgets()), this.mainIndex.dispose(), this.started = false, this.removeAllListeners(), null == (e3 = this.mainHelper) || e3.removeAllListeners(), this.mainHelper = null, this.helper = null, this.middleware.forEach(function(e4) {
        e4.instance.unsubscribe();
      }), this._initialOptions = null;
    } }, { key: "scheduleStalledRender", value: function() {
      var e3 = this;
      this._searchStalledTimer || (this._searchStalledTimer = setTimeout(function() {
        e3.status = "stalled", e3.scheduleRender();
      }, this._stalledSearchDelay));
    } }, { key: "setUiState", value: function(e3) {
      var t2 = this, r2 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
      if (!this.mainHelper) throw Error(el("The `start` method needs to be called before `setUiState`."));
      this.mainIndex.refreshUiState();
      var a2 = "function" == typeof e3 ? e3(this.mainIndex.getWidgetUiState({})) : e3;
      this.onStateChange && r2 ? this.onStateChange({ uiState: a2, setUiState: function(e4) {
        es("function" == typeof e4 ? e4(a2) : e4, t2.mainIndex), t2.scheduleSearch(), t2.onInternalStateChange();
      } }) : (es(a2, this.mainIndex), this.scheduleSearch(), this.onInternalStateChange());
    } }, { key: "getUiState", value: function() {
      return this.started && this.mainIndex.refreshUiState(), this.mainIndex.getWidgetUiState({});
    } }, { key: "createURL", value: function() {
      var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (!this.started) throw Error(el("The `start` method needs to be called before `createURL`."));
      return this._createURL(e3);
    } }, { key: "refresh", value: function() {
      if (!this.mainHelper) throw Error(el("The `start` method needs to be called before `refresh`."));
      this.mainHelper.clearCache().search();
    } }]), u2;
  })(u.default);
  e.s(["INSTANTSEARCH_FUTURE_DEFAULTS", 0, ep, "default", 0, ef], 247984);
  try {
    var ey = "u" > typeof window ? window : e.g;
    ey._sentryModuleMetadata = ey._sentryModuleMetadata || {}, ey._sentryModuleMetadata[new ey.Error().stack] = Object.assign({}, ey._sentryModuleMetadata[new ey.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["default", 0, "7.42.0"], 948741);
}, 369670, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["createDocumentationMessageGenerator", 0, function() {
    for (var e2 = arguments.length, t2 = Array(e2), r = 0; r < e2; r++) t2[r] = arguments[r];
    var a = t2.map(function(e3) {
      var t3;
      return ["https://www.algolia.com/doc/api-reference/widgets/", e3.name, "/js/", void 0 !== (t3 = e3.connector) && t3 ? "#connector" : ""].join("");
    }).join(", ");
    return function(e3) {
      return [e3, "See documentation: ".concat(a)].filter(Boolean).join("\n\n");
    };
  }]);
}, 27028, 667420, 851729, 134098, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["getPropertyByPath", 0, function(e2, t2) {
    return (Array.isArray(t2) ? t2 : t2.split(".")).reduce(function(e3, t3) {
      return e3 && e3[t3];
    }, e2);
  }], 27028);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function a() {
    return (a = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var r2 = arguments[t2];
        for (var a2 in r2) Object.prototype.hasOwnProperty.call(r2, a2) && (e2[a2] = r2[a2]);
      }
      return e2;
    }).apply(this, arguments);
  }
  e.s(["_", () => a], 667420);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["_", 0, function(e2) {
    if (null == e2) throw TypeError("Cannot destructure " + e2);
    return e2;
  }], 851729);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var o = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, s = /[&<>"']/g, c = RegExp(s.source), u = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, d = /&(amp|quot|lt|gt|#39);/g, l = RegExp(d.source);
  e.s(["escape", 0, function(e2) {
    return e2 && c.test(e2) ? e2.replace(s, function(e3) {
      return o[e3];
    }) : e2;
  }, "unescape", 0, function(e2) {
    return e2 && l.test(e2) ? e2.replace(d, function(e3) {
      return u[e3];
    }) : e2;
  }], 134098);
}, 558006, 536038, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function r(e2) {
    return e2 && "u" > typeof Symbol && e2.constructor === Symbol ? "symbol" : typeof e2;
  }
  e.s(["_", 0, r], 536038);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["isPlainObject", 0, function(e2) {
    if ((void 0 === e2 ? "undefined" : r(e2)) !== "object" || null === e2 || "[object Object]" !== (null === e2 ? void 0 === e2 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e2))) return false;
    if (null === Object.getPrototypeOf(e2)) return true;
    for (var t2 = e2; null !== Object.getPrototypeOf(t2); ) t2 = Object.getPrototypeOf(t2);
    return Object.getPrototypeOf(e2) === t2;
  }], 558006);
}, 313042, (e) => {
  "use strict";
  var t = e.i(164309), r = e.i(766417);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var o = function(e2, t2) {
    t2.facets, t2.disjunctiveFacets, t2.facetsRefinements, t2.facetsExcludes, t2.disjunctiveFacetsRefinements, t2.numericRefinements, t2.tagRefinements, t2.hierarchicalFacets, t2.hierarchicalFacetsRefinements, t2.ruleContexts;
    var a2 = (0, r._)(t2, ["facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements", "ruleContexts"]);
    return e2.setQueryParameters(a2);
  }, s = function(e2, t2) {
    var r2 = [].concat(e2.ruleContexts).concat(t2.ruleContexts).filter(Boolean).filter(function(e3, t3, r3) {
      return r3.indexOf(e3) === t3;
    });
    return r2.length > 0 ? e2.setQueryParameters({ ruleContexts: r2 }) : e2;
  };
  e.s(["mergeSearchParameters", 0, function() {
    for (var e2 = arguments.length, r2 = Array(e2), a2 = 0; a2 < e2; a2++) r2[a2] = arguments[a2];
    return r2.reduce(function(e3, r3) {
      var a3, n2, i2, c, u, d, l, h;
      return o((h = s((a3 = e3.setQueryParameters({ hierarchicalFacetsRefinements: (0, t._)({}, e3.hierarchicalFacetsRefinements, r3.hierarchicalFacetsRefinements) }), n2 = a3.setQueryParameters({ hierarchicalFacets: r3.hierarchicalFacets.reduce(function(e4, t2) {
        var r4 = (function(e5, t3) {
          if (!Array.isArray(e5)) return -1;
          for (var r5 = 0; r5 < e5.length; r5++) if (t3(e5[r5])) return r5;
          return -1;
        })(e4, function(e5) {
          return e5.name === t2.name;
        });
        if (-1 === r4) return e4.concat(t2);
        var a4 = e4.slice();
        return a4.splice(r4, 1, t2), a4;
      }, a3.hierarchicalFacets) }), i2 = r3.tagRefinements.reduce(function(e4, t2) {
        return e4.addTagRefinement(t2);
      }, n2), c = i2.setQueryParameters({ numericRefinements: (0, t._)({}, i2.numericRefinements, r3.numericRefinements) }), u = c.setQueryParameters({ disjunctiveFacetsRefinements: (0, t._)({}, c.disjunctiveFacetsRefinements, r3.disjunctiveFacetsRefinements) }), d = u.setQueryParameters({ facetsExcludes: (0, t._)({}, u.facetsExcludes, r3.facetsExcludes) }), l = d.setQueryParameters({ facetsRefinements: (0, t._)({}, d.facetsRefinements, r3.facetsRefinements) }), r3.disjunctiveFacets.reduce(function(e4, t2) {
        return e4.addDisjunctiveFacet(t2);
      }, l)), r3), r3.facets.reduce(function(e4, t2) {
        return e4.addFacet(t2);
      }, h)), r3);
    });
  }], 313042);
}, 828177, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["noop", 0, function() {
    for (var e2 = arguments.length, t2 = Array(e2), r = 0; r < e2; r++) t2[r] = arguments[r];
  }]);
}, 97034, 793544, 629917, 487963, 428929, 102865, 786512, 293321, 395974, 783026, 425869, 238079, 608237, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function r() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
      var t2 = 16 * Math.random() | 0;
      return ("x" === e2 ? t2 : 3 & t2 | 8).toString(16);
    });
  }
  e.s(["createUUID", 0, r], 97034);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["default", 0, "4.109.0"], 793544);
  var n = e.i(536038);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["getInsightsAnonymousUserTokenInternal", 0, function() {
    if (("u" < typeof document ? "undefined" : (0, n._)(document)) === "object" && "string" == typeof document.cookie) for (var e2 = "".concat("_ALGOLIA", "="), t2 = document.cookie.split(";"), r2 = 0; r2 < t2.length; r2++) {
      for (var a2 = t2[r2]; " " === a2.charAt(0); ) a2 = a2.substring(1);
      if (0 === a2.indexOf(e2)) return a2.substring(e2.length, a2.length);
    }
  }], 629917);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function s(e2) {
    return btoa(encodeURIComponent(JSON.stringify(e2)));
  }
  e.s(["deserializePayload", 0, function(e2) {
    return JSON.parse(decodeURIComponent(atob(e2)));
  }, "serializePayload", 0, s], 487963);
  try {
    var c = "u" > typeof window ? window : e.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var u = "ais.usage.sessionId", d = null;
  e.s(["default", 0, function(e2, t2) {
    return (function(e3) {
      var t3, r2 = e3.method, a2 = e3.payload;
      if ((void 0 === a2 ? "undefined" : (0, n._)(a2)) !== "object") throw Error("The insights helper expects the payload to be an object.");
      try {
        t3 = s(a2);
      } catch (e4) {
        throw Error("Could not JSON serialize the payload object.");
      }
      return 'data-insights-method="'.concat(r2, '" data-insights-payload="').concat(t3, '"');
    })({ method: e2, payload: t2 });
  }, "getUsageSessionId", 0, function() {
    if (d) return d;
    try {
      var e2 = sessionStorage.getItem(u);
      if (e2) return d = e2;
      return d = r(), sessionStorage.setItem(u, d), d;
    } catch (e3) {
      return d = r();
    }
  }], 428929);
  try {
    var l = "u" > typeof window ? window : e.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var h = "u" > typeof performance ? function() {
    return performance.now();
  } : function() {
    return Date.now();
  };
  e.s(["now", 0, h], 102865);
  var p = e.i(164309);
  try {
    var f = "u" > typeof window ? window : e.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var y = ["ais.index", "ais.feedContainer"];
  try {
    var m = "u" > typeof window ? window : e.g;
    m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[new m.Error().stack] = Object.assign({}, m._sentryModuleMetadata[new m.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function g(e2) {
    return y.includes(e2.$$type);
  }
  e.s(["isIndexWidget", 0, g], 786512);
  var v = e.i(868275), T = e.i(784544);
  try {
    var P = "u" > typeof window ? window : e.g;
    P._sentryModuleMetadata = P._sentryModuleMetadata || {}, P._sentryModuleMetadata[new P.Error().stack] = Object.assign({}, P._sentryModuleMetadata[new P.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function w(e2, t2, r2) {
    var a2 = t2.getHelper();
    return { uiState: r2, helper: a2, parent: t2, instantSearchInstance: e2, state: a2.state, renderState: e2.renderState, templatesConfig: e2.templatesConfig, createURL: t2.createURL, scopedResults: [], searchMetadata: { isSearchStalled: "stalled" === e2.status }, status: e2.status, error: e2.error };
  }
  e.s(["createInitArgs", 0, w, "createRenderArgs", 0, function(e2, t2, r2) {
    var a2 = t2.getResultsForWidget(r2), n2 = t2.getHelper();
    return { helper: n2, parent: t2, instantSearchInstance: e2, results: a2, scopedResults: t2.getScopedResults(), state: a2 && "_state" in a2 ? a2._state : n2.state, renderState: e2.renderState, templatesConfig: e2.templatesConfig, createURL: t2.createURL, searchMetadata: { isSearchStalled: "stalled" === e2.status }, status: e2.status, error: e2.error };
  }, "storeRenderState", 0, function(e2) {
    var t2 = e2.renderState, r2 = e2.instantSearchInstance, a2 = e2.parent, n2 = a2 ? a2.getIndexId() : r2.mainIndex.getIndexId();
    r2.renderState = (0, T._)((0, p._)({}, r2.renderState), (0, v._)({}, n2, (0, p._)({}, r2.renderState[n2], t2)));
  }], 293321);
  try {
    var I = "u" > typeof window ? window : e.g;
    I._sentryModuleMetadata = I._sentryModuleMetadata || {}, I._sentryModuleMetadata[new I.Error().stack] = Object.assign({}, I._sentryModuleMetadata[new I.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function M(e2) {
    var t2 = [];
    return Object.keys(e2).forEach(function(r2) {
      var a2 = e2[r2];
      if (void 0 !== a2) {
        var i2 = (function(e3) {
          if (null == e3) return null;
          var t3 = void 0 === e3 ? "undefined" : (0, n._)(e3);
          if ("string" === t3 || "number" === t3 || "boolean" === t3) return { value: String(e3), type: t3 };
          if (Array.isArray(e3) || "object" === t3) {
            var r3 = Array.isArray(e3) ? "array" : "object";
            try {
              return { value: JSON.stringify(e3), type: r3 };
            } catch (e4) {
              return { type: r3 };
            }
          }
          return "function" === t3 ? { value: e3.name, type: "function" } : null;
        })(a2);
        i2 ? t2.push((0, p._)({ name: r2 }, i2)) : t2.push({ name: r2 });
      }
    }), t2;
  }
  e.s(["buildWidgetTree", 0, function e2(t2, r2) {
    var a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r2.mainIndex, n2 = w(r2, a2, r2._initialUiState);
    return t2.map(function(t3) {
      var a3 = {};
      if (t3.getWidgetRenderState) {
        var i2 = t3.getWidgetRenderState(n2);
        i2 && i2.widgetParams && (a3 = i2.widgetParams);
      }
      var o2 = M(a3), s2 = g(t3) ? e2(t3.getWidgets(), r2, t3) : [];
      return { type: t3.$$widgetType || t3.$$type || "unknown", params: o2, children: s2 };
    });
  }, "serializeWidgetParams", 0, M], 395974);
  try {
    var _ = "u" > typeof window ? window : e.g;
    _._sentryModuleMetadata = _._sentryModuleMetadata || {}, _._sentryModuleMetadata[new _.Error().stack] = Object.assign({}, _._sentryModuleMetadata[new _.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["omit", 0, function(e2, t2) {
    return null == e2 ? e2 : Object.keys(e2).reduce(function(r2, a2) {
      return t2.indexOf(a2) >= 0 || (r2[a2] = e2[a2]), r2;
    }, {});
  }], 783026);
  try {
    var S = "u" > typeof window ? window : e.g;
    S._sentryModuleMetadata = S._sentryModuleMetadata || {}, S._sentryModuleMetadata[new S.Error().stack] = Object.assign({}, S._sentryModuleMetadata[new S.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["safelyRunOnBrowser", 0, function(e2) {
    var t2 = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { fallback: function() {
    } }).fallback;
    return "u" < typeof window ? t2() : e2({ window });
  }], 425869);
  try {
    var b = "u" > typeof window ? window : e.g;
    b._sentryModuleMetadata = b._sentryModuleMetadata || {}, b._sentryModuleMetadata[new b.Error().stack] = Object.assign({}, b._sentryModuleMetadata[new b.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["getAppIdAndApiKey", 0, function(e2) {
    if (e2.appId && e2.apiKey) return [e2.appId, e2.apiKey];
    if (!e2.transporter) return [e2.applicationID, e2.apiKey];
    var t2 = e2.transporter, r2 = t2.headers || t2.baseHeaders, a2 = t2.queryParameters || t2.baseQueryParameters, n2 = "x-algolia-application-id", i2 = "x-algolia-api-key";
    return [r2[n2] || a2[n2], r2[i2] || a2[i2]];
  }], 238079);
  try {
    var E = "u" > typeof window ? window : e.g;
    E._sentryModuleMetadata = E._sentryModuleMetadata || {}, E._sentryModuleMetadata[new E.Error().stack] = Object.assign({}, E._sentryModuleMetadata[new E.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["find", 0, function(e2, t2) {
    for (var r2, a2 = 0; a2 < e2.length; a2++) if (t2(r2 = e2[a2], a2, e2)) return r2;
  }], 608237);
}, 615476, 245724, 498886, (e) => {
  "use strict";
  var t = e.i(766417), r = e.i(856757), a = e.i(234627), n = e.i(836619), i = e.i(541130), o = e.i(164309), s = e.i(648486), c = e.i(247984), u = e.i(56032), d = e.i(948741), l = e.i(861561), h = e.i(708645), p = e.i(973088), f = e.i(34928), y = e.i(540138);
  try {
    var m = "u" > typeof window ? window : e.g;
    m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[new m.Error().stack] = Object.assign({}, m._sentryModuleMetadata[new m.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var g = ["react (".concat(r.version, ")"), "react-instantsearch (".concat(d.default, ")"), "react-instantsearch-core (".concat(d.default, ")")], v = "react-instantsearch-server (".concat(d.default, ")");
  function T(e2, t2) {
    "function" == typeof e2.addAlgoliaAgent && t2.filter(Boolean).forEach(function(t3) {
      e2.addAlgoliaAgent(t3);
    });
  }
  try {
    var P = "u" > typeof window ? window : e.g;
    P._sentryModuleMetadata = P._sentryModuleMetadata || {}, P._sentryModuleMetadata[new P.Error().stack] = Object.assign({}, P._sentryModuleMetadata[new P.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function w(e2) {
    var t2 = e2.search;
    return (0, r.useEffect)(function() {
      t2._resetScheduleSearch && t2._resetScheduleSearch();
    }, [t2]), null;
  }
  e.s(["InstantSearch", 0, function(e2) {
    var d2 = e2.children, m2 = (function(e3) {
      var t2 = (0, h.useForceUpdate)(), a2 = (0, p.useInstantSearchServerContext)(), n2 = (0, f.useInstantSearchSSRContext)(), d3 = (0, y.useRSCContext)().waitForResultsRef, m3 = null == n2 ? void 0 : n2.initialResults, P2 = (0, r.useRef)(e3), w2 = a2 || m3 || d3, I2 = (0, r.useRef)(null);
      if ((null == n2 ? void 0 : n2.ssrSearchRef) && (I2 = n2.ssrSearchRef), null === I2.current) {
        var M2, _2, S2, b2 = new c.default(e3);
        b2._schedule = function(e4) {
          b2._schedule.queue.push(e4), clearTimeout(b2._schedule.timer), b2._schedule.timer = setTimeout(function() {
            b2._schedule.queue.forEach(function(e5) {
              e5();
            }), b2._schedule.queue = [];
          }, 0);
        }, b2._schedule.queue = [], w2 && (b2._initialResults = m3 || {}, b2._manuallyResetScheduleSearch = true), T(e3.searchClient, (0, s._)(g).concat([a2 && v, (S2 = "u" > typeof window && (null == (M2 = window.next) ? void 0 : M2.version) || (void 0 !== i.default ? null == (_2 = i.default.env) ? void 0 : _2.NEXT_RUNTIME : void 0)) ? "next.js (".concat(S2, ")") : null])), w2 && b2.start(), a2 && a2.notifyServer({ search: b2 }), e3.routing, I2.current = b2;
      }
      var E2, R2 = I2.current, x2 = P2.current;
      x2.indexName !== e3.indexName && (R2.helper.setIndex(e3.indexName || "").search(), P2.current = e3), x2.searchClient !== e3.searchClient && (T(e3.searchClient, (0, s._)(g).concat([a2 && v])), R2.mainHelper.setClient(e3.searchClient).search(), P2.current = e3), x2.onStateChange !== e3.onStateChange && (R2.onStateChange = e3.onStateChange, P2.current = e3), x2.searchFunction !== e3.searchFunction && (R2._searchFunction = e3.searchFunction, P2.current = e3), x2.stalledSearchDelay !== e3.stalledSearchDelay && (R2._stalledSearchDelay = null != (E2 = e3.stalledSearchDelay) ? E2 : 200, P2.current = e3), (0, l.dequal)(x2.future, e3.future) || (R2.future = (0, o._)({}, c.INSTANTSEARCH_FUTURE_DEFAULTS, e3.future), P2.current = e3);
      var k2 = (0, r.useRef)(null);
      return (0, u.useSyncExternalStore)((0, r.useCallback)(function() {
        var e4 = I2.current;
        return null === k2.current ? e4.started || (e4.start(), t2()) : (clearTimeout(k2.current), e4._preventWidgetCleanup = false), function() {
          null != n2 && n2.ssrSearchRef || (clearTimeout(e4._schedule.timer), k2.current = setTimeout(function() {
            e4.dispose();
          }), e4._preventWidgetCleanup = true);
        };
      }, [t2, n2]), function() {
        return I2.current;
      }, function() {
        return I2.current;
      });
    })((0, t._)(e2, ["children"]));
    return m2.started ? r.default.createElement(n.InstantSearchContext.Provider, { value: m2 }, r.default.createElement(a.IndexContext.Provider, { value: m2.mainIndex }, d2, r.default.createElement(w, { search: m2 }))) : null;
  }], 615476);
  var I = e.i(868275), M = e.i(784544), _ = e.i(177619), S = e.i(536038), b = e.i(487963);
  try {
    var E = "u" > typeof window ? window : e.g;
    E._sentryModuleMetadata = E._sentryModuleMetadata || {}, E._sentryModuleMetadata[new E.Error().stack] = Object.assign({}, E._sentryModuleMetadata[new E.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function R(e2) {
    var t2 = e2.helper, r2 = e2.widgetType;
    e2.methodName;
    var a2 = e2.args, n2 = e2.instantSearchInstance;
    if (1 === a2.length && "object" === (0, S._)(a2[0])) return [a2[0]];
    var i2 = (0, _._)(a2[0].split(":"), 2), s2 = i2[0], c2 = i2[1], u2 = a2[1], d2 = a2[2], l2 = a2[3] || {};
    if (!u2 || ("click" === s2 || "conversion" === s2) && !d2) return [];
    var h2 = Array.isArray(u2) ? u2 : [u2];
    if (0 === h2.length) return [];
    var p2 = h2[0].__queryID, f2 = (function(e3) {
      for (var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, r3 = [], a3 = 0; a3 < Math.ceil(e3.length / t3); a3++) r3.push(e3.slice(a3 * t3, (a3 + 1) * t3));
      return r3;
    })(h2), y2 = f2.map(function(e3) {
      return e3.map(function(e4) {
        return e4.objectID;
      });
    }), m2 = f2.map(function(e3) {
      return e3.map(function(e4) {
        return e4.__position;
      });
    });
    return "view" === s2 ? "idle" !== n2.status ? [] : f2.map(function(e3, a3) {
      var n3;
      return { insightsMethod: "viewedObjectIDs", widgetType: r2, eventType: s2, payload: (0, o._)({ eventName: d2 || "Hits Viewed", index: (null == (n3 = t2.lastResults) ? void 0 : n3.index) || t2.state.index, objectIDs: y2[a3] }, l2), hits: e3, eventModifier: c2 };
    }) : "click" === s2 ? f2.map(function(e3, a3) {
      var n3;
      return { insightsMethod: "clickedObjectIDsAfterSearch", widgetType: r2, eventType: s2, payload: (0, o._)({ eventName: d2 || "Hit Clicked", index: (null == (n3 = t2.lastResults) ? void 0 : n3.index) || t2.state.index, queryID: p2, objectIDs: y2[a3], positions: m2[a3] }, l2), hits: e3, eventModifier: c2 };
    }) : "conversion" === s2 ? f2.map(function(e3, a3) {
      var n3;
      return { insightsMethod: "convertedObjectIDsAfterSearch", widgetType: r2, eventType: s2, payload: (0, o._)({ eventName: d2 || "Hit Converted", index: (null == (n3 = t2.lastResults) ? void 0 : n3.index) || t2.state.index, queryID: p2, objectIDs: y2[a3] }, l2), hits: e3, eventModifier: c2 };
    }) : [];
  }
  var x = e.i(369670);
  try {
    var k = "u" > typeof window ? window : e.g;
    k._sentryModuleMetadata = k._sentryModuleMetadata || {}, k._sentryModuleMetadata[new k.Error().stack] = Object.assign({}, k._sentryModuleMetadata[new k.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var H = "u" > typeof window ? window : e.g;
    H._sentryModuleMetadata = H._sentryModuleMetadata || {}, H._sentryModuleMetadata[new H.Error().stack] = Object.assign({}, H._sentryModuleMetadata[new H.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function A(e2, t2) {
    if (void 0 === e2 || "function" != typeof e2) throw Error("The render function is not valid (received type ".concat(Object.prototype.toString.call(e2).slice(8, -1), ").\n\n").concat(t2));
  }
  e.s(["checkRendering", 0, A], 245724);
  var q = e.i(697388);
  try {
    var W = "u" > typeof window ? window : e.g;
    W._sentryModuleMetadata = W._sentryModuleMetadata || {}, W._sentryModuleMetadata[new W.Error().stack] = Object.assign({}, W._sentryModuleMetadata[new W.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var j = "u" > typeof window ? window : e.g;
    j._sentryModuleMetadata = j._sentryModuleMetadata || {}, j._sentryModuleMetadata[new j.Error().stack] = Object.assign({}, j._sentryModuleMetadata[new j.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var O = e.i(828177);
  try {
    var D = "u" > typeof window ? window : e.g;
    D._sentryModuleMetadata = D._sentryModuleMetadata || {}, D._sentryModuleMetadata[new D.Error().stack] = Object.assign({}, D._sentryModuleMetadata[new D.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var C = (0, x.createDocumentationMessageGenerator)({ name: "hits", connector: true });
  e.s(["default", 0, function(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.noop;
    return A(e2, C()), function(r2) {
      var a2, n2, i2 = r2 || {}, s2 = i2.escapeHTML, c2 = void 0 === s2 || s2, u2 = i2.transformItems, d2 = void 0 === u2 ? function(e3) {
        return e3;
      } : u2;
      return { $$type: "ais.hits", init: function(t3) {
        e2((0, M._)((0, o._)({}, this.getWidgetRenderState(t3)), { instantSearchInstance: t3.instantSearchInstance }), true);
      }, render: function(t3) {
        var r3 = this.getWidgetRenderState(t3);
        e2((0, M._)((0, o._)({}, r3), { instantSearchInstance: t3.instantSearchInstance }), false), r3.sendEvent("view:internal", r3.items);
      }, getRenderState: function(e3, t3) {
        return (0, M._)((0, o._)({}, e3), { hits: this.getWidgetRenderState(t3) });
      }, getWidgetRenderState: function(e3) {
        var t3, i3, s3, u3, l2, h2, p2, f2, y2, m2, g2, v2, T2, P2, w2, I2, _2, S2, E2 = e3.results, x2 = e3.helper, k2 = e3.instantSearchInstance;
        if (a2 || (i3 = (t3 = { instantSearchInstance: k2, helper: x2, widgetType: this.$$type }).instantSearchInstance, s3 = t3.helper, u3 = t3.widgetType, l2 = {}, h2 = void 0, a2 = function() {
          for (var e4 = arguments.length, t4 = Array(e4), r3 = 0; r3 < e4; r3++) t4[r3] = arguments[r3];
          R({ widgetType: u3, helper: s3, methodName: "sendEvent", args: t4, instantSearchInstance: i3 }).forEach(function(e5) {
            "click" === e5.eventType && "internal" === e5.eventModifier && l2[e5.eventType] || (l2[e5.eventType] = true, i3.sendEventToInsights(e5));
          }), clearTimeout(h2), h2 = setTimeout(function() {
            l2 = {};
          }, 0);
        }), n2 || (f2 = (p2 = { helper: x2, widgetType: this.$$type, instantSearchInstance: k2 }).helper, y2 = p2.widgetType, m2 = p2.instantSearchInstance, n2 = function() {
          for (var e4 = arguments.length, t4 = Array(e4), r3 = 0; r3 < e4; r3++) t4[r3] = arguments[r3];
          var a3 = R({ widgetType: y2, helper: f2, methodName: "bindEvent", args: t4, instantSearchInstance: m2 });
          return a3.length ? "data-insights-event=".concat((0, b.serializePayload)(a3)) : "";
        }), !E2) return { hits: [], items: [], results: void 0, banner: void 0, sendEvent: a2, bindEvent: n2, widgetParams: r2 };
        c2 && E2.hits.length > 0 && (E2.hits = (0, q.escapeHits)(E2.hits));
        var H2 = d2((g2 = E2.hits, v2 = E2.page, T2 = E2.hitsPerPage, P2 = g2.map(function(e4, t4) {
          return (0, M._)((0, o._)({}, e4), { __position: T2 * v2 + t4 + 1 });
        }), (w2 = E2.queryID) ? P2.map(function(e4) {
          return (0, M._)((0, o._)({}, e4), { __queryID: w2 });
        }) : P2), { results: E2 }), A2 = null == (S2 = E2.renderingContent) || null == (_2 = S2.widgets) || null == (I2 = _2.banners) ? void 0 : I2[0];
        return { hits: H2, items: H2, results: E2, banner: A2, sendEvent: a2, bindEvent: n2, widgetParams: r2 };
      }, dispose: function(e3) {
        var r3 = e3.state;
        return (t2(), c2) ? r3.setQueryParameters(Object.keys(q.TAG_PLACEHOLDER).reduce(function(e4, t3) {
          return (0, M._)((0, o._)({}, e4), (0, I._)({}, t3, void 0));
        }, {})) : r3;
      }, getWidgetSearchParameters: function(e3, t3) {
        return c2 ? e3.setQueryParameters(q.TAG_PLACEHOLDER) : e3;
      } };
    };
  }], 498886);
}, 763252, (e) => {
  "use strict";
  var t = e.i(164309), r = e.i(766417), a = e.i(177619), n = e.i(278308), i = e.i(856757), o = e.i(861561), s = e.i(158211), c = e.i(303757), u = e.i(185316), d = e.i(973088), l = e.i(34928), h = e.i(211876), p = e.i(361670), f = e.i(446115), y = e.i(37824), m = e.i(540138);
  try {
    var g = "u" > typeof window ? window : e.g;
    g._sentryModuleMetadata = g._sentryModuleMetadata || {}, g._sentryModuleMetadata[new g.Error().stack] = Object.assign({}, g._sentryModuleMetadata[new g.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var v = "u" > typeof window ? window : e.g;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useConnector", 0, function(e2) {
    var g2, v2, T, P, w, I, M, _, S, b, E, R, x, k, H, A, q, W = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, j = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, O = (0, n._)([W, j]), D = O[0], C = O.slice(1), N = (0, a._)(C, 1)[0], U = void 0 === N ? {} : N, F = U.skipSuspense, B = (0, r._)(U, ["skipSuspense"]), K = (0, d.useInstantSearchServerContext)(), L = (0, l.useInstantSearchSSRContext)(), G = (0, u.useInstantSearchContext)(), Q = (0, c.useIndexContext)(), $ = (0, h.useStableValue)(void 0 === D ? {} : D), V = (0, h.useStableValue)(B), z = (0, i.useRef)(true), J = (0, i.useRef)(null), X = (0, i.useRef)(G.status), Y = (0, i.useMemo)(function() {
      var a2 = e2(function(e3, t2) {
        if (t2) {
          z.current = true;
          return;
        }
        if (z.current) {
          var a3 = e3.instantSearchInstance;
          e3.widgetParams;
          var n2 = (0, r._)(e3, ["instantSearchInstance", "widgetParams"]);
          (0, o.dequal)(n2, J.current, function(e4, t3) {
            return (null == e4 ? void 0 : e4.constructor) === Function && (null == t3 ? void 0 : t3.constructor) === Function;
          }) && a3.status === X.current || (et(n2), J.current = n2, X.current = a3.status);
        }
      }, function() {
        z.current = false;
      });
      return (0, t._)({}, a2($), V);
    }, [e2, $, V]), Z = (0, a._)((0, i.useState)(function() {
      if (Y.getWidgetRenderState) {
        var e3, t2 = Q.getHelper(), a2 = Q.getWidgetUiState({})[Q.getIndexId()];
        t2.state = (null == (e3 = Y.getWidgetSearchParameters) ? void 0 : e3.call(Y, t2.state, { uiState: a2 })) || t2.state;
        var n2 = (0, s.getIndexSearchResults)(Q), i2 = n2.results, o2 = n2.scopedResults, c2 = n2.recommendResults, u2 = Y.getWidgetRenderState({ helper: t2, parent: Q, instantSearchInstance: G, results: "recommend" === Y.dependsOn && c2 && L ? c2[L.recommendIdx.current++] : i2, scopedResults: o2, state: t2.state, renderState: G.renderState, templatesConfig: G.templatesConfig, createURL: Q.createURL, searchMetadata: { isSearchStalled: "stalled" === G.status }, status: G.status, error: G.error });
        return u2.widgetParams, (0, r._)(u2, ["widgetParams"]);
      }
      return {};
    }), 2), ee = Z[0], et = Z[1];
    return w = (g2 = { widget: Y, parentIndex: Q, props: [$, V], shouldSsr: !!K, skipSuspense: void 0 !== F && F }).widget, I = g2.parentIndex, M = g2.props, _ = g2.shouldSsr, S = g2.skipSuspense, E = (b = (0, m.useRSCContext)()).waitForResultsRef, R = b.countRef, b.ignoreMultipleHooksWarning, x = (0, i.useRef)(M), (0, i.useEffect)(function() {
      x.current = M;
    }, [M]), k = (0, i.useRef)(w), (0, i.useEffect)(function() {
      k.current = w;
    }, [w]), H = (0, i.useRef)(null), A = _ && !I.getWidgets().includes(w), q = (0, u.useInstantSearchContext)(), (0, y.useIsomorphicLayoutEffect)(function() {
      var e3 = k.current;
      return H.current ? (clearTimeout(H.current), (0, o.dequal)(M, x.current) || (I.removeWidgets([e3]), I.addWidgets([w]))) : _ || I.addWidgets([w]), function() {
        H.current = setTimeout(function() {
          q._schedule(function() {
            q._preventWidgetCleanup || I.removeWidgets([e3]);
          });
        });
      };
    }, [I, w, _, q, M]), (A || (null == E || null == (v2 = E.current) ? void 0 : v2.status) === "pending") && I.addWidgets([w]), (null == E ? void 0 : E.current) && !S && ((0, f.use)(E.current), !(0, p.isTwoPassWidget)(w) && (null == (P = q.helper) ? void 0 : P.lastResults) && (0, f.use)(E.current)), (null == E || null == (T = E.current) ? void 0 : T.status) === "fulfilled" && (R.current += 1), ee;
  }], 763252);
}, 234627, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var a = (0, t.createContext)(null);
  e.s(["IndexContext", 0, a]);
}, 836619, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var a = (0, t.createContext)(null);
  e.s(["InstantSearchContext", 0, a]);
}, 861561, (e) => {
  "use strict";
  var t = e.i(536038);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var a = Object.prototype.hasOwnProperty;
  e.s(["dequal", 0, function e2(r2, n, i) {
    var o, s;
    if ((null == i ? void 0 : i(r2, n)) || r2 === n) return true;
    if (r2 && n && (o = r2.constructor) === n.constructor) {
      if (o === Date) return r2.getTime() === n.getTime();
      if (o === RegExp) return r2.toString() === n.toString();
      if (o === Array) {
        if ((s = r2.length) === n.length) for (; s-- && e2(r2[s], n[s], i); ) ;
        return -1 === s;
      }
      if (!o || (void 0 === r2 ? "undefined" : (0, t._)(r2)) === "object") {
        for (o in s = 0, r2) if (a.call(r2, o) && ++s && !a.call(n, o) || !(o in n) || !e2(r2[o], n[o], i)) return false;
        return Object.keys(n).length === s;
      }
    }
    return r2 != r2 && n != n;
  }]);
}, 158211, (e) => {
  "use strict";
  var t = e.i(164309), r = e.i(784544), a = e.i(133070);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function i(e2) {
    var t2, r2, n2;
    return new a.default.SearchResults(e2, [{ query: null != (t2 = e2.query) ? t2 : "", page: null != (r2 = e2.page) ? r2 : 0, hitsPerPage: null != (n2 = e2.hitsPerPage) ? n2 : 20, hits: [], nbHits: 0, nbPages: 0, params: "", exhaustiveNbHits: true, exhaustiveFacetsCount: true, processingTimeMS: 0, index: e2.index }], { __isArtificial: true });
  }
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["getIndexSearchResults", 0, function(e2) {
    var a2 = e2.getHelper(), n2 = e2.getResults() || i(a2.state), o2 = e2.getScopedResults().map(function(a3) {
      var o3 = a3.indexId === e2.getIndexId() ? n2 : i(a3.helper.state);
      return (0, r._)((0, t._)({}, a3), { results: a3.results || o3 });
    });
    return { results: n2, scopedResults: o2, recommendResults: a2.lastRecommendResults };
  }], 158211);
}, 708645, (e) => {
  "use strict";
  var t = e.i(177619), r = e.i(856757);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useForceUpdate", 0, function() {
    return (0, t._)((0, r.useReducer)(function(e2) {
      return e2 + 1;
    }, 0), 2)[1];
  }]);
}, 303757, 131456, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(234627);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function n(e2, t2) {
    if (!e2) throw Error("Invariant failed");
  }
  e.s(["invariant", 0, n], 131456);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useIndexContext", 0, function() {
    var e2 = (0, t.useContext)(r.IndexContext);
    return n(null !== e2), e2;
  }], 303757);
}, 185316, (e) => {
  "use strict";
  var t = e.i(856757), r = e.i(836619), a = e.i(131456);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useInstantSearchContext", 0, function() {
    var e2 = (0, t.useContext)(r.InstantSearchContext);
    return (0, a.invariant)(null !== e2), e2;
  }]);
}, 973088, 34928, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var a = (0, t.createContext)(null);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useInstantSearchServerContext", 0, function() {
    return (0, t.useContext)(a);
  }], 973088);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var o = (0, t.createContext)(null);
  try {
    var s = "u" > typeof window ? window : e.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useInstantSearchSSRContext", 0, function() {
    return (0, t.useContext)(o);
  }], 34928);
}, 540138, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var a = (0, t.createContext)({ countRef: { current: 0 }, waitForResultsRef: null, resolveWaitForResultsRef: { current: null }, ignoreMultipleHooksWarning: false });
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useRSCContext", 0, function() {
    return (0, t.useContext)(a);
  }], 540138);
}, 211876, 361670, 446115, 37824, (e) => {
  "use strict";
  var t = e.i(177619), r = e.i(856757), a = e.i(861561);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["useStableValue", 0, function(e2) {
    var n2 = (0, t._)((0, r.useState)(function() {
      return e2;
    }), 2), i2 = n2[0], o2 = n2[1];
    return (0, a.dequal)(i2, e2) || o2(e2), i2;
  }], 211876);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["isTwoPassWidget", 0, function(e2) {
    return "ais.dynamicWidgets" === e2.$$type || "ais.feeds" === e2.$$type;
  }], 361670);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var s = r.use;
  e.s(["use", 0, s], 446115);
  try {
    var c = "u" > typeof window ? window : e.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var u = "u" > typeof window ? r.useLayoutEffect : r.useEffect;
  e.s(["useIsomorphicLayoutEffect", 0, u], 37824);
}, 304299, 697388, 158043, 847502, (e) => {
  "use strict";
  var t = e.i(164309), r = e.i(784544), a = e.i(766417), n = e.i(27028), i = e.i(868275), o = e.i(667420), s = e.i(851729), c = e.i(134098), u = e.i(558006);
  try {
    var d = "u" > typeof window ? window : e.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var l = { highlightPreTag: "__ais-highlight__", highlightPostTag: "__/ais-highlight__" }, h = { highlightPreTag: "<mark>", highlightPostTag: "</mark>" };
  function p(e2) {
    var a2;
    return (0, u.isPlainObject)(e2) && "string" != typeof e2.value ? Object.keys(e2).reduce(function(a3, n2) {
      return (0, r._)((0, t._)({}, a3), (0, i._)({}, n2, p(e2[n2])));
    }, {}) : Array.isArray(e2) ? e2.map(p) : (0, r._)((0, t._)({}, e2), { value: (a2 = e2.value, (0, c.escape)(a2).replace(RegExp(l.highlightPreTag, "g"), h.highlightPreTag).replace(RegExp(l.highlightPostTag, "g"), h.highlightPostTag)) });
  }
  e.s(["TAG_PLACEHOLDER", 0, l, "TAG_REPLACEMENT", 0, h, "escapeHits", 0, function(e2) {
    return void 0 === e2.__escaped && ((e2 = e2.map(function(e3) {
      (0, s._)(e3);
      var t2 = (0, o._)({}, e3);
      return t2._highlightResult && (t2._highlightResult = p(t2._highlightResult)), t2._snippetResult && (t2._snippetResult = p(t2._snippetResult)), t2;
    })).__escaped = true), e2;
  }], 697388);
  try {
    var f = "u" > typeof window ? window : e.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function y(e2) {
    var t2 = h.highlightPostTag, r2 = h.highlightPreTag, a2 = e2.split(r2), n2 = a2.shift(), i2 = n2 ? [{ value: n2, isHighlighted: false }] : [];
    return a2.forEach(function(e3) {
      var r3 = e3.split(t2);
      i2.push({ value: r3[0], isHighlighted: true }), "" !== r3[1] && i2.push({ value: r3[1], isHighlighted: false });
    }), i2;
  }
  e.s(["getHighlightedParts", 0, y], 158043);
  var m = e.i(856757);
  try {
    var g = "u" > typeof window ? window : e.g;
    g._sentryModuleMetadata = g._sentryModuleMetadata || {}, g._sentryModuleMetadata[new g.Error().stack] = Object.assign({}, g._sentryModuleMetadata[new g.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function v() {
    for (var e2 = arguments.length, t2 = Array(e2), r2 = 0; r2 < e2; r2++) t2[r2] = arguments[r2];
    return t2.reduce(function(e3, t3) {
      return Array.isArray(t3) ? e3.concat(t3) : e3.concat([t3]);
    }, []).filter(Boolean).join(" ");
  }
  try {
    var T = "u" > typeof window ? window : e.g;
    T._sentryModuleMetadata = T._sentryModuleMetadata || {}, T._sentryModuleMetadata[new T.Error().stack] = Object.assign({}, T._sentryModuleMetadata[new T.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var P = "u" > typeof window ? window : e.g;
    P._sentryModuleMetadata = P._sentryModuleMetadata || {}, P._sentryModuleMetadata[new P.Error().stack] = Object.assign({}, P._sentryModuleMetadata[new P.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var w = (function(e2) {
    var n2 = e2.createElement, i2 = e2.Fragment, o2 = function(e3) {
      var t2 = e3.classNames, r2 = e3.children, a2 = e3.highlightedTagName, i3 = e3.isHighlighted, o3 = e3.nonHighlightedTagName;
      return n2(i3 ? a2 : o3, { className: i3 ? t2.highlighted : t2.nonHighlighted }, r2);
    };
    return function(e3) {
      var s2 = e3.parts, c2 = e3.highlightedTagName, u2 = void 0 === c2 ? "mark" : c2, d2 = e3.nonHighlightedTagName, l2 = void 0 === d2 ? "span" : d2, h2 = e3.separator, p2 = void 0 === h2 ? ", " : h2, f2 = e3.className, y2 = e3.classNames, m2 = void 0 === y2 ? {} : y2, g2 = (0, a._)(e3, ["parts", "highlightedTagName", "nonHighlightedTagName", "separator", "className", "classNames"]);
      return n2("span", (0, r._)((0, t._)({}, g2), { className: v(m2.root, f2) }), s2.map(function(e4, t2) {
        var r2 = t2 === s2.length - 1;
        return n2(i2, { key: t2 }, e4.map(function(e5, t3) {
          return n2(o2, { key: t3, classNames: m2, highlightedTagName: u2, nonHighlightedTagName: l2, isHighlighted: e5.isHighlighted }, e5.value);
        }), !r2 && n2("span", { className: m2.separator }, p2));
      }));
    };
  })({ createElement: m.createElement, Fragment: m.Fragment });
  try {
    var I = "u" > typeof window ? window : e.g;
    I._sentryModuleMetadata = I._sentryModuleMetadata || {}, I._sentryModuleMetadata[new I.Error().stack] = Object.assign({}, I._sentryModuleMetadata[new I.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function M(e2) {
    var r2 = e2.classNames, n2 = void 0 === r2 ? {} : r2, i2 = (0, a._)(e2, ["classNames"]);
    return m.default.createElement(w, (0, t._)({ classNames: { root: v("ais-Highlight", n2.root), highlighted: v("ais-Highlight-highlighted", n2.highlighted), nonHighlighted: v("ais-Highlight-nonHighlighted", n2.nonHighlighted), separator: v("ais-Highlight-separator", n2.separator) } }, i2));
  }
  try {
    var _ = "u" > typeof window ? window : e.g;
    _._sentryModuleMetadata = _._sentryModuleMetadata || {}, _._sentryModuleMetadata[new _.Error().stack] = Object.assign({}, _._sentryModuleMetadata[new _.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["Highlight", 0, function(e2) {
    var i2 = e2.hit, o2 = e2.attribute, s2 = e2.highlightedTagName, u2 = e2.nonHighlightedTagName, d2 = e2.separator, l2 = (0, a._)(e2, ["hit", "attribute", "highlightedTagName", "nonHighlightedTagName", "separator"]), h2 = (0, n.getPropertyByPath)(i2._highlightResult, o2) || [], p2 = (Array.isArray(h2) ? h2 : [h2]).map(function(e3) {
      return y((0, c.unescape)(e3.value || ""));
    });
    return m.default.createElement(M, (0, r._)((0, t._)({}, l2), { parts: p2, highlightedTagName: s2, nonHighlightedTagName: u2, separator: d2 }));
  }], 304299);
  try {
    var S = "u" > typeof window ? window : e.g;
    S._sentryModuleMetadata = S._sentryModuleMetadata || {}, S._sentryModuleMetadata[new S.Error().stack] = Object.assign({}, S._sentryModuleMetadata[new S.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function b(e2) {
    var r2 = e2.classNames, n2 = void 0 === r2 ? {} : r2, i2 = (0, a._)(e2, ["classNames"]);
    return m.default.createElement(w, (0, t._)({ classNames: { root: v("ais-Snippet", n2.root), highlighted: v("ais-Snippet-highlighted", n2.highlighted), nonHighlighted: v("ais-Snippet-nonHighlighted", n2.nonHighlighted), separator: v("ais-Snippet-separator", n2.separator) } }, i2));
  }
  try {
    var E = "u" > typeof window ? window : e.g;
    E._sentryModuleMetadata = E._sentryModuleMetadata || {}, E._sentryModuleMetadata[new E.Error().stack] = Object.assign({}, E._sentryModuleMetadata[new E.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["Snippet", 0, function(e2) {
    var i2 = e2.hit, o2 = e2.attribute, s2 = e2.highlightedTagName, u2 = e2.nonHighlightedTagName, d2 = e2.separator, l2 = (0, a._)(e2, ["hit", "attribute", "highlightedTagName", "nonHighlightedTagName", "separator"]), h2 = (0, n.getPropertyByPath)(i2._snippetResult, o2) || [], p2 = (Array.isArray(h2) ? h2 : [h2]).map(function(e3) {
      return y((0, c.unescape)(e3.value || ""));
    });
    return m.default.createElement(b, (0, r._)((0, t._)({}, l2), { parts: p2, highlightedTagName: s2, nonHighlightedTagName: u2, separator: d2 }));
  }], 847502);
}, 66583, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["createSearchContext", 0, function(e2) {
    let r2 = (0, t.createContext)(null);
    return { Context: r2, useSearch: function() {
      let a = (0, t.use)(r2);
      if (!a) throw Error(`useSearch (${e2}) must be used within its provider`);
      return a;
    } };
  }]);
}, 217032, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(624721), a = e.i(78915), n = e.i(856757), i = e.i(79587), o = e.i(551360);
  try {
    var s = window;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let c = "(min-width: 992px)";
  function u() {
    return window.matchMedia(c).matches;
  }
  function d(e2) {
    let t2 = window.matchMedia(c);
    return t2.addEventListener("change", e2), () => t2.removeEventListener("change", e2);
  }
  e.s(["SearchDialogBackdrop", 0, function({ isOpen: e2, onClose: r2 }) {
    return (0, t.jsx)("div", { "aria-hidden": "true", className: (0, o.cn)("fixed inset-0 z-(--dialog-overlay-z-index) bg-black-700/40 backdrop-blur-xs", "transition-opacity duration-200 ease-(--ease-in-out-quad)", { "pointer-events-auto opacity-100": e2 }, { "pointer-events-none opacity-0": !e2 }), onClick: r2 });
  }, "SearchDialogCard", 0, function({ className: e2, children: r2, ...a2 }) {
    return (0, t.jsx)("div", { className: e2, ...a2, children: (0, t.jsx)("div", { className: (0, o.cn)("rounded-2xl bg-white-100/60 p-0.75 backdrop-blur-xs"), children: (0, t.jsx)("div", { className: (0, o.cn)("overflow-hidden rounded-[13px] border border-subtle-stroke bg-primary-background shadow-attio-5"), children: r2 }) }) });
  }, "SearchDialogDesktop", 0, function({ isOpen: e2, onClose: a2, ariaLabel: n2, className: i2, children: s2 }) {
    return (0, t.jsx)(r.Dialog.Root, { open: e2, onOpenChange: () => a2(), children: (0, t.jsx)(r.Dialog.Portal, { children: (0, t.jsx)(r.Dialog.Viewport, { className: (0, o.cn)("fixed inset-0 z-(--dialog-content-z-index) flex items-start justify-center pt-[20dvh]"), children: (0, t.jsx)(r.Dialog.Popup, { "aria-label": n2, finalFocus: false, className: (0, o.cn)("animate-dialog-scale-in", "data-[closed]:animate-dialog-scale-out", i2), children: s2 }) }) }) });
  }, "SearchDialogDrawer", 0, function({ isOpen: e2, onClose: r2, ariaLabel: n2, children: s2 }) {
    return (0, t.jsx)(i.Drawer.Root, { open: e2, onOpenChange: (e3) => !e3 && r2(), children: (0, t.jsxs)(i.Drawer.Portal, { children: [(0, t.jsx)(i.Drawer.Overlay, { className: (0, o.cn)("hidden") }), (0, t.jsxs)(i.Drawer.Content, { className: (0, o.cn)("fixed right-0 bottom-0 left-0 z-(--dialog-content-z-index) mt-24 flex h-[96%] flex-col rounded-t-xl bg-white-100 backdrop-blur-xs"), children: [(0, t.jsx)(a.VisuallyHidden.Root, { asChild: true, children: (0, t.jsx)(i.Drawer.Title, { children: n2 }) }), (0, t.jsx)(i.Drawer.Description, { className: "sr-only", children: n2 }), (0, t.jsxs)("div", { className: (0, o.cn)("flex h-full flex-col rounded-t-2xl bg-primary-background"), children: [(0, t.jsx)("div", { className: (0, o.cn)("mx-auto mt-1.5 h-1.5 w-8 shrink-0 rounded-full bg-white-500") }), s2] })] })] }) });
  }, "useIsDesktop", 0, function() {
    return (0, n.useSyncExternalStore)(d, u, () => true);
  }]);
}, 693247, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(282718), a = e.i(856757), n = e.i(895587);
  try {
    var i = window;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function o({ className: e2 }) {
    return (0, t.jsx)("svg", { className: e2, xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", fill: "none", children: (0, t.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M2.5 7.16667h6c.55229 0 1-.44772 1-1V2.5m-7 4.66667L4.83333 9.5M2.5 7.16667l2.33333-2.33334" }) });
  }
  var s = e.i(551360);
  try {
    var c = window;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function u({ onClick: e2, children: r2 }) {
    return (0, t.jsx)("button", { className: "flex size-5 items-center justify-center rounded-md border border-weak-stroke text-accent-foreground outline-hidden", onClick: e2, children: r2 });
  }
  function d({ className: e2, onClose: r2, containerRef: i2 }) {
    let c2 = (0, a.useCallback)(() => {
      let e3 = i2.current?.querySelector("[cmdk-input]");
      e3?.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, key: "ArrowUp" }));
    }, [i2]), l2 = (0, a.useCallback)(() => {
      let e3 = i2.current?.querySelector("[cmdk-input]");
      e3?.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, key: "ArrowDown" }));
    }, [i2]), h2 = (0, a.useCallback)(() => {
      let e3 = i2.current?.querySelector("[cmdk-item][data-selected=true]");
      e3?.click();
    }, [i2]);
    return (0, t.jsxs)("div", { className: (0, s.cn)("flex justify-between gap-x-4 rounded-b-[13px] border-weak-stroke border-t bg-secondary-background px-4 pt-[11px] pb-[10px]", e2), children: [(0, t.jsxs)("div", { className: "flex gap-x-4", children: [(0, t.jsxs)("div", { className: "flex items-center gap-x-1.5 text-accent-foreground", children: [(0, t.jsxs)("div", { className: "flex gap-x-1", children: [(0, t.jsx)(u, { onClick: c2, children: (0, t.jsx)(n.ArrowRight12, { className: "-rotate-90" }) }), (0, t.jsx)(u, { onClick: l2, children: (0, t.jsx)(n.ArrowRight12, { className: "rotate-90" }) })] }), (0, t.jsx)("span", { className: "text-xs", children: "Navigate" })] }), (0, t.jsxs)("div", { className: "flex items-center gap-x-1.5 text-accent-foreground", children: [(0, t.jsx)("div", { className: "flex gap-x-1", children: (0, t.jsx)(u, { onClick: h2, children: (0, t.jsx)(o, {}) }) }), (0, t.jsx)("span", { className: "text-xs", children: "Select" })] })] }), (0, t.jsxs)("div", { className: "flex items-center gap-x-1.5 text-accent-foreground", children: [(0, t.jsx)("span", { className: "text-xs", children: "Close" }), (0, t.jsx)("div", { className: "flex gap-x-1", children: (0, t.jsx)(u, { onClick: r2, children: (0, t.jsx)("span", { className: "text-[8px] leading-3", children: "esc" }) }) })] })] });
  }
  var l = e.i(217032);
  try {
    var h = window;
    h._sentryModuleMetadata = h._sentryModuleMetadata || {}, h._sentryModuleMetadata[new h.Error().stack] = Object.assign({}, h._sentryModuleMetadata[new h.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function p({ isSearching: e2 }) {
    return (0, t.jsx)("div", { className: "relative h-px w-full shrink-0 overflow-hidden bg-weak-stroke", children: (0, t.jsx)("div", { className: (0, s.cn)("absolute inset-y-0 left-0 w-2/3 animate-search-shine bg-linear-to-r from-transparent via-35% via-65% via-white-900 via-white-900 to-transparent", "transition-opacity duration-150", { "opacity-100": e2 }, { "opacity-0": !e2 }) }) });
  }
  function f({ isOpen: e2, onClose: n2, ariaLabel: i2, isSearching: o2, input: c2, results: u2 }) {
    let h2 = (0, l.useIsDesktop)(), y2 = (0, a.useRef)(null), m2 = e2 && h2, g2 = e2 && !h2;
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(l.SearchDialogBackdrop, { isOpen: e2, onClose: n2 }), (0, t.jsx)(l.SearchDialogDrawer, { isOpen: g2, onClose: n2, ariaLabel: i2, children: (0, t.jsxs)(r.Command, { shouldFilter: false, loop: false, label: i2, children: [(0, t.jsx)("div", { className: (0, s.cn)("pt-2"), children: c2 }), (0, t.jsx)(p, { isSearching: o2 }), (0, t.jsx)("div", { className: (0, s.cn)("flex flex-1 flex-col overflow-hidden"), children: u2 })] }) }), (0, t.jsx)(l.SearchDialogDesktop, { isOpen: m2, onClose: n2, ariaLabel: i2, children: (0, t.jsx)(l.SearchDialogCard, { children: (0, t.jsx)(r.Command, { ref: y2, shouldFilter: false, loop: false, label: i2, children: (0, t.jsxs)("div", { className: "flex h-[62dvh] max-h-144 min-h-64 w-screen max-w-148 flex-col", children: [c2, (0, t.jsx)(p, { isSearching: o2 }), u2, (0, t.jsx)(d, { onClose: n2, containerRef: y2 })] }) }) }) })] });
  }
  try {
    var y = window;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function m({ query: e2, onQueryChange: n2, placeholder: i2 = "Search...", className: o2 }) {
    let c2 = (0, a.useRef)(null);
    return (0, t.jsxs)("div", { className: (0, s.cn)("flex items-center rounded-t-xl bg-primary-background py-3 pt-3.5 pr-2.5 pl-4", o2), children: [(0, t.jsx)("div", { className: (0, s.cn)("flex flex-1 items-center self-stretch text-accent-foreground text-base sm:text-sm"), children: (0, t.jsx)(r.Command.Input, { ref: c2, className: (0, s.cn)("focus-disable flex-1 self-stretch border-none bg-transparent p-0 text-base text-primary-foreground outline-hidden sm:text-sm", "placeholder:text-accent-foreground focus:ring-0"), placeholder: i2, value: e2, onValueChange: n2 }) }), (0, t.jsx)("button", { type: "button", tabIndex: e2.length > 0 ? 0 : -1, "aria-label": "Clear search", "aria-hidden": 0 === e2.length, disabled: 0 === e2.length, className: (0, s.cn)("cursor-pointer rounded-xs px-2 py-0.5 text-accent-foreground text-xs opacity-0", "transition-[box-shadow,opacity] duration-150 ease-in-out", { "opacity-100": e2.length > 0 }), onClick: () => {
      n2(""), c2.current?.focus();
    }, children: "Clear" })] });
  }
  var g = e.i(12594);
  try {
    var v = window;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["SearchDialog", 0, function({ useSearch: e2, ariaLabel: r2, placeholder: a2, renderResults: n2 }) {
    let { query: i2, settledQuery: o2, results: s2, onQueryChange: c2, isSearching: u2 } = e2(), { isOpen: d2, closeSearchModal: l2 } = (0, g.useSearchModal)();
    return (0, t.jsx)(f, { isOpen: d2, onClose: l2, ariaLabel: r2, isSearching: u2, input: (0, t.jsx)(m, { query: i2, onQueryChange: c2, placeholder: a2 }), results: n2({ hits: s2, isSearching: u2, query: i2, settledQuery: o2 }) });
  }], 693247);
}, 482241, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757), a = e.i(615476), n = e.i(498886), i = e.i(763252);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var s = e.i(648486), c = e.i(185316), u = e.i(37824), d = e.i(177619), l = e.i(786512), h = e.i(158211), p = e.i(303757);
  try {
    var f = "u" > typeof window ? window : e.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var y = "u" > typeof window ? window : e.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var m = "u" > typeof window ? window : e.g;
    m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[new m.Error().stack] = Object.assign({}, m._sentryModuleMetadata[new m.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var g = e.i(164309), v = e.i(784544), T = e.i(369670), P = e.i(245724), w = e.i(828177);
  try {
    var I = "u" > typeof window ? window : e.g;
    I._sentryModuleMetadata = I._sentryModuleMetadata || {}, I._sentryModuleMetadata[new I.Error().stack] = Object.assign({}, I._sentryModuleMetadata[new I.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var M = (0, T.createDocumentationMessageGenerator)({ name: "search-box", connector: true }), _ = function(e10, t2) {
    return t2(e10);
  }, S = function(e10) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w.noop;
    return (0, P.checkRendering)(e10, M()), function(r2) {
      var a2, n2, i2 = (r2 || {}).queryHook, o2 = void 0 === i2 ? _ : i2;
      return { $$type: "ais.searchBox", init: function(t3) {
        var r3 = t3.instantSearchInstance;
        e10((0, v._)((0, g._)({}, this.getWidgetRenderState(t3)), { instantSearchInstance: r3 }), true);
      }, render: function(t3) {
        var r3 = t3.instantSearchInstance;
        e10((0, v._)((0, g._)({}, this.getWidgetRenderState(t3)), { instantSearchInstance: r3 }), false);
      }, dispose: function(e11) {
        var r3 = e11.state;
        return t2(), r3.setQueryParameter("query", void 0);
      }, getRenderState: function(e11, t3) {
        return (0, v._)((0, g._)({}, e11), { searchBox: this.getWidgetRenderState(t3) });
      }, getWidgetRenderState: function(e11) {
        var t3 = e11.helper, i3 = e11.instantSearchInstance, s2 = e11.state;
        return a2 || (a2 = function(e12) {
          o2(e12, function(e13) {
            return t3.setQuery(e13).search();
          });
        }, n2 = function() {
          t3.setQuery("").search();
        }), { query: s2.query || "", refine: a2, clear: n2, widgetParams: r2, isSearchStalled: "stalled" === i3.status };
      }, getWidgetUiState: function(e11, t3) {
        var r3 = t3.searchParameters.query || "";
        return "" === r3 || e11 && e11.query === r3 ? e11 : (0, v._)((0, g._)({}, e11), { query: r3 });
      }, getWidgetSearchParameters: function(e11, t3) {
        var r3 = t3.uiState;
        return e11.setQueryParameter("query", r3.query || "");
      } };
    };
  };
  try {
    var b = "u" > typeof window ? window : e.g;
    b._sentryModuleMetadata = b._sentryModuleMetadata || {}, b._sentryModuleMetadata[new b.Error().stack] = Object.assign({}, b._sentryModuleMetadata[new b.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var E = e.i(12594);
  try {
    var R = window;
    R._sentryModuleMetadata = R._sentryModuleMetadata || {}, R._sentryModuleMetadata[new R.Error().stack] = Object.assign({}, R._sentryModuleMetadata[new R.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var x = "u" > typeof window ? window : e.g;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function k(e10) {
    let t2, r2 = `algolia-client-js-${e10.key}`;
    function a2() {
      return void 0 === t2 && (t2 = e10.localStorage || window.localStorage), t2;
    }
    function n2() {
      return JSON.parse(a2().getItem(r2) || "{}");
    }
    function i2() {
      return new Promise((e11) => setTimeout(e11, 0));
    }
    return { get: (t3, o2, s2 = { miss: () => Promise.resolve() }) => i2().then(() => {
      let i3, c2, u2, d2, { namespace: l2, changed: h2 } = (i3 = e10.timeToLive ? 1e3 * e10.timeToLive : null, c2 = n2(), u2 = (/* @__PURE__ */ new Date()).getTime(), d2 = false, { namespace: Object.fromEntries(Object.entries(c2).filter(([, e11]) => e11 && void 0 !== e11.timestamp && (!i3 || !(e11.timestamp + i3 < u2)) || (d2 = true, false))), changed: d2 }), p2 = l2[JSON.stringify(t3)];
      return (h2 && a2().setItem(r2, JSON.stringify(l2)), p2) ? p2.value : o2().then((e11) => s2.miss(e11).then(() => e11));
    }), set: (e11, t3) => i2().then(() => {
      let i3 = n2();
      return i3[JSON.stringify(e11)] = { timestamp: (/* @__PURE__ */ new Date()).getTime(), value: t3 }, a2().setItem(r2, JSON.stringify(i3)), t3;
    }), delete: (e11) => i2().then(() => {
      let t3 = n2();
      delete t3[JSON.stringify(e11)], a2().setItem(r2, JSON.stringify(t3));
    }), clear: () => Promise.resolve().then(() => {
      a2().removeItem(r2);
    }) };
  }
  function H(e10) {
    let t2 = [...e10.caches], r2 = t2.shift();
    return void 0 === r2 ? { get: (e11, t3, r3 = { miss: () => Promise.resolve() }) => t3().then((e12) => Promise.all([e12, r3.miss(e12)])).then(([e12]) => e12), set: (e11, t3) => Promise.resolve(t3), delete: (e11) => Promise.resolve(), clear: () => Promise.resolve() } : { get: (e11, a2, n2 = { miss: () => Promise.resolve() }) => r2.get(e11, a2, n2).catch(() => H({ caches: t2 }).get(e11, a2, n2)), set: (e11, a2) => r2.set(e11, a2).catch(() => H({ caches: t2 }).set(e11, a2)), delete: (e11) => r2.delete(e11).catch(() => H({ caches: t2 }).delete(e11)), clear: () => r2.clear().catch(() => H({ caches: t2 }).clear()) };
  }
  function A(e10 = { serializable: true }) {
    let t2 = {};
    return { get(r2, a2, n2 = { miss: () => Promise.resolve() }) {
      let i2 = JSON.stringify(r2);
      if (i2 in t2) return Promise.resolve(e10.serializable ? JSON.parse(t2[i2]) : t2[i2]);
      let o2 = a2();
      return o2.then((e11) => n2.miss(e11)).then(() => o2);
    }, set: (r2, a2) => (t2[JSON.stringify(r2)] = e10.serializable ? JSON.stringify(a2) : a2, Promise.resolve(a2)), delete: (e11) => (delete t2[JSON.stringify(e11)], Promise.resolve()), clear: () => (t2 = {}, Promise.resolve()) };
  }
  function q(e10, t2, r2 = "WithinHeaders") {
    let a2 = { "x-algolia-api-key": t2, "x-algolia-application-id": e10 };
    return { headers: () => "WithinHeaders" === r2 ? a2 : {}, queryParameters: () => "WithinQueryParameters" === r2 ? a2 : {} };
  }
  function W({ func: e10, validate: t2, aggregator: r2, error: a2, timeout: n2 = () => 0 }) {
    let i2 = (o2) => new Promise((s2, c2) => {
      e10(o2).then(async (e11) => (r2 && await r2(e11), await t2(e11)) ? s2(e11) : a2 && await a2.validate(e11) ? c2(Error(await a2.message(e11))) : setTimeout(() => {
        i2(e11).then(s2).catch(c2);
      }, await n2())).catch((e11) => {
        c2(e11);
      });
    });
    return i2();
  }
  function j({ algoliaAgents: e10, client: t2, version: r2 }) {
    let a2, n2 = (a2 = { value: `Algolia for JavaScript (${r2})`, add(e11) {
      let t3 = `; ${e11.segment}${void 0 !== e11.version ? ` (${e11.version})` : ""}`;
      return -1 === a2.value.indexOf(t3) && (a2.value = `${a2.value}${t3}`), a2;
    } }).add({ segment: t2, version: r2 });
    return e10.forEach((e11) => n2.add(e11)), n2;
  }
  function O() {
    return { debug: (e10, t2) => Promise.resolve(), info: (e10, t2) => Promise.resolve(), error: (e10, t2) => Promise.resolve() };
  }
  async function* D(e10) {
    let t2 = e10.getReader();
    try {
      for (; ; ) {
        let { done: e11, value: r2 } = await t2.read();
        if (e11) return;
        yield r2;
      }
    } finally {
      t2.releaseLock();
    }
  }
  async function* C(e10) {
    let t2 = new TextDecoder("utf-8"), r2 = [], a2 = 0, n2 = false, i2 = true;
    for await (let o3 of Symbol.asyncIterator in e10 ? e10 : D(e10)) {
      let e11 = t2.decode(o3, { stream: true }), s2 = 0;
      for (n2 && (n2 = false, e11.length > 0 && "\n" === e11[0] && (s2 = 1)); s2 < e11.length; ) {
        let t3, o4, c2 = e11.indexOf("\r", s2), u2 = e11.indexOf("\n", s2);
        if (-1 === c2 && -1 === u2) {
          let t4 = e11.slice(s2);
          if (r2.push(t4), (a2 += t4.length) > 10485760) throw Error("SSE line buffer exceeded 10MB");
          break;
        }
        -1 !== c2 && (-1 === u2 || c2 < u2) ? (t3 = c2, c2 + 1 < e11.length ? o4 = "\n" === e11[c2 + 1] ? 2 : 1 : (n2 = true, o4 = 1)) : (t3 = u2, o4 = 1);
        let d2 = e11.slice(s2, t3);
        r2.push(d2);
        let l2 = 1 === r2.length ? r2[0] : r2.join("");
        r2.length = 0, a2 = 0, i2 && (l2.startsWith("\uFEFF") && (l2 = l2.slice(1)), i2 = false), yield l2, s2 = t3 + o4;
      }
    }
    let o2 = t2.decode();
    if (o2 && r2.push(o2), r2.length > 0) {
      let e11 = r2.join("");
      i2 && e11.startsWith("\uFEFF") && (e11 = e11.slice(1)), yield e11;
    }
  }
  var N = class {
    data = [];
    eventType = "";
    lastEventId = null;
    retry = null;
    decode(e10) {
      let t2, r2;
      if ("" === e10) return this.dispatch();
      if (":" === e10[0]) return null;
      let a2 = e10.indexOf(":");
      switch (-1 === a2 ? (t2 = e10, r2 = "") : (t2 = e10.slice(0, a2), " " === (r2 = e10.slice(a2 + 1))[0] && (r2 = r2.slice(1))), t2) {
        case "data":
          this.data.push(r2);
          break;
        case "event":
          this.eventType = r2;
          break;
        case "id":
          r2.includes("\0") || (this.lastEventId = r2);
          break;
        case "retry":
          /^[0-9]+$/.test(r2) && (this.retry = parseInt(r2, 10));
      }
      return null;
    }
    dispatch() {
      let e10 = this.eventType;
      if (this.eventType = "", 0 === this.data.length) return null;
      let t2 = { data: this.data.join("\n"), event: e10, id: this.lastEventId, retry: this.retry };
      return this.data = [], t2;
    }
  };
  async function* U(e10) {
    let t2 = new N();
    for await (let r2 of C(e10)) {
      let e11 = t2.decode(r2);
      null !== e11 && (yield e11);
    }
  }
  function F(e10, t2 = "up") {
    let r2 = Date.now();
    return { ...e10, status: t2, lastUpdate: r2, isUp: function() {
      return "up" === t2 || Date.now() - r2 > 12e4;
    }, isTimedOut: function() {
      return "timed out" === t2 && Date.now() - r2 <= 12e4;
    } };
  }
  var B = class extends Error {
    name = "AlgoliaError";
    constructor(e10, t2) {
      super(e10), t2 && (this.name = t2);
    }
  }, K = class extends B {
    stackTrace;
    constructor(e10, t2, r2) {
      super(e10, r2), this.stackTrace = t2;
    }
  }, L = class extends K {
    constructor(e10) {
      super("Unreachable hosts - your application id may be incorrect. If the error persists, please visit our help center https://alg.li/support-unreachable-hosts or reach out to the Algolia Support team: https://alg.li/support", e10, "RetryError");
    }
  }, G = class extends K {
    status;
    constructor(e10, t2, r2, a2 = "ApiError") {
      super(e10, r2, a2), this.status = t2;
    }
  }, Q = class extends B {
    response;
    constructor(e10, t2) {
      super(e10, "DeserializationError"), this.response = t2;
    }
  }, $ = class extends G {
    error;
    constructor(e10, t2, r2, a2) {
      super(e10, t2, a2, "DetailedApiError"), this.error = r2;
    }
  };
  function V(e10) {
    for (let t2 = e10.length - 1; t2 > 0; t2--) {
      let r2 = Math.floor(Math.random() * (t2 + 1)), a2 = e10[t2];
      e10[t2] = e10[r2], e10[r2] = a2;
    }
    return e10;
  }
  function z(e10, t2, r2) {
    var a2;
    let n2 = Object.keys(a2 = r2).filter((e11) => void 0 !== a2[e11]).sort().map((e11) => `${e11}=${encodeURIComponent("[object Array]" === Object.prototype.toString.call(a2[e11]) ? a2[e11].join(",") : a2[e11]).replace(/\+/g, "%20")}`).join("&"), i2 = `${e10.protocol}://${e10.url}${e10.port ? `:${e10.port}` : ""}/${"/" === t2.charAt(0) ? t2.substring(1) : t2}`;
    return n2.length && (i2 += `?${n2}`), i2;
  }
  function J(e10, t2) {
    if ("GET" !== e10.method && (void 0 !== e10.data || void 0 !== t2.data)) return JSON.stringify(Array.isArray(e10.data) ? e10.data : { ...e10.data, ...t2.data });
  }
  function X(e10, t2, r2) {
    let a2 = { Accept: "application/json", ...e10, ...t2, ...r2 }, n2 = {};
    return Object.keys(a2).forEach((e11) => {
      let t3 = a2[e11];
      n2[e11.toLowerCase()] = t3;
    }), n2;
  }
  function Y(e10) {
    if (204 !== e10.status && 0 !== e10.content.length) try {
      return JSON.parse(e10.content);
    } catch (t2) {
      throw new Q(t2.message, e10);
    }
  }
  function Z(e10) {
    let t2 = e10.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
    return { ...e10, request: { ...e10.request, headers: { ...e10.request.headers, ...t2 } } };
  }
  function ee({ hosts: e10, hostsCache: t2, baseHeaders: r2, logger: a2, baseQueryParameters: n2, algoliaAgent: i2, timeouts: o2, requester: s2, requestsCache: c2, responsesCache: u2, compress: d2, compression: l2 }) {
    async function h2(e11) {
      let r3 = await Promise.all(e11.map((e12) => t2.get(e12, () => Promise.resolve(F(e12))))), a3 = r3.filter((e12) => e12.isUp()), n3 = r3.filter((e12) => e12.isTimedOut()), i3 = [...a3, ...n3];
      return { hosts: i3.length > 0 ? i3 : e11, getTimeout: (e12, t3) => (0 === n3.length && 0 === e12 ? 1 : n3.length + 3 + e12) * t3 };
    }
    async function p2(c3, u3, p3) {
      let f3 = [], y2 = J(c3, u3), m2 = X(r2, c3.headers, u3.headers), g2 = "gzip" === l2 && void 0 !== y2 && y2.length > 750 && ("POST" === c3.method || "PUT" === c3.method);
      g2 && void 0 === d2 && a2.info("Compression is disabled because no compress method is available.");
      let v2 = g2 && void 0 !== d2, T2 = v2 ? await d2(y2) : y2;
      v2 && (m2["content-encoding"] = "gzip");
      let P2 = "GET" === c3.method ? { ...c3.data, ...u3.data } : {}, w2 = { ...n2, ...c3.queryParameters, ...P2 };
      if (i2.value && (w2["x-algolia-agent"] = i2.value), u3 && u3.queryParameters) for (let e11 of Object.keys(u3.queryParameters)) u3.queryParameters[e11] && "[object Object]" !== Object.prototype.toString.call(u3.queryParameters[e11]) ? w2[e11] = u3.queryParameters[e11].toString() : w2[e11] = u3.queryParameters[e11];
      let I2 = 0, M2 = async (e11, r3) => {
        let n3 = e11.pop();
        if (void 0 === n3) throw new L(f3.map((e12) => Z(e12)));
        let i3 = { ...o2, ...u3.timeouts }, d3 = { data: T2, headers: m2, method: c3.method, url: z(n3, c3.path, w2), connectTimeout: r3(I2, i3.connect), responseTimeout: r3(I2, p3 ? i3.read : i3.write) }, l3 = (t3) => {
          let r4 = { request: d3, response: t3, host: n3, triesLeft: e11.length };
          return f3.push(r4), r4;
        }, h3 = await s2.send(d3);
        if ((function({ isTimedOut: e12, status: t3 }) {
          return e12 || (function({ isTimedOut: e13, status: t4 }) {
            return !e13 && 0 == ~~t4;
          })({ isTimedOut: e12, status: t3 }) || 2 != ~~(t3 / 100) && 4 != ~~(t3 / 100);
        })(h3)) {
          let i4 = l3(h3);
          return h3.isTimedOut && I2++, a2.info("Retryable failure", Z(i4)), await t2.set(n3, F(n3, h3.isTimedOut ? "timed out" : "down")), M2(e11, r3);
        }
        if ((function({ status: e12 }) {
          return 2 == ~~(e12 / 100);
        })(h3)) return h3;
        throw l3(h3), (function({ content: e12, status: t3 }, r4) {
          try {
            let a3 = JSON.parse(e12);
            if ("error" in a3) return new $(a3.message, t3, a3.error, r4);
            return new G(a3.message, t3, r4);
          } catch {
          }
          return new G(e12, t3, r4);
        })(h3, f3);
      }, _2 = e10.filter((e11) => "readWrite" === e11.accept || (p3 ? "read" === e11.accept : "write" === e11.accept)), S2 = await h2(_2);
      return M2([...S2.hosts].reverse(), S2.getTimeout);
    }
    async function* f2(t3, a3 = {}) {
      if (!s2.sendStream) throw Error("This requester does not support streaming");
      let c3 = J(t3, a3), u3 = X(r2, t3.headers, a3.headers);
      u3.accept = "text/event-stream";
      let d3 = "GET" === t3.method ? { ...t3.data, ...a3.data } : {}, l3 = { ...n2, ...t3.queryParameters, ...d3 };
      if (i2.value && (l3["x-algolia-agent"] = i2.value), a3 && a3.queryParameters) for (let e11 of Object.keys(a3.queryParameters)) a3.queryParameters[e11] && "[object Object]" !== Object.prototype.toString.call(a3.queryParameters[e11]) ? l3[e11] = a3.queryParameters[e11].toString() : l3[e11] = a3.queryParameters[e11];
      let p3 = t3.useReadTransporter || "GET" === t3.method, y2 = e10.filter((e11) => "readWrite" === e11.accept || (p3 ? "read" === e11.accept : "write" === e11.accept)), m2 = (await h2(y2)).hosts[0];
      if (!m2) throw new L([]);
      let g2 = { ...o2, ...a3.timeouts }, v2 = { data: c3, headers: u3, method: t3.method, url: z(m2, t3.path, l3), connectTimeout: g2.connect, responseTimeout: p3 ? g2.read : g2.write }, T2 = await s2.sendStream(v2);
      yield* U(T2);
    }
    return { hostsCache: t2, requester: s2, timeouts: o2, logger: a2, algoliaAgent: i2, baseHeaders: r2, baseQueryParameters: n2, hosts: e10, request: function(e11, t3 = {}) {
      let a3 = () => p2(e11, t3, i3).then((e12) => Y(e12)), i3 = e11.useReadTransporter || "GET" === e11.method;
      if (true !== (t3.cacheable || e11.cacheable)) return a3();
      let o3 = { request: e11, requestOptions: t3, transporter: { queryParameters: n2, headers: r2 } };
      return u2.get(o3, () => c2.get(o3, () => c2.set(o3, a3()).then((e12) => Promise.all([c2.delete(o3), e12]), (e12) => Promise.all([c2.delete(o3), Promise.reject(e12)])).then(([e12, t4]) => t4)), { miss: (e12) => u2.set(o3, e12) });
    }, requestWithHttpInfo: function(e11, t3 = {}) {
      let r3 = e11.useReadTransporter || "GET" === e11.method;
      return p2(e11, t3, r3).then((e12) => ({ status: e12.status, headers: e12.headers, content: e12.content, data: Y(e12) }));
    }, requestStream: f2, requestsCache: c2, responsesCache: u2 };
  }
  function et(e10, t2, r2) {
    if (null == r2 || "string" == typeof r2 && 0 === r2.length) throw Error(`Parameter \`${e10}\` is required when calling \`${t2}\`.`);
  }
  try {
    var er = "u" > typeof window ? window : e.g;
    er._sentryModuleMetadata = er._sentryModuleMetadata || {}, er._sentryModuleMetadata[new er.Error().stack] = Object.assign({}, er._sentryModuleMetadata[new er.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function ea() {
    return { send: function(e10) {
      return new Promise((t2) => {
        let r2 = new XMLHttpRequest();
        r2.open(e10.method, e10.url, true), Object.keys(e10.headers).forEach((t3) => r2.setRequestHeader(t3, e10.headers[t3]));
        let a2 = (e11, a3) => setTimeout(() => {
          r2.abort(), t2({ status: 0, content: a3, isTimedOut: true });
        }, e11), n2 = a2(e10.connectTimeout, "Connection timeout"), i2;
        r2.onreadystatechange = () => {
          r2.readyState > r2.OPENED && void 0 === i2 && (clearTimeout(n2), i2 = a2(e10.responseTimeout, "Socket timeout"));
        }, r2.onerror = () => {
          0 === r2.status && (clearTimeout(n2), clearTimeout(i2), t2({ content: r2.responseText || "Network request failed", status: r2.status, isTimedOut: false }));
        }, r2.onload = () => {
          clearTimeout(n2), clearTimeout(i2), t2({ content: r2.responseText, headers: (function(e11) {
            let t3 = {};
            for (let r3 of e11.trim().split(/[\r\n]+/)) {
              let e12 = r3.indexOf(": ");
              e12 > 0 && (t3[r3.slice(0, e12).toLowerCase()] = r3.slice(e12 + 2));
            }
            return t3;
          })(r2.getAllResponseHeaders()), status: r2.status, isTimedOut: false });
        }, r2.send(e10.data);
      });
    } };
  }
  try {
    var en = "u" > typeof window ? window : e.g;
    en._sentryModuleMetadata = en._sentryModuleMetadata || {}, en._sentryModuleMetadata[new en.Error().stack] = Object.assign({}, en._sentryModuleMetadata[new en.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var ei = "1.22.0", eo = ["de", "us"];
  function es(e10, t2, r2, a2) {
    if (!e10 || "string" != typeof e10) throw Error("`appId` is missing.");
    if (!t2 || "string" != typeof t2) throw Error("`apiKey` is missing.");
    if (r2 && ("string" != typeof r2 || !eo.includes(r2))) throw Error(`\`region\` must be one of the following: ${eo.join(", ")}`);
    let { compression: n2, ...i2 } = a2 || {};
    return (function({ appId: e11, apiKey: t3, authMode: r3, algoliaAgents: a3, region: n3, ...i3 }) {
      let o2 = q(e11, t3, r3), s2 = ee({ hosts: [{ url: n3 ? "analytics.{region}.algolia.com".replace("{region}", n3) : "analytics.algolia.com", accept: "readWrite", protocol: "https" }], ...i3, algoliaAgent: j({ algoliaAgents: a3, client: "AbtestingV3", version: ei }), baseHeaders: { "content-type": "text/plain", ...o2.headers(), ...i3.baseHeaders }, baseQueryParameters: { ...o2.queryParameters(), ...i3.baseQueryParameters } });
      return { transporter: s2, appId: e11, apiKey: t3, clearCache: () => Promise.all([s2.requestsCache.clear(), s2.responsesCache.clear()]).then(() => void 0), get _ua() {
        return s2.algoliaAgent.value;
      }, addAlgoliaAgent(e12, t4) {
        s2.algoliaAgent.add({ segment: e12, version: t4 });
      }, setClientApiKey({ apiKey: e12 }) {
        r3 && "WithinHeaders" !== r3 ? s2.baseQueryParameters["x-algolia-api-key"] = e12 : s2.baseHeaders["x-algolia-api-key"] = e12;
      }, addABTests: (e12, t4) => (et("addABTestsRequest", "addABTests", e12), et("addABTestsRequest.name", "addABTests", e12.name), et("addABTestsRequest.variants", "addABTests", e12.variants), et("addABTestsRequest.metrics", "addABTests", e12.metrics), et("addABTestsRequest.endAt", "addABTests", e12.endAt), s2.request({ method: "POST", path: "/3/abtests", queryParameters: {}, headers: {}, data: e12 }, t4)), addABTestsWithHTTPInfo: (e12, t4) => (et("addABTestsRequest", "addABTestsWithHTTPInfo", e12), et("addABTestsRequest.name", "addABTestsWithHTTPInfo", e12.name), et("addABTestsRequest.variants", "addABTestsWithHTTPInfo", e12.variants), et("addABTestsRequest.metrics", "addABTestsWithHTTPInfo", e12.metrics), et("addABTestsRequest.endAt", "addABTestsWithHTTPInfo", e12.endAt), s2.requestWithHttpInfo({ method: "POST", path: "/3/abtests", queryParameters: {}, headers: {}, data: e12 }, t4)), customDelete({ path: e12, parameters: t4 }, r4) {
        et("path", "customDelete", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customDeleteWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customDeleteWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGet({ path: e12, parameters: t4 }, r4) {
        et("path", "customGet", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGetWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customGetWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customPost({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPost", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPostWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPostWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPut({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPut", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPutWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPutWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, deleteABTest({ id: e12 }, t4) {
        et("id", "deleteABTest", e12);
        let r4 = "/3/abtests/{id}".replace("{id}", encodeURIComponent(e12));
        return s2.request({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteABTestWithHTTPInfo({ id: e12 }, t4) {
        et("id", "deleteABTestWithHTTPInfo", e12);
        let r4 = "/3/abtests/{id}".replace("{id}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, estimateABTest: (e12, t4) => (et("estimateABTestRequest", "estimateABTest", e12), et("estimateABTestRequest.configuration", "estimateABTest", e12.configuration), et("estimateABTestRequest.variants", "estimateABTest", e12.variants), s2.request({ method: "POST", path: "/3/abtests/estimate", queryParameters: {}, headers: {}, data: e12 }, t4)), estimateABTestWithHTTPInfo: (e12, t4) => (et("estimateABTestRequest", "estimateABTestWithHTTPInfo", e12), et("estimateABTestRequest.configuration", "estimateABTestWithHTTPInfo", e12.configuration), et("estimateABTestRequest.variants", "estimateABTestWithHTTPInfo", e12.variants), s2.requestWithHttpInfo({ method: "POST", path: "/3/abtests/estimate", queryParameters: {}, headers: {}, data: e12 }, t4)), getABTest({ id: e12 }, t4) {
        et("id", "getABTest", e12);
        let r4 = "/3/abtests/{id}".replace("{id}", encodeURIComponent(e12));
        return s2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getABTestWithHTTPInfo({ id: e12 }, t4) {
        et("id", "getABTestWithHTTPInfo", e12);
        let r4 = "/3/abtests/{id}".replace("{id}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getTimeseries({ id: e12, startDate: t4, endDate: r4, metric: a4 }, n4) {
        et("id", "getTimeseries", e12);
        let i4 = "/3/abtests/{id}/timeseries".replace("{id}", encodeURIComponent(e12)), o3 = {};
        return void 0 !== t4 && (o3.startDate = t4.toString()), void 0 !== r4 && (o3.endDate = r4.toString()), void 0 !== a4 && (o3.metric = a4.toString()), s2.request({ method: "GET", path: i4, queryParameters: o3, headers: {} }, n4);
      }, getTimeseriesWithHTTPInfo({ id: e12, startDate: t4, endDate: r4, metric: a4 }, n4) {
        et("id", "getTimeseriesWithHTTPInfo", e12);
        let i4 = "/3/abtests/{id}/timeseries".replace("{id}", encodeURIComponent(e12)), o3 = {};
        return void 0 !== t4 && (o3.startDate = t4.toString()), void 0 !== r4 && (o3.endDate = r4.toString()), void 0 !== a4 && (o3.metric = a4.toString()), s2.requestWithHttpInfo({ method: "GET", path: i4, queryParameters: o3, headers: {} }, n4);
      }, listABTests({ offset: e12, limit: t4, indexPrefix: r4, indexSuffix: a4, direction: n4 } = {}, i4) {
        let o3 = {};
        return void 0 !== e12 && (o3.offset = e12.toString()), void 0 !== t4 && (o3.limit = t4.toString()), void 0 !== r4 && (o3.indexPrefix = r4.toString()), void 0 !== a4 && (o3.indexSuffix = a4.toString()), void 0 !== n4 && (o3.direction = n4.toString()), s2.request({ method: "GET", path: "/3/abtests", queryParameters: o3, headers: {} }, i4);
      }, listABTestsWithHTTPInfo({ offset: e12, limit: t4, indexPrefix: r4, indexSuffix: a4, direction: n4 } = {}, i4) {
        let o3 = {};
        return void 0 !== e12 && (o3.offset = e12.toString()), void 0 !== t4 && (o3.limit = t4.toString()), void 0 !== r4 && (o3.indexPrefix = r4.toString()), void 0 !== a4 && (o3.indexSuffix = a4.toString()), void 0 !== n4 && (o3.direction = n4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/3/abtests", queryParameters: o3, headers: {} }, i4);
      }, stopABTest({ id: e12 }, t4) {
        et("id", "stopABTest", e12);
        let r4 = "/3/abtests/{id}/stop".replace("{id}", encodeURIComponent(e12));
        return s2.request({ method: "POST", path: r4, queryParameters: {}, headers: {} }, t4);
      }, stopABTestWithHTTPInfo({ id: e12 }, t4) {
        et("id", "stopABTestWithHTTPInfo", e12);
        let r4 = "/3/abtests/{id}/stop".replace("{id}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "POST", path: r4, queryParameters: {}, headers: {} }, t4);
      } };
    })({ appId: e10, apiKey: t2, region: r2, timeouts: { connect: 1e3, read: 2e3, write: 3e4 }, logger: O(), requester: ea(), algoliaAgents: [{ segment: "Browser" }], authMode: "WithinQueryParameters", responsesCache: A(), requestsCache: A({ serializable: false }), hostsCache: H({ caches: [k({ key: `${ei}-${e10}` }), A()] }), ...i2 });
  }
  e.s(["abtestingV3Client", 0, es, "apiClientVersion", 0, ei], 470638);
  try {
    var ec = "u" > typeof window ? window : e.g;
    ec._sentryModuleMetadata = ec._sentryModuleMetadata || {}, ec._sentryModuleMetadata[new ec.Error().stack] = Object.assign({}, ec._sentryModuleMetadata[new ec.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var eu = "5.56.0", ed = ["de", "us"];
  function el(e10, t2, r2, a2) {
    if (!e10 || "string" != typeof e10) throw Error("`appId` is missing.");
    if (!t2 || "string" != typeof t2) throw Error("`apiKey` is missing.");
    if (r2 && ("string" != typeof r2 || !ed.includes(r2))) throw Error(`\`region\` must be one of the following: ${ed.join(", ")}`);
    let { compression: n2, ...i2 } = a2 || {};
    return (function({ appId: e11, apiKey: t3, authMode: r3, algoliaAgents: a3, region: n3, ...i3 }) {
      let o2 = q(e11, t3, r3), s2 = ee({ hosts: [{ url: n3 ? "analytics.{region}.algolia.com".replace("{region}", n3) : "analytics.algolia.com", accept: "readWrite", protocol: "https" }], ...i3, algoliaAgent: j({ algoliaAgents: a3, client: "Abtesting", version: eu }), baseHeaders: { "content-type": "text/plain", ...o2.headers(), ...i3.baseHeaders }, baseQueryParameters: { ...o2.queryParameters(), ...i3.baseQueryParameters } });
      return { transporter: s2, appId: e11, apiKey: t3, clearCache: () => Promise.all([s2.requestsCache.clear(), s2.responsesCache.clear()]).then(() => void 0), get _ua() {
        return s2.algoliaAgent.value;
      }, addAlgoliaAgent(e12, t4) {
        s2.algoliaAgent.add({ segment: e12, version: t4 });
      }, setClientApiKey({ apiKey: e12 }) {
        r3 && "WithinHeaders" !== r3 ? s2.baseQueryParameters["x-algolia-api-key"] = e12 : s2.baseHeaders["x-algolia-api-key"] = e12;
      }, addABTests: (e12, t4) => (et("addABTestsRequest", "addABTests", e12), et("addABTestsRequest.name", "addABTests", e12.name), et("addABTestsRequest.variants", "addABTests", e12.variants), et("addABTestsRequest.endAt", "addABTests", e12.endAt), s2.request({ method: "POST", path: "/2/abtests", queryParameters: {}, headers: {}, data: e12 }, t4)), addABTestsWithHTTPInfo: (e12, t4) => (et("addABTestsRequest", "addABTestsWithHTTPInfo", e12), et("addABTestsRequest.name", "addABTestsWithHTTPInfo", e12.name), et("addABTestsRequest.variants", "addABTestsWithHTTPInfo", e12.variants), et("addABTestsRequest.endAt", "addABTestsWithHTTPInfo", e12.endAt), s2.requestWithHttpInfo({ method: "POST", path: "/2/abtests", queryParameters: {}, headers: {}, data: e12 }, t4)), customDelete({ path: e12, parameters: t4 }, r4) {
        et("path", "customDelete", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customDeleteWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customDeleteWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGet({ path: e12, parameters: t4 }, r4) {
        et("path", "customGet", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGetWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customGetWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customPost({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPost", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPostWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPostWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPut({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPut", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPutWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPutWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, deleteABTest({ id: e12 }, t4) {
        et("id", "deleteABTest", e12);
        let r4 = "/2/abtests/{id}".replace("{id}", encodeURIComponent(e12));
        return s2.request({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteABTestWithHTTPInfo({ id: e12 }, t4) {
        et("id", "deleteABTestWithHTTPInfo", e12);
        let r4 = "/2/abtests/{id}".replace("{id}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, estimateABTest: (e12, t4) => (et("estimateABTestRequest", "estimateABTest", e12), et("estimateABTestRequest.configuration", "estimateABTest", e12.configuration), et("estimateABTestRequest.variants", "estimateABTest", e12.variants), s2.request({ method: "POST", path: "/2/abtests/estimate", queryParameters: {}, headers: {}, data: e12 }, t4)), estimateABTestWithHTTPInfo: (e12, t4) => (et("estimateABTestRequest", "estimateABTestWithHTTPInfo", e12), et("estimateABTestRequest.configuration", "estimateABTestWithHTTPInfo", e12.configuration), et("estimateABTestRequest.variants", "estimateABTestWithHTTPInfo", e12.variants), s2.requestWithHttpInfo({ method: "POST", path: "/2/abtests/estimate", queryParameters: {}, headers: {}, data: e12 }, t4)), getABTest({ id: e12 }, t4) {
        et("id", "getABTest", e12);
        let r4 = "/2/abtests/{id}".replace("{id}", encodeURIComponent(e12));
        return s2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getABTestWithHTTPInfo({ id: e12 }, t4) {
        et("id", "getABTestWithHTTPInfo", e12);
        let r4 = "/2/abtests/{id}".replace("{id}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, listABTests({ offset: e12, limit: t4, indexPrefix: r4, indexSuffix: a4 } = {}, n4) {
        let i4 = {};
        return void 0 !== e12 && (i4.offset = e12.toString()), void 0 !== t4 && (i4.limit = t4.toString()), void 0 !== r4 && (i4.indexPrefix = r4.toString()), void 0 !== a4 && (i4.indexSuffix = a4.toString()), s2.request({ method: "GET", path: "/2/abtests", queryParameters: i4, headers: {} }, n4);
      }, listABTestsWithHTTPInfo({ offset: e12, limit: t4, indexPrefix: r4, indexSuffix: a4 } = {}, n4) {
        let i4 = {};
        return void 0 !== e12 && (i4.offset = e12.toString()), void 0 !== t4 && (i4.limit = t4.toString()), void 0 !== r4 && (i4.indexPrefix = r4.toString()), void 0 !== a4 && (i4.indexSuffix = a4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/abtests", queryParameters: i4, headers: {} }, n4);
      }, stopABTest({ id: e12 }, t4) {
        et("id", "stopABTest", e12);
        let r4 = "/2/abtests/{id}/stop".replace("{id}", encodeURIComponent(e12));
        return s2.request({ method: "POST", path: r4, queryParameters: {}, headers: {} }, t4);
      }, stopABTestWithHTTPInfo({ id: e12 }, t4) {
        et("id", "stopABTestWithHTTPInfo", e12);
        let r4 = "/2/abtests/{id}/stop".replace("{id}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "POST", path: r4, queryParameters: {}, headers: {} }, t4);
      } };
    })({ appId: e10, apiKey: t2, region: r2, timeouts: { connect: 1e3, read: 2e3, write: 3e4 }, logger: O(), requester: ea(), algoliaAgents: [{ segment: "Browser" }], authMode: "WithinQueryParameters", responsesCache: A(), requestsCache: A({ serializable: false }), hostsCache: H({ caches: [k({ key: `${eu}-${e10}` }), A()] }), ...i2 });
  }
  e.s(["abtestingClient", 0, el, "apiClientVersion", 0, eu], 561959);
  try {
    var eh = "u" > typeof window ? window : e.g;
    eh._sentryModuleMetadata = eh._sentryModuleMetadata || {}, eh._sentryModuleMetadata[new eh.Error().stack] = Object.assign({}, eh._sentryModuleMetadata[new eh.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var ep = "5.56.0", ef = ["de", "us"];
  function ey(e10, t2, r2, a2) {
    if (!e10 || "string" != typeof e10) throw Error("`appId` is missing.");
    if (!t2 || "string" != typeof t2) throw Error("`apiKey` is missing.");
    if (r2 && ("string" != typeof r2 || !ef.includes(r2))) throw Error(`\`region\` must be one of the following: ${ef.join(", ")}`);
    let { compression: n2, ...i2 } = a2 || {};
    return (function({ appId: e11, apiKey: t3, authMode: r3, algoliaAgents: a3, region: n3, ...i3 }) {
      let o2 = q(e11, t3, r3), s2 = ee({ hosts: [{ url: n3 ? "analytics.{region}.algolia.com".replace("{region}", n3) : "analytics.algolia.com", accept: "readWrite", protocol: "https" }], ...i3, algoliaAgent: j({ algoliaAgents: a3, client: "Analytics", version: ep }), baseHeaders: { "content-type": "text/plain", ...o2.headers(), ...i3.baseHeaders }, baseQueryParameters: { ...o2.queryParameters(), ...i3.baseQueryParameters } });
      return { transporter: s2, appId: e11, apiKey: t3, clearCache: () => Promise.all([s2.requestsCache.clear(), s2.responsesCache.clear()]).then(() => void 0), get _ua() {
        return s2.algoliaAgent.value;
      }, addAlgoliaAgent(e12, t4) {
        s2.algoliaAgent.add({ segment: e12, version: t4 });
      }, setClientApiKey({ apiKey: e12 }) {
        r3 && "WithinHeaders" !== r3 ? s2.baseQueryParameters["x-algolia-api-key"] = e12 : s2.baseHeaders["x-algolia-api-key"] = e12;
      }, customDelete({ path: e12, parameters: t4 }, r4) {
        et("path", "customDelete", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customDeleteWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customDeleteWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGet({ path: e12, parameters: t4 }, r4) {
        et("path", "customGet", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGetWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customGetWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customPost({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPost", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPostWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPostWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPut({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPut", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPutWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPutWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, getAddToCartRate({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getAddToCartRate", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.request({ method: "GET", path: "/2/conversions/addToCartRate", queryParameters: i4, headers: {} }, n4);
      }, getAddToCartRateWithHTTPInfo({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getAddToCartRateWithHTTPInfo", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/conversions/addToCartRate", queryParameters: i4, headers: {} }, n4);
      }, getAverageClickPosition({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getAverageClickPosition", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.request({ method: "GET", path: "/2/clicks/averageClickPosition", queryParameters: i4, headers: {} }, n4);
      }, getAverageClickPositionWithHTTPInfo({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getAverageClickPositionWithHTTPInfo", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/clicks/averageClickPosition", queryParameters: i4, headers: {} }, n4);
      }, getClickPositions({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getClickPositions", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.request({ method: "GET", path: "/2/clicks/positions", queryParameters: i4, headers: {} }, n4);
      }, getClickPositionsWithHTTPInfo({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getClickPositionsWithHTTPInfo", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/clicks/positions", queryParameters: i4, headers: {} }, n4);
      }, getClickThroughRate({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getClickThroughRate", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.request({ method: "GET", path: "/2/clicks/clickThroughRate", queryParameters: i4, headers: {} }, n4);
      }, getClickThroughRateWithHTTPInfo({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getClickThroughRateWithHTTPInfo", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/clicks/clickThroughRate", queryParameters: i4, headers: {} }, n4);
      }, getConversionRate({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getConversionRate", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.request({ method: "GET", path: "/2/conversions/conversionRate", queryParameters: i4, headers: {} }, n4);
      }, getConversionRateWithHTTPInfo({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getConversionRateWithHTTPInfo", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/conversions/conversionRate", queryParameters: i4, headers: {} }, n4);
      }, getNoClickRate({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getNoClickRate", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.request({ method: "GET", path: "/2/searches/noClickRate", queryParameters: i4, headers: {} }, n4);
      }, getNoClickRateWithHTTPInfo({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getNoClickRateWithHTTPInfo", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/searches/noClickRate", queryParameters: i4, headers: {} }, n4);
      }, getNoResultsRate({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getNoResultsRate", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.request({ method: "GET", path: "/2/searches/noResultRate", queryParameters: i4, headers: {} }, n4);
      }, getNoResultsRateWithHTTPInfo({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getNoResultsRateWithHTTPInfo", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/searches/noResultRate", queryParameters: i4, headers: {} }, n4);
      }, getPurchaseRate({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getPurchaseRate", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.request({ method: "GET", path: "/2/conversions/purchaseRate", queryParameters: i4, headers: {} }, n4);
      }, getPurchaseRateWithHTTPInfo({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getPurchaseRateWithHTTPInfo", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/conversions/purchaseRate", queryParameters: i4, headers: {} }, n4);
      }, getRevenue({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getRevenue", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.request({ method: "GET", path: "/2/conversions/revenue", queryParameters: i4, headers: {} }, n4);
      }, getRevenueWithHTTPInfo({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getRevenueWithHTTPInfo", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/conversions/revenue", queryParameters: i4, headers: {} }, n4);
      }, getSearchesCount({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getSearchesCount", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.request({ method: "GET", path: "/2/searches/count", queryParameters: i4, headers: {} }, n4);
      }, getSearchesCountWithHTTPInfo({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getSearchesCountWithHTTPInfo", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/searches/count", queryParameters: i4, headers: {} }, n4);
      }, getSearchesNoClicks({ index: e12, startDate: t4, endDate: r4, limit: a4, offset: n4, tags: i4 }, o3) {
        et("index", "getSearchesNoClicks", e12);
        let c2 = {};
        return void 0 !== e12 && (c2.index = e12.toString()), void 0 !== t4 && (c2.startDate = t4.toString()), void 0 !== r4 && (c2.endDate = r4.toString()), void 0 !== a4 && (c2.limit = a4.toString()), void 0 !== n4 && (c2.offset = n4.toString()), void 0 !== i4 && (c2.tags = i4.toString()), s2.request({ method: "GET", path: "/2/searches/noClicks", queryParameters: c2, headers: {} }, o3);
      }, getSearchesNoClicksWithHTTPInfo({ index: e12, startDate: t4, endDate: r4, limit: a4, offset: n4, tags: i4 }, o3) {
        et("index", "getSearchesNoClicksWithHTTPInfo", e12);
        let c2 = {};
        return void 0 !== e12 && (c2.index = e12.toString()), void 0 !== t4 && (c2.startDate = t4.toString()), void 0 !== r4 && (c2.endDate = r4.toString()), void 0 !== a4 && (c2.limit = a4.toString()), void 0 !== n4 && (c2.offset = n4.toString()), void 0 !== i4 && (c2.tags = i4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/searches/noClicks", queryParameters: c2, headers: {} }, o3);
      }, getSearchesNoResults({ index: e12, startDate: t4, endDate: r4, limit: a4, offset: n4, tags: i4 }, o3) {
        et("index", "getSearchesNoResults", e12);
        let c2 = {};
        return void 0 !== e12 && (c2.index = e12.toString()), void 0 !== t4 && (c2.startDate = t4.toString()), void 0 !== r4 && (c2.endDate = r4.toString()), void 0 !== a4 && (c2.limit = a4.toString()), void 0 !== n4 && (c2.offset = n4.toString()), void 0 !== i4 && (c2.tags = i4.toString()), s2.request({ method: "GET", path: "/2/searches/noResults", queryParameters: c2, headers: {} }, o3);
      }, getSearchesNoResultsWithHTTPInfo({ index: e12, startDate: t4, endDate: r4, limit: a4, offset: n4, tags: i4 }, o3) {
        et("index", "getSearchesNoResultsWithHTTPInfo", e12);
        let c2 = {};
        return void 0 !== e12 && (c2.index = e12.toString()), void 0 !== t4 && (c2.startDate = t4.toString()), void 0 !== r4 && (c2.endDate = r4.toString()), void 0 !== a4 && (c2.limit = a4.toString()), void 0 !== n4 && (c2.offset = n4.toString()), void 0 !== i4 && (c2.tags = i4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/searches/noResults", queryParameters: c2, headers: {} }, o3);
      }, getStatus({ index: e12 }, t4) {
        et("index", "getStatus", e12);
        let r4 = {};
        return void 0 !== e12 && (r4.index = e12.toString()), s2.request({ method: "GET", path: "/2/status", queryParameters: r4, headers: {} }, t4);
      }, getStatusWithHTTPInfo({ index: e12 }, t4) {
        et("index", "getStatusWithHTTPInfo", e12);
        let r4 = {};
        return void 0 !== e12 && (r4.index = e12.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/status", queryParameters: r4, headers: {} }, t4);
      }, getTopCountries({ index: e12, startDate: t4, endDate: r4, limit: a4, offset: n4, tags: i4 }, o3) {
        et("index", "getTopCountries", e12);
        let c2 = {};
        return void 0 !== e12 && (c2.index = e12.toString()), void 0 !== t4 && (c2.startDate = t4.toString()), void 0 !== r4 && (c2.endDate = r4.toString()), void 0 !== a4 && (c2.limit = a4.toString()), void 0 !== n4 && (c2.offset = n4.toString()), void 0 !== i4 && (c2.tags = i4.toString()), s2.request({ method: "GET", path: "/2/countries", queryParameters: c2, headers: {} }, o3);
      }, getTopCountriesWithHTTPInfo({ index: e12, startDate: t4, endDate: r4, limit: a4, offset: n4, tags: i4 }, o3) {
        et("index", "getTopCountriesWithHTTPInfo", e12);
        let c2 = {};
        return void 0 !== e12 && (c2.index = e12.toString()), void 0 !== t4 && (c2.startDate = t4.toString()), void 0 !== r4 && (c2.endDate = r4.toString()), void 0 !== a4 && (c2.limit = a4.toString()), void 0 !== n4 && (c2.offset = n4.toString()), void 0 !== i4 && (c2.tags = i4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/countries", queryParameters: c2, headers: {} }, o3);
      }, getTopFilterAttributes({ index: e12, search: t4, startDate: r4, endDate: a4, limit: n4, offset: i4, tags: o3 }, c2) {
        et("index", "getTopFilterAttributes", e12);
        let u2 = {};
        return void 0 !== e12 && (u2.index = e12.toString()), void 0 !== t4 && (u2.search = t4.toString()), void 0 !== r4 && (u2.startDate = r4.toString()), void 0 !== a4 && (u2.endDate = a4.toString()), void 0 !== n4 && (u2.limit = n4.toString()), void 0 !== i4 && (u2.offset = i4.toString()), void 0 !== o3 && (u2.tags = o3.toString()), s2.request({ method: "GET", path: "/2/filters", queryParameters: u2, headers: {} }, c2);
      }, getTopFilterAttributesWithHTTPInfo({ index: e12, search: t4, startDate: r4, endDate: a4, limit: n4, offset: i4, tags: o3 }, c2) {
        et("index", "getTopFilterAttributesWithHTTPInfo", e12);
        let u2 = {};
        return void 0 !== e12 && (u2.index = e12.toString()), void 0 !== t4 && (u2.search = t4.toString()), void 0 !== r4 && (u2.startDate = r4.toString()), void 0 !== a4 && (u2.endDate = a4.toString()), void 0 !== n4 && (u2.limit = n4.toString()), void 0 !== i4 && (u2.offset = i4.toString()), void 0 !== o3 && (u2.tags = o3.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/filters", queryParameters: u2, headers: {} }, c2);
      }, getTopFilterForAttribute({ attribute: e12, index: t4, search: r4, startDate: a4, endDate: n4, limit: i4, offset: o3, tags: c2 }, u2) {
        et("attribute", "getTopFilterForAttribute", e12), et("index", "getTopFilterForAttribute", t4);
        let d2 = "/2/filters/{attribute}".replace("{attribute}", encodeURIComponent(e12)), l2 = {};
        return void 0 !== t4 && (l2.index = t4.toString()), void 0 !== r4 && (l2.search = r4.toString()), void 0 !== a4 && (l2.startDate = a4.toString()), void 0 !== n4 && (l2.endDate = n4.toString()), void 0 !== i4 && (l2.limit = i4.toString()), void 0 !== o3 && (l2.offset = o3.toString()), void 0 !== c2 && (l2.tags = c2.toString()), s2.request({ method: "GET", path: d2, queryParameters: l2, headers: {} }, u2);
      }, getTopFilterForAttributeWithHTTPInfo({ attribute: e12, index: t4, search: r4, startDate: a4, endDate: n4, limit: i4, offset: o3, tags: c2 }, u2) {
        et("attribute", "getTopFilterForAttributeWithHTTPInfo", e12), et("index", "getTopFilterForAttributeWithHTTPInfo", t4);
        let d2 = "/2/filters/{attribute}".replace("{attribute}", encodeURIComponent(e12)), l2 = {};
        return void 0 !== t4 && (l2.index = t4.toString()), void 0 !== r4 && (l2.search = r4.toString()), void 0 !== a4 && (l2.startDate = a4.toString()), void 0 !== n4 && (l2.endDate = n4.toString()), void 0 !== i4 && (l2.limit = i4.toString()), void 0 !== o3 && (l2.offset = o3.toString()), void 0 !== c2 && (l2.tags = c2.toString()), s2.requestWithHttpInfo({ method: "GET", path: d2, queryParameters: l2, headers: {} }, u2);
      }, getTopFiltersNoResults({ index: e12, search: t4, startDate: r4, endDate: a4, limit: n4, offset: i4, tags: o3 }, c2) {
        et("index", "getTopFiltersNoResults", e12);
        let u2 = {};
        return void 0 !== e12 && (u2.index = e12.toString()), void 0 !== t4 && (u2.search = t4.toString()), void 0 !== r4 && (u2.startDate = r4.toString()), void 0 !== a4 && (u2.endDate = a4.toString()), void 0 !== n4 && (u2.limit = n4.toString()), void 0 !== i4 && (u2.offset = i4.toString()), void 0 !== o3 && (u2.tags = o3.toString()), s2.request({ method: "GET", path: "/2/filters/noResults", queryParameters: u2, headers: {} }, c2);
      }, getTopFiltersNoResultsWithHTTPInfo({ index: e12, search: t4, startDate: r4, endDate: a4, limit: n4, offset: i4, tags: o3 }, c2) {
        et("index", "getTopFiltersNoResultsWithHTTPInfo", e12);
        let u2 = {};
        return void 0 !== e12 && (u2.index = e12.toString()), void 0 !== t4 && (u2.search = t4.toString()), void 0 !== r4 && (u2.startDate = r4.toString()), void 0 !== a4 && (u2.endDate = a4.toString()), void 0 !== n4 && (u2.limit = n4.toString()), void 0 !== i4 && (u2.offset = i4.toString()), void 0 !== o3 && (u2.tags = o3.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/filters/noResults", queryParameters: u2, headers: {} }, c2);
      }, getTopHits({ index: e12, search: t4, clickAnalytics: r4, revenueAnalytics: a4, startDate: n4, endDate: i4, limit: o3, offset: c2, tags: u2 }, d2) {
        et("index", "getTopHits", e12);
        let l2 = {};
        return void 0 !== e12 && (l2.index = e12.toString()), void 0 !== t4 && (l2.search = t4.toString()), void 0 !== r4 && (l2.clickAnalytics = r4.toString()), void 0 !== a4 && (l2.revenueAnalytics = a4.toString()), void 0 !== n4 && (l2.startDate = n4.toString()), void 0 !== i4 && (l2.endDate = i4.toString()), void 0 !== o3 && (l2.limit = o3.toString()), void 0 !== c2 && (l2.offset = c2.toString()), void 0 !== u2 && (l2.tags = u2.toString()), s2.request({ method: "GET", path: "/2/hits", queryParameters: l2, headers: {} }, d2);
      }, getTopHitsWithHTTPInfo({ index: e12, search: t4, clickAnalytics: r4, revenueAnalytics: a4, startDate: n4, endDate: i4, limit: o3, offset: c2, tags: u2 }, d2) {
        et("index", "getTopHitsWithHTTPInfo", e12);
        let l2 = {};
        return void 0 !== e12 && (l2.index = e12.toString()), void 0 !== t4 && (l2.search = t4.toString()), void 0 !== r4 && (l2.clickAnalytics = r4.toString()), void 0 !== a4 && (l2.revenueAnalytics = a4.toString()), void 0 !== n4 && (l2.startDate = n4.toString()), void 0 !== i4 && (l2.endDate = i4.toString()), void 0 !== o3 && (l2.limit = o3.toString()), void 0 !== c2 && (l2.offset = c2.toString()), void 0 !== u2 && (l2.tags = u2.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/hits", queryParameters: l2, headers: {} }, d2);
      }, getTopSearches({ index: e12, clickAnalytics: t4, revenueAnalytics: r4, startDate: a4, endDate: n4, orderBy: i4, direction: o3, limit: c2, offset: u2, tags: d2 }, l2) {
        et("index", "getTopSearches", e12);
        let h2 = {};
        return void 0 !== e12 && (h2.index = e12.toString()), void 0 !== t4 && (h2.clickAnalytics = t4.toString()), void 0 !== r4 && (h2.revenueAnalytics = r4.toString()), void 0 !== a4 && (h2.startDate = a4.toString()), void 0 !== n4 && (h2.endDate = n4.toString()), void 0 !== i4 && (h2.orderBy = i4.toString()), void 0 !== o3 && (h2.direction = o3.toString()), void 0 !== c2 && (h2.limit = c2.toString()), void 0 !== u2 && (h2.offset = u2.toString()), void 0 !== d2 && (h2.tags = d2.toString()), s2.request({ method: "GET", path: "/2/searches", queryParameters: h2, headers: {} }, l2);
      }, getTopSearchesWithHTTPInfo({ index: e12, clickAnalytics: t4, revenueAnalytics: r4, startDate: a4, endDate: n4, orderBy: i4, direction: o3, limit: c2, offset: u2, tags: d2 }, l2) {
        et("index", "getTopSearchesWithHTTPInfo", e12);
        let h2 = {};
        return void 0 !== e12 && (h2.index = e12.toString()), void 0 !== t4 && (h2.clickAnalytics = t4.toString()), void 0 !== r4 && (h2.revenueAnalytics = r4.toString()), void 0 !== a4 && (h2.startDate = a4.toString()), void 0 !== n4 && (h2.endDate = n4.toString()), void 0 !== i4 && (h2.orderBy = i4.toString()), void 0 !== o3 && (h2.direction = o3.toString()), void 0 !== c2 && (h2.limit = c2.toString()), void 0 !== u2 && (h2.offset = u2.toString()), void 0 !== d2 && (h2.tags = d2.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/searches", queryParameters: h2, headers: {} }, l2);
      }, getUsersCount({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getUsersCount", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.request({ method: "GET", path: "/2/users/count", queryParameters: i4, headers: {} }, n4);
      }, getUsersCountWithHTTPInfo({ index: e12, startDate: t4, endDate: r4, tags: a4 }, n4) {
        et("index", "getUsersCountWithHTTPInfo", e12);
        let i4 = {};
        return void 0 !== e12 && (i4.index = e12.toString()), void 0 !== t4 && (i4.startDate = t4.toString()), void 0 !== r4 && (i4.endDate = r4.toString()), void 0 !== a4 && (i4.tags = a4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/users/count", queryParameters: i4, headers: {} }, n4);
      } };
    })({ appId: e10, apiKey: t2, region: r2, timeouts: { connect: 1e3, read: 2e3, write: 3e4 }, logger: O(), requester: ea(), algoliaAgents: [{ segment: "Browser" }], authMode: "WithinQueryParameters", responsesCache: A(), requestsCache: A({ serializable: false }), hostsCache: H({ caches: [k({ key: `${ep}-${e10}` }), A()] }), ...i2 });
  }
  e.s(["analyticsClient", 0, ey, "apiClientVersion", 0, ep], 203382);
  try {
    var em = "u" > typeof window ? window : e.g;
    em._sentryModuleMetadata = em._sentryModuleMetadata || {}, em._sentryModuleMetadata[new em.Error().stack] = Object.assign({}, em._sentryModuleMetadata[new em.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var eg = "5.56.0", ev = ["de", "us"];
  function eT(e10, t2, r2, a2) {
    if (!e10 || "string" != typeof e10) throw Error("`appId` is missing.");
    if (!t2 || "string" != typeof t2) throw Error("`apiKey` is missing.");
    if (r2 && ("string" != typeof r2 || !ev.includes(r2))) throw Error(`\`region\` must be one of the following: ${ev.join(", ")}`);
    let { compression: n2, ...i2 } = a2 || {};
    return (function({ appId: e11, apiKey: t3, authMode: r3, algoliaAgents: a3, region: n3, ...i3 }) {
      let o2 = q(e11, t3, r3), s2 = ee({ hosts: [{ url: n3 ? "insights.{region}.algolia.io".replace("{region}", n3) : "insights.algolia.io", accept: "readWrite", protocol: "https" }], ...i3, algoliaAgent: j({ algoliaAgents: a3, client: "Insights", version: eg }), baseHeaders: { "content-type": "text/plain", ...o2.headers(), ...i3.baseHeaders }, baseQueryParameters: { ...o2.queryParameters(), ...i3.baseQueryParameters } });
      return { transporter: s2, appId: e11, apiKey: t3, clearCache: () => Promise.all([s2.requestsCache.clear(), s2.responsesCache.clear()]).then(() => void 0), get _ua() {
        return s2.algoliaAgent.value;
      }, addAlgoliaAgent(e12, t4) {
        s2.algoliaAgent.add({ segment: e12, version: t4 });
      }, setClientApiKey({ apiKey: e12 }) {
        r3 && "WithinHeaders" !== r3 ? s2.baseQueryParameters["x-algolia-api-key"] = e12 : s2.baseHeaders["x-algolia-api-key"] = e12;
      }, customDelete({ path: e12, parameters: t4 }, r4) {
        et("path", "customDelete", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customDeleteWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customDeleteWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGet({ path: e12, parameters: t4 }, r4) {
        et("path", "customGet", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGetWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customGetWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customPost({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPost", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPostWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPostWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPut({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPut", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPutWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPutWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, deleteUserToken({ userToken: e12 }, t4) {
        et("userToken", "deleteUserToken", e12);
        let r4 = "/1/usertokens/{userToken}".replace("{userToken}", encodeURIComponent(e12));
        return s2.request({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteUserTokenWithHTTPInfo({ userToken: e12 }, t4) {
        et("userToken", "deleteUserTokenWithHTTPInfo", e12);
        let r4 = "/1/usertokens/{userToken}".replace("{userToken}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, pushEvents: (e12, t4) => (et("insightsEvents", "pushEvents", e12), et("insightsEvents.events", "pushEvents", e12.events), s2.request({ method: "POST", path: "/1/events", queryParameters: {}, headers: {}, data: e12 }, t4)), pushEventsWithHTTPInfo: (e12, t4) => (et("insightsEvents", "pushEventsWithHTTPInfo", e12), et("insightsEvents.events", "pushEventsWithHTTPInfo", e12.events), s2.requestWithHttpInfo({ method: "POST", path: "/1/events", queryParameters: {}, headers: {}, data: e12 }, t4)) };
    })({ appId: e10, apiKey: t2, region: r2, timeouts: { connect: 1e3, read: 2e3, write: 3e4 }, logger: O(), requester: ea(), algoliaAgents: [{ segment: "Browser" }], authMode: "WithinQueryParameters", responsesCache: A(), requestsCache: A({ serializable: false }), hostsCache: H({ caches: [k({ key: `${eg}-${e10}` }), A()] }), ...i2 });
  }
  e.s(["apiClientVersion", 0, eg, "insightsClient", 0, eT], 568562);
  try {
    var eP = "u" > typeof window ? window : e.g;
    eP._sentryModuleMetadata = eP._sentryModuleMetadata || {}, eP._sentryModuleMetadata[new eP.Error().stack] = Object.assign({}, eP._sentryModuleMetadata[new eP.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var ew = "5.56.0", eI = ["eu", "us"];
  function eM(e10, t2, r2, a2) {
    if (!e10 || "string" != typeof e10) throw Error("`appId` is missing.");
    if (!t2 || "string" != typeof t2) throw Error("`apiKey` is missing.");
    if (!r2 || r2 && ("string" != typeof r2 || !eI.includes(r2))) throw Error(`\`region\` is required and must be one of the following: ${eI.join(", ")}`);
    let { compression: n2, ...i2 } = a2 || {};
    return (function({ appId: e11, apiKey: t3, authMode: r3, algoliaAgents: a3, region: n3, ...i3 }) {
      let o2 = q(e11, t3, r3), s2 = ee({ hosts: [{ url: "personalization.{region}.algolia.com".replace("{region}", n3), accept: "readWrite", protocol: "https" }], ...i3, algoliaAgent: j({ algoliaAgents: a3, client: "Personalization", version: ew }), baseHeaders: { "content-type": "text/plain", ...o2.headers(), ...i3.baseHeaders }, baseQueryParameters: { ...o2.queryParameters(), ...i3.baseQueryParameters } });
      return { transporter: s2, appId: e11, apiKey: t3, clearCache: () => Promise.all([s2.requestsCache.clear(), s2.responsesCache.clear()]).then(() => void 0), get _ua() {
        return s2.algoliaAgent.value;
      }, addAlgoliaAgent(e12, t4) {
        s2.algoliaAgent.add({ segment: e12, version: t4 });
      }, setClientApiKey({ apiKey: e12 }) {
        r3 && "WithinHeaders" !== r3 ? s2.baseQueryParameters["x-algolia-api-key"] = e12 : s2.baseHeaders["x-algolia-api-key"] = e12;
      }, customDelete({ path: e12, parameters: t4 }, r4) {
        et("path", "customDelete", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customDeleteWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customDeleteWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGet({ path: e12, parameters: t4 }, r4) {
        et("path", "customGet", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGetWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customGetWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customPost({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPost", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPostWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPostWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPut({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPut", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPutWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPutWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, deleteUserProfile({ userToken: e12 }, t4) {
        et("userToken", "deleteUserProfile", e12);
        let r4 = "/1/profiles/{userToken}".replace("{userToken}", encodeURIComponent(e12));
        return s2.request({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteUserProfileWithHTTPInfo({ userToken: e12 }, t4) {
        et("userToken", "deleteUserProfileWithHTTPInfo", e12);
        let r4 = "/1/profiles/{userToken}".replace("{userToken}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getPersonalizationStrategy: (e12) => s2.request({ method: "GET", path: "/1/strategies/personalization", queryParameters: {}, headers: {} }, e12), getPersonalizationStrategyWithHTTPInfo: (e12) => s2.requestWithHttpInfo({ method: "GET", path: "/1/strategies/personalization", queryParameters: {}, headers: {} }, e12), getUserTokenProfile({ userToken: e12 }, t4) {
        et("userToken", "getUserTokenProfile", e12);
        let r4 = "/1/profiles/personalization/{userToken}".replace("{userToken}", encodeURIComponent(e12));
        return s2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getUserTokenProfileWithHTTPInfo({ userToken: e12 }, t4) {
        et("userToken", "getUserTokenProfileWithHTTPInfo", e12);
        let r4 = "/1/profiles/personalization/{userToken}".replace("{userToken}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, setPersonalizationStrategy: (e12, t4) => (et("personalizationStrategyParams", "setPersonalizationStrategy", e12), et("personalizationStrategyParams.eventsScoring", "setPersonalizationStrategy", e12.eventsScoring), et("personalizationStrategyParams.facetsScoring", "setPersonalizationStrategy", e12.facetsScoring), et("personalizationStrategyParams.personalizationImpact", "setPersonalizationStrategy", e12.personalizationImpact), s2.request({ method: "POST", path: "/1/strategies/personalization", queryParameters: {}, headers: {}, data: e12 }, t4)), setPersonalizationStrategyWithHTTPInfo: (e12, t4) => (et("personalizationStrategyParams", "setPersonalizationStrategyWithHTTPInfo", e12), et("personalizationStrategyParams.eventsScoring", "setPersonalizationStrategyWithHTTPInfo", e12.eventsScoring), et("personalizationStrategyParams.facetsScoring", "setPersonalizationStrategyWithHTTPInfo", e12.facetsScoring), et("personalizationStrategyParams.personalizationImpact", "setPersonalizationStrategyWithHTTPInfo", e12.personalizationImpact), s2.requestWithHttpInfo({ method: "POST", path: "/1/strategies/personalization", queryParameters: {}, headers: {}, data: e12 }, t4)) };
    })({ appId: e10, apiKey: t2, region: r2, timeouts: { connect: 1e3, read: 2e3, write: 3e4 }, logger: O(), requester: ea(), algoliaAgents: [{ segment: "Browser" }], authMode: "WithinQueryParameters", responsesCache: A(), requestsCache: A({ serializable: false }), hostsCache: H({ caches: [k({ key: `${ew}-${e10}` }), A()] }), ...i2 });
  }
  e.s(["apiClientVersion", 0, ew, "personalizationClient", 0, eM], 629634);
  try {
    var e_ = "u" > typeof window ? window : e.g;
    e_._sentryModuleMetadata = e_._sentryModuleMetadata || {}, e_._sentryModuleMetadata[new e_.Error().stack] = Object.assign({}, e_._sentryModuleMetadata[new e_.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var eS = "5.56.0", eb = ["eu", "us"];
  function eE(e10, t2, r2, a2) {
    if (!e10 || "string" != typeof e10) throw Error("`appId` is missing.");
    if (!t2 || "string" != typeof t2) throw Error("`apiKey` is missing.");
    if (!r2 || r2 && ("string" != typeof r2 || !eb.includes(r2))) throw Error(`\`region\` is required and must be one of the following: ${eb.join(", ")}`);
    let { compression: n2, ...i2 } = a2 || {};
    return (function({ appId: e11, apiKey: t3, authMode: r3, algoliaAgents: a3, region: n3, ...i3 }) {
      let o2 = q(e11, t3, r3), s2 = ee({ hosts: [{ url: "query-suggestions.{region}.algolia.com".replace("{region}", n3), accept: "readWrite", protocol: "https" }], ...i3, algoliaAgent: j({ algoliaAgents: a3, client: "QuerySuggestions", version: eS }), baseHeaders: { "content-type": "text/plain", ...o2.headers(), ...i3.baseHeaders }, baseQueryParameters: { ...o2.queryParameters(), ...i3.baseQueryParameters } });
      return { transporter: s2, appId: e11, apiKey: t3, clearCache: () => Promise.all([s2.requestsCache.clear(), s2.responsesCache.clear()]).then(() => void 0), get _ua() {
        return s2.algoliaAgent.value;
      }, addAlgoliaAgent(e12, t4) {
        s2.algoliaAgent.add({ segment: e12, version: t4 });
      }, setClientApiKey({ apiKey: e12 }) {
        r3 && "WithinHeaders" !== r3 ? s2.baseQueryParameters["x-algolia-api-key"] = e12 : s2.baseHeaders["x-algolia-api-key"] = e12;
      }, createConfig: (e12, t4) => (et("configurationWithIndex", "createConfig", e12), s2.request({ method: "POST", path: "/1/configs", queryParameters: {}, headers: {}, data: e12 }, t4)), createConfigWithHTTPInfo: (e12, t4) => (et("configurationWithIndex", "createConfigWithHTTPInfo", e12), s2.requestWithHttpInfo({ method: "POST", path: "/1/configs", queryParameters: {}, headers: {}, data: e12 }, t4)), customDelete({ path: e12, parameters: t4 }, r4) {
        et("path", "customDelete", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customDeleteWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customDeleteWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGet({ path: e12, parameters: t4 }, r4) {
        et("path", "customGet", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGetWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customGetWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customPost({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPost", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPostWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPostWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPut({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPut", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPutWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPutWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, deleteConfig({ indexName: e12 }, t4) {
        et("indexName", "deleteConfig", e12);
        let r4 = "/1/configs/{indexName}".replace("{indexName}", encodeURIComponent(e12));
        return s2.request({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteConfigWithHTTPInfo({ indexName: e12 }, t4) {
        et("indexName", "deleteConfigWithHTTPInfo", e12);
        let r4 = "/1/configs/{indexName}".replace("{indexName}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getAllConfigs: (e12) => s2.request({ method: "GET", path: "/1/configs", queryParameters: {}, headers: {} }, e12), getAllConfigsWithHTTPInfo: (e12) => s2.requestWithHttpInfo({ method: "GET", path: "/1/configs", queryParameters: {}, headers: {} }, e12), getConfig({ indexName: e12 }, t4) {
        et("indexName", "getConfig", e12);
        let r4 = "/1/configs/{indexName}".replace("{indexName}", encodeURIComponent(e12));
        return s2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getConfigWithHTTPInfo({ indexName: e12 }, t4) {
        et("indexName", "getConfigWithHTTPInfo", e12);
        let r4 = "/1/configs/{indexName}".replace("{indexName}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getConfigStatus({ indexName: e12 }, t4) {
        et("indexName", "getConfigStatus", e12);
        let r4 = "/1/configs/{indexName}/status".replace("{indexName}", encodeURIComponent(e12));
        return s2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getConfigStatusWithHTTPInfo({ indexName: e12 }, t4) {
        et("indexName", "getConfigStatusWithHTTPInfo", e12);
        let r4 = "/1/configs/{indexName}/status".replace("{indexName}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getLogFile({ indexName: e12 }, t4) {
        et("indexName", "getLogFile", e12);
        let r4 = "/1/logs/{indexName}".replace("{indexName}", encodeURIComponent(e12));
        return s2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getLogFileWithHTTPInfo({ indexName: e12 }, t4) {
        et("indexName", "getLogFileWithHTTPInfo", e12);
        let r4 = "/1/logs/{indexName}".replace("{indexName}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, updateConfig({ indexName: e12, configuration: t4 }, r4) {
        et("indexName", "updateConfig", e12), et("configuration", "updateConfig", t4), et("configuration.sourceIndices", "updateConfig", t4.sourceIndices);
        let a4 = "/1/configs/{indexName}".replace("{indexName}", encodeURIComponent(e12));
        return s2.request({ method: "PUT", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, updateConfigWithHTTPInfo({ indexName: e12, configuration: t4 }, r4) {
        et("indexName", "updateConfigWithHTTPInfo", e12), et("configuration", "updateConfigWithHTTPInfo", t4), et("configuration.sourceIndices", "updateConfigWithHTTPInfo", t4.sourceIndices);
        let a4 = "/1/configs/{indexName}".replace("{indexName}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "PUT", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      } };
    })({ appId: e10, apiKey: t2, region: r2, timeouts: { connect: 1e3, read: 2e3, write: 3e4 }, logger: O(), requester: ea(), algoliaAgents: [{ segment: "Browser" }], authMode: "WithinQueryParameters", responsesCache: A(), requestsCache: A({ serializable: false }), hostsCache: H({ caches: [k({ key: `${eS}-${e10}` }), A()] }), ...i2 });
  }
  e.s(["apiClientVersion", 0, eS, "querySuggestionsClient", 0, eE], 541026);
  try {
    var eR = "u" > typeof window ? window : e.g;
    eR._sentryModuleMetadata = eR._sentryModuleMetadata || {}, eR._sentryModuleMetadata[new eR.Error().stack] = Object.assign({}, eR._sentryModuleMetadata[new eR.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var ex = "5.56.0";
  function ek(e10, t2, r2) {
    if (!e10 || "string" != typeof e10) throw Error("`appId` is missing.");
    if (!t2 || "string" != typeof t2) throw Error("`apiKey` is missing.");
    let { compression: a2, ...n2 } = r2 || {};
    return (function({ appId: e11, apiKey: t3, authMode: r3, algoliaAgents: a3, ...n3 }) {
      let i2 = q(e11, t3, r3), o2 = ee({ hosts: [{ url: `${e11}-dsn.algolia.net`, accept: "read", protocol: "https" }, { url: `${e11}.algolia.net`, accept: "write", protocol: "https" }].concat(V([{ url: `${e11}-1.algolianet.com`, accept: "readWrite", protocol: "https" }, { url: `${e11}-2.algolianet.com`, accept: "readWrite", protocol: "https" }, { url: `${e11}-3.algolianet.com`, accept: "readWrite", protocol: "https" }])), ...n3, algoliaAgent: j({ algoliaAgents: a3, client: "Search", version: ex }), baseHeaders: { "content-type": "text/plain", ...i2.headers(), ...n3.baseHeaders }, baseQueryParameters: { ...i2.queryParameters(), ...n3.baseQueryParameters } });
      return { transporter: o2, appId: e11, apiKey: t3, clearCache: () => Promise.all([o2.requestsCache.clear(), o2.responsesCache.clear()]).then(() => void 0), get _ua() {
        return o2.algoliaAgent.value;
      }, addAlgoliaAgent(e12, t4) {
        o2.algoliaAgent.add({ segment: e12, version: t4 });
      }, setClientApiKey({ apiKey: e12 }) {
        r3 && "WithinHeaders" !== r3 ? o2.baseQueryParameters["x-algolia-api-key"] = e12 : o2.baseHeaders["x-algolia-api-key"] = e12;
      }, waitForTask({ indexName: e12, taskID: t4, maxRetries: r4 = 100, timeout: a4 = (e13) => Math.min(200 * e13, 5e3) }, n4) {
        let i3 = 0;
        return W({ func: () => this.getTask({ indexName: e12, taskID: t4 }, n4), validate: (e13) => "published" === e13.status, aggregator: () => i3 += 1, error: { validate: () => i3 >= r4, message: () => `Stopped waiting for the task after ${r4} retries. This does not mean the operation failed; it may still complete. If you need to keep polling, retry with a higher maxRetries.` }, timeout: () => a4(i3) });
      }, waitForAppTask({ taskID: e12, maxRetries: t4 = 100, timeout: r4 = (e13) => Math.min(200 * e13, 5e3) }, a4) {
        let n4 = 0;
        return W({ func: () => this.getAppTask({ taskID: e12 }, a4), validate: (e13) => "published" === e13.status, aggregator: () => n4 += 1, error: { validate: () => n4 >= t4, message: () => `Stopped waiting for the task after ${t4} retries. This does not mean the operation failed; it may still complete. If you need to keep polling, retry with a higher maxRetries.` }, timeout: () => r4(n4) });
      }, waitForApiKey({ operation: e12, key: t4, apiKey: r4, maxRetries: a4 = 100, timeout: n4 = (e13) => Math.min(200 * e13, 5e3) }, i3) {
        let o3 = 0, s2 = { aggregator: () => o3 += 1, error: { validate: () => o3 >= a4, message: () => `Stopped waiting for the API key operation after ${a4} retries. This does not mean the operation failed; it may still complete. If you need to keep polling, retry with a higher maxRetries.` }, timeout: () => n4(o3) };
        if ("update" === e12) {
          if (!r4) throw Error("`apiKey` is required when waiting for an `update` operation.");
          return W({ ...s2, func: () => this.getApiKey({ key: t4 }, i3), validate: (e13) => {
            for (let t5 of Object.keys(r4)) {
              let a5 = r4[t5], n5 = e13[t5];
              if (Array.isArray(a5) && Array.isArray(n5)) {
                if (a5.length !== n5.length || a5.some((e14, t6) => e14 !== n5[t6])) return false;
              } else if (a5 !== n5) return false;
            }
            return true;
          } });
        }
        return W({ ...s2, func: () => this.getApiKey({ key: t4 }, i3).catch((e13) => {
          if (404 !== e13.status) throw e13;
        }), validate: (t5) => "add" === e12 ? void 0 !== t5 : void 0 === t5 });
      }, browseObjects({ indexName: e12, browseParams: t4, ...r4 }, a4) {
        return W({ func: (r5) => this.browse({ indexName: e12, browseParams: { cursor: r5 ? r5.cursor : void 0, hitsPerPage: 1e3, ...t4 } }, a4), validate: (e13) => void 0 === e13.cursor, ...r4 });
      }, browseRules({ indexName: e12, searchRulesParams: t4, ...r4 }, a4) {
        let n4 = { ...t4, hitsPerPage: t4?.hitsPerPage || 1e3 };
        return W({ func: (t5) => this.searchRules({ indexName: e12, searchRulesParams: { ...n4, page: t5 ? t5.page + 1 : n4.page || 0 } }, a4), validate: (e13) => e13.hits.length < n4.hitsPerPage, ...r4 });
      }, browseSynonyms({ indexName: e12, searchSynonymsParams: t4, ...r4 }, a4) {
        let n4 = { ...t4, page: t4?.page || 0, hitsPerPage: 1e3 };
        return W({ func: (t5) => {
          let r5 = this.searchSynonyms({ indexName: e12, searchSynonymsParams: { ...n4, page: n4.page } }, a4);
          return n4.page += 1, r5;
        }, validate: (e13) => e13.hits.length < n4.hitsPerPage, ...r4 });
      }, async chunkedBatch({ indexName: e12, objects: t4, action: r4 = "addObject", waitForTasks: a4, batchSize: n4 = 1e3, maxRetries: i3 = 100 }, o3) {
        let s2 = [], c2 = [];
        for (let [a5, i4] of t4.entries()) s2.push({ action: r4, body: i4 }), (s2.length === n4 || a5 === t4.length - 1) && (c2.push(await this.batch({ indexName: e12, batchWriteParams: { requests: s2 } }, o3)), s2 = []);
        if (a4) for (let t5 of c2) await this.waitForTask({ indexName: e12, taskID: t5.taskID, maxRetries: i3 });
        return c2;
      }, async saveObjects({ indexName: e12, objects: t4, waitForTasks: r4, batchSize: a4, maxRetries: n4 }, i3) {
        return await this.chunkedBatch({ indexName: e12, objects: t4, action: "addObject", waitForTasks: r4, batchSize: a4, maxRetries: n4 }, i3);
      }, async deleteObjects({ indexName: e12, objectIDs: t4, waitForTasks: r4, batchSize: a4, maxRetries: n4 }, i3) {
        return await this.chunkedBatch({ indexName: e12, objects: t4.map((e13) => ({ objectID: e13 })), action: "deleteObject", waitForTasks: r4, batchSize: a4, maxRetries: n4 }, i3);
      }, async partialUpdateObjects({ indexName: e12, objects: t4, createIfNotExists: r4, waitForTasks: a4, batchSize: n4, maxRetries: i3 }, o3) {
        return await this.chunkedBatch({ indexName: e12, objects: t4, action: r4 ? "partialUpdateObject" : "partialUpdateObjectNoCreate", batchSize: n4, waitForTasks: a4, maxRetries: i3 }, o3);
      }, async replaceAllObjects({ indexName: e12, objects: t4, batchSize: r4, scopes: a4, maxRetries: n4 = 800 }, i3) {
        let o3 = Math.floor(1e6 * Math.random()) + 1e5, s2 = `${e12}_tmp_${o3}`;
        void 0 === a4 && (a4 = ["settings", "rules", "synonyms"]);
        try {
          let o4 = await this.operationIndex({ indexName: e12, operationIndexParams: { operation: "copy", destination: s2, scope: a4 } }, i3), c2 = await this.chunkedBatch({ indexName: s2, objects: t4, waitForTasks: true, batchSize: r4, maxRetries: n4 }, i3);
          await this.waitForTask({ indexName: s2, taskID: o4.taskID, maxRetries: n4 }), o4 = await this.operationIndex({ indexName: e12, operationIndexParams: { operation: "copy", destination: s2, scope: a4 } }, i3), await this.waitForTask({ indexName: s2, taskID: o4.taskID, maxRetries: n4 });
          let u2 = await this.operationIndex({ indexName: s2, operationIndexParams: { operation: "move", destination: e12 } }, i3);
          return await this.waitForTask({ indexName: s2, taskID: u2.taskID, maxRetries: n4 }), { copyOperationResponse: o4, batchResponses: c2, moveOperationResponse: u2 };
        } catch (e13) {
          throw await this.deleteIndex({ indexName: s2 }), e13;
        }
      }, async indexExists({ indexName: e12 }) {
        try {
          await this.getSettings({ indexName: e12 });
        } catch (e13) {
          if (e13 instanceof G && 404 === e13.status) return false;
          throw e13;
        }
        return true;
      }, searchForHits(e12, t4) {
        return this.search(e12, t4);
      }, searchForFacets(e12, t4) {
        return this.search(e12, t4);
      }, addApiKey: (e12, t4) => (et("apiKey", "addApiKey", e12), et("apiKey.acl", "addApiKey", e12.acl), o2.request({ method: "POST", path: "/1/keys", queryParameters: {}, headers: {}, data: e12 }, t4)), addApiKeyWithHTTPInfo: (e12, t4) => (et("apiKey", "addApiKeyWithHTTPInfo", e12), et("apiKey.acl", "addApiKeyWithHTTPInfo", e12.acl), o2.requestWithHttpInfo({ method: "POST", path: "/1/keys", queryParameters: {}, headers: {}, data: e12 }, t4)), addOrUpdateObject({ indexName: e12, objectID: t4, body: r4 }, a4) {
        et("indexName", "addOrUpdateObject", e12), et("objectID", "addOrUpdateObject", t4), et("body", "addOrUpdateObject", r4);
        let n4 = "/1/indexes/{indexName}/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4));
        return o2.request({ method: "PUT", path: n4, queryParameters: {}, headers: {}, data: r4 }, a4);
      }, addOrUpdateObjectWithHTTPInfo({ indexName: e12, objectID: t4, body: r4 }, a4) {
        et("indexName", "addOrUpdateObjectWithHTTPInfo", e12), et("objectID", "addOrUpdateObjectWithHTTPInfo", t4), et("body", "addOrUpdateObjectWithHTTPInfo", r4);
        let n4 = "/1/indexes/{indexName}/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4));
        return o2.requestWithHttpInfo({ method: "PUT", path: n4, queryParameters: {}, headers: {}, data: r4 }, a4);
      }, appendSource: (e12, t4) => (et("source", "appendSource", e12), et("source.source", "appendSource", e12.source), o2.request({ method: "POST", path: "/1/security/sources/append", queryParameters: {}, headers: {}, data: e12 }, t4)), appendSourceWithHTTPInfo: (e12, t4) => (et("source", "appendSourceWithHTTPInfo", e12), et("source.source", "appendSourceWithHTTPInfo", e12.source), o2.requestWithHttpInfo({ method: "POST", path: "/1/security/sources/append", queryParameters: {}, headers: {}, data: e12 }, t4)), assignUserId({ xAlgoliaUserID: e12, assignUserIdParams: t4 }, r4) {
        et("xAlgoliaUserID", "assignUserId", e12), et("assignUserIdParams", "assignUserId", t4), et("assignUserIdParams.cluster", "assignUserId", t4.cluster);
        let a4 = {};
        return void 0 !== e12 && (a4["X-Algolia-User-ID"] = e12.toString()), o2.request({ method: "POST", path: "/1/clusters/mapping", queryParameters: {}, headers: a4, data: t4 }, r4);
      }, assignUserIdWithHTTPInfo({ xAlgoliaUserID: e12, assignUserIdParams: t4 }, r4) {
        et("xAlgoliaUserID", "assignUserIdWithHTTPInfo", e12), et("assignUserIdParams", "assignUserIdWithHTTPInfo", t4), et("assignUserIdParams.cluster", "assignUserIdWithHTTPInfo", t4.cluster);
        let a4 = {};
        return void 0 !== e12 && (a4["X-Algolia-User-ID"] = e12.toString()), o2.requestWithHttpInfo({ method: "POST", path: "/1/clusters/mapping", queryParameters: {}, headers: a4, data: t4 }, r4);
      }, batch({ indexName: e12, batchWriteParams: t4 }, r4) {
        et("indexName", "batch", e12), et("batchWriteParams", "batch", t4), et("batchWriteParams.requests", "batch", t4.requests);
        let a4 = "/1/indexes/{indexName}/batch".replace("{indexName}", encodeURIComponent(e12));
        return o2.request({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, batchWithHTTPInfo({ indexName: e12, batchWriteParams: t4 }, r4) {
        et("indexName", "batchWithHTTPInfo", e12), et("batchWriteParams", "batchWithHTTPInfo", t4), et("batchWriteParams.requests", "batchWithHTTPInfo", t4.requests);
        let a4 = "/1/indexes/{indexName}/batch".replace("{indexName}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, batchAssignUserIds({ xAlgoliaUserID: e12, batchAssignUserIdsParams: t4 }, r4) {
        et("xAlgoliaUserID", "batchAssignUserIds", e12), et("batchAssignUserIdsParams", "batchAssignUserIds", t4), et("batchAssignUserIdsParams.cluster", "batchAssignUserIds", t4.cluster), et("batchAssignUserIdsParams.users", "batchAssignUserIds", t4.users);
        let a4 = {};
        return void 0 !== e12 && (a4["X-Algolia-User-ID"] = e12.toString()), o2.request({ method: "POST", path: "/1/clusters/mapping/batch", queryParameters: {}, headers: a4, data: t4 }, r4);
      }, batchAssignUserIdsWithHTTPInfo({ xAlgoliaUserID: e12, batchAssignUserIdsParams: t4 }, r4) {
        et("xAlgoliaUserID", "batchAssignUserIdsWithHTTPInfo", e12), et("batchAssignUserIdsParams", "batchAssignUserIdsWithHTTPInfo", t4), et("batchAssignUserIdsParams.cluster", "batchAssignUserIdsWithHTTPInfo", t4.cluster), et("batchAssignUserIdsParams.users", "batchAssignUserIdsWithHTTPInfo", t4.users);
        let a4 = {};
        return void 0 !== e12 && (a4["X-Algolia-User-ID"] = e12.toString()), o2.requestWithHttpInfo({ method: "POST", path: "/1/clusters/mapping/batch", queryParameters: {}, headers: a4, data: t4 }, r4);
      }, batchDictionaryEntries({ dictionaryName: e12, batchDictionaryEntriesParams: t4 }, r4) {
        et("dictionaryName", "batchDictionaryEntries", e12), et("batchDictionaryEntriesParams", "batchDictionaryEntries", t4), et("batchDictionaryEntriesParams.requests", "batchDictionaryEntries", t4.requests);
        let a4 = "/1/dictionaries/{dictionaryName}/batch".replace("{dictionaryName}", encodeURIComponent(e12));
        return o2.request({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, batchDictionaryEntriesWithHTTPInfo({ dictionaryName: e12, batchDictionaryEntriesParams: t4 }, r4) {
        et("dictionaryName", "batchDictionaryEntriesWithHTTPInfo", e12), et("batchDictionaryEntriesParams", "batchDictionaryEntriesWithHTTPInfo", t4), et("batchDictionaryEntriesParams.requests", "batchDictionaryEntriesWithHTTPInfo", t4.requests);
        let a4 = "/1/dictionaries/{dictionaryName}/batch".replace("{dictionaryName}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, browse({ indexName: e12, browseParams: t4 }, r4) {
        et("indexName", "browse", e12);
        let a4 = "/1/indexes/{indexName}/browse".replace("{indexName}", encodeURIComponent(e12));
        return o2.request({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 || {}, useReadTransporter: true }, r4);
      }, browseWithHTTPInfo({ indexName: e12, browseParams: t4 }, r4) {
        et("indexName", "browseWithHTTPInfo", e12);
        let a4 = "/1/indexes/{indexName}/browse".replace("{indexName}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 || {}, useReadTransporter: true }, r4);
      }, clearObjects({ indexName: e12 }, t4) {
        et("indexName", "clearObjects", e12);
        let r4 = "/1/indexes/{indexName}/clear".replace("{indexName}", encodeURIComponent(e12));
        return o2.request({ method: "POST", path: r4, queryParameters: {}, headers: {} }, t4);
      }, clearObjectsWithHTTPInfo({ indexName: e12 }, t4) {
        et("indexName", "clearObjectsWithHTTPInfo", e12);
        let r4 = "/1/indexes/{indexName}/clear".replace("{indexName}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "POST", path: r4, queryParameters: {}, headers: {} }, t4);
      }, clearRules({ indexName: e12, forwardToReplicas: t4 }, r4) {
        et("indexName", "clearRules", e12);
        let a4 = "/1/indexes/{indexName}/rules/clear".replace("{indexName}", encodeURIComponent(e12)), n4 = {};
        return void 0 !== t4 && (n4.forwardToReplicas = t4.toString()), o2.request({ method: "POST", path: a4, queryParameters: n4, headers: {} }, r4);
      }, clearRulesWithHTTPInfo({ indexName: e12, forwardToReplicas: t4 }, r4) {
        et("indexName", "clearRulesWithHTTPInfo", e12);
        let a4 = "/1/indexes/{indexName}/rules/clear".replace("{indexName}", encodeURIComponent(e12)), n4 = {};
        return void 0 !== t4 && (n4.forwardToReplicas = t4.toString()), o2.requestWithHttpInfo({ method: "POST", path: a4, queryParameters: n4, headers: {} }, r4);
      }, clearSynonyms({ indexName: e12, forwardToReplicas: t4 }, r4) {
        et("indexName", "clearSynonyms", e12);
        let a4 = "/1/indexes/{indexName}/synonyms/clear".replace("{indexName}", encodeURIComponent(e12)), n4 = {};
        return void 0 !== t4 && (n4.forwardToReplicas = t4.toString()), o2.request({ method: "POST", path: a4, queryParameters: n4, headers: {} }, r4);
      }, clearSynonymsWithHTTPInfo({ indexName: e12, forwardToReplicas: t4 }, r4) {
        et("indexName", "clearSynonymsWithHTTPInfo", e12);
        let a4 = "/1/indexes/{indexName}/synonyms/clear".replace("{indexName}", encodeURIComponent(e12)), n4 = {};
        return void 0 !== t4 && (n4.forwardToReplicas = t4.toString()), o2.requestWithHttpInfo({ method: "POST", path: a4, queryParameters: n4, headers: {} }, r4);
      }, customDelete({ path: e12, parameters: t4 }, r4) {
        et("path", "customDelete", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return o2.request({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customDeleteWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customDeleteWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return o2.requestWithHttpInfo({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGet({ path: e12, parameters: t4 }, r4) {
        et("path", "customGet", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return o2.request({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGetWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customGetWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return o2.requestWithHttpInfo({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customPost({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPost", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return o2.request({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPostWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPostWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return o2.requestWithHttpInfo({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPut({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPut", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return o2.request({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPutWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPutWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return o2.requestWithHttpInfo({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, deleteApiKey({ key: e12 }, t4) {
        et("key", "deleteApiKey", e12);
        let r4 = "/1/keys/{key}".replace("{key}", encodeURIComponent(e12));
        return o2.request({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteApiKeyWithHTTPInfo({ key: e12 }, t4) {
        et("key", "deleteApiKeyWithHTTPInfo", e12);
        let r4 = "/1/keys/{key}".replace("{key}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteBy({ indexName: e12, deleteByParams: t4 }, r4) {
        et("indexName", "deleteBy", e12), et("deleteByParams", "deleteBy", t4);
        let a4 = "/1/indexes/{indexName}/deleteByQuery".replace("{indexName}", encodeURIComponent(e12));
        return o2.request({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, deleteByWithHTTPInfo({ indexName: e12, deleteByParams: t4 }, r4) {
        et("indexName", "deleteByWithHTTPInfo", e12), et("deleteByParams", "deleteByWithHTTPInfo", t4);
        let a4 = "/1/indexes/{indexName}/deleteByQuery".replace("{indexName}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, deleteIndex({ indexName: e12 }, t4) {
        et("indexName", "deleteIndex", e12);
        let r4 = "/1/indexes/{indexName}".replace("{indexName}", encodeURIComponent(e12));
        return o2.request({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteIndexWithHTTPInfo({ indexName: e12 }, t4) {
        et("indexName", "deleteIndexWithHTTPInfo", e12);
        let r4 = "/1/indexes/{indexName}".replace("{indexName}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteObject({ indexName: e12, objectID: t4 }, r4) {
        et("indexName", "deleteObject", e12), et("objectID", "deleteObject", t4);
        let a4 = "/1/indexes/{indexName}/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4));
        return o2.request({ method: "DELETE", path: a4, queryParameters: {}, headers: {} }, r4);
      }, deleteObjectWithHTTPInfo({ indexName: e12, objectID: t4 }, r4) {
        et("indexName", "deleteObjectWithHTTPInfo", e12), et("objectID", "deleteObjectWithHTTPInfo", t4);
        let a4 = "/1/indexes/{indexName}/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4));
        return o2.requestWithHttpInfo({ method: "DELETE", path: a4, queryParameters: {}, headers: {} }, r4);
      }, deleteRule({ indexName: e12, objectID: t4, forwardToReplicas: r4 }, a4) {
        et("indexName", "deleteRule", e12), et("objectID", "deleteRule", t4);
        let n4 = "/1/indexes/{indexName}/rules/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4)), i3 = {};
        return void 0 !== r4 && (i3.forwardToReplicas = r4.toString()), o2.request({ method: "DELETE", path: n4, queryParameters: i3, headers: {} }, a4);
      }, deleteRuleWithHTTPInfo({ indexName: e12, objectID: t4, forwardToReplicas: r4 }, a4) {
        et("indexName", "deleteRuleWithHTTPInfo", e12), et("objectID", "deleteRuleWithHTTPInfo", t4);
        let n4 = "/1/indexes/{indexName}/rules/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4)), i3 = {};
        return void 0 !== r4 && (i3.forwardToReplicas = r4.toString()), o2.requestWithHttpInfo({ method: "DELETE", path: n4, queryParameters: i3, headers: {} }, a4);
      }, deleteSource({ source: e12 }, t4) {
        et("source", "deleteSource", e12);
        let r4 = "/1/security/sources/{source}".replace("{source}", encodeURIComponent(e12));
        return o2.request({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteSourceWithHTTPInfo({ source: e12 }, t4) {
        et("source", "deleteSourceWithHTTPInfo", e12);
        let r4 = "/1/security/sources/{source}".replace("{source}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteSynonym({ indexName: e12, objectID: t4, forwardToReplicas: r4 }, a4) {
        et("indexName", "deleteSynonym", e12), et("objectID", "deleteSynonym", t4);
        let n4 = "/1/indexes/{indexName}/synonyms/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4)), i3 = {};
        return void 0 !== r4 && (i3.forwardToReplicas = r4.toString()), o2.request({ method: "DELETE", path: n4, queryParameters: i3, headers: {} }, a4);
      }, deleteSynonymWithHTTPInfo({ indexName: e12, objectID: t4, forwardToReplicas: r4 }, a4) {
        et("indexName", "deleteSynonymWithHTTPInfo", e12), et("objectID", "deleteSynonymWithHTTPInfo", t4);
        let n4 = "/1/indexes/{indexName}/synonyms/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4)), i3 = {};
        return void 0 !== r4 && (i3.forwardToReplicas = r4.toString()), o2.requestWithHttpInfo({ method: "DELETE", path: n4, queryParameters: i3, headers: {} }, a4);
      }, getApiKey({ key: e12 }, t4) {
        et("key", "getApiKey", e12);
        let r4 = "/1/keys/{key}".replace("{key}", encodeURIComponent(e12));
        return o2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getApiKeyWithHTTPInfo({ key: e12 }, t4) {
        et("key", "getApiKeyWithHTTPInfo", e12);
        let r4 = "/1/keys/{key}".replace("{key}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getAppTask({ taskID: e12 }, t4) {
        et("taskID", "getAppTask", e12);
        let r4 = "/1/task/{taskID}".replace("{taskID}", encodeURIComponent(e12));
        return o2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getAppTaskWithHTTPInfo({ taskID: e12 }, t4) {
        et("taskID", "getAppTaskWithHTTPInfo", e12);
        let r4 = "/1/task/{taskID}".replace("{taskID}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getDictionaryLanguages: (e12) => o2.request({ method: "GET", path: "/1/dictionaries/*/languages", queryParameters: {}, headers: {} }, e12), getDictionaryLanguagesWithHTTPInfo: (e12) => o2.requestWithHttpInfo({ method: "GET", path: "/1/dictionaries/*/languages", queryParameters: {}, headers: {} }, e12), getDictionarySettings: (e12) => o2.request({ method: "GET", path: "/1/dictionaries/*/settings", queryParameters: {}, headers: {} }, e12), getDictionarySettingsWithHTTPInfo: (e12) => o2.requestWithHttpInfo({ method: "GET", path: "/1/dictionaries/*/settings", queryParameters: {}, headers: {} }, e12), getLogs({ offset: e12, length: t4, indexName: r4, type: a4 } = {}, n4) {
        let i3 = {};
        return void 0 !== e12 && (i3.offset = e12.toString()), void 0 !== t4 && (i3.length = t4.toString()), void 0 !== r4 && (i3.indexName = r4.toString()), void 0 !== a4 && (i3.type = a4.toString()), o2.request({ method: "GET", path: "/1/logs", queryParameters: i3, headers: {} }, n4);
      }, getLogsWithHTTPInfo({ offset: e12, length: t4, indexName: r4, type: a4 } = {}, n4) {
        let i3 = {};
        return void 0 !== e12 && (i3.offset = e12.toString()), void 0 !== t4 && (i3.length = t4.toString()), void 0 !== r4 && (i3.indexName = r4.toString()), void 0 !== a4 && (i3.type = a4.toString()), o2.requestWithHttpInfo({ method: "GET", path: "/1/logs", queryParameters: i3, headers: {} }, n4);
      }, getObject({ indexName: e12, objectID: t4, attributesToRetrieve: r4 }, a4) {
        et("indexName", "getObject", e12), et("objectID", "getObject", t4);
        let n4 = "/1/indexes/{indexName}/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4)), i3 = {};
        return void 0 !== r4 && (i3.attributesToRetrieve = r4.toString()), o2.request({ method: "GET", path: n4, queryParameters: i3, headers: {} }, a4);
      }, getObjectWithHTTPInfo({ indexName: e12, objectID: t4, attributesToRetrieve: r4 }, a4) {
        et("indexName", "getObjectWithHTTPInfo", e12), et("objectID", "getObjectWithHTTPInfo", t4);
        let n4 = "/1/indexes/{indexName}/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4)), i3 = {};
        return void 0 !== r4 && (i3.attributesToRetrieve = r4.toString()), o2.requestWithHttpInfo({ method: "GET", path: n4, queryParameters: i3, headers: {} }, a4);
      }, getObjects: (e12, t4) => (et("getObjectsParams", "getObjects", e12), et("getObjectsParams.requests", "getObjects", e12.requests), o2.request({ method: "POST", path: "/1/indexes/*/objects", queryParameters: {}, headers: {}, data: e12, useReadTransporter: true, cacheable: true }, t4)), getObjectsWithHTTPInfo: (e12, t4) => (et("getObjectsParams", "getObjectsWithHTTPInfo", e12), et("getObjectsParams.requests", "getObjectsWithHTTPInfo", e12.requests), o2.requestWithHttpInfo({ method: "POST", path: "/1/indexes/*/objects", queryParameters: {}, headers: {}, data: e12, useReadTransporter: true, cacheable: true }, t4)), getRule({ indexName: e12, objectID: t4 }, r4) {
        et("indexName", "getRule", e12), et("objectID", "getRule", t4);
        let a4 = "/1/indexes/{indexName}/rules/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4));
        return o2.request({ method: "GET", path: a4, queryParameters: {}, headers: {} }, r4);
      }, getRuleWithHTTPInfo({ indexName: e12, objectID: t4 }, r4) {
        et("indexName", "getRuleWithHTTPInfo", e12), et("objectID", "getRuleWithHTTPInfo", t4);
        let a4 = "/1/indexes/{indexName}/rules/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4));
        return o2.requestWithHttpInfo({ method: "GET", path: a4, queryParameters: {}, headers: {} }, r4);
      }, getSettings({ indexName: e12, getVersion: t4 }, r4) {
        et("indexName", "getSettings", e12);
        let a4 = "/1/indexes/{indexName}/settings".replace("{indexName}", encodeURIComponent(e12)), n4 = {};
        return void 0 !== t4 && (n4.getVersion = t4.toString()), o2.request({ method: "GET", path: a4, queryParameters: n4, headers: {} }, r4);
      }, getSettingsWithHTTPInfo({ indexName: e12, getVersion: t4 }, r4) {
        et("indexName", "getSettingsWithHTTPInfo", e12);
        let a4 = "/1/indexes/{indexName}/settings".replace("{indexName}", encodeURIComponent(e12)), n4 = {};
        return void 0 !== t4 && (n4.getVersion = t4.toString()), o2.requestWithHttpInfo({ method: "GET", path: a4, queryParameters: n4, headers: {} }, r4);
      }, getSources: (e12) => o2.request({ method: "GET", path: "/1/security/sources", queryParameters: {}, headers: {} }, e12), getSourcesWithHTTPInfo: (e12) => o2.requestWithHttpInfo({ method: "GET", path: "/1/security/sources", queryParameters: {}, headers: {} }, e12), getSynonym({ indexName: e12, objectID: t4 }, r4) {
        et("indexName", "getSynonym", e12), et("objectID", "getSynonym", t4);
        let a4 = "/1/indexes/{indexName}/synonyms/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4));
        return o2.request({ method: "GET", path: a4, queryParameters: {}, headers: {} }, r4);
      }, getSynonymWithHTTPInfo({ indexName: e12, objectID: t4 }, r4) {
        et("indexName", "getSynonymWithHTTPInfo", e12), et("objectID", "getSynonymWithHTTPInfo", t4);
        let a4 = "/1/indexes/{indexName}/synonyms/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4));
        return o2.requestWithHttpInfo({ method: "GET", path: a4, queryParameters: {}, headers: {} }, r4);
      }, getTask({ indexName: e12, taskID: t4 }, r4) {
        et("indexName", "getTask", e12), et("taskID", "getTask", t4);
        let a4 = "/1/indexes/{indexName}/task/{taskID}".replace("{indexName}", encodeURIComponent(e12)).replace("{taskID}", encodeURIComponent(t4));
        return o2.request({ method: "GET", path: a4, queryParameters: {}, headers: {} }, r4);
      }, getTaskWithHTTPInfo({ indexName: e12, taskID: t4 }, r4) {
        et("indexName", "getTaskWithHTTPInfo", e12), et("taskID", "getTaskWithHTTPInfo", t4);
        let a4 = "/1/indexes/{indexName}/task/{taskID}".replace("{indexName}", encodeURIComponent(e12)).replace("{taskID}", encodeURIComponent(t4));
        return o2.requestWithHttpInfo({ method: "GET", path: a4, queryParameters: {}, headers: {} }, r4);
      }, getTopUserIds: (e12) => o2.request({ method: "GET", path: "/1/clusters/mapping/top", queryParameters: {}, headers: {} }, e12), getTopUserIdsWithHTTPInfo: (e12) => o2.requestWithHttpInfo({ method: "GET", path: "/1/clusters/mapping/top", queryParameters: {}, headers: {} }, e12), getUserId({ userID: e12 }, t4) {
        et("userID", "getUserId", e12);
        let r4 = "/1/clusters/mapping/{userID}".replace("{userID}", encodeURIComponent(e12));
        return o2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getUserIdWithHTTPInfo({ userID: e12 }, t4) {
        et("userID", "getUserIdWithHTTPInfo", e12);
        let r4 = "/1/clusters/mapping/{userID}".replace("{userID}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, hasPendingMappings({ getClusters: e12 } = {}, t4) {
        let r4 = {};
        return void 0 !== e12 && (r4.getClusters = e12.toString()), o2.request({ method: "GET", path: "/1/clusters/mapping/pending", queryParameters: r4, headers: {} }, t4);
      }, hasPendingMappingsWithHTTPInfo({ getClusters: e12 } = {}, t4) {
        let r4 = {};
        return void 0 !== e12 && (r4.getClusters = e12.toString()), o2.requestWithHttpInfo({ method: "GET", path: "/1/clusters/mapping/pending", queryParameters: r4, headers: {} }, t4);
      }, listApiKeys: (e12) => o2.request({ method: "GET", path: "/1/keys", queryParameters: {}, headers: {} }, e12), listApiKeysWithHTTPInfo: (e12) => o2.requestWithHttpInfo({ method: "GET", path: "/1/keys", queryParameters: {}, headers: {} }, e12), listClusters: (e12) => o2.request({ method: "GET", path: "/1/clusters", queryParameters: {}, headers: {} }, e12), listClustersWithHTTPInfo: (e12) => o2.requestWithHttpInfo({ method: "GET", path: "/1/clusters", queryParameters: {}, headers: {} }, e12), listIndices({ page: e12, hitsPerPage: t4 } = {}, r4) {
        let a4 = {};
        return void 0 !== e12 && (a4.page = e12.toString()), void 0 !== t4 && (a4.hitsPerPage = t4.toString()), o2.request({ method: "GET", path: "/1/indexes", queryParameters: a4, headers: {} }, r4);
      }, listIndicesWithHTTPInfo({ page: e12, hitsPerPage: t4 } = {}, r4) {
        let a4 = {};
        return void 0 !== e12 && (a4.page = e12.toString()), void 0 !== t4 && (a4.hitsPerPage = t4.toString()), o2.requestWithHttpInfo({ method: "GET", path: "/1/indexes", queryParameters: a4, headers: {} }, r4);
      }, listUserIds({ page: e12, hitsPerPage: t4 } = {}, r4) {
        let a4 = {};
        return void 0 !== e12 && (a4.page = e12.toString()), void 0 !== t4 && (a4.hitsPerPage = t4.toString()), o2.request({ method: "GET", path: "/1/clusters/mapping", queryParameters: a4, headers: {} }, r4);
      }, listUserIdsWithHTTPInfo({ page: e12, hitsPerPage: t4 } = {}, r4) {
        let a4 = {};
        return void 0 !== e12 && (a4.page = e12.toString()), void 0 !== t4 && (a4.hitsPerPage = t4.toString()), o2.requestWithHttpInfo({ method: "GET", path: "/1/clusters/mapping", queryParameters: a4, headers: {} }, r4);
      }, multipleBatch: (e12, t4) => (et("batchParams", "multipleBatch", e12), et("batchParams.requests", "multipleBatch", e12.requests), o2.request({ method: "POST", path: "/1/indexes/*/batch", queryParameters: {}, headers: {}, data: e12 }, t4)), multipleBatchWithHTTPInfo: (e12, t4) => (et("batchParams", "multipleBatchWithHTTPInfo", e12), et("batchParams.requests", "multipleBatchWithHTTPInfo", e12.requests), o2.requestWithHttpInfo({ method: "POST", path: "/1/indexes/*/batch", queryParameters: {}, headers: {}, data: e12 }, t4)), operationIndex({ indexName: e12, operationIndexParams: t4 }, r4) {
        et("indexName", "operationIndex", e12), et("operationIndexParams", "operationIndex", t4), et("operationIndexParams.operation", "operationIndex", t4.operation), et("operationIndexParams.destination", "operationIndex", t4.destination);
        let a4 = "/1/indexes/{indexName}/operation".replace("{indexName}", encodeURIComponent(e12));
        return o2.request({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, operationIndexWithHTTPInfo({ indexName: e12, operationIndexParams: t4 }, r4) {
        et("indexName", "operationIndexWithHTTPInfo", e12), et("operationIndexParams", "operationIndexWithHTTPInfo", t4), et("operationIndexParams.operation", "operationIndexWithHTTPInfo", t4.operation), et("operationIndexParams.destination", "operationIndexWithHTTPInfo", t4.destination);
        let a4 = "/1/indexes/{indexName}/operation".replace("{indexName}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, partialUpdateObject({ indexName: e12, objectID: t4, attributesToUpdate: r4, createIfNotExists: a4 }, n4) {
        et("indexName", "partialUpdateObject", e12), et("objectID", "partialUpdateObject", t4), et("attributesToUpdate", "partialUpdateObject", r4);
        let i3 = "/1/indexes/{indexName}/{objectID}/partial".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4)), s2 = {};
        return void 0 !== a4 && (s2.createIfNotExists = a4.toString()), o2.request({ method: "POST", path: i3, queryParameters: s2, headers: {}, data: r4 }, n4);
      }, partialUpdateObjectWithHTTPInfo({ indexName: e12, objectID: t4, attributesToUpdate: r4, createIfNotExists: a4 }, n4) {
        et("indexName", "partialUpdateObjectWithHTTPInfo", e12), et("objectID", "partialUpdateObjectWithHTTPInfo", t4), et("attributesToUpdate", "partialUpdateObjectWithHTTPInfo", r4);
        let i3 = "/1/indexes/{indexName}/{objectID}/partial".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4)), s2 = {};
        return void 0 !== a4 && (s2.createIfNotExists = a4.toString()), o2.requestWithHttpInfo({ method: "POST", path: i3, queryParameters: s2, headers: {}, data: r4 }, n4);
      }, removeUserId({ userID: e12 }, t4) {
        et("userID", "removeUserId", e12);
        let r4 = "/1/clusters/mapping/{userID}".replace("{userID}", encodeURIComponent(e12));
        return o2.request({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, removeUserIdWithHTTPInfo({ userID: e12 }, t4) {
        et("userID", "removeUserIdWithHTTPInfo", e12);
        let r4 = "/1/clusters/mapping/{userID}".replace("{userID}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, replaceSources: ({ source: e12 }, t4) => (et("source", "replaceSources", e12), o2.request({ method: "PUT", path: "/1/security/sources", queryParameters: {}, headers: {}, data: e12 }, t4)), replaceSourcesWithHTTPInfo: ({ source: e12 }, t4) => (et("source", "replaceSourcesWithHTTPInfo", e12), o2.requestWithHttpInfo({ method: "PUT", path: "/1/security/sources", queryParameters: {}, headers: {}, data: e12 }, t4)), restoreApiKey({ key: e12 }, t4) {
        et("key", "restoreApiKey", e12);
        let r4 = "/1/keys/{key}/restore".replace("{key}", encodeURIComponent(e12));
        return o2.request({ method: "POST", path: r4, queryParameters: {}, headers: {} }, t4);
      }, restoreApiKeyWithHTTPInfo({ key: e12 }, t4) {
        et("key", "restoreApiKeyWithHTTPInfo", e12);
        let r4 = "/1/keys/{key}/restore".replace("{key}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "POST", path: r4, queryParameters: {}, headers: {} }, t4);
      }, saveObject({ indexName: e12, body: t4 }, r4) {
        et("indexName", "saveObject", e12), et("body", "saveObject", t4);
        let a4 = "/1/indexes/{indexName}".replace("{indexName}", encodeURIComponent(e12));
        return o2.request({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, saveObjectWithHTTPInfo({ indexName: e12, body: t4 }, r4) {
        et("indexName", "saveObjectWithHTTPInfo", e12), et("body", "saveObjectWithHTTPInfo", t4);
        let a4 = "/1/indexes/{indexName}".replace("{indexName}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, saveRule({ indexName: e12, objectID: t4, rule: r4, forwardToReplicas: a4 }, n4) {
        et("indexName", "saveRule", e12), et("objectID", "saveRule", t4), et("rule", "saveRule", r4), et("rule.objectID", "saveRule", r4.objectID), et("rule.consequence", "saveRule", r4.consequence);
        let i3 = "/1/indexes/{indexName}/rules/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4)), s2 = {};
        return void 0 !== a4 && (s2.forwardToReplicas = a4.toString()), o2.request({ method: "PUT", path: i3, queryParameters: s2, headers: {}, data: r4 }, n4);
      }, saveRuleWithHTTPInfo({ indexName: e12, objectID: t4, rule: r4, forwardToReplicas: a4 }, n4) {
        et("indexName", "saveRuleWithHTTPInfo", e12), et("objectID", "saveRuleWithHTTPInfo", t4), et("rule", "saveRuleWithHTTPInfo", r4), et("rule.objectID", "saveRuleWithHTTPInfo", r4.objectID), et("rule.consequence", "saveRuleWithHTTPInfo", r4.consequence);
        let i3 = "/1/indexes/{indexName}/rules/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4)), s2 = {};
        return void 0 !== a4 && (s2.forwardToReplicas = a4.toString()), o2.requestWithHttpInfo({ method: "PUT", path: i3, queryParameters: s2, headers: {}, data: r4 }, n4);
      }, saveRules({ indexName: e12, rules: t4, forwardToReplicas: r4, clearExistingRules: a4 }, n4) {
        et("indexName", "saveRules", e12), et("rules", "saveRules", t4);
        let i3 = "/1/indexes/{indexName}/rules/batch".replace("{indexName}", encodeURIComponent(e12)), s2 = {};
        return void 0 !== r4 && (s2.forwardToReplicas = r4.toString()), void 0 !== a4 && (s2.clearExistingRules = a4.toString()), o2.request({ method: "POST", path: i3, queryParameters: s2, headers: {}, data: t4 }, n4);
      }, saveRulesWithHTTPInfo({ indexName: e12, rules: t4, forwardToReplicas: r4, clearExistingRules: a4 }, n4) {
        et("indexName", "saveRulesWithHTTPInfo", e12), et("rules", "saveRulesWithHTTPInfo", t4);
        let i3 = "/1/indexes/{indexName}/rules/batch".replace("{indexName}", encodeURIComponent(e12)), s2 = {};
        return void 0 !== r4 && (s2.forwardToReplicas = r4.toString()), void 0 !== a4 && (s2.clearExistingRules = a4.toString()), o2.requestWithHttpInfo({ method: "POST", path: i3, queryParameters: s2, headers: {}, data: t4 }, n4);
      }, saveSynonym({ indexName: e12, objectID: t4, synonymHit: r4, forwardToReplicas: a4 }, n4) {
        et("indexName", "saveSynonym", e12), et("objectID", "saveSynonym", t4), et("synonymHit", "saveSynonym", r4), et("synonymHit.objectID", "saveSynonym", r4.objectID), et("synonymHit.type", "saveSynonym", r4.type);
        let i3 = "/1/indexes/{indexName}/synonyms/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4)), s2 = {};
        return void 0 !== a4 && (s2.forwardToReplicas = a4.toString()), o2.request({ method: "PUT", path: i3, queryParameters: s2, headers: {}, data: r4 }, n4);
      }, saveSynonymWithHTTPInfo({ indexName: e12, objectID: t4, synonymHit: r4, forwardToReplicas: a4 }, n4) {
        et("indexName", "saveSynonymWithHTTPInfo", e12), et("objectID", "saveSynonymWithHTTPInfo", t4), et("synonymHit", "saveSynonymWithHTTPInfo", r4), et("synonymHit.objectID", "saveSynonymWithHTTPInfo", r4.objectID), et("synonymHit.type", "saveSynonymWithHTTPInfo", r4.type);
        let i3 = "/1/indexes/{indexName}/synonyms/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{objectID}", encodeURIComponent(t4)), s2 = {};
        return void 0 !== a4 && (s2.forwardToReplicas = a4.toString()), o2.requestWithHttpInfo({ method: "PUT", path: i3, queryParameters: s2, headers: {}, data: r4 }, n4);
      }, saveSynonyms({ indexName: e12, synonymHit: t4, forwardToReplicas: r4, replaceExistingSynonyms: a4 }, n4) {
        et("indexName", "saveSynonyms", e12), et("synonymHit", "saveSynonyms", t4);
        let i3 = "/1/indexes/{indexName}/synonyms/batch".replace("{indexName}", encodeURIComponent(e12)), s2 = {};
        return void 0 !== r4 && (s2.forwardToReplicas = r4.toString()), void 0 !== a4 && (s2.replaceExistingSynonyms = a4.toString()), o2.request({ method: "POST", path: i3, queryParameters: s2, headers: {}, data: t4 }, n4);
      }, saveSynonymsWithHTTPInfo({ indexName: e12, synonymHit: t4, forwardToReplicas: r4, replaceExistingSynonyms: a4 }, n4) {
        et("indexName", "saveSynonymsWithHTTPInfo", e12), et("synonymHit", "saveSynonymsWithHTTPInfo", t4);
        let i3 = "/1/indexes/{indexName}/synonyms/batch".replace("{indexName}", encodeURIComponent(e12)), s2 = {};
        return void 0 !== r4 && (s2.forwardToReplicas = r4.toString()), void 0 !== a4 && (s2.replaceExistingSynonyms = a4.toString()), o2.requestWithHttpInfo({ method: "POST", path: i3, queryParameters: s2, headers: {}, data: t4 }, n4);
      }, search(e12, t4) {
        e12 && Array.isArray(e12) && (e12 = { requests: e12.map(({ params: e13, ...t5 }) => "facet" === t5.type ? { ...t5, ...e13, type: "facet" } : { ...t5, ...e13, facet: void 0, maxFacetHits: void 0, facetQuery: void 0 }) }), et("searchMethodParams", "search", e12), et("searchMethodParams.requests", "search", e12.requests);
        let r4 = { method: "POST", path: "/1/indexes/*/queries", queryParameters: {}, headers: {}, data: e12, useReadTransporter: true, cacheable: true };
        return o2.request(r4, t4);
      }, searchWithHTTPInfo(e12, t4) {
        e12 && Array.isArray(e12) && (e12 = { requests: e12.map(({ params: e13, ...t5 }) => "facet" === t5.type ? { ...t5, ...e13, type: "facet" } : { ...t5, ...e13, facet: void 0, maxFacetHits: void 0, facetQuery: void 0 }) }), et("searchMethodParams", "searchWithHTTPInfo", e12), et("searchMethodParams.requests", "searchWithHTTPInfo", e12.requests);
        let r4 = { method: "POST", path: "/1/indexes/*/queries", queryParameters: {}, headers: {}, data: e12, useReadTransporter: true, cacheable: true };
        return o2.requestWithHttpInfo(r4, t4);
      }, searchDictionaryEntries({ dictionaryName: e12, searchDictionaryEntriesParams: t4 }, r4) {
        et("dictionaryName", "searchDictionaryEntries", e12), et("searchDictionaryEntriesParams", "searchDictionaryEntries", t4), et("searchDictionaryEntriesParams.query", "searchDictionaryEntries", t4.query);
        let a4 = "/1/dictionaries/{dictionaryName}/search".replace("{dictionaryName}", encodeURIComponent(e12));
        return o2.request({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4, useReadTransporter: true, cacheable: true }, r4);
      }, searchDictionaryEntriesWithHTTPInfo({ dictionaryName: e12, searchDictionaryEntriesParams: t4 }, r4) {
        et("dictionaryName", "searchDictionaryEntriesWithHTTPInfo", e12), et("searchDictionaryEntriesParams", "searchDictionaryEntriesWithHTTPInfo", t4), et("searchDictionaryEntriesParams.query", "searchDictionaryEntriesWithHTTPInfo", t4.query);
        let a4 = "/1/dictionaries/{dictionaryName}/search".replace("{dictionaryName}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4, useReadTransporter: true, cacheable: true }, r4);
      }, searchForFacetValues({ indexName: e12, facetName: t4, searchForFacetValuesRequest: r4 }, a4) {
        et("indexName", "searchForFacetValues", e12), et("facetName", "searchForFacetValues", t4);
        let n4 = "/1/indexes/{indexName}/facets/{facetName}/query".replace("{indexName}", encodeURIComponent(e12)).replace("{facetName}", encodeURIComponent(t4));
        return o2.request({ method: "POST", path: n4, queryParameters: {}, headers: {}, data: r4 || {}, useReadTransporter: true, cacheable: true }, a4);
      }, searchForFacetValuesWithHTTPInfo({ indexName: e12, facetName: t4, searchForFacetValuesRequest: r4 }, a4) {
        et("indexName", "searchForFacetValuesWithHTTPInfo", e12), et("facetName", "searchForFacetValuesWithHTTPInfo", t4);
        let n4 = "/1/indexes/{indexName}/facets/{facetName}/query".replace("{indexName}", encodeURIComponent(e12)).replace("{facetName}", encodeURIComponent(t4));
        return o2.requestWithHttpInfo({ method: "POST", path: n4, queryParameters: {}, headers: {}, data: r4 || {}, useReadTransporter: true, cacheable: true }, a4);
      }, searchRules({ indexName: e12, searchRulesParams: t4 }, r4) {
        et("indexName", "searchRules", e12);
        let a4 = "/1/indexes/{indexName}/rules/search".replace("{indexName}", encodeURIComponent(e12));
        return o2.request({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 || {}, useReadTransporter: true, cacheable: true }, r4);
      }, searchRulesWithHTTPInfo({ indexName: e12, searchRulesParams: t4 }, r4) {
        et("indexName", "searchRulesWithHTTPInfo", e12);
        let a4 = "/1/indexes/{indexName}/rules/search".replace("{indexName}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 || {}, useReadTransporter: true, cacheable: true }, r4);
      }, searchSingleIndex({ indexName: e12, searchParams: t4 }, r4) {
        et("indexName", "searchSingleIndex", e12);
        let a4 = "/1/indexes/{indexName}/query".replace("{indexName}", encodeURIComponent(e12));
        return o2.request({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 || {}, useReadTransporter: true, cacheable: true }, r4);
      }, searchSingleIndexWithHTTPInfo({ indexName: e12, searchParams: t4 }, r4) {
        et("indexName", "searchSingleIndexWithHTTPInfo", e12);
        let a4 = "/1/indexes/{indexName}/query".replace("{indexName}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 || {}, useReadTransporter: true, cacheable: true }, r4);
      }, searchSynonyms({ indexName: e12, searchSynonymsParams: t4 }, r4) {
        et("indexName", "searchSynonyms", e12);
        let a4 = "/1/indexes/{indexName}/synonyms/search".replace("{indexName}", encodeURIComponent(e12));
        return o2.request({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 || {}, useReadTransporter: true, cacheable: true }, r4);
      }, searchSynonymsWithHTTPInfo({ indexName: e12, searchSynonymsParams: t4 }, r4) {
        et("indexName", "searchSynonymsWithHTTPInfo", e12);
        let a4 = "/1/indexes/{indexName}/synonyms/search".replace("{indexName}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 || {}, useReadTransporter: true, cacheable: true }, r4);
      }, searchUserIds: (e12, t4) => (et("searchUserIdsParams", "searchUserIds", e12), et("searchUserIdsParams.query", "searchUserIds", e12.query), o2.request({ method: "POST", path: "/1/clusters/mapping/search", queryParameters: {}, headers: {}, data: e12, useReadTransporter: true, cacheable: true }, t4)), searchUserIdsWithHTTPInfo: (e12, t4) => (et("searchUserIdsParams", "searchUserIdsWithHTTPInfo", e12), et("searchUserIdsParams.query", "searchUserIdsWithHTTPInfo", e12.query), o2.requestWithHttpInfo({ method: "POST", path: "/1/clusters/mapping/search", queryParameters: {}, headers: {}, data: e12, useReadTransporter: true, cacheable: true }, t4)), setDictionarySettings: (e12, t4) => (et("dictionarySettingsParams", "setDictionarySettings", e12), et("dictionarySettingsParams.disableStandardEntries", "setDictionarySettings", e12.disableStandardEntries), o2.request({ method: "PUT", path: "/1/dictionaries/*/settings", queryParameters: {}, headers: {}, data: e12 }, t4)), setDictionarySettingsWithHTTPInfo: (e12, t4) => (et("dictionarySettingsParams", "setDictionarySettingsWithHTTPInfo", e12), et("dictionarySettingsParams.disableStandardEntries", "setDictionarySettingsWithHTTPInfo", e12.disableStandardEntries), o2.requestWithHttpInfo({ method: "PUT", path: "/1/dictionaries/*/settings", queryParameters: {}, headers: {}, data: e12 }, t4)), setSettings({ indexName: e12, indexSettings: t4, forwardToReplicas: r4 }, a4) {
        et("indexName", "setSettings", e12), et("indexSettings", "setSettings", t4);
        let n4 = "/1/indexes/{indexName}/settings".replace("{indexName}", encodeURIComponent(e12)), i3 = {};
        return void 0 !== r4 && (i3.forwardToReplicas = r4.toString()), o2.request({ method: "PUT", path: n4, queryParameters: i3, headers: {}, data: t4 }, a4);
      }, setSettingsWithHTTPInfo({ indexName: e12, indexSettings: t4, forwardToReplicas: r4 }, a4) {
        et("indexName", "setSettingsWithHTTPInfo", e12), et("indexSettings", "setSettingsWithHTTPInfo", t4);
        let n4 = "/1/indexes/{indexName}/settings".replace("{indexName}", encodeURIComponent(e12)), i3 = {};
        return void 0 !== r4 && (i3.forwardToReplicas = r4.toString()), o2.requestWithHttpInfo({ method: "PUT", path: n4, queryParameters: i3, headers: {}, data: t4 }, a4);
      }, updateApiKey({ key: e12, apiKey: t4 }, r4) {
        et("key", "updateApiKey", e12), et("apiKey", "updateApiKey", t4), et("apiKey.acl", "updateApiKey", t4.acl);
        let a4 = "/1/keys/{key}".replace("{key}", encodeURIComponent(e12));
        return o2.request({ method: "PUT", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, updateApiKeyWithHTTPInfo({ key: e12, apiKey: t4 }, r4) {
        et("key", "updateApiKeyWithHTTPInfo", e12), et("apiKey", "updateApiKeyWithHTTPInfo", t4), et("apiKey.acl", "updateApiKeyWithHTTPInfo", t4.acl);
        let a4 = "/1/keys/{key}".replace("{key}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "PUT", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      } };
    })({ appId: e10, apiKey: t2, timeouts: { connect: 1e3, read: 2e3, write: 3e4 }, logger: O(), requester: ea(), algoliaAgents: [{ segment: "Browser" }], authMode: "WithinQueryParameters", responsesCache: A(), requestsCache: A({ serializable: false }), hostsCache: H({ caches: [k({ key: `${ex}-${e10}` }), A()] }), ...n2 });
  }
  e.s(["apiClientVersion", 0, ex, "searchClient", 0, ek], 18405);
  try {
    var eH = "u" > typeof window ? window : e.g;
    eH._sentryModuleMetadata = eH._sentryModuleMetadata || {}, eH._sentryModuleMetadata[new eH.Error().stack] = Object.assign({}, eH._sentryModuleMetadata[new eH.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var eA = "1.56.0", eq = ["eu", "us"];
  function eW(e10, t2, r2, a2) {
    if (!e10 || "string" != typeof e10) throw Error("`appId` is missing.");
    if (!t2 || "string" != typeof t2) throw Error("`apiKey` is missing.");
    if (!r2 || r2 && ("string" != typeof r2 || !eq.includes(r2))) throw Error(`\`region\` is required and must be one of the following: ${eq.join(", ")}`);
    let { compression: n2, ...i2 } = a2 || {};
    return (function({ appId: e11, apiKey: t3, authMode: r3, algoliaAgents: a3, region: n3, ...i3 }) {
      let o2 = q(e11, t3, r3), s2 = ee({ hosts: [{ url: "data.{region}.algolia.com".replace("{region}", n3), accept: "readWrite", protocol: "https" }], ...i3, algoliaAgent: j({ algoliaAgents: a3, client: "Ingestion", version: eA }), baseHeaders: { "content-type": "text/plain", ...o2.headers(), ...i3.baseHeaders }, baseQueryParameters: { ...o2.queryParameters(), ...i3.baseQueryParameters } });
      return { transporter: s2, appId: e11, apiKey: t3, clearCache: () => Promise.all([s2.requestsCache.clear(), s2.responsesCache.clear()]).then(() => void 0), get _ua() {
        return s2.algoliaAgent.value;
      }, addAlgoliaAgent(e12, t4) {
        s2.algoliaAgent.add({ segment: e12, version: t4 });
      }, setClientApiKey({ apiKey: e12 }) {
        r3 && "WithinHeaders" !== r3 ? s2.baseQueryParameters["x-algolia-api-key"] = e12 : s2.baseHeaders["x-algolia-api-key"] = e12;
      }, async chunkedPush({ indexName: e12, objects: t4, action: r4 = "addObject", waitForTasks: a4, batchSize: n4 = 1e3, referenceIndexName: i4, maxRetries: o3 = 100 }, s3) {
        if (n4 < 1) throw Error("`batchSize` must be at least 1.");
        let c2 = [], u2 = 0, d2 = [], l2 = Math.floor(n4 / 10) || n4, h2 = async (e13, t5) => {
          for (let r5 of d2.slice(e13, t5)) {
            if (!r5.eventID) throw Error("received unexpected response from the push endpoint, eventID must not be undefined");
            let e14 = 0;
            await W({ func: async () => {
              if (void 0 === r5.eventID || !r5.eventID) throw Error("received unexpected response from the push endpoint, eventID must not be undefined");
              return this.getEvent({ runID: r5.runID, eventID: r5.eventID }).catch((e15) => {
                if (404 !== e15.status) throw e15;
              });
            }, validate: (e15) => void 0 !== e15, aggregator: () => e14 += 1, error: { validate: () => e14 >= o3, message: () => `Stopped waiting for the task after ${o3} retries. This does not mean the operation failed; it may still complete. If you need to keep polling, retry with a higher maxRetries.` }, timeout: () => Math.min(1500 * e14, 5e3) });
          }
        };
        for (let [o4, p2] of t4.entries()) c2.push(p2), (c2.length === n4 || o4 === t4.length - 1) && (d2.push(await this.push({ indexName: e12, pushTaskPayload: { action: r4, records: c2 }, referenceIndexName: i4 }, s3)), c2 = []), a4 && d2.length - u2 >= l2 && (await h2(u2, u2 + l2), u2 += l2);
        return a4 && await h2(u2, d2.length), d2;
      }, createAuthentication: (e12, t4) => (et("authenticationCreate", "createAuthentication", e12), et("authenticationCreate.type", "createAuthentication", e12.type), et("authenticationCreate.name", "createAuthentication", e12.name), et("authenticationCreate.input", "createAuthentication", e12.input), s2.request({ method: "POST", path: "/1/authentications", queryParameters: {}, headers: {}, data: e12 }, t4)), createAuthenticationWithHTTPInfo: (e12, t4) => (et("authenticationCreate", "createAuthenticationWithHTTPInfo", e12), et("authenticationCreate.type", "createAuthenticationWithHTTPInfo", e12.type), et("authenticationCreate.name", "createAuthenticationWithHTTPInfo", e12.name), et("authenticationCreate.input", "createAuthenticationWithHTTPInfo", e12.input), s2.requestWithHttpInfo({ method: "POST", path: "/1/authentications", queryParameters: {}, headers: {}, data: e12 }, t4)), createDestination: (e12, t4) => (et("destinationCreate", "createDestination", e12), et("destinationCreate.type", "createDestination", e12.type), et("destinationCreate.name", "createDestination", e12.name), et("destinationCreate.input", "createDestination", e12.input), s2.request({ method: "POST", path: "/1/destinations", queryParameters: {}, headers: {}, data: e12 }, t4)), createDestinationWithHTTPInfo: (e12, t4) => (et("destinationCreate", "createDestinationWithHTTPInfo", e12), et("destinationCreate.type", "createDestinationWithHTTPInfo", e12.type), et("destinationCreate.name", "createDestinationWithHTTPInfo", e12.name), et("destinationCreate.input", "createDestinationWithHTTPInfo", e12.input), s2.requestWithHttpInfo({ method: "POST", path: "/1/destinations", queryParameters: {}, headers: {}, data: e12 }, t4)), createSource: (e12, t4) => (et("sourceCreate", "createSource", e12), et("sourceCreate.type", "createSource", e12.type), et("sourceCreate.name", "createSource", e12.name), s2.request({ method: "POST", path: "/1/sources", queryParameters: {}, headers: {}, data: e12 }, t4)), createSourceWithHTTPInfo: (e12, t4) => (et("sourceCreate", "createSourceWithHTTPInfo", e12), et("sourceCreate.type", "createSourceWithHTTPInfo", e12.type), et("sourceCreate.name", "createSourceWithHTTPInfo", e12.name), s2.requestWithHttpInfo({ method: "POST", path: "/1/sources", queryParameters: {}, headers: {}, data: e12 }, t4)), createTask: (e12, t4) => (et("taskCreate", "createTask", e12), et("taskCreate.sourceID", "createTask", e12.sourceID), et("taskCreate.destinationID", "createTask", e12.destinationID), et("taskCreate.action", "createTask", e12.action), s2.request({ method: "POST", path: "/2/tasks", queryParameters: {}, headers: {}, data: e12 }, t4)), createTaskWithHTTPInfo: (e12, t4) => (et("taskCreate", "createTaskWithHTTPInfo", e12), et("taskCreate.sourceID", "createTaskWithHTTPInfo", e12.sourceID), et("taskCreate.destinationID", "createTaskWithHTTPInfo", e12.destinationID), et("taskCreate.action", "createTaskWithHTTPInfo", e12.action), s2.requestWithHttpInfo({ method: "POST", path: "/2/tasks", queryParameters: {}, headers: {}, data: e12 }, t4)), createTaskV1: (e12, t4) => (et("taskCreate", "createTaskV1", e12), et("taskCreate.sourceID", "createTaskV1", e12.sourceID), et("taskCreate.destinationID", "createTaskV1", e12.destinationID), et("taskCreate.trigger", "createTaskV1", e12.trigger), et("taskCreate.action", "createTaskV1", e12.action), s2.request({ method: "POST", path: "/1/tasks", queryParameters: {}, headers: {}, data: e12 }, t4)), createTaskV1WithHTTPInfo: (e12, t4) => (et("taskCreate", "createTaskV1WithHTTPInfo", e12), et("taskCreate.sourceID", "createTaskV1WithHTTPInfo", e12.sourceID), et("taskCreate.destinationID", "createTaskV1WithHTTPInfo", e12.destinationID), et("taskCreate.trigger", "createTaskV1WithHTTPInfo", e12.trigger), et("taskCreate.action", "createTaskV1WithHTTPInfo", e12.action), s2.requestWithHttpInfo({ method: "POST", path: "/1/tasks", queryParameters: {}, headers: {}, data: e12 }, t4)), createTransformation: (e12, t4) => (et("transformationCreate", "createTransformation", e12), et("transformationCreate.name", "createTransformation", e12.name), s2.request({ method: "POST", path: "/1/transformations", queryParameters: {}, headers: {}, data: e12 }, t4)), createTransformationWithHTTPInfo: (e12, t4) => (et("transformationCreate", "createTransformationWithHTTPInfo", e12), et("transformationCreate.name", "createTransformationWithHTTPInfo", e12.name), s2.requestWithHttpInfo({ method: "POST", path: "/1/transformations", queryParameters: {}, headers: {}, data: e12 }, t4)), customDelete({ path: e12, parameters: t4 }, r4) {
        et("path", "customDelete", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customDeleteWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customDeleteWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGet({ path: e12, parameters: t4 }, r4) {
        et("path", "customGet", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGetWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customGetWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customPost({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPost", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPostWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPostWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPut({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPut", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.request({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPutWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPutWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return s2.requestWithHttpInfo({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, deleteAuthentication({ authenticationID: e12 }, t4) {
        et("authenticationID", "deleteAuthentication", e12);
        let r4 = "/1/authentications/{authenticationID}".replace("{authenticationID}", encodeURIComponent(e12));
        return s2.request({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteAuthenticationWithHTTPInfo({ authenticationID: e12 }, t4) {
        et("authenticationID", "deleteAuthenticationWithHTTPInfo", e12);
        let r4 = "/1/authentications/{authenticationID}".replace("{authenticationID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteDestination({ destinationID: e12 }, t4) {
        et("destinationID", "deleteDestination", e12);
        let r4 = "/1/destinations/{destinationID}".replace("{destinationID}", encodeURIComponent(e12));
        return s2.request({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteDestinationWithHTTPInfo({ destinationID: e12 }, t4) {
        et("destinationID", "deleteDestinationWithHTTPInfo", e12);
        let r4 = "/1/destinations/{destinationID}".replace("{destinationID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteSource({ sourceID: e12 }, t4) {
        et("sourceID", "deleteSource", e12);
        let r4 = "/1/sources/{sourceID}".replace("{sourceID}", encodeURIComponent(e12));
        return s2.request({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteSourceWithHTTPInfo({ sourceID: e12 }, t4) {
        et("sourceID", "deleteSourceWithHTTPInfo", e12);
        let r4 = "/1/sources/{sourceID}".replace("{sourceID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteTask({ taskID: e12 }, t4) {
        et("taskID", "deleteTask", e12);
        let r4 = "/2/tasks/{taskID}".replace("{taskID}", encodeURIComponent(e12));
        return s2.request({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteTaskWithHTTPInfo({ taskID: e12 }, t4) {
        et("taskID", "deleteTaskWithHTTPInfo", e12);
        let r4 = "/2/tasks/{taskID}".replace("{taskID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteTaskV1({ taskID: e12 }, t4) {
        et("taskID", "deleteTaskV1", e12);
        let r4 = "/1/tasks/{taskID}".replace("{taskID}", encodeURIComponent(e12));
        return s2.request({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteTaskV1WithHTTPInfo({ taskID: e12 }, t4) {
        et("taskID", "deleteTaskV1WithHTTPInfo", e12);
        let r4 = "/1/tasks/{taskID}".replace("{taskID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteTransformation({ transformationID: e12 }, t4) {
        et("transformationID", "deleteTransformation", e12);
        let r4 = "/1/transformations/{transformationID}".replace("{transformationID}", encodeURIComponent(e12));
        return s2.request({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, deleteTransformationWithHTTPInfo({ transformationID: e12 }, t4) {
        et("transformationID", "deleteTransformationWithHTTPInfo", e12);
        let r4 = "/1/transformations/{transformationID}".replace("{transformationID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "DELETE", path: r4, queryParameters: {}, headers: {} }, t4);
      }, disableTask({ taskID: e12 }, t4) {
        et("taskID", "disableTask", e12);
        let r4 = "/2/tasks/{taskID}/disable".replace("{taskID}", encodeURIComponent(e12));
        return s2.request({ method: "PUT", path: r4, queryParameters: {}, headers: {} }, t4);
      }, disableTaskWithHTTPInfo({ taskID: e12 }, t4) {
        et("taskID", "disableTaskWithHTTPInfo", e12);
        let r4 = "/2/tasks/{taskID}/disable".replace("{taskID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "PUT", path: r4, queryParameters: {}, headers: {} }, t4);
      }, disableTaskV1({ taskID: e12 }, t4) {
        et("taskID", "disableTaskV1", e12);
        let r4 = "/1/tasks/{taskID}/disable".replace("{taskID}", encodeURIComponent(e12));
        return s2.request({ method: "PUT", path: r4, queryParameters: {}, headers: {} }, t4);
      }, disableTaskV1WithHTTPInfo({ taskID: e12 }, t4) {
        et("taskID", "disableTaskV1WithHTTPInfo", e12);
        let r4 = "/1/tasks/{taskID}/disable".replace("{taskID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "PUT", path: r4, queryParameters: {}, headers: {} }, t4);
      }, enableTask({ taskID: e12 }, t4) {
        et("taskID", "enableTask", e12);
        let r4 = "/2/tasks/{taskID}/enable".replace("{taskID}", encodeURIComponent(e12));
        return s2.request({ method: "PUT", path: r4, queryParameters: {}, headers: {} }, t4);
      }, enableTaskWithHTTPInfo({ taskID: e12 }, t4) {
        et("taskID", "enableTaskWithHTTPInfo", e12);
        let r4 = "/2/tasks/{taskID}/enable".replace("{taskID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "PUT", path: r4, queryParameters: {}, headers: {} }, t4);
      }, enableTaskV1({ taskID: e12 }, t4) {
        et("taskID", "enableTaskV1", e12);
        let r4 = "/1/tasks/{taskID}/enable".replace("{taskID}", encodeURIComponent(e12));
        return s2.request({ method: "PUT", path: r4, queryParameters: {}, headers: {} }, t4);
      }, enableTaskV1WithHTTPInfo({ taskID: e12 }, t4) {
        et("taskID", "enableTaskV1WithHTTPInfo", e12);
        let r4 = "/1/tasks/{taskID}/enable".replace("{taskID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "PUT", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getAuthentication({ authenticationID: e12 }, t4) {
        et("authenticationID", "getAuthentication", e12);
        let r4 = "/1/authentications/{authenticationID}".replace("{authenticationID}", encodeURIComponent(e12));
        return s2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getAuthenticationWithHTTPInfo({ authenticationID: e12 }, t4) {
        et("authenticationID", "getAuthenticationWithHTTPInfo", e12);
        let r4 = "/1/authentications/{authenticationID}".replace("{authenticationID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getDestination({ destinationID: e12 }, t4) {
        et("destinationID", "getDestination", e12);
        let r4 = "/1/destinations/{destinationID}".replace("{destinationID}", encodeURIComponent(e12));
        return s2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getDestinationWithHTTPInfo({ destinationID: e12 }, t4) {
        et("destinationID", "getDestinationWithHTTPInfo", e12);
        let r4 = "/1/destinations/{destinationID}".replace("{destinationID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getEvent({ runID: e12, eventID: t4 }, r4) {
        et("runID", "getEvent", e12), et("eventID", "getEvent", t4);
        let a4 = "/1/runs/{runID}/events/{eventID}".replace("{runID}", encodeURIComponent(e12)).replace("{eventID}", encodeURIComponent(t4));
        return s2.request({ method: "GET", path: a4, queryParameters: {}, headers: {} }, r4);
      }, getEventWithHTTPInfo({ runID: e12, eventID: t4 }, r4) {
        et("runID", "getEventWithHTTPInfo", e12), et("eventID", "getEventWithHTTPInfo", t4);
        let a4 = "/1/runs/{runID}/events/{eventID}".replace("{runID}", encodeURIComponent(e12)).replace("{eventID}", encodeURIComponent(t4));
        return s2.requestWithHttpInfo({ method: "GET", path: a4, queryParameters: {}, headers: {} }, r4);
      }, getRun({ runID: e12 }, t4) {
        et("runID", "getRun", e12);
        let r4 = "/1/runs/{runID}".replace("{runID}", encodeURIComponent(e12));
        return s2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getRunWithHTTPInfo({ runID: e12 }, t4) {
        et("runID", "getRunWithHTTPInfo", e12);
        let r4 = "/1/runs/{runID}".replace("{runID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getSource({ sourceID: e12 }, t4) {
        et("sourceID", "getSource", e12);
        let r4 = "/1/sources/{sourceID}".replace("{sourceID}", encodeURIComponent(e12));
        return s2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getSourceWithHTTPInfo({ sourceID: e12 }, t4) {
        et("sourceID", "getSourceWithHTTPInfo", e12);
        let r4 = "/1/sources/{sourceID}".replace("{sourceID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getTask({ taskID: e12 }, t4) {
        et("taskID", "getTask", e12);
        let r4 = "/2/tasks/{taskID}".replace("{taskID}", encodeURIComponent(e12));
        return s2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getTaskWithHTTPInfo({ taskID: e12 }, t4) {
        et("taskID", "getTaskWithHTTPInfo", e12);
        let r4 = "/2/tasks/{taskID}".replace("{taskID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getTaskV1({ taskID: e12 }, t4) {
        et("taskID", "getTaskV1", e12);
        let r4 = "/1/tasks/{taskID}".replace("{taskID}", encodeURIComponent(e12));
        return s2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getTaskV1WithHTTPInfo({ taskID: e12 }, t4) {
        et("taskID", "getTaskV1WithHTTPInfo", e12);
        let r4 = "/1/tasks/{taskID}".replace("{taskID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getTransformation({ transformationID: e12 }, t4) {
        et("transformationID", "getTransformation", e12);
        let r4 = "/1/transformations/{transformationID}".replace("{transformationID}", encodeURIComponent(e12));
        return s2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getTransformationWithHTTPInfo({ transformationID: e12 }, t4) {
        et("transformationID", "getTransformationWithHTTPInfo", e12);
        let r4 = "/1/transformations/{transformationID}".replace("{transformationID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, listAuthentications({ itemsPerPage: e12, page: t4, type: r4, platform: a4, sort: n4, order: i4 } = {}, o3) {
        let c2 = {};
        return void 0 !== e12 && (c2.itemsPerPage = e12.toString()), void 0 !== t4 && (c2.page = t4.toString()), void 0 !== r4 && (c2.type = r4.toString()), void 0 !== a4 && (c2.platform = a4.toString()), void 0 !== n4 && (c2.sort = n4.toString()), void 0 !== i4 && (c2.order = i4.toString()), s2.request({ method: "GET", path: "/1/authentications", queryParameters: c2, headers: {} }, o3);
      }, listAuthenticationsWithHTTPInfo({ itemsPerPage: e12, page: t4, type: r4, platform: a4, sort: n4, order: i4 } = {}, o3) {
        let c2 = {};
        return void 0 !== e12 && (c2.itemsPerPage = e12.toString()), void 0 !== t4 && (c2.page = t4.toString()), void 0 !== r4 && (c2.type = r4.toString()), void 0 !== a4 && (c2.platform = a4.toString()), void 0 !== n4 && (c2.sort = n4.toString()), void 0 !== i4 && (c2.order = i4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/1/authentications", queryParameters: c2, headers: {} }, o3);
      }, listDestinations({ itemsPerPage: e12, page: t4, type: r4, authenticationID: a4, transformationID: n4, sort: i4, order: o3 } = {}, c2) {
        let u2 = {};
        return void 0 !== e12 && (u2.itemsPerPage = e12.toString()), void 0 !== t4 && (u2.page = t4.toString()), void 0 !== r4 && (u2.type = r4.toString()), void 0 !== a4 && (u2.authenticationID = a4.toString()), void 0 !== n4 && (u2.transformationID = n4.toString()), void 0 !== i4 && (u2.sort = i4.toString()), void 0 !== o3 && (u2.order = o3.toString()), s2.request({ method: "GET", path: "/1/destinations", queryParameters: u2, headers: {} }, c2);
      }, listDestinationsWithHTTPInfo({ itemsPerPage: e12, page: t4, type: r4, authenticationID: a4, transformationID: n4, sort: i4, order: o3 } = {}, c2) {
        let u2 = {};
        return void 0 !== e12 && (u2.itemsPerPage = e12.toString()), void 0 !== t4 && (u2.page = t4.toString()), void 0 !== r4 && (u2.type = r4.toString()), void 0 !== a4 && (u2.authenticationID = a4.toString()), void 0 !== n4 && (u2.transformationID = n4.toString()), void 0 !== i4 && (u2.sort = i4.toString()), void 0 !== o3 && (u2.order = o3.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/1/destinations", queryParameters: u2, headers: {} }, c2);
      }, listEvents({ runID: e12, itemsPerPage: t4, page: r4, status: a4, type: n4, sort: i4, order: o3, startDate: c2, endDate: u2 }, d2) {
        et("runID", "listEvents", e12);
        let l2 = "/1/runs/{runID}/events".replace("{runID}", encodeURIComponent(e12)), h2 = {};
        return void 0 !== t4 && (h2.itemsPerPage = t4.toString()), void 0 !== r4 && (h2.page = r4.toString()), void 0 !== a4 && (h2.status = a4.toString()), void 0 !== n4 && (h2.type = n4.toString()), void 0 !== i4 && (h2.sort = i4.toString()), void 0 !== o3 && (h2.order = o3.toString()), void 0 !== c2 && (h2.startDate = c2.toString()), void 0 !== u2 && (h2.endDate = u2.toString()), s2.request({ method: "GET", path: l2, queryParameters: h2, headers: {} }, d2);
      }, listEventsWithHTTPInfo({ runID: e12, itemsPerPage: t4, page: r4, status: a4, type: n4, sort: i4, order: o3, startDate: c2, endDate: u2 }, d2) {
        et("runID", "listEventsWithHTTPInfo", e12);
        let l2 = "/1/runs/{runID}/events".replace("{runID}", encodeURIComponent(e12)), h2 = {};
        return void 0 !== t4 && (h2.itemsPerPage = t4.toString()), void 0 !== r4 && (h2.page = r4.toString()), void 0 !== a4 && (h2.status = a4.toString()), void 0 !== n4 && (h2.type = n4.toString()), void 0 !== i4 && (h2.sort = i4.toString()), void 0 !== o3 && (h2.order = o3.toString()), void 0 !== c2 && (h2.startDate = c2.toString()), void 0 !== u2 && (h2.endDate = u2.toString()), s2.requestWithHttpInfo({ method: "GET", path: l2, queryParameters: h2, headers: {} }, d2);
      }, listRuns({ itemsPerPage: e12, page: t4, status: r4, type: a4, taskID: n4, sort: i4, order: o3, startDate: c2, endDate: u2 } = {}, d2) {
        let l2 = {};
        return void 0 !== e12 && (l2.itemsPerPage = e12.toString()), void 0 !== t4 && (l2.page = t4.toString()), void 0 !== r4 && (l2.status = r4.toString()), void 0 !== a4 && (l2.type = a4.toString()), void 0 !== n4 && (l2.taskID = n4.toString()), void 0 !== i4 && (l2.sort = i4.toString()), void 0 !== o3 && (l2.order = o3.toString()), void 0 !== c2 && (l2.startDate = c2.toString()), void 0 !== u2 && (l2.endDate = u2.toString()), s2.request({ method: "GET", path: "/1/runs", queryParameters: l2, headers: {} }, d2);
      }, listRunsWithHTTPInfo({ itemsPerPage: e12, page: t4, status: r4, type: a4, taskID: n4, sort: i4, order: o3, startDate: c2, endDate: u2 } = {}, d2) {
        let l2 = {};
        return void 0 !== e12 && (l2.itemsPerPage = e12.toString()), void 0 !== t4 && (l2.page = t4.toString()), void 0 !== r4 && (l2.status = r4.toString()), void 0 !== a4 && (l2.type = a4.toString()), void 0 !== n4 && (l2.taskID = n4.toString()), void 0 !== i4 && (l2.sort = i4.toString()), void 0 !== o3 && (l2.order = o3.toString()), void 0 !== c2 && (l2.startDate = c2.toString()), void 0 !== u2 && (l2.endDate = u2.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/1/runs", queryParameters: l2, headers: {} }, d2);
      }, listSources({ itemsPerPage: e12, page: t4, type: r4, authenticationID: a4, sort: n4, order: i4 } = {}, o3) {
        let c2 = {};
        return void 0 !== e12 && (c2.itemsPerPage = e12.toString()), void 0 !== t4 && (c2.page = t4.toString()), void 0 !== r4 && (c2.type = r4.toString()), void 0 !== a4 && (c2.authenticationID = a4.toString()), void 0 !== n4 && (c2.sort = n4.toString()), void 0 !== i4 && (c2.order = i4.toString()), s2.request({ method: "GET", path: "/1/sources", queryParameters: c2, headers: {} }, o3);
      }, listSourcesWithHTTPInfo({ itemsPerPage: e12, page: t4, type: r4, authenticationID: a4, sort: n4, order: i4 } = {}, o3) {
        let c2 = {};
        return void 0 !== e12 && (c2.itemsPerPage = e12.toString()), void 0 !== t4 && (c2.page = t4.toString()), void 0 !== r4 && (c2.type = r4.toString()), void 0 !== a4 && (c2.authenticationID = a4.toString()), void 0 !== n4 && (c2.sort = n4.toString()), void 0 !== i4 && (c2.order = i4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/1/sources", queryParameters: c2, headers: {} }, o3);
      }, listTasks({ itemsPerPage: e12, page: t4, action: r4, enabled: a4, sourceID: n4, sourceType: i4, destinationID: o3, triggerType: c2, withEmailNotifications: u2, sort: d2, order: l2 } = {}, h2) {
        let p2 = {};
        return void 0 !== e12 && (p2.itemsPerPage = e12.toString()), void 0 !== t4 && (p2.page = t4.toString()), void 0 !== r4 && (p2.action = r4.toString()), void 0 !== a4 && (p2.enabled = a4.toString()), void 0 !== n4 && (p2.sourceID = n4.toString()), void 0 !== i4 && (p2.sourceType = i4.toString()), void 0 !== o3 && (p2.destinationID = o3.toString()), void 0 !== c2 && (p2.triggerType = c2.toString()), void 0 !== u2 && (p2.withEmailNotifications = u2.toString()), void 0 !== d2 && (p2.sort = d2.toString()), void 0 !== l2 && (p2.order = l2.toString()), s2.request({ method: "GET", path: "/2/tasks", queryParameters: p2, headers: {} }, h2);
      }, listTasksWithHTTPInfo({ itemsPerPage: e12, page: t4, action: r4, enabled: a4, sourceID: n4, sourceType: i4, destinationID: o3, triggerType: c2, withEmailNotifications: u2, sort: d2, order: l2 } = {}, h2) {
        let p2 = {};
        return void 0 !== e12 && (p2.itemsPerPage = e12.toString()), void 0 !== t4 && (p2.page = t4.toString()), void 0 !== r4 && (p2.action = r4.toString()), void 0 !== a4 && (p2.enabled = a4.toString()), void 0 !== n4 && (p2.sourceID = n4.toString()), void 0 !== i4 && (p2.sourceType = i4.toString()), void 0 !== o3 && (p2.destinationID = o3.toString()), void 0 !== c2 && (p2.triggerType = c2.toString()), void 0 !== u2 && (p2.withEmailNotifications = u2.toString()), void 0 !== d2 && (p2.sort = d2.toString()), void 0 !== l2 && (p2.order = l2.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/2/tasks", queryParameters: p2, headers: {} }, h2);
      }, listTasksV1({ itemsPerPage: e12, page: t4, action: r4, enabled: a4, sourceID: n4, destinationID: i4, triggerType: o3, sort: c2, order: u2 } = {}, d2) {
        let l2 = {};
        return void 0 !== e12 && (l2.itemsPerPage = e12.toString()), void 0 !== t4 && (l2.page = t4.toString()), void 0 !== r4 && (l2.action = r4.toString()), void 0 !== a4 && (l2.enabled = a4.toString()), void 0 !== n4 && (l2.sourceID = n4.toString()), void 0 !== i4 && (l2.destinationID = i4.toString()), void 0 !== o3 && (l2.triggerType = o3.toString()), void 0 !== c2 && (l2.sort = c2.toString()), void 0 !== u2 && (l2.order = u2.toString()), s2.request({ method: "GET", path: "/1/tasks", queryParameters: l2, headers: {} }, d2);
      }, listTasksV1WithHTTPInfo({ itemsPerPage: e12, page: t4, action: r4, enabled: a4, sourceID: n4, destinationID: i4, triggerType: o3, sort: c2, order: u2 } = {}, d2) {
        let l2 = {};
        return void 0 !== e12 && (l2.itemsPerPage = e12.toString()), void 0 !== t4 && (l2.page = t4.toString()), void 0 !== r4 && (l2.action = r4.toString()), void 0 !== a4 && (l2.enabled = a4.toString()), void 0 !== n4 && (l2.sourceID = n4.toString()), void 0 !== i4 && (l2.destinationID = i4.toString()), void 0 !== o3 && (l2.triggerType = o3.toString()), void 0 !== c2 && (l2.sort = c2.toString()), void 0 !== u2 && (l2.order = u2.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/1/tasks", queryParameters: l2, headers: {} }, d2);
      }, listTransformations({ itemsPerPage: e12, page: t4, sort: r4, order: a4, type: n4 } = {}, i4) {
        let o3 = {};
        return void 0 !== e12 && (o3.itemsPerPage = e12.toString()), void 0 !== t4 && (o3.page = t4.toString()), void 0 !== r4 && (o3.sort = r4.toString()), void 0 !== a4 && (o3.order = a4.toString()), void 0 !== n4 && (o3.type = n4.toString()), s2.request({ method: "GET", path: "/1/transformations", queryParameters: o3, headers: {} }, i4);
      }, listTransformationsWithHTTPInfo({ itemsPerPage: e12, page: t4, sort: r4, order: a4, type: n4 } = {}, i4) {
        let o3 = {};
        return void 0 !== e12 && (o3.itemsPerPage = e12.toString()), void 0 !== t4 && (o3.page = t4.toString()), void 0 !== r4 && (o3.sort = r4.toString()), void 0 !== a4 && (o3.order = a4.toString()), void 0 !== n4 && (o3.type = n4.toString()), s2.requestWithHttpInfo({ method: "GET", path: "/1/transformations", queryParameters: o3, headers: {} }, i4);
      }, push({ indexName: e12, pushTaskPayload: t4, watch: r4, referenceIndexName: a4 }, n4) {
        et("indexName", "push", e12), et("pushTaskPayload", "push", t4), et("pushTaskPayload.action", "push", t4.action), et("pushTaskPayload.records", "push", t4.records);
        let i4 = "/1/push/{indexName}".replace("{indexName}", encodeURIComponent(e12)), o3 = {};
        return void 0 !== r4 && (o3.watch = r4.toString()), void 0 !== a4 && (o3.referenceIndexName = a4.toString()), n4 = { ...n4, timeouts: { connect: 18e4, read: 18e4, write: 18e4, ...n4?.timeouts } }, s2.request({ method: "POST", path: i4, queryParameters: o3, headers: {}, data: t4 }, n4);
      }, pushWithHTTPInfo({ indexName: e12, pushTaskPayload: t4, watch: r4, referenceIndexName: a4 }, n4) {
        et("indexName", "pushWithHTTPInfo", e12), et("pushTaskPayload", "pushWithHTTPInfo", t4), et("pushTaskPayload.action", "pushWithHTTPInfo", t4.action), et("pushTaskPayload.records", "pushWithHTTPInfo", t4.records);
        let i4 = "/1/push/{indexName}".replace("{indexName}", encodeURIComponent(e12)), o3 = {};
        return void 0 !== r4 && (o3.watch = r4.toString()), void 0 !== a4 && (o3.referenceIndexName = a4.toString()), n4 = { ...n4, timeouts: { connect: 18e4, read: 18e4, write: 18e4, ...n4?.timeouts } }, s2.requestWithHttpInfo({ method: "POST", path: i4, queryParameters: o3, headers: {}, data: t4 }, n4);
      }, pushTask({ taskID: e12, pushTaskPayload: t4, watch: r4 }, a4) {
        et("taskID", "pushTask", e12), et("pushTaskPayload", "pushTask", t4), et("pushTaskPayload.action", "pushTask", t4.action), et("pushTaskPayload.records", "pushTask", t4.records);
        let n4 = "/2/tasks/{taskID}/push".replace("{taskID}", encodeURIComponent(e12)), i4 = {};
        return void 0 !== r4 && (i4.watch = r4.toString()), a4 = { ...a4, timeouts: { connect: 18e4, read: 18e4, write: 18e4, ...a4?.timeouts } }, s2.request({ method: "POST", path: n4, queryParameters: i4, headers: {}, data: t4 }, a4);
      }, pushTaskWithHTTPInfo({ taskID: e12, pushTaskPayload: t4, watch: r4 }, a4) {
        et("taskID", "pushTaskWithHTTPInfo", e12), et("pushTaskPayload", "pushTaskWithHTTPInfo", t4), et("pushTaskPayload.action", "pushTaskWithHTTPInfo", t4.action), et("pushTaskPayload.records", "pushTaskWithHTTPInfo", t4.records);
        let n4 = "/2/tasks/{taskID}/push".replace("{taskID}", encodeURIComponent(e12)), i4 = {};
        return void 0 !== r4 && (i4.watch = r4.toString()), a4 = { ...a4, timeouts: { connect: 18e4, read: 18e4, write: 18e4, ...a4?.timeouts } }, s2.requestWithHttpInfo({ method: "POST", path: n4, queryParameters: i4, headers: {}, data: t4 }, a4);
      }, replaceTask({ taskID: e12, taskReplace: t4 }, r4) {
        et("taskID", "replaceTask", e12), et("taskReplace", "replaceTask", t4), et("taskReplace.destinationID", "replaceTask", t4.destinationID), et("taskReplace.action", "replaceTask", t4.action);
        let a4 = "/2/tasks/{taskID}".replace("{taskID}", encodeURIComponent(e12));
        return s2.request({ method: "PUT", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, replaceTaskWithHTTPInfo({ taskID: e12, taskReplace: t4 }, r4) {
        et("taskID", "replaceTaskWithHTTPInfo", e12), et("taskReplace", "replaceTaskWithHTTPInfo", t4), et("taskReplace.destinationID", "replaceTaskWithHTTPInfo", t4.destinationID), et("taskReplace.action", "replaceTaskWithHTTPInfo", t4.action);
        let a4 = "/2/tasks/{taskID}".replace("{taskID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "PUT", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, runSource({ sourceID: e12, runSourcePayload: t4 }, r4) {
        et("sourceID", "runSource", e12);
        let a4 = "/1/sources/{sourceID}/run".replace("{sourceID}", encodeURIComponent(e12));
        return s2.request({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 || {} }, r4);
      }, runSourceWithHTTPInfo({ sourceID: e12, runSourcePayload: t4 }, r4) {
        et("sourceID", "runSourceWithHTTPInfo", e12);
        let a4 = "/1/sources/{sourceID}/run".replace("{sourceID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 || {} }, r4);
      }, runTask({ taskID: e12, runTaskPayload: t4 }, r4) {
        et("taskID", "runTask", e12);
        let a4 = "/2/tasks/{taskID}/run".replace("{taskID}", encodeURIComponent(e12));
        return s2.request({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 || {} }, r4);
      }, runTaskWithHTTPInfo({ taskID: e12, runTaskPayload: t4 }, r4) {
        et("taskID", "runTaskWithHTTPInfo", e12);
        let a4 = "/2/tasks/{taskID}/run".replace("{taskID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 || {} }, r4);
      }, runTaskV1({ taskID: e12, runTaskPayload: t4 }, r4) {
        et("taskID", "runTaskV1", e12);
        let a4 = "/1/tasks/{taskID}/run".replace("{taskID}", encodeURIComponent(e12));
        return s2.request({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 || {} }, r4);
      }, runTaskV1WithHTTPInfo({ taskID: e12, runTaskPayload: t4 }, r4) {
        et("taskID", "runTaskV1WithHTTPInfo", e12);
        let a4 = "/1/tasks/{taskID}/run".replace("{taskID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 || {} }, r4);
      }, searchAuthentications: (e12, t4) => (et("authenticationSearch", "searchAuthentications", e12), et("authenticationSearch.authenticationIDs", "searchAuthentications", e12.authenticationIDs), s2.request({ method: "POST", path: "/1/authentications/search", queryParameters: {}, headers: {}, data: e12 }, t4)), searchAuthenticationsWithHTTPInfo: (e12, t4) => (et("authenticationSearch", "searchAuthenticationsWithHTTPInfo", e12), et("authenticationSearch.authenticationIDs", "searchAuthenticationsWithHTTPInfo", e12.authenticationIDs), s2.requestWithHttpInfo({ method: "POST", path: "/1/authentications/search", queryParameters: {}, headers: {}, data: e12 }, t4)), searchDestinations: (e12, t4) => (et("destinationSearch", "searchDestinations", e12), et("destinationSearch.destinationIDs", "searchDestinations", e12.destinationIDs), s2.request({ method: "POST", path: "/1/destinations/search", queryParameters: {}, headers: {}, data: e12 }, t4)), searchDestinationsWithHTTPInfo: (e12, t4) => (et("destinationSearch", "searchDestinationsWithHTTPInfo", e12), et("destinationSearch.destinationIDs", "searchDestinationsWithHTTPInfo", e12.destinationIDs), s2.requestWithHttpInfo({ method: "POST", path: "/1/destinations/search", queryParameters: {}, headers: {}, data: e12 }, t4)), searchSources: (e12, t4) => (et("sourceSearch", "searchSources", e12), et("sourceSearch.sourceIDs", "searchSources", e12.sourceIDs), s2.request({ method: "POST", path: "/1/sources/search", queryParameters: {}, headers: {}, data: e12 }, t4)), searchSourcesWithHTTPInfo: (e12, t4) => (et("sourceSearch", "searchSourcesWithHTTPInfo", e12), et("sourceSearch.sourceIDs", "searchSourcesWithHTTPInfo", e12.sourceIDs), s2.requestWithHttpInfo({ method: "POST", path: "/1/sources/search", queryParameters: {}, headers: {}, data: e12 }, t4)), searchTasks: (e12, t4) => (et("taskSearch", "searchTasks", e12), et("taskSearch.taskIDs", "searchTasks", e12.taskIDs), s2.request({ method: "POST", path: "/2/tasks/search", queryParameters: {}, headers: {}, data: e12 }, t4)), searchTasksWithHTTPInfo: (e12, t4) => (et("taskSearch", "searchTasksWithHTTPInfo", e12), et("taskSearch.taskIDs", "searchTasksWithHTTPInfo", e12.taskIDs), s2.requestWithHttpInfo({ method: "POST", path: "/2/tasks/search", queryParameters: {}, headers: {}, data: e12 }, t4)), searchTasksV1: (e12, t4) => (et("taskSearch", "searchTasksV1", e12), et("taskSearch.taskIDs", "searchTasksV1", e12.taskIDs), s2.request({ method: "POST", path: "/1/tasks/search", queryParameters: {}, headers: {}, data: e12 }, t4)), searchTasksV1WithHTTPInfo: (e12, t4) => (et("taskSearch", "searchTasksV1WithHTTPInfo", e12), et("taskSearch.taskIDs", "searchTasksV1WithHTTPInfo", e12.taskIDs), s2.requestWithHttpInfo({ method: "POST", path: "/1/tasks/search", queryParameters: {}, headers: {}, data: e12 }, t4)), searchTransformations: (e12, t4) => (et("transformationSearch", "searchTransformations", e12), et("transformationSearch.transformationIDs", "searchTransformations", e12.transformationIDs), s2.request({ method: "POST", path: "/1/transformations/search", queryParameters: {}, headers: {}, data: e12 }, t4)), searchTransformationsWithHTTPInfo: (e12, t4) => (et("transformationSearch", "searchTransformationsWithHTTPInfo", e12), et("transformationSearch.transformationIDs", "searchTransformationsWithHTTPInfo", e12.transformationIDs), s2.requestWithHttpInfo({ method: "POST", path: "/1/transformations/search", queryParameters: {}, headers: {}, data: e12 }, t4)), triggerDockerSourceDiscover({ sourceID: e12 }, t4) {
        et("sourceID", "triggerDockerSourceDiscover", e12);
        let r4 = "/1/sources/{sourceID}/discover".replace("{sourceID}", encodeURIComponent(e12));
        return t4 = { ...t4, timeouts: { connect: 18e4, read: 18e4, write: 18e4, ...t4?.timeouts } }, s2.request({ method: "POST", path: r4, queryParameters: {}, headers: {} }, t4);
      }, triggerDockerSourceDiscoverWithHTTPInfo({ sourceID: e12 }, t4) {
        et("sourceID", "triggerDockerSourceDiscoverWithHTTPInfo", e12);
        let r4 = "/1/sources/{sourceID}/discover".replace("{sourceID}", encodeURIComponent(e12));
        return t4 = { ...t4, timeouts: { connect: 18e4, read: 18e4, write: 18e4, ...t4?.timeouts } }, s2.requestWithHttpInfo({ method: "POST", path: r4, queryParameters: {}, headers: {} }, t4);
      }, tryTransformation: (e12, t4) => (et("transformationTry", "tryTransformation", e12), et("transformationTry.sampleRecord", "tryTransformation", e12.sampleRecord), s2.request({ method: "POST", path: "/1/transformations/try", queryParameters: {}, headers: {}, data: e12 }, t4)), tryTransformationWithHTTPInfo: (e12, t4) => (et("transformationTry", "tryTransformationWithHTTPInfo", e12), et("transformationTry.sampleRecord", "tryTransformationWithHTTPInfo", e12.sampleRecord), s2.requestWithHttpInfo({ method: "POST", path: "/1/transformations/try", queryParameters: {}, headers: {}, data: e12 }, t4)), tryTransformationBeforeUpdate({ transformationID: e12, transformationTry: t4 }, r4) {
        et("transformationID", "tryTransformationBeforeUpdate", e12), et("transformationTry", "tryTransformationBeforeUpdate", t4), et("transformationTry.sampleRecord", "tryTransformationBeforeUpdate", t4.sampleRecord);
        let a4 = "/1/transformations/{transformationID}/try".replace("{transformationID}", encodeURIComponent(e12));
        return s2.request({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, tryTransformationBeforeUpdateWithHTTPInfo({ transformationID: e12, transformationTry: t4 }, r4) {
        et("transformationID", "tryTransformationBeforeUpdateWithHTTPInfo", e12), et("transformationTry", "tryTransformationBeforeUpdateWithHTTPInfo", t4), et("transformationTry.sampleRecord", "tryTransformationBeforeUpdateWithHTTPInfo", t4.sampleRecord);
        let a4 = "/1/transformations/{transformationID}/try".replace("{transformationID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, updateAuthentication({ authenticationID: e12, authenticationUpdate: t4 }, r4) {
        et("authenticationID", "updateAuthentication", e12), et("authenticationUpdate", "updateAuthentication", t4);
        let a4 = "/1/authentications/{authenticationID}".replace("{authenticationID}", encodeURIComponent(e12));
        return s2.request({ method: "PATCH", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, updateAuthenticationWithHTTPInfo({ authenticationID: e12, authenticationUpdate: t4 }, r4) {
        et("authenticationID", "updateAuthenticationWithHTTPInfo", e12), et("authenticationUpdate", "updateAuthenticationWithHTTPInfo", t4);
        let a4 = "/1/authentications/{authenticationID}".replace("{authenticationID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "PATCH", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, updateDestination({ destinationID: e12, destinationUpdate: t4 }, r4) {
        et("destinationID", "updateDestination", e12), et("destinationUpdate", "updateDestination", t4);
        let a4 = "/1/destinations/{destinationID}".replace("{destinationID}", encodeURIComponent(e12));
        return s2.request({ method: "PATCH", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, updateDestinationWithHTTPInfo({ destinationID: e12, destinationUpdate: t4 }, r4) {
        et("destinationID", "updateDestinationWithHTTPInfo", e12), et("destinationUpdate", "updateDestinationWithHTTPInfo", t4);
        let a4 = "/1/destinations/{destinationID}".replace("{destinationID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "PATCH", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, updateSource({ sourceID: e12, sourceUpdate: t4 }, r4) {
        et("sourceID", "updateSource", e12), et("sourceUpdate", "updateSource", t4);
        let a4 = "/1/sources/{sourceID}".replace("{sourceID}", encodeURIComponent(e12));
        return s2.request({ method: "PATCH", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, updateSourceWithHTTPInfo({ sourceID: e12, sourceUpdate: t4 }, r4) {
        et("sourceID", "updateSourceWithHTTPInfo", e12), et("sourceUpdate", "updateSourceWithHTTPInfo", t4);
        let a4 = "/1/sources/{sourceID}".replace("{sourceID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "PATCH", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, updateTask({ taskID: e12, taskUpdate: t4 }, r4) {
        et("taskID", "updateTask", e12), et("taskUpdate", "updateTask", t4);
        let a4 = "/2/tasks/{taskID}".replace("{taskID}", encodeURIComponent(e12));
        return s2.request({ method: "PATCH", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, updateTaskWithHTTPInfo({ taskID: e12, taskUpdate: t4 }, r4) {
        et("taskID", "updateTaskWithHTTPInfo", e12), et("taskUpdate", "updateTaskWithHTTPInfo", t4);
        let a4 = "/2/tasks/{taskID}".replace("{taskID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "PATCH", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, updateTaskV1({ taskID: e12, taskUpdate: t4 }, r4) {
        et("taskID", "updateTaskV1", e12), et("taskUpdate", "updateTaskV1", t4);
        let a4 = "/1/tasks/{taskID}".replace("{taskID}", encodeURIComponent(e12));
        return s2.request({ method: "PATCH", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, updateTaskV1WithHTTPInfo({ taskID: e12, taskUpdate: t4 }, r4) {
        et("taskID", "updateTaskV1WithHTTPInfo", e12), et("taskUpdate", "updateTaskV1WithHTTPInfo", t4);
        let a4 = "/1/tasks/{taskID}".replace("{taskID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "PATCH", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, updateTransformation({ transformationID: e12, transformationCreate: t4 }, r4) {
        et("transformationID", "updateTransformation", e12), et("transformationCreate", "updateTransformation", t4), et("transformationCreate.name", "updateTransformation", t4.name);
        let a4 = "/1/transformations/{transformationID}".replace("{transformationID}", encodeURIComponent(e12));
        return s2.request({ method: "PUT", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, updateTransformationWithHTTPInfo({ transformationID: e12, transformationCreate: t4 }, r4) {
        et("transformationID", "updateTransformationWithHTTPInfo", e12), et("transformationCreate", "updateTransformationWithHTTPInfo", t4), et("transformationCreate.name", "updateTransformationWithHTTPInfo", t4.name);
        let a4 = "/1/transformations/{transformationID}".replace("{transformationID}", encodeURIComponent(e12));
        return s2.requestWithHttpInfo({ method: "PUT", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, validateSource: (e12, t4) => (t4 = { ...t4, timeouts: { connect: 18e4, read: 18e4, write: 18e4, ...t4?.timeouts } }, s2.request({ method: "POST", path: "/1/sources/validate", queryParameters: {}, headers: {}, data: e12 || {} }, t4)), validateSourceWithHTTPInfo: (e12, t4) => (t4 = { ...t4, timeouts: { connect: 18e4, read: 18e4, write: 18e4, ...t4?.timeouts } }, s2.requestWithHttpInfo({ method: "POST", path: "/1/sources/validate", queryParameters: {}, headers: {}, data: e12 || {} }, t4)), validateSourceBeforeUpdate({ sourceID: e12, sourceUpdate: t4 }, r4) {
        et("sourceID", "validateSourceBeforeUpdate", e12), et("sourceUpdate", "validateSourceBeforeUpdate", t4);
        let a4 = "/1/sources/{sourceID}/validate".replace("{sourceID}", encodeURIComponent(e12));
        return r4 = { ...r4, timeouts: { connect: 18e4, read: 18e4, write: 18e4, ...r4?.timeouts } }, s2.request({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      }, validateSourceBeforeUpdateWithHTTPInfo({ sourceID: e12, sourceUpdate: t4 }, r4) {
        et("sourceID", "validateSourceBeforeUpdateWithHTTPInfo", e12), et("sourceUpdate", "validateSourceBeforeUpdateWithHTTPInfo", t4);
        let a4 = "/1/sources/{sourceID}/validate".replace("{sourceID}", encodeURIComponent(e12));
        return r4 = { ...r4, timeouts: { connect: 18e4, read: 18e4, write: 18e4, ...r4?.timeouts } }, s2.requestWithHttpInfo({ method: "POST", path: a4, queryParameters: {}, headers: {}, data: t4 }, r4);
      } };
    })({ appId: e10, apiKey: t2, region: r2, timeouts: { connect: 25e3, read: 25e3, write: 25e3 }, logger: O(), requester: ea(), algoliaAgents: [{ segment: "Browser" }], authMode: "WithinQueryParameters", responsesCache: A(), requestsCache: A({ serializable: false }), hostsCache: H({ caches: [k({ key: `${eA}-${e10}` }), A()] }), ...i2 });
  }
  e.s(["apiClientVersion", 0, eA, "ingestionClient", 0, eW, "isOnDemandTrigger", 0, function(e10) {
    return "onDemand" === e10.type;
  }, "isScheduleTrigger", 0, function(e10) {
    return "schedule" === e10.type;
  }, "isSubscriptionTrigger", 0, function(e10) {
    return "subscription" === e10.type;
  }], 402975);
  try {
    var ej = "u" > typeof window ? window : e.g;
    ej._sentryModuleMetadata = ej._sentryModuleMetadata || {}, ej._sentryModuleMetadata[new ej.Error().stack] = Object.assign({}, ej._sentryModuleMetadata[new ej.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var eO = "1.56.0";
  function eD(e10, t2, r2) {
    if (!e10 || "string" != typeof e10) throw Error("`appId` is missing.");
    if (!t2 || "string" != typeof t2) throw Error("`apiKey` is missing.");
    let { compression: a2, ...n2 } = r2 || {};
    return (function({ appId: e11, apiKey: t3, authMode: r3, algoliaAgents: a3, ...n3 }) {
      let i2 = q(e11, t3, r3), o2 = ee({ hosts: [{ url: "status.algolia.com", accept: "readWrite", protocol: "https" }], ...n3, algoliaAgent: j({ algoliaAgents: a3, client: "Monitoring", version: eO }), baseHeaders: { "content-type": "text/plain", ...i2.headers(), ...n3.baseHeaders }, baseQueryParameters: { ...i2.queryParameters(), ...n3.baseQueryParameters } });
      return { transporter: o2, appId: e11, apiKey: t3, clearCache: () => Promise.all([o2.requestsCache.clear(), o2.responsesCache.clear()]).then(() => void 0), get _ua() {
        return o2.algoliaAgent.value;
      }, addAlgoliaAgent(e12, t4) {
        o2.algoliaAgent.add({ segment: e12, version: t4 });
      }, setClientApiKey({ apiKey: e12 }) {
        r3 && "WithinHeaders" !== r3 ? o2.baseQueryParameters["x-algolia-api-key"] = e12 : o2.baseHeaders["x-algolia-api-key"] = e12;
      }, customDelete({ path: e12, parameters: t4 }, r4) {
        et("path", "customDelete", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return o2.request({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customDeleteWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customDeleteWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return o2.requestWithHttpInfo({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGet({ path: e12, parameters: t4 }, r4) {
        et("path", "customGet", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return o2.request({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGetWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customGetWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return o2.requestWithHttpInfo({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customPost({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPost", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return o2.request({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPostWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPostWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return o2.requestWithHttpInfo({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPut({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPut", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return o2.request({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPutWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPutWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return o2.requestWithHttpInfo({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, getClusterIncidents({ clusters: e12 }, t4) {
        et("clusters", "getClusterIncidents", e12);
        let r4 = "/1/incidents/{clusters}".replace("{clusters}", encodeURIComponent(e12));
        return o2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getClusterIncidentsWithHTTPInfo({ clusters: e12 }, t4) {
        et("clusters", "getClusterIncidentsWithHTTPInfo", e12);
        let r4 = "/1/incidents/{clusters}".replace("{clusters}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getClusterStatus({ clusters: e12 }, t4) {
        et("clusters", "getClusterStatus", e12);
        let r4 = "/1/status/{clusters}".replace("{clusters}", encodeURIComponent(e12));
        return o2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getClusterStatusWithHTTPInfo({ clusters: e12 }, t4) {
        et("clusters", "getClusterStatusWithHTTPInfo", e12);
        let r4 = "/1/status/{clusters}".replace("{clusters}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getIncidents: (e12) => o2.request({ method: "GET", path: "/1/incidents", queryParameters: {}, headers: {} }, e12), getIncidentsWithHTTPInfo: (e12) => o2.requestWithHttpInfo({ method: "GET", path: "/1/incidents", queryParameters: {}, headers: {} }, e12), getIndexingTime({ clusters: e12 }, t4) {
        et("clusters", "getIndexingTime", e12);
        let r4 = "/1/indexing/{clusters}".replace("{clusters}", encodeURIComponent(e12));
        return o2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getIndexingTimeWithHTTPInfo({ clusters: e12 }, t4) {
        et("clusters", "getIndexingTimeWithHTTPInfo", e12);
        let r4 = "/1/indexing/{clusters}".replace("{clusters}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getLatency({ clusters: e12 }, t4) {
        et("clusters", "getLatency", e12);
        let r4 = "/1/latency/{clusters}".replace("{clusters}", encodeURIComponent(e12));
        return o2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getLatencyWithHTTPInfo({ clusters: e12 }, t4) {
        et("clusters", "getLatencyWithHTTPInfo", e12);
        let r4 = "/1/latency/{clusters}".replace("{clusters}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getMetrics({ metric: e12, period: t4 }, r4) {
        et("metric", "getMetrics", e12), et("period", "getMetrics", t4);
        let a4 = "/1/infrastructure/{metric}/period/{period}".replace("{metric}", encodeURIComponent(e12)).replace("{period}", encodeURIComponent(t4));
        return o2.request({ method: "GET", path: a4, queryParameters: {}, headers: {} }, r4);
      }, getMetricsWithHTTPInfo({ metric: e12, period: t4 }, r4) {
        et("metric", "getMetricsWithHTTPInfo", e12), et("period", "getMetricsWithHTTPInfo", t4);
        let a4 = "/1/infrastructure/{metric}/period/{period}".replace("{metric}", encodeURIComponent(e12)).replace("{period}", encodeURIComponent(t4));
        return o2.requestWithHttpInfo({ method: "GET", path: a4, queryParameters: {}, headers: {} }, r4);
      }, getReachability({ clusters: e12 }, t4) {
        et("clusters", "getReachability", e12);
        let r4 = "/1/reachability/{clusters}/probes".replace("{clusters}", encodeURIComponent(e12));
        return o2.request({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getReachabilityWithHTTPInfo({ clusters: e12 }, t4) {
        et("clusters", "getReachabilityWithHTTPInfo", e12);
        let r4 = "/1/reachability/{clusters}/probes".replace("{clusters}", encodeURIComponent(e12));
        return o2.requestWithHttpInfo({ method: "GET", path: r4, queryParameters: {}, headers: {} }, t4);
      }, getServers: (e12) => o2.request({ method: "GET", path: "/1/inventory/servers", queryParameters: {}, headers: {} }, e12), getServersWithHTTPInfo: (e12) => o2.requestWithHttpInfo({ method: "GET", path: "/1/inventory/servers", queryParameters: {}, headers: {} }, e12), getStatus: (e12) => o2.request({ method: "GET", path: "/1/status", queryParameters: {}, headers: {} }, e12), getStatusWithHTTPInfo: (e12) => o2.requestWithHttpInfo({ method: "GET", path: "/1/status", queryParameters: {}, headers: {} }, e12) };
    })({ appId: e10, apiKey: t2, timeouts: { connect: 1e3, read: 2e3, write: 3e4 }, logger: O(), requester: ea(), algoliaAgents: [{ segment: "Browser" }], authMode: "WithinQueryParameters", responsesCache: A(), requestsCache: A({ serializable: false }), hostsCache: H({ caches: [k({ key: `${eO}-${e10}` }), A()] }), ...n2 });
  }
  e.s(["apiClientVersion", 0, eO, "monitoringClient", 0, eD], 780389);
  try {
    var eC = "u" > typeof window ? window : e.g;
    eC._sentryModuleMetadata = eC._sentryModuleMetadata || {}, eC._sentryModuleMetadata[new eC.Error().stack] = Object.assign({}, eC._sentryModuleMetadata[new eC.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var eN = "5.56.0";
  function eU(e10, t2, r2) {
    if (!e10 || "string" != typeof e10) throw Error("`appId` is missing.");
    if (!t2 || "string" != typeof t2) throw Error("`apiKey` is missing.");
    let { compression: a2, ...n2 } = r2 || {};
    return (function({ appId: e11, apiKey: t3, authMode: r3, algoliaAgents: a3, ...n3 }) {
      let i2 = q(e11, t3, r3), o2 = ee({ hosts: [{ url: `${e11}-dsn.algolia.net`, accept: "read", protocol: "https" }, { url: `${e11}.algolia.net`, accept: "write", protocol: "https" }].concat(V([{ url: `${e11}-1.algolianet.com`, accept: "readWrite", protocol: "https" }, { url: `${e11}-2.algolianet.com`, accept: "readWrite", protocol: "https" }, { url: `${e11}-3.algolianet.com`, accept: "readWrite", protocol: "https" }])), ...n3, algoliaAgent: j({ algoliaAgents: a3, client: "Recommend", version: eN }), baseHeaders: { "content-type": "text/plain", ...i2.headers(), ...n3.baseHeaders }, baseQueryParameters: { ...i2.queryParameters(), ...n3.baseQueryParameters } });
      return { transporter: o2, appId: e11, apiKey: t3, clearCache: () => Promise.all([o2.requestsCache.clear(), o2.responsesCache.clear()]).then(() => void 0), get _ua() {
        return o2.algoliaAgent.value;
      }, addAlgoliaAgent(e12, t4) {
        o2.algoliaAgent.add({ segment: e12, version: t4 });
      }, setClientApiKey({ apiKey: e12 }) {
        r3 && "WithinHeaders" !== r3 ? o2.baseQueryParameters["x-algolia-api-key"] = e12 : o2.baseHeaders["x-algolia-api-key"] = e12;
      }, batchRecommendRules({ indexName: e12, model: t4, recommendRule: r4 }, a4) {
        et("indexName", "batchRecommendRules", e12), et("model", "batchRecommendRules", t4);
        let n4 = "/1/indexes/{indexName}/{model}/recommend/rules/batch".replace("{indexName}", encodeURIComponent(e12)).replace("{model}", encodeURIComponent(t4));
        return o2.request({ method: "POST", path: n4, queryParameters: {}, headers: {}, data: r4 || {} }, a4);
      }, batchRecommendRulesWithHTTPInfo({ indexName: e12, model: t4, recommendRule: r4 }, a4) {
        et("indexName", "batchRecommendRulesWithHTTPInfo", e12), et("model", "batchRecommendRulesWithHTTPInfo", t4);
        let n4 = "/1/indexes/{indexName}/{model}/recommend/rules/batch".replace("{indexName}", encodeURIComponent(e12)).replace("{model}", encodeURIComponent(t4));
        return o2.requestWithHttpInfo({ method: "POST", path: n4, queryParameters: {}, headers: {}, data: r4 || {} }, a4);
      }, customDelete({ path: e12, parameters: t4 }, r4) {
        et("path", "customDelete", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return o2.request({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customDeleteWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customDeleteWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return o2.requestWithHttpInfo({ method: "DELETE", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGet({ path: e12, parameters: t4 }, r4) {
        et("path", "customGet", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return o2.request({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customGetWithHTTPInfo({ path: e12, parameters: t4 }, r4) {
        et("path", "customGetWithHTTPInfo", e12);
        let a4 = "/{path}".replace("{path}", e12);
        return o2.requestWithHttpInfo({ method: "GET", path: a4, queryParameters: t4 || {}, headers: {} }, r4);
      }, customPost({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPost", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return o2.request({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPostWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPostWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return o2.requestWithHttpInfo({ method: "POST", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPut({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPut", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return o2.request({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPutWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPutWithHTTPInfo", e12);
        let n4 = "/{path}".replace("{path}", e12);
        return o2.requestWithHttpInfo({ method: "PUT", path: n4, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, deleteRecommendRule({ indexName: e12, model: t4, objectID: r4 }, a4) {
        et("indexName", "deleteRecommendRule", e12), et("model", "deleteRecommendRule", t4), et("objectID", "deleteRecommendRule", r4);
        let n4 = "/1/indexes/{indexName}/{model}/recommend/rules/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{model}", encodeURIComponent(t4)).replace("{objectID}", encodeURIComponent(r4));
        return o2.request({ method: "DELETE", path: n4, queryParameters: {}, headers: {} }, a4);
      }, deleteRecommendRuleWithHTTPInfo({ indexName: e12, model: t4, objectID: r4 }, a4) {
        et("indexName", "deleteRecommendRuleWithHTTPInfo", e12), et("model", "deleteRecommendRuleWithHTTPInfo", t4), et("objectID", "deleteRecommendRuleWithHTTPInfo", r4);
        let n4 = "/1/indexes/{indexName}/{model}/recommend/rules/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{model}", encodeURIComponent(t4)).replace("{objectID}", encodeURIComponent(r4));
        return o2.requestWithHttpInfo({ method: "DELETE", path: n4, queryParameters: {}, headers: {} }, a4);
      }, getRecommendRule({ indexName: e12, model: t4, objectID: r4 }, a4) {
        et("indexName", "getRecommendRule", e12), et("model", "getRecommendRule", t4), et("objectID", "getRecommendRule", r4);
        let n4 = "/1/indexes/{indexName}/{model}/recommend/rules/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{model}", encodeURIComponent(t4)).replace("{objectID}", encodeURIComponent(r4));
        return o2.request({ method: "GET", path: n4, queryParameters: {}, headers: {} }, a4);
      }, getRecommendRuleWithHTTPInfo({ indexName: e12, model: t4, objectID: r4 }, a4) {
        et("indexName", "getRecommendRuleWithHTTPInfo", e12), et("model", "getRecommendRuleWithHTTPInfo", t4), et("objectID", "getRecommendRuleWithHTTPInfo", r4);
        let n4 = "/1/indexes/{indexName}/{model}/recommend/rules/{objectID}".replace("{indexName}", encodeURIComponent(e12)).replace("{model}", encodeURIComponent(t4)).replace("{objectID}", encodeURIComponent(r4));
        return o2.requestWithHttpInfo({ method: "GET", path: n4, queryParameters: {}, headers: {} }, a4);
      }, getRecommendStatus({ indexName: e12, model: t4, taskID: r4 }, a4) {
        et("indexName", "getRecommendStatus", e12), et("model", "getRecommendStatus", t4), et("taskID", "getRecommendStatus", r4);
        let n4 = "/1/indexes/{indexName}/{model}/task/{taskID}".replace("{indexName}", encodeURIComponent(e12)).replace("{model}", encodeURIComponent(t4)).replace("{taskID}", encodeURIComponent(r4));
        return o2.request({ method: "GET", path: n4, queryParameters: {}, headers: {} }, a4);
      }, getRecommendStatusWithHTTPInfo({ indexName: e12, model: t4, taskID: r4 }, a4) {
        et("indexName", "getRecommendStatusWithHTTPInfo", e12), et("model", "getRecommendStatusWithHTTPInfo", t4), et("taskID", "getRecommendStatusWithHTTPInfo", r4);
        let n4 = "/1/indexes/{indexName}/{model}/task/{taskID}".replace("{indexName}", encodeURIComponent(e12)).replace("{model}", encodeURIComponent(t4)).replace("{taskID}", encodeURIComponent(r4));
        return o2.requestWithHttpInfo({ method: "GET", path: n4, queryParameters: {}, headers: {} }, a4);
      }, getRecommendations(e12, t4) {
        e12 && Array.isArray(e12) && (e12 = { requests: e12 }), et("getRecommendationsParams", "getRecommendations", e12), et("getRecommendationsParams.requests", "getRecommendations", e12.requests);
        let r4 = { method: "POST", path: "/1/indexes/*/recommendations", queryParameters: {}, headers: {}, data: e12, useReadTransporter: true, cacheable: true };
        return o2.request(r4, t4);
      }, getRecommendationsWithHTTPInfo(e12, t4) {
        e12 && Array.isArray(e12) && (e12 = { requests: e12 }), et("getRecommendationsParams", "getRecommendationsWithHTTPInfo", e12), et("getRecommendationsParams.requests", "getRecommendationsWithHTTPInfo", e12.requests);
        let r4 = { method: "POST", path: "/1/indexes/*/recommendations", queryParameters: {}, headers: {}, data: e12, useReadTransporter: true, cacheable: true };
        return o2.requestWithHttpInfo(r4, t4);
      }, searchRecommendRules({ indexName: e12, model: t4, searchRecommendRulesParams: r4 }, a4) {
        et("indexName", "searchRecommendRules", e12), et("model", "searchRecommendRules", t4);
        let n4 = "/1/indexes/{indexName}/{model}/recommend/rules/search".replace("{indexName}", encodeURIComponent(e12)).replace("{model}", encodeURIComponent(t4));
        return o2.request({ method: "POST", path: n4, queryParameters: {}, headers: {}, data: r4 || {}, useReadTransporter: true, cacheable: true }, a4);
      }, searchRecommendRulesWithHTTPInfo({ indexName: e12, model: t4, searchRecommendRulesParams: r4 }, a4) {
        et("indexName", "searchRecommendRulesWithHTTPInfo", e12), et("model", "searchRecommendRulesWithHTTPInfo", t4);
        let n4 = "/1/indexes/{indexName}/{model}/recommend/rules/search".replace("{indexName}", encodeURIComponent(e12)).replace("{model}", encodeURIComponent(t4));
        return o2.requestWithHttpInfo({ method: "POST", path: n4, queryParameters: {}, headers: {}, data: r4 || {}, useReadTransporter: true, cacheable: true }, a4);
      } };
    })({ appId: e10, apiKey: t2, timeouts: { connect: 1e3, read: 2e3, write: 3e4 }, logger: O(), requester: ea(), algoliaAgents: [{ segment: "Browser" }], authMode: "WithinQueryParameters", responsesCache: A(), requestsCache: A({ serializable: false }), hostsCache: H({ caches: [k({ key: `${eN}-${e10}` }), A()] }), ...n2 });
  }
  e.s(["apiClientVersion", 0, eN, "recommendClient", 0, eU], 427066);
  var eF = e.i(470638), eB = e.i(561959), eK = e.i(203382), eL = e.i(568562), eG = e.i(629634), eQ = e.i(541026), e$ = e.i(18405), eV = e.i(402975), ez = e.i(780389), eJ = e.i(427066);
  try {
    var eX = "u" > typeof window ? window : e.g;
    eX._sentryModuleMetadata = eX._sentryModuleMetadata || {}, eX._sentryModuleMetadata[new eX.Error().stack] = Object.assign({}, eX._sentryModuleMetadata[new eX.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var eY = Object.defineProperty, eZ = Object.getOwnPropertyDescriptor, e0 = Object.getOwnPropertyNames, e1 = Object.prototype.hasOwnProperty, e2 = (e10, t2) => {
    for (var r2 in t2) eY(e10, r2, { get: t2[r2], enumerable: true });
  }, e8 = (e10, t2, r2, a2) => {
    if (t2 && "object" == typeof t2 || "function" == typeof t2) for (let n2 of e0(t2)) e1.call(e10, n2) || n2 === r2 || eY(e10, n2, { get: () => t2[n2], enumerable: !(a2 = eZ(t2, n2)) || a2.enumerable });
    return e10;
  }, e3 = (e10, t2, r2) => (e8(e10, t2, "default"), r2 && e8(r2, t2, "default")), e4 = {};
  e2(e4, { algoliasearch: () => e6, apiClientVersion: () => ex });
  var e7 = {};
  function e6(e10, t2, r2) {
    let a2, n2;
    if (!e10 || "string" != typeof e10) throw Error("`appId` is missing.");
    if (!t2 || "string" != typeof t2) throw Error("`apiKey` is missing.");
    let i2 = ek(e10, t2, r2);
    if (r2?.transformationOptions ? a2 = r2.transformationOptions : r2?.transformation && (a2 = { region: r2.transformation.region }), a2) {
      if (!a2.region) throw Error("`region` is required in `transformationOptions`. See https://www.algolia.com/doc/libraries/sdk/methods/ingestion/");
      let { region: r3, ...i3 } = a2;
      n2 = eW(e10, t2, r3, i3);
    }
    return { ...i2, async saveObjectsWithTransformation({ indexName: e11, objects: t3, batchSize: r3, waitForTasks: a3, maxRetries: i3 }, o2) {
      if (!n2) throw Error("`transformationOptions` must be set in the client config before calling this method. It defaults to the Ingestion API defaults. See https://www.algolia.com/doc/libraries/sdk/methods/ingestion/");
      return n2.chunkedPush({ indexName: e11, objects: t3, action: "addObject", batchSize: r3, waitForTasks: a3, maxRetries: i3 }, o2);
    }, async partialUpdateObjectsWithTransformation({ indexName: e11, objects: t3, createIfNotExists: r3, batchSize: a3, waitForTasks: i3, maxRetries: o2 }, s2) {
      if (!n2) throw Error("`transformationOptions` must be set in the client config before calling this method. It defaults to the Ingestion API defaults. See https://www.algolia.com/doc/libraries/sdk/methods/ingestion/");
      return n2.chunkedPush({ indexName: e11, objects: t3, action: r3 ? "partialUpdateObject" : "partialUpdateObjectNoCreate", batchSize: a3, waitForTasks: i3, maxRetries: o2 }, s2);
    }, async replaceAllObjectsWithTransformation({ indexName: e11, objects: t3, batchSize: r3, scopes: a3, maxRetries: i3 = 800 }, o2) {
      if (!n2) throw Error("`transformationOptions` must be set in the client config before calling this method. It defaults to the Ingestion API defaults. See https://www.algolia.com/doc/libraries/sdk/methods/ingestion/");
      let s2 = Math.floor(1e6 * Math.random()) + 1e5, c2 = `${e11}_tmp_${s2}`;
      void 0 === a3 && (a3 = ["settings", "rules", "synonyms"]);
      try {
        let s3 = await this.operationIndex({ indexName: e11, operationIndexParams: { operation: "copy", destination: c2, scope: a3 } }, o2), u2 = await n2.chunkedPush({ indexName: c2, objects: t3, waitForTasks: true, batchSize: r3, referenceIndexName: e11, maxRetries: i3 }, o2);
        await this.waitForTask({ indexName: c2, taskID: s3.taskID, maxRetries: i3 }), s3 = await this.operationIndex({ indexName: e11, operationIndexParams: { operation: "copy", destination: c2, scope: a3 } }, o2), await this.waitForTask({ indexName: c2, taskID: s3.taskID, maxRetries: i3 });
        let d2 = await this.operationIndex({ indexName: c2, operationIndexParams: { operation: "move", destination: e11 } }, o2);
        return await this.waitForTask({ indexName: c2, taskID: d2.taskID, maxRetries: i3 }), { copyOperationResponse: s3, watchResponses: u2, moveOperationResponse: d2 };
      } catch (e12) {
        throw await this.deleteIndex({ indexName: c2 }), e12;
      }
    }, get _ua() {
      return i2.transporter.algoliaAgent.value;
    }, initAbtesting: (r3) => el(r3.appId || e10, r3.apiKey || t2, r3.region, r3.options), initAbtestingV3: (r3) => es(r3.appId || e10, r3.apiKey || t2, r3.region, r3.options), initAnalytics: (r3) => ey(r3.appId || e10, r3.apiKey || t2, r3.region, r3.options), initIngestion: (r3) => eW(r3.appId || e10, r3.apiKey || t2, r3.region, r3.options), initInsights: (r3) => eT(r3.appId || e10, r3.apiKey || t2, r3.region, r3.options), initMonitoring: (r3 = {}) => eD(r3.appId || e10, r3.apiKey || t2, r3.options), initPersonalization: (r3) => eM(r3.appId || e10, r3.apiKey || t2, r3.region, r3.options), initQuerySuggestions: (r3) => eE(r3.appId || e10, r3.apiKey || t2, r3.region, r3.options), initRecommend: (r3 = {}) => eU(r3.appId || e10, r3.apiKey || t2, r3.options) };
  }
  e2(e7, { apiClientVersion: () => ex }), e3(e7, eF), e3(e7, eB), e3(e7, eK), e3(e7, eL), e3(e7, eG), e3(e7, eQ), e3(e7, e$), e3(e7, eV), e3(e7, ez), e3(e7, eJ), e3(e4, e7);
  try {
    var e9 = "u" > typeof window ? window : e.g;
    e9._sentryModuleMetadata = e9._sentryModuleMetadata || {}, e9._sentryModuleMetadata[new e9.Error().stack] = Object.assign({}, e9._sentryModuleMetadata[new e9.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var e5 = "5.56.0", te = e.i(791768);
  try {
    var tt = window;
    tt._sentryModuleMetadata = tt._sentryModuleMetadata || {}, tt._sentryModuleMetadata[new tt.Error().stack] = Object.assign({}, tt._sentryModuleMetadata[new tt.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var tr = window;
    tr._sentryModuleMetadata = tr._sentryModuleMetadata || {}, tr._sentryModuleMetadata[new tr.Error().stack] = Object.assign({}, tr._sentryModuleMetadata[new tr.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ta = (function(e10, t2) {
    if (!e10 || "string" != typeof e10) throw Error("`appId` is missing.");
    if (!t2 || "string" != typeof t2) throw Error("`apiKey` is missing.");
    let { compression: r2, ...a2 } = {};
    return (function({ appId: e11, apiKey: t3, authMode: r3, algoliaAgents: a3, ...n2 }) {
      let i2 = q(e11, t3, r3), o2 = ee({ hosts: [{ url: `${e11}-dsn.algolia.net`, accept: "read", protocol: "https" }, { url: `${e11}.algolia.net`, accept: "write", protocol: "https" }].concat(V([{ url: `${e11}-1.algolianet.com`, accept: "readWrite", protocol: "https" }, { url: `${e11}-2.algolianet.com`, accept: "readWrite", protocol: "https" }, { url: `${e11}-3.algolianet.com`, accept: "readWrite", protocol: "https" }])), ...n2, algoliaAgent: j({ algoliaAgents: a3, client: "Lite", version: e5 }), baseHeaders: { "content-type": "text/plain", ...i2.headers(), ...n2.baseHeaders }, baseQueryParameters: { ...i2.queryParameters(), ...n2.baseQueryParameters } });
      return { transporter: o2, appId: e11, apiKey: t3, clearCache: () => Promise.all([o2.requestsCache.clear(), o2.responsesCache.clear()]).then(() => void 0), get _ua() {
        return o2.algoliaAgent.value;
      }, addAlgoliaAgent(e12, t4) {
        o2.algoliaAgent.add({ segment: e12, version: t4 });
      }, setClientApiKey({ apiKey: e12 }) {
        r3 && "WithinHeaders" !== r3 ? o2.baseQueryParameters["x-algolia-api-key"] = e12 : o2.baseHeaders["x-algolia-api-key"] = e12;
      }, searchForHits(e12, t4) {
        return this.search(e12, t4);
      }, searchForFacets(e12, t4) {
        return this.search(e12, t4);
      }, customPost({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPost", e12);
        let n3 = "/{path}".replace("{path}", e12);
        return o2.request({ method: "POST", path: n3, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, customPostWithHTTPInfo({ path: e12, parameters: t4, body: r4 }, a4) {
        et("path", "customPostWithHTTPInfo", e12);
        let n3 = "/{path}".replace("{path}", e12);
        return o2.requestWithHttpInfo({ method: "POST", path: n3, queryParameters: t4 || {}, headers: {}, data: r4 || {} }, a4);
      }, getRecommendations(e12, t4) {
        e12 && Array.isArray(e12) && (e12 = { requests: e12 }), et("getRecommendationsParams", "getRecommendations", e12), et("getRecommendationsParams.requests", "getRecommendations", e12.requests);
        let r4 = { method: "POST", path: "/1/indexes/*/recommendations", queryParameters: {}, headers: {}, data: e12, useReadTransporter: true, cacheable: true };
        return o2.request(r4, t4);
      }, getRecommendationsWithHTTPInfo(e12, t4) {
        e12 && Array.isArray(e12) && (e12 = { requests: e12 }), et("getRecommendationsParams", "getRecommendationsWithHTTPInfo", e12), et("getRecommendationsParams.requests", "getRecommendationsWithHTTPInfo", e12.requests);
        let r4 = { method: "POST", path: "/1/indexes/*/recommendations", queryParameters: {}, headers: {}, data: e12, useReadTransporter: true, cacheable: true };
        return o2.requestWithHttpInfo(r4, t4);
      }, search(e12, t4) {
        e12 && Array.isArray(e12) && (e12 = { requests: e12.map(({ params: e13, ...t5 }) => "facet" === t5.type ? { ...t5, ...e13, type: "facet" } : { ...t5, ...e13, facet: void 0, maxFacetHits: void 0, facetQuery: void 0 }) }), et("searchMethodParams", "search", e12), et("searchMethodParams.requests", "search", e12.requests);
        let r4 = { method: "POST", path: "/1/indexes/*/queries", queryParameters: {}, headers: {}, data: e12, useReadTransporter: true, cacheable: true };
        return o2.request(r4, t4);
      }, searchWithHTTPInfo(e12, t4) {
        e12 && Array.isArray(e12) && (e12 = { requests: e12.map(({ params: e13, ...t5 }) => "facet" === t5.type ? { ...t5, ...e13, type: "facet" } : { ...t5, ...e13, facet: void 0, maxFacetHits: void 0, facetQuery: void 0 }) }), et("searchMethodParams", "searchWithHTTPInfo", e12), et("searchMethodParams.requests", "searchWithHTTPInfo", e12.requests);
        let r4 = { method: "POST", path: "/1/indexes/*/queries", queryParameters: {}, headers: {}, data: e12, useReadTransporter: true, cacheable: true };
        return o2.requestWithHttpInfo(r4, t4);
      } };
    })({ appId: e10, apiKey: t2, timeouts: { connect: 1e3, read: 2e3, write: 3e4 }, logger: O(), requester: ea(), algoliaAgents: [{ segment: "Browser" }], authMode: "WithinQueryParameters", responsesCache: A(), requestsCache: A({ serializable: false }), hostsCache: H({ caches: [k({ key: `${e5}-${e10}` }), A()] }), ...a2 });
  })(te.env.NEXT_PUBLIC_POLARIS_ALGOLIA_APPLICATION_ID, te.env.NEXT_PUBLIC_POLARIS_API_KEY_SEARCH), tn = [];
  function ti({ Context: e10, defaultResults: a2, filterResults: o2, initialQuery: f2, isOpen: y2, syncQueryToUrl: m2, children: g2 }) {
    let { items: v2 } = (0, i.useConnector)(n.default, void 0, void 0), { query: T2, refine: P2 } = (0, i.useConnector)(S, void 0, void 0), { results: w2, status: I2 } = (function() {
      var e11, t2, a3, n2, i2, o3, f3, y3, m3, g3, v3, T3, P3, w3, I3, M3, _3, S2, b3 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).catchError, E3 = (0, c.useInstantSearchContext)(), R3 = (e11 = (0, c.useInstantSearchContext)(), a3 = (t2 = (0, p.useIndexContext)()).getIndexId(), i2 = (n2 = (0, d._)((0, r.useState)(function() {
        return e11.getUiState();
      }), 2))[0], o3 = n2[1], f3 = i2[a3], m3 = (y3 = (0, d._)((0, r.useState)(function() {
        return e11.renderState;
      }), 2))[0], g3 = y3[1], v3 = m3[a3] || {}, T3 = (0, r.useCallback)(function(t3) {
        e11.setUiState(t3);
      }, [e11]), P3 = (0, r.useCallback)(function(e12) {
        t2.setIndexUiState(e12);
      }, [t2]), (0, r.useEffect)(function() {
        function t3() {
          o3(e11.getUiState()), g3(e11.renderState);
        }
        return e11.addListener("render", t3), t3(), function() {
          e11.removeListener("render", t3);
        };
      }, [e11]), { uiState: i2, setUiState: T3, indexUiState: f3, setIndexUiState: P3, renderState: m3, indexRenderState: v3 }), x3 = R3.uiState, k3 = R3.setUiState, H3 = R3.indexUiState, A3 = R3.setIndexUiState, q3 = R3.renderState, W3 = R3.indexRenderState, j3 = (w3 = (0, c.useInstantSearchContext)(), I3 = (0, p.useIndexContext)(), _3 = (M3 = (0, d._)((0, r.useState)(function() {
        var e12 = (0, h.getIndexSearchResults)(I3);
        return { results: e12.results, scopedResults: e12.scopedResults };
      }), 2))[0], S2 = M3[1], (0, r.useEffect)(function() {
        function e12() {
          var e13 = I3.getResults();
          if (null !== e13) S2({ results: e13, scopedResults: I3.getScopedResults() });
          else if (0 === w3.mainIndex.getIndexName().length) {
            var t3 = w3.mainIndex.getWidgets().find(l.isIndexWidget);
            t3 && S2({ results: (0, h.getIndexSearchResults)(I3).results, scopedResults: t3.getScopedResults() });
          }
        }
        return w3.addListener("render", e12), e12(), function() {
          w3.removeListener("render", e12);
        };
      }, [w3, I3]), _3), O3 = j3.results, D3 = j3.scopedResults, C3 = (0, r.useCallback)(function() {
        for (var e12 = arguments.length, t3 = Array(e12), r2 = 0; r2 < e12; r2++) t3[r2] = arguments[r2];
        return E3.use.apply(E3, (0, s._)(t3)), function() {
          E3.unuse.apply(E3, (0, s._)(t3));
        };
      }, [E3]), N2 = (0, r.useCallback)(function() {
        E3.refresh();
      }, [E3]);
      return (0, u.useIsomorphicLayoutEffect)(function() {
        if (b3) {
          var e12 = function() {
          };
          return E3.addListener("error", e12), function() {
            return E3.removeListener("error", e12);
          };
        }
        return function() {
        };
      }, [E3, b3]), { results: O3, scopedResults: D3, uiState: x3, setUiState: k3, indexUiState: H3, setIndexUiState: A3, renderState: q3, indexRenderState: W3, addMiddlewares: C3, refresh: N2, status: E3.status, error: E3.error };
    })(), [M2, _2] = (0, r.useState)(""), [b2, E2] = (0, r.useState)(""), [R2, x2] = (0, r.useState)(false), k2 = (0, r.useRef)(void 0), H2 = (0, r.useRef)(null);
    null !== f2 && f2 !== H2.current && f2 !== M2 && (H2.current = f2, _2(f2), E2(f2)), (0, r.useEffect)(() => {
      b2 !== T2 && P2(b2);
    }, [b2, T2, P2]), (0, r.useEffect)(() => () => clearTimeout(k2.current), []);
    let A2 = (0, r.useCallback)((e11) => {
      _2(e11), H2.current = e11, y2 && m2(e11), clearTimeout(k2.current), e11.length > 0 ? (x2(true), k2.current = setTimeout(() => {
        x2(false), E2(e11);
      }, 200)) : (x2(false), E2(e11));
    }, [m2, y2]), q2 = (w2?.query ?? "") !== b2, W2 = M2.length > 0 && (R2 || q2 && "error" !== I2 || "loading" === I2 || "stalled" === I2), j2 = q2 ? tn : v2, O2 = o2 ? o2(j2, M2) : j2, D2 = 0 === M2.length && 0 === O2.length ? a2 : O2, C2 = (0, r.useMemo)(() => ({ isSearching: W2, onQueryChange: A2, query: M2, results: D2, settledQuery: b2 }), [M2, b2, W2, D2, A2]);
    return (0, t.jsx)(e10.Provider, { value: C2, children: g2 });
  }
  e.s(["SearchInstantSearchProvider", 0, function({ indexName: e10, Context: n2, defaultResults: i2, filterResults: o2, children: s2 }) {
    let { isOpen: c2, query: u2, openSearchModal: d2, closeSearchModal: l2, syncQueryToUrl: h2 } = (0, E.useSearchModal)();
    return (0, r.useEffect)(() => {
      let e11 = (e12) => {
        "k" === e12.key && (e12.metaKey || e12.ctrlKey) && (e12.preventDefault(), c2 ? requestAnimationFrame(() => l2()) : requestAnimationFrame(() => d2()));
      };
      return document.addEventListener("keydown", e11), () => document.removeEventListener("keydown", e11);
    }, [c2, d2, l2]), (0, t.jsx)(a.InstantSearch, { searchClient: ta, indexName: e10, future: { preserveSharedStateOnUnmount: true }, children: (0, t.jsx)(ti, { Context: n2, defaultResults: i2, filterResults: o2, initialQuery: u2, isOpen: c2, syncQueryToUrl: h2, children: s2 }) });
  }], 482241);
}, 805952, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(551360);
  try {
    var a = window;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["SearchNoResults", 0, function({ query: e2, label: a2 = "No results matching", visible: n = true, className: i, ...o }) {
    return (0, t.jsx)("div", { className: (0, r.cn)("flex h-full items-center justify-center px-4", "transition-opacity duration-100 ease-in-out", { "opacity-100": n }, { "opacity-0": !n }, i), ...o, children: (0, t.jsx)("div", { className: "flex flex-col items-center text-center text-sm", children: (0, t.jsxs)("span", { className: "text-tertiary-foreground", children: [a2, " \u201C", e2, "\u201D"] }) }) });
  }]);
}, 11793, 282718, 36031, (e) => {
  "use strict";
  var t = e.i(68982);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var a = /[\\\/_+.#"@\[\(\{&]/, n = /[\\\/_+.#"@\[\(\{&]/g, i = /[\s-]/, o = /[\s-]/g;
  function s(e2) {
    return e2.toLowerCase().replace(o, " ");
  }
  var c = e.i(900567), u = e.i(856757), d = e.i(514777), l = e.i(713123), h = e.i(205978);
  try {
    var p = "u" > typeof window ? window : e.g;
    p._sentryModuleMetadata = p._sentryModuleMetadata || {}, p._sentryModuleMetadata[new p.Error().stack] = Object.assign({}, p._sentryModuleMetadata[new p.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var f = '[cmdk-group=""]', y = '[cmdk-group-items=""]', m = '[cmdk-item=""]', g = `${m}:not([aria-disabled="true"])`, v = "cmdk-item-select", T = "data-value", P = (e2, t2, r2) => {
    var c2;
    return c2 = e2, (function e3(t3, r3, s2, c3, u2, d2, l2) {
      if (d2 === r3.length) return u2 === t3.length ? 1 : 0.99;
      var h2 = `${u2},${d2}`;
      if (void 0 !== l2[h2]) return l2[h2];
      for (var p2, f2, y2, m2, g2 = c3.charAt(d2), v2 = s2.indexOf(g2, u2), T2 = 0; v2 >= 0; ) (p2 = e3(t3, r3, s2, c3, v2 + 1, d2 + 1, l2)) > T2 && (v2 === u2 ? p2 *= 1 : a.test(t3.charAt(v2 - 1)) ? (p2 *= 0.8, (y2 = t3.slice(u2, v2 - 1).match(n)) && u2 > 0 && (p2 *= Math.pow(0.999, y2.length))) : i.test(t3.charAt(v2 - 1)) ? (p2 *= 0.9, (m2 = t3.slice(u2, v2 - 1).match(o)) && u2 > 0 && (p2 *= Math.pow(0.999, m2.length))) : (p2 *= 0.17, u2 > 0 && (p2 *= Math.pow(0.999, v2 - u2))), t3.charAt(v2) !== r3.charAt(d2) && (p2 *= 0.9999)), (p2 < 0.1 && s2.charAt(v2 - 1) === c3.charAt(d2 + 1) || c3.charAt(d2 + 1) === c3.charAt(d2) && s2.charAt(v2 - 1) !== c3.charAt(d2)) && 0.1 * (f2 = e3(t3, r3, s2, c3, v2 + 1, d2 + 2, l2)) > p2 && (p2 = 0.1 * f2), p2 > T2 && (T2 = p2), v2 = s2.indexOf(g2, v2 + 1);
      return l2[h2] = T2, T2;
    })(c2 = r2 && r2.length > 0 ? `${c2 + " " + r2.join(" ")}` : c2, t2, s(c2), s(t2), 0, 0, {});
  }, w = u.createContext(void 0), I = u.createContext(void 0), M = u.createContext(void 0), _ = u.forwardRef((e2, t2) => {
    let r2 = W(() => {
      var t3, r3;
      return { search: "", value: null != (r3 = null != (t3 = e2.value) ? t3 : e2.defaultValue) ? r3 : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
    }), a2 = W(() => /* @__PURE__ */ new Set()), n2 = W(() => /* @__PURE__ */ new Map()), i2 = W(() => /* @__PURE__ */ new Map()), o2 = W(() => /* @__PURE__ */ new Set()), s2 = A(e2), { label: c2, children: h2, value: p2, onValueChange: M2, filter: _2, shouldFilter: S2, loop: b2, disablePointerSelection: E2 = false, vimBindings: R2 = true, ...x2 } = e2, k2 = (0, l.useId)(), H2 = (0, l.useId)(), j2 = (0, l.useId)(), O2 = u.useRef(null), U2 = D();
    q(() => {
      if (void 0 !== p2) {
        let e3 = p2.trim();
        r2.current.value = e3, F2.emit();
      }
    }, [p2]), q(() => {
      U2(6, $);
    }, []);
    let F2 = u.useMemo(() => ({ subscribe: (e3) => (o2.current.add(e3), () => o2.current.delete(e3)), snapshot: () => r2.current, setState: (e3, t3, a3) => {
      var n3, i3, o3, c3;
      if (!Object.is(r2.current[e3], t3)) {
        if (r2.current[e3] = t3, "search" === e3) Q2(), L2(), U2(1, G2);
        else if ("value" === e3) {
          if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
            let e4 = document.getElementById(j2);
            e4 ? e4.focus() : null == (n3 = document.getElementById(k2)) || n3.focus();
          }
          if (U2(7, () => {
            var e4;
            r2.current.selectedItemId = null == (e4 = V()) ? void 0 : e4.id, F2.emit();
          }), a3 || U2(5, $), (null == (i3 = s2.current) ? void 0 : i3.value) !== void 0) {
            null == (c3 = (o3 = s2.current).onValueChange) || c3.call(o3, null != t3 ? t3 : "");
            return;
          }
        }
        F2.emit();
      }
    }, emit: () => {
      o2.current.forEach((e3) => e3());
    } }), []), B2 = u.useMemo(() => ({ value: (e3, t3, a3) => {
      var n3;
      t3 !== (null == (n3 = i2.current.get(e3)) ? void 0 : n3.value) && (i2.current.set(e3, { value: t3, keywords: a3 }), r2.current.filtered.items.set(e3, K2(t3, a3)), U2(2, () => {
        L2(), F2.emit();
      }));
    }, item: (e3, t3) => (a2.current.add(e3), t3 && (n2.current.has(t3) ? n2.current.get(t3).add(e3) : n2.current.set(t3, /* @__PURE__ */ new Set([e3]))), U2(3, () => {
      Q2(), L2(), r2.current.value || G2(), F2.emit();
    }), () => {
      i2.current.delete(e3), a2.current.delete(e3), r2.current.filtered.items.delete(e3);
      let t4 = V();
      U2(4, () => {
        Q2(), (null == t4 ? void 0 : t4.getAttribute("id")) === e3 && G2(), F2.emit();
      });
    }), group: (e3) => (n2.current.has(e3) || n2.current.set(e3, /* @__PURE__ */ new Set()), () => {
      i2.current.delete(e3), n2.current.delete(e3);
    }), filter: () => s2.current.shouldFilter, label: c2 || e2["aria-label"], getDisablePointerSelection: () => s2.current.disablePointerSelection, listId: k2, inputId: j2, labelId: H2, listInnerRef: O2 }), []);
    function K2(e3, t3) {
      var a3, n3;
      let i3 = null != (n3 = null == (a3 = s2.current) ? void 0 : a3.filter) ? n3 : P;
      return e3 ? i3(e3, r2.current.search, t3) : 0;
    }
    function L2() {
      if (!r2.current.search || false === s2.current.shouldFilter) return;
      let e3 = r2.current.filtered.items, t3 = [];
      r2.current.filtered.groups.forEach((r3) => {
        let a4 = n2.current.get(r3), i3 = 0;
        a4.forEach((t4) => {
          i3 = Math.max(e3.get(t4), i3);
        }), t3.push([r3, i3]);
      });
      let a3 = O2.current;
      z().sort((t4, r3) => {
        var a4, n3;
        let i3 = t4.getAttribute("id"), o3 = r3.getAttribute("id");
        return (null != (a4 = e3.get(o3)) ? a4 : 0) - (null != (n3 = e3.get(i3)) ? n3 : 0);
      }).forEach((e4) => {
        let t4 = e4.closest(y);
        t4 ? t4.appendChild(e4.parentElement === t4 ? e4 : e4.closest(`${y} > *`)) : a3.appendChild(e4.parentElement === a3 ? e4 : e4.closest(`${y} > *`));
      }), t3.sort((e4, t4) => t4[1] - e4[1]).forEach((e4) => {
        var t4;
        let r3 = null == (t4 = O2.current) ? void 0 : t4.querySelector(`${f}[${T}="${encodeURIComponent(e4[0])}"]`);
        null == r3 || r3.parentElement.appendChild(r3);
      });
    }
    function G2() {
      let e3 = z().find((e4) => "true" !== e4.getAttribute("aria-disabled")), t3 = null == e3 ? void 0 : e3.getAttribute(T);
      F2.setState("value", t3 || void 0);
    }
    function Q2() {
      var e3, t3, o3, c3;
      if (!r2.current.search || false === s2.current.shouldFilter) {
        r2.current.filtered.count = a2.current.size;
        return;
      }
      r2.current.filtered.groups = /* @__PURE__ */ new Set();
      let u2 = 0;
      for (let n3 of a2.current) {
        let a3 = K2(null != (t3 = null == (e3 = i2.current.get(n3)) ? void 0 : e3.value) ? t3 : "", null != (c3 = null == (o3 = i2.current.get(n3)) ? void 0 : o3.keywords) ? c3 : []);
        r2.current.filtered.items.set(n3, a3), a3 > 0 && u2++;
      }
      for (let [e4, t4] of n2.current) for (let a3 of t4) if (r2.current.filtered.items.get(a3) > 0) {
        r2.current.filtered.groups.add(e4);
        break;
      }
      r2.current.filtered.count = u2;
    }
    function $() {
      var e3, t3, r3;
      let a3 = V();
      a3 && ((null == (e3 = a3.parentElement) ? void 0 : e3.firstChild) === a3 && (null == (r3 = null == (t3 = a3.closest(f)) ? void 0 : t3.querySelector('[cmdk-group-heading=""]')) || r3.scrollIntoView({ block: "nearest" })), a3.scrollIntoView({ block: "nearest" }));
    }
    function V() {
      var e3;
      return null == (e3 = O2.current) ? void 0 : e3.querySelector(`${m}[aria-selected="true"]`);
    }
    function z() {
      var e3;
      return Array.from((null == (e3 = O2.current) ? void 0 : e3.querySelectorAll(g)) || []);
    }
    function J(e3) {
      let t3 = z()[e3];
      t3 && F2.setState("value", t3.getAttribute(T));
    }
    function X(e3) {
      var t3;
      let r3 = V(), a3 = z(), n3 = a3.findIndex((e4) => e4 === r3), i3 = a3[n3 + e3];
      null != (t3 = s2.current) && t3.loop && (i3 = n3 + e3 < 0 ? a3[a3.length - 1] : n3 + e3 === a3.length ? a3[0] : a3[n3 + e3]), i3 && F2.setState("value", i3.getAttribute(T));
    }
    function Y(e3) {
      let t3 = V(), r3 = null == t3 ? void 0 : t3.closest(f), a3;
      for (; r3 && !a3; ) a3 = null == (r3 = e3 > 0 ? (function(e4, t4) {
        let r4 = e4.nextElementSibling;
        for (; r4; ) {
          if (r4.matches(t4)) return r4;
          r4 = r4.nextElementSibling;
        }
      })(r3, f) : (function(e4, t4) {
        let r4 = e4.previousElementSibling;
        for (; r4; ) {
          if (r4.matches(t4)) return r4;
          r4 = r4.previousElementSibling;
        }
      })(r3, f)) ? void 0 : r3.querySelector(g);
      a3 ? F2.setState("value", a3.getAttribute(T)) : X(e3);
    }
    let Z = () => J(z().length - 1), ee = (e3) => {
      e3.preventDefault(), e3.metaKey ? Z() : e3.altKey ? Y(1) : X(1);
    }, et = (e3) => {
      e3.preventDefault(), e3.metaKey ? J(0) : e3.altKey ? Y(-1) : X(-1);
    };
    return u.createElement(d.Primitive.div, { ref: t2, tabIndex: -1, ...x2, "cmdk-root": "", onKeyDown: (e3) => {
      var t3;
      null == (t3 = x2.onKeyDown) || t3.call(x2, e3);
      let r3 = e3.nativeEvent.isComposing || 229 === e3.keyCode;
      if (!(e3.defaultPrevented || r3)) switch (e3.key) {
        case "n":
        case "j":
          R2 && e3.ctrlKey && ee(e3);
          break;
        case "ArrowDown":
          ee(e3);
          break;
        case "p":
        case "k":
          R2 && e3.ctrlKey && et(e3);
          break;
        case "ArrowUp":
          et(e3);
          break;
        case "Home":
          e3.preventDefault(), J(0);
          break;
        case "End":
          e3.preventDefault(), Z();
          break;
        case "Enter": {
          e3.preventDefault();
          let t4 = V();
          if (t4) {
            let e4 = new Event(v);
            t4.dispatchEvent(e4);
          }
        }
      }
    } }, u.createElement("label", { "cmdk-label": "", htmlFor: B2.inputId, id: B2.labelId, style: N }, c2), C(e2, (e3) => u.createElement(I.Provider, { value: F2 }, u.createElement(w.Provider, { value: B2 }, e3))));
  }), S = u.forwardRef((e2, t2) => {
    var r2, a2;
    let n2 = (0, l.useId)(), i2 = u.useRef(null), o2 = u.useContext(M), s2 = u.useContext(w), c2 = A(e2), p2 = null != (a2 = null == (r2 = c2.current) ? void 0 : r2.forceMount) ? a2 : null == o2 ? void 0 : o2.forceMount;
    q(() => {
      if (!p2) return s2.item(n2, null == o2 ? void 0 : o2.id);
    }, [p2]);
    let f2 = O(n2, i2, [e2.value, e2.children, i2], e2.keywords), y2 = u.useContext(I), m2 = j((e3) => e3.value && e3.value === f2.current), g2 = j((e3) => !!p2 || false === s2.filter() || !e3.search || e3.filtered.items.get(n2) > 0);
    function T2() {
      var e3, t3;
      P2(), null == (t3 = (e3 = c2.current).onSelect) || t3.call(e3, f2.current);
    }
    function P2() {
      y2.setState("value", f2.current, true);
    }
    if (u.useEffect(() => {
      let t3 = i2.current;
      if (!(!t3 || e2.disabled)) return t3.addEventListener(v, T2), () => t3.removeEventListener(v, T2);
    }, [g2, e2.onSelect, e2.disabled]), !g2) return null;
    let { disabled: _2, value: S2, onSelect: b2, forceMount: E2, keywords: R2, ...x2 } = e2;
    return u.createElement(d.Primitive.div, { ref: (0, h.composeRefs)(i2, t2), ...x2, id: n2, "cmdk-item": "", role: "option", "aria-disabled": !!_2, "aria-selected": !!m2, "data-disabled": !!_2, "data-selected": !!m2, onPointerMove: _2 || s2.getDisablePointerSelection() ? void 0 : P2, onClick: _2 ? void 0 : T2 }, e2.children);
  }), b = u.forwardRef((e2, t2) => {
    let { heading: r2, children: a2, forceMount: n2, ...i2 } = e2, o2 = (0, l.useId)(), s2 = u.useRef(null), c2 = u.useRef(null), p2 = (0, l.useId)(), f2 = u.useContext(w), y2 = j((e3) => !!n2 || false === f2.filter() || !e3.search || e3.filtered.groups.has(o2));
    q(() => f2.group(o2), []), O(o2, s2, [e2.value, e2.heading, c2]);
    let m2 = u.useMemo(() => ({ id: o2, forceMount: n2 }), [n2]);
    return u.createElement(d.Primitive.div, { ref: (0, h.composeRefs)(s2, t2), ...i2, "cmdk-group": "", role: "presentation", hidden: !y2 || void 0 }, r2 && u.createElement("div", { ref: c2, "cmdk-group-heading": "", "aria-hidden": true, id: p2 }, r2), C(e2, (e3) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r2 ? p2 : void 0 }, u.createElement(M.Provider, { value: m2 }, e3))));
  }), E = u.forwardRef((e2, t2) => {
    let { alwaysRender: r2, ...a2 } = e2, n2 = u.useRef(null), i2 = j((e3) => !e3.search);
    return r2 || i2 ? u.createElement(d.Primitive.div, { ref: (0, h.composeRefs)(n2, t2), ...a2, "cmdk-separator": "", role: "separator" }) : null;
  }), R = u.forwardRef((e2, t2) => {
    let { onValueChange: r2, ...a2 } = e2, n2 = null != e2.value, i2 = u.useContext(I), o2 = j((e3) => e3.search), s2 = j((e3) => e3.selectedItemId), c2 = u.useContext(w);
    return u.useEffect(() => {
      null != e2.value && i2.setState("search", e2.value);
    }, [e2.value]), u.createElement(d.Primitive.input, { ref: t2, ...a2, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": true, "aria-controls": c2.listId, "aria-labelledby": c2.labelId, "aria-activedescendant": s2, id: c2.inputId, type: "text", value: n2 ? e2.value : o2, onChange: (e3) => {
      n2 || i2.setState("search", e3.target.value), null == r2 || r2(e3.target.value);
    } });
  }), x = u.forwardRef((e2, t2) => {
    let { children: r2, label: a2 = "Suggestions", ...n2 } = e2, i2 = u.useRef(null), o2 = u.useRef(null), s2 = j((e3) => e3.selectedItemId), c2 = u.useContext(w);
    return u.useEffect(() => {
      if (o2.current && i2.current) {
        let e3 = o2.current, t3 = i2.current, r3, a3 = new ResizeObserver(() => {
          r3 = requestAnimationFrame(() => {
            let r4 = e3.offsetHeight;
            t3.style.setProperty("--cmdk-list-height", r4.toFixed(1) + "px");
          });
        });
        return a3.observe(e3), () => {
          cancelAnimationFrame(r3), a3.unobserve(e3);
        };
      }
    }, []), u.createElement(d.Primitive.div, { ref: (0, h.composeRefs)(i2, t2), ...n2, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s2, "aria-label": a2, id: c2.listId }, C(e2, (e3) => u.createElement("div", { ref: (0, h.composeRefs)(o2, c2.listInnerRef), "cmdk-list-sizer": "" }, e3)));
  }), k = u.forwardRef((e2, t2) => {
    let { open: r2, onOpenChange: a2, overlayClassName: n2, contentClassName: i2, container: o2, ...s2 } = e2;
    return u.createElement(c.Root, { open: r2, onOpenChange: a2 }, u.createElement(c.Portal, { container: o2 }, u.createElement(c.Overlay, { "cmdk-overlay": "", className: n2 }), u.createElement(c.Content, { "aria-label": e2.label, "cmdk-dialog": "", className: i2 }, u.createElement(_, { ref: t2, ...s2 }))));
  }), H = Object.assign(_, { List: x, Item: S, Input: R, Group: b, Separator: E, Dialog: k, Empty: u.forwardRef((e2, t2) => j((e3) => 0 === e3.filtered.count) ? u.createElement(d.Primitive.div, { ref: t2, ...e2, "cmdk-empty": "", role: "presentation" }) : null), Loading: u.forwardRef((e2, t2) => {
    let { progress: r2, children: a2, label: n2 = "Loading...", ...i2 } = e2;
    return u.createElement(d.Primitive.div, { ref: t2, ...i2, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r2, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": n2 }, C(e2, (e3) => u.createElement("div", { "aria-hidden": true }, e3)));
  }) });
  function A(e2) {
    let t2 = u.useRef(e2);
    return q(() => {
      t2.current = e2;
    }), t2;
  }
  var q = "u" < typeof window ? u.useEffect : u.useLayoutEffect;
  function W(e2) {
    let t2 = u.useRef();
    return void 0 === t2.current && (t2.current = e2()), t2;
  }
  function j(e2) {
    let t2 = u.useContext(I), r2 = () => e2(t2.snapshot());
    return u.useSyncExternalStore(t2.subscribe, r2, r2);
  }
  function O(e2, t2, r2, a2 = []) {
    let n2 = u.useRef(), i2 = u.useContext(w);
    return q(() => {
      var o2;
      let s2 = (() => {
        var e3;
        for (let t3 of r2) {
          if ("string" == typeof t3) return t3.trim();
          if ("object" == typeof t3 && "current" in t3) return t3.current ? null == (e3 = t3.current.textContent) ? void 0 : e3.trim() : n2.current;
        }
      })(), c2 = a2.map((e3) => e3.trim());
      i2.value(e2, s2, c2), null == (o2 = t2.current) || o2.setAttribute(T, s2), n2.current = s2;
    }), n2;
  }
  var D = () => {
    let [e2, t2] = u.useState(), r2 = W(() => /* @__PURE__ */ new Map());
    return q(() => {
      r2.current.forEach((e3) => e3()), r2.current = /* @__PURE__ */ new Map();
    }, [e2]), (e3, a2) => {
      r2.current.set(e3, a2), t2({});
    };
  };
  function C({ asChild: e2, children: t2 }, r2) {
    let a2;
    return e2 && u.isValidElement(t2) ? u.cloneElement("function" == typeof (a2 = t2.type) ? a2(t2.props) : "render" in a2 ? a2.render(t2.props) : t2, { ref: t2.ref }, r2(t2.props.children)) : r2(t2);
  }
  var N = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
  e.s(["Command", 0, H], 282718);
  var U = e.i(992766), F = e.i(28276), B = e.i(12594), K = e.i(618807), L = e.i(551360);
  try {
    var G = window;
    G._sentryModuleMetadata = G._sentryModuleMetadata || {}, G._sentryModuleMetadata[new G.Error().stack] = Object.assign({}, G._sentryModuleMetadata[new G.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["SearchResultCard", 0, function({ href: e2, value: r2, icon: a2, title: n2, badge: i2, description: o2, footer: s2, className: c2 }) {
    let [d2, l2] = (0, u.useState)(false), [h2, p2] = (0, u.useState)(false), f2 = (0, K.useAppPathname)(), y2 = (0, U.useRouter)(), { closeSearchModal: m2 } = (0, B.useSearchModal)(), g2 = (0, u.useRef)(false), v2 = (0, u.useCallback)(() => {
      let t2 = new URL(e2, window.location.origin), r3 = () => {
        if (t2.hash) {
          window.location.hash = t2.hash;
          let e3 = t2.hash.slice(1);
          setTimeout(() => {
            document.getElementById(e3)?.scrollIntoView({ behavior: "smooth" });
          }, 250);
        } else window.location.hash && (history.replaceState(null, "", t2.pathname + t2.search), setTimeout(() => {
          window.scrollTo({ behavior: "smooth", top: 0 });
        }, 250));
        t2.search && (window.location.search = t2.search);
      }, a3 = () => {
        window.removeEventListener("popstate", a3), clearTimeout(n3), r3();
      };
      window.addEventListener("popstate", a3);
      let n3 = setTimeout(() => {
        window.removeEventListener("popstate", a3), r3();
      }, 300);
      m2();
    }, [e2, m2]), T2 = (0, u.useCallback)(() => new URL(e2, window.location.origin).pathname === f2, [e2, f2]), P2 = (0, u.useCallback)(() => {
      let t2 = () => {
        window.removeEventListener("popstate", t2), clearTimeout(r3), y2.push(e2);
      };
      window.addEventListener("popstate", t2);
      let r3 = setTimeout(() => {
        window.removeEventListener("popstate", t2), y2.push(e2);
      }, 300);
      m2();
    }, [e2, m2, y2]);
    return (0, t.jsx)(H.Item, { value: r2, onSelect: () => {
      g2.current || (g2.current = true, l2(true), T2() ? v2() : P2());
    }, asChild: true, children: (0, t.jsxs)(F.LinkWithHoverPrefetch, { href: e2, className: (0, L.cn)("group relative cursor-pointer overflow-hidden rounded-[18px]", "before:absolute before:inset-x-0 before:-inset-y-0.5", c2), onClick: (e3) => {
      e3.metaKey || e3.ctrlKey || (e3.preventDefault(), g2.current = true, l2(true), T2() ? v2() : P2());
    }, onKeyDown: (e3) => {
      "Enter" === e3.key && p2(true);
    }, onKeyUp: (e3) => {
      "Enter" === e3.key && p2(false);
    }, children: [(0, t.jsx)("div", { className: (0, L.cn)("pointer-events-none absolute inset-0 rounded-[inherit] bg-surface-subtle opacity-0", "transition-opacity duration-150 ease-in-out", "group-data-[selected=true]:opacity-80 group-data-[selected=true]:duration-0", "group-active:opacity-100 group-active:duration-0", { "opacity-80": d2 }, { "opacity-100": h2 }) }), (0, t.jsxs)("div", { className: (0, L.cn)("relative flex w-full items-start gap-x-3.5 overflow-hidden p-3 pb-2.5"), children: [(0, t.jsx)("div", { className: "shrink-0", children: a2 }), (0, t.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col overflow-hidden", children: [(0, t.jsxs)("div", { className: "flex min-w-0 items-center gap-1", children: [(0, t.jsx)("div", { className: "min-w-0 truncate text-primary-foreground text-sm", children: n2 }), i2] }), o2 && (0, t.jsx)("div", { className: "mt-0.5 line-clamp-2 text-tertiary-foreground text-xs", children: o2 }), s2 && (0, t.jsx)("div", { className: "mt-0.5", children: s2 })] })] })] }) });
  }], 11793);
  try {
    var Q = window;
    Q._sentryModuleMetadata = Q._sentryModuleMetadata || {}, Q._sentryModuleMetadata[new Q.Error().stack] = Object.assign({}, Q._sentryModuleMetadata[new Q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["SearchResultIcon", 0, function({ className: e2, children: r2 }) {
    return (0, t.jsxs)("div", { className: (0, L.cn)("relative size-9.25 overflow-hidden rounded-[30%]", e2), children: [r2, (0, t.jsx)("div", { className: "absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_1px] shadow-black-100/10" })] });
  }], 36031);
}, 858659, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(282718), a = e.i(551360);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["SearchResultList", 0, function({ className: e2, children: n2 }) {
    return (0, t.jsx)(r.Command.List, { className: (0, a.cn)("relative flex w-full flex-col items-stretch overflow-visible px-2", e2), children: n2 });
  }]);
}]);
