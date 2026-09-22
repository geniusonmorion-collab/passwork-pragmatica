;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "803f0c4d-07c3-d0aa-b40d-4b3a5c3d5f51");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 181147, 78612, (e) => {
  "use strict";
  var t = e.i(856757);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
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
    var s = "u" > typeof window ? window : e.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let r = String.raw, o = (() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return false;
    }
    return true;
  })(), l = "u" > typeof CSS && CSS.supports && CSS.supports("line-height", "mod(1,1)"), d = "u" > typeof matchMedia ? matchMedia("(prefers-reduced-motion: reduce)") : null, c = "--_number-flow-d-opacity", u = "--_number-flow-d-width", p = "--_number-flow-dx", h = "--_number-flow-d", m = (() => {
    try {
      return CSS.registerProperty({ name: c, syntax: "<number>", inherits: false, initialValue: "0" }), CSS.registerProperty({ name: p, syntax: "<length>", inherits: true, initialValue: "0px" }), CSS.registerProperty({ name: u, syntax: "<number>", inherits: false, initialValue: "0" }), CSS.registerProperty({ name: h, syntax: "<number>", inherits: true, initialValue: "0" }), true;
    } catch {
      return false;
    }
  })(), f = "round(nearest, calc(var(--number-flow-mask-height, 0.25em) / 2), 1px)", g = `calc(${f} * 2)`, y = "var(--number-flow-mask-width, 0.5em)", v = `calc(${y} / var(--scale-x))`, w = "#000 0, transparent 71%", x = r`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:1}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${u}) / var(--width));transform:translateX(var(${p})) scaleX(var(--scale-x));margin:0 calc(-1 * ${y});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${v},#000 calc(100% - ${v}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${g},#000 calc(100% - ${g}),transparent 100% ),radial-gradient(at bottom right,${w}),radial-gradient(at bottom left,${w}),radial-gradient(at top left,${w}),radial-gradient(at top right,${w});-webkit-mask-size:100% calc(100% - ${g} * 2),calc(100% - ${v} * 2) 100%,${v} ${g},${v} ${g},${v} ${g},${v} ${g};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${f} ${y};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${p})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${h})}.digit__num,.number .section::after{padding:${f} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${c}))}`, _ = "u" > typeof HTMLElement ? HTMLElement : class {
  };
  r`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:1}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${f} 0}.symbol{white-space:pre}`;
  try {
    var M = "u" > typeof window ? window : e.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var b = "u" > typeof window ? window : e.g;
    b._sentryModuleMetadata = b._sentryModuleMetadata || {}, b._sentryModuleMetadata[new b.Error().stack] = Object.assign({}, b._sentryModuleMetadata[new b.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let j = (e2, t2, i2) => {
    let a2 = document.createElement(e2), [n2, s2] = Array.isArray(t2) ? [void 0, t2] : [t2, i2];
    return n2 && Object.assign(a2, n2), null == s2 || s2.forEach((e3) => a2.appendChild(e3)), a2;
  }, k = l && o && m;
  class C extends _ {
    constructor() {
      super(), this.created = false, this.batched = false, this._preUpdated = false;
      const { animated: e2, ...t2 } = this.constructor.defaultProps;
      this._animated = this.computedAnimated = e2, Object.assign(this, t2);
    }
    get animated() {
      return this._animated;
    }
    set animated(e2) {
      var t2;
      this.animated !== e2 && (this._animated = e2, null == (t2 = this.shadowRoot) || t2.getAnimations().forEach((e3) => e3.finish()));
    }
    set data(e2) {
      var t2;
      if (null == e2 || e2 === this._data) return;
      let { pre: i2, integer: a2, fraction: n2, post: s2, value: r2 } = e2;
      if (this.created) {
        let o2 = this._data;
        this._data = e2, this.computedTrend = "function" == typeof this.trend ? this.trend(o2.value, r2) : this.trend, this.computedAnimated = k && this._animated && (!this.respectMotionPreference || !(null != d && d.matches)) && this.offsetWidth > 0 && this.offsetHeight > 0 && "visible" === this.ownerDocument.visibilityState, null == (t2 = this.plugins) || t2.forEach((t3) => {
          var i3;
          return null == (i3 = t3.onUpdate) ? void 0 : i3.call(t3, e2, o2, this);
        }), this.batched || this.willUpdate(), this._pre.update(i2), this._num.update({ integer: a2, fraction: n2 }), this._post.update(s2), this.batched || this.didUpdate();
      } else {
        this._data = e2, this.attachShadow({ mode: "open" });
        try {
          this._internals ?? (this._internals = this.attachInternals()), this._internals.role = "img";
        } catch {
        }
        let t3 = document.createElement("style");
        this.nonce && (t3.nonce = this.nonce), t3.textContent = x, this.shadowRoot.appendChild(t3), this._pre = new N(this, i2, { justify: "right", part: "left" }), this.shadowRoot.appendChild(this._pre.el), this._num = new A(this, a2, n2), this.shadowRoot.appendChild(this._num.el), this._post = new N(this, s2, { justify: "left", part: "right" }), this.shadowRoot.appendChild(this._post.el), this.created = true;
      }
      try {
        this._internals.ariaLabel = e2.valueAsString;
      } catch {
      }
    }
    willUpdate() {
      this._preUpdated = k && this._animated && (!this.respectMotionPreference || !(null != d && d.matches)) && "visible" === this.ownerDocument.visibilityState, this._preUpdated && (this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate());
    }
    didUpdate() {
      if (!this.computedAnimated || !this._preUpdated) return;
      this._abortAnimationsFinish ? this._abortAnimationsFinish.abort() : this.dispatchEvent(new Event("animationsstart")), this._pre.didUpdate(), this._num.didUpdate(), this._post.didUpdate();
      let e2 = new AbortController();
      Promise.all(this.shadowRoot.getAnimations().map((e3) => e3.finished)).then(() => {
        e2.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), this._abortAnimationsFinish = void 0);
      }), this._abortAnimationsFinish = e2;
    }
  }
  C.defaultProps = { transformTiming: { duration: 900, easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)" }, spinTiming: void 0, opacityTiming: { duration: 450, easing: "ease-out" }, animated: true, trend: (e2, t2) => Math.sign(t2 - e2), respectMotionPreference: true, plugins: void 0, digits: void 0 };
  class A {
    constructor(e2, t2, i2, { className: a2, ...n2 } = {}) {
      this.flow = e2, this._integer = new P(e2, t2, { justify: "right", part: "integer" }), this._fraction = new P(e2, i2, { justify: "left", part: "fraction" }), this._inner = j("span", { className: "number__inner" }, [this._integer.el, this._fraction.el]), this.el = j("span", { ...n2, part: "number", className: `number ${a2 ?? ""}` }, [this._inner]);
    }
    willUpdate() {
      this._prevWidth = this.el.offsetWidth, this._prevLeft = this.el.getBoundingClientRect().left, this._integer.willUpdate(), this._fraction.willUpdate();
    }
    update({ integer: e2, fraction: t2 }) {
      this._integer.update(e2), this._fraction.update(t2);
    }
    didUpdate() {
      let e2 = this.el.getBoundingClientRect();
      this._integer.didUpdate(), this._fraction.didUpdate();
      let t2 = this._prevLeft - e2.left, i2 = this.el.offsetWidth, a2 = this._prevWidth - i2;
      this.el.style.setProperty("--width", String(i2)), this.el.animate({ [p]: [`${t2}px`, "0px"], [u]: [a2, 0] }, { ...this.flow.transformTiming, composite: "accumulate" });
    }
  }
  class E {
    constructor(e2, t2, { justify: i2, className: a2, ...n2 }, s2) {
      this.flow = e2, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (e3) => () => {
        this.children.delete(e3);
      }, this.justify = i2;
      const r2 = t2.map((e3) => this.addChar(e3).el);
      this.el = j("span", { ...n2, className: `section section--justify-${i2} ${a2 ?? ""}` }, s2 ? s2(r2) : r2);
    }
    addChar(e2, { startDigitsAtZero: t2 = false, ...i2 } = {}) {
      let a2 = "integer" === e2.type || "fraction" === e2.type ? new B(this, e2.type, t2 ? 0 : e2.value, e2.pos, { ...i2, onRemove: this.onCharRemove(e2.key) }) : new R(this, e2.type, e2.value, { ...i2, onRemove: this.onCharRemove(e2.key) });
      return this.children.set(e2.key, a2), a2;
    }
    unpop(e2) {
      e2.el.removeAttribute("inert"), e2.el.style.top = "", e2.el.style[this.justify] = "";
    }
    pop(e2) {
      e2.forEach((e3) => {
        var t2, i2;
        e3.el.style.top = `${e3.el.offsetTop}px`, e3.el.style[this.justify] = `${t2 = e3.el, "left" === this.justify ? t2.offsetLeft : ((null == (i2 = t2.offsetParent instanceof HTMLElement ? t2.offsetParent : null) ? void 0 : i2.offsetWidth) ?? 0) - t2.offsetWidth - t2.offsetLeft}px`;
      }), e2.forEach((e3) => {
        e3.el.setAttribute("inert", ""), e3.present = false;
      });
    }
    addNewAndUpdateExisting(e2) {
      let t2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map(), a2 = "left" === this.justify, n2 = a2 ? "prepend" : "append";
      if ((function(e3, t3, { reverse: i3 = false } = {}) {
        let a3 = e3.length;
        for (let n3 = i3 ? a3 - 1 : 0; i3 ? n3 >= 0 : n3 < a3; i3 ? n3-- : n3++) t3(e3[n3], n3);
      })(e2, (e3) => {
        let a3;
        this.children.has(e3.key) ? (a3 = this.children.get(e3.key), i2.set(e3, a3), this.unpop(a3), a3.present = true) : (a3 = this.addChar(e3, { startDigitsAtZero: true, animateIn: true }), t2.set(e3, a3)), this.el[n2](a3.el);
      }, { reverse: a2 }), this.flow.computedAnimated) {
        let e3 = this.el.getBoundingClientRect();
        t2.forEach((t3) => {
          t3.willUpdate(e3);
        });
      }
      t2.forEach((e3, t3) => {
        e3.update(t3.value);
      }), i2.forEach((e3, t3) => {
        e3.update(t3.value);
      });
    }
    willUpdate() {
      let e2 = this.el.getBoundingClientRect();
      this._prevOffset = e2[this.justify], this.children.forEach((t2) => t2.willUpdate(e2));
    }
    didUpdate() {
      let e2 = this.el.getBoundingClientRect();
      this.children.forEach((t3) => t3.didUpdate(e2));
      let t2 = e2[this.justify], i2 = this._prevOffset - t2;
      i2 && this.children.size && this.el.animate({ transform: [`translateX(${i2}px)`, "none"] }, { ...this.flow.transformTiming, composite: "accumulate" });
    }
  }
  class P extends E {
    update(e2) {
      let t2 = /* @__PURE__ */ new Map();
      this.children.forEach((i2, a2) => {
        e2.find((e3) => e3.key === a2) || t2.set(a2, i2), this.unpop(i2);
      }), this.addNewAndUpdateExisting(e2), t2.forEach((e3) => {
        e3 instanceof B && e3.update(0);
      }), this.pop(t2);
    }
  }
  class N extends E {
    update(e2) {
      let t2 = /* @__PURE__ */ new Map();
      this.children.forEach((i2, a2) => {
        e2.find((e3) => e3.key === a2) || t2.set(a2, i2);
      }), this.pop(t2), this.addNewAndUpdateExisting(e2);
    }
  }
  class F {
    constructor(e2, t2, { onRemove: i2, animateIn: a2 = false } = {}) {
      this.flow = e2, this.el = t2, this._present = true, this._remove = () => {
        var e3;
        this.el.remove(), null == (e3 = this._onRemove) || e3.call(this);
      }, this.el.classList.add("animate-presence"), this.flow.computedAnimated && a2 && this.el.animate({ [c]: [-0.9999, 0] }, { ...this.flow.opacityTiming, composite: "accumulate" }), this._onRemove = i2;
    }
    get present() {
      return this._present;
    }
    set present(e2) {
      if (this._present !== e2) {
        if (this._present = e2, e2 ? this.el.removeAttribute("inert") : this.el.setAttribute("inert", ""), !this.flow.computedAnimated) {
          e2 || this._remove();
          return;
        }
        this.el.style.setProperty("--_number-flow-d-opacity", e2 ? "0" : "-.999"), this.el.animate({ [c]: e2 ? [-0.9999, 0] : [0.999, 0] }, { ...this.flow.opacityTiming, composite: "accumulate" }), e2 ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, { once: true });
      }
    }
  }
  class L extends F {
    constructor(e2, t2, i2, a2) {
      super(e2.flow, i2, a2), this.section = e2, this.value = t2, this.el = i2;
    }
  }
  class B extends L {
    constructor(e2, t2, i2, a2, n2) {
      var s2, r2;
      const o2 = ((null == (r2 = null == (s2 = e2.flow.digits) ? void 0 : s2[a2]) ? void 0 : r2.max) ?? 9) + 1, l2 = Array.from({ length: o2 }).map((e3, t3) => {
        let a3 = j("span", { className: "digit__num" }, [document.createTextNode(String(t3))]);
        return t3 !== i2 && a3.setAttribute("inert", ""), a3.style.setProperty("--n", String(t3)), a3;
      }), d2 = j("span", { part: `digit ${t2}-digit`, className: "digit" }, l2);
      d2.style.setProperty("--current", String(i2)), d2.style.setProperty("--length", String(o2)), super(e2, i2, d2, n2), this.pos = a2, this._onAnimationsFinish = () => {
        this.el.classList.remove("is-spinning");
      }, this._numbers = l2, this.length = o2;
    }
    willUpdate(e2) {
      let t2 = this.el.getBoundingClientRect();
      this._prevValue = this.value;
      let i2 = t2[this.section.justify] - e2[this.section.justify], a2 = t2.width / 2;
      this._prevCenter = "left" === this.section.justify ? i2 + a2 : i2 - a2;
    }
    update(e2) {
      this.el.style.setProperty("--current", String(e2)), this._numbers.forEach((t2, i2) => i2 === e2 ? t2.removeAttribute("inert") : t2.setAttribute("inert", "")), this.value = e2;
    }
    didUpdate(e2) {
      let t2 = this.el.getBoundingClientRect(), i2 = t2[this.section.justify] - e2[this.section.justify], a2 = t2.width / 2, n2 = "left" === this.section.justify ? i2 + a2 : i2 - a2, s2 = this._prevCenter - n2;
      s2 && this.el.animate({ transform: [`translateX(${s2}px)`, "none"] }, { ...this.flow.transformTiming, composite: "accumulate" });
      let r2 = this.getDelta();
      r2 && (this.el.classList.add("is-spinning"), this.el.animate({ [h]: [-r2, 0] }, { ...this.flow.spinTiming ?? this.flow.transformTiming, composite: "accumulate" }), this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, { once: true }));
    }
    getDelta() {
      var e2;
      if (this.flow.plugins) for (let t3 of this.flow.plugins) {
        let i3 = null == (e2 = t3.getDelta) ? void 0 : e2.call(t3, this.value, this._prevValue, this);
        if (null != i3) return i3;
      }
      let t2 = this.value - this._prevValue, i2 = this.flow.computedTrend || Math.sign(t2);
      return i2 < 0 && this.value > this._prevValue ? this.value - this.length - this._prevValue : i2 > 0 && this.value < this._prevValue ? this.length - this._prevValue + this.value : t2;
    }
  }
  class R extends L {
    constructor(e2, t2, i2, a2) {
      const n2 = j("span", { className: "symbol__value", textContent: i2 });
      super(e2, i2, j("span", { part: `symbol ${t2}`, className: "symbol" }, [n2]), a2), this.type = t2, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (e3) => () => {
        this._children.delete(e3);
      }, this._children.set(i2, new F(this.flow, n2, { onRemove: this._onChildRemove(i2) }));
    }
    willUpdate(e2) {
      if ("decimal" === this.type) return;
      let t2 = this.el.getBoundingClientRect();
      this._prevOffset = t2[this.section.justify] - e2[this.section.justify];
    }
    update(e2) {
      if (this.value !== e2) {
        let t2 = this._children.get(this.value);
        t2 && (t2.present = false);
        let i2 = this._children.get(e2);
        if (i2) i2.present = true;
        else {
          let t3 = j("span", { className: "symbol__value", textContent: e2 });
          this.el.appendChild(t3), this._children.set(e2, new F(this.flow, t3, { animateIn: true, onRemove: this._onChildRemove(e2) }));
        }
      }
      this.value = e2;
    }
    didUpdate(e2) {
      if ("decimal" === this.type) return;
      let t2 = this.el.getBoundingClientRect()[this.section.justify] - e2[this.section.justify], i2 = this._prevOffset - t2;
      i2 && this.el.animate({ transform: [`translateX(${i2}px)`, "none"] }, { ...this.flow.transformTiming, composite: "accumulate" });
    }
  }
  try {
    var S = "u" > typeof window ? window : e.g;
    S._sentryModuleMetadata = S._sentryModuleMetadata || {}, S._sentryModuleMetadata[new S.Error().stack] = Object.assign({}, S._sentryModuleMetadata[new S.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var O = t;
  try {
    var D = "u" > typeof window ? window : e.g;
    D._sentryModuleMetadata = D._sentryModuleMetadata || {}, D._sentryModuleMetadata[new D.Error().stack] = Object.assign({}, D._sentryModuleMetadata[new D.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let $ = parseInt(O.version.match(/^(\d+)\./)?.[1]) >= 19;
  class T extends C {
    attributeChangedCallback(e2, t2, i2) {
      this[e2] = JSON.parse(i2);
    }
  }
  T.observedAttributes = $ ? [] : ["data", "digits"], "u" > typeof HTMLElement && "u" > typeof customElements && !customElements.get("number-flow-react") && customElements.define("number-flow-react", T);
  let U = {}, I = $ ? function(e2) {
    return e2;
  } : JSON.stringify;
  function K(e2) {
    let { transformTiming: t2, spinTiming: i2, opacityTiming: a2, animated: n2, respectMotionPreference: s2, trend: r2, plugins: o2, ...l2 } = e2;
    return [{ transformTiming: t2, spinTiming: i2, opacityTiming: a2, animated: n2, respectMotionPreference: s2, trend: r2, plugins: o2 }, l2];
  }
  class z extends O.Component {
    updateProperties(e2) {
      if (!this.el) return;
      this.el.batched = !this.props.isolate;
      let [t2] = K(this.props);
      Object.entries(t2).forEach(([e3, t3]) => {
        this.el[e3] = t3 ?? T.defaultProps[e3];
      }), e2?.onAnimationsStart && this.el.removeEventListener("animationsstart", e2.onAnimationsStart), this.props.onAnimationsStart && this.el.addEventListener("animationsstart", this.props.onAnimationsStart), e2?.onAnimationsFinish && this.el.removeEventListener("animationsfinish", e2.onAnimationsFinish), this.props.onAnimationsFinish && this.el.addEventListener("animationsfinish", this.props.onAnimationsFinish);
    }
    componentDidMount() {
      this.updateProperties(), $ && this.el && (this.el.digits = this.props.digits, this.el.data = this.props.data);
    }
    getSnapshotBeforeUpdate(e2) {
      if (this.updateProperties(e2), e2.data !== this.props.data) {
        if (this.props.group) return this.props.group.willUpdate(), () => this.props.group?.didUpdate();
        if (!this.props.isolate) return this.el?.willUpdate(), () => this.el?.didUpdate();
      }
      return null;
    }
    componentDidUpdate(e2, t2, i2) {
      i2?.();
    }
    handleRef(e2) {
      this.props.innerRef && (this.props.innerRef.current = e2), this.el = e2;
    }
    render() {
      let [e2, { innerRef: t2, className: i2, data: a2, nonce: n2, willChange: s2, isolate: r2, group: o2, digits: l2, onAnimationsStart: d2, onAnimationsFinish: c2, ...u2 }] = K(this.props);
      return O.createElement("number-flow-react", { ref: this.handleRef, "data-will-change": s2 ? "" : void 0, class: i2, nonce: n2, ...u2, dangerouslySetInnerHTML: { __html: "" }, suppressHydrationWarning: true, digits: I(l2), data: I(a2) });
    }
    constructor(e2) {
      super(e2), this.handleRef = this.handleRef.bind(this);
    }
  }
  let H = O.forwardRef(function({ value: e2, locales: t2, format: i2, prefix: a2, suffix: n2, ...s2 }, r2) {
    O.useImperativeHandle(r2, () => o2.current, []);
    let o2 = O.useRef(void 0), l2 = O.useContext(V);
    l2?.useRegister(o2);
    let d2 = O.useMemo(() => t2 ? JSON.stringify(t2) : "", [t2]), c2 = O.useMemo(() => i2 ? JSON.stringify(i2) : "", [i2]), u2 = O.useMemo(() => (function(e3, t3, i3, a3) {
      let n3 = t3.formatToParts(e3);
      i3 && n3.unshift({ type: "prefix", value: i3 }), a3 && n3.push({ type: "suffix", value: a3 });
      let s3 = [], r3 = [], o3 = [], l3 = [], d3 = {}, c3 = (e4) => `${e4}:${d3[e4] = (d3[e4] ?? -1) + 1}`, u3 = "", p2 = false, h2 = false;
      for (let e4 of n3) {
        u3 += e4.value;
        let t4 = "minusSign" === e4.type || "plusSign" === e4.type ? "sign" : e4.type;
        "integer" === t4 ? (p2 = true, r3.push(...e4.value.split("").map((e5) => ({ type: t4, value: parseInt(e5) })))) : "group" === t4 ? r3.push({ type: t4, value: e4.value }) : "decimal" === t4 ? (h2 = true, o3.push({ type: t4, value: e4.value, key: c3(t4) })) : "fraction" === t4 ? o3.push(...e4.value.split("").map((e5) => ({ type: t4, value: parseInt(e5), key: c3(t4), pos: -1 - d3[t4] }))) : (p2 || h2 ? l3 : s3).push({ type: t4, value: e4.value, key: c3(t4) });
      }
      let m2 = [];
      for (let e4 = r3.length - 1; e4 >= 0; e4--) {
        let t4 = r3[e4];
        m2.unshift("integer" === t4.type ? { ...t4, key: c3(t4.type), pos: d3[t4.type] } : { ...t4, key: c3(t4.type) });
      }
      return { pre: s3, integer: m2, fraction: o3, post: l3, valueAsString: u3, value: "string" == typeof e3 ? parseFloat(e3) : e3 };
    })(e2, U[`${d2}:${c2}`] ??= new Intl.NumberFormat(t2, i2), a2, n2), [e2, d2, c2, a2, n2]);
    return O.createElement(z, { ...s2, group: l2, data: u2, innerRef: o2 });
  }), V = O.createContext(void 0);
  try {
    var W = "u" > typeof window ? window : e.g;
    W._sentryModuleMetadata = W._sentryModuleMetadata || {}, W._sentryModuleMetadata[new W.Error().stack] = Object.assign({}, W._sentryModuleMetadata[new W.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  ((e2 = "") => r`:where(number-flow${e2}){line-height:1}number-flow${e2} > span{font-kerning:none;display:inline-block;padding:${g} 0}`)("-react"), e.s([], 181147), e.s(["default", 0, H], 78612);
}, 364937, (e) => {
  "use strict";
  var t = e.i(856757), i = e.i(543836), a = e.i(728654), n = e.i(652531), s = e.i(999819), r = e.i(67110), o = e.i(619784), l = e.i(119637), d = e.i(483951), c = e.i(291196), u = e.i(198623), p = e.i(45240), h = e.i(603642), m = e.i(548913), f = e.i(73772), g = e.i(813044), y = e.i(68982);
  try {
    var v = "u" > typeof window ? window : e.g;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var w = Object.defineProperty, x = (e2, t2) => w(e2, "name", { value: t2, configurable: true }), _ = "Popover", [M, b] = (0, n.createContextScope)(_, [d.createPopperScope]), j = (0, d.createPopperScope)(), [k, C] = M(_), A = x((e2) => {
    let { __scopePopover: i2, children: a2, open: n2, defaultOpen: s2, onOpenChange: r2, modal: o2 = false } = e2, c2 = j(i2), u2 = t.useRef(null), [p2, h2] = t.useState(false), [f2, g2] = (0, m.useControllableState)({ prop: n2, defaultProp: s2 ?? false, onChange: r2, caller: _ });
    return (0, y.jsx)(d.Root, { ...c2, children: (0, y.jsx)(k, { scope: i2, contentId: (0, l.useId)(), triggerRef: u2, open: f2, onOpenChange: g2, onOpenToggle: t.useCallback(() => g2((e3) => !e3), [g2]), hasCustomAnchor: p2, onCustomAnchorAdd: t.useCallback(() => h2(true), []), onCustomAnchorRemove: t.useCallback(() => h2(false), []), modal: o2, children: a2 }) });
  }, "Popover"), E = t.forwardRef(x(function(e2, i2) {
    let { __scopePopover: a2, ...n2 } = e2, s2 = C("PopoverAnchor", a2), r2 = j(a2), { onCustomAnchorAdd: o2, onCustomAnchorRemove: l2 } = s2;
    return t.useEffect(() => (o2(), () => l2()), [o2, l2]), (0, y.jsx)(d.Anchor, { ...r2, ...n2, ref: i2 });
  }, "PopoverAnchor")), P = t.forwardRef(x(function(e2, t2) {
    let { __scopePopover: n2, ...s2 } = e2, r2 = C("PopoverTrigger", n2), o2 = j(n2), l2 = (0, a.useComposedRefs)(t2, r2.triggerRef), c2 = (0, y.jsx)(p.Primitive.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": r2.open, "aria-controls": r2.open ? r2.contentId : void 0, "data-state": K(r2.open), ...s2, ref: l2, onClick: (0, i.composeEventHandlers)(e2.onClick, r2.onOpenToggle) });
    return r2.hasCustomAnchor ? c2 : (0, y.jsx)(d.Anchor, { asChild: true, ...o2, children: c2 });
  }, "PopoverTrigger")), N = "PopoverPortal", [F, L] = M(N, { forceMount: void 0 }), B = x((e2) => {
    let { __scopePopover: t2, forceMount: i2, children: a2, container: n2 } = e2, s2 = C(N, t2);
    return (0, y.jsx)(F, { scope: t2, forceMount: i2, children: (0, y.jsx)(u.Presence, { present: i2 || s2.open, children: (0, y.jsx)(c.Portal, { asChild: true, container: n2, children: a2 }) }) });
  }, "PopoverPortal"), R = "PopoverContent", S = t.forwardRef(x(function(e2, t2) {
    let i2 = L(R, e2.__scopePopover), { forceMount: a2 = i2.forceMount, ...n2 } = e2, s2 = C(R, e2.__scopePopover);
    return (0, y.jsx)(u.Presence, { present: a2 || s2.open, children: s2.modal ? (0, y.jsx)(D, { ...n2, ref: t2 }) : (0, y.jsx)($, { ...n2, ref: t2 }) });
  }, "PopoverContent")), O = (0, h.createSlot)("PopoverContent.RemoveScroll"), D = t.forwardRef(x(function(e2, n2) {
    let s2 = C(R, e2.__scopePopover), r2 = t.useRef(null), o2 = (0, a.useComposedRefs)(n2, r2), l2 = t.useRef(false);
    return t.useEffect(() => {
      let e3 = r2.current;
      if (e3) return (0, f.hideOthers)(e3);
    }, []), (0, y.jsx)(g.RemoveScroll, { as: O, allowPinchZoom: true, children: (0, y.jsx)(T, { ...e2, ref: o2, trapFocus: s2.open, disableOutsidePointerEvents: true, onCloseAutoFocus: (0, i.composeEventHandlers)(e2.onCloseAutoFocus, (e3) => {
      e3.preventDefault(), l2.current || s2.triggerRef.current?.focus();
    }), onPointerDownOutside: (0, i.composeEventHandlers)(e2.onPointerDownOutside, (e3) => {
      let t2 = e3.detail.originalEvent, i2 = 0 === t2.button && true === t2.ctrlKey;
      l2.current = 2 === t2.button || i2;
    }, { checkForDefaultPrevented: false }), onFocusOutside: (0, i.composeEventHandlers)(e2.onFocusOutside, (e3) => e3.preventDefault(), { checkForDefaultPrevented: false }) }) });
  }, "PopoverContentModal")), $ = t.forwardRef(x(function(e2, i2) {
    let a2 = C(R, e2.__scopePopover), n2 = t.useRef(false), s2 = t.useRef(false);
    return (0, y.jsx)(T, { ...e2, ref: i2, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (t2) => {
      e2.onCloseAutoFocus?.(t2), t2.defaultPrevented || (n2.current || a2.triggerRef.current?.focus(), t2.preventDefault()), n2.current = false, s2.current = false;
    }, onInteractOutside: (t2) => {
      e2.onInteractOutside?.(t2), t2.defaultPrevented || (n2.current = true, "pointerdown" === t2.detail.originalEvent.type && (s2.current = true));
      let i3 = t2.target;
      a2.triggerRef.current?.contains(i3) && t2.preventDefault(), "focusin" === t2.detail.originalEvent.type && s2.current && t2.preventDefault();
    } });
  }, "PopoverContentNonModal")), T = t.forwardRef(x(function(e2, t2) {
    let { __scopePopover: i2, trapFocus: a2, onOpenAutoFocus: n2, onCloseAutoFocus: l2, disableOutsidePointerEvents: c2, onEscapeKeyDown: u2, onPointerDownOutside: p2, onFocusOutside: h2, onInteractOutside: m2, ...f2 } = e2, g2 = C(R, i2), v2 = j(i2);
    return (0, r.useFocusGuards)(), (0, y.jsx)(o.FocusScope, { asChild: true, loop: true, trapped: a2, onMountAutoFocus: n2, onUnmountAutoFocus: l2, children: (0, y.jsx)(s.DismissableLayer, { asChild: true, disableOutsidePointerEvents: c2, onInteractOutside: m2, onEscapeKeyDown: u2, onPointerDownOutside: p2, onFocusOutside: h2, onDismiss: () => g2.onOpenChange(false), deferPointerDownOutside: true, children: (0, y.jsx)(d.Content, { "data-state": K(g2.open), role: "dialog", id: g2.contentId, ...v2, ...f2, ref: t2, style: { ...f2.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-popover-content-available-width": "var(--radix-popper-available-width)", "--radix-popover-content-available-height": "var(--radix-popper-available-height)", "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)", "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)" } }) }) });
  }, "PopoverContentImpl")), U = t.forwardRef(x(function(e2, t2) {
    let { __scopePopover: a2, ...n2 } = e2, s2 = C("PopoverClose", a2);
    return (0, y.jsx)(p.Primitive.button, { type: "button", ...n2, ref: t2, onClick: (0, i.composeEventHandlers)(e2.onClick, () => s2.onOpenChange(false)) });
  }, "PopoverClose")), I = t.forwardRef(x(function(e2, t2) {
    let { __scopePopover: i2, ...a2 } = e2, n2 = j(i2);
    return (0, y.jsx)(d.Arrow, { ...n2, ...a2, ref: t2 });
  }, "PopoverArrow"));
  function K(e2) {
    return e2 ? "open" : "closed";
  }
  x(K, "getState"), e.s(["Anchor", 0, E, "Arrow", 0, I, "Close", 0, U, "Content", 0, S, "Popover", 0, A, "PopoverAnchor", 0, E, "PopoverArrow", 0, I, "PopoverClose", 0, U, "PopoverContent", 0, S, "PopoverPortal", 0, B, "PopoverTrigger", 0, P, "Portal", 0, B, "Root", 0, A, "Trigger", 0, P, "createPopoverScope", 0, b], 102580);
  var z = e.i(102580);
  e.s(["Popover", 0, z], 364937);
}, 453852, (e) => {
  "use strict";
  var t = e.i(68982);
  e.i(181147);
  var i = e.i(78612), a = e.i(856757), n = e.i(269916), s = e.i(533919), r = e.i(551360);
  try {
    var o = window;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let l = ["#266DF0", "#9162F9", "#FD9038"];
  e.s(["CareersHeroCta", 0, ({ avatars: e2, count: o2, cta: d }) => {
    let [c, u] = (0, a.useState)(false);
    return (0, t.jsxs)("div", { className: "mt-7 flex w-auto items-center gap-x-3 gap-y-4 max-lg:flex-col", children: [(0, t.jsx)(s.ButtonToScroll, { size: "responsive", onMouseEnter: () => u(true), onMouseLeave: () => u(false), scrollTargetId: "open-positions", children: d }), (0, t.jsxs)("div", { className: "group flex", children: [e2.map((e3, i2) => (0, t.jsx)("div", { className: (0, r.cn)("relative -mr-2 size-[36px] rounded-full border lg:size-7 lg:group-hover:mr-0.5", "transition-all duration-150 ease-out lg:hover:z-10 lg:hover:scale-[1.12]"), style: { borderColor: l[i2 % l.length], transitionDelay: `${25 * i2}ms` }, children: (0, t.jsx)("div", { className: "h-full w-full overflow-hidden rounded-full border border-white-100", children: (0, t.jsx)(n.AttioStoryblokImage, { preload: true, imageAsset: e3, className: "h-full w-full object-cover" }) }) }, e3.filename)), (0, t.jsx)("div", { className: (0, r.cn)("relative size-[36px] rounded-full border border-subtle-stroke lg:size-7", "transition-transform duration-150 ease-out hover:z-10 lg:hover:scale-[1.12]"), children: (0, t.jsx)("div", { className: "h-full w-full rounded-full", children: (0, t.jsx)("div", { className: (0, r.cn)("flex h-full w-full items-center justify-center rounded-full bg-[#FBFBFB] text-[#75777C]"), children: (0, t.jsx)(i.default, { spinTiming: { duration: 150 }, value: c ? Number(o2) + 1 : o2, prefix: "+", className: (0, r.cn)("lg:text-[10px] lg:leading-[14px]", "text-[12px] tabular-nums leading-[16px] tracking-tighter") }) }) }) })] })] });
  }]);
}, 829220, (e) => {
  "use strict";
  var t = e.i(68982), i = e.i(112086), a = e.i(351188), n = e.i(140802), s = e.i(364937), r = e.i(856757);
  try {
    var o = window;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let l = { blue: { background: "#E5EEFF", stroke: "#C2D6FF", text: "#2B3E6D" }, green: { background: "#E0FCED", stroke: "#A7F2CF", text: "#244A3A" }, purple: { background: "#F5F0FF", stroke: "#D8C4FF", text: "#45297D" }, red: { background: "#FFEBEB", stroke: "#FFC2C2", text: "#692623" }, yellow: { background: "#FFF3CC", stroke: "#FFD269", text: "#523817" } }, d = { AI: "purple", Announcement: "red", API: "yellow", "Browser Extension": "red", "Bug Fix": "blue", "Data Model": "yellow", Design: "yellow", Documentation: "red", Enhancement: "purple", Feature: "blue", Integration: "yellow", Mobile: "yellow", Notes: "yellow", Platform: "yellow", Reports: "green", Sequences: "green", Settings: "blue", Workflows: "green" };
  var c = e.i(269916), u = e.i(551360);
  try {
    var p = window;
    p._sentryModuleMetadata = p._sentryModuleMetadata || {}, p._sentryModuleMetadata[new p.Error().stack] = Object.assign({}, p._sentryModuleMetadata[new p.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let h = ({ entry: e2 }) => (0, t.jsx)(s.Popover.Content, { forceMount: true, sideOffset: 8, side: "top", collisionPadding: 24, asChild: true, onOpenAutoFocus: (e3) => e3.preventDefault(), children: (0, t.jsx)(i.motion.div, { initial: { opacity: 0, scale: 0.98, y: -8 }, animate: { opacity: 1, scale: 1, transition: { opacity: { duration: 0.16, ease: [0.33, 1, 0.68, 1] }, y: { duration: 0.24, ease: [0.33, 1, 0.68, 1] } }, y: 0 }, exit: { opacity: 0, scale: 0.96, transition: { opacity: { duration: 0.04, ease: [0.12, 0, 0.39, 0] }, scale: { duration: 0.04, ease: [0.12, 0, 0.39, 0] }, y: { duration: 0.04, ease: [0.12, 0, 0.39, 0] } }, y: -8 }, className: (0, u.cn)("pointer-events-none relative z-(--dialog-content-z-index) h-full w-[280px]", "rounded-xl bg-primary-background p-2.5", "shadow-[0px_0px_0px_1px_rgba(28,40,64,0.05),_0px_4px_8px_-4px_rgba(28,40,64,0.12),_0px_4px_12px_-2px_rgba(28,40,64,0.16)]"), children: (0, t.jsxs)("div", { className: "flex w-full flex-col gap-0.5", children: [e2.asset?.filename && (0, t.jsxs)("div", { className: "relative mb-2 w-full", children: [(0, t.jsx)(c.AttioStoryblokImage, { imageAsset: e2.asset, alt: "", sizes: "280px", className: "size-full rounded-lg object-cover" }), (0, t.jsx)("div", { className: "absolute inset-0 rounded-lg ring-1 ring-default-stroke/40 ring-inset" })] }), e2.title && (0, t.jsx)("p", { className: "font-semibold text-primary-foreground text-sm", children: e2.title }), e2.copy && (0, t.jsx)("p", { className: "text-sm text-tertiary-foreground leading-tight", children: e2.copy }), e2.tags && (0, t.jsx)("div", { className: "mt-2 flex flex-wrap gap-1", children: e2.tags.map((e3) => {
    let i2 = d[e3];
    return (0, t.jsx)("span", { className: "inline-block rounded-lg border px-1.5 py-0.5 text-secondary-foreground text-xs", style: { backgroundColor: l[i2].background, borderColor: l[i2].stroke, color: l[i2].text }, children: e3 }, e3);
  }) })] }) }) });
  try {
    var m = window;
    m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[new m.Error().stack] = Object.assign({}, m._sentryModuleMetadata[new m.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let f = (0, r.memo)(({ entry: e2, opacity: a2 }) => {
    let [o2, l2] = (0, r.useState)(false), d2 = (0, r.useMemo)(() => 0.4 * Math.random() + 0.6 * a2, [a2]), c2 = (0, r.useMemo)(() => 8 * Math.random() + 4, []), p2 = (0, r.useMemo)(() => 0.5 * Math.random() + 0.5, []);
    return (0, t.jsx)("div", { className: "relative size-[22px]", children: (0, t.jsxs)(s.Popover.Root, { open: o2, onOpenChange: l2, children: [(0, t.jsx)(s.Popover.Trigger, { asChild: true, children: (0, t.jsx)("div", { onMouseEnter: () => l2(true), onMouseLeave: () => l2(false), children: (0, t.jsx)(i.motion.div, { className: (0, u.cn)("relative size-[22px] rounded-md bg-white-700", "z-1 before:absolute before:-inset-px", { "bg-blue-200": o2 }), animate: { opacity: [0.1, d2, 0.1] }, transition: { delay: p2, duration: c2, repeat: 1 / 0 } }) }) }), (0, t.jsx)(s.Popover.Portal, { forceMount: true, children: (0, t.jsx)(n.AnimatePresence, { children: o2 && (0, t.jsx)(h, { entry: e2 }) }) })] }) });
  });
  try {
    var g = window;
    g._sentryModuleMetadata = g._sentryModuleMetadata || {}, g._sentryModuleMetadata[new g.Error().stack] = Object.assign({}, g._sentryModuleMetadata[new g.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let y = Array.from({ length: 53 }, (e2, t2) => {
    let i2, a2;
    return a2 = (Math.exp(7 * (i2 = t2 / 52)) - 1) / (Math.exp(7) - 1), Math.max(1, Math.round((0.25 * i2 + 0.75 * a2) * 21));
  }), v = y.reduce((e2, t2) => e2 + t2, 0);
  function w({ pixels: e2, containerWidth: a2 }) {
    let n2 = Math.max(0, e2.length - v);
    return (0, t.jsx)("div", { className: "flex justify-end", style: { minHeight: 504 }, children: Array(53).fill(0).map((s2, r2) => (0, t.jsx)("div", { className: (0, u.cn)("flex flex-col-reverse", { hidden: a2 / 24 < 53 - r2 }), style: { flex: "0 0 24px" }, children: Array(21).fill(0).map((a3, s3) => {
      if (s3 < y[r2]) return (0, t.jsx)(i.motion.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.02 * r2 + 0.03 * s3 + Math.random() / 2 }, className: "px", style: { height: 24, width: 24 }, children: (0, t.jsx)(f, { entry: e2[n2 + y.slice(0, r2).reduce((e3, t2) => e3 + t2, 0) + s3], opacity: r2 / 53 }, s3) }, s3);
      return null;
    }) }, r2)) });
  }
  try {
    var x = window;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["CareersHeroPixels", 0, ({ pixels: e2 }) => {
    let [n2, { width: s2 }] = (0, a.useMeasure)();
    return (0, t.jsxs)("div", { ref: n2, className: "col-[2/-1] row-1 hidden flex-col overflow-x-clip pt-36 pb-16 lg:flex", children: [(0, t.jsx)("div", { className: "min-h-[392px] lg:min-h-[504px]", children: (0, t.jsx)(w, { pixels: e2, containerWidth: s2 }) }), (0, t.jsx)(i.motion.p, { className: "mt-6 text-caption-foreground text-sm duration-600", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 2.2 }, children: "Features, improvements, milestones over time." })] });
  }], 829220);
}, 2034, (e) => {
  "use strict";
  var t = e.i(68982), i = e.i(112086), a = e.i(269916), n = e.i(171517), s = e.i(894584), r = e.i(551360);
  try {
    var o = window;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["CareersTeam", 0, function({ formerCompaniesLogos: e2, teamPhotos: o2, teamTextPrimary: l, teamTextSecondary: d }) {
    return (0, t.jsx)("section", { className: "container", children: (0, t.jsxs)("div", { className: "flex flex-col items-center overflow-hidden border-subtle-stroke border-x", children: [(0, t.jsx)(s.AttioLine, { dashed: true }), (0, t.jsxs)("div", { className: "relative grid grid-cols-12 gap-y-15 py-20", children: [(0, t.jsx)(n.AttioDots, { className: "absolute inset-0" }), (0, t.jsxs)("div", { className: (0, r.cn)("relative col-[2/-2] flex max-w-md flex-col gap-y-3", "md:col-[2/9]"), children: [(0, t.jsx)("h2", { className: "text-balance text-secondary-foreground", children: l }), (0, t.jsx)("p", { className: "text-balance text-accent-foreground", children: d })] }), (0, t.jsx)(i.motion.div, { initial: "hidden", whileInView: "inView", transition: { staggerChildren: 0.05 }, viewport: { once: true }, className: (0, r.cn)("relative col-[2/-2] grid grid-cols-10 gap-2.5", "md:gap-3", "lg:grid-cols-10"), children: o2.map((e3, n2) => (0, t.jsx)(i.motion.div, { variants: { hidden: { filter: "blur(2px)", opacity: 0, rotate: (Math.random() - 0.5) * 1.5, scale: 0.99 }, inView: { filter: "blur(0px)", opacity: 1, rotate: 0, scale: 1 } }, transition: { duration: 0.5, ease: "easeOut" }, className: (0, r.cn)("col-span-4 flex h-40 w-full origin-center items-center justify-center overflow-hidden rounded-xl object-cover", "md:h-48", "lg:col-span-3 lg:h-64", "xl:h-80", { "col-span-6": [1, 2, 5].includes(n2), "lg:col-span-4": [2, 3].includes(n2) }), children: (0, t.jsx)(a.AttioStoryblokImage, { imageAsset: e3, className: "size-full object-cover", sizes: "(max-width: 768px) 200px, (max-width: 992px) 280px, (max-width: 1200px) 380px, 460px" }) }, e3.id)) })] }), (0, t.jsxs)("div", { className: "grid w-full grid-cols-12 gap-y-8 py-30", children: [(0, t.jsx)("p", { className: "col-[2/-2] text-center text-accent-foreground text-sm", children: "We\u2019ve sharpened our skills at..." }), (0, t.jsx)("div", { className: (0, r.cn)("col-[2/-2] grid w-full grid-cols-3 items-center justify-items-center gap-x-6 gap-y-5", "md:gap-y-6", "lg:grid-cols-6 lg:gap-x-8", "xl:col-[3/-3]"), children: e2.map((e3) => (0, t.jsx)(a.AttioStoryblokImage, { imageAsset: e3, className: (0, r.cn)("h-9 w-full object-contain", "md:h-10", "lg:h-12") }, e3.id)) })] })] }) });
  }]);
}, 716630, (e) => {
  "use strict";
  var t = e.i(68982);
  try {
    var i = window;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var a = window;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var s = window;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var r = e.i(385264), o = e.i(894584), l = e.i(861424), d = e.i(551360);
  try {
    var c = window;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let u = [{ description: "We believe in building with heart, creating something that not only works but feels thoughtfully crafted.", Illustration: function({ className: e2, style: i2 }) {
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("style", { children: `
                    @keyframes animation-build-with-love-A {
                        from {
                            stroke-dashoffset: 0%;
                        }
                        to {
                            stroke-dashoffset: -100%;
                        }
                    }
                    @keyframes animation-build-with-love-B {
                        from {
                            stroke-dashoffset: 0%;
                        }
                        to {
                            stroke-dashoffset: 100%;
                        }
                    }
                ` }), (0, t.jsxs)("svg", { width: "146", height: "216", viewBox: "0 0 146 216", fill: "none", className: e2, style: i2, children: [(0, t.jsx)("circle", { className: "origin-center transition-all", style: { animationDuration: "16s", animationIterationCount: "infinite", animationName: "animation-build-with-love-A", animationTimingFunction: "linear" }, cx: "56.7703", cy: "86.7703", r: "30.7703", stroke: "#B5BDC9", strokeLinecap: "round", strokeDasharray: "4 4" }), (0, t.jsx)("circle", { className: "origin-center transition-all", style: { animationDuration: "16s", animationIterationCount: "infinite", animationName: "animation-build-with-love-B", animationTimingFunction: "linear" }, cx: "87.2312", cy: "86.7703", r: "30.7703", stroke: "#B5BDC9", strokeLinecap: "round", strokeDasharray: "4 4" }), (0, t.jsx)("path", { d: "M73.5525 144.97L109.077 109.445C109.468 109.055 109.468 108.422 109.077 108.031L73.5525 72.5062C73.162 72.1157 72.5288 72.1157 72.1383 72.5062L36.6134 108.031C36.2228 108.422 36.2228 109.055 36.6134 109.445L72.1383 144.97C72.5288 145.361 73.162 145.361 73.5525 144.97Z", fill: "#FAFAFB", stroke: "#505967", strokeLinecap: "round" }), (0, t.jsx)("path", { d: "M72.9964 106V110.972M75.4808 108.486L70.5078 108.486", stroke: "#505967", strokeLinecap: "round" })] })] });
  }, illustrationClassName: "max-md:-mb-2", title: "Build with love." }, { description: "We build trust in individuals to make decisions and move forward without rigid hierarchy.", Illustration: function({ className: e2, style: i2 }) {
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("style", { children: `
                    @keyframes animation-context-over-control {
                        from {
                            stroke-dashoffset: 0%;
                        }
                        to {
                            stroke-dashoffset: 100%;
                        }
                    }
                ` }), (0, t.jsxs)("svg", { width: "146", height: "216", viewBox: "0 0 146 216", fill: "none", className: e2, style: i2, children: [(0, t.jsx)("path", { className: "origin-center transition-all", style: { animationDuration: "16s", animationIterationCount: "infinite", animationName: "animation-context-over-control", animationTimingFunction: "linear" }, d: "M72.7797 108.706L20.709 160.777C20.079 161.407 20.5252 162.484 21.4161 162.484H125.558C126.449 162.484 126.895 161.407 126.265 160.777L74.1939 108.706C73.8034 108.316 73.1703 108.316 72.7797 108.706Z", stroke: "#B5BDC9", strokeLinecap: "round", strokeDasharray: "4 4" }), (0, t.jsx)("circle", { cx: "73", cy: "108", r: "36", fill: "#FAFAFB", stroke: "#505967", strokeLinecap: "round" }), (0, t.jsx)("path", { d: "M73 106V110M75 108L71 108", stroke: "#505967", strokeLinecap: "round" })] })] });
  }, title: "Context over control." }, { description: "We always keep the focus on challenging ideas, not the individuals behind them.", Illustration: function({ className: e2, style: i2 }) {
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("style", { children: `
                    @keyframes animation-challenge-ideas {
                        from {
                            stroke-dashoffset: 0%;
                        }
                        to {
                            stroke-dashoffset: -100%;
                        }
                    }
                ` }), (0, t.jsxs)("svg", { width: "146", height: "216", viewBox: "0 0 146 216", fill: "none", className: e2, style: i2, children: [(0, t.jsx)("path", { className: "origin-center transition-all", style: { animationDuration: "20s", animationIterationCount: "infinite", animationName: "animation-challenge-ideas", animationTimingFunction: "linear" }, d: "M72.057 49.6727C72.3709 48.783 73.6291 48.783 73.943 49.6727L86.0742 84.0543C86.2381 84.5189 86.7161 84.7949 87.2005 84.7046L123.041 78.0197C123.969 77.8467 124.598 78.9363 123.984 79.653L100.275 107.35C99.9543 107.724 99.9543 108.276 100.275 108.65L123.984 136.347C124.598 137.064 123.969 138.153 123.041 137.98L87.2005 131.295C86.7161 131.205 86.2381 131.481 86.0742 131.946L73.943 166.327C73.6291 167.217 72.3709 167.217 72.057 166.327L59.9258 131.946C59.7619 131.481 59.2839 131.205 58.7995 131.295L22.9586 137.98C22.0311 138.153 21.402 137.064 22.0155 136.347L45.7253 108.65C46.0457 108.276 46.0457 107.724 45.7253 107.35L22.0155 79.653C21.402 78.9363 22.0311 77.8467 22.9586 78.0197L58.7995 84.7046C59.2839 84.7949 59.7619 84.5189 59.9258 84.0543L72.057 49.6727Z", stroke: "#B5BDC9", strokeLinecap: "round", strokeDasharray: "4 4" }), (0, t.jsx)("circle", { cx: "73", cy: "108", r: "36", fill: "#FAFAFB", stroke: "#505967", strokeLinecap: "round" }), (0, t.jsx)("path", { d: "M73 106V110M75 108L71 108", stroke: "#505967", strokeLinecap: "round" })] })] });
  }, title: "Challenge ideas, not people." }, { description: "We encourage bold, creative ideas that go beyond the limits of what\u2019s achievable.", Illustration: function({ className: e2, style: i2 }) {
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("style", { children: `
                    @keyframes animation-break-it-down-A {
                        from {
                            stroke-dashoffset: 0%;
                        }
                        to {
                            stroke-dashoffset: 100%;
                        }
                    }
                    @keyframes animation-break-it-down-B {
                        from {
                            stroke-dashoffset: 0%;
                        }
                        to {
                            stroke-dashoffset: -100%;
                        }
                    }
                ` }), (0, t.jsxs)("svg", { width: "146", height: "216", viewBox: "0 0 146 216", fill: "none", className: e2, style: i2, children: [(0, t.jsx)("path", { className: "origin-center transition-all", style: { animationDuration: "20s", animationIterationCount: "infinite", animationName: "animation-break-it-down-A", animationTimingFunction: "linear" }, d: "M118.906 80.6051L46.7045 61.2588C46.171 61.1159 45.6227 61.4324 45.4798 61.9659L26.1335 134.167C25.9905 134.701 26.3071 135.249 26.8406 135.392L99.0419 154.738C99.5754 154.881 100.124 154.565 100.267 154.031L119.613 81.8298C119.756 81.2964 119.439 80.748 118.906 80.6051Z", stroke: "#B5BDC9", strokeLinecap: "round", strokeDasharray: "4 4" }), (0, t.jsx)("path", { className: "origin-center transition-all", style: { animationDuration: "20s", animationIterationCount: "infinite", animationName: "animation-break-it-down-B", animationTimingFunction: "linear" }, d: "M119.617 134.167L100.27 61.9659C100.127 61.4325 99.579 61.1159 99.0455 61.2588L26.8442 80.6051C26.3107 80.748 25.9941 81.2964 26.1371 81.8298L45.4834 154.031C45.6263 154.565 46.1746 154.881 46.7081 154.738L118.909 135.392C119.443 135.249 119.759 134.701 119.617 134.167Z", stroke: "#B5BDC9", strokeLinecap: "round", strokeDasharray: "4 4" }), (0, t.jsx)("path", { d: "M73 107V111M75 109H71M105.048 78.0688V140.14C105.048 140.693 104.6 141.14 104.048 141.14H41.9766C41.4243 141.14 40.9766 140.693 40.9766 140.14L40.9766 78.0689C40.9766 77.5166 41.4243 77.0689 41.9766 77.0689L104.048 77.0688C104.6 77.0688 105.048 77.5166 105.048 78.0688Z", stroke: "#505967", fill: "#FAFAFB", strokeLinecap: "round" })] })] });
  }, title: "Break it down, amp it up." }];
  function p({ className: e2 }) {
    return (0, t.jsx)("div", { className: (0, d.cn)("grid w-full grid-cols-12 overflow-hidden", e2), children: (0, t.jsxs)("div", { className: "col-[2/-2] flex justify-between", children: [(0, t.jsx)(o.AttioLine, { dashed: true, vertical: true }), (0, t.jsx)(o.AttioLine, { dashed: true, vertical: true }), (0, t.jsx)(o.AttioLine, { dashed: true, vertical: true })] }) });
  }
  e.s(["CareersValues", 0, function({ valuesTextPrimary: e2, valuesTextSecondary: i2 }) {
    return (0, t.jsx)("section", { className: "container", children: (0, t.jsxs)("div", { className: "border-subtle-stroke border-x", children: [(0, t.jsx)(l.HeaderForSection, { title: e2, subtitle: i2, justify: "start" }), (0, t.jsx)(p, { className: "h-5" }), (0, t.jsxs)("div", { className: "relative grid grid-cols-12", children: [(0, t.jsxs)("div", { className: "absolute inset-0 flex flex-col justify-between", children: [(0, t.jsx)(o.AttioLine, { dashed: true }), (0, t.jsx)(r.AttioHatch, { className: "absolute inset-0" }), (0, t.jsx)(o.AttioLine, { dashed: true })] }), (0, t.jsx)("div", { className: (0, d.cn)("relative col-[2/-2] grid grid-cols-2 gap-px bg-white-500 p-px", "max-lg:grid-cols-1"), children: u.map((e3) => (0, t.jsxs)("div", { className: (0, d.cn)("grid h-fit grid-cols-12 items-center justify-items-center gap-y-4 bg-white-100 pt-4 pb-8", "md:h-48 md:grid-cols-[max-content_1fr] md:gap-0 md:py-0", "xl:h-52"), children: [(0, t.jsxs)("div", { className: (0, d.cn)("relative col-[2/6] flex aspect-square size-full items-center justify-center overflow-hidden", "md:col-1 md:aspect-146/216 md:w-auto"), children: [(0, t.jsx)("div", { className: (0, d.cn)("absolute inset-0 grid grid-cols-4 gap-px bg-white-300 pr-px", "max-md:hidden"), children: Array.from({ length: 24 }).map((e4, i3) => (0, t.jsx)("div", { className: "size-full bg-white-100" }, i3)) }), (0, t.jsx)(e3.Illustration, { className: (0, d.cn)("relative w-full", e3.illustrationClassName) })] }), (0, t.jsxs)("div", { className: (0, d.cn)("col-[2/-2] flex flex-col gap-y-1.5", "md:col-2 md:grid md:grid-cols-12 md:gap-y-2", "lg:gap-y-1.5", "xl:gap-y-2"), children: [(0, t.jsx)("h3", { className: (0, d.cn)("font-semibold! text-base", "md:col-[2/-2] md:text-lg", "lg:text-base", "xl:text-lg"), children: e3.title }), (0, t.jsx)("p", { className: (0, d.cn)("text-pretty text-sm text-tertiary-foreground", "md:col-[2/-2] md:text-base", "lg:text-sm", "xl:text-base"), children: e3.description })] })] }, e3.title)) })] }), (0, t.jsx)(p, { className: "h-21 md:h-40" })] }) });
  }], 716630);
}, 533919, (e) => {
  "use strict";
  var t = e.i(68982), i = e.i(167815), a = e.i(863520);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["ButtonToScroll", 0, function({ scrollTargetId: e2, updateAddress: n2, children: s, ...r }) {
    return (0, t.jsx)(i.Button, { ...r, onClick: () => (0, a.scrollToElementWithId)(e2, n2), children: s });
  }]);
}]);
