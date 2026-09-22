;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "6972bfa9-c24e-049c-a298-e9b869fa9f67");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 849648, (e) => {
  "use strict";
  let t, a, i;
  var r = e.i(856757);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var s = Object.create, o = Object.defineProperty, l = Object.getOwnPropertyDescriptor, d = Object.getOwnPropertyNames, u = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, h = function(e10, t10) {
    return function() {
      return e10 && (t10 = e10(e10 = 0)), t10;
    };
  }, m = function(e10, t10) {
    return function() {
      return t10 || e10((t10 = { exports: {} }).exports, t10), t10.exports;
    };
  }, p = function(e10, t10, a10, i10) {
    if (t10 && "object" == typeof t10 || "function" == typeof t10) for (var r10, n10 = d(t10), s10 = 0, u10 = n10.length; s10 < u10; s10++) r10 = n10[s10], c.call(e10, r10) || r10 === a10 || o(e10, r10, { get: (function(e11) {
      return t10[e11];
    }).bind(null, r10), enumerable: !(i10 = l(t10, r10)) || i10.enumerable });
    return e10;
  }, v = function(e10, t10, a10) {
    return a10 = null != e10 ? s(u(e10)) : {}, p(!t10 && e10 && e10.__esModule ? a10 : o(a10, "default", { value: e10, enumerable: true }), e10);
  }, b = m(function(t10, a10) {
    a10.exports = "u" > typeof window ? window : e.g;
  });
  function g(e10, t10) {
    return null != t10 && "u" > typeof Symbol && t10[Symbol.hasInstance] ? !!t10[Symbol.hasInstance](e10) : g(e10, t10);
  }
  var y = h(function() {
    y();
  });
  function f(e10) {
    return e10 && "u" > typeof Symbol && e10.constructor === Symbol ? "symbol" : typeof e10;
  }
  var E = h(function() {
  }), w = m(function(e10, t10) {
    var a10 = Array.prototype.slice;
    t10.exports = function(e11, t11) {
      for (("length" in e11) || (e11 = [e11]), e11 = a10.call(e11); e11.length; ) {
        var i10 = e11.shift(), r10 = t11(i10);
        if (r10) return r10;
        i10.childNodes && i10.childNodes.length && (e11 = a10.call(i10.childNodes).concat(e11));
      }
    };
  }), T = m(function(e10, t10) {
    function a10(e11, t11) {
      if (!g(this, a10)) return new a10(e11, t11);
      this.data = e11, this.nodeValue = e11, this.length = e11.length, this.ownerDocument = t11 || null;
    }
    y(), t10.exports = a10, a10.prototype.nodeType = 8, a10.prototype.nodeName = "#comment", a10.prototype.toString = function() {
      return "[object Comment]";
    };
  }), A = m(function(e10, t10) {
    function a10(e11, t11) {
      if (!g(this, a10)) return new a10(e11);
      this.data = e11 || "", this.length = this.data.length, this.ownerDocument = t11 || null;
    }
    y(), t10.exports = a10, a10.prototype.type = "DOMTextNode", a10.prototype.nodeType = 3, a10.prototype.nodeName = "#text", a10.prototype.toString = function() {
      return this.data;
    }, a10.prototype.replaceData = function(e11, t11, a11) {
      var i10 = this.data, r10 = i10.substring(0, e11), n10 = i10.substring(e11 + t11, i10.length);
      this.data = r10 + a11 + n10, this.length = this.data.length;
    };
  }), k = m(function(e10, t10) {
    t10.exports = function(e11) {
      var t11 = this, a10 = e11.type;
      e11.target || (e11.target = t11), t11.listeners || (t11.listeners = {});
      var i10 = t11.listeners[a10];
      if (i10) return i10.forEach(function(a11) {
        e11.currentTarget = t11, "function" == typeof a11 ? a11(e11) : a11.handleEvent(e11);
      });
      t11.parentNode && t11.parentNode.dispatchEvent(e11);
    };
  }), M = m(function(e10, t10) {
    t10.exports = function(e11, t11) {
      this.listeners || (this.listeners = {}), this.listeners[e11] || (this.listeners[e11] = []), -1 === this.listeners[e11].indexOf(t11) && this.listeners[e11].push(t11);
    };
  }), S = m(function(e10, t10) {
    t10.exports = function(e11, t11) {
      if (this.listeners && this.listeners[e11]) {
        var a10 = this.listeners[e11], i10 = a10.indexOf(t11);
        -1 !== i10 && a10.splice(i10, 1);
      }
    };
  }), I = m(function(e10, t10) {
    E(), t10.exports = function e11(t11) {
      switch (t11.nodeType) {
        case 3:
          return r10(t11.data);
        case 8:
          return "<!--" + t11.data + "-->";
        default:
          var n10, s10, o10;
          return s10 = [], o10 = (n10 = t11).tagName, "http://www.w3.org/1999/xhtml" === n10.namespaceURI && (o10 = o10.toLowerCase()), s10.push("<" + o10 + (function(e12) {
            var t12 = [];
            for (var a11 in e12) (function(e13, t13) {
              var a12 = f(e13[t13]);
              return "style" === t13 && Object.keys(e13.style).length > 0 || e13.hasOwnProperty(t13) && ("string" === a12 || "boolean" === a12 || "number" === a12) && "nodeName" !== t13 && "className" !== t13 && "tagName" !== t13 && "textContent" !== t13 && "innerText" !== t13 && "namespaceURI" !== t13 && "innerHTML" !== t13;
            })(e12, a11) && t12.push({ name: a11, value: e12[a11] });
            for (var r11 in e12._attributes) for (var n11 in e12._attributes[r11]) {
              var s11 = e12._attributes[r11][n11], o11 = (s11.prefix ? s11.prefix + ":" : "") + n11;
              t12.push({ name: o11, value: s11.value });
            }
            return e12.className && t12.push({ name: "class", value: e12.className }), t12.length ? i10(t12) : "";
          })(n10) + (function(e12) {
            var t12 = e12.dataset, a11 = [];
            for (var r11 in t12) a11.push({ name: "data-" + r11, value: t12[r11] });
            return a11.length ? i10(a11) : "";
          })(n10)), a10.indexOf(o10) > -1 ? s10.push(" />") : (s10.push(">"), n10.childNodes.length ? s10.push.apply(s10, n10.childNodes.map(e11)) : n10.textContent || n10.innerText ? s10.push(r10(n10.textContent || n10.innerText)) : n10.innerHTML && s10.push(n10.innerHTML), s10.push("</" + o10 + ">")), s10.join("");
      }
    };
    var a10 = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"];
    function i10(e11) {
      var t11 = [];
      return e11.forEach(function(e12) {
        var a11 = e12.name, i11 = e12.value;
        "style" === a11 && (i11 = (function(e13) {
          if ("string" == typeof e13) return e13;
          var t12 = "";
          return Object.keys(e13).forEach(function(a12) {
            var i12 = e13[a12];
            a12 = a12.replace(/[A-Z]/g, function(e14) {
              return "-" + e14.toLowerCase();
            }), t12 += a12 + ":" + i12 + ";";
          }), t12;
        })(i11)), t11.push(a11 + '="' + r10(i11).replace(/"/g, "&quot;") + '"');
      }), t11.length ? " " + t11.join(" ") : "";
    }
    function r10(e11) {
      var t11 = "";
      return "string" == typeof e11 ? t11 = e11 : e11 && (t11 = e11.toString()), t11.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  }), R = m(function(e10, t10) {
    y();
    var a10 = w(), i10 = k(), r10 = M(), n10 = S(), s10 = I(), o10 = "http://www.w3.org/1999/xhtml";
    function l10(e11, t11, a11) {
      if (!g(this, l10)) return new l10(e11);
      var i11 = void 0 === a11 ? o10 : a11 || null;
      this.tagName = i11 === o10 ? String(e11).toUpperCase() : e11, this.nodeName = this.tagName, this.className = "", this.dataset = {}, this.childNodes = [], this.parentNode = null, this.style = {}, this.ownerDocument = t11 || null, this.namespaceURI = i11, this._attributes = {}, "INPUT" === this.tagName && (this.type = "text");
    }
    t10.exports = l10, l10.prototype.type = "DOMElement", l10.prototype.nodeType = 1, l10.prototype.appendChild = function(e11) {
      return e11.parentNode && e11.parentNode.removeChild(e11), this.childNodes.push(e11), e11.parentNode = this, e11;
    }, l10.prototype.replaceChild = function(e11, t11) {
      e11.parentNode && e11.parentNode.removeChild(e11);
      var a11 = this.childNodes.indexOf(t11);
      return t11.parentNode = null, this.childNodes[a11] = e11, e11.parentNode = this, t11;
    }, l10.prototype.removeChild = function(e11) {
      var t11 = this.childNodes.indexOf(e11);
      return this.childNodes.splice(t11, 1), e11.parentNode = null, e11;
    }, l10.prototype.insertBefore = function(e11, t11) {
      e11.parentNode && e11.parentNode.removeChild(e11);
      var a11 = null == t11 ? -1 : this.childNodes.indexOf(t11);
      return a11 > -1 ? this.childNodes.splice(a11, 0, e11) : this.childNodes.push(e11), e11.parentNode = this, e11;
    }, l10.prototype.setAttributeNS = function(e11, t11, a11) {
      var i11 = null, r11 = t11, n11 = t11.indexOf(":");
      (n11 > -1 && (i11 = t11.substr(0, n11), r11 = t11.substr(n11 + 1)), "INPUT" === this.tagName && "type" === t11) ? this.type = a11 : (this._attributes[e11] || (this._attributes[e11] = {}))[r11] = { value: a11, prefix: i11 };
    }, l10.prototype.getAttributeNS = function(e11, t11) {
      var a11 = this._attributes[e11], i11 = a11 && a11[t11] && a11[t11].value;
      return "INPUT" === this.tagName && "type" === t11 ? this.type : "string" != typeof i11 ? null : i11;
    }, l10.prototype.removeAttributeNS = function(e11, t11) {
      var a11 = this._attributes[e11];
      a11 && delete a11[t11];
    }, l10.prototype.hasAttributeNS = function(e11, t11) {
      var a11 = this._attributes[e11];
      return !!a11 && t11 in a11;
    }, l10.prototype.setAttribute = function(e11, t11) {
      return this.setAttributeNS(null, e11, t11);
    }, l10.prototype.getAttribute = function(e11) {
      return this.getAttributeNS(null, e11);
    }, l10.prototype.removeAttribute = function(e11) {
      return this.removeAttributeNS(null, e11);
    }, l10.prototype.hasAttribute = function(e11) {
      return this.hasAttributeNS(null, e11);
    }, l10.prototype.removeEventListener = n10, l10.prototype.addEventListener = r10, l10.prototype.dispatchEvent = i10, l10.prototype.focus = function() {
    }, l10.prototype.toString = function() {
      return s10(this);
    }, l10.prototype.getElementsByClassName = function(e11) {
      var t11 = e11.split(" "), i11 = [];
      return a10(this, function(e12) {
        if (1 === e12.nodeType) {
          var a11 = (e12.className || "").split(" ");
          t11.every(function(e13) {
            return -1 !== a11.indexOf(e13);
          }) && i11.push(e12);
        }
      }), i11;
    }, l10.prototype.getElementsByTagName = function(e11) {
      e11 = e11.toLowerCase();
      var t11 = [];
      return a10(this.childNodes, function(a11) {
        1 === a11.nodeType && ("*" === e11 || a11.tagName.toLowerCase() === e11) && t11.push(a11);
      }), t11;
    }, l10.prototype.contains = function(e11) {
      return a10(this, function(t11) {
        return e11 === t11;
      }) || false;
    };
  }), C = m(function(e10, t10) {
    y();
    var a10 = R();
    function i10(e11) {
      if (!g(this, i10)) return new i10();
      this.childNodes = [], this.parentNode = null, this.ownerDocument = e11 || null;
    }
    t10.exports = i10, i10.prototype.type = "DocumentFragment", i10.prototype.nodeType = 11, i10.prototype.nodeName = "#document-fragment", i10.prototype.appendChild = a10.prototype.appendChild, i10.prototype.replaceChild = a10.prototype.replaceChild, i10.prototype.removeChild = a10.prototype.removeChild, i10.prototype.toString = function() {
      return this.childNodes.map(function(e11) {
        return String(e11);
      }).join("");
    };
  }), L = m(function(e10, t10) {
    function a10(e11) {
    }
    t10.exports = a10, a10.prototype.initEvent = function(e11, t11, a11) {
      this.type = e11, this.bubbles = t11, this.cancelable = a11;
    }, a10.prototype.preventDefault = function() {
    };
  }), D = m(function(e10, t10) {
    y();
    var a10 = w(), i10 = T(), r10 = A(), n10 = R(), s10 = C(), o10 = L(), l10 = k(), d10 = M(), u10 = S();
    function c10() {
      if (!g(this, c10)) return new c10();
      this.head = this.createElement("head"), this.body = this.createElement("body"), this.documentElement = this.createElement("html"), this.documentElement.appendChild(this.head), this.documentElement.appendChild(this.body), this.childNodes = [this.documentElement], this.nodeType = 9;
    }
    t10.exports = c10;
    var h10 = c10.prototype;
    h10.createTextNode = function(e11) {
      return new r10(e11, this);
    }, h10.createElementNS = function(e11, t11) {
      return new n10(t11, this, null === e11 ? null : String(e11));
    }, h10.createElement = function(e11) {
      return new n10(e11, this);
    }, h10.createDocumentFragment = function() {
      return new s10(this);
    }, h10.createEvent = function(e11) {
      return new o10(e11);
    }, h10.createComment = function(e11) {
      return new i10(e11, this);
    }, h10.getElementById = function(e11) {
      return e11 = String(e11), a10(this.childNodes, function(t11) {
        if (String(t11.id) === e11) return t11;
      }) || null;
    }, h10.getElementsByClassName = n10.prototype.getElementsByClassName, h10.getElementsByTagName = n10.prototype.getElementsByTagName, h10.contains = n10.prototype.contains, h10.removeEventListener = u10, h10.addEventListener = d10, h10.dispatchEvent = l10;
  }), x = m(function(e10, t10) {
    t10.exports = new (D())();
  }), P = m(function(t10, a10) {
    var i10, r10 = e.g, n10 = x();
    "u" > typeof document ? i10 = document : (i10 = r10["__GLOBAL_DOCUMENT_CACHE@4"]) || (i10 = r10["__GLOBAL_DOCUMENT_CACHE@4"] = n10), a10.exports = i10;
  });
  function O(e10, t10) {
    (null == t10 || t10 > e10.length) && (t10 = e10.length);
    for (var a10 = 0, i10 = Array(t10); a10 < t10; a10++) i10[a10] = e10[a10];
    return i10;
  }
  function N(e10, t10) {
    if (e10) {
      if ("string" == typeof e10) return O(e10, t10);
      var a10 = Object.prototype.toString.call(e10).slice(8, -1);
      if ("Object" === a10 && e10.constructor && (a10 = e10.constructor.name), "Map" === a10 || "Set" === a10) return Array.from(a10);
      if ("Arguments" === a10 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a10)) return O(e10, t10);
    }
  }
  function U(e10, t10) {
    return (function(e11) {
      if (Array.isArray(e11)) return e11;
    })(e10) || (function(e11, t11) {
      var a10 = null == e11 ? null : "u" > typeof Symbol && e11[Symbol.iterator] || e11["@@iterator"];
      if (null != a10) {
        var i10, r10, n10 = [], s10 = true, o10 = false;
        try {
          for (a10 = a10.call(e11); !(s10 = (i10 = a10.next()).done) && (n10.push(i10.value), !(t11 && n10.length === t11)); s10 = true) ;
        } catch (e12) {
          o10 = true, r10 = e12;
        } finally {
          try {
            s10 || null == a10.return || a10.return();
          } finally {
            if (o10) throw r10;
          }
        }
        return n10;
      }
    })(e10, t10) || N(e10, t10) || (function() {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  var B = v(b()), H = v(b()), W = v(b()), $ = function() {
    var e10 = W.default.performance, t10 = e10 && e10.timing, a10 = t10 && t10.navigationStart;
    return Math.round("number" == typeof a10 && "function" == typeof e10.now ? a10 + e10.now() : Date.now());
  }, q = function() {
    if ("function" == typeof (null == (e10 = H.default.crypto) ? void 0 : e10.getRandomValues)) {
      a10 = new Uint8Array(32), H.default.crypto.getRandomValues(a10);
      for (var e10, t10, a10, i10 = 0; i10 < 32; i10++) a10[i10] = a10[i10] % 16;
    } else {
      a10 = [];
      for (var r10 = 0; r10 < 32; r10++) a10[r10] = 16 * Math.random() | 0;
    }
    var n10 = 0;
    t10 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e11) {
      var t11 = "x" === e11 ? a10[n10] : 3 & a10[n10] | 8;
      return n10++, t11.toString(16);
    });
    var s10 = $(), o10 = null == s10 ? void 0 : s10.toString(16).substring(3);
    return o10 ? t10.substring(0, 28) + o10 : t10;
  }, V = function() {
    return ("000000" + (2176782336 * Math.random() | 0).toString(36)).slice(-6);
  }, K = function(e10) {
    var t10;
    if (e10 && void 0 !== e10.nodeName) return e10.muxId || (e10.muxId = V()), e10.muxId;
    try {
      t10 = document.querySelector(e10);
    } catch (e11) {
    }
    return t10 && !t10.muxId && (t10.muxId = e10), (null == t10 ? void 0 : t10.muxId) || e10;
  }, F = function(e10) {
    e10 && void 0 !== e10.nodeName ? e10 = K(t10 = e10) : t10 = document.querySelector(e10);
    var t10, a10 = t10 && t10.nodeName ? t10.nodeName.toLowerCase() : "";
    return [t10, e10, a10];
  };
  function j(e10) {
    return (function(e11) {
      if (Array.isArray(e11)) return O(e11);
    })(e10) || (function(e11) {
      if ("u" > typeof Symbol && null != e11[Symbol.iterator] || null != e11["@@iterator"]) return Array.from(e11);
    })(e10) || N(e10) || (function() {
      throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  var G = (function(e10) {
    var t10, a10, i10, r10, n10, s10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3, o10 = e10 ? [console, e10] : [console], l10 = (t10 = console.trace).bind.apply(t10, j(o10)), d10 = (a10 = console.info).bind.apply(a10, j(o10)), u10 = (i10 = console.debug).bind.apply(i10, j(o10)), c10 = (r10 = console.warn).bind.apply(r10, j(o10)), h10 = (n10 = console.error).bind.apply(n10, j(o10)), m10 = s10;
    return { trace: function() {
      for (var e11 = arguments.length, t11 = Array(e11), a11 = 0; a11 < e11; a11++) t11[a11] = arguments[a11];
      if (!(m10 > 0)) return l10.apply(void 0, j(t11));
    }, debug: function() {
      for (var e11 = arguments.length, t11 = Array(e11), a11 = 0; a11 < e11; a11++) t11[a11] = arguments[a11];
      if (!(m10 > 1)) return u10.apply(void 0, j(t11));
    }, info: function() {
      for (var e11 = arguments.length, t11 = Array(e11), a11 = 0; a11 < e11; a11++) t11[a11] = arguments[a11];
      if (!(m10 > 2)) return d10.apply(void 0, j(t11));
    }, warn: function() {
      for (var e11 = arguments.length, t11 = Array(e11), a11 = 0; a11 < e11; a11++) t11[a11] = arguments[a11];
      if (!(m10 > 3)) return c10.apply(void 0, j(t11));
    }, error: function() {
      for (var e11 = arguments.length, t11 = Array(e11), a11 = 0; a11 < e11; a11++) t11[a11] = arguments[a11];
      if (!(m10 > 4)) return h10.apply(void 0, j(t11));
    }, get level() {
      return m10;
    }, set level(_) {
      _ !== this.level && (m10 = null != _ ? _ : s10);
    } };
  })("[mux]"), Y = v(b());
  function Q() {
    return "1" === (Y.default.doNotTrack || Y.default.navigator && Y.default.navigator.doNotTrack);
  }
  function z(e10) {
    if (void 0 === e10) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e10;
  }
  function Z(e10, t10) {
    if (!g(e10, t10)) throw TypeError("Cannot call a class as a function");
  }
  function X(e10, t10) {
    for (var a10 = 0; a10 < t10.length; a10++) {
      var i10 = t10[a10];
      i10.enumerable = i10.enumerable || false, i10.configurable = true, "value" in i10 && (i10.writable = true), Object.defineProperty(e10, i10.key, i10);
    }
  }
  function J(e10, t10, a10) {
    return t10 && X(e10.prototype, t10), a10 && X(e10, a10), e10;
  }
  function ee(e10, t10, a10) {
    return t10 in e10 ? Object.defineProperty(e10, t10, { value: a10, enumerable: true, configurable: true, writable: true }) : e10[t10] = a10, e10;
  }
  function et(e10) {
    return (et = Object.setPrototypeOf ? Object.getPrototypeOf : function(e11) {
      return e11.__proto__ || Object.getPrototypeOf(e11);
    })(e10);
  }
  function ea(e10, t10, a10) {
    return (ea = "u" > typeof Reflect && Reflect.get ? Reflect.get : function(e11, t11, a11) {
      var i10 = (function(e12, t12) {
        for (; !Object.prototype.hasOwnProperty.call(e12, t12) && null !== (e12 = et(e12)); ) ;
        return e12;
      })(e11, t11);
      if (i10) {
        var r10 = Object.getOwnPropertyDescriptor(i10, t11);
        return r10.get ? r10.get.call(a11 || e11) : r10.value;
      }
    })(e10, t10, a10 || e10);
  }
  function ei(e10, t10) {
    return (ei = Object.setPrototypeOf || function(e11, t11) {
      return e11.__proto__ = t11, e11;
    })(e10, t10);
  }
  y(), E();
  var er = function(e10) {
    return en(e10)[0];
  }, en = function(e10) {
    if ("string" != typeof e10 || "" === e10) return ["localhost"];
    var t10, a10 = (e10.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [])[4];
    return a10 && (t10 = (a10.match(/[^\.]+\.[^\.]+$/) || [])[0]), [a10, t10];
  }, es = v(b()), eo = function() {
    var e10 = es.default.performance;
    return void 0 !== (e10 && e10.timing);
  }, el = function() {
    var e10 = es.default.performance, t10 = e10 && e10.timing;
    return t10 && t10.domContentLoadedEventEnd;
  }, ed = function() {
    var e10 = es.default.performance, t10 = e10 && e10.timing;
    return t10 && t10.navigationStart;
  };
  function eu(e10, t10, a10) {
    a10 = void 0 === a10 ? 1 : a10, e10[t10] = e10[t10] || 0, e10[t10] += a10;
  }
  function ec(e10) {
    for (var t10 = 1; t10 < arguments.length; t10++) {
      var a10 = null != arguments[t10] ? arguments[t10] : {}, i10 = Object.keys(a10);
      "function" == typeof Object.getOwnPropertySymbols && (i10 = i10.concat(Object.getOwnPropertySymbols(a10).filter(function(e11) {
        return Object.getOwnPropertyDescriptor(a10, e11).enumerable;
      }))), i10.forEach(function(t11) {
        ee(e10, t11, a10[t11]);
      });
    }
    return e10;
  }
  function eh(e10, t10) {
    return t10 = null != t10 ? t10 : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e10, Object.getOwnPropertyDescriptors(t10)) : (function(e11) {
      var t11 = Object.keys(e11);
      if (Object.getOwnPropertySymbols) {
        var a10 = Object.getOwnPropertySymbols(e11);
        t11.push.apply(t11, a10);
      }
      return t11;
    })(Object(t10)).forEach(function(a10) {
      Object.defineProperty(e10, a10, Object.getOwnPropertyDescriptor(t10, a10));
    }), e10;
  }
  var em = ["x-request-id", "cf-ray", "x-amz-cf-id", "x-akamai-request-id"], ep = ["x-cdn", "content-type"].concat(em);
  function ev(e10) {
    var t10 = {};
    return (e10 = e10 || "").trim().split(/[\r\n]+/).forEach(function(e11) {
      if (e11) {
        var a10 = e11.split(": "), i10 = a10.shift();
        i10 && (ep.indexOf(i10.toLowerCase()) >= 0 || 0 === i10.toLowerCase().indexOf("x-litix-")) && (t10[i10] = a10.join(": "));
      }
    }), t10;
  }
  function eb(e10) {
    if (e10) {
      var t10 = em.find(function(t11) {
        return void 0 !== e10[t11];
      });
      return t10 ? e10[t10] : void 0;
    }
  }
  var eg = function(e10) {
    var t10 = {};
    for (var a10 in e10) {
      var i10 = e10[a10];
      -1 !== i10["DATA-ID"].search("io.litix.data.") && (t10[i10["DATA-ID"].replace("io.litix.data.", "")] = i10.VALUE);
    }
    return t10;
  }, ey = function(e10) {
    if (!e10) return {};
    var t10 = ed(), a10 = e10.loading, i10 = a10 ? a10.start : e10.trequest, r10 = a10 ? a10.first : e10.tfirst, n10 = a10 ? a10.end : e10.tload;
    return { bytesLoaded: e10.total, requestStart: Math.round(t10 + i10), responseStart: Math.round(t10 + r10), responseEnd: Math.round(t10 + n10) };
  }, ef = function(e10) {
    if (!(!e10 || "function" != typeof e10.getAllResponseHeaders)) return ev(e10.getAllResponseHeaders());
  }, eE = function(e10, t10, a10) {
    arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    var i10 = arguments.length > 4 ? arguments[4] : void 0, r10 = e10.log, n10 = e10.utils.secondsToMs, s10 = function(e11) {
      var t11, a11 = parseInt(i10.version);
      return 1 === a11 && null !== e11.programDateTime && (t11 = e11.programDateTime), 0 === a11 && null !== e11.pdt && (t11 = e11.pdt), t11;
    };
    if (!eo()) return void r10.warn("performance timing not supported. Not tracking HLS.js.");
    var o10 = function(a11, i11) {
      return e10.emit(t10, a11, i11);
    }, l10 = function(e11, t11) {
      var a11 = t11.levels, i11 = t11.audioTracks, r11 = t11.url, n11 = t11.stats, s11 = t11.networkDetails, l11 = t11.sessionData, d11 = {}, u11 = {};
      a11.forEach(function(e12, t12) {
        d11[t12] = { width: e12.width, height: e12.height, bitrate: e12.bitrate, attrs: e12.attrs };
      }), i11.forEach(function(e12, t12) {
        u11[t12] = { name: e12.name, language: e12.lang, bitrate: e12.bitrate };
      });
      var c11 = ey(n11), h11 = c11.bytesLoaded, m11 = c11.requestStart, p11 = c11.responseStart, v11 = c11.responseEnd;
      o10("requestcompleted", eh(ec({}, eg(l11)), { request_event_type: e11, request_bytes_loaded: h11, request_start: m11, request_response_start: p11, request_response_end: v11, request_type: "manifest", request_hostname: er(r11), request_response_headers: ef(s11), request_rendition_lists: { media: d11, audio: u11, video: {} } }));
    };
    a10.on(i10.Events.MANIFEST_LOADED, l10);
    var d10 = function(e11, t11) {
      var a11 = t11.details, i11 = t11.level, r11 = t11.networkDetails, l11 = ey(t11.stats), d11 = l11.bytesLoaded, u11 = l11.requestStart, c11 = l11.responseStart, h11 = l11.responseEnd, m11 = a11.fragments[a11.fragments.length - 1], p11 = s10(m11) + n10(m11.duration);
      o10("requestcompleted", { request_event_type: e11, request_bytes_loaded: d11, request_start: u11, request_response_start: c11, request_response_end: h11, request_current_level: i11, request_type: "manifest", request_hostname: er(a11.url), request_response_headers: ef(r11), video_holdback: a11.holdBack && n10(a11.holdBack), video_part_holdback: a11.partHoldBack && n10(a11.partHoldBack), video_part_target_duration: a11.partTarget && n10(a11.partTarget), video_target_duration: a11.targetduration && n10(a11.targetduration), video_source_is_live: a11.live, player_manifest_newest_program_time: isNaN(p11) ? void 0 : p11 });
    };
    a10.on(i10.Events.LEVEL_LOADED, d10);
    var u10 = function(e11, t11) {
      var a11 = t11.details, i11 = t11.networkDetails, r11 = ey(t11.stats);
      o10("requestcompleted", { request_event_type: e11, request_bytes_loaded: r11.bytesLoaded, request_start: r11.requestStart, request_response_start: r11.responseStart, request_response_end: r11.responseEnd, request_type: "manifest", request_hostname: er(a11.url), request_response_headers: ef(i11) });
    };
    a10.on(i10.Events.AUDIO_TRACK_LOADED, u10);
    var c10 = function(e11, t11) {
      var i11 = t11.stats, r11 = t11.networkDetails, n11 = t11.frag, s11 = ey(i11 = i11 || n11.stats), l11 = s11.bytesLoaded, d11 = s11.requestStart, u11 = s11.responseStart, c11 = s11.responseEnd, h11 = r11 ? ef(r11) : void 0, m11 = { request_event_type: e11, request_bytes_loaded: l11, request_start: d11, request_response_start: u11, request_response_end: c11, request_hostname: r11 ? er(r11.responseURL) : void 0, request_id: h11 ? eb(h11) : void 0, request_response_headers: h11, request_media_duration: n11.duration, request_url: null == r11 ? void 0 : r11.responseURL };
      "main" === n11.type ? (m11.request_type = "media", m11.request_current_level = n11.level, m11.request_video_width = (a10.levels[n11.level] || {}).width, m11.request_video_height = (a10.levels[n11.level] || {}).height, m11.request_labeled_bitrate = (a10.levels[n11.level] || {}).bitrate) : m11.request_type = n11.type, o10("requestcompleted", m11);
    };
    a10.on(i10.Events.FRAG_LOADED, c10);
    var h10 = function(e11, t11) {
      var a11 = t11.frag, i11 = a11.start;
      o10("fragmentchange", { currentFragmentPDT: s10(a11), currentFragmentStart: n10(i11) });
    };
    a10.on(i10.Events.FRAG_CHANGED, h10);
    var m10 = function(e11, t11) {
      var a11, r11 = t11.type, n11 = t11.details, s11 = t11.response, l11 = t11.fatal, d11 = t11.frag, u11 = t11.networkDetails, c11 = (null == d11 ? void 0 : d11.url) || t11.url || "", h11 = u11 ? ef(u11) : void 0;
      (n11 === i10.ErrorDetails.MANIFEST_LOAD_ERROR || n11 === i10.ErrorDetails.MANIFEST_LOAD_TIMEOUT || n11 === i10.ErrorDetails.FRAG_LOAD_ERROR || n11 === i10.ErrorDetails.FRAG_LOAD_TIMEOUT || n11 === i10.ErrorDetails.LEVEL_LOAD_ERROR || n11 === i10.ErrorDetails.LEVEL_LOAD_TIMEOUT || n11 === i10.ErrorDetails.AUDIO_TRACK_LOAD_ERROR || n11 === i10.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT || n11 === i10.ErrorDetails.SUBTITLE_LOAD_ERROR || n11 === i10.ErrorDetails.SUBTITLE_LOAD_TIMEOUT || n11 === i10.ErrorDetails.KEY_LOAD_ERROR || n11 === i10.ErrorDetails.KEY_LOAD_TIMEOUT) && o10("requestfailed", { request_error: n11, request_url: c11, request_hostname: er(c11), request_id: h11 ? eb(h11) : void 0, request_type: n11 === i10.ErrorDetails.FRAG_LOAD_ERROR || n11 === i10.ErrorDetails.FRAG_LOAD_TIMEOUT ? "media" : n11 === i10.ErrorDetails.AUDIO_TRACK_LOAD_ERROR || n11 === i10.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT ? "audio" : n11 === i10.ErrorDetails.SUBTITLE_LOAD_ERROR || n11 === i10.ErrorDetails.SUBTITLE_LOAD_TIMEOUT ? "subtitle" : n11 === i10.ErrorDetails.KEY_LOAD_ERROR || n11 === i10.ErrorDetails.KEY_LOAD_TIMEOUT ? "encryption" : "manifest", request_error_code: null == s11 ? void 0 : s11.code, request_error_text: null == s11 ? void 0 : s11.text }), l11 && o10("error", { player_error_code: r11, player_error_message: n11, player_error_context: "".concat(c11 ? "url: ".concat(c11, "\n") : "") + "".concat(s11 && (s11.code || s11.text) ? "response: ".concat(s11.code, ", ").concat(s11.text, "\n") : "") + "".concat(t11.reason ? "failure reason: ".concat(t11.reason, "\n") : "") + "".concat(t11.level ? "level: ".concat(t11.level, "\n") : "") + "".concat(t11.parent ? "parent stream controller: ".concat(t11.parent, "\n") : "") + "".concat(t11.buffer ? "buffer length: ".concat(t11.buffer, "\n") : "") + "".concat(t11.error ? "error: ".concat(t11.error, "\n") : "") + "".concat(t11.event ? "event: ".concat(t11.event, "\n") : "") + "".concat(t11.err ? "error message: ".concat(null == (a11 = t11.err) ? void 0 : a11.message, "\n") : "") });
    };
    a10.on(i10.Events.ERROR, m10);
    var p10 = function(e11, t11) {
      var a11 = t11.frag, i11 = a11 && a11._url || "";
      o10("requestcanceled", { request_event_type: e11, request_url: i11, request_type: "media", request_hostname: er(i11) });
    };
    a10.on(i10.Events.FRAG_LOAD_EMERGENCY_ABORTED, p10);
    var v10 = function(e11, t11) {
      var i11 = t11.level, n11 = a10.levels[i11];
      if (n11 && n11.attrs && n11.attrs.BANDWIDTH) {
        var s11, l11 = n11.attrs.BANDWIDTH, d11 = parseFloat(n11.attrs["FRAME-RATE"]);
        isNaN(d11) || (s11 = d11), l11 ? o10("renditionchange", { video_source_fps: s11, video_source_bitrate: l11, video_source_width: n11.width, video_source_height: n11.height, video_source_rendition_name: n11.name, video_source_codec: null == n11 ? void 0 : n11.videoCodec }) : r10.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js");
      }
    };
    a10.on(i10.Events.LEVEL_SWITCHED, v10), a10._stopMuxMonitor = function() {
      a10.off(i10.Events.MANIFEST_LOADED, l10), a10.off(i10.Events.LEVEL_LOADED, d10), a10.off(i10.Events.AUDIO_TRACK_LOADED, u10), a10.off(i10.Events.FRAG_LOADED, c10), a10.off(i10.Events.FRAG_CHANGED, h10), a10.off(i10.Events.ERROR, m10), a10.off(i10.Events.FRAG_LOAD_EMERGENCY_ABORTED, p10), a10.off(i10.Events.LEVEL_SWITCHED, v10), a10.off(i10.Events.DESTROYING, a10._stopMuxMonitor), delete a10._stopMuxMonitor;
    }, a10.on(i10.Events.DESTROYING, a10._stopMuxMonitor);
  }, e_ = function(e10) {
    e10 && "function" == typeof e10._stopMuxMonitor && e10._stopMuxMonitor();
  }, ew = function(e10, t10) {
    if (!e10 || !e10.requestEndDate) return {};
    var a10, i10 = er(e10.url), r10 = e10.url, n10 = e10.bytesLoaded, s10 = new Date(e10.requestStartDate).getTime(), o10 = new Date(e10.firstByteDate).getTime(), l10 = new Date(e10.requestEndDate).getTime(), d10 = isNaN(e10.duration) ? 0 : e10.duration, u10 = "function" == typeof t10.getMetricsFor ? t10.getMetricsFor(e10.mediaType).HttpList : t10.getDashMetrics().getHttpRequests(e10.mediaType);
    u10.length > 0 && (a10 = ev(u10[u10.length - 1]._responseHeaders || ""));
    var c10 = a10 ? eb(a10) : void 0;
    return { requestStart: s10, requestResponseStart: o10, requestResponseEnd: l10, requestBytesLoaded: n10, requestResponseHeaders: a10, requestMediaDuration: d10, requestHostname: i10, requestUrl: r10, requestId: c10 };
  }, eT = function(e10, t10) {
    if ("function" == typeof t10.getCurrentRepresentationForType) {
      var a10 = t10.getCurrentRepresentationForType(e10);
      return a10 ? { currentLevel: a10.absoluteIndex, renditionWidth: a10.width || null, renditionHeight: a10.height || null, renditionBitrate: a10.bandwidth } : {};
    }
    var i10 = t10.getQualityFor(e10), r10 = t10.getCurrentTrackFor(e10).bitrateList;
    return r10 ? { currentLevel: i10, renditionWidth: r10[i10].width || null, renditionHeight: r10[i10].height || null, renditionBitrate: r10[i10].bandwidth } : {};
  }, eA = function(e10) {
    var t10;
    return null == (t10 = e10.match(/.*codecs\*?="(.*)"/)) ? void 0 : t10[1];
  }, ek = function(e10) {
    try {
      var t10, a10;
      return null == (a10 = e10.getVersion) || null == (t10 = a10.call(e10)) ? void 0 : t10.split(".").map(function(e11) {
        return parseInt(e11);
      })[0];
    } catch (e11) {
      return false;
    }
  }, eM = function(e10, t10, a10) {
    arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    var i10 = e10.log;
    if (!a10 || !a10.on) return void i10.warn("Invalid dash.js player reference. Monitoring blocked.");
    var r10 = ek(a10), n10 = function(a11, i11) {
      return e10.emit(t10, a11, i11);
    }, s10 = function(e11) {
      var t11 = e11.type, a11 = (e11.data || {}).url;
      n10("requestcompleted", { request_event_type: t11, request_start: 0, request_response_start: 0, request_response_end: 0, request_bytes_loaded: -1, request_type: "manifest", request_hostname: er(a11), request_url: a11 });
    };
    a10.on("manifestLoaded", s10);
    var o10 = {}, l10 = function(e11) {
      if ("function" != typeof e11.getRequests) return null;
      var t11 = e11.getRequests({ state: "executed" });
      return 0 === t11.length ? null : t11[t11.length - 1];
    }, d10 = function(e11) {
      var t11 = e11.type, i11 = e11.chunk, r11 = e11.request, s11 = (i11 || {}).mediaInfo || {}, l11 = s11.type, d11 = s11.bitrateList, u11 = {};
      (d11 = d11 || []).forEach(function(e12, t12) {
        u11[t12] = {}, u11[t12].width = e12.width, u11[t12].height = e12.height, u11[t12].bitrate = e12.bandwidth, u11[t12].attrs = {};
      }), "video" === l11 ? o10.video = u11 : "audio" === l11 ? o10.audio = u11 : o10.media = u11;
      var c11 = ew(r11, a10), h11 = c11.requestStart, m11 = c11.requestResponseStart, p11 = c11.requestResponseEnd, v11 = c11.requestResponseHeaders, b10 = c11.requestMediaDuration, g2 = c11.requestHostname, y2 = c11.requestUrl;
      n10("requestcompleted", { request_event_type: t11, request_start: h11, request_response_start: m11, request_response_end: p11, request_bytes_loaded: -1, request_type: l11 + "_init", request_response_headers: v11, request_hostname: g2, request_id: c11.requestId, request_url: y2, request_media_duration: b10, request_rendition_lists: o10 });
    };
    r10 >= 4 ? a10.on("initFragmentLoaded", d10) : a10.on("initFragmentLoaded", function(e11) {
      var t11 = e11.type, a11 = e11.fragmentModel, i11 = e11.chunk;
      d10({ type: t11, request: l10(a11), chunk: i11 });
    });
    var u10 = function(e11) {
      var t11 = e11.type, i11 = e11.chunk, r11 = e11.request, s11 = i11 || {}, o11 = s11.mediaInfo, l11 = s11.start, d11 = (o11 || {}).type, u11 = ew(r11, a10), c11 = u11.requestStart, h11 = u11.requestResponseStart, m11 = u11.requestResponseEnd, p11 = u11.requestBytesLoaded, v11 = u11.requestResponseHeaders, b10 = u11.requestMediaDuration, g2 = u11.requestHostname, y2 = u11.requestUrl, f2 = u11.requestId, E2 = eT(d11, a10), w2 = E2.currentLevel, T2 = E2.renditionWidth, A2 = E2.renditionHeight;
      n10("requestcompleted", { request_event_type: t11, request_start: c11, request_response_start: h11, request_response_end: m11, request_bytes_loaded: p11, request_type: d11, request_response_headers: v11, request_hostname: g2, request_id: f2, request_url: y2, request_media_start_time: l11, request_media_duration: b10, request_current_level: w2, request_labeled_bitrate: E2.renditionBitrate, request_video_width: T2, request_video_height: A2 });
    };
    r10 >= 4 ? a10.on("mediaFragmentLoaded", u10) : a10.on("mediaFragmentLoaded", function(e11) {
      var t11 = e11.type, a11 = e11.fragmentModel, i11 = e11.chunk;
      u10({ type: t11, request: l10(a11), chunk: i11 });
    });
    var c10 = { video: void 0, audio: void 0, totalBitrate: void 0 }, h10 = function() {
      if (c10.video && "number" == typeof c10.video.bitrate) {
        if (!(c10.video.width && c10.video.height)) return void i10.warn("have bitrate info for video but missing width/height");
        var e11 = c10.video.bitrate;
        if (c10.audio && "number" == typeof c10.audio.bitrate && (e11 += c10.audio.bitrate), e11 !== c10.totalBitrate) return c10.totalBitrate = e11, { video_source_bitrate: e11, video_source_height: c10.video.height, video_source_width: c10.video.width, video_source_codec: eA(c10.video.codec) };
      }
    }, m10 = function(e11, t11, r11) {
      var s11 = e11.mediaType;
      if ("audio" === s11 || "video" === s11) {
        if ("function" == typeof a10.getRepresentationsByType) if (e11.newRepresentation) o11 = { bitrate: e11.newRepresentation.bandwidth, width: e11.newRepresentation.width, height: e11.newRepresentation.height, qualityIndex: e11.newRepresentation.absoluteIndex };
        else {
          var o11, l11 = a10.getRepresentationsByType(s11);
          if (l11 && "number" == typeof e11.newQuality) {
            var d11 = l11.find(function(t12) {
              return t12.absoluteIndex === e11.newQuality || t12.index === e11.newQuality;
            });
            d11 && (o11 = { bitrate: d11.bandwidth, width: d11.width, height: d11.height, qualityIndex: e11.newQuality });
          }
        }
        else {
          if ("number" != typeof e11.newQuality) return void i10.warn("missing evt.newQuality in qualityChangeRendered event", e11);
          o11 = a10.getBitrateInfoListFor(s11).find(function(t12) {
            return t12.qualityIndex === e11.newQuality;
          });
        }
        if (!(o11 && "number" == typeof o11.bitrate)) return void i10.warn("missing bitrate info for ".concat(s11));
        c10[s11] = eh(ec({}, o11), { codec: a10.getCurrentTrackFor(s11).codec });
        var u11 = h10();
        u11 && n10("renditionchange", u11);
      }
    };
    a10.on("qualityChangeRendered", m10);
    var p10 = function(e11) {
      var t11 = e11.request, a11 = e11.mediaType;
      n10("requestcanceled", { request_event_type: (t11 = t11 || {}).type + "_" + t11.action, request_url: t11.url, request_type: a11, request_hostname: er(t11.url) });
    };
    a10.on("fragmentLoadingAbandoned", p10);
    var v10 = function(e11) {
      var t11, a11, i11 = e11.error, r11 = (null == i11 || null == (t11 = i11.data) ? void 0 : t11.request) || {}, s11 = (null == i11 || null == (a11 = i11.data) ? void 0 : a11.response) || {};
      (null == i11 ? void 0 : i11.code) === 27 && n10("requestfailed", { request_error: r11.type + "_" + r11.action, request_url: r11.url, request_hostname: er(r11.url), request_type: r11.mediaType, request_error_code: s11.status, request_error_text: s11.statusText });
      var o11 = "".concat(null != r11 && r11.url ? "url: ".concat(r11.url, "\n") : "") + "".concat(null != s11 && s11.status || null != s11 && s11.statusText ? "response: ".concat(null == s11 ? void 0 : s11.status, ", ").concat(null == s11 ? void 0 : s11.statusText, "\n") : "");
      n10("error", { player_error_code: null == i11 ? void 0 : i11.code, player_error_message: null == i11 ? void 0 : i11.message, player_error_context: o11 });
    };
    a10.on("error", v10), a10._stopMuxMonitor = function() {
      a10.off("manifestLoaded", s10), a10.off("initFragmentLoaded", d10), a10.off("mediaFragmentLoaded", u10), a10.off("qualityChangeRendered", m10), a10.off("error", v10), a10.off("fragmentLoadingAbandoned", p10), delete a10._stopMuxMonitor;
    };
  }, eS = function(e10) {
    e10 && "function" == typeof e10._stopMuxMonitor && e10._stopMuxMonitor();
  }, eI = 0, eR = (function() {
    function e10() {
      Z(this, e10), ee(this, "_listeners", void 0);
    }
    return J(e10, [{ key: "on", value: function(e11, t10, a10) {
      return t10._eventEmitterGuid = t10._eventEmitterGuid || ++eI, this._listeners = this._listeners || {}, this._listeners[e11] = this._listeners[e11] || [], a10 && (t10 = t10.bind(a10)), this._listeners[e11].push(t10), t10;
    } }, { key: "off", value: function(e11, t10) {
      var a10 = this._listeners && this._listeners[e11];
      a10 && a10.forEach(function(e12, i10) {
        e12._eventEmitterGuid === t10._eventEmitterGuid && a10.splice(i10, 1);
      });
    } }, { key: "one", value: function(e11, t10, a10) {
      var i10 = this;
      t10._eventEmitterGuid = t10._eventEmitterGuid || ++eI;
      var r10 = function() {
        i10.off(e11, r10), t10.apply(a10 || this, arguments);
      };
      r10._eventEmitterGuid = t10._eventEmitterGuid, this.on(e11, r10);
    } }, { key: "emit", value: function(e11, t10) {
      var a10 = this;
      if (this._listeners) {
        t10 = t10 || {};
        var i10 = this._listeners["before" + e11] || [], r10 = this._listeners["before*"] || [], n10 = this._listeners[e11] || [], s10 = this._listeners["after" + e11] || [], o10 = function(t11, i11) {
          (t11 = t11.slice()).forEach(function(t12) {
            t12.call(a10, { type: e11 }, i11);
          });
        };
        o10(i10, t10), o10(r10, t10), o10(n10, t10), o10(s10, t10);
      }
    } }]), e10;
  })(), eC = v(b()), eL = (function() {
    function e10(t10) {
      var a10 = this;
      Z(this, e10), ee(this, "_playbackHeartbeatInterval", void 0), ee(this, "_playheadShouldBeProgressing", void 0), ee(this, "pm", void 0), this.pm = t10, this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = false, t10.on("playing", function() {
        a10._playheadShouldBeProgressing = true;
      }), t10.on("play", this._startPlaybackHeartbeatInterval.bind(this)), t10.on("playing", this._startPlaybackHeartbeatInterval.bind(this)), t10.on("adbreakstart", this._startPlaybackHeartbeatInterval.bind(this)), t10.on("adplay", this._startPlaybackHeartbeatInterval.bind(this)), t10.on("adplaying", this._startPlaybackHeartbeatInterval.bind(this)), t10.on("devicewake", this._startPlaybackHeartbeatInterval.bind(this)), t10.on("viewstart", this._startPlaybackHeartbeatInterval.bind(this)), t10.on("rebufferstart", this._startPlaybackHeartbeatInterval.bind(this)), t10.on("pause", this._stopPlaybackHeartbeatInterval.bind(this)), t10.on("ended", this._stopPlaybackHeartbeatInterval.bind(this)), t10.on("viewend", this._stopPlaybackHeartbeatInterval.bind(this)), t10.on("error", this._stopPlaybackHeartbeatInterval.bind(this)), t10.on("aderror", this._stopPlaybackHeartbeatInterval.bind(this)), t10.on("adpause", this._stopPlaybackHeartbeatInterval.bind(this)), t10.on("adended", this._stopPlaybackHeartbeatInterval.bind(this)), t10.on("adbreakend", this._stopPlaybackHeartbeatInterval.bind(this)), t10.on("seeked", function() {
        t10.data.player_is_paused ? a10._stopPlaybackHeartbeatInterval() : a10._startPlaybackHeartbeatInterval();
      }), t10.on("timeupdate", function() {
        null !== a10._playbackHeartbeatInterval && t10.emit("playbackheartbeat");
      }), t10.on("devicesleep", function(e11, i10) {
        null !== a10._playbackHeartbeatInterval && (eC.default.clearInterval(a10._playbackHeartbeatInterval), t10.emit("playbackheartbeatend", { viewer_time: i10.viewer_time }), a10._playbackHeartbeatInterval = null);
      });
    }
    return J(e10, [{ key: "_startPlaybackHeartbeatInterval", value: function() {
      var e11 = this;
      null === this._playbackHeartbeatInterval && (this.pm.emit("playbackheartbeat"), this._playbackHeartbeatInterval = eC.default.setInterval(function() {
        e11.pm.emit("playbackheartbeat");
      }, this.pm.playbackHeartbeatTime));
    } }, { key: "_stopPlaybackHeartbeatInterval", value: function() {
      this._playheadShouldBeProgressing = false, null !== this._playbackHeartbeatInterval && (eC.default.clearInterval(this._playbackHeartbeatInterval), this.pm.emit("playbackheartbeatend"), this._playbackHeartbeatInterval = null);
    } }]), e10;
  })(), eD = function e10(t10) {
    var a10 = this;
    Z(this, e10), ee(this, "viewErrored", void 0), t10.on("viewinit", function() {
      a10.viewErrored = false;
    }), t10.on("error", function(e11, i10) {
      try {
        var r10 = t10.errorTranslator({ player_error_code: i10.player_error_code, player_error_message: i10.player_error_message, player_error_context: i10.player_error_context, player_error_severity: i10.player_error_severity, player_error_business_exception: i10.player_error_business_exception });
        r10 && (t10.data.player_error_code = r10.player_error_code || i10.player_error_code, t10.data.player_error_message = r10.player_error_message || i10.player_error_message, t10.data.player_error_context = r10.player_error_context || i10.player_error_context, t10.data.player_error_severity = r10.player_error_severity || i10.player_error_severity, t10.data.player_error_business_exception = r10.player_error_business_exception || i10.player_error_business_exception, a10.viewErrored = true);
      } catch (e12) {
        t10.mux.log.warn("Exception in error translator callback.", e12), a10.viewErrored = true;
      }
    }), t10.on("aftererror", function() {
      var e11, a11, i10, r10, n10;
      null == (e11 = t10.data) || delete e11.player_error_code, null == (a11 = t10.data) || delete a11.player_error_message, null == (i10 = t10.data) || delete i10.player_error_context, null == (r10 = t10.data) || delete r10.player_error_severity, null == (n10 = t10.data) || delete n10.player_error_business_exception;
    });
  }, ex = (function() {
    function e10(t10) {
      Z(this, e10), ee(this, "_watchTimeTrackerLastCheckedTime", void 0), ee(this, "pm", void 0), this.pm = t10, this._watchTimeTrackerLastCheckedTime = null, t10.on("playbackheartbeat", this._updateWatchTime.bind(this)), t10.on("playbackheartbeatend", this._clearWatchTimeState.bind(this));
    }
    return J(e10, [{ key: "_updateWatchTime", value: function(e11, t10) {
      var a10 = t10.viewer_time;
      null === this._watchTimeTrackerLastCheckedTime && (this._watchTimeTrackerLastCheckedTime = a10), eu(this.pm.data, "view_watch_time", a10 - this._watchTimeTrackerLastCheckedTime), this._watchTimeTrackerLastCheckedTime = a10;
    } }, { key: "_clearWatchTimeState", value: function(e11, t10) {
      this._updateWatchTime(e11, t10), this._watchTimeTrackerLastCheckedTime = null;
    } }]), e10;
  })(), eP = (function() {
    function e10(t10) {
      var a10 = this;
      Z(this, e10), ee(this, "_playbackTimeTrackerLastPlayheadPosition", void 0), ee(this, "_lastTime", void 0), ee(this, "_isAdPlaying", void 0), ee(this, "_callbackUpdatePlaybackTime", void 0), ee(this, "pm", void 0), this.pm = t10, this._playbackTimeTrackerLastPlayheadPosition = -1, this._lastTime = $(), this._isAdPlaying = false, this._callbackUpdatePlaybackTime = null, t10.on("viewinit", function() {
        a10.pm.data.view_playing_time_ms_cumulative = 0;
      });
      var i10 = this._startPlaybackTimeTracking.bind(this);
      t10.on("playing", i10), t10.on("adplaying", i10);
      var r10 = function() {
        a10.pm.data.player_is_paused || i10();
      };
      t10.on("seeked", r10), t10.on("rebufferend", r10);
      var n10 = this._stopPlaybackTimeTracking.bind(this);
      t10.on("playbackheartbeatend", n10), t10.on("seeking", n10), t10.on("rebufferstart", n10), t10.on("adplaying", function() {
        a10._isAdPlaying = true;
      }), t10.on("adended", function() {
        a10._isAdPlaying = false;
      }), t10.on("adpause", function() {
        a10._isAdPlaying = false;
      }), t10.on("adbreakstart", function() {
        a10._isAdPlaying = false;
      }), t10.on("adbreakend", function() {
        a10._isAdPlaying = false;
      }), t10.on("adplay", function() {
        a10._isAdPlaying = false;
      }), t10.on("viewinit", function() {
        a10._playbackTimeTrackerLastPlayheadPosition = -1, a10._lastTime = $(), a10._isAdPlaying = false, a10._callbackUpdatePlaybackTime = null;
      });
    }
    return J(e10, [{ key: "_startPlaybackTimeTracking", value: function() {
      null === this._callbackUpdatePlaybackTime && (this._callbackUpdatePlaybackTime = this._updatePlaybackTime.bind(this), this._playbackTimeTrackerLastPlayheadPosition = this.pm.data.player_playhead_time, this._lastTime = $(), this.pm.on("playbackheartbeat", this._callbackUpdatePlaybackTime));
    } }, { key: "_stopPlaybackTimeTracking", value: function() {
      this._callbackUpdatePlaybackTime && (this._updatePlaybackTime(), this.pm.off("playbackheartbeat", this._callbackUpdatePlaybackTime), this._callbackUpdatePlaybackTime = null, this._playbackTimeTrackerLastPlayheadPosition = -1);
    } }, { key: "_updatePlaybackTime", value: function() {
      var e11 = this.pm.data.player_playhead_time || 0, t10 = $(), a10 = t10 - this._lastTime, i10 = -1;
      this._playbackTimeTrackerLastPlayheadPosition >= 0 && e11 > this._playbackTimeTrackerLastPlayheadPosition ? i10 = e11 - this._playbackTimeTrackerLastPlayheadPosition : this._isAdPlaying && (i10 = a10), i10 > 0 && i10 <= 1e3 && eu(this.pm.data, "view_content_playback_time", i10), null !== this._callbackUpdatePlaybackTime && a10 > 0 && a10 <= 1e3 && (this._isAdPlaying && eu(this.pm.data, "ad_playing_time_ms_cumulative", a10), eu(this.pm.data, "view_playing_time_ms_cumulative", a10)), this._playbackTimeTrackerLastPlayheadPosition = e11, this._lastTime = t10;
    } }]), e10;
  })(), eO = (function() {
    function e10(t10) {
      Z(this, e10), ee(this, "pm", void 0), this.pm = t10;
      var a10 = this._updatePlayheadTime.bind(this);
      t10.on("playbackheartbeat", a10), t10.on("playbackheartbeatend", a10), t10.on("timeupdate", a10), t10.on("destroy", function() {
        t10.off("timeupdate", a10);
      });
    }
    return J(e10, [{ key: "_updateMaxPlayheadPosition", value: function() {
      this.pm.data.view_max_playhead_position = void 0 === this.pm.data.view_max_playhead_position ? this.pm.data.player_playhead_time : Math.max(this.pm.data.view_max_playhead_position, this.pm.data.player_playhead_time);
    } }, { key: "_updatePlayheadTime", value: function(e11, t10) {
      var a10 = this, i10 = function() {
        a10.pm.currentFragmentPDT && a10.pm.currentFragmentStart && (a10.pm.data.player_program_time = a10.pm.currentFragmentPDT + a10.pm.data.player_playhead_time - a10.pm.currentFragmentStart);
      };
      if (t10 && t10.player_playhead_time) this.pm.data.player_playhead_time = t10.player_playhead_time, i10(), this._updateMaxPlayheadPosition();
      else if (this.pm.getPlayheadTime) {
        var r10 = this.pm.getPlayheadTime();
        void 0 !== r10 && (this.pm.data.player_playhead_time = r10, i10(), this._updateMaxPlayheadPosition());
      }
    } }]), e10;
  })(), eN = function e10(t10) {
    if (Z(this, e10), !t10.disableRebufferTracking) {
      var a10, i10 = function(e11, t11) {
        r10(t11), a10 = void 0;
      }, r10 = function(e11) {
        if (a10) {
          var i11 = e11.viewer_time - a10;
          eu(t10.data, "view_rebuffer_duration", i11), a10 = e11.viewer_time, t10.data.view_rebuffer_duration > 3e5 && (t10.emit("viewend"), t10.send("viewend"), t10.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5, "ms, future events will be ignored unless a programchange or videochange occurs.")));
        }
        t10.data.view_watch_time >= 0 && t10.data.view_rebuffer_count > 0 && (t10.data.view_rebuffer_frequency = t10.data.view_rebuffer_count / t10.data.view_watch_time, t10.data.view_rebuffer_percentage = t10.data.view_rebuffer_duration / t10.data.view_watch_time);
      };
      t10.on("playbackheartbeat", function(e11, t11) {
        return r10(t11);
      }), t10.on("rebufferstart", function(e11, r11) {
        a10 || (eu(t10.data, "view_rebuffer_count", 1), a10 = r11.viewer_time, t10.one("rebufferend", i10));
      }), t10.on("viewinit", function() {
        a10 = void 0, t10.off("rebufferend", i10);
      });
    }
  }, eU = (function() {
    function e10(t10) {
      var a10 = this;
      Z(this, e10), ee(this, "_lastCheckedTime", void 0), ee(this, "_lastPlayheadTime", void 0), ee(this, "_lastPlayheadTimeUpdatedTime", void 0), ee(this, "_rebuffering", void 0), ee(this, "pm", void 0), this.pm = t10, t10.disableRebufferTracking || t10.disablePlayheadRebufferTracking || (this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null, t10.on("playbackheartbeat", this._checkIfRebuffering.bind(this)), t10.on("playbackheartbeatend", this._cleanupRebufferTracker.bind(this)), t10.on("seeking", function() {
        a10._cleanupRebufferTracker(null, { viewer_time: $() });
      }));
    }
    return J(e10, [{ key: "_checkIfRebuffering", value: function(e11, t10) {
      if (this.pm.seekingTracker.isSeeking || this.pm.adTracker.isAdBreak || !this.pm.playbackHeartbeat._playheadShouldBeProgressing) return void this._cleanupRebufferTracker(e11, t10);
      if (null === this._lastCheckedTime) return void this._prepareRebufferTrackerState(t10.viewer_time);
      if (this._lastPlayheadTime !== this.pm.data.player_playhead_time) return void this._cleanupRebufferTracker(e11, t10, true);
      var a10 = t10.viewer_time - this._lastPlayheadTimeUpdatedTime;
      "number" == typeof this.pm.sustainedRebufferThreshold && a10 >= this.pm.sustainedRebufferThreshold && (this._rebuffering || (this._rebuffering = true, this.pm.emit("rebufferstart", { viewer_time: this._lastPlayheadTimeUpdatedTime }))), this._lastCheckedTime = t10.viewer_time;
    } }, { key: "_clearRebufferTrackerState", value: function() {
      this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null;
    } }, { key: "_prepareRebufferTrackerState", value: function(e11) {
      this._lastCheckedTime = e11, this._lastPlayheadTime = this.pm.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = e11;
    } }, { key: "_cleanupRebufferTracker", value: function(e11, t10) {
      var a10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (this._rebuffering) this._rebuffering = false, this.pm.emit("rebufferend", { viewer_time: t10.viewer_time });
      else {
        if (null === this._lastCheckedTime) return;
        var i10 = this.pm.data.player_playhead_time - this._lastPlayheadTime, r10 = t10.viewer_time - this._lastPlayheadTimeUpdatedTime;
        "number" == typeof this.pm.minimumRebufferDuration && i10 > 0 && r10 - i10 > this.pm.minimumRebufferDuration && (this._lastCheckedTime = null, this.pm.emit("rebufferstart", { viewer_time: this._lastPlayheadTimeUpdatedTime }), this.pm.emit("rebufferend", { viewer_time: this._lastPlayheadTimeUpdatedTime + r10 - i10 }));
      }
      a10 ? this._prepareRebufferTrackerState(t10.viewer_time) : this._clearRebufferTrackerState();
    } }]), e10;
  })(), eB = (function() {
    function e10(t10) {
      var a10 = this;
      Z(this, e10), ee(this, "pm", void 0), this.pm = t10, t10.on("viewinit", function() {
        var e11 = t10.data, i10 = e11.view_id;
        if (!e11.view_program_changed) {
          var r10 = function(e12, r11) {
            var n10 = r11.viewer_time;
            "playing" === e12.type && void 0 === t10.data.view_time_to_first_frame ? a10.calculateTimeToFirstFrame(n10 || $(), i10) : "adplaying" === e12.type && (void 0 === t10.data.view_time_to_first_frame || a10._inPrerollPosition()) && a10.calculateTimeToFirstFrame(n10 || $(), i10);
          };
          t10.one("playing", r10), t10.one("adplaying", r10), t10.one("viewend", function() {
            t10.off("playing", r10), t10.off("adplaying", r10);
          });
        }
      });
    }
    return J(e10, [{ key: "_inPrerollPosition", value: function() {
      return void 0 === this.pm.data.view_content_playback_time || this.pm.data.view_content_playback_time <= 1e3;
    } }, { key: "calculateTimeToFirstFrame", value: function(e11, t10) {
      t10 === this.pm.data.view_id && (this.pm.watchTimeTracker._updateWatchTime(null, { viewer_time: e11 }), this.pm.data.view_time_to_first_frame = this.pm.data.view_watch_time, (this.pm.data.player_autoplay_on || this.pm.data.video_is_autoplay) && this.pm.pageLoadInitTime && (this.pm.data.view_aggregate_startup_time = this.pm.data.view_start + this.pm.data.view_watch_time - this.pm.pageLoadInitTime));
    } }]), e10;
  })(), eH = function e10(t10) {
    var a10 = this;
    Z(this, e10), ee(this, "_lastPlayerHeight", void 0), ee(this, "_lastPlayerWidth", void 0), ee(this, "_lastPlayheadPosition", void 0), ee(this, "_lastSourceHeight", void 0), ee(this, "_lastSourceWidth", void 0), t10.on("viewinit", function() {
      a10._lastPlayheadPosition = -1;
    }), ["pause", "rebufferstart", "seeking", "error", "adbreakstart", "hb", "renditionchange", "orientationchange", "viewend", "playbackmodechange"].forEach(function(e11) {
      t10.on(e11, function() {
        if (a10._lastPlayheadPosition >= 0 && t10.data.player_playhead_time >= 0 && a10._lastPlayerWidth >= 0 && a10._lastSourceWidth > 0 && a10._lastPlayerHeight >= 0 && a10._lastSourceHeight > 0) {
          var e12 = t10.data.player_playhead_time - a10._lastPlayheadPosition;
          if (e12 < 0) {
            a10._lastPlayheadPosition = -1;
            return;
          }
          var i10 = Math.min(a10._lastPlayerWidth / a10._lastSourceWidth, a10._lastPlayerHeight / a10._lastSourceHeight), r10 = Math.max(0, i10 - 1), n10 = Math.max(0, 1 - i10);
          t10.data.view_max_upscale_percentage = Math.max(t10.data.view_max_upscale_percentage || 0, r10), t10.data.view_max_downscale_percentage = Math.max(t10.data.view_max_downscale_percentage || 0, n10), eu(t10.data, "view_total_content_playback_time", e12), eu(t10.data, "view_total_upscaling", r10 * e12), eu(t10.data, "view_total_downscaling", n10 * e12);
        }
        a10._lastPlayheadPosition = -1;
      });
    }), ["playing", "hb", "renditionchange", "orientationchange", "playbackmodechange"].forEach(function(e11) {
      t10.on(e11, function() {
        a10._lastPlayheadPosition = t10.data.player_playhead_time, a10._lastPlayerWidth = t10.data.player_width, a10._lastPlayerHeight = t10.data.player_height, a10._lastSourceWidth = t10.data.video_source_width, a10._lastSourceHeight = t10.data.video_source_height;
      });
    });
  }, eW = function e10(t10) {
    var a10 = this;
    Z(this, e10), ee(this, "isSeeking", void 0), this.isSeeking = false;
    var i10 = -1, r10 = function() {
      var e11 = $(), r11 = (t10.data.viewer_time || e11) - (i10 || e11);
      eu(t10.data, "view_seek_duration", r11), t10.data.view_max_seek_time = Math.max(t10.data.view_max_seek_time || 0, r11), a10.isSeeking = false, i10 = -1;
    };
    t10.on("seeking", function(e11, n10) {
      if (Object.assign(t10.data, n10), a10.isSeeking && n10.viewer_time - i10 <= 2e3) {
        i10 = n10.viewer_time;
        return;
      }
      a10.isSeeking && r10(), a10.isSeeking = true, i10 = n10.viewer_time, eu(t10.data, "view_seek_count", 1), t10.send("seeking");
    }), t10.on("seeked", function() {
      r10();
    }), t10.on("viewend", function() {
      a10.isSeeking && (r10(), t10.send("seeked")), a10.isSeeking = false, i10 = -1;
    });
  }, e$ = function(e10, t10) {
    e10.push(t10), e10.sort(function(e11, t11) {
      return e11.viewer_time - t11.viewer_time;
    });
  }, eq = ["adbreakstart", "adrequest", "adresponse", "adplay", "adplaying", "adpause", "adended", "adbreakend", "aderror", "adclicked", "adskipped"], eV = (function() {
    function e10(t10) {
      var a10 = this;
      Z(this, e10), ee(this, "_adHasPlayed", void 0), ee(this, "_adRequests", void 0), ee(this, "_adResponses", void 0), ee(this, "_currentAdRequestNumber", void 0), ee(this, "_currentAdResponseNumber", void 0), ee(this, "_prerollPlayTime", void 0), ee(this, "_wouldBeNewAdPlay", void 0), ee(this, "isAdBreak", void 0), ee(this, "pm", void 0), this.pm = t10, t10.on("viewinit", function() {
        a10.isAdBreak = false, a10._currentAdRequestNumber = 0, a10._currentAdResponseNumber = 0, a10._adRequests = [], a10._adResponses = [], a10._adHasPlayed = false, a10._wouldBeNewAdPlay = true, a10._prerollPlayTime = void 0;
      }), eq.forEach(function(e11) {
        return t10.on(e11, a10._updateAdData.bind(a10));
      });
      var i10 = function() {
        a10.isAdBreak = false;
      };
      t10.on("adbreakstart", function() {
        a10.isAdBreak = true;
      }), t10.on("play", i10), t10.on("playing", i10), t10.on("viewend", i10), t10.on("adrequest", function(e11, i11) {
        i11 = Object.assign({ ad_request_id: "generatedAdRequestId" + a10._currentAdRequestNumber++ }, i11), e$(a10._adRequests, i11), eu(t10.data, "view_ad_request_count"), a10.inPrerollPosition() && (t10.data.view_preroll_requested = true, a10._adHasPlayed || eu(t10.data, "view_preroll_request_count"));
      }), t10.on("adresponse", function(e11, i11) {
        i11 = Object.assign({ ad_request_id: "generatedAdRequestId" + a10._currentAdResponseNumber++ }, i11), e$(a10._adResponses, i11);
        var r10 = a10.findAdRequest(i11.ad_request_id);
        r10 && eu(t10.data, "view_ad_request_time", Math.max(0, i11.viewer_time - r10.viewer_time));
      }), t10.on("adplay", function(e11, i11) {
        a10._adHasPlayed = true, a10._wouldBeNewAdPlay && (a10._wouldBeNewAdPlay = false, eu(t10.data, "view_ad_played_count")), a10.inPrerollPosition() && !t10.data.view_preroll_played && (t10.data.view_preroll_played = true, a10._adRequests.length > 0 && (t10.data.view_preroll_request_time = Math.max(0, i11.viewer_time - a10._adRequests[0].viewer_time)), t10.data.view_start && (t10.data.view_startup_preroll_request_time = Math.max(0, i11.viewer_time - t10.data.view_start)), a10._prerollPlayTime = i11.viewer_time);
      }), t10.on("adplaying", function(e11, i11) {
        a10.inPrerollPosition() && void 0 === t10.data.view_preroll_load_time && void 0 !== a10._prerollPlayTime && (t10.data.view_preroll_load_time = i11.viewer_time - a10._prerollPlayTime, t10.data.view_startup_preroll_load_time = i11.viewer_time - a10._prerollPlayTime);
      }), t10.on("adclicked", function(e11, i11) {
        a10._wouldBeNewAdPlay || eu(t10.data, "view_ad_clicked_count");
      }), t10.on("adskipped", function(e11, i11) {
        a10._wouldBeNewAdPlay || eu(t10.data, "view_ad_skipped_count");
      }), t10.on("adended", function() {
        a10._wouldBeNewAdPlay = true;
      }), t10.on("aderror", function() {
        a10._wouldBeNewAdPlay = true;
      });
    }
    return J(e10, [{ key: "inPrerollPosition", value: function() {
      return void 0 === this.pm.data.view_content_playback_time || this.pm.data.view_content_playback_time <= 1e3;
    } }, { key: "findAdRequest", value: function(e11) {
      for (var t10 = 0; t10 < this._adRequests.length; t10++) if (this._adRequests[t10].ad_request_id === e11) return this._adRequests[t10];
    } }, { key: "_updateAdData", value: function(e11, t10) {
      if (this.inPrerollPosition()) {
        if (!this.pm.data.view_preroll_ad_tag_hostname && t10.ad_tag_url) {
          var a10 = U(en(t10.ad_tag_url), 2), i10 = a10[0], r10 = a10[1];
          this.pm.data.view_preroll_ad_tag_domain = r10, this.pm.data.view_preroll_ad_tag_hostname = i10;
        }
        if (!this.pm.data.view_preroll_ad_asset_hostname && t10.ad_asset_url) {
          var n10 = U(en(t10.ad_asset_url), 2), s10 = n10[0], o10 = n10[1];
          this.pm.data.view_preroll_ad_asset_domain = o10, this.pm.data.view_preroll_ad_asset_hostname = s10;
        }
        this.pm.data.ad_type = "preroll";
      }
      this.pm.data.ad_asset_url = null == t10 ? void 0 : t10.ad_asset_url, this.pm.data.ad_tag_url = null == t10 ? void 0 : t10.ad_tag_url, this.pm.data.ad_creative_id = null == t10 ? void 0 : t10.ad_creative_id, this.pm.data.ad_id = null == t10 ? void 0 : t10.ad_id, this.pm.data.ad_universal_id = null == t10 ? void 0 : t10.ad_universal_id, null != t10 && t10.ad_type && (this.pm.data.ad_type = null == t10 ? void 0 : t10.ad_type);
    } }]), e10;
  })(), eK = function e10(t10) {
    var a10 = this;
    Z(this, e10), ee(this, "lastWallClockTime", void 0);
    var i10 = function() {
      a10.lastWallClockTime = $(), t10.on("before*", r10);
    }, r10 = function(e11) {
      var i11 = $(), r11 = a10.lastWallClockTime;
      a10.lastWallClockTime = i11, i11 - r11 > 3e4 && (t10.emit("devicesleep", { viewer_time: r11 }), Object.assign(t10.data, { viewer_time: r11 }), t10.send("devicesleep"), t10.emit("devicewake", { viewer_time: i11 }), Object.assign(t10.data, { viewer_time: i11 }), t10.send("devicewake"));
    };
    t10.one("playbackheartbeat", i10), t10.on("playbackheartbeatend", function() {
      t10.off("before*", r10), t10.one("playbackheartbeat", i10);
    });
  }, eF = v(b()), ej = (tE = function() {
    for (var e10 = 0, t10 = {}; e10 < arguments.length; e10++) {
      var a10 = arguments[e10];
      for (var i10 in a10) t10[i10] = a10[i10];
    }
    return t10;
  }, (function e10(t10) {
    function a10(e11, i10, r10) {
      var n10;
      if ("u" > typeof document) {
        if (arguments.length > 1) {
          if ("number" == typeof (r10 = tE({ path: "/" }, a10.defaults, r10)).expires) {
            var s10 = /* @__PURE__ */ new Date();
            s10.setMilliseconds(s10.getMilliseconds() + 864e5 * r10.expires), r10.expires = s10;
          }
          try {
            n10 = JSON.stringify(i10), /^[\{\[]/.test(n10) && (i10 = n10);
          } catch (e12) {
          }
          return i10 = t10.write ? t10.write(i10, e11) : encodeURIComponent(String(i10)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e11 = (e11 = (e11 = encodeURIComponent(String(e11))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape), document.cookie = [e11, "=", i10, r10.expires ? "; expires=" + r10.expires.toUTCString() : "", r10.path ? "; path=" + r10.path : "", r10.domain ? "; domain=" + r10.domain : "", r10.secure ? "; secure" : ""].join("");
        }
        e11 || (n10 = {});
        for (var o10 = document.cookie ? document.cookie.split("; ") : [], l10 = /(%[0-9A-Z]{2})+/g, d10 = 0; d10 < o10.length; d10++) {
          var u10 = o10[d10].split("="), c10 = u10.slice(1).join("=");
          '"' === c10.charAt(0) && (c10 = c10.slice(1, -1));
          try {
            var h10 = u10[0].replace(l10, decodeURIComponent);
            if (c10 = t10.read ? t10.read(c10, h10) : t10(c10, h10) || c10.replace(l10, decodeURIComponent), this.json) try {
              c10 = JSON.parse(c10);
            } catch (e12) {
            }
            if (e11 === h10) {
              n10 = c10;
              break;
            }
            e11 || (n10[h10] = c10);
          } catch (e12) {
          }
        }
        return n10;
      }
    }
    return a10.set = a10, a10.get = function(e11) {
      return a10.call(a10, e11);
    }, a10.getJSON = function() {
      return a10.apply({ json: true }, [].slice.call(arguments));
    }, a10.defaults = {}, a10.remove = function(e11, t11) {
      a10(e11, "", tE(t11, { expires: -1 }));
    }, a10.withConverter = e10, a10;
  })(function() {
  })), eG = "muxData", eY = function() {
    var e10;
    try {
      e10 = (ej.get(eG) || "").split("&").reduce(function(e11, t10) {
        var a10 = U(t10.split("="), 2), i10 = a10[0], r10 = a10[1], n10 = +r10;
        return e11[i10] = r10 && n10 == r10 ? n10 : r10, e11;
      }, {});
    } catch (t10) {
      e10 = {};
    }
    return e10;
  }, eQ = function(e10) {
    try {
      ej.set(eG, Object.entries(e10).map(function(e11) {
        var t10 = U(e11, 2), a10 = t10[0], i10 = t10[1];
        return "".concat(a10, "=").concat(i10);
      }).join("&"), { expires: 365 });
    } catch (e11) {
    }
  }, ez = function() {
    var e10 = eY();
    return e10.mux_viewer_id = e10.mux_viewer_id || q(), e10.msn = e10.msn || Math.random(), eQ(e10), { mux_viewer_id: e10.mux_viewer_id, mux_sample_number: e10.msn };
  }, eZ = function() {
    var e10 = eY(), t10 = $();
    return e10.session_start && (e10.sst = e10.session_start, delete e10.session_start), e10.session_id && (e10.sid = e10.session_id, delete e10.session_id), e10.session_expires && (e10.sex = e10.session_expires, delete e10.session_expires), (!e10.sex || e10.sex < t10) && (e10.sid = q(), e10.sst = t10), e10.sex = t10 + 15e5, eQ(e10), { session_id: e10.sid, session_start: e10.sst, session_expires: e10.sex };
  }, eX = e0({ a: "env", b: "beacon", c: "custom", d: "ad", e: "event", f: "experiment", i: "internal", m: "mux", n: "response", p: "player", q: "request", r: "retry", s: "session", t: "timestamp", u: "viewer", v: "video", w: "page", x: "view", y: "sub" }), eJ = e0({ ad: "ad", af: "affiliate", ag: "aggregate", ap: "api", al: "application", ao: "audio", ar: "architecture", as: "asset", au: "autoplay", av: "average", bi: "bitrate", bn: "brand", br: "break", bw: "browser", by: "bytes", bz: "business", ca: "cached", cb: "cancel", cc: "codec", cd: "code", cg: "category", ch: "changed", ci: "client", ck: "clicked", cl: "canceled", cm: "cmcd", cn: "config", co: "count", ce: "counter", cp: "complete", cq: "creator", cr: "creative", cs: "captions", ct: "content", cu: "current", cv: "cumulative", cx: "connection", cz: "context", da: "data", dg: "downscaling", dm: "domain", dn: "cdn", do: "downscale", dr: "drm", dp: "dropped", du: "duration", dv: "device", dy: "dynamic", eb: "enabled", ec: "encoding", ed: "edge", en: "end", eg: "engine", em: "embed", er: "error", ep: "experiments", es: "errorcode", et: "errortext", ee: "event", ev: "events", ex: "expires", ez: "exception", fa: "failed", fi: "first", fm: "family", ft: "format", fp: "fps", fq: "frequency", fr: "frame", fs: "fullscreen", ha: "has", hb: "holdback", he: "headers", ho: "host", hn: "hostname", ht: "height", id: "id", ii: "init", in: "instance", ip: "ip", is: "is", ke: "key", la: "language", lb: "labeled", le: "level", li: "live", ld: "loaded", lo: "load", lw: "low", ls: "lists", lt: "latency", ma: "max", md: "media", me: "message", mf: "manifest", mi: "mime", ml: "midroll", mm: "min", mn: "manufacturer", mo: "model", mp: "mode", ms: "ms", mx: "mux", ne: "newest", nm: "name", no: "number", on: "on", or: "origin", os: "os", pa: "paused", pb: "playback", pd: "producer", pe: "percentage", pf: "played", pg: "program", ph: "playhead", pi: "plugin", pl: "preroll", pn: "playing", po: "poster", pp: "pip", pr: "preload", ps: "position", pt: "part", pv: "previous", py: "property", px: "pop", pz: "plan", ra: "rate", rd: "requested", re: "rebuffer", rf: "rendition", rg: "range", rm: "remote", ro: "ratio", rp: "response", rq: "request", rs: "requests", sa: "sample", sd: "skipped", se: "session", sh: "shift", sk: "seek", sm: "stream", so: "source", sq: "sequence", sr: "series", ss: "status", st: "start", su: "startup", sv: "server", sw: "software", sy: "severity", ta: "tag", tc: "tech", te: "text", tg: "target", th: "throughput", ti: "time", tl: "total", to: "to", tt: "title", ty: "type", ug: "upscaling", un: "universal", up: "upscale", ur: "url", us: "user", va: "variant", vd: "viewed", vi: "video", ve: "version", vw: "view", vr: "viewer", wd: "width", wa: "watch", wt: "waiting" });
  function e0(e10) {
    var t10 = {};
    for (var a10 in e10) e10.hasOwnProperty(a10) && (t10[e10[a10]] = a10);
    return t10;
  }
  function e1(e10) {
    var t10 = {}, a10 = {};
    return Object.keys(e10).forEach(function(i10) {
      var r10 = false;
      if (e10.hasOwnProperty(i10) && void 0 !== e10[i10]) {
        var n10 = i10.split("_"), s10 = n10[0], o10 = eX[s10];
        o10 || (G.info("Data key word `" + n10[0] + "` not expected in " + i10), o10 = s10 + "_"), n10.splice(1).forEach(function(e11) {
          "url" === e11 && (r10 = true), eJ[e11] ? o10 += eJ[e11] : Number.isInteger(Number(e11)) ? o10 += e11 : (G.info("Data key word `" + e11 + "` not expected in " + i10), o10 += "_" + e11 + "_");
        }), r10 ? a10[o10] = e10[i10] : t10[o10] = e10[i10];
      }
    }), Object.assign(t10, a10);
  }
  var e2 = v(b()), e3 = v(P()), e4 = { maxBeaconSize: 300, maxQueueLength: 3600, baseTimeBetweenBeacons: 1e4, maxPayloadKBSize: 500 }, e5 = ["hb", "requestcompleted", "requestfailed", "requestcanceled"], e9 = function(e10) {
    var t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this._beaconUrl = e10 || "https://img.litix.io", this._eventQueue = [], this._postInFlight = false, this._resendAfterPost = false, this._failureCount = 0, this._sendTimeout = false, this._options = Object.assign({}, e4, t10);
  };
  e9.prototype.queueEvent = function(e10, t10) {
    var a10 = Object.assign({}, t10);
    return (this._eventQueue.length <= this._options.maxQueueLength || "eventrateexceeded" === e10) && (this._eventQueue.push(a10), this._sendTimeout || this._startBeaconSending(), this._eventQueue.length <= this._options.maxQueueLength);
  }, e9.prototype.flushEvents = function() {
    var e10 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    e10 && 1 === this._eventQueue.length ? this._eventQueue.pop() : (this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending());
  }, e9.prototype.destroy = function() {
    var e10 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    this.destroyed = true, e10 ? this._clearBeaconQueue() : this.flushEvents(), e2.default.clearTimeout(this._sendTimeout);
  }, e9.prototype._clearBeaconQueue = function() {
    var e10 = this._eventQueue.length > this._options.maxBeaconSize ? this._eventQueue.length - this._options.maxBeaconSize : 0, t10 = this._eventQueue.slice(e10);
    e10 > 0 && Object.assign(t10[t10.length - 1], e1({ mux_view_message: "event queue truncated" }));
    var a10 = this._createPayload(t10);
    e6(this._beaconUrl, a10, true, function() {
    });
  }, e9.prototype._sendBeaconQueue = function() {
    var e10 = this;
    if (this._postInFlight) {
      this._resendAfterPost = true;
      return;
    }
    var t10 = this._eventQueue.slice(0, this._options.maxBeaconSize);
    this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize), this._postInFlight = true;
    var a10 = this._createPayload(t10), i10 = $();
    e6(this._beaconUrl, a10, false, function(a11, r10) {
      r10 ? (e10._eventQueue = t10.concat(e10._eventQueue), e10._failureCount += 1, G.info("Error sending beacon: " + r10)) : e10._failureCount = 0, e10._roundTripTime = $() - i10, e10._postInFlight = false, e10._resendAfterPost && (e10._resendAfterPost = false, e10._eventQueue.length > 0 && e10._sendBeaconQueue());
    });
  }, e9.prototype._getNextBeaconTime = function() {
    if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
    var e10 = Math.pow(2, this._failureCount - 1);
    return (1 + (e10 *= Math.random())) * this._options.baseTimeBetweenBeacons;
  }, e9.prototype._startBeaconSending = function() {
    var e10 = this;
    e2.default.clearTimeout(this._sendTimeout), this.destroyed || (this._sendTimeout = e2.default.setTimeout(function() {
      e10._eventQueue.length && e10._sendBeaconQueue(), e10._startBeaconSending();
    }, this._getNextBeaconTime()));
  }, e9.prototype._createPayload = function(e10) {
    var t10 = this, a10 = { transmission_timestamp: Math.round($()) };
    this._roundTripTime && (a10.rtt_ms = Math.round(this._roundTripTime));
    var i10, r10, n10, s10 = function() {
      n10 = (i10 = JSON.stringify({ metadata: a10, events: r10 || e10 })).length / 1024;
    }, o10 = function() {
      return n10 <= t10._options.maxPayloadKBSize;
    };
    return s10(), o10() || (G.info("Payload size is too big (" + n10 + " kb). Removing unnecessary events."), r10 = e10.filter(function(e11) {
      return -1 === e5.indexOf(e11.e);
    }), s10()), o10() || (G.info("Payload size still too big (" + n10 + " kb). Cropping fields.."), r10.forEach(function(e11) {
      for (var t11 in e11) {
        var a11 = e11[t11];
        "string" == typeof a11 && a11.length > 51200 && (e11[t11] = a11.substring(0, 51200));
      }
    }), s10()), i10;
  };
  var e8 = "function" == typeof e3.default.exitPictureInPicture ? function(e10) {
    return e10.length <= 57344;
  } : function(e10) {
    return false;
  }, e6 = function(e10, t10, a10, i10) {
    if (a10 && navigator && navigator.sendBeacon && navigator.sendBeacon(e10, t10)) return void i10();
    if (e2.default.fetch) return void e2.default.fetch(e10, { method: "POST", body: t10, headers: { "Content-Type": "text/plain" }, keepalive: e8(t10) }).then(function(e11) {
      return i10(null, e11.ok ? null : "Error");
    }).catch(function(e11) {
      return i10(null, e11);
    });
    if (e2.default.XMLHttpRequest) {
      var r10 = new e2.default.XMLHttpRequest();
      r10.onreadystatechange = function() {
        if (4 === r10.readyState) return i10(null, 200 !== r10.status ? "error" : void 0);
      }, r10.open("POST", e10), r10.setRequestHeader("Content-Type", "text/plain"), r10.send(t10);
      return;
    }
    i10();
  }, e7 = ["env_key", "view_id", "view_sequence_number", "player_sequence_number", "beacon_domain", "player_playhead_time", "viewer_time", "mux_api_version", "event", "video_id", "player_instance_id", "player_error_code", "player_error_message", "player_error_context", "player_error_severity", "player_error_business_exception", "view_playing_time_ms_cumulative", "ad_playing_time_ms_cumulative"], te = ["adplay", "adplaying", "adpause", "adfirstquartile", "admidpoint", "adthirdquartile", "adended", "adresponse", "adrequest"], tt = ["ad_id", "ad_creative_id", "ad_universal_id"], ta = ["viewstart", "error", "ended", "viewend"], ti = (function() {
    function e10(t10, a10) {
      var i10, r10, n10, s10, o10, l10, d10, u10, c10, h10, m10, p10, v10, b10, g2, y2, f2, E2, w2, T2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      Z(this, e10), ee(this, "mux", void 0), ee(this, "envKey", void 0), ee(this, "options", void 0), ee(this, "eventQueue", void 0), ee(this, "sampleRate", void 0), ee(this, "disableCookies", void 0), ee(this, "respectDoNotTrack", void 0), ee(this, "previousBeaconData", void 0), ee(this, "lastEventTime", void 0), ee(this, "rateLimited", void 0), ee(this, "pageLevelData", void 0), ee(this, "viewerData", void 0), this.mux = t10, this.envKey = a10, this.options = T2, this.previousBeaconData = null, this.lastEventTime = 0, this.rateLimited = false, this.eventQueue = new e9((i10 = this.envKey, n10 = (r10 = this.options).beaconCollectionDomain, s10 = r10.beaconDomain, n10 ? (/localhost(?::\d+)?$/.test(n10) ? "http://" : "https://") + n10 : (i10 = i10 || "inferred").match(/^[a-z0-9]+$/) ? "https://" + i10 + "." + (s10 || "litix.io") : "https://img.litix.io/a.gif")), this.sampleRate = null != (f2 = this.options.sampleRate) ? f2 : 1, this.disableCookies = null != (E2 = this.options.disableCookies) && E2, this.respectDoNotTrack = null != (w2 = this.options.respectDoNotTrack) && w2, this.previousBeaconData = null, this.lastEventTime = 0, this.rateLimited = false, this.pageLevelData = { mux_api_version: this.mux.API_VERSION, mux_embed: this.mux.NAME, mux_embed_version: this.mux.VERSION, viewer_application_name: null == (o10 = this.options.platform) ? void 0 : o10.name, viewer_application_version: null == (l10 = this.options.platform) ? void 0 : l10.version, viewer_application_engine: null == (d10 = this.options.platform) ? void 0 : d10.layout, viewer_device_name: null == (u10 = this.options.platform) ? void 0 : u10.product, viewer_device_category: "", viewer_device_manufacturer: null == (c10 = this.options.platform) ? void 0 : c10.manufacturer, viewer_os_family: null == (m10 = this.options.platform) || null == (h10 = m10.os) ? void 0 : h10.family, viewer_os_architecture: null == (v10 = this.options.platform) || null == (p10 = v10.os) ? void 0 : p10.architecture, viewer_os_version: null == (g2 = this.options.platform) || null == (b10 = g2.os) ? void 0 : b10.version, page_url: null === eF.default || void 0 === eF.default || null == (y2 = eF.default.location) ? void 0 : y2.href }, this.viewerData = this.disableCookies ? {} : ez();
    }
    return J(e10, [{ key: "send", value: function(e11, t10) {
      if (!(!e11 || !(null != t10 && t10.view_id))) {
        if (this.respectDoNotTrack && Q()) return G.info("Not sending `" + e11 + "` because Do Not Track is enabled");
        if (!t10 || "object" != typeof t10) return G.error("A data object was expected in send() but was not provided");
        var a10 = this.disableCookies ? {} : eZ(), i10 = eh(ec({}, this.pageLevelData, t10, a10, this.viewerData), { event: e11, env_key: this.envKey });
        i10.user_id && (i10.viewer_user_id = i10.user_id, delete i10.user_id);
        var r10, n10 = (null != (r10 = i10.mux_sample_number) ? r10 : 0) >= this.sampleRate, s10 = e1(this._deduplicateBeaconData(e11, i10));
        if (this.lastEventTime = this.mux.utils.now(), n10) return G.info("Not sending event due to sample rate restriction", e11, i10, s10);
        if (this.envKey || G.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL", e11, i10, s10), !this.rateLimited) if (G.info("Sending event", e11, i10, s10), this.rateLimited = !this.eventQueue.queueEvent(e11, s10), this.mux.WINDOW_UNLOADING && "viewend" === e11) this.eventQueue.destroy(true);
        else {
          if (this.mux.WINDOW_HIDDEN && "hb" === e11) this.eventQueue.flushEvents(true);
          else if (ta.indexOf(e11) >= 0) {
            if ("error" === e11 && "warning" === t10.player_error_severity) return;
            this.eventQueue.flushEvents();
          }
          if (this.rateLimited) return i10.event = "eventrateexceeded", s10 = e1(i10), this.eventQueue.queueEvent(i10.event, s10), G.error("Beaconing disabled due to rate limit.");
        }
      }
    } }, { key: "destroy", value: function() {
      this.eventQueue.destroy(false);
    } }, { key: "_deduplicateBeaconData", value: function(e11, t10) {
      var a10 = this, i10 = {}, r10 = t10.view_id;
      if ("-1" === r10 || "viewstart" === e11 || "viewend" === e11 || !this.previousBeaconData || this.mux.utils.now() - this.lastEventTime >= 6e5) i10 = ec({}, t10), r10 && (this.previousBeaconData = i10), r10 && "viewend" === e11 && (this.previousBeaconData = null);
      else {
        var n10 = 0 === e11.indexOf("request");
        Object.entries(t10).forEach(function(t11) {
          var r11 = U(t11, 2), s10 = r11[0], o10 = r11[1];
          a10.previousBeaconData && (o10 !== a10.previousBeaconData[s10] || e7.indexOf(s10) > -1 || a10.objectHasChanged(n10, s10, o10, a10.previousBeaconData[s10]) || a10.eventRequiresKey(e11, s10)) && (i10[s10] = o10, a10.previousBeaconData[s10] = o10);
        });
      }
      return i10;
    } }, { key: "objectHasChanged", value: function(e11, t10, a10, i10) {
      return !!e11 && 0 === t10.indexOf("request_") && ("request_response_headers" === t10 || "object" != typeof a10 || "object" != typeof i10 || Object.keys(a10 || {}).length !== Object.keys(i10 || {}).length);
    } }, { key: "eventRequiresKey", value: function(e11, t10) {
      return !!("renditionchange" === e11 && 0 === t10.indexOf("video_source_") || tt.includes(t10) && te.includes(e11) || "playbackmodechange" === e11 && 0 === t10.indexOf("player_playback_mode"));
    } }]), e10;
  })(), tr = function e10(t10) {
    Z(this, e10);
    var a10 = 0, i10 = 0, r10 = 0, n10 = 0, s10 = 0, o10 = 0, l10 = 0;
    t10.on("requestcompleted", function(e11, o11) {
      var l11, d10, u10 = o11.request_start, c10 = o11.request_response_start, h10 = o11.request_response_end, m10 = o11.request_bytes_loaded;
      if (n10++, c10 ? (l11 = c10 - (null != u10 ? u10 : 0), d10 = (null != h10 ? h10 : 0) - c10) : d10 = (null != h10 ? h10 : 0) - (null != u10 ? u10 : 0), d10 > 0 && m10 && m10 > 0) {
        var p10 = m10 / d10 * 8e3;
        s10++, i10 += m10, r10 += d10, t10.data.view_min_request_throughput = Math.min(t10.data.view_min_request_throughput || 1 / 0, p10), t10.data.view_average_request_throughput = i10 / r10 * 8e3, t10.data.view_request_count = n10, l11 > 0 && (a10 += l11, t10.data.view_max_request_latency = Math.max(t10.data.view_max_request_latency || 0, l11), t10.data.view_average_request_latency = a10 / s10);
      }
    }), t10.on("requestfailed", function(e11, a11) {
      n10++, o10++, t10.data.view_request_count = n10, t10.data.view_request_failed_count = o10;
    }), t10.on("requestcanceled", function(e11, a11) {
      n10++, l10++, t10.data.view_request_count = n10, t10.data.view_request_canceled_count = l10;
    });
  }, tn = function e10(t10) {
    var a10 = this;
    Z(this, e10), ee(this, "_lastEventTime", void 0), t10.on("before*", function(e11, i10) {
      var r10 = i10.viewer_time, n10 = $(), s10 = a10._lastEventTime;
      if (a10._lastEventTime = n10, s10 && n10 - s10 > 36e5) {
        var o10 = Object.keys(t10.data).reduce(function(e12, a11) {
          return 0 === a11.indexOf("video_") ? Object.assign(e12, ee({}, a11, t10.data[a11])) : e12;
        }, {});
        t10.mux.log.info("Received event after at least an hour inactivity, creating a new view");
        var l10 = t10.playbackHeartbeat._playheadShouldBeProgressing;
        t10._resetView(Object.assign({ viewer_time: r10 }, o10)), t10.playbackHeartbeat._playheadShouldBeProgressing = l10, t10.playbackHeartbeat._playheadShouldBeProgressing && "play" !== e11.type && "adbreakstart" !== e11.type && (t10.emit("play", { viewer_time: r10 }), "playing" !== e11.type && t10.emit("playing", { viewer_time: r10 }));
      }
    });
  };
  function ts(e10, t10) {
    return (null == e10 ? void 0 : e10.toLowerCase()) === (null == t10 ? void 0 : t10.toLowerCase());
  }
  var to = function e10(t10) {
    Z(this, e10);
    var a10 = function(e11) {
      var a11, i11, r11, o10 = null != (a11 = e11) && a11.request_type && ("media" === a11.request_type || "video" === a11.request_type) && null != (i11 = a11.request_response_headers) && i11["x-cdn"] ? a11.request_response_headers["x-cdn"] : null != a11 && a11.video_cdn ? a11.video_cdn : null, l10 = null != (r11 = e11) && r11.request_start ? r11.request_start : null != r11 && r11.viewer_time ? r11.viewer_time : Date.now();
      null != o10 && !ts(o10, n10) && s10 <= l10 && (n10 = o10, s10 = l10, t10.emit("cdnchange", { video_cdn: o10 }));
    }, i10 = null, r10 = null, n10 = null, s10 = 0;
    t10.on("viewinit", function() {
      i10 = null, r10 = null, n10 = null, s10 = 0;
    }), t10.on("beforecdnchange", function(e11, t11) {
      var a11 = null == t11 ? void 0 : t11.video_cdn;
      a11 && (void 0 === t11.video_previous_cdn || null === t11.video_previous_cdn) && (ts(a11, r10) ? t11.video_previous_cdn = null != i10 ? i10 : void 0 : (t11.video_previous_cdn = null != r10 ? r10 : void 0, i10 = r10, r10 = a11));
    }), t10.on("requestcompleted", function(e11, t11) {
      a10(t11);
    });
  }, tl = function(e10) {
    try {
      return JSON.parse(e10), true;
    } catch (e11) {
      return false;
    }
  }, td = function e10(t10) {
    var a10 = this;
    Z(this, e10), ee(this, "_emittingAutomaticEvent", false), ee(this, "_hasInitialized", false), ee(this, "_currentMode", "standard"), t10.on("viewstart", function() {
      a10._hasInitialized || (a10._hasInitialized = true, a10._currentMode = t10.data.player_playback_mode || "standard", a10._emittingAutomaticEvent = true, t10.emit("playbackmodechange", { player_playback_mode: a10._currentMode, player_playback_mode_data: "{}" }), a10._emittingAutomaticEvent = false);
    }), t10.on("viewend", function() {
      a10._hasInitialized = false;
    }), t10.on("playbackmodechange", function(e11, i10) {
      a10._emittingAutomaticEvent || (i10.player_playback_mode_data ? tl(i10.player_playback_mode_data) || (t10.mux.log.warn("Invalid JSON string for player_playback_mode_data"), i10.player_playback_mode_data = "{}") : i10.player_playback_mode_data = "{}", t10.data.player_playback_mode_data = i10.player_playback_mode_data, t10.data.player_playback_mode = i10.player_playback_mode, a10._currentMode = i10.player_playback_mode);
    });
  }, tu = (function() {
    function e10(t10) {
      Z(this, e10), ee(this, "pm", void 0), ee(this, "_currentRangeStart", void 0), ee(this, "_lastPlayheadTime", void 0), this.pm = t10, this._currentRangeStart = null, this._lastPlayheadTime = null, t10.on("playbackheartbeat", this._updatePlaybackRange.bind(this)), t10.on("playbackheartbeatend", this._endPlaybackRange.bind(this));
    }
    return J(e10, [{ key: "_updateLastRangeEnd", value: function() {
      var e11 = this.pm.data.video_playback_ranges;
      if (e11 && e11.length > 0) {
        var t10 = this.pm.data.player_playhead_time || 0;
        e11[e11.length - 1][1] = t10;
      }
    } }, { key: "_updatePlaybackRange", value: function() {
      var e11, t10 = this.pm.data.player_playhead_time || 0;
      if (!(!this.pm.disableAdPlaybackRangeFiltering && null != (e11 = this.pm.adTracker) && e11.isAdBreak && null !== this._lastPlayheadTime && t10 < this._lastPlayheadTime)) {
        if (null !== this._lastPlayheadTime && null !== this._currentRangeStart && Math.abs(t10 - this._lastPlayheadTime) > 1e3) {
          var a10 = this.pm.data.video_playback_ranges;
          a10 && a10.length > 0 && (a10[a10.length - 1][1] = this._lastPlayheadTime), this._currentRangeStart = null;
        }
        if (null === this._currentRangeStart) {
          var i10 = this.pm.data.video_playback_ranges || [];
          i10.length > 0 && i10[i10.length - 1][1] === t10 ? this._currentRangeStart = i10[i10.length - 1][0] : (this._currentRangeStart = t10, i10.push([t10, t10])), this.pm.data.video_playback_ranges = i10;
        } else this._updateLastRangeEnd();
        this._lastPlayheadTime = t10;
      }
    } }, { key: "_endPlaybackRange", value: function() {
      null !== this._currentRangeStart && (this._updateLastRangeEnd(), this._currentRangeStart = null, this._lastPlayheadTime = null);
    } }]), e10;
  })(), tc = Object.freeze({ CELLULAR: "cellular", WIFI: "wifi", WIRED: "wired", OTHER: "other", NO_CONNECTION: "no_connection", UNKNOWN: "unknown" }), th = function(e10) {
    if (!e10) return tc.UNKNOWN;
    switch (e10) {
      case "cellular":
      case "wimax":
        return tc.CELLULAR;
      case "wifi":
        return tc.WIFI;
      case "ethernet":
        return tc.WIRED;
      case "none":
        return tc.NO_CONNECTION;
      case "bluetooth":
      case "other":
      default:
        return tc.OTHER;
      case "unknown":
        return tc.UNKNOWN;
    }
  }, tm = v(b()), tp = (function() {
    function e10(t10) {
      var a10 = this;
      Z(this, e10), ee(this, "pm", void 0), ee(this, "lastType", void 0), ee(this, "lastLowDataMode", void 0), this.pm = t10, this.pm.one("viewinit", function() {
        var t11, i10 = a10.emit.bind(a10);
        i10(), tm.default.addEventListener("online", i10), tm.default.addEventListener("offline", i10), null == (t11 = e10.connection) || t11.addEventListener("change", i10), a10.pm.on("destroy", function() {
          var t12;
          null == (t12 = e10.connection) || t12.removeEventListener("change", i10), tm.default.removeEventListener("online", i10), tm.default.removeEventListener("offline", i10);
        });
      });
    }
    return J(e10, [{ key: "type", get: function() {
      var t10, a10;
      return (null == (t10 = tm.default.navigator) ? void 0 : t10.onLine) === false ? tc.NO_CONNECTION : null != (a10 = e10.connection) && a10.type ? th(e10.connection.type) : tc.UNKNOWN;
    } }, { key: "lowDataMode", get: function() {
      var t10;
      return null == (t10 = e10.connection) ? void 0 : t10.saveData;
    } }, { key: "emit", value: function() {
      var e11 = this.type, t10 = this.lowDataMode;
      e11 === this.lastType && t10 === this.lastLowDataMode || (this.lastType = e11, this.lastLowDataMode = t10, this.pm.emit("networkchange", ec({ viewer_connection_type: e11 }, void 0 !== t10 && { viewer_connection_low_data_mode: t10 })));
    } }], [{ key: "connection", get: function() {
      var e11;
      return "object" == typeof (e11 = tm.default.navigator) && "connection" in e11 && "object" == typeof e11.connection ? tm.default.navigator.connection : null;
    } }]), e10;
  })(), tv = ["viewstart", "ended", "loadstart", "pause", "play", "playing", "ratechange", "waiting", "adplay", "adpause", "adended", "aderror", "adplaying", "adrequest", "adresponse", "adbreakstart", "adbreakend", "adfirstquartile", "admidpoint", "adthirdquartile", "rebufferstart", "rebufferend", "seeked", "error", "hb", "requestcompleted", "requestfailed", "requestcanceled", "renditionchange", "networkchange", "cdnchange", "playbackmodechange"], tb = /* @__PURE__ */ new Set(["requestcompleted", "requestfailed", "requestcanceled"]), tg = (function(e10) {
    if ("function" != typeof e10 && null !== e10) throw TypeError("Super expression must either be null or a function");
    i10.prototype = Object.create(e10 && e10.prototype, { constructor: { value: i10, writable: true, configurable: true } }), e10 && ei(i10, e10);
    var t10, a10 = (t10 = (function() {
      if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (e11) {
        return false;
      }
    })(), function() {
      var e11, a11 = et(i10);
      return e11 = t10 ? Reflect.construct(a11, arguments, et(this).constructor) : a11.apply(this, arguments), e11 && ("object" === f(e11) || "function" == typeof e11) ? e11 : z(this);
    });
    function i10(e11, t11, r10) {
      Z(this, i10), ee(z(n10 = a10.call(this)), "pageLoadEndTime", void 0), ee(z(n10), "pageLoadInitTime", void 0), ee(z(n10), "_destroyed", void 0), ee(z(n10), "_heartBeatTimeout", void 0), ee(z(n10), "adTracker", void 0), ee(z(n10), "dashjs", void 0), ee(z(n10), "data", void 0), ee(z(n10), "disablePlayheadRebufferTracking", void 0), ee(z(n10), "disableRebufferTracking", void 0), ee(z(n10), "disableAdPlaybackRangeFiltering", void 0), ee(z(n10), "errorTracker", void 0), ee(z(n10), "errorTranslator", void 0), ee(z(n10), "emitTranslator", void 0), ee(z(n10), "getAdData", void 0), ee(z(n10), "getPlayheadTime", void 0), ee(z(n10), "getStateData", void 0), ee(z(n10), "stateDataTranslator", void 0), ee(z(n10), "hlsjs", void 0), ee(z(n10), "id", void 0), ee(z(n10), "longResumeTracker", void 0), ee(z(n10), "minimumRebufferDuration", void 0), ee(z(n10), "mux", void 0), ee(z(n10), "playbackEventDispatcher", void 0), ee(z(n10), "playbackHeartbeat", void 0), ee(z(n10), "playbackHeartbeatTime", void 0), ee(z(n10), "playheadTime", void 0), ee(z(n10), "seekingTracker", void 0), ee(z(n10), "sustainedRebufferThreshold", void 0), ee(z(n10), "watchTimeTracker", void 0), ee(z(n10), "currentFragmentPDT", void 0), ee(z(n10), "currentFragmentStart", void 0), n10.pageLoadInitTime = ed(), n10.pageLoadEndTime = el(), n10.mux = e11, n10.id = t11, null != r10 && r10.beaconDomain && n10.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."), (r10 = Object.assign({ debug: false, minimumRebufferDuration: 250, sustainedRebufferThreshold: 1e3, playbackHeartbeatTime: 25, beaconDomain: "litix.io", sampleRate: 1, disableCookies: false, respectDoNotTrack: false, disableRebufferTracking: false, disablePlayheadRebufferTracking: false, disableAdPlaybackRangeFiltering: false, errorTranslator: function(e12) {
        return e12;
      }, emitTranslator: function() {
        for (var e12 = arguments.length, t12 = Array(e12), a11 = 0; a11 < e12; a11++) t12[a11] = arguments[a11];
        return t12;
      }, stateDataTranslator: function(e12) {
        return e12;
      } }, r10)).data = r10.data || {}, r10.data.property_key && (r10.data.env_key = r10.data.property_key, delete r10.data.property_key), G.level = r10.debug ? 1 : 3, n10.getPlayheadTime = r10.getPlayheadTime, n10.getStateData = r10.getStateData || function() {
        return {};
      }, n10.getAdData = r10.getAdData || function() {
      }, n10.minimumRebufferDuration = r10.minimumRebufferDuration, n10.sustainedRebufferThreshold = r10.sustainedRebufferThreshold, n10.playbackHeartbeatTime = r10.playbackHeartbeatTime, n10.disableRebufferTracking = r10.disableRebufferTracking, n10.disableRebufferTracking && n10.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."), n10.disablePlayheadRebufferTracking = r10.disablePlayheadRebufferTracking, n10.disableAdPlaybackRangeFiltering = r10.disableAdPlaybackRangeFiltering, n10.errorTranslator = r10.errorTranslator, n10.emitTranslator = r10.emitTranslator, n10.stateDataTranslator = r10.stateDataTranslator, n10.playbackEventDispatcher = new ti(e11, r10.data.env_key, r10), n10.data = { player_instance_id: q(), mux_sample_rate: r10.sampleRate, beacon_domain: r10.beaconCollectionDomain || r10.beaconDomain }, n10.data.view_sequence_number = 1, n10.data.player_sequence_number = 1;
      var n10, s10 = (function() {
        void 0 === this.data.view_start && (this.data.view_start = this.mux.utils.now(), this.emit("viewstart"), this.emit("renditionchange"));
      }).bind(z(n10));
      if (n10.on("viewinit", function(e12, t12) {
        this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this._updateStateData(), Object.assign(this.data, t12), this._initializeViewData(), this.one("play", s10), this.one("adbreakstart", s10);
      }), n10.on("videochange", function(e12, t12) {
        this._resetView(t12);
      }), n10.on("programchange", function(e12, t12) {
        this.data.player_is_paused && this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."), this._resetView(Object.assign(t12, { view_program_changed: true })), s10(), this.emit("play"), this.emit("playing");
      }), n10.on("fragmentchange", function(e12, t12) {
        this.currentFragmentPDT = t12.currentFragmentPDT, this.currentFragmentStart = t12.currentFragmentStart;
      }), n10.on("destroy", n10.destroy), "u" > typeof window && "function" == typeof window.addEventListener && "function" == typeof window.removeEventListener) {
        var o10 = function() {
          var e12 = void 0 !== n10.data.view_start;
          n10.mux.WINDOW_HIDDEN = "hidden" === document.visibilityState, e12 && n10.mux.WINDOW_HIDDEN && (n10.data.player_is_paused || n10.emit("hb"));
        };
        window.addEventListener("visibilitychange", o10, false);
        var l10 = function(e12) {
          e12.persisted || n10.destroy();
        };
        window.addEventListener("pagehide", l10, false), n10.on("destroy", function() {
          window.removeEventListener("visibilitychange", o10), window.removeEventListener("pagehide", l10);
        });
      }
      return n10.on("playerready", function(e12, t12) {
        Object.assign(this.data, t12);
      }), tv.forEach(function(e12) {
        n10.on(e12, function(t12, a11) {
          0 !== e12.indexOf("ad") && this._updateStateData(), Object.assign(this.data, a11), this._sanitizeData();
        }), n10.on("after" + e12, function() {
          ("error" !== e12 || this.errorTracker.viewErrored) && this.send(e12);
        });
      }), n10.on("viewend", function(e12, t12) {
        Object.assign(n10.data, t12);
      }), n10.one("playerready", function(e12) {
        var t12 = this.mux.utils.now();
        this.data.player_init_time && (this.data.player_startup_time = t12 - this.data.player_init_time), this.pageLoadInitTime = this.data.page_load_init_time || this.pageLoadInitTime, this.pageLoadEndTime = this.data.page_load_end_time || this.pageLoadEndTime, !this.mux.PLAYER_TRACKED && this.pageLoadInitTime && (this.mux.PLAYER_TRACKED = true, (this.data.player_init_time || this.pageLoadEndTime) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.pageLoadEndTime || 1 / 0) - this.pageLoadInitTime)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time;
      }), n10.longResumeTracker = new tn(z(n10)), n10.errorTracker = new eD(z(n10)), new eK(z(n10)), n10.seekingTracker = new eW(z(n10)), n10.playheadTime = new eO(z(n10)), n10.playbackHeartbeat = new eL(z(n10)), new eH(z(n10)), n10.watchTimeTracker = new ex(z(n10)), new eP(z(n10)), new tu(z(n10)), n10.adTracker = new eV(z(n10)), new eU(z(n10)), new eN(z(n10)), new eB(z(n10)), new tr(z(n10)), new to(z(n10)), new td(z(n10)), new tp(z(n10)), r10.hlsjs && n10.addHLSJS(r10), r10.dashjs && n10.addDashJS(r10), n10.emit("viewinit", r10.data), n10;
    }
    return J(i10, [{ key: "emit", value: function(e11, t11) {
      var a11, r10 = Object.assign({ viewer_time: this.mux.utils.now() }, t11), n10 = [e11, r10];
      if (this.emitTranslator) try {
        n10 = this.emitTranslator(e11, r10);
      } catch (e12) {
        this.mux.log.warn("Exception in emit translator callback.", e12);
      }
      null != n10 && n10.length && (a11 = ea(et(i10.prototype), "emit", this)).call.apply(a11, [this].concat(j(n10)));
    } }, { key: "destroy", value: function() {
      this._destroyed || (this._destroyed = true, void 0 !== this.data.view_start && (this.emit("viewend"), this.send("viewend")), this.playbackEventDispatcher.destroy(), this.removeHLSJS(), this.removeDashJS(), window.clearTimeout(this._heartBeatTimeout));
    } }, { key: "send", value: function(e11) {
      if (this.data.view_id) {
        var t11 = Object.assign({}, this.data);
        if (void 0 === t11.video_source_is_live && (t11.player_source_duration === 1 / 0 || t11.video_source_duration === 1 / 0 ? t11.video_source_is_live = true : (t11.player_source_duration > 0 || t11.video_source_duration > 0) && (t11.video_source_is_live = false)), t11.video_source_is_live || ["player_program_time", "player_manifest_newest_program_time", "player_live_edge_program_time", "player_program_time", "video_holdback", "video_part_holdback", "video_target_duration", "video_part_target_duration"].forEach(function(e12) {
          t11[e12] = void 0;
        }), t11.video_source_url = t11.video_source_url || t11.player_source_url, t11.video_source_url) {
          var a11 = U(en(t11.video_source_url), 2), i11 = a11[0];
          t11.video_source_domain = a11[1], t11.video_source_hostname = i11;
        }
        delete t11.ad_request_id, t11.video_playback_ranges && (t11.video_playback_range = JSON.stringify(t11.video_playback_ranges.filter(function(e12) {
          return e12[0] !== e12[1];
        }).map(function(e12) {
          return "".concat(e12[0], ":").concat(e12[1]);
        })), delete t11.video_playback_ranges), this.playbackEventDispatcher.send(e11, t11), this.data.view_sequence_number++, this.data.player_sequence_number++, tb.has(e11) || this._restartHeartBeat(), "viewend" === e11 && delete this.data.view_id;
      }
    } }, { key: "_resetView", value: function(e11) {
      this.emit("viewend"), this.send("viewend"), this.emit("viewinit", e11);
    } }, { key: "_updateStateData", value: function() {
      var e11, t11 = this.getStateData();
      if ("function" == typeof this.stateDataTranslator) try {
        t11 = this.stateDataTranslator(t11);
      } catch (e12) {
        this.mux.log.warn("Exception in stateDataTranslator translator callback.", e12);
      }
      null != (e11 = this.data) && e11.video_cdn && null != t11 && t11.video_cdn && (t11.video_cdn, t11 = (function(e12, t12) {
        if (null == e12) return {};
        var a11, i11, r10 = (function(e13, t13) {
          if (null == e13) return {};
          var a12, i12, r11 = {}, n11 = Object.keys(e13);
          for (i12 = 0; i12 < n11.length; i12++) a12 = n11[i12], t13.indexOf(a12) >= 0 || (r11[a12] = e13[a12]);
          return r11;
        })(e12, t12);
        if (Object.getOwnPropertySymbols) {
          var n10 = Object.getOwnPropertySymbols(e12);
          for (i11 = 0; i11 < n10.length; i11++) a11 = n10[i11], !(t12.indexOf(a11) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, a11) && (r10[a11] = e12[a11]);
        }
        return r10;
      })(t11, ["video_cdn"])), Object.assign(this.data, t11), this.playheadTime._updatePlayheadTime(), this._sanitizeData();
    } }, { key: "_sanitizeData", value: function() {
      var e11 = this;
      ["player_width", "player_height", "video_source_width", "video_source_height", "player_playhead_time", "video_source_bitrate"].forEach(function(t11) {
        var a11 = parseInt(e11.data[t11], 10);
        e11.data[t11] = isNaN(a11) ? void 0 : a11;
      }), ["player_source_url", "video_source_url"].forEach(function(t11) {
        if (e11.data[t11]) {
          var a11 = e11.data[t11].toLowerCase();
          (0 === a11.indexOf("data:") || 0 === a11.indexOf("blob:")) && (e11.data[t11] = "MSE style URL");
        }
      });
    } }, { key: "_resetVideoData", value: function() {
      var e11 = this;
      Object.keys(this.data).forEach(function(t11) {
        0 === t11.indexOf("video_") && delete e11.data[t11];
      });
    } }, { key: "_resetViewData", value: function() {
      var e11 = this;
      Object.keys(this.data).forEach(function(t11) {
        0 === t11.indexOf("view_") && delete e11.data[t11];
      }), this.data.view_sequence_number = 1;
    } }, { key: "_resetErrorData", value: function() {
      delete this.data.player_error_code, delete this.data.player_error_message, delete this.data.player_error_context, delete this.data.player_error_severity, delete this.data.player_error_business_exception;
    } }, { key: "_initializeViewData", value: function() {
      var e11 = this, t11 = this.data.view_id = q(), a11 = function() {
        t11 === e11.data.view_id && eu(e11.data, "player_view_count", 1);
      };
      this.data.player_is_paused ? this.one("play", a11) : a11();
    } }, { key: "_restartHeartBeat", value: function() {
      var e11 = this;
      window.clearTimeout(this._heartBeatTimeout), this._heartBeatTimeout = window.setTimeout(function() {
        e11.data.player_is_paused || e11.emit("hb");
      }, 1e4);
    } }, { key: "addHLSJS", value: function(e11) {
      e11.hlsjs ? this.hlsjs ? this.mux.log.warn("An instance of HLS.js is already being monitored for this player.") : (this.hlsjs = e11.hlsjs, eE(this.mux, this.id, e11.hlsjs, {}, e11.Hls || window.Hls)) : this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");
    } }, { key: "removeHLSJS", value: function() {
      this.hlsjs && (e_(this.hlsjs), this.hlsjs = void 0);
    } }, { key: "addDashJS", value: function(e11) {
      e11.dashjs ? this.dashjs ? this.mux.log.warn("An instance of Dash.js is already being monitored for this player.") : (this.dashjs = e11.dashjs, eM(this.mux, this.id, e11.dashjs)) : this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");
    } }, { key: "removeDashJS", value: function() {
      this.dashjs && (eS(this.dashjs), this.dashjs = void 0);
    } }]), i10;
  })(eR), ty = v(P());
  function tf() {
    return ty.default && !!(ty.default.fullscreenElement || ty.default.webkitFullscreenElement || ty.default.mozFullScreenElement || ty.default.msFullscreenElement);
  }
  var tE, t_, tw = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"], tT = { 1: "MEDIA_ERR_ABORTED", 2: "MEDIA_ERR_NETWORK", 3: "MEDIA_ERR_DECODE", 4: "MEDIA_ERR_SRC_NOT_SUPPORTED" }, tA = v(b());
  tA.default && tA.default.WeakMap && (t_ = /* @__PURE__ */ new WeakMap());
  var tk = function(e10) {
    return this.buffer = "", this.manifest = { segments: [], serverControl: {}, sessionData: {} }, this.currentUri = {}, this.process(e10), this.manifest;
  };
  tk.prototype.process = function(e10) {
    var t10;
    for (this.buffer += e10, t10 = this.buffer.indexOf("\n"); t10 > -1; t10 = this.buffer.indexOf("\n")) this.processLine(this.buffer.substring(0, t10)), this.buffer = this.buffer.substring(t10 + 1);
  }, tk.prototype.processLine = function(e10) {
    var t10 = e10.indexOf(":"), a10 = tD(e10, t10), i10 = a10[0], r10 = 2 === a10.length ? tI(a10[1]) : void 0;
    if ("#" !== i10[0]) this.currentUri.uri = i10, this.manifest.segments.push(this.currentUri), !this.manifest.targetDuration || "duration" in this.currentUri || (this.currentUri.duration = this.manifest.targetDuration), this.currentUri = {};
    else switch (i10) {
      case "#EXT-X-TARGETDURATION":
        if (!isFinite(r10) || r10 < 0) return;
        this.manifest.targetDuration = r10, this.setHoldBack();
        break;
      case "#EXT-X-PART-INF":
        tM(this.manifest, a10), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), this.setHoldBack();
        break;
      case "#EXT-X-SERVER-CONTROL":
        tM(this.manifest, a10), this.setHoldBack();
        break;
      case "#EXTINF":
        0 === r10 ? this.currentUri.duration = 0.01 : r10 > 0 && (this.currentUri.duration = r10);
        break;
      case "#EXT-X-PROGRAM-DATE-TIME":
        var n10 = new Date(r10);
        this.manifest.dateTimeString || (this.manifest.dateTimeString = r10, this.manifest.dateTimeObject = n10), this.currentUri.dateTimeString = r10, this.currentUri.dateTimeObject = n10;
        break;
      case "#EXT-X-VERSION":
        tM(this.manifest, a10);
        break;
      case "#EXT-X-SESSION-DATA":
        var s10 = eg(tx(a10[1]));
        Object.assign(this.manifest.sessionData, s10);
    }
  }, tk.prototype.setHoldBack = function() {
    var e10 = this.manifest, t10 = e10.serverControl, a10 = e10.targetDuration, i10 = e10.partTargetDuration;
    if (t10) {
      var r10 = "holdBack", n10 = "partHoldBack", s10 = a10 && 3 * a10, o10 = i10 && 2 * i10;
      a10 && !t10.hasOwnProperty(r10) && (t10[r10] = s10), s10 && t10[r10] < s10 && (t10[r10] = s10), i10 && !t10.hasOwnProperty(n10) && (t10[n10] = 3 * i10), i10 && t10[n10] < o10 && (t10[n10] = o10);
    }
  };
  var tM = function(e10, t10) {
    var a10, i10 = tS(t10[0].replace("#EXT-X-", ""));
    tL(t10[1]) ? (a10 = {}, a10 = Object.assign(tC(t10[1]), a10)) : a10 = tI(t10[1]), e10[i10] = a10;
  }, tS = function(e10) {
    return e10.toLowerCase().replace(/-(\w)/g, function(e11) {
      return e11[1].toUpperCase();
    });
  }, tI = function(e10) {
    if ("yes" === e10.toLowerCase() || "no" === e10.toLowerCase()) return "yes" === e10.toLowerCase();
    var t10 = -1 !== e10.indexOf(":") ? e10 : parseFloat(e10);
    return isNaN(t10) ? e10 : t10;
  }, tR = function(e10) {
    var t10 = {}, a10 = e10.split("=");
    return a10.length > 1 && (t10[tS(a10[0])] = tI(a10[1])), t10;
  }, tC = function(e10) {
    for (var t10 = e10.split(","), a10 = {}, i10 = 0; t10.length > i10; i10++) a10 = Object.assign(tR(t10[i10]), a10);
    return a10;
  }, tL = function(e10) {
    return e10.indexOf("=") > -1;
  }, tD = function(e10, t10) {
    return -1 === t10 ? [e10] : [e10.substring(0, t10), e10.substring(t10 + 1)];
  }, tx = function(e10) {
    var t10 = {};
    if (e10) {
      var a10 = e10.search(",");
      return [e10.slice(0, a10), e10.slice(a10 + 1)].forEach(function(e11, a11) {
        for (var i10 = e11.replace(/['"]+/g, "").split("="), r10 = 0; r10 < i10.length; r10++) "DATA-ID" === i10[r10] && (t10["DATA-ID"] = i10[1 - r10]), "VALUE" === i10[r10] && (t10.VALUE = i10[1 - r10]);
      }), { data: t10 };
    }
  }, tP = { safeCall: function(e10, t10, a10, i10) {
    var r10 = i10;
    if (e10 && "function" == typeof e10[t10]) try {
      r10 = e10[t10].apply(e10, a10);
    } catch (e11) {
      G.info("safeCall error", e11);
    }
    return r10;
  }, safeIncrement: eu, getComputedStyle: function(e10, t10) {
    var a10;
    return e10 && t10 && tA.default && "function" == typeof tA.default.getComputedStyle ? (t_ && t_.has(e10) && (a10 = t_.get(e10)), a10 || (a10 = tA.default.getComputedStyle(e10, null), t_ && t_.set(e10, a10)), a10.getPropertyValue(t10)) : "";
  }, secondsToMs: function(e10) {
    return Math.floor(1e3 * e10);
  }, assign: Object.assign, headersStringToObject: ev, cdnHeadersToRequestId: eb, extractHostnameAndDomain: en, extractHostname: er, manifestParser: tk, generateShortID: V, generateUUID: q, now: $, findMediaElement: F }, tO = {}, tN = function(e10) {
    var t10 = arguments;
    "string" == typeof e10 ? tN.hasOwnProperty(e10) ? B.default.setTimeout(function() {
      t10 = Array.prototype.splice.call(t10, 1), tN[e10].apply(null, t10);
    }, 0) : G.warn("`" + e10 + "` is an unknown task") : "function" == typeof e10 ? B.default.setTimeout(function() {
      e10(tN);
    }, 0) : G.warn("`" + e10 + "` is invalid.");
  }, tU = { loaded: $(), NAME: "mux-embed", VERSION: "5.18.1", API_VERSION: "2.1", PLAYER_TRACKED: false, monitor: function(e10, t10) {
    return (function(e11, t11, a10) {
      var i10 = U(F(t11), 3), r10 = i10[0], n10 = i10[1], s10 = i10[2], o10 = e11.log, l10 = e11.utils.getComputedStyle, d10 = e11.utils.secondsToMs;
      if (!r10) return o10.error("No element was found with the `" + n10 + "` query selector.");
      if ("video" !== s10 && "audio" !== s10) return o10.error("The element of `" + n10 + "` was not a media element.");
      r10.mux && (r10.mux.destroy(), delete r10.mux, o10.warn("Already monitoring this video element, replacing existing event listeners")), (a10 = Object.assign({ automaticErrorTracking: true }, a10, { getPlayheadTime: function() {
        return d10(r10.currentTime);
      }, getStateData: function() {
        var e12, t12, a11 = (null == (e12 = this.getPlayheadTime) ? void 0 : e12.call(this)) || d10(r10.currentTime), i11 = this.hlsjs && this.hlsjs.url, n11 = this.dashjs && "function" == typeof this.dashjs.getSource && this.dashjs.getSource(), s11 = { player_is_paused: r10.paused, player_width: parseInt(l10(r10, "width")), player_height: parseInt(l10(r10, "height")), player_autoplay_on: r10.autoplay, player_preload_on: r10.preload, player_language_code: r10.lang, player_is_fullscreen: tf(), video_poster_url: r10.poster, video_source_url: i11 || n11 || r10.currentSrc, video_source_duration: d10(r10.duration), video_source_height: r10.videoHeight, video_source_width: r10.videoWidth, view_dropped_frame_count: null == r10 || null == (t12 = r10.getVideoPlaybackQuality) ? void 0 : t12.call(r10).droppedVideoFrames };
        if (r10.getStartDate && a11 > 0) {
          var o11 = r10.getStartDate();
          if (o11 && "function" == typeof o11.getTime && o11.getTime()) {
            var u11 = o11.getTime();
            s11.player_program_time = u11 + a11, r10.seekable.length > 0 && (s11.player_live_edge_program_time = u11 + r10.seekable.end(r10.seekable.length - 1));
          }
        }
        return s11;
      } })).data = Object.assign({ player_software: "HTML5 Video Element", player_mux_plugin_name: "VideoElementMonitor", player_mux_plugin_version: e11.VERSION }, a10.data), r10.mux = r10.mux || {}, r10.mux.deleted = false, r10.mux.emit = function(t12, a11) {
        e11.emit(n10, t12, a11);
      }, r10.mux.updateData = function(e12) {
        r10.mux.emit("hb", e12);
      };
      var u10 = function() {
        o10.error("The monitor for this video element has already been destroyed.");
      };
      r10.mux.destroy = function() {
        Object.keys(r10.mux.listeners).forEach(function(e12) {
          r10.removeEventListener(e12, r10.mux.listeners[e12], false);
        }), delete r10.mux.listeners, r10.mux.fullscreenChangeListener && (document.removeEventListener("fullscreenchange", r10.mux.fullscreenChangeListener, false), delete r10.mux.fullscreenChangeListener), r10.mux.destroy = u10, r10.mux.swapElement = u10, r10.mux.emit = u10, r10.mux.addHLSJS = u10, r10.mux.addDashJS = u10, r10.mux.removeHLSJS = u10, r10.mux.removeDashJS = u10, r10.mux.updateData = u10, r10.mux.setEmitTranslator = u10, r10.mux.setStateDataTranslator = u10, r10.mux.setGetPlayheadTime = u10, r10.mux.deleted = true, e11.emit(n10, "destroy");
      }, r10.mux.swapElement = function(t12) {
        var a11 = U(F(t12), 3), i11 = a11[0], n11 = a11[1], s11 = a11[2];
        return i11 ? "video" !== s11 && "audio" !== s11 ? e11.log.error("The element of `" + n11 + "` was not a media element.") : void (i11.muxId = r10.muxId, delete r10.muxId, i11.mux = i11.mux || {}, i11.mux.listeners = Object.assign({}, r10.mux.listeners), delete r10.mux.listeners, Object.keys(i11.mux.listeners).forEach(function(e12) {
          r10.removeEventListener(e12, i11.mux.listeners[e12], false), i11.addEventListener(e12, i11.mux.listeners[e12], false);
        }), i11.mux.fullscreenChangeListener = r10.mux.fullscreenChangeListener, delete r10.mux.fullscreenChangeListener, i11.mux.swapElement = r10.mux.swapElement, i11.mux.destroy = r10.mux.destroy, delete r10.mux, r10 = i11) : e11.log.error("No element was found with the `" + n11 + "` query selector.");
      }, r10.mux.addHLSJS = function(t12) {
        e11.addHLSJS(n10, t12);
      }, r10.mux.addDashJS = function(t12) {
        e11.addDashJS(n10, t12);
      }, r10.mux.removeHLSJS = function() {
        e11.removeHLSJS(n10);
      }, r10.mux.removeDashJS = function() {
        e11.removeDashJS(n10);
      }, r10.mux.setEmitTranslator = function(t12) {
        e11.setEmitTranslator(n10, t12);
      }, r10.mux.setStateDataTranslator = function(t12) {
        e11.setStateDataTranslator(n10, t12);
      }, r10.mux.setGetPlayheadTime = function(t12) {
        t12 || (t12 = a10.getPlayheadTime), e11.setGetPlayheadTime(n10, t12);
      }, e11.init(n10, a10), e11.emit(n10, "playerready"), r10.paused || (e11.emit(n10, "play"), r10.readyState > 2 && e11.emit(n10, "playing")), r10.mux.listeners = {}, tw.forEach(function(t12) {
        ("error" !== t12 || a10.automaticErrorTracking) && (r10.mux.listeners[t12] = function() {
          var a11 = {};
          if ("error" === t12) {
            if (!r10.error || 1 === r10.error.code) return;
            a11.player_error_code = r10.error.code, a11.player_error_message = tT[r10.error.code] || r10.error.message;
          }
          e11.emit(n10, t12, a11);
        }, r10.addEventListener(t12, r10.mux.listeners[t12], false));
      }), r10.mux.listeners.enterpictureinpicture = function() {
        e11.emit(n10, "playbackmodechange", { player_playback_mode: "pip", player_playback_mode_data: "{}" });
      }, r10.mux.listeners.leavepictureinpicture = function() {
        var t12 = tf() ? "fullscreen" : "standard";
        e11.emit(n10, "playbackmodechange", { player_playback_mode: t12, player_playback_mode_data: "{}" });
      }, r10.addEventListener("enterpictureinpicture", r10.mux.listeners.enterpictureinpicture, false), r10.addEventListener("leavepictureinpicture", r10.mux.listeners.leavepictureinpicture, false), r10.mux.fullscreenChangeListener = function() {
        var t12 = tf(), a11 = document.fullscreenElement;
        if (t12 && (a11 === r10 || null != a11 && a11.contains(r10))) e11.emit(n10, "playbackmodechange", { player_playback_mode: "fullscreen", player_playback_mode_data: "{}" });
        else if (!t12) {
          var i11 = document.pictureInPictureElement === r10;
          e11.emit(n10, "playbackmodechange", { player_playback_mode: i11 ? "pip" : "standard", player_playback_mode_data: "{}" });
        }
      }, document.addEventListener("fullscreenchange", r10.mux.fullscreenChangeListener, false);
    })(tN, e10, t10);
  }, destroyMonitor: function(e10) {
    var t10 = U(F(e10), 1)[0];
    t10 && t10.mux && "function" == typeof t10.mux.destroy ? t10.mux.destroy() : G.error("A video element monitor for `" + e10 + "` has not been initialized via `mux.monitor`.");
  }, addHLSJS: function(e10, t10) {
    var a10 = K(e10);
    tO[a10] ? tO[a10].addHLSJS(t10) : G.error("A monitor for `" + a10 + "` has not been initialized.");
  }, addDashJS: function(e10, t10) {
    var a10 = K(e10);
    tO[a10] ? tO[a10].addDashJS(t10) : G.error("A monitor for `" + a10 + "` has not been initialized.");
  }, removeHLSJS: function(e10) {
    var t10 = K(e10);
    tO[t10] ? tO[t10].removeHLSJS() : G.error("A monitor for `" + t10 + "` has not been initialized.");
  }, removeDashJS: function(e10) {
    var t10 = K(e10);
    tO[t10] ? tO[t10].removeDashJS() : G.error("A monitor for `" + t10 + "` has not been initialized.");
  }, init: function(e10, t10) {
    Q() && t10 && t10.respectDoNotTrack && G.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
    var a10 = K(e10);
    tO[a10] = new tg(tN, a10, t10);
  }, emit: function(e10, t10, a10) {
    var i10 = K(e10);
    tO[i10] ? (tO[i10].emit(t10, a10), "destroy" === t10 && delete tO[i10]) : G.error("A monitor for `" + i10 + "` has not been initialized.");
  }, updateData: function(e10, t10) {
    var a10 = K(e10);
    tO[a10] ? tO[a10].emit("hb", t10) : G.error("A monitor for `" + a10 + "` has not been initialized.");
  }, setEmitTranslator: function(e10, t10) {
    var a10 = K(e10);
    tO[a10] ? tO[a10].emitTranslator = t10 : G.error("A monitor for `" + a10 + "` has not been initialized.");
  }, setStateDataTranslator: function(e10, t10) {
    var a10 = K(e10);
    tO[a10] ? tO[a10].stateDataTranslator = t10 : G.error("A monitor for `" + a10 + "` has not been initialized.");
  }, setGetPlayheadTime: function(e10, t10) {
    var a10 = K(e10);
    tO[a10] ? tO[a10].getPlayheadTime = t10 : G.error("A monitor for `" + a10 + "` has not been initialized.");
  }, checkDoNotTrack: Q, log: G, utils: tP, events: { PLAYER_READY: "playerready", VIEW_INIT: "viewinit", VIDEO_CHANGE: "videochange", PLAY: "play", PAUSE: "pause", PLAYING: "playing", TIME_UPDATE: "timeupdate", SEEKING: "seeking", SEEKED: "seeked", REBUFFER_START: "rebufferstart", REBUFFER_END: "rebufferend", ERROR: "error", ENDED: "ended", RENDITION_CHANGE: "renditionchange", ORIENTATION_CHANGE: "orientationchange", PLAYBACK_MODE_CHANGE: "playbackmodechange", NETWORK_CHANGE: "networkchange", AD_REQUEST: "adrequest", AD_RESPONSE: "adresponse", AD_BREAK_START: "adbreakstart", AD_PLAY: "adplay", AD_PLAYING: "adplaying", AD_PAUSE: "adpause", AD_FIRST_QUARTILE: "adfirstquartile", AD_MID_POINT: "admidpoint", AD_THIRD_QUARTILE: "adthirdquartile", AD_ENDED: "adended", AD_BREAK_END: "adbreakend", AD_ERROR: "aderror", REQUEST_COMPLETED: "requestcompleted", REQUEST_FAILED: "requestfailed", REQUEST_CANCELLED: "requestcanceled", HEARTBEAT: "hb", DESTROY: "destroy" }, WINDOW_HIDDEN: false, WINDOW_UNLOADING: false };
  Object.assign(tN, tU), void 0 !== B.default && "function" == typeof B.default.addEventListener && B.default.addEventListener("pagehide", function(e10) {
    e10.persisted || (tN.WINDOW_UNLOADING = true);
  }, false);
  var tB = e.i(945811);
  try {
    var tH = "u" > typeof window ? window : e.g;
    tH._sentryModuleMetadata = tH._sentryModuleMetadata || {}, tH._sentryModuleMetadata[new tH.Error().stack] = Object.assign({}, tH._sentryModuleMetadata[new tH.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var tW = tB.default, t$ = "video", tq = (e10) => e10 === t$ ? "playback" : e10, tV = class e10 extends Error {
    constructor(t10, a10 = e10.MEDIA_ERR_CUSTOM, i10, r10) {
      var n10;
      super(t10), this.name = "MediaError", this.code = a10, this.context = r10, this.fatal = null != i10 ? i10 : a10 >= e10.MEDIA_ERR_NETWORK && a10 <= e10.MEDIA_ERR_ENCRYPTED, this.message || (this.message = null != (n10 = e10.defaultMessages[this.code]) ? n10 : "");
    }
  };
  tV.MEDIA_ERR_ABORTED = 1, tV.MEDIA_ERR_NETWORK = 2, tV.MEDIA_ERR_DECODE = 3, tV.MEDIA_ERR_SRC_NOT_SUPPORTED = 4, tV.MEDIA_ERR_ENCRYPTED = 5, tV.MEDIA_ERR_CUSTOM = 100, tV.defaultMessages = { 1: "You aborted the media playback", 2: "A network error caused the media download to fail.", 3: "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.", 4: "An unsupported error occurred. The server or network failed, or your browser does not support this format.", 5: "The media is encrypted and there are no keys to decrypt it." };
  var tK = (e10, t10) => null != t10 && e10 in t10, tF = { ANY: "any", MUTED: "muted" }, tj = "on-demand", tG = "live", tY = "unknown", tQ = "native", tz = { HEADER: "header", QUERY: "query", NONE: "none" }, tZ = Object.values(tz), tX = { M3U8: "application/vnd.apple.mpegurl", MP4: "video/mp4" }, tJ = { HLS: tX.M3U8 };
  Object.keys(tJ), [...Object.values(tX)];
  var t0 = { code: "en" }, t1 = (e10, t10, a10, i10, r10 = e10) => {
    r10.addEventListener(t10, a10, i10), e10.addEventListener("teardown", () => {
      r10.removeEventListener(t10, a10);
    }, { once: true });
  }, t2 = (e10) => {
    let t10 = e10.indexOf("?");
    return t10 < 0 ? [e10] : [e10.slice(0, t10), e10.slice(t10)];
  }, t3 = (e10) => {
    let { type: t10 } = e10;
    if (t10) {
      let e11 = t10.toUpperCase();
      return tK(e11, tJ) ? tJ[e11] : t10;
    }
    return t9(e10);
  }, t4 = (e10) => "VOD" === e10 ? tj : tG, t5 = (e10) => "EVENT" === e10 ? 1 / 0 : "VOD" === e10 ? NaN : 0, t9 = (e10) => {
    let { src: t10 } = e10;
    if (!t10) return "";
    let a10 = "";
    try {
      a10 = t6(t10).pathname;
    } catch {
      console.error("Invalid url when trying to infer mime type", t10);
    }
    let i10 = a10.lastIndexOf(".");
    if (i10 < 0) return ae(e10) ? tX.M3U8 : "";
    let r10 = a10.slice(i10 + 1).toUpperCase();
    return tK(r10, tX) ? tX[r10] : "";
  }, t8 = (e10) => {
    try {
      return new URL(e10), false;
    } catch {
      return true;
    }
  }, t6 = (e10, t10) => {
    var a10;
    if (!t8(e10)) return new URL(e10);
    let i10 = null == (a10 = null == window ? void 0 : window.location) ? void 0 : a10.href, r10 = null != t10 ? t10 : i10;
    return t10 && t8(t10.toString()) && (r10 = new URL(t10, i10)), new URL(e10, r10);
  }, t7 = "mux.com", ae = ({ src: e10, customDomain: t10 = t7 }) => {
    let a10;
    try {
      a10 = new URL(`${e10}`);
    } catch {
      return false;
    }
    let i10 = "https:" === a10.protocol, r10 = a10.hostname === `stream.${t10}`.toLowerCase(), n10 = a10.pathname.split("/"), s10 = 2 === n10.length, o10 = !(null != n10 && n10[1].includes("."));
    return i10 && r10 && s10 && o10;
  }, at = (e10) => {
    let t10 = (null != e10 ? e10 : "").split(".")[1];
    if (t10) try {
      let e11 = t10.replace(/-/g, "+").replace(/_/g, "/"), a10 = decodeURIComponent(atob(e11).split("").map(function(e12) {
        return "%" + ("00" + e12.charCodeAt(0).toString(16)).slice(-2);
      }).join(""));
      return JSON.parse(a10);
    } catch {
      return;
    }
  };
  function aa(e10, t10 = true) {
    var a10;
    return new ai(t10 && null != (a10 = null == t0 ? void 0 : t0[e10]) ? a10 : e10, t10 ? t0.code : "en");
  }
  var ai = class {
    constructor(e10, t10 = ((e11) => null != (e11 = t0) ? e11 : "en")()) {
      this.message = e10, this.locale = t10;
    }
    format(e10) {
      return this.message.replace(/\{(\w+)\}/g, (t10, a10) => {
        var i10;
        return null != (i10 = e10[a10]) ? i10 : "";
      });
    }
    toString() {
      return this.message;
    }
  }, ar = Object.values(tF), an = (e10) => "boolean" == typeof e10 || "string" == typeof e10 && ar.includes(e10), as = (e10, t10) => {
    if (!t10) return;
    let a10 = e10.muted, i10 = () => e10.muted = a10;
    switch (t10) {
      case tF.ANY:
        e10.play().catch(() => {
          e10.muted = true, e10.play().catch(i10);
        });
        break;
      case tF.MUTED:
        e10.muted = true, e10.play().catch(i10);
        break;
      default:
        e10.play().catch(() => {
        });
    }
  }, ao = (e10) => "time" in e10 ? e10.time : e10.startTime;
  function al(e10, t10, a10, i10, r10, n10) {
    let s10 = document.createElement("track");
    return s10.kind = t10, s10.label = a10, i10 && (s10.srclang = i10), r10 && (s10.id = r10), n10 && (s10.default = true), s10.track.mode = ["subtitles", "captions"].includes(t10) ? "disabled" : "hidden", s10.setAttribute("data-removeondestroy", ""), e10.append(s10), s10.track;
  }
  function ad(e10, t10, a10) {
    var i10;
    return null == (i10 = Array.from(e10.querySelectorAll("track")).find((e11) => e11.track.label === t10 && e11.track.kind === a10)) ? void 0 : i10.track;
  }
  async function au(e10, t10, a10, i10) {
    let r10 = ad(e10, a10, i10);
    return r10 || ((r10 = al(e10, i10, a10)).mode = "hidden", await new Promise((e11) => setTimeout(() => e11(void 0), 0))), "hidden" !== r10.mode && (r10.mode = "hidden"), [...t10].sort((e11, t11) => ao(t11) - ao(e11)).forEach((t11) => {
      var a11, n10;
      let s10 = t11.value, o10 = ao(t11);
      if ("endTime" in t11 && null != t11.endTime) null == r10 || r10.addCue(new VTTCue(o10, t11.endTime, "chapters" === i10 ? s10 : JSON.stringify(null != s10 ? s10 : null)));
      else {
        let t12 = Array.prototype.findIndex.call(null == r10 ? void 0 : r10.cues, (e11) => e11.startTime >= o10), l10 = null == (a11 = null == r10 ? void 0 : r10.cues) ? void 0 : a11[t12], d10 = l10 ? l10.startTime : Number.isFinite(e10.duration) ? e10.duration : Number.MAX_SAFE_INTEGER, u10 = null == (n10 = null == r10 ? void 0 : r10.cues) ? void 0 : n10[t12 - 1];
        u10 && (u10.endTime = o10), null == r10 || r10.addCue(new VTTCue(o10, d10, "chapters" === i10 ? s10 : JSON.stringify(null != s10 ? s10 : null)));
      }
    }), e10.textTracks.dispatchEvent(new Event("change", { bubbles: true, composed: true })), r10;
  }
  var ac = "cuepoints", ah = Object.freeze({ label: ac });
  async function am(e10, t10, a10 = ah) {
    return au(e10, t10, a10.label, "metadata");
  }
  var ap = (e10) => ({ time: e10.startTime, value: JSON.parse(e10.text) });
  function av(e10, t10 = { label: ac }) {
    var a10, i10;
    let r10 = ad(e10, t10.label, "metadata");
    if (!(null != (a10 = null == r10 ? void 0 : r10.activeCues) && a10.length)) return;
    if (1 === r10.activeCues.length) return ap(r10.activeCues[0]);
    let { currentTime: n10 } = e10;
    return ap(Array.prototype.find.call(null != (i10 = r10.activeCues) ? i10 : [], ({ startTime: e11, endTime: t11 }) => e11 <= n10 && t11 > n10) || r10.activeCues[0]);
  }
  async function ab(e10, t10 = ah) {
    return new Promise((a10) => {
      t1(e10, "loadstart", async () => {
        let i10 = await am(e10, [], t10);
        t1(e10, "cuechange", () => {
          let t11 = av(e10);
          if (t11) {
            let a11 = new CustomEvent("cuepointchange", { composed: true, bubbles: true, detail: t11 });
            e10.dispatchEvent(a11);
          }
        }, {}, i10), a10(i10);
      });
    });
  }
  var ag = "chapters", ay = Object.freeze({ label: ag }), af = (e10) => ({ startTime: e10.startTime, endTime: e10.endTime, value: e10.text });
  async function aE(e10, t10, a10 = ay) {
    return au(e10, t10, a10.label, "chapters");
  }
  function a_(e10, t10 = { label: ag }) {
    var a10, i10;
    let r10 = ad(e10, t10.label, "chapters");
    if (!(null != (a10 = null == r10 ? void 0 : r10.activeCues) && a10.length)) return;
    if (1 === r10.activeCues.length) return af(r10.activeCues[0]);
    let { currentTime: n10 } = e10;
    return af(Array.prototype.find.call(null != (i10 = r10.activeCues) ? i10 : [], ({ startTime: e11, endTime: t11 }) => e11 <= n10 && t11 > n10) || r10.activeCues[0]);
  }
  async function aw(e10, t10 = ay) {
    return new Promise((a10) => {
      t1(e10, "loadstart", async () => {
        let i10 = await aE(e10, [], t10);
        t1(e10, "cuechange", () => {
          let t11 = a_(e10);
          if (t11) {
            let a11 = new CustomEvent("chapterchange", { composed: true, bubbles: true, detail: t11 });
            e10.dispatchEvent(a11);
          }
        }, {}, i10), a10(i10);
      });
    });
  }
  var aT = (e10, t10, a10, i10, r10 = false, n10 = !((e11) => null == (e11 = globalThis.navigator) ? void 0 : e11.onLine)()) => {
    var s10, o10, l10, d10;
    let u10, c10;
    if (n10) {
      let a11 = aa("Your device appears to be offline", r10), i11 = tV.MEDIA_ERR_NETWORK, n11 = new tV(a11, i11, false, void 0);
      return n11.errorCategory = t10, n11.muxCode = 2000002, n11.data = e10, n11;
    }
    let h10 = "status" in e10 ? e10.status : e10.code, m10 = Date.now(), p10 = tV.MEDIA_ERR_NETWORK;
    if (200 === h10) return;
    let v10 = tq(t10), b10 = (u10 = tq(t10), c10 = `${u10}Token`, null != (l10 = a10.tokens) && l10[u10] ? null == (d10 = a10.tokens) ? void 0 : d10[u10] : tK(c10, a10) ? a10[c10] : void 0), g2 = t10 === t$ ? "v" : "drm" === t10 ? "d" : void 0, [y2] = t2(null != (s10 = a10.playbackId) ? s10 : "");
    if (!h10 || !y2) return;
    let f2 = at(b10);
    if (b10 && !f2) {
      let a11 = new tV(aa("The {tokenNamePrefix}-token provided is invalid or malformed.", r10).format({ tokenNamePrefix: v10 }), p10, true, aa("Compact JWT string: {token}", r10).format({ token: b10 }));
      return a11.errorCategory = t10, a11.muxCode = 2412202, a11.data = e10, a11;
    }
    if (h10 >= 500) {
      let e11 = new tV("", p10, null == i10 || i10);
      return e11.errorCategory = t10, e11.muxCode = 2e6, e11;
    }
    if (403 === h10) if (f2) {
      if ((({ exp: e11 }, t11 = Date.now()) => !e11 || 1e3 * e11 < t11)(f2, m10)) {
        let a11 = { timeStyle: "medium", dateStyle: "medium" }, i11 = new tV(aa("The video\u2019s secured {tokenNamePrefix}-token has expired.", r10).format({ tokenNamePrefix: v10 }), p10, true, aa("Expired at: {expiredDate}. Current time: {currentDate}.", r10).format({ expiredDate: new Intl.DateTimeFormat("en", a11).format(null != (o10 = f2.exp) ? o10 : 0), currentDate: new Intl.DateTimeFormat("en", a11).format(m10) }));
        return i11.errorCategory = t10, i11.muxCode = 2403210, i11.data = e10, i11;
      }
      if ((({ sub: e11 }, t11) => e11 !== t11)(f2, y2)) {
        let a11 = new tV(aa("The video\u2019s playback ID does not match the one encoded in the {tokenNamePrefix}-token.", r10).format({ tokenNamePrefix: v10 }), p10, true, aa("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}", r10).format({ tokenNamePrefix: v10, playbackId: y2, tokenPlaybackId: f2.sub }));
        return a11.errorCategory = t10, a11.muxCode = 2403232, a11.data = e10, a11;
      }
      if ((({ aud: e11 }) => !e11)(f2)) {
        let a11 = new tV(aa("The {tokenNamePrefix}-token is formatted with incorrect information.", r10).format({ tokenNamePrefix: v10 }), p10, true, aa("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.", r10).format({ tokenNamePrefix: v10, expectedAud: g2 }));
        return a11.errorCategory = t10, a11.muxCode = 2403221, a11.data = e10, a11;
      }
      if ((({ aud: e11 }, t11) => e11 !== t11)(f2, g2)) {
        let a11 = new tV(aa("The {tokenNamePrefix}-token is formatted with incorrect information.", r10).format({ tokenNamePrefix: v10 }), p10, true, aa("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.", r10).format({ tokenNamePrefix: v10, expectedAud: g2, aud: f2.aud }));
        return a11.errorCategory = t10, a11.muxCode = 2403222, a11.data = e10, a11;
      }
    } else {
      let a11 = new tV(aa("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.", r10).format({ tokenNamePrefix: v10, category: t10 }), p10, null == i10 || i10, aa("Specified playback ID: {playbackId}", r10).format({ playbackId: y2 }));
      return a11.errorCategory = t10, a11.muxCode = 2403201, a11.data = e10, a11;
    }
    if (412 === h10) {
      let n11 = new tV(aa("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.", r10), p10, null == i10 || i10, aa("Specified playback ID: {playbackId}", r10).format({ playbackId: y2 }));
      return n11.errorCategory = t10, n11.muxCode = 2412e3, n11.streamType = a10.streamType === tG ? "live" : a10.streamType === tj ? "on-demand" : "unknown", n11.data = e10, n11;
    }
    if (404 === h10) {
      let a11 = new tV(aa("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.", r10), p10, null == i10 || i10, aa("Specified playback ID: {playbackId}", r10).format({ playbackId: y2 }));
      return a11.errorCategory = t10, a11.muxCode = 2404e3, a11.data = e10, a11;
    }
    if (400 === h10) {
      let a11 = new tV(aa("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."), p10, null == i10 || i10, aa("Specified playback ID: {playbackId}", r10).format({ playbackId: y2 }));
      return a11.errorCategory = t10, a11.muxCode = 24e5, a11.data = e10, a11;
    }
    let E2 = new tV("", p10, null == i10 || i10);
    return E2.errorCategory = t10, E2.muxCode = 2e6, E2.data = e10, E2;
  }, aA = tW.DefaultConfig.capLevelController, ak = { "720p": 921600, "1080p": 2073600, "1440p": 4194304, "2160p": 8294400 }, aM = class e10 extends aA {
    constructor(e11) {
      super(e11);
    }
    static setMaxAutoResolution(t10, a10) {
      a10 ? e10.maxAutoResolution.set(t10, a10) : e10.maxAutoResolution.delete(t10);
    }
    getMaxAutoResolution() {
      var t10;
      let a10 = this.hls;
      return null != (t10 = e10.maxAutoResolution.get(a10)) ? t10 : void 0;
    }
    get levels() {
      var e11;
      return null != (e11 = this.hls.levels) ? e11 : [];
    }
    getValidLevels(e11) {
      return this.levels.filter((t10, a10) => this.isLevelAllowed(t10) && a10 <= e11);
    }
    getMaxLevelCapped(e11) {
      let t10 = this.getValidLevels(e11), a10 = this.getMaxAutoResolution();
      if (!a10) return super.getMaxLevel(e11);
      let i10 = ak[a10.toLowerCase().trim()];
      if (!i10) return super.getMaxLevel(e11);
      let r10 = t10.filter((e12) => e12.width * e12.height <= i10), n10 = r10.findIndex((e12) => e12.width * e12.height === i10);
      if (-1 !== n10) {
        let e12 = r10[n10];
        return t10.findIndex((t11) => t11 === e12);
      }
      if (0 === r10.length) return 0;
      let s10 = r10[r10.length - 1];
      return t10.findIndex((e12) => e12 === s10);
    }
    getMaxLevel(t10) {
      if (void 0 !== this.getMaxAutoResolution()) return this.getMaxLevelCapped(t10);
      let a10 = super.getMaxLevel(t10), i10 = this.getValidLevels(t10);
      if (!i10[a10]) return a10;
      let r10 = Math.min(i10[a10].width, i10[a10].height), n10 = e10.minMaxResolution;
      return r10 >= n10 ? a10 : aA.getMaxLevelByMediaSize(i10, 16 / 9 * n10, n10);
    }
  };
  aM.minMaxResolution = 720, aM.maxAutoResolution = /* @__PURE__ */ new WeakMap();
  var aS, aI, aR, aC, aL, aD, ax = (e10) => new TextDecoder("utf-16le").decode(e10).replace("skd://", "").slice(1), aP = "fairplay", aO = /([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g, aN = async (e10, t10) => {
    if (t10 === tX.MP4) return { streamType: tj, targetLiveWindow: NaN, liveEdgeStartOffset: void 0, sessionData: void 0 };
    if (t10 === tX.M3U8) {
      let t11 = await fetch(e10);
      if (!t11.ok) return Promise.reject(t11);
      let a10 = await t11.text(), i10 = await ((e11, t12) => {
        let a11, i11 = e11.split(`
`).find((e12, t13, a12) => t13 > 0 && a12[t13 - 1].startsWith("#EXT-X-STREAM-INF"));
        if (!i11) return Promise.reject(Error("No media playlist URL found in multivariant playlist"));
        if (t8(i11) && !t12) return Promise.reject(Error("masterPlaylistUrl is required to resolve relative media playlist URL"));
        try {
          a11 = t6(i11, t12);
        } catch (e12) {
          return Promise.reject(e12);
        }
        return fetch(a11).then((e12) => 200 !== e12.status ? Promise.reject(e12) : e12.text());
      })(a10, t11.url);
      return { ...((e11) => {
        let t12 = e11.split(`
`).filter((e12) => e12.startsWith("#EXT-X-SESSION-DATA"));
        if (!t12.length) return {};
        let a11 = {};
        for (let e12 of t12) {
          let t13 = Object.fromEntries([...e12.matchAll(aO)].map(([, e13, t14]) => [e13, t14])), i11 = t13["DATA-ID"];
          i11 && (a11[i11] = { ...t13 });
        }
        return { sessionData: a11 };
      })(a10), ...((e11) => {
        var t12, a11, i11;
        let r10 = e11.split(`
`), n10 = null == (a11 = (null != (t12 = r10.find((e12) => e12.startsWith("#EXT-X-PLAYLIST-TYPE"))) ? t12 : "").split(":")[1]) ? void 0 : a11.trim(), s10 = t4(n10), o10 = t5(n10), l10;
        if (s10 === tG) {
          let e12 = r10.find((e13) => e13.startsWith("#EXT-X-PART-INF"));
          if (e12) l10 = 2 * e12.split(":")[1].split("=")[1];
          else {
            let e13 = r10.find((e14) => e14.startsWith("#EXT-X-TARGETDURATION")), t13 = null == (i11 = null == e13 ? void 0 : e13.split(":")) ? void 0 : i11[1];
            l10 = (null != t13 ? t13 : 6) * 3;
          }
        }
        return { streamType: s10, targetLiveWindow: o10, liveEdgeStartOffset: l10 };
      })(i10) };
    }
    return console.error(`Media type ${t10} is an unrecognized or unsupported type for src ${e10}.`), { streamType: void 0, targetLiveWindow: void 0, liveEdgeStartOffset: void 0, sessionData: void 0 };
  }, aU = async (e10, t10, a10 = t3({ src: e10 })) => {
    var i10, r10, n10, s10;
    let { streamType: o10, targetLiveWindow: l10, liveEdgeStartOffset: d10, sessionData: u10 } = await aN(e10, a10), c10 = null == u10 ? void 0 : u10["com.apple.hls.chapters"];
    (null != c10 && c10.URI || null != c10 && c10.VALUE.toLocaleLowerCase().startsWith("http")) && aB(null != (i10 = c10.URI) ? i10 : c10.VALUE, t10), (null != (r10 = aq.get(t10)) ? r10 : {}).liveEdgeStartOffset = d10, (null != (n10 = aq.get(t10)) ? n10 : {}).targetLiveWindow = l10, t10.dispatchEvent(new CustomEvent("targetlivewindowchange", { composed: true, bubbles: true })), (null != (s10 = aq.get(t10)) ? s10 : {}).streamType = o10, t10.dispatchEvent(new CustomEvent("streamtypechange", { composed: true, bubbles: true }));
  }, aB = async (e10, t10) => {
    var a10, i10;
    try {
      let r10 = await fetch(e10);
      if (!r10.ok) throw Error(`Failed to fetch Mux metadata: ${r10.status} ${r10.statusText}`);
      let n10 = await r10.json(), s10 = {};
      if (!(null != (a10 = null == n10 ? void 0 : n10[0]) && a10.metadata)) return;
      for (let e11 of n10[0].metadata) e11.key && e11.value && (s10[e11.key] = e11.value);
      (null != (i10 = aq.get(t10)) ? i10 : {}).metadata = s10;
      let o10 = new CustomEvent("muxmetadata");
      t10.dispatchEvent(o10);
    } catch (e11) {
      console.error(e11);
    }
  }, aH = null != (aI = null == (aS = null == globalThis ? void 0 : globalThis.navigator) ? void 0 : aS.userAgent) ? aI : "", aW = null != (aL = null == (aC = null == (aR = null == globalThis ? void 0 : globalThis.navigator) ? void 0 : aR.userAgentData) ? void 0 : aC.platform) ? aL : "", a$ = aH.toLowerCase().includes("android") || ["x11", "android"].some((e10) => aW.toLowerCase().includes(e10)), aq = /* @__PURE__ */ new WeakMap(), aV = "mux.com", aK = null == (aD = tW.isSupported) ? void 0 : aD.call(tW), aF = () => {
    if ("u" > typeof window) return tN.utils.now();
  }, aj = tN.utils.generateUUID, aG = ({ playbackId: e10, customDomain: t10 = aV, maxResolution: a10, minResolution: i10, renditionOrder: r10, programStartTime: n10, programEndTime: s10, assetStartTime: o10, assetEndTime: l10, playbackToken: d10, tokens: { playback: u10 = d10 } = {}, extraSourceParams: c10 = {} } = {}) => {
    if (!e10) return;
    let [h10, m10 = ""] = t2(e10), p10 = new URL(`https://stream.${t10}/${h10}.m3u8${m10}`);
    return u10 || p10.searchParams.has("token") ? (p10.searchParams.forEach((e11, t11) => {
      "token" != t11 && p10.searchParams.delete(t11);
    }), u10 && p10.searchParams.set("token", u10)) : (a10 && p10.searchParams.set("max_resolution", a10), i10 && (p10.searchParams.set("min_resolution", i10), a10 && +a10.slice(0, -1) < +i10.slice(0, -1) && console.error("minResolution must be <= maxResolution", "minResolution", i10, "maxResolution", a10)), r10 && p10.searchParams.set("rendition_order", r10), n10 && p10.searchParams.set("program_start_time", `${n10}`), s10 && p10.searchParams.set("program_end_time", `${s10}`), o10 && p10.searchParams.set("asset_start_time", `${o10}`), l10 && p10.searchParams.set("asset_end_time", `${l10}`), Object.entries(c10).forEach(([e11, t11]) => {
      null != t11 && p10.searchParams.set(e11, t11);
    })), p10.toString();
  }, aY = (e10) => {
    if (!e10) return;
    let [t10] = e10.split("?");
    return t10 || void 0;
  }, aQ = (e10) => {
    if (!e10 || !e10.startsWith("https://stream.")) return;
    let [t10] = new URL(e10).pathname.slice(1).split(/\.m3u8|\//);
    return t10 || void 0;
  }, az = (e10) => {
    var t10;
    return null == (t10 = aq.get(e10)) ? void 0 : t10.error;
  }, aZ = (e10) => {
    var t10, a10;
    return null != (a10 = null == (t10 = aq.get(e10)) ? void 0 : t10.streamType) ? a10 : tY;
  }, aX = (e10) => {
    var t10, a10;
    return null != (a10 = null == (t10 = aq.get(e10)) ? void 0 : t10.seekable) ? a10 : e10.seekable;
  }, aJ = 0.034, a0 = (e10, t10, a10 = aJ) => e10 > t10 || ((e11, t11, a11 = aJ) => Math.abs(e11 - t11) <= a11)(e10, t10, a10), a1 = (e10, t10) => {
    var a10, i10, r10;
    if (!t10 || !e10.buffered.length) return;
    if (e10.readyState > 2) return false;
    let n10 = t10.currentLevel >= 0 ? null == (i10 = null == (a10 = t10.levels) ? void 0 : a10[t10.currentLevel]) ? void 0 : i10.details : null == (r10 = t10.levels.find((e11) => !!e11.details)) ? void 0 : r10.details;
    if (!n10 || n10.live) return;
    let { fragments: s10 } = n10;
    if (!(null != s10 && s10.length)) return;
    if (e10.currentTime < e10.duration - (n10.targetduration + 0.5)) return false;
    let o10 = s10[s10.length - 1];
    if (e10.currentTime <= o10.start) return false;
    let l10 = o10.start + o10.duration / 2, d10 = e10.buffered.start(e10.buffered.length - 1), u10 = e10.buffered.end(e10.buffered.length - 1);
    return l10 > d10 && l10 < u10;
  }, a2 = (e10, t10) => e10.ended || e10.loop ? e10.ended : !!(t10 && a1(e10, t10)) || ((e11, t11 = aJ) => e11.paused && a0(e11.currentTime, e11.duration, t11))(e10), a3 = (e10, t10, a10) => {
    var i10, r10, n10;
    a4(t10, a10, e10);
    let { metadata: s10 = {} } = e10, { view_session_id: o10 = aj() } = s10, l10 = null != (i10 = null == e10 ? void 0 : e10.metadata) && i10.video_id ? e10.metadata.video_id : ii(e10) && null != (n10 = null != (r10 = aY(e10.playbackId)) ? r10 : aQ(e10.src)) ? n10 : e10.src;
    s10.view_session_id = o10, s10.video_id = l10, e10.metadata = s10, e10.drmTypeCb = (e11) => {
      var a11;
      null == (a11 = t10.mux) || a11.emit("hb", { view_drm_type: e11 });
    }, e10.fallbackToWebkitFairplay = async () => {
      var a11;
      let i11 = !t10.paused, r11 = t10.currentTime;
      e10.useWebkitFairplay = true;
      let n11 = e10.muxDataKeepSession;
      e10.muxDataKeepSession = true;
      let s11 = null == (a11 = aq.get(t10)) ? void 0 : a11.coreReference;
      a3(e10, t10, s11), e10.muxDataKeepSession = n11, e10.useWebkitFairplay = false, i11 && await t10.play().then(() => {
        t10.currentTime = r11;
      }).catch(() => {
      }), t10.currentTime = r11;
    }, aq.set(t10, { retryCount: 0 });
    let d10 = a9(e10, t10), u10 = (({ preload: e11, src: t11 }, a11, i11) => {
      let r11 = (e12) => {
        null != e12 && ["", "none", "metadata", "auto"].includes(e12) ? a11.setAttribute("preload", e12) : a11.removeAttribute("preload");
      };
      if (!i11) return r11(e11), r11;
      let n11 = false, s11 = false, o11 = i11.config.maxBufferLength, l11 = i11.config.maxBufferSize, d11 = (e12) => {
        r11(e12);
        let t12 = null != e12 ? e12 : a11.preload;
        s11 || "none" === t12 || ("metadata" === t12 ? (i11.config.maxBufferLength = 1, i11.config.maxBufferSize = 1) : (i11.config.maxBufferLength = o11, i11.config.maxBufferSize = l11), u11());
      }, u11 = () => {
        !n11 && t11 && (n11 = true, i11.loadSource(t11));
      };
      return t1(a11, "play", () => {
        s11 = true, i11.config.maxBufferLength = o11, i11.config.maxBufferSize = l11, u11();
      }, { once: true }), d11(e11), d11;
    })(e10, t10, d10);
    null != e10 && e10.muxDataKeepSession && null != t10 && t10.mux && !t10.mux.deleted ? d10 && t10.mux.addHLSJS({ hlsjs: d10, Hls: d10 ? tW : void 0 }) : is(e10, t10, d10), io(e10, t10, d10), ab(t10), aw(t10);
    let c10 = ((e11, t11, a11) => {
      let { autoplay: i11 } = e11, r11 = false, n11 = false, s11 = an(i11) ? i11 : !!i11, o11 = () => {
        r11 || t1(t11, "playing", () => {
          r11 = true;
        }, { once: true });
      };
      if (o11(), t1(t11, "loadstart", () => {
        r11 = false, o11(), as(t11, s11);
      }, { once: true }), t1(t11, "loadstart", () => {
        a11 || (n11 = e11.streamType && e11.streamType !== tY ? e11.streamType === tG : !Number.isFinite(t11.duration)), as(t11, s11);
      }, { once: true }), a11 && a11.once(tW.Events.LEVEL_LOADED, (t12, a12) => {
        var i12;
        n11 = e11.streamType && e11.streamType !== tY ? e11.streamType === tG : null != (i12 = a12.details.live) && i12;
      }), !s11) {
        let i12 = () => {
          !n11 || Number.isFinite(e11.startTime) || (null != a11 && a11.liveSyncPosition ? t11.currentTime = a11.liveSyncPosition : Number.isFinite(t11.seekable.end(0)) && (t11.currentTime = t11.seekable.end(0)));
        };
        a11 && t1(t11, "play", () => {
          "metadata" === t11.preload ? a11.once(tW.Events.LEVEL_UPDATED, i12) : i12();
        }, { once: true });
      }
      return (e12) => {
        r11 || as(t11, s11 = an(e12) ? e12 : !!e12);
      };
    })(e10, t10, d10);
    ((e11, t11, a11) => {
      let { minPreloadSegments: i11 } = e11;
      if (null == i11 || i11 <= 0 || !a11) return;
      let r11 = 0, n11 = false, s11 = t11.playbackRate || 1, o11 = () => {
        0 !== t11.playbackRate && (s11 = t11.playbackRate, t11.playbackRate = 0);
      };
      t11.playbackRate = 0, t1(t11, "ratechange", o11);
      let l11 = (e12, { frag: a12 }) => {
        n11 || "main" !== a12.type || ++r11 >= i11 && (n11 = true, t11.removeEventListener("ratechange", o11), t11.playbackRate = s11);
      };
      a11.on(tW.Events.FRAG_BUFFERED, l11), t11.addEventListener("teardown", () => {
        n11 || (n11 = true, a11.off(tW.Events.FRAG_BUFFERED, l11), t11.playbackRate = s11);
      }, { once: true });
    })(e10, t10, d10), ((e11, t11) => {
      let { initialEstimateSegments: a11 } = e11;
      if (null == a11 || a11 <= 0 || !t11) return;
      let i11 = 0;
      t11.on(tW.Events.FRAG_BUFFERED, (e12, { frag: r11 }) => {
        "main" === r11.type && ++i11 < a11 && t11.abrController.resetEstimator(t11.config.abrEwmaDefaultEstimate);
      });
    })(e10, d10);
    let h10 = { engine: d10, setAutoplay: c10, setPreload: u10 }, m10 = aq.get(t10);
    return m10 && (m10.coreReference = h10), h10;
  }, a4 = (e10, t10, a10) => {
    let i10 = null == t10 ? void 0 : t10.engine;
    null != e10 && e10.mux && !e10.mux.deleted && (null != a10 && a10.muxDataKeepSession ? i10 && e10.mux.removeHLSJS() : (e10.mux.destroy(), delete e10.mux)), i10 && (i10.detachMedia(), i10.destroy()), e10 && (e10.hasAttribute("src") && (e10.removeAttribute("src"), e10.load()), e10.removeEventListener("error", id), e10.removeEventListener("error", ic), e10.removeEventListener("durationchange", il), aq.delete(e10), e10.dispatchEvent(new Event("teardown")));
  };
  function a5(e10, t10) {
    var a10;
    let i10 = t3(e10);
    if (i10 !== tX.M3U8) return true;
    let r10 = !i10 || null == (a10 = t10.canPlayType(i10)) || a10, { preferPlayback: n10 } = e10, s10 = aK && ("mse" === n10 || a$ || !(/^((?!chrome|android).)*safari/i.test(aH) && t10.canPlayType("application/vnd.apple.mpegurl")));
    return r10 && (n10 === tQ || !s10);
  }
  var a9 = (e10, t10) => {
    let { debug: a10, streamType: i10, startTime: r10 = -1, metadata: n10, preferCmcd: s10, _hlsConfig: o10 = {}, maxAutoResolution: l10, initialBandwidthEstimateKbps: d10 } = e10, u10 = t3(e10) === tX.M3U8, c10 = a5(e10, t10);
    if (u10 && !c10 && aK) {
      let u11 = { backBufferLength: 30, renderTextTracksNatively: false, liveDurationInfinity: true, capLevelOnFPSDrop: true, ...null != d10 ? { abrEwmaDefaultEstimate: 1e3 * d10 } : {} }, c11 = a8(i10), h10 = a6(e10), m10 = [tz.QUERY, tz.HEADER].includes(s10) ? { useHeaders: s10 === tz.HEADER, sessionId: null == n10 ? void 0 : n10.view_session_id, contentId: null == n10 ? void 0 : n10.video_id } : void 0, p10 = ir(e10, o10), v10 = new tW({ debug: a10, startPosition: r10, cmcd: m10, xhrSetup: (e11, t11) => {
        var a11, i11;
        if (s10 && s10 !== tz.QUERY) return;
        let r11 = t6(t11);
        if (!r11.searchParams.has("CMCD")) return;
        let n11 = (null != (i11 = null == (a11 = r11.searchParams.get("CMCD")) ? void 0 : a11.split(",")) ? i11 : []).filter((e12) => e12.startsWith("sid") || e12.startsWith("cid")).join(",");
        r11.searchParams.set("CMCD", n11), e11.open("GET", r11);
      }, ...u11, ...p10, ...c11, ...h10, ...o10 });
      return p10.capLevelController === aM && void 0 !== l10 && aM.setMaxAutoResolution(v10, l10), v10.on(tW.Events.MANIFEST_PARSED, async function(e11, a11) {
        var i11, r11;
        let n11 = null == (i11 = a11.sessionData) ? void 0 : i11["com.apple.hls.chapters"];
        (null != n11 && n11.URI || null != n11 && n11.VALUE.toLocaleLowerCase().startsWith("http")) && aB(null != (r11 = null == n11 ? void 0 : n11.URI) ? r11 : null == n11 ? void 0 : n11.VALUE, t10);
      }), v10;
    }
  }, a8 = (e10) => e10 === tG ? { backBufferLength: 8 } : {}, a6 = (e10) => {
    let { tokens: { drm: t10 } = {}, playbackId: a10, drmTypeCb: i10 } = e10, r10 = aY(a10);
    return t10 && r10 ? { emeEnabled: true, drmSystems: { "com.apple.fps": { licenseUrl: it(e10, "fairplay"), serverCertificateUrl: ia(e10, "fairplay") }, "com.widevine.alpha": { licenseUrl: it(e10, "widevine") }, "com.microsoft.playready": { licenseUrl: it(e10, "playready") } }, requestMediaKeySystemAccessFunc: (e11, t11) => ("com.widevine.alpha" === e11 && (t11 = [...t11.map((e12) => {
      var t12;
      let a11 = null == (t12 = e12.videoCapabilities) ? void 0 : t12.map((e13) => ({ ...e13, robustness: "HW_SECURE_ALL" }));
      return { ...e12, videoCapabilities: a11 };
    }), ...t11]), navigator.requestMediaKeySystemAccess(e11, t11).then((t12) => {
      let a11 = e11.includes("fps") ? aP : e11.includes("playready") ? "playready" : e11.includes("widevine") ? "widevine" : void 0;
      return null == i10 || i10(a11), t12;
    })) } : {};
  }, a7 = async (e10) => {
    let t10 = await fetch(e10);
    return 200 !== t10.status ? Promise.reject(t10) : await t10.arrayBuffer();
  }, ie = async (e10, t10) => {
    let a10 = await fetch(t10, { method: "POST", headers: { "Content-type": "application/octet-stream" }, body: e10 });
    return 200 !== a10.status ? Promise.reject(a10) : new Uint8Array(await a10.arrayBuffer());
  }, it = ({ playbackId: e10, tokens: { drm: t10 } = {}, customDomain: a10 = aV }, i10) => {
    let r10 = aY(e10);
    return `https://license.${a10.toLocaleLowerCase().endsWith(aV) ? a10 : aV}/license/${i10}/${r10}?token=${t10}`;
  }, ia = ({ playbackId: e10, tokens: { drm: t10 } = {}, customDomain: a10 = aV }, i10) => {
    let r10 = aY(e10);
    return `https://license.${a10.toLocaleLowerCase().endsWith(aV) ? a10 : aV}/appcert/${i10}/${r10}?token=${t10}`;
  }, ii = ({ playbackId: e10, src: t10, customDomain: a10 }) => {
    if (e10) return true;
    if ("string" != typeof t10) return false;
    let i10 = new URL(t10, null == window ? void 0 : window.location.href).hostname.toLocaleLowerCase();
    return i10.includes(aV) || !!a10 && i10.includes(a10.toLocaleLowerCase());
  }, ir = (e10, t10) => {
    let a10 = {};
    return a10.capLevelToPlayerSize = e10.capRenditionToPlayerSize, null == a10.capLevelToPlayerSize ? (a10.capLevelController = aM, a10.capLevelToPlayerSize = true) : a10.capLevelController = tB.CapLevelController, a10;
  }, is = (e10, t10, a10) => {
    var i10;
    let { envKey: r10, disableTracking: n10, muxDataSDK: s10 = tN, muxDataSDKOptions: o10 = {} } = e10, l10 = ii(e10);
    if (!n10 && (r10 || l10)) {
      let { playerInitTime: n11, playerSoftwareName: l11, playerSoftwareVersion: d10, beaconCollectionDomain: u10, debug: c10, disableCookies: h10 } = e10, m10 = { ...e10.metadata, video_title: (null == (i10 = null == e10 ? void 0 : e10.metadata) ? void 0 : i10.video_title) || void 0 };
      s10.monitor(t10, { debug: c10, beaconCollectionDomain: u10, hlsjs: a10, Hls: a10 ? tW : void 0, automaticErrorTracking: false, errorTranslator: (t11) => "string" != typeof t11.player_error_code && ("function" == typeof e10.errorTranslator ? e10.errorTranslator(t11) : t11), disableCookies: h10, ...o10, data: { ...r10 ? { env_key: r10 } : {}, player_software_name: l11, player_software: l11, player_software_version: d10, player_init_time: n11, ...m10 } });
    }
  }, io = (e10, t10, a10) => {
    var i10, r10;
    let n10 = a5(e10, t10), { src: s10, customDomain: o10 = aV } = e10, l10 = () => {
      t10.ended || e10.disablePseudoEnded || !a2(t10, a10) || (a1(t10, a10) ? t10.currentTime = t10.buffered.end(t10.buffered.length - 1) : t10.dispatchEvent(new Event("ended")));
    }, d10, u10, c10 = () => {
      let e11 = aX(t10), a11, i11;
      e11.length > 0 && (a11 = e11.start(0), i11 = e11.end(0)), (u10 !== i11 || d10 !== a11) && t10.dispatchEvent(new CustomEvent("seekablechange", { composed: true })), d10 = a11, u10 = i11;
    };
    if (t1(t10, "durationchange", c10), t10 && n10) {
      let a11 = t3(e10);
      if ("string" == typeof s10) {
        if (s10.endsWith(".mp4") && s10.includes(o10)) {
          let e11 = aQ(s10);
          aB(new URL(`https://stream.${o10}/${e11}/metadata.json`).toString(), t10);
        }
        let n11 = () => {
          if (aZ(t10) !== tG || Number.isFinite(t10.duration)) return;
          let e11 = setInterval(c10, 1e3);
          t10.addEventListener("teardown", () => {
            clearInterval(e11);
          }, { once: true }), t1(t10, "durationchange", () => {
            Number.isFinite(t10.duration) && clearInterval(e11);
          });
        }, l11 = async () => aU(s10, t10, a11).then(n11).catch((a12) => {
          if (a12 instanceof Response) {
            let i11 = aT(a12, t$, e10);
            if (i11) return void iu(t10, i11);
          }
        });
        if ("none" === t10.preload) {
          let e11 = () => {
            l11(), t10.removeEventListener("loadedmetadata", a12);
          }, a12 = () => {
            l11(), t10.removeEventListener("play", e11);
          };
          t1(t10, "play", e11, { once: true }), t1(t10, "loadedmetadata", a12, { once: true });
        } else l11();
        null != (i10 = e10.tokens) && i10.drm ? ((e11, t11) => {
          let a12 = { mediaEl: t11, getAppCertificate: () => a7(ia(e11, "fairplay")).catch((t12) => {
            if (t12 instanceof Response) {
              let a13 = aT(t12, "drm", e11);
              return console.error("mediaError", null == a13 ? void 0 : a13.message, null == a13 ? void 0 : a13.context), a13 ? Promise.reject(a13) : Promise.reject(Error("Unexpected error in app cert request"));
            }
            return Promise.reject(t12);
          }), getLicenseKey: (t12) => ie(t12, it(e11, "fairplay")).catch((t13) => {
            if (t13 instanceof Response) {
              let a13 = aT(t13, "drm", e11);
              return console.error("mediaError", null == a13 ? void 0 : a13.message, null == a13 ? void 0 : a13.context), a13 ? Promise.reject(a13) : Promise.reject(Error("Unexpected error in license key request"));
            }
            return Promise.reject(t13);
          }), saveAndDispatchError: iu, drmTypeCb: () => {
            var t12;
            null == (t12 = e11.drmTypeCb) || t12.call(e11, aP);
          } };
          if (e11.useWebkitFairplay) (({ mediaEl: e12, getAppCertificate: t12, getLicenseKey: a13, saveAndDispatchError: i11, drmTypeCb: r11 }) => {
            if (!window.WebKitMediaKeys || !("onwebkitneedkey" in e12)) {
              console.error("No WebKitMediaKeys. FairPlay may not be supported");
              let t13 = new tV(aa("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."), tV.MEDIA_ERR_ENCRYPTED, true);
              return t13.errorCategory = "drm", t13.muxCode = 5000005, i11(e12, t13), () => {
              };
            }
            let n12 = t12(), s11 = null, o11 = (t13) => {
              (async () => {
                try {
                  var a14, r12;
                  let i12, s12, o12, u12, c11, h10, m10, p10;
                  e12.webkitKeys || l12();
                  let v10 = await n12;
                  if (null === t13.initData || null == v10) return;
                  let b10 = (a14 = t13.initData, r12 = v10, i12 = (function(e13) {
                    let t14 = new ArrayBuffer(2 * e13.length), a15 = new DataView(t14);
                    for (let t15 = 0; t15 < e13.length; t15++) a15.setUint16(2 * t15, e13.charCodeAt(t15), true);
                    return t14;
                  })(ax(a14)), s12 = new Uint8Array(a14), o12 = new Uint8Array(i12), u12 = new Uint8Array(r12), c11 = new Uint8Array(s12.byteLength + 4 + u12.byteLength + 4 + o12.byteLength), h10 = 0, m10 = (e13) => {
                    c11.set(e13, h10), h10 += e13.byteLength;
                  }, p10 = (e13) => {
                    let t14 = new DataView(c11.buffer), a15 = e13.byteLength;
                    t14.setUint32(h10, a15, true), h10 += 4, m10(e13);
                  }, m10(s12), p10(o12), p10(u12), c11);
                  d11(b10);
                } catch (t14) {
                  console.error("Could not start encrypted playback due to exception", t14), i11(e12, t14);
                }
              })();
            }, l12 = () => {
              try {
                let t13 = new WebKitMediaKeys("com.apple.fps.1_0");
                e12.webkitSetMediaKeys(t13), r11();
              } catch {
                let e13 = new tV("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.", tV.MEDIA_ERR_ENCRYPTED, true);
                throw e13.errorCategory = "drm", e13.muxCode = 5000001, e13;
              }
            }, d11 = (t13) => {
              let r12 = e12.webkitKeys.createSession("application/vnd.apple.mpegurl", t13), n13 = async (t14) => {
                try {
                  let e13 = t14.message, i12 = await a13(e13);
                  r12.update(i12);
                } catch (t15) {
                  console.error("Error on FairPlay session message", t15), i11(e12, t15);
                }
              }, o12 = (t14) => {
                let a14 = t14.target.error;
                if (!a14) return;
                console.error(`Internal Webkit Key Session Error - sysCode: ${a14.systemCode} code: ${a14.code}`);
                let r13 = new tV(aa("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."), tV.MEDIA_ERR_ENCRYPTED, true);
                r13.errorCategory = "drm", r13.muxCode = 5000005, i11(e12, r13);
              }, l13 = () => {
                r12.removeEventListener("webkitkeymessage", n13), r12.removeEventListener("webkitkeyerror", o12), e12.removeEventListener("teardown", l13), "webkitCurrentPlaybackTargetIsWireless" in e12 && e12.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged", l13), s11 = null;
                try {
                  r12.close();
                } catch {
                }
              };
              "webkitCurrentPlaybackTargetIsWireless" in e12 && e12.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", l13, { once: true }), r12.addEventListener("webkitkeymessage", n13), r12.addEventListener("webkitkeyerror", o12), e12.addEventListener("teardown", l13), s11 = l13;
            }, u11 = () => {
              e12.removeEventListener("webkitneedkey", o11), e12.removeEventListener("teardown", u11), null == s11 || s11();
              try {
                e12.webkitSetMediaKeys(null);
              } catch {
              }
            };
            return e12.addEventListener("webkitneedkey", o11), e12.addEventListener("teardown", u11, { once: true });
          })(a12);
          else {
            let t12 = (({ mediaEl: e12, getAppCertificate: t13, getLicenseKey: a13, saveAndDispatchError: i11, drmTypeCb: r11, fallbackToWebkitFairplay: n12 }) => {
              let s11 = null, o11 = async (t14) => {
                try {
                  let a14 = t14.initDataType;
                  if ("skd" !== a14) return void console.error(`Received unexpected initialization data type "${a14}"`);
                  e12.mediaKeys || await l12(a14);
                  let i12 = t14.initData;
                  if (null == i12) return void console.error(`Could not start encrypted playback due to missing initData in ${t14.type} event`);
                  await d11(a14, i12);
                } catch (t15) {
                  i11(e12, t15);
                  return;
                }
              }, l12 = async (a14) => {
                let n13 = await navigator.requestMediaKeySystemAccess("com.apple.fps", [{ initDataTypes: [a14], videoCapabilities: [{ contentType: "application/vnd.apple.mpegurl", robustness: "" }], distinctiveIdentifier: "not-allowed", persistentState: "not-allowed", sessionTypes: ["temporary"] }]).then((e13) => (r11(), e13)).catch(() => {
                  let t14 = new tV(aa("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."), tV.MEDIA_ERR_ENCRYPTED, true);
                  t14.errorCategory = "drm", t14.muxCode = 5000001, i11(e12, t14);
                });
                if (!n13) return;
                let s12 = await n13.createMediaKeys();
                try {
                  let e13 = await t13();
                  await s12.setServerCertificate(e13).catch(() => {
                    let e14 = aa("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."), t14 = new tV(e14, tV.MEDIA_ERR_ENCRYPTED, true);
                    return t14.errorCategory = "drm", t14.muxCode = 5000004, Promise.reject(t14);
                  });
                } catch (t14) {
                  i11(e12, t14);
                  return;
                }
                await e12.setMediaKeys(s12);
              }, d11 = async (t14, r12) => {
                let o12 = e12.mediaKeys.createSession(), l13 = async (t15) => {
                  let r13 = t15.message, n13 = await a13(r13);
                  try {
                    await o12.update(n13);
                  } catch {
                    let t16 = new tV(aa("Failed to update DRM license. This may be an issue with the player or your protected content."), tV.MEDIA_ERR_ENCRYPTED, true);
                    t16.errorCategory = "drm", t16.muxCode = 5000003, i11(e12, t16);
                  }
                }, d12 = () => {
                  o12.keyStatuses.forEach((t15) => {
                    let a14;
                    "internal-error" === t15 ? ((a14 = new tV(aa("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."), tV.MEDIA_ERR_ENCRYPTED, true)).errorCategory = "drm", a14.muxCode = 5000005) : ("output-restricted" === t15 || "output-downscaled" === t15) && ((a14 = new tV(aa("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."), tV.MEDIA_ERR_ENCRYPTED, false)).errorCategory = "drm", a14.muxCode = 5000006), a14 && i11(e12, a14);
                  });
                };
                o12.addEventListener("keystatuseschange", d12), o12.addEventListener("message", l13);
                let u12 = async () => {
                  o12.removeEventListener("keystatuseschange", d12), o12.removeEventListener("message", l13), "webkitCurrentPlaybackTargetIsWireless" in e12 && e12.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged", u12), e12.removeEventListener("teardown", u12), await o12.close().catch((e13) => {
                    console.warn("There was an error when closing EME session", e13);
                  }), s11 = null;
                };
                "webkitCurrentPlaybackTargetIsWireless" in e12 && e12.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", u12, { once: true }), e12.addEventListener("teardown", u12, { once: true }), s11 = u12, await o12.generateRequest(t14, r12).catch(async (t15) => {
                  if ("NotSupportedError" === t15.name && "webkitCurrentPlaybackTargetIsWireless" in e12 && e12.webkitCurrentPlaybackTargetIsWireless) console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"), null == n12 || n12();
                  else {
                    let e13 = new tV(aa("Failed to generate a DRM license request. This may be an issue with the player or your protected content."), tV.MEDIA_ERR_ENCRYPTED, true);
                    return e13.errorCategory = "drm", e13.muxCode = 5000002, console.error("Failed to generate license request", t15), Promise.reject(e13);
                  }
                });
              }, u11 = async () => {
                e12.removeEventListener("encrypted", o11), e12.removeEventListener("teardown", u11), s11 && await s11(), await e12.setMediaKeys(null).catch(() => {
                });
              };
              return e12.addEventListener("encrypted", o11), e12.addEventListener("teardown", u11, { once: true }), u11;
            })({ fallbackToWebkitFairplay: async () => {
              var a13;
              await t12(), null == (a13 = e11.fallbackToWebkitFairplay) || a13.call(e11);
            }, ...a12 });
          }
        })(e10, t10) : t1(t10, "encrypted", () => {
          let e11 = new tV(aa("Attempting to play DRM-protected content without providing a DRM token."), tV.MEDIA_ERR_ENCRYPTED, true);
          e11.errorCategory = "drm", e11.muxCode = 5000002, iu(t10, e11);
        }, { once: true }), t10.setAttribute("src", s10), e10.startTime && ((null != (r10 = aq.get(t10)) ? r10 : {}).startTime = e10.startTime, t10.addEventListener("durationchange", il, { once: true }));
      } else t10.removeAttribute("src");
      t10.addEventListener("error", id), t10.addEventListener("error", ic), t10.addEventListener("emptied", () => {
        t10.querySelectorAll("track[data-removeondestroy]").forEach((e11) => {
          e11.remove();
        });
      }, { once: true }), t1(t10, "pause", l10), t1(t10, "seeked", l10), t1(t10, "play", () => {
        t10.ended || a0(t10.currentTime, t10.duration) && (t10.currentTime = t10.seekable.length ? t10.seekable.start(0) : 0);
      });
    } else {
      let i11, r11;
      a10 && s10 ? (a10.once(tW.Events.LEVEL_LOADED, (e11, i12) => {
        ((e12, t11, a11) => {
          var i13, r12, n11, s11, o11, l11, d11, u11, c11;
          let h10, m10, p10, v10, b10, { streamType: g2, targetLiveWindow: y2, liveEdgeStartOffset: f2, lowLatency: E2 } = (m10 = t4(h10 = e12.type), p10 = t5(h10), b10 = !!(null != (c11 = e12.partList) && c11.length), m10 === tG && (v10 = b10 ? 2 * e12.partTarget : 3 * e12.targetduration), { streamType: m10, targetLiveWindow: p10, liveEdgeStartOffset: v10, lowLatency: b10 });
          if (g2 === tG) {
            E2 ? (a11.config.backBufferLength = null != (i13 = a11.userConfig.backBufferLength) ? i13 : 4, a11.config.maxFragLookUpTolerance = null != (r12 = a11.userConfig.maxFragLookUpTolerance) ? r12 : 1e-3, a11.config.abrBandWidthUpFactor = null != (n11 = a11.userConfig.abrBandWidthUpFactor) ? n11 : a11.config.abrBandWidthFactor) : a11.config.backBufferLength = null != (s11 = a11.userConfig.backBufferLength) ? s11 : 8;
            let e13 = Object.freeze({ get length() {
              return t11.seekable.length;
            }, start: (e14) => t11.seekable.start(e14), end(e14) {
              var i14;
              return e14 > this.length || e14 < 0 || Number.isFinite(t11.duration) ? t11.seekable.end(e14) : null != (i14 = a11.liveSyncPosition) ? i14 : t11.seekable.end(e14);
            } });
            (null != (o11 = aq.get(t11)) ? o11 : {}).seekable = e13;
          }
          (null != (l11 = aq.get(t11)) ? l11 : {}).liveEdgeStartOffset = f2, (null != (d11 = aq.get(t11)) ? d11 : {}).targetLiveWindow = y2, t11.dispatchEvent(new CustomEvent("targetlivewindowchange", { composed: true, bubbles: true })), (null != (u11 = aq.get(t11)) ? u11 : {}).streamType = g2, t11.dispatchEvent(new CustomEvent("streamtypechange", { composed: true, bubbles: true }));
        })(i12.details, t10, a10), c10(), aZ(t10) !== tG || Number.isFinite(t10.duration) || (a10.on(tW.Events.LEVEL_UPDATED, c10), t1(t10, "durationchange", () => {
          Number.isFinite(t10.duration) && a10.off(tW.Events.LEVELS_UPDATED, c10);
        }));
      }), a10.on(tW.Events.ERROR, (i12, r12) => {
        var n11, s11;
        let o11 = ih(r12, e10);
        if (2412e3 === o11.muxCode) {
          let e11 = null != (n11 = aq.get(t10)) ? n11 : {}, i13 = null != (s11 = e11.retryCount) ? s11 : 0;
          if (i13 < 6) {
            let n12 = 0 === i13 ? 5e3 : 6e4, s12 = new tV(`Retrying in ${n12 / 1e3} seconds...`, o11.code, o11.fatal);
            Object.assign(s12, o11), iu(t10, s12);
            let l11 = setTimeout(() => {
              e11.retryCount = i13 + 1, "manifestLoadError" === r12.details && r12.url && a10.loadSource(r12.url);
            }, n12);
            t10.addEventListener("teardown", () => clearTimeout(l11), { once: true });
            return;
          }
          {
            e11.retryCount = 0;
            let a11 = new tV('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>', o11.code, o11.fatal);
            Object.assign(a11, o11), iu(t10, a11);
            return;
          }
        }
        iu(t10, o11);
      }), a10.on(tW.Events.MANIFEST_LOADED, () => {
        let e11 = aq.get(t10);
        e11 && e11.error && (e11.error = null, e11.retryCount = 0, t10.dispatchEvent(new Event("emptied")), t10.dispatchEvent(new Event("loadstart")));
      }), t10.addEventListener("error", ic), t1(t10, "waiting", l10), (function(e11, t11) {
        var a11;
        if (!("videoTracks" in e11)) return;
        let i12 = /* @__PURE__ */ new WeakMap();
        t11.on(tW.Events.MANIFEST_PARSED, function(t12, a12) {
          o11();
          let r13 = e11.addVideoTrack("main");
          for (let [e12, t13] of (r13.selected = true, a12.levels.entries())) {
            let a13 = r13.addRendition(t13.url[0], t13.width, t13.height, t13.videoCodec, t13.bitrate);
            i12.set(t13, `${e12}`), a13.id = `${e12}`;
          }
        }), t11.on(tW.Events.AUDIO_TRACKS_UPDATED, function(t12, a12) {
          for (let t13 of (s11(), a12.audioTracks)) {
            let a13 = t13.default ? "main" : "alternative", i13 = e11.addAudioTrack(a13, t13.name, t13.lang);
            i13.id = `${t13.id}`, t13.default && (i13.enabled = true);
          }
        });
        let r12 = () => {
          var a12;
          let i13 = +(null == (a12 = [...e11.audioTracks].find((e12) => e12.enabled)) ? void 0 : a12.id), r13 = t11.audioTracks.map((e12) => e12.id);
          i13 != t11.audioTrack && r13.includes(i13) && (t11.audioTrack = i13);
        };
        e11.audioTracks.addEventListener("change", r12), t11.on(tW.Events.LEVELS_UPDATED, function(t12, a12) {
          var r13;
          let n12 = e11.videoTracks[null != (r13 = e11.videoTracks.selectedIndex) ? r13 : 0];
          if (!n12) return;
          let s12 = a12.levels.map((e12) => i12.get(e12));
          for (let t13 of e11.videoRenditions) t13.id && !s12.includes(t13.id) && n12.removeRendition(t13);
        });
        let n11 = (e12) => {
          let a12 = e12.target.selectedIndex;
          a12 != t11.nextLevel && (t11.nextLevel = a12);
        };
        null == (a11 = e11.videoRenditions) || a11.addEventListener("change", n11);
        let s11 = () => {
          for (let t12 of e11.audioTracks) e11.removeAudioTrack(t12);
        }, o11 = () => {
          (() => {
            for (let t12 of e11.videoTracks) e11.removeVideoTrack(t12);
          })(), s11();
        };
        t11.once(tW.Events.DESTROYING, () => {
          var t12, a12;
          o11(), null == (t12 = e11.audioTracks) || t12.removeEventListener("change", r12), null == (a12 = e11.videoRenditions) || a12.removeEventListener("change", n11);
        });
      })(e10, a10), a10.on(tW.Events.NON_NATIVE_TEXT_TRACKS_FOUND, (e11, { tracks: i12 }) => {
        i12.forEach((e12) => {
          var i13, r12;
          let n11 = null != (i13 = e12.subtitleTrack) ? i13 : e12.closedCaptions, s11 = a10.subtitleTracks.findIndex(({ lang: t11, name: a11, type: i14 }) => t11 == (null == n11 ? void 0 : n11.lang) && a11 === e12.label && i14.toLowerCase() === e12.kind), o11 = (null != (r12 = e12._id) ? r12 : e12.default) ? "default" : `${e12.kind}${s11}`;
          al(t10, e12.kind, e12.label, null == n11 ? void 0 : n11.lang, o11, e12.default);
        });
      }), i11 = () => {
        if (!a10.subtitleTracks.length) return;
        let e11 = Array.from(t10.textTracks).find((e12) => e12.id && "showing" === e12.mode && ["subtitles", "captions"].includes(e12.kind));
        if (!e11) return;
        let i12 = a10.subtitleTracks[a10.subtitleTrack], r12 = i12 ? i12.default ? "default" : `${a10.subtitleTracks[a10.subtitleTrack].type.toLowerCase()}${a10.subtitleTrack}` : void 0;
        if (a10.subtitleTrack < 0 || (null == e11 ? void 0 : e11.id) !== r12) {
          let t11 = a10.subtitleTracks.findIndex(({ lang: t12, name: a11, type: i13, default: r13 }) => "default" === e11.id && r13 || t12 == e11.language && a11 === e11.label && i13.toLowerCase() === e11.kind);
          a10.subtitleTrack = t11;
        }
        (null == e11 ? void 0 : e11.id) === r12 && e11.cues && Array.from(e11.cues).forEach((t11) => {
          e11.addCue(t11);
        });
      }, t10.textTracks.addEventListener("change", i11), a10.on(tW.Events.CUES_PARSED, (e11, { track: a11, cues: i12 }) => {
        let r12 = t10.textTracks.getTrackById(a11);
        if (!r12) return;
        let n11 = "disabled" === r12.mode;
        n11 && (r12.mode = "hidden"), i12.forEach((e12) => {
          var t11;
          null != (t11 = r12.cues) && t11.getCueById(e12.id) || r12.addCue(e12);
        }), n11 && (r12.mode = "disabled");
      }), a10.once(tW.Events.DESTROYING, () => {
        t10.textTracks.removeEventListener("change", i11), t10.querySelectorAll("track[data-removeondestroy]").forEach((e11) => {
          e11.remove();
        });
      }), r11 = () => {
        Array.from(t10.textTracks).forEach((e11) => {
          var a11, i12;
          if (!["subtitles", "caption"].includes(e11.kind) && ("thumbnails" === e11.label || "chapters" === e11.kind)) {
            if (!(null != (a11 = e11.cues) && a11.length)) {
              let a12 = "track";
              e11.kind && (a12 += `[kind="${e11.kind}"]`), e11.label && (a12 += `[label="${e11.label}"]`);
              let r12 = t10.querySelector(a12), n11 = null != (i12 = null == r12 ? void 0 : r12.getAttribute("src")) ? i12 : "";
              null == r12 || r12.removeAttribute("src"), setTimeout(() => {
                null == r12 || r12.setAttribute("src", n11);
              }, 0);
            }
            "hidden" !== e11.mode && (e11.mode = "hidden");
          }
        });
      }, a10.once(tW.Events.MANIFEST_LOADED, r11), a10.once(tW.Events.MEDIA_ATTACHED, r11), a10.attachMedia(t10)) : console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.");
    }
  };
  function il(e10) {
    var t10;
    let a10 = e10.target, i10 = null == (t10 = aq.get(a10)) ? void 0 : t10.startTime;
    if (i10 && (function(e11, t11, a11) {
      t11 && a11 > t11 && (a11 = t11);
      for (let t12 = 0; t12 < e11.length; t12++) if (e11.start(t12) <= a11 && e11.end(t12) >= a11) return true;
      return false;
    })(a10.seekable, a10.duration, i10)) {
      let e11 = "auto" === a10.preload;
      e11 && (a10.preload = "none"), a10.currentTime = i10, e11 && (a10.preload = "auto");
    }
  }
  async function id(e10) {
    if (!e10.isTrusted) return;
    e10.stopImmediatePropagation();
    let t10 = e10.target;
    if (!(null != t10 && t10.error)) return;
    let { message: a10, code: i10 } = t10.error, r10 = new tV(a10, i10);
    if (t10.src && i10 === tV.MEDIA_ERR_SRC_NOT_SUPPORTED && t10.readyState === HTMLMediaElement.HAVE_NOTHING) return void setTimeout(() => {
      var e11;
      let a11 = null != (e11 = az(t10)) ? e11 : t10.error;
      (null == a11 ? void 0 : a11.code) === tV.MEDIA_ERR_SRC_NOT_SUPPORTED && iu(t10, r10);
    }, 500);
    if (t10.src && (i10 !== tV.MEDIA_ERR_DECODE || void 0 !== i10)) try {
      let { status: e11 } = await fetch(t10.src);
      r10.data = { response: { code: e11 } };
    } catch {
    }
    iu(t10, r10);
  }
  function iu(e10, t10) {
    var a10;
    t10.fatal && ((null != (a10 = aq.get(e10)) ? a10 : {}).error = t10, e10.dispatchEvent(new CustomEvent("error", { detail: t10 })));
  }
  function ic(e10) {
    var t10, a10;
    if (!(e10 instanceof CustomEvent) || !(e10.detail instanceof tV)) return;
    let i10 = e10.target, r10 = e10.detail;
    r10 && r10.fatal && ((null != (t10 = aq.get(i10)) ? t10 : {}).error = r10, null == (a10 = i10.mux) || a10.emit("error", { player_error_code: r10.code, player_error_message: r10.message, player_error_context: r10.context }));
  }
  var ih = (e10, t10) => {
    var a10, i10, r10;
    e10.fatal ? console.error("getErrorFromHlsErrorData()", e10) : t10.debug && console.warn("getErrorFromHlsErrorData() (non-fatal)", e10);
    let n10 = { [tW.ErrorTypes.NETWORK_ERROR]: tV.MEDIA_ERR_NETWORK, [tW.ErrorTypes.MEDIA_ERROR]: tV.MEDIA_ERR_DECODE, [tW.ErrorTypes.KEY_SYSTEM_ERROR]: tV.MEDIA_ERR_ENCRYPTED }, s10, o10 = [tW.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED, tW.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e10.details) ? tV.MEDIA_ERR_NETWORK : n10[e10.type];
    if (o10 === tV.MEDIA_ERR_NETWORK && e10.response) {
      let r11 = null != (a10 = e10.type === tW.ErrorTypes.KEY_SYSTEM_ERROR ? "drm" : e10.type === tW.ErrorTypes.NETWORK_ERROR ? t$ : void 0) ? a10 : t$;
      s10 = null != (i10 = aT(e10.response, r11, t10, e10.fatal)) ? i10 : new tV("", o10, e10.fatal);
    } else o10 === tV.MEDIA_ERR_ENCRYPTED ? e10.details === tW.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE ? ((s10 = new tV(aa("Attempting to play DRM-protected content without providing a DRM token."), tV.MEDIA_ERR_ENCRYPTED, e10.fatal)).errorCategory = "drm", s10.muxCode = 5000002) : e10.details === tW.ErrorDetails.KEY_SYSTEM_NO_ACCESS ? ((s10 = new tV(aa("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."), tV.MEDIA_ERR_ENCRYPTED, e10.fatal)).errorCategory = "drm", s10.muxCode = 5000001) : e10.details === tW.ErrorDetails.KEY_SYSTEM_NO_SESSION ? ((s10 = new tV(aa("Failed to generate a DRM license request. This may be an issue with the player or your protected content."), tV.MEDIA_ERR_ENCRYPTED, true)).errorCategory = "drm", s10.muxCode = 5000002) : e10.details === tW.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED ? ((s10 = new tV(aa("Failed to update DRM license. This may be an issue with the player or your protected content."), tV.MEDIA_ERR_ENCRYPTED, e10.fatal)).errorCategory = "drm", s10.muxCode = 5000003) : e10.details === tW.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED ? ((s10 = new tV(aa("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."), tV.MEDIA_ERR_ENCRYPTED, e10.fatal)).errorCategory = "drm", s10.muxCode = 5000004) : e10.details === tW.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR ? ((s10 = new tV(aa("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."), tV.MEDIA_ERR_ENCRYPTED, e10.fatal)).errorCategory = "drm", s10.muxCode = 5000005) : e10.details === tW.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED ? ((s10 = new tV(aa("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."), tV.MEDIA_ERR_ENCRYPTED, false)).errorCategory = "drm", s10.muxCode = 5000006) : ((s10 = new tV(e10.error.message, tV.MEDIA_ERR_ENCRYPTED, e10.fatal)).errorCategory = "drm", s10.muxCode = 5e6) : s10 = new tV("", o10, e10.fatal);
    return s10.context || (s10.context = `${e10.url ? `url: ${e10.url}
` : ""}${e10.response && (e10.response.code || e10.response.text) ? `response: ${e10.response.code}, ${e10.response.text}
` : ""}${e10.reason ? `failure reason: ${e10.reason}
` : ""}${e10.level ? `level: ${e10.level}
` : ""}${e10.parent ? `parent stream controller: ${e10.parent}
` : ""}${e10.buffer ? `buffer length: ${e10.buffer}
` : ""}${e10.error ? `error: ${e10.error}
` : ""}${e10.event ? `event: ${e10.event}
` : ""}${e10.err ? `error message: ${null == (r10 = e10.err) ? void 0 : r10.message}
` : ""}`), s10.data = e10, s10;
  }, im = e.i(116699);
  try {
    var ip = "u" > typeof window ? window : e.g;
    ip._sentryModuleMetadata = ip._sentryModuleMetadata || {}, ip._sentryModuleMetadata[new ip.Error().stack] = Object.assign({}, ip._sentryModuleMetadata[new ip.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var iv, ib, ig, iy, iE, i_, iw, iT, iA, ik, iM, iS, iI, iR, iC = (e10) => {
    throw TypeError(e10);
  }, iL = (e10, t10, a10) => t10.has(e10) || iC("Cannot " + a10), iD = (e10, t10, a10) => (iL(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), ix = (e10, t10, a10) => t10.has(e10) ? iC("Cannot add the same private member more than once") : t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10), iP = (e10, t10, a10, i10) => (iL(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10), iO = (e10, t10, a10) => (iL(e10, t10, "access private method"), a10), iN = (() => {
    try {
      return "0.31.0";
    } catch {
    }
    return "UNKNOWN";
  })(), iU = `
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`, iB = { BEACON_COLLECTION_DOMAIN: "beacon-collection-domain", CUSTOM_DOMAIN: "custom-domain", DEBUG: "debug", DISABLE_TRACKING: "disable-tracking", DISABLE_COOKIES: "disable-cookies", DISABLE_PSEUDO_ENDED: "disable-pseudo-ended", DRM_TOKEN: "drm-token", PLAYBACK_TOKEN: "playback-token", ENV_KEY: "env-key", MAX_RESOLUTION: "max-resolution", MIN_RESOLUTION: "min-resolution", MAX_AUTO_RESOLUTION: "max-auto-resolution", RENDITION_ORDER: "rendition-order", PROGRAM_START_TIME: "program-start-time", PROGRAM_END_TIME: "program-end-time", ASSET_START_TIME: "asset-start-time", ASSET_END_TIME: "asset-end-time", METADATA_URL: "metadata-url", PLAYBACK_ID: "playback-id", PLAYER_SOFTWARE_NAME: "player-software-name", PLAYER_SOFTWARE_VERSION: "player-software-version", PLAYER_INIT_TIME: "player-init-time", PREFER_CMCD: "prefer-cmcd", PREFER_PLAYBACK: "prefer-playback", START_TIME: "start-time", STREAM_TYPE: "stream-type", TARGET_LIVE_WINDOW: "target-live-window", LIVE_EDGE_OFFSET: "live-edge-offset", TYPE: "type", LOGO: "logo", CAP_RENDITION_TO_PLAYER_SIZE: "cap-rendition-to-player-size", INITIAL_BANDWIDTH_ESTIMATE_KBPS: "initial-bandwidth-estimate-kbps", INITIAL_ESTIMATE_SEGMENTS: "initial-estimate-segments", MIN_PRELOAD_SEGMENTS: "min-preload-segments" }, iH = Object.values(iB), iW = "mux-video", i$ = class extends im.CustomVideoElement {
    constructor() {
      super(), ix(this, iM), ix(this, iv), ix(this, ib), ix(this, ig, {}), ix(this, iy, {}), ix(this, iE), ix(this, i_), ix(this, iw), ix(this, iT), ix(this, iA, ""), ix(this, ik, (e10) => {
        var t10, a10, i10;
        let r10 = (a10 = this.nativeEl, null == (i10 = aq.get(a10)) ? void 0 : i10.metadata), n10 = null != (t10 = this.metadata) ? t10 : {};
        this.metadata = { ...r10, ...n10 }, (null == r10 ? void 0 : r10["com.mux.video.branding"]) === "mux-free-plan" && (iP(this, iA, "default"), this.updateLogo());
      }), ix(this, iI), iP(this, ib, aF());
    }
    static get NAME() {
      return iW;
    }
    static get VERSION() {
      return iN;
    }
    static get observedAttributes() {
      var e10;
      return [...iH, ...null != (e10 = im.CustomVideoElement.observedAttributes) ? e10 : []];
    }
    static getLogoHTML(e10) {
      return e10 && "false" !== e10 ? "default" === e10 ? iU : `<img part="logo" src="${e10}" />` : "";
    }
    static getTemplateHTML(e10 = {}) {
      var t10;
      return `
      ${im.CustomVideoElement.getTemplateHTML(e10)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null != (t10 = e10[iB.LOGO]) ? t10 : "")}
      </slot>
    `;
    }
    get preferCmcd() {
      var e10;
      return null != (e10 = this.getAttribute(iB.PREFER_CMCD)) ? e10 : void 0;
    }
    set preferCmcd(e10) {
      e10 !== this.preferCmcd && (e10 ? tZ.includes(e10) ? this.setAttribute(iB.PREFER_CMCD, e10) : console.warn(`Invalid value for preferCmcd. Must be one of ${tZ.join()}`) : this.removeAttribute(iB.PREFER_CMCD));
    }
    get playerInitTime() {
      return this.hasAttribute(iB.PLAYER_INIT_TIME) ? +this.getAttribute(iB.PLAYER_INIT_TIME) : iD(this, ib);
    }
    set playerInitTime(e10) {
      e10 != this.playerInitTime && (null == e10 ? this.removeAttribute(iB.PLAYER_INIT_TIME) : this.setAttribute(iB.PLAYER_INIT_TIME, `${+e10}`));
    }
    get playerSoftwareName() {
      var e10;
      return null != (e10 = iD(this, iw)) ? e10 : iW;
    }
    set playerSoftwareName(e10) {
      iP(this, iw, e10);
    }
    get playerSoftwareVersion() {
      var e10;
      return null != (e10 = iD(this, i_)) ? e10 : iN;
    }
    set playerSoftwareVersion(e10) {
      iP(this, i_, e10);
    }
    get _hls() {
      var e10;
      return null == (e10 = iD(this, iM, iS)) ? void 0 : e10.engine;
    }
    get mux() {
      var e10;
      return null == (e10 = this.nativeEl) ? void 0 : e10.mux;
    }
    get error() {
      var e10;
      return null != (e10 = az(this.nativeEl)) ? e10 : null;
    }
    get errorTranslator() {
      return iD(this, iT);
    }
    set errorTranslator(e10) {
      iP(this, iT, e10);
    }
    get src() {
      return this.getAttribute("src");
    }
    set src(e10) {
      e10 !== this.src && (null == e10 ? this.removeAttribute("src") : this.setAttribute("src", e10));
    }
    get type() {
      var e10;
      return null != (e10 = this.getAttribute(iB.TYPE)) ? e10 : void 0;
    }
    set type(e10) {
      e10 !== this.type && (e10 ? this.setAttribute(iB.TYPE, e10) : this.removeAttribute(iB.TYPE));
    }
    get preload() {
      let e10 = this.getAttribute("preload");
      return "" === e10 ? "auto" : ["none", "metadata", "auto"].includes(e10) ? e10 : super.preload;
    }
    set preload(e10) {
      e10 != this.getAttribute("preload") && (["", "none", "metadata", "auto"].includes(e10) ? this.setAttribute("preload", e10) : this.removeAttribute("preload"));
    }
    get debug() {
      return null != this.getAttribute(iB.DEBUG);
    }
    set debug(e10) {
      e10 !== this.debug && (e10 ? this.setAttribute(iB.DEBUG, "") : this.removeAttribute(iB.DEBUG));
    }
    get disableTracking() {
      return this.hasAttribute(iB.DISABLE_TRACKING);
    }
    set disableTracking(e10) {
      e10 !== this.disableTracking && this.toggleAttribute(iB.DISABLE_TRACKING, !!e10);
    }
    get disableCookies() {
      return this.hasAttribute(iB.DISABLE_COOKIES);
    }
    set disableCookies(e10) {
      e10 !== this.disableCookies && (e10 ? this.setAttribute(iB.DISABLE_COOKIES, "") : this.removeAttribute(iB.DISABLE_COOKIES));
    }
    get disablePseudoEnded() {
      return this.hasAttribute(iB.DISABLE_PSEUDO_ENDED);
    }
    set disablePseudoEnded(e10) {
      e10 !== this.disablePseudoEnded && (e10 ? this.setAttribute(iB.DISABLE_PSEUDO_ENDED, "") : this.removeAttribute(iB.DISABLE_PSEUDO_ENDED));
    }
    get startTime() {
      let e10 = this.getAttribute(iB.START_TIME);
      if (null == e10) return;
      let t10 = +e10;
      return Number.isNaN(t10) ? void 0 : t10;
    }
    set startTime(e10) {
      e10 !== this.startTime && (null == e10 ? this.removeAttribute(iB.START_TIME) : this.setAttribute(iB.START_TIME, `${e10}`));
    }
    get initialBandwidthEstimateKbps() {
      let e10 = this.getAttribute(iB.INITIAL_BANDWIDTH_ESTIMATE_KBPS);
      if (null == e10) return;
      let t10 = +e10;
      return Number.isNaN(t10) ? void 0 : t10;
    }
    set initialBandwidthEstimateKbps(e10) {
      e10 !== this.initialBandwidthEstimateKbps && (null == e10 ? this.removeAttribute(iB.INITIAL_BANDWIDTH_ESTIMATE_KBPS) : this.setAttribute(iB.INITIAL_BANDWIDTH_ESTIMATE_KBPS, `${e10}`));
    }
    get initialEstimateSegments() {
      let e10 = this.getAttribute(iB.INITIAL_ESTIMATE_SEGMENTS);
      if (null == e10) return;
      let t10 = +e10;
      return Number.isNaN(t10) ? void 0 : t10;
    }
    set initialEstimateSegments(e10) {
      e10 !== this.initialEstimateSegments && (null == e10 ? this.removeAttribute(iB.INITIAL_ESTIMATE_SEGMENTS) : this.setAttribute(iB.INITIAL_ESTIMATE_SEGMENTS, `${e10}`));
    }
    get minPreloadSegments() {
      let e10 = this.getAttribute(iB.MIN_PRELOAD_SEGMENTS);
      if (null == e10) return;
      let t10 = +e10;
      return Number.isNaN(t10) ? void 0 : t10;
    }
    set minPreloadSegments(e10) {
      e10 !== this.minPreloadSegments && (null == e10 ? this.removeAttribute(iB.MIN_PRELOAD_SEGMENTS) : this.setAttribute(iB.MIN_PRELOAD_SEGMENTS, `${e10}`));
    }
    get playbackId() {
      var e10;
      return this.hasAttribute(iB.PLAYBACK_ID) ? this.getAttribute(iB.PLAYBACK_ID) : null != (e10 = aQ(this.src)) ? e10 : void 0;
    }
    set playbackId(e10) {
      e10 !== this.playbackId && (e10 ? this.setAttribute(iB.PLAYBACK_ID, e10) : this.removeAttribute(iB.PLAYBACK_ID));
    }
    get maxResolution() {
      var e10;
      return null != (e10 = this.getAttribute(iB.MAX_RESOLUTION)) ? e10 : void 0;
    }
    set maxResolution(e10) {
      e10 !== this.maxResolution && (e10 ? this.setAttribute(iB.MAX_RESOLUTION, e10) : this.removeAttribute(iB.MAX_RESOLUTION));
    }
    get minResolution() {
      var e10;
      return null != (e10 = this.getAttribute(iB.MIN_RESOLUTION)) ? e10 : void 0;
    }
    set minResolution(e10) {
      e10 !== this.minResolution && (e10 ? this.setAttribute(iB.MIN_RESOLUTION, e10) : this.removeAttribute(iB.MIN_RESOLUTION));
    }
    get maxAutoResolution() {
      var e10;
      return null != (e10 = this.getAttribute(iB.MAX_AUTO_RESOLUTION)) ? e10 : void 0;
    }
    set maxAutoResolution(e10) {
      null == e10 ? this.removeAttribute(iB.MAX_AUTO_RESOLUTION) : this.setAttribute(iB.MAX_AUTO_RESOLUTION, e10);
    }
    get renditionOrder() {
      var e10;
      return null != (e10 = this.getAttribute(iB.RENDITION_ORDER)) ? e10 : void 0;
    }
    set renditionOrder(e10) {
      e10 !== this.renditionOrder && (e10 ? this.setAttribute(iB.RENDITION_ORDER, e10) : this.removeAttribute(iB.RENDITION_ORDER));
    }
    get programStartTime() {
      let e10 = this.getAttribute(iB.PROGRAM_START_TIME);
      if (null == e10) return;
      let t10 = +e10;
      return Number.isNaN(t10) ? void 0 : t10;
    }
    set programStartTime(e10) {
      null == e10 ? this.removeAttribute(iB.PROGRAM_START_TIME) : this.setAttribute(iB.PROGRAM_START_TIME, `${e10}`);
    }
    get programEndTime() {
      let e10 = this.getAttribute(iB.PROGRAM_END_TIME);
      if (null == e10) return;
      let t10 = +e10;
      return Number.isNaN(t10) ? void 0 : t10;
    }
    set programEndTime(e10) {
      null == e10 ? this.removeAttribute(iB.PROGRAM_END_TIME) : this.setAttribute(iB.PROGRAM_END_TIME, `${e10}`);
    }
    get assetStartTime() {
      let e10 = this.getAttribute(iB.ASSET_START_TIME);
      if (null == e10) return;
      let t10 = +e10;
      return Number.isNaN(t10) ? void 0 : t10;
    }
    set assetStartTime(e10) {
      null == e10 ? this.removeAttribute(iB.ASSET_START_TIME) : this.setAttribute(iB.ASSET_START_TIME, `${e10}`);
    }
    get assetEndTime() {
      let e10 = this.getAttribute(iB.ASSET_END_TIME);
      if (null == e10) return;
      let t10 = +e10;
      return Number.isNaN(t10) ? void 0 : t10;
    }
    set assetEndTime(e10) {
      null == e10 ? this.removeAttribute(iB.ASSET_END_TIME) : this.setAttribute(iB.ASSET_END_TIME, `${e10}`);
    }
    get customDomain() {
      var e10;
      return null != (e10 = this.getAttribute(iB.CUSTOM_DOMAIN)) ? e10 : void 0;
    }
    set customDomain(e10) {
      e10 !== this.customDomain && (e10 ? this.setAttribute(iB.CUSTOM_DOMAIN, e10) : this.removeAttribute(iB.CUSTOM_DOMAIN));
    }
    get capRenditionToPlayerSize() {
      var e10;
      return (null == (e10 = this._hlsConfig) ? void 0 : e10.capLevelToPlayerSize) != null ? this._hlsConfig.capLevelToPlayerSize : iD(this, iI);
    }
    set capRenditionToPlayerSize(e10) {
      iP(this, iI, e10);
    }
    get drmToken() {
      var e10;
      return null != (e10 = this.getAttribute(iB.DRM_TOKEN)) ? e10 : void 0;
    }
    set drmToken(e10) {
      e10 !== this.drmToken && (e10 ? this.setAttribute(iB.DRM_TOKEN, e10) : this.removeAttribute(iB.DRM_TOKEN));
    }
    get playbackToken() {
      var e10, t10, a10, i10;
      if (this.hasAttribute(iB.PLAYBACK_TOKEN)) return null != (e10 = this.getAttribute(iB.PLAYBACK_TOKEN)) ? e10 : void 0;
      if (this.hasAttribute(iB.PLAYBACK_ID)) {
        let [, e11] = t2(null != (t10 = this.playbackId) ? t10 : "");
        return null != (a10 = new URLSearchParams(e11).get("token")) ? a10 : void 0;
      }
      if (this.src) return null != (i10 = new URLSearchParams(this.src).get("token")) ? i10 : void 0;
    }
    set playbackToken(e10) {
      e10 !== this.playbackToken && (e10 ? this.setAttribute(iB.PLAYBACK_TOKEN, e10) : this.removeAttribute(iB.PLAYBACK_TOKEN));
    }
    get tokens() {
      let e10 = this.getAttribute(iB.PLAYBACK_TOKEN), t10 = this.getAttribute(iB.DRM_TOKEN);
      return { ...iD(this, iy), ...null != e10 ? { playback: e10 } : {}, ...null != t10 ? { drm: t10 } : {} };
    }
    set tokens(e10) {
      iP(this, iy, null != e10 ? e10 : {});
    }
    get ended() {
      return a2(this.nativeEl, this._hls);
    }
    get envKey() {
      var e10;
      return null != (e10 = this.getAttribute(iB.ENV_KEY)) ? e10 : void 0;
    }
    set envKey(e10) {
      e10 !== this.envKey && (e10 ? this.setAttribute(iB.ENV_KEY, e10) : this.removeAttribute(iB.ENV_KEY));
    }
    get beaconCollectionDomain() {
      var e10;
      return null != (e10 = this.getAttribute(iB.BEACON_COLLECTION_DOMAIN)) ? e10 : void 0;
    }
    set beaconCollectionDomain(e10) {
      e10 !== this.beaconCollectionDomain && (e10 ? this.setAttribute(iB.BEACON_COLLECTION_DOMAIN, e10) : this.removeAttribute(iB.BEACON_COLLECTION_DOMAIN));
    }
    get streamType() {
      var e10;
      return null != (e10 = this.getAttribute(iB.STREAM_TYPE)) ? e10 : aZ(this.nativeEl);
    }
    set streamType(e10) {
      e10 !== this.streamType && (e10 ? this.setAttribute(iB.STREAM_TYPE, e10) : this.removeAttribute(iB.STREAM_TYPE));
    }
    get targetLiveWindow() {
      var e10, t10, a10;
      return this.hasAttribute(iB.TARGET_LIVE_WINDOW) ? +this.getAttribute(iB.TARGET_LIVE_WINDOW) : (e10 = this.nativeEl, null != (a10 = null == (t10 = aq.get(e10)) ? void 0 : t10.targetLiveWindow) ? a10 : NaN);
    }
    set targetLiveWindow(e10) {
      e10 != this.targetLiveWindow && (null == e10 ? this.removeAttribute(iB.TARGET_LIVE_WINDOW) : this.setAttribute(iB.TARGET_LIVE_WINDOW, `${+e10}`));
    }
    get liveEdgeStart() {
      var e10, t10;
      if (this.hasAttribute(iB.LIVE_EDGE_OFFSET)) {
        let { liveEdgeOffset: a10 } = this, i10 = null != (e10 = this.nativeEl.seekable.end(0)) ? e10 : 0;
        return Math.max(null != (t10 = this.nativeEl.seekable.start(0)) ? t10 : 0, i10 - a10);
      }
      return ((e11) => {
        var t11;
        let a10 = null == (t11 = aq.get(e11)) ? void 0 : t11.liveEdgeStartOffset;
        if ("number" != typeof a10) return NaN;
        let i10 = aX(e11);
        return i10.length ? i10.end(i10.length - 1) - a10 : NaN;
      })(this.nativeEl);
    }
    get liveEdgeOffset() {
      if (this.hasAttribute(iB.LIVE_EDGE_OFFSET)) return +this.getAttribute(iB.LIVE_EDGE_OFFSET);
    }
    set liveEdgeOffset(e10) {
      e10 != this.liveEdgeOffset && (null == e10 ? this.removeAttribute(iB.LIVE_EDGE_OFFSET) : this.setAttribute(iB.LIVE_EDGE_OFFSET, `${+e10}`));
    }
    get seekable() {
      return aX(this.nativeEl);
    }
    async addCuePoints(e10) {
      return am(this.nativeEl, e10);
    }
    get activeCuePoint() {
      return av(this.nativeEl);
    }
    get cuePoints() {
      return (function(e10, t10 = { label: ac }) {
        let a10 = ad(e10, t10.label, "metadata");
        return null != a10 && a10.cues ? Array.from(a10.cues, (e11) => ap(e11)) : [];
      })(this.nativeEl);
    }
    async addChapters(e10) {
      return aE(this.nativeEl, e10);
    }
    get activeChapter() {
      return a_(this.nativeEl);
    }
    get chapters() {
      return (function(e10, t10 = { label: ag }) {
        var a10;
        let i10 = ad(e10, t10.label, "chapters");
        return null != (a10 = null == i10 ? void 0 : i10.cues) && a10.length ? Array.from(i10.cues, (e11) => af(e11)) : [];
      })(this.nativeEl);
    }
    getStartDate() {
      return (function(e10, t10) {
        if (t10) {
          let a10 = t10.playingDate;
          if (null != a10) return new Date(a10.getTime() - 1e3 * e10.currentTime);
        }
        return "function" == typeof e10.getStartDate ? e10.getStartDate() : /* @__PURE__ */ new Date(NaN);
      })(this.nativeEl, this._hls);
    }
    get currentPdt() {
      var e10, t10;
      return e10 = this.nativeEl, (t10 = this._hls) && t10.playingDate ? t10.playingDate : new Date("function" == typeof e10.getStartDate ? e10.getStartDate().getTime() + 1e3 * e10.currentTime : NaN);
    }
    get preferPlayback() {
      let e10 = this.getAttribute(iB.PREFER_PLAYBACK);
      if ("mse" === e10 || e10 === tQ) return e10;
    }
    set preferPlayback(e10) {
      e10 !== this.preferPlayback && ("mse" === e10 || e10 === tQ ? this.setAttribute(iB.PREFER_PLAYBACK, e10) : this.removeAttribute(iB.PREFER_PLAYBACK));
    }
    get metadata() {
      return { ...this.getAttributeNames().filter((e10) => e10.startsWith("metadata-") && ![iB.METADATA_URL].includes(e10)).reduce((e10, t10) => {
        let a10 = this.getAttribute(t10);
        return null != a10 && (e10[t10.replace(/^metadata-/, "").replace(/-/g, "_")] = a10), e10;
      }, {}), ...iD(this, ig) };
    }
    set metadata(e10) {
      iP(this, ig, null != e10 ? e10 : {}), this.mux && this.mux.emit("hb", iD(this, ig));
    }
    get _hlsConfig() {
      return iD(this, iE);
    }
    set _hlsConfig(e10) {
      iP(this, iE, e10);
    }
    get logo() {
      var e10;
      return null != (e10 = this.getAttribute(iB.LOGO)) ? e10 : iD(this, iA);
    }
    set logo(e10) {
      e10 ? this.setAttribute(iB.LOGO, e10) : this.removeAttribute(iB.LOGO);
    }
    load() {
      a3(this, this.nativeEl, iD(this, iM, iS));
    }
    unload() {
      a4(this.nativeEl, iD(this, iM, iS), this);
    }
    attributeChangedCallback(e10, t10, a10) {
      var i10, r10;
      switch (im.CustomVideoElement.observedAttributes.includes(e10) && !["src", "autoplay", "preload"].includes(e10) && super.attributeChangedCallback(e10, t10, a10), e10) {
        case iB.PLAYER_SOFTWARE_NAME:
          this.playerSoftwareName = null != a10 ? a10 : void 0;
          break;
        case iB.PLAYER_SOFTWARE_VERSION:
          this.playerSoftwareVersion = null != a10 ? a10 : void 0;
          break;
        case "src": {
          let e11 = !!t10, i11 = !!a10;
          !e11 && i11 ? iO(this, iM, iR).call(this) : e11 && !i11 ? this.unload() : e11 && i11 && (this.unload(), iO(this, iM, iR).call(this));
          break;
        }
        case "autoplay":
          if (a10 === t10) break;
          null == (i10 = iD(this, iM, iS)) || i10.setAutoplay(this.autoplay);
          break;
        case "preload":
          if (a10 === t10) break;
          null == (r10 = iD(this, iM, iS)) || r10.setPreload(a10);
          break;
        case iB.PLAYBACK_ID:
        case iB.CUSTOM_DOMAIN:
        case iB.MAX_RESOLUTION:
        case iB.MIN_RESOLUTION:
        case iB.RENDITION_ORDER:
        case iB.PROGRAM_START_TIME:
        case iB.PROGRAM_END_TIME:
        case iB.ASSET_START_TIME:
        case iB.ASSET_END_TIME:
        case iB.PLAYBACK_TOKEN:
          this.src = aG(this);
          break;
        case iB.DEBUG: {
          let e11 = this.debug;
          this.mux && console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."), this._hls && (this._hls.config.debug = e11);
          break;
        }
        case iB.METADATA_URL:
          a10 && fetch(a10).then((e11) => e11.json()).then((e11) => this.metadata = e11).catch(() => console.error(`Unable to load or parse metadata JSON from metadata-url ${a10}!`));
          break;
        case iB.STREAM_TYPE:
          (null == a10 || a10 !== t10) && this.dispatchEvent(new CustomEvent("streamtypechange", { composed: true, bubbles: true }));
          break;
        case iB.TARGET_LIVE_WINDOW:
          (null == a10 || a10 !== t10) && this.dispatchEvent(new CustomEvent("targetlivewindowchange", { composed: true, bubbles: true, detail: this.targetLiveWindow }));
          break;
        case iB.LOGO:
          (null == a10 || a10 !== t10) && this.updateLogo();
          break;
        case iB.DISABLE_TRACKING:
          if (null == a10 || a10 !== t10) {
            let e11 = this.currentTime, t11 = this.paused;
            this.unload(), iO(this, iM, iR).call(this).then(() => {
              this.currentTime = e11, t11 || this.play();
            });
          }
          break;
        case iB.DISABLE_COOKIES:
          (null == a10 || a10 !== t10) && this.disableCookies && document.cookie.split(";").forEach((e11) => {
            e11.trim().startsWith("muxData") && (document.cookie = e11.replace(/^ +/, "").replace(/=.*/, "=;expires=" + (/* @__PURE__ */ new Date()).toUTCString() + ";path=/"));
          });
          break;
        case iB.CAP_RENDITION_TO_PLAYER_SIZE:
          (null == a10 || a10 !== t10) && (this.capRenditionToPlayerSize = null != a10 || void 0);
      }
    }
    updateLogo() {
      if (!this.shadowRoot) return;
      let e10 = this.shadowRoot.querySelector('slot[name="logo"]');
      e10 && (e10.innerHTML = this.constructor.getLogoHTML(iD(this, iA) || this.logo));
    }
    connectedCallback() {
      var e10, t10;
      null == (e10 = super.connectedCallback) || e10.call(this), null == (t10 = this.nativeEl) || t10.addEventListener("muxmetadata", iD(this, ik)), this.nativeEl && this.src && !iD(this, iM, iS) && iO(this, iM, iR).call(this);
    }
    disconnectedCallback() {
      var e10, t10;
      null == (e10 = this.nativeEl) || e10.removeEventListener("muxmetadata", iD(this, ik)), this.unload(), null == (t10 = super.disconnectedCallback) || t10.call(this);
    }
    handleEvent(e10) {
      e10.target === this.nativeEl && this.dispatchEvent(new CustomEvent(e10.type, { composed: true, detail: e10.detail }));
    }
  };
  iv = /* @__PURE__ */ new WeakMap(), ib = /* @__PURE__ */ new WeakMap(), ig = /* @__PURE__ */ new WeakMap(), iy = /* @__PURE__ */ new WeakMap(), iE = /* @__PURE__ */ new WeakMap(), i_ = /* @__PURE__ */ new WeakMap(), iw = /* @__PURE__ */ new WeakMap(), iT = /* @__PURE__ */ new WeakMap(), iA = /* @__PURE__ */ new WeakMap(), ik = /* @__PURE__ */ new WeakMap(), iM = /* @__PURE__ */ new WeakSet(), iS = function() {
    var e10, t10;
    return e10 = this.nativeEl, null == (t10 = aq.get(e10)) ? void 0 : t10.coreReference;
  }, iI = /* @__PURE__ */ new WeakMap(), iR = async function() {
    iD(this, iv) || (await iP(this, iv, Promise.resolve()), iP(this, iv, null), this.load());
  };
  try {
    var iq = "u" > typeof window ? window : e.g;
    iq._sentryModuleMetadata = iq._sentryModuleMetadata || {}, iq._sentryModuleMetadata[new iq.Error().stack] = Object.assign({}, iq._sentryModuleMetadata[new iq.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let iV = /* @__PURE__ */ new WeakMap();
  class iK extends Error {
  }
  class iF extends Error {
  }
  let ij = ["application/x-mpegURL", "application/vnd.apple.mpegurl", "audio/mpegurl"], iG = globalThis.WeakRef ? class extends Set {
    add(e10) {
      super.add(new WeakRef(e10));
    }
    forEach(e10) {
      super.forEach((t10) => {
        let a10 = t10.deref();
        a10 && e10(a10);
      });
    }
  } : Set;
  function iY() {
    return globalThis.cast?.framework?.CastContext.getInstance();
  }
  function iQ() {
    return iY()?.getCurrentSession();
  }
  function iz() {
    return iQ()?.getSessionObj().media[0];
  }
  function iZ(e10) {
    return iY().setOptions({ ...iX(), ...e10 });
  }
  function iX() {
    return { receiverApplicationId: "CC1AD845", autoJoinPolicy: "origin_scoped", androidReceiverCompatible: false, language: "en-US", resumeSavedSession: true };
  }
  async function iJ(e10) {
    if (!e10) return false;
    if (/\.m3u8?(\?.*)?$/i.test(e10)) return true;
    if (e10.startsWith("blob:")) return false;
    try {
      let t10 = (await fetch(e10, { method: "HEAD" })).headers.get("Content-Type");
      return ij.some((e11) => t10 === e11);
    } catch (e11) {
      return console.error("Error while trying to get the Content-Type of the manifest", e11), false;
    }
  }
  async function i0(e10) {
    if (!(!e10 || e10.startsWith("blob:"))) try {
      let a10 = await (await fetch(e10)).text(), i10 = a10, r10 = (function(e11) {
        let t11 = e11.split("\n"), a11 = [];
        for (let e12 = 0; e12 < t11.length; e12++) if (t11[e12].trim().startsWith("#EXT-X-STREAM-INF")) {
          let i11 = t11[e12 + 1] ? t11[e12 + 1].trim() : "";
          i11 && !i11.startsWith("#") && a11.push(i11);
        }
        return a11;
      })(a10);
      if (r10.length > 0) {
        let t11 = new URL(r10[0], e10).toString();
        i10 = await (await fetch(t11)).text();
      }
      var t10 = i10.split("\n").find((e11) => !e11.trim().startsWith("#") && "" !== e11.trim());
      if (!t10) return;
      let n10 = t10.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);
      return n10 ? n10[1] : null;
    } catch (e11) {
      console.error("Error while trying to parse the manifest playlist", e11);
      return;
    }
  }
  try {
    var i1 = "u" > typeof window ? window : e.g;
    i1._sentryModuleMetadata = i1._sentryModuleMetadata || {}, i1._sentryModuleMetadata[new i1.Error().stack] = Object.assign({}, i1._sentryModuleMetadata[new i1.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let i2 = new iG(), i3 = /* @__PURE__ */ new WeakSet();
  rs = () => {
    globalThis.chrome?.cast?.isAvailable ? t || (t = cast.framework, iY().addEventListener(t.CastContextEventType.CAST_STATE_CHANGED, (e10) => {
      i2.forEach((t10) => iV.get(t10).onCastStateChanged?.(e10));
    }), iY().addEventListener(t.CastContextEventType.SESSION_STATE_CHANGED, (e10) => {
      i2.forEach((t10) => iV.get(t10).onSessionStateChanged?.(e10));
    }), i2.forEach((e10) => iV.get(e10).init?.())) : console.debug("chrome.cast.isAvailable", globalThis.chrome?.cast?.isAvailable);
  }, globalThis.chrome?.cast?.isAvailable ? globalThis.cast?.framework ? rs() : customElements.whenDefined("google-cast-button").then(rs) : globalThis.__onGCastApiAvailable = () => {
    customElements.whenDefined("google-cast-button").then(rs);
  };
  let i4 = 0;
  class i5 extends EventTarget {
    #e;
    #t;
    #a;
    #i;
    #r = "disconnected";
    #n = false;
    #s = /* @__PURE__ */ new Set();
    #o = /* @__PURE__ */ new WeakMap();
    #l = () => this.#d();
    constructor(e10) {
      super(), this.#e = e10, i2.add(this), iV.set(this, { init: () => this.#u(), onCastStateChanged: () => this.#c(), onSessionStateChanged: () => this.#h(), getCastPlayer: () => this.#m }), this.#u();
    }
    destroy() {
      this.#e?.textTracks?.removeEventListener("change", this.#l), this.#i && this.#a?.controller && Object.entries(this.#i).forEach(([e10, t10]) => {
        this.#a.controller.removeEventListener(e10, t10);
      }), this.#e && i3.delete(this.#e), this.#t = false;
    }
    get #m() {
      if (i3.has(this.#e)) return this.#a;
    }
    get state() {
      return this.#r;
    }
    async watchAvailability(e10) {
      if (this.#e.disableRemotePlayback) throw new iK("disableRemotePlayback attribute is present.");
      return this.#o.set(e10, ++i4), this.#s.add(e10), queueMicrotask(() => e10(this.#p())), i4;
    }
    async cancelWatchAvailability(e10) {
      if (this.#e.disableRemotePlayback) throw new iK("disableRemotePlayback attribute is present.");
      e10 ? this.#s.delete(e10) : this.#s.clear();
    }
    async prompt() {
      if (this.#e.disableRemotePlayback) throw new iK("disableRemotePlayback attribute is present.");
      if (!globalThis.chrome?.cast?.isAvailable) throw new iF("The RemotePlayback API is disabled on this platform.");
      let e10 = i3.has(this.#e);
      i3.add(this.#e), iZ(this.#e.castOptions), Object.entries(this.#i).forEach(([e11, t10]) => {
        this.#a.controller.addEventListener(e11, t10);
      });
      try {
        await iY().requestSession();
      } catch (t10) {
        if (e10 || i3.delete(this.#e), "cancel" === t10) return;
        throw Error(t10);
      }
      iV.get(this.#e)?.loadOnPrompt?.();
    }
    #v() {
      i3.has(this.#e) && (Object.entries(this.#i).forEach(([e10, t10]) => {
        this.#a.controller.removeEventListener(e10, t10);
      }), i3.delete(this.#e), this.#e.muted = this.#a.isMuted, this.#e.currentTime = this.#a.savedPlayerState.currentTime, false === this.#a.savedPlayerState.isPaused && this.#e.play());
    }
    #p() {
      let e10 = iY()?.getCastState();
      return e10 && "NO_DEVICES_AVAILABLE" !== e10;
    }
    #c() {
      let e10 = iY().getCastState();
      if (i3.has(this.#e) && "CONNECTING" === e10 && (this.#r = "connecting", this.dispatchEvent(new Event("connecting"))), !this.#n && e10?.includes("CONNECT")) for (let e11 of (this.#n = true, this.#s)) e11(true);
      else if (this.#n && (!e10 || "NO_DEVICES_AVAILABLE" === e10)) for (let e11 of (this.#n = false, this.#s)) e11(false);
    }
    async #h() {
      let { SESSION_RESUMED: e10 } = t.SessionState;
      if (iY().getSessionState() === e10 && this.#e.castSrc === iz()?.media.contentId) {
        i3.add(this.#e), Object.entries(this.#i).forEach(([e11, t10]) => {
          this.#a.controller.addEventListener(e11, t10);
        });
        try {
          var a10;
          await (a10 = new chrome.cast.media.GetStatusRequest(), new Promise((e11, t10) => {
            iz().getStatus(a10, e11, t10);
          }));
        } catch (e11) {
          console.error(e11);
        }
        this.#i[t.RemotePlayerEventType.IS_PAUSED_CHANGED](), this.#i[t.RemotePlayerEventType.PLAYER_STATE_CHANGED]();
      }
    }
    #u() {
      t && !this.#t && (this.#t = true, iZ(this.#e.castOptions), this.#e.textTracks.addEventListener("change", this.#l), this.#c(), this.#a = new t.RemotePlayer(), new t.RemotePlayerController(this.#a), this.#i = { [t.RemotePlayerEventType.IS_CONNECTED_CHANGED]: ({ value: e10 }) => {
        true === e10 ? (this.#r = "connected", this.dispatchEvent(new Event("connect"))) : (this.#v(), this.#r = "disconnected", this.dispatchEvent(new Event("disconnect")));
      }, [t.RemotePlayerEventType.DURATION_CHANGED]: () => {
        this.#e.dispatchEvent(new Event("durationchange"));
      }, [t.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]: () => {
        this.#e.dispatchEvent(new Event("volumechange"));
      }, [t.RemotePlayerEventType.IS_MUTED_CHANGED]: () => {
        this.#e.dispatchEvent(new Event("volumechange"));
      }, [t.RemotePlayerEventType.CURRENT_TIME_CHANGED]: () => {
        this.#m?.isMediaLoaded && this.#e.dispatchEvent(new Event("timeupdate"));
      }, [t.RemotePlayerEventType.VIDEO_INFO_CHANGED]: () => {
        this.#e.dispatchEvent(new Event("resize"));
      }, [t.RemotePlayerEventType.IS_PAUSED_CHANGED]: () => {
        this.#e.dispatchEvent(new Event(this.paused ? "pause" : "play"));
      }, [t.RemotePlayerEventType.PLAYER_STATE_CHANGED]: () => {
        this.#m?.playerState !== chrome.cast.media.PlayerState.PAUSED && this.#e.dispatchEvent(new Event({ [chrome.cast.media.PlayerState.PLAYING]: "playing", [chrome.cast.media.PlayerState.BUFFERING]: "waiting", [chrome.cast.media.PlayerState.IDLE]: "emptied" }[this.#m?.playerState]));
      }, [t.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]: async () => {
        this.#m?.isMediaLoaded && (await Promise.resolve(), this.#b());
      } });
    }
    #b() {
      this.#d();
    }
    async #d() {
      let e10;
      if (!this.#m) return;
      let t10 = (this.#a.mediaInfo?.tracks ?? []).filter(({ type: e11 }) => e11 === chrome.cast.media.TrackType.TEXT), a10 = [...this.#e.textTracks].filter(({ kind: e11 }) => "subtitles" === e11 || "captions" === e11), i10 = t10.map(({ language: e11, name: t11, trackId: i11 }) => {
        let { mode: r11 } = a10.find((a11) => a11.language === e11 && a11.label === t11) ?? {};
        return !!r11 && { mode: r11, trackId: i11 };
      }).filter(Boolean), r10 = i10.filter(({ mode: e11 }) => "showing" !== e11).map(({ trackId: e11 }) => e11), n10 = i10.find(({ mode: e11 }) => "showing" === e11), s10 = iQ()?.getSessionObj().media[0]?.activeTrackIds ?? [], o10 = s10;
      if (s10.length && (o10 = o10.filter((e11) => !r10.includes(e11))), n10?.trackId && (o10 = [...o10, n10.trackId]), e10 = o10 = [...new Set(o10)], !(s10.length === e10.length && s10.every((t11) => e10.includes(t11)))) try {
        let e11 = new chrome.cast.media.EditTracksInfoRequest(o10);
        await new Promise((t11, a11) => {
          iz().editTracksInfo(e11, t11, a11);
        });
      } catch (e11) {
        console.error(e11);
      }
    }
  }
  try {
    var i9 = "u" > typeof window ? window : e.g;
    i9._sentryModuleMetadata = i9._sentryModuleMetadata || {}, i9._sentryModuleMetadata[new i9.Error().stack] = Object.assign({}, i9._sentryModuleMetadata[new i9.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let i8 = (e10) => class extends e10 {
    static observedAttributes = [...e10.observedAttributes ?? [], "cast-src", "cast-content-type", "cast-stream-type", "cast-receiver"];
    #g = { paused: false };
    #y = iX();
    #f;
    #E;
    get remote() {
      if (this.#E) return this.#E;
      if (globalThis.chrome) {
        if (!this.isConnected) return;
        return this.disableRemotePlayback || (function() {
          let e11 = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";
          if (globalThis.chrome?.cast || document.querySelector(`script[src="${e11}"]`)) return;
          let t10 = document.createElement("script");
          t10.src = e11, document.head.append(t10);
        })(), iV.set(this, { loadOnPrompt: () => this.#_() }), this.#E = new i5(this);
      }
      return super.remote;
    }
    get #m() {
      return iV.get(this.remote)?.getCastPlayer?.();
    }
    disconnectedCallback() {
      this.#E?.destroy(), this.#E = null, iV.delete(this), super.disconnectedCallback?.();
    }
    attributeChangedCallback(e11, t10, a10) {
      if (super.attributeChangedCallback(e11, t10, a10), "cast-receiver" === e11 && a10) {
        this.#y.receiverApplicationId = a10;
        return;
      }
      if (this.#m) switch (e11) {
        case "cast-stream-type":
        case "cast-src":
          this.load();
      }
    }
    async #_() {
      this.#g.paused = super.paused, super.pause(), this.muted = super.muted;
      try {
        await this.load();
      } catch (e11) {
        console.error(e11);
      }
    }
    async load() {
      if (!this.#m) return super.load();
      let e11 = new chrome.cast.media.MediaInfo(this.castSrc, this.castContentType);
      e11.customData = this.castCustomData;
      let t10 = [...this.querySelectorAll("track")].filter(({ kind: e12, src: t11 }) => t11 && ("subtitles" === e12 || "captions" === e12)), a10 = [], i10 = 0;
      if (t10.length && (e11.tracks = t10.map((e12) => {
        let t11 = ++i10;
        0 === a10.length && "showing" === e12.track.mode && a10.push(t11);
        let r11 = new chrome.cast.media.Track(t11, chrome.cast.media.TrackType.TEXT);
        return r11.trackContentId = e12.src, r11.trackContentType = "text/vtt", r11.subtype = "captions" === e12.kind ? chrome.cast.media.TextTrackType.CAPTIONS : chrome.cast.media.TextTrackType.SUBTITLES, r11.name = e12.label, r11.language = e12.srclang, r11;
      })), "live" === this.castStreamType ? e11.streamType = chrome.cast.media.StreamType.LIVE : e11.streamType = chrome.cast.media.StreamType.BUFFERED, e11.metadata = new chrome.cast.media.GenericMediaMetadata(), e11.metadata.title = this.title, e11.metadata.images = [{ url: this.poster }], await iJ(this.castSrc)) {
        e11.contentType || (e11.contentType = "application/x-mpegURL");
        let t11 = await i0(this.castSrc);
        t11?.includes("m4s") || t11?.includes("mp4") ? (e11.hlsSegmentFormat = chrome.cast.media.HlsSegmentFormat.FMP4, e11.hlsVideoSegmentFormat = chrome.cast.media.HlsVideoSegmentFormat.FMP4) : t11?.includes("ts") && (e11.hlsSegmentFormat = chrome.cast.media.HlsSegmentFormat.TS, e11.hlsVideoSegmentFormat = chrome.cast.media.HlsVideoSegmentFormat.TS);
      }
      let r10 = new chrome.cast.media.LoadRequest(e11);
      r10.currentTime = super.currentTime ?? 0, r10.autoplay = !this.#g.paused, r10.activeTrackIds = a10, await iQ()?.loadMedia(r10), this.dispatchEvent(new Event("volumechange"));
    }
    play() {
      if (this.#m) {
        this.#m.isPaused && this.#m.controller?.playOrPause();
        return;
      }
      return super.play();
    }
    pause() {
      if (this.#m) {
        this.#m.isPaused || this.#m.controller?.playOrPause();
        return;
      }
      super.pause();
    }
    get castOptions() {
      return this.#y;
    }
    get castReceiver() {
      return this.getAttribute("cast-receiver") ?? void 0;
    }
    set castReceiver(e11) {
      this.castReceiver != e11 && this.setAttribute("cast-receiver", `${e11}`);
    }
    get castSrc() {
      let e11 = this.currentSrc, t10 = e11?.startsWith("blob:") ? void 0 : e11;
      return this.getAttribute("cast-src") ?? this.querySelector("source")?.src ?? t10 ?? this.getAttribute("src") ?? void 0;
    }
    set castSrc(e11) {
      this.castSrc != e11 && this.setAttribute("cast-src", `${e11}`);
    }
    get castContentType() {
      return this.getAttribute("cast-content-type") ?? void 0;
    }
    set castContentType(e11) {
      this.setAttribute("cast-content-type", `${e11}`);
    }
    get castStreamType() {
      return this.getAttribute("cast-stream-type") ?? this.streamType ?? void 0;
    }
    set castStreamType(e11) {
      this.setAttribute("cast-stream-type", `${e11}`);
    }
    get castCustomData() {
      return this.#f;
    }
    set castCustomData(e11) {
      let t10 = typeof e11;
      ["object", "undefined"].includes(t10) ? this.#f = e11 : console.error(`castCustomData must be nullish or an object but value was of type ${t10}`);
    }
    get readyState() {
      if (this.#m) switch (this.#m.playerState) {
        case chrome.cast.media.PlayerState.IDLE:
          return 0;
        case chrome.cast.media.PlayerState.BUFFERING:
          return 2;
        default:
          return 3;
      }
      return super.readyState;
    }
    get paused() {
      return this.#m ? this.#m.isPaused : super.paused;
    }
    get muted() {
      return this.#m ? this.#m?.isMuted : super.muted;
    }
    set muted(e11) {
      if (this.#m) {
        (e11 && !this.#m.isMuted || !e11 && this.#m.isMuted) && this.#m.controller?.muteOrUnmute();
        return;
      }
      super.muted = e11;
    }
    get volume() {
      return this.#m ? this.#m?.volumeLevel ?? 1 : super.volume;
    }
    set volume(e11) {
      if (this.#m) {
        this.#m.volumeLevel = +e11, this.#m.controller?.setVolumeLevel();
        return;
      }
      super.volume = e11;
    }
    get duration() {
      return this.#m && this.#m?.isMediaLoaded ? this.#m?.duration ?? NaN : super.duration;
    }
    get currentTime() {
      return this.#m && this.#m?.isMediaLoaded ? this.#m?.currentTime ?? 0 : super.currentTime;
    }
    set currentTime(e11) {
      if (this.#m) {
        this.#m.currentTime = e11, this.#m.controller?.seek();
        return;
      }
      super.currentTime = e11;
    }
  };
  e.i(292858);
  var i6 = e.i(594975);
  try {
    var i7 = "u" > typeof window ? window : e.g;
    i7._sentryModuleMetadata = i7._sentryModuleMetadata || {}, i7._sentryModuleMetadata[new i7.Error().stack] = Object.assign({}, i7._sentryModuleMetadata[new i7.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var re = (e10) => {
    throw TypeError(e10);
  }, rt = (e10, t10, a10) => t10.has(e10) || re("Cannot " + a10), ra = (e10, t10, a10) => (rt(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), ri = (e10, t10, a10) => t10.has(e10) ? re("Cannot add the same private member more than once") : t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10), rr = (e10, t10, a10, i10) => (rt(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10), rn = class {
    addEventListener() {
    }
    removeEventListener() {
    }
    dispatchEvent(e10) {
      return true;
    }
  };
  "u" < typeof DocumentFragment && (globalThis.DocumentFragment = class extends rn {
  });
  var rs, ro, rl = class extends rn {
  }, rd = class {
    constructor(e10, t10 = {}) {
      ri(this, ro), rr(this, ro, null == t10 ? void 0 : t10.detail);
    }
    get detail() {
      return ra(this, ro);
    }
    initCustomEvent() {
    }
  };
  ro = /* @__PURE__ */ new WeakMap();
  var ru = { document: { createElement: function(e10, t10) {
    return new rl();
  } }, DocumentFragment, customElements: { get(e10) {
  }, define(e10, t10, a10) {
  }, getName: (e10) => null, upgrade(e10) {
  }, whenDefined: (e10) => Promise.resolve(rl) }, CustomEvent: rd, EventTarget: rn, HTMLElement: rl, HTMLVideoElement: class extends rn {
  } }, rc = "u" < typeof window || void 0 === globalThis.customElements, rh = rc ? ru : globalThis;
  rc && ru.document;
  var rm, rp = class extends i8((0, i6.MediaTracksMixin)(i$)) {
    constructor() {
      super(...arguments), ri(this, rm);
    }
    get autoplay() {
      let e10 = this.getAttribute("autoplay");
      return null !== e10 && ("" === e10 || e10);
    }
    set autoplay(e10) {
      e10 !== this.autoplay && (e10 ? this.setAttribute("autoplay", "string" == typeof e10 ? e10 : "") : this.removeAttribute("autoplay"));
    }
    get muxCastCustomData() {
      return { mux: { playbackId: this.playbackId, minResolution: this.minResolution, maxResolution: this.maxResolution, renditionOrder: this.renditionOrder, customDomain: this.customDomain, tokens: { drm: this.drmToken }, envKey: this.envKey, metadata: this.metadata, disableCookies: this.disableCookies, disableTracking: this.disableTracking, beaconCollectionDomain: this.beaconCollectionDomain, startTime: this.startTime, preferCmcd: this.preferCmcd } };
    }
    get castCustomData() {
      var e10;
      return null != (e10 = ra(this, rm)) ? e10 : this.muxCastCustomData;
    }
    set castCustomData(e10) {
      rr(this, rm, e10);
    }
  };
  rm = /* @__PURE__ */ new WeakMap(), rh.customElements.get("mux-video") || (rh.customElements.define("mux-video", rp), rh.MuxVideoElement = rp);
  try {
    var rv = "u" > typeof window ? window : e.g;
    rv._sentryModuleMetadata = rv._sentryModuleMetadata || {}, rv._sentryModuleMetadata[new rv.Error().stack] = Object.assign({}, rv._sentryModuleMetadata[new rv.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let rb = { MEDIA_PLAY_REQUEST: "mediaplayrequest", MEDIA_PAUSE_REQUEST: "mediapauserequest", MEDIA_MUTE_REQUEST: "mediamuterequest", MEDIA_UNMUTE_REQUEST: "mediaunmuterequest", MEDIA_LOOP_REQUEST: "medialooprequest", MEDIA_VOLUME_REQUEST: "mediavolumerequest", MEDIA_SEEK_REQUEST: "mediaseekrequest", MEDIA_AIRPLAY_REQUEST: "mediaairplayrequest", MEDIA_ENTER_FULLSCREEN_REQUEST: "mediaenterfullscreenrequest", MEDIA_EXIT_FULLSCREEN_REQUEST: "mediaexitfullscreenrequest", MEDIA_PREVIEW_REQUEST: "mediapreviewrequest", MEDIA_ENTER_PIP_REQUEST: "mediaenterpiprequest", MEDIA_EXIT_PIP_REQUEST: "mediaexitpiprequest", MEDIA_ENTER_CAST_REQUEST: "mediaentercastrequest", MEDIA_EXIT_CAST_REQUEST: "mediaexitcastrequest", MEDIA_SHOW_TEXT_TRACKS_REQUEST: "mediashowtexttracksrequest", MEDIA_HIDE_TEXT_TRACKS_REQUEST: "mediahidetexttracksrequest", MEDIA_SHOW_SUBTITLES_REQUEST: "mediashowsubtitlesrequest", MEDIA_DISABLE_SUBTITLES_REQUEST: "mediadisablesubtitlesrequest", MEDIA_TOGGLE_SUBTITLES_REQUEST: "mediatogglesubtitlesrequest", MEDIA_PLAYBACK_RATE_REQUEST: "mediaplaybackraterequest", MEDIA_RENDITION_REQUEST: "mediarenditionrequest", MEDIA_AUDIO_TRACK_REQUEST: "mediaaudiotrackrequest", MEDIA_SEEK_TO_LIVE_REQUEST: "mediaseektoliverequest", REGISTER_MEDIA_STATE_RECEIVER: "registermediastatereceiver", UNREGISTER_MEDIA_STATE_RECEIVER: "unregistermediastatereceiver" }, rg = { MEDIA_CHROME_ATTRIBUTES: "mediachromeattributes", MEDIA_CONTROLLER: "mediacontroller" }, ry = { MEDIA_AIRPLAY_UNAVAILABLE: "mediaAirplayUnavailable", MEDIA_AUDIO_TRACK_ENABLED: "mediaAudioTrackEnabled", MEDIA_AUDIO_TRACK_LIST: "mediaAudioTrackList", MEDIA_AUDIO_TRACK_UNAVAILABLE: "mediaAudioTrackUnavailable", MEDIA_BUFFERED: "mediaBuffered", MEDIA_CAST_UNAVAILABLE: "mediaCastUnavailable", MEDIA_CHAPTERS_CUES: "mediaChaptersCues", MEDIA_CURRENT_TIME: "mediaCurrentTime", MEDIA_DURATION: "mediaDuration", MEDIA_ENDED: "mediaEnded", MEDIA_ERROR: "mediaError", MEDIA_ERROR_CODE: "mediaErrorCode", MEDIA_ERROR_MESSAGE: "mediaErrorMessage", MEDIA_FULLSCREEN_UNAVAILABLE: "mediaFullscreenUnavailable", MEDIA_HAS_PLAYED: "mediaHasPlayed", MEDIA_HEIGHT: "mediaHeight", MEDIA_IS_AIRPLAYING: "mediaIsAirplaying", MEDIA_IS_CASTING: "mediaIsCasting", MEDIA_IS_FULLSCREEN: "mediaIsFullscreen", MEDIA_IS_PIP: "mediaIsPip", MEDIA_LOADING: "mediaLoading", MEDIA_MUTED: "mediaMuted", MEDIA_LOOP: "mediaLoop", MEDIA_PAUSED: "mediaPaused", MEDIA_PIP_UNAVAILABLE: "mediaPipUnavailable", MEDIA_PLAYBACK_RATE: "mediaPlaybackRate", MEDIA_PREVIEW_CHAPTER: "mediaPreviewChapter", MEDIA_PREVIEW_COORDS: "mediaPreviewCoords", MEDIA_PREVIEW_IMAGE: "mediaPreviewImage", MEDIA_PREVIEW_TIME: "mediaPreviewTime", MEDIA_RENDITION_LIST: "mediaRenditionList", MEDIA_RENDITION_SELECTED: "mediaRenditionSelected", MEDIA_RENDITION_UNAVAILABLE: "mediaRenditionUnavailable", MEDIA_SEEKABLE: "mediaSeekable", MEDIA_STREAM_TYPE: "mediaStreamType", MEDIA_SUBTITLES_LIST: "mediaSubtitlesList", MEDIA_SUBTITLES_SHOWING: "mediaSubtitlesShowing", MEDIA_TARGET_LIVE_WINDOW: "mediaTargetLiveWindow", MEDIA_TIME_IS_LIVE: "mediaTimeIsLive", MEDIA_VOLUME: "mediaVolume", MEDIA_VOLUME_LEVEL: "mediaVolumeLevel", MEDIA_VOLUME_UNAVAILABLE: "mediaVolumeUnavailable", MEDIA_LANG: "mediaLang", MEDIA_WIDTH: "mediaWidth" }, rf = Object.entries(ry), rE = rf.reduce((e10, [t10, a10]) => (e10[t10] = a10.toLowerCase(), e10), {}), r_ = rf.reduce((e10, [t10, a10]) => (e10[t10] = a10.toLowerCase(), e10), { USER_INACTIVE_CHANGE: "userinactivechange", BREAKPOINTS_CHANGE: "breakpointchange", BREAKPOINTS_COMPUTED: "breakpointscomputed" }), rw = Object.entries(r_).reduce((e10, [t10, a10]) => {
    let i10 = rE[t10];
    return i10 && (e10[a10] = i10), e10;
  }, { userinactivechange: "userinactive" }), rT = Object.entries(rE).reduce((e10, [t10, a10]) => {
    let i10 = r_[t10];
    return i10 && (e10[a10] = i10), e10;
  }, { userinactive: "userinactivechange" }), rA = { SUBTITLES: "subtitles", CAPTIONS: "captions", DESCRIPTIONS: "descriptions", CHAPTERS: "chapters", METADATA: "metadata" }, rk = { DISABLED: "disabled", HIDDEN: "hidden", SHOWING: "showing" }, rM = { MOUSE: "mouse", PEN: "pen", TOUCH: "touch" }, rS = { UNAVAILABLE: "unavailable", UNSUPPORTED: "unsupported" }, rI = { LIVE: "live", ON_DEMAND: "on-demand", UNKNOWN: "unknown" }, rR = { INLINE: "inline", FULLSCREEN: "fullscreen", PICTURE_IN_PICTURE: "picture-in-picture" };
  e.s(["AttributeToStateChangeEventMap", 0, rT, "AvailabilityStates", 0, rS, "MediaStateChangeEvents", 0, r_, "MediaStateReceiverAttributes", 0, rg, "MediaUIAttributes", 0, rE, "MediaUIEvents", 0, rb, "MediaUIProps", 0, ry, "PointerTypes", 0, rM, "ReadyStates", 0, { HAVE_NOTHING: 0, HAVE_METADATA: 1, HAVE_CURRENT_DATA: 2, HAVE_FUTURE_DATA: 3, HAVE_ENOUGH_DATA: 4 }, "StateChangeEventToAttributeMap", 0, rw, "StreamTypes", 0, rI, "TextTrackKinds", 0, rA, "TextTrackModes", 0, rk, "VolumeLevels", 0, { HIGH: "high", MEDIUM: "medium", LOW: "low", OFF: "off" }, "WebkitPresentationModes", 0, rR], 590241), e.i(590241);
  try {
    var rC = "u" > typeof window ? window : e.g;
    rC._sentryModuleMetadata = rC._sentryModuleMetadata || {}, rC._sentryModuleMetadata[new rC.Error().stack] = Object.assign({}, rC._sentryModuleMetadata[new rC.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function rL(e10) {
    if (e10) {
      let { id: t10, width: a10, height: i10 } = e10;
      return [t10, a10, i10].filter((e11) => null != e11).join(":");
    }
  }
  function rD(e10) {
    if (e10) {
      let [t10, a10, i10] = e10.split(":");
      return { id: t10, width: +a10, height: +i10 };
    }
  }
  function rx(e10) {
    if (e10) {
      let { id: t10, kind: a10, language: i10, label: r10 } = e10;
      return [t10, a10, i10, r10].filter((e11) => null != e11).join(":");
    }
  }
  function rP(e10) {
    if (e10) {
      let [t10, a10, i10, r10] = e10.split(":");
      return { id: t10, kind: a10, language: i10, label: r10 };
    }
  }
  function rO(e10) {
    return "number" == typeof e10 && !Number.isNaN(e10) && Number.isFinite(e10);
  }
  function rN(e10) {
    return "string" == typeof e10 && !isNaN(e10) && !isNaN(parseFloat(e10));
  }
  let rU = (e10) => new Promise((t10) => setTimeout(t10, e10));
  try {
    var rB = "u" > typeof window ? window : e.g;
    rB._sentryModuleMetadata = rB._sentryModuleMetadata || {}, rB._sentryModuleMetadata[new rB.Error().stack] = Object.assign({}, rB._sentryModuleMetadata[new rB.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var rH = "u" > typeof window ? window : e.g;
    rH._sentryModuleMetadata = rH._sentryModuleMetadata || {}, rH._sentryModuleMetadata[new rH.Error().stack] = Object.assign({}, rH._sentryModuleMetadata[new rH.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let rW = { en: { "Start airplay": "Start airplay", "Stop airplay": "Stop airplay", Audio: "Audio", Captions: "Captions", "Enable captions": "Enable captions", "Disable captions": "Disable captions", "Start casting": "Start casting", "Stop casting": "Stop casting", "Enter fullscreen mode": "Enter fullscreen mode", "Exit fullscreen mode": "Exit fullscreen mode", Mute: "Mute", Unmute: "Unmute", Loop: "Loop", "Enter picture in picture mode": "Enter picture in picture mode", "Exit picture in picture mode": "Exit picture in picture mode", Play: "Play", Pause: "Pause", "Playback rate": "Playback rate", "Playback rate {playbackRate}": "Playback rate {playbackRate}", Quality: "Quality", "Seek backward": "Seek backward", "Seek forward": "Seek forward", Settings: "Settings", Auto: "Auto", "audio player": "audio player", "video player": "video player", volume: "volume", seek: "seek", "closed captions": "closed captions", "current playback rate": "current playback rate", "playback time": "playback time", "media loading": "media loading", settings: "settings", "audio tracks": "audio tracks", quality: "quality", play: "play", pause: "pause", mute: "mute", unmute: "unmute", "chapter: {chapterName}": "chapter: {chapterName}", live: "live", Off: "Off", "start airplay": "start airplay", "stop airplay": "stop airplay", "start casting": "start casting", "stop casting": "stop casting", "enter fullscreen mode": "enter fullscreen mode", "exit fullscreen mode": "exit fullscreen mode", "enter picture in picture mode": "enter picture in picture mode", "exit picture in picture mode": "exit picture in picture mode", "seek to live": "seek to live", "playing live": "playing live", "seek back {seekOffset} seconds": "seek back {seekOffset} seconds", "seek forward {seekOffset} seconds": "seek forward {seekOffset} seconds", "Network Error": "Network Error", "Decode Error": "Decode Error", "Source Not Supported": "Source Not Supported", "Encryption Error": "Encryption Error", "A network error caused the media download to fail.": "A network error caused the media download to fail.", "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.": "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.", "An unsupported error occurred. The server or network failed, or your browser does not support this format.": "An unsupported error occurred. The server or network failed, or your browser does not support this format.", "The media is encrypted and there are no keys to decrypt it.": "The media is encrypted and there are no keys to decrypt it.", hour: "hour", hours: "hours", minute: "minute", minutes: "minutes", second: "second", seconds: "seconds", "{time} remaining": "{time} remaining", "{currentTime} of {totalTime}": "{currentTime} of {totalTime}", "video not loaded, unknown time.": "video not loaded, unknown time." } }, r$ = (null == (cF = globalThis.navigator) ? void 0 : cF.language) || "en", rq = (e10, t10 = {}) => ((e11) => {
    var t11, a10, i10;
    let [r10] = r$.split("-");
    return (null == (t11 = rW[r$]) ? void 0 : t11[e11]) || (null == (a10 = rW[r10]) ? void 0 : a10[e11]) || (null == (i10 = rW.en) ? void 0 : i10[e11]) || e11;
  })(e10).replace(/\{(\w+)\}/g, (e11, a10) => a10 in t10 ? String(t10[a10]) : `{${a10}}`);
  try {
    var rV = "u" > typeof window ? window : e.g;
    rV._sentryModuleMetadata = rV._sentryModuleMetadata || {}, rV._sentryModuleMetadata[new rV.Error().stack] = Object.assign({}, rV._sentryModuleMetadata[new rV.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let rK = [{ singular: "hour", plural: "hours" }, { singular: "minute", plural: "minutes" }, { singular: "second", plural: "seconds" }], rF = (e10) => {
    if (!rO(e10)) return "";
    let t10 = Math.abs(e10), a10 = t10 !== e10, i10 = new Date(0, 0, 0, 0, 0, t10, 0), r10 = [i10.getHours(), i10.getMinutes(), i10.getSeconds()].map((e11, t11) => {
      let a11;
      return e11 && (a11 = 1 === e11 ? rq(rK[t11].singular) : rq(rK[t11].plural), `${e11} ${a11}`);
    }).filter((e11) => e11).join(", ");
    return a10 ? rq("{time} remaining", { time: r10 }) : r10;
  };
  function rj(e10, t10) {
    let a10 = false;
    e10 < 0 && (a10 = true, e10 = 0 - e10);
    let i10 = Math.floor((e10 = e10 < 0 ? 0 : e10) % 60), r10 = Math.floor(e10 / 60 % 60), n10 = Math.floor(e10 / 3600), s10 = Math.floor(t10 / 60 % 60), o10 = Math.floor(t10 / 3600);
    return (isNaN(e10) || e10 === 1 / 0) && (n10 = r10 = i10 = "0"), r10 = (((n10 = n10 > 0 || o10 > 0 ? n10 + ":" : "") || s10 >= 10) && r10 < 10 ? "0" + r10 : r10) + ":", (a10 ? "-" : "") + n10 + r10 + (i10 = i10 < 10 ? "0" + i10 : i10);
  }
  let rG = Object.freeze({ length: 0, start(e10) {
    let t10 = e10 >>> 0;
    if (t10 >= this.length) throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t10}) is greater than or equal to the maximum bound (${this.length}).`);
    return 0;
  }, end(e10) {
    let t10 = e10 >>> 0;
    if (t10 >= this.length) throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t10}) is greater than or equal to the maximum bound (${this.length}).`);
    return 0;
  } });
  e.s(["emptyTimeRanges", 0, rG, "formatAsTimePhrase", 0, rF, "formatTime", 0, rj, "serializeTimeRanges", 0, function(e10 = rG) {
    return Array.from(e10).map((t10, a10) => [Number(e10.start(a10).toFixed(3)), Number(e10.end(a10).toFixed(3))].join(":")).join(" ");
  }], 461645), e.i(461645);
  try {
    var rY = "u" > typeof window ? window : e.g;
    rY._sentryModuleMetadata = rY._sentryModuleMetadata || {}, rY._sentryModuleMetadata[new rY.Error().stack] = Object.assign({}, rY._sentryModuleMetadata[new rY.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  class rQ {
    addEventListener() {
    }
    removeEventListener() {
    }
    dispatchEvent() {
      return true;
    }
  }
  class rz extends rQ {
  }
  class rZ extends rz {
    constructor() {
      super(...arguments), this.role = null;
    }
  }
  let rX = { createElement: function() {
    return new rJ.HTMLElement();
  }, createElementNS: function() {
    return new rJ.HTMLElement();
  }, addEventListener() {
  }, removeEventListener() {
  }, dispatchEvent: (e10) => false }, rJ = { ResizeObserver: class {
    observe() {
    }
    unobserve() {
    }
    disconnect() {
    }
  }, document: rX, Node: rz, Element: rZ, HTMLElement: class extends rZ {
    constructor() {
      super(...arguments), this.innerHTML = "";
    }
    get content() {
      return new rJ.DocumentFragment();
    }
  }, DocumentFragment: class extends rQ {
  }, customElements: { get: function() {
  }, define: function() {
  }, whenDefined: function() {
  } }, localStorage: { getItem: (e10) => null, setItem(e10, t10) {
  }, removeItem(e10) {
  } }, CustomEvent: function() {
  }, getComputedStyle: function() {
  }, navigator: { languages: [], get userAgent() {
    return "";
  } }, matchMedia: (e10) => ({ matches: false, media: e10 }), DOMParser: class {
    parseFromString(e10, t10) {
      return { body: { textContent: e10 } };
    }
  } }, r0 = "global" in globalThis && (null == globalThis ? void 0 : globalThis.global) === globalThis || "u" < typeof window || void 0 === window.customElements, r1 = Object.keys(rJ).every((e10) => e10 in globalThis), r2 = r0 && !r1 ? rJ : globalThis, r3 = r0 && !r1 ? rX : globalThis.document;
  try {
    var r4 = "u" > typeof window ? window : e.g;
    r4._sentryModuleMetadata = r4._sentryModuleMetadata || {}, r4._sentryModuleMetadata[new r4.Error().stack] = Object.assign({}, r4._sentryModuleMetadata[new r4.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let r5 = /* @__PURE__ */ new WeakMap(), r9 = (e10) => {
    let t10 = r5.get(e10);
    return t10 || r5.set(e10, t10 = /* @__PURE__ */ new Set()), t10;
  }, r8 = new r2.ResizeObserver((e10) => {
    for (let t10 of e10) for (let e11 of r9(t10.target)) e11(t10);
  });
  function r6(e10, t10) {
    r9(e10).add(t10), r8.observe(e10);
  }
  function r7(e10, t10) {
    let a10 = r9(e10);
    a10.delete(t10), a10.size || r8.unobserve(e10);
  }
  try {
    var ne = "u" > typeof window ? window : e.g;
    ne._sentryModuleMetadata = ne._sentryModuleMetadata || {}, ne._sentryModuleMetadata[new ne.Error().stack] = Object.assign({}, ne._sentryModuleMetadata[new ne.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function nt(e10) {
    let t10 = {};
    for (let a10 of e10) t10[a10.name] = a10.value;
    return t10;
  }
  function na(e10) {
    var t10;
    return null != (t10 = ni(e10)) ? t10 : no(e10, "media-controller");
  }
  function ni(e10) {
    var t10;
    let { MEDIA_CONTROLLER: a10 } = rg, i10 = e10.getAttribute(a10);
    if (i10) return null == (t10 = nd(e10)) ? void 0 : t10.getElementById(i10);
  }
  let nr = (e10, t10, a10 = ".value") => {
    let i10 = e10.querySelector(a10);
    i10 && (i10.textContent = t10);
  }, nn = (e10, t10) => {
    let a10, i10;
    return (a10 = `slot[name="${t10}"]`, !(i10 = e10.shadowRoot.querySelector(a10)) ? [] : i10.children)[0];
  }, ns = (e10, t10) => !!e10 && !!t10 && (null != e10 && !!e10.contains(t10) || ns(e10, t10.getRootNode().host)), no = (e10, t10) => {
    if (!e10) return null;
    let a10 = e10.closest(t10);
    return a10 || no(e10.getRootNode().host, t10);
  };
  function nl(e10 = document) {
    var t10;
    let a10 = null == e10 ? void 0 : e10.activeElement;
    return a10 ? null != (t10 = nl(a10.shadowRoot)) ? t10 : a10 : null;
  }
  function nd(e10) {
    var t10;
    let a10 = null == (t10 = null == e10 ? void 0 : e10.getRootNode) ? void 0 : t10.call(e10);
    return a10 instanceof ShadowRoot || a10 instanceof Document ? a10 : null;
  }
  function nu(e10, { depth: t10 = 3, checkOpacity: a10 = true, checkVisibilityCSS: i10 = true } = {}) {
    if (e10.checkVisibility) return e10.checkVisibility({ checkOpacity: a10, checkVisibilityCSS: i10 });
    let r10 = e10;
    for (; r10 && t10 > 0; ) {
      let e11 = getComputedStyle(r10);
      if (a10 && "0" === e11.opacity || i10 && "hidden" === e11.visibility || "none" === e11.display) return false;
      r10 = r10.parentElement, t10--;
    }
    return true;
  }
  function nc(e10, t10) {
    let a10 = (function(e11, t11) {
      var a11, i10;
      let r10;
      for (r10 of null != (a11 = e11.querySelectorAll("style:not([media])")) ? a11 : []) {
        let e12;
        try {
          e12 = null == (i10 = r10.sheet) ? void 0 : i10.cssRules;
        } catch {
          continue;
        }
        for (let a12 of null != e12 ? e12 : []) if (t11(a12.selectorText)) return a12;
      }
    })(e10, (e11) => e11 === t10);
    return a10 || nh(e10, t10);
  }
  function nh(e10, t10) {
    var a10, i10;
    let r10 = null != (a10 = e10.querySelectorAll("style:not([media])")) ? a10 : [], n10 = null == r10 ? void 0 : r10[r10.length - 1];
    if (!(null == n10 ? void 0 : n10.sheet)) return console.warn("Media Chrome: No style sheet found on style tag of", e10), { style: { setProperty: () => {
    }, removeProperty: () => "", getPropertyValue: () => "" } };
    let s10 = null == n10 ? void 0 : n10.sheet.insertRule(`${t10}{}`, n10.sheet.cssRules.length);
    return null == (i10 = n10.sheet.cssRules) ? void 0 : i10[s10];
  }
  function nm(e10, t10, a10 = NaN) {
    let i10 = e10.getAttribute(t10);
    return null != i10 ? +i10 : a10;
  }
  function np(e10, t10, a10) {
    let i10 = +a10;
    if (null == a10 || Number.isNaN(i10)) {
      e10.hasAttribute(t10) && e10.removeAttribute(t10);
      return;
    }
    nm(e10, t10, void 0) !== i10 && e10.setAttribute(t10, `${i10}`);
  }
  function nv(e10, t10) {
    return e10.hasAttribute(t10);
  }
  function nb(e10, t10, a10) {
    if (null == a10) {
      e10.hasAttribute(t10) && e10.removeAttribute(t10);
      return;
    }
    nv(e10, t10) != a10 && e10.toggleAttribute(t10, a10);
  }
  function ng(e10, t10, a10 = null) {
    var i10;
    return null != (i10 = e10.getAttribute(t10)) ? i10 : a10;
  }
  function ny(e10, t10, a10) {
    if (null == a10) {
      e10.hasAttribute(t10) && e10.removeAttribute(t10);
      return;
    }
    let i10 = `${a10}`;
    ng(e10, t10, void 0) !== i10 && e10.setAttribute(t10, i10);
  }
  try {
    var nf = "u" > typeof window ? window : e.g;
    nf._sentryModuleMetadata = nf._sentryModuleMetadata || {}, nf._sentryModuleMetadata[new nf.Error().stack] = Object.assign({}, nf._sentryModuleMetadata[new nf.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var nE = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, n_ = (e10, t10, a10) => (nE(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), nw = (e10, t10, a10, i10) => (nE(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10);
  class nT extends r2.HTMLElement {
    constructor() {
      if (super(), ((e10, t10, a10) => {
        if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
        t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
      })(this, cj, void 0), !this.shadowRoot) {
        this.attachShadow(this.constructor.shadowRootOptions);
        const e10 = nt(this.attributes);
        this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e10);
      }
    }
    static get observedAttributes() {
      return [rg.MEDIA_CONTROLLER, rE.MEDIA_PAUSED];
    }
    attributeChangedCallback(e10, t10, a10) {
      var i10, r10, n10, s10, o10;
      e10 === rg.MEDIA_CONTROLLER && (t10 && (null == (r10 = null == (i10 = n_(this, cj)) ? void 0 : i10.unassociateElement) || r10.call(i10, this), nw(this, cj, null)), a10 && this.isConnected && (nw(this, cj, null == (n10 = this.getRootNode()) ? void 0 : n10.getElementById(a10)), null == (o10 = null == (s10 = n_(this, cj)) ? void 0 : s10.associateElement) || o10.call(s10, this)));
    }
    connectedCallback() {
      var e10, t10, a10, i10;
      let r10;
      this.tabIndex = -1, this.setAttribute("aria-hidden", "true"), nw(this, cj, (a10 = this, (r10 = a10.getAttribute(rg.MEDIA_CONTROLLER)) ? null == (i10 = a10.getRootNode()) ? void 0 : i10.getElementById(r10) : no(a10, "media-controller"))), this.getAttribute(rg.MEDIA_CONTROLLER) && (null == (t10 = null == (e10 = n_(this, cj)) ? void 0 : e10.associateElement) || t10.call(e10, this)), n_(this, cj) && (n_(this, cj).addEventListener("pointerdown", this), n_(this, cj).addEventListener("click", this), n_(this, cj).hasAttribute("tabindex") || (n_(this, cj).tabIndex = 0));
    }
    disconnectedCallback() {
      var e10, t10, a10, i10;
      this.getAttribute(rg.MEDIA_CONTROLLER) && (null == (t10 = null == (e10 = n_(this, cj)) ? void 0 : e10.unassociateElement) || t10.call(e10, this)), null == (a10 = n_(this, cj)) || a10.removeEventListener("pointerdown", this), null == (i10 = n_(this, cj)) || i10.removeEventListener("click", this), nw(this, cj, null);
    }
    handleEvent(e10) {
      var t10;
      let a10 = null == (t10 = e10.composedPath()) ? void 0 : t10[0];
      if (["video", "media-controller"].includes(null == a10 ? void 0 : a10.localName)) {
        if ("pointerdown" === e10.type) this._pointerType = e10.pointerType;
        else if ("click" === e10.type) {
          let { clientX: t11, clientY: a11 } = e10, { left: i10, top: r10, width: n10, height: s10 } = this.getBoundingClientRect(), o10 = t11 - i10, l10 = a11 - r10;
          if (o10 < 0 || l10 < 0 || o10 > n10 || l10 > s10 || 0 === n10 && 0 === s10) return;
          let d10 = this._pointerType || "mouse";
          if (this._pointerType = void 0, d10 === rM.TOUCH) return void this.handleTap(e10);
          if (d10 === rM.MOUSE || d10 === rM.PEN) return void this.handleMouseClick(e10);
        }
      }
    }
    get mediaPaused() {
      return nv(this, rE.MEDIA_PAUSED);
    }
    set mediaPaused(e10) {
      nb(this, rE.MEDIA_PAUSED, e10);
    }
    handleTap(e10) {
    }
    handleMouseClick(e10) {
      let t10 = this.mediaPaused ? rb.MEDIA_PLAY_REQUEST : rb.MEDIA_PAUSE_REQUEST;
      this.dispatchEvent(new r2.CustomEvent(t10, { composed: true, bubbles: true }));
    }
  }
  cj = /* @__PURE__ */ new WeakMap(), nT.shadowRootOptions = { mode: "open" }, nT.getTemplateHTML = function(e10) {
    return `
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `;
  }, r2.customElements.get("media-gesture-receiver") || r2.customElements.define("media-gesture-receiver", nT);
  try {
    var nA = "u" > typeof window ? window : e.g;
    nA._sentryModuleMetadata = nA._sentryModuleMetadata || {}, nA._sentryModuleMetadata[new nA.Error().stack] = Object.assign({}, nA._sentryModuleMetadata[new nA.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var nk = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, nM = (e10, t10, a10) => (nk(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), nS = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, nI = (e10, t10, a10, i10) => (nk(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10), nR = (e10, t10, a10) => (nk(e10, t10, "access private method"), a10);
  let nC = "audio", nL = "autohide", nD = "breakpoints", nx = "gesturesdisabled", nP = "keyboardcontrol", nO = "noautohide", nN = "userinactive", nU = "autohideovercontrols", nB = Object.values(rE);
  function nH(e10, t10) {
    var a10, i10, r10;
    if (!e10.isConnected) return;
    let n10 = Object.fromEntries((null != (a10 = e10.getAttribute(nD)) ? a10 : "sm:384 md:576 lg:768 xl:960").split(/\s+/).map((e11) => e11.split(":"))), s10 = (i10 = n10, r10 = t10, Object.keys(i10).filter((e11) => r10 >= parseInt(i10[e11]))), o10 = false;
    if (Object.keys(n10).forEach((t11) => {
      if (s10.includes(t11)) {
        e10.hasAttribute(`breakpoint${t11}`) || (e10.setAttribute(`breakpoint${t11}`, ""), o10 = true);
        return;
      }
      e10.hasAttribute(`breakpoint${t11}`) && (e10.removeAttribute(`breakpoint${t11}`), o10 = true);
    }), o10) {
      let t11 = new CustomEvent(r_.BREAKPOINTS_CHANGE, { detail: s10 });
      e10.dispatchEvent(t11);
    }
    e10.breakpointsComputed || (e10.breakpointsComputed = true, e10.dispatchEvent(new CustomEvent(r_.BREAKPOINTS_COMPUTED, { bubbles: true, composed: true })));
  }
  class nW extends r2.HTMLElement {
    constructor() {
      if (super(), nS(this, c1), nS(this, c3), nS(this, c5), nS(this, c8), nS(this, c7), nS(this, cG, void 0), nS(this, cY, 0), nS(this, cQ, null), nS(this, cz, null), nS(this, cZ, void 0), this.breakpointsComputed = false, nS(this, cX, (e10) => {
        let t10 = this.media;
        for (let a10 of e10) if ("childList" === a10.type) {
          for (let e11 of a10.removedNodes) {
            if ("media" != e11.slot || a10.target != this) continue;
            let i10 = a10.previousSibling && a10.previousSibling.previousElementSibling;
            if (i10 && t10) {
              let t11 = "media" !== i10.slot;
              for (; null !== (i10 = i10.previousSibling); ) "media" == i10.slot && (t11 = false);
              t11 && this.mediaUnsetCallback(e11);
            } else this.mediaUnsetCallback(e11);
          }
          if (t10) for (let e11 of a10.addedNodes) e11 === t10 && this.handleMediaUpdated(t10);
        }
      }), nS(this, cJ, false), nS(this, c0, (e10) => {
        nM(this, cJ) || (setTimeout(() => {
          nH(e10.target, e10.contentRect.width), nI(this, cJ, false);
        }, 0), nI(this, cJ, true));
      }), nS(this, ht, void 0), nS(this, ha, () => {
        if (!nM(this, ht).assignedElements({ flatten: true }).length) {
          nM(this, cQ) && this.mediaUnsetCallback(nM(this, cQ));
          return;
        }
        this.handleMediaUpdated(this.media);
      }), !this.shadowRoot) {
        this.attachShadow(this.constructor.shadowRootOptions);
        const e10 = nt(this.attributes), t10 = this.constructor.getTemplateHTML(e10);
        this.shadowRoot.setHTMLUnsafe ? this.shadowRoot.setHTMLUnsafe(t10) : this.shadowRoot.innerHTML = t10;
      }
      nI(this, cG, new MutationObserver(nM(this, cX)));
    }
    static get observedAttributes() {
      return [nL, nx].concat(nB).filter((e10) => ![rE.MEDIA_RENDITION_LIST, rE.MEDIA_AUDIO_TRACK_LIST, rE.MEDIA_CHAPTERS_CUES, rE.MEDIA_WIDTH, rE.MEDIA_HEIGHT, rE.MEDIA_ERROR, rE.MEDIA_ERROR_MESSAGE].includes(e10));
    }
    attributeChangedCallback(e10, t10, a10) {
      e10.toLowerCase() == nL && (this.autohide = a10);
    }
    get media() {
      let e10 = this.querySelector(":scope > [slot=media]");
      return (null == e10 ? void 0 : e10.nodeName) == "SLOT" && (e10 = e10.assignedElements({ flatten: true })[0]), e10;
    }
    async handleMediaUpdated(e10) {
      e10 && (nI(this, cQ, e10), e10.localName.includes("-") && await r2.customElements.whenDefined(e10.localName), this.mediaSetCallback(e10));
    }
    connectedCallback() {
      var e10;
      nM(this, cG).observe(this, { childList: true, subtree: true }), r6(this, nM(this, c0));
      let t10 = null != this.getAttribute(nC) ? rq("audio player") : rq("video player");
      this.setAttribute("role", "region"), this.setAttribute("aria-label", t10), this.handleMediaUpdated(this.media), this.setAttribute(nN, ""), nH(this, this.getBoundingClientRect().width);
      let a10 = this.querySelector(":scope > slot[slot=media]");
      a10 && (nI(this, ht, a10), nM(this, ht).addEventListener("slotchange", nM(this, ha))), this.addEventListener("pointerdown", this), this.addEventListener("pointermove", this), this.addEventListener("pointerup", this), this.addEventListener("mouseleave", this), this.addEventListener("keyup", this), null == (e10 = r2.window) || e10.addEventListener("mouseup", this);
    }
    disconnectedCallback() {
      var e10;
      r7(this, nM(this, c0)), clearTimeout(nM(this, cz)), nM(this, cG).disconnect(), this.media && this.mediaUnsetCallback(this.media), null == (e10 = r2.window) || e10.removeEventListener("mouseup", this), this.removeEventListener("pointerdown", this), this.removeEventListener("pointermove", this), this.removeEventListener("pointerup", this), this.removeEventListener("mouseleave", this), this.removeEventListener("keyup", this), nM(this, ht) && (nM(this, ht).removeEventListener("slotchange", nM(this, ha)), nI(this, ht, null)), nI(this, cJ, false);
    }
    mediaSetCallback(e10) {
    }
    mediaUnsetCallback(e10) {
      nI(this, cQ, null);
    }
    handleEvent(e10) {
      switch (e10.type) {
        case "pointerdown":
          nI(this, cY, e10.timeStamp);
          break;
        case "pointermove":
          nR(this, c1, c2).call(this, e10);
          break;
        case "pointerup":
          nR(this, c3, c4).call(this, e10);
          break;
        case "mouseleave":
          nR(this, c5, c9).call(this);
          break;
        case "mouseup":
          this.removeAttribute(nP);
          break;
        case "keyup":
          nR(this, c7, he).call(this), this.setAttribute(nP, "");
      }
    }
    set autohide(e10) {
      let t10 = Number(e10);
      nI(this, cZ, isNaN(t10) ? 0 : t10);
    }
    get autohide() {
      return (void 0 === nM(this, cZ) ? 2 : nM(this, cZ)).toString();
    }
    get breakpoints() {
      return ng(this, nD);
    }
    set breakpoints(e10) {
      ny(this, nD, e10);
    }
    get audio() {
      return nv(this, nC);
    }
    set audio(e10) {
      nb(this, nC, e10);
    }
    get gesturesDisabled() {
      return nv(this, nx);
    }
    set gesturesDisabled(e10) {
      nb(this, nx, e10);
    }
    get keyboardControl() {
      return nv(this, nP);
    }
    set keyboardControl(e10) {
      nb(this, nP, e10);
    }
    get noAutohide() {
      return nv(this, nO);
    }
    set noAutohide(e10) {
      nb(this, nO, e10);
    }
    get autohideOverControls() {
      return nv(this, nU);
    }
    set autohideOverControls(e10) {
      nb(this, nU, e10);
    }
    get userInteractive() {
      return nv(this, nN);
    }
    set userInteractive(e10) {
      nb(this, nN, e10);
    }
  }
  cG = /* @__PURE__ */ new WeakMap(), cY = /* @__PURE__ */ new WeakMap(), cQ = /* @__PURE__ */ new WeakMap(), cz = /* @__PURE__ */ new WeakMap(), cZ = /* @__PURE__ */ new WeakMap(), cX = /* @__PURE__ */ new WeakMap(), cJ = /* @__PURE__ */ new WeakMap(), c0 = /* @__PURE__ */ new WeakMap(), c1 = /* @__PURE__ */ new WeakSet(), c2 = function(e10) {
    if ("mouse" !== e10.pointerType && e10.timeStamp - nM(this, cY) < 250) return;
    nR(this, c8, c6).call(this), clearTimeout(nM(this, cz));
    let t10 = this.hasAttribute(nU);
    ([this, this.media].includes(e10.target) || t10) && nR(this, c7, he).call(this);
  }, c3 = /* @__PURE__ */ new WeakSet(), c4 = function(e10) {
    if ("touch" === e10.pointerType) {
      let t10 = !this.hasAttribute(nN);
      [this, this.media].includes(e10.target) && t10 ? nR(this, c5, c9).call(this) : nR(this, c7, he).call(this);
    } else e10.composedPath().some((e11) => ["media-play-button", "media-fullscreen-button"].includes(null == e11 ? void 0 : e11.localName)) && nR(this, c7, he).call(this);
  }, c5 = /* @__PURE__ */ new WeakSet(), c9 = function() {
    if (0 > nM(this, cZ) || this.hasAttribute(nN)) return;
    this.setAttribute(nN, "");
    let e10 = new r2.CustomEvent(r_.USER_INACTIVE_CHANGE, { composed: true, bubbles: true, detail: true });
    this.dispatchEvent(e10);
  }, c8 = /* @__PURE__ */ new WeakSet(), c6 = function() {
    if (!this.hasAttribute(nN)) return;
    this.removeAttribute(nN);
    let e10 = new r2.CustomEvent(r_.USER_INACTIVE_CHANGE, { composed: true, bubbles: true, detail: false });
    this.dispatchEvent(e10);
  }, c7 = /* @__PURE__ */ new WeakSet(), he = function() {
    nR(this, c8, c6).call(this), clearTimeout(nM(this, cz));
    let e10 = parseInt(this.autohide);
    e10 < 0 || nI(this, cz, setTimeout(() => {
      nR(this, c5, c9).call(this);
    }, 1e3 * e10));
  }, ht = /* @__PURE__ */ new WeakMap(), ha = /* @__PURE__ */ new WeakMap(), nW.shadowRootOptions = { mode: "open" }, nW.getTemplateHTML = function(e10) {
    return `
    <style>
      
      :host([${rE.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${nC}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${nC}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${nC}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${nC}])[${nx}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${nC}])[${nx}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${nC}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${nC}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${nC}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${nC}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${nO}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${nN}]:not([${rE.MEDIA_PAUSED}]):not([${rE.MEDIA_IS_AIRPLAYING}]):not([${rE.MEDIA_IS_CASTING}]):not([${nC}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${nO}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${nN}]:not([${nO}]):not([${rE.MEDIA_PAUSED}]):not([${rE.MEDIA_IS_CASTING}]):not([${nC}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${nN}][${nU}]:not([${nO}]):not([${rE.MEDIA_PAUSED}]):not([${rE.MEDIA_IS_CASTING}]):not([${nC}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${nC}])[${rE.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${nT.shadowRootOptions.mode}">
          ${nT.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `;
  }, r2.customElements.get("media-container") || r2.customElements.define("media-container", nW);
  try {
    var n$ = "u" > typeof window ? window : e.g;
    n$._sentryModuleMetadata = n$._sentryModuleMetadata || {}, n$._sentryModuleMetadata[new n$.Error().stack] = Object.assign({}, n$._sentryModuleMetadata[new n$.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var nq = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, nV = (e10, t10, a10) => (nq(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), nK = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, nF = (e10, t10, a10, i10) => (nq(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10);
  class nj {
    constructor(e10, t10, { defaultValue: a10 } = { defaultValue: void 0 }) {
      nK(this, ho), nK(this, hi, void 0), nK(this, hr, void 0), nK(this, hn, void 0), nK(this, hs, /* @__PURE__ */ new Set()), nF(this, hi, e10), nF(this, hr, t10), nF(this, hn, new Set(a10));
    }
    [Symbol.iterator]() {
      return nV(this, ho, hl).values();
    }
    get length() {
      return nV(this, ho, hl).size;
    }
    get value() {
      var e10;
      return null != (e10 = [...nV(this, ho, hl)].join(" ")) ? e10 : "";
    }
    set value(e10) {
      var t10;
      e10 !== this.value && (nF(this, hs, /* @__PURE__ */ new Set()), this.add(...null != (t10 = null == e10 ? void 0 : e10.split(" ")) ? t10 : []));
    }
    toString() {
      return this.value;
    }
    item(e10) {
      return [...nV(this, ho, hl)][e10];
    }
    values() {
      return nV(this, ho, hl).values();
    }
    forEach(e10, t10) {
      nV(this, ho, hl).forEach(e10, t10);
    }
    add(...e10) {
      var t10, a10;
      e10.forEach((e11) => nV(this, hs).add(e11)), ("" !== this.value || (null == (t10 = nV(this, hi)) ? void 0 : t10.hasAttribute(`${nV(this, hr)}`))) && (null == (a10 = nV(this, hi)) || a10.setAttribute(`${nV(this, hr)}`, `${this.value}`));
    }
    remove(...e10) {
      var t10;
      e10.forEach((e11) => nV(this, hs).delete(e11)), null == (t10 = nV(this, hi)) || t10.setAttribute(`${nV(this, hr)}`, `${this.value}`);
    }
    contains(e10) {
      return nV(this, ho, hl).has(e10);
    }
    toggle(e10, t10) {
      if (void 0 !== t10) if (t10) return this.add(e10), true;
      else return this.remove(e10), false;
      return this.contains(e10) ? (this.remove(e10), false) : (this.add(e10), true);
    }
    replace(e10, t10) {
      return this.remove(e10), this.add(t10), e10 === t10;
    }
  }
  hi = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), hn = /* @__PURE__ */ new WeakMap(), hs = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakSet(), hl = function() {
    return nV(this, hs).size ? nV(this, hs) : nV(this, hn);
  };
  try {
    var nG = "u" > typeof window ? window : e.g;
    nG._sentryModuleMetadata = nG._sentryModuleMetadata || {}, nG._sentryModuleMetadata[new nG.Error().stack] = Object.assign({}, nG._sentryModuleMetadata[new nG.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let nY = (e10 = "") => {
    let [t10, a10, i10] = e10.split(":"), r10 = i10 ? decodeURIComponent(i10) : void 0;
    return { kind: "cc" === t10 ? rA.CAPTIONS : rA.SUBTITLES, language: a10, label: r10 };
  }, nQ = (e10 = "", t10 = {}) => ((e11 = "") => e11.split(/\s+/))(e10).map((e11) => {
    let a10 = nY(e11);
    return { ...t10, ...a10 };
  }), nz = (e10) => e10 ? Array.isArray(e10) ? e10.map((e11) => "string" == typeof e11 ? nY(e11) : e11) : "string" == typeof e10 ? nQ(e10) : [e10] : [], nZ = ({ kind: e10, label: t10, language: a10 } = { kind: "subtitles" }) => t10 ? `${"captions" === e10 ? "cc" : "sb"}:${a10}:${encodeURIComponent(t10)}` : a10, nX = (e10 = []) => Array.prototype.map.call(e10, nZ).join(" "), nJ = (e10) => {
    let t10 = Object.entries(e10).map(([e11, t11]) => (a10) => a10[e11] === t11);
    return (e11) => t10.every((t11) => t11(e11));
  }, n0 = (e10, t10 = [], a10 = []) => {
    let i10 = nz(a10).map(nJ);
    Array.from(t10).filter((e11) => i10.some((t11) => t11(e11))).forEach((t11) => {
      t11.mode = e10;
    });
  }, n1 = (e10, t10 = () => true) => {
    if (!(null == e10 ? void 0 : e10.textTracks)) return [];
    let a10 = "function" == typeof t10 ? t10 : nJ(t10);
    return Array.from(e10.textTracks).filter(a10);
  }, n2 = (e10) => {
    var t10;
    return !!(null == (t10 = e10.mediaSubtitlesShowing) ? void 0 : t10.length) || e10.hasAttribute(rE.MEDIA_SUBTITLES_SHOWING);
  };
  try {
    var n3 = "u" > typeof window ? window : e.g;
    n3._sentryModuleMetadata = n3._sentryModuleMetadata || {}, n3._sentryModuleMetadata[new n3.Error().stack] = Object.assign({}, n3._sentryModuleMetadata[new n3.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let n4 = "exitFullscreen" in r3 ? "exitFullscreen" : "webkitExitFullscreen" in r3 ? "webkitExitFullscreen" : "webkitCancelFullScreen" in r3 ? "webkitCancelFullScreen" : void 0, n5 = "fullscreenElement" in r3 ? "fullscreenElement" : "webkitFullscreenElement" in r3 ? "webkitFullscreenElement" : void 0, n9 = "fullscreenEnabled" in r3 ? "fullscreenEnabled" : "webkitFullscreenEnabled" in r3 ? "webkitFullscreenEnabled" : void 0;
  try {
    var n8 = "u" > typeof window ? window : e.g;
    n8._sentryModuleMetadata = n8._sentryModuleMetadata || {}, n8._sentryModuleMetadata[new n8.Error().stack] = Object.assign({}, n8._sentryModuleMetadata[new n8.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let n6 = () => {
    var e10;
    return a || (a = null == (e10 = null == r3 ? void 0 : r3.createElement) ? void 0 : e10.call(r3, "video"));
  }, n7 = async (e10 = n6()) => {
    if (!e10) return false;
    let t10 = e10.volume;
    e10.volume = t10 / 2 + 0.1;
    let a10 = new AbortController(), i10 = await Promise.race([se(e10, a10.signal), st(e10, t10)]);
    return a10.abort(), i10;
  }, se = (e10, t10) => new Promise((a10) => {
    e10.addEventListener("volumechange", () => a10(true), { signal: t10 });
  }), st = async (e10, t10) => {
    for (let a10 = 0; a10 < 10; a10++) {
      if (e10.volume === t10) return false;
      await rU(10);
    }
    return e10.volume !== t10;
  }, sa = /.*Version\/.*Safari\/.*/.test(r2.navigator.userAgent), si = (e10 = n6()) => (!r2.matchMedia("(display-mode: standalone)").matches || !sa) && "function" == typeof (null == e10 ? void 0 : e10.requestPictureInPicture), sr = (e10 = n6()) => ((e11) => {
    let { documentElement: t10, media: a10 } = e11;
    return !!(null == t10 ? void 0 : t10[n9]) || a10 && "webkitSupportsFullscreen" in a10;
  })({ documentElement: r3, media: e10 }), sn = sr(), ss = si(), so = !!r2.WebKitPlaybackTargetAvailabilityEvent, sl = !!r2.chrome;
  try {
    var sd = "u" > typeof window ? window : e.g;
    sd._sentryModuleMetadata = sd._sentryModuleMetadata || {}, sd._sentryModuleMetadata[new sd.Error().stack] = Object.assign({}, sd._sentryModuleMetadata[new sd.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let su = (e10) => n1(e10.media, (e11) => [rA.SUBTITLES, rA.CAPTIONS].includes(e11.kind)).sort((e11, t10) => e11.kind >= t10.kind ? 1 : -1), sc = (e10) => n1(e10.media, (e11) => e11.mode === rk.SHOWING && [rA.SUBTITLES, rA.CAPTIONS].includes(e11.kind)), sh = (e10, t10) => {
    let a10 = su(e10), i10 = sc(e10), r10 = !!i10.length;
    if (a10.length) {
      if (false === t10 || r10 && true !== t10) n0(rk.DISABLED, a10, i10);
      else if (true === t10 || !r10 && false !== t10) {
        let t11 = a10[0], { options: r11 } = e10;
        if (!(null == r11 ? void 0 : r11.noSubtitlesLangPref)) {
          let e11 = r2.localStorage.getItem("media-chrome-pref-subtitles-lang"), i11 = e11 ? [e11, ...r2.navigator.languages] : r2.navigator.languages, r12 = a10.filter((e12) => i11.some((t12) => e12.language.toLowerCase().startsWith(t12.split("-")[0]))).sort((e12, t12) => i11.findIndex((t13) => e12.language.toLowerCase().startsWith(t13.split("-")[0])) - i11.findIndex((e13) => t12.language.toLowerCase().startsWith(e13.split("-")[0])));
          r12[0] && (t11 = r12[0]);
        }
        let { language: n10, label: s10, kind: o10 } = t11;
        n0(rk.DISABLED, a10, i10), n0(rk.SHOWING, a10, [{ language: n10, label: s10, kind: o10 }]);
      }
    }
  }, sm = (e10, t10) => e10 === t10 || null != e10 && null != t10 && typeof e10 == typeof t10 && (!!("number" == typeof e10 && Number.isNaN(e10) && Number.isNaN(t10)) || "object" == typeof e10 && (Array.isArray(e10) ? sp(e10, t10) : Object.entries(e10).every(([e11, a10]) => e11 in t10 && sm(a10, t10[e11])))), sp = (e10, t10) => {
    let a10 = Array.isArray(e10), i10 = Array.isArray(t10);
    return a10 === i10 && (!a10 && !i10 || e10.length === t10.length && e10.every((e11, a11) => sm(e11, t10[a11])));
  };
  try {
    var sv = "u" > typeof window ? window : e.g;
    sv._sentryModuleMetadata = sv._sentryModuleMetadata || {}, sv._sentryModuleMetadata[new sv.Error().stack] = Object.assign({}, sv._sentryModuleMetadata[new sv.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let sb = Object.values(rI), sg = n7().then((e10) => i = e10), sy = async (...e10) => {
    await Promise.all(e10.filter((e11) => e11).map(async (e11) => {
      if (!("localName" in e11 && e11 instanceof r2.HTMLElement)) return;
      let t10 = e11.localName;
      if (!t10.includes("-")) return;
      let a10 = r2.customElements.get(t10);
      a10 && e11 instanceof a10 || (await r2.customElements.whenDefined(t10), r2.customElements.upgrade(e11));
    }));
  }, sf = new r2.DOMParser(), sE = { mediaError: { get(e10, t10) {
    let { media: a10 } = e10;
    if ((null == t10 ? void 0 : t10.type) !== "playing") return null == a10 ? void 0 : a10.error;
  }, mediaEvents: ["emptied", "error", "playing"] }, mediaErrorCode: { get(e10, t10) {
    var a10;
    let { media: i10 } = e10;
    if ((null == t10 ? void 0 : t10.type) !== "playing") return null == (a10 = null == i10 ? void 0 : i10.error) ? void 0 : a10.code;
  }, mediaEvents: ["emptied", "error", "playing"] }, mediaErrorMessage: { get(e10, t10) {
    var a10, i10;
    let { media: r10 } = e10;
    if ((null == t10 ? void 0 : t10.type) !== "playing") return null != (i10 = null == (a10 = null == r10 ? void 0 : r10.error) ? void 0 : a10.message) ? i10 : "";
  }, mediaEvents: ["emptied", "error", "playing"] }, mediaWidth: { get(e10) {
    var t10;
    let { media: a10 } = e10;
    return null != (t10 = null == a10 ? void 0 : a10.videoWidth) ? t10 : 0;
  }, mediaEvents: ["resize"] }, mediaHeight: { get(e10) {
    var t10;
    let { media: a10 } = e10;
    return null != (t10 = null == a10 ? void 0 : a10.videoHeight) ? t10 : 0;
  }, mediaEvents: ["resize"] }, mediaPaused: { get(e10) {
    var t10;
    let { media: a10 } = e10;
    return null == (t10 = null == a10 ? void 0 : a10.paused) || t10;
  }, set(e10, t10) {
    var a10;
    let { media: i10 } = t10;
    i10 && (e10 ? i10.pause() : null == (a10 = i10.play()) || a10.catch(() => {
    }));
  }, mediaEvents: ["play", "playing", "pause", "emptied"] }, mediaHasPlayed: { get(e10, t10) {
    let { media: a10 } = e10;
    return !!a10 && (t10 ? "playing" === t10.type : !a10.paused);
  }, mediaEvents: ["playing", "emptied"] }, mediaEnded: { get(e10) {
    var t10;
    let { media: a10 } = e10;
    return null != (t10 = null == a10 ? void 0 : a10.ended) && t10;
  }, mediaEvents: ["seeked", "ended", "emptied"] }, mediaPlaybackRate: { get(e10) {
    var t10;
    let { media: a10 } = e10;
    return null != (t10 = null == a10 ? void 0 : a10.playbackRate) ? t10 : 1;
  }, set(e10, t10) {
    let { media: a10 } = t10;
    !a10 || Number.isFinite(+e10) && (a10.playbackRate = +e10);
  }, mediaEvents: ["ratechange", "loadstart"] }, mediaMuted: { get(e10) {
    var t10;
    let { media: a10 } = e10;
    return null != (t10 = null == a10 ? void 0 : a10.muted) && t10;
  }, set(e10, t10) {
    let { media: a10, options: { noMutedPref: i10 } = {} } = t10;
    if (a10) {
      a10.muted = e10;
      try {
        let t11 = null !== r2.localStorage.getItem("media-chrome-pref-muted"), r10 = a10.hasAttribute("muted");
        if (i10) {
          t11 && r2.localStorage.removeItem("media-chrome-pref-muted");
          return;
        }
        if (r10 && !t11) return;
        r2.localStorage.setItem("media-chrome-pref-muted", e10 ? "true" : "false");
      } catch (e11) {
        console.debug("Error setting muted pref", e11);
      }
    }
  }, mediaEvents: ["volumechange"], stateOwnersUpdateHandlers: [(e10, t10) => {
    let { options: { noMutedPref: a10 } } = t10, { media: i10 } = t10;
    if (i10 && !i10.muted && !a10) try {
      let a11 = "true" === r2.localStorage.getItem("media-chrome-pref-muted");
      sE.mediaMuted.set(a11, t10), e10(a11);
    } catch (e11) {
      console.debug("Error getting muted pref", e11);
    }
  }] }, mediaLoop: { get(e10) {
    let { media: t10 } = e10;
    return null == t10 ? void 0 : t10.loop;
  }, set(e10, t10) {
    let { media: a10 } = t10;
    a10 && (a10.loop = e10);
  }, mediaEvents: ["medialooprequest"] }, mediaVolume: { get(e10) {
    var t10;
    let { media: a10 } = e10;
    return null != (t10 = null == a10 ? void 0 : a10.volume) ? t10 : 1;
  }, set(e10, t10) {
    let { media: a10, options: { noVolumePref: i10 } = {} } = t10;
    if (a10) {
      try {
        null == e10 ? r2.localStorage.removeItem("media-chrome-pref-volume") : a10.hasAttribute("muted") || i10 || r2.localStorage.setItem("media-chrome-pref-volume", e10.toString());
      } catch (e11) {
        console.debug("Error setting volume pref", e11);
      }
      Number.isFinite(+e10) && (a10.volume = +e10);
    }
  }, mediaEvents: ["volumechange"], stateOwnersUpdateHandlers: [(e10, t10) => {
    let { options: { noVolumePref: a10 } } = t10;
    if (!a10) try {
      let { media: a11 } = t10;
      if (!a11) return;
      let i10 = r2.localStorage.getItem("media-chrome-pref-volume");
      if (null == i10) return;
      sE.mediaVolume.set(+i10, t10), e10(+i10);
    } catch (e11) {
      console.debug("Error getting volume pref", e11);
    }
  }] }, mediaVolumeLevel: { get(e10) {
    let { media: t10 } = e10;
    return void 0 === (null == t10 ? void 0 : t10.volume) ? "high" : t10.muted || 0 === t10.volume ? "off" : t10.volume < 0.5 ? "low" : t10.volume < 0.75 ? "medium" : "high";
  }, mediaEvents: ["volumechange"] }, mediaCurrentTime: { get(e10) {
    var t10;
    let { media: a10 } = e10;
    return null != (t10 = null == a10 ? void 0 : a10.currentTime) ? t10 : 0;
  }, set(e10, t10) {
    let { media: a10 } = t10;
    a10 && rO(e10) && (a10.currentTime = e10);
  }, mediaEvents: ["timeupdate", "loadedmetadata"] }, mediaDuration: { get(e10) {
    let { media: t10, options: { defaultDuration: a10 } = {} } = e10;
    return a10 && (!t10 || !t10.duration || Number.isNaN(t10.duration) || !Number.isFinite(t10.duration)) ? a10 : Number.isFinite(null == t10 ? void 0 : t10.duration) ? t10.duration : NaN;
  }, mediaEvents: ["durationchange", "loadedmetadata", "emptied"] }, mediaLoading: { get(e10) {
    let { media: t10 } = e10;
    return (null == t10 ? void 0 : t10.readyState) < 3;
  }, mediaEvents: ["waiting", "playing", "emptied"] }, mediaSeekable: { get(e10) {
    var t10;
    let { media: a10 } = e10;
    if (!(null == (t10 = null == a10 ? void 0 : a10.seekable) ? void 0 : t10.length)) return;
    let i10 = a10.seekable.start(0), r10 = a10.seekable.end(a10.seekable.length - 1);
    if (i10 || r10) return [Number(i10.toFixed(3)), Number(r10.toFixed(3))];
  }, mediaEvents: ["loadedmetadata", "emptied", "progress", "seekablechange"] }, mediaBuffered: { get(e10) {
    var t10;
    let { media: a10 } = e10, i10 = null != (t10 = null == a10 ? void 0 : a10.buffered) ? t10 : [];
    return Array.from(i10).map((e11, t11) => [Number(i10.start(t11).toFixed(3)), Number(i10.end(t11).toFixed(3))]);
  }, mediaEvents: ["progress", "emptied"] }, mediaStreamType: { get(e10) {
    let { media: t10, options: { defaultStreamType: a10 } = {} } = e10, i10 = [rI.LIVE, rI.ON_DEMAND].includes(a10) ? a10 : void 0;
    if (!t10) return i10;
    let { streamType: r10 } = t10;
    if (sb.includes(r10)) return r10 === rI.UNKNOWN ? i10 : r10;
    let n10 = t10.duration;
    return n10 === 1 / 0 ? rI.LIVE : Number.isFinite(n10) ? rI.ON_DEMAND : i10;
  }, mediaEvents: ["emptied", "durationchange", "loadedmetadata", "streamtypechange"] }, mediaTargetLiveWindow: { get(e10) {
    let { media: t10 } = e10;
    if (!t10) return NaN;
    let { targetLiveWindow: a10 } = t10, i10 = sE.mediaStreamType.get(e10);
    return (null == a10 || Number.isNaN(a10)) && i10 === rI.LIVE ? 0 : a10;
  }, mediaEvents: ["emptied", "durationchange", "loadedmetadata", "streamtypechange", "targetlivewindowchange"] }, mediaTimeIsLive: { get(e10) {
    let { media: t10, options: { liveEdgeOffset: a10 = 10 } = {} } = e10;
    if (!t10) return false;
    if ("number" == typeof t10.liveEdgeStart) return !Number.isNaN(t10.liveEdgeStart) && t10.currentTime >= t10.liveEdgeStart;
    if (sE.mediaStreamType.get(e10) !== rI.LIVE) return false;
    let i10 = t10.seekable;
    if (!i10) return true;
    if (!i10.length) return false;
    let r10 = i10.end(i10.length - 1) - a10;
    return t10.currentTime >= r10;
  }, mediaEvents: ["playing", "timeupdate", "progress", "waiting", "emptied"] }, mediaSubtitlesList: { get: (e10) => su(e10).map(({ kind: e11, label: t10, language: a10 }) => ({ kind: e11, label: t10, language: a10 })), mediaEvents: ["loadstart"], textTracksEvents: ["addtrack", "removetrack"] }, mediaSubtitlesShowing: { get: (e10) => sc(e10).map(({ kind: e11, label: t10, language: a10 }) => ({ kind: e11, label: t10, language: a10 })), mediaEvents: ["loadstart"], textTracksEvents: ["addtrack", "removetrack", "change"], stateOwnersUpdateHandlers: [(e10, t10) => {
    var a10, i10;
    let { media: r10, options: n10 } = t10;
    if (!r10) return;
    let s10 = (e11) => {
      var a11;
      n10.defaultSubtitles && (e11 && ![rA.CAPTIONS, rA.SUBTITLES].includes(null == (a11 = null == e11 ? void 0 : e11.track) ? void 0 : a11.kind) || sh(t10, true));
    };
    return r10.addEventListener("loadstart", s10), null == (a10 = r10.textTracks) || a10.addEventListener("addtrack", s10), null == (i10 = r10.textTracks) || i10.addEventListener("removetrack", s10), () => {
      var e11, t11;
      r10.removeEventListener("loadstart", s10), null == (e11 = r10.textTracks) || e11.removeEventListener("addtrack", s10), null == (t11 = r10.textTracks) || t11.removeEventListener("removetrack", s10);
    };
  }] }, mediaChaptersCues: { get(e10) {
    var t10;
    let { media: a10 } = e10;
    if (!a10) return [];
    let [i10] = n1(a10, { kind: rA.CHAPTERS });
    return Array.from(null != (t10 = null == i10 ? void 0 : i10.cues) ? t10 : []).map(({ text: e11, startTime: t11, endTime: a11 }) => ({ text: e11 && sf.parseFromString(e11, "text/html").body.textContent || e11, startTime: t11, endTime: a11 }));
  }, mediaEvents: ["loadstart", "loadedmetadata"], textTracksEvents: ["addtrack", "removetrack", "change"], stateOwnersUpdateHandlers: [(e10, t10) => {
    var a10;
    let { media: i10 } = t10;
    if (!i10) return;
    let r10 = i10.querySelector('track[kind="chapters"][default][src]'), n10 = null == (a10 = i10.shadowRoot) ? void 0 : a10.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');
    return null == r10 || r10.addEventListener("load", e10), null == n10 || n10.addEventListener("load", e10), () => {
      null == r10 || r10.removeEventListener("load", e10), null == n10 || n10.removeEventListener("load", e10);
    };
  }] }, mediaIsPip: { get(e10) {
    var t10, a10;
    let { media: i10, documentElement: r10 } = e10;
    if (!i10 || !r10 || !r10.pictureInPictureElement) return false;
    if (r10.pictureInPictureElement === i10) return true;
    if (r10.pictureInPictureElement instanceof HTMLMediaElement) return !!(null == (t10 = i10.localName) ? void 0 : t10.includes("-")) && ns(i10, r10.pictureInPictureElement);
    if (r10.pictureInPictureElement.localName.includes("-")) {
      let e11 = r10.pictureInPictureElement.shadowRoot;
      for (; null == e11 ? void 0 : e11.pictureInPictureElement; ) {
        if (e11.pictureInPictureElement === i10) return true;
        e11 = null == (a10 = e11.pictureInPictureElement) ? void 0 : a10.shadowRoot;
      }
    }
    return false;
  }, set(e10, t10) {
    let { media: a10 } = t10;
    if (a10) if (e10) {
      if (!r3.pictureInPictureEnabled) return void console.warn("MediaChrome: Picture-in-picture is not enabled");
      if (!a10.requestPictureInPicture) return void console.warn("MediaChrome: The current media does not support picture-in-picture");
      let e11 = () => {
        console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.");
      };
      a10.requestPictureInPicture().catch((t11) => {
        if (11 === t11.code) {
          if (!a10.src) return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");
          if (0 === a10.readyState && "none" === a10.preload) {
            let t12 = () => {
              a10.removeEventListener("loadedmetadata", i10), a10.preload = "none";
            }, i10 = () => {
              a10.requestPictureInPicture().catch(e11), t12();
            };
            a10.addEventListener("loadedmetadata", i10), a10.preload = "metadata", setTimeout(() => {
              0 === a10.readyState && e11(), t12();
            }, 1e3);
          } else throw t11;
        } else throw t11;
      });
    } else r3.pictureInPictureElement && r3.exitPictureInPicture();
  }, mediaEvents: ["enterpictureinpicture", "leavepictureinpicture"] }, mediaRenditionList: { get(e10) {
    var t10;
    let { media: a10 } = e10;
    return [...null != (t10 = null == a10 ? void 0 : a10.videoRenditions) ? t10 : []].map((e11) => ({ ...e11 }));
  }, mediaEvents: ["emptied", "loadstart"], videoRenditionsEvents: ["addrendition", "removerendition"] }, mediaRenditionSelected: { get(e10) {
    var t10, a10, i10;
    let { media: r10 } = e10;
    return null == (i10 = null == (a10 = null == r10 ? void 0 : r10.videoRenditions) ? void 0 : a10[null == (t10 = r10.videoRenditions) ? void 0 : t10.selectedIndex]) ? void 0 : i10.id;
  }, set(e10, t10) {
    let { media: a10 } = t10;
    if (!(null == a10 ? void 0 : a10.videoRenditions)) return void console.warn("MediaController: Rendition selection not supported by this media.");
    let i10 = Array.prototype.findIndex.call(a10.videoRenditions, (t11) => t11.id == e10);
    a10.videoRenditions.selectedIndex != i10 && (a10.videoRenditions.selectedIndex = i10);
  }, mediaEvents: ["emptied"], videoRenditionsEvents: ["addrendition", "removerendition", "change"] }, mediaAudioTrackList: { get(e10) {
    var t10;
    let { media: a10 } = e10;
    return [...null != (t10 = null == a10 ? void 0 : a10.audioTracks) ? t10 : []];
  }, mediaEvents: ["emptied", "loadstart"], audioTracksEvents: ["addtrack", "removetrack"] }, mediaAudioTrackEnabled: { get(e10) {
    var t10, a10;
    let { media: i10 } = e10;
    return null == (a10 = [...null != (t10 = null == i10 ? void 0 : i10.audioTracks) ? t10 : []].find((e11) => e11.enabled)) ? void 0 : a10.id;
  }, set(e10, t10) {
    let { media: a10 } = t10;
    if (!(null == a10 ? void 0 : a10.audioTracks)) return void console.warn("MediaChrome: Audio track selection not supported by this media.");
    for (let t11 of a10.audioTracks) t11.enabled = e10 == t11.id;
  }, mediaEvents: ["emptied"], audioTracksEvents: ["addtrack", "removetrack", "change"] }, mediaIsFullscreen: { get: (e10) => ((e11) => {
    var t10;
    let { media: a10, documentElement: i10, fullscreenElement: r10 = a10 } = e11;
    if (!a10 || !i10) return false;
    let n10 = ((e12) => {
      let { documentElement: t11, media: a11 } = e12, i11 = null == t11 ? void 0 : t11[n5];
      return !i11 && "webkitDisplayingFullscreen" in a11 && "webkitPresentationMode" in a11 && a11.webkitDisplayingFullscreen && a11.webkitPresentationMode === rR.FULLSCREEN ? a11 : i11;
    })(e11);
    if (!n10) return false;
    if (n10 === r10 || n10 === a10) return true;
    if (n10.localName.includes("-")) {
      let e12 = n10.shadowRoot;
      if (!(n5 in e12)) return ns(n10, r10);
      for (; null == e12 ? void 0 : e12[n5]; ) {
        if (e12[n5] === r10) return true;
        e12 = null == (t10 = e12[n5]) ? void 0 : t10.shadowRoot;
      }
    }
    return false;
  })(e10), set(e10, t10, a10) {
    var i10, r10;
    e10 ? (((e11) => {
      var t11;
      let { media: a11, fullscreenElement: i11 } = e11;
      try {
        let e12 = i11 && "requestFullscreen" in i11 ? "requestFullscreen" : i11 && "webkitRequestFullScreen" in i11 ? "webkitRequestFullScreen" : void 0;
        if (e12) {
          let a12 = null == (t11 = i11[e12]) ? void 0 : t11.call(i11);
          if (a12 instanceof Promise) return a12.catch(() => {
          });
        } else (null == a11 ? void 0 : a11.webkitEnterFullscreen) ? a11.webkitEnterFullscreen() : (null == a11 ? void 0 : a11.requestFullscreen) && a11.requestFullscreen();
      } catch (e12) {
        console.error(e12);
      }
    })(t10), !a10.detail || (null == (i10 = t10.media) ? void 0 : i10.inert) || null == (r10 = t10.media) || r10.focus()) : ((e11) => {
      var t11;
      let { documentElement: a11 } = e11;
      if (n4) {
        let e12 = null == (t11 = null == a11 ? void 0 : a11[n4]) ? void 0 : t11.call(a11);
        if (e12 instanceof Promise) return e12.catch(() => {
        });
      }
    })(t10);
  }, rootEvents: ["fullscreenchange", "webkitfullscreenchange"], mediaEvents: ["webkitbeginfullscreen", "webkitendfullscreen", "webkitpresentationmodechanged"] }, mediaIsCasting: { get(e10) {
    var t10;
    let { media: a10 } = e10;
    return !!(null == a10 ? void 0 : a10.remote) && (null == (t10 = a10.remote) ? void 0 : t10.state) !== "disconnected" && !!a10.remote.state;
  }, set(e10, t10) {
    var a10, i10;
    let { media: r10 } = t10;
    if (r10 && (!e10 || (null == (a10 = r10.remote) ? void 0 : a10.state) === "disconnected") && (e10 || (null == (i10 = r10.remote) ? void 0 : i10.state) === "connected")) {
      if ("function" != typeof r10.remote.prompt) return void console.warn("MediaChrome: Casting is not supported in this environment");
      r10.remote.prompt().catch(() => {
      });
    }
  }, remoteEvents: ["connect", "connecting", "disconnect"] }, mediaIsAirplaying: { get: () => false, set(e10, t10) {
    let { media: a10 } = t10;
    if (a10) {
      if (!(a10.webkitShowPlaybackTargetPicker && r2.WebKitPlaybackTargetAvailabilityEvent)) return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");
      a10.webkitShowPlaybackTargetPicker();
    }
  }, mediaEvents: ["webkitcurrentplaybacktargetiswirelesschanged"] }, mediaFullscreenUnavailable: { get(e10) {
    let { media: t10 } = e10;
    if (!sn || !sr(t10)) return rS.UNSUPPORTED;
  } }, mediaPipUnavailable: { get(e10) {
    let { media: t10 } = e10;
    return ss && si(t10) ? (null == t10 ? void 0 : t10.disablePictureInPicture) ? rS.UNAVAILABLE : void 0 : rS.UNSUPPORTED;
  } }, mediaVolumeUnavailable: { get(e10) {
    let { media: t10 } = e10;
    if (false === i || (null == t10 ? void 0 : t10.volume) == void 0) return rS.UNSUPPORTED;
  }, stateOwnersUpdateHandlers: [(e10) => {
    null == i && sg.then((t10) => e10(t10 ? void 0 : rS.UNSUPPORTED));
  }] }, mediaCastUnavailable: { get(e10, { availability: t10 = "not-available" } = {}) {
    var a10;
    let { media: i10 } = e10;
    return sl && (null == (a10 = null == i10 ? void 0 : i10.remote) ? void 0 : a10.state) ? null != t10 && "available" !== t10 ? rS.UNAVAILABLE : void 0 : rS.UNSUPPORTED;
  }, stateOwnersUpdateHandlers: [(e10, t10) => {
    var a10;
    let { media: i10 } = t10;
    if (i10) return i10.disableRemotePlayback || i10.hasAttribute("disableremoteplayback") || null == (a10 = null == i10 ? void 0 : i10.remote) || a10.watchAvailability((t11) => {
      e10({ availability: t11 ? "available" : "not-available" });
    }).catch((t11) => {
      "NotSupportedError" === t11.name ? e10({ availability: null }) : e10({ availability: "not-available" });
    }), () => {
      var e11;
      null == (e11 = null == i10 ? void 0 : i10.remote) || e11.cancelWatchAvailability().catch(() => {
      });
    };
  }] }, mediaAirplayUnavailable: { get: (e10, t10) => so ? (null == t10 ? void 0 : t10.availability) === "not-available" ? rS.UNAVAILABLE : void 0 : rS.UNSUPPORTED, mediaEvents: ["webkitplaybacktargetavailabilitychanged"], stateOwnersUpdateHandlers: [(e10, t10) => {
    var a10;
    let { media: i10 } = t10;
    if (i10) return i10.disableRemotePlayback || i10.hasAttribute("disableremoteplayback") || null == (a10 = null == i10 ? void 0 : i10.remote) || a10.watchAvailability((t11) => {
      e10({ availability: t11 ? "available" : "not-available" });
    }).catch((t11) => {
      "NotSupportedError" === t11.name ? e10({ availability: null }) : e10({ availability: "not-available" });
    }), () => {
      var e11;
      null == (e11 = null == i10 ? void 0 : i10.remote) || e11.cancelWatchAvailability().catch(() => {
      });
    };
  }] }, mediaRenditionUnavailable: { get(e10) {
    var t10;
    let { media: a10 } = e10;
    return (null == a10 ? void 0 : a10.videoRenditions) ? (null == (t10 = a10.videoRenditions) ? void 0 : t10.length) ? void 0 : rS.UNAVAILABLE : rS.UNSUPPORTED;
  }, mediaEvents: ["emptied", "loadstart"], videoRenditionsEvents: ["addrendition", "removerendition"] }, mediaAudioTrackUnavailable: { get(e10) {
    var t10, a10;
    let { media: i10 } = e10;
    return (null == i10 ? void 0 : i10.audioTracks) ? (null != (a10 = null == (t10 = i10.audioTracks) ? void 0 : t10.length) ? a10 : 0) <= 1 ? rS.UNAVAILABLE : void 0 : rS.UNSUPPORTED;
  }, mediaEvents: ["emptied", "loadstart"], audioTracksEvents: ["addtrack", "removetrack"] }, mediaLang: { get(e10) {
    let { options: { mediaLang: t10 } = {} } = e10;
    return null != t10 ? t10 : "en";
  } } };
  try {
    var s_ = "u" > typeof window ? window : e.g;
    s_._sentryModuleMetadata = s_._sentryModuleMetadata || {}, s_._sentryModuleMetadata[new s_.Error().stack] = Object.assign({}, s_._sentryModuleMetadata[new s_.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let sw = { [rb.MEDIA_PREVIEW_REQUEST](e10, t10, { detail: a10 }) {
    var i10, r10, n10;
    let s10, o10, { media: l10 } = t10, d10 = null != a10 ? a10 : void 0;
    if (l10 && null != d10) {
      let [e11] = n1(l10, { kind: rA.METADATA, label: "thumbnails" }), t11 = Array.prototype.find.call(null != (i10 = null == e11 ? void 0 : e11.cues) ? i10 : [], (e12, t12, a11) => 0 === t12 ? e12.endTime > d10 : t12 === a11.length - 1 ? e12.startTime <= d10 : e12.startTime <= d10 && e12.endTime > d10);
      if (t11) {
        let e12 = /'^(?:[a-z]+:)?\/\//i.test(t11.text) || null == (r10 = null == l10 ? void 0 : l10.querySelector('track[label="thumbnails"]')) ? void 0 : r10.src, a11 = new URL(t11.text, e12);
        o10 = new URLSearchParams(a11.hash).get("#xywh").split(",").map((e13) => +e13), s10 = a11.href;
      }
    }
    let u10 = e10.mediaDuration.get(t10), c10 = null == (n10 = e10.mediaChaptersCues.get(t10).find((e11, t11, a11) => t11 === a11.length - 1 && u10 === e11.endTime ? e11.startTime <= d10 && e11.endTime >= d10 : e11.startTime <= d10 && e11.endTime > d10)) ? void 0 : n10.text;
    return null != a10 && null == c10 && (c10 = ""), { mediaPreviewTime: d10, mediaPreviewImage: s10, mediaPreviewCoords: o10, mediaPreviewChapter: c10 };
  }, [rb.MEDIA_PAUSE_REQUEST](e10, t10) {
    e10.mediaPaused.set(true, t10);
  }, [rb.MEDIA_PLAY_REQUEST](e10, t10) {
    var a10, i10, r10, n10;
    let s10 = e10.mediaStreamType.get(t10) === rI.LIVE, o10 = !(null == (a10 = t10.options) ? void 0 : a10.noAutoSeekToLive), l10 = e10.mediaTargetLiveWindow.get(t10) > 0;
    if (s10 && o10 && !l10) {
      let a11 = null == (i10 = e10.mediaSeekable.get(t10)) ? void 0 : i10[1];
      if (a11) {
        let i11 = null != (n10 = null == (r10 = t10.options) ? void 0 : r10.seekToLiveOffset) ? n10 : 0;
        e10.mediaCurrentTime.set(a11 - i11, t10);
      }
    }
    e10.mediaPaused.set(false, t10);
  }, [rb.MEDIA_PLAYBACK_RATE_REQUEST](e10, t10, { detail: a10 }) {
    e10.mediaPlaybackRate.set(a10, t10);
  }, [rb.MEDIA_MUTE_REQUEST](e10, t10) {
    e10.mediaMuted.set(true, t10);
  }, [rb.MEDIA_UNMUTE_REQUEST](e10, t10) {
    e10.mediaVolume.get(t10) || e10.mediaVolume.set(0.25, t10), e10.mediaMuted.set(false, t10);
  }, [rb.MEDIA_LOOP_REQUEST](e10, t10, { detail: a10 }) {
    let i10 = !!a10;
    return e10.mediaLoop.set(i10, t10), { mediaLoop: i10 };
  }, [rb.MEDIA_VOLUME_REQUEST](e10, t10, { detail: a10 }) {
    a10 && e10.mediaMuted.get(t10) && e10.mediaMuted.set(false, t10), e10.mediaVolume.set(a10, t10);
  }, [rb.MEDIA_SEEK_REQUEST](e10, t10, { detail: a10 }) {
    e10.mediaCurrentTime.set(a10, t10);
  }, [rb.MEDIA_SEEK_TO_LIVE_REQUEST](e10, t10) {
    var a10, i10, r10;
    let n10 = null == (a10 = e10.mediaSeekable.get(t10)) ? void 0 : a10[1];
    if (Number.isNaN(Number(n10))) return;
    let s10 = null != (r10 = null == (i10 = t10.options) ? void 0 : i10.seekToLiveOffset) ? r10 : 0;
    e10.mediaCurrentTime.set(n10 - s10, t10);
  }, [rb.MEDIA_SHOW_SUBTITLES_REQUEST](e10, t10, { detail: a10 }) {
    var i10;
    let { options: r10 } = t10, n10 = su(t10), s10 = nz(a10), o10 = null == (i10 = s10[0]) ? void 0 : i10.language;
    o10 && !r10.noSubtitlesLangPref && r2.localStorage.setItem("media-chrome-pref-subtitles-lang", o10), n0(rk.SHOWING, n10, s10);
  }, [rb.MEDIA_DISABLE_SUBTITLES_REQUEST](e10, t10, { detail: a10 }) {
    let i10 = su(t10);
    n0(rk.DISABLED, i10, null != a10 ? a10 : []);
  }, [rb.MEDIA_TOGGLE_SUBTITLES_REQUEST](e10, t10, { detail: a10 }) {
    sh(t10, a10);
  }, [rb.MEDIA_RENDITION_REQUEST](e10, t10, { detail: a10 }) {
    e10.mediaRenditionSelected.set(a10, t10);
  }, [rb.MEDIA_AUDIO_TRACK_REQUEST](e10, t10, { detail: a10 }) {
    e10.mediaAudioTrackEnabled.set(a10, t10);
  }, [rb.MEDIA_ENTER_PIP_REQUEST](e10, t10) {
    e10.mediaIsFullscreen.get(t10) && e10.mediaIsFullscreen.set(false, t10), e10.mediaIsPip.set(true, t10);
  }, [rb.MEDIA_EXIT_PIP_REQUEST](e10, t10) {
    e10.mediaIsPip.set(false, t10);
  }, [rb.MEDIA_ENTER_FULLSCREEN_REQUEST](e10, t10, a10) {
    e10.mediaIsPip.get(t10) && e10.mediaIsPip.set(false, t10), e10.mediaIsFullscreen.set(true, t10, a10);
  }, [rb.MEDIA_EXIT_FULLSCREEN_REQUEST](e10, t10) {
    e10.mediaIsFullscreen.set(false, t10);
  }, [rb.MEDIA_ENTER_CAST_REQUEST](e10, t10) {
    e10.mediaIsFullscreen.get(t10) && e10.mediaIsFullscreen.set(false, t10), e10.mediaIsCasting.set(true, t10);
  }, [rb.MEDIA_EXIT_CAST_REQUEST](e10, t10) {
    e10.mediaIsCasting.set(false, t10);
  }, [rb.MEDIA_AIRPLAY_REQUEST](e10, t10) {
    e10.mediaIsAirplaying.set(true, t10);
  } };
  try {
    var sT = "u" > typeof window ? window : e.g;
    sT._sentryModuleMetadata = sT._sentryModuleMetadata || {}, sT._sentryModuleMetadata[new sT.Error().stack] = Object.assign({}, sT._sentryModuleMetadata[new sT.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var sA = "u" > typeof window ? window : e.g;
    sA._sentryModuleMetadata = sA._sentryModuleMetadata || {}, sA._sentryModuleMetadata[new sA.Error().stack] = Object.assign({}, sA._sentryModuleMetadata[new sA.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var sk = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, sM = (e10, t10, a10) => (sk(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), sS = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, sI = (e10, t10, a10, i10) => (sk(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10), sR = (e10, t10, a10) => (sk(e10, t10, "access private method"), a10);
  let sC = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Enter", " ", "f", "m", "k", "c", "l", "j", ">", "<", "p"], sL = "defaultsubtitles", sD = "defaultstreamtype", sx = "defaultduration", sP = "fullscreenelement", sO = "hotkeys", sN = "keyboardbackwardseekoffset", sU = "keyboardforwardseekoffset", sB = "keyboarddownvolumestep", sH = "keyboardupvolumestep", sW = "keysused", s$ = "lang", sq = "loop", sV = "liveedgeoffset", sK = "noautoseektolive", sF = "nodefaultstore", sj = "nohotkeys", sG = "nomutedpref", sY = "nosubtitleslangpref", sQ = "novolumepref", sz = "seektoliveoffset";
  class sZ extends nW {
    constructor() {
      super(), sS(this, hg), sS(this, hE), sS(this, hw), this.mediaStateReceivers = [], this.associatedElementSubscriptions = /* @__PURE__ */ new Map(), sS(this, hd, new nj(this, sO)), sS(this, hu, void 0), sS(this, hc, void 0), sS(this, hh, null), sS(this, hm, void 0), sS(this, hp, void 0), sS(this, hv, (e11) => {
        var t10;
        null == (t10 = sM(this, hc)) || t10.dispatch(e11);
      }), sS(this, hb, void 0), sS(this, hf, (e11) => {
        let { key: t10, shiftKey: a10 } = e11;
        a10 && ("/" === t10 || "?" === t10) || sC.includes(t10) ? this.keyboardShortcutHandler(e11) : this.removeEventListener("keyup", sM(this, hf));
      }), this.associateElement(this);
      let e10 = {};
      sI(this, hm, (t10) => {
        Object.entries(t10).forEach(([t11, a10]) => {
          if (t11 in e10 && e10[t11] === a10) return;
          this.propagateMediaState(t11, a10);
          let i10 = t11.toLowerCase(), r10 = new r2.CustomEvent(rT[i10], { composed: true, detail: a10 });
          this.dispatchEvent(r10);
        }), e10 = t10;
      });
    }
    static get observedAttributes() {
      return super.observedAttributes.concat(sj, sO, sD, sL, sx, sG, sQ, s$, sq, sV, sz, sK);
    }
    get mediaStore() {
      return sM(this, hc);
    }
    set mediaStore(e10) {
      var t10, a10;
      (sM(this, hc) && (null == (t10 = sM(this, hp)) || t10.call(this), sI(this, hp, void 0)), sI(this, hc, e10), sM(this, hc) || this.hasAttribute(sF)) ? sI(this, hp, null == (a10 = sM(this, hc)) ? void 0 : a10.subscribe(sM(this, hm))) : sR(this, hg, hy).call(this);
    }
    get fullscreenElement() {
      var e10;
      return null != (e10 = sM(this, hu)) ? e10 : this;
    }
    set fullscreenElement(e10) {
      var t10;
      this.hasAttribute(sP) && this.removeAttribute(sP), sI(this, hu, e10), null == (t10 = sM(this, hc)) || t10.dispatch({ type: "fullscreenelementchangerequest", detail: this.fullscreenElement });
    }
    get defaultSubtitles() {
      return nv(this, sL);
    }
    set defaultSubtitles(e10) {
      nb(this, sL, e10);
    }
    get defaultStreamType() {
      return ng(this, sD);
    }
    set defaultStreamType(e10) {
      ny(this, sD, e10);
    }
    get defaultDuration() {
      return nm(this, sx);
    }
    set defaultDuration(e10) {
      np(this, sx, e10);
    }
    get noHotkeys() {
      return nv(this, sj);
    }
    set noHotkeys(e10) {
      nb(this, sj, e10);
    }
    get keysUsed() {
      return ng(this, sW);
    }
    set keysUsed(e10) {
      ny(this, sW, e10);
    }
    get liveEdgeOffset() {
      return nm(this, sV);
    }
    set liveEdgeOffset(e10) {
      np(this, sV, e10);
    }
    get noAutoSeekToLive() {
      return nv(this, sK);
    }
    set noAutoSeekToLive(e10) {
      nb(this, sK, e10);
    }
    get noVolumePref() {
      return nv(this, sQ);
    }
    set noVolumePref(e10) {
      nb(this, sQ, e10);
    }
    get noMutedPref() {
      return nv(this, sG);
    }
    set noMutedPref(e10) {
      nb(this, sG, e10);
    }
    get noSubtitlesLangPref() {
      return nv(this, sY);
    }
    set noSubtitlesLangPref(e10) {
      nb(this, sY, e10);
    }
    get noDefaultStore() {
      return nv(this, sF);
    }
    set noDefaultStore(e10) {
      nb(this, sF, e10);
    }
    attributeChangedCallback(e10, t10, a10) {
      var i10, r10, n10, s10, o10, l10, d10, u10, c10, h10, m10, p10;
      if (super.attributeChangedCallback(e10, t10, a10), e10 === sj) a10 !== t10 && "" === a10 ? (this.hasAttribute(sO) && console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."), this.disableHotkeys()) : a10 !== t10 && null === a10 && this.enableHotkeys();
      else if (e10 === sO) sM(this, hd).value = a10;
      else if (e10 === sL && a10 !== t10) null == (i10 = sM(this, hc)) || i10.dispatch({ type: "optionschangerequest", detail: { defaultSubtitles: this.hasAttribute(sL) } });
      else if (e10 === sD) null == (n10 = sM(this, hc)) || n10.dispatch({ type: "optionschangerequest", detail: { defaultStreamType: null != (r10 = this.getAttribute(sD)) ? r10 : void 0 } });
      else if (e10 === sV && a10 !== t10) null == (s10 = sM(this, hc)) || s10.dispatch({ type: "optionschangerequest", detail: { liveEdgeOffset: this.hasAttribute(sV) ? +this.getAttribute(sV) : void 0, seekToLiveOffset: this.hasAttribute(sz) ? +this.getAttribute(sz) : this.hasAttribute(sV) ? +this.getAttribute(sV) : void 0 } });
      else if (e10 === sz && a10 !== t10) null == (o10 = sM(this, hc)) || o10.dispatch({ type: "optionschangerequest", detail: { seekToLiveOffset: this.hasAttribute(sz) ? +this.getAttribute(sz) : this.hasAttribute(sV) ? +this.getAttribute(sV) : void 0 } });
      else if (e10 === sK) null == (l10 = sM(this, hc)) || l10.dispatch({ type: "optionschangerequest", detail: { noAutoSeekToLive: this.hasAttribute(sK) } });
      else if (e10 === sP) {
        let e11 = a10 ? null == (d10 = this.getRootNode()) ? void 0 : d10.getElementById(a10) : void 0;
        sI(this, hu, e11), null == (u10 = sM(this, hc)) || u10.dispatch({ type: "fullscreenelementchangerequest", detail: this.fullscreenElement });
      } else e10 === s$ && a10 !== t10 ? (r$ = a10, null == (c10 = sM(this, hc)) || c10.dispatch({ type: "optionschangerequest", detail: { mediaLang: a10 } })) : e10 === sq && a10 !== t10 ? null == (h10 = sM(this, hc)) || h10.dispatch({ type: rb.MEDIA_LOOP_REQUEST, detail: null != a10 }) : e10 === sQ && a10 !== t10 ? null == (m10 = sM(this, hc)) || m10.dispatch({ type: "optionschangerequest", detail: { noVolumePref: this.hasAttribute(sQ) } }) : e10 === sG && a10 !== t10 && (null == (p10 = sM(this, hc)) || p10.dispatch({ type: "optionschangerequest", detail: { noMutedPref: this.hasAttribute(sG) } }));
    }
    connectedCallback() {
      var e10, t10, a10;
      this.associateElement(this), sM(this, hc) || this.hasAttribute(sF) || sR(this, hg, hy).call(this), null == (e10 = sM(this, hc)) || e10.dispatch({ type: "documentelementchangerequest", detail: r3 }), null == (t10 = sM(this, hc)) || t10.dispatch({ type: "fullscreenelementchangerequest", detail: this.fullscreenElement }), super.connectedCallback(), sM(this, hc) && !sM(this, hp) && sI(this, hp, null == (a10 = sM(this, hc)) ? void 0 : a10.subscribe(sM(this, hm))), void 0 !== sM(this, hb) && sM(this, hc) && this.media && setTimeout(() => {
        var e11, t11, a11;
        (null == (t11 = null == (e11 = this.media) ? void 0 : e11.textTracks) ? void 0 : t11.length) && (null == (a11 = sM(this, hc)) || a11.dispatch({ type: rb.MEDIA_TOGGLE_SUBTITLES_REQUEST, detail: sM(this, hb) }));
      }, 0), this.hasAttribute(sj) ? this.disableHotkeys() : this.enableHotkeys();
    }
    disconnectedCallback() {
      var e10, t10, a10, i10, r10, n10;
      if (null == (e10 = super.disconnectedCallback) || e10.call(this), this.disableHotkeys(), sM(this, hc)) {
        let e11 = sM(this, hc).getState();
        sI(this, hb, !!(null == (t10 = e11.mediaSubtitlesShowing) ? void 0 : t10.length)), null == (a10 = sM(this, hc)) || a10.dispatch({ type: "fullscreenelementchangerequest", detail: void 0 }), null == (i10 = sM(this, hc)) || i10.dispatch({ type: "documentelementchangerequest", detail: void 0 }), null == (r10 = sM(this, hc)) || r10.dispatch({ type: rb.MEDIA_TOGGLE_SUBTITLES_REQUEST, detail: false });
      }
      sM(this, hp) && (null == (n10 = sM(this, hp)) || n10.call(this), sI(this, hp, void 0)), this.unassociateElement(this), sM(this, hh) && (sM(this, hh).remove(), sI(this, hh, null));
    }
    mediaSetCallback(e10) {
      var t10;
      super.mediaSetCallback(e10), null == (t10 = sM(this, hc)) || t10.dispatch({ type: "mediaelementchangerequest", detail: e10 }), e10.hasAttribute("tabindex") || (e10.tabIndex = -1);
    }
    mediaUnsetCallback(e10) {
      var t10;
      super.mediaUnsetCallback(e10), null == (t10 = sM(this, hc)) || t10.dispatch({ type: "mediaelementchangerequest", detail: void 0 });
    }
    propagateMediaState(e10, t10) {
      s9(this.mediaStateReceivers, e10, t10);
    }
    associateElement(e10) {
      if (!e10) return;
      let { associatedElementSubscriptions: t10 } = this;
      if (t10.has(e10)) return;
      let a10 = s8(e10, this.registerMediaStateReceiver.bind(this), this.unregisterMediaStateReceiver.bind(this));
      Object.values(rb).forEach((t11) => {
        e10.addEventListener(t11, sM(this, hv));
      }), t10.set(e10, a10);
    }
    unassociateElement(e10) {
      if (!e10) return;
      let { associatedElementSubscriptions: t10 } = this;
      t10.has(e10) && (t10.get(e10)(), t10.delete(e10), Object.values(rb).forEach((t11) => {
        e10.removeEventListener(t11, sM(this, hv));
      }));
    }
    registerMediaStateReceiver(e10) {
      if (!e10) return;
      let t10 = this.mediaStateReceivers;
      !(t10.indexOf(e10) > -1) && (t10.push(e10), sM(this, hc) && Object.entries(sM(this, hc).getState()).forEach(([t11, a10]) => {
        s9([e10], t11, a10);
      }));
    }
    unregisterMediaStateReceiver(e10) {
      let t10 = this.mediaStateReceivers, a10 = t10.indexOf(e10);
      a10 < 0 || t10.splice(a10, 1);
    }
    enableHotkeys() {
      this.addEventListener("keydown", sR(this, hE, h_));
    }
    disableHotkeys() {
      this.removeEventListener("keydown", sR(this, hE, h_)), this.removeEventListener("keyup", sM(this, hf));
    }
    get hotkeys() {
      return sM(this, hd);
    }
    set hotkeys(e10) {
      ny(this, sO, e10);
    }
    keyboardShortcutHandler(e10) {
      var t10, a10, i10, r10, n10, s10, o10, l10, d10;
      let u10, c10, h10, m10 = e10.target;
      if (!((null != (i10 = null != (a10 = null == (t10 = m10.getAttribute(sW)) ? void 0 : t10.split(" ")) ? a10 : null == m10 ? void 0 : m10.keysUsed) ? i10 : []).map((e11) => "Space" === e11 ? " " : e11).filter(Boolean).includes(e10.key) || sM(this, hd).contains(`no${e10.key.toLowerCase()}`) || " " === e10.key && sM(this, hd).contains("nospace")) && !(e10.shiftKey && ("/" === e10.key || "?" === e10.key) && sM(this, hd).contains("noshift+/"))) switch (e10.key) {
        case " ":
        case "k":
          u10 = sM(this, hc).getState().mediaPaused ? rb.MEDIA_PLAY_REQUEST : rb.MEDIA_PAUSE_REQUEST, this.dispatchEvent(new r2.CustomEvent(u10, { composed: true, bubbles: true }));
          break;
        case "m":
          u10 = "off" === this.mediaStore.getState().mediaVolumeLevel ? rb.MEDIA_UNMUTE_REQUEST : rb.MEDIA_MUTE_REQUEST, this.dispatchEvent(new r2.CustomEvent(u10, { composed: true, bubbles: true }));
          break;
        case "f":
          u10 = this.mediaStore.getState().mediaIsFullscreen ? rb.MEDIA_EXIT_FULLSCREEN_REQUEST : rb.MEDIA_ENTER_FULLSCREEN_REQUEST, this.dispatchEvent(new r2.CustomEvent(u10, { composed: true, bubbles: true }));
          break;
        case "c":
          this.dispatchEvent(new r2.CustomEvent(rb.MEDIA_TOGGLE_SUBTITLES_REQUEST, { composed: true, bubbles: true }));
          break;
        case "ArrowLeft":
        case "j": {
          let e11 = this.hasAttribute(sN) ? +this.getAttribute(sN) : 10;
          c10 = Math.max((null != (r10 = this.mediaStore.getState().mediaCurrentTime) ? r10 : 0) - e11, 0), h10 = new r2.CustomEvent(rb.MEDIA_SEEK_REQUEST, { composed: true, bubbles: true, detail: c10 }), this.dispatchEvent(h10);
          break;
        }
        case "ArrowRight":
        case "l": {
          let e11 = this.hasAttribute(sU) ? +this.getAttribute(sU) : 10;
          c10 = Math.max((null != (n10 = this.mediaStore.getState().mediaCurrentTime) ? n10 : 0) + e11, 0), h10 = new r2.CustomEvent(rb.MEDIA_SEEK_REQUEST, { composed: true, bubbles: true, detail: c10 }), this.dispatchEvent(h10);
          break;
        }
        case "ArrowUp": {
          let e11 = this.hasAttribute(sH) ? +this.getAttribute(sH) : 0.025;
          c10 = Math.min((null != (s10 = this.mediaStore.getState().mediaVolume) ? s10 : 1) + e11, 1), h10 = new r2.CustomEvent(rb.MEDIA_VOLUME_REQUEST, { composed: true, bubbles: true, detail: c10 }), this.dispatchEvent(h10);
          break;
        }
        case "ArrowDown": {
          let e11 = this.hasAttribute(sB) ? +this.getAttribute(sB) : 0.025;
          c10 = Math.max((null != (o10 = this.mediaStore.getState().mediaVolume) ? o10 : 1) - e11, 0), h10 = new r2.CustomEvent(rb.MEDIA_VOLUME_REQUEST, { composed: true, bubbles: true, detail: c10 }), this.dispatchEvent(h10);
          break;
        }
        case "<":
          c10 = Math.max((null != (l10 = this.mediaStore.getState().mediaPlaybackRate) ? l10 : 1) - 0.25, 0.25).toFixed(2), h10 = new r2.CustomEvent(rb.MEDIA_PLAYBACK_RATE_REQUEST, { composed: true, bubbles: true, detail: c10 }), this.dispatchEvent(h10);
          break;
        case ">":
          c10 = Math.min((null != (d10 = this.mediaStore.getState().mediaPlaybackRate) ? d10 : 1) + 0.25, 2).toFixed(2), h10 = new r2.CustomEvent(rb.MEDIA_PLAYBACK_RATE_REQUEST, { composed: true, bubbles: true, detail: c10 }), this.dispatchEvent(h10);
          break;
        case "/":
        case "?":
          e10.shiftKey && sR(this, hw, hT).call(this);
          break;
        case "p":
          u10 = this.mediaStore.getState().mediaIsPip ? rb.MEDIA_EXIT_PIP_REQUEST : rb.MEDIA_ENTER_PIP_REQUEST, h10 = new r2.CustomEvent(u10, { composed: true, bubbles: true }), this.dispatchEvent(h10);
      }
    }
  }
  hd = /* @__PURE__ */ new WeakMap(), hu = /* @__PURE__ */ new WeakMap(), hc = /* @__PURE__ */ new WeakMap(), hh = /* @__PURE__ */ new WeakMap(), hm = /* @__PURE__ */ new WeakMap(), hp = /* @__PURE__ */ new WeakMap(), hv = /* @__PURE__ */ new WeakMap(), hb = /* @__PURE__ */ new WeakMap(), hg = /* @__PURE__ */ new WeakSet(), hy = function() {
    var e10;
    this.mediaStore = (({ media: e11, fullscreenElement: t10, documentElement: a10, stateMediator: i10 = sE, requestMap: r10 = sw, options: n10 = {}, monitorStateOwnersOnlyWithSubscriptions: s10 = true }) => {
      let o10, l10 = [], d10 = { options: { ...n10 } }, u10 = Object.freeze({ mediaPreviewTime: void 0, mediaPreviewImage: void 0, mediaPreviewCoords: void 0, mediaPreviewChapter: void 0 }), c10 = (e12) => {
        void 0 == e12 || sm(e12, u10) || (u10 = Object.freeze({ ...u10, ...e12 }), l10.forEach((e13) => e13(u10)));
      }, h10 = () => {
        c10(Object.entries(i10).reduce((e12, [t11, { get: a11 }]) => (e12[t11] = a11(d10), e12), {}));
      }, m10 = {}, p10 = async (e12, t11) => {
        var a11, r11, n11, u11, p11, v10, b10, g2, y2, f2, E2, w2, T2, A2, k2, M2;
        let S2 = !!o10;
        if (o10 = { ...d10, ...null != o10 ? o10 : {}, ...e12 }, S2) return;
        await sy(...Object.values(e12));
        let I2 = l10.length > 0 && 0 === t11 && s10, R2 = d10.media !== o10.media, C2 = (null == (a11 = d10.media) ? void 0 : a11.textTracks) !== (null == (r11 = o10.media) ? void 0 : r11.textTracks), L2 = (null == (n11 = d10.media) ? void 0 : n11.videoRenditions) !== (null == (u11 = o10.media) ? void 0 : u11.videoRenditions), D2 = (null == (p11 = d10.media) ? void 0 : p11.audioTracks) !== (null == (v10 = o10.media) ? void 0 : v10.audioTracks), x2 = (null == (b10 = d10.media) ? void 0 : b10.remote) !== (null == (g2 = o10.media) ? void 0 : g2.remote), P2 = d10.documentElement !== o10.documentElement, O2 = !!d10.media && (R2 || I2), N2 = !!(null == (y2 = d10.media) ? void 0 : y2.textTracks) && (C2 || I2), U2 = !!(null == (f2 = d10.media) ? void 0 : f2.videoRenditions) && (L2 || I2), B2 = !!(null == (E2 = d10.media) ? void 0 : E2.audioTracks) && (D2 || I2), H2 = !!(null == (w2 = d10.media) ? void 0 : w2.remote) && (x2 || I2), W2 = !!d10.documentElement && (P2 || I2), $2 = O2 || N2 || U2 || B2 || H2 || W2, q2 = 0 === l10.length && 1 === t11 && s10, V2 = !!o10.media && (R2 || q2), K2 = !!(null == (T2 = o10.media) ? void 0 : T2.textTracks) && (C2 || q2), F2 = !!(null == (A2 = o10.media) ? void 0 : A2.videoRenditions) && (L2 || q2), j2 = !!(null == (k2 = o10.media) ? void 0 : k2.audioTracks) && (D2 || q2), G2 = !!(null == (M2 = o10.media) ? void 0 : M2.remote) && (x2 || q2), Y2 = !!o10.documentElement && (P2 || q2), Q2 = V2 || K2 || F2 || j2 || G2 || Y2;
        if (!($2 || Q2)) {
          Object.entries(o10).forEach(([e13, t12]) => {
            d10[e13] = t12;
          }), h10(), o10 = void 0;
          return;
        }
        Object.entries(i10).forEach(([e13, { get: t12, mediaEvents: a12 = [], textTracksEvents: i11 = [], videoRenditionsEvents: r12 = [], audioTracksEvents: n12 = [], remoteEvents: s11 = [], rootEvents: l11 = [], stateOwnersUpdateHandlers: u12 = [] }]) => {
          let h11;
          m10[e13] || (m10[e13] = {});
          let p12 = (a13) => {
            c10({ [e13]: t12(d10, a13) });
          };
          h11 = m10[e13].mediaEvents, a12.forEach((t13) => {
            h11 && O2 && (d10.media.removeEventListener(t13, h11), m10[e13].mediaEvents = void 0), V2 && (o10.media.addEventListener(t13, p12), m10[e13].mediaEvents = p12);
          }), h11 = m10[e13].textTracksEvents, i11.forEach((t13) => {
            var a13, i12;
            h11 && N2 && (null == (a13 = d10.media.textTracks) || a13.removeEventListener(t13, h11), m10[e13].textTracksEvents = void 0), K2 && (null == (i12 = o10.media.textTracks) || i12.addEventListener(t13, p12), m10[e13].textTracksEvents = p12);
          }), h11 = m10[e13].videoRenditionsEvents, r12.forEach((t13) => {
            var a13, i12;
            h11 && U2 && (null == (a13 = d10.media.videoRenditions) || a13.removeEventListener(t13, h11), m10[e13].videoRenditionsEvents = void 0), F2 && (null == (i12 = o10.media.videoRenditions) || i12.addEventListener(t13, p12), m10[e13].videoRenditionsEvents = p12);
          }), h11 = m10[e13].audioTracksEvents, n12.forEach((t13) => {
            var a13, i12;
            h11 && B2 && (null == (a13 = d10.media.audioTracks) || a13.removeEventListener(t13, h11), m10[e13].audioTracksEvents = void 0), j2 && (null == (i12 = o10.media.audioTracks) || i12.addEventListener(t13, p12), m10[e13].audioTracksEvents = p12);
          }), h11 = m10[e13].remoteEvents, s11.forEach((t13) => {
            var a13, i12;
            h11 && H2 && (null == (a13 = d10.media.remote) || a13.removeEventListener(t13, h11), m10[e13].remoteEvents = void 0), G2 && (null == (i12 = o10.media.remote) || i12.addEventListener(t13, p12), m10[e13].remoteEvents = p12);
          }), h11 = m10[e13].rootEvents, l11.forEach((t13) => {
            h11 && W2 && (d10.documentElement.removeEventListener(t13, h11), m10[e13].rootEvents = void 0), Y2 && (o10.documentElement.addEventListener(t13, p12), m10[e13].rootEvents = p12);
          });
          let v11 = m10[e13].stateOwnersUpdateHandlers;
          if (v11 && $2 && (Array.isArray(v11) ? v11 : [v11]).forEach((e14) => {
            "function" == typeof e14 && e14();
          }), Q2) {
            let t13 = u12.map((e14) => e14(p12, o10)).filter((e14) => "function" == typeof e14);
            m10[e13].stateOwnersUpdateHandlers = 1 === t13.length ? t13[0] : t13;
          } else $2 && (m10[e13].stateOwnersUpdateHandlers = void 0);
        }), Object.entries(o10).forEach(([e13, t12]) => {
          d10[e13] = t12;
        }), h10(), o10 = void 0;
      };
      return p10({ media: e11, fullscreenElement: t10, documentElement: a10, options: n10 }), { dispatch(e12) {
        let { type: t11, detail: a11 } = e12;
        r10[t11] && null == u10.mediaErrorCode ? c10(r10[t11](i10, d10, e12)) : "mediaelementchangerequest" === t11 ? p10({ media: a11 }) : "fullscreenelementchangerequest" === t11 ? p10({ fullscreenElement: a11 }) : "documentelementchangerequest" === t11 ? p10({ documentElement: a11 }) : "optionschangerequest" === t11 && (Object.entries(null != a11 ? a11 : {}).forEach(([e13, t12]) => {
          d10.options[e13] = t12;
        }), h10());
      }, getState: () => u10, subscribe: (e12) => (p10({}, l10.length + 1), l10.push(e12), e12(u10), () => {
        let t11 = l10.indexOf(e12);
        t11 >= 0 && (p10({}, l10.length - 1), l10.splice(t11, 1));
      }) };
    })({ media: this.media, fullscreenElement: this.fullscreenElement, options: { defaultSubtitles: this.hasAttribute(sL), defaultDuration: this.hasAttribute(sx) ? +this.getAttribute(sx) : void 0, defaultStreamType: null != (e10 = this.getAttribute(sD)) ? e10 : void 0, liveEdgeOffset: this.hasAttribute(sV) ? +this.getAttribute(sV) : void 0, seekToLiveOffset: this.hasAttribute(sz) ? +this.getAttribute(sz) : this.hasAttribute(sV) ? +this.getAttribute(sV) : void 0, noAutoSeekToLive: this.hasAttribute(sK), noVolumePref: this.hasAttribute(sQ), noMutedPref: this.hasAttribute(sG), noSubtitlesLangPref: this.hasAttribute(sY) } });
  }, hf = /* @__PURE__ */ new WeakMap(), hE = /* @__PURE__ */ new WeakSet(), h_ = function(e10) {
    var t10;
    let { metaKey: a10, altKey: i10, key: r10, shiftKey: n10 } = e10, s10 = n10 && ("/" === r10 || "?" === r10);
    if (s10 && (null == (t10 = sM(this, hh)) ? void 0 : t10.open) || a10 || i10 || !s10 && !sC.includes(r10)) return void this.removeEventListener("keyup", sM(this, hf));
    let o10 = e10.target, l10 = o10 instanceof HTMLElement && ("media-volume-range" === o10.tagName.toLowerCase() || "media-time-range" === o10.tagName.toLowerCase());
    ![" ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(r10) || sM(this, hd).contains(`no${r10.toLowerCase()}`) || " " === r10 && sM(this, hd).contains("nospace") || l10 || e10.preventDefault(), this.addEventListener("keyup", sM(this, hf), { once: true });
  }, hw = /* @__PURE__ */ new WeakSet(), hT = function() {
    sM(this, hh) || (sI(this, hh, r3.createElement("media-keyboard-shortcuts-dialog")), this.appendChild(sM(this, hh))), sM(this, hh).open = true;
  };
  let sX = Object.values(rE), sJ = Object.values(ry), s0 = (e10) => {
    var t10, a10, i10, r10;
    let { observedAttributes: n10 } = e10.constructor;
    !n10 && (null == (t10 = e10.nodeName) ? void 0 : t10.includes("-")) && (r2.customElements.upgrade(e10), { observedAttributes: n10 } = e10.constructor);
    let s10 = null == (r10 = null == (i10 = null == (a10 = null == e10 ? void 0 : e10.getAttribute) ? void 0 : a10.call(e10, rg.MEDIA_CHROME_ATTRIBUTES)) ? void 0 : i10.split) ? void 0 : r10.call(i10, /\s+/);
    return Array.isArray(n10 || s10) ? (n10 || s10).filter((e11) => sX.includes(e11)) : [];
  }, s1 = (e10) => {
    var t10, a10;
    return (null == (t10 = e10.nodeName) ? void 0 : t10.includes("-")) && r2.customElements.get(null == (a10 = e10.nodeName) ? void 0 : a10.toLowerCase()) && !(e10 instanceof r2.customElements.get(e10.nodeName.toLowerCase())) && r2.customElements.upgrade(e10), sJ.some((t11) => t11 in e10) || !!s0(e10).length;
  }, s2 = (e10) => {
    var t10;
    return null == (t10 = null == e10 ? void 0 : e10.join) ? void 0 : t10.call(e10, ":");
  }, s3 = { [rE.MEDIA_SUBTITLES_LIST]: nX, [rE.MEDIA_SUBTITLES_SHOWING]: nX, [rE.MEDIA_SEEKABLE]: s2, [rE.MEDIA_BUFFERED]: (e10) => null == e10 ? void 0 : e10.map(s2).join(" "), [rE.MEDIA_PREVIEW_COORDS]: (e10) => null == e10 ? void 0 : e10.join(" "), [rE.MEDIA_RENDITION_LIST]: function(e10) {
    return null == e10 ? void 0 : e10.map(rL).join(" ");
  }, [rE.MEDIA_AUDIO_TRACK_LIST]: function(e10) {
    return null == e10 ? void 0 : e10.map(rx).join(" ");
  } }, s4 = async (e10, t10, a10) => {
    var i10, r10;
    if (e10.isConnected || await rU(0), "boolean" == typeof a10 || null == a10) return nb(e10, t10, a10);
    if ("number" == typeof a10) return np(e10, t10, a10);
    if ("string" == typeof a10) return ny(e10, t10, a10);
    if (Array.isArray(a10) && !a10.length) return e10.removeAttribute(t10);
    let n10 = null != (r10 = null == (i10 = s3[t10]) ? void 0 : i10.call(s3, a10)) ? r10 : a10;
    return e10.setAttribute(t10, n10);
  }, s5 = (e10, t10) => {
    var a10;
    if (null == (a10 = e10.closest) ? void 0 : a10.call(e10, '*[slot="media"]')) return;
    let i10 = (e11, t11) => {
      var a11, i11;
      s1(e11) && t11(e11);
      let { children: r11 = [] } = null != e11 ? e11 : {};
      [...r11, ...null != (i11 = null == (a11 = null == e11 ? void 0 : e11.shadowRoot) ? void 0 : a11.children) ? i11 : []].forEach((e12) => s5(e12, t11));
    }, r10 = null == e10 ? void 0 : e10.nodeName.toLowerCase();
    r10.includes("-") && !s1(e10) ? r2.customElements.whenDefined(r10).then(() => {
      i10(e10, t10);
    }) : i10(e10, t10);
  }, s9 = (e10, t10, a10) => {
    e10.forEach((e11) => {
      if (t10 in e11) {
        e11[t10] = a10;
        return;
      }
      let i10 = s0(e11), r10 = t10.toLowerCase();
      i10.includes(r10) && s4(e11, r10, a10);
    });
  }, s8 = (e10, t10, a10) => {
    s5(e10, t10);
    let i10 = (e11) => {
      var a11;
      t10(null != (a11 = null == e11 ? void 0 : e11.composedPath()[0]) ? a11 : e11.target);
    }, r10 = (e11) => {
      var t11;
      a10(null != (t11 = null == e11 ? void 0 : e11.composedPath()[0]) ? t11 : e11.target);
    };
    e10.addEventListener(rb.REGISTER_MEDIA_STATE_RECEIVER, i10), e10.addEventListener(rb.UNREGISTER_MEDIA_STATE_RECEIVER, r10);
    let n10 = [], s10 = (e11) => {
      let i11 = e11.target;
      "media" !== i11.name && (n10.forEach((e12) => s5(e12, a10)), (n10 = [...i11.assignedElements({ flatten: true })]).forEach((e12) => s5(e12, t10)));
    };
    e10.addEventListener("slotchange", s10);
    let o10 = new MutationObserver((e11) => {
      e11.forEach((e12) => {
        let { addedNodes: i11 = [], removedNodes: r11 = [], type: n11, target: s11, attributeName: o11 } = e12;
        "childList" === n11 ? (Array.prototype.forEach.call(i11, (e13) => s5(e13, t10)), Array.prototype.forEach.call(r11, (e13) => s5(e13, a10))) : "attributes" === n11 && o11 === rg.MEDIA_CHROME_ATTRIBUTES && (s1(s11) ? t10(s11) : a10(s11));
      });
    });
    return o10.observe(e10, { childList: true, attributes: true, subtree: true }), () => {
      s5(e10, a10), e10.removeEventListener("slotchange", s10), o10.disconnect(), e10.removeEventListener(rb.REGISTER_MEDIA_STATE_RECEIVER, i10), e10.removeEventListener(rb.UNREGISTER_MEDIA_STATE_RECEIVER, r10);
    };
  };
  r2.customElements.get("media-controller") || r2.customElements.define("media-controller", sZ);
  try {
    var s6 = "u" > typeof window ? window : e.g;
    s6._sentryModuleMetadata = s6._sentryModuleMetadata || {}, s6._sentryModuleMetadata[new s6.Error().stack] = Object.assign({}, s6._sentryModuleMetadata[new s6.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let s7 = "placement", oe = "bounds";
  class ot extends r2.HTMLElement {
    constructor() {
      if (super(), this.updateXOffset = () => {
        var e10;
        if (!nu(this, { checkOpacity: false, checkVisibilityCSS: false })) return;
        let t10 = this.placement;
        if ("left" === t10 || "right" === t10) return void this.style.removeProperty("--media-tooltip-offset-x");
        let a10 = getComputedStyle(this), i10 = null != (e10 = no(this, "#" + this.bounds)) ? e10 : na(this);
        if (!i10) return;
        let { x: r10, width: n10 } = i10.getBoundingClientRect(), { x: s10, width: o10 } = this.getBoundingClientRect(), l10 = a10.getPropertyValue("--media-tooltip-offset-x"), d10 = l10 ? parseFloat(l10.replace("px", "")) : 0, u10 = a10.getPropertyValue("--media-tooltip-container-margin"), c10 = u10 ? parseFloat(u10.replace("px", "")) : 0, h10 = s10 - r10 + d10 - c10, m10 = s10 + o10 - (r10 + n10) + d10 + c10;
        h10 < 0 ? this.style.setProperty("--media-tooltip-offset-x", `${h10}px`) : m10 > 0 ? this.style.setProperty("--media-tooltip-offset-x", `${m10}px`) : this.style.removeProperty("--media-tooltip-offset-x");
      }, !this.shadowRoot) {
        this.attachShadow(this.constructor.shadowRootOptions);
        const e10 = nt(this.attributes);
        this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e10);
      }
      if (this.arrowEl = this.shadowRoot.querySelector("#arrow"), Object.prototype.hasOwnProperty.call(this, "placement")) {
        const e10 = this.placement;
        delete this.placement, this.placement = e10;
      }
    }
    static get observedAttributes() {
      return [s7, oe];
    }
    get placement() {
      return ng(this, s7);
    }
    set placement(e10) {
      ny(this, s7, e10);
    }
    get bounds() {
      return ng(this, oe);
    }
    set bounds(e10) {
      ny(this, oe, e10);
    }
  }
  ot.shadowRootOptions = { mode: "open" }, ot.getTemplateHTML = function(e10) {
    return `
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `;
  }, r2.customElements.get("media-tooltip") || r2.customElements.define("media-tooltip", ot);
  try {
    var oa = "u" > typeof window ? window : e.g;
    oa._sentryModuleMetadata = oa._sentryModuleMetadata || {}, oa._sentryModuleMetadata[new oa.Error().stack] = Object.assign({}, oa._sentryModuleMetadata[new oa.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var oi = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, or = (e10, t10, a10) => (oi(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), on = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, os = (e10, t10, a10, i10) => (oi(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10);
  let oo = "tooltipplacement", ol = "disabled", od = "notooltip";
  class ou extends r2.HTMLElement {
    constructor() {
      if (super(), on(this, hR), on(this, hA, void 0), this.preventClick = false, this.tooltipEl = null, on(this, hk, (e10) => {
        this.preventClick || this.handleClick(e10), setTimeout(or(this, hM), 0);
      }), on(this, hM, () => {
        var e10, t10;
        null == (t10 = null == (e10 = this.tooltipEl) ? void 0 : e10.updateXOffset) || t10.call(e10);
      }), on(this, hS, (e10) => {
        let { key: t10 } = e10;
        this.keysUsed.includes(t10) ? this.preventClick || this.handleClick(e10) : this.removeEventListener("keyup", or(this, hS));
      }), on(this, hI, (e10) => {
        let { metaKey: t10, altKey: a10, key: i10 } = e10;
        t10 || a10 || !this.keysUsed.includes(i10) ? this.removeEventListener("keyup", or(this, hS)) : this.addEventListener("keyup", or(this, hS), { once: true });
      }), !this.shadowRoot) {
        this.attachShadow(this.constructor.shadowRootOptions);
        const e10 = nt(this.attributes), t10 = this.constructor.getTemplateHTML(e10);
        this.shadowRoot.setHTMLUnsafe ? this.shadowRoot.setHTMLUnsafe(t10) : this.shadowRoot.innerHTML = t10;
      }
      this.tooltipEl = this.shadowRoot.querySelector("media-tooltip");
    }
    static get observedAttributes() {
      return ["disabled", oo, rg.MEDIA_CONTROLLER, rE.MEDIA_LANG];
    }
    enable() {
      this.addEventListener("click", or(this, hk)), this.addEventListener("keydown", or(this, hI)), this.tabIndex = 0;
    }
    disable() {
      this.removeEventListener("click", or(this, hk)), this.removeEventListener("keydown", or(this, hI)), this.removeEventListener("keyup", or(this, hS)), this.tabIndex = -1;
    }
    attributeChangedCallback(e10, t10, a10) {
      var i10, r10, n10, s10, o10;
      e10 === rg.MEDIA_CONTROLLER ? (t10 && (null == (r10 = null == (i10 = or(this, hA)) ? void 0 : i10.unassociateElement) || r10.call(i10, this), os(this, hA, null)), a10 && this.isConnected && (os(this, hA, null == (n10 = this.getRootNode()) ? void 0 : n10.getElementById(a10)), null == (o10 = null == (s10 = or(this, hA)) ? void 0 : s10.associateElement) || o10.call(s10, this))) : "disabled" === e10 && a10 !== t10 ? null == a10 ? this.enable() : this.disable() : e10 === oo && this.tooltipEl && a10 !== t10 ? this.tooltipEl.placement = a10 : e10 === rE.MEDIA_LANG && (this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML = this.constructor.getTooltipContentHTML()), or(this, hM).call(this);
    }
    connectedCallback() {
      var e10, t10, a10;
      let { style: i10 } = nc(this.shadowRoot, ":host");
      i10.setProperty("display", `var(--media-control-display, var(--${this.localName}-display, inline-flex))`), this.hasAttribute("disabled") ? this.disable() : this.enable(), this.setAttribute("role", "button");
      let r10 = this.getAttribute(rg.MEDIA_CONTROLLER);
      r10 && (os(this, hA, null == (e10 = this.getRootNode()) ? void 0 : e10.getElementById(r10)), null == (a10 = null == (t10 = or(this, hA)) ? void 0 : t10.associateElement) || a10.call(t10, this)), r2.customElements.whenDefined("media-tooltip").then(() => {
        var e11, t11;
        return (e11 = hR, t11 = hC, oi(this, e11, "access private method"), t11).call(this);
      });
    }
    disconnectedCallback() {
      var e10, t10;
      this.disable(), null == (t10 = null == (e10 = or(this, hA)) ? void 0 : e10.unassociateElement) || t10.call(e10, this), os(this, hA, null), this.removeEventListener("mouseenter", or(this, hM)), this.removeEventListener("focus", or(this, hM)), this.removeEventListener("click", or(this, hk));
    }
    get keysUsed() {
      return ["Enter", " "];
    }
    get tooltipPlacement() {
      return ng(this, oo);
    }
    set tooltipPlacement(e10) {
      ny(this, oo, e10);
    }
    get mediaController() {
      return ng(this, rg.MEDIA_CONTROLLER);
    }
    set mediaController(e10) {
      ny(this, rg.MEDIA_CONTROLLER, e10);
    }
    get disabled() {
      return nv(this, ol);
    }
    set disabled(e10) {
      nb(this, ol, e10);
    }
    get noTooltip() {
      return nv(this, od);
    }
    set noTooltip(e10) {
      nb(this, od, e10);
    }
    handleClick(e10) {
    }
  }
  hA = /* @__PURE__ */ new WeakMap(), hk = /* @__PURE__ */ new WeakMap(), hM = /* @__PURE__ */ new WeakMap(), hS = /* @__PURE__ */ new WeakMap(), hI = /* @__PURE__ */ new WeakMap(), hR = /* @__PURE__ */ new WeakSet(), hC = function() {
    this.addEventListener("mouseenter", or(this, hM)), this.addEventListener("focus", or(this, hM)), this.addEventListener("click", or(this, hk));
    let e10 = this.tooltipPlacement;
    e10 && this.tooltipEl && (this.tooltipEl.placement = e10);
  }, ou.shadowRootOptions = { mode: "open" }, ou.getTemplateHTML = function(e10, t10 = {}) {
    return `
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e10, t10)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${ot.shadowRootOptions.mode}">
          ${ot.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e10)}
        </slot>
      </media-tooltip>
    </slot>
  `;
  }, ou.getSlotTemplateHTML = function(e10, t10) {
    return `
    <slot></slot>
  `;
  }, ou.getTooltipContentHTML = function() {
    return "";
  }, r2.customElements.get("media-chrome-button") || r2.customElements.define("media-chrome-button", ou);
  try {
    var oc = "u" > typeof window ? window : e.g;
    oc._sentryModuleMetadata = oc._sentryModuleMetadata || {}, oc._sentryModuleMetadata[new oc.Error().stack] = Object.assign({}, oc._sentryModuleMetadata[new oc.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let oh = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`, om = (e10) => {
    let t10 = e10.mediaIsAirplaying ? rq("stop airplay") : rq("start airplay");
    e10.setAttribute("aria-label", t10);
  };
  class op extends ou {
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_IS_AIRPLAYING, rE.MEDIA_AIRPLAY_UNAVAILABLE];
    }
    connectedCallback() {
      super.connectedCallback(), om(this);
    }
    attributeChangedCallback(e10, t10, a10) {
      super.attributeChangedCallback(e10, t10, a10), e10 === rE.MEDIA_IS_AIRPLAYING && om(this);
    }
    get mediaIsAirplaying() {
      return nv(this, rE.MEDIA_IS_AIRPLAYING);
    }
    set mediaIsAirplaying(e10) {
      nb(this, rE.MEDIA_IS_AIRPLAYING, e10);
    }
    get mediaAirplayUnavailable() {
      return ng(this, rE.MEDIA_AIRPLAY_UNAVAILABLE);
    }
    set mediaAirplayUnavailable(e10) {
      ny(this, rE.MEDIA_AIRPLAY_UNAVAILABLE, e10);
    }
    handleClick() {
      let e10 = new r2.CustomEvent(rb.MEDIA_AIRPLAY_REQUEST, { composed: true, bubbles: true });
      this.dispatchEvent(e10);
    }
  }
  op.getSlotTemplateHTML = function(e10) {
    return `
    <style>
      :host([${rE.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${rE.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rE.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${rE.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${oh}</slot>
      <slot name="exit">${oh}</slot>
    </slot>
  `;
  }, op.getTooltipContentHTML = function() {
    return `
    <slot name="tooltip-enter">${rq("start airplay")}</slot>
    <slot name="tooltip-exit">${rq("stop airplay")}</slot>
  `;
  }, r2.customElements.get("media-airplay-button") || r2.customElements.define("media-airplay-button", op);
  try {
    var ov = "u" > typeof window ? window : e.g;
    ov._sentryModuleMetadata = ov._sentryModuleMetadata || {}, ov._sentryModuleMetadata[new ov.Error().stack] = Object.assign({}, ov._sentryModuleMetadata[new ov.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ob = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`, og = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`, oy = (e10) => {
    e10.setAttribute("aria-checked", n2(e10).toString());
  };
  class of extends ou {
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_SUBTITLES_LIST, rE.MEDIA_SUBTITLES_SHOWING];
    }
    connectedCallback() {
      super.connectedCallback(), this.setAttribute("role", "button"), this.setAttribute("aria-label", rq("closed captions")), oy(this);
    }
    attributeChangedCallback(e10, t10, a10) {
      super.attributeChangedCallback(e10, t10, a10), e10 === rE.MEDIA_SUBTITLES_SHOWING && oy(this);
    }
    get mediaSubtitlesList() {
      return oE(this, rE.MEDIA_SUBTITLES_LIST);
    }
    set mediaSubtitlesList(e10) {
      o_(this, rE.MEDIA_SUBTITLES_LIST, e10);
    }
    get mediaSubtitlesShowing() {
      return oE(this, rE.MEDIA_SUBTITLES_SHOWING);
    }
    set mediaSubtitlesShowing(e10) {
      o_(this, rE.MEDIA_SUBTITLES_SHOWING, e10);
    }
    handleClick() {
      this.dispatchEvent(new r2.CustomEvent(rb.MEDIA_TOGGLE_SUBTITLES_REQUEST, { composed: true, bubbles: true }));
    }
  }
  of.getSlotTemplateHTML = function(e10) {
    return `
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${ob}</slot>
      <slot name="off">${og}</slot>
    </slot>
  `;
  }, of.getTooltipContentHTML = function() {
    return `
    <slot name="tooltip-enable">${rq("Enable captions")}</slot>
    <slot name="tooltip-disable">${rq("Disable captions")}</slot>
  `;
  };
  let oE = (e10, t10) => {
    let a10 = e10.getAttribute(t10);
    return a10 ? nQ(a10) : [];
  }, o_ = (e10, t10, a10) => {
    if (!(null == a10 ? void 0 : a10.length)) return void e10.removeAttribute(t10);
    let i10 = nX(a10);
    e10.getAttribute(t10) !== i10 && e10.setAttribute(t10, i10);
  };
  r2.customElements.get("media-captions-button") || r2.customElements.define("media-captions-button", of);
  try {
    var ow = "u" > typeof window ? window : e.g;
    ow._sentryModuleMetadata = ow._sentryModuleMetadata || {}, ow._sentryModuleMetadata[new ow.Error().stack] = Object.assign({}, ow._sentryModuleMetadata[new ow.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let oT = (e10) => {
    let t10 = e10.mediaIsCasting ? rq("stop casting") : rq("start casting");
    e10.setAttribute("aria-label", t10);
  };
  class oA extends ou {
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_IS_CASTING, rE.MEDIA_CAST_UNAVAILABLE];
    }
    connectedCallback() {
      super.connectedCallback(), oT(this);
    }
    attributeChangedCallback(e10, t10, a10) {
      super.attributeChangedCallback(e10, t10, a10), e10 === rE.MEDIA_IS_CASTING && oT(this);
    }
    get mediaIsCasting() {
      return nv(this, rE.MEDIA_IS_CASTING);
    }
    set mediaIsCasting(e10) {
      nb(this, rE.MEDIA_IS_CASTING, e10);
    }
    get mediaCastUnavailable() {
      return ng(this, rE.MEDIA_CAST_UNAVAILABLE);
    }
    set mediaCastUnavailable(e10) {
      ny(this, rE.MEDIA_CAST_UNAVAILABLE, e10);
    }
    handleClick() {
      let e10 = this.mediaIsCasting ? rb.MEDIA_EXIT_CAST_REQUEST : rb.MEDIA_ENTER_CAST_REQUEST;
      this.dispatchEvent(new r2.CustomEvent(e10, { composed: true, bubbles: true }));
    }
  }
  oA.getSlotTemplateHTML = function(e10) {
    return `
    <style>
      :host([${rE.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${rE.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rE.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${rE.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `;
  }, oA.getTooltipContentHTML = function() {
    return `
    <slot name="tooltip-enter">${rq("Start casting")}</slot>
    <slot name="tooltip-exit">${rq("Stop casting")}</slot>
  `;
  }, r2.customElements.get("media-cast-button") || r2.customElements.define("media-cast-button", oA);
  try {
    var ok = "u" > typeof window ? window : e.g;
    ok._sentryModuleMetadata = ok._sentryModuleMetadata || {}, ok._sentryModuleMetadata[new ok.Error().stack] = Object.assign({}, ok._sentryModuleMetadata[new ok.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var oM = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, oS = (e10, t10, a10) => (oM(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), oI = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, oR = (e10, t10, a10, i10) => (oM(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10), oC = (e10, t10, a10) => (oM(e10, t10, "access private method"), a10);
  let oL = "open";
  class oD extends r2.HTMLElement {
    constructor() {
      super(), oI(this, hP), oI(this, hN), oI(this, hB), oI(this, hW), oI(this, hq), oI(this, hK), oI(this, hL, false), oI(this, hD, null), oI(this, hx, null);
    }
    static get observedAttributes() {
      return [oL, "anchor"];
    }
    get open() {
      return nv(this, oL);
    }
    set open(e10) {
      nb(this, oL, e10);
    }
    handleEvent(e10) {
      switch (e10.type) {
        case "invoke":
          oC(this, hW, h$).call(this, e10);
          break;
        case "focusout":
          oC(this, hq, hV).call(this, e10);
          break;
        case "keydown":
          oC(this, hK, hF).call(this, e10);
      }
    }
    connectedCallback() {
      oC(this, hP, hO).call(this), this.role || (this.role = "dialog"), this.addEventListener("invoke", this), this.addEventListener("focusout", this), this.addEventListener("keydown", this);
    }
    disconnectedCallback() {
      this.removeEventListener("invoke", this), this.removeEventListener("focusout", this), this.removeEventListener("keydown", this);
    }
    attributeChangedCallback(e10, t10, a10) {
      oC(this, hP, hO).call(this), e10 === oL && a10 !== t10 && (this.open ? oC(this, hN, hU).call(this) : oC(this, hB, hH).call(this));
    }
    focus() {
      oR(this, hD, nl());
      let e10 = !this.dispatchEvent(new Event("focus", { composed: true, cancelable: true })), t10 = !this.dispatchEvent(new Event("focusin", { composed: true, bubbles: true, cancelable: true }));
      if (e10 || t10) return;
      let a10 = this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');
      null == a10 || a10.focus();
    }
    get keysUsed() {
      return ["Escape", "Tab"];
    }
  }
  hL = /* @__PURE__ */ new WeakMap(), hD = /* @__PURE__ */ new WeakMap(), hx = /* @__PURE__ */ new WeakMap(), hP = /* @__PURE__ */ new WeakSet(), hO = function() {
    if (!oS(this, hL) && (oR(this, hL, true), !this.shadowRoot)) {
      this.attachShadow(this.constructor.shadowRootOptions);
      let e10 = nt(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e10), queueMicrotask(() => {
        let { style: e11 } = nc(this.shadowRoot, ":host");
        e11.setProperty("transition", "display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in");
      });
    }
  }, hN = /* @__PURE__ */ new WeakSet(), hU = function() {
    var e10;
    null == (e10 = oS(this, hx)) || e10.setAttribute("aria-expanded", "true"), this.dispatchEvent(new Event("open", { composed: true, bubbles: true })), this.addEventListener("transitionend", () => this.focus(), { once: true });
  }, hB = /* @__PURE__ */ new WeakSet(), hH = function() {
    var e10;
    null == (e10 = oS(this, hx)) || e10.setAttribute("aria-expanded", "false"), this.dispatchEvent(new Event("close", { composed: true, bubbles: true }));
  }, hW = /* @__PURE__ */ new WeakSet(), h$ = function(e10) {
    oR(this, hx, e10.relatedTarget), ns(this, e10.relatedTarget) || (this.open = !this.open);
  }, hq = /* @__PURE__ */ new WeakSet(), hV = function(e10) {
    var t10;
    !ns(this, e10.relatedTarget) && (null == (t10 = oS(this, hD)) || t10.focus(), oS(this, hx) && oS(this, hx) !== e10.relatedTarget && this.open && (this.open = false));
  }, hK = /* @__PURE__ */ new WeakSet(), hF = function(e10) {
    var t10, a10, i10, r10, n10;
    let { key: s10, ctrlKey: o10, altKey: l10, metaKey: d10 } = e10;
    o10 || l10 || d10 || this.keysUsed.includes(s10) && (e10.preventDefault(), e10.stopPropagation(), "Tab" === s10 ? (e10.shiftKey ? null == (a10 = null == (t10 = this.previousElementSibling) ? void 0 : t10.focus) || a10.call(t10) : null == (r10 = null == (i10 = this.nextElementSibling) ? void 0 : i10.focus) || r10.call(i10), this.blur()) : "Escape" === s10 && (null == (n10 = oS(this, hD)) || n10.focus(), this.open = false));
  }, oD.shadowRootOptions = { mode: "open" }, oD.getTemplateHTML = function(e10) {
    return `
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e10)}
  `;
  }, oD.getSlotTemplateHTML = function(e10) {
    return `
    <slot id="content"></slot>
  `;
  }, r2.customElements.get("media-chrome-dialog") || r2.customElements.define("media-chrome-dialog", oD);
  try {
    var ox = "u" > typeof window ? window : e.g;
    ox._sentryModuleMetadata = ox._sentryModuleMetadata || {}, ox._sentryModuleMetadata[new ox.Error().stack] = Object.assign({}, ox._sentryModuleMetadata[new ox.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var oP = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, oO = (e10, t10, a10) => (oP(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), oN = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, oU = (e10, t10, a10, i10) => (oP(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10), oB = (e10, t10, a10) => (oP(e10, t10, "access private method"), a10);
  class oH extends r2.HTMLElement {
    constructor() {
      if (super(), oN(this, h1), oN(this, h3), oN(this, h5), oN(this, h8), oN(this, h7), oN(this, mt), oN(this, mi), oN(this, mn), oN(this, hj, void 0), oN(this, hG, void 0), oN(this, hY, void 0), oN(this, hQ, void 0), oN(this, hz, {}), oN(this, hZ, []), oN(this, hX, () => {
        if (this.range.matches(":focus-visible")) {
          let { style: e10 } = nc(this.shadowRoot, ":host");
          e10.setProperty("--_focus-visible-box-shadow", "var(--_focus-box-shadow)");
        }
      }), oN(this, hJ, () => {
        let { style: e10 } = nc(this.shadowRoot, ":host");
        e10.removeProperty("--_focus-visible-box-shadow");
      }), oN(this, h0, () => {
        let e10 = this.shadowRoot.querySelector("#segments-clipping");
        e10 && e10.parentNode.append(e10);
      }), !this.shadowRoot) {
        this.attachShadow(this.constructor.shadowRootOptions);
        const e10 = nt(this.attributes), t10 = this.constructor.getTemplateHTML(e10);
        this.shadowRoot.setHTMLUnsafe ? this.shadowRoot.setHTMLUnsafe(t10) : this.shadowRoot.innerHTML = t10;
      }
      this.container = this.shadowRoot.querySelector("#container"), oU(this, hY, this.shadowRoot.querySelector("#startpoint")), oU(this, hQ, this.shadowRoot.querySelector("#endpoint")), this.range = this.shadowRoot.querySelector("#range"), this.appearance = this.shadowRoot.querySelector("#appearance");
    }
    static get observedAttributes() {
      return ["disabled", "aria-disabled", rg.MEDIA_CONTROLLER];
    }
    attributeChangedCallback(e10, t10, a10) {
      var i10, r10, n10, s10, o10;
      e10 === rg.MEDIA_CONTROLLER ? (t10 && (null == (r10 = null == (i10 = oO(this, hj)) ? void 0 : i10.unassociateElement) || r10.call(i10, this), oU(this, hj, null)), a10 && this.isConnected && (oU(this, hj, null == (n10 = this.getRootNode()) ? void 0 : n10.getElementById(a10)), null == (o10 = null == (s10 = oO(this, hj)) ? void 0 : s10.associateElement) || o10.call(s10, this))) : ("disabled" === e10 || "aria-disabled" === e10 && t10 !== a10) && (null == a10 ? (this.range.removeAttribute(e10), oB(this, h3, h4).call(this)) : (this.range.setAttribute(e10, a10), oB(this, h5, h9).call(this)));
    }
    connectedCallback() {
      var e10, t10, a10;
      let { style: i10 } = nc(this.shadowRoot, ":host");
      i10.setProperty("display", `var(--media-control-display, var(--${this.localName}-display, inline-flex))`), oO(this, hz).pointer = nc(this.shadowRoot, "#pointer"), oO(this, hz).progress = nc(this.shadowRoot, "#progress"), oO(this, hz).thumb = nc(this.shadowRoot, '#thumb, ::slotted([slot="thumb"])'), oO(this, hz).activeSegment = nc(this.shadowRoot, "#segments-clipping rect:nth-child(0)");
      let r10 = this.getAttribute(rg.MEDIA_CONTROLLER);
      r10 && (oU(this, hj, null == (e10 = this.getRootNode()) ? void 0 : e10.getElementById(r10)), null == (a10 = null == (t10 = oO(this, hj)) ? void 0 : t10.associateElement) || a10.call(t10, this)), this.updateBar(), this.shadowRoot.addEventListener("focusin", oO(this, hX)), this.shadowRoot.addEventListener("focusout", oO(this, hJ)), oB(this, h3, h4).call(this), r6(this.container, oO(this, h0));
    }
    disconnectedCallback() {
      var e10, t10;
      oB(this, h5, h9).call(this), null == (t10 = null == (e10 = oO(this, hj)) ? void 0 : e10.unassociateElement) || t10.call(e10, this), oU(this, hj, null), this.shadowRoot.removeEventListener("focusin", oO(this, hX)), this.shadowRoot.removeEventListener("focusout", oO(this, hJ)), r7(this.container, oO(this, h0));
    }
    updatePointerBar(e10) {
      var t10;
      null == (t10 = oO(this, hz).pointer) || t10.style.setProperty("width", `${100 * this.getPointerRatio(e10)}%`);
    }
    updateBar() {
      var e10, t10;
      let a10 = 100 * this.range.valueAsNumber;
      null == (e10 = oO(this, hz).progress) || e10.style.setProperty("width", `${a10}%`), null == (t10 = oO(this, hz).thumb) || t10.style.setProperty("left", `${a10}%`);
    }
    updateSegments(e10) {
      let t10 = this.shadowRoot.querySelector("#segments-clipping");
      if (t10.textContent = "", this.container.classList.toggle("segments", !!(null == e10 ? void 0 : e10.length)), !(null == e10 ? void 0 : e10.length)) return;
      let a10 = [.../* @__PURE__ */ new Set([+this.range.min, ...e10.flatMap((e11) => [e11.start, e11.end]), +this.range.max])];
      oU(this, hZ, [...a10]);
      let i10 = a10.pop();
      for (let [e11, r10] of a10.entries()) {
        let [n10, s10] = [0 === e11, e11 === a10.length - 1], o10 = n10 ? "calc(var(--segments-gap) / -1)" : `${100 * r10}%`, l10 = s10 ? i10 : a10[e11 + 1], d10 = `calc(${(l10 - r10) * 100}%${n10 || s10 ? "" : " - var(--segments-gap)"})`, u10 = r3.createElementNS("http://www.w3.org/2000/svg", "rect"), c10 = nh(this.shadowRoot, `#segments-clipping rect:nth-child(${e11 + 1})`);
        c10.style.setProperty("x", o10), c10.style.setProperty("width", d10), t10.append(u10);
      }
    }
    getPointerRatio(e10) {
      var t10, a10, i10, r10;
      let n10, s10, o10;
      return t10 = e10.clientX, a10 = e10.clientY, i10 = oO(this, hY).getBoundingClientRect(), n10 = (r10 = oO(this, hQ).getBoundingClientRect()).x - i10.x, 0 == (o10 = n10 * n10 + (s10 = r10.y - i10.y) * s10) ? 0 : Math.max(0, Math.min(1, ((t10 - i10.x) * n10 + (a10 - i10.y) * s10) / o10));
    }
    get dragging() {
      return this.hasAttribute("dragging");
    }
    handleEvent(e10) {
      switch (e10.type) {
        case "pointermove":
          oB(this, mn, ms).call(this, e10);
          break;
        case "input":
          this.updateBar();
          break;
        case "pointerenter":
          oB(this, h7, me).call(this, e10);
          break;
        case "pointerdown":
          oB(this, h8, h6).call(this, e10);
          break;
        case "pointerup":
          oB(this, mt, ma).call(this);
          break;
        case "pointerleave":
          oB(this, mi, mr).call(this);
      }
    }
    get keysUsed() {
      return ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
    }
  }
  hj = /* @__PURE__ */ new WeakMap(), hG = /* @__PURE__ */ new WeakMap(), hY = /* @__PURE__ */ new WeakMap(), hQ = /* @__PURE__ */ new WeakMap(), hz = /* @__PURE__ */ new WeakMap(), hZ = /* @__PURE__ */ new WeakMap(), hX = /* @__PURE__ */ new WeakMap(), hJ = /* @__PURE__ */ new WeakMap(), h0 = /* @__PURE__ */ new WeakMap(), h1 = /* @__PURE__ */ new WeakSet(), h2 = function(e10) {
    let t10 = oO(this, hz).activeSegment;
    if (!t10) return;
    let a10 = this.getPointerRatio(e10), i10 = oO(this, hZ).findIndex((e11, t11, i11) => {
      let r11 = i11[t11 + 1];
      return null != r11 && a10 >= e11 && a10 <= r11;
    }), r10 = `#segments-clipping rect:nth-child(${i10 + 1})`;
    t10.selectorText == r10 && t10.style.transform || (t10.selectorText = r10, t10.style.setProperty("transform", "var(--media-range-segment-hover-transform, scaleY(2))"));
  }, h3 = /* @__PURE__ */ new WeakSet(), h4 = function() {
    !this.hasAttribute("disabled") && this.isConnected && (this.addEventListener("input", this), this.addEventListener("pointerdown", this), this.addEventListener("pointerenter", this));
  }, h5 = /* @__PURE__ */ new WeakSet(), h9 = function() {
    var e10, t10;
    this.removeEventListener("input", this), this.removeEventListener("pointerdown", this), this.removeEventListener("pointerenter", this), this.removeEventListener("pointerleave", this), null == (e10 = r2.window) || e10.removeEventListener("pointerup", this), null == (t10 = r2.window) || t10.removeEventListener("pointermove", this);
  }, h8 = /* @__PURE__ */ new WeakSet(), h6 = function(e10) {
    var t10;
    oU(this, hG, e10.composedPath().includes(this.range)), null == (t10 = r2.window) || t10.addEventListener("pointerup", this, { once: true });
  }, h7 = /* @__PURE__ */ new WeakSet(), me = function(e10) {
    var t10;
    "mouse" !== e10.pointerType && oB(this, h8, h6).call(this, e10), this.addEventListener("pointerleave", this, { once: true }), null == (t10 = r2.window) || t10.addEventListener("pointermove", this);
  }, mt = /* @__PURE__ */ new WeakSet(), ma = function() {
    var e10;
    null == (e10 = r2.window) || e10.removeEventListener("pointerup", this), this.toggleAttribute("dragging", false), this.range.disabled = this.hasAttribute("disabled");
  }, mi = /* @__PURE__ */ new WeakSet(), mr = function() {
    var e10, t10;
    this.removeEventListener("pointerleave", this), null == (e10 = r2.window) || e10.removeEventListener("pointermove", this), this.toggleAttribute("dragging", false), this.range.disabled = this.hasAttribute("disabled"), null == (t10 = oO(this, hz).activeSegment) || t10.style.removeProperty("transform");
  }, mn = /* @__PURE__ */ new WeakSet(), ms = function(e10) {
    ("pen" !== e10.pointerType || 0 !== e10.buttons) && (this.toggleAttribute("dragging", 1 === e10.buttons || "mouse" !== e10.pointerType), this.updatePointerBar(e10), oB(this, h1, h2).call(this, e10), this.dragging && ("mouse" !== e10.pointerType || !oO(this, hG)) && (this.range.disabled = true, this.range.valueAsNumber = this.getPointerRatio(e10), this.range.dispatchEvent(new Event("input", { bubbles: true, composed: true }))));
  }, oH.shadowRootOptions = { mode: "open" }, oH.getTemplateHTML = function(e10) {
    return `
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e10)}
    </div>
    <div id="rightgap"></div>
  `;
  }, oH.getContainerTemplateHTML = function(e10) {
    return "";
  }, r2.customElements.get("media-chrome-range") || r2.customElements.define("media-chrome-range", oH);
  try {
    var oW = "u" > typeof window ? window : e.g;
    oW._sentryModuleMetadata = oW._sentryModuleMetadata || {}, oW._sentryModuleMetadata[new oW.Error().stack] = Object.assign({}, oW._sentryModuleMetadata[new oW.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var o$ = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, oq = (e10, t10, a10) => (o$(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), oV = (e10, t10, a10, i10) => (o$(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10);
  class oK extends r2.HTMLElement {
    constructor() {
      if (super(), ((e10, t10, a10) => {
        if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
        t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
      })(this, mo, void 0), !this.shadowRoot) {
        this.attachShadow(this.constructor.shadowRootOptions);
        const e10 = nt(this.attributes);
        this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e10);
      }
    }
    static get observedAttributes() {
      return [rg.MEDIA_CONTROLLER];
    }
    attributeChangedCallback(e10, t10, a10) {
      var i10, r10, n10, s10, o10;
      e10 === rg.MEDIA_CONTROLLER && (t10 && (null == (r10 = null == (i10 = oq(this, mo)) ? void 0 : i10.unassociateElement) || r10.call(i10, this), oV(this, mo, null)), a10 && this.isConnected && (oV(this, mo, null == (n10 = this.getRootNode()) ? void 0 : n10.getElementById(a10)), null == (o10 = null == (s10 = oq(this, mo)) ? void 0 : s10.associateElement) || o10.call(s10, this)));
    }
    connectedCallback() {
      var e10, t10, a10;
      let i10 = this.getAttribute(rg.MEDIA_CONTROLLER);
      i10 && (oV(this, mo, null == (e10 = this.getRootNode()) ? void 0 : e10.getElementById(i10)), null == (a10 = null == (t10 = oq(this, mo)) ? void 0 : t10.associateElement) || a10.call(t10, this));
    }
    disconnectedCallback() {
      var e10, t10;
      null == (t10 = null == (e10 = oq(this, mo)) ? void 0 : e10.unassociateElement) || t10.call(e10, this), oV(this, mo, null);
    }
  }
  mo = /* @__PURE__ */ new WeakMap(), oK.shadowRootOptions = { mode: "open" }, oK.getTemplateHTML = function(e10) {
    return `
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `;
  }, r2.customElements.get("media-control-bar") || r2.customElements.define("media-control-bar", oK);
  try {
    var oF = "u" > typeof window ? window : e.g;
    oF._sentryModuleMetadata = oF._sentryModuleMetadata || {}, oF._sentryModuleMetadata[new oF.Error().stack] = Object.assign({}, oF._sentryModuleMetadata[new oF.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var oj = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, oG = (e10, t10, a10) => (oj(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), oY = (e10, t10, a10, i10) => (oj(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10);
  class oQ extends r2.HTMLElement {
    constructor() {
      if (super(), ((e10, t10, a10) => {
        if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
        t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
      })(this, ml, void 0), !this.shadowRoot) {
        this.attachShadow(this.constructor.shadowRootOptions);
        const e10 = nt(this.attributes);
        this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e10);
      }
    }
    static get observedAttributes() {
      return [rg.MEDIA_CONTROLLER];
    }
    attributeChangedCallback(e10, t10, a10) {
      var i10, r10, n10, s10, o10;
      e10 === rg.MEDIA_CONTROLLER && (t10 && (null == (r10 = null == (i10 = oG(this, ml)) ? void 0 : i10.unassociateElement) || r10.call(i10, this), oY(this, ml, null)), a10 && this.isConnected && (oY(this, ml, null == (n10 = this.getRootNode()) ? void 0 : n10.getElementById(a10)), null == (o10 = null == (s10 = oG(this, ml)) ? void 0 : s10.associateElement) || o10.call(s10, this)));
    }
    connectedCallback() {
      var e10, t10, a10;
      let { style: i10 } = nc(this.shadowRoot, ":host");
      i10.setProperty("display", `var(--media-control-display, var(--${this.localName}-display, inline-flex))`);
      let r10 = this.getAttribute(rg.MEDIA_CONTROLLER);
      r10 && (oY(this, ml, null == (e10 = this.getRootNode()) ? void 0 : e10.getElementById(r10)), null == (a10 = null == (t10 = oG(this, ml)) ? void 0 : t10.associateElement) || a10.call(t10, this));
    }
    disconnectedCallback() {
      var e10, t10;
      null == (t10 = null == (e10 = oG(this, ml)) ? void 0 : e10.unassociateElement) || t10.call(e10, this), oY(this, ml, null);
    }
  }
  ml = /* @__PURE__ */ new WeakMap(), oQ.shadowRootOptions = { mode: "open" }, oQ.getTemplateHTML = function(e10, t10 = {}) {
    return `
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e10, t10)}
  `;
  }, oQ.getSlotTemplateHTML = function(e10, t10) {
    return `
    <slot></slot>
  `;
  }, r2.customElements.get("media-text-display") || r2.customElements.define("media-text-display", oQ);
  try {
    var oz = "u" > typeof window ? window : e.g;
    oz._sentryModuleMetadata = oz._sentryModuleMetadata || {}, oz._sentryModuleMetadata[new oz.Error().stack] = Object.assign({}, oz._sentryModuleMetadata[new oz.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var oZ = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, oX = (e10, t10, a10) => (oZ(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10));
  class oJ extends oQ {
    constructor() {
      var e10;
      super(), ((e11, t10, a10) => {
        if (t10.has(e11)) throw TypeError("Cannot add the same private member more than once");
        t10 instanceof WeakSet ? t10.add(e11) : t10.set(e11, a10);
      })(this, md, void 0), ((e11, t10, a10) => (oZ(e11, t10, "write to private field"), t10.set(e11, a10)))(this, md, this.shadowRoot.querySelector("slot")), oX(this, md).textContent = rj(null != (e10 = this.mediaDuration) ? e10 : 0);
    }
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_DURATION];
    }
    attributeChangedCallback(e10, t10, a10) {
      e10 === rE.MEDIA_DURATION && (oX(this, md).textContent = rj(+a10)), super.attributeChangedCallback(e10, t10, a10);
    }
    get mediaDuration() {
      return nm(this, rE.MEDIA_DURATION);
    }
    set mediaDuration(e10) {
      np(this, rE.MEDIA_DURATION, e10);
    }
  }
  md = /* @__PURE__ */ new WeakMap(), oJ.getSlotTemplateHTML = function(e10, t10) {
    return `
    <slot>${rj(t10.mediaDuration)}</slot>
  `;
  }, r2.customElements.get("media-duration-display") || r2.customElements.define("media-duration-display", oJ);
  try {
    var o0 = "u" > typeof window ? window : e.g;
    o0._sentryModuleMetadata = o0._sentryModuleMetadata || {}, o0._sentryModuleMetadata[new o0.Error().stack] = Object.assign({}, o0._sentryModuleMetadata[new o0.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let o1 = { 2: rq("Network Error"), 3: rq("Decode Error"), 4: rq("Source Not Supported"), 5: rq("Encryption Error") }, o2 = { 2: rq("A network error caused the media download to fail."), 3: rq("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."), 4: rq("An unsupported error occurred. The server or network failed, or your browser does not support this format."), 5: rq("The media is encrypted and there are no keys to decrypt it.") }, o3 = (e10) => {
    var t10, a10;
    return 1 === e10.code ? null : { title: null != (t10 = o1[e10.code]) ? t10 : `Error ${e10.code}`, message: null != (a10 = o2[e10.code]) ? a10 : e10.message };
  };
  try {
    var o4 = "u" > typeof window ? window : e.g;
    o4._sentryModuleMetadata = o4._sentryModuleMetadata || {}, o4._sentryModuleMetadata[new o4.Error().stack] = Object.assign({}, o4._sentryModuleMetadata[new o4.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var o5 = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  };
  function o9(e10) {
    var t10;
    let { title: a10, message: i10 } = null != (t10 = o3(e10)) ? t10 : {}, r10 = "";
    return a10 && (r10 += `<slot name="error-${e10.code}-title"><h3>${a10}</h3></slot>`), i10 && (r10 += `<slot name="error-${e10.code}-message"><p>${i10}</p></slot>`), r10;
  }
  let o8 = [rE.MEDIA_ERROR_CODE, rE.MEDIA_ERROR_MESSAGE];
  class o6 extends oD {
    constructor() {
      super(...arguments), ((e10, t10) => {
        if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
        t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, null);
      })(this, mu);
    }
    static get observedAttributes() {
      return [...super.observedAttributes, ...o8];
    }
    formatErrorMessage(e10) {
      return this.constructor.formatErrorMessage(e10);
    }
    attributeChangedCallback(e10, t10, a10) {
      var i10;
      if (super.attributeChangedCallback(e10, t10, a10), !o8.includes(e10)) return;
      let r10 = null != (i10 = this.mediaError) ? i10 : { code: this.mediaErrorCode, message: this.mediaErrorMessage };
      if (this.open = r10.code && null !== o3(r10), this.open && (this.shadowRoot.querySelector("slot").name = `error-${this.mediaErrorCode}`, this.shadowRoot.querySelector("#content").innerHTML = this.formatErrorMessage(r10), !this.hasAttribute("aria-label"))) {
        let { title: e11 } = o3(r10);
        e11 && this.setAttribute("aria-label", e11);
      }
    }
    get mediaError() {
      var e10;
      return o5(this, e10 = mu, "read from private field"), e10.get(this);
    }
    set mediaError(e10) {
      var t10;
      o5(this, t10 = mu, "write to private field"), t10.set(this, e10);
    }
    get mediaErrorCode() {
      return nm(this, "mediaerrorcode");
    }
    set mediaErrorCode(e10) {
      np(this, "mediaerrorcode", e10);
    }
    get mediaErrorMessage() {
      return ng(this, "mediaerrormessage");
    }
    set mediaErrorMessage(e10) {
      ny(this, "mediaerrormessage", e10);
    }
  }
  mu = /* @__PURE__ */ new WeakMap(), o6.getSlotTemplateHTML = function(e10) {
    return `
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e10.mediaerrorcode}" id="content">
      ${o9({ code: +e10.mediaerrorcode, message: e10.mediaerrormessage })}
    </slot>
  `;
  }, o6.formatErrorMessage = o9, r2.customElements.get("media-error-dialog") || r2.customElements.define("media-error-dialog", o6);
  try {
    var o7 = "u" > typeof window ? window : e.g;
    o7._sentryModuleMetadata = o7._sentryModuleMetadata || {}, o7._sentryModuleMetadata[new o7.Error().stack] = Object.assign({}, o7._sentryModuleMetadata[new o7.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var le = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot read from private field");
    return a10 ? a10.call(e10) : t10.get(e10);
  }, lt = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  };
  class la extends oD {
    constructor() {
      super(...arguments), lt(this, mc, (e10) => {
        var t10;
        if (!this.open) return;
        let a10 = null == (t10 = this.shadowRoot) ? void 0 : t10.querySelector("#content");
        if (!a10) return;
        let i10 = e10.composedPath(), r10 = i10[0] === this || i10.includes(this), n10 = i10.includes(a10);
        r10 && !n10 && (this.open = false);
      }), lt(this, mh, (e10) => {
        if (!this.open) return;
        let t10 = e10.shiftKey && ("/" === e10.key || "?" === e10.key);
        "Escape" !== e10.key && !t10 || e10.ctrlKey || e10.altKey || e10.metaKey || (this.open = false, e10.preventDefault(), e10.stopPropagation());
      });
    }
    connectedCallback() {
      super.connectedCallback(), this.open && (this.addEventListener("click", le(this, mc)), document.addEventListener("keydown", le(this, mh)));
    }
    disconnectedCallback() {
      this.removeEventListener("click", le(this, mc)), document.removeEventListener("keydown", le(this, mh));
    }
    attributeChangedCallback(e10, t10, a10) {
      super.attributeChangedCallback(e10, t10, a10), "open" === e10 && (this.open ? (this.addEventListener("click", le(this, mc)), document.addEventListener("keydown", le(this, mh))) : (this.removeEventListener("click", le(this, mc)), document.removeEventListener("keydown", le(this, mh))));
    }
  }
  mc = /* @__PURE__ */ new WeakMap(), mh = /* @__PURE__ */ new WeakMap(), la.getSlotTemplateHTML = function(e10) {
    let t10;
    return `
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${t10 = [{ keys: ["Space", "k"], description: "Toggle Playback" }, { keys: ["m"], description: "Toggle mute" }, { keys: ["f"], description: "Toggle fullscreen" }, { keys: ["c"], description: "Toggle captions or subtitles, if available" }, { keys: ["p"], description: "Toggle Picture in Picture" }, { keys: ["\u2190", "j"], description: "Seek back 10s" }, { keys: ["\u2192", "l"], description: "Seek forward 10s" }, { keys: ["\u2191"], description: "Turn volume up" }, { keys: ["\u2193"], description: "Turn volume down" }, { keys: ["< (SHIFT+,)"], description: "Decrease playback rate" }, { keys: ["> (SHIFT+.)"], description: "Increase playback rate" }].map(({ keys: e11, description: t11 }) => {
      let a10 = e11.map((e12, t12) => t12 > 0 ? `<span class="key-separator">or</span><span class="key">${e12}</span>` : `<span class="key">${e12}</span>`).join("");
      return `
      <tr>
        <td>
          <div class="key-combo">${a10}</div>
        </td>
        <td class="description">${t11}</td>
      </tr>
    `;
    }).join(""), `
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${t10}</table>
  `}
    </slot>
  `;
  }, r2.customElements.get("media-keyboard-shortcuts-dialog") || r2.customElements.define("media-keyboard-shortcuts-dialog", la);
  try {
    var li = "u" > typeof window ? window : e.g;
    li._sentryModuleMetadata = li._sentryModuleMetadata || {}, li._sentryModuleMetadata[new li.Error().stack] = Object.assign({}, li._sentryModuleMetadata[new li.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var lr = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  };
  let ln = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`, ls = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`, lo = (e10) => {
    let t10 = e10.mediaIsFullscreen ? rq("exit fullscreen mode") : rq("enter fullscreen mode");
    e10.setAttribute("aria-label", t10);
  };
  class ll extends ou {
    constructor() {
      super(...arguments), ((e10, t10) => {
        if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
        t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, null);
      })(this, mm);
    }
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_IS_FULLSCREEN, rE.MEDIA_FULLSCREEN_UNAVAILABLE];
    }
    connectedCallback() {
      super.connectedCallback(), lo(this);
    }
    attributeChangedCallback(e10, t10, a10) {
      super.attributeChangedCallback(e10, t10, a10), e10 === rE.MEDIA_IS_FULLSCREEN && lo(this);
    }
    get mediaFullscreenUnavailable() {
      return ng(this, rE.MEDIA_FULLSCREEN_UNAVAILABLE);
    }
    set mediaFullscreenUnavailable(e10) {
      ny(this, rE.MEDIA_FULLSCREEN_UNAVAILABLE, e10);
    }
    get mediaIsFullscreen() {
      return nv(this, rE.MEDIA_IS_FULLSCREEN);
    }
    set mediaIsFullscreen(e10) {
      nb(this, rE.MEDIA_IS_FULLSCREEN, e10);
    }
    handleClick(e10) {
      var t10, a10;
      lr(this, t10 = mm, "write to private field"), t10.set(this, e10);
      let i10 = (lr(this, a10 = mm, "read from private field"), a10.get(this) instanceof PointerEvent), r10 = this.mediaIsFullscreen ? new r2.CustomEvent(rb.MEDIA_EXIT_FULLSCREEN_REQUEST, { composed: true, bubbles: true }) : new r2.CustomEvent(rb.MEDIA_ENTER_FULLSCREEN_REQUEST, { composed: true, bubbles: true, detail: i10 });
      this.dispatchEvent(r10);
    }
  }
  mm = /* @__PURE__ */ new WeakMap(), ll.getSlotTemplateHTML = function(e10) {
    return `
    <style>
      :host([${rE.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${rE.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rE.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${rE.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ln}</slot>
      <slot name="exit">${ls}</slot>
    </slot>
  `;
  }, ll.getTooltipContentHTML = function() {
    return `
    <slot name="tooltip-enter">${rq("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${rq("Exit fullscreen mode")}</slot>
  `;
  }, r2.customElements.get("media-fullscreen-button") || r2.customElements.define("media-fullscreen-button", ll);
  try {
    var ld = "u" > typeof window ? window : e.g;
    ld._sentryModuleMetadata = ld._sentryModuleMetadata || {}, ld._sentryModuleMetadata[new ld.Error().stack] = Object.assign({}, ld._sentryModuleMetadata[new ld.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let { MEDIA_TIME_IS_LIVE: lu, MEDIA_PAUSED: lc } = rE, { MEDIA_SEEK_TO_LIVE_REQUEST: lh, MEDIA_PLAY_REQUEST: lm } = rb, lp = (e10) => {
    var t10;
    let a10 = e10.mediaPaused || !e10.mediaTimeIsLive, i10 = a10 ? rq("seek to live") : rq("playing live");
    e10.setAttribute("aria-label", i10);
    let r10 = null == (t10 = e10.shadowRoot) ? void 0 : t10.querySelector('slot[name="text"]');
    r10 && (r10.textContent = rq("live")), a10 ? e10.removeAttribute("aria-disabled") : e10.setAttribute("aria-disabled", "true");
  };
  class lv extends ou {
    static get observedAttributes() {
      return [...super.observedAttributes, lu, lc];
    }
    connectedCallback() {
      super.connectedCallback(), lp(this);
    }
    attributeChangedCallback(e10, t10, a10) {
      super.attributeChangedCallback(e10, t10, a10), lp(this);
    }
    get mediaPaused() {
      return nv(this, rE.MEDIA_PAUSED);
    }
    set mediaPaused(e10) {
      nb(this, rE.MEDIA_PAUSED, e10);
    }
    get mediaTimeIsLive() {
      return nv(this, rE.MEDIA_TIME_IS_LIVE);
    }
    set mediaTimeIsLive(e10) {
      nb(this, rE.MEDIA_TIME_IS_LIVE, e10);
    }
    handleClick() {
      (this.mediaPaused || !this.mediaTimeIsLive) && (this.dispatchEvent(new r2.CustomEvent(lh, { composed: true, bubbles: true })), this.hasAttribute(lc) && this.dispatchEvent(new r2.CustomEvent(lm, { composed: true, bubbles: true })));
    }
  }
  lv.getSlotTemplateHTML = function(e10) {
    return `
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${lu}]:not([${lc}])) slot[name=indicator] > *,
      :host([${lu}]:not([${lc}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${lu}]:not([${lc}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${rq("live")}</slot>
  `;
  }, r2.customElements.get("media-live-button") || r2.customElements.define("media-live-button", lv);
  try {
    var lb = "u" > typeof window ? window : e.g;
    lb._sentryModuleMetadata = lb._sentryModuleMetadata || {}, lb._sentryModuleMetadata[new lb.Error().stack] = Object.assign({}, lb._sentryModuleMetadata[new lb.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var lg = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, ly = (e10, t10, a10) => (lg(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), lf = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, lE = (e10, t10, a10, i10) => (lg(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10);
  let l_ = "loadingdelay", lw = "noautohide", lT = `
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;
  class lA extends r2.HTMLElement {
    constructor() {
      if (super(), lf(this, mp, void 0), lf(this, mv, 500), !this.shadowRoot) {
        this.attachShadow(this.constructor.shadowRootOptions);
        const e10 = nt(this.attributes);
        this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e10);
      }
    }
    static get observedAttributes() {
      return [rg.MEDIA_CONTROLLER, rE.MEDIA_PAUSED, rE.MEDIA_LOADING, l_];
    }
    attributeChangedCallback(e10, t10, a10) {
      var i10, r10, n10, s10, o10;
      e10 === l_ && t10 !== a10 ? this.loadingDelay = Number(a10) : e10 === rg.MEDIA_CONTROLLER && (t10 && (null == (r10 = null == (i10 = ly(this, mp)) ? void 0 : i10.unassociateElement) || r10.call(i10, this), lE(this, mp, null)), a10 && this.isConnected && (lE(this, mp, null == (n10 = this.getRootNode()) ? void 0 : n10.getElementById(a10)), null == (o10 = null == (s10 = ly(this, mp)) ? void 0 : s10.associateElement) || o10.call(s10, this)));
    }
    connectedCallback() {
      var e10, t10, a10;
      let i10 = this.getAttribute(rg.MEDIA_CONTROLLER);
      i10 && (lE(this, mp, null == (e10 = this.getRootNode()) ? void 0 : e10.getElementById(i10)), null == (a10 = null == (t10 = ly(this, mp)) ? void 0 : t10.associateElement) || a10.call(t10, this));
    }
    disconnectedCallback() {
      var e10, t10;
      null == (t10 = null == (e10 = ly(this, mp)) ? void 0 : e10.unassociateElement) || t10.call(e10, this), lE(this, mp, null);
    }
    get loadingDelay() {
      return ly(this, mv);
    }
    set loadingDelay(e10) {
      lE(this, mv, e10);
      let { style: t10 } = nc(this.shadowRoot, ":host");
      t10.setProperty("--_loading-indicator-delay", `var(--media-loading-indicator-transition-delay, ${e10}ms)`);
    }
    get mediaPaused() {
      return nv(this, rE.MEDIA_PAUSED);
    }
    set mediaPaused(e10) {
      nb(this, rE.MEDIA_PAUSED, e10);
    }
    get mediaLoading() {
      return nv(this, rE.MEDIA_LOADING);
    }
    set mediaLoading(e10) {
      nb(this, rE.MEDIA_LOADING, e10);
    }
    get mediaController() {
      return ng(this, rg.MEDIA_CONTROLLER);
    }
    set mediaController(e10) {
      ny(this, rg.MEDIA_CONTROLLER, e10);
    }
    get noAutohide() {
      return nv(this, lw);
    }
    set noAutohide(e10) {
      nb(this, lw, e10);
    }
  }
  mp = /* @__PURE__ */ new WeakMap(), mv = /* @__PURE__ */ new WeakMap(), lA.shadowRootOptions = { mode: "open" }, lA.getTemplateHTML = function(e10) {
    return `
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${rE.MEDIA_LOADING}]:not([${rE.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${rE.MEDIA_LOADING}]:not([${rE.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${rE.MEDIA_LOADING}]:not([${rE.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${lT}</slot>
    <div id="status" role="status" aria-live="polite">${rq("media loading")}</div>
  `;
  }, r2.customElements.get("media-loading-indicator") || r2.customElements.define("media-loading-indicator", lA);
  try {
    var lk = "u" > typeof window ? window : e.g;
    lk._sentryModuleMetadata = lk._sentryModuleMetadata || {}, lk._sentryModuleMetadata[new lk.Error().stack] = Object.assign({}, lk._sentryModuleMetadata[new lk.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let lM = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`, lS = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`, lI = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`, lR = (e10) => {
    let t10 = "off" === e10.mediaVolumeLevel ? rq("unmute") : rq("mute");
    e10.setAttribute("aria-label", t10);
  };
  class lC extends ou {
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_VOLUME_LEVEL];
    }
    connectedCallback() {
      super.connectedCallback(), lR(this);
    }
    attributeChangedCallback(e10, t10, a10) {
      super.attributeChangedCallback(e10, t10, a10), e10 === rE.MEDIA_VOLUME_LEVEL && lR(this);
    }
    get mediaVolumeLevel() {
      return ng(this, rE.MEDIA_VOLUME_LEVEL);
    }
    set mediaVolumeLevel(e10) {
      ny(this, rE.MEDIA_VOLUME_LEVEL, e10);
    }
    handleClick() {
      let e10 = "off" === this.mediaVolumeLevel ? rb.MEDIA_UNMUTE_REQUEST : rb.MEDIA_MUTE_REQUEST;
      this.dispatchEvent(new r2.CustomEvent(e10, { composed: true, bubbles: true }));
    }
  }
  lC.getSlotTemplateHTML = function(e10) {
    return `
    <style>
      :host(:not([${rE.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${rE.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${rE.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${rE.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${rE.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${rE.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${rE.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${lM}</slot>
      <slot name="low">${lS}</slot>
      <slot name="medium">${lS}</slot>
      <slot name="high">${lI}</slot>
    </slot>
  `;
  }, lC.getTooltipContentHTML = function() {
    return `
    <slot name="tooltip-mute">${rq("Mute")}</slot>
    <slot name="tooltip-unmute">${rq("Unmute")}</slot>
  `;
  }, r2.customElements.get("media-mute-button") || r2.customElements.define("media-mute-button", lC);
  try {
    var lL = "u" > typeof window ? window : e.g;
    lL._sentryModuleMetadata = lL._sentryModuleMetadata || {}, lL._sentryModuleMetadata[new lL.Error().stack] = Object.assign({}, lL._sentryModuleMetadata[new lL.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let lD = `<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`, lx = (e10) => {
    let t10 = e10.mediaIsPip ? rq("exit picture in picture mode") : rq("enter picture in picture mode");
    e10.setAttribute("aria-label", t10);
  };
  class lP extends ou {
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_IS_PIP, rE.MEDIA_PIP_UNAVAILABLE];
    }
    connectedCallback() {
      super.connectedCallback(), lx(this);
    }
    attributeChangedCallback(e10, t10, a10) {
      super.attributeChangedCallback(e10, t10, a10), e10 === rE.MEDIA_IS_PIP && lx(this);
    }
    get mediaPipUnavailable() {
      return ng(this, rE.MEDIA_PIP_UNAVAILABLE);
    }
    set mediaPipUnavailable(e10) {
      ny(this, rE.MEDIA_PIP_UNAVAILABLE, e10);
    }
    get mediaIsPip() {
      return nv(this, rE.MEDIA_IS_PIP);
    }
    set mediaIsPip(e10) {
      nb(this, rE.MEDIA_IS_PIP, e10);
    }
    handleClick() {
      let e10 = this.mediaIsPip ? rb.MEDIA_EXIT_PIP_REQUEST : rb.MEDIA_ENTER_PIP_REQUEST;
      this.dispatchEvent(new r2.CustomEvent(e10, { composed: true, bubbles: true }));
    }
  }
  lP.getSlotTemplateHTML = function(e10) {
    return `
    <style>
      :host([${rE.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${rE.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rE.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${rE.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${lD}</slot>
      <slot name="exit">${lD}</slot>
    </slot>
  `;
  }, lP.getTooltipContentHTML = function() {
    return `
    <slot name="tooltip-enter">${rq("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${rq("Exit picture in picture mode")}</slot>
  `;
  }, r2.customElements.get("media-pip-button") || r2.customElements.define("media-pip-button", lP);
  try {
    var lO = "u" > typeof window ? window : e.g;
    lO._sentryModuleMetadata = lO._sentryModuleMetadata || {}, lO._sentryModuleMetadata[new lO.Error().stack] = Object.assign({}, lO._sentryModuleMetadata[new lO.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var lN = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot read from private field");
    return a10 ? a10.call(e10) : t10.get(e10);
  };
  let lU = "rates", lB = [1, 1.2, 1.5, 1.7, 2];
  class lH extends ou {
    constructor() {
      var e10;
      super(), ((e11, t10, a10) => {
        if (t10.has(e11)) throw TypeError("Cannot add the same private member more than once");
        t10 instanceof WeakSet ? t10.add(e11) : t10.set(e11, a10);
      })(this, mb, new nj(this, lU, { defaultValue: lB })), this.container = this.shadowRoot.querySelector('slot[name="icon"]'), this.container.innerHTML = `${null != (e10 = this.mediaPlaybackRate) ? e10 : 1}x`;
    }
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_PLAYBACK_RATE, lU];
    }
    attributeChangedCallback(e10, t10, a10) {
      if (super.attributeChangedCallback(e10, t10, a10), e10 === lU && (lN(this, mb).value = a10), e10 === rE.MEDIA_PLAYBACK_RATE) {
        let e11 = a10 ? +a10 : NaN, t11 = Number.isNaN(e11) ? 1 : e11;
        this.container.innerHTML = `${t11}x`, this.setAttribute("aria-label", rq("Playback rate {playbackRate}", { playbackRate: t11 }));
      }
    }
    get rates() {
      return lN(this, mb);
    }
    set rates(e10) {
      e10 ? Array.isArray(e10) ? lN(this, mb).value = e10.join(" ") : "string" == typeof e10 && (lN(this, mb).value = e10) : lN(this, mb).value = "";
    }
    get mediaPlaybackRate() {
      return nm(this, rE.MEDIA_PLAYBACK_RATE, 1);
    }
    set mediaPlaybackRate(e10) {
      np(this, rE.MEDIA_PLAYBACK_RATE, e10);
    }
    handleClick() {
      var e10, t10;
      let a10 = Array.from(lN(this, mb).values(), (e11) => +e11).sort((e11, t11) => e11 - t11), i10 = null != (t10 = null != (e10 = a10.find((e11) => e11 > this.mediaPlaybackRate)) ? e10 : a10[0]) ? t10 : 1, r10 = new r2.CustomEvent(rb.MEDIA_PLAYBACK_RATE_REQUEST, { composed: true, bubbles: true, detail: i10 });
      this.dispatchEvent(r10);
    }
  }
  mb = /* @__PURE__ */ new WeakMap(), lH.getSlotTemplateHTML = function(e10) {
    return `
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e10.mediaplaybackrate || 1}x</slot>
  `;
  }, lH.getTooltipContentHTML = function() {
    return rq("Playback rate");
  }, r2.customElements.get("media-playback-rate-button") || r2.customElements.define("media-playback-rate-button", lH);
  try {
    var lW = "u" > typeof window ? window : e.g;
    lW._sentryModuleMetadata = lW._sentryModuleMetadata || {}, lW._sentryModuleMetadata[new lW.Error().stack] = Object.assign({}, lW._sentryModuleMetadata[new lW.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let l$ = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`, lq = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`, lV = (e10) => {
    let t10 = e10.mediaPaused ? rq("play") : rq("pause");
    e10.setAttribute("aria-label", t10);
  };
  class lK extends ou {
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_PAUSED, rE.MEDIA_ENDED];
    }
    connectedCallback() {
      super.connectedCallback(), lV(this);
    }
    attributeChangedCallback(e10, t10, a10) {
      super.attributeChangedCallback(e10, t10, a10), (e10 === rE.MEDIA_PAUSED || e10 === rE.MEDIA_LANG) && lV(this);
    }
    get mediaPaused() {
      return nv(this, rE.MEDIA_PAUSED);
    }
    set mediaPaused(e10) {
      nb(this, rE.MEDIA_PAUSED, e10);
    }
    handleClick() {
      let e10 = this.mediaPaused ? rb.MEDIA_PLAY_REQUEST : rb.MEDIA_PAUSE_REQUEST;
      this.dispatchEvent(new r2.CustomEvent(e10, { composed: true, bubbles: true }));
    }
  }
  lK.getSlotTemplateHTML = function(e10) {
    return `
    <style>
      :host([${rE.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${rE.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${rE.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${rE.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${l$}</slot>
      <slot name="pause">${lq}</slot>
    </slot>
  `;
  }, lK.getTooltipContentHTML = function() {
    return `
    <slot name="tooltip-play">${rq("Play")}</slot>
    <slot name="tooltip-pause">${rq("Pause")}</slot>
  `;
  }, r2.customElements.get("media-play-button") || r2.customElements.define("media-play-button", lK);
  try {
    var lF = "u" > typeof window ? window : e.g;
    lF._sentryModuleMetadata = lF._sentryModuleMetadata || {}, lF._sentryModuleMetadata[new lF.Error().stack] = Object.assign({}, lF._sentryModuleMetadata[new lF.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let lj = "placeholdersrc";
  class lG extends r2.HTMLElement {
    static get observedAttributes() {
      return [lj, "src"];
    }
    constructor() {
      if (super(), !this.shadowRoot) {
        this.attachShadow(this.constructor.shadowRootOptions);
        const e10 = nt(this.attributes);
        this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e10);
      }
      this.image = this.shadowRoot.querySelector("#image");
    }
    attributeChangedCallback(e10, t10, a10) {
      if ("src" === e10 && (null == a10 ? this.image.removeAttribute("src") : this.image.setAttribute("src", a10)), e10 === lj) if (null == a10) this.image.style.removeProperty("background-image");
      else {
        var i10;
        i10 = this.image, i10.style["background-image"] = `url('${a10}')`;
      }
    }
    get placeholderSrc() {
      return ng(this, lj);
    }
    set placeholderSrc(e10) {
      ny(this, "src", e10);
    }
    get src() {
      return ng(this, "src");
    }
    set src(e10) {
      ny(this, "src", e10);
    }
  }
  lG.shadowRootOptions = { mode: "open" }, lG.getTemplateHTML = function(e10) {
    return `
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `;
  }, r2.customElements.get("media-poster-image") || r2.customElements.define("media-poster-image", lG);
  try {
    var lY = "u" > typeof window ? window : e.g;
    lY._sentryModuleMetadata = lY._sentryModuleMetadata || {}, lY._sentryModuleMetadata[new lY.Error().stack] = Object.assign({}, lY._sentryModuleMetadata[new lY.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var lQ = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  };
  mg = /* @__PURE__ */ new WeakMap(), r2.customElements.get("media-preview-chapter-display") || r2.customElements.define("media-preview-chapter-display", class extends oQ {
    constructor() {
      super(), ((e10, t10, a10) => {
        if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
        t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
      })(this, mg, void 0), ((e10, t10, a10) => (lQ(e10, t10, "write to private field"), t10.set(e10, a10)))(this, mg, this.shadowRoot.querySelector("slot"));
    }
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_PREVIEW_CHAPTER, rE.MEDIA_LANG];
    }
    attributeChangedCallback(e10, t10, a10) {
      if (super.attributeChangedCallback(e10, t10, a10), (e10 === rE.MEDIA_PREVIEW_CHAPTER || e10 === rE.MEDIA_LANG) && a10 !== t10 && null != a10) if ((lQ(this, mg, "read from private field"), mg.get(this)).textContent = a10, "" !== a10) {
        let e11 = rq("chapter: {chapterName}", { chapterName: a10 });
        this.setAttribute("aria-valuetext", e11);
      } else this.removeAttribute("aria-valuetext");
    }
    get mediaPreviewChapter() {
      return ng(this, rE.MEDIA_PREVIEW_CHAPTER);
    }
    set mediaPreviewChapter(e10) {
      ny(this, rE.MEDIA_PREVIEW_CHAPTER, e10);
    }
  });
  try {
    var lz = "u" > typeof window ? window : e.g;
    lz._sentryModuleMetadata = lz._sentryModuleMetadata || {}, lz._sentryModuleMetadata[new lz.Error().stack] = Object.assign({}, lz._sentryModuleMetadata[new lz.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var lZ = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, lX = (e10, t10, a10) => (lZ(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), lJ = (e10, t10, a10, i10) => (lZ(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10);
  class l0 extends r2.HTMLElement {
    constructor() {
      if (super(), ((e10, t10, a10) => {
        if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
        t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
      })(this, my, void 0), !this.shadowRoot) {
        this.attachShadow(this.constructor.shadowRootOptions);
        const e10 = nt(this.attributes);
        this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e10);
      }
    }
    static get observedAttributes() {
      return [rg.MEDIA_CONTROLLER, rE.MEDIA_PREVIEW_IMAGE, rE.MEDIA_PREVIEW_COORDS];
    }
    connectedCallback() {
      var e10, t10, a10;
      let i10 = this.getAttribute(rg.MEDIA_CONTROLLER);
      i10 && (lJ(this, my, null == (e10 = this.getRootNode()) ? void 0 : e10.getElementById(i10)), null == (a10 = null == (t10 = lX(this, my)) ? void 0 : t10.associateElement) || a10.call(t10, this));
    }
    disconnectedCallback() {
      var e10, t10;
      null == (t10 = null == (e10 = lX(this, my)) ? void 0 : e10.unassociateElement) || t10.call(e10, this), lJ(this, my, null);
    }
    attributeChangedCallback(e10, t10, a10) {
      var i10, r10, n10, s10, o10;
      [rE.MEDIA_PREVIEW_IMAGE, rE.MEDIA_PREVIEW_COORDS].includes(e10) && this.update(), e10 === rg.MEDIA_CONTROLLER && (t10 && (null == (r10 = null == (i10 = lX(this, my)) ? void 0 : i10.unassociateElement) || r10.call(i10, this), lJ(this, my, null)), a10 && this.isConnected && (lJ(this, my, null == (n10 = this.getRootNode()) ? void 0 : n10.getElementById(a10)), null == (o10 = null == (s10 = lX(this, my)) ? void 0 : s10.associateElement) || o10.call(s10, this)));
    }
    get mediaPreviewImage() {
      return ng(this, rE.MEDIA_PREVIEW_IMAGE);
    }
    set mediaPreviewImage(e10) {
      ny(this, rE.MEDIA_PREVIEW_IMAGE, e10);
    }
    get mediaPreviewCoords() {
      let e10 = this.getAttribute(rE.MEDIA_PREVIEW_COORDS);
      if (e10) return e10.split(/\s+/).map((e11) => +e11);
    }
    set mediaPreviewCoords(e10) {
      e10 ? this.setAttribute(rE.MEDIA_PREVIEW_COORDS, e10.join(" ")) : this.removeAttribute(rE.MEDIA_PREVIEW_COORDS);
    }
    update() {
      let e10, t10, a10 = this.mediaPreviewCoords, i10 = this.mediaPreviewImage;
      if (!(a10 && i10)) return;
      let [r10, n10, s10, o10] = a10, l10 = i10.split("#")[0], d10 = getComputedStyle(this), { maxWidth: u10, maxHeight: c10, minWidth: h10, minHeight: m10 } = d10;
      if ("fill" === (d10.getPropertyValue("--media-preview-thumbnail-object-fit").trim() || "contain")) {
        let a11 = parseInt(u10) / s10, i11 = parseInt(c10) / o10, r11 = parseInt(h10) / s10, n11 = parseInt(m10) / o10;
        e10 = a11 < 1 ? a11 : Math.max(a11, r11), t10 = i11 < 1 ? i11 : Math.max(i11, n11);
      } else {
        let a11 = Math.min(parseInt(u10) / s10, parseInt(c10) / o10), i11 = Math.max(parseInt(h10) / s10, parseInt(m10) / o10), r11 = a11 < 1 ? a11 : i11 > 1 ? i11 : 1;
        e10 = r11, t10 = r11;
      }
      let { style: p10 } = nc(this.shadowRoot, ":host"), v10 = nc(this.shadowRoot, "img").style, b10 = this.shadowRoot.querySelector("img"), g2 = 1 > Math.min(e10, t10) ? "min" : "max";
      p10.setProperty(`${g2}-width`, "initial", "important"), p10.setProperty(`${g2}-height`, "initial", "important"), p10.width = `${s10 * e10}px`, p10.height = `${o10 * t10}px`;
      let y2 = () => {
        v10.width = `${this.imgWidth * e10}px`, v10.height = `${this.imgHeight * t10}px`, v10.display = "block";
      };
      b10.src !== l10 && (b10.onload = () => {
        this.imgWidth = b10.naturalWidth, this.imgHeight = b10.naturalHeight, y2(), b10.onload = null;
      }, b10.src = l10, y2()), y2(), v10.transform = `translate(-${r10 * e10}px, -${n10 * t10}px)`;
    }
  }
  my = /* @__PURE__ */ new WeakMap(), l0.shadowRootOptions = { mode: "open" }, l0.getTemplateHTML = function(e10) {
    return `
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `;
  }, r2.customElements.get("media-preview-thumbnail") || r2.customElements.define("media-preview-thumbnail", l0);
  try {
    var l1 = "u" > typeof window ? window : e.g;
    l1._sentryModuleMetadata = l1._sentryModuleMetadata || {}, l1._sentryModuleMetadata[new l1.Error().stack] = Object.assign({}, l1._sentryModuleMetadata[new l1.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var l2 = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, l3 = (e10, t10, a10) => (l2(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10));
  mf = /* @__PURE__ */ new WeakMap(), r2.customElements.get("media-preview-time-display") || r2.customElements.define("media-preview-time-display", class extends oQ {
    constructor() {
      super(), ((e10, t10, a10) => {
        if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
        t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
      })(this, mf, void 0), ((e10, t10, a10) => (l2(e10, t10, "write to private field"), t10.set(e10, a10)))(this, mf, this.shadowRoot.querySelector("slot")), l3(this, mf).textContent = rj(0);
    }
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_PREVIEW_TIME];
    }
    attributeChangedCallback(e10, t10, a10) {
      super.attributeChangedCallback(e10, t10, a10), e10 === rE.MEDIA_PREVIEW_TIME && null != a10 && (l3(this, mf).textContent = rj(parseFloat(a10)));
    }
    get mediaPreviewTime() {
      return nm(this, rE.MEDIA_PREVIEW_TIME);
    }
    set mediaPreviewTime(e10) {
      np(this, rE.MEDIA_PREVIEW_TIME, e10);
    }
  });
  try {
    var l4 = "u" > typeof window ? window : e.g;
    l4._sentryModuleMetadata = l4._sentryModuleMetadata || {}, l4._sentryModuleMetadata[new l4.Error().stack] = Object.assign({}, l4._sentryModuleMetadata[new l4.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let l5 = "seekoffset";
  class l9 extends ou {
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_CURRENT_TIME, l5];
    }
    connectedCallback() {
      super.connectedCallback(), this.seekOffset = nm(this, l5, 30);
    }
    attributeChangedCallback(e10, t10, a10) {
      var i10;
      super.attributeChangedCallback(e10, t10, a10), i10 = this.seekOffset, this.setAttribute("aria-label", rq("seek back {seekOffset} seconds", { seekOffset: i10 })), e10 === l5 && (this.seekOffset = nm(this, l5, 30));
    }
    get seekOffset() {
      return nm(this, l5, 30);
    }
    set seekOffset(e10) {
      np(this, l5, e10), this.setAttribute("aria-label", rq("seek back {seekOffset} seconds", { seekOffset: this.seekOffset })), nr(nn(this, "icon"), this.seekOffset);
    }
    get mediaCurrentTime() {
      return nm(this, rE.MEDIA_CURRENT_TIME, 0);
    }
    set mediaCurrentTime(e10) {
      np(this, rE.MEDIA_CURRENT_TIME, e10);
    }
    handleClick() {
      let e10 = Math.max(this.mediaCurrentTime - this.seekOffset, 0), t10 = new r2.CustomEvent(rb.MEDIA_SEEK_REQUEST, { composed: true, bubbles: true, detail: e10 });
      this.dispatchEvent(t10);
    }
  }
  l9.getSlotTemplateHTML = function(e10, t10) {
    let a10;
    return `
    <slot name="icon">${a10 = t10.seekOffset, `
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${a10}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `;
  }, l9.getTooltipContentHTML = function() {
    return rq("Seek backward");
  }, r2.customElements.get("media-seek-backward-button") || r2.customElements.define("media-seek-backward-button", l9);
  try {
    var l8 = "u" > typeof window ? window : e.g;
    l8._sentryModuleMetadata = l8._sentryModuleMetadata || {}, l8._sentryModuleMetadata[new l8.Error().stack] = Object.assign({}, l8._sentryModuleMetadata[new l8.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let l6 = "seekoffset";
  class l7 extends ou {
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_CURRENT_TIME, l6];
    }
    connectedCallback() {
      super.connectedCallback(), this.seekOffset = nm(this, l6, 30);
    }
    attributeChangedCallback(e10, t10, a10) {
      var i10;
      super.attributeChangedCallback(e10, t10, a10), i10 = this.seekOffset, this.setAttribute("aria-label", rq("seek forward {seekOffset} seconds", { seekOffset: i10 })), e10 === l6 && (this.seekOffset = nm(this, l6, 30));
    }
    get seekOffset() {
      return nm(this, l6, 30);
    }
    set seekOffset(e10) {
      np(this, l6, e10), this.setAttribute("aria-label", rq("seek forward {seekOffset} seconds", { seekOffset: this.seekOffset })), nr(nn(this, "icon"), this.seekOffset);
    }
    get mediaCurrentTime() {
      return nm(this, rE.MEDIA_CURRENT_TIME, 0);
    }
    set mediaCurrentTime(e10) {
      np(this, rE.MEDIA_CURRENT_TIME, e10);
    }
    handleClick() {
      let e10 = this.mediaCurrentTime + this.seekOffset, t10 = new r2.CustomEvent(rb.MEDIA_SEEK_REQUEST, { composed: true, bubbles: true, detail: e10 });
      this.dispatchEvent(t10);
    }
  }
  l7.getSlotTemplateHTML = function(e10, t10) {
    let a10;
    return `
    <slot name="icon">${a10 = t10.seekOffset, `
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${a10}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `;
  }, l7.getTooltipContentHTML = function() {
    return rq("Seek forward");
  }, r2.customElements.get("media-seek-forward-button") || r2.customElements.define("media-seek-forward-button", l7);
  try {
    var de = "u" > typeof window ? window : e.g;
    de._sentryModuleMetadata = de._sentryModuleMetadata || {}, de._sentryModuleMetadata[new de.Error().stack] = Object.assign({}, de._sentryModuleMetadata[new de.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var dt = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, da = (e10, t10, a10) => (dt(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), di = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, dr = (e10, t10, a10, i10) => (dt(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10), dn = (e10, t10, a10) => (dt(e10, t10, "access private method"), a10);
  let ds = { REMAINING: "remaining", SHOW_DURATION: "showduration", NO_TOGGLE: "notoggle" }, dl = [...Object.values(ds), rE.MEDIA_CURRENT_TIME, rE.MEDIA_DURATION, rE.MEDIA_SEEKABLE], dd = ["Enter", " "], du = "&nbsp;/&nbsp;", dc = (e10, { timesSep: t10 = du } = {}) => {
    var a10, i10;
    let r10 = null != (a10 = e10.mediaCurrentTime) ? a10 : 0, [, n10] = null != (i10 = e10.mediaSeekable) ? i10 : [], s10 = 0;
    Number.isFinite(e10.mediaDuration) ? s10 = e10.mediaDuration : Number.isFinite(n10) && (s10 = n10);
    let o10 = e10.remaining ? rj(0 - (s10 - r10)) : rj(r10);
    return e10.showDuration ? `${o10}${t10}${rj(s10)}` : o10;
  };
  class dh extends oQ {
    constructor() {
      super(), di(this, mT), di(this, mk), di(this, mS), di(this, mR), di(this, mE, void 0), di(this, m_, null), di(this, mw, (e10) => {
        let { metaKey: t10, altKey: a10, key: i10 } = e10;
        t10 || a10 || !dd.includes(i10) ? this.removeEventListener("keyup", da(this, m_)) : this.addEventListener("keyup", da(this, m_));
      }), dr(this, mE, this.shadowRoot.querySelector("slot")), da(this, mE).innerHTML = `${dc(this)}`;
    }
    static get observedAttributes() {
      return [...super.observedAttributes, ...dl, "disabled"];
    }
    connectedCallback() {
      let { style: e10 } = nc(this.shadowRoot, ":host(:hover:not([notoggle]))");
      e10.setProperty("cursor", "var(--media-cursor, pointer)"), e10.setProperty("background", "var(--media-control-hover-background, rgba(50 50 70 / .7))"), this.setAttribute("aria-label", rq("playback time")), dn(this, mS, mI).call(this), super.connectedCallback();
    }
    toggleTimeDisplay() {
      this.noToggle || (this.hasAttribute("remaining") ? this.removeAttribute("remaining") : this.setAttribute("remaining", ""));
    }
    disconnectedCallback() {
      this.disable(), dn(this, mk, mM).call(this), super.disconnectedCallback();
    }
    attributeChangedCallback(e10, t10, a10) {
      this.setAttribute("aria-label", rq("playback time")), dl.includes(e10) ? this.update() : "disabled" === e10 && a10 !== t10 ? null == a10 ? dn(this, mS, mI).call(this) : dn(this, mR, mC).call(this) : e10 === ds.NO_TOGGLE && a10 !== t10 && (this.noToggle ? dn(this, mR, mC).call(this) : dn(this, mS, mI).call(this)), super.attributeChangedCallback(e10, t10, a10);
    }
    enable() {
      this.noToggle || (this.tabIndex = 0);
    }
    disable() {
      this.tabIndex = -1;
    }
    get remaining() {
      return nv(this, ds.REMAINING);
    }
    set remaining(e10) {
      nb(this, ds.REMAINING, e10);
    }
    get showDuration() {
      return nv(this, ds.SHOW_DURATION);
    }
    set showDuration(e10) {
      nb(this, ds.SHOW_DURATION, e10);
    }
    get noToggle() {
      return nv(this, ds.NO_TOGGLE);
    }
    set noToggle(e10) {
      nb(this, ds.NO_TOGGLE, e10);
    }
    get mediaDuration() {
      return nm(this, rE.MEDIA_DURATION);
    }
    set mediaDuration(e10) {
      np(this, rE.MEDIA_DURATION, e10);
    }
    get mediaCurrentTime() {
      return nm(this, rE.MEDIA_CURRENT_TIME);
    }
    set mediaCurrentTime(e10) {
      np(this, rE.MEDIA_CURRENT_TIME, e10);
    }
    get mediaSeekable() {
      let e10 = this.getAttribute(rE.MEDIA_SEEKABLE);
      if (e10) return e10.split(":").map((e11) => +e11);
    }
    set mediaSeekable(e10) {
      null == e10 ? this.removeAttribute(rE.MEDIA_SEEKABLE) : this.setAttribute(rE.MEDIA_SEEKABLE, e10.join(":"));
    }
    update() {
      let e10 = dc(this);
      ((e11) => {
        var t10;
        let a10 = e11.mediaCurrentTime, [, i10] = null != (t10 = e11.mediaSeekable) ? t10 : [], r10 = null;
        if (Number.isFinite(e11.mediaDuration) ? r10 = e11.mediaDuration : Number.isFinite(i10) && (r10 = i10), null == a10 || null === r10) return e11.setAttribute("aria-description", rq("video not loaded, unknown time."));
        let n10 = e11.remaining ? rF(0 - (r10 - a10)) : rF(a10);
        if (!e11.showDuration) return e11.setAttribute("aria-description", n10);
        let s10 = rq("{currentTime} of {totalTime}", { currentTime: n10, totalTime: rF(r10) });
        e11.setAttribute("aria-description", s10);
      })(this), e10 !== da(this, mE).innerHTML && (da(this, mE).innerHTML = e10);
    }
  }
  mE = /* @__PURE__ */ new WeakMap(), m_ = /* @__PURE__ */ new WeakMap(), mw = /* @__PURE__ */ new WeakMap(), mT = /* @__PURE__ */ new WeakSet(), mA = function() {
    da(this, m_) || (dr(this, m_, (e10) => {
      let { key: t10 } = e10;
      dd.includes(t10) ? this.toggleTimeDisplay() : this.removeEventListener("keyup", da(this, m_));
    }), this.addEventListener("keydown", da(this, mw)), this.addEventListener("click", this.toggleTimeDisplay));
  }, mk = /* @__PURE__ */ new WeakSet(), mM = function() {
    da(this, m_) && (this.removeEventListener("keyup", da(this, m_)), this.removeEventListener("keydown", da(this, mw)), this.removeEventListener("click", this.toggleTimeDisplay), dr(this, m_, null));
  }, mS = /* @__PURE__ */ new WeakSet(), mI = function() {
    this.noToggle || this.hasAttribute("disabled") || (this.setAttribute("role", "button"), this.enable(), dn(this, mT, mA).call(this));
  }, mR = /* @__PURE__ */ new WeakSet(), mC = function() {
    this.removeAttribute("role"), this.disable(), dn(this, mk, mM).call(this);
  }, dh.getSlotTemplateHTML = function(e10, t10) {
    return `
    <slot>${dc(t10)}</slot>
  `;
  }, r2.customElements.get("media-time-display") || r2.customElements.define("media-time-display", dh);
  try {
    var dm = "u" > typeof window ? window : e.g;
    dm._sentryModuleMetadata = dm._sentryModuleMetadata || {}, dm._sentryModuleMetadata[new dm.Error().stack] = Object.assign({}, dm._sentryModuleMetadata[new dm.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var dp = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, dv = (e10, t10, a10) => (dp(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), db = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, dg = (e10, t10, a10, i10) => (dp(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10);
  class dy {
    constructor(e10, t10, a10) {
      db(this, mL, void 0), db(this, mD, void 0), db(this, mx, void 0), db(this, mP, void 0), db(this, mO, void 0), db(this, mN, void 0), db(this, mU, void 0), db(this, mB, void 0), db(this, mH, 0), db(this, mW, (e11 = performance.now()) => {
        dg(this, mH, requestAnimationFrame(dv(this, mW))), dg(this, mP, performance.now() - dv(this, mx));
        let t11 = 1e3 / this.fps;
        if (dv(this, mP) > t11) {
          let a11, i10;
          dg(this, mx, e11 - dv(this, mP) % t11);
          let r10 = 1e3 / ((e11 - dv(this, mD)) / ++(a11 = this, i10 = mO, { set _(value) {
            dg(a11, i10, value, void 0);
          }, get _() {
            return dv(a11, i10, void 0);
          } })._), n10 = (e11 - dv(this, mN)) / 1e3 / this.duration, s10 = dv(this, mU) + n10 * this.playbackRate;
          s10 - dv(this, mL).valueAsNumber > 0 ? dg(this, mB, this.playbackRate / this.duration / r10) : (dg(this, mB, 0.995 * dv(this, mB)), s10 = dv(this, mL).valueAsNumber + dv(this, mB)), this.callback(s10);
        }
      }), dg(this, mL, e10), this.callback = t10, this.fps = a10;
    }
    start() {
      0 === dv(this, mH) && (dg(this, mx, performance.now()), dg(this, mD, dv(this, mx)), dg(this, mO, 0), dv(this, mW).call(this));
    }
    stop() {
      0 !== dv(this, mH) && (cancelAnimationFrame(dv(this, mH)), dg(this, mH, 0));
    }
    update({ start: e10, duration: t10, playbackRate: a10 }) {
      let i10 = e10 - dv(this, mL).valueAsNumber, r10 = Math.abs(t10 - this.duration);
      (i10 > 0 || i10 < -0.03 || r10 >= 0.5) && this.callback(e10), dg(this, mU, e10), dg(this, mN, performance.now()), this.duration = t10, this.playbackRate = a10;
    }
  }
  mL = /* @__PURE__ */ new WeakMap(), mD = /* @__PURE__ */ new WeakMap(), mx = /* @__PURE__ */ new WeakMap(), mP = /* @__PURE__ */ new WeakMap(), mO = /* @__PURE__ */ new WeakMap(), mN = /* @__PURE__ */ new WeakMap(), mU = /* @__PURE__ */ new WeakMap(), mB = /* @__PURE__ */ new WeakMap(), mH = /* @__PURE__ */ new WeakMap(), mW = /* @__PURE__ */ new WeakMap();
  try {
    var df = "u" > typeof window ? window : e.g;
    df._sentryModuleMetadata = df._sentryModuleMetadata || {}, df._sentryModuleMetadata[new df.Error().stack] = Object.assign({}, df._sentryModuleMetadata[new df.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var dE = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, d_ = (e10, t10, a10) => (dE(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), dw = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, dT = (e10, t10, a10, i10) => (dE(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10), dA = (e10, t10, a10) => (dE(e10, t10, "access private method"), a10);
  let dk = (e10, t10 = e10.mediaCurrentTime) => {
    let a10 = Number.isFinite(e10.mediaSeekableStart) ? e10.mediaSeekableStart : 0, i10 = Number.isFinite(e10.mediaDuration) ? e10.mediaDuration : e10.mediaSeekableEnd;
    return Number.isNaN(i10) ? 0 : Math.max(0, Math.min((t10 - a10) / (i10 - a10), 1));
  }, dM = (e10, t10 = e10.range.valueAsNumber) => {
    let a10 = Number.isFinite(e10.mediaSeekableStart) ? e10.mediaSeekableStart : 0, i10 = Number.isFinite(e10.mediaDuration) ? e10.mediaDuration : e10.mediaSeekableEnd;
    return Number.isNaN(i10) ? 0 : t10 * (i10 - a10) + a10;
  };
  class dS extends oH {
    constructor() {
      super(), dw(this, mX), dw(this, m1), dw(this, m3), dw(this, m5), dw(this, m8), dw(this, m7), dw(this, pt), dw(this, m$, null), dw(this, mq, void 0), dw(this, mV, void 0), dw(this, mK, void 0), dw(this, mF, void 0), dw(this, mj, void 0), dw(this, mG, void 0), dw(this, mY, void 0), dw(this, mQ, void 0), dw(this, mz, void 0), dw(this, mZ, () => {
        dA(this, mX, mJ).call(this) ? d_(this, mq).start() : d_(this, mq).stop();
      }), dw(this, m0, (e11) => {
        !this.dragging && (rO(e11) && (this.range.valueAsNumber = e11), d_(this, mz) || this.updateBar());
      }), this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin", '<div id="buffered" part="buffered"></div>'), dT(this, mV, this.shadowRoot.querySelectorAll('[part~="box"]')), dT(this, mF, this.shadowRoot.querySelector('[part~="preview-box"]')), dT(this, mj, this.shadowRoot.querySelector('[part~="current-box"]'));
      const e10 = getComputedStyle(this);
      dT(this, mG, parseInt(e10.getPropertyValue("--media-box-padding-left"))), dT(this, mY, parseInt(e10.getPropertyValue("--media-box-padding-right"))), dT(this, mq, new dy(this.range, d_(this, m0), 60));
    }
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_PAUSED, rE.MEDIA_DURATION, rE.MEDIA_SEEKABLE, rE.MEDIA_CURRENT_TIME, rE.MEDIA_PREVIEW_IMAGE, rE.MEDIA_PREVIEW_TIME, rE.MEDIA_PREVIEW_CHAPTER, rE.MEDIA_BUFFERED, rE.MEDIA_PLAYBACK_RATE, rE.MEDIA_LOADING, rE.MEDIA_ENDED];
    }
    connectedCallback() {
      var e10;
      super.connectedCallback(), this.range.setAttribute("aria-label", rq("seek")), d_(this, mZ).call(this), dT(this, m$, this.getRootNode()), null == (e10 = d_(this, m$)) || e10.addEventListener("transitionstart", this);
    }
    disconnectedCallback() {
      var e10;
      super.disconnectedCallback(), d_(this, mq).stop(), null == (e10 = d_(this, m$)) || e10.removeEventListener("transitionstart", this), dT(this, m$, null);
    }
    attributeChangedCallback(e10, t10, a10) {
      if (super.attributeChangedCallback(e10, t10, a10), t10 != a10) {
        if (e10 === rE.MEDIA_CURRENT_TIME || e10 === rE.MEDIA_PAUSED || e10 === rE.MEDIA_ENDED || e10 === rE.MEDIA_LOADING || e10 === rE.MEDIA_DURATION || e10 === rE.MEDIA_SEEKABLE) {
          let e11, t11, a11, i10;
          d_(this, mq).update({ start: dk(this), duration: this.mediaSeekableEnd - this.mediaSeekableStart, playbackRate: this.mediaPlaybackRate }), d_(this, mZ).call(this), e11 = this.range, t11 = rF(+dM(this)), a11 = rF(+this.mediaSeekableEnd), i10 = t11 && a11 ? rq("{currentTime} of {totalTime}", { currentTime: t11, totalTime: a11 }) : rq("video not loaded, unknown time."), e11.setAttribute("aria-valuetext", i10);
        } else e10 === rE.MEDIA_BUFFERED && this.updateBufferedBar();
        (e10 === rE.MEDIA_DURATION || e10 === rE.MEDIA_SEEKABLE) && (this.mediaChaptersCues = d_(this, mQ), this.updateBar());
      }
    }
    get mediaChaptersCues() {
      return d_(this, mQ);
    }
    set mediaChaptersCues(e10) {
      var t10;
      dT(this, mQ, e10), this.updateSegments(null == (t10 = d_(this, mQ)) ? void 0 : t10.map((e11) => ({ start: dk(this, e11.startTime), end: dk(this, e11.endTime) })));
    }
    get mediaPaused() {
      return nv(this, rE.MEDIA_PAUSED);
    }
    set mediaPaused(e10) {
      nb(this, rE.MEDIA_PAUSED, e10);
    }
    get mediaLoading() {
      return nv(this, rE.MEDIA_LOADING);
    }
    set mediaLoading(e10) {
      nb(this, rE.MEDIA_LOADING, e10);
    }
    get mediaDuration() {
      return nm(this, rE.MEDIA_DURATION);
    }
    set mediaDuration(e10) {
      np(this, rE.MEDIA_DURATION, e10);
    }
    get mediaCurrentTime() {
      return nm(this, rE.MEDIA_CURRENT_TIME);
    }
    set mediaCurrentTime(e10) {
      np(this, rE.MEDIA_CURRENT_TIME, e10);
    }
    get mediaPlaybackRate() {
      return nm(this, rE.MEDIA_PLAYBACK_RATE, 1);
    }
    set mediaPlaybackRate(e10) {
      np(this, rE.MEDIA_PLAYBACK_RATE, e10);
    }
    get mediaBuffered() {
      let e10 = this.getAttribute(rE.MEDIA_BUFFERED);
      return e10 ? e10.split(" ").map((e11) => e11.split(":").map((e12) => +e12)) : [];
    }
    set mediaBuffered(e10) {
      if (!e10) return void this.removeAttribute(rE.MEDIA_BUFFERED);
      let t10 = e10.map((e11) => e11.join(":")).join(" ");
      this.setAttribute(rE.MEDIA_BUFFERED, t10);
    }
    get mediaSeekable() {
      let e10 = this.getAttribute(rE.MEDIA_SEEKABLE);
      if (e10) return e10.split(":").map((e11) => +e11);
    }
    set mediaSeekable(e10) {
      null == e10 ? this.removeAttribute(rE.MEDIA_SEEKABLE) : this.setAttribute(rE.MEDIA_SEEKABLE, e10.join(":"));
    }
    get mediaSeekableEnd() {
      var e10;
      let [, t10 = this.mediaDuration] = null != (e10 = this.mediaSeekable) ? e10 : [];
      return t10;
    }
    get mediaSeekableStart() {
      var e10;
      let [t10 = 0] = null != (e10 = this.mediaSeekable) ? e10 : [];
      return t10;
    }
    get mediaPreviewImage() {
      return ng(this, rE.MEDIA_PREVIEW_IMAGE);
    }
    set mediaPreviewImage(e10) {
      ny(this, rE.MEDIA_PREVIEW_IMAGE, e10);
    }
    get mediaPreviewTime() {
      return nm(this, rE.MEDIA_PREVIEW_TIME);
    }
    set mediaPreviewTime(e10) {
      np(this, rE.MEDIA_PREVIEW_TIME, e10);
    }
    get mediaEnded() {
      return nv(this, rE.MEDIA_ENDED);
    }
    set mediaEnded(e10) {
      nb(this, rE.MEDIA_ENDED, e10);
    }
    updateBar() {
      super.updateBar(), this.updateBufferedBar(), this.updateCurrentBox();
    }
    updateBufferedBar() {
      var e10;
      let t10, a10 = this.mediaBuffered;
      if (!a10.length) return;
      if (this.mediaEnded) t10 = 1;
      else {
        let i11 = this.mediaCurrentTime, [, r10 = this.mediaSeekableStart] = null != (e10 = a10.find(([e11, t11]) => e11 <= i11 && i11 <= t11)) ? e10 : [];
        t10 = dk(this, r10);
      }
      let { style: i10 } = nc(this.shadowRoot, "#buffered");
      i10.setProperty("width", `${100 * t10}%`);
    }
    updateCurrentBox() {
      if (!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length) return;
      let e10 = nc(this.shadowRoot, "#current-rail"), t10 = nc(this.shadowRoot, '[part~="current-box"]'), a10 = dA(this, m1, m2).call(this, d_(this, mj)), i10 = dA(this, m3, m4).call(this, a10, this.range.valueAsNumber), r10 = dA(this, m5, m9).call(this, a10, this.range.valueAsNumber);
      e10.style.transform = `translateX(${i10})`, e10.style.setProperty("--_range-width", `${a10.range.width}`), t10.style.setProperty("--_box-shift", `${r10}`), t10.style.setProperty("--_box-width", `${a10.box.width}px`), t10.style.setProperty("visibility", "initial");
    }
    handleEvent(e10) {
      switch (super.handleEvent(e10), e10.type) {
        case "input":
          dA(this, pt, pa).call(this);
          break;
        case "pointermove":
          dA(this, m8, m6).call(this, e10);
          break;
        case "pointerup":
          d_(this, mz) && dT(this, mz, false);
          break;
        case "pointerdown":
          dT(this, mz, true);
          break;
        case "pointerleave":
          dA(this, m7, pe).call(this, null);
          break;
        case "transitionstart":
          ns(e10.target, this) && setTimeout(() => d_(this, mZ).call(this), 0);
      }
    }
  }
  m$ = /* @__PURE__ */ new WeakMap(), mq = /* @__PURE__ */ new WeakMap(), mV = /* @__PURE__ */ new WeakMap(), mK = /* @__PURE__ */ new WeakMap(), mF = /* @__PURE__ */ new WeakMap(), mj = /* @__PURE__ */ new WeakMap(), mG = /* @__PURE__ */ new WeakMap(), mY = /* @__PURE__ */ new WeakMap(), mQ = /* @__PURE__ */ new WeakMap(), mz = /* @__PURE__ */ new WeakMap(), mZ = /* @__PURE__ */ new WeakMap(), mX = /* @__PURE__ */ new WeakSet(), mJ = function() {
    return this.isConnected && !this.mediaPaused && !this.mediaLoading && !this.mediaEnded && this.mediaSeekableEnd > 0 && nu(this);
  }, m0 = /* @__PURE__ */ new WeakMap(), m1 = /* @__PURE__ */ new WeakSet(), m2 = function(e10) {
    var t10;
    let a10 = (null != (t10 = this.getAttribute("bounds") ? no(this, `#${this.getAttribute("bounds")}`) : this.parentElement) ? t10 : this).getBoundingClientRect(), i10 = this.range.getBoundingClientRect(), r10 = e10.offsetWidth, n10 = -(i10.left - a10.left - r10 / 2), s10 = a10.right - i10.left - r10 / 2;
    return { box: { width: r10, min: n10, max: s10 }, bounds: a10, range: i10 };
  }, m3 = /* @__PURE__ */ new WeakSet(), m4 = function(e10, t10) {
    let a10 = `${100 * t10}%`, { width: i10, min: r10, max: n10 } = e10.box;
    if (!i10) return a10;
    if (!Number.isNaN(r10)) {
      let e11 = `calc(1 / var(--_range-width) * 100 * ${r10}% + var(--media-box-padding-left))`;
      a10 = `max(${e11}, ${a10})`;
    }
    if (!Number.isNaN(n10)) {
      let e11 = `calc(1 / var(--_range-width) * 100 * ${n10}% - var(--media-box-padding-right))`;
      a10 = `min(${a10}, ${e11})`;
    }
    return a10;
  }, m5 = /* @__PURE__ */ new WeakSet(), m9 = function(e10, t10) {
    let { width: a10, min: i10, max: r10 } = e10.box, n10 = t10 * e10.range.width;
    if (n10 < i10 + d_(this, mG)) {
      let t11 = e10.range.left - e10.bounds.left - d_(this, mG);
      return `${n10 - a10 / 2 + t11}px`;
    }
    if (n10 > r10 - d_(this, mY)) {
      let t11 = e10.bounds.right - e10.range.right - d_(this, mY);
      return `${n10 + a10 / 2 - t11 - e10.range.width}px`;
    }
    return 0;
  }, m8 = /* @__PURE__ */ new WeakSet(), m6 = function(e10) {
    let t10 = [...d_(this, mV)].some((t11) => e10.composedPath().includes(t11));
    if (!this.dragging && (t10 || !e10.composedPath().includes(this))) return void dA(this, m7, pe).call(this, null);
    let a10 = this.mediaSeekableEnd;
    if (!a10) return;
    let i10 = nc(this.shadowRoot, "#preview-rail"), r10 = nc(this.shadowRoot, '[part~="preview-box"]'), n10 = dA(this, m1, m2).call(this, d_(this, mF)), s10 = (e10.clientX - n10.range.left) / n10.range.width;
    s10 = Math.max(0, Math.min(1, s10));
    let o10 = dA(this, m3, m4).call(this, n10, s10), l10 = dA(this, m5, m9).call(this, n10, s10);
    i10.style.transform = `translateX(${o10})`, i10.style.setProperty("--_range-width", `${n10.range.width}`), r10.style.setProperty("--_box-shift", `${l10}`), r10.style.setProperty("--_box-width", `${n10.box.width}px`), 1 > Math.abs(Math.round(d_(this, mK)) - Math.round(s10 * a10)) && s10 > 0.01 && s10 < 0.99 || (dT(this, mK, s10 * a10), dA(this, m7, pe).call(this, d_(this, mK)));
  }, m7 = /* @__PURE__ */ new WeakSet(), pe = function(e10) {
    this.dispatchEvent(new r2.CustomEvent(rb.MEDIA_PREVIEW_REQUEST, { composed: true, bubbles: true, detail: e10 }));
  }, pt = /* @__PURE__ */ new WeakSet(), pa = function() {
    d_(this, mq).stop();
    let e10 = dM(this);
    this.dispatchEvent(new r2.CustomEvent(rb.MEDIA_SEEK_REQUEST, { composed: true, bubbles: true, detail: e10 }));
  }, dS.shadowRootOptions = { mode: "open" }, dS.getContainerTemplateHTML = function(e10) {
    return `
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${rE.MEDIA_PREVIEW_IMAGE}], [${rE.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${rE.MEDIA_PREVIEW_IMAGE}], [${rE.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${rE.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${rE.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${rE.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${rE.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${rE.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${rE.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${rE.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${rE.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${rE.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${rE.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${rE.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${rE.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${l0.shadowRootOptions.mode}">
            ${l0.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `;
  }, r2.customElements.get("media-time-range") || r2.customElements.define("media-time-range", dS);
  try {
    var dI = "u" > typeof window ? window : e.g;
    dI._sentryModuleMetadata = dI._sentryModuleMetadata || {}, dI._sentryModuleMetadata[new dI.Error().stack] = Object.assign({}, dI._sentryModuleMetadata[new dI.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var dR = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot read from private field");
    return a10 ? a10.call(e10) : t10.get(e10);
  };
  pi = /* @__PURE__ */ new WeakMap(), r2.customElements.get("media-volume-range") || r2.customElements.define("media-volume-range", class extends oH {
    constructor() {
      super(...arguments), ((e10, t10, a10) => {
        if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
        t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
      })(this, pi, () => {
        let e10 = this.range.value, t10 = new r2.CustomEvent(rb.MEDIA_VOLUME_REQUEST, { composed: true, bubbles: true, detail: e10 });
        this.dispatchEvent(t10);
      });
    }
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_VOLUME, rE.MEDIA_MUTED, rE.MEDIA_VOLUME_UNAVAILABLE];
    }
    connectedCallback() {
      super.connectedCallback(), this.range.setAttribute("aria-label", rq("volume")), this.range.addEventListener("input", dR(this, pi));
    }
    disconnectedCallback() {
      this.range.removeEventListener("input", dR(this, pi)), super.disconnectedCallback();
    }
    attributeChangedCallback(e10, t10, a10) {
      if (super.attributeChangedCallback(e10, t10, a10), e10 === rE.MEDIA_VOLUME || e10 === rE.MEDIA_MUTED) {
        let e11;
        this.range.valueAsNumber = this.mediaMuted ? 0 : this.mediaVolume, this.range.setAttribute("aria-valuetext", (e11 = this.range.valueAsNumber, `${Math.round(100 * e11)}%`)), this.updateBar();
      }
    }
    get mediaVolume() {
      return nm(this, rE.MEDIA_VOLUME, 1);
    }
    set mediaVolume(e10) {
      np(this, rE.MEDIA_VOLUME, e10);
    }
    get mediaMuted() {
      return nv(this, rE.MEDIA_MUTED);
    }
    set mediaMuted(e10) {
      nb(this, rE.MEDIA_MUTED, e10);
    }
    get mediaVolumeUnavailable() {
      return ng(this, rE.MEDIA_VOLUME_UNAVAILABLE);
    }
    set mediaVolumeUnavailable(e10) {
      ny(this, rE.MEDIA_VOLUME_UNAVAILABLE, e10);
    }
  });
  try {
    var dC = "u" > typeof window ? window : e.g;
    dC._sentryModuleMetadata = dC._sentryModuleMetadata || {}, dC._sentryModuleMetadata[new dC.Error().stack] = Object.assign({}, dC._sentryModuleMetadata[new dC.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  class dL extends ou {
    constructor() {
      super(...arguments), this.container = null;
    }
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_LOOP];
    }
    connectedCallback() {
      var e10;
      super.connectedCallback(), this.container = (null == (e10 = this.shadowRoot) ? void 0 : e10.querySelector("#icon")) || null, this.container && (this.container.textContent = rq("Loop"));
    }
    attributeChangedCallback(e10, t10, a10) {
      super.attributeChangedCallback(e10, t10, a10), e10 === rE.MEDIA_LOOP && this.container && this.setAttribute("aria-checked", this.mediaLoop ? "true" : "false");
    }
    get mediaLoop() {
      return nv(this, rE.MEDIA_LOOP);
    }
    set mediaLoop(e10) {
      nb(this, rE.MEDIA_LOOP, e10);
    }
    handleClick() {
      let e10 = !this.mediaLoop, t10 = new r2.CustomEvent(rb.MEDIA_LOOP_REQUEST, { composed: true, bubbles: true, detail: e10 });
      this.dispatchEvent(t10);
    }
  }
  dL.getSlotTemplateHTML = function(e10) {
    return `
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${rE.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `;
  }, dL.getTooltipContentHTML = function() {
    return rq("Loop");
  }, r2.customElements.get("media-loop-button") || r2.customElements.define("media-loop-button", dL);
  try {
    var dD = "u" > typeof window ? window : e.g;
    dD._sentryModuleMetadata = dD._sentryModuleMetadata || {}, dD._sentryModuleMetadata[new dD.Error().stack] = Object.assign({}, dD._sentryModuleMetadata[new dD.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var dx = "u" > typeof window ? window : e.g;
    dx._sentryModuleMetadata = dx._sentryModuleMetadata || {}, dx._sentryModuleMetadata[new dx.Error().stack] = Object.assign({}, dx._sentryModuleMetadata[new dx.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var dP = "u" > typeof window ? window : e.g;
    dP._sentryModuleMetadata = dP._sentryModuleMetadata || {}, dP._sentryModuleMetadata[new dP.Error().stack] = Object.assign({}, dP._sentryModuleMetadata[new dP.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var dO = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, dN = (e10, t10, a10) => (dO(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), dU = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, dB = (e10, t10, a10, i10) => (dO(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10);
  let dH = { processCallback(e10, t10, a10) {
    if (a10) {
      for (let [e11, i10] of t10) if (e11 in a10) {
        let t11 = a10[e11];
        "boolean" == typeof t11 && i10 instanceof dG && "boolean" == typeof i10.element[i10.attributeName] ? i10.booleanValue = t11 : "function" == typeof t11 && i10 instanceof dG ? i10.element[i10.attributeName] = t11 : i10.value = t11;
      }
    }
  } };
  class dW extends r2.DocumentFragment {
    constructor(e10, t10, a10 = dH) {
      var i10;
      super(), dU(this, pr, void 0), dU(this, pn, void 0), this.append(e10.content.cloneNode(true)), dB(this, pr, d$(this)), dB(this, pn, a10), null == (i10 = a10.createCallback) || i10.call(a10, this, dN(this, pr), t10), a10.processCallback(this, dN(this, pr), t10);
    }
    update(e10) {
      dN(this, pn).processCallback(this, dN(this, pr), e10);
    }
  }
  pr = /* @__PURE__ */ new WeakMap(), pn = /* @__PURE__ */ new WeakMap();
  let d$ = (e10, t10 = []) => {
    let a10, i10;
    for (let r10 of e10.attributes || []) if (r10.value.includes("{{")) {
      let n10 = new dj();
      for ([a10, i10] of dV(r10.value)) if (a10) {
        let a11 = new dG(e10, r10.name, r10.namespaceURI);
        n10.append(a11), t10.push([i10, a11]);
      } else n10.append(i10);
      r10.value = n10.toString();
    }
    for (let r10 of e10.childNodes) if (1 !== r10.nodeType || r10 instanceof HTMLTemplateElement) {
      let n10 = r10.data;
      if (1 === r10.nodeType || n10.includes("{{")) {
        let s10 = [];
        if (n10) for ([a10, i10] of dV(n10)) if (a10) {
          let a11 = new dY(e10);
          s10.push(a11), t10.push([i10, a11]);
        } else s10.push(new Text(i10));
        else if (r10 instanceof HTMLTemplateElement) {
          let a11 = new dQ(e10, r10);
          s10.push(a11), t10.push([a11.expression, a11]);
        }
        r10.replaceWith(...s10.flatMap((e11) => e11.replacementNodes || [e11]));
      }
    } else d$(r10, t10);
    return t10;
  }, dq = {}, dV = (e10) => {
    let t10 = "", a10 = 0, i10 = dq[e10], r10 = 0, n10;
    if (i10) return i10;
    for (i10 = []; n10 = e10[r10]; r10++) "{" === n10 && "{" === e10[r10 + 1] && "\\" !== e10[r10 - 1] && e10[r10 + 2] && 1 == ++a10 ? (t10 && i10.push([0, t10]), t10 = "", r10++) : "}" !== n10 || "}" !== e10[r10 + 1] || "\\" === e10[r10 - 1] || --a10 ? t10 += n10 || "" : (i10.push([1, t10.trim()]), t10 = "", r10++);
    return t10 && i10.push([0, (a10 > 0 ? "{{" : "") + t10]), dq[e10] = i10;
  };
  class dK {
    get value() {
      return "";
    }
    set value(e10) {
    }
    toString() {
      return this.value;
    }
  }
  let dF = /* @__PURE__ */ new WeakMap();
  class dj {
    constructor() {
      dU(this, ps, []);
    }
    [Symbol.iterator]() {
      return dN(this, ps).values();
    }
    get length() {
      return dN(this, ps).length;
    }
    item(e10) {
      return dN(this, ps)[e10];
    }
    append(...e10) {
      for (let t10 of e10) t10 instanceof dG && dF.set(t10, this), dN(this, ps).push(t10);
    }
    toString() {
      return dN(this, ps).join("");
    }
  }
  ps = /* @__PURE__ */ new WeakMap();
  class dG extends dK {
    constructor(e10, t10, a10) {
      super(), dU(this, pc), dU(this, po, ""), dU(this, pl, void 0), dU(this, pd, void 0), dU(this, pu, void 0), dB(this, pl, e10), dB(this, pd, t10), dB(this, pu, a10);
    }
    get attributeName() {
      return dN(this, pd);
    }
    get attributeNamespace() {
      return dN(this, pu);
    }
    get element() {
      return dN(this, pl);
    }
    get value() {
      return dN(this, po);
    }
    set value(e10) {
      dN(this, po) !== e10 && (dB(this, po, e10), dN(this, pc, ph) && 1 !== dN(this, pc, ph).length ? dN(this, pl).setAttributeNS(dN(this, pu), dN(this, pd), dN(this, pc, ph).toString()) : null == e10 ? dN(this, pl).removeAttributeNS(dN(this, pu), dN(this, pd)) : dN(this, pl).setAttributeNS(dN(this, pu), dN(this, pd), e10));
    }
    get booleanValue() {
      return dN(this, pl).hasAttributeNS(dN(this, pu), dN(this, pd));
    }
    set booleanValue(e10) {
      if (dN(this, pc, ph) && 1 !== dN(this, pc, ph).length) throw new DOMException("Value is not fully templatized");
      this.value = e10 ? "" : null;
    }
  }
  po = /* @__PURE__ */ new WeakMap(), pl = /* @__PURE__ */ new WeakMap(), pd = /* @__PURE__ */ new WeakMap(), pu = /* @__PURE__ */ new WeakMap(), pc = /* @__PURE__ */ new WeakSet(), ph = function() {
    return dF.get(this);
  };
  class dY extends dK {
    constructor(e10, t10) {
      super(), dU(this, pm, void 0), dU(this, pp, void 0), dB(this, pm, e10), dB(this, pp, t10 ? [...t10] : [new Text()]);
    }
    get replacementNodes() {
      return dN(this, pp);
    }
    get parentNode() {
      return dN(this, pm);
    }
    get nextSibling() {
      return dN(this, pp)[dN(this, pp).length - 1].nextSibling;
    }
    get previousSibling() {
      return dN(this, pp)[0].previousSibling;
    }
    get value() {
      return dN(this, pp).map((e10) => e10.textContent).join("");
    }
    set value(e10) {
      this.replace(e10);
    }
    replace(...e10) {
      let t10 = e10.flat().flatMap((e11) => null == e11 ? [new Text()] : e11.forEach ? [...e11] : 11 === e11.nodeType ? [...e11.childNodes] : e11.nodeType ? [e11] : [new Text(e11)]);
      t10.length || t10.push(new Text()), dB(this, pp, (function(e11, t11, a10, i10 = null) {
        let r10 = 0, n10, s10, o10, l10 = a10.length, d10 = t11.length;
        for (; r10 < l10 && r10 < d10 && t11[r10] == a10[r10]; ) r10++;
        for (; r10 < l10 && r10 < d10 && a10[l10 - 1] == t11[d10 - 1]; ) i10 = a10[--d10, --l10];
        if (r10 == d10) for (; r10 < l10; ) e11.insertBefore(a10[r10++], i10);
        if (r10 == l10) for (; r10 < d10; ) e11.removeChild(t11[r10++]);
        else {
          for (n10 = t11[r10]; r10 < l10; ) o10 = a10[r10++], s10 = n10 ? n10.nextSibling : i10, n10 == o10 ? n10 = s10 : r10 < l10 && a10[r10] == s10 ? (e11.replaceChild(o10, n10), n10 = s10) : e11.insertBefore(o10, n10);
          for (; n10 != i10; ) s10 = n10.nextSibling, e11.removeChild(n10), n10 = s10;
        }
        return a10;
      })(dN(this, pp)[0].parentNode, dN(this, pp), t10, this.nextSibling));
    }
  }
  pm = /* @__PURE__ */ new WeakMap(), pp = /* @__PURE__ */ new WeakMap();
  class dQ extends dY {
    constructor(e10, t10) {
      const a10 = t10.getAttribute("directive") || t10.getAttribute("type");
      let i10 = t10.getAttribute("expression") || t10.getAttribute(a10) || "";
      i10.startsWith("{{") && (i10 = i10.trim().slice(2, -2).trim()), super(e10), this.expression = i10, this.template = t10, this.directive = a10;
    }
  }
  try {
    var dz = "u" > typeof window ? window : e.g;
    dz._sentryModuleMetadata = dz._sentryModuleMetadata || {}, dz._sentryModuleMetadata[new dz.Error().stack] = Object.assign({}, dz._sentryModuleMetadata[new dz.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let dZ = { string: (e10) => String(e10) };
  class dX {
    constructor(e10) {
      this.template = e10, this.state = void 0;
    }
  }
  let dJ = /* @__PURE__ */ new WeakMap(), d0 = /* @__PURE__ */ new WeakMap(), d1 = { partial: (e10, t10) => {
    t10[e10.expression] = new dX(e10.template);
  }, if: (e10, t10) => {
    var a10;
    if (d5(e10.expression, t10)) if (dJ.get(e10) !== e10.template) {
      dJ.set(e10, e10.template);
      let a11 = new dW(e10.template, t10, d3);
      e10.replace(a11), d0.set(e10, a11);
    } else null == (a10 = d0.get(e10)) || a10.update(t10);
    else e10.replace(""), dJ.delete(e10), d0.delete(e10);
  } }, d2 = Object.keys(d1), d3 = { processCallback(e10, t10, a10) {
    var i10, r10;
    if (a10) for (let [e11, n10] of t10) {
      if (n10 instanceof dQ) {
        if (!n10.directive) {
          let e12 = d2.find((e13) => n10.template.hasAttribute(e13));
          e12 && (n10.directive = e12, n10.expression = n10.template.getAttribute(e12));
        }
        null == (i10 = d1[n10.directive]) || i10.call(d1, n10, a10);
        continue;
      }
      let t11 = d5(e11, a10);
      if (t11 instanceof dX) {
        dJ.get(n10) !== t11.template ? (dJ.set(n10, t11.template), n10.value = t11 = new dW(t11.template, t11.state, d3), d0.set(n10, t11)) : null == (r10 = d0.get(n10)) || r10.update(t11.state);
        continue;
      }
      t11 ? (n10 instanceof dG && n10.attributeName.startsWith("aria-") && (t11 = String(t11)), n10 instanceof dG ? "boolean" == typeof t11 ? n10.booleanValue = t11 : "function" == typeof t11 ? n10.element[n10.attributeName] = t11 : n10.value = t11 : (n10.value = t11, dJ.delete(n10), d0.delete(n10))) : n10 instanceof dG ? n10.value = void 0 : (n10.value = void 0, dJ.delete(n10), d0.delete(n10));
    }
  } }, d4 = { "!": (e10) => !e10, "!!": (e10) => !!e10, "==": (e10, t10) => e10 == t10, "!=": (e10, t10) => e10 != t10, ">": (e10, t10) => e10 > t10, ">=": (e10, t10) => e10 >= t10, "<": (e10, t10) => e10 < t10, "<=": (e10, t10) => e10 <= t10, "??": (e10, t10) => null != e10 ? e10 : t10, "|": (e10, t10) => {
    var a10;
    return null == (a10 = dZ[t10]) ? void 0 : a10.call(dZ, e10);
  } };
  function d5(e10, t10 = {}) {
    var a10, i10, r10, n10, s10, o10, l10;
    let d10 = (function(e11, t11) {
      let a11, i11, r11, n11 = [];
      for (; e11; ) {
        for (let n12 in r11 = null, a11 = e11.length, t11) (i11 = t11[n12].exec(e11)) && i11.index < a11 && (r11 = { token: i11[0], type: n12, matches: i11.slice(1) }, a11 = i11.index);
        a11 && n11.push({ token: e11.substr(0, a11), type: void 0 }), r11 && n11.push(r11), e11 = e11.substr(a11 + (r11 ? r11.token.length : 0));
      }
      return n11;
    })(e10, { boolean: /true|false/, number: /-?\d+\.?\d*/, string: /(["'])((?:\\.|[^\\])*?)\1/, operator: /[!=><][=!]?|\?\?|\|/, ws: /\s+/, param: /[$a-z_][$\w]*/i }).filter(({ type: e11 }) => "ws" !== e11);
    if (0 === d10.length || d10.some(({ type: e11 }) => !e11)) return d9(e10);
    if ((null == (a10 = d10[0]) ? void 0 : a10.token) === ">") {
      let a11 = t10[null == (i10 = d10[1]) ? void 0 : i10.token];
      if (!a11) return d9(e10);
      let o11 = { ...t10 };
      a11.state = o11;
      let l11 = d10.slice(2);
      for (let e11 = 0; e11 < l11.length; e11 += 3) {
        let a12 = null == (r10 = l11[e11]) ? void 0 : r10.token, i11 = null == (n10 = l11[e11 + 1]) ? void 0 : n10.token, d11 = null == (s10 = l11[e11 + 2]) ? void 0 : s10.token;
        a12 && "=" === i11 && (o11[a12] = d6(d11, t10));
      }
      return a11;
    }
    if (1 === d10.length) return d8(d10[0]) ? d6(d10[0].token, t10) : d9(e10);
    if (2 === d10.length) {
      let a11 = d4[null == (o10 = d10[0]) ? void 0 : o10.token];
      return a11 && d8(d10[1]) ? a11(d6(d10[1].token, t10)) : d9(e10);
    }
    if (3 === d10.length) {
      let a11 = null == (l10 = d10[1]) ? void 0 : l10.token, i11 = d4[a11];
      if (!i11 || !d8(d10[0]) || !d8(d10[2])) return d9(e10);
      let r11 = d6(d10[0].token, t10);
      return i11(r11, "|" === a11 ? d10[2].token : d6(d10[2].token, t10));
    }
  }
  function d9(e10) {
    return console.warn(`Warning: invalid expression \`${e10}\``), false;
  }
  function d8({ type: e10 }) {
    return ["number", "boolean", "string", "param"].includes(e10);
  }
  function d6(e10, t10) {
    let a10 = e10[0], i10 = e10.slice(-1);
    return "true" === e10 || "false" === e10 ? "true" === e10 : a10 === i10 && ["'", '"'].includes(a10) ? e10.slice(1, -1) : rN(e10) ? parseFloat(e10) : t10[e10];
  }
  try {
    var d7 = "u" > typeof window ? window : e.g;
    d7._sentryModuleMetadata = d7._sentryModuleMetadata || {}, d7._sentryModuleMetadata[new d7.Error().stack] = Object.assign({}, d7._sentryModuleMetadata[new d7.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var ue = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, ut = (e10, t10, a10) => (ue(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), ua = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, ui = (e10, t10, a10, i10) => (ue(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10), ur = (e10, t10, a10) => (ue(e10, t10, "access private method"), a10);
  let un = { mediatargetlivewindow: "targetlivewindow", mediastreamtype: "streamtype" }, us = r3.createElement("template");
  us.innerHTML = `
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;
  class uo extends r2.HTMLElement {
    constructor() {
      super(), ua(this, pf), ua(this, p_), ua(this, pv, void 0), ua(this, pb, void 0), ua(this, pg, void 0), ua(this, py, void 0), ua(this, pT, void 0), this.shadowRoot ? this.renderRoot = this.shadowRoot : (this.renderRoot = this.attachShadow({ mode: "open" }), this.createRenderer()), ui(this, py, new MutationObserver((e10) => {
        var t10;
        (!this.mediaController || (null == (t10 = this.mediaController) ? void 0 : t10.breakpointsComputed)) && e10.some((e11) => {
          let t11 = e11.target;
          return t11 === this || "media-controller" === t11.localName && !!(un[e11.attributeName] || e11.attributeName.startsWith("breakpoint"));
        }) && this.render();
      })), ui(this, pT, this.render.bind(this)), ur(this, pf, pE).call(this, "template");
    }
    get mediaController() {
      return this.renderRoot.querySelector("media-controller");
    }
    get template() {
      var e10;
      return null != (e10 = ut(this, pv)) ? e10 : this.constructor.template;
    }
    set template(e10) {
      null === e10 ? this.removeAttribute("template") : "string" == typeof e10 ? this.setAttribute("template", e10) : e10 instanceof HTMLTemplateElement && (ui(this, pv, e10), ui(this, pg, null), this.createRenderer());
    }
    get props() {
      var e10, t10, a10;
      let i10 = [...Array.from(null != (t10 = null == (e10 = this.mediaController) ? void 0 : e10.attributes) ? t10 : []).filter(({ name: e11 }) => un[e11] || e11.startsWith("breakpoint")), ...Array.from(this.attributes)], r10 = {};
      for (let e11 of i10) {
        let t11 = null != (a10 = un[e11.name]) ? a10 : e11.name.replace(/[-_]([a-z])/g, (e12, t12) => t12.toUpperCase()), { value: i11 } = e11;
        null != i11 ? (rN(i11) && (i11 = parseFloat(i11)), r10[t11] = "" === i11 || i11) : r10[t11] = false;
      }
      return r10;
    }
    attributeChangedCallback(e10, t10, a10) {
      "template" === e10 && t10 != a10 && ur(this, p_, pw).call(this);
    }
    connectedCallback() {
      this.addEventListener(r_.BREAKPOINTS_COMPUTED, ut(this, pT)), ut(this, py).observe(this, { attributes: true }), ut(this, py).observe(this.renderRoot, { attributes: true, subtree: true }), ur(this, p_, pw).call(this);
    }
    disconnectedCallback() {
      this.removeEventListener(r_.BREAKPOINTS_COMPUTED, ut(this, pT)), ut(this, py).disconnect();
    }
    createRenderer() {
      this.template instanceof HTMLTemplateElement && this.template !== ut(this, pb) && (ui(this, pb, this.template), this.renderer = new dW(this.template, this.props, this.constructor.processor), this.renderRoot.textContent = "", this.renderRoot.append(us.content.cloneNode(true), this.renderer));
    }
    render() {
      var e10;
      null == (e10 = this.renderer) || e10.update(this.props);
    }
  }
  async function ul(e10) {
    let t10 = await fetch(e10);
    if (200 !== t10.status) throw Error(`Failed to load resource: the server responded with a status of ${t10.status}`);
    return t10.text();
  }
  pv = /* @__PURE__ */ new WeakMap(), pb = /* @__PURE__ */ new WeakMap(), pg = /* @__PURE__ */ new WeakMap(), py = /* @__PURE__ */ new WeakMap(), pf = /* @__PURE__ */ new WeakSet(), pE = function(e10) {
    if (Object.prototype.hasOwnProperty.call(this, e10)) {
      let t10 = this[e10];
      delete this[e10], this[e10] = t10;
    }
  }, p_ = /* @__PURE__ */ new WeakSet(), pw = function() {
    var e10;
    let t10 = this.getAttribute("template");
    if (!t10 || t10 === ut(this, pg)) return;
    let a10 = this.getRootNode(), i10 = null == (e10 = null == a10 ? void 0 : a10.getElementById) ? void 0 : e10.call(a10, t10);
    if (i10) {
      ui(this, pg, t10), ui(this, pv, i10), this.createRenderer();
      return;
    }
    (function(e11) {
      if (!/^(\/|\.\/|https?:\/\/)/.test(e11)) return false;
      let t11 = /^https?:\/\//.test(e11) ? void 0 : location.origin;
      try {
        new URL(e11, t11);
      } catch (e12) {
        return false;
      }
      return true;
    })(t10) && (ui(this, pg, t10), ul(t10).then((e11) => {
      let t11 = r3.createElement("template");
      t11.innerHTML = e11, ui(this, pv, t11), this.createRenderer();
    }).catch(console.error));
  }, pT = /* @__PURE__ */ new WeakMap(), uo.observedAttributes = ["template"], uo.processor = d3, r2.customElements.get("media-theme") || r2.customElements.define("media-theme", uo);
  try {
    var ud = "u" > typeof window ? window : e.g;
    ud._sentryModuleMetadata = ud._sentryModuleMetadata || {}, ud._sentryModuleMetadata[new ud.Error().stack] = Object.assign({}, ud._sentryModuleMetadata[new ud.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  function uu(e10) {
    return e10.split("-")[0];
  }
  try {
    var uc = "u" > typeof window ? window : e.g;
    uc._sentryModuleMetadata = uc._sentryModuleMetadata || {}, uc._sentryModuleMetadata[new uc.Error().stack] = Object.assign({}, uc._sentryModuleMetadata[new uc.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  class uh extends Event {
    constructor({ action: e10 = "auto", relatedTarget: t10, ...a10 }) {
      super("invoke", a10), this.action = e10, this.relatedTarget = t10;
    }
  }
  class um extends Event {
    constructor({ newState: e10, oldState: t10, ...a10 }) {
      super("toggle", a10), this.newState = e10, this.oldState = t10;
    }
  }
  try {
    var up = "u" > typeof window ? window : e.g;
    up._sentryModuleMetadata = up._sentryModuleMetadata || {}, up._sentryModuleMetadata[new up.Error().stack] = Object.assign({}, up._sentryModuleMetadata[new up.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var uv = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, ub = (e10, t10, a10) => (uv(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), ug = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, uy = (e10, t10, a10, i10) => (uv(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10), uf = (e10, t10, a10) => (uv(e10, t10, "access private method"), a10);
  function uE({ type: e10, text: t10, value: a10, checked: i10 }) {
    let r10 = r3.createElement("media-chrome-menu-item");
    r10.type = null != e10 ? e10 : "", r10.part.add("menu-item"), e10 && r10.part.add(e10), r10.value = a10, r10.checked = i10;
    let n10 = r3.createElement("span");
    return n10.textContent = t10, r10.append(n10), r10;
  }
  function u_(e10, t10) {
    let a10 = e10.querySelector(`:scope > [slot="${t10}"]`);
    if ((null == a10 ? void 0 : a10.nodeName) == "SLOT" && (a10 = a10.assignedElements({ flatten: true })[0]), a10) return a10.cloneNode(true);
    let i10 = e10.shadowRoot.querySelector(`[name="${t10}"] > svg`);
    return i10 ? i10.cloneNode(true) : "";
  }
  let uw = "style", uT = "hidden", uA = "disabled";
  class uk extends r2.HTMLElement {
    constructor() {
      if (super(), ug(this, pL), ug(this, px), ug(this, pN), ug(this, pB), ug(this, pW), ug(this, pq), ug(this, pj), ug(this, pY), ug(this, pz), ug(this, pX), ug(this, p0), ug(this, p2), ug(this, p4), ug(this, p9), ug(this, p6), ug(this, ve), ug(this, va), ug(this, vr), ug(this, pA, null), ug(this, pk, null), ug(this, pM, null), ug(this, pS, /* @__PURE__ */ new Set()), ug(this, pI, void 0), ug(this, pR, false), ug(this, pC, null), ug(this, pO, () => {
        let e10 = ub(this, pS), t10 = new Set(this.items);
        for (let a10 of e10) t10.has(a10) || this.dispatchEvent(new CustomEvent("removemenuitem", { detail: a10 }));
        for (let a10 of t10) e10.has(a10) || this.dispatchEvent(new CustomEvent("addmenuitem", { detail: a10 }));
        uy(this, pS, t10);
      }), ug(this, pK, () => {
        uf(this, pj, pG).call(this), uf(this, pY, pQ).call(this, false);
      }), ug(this, pF, () => {
        uf(this, pj, pG).call(this);
      }), !this.shadowRoot) {
        this.attachShadow(this.constructor.shadowRootOptions);
        const e10 = nt(this.attributes);
        this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e10);
      }
      this.container = this.shadowRoot.querySelector("#container"), this.defaultSlot = this.shadowRoot.querySelector("slot:not([name])"), uy(this, pI, new MutationObserver(ub(this, pO)));
    }
    static get observedAttributes() {
      return [uA, uT, uw, "anchor", rg.MEDIA_CONTROLLER];
    }
    static formatMenuItemText(e10, t10) {
      return e10;
    }
    enable() {
      this.addEventListener("click", this), this.addEventListener("focusout", this), this.addEventListener("keydown", this), this.addEventListener("invoke", this), this.addEventListener("toggle", this);
    }
    disable() {
      this.removeEventListener("click", this), this.removeEventListener("focusout", this), this.removeEventListener("keyup", this), this.removeEventListener("invoke", this), this.removeEventListener("toggle", this);
    }
    handleEvent(e10) {
      switch (e10.type) {
        case "slotchange":
          uf(this, pL, pD).call(this, e10);
          break;
        case "invoke":
          uf(this, pB, pH).call(this, e10);
          break;
        case "click":
          uf(this, pz, pZ).call(this, e10);
          break;
        case "toggle":
          uf(this, p0, p1).call(this, e10);
          break;
        case "focusout":
          uf(this, p4, p5).call(this, e10);
          break;
        case "keydown":
          uf(this, p9, p8).call(this, e10);
      }
    }
    connectedCallback() {
      var e10, t10;
      ub(this, pI).observe(this.defaultSlot, { childList: true }), uy(this, pC, nh(this.shadowRoot, ":host")), uf(this, pN, pU).call(this), this.hasAttribute("disabled") || this.enable(), this.role || (this.role = "menu"), uy(this, pA, ni(this)), null == (t10 = null == (e10 = ub(this, pA)) ? void 0 : e10.associateElement) || t10.call(e10, this), this.hidden || (r6(uS(this), ub(this, pK)), r6(this, ub(this, pF))), uf(this, px, pP).call(this), this.shadowRoot.addEventListener("slotchange", this);
    }
    disconnectedCallback() {
      var e10, t10;
      ub(this, pI).disconnect(), r7(uS(this), ub(this, pK)), r7(this, ub(this, pF)), this.disable(), null == (t10 = null == (e10 = ub(this, pA)) ? void 0 : e10.unassociateElement) || t10.call(e10, this), uy(this, pA, null), uy(this, pk, null), uy(this, pM, null), this.shadowRoot.removeEventListener("slotchange", this);
    }
    attributeChangedCallback(e10, t10, a10) {
      var i10, r10, n10, s10;
      e10 === uT && a10 !== t10 ? (ub(this, pR) || uy(this, pR, true), this.hidden ? uf(this, pq, pV).call(this) : uf(this, pW, p$).call(this), this.dispatchEvent(new um({ oldState: this.hidden ? "open" : "closed", newState: this.hidden ? "closed" : "open", bubbles: true }))) : e10 === rg.MEDIA_CONTROLLER ? (t10 && (null == (r10 = null == (i10 = ub(this, pA)) ? void 0 : i10.unassociateElement) || r10.call(i10, this), uy(this, pA, null)), a10 && this.isConnected && (uy(this, pA, ni(this)), null == (s10 = null == (n10 = ub(this, pA)) ? void 0 : n10.associateElement) || s10.call(n10, this))) : e10 === uA && a10 !== t10 ? null == a10 ? this.enable() : this.disable() : e10 === uw && a10 !== t10 && uf(this, pN, pU).call(this);
    }
    formatMenuItemText(e10, t10) {
      return this.constructor.formatMenuItemText(e10, t10);
    }
    get anchor() {
      return this.getAttribute("anchor");
    }
    set anchor(e10) {
      this.setAttribute("anchor", `${e10}`);
    }
    get anchorElement() {
      var e10;
      return this.anchor ? null == (e10 = nd(this)) ? void 0 : e10.querySelector(`#${this.anchor}`) : null;
    }
    get items() {
      return this.defaultSlot.assignedElements({ flatten: true }).filter(uM);
    }
    get radioGroupItems() {
      return this.items.filter((e10) => "menuitemradio" === e10.role);
    }
    get checkedItems() {
      return this.items.filter((e10) => e10.checked);
    }
    get value() {
      var e10, t10;
      return null != (t10 = null == (e10 = this.checkedItems[0]) ? void 0 : e10.value) ? t10 : "";
    }
    set value(e10) {
      let t10 = this.items.find((t11) => t11.value === e10);
      t10 && uf(this, vr, vn).call(this, t10);
    }
    focus() {
      if (uy(this, pk, nl()), this.items.length) {
        uf(this, va, vi).call(this, this.items[0]), this.items[0].focus();
        return;
      }
      let e10 = this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');
      null == e10 || e10.focus();
    }
    handleSelect(e10) {
      var t10;
      let a10 = uf(this, p6, p7).call(this, e10);
      a10 && (uf(this, vr, vn).call(this, a10, "checkbox" === a10.type), ub(this, pM) && !this.hidden && (null == (t10 = ub(this, pk)) || t10.focus(), this.hidden = true));
    }
    get keysUsed() {
      return ["Enter", "Escape", "Tab", " ", "ArrowDown", "ArrowUp", "Home", "End"];
    }
    handleMove(e10) {
      var t10, a10;
      let { key: i10 } = e10, r10 = this.items, n10 = null != (a10 = null != (t10 = uf(this, p6, p7).call(this, e10)) ? t10 : uf(this, ve, vt).call(this)) ? a10 : r10[0], s10 = Math.max(0, r10.indexOf(n10));
      "ArrowDown" === i10 ? s10++ : "ArrowUp" === i10 ? s10-- : "Home" === e10.key ? s10 = 0 : "End" === e10.key && (s10 = r10.length - 1), s10 < 0 && (s10 = r10.length - 1), s10 > r10.length - 1 && (s10 = 0), uf(this, va, vi).call(this, r10[s10]), r10[s10].focus();
    }
  }
  function uM(e10) {
    return ["menuitem", "menuitemradio", "menuitemcheckbox"].includes(null == e10 ? void 0 : e10.role);
  }
  function uS(e10) {
    var t10;
    return null != (t10 = e10.getAttribute("bounds") ? no(e10, `#${e10.getAttribute("bounds")}`) : na(e10) || e10.parentElement) ? t10 : e10;
  }
  pA = /* @__PURE__ */ new WeakMap(), pk = /* @__PURE__ */ new WeakMap(), pM = /* @__PURE__ */ new WeakMap(), pS = /* @__PURE__ */ new WeakMap(), pI = /* @__PURE__ */ new WeakMap(), pR = /* @__PURE__ */ new WeakMap(), pC = /* @__PURE__ */ new WeakMap(), pL = /* @__PURE__ */ new WeakSet(), pD = function(e10) {
    let t10 = e10.target;
    for (let e11 of t10.assignedNodes({ flatten: true })) 3 === e11.nodeType && "" === e11.textContent.trim() && e11.remove();
    ["header", "title"].includes(t10.name) && uf(this, px, pP).call(this), t10.name || ub(this, pO).call(this);
  }, px = /* @__PURE__ */ new WeakSet(), pP = function() {
    let e10 = this.shadowRoot.querySelector('slot[name="header"]');
    e10.hidden = 0 === this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length && 0 === e10.assignedNodes().length;
  }, pO = /* @__PURE__ */ new WeakMap(), pN = /* @__PURE__ */ new WeakSet(), pU = function() {
    var e10;
    let t10 = this.shadowRoot.querySelector("#layout-row"), a10 = null == (e10 = getComputedStyle(this).getPropertyValue("--media-menu-layout")) ? void 0 : e10.trim();
    t10.setAttribute("media", "row" === a10 ? "" : "width:0");
  }, pB = /* @__PURE__ */ new WeakSet(), pH = function(e10) {
    uy(this, pM, e10.relatedTarget), ns(this, e10.relatedTarget) || (this.hidden = !this.hidden);
  }, pW = /* @__PURE__ */ new WeakSet(), p$ = function() {
    var e10;
    null == (e10 = ub(this, pM)) || e10.setAttribute("aria-expanded", "true"), this.addEventListener("transitionend", () => this.focus(), { once: true }), r6(uS(this), ub(this, pK)), r6(this, ub(this, pF));
  }, pq = /* @__PURE__ */ new WeakSet(), pV = function() {
    var e10;
    null == (e10 = ub(this, pM)) || e10.setAttribute("aria-expanded", "false"), r7(uS(this), ub(this, pK)), r7(this, ub(this, pF));
  }, pK = /* @__PURE__ */ new WeakMap(), pF = /* @__PURE__ */ new WeakMap(), pj = /* @__PURE__ */ new WeakSet(), pG = function(e10) {
    if (this.hasAttribute("mediacontroller") && !this.anchor || this.hidden || !this.anchorElement) return;
    let { x: t10, y: a10 } = (function({ anchor: e11, floating: t11, placement: a11 }) {
      let { x: i11, y: r11 } = (function({ anchor: e12, floating: t12 }, a12) {
        let i12, r12 = "x" == (["top", "bottom"].includes(uu(a12)) ? "y" : "x") ? "y" : "x", n11 = "y" === r12 ? "height" : "width", s11 = uu(a12), o11 = e12.x + e12.width / 2 - t12.width / 2, l11 = e12.y + e12.height / 2 - t12.height / 2, d11 = e12[n11] / 2 - t12[n11] / 2;
        switch (s11) {
          case "top":
            i12 = { x: o11, y: e12.y - t12.height };
            break;
          case "bottom":
            i12 = { x: o11, y: e12.y + e12.height };
            break;
          case "right":
            i12 = { x: e12.x + e12.width, y: l11 };
            break;
          case "left":
            i12 = { x: e12.x - t12.width, y: l11 };
            break;
          default:
            i12 = { x: e12.x, y: e12.y };
        }
        switch (a12.split("-")[1]) {
          case "start":
            i12[r12] -= d11;
            break;
          case "end":
            i12[r12] += d11;
        }
        return i12;
      })((function({ anchor: e12, floating: t12 }) {
        var a12, i12, r12;
        let n11, s11;
        return { anchor: (a12 = e12, i12 = t12.offsetParent, n11 = a12.getBoundingClientRect(), s11 = null != (r12 = null == i12 ? void 0 : i12.getBoundingClientRect()) ? r12 : { x: 0, y: 0 }, { x: n11.x - s11.x, y: n11.y - s11.y, width: n11.width, height: n11.height }), floating: { x: 0, y: 0, width: t12.offsetWidth, height: t12.offsetHeight } };
      })({ anchor: e11, floating: t11 }), a11);
      return { x: i11, y: r11 };
    })({ anchor: this.anchorElement, floating: this, placement: "top-start" });
    null != e10 || (e10 = this.offsetWidth);
    let i10 = uS(this).getBoundingClientRect(), r10 = i10.width - t10 - e10, n10 = i10.height - a10 - this.offsetHeight, { style: s10 } = ub(this, pC);
    s10.setProperty("position", "absolute"), s10.setProperty("right", `${Math.max(0, r10)}px`), s10.setProperty("--_menu-bottom", `${n10}px`);
    let o10 = getComputedStyle(this), l10 = s10.getPropertyValue("--_menu-bottom") === o10.bottom ? n10 : parseFloat(o10.bottom), d10 = i10.height - l10 - parseFloat(o10.marginBottom);
    this.style.setProperty("--_menu-max-height", `${d10}px`);
  }, pY = /* @__PURE__ */ new WeakSet(), pQ = function(e10) {
    let t10 = this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'), a10 = null == t10 ? void 0 : t10.querySelector('[role="menu"]'), { style: i10 } = ub(this, pC);
    if (e10 || i10.setProperty("--media-menu-transition-in", "none"), a10) {
      let e11 = a10.offsetHeight, i11 = Math.max(a10.offsetWidth, t10.offsetWidth);
      this.style.setProperty("min-width", `${i11}px`), this.style.setProperty("min-height", `${e11}px`), uf(this, pj, pG).call(this, i11);
    } else this.style.removeProperty("min-width"), this.style.removeProperty("min-height"), uf(this, pj, pG).call(this);
    i10.removeProperty("--media-menu-transition-in");
  }, pz = /* @__PURE__ */ new WeakSet(), pZ = function(e10) {
    var t10;
    if (e10.stopPropagation(), e10.composedPath().includes(ub(this, pX, pJ))) {
      null == (t10 = ub(this, pk)) || t10.focus(), this.hidden = true;
      return;
    }
    let a10 = uf(this, p6, p7).call(this, e10);
    !a10 || a10.hasAttribute("disabled") || (uf(this, va, vi).call(this, a10), this.handleSelect(e10));
  }, pX = /* @__PURE__ */ new WeakSet(), pJ = function() {
    var e10;
    return null == (e10 = this.shadowRoot.querySelector('slot[name="header"]').assignedElements({ flatten: true })) ? void 0 : e10.find((e11) => e11.matches('button[part~="back"]'));
  }, p0 = /* @__PURE__ */ new WeakSet(), p1 = function(e10) {
    if (e10.target === this) return;
    uf(this, p2, p3).call(this);
    let t10 = Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));
    for (let a10 of t10) a10.invokeTargetElement != e10.target && ("open" != e10.newState || "true" != a10.getAttribute("aria-expanded") || a10.invokeTargetElement.hidden || a10.invokeTargetElement.dispatchEvent(new uh({ relatedTarget: a10 })));
    for (let e11 of t10) e11.setAttribute("aria-expanded", `${!e11.submenuElement.hidden}`);
    uf(this, pY, pQ).call(this, true);
  }, p2 = /* @__PURE__ */ new WeakSet(), p3 = function() {
    let e10 = this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');
    this.container.classList.toggle("has-expanded", !!e10);
  }, p4 = /* @__PURE__ */ new WeakSet(), p5 = function(e10) {
    var t10;
    ns(this, e10.relatedTarget) || (ub(this, pR) && (null == (t10 = ub(this, pk)) || t10.focus()), ub(this, pM) && ub(this, pM) !== e10.relatedTarget && !this.hidden && (this.hidden = true));
  }, p9 = /* @__PURE__ */ new WeakSet(), p8 = function(e10) {
    var t10, a10, i10, r10, n10;
    let { key: s10, ctrlKey: o10, altKey: l10, metaKey: d10 } = e10;
    if (!o10 && !l10 && !d10 && this.keysUsed.includes(s10)) if (e10.preventDefault(), e10.stopPropagation(), "Tab" === s10) {
      if (ub(this, pR)) {
        this.hidden = true;
        return;
      }
      e10.shiftKey ? null == (a10 = null == (t10 = this.previousElementSibling) ? void 0 : t10.focus) || a10.call(t10) : null == (r10 = null == (i10 = this.nextElementSibling) ? void 0 : i10.focus) || r10.call(i10), this.blur();
    } else "Escape" === s10 ? (null == (n10 = ub(this, pk)) || n10.focus(), ub(this, pR) && (this.hidden = true)) : "Enter" === s10 || " " === s10 ? this.handleSelect(e10) : this.handleMove(e10);
  }, p6 = /* @__PURE__ */ new WeakSet(), p7 = function(e10) {
    return e10.composedPath().find((e11) => ["menuitemradio", "menuitemcheckbox"].includes(e11.role));
  }, ve = /* @__PURE__ */ new WeakSet(), vt = function() {
    return this.items.find((e10) => 0 === e10.tabIndex);
  }, va = /* @__PURE__ */ new WeakSet(), vi = function(e10) {
    for (let t10 of this.items) t10.tabIndex = t10 === e10 ? 0 : -1;
  }, vr = /* @__PURE__ */ new WeakSet(), vn = function(e10, t10) {
    let a10 = [...this.checkedItems];
    "radio" === e10.type && this.radioGroupItems.forEach((e11) => e11.checked = false), t10 ? e10.checked = !e10.checked : e10.checked = true, this.checkedItems.some((e11, t11) => e11 != a10[t11]) && this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
  }, uk.shadowRootOptions = { mode: "open" }, uk.getTemplateHTML = function(e10) {
    return `
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `;
  }, r2.customElements.get("media-chrome-menu") || r2.customElements.define("media-chrome-menu", uk);
  try {
    var uI = "u" > typeof window ? window : e.g;
    uI._sentryModuleMetadata = uI._sentryModuleMetadata || {}, uI._sentryModuleMetadata[new uI.Error().stack] = Object.assign({}, uI._sentryModuleMetadata[new uI.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var uR = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, uC = (e10, t10, a10) => (uR(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), uL = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, uD = (e10, t10, a10, i10) => (uR(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10), ux = (e10, t10, a10) => (uR(e10, t10, "access private method"), a10);
  let uP = "type", uO = "value", uN = "checked", uU = "disabled";
  class uB extends r2.HTMLElement {
    constructor() {
      if (super(), uL(this, vl), uL(this, vu), uL(this, vh), uL(this, vg), uL(this, vs, false), uL(this, vo, void 0), uL(this, vp, () => {
        var e10, t10;
        this.submenuElement.items && this.setAttribute("submenusize", `${this.submenuElement.items.length}`);
        let a10 = this.shadowRoot.querySelector('slot[name="description"]'), i10 = null == (e10 = this.submenuElement.checkedItems) ? void 0 : e10[0], r10 = null != (t10 = null == i10 ? void 0 : i10.dataset.description) ? t10 : null == i10 ? void 0 : i10.text, n10 = r3.createElement("span");
        n10.textContent = null != r10 ? r10 : "", a10.replaceChildren(n10);
      }), uL(this, vv, (e10) => {
        let { key: t10 } = e10;
        this.keysUsed.includes(t10) ? this.handleClick(e10) : this.removeEventListener("keyup", uC(this, vv));
      }), uL(this, vb, (e10) => {
        let { metaKey: t10, altKey: a10, key: i10 } = e10;
        t10 || a10 || !this.keysUsed.includes(i10) ? this.removeEventListener("keyup", uC(this, vv)) : this.addEventListener("keyup", uC(this, vv), { once: true });
      }), !this.shadowRoot) {
        this.attachShadow(this.constructor.shadowRootOptions);
        const e10 = nt(this.attributes);
        this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e10);
      }
    }
    static get observedAttributes() {
      return [uP, uU, uN, uO];
    }
    enable() {
      this.hasAttribute("tabindex") || this.setAttribute("tabindex", "-1"), uH(this) && !this.hasAttribute("aria-checked") && this.setAttribute("aria-checked", "false"), this.addEventListener("click", this), this.addEventListener("keydown", this);
    }
    disable() {
      this.removeAttribute("tabindex"), this.removeEventListener("click", this), this.removeEventListener("keydown", this), this.removeEventListener("keyup", this);
    }
    handleEvent(e10) {
      switch (e10.type) {
        case "slotchange":
          ux(this, vl, vd).call(this, e10);
          break;
        case "click":
          this.handleClick(e10);
          break;
        case "keydown":
          uC(this, vb).call(this, e10);
          break;
        case "keyup":
          uC(this, vv).call(this, e10);
      }
    }
    attributeChangedCallback(e10, t10, a10) {
      e10 === uN && uH(this) && !uC(this, vs) ? this.setAttribute("aria-checked", null != a10 ? "true" : "false") : e10 === uP && a10 !== t10 ? this.role = "menuitem" + a10 : e10 === uU && a10 !== t10 && (null == a10 ? this.enable() : this.disable());
    }
    connectedCallback() {
      this.hasAttribute(uU) || this.enable(), this.role = "menuitem" + this.type, uD(this, vo, (function e10(t10, a10) {
        if (!t10) return null;
        let { host: i10 } = t10.getRootNode();
        return !a10 && i10 ? e10(t10, i10) : (null == a10 ? void 0 : a10.items) ? a10 : e10(a10, null == a10 ? void 0 : a10.parentNode);
      })(this, this.parentNode)), ux(this, vg, vy).call(this), this.submenuElement && ux(this, vu, vc).call(this), this.shadowRoot.addEventListener("slotchange", this);
    }
    disconnectedCallback() {
      this.disable(), ux(this, vg, vy).call(this), uD(this, vo, null), this.shadowRoot.removeEventListener("slotchange", this);
    }
    get invokeTarget() {
      return this.getAttribute("invoketarget");
    }
    set invokeTarget(e10) {
      this.setAttribute("invoketarget", `${e10}`);
    }
    get invokeTargetElement() {
      var e10;
      return this.invokeTarget ? null == (e10 = nd(this)) ? void 0 : e10.querySelector(`#${this.invokeTarget}`) : this.submenuElement;
    }
    get submenuElement() {
      return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({ flatten: true })[0];
    }
    get type() {
      var e10;
      return null != (e10 = this.getAttribute(uP)) ? e10 : "";
    }
    set type(e10) {
      this.setAttribute(uP, `${e10}`);
    }
    get value() {
      var e10;
      return null != (e10 = this.getAttribute(uO)) ? e10 : this.text;
    }
    set value(e10) {
      this.setAttribute(uO, e10);
    }
    get text() {
      var e10;
      return (null != (e10 = this.textContent) ? e10 : "").trim();
    }
    get checked() {
      if (uH(this)) return "true" === this.getAttribute("aria-checked");
    }
    set checked(e10) {
      uH(this) && (uD(this, vs, true), this.setAttribute("aria-checked", e10 ? "true" : "false"), e10 ? this.part.add("checked") : this.part.remove("checked"));
    }
    handleClick(e10) {
      !uH(this) && this.invokeTargetElement && ns(this, e10.target) && this.invokeTargetElement.dispatchEvent(new uh({ relatedTarget: this }));
    }
    get keysUsed() {
      return ["Enter", " "];
    }
  }
  function uH(e10) {
    return "radio" === e10.type || "checkbox" === e10.type;
  }
  vs = /* @__PURE__ */ new WeakMap(), vo = /* @__PURE__ */ new WeakMap(), vl = /* @__PURE__ */ new WeakSet(), vd = function(e10) {
    let t10 = e10.target;
    if (!(null == t10 ? void 0 : t10.name)) for (let e11 of t10.assignedNodes({ flatten: true })) e11 instanceof Text && "" === e11.textContent.trim() && e11.remove();
    "submenu" === t10.name && (this.submenuElement ? ux(this, vu, vc).call(this) : ux(this, vh, vm).call(this));
  }, vu = /* @__PURE__ */ new WeakSet(), vc = async function() {
    this.setAttribute("aria-haspopup", "menu"), this.setAttribute("aria-expanded", `${!this.submenuElement.hidden}`), this.submenuElement.addEventListener("change", uC(this, vp)), this.submenuElement.addEventListener("addmenuitem", uC(this, vp)), this.submenuElement.addEventListener("removemenuitem", uC(this, vp)), uC(this, vp).call(this);
  }, vh = /* @__PURE__ */ new WeakSet(), vm = function() {
    this.removeAttribute("aria-haspopup"), this.removeAttribute("aria-expanded"), this.submenuElement.removeEventListener("change", uC(this, vp)), this.submenuElement.removeEventListener("addmenuitem", uC(this, vp)), this.submenuElement.removeEventListener("removemenuitem", uC(this, vp)), uC(this, vp).call(this);
  }, vp = /* @__PURE__ */ new WeakMap(), vv = /* @__PURE__ */ new WeakMap(), vb = /* @__PURE__ */ new WeakMap(), vg = /* @__PURE__ */ new WeakSet(), vy = function() {
    var e10;
    let t10 = null == (e10 = uC(this, vo)) ? void 0 : e10.radioGroupItems;
    if (!t10) return;
    let a10 = t10.filter((e11) => "true" === e11.getAttribute("aria-checked")).pop();
    for (let e11 of (a10 || (a10 = t10[0]), t10)) e11.setAttribute("aria-checked", "false");
    null == a10 || a10.setAttribute("aria-checked", "true");
  }, uB.shadowRootOptions = { mode: "open" }, uB.getTemplateHTML = function(e10) {
    return `
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e10)}
    </slot>
    <slot name="submenu"></slot>
  `;
  }, uB.getSuffixSlotInnerHTML = function(e10) {
    return "";
  }, r2.customElements.get("media-chrome-menu-item") || r2.customElements.define("media-chrome-menu-item", uB);
  try {
    var uW = "u" > typeof window ? window : e.g;
    uW._sentryModuleMetadata = uW._sentryModuleMetadata || {}, uW._sentryModuleMetadata[new uW.Error().stack] = Object.assign({}, uW._sentryModuleMetadata[new uW.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  class u$ extends uk {
    get anchorElement() {
      return "auto" !== this.anchor ? super.anchorElement : na(this).querySelector("media-settings-menu-button");
    }
  }
  u$.getTemplateHTML = function(e10) {
    return `
    ${uk.getTemplateHTML(e10)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `;
  }, r2.customElements.get("media-settings-menu") || r2.customElements.define("media-settings-menu", u$);
  try {
    var uq = "u" > typeof window ? window : e.g;
    uq._sentryModuleMetadata = uq._sentryModuleMetadata || {}, uq._sentryModuleMetadata[new uq.Error().stack] = Object.assign({}, uq._sentryModuleMetadata[new uq.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  class uV extends uB {
  }
  uV.shadowRootOptions = { mode: "open" }, uV.getTemplateHTML = function(e10) {
    return `
    ${uB.getTemplateHTML.call(this, e10)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `;
  }, uV.getSuffixSlotInnerHTML = function(e10) {
    return `
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `;
  }, r2.customElements.get("media-settings-menu-item") || r2.customElements.define("media-settings-menu-item", uV);
  try {
    var uK = "u" > typeof window ? window : e.g;
    uK._sentryModuleMetadata = uK._sentryModuleMetadata || {}, uK._sentryModuleMetadata[new uK.Error().stack] = Object.assign({}, uK._sentryModuleMetadata[new uK.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  class uF extends ou {
    connectedCallback() {
      super.connectedCallback(), this.invokeTargetElement && this.setAttribute("aria-haspopup", "menu");
    }
    get invokeTarget() {
      return this.getAttribute("invoketarget");
    }
    set invokeTarget(e10) {
      this.setAttribute("invoketarget", `${e10}`);
    }
    get invokeTargetElement() {
      var e10;
      return this.invokeTarget ? null == (e10 = nd(this)) ? void 0 : e10.querySelector(`#${this.invokeTarget}`) : null;
    }
    handleClick() {
      var e10;
      null == (e10 = this.invokeTargetElement) || e10.dispatchEvent(new uh({ relatedTarget: this }));
    }
  }
  r2.customElements.get("media-chrome-menu-button") || r2.customElements.define("media-chrome-menu-button", uF);
  try {
    var uj = "u" > typeof window ? window : e.g;
    uj._sentryModuleMetadata = uj._sentryModuleMetadata || {}, uj._sentryModuleMetadata[new uj.Error().stack] = Object.assign({}, uj._sentryModuleMetadata[new uj.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  class uG extends uF {
    static get observedAttributes() {
      return [...super.observedAttributes, "target"];
    }
    connectedCallback() {
      super.connectedCallback(), this.setAttribute("aria-label", rq("settings"));
    }
    get invokeTargetElement() {
      return void 0 != this.invokeTarget ? super.invokeTargetElement : na(this).querySelector("media-settings-menu");
    }
  }
  uG.getSlotTemplateHTML = function() {
    return `
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `;
  }, uG.getTooltipContentHTML = function() {
    return rq("Settings");
  }, r2.customElements.get("media-settings-menu-button") || r2.customElements.define("media-settings-menu-button", uG);
  try {
    var uY = "u" > typeof window ? window : e.g;
    uY._sentryModuleMetadata = uY._sentryModuleMetadata || {}, uY._sentryModuleMetadata[new uY.Error().stack] = Object.assign({}, uY._sentryModuleMetadata[new uY.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var uQ = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, uz = (e10, t10, a10) => (uQ(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), uZ = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, uX = (e10, t10, a10, i10) => (uQ(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10), uJ = (e10, t10, a10) => (uQ(e10, t10, "access private method"), a10);
  vf = /* @__PURE__ */ new WeakMap(), vE = /* @__PURE__ */ new WeakMap(), v_ = /* @__PURE__ */ new WeakSet(), vw = function() {
    if (uz(this, vE) === JSON.stringify(this.mediaAudioTrackList)) return;
    uX(this, vE, JSON.stringify(this.mediaAudioTrackList));
    let e10 = this.mediaAudioTrackList;
    for (let t10 of (this.defaultSlot.textContent = "", e10.sort((e11, t11) => e11.id.localeCompare(t11.id, void 0, { numeric: true })), e10)) {
      let e11 = uE({ type: "radio", text: this.formatMenuItemText(t10.label, t10), value: `${t10.id}`, checked: t10.enabled });
      e11.prepend(u_(this, "checked-indicator")), this.defaultSlot.append(e11);
    }
  }, vT = /* @__PURE__ */ new WeakSet(), vA = function() {
    if (null == this.value) return;
    let e10 = new r2.CustomEvent(rb.MEDIA_AUDIO_TRACK_REQUEST, { composed: true, bubbles: true, detail: this.value });
    this.dispatchEvent(e10);
  }, r2.customElements.get("media-audio-track-menu") || r2.customElements.define("media-audio-track-menu", class extends uk {
    constructor() {
      super(...arguments), uZ(this, v_), uZ(this, vT), uZ(this, vf, []), uZ(this, vE, void 0);
    }
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_AUDIO_TRACK_LIST, rE.MEDIA_AUDIO_TRACK_ENABLED, rE.MEDIA_AUDIO_TRACK_UNAVAILABLE];
    }
    attributeChangedCallback(e10, t10, a10) {
      if (super.attributeChangedCallback(e10, t10, a10), e10 === rE.MEDIA_AUDIO_TRACK_ENABLED && t10 !== a10) this.value = a10;
      else if (e10 === rE.MEDIA_AUDIO_TRACK_LIST && t10 !== a10) {
        var i10;
        uX(this, vf, null == (i10 = null != a10 ? a10 : "") ? void 0 : i10.split(/\s+/).map(rP)), uJ(this, v_, vw).call(this);
      }
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("change", uJ(this, vT, vA));
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("change", uJ(this, vT, vA));
    }
    get anchorElement() {
      var e10;
      return "auto" !== this.anchor ? super.anchorElement : null == (e10 = na(this)) ? void 0 : e10.querySelector("media-audio-track-menu-button");
    }
    get mediaAudioTrackList() {
      return uz(this, vf);
    }
    set mediaAudioTrackList(e10) {
      uX(this, vf, e10), uJ(this, v_, vw).call(this);
    }
    get mediaAudioTrackEnabled() {
      var e10;
      return null != (e10 = ng(this, rE.MEDIA_AUDIO_TRACK_ENABLED)) ? e10 : "";
    }
    set mediaAudioTrackEnabled(e10) {
      ny(this, rE.MEDIA_AUDIO_TRACK_ENABLED, e10);
    }
  });
  try {
    var u0 = "u" > typeof window ? window : e.g;
    u0._sentryModuleMetadata = u0._sentryModuleMetadata || {}, u0._sentryModuleMetadata[new u0.Error().stack] = Object.assign({}, u0._sentryModuleMetadata[new u0.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let u1 = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`, u2 = (e10) => {
    let t10 = rq("Audio");
    e10.setAttribute("aria-label", t10);
  };
  class u3 extends uF {
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_AUDIO_TRACK_ENABLED, rE.MEDIA_AUDIO_TRACK_UNAVAILABLE];
    }
    connectedCallback() {
      super.connectedCallback(), u2(this);
    }
    attributeChangedCallback(e10, t10, a10) {
      super.attributeChangedCallback(e10, t10, a10), e10 === rE.MEDIA_LANG && u2(this);
    }
    get invokeTargetElement() {
      var e10;
      return void 0 != this.invokeTarget ? super.invokeTargetElement : null == (e10 = na(this)) ? void 0 : e10.querySelector("media-audio-track-menu");
    }
    get mediaAudioTrackEnabled() {
      var e10;
      return null != (e10 = ng(this, rE.MEDIA_AUDIO_TRACK_ENABLED)) ? e10 : "";
    }
    set mediaAudioTrackEnabled(e10) {
      ny(this, rE.MEDIA_AUDIO_TRACK_ENABLED, e10);
    }
  }
  u3.getSlotTemplateHTML = function() {
    return `
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${u1}</slot>
  `;
  }, u3.getTooltipContentHTML = function() {
    return rq("Audio");
  }, r2.customElements.get("media-audio-track-menu-button") || r2.customElements.define("media-audio-track-menu-button", u3);
  try {
    var u4 = "u" > typeof window ? window : e.g;
    u4._sentryModuleMetadata = u4._sentryModuleMetadata || {}, u4._sentryModuleMetadata[new u4.Error().stack] = Object.assign({}, u4._sentryModuleMetadata[new u4.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var u5 = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, u9 = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, u8 = (e10, t10, a10) => (u5(e10, t10, "access private method"), a10);
  let u6 = `
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;
  class u7 extends uk {
    constructor() {
      super(...arguments), u9(this, vM), u9(this, vI), u9(this, vk, void 0);
    }
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_SUBTITLES_LIST, rE.MEDIA_SUBTITLES_SHOWING];
    }
    attributeChangedCallback(e10, t10, a10) {
      super.attributeChangedCallback(e10, t10, a10), e10 === rE.MEDIA_SUBTITLES_LIST && t10 !== a10 ? u8(this, vM, vS).call(this) : e10 === rE.MEDIA_SUBTITLES_SHOWING && t10 !== a10 && (this.value = a10 || "", u8(this, vM, vS).call(this));
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("change", u8(this, vI, vR));
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("change", u8(this, vI, vR));
    }
    get anchorElement() {
      return "auto" !== this.anchor ? super.anchorElement : na(this).querySelector("media-captions-menu-button");
    }
    get mediaSubtitlesList() {
      return ce(this, rE.MEDIA_SUBTITLES_LIST);
    }
    set mediaSubtitlesList(e10) {
      ct(this, rE.MEDIA_SUBTITLES_LIST, e10);
    }
    get mediaSubtitlesShowing() {
      return ce(this, rE.MEDIA_SUBTITLES_SHOWING);
    }
    set mediaSubtitlesShowing(e10) {
      ct(this, rE.MEDIA_SUBTITLES_SHOWING, e10);
    }
  }
  vk = /* @__PURE__ */ new WeakMap(), vM = /* @__PURE__ */ new WeakSet(), vS = function() {
    var e10, t10, a10, i10;
    let r10 = (u5(this, t10 = vk, "read from private field"), t10.get(this) !== JSON.stringify(this.mediaSubtitlesList)), n10 = this.value !== this.getAttribute(rE.MEDIA_SUBTITLES_SHOWING);
    if (!r10 && !n10) return;
    a10 = vk, i10 = JSON.stringify(this.mediaSubtitlesList), u5(this, a10, "write to private field"), a10.set(this, i10), this.defaultSlot.textContent = "";
    let s10 = !this.value, o10 = uE({ type: "radio", text: this.formatMenuItemText(rq("Off")), value: "off", checked: s10 });
    for (let t11 of (o10.prepend(u_(this, "checked-indicator")), this.defaultSlot.append(o10), this.mediaSubtitlesList)) {
      let a11 = uE({ type: "radio", text: this.formatMenuItemText(t11.label, t11), value: nZ(t11), checked: this.value == nZ(t11) });
      a11.prepend(u_(this, "checked-indicator")), "captions" === (null != (e10 = t11.kind) ? e10 : "subs") && a11.append(u_(this, "captions-indicator")), this.defaultSlot.append(a11);
    }
  }, vI = /* @__PURE__ */ new WeakSet(), vR = function() {
    let e10 = this.mediaSubtitlesShowing, t10 = this.getAttribute(rE.MEDIA_SUBTITLES_SHOWING), a10 = this.value !== t10;
    if ((null == e10 ? void 0 : e10.length) && a10 && this.dispatchEvent(new r2.CustomEvent(rb.MEDIA_DISABLE_SUBTITLES_REQUEST, { composed: true, bubbles: true, detail: e10 })), !this.value || !a10) return;
    let i10 = new r2.CustomEvent(rb.MEDIA_SHOW_SUBTITLES_REQUEST, { composed: true, bubbles: true, detail: this.value });
    this.dispatchEvent(i10);
  }, u7.getTemplateHTML = function(e10) {
    return `
    ${uk.getTemplateHTML(e10)}
    <slot name="captions-indicator" hidden>${u6}</slot>
  `;
  };
  let ce = (e10, t10) => {
    let a10 = e10.getAttribute(t10);
    return a10 ? nQ(a10) : [];
  }, ct = (e10, t10, a10) => {
    if (!(null == a10 ? void 0 : a10.length)) return void e10.removeAttribute(t10);
    let i10 = nX(a10);
    e10.getAttribute(t10) !== i10 && e10.setAttribute(t10, i10);
  };
  r2.customElements.get("media-captions-menu") || r2.customElements.define("media-captions-menu", u7);
  try {
    var ca = "u" > typeof window ? window : e.g;
    ca._sentryModuleMetadata = ca._sentryModuleMetadata || {}, ca._sentryModuleMetadata[new ca.Error().stack] = Object.assign({}, ca._sentryModuleMetadata[new ca.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ci = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`, cr = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`, cn = (e10) => {
    e10.setAttribute("data-captions-enabled", n2(e10).toString());
  }, cs = (e10) => {
    e10.setAttribute("aria-label", rq("closed captions"));
  };
  class co extends uF {
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_SUBTITLES_LIST, rE.MEDIA_SUBTITLES_SHOWING, rE.MEDIA_LANG];
    }
    connectedCallback() {
      super.connectedCallback(), cs(this), cn(this);
    }
    attributeChangedCallback(e10, t10, a10) {
      super.attributeChangedCallback(e10, t10, a10), e10 === rE.MEDIA_SUBTITLES_SHOWING ? cn(this) : e10 === rE.MEDIA_LANG && cs(this);
    }
    get invokeTargetElement() {
      var e10;
      return void 0 != this.invokeTarget ? super.invokeTargetElement : null == (e10 = na(this)) ? void 0 : e10.querySelector("media-captions-menu");
    }
    get mediaSubtitlesList() {
      return cl(this, rE.MEDIA_SUBTITLES_LIST);
    }
    set mediaSubtitlesList(e10) {
      cd(this, rE.MEDIA_SUBTITLES_LIST, e10);
    }
    get mediaSubtitlesShowing() {
      return cl(this, rE.MEDIA_SUBTITLES_SHOWING);
    }
    set mediaSubtitlesShowing(e10) {
      cd(this, rE.MEDIA_SUBTITLES_SHOWING, e10);
    }
  }
  co.getSlotTemplateHTML = function() {
    return `
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${ci}</slot>
      <slot name="off">${cr}</slot>
    </slot>
  `;
  }, co.getTooltipContentHTML = function() {
    return rq("Captions");
  };
  let cl = (e10, t10) => {
    let a10 = e10.getAttribute(t10);
    return a10 ? nQ(a10) : [];
  }, cd = (e10, t10, a10) => {
    if (!(null == a10 ? void 0 : a10.length)) return void e10.removeAttribute(t10);
    let i10 = nX(a10);
    e10.getAttribute(t10) !== i10 && e10.setAttribute(t10, i10);
  };
  r2.customElements.get("media-captions-menu-button") || r2.customElements.define("media-captions-menu-button", co);
  try {
    var cu = "u" > typeof window ? window : e.g;
    cu._sentryModuleMetadata = cu._sentryModuleMetadata || {}, cu._sentryModuleMetadata[new cu.Error().stack] = Object.assign({}, cu._sentryModuleMetadata[new cu.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var cc = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, ch = (e10, t10, a10) => (cc(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), cm = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, cp = (e10, t10, a10) => (cc(e10, t10, "access private method"), a10);
  let cv = "rates";
  vC = /* @__PURE__ */ new WeakMap(), vL = /* @__PURE__ */ new WeakSet(), vD = function() {
    this.defaultSlot.textContent = "";
    let e10 = this.mediaPlaybackRate, t10 = new Set(Array.from(ch(this, vC)).map((e11) => Number(e11)));
    for (let a10 of (e10 > 0 && !t10.has(e10) && t10.add(e10), Array.from(t10).sort((e11, t11) => e11 - t11))) {
      let t11 = uE({ type: "radio", text: this.formatMenuItemText(`${a10}x`, a10), value: a10.toString(), checked: e10 === a10 });
      t11.prepend(u_(this, "checked-indicator")), this.defaultSlot.append(t11);
    }
  }, vx = /* @__PURE__ */ new WeakSet(), vP = function() {
    if (!this.value) return;
    let e10 = new r2.CustomEvent(rb.MEDIA_PLAYBACK_RATE_REQUEST, { composed: true, bubbles: true, detail: this.value });
    this.dispatchEvent(e10);
  }, r2.customElements.get("media-playback-rate-menu") || r2.customElements.define("media-playback-rate-menu", class extends uk {
    constructor() {
      super(), cm(this, vL), cm(this, vx), cm(this, vC, new nj(this, cv, { defaultValue: lB })), cp(this, vL, vD).call(this);
    }
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_PLAYBACK_RATE, cv];
    }
    attributeChangedCallback(e10, t10, a10) {
      super.attributeChangedCallback(e10, t10, a10), e10 === rE.MEDIA_PLAYBACK_RATE && t10 != a10 ? (this.value = a10, cp(this, vL, vD).call(this)) : e10 === cv && t10 != a10 && (ch(this, vC).value = a10, cp(this, vL, vD).call(this));
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("change", cp(this, vx, vP));
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("change", cp(this, vx, vP));
    }
    get anchorElement() {
      return "auto" !== this.anchor ? super.anchorElement : na(this).querySelector("media-playback-rate-menu-button");
    }
    get rates() {
      return ch(this, vC);
    }
    set rates(e10) {
      e10 ? Array.isArray(e10) ? ch(this, vC).value = e10.join(" ") : "string" == typeof e10 && (ch(this, vC).value = e10) : ch(this, vC).value = "", cp(this, vL, vD).call(this);
    }
    get mediaPlaybackRate() {
      return nm(this, rE.MEDIA_PLAYBACK_RATE, 1);
    }
    set mediaPlaybackRate(e10) {
      np(this, rE.MEDIA_PLAYBACK_RATE, e10);
    }
  });
  try {
    var cb = "u" > typeof window ? window : e.g;
    cb._sentryModuleMetadata = cb._sentryModuleMetadata || {}, cb._sentryModuleMetadata[new cb.Error().stack] = Object.assign({}, cb._sentryModuleMetadata[new cb.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  class cg extends uF {
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_PLAYBACK_RATE];
    }
    constructor() {
      var e10;
      super(), this.container = this.shadowRoot.querySelector('slot[name="icon"]'), this.container.innerHTML = `${null != (e10 = this.mediaPlaybackRate) ? e10 : 1}x`;
    }
    attributeChangedCallback(e10, t10, a10) {
      if (super.attributeChangedCallback(e10, t10, a10), e10 === rE.MEDIA_PLAYBACK_RATE) {
        let e11 = a10 ? +a10 : NaN, t11 = Number.isNaN(e11) ? 1 : e11;
        this.container.innerHTML = `${t11}x`, this.setAttribute("aria-label", rq("Playback rate {playbackRate}", { playbackRate: t11 }));
      }
    }
    get invokeTargetElement() {
      return void 0 != this.invokeTarget ? super.invokeTargetElement : na(this).querySelector("media-playback-rate-menu");
    }
    get mediaPlaybackRate() {
      return nm(this, rE.MEDIA_PLAYBACK_RATE, 1);
    }
    set mediaPlaybackRate(e10) {
      np(this, rE.MEDIA_PLAYBACK_RATE, e10);
    }
  }
  cg.getSlotTemplateHTML = function(e10) {
    return `
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e10.mediaplaybackrate || 1}x</slot>
  `;
  }, cg.getTooltipContentHTML = function() {
    return rq("Playback rate");
  }, r2.customElements.get("media-playback-rate-menu-button") || r2.customElements.define("media-playback-rate-menu-button", cg);
  try {
    var cy = "u" > typeof window ? window : e.g;
    cy._sentryModuleMetadata = cy._sentryModuleMetadata || {}, cy._sentryModuleMetadata[new cy.Error().stack] = Object.assign({}, cy._sentryModuleMetadata[new cy.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var cf = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, cE = (e10, t10, a10) => (cf(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), c_ = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, cw = (e10, t10, a10, i10) => (cf(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10), cT = (e10, t10, a10) => (cf(e10, t10, "access private method"), a10);
  vO = /* @__PURE__ */ new WeakMap(), vN = /* @__PURE__ */ new WeakMap(), vU = /* @__PURE__ */ new WeakSet(), vB = function() {
    let e10, t10 = !this.mediaRenditionSelected;
    if (cE(this, vN).mediaRenditionList === JSON.stringify(this.mediaRenditionList) && cE(this, vN).mediaHeight === this.mediaHeight && cE(this, vN).mediaWidth === this.mediaWidth && cE(this, vN).isAuto === t10) return;
    cE(this, vN).mediaRenditionList = JSON.stringify(this.mediaRenditionList), cE(this, vN).mediaHeight = this.mediaHeight, cE(this, vN).mediaWidth = this.mediaWidth, cE(this, vN).isAuto = t10;
    let a10 = this.mediaRenditionList.sort(this.compareRendition.bind(this)), i10 = a10.find((e11) => e11.id === this.mediaRenditionSelected);
    for (let e11 of a10) e11.selected = e11 === i10;
    for (let e11 of (this.defaultSlot.textContent = "", a10)) {
      let a11 = uE({ type: "radio", text: this.formatRendition(e11, { showBitrate: this.showRenditionBitrate(e11) }), value: `${e11.id}`, checked: e11.selected && !t10 });
      a11.prepend(u_(this, "checked-indicator")), this.defaultSlot.append(a11);
    }
    let r10 = i10 && this.showRenditionBitrate(i10);
    t10 && (i10 ? e10 = this.formatMenuItemText(`${rq("Auto")} \u2022 ${this.formatRendition(i10, { showBitrate: r10 })}`, i10) : this.mediaHeight > 0 && this.mediaWidth > 0 && (e10 = this.formatMenuItemText(`${rq("Auto")} (${Math.min(this.mediaWidth, this.mediaHeight)}p)`))), e10 || (e10 = this.formatMenuItemText(rq("Auto")));
    let n10 = uE({ type: "radio", text: e10, value: "auto", checked: t10 });
    n10.dataset.description = e10, n10.prepend(u_(this, "checked-indicator")), this.defaultSlot.append(n10);
  }, vH = /* @__PURE__ */ new WeakSet(), vW = function() {
    if (null == this.value) return;
    let e10 = new r2.CustomEvent(rb.MEDIA_RENDITION_REQUEST, { composed: true, bubbles: true, detail: this.value });
    this.dispatchEvent(e10);
  }, r2.customElements.get("media-rendition-menu") || r2.customElements.define("media-rendition-menu", class extends uk {
    constructor() {
      super(...arguments), c_(this, vU), c_(this, vH), c_(this, vO, []), c_(this, vN, {});
    }
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_RENDITION_LIST, rE.MEDIA_RENDITION_SELECTED, rE.MEDIA_RENDITION_UNAVAILABLE, rE.MEDIA_HEIGHT, rE.MEDIA_WIDTH];
    }
    static formatMenuItemText(e10, t10) {
      return super.formatMenuItemText(e10, t10);
    }
    static formatRendition(e10, { showBitrate: t10 = false } = {}) {
      let a10 = `${Math.min(e10.width, e10.height)}p`;
      if (t10 && e10.bitrate) {
        let t11 = e10.bitrate / 1e6, i10 = `${t11.toFixed(+(t11 < 1))} Mbps`;
        return `${a10} (${i10})`;
      }
      return this.formatMenuItemText(a10, e10);
    }
    static compareRendition(e10, t10) {
      var a10, i10;
      return t10.height === e10.height ? (null != (a10 = t10.bitrate) ? a10 : 0) - (null != (i10 = e10.bitrate) ? i10 : 0) : t10.height - e10.height;
    }
    attributeChangedCallback(e10, t10, a10) {
      if (super.attributeChangedCallback(e10, t10, a10), t10 !== a10) switch (e10) {
        case rE.MEDIA_RENDITION_SELECTED:
          this.value = null != a10 ? a10 : "auto", cT(this, vU, vB).call(this);
          break;
        case rE.MEDIA_RENDITION_LIST:
          cw(this, vO, null == a10 ? void 0 : a10.split(/\s+/).map(rD)), cT(this, vU, vB).call(this);
          break;
        case rE.MEDIA_HEIGHT:
        case rE.MEDIA_WIDTH:
          cT(this, vU, vB).call(this);
      }
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("change", cT(this, vH, vW));
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("change", cT(this, vH, vW));
    }
    get anchorElement() {
      return "auto" !== this.anchor ? super.anchorElement : na(this).querySelector("media-rendition-menu-button");
    }
    get mediaRenditionList() {
      return cE(this, vO);
    }
    set mediaRenditionList(e10) {
      cw(this, vO, e10), cT(this, vU, vB).call(this);
    }
    get mediaRenditionSelected() {
      return ng(this, rE.MEDIA_RENDITION_SELECTED);
    }
    set mediaRenditionSelected(e10) {
      ny(this, rE.MEDIA_RENDITION_SELECTED, e10);
    }
    get mediaHeight() {
      return nm(this, rE.MEDIA_HEIGHT);
    }
    set mediaHeight(e10) {
      np(this, rE.MEDIA_HEIGHT, e10);
    }
    get mediaWidth() {
      return nm(this, rE.MEDIA_WIDTH);
    }
    set mediaWidth(e10) {
      np(this, rE.MEDIA_WIDTH, e10);
    }
    compareRendition(e10, t10) {
      return this.constructor.compareRendition(e10, t10);
    }
    formatMenuItemText(e10, t10) {
      return this.constructor.formatMenuItemText(e10, t10);
    }
    formatRendition(e10, t10) {
      return this.constructor.formatRendition(e10, t10);
    }
    showRenditionBitrate(e10) {
      return this.mediaRenditionList.some((t10) => t10 !== e10 && t10.height === e10.height && t10.bitrate !== e10.bitrate);
    }
  });
  try {
    var cA = "u" > typeof window ? window : e.g;
    cA._sentryModuleMetadata = cA._sentryModuleMetadata || {}, cA._sentryModuleMetadata[new cA.Error().stack] = Object.assign({}, cA._sentryModuleMetadata[new cA.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let ck = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;
  class cM extends uF {
    static get observedAttributes() {
      return [...super.observedAttributes, rE.MEDIA_RENDITION_SELECTED, rE.MEDIA_RENDITION_UNAVAILABLE, rE.MEDIA_HEIGHT];
    }
    connectedCallback() {
      super.connectedCallback(), this.setAttribute("aria-label", rq("quality"));
    }
    get invokeTargetElement() {
      return void 0 != this.invokeTarget ? super.invokeTargetElement : na(this).querySelector("media-rendition-menu");
    }
    get mediaRenditionSelected() {
      return ng(this, rE.MEDIA_RENDITION_SELECTED);
    }
    set mediaRenditionSelected(e10) {
      ny(this, rE.MEDIA_RENDITION_SELECTED, e10);
    }
    get mediaHeight() {
      return nm(this, rE.MEDIA_HEIGHT);
    }
    set mediaHeight(e10) {
      np(this, rE.MEDIA_HEIGHT, e10);
    }
  }
  cM.getSlotTemplateHTML = function() {
    return `
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${ck}</slot>
  `;
  }, cM.getTooltipContentHTML = function() {
    return rq("Quality");
  }, r2.customElements.get("media-rendition-menu-button") || r2.customElements.define("media-rendition-menu-button", cM);
  try {
    var cS = "u" > typeof window ? window : e.g;
    cS._sentryModuleMetadata = cS._sentryModuleMetadata || {}, cS._sentryModuleMetadata[new cS.Error().stack] = Object.assign({}, cS._sentryModuleMetadata[new cS.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var cI = (e10, t10, a10) => {
    if (!t10.has(e10)) throw TypeError("Cannot " + a10);
  }, cR = (e10, t10, a10) => (cI(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), cC = (e10, t10, a10) => {
    if (t10.has(e10)) throw TypeError("Cannot add the same private member more than once");
    t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10);
  }, cL = (e10, t10, a10, i10) => (cI(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10), cD = (e10, t10, a10) => (cI(e10, t10, "access private method"), a10);
  class cx extends uk {
    constructor() {
      super(), cC(this, vq), cC(this, vK), cC(this, vj), cC(this, vY), cC(this, vZ), cC(this, v$, false), cC(this, vz, (e10) => {
        let t10 = e10.target, a10 = (null == t10 ? void 0 : t10.nodeName) === "VIDEO", i10 = cD(this, vY, vQ).call(this, t10);
        (a10 || i10) && (cR(this, v$) ? cD(this, vK, vF).call(this) : cD(this, vZ, vX).call(this, e10));
      }), cC(this, vJ, (e10) => {
        let t10 = e10.target, a10 = this.contains(t10), i10 = 2 === e10.button, r10 = (null == t10 ? void 0 : t10.nodeName) === "VIDEO", n10 = cD(this, vY, vQ).call(this, t10);
        a10 || i10 && (r10 || n10) || cD(this, vK, vF).call(this);
      }), cC(this, v0, (e10) => {
        "Escape" === e10.key && cD(this, vK, vF).call(this);
      }), cC(this, v1, (e10) => {
        var t10, a10;
        let i10 = e10.target;
        if (null == (t10 = i10.matches) ? void 0 : t10.call(i10, 'button[invoke="copy"]')) {
          let e11 = null == (a10 = i10.closest("media-context-menu-item")) ? void 0 : a10.querySelector('input[slot="copy"]');
          e11 && navigator.clipboard.writeText(e11.value);
        }
        cD(this, vK, vF).call(this);
      }), this.setAttribute("noautohide", ""), cD(this, vq, vV).call(this);
    }
    connectedCallback() {
      super.connectedCallback(), na(this).addEventListener("contextmenu", cR(this, vz)), this.addEventListener("click", cR(this, v1));
    }
    disconnectedCallback() {
      super.disconnectedCallback(), na(this).removeEventListener("contextmenu", cR(this, vz)), this.removeEventListener("click", cR(this, v1)), document.removeEventListener("mousedown", cR(this, vJ)), document.removeEventListener("keydown", cR(this, v0));
    }
  }
  v$ = /* @__PURE__ */ new WeakMap(), vq = /* @__PURE__ */ new WeakSet(), vV = function() {
    this.hidden = !cR(this, v$);
  }, vK = /* @__PURE__ */ new WeakSet(), vF = function() {
    cL(this, v$, false), cD(this, vq, vV).call(this);
  }, vj = /* @__PURE__ */ new WeakSet(), vG = function() {
    document.querySelectorAll("media-context-menu").forEach((e10) => {
      e10 !== this && cD(e10, vK, vF).call(e10);
    });
  }, vY = /* @__PURE__ */ new WeakSet(), vQ = function(e10) {
    return !!e10 && (!!e10.hasAttribute("slot") && "media" === e10.getAttribute("slot") || !!(e10.nodeName.includes("-") && e10.tagName.includes("-")) && (e10.hasAttribute("src") || e10.hasAttribute("poster") || e10.hasAttribute("preload") || e10.hasAttribute("playsinline")));
  }, vz = /* @__PURE__ */ new WeakMap(), vZ = /* @__PURE__ */ new WeakSet(), vX = function(e10) {
    e10.preventDefault(), cD(this, vj, vG).call(this), cL(this, v$, true), this.style.position = "fixed", this.style.left = `${e10.clientX}px`, this.style.top = `${e10.clientY}px`, cD(this, vq, vV).call(this), document.addEventListener("mousedown", cR(this, vJ), { once: true }), document.addEventListener("keydown", cR(this, v0), { once: true });
  }, vJ = /* @__PURE__ */ new WeakMap(), v0 = /* @__PURE__ */ new WeakMap(), v1 = /* @__PURE__ */ new WeakMap(), cx.getTemplateHTML = function(e10) {
    return `
      ${uk.getTemplateHTML(e10)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `;
  }, r2.customElements.get("media-context-menu") || r2.customElements.define("media-context-menu", cx);
  try {
    var cP = "u" > typeof window ? window : e.g;
    cP._sentryModuleMetadata = cP._sentryModuleMetadata || {}, cP._sentryModuleMetadata[new cP.Error().stack] = Object.assign({}, cP._sentryModuleMetadata[new cP.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  class cO extends uB {
  }
  cO.shadowRootOptions = { mode: "open" }, cO.getTemplateHTML = function(e10) {
    return `
    ${uB.getTemplateHTML.call(this, e10)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `;
  }, r2.customElements.get("media-context-menu-item") || r2.customElements.define("media-context-menu-item", cO);
  try {
    var cN = "u" > typeof window ? window : e.g;
    cN._sentryModuleMetadata = cN._sentryModuleMetadata || {}, cN._sentryModuleMetadata[new cN.Error().stack] = Object.assign({}, cN._sentryModuleMetadata[new cN.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  try {
    var cU = "u" > typeof window ? window : e.g;
    cU._sentryModuleMetadata = cU._sentryModuleMetadata || {}, cU._sentryModuleMetadata[new cU.Error().stack] = Object.assign({}, cU._sentryModuleMetadata[new cU.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var cB = (e10) => {
    throw TypeError(e10);
  }, cH = (e10, t10, a10) => t10.has(e10) || cB("Cannot " + a10), cW = (e10, t10, a10) => (cH(e10, t10, "read from private field"), a10 ? a10.call(e10) : t10.get(e10)), c$ = (e10, t10, a10) => t10.has(e10) ? cB("Cannot add the same private member more than once") : t10 instanceof WeakSet ? t10.add(e10) : t10.set(e10, a10), cq = (e10, t10, a10, i10) => (cH(e10, t10, "write to private field"), i10 ? i10.call(e10, a10) : t10.set(e10, a10), a10), cV = (e10, t10, a10) => (cH(e10, t10, "access private method"), a10), cK = class {
    addEventListener() {
    }
    removeEventListener() {
    }
    dispatchEvent(e10) {
      return true;
    }
  };
  "u" < typeof DocumentFragment && (globalThis.DocumentFragment = class extends cK {
  });
  var cF, cj, cG, cY, cQ, cz, cZ, cX, cJ, c0, c1, c2, c3, c4, c5, c9, c8, c6, c7, he, ht, ha, hi, hr, hn, hs, ho, hl, hd, hu, hc, hh, hm, hp, hv, hb, hg, hy, hf, hE, h_, hw, hT, hA, hk, hM, hS, hI, hR, hC, hL, hD, hx, hP, hO, hN, hU, hB, hH, hW, h$, hq, hV, hK, hF, hj, hG, hY, hQ, hz, hZ, hX, hJ, h0, h1, h2, h3, h4, h5, h9, h8, h6, h7, me, mt, ma, mi, mr, mn, ms, mo, ml, md, mu, mc, mh, mm, mp, mv, mb, mg, my, mf, mE, m_, mw, mT, mA, mk, mM, mS, mI, mR, mC, mL, mD, mx, mP, mO, mN, mU, mB, mH, mW, m$, mq, mV, mK, mF, mj, mG, mY, mQ, mz, mZ, mX, mJ, m0, m1, m2, m3, m4, m5, m9, m8, m6, m7, pe, pt, pa, pi, pr, pn, ps, po, pl, pd, pu, pc, ph, pm, pp, pv, pb, pg, py, pf, pE, p_, pw, pT, pA, pk, pM, pS, pI, pR, pC, pL, pD, px, pP, pO, pN, pU, pB, pH, pW, p$, pq, pV, pK, pF, pj, pG, pY, pQ, pz, pZ, pX, pJ, p0, p1, p2, p3, p4, p5, p9, p8, p6, p7, ve, vt, va, vi, vr, vn, vs, vo, vl, vd, vu, vc, vh, vm, vp, vv, vb, vg, vy, vf, vE, v_, vw, vT, vA, vk, vM, vS, vI, vR, vC, vL, vD, vx, vP, vO, vN, vU, vB, vH, vW, v$, vq, vV, vK, vF, vj, vG, vY, vQ, vz, vZ, vX, vJ, v0, v1, v2, v3 = class extends cK {
  }, v4 = class {
    constructor(e10, t10 = {}) {
      c$(this, v2), cq(this, v2, null == t10 ? void 0 : t10.detail);
    }
    get detail() {
      return cW(this, v2);
    }
    initCustomEvent() {
    }
  };
  v2 = /* @__PURE__ */ new WeakMap();
  var v5 = { document: { createElement: function(e10, t10) {
    return new v3();
  } }, DocumentFragment, customElements: { get(e10) {
  }, define(e10, t10, a10) {
  }, getName: (e10) => null, upgrade(e10) {
  }, whenDefined: (e10) => Promise.resolve(v3) }, CustomEvent: v4, EventTarget: cK, HTMLElement: v3, HTMLVideoElement: class extends cK {
  } }, v9 = "u" < typeof window || void 0 === globalThis.customElements, v8 = v9 ? v5 : globalThis, v6 = v9 ? v5.document : globalThis.document;
  function v7(e10) {
    return e10.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function be(e10) {
    return e10.replace(/[-_]([a-z])/g, (e11, t10) => t10.toUpperCase());
  }
  function bt(e10) {
    if (null == e10) return;
    let t10 = +e10;
    return Number.isNaN(t10) ? void 0 : t10;
  }
  function ba(e10) {
    let t10 = (function(e11) {
      let t11 = {};
      for (let a10 in e11) null != e11[a10] && (t11[a10] = e11[a10]);
      return new URLSearchParams(t11);
    })(e10).toString();
    return t10 ? "?" + t10 : "";
  }
  var bi, br, bn, bs = (e10, t10) => !!e10 && !!t10 && (!!e10.contains(t10) || bs(e10, t10.getRootNode().host)), bo = "mux.com", bl = (() => {
    try {
      return "3.13.0";
    } catch {
    }
    return "UNKNOWN";
  })(), bd = (e10) => {
    if (e10) {
      if ([tG, tj].includes(e10)) return e10;
      if (null != e10 && e10.includes("live")) return tG;
    }
  }, bu = { crossorigin: "crossOrigin", playsinline: "playsInline" }, bc = class {
    constructor(e10, t10) {
      c$(this, bi), c$(this, br), c$(this, bn, []), cq(this, bi, e10), cq(this, br, t10);
    }
    [Symbol.iterator]() {
      return cW(this, bn).values();
    }
    get length() {
      return cW(this, bn).length;
    }
    get value() {
      var e10;
      return null != (e10 = cW(this, bn).join(" ")) ? e10 : "";
    }
    set value(e10) {
      var t10;
      e10 !== this.value && (cq(this, bn, []), this.add(...null != (t10 = null == e10 ? void 0 : e10.split(" ")) ? t10 : []));
    }
    toString() {
      return this.value;
    }
    item(e10) {
      return cW(this, bn)[e10];
    }
    values() {
      return cW(this, bn).values();
    }
    keys() {
      return cW(this, bn).keys();
    }
    forEach(e10) {
      cW(this, bn).forEach(e10);
    }
    add(...e10) {
      var t10, a10;
      e10.forEach((e11) => {
        this.contains(e11) || cW(this, bn).push(e11);
      }), ("" !== this.value || null != (t10 = cW(this, bi)) && t10.hasAttribute(`${cW(this, br)}`)) && null != (a10 = cW(this, bi)) && a10.setAttribute(`${cW(this, br)}`, `${this.value}`);
    }
    remove(...e10) {
      var t10;
      e10.forEach((e11) => {
        cW(this, bn).splice(cW(this, bn).indexOf(e11), 1);
      }), null == (t10 = cW(this, bi)) || t10.setAttribute(`${cW(this, br)}`, `${this.value}`);
    }
    contains(e10) {
      return cW(this, bn).includes(e10);
    }
    toggle(e10, t10) {
      return void 0 !== t10 ? t10 ? (this.add(e10), true) : (this.remove(e10), false) : this.contains(e10) ? (this.remove(e10), false) : (this.add(e10), true);
    }
    replace(e10, t10) {
      this.remove(e10), this.add(t10);
    }
  };
  bi = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap();
  var bh = `[mux-player ${bl}]`;
  function bm(...e10) {
    console.warn(bh, ...e10);
  }
  function bp(...e10) {
    console.error(bh, ...e10);
  }
  function bv(e10) {
    var t10;
    let a10 = null != (t10 = e10.message) ? t10 : "";
    e10.context && (a10 += ` ${e10.context}`), e10.file && (a10 += ` ${aa("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e10.file}`), bm(a10);
  }
  var bb = { AUTOPLAY: "autoplay", CROSSORIGIN: "crossorigin", LOOP: "loop", MUTED: "muted", PLAYSINLINE: "playsinline", PRELOAD: "preload" }, bg = { VOLUME: "volume", PLAYBACKRATE: "playbackrate", MUTED: "muted" }, by = Object.freeze({ length: 0, start(e10) {
    let t10 = e10 >>> 0;
    if (t10 >= this.length) throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t10}) is greater than or equal to the maximum bound (${this.length}).`);
    return 0;
  }, end(e10) {
    let t10 = e10 >>> 0;
    if (t10 >= this.length) throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t10}) is greater than or equal to the maximum bound (${this.length}).`);
    return 0;
  } }), bf = [...Object.values(bb).filter((e10) => bb.PLAYSINLINE !== e10), ...Object.values(bg)];
  function bE(e10, t10) {
    return e10.media ? e10.media.getAttribute(t10) : e10.getAttribute(t10);
  }
  var b_ = class extends v8.HTMLElement {
    static get observedAttributes() {
      return bf;
    }
    constructor() {
      super();
    }
    attributeChangedCallback(e10, t10, a10) {
      var i10, r10;
      switch (e10) {
        case bg.MUTED:
          this.media && (this.media.muted = null != a10, this.media.defaultMuted = null != a10);
          return;
        case bg.VOLUME: {
          let e11 = null != (i10 = bt(a10)) ? i10 : 1;
          this.media && (this.media.volume = e11);
          return;
        }
        case bg.PLAYBACKRATE: {
          let e11 = null != (r10 = bt(a10)) ? r10 : 1;
          this.media && (this.media.playbackRate = e11, this.media.defaultPlaybackRate = e11);
          return;
        }
      }
    }
    play() {
      var e10, t10;
      return null != (t10 = null == (e10 = this.media) ? void 0 : e10.play()) ? t10 : Promise.reject();
    }
    pause() {
      var e10;
      null == (e10 = this.media) || e10.pause();
    }
    load() {
      var e10;
      null == (e10 = this.media) || e10.load();
    }
    get media() {
      var e10;
      return null == (e10 = this.shadowRoot) ? void 0 : e10.querySelector("mux-video");
    }
    get audioTracks() {
      return this.media.audioTracks;
    }
    get videoTracks() {
      return this.media.videoTracks;
    }
    get audioRenditions() {
      return this.media.audioRenditions;
    }
    get videoRenditions() {
      return this.media.videoRenditions;
    }
    get paused() {
      var e10, t10;
      return null == (t10 = null == (e10 = this.media) ? void 0 : e10.paused) || t10;
    }
    get duration() {
      var e10, t10;
      return null != (t10 = null == (e10 = this.media) ? void 0 : e10.duration) ? t10 : NaN;
    }
    get ended() {
      var e10, t10;
      return null != (t10 = null == (e10 = this.media) ? void 0 : e10.ended) && t10;
    }
    get buffered() {
      var e10, t10;
      return null != (t10 = null == (e10 = this.media) ? void 0 : e10.buffered) ? t10 : by;
    }
    get seekable() {
      var e10, t10;
      return null != (t10 = null == (e10 = this.media) ? void 0 : e10.seekable) ? t10 : by;
    }
    get readyState() {
      var e10, t10;
      return null != (t10 = null == (e10 = this.media) ? void 0 : e10.readyState) ? t10 : 0;
    }
    get videoWidth() {
      var e10, t10;
      return null != (t10 = null == (e10 = this.media) ? void 0 : e10.videoWidth) ? t10 : 0;
    }
    get videoHeight() {
      var e10, t10;
      return null != (t10 = null == (e10 = this.media) ? void 0 : e10.videoHeight) ? t10 : 0;
    }
    get currentSrc() {
      var e10, t10;
      return null != (t10 = null == (e10 = this.media) ? void 0 : e10.currentSrc) ? t10 : "";
    }
    get currentTime() {
      var e10, t10;
      return null != (t10 = null == (e10 = this.media) ? void 0 : e10.currentTime) ? t10 : 0;
    }
    set currentTime(e10) {
      this.media && (this.media.currentTime = Number(e10));
    }
    get volume() {
      var e10, t10;
      return null != (t10 = null == (e10 = this.media) ? void 0 : e10.volume) ? t10 : 1;
    }
    set volume(e10) {
      this.media && (this.media.volume = Number(e10));
    }
    get playbackRate() {
      var e10, t10;
      return null != (t10 = null == (e10 = this.media) ? void 0 : e10.playbackRate) ? t10 : 1;
    }
    set playbackRate(e10) {
      this.media && (this.media.playbackRate = Number(e10));
    }
    get defaultPlaybackRate() {
      var e10;
      return null != (e10 = bt(this.getAttribute(bg.PLAYBACKRATE))) ? e10 : 1;
    }
    set defaultPlaybackRate(e10) {
      null != e10 ? this.setAttribute(bg.PLAYBACKRATE, `${e10}`) : this.removeAttribute(bg.PLAYBACKRATE);
    }
    get crossOrigin() {
      return bE(this, bb.CROSSORIGIN);
    }
    set crossOrigin(e10) {
      this.setAttribute(bb.CROSSORIGIN, `${e10}`);
    }
    get autoplay() {
      return null != bE(this, bb.AUTOPLAY);
    }
    set autoplay(e10) {
      e10 ? this.setAttribute(bb.AUTOPLAY, "string" == typeof e10 ? e10 : "") : this.removeAttribute(bb.AUTOPLAY);
    }
    get loop() {
      return null != bE(this, bb.LOOP);
    }
    set loop(e10) {
      e10 ? this.setAttribute(bb.LOOP, "") : this.removeAttribute(bb.LOOP);
    }
    get muted() {
      var e10, t10;
      return null != (t10 = null == (e10 = this.media) ? void 0 : e10.muted) && t10;
    }
    set muted(e10) {
      this.media && (this.media.muted = !!e10);
    }
    get defaultMuted() {
      return null != bE(this, bb.MUTED);
    }
    set defaultMuted(e10) {
      e10 ? this.setAttribute(bb.MUTED, "") : this.removeAttribute(bb.MUTED);
    }
    get playsInline() {
      return null != bE(this, bb.PLAYSINLINE);
    }
    set playsInline(e10) {
      bp("playsInline is set to true by default and is not currently supported as a setter.");
    }
    get preload() {
      return this.media ? this.media.preload : this.getAttribute("preload");
    }
    set preload(e10) {
      ["", "none", "metadata", "auto"].includes(e10) ? this.setAttribute(bb.PRELOAD, e10) : this.removeAttribute(bb.PRELOAD);
    }
  }, bw = `:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`, bT = /* @__PURE__ */ new WeakMap(), bA = class e10 {
    constructor(e11, t10) {
      this.element = e11, this.type = t10, this.element.addEventListener(this.type, this);
      let a10 = bT.get(this.element);
      a10 && a10.set(this.type, this);
    }
    set(e11) {
      if ("function" == typeof e11) this.handleEvent = e11.bind(this.element);
      else if ("object" == typeof e11 && "function" == typeof e11.handleEvent) this.handleEvent = e11.handleEvent.bind(e11);
      else {
        this.element.removeEventListener(this.type, this);
        let e12 = bT.get(this.element);
        e12 && e12.delete(this.type);
      }
    }
    static for(t10) {
      bT.has(t10.element) || bT.set(t10.element, /* @__PURE__ */ new Map());
      let a10 = t10.attributeName.slice(2), i10 = bT.get(t10.element);
      return i10 && i10.has(a10) ? i10.get(a10) : new e10(t10.element, a10);
    }
  }, bk = /* @__PURE__ */ new Map(), bM = /* @__PURE__ */ new WeakMap(), bS = /* @__PURE__ */ new WeakMap(), bI = class {
    constructor(e10, t10, a10) {
      this.strings = e10, this.values = t10, this.processor = a10, this.stringsKey = this.strings.join("");
    }
    get template() {
      if (bk.has(this.stringsKey)) return bk.get(this.stringsKey);
      {
        let e10 = v6.createElement("template"), t10 = this.strings.length - 1;
        return e10.innerHTML = this.strings.reduce((e11, a10, i10) => e11 + a10 + (i10 < t10 ? `{{ ${i10} }}` : ""), ""), bk.set(this.stringsKey, e10), e10;
      }
    }
    renderInto(e10) {
      var t10;
      let a10 = this.template;
      if (bM.get(e10) !== a10) {
        bM.set(e10, a10);
        let t11 = new dW(a10, this.values, this.processor);
        bS.set(e10, t11), e10 instanceof dY ? e10.replace(...t11.children) : e10.appendChild(t11);
        return;
      }
      let i10 = bS.get(e10);
      null == (t10 = null == i10 ? void 0 : i10.update) || t10.call(i10, this.values);
    }
  }, bR = { processCallback(e10, t10, a10) {
    var i10;
    if (a10) for (let [e11, r10] of t10) e11 in a10 && (function(e12, t11) {
      (function(e13, t12) {
        if (e13 instanceof dG && t12 instanceof Element) {
          let a11 = e13.element;
          return a11[e13.attributeName] !== t12 && (e13.element.removeAttributeNS(e13.attributeNamespace, e13.attributeName), a11[e13.attributeName] = t12), true;
        }
        return false;
      })(e12, t11) || (function(e13, t12) {
        if ("boolean" == typeof t12 && e13 instanceof dG) {
          let a11 = e13.attributeNamespace;
          return t12 !== e13.element.hasAttributeNS(a11, e13.attributeName) && (e13.booleanValue = t12), true;
        }
        return false;
      })(e12, t11) || e12 instanceof dG && e12.attributeName.startsWith("on") && (bA.for(e12).set(t11), e12.element.removeAttributeNS(e12.attributeNamespace, e12.attributeName), 1) || false === t11 && e12 instanceof dY && (e12.replace(""), 1) || t11 instanceof bI && e12 instanceof dY && (t11.renderInto(e12), 1) || t11 instanceof DocumentFragment && e12 instanceof dY && (t11.childNodes.length && e12.replace(...t11.childNodes), 1) || (function(e13, t12) {
        if (e13 instanceof dG) {
          let a11 = e13.attributeNamespace, i11 = e13.element.getAttributeNS(a11, e13.attributeName);
          return String(t12) !== i11 && (e13.value = String(t12));
        }
        e13.value = String(t12);
      })(e12, t11);
    })(r10, null != (i10 = a10[e11]) ? i10 : "");
  } };
  function bC(e10, ...t10) {
    return new bI(e10, t10, bR);
  }
  var bL = Object.values({ TOP: "top", CENTER: "center", BOTTOM: "bottom", LAYER: "layer", MEDIA_LAYER: "media-layer", POSTER_LAYER: "poster-layer", VERTICAL_LAYER: "vertical-layer", CENTERED_LAYER: "centered-layer", GESTURE_LAYER: "gesture-layer", CONTROLLER_LAYER: "controller", BUTTON: "button", RANGE: "range", THUMB: "thumb", DISPLAY: "display", CONTROL_BAR: "control-bar", MENU_BUTTON: "menu-button", MENU: "menu", MENU_ITEM: "menu-item", OPTION: "option", POSTER: "poster", LIVE: "live", PLAY: "play", PRE_PLAY: "pre-play", SEEK_BACKWARD: "seek-backward", SEEK_FORWARD: "seek-forward", MUTE: "mute", CAPTIONS: "captions", AIRPLAY: "airplay", PIP: "pip", FULLSCREEN: "fullscreen", CAST: "cast", PLAYBACK_RATE: "playback-rate", VOLUME: "volume", TIME: "time", TITLE: "title", AUDIO_TRACK: "audio-track", RENDITION: "rendition" }).join(", "), bD = (e10) => e10.charAt(0).toUpperCase() + e10.slice(1), bx = (e10, t10) => {
    let a10 = ((e11) => {
      if (e11.muxCode) {
        if (2403210 === e11.muxCode) return "403-expired-token.md";
        if (2412202 === e11.muxCode) return "403-malformatted-token.md";
        if ([2403222, 2403221].includes(e11.muxCode)) return "403-incorrect-aud-value.md";
        if (2403232 === e11.muxCode) return "403-playback-id-mismatch.md";
        if (2403201 === e11.muxCode) return "missing-signed-tokens.md";
        if (2404e3 === e11.muxCode) return "404-not-found.md";
        if (2412e3 === e11.muxCode) return "412-not-playable.md";
      }
      if (e11.code) {
        if (e11.code === tV.MEDIA_ERR_NETWORK) return "";
        if (e11.code === tV.MEDIA_ERR_DECODE) return "media-decode-error.md";
        if (e11.code === tV.MEDIA_ERR_SRC_NOT_SUPPORTED) return "media-src-not-supported.md";
      }
      return "";
    })(e10);
    return { message: e10.message, context: e10.context, file: a10 };
  }, bP = `<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`, bO = v6.createElement("template");
  "innerHTML" in bO && (bO.innerHTML = bP);
  var bN, bU, bB = class extends uo {
  };
  bB.template = null == (bU = null == (bN = bO.content) ? void 0 : bN.children) ? void 0 : bU[0], v8.customElements.get("media-theme-gerwig") || v8.customElements.define("media-theme-gerwig", bB);
  var bH = { SRC: "src", POSTER: "poster" }, bW = { STYLE: "style", DEFAULT_HIDDEN_CAPTIONS: "default-hidden-captions", PRIMARY_COLOR: "primary-color", SECONDARY_COLOR: "secondary-color", ACCENT_COLOR: "accent-color", FORWARD_SEEK_OFFSET: "forward-seek-offset", BACKWARD_SEEK_OFFSET: "backward-seek-offset", PLAYBACK_TOKEN: "playback-token", THUMBNAIL_TOKEN: "thumbnail-token", STORYBOARD_TOKEN: "storyboard-token", FULLSCREEN_ELEMENT: "fullscreen-element", DRM_TOKEN: "drm-token", STORYBOARD_SRC: "storyboard-src", THUMBNAIL_TIME: "thumbnail-time", AUDIO: "audio", NOHOTKEYS: "nohotkeys", HOTKEYS: "hotkeys", PLAYBACK_RATES: "playbackrates", DEFAULT_SHOW_REMAINING_TIME: "default-show-remaining-time", DEFAULT_DURATION: "default-duration", TITLE: "title", VIDEO_TITLE: "video-title", PLACEHOLDER: "placeholder", THEME: "theme", DEFAULT_STREAM_TYPE: "default-stream-type", TARGET_LIVE_WINDOW: "target-live-window", EXTRA_SOURCE_PARAMS: "extra-source-params", NO_VOLUME_PREF: "no-volume-pref", NO_MUTED_PREF: "no-muted-pref", CAST_RECEIVER: "cast-receiver", NO_TOOLTIPS: "no-tooltips", PROUDLY_DISPLAY_MUX_BADGE: "proudly-display-mux-badge", DISABLE_PSEUDO_ENDED: "disable-pseudo-ended" }, b$ = ["audio", "backwardseekoffset", "defaultduration", "defaultshowremainingtime", "defaultsubtitles", "noautoseektolive", "disabled", "exportparts", "forwardseekoffset", "hideduration", "hotkeys", "nohotkeys", "playbackrates", "defaultstreamtype", "streamtype", "style", "targetlivewindow", "template", "title", "videotitle", "novolumepref", "nomutedpref", "proudlydisplaymuxbadge"], bq = o6.formatErrorMessage;
  function bV(e10) {
    let t10 = e10.videoTitle ? { video_title: e10.videoTitle } : {};
    return e10.getAttributeNames().filter((e11) => e11.startsWith("metadata-")).reduce((t11, a10) => {
      let i10 = e10.getAttribute(a10);
      return null !== i10 && (t11[a10.replace(/^metadata-/, "").replace(/-/g, "_")] = i10), t11;
    }, t10);
  }
  o6.formatErrorMessage = (e10) => {
    var t10, a10;
    if (e10 instanceof tV) {
      let i10 = ((e11, t11 = false) => ({ title: ((e12, t12 = false) => {
        var a11, i11;
        if (e12.muxCode) {
          let r10 = bD(null != (a11 = e12.errorCategory) ? a11 : "video"), n10 = tq(null != (i11 = e12.errorCategory) ? i11 : t$);
          if (2000002 === e12.muxCode) return aa("Your device appears to be offline", t12);
          if (2403210 === e12.muxCode) return aa("{category} URL has expired", t12).format({ category: r10 });
          if ([2403232, 2403222, 2403221, 2412202].includes(e12.muxCode)) return aa("{category} URL is formatted incorrectly", t12).format({ category: r10 });
          if (2403201 === e12.muxCode) return aa("Invalid {categoryName} URL", t12).format({ categoryName: n10 });
          if (2404e3 === e12.muxCode) return aa("{category} does not exist", t12).format({ category: r10 });
          if (2412e3 === e12.muxCode) {
            let a12 = "live" === e12.streamType ? "Live stream" : "Video";
            return aa("{mediaType} is not currently available", t12).format({ mediaType: a12 });
          }
        }
        if (e12.code) {
          if (e12.code === tV.MEDIA_ERR_NETWORK) return aa("Network Error", t12);
          if (e12.code === tV.MEDIA_ERR_DECODE) return aa("Media Error", t12);
          if (e12.code === tV.MEDIA_ERR_SRC_NOT_SUPPORTED) return aa("Source Not Supported", t12);
        }
        return aa("Error", t12);
      })(e11, t11).toString(), message: ((e12, t12 = false) => {
        var a11, i11;
        if (e12.muxCode) {
          let r10 = bD(null != (a11 = e12.errorCategory) ? a11 : "video"), n10 = tq(null != (i11 = e12.errorCategory) ? i11 : t$);
          return 2000002 === e12.muxCode ? aa("Check your internet connection and try reloading this video.", t12) : 2403210 === e12.muxCode ? aa("The video\u2019s secured {tokenNamePrefix}-token has expired.", t12).format({ tokenNamePrefix: n10 }) : 2403232 === e12.muxCode ? aa("The video\u2019s playback ID does not match the one encoded in the {tokenNamePrefix}-token.", t12).format({ tokenNamePrefix: n10 }) : 2412202 === e12.muxCode ? aa("{category} URL is formatted incorrectly", t12).format({ category: r10 }) : [2403222, 2403221].includes(e12.muxCode) ? aa("The {tokenNamePrefix}-token is formatted with incorrect information.", t12).format({ tokenNamePrefix: n10 }) : [2403201, 24e5].includes(e12.muxCode) ? aa("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.", t12).format({ tokenNamePrefix: n10 }) : 2404e3 === e12.muxCode ? "" : e12.message;
        }
        return e12.code && (e12.code === tV.MEDIA_ERR_NETWORK || e12.code === tV.MEDIA_ERR_DECODE || e12.code === tV.MEDIA_ERR_SRC_NOT_SUPPORTED), e12.message;
      })(e11, t11).toString() }))(e10, false);
      return `
      ${null != i10 && i10.title ? `<h3>${i10.title}</h3>` : ""}
      ${null != i10 && i10.message || null != i10 && i10.linkUrl ? `<p>
        ${null == i10 ? void 0 : i10.message}
        ${null != i10 && i10.linkUrl ? `<a
              href="${i10.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null != (t10 = i10.linkText) ? t10 : ""} ${aa("(opens in a new window)")}"
              >${null != (a10 = i10.linkText) ? a10 : i10.linkUrl}</a
            >` : ""}
      </p>` : ""}
    `;
    }
    return bq(e10);
  };
  var bK, bF, bj, bG, bY, bQ, bz, bZ, bX, bJ, b0, b1, b2, b3, b4, b5, b9, b8, b6, b7, ge, gt = Object.values(iB), ga = Object.values(bH), gi = Object.values(bW), gr = "mux-player", gn = { isDialogOpen: false }, gs = { redundant_streams: true }, go = class extends b_ {
    constructor() {
      super(), c$(this, b2), c$(this, bK), c$(this, bF, false), c$(this, bj, {}), c$(this, bG, true), c$(this, bY, new bc(this, "hotkeys")), c$(this, bQ), c$(this, bz, () => cV(this, b2, b9).call(this)), c$(this, bZ, () => cV(this, b2, b9).call(this)), c$(this, bX, () => cV(this, b2, b9).call(this)), c$(this, bJ), c$(this, b0, { ...gn, onCloseErrorDialog: (e10) => {
        var t10;
        (null == (t10 = e10.composedPath()[0]) ? void 0 : t10.localName) === "media-error-dialog" && cV(this, b2, b5).call(this, { isDialogOpen: false });
      }, onFocusInErrorDialog: (e10) => {
        var t10;
        (null == (t10 = e10.composedPath()[0]) ? void 0 : t10.localName) === "media-error-dialog" && (bs(this, v6.activeElement) || e10.preventDefault());
      } }), c$(this, b1, (e10) => {
        var t10;
        let a10 = null == (t10 = this.media) ? void 0 : t10.error;
        if (!(a10 instanceof tV)) {
          let { message: e11, code: t11 } = null != a10 ? a10 : {};
          a10 = new tV(e11, t11);
        }
        if (!(null != a10 && a10.fatal)) {
          bm(a10), a10.data && bm(`${a10.name} data:`, a10.data);
          return;
        }
        let i10 = bx(a10, false);
        i10.message && bv(i10), bp(a10), a10.data && bp(`${a10.name} data:`, a10.data), cV(this, b2, b5).call(this, { isDialogOpen: true });
      }), cq(this, bK, aF()), this.attachShadow({ mode: "open" }), cV(this, b2, b4).call(this), this.isConnected && cV(this, b2, b3).call(this);
    }
    static get NAME() {
      return gr;
    }
    static get VERSION() {
      return bl;
    }
    static get observedAttributes() {
      var e10;
      return [...null != (e10 = b_.observedAttributes) ? e10 : [], ...ga, ...gt, ...gi];
    }
    get mediaTheme() {
      var e10;
      return null == (e10 = this.shadowRoot) ? void 0 : e10.querySelector("media-theme");
    }
    get mediaController() {
      var e10, t10;
      return null == (t10 = null == (e10 = this.mediaTheme) ? void 0 : e10.shadowRoot) ? void 0 : t10.querySelector("media-controller");
    }
    connectedCallback() {
      cV(this, b2, b3).call(this);
      let e10 = this.media;
      e10 && (e10.metadata = bV(this));
    }
    disconnectedCallback() {
      var e10, t10, a10, i10, r10, n10, s10, o10;
      null == (e10 = cW(this, bQ)) || e10.disconnect(), null == (t10 = this.media) || t10.removeEventListener("streamtypechange", cW(this, bz)), null == (a10 = this.media) || a10.removeEventListener("loadstart", cW(this, bZ)), this.removeEventListener("error", cW(this, b1)), this.media && (this.media.errorTranslator = void 0), null == (r10 = null == (i10 = this.media) ? void 0 : i10.textTracks) || r10.removeEventListener("addtrack", cW(this, bX)), null == (s10 = null == (n10 = this.media) ? void 0 : n10.textTracks) || s10.removeEventListener("removetrack", cW(this, bX)), null == (o10 = cW(this, bJ)) || o10.call(this), cq(this, bJ, void 0), cq(this, bF, false);
    }
    attributeChangedCallback(e10, t10, a10) {
      var i10;
      switch (cV(this, b2, b3).call(this), super.attributeChangedCallback(e10, t10, a10), e10) {
        case bW.HOTKEYS:
          cW(this, bY).value = a10;
          break;
        case bW.THUMBNAIL_TIME:
          null != a10 && this.tokens.thumbnail && bm(aa("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());
          break;
        case bW.THUMBNAIL_TOKEN:
          if (a10) {
            let e11 = at(a10);
            if (e11) {
              let { aud: t11 } = e11;
              "t" !== t11 && bm(aa("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({ aud: t11, expectedAud: "t", tokenNamePrefix: "thumbnail" }));
            }
          }
          break;
        case bW.STORYBOARD_TOKEN:
          if (a10) {
            let e11 = at(a10);
            if (e11) {
              let { aud: t11 } = e11;
              "s" !== t11 && bm(aa("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({ aud: t11, expectedAud: "s", tokenNamePrefix: "storyboard" }));
            }
          }
          break;
        case bW.DRM_TOKEN:
          if (a10) {
            let e11 = at(a10);
            if (e11) {
              let { aud: t11 } = e11;
              "d" !== t11 && bm(aa("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({ aud: t11, expectedAud: "d", tokenNamePrefix: "drm" }));
            }
          }
          break;
        case iB.PLAYBACK_ID:
          null != a10 && a10.includes("?token") && bp(aa("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({ playbackId: a10 }));
          break;
        case iB.STREAM_TYPE:
          a10 && ![tG, tj, tY].includes(a10) ? ["ll-live", "live:dvr", "ll-live:dvr"].includes(this.streamType) ? this.targetLiveWindow = a10.includes("dvr") ? 1 / 0 : 0 : bv({ file: "invalid-stream-type.md", message: aa("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({ streamType: this.streamType }) }) : a10 === tG ? null == this.getAttribute(bW.TARGET_LIVE_WINDOW) && (this.targetLiveWindow = 0) : this.targetLiveWindow = NaN;
          break;
        case bW.FULLSCREEN_ELEMENT:
          if (null != a10 || a10 !== t10) {
            let e11 = v6.getElementById(a10), t11 = null == e11 ? void 0 : e11.querySelector("mux-player");
            this.mediaController && e11 && t11 && (this.mediaController.fullscreenElement = e11);
          }
          break;
        case iB.CAP_RENDITION_TO_PLAYER_SIZE:
          (null == a10 || a10 !== t10) && (this.capRenditionToPlayerSize = null != a10 || void 0);
      }
      [iB.PLAYBACK_ID, bH.SRC, bW.PLAYBACK_TOKEN].includes(e10) && t10 !== a10 && cq(this, b0, { ...cW(this, b0), ...gn }), cV(this, b2, b9).call(this, { [null != (i10 = bu[e10]) ? i10 : be(e10)]: a10 });
    }
    async requestFullscreen(e10) {
      var t10;
      if (!(!this.mediaController || this.mediaController.hasAttribute(rE.MEDIA_IS_FULLSCREEN))) return null == (t10 = this.mediaController) || t10.dispatchEvent(new v8.CustomEvent(rb.MEDIA_ENTER_FULLSCREEN_REQUEST, { composed: true, bubbles: true })), new Promise((e11, t11) => {
        var a10;
        null == (a10 = this.mediaController) || a10.addEventListener(r_.MEDIA_IS_FULLSCREEN, () => e11(), { once: true });
      });
    }
    async exitFullscreen() {
      var e10;
      if (!(!this.mediaController || !this.mediaController.hasAttribute(rE.MEDIA_IS_FULLSCREEN))) return null == (e10 = this.mediaController) || e10.dispatchEvent(new v8.CustomEvent(rb.MEDIA_EXIT_FULLSCREEN_REQUEST, { composed: true, bubbles: true })), new Promise((e11, t10) => {
        var a10;
        null == (a10 = this.mediaController) || a10.addEventListener(r_.MEDIA_IS_FULLSCREEN, () => e11(), { once: true });
      });
    }
    get preferCmcd() {
      var e10;
      return null != (e10 = this.getAttribute(iB.PREFER_CMCD)) ? e10 : void 0;
    }
    set preferCmcd(e10) {
      e10 !== this.preferCmcd && (e10 ? tZ.includes(e10) ? this.setAttribute(iB.PREFER_CMCD, e10) : bm(`Invalid value for preferCmcd. Must be one of ${tZ.join()}`) : this.removeAttribute(iB.PREFER_CMCD));
    }
    get hasPlayed() {
      var e10, t10;
      return null != (t10 = null == (e10 = this.mediaController) ? void 0 : e10.hasAttribute(rE.MEDIA_HAS_PLAYED)) && t10;
    }
    get inLiveWindow() {
      var e10;
      return null == (e10 = this.mediaController) ? void 0 : e10.hasAttribute(rE.MEDIA_TIME_IS_LIVE);
    }
    get _hls() {
      var e10;
      return null == (e10 = this.media) ? void 0 : e10._hls;
    }
    get mux() {
      var e10;
      return null == (e10 = this.media) ? void 0 : e10.mux;
    }
    get theme() {
      var e10;
      return null != (e10 = this.getAttribute(bW.THEME)) ? e10 : "gerwig";
    }
    set theme(e10) {
      this.setAttribute(bW.THEME, `${e10}`);
    }
    get themeProps() {
      let e10 = this.mediaTheme;
      if (!e10) return;
      let t10 = {};
      for (let a10 of e10.getAttributeNames()) {
        if (b$.includes(a10)) continue;
        let i10 = e10.getAttribute(a10);
        t10[be(a10)] = "" === i10 || i10;
      }
      return t10;
    }
    set themeProps(e10) {
      var t10, a10;
      cV(this, b2, b3).call(this);
      let i10 = { ...this.themeProps, ...e10 };
      for (let r10 in i10) {
        if (b$.includes(r10)) continue;
        let i11 = null == e10 ? void 0 : e10[r10];
        "boolean" == typeof i11 || null == i11 ? null == (t10 = this.mediaTheme) || t10.toggleAttribute(v7(r10), !!i11) : null == (a10 = this.mediaTheme) || a10.setAttribute(v7(r10), i11);
      }
    }
    get playbackId() {
      var e10;
      return null != (e10 = this.getAttribute(iB.PLAYBACK_ID)) ? e10 : void 0;
    }
    set playbackId(e10) {
      e10 ? this.setAttribute(iB.PLAYBACK_ID, e10) : this.removeAttribute(iB.PLAYBACK_ID);
    }
    get src() {
      var e10, t10;
      return this.playbackId ? null != (e10 = gl(this, bH.SRC)) ? e10 : void 0 : null != (t10 = this.getAttribute(bH.SRC)) ? t10 : void 0;
    }
    set src(e10) {
      e10 ? this.setAttribute(bH.SRC, e10) : this.removeAttribute(bH.SRC);
    }
    get poster() {
      var e10;
      let t10 = this.getAttribute(bH.POSTER);
      if (null != t10) return t10;
      let { tokens: a10 } = this;
      return a10.playback && !a10.thumbnail ? void bm("Missing expected thumbnail token. No poster image will be shown") : this.playbackId && !this.audio ? ((e11, { token: t11, customDomain: a11 = bo, thumbnailTime: i10, programTime: r10 } = {}) => {
        var n10;
        let s10 = null == t11 ? i10 : void 0, { aud: o10 } = null != (n10 = at(t11)) ? n10 : {};
        if (!(t11 && "t" !== o10)) return `https://image.${a11}/${e11}/thumbnail.webp${ba({ token: t11, time: s10, program_time: r10 })}`;
      })(this.playbackId, { customDomain: this.customDomain, thumbnailTime: null != (e10 = this.thumbnailTime) ? e10 : this.startTime, programTime: this.programStartTime, token: a10.thumbnail }) : void 0;
    }
    set poster(e10) {
      e10 || "" === e10 ? this.setAttribute(bH.POSTER, e10) : this.removeAttribute(bH.POSTER);
    }
    get storyboardSrc() {
      var e10;
      return null != (e10 = this.getAttribute(bW.STORYBOARD_SRC)) ? e10 : void 0;
    }
    set storyboardSrc(e10) {
      e10 ? this.setAttribute(bW.STORYBOARD_SRC, e10) : this.removeAttribute(bW.STORYBOARD_SRC);
    }
    get storyboard() {
      let { tokens: e10 } = this;
      return this.storyboardSrc && !e10.storyboard ? this.storyboardSrc : this.audio || !this.playbackId || !this.streamType || [tG, tY].includes(this.streamType) || e10.playback && !e10.storyboard ? void 0 : ((e11, { token: t10, customDomain: a10 = bo, programStartTime: i10, programEndTime: r10 } = {}) => {
        var n10;
        let { aud: s10 } = null != (n10 = at(t10)) ? n10 : {};
        if (!(t10 && "s" !== s10)) return `https://image.${a10}/${e11}/storyboard.vtt${ba({ token: t10, format: "webp", program_start_time: i10, program_end_time: r10 })}`;
      })(this.playbackId, { customDomain: this.customDomain, token: e10.storyboard, programStartTime: this.programStartTime, programEndTime: this.programEndTime });
    }
    get audio() {
      return this.hasAttribute(bW.AUDIO);
    }
    set audio(e10) {
      e10 ? this.setAttribute(bW.AUDIO, "") : this.removeAttribute(bW.AUDIO);
    }
    get hotkeys() {
      return cW(this, bY);
    }
    get nohotkeys() {
      return this.hasAttribute(bW.NOHOTKEYS);
    }
    set nohotkeys(e10) {
      e10 ? this.setAttribute(bW.NOHOTKEYS, "") : this.removeAttribute(bW.NOHOTKEYS);
    }
    get thumbnailTime() {
      return bt(this.getAttribute(bW.THUMBNAIL_TIME));
    }
    set thumbnailTime(e10) {
      this.setAttribute(bW.THUMBNAIL_TIME, `${e10}`);
    }
    get videoTitle() {
      var e10, t10;
      return null != (t10 = null != (e10 = this.getAttribute(bW.VIDEO_TITLE)) ? e10 : this.getAttribute(bW.TITLE)) ? t10 : "";
    }
    set videoTitle(e10) {
      e10 !== this.videoTitle && (e10 ? this.setAttribute(bW.VIDEO_TITLE, e10) : this.removeAttribute(bW.VIDEO_TITLE));
    }
    get placeholder() {
      var e10;
      return null != (e10 = gl(this, bW.PLACEHOLDER)) ? e10 : "";
    }
    set placeholder(e10) {
      this.setAttribute(bW.PLACEHOLDER, `${e10}`);
    }
    get primaryColor() {
      var e10, t10;
      let a10 = this.getAttribute(bW.PRIMARY_COLOR);
      if (null != a10 || this.mediaTheme && (a10 = null == (t10 = null == (e10 = v8.getComputedStyle(this.mediaTheme)) ? void 0 : e10.getPropertyValue("--_primary-color")) ? void 0 : t10.trim())) return a10;
    }
    set primaryColor(e10) {
      this.setAttribute(bW.PRIMARY_COLOR, `${e10}`);
    }
    get secondaryColor() {
      var e10, t10;
      let a10 = this.getAttribute(bW.SECONDARY_COLOR);
      if (null != a10 || this.mediaTheme && (a10 = null == (t10 = null == (e10 = v8.getComputedStyle(this.mediaTheme)) ? void 0 : e10.getPropertyValue("--_secondary-color")) ? void 0 : t10.trim())) return a10;
    }
    set secondaryColor(e10) {
      this.setAttribute(bW.SECONDARY_COLOR, `${e10}`);
    }
    get accentColor() {
      var e10, t10;
      let a10 = this.getAttribute(bW.ACCENT_COLOR);
      if (null != a10 || this.mediaTheme && (a10 = null == (t10 = null == (e10 = v8.getComputedStyle(this.mediaTheme)) ? void 0 : e10.getPropertyValue("--_accent-color")) ? void 0 : t10.trim())) return a10;
    }
    set accentColor(e10) {
      this.setAttribute(bW.ACCENT_COLOR, `${e10}`);
    }
    get defaultShowRemainingTime() {
      return this.hasAttribute(bW.DEFAULT_SHOW_REMAINING_TIME);
    }
    set defaultShowRemainingTime(e10) {
      e10 ? this.setAttribute(bW.DEFAULT_SHOW_REMAINING_TIME, "") : this.removeAttribute(bW.DEFAULT_SHOW_REMAINING_TIME);
    }
    get playbackRates() {
      if (this.hasAttribute(bW.PLAYBACK_RATES)) return this.getAttribute(bW.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map((e10) => Number(e10)).filter((e10) => !Number.isNaN(e10)).sort((e10, t10) => e10 - t10);
    }
    set playbackRates(e10) {
      e10 ? this.setAttribute(bW.PLAYBACK_RATES, e10.join(" ")) : this.removeAttribute(bW.PLAYBACK_RATES);
    }
    get forwardSeekOffset() {
      var e10;
      return null != (e10 = bt(this.getAttribute(bW.FORWARD_SEEK_OFFSET))) ? e10 : 10;
    }
    set forwardSeekOffset(e10) {
      this.setAttribute(bW.FORWARD_SEEK_OFFSET, `${e10}`);
    }
    get backwardSeekOffset() {
      var e10;
      return null != (e10 = bt(this.getAttribute(bW.BACKWARD_SEEK_OFFSET))) ? e10 : 10;
    }
    set backwardSeekOffset(e10) {
      this.setAttribute(bW.BACKWARD_SEEK_OFFSET, `${e10}`);
    }
    get defaultHiddenCaptions() {
      return this.hasAttribute(bW.DEFAULT_HIDDEN_CAPTIONS);
    }
    set defaultHiddenCaptions(e10) {
      e10 ? this.setAttribute(bW.DEFAULT_HIDDEN_CAPTIONS, "") : this.removeAttribute(bW.DEFAULT_HIDDEN_CAPTIONS);
    }
    get defaultDuration() {
      return bt(this.getAttribute(bW.DEFAULT_DURATION));
    }
    set defaultDuration(e10) {
      null == e10 ? this.removeAttribute(bW.DEFAULT_DURATION) : this.setAttribute(bW.DEFAULT_DURATION, `${e10}`);
    }
    get playerInitTime() {
      return this.hasAttribute(iB.PLAYER_INIT_TIME) ? bt(this.getAttribute(iB.PLAYER_INIT_TIME)) : cW(this, bK);
    }
    set playerInitTime(e10) {
      e10 != this.playerInitTime && (null == e10 ? this.removeAttribute(iB.PLAYER_INIT_TIME) : this.setAttribute(iB.PLAYER_INIT_TIME, `${+e10}`));
    }
    get playerSoftwareName() {
      var e10;
      return null != (e10 = this.getAttribute(iB.PLAYER_SOFTWARE_NAME)) ? e10 : gr;
    }
    get playerSoftwareVersion() {
      var e10;
      return null != (e10 = this.getAttribute(iB.PLAYER_SOFTWARE_VERSION)) ? e10 : bl;
    }
    get beaconCollectionDomain() {
      var e10;
      return null != (e10 = this.getAttribute(iB.BEACON_COLLECTION_DOMAIN)) ? e10 : void 0;
    }
    set beaconCollectionDomain(e10) {
      e10 !== this.beaconCollectionDomain && (e10 ? this.setAttribute(iB.BEACON_COLLECTION_DOMAIN, e10) : this.removeAttribute(iB.BEACON_COLLECTION_DOMAIN));
    }
    get maxResolution() {
      var e10;
      return null != (e10 = this.getAttribute(iB.MAX_RESOLUTION)) ? e10 : void 0;
    }
    set maxResolution(e10) {
      e10 !== this.maxResolution && (e10 ? this.setAttribute(iB.MAX_RESOLUTION, e10) : this.removeAttribute(iB.MAX_RESOLUTION));
    }
    get minResolution() {
      var e10;
      return null != (e10 = this.getAttribute(iB.MIN_RESOLUTION)) ? e10 : void 0;
    }
    set minResolution(e10) {
      e10 !== this.minResolution && (e10 ? this.setAttribute(iB.MIN_RESOLUTION, e10) : this.removeAttribute(iB.MIN_RESOLUTION));
    }
    get maxAutoResolution() {
      var e10;
      return null != (e10 = this.getAttribute(iB.MAX_AUTO_RESOLUTION)) ? e10 : void 0;
    }
    set maxAutoResolution(e10) {
      null == e10 ? this.removeAttribute(iB.MAX_AUTO_RESOLUTION) : this.setAttribute(iB.MAX_AUTO_RESOLUTION, e10);
    }
    get renditionOrder() {
      var e10;
      return null != (e10 = this.getAttribute(iB.RENDITION_ORDER)) ? e10 : void 0;
    }
    set renditionOrder(e10) {
      e10 !== this.renditionOrder && (e10 ? this.setAttribute(iB.RENDITION_ORDER, e10) : this.removeAttribute(iB.RENDITION_ORDER));
    }
    get programStartTime() {
      return bt(this.getAttribute(iB.PROGRAM_START_TIME));
    }
    set programStartTime(e10) {
      null == e10 ? this.removeAttribute(iB.PROGRAM_START_TIME) : this.setAttribute(iB.PROGRAM_START_TIME, `${e10}`);
    }
    get programEndTime() {
      return bt(this.getAttribute(iB.PROGRAM_END_TIME));
    }
    set programEndTime(e10) {
      null == e10 ? this.removeAttribute(iB.PROGRAM_END_TIME) : this.setAttribute(iB.PROGRAM_END_TIME, `${e10}`);
    }
    get assetStartTime() {
      return bt(this.getAttribute(iB.ASSET_START_TIME));
    }
    set assetStartTime(e10) {
      null == e10 ? this.removeAttribute(iB.ASSET_START_TIME) : this.setAttribute(iB.ASSET_START_TIME, `${e10}`);
    }
    get assetEndTime() {
      return bt(this.getAttribute(iB.ASSET_END_TIME));
    }
    set assetEndTime(e10) {
      null == e10 ? this.removeAttribute(iB.ASSET_END_TIME) : this.setAttribute(iB.ASSET_END_TIME, `${e10}`);
    }
    get extraSourceParams() {
      return this.hasAttribute(bW.EXTRA_SOURCE_PARAMS) ? [...new URLSearchParams(this.getAttribute(bW.EXTRA_SOURCE_PARAMS)).entries()].reduce((e10, [t10, a10]) => (e10[t10] = a10, e10), {}) : gs;
    }
    set extraSourceParams(e10) {
      null == e10 ? this.removeAttribute(bW.EXTRA_SOURCE_PARAMS) : this.setAttribute(bW.EXTRA_SOURCE_PARAMS, new URLSearchParams(e10).toString());
    }
    get customDomain() {
      var e10;
      return null != (e10 = this.getAttribute(iB.CUSTOM_DOMAIN)) ? e10 : void 0;
    }
    set customDomain(e10) {
      e10 !== this.customDomain && (e10 ? this.setAttribute(iB.CUSTOM_DOMAIN, e10) : this.removeAttribute(iB.CUSTOM_DOMAIN));
    }
    get envKey() {
      var e10;
      return null != (e10 = gl(this, iB.ENV_KEY)) ? e10 : void 0;
    }
    set envKey(e10) {
      this.setAttribute(iB.ENV_KEY, `${e10}`);
    }
    get noVolumePref() {
      return this.hasAttribute(bW.NO_VOLUME_PREF);
    }
    set noVolumePref(e10) {
      e10 ? this.setAttribute(bW.NO_VOLUME_PREF, "") : this.removeAttribute(bW.NO_VOLUME_PREF);
    }
    get noMutedPref() {
      return this.hasAttribute(bW.NO_MUTED_PREF);
    }
    set noMutedPref(e10) {
      e10 ? this.setAttribute(bW.NO_MUTED_PREF, "") : this.removeAttribute(bW.NO_MUTED_PREF);
    }
    get debug() {
      return null != gl(this, iB.DEBUG);
    }
    set debug(e10) {
      e10 ? this.setAttribute(iB.DEBUG, "") : this.removeAttribute(iB.DEBUG);
    }
    get disableTracking() {
      return null != gl(this, iB.DISABLE_TRACKING);
    }
    set disableTracking(e10) {
      this.toggleAttribute(iB.DISABLE_TRACKING, !!e10);
    }
    get disableCookies() {
      return null != gl(this, iB.DISABLE_COOKIES);
    }
    set disableCookies(e10) {
      e10 ? this.setAttribute(iB.DISABLE_COOKIES, "") : this.removeAttribute(iB.DISABLE_COOKIES);
    }
    get streamType() {
      var e10, t10, a10;
      return null != (a10 = null != (t10 = this.getAttribute(iB.STREAM_TYPE)) ? t10 : null == (e10 = this.media) ? void 0 : e10.streamType) ? a10 : tY;
    }
    set streamType(e10) {
      this.setAttribute(iB.STREAM_TYPE, `${e10}`);
    }
    get defaultStreamType() {
      var e10, t10, a10;
      return null != (a10 = null != (t10 = this.getAttribute(bW.DEFAULT_STREAM_TYPE)) ? t10 : null == (e10 = this.mediaController) ? void 0 : e10.getAttribute(bW.DEFAULT_STREAM_TYPE)) ? a10 : tj;
    }
    set defaultStreamType(e10) {
      e10 ? this.setAttribute(bW.DEFAULT_STREAM_TYPE, e10) : this.removeAttribute(bW.DEFAULT_STREAM_TYPE);
    }
    get targetLiveWindow() {
      var e10, t10;
      return this.hasAttribute(bW.TARGET_LIVE_WINDOW) ? +this.getAttribute(bW.TARGET_LIVE_WINDOW) : null != (t10 = null == (e10 = this.media) ? void 0 : e10.targetLiveWindow) ? t10 : NaN;
    }
    set targetLiveWindow(e10) {
      e10 == this.targetLiveWindow || Number.isNaN(e10) && Number.isNaN(this.targetLiveWindow) || (null == e10 ? this.removeAttribute(bW.TARGET_LIVE_WINDOW) : this.setAttribute(bW.TARGET_LIVE_WINDOW, `${+e10}`));
    }
    get liveEdgeStart() {
      var e10;
      return null == (e10 = this.media) ? void 0 : e10.liveEdgeStart;
    }
    get startTime() {
      return bt(gl(this, iB.START_TIME));
    }
    set startTime(e10) {
      this.setAttribute(iB.START_TIME, `${e10}`);
    }
    get initialBandwidthEstimateKbps() {
      return bt(gl(this, iB.INITIAL_BANDWIDTH_ESTIMATE_KBPS));
    }
    set initialBandwidthEstimateKbps(e10) {
      null == e10 ? this.removeAttribute(iB.INITIAL_BANDWIDTH_ESTIMATE_KBPS) : this.setAttribute(iB.INITIAL_BANDWIDTH_ESTIMATE_KBPS, `${e10}`);
    }
    get initialEstimateSegments() {
      return bt(gl(this, iB.INITIAL_ESTIMATE_SEGMENTS));
    }
    set initialEstimateSegments(e10) {
      null == e10 ? this.removeAttribute(iB.INITIAL_ESTIMATE_SEGMENTS) : this.setAttribute(iB.INITIAL_ESTIMATE_SEGMENTS, `${e10}`);
    }
    get minPreloadSegments() {
      return bt(gl(this, iB.MIN_PRELOAD_SEGMENTS));
    }
    set minPreloadSegments(e10) {
      null == e10 ? this.removeAttribute(iB.MIN_PRELOAD_SEGMENTS) : this.setAttribute(iB.MIN_PRELOAD_SEGMENTS, `${e10}`);
    }
    get preferPlayback() {
      let e10 = this.getAttribute(iB.PREFER_PLAYBACK);
      if ("mse" === e10 || e10 === tQ) return e10;
    }
    set preferPlayback(e10) {
      e10 !== this.preferPlayback && ("mse" === e10 || e10 === tQ ? this.setAttribute(iB.PREFER_PLAYBACK, e10) : this.removeAttribute(iB.PREFER_PLAYBACK));
    }
    get metadata() {
      var e10;
      return null == (e10 = this.media) ? void 0 : e10.metadata;
    }
    set metadata(e10) {
      (cV(this, b2, b3).call(this), this.media) ? this.media.metadata = { ...bV(this), ...e10 } : bp("underlying media element missing when trying to set metadata. metadata will not be set.");
    }
    get _hlsConfig() {
      var e10;
      return null == (e10 = this.media) ? void 0 : e10._hlsConfig;
    }
    set _hlsConfig(e10) {
      (cV(this, b2, b3).call(this), this.media) ? this.media._hlsConfig = e10 : bp("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");
    }
    async addCuePoints(e10) {
      var t10;
      return (cV(this, b2, b3).call(this), this.media) ? null == (t10 = this.media) ? void 0 : t10.addCuePoints(e10) : void bp("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");
    }
    get activeCuePoint() {
      var e10;
      return null == (e10 = this.media) ? void 0 : e10.activeCuePoint;
    }
    get cuePoints() {
      var e10, t10;
      return null != (t10 = null == (e10 = this.media) ? void 0 : e10.cuePoints) ? t10 : [];
    }
    addChapters(e10) {
      var t10;
      return (cV(this, b2, b3).call(this), this.media) ? null == (t10 = this.media) ? void 0 : t10.addChapters(e10) : void bp("underlying media element missing when trying to addChapters. chapters will not be added.");
    }
    get activeChapter() {
      var e10;
      return null == (e10 = this.media) ? void 0 : e10.activeChapter;
    }
    get chapters() {
      var e10, t10;
      return null != (t10 = null == (e10 = this.media) ? void 0 : e10.chapters) ? t10 : [];
    }
    getStartDate() {
      var e10;
      return null == (e10 = this.media) ? void 0 : e10.getStartDate();
    }
    get currentPdt() {
      var e10;
      return null == (e10 = this.media) ? void 0 : e10.currentPdt;
    }
    get tokens() {
      let e10 = this.getAttribute(bW.PLAYBACK_TOKEN), t10 = this.getAttribute(bW.DRM_TOKEN), a10 = this.getAttribute(bW.THUMBNAIL_TOKEN), i10 = this.getAttribute(bW.STORYBOARD_TOKEN);
      return { ...cW(this, bj), ...null != e10 ? { playback: e10 } : {}, ...null != t10 ? { drm: t10 } : {}, ...null != a10 ? { thumbnail: a10 } : {}, ...null != i10 ? { storyboard: i10 } : {} };
    }
    set tokens(e10) {
      cq(this, bj, null != e10 ? e10 : {});
    }
    get playbackToken() {
      var e10;
      return null != (e10 = this.getAttribute(bW.PLAYBACK_TOKEN)) ? e10 : void 0;
    }
    set playbackToken(e10) {
      this.setAttribute(bW.PLAYBACK_TOKEN, `${e10}`);
    }
    get drmToken() {
      var e10;
      return null != (e10 = this.getAttribute(bW.DRM_TOKEN)) ? e10 : void 0;
    }
    set drmToken(e10) {
      this.setAttribute(bW.DRM_TOKEN, `${e10}`);
    }
    get thumbnailToken() {
      var e10;
      return null != (e10 = this.getAttribute(bW.THUMBNAIL_TOKEN)) ? e10 : void 0;
    }
    set thumbnailToken(e10) {
      this.setAttribute(bW.THUMBNAIL_TOKEN, `${e10}`);
    }
    get storyboardToken() {
      var e10;
      return null != (e10 = this.getAttribute(bW.STORYBOARD_TOKEN)) ? e10 : void 0;
    }
    set storyboardToken(e10) {
      this.setAttribute(bW.STORYBOARD_TOKEN, `${e10}`);
    }
    addTextTrack(e10, t10, a10, i10) {
      var r10;
      let n10 = null == (r10 = this.media) ? void 0 : r10.nativeEl;
      if (n10) return al(n10, e10, t10, a10, i10);
    }
    removeTextTrack(e10) {
      var t10;
      let a10 = null == (t10 = this.media) ? void 0 : t10.nativeEl;
      if (a10) {
        let t11;
        return void (null == (t11 = Array.prototype.find.call(a10.querySelectorAll("track"), (t12) => t12.track === e10)) || t11.remove());
      }
    }
    get textTracks() {
      var e10;
      return null == (e10 = this.media) ? void 0 : e10.textTracks;
    }
    get castReceiver() {
      var e10;
      return null != (e10 = this.getAttribute(bW.CAST_RECEIVER)) ? e10 : void 0;
    }
    set castReceiver(e10) {
      e10 !== this.castReceiver && (e10 ? this.setAttribute(bW.CAST_RECEIVER, e10) : this.removeAttribute(bW.CAST_RECEIVER));
    }
    get castCustomData() {
      var e10;
      return null == (e10 = this.media) ? void 0 : e10.castCustomData;
    }
    set castCustomData(e10) {
      this.media ? this.media.castCustomData = e10 : bp("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");
    }
    get noTooltips() {
      return this.hasAttribute(bW.NO_TOOLTIPS);
    }
    set noTooltips(e10) {
      e10 ? this.setAttribute(bW.NO_TOOLTIPS, "") : this.removeAttribute(bW.NO_TOOLTIPS);
    }
    get proudlyDisplayMuxBadge() {
      return this.hasAttribute(bW.PROUDLY_DISPLAY_MUX_BADGE);
    }
    set proudlyDisplayMuxBadge(e10) {
      e10 ? this.setAttribute(bW.PROUDLY_DISPLAY_MUX_BADGE, "") : this.removeAttribute(bW.PROUDLY_DISPLAY_MUX_BADGE);
    }
    get capRenditionToPlayerSize() {
      var e10;
      return null == (e10 = this.media) ? void 0 : e10.capRenditionToPlayerSize;
    }
    set capRenditionToPlayerSize(e10) {
      this.media ? this.media.capRenditionToPlayerSize = e10 : bp("underlying media element missing when trying to set capRenditionToPlayerSize");
    }
  };
  function gl(e10, t10) {
    return e10.media ? e10.media.getAttribute(t10) : e10.getAttribute(t10);
  }
  bK = /* @__PURE__ */ new WeakMap(), bF = /* @__PURE__ */ new WeakMap(), bj = /* @__PURE__ */ new WeakMap(), bG = /* @__PURE__ */ new WeakMap(), bY = /* @__PURE__ */ new WeakMap(), bQ = /* @__PURE__ */ new WeakMap(), bz = /* @__PURE__ */ new WeakMap(), bZ = /* @__PURE__ */ new WeakMap(), bX = /* @__PURE__ */ new WeakMap(), bJ = /* @__PURE__ */ new WeakMap(), b0 = /* @__PURE__ */ new WeakMap(), b1 = /* @__PURE__ */ new WeakMap(), b2 = /* @__PURE__ */ new WeakSet(), b3 = function() {
    var e10, t10, a10, i10;
    if (!cW(this, bF)) {
      cq(this, bF, true), cV(this, b2, b9).call(this);
      try {
        if (customElements.upgrade(this.mediaTheme), !(this.mediaTheme instanceof v8.HTMLElement)) throw "";
      } catch {
        bp("<media-theme> failed to upgrade!");
      }
      try {
        customElements.upgrade(this.media);
      } catch {
        bp("underlying media element failed to upgrade!");
      }
      try {
        if (customElements.upgrade(this.mediaController), !(this.mediaController instanceof sZ)) throw "";
      } catch {
        bp("<media-controller> failed to upgrade!");
      }
      cV(this, b2, b8).call(this), cV(this, b2, b6).call(this), cV(this, b2, b7).call(this), cq(this, bG, null == (t10 = null == (e10 = this.mediaController) ? void 0 : e10.hasAttribute(nN)) || t10), cV(this, b2, ge).call(this), null == (a10 = this.media) || a10.addEventListener("streamtypechange", cW(this, bz)), null == (i10 = this.media) || i10.addEventListener("loadstart", cW(this, bZ));
    }
  }, b4 = function() {
    var e10, t10;
    try {
      null == (e10 = null == window ? void 0 : window.CSS) || e10.registerProperty({ name: "--media-primary-color", syntax: "<color>", inherits: true }), null == (t10 = null == window ? void 0 : window.CSS) || t10.registerProperty({ name: "--media-secondary-color", syntax: "<color>", inherits: true });
    } catch {
    }
  }, b5 = function(e10) {
    Object.assign(cW(this, b0), e10), cV(this, b2, b9).call(this);
  }, b9 = function(e10 = {}) {
    var t10, a10, i10, r10, n10, s10, o10, l10, d10, u10, c10, h10, m10, p10, v10, b10, g2, y2, f2, E2, w2, T2, A2, k2, M2, S2, I2, R2, C2, L2, D2, x2, P2, O2, N2, U2, B2, H2, W2, $2, q2, V2, K2, F2, j2, G2, Y2, Q2, z2, Z2;
    let X2, J2, ee2, et2;
    t10 = { ...cW(this, b0), ...e10 }, X2 = { src: !this.playbackId && this.src, playbackId: this.playbackId, hasSrc: !!this.playbackId || !!this.src || !!this.currentSrc, poster: this.poster, storyboard: (null == (a10 = this.media) ? void 0 : a10.currentSrc) && this.storyboard, storyboardSrc: this.getAttribute(bW.STORYBOARD_SRC), fullscreenElement: this.getAttribute(bW.FULLSCREEN_ELEMENT), placeholder: this.getAttribute("placeholder"), themeTemplate: (function(e11) {
      var t11, a11;
      let i11 = e11.theme;
      if (i11) {
        let r11 = null == (a11 = null == (t11 = e11.getRootNode()) ? void 0 : t11.getElementById) ? void 0 : a11.call(t11, i11);
        if (r11 && r11 instanceof HTMLTemplateElement) return r11;
        i11.startsWith("media-theme-") || (i11 = `media-theme-${i11}`);
        let n11 = v8.customElements.get(i11);
        if (null != n11 && n11.template) return n11.template;
      }
    })(this), thumbnailTime: !this.tokens.thumbnail && this.thumbnailTime, autoplay: this.autoplay, crossOrigin: this.crossOrigin, loop: this.loop, noHotKeys: this.hasAttribute(bW.NOHOTKEYS), hotKeys: this.getAttribute(bW.HOTKEYS), muted: this.muted, paused: this.paused, preload: this.preload, envKey: this.envKey, preferCmcd: this.preferCmcd, debug: this.debug, disableTracking: this.disableTracking, disableCookies: this.disableCookies, tokens: this.tokens, beaconCollectionDomain: this.beaconCollectionDomain, maxResolution: this.maxResolution, minResolution: this.minResolution, maxAutoResolution: this.maxAutoResolution, programStartTime: this.programStartTime, programEndTime: this.programEndTime, assetStartTime: this.assetStartTime, assetEndTime: this.assetEndTime, renditionOrder: this.renditionOrder, metadata: this.metadata, playerInitTime: this.playerInitTime, playerSoftwareName: this.playerSoftwareName, playerSoftwareVersion: this.playerSoftwareVersion, startTime: this.startTime, initialBandwidthEstimateKbps: this.initialBandwidthEstimateKbps, initialEstimateSegments: this.initialEstimateSegments, minPreloadSegments: this.minPreloadSegments, preferPlayback: this.preferPlayback, audio: this.audio, defaultStreamType: this.defaultStreamType, targetLiveWindow: this.getAttribute(iB.TARGET_LIVE_WINDOW), streamType: bd(this.getAttribute(iB.STREAM_TYPE)), primaryColor: this.getAttribute(bW.PRIMARY_COLOR), secondaryColor: this.getAttribute(bW.SECONDARY_COLOR), accentColor: this.getAttribute(bW.ACCENT_COLOR), forwardSeekOffset: this.forwardSeekOffset, backwardSeekOffset: this.backwardSeekOffset, defaultHiddenCaptions: this.defaultHiddenCaptions, defaultDuration: this.defaultDuration, defaultShowRemainingTime: this.defaultShowRemainingTime, hideDuration: (J2 = null == (n10 = this.mediaController) ? void 0 : n10.querySelector("media-time-display")) && "none" === getComputedStyle(J2).getPropertyValue("--media-duration-display-display").trim(), playbackRates: this.getAttribute(bW.PLAYBACK_RATES), customDomain: null != (i10 = this.getAttribute(iB.CUSTOM_DOMAIN)) ? i10 : void 0, title: this.getAttribute(bW.TITLE), videoTitle: null != (r10 = this.getAttribute(bW.VIDEO_TITLE)) ? r10 : this.getAttribute(bW.TITLE), novolumepref: this.hasAttribute(bW.NO_VOLUME_PREF), nomutedpref: this.hasAttribute(bW.NO_MUTED_PREF), proudlyDisplayMuxBadge: this.hasAttribute(bW.PROUDLY_DISPLAY_MUX_BADGE), castReceiver: this.castReceiver, disablePseudoEnded: this.hasAttribute(bW.DISABLE_PSEUDO_ENDED), capRenditionToPlayerSize: this.capRenditionToPlayerSize, ...t10, extraSourceParams: this.extraSourceParams }, s10 = bC`
  <style>
    ${((e11) => {
      let { tokens: t11 } = e11;
      return t11.drm ? ":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }" : "";
    })(X2)}
    ${bw}
  </style>
  ${l10 = X2, bC`
  <media-theme
    template="${l10.themeTemplate || false}"
    defaultstreamtype="${null != (d10 = l10.defaultStreamType) && d10}"
    hotkeys="${ee2 = l10.hotKeys ? `${l10.hotKeys}` : "", "live" === bd(l10.streamType) && (ee2 += " noarrowleft noarrowright"), ee2 || false}"
    nohotkeys="${l10.noHotKeys || !l10.hasSrc || false}"
    noautoseektolive="${!!(null != (u10 = l10.streamType) && u10.includes(tG)) && 0 !== l10.targetLiveWindow}"
    novolumepref="${l10.novolumepref || false}"
    nomutedpref="${l10.nomutedpref || false}"
    disabled="${!l10.hasSrc || l10.isDialogOpen}"
    audio="${null != (c10 = l10.audio) && c10}"
    style="${null != (Z2 = { "--media-primary-color": l10.primaryColor, "--media-secondary-color": l10.secondaryColor, "--media-accent-color": l10.accentColor }, et2 = "", Object.entries(Z2).forEach(([e11, t11]) => {
      null != t11 && (et2 += `${v7(e11)}: ${t11}; `);
    }), h10 = et2 ? et2.trim() : void 0) && h10}"
    defaultsubtitles="${!l10.defaultHiddenCaptions}"
    forwardseekoffset="${null != (m10 = l10.forwardSeekOffset) && m10}"
    backwardseekoffset="${null != (p10 = l10.backwardSeekOffset) && p10}"
    playbackrates="${null != (v10 = l10.playbackRates) && v10}"
    defaultshowremainingtime="${null != (b10 = l10.defaultShowRemainingTime) && b10}"
    defaultduration="${null != (g2 = l10.defaultDuration) && g2}"
    hideduration="${null != (y2 = l10.hideDuration) && y2}"
    title="${null != (f2 = l10.title) && f2}"
    videotitle="${null != (E2 = l10.videoTitle) && E2}"
    proudlydisplaymuxbadge="${null != (w2 = l10.proudlyDisplayMuxBadge) && w2}"
    exportparts="${bL}"
    onclose="${l10.onCloseErrorDialog}"
    onfocusin="${l10.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${null != (T2 = l10.noHotKeys) && T2}"
      target-live-window="${null != (A2 = l10.targetLiveWindow) && A2}"
      stream-type="${null != (k2 = bd(l10.streamType)) && k2}"
      crossorigin="${null != (M2 = l10.crossOrigin) ? M2 : ""}"
      playsinline
      autoplay="${null != (S2 = l10.autoplay) && S2}"
      muted="${null != (I2 = l10.muted) && I2}"
      loop="${null != (R2 = l10.loop) && R2}"
      preload="${null != (C2 = l10.preload) && C2}"
      debug="${null != (L2 = l10.debug) && L2}"
      prefer-cmcd="${null != (D2 = l10.preferCmcd) && D2}"
      disable-tracking="${null != (x2 = l10.disableTracking) && x2}"
      disable-cookies="${null != (P2 = l10.disableCookies) && P2}"
      prefer-playback="${null != (O2 = l10.preferPlayback) && O2}"
      start-time="${null != l10.startTime && l10.startTime}"
      initial-bandwidth-estimate-kbps="${null != l10.initialBandwidthEstimateKbps && l10.initialBandwidthEstimateKbps}"
      initial-estimate-segments="${null != l10.initialEstimateSegments && l10.initialEstimateSegments}"
      min-preload-segments="${null != l10.minPreloadSegments && l10.minPreloadSegments}"
      beacon-collection-domain="${null != (N2 = l10.beaconCollectionDomain) && N2}"
      player-init-time="${null != (U2 = l10.playerInitTime) && U2}"
      player-software-name="${null != (B2 = l10.playerSoftwareName) && B2}"
      player-software-version="${null != (H2 = l10.playerSoftwareVersion) && H2}"
      env-key="${null != (W2 = l10.envKey) && W2}"
      custom-domain="${null != ($2 = l10.customDomain) && $2}"
      src="${l10.src ? l10.src : !!l10.playbackId && aG(l10)}"
      cast-src="${l10.src ? l10.src : !!l10.playbackId && aG(l10)}"
      cast-receiver="${null != (q2 = l10.castReceiver) && q2}"
      drm-token="${null != (K2 = null == (V2 = l10.tokens) ? void 0 : V2.drm) && K2}"
      playback-token="${null != (j2 = null == (F2 = l10.tokens) ? void 0 : F2.playback) && j2}"
      exportparts="video"
      disable-pseudo-ended="${null != (G2 = l10.disablePseudoEnded) && G2}"
      max-auto-resolution="${null != (Y2 = l10.maxAutoResolution) && Y2}"
      cap-rendition-to-player-size="${null != (Q2 = l10.capRenditionToPlayerSize) && Q2}"
    >
      ${l10.storyboard ? bC`<track label="thumbnails" default kind="metadata" src="${l10.storyboard}" />` : bC``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!l10.poster && l10.poster}"
        placeholdersrc="${null != (z2 = l10.placeholder) && z2}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`, o10 = this.shadowRoot, s10.renderInto(o10);
  }, b8 = function() {
    let e10 = (e11) => {
      var t10, a10;
      if (!(null != e11 && e11.startsWith("theme-"))) return;
      let i10 = e11.replace(/^theme-/, "");
      if (b$.includes(i10)) return;
      let r10 = this.getAttribute(e11);
      null != r10 ? null == (t10 = this.mediaTheme) || t10.setAttribute(i10, r10) : null == (a10 = this.mediaTheme) || a10.removeAttribute(i10);
    };
    cq(this, bQ, new MutationObserver((t10) => {
      for (let { attributeName: a10 } of t10) e10(a10);
    })), cW(this, bQ).observe(this, { attributes: true }), this.getAttributeNames().forEach(e10);
  }, b6 = function() {
    this.addEventListener("error", cW(this, b1)), this.media && (this.media.errorTranslator = (e10 = {}) => {
      var t10, a10, i10;
      if (!((null == (t10 = this.media) ? void 0 : t10.error) instanceof tV)) return e10;
      let r10 = bx(null == (a10 = this.media) ? void 0 : a10.error, false);
      return { player_error_code: null == (i10 = this.media) ? void 0 : i10.error.code, player_error_message: r10.message ? String(r10.message) : e10.player_error_message, player_error_context: r10.context ? String(r10.context) : e10.player_error_context };
    });
  }, b7 = function() {
    var e10, t10, a10, i10;
    null == (t10 = null == (e10 = this.media) ? void 0 : e10.textTracks) || t10.addEventListener("addtrack", cW(this, bX)), null == (i10 = null == (a10 = this.media) ? void 0 : a10.textTracks) || i10.addEventListener("removetrack", cW(this, bX));
  }, ge = function() {
    var e10, t10;
    if (!/Firefox/i.test(navigator.userAgent)) return;
    let a10, i10 = /* @__PURE__ */ new WeakMap(), r10 = () => this.streamType === tG && !this.secondaryColor && this.offsetWidth >= 800, n10 = (e11, t11, a11 = false) => {
      r10() || Array.from(e11 && e11.activeCues || []).forEach((e12) => {
        if (!(!e12.snapToLines || e12.line < -5 || e12.line >= 0 && e12.line < 10)) if (!t11 || this.paused) {
          let t12 = e12.text.split(`
`).length, r11 = -3;
          this.streamType === tG && (r11 = -2);
          let n11 = r11 - t12;
          if (e12.line === n11 && !a11) return;
          i10.has(e12) || i10.set(e12, e12.line), e12.line = n11;
        } else setTimeout(() => {
          e12.line = i10.get(e12) || "auto";
        }, 500);
      });
    }, s10 = () => {
      var e11, t11;
      n10(a10, null != (t11 = null == (e11 = this.mediaController) ? void 0 : e11.hasAttribute(nN)) && t11);
    }, o10 = () => {
      var e11, t11;
      let i11 = Array.from((null == (t11 = null == (e11 = this.mediaController) ? void 0 : e11.media) ? void 0 : t11.textTracks) || []).filter((e12) => ["subtitles", "captions"].includes(e12.kind) && "showing" === e12.mode)[0];
      i11 !== a10 && (null == a10 || a10.removeEventListener("cuechange", s10)), null == (a10 = i11) || a10.addEventListener("cuechange", s10), n10(a10, cW(this, bG));
    };
    o10(), null == (e10 = this.textTracks) || e10.addEventListener("change", o10), null == (t10 = this.textTracks) || t10.addEventListener("addtrack", o10);
    let l10 = () => {
      var e11, t11;
      let i11 = null == (t11 = null == (e11 = this.mediaController) ? void 0 : e11.hasAttribute(nN)) || t11;
      cW(this, bG) !== i11 && (cq(this, bG, i11), n10(a10, cW(this, bG)));
    };
    this.addEventListener("userinactivechange", l10), cq(this, bJ, () => {
      var e11, t11;
      null == a10 || a10.removeEventListener("cuechange", s10), null == (e11 = this.textTracks) || e11.removeEventListener("change", o10), null == (t11 = this.textTracks) || t11.removeEventListener("addtrack", o10), this.removeEventListener("userinactivechange", l10);
    });
  };
  try {
    var gd = "u" > typeof window ? window : e.g;
    gd._sentryModuleMetadata = gd._sentryModuleMetadata || {}, gd._sentryModuleMetadata[new gd.Error().stack] = Object.assign({}, gd._sentryModuleMetadata[new gd.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var gu = (e10) => {
    throw TypeError(e10);
  }, gc = (e10, t10, a10) => t10.has(e10) || gu("Cannot " + a10), gh = class {
    addEventListener() {
    }
    removeEventListener() {
    }
    dispatchEvent(e10) {
      return true;
    }
  };
  "u" < typeof DocumentFragment && (globalThis.DocumentFragment = class extends gh {
  });
  var gm, gp = class extends gh {
  }, gv = class {
    constructor(e10, t10 = {}) {
      ((e11, t11) => t11.has(e11) ? gu("Cannot add the same private member more than once") : t11 instanceof WeakSet ? t11.add(e11) : t11.set(e11, void 0))(this, gm), ((e11, t11, a10) => (gc(e11, t11, "write to private field"), t11.set(e11, a10)))(this, gm, null == t10 ? void 0 : t10.detail);
    }
    get detail() {
      let e10;
      return gc(this, e10 = gm, "read from private field"), e10.get(this);
    }
    initCustomEvent() {
    }
  };
  gm = /* @__PURE__ */ new WeakMap();
  var gb = { document: { createElement: function(e10, t10) {
    return new gp();
  } }, DocumentFragment, customElements: { get(e10) {
  }, define(e10, t10, a10) {
  }, getName: (e10) => null, upgrade(e10) {
  }, whenDefined: (e10) => Promise.resolve(gp) }, CustomEvent: gv, EventTarget: gh, HTMLElement: gp, HTMLVideoElement: class extends gh {
  } }, gg = "u" < typeof window || void 0 === globalThis.customElements, gy = gg ? gb : globalThis;
  gg && gb.document, gy.customElements.get("mux-player") || (gy.customElements.define("mux-player", go), gy.MuxPlayerElement = go);
  try {
    var gf = "u" > typeof window ? window : e.g;
    gf._sentryModuleMetadata = gf._sentryModuleMetadata || {}, gf._sentryModuleMetadata[new gf.Error().stack] = Object.assign({}, gf._sentryModuleMetadata[new gf.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  var gE = parseInt(r.default.version) >= 19, g_ = { className: "class", classname: "class", htmlFor: "for", crossOrigin: "crossorigin", viewBox: "viewBox", playsInline: "playsinline", autoPlay: "autoplay", playbackRate: "playbackrate" };
  function gw(e10, t10) {
    if ("function" == typeof e10) return e10(t10);
    null != e10 && (e10.current = t10);
  }
  var gT = Object.prototype.hasOwnProperty, gA = (e10, t10, a10) => !((e11, t11) => {
    if (Object.is(e11, t11)) return true;
    if ("object" != typeof e11 || null === e11 || "object" != typeof t11 || null === t11) return false;
    if (Array.isArray(e11)) return !!Array.isArray(t11) && e11.length === t11.length && e11.some((e12, a12) => t11[a12] === e12);
    let a11 = Object.keys(e11), i10 = Object.keys(t11);
    if (a11.length !== i10.length) return false;
    for (let i11 = 0; i11 < a11.length; i11++) if (!gT.call(t11, a11[i11]) || !Object.is(e11[a11[i11]], t11[a11[i11]])) return false;
    return true;
  })(t10, e10[a10]), gk = (e10, t10, a10) => {
    e10[a10] = t10;
  }, gM = (e10, t10, a10, i10 = gk, n10 = gA) => (0, r.useEffect)(() => {
    let r10 = null == a10 ? void 0 : a10.current;
    r10 && n10(r10, t10, e10) && i10(r10, t10, e10);
  }, [null == a10 ? void 0 : a10.current, t10]), gS = (() => {
    try {
      return "3.13.0";
    } catch {
    }
    return "UNKNOWN";
  })(), gI = (e10, t10, a10) => (0, r.useEffect)(() => {
    let i10 = null == t10 ? void 0 : t10.current;
    if (i10 && a10) return i10.addEventListener(e10, a10), () => {
      i10.removeEventListener(e10, a10);
    };
  }, [null == t10 ? void 0 : t10.current, a10, e10]), gR = r.default.forwardRef(({ children: e10, ...t10 }, a10) => r.default.createElement("mux-player", { suppressHydrationWarning: true, ...((e11 = {}) => {
    let { ref: t11, ...a11 } = e11;
    return Object.entries(a11).reduce((e12, [t12, a12]) => {
      let i10 = ((e13, t13) => {
        if (!(!gE && "boolean" == typeof t13 && !t13)) {
          let a13, i11;
          if (a13 = e13, null != (i11 = g_) && a13 in i11) return g_[e13];
          if (void 0 !== t13) return /[A-Z]/.test(e13) ? e13.replace(/[A-Z]/g, (e14) => `-${e14.toLowerCase()}`) : e13;
        }
      })(t12, a12);
      if (!i10) return e12;
      let r10 = gE || "boolean" != typeof a12 ? a12 : "";
      return e12[i10] = r10, e12;
    }, {});
  })(t10), ref: a10 }, e10)), gC = "mux-player-react", gL = r.default.forwardRef((e10, t10) => {
    var a10;
    let i10 = (0, r.useRef)(null), n10 = (function(...e11) {
      return r.useCallback(/* @__PURE__ */ (function(...e12) {
        return (t11) => {
          let a11 = false, i11 = e12.map((e13) => {
            let i12 = gw(e13, t11);
            return a11 || "function" != typeof i12 || (a11 = true), i12;
          });
          if (a11) return () => {
            for (let t12 = 0; t12 < i11.length; t12++) {
              let a12 = i11[t12];
              "function" == typeof a12 ? a12() : gw(e12[t12], null);
            }
          };
        };
      })(...e11), e11);
    })(i10, t10), [s10] = ((e11, t11) => {
      let { onAbort: a11, onCanPlay: i11, onCanPlayThrough: r10, onEmptied: n11, onLoadStart: s11, onLoadedData: o11, onLoadedMetadata: l10, onProgress: d10, onDurationChange: u10, onVolumeChange: c10, onRateChange: h10, onResize: m10, onWaiting: p10, onPlay: v10, onPlaying: b10, onTimeUpdate: g2, onPause: y2, onSeeking: f2, onSeeked: E2, onStalled: w2, onSuspend: T2, onEnded: A2, onError: k2, onCuePointChange: M2, onChapterChange: S2, metadata: I2, tokens: R2, paused: C2, playbackId: L2, playbackRates: D2, currentTime: x2, themeProps: P2, extraSourceParams: O2, castCustomData: N2, _hlsConfig: U2, ...B2 } = t11;
      return gM("tokens", R2, e11), gM("playbackId", L2, e11), gM("playbackRates", D2, e11), gM("metadata", I2, e11), gM("extraSourceParams", O2, e11), gM("_hlsConfig", U2, e11), gM("themeProps", P2, e11), gM("castCustomData", N2, e11), gM("paused", C2, e11, (e12, t12) => {
        null != t12 && (t12 ? e12.pause() : e12.play());
      }, (e12, t12, a12) => (!e12.hasAttribute("autoplay") || !!e12.hasPlayed) && gA(e12, t12, a12)), gM("currentTime", x2, e11, (e12, t12) => {
        null != t12 && (e12.currentTime = t12);
      }), gI("abort", e11, a11), gI("canplay", e11, i11), gI("canplaythrough", e11, r10), gI("emptied", e11, n11), gI("loadstart", e11, s11), gI("loadeddata", e11, o11), gI("loadedmetadata", e11, l10), gI("progress", e11, d10), gI("durationchange", e11, u10), gI("volumechange", e11, c10), gI("ratechange", e11, h10), gI("resize", e11, m10), gI("waiting", e11, p10), gI("play", e11, v10), gI("playing", e11, b10), gI("timeupdate", e11, g2), gI("pause", e11, y2), gI("seeking", e11, f2), gI("seeked", e11, E2), gI("stalled", e11, w2), gI("suspend", e11, T2), gI("ended", e11, A2), gI("error", e11, k2), gI("cuepointchange", e11, M2), gI("chapterchange", e11, S2), [B2];
    })(i10, e10), [o10] = (0, r.useState)(null != (a10 = e10.playerInitTime) ? a10 : aF());
    return r.default.createElement(gR, { ref: n10, defaultHiddenCaptions: e10.defaultHiddenCaptions, playerSoftwareName: gC, playerSoftwareVersion: gS, playerInitTime: o10, ...s10 });
  });
  e.s(["default", 0, gL, "playerSoftwareName", 0, gC, "playerSoftwareVersion", 0, gS], 488531), e.i(488531), e.s(["MaxResolution", 0, { upTo720p: "720p", upTo1080p: "1080p", upTo1440p: "1440p", upTo2160p: "2160p" }, "MediaError", 0, tV, "MinResolution", 0, { noLessThan480p: "480p", noLessThan540p: "540p", noLessThan720p: "720p", noLessThan1080p: "1080p", noLessThan1440p: "1440p", noLessThan2160p: "2160p" }, "RenditionOrder", 0, { DESCENDING: "desc" }, "default", 0, gL, "generatePlayerInitTime", 0, aF, "playerSoftwareName", 0, gC, "playerSoftwareVersion", 0, gS], 849648);
}]);
