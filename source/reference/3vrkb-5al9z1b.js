;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "d75bc0ae-f042-4320-f906-817cd6bbb44a");
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
    var s = "u" > typeof window ? window : e.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let r = String.raw, l = (() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return false;
    }
    return true;
  })(), o = "u" > typeof CSS && CSS.supports && CSS.supports("line-height", "mod(1,1)"), u = "u" > typeof matchMedia ? matchMedia("(prefers-reduced-motion: reduce)") : null, c = "--_number-flow-d-opacity", d = "--_number-flow-d-width", h = "--_number-flow-dx", p = "--_number-flow-d", m = (() => {
    try {
      return CSS.registerProperty({ name: c, syntax: "<number>", inherits: false, initialValue: "0" }), CSS.registerProperty({ name: h, syntax: "<length>", inherits: true, initialValue: "0px" }), CSS.registerProperty({ name: d, syntax: "<number>", inherits: false, initialValue: "0" }), CSS.registerProperty({ name: p, syntax: "<number>", inherits: true, initialValue: "0" }), true;
    } catch {
      return false;
    }
  })(), f = "round(nearest, calc(var(--number-flow-mask-height, 0.25em) / 2), 1px)", g = `calc(${f} * 2)`, y = "var(--number-flow-mask-width, 0.5em)", v = `calc(${y} / var(--scale-x))`, b = "#000 0, transparent 71%", w = r`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:1}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${d}) / var(--width));transform:translateX(var(${h})) scaleX(var(--scale-x));margin:0 calc(-1 * ${y});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${v},#000 calc(100% - ${v}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${g},#000 calc(100% - ${g}),transparent 100% ),radial-gradient(at bottom right,${b}),radial-gradient(at bottom left,${b}),radial-gradient(at top left,${b}),radial-gradient(at top right,${b});-webkit-mask-size:100% calc(100% - ${g} * 2),calc(100% - ${v} * 2) 100%,${v} ${g},${v} ${g},${v} ${g},${v} ${g};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${f} ${y};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${h})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${p})}.digit__num,.number .section::after{padding:${f} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${c}))}`, _ = "u" > typeof HTMLElement ? HTMLElement : class {
  };
  r`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:1}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${f} 0}.symbol{white-space:pre}`;
  try {
    var x = "u" > typeof window ? window : e.g;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var M = "u" > typeof window ? window : e.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let k = (e2, t2, i2) => {
    let s2 = document.createElement(e2), [n2, a2] = Array.isArray(t2) ? [void 0, t2] : [t2, i2];
    return n2 && Object.assign(s2, n2), null == a2 || a2.forEach((e3) => s2.appendChild(e3)), s2;
  }, j = o && l && m;
  class E extends _ {
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
      let { pre: i2, integer: s2, fraction: n2, post: a2, value: r2 } = e2;
      if (this.created) {
        let l2 = this._data;
        this._data = e2, this.computedTrend = "function" == typeof this.trend ? this.trend(l2.value, r2) : this.trend, this.computedAnimated = j && this._animated && (!this.respectMotionPreference || !(null != u && u.matches)) && this.offsetWidth > 0 && this.offsetHeight > 0 && "visible" === this.ownerDocument.visibilityState, null == (t2 = this.plugins) || t2.forEach((t3) => {
          var i3;
          return null == (i3 = t3.onUpdate) ? void 0 : i3.call(t3, e2, l2, this);
        }), this.batched || this.willUpdate(), this._pre.update(i2), this._num.update({ integer: s2, fraction: n2 }), this._post.update(a2), this.batched || this.didUpdate();
      } else {
        this._data = e2, this.attachShadow({ mode: "open" });
        try {
          this._internals ?? (this._internals = this.attachInternals()), this._internals.role = "img";
        } catch {
        }
        let t3 = document.createElement("style");
        this.nonce && (t3.nonce = this.nonce), t3.textContent = w, this.shadowRoot.appendChild(t3), this._pre = new S(this, i2, { justify: "right", part: "left" }), this.shadowRoot.appendChild(this._pre.el), this._num = new A(this, s2, n2), this.shadowRoot.appendChild(this._num.el), this._post = new S(this, a2, { justify: "left", part: "right" }), this.shadowRoot.appendChild(this._post.el), this.created = true;
      }
      try {
        this._internals.ariaLabel = e2.valueAsString;
      } catch {
      }
    }
    willUpdate() {
      this._preUpdated = j && this._animated && (!this.respectMotionPreference || !(null != u && u.matches)) && "visible" === this.ownerDocument.visibilityState, this._preUpdated && (this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate());
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
  E.defaultProps = { transformTiming: { duration: 900, easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)" }, spinTiming: void 0, opacityTiming: { duration: 450, easing: "ease-out" }, animated: true, trend: (e2, t2) => Math.sign(t2 - e2), respectMotionPreference: true, plugins: void 0, digits: void 0 };
  class A {
    constructor(e2, t2, i2, { className: s2, ...n2 } = {}) {
      this.flow = e2, this._integer = new $(e2, t2, { justify: "right", part: "integer" }), this._fraction = new $(e2, i2, { justify: "left", part: "fraction" }), this._inner = k("span", { className: "number__inner" }, [this._integer.el, this._fraction.el]), this.el = k("span", { ...n2, part: "number", className: `number ${s2 ?? ""}` }, [this._inner]);
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
      let t2 = this._prevLeft - e2.left, i2 = this.el.offsetWidth, s2 = this._prevWidth - i2;
      this.el.style.setProperty("--width", String(i2)), this.el.animate({ [h]: [`${t2}px`, "0px"], [d]: [s2, 0] }, { ...this.flow.transformTiming, composite: "accumulate" });
    }
  }
  class C {
    constructor(e2, t2, { justify: i2, className: s2, ...n2 }, a2) {
      this.flow = e2, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (e3) => () => {
        this.children.delete(e3);
      }, this.justify = i2;
      const r2 = t2.map((e3) => this.addChar(e3).el);
      this.el = k("span", { ...n2, className: `section section--justify-${i2} ${s2 ?? ""}` }, a2 ? a2(r2) : r2);
    }
    addChar(e2, { startDigitsAtZero: t2 = false, ...i2 } = {}) {
      let s2 = "integer" === e2.type || "fraction" === e2.type ? new P(this, e2.type, t2 ? 0 : e2.value, e2.pos, { ...i2, onRemove: this.onCharRemove(e2.key) }) : new U(this, e2.type, e2.value, { ...i2, onRemove: this.onCharRemove(e2.key) });
      return this.children.set(e2.key, s2), s2;
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
      let t2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map(), s2 = "left" === this.justify, n2 = s2 ? "prepend" : "append";
      if ((function(e3, t3, { reverse: i3 = false } = {}) {
        let s3 = e3.length;
        for (let n3 = i3 ? s3 - 1 : 0; i3 ? n3 >= 0 : n3 < s3; i3 ? n3-- : n3++) t3(e3[n3], n3);
      })(e2, (e3) => {
        let s3;
        this.children.has(e3.key) ? (s3 = this.children.get(e3.key), i2.set(e3, s3), this.unpop(s3), s3.present = true) : (s3 = this.addChar(e3, { startDigitsAtZero: true, animateIn: true }), t2.set(e3, s3)), this.el[n2](s3.el);
      }, { reverse: s2 }), this.flow.computedAnimated) {
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
  class $ extends C {
    update(e2) {
      let t2 = /* @__PURE__ */ new Map();
      this.children.forEach((i2, s2) => {
        e2.find((e3) => e3.key === s2) || t2.set(s2, i2), this.unpop(i2);
      }), this.addNewAndUpdateExisting(e2), t2.forEach((e3) => {
        e3 instanceof P && e3.update(0);
      }), this.pop(t2);
    }
  }
  class S extends C {
    update(e2) {
      let t2 = /* @__PURE__ */ new Map();
      this.children.forEach((i2, s2) => {
        e2.find((e3) => e3.key === s2) || t2.set(s2, i2);
      }), this.pop(t2), this.addNewAndUpdateExisting(e2);
    }
  }
  class R {
    constructor(e2, t2, { onRemove: i2, animateIn: s2 = false } = {}) {
      this.flow = e2, this.el = t2, this._present = true, this._remove = () => {
        var e3;
        this.el.remove(), null == (e3 = this._onRemove) || e3.call(this);
      }, this.el.classList.add("animate-presence"), this.flow.computedAnimated && s2 && this.el.animate({ [c]: [-0.9999, 0] }, { ...this.flow.opacityTiming, composite: "accumulate" }), this._onRemove = i2;
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
  class N extends R {
    constructor(e2, t2, i2, s2) {
      super(e2.flow, i2, s2), this.section = e2, this.value = t2, this.el = i2;
    }
  }
  class P extends N {
    constructor(e2, t2, i2, s2, n2) {
      var a2, r2;
      const l2 = ((null == (r2 = null == (a2 = e2.flow.digits) ? void 0 : a2[s2]) ? void 0 : r2.max) ?? 9) + 1, o2 = Array.from({ length: l2 }).map((e3, t3) => {
        let s3 = k("span", { className: "digit__num" }, [document.createTextNode(String(t3))]);
        return t3 !== i2 && s3.setAttribute("inert", ""), s3.style.setProperty("--n", String(t3)), s3;
      }), u2 = k("span", { part: `digit ${t2}-digit`, className: "digit" }, o2);
      u2.style.setProperty("--current", String(i2)), u2.style.setProperty("--length", String(l2)), super(e2, i2, u2, n2), this.pos = s2, this._onAnimationsFinish = () => {
        this.el.classList.remove("is-spinning");
      }, this._numbers = o2, this.length = l2;
    }
    willUpdate(e2) {
      let t2 = this.el.getBoundingClientRect();
      this._prevValue = this.value;
      let i2 = t2[this.section.justify] - e2[this.section.justify], s2 = t2.width / 2;
      this._prevCenter = "left" === this.section.justify ? i2 + s2 : i2 - s2;
    }
    update(e2) {
      this.el.style.setProperty("--current", String(e2)), this._numbers.forEach((t2, i2) => i2 === e2 ? t2.removeAttribute("inert") : t2.setAttribute("inert", "")), this.value = e2;
    }
    didUpdate(e2) {
      let t2 = this.el.getBoundingClientRect(), i2 = t2[this.section.justify] - e2[this.section.justify], s2 = t2.width / 2, n2 = "left" === this.section.justify ? i2 + s2 : i2 - s2, a2 = this._prevCenter - n2;
      a2 && this.el.animate({ transform: [`translateX(${a2}px)`, "none"] }, { ...this.flow.transformTiming, composite: "accumulate" });
      let r2 = this.getDelta();
      r2 && (this.el.classList.add("is-spinning"), this.el.animate({ [p]: [-r2, 0] }, { ...this.flow.spinTiming ?? this.flow.transformTiming, composite: "accumulate" }), this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, { once: true }));
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
  class U extends N {
    constructor(e2, t2, i2, s2) {
      const n2 = k("span", { className: "symbol__value", textContent: i2 });
      super(e2, i2, k("span", { part: `symbol ${t2}`, className: "symbol" }, [n2]), s2), this.type = t2, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (e3) => () => {
        this._children.delete(e3);
      }, this._children.set(i2, new R(this.flow, n2, { onRemove: this._onChildRemove(i2) }));
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
          let t3 = k("span", { className: "symbol__value", textContent: e2 });
          this.el.appendChild(t3), this._children.set(e2, new R(this.flow, t3, { animateIn: true, onRemove: this._onChildRemove(e2) }));
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
    var B = "u" > typeof window ? window : e.g;
    B._sentryModuleMetadata = B._sentryModuleMetadata || {}, B._sentryModuleMetadata[new B.Error().stack] = Object.assign({}, B._sentryModuleMetadata[new B.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var T = t;
  try {
    var V = "u" > typeof window ? window : e.g;
    V._sentryModuleMetadata = V._sentryModuleMetadata || {}, V._sentryModuleMetadata[new V.Error().stack] = Object.assign({}, V._sentryModuleMetadata[new V.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let O = parseInt(T.version.match(/^(\d+)\./)?.[1]) >= 19;
  class W extends E {
    attributeChangedCallback(e2, t2, i2) {
      this[e2] = JSON.parse(i2);
    }
  }
  W.observedAttributes = O ? [] : ["data", "digits"], "u" > typeof HTMLElement && "u" > typeof customElements && !customElements.get("number-flow-react") && customElements.define("number-flow-react", W);
  let F = {}, L = O ? function(e2) {
    return e2;
  } : JSON.stringify;
  function I(e2) {
    let { transformTiming: t2, spinTiming: i2, opacityTiming: s2, animated: n2, respectMotionPreference: a2, trend: r2, plugins: l2, ...o2 } = e2;
    return [{ transformTiming: t2, spinTiming: i2, opacityTiming: s2, animated: n2, respectMotionPreference: a2, trend: r2, plugins: l2 }, o2];
  }
  class X extends T.Component {
    updateProperties(e2) {
      if (!this.el) return;
      this.el.batched = !this.props.isolate;
      let [t2] = I(this.props);
      Object.entries(t2).forEach(([e3, t3]) => {
        this.el[e3] = t3 ?? W.defaultProps[e3];
      }), e2?.onAnimationsStart && this.el.removeEventListener("animationsstart", e2.onAnimationsStart), this.props.onAnimationsStart && this.el.addEventListener("animationsstart", this.props.onAnimationsStart), e2?.onAnimationsFinish && this.el.removeEventListener("animationsfinish", e2.onAnimationsFinish), this.props.onAnimationsFinish && this.el.addEventListener("animationsfinish", this.props.onAnimationsFinish);
    }
    componentDidMount() {
      this.updateProperties(), O && this.el && (this.el.digits = this.props.digits, this.el.data = this.props.data);
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
      let [e2, { innerRef: t2, className: i2, data: s2, nonce: n2, willChange: a2, isolate: r2, group: l2, digits: o2, onAnimationsStart: u2, onAnimationsFinish: c2, ...d2 }] = I(this.props);
      return T.createElement("number-flow-react", { ref: this.handleRef, "data-will-change": a2 ? "" : void 0, class: i2, nonce: n2, ...d2, dangerouslySetInnerHTML: { __html: "" }, suppressHydrationWarning: true, digits: L(o2), data: L(s2) });
    }
    constructor(e2) {
      super(e2), this.handleRef = this.handleRef.bind(this);
    }
  }
  let K = T.forwardRef(function({ value: e2, locales: t2, format: i2, prefix: s2, suffix: n2, ...a2 }, r2) {
    T.useImperativeHandle(r2, () => l2.current, []);
    let l2 = T.useRef(void 0), o2 = T.useContext(H);
    o2?.useRegister(l2);
    let u2 = T.useMemo(() => t2 ? JSON.stringify(t2) : "", [t2]), c2 = T.useMemo(() => i2 ? JSON.stringify(i2) : "", [i2]), d2 = T.useMemo(() => (function(e3, t3, i3, s3) {
      let n3 = t3.formatToParts(e3);
      i3 && n3.unshift({ type: "prefix", value: i3 }), s3 && n3.push({ type: "suffix", value: s3 });
      let a3 = [], r3 = [], l3 = [], o3 = [], u3 = {}, c3 = (e4) => `${e4}:${u3[e4] = (u3[e4] ?? -1) + 1}`, d3 = "", h2 = false, p2 = false;
      for (let e4 of n3) {
        d3 += e4.value;
        let t4 = "minusSign" === e4.type || "plusSign" === e4.type ? "sign" : e4.type;
        "integer" === t4 ? (h2 = true, r3.push(...e4.value.split("").map((e5) => ({ type: t4, value: parseInt(e5) })))) : "group" === t4 ? r3.push({ type: t4, value: e4.value }) : "decimal" === t4 ? (p2 = true, l3.push({ type: t4, value: e4.value, key: c3(t4) })) : "fraction" === t4 ? l3.push(...e4.value.split("").map((e5) => ({ type: t4, value: parseInt(e5), key: c3(t4), pos: -1 - u3[t4] }))) : (h2 || p2 ? o3 : a3).push({ type: t4, value: e4.value, key: c3(t4) });
      }
      let m2 = [];
      for (let e4 = r3.length - 1; e4 >= 0; e4--) {
        let t4 = r3[e4];
        m2.unshift("integer" === t4.type ? { ...t4, key: c3(t4.type), pos: u3[t4.type] } : { ...t4, key: c3(t4.type) });
      }
      return { pre: a3, integer: m2, fraction: l3, post: o3, valueAsString: d3, value: "string" == typeof e3 ? parseFloat(e3) : e3 };
    })(e2, F[`${u2}:${c2}`] ??= new Intl.NumberFormat(t2, i2), s2, n2), [e2, u2, c2, s2, n2]);
    return T.createElement(X, { ...a2, group: o2, data: d2, innerRef: l2 });
  }), H = T.createContext(void 0);
  try {
    var D = "u" > typeof window ? window : e.g;
    D._sentryModuleMetadata = D._sentryModuleMetadata || {}, D._sentryModuleMetadata[new D.Error().stack] = Object.assign({}, D._sentryModuleMetadata[new D.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  ((e2 = "") => r`:where(number-flow${e2}){line-height:1}number-flow${e2} > span{font-kerning:none;display:inline-block;padding:${g} 0}`)("-react"), e.s([], 181147), e.s(["default", 0, K], 78612);
}, 155768, (e) => {
  "use strict";
  var t = e.i(68982);
  e.i(181147);
  var i = e.i(78612), s = e.i(224253), n = e.i(493115), a = e.i(112086), r = e.i(702915), l = e.i(301718), o = e.i(936991), u = e.i(796851), c = e.i(202355), d = e.i(992766), h = e.i(856757), p = e.i(64385), m = e.i(551360);
  try {
    var f = window;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let g = { attack: 6e-3, highpassFrequency: 0, lowpassFrequency: 1047, lowpassQ: 1, release: 8e-3, singleVoice: true, sustain: 0.012, toneFrequency: 349, toneMix: 1, volume: 0.03 };
  function y(e2) {
    return Math.exp(-(e2 < 0 ? -e2 : e2) / 36);
  }
  function v(e2) {
    if (e2 <= -1 || e2 >= 1) return 0;
    let t2 = 1 - e2 * e2;
    return t2 * t2;
  }
  function b(e2, t2, i2, s2) {
    let n2 = e2[i2 - 1], a2 = 0;
    for (let r2 = 0; r2 < 200; r2++) {
      let l2 = (r2 + 0.5) / 200 * n2;
      for (; a2 < i2 && e2[a2] < l2; ) a2++;
      let o2 = a2 < i2 ? a2 : i2 - 1, u2 = o2 > 0 ? e2[o2 - 1] : 0, c2 = t2[o2] > 0 ? (l2 - u2) / t2[o2] : 0;
      s2[r2] = o2 + c2;
    }
  }
  function w(e2, t2, i2, s2) {
    let n2 = 0, a2 = 0;
    for (let r2 = 0; r2 < e2; r2++) {
      let l2 = r2 + 0.5, o2 = (function(e3, t3) {
        let i3 = t3 - 380;
        return e3 < 380 ? +Math.exp(-(380 - e3) / 330) : e3 > i3 ? +Math.exp(-(e3 - i3) / 330) : 1;
      })(l2, e2);
      s2.densityBase[r2] = o2, n2 += o2, s2.cdfBase[r2] = n2;
      let u2 = i2 > 0 ? Math.max(0, o2 + -0.08 * i2 * y(l2 - t2)) : o2;
      s2.densityFull[r2] = u2, a2 += u2, s2.cdfFull[r2] = a2;
    }
    b(s2.cdfBase, s2.densityBase, e2, s2.positionsBase), b(s2.cdfFull, s2.densityFull, e2, s2.positionsFull);
  }
  let _ = "var(--color-primary-foreground)", x = [0.4, 0, 0.2, 1], M = /* @__PURE__ */ (function(e2, t2, i2, s2) {
    return (n2) => {
      if (n2 <= 0) return 0;
      if (n2 >= 1) return 1;
      let a2 = 0, r2 = 1;
      for (let e3 = 0; e3 < 20; e3++) {
        let e4 = (a2 + r2) / 2, i3 = 1 - e4;
        3 * i3 * i3 * e4 * t2 + 3 * i3 * e4 * e4 * s2 + e4 * e4 * e4 < n2 ? a2 = e4 : r2 = e4;
      }
      let l2 = (a2 + r2) / 2, o2 = 1 - l2;
      return 3 * o2 * o2 * l2 * e2 + 3 * o2 * l2 * l2 * i2 + l2 * l2 * l2;
    };
  })(...x), k = { duration: 0.15, ease: x }, j = { duration: 0.4, ease: x }, E = { duration: 0.2, ease: x }, A = [0.22, 1, 0.36, 1], C = { damping: 28, mass: 1, stiffness: 220 }, $ = "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.191) 12.5%, rgba(0,0,0,0.562) 25%, rgba(0,0,0,0.879) 37.5%, black 50%, rgba(0,0,0,0.879) 62.5%, rgba(0,0,0,0.562) 75%, rgba(0,0,0,0.191) 87.5%, transparent 100%)", S = "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.050) 12.5%, rgba(0,0,0,0.135) 25%, rgba(0,0,0,0.368) 37.5%, black 50%, rgba(0,0,0,0.368) 62.5%, rgba(0,0,0,0.135) 75%, rgba(0,0,0,0.050) 87.5%, transparent 100%)", R = "linear-gradient(90deg, transparent 0, black 40px, black calc(100% - 40px), transparent 100%)";
  function N(e2) {
    return 380 + (e2 + 0.5) * 144;
  }
  function P({ year: e2, leftPx: i2, isActive: s2, isHovered: n2 }) {
    let r2 = !s2 && n2;
    return (0, t.jsx)(a.motion.span, { initial: false, animate: { color: s2 ? _ : r2 ? "var(--color-accent-foreground)" : "var(--color-caption-foreground)" }, transition: s2 ? E : r2 ? k : j, style: { left: `${i2}px` }, className: "absolute bottom-full -translate-x-1/2 -translate-y-3.5 whitespace-nowrap text-overline", children: e2 });
  }
  let U = (0, h.memo)(function({ xMv: e2, scaleXMv: i2, color: s2 }) {
    return (0, t.jsx)(a.motion.span, { className: "absolute top-0 block", style: { backgroundColor: s2, height: "48px", left: 0, scaleX: i2, width: "1px", x: e2 } });
  });
  function B({ stripWidth: e2, activeCenter: t2, activeStrength: i2, hoverCenter: s2, hoverStrength: n2 }) {
    let a2 = (0, h.useRef)(null);
    (null === a2.current || a2.current.densityBase.length !== e2) && (a2.current = { cdfBase: Array(e2), cdfFull: Array(e2), densityBase: Array(e2), densityFull: Array(e2), positionsBase: Array(200), positionsFull: Array(200) }, w(e2, 0, 0, a2.current));
    let l2 = (0, h.useRef)(null);
    if (null === l2.current) {
      let e3 = a2.current.positionsBase, s3 = t2.get(), n3 = 0.95 * i2.get();
      l2.current = { scaleXs: Array.from({ length: 200 }, (t3, i3) => {
        let a3 = n3 * v((e3[i3] - s3) / 144);
        return (0, r.motionValue)(1 + a3);
      }), xs: Array.from({ length: 200 }, (t3, i3) => (0, r.motionValue)(e3[i3])) };
    }
    let u2 = l2.current, c2 = (0, h.useCallback)(() => {
      let r2 = a2.current;
      if (!r2) return;
      let l3 = t2.get(), o2 = i2.get(), c3 = s2.get(), d2 = n2.get();
      w(e2, c3, d2, r2);
      for (let t3 = 0; t3 < 200; t3++) {
        let i3 = r2.positionsBase[t3], s3 = r2.positionsFull[t3], n3 = y(i3 - c3), a3 = s3 * n3 + i3 * (1 - n3);
        u2.xs[t3].set(a3);
        let h2 = y(a3 - c3), p2 = 1.9 * d2 * (function(e3, t4) {
          var i4;
          let s4 = t4 - 380;
          if (e3 >= 380 && e3 <= s4) return 1;
          let n4 = e3 < 380 ? 380 - e3 : e3 - s4;
          return n4 >= 40 ? 0 : (i4 = 1 - n4 / 40) <= 0 ? 0 : i4 >= 1 ? 1 : i4 * i4 * (3 - 2 * i4);
        })(a3, e2), m2 = 0.95 * o2, f2 = Math.min(p2 * h2 + m2 * v((a3 - l3) / 144), Math.max(p2, m2));
        u2.scaleXs[t3].set(1 + f2);
      }
    }, [e2, t2, i2, s2, n2, u2]);
    return (0, o.useMotionValueEvent)(t2, "change", c2), (0, o.useMotionValueEvent)(i2, "change", c2), (0, o.useMotionValueEvent)(s2, "change", c2), (0, o.useMotionValueEvent)(n2, "change", c2), (0, h.useLayoutEffect)(() => {
      c2();
    }, [c2]), u2;
  }
  function T({ stripWidth: e2, lineGeometry: i2 }) {
    return (0, t.jsx)("div", { "aria-hidden": "true", className: "relative shrink-0", style: { height: "48px", width: `${e2}px` }, children: i2.xs.map((e3, s2) => (0, t.jsx)(U, { xMv: e3, scaleXMv: i2.scaleXs[s2], color: "var(--color-subtle-stroke)" }, s2)) });
  }
  function V({ stripWidth: e2, hoverCenter: i2, hoverStrength: s2, lineGeometry: n2 }) {
    let r2 = (0, c.useTransform)(i2, (e3) => e3 - 144), l2 = (0, c.useTransform)(r2, (e3) => -e3), o2 = (0, c.useTransform)(s2, (e3) => 0.45 * e3);
    return (0, t.jsx)(a.motion.div, { "aria-hidden": "true", className: "pointer-events-none absolute inset-y-0 overflow-hidden", style: { left: 0, maskImage: S, maskPosition: "0 0", maskRepeat: "no-repeat", maskSize: "288px 100%", opacity: o2, WebkitMaskImage: S, WebkitMaskPosition: "0 0", WebkitMaskRepeat: "no-repeat", WebkitMaskSize: "288px 100%", width: "288px", x: r2 }, children: (0, t.jsx)(a.motion.div, { className: "absolute inset-y-0 left-0", style: { height: "48px", width: `${e2}px`, x: l2 }, children: n2.xs.map((e3, i3) => (0, t.jsx)(U, { xMv: e3, scaleXMv: n2.scaleXs[i3], color: "var(--color-strong-stroke)" }, i3)) }) });
  }
  function O({ stripWidth: e2, activeCenter: i2, activeStrength: s2, lineGeometry: n2 }) {
    let r2 = (0, c.useTransform)(i2, (e3) => e3 - 144), l2 = (0, c.useTransform)(r2, (e3) => -e3);
    return (0, t.jsx)(a.motion.div, { "aria-hidden": "true", className: "pointer-events-none absolute inset-y-0 overflow-hidden", style: { left: 0, maskImage: $, maskPosition: "0 0", maskRepeat: "no-repeat", maskSize: "288px 100%", opacity: s2, WebkitMaskImage: $, WebkitMaskPosition: "0 0", WebkitMaskRepeat: "no-repeat", WebkitMaskSize: "288px 100%", width: "288px", x: r2 }, children: (0, t.jsx)(a.motion.div, { className: "absolute inset-y-0 left-0", style: { height: "48px", width: `${e2}px`, x: l2 }, children: n2.xs.map((e3, i3) => (0, t.jsx)(U, { xMv: e3, scaleXMv: n2.scaleXs[i3], color: _ }, i3)) }) });
  }
  function W(e2) {
    let t2 = Math.min(6 * e2, 18);
    return { animationDuration: t2 > 0 ? t2 / 30 : 0, clicks: t2 };
  }
  function F({ allYears: e2, currentYear: i2, className: a2 }) {
    let [r2, o2] = (0, h.useState)(null), [c2, d2] = (0, h.useState)(null), f2 = (0, p.useClickSound)(g), y2 = 760 + 144 * e2.length, v2 = e2.indexOf(i2), b2 = c2 ?? v2, w2 = N(v2 >= 0 ? v2 : 0), _2 = (0, l.useMotionValue)(w2), x2 = (0, l.useMotionValue)(1), k2 = (0, l.useMotionValue)(w2), j2 = (0, u.useSpring)(k2, C), E2 = (0, l.useMotionValue)(0), $2 = (0, h.useRef)(null), S2 = (0, h.useRef)(null), U2 = (0, h.useRef)(null), L2 = N(v2 >= 0 ? v2 : 0), I2 = (0, h.useCallback)((e3, t2) => {
      if (S2.current?.target === e3) return;
      if (S2.current?.stop(), t2 <= 0 || _2.get() === e3) {
        _2.set(e3), S2.current = null;
        return;
      }
      let i3 = (0, n.animate)(_2, e3, { bounce: 0.18, duration: t2, type: "spring" });
      S2.current = { stop: () => i3.stop(), target: e3 }, i3.then(() => {
        S2.current?.target === e3 && (S2.current = null);
      });
    }, [_2]);
    (0, h.useEffect)(() => {
      d2(null);
      let e3 = _2.get();
      if (e3 === L2 || S2.current?.target === L2) return;
      let { animationDuration: t2 } = W(Math.abs(L2 - e3) / 144);
      I2(L2, t2);
    }, [L2, _2, I2]), (0, h.useEffect)(() => () => {
      S2.current?.stop(), U2.current?.stop();
    }, []);
    let X2 = (0, h.useRef)(false), K2 = (0, h.useCallback)((e3) => {
      U2.current?.stop();
      let t2 = (0, n.animate)(E2, e3, { duration: e3 > 0 ? 0.55 : 0.5, ease: A });
      U2.current = { stop: () => t2.stop() };
    }, [E2]), H2 = (0, h.useCallback)((t2) => {
      let i3 = $2.current;
      if (!i3) return;
      let s2 = i3.getBoundingClientRect(), n2 = t2.clientX - s2.left, a3 = t2.clientY - s2.top, r3 = n2 - 380, l2 = 144 * e2.length, u2 = n2;
      if (r3 >= 0 && r3 < l2) {
        let t3 = Math.floor(r3 / 144);
        a3 < 0 && (u2 = N(t3));
        let i4 = e2[t3];
        o2((e3) => e3 === i4 ? e3 : i4);
      } else o2((e3) => null === e3 ? e3 : null);
      X2.current || (X2.current = true, 0.05 > E2.get() && j2.jump(u2), K2(1)), k2.set(u2);
    }, [e2, j2, k2, E2, K2]), D2 = (0, h.useCallback)(() => {
      X2.current = false, o2(null), K2(0);
    }, [K2]), z2 = B({ activeCenter: _2, activeStrength: x2, hoverCenter: j2, hoverStrength: E2, stripWidth: y2 });
    return (0, t.jsx)("div", { className: (0, m.cn)("relative", a2), children: (0, t.jsx)("div", { className: "flex w-full items-end justify-center overflow-hidden pt-8 pb-9", style: { maskImage: R, WebkitMaskImage: R }, children: (0, t.jsxs)("div", { ref: $2, className: "relative", style: { height: "48px", width: `${y2}px` }, children: [e2.map((e3, i3) => (0, t.jsx)(P, { year: e3, leftPx: N(i3), isActive: i3 === b2, isHovered: e3 === r2 }, e3)), (0, t.jsx)(T, { stripWidth: y2, lineGeometry: z2 }), (0, t.jsx)(V, { stripWidth: y2, hoverCenter: j2, hoverStrength: E2, lineGeometry: z2 }), (0, t.jsx)(O, { stripWidth: y2, activeCenter: _2, activeStrength: x2, lineGeometry: z2 }), (0, t.jsx)("div", { className: "absolute", style: { height: "80px", left: 0, top: "-32px", width: `${y2}px` }, onPointerMove: H2, onPointerLeave: D2, children: (0, t.jsx)("div", { className: "absolute flex", style: { height: "80px", left: "380px", top: 0, width: `${144 * e2.length}px` }, children: e2.map((e3, n2) => (0, t.jsx)(s.default, { href: `/changelog/${e3}`, scroll: false, "aria-label": `Browse changelog for ${e3}`, "aria-current": e3 === i2 ? "page" : void 0, onClick: () => {
      if (n2 === b2) return;
      let { clicks: e4, animationDuration: t2 } = W(Math.abs(n2 - v2));
      d2(n2), I2(N(n2), t2), e4 > 0 && f2(e4, { animationDuration: t2, timeEase: M });
    }, className: "flex-1" }, e3)) }) })] }) }) });
  }
  let L = { damping: 35, stiffness: 500, type: "spring" };
  function I({ allYears: e2, currentYear: i2, className: s2 }) {
    let r2 = (0, d.useRouter)(), o2 = (0, p.useClickSound)(g), c2 = 760 + 144 * e2.length, f2 = Math.max(0, e2.indexOf(i2)), y2 = (0, h.useCallback)((e3) => c2 / 2 - N(e3), [c2]), v2 = y2(f2), b2 = N(f2), w2 = (0, l.useMotionValue)(v2), _2 = (0, h.useRef)(null), x2 = (0, h.useRef)(0), k2 = (0, h.useRef)(false), [j2, E2] = (0, h.useState)(null), [$2, S2] = (0, h.useState)(null), U2 = $2 ?? f2, F2 = (0, l.useMotionValue)(b2), X2 = (0, l.useMotionValue)(1), K2 = (0, l.useMotionValue)(b2), H2 = (0, u.useSpring)(K2, C), D2 = (0, l.useMotionValue)(0), z2 = (0, h.useRef)(null), Y2 = (0, h.useRef)(null), G2 = (0, h.useCallback)((e3) => {
      if (_2.current?.stop(), w2.get() === e3) return;
      let t2 = (0, n.animate)(w2, e3, L);
      _2.current = { stop: () => t2.stop() };
    }, [w2]);
    (0, h.useEffect)(() => {
      k2.current || (S2(null), G2(v2));
    }, [v2, G2]);
    let J2 = (0, h.useCallback)((e3, t2) => {
      if (z2.current?.target === e3) return;
      if (z2.current?.stop(), t2 <= 0 || F2.get() === e3) {
        F2.set(e3), z2.current = null;
        return;
      }
      let i3 = (0, n.animate)(F2, e3, { bounce: 0.18, duration: t2, type: "spring" });
      z2.current = { stop: () => i3.stop(), target: e3 }, i3.then(() => {
        z2.current?.target === e3 && (z2.current = null);
      });
    }, [F2]), q2 = N(f2);
    (0, h.useEffect)(() => {
      let e3 = F2.get();
      if (e3 === q2 || z2.current?.target === q2) return;
      let { animationDuration: t2 } = W(Math.abs(q2 - e3) / 144);
      J2(q2, t2);
    }, [q2, F2, J2]), (0, h.useEffect)(() => () => {
      _2.current?.stop(), z2.current?.stop(), Y2.current?.stop();
    }, []), (0, h.useEffect)(() => {
      Y2.current?.stop();
      let t2 = null !== j2;
      if (t2) {
        let t3 = e2.indexOf(j2);
        t3 >= 0 && K2.set(N(t3));
      }
      let i3 = (0, n.animate)(D2, +!!t2, { duration: t2 ? 0.55 : 0.5, ease: A });
      Y2.current = { stop: () => i3.stop() };
    }, [j2, e2, K2, D2]);
    let Z = (0, h.useCallback)((t2) => {
      let i3 = 0, s3 = 1 / 0;
      for (let n2 = 0; n2 < e2.length; n2++) {
        let e3 = Math.abs(t2 - y2(n2));
        e3 < s3 && (s3 = e3, i3 = n2);
      }
      return i3;
    }, [e2, y2]), Q = (0, h.useCallback)((t2, i3) => {
      let s3 = !k2.current;
      s3 && (_2.current?.stop(), k2.current = true);
      let n2 = y2(f2) + i3.offset.x;
      w2.set(n2);
      let a2 = Z(n2);
      s3 && (x2.current = a2), a2 !== x2.current && (o2(Math.min(Math.abs(a2 - x2.current), 3), { animationDuration: 0.1 }), x2.current = a2), E2(e2[a2]);
    }, [e2, f2, y2, w2, o2, Z]), ee = (0, h.useCallback)(() => {
      k2.current = false;
      let t2 = Z(w2.get());
      if (S2(t2), G2(y2(t2)), E2(e2[t2]), e2[t2] !== i2) {
        let { clicks: i3, animationDuration: s3 } = W(Math.abs(t2 - f2));
        J2(N(t2), s3), i3 > 0 && o2(i3, { animationDuration: s3, bypassSingleVoiceGate: true, timeEase: M }), r2.push(`/changelog/${e2[t2]}`, { scroll: false });
      }
    }, [e2, w2, i2, f2, y2, r2, Z, G2, o2, J2]), et = B({ activeCenter: F2, activeStrength: X2, hoverCenter: H2, hoverStrength: D2, stripWidth: c2 });
    return (0, t.jsx)("div", { className: (0, m.cn)("relative", s2), children: (0, t.jsxs)("div", { className: "relative flex w-full items-end overflow-hidden pt-8 pb-9", style: { maskImage: R, WebkitMaskImage: R }, children: [(0, t.jsx)("span", { "aria-hidden": "true", className: "invisible w-px shrink-0", style: { height: "48px" } }), (0, t.jsxs)(a.motion.div, { className: "absolute bottom-9 left-1/2 -translate-x-1/2 cursor-grab active:cursor-grabbing", style: { height: "48px", touchAction: "pan-y", width: `${c2}px`, x: w2 }, onPan: Q, onPanEnd: ee, children: [e2.map((e3, i3) => (0, t.jsx)(P, { year: e3, leftPx: N(i3), isActive: i3 === U2, isHovered: e3 === j2 }, e3)), (0, t.jsx)(T, { stripWidth: c2, lineGeometry: et }), (0, t.jsx)(V, { stripWidth: c2, hoverCenter: H2, hoverStrength: D2, lineGeometry: et }), (0, t.jsx)(O, { stripWidth: c2, activeCenter: F2, activeStrength: X2, lineGeometry: et }), (0, t.jsx)("div", { className: "absolute flex", style: { height: "80px", left: "380px", top: "-32px", width: `${144 * e2.length}px` }, children: e2.map((e3, s3) => {
      let n2 = s3 === U2, a2 = e3 === i2;
      return (0, t.jsx)("button", { type: "button", "aria-label": `Browse changelog for ${e3}`, "aria-current": a2 ? "page" : void 0, onMouseEnter: () => {
        k2.current || E2(e3);
      }, onMouseLeave: () => {
        k2.current || E2((t2) => t2 === e3 ? null : t2);
      }, onClick: () => {
        if (n2) return;
        let { clicks: t2, animationDuration: i3 } = W(Math.abs(s3 - f2));
        S2(s3), G2(y2(s3)), J2(N(s3), i3), t2 > 0 && o2(t2, { animationDuration: i3, timeEase: M }), r2.push(`/changelog/${e3}`, { scroll: false });
      }, className: "flex-1 cursor-pointer" }, e3);
    }) })] })] }) });
  }
  function X({ allYears: e2, className: i2 }) {
    let s2 = Number.parseInt((0, d.useParams)().year, 10), n2 = (0, h.useMemo)(() => e2.toSorted((e3, t2) => e3 - t2), [e2]);
    return (0, t.jsxs)("nav", { "aria-label": "Browse changelog by year", className: (0, m.cn)("relative", i2), children: [(0, t.jsx)(F, { allYears: n2, currentYear: s2, className: "hidden lg:block" }), (0, t.jsx)(I, { allYears: n2, currentYear: s2, className: "lg:hidden" })] });
  }
  var K = e.i(308236), H = e.i(277592), D = e.i(894584), z = e.i(539277), Y = e.i(618807), G = e.i(223840);
  try {
    var J = window;
    J._sentryModuleMetadata = J._sentryModuleMetadata || {}, J._sentryModuleMetadata[new J.Error().stack] = Object.assign({}, J._sentryModuleMetadata[new J.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let q = /^\/changelog\/(\d{4})$/;
  e.s(["ArchiveHeader", 0, function({ allYears: e2, yearCounts: n2 }) {
    let a2 = (0, Y.useAppPathname)().match(q);
    if (!a2) return null;
    let r2 = Number.parseInt(a2[1], 10), l2 = n2[r2] ?? 0;
    return (0, t.jsx)(K.AttioContainer, { fullWidthMobile: true, children: (0, t.jsxs)("section", { className: "grid grid-cols-12", children: [(0, t.jsxs)("nav", { "aria-label": "breadcrumbs", className: "col-[2/-2] flex h-28 items-end justify-between pb-5", children: [(0, t.jsxs)("p", { className: "text-overline", children: [(0, t.jsx)(s.default, { href: "/changelog", className: (0, m.cn)("whitespace-nowrap text-accent-foreground", "transition-colors duration-400 ease-in-out", "hover:text-secondary-foreground hover:duration-150", "active:text-primary-foreground active:duration-50"), children: "Changelog" }), " ", "/", " ", (0, t.jsx)(i.default, { willChange: true, value: r2, format: { useGrouping: false }, className: "tabular-nums", style: { "--number-flow-mask-height": "1px" }, spinTiming: { duration: 400, easing: "cubic-bezier(0.4, 0, 0.2, 1)" } })] }), (0, t.jsxs)("p", { className: "text-caption-foreground text-overline", children: [(0, t.jsx)(i.default, { willChange: true, value: l2, className: "tabular-nums", style: { "--number-flow-mask-height": "1px" }, spinTiming: { duration: 400, easing: "cubic-bezier(0.4, 0, 0.2, 1)" } }), " ", 1 === l2 ? "update" : "updates"] })] }), (0, t.jsx)(D.AttioLine, { dashed: true, className: "col-[1/-1]" }), (0, t.jsx)(z.HeaderForHero, { title: "What\u2019s new", description: "The latest Attio releases, updates, and fixes.", className: "col-[2/-2] pt-15 text-primary-foreground md:pb-10 lg:pt-20", children: (0, t.jsx)(G.AnalyticsProvider, { location: "hero", children: (0, t.jsx)(H.CtaEmail, { className: "mt-6", layout: "row", analyticsEvent: "changelog_subscribe", customerEvent: "changelog_subscribed", successTitle: "Subscription successful", successDescription: "You've successfully subscribed to product updates. Keep an eye on your inbox, we'll be sending you the latest changes and updates every month.", children: "Subscribe" }) }) }), (0, t.jsx)(X, { allYears: e2, className: "col-[1/-1] mt-2 mb-10 lg:mb-15" })] }) });
  }], 155768);
}]);
