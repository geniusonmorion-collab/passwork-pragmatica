;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "70260bef-9600-85c0-2605-d30597f70f34");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 775592, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  r.__esModule = true, r.default = function(e2, t2) {
    if (e2 && t2) {
      var r2 = Array.isArray(t2) ? t2 : t2.split(",");
      if (0 === r2.length) return true;
      var a2 = e2.name || "", n = (e2.type || "").toLowerCase(), o = n.replace(/\/.*$/, "");
      return r2.some(function(e3) {
        var t3 = e3.trim().toLowerCase();
        return "." === t3.charAt(0) ? a2.toLowerCase().endsWith(t3) : t3.endsWith("/*") ? o === t3.replace(/\/.*$/, "") : n === t3;
      });
    }
    return true;
  };
}, 35305, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}, 561227, (e, t, r) => {
  "use strict";
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var n = e.r(35305);
  function o() {
  }
  function s() {
  }
  s.resetWarningCache = o, t.exports = function() {
    function e2(e3, t3, r3, a2, o2, s2) {
      if (s2 !== n) {
        var i = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw i.name = "Invariant Violation", i;
      }
    }
    function t2() {
      return e2;
    }
    e2.isRequired = e2;
    var r2 = { array: e2, bigint: e2, bool: e2, func: e2, number: e2, object: e2, string: e2, symbol: e2, any: e2, arrayOf: t2, element: e2, elementType: e2, instanceOf: t2, node: e2, objectOf: t2, oneOf: t2, oneOfType: t2, shape: t2, exact: t2, checkPropTypes: s, resetWarningCache: o };
    return r2.PropTypes = r2, r2;
  };
}, 304153, (e, t, r) => {
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  t.exports = e.r(561227)();
}]);
