;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "00e9f957-c02e-8dda-a81b-4bf746a3b1c0");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 620996, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(551360);
  try {
    var a = window;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["FormTextInput", 0, function({ className: e2, isError: a2, ref: o, ...l }) {
    return (0, t.jsx)("div", { children: (0, t.jsx)("input", { ref: o, className: (0, r.cn)("block w-full rounded-[10px] bg-primary-background p-[10px_13px] outline-hidden transition-all duration-300 ease-out", "text-secondary-foreground placeholder:text-accent-foreground placeholder:text-sm", !a2 && ["border border-default-stroke", "hover:border-greyscale-light-08 hover:shadow-[0px_1px_4px_rgba(56,_62,_71,_0.1)]", "focus-visible:border-blue-500 focus-visible:ring-[3px] focus-visible:ring-blue-300"], a2 && ["border border-red-500", "hover:border-red-[#CE2E4B] hover:shadow-[0px_1px_4px_rgba(56,_62,_71,_0.1)]", "focus-visible:border-[#CE2E4B] focus-visible:ring-[3px] focus-visible:ring-red-600/30"], e2), type: "text", ...l }) });
  }]);
}, 23210, 833288, 733332, 542958, 522326, (e) => {
  "use strict";
  var t = e.i(68982), r = e.i(856757);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var o = (e2) => e2 instanceof Date, l = (e2) => null == e2;
  let i = (e2) => "object" == typeof e2;
  var s = (e2) => !l(e2) && !Array.isArray(e2) && i(e2) && !o(e2), n = (e2) => s(e2) && e2.target ? "checkbox" === e2.target.type ? e2.target.checked : "file" === e2.target.type ? e2.target.files : e2.target.value : e2, u = (e2, t2) => t2.split(".").some((t3, r2, a2) => !isNaN(Number(t3)) && e2.has(a2.slice(0, r2).join("."))), d = (e2) => {
    let t2 = e2.constructor && e2.constructor.prototype;
    return s(t2) && t2.hasOwnProperty("isPrototypeOf");
  }, c = "u" > typeof window && void 0 !== window.HTMLElement && "u" > typeof document;
  function f(e2) {
    if (e2 instanceof Date) return new Date(e2);
    let t2 = "u" > typeof FileList && e2 instanceof FileList;
    if (c && (e2 instanceof Blob || t2)) return e2;
    let r2 = Array.isArray(e2);
    if (!r2 && !(s(e2) && d(e2))) return e2;
    let a2 = r2 ? [] : Object.create(Object.getPrototypeOf(e2));
    for (let t3 in e2) Object.prototype.hasOwnProperty.call(e2, t3) && (a2[t3] = f(e2[t3]));
    return a2;
  }
  let m = "blur", y = "trigger", h = "onChange", p = "onSubmit", g = "maxLength", v = "minLength", b = "pattern", _ = "required", w = "validate", V = "root", A = ["__proto__", "constructor", "prototype"], k = /^\w*$/;
  var x = (e2) => void 0 === e2;
  let M = /[.[\]'"]/;
  var E = (e2) => e2.split(M).filter(Boolean), F = (e2, t2, r2) => {
    if (!t2 || !s(e2)) return r2;
    let a2 = k.test(t2) ? [t2] : E(t2);
    if (a2.some((e3) => A.includes(e3))) return r2;
    let o2 = a2.reduce((e3, t3) => l(e3) ? void 0 : e3[t3], e2);
    return x(o2) || o2 === e2 ? x(e2[t2]) ? r2 : e2[t2] : o2;
  }, O = (e2) => "function" == typeof e2, S = (e2, t2, r2) => {
    let a2 = -1, o2 = k.test(t2) ? [t2] : E(t2), l2 = o2.length, i2 = l2 - 1;
    for (; ++a2 < l2; ) {
      let t3 = o2[a2], l3 = r2;
      if (a2 !== i2) {
        let r3 = e2[t3];
        l3 = s(r3) || Array.isArray(r3) ? r3 : isNaN(+o2[a2 + 1]) ? {} : [];
      }
      if (A.includes(t3)) return;
      e2[t3] = l3, e2 = e2[t3];
    }
  };
  let D = r.default.createContext(null);
  D.displayName = "HookFormControlContext";
  var T = (e2, t2, r2, a2 = true) => {
    let o2 = {};
    for (let l2 in e2) Object.defineProperty(o2, l2, { get: () => ("all" !== t2._proxyFormState[l2] && (t2._proxyFormState[l2] = !a2 || "all"), r2 && (r2[l2] = true), e2[l2]) });
    return o2;
  };
  let C = c ? r.default.useLayoutEffect : r.default.useEffect;
  var N = (e2) => l(e2) || !i(e2);
  let R = (e2, t2) => 0 === t2.length && !Array.isArray(e2) && !d(e2);
  function j(e2, t2, r2 = /* @__PURE__ */ new WeakMap()) {
    if (e2 === t2) return true;
    if (N(e2) || N(t2)) return Object.is(e2, t2);
    if (o(e2) && o(t2)) return Object.is(e2.getTime(), t2.getTime());
    let a2 = Object.keys(e2), l2 = Object.keys(t2);
    if (a2.length !== l2.length) return false;
    if (R(e2, a2) || R(t2, l2)) return Object.is(e2, t2);
    if (!a2.length && Array.isArray(e2) !== Array.isArray(t2)) return false;
    let i2 = r2.get(e2);
    if (i2 && i2.has(t2)) return true;
    if (i2) i2.add(t2);
    else {
      let a3 = /* @__PURE__ */ new WeakSet();
      a3.add(t2), r2.set(e2, a3);
    }
    for (let l3 of a2) {
      let a3 = e2[l3];
      if (!(l3 in t2)) return false;
      if ("ref" !== l3) {
        let e3 = t2[l3];
        if (o(a3) && o(e3) || (s(a3) || Array.isArray(a3)) && (s(e3) || Array.isArray(e3)) ? !j(a3, e3, r2) : !Object.is(a3, e3)) return false;
      }
    }
    return true;
  }
  function P() {
    let e2 = r.default.useRef(false), t2 = r.default.useRef(void 0);
    return { resyncIfNeeded: r.default.useCallback((r2, a2, o2) => {
      if (r2 && e2.current) {
        let e3 = a2();
        j(t2.current, e3) || o2(e3);
      }
      e2.current = true;
    }, []), snapshot: r.default.useCallback((e3, r2) => {
      e3 && (t2.current = f(r2()));
    }, []) };
  }
  var I = (e2) => "string" == typeof e2, U = (e2, t2, r2, a2, o2) => I(e2) ? (a2 && t2.watch.add(e2), F(r2, e2, o2)) : Array.isArray(e2) ? e2.map((e3) => (a2 && t2.watch.add(e3), F(r2, e3))) : (a2 && (t2.watchAll = true), r2);
  let L = (e2) => e2.render((function(e3) {
    let t2 = r.default.useContext(D), { name: a2, disabled: o2, control: l2 = t2, shouldUnregister: i2, defaultValue: s2, exact: d2 = true } = e3, c2 = u(l2._names.array, a2), y2 = r.default.useMemo(() => F(l2._formValues, a2, F(l2._defaultValues, a2, s2)), [l2, a2, s2]), h2 = (function(e4) {
      let t3 = r.default.useContext(D), { control: a3 = t3, name: o3, defaultValue: l3, disabled: i3, exact: s3, compute: n2 } = e4 || {}, u2 = r.default.useRef(l3), d3 = r.default.useRef(n2), c3 = r.default.useRef(void 0), f2 = r.default.useRef(a3), m2 = r.default.useRef(o3);
      d3.current = n2;
      let [y3, h3] = r.default.useState(() => {
        let e5 = a3._getWatch(o3, u2.current);
        return d3.current ? d3.current(e5) : e5;
      }), p3 = r.default.useCallback((e5) => {
        let t4 = U(o3, a3._names, e5 || a3._formValues, false, u2.current);
        return d3.current ? d3.current(t4) : t4;
      }, [a3._formValues, a3._names, o3]), g3 = r.default.useCallback((e5) => {
        if (!i3) {
          let t4 = U(o3, a3._names, e5 || a3._formValues, false, u2.current);
          if (d3.current) {
            let e6 = d3.current(t4);
            j(e6, c3.current) || (h3(e6), c3.current = e6);
          } else h3(t4);
        }
      }, [a3._formValues, a3._names, i3, o3]), { resyncIfNeeded: v3, snapshot: b3 } = P(), _3 = r.default.useRef(g3);
      _3.current = g3;
      let w3 = r.default.useRef(p3);
      w3.current = p3, C(() => {
        f2.current === a3 && j(m2.current, o3) ? v3(!i3, () => w3.current(), (e6) => {
          h3(e6), c3.current = e6;
        }) : (f2.current = a3, m2.current = o3, _3.current());
        let e5 = a3._subscribe({ name: o3, formState: { values: true }, exact: s3, callback: (e6) => {
          _3.current(e6.values);
        } });
        return () => {
          e5(), b3(!i3, () => w3.current());
        };
      }, [a3, s3, o3, i3, v3, b3]), r.default.useEffect(() => a3._removeUnmounted());
      let V3 = f2.current !== a3, A3 = m2.current, k3 = r.default.useMemo(() => {
        if (i3) return null;
        let e5 = !V3 && !j(A3, o3);
        return V3 || e5 ? p3() : null;
      }, [i3, V3, o3, A3, p3]);
      return null !== k3 ? k3 : y3;
    })({ control: l2, name: a2, defaultValue: y2, exact: d2 }), p2 = (function(e4) {
      let t3 = r.default.useContext(D), { control: a3 = t3, disabled: o3, name: l3, exact: i3 } = e4 || {}, [s3, n2] = r.default.useState(() => ({ ...a3._formState, defaultValues: a3._defaultValues })), u2 = r.default.useRef({ isDirty: false, isLoading: false, dirtyFields: false, touchedFields: false, validatingFields: false, isValidating: false, isValid: false, errors: false }), { resyncIfNeeded: d3, snapshot: c3 } = P();
      return C(() => {
        let e5 = () => ({ ...a3._formState, defaultValues: a3._defaultValues });
        d3(!o3, e5, n2);
        let t4 = a3._subscribe({ name: l3, formState: u2.current, exact: i3, callback: (e6) => {
          o3 || n2({ ...a3._formState, ...e6, defaultValues: a3._defaultValues });
        } });
        return () => {
          t4(), c3(!o3, e5);
        };
      }, [l3, o3, i3, d3, c3]), r.default.useEffect(() => {
        u2.current.isValid && a3._setValid(true);
      }, [a3]), r.default.useMemo(() => T(s3, a3, u2.current, false), [s3, a3]);
    })({ control: l2, name: a2, exact: d2 }), g2 = r.default.useRef(e3), v2 = r.default.useRef(null), b2 = r.default.useRef(l2.register(a2, { ...e3.rules, value: h2, ..."boolean" == typeof e3.disabled ? { disabled: e3.disabled } : {} }));
    g2.current = e3;
    let _2 = r.default.useMemo(() => Object.defineProperties({}, { invalid: { enumerable: true, get: () => !!F(p2.errors, a2) }, isDirty: { enumerable: true, get: () => !!F(p2.dirtyFields, a2) }, isTouched: { enumerable: true, get: () => !!F(p2.touchedFields, a2) }, isValidating: { enumerable: true, get: () => !!F(p2.validatingFields, a2) }, error: { enumerable: true, get: () => F(p2.errors, a2) } }), [p2, a2]), w2 = r.default.useCallback((e4) => {
      let t3 = n(e4);
      return F(l2._fields, a2) || (b2.current = l2.register(a2, { ...g2.current.rules, value: t3 })), b2.current.onChange({ target: { value: n(e4), name: a2 }, type: "change" });
    }, [a2, l2]), V2 = r.default.useCallback(() => b2.current.onBlur({ target: { value: F(l2._formValues, a2), name: a2 }, type: m }), [a2, l2._formValues]), A2 = r.default.useCallback((e4) => {
      e4 && (v2.current = { focus: () => O(e4.focus) && e4.focus(), select: () => O(e4.select) && e4.select(), setCustomValidity: (t4) => O(e4.setCustomValidity) && e4.setCustomValidity(t4), reportValidity: () => O(e4.reportValidity) && e4.reportValidity() });
      let t3 = F(l2._fields, a2);
      t3 && t3._f && e4 && (t3._f.ref = v2.current);
    }, [l2._fields, a2]), k2 = r.default.useMemo(() => ({ name: a2, value: h2, ..."boolean" == typeof o2 || p2.disabled ? { disabled: p2.disabled || o2 } : {}, onChange: w2, onBlur: V2, ref: A2 }), [a2, o2, p2.disabled, w2, V2, A2, h2]);
    return r.default.useEffect(() => {
      let e4 = l2._options.shouldUnregister || i2;
      b2.current = l2.register(a2, { ...g2.current.rules, ..."boolean" == typeof g2.current.disabled ? { disabled: g2.current.disabled } : {} });
      let t3 = (e5, t4) => {
        let r2 = F(l2._fields, e5);
        r2 && r2._f && (r2._f.mount = t4);
      };
      if (t3(a2, true), e4) {
        let e5 = f(F(i2 ? l2._defaultValues : l2._options.values || l2._defaultValues, a2, F(l2._options.defaultValues, a2, g2.current.defaultValue)));
        S(l2._defaultValues, a2, e5), x(F(l2._formValues, a2)) && S(l2._formValues, a2, e5);
      }
      if (c2 || l2.register(a2), v2.current) {
        let e5 = F(l2._fields, a2);
        e5 && e5._f && (e5._f.ref = v2.current);
      }
      return () => {
        (c2 ? e4 && !l2._state.action : e4) ? l2.unregister(a2) : t3(a2, false);
      };
    }, [a2, l2, c2, i2]), r.default.useEffect(() => {
      l2._setDisabledField({ disabled: o2, name: a2 });
    }, [o2, a2, l2]), r.default.useMemo(() => ({ field: k2, formState: p2, fieldState: _2 }), [k2, p2, _2]);
  })(e2));
  var B = (e2) => ({ isOnSubmit: !e2 || e2 === p, isOnBlur: "onBlur" === e2, isOnChange: e2 === h, isOnAll: "all" === e2, isOnTouch: "onTouched" === e2 }), $ = (e2, t2, r2) => {
    if (r2) return false;
    if (t2.watchAll || t2.watch.has(e2)) return true;
    for (let r3 of t2.watch) if (e2.startsWith(r3) && "." === e2.charAt(r3.length)) return true;
    return false;
  };
  let K = (e2, t2, r2, a2) => {
    for (let o2 of r2 || Object.keys(e2)) {
      if ("_f" === o2) continue;
      let l2 = r2 ? F(e2, o2) : e2[o2];
      if (l2) {
        let { _f: e3 } = l2;
        if (e3) {
          if (e3.refs && e3.refs[0] && t2(e3.refs[0], o2) && !a2) return true;
          else if (e3.ref && t2(e3.ref, e3.name) && !a2) return true;
          else if (K(l2, t2)) break;
        } else if ((s(l2) || Array.isArray(l2)) && K(l2, t2)) break;
      }
    }
  };
  var z = (e2, t2, r2) => {
    let a2 = F(e2, r2), o2 = Array.isArray(a2) ? a2 : [];
    return S(o2, V, t2[r2]), S(e2, r2, o2), e2;
  }, W = (e2) => s(e2) && !Object.keys(e2).length, q = (e2) => {
    if (!c) return false;
    let t2 = e2 ? e2.ownerDocument : 0;
    return e2 instanceof (t2 && t2.defaultView ? t2.defaultView.HTMLElement : HTMLElement);
  }, H = (e2, t2, r2, a2, o2) => t2 ? { ...r2[e2], types: { ...r2[e2] && r2[e2].types ? r2[e2].types : {}, [a2]: o2 || true } } : {};
  let Y = { value: false, isValid: false }, G = { value: true, isValid: true };
  var Z = (e2) => {
    if (Array.isArray(e2)) {
      if (e2.length > 1) {
        let t2 = e2.filter((e3) => e3 && e3.checked && !e3.disabled).map((e3) => e3.value);
        return { value: t2, isValid: !!t2.length };
      }
      return e2[0].checked && !e2[0].disabled ? e2[0].attributes && !x(e2[0].attributes.value) ? x(e2[0].value) || "" === e2[0].value ? G : { value: e2[0].value, isValid: true } : G : Y;
    }
    return Y;
  };
  let X = { isValid: false, value: null };
  var J = (e2) => Array.isArray(e2) ? e2.reduce((e3, t2) => t2 && t2.checked && !t2.disabled ? { isValid: true, value: t2.value } : e3, X) : X;
  function Q(e2, t2, r2 = "validate") {
    if (I(e2) || Array.isArray(e2) && e2.every(I) || "boolean" == typeof e2 && !e2) return { type: r2, message: I(e2) ? e2 : "", ref: t2 };
  }
  var ee = (e2) => !s(e2) || e2 instanceof RegExp ? { value: e2, message: "" } : e2, et = async (e2, t2, r2, a2, i2, n2) => {
    let { ref: u2, refs: d2, required: c2, maxLength: f2, minLength: m2, min: y2, max: h2, pattern: p2, validate: V2, name: A2, valueAsNumber: k2, mount: M2 } = e2._f, E2 = F(r2, A2);
    if (!M2 || t2.has(A2)) return {};
    let S2 = d2 ? d2[0] : u2, D2 = (e3) => {
      if (i2 && S2.reportValidity) {
        let t3 = "boolean" == typeof e3 ? "" : e3 || "";
        d2 ? d2.forEach((e4) => e4.setCustomValidity(t3)) : S2.setCustomValidity(t3), S2.reportValidity();
      }
    }, T2 = {}, C2 = "radio" === u2.type, N2 = "checkbox" === u2.type, R2 = (k2 || "file" === u2.type) && x(u2.value) && x(E2) || q(u2) && "" === u2.value || "" === E2 || Array.isArray(E2) && !E2.length, j2 = H.bind(null, A2, a2, T2), P2 = (e3, t3, r3, a3 = g, o2 = v) => {
      let l2 = e3 ? t3 : r3;
      T2[A2] = { type: e3 ? a3 : o2, message: l2, ref: u2, ...j2(e3 ? a3 : o2, l2) };
    };
    if (n2 ? !Array.isArray(E2) || !E2.length : c2 && (!(C2 || N2) && (R2 || l(E2)) || "boolean" == typeof E2 && !E2 || N2 && !Z(d2).isValid || C2 && !J(d2).isValid)) {
      let { value: e3, message: t3 } = I(c2) ? { value: !!c2, message: c2 } : ee(c2);
      if (e3 && (T2[A2] = { type: _, message: t3, ref: S2, ...j2(_, t3) }, !a2)) return D2(t3), T2;
    }
    if (!R2 && (!l(y2) || !l(h2))) {
      let e3, t3, r3 = ee(h2), i3 = ee(y2);
      if (l(E2) || o(E2) || isNaN(E2)) {
        let a3 = u2.valueAsDate || new Date(E2), o2 = (e4) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + e4), l2 = "time" == u2.type, s2 = "week" == u2.type;
        I(r3.value) && E2 && (e3 = l2 ? o2(E2) > o2(r3.value) : s2 ? E2 > r3.value : a3 > new Date(r3.value)), I(i3.value) && E2 && (t3 = l2 ? o2(E2) < o2(i3.value) : s2 ? E2 < i3.value : a3 < new Date(i3.value));
      } else {
        let a3 = u2.valueAsNumber || (E2 ? +E2 : E2);
        l(r3.value) || (e3 = a3 > r3.value), l(i3.value) || (t3 = a3 < i3.value);
      }
      if ((e3 || t3) && (P2(!!e3, r3.message, i3.message, "max", "min"), !a2)) return D2(T2[A2].message), T2;
    }
    if ((f2 || m2) && !R2 && (I(E2) || n2 && Array.isArray(E2))) {
      let e3 = ee(f2), t3 = ee(m2), r3 = !l(e3.value) && E2.length > +e3.value, o2 = !l(t3.value) && E2.length < +t3.value;
      if ((r3 || o2) && (P2(r3, e3.message, t3.message), !a2)) return D2(T2[A2].message), T2;
    }
    if (p2 && !R2 && I(E2)) {
      let { value: e3, message: t3 } = ee(p2);
      if (e3 instanceof RegExp && !E2.match(e3) && (T2[A2] = { type: b, message: t3, ref: u2, ...j2(b, t3) }, !a2)) return D2(t3), T2;
    }
    if (V2) {
      if (O(V2)) {
        let e3 = Q(await V2(E2, r2), S2);
        if (e3 && (T2[A2] = { ...e3, ...j2(w, e3.message) }, !a2)) return D2(e3.message), T2;
      } else if (s(V2)) {
        let e3 = {};
        for (let t3 in V2) {
          if (!W(e3) && !a2) break;
          let o2 = Q(await V2[t3](E2, r2), S2, t3);
          o2 && (e3 = { ...o2, ...j2(t3, o2.message) }, D2(o2.message), a2 && (T2[A2] = e3));
        }
        if (!W(e3) && (T2[A2] = { ref: S2, ...e3 }, !a2)) return T2;
      }
    }
    return D2(true), T2;
  }, er = (e2) => Array.isArray(e2) ? e2 : [e2], ea = (e2) => Array.isArray(e2) ? e2.filter(Boolean) : [];
  function eo(e2, t2) {
    if (I(t2) && Object.prototype.hasOwnProperty.call(e2, t2)) return delete e2[t2], e2;
    let r2 = Array.isArray(t2) ? t2 : k.test(t2) ? [t2] : E(t2);
    if (r2.some((e3) => A.includes(String(e3)))) return e2;
    let a2 = 1 === r2.length ? e2 : (function(e3, t3) {
      let r3 = t3.length - 1, a3 = 0;
      for (; a3 < r3; ) {
        if (l(e3)) {
          e3 = void 0;
          break;
        }
        e3 = e3[t3[a3]], a3++;
      }
      return e3;
    })(e2, r2), o2 = r2.length - 1, i2 = r2[o2];
    return a2 && delete a2[i2], 0 !== o2 && (s(a2) && W(a2) || Array.isArray(a2) && (function(e3) {
      for (let t3 in e3) if (e3.hasOwnProperty(t3) && !x(e3[t3])) return false;
      return true;
    })(a2)) && eo(e2, r2.slice(0, -1)), e2;
  }
  let el = (e2) => {
    let t2 = {};
    for (let r2 of Object.keys(e2)) if (i(e2[r2]) && null !== e2[r2] && !o(e2[r2])) {
      let a2 = el(e2[r2]);
      for (let e3 of Object.keys(a2)) t2[`${r2}.${e3}`] = a2[e3];
    } else t2[r2] = e2[r2];
    return t2;
  }, ei = r.default.createContext(null);
  ei.displayName = "HookFormContext";
  let es = ({ children: e2, watch: t2, getValues: a2, getFieldState: o2, setError: l2, clearErrors: i2, setValue: s2, setValues: n2, trigger: u2, formState: d2, resetField: c2, reset: f2, resetDefaultValues: m2, handleSubmit: y2, unregister: h2, control: p2, register: g2, setFocus: v2, subscribe: b2 }) => {
    let _2 = r.default.useMemo(() => ({ watch: t2, getValues: a2, getFieldState: o2, setError: l2, clearErrors: i2, setValue: s2, setValues: n2, trigger: u2, formState: d2, resetField: c2, reset: f2, resetDefaultValues: m2, handleSubmit: y2, unregister: h2, control: p2, register: g2, setFocus: v2, subscribe: b2 }), [i2, p2, d2, o2, a2, y2, g2, f2, m2, c2, l2, v2, s2, n2, b2, u2, h2, t2]);
    return r.default.createElement(ei.Provider, { value: _2 }, r.default.createElement(D.Provider, { value: _2.control }, e2));
  };
  var en = () => {
    let e2 = [];
    return { get observers() {
      return e2;
    }, next: (t2) => {
      for (let r2 of e2) r2.next && r2.next(t2);
    }, subscribe: (t2) => (e2.push(t2), { unsubscribe: () => {
      e2 = e2.filter((e3) => e3 !== t2);
    } }), unsubscribe: () => {
      e2 = [];
    } };
  }, eu = (e2) => q(e2) && e2.isConnected;
  function ed(e2) {
    return Array.isArray(e2) || s(e2);
  }
  function ec(e2) {
    return Array.isArray(e2) || s(e2) && !((e3) => {
      for (let t2 in e3) if (O(e3[t2])) return true;
      return false;
    })(e2);
  }
  function ef(e2) {
    return !!(e2 && "_f" in e2);
  }
  function em(e2) {
    return Array.isArray(e2) ? !e2.some((e3) => !x(e3)) : !Object.keys(e2).length;
  }
  function ey(e2, t2) {
    Array.isArray(e2) ? e2[t2] = void 0 : delete e2[t2];
  }
  function eh(e2, t2 = {}, r2) {
    for (let a2 in e2) {
      let o2 = e2[a2], l2 = r2 && r2[a2];
      !ec(o2) || Array.isArray(o2) && ef(l2) ? x(o2) || (t2[a2] = true) : (t2[a2] = Array.isArray(o2) ? [] : {}, eh(o2, t2[a2], l2), em(t2[a2]) && ey(t2, a2));
    }
    return t2;
  }
  function ep(e2, t2, r2, a2) {
    for (let o2 in r2 || (r2 = eh(t2, {}, a2)), e2) {
      let i2 = e2[o2], s2 = a2 && a2[o2];
      !ec(i2) || Array.isArray(i2) && ef(s2) ? j(i2, t2[o2]) ? ey(r2, o2) : r2[o2] = true : (x(t2) || N(r2[o2]) ? r2[o2] = eh(i2, Array.isArray(i2) ? [] : {}, s2) : ep(i2, l(t2) ? {} : t2[o2], r2[o2], s2), em(r2[o2]) && ey(r2, o2));
    }
    return r2;
  }
  var eg = (e2, { valueAsNumber: t2, valueAsDate: r2, setValueAs: a2 }) => x(e2) ? e2 : t2 ? "" === e2 ? NaN : e2 ? +e2 : e2 : r2 && I(e2) ? new Date(e2) : a2 ? a2(e2) : e2;
  function ev(e2) {
    let t2 = e2.ref;
    return "file" === t2.type ? t2.files : "radio" === t2.type ? J(e2.refs).value : "select-multiple" === t2.type ? [...t2.selectedOptions].map(({ value: e3 }) => e3) : "checkbox" === t2.type ? Z(e2.refs).value : eg(t2.value, e2);
  }
  var eb = (e2) => x(e2) ? e2 : e2 instanceof RegExp ? e2.source : s(e2) ? e2.value instanceof RegExp ? e2.value.source : e2.value : e2;
  let e_ = "AsyncFunction";
  var ew = (e2) => {
    if (!e2 || !e2.validate) return false;
    if (O(e2.validate)) return e2.validate.constructor.name === e_;
    if (s(e2.validate)) {
      for (let t2 in e2.validate) if (e2.validate[t2].constructor.name === e_) return true;
    }
    return false;
  };
  function eV(e2, t2, r2) {
    let a2 = F(e2, r2);
    if (a2 || k.test(r2)) return { error: a2, name: r2 };
    let o2 = r2.split(".");
    for (; o2.length; ) {
      let a3 = o2.join("."), l2 = F(t2, a3), i2 = F(e2, a3);
      if (l2 && !Array.isArray(l2) && r2 !== a3) break;
      if (i2 && i2.type) return { name: a3, error: i2 };
      if (i2 && i2.root && i2.root.type) return { name: `${a3}.root`, error: i2.root };
      o2.pop();
    }
    return { name: r2 };
  }
  let eA = { mode: p, reValidateMode: h, shouldFocusError: true }, ek = "form", ex = { submitCount: 0, isDirty: false, isReady: false, isValidating: false, isSubmitted: false, isSubmitting: false, isSubmitSuccessful: false, isValid: false, touchedFields: {}, dirtyFields: {}, validatingFields: {} };
  try {
    var eM = "u" > typeof window ? window : e.g;
    eM._sentryModuleMetadata = eM._sentryModuleMetadata || {}, eM._sentryModuleMetadata[new eM.Error().stack] = Object.assign({}, eM._sentryModuleMetadata[new eM.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let eE = (e2, t2, r2) => {
    if (e2 && "reportValidity" in e2) {
      let a2 = F(r2, t2);
      e2.setCustomValidity(a2 && a2.message || ""), e2.reportValidity();
    }
  }, eF = (e2, t2) => {
    for (let r2 in t2.fields) {
      let a2 = t2.fields[r2];
      a2 && a2.ref && "reportValidity" in a2.ref ? eE(a2.ref, r2, e2) : a2 && a2.refs && a2.refs.forEach((t3) => eE(t3, r2, e2));
    }
  }, eO = (e2, t2) => {
    t2.shouldUseNativeValidation && eF(e2, t2);
    let r2 = {};
    for (let a2 in e2) {
      let o2 = F(t2.fields, a2), l2 = Object.assign(e2[a2] || {}, { ref: o2 && o2.refs ? o2.refs[0] : o2 && o2.ref });
      if (eS(t2.names || Object.keys(e2), a2)) {
        let e3 = Object.assign({}, F(r2, a2));
        S(e3, "root", l2), S(r2, a2, e3);
      } else S(r2, a2, l2);
    }
    return r2;
  }, eS = (e2, t2) => {
    let r2 = eD(t2).replace(/[.*+?^${}()|\\]/g, "\\$&");
    return e2.some((e3) => eD(e3).match(`^${r2}\\.\\d+`));
  };
  function eD(e2) {
    return e2.replace(/[\[\]]/g, "");
  }
  try {
    var eT = "u" > typeof window ? window : e.g;
    eT._sentryModuleMetadata = eT._sentryModuleMetadata || {}, eT._sentryModuleMetadata[new eT.Error().stack] = Object.assign({}, eT._sentryModuleMetadata[new eT.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function eC() {
    return (eC = Object.assign.bind()).apply(null, arguments);
  }
  function eN(e2, t2) {
    try {
      var r2 = e2();
    } catch (e3) {
      return t2(e3);
    }
    return r2 && r2.then ? r2.then(void 0, t2) : r2;
  }
  try {
    var eR = window;
    eR._sentryModuleMetadata = eR._sentryModuleMetadata || {}, eR._sentryModuleMetadata[new eR.Error().stack] = Object.assign({}, eR._sentryModuleMetadata[new eR.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["Form", 0, ({ className: e2, schema: a2, defaultValues: i2, onSubmit: d2, children: h2, formId: p2, mode: g2 = "onSubmit", toolname: v2, tooldescription: b2 }) => {
    let _2 = (function(e3 = {}) {
      let t2 = r.default.useRef(void 0), a3 = r.default.useRef(void 0), i3 = r.default.useRef(e3.formControl), [d3, h3] = r.default.useState(() => ({ ...f(ex), isLoading: O(e3.defaultValues), errors: e3.errors || {}, disabled: e3.disabled || false, defaultValues: O(e3.defaultValues) ? void 0 : e3.defaultValues }));
      if (!t2.current || e3.formControl && i3.current !== e3.formControl) if (i3.current = e3.formControl, e3.formControl) t2.current = { ...e3.formControl, formState: d3 }, e3.defaultValues && !O(e3.defaultValues) && e3.formControl.reset(e3.defaultValues, e3.resetOptions);
      else {
        let { formControl: r2, ...a4 } = (function(e4 = {}) {
          let t3 = { ...eA, ...e4 }, r3 = { ...f(ex), isLoading: O(t3.defaultValues), errors: t3.errors || {}, disabled: t3.disabled || false }, a5 = {}, i4 = (s(t3.defaultValues) || s(t3.values)) && f(t3.defaultValues || t3.values) || {}, d4 = t3.shouldUnregister ? {} : f(i4), h4 = { action: false, actionArrayLengths: /* @__PURE__ */ new Map(), mount: false, watch: false, keepIsValid: false }, p4 = { mount: /* @__PURE__ */ new Set(), disabled: /* @__PURE__ */ new Set(), unMount: /* @__PURE__ */ new Set(), array: /* @__PURE__ */ new Set(), watch: /* @__PURE__ */ new Set(), registerName: /* @__PURE__ */ new Set() }, g4 = {}, v4 = {}, b3 = 0, _3 = B(t3.mode), A3 = B(t3.reValidateMode), M2 = { isDirty: false, dirtyFields: false, validatingFields: false, touchedFields: false, isValidating: false, isValid: false, errors: false }, D2 = { ...M2 }, T2 = { ...D2 }, C2 = { array: en(), state: en() }, N2 = 0, R2 = "all" === t3.criteriaMode, P2 = (e5, t4) => (r4) => {
            clearTimeout(v4[e5]), v4[e5] = setTimeout(t4, r4);
          }, L2 = async (e5) => {
            if (!h4.keepIsValid && !t3.disabled && (D2.isValid || T2.isValid || e5)) {
              let e6, o2 = ++N2;
              t3.resolver ? (e6 = W((await J2()).errors), o2 === N2 && H2()) : e6 = await ei2({ fields: a5, onlyCheckValid: true, eventType: "valid" }), o2 === N2 && e6 !== r3.isValid && C2.state.next({ isValid: e6 });
            }
          }, H2 = (e5, a6) => {
            !t3.disabled && (D2.isValidating || D2.validatingFields || T2.isValidating || T2.validatingFields) && ((e5 || Array.from(p4.mount)).forEach((e6) => {
              e6 && (a6 ? S(r3.validatingFields, e6, a6) : eo(r3.validatingFields, e6));
            }), C2.state.next({ validatingFields: r3.validatingFields, isValidating: !W(r3.validatingFields) }));
          }, Y2 = () => {
            r3.dirtyFields = ep(i4, d4, void 0, a5);
          }, G2 = (e5, t4) => {
            S(r3.errors, e5, t4), r3.errors = { ...r3.errors }, C2.state.next({ errors: r3.errors });
          }, Z2 = (t4, o2, s2, n2) => {
            let u2 = F(a5, t4);
            if (u2) {
              if (((e5) => {
                let t5 = k.test(e5) ? [e5] : E(e5), r4 = d4, a7 = i4;
                for (let e6 = 0; e6 < t5.length - 1; e6++) {
                  let o3 = t5[e6];
                  if (r4 = l(r4) ? r4 : r4[o3], a7 = l(a7) ? a7 : a7[o3], null === r4 && null !== a7) return true;
                }
                return false;
              })(t4) || ((e5) => {
                if (!h4.actionArrayLengths.size) return false;
                let t5 = k.test(e5) ? [e5] : E(e5), r4 = d4, a7 = "", o3 = -1, i5 = 0;
                for (let e6 = 0; e6 < t5.length && !l(r4); e6++) {
                  let l2 = t5[e6];
                  if (a7 = a7 ? `${a7}.${l2}` : l2, Array.isArray(r4) && +l2 >= r4.length) return -1 !== o3 && (e6 !== o3 || +l2 < i5);
                  h4.actionArrayLengths.has(a7) && (o3 = e6 + 1, i5 = h4.actionArrayLengths.get(a7)), r4 = r4[l2];
                }
                return false;
              })(t4)) return;
              let a6 = x(F(d4, t4)), c2 = F(d4, t4, x(s2) ? F(i4, t4) : s2);
              x(c2) || n2 && n2.defaultChecked || o2 ? S(d4, t4, o2 ? c2 : ev(u2._f)) : ef2(t4, c2), h4.mount && !h4.action && (L2(), a6 && r3.isDirty && (D2.isDirty || T2.isDirty) && (es2() || (r3.isDirty = false, C2.state.next({ ...r3 }))), e4.shouldUnregister && a6 && !x(F(d4, t4)) && $(t4, p4) && (h4.watch = true));
            }
          }, X2 = (e5, o2, l2, s2, n2) => {
            let u2 = false, c2 = false, f2 = { name: e5 };
            if (!t3.disabled || true === s2) {
              if (!l2 || s2) {
                let t4 = j(F(i4, e5), o2);
                if ((D2.isDirty || T2.isDirty) && (c2 = r3.isDirty, r3.isDirty = f2.isDirty = !t4 || es2(), u2 = c2 !== f2.isDirty), c2 = !!F(r3.dirtyFields, e5), t4 !== r3.isDirty) {
                  var m2 = r3.dirtyFields, y2 = ep(i4, d4, void 0, a5);
                  for (let e6 in m2) e6 in y2 || delete m2[e6];
                  Object.assign(m2, y2);
                } else t4 ? eo(r3.dirtyFields, e5) : S(r3.dirtyFields, e5, true);
                f2.dirtyFields = r3.dirtyFields, u2 = u2 || (D2.dirtyFields || T2.dirtyFields) && !t4 !== c2;
              }
              if (l2) {
                let t4 = F(r3.touchedFields, e5);
                t4 || (S(r3.touchedFields, e5, l2), f2.touchedFields = r3.touchedFields, u2 = u2 || (D2.touchedFields || T2.touchedFields) && t4 !== l2);
              }
              u2 && n2 && C2.state.next(f2);
            }
            return u2 ? f2 : {};
          }, J2 = async (e5) => (H2(e5, true), await t3.resolver(d4, t3.context, ((e6, t4, r4, a6) => {
            let o2 = {};
            for (let r5 of e6) {
              let e7 = F(t4, r5);
              e7 && S(o2, r5, e7._f);
            }
            return { criteriaMode: r4, names: [...e6], fields: o2, shouldUseNativeValidation: a6 };
          })(e5 || p4.mount, a5, t3.criteriaMode, t3.shouldUseNativeValidation))), Q2 = async (e5) => {
            let { errors: t4 } = await J2(e5);
            if (H2(e5), e5) {
              for (let a6 of e5) {
                let e6 = F(t4, a6);
                e6 ? p4.array.has(a6) && s(e6) && !Object.keys(e6).some((e7) => !Number.isNaN(Number(e7))) ? z(r3.errors, { [a6]: e6 }, a6) : S(r3.errors, a6, e6) : eo(r3.errors, a6);
              }
              r3.errors = { ...r3.errors };
            } else r3.errors = t4;
            return t4;
          }, ee2 = async ({ name: t4, eventType: a6 }) => {
            if (e4.validate) {
              let o2 = await e4.validate({ formValues: d4, formState: r3, name: t4, eventType: a6 });
              if (s(o2)) for (let e5 in o2) {
                let t5 = o2[e5];
                t5 && eS2(`${ek}.${e5}`, { message: I(t5.message) ? t5.message : "", type: t5.type || w });
              }
              else I(o2) || !o2 ? eS2(ek, { message: o2 || "", type: w }) : eO2(ek);
              return o2;
            }
            return true;
          }, ei2 = async ({ fields: a6, onlyCheckValid: o2, name: l2, eventType: i5, context: s2 = { valid: true, runRootValidation: false } }) => {
            if (e4.validate && (s2.runRootValidation = true, !await ee2({ name: l2, eventType: i5 })) && (s2.valid = false, o2)) return s2.valid;
            for (let l3 in a6) {
              let n2 = a6[l3];
              if (n2) {
                let { _f: a7, ...u2 } = n2;
                if (a7) {
                  let l4 = p4.array.has(a7.name), i6 = n2._f && ew(n2._f), u3 = D2.validatingFields || D2.isValidating || T2.validatingFields || T2.isValidating;
                  i6 && u3 && H2([a7.name], true);
                  let c2 = await et(n2, p4.disabled, d4, R2, t3.shouldUseNativeValidation && !o2, l4);
                  if (i6 && u3 && H2([a7.name]), c2[a7.name] && (s2.valid = false, o2) || (o2 || (F(c2, a7.name) ? l4 ? z(r3.errors, c2, a7.name) : S(r3.errors, a7.name, c2[a7.name]) : eo(r3.errors, a7.name)), e4.shouldUseNativeValidation && c2[a7.name])) break;
                }
                W(u2) || await ei2({ context: s2, onlyCheckValid: o2, fields: u2, name: l3, eventType: i5 });
              }
            }
            return s2.valid;
          }, es2 = (e5, t4) => (e5 && t4 && S(d4, e5, t4), !j(h4.mount ? d4 : i4, i4)), ec2 = (e5, t4, r4) => U(e5, p4, { ...h4.mount ? d4 : x(t4) || I(e5) ? i4 : t4 }, r4, t4), ef2 = (e5, t4, r4 = {}, o2 = false, i5 = false, s2 = false) => {
            let n2 = F(a5, e5), u2 = t4;
            if (n2) {
              let r5 = n2._f;
              r5 && (r5.disabled || S(d4, e5, eg(t4, r5)), u2 = q(r5.ref) && l(t4) ? "" : t4, "select-multiple" === r5.ref.type ? [...r5.ref.options].forEach((e6) => e6.selected = u2.includes(e6.value)) : r5.refs ? "checkbox" === r5.ref.type ? r5.refs.forEach((e6) => {
                e6.defaultChecked && e6.disabled || (Array.isArray(u2) ? e6.checked = !!u2.find((t5) => t5 === e6.value) : e6.checked = u2 === e6.value || !!u2);
              }) : r5.refs.forEach((e6) => e6.checked = e6.value === u2) : "file" === r5.ref.type ? r5.ref.value = "" : (r5.ref.value = u2, r5.ref.type || i5 || s2 || C2.state.next({ name: e5, values: o2 ? d4 : f(d4) })));
            }
            (r4.shouldDirty || r4.shouldTouch) && X2(e5, u2, r4.shouldTouch, r4.shouldDirty, !i5), r4.shouldValidate && eE2(e5, { delayError: r4.delayError });
          }, em2 = (e5, t4, r4, l2 = false, i5 = false, n2 = false) => {
            for (let u2 in p4.array.has(e5) && C2.array.next({ name: e5, values: l2 ? d4 : f(d4) }), t4) {
              if (!t4.hasOwnProperty(u2)) return;
              let d5 = t4[u2], c2 = e5 + "." + u2, f2 = F(a5, c2);
              (p4.array.has(e5) || s(d5) || f2 && !f2._f) && !o(d5) ? em2(c2, d5, r4, l2, i5, n2) : ef2(c2, d5, r4, l2, i5, n2);
            }
          }, ey2 = (e5, t4, o2, i5, s2 = false) => {
            let n2 = F(a5, e5), u2 = p4.array.has(e5), c2 = i5 ? t4 : f(t4), m2 = j(F(d4, e5), c2);
            if (m2 || S(d4, e5, c2), u2) C2.array.next({ name: e5, values: i5 ? d4 : f(d4) }), (D2.isDirty || D2.dirtyFields || T2.isDirty || T2.dirtyFields) && o2.shouldDirty && (Y2(), s2 || C2.state.next({ name: e5, dirtyFields: r3.dirtyFields, isDirty: es2(e5, c2) }));
            else {
              let t5 = Array.isArray(c2) && !c2.length || W(c2), r4 = !m2 && !s2;
              !n2 || n2._f || l(c2) || t5 ? ef2(e5, c2, o2, i5, s2, r4) : em2(e5, c2, o2, i5, s2, r4);
            }
            if (!m2 && !s2) {
              let t5 = $(e5, p4), a6 = i5 ? d4 : f(d4);
              C2.state.next({ ...t5 && r3, name: h4.mount || t5 ? e5 : void 0, values: a6 });
            }
          }, eh2 = (e5, t4, r4 = {}) => ey2(e5, t4, r4, false), e_2 = async (l2) => {
            h4.mount = true;
            let i5 = l2.target, s2 = i5.name, u2 = true, c2 = F(a5, s2), y2 = (e5) => {
              u2 = Number.isNaN(e5) || o(e5) && isNaN(e5.getTime()) || j(e5, F(d4, s2, e5));
            };
            if (c2) {
              var w2, V2, k2, x2, M3;
              let o2, h5, I2, U2 = i5.type ? ev(c2._f) : n(l2), B2 = l2.type === m || "focusout" === l2.type, K2 = !((I2 = c2._f).mount && (I2.required || I2.min || I2.max || I2.maxLength || I2.minLength || I2.pattern || I2.validate)) && !e4.validate && !t3.resolver && !F(r3.errors, s2) && !c2._f.deps, z2 = K2 || (w2 = B2, V2 = F(r3.touchedFields, s2), k2 = r3.isSubmitted, x2 = A3, !(M3 = _3).isOnAll && (!k2 && M3.isOnTouch ? !(V2 || w2) : (k2 ? x2.isOnBlur : M3.isOnBlur) ? !w2 : (k2 ? !x2.isOnChange : !M3.isOnChange) || w2)), q2 = $(s2, p4, B2);
              if (S(d4, s2, U2), B2) {
                if (!i5 || !i5.readOnly) {
                  c2._f.onBlur && c2._f.onBlur(l2);
                  let e5 = g4[s2];
                  e5 && e5(0);
                }
              } else c2._f.onChange && c2._f.onChange(l2);
              let Y3 = X2(s2, U2, B2), Z3 = !W(Y3) || q2;
              if (B2 || C2.state.next({ name: s2, type: l2.type, ...b3 ? { values: f(d4) } : {} }), z2) return (!K2 || !r3.isValid) && (D2.isValid || T2.isValid) && ("onBlur" === t3.mode ? B2 && L2() : B2 || L2()), Z3 && C2.state.next({ name: s2, ...q2 ? {} : Y3 });
              if (!t3.resolver && e4.validate && await ee2({ name: s2, eventType: l2.type }), !B2 && q2 && C2.state.next({ ...r3 }), t3.resolver) {
                let { errors: e5 } = await J2([s2]);
                if (H2([s2]), y2(U2), !u2) {
                  W(Y3) || C2.state.next(Y3);
                  return;
                }
                let t4 = eV(r3.errors, a5, s2), l3 = eV(e5, a5, t4.name || s2);
                o2 = l3.error, s2 = l3.name, h5 = W(e5);
              } else H2([s2], true), o2 = (await et(c2, p4.disabled, d4, R2, t3.shouldUseNativeValidation))[s2], H2([s2]), y2(U2), u2 && (o2 ? h5 = false : (D2.isValid || T2.isValid) && (h5 = await ei2({ fields: a5, onlyCheckValid: true, name: s2, eventType: l2.type })));
              if (u2) {
                c2._f.deps && (!Array.isArray(c2._f.deps) || c2._f.deps.length > 0) && eE2(c2._f.deps);
                var E2 = s2, O2 = h5, N3 = o2;
                let e5 = F(r3.errors, E2), a6 = (D2.isValid || T2.isValid) && "boolean" == typeof O2 && r3.isValid !== O2;
                if (t3.delayError && N3 ? (g4[E2] = P2(E2, () => G2(E2, N3)), g4[E2](t3.delayError)) : (clearTimeout(v4[E2]), delete g4[E2], N3 ? S(r3.errors, E2, N3) : eo(r3.errors, E2), r3.errors = { ...r3.errors }), (N3 ? !j(e5, N3) : e5) || !W(Y3) || a6) {
                  let e6 = { ...Y3, ...a6 && "boolean" == typeof O2 ? { isValid: O2 } : {}, errors: r3.errors, name: E2 };
                  r3 = { ...r3, ...e6 }, C2.state.next(e6);
                }
              }
            }
          }, eM2 = (e5, t4) => {
            if (F(r3.errors, t4) && e5.focus) return e5.focus(), 1;
          }, eE2 = async (e5, o2 = {}) => {
            let l2, i5, s2 = er(e5);
            if (t3.resolver) {
              let t4 = await Q2(x(e5) ? e5 : s2);
              l2 = W(t4), i5 = e5 ? !s2.some((e6) => F(t4, e6)) : l2;
            } else e5 ? ((i5 = (await Promise.all(s2.map(async (e6) => {
              let t4 = F(a5, e6);
              return await ei2({ fields: t4 && t4._f ? { [e6]: t4 } : t4, eventType: y });
            }))).every(Boolean)) || r3.isValid) && L2() : i5 = l2 = await ei2({ fields: a5, name: e5, eventType: y });
            if (o2.delayError && t3.delayError && I(e5)) {
              let a6 = F(r3.errors, e5);
              a6 ? (eo(r3.errors, e5), g4[e5] = P2(e5, () => G2(e5, a6)), g4[e5](t3.delayError)) : (clearTimeout(v4[e5]), delete g4[e5]);
            }
            return C2.state.next({ ...!I(e5) || (D2.isValid || T2.isValid) && l2 !== r3.isValid ? {} : { name: e5 }, ...t3.resolver || !e5 ? { isValid: l2 } : {}, errors: r3.errors }), o2.shouldFocus && !i5 && K(a5, eM2, e5 ? s2 : p4.mount), i5;
          }, eF2 = (e5, t4) => ({ invalid: !!F((t4 || r3).errors, e5), isDirty: !!F((t4 || r3).dirtyFields, e5), error: F((t4 || r3).errors, e5), isValidating: !!F(r3.validatingFields, e5), isTouched: !!F((t4 || r3).touchedFields, e5) }), eO2 = (e5) => {
            let t4 = e5 ? er(e5) : void 0;
            null == t4 || t4.forEach((e6) => eo(r3.errors, e6)), t4 ? t4.forEach((e6) => {
              C2.state.next({ name: e6, errors: r3.errors });
            }) : (r3.errors = {}, C2.state.next({ errors: r3.errors }));
          }, eS2 = (e5, t4, o2) => {
            let l2 = (F(a5, e5, { _f: {} })._f || {}).ref, { ref: i5, message: s2, type: n2, ...u2 } = F(r3.errors, e5) || {};
            S(r3.errors, e5, { ...u2, ...t4, ref: l2 }), C2.state.next({ name: e5, errors: r3.errors, isValid: false }), o2 && o2.shouldFocus && l2 && l2.focus && l2.focus();
          }, eD2 = (e5) => {
            var t4;
            let a6 = !!(null == (t4 = e5.formState) ? void 0 : t4.values);
            a6 && b3++;
            let { unsubscribe: o2 } = C2.state.subscribe({ next: (t5) => {
              var a7, o3;
              let l3, s2, n2, u2;
              if (l3 = e5.name, s2 = t5.name, n2 = e5.exact, (!l3 || !s2 || l3 === s2 || er(l3).some((e6) => e6 && (n2 ? e6 === s2 || e6.startsWith(s2 + ".") : e6.startsWith(s2) || s2.startsWith(e6)))) && (a7 = e5.formState || D2, o3 = e5.reRenderRoot, eU2(t5), !(u2 = Object.keys(t5).filter((e6) => "name" !== e6)).length || o3 && u2.length >= Object.keys(a7).length || u2.find((e6) => a7[e6] === (!o3 || "all")))) {
                let a8 = { ...d4 };
                e5.callback({ values: a8, ...r3, ...t5, defaultValues: i4 });
              }
            } });
            if (!a6) return o2;
            let l2 = false;
            return () => {
              l2 || (l2 = true, b3--, o2());
            };
          }, eT2 = (e5, o2 = {}) => {
            for (let l2 of e5 ? er(e5) : p4.mount) p4.mount.delete(l2), p4.array.delete(l2), o2.keepValue || (eo(a5, l2), eo(d4, l2)), o2.keepError || eo(r3.errors, l2), o2.keepDirty || eo(r3.dirtyFields, l2), o2.keepTouched || eo(r3.touchedFields, l2), o2.keepIsValidating || eo(r3.validatingFields, l2), t3.shouldUnregister || o2.keepDefaultValue || eo(i4, l2);
            C2.state.next({ values: f(d4) }), C2.state.next({ ...r3, ...!o2.keepDirty ? {} : { isDirty: es2() } }), o2.keepIsValid || L2();
          }, eC2 = ({ disabled: e5, name: t4 }) => {
            if ("boolean" == typeof e5 && h4.mount || e5 || p4.disabled.has(t4)) {
              let r4 = p4.disabled.has(t4);
              e5 ? p4.disabled.add(t4) : p4.disabled.delete(t4), !!e5 !== r4 && h4.mount && !h4.action && L2();
            }
          }, eN2 = (e5, r4 = {}) => {
            let o2 = F(a5, e5), l2 = "boolean" == typeof r4.disabled || "boolean" == typeof t3.disabled, s2 = !p4.registerName.has(e5) && o2 && o2._f && !o2._f.mount;
            return (S(a5, e5, { ...o2 || {}, _f: { ...o2 && o2._f ? o2._f : { ref: { name: e5 } }, name: e5, mount: true, ...r4 } }), p4.mount.add(e5), o2 && !s2) ? eC2({ disabled: "boolean" == typeof r4.disabled ? r4.disabled : t3.disabled, name: e5 }) : Z2(e5, true, r4.value), { ...l2 ? { disabled: r4.disabled || t3.disabled } : {}, ...t3.progressive ? { required: !!r4.required, min: eb(r4.min), max: eb(r4.max), minLength: eb(r4.minLength), maxLength: eb(r4.maxLength), pattern: eb(r4.pattern) } : {}, name: e5, onChange: e_2, onBlur: e_2, ref: (l3) => {
              if (l3) {
                let t4;
                p4.registerName.add(e5), eN2(e5, r4), p4.registerName.delete(e5), o2 = F(a5, e5);
                let s3 = x(l3.value) && l3.querySelectorAll && l3.querySelectorAll("input,select,textarea")[0] || l3, n2 = "radio" === (t4 = s3).type || "checkbox" === t4.type, u2 = o2._f.refs || [];
                if (n2 ? u2.find((e6) => e6 === s3) : s3 === o2._f.ref) return;
                let d5 = { ...o2._f };
                n2 ? (d5.refs = [...u2.filter(eu), s3, ...Array.isArray(F(i4, e5)) ? [{}] : []], d5.ref = { type: s3.type, name: e5 }) : (d5.ref = s3, delete d5.refs), S(a5, e5, { _f: d5 }), Z2(e5, false, void 0, s3);
              } else (o2 = F(a5, e5, {}))._f && (o2._f.mount = false), (t3.shouldUnregister || r4.shouldUnregister) && !(u(p4.array, e5) && h4.action) && p4.unMount.add(e5);
            } };
          }, eR2 = () => t3.shouldFocusError && !t3.shouldUseNativeValidation && K(a5, eM2, p4.mount), ej2 = (e5, o2) => async (l2) => {
            let i5, s2;
            l2 && (l2.preventDefault && l2.preventDefault(), l2.persist && l2.persist());
            let n2 = f(d4);
            if (C2.state.next({ isSubmitting: true }), t3.resolver) {
              let { errors: e6, values: t4 } = await J2();
              H2(), r3.errors = e6, n2 = f(t4);
            } else await ei2({ fields: a5, eventType: "submit" });
            if (p4.disabled.size) for (let e6 of p4.disabled) eo(n2, e6);
            if (eo(r3.errors, V), W(r3.errors)) {
              C2.state.next({ errors: {} });
              try {
                i5 = await e5(n2, l2);
              } catch (e6) {
                s2 = e6;
              }
            } else o2 && await o2({ ...r3.errors }, l2), eR2(), setTimeout(eR2);
            if (C2.state.next({ isSubmitted: true, isSubmitting: false, isSubmitSuccessful: W(r3.errors) && !s2, submitCount: r3.submitCount + 1, errors: r3.errors }), s2) throw s2;
            return i5;
          }, eP2 = (e5, o2 = {}) => {
            let l2 = e5 ? f(e5) : i4, s2 = f(l2), n2 = W(e5), u2 = a5;
            if (o2.keepDefaultValues || (i4 = l2), !o2.keepValues) {
              if (o2.keepDirtyValues) for (let e6 of Array.from(/* @__PURE__ */ new Set([...p4.mount, ...(function e7(t4, r4, a6 = "", o3 = []) {
                for (let l3 in t4) {
                  let i5 = a6 ? `${a6}.${l3}` : l3, s3 = t4[l3];
                  ed(s3) && ed(F(r4, i5)) ? e7(s3, r4, i5, o3) : o3.push(i5);
                }
                return o3;
              })(ep(i4, d4, void 0, u2), r3.dirtyFields)]))) {
                let t4 = F(r3.dirtyFields, e6), a6 = F(d4, e6), o3 = F(s2, e6);
                t4 && !x(a6) ? S(s2, e6, a6) : t4 || x(o3) || eh2(e6, o3);
              }
              else {
                if (c && x(e5)) for (let e6 of p4.mount) {
                  let t4 = F(a5, e6);
                  if (t4 && t4._f) {
                    let e7 = Array.isArray(t4._f.refs) ? t4._f.refs[0] : t4._f.ref;
                    if (q(e7)) {
                      let t5 = e7.closest("form");
                      if (t5) {
                        t5.reset();
                        break;
                      }
                    }
                  }
                }
                if (o2.keepFieldsRef) for (let e6 of p4.mount) eh2(e6, F(s2, e6));
                else a5 = {};
              }
              if (t3.shouldUnregister) {
                if (d4 = o2.keepDefaultValues ? f(i4) : {}, o2.keepFieldsRef) for (let e6 of p4.mount) S(d4, e6, F(s2, e6));
              } else d4 = f(s2);
              C2.array.next({ values: { ...s2 } }), C2.state.next({ name: void 0, type: void 0, values: { ...s2 } });
            }
            p4 = { mount: o2.keepDirtyValues ? p4.mount : /* @__PURE__ */ new Set(), unMount: /* @__PURE__ */ new Set(), array: /* @__PURE__ */ new Set(), registerName: /* @__PURE__ */ new Set(), disabled: /* @__PURE__ */ new Set(), watch: /* @__PURE__ */ new Set(), watchAll: false, focus: "" }, h4.mount = !D2.isValid || !!o2.keepIsValid || !!o2.keepDirtyValues || !t3.shouldUnregister && !W(s2), h4.watch = !!t3.shouldUnregister, h4.keepIsValid = !!o2.keepIsValid, h4.action = false, h4.actionArrayLengths.clear(), o2.keepErrors || (r3.errors = {}), C2.state.next({ submitCount: o2.keepSubmitCount ? r3.submitCount : 0, isDirty: !n2 && (o2.keepDirty ? r3.isDirty : o2.keepValues ? es2() : !!(o2.keepDefaultValues && !j(e5, i4))), isSubmitted: !!o2.keepIsSubmitted && r3.isSubmitted, dirtyFields: n2 ? {} : o2.keepDirtyValues ? o2.keepDefaultValues && d4 ? ep(i4, d4, void 0, u2) : r3.dirtyFields : o2.keepDefaultValues && e5 ? ep(i4, e5, void 0, u2) : o2.keepDirty ? r3.dirtyFields : {}, touchedFields: o2.keepTouched ? r3.touchedFields : {}, errors: o2.keepErrors ? r3.errors : {}, isSubmitSuccessful: !!o2.keepIsSubmitSuccessful && r3.isSubmitSuccessful, isSubmitting: false, defaultValues: i4 });
          }, eI2 = (e5, r4) => eP2(O(e5) ? e5(d4) : e5, { ...t3.resetOptions, ...r4 }), eU2 = (e5) => {
            let { name: t4, type: a6, values: o2, ...l2 } = e5;
            r3 = { ...r3, ...l2 };
          };
          C2.state.subscribe({ next: eU2 });
          let eL2 = { control: { register: eN2, unregister: eT2, getFieldState: eF2, handleSubmit: ej2, setError: eS2, _subscribe: eD2, _runSchema: J2, _updateIsValidating: H2, _focusError: eR2, _getWatch: ec2, _getDirty: es2, _setValid: L2, _setFieldArray: (e5, o2 = [], l2, i5, s2 = true, n2 = true) => {
            if (i5 && l2 && !t3.disabled) {
              if (h4.action = true, !h4.actionArrayLengths.has(e5)) {
                let t4 = F(a5, e5);
                h4.actionArrayLengths.set(e5, Array.isArray(t4) ? t4.length : 0);
              }
              if (n2 && Array.isArray(F(a5, e5))) {
                let t4 = l2(F(a5, e5), i5.argA, i5.argB);
                s2 && S(a5, e5, t4);
              }
              if (n2 && Array.isArray(F(r3.errors, e5))) {
                var u2;
                let t4, a6 = F(r3.errors, e5), o3 = a6.root, n3 = l2(a6, i5.argA, i5.argB) || a6;
                o3 && (n3.root = o3), s2 && S(r3.errors, e5, n3), ea(t4 = F(u2 = r3.errors, e5)).length || (null == t4 ? void 0 : t4.root) || eo(u2, e5);
              }
              if ((D2.touchedFields || T2.touchedFields) && n2 && Array.isArray(F(r3.touchedFields, e5))) {
                let t4 = l2(F(r3.touchedFields, e5), i5.argA, i5.argB);
                s2 && S(r3.touchedFields, e5, t4);
              }
              (D2.dirtyFields || T2.dirtyFields) && Y2(), C2.state.next({ name: e5, isDirty: es2(e5, o2), dirtyFields: r3.dirtyFields, errors: r3.errors, isValid: r3.isValid });
            } else S(d4, e5, o2);
          }, _setDisabledField: eC2, _setErrors: (e5) => {
            r3.errors = e5, C2.state.next({ errors: r3.errors, isValid: false });
          }, _getFieldArray: (e5) => ea(F(h4.mount ? d4 : i4, e5, t3.shouldUnregister ? F(i4, e5, []) : [])), _reset: eP2, _resetDefaultValues: () => O(t3.defaultValues) && t3.defaultValues().then((e5) => {
            eI2(e5, t3.resetOptions), C2.state.next({ isLoading: false });
          }), _removeUnmounted: () => {
            for (let e5 of p4.unMount) {
              let t4 = F(a5, e5);
              t4 && (t4._f.refs ? t4._f.refs.every((e6) => !eu(e6)) : !eu(t4._f.ref)) && eT2(e5);
            }
            p4.unMount = /* @__PURE__ */ new Set();
          }, _disableForm: (e5) => {
            "boolean" == typeof e5 && (C2.state.next({ disabled: e5 }), K(a5, (t4, r4) => {
              let o2 = F(a5, r4);
              o2 && (t4.disabled = o2._f.disabled || e5, Array.isArray(o2._f.refs) && o2._f.refs.forEach((t5) => {
                t5.disabled = o2._f.disabled || e5;
              }));
            }, 0, false));
          }, _subjects: C2, _proxyFormState: D2, get _fields() {
            return a5;
          }, get _formValues() {
            return d4;
          }, get _state() {
            return h4;
          }, set _state(value) {
            h4 = value;
          }, get _defaultValues() {
            return i4;
          }, get _names() {
            return p4;
          }, set _names(value) {
            p4 = value;
          }, get _formState() {
            return r3;
          }, get _options() {
            return t3;
          }, set _options(value) {
            _3 = B((t3 = { ...t3, ...value }).mode), A3 = B(t3.reValidateMode);
          } }, subscribe: (e5) => (h4.mount = true, T2 = { ...T2, ...e5.formState }, eD2({ ...e5, formState: { ...M2, ...e5.formState } })), trigger: eE2, register: eN2, handleSubmit: ej2, watch: (e5, t4) => {
            if (O(e5)) {
              b3++;
              let { unsubscribe: r4 } = C2.state.subscribe({ next: (r5) => "values" in r5 && e5(r5.values || ec2(void 0, t4), r5) }), a6 = false;
              return { unsubscribe: () => {
                a6 || (a6 = true, b3--, r4());
              } };
            }
            return ec2(e5, t4, true);
          }, setValue: eh2, setValues: (e5, t4 = {}) => {
            let a6 = O(e5) ? e5(d4) : e5;
            if (!j(d4, a6)) {
              d4 = { ...d4, ...a6 };
              let e6 = el(a6);
              for (let r4 of p4.mount) r4 in e6 && ey2(r4, e6[r4], t4, true, true);
              C2.state.next({ ...r3, name: void 0, type: void 0, ...b3 ? { values: d4 } : {} }), t4.shouldValidate && L2();
            }
          }, getValues: (e5, t4) => {
            let a6 = { ...h4.mount ? d4 : i4 };
            return t4 && (a6 = (function e6(t5, r4) {
              let a7 = {};
              for (let o2 in t5) if (t5.hasOwnProperty(o2)) {
                let l2 = t5[o2], i5 = r4[o2];
                if (l2 && s(l2) && i5) {
                  let t6 = e6(l2, i5);
                  s(t6) && (a7[o2] = t6);
                } else t5[o2] && (a7[o2] = i5);
              }
              return a7;
            })(t4.dirtyFields ? r3.dirtyFields : r3.touchedFields, a6)), x(e5) ? a6 : I(e5) ? F(a6, e5) : e5.map((e6) => F(a6, e6));
          }, reset: eI2, resetField: (e5, t4 = {}) => {
            F(a5, e5) && (x(t4.defaultValue) ? eh2(e5, f(F(i4, e5))) : (eh2(e5, t4.defaultValue), S(i4, e5, f(t4.defaultValue))), t4.keepTouched || eo(r3.touchedFields, e5), t4.keepDirty || (eo(r3.dirtyFields, e5), r3.isDirty = t4.defaultValue ? es2(e5, f(F(i4, e5))) : es2()), !t4.keepError && (eo(r3.errors, e5), D2.isValid && L2()), C2.state.next({ ...r3 }));
          }, resetDefaultValues: (e5, t4 = {}) => {
            if (i4 = f(e5), !t4.keepDirty) {
              let e6 = ep(i4, d4, void 0, a5);
              r3.dirtyFields = e6, r3.isDirty = !W(e6);
            }
            t4.keepIsValid || L2(), C2.state.next({ ...r3, defaultValues: i4 });
          }, clearErrors: eO2, unregister: eT2, setError: eS2, setFocus: (e5, t4 = {}) => {
            let r4 = F(a5, e5), o2 = r4 && r4._f;
            if (o2) {
              let e6 = o2.refs ? o2.refs[0] : o2.ref;
              e6.focus && setTimeout(() => {
                e6.focus(), t4.shouldSelect && O(e6.select) && e6.select();
              });
            }
          }, getFieldState: eF2 };
          return { ...eL2, formControl: eL2 };
        })(e3);
        t2.current = { ...a4, formState: d3 };
      }
      let p3 = t2.current.control;
      p3._options = e3;
      let { resyncIfNeeded: g3, snapshot: v3 } = P();
      return C(() => {
        let e4 = () => ({ ...p3._formState, defaultValues: p3._defaultValues });
        g3(true, e4, h3);
        let t3 = p3._subscribe({ formState: p3._proxyFormState, callback: () => h3({ ...p3._formState, defaultValues: p3._defaultValues }), reRenderRoot: true });
        return h3((e5) => ({ ...e5, isReady: true })), p3._formState.isReady = true, () => {
          t3(), v3(true, e4);
        };
      }, [p3, g3, v3]), r.default.useEffect(() => p3._disableForm(e3.disabled), [p3, e3.disabled]), r.default.useEffect(() => {
        e3.mode && (p3._options.mode = e3.mode), e3.reValidateMode && (p3._options.reValidateMode = e3.reValidateMode);
      }, [p3, e3.mode, e3.reValidateMode]), r.default.useEffect(() => {
        e3.errors && (p3._setErrors(e3.errors), p3._focusError());
      }, [p3, e3.errors]), r.default.useEffect(() => {
        e3.shouldUnregister && p3._subjects.state.next({ values: p3._getWatch() });
      }, [p3, e3.shouldUnregister]), r.default.useEffect(() => {
        if (p3._proxyFormState.isDirty) {
          let e4 = p3._getDirty();
          e4 !== d3.isDirty && p3._subjects.state.next({ isDirty: e4 });
        }
      }, [p3, d3.isDirty]), r.default.useEffect(() => {
        var t3;
        e3.values && !j(e3.values, a3.current) ? (p3._reset(e3.values, { keepFieldsRef: true, ...p3._options.resetOptions }), (null == (t3 = p3._options.resetOptions) ? void 0 : t3.keepIsValid) || p3._setValid(), a3.current = e3.values, h3((e4) => ({ ...e4 }))) : p3._resetDefaultValues();
      }, [p3, e3.values]), r.default.useEffect(() => {
        p3._state.mount || (p3._setValid(), p3._state.mount = true), p3._state.watch && (p3._state.watch = false, p3._subjects.state.next({ ...p3._formState })), p3._removeUnmounted();
      }), t2.current.formState = r.default.useMemo(() => T(d3, p3), [p3, d3]), t2.current;
    })({ defaultValues: i2, mode: g2, resolver: (function(e3, t2) {
      if (void 0 === t2 && (t2 = {}), "_zod" in e3 && "object" == typeof e3._zod) return function(r2, a3, o2) {
        try {
          return Promise.resolve(eN(function() {
            function a4(e4) {
              return o2.shouldUseNativeValidation && eF({}, o2), { errors: {}, values: t2.raw ? Object.assign({}, r2) : e4 };
            }
            return "sync" === t2.mode ? a4(e3.parse(r2, void 0)) : Promise.resolve(e3.parseAsync(r2, void 0)).then(a4);
          }, function(e4) {
            var t3;
            if (!(null == e4 || null == (t3 = e4._zod) || null == (t3 = t3.traits) || !t3.has("$ZodError"))) return { values: {}, errors: eO((function(e5, t4) {
              for (var r3 = /* @__PURE__ */ Object.create(null); e5.length; ) !(function() {
                var a4 = e5[0], o3 = a4.code, l2 = a4.message, i3 = a4.path.join(".");
                if (!r3[i3]) if ("invalid_union" === a4.code && a4.errors.length > 0) {
                  var s2, n2, u2 = a4.errors.reduce(function(e6, t5) {
                    return t5.length < e6.length ? t5 : e6;
                  })[0];
                  r3[i3] = { message: null != (s2 = null == u2 ? void 0 : u2.message) ? s2 : l2, type: null != (n2 = null == u2 ? void 0 : u2.code) ? n2 : o3 };
                } else r3[i3] = { message: l2, type: o3 };
                if ("invalid_union" === a4.code && a4.errors.forEach(function(t5) {
                  return t5.forEach(function(t6) {
                    return e5.push(eC({}, t6, { path: [].concat(a4.path, t6.path) }));
                  });
                }), t4) {
                  var d3 = r3[i3].types, c2 = d3 && d3[a4.code];
                  r3[i3] = H(i3, t4, r3, o3, c2 ? [].concat(c2, a4.message) : a4.message);
                }
                e5.shift();
              })();
              return r3;
            })(e4.issues, !o2.shouldUseNativeValidation && "all" === o2.criteriaMode), o2) };
            throw e4;
          }));
        } catch (e4) {
          return Promise.reject(e4);
        }
      };
      if ("_def" in e3 && "object" == typeof e3._def) return function(r2, a3, o2) {
        try {
          return Promise.resolve(eN(function() {
            return Promise.resolve(e3["sync" === t2.mode ? "parse" : "parseAsync"](r2, void 0)).then(function(e4) {
              return o2.shouldUseNativeValidation && eF({}, o2), { errors: {}, values: t2.raw ? Object.assign({}, r2) : e4 };
            });
          }, function(e4) {
            if (Array.isArray(null == e4 ? void 0 : e4.issues)) return { values: {}, errors: eO((function(e5, t3) {
              for (var r3 = /* @__PURE__ */ Object.create(null); e5.length; ) {
                var a4 = e5[0], o3 = a4.code, l2 = a4.message, i3 = a4.path.join(".");
                if (!r3[i3]) if ("unionErrors" in a4) {
                  var s2, n2, u2 = a4.unionErrors.reduce(function(e6, t4) {
                    return t4.errors.length < e6.errors.length ? t4 : e6;
                  }).errors[0];
                  r3[i3] = { message: null != (s2 = null == u2 ? void 0 : u2.message) ? s2 : l2, type: null != (n2 = null == u2 ? void 0 : u2.code) ? n2 : o3 };
                } else r3[i3] = { message: l2, type: o3 };
                if ("unionErrors" in a4 && a4.unionErrors.forEach(function(t4) {
                  return t4.errors.forEach(function(t5) {
                    return e5.push(t5);
                  });
                }), t3) {
                  var d3 = r3[i3].types, c2 = d3 && d3[a4.code];
                  r3[i3] = H(i3, t3, r3, o3, c2 ? [].concat(c2, a4.message) : a4.message);
                }
                e5.shift();
              }
              return r3;
            })(e4.errors, !o2.shouldUseNativeValidation && "all" === o2.criteriaMode), o2) };
            throw e4;
          }));
        } catch (e4) {
          return Promise.reject(e4);
        }
      };
      throw Error("Invalid input: not a Zod schema");
    })(a2) }), { isSubmitting: A2 } = _2.formState;
    return (0, t.jsx)(es, { ..._2, children: (0, t.jsx)("form", { onSubmit: _2.handleSubmit(d2), className: e2, id: p2, ...v2 ? { toolname: v2 } : {}, ...b2 ? { tooldescription: b2 } : {}, children: h2({ isSubmitting: A2 }) }) });
  }], 23210);
  var ej = e.i(45240);
  try {
    var eP = "u" > typeof window ? window : e.g;
    eP._sentryModuleMetadata = eP._sentryModuleMetadata || {}, eP._sentryModuleMetadata[new eP.Error().stack] = Object.assign({}, eP._sentryModuleMetadata[new eP.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var eI = Object.defineProperty, eU = r.forwardRef(eI(function(e2, r2) {
    return (0, t.jsx)(ej.Primitive.label, { ...e2, ref: r2, onMouseDown: (t2) => {
      t2.target.closest("button, input, select, textarea") || (e2.onMouseDown?.(t2), !t2.defaultPrevented && t2.detail > 1 && t2.preventDefault());
    } });
  }, "name", { value: "Label", configurable: true })), eL = e.i(603642), eB = e.i(551360);
  try {
    var e$ = window;
    e$._sentryModuleMetadata = e$._sentryModuleMetadata || {}, e$._sentryModuleMetadata[new e$.Error().stack] = Object.assign({}, e$._sentryModuleMetadata[new e$.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let eK = (0, eL.createSlot)("FormField"), ez = ({ name: e2, label: a2, description: o2, children: l2, floatError: i2 = false }) => {
    let { control: s2 } = r.default.useContext(ei), { getFieldState: n2, formState: u2 } = r.default.useContext(ei), d2 = n2(e2, u2), c2 = d2.error?.message, f2 = (0, r.useId)(), m2 = `${f2}-message`, y2 = `${f2}-description`, h2 = [o2 && y2, c2 && m2].filter(Boolean).join(" ") || void 0;
    return (0, t.jsxs)("div", { className: (0, eB.cn)("flex flex-col gap-y-1.5", { relative: i2 }), children: [!!a2 && (0, t.jsx)(eU, { className: (0, eB.cn)("nowrap text-ellipsis text-accent-foreground text-xs"), htmlFor: f2, children: a2 }), (0, t.jsx)(L, { name: e2, control: s2, render: ({ field: { ref: e3, ...r2 } }) => (0, t.jsx)(eK, { id: f2, isError: !!c2, "aria-describedby": h2, "aria-invalid": !!c2, ...r2, children: l2 }) }), !!o2 && (0, t.jsx)("p", { id: y2, className: "text-accent-foreground text-xs", children: o2 }), !!c2 && (0, t.jsx)("p", { id: m2, className: (0, eB.cn)("fade-in animate-in font-normal text-red-600 text-xs duration-300 ease-out", { "absolute top-full right-0 left-0 mt-1.5": i2 }), children: c2 })] });
  };
  e.s(["FormField", 0, ez], 833288);
  var eW = e.i(620996);
  try {
    var eq = window;
    eq._sentryModuleMetadata = eq._sentryModuleMetadata || {}, eq._sentryModuleMetadata[new eq.Error().stack] = Object.assign({}, eq._sentryModuleMetadata[new eq.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["FormTextField", 0, ({ name: e2, label: r2, floatError: a2, ...o2 }) => (0, t.jsx)(ez, { name: e2, label: r2, floatError: a2, children: (0, t.jsx)(eW.FormTextInput, { ...o2 }) })], 733332);
  var eH = e.i(791768);
  try {
    var eY = window;
    eY._sentryModuleMetadata = eY._sentryModuleMetadata || {}, eY._sentryModuleMetadata[new eY.Error().stack] = Object.assign({}, eY._sentryModuleMetadata[new eY.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let eG = eH.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;
  async function eZ(e2) {
    if (!window.grecaptcha) return {};
    try {
      await new Promise((e3) => window.grecaptcha?.ready(e3));
      let t2 = await window.grecaptcha.execute(eG, { action: e2 });
      return t2 ? { "X-Captcha-Token": t2 } : {};
    } catch {
      return {};
    }
  }
  e.s(["getCaptchaHeaders", 0, eZ], 542958);
  try {
    var eX = window;
    eX._sentryModuleMetadata = eX._sentryModuleMetadata || {}, eX._sentryModuleMetadata[new eX.Error().stack] = Object.assign({}, eX._sentryModuleMetadata[new eX.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let eJ = Array.from({ length: 10 }, (e2, t2) => ((/* @__PURE__ */ new Date()).getFullYear() - t2).toString()).reverse(), eQ = { BOT_CHECK: "bot-check", COMPANY_PERSON_ASSERTION: "company-person-assertion", CREATING_TICKET: "creating-ticket", ENTRY_CREATION: "entry-creation", FILE_UPLOAD: "file-upload", FORM_VALIDATION: "form-validation", INTERNAL_ERROR: "internal-error", TRACK_EVENT: "track-event", UNKNOWN_ERROR: "unknown-error" };
  e.s(["CAREERS_CTA_EVENT", 0, "careers_cta_submitted", "CUSTOMER_EVENTS", 0, ["email_cta_submitted", "careers_cta_submitted", "changelog_subscribed"], "FORM_ERROR_CODES", 0, eQ, "PUBLIC_EMAIL_PROVIDERS", 0, ["me.com", "icloud.com", "mac.com", "mobile.me", "gmail.com", "googlemail.com", "outlook.com", "hotmail.com", "live.com", "msn.com", "outlook.com", "hotmail.co.uk", "hotmail.at", "hotmail.bs", "hotmail.ca", "hotmail.co.il", "hotmail.com.ar", "hotmail.com.au", "hotmail.com.br", "hotmail.com.tr", "hotmail.de", "hotmail.ch", "hotmail.dk", "hotmail.es", "hotmail.fr", "hotmail.it", "hotmail.se", "live.at", "live.be", "live.ca", "live.cl", "live.cn", "live.de", "live.dk", "live.fr", "live.hk", "live.se", "windowslive.com", "geocities.com", "kimo.com", "maktoob.com", "oddpost.com", "yahoo.at", "yahoo.be", "yahoo.bg", "yahoo.ca", "yahoo.cl", "yahoo.co.hu", "yahoo.co.id", "yahoo.co.il", "yahoo.co.in", "yahoo.co.kr", "yahoo.co.nz", "yahoo.co.th", "yahoo.co.uk", "yahoo.co.za", "yahoo.com", "yahoo.com.ar", "yahoo.com.au", "yahoo.com.br", "yahoo.com.cn", "yahoo.com.co", "yahoo.com.hk", "yahoo.com.hr", "yahoo.com.mx", "yahoo.com.my", "yahoo.com.pe", "yahoo.com.ph", "yahoo.com.sg", "yahoo.com.tr", "yahoo.com.tw", "yahoo.com.ua", "yahoo.com.ve", "yahoo.com.vn", "yahoo.cz", "yahoo.de", "yahoo.dk", "yahoo.ee", "yahoo.es", "yahoo.fi", "yahoo.fr", "yahoo.gr", "yahoo.hr", "yahoo.hu", "yahoo.ie", "yahoo.in", "yahoo.it", "yahoo.lv", "yahoo.nl", "yahoo.no", "yahoo.pl", "yahoo.pt", "yahoo.ro", "yhoo.rs", "yahoo.se", "yahoo.si", "yahoo.sk", "yahoogroups.co.kr", "yahoogroups.com.cn", "yahoogroups.com.sg", "yahoogroups.com.tw", "yahoogrupper.dk", "yahoogruppi.it", "yahoomail.com", "ymail.com", "y7mail.com", "aol.com", "aim.com", "aim.net", "americaonline.com.mx", "aol.ca", "aol.co.uk", "aol.com.au", "aol.com.br", "aol.com", "aol.com.mx", "aol.de", "aol.es", "aol.fr", "aol.in", "aol.it", "aol.nl", "aol.pl", "aol.ru", "aolsouthamerica.net", "brazilaol.net", "cs.com", "netscape.net", "btinternet.com", "btopenworld.com", "mybtinternet.com", "talk21.com", "gmx.de", "gmx.net", "gmx.co.uk", "gmx.at", "gmx.ch", "proton.me", "pm.me", "protonmail.com", "protonmail.ch", "123mail.org", "150mail.com", "150ml.com", "16mail.com", "2-mail.com", "4email.net", "50mail.com", "airpost.net", "allmail.net", "cluemail.com", "elitemail.org", "emailcorner.net", "emailengine.net", "emailengine.org", "emailgroups.net", "emailplus.org", "emailuser.net", "eml.cc", "f-m.fm", "fast-email.com", "fast-mail.org", "fastem.com", "fastemailer.com", "fastest.cc", "fastimap.com", "fastmail.cn", "fastmail.co.uk", "fastmail.com", "fastmail.com.au", "fastmail.de", "fastmail.es", "fastmail.fm", "fastmail.fr", "fastmail.im", "fastmail.in", "fastmail.jp", "fastmail.mx", "fastmail.net", "fastmail.nl", "fastmail.org", "fastmail.se", "fastmail.to", "fastmail.tw", "fastmail.uk", "fastmailbox.net", "fastmessaging.com", "fea.st", "fmail.co.uk", "fmailbox.com", "fmgirl.com", "fmguy.com", "ftml.net", "hailmail.net", "imap-mail.com", "imap.cc", "imapmail.org", "inoutbox.com", "internet-e-mail.com", "internet-mail.org", "internetemails.net", "internetmailing.net", "jetemail.net", "justemail.net", "letterboxes.org", "mail-central.com", "mail-page.com", "mailas.com", "mailbolt.com", "mailc.net", "mailcan.com", "mailforce.net", "mailhaven.com", "mailingaddress.org", "mailite.com", "mailmight.com", "mailnew.com", "mailsent.net", "mailservice.ms", "mailup.net", "mailworks.org", "ml1.net", "mm.st", "myfastmail.com", "mymacmail.com", "nospammail.net", "ownmail.net", "petml.com", "postinbox.com", "postpro.net", "proinbox.com", "promessage.com", "realemail.net", "reallyfast.biz", "reallyfast.info", "rushpost.com", "sent.as", "sent.at", "sent.com", "speedpost.net", "speedymail.org", "ssl-mail.com", "swift-mail.com", "the-fastest.net", "the-quickest.com", "theinternetemail.com", "veryfast.biz", "veryspeedy.net", "warpmail.net", "xsmail.com", "yepmail.net", "your-mail.com", "sky.com", "fastmail.com", "zohomail.com", "rogers.com", "verizon.net", "verizon.com", "cox.net", "cox.com", "arcor.de", "freenet.de", "mail.de", "mail.com", "godaddy.com", "orange.fr", "t-online.de", "wanadoo.fr", "web.de", "yandex.ru", "bk.ru", "inbox.ru", "list.ru", "mail.ru", "my.com", "mail.ua", "qq.com", "hey.com", "wp.pl", "onet.pl", "mz.co.kr", "naver.com", "valanides.com", "bugfoo.com", "eurokool.com", "net.hr", "ya.ru", "yopmail.com", "nate.com", "fitzola.com", "lieboe.com", "teachingdwt.com", "raotus.com", "duck.com", "ik.com", "tcwlm.com", "online.ua", "alonecmw.com", "snowlash.com", "mailinator.com", "cyclesat.com", "aleeas.com", "momoshe.com", "126.com", "163.com", "gufum.com", "soombo.com", "vintomaper.com", "in2reach.com", "bluewin.ch"], "REGION_OPTIONS", 0, ["North America", "Europe", "Rest of World"], "STARTUPS_FORM_LATEST_FUNDING_ROUND_OPTIONS", 0, ["Pre-seed", "Seed", "Series A", "Series B"], "STARTUPS_FORM_TOTAL_AMOUNT_RAISED_OPTIONS", 0, ["$0 to $500k", "$500k to $1M", "$1M to $2.5M", "$2.5M to $5M", "$5M to $7.5M", "$7.5M+"], "STARTUPS_FORM_YEAR_FOUNDED_OPTIONS", 0, eJ, "TEAM_SIZE_OPTIONS", 0, ["1 to 5", "6 to 10", "11 to 20", "21 to 50", "51 to 100", "101+"], "getFormErrorMessage", 0, function(e2, t2) {
    switch (e2) {
      case eQ.BOT_CHECK:
        return `Our spam check flagged this submission. Please try again or reach out to ${t2} if the issue persists.`;
      case eQ.FORM_VALIDATION:
        return `We could not validate the input. Please check your answers and try again. If the issue persists, reach out to ${t2}`;
      case eQ.CREATING_TICKET:
        return `We failed to log your ticket due to an internal error. Please reach out to ${t2}`;
      case eQ.FILE_UPLOAD:
        return `We were unable to save your files. Please reach out to ${t2}`;
      case eQ.TRACK_EVENT:
        return `We couldn't process your request automatically. Please try again, or reach out to ${t2}`;
      default:
        return `We could not process your request. Please try again. If the issue persists, reach out to ${t2}`;
    }
  }], 522326);
}]);
