;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "fad86276-984e-0e8a-787f-2fd3d7b93c1d");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 189306, (t) => {
  "use strict";
  var e = t.i(856757), a = t.i(403432);
  try {
    var r = "u" > typeof window ? window : t.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  let o = Array(12).fill(0), s = ({ visible: t2, className: a2 }) => e.default.createElement("div", { className: ["sonner-loading-wrapper", a2].filter(Boolean).join(" "), "data-visible": t2 }, e.default.createElement("div", { className: "sonner-spinner" }, o.map((t3, a3) => e.default.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${a3}` })))), n = e.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20", "aria-hidden": "true" }, e.default.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), i = e.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20", "aria-hidden": "true" }, e.default.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), l = e.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20", "aria-hidden": "true" }, e.default.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), d = e.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20", "aria-hidden": "true" }, e.default.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), c = e.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, e.default.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), e.default.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), u = 1, f = (t2) => {
    var e2;
    return "number" == typeof (null == t2 ? void 0 : t2.id) || (null == t2 || null == (e2 = t2.id) ? void 0 : e2.length) > 0 ? t2.id : u++;
  }, m = new class {
    constructor() {
      this.subscribe = (t2) => (this.subscribers.push(t2), this.getActiveToasts().forEach((e2) => t2(e2)), () => {
        let e2 = this.subscribers.indexOf(t2);
        this.subscribers.splice(e2, 1);
      }), this.publish = (t2) => {
        this.subscribers.forEach((e2) => e2(t2));
      }, this.addToast = (t2) => {
        this.publish(t2), this.toasts = [...this.toasts, t2], this.trimHistory();
      }, this.trimHistory = () => {
        let t2 = this.toasts.length - 100;
        t2 <= 0 || (this.toasts = this.toasts.filter((e2) => !(t2 > 0 && this.dismissedToasts.has(e2.id)) || (this.dismissedToasts.delete(e2.id), t2--, false)));
      }, this.create = (t2) => {
        let { message: e2, ...a2 } = t2, r2 = f(t2), o2 = this.pendingDismissals.get(r2);
        void 0 !== o2 && (cancelAnimationFrame(o2), this.pendingDismissals.delete(r2), this.dismissedToasts.delete(r2));
        let s2 = this.dismissedToasts.has(r2), n2 = void 0 === t2.dismissible || t2.dismissible;
        return s2 && (this.dismissedToasts.delete(r2), this.toasts = this.toasts.filter((t3) => t3.id !== r2)), (s2 ? void 0 : this.toasts.find((t3) => t3.id === r2)) ? this.toasts = this.toasts.map((a3) => a3.id === r2 ? (this.publish({ ...a3, ...t2, id: r2, title: e2 }), { ...a3, ...t2, id: r2, dismissible: n2, title: e2 }) : a3) : this.addToast({ title: e2, ...a2, dismissible: n2, id: r2 }), r2;
      }, this.dismiss = (t2) => {
        if (null == t2) return this.getActiveToasts().forEach((t3) => {
          this.dismissedToasts.add(t3.id), this.subscribers.forEach((e3) => e3({ id: t3.id, dismiss: true }));
        }), t2;
        this.dismissedToasts.add(t2);
        let e2 = this.pendingDismissals.get(t2);
        return void 0 !== e2 && cancelAnimationFrame(e2), this.pendingDismissals.set(t2, requestAnimationFrame(() => {
          this.pendingDismissals.delete(t2), this.subscribers.forEach((e3) => e3({ id: t2, dismiss: true }));
        })), t2;
      }, this.message = (t2, e2) => this.create({ ...e2, message: t2, type: void 0 }), this.error = (t2, e2) => this.create({ ...e2, message: t2, type: "error" }), this.success = (t2, e2) => this.create({ ...e2, type: "success", message: t2 }), this.info = (t2, e2) => this.create({ ...e2, type: "info", message: t2 }), this.warning = (t2, e2) => this.create({ ...e2, type: "warning", message: t2 }), this.loading = (t2, e2) => this.create({ ...e2, type: "loading", message: t2 }), this.promise = (t2, a2) => {
        let r2, o2;
        if (!a2) return;
        void 0 !== a2.loading && (o2 = this.create({ ...a2, promise: t2, type: "loading", message: a2.loading, description: "function" != typeof a2.description ? a2.description : void 0 }));
        let s2 = Promise.resolve(t2 instanceof Function ? t2() : t2), n2 = void 0 !== o2, i2 = s2.then(async (t3) => {
          if (r2 = ["resolve", t3], e.default.isValidElement(t3)) n2 = false, this.create({ id: o2, type: "default", message: t3 });
          else if (p(t3) && !t3.ok) {
            n2 = false;
            let r3 = "function" == typeof a2.error ? await a2.error(`HTTP error! status: ${t3.status}`) : a2.error, s3 = "function" == typeof a2.description ? await a2.description(`HTTP error! status: ${t3.status}`) : a2.description, i3 = "object" != typeof r3 || e.default.isValidElement(r3) ? { message: r3 } : r3;
            this.create({ id: o2, type: "error", description: s3, ...i3 });
          } else if (t3 instanceof Error) {
            n2 = false;
            let r3 = "function" == typeof a2.error ? await a2.error(t3) : a2.error, s3 = "function" == typeof a2.description ? await a2.description(t3) : a2.description, i3 = "object" != typeof r3 || e.default.isValidElement(r3) ? { message: r3 } : r3;
            this.create({ id: o2, type: "error", description: s3, ...i3 });
          } else if (void 0 !== a2.success) {
            n2 = false;
            let r3 = "function" == typeof a2.success ? await a2.success(t3) : a2.success, s3 = "function" == typeof a2.description ? await a2.description(t3) : a2.description, i3 = "object" != typeof r3 || e.default.isValidElement(r3) ? { message: r3 } : r3;
            this.create({ id: o2, type: "success", description: s3, ...i3 });
          }
        }).catch(async (t3) => {
          if (r2 = ["reject", t3], void 0 !== a2.error) {
            n2 = false;
            let r3 = "function" == typeof a2.error ? await a2.error(t3) : a2.error, s3 = "function" == typeof a2.description ? await a2.description(t3) : a2.description, i3 = "object" != typeof r3 || e.default.isValidElement(r3) ? { message: r3 } : r3;
            this.create({ id: o2, type: "error", description: s3, ...i3 });
          }
        }).finally(() => {
          n2 && (this.dismiss(o2), o2 = void 0), null == a2.finally || a2.finally.call(a2);
        }), l2 = () => new Promise((t3, e2) => i2.then(() => "reject" === r2[0] ? e2(r2[1]) : t3(r2[1])).catch(e2));
        return "string" != typeof o2 && "number" != typeof o2 ? { unwrap: l2 } : Object.assign(o2, { unwrap: l2 });
      }, this.custom = (t2, e2) => {
        let a2 = f(e2);
        return this.create({ ...e2, jsx: t2(a2), id: a2, type: void 0 }), a2;
      }, this.getActiveToasts = () => this.toasts.filter((t2) => !this.dismissedToasts.has(t2.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set(), this.pendingDismissals = /* @__PURE__ */ new Map();
    }
  }(), p = (t2) => t2 && "object" == typeof t2 && "ok" in t2 && "boolean" == typeof t2.ok && "status" in t2 && "number" == typeof t2.status, h = Object.assign((t2, e2) => m.message(t2, e2), { success: m.success, info: m.info, warning: m.warning, error: m.error, custom: m.custom, message: m.message, promise: m.promise, dismiss: m.dismiss, loading: m.loading }, { getHistory: () => m.toasts, getToasts: () => m.getActiveToasts() });
  function g(t2) {
    return void 0 !== t2.label;
  }
  function y(...t2) {
    return t2.filter(Boolean).join(" ");
  }
  !(function(t2) {
    if (!t2 || "u" < typeof document) return;
    let e2 = document.head || document.getElementsByTagName("head")[0], a2 = document.createElement("style");
    a2.type = "text/css", e2.appendChild(a2), a2.styleSheet ? a2.styleSheet.cssText = t2 : a2.appendChild(document.createTextNode(t2));
  })("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
  let v = (t2) => {
    var a2, r2, o2, u2, f2, m2, p2, h2, v2, b2, x2;
    let { invert: w, toast: E, unstyled: k, interacting: M, setHeights: j, visibleToasts: N, heights: T, index: S, toasts: C, expanded: B, removeToast: A, defaultRichColors: P, closeButton: z, style: R, cancelButtonStyle: D, actionButtonStyle: _, className: I = "", descriptionClassName: O = "", duration: Y, position: $, gap: L, expandByDefault: F, classNames: H, icons: K, closeButtonAriaLabel: V = "Close toast" } = t2, [U, X] = e.default.useState(null), [q, W] = e.default.useState(null), [G, J] = e.default.useState(false), [Q, Z] = e.default.useState(false), [tt, te] = e.default.useState(false), [ta, tr] = e.default.useState(false), [to, ts] = e.default.useState(false), [tn, ti] = e.default.useState(0), [tl, td] = e.default.useState(0), tc = e.default.useRef(E.duration || Y || 4e3), tu = e.default.useRef(null), tf = e.default.useRef(null), tm = 0 === S, tp = S + 1 <= N, th = E.type, tg = null != th ? th : "default", ty = false !== E.dismissible, tv = E.className || "", tb = E.descriptionClassName || "", tx = e.default.useMemo(() => T.findIndex((t3) => t3.toastId === E.id) || 0, [T, E.id]), tw = e.default.useMemo(() => {
      var t3;
      return null != (t3 = E.closeButton) ? t3 : z;
    }, [E.closeButton, z]), tE = e.default.useMemo(() => E.duration || Y || 4e3, [E.duration, Y]), tk = e.default.useRef(0), tM = e.default.useRef(0), tj = e.default.useRef(0), tN = e.default.useRef(null), [tT, tS] = $.split("-"), tC = e.default.useMemo(() => T.reduce((t3, e2, a3) => a3 >= tx ? t3 : t3 + e2.height, 0), [T, tx]), tB = (() => {
      let [t3, a3] = e.default.useState(document.hidden);
      return e.default.useEffect(() => {
        let t4 = () => {
          a3(document.hidden);
        };
        return document.addEventListener("visibilitychange", t4), () => document.removeEventListener("visibilitychange", t4);
      }, []), t3;
    })(), tA = e.default.useMemo(() => {
      var e2;
      return null != (e2 = t2.swipeDirections) ? e2 : (function(t3) {
        let [e3, a3] = t3.split("-"), r3 = [];
        return e3 && r3.push(e3), a3 && r3.push(a3), r3;
      })($);
    }, [t2.swipeDirections, $]), tP = E.invert || w, tz = "loading" === th;
    tM.current = e.default.useMemo(() => tx * L + tC, [tx, tC]), e.default.useEffect(() => {
      tc.current = tE;
    }, [tE]), e.default.useEffect(() => {
      J(true);
    }, []), e.default.useEffect(() => {
      let t3 = tf.current;
      if (t3) {
        let e2 = t3.getBoundingClientRect().height;
        return td(e2), j((t4) => [{ toastId: E.id, height: e2, position: E.position }, ...t4]), () => j((t4) => t4.filter((t5) => t5.toastId !== E.id));
      }
    }, [j, E.id]), e.default.useLayoutEffect(() => {
      if (!G) return;
      let t3 = tf.current, e2 = t3.style.height;
      t3.style.height = "auto";
      let a3 = t3.getBoundingClientRect().height;
      t3.style.height = e2, td(a3), j((t4) => t4.find((t5) => t5.toastId === E.id) ? t4.map((t5) => t5.toastId === E.id ? { ...t5, height: a3 } : t5) : [{ toastId: E.id, height: a3, position: E.position }, ...t4]);
    }, [G, E.title, E.description, j, E.id, E.jsx, E.action, E.cancel]);
    let tR = e.default.useCallback(() => {
      Z(true), ti(tM.current), j((t3) => t3.filter((t4) => t4.toastId !== E.id)), setTimeout(() => {
        A(E);
      }, 200);
    }, [E, A, j, tM]);
    function tD() {
      var t3, a3;
      return (null == K ? void 0 : K.loading) ? e.default.createElement("div", { className: y(null == H ? void 0 : H.loader, null == E || null == (a3 = E.classNames) ? void 0 : a3.loader, "sonner-loader"), "data-visible": "loading" === th }, K.loading) : e.default.createElement(s, { className: y(null == H ? void 0 : H.loader, null == E || null == (t3 = E.classNames) ? void 0 : t3.loader), visible: "loading" === th });
    }
    e.default.useEffect(() => {
      let t3;
      if ((!E.promise || "loading" !== th) && E.duration !== 1 / 0 && "loading" !== E.type) {
        if (B || M || tB) {
          if (tj.current < tk.current) {
            let t4 = (/* @__PURE__ */ new Date()).getTime() - tk.current;
            tc.current = tc.current - t4;
          }
          tj.current = (/* @__PURE__ */ new Date()).getTime();
        } else tc.current !== 1 / 0 && (tk.current = (/* @__PURE__ */ new Date()).getTime(), t3 = setTimeout(() => {
          null == E.onAutoClose || E.onAutoClose.call(E, E), tR();
        }, tc.current));
        return () => clearTimeout(t3);
      }
    }, [B, M, E, th, tB, tR]), e.default.useEffect(() => {
      E.delete && (tR(), null == E.onDismiss || E.onDismiss.call(E, E));
    }, [tR, E.delete]);
    let t_ = E.icon || (null == K ? void 0 : K[th]) || ((t3) => {
      switch (t3) {
        case "success":
          return n;
        case "info":
          return l;
        case "warning":
          return i;
        case "error":
          return d;
        default:
          return null;
      }
    })(th);
    return e.default.createElement("li", { tabIndex: 0, ref: tf, className: y(I, tv, null == H ? void 0 : H.toast, null == E || null == (a2 = E.classNames) ? void 0 : a2.toast, null == H ? void 0 : H[tg], null == E || null == (r2 = E.classNames) ? void 0 : r2[tg]), "data-sonner-toast": "", "data-rich-colors": null != (b2 = E.richColors) ? b2 : P, "data-styled": !(E.jsx || E.unstyled || k), "data-mounted": G, "data-promise": !!E.promise, "data-swiped": to, "data-removed": Q, "data-visible": tp, "data-y-position": tT, "data-x-position": tS, "data-index": S, "data-front": tm, "data-swiping": tt, "data-dismissible": ty, "data-type": th, "data-invert": tP, "data-swipe-out": ta, "data-swipe-direction": q, "data-expanded": !!(B || F && G), "data-testid": E.testId, style: { "--index": S, "--toasts-before": S, "--z-index": C.length - S, "--offset": `${Q ? tn : tM.current}px`, "--initial-height": F ? "auto" : `${tl}px`, ...R, ...E.style }, onDragEnd: () => {
      te(false), X(null), tN.current = null;
    }, onPointerDown: (t3) => {
      2 === t3.button || tz || !ty || (tu.current = /* @__PURE__ */ new Date(), ti(tM.current), t3.target.setPointerCapture(t3.pointerId), "BUTTON" !== t3.target.tagName && (te(true), tN.current = { x: t3.clientX, y: t3.clientY }));
    }, onPointerUp: () => {
      var t3, e2, a3, r3, o3;
      if (ta || !ty) return;
      tN.current = null;
      let s2 = Number((null == (t3 = tf.current) ? void 0 : t3.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), n2 = Number((null == (e2 = tf.current) ? void 0 : e2.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), i2 = (/* @__PURE__ */ new Date()).getTime() - (null == (a3 = tu.current) ? void 0 : a3.getTime()), l2 = "x" === U ? s2 : n2, d2 = Math.abs(l2) / i2;
      if (("x" === U ? tA.includes(s2 > 0 ? "right" : "left") : tA.includes(n2 > 0 ? "bottom" : "top")) && (Math.abs(l2) >= 45 || d2 > 0.11)) {
        ti(tM.current), null == E.onDismiss || E.onDismiss.call(E, E), "x" === U ? W(s2 > 0 ? "right" : "left") : W(n2 > 0 ? "down" : "up"), tR(), tr(true);
        return;
      }
      null == (r3 = tf.current) || r3.style.setProperty("--swipe-amount-x", "0px"), null == (o3 = tf.current) || o3.style.setProperty("--swipe-amount-y", "0px"), ts(false), te(false), X(null);
    }, onPointerMove: (t3) => {
      var e2, a3, r3;
      if (!tN.current || !ty || (null == (e2 = window.getSelection()) ? void 0 : e2.toString().length) > 0) return;
      let o3 = t3.clientY - tN.current.y, s2 = t3.clientX - tN.current.x;
      !U && (Math.abs(s2) > 1 || Math.abs(o3) > 1) && X(Math.abs(s2) > Math.abs(o3) ? "x" : "y");
      let n2 = { x: 0, y: 0 }, i2 = (t4) => 1 / (1.5 + Math.abs(t4) / 20);
      if ("y" === U) {
        if (tA.includes("top") || tA.includes("bottom")) if (tA.includes("top") && o3 < 0 || tA.includes("bottom") && o3 > 0) n2.y = o3;
        else {
          let t4 = o3 * i2(o3);
          n2.y = Math.abs(t4) < Math.abs(o3) ? t4 : o3;
        }
      } else if ("x" === U && (tA.includes("left") || tA.includes("right"))) if (tA.includes("left") && s2 < 0 || tA.includes("right") && s2 > 0) n2.x = s2;
      else {
        let t4 = s2 * i2(s2);
        n2.x = Math.abs(t4) < Math.abs(s2) ? t4 : s2;
      }
      (Math.abs(n2.x) > 0 || Math.abs(n2.y) > 0) && ts(true), null == (a3 = tf.current) || a3.style.setProperty("--swipe-amount-x", `${n2.x}px`), null == (r3 = tf.current) || r3.style.setProperty("--swipe-amount-y", `${n2.y}px`);
    } }, tw && !E.jsx && "loading" !== th ? e.default.createElement("button", { "aria-label": V, "data-disabled": tz, "data-close-button": true, onClick: tz || !ty ? () => {
    } : () => {
      tR(), null == E.onDismiss || E.onDismiss.call(E, E);
    }, className: y(null == H ? void 0 : H.closeButton, null == E || null == (o2 = E.classNames) ? void 0 : o2.closeButton) }, null != (x2 = null == K ? void 0 : K.close) ? x2 : c) : null, (th || E.icon || E.promise) && null !== E.icon && ((null == K ? void 0 : K[th]) !== null || E.icon) ? e.default.createElement("div", { "data-icon": "", className: y(null == H ? void 0 : H.icon, null == E || null == (u2 = E.classNames) ? void 0 : u2.icon) }, "loading" === th ? E.icon || tD() : E.promise ? tD() : null, "loading" !== th ? t_ : null) : null, e.default.createElement("div", { "data-content": "", className: y(null == H ? void 0 : H.content, null == E || null == (f2 = E.classNames) ? void 0 : f2.content) }, e.default.createElement("div", { "data-title": "", className: y(null == H ? void 0 : H.title, null == E || null == (m2 = E.classNames) ? void 0 : m2.title) }, E.jsx ? E.jsx : "function" == typeof E.title ? E.title() : E.title), E.description ? e.default.createElement("div", { "data-description": "", className: y(O, tb, null == H ? void 0 : H.description, null == E || null == (p2 = E.classNames) ? void 0 : p2.description) }, "function" == typeof E.description ? E.description() : E.description) : null), e.default.isValidElement(E.cancel) ? E.cancel : E.cancel && g(E.cancel) ? e.default.createElement("button", { "data-button": true, "data-cancel": true, style: E.cancelButtonStyle || D, onClick: (t3) => {
      !g(E.cancel) || ty && (null == E.cancel.onClick || E.cancel.onClick.call(E.cancel, t3), tR());
    }, className: y(null == H ? void 0 : H.cancelButton, null == E || null == (h2 = E.classNames) ? void 0 : h2.cancelButton) }, E.cancel.label) : null, e.default.isValidElement(E.action) ? E.action : E.action && g(E.action) ? e.default.createElement("button", { "data-button": true, "data-action": true, style: E.actionButtonStyle || _, onClick: (t3) => {
      !g(E.action) || (null == E.action.onClick || E.action.onClick.call(E.action, t3), t3.defaultPrevented || tR());
    }, className: y(null == H ? void 0 : H.actionButton, null == E || null == (v2 = E.classNames) ? void 0 : v2.actionButton) }, E.action.label) : null);
  };
  function b() {
    if ("u" < typeof window || "u" < typeof document) return "ltr";
    let t2 = document.documentElement.getAttribute("dir");
    return "auto" !== t2 && t2 ? t2 : window.getComputedStyle(document.documentElement).direction;
  }
  let x = e.default.forwardRef(function(t2, r2) {
    let { id: o2, invert: s2, position: n2 = "bottom-right", hotkey: i2 = ["altKey", "KeyT"], expand: l2, closeButton: d2, className: c2, offset: u2, mobileOffset: f2, theme: p2 = "light", richColors: h2, duration: g2, style: y2, visibleToasts: x2 = 3, toastOptions: w, dir: E = b(), gap: k = 14, icons: M, customAriaLabel: j, containerAriaLabel: N = "Notifications" } = t2, [T, S] = e.default.useState([]), C = e.default.useMemo(() => o2 ? T.filter((t3) => t3.toasterId === o2) : T.filter((t3) => !t3.toasterId), [T, o2]), B = e.default.useMemo(() => Array.from(new Set([n2].concat(C.filter((t3) => t3.position).map((t3) => t3.position)))), [C, n2]), [A, P] = e.default.useState([]), [z, R] = e.default.useState(false), [D, _] = e.default.useState(false), [I, O] = e.default.useState("system" !== p2 ? p2 : "u" > typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), Y = e.default.useRef(null), $ = i2.join("+").replace(/Key/g, "").replace(/Digit/g, ""), L = e.default.useRef(null), F = e.default.useRef(false), H = e.default.useCallback((t3) => {
      S((e2) => {
        var a2;
        return (null == (a2 = e2.find((e3) => e3.id === t3.id)) ? void 0 : a2.delete) || m.dismiss(t3.id), e2.filter(({ id: e3 }) => e3 !== t3.id);
      });
    }, []);
    return e.default.useEffect(() => m.subscribe((t3) => {
      t3.dismiss ? requestAnimationFrame(() => {
        S((e2) => e2.map((e3) => e3.id === t3.id ? { ...e3, delete: true } : e3));
      }) : setTimeout(() => {
        a.default.flushSync(() => {
          S((e2) => {
            let a2 = e2.findIndex((e3) => e3.id === t3.id);
            return -1 !== a2 ? [...e2.slice(0, a2), { ...e2[a2], ...t3 }, ...e2.slice(a2 + 1)] : [t3, ...e2];
          });
        });
      });
    }), []), e.default.useEffect(() => {
      if ("system" !== p2) return void O(p2);
      if ("system" === p2 && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? O("dark") : O("light")), "u" < typeof window) return;
      let t3 = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        t3.addEventListener("change", ({ matches: t4 }) => {
          t4 ? O("dark") : O("light");
        });
      } catch (e2) {
        t3.addListener(({ matches: t4 }) => {
          try {
            t4 ? O("dark") : O("light");
          } catch (t5) {
            console.error(t5);
          }
        });
      }
    }, [p2]), e.default.useEffect(() => {
      T.length <= 1 && R(false);
    }, [T]), e.default.useEffect(() => {
      let t3 = (t4) => {
        var e2, a2;
        i2.length > 0 && i2.every((e3) => t4[e3] || t4.code === e3) && (R(true), null == (a2 = Y.current) || a2.focus()), "Escape" === t4.code && (document.activeElement === Y.current || (null == (e2 = Y.current) ? void 0 : e2.contains(document.activeElement))) && R(false);
      };
      return document.addEventListener("keydown", t3), () => document.removeEventListener("keydown", t3);
    }, [i2]), e.default.useEffect(() => {
      if (Y.current) return () => {
        L.current && (L.current.focus({ preventScroll: true }), L.current = null, F.current = false);
      };
    }, [Y.current]), e.default.createElement("section", { ref: r2, "aria-label": null != j ? j : `${N} ${$}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: true, "data-react-aria-top-layer": true }, B.map((a2, r3) => {
      var o3;
      let n3, [i3, m2] = a2.split("-");
      return C.length ? e.default.createElement("ol", { key: a2, dir: "auto" === E ? b() : E, tabIndex: -1, ref: Y, className: c2, "data-sonner-toaster": true, "data-sonner-theme": I, "data-y-position": i3, "data-x-position": m2, style: { "--front-toast-height": `${(null == (o3 = A[0]) ? void 0 : o3.height) || 0}px`, "--width": "356px", "--gap": `${k}px`, ...y2, ...(n3 = {}, [u2, f2].forEach((t3, e2) => {
        let a3 = 1 === e2, r4 = a3 ? "--mobile-offset" : "--offset", o4 = a3 ? "16px" : "24px";
        function s3(t4) {
          ["top", "right", "bottom", "left"].forEach((e3) => {
            n3[`${r4}-${e3}`] = "number" == typeof t4 ? `${t4}px` : t4;
          });
        }
        "number" == typeof t3 || "string" == typeof t3 ? s3(t3) : "object" == typeof t3 ? ["top", "right", "bottom", "left"].forEach((e3) => {
          void 0 === t3[e3] ? n3[`${r4}-${e3}`] = o4 : n3[`${r4}-${e3}`] = "number" == typeof t3[e3] ? `${t3[e3]}px` : t3[e3];
        }) : s3(o4);
      }), n3) }, onBlur: (t3) => {
        F.current && !t3.currentTarget.contains(t3.relatedTarget) && (F.current = false, L.current && (L.current.focus({ preventScroll: true }), L.current = null));
      }, onFocus: (t3) => {
        !(t3.target instanceof HTMLElement && "false" === t3.target.dataset.dismissible) && (F.current || (F.current = true, L.current = t3.relatedTarget));
      }, onMouseEnter: () => R(true), onMouseMove: () => R(true), onMouseLeave: () => {
        D || R(false);
      }, onDragEnd: () => R(false), onPointerDown: (t3) => {
        t3.target instanceof HTMLElement && "false" === t3.target.dataset.dismissible || _(true);
      }, onPointerUp: () => _(false) }, C.filter((t3) => !t3.position && 0 === r3 || t3.position === a2).map((r4, o4) => {
        var n4, i4;
        return e.default.createElement(v, { key: r4.id, icons: M, index: o4, toast: r4, defaultRichColors: h2, duration: null != (n4 = null == w ? void 0 : w.duration) ? n4 : g2, className: null == w ? void 0 : w.className, descriptionClassName: null == w ? void 0 : w.descriptionClassName, invert: s2, visibleToasts: x2, closeButton: null != (i4 = null == w ? void 0 : w.closeButton) ? i4 : d2, interacting: D, position: a2, style: null == w ? void 0 : w.style, unstyled: null == w ? void 0 : w.unstyled, classNames: null == w ? void 0 : w.classNames, cancelButtonStyle: null == w ? void 0 : w.cancelButtonStyle, actionButtonStyle: null == w ? void 0 : w.actionButtonStyle, closeButtonAriaLabel: null == w ? void 0 : w.closeButtonAriaLabel, removeToast: H, toasts: C.filter((t3) => t3.position == r4.position), heights: A.filter((t3) => t3.position == r4.position), setHeights: P, expandByDefault: l2, gap: k, expanded: z, swipeDirections: t2.swipeDirections });
      })) : null;
    }));
  });
  t.s(["Toaster", 0, x, "toast", 0, h]);
}, 96881, (t) => {
  "use strict";
  var e = t.i(68982), a = t.i(856757), r = t.i(366279), r = r, o = t.i(104143), s = t.i(167815), n = t.i(140707), i = t.i(56386), l = t.i(985731), d = t.i(397441), c = t.i(255368), u = t.i(551360);
  try {
    var f = window;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function m({ triggerRef: t2, isOpen: f2, onClose: p2 }) {
    let [h2, g2] = (0, a.useState)("initial"), [y2, v2] = (0, a.useState)();
    return (0, a.useEffect)(() => {
      f2 || g2("initial");
    }, [f2]), (0, e.jsx)(r.Root, { open: f2, onOpenChange: p2, children: (0, e.jsx)(r.Portal, { children: (0, e.jsx)(r.Overlay, { className: (0, u.cn)("fixed inset-0 z-(--dialog-overlay-z-index) flex justify-center overflow-y-scroll bg-black-100/50 p-3 backdrop-blur-xs", "data-open:fade-in duration-300 data-open:animate-in data-open:ease-out"), children: (0, e.jsxs)(r.Content, { className: (0, u.cn)("relative z-(--dialog-content-z-index) my-auto w-full max-w-xl origin-top rounded-3xl bg-surface-subtle p-8", "data-open:animate-in data-open:duration-300 data-open:ease-out", "data-open:fade-in-30 data-open:zoom-in-90 data-open:slide-in-from-bottom-6"), onCloseAutoFocus: (e2) => {
      e2.preventDefault(), "function" == typeof t2?.current?.focus && t2.current.focus();
    }, children: [(0, e.jsx)(r.Close, { asChild: true, children: (0, e.jsx)(s.Button, { className: "absolute top-8 right-8", variant: "outline", size: "smSquare", "aria-label": "Close dialog", children: (0, e.jsx)(d.Cross18, {}) }) }), "success" !== h2 && (0, e.jsxs)(e.Fragment, { children: [(0, e.jsx)(r.Title, { className: "text-heading-sm text-secondary-foreground", children: "Nearly there!" }), (0, e.jsx)(r.Description, { className: "mt-1.5 font-normal text-tertiary-foreground", children: "Just a few more details..." }), "failure" === h2 && (0, e.jsx)(n.FormFailure, { className: "mt-8", children: y2 || (0, e.jsxs)(e.Fragment, { children: ["We couldn't process your application automatically. Please reach out to", " ", (0, e.jsx)(l.LinkInline, { href: "mailto:sales@attio.com", children: "sales@attio.com" })] }) }), (0, e.jsx)(o.TalkToSalesForm, { className: "mt-8", onSuccess: function() {
      g2("success");
    }, onFailure: function(t3) {
      g2("failure"), v2(t3);
    } }), (0, e.jsx)(c.CaptchaAttribution, { className: "mt-6" })] }), "success" === h2 && (0, e.jsxs)(i.FormSuccess, { className: "pt-[111px] pb-[102px]", children: [(0, e.jsxs)("h2", { className: "text-center text-heading-sm text-secondary-foreground", children: [(0, e.jsx)("span", { className: "md:hidden", children: "We've received your application!" }), (0, e.jsx)("span", { className: "hidden md:inline", children: "We'll be in touch soon!" })] }), (0, e.jsxs)("p", { className: "text-center text-base text-tertiary-foreground md:max-w-[420px]", children: [(0, e.jsxs)("span", { className: "md:hidden", children: ["Our team will review your application shortly. If you have any questions, please email us at", " ", (0, e.jsx)(l.LinkInline, { href: "mailto:sales@attio.com", children: "sales@attio.com" }), "."] }), (0, e.jsxs)("span", { className: "hidden md:contents", children: ["Our team will be in touch soon. If you have any questions, please email us at", " ", (0, e.jsx)(l.LinkInline, { href: "mailto:sales@attio.com", children: "sales@attio.com" }), "."] })] })] })] }) }) }) });
  }
  var p = t.i(992766), h = t.i(618807);
  try {
    var g = window;
    g._sentryModuleMetadata = g._sentryModuleMetadata || {}, g._sentryModuleMetadata[new g.Error().stack] = Object.assign({}, g._sentryModuleMetadata[new g.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  function y({ onOpen: t2 }) {
    let e2 = (0, p.useSearchParams)(), r2 = (0, h.useAppPathname)(), o2 = (0, p.useRouter)();
    return (0, a.useEffect)(() => {
      if ("talk-to-sales" === e2.get("m")) {
        t2("query_params");
        let a2 = new URLSearchParams(e2.toString());
        a2.delete("m");
        let s2 = a2.toString();
        o2.replace(s2 ? `${r2}?${s2}` : r2);
      }
    }, [e2, o2, r2, t2]), null;
  }
  var v = t.i(770902), b = t.i(150669);
  try {
    var x = window;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["TalkToSalesProvider", 0, function({ children: t2 }) {
    let [{ triggerRef: r2, isOpen: o2 }, s2] = (0, a.useState)({ isOpen: false, triggerRef: null }), n2 = (0, b.useAnalyticsTrack)("sales", "open_sales_enquiry"), i2 = (0, a.useCallback)((t3, e2) => {
      n2(t3), s2({ isOpen: true, triggerRef: e2 ?? null });
    }, [n2]), l2 = (0, a.useCallback)(() => {
      s2({ isOpen: false, triggerRef: null });
    }, []);
    return (0, e.jsxs)(v.TalkToSalesContext.Provider, { value: { onOpen: i2 }, children: [t2, (0, e.jsx)(a.Suspense, { children: (0, e.jsx)(y, { onOpen: i2 }) }), (0, e.jsx)(m, { triggerRef: r2, isOpen: o2, onClose: l2 })] });
  }], 96881);
}, 255368, (t) => {
  "use strict";
  var e = t.i(68982), a = t.i(551360);
  try {
    var r = window;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (t2) {
  }
  t.s(["CaptchaAttribution", 0, function({ className: t2 }) {
    return (0, e.jsxs)("p", { className: (0, a.cn)("max-w-[36em] text-balance text-accent-foreground text-xs", t2), children: ["This site is protected by reCAPTCHA and the Google", " ", (0, e.jsx)("a", { href: "https://policies.google.com/privacy", className: "underline", children: "Privacy Policy" }), " ", "and", " ", (0, e.jsx)("a", { href: "https://policies.google.com/terms", className: "underline", children: "Terms of Service" }), " ", "apply."] });
  }]);
}]);
